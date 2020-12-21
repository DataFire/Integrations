# @datafire/velopayments

Client library for Velo Payments APIs

## Installation and Usage
```bash
npm install --save @datafire/velopayments
```
```js
let velopayments = require('@datafire/velopayments').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
  username: "",
  password: ""
});

.then(data => {
  console.log(data);
});
```

## Description

## Terms and Definitions

Throughout this document and the Velo platform the following terms are used:

* **Payor.** An entity (typically a corporation) which wishes to pay funds to one or more payees via a payout.
* **Payee.** The recipient of funds paid out by a payor.
* **Payment.** A single transfer of funds from a payor to a payee.
* **Payout.** A batch of Payments, typically used by a payor to logically group payments (e.g. by business day). Technically there need be no relationship between the payments in a payout - a single payout can contain payments to multiple payees and/or multiple payments to a single payee.
* **Sandbox.** An integration environment provided by Velo Payments which offers a similar API experience to the production environment, but all funding and payment events are simulated, along with many other services such as OFAC sanctions list checking.

## Overview

The Velo Payments API allows a payor to perform a number of operations. The following is a list of the main capabilities in a natural order of execution:

* Authenticate with the Velo platform
* Maintain a collection of payees
* Query the payor’s current balance of funds within the platform and perform additional funding
* Issue payments to payees
* Query the platform for a history of those payments

This document describes the main concepts and APIs required to get up and running with the Velo Payments platform. It is not an exhaustive API reference. For that, please see the separate Velo Payments API Reference.

## API Considerations

The Velo Payments API is REST based and uses the JSON format for requests and responses.

Most calls are secured using OAuth 2 security and require a valid authentication access token for successful operation. See the Authentication section for details.

Where a dynamic value is required in the examples below, the {token} format is used, suggesting that the caller needs to supply the appropriate value of the token in question (without including the { or } characters).

Where curl examples are given, the –d @filename.json approach is used, indicating that the request body should be placed into a file named filename.json in the current directory. Each of the curl examples in this document should be considered a single line on the command-line, regardless of how they appear in print.

## Authenticating with the Velo Platform

Once Velo backoffice staff have added your organization as a payor within the Velo platform sandbox, they will create you a payor Id, an API key and an API secret and share these with you in a secure manner.

You will need to use these values to authenticate with the Velo platform in order to gain access to the APIs. The steps to take are explained in the following:

create a string comprising the API key (e.g. 44a9537d-d55d-4b47-8082-14061c2bcdd8) and API secret (e.g. c396b26b-137a-44fd-87f5-34631f8fd529) with a colon between them. E.g. 44a9537d-d55d-4b47-8082-14061c2bcdd8:c396b26b-137a-44fd-87f5-34631f8fd529

base64 encode this string. E.g.: NDRhOTUzN2QtZDU1ZC00YjQ3LTgwODItMTQwNjFjMmJjZGQ4OmMzOTZiMjZiLTEzN2EtNDRmZC04N2Y1LTM0NjMxZjhmZDUyOQ==

create an HTTP **Authorization** header with the value set to e.g. Basic NDRhOTUzN2QtZDU1ZC00YjQ3LTgwODItMTQwNjFjMmJjZGQ4OmMzOTZiMjZiLTEzN2EtNDRmZC04N2Y1LTM0NjMxZjhmZDUyOQ==

perform the Velo authentication REST call using the HTTP header created above e.g. via curl:

```
  curl -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Basic NDRhOTUzN2QtZDU1ZC00YjQ3LTgwODItMTQwNjFjMmJjZGQ4OmMzOTZiMjZiLTEzN2EtNDRmZC04N2Y1LTM0NjMxZjhmZDUyOQ==" \
  'https://api.sandbox.velopayments.com/v1/authenticate?grant_type=client_credentials'
```

If successful, this call will result in a **200** HTTP status code and a response body such as:

```
  {
    "access_token":"19f6bafd-93fd-4747-b229-00507bbc991f",
    "token_type":"bearer",
    "expires_in":1799,
    "scope":"..."
  }
```
## API access following authentication
Following successful authentication, the value of the access_token field in the response (indicated in green above) should then be presented with all subsequent API calls to allow the Velo platform to validate that the caller is authenticated.

This is achieved by setting the HTTP Authorization header with the value set to e.g. Bearer 19f6bafd-93fd-4747-b229-00507bbc991f such as the curl example below:

```
  -H "Authorization: Bearer 19f6bafd-93fd-4747-b229-00507bbc991f "
```

If you make other Velo API calls which require authorization but the Authorization header is missing or invalid then you will get a **401** HTTP status response.


## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
velopayments.oauthCallback({
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
velopayments.oauthRefresh(null, context)
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

### veloAuth
Use this endpoint to obtain an access token for calling Velo Payments APIs. Use HTTP Basic Auth. String value of
Basic and a Base64 endcoded string comprising the API key (e.g. 44a9537d-d55d-4b47-8082-14061c2bcdd8) and API
secret  (e.g. c396b26b-137a-44fd-87f5-34631f8fd529) with a colon between them. E.g. Basic 44a9537d-d55d-4b47-8082-14061c2bcdd8:c396b26b-137a-44fd-87f5-34631f8fd529



```js
velopayments.veloAuth({}, context)
```

#### Input
* input `object`
  * grant_type `string`: OAuth grant type. Should use 'client_credentials'

#### Output
* output [AuthResponse](#authresponse)

### listFundingAuditDeltas
Get funding audit deltas for a payor


```js
velopayments.listFundingAuditDeltas({
  "payorId": "",
  "updatedSince": ""
}, context)
```

#### Input
* input `object`
  * payorId **required** `string`
  * updatedSince **required** `string`
  * page `integer`: Page number. Default is 1.
  * pageSize `integer`: The number of results to return in a page

#### Output
* output [PageResourceFundingPayorStatusAuditResponseFundingPayorStatusAuditResponse](#pageresourcefundingpayorstatusauditresponsefundingpayorstatusauditresponse)

### listPayeeChanges
<p>Get a paginated response listing payee changes.</p>
<p>Please use V3 instead.</p>



```js
velopayments.listPayeeChanges({
  "payorId": "",
  "updatedSince": ""
}, context)
```

#### Input
* input `object`
  * payorId **required** `string`: The Payor ID to find associated Payees
  * updatedSince **required** `string`: The updatedSince filter in the format YYYY-MM-DDThh:mm:ss+hh:mm
  * page `integer`: Page number. Default is 1.
  * pageSize `integer`: Page size. Default is 100. Max allowable is 1000.

#### Output
* output [PayeeDeltaResponse](#payeedeltaresponse)

### listPaymentChanges
Get a paginated response listing payment changes.


```js
velopayments.listPaymentChanges({
  "payorId": "",
  "updatedSince": ""
}, context)
```

#### Input
* input `object`
  * payorId **required** `string`: The Payor ID to find associated Payments
  * updatedSince **required** `string`: The updatedSince filter in the format YYYY-MM-DDThh:mm:ss+hh:mm
  * page `integer`: Page number. Default is 1.
  * pageSize `integer`: The number of results to return in a page

#### Output
* output [PaymentDeltaResponse](#paymentdeltaresponse)

### getFundingAccounts
Get the funding accounts.


```js
velopayments.getFundingAccounts({}, context)
```

#### Input
* input `object`
  * payorId `string`
  * sourceAccountId `string`
  * page `integer`: Page number. Default is 1.
  * pageSize `integer`: The number of results to return in a page
  * sort `string`: List of sort fields (e.g. ?sort=accountName:asc,name:asc) Default is accountName:asc The supported sort fields are - accountName, name and currency.
  * sensitive `boolean`

#### Output
* output [ListFundingAccountsResponse](#listfundingaccountsresponse)

### getFundingAccount
Get Funding Account by ID


```js
velopayments.getFundingAccount({
  "fundingAccountId": ""
}, context)
```

#### Input
* input `object`
  * fundingAccountId **required** `string`
  * sensitive `boolean`

#### Output
* output [FundingAccountResponse](#fundingaccountresponse)

### logout
<p>Given a valid access token in the header then log out the authenticated user or client </p>
<p>Will revoke the token</p>



```js
velopayments.logout(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### resetPassword
<p>Reset password </p>
<p>An email with an embedded link will be sent to the receipient of the email address </p>
<p>The link will contain a token to be used for resetting the password </p>



```js
velopayments.resetPassword({
  "body": {
    "email": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [ResetPasswordRequest](#resetpasswordrequest)

#### Output
*Output schema unknown*

### listPayeesV1
<p>Get a paginated response listing the payees for a payor.</p>
<p>Please use V3 instead.</>



```js
velopayments.listPayeesV1({
  "payorId": ""
}, context)
```

#### Input
* input `object`
  * payorId **required** `string`: The account owner Payor ID
  * ofacStatus `string` (values: PENDING, PASSED, FAILED): The ofacStatus of the payees.
  * onboardedStatus `string` (values: CREATED, INVITED, REGISTERED, ONBOARDED): The onboarded status of the payees.
  * email `string`: Email address
  * displayName `string`: The display name of the payees.
  * remoteId `string`: The remote id of the payees.
  * payeeType `string` (values: Individual, Company): The onboarded status of the payees.
  * payeeCountry `string`: The country of the payee - 2 letter ISO 3166-1 country code (upper case)
  * page `integer`: Page number. Default is 1.
  * pageSize `integer`: Page size. Default is 25. Max allowable is 100.
  * sort `string`: List of sort fields (e.g. ?sort=onboardedStatus:asc,name:asc) Default is name:asc 'name' is treated as company name for companies - last name + ',' + firstName for individuals The supported sort fields are - payeeId, displayName, payoutStatus, onboardedStatus.

#### Output
* output [PagedPayeeResponse](#pagedpayeeresponse)

### getPayeesInvitationStatusV1
<p>Returns a list of payees associated with a payor, along with invitation status and grace period end date.</p>
<p>Please use V3 instead</p>



```js
velopayments.getPayeesInvitationStatusV1({
  "payorId": ""
}, context)
```

#### Input
* input `object`
  * payorId **required** `string`: The account owner Payor ID

#### Output
* output [InvitationStatusResponse](#invitationstatusresponse)

### deletePayeeByIdV1
<p>This API will delete Payee by Id (UUID). Deletion by ID is not allowed if:</p>
<p>* Payee ID is not found</p>
<p>* If Payee has not been on-boarded</p>
<p>* If Payee is in grace period</p>
<p>* If Payee has existing payments</p>
<p>Please use V3 instead.</p>



```js
velopayments.deletePayeeByIdV1({
  "payeeId": ""
}, context)
```

#### Input
* input `object`
  * payeeId **required** `string`: The UUID of the payee.

#### Output
*Output schema unknown*

### getPayeeByIdV1
<p>Get Payee by Id</p>
<p>Please use V3 instead.</p>



```js
velopayments.getPayeeByIdV1({
  "payeeId": ""
}, context)
```

#### Input
* input `object`
  * payeeId **required** `string`: The UUID of the payee.
  * sensitive `boolean`: Optional. If omitted or set to false, any Personal Identifiable Information (PII) values are returned masked.

#### Output
* output [Payee](#payee)

### resendPayeeInviteV1
<p>Resend an invite to the Payee The payee must have already been invited by the payor and not yet accepted or declined</p>
<p>Any previous invites to the payee by this Payor will be invalidated</p>
<p>Deprecated. Please use v3 instead</p>



```js
velopayments.resendPayeeInviteV1({
  "payeeId": "",
  "body": {
    "payorId": ""
  }
}, context)
```

#### Input
* input `object`
  * payeeId **required** `string`: The UUID of the payee.
  * body **required** [InvitePayeeRequest](#invitepayeerequest)

#### Output
*Output schema unknown*

### v1.payees.payeeId.remoteIdUpdate.post
<p>Update the remote Id for the given Payee Id.</p>
<p>Please use V3 instead</p>



```js
velopayments.v1.payees.payeeId.remoteIdUpdate.post({
  "payeeId": "",
  "body": {
    "payorId": "",
    "remoteId": ""
  }
}, context)
```

#### Input
* input `object`
  * payeeId **required** `string`: The UUID of the payee.
  * body **required** [UpdateRemoteIdRequest](#updateremoteidrequest)

#### Output
*Output schema unknown*

### listPaymentChannelRulesV1
List the country specific payment channel rules.


```js
velopayments.listPaymentChannelRulesV1(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [PaymentChannelRulesResponse](#paymentchannelrulesresponse)

### getFundingsV1
<p>Get a list of Fundings for a payor.</p>
<p>Deprecated (use v4/paymentaudit/fundings)</p>



```js
velopayments.getFundingsV1({
  "payorId": ""
}, context)
```

#### Input
* input `object`
  * payorId **required** `string`: The account owner Payor ID
  * page `integer`: Page number. Default is 1.
  * pageSize `integer`: The number of results to return in a page
  * sort `string`: List of sort fields. Example: ```?sort=destinationCurrency:asc,destinationAmount:asc```

#### Output
* output [GetFundingsResponse](#getfundingsresponse)

### getPayoutStatsV1
<p>Get payout statistics for a payor.</p>
<p>Deprecated (Use /v4/paymentaudit/payoutStatistics)</p>



```js
velopayments.getPayoutStatsV1({}, context)
```

#### Input
* input `object`
  * payorId `string`: The account owner Payor ID. Required for external users.

#### Output
* output [GetPayoutStatistics](#getpayoutstatistics)

### withdrawPayment
<p>withdraw a payment </p>
<p>There are a variety of reasons why this can fail</p>
<ul>
    <li>the payment must be in a state of 'accepted' or 'unfunded'</li>
    <li>the payout must not be in a state of 'instructed'</li>
</ul>



```js
velopayments.withdrawPayment({
  "paymentId": "",
  "body": {
    "reason": ""
  }
}, context)
```

#### Input
* input `object`
  * paymentId **required** `string`: Id of the Payment
  * body **required** [WithdrawPaymentRequest](#withdrawpaymentrequest)

#### Output
*Output schema unknown*

### payorLinks
This endpoint allows you to list payor links


```js
velopayments.payorLinks({}, context)
```

#### Input
* input `object`
  * descendantsOfPayor `string`: The Payor ID from which to start the query to show all descendants
  * parentOfPayor `string`: Look for the parent payor details for this payor id
  * fields `string`: List of additional Payor fields to include in the response for each Payor.

#### Output
* output [PayorLinksResponse](#payorlinksresponse)

### createPayorLinks
This endpoint allows you to create a payor link.


```js
velopayments.createPayorLinks({
  "body": {
    "fromPayorId": "",
    "linkType": "",
    "toPayorId": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [CreatePayorLinkRequest](#createpayorlinkrequest)

#### Output
*Output schema unknown*

### getPayorById
Get a Single Payor by Id.



```js
velopayments.getPayorById({
  "payorId": ""
}, context)
```

#### Input
* input `object`
  * payorId **required** `string`: The Payor Id

#### Output
* output [PayorV1](#payorv1)

### payorCreateApplicationRequest
Create an application for the given Payor ID. Applications are programatic users which can be assigned unique keys.


```js
velopayments.payorCreateApplicationRequest({
  "payorId": "",
  "body": {
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * payorId **required** `string`: The Payor Id
  * body **required** [PayorCreateApplicationRequest](#payorcreateapplicationrequest)

#### Output
*Output schema unknown*

### payorCreateApiKeyRequest
Create an an API key for the given payor Id and application Id


```js
velopayments.payorCreateApiKeyRequest({
  "payorId": "",
  "applicationId": "",
  "body": {
    "name": "",
    "roles": []
  }
}, context)
```

#### Input
* input `object`
  * payorId **required** `string`: The Payor Id
  * applicationId **required** `string`: Application ID
  * body **required** [PayorCreateApiKeyRequest](#payorcreateapikeyrequest)

#### Output
* output [PayorCreateApiKeyResponse](#payorcreateapikeyresponse)

### payorGetBranding
Get the payor branding details.


```js
velopayments.payorGetBranding({
  "payorId": ""
}, context)
```

#### Input
* input `object`
  * payorId **required** `string`: The Payor Id

#### Output
* output [PayorBrandingResponse](#payorbrandingresponse)

### payorAddPayorLogo
Add Payor Logo. Logo file is used in your branding, and emails sent to payees.


```js
velopayments.payorAddPayorLogo({
  "payorId": ""
}, context)
```

#### Input
* input `object`
  * payorId **required** `string`: The Payor Id
  * logo `string`

#### Output
*Output schema unknown*

### payorEmailOptOut
Update the emailRemindersOptOut field for a Payor. This API can be used to opt out
or opt into Payor Reminder emails. These emails are typically around payee events
such as payees registering and onboarding.



```js
velopayments.payorEmailOptOut({
  "payorId": "",
  "body": {
    "reminderEmailsOptOut": true
  }
}, context)
```

#### Input
* input `object`
  * payorId **required** `string`: The Payor Id
  * body **required** [PayorEmailOptOutRequest](#payoremailoptoutrequest)

#### Output
*Output schema unknown*

### getSourceAccounts
List source accounts.


```js
velopayments.getSourceAccounts({}, context)
```

#### Input
* input `object`
  * physicalAccountName `string`: Physical Account Name
  * payorId `string`: The account owner Payor ID
  * page `integer`: Page number. Default is 1.
  * pageSize `integer`: The number of results to return in a page
  * sort `string`: List of sort fields e.g. ?sort=name:asc

#### Output
* output [ListSourceAccountResponse](#listsourceaccountresponse)

### getSourceAccount
Get details about given source account.


```js
velopayments.getSourceAccount({
  "sourceAccountId": ""
}, context)
```

#### Input
* input `object`
  * sourceAccountId **required** `string`: Source account id

#### Output
* output [SourceAccountResponse](#sourceaccountresponse)

### createAchFundingRequest
Instruct a funding request to transfer funds from the payor’s funding bank to the payor’s balance held within Velo.


```js
velopayments.createAchFundingRequest({
  "sourceAccountId": "",
  "body": {
    "amount": 0
  }
}, context)
```

#### Input
* input `object`
  * sourceAccountId **required** `string`: Source account id
  * body **required** [FundingRequestV1](#fundingrequestv1)

#### Output
*Output schema unknown*

### setNotificationsRequest
Set notifications for a given source account


```js
velopayments.setNotificationsRequest({
  "sourceAccountId": "",
  "body": {
    "minimumBalance": 0
  }
}, context)
```

#### Input
* input `object`
  * sourceAccountId **required** `string`: Source account id
  * body **required** [SetNotificationsRequest](#setnotificationsrequest)

#### Output
*Output schema unknown*

### listSupportedCountriesV1
<p>List the supported countries.</p>
<p>This version will be retired in March 2020. Use /v2/supportedCountries</p>



```js
velopayments.listSupportedCountriesV1(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [SupportedCountriesResponse](#supportedcountriesresponse)

### validateAccessToken
<p>The second part of login involves validating using an MFA device</p>
<p>An access token with PRE_AUTH authorities is required</p>



```js
velopayments.validateAccessToken({
  "body": {
    "otp": ""
  }
}, context)
```

#### Input
* input `object`
  * Authorization `string`: Bearer token authorization leg of validate
  * body **required** [AccessTokenValidationRequest](#accesstokenvalidationrequest)

#### Output
* output [AccessTokenResponse](#accesstokenresponse)

### listWebhooksV1
List the details about the webhooks for the given payor.


```js
velopayments.listWebhooksV1({
  "payorId": ""
}, context)
```

#### Input
* input `object`
  * page `integer`: Page number. Default is 1.
  * pageSize `integer`: The number of results to return in a page
  * payorId **required** `string`: The Payor ID

#### Output
* output [WebhooksResponse](#webhooksresponse)

### createWebhookV1
Create Webhook


```js
velopayments.createWebhookV1({}, context)
```

#### Input
* input `object`
  * body [CreateWebhookRequest](#createwebhookrequest)

#### Output
*Output schema unknown*

### getWebhookV1
Get details about the given webhook.


```js
velopayments.getWebhookV1({
  "webhookId": ""
}, context)
```

#### Input
* input `object`
  * webhookId **required** `string`: Webhook id

#### Output
* output [WebhookResponse](#webhookresponse)

### updateWebhookV1
Update Webhook


```js
velopayments.updateWebhookV1({
  "webhookId": ""
}, context)
```

#### Input
* input `object`
  * webhookId **required** `string`: Webhook id
  * body [UpdateWebhookRequest](#updatewebhookrequest)

#### Output
*Output schema unknown*

### listSupportedCurrenciesV2
List the supported currencies.


```js
velopayments.listSupportedCurrenciesV2(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [SupportedCurrencyResponseV2](#supportedcurrencyresponsev2)

### getFundingAccountsV2
Get the funding accounts.


```js
velopayments.getFundingAccountsV2({}, context)
```

#### Input
* input `object`
  * payorId `string`
  * name `string`: The descriptive funding account name
  * country `string`: The 2 letter ISO 3166-1 country code (upper case)
  * currency `string`: The ISO 4217 currency code
  * type `string` (values: FBO, WUBS_DECOUPLED): The type of funding account.
  * page `integer`: Page number. Default is 1.
  * pageSize `integer`: The number of results to return in a page
  * sort `string`: List of sort fields (e.g. ?sort=accountName:asc,name:asc) Default is accountName:asc The supported sort fields are - accountName, name.
  * sensitive `boolean`

#### Output
* output [ListFundingAccountsResponse_2](#listfundingaccountsresponse_2)

### createFundingAccountV2
Create Funding Account


```js
velopayments.createFundingAccountV2({}, context)
```

#### Input
* input `object`
  * body [CreateFundingAccountRequestV2](#createfundingaccountrequestv2)

#### Output
*Output schema unknown*

### getFundingAccountV2
Get Funding Account by ID


```js
velopayments.getFundingAccountV2({
  "fundingAccountId": ""
}, context)
```

#### Input
* input `object`
  * fundingAccountId **required** `string`
  * sensitive `boolean`

#### Output
* output [FundingAccountResponse_2](#fundingaccountresponse_2)

### v2CreatePayee
Initiate the process of creating 1 to 2000 payees in a batch Use the response location header to query
for status (201 - Created, 400 - invalid request body



```js
velopayments.v2CreatePayee({}, context)
```

#### Input
* input `object`
  * body [CreatePayeesRequest](#createpayeesrequest)

#### Output
* output [CreatePayeesCSVResponse](#createpayeescsvresponse)

### queryBatchStatusV2
<p>Fetch the status of a specific batch of payees. The batch is fully processed when status is ACCEPTED and pendingCount is 0 ( 200 - OK, 404 - batch not found ).</p>
<p>Please use V3 instead</p>



```js
velopayments.queryBatchStatusV2({
  "batchId": ""
}, context)
```

#### Input
* input `object`
  * batchId **required** `string`: Batch Id

#### Output
* output [QueryBatchResponse](#querybatchresponse)

### getPayeesInvitationStatusV2
<p>Returns a filtered, paginated list of payees associated with a payor, along with invitation status and grace period end date.</p>
<p>Please use V3 instead</p>



```js
velopayments.getPayeesInvitationStatusV2({
  "payorId": ""
}, context)
```

#### Input
* input `object`
  * payorId **required** `string`: The account owner Payor ID
  * payeeId `string`: The UUID of the payee.
  * invitationStatus `string` (values: ACCEPTED, PENDING, DECLINED): The invitation status of the payees.
  * page `integer`: Page number. Default is 1.
  * pageSize `integer`: Page size. Default is 25. Max allowable is 100.

#### Output
* output [PagedPayeeInvitationStatusResponse](#pagedpayeeinvitationstatusresponse)

### getPayeeByIdV2
<p>Get Payee by Id</p>
<p>Please use V3 instead.</p>



```js
velopayments.getPayeeByIdV2({
  "payeeId": ""
}, context)
```

#### Input
* input `object`
  * payeeId **required** `string`: The UUID of the payee.
  * sensitive `boolean`: Optional. If omitted or set to false, any Personal Identifiable Information (PII) values are returned masked.

#### Output
* output [PayeeResponseV2](#payeeresponsev2)

### getPayorByIdV2
Get a Single Payor by Id.



```js
velopayments.getPayorByIdV2({
  "payorId": ""
}, context)
```

#### Input
* input `object`
  * payorId **required** `string`: The Payor Id

#### Output
* output [PayorV2](#payorv2)

### getSourceAccountsV2
List source accounts.


```js
velopayments.getSourceAccountsV2({}, context)
```

#### Input
* input `object`
  * physicalAccountName `string`: Physical Account Name
  * physicalAccountId `string`: The physical account ID
  * payorId `string`: The account owner Payor ID
  * fundingAccountId `string`: The funding account ID
  * page `integer`: Page number. Default is 1.
  * pageSize `integer`: The number of results to return in a page
  * sort `string`: List of sort fields e.g. ?sort=name:asc

#### Output
* output [ListSourceAccountResponseV2](#listsourceaccountresponsev2)

### getSourceAccountV2
Get details about given source account.


```js
velopayments.getSourceAccountV2({
  "sourceAccountId": ""
}, context)
```

#### Input
* input `object`
  * sourceAccountId **required** `string`: Source account id

#### Output
* output [SourceAccountResponseV2](#sourceaccountresponsev2)

### createFundingRequest
Instruct a funding request to transfer funds from the payor’s funding bank to the payor’s balance held within Velo  (202 - accepted, 400 - invalid request body, 404 - source account not found).


```js
velopayments.createFundingRequest({
  "sourceAccountId": "",
  "body": {
    "amount": 0
  }
}, context)
```

#### Input
* input `object`
  * sourceAccountId **required** `string`: Source account id
  * body **required** [FundingRequestV2](#fundingrequestv2)

#### Output
*Output schema unknown*

### transferFunds
Transfer funds between source accounts for a Payor. The 'from' source account is identified in the URL, and is the account which will be debited. The 'to' (destination) source account is in the body, and is the account which will be credited. Both source accounts must belong to the same Payor. There must be sufficient balance in the 'from' source account, otherwise the transfer attempt will fail.


```js
velopayments.transferFunds({
  "sourceAccountId": "",
  "body": {
    "amount": 0,
    "currency": "",
    "toSourceAccountId": ""
  }
}, context)
```

#### Input
* input `object`
  * sourceAccountId **required** `string`: The 'from' source account id, which will be debited
  * body **required** [TransferRequest](#transferrequest)

#### Output
*Output schema unknown*

### listSupportedCountriesV2
List the supported countries.


```js
velopayments.listSupportedCountriesV2(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [SupportedCountriesResponseV2](#supportedcountriesresponsev2)

### listUsers
Get a paginated response listing the Users


```js
velopayments.listUsers({}, context)
```

#### Input
* input `object`
  * type `string` (values: BACKOFFICE, PAYOR, PAYEE): The Type of the User.
  * status `string` (values: ENABLED, DISABLED, PENDING): The status of the User.
  * entityId `string`: The entityId of the User.
  * page `integer`: Page number. Default is 1.
  * pageSize `integer`: The number of results to return in a page
  * sort `string`: List of sort fields (e.g. ?sort=email:asc,lastName:asc)

#### Output
* output [PagedUserResponse](#pageduserresponse)

### inviteUser
Create a User and invite them to the system



```js
velopayments.inviteUser({
  "body": {
    "email": "",
    "mfaType": "",
    "primaryContactNumber": "",
    "roles": [],
    "smsNumber": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [InviteUserRequest](#inviteuserrequest)

#### Output
*Output schema unknown*

### registerSms
<p>Register an Sms number and send an OTP to it </p>
<p>Used for manual verification of a user </p>
<p>The backoffice user initiates the request to send the OTP to the user's sms </p>
<p>The user then reads back the OTP which the backoffice user enters in the verifactionCode property for requests that require it</p>



```js
velopayments.registerSms({
  "body": {
    "smsNumber": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [RegisterSmsRequest](#registersmsrequest)

#### Output
*Output schema unknown*

### getSelf
Get the user's details



```js
velopayments.getSelf(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [UserResponse](#userresponse)

### unregisterMFAForSelf
<p>Unregister the MFA device for the user </p>
<p>If the user does not require further verification then a register new MFA device token will be sent to them via their email address</p>



```js
velopayments.unregisterMFAForSelf({
  "body": {
    "mfaType": ""
  }
}, context)
```

#### Input
* input `object`
  * Authorization `string`: Bearer token authorization leg of validate
  * body **required** [SelfMFATypeUnregisterRequest](#selfmfatypeunregisterrequest)

#### Output
*Output schema unknown*

### updatePasswordSelf
Update password for self



```js
velopayments.updatePasswordSelf({
  "body": {
    "newPassword": "",
    "oldPassword": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [SelfUpdatePasswordRequest](#selfupdatepasswordrequest)

#### Output
*Output schema unknown*

### validatePasswordSelf
validate the password and return a score



```js
velopayments.validatePasswordSelf({
  "body": {
    "password": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [PasswordRequest](#passwordrequest)

#### Output
* output [ValidatePasswordResponse](#validatepasswordresponse)

### userDetailsUpdateForSelf
<p>Update the profile details for the given user</p>
<p>Only Payee user types are supported</p>



```js
velopayments.userDetailsUpdateForSelf({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [PayeeUserSelfUpdateRequest](#payeeuserselfupdaterequest)

#### Output
*Output schema unknown*

### deleteUserByIdV2
Delete User by Id.



```js
velopayments.deleteUserByIdV2({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The UUID of the User.

#### Output
*Output schema unknown*

### getUserByIdV2
Get a Single User by Id.



```js
velopayments.getUserByIdV2({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The UUID of the User.

#### Output
* output [UserResponse](#userresponse)

### disableUserV2
<p>If a user is enabled this endpoint will disable them </p>
<p>The invoker must have the appropriate permission </p>
<p>A user cannot disable themself </p>
<p>When a user is disabled any active access tokens will be revoked and the user will not be able to log in</p>



```js
velopayments.disableUserV2({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The UUID of the User.

#### Output
*Output schema unknown*

### enableUserV2
<p>If a user has been disabled this endpoints will enable them </p>
<p>The invoker must have the appropriate permission </p>
<p>A user cannot enable themself </p>
<p>If the user is a payor user and the payor is disabled this operation is not allowed</p>
<p>If enabling a payor user would breach the limit for master admin payor users the request will be rejected </p>



```js
velopayments.enableUserV2({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The UUID of the User.

#### Output
*Output schema unknown*

### unregisterMFA
<p>Unregister the MFA device for the user </p>
<p>If the user does not require further verification then a register new MFA device token will be sent to them via their email address</p>



```js
velopayments.unregisterMFA({
  "userId": "",
  "body": {
    "mfaType": ""
  }
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The UUID of the User.
  * body **required** [UnregisterMFARequest](#unregistermfarequest)

#### Output
*Output schema unknown*

### roleUpdate
<p>Update the user's Role</p>



```js
velopayments.roleUpdate({
  "userId": "",
  "body": {
    "roles": []
  }
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The UUID of the User.
  * body **required** [RoleUpdateRequest](#roleupdaterequest)

#### Output
*Output schema unknown*

### resendToken
<p>Resend the specified token </p>
<p>The token to resend must already exist for the user </p>
<p>It will be revoked and a new one issued</p>



```js
velopayments.resendToken({
  "userId": "",
  "body": {
    "tokenType": ""
  }
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The UUID of the User.
  * body **required** [ResendTokenRequest](#resendtokenrequest)

#### Output
*Output schema unknown*

### unlockUserV2
If a user is locked this endpoint will unlock them



```js
velopayments.unlockUserV2({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The UUID of the User.

#### Output
*Output schema unknown*

### userDetailsUpdate
<p>Update the profile details for the given user</p>
<p>When updating Payor users with the role of payor.master_admin a verificationCode is required</p>



```js
velopayments.userDetailsUpdate({
  "userId": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The UUID of the User.
  * body **required** [UserDetailsUpdateRequest](#userdetailsupdaterequest)

#### Output
*Output schema unknown*

### listPayeesV3
Get a paginated response listing the payees for a payor.


```js
velopayments.listPayeesV3({
  "payorId": ""
}, context)
```

#### Input
* input `object`
  * payorId **required** `string`: The account owner Payor ID
  * watchlistStatus `string` (values: NONE, PENDING, REVIEW, PASSED, FAILED): The watchlistStatus of the payees.
  * disabled `boolean`: Payee disabled
  * onboardedStatus `string` (values: CREATED, INVITED, REGISTERED, ONBOARDED): The onboarded status of the payees.
  * email `string`: Email address
  * displayName `string`: The display name of the payees.
  * remoteId `string`: The remote id of the payees.
  * payeeType `string` (values: Individual, Company): The onboarded status of the payees.
  * payeeCountry `string`: The country of the payee - 2 letter ISO 3166-1 country code (upper case)
  * page `integer`: Page number. Default is 1.
  * pageSize `integer`: Page size. Default is 25. Max allowable is 100.
  * sort `string`: List of sort fields (e.g. ?sort=onboardedStatus:asc,name:asc) Default is name:asc 'name' is treated as company name for companies - last name + ',' + firstName for individuals The supported sort fields are - payeeId, displayName, payoutStatus, onboardedStatus.

#### Output
* output [PagedPayeeResponse_2](#pagedpayeeresponse_2)

### v3CreatePayee
Initiate the process of creating 1 to 2000 payees in a batch Use the response location header to query
for status (201 - Created, 400 - invalid request body. In addition to standard semantic validations, a
400 will also result if there is a duplicate remote id within the batch / if there is a duplicate email
within the batch, i.e. if there is a conflict between the data provided for one payee within the batch and
that provided for another payee within the same batch). The validation at this stage is intra-batch only.
Validation against payees who have already been invited occurs subsequently during processing of the batch.



```js
velopayments.v3CreatePayee({}, context)
```

#### Input
* input `object`
  * body [CreatePayeesRequest_2](#createpayeesrequest_2)

#### Output
* output [CreatePayeesCSVResponse_2](#createpayeescsvresponse_2)

### queryBatchStatusV3
Fetch the status of a specific batch of payees. The batch is fully processed when status is ACCEPTED and pendingCount is 0 ( 200 - OK, 404 - batch not found ).



```js
velopayments.queryBatchStatusV3({
  "batchId": ""
}, context)
```

#### Input
* input `object`
  * batchId **required** `string`: Batch Id

#### Output
* output [QueryBatchResponse_2](#querybatchresponse_2)

### listPayeeChangesV3
Get a paginated response listing payee changes.


```js
velopayments.listPayeeChangesV3({
  "payorId": "",
  "updatedSince": ""
}, context)
```

#### Input
* input `object`
  * payorId **required** `string`: The Payor ID to find associated Payees
  * updatedSince **required** `string`: The updatedSince filter in the format YYYY-MM-DDThh:mm:ss+hh:mm
  * page `integer`: Page number. Default is 1.
  * pageSize `integer`: Page size. Default is 100. Max allowable is 1000.

#### Output
* output [PayeeDeltaResponse_2](#payeedeltaresponse_2)

### getPayeesInvitationStatusV3
Returns a filtered, paginated list of payees associated with a payor, along with invitation status and grace period end date.



```js
velopayments.getPayeesInvitationStatusV3({
  "payorId": ""
}, context)
```

#### Input
* input `object`
  * payorId **required** `string`: The account owner Payor ID
  * payeeId `string`: The UUID of the payee.
  * invitationStatus `string` (values: ACCEPTED, PENDING, DECLINED): The invitation status of the payees.
  * page `integer`: Page number. Default is 1.
  * pageSize `integer`: Page size. Default is 25. Max allowable is 100.

#### Output
* output [PagedPayeeInvitationStatusResponse_2](#pagedpayeeinvitationstatusresponse_2)

### deletePayeeByIdV3
<p>This API will delete Payee by Id (UUID). Deletion by ID is not allowed if:</p>
<p>* Payee ID is not found</p>
<p>* If Payee has not been on-boarded</p>
<p>* If Payee is in grace period</p>
<p>* If Payee has existing payments</p>



```js
velopayments.deletePayeeByIdV3({
  "payeeId": ""
}, context)
```

#### Input
* input `object`
  * payeeId **required** `string`: The UUID of the payee.

#### Output
*Output schema unknown*

### getPayeeByIdV3
Get Payee by Id


```js
velopayments.getPayeeByIdV3({
  "payeeId": ""
}, context)
```

#### Input
* input `object`
  * payeeId **required** `string`: The UUID of the payee.
  * sensitive `boolean`: Optional. If omitted or set to false, any Personal Identifiable Information (PII) values are returned masked.

#### Output
* output [PayeeDetailResponse](#payeedetailresponse)

### resendPayeeInviteV3
<p>Resend an invite to the Payee The payee must have already been invited by the payor and not yet accepted or declined</p>
<p>Any previous invites to the payee by this Payor will be invalidated</p>



```js
velopayments.resendPayeeInviteV3({
  "payeeId": "",
  "body": {
    "payorId": ""
  }
}, context)
```

#### Input
* input `object`
  * payeeId **required** `string`: The UUID of the payee.
  * body **required** [InvitePayeeRequest_2](#invitepayeerequest_2)

#### Output
*Output schema unknown*

### payeeDetailsUpdateV3
<p>Update payee details for the given Payee Id.<p>



```js
velopayments.payeeDetailsUpdateV3({
  "payeeId": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * payeeId **required** `string`: The UUID of the payee.
  * body **required** [UpdatePayeeDetailsRequest](#updatepayeedetailsrequest)

#### Output
*Output schema unknown*

### v3.payees.payeeId.remoteIdUpdate.post
<p>Update the remote Id for the given Payee Id.</p>



```js
velopayments.v3.payees.payeeId.remoteIdUpdate.post({
  "payeeId": "",
  "body": {
    "payorId": "",
    "remoteId": ""
  }
}, context)
```

#### Input
* input `object`
  * payeeId **required** `string`: The UUID of the payee.
  * body **required** [UpdateRemoteIdRequest](#updateremoteidrequest)

#### Output
*Output schema unknown*

### listPaymentsAudit
Get payments for the given payor Id


```js
velopayments.listPaymentsAudit({}, context)
```

#### Input
* input `object`
  * payeeId `string`: The UUID of the payee.
  * payorId `string`: The account owner Payor Id. Required for external users.
  * payorName `string`: The payor’s name. This filters via a case insensitive substring match.
  * remoteId `string`: The remote id of the payees.
  * status `string` (values: ACCEPTED, AWAITING_FUNDS, FUNDED, UNFUNDED, BANK_PAYMENT_REQUESTED, REJECTED, ACCEPTED_BY_RAILS, CONFIRMED, FAILED, RETURNED, WITHDRAWN): Payment Status
  * sourceAccountName `string`: The source account name filter. This filters via a case insensitive substring match.
  * sourceAmountFrom `integer`: The source amount from range filter. Filters for sourceAmount >= sourceAmountFrom
  * sourceAmountTo `integer`: The source amount to range filter. Filters for sourceAmount ⇐ sourceAmountTo
  * sourceCurrency `string`: The source currency filter. Filters based on an exact match on the currency.
  * paymentAmountFrom `integer`: The payment amount from range filter. Filters for paymentAmount >= paymentAmountFrom
  * paymentAmountTo `integer`: The payment amount to range filter. Filters for paymentAmount ⇐ paymentAmountTo
  * paymentCurrency `string`: The payment currency filter. Filters based on an exact match on the currency.
  * submittedDateFrom `string`: The submitted date from range filter. Format is yyyy-MM-dd.
  * submittedDateTo `string`: The submitted date to range filter. Format is yyyy-MM-dd.
  * paymentMemo `string`: The payment memo filter. This filters via a case insensitive substring match.
  * page `integer`: Page number. Default is 1.
  * pageSize `integer`: The number of results to return in a page
  * sort `string`: List of sort fields (e.g. ?sort=submittedDateTime:asc,status:asc). Default is sort by remoteId
  * sensitive `boolean`: Optional. If omitted or set to false, any Personal Identifiable Information (PII) values are returned masked.

#### Output
* output [ListPaymentsResponseV3](#listpaymentsresponsev3)

### getPaymentDetails
Get the payment with the given id. This contains the payment history.



```js
velopayments.getPaymentDetails({
  "paymentId": ""
}, context)
```

#### Input
* input `object`
  * paymentId **required** `string`: Payment Id
  * sensitive `boolean`: Optional. If omitted or set to false, any Personal Identifiable Information (PII) values are returned masked.

#### Output
* output [PaymentResponseV3](#paymentresponsev3)

### getPayoutsForPayorV3
<p>Get List of payouts for payor</p>
<p>Deprecated Use v4</p>



```js
velopayments.getPayoutsForPayorV3({
  "payorId": ""
}, context)
```

#### Input
* input `object`
  * payorId **required** `string`: The account owner Payor ID
  * payoutMemo `string`: Payout Memo filter - case insensitive sub-string match
  * status `string` (values: ACCEPTED, REJECTED, SUBMITTED, QUOTED, INSTRUCTED, COMPLETED, INCOMPLETE, CONFIRMED, WITHDRAWN): Payout Status
  * submittedDateFrom `string`: The submitted date from range filter. Format is yyyy-MM-dd.
  * submittedDateTo `string`: The submitted date to range filter. Format is yyyy-MM-dd.
  * page `integer`: Page number. Default is 1.
  * pageSize `integer`: The number of results to return in a page
  * sort `string`: List of sort fields (e.g. ?sort=submittedDateTime:asc,instructedDateTime:asc,status:asc)

#### Output
* output [GetPayoutsResponseV3](#getpayoutsresponsev3)

### getPaymentsForPayout
Get List of payments for Payout



```js
velopayments.getPaymentsForPayout({
  "payoutId": ""
}, context)
```

#### Input
* input `object`
  * payoutId **required** `string`: The id (UUID) of the payout.
  * remoteId `string`: The remote id of the payees.
  * status `string` (values: ACCEPTED, AWAITING_FUNDS, FUNDED, UNFUNDED, BANK_PAYMENT_REQUESTED, REJECTED, ACCEPTED_BY_RAILS, CONFIRMED, FAILED, RETURNED, WITHDRAWN): Payment Status
  * sourceAmountFrom `integer`: The source amount from range filter. Filters for sourceAmount >= sourceAmountFrom
  * sourceAmountTo `integer`: The source amount to range filter. Filters for sourceAmount ⇐ sourceAmountTo
  * paymentAmountFrom `integer`: The payment amount from range filter. Filters for paymentAmount >= paymentAmountFrom
  * paymentAmountTo `integer`: The payment amount to range filter. Filters for paymentAmount ⇐ paymentAmountTo
  * submittedDateFrom `string`: The submitted date from range filter. Format is yyyy-MM-dd.
  * submittedDateTo `string`: The submitted date to range filter. Format is yyyy-MM-dd.
  * page `integer`: Page number. Default is 1.
  * pageSize `integer`: The number of results to return in a page
  * sort `string`: <p>List of sort fields (e.g. ?sort=submittedDateTime:asc,status:asc). Default is sort by remoteId</p>
  * sensitive `boolean`: Optional. If omitted or set to false, any Personal Identifiable Information (PII) values are returned masked.

#### Output
* output [GetPaymentsForPayoutResponseV3](#getpaymentsforpayoutresponsev3)

### exportTransactionsCSVV3
Download a CSV file containing payments in a date range. Uses Transfer-Encoding - chunked to stream to the client. Date range is inclusive of both the start and end dates.


```js
velopayments.exportTransactionsCSVV3({}, context)
```

#### Input
* input `object`
  * payorId `string`: The Payor ID for whom you wish to run the report.
  * startDate `string`: Start date, inclusive. Format is YYYY-MM-DD
  * endDate `string`: End date, inclusive. Format is YYYY-MM-DD

#### Output
* output [PayorAmlTransactionV3](#payoramltransactionv3)

### submitPayoutV3
<p>Create a new payout and return a location header with a link to get the payout.</p>
<p>Basic validation of the payout is performed before returning but more comprehensive validation is done asynchronously.</p>
<p>The results can be obtained by issuing a HTTP GET to the URL returned in the location header.</p>
<p>**NOTE:** amount values in payments must be in 'minor units' format. E.g. cents for USD, pence for GBP etc.</p>
 with no decimal places.



```js
velopayments.submitPayoutV3({
  "body": {
    "payments": []
  }
}, context)
```

#### Input
* input `object`
  * body **required** [CreatePayoutRequestV3](#createpayoutrequestv3)

#### Output
*Output schema unknown*

### withdrawPayoutV3
Withdraw Payout will delete payout details from payout service and rails services but will just move the status of the payout to WITHDRAWN in payment audit.


```js
velopayments.withdrawPayoutV3({
  "payoutId": ""
}, context)
```

#### Input
* input `object`
  * payoutId **required** `string`: Id of the payout

#### Output
*Output schema unknown*

### getPayoutSummaryV3
Get payout summary - returns the current state of the payout.


```js
velopayments.getPayoutSummaryV3({
  "payoutId": ""
}, context)
```

#### Input
* input `object`
  * payoutId **required** `string`: Id of the payout

#### Output
* output [PayoutSummaryResponseV3](#payoutsummaryresponsev3)

### instructPayoutV3
Instruct a payout to be made for the specified payoutId.


```js
velopayments.instructPayoutV3({
  "payoutId": ""
}, context)
```

#### Input
* input `object`
  * payoutId **required** `string`: Id of the payout

#### Output
*Output schema unknown*

### getPaymentsForPayoutV3
Retrieve payments for a payout


```js
velopayments.getPaymentsForPayoutV3({
  "payoutId": ""
}, context)
```

#### Input
* input `object`
  * payoutId **required** `string`: Id of the payout
  * status `string` (values: ACCEPTED, REJECTED, WITHDRAWN, WITHDRAWABLE): Payment Status
  * remoteId `string`: The remote id of the payees.
  * payorPaymentId `string`: Payor's Id of the Payment
  * sourceAccountName `string`: Physical Account Name
  * paymentMemo `string`: Payment Memo of the Payment
  * pageSize `integer`: The number of results to return in a page
  * page `integer`: Page number. Default is 1.

#### Output
* output [PagedPaymentsResponseV3](#pagedpaymentsresponsev3)

### createQuoteForPayoutV3
Create quote for a payout


```js
velopayments.createQuoteForPayoutV3({
  "payoutId": ""
}, context)
```

#### Input
* input `object`
  * payoutId **required** `string`: Id of the payout

#### Output
* output [QuoteResponseV3](#quoteresponsev3)

### getSourceAccountsV3
List source accounts.


```js
velopayments.getSourceAccountsV3({}, context)
```

#### Input
* input `object`
  * physicalAccountName `string`: Physical Account Name
  * physicalAccountId `string`: The physical account ID
  * payorId `string`: The account owner Payor ID
  * fundingAccountId `string`: The funding account ID
  * type `string` (values: FBO, WUBS_DECOUPLED): The type of source account.
  * page `integer`: Page number. Default is 1.
  * pageSize `integer`: The number of results to return in a page
  * sort `string`: List of sort fields e.g. ?sort=name:asc

#### Output
* output [ListSourceAccountResponseV3](#listsourceaccountresponsev3)

### getSourceAccountV3
Get details about given source account.


```js
velopayments.getSourceAccountV3({
  "sourceAccountId": ""
}, context)
```

#### Input
* input `object`
  * sourceAccountId **required** `string`: Source account id

#### Output
* output [SourceAccountResponseV3](#sourceaccountresponsev3)

### createFundingRequestV3
Instruct a funding request to transfer funds from the payor’s funding bank to the payor’s balance held within Velo  (202 - accepted, 400 - invalid request body, 404 - source account not found).


```js
velopayments.createFundingRequestV3({
  "sourceAccountId": "",
  "body": {
    "amount": 0,
    "fundingAccountId": ""
  }
}, context)
```

#### Input
* input `object`
  * sourceAccountId **required** `string`: Source account id
  * body **required** [FundingRequestV3](#fundingrequestv3)

#### Output
*Output schema unknown*

### transferFundsV3
Transfer funds between source accounts for a Payor. The 'from' source account is identified in the URL, and is the account which will be debited. The 'to' (destination) source account is in the body, and is the account which will be credited. Both source accounts must belong to the same Payor. There must be sufficient balance in the 'from' source account, otherwise the transfer attempt will fail.


```js
velopayments.transferFundsV3({
  "sourceAccountId": "",
  "body": {
    "amount": 0,
    "currency": "",
    "toSourceAccountId": ""
  }
}, context)
```

#### Input
* input `object`
  * sourceAccountId **required** `string`: The 'from' source account id, which will be debited
  * body **required** [TransferRequest_2](#transferrequest_2)

#### Output
*Output schema unknown*

### listPayeesV4
Get a paginated response listing the payees for a payor.


```js
velopayments.listPayeesV4({
  "payorId": ""
}, context)
```

#### Input
* input `object`
  * payorId **required** `string`: The account owner Payor ID
  * watchlistStatus `string` (values: NONE, PENDING, REVIEW, PASSED, FAILED): The watchlistStatus of the payees.
  * disabled `boolean`: Payee disabled
  * onboardedStatus `string` (values: CREATED, INVITED, REGISTERED, ONBOARDED): The onboarded status of the payees.
  * email `string`: Email address
  * displayName `string`: The display name of the payees.
  * remoteId `string`: The remote id of the payees.
  * payeeType `string` (values: Individual, Company): The onboarded status of the payees.
  * payeeCountry `string`: The country of the payee - 2 letter ISO 3166-1 country code (upper case)
  * ofacStatus `string` (values: PENDING, PASSED, FAILED): The ofacStatus of the payees.
  * page `integer`: Page number. Default is 1.
  * pageSize `integer`: Page size. Default is 25. Max allowable is 100.
  * sort `string`: List of sort fields (e.g. ?sort=onboardedStatus:asc,name:asc) Default is name:asc 'name' is treated as company name for companies - last name + ',' + firstName for individuals The supported sort fields are - payeeId, displayName, payoutStatus, onboardedStatus.

#### Output
* output [PagedPayeeResponse_2](#pagedpayeeresponse_2)

### v4CreatePayee
Initiate the process of creating 1 to 2000 payees in a batch Use the response location header to query
for status (201 - Created, 400 - invalid request body. In addition to standard semantic validations, a
400 will also result if there is a duplicate remote id within the batch / if there is a duplicate email
within the batch, i.e. if there is a conflict between the data provided for one payee within the batch and
that provided for another payee within the same batch). The validation at this stage is intra-batch only.
Validation against payees who have already been invited occurs subsequently during processing of the batch.



```js
velopayments.v4CreatePayee({}, context)
```

#### Input
* input `object`
  * body [CreatePayeesRequest_2](#createpayeesrequest_2)

#### Output
* output [CreatePayeesCSVResponse_2](#createpayeescsvresponse_2)

### queryBatchStatusV4
Fetch the status of a specific batch of payees. The batch is fully processed when status is ACCEPTED and pendingCount is 0 ( 200 - OK, 404 - batch not found ).



```js
velopayments.queryBatchStatusV4({
  "batchId": ""
}, context)
```

#### Input
* input `object`
  * batchId **required** `string`: Batch Id

#### Output
* output [QueryBatchResponse_2](#querybatchresponse_2)

### listPayeeChangesV4
Get a paginated response listing payee changes (updated since a particular time) to a limited set of fields:
- dbaName
- displayName
- email
- onboardedStatus
- payeeCountry
- payeeId
- remoteId



```js
velopayments.listPayeeChangesV4({
  "payorId": "",
  "updatedSince": ""
}, context)
```

#### Input
* input `object`
  * payorId **required** `string`: The Payor ID to find associated Payees
  * updatedSince **required** `string`: The updatedSince filter in the format YYYY-MM-DDThh:mm:ss+hh:mm
  * page `integer`: Page number. Default is 1.
  * pageSize `integer`: Page size. Default is 100. Max allowable is 1000.

#### Output
* output [PayeeDeltaResponse_2](#payeedeltaresponse_2)

### getPayeesInvitationStatusV4
Returns a filtered, paginated list of payees associated with a payor, along with invitation status and grace period end date.



```js
velopayments.getPayeesInvitationStatusV4({
  "payorId": ""
}, context)
```

#### Input
* input `object`
  * payorId **required** `string`: The account owner Payor ID
  * payeeId `string`: The UUID of the payee.
  * invitationStatus `string` (values: ACCEPTED, PENDING, DECLINED): The invitation status of the payees.
  * page `integer`: Page number. Default is 1.
  * pageSize `integer`: Page size. Default is 25. Max allowable is 100.

#### Output
* output [PagedPayeeInvitationStatusResponse_2](#pagedpayeeinvitationstatusresponse_2)

### deletePayeeByIdV4
<p>This API will delete Payee by Id (UUID). Deletion by ID is not allowed if:</p>
<p>* Payee ID is not found</p>
<p>* If Payee has not been on-boarded</p>
<p>* If Payee is in grace period</p>
<p>* If Payee has existing payments</p>



```js
velopayments.deletePayeeByIdV4({
  "payeeId": ""
}, context)
```

#### Input
* input `object`
  * payeeId **required** `string`: The UUID of the payee.

#### Output
*Output schema unknown*

### getPayeeByIdV4
Get Payee by Id


```js
velopayments.getPayeeByIdV4({
  "payeeId": ""
}, context)
```

#### Input
* input `object`
  * payeeId **required** `string`: The UUID of the payee.
  * sensitive `boolean`: Optional. If omitted or set to false, any Personal Identifiable Information (PII) values are returned masked.

#### Output
* output [PayeeDetailResponse_2](#payeedetailresponse_2)

### resendPayeeInviteV4
<p>Resend an invite to the Payee The payee must have already been invited by the payor and not yet accepted or declined</p>
<p>Any previous invites to the payee by this Payor will be invalidated</p>



```js
velopayments.resendPayeeInviteV4({
  "payeeId": "",
  "body": {
    "payorId": ""
  }
}, context)
```

#### Input
* input `object`
  * payeeId **required** `string`: The UUID of the payee.
  * body **required** [InvitePayeeRequest_2](#invitepayeerequest_2)

#### Output
*Output schema unknown*

### payeeDetailsUpdateV4
<p>Update payee details for the given Payee Id.<p>



```js
velopayments.payeeDetailsUpdateV4({
  "payeeId": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * payeeId **required** `string`: The UUID of the payee.
  * body **required** [UpdatePayeeDetailsRequest_2](#updatepayeedetailsrequest_2)

#### Output
*Output schema unknown*

### v4.payees.payeeId.remoteIdUpdate.post
<p>Update the remote Id for the given Payee Id.</p>



```js
velopayments.v4.payees.payeeId.remoteIdUpdate.post({
  "payeeId": "",
  "body": {
    "payorId": "",
    "remoteId": ""
  }
}, context)
```

#### Input
* input `object`
  * payeeId **required** `string`: The UUID of the payee.
  * body **required** [UpdateRemoteIdRequest](#updateremoteidrequest)

#### Output
*Output schema unknown*

### getFundingsV4
<p>Get a list of Fundings for a payor.</p>



```js
velopayments.getFundingsV4({
  "payorId": ""
}, context)
```

#### Input
* input `object`
  * payorId **required** `string`: The account owner Payor ID
  * page `integer`: Page number. Default is 1.
  * pageSize `integer`: The number of results to return in a page
  * sort `string`: List of sort fields. Example: ```?sort=destinationCurrency:asc,destinationAmount:asc```

#### Output
* output [GetFundingsResponse](#getfundingsresponse)

### listPaymentsAuditV4
Get payments for the given payor Id


```js
velopayments.listPaymentsAuditV4({}, context)
```

#### Input
* input `object`
  * payeeId `string`: The UUID of the payee.
  * payorId `string`: The account owner Payor Id. Required for external users.
  * payorName `string`: The payor’s name. This filters via a case insensitive substring match.
  * remoteId `string`: The remote id of the payees.
  * status `string` (values: ACCEPTED, AWAITING_FUNDS, FUNDED, UNFUNDED, BANK_PAYMENT_REQUESTED, REJECTED, ACCEPTED_BY_RAILS, CONFIRMED, FAILED, RETURNED, WITHDRAWN): Payment Status
  * transmissionType `string` (values: ACH, SAME_DAY_ACH, WIRE): Transmission Type
  * sourceAccountName `string`: The source account name filter. This filters via a case insensitive substring match.
  * sourceAmountFrom `integer`: The source amount from range filter. Filters for sourceAmount >= sourceAmountFrom
  * sourceAmountTo `integer`: The source amount to range filter. Filters for sourceAmount ⇐ sourceAmountTo
  * sourceCurrency `string`: The source currency filter. Filters based on an exact match on the currency.
  * paymentAmountFrom `integer`: The payment amount from range filter. Filters for paymentAmount >= paymentAmountFrom
  * paymentAmountTo `integer`: The payment amount to range filter. Filters for paymentAmount ⇐ paymentAmountTo
  * paymentCurrency `string`: The payment currency filter. Filters based on an exact match on the currency.
  * submittedDateFrom `string`: The submitted date from range filter. Format is yyyy-MM-dd.
  * submittedDateTo `string`: The submitted date to range filter. Format is yyyy-MM-dd.
  * paymentMemo `string`: The payment memo filter. This filters via a case insensitive substring match.
  * page `integer`: Page number. Default is 1.
  * pageSize `integer`: The number of results to return in a page
  * sort `string`: List of sort fields (e.g. ?sort=submittedDateTime:asc,status:asc). Default is sort by submittedDateTime:desc,paymentId:asc
  * sensitive `boolean`: Optional. If omitted or set to false, any Personal Identifiable Information (PII) values are returned masked.

#### Output
* output [ListPaymentsResponseV4](#listpaymentsresponsev4)

### getPaymentDetailsV4
Get the payment with the given id. This contains the payment history.



```js
velopayments.getPaymentDetailsV4({
  "paymentId": ""
}, context)
```

#### Input
* input `object`
  * paymentId **required** `string`: Payment Id
  * sensitive `boolean`: Optional. If omitted or set to false, any Personal Identifiable Information (PII) values are returned masked.

#### Output
* output [PaymentResponseV4](#paymentresponsev4)

### getPayoutStatsV4
<p>Get payout statistics for a payor.</p>



```js
velopayments.getPayoutStatsV4({}, context)
```

#### Input
* input `object`
  * payorId `string`: The account owner Payor ID. Required for external users.

#### Output
* output [GetPayoutStatistics](#getpayoutstatistics)

### getPayoutsForPayorV4
Get List of payouts for payor



```js
velopayments.getPayoutsForPayorV4({}, context)
```

#### Input
* input `object`
  * payorId `string`: The id (UUID) of the payor funding the payout or the payor whose payees are being paid.
  * payoutMemo `string`: Payout Memo filter - case insensitive sub-string match
  * status `string` (values: ACCEPTED, REJECTED, SUBMITTED, QUOTED, INSTRUCTED, COMPLETED, INCOMPLETE, CONFIRMED, WITHDRAWN): Payout Status
  * submittedDateFrom `string`: The submitted date from range filter. Format is yyyy-MM-dd.
  * submittedDateTo `string`: The submitted date to range filter. Format is yyyy-MM-dd.
  * fromPayorName `string`: The name of the payor whose payees are being paid. This filters via a case insensitive substring match.
  * page `integer`: Page number. Default is 1.
  * pageSize `integer`: The number of results to return in a page
  * sort `string`: List of sort fields (e.g. ?sort=submittedDateTime:asc,instructedDateTime:asc,status:asc)

#### Output
* output [GetPayoutsResponseV4](#getpayoutsresponsev4)

### getPaymentsForPayoutV4
Get List of payments for Payout, allowing for RETURNED status



```js
velopayments.getPaymentsForPayoutV4({
  "payoutId": ""
}, context)
```

#### Input
* input `object`
  * payoutId **required** `string`: The id (UUID) of the payout.
  * remoteId `string`: The remote id of the payees.
  * status `string` (values: ACCEPTED, AWAITING_FUNDS, FUNDED, UNFUNDED, BANK_PAYMENT_REQUESTED, REJECTED, ACCEPTED_BY_RAILS, CONFIRMED, FAILED, RETURNED, WITHDRAWN): Payment Status
  * sourceAmountFrom `integer`: The source amount from range filter. Filters for sourceAmount >= sourceAmountFrom
  * sourceAmountTo `integer`: The source amount to range filter. Filters for sourceAmount ⇐ sourceAmountTo
  * paymentAmountFrom `integer`: The payment amount from range filter. Filters for paymentAmount >= paymentAmountFrom
  * paymentAmountTo `integer`: The payment amount to range filter. Filters for paymentAmount ⇐ paymentAmountTo
  * submittedDateFrom `string`: The submitted date from range filter. Format is yyyy-MM-dd.
  * submittedDateTo `string`: The submitted date to range filter. Format is yyyy-MM-dd.
  * transmissionType `string` (values: ACH, SAME_DAY_ACH, WIRE): Transmission Type
  * page `integer`: Page number. Default is 1.
  * pageSize `integer`: The number of results to return in a page
  * sort `string`: List of sort fields (e.g. ?sort=submittedDateTime:asc,status:asc). Default is sort by remoteId
  * sensitive `boolean`: Optional. If omitted or set to false, any Personal Identifiable Information (PII) values are returned masked.

#### Output
* output [GetPaymentsForPayoutResponseV4](#getpaymentsforpayoutresponsev4)

### exportTransactionsCSVV4
Download a CSV file containing payments in a date range. Uses Transfer-Encoding - chunked to stream to the client. Date range is inclusive of both the start and end dates.


```js
velopayments.exportTransactionsCSVV4({}, context)
```

#### Input
* input `object`
  * payorId `string`: <p>The Payor ID for whom you wish to run the report.</p>
  * startDate `string`: Start date, inclusive. Format is YYYY-MM-DD
  * endDate `string`: End date, inclusive. Format is YYYY-MM-DD
  * include `string` (values: payorOnly, payorAndDescendants): <p>Mode to determine whether to include other Payor's data in the results.</p>

#### Output
* output [PayorAmlTransactionV4](#payoramltransactionv4)

### listPaymentChangesV4
Get a paginated response listing payment changes.


```js
velopayments.listPaymentChangesV4({
  "payorId": "",
  "updatedSince": ""
}, context)
```

#### Input
* input `object`
  * payorId **required** `string`: The Payor ID to find associated Payments
  * updatedSince **required** `string`: The updatedSince filter in the format YYYY-MM-DDThh:mm:ss+hh:mm
  * page `integer`: Page number. Default is 1.
  * pageSize `integer`: The number of results to return in a page

#### Output
* output [PaymentDeltaResponseV4](#paymentdeltaresponsev4)



## Definitions

### AcceptedPaymentV3
* AcceptedPaymentV3 `object`
  * amount **required** `integer`
  * currencyType **required** `string`: Valid ISO 4217 3 letter currency code. See the <a href="https://www.iso.org/iso-4217-currency-codes.html" target="_blank" a>ISO specification</a> for details.
  * paymentMemo `string`
  * payorPaymentId **required** `string`
  * remoteId **required** `string`
  * sourceAccountName **required** `string`

### AccessTokenResponse
* AccessTokenResponse `object`
  * access_token `string`: Bearer token used in headers to access secure endpoints
  * entityIds `array`: If the user is a payee then the payeeId<P>
    * items `string`
  * expires_in `integer`: The lifetime in seconds of the access token
  * refresh_token `string`: can be used to obtain a new access token
  * scope `string`: the scope of the access token
  * token_type `string`: the type of the token
  * user_info [UserInfo](#userinfo)

### AccessTokenValidationRequest
* AccessTokenValidationRequest `object`
  * otp **required** `string`: an OTP either sent via sms or generated by a registered MFA device

### AuthResponse
* AuthResponse `object`
  * access_token **required** `string`
  * entityIds `array`
    * items `string`
  * expires_in `number`
  * refresh_token `string`
  * scope `string`
  * token_type **required** `string`

### AutoTopUpConfig
* AutoTopUpConfig `object`
  * enabled **required** `boolean`: Is auto top-up enabled? automatically trigger funding to top-up the source account balance when the balance falls below the configured minimum level.
  * minBalance `integer`: When the payor balance falls below this level then auto top-up will be triggered. Note - This is in minor units.
  * targetBalance `integer`: When the payor balance falls below the min balance then auto top-up will request funds bring the balance to this level. Note - this is in minor units.

### AutoTopUpConfig_2
* AutoTopUpConfig_2 `object`
  * enabled **required** `boolean`: Is auto top-up enabled? automatically trigger funding to top-up the source account balance when the balance falls below the configured minimum level.
  * fundingAccountId `string`: Id of funding account from which to pull funds when auto top-up is triggered.  Note - if this is not set then auto top-up is effectively disabled.
  * minBalance `integer`: When the payor balance falls below this level then auto top-up will be triggered. Note - This is in minor units.
  * targetBalance `integer`: When the payor balance falls below the min balance then auto top-up will request funds bring the balance to this level. Note - this is in minor units.

### Category
* Category `string` (values: payment, payee, debit): The notification category.  One of "payment", "payee", "debit".

### Challenge
* Challenge `object`
  * description **required** `string`
  * value **required** `string`

### Challenge_2
* Challenge_2 `object`
  * description **required** `string`
  * value **required** `string`

### Company
* Company `object`
  * name **required** `string`
  * operatingName `string`
  * taxId `string`: Company Tax Id must be between 6 and 30 characters long

### CompanyResponse
* CompanyResponse `object`
  * name **required** `string`
  * operatingName `string`

### CompanyV1
* CompanyV1 `object`
  * name **required** `string`
  * operatingName `string`
  * taxId `string`: Company Tax Id (EIN) must be 9 numeric characters. Must match the regular expression ```[\d]{9}```.

### Company_2
* Company_2 `object`
  * name **required** `string`
  * operatingName `string`
  * taxId `string`: Company Tax Id must be between 6 and 30 characters long

### CreateFundingAccountRequestV2
* CreateFundingAccountRequestV2 `object`
  * accountName `string`: Required if type is FBO
  * accountNumber `string`: Required if type is FBO
  * currency `string`: ISO 4217 currency code, Required if type is WUBS_DECOUPLED
  * name **required** `string`
  * payorId **required** `string`
  * routingNumber `string`: Required if type is FBO
  * type **required** `string` (values: FBO, WUBS_DECOUPLED)

### CreateIndividual
* CreateIndividual `object`
  * dateOfBirth **required** `string`: Must not be date in future. Example - 1970-05-20
  * name **required** [IndividualV1_name](#individualv1_name)
  * nationalIdentification `string`

### CreateIndividual_2
* CreateIndividual_2 `object`
  * dateOfBirth **required** `string`: Must not be date in future. Example - 1970-05-20
  * name **required** [CreateIndividual_2_name](#createindividual_2_name)
  * nationalIdentification `string`

### CreateIndividual_2_name
* CreateIndividual_2_name `object`
  * firstName **required** `string`
  * lastName **required** `string`
  * otherNames `string`
  * title `string`

### CreatePayee
* CreatePayee `object`
  * address **required** [CreatePayeeAddress](#createpayeeaddress)
  * challenge [Challenge](#challenge)
  * company [CompanyV1](#companyv1)
  * email **required** `string`
  * individual [CreateIndividual](#createindividual)
  * language `string`: An IETF BCP 47 language code which has been configured for use within this Velo environment.<BR>
  * payeeId `string`
  * paymentChannel [CreatePaymentChannel](#createpaymentchannel)
  * payorRefs `array`
    * items [PayeePayorRefV2](#payeepayorrefv2)
  * remoteId **required** `string`
  * type **required** [PayeeType](#payeetype)

### CreatePayeeAddress
* CreatePayeeAddress `object`
  * city **required** `string`
  * country **required** `string`: Ideally a 2 letter ISO 3166-1 country code.  But a limited set of additional values will be corrected.  See Java Locale.getISOCountries() and Locale.getDisplayCountry()
  * countyOrProvince `string`
  * line1 **required** `string`
  * line2 `string`
  * line3 `string`
  * line4 `string`
  * zipOrPostcode `string`

### CreatePayeeAddress_2
* CreatePayeeAddress_2 `object`
  * city **required** `string`
  * country **required** `string` (values: AF, AX, AL, DZ, AS, AD, AO, AI, AQ, AG, AR, AM, AW, AU, AT, AZ, BS, BH, BD, BB, BY, BE, BZ, BJ, BM, BT, BO, BQ, BA, BW, BV, BR, IO, BN, BG, BF, BI, KH, CM, CA, CV, KY, CF, TD, CL, CN, CX, CC, CO, KM, CG, CD, CK, CR, CI, HR, CU, CW, CY, CZ, DK, DJ, DM, DO, EC, EG, SV, GQ, ER, EE, ET, FK, FO, FJ, FI, FR, GF, PF, TF, GA, GM, GE, DE, GH, GI, GR, GL, GD, GP, GU, GT, GG, GN, GW, GY, HT, HM, VA, HN, HK, HU, IS, IN, ID, IR, IQ, IE, IM, IL, IT, JM, JP, JE, JO, KZ, KE, KI, KP, KR, KW, KG, LA, LV, LB, LS, LR, LY, LI, LT, LU, MO, MK, MG, MW, MY, MV, ML, MT, MH, MQ, MR, MU, YT, MX, FM, MD, MC, MN, ME, MS, MA, MZ, MM, NA, NR, NP, NL, NC, NZ, NI, NE, NG, NU, NF, MP, NO, OM, PK, PW, PS, PA, PG, PY, PE, PH, PN, PL, PT, PR, QA, RE, RO, RU, RW, BL, SH, KN, LC, MF, PM, VC, WS, SM, ST, SA, SN, RS, SC, SL, SG, SX, SK, SI, SB, SO, ZA, GS, SS, ES, LK, SD, SR, SJ, SZ, SE, CH, SY, TW, TJ, TZ, TH, TL, TG, TK, TO, TT, TN, TR, TM, TC, TV, UG, UA, AE, GB, US, UM, UY, UZ, VU, VE, VN, VG, VI, WF, EH, YE, ZM, ZW): 2 letter ISO 3166-1 country code
  * countyOrProvince `string`
  * line1 **required** `string`
  * line2 `string`
  * line3 `string`
  * line4 `string`
  * zipOrPostcode `string`

### CreatePayee_2
* CreatePayee_2 `object`
  * address **required** [CreatePayeeAddress_2](#createpayeeaddress_2)
  * challenge [Challenge_2](#challenge_2)
  * company [Company_2](#company_2)
  * email **required** `string`
  * individual [CreateIndividual_2](#createindividual_2)
  * language `string`: An IETF BCP 47 language code which has been configured for use within this Velo environment.<BR>
  * payeeId `string`
  * paymentChannel [CreatePaymentChannel_2](#createpaymentchannel_2)
  * payorRefs `array`
    * items [PayeePayorRefV3](#payeepayorrefv3)
  * remoteId **required** `string`
  * type **required** [PayeeType](#payeetype)

### CreatePayeesCSVRequest
* CreatePayeesCSVRequest `object`
  * addressCity **required** `string`
  * addressCountry **required** `string`: Ideally a 2 letter ISO 3166-1 country code.  But a limited set of additional values will be corrected.  See Java Locale.getISOCountries() and Locale.getDisplayCountry()
  * addressCountyOrProvince `string`
  * addressLine1 **required** `string`
  * addressLine2 `string`
  * addressLine3 `string`
  * addressLine4 `string`
  * addressZipOrPostcode **required** `string`
  * challengeDescription `string`
  * challengeValue `string`
  * companyEIN `string`: Company Tax Id (EIN) must be 9 numeric characters. Must match the regular expression ```[\d]{9}```.
  * companyName `string`
  * companyOperatingName `string`
  * email **required** `string`
  * individualDateOfBirth `string`: Must not be date in future. Example - 1970-05-20
  * individualFirstName `string`
  * individualLastName `string`
  * individualNationalIdentification `string`
  * individualOtherNames `string`
  * individualTitle `string`
  * payeeLanguage `string`: An IETF BCP 47 language code which has been configured for use within this Velo environment.<BR>
  * paymentChannelAccountName `string`
  * paymentChannelAccountNumber `string`: Either routing number and account number or only iban must be set
  * paymentChannelCountryCode `string` (values: AF, AX, AL, DZ, AS, AD, AO, AI, AQ, AG, AR, AM, AW, AU, AT, AZ, BS, BH, BD, BB, BY, BE, BZ, BJ, BM, BT, BO, BQ, BA, BW, BV, BR, IO, BN, BG, BF, BI, KH, CM, CA, CV, KY, CF, TD, CL, CN, CX, CC, CO, KM, CG, CD, CK, CR, CI, HR, CU, CW, CY, CZ, DK, DJ, DM, DO, EC, EG, SV, GQ, ER, EE, ET, FK, FO, FJ, FI, FR, GF, PF, TF, GA, GM, GE, DE, GH, GI, GR, GL, GD, GP, GU, GT, GG, GN, GW, GY, HT, HM, VA, HN, HK, HU, IS, IN, ID, IR, IQ, IE, IM, IL, IT, JM, JP, JE, JO, KZ, KE, KI, KP, KR, KW, KG, LA, LV, LB, LS, LR, LY, LI, LT, LU, MO, MK, MG, MW, MY, MV, ML, MT, MH, MQ, MR, MU, YT, MX, FM, MD, MC, MN, ME, MS, MA, MZ, MM, NA, NR, NP, NL, NC, NZ, NI, NE, NG, NU, NF, MP, NO, OM, PK, PW, PS, PA, PG, PY, PE, PH, PN, PL, PT, PR, QA, RE, RO, RU, RW, BL, SH, KN, LC, MF, PM, VC, WS, SM, ST, SA, SN, RS, SC, SL, SG, SX, SK, SI, SB, SO, ZA, GS, SS, ES, LK, SD, SR, SJ, SZ, SE, CH, SY, TW, TJ, TZ, TH, TL, TG, TK, TO, TT, TN, TR, TM, TC, TV, UG, UA, AE, GB, US, UM, UY, UZ, VU, VE, VN, VG, VI, WF, EH, YE, ZM, ZW): Must be a 2 character country code - per ISO 3166-1
  * paymentChannelCurrency `string` (values: USD, GBP, EUR)
  * paymentChannelIban `string`: Must match the regular expression ```^[A-Za-z0-9]+$```.
  * paymentChannelRoutingNumber `string`: Either routing number and account number or only iban must be set
  * remoteId **required** `string`
  * type **required** [PayeeType](#payeetype)

### CreatePayeesCSVRequest_2
* CreatePayeesCSVRequest_2 `object`
  * addressCity **required** `string`
  * addressCountry **required** `string` (values: AF, AX, AL, DZ, AS, AD, AO, AI, AQ, AG, AR, AM, AW, AU, AT, AZ, BS, BH, BD, BB, BY, BE, BZ, BJ, BM, BT, BO, BQ, BA, BW, BV, BR, IO, BN, BG, BF, BI, KH, CM, CA, CV, KY, CF, TD, CL, CN, CX, CC, CO, KM, CG, CD, CK, CR, CI, HR, CU, CW, CY, CZ, DK, DJ, DM, DO, EC, EG, SV, GQ, ER, EE, ET, FK, FO, FJ, FI, FR, GF, PF, TF, GA, GM, GE, DE, GH, GI, GR, GL, GD, GP, GU, GT, GG, GN, GW, GY, HT, HM, VA, HN, HK, HU, IS, IN, ID, IR, IQ, IE, IM, IL, IT, JM, JP, JE, JO, KZ, KE, KI, KP, KR, KW, KG, LA, LV, LB, LS, LR, LY, LI, LT, LU, MO, MK, MG, MW, MY, MV, ML, MT, MH, MQ, MR, MU, YT, MX, FM, MD, MC, MN, ME, MS, MA, MZ, MM, NA, NR, NP, NL, NC, NZ, NI, NE, NG, NU, NF, MP, NO, OM, PK, PW, PS, PA, PG, PY, PE, PH, PN, PL, PT, PR, QA, RE, RO, RU, RW, BL, SH, KN, LC, MF, PM, VC, WS, SM, ST, SA, SN, RS, SC, SL, SG, SX, SK, SI, SB, SO, ZA, GS, SS, ES, LK, SD, SR, SJ, SZ, SE, CH, SY, TW, TJ, TZ, TH, TL, TG, TK, TO, TT, TN, TR, TM, TC, TV, UG, UA, AE, GB, US, UM, UY, UZ, VU, VE, VN, VG, VI, WF, EH, YE, ZM, ZW): Must be a 2 character country code - per ISO 3166-1
  * addressCountyOrProvince `string`
  * addressLine1 **required** `string`
  * addressLine2 `string`
  * addressLine3 `string`
  * addressLine4 `string`
  * addressZipOrPostcode **required** `string`
  * challengeDescription `string`
  * challengeValue `string`
  * companyEIN `string`
  * companyName `string`
  * companyOperatingName `string`
  * email **required** `string`
  * individualDateOfBirth `string`: Must not be date in future. Example - 1970-05-20
  * individualFirstName `string`
  * individualLastName `string`
  * individualNationalIdentification `string`
  * individualOtherNames `string`
  * individualTitle `string`
  * payeeLanguage `string`: An IETF BCP 47 language code which has been configured for use within this Velo environment.<BR>
  * paymentChannelAccountName `string`
  * paymentChannelAccountNumber `string`: Either routing number and account number or only iban must be set
  * paymentChannelCountryCode `string` (values: AF, AX, AL, DZ, AS, AD, AO, AI, AQ, AG, AR, AM, AW, AU, AT, AZ, BS, BH, BD, BB, BY, BE, BZ, BJ, BM, BT, BO, BQ, BA, BW, BV, BR, IO, BN, BG, BF, BI, KH, CM, CA, CV, KY, CF, TD, CL, CN, CX, CC, CO, KM, CG, CD, CK, CR, CI, HR, CU, CW, CY, CZ, DK, DJ, DM, DO, EC, EG, SV, GQ, ER, EE, ET, FK, FO, FJ, FI, FR, GF, PF, TF, GA, GM, GE, DE, GH, GI, GR, GL, GD, GP, GU, GT, GG, GN, GW, GY, HT, HM, VA, HN, HK, HU, IS, IN, ID, IR, IQ, IE, IM, IL, IT, JM, JP, JE, JO, KZ, KE, KI, KP, KR, KW, KG, LA, LV, LB, LS, LR, LY, LI, LT, LU, MO, MK, MG, MW, MY, MV, ML, MT, MH, MQ, MR, MU, YT, MX, FM, MD, MC, MN, ME, MS, MA, MZ, MM, NA, NR, NP, NL, NC, NZ, NI, NE, NG, NU, NF, MP, NO, OM, PK, PW, PS, PA, PG, PY, PE, PH, PN, PL, PT, PR, QA, RE, RO, RU, RW, BL, SH, KN, LC, MF, PM, VC, WS, SM, ST, SA, SN, RS, SC, SL, SG, SX, SK, SI, SB, SO, ZA, GS, SS, ES, LK, SD, SR, SJ, SZ, SE, CH, SY, TW, TJ, TZ, TH, TL, TG, TK, TO, TT, TN, TR, TM, TC, TV, UG, UA, AE, GB, US, UM, UY, UZ, VU, VE, VN, VG, VI, WF, EH, YE, ZM, ZW): Must be a 2 character country code - per ISO 3166-1
  * paymentChannelCurrency `string` (values: USD, GBP, EUR)
  * paymentChannelIban `string`: Must match the regular expression ```^[A-Za-z0-9]+$```.
  * paymentChannelRoutingNumber `string`: Either routing number and account number or only iban must be set
  * remoteId **required** `string`
  * type **required** [PayeeType](#payeetype)

### CreatePayeesCSVResponse
* CreatePayeesCSVResponse `object`
  * batchId `string`
  * rejectedCsvRows `array`
    * items [CreatePayeesCSVResponse_rejectedCsvRows](#createpayeescsvresponse_rejectedcsvrows)

### CreatePayeesCSVResponse_2
* CreatePayeesCSVResponse_2 `object`
  * batchId `string`
  * rejectedCsvRows `array`
    * items [CreatePayeesCSVResponse_rejectedCsvRows](#createpayeescsvresponse_rejectedcsvrows)

### CreatePayeesCSVResponse_rejectedCsvRows
* CreatePayeesCSVResponse_rejectedCsvRows `object`
  * lineNumber `integer`
  * message `string`
  * rejectedContent `string`

### CreatePayeesRequest
* CreatePayeesRequest `object`
  * payees **required** `array`
    * items [CreatePayee](#createpayee)
  * payorId **required** `string`

### CreatePayeesRequest_2
* CreatePayeesRequest_2 `object`
  * payees **required** `array`
    * items [CreatePayee_2](#createpayee_2)
  * payorId **required** `string`

### CreatePaymentChannel
* CreatePaymentChannel `object`
  * accountName **required** `string`
  * accountNumber `string`: Either routing number and account number or only iban must be set
  * countryCode **required** `string` (values: AF, AX, AL, DZ, AS, AD, AO, AI, AQ, AG, AR, AM, AW, AU, AT, AZ, BS, BH, BD, BB, BY, BE, BZ, BJ, BM, BT, BO, BQ, BA, BW, BV, BR, IO, BN, BG, BF, BI, KH, CM, CA, CV, KY, CF, TD, CL, CN, CX, CC, CO, KM, CG, CD, CK, CR, CI, HR, CU, CW, CY, CZ, DK, DJ, DM, DO, EC, EG, SV, GQ, ER, EE, ET, FK, FO, FJ, FI, FR, GF, PF, TF, GA, GM, GE, DE, GH, GI, GR, GL, GD, GP, GU, GT, GG, GN, GW, GY, HT, HM, VA, HN, HK, HU, IS, IN, ID, IR, IQ, IE, IM, IL, IT, JM, JP, JE, JO, KZ, KE, KI, KP, KR, KW, KG, LA, LV, LB, LS, LR, LY, LI, LT, LU, MO, MK, MG, MW, MY, MV, ML, MT, MH, MQ, MR, MU, YT, MX, FM, MD, MC, MN, ME, MS, MA, MZ, MM, NA, NR, NP, NL, NC, NZ, NI, NE, NG, NU, NF, MP, NO, OM, PK, PW, PS, PA, PG, PY, PE, PH, PN, PL, PT, PR, QA, RE, RO, RU, RW, BL, SH, KN, LC, MF, PM, VC, WS, SM, ST, SA, SN, RS, SC, SL, SG, SX, SK, SI, SB, SO, ZA, GS, SS, ES, LK, SD, SR, SJ, SZ, SE, CH, SY, TW, TJ, TZ, TH, TL, TG, TK, TO, TT, TN, TR, TM, TC, TV, UG, UA, AE, GB, US, UM, UY, UZ, VU, VE, VN, VG, VI, WF, EH, YE, ZM, ZW): Two character country code
  * currency **required** `string` (values: USD, GBP, EUR)
  * iban `string`: Must match the regular expression ```^[A-Za-z0-9]+$```. Either routing number and account number or only iban must be set
  * paymentChannelName `string`
  * routingNumber `string`: Either routing number and account number or only iban must be set

### CreatePaymentChannel_2
* CreatePaymentChannel_2 `object`
  * accountName **required** `string`
  * accountNumber `string`: Either routing number and account number or only iban must be set
  * countryCode **required** `string` (values: AF, AX, AL, DZ, AS, AD, AO, AI, AQ, AG, AR, AM, AW, AU, AT, AZ, BS, BH, BD, BB, BY, BE, BZ, BJ, BM, BT, BO, BQ, BA, BW, BV, BR, IO, BN, BG, BF, BI, KH, CM, CA, CV, KY, CF, TD, CL, CN, CX, CC, CO, KM, CG, CD, CK, CR, CI, HR, CU, CW, CY, CZ, DK, DJ, DM, DO, EC, EG, SV, GQ, ER, EE, ET, FK, FO, FJ, FI, FR, GF, PF, TF, GA, GM, GE, DE, GH, GI, GR, GL, GD, GP, GU, GT, GG, GN, GW, GY, HT, HM, VA, HN, HK, HU, IS, IN, ID, IR, IQ, IE, IM, IL, IT, JM, JP, JE, JO, KZ, KE, KI, KP, KR, KW, KG, LA, LV, LB, LS, LR, LY, LI, LT, LU, MO, MK, MG, MW, MY, MV, ML, MT, MH, MQ, MR, MU, YT, MX, FM, MD, MC, MN, ME, MS, MA, MZ, MM, NA, NR, NP, NL, NC, NZ, NI, NE, NG, NU, NF, MP, NO, OM, PK, PW, PS, PA, PG, PY, PE, PH, PN, PL, PT, PR, QA, RE, RO, RU, RW, BL, SH, KN, LC, MF, PM, VC, WS, SM, ST, SA, SN, RS, SC, SL, SG, SX, SK, SI, SB, SO, ZA, GS, SS, ES, LK, SD, SR, SJ, SZ, SE, CH, SY, TW, TJ, TZ, TH, TL, TG, TK, TO, TT, TN, TR, TM, TC, TV, UG, UA, AE, GB, US, UM, UY, UZ, VU, VE, VN, VG, VI, WF, EH, YE, ZM, ZW): Two character country code
  * currency **required** `string` (values: USD, GBP, EUR)
  * iban `string`: Must match the regular expression ```^[A-Za-z0-9]+$```. Either routing number and account number or only iban must be set
  * paymentChannelName `string`
  * routingNumber `string`: Either routing number and account number or only iban must be set

### CreatePayorLinkRequest
* CreatePayorLinkRequest `object`
  * fromPayorId **required** `string`
  * linkType **required** `string` (values: PARENT_OF)
  * toPayorId **required** `string`

### CreatePayoutRequestV3
* CreatePayoutRequestV3 `object`
  * payments **required** `array`
    * items [PaymentInstructionV3](#paymentinstructionv3)
  * payorId `string`: Deprecated in v2.16. Any value supplied here will be ignored.
  * payoutFromPayorId `string`: The id of the payor whose source account(s) will be debited. payoutFromPayorId and payoutToPayorId must be both supplied or both omitted.
  * payoutMemo `string`: Text applied to all payment memos unless specified explicitly on a payment. This should be the reference field on the statement seen by the payee (but not via ACH)
  * payoutToPayorId `string`: The id of the payor whose payees will be paid. payoutFromPayorId and payoutToPayorId must be both supplied or both omitted.

### CreateWebhookRequest
* CreateWebhookRequest `object`
  * authorizationHeader `string`: the authorization header to include with the notification.
  * categories `array`: the categories to enable.
    * items [Category](#category)
  * enabled **required** `boolean`: whether the webhook is enabled.
  * payorId **required** `string`
  * webhookUrl **required** `string`: the webhook URL to use.

### Error
* Error `object`
  * errorCode `string`: Unique numeric code that can be used for switching client behavior or to drive translated or customised error messages
  * errorData [ErrorData](#errordata)
  * errorMessage `string`: English language message indicating the nature of the error
  * localisationDetails [LocalisationDetails](#localisationdetails)
  * location `string`: the property or object that caused the error
  * locationType `string` (values: requestBody, queryParam, requestParam, header, pathParam): the location type in the request that was the cause of the error
  * reasonCode `string`: a camel-cased string that can be used by clients to localise client error messages (deprecated)

### ErrorData
* ErrorData `object`
  * content `object`: Object containing typed error data specific to the API
  * description `string`: The description of the error data content

### ErrorResponse
* ErrorResponse `object`: Error response returned by all error conditions in Velo Services
  * correlationId `string`: a unique identifier to track a request or related sequence of requests
  * errors `array`: one or more errors
    * items [Error](#error)
  * httpStatusCode `integer`: this will mirror the Status-Code part of the Status-Line http response header and is included for extra clarity

### FailedSubmission
* FailedSubmission `object`
  * failedSubmission [Payee_2](#payee_2)
  * failureMessage `string`

### FailedSubmission_2
* FailedSubmission_2 `object`
  * failedSubmission [Payee_2](#payee_2)
  * failureMessage `string`

### FundingAccountResponse
* FundingAccountResponse `object`
  * accountName `string`: name on the bank account
  * accountNumber `string`: bank account number
  * country `string`: ISO 3166-1 2 letter country code (upper case)
  * currency `string`: ISO 4217 currency code
  * id `string`: Funding Account Id
  * name `string`: name of funding account
  * payorId `string`
  * routingNumber `string`: bank account routing number
  * sourceAccountIds `array`
    * items `string`
  * type `string`: Funding account type

### FundingAccountResponse_2
* FundingAccountResponse_2 `object`
  * accountName `string`: name on the bank account
  * accountNumber `string`: bank account number
  * archived `boolean`: A flag for whether the funding account has been archived.  Only present in the response if true.
  * country `string`: ISO 3166-1 2 letter country code (upper case)
  * currency `string`: ISO 4217 currency code
  * id `string`: Funding Account Id
  * name `string`: name of funding account
  * payorId `string`
  * routingNumber `string`: bank account routing number
  * type `string`: Funding account type

### FundingAccountType
* FundingAccountType `string` (values: FBO, WUBS_DECOUPLED)

### FundingAudit
* FundingAudit `object`
  * amount `number`: The amount funded
  * currency `string`: The currency of the funding
  * dateTime `string`
  * events `array`
    * items [FundingEvent](#fundingevent)
  * fundingAccountName `string`
  * fundingType `string` (values: ACH, WIRE, EMBEDDED)
  * sourceAccountName `string`
  * status `string` (values: PENDING, FAILED, CREDIT, DEBIT)
  * topupType `string` (values: AUTOMATIC, MANUAL)

### FundingEvent
* FundingEvent `object`
  * eventDateTime `string`
  * eventId `string`
  * fundingEventType [FundingEventType](#fundingeventtype)
  * principal `string`

### FundingEventType
* FundingEventType `string` (values: PAYOR_FUNDING_DETECTED, PAYOR_FUNDING_REQUESTED, PAYOR_FUNDING_RETURN_RECEIVED, FUNDING_RETURN_DETECTED, PAYOR_FUNDING_REQUEST_SUBMITTED, PAYOR_FUNDING_ENTRY_DETAIL_RECEIVED, FUNDING_DEALLOCATED)

### FundingPayorStatusAuditResponse
* FundingPayorStatusAuditResponse `object`
  * amount `integer`
  * currency `string`: Valid ISO 4217 3 letter currency code. See the <a href="https://www.iso.org/iso-4217-currency-codes.html" target="_blank" a>ISO specification</a> for details.
  * fundingId `string`
  * status `string`

### FundingRequestV1
* FundingRequestV1 `object`
  * amount **required** `integer`: Amount to fund, decimal implied

### FundingRequestV2
* FundingRequestV2 `object`
  * amount **required** `integer`: Amount to fund, decimal implied

### FundingRequestV3
* FundingRequestV3 `object`
  * amount **required** `integer`: Amount to fund in minor units
  * fundingAccountId **required** `string`: The funding account id

### FxSummaryV3
* FxSummaryV3 `object`
  * creationDateTime **required** `string`
  * fundingStatus **required** `string` (values: FUNDED, INSTRUCTED, UNFUNDED)
  * invertedRate **required** `number`
  * paymentCurrency [PaymentAuditCurrencyV3](#paymentauditcurrencyv3)
  * quoteId **required** `string`
  * rate **required** `number`
  * sourceCurrency [PaymentAuditCurrencyV3](#paymentauditcurrencyv3)
  * status **required** `string` (values: UNQUOTED, QUOTED, EXPIRED, EXECUTED)
  * totalCost **required** `integer`
  * totalPaymentAmount **required** `integer`

### FxSummaryV4
* FxSummaryV4 `object`
  * creationDateTime **required** `string`
  * fundingStatus **required** `string` (values: FUNDED, INSTRUCTED, UNFUNDED)
  * invertedRate **required** `number`
  * paymentCurrency [PaymentAuditCurrencyV4](#paymentauditcurrencyv4)
  * quoteId **required** `string`
  * rate **required** `number`
  * sourceCurrency [PaymentAuditCurrencyV4](#paymentauditcurrencyv4)
  * status **required** `string` (values: UNQUOTED, QUOTED, EXPIRED, EXECUTED)
  * totalCost **required** `integer`
  * totalPaymentAmount **required** `integer`

### GetFundingsResponse
* GetFundingsResponse `object`: List Users Response Object
  * content `array`
    * items [FundingAudit](#fundingaudit)
  * links `array`
    * items [GetFundingsResponse_links](#getfundingsresponse_links)
  * page [PagedUserResponse_page](#pageduserresponse_page)

### GetFundingsResponse_links
* GetFundingsResponse_links `object`
  * href `string`
  * rel `string`

### GetPayeeListResponse
* GetPayeeListResponse `object`
  * company [GetPayeeListResponseCompany](#getpayeelistresponsecompany)
  * country `string`
  * created `string`
  * disabled `boolean`
  * disabledComment `string`
  * disabledUpdatedTimestamp `string`
  * displayName `string`
  * email `string`
  * individual [GetPayeeListResponseIndividual](#getpayeelistresponseindividual)
  * language `string`: An IETF BCP 47 language code which has been configured for use within this Velo environment.<BR>
  * onboardedStatus [OnboardedStatus_2](#onboardedstatus_2)
  * payeeId `string`
  * payeeType [PayeeType](#payeetype)
  * payorRefs `array`
    * items [PayeePayorRefV3](#payeepayorrefv3)
  * watchlistOverrideComment `string`
  * watchlistStatus [WatchlistStatus](#watchliststatus)
  * watchlistStatusUpdatedTimestamp `string`

### GetPayeeListResponseCompany
* GetPayeeListResponseCompany `object`
  * name `string`
  * operatingName `string`

### GetPayeeListResponseIndividual
* GetPayeeListResponseIndividual `object`
  * name [Name](#name)

### GetPaymentsForPayoutResponseV3
* GetPaymentsForPayoutResponseV3 `object`: List Payments for payout
  * content `array`
    * items [PaymentResponseV3](#paymentresponsev3)
  * links `array`
    * items [GetPayoutsResponseV3_links](#getpayoutsresponsev3_links)
  * page [GetPaymentsForPayoutResponseV3_page](#getpaymentsforpayoutresponsev3_page)
  * summary [GetPaymentsForPayoutResponseV3_summary](#getpaymentsforpayoutresponsev3_summary)

### GetPaymentsForPayoutResponseV3_page
* GetPaymentsForPayoutResponseV3_page `object`
  * numberOfElements `integer`
  * page `integer`
  * pageSize `integer`
  * totalElements `integer`
  * totalPages `integer`

### GetPaymentsForPayoutResponseV3_summary
* GetPaymentsForPayoutResponseV3_summary `object`
  * confirmedPayments `integer`: The count of payments within the payout which have been confirmed.
  * failedPayments `integer`: The count of payments within the payout which have failed or been returned.
  * incompletePayments `integer`: The count of payments within the payout which are incomplete.
  * instructedDateTime `string`: The date/time at which the payout was instructed.
  * payoutMemo `string`: The memo attached to the payout.
  * payoutStatus `string` (values: ACCEPTED, REJECTED, SUBMITTED, QUOTED, INSTRUCTED, COMPLETED, INCOMPLETE, CONFIRMED, WITHDRAWN): The current status of the payout.
  * releasedPayments `integer`: The count of payments within the payout which have been released.
  * submittedDateTime `string`: The date/time at which the payout was submitted.
  * totalPayments `integer`: The count of payments within the payout.
  * withdrawnDateTime `string`: The date/time at which the payout was withdrawn.

### GetPaymentsForPayoutResponseV4
* GetPaymentsForPayoutResponseV4 `object`: List Payments for payout
  * content `array`
    * items [PaymentResponseV4](#paymentresponsev4)
  * links `array`
    * items [PagedPayeeResponse_links](#pagedpayeeresponse_links)
  * page [PagedPayeeInvitationStatusResponse_page](#pagedpayeeinvitationstatusresponse_page)
  * summary [GetPaymentsForPayoutResponseV4_summary](#getpaymentsforpayoutresponsev4_summary)

### GetPaymentsForPayoutResponseV4_summary
* GetPaymentsForPayoutResponseV4_summary `object`
  * confirmedPayments `integer`: The count of payments within the payout which have been confirmed.
  * incompletePayments `integer`: The count of payments within the payout which are incomplete.
  * instructed [PayoutPrincipalV4](#payoutprincipalv4)
  * instructedDateTime `string`: The date/time at which the payout was instructed.
  * payoutFrom [PayoutPayorV4](#payoutpayorv4)
  * payoutMemo `string`: The memo attached to the payout.
  * payoutStatus `string` (values: ACCEPTED, REJECTED, SUBMITTED, QUOTED, INSTRUCTED, COMPLETED, INCOMPLETE, CONFIRMED, WITHDRAWN): The current status of the payout.
  * payoutTo [PayoutPayorV4](#payoutpayorv4)
  * payoutType [PayoutTypeV4](#payouttypev4)
  * quoted [PayoutPrincipalV4](#payoutprincipalv4)
  * quotedDateTime `string`: The date/time at which the payout was quoted.
  * releasedPayments `integer`: The count of payments within the payout which have been released.
  * returnedPayments `integer`: The count of payments within the payout which have been returned.
  * submittedDateTime `string`: The date/time at which the payout was submitted.
  * submitting [PayoutPayorV4](#payoutpayorv4)
  * totalPayments `integer`: The count of payments within the payout.
  * withdrawn [PayoutPrincipalV4](#payoutprincipalv4)
  * withdrawnDateTime `string`
  * withdrawnPayments `integer`: The count of payments within the payout which have been withdrawn.

### GetPayoutStatistics
* GetPayoutStatistics `object`
  * thisMonthFailedPaymentsCount **required** `integer`
  * thisMonthPayoutsCount **required** `integer`

### GetPayoutsResponseV3
* GetPayoutsResponseV3 `object`: List Payouts Response
  * content `array`
    * items [PayoutSummaryAuditV3](#payoutsummaryauditv3)
  * links `array`
    * items [GetPayoutsResponseV3_links](#getpayoutsresponsev3_links)
  * page [GetPayoutsResponseV3_page](#getpayoutsresponsev3_page)

### GetPayoutsResponseV3_links
* GetPayoutsResponseV3_links `object`
  * href `string`
  * rel `string`

### GetPayoutsResponseV3_page
* GetPayoutsResponseV3_page `object`
  * numberOfElements `integer`
  * page `integer`
  * pageSize `integer`
  * totalElements `integer`
  * totalPages `integer`

### GetPayoutsResponseV4
* GetPayoutsResponseV4 `object`: List Payouts Response
  * content `array`
    * items [PayoutSummaryAuditV4](#payoutsummaryauditv4)
  * links `array`
    * items [PagedPayeeResponse_links](#pagedpayeeresponse_links)
  * page [PagedPayeeInvitationStatusResponse_page](#pagedpayeeinvitationstatusresponse_page)

### Individual
* Individual `object`
  * dateOfBirth **required** `string`: If not authorized to view, value will be masked. Example: - XXXX-XX-XX
  * name **required** [IndividualV1_name](#individualv1_name)
  * nationalIdentification `string`: If not authorized to view, value will be masked. Example: XXXXX1234

### IndividualResponse
* IndividualResponse `object`
  * name **required** [IndividualV1_name](#individualv1_name)

### IndividualV1
* IndividualV1 `object`
  * dateOfBirth **required** `string`: If not authorized to view, value will be masked. Example: - XXXX-XX-XX
  * name **required** [IndividualV1_name](#individualv1_name)
  * nationalIdentification `string`: If not authorized to view, value will be masked. Example: XXXXX1234

### IndividualV1_name
* IndividualV1_name `object`
  * firstName **required** `string`
  * lastName **required** `string`
  * otherNames `string`
  * title `string`

### Individual_2
* Individual_2 `object`
  * dateOfBirth **required** `string`: If not authorized to view, value will be masked. Example: - XXXX-XX-XX
  * name **required** [IndividualV1_name](#individualv1_name)
  * nationalIdentification `string`: If not authorized to view, value will be masked. Example: XXXXX1234

### InvitationStatus
* InvitationStatus `string` (values: ACCEPTED, PENDING, DECLINED)

### InvitationStatusResponse
* InvitationStatusResponse `object`
  * payeeInvitationStatuses **required** `array`
    * items [PayeeInvitationStatus](#payeeinvitationstatus)

### InvitationStatus_2
* InvitationStatus_2 `string` (values: ACCEPTED, PENDING, DECLINED)

### InvitePayeeRequest
* InvitePayeeRequest `object`
  * payorId **required** `string`

### InvitePayeeRequest_2
* InvitePayeeRequest_2 `object`
  * payorId **required** `string`

### InviteUserRequest
* InviteUserRequest `object`
  * email **required** `string`: the email address of the invited user
  * entityId `string`: The payorId or null if the user is not a payor user
  * firstName `string`
  * lastName `string`
  * mfaType **required** `string` (values: SMS, YUBIKEY, TOTP): <p>The MFA type that the user will use</p>
  * primaryContactNumber **required** `string`: The main contact number for the user
  * roles **required** `array`: The role(s) for the user
    * items `string`
  * secondaryContactNumber `string`: The secondary contact number for the user
  * smsNumber **required** `string`: The phone number of a device that the user can receive sms messages on
  * verificationCode `string`: Optional property that MUST be suppied when manually verifying a user

### IsoCountryCode
* ISO 3166 2 Character Country Code `string`: Valid ISO 3166 2 character country code. See the <a href="https://www.iso.org/iso-3166-country-codes.html" target="_blank" a>ISO specification</a> for details.

### IsoCurrency
* ISO Currency Code `string`: Valid ISO 4217 3 letter currency code. See the <a href="https://www.iso.org/iso-4217-currency-codes.html" target="_blank" a>ISO specification</a> for details.

### KycState
* KycState `string` (values: FAILED_KYC, PASSED_KYC, REQUIRES_KYC): The kyc state of the payor.

### Language
* Language [SupportedLanguage](#supportedlanguage)

### LinkForResponse
* LinkForResponse `object`
  * href `string`
  * rel `string`

### ListFundingAccountsResponse
* ListFundingAccountsResponse `object`: List Source Accounts Response Object
  * content `array`
    * items [FundingAccountResponse](#fundingaccountresponse)
  * links `array`
    * items [ListSourceAccountResponse_links](#listsourceaccountresponse_links)
  * page [ListSourceAccountResponse_page](#listsourceaccountresponse_page)

### ListFundingAccountsResponse_2
* ListFundingAccountsResponse_2 `object`: List Funding Accounts Response Object
  * content `array`
    * items [FundingAccountResponse_2](#fundingaccountresponse_2)
  * links `array`
    * items [ListSourceAccountResponse_links](#listsourceaccountresponse_links)
  * page [ListSourceAccountResponse_page](#listsourceaccountresponse_page)

### ListPaymentsResponseV3
* ListPaymentsResponseV3 `object`: List Payments Response Object
  * content `array`
    * items [PaymentResponseV3](#paymentresponsev3)
  * links `array`
    * items [GetPayoutsResponseV3_links](#getpayoutsresponsev3_links)
  * page [ListPaymentsResponseV3_page](#listpaymentsresponsev3_page)

### ListPaymentsResponseV3_page
* ListPaymentsResponseV3_page `object`
  * numberOfElements `integer`
  * page `integer`
  * pageSize `integer`
  * totalElements `integer`
  * totalPages `integer`

### ListPaymentsResponseV4
* ListPaymentsResponseV4 `object`: List Payments Response Object
  * content `array`
    * items [PaymentResponseV4](#paymentresponsev4)
  * links `array`
    * items [GetPayoutsResponseV3_links](#getpayoutsresponsev3_links)
  * page [ListPaymentsResponseV3_page](#listpaymentsresponsev3_page)

### ListSourceAccountResponse
* ListSourceAccountResponse `object`: List Source Accounts Response Object
  * content `array`
    * items [SourceAccountResponse](#sourceaccountresponse)
  * links `array`
    * items [ListSourceAccountResponse_links](#listsourceaccountresponse_links)
  * page [ListSourceAccountResponse_page](#listsourceaccountresponse_page)

### ListSourceAccountResponseV2
* ListSourceAccountResponseV2 `object`: List Source Accounts Response Object
  * content `array`
    * items [SourceAccountResponseV2](#sourceaccountresponsev2)
  * links `array`
    * items [ListSourceAccountResponseV2_links](#listsourceaccountresponsev2_links)
  * page [PagedUserResponse_page](#pageduserresponse_page)

### ListSourceAccountResponseV2_links
* ListSourceAccountResponseV2_links `object`
  * href `string`
  * rel `string`

### ListSourceAccountResponseV3
* ListSourceAccountResponseV3 `object`: List Source Accounts Response Object
  * content `array`
    * items [SourceAccountResponseV3](#sourceaccountresponsev3)
  * links `array`
    * items [ListSourceAccountResponseV3_links](#listsourceaccountresponsev3_links)
  * page [PagedUserResponse_page](#pageduserresponse_page)

### ListSourceAccountResponseV3_links
* ListSourceAccountResponseV3_links `object`
  * href `string`
  * rel `string`

### ListSourceAccountResponse_links
* ListSourceAccountResponse_links `object`
  * href `string`
  * rel `string`

### ListSourceAccountResponse_page
* ListSourceAccountResponse_page `object`
  * numberOfElements `integer`
  * page `integer`
  * pageSize `integer`
  * totalElements `integer`
  * totalPages `integer`

### LocalisationDetails
* LocalisationDetails `object`
  * parameters `object`: name to value map containing any named parameters that appear in the message template
  * template `string`: the English language message template used to construct the error message

### MFADetails
* MFADetails `object`
  * mfa_type [MFAType](#mfatype)
  * verified `boolean`: true if the user has used the MFA device for login

### MFAType
* MFAType `string` (values: SMS, YUBIKEY, TOTP): The type of the MFA device

### MarketingOptIn
* MarketingOptIn `object`
  * optedIn `boolean`
  * timestamp `string`

### Name
* Name `object`
  * firstName `string`
  * lastName `string`
  * otherNames `string`
  * title `string`

### Notifications
* Notifications `object`
  * minimumBalance `integer`

### Notifications_2
* Notifications_2 `object`
  * minimumBalance `integer`

### OfacStatus
* OfacStatus `string` (values: PENDING, PASSED, FAILED)

### OfacStatus_2
* OfacStatus_2 `string` (values: PENDING, PASSED, FAILED)

### OnboardedStatus
* OnboardedStatus `string` (values: CREATED, INVITED, REGISTERED, ONBOARDED)

### OnboardedStatus_2
* OnboardedStatus_2 `string` (values: CREATED, INVITED, REGISTERED, ONBOARDED)

### PageForResponse
* PageForResponse `object`
  * numberOfElements `integer`
  * page `integer`
  * pageSize `integer`
  * totalElements `integer`
  * totalPages `integer`

### PageResourceFundingPayorStatusAuditResponseFundingPayorStatusAuditResponse
* PageResourceFundingPayorStatusAuditResponseFundingPayorStatusAuditResponse `object`
  * content `array`
    * items [FundingPayorStatusAuditResponse](#fundingpayorstatusauditresponse)
  * links `array`
    * items [LinkForResponse](#linkforresponse)
  * page [PageForResponse](#pageforresponse)

### PagedPayeeInvitationStatusResponse
* PagedPayeeInvitationStatusResponse `object`: List Payees Invitation Status Object
  * content `array`
    * items [PayeeInvitationStatusResponse](#payeeinvitationstatusresponse)
  * links `array`
    * items [PagedPayeeResponse_links](#pagedpayeeresponse_links)
  * page [PagedPayeeInvitationStatusResponse_page](#pagedpayeeinvitationstatusresponse_page)

### PagedPayeeInvitationStatusResponse_2
* PagedPayeeInvitationStatusResponse_2 `object`: List Payees Invitation Status Object
  * content `array`
    * items [PayeeInvitationStatusResponse_2](#payeeinvitationstatusresponse_2)
  * links `array`
    * items [PagedPayeeResponse_links](#pagedpayeeresponse_links)
  * page [PagedPayeeInvitationStatusResponse_page](#pagedpayeeinvitationstatusresponse_page)

### PagedPayeeInvitationStatusResponse_page
* PagedPayeeInvitationStatusResponse_page `object`
  * numberOfElements `integer`
  * page `integer`
  * pageSize `integer`
  * totalElements `integer`
  * totalPages `integer`

### PagedPayeeResponse
* PagedPayeeResponse `object`: List Payees Response Object
  * content `array`
    * items [PayeeResponse](#payeeresponse)
  * links `array`
    * items [PagedPayeeResponse_links](#pagedpayeeresponse_links)
  * page [PagedPayeeResponse_page](#pagedpayeeresponse_page)
  * summary [PagedPayeeResponse_summary](#pagedpayeeresponse_summary)

### PagedPayeeResponse_2
* PagedPayeeResponse_2 `object`: List Payees Response Object
  * content `array`
    * items [GetPayeeListResponse](#getpayeelistresponse)
  * links `array`
    * items [PagedPayeeResponse_links](#pagedpayeeresponse_links)
  * page [PagedPayeeResponse_page](#pagedpayeeresponse_page)
  * summary [PagedPayeeResponse_2_summary](#pagedpayeeresponse_2_summary)

### PagedPayeeResponse_2_summary
* PagedPayeeResponse_2_summary `object`
  * totalInvitedCount `integer`
  * totalOnboardedCount `integer`
  * totalPayeesCount `integer`
  * totalRegisteredCount `integer`
  * totalWatchlistFailedCount `integer`

### PagedPayeeResponse_links
* PagedPayeeResponse_links `object`
  * href `string`
  * rel `string`

### PagedPayeeResponse_page
* PagedPayeeResponse_page `object`
  * numberOfElements `integer`
  * page `integer`
  * pageSize `integer`
  * totalElements `integer`
  * totalPages `integer`

### PagedPayeeResponse_summary
* PagedPayeeResponse_summary `object`
  * totalInvitedCount `integer`
  * totalOfacFailedCount `integer`
  * totalOnboardedCount `integer`
  * totalPayeesCount `integer`
  * totalRegisteredCount `integer`

### PagedPaymentsResponseV3
* PagedPaymentsResponseV3 `object`: List Payees Response Object
  * content `array`
    * items [PaymentV3](#paymentv3)
  * links `array`
    * items [PagedPayeeResponse_links](#pagedpayeeresponse_links)
  * page [PagedPayeeInvitationStatusResponse_page](#pagedpayeeinvitationstatusresponse_page)

### PagedUserResponse
* PagedUserResponse `object`: List Users Response Object
  * content `array`
    * items [UserResponse](#userresponse)
  * links `array`
    * items [PagedUserResponse_links](#pageduserresponse_links)
  * page [PagedUserResponse_page](#pageduserresponse_page)

### PagedUserResponse_links
* PagedUserResponse_links `object`
  * href `string`
  * rel `string`

### PagedUserResponse_page
* PagedUserResponse_page `object`
  * numberOfElements `integer`
  * page `integer`
  * pageSize `integer`
  * totalElements `integer`
  * totalPages `integer`

### PasswordRequest
* PasswordRequest `object`
  * password **required** `string`: a password that passes validation

### PayableIssue
* PayableIssue `object`: payable issues for the payee and payor combination
  * code **required** `string`
  * message **required** `string`

### PayableIssue_2
* PayableIssue_2 `object`: payable issues for the payee and payor combination
  * code **required** `string`
  * message **required** `string`

### Payee
* Payee `object`
  * acceptTermsAndConditionsTimestamp `string`: The timestamp when the payee last accepted T&Cs
  * address [PayeeAddress](#payeeaddress)
  * cellphoneNumber `string`
  * challenge [Challenge](#challenge)
  * company [CompanyV1](#companyv1)
  * country `string`
  * created `string`
  * displayName `string`
  * email `string`
  * gracePeriodEndDate `string`
  * individual [IndividualV1](#individualv1)
  * language `string`: An IETF BCP 47 language code which has been configured for use within this Velo environment.<BR>
  * lastOfacCheckTimestamp `string`
  * marketingOptIns `array`
    * items [MarketingOptIn](#marketingoptin)
  * ofacStatus [OfacStatus](#ofacstatus)
  * onboardedStatus [OnboardedStatus](#onboardedstatus)
  * payeeId `string`
  * payeeType [PayeeType](#payeetype)
  * paymentChannel [PayeePaymentChannel](#payeepaymentchannel)
  * payorRefs `array`
    * items [PayeePayorRef](#payeepayorref)

### PayeeAddress
* PayeeAddress `object`
  * city **required** `string`
  * country **required** `string`
  * countyOrProvince `string`
  * line1 **required** `string`
  * line2 `string`
  * line3 `string`
  * line4 `string`
  * zipOrPostcode `string`

### PayeeAddress_2
* PayeeAddress_2 `object`
  * city **required** `string`
  * country **required** `string`
  * countyOrProvince `string`
  * line1 **required** `string`
  * line2 `string`
  * line3 `string`
  * line4 `string`
  * zipOrPostcode `string`

### PayeeDelta
* PayeeDelta `object`
  * dbaName `string`
  * displayName `string`
  * email `string`
  * onboardedStatus [OnboardedStatus](#onboardedstatus)
  * payeeCountry `string`
  * payeeId **required** `string`
  * remoteId **required** `string`

### PayeeDeltaResponse
* PayeeDeltaResponse `object`: List Payee Changes Response Object
  * content `array`
    * items [PayeeDelta](#payeedelta)
  * links `array`
    * items [PayeeDeltaResponse_links](#payeedeltaresponse_links)
  * page [PayeeDeltaResponse_page](#payeedeltaresponse_page)

### PayeeDeltaResponse_2
* PayeeDeltaResponse_2 `object`: List Payee Changes Response Object
  * content `array`
    * items [PayeeDelta_2](#payeedelta_2)
  * links `array`
    * items [PayeeDeltaResponse_2_links](#payeedeltaresponse_2_links)
  * page [PayeeDeltaResponse_page](#payeedeltaresponse_page)

### PayeeDeltaResponse_2_links
* PayeeDeltaResponse_2_links `object`
  * href `string`
  * rel `string`

### PayeeDeltaResponse_links
* PayeeDeltaResponse_links `object`
  * href `string`
  * rel `string`

### PayeeDeltaResponse_page
* PayeeDeltaResponse_page `object`
  * numberOfElements `integer`
  * page `integer`
  * pageSize `integer`
  * totalElements `integer`
  * totalPages `integer`

### PayeeDelta_2
* PayeeDelta_2 `object`
  * dbaName `string`
  * displayName `string`
  * email `string`
  * onboardedStatus [OnboardedStatus_2](#onboardedstatus_2)
  * payeeCountry `string`
  * payeeId **required** `string`
  * remoteId **required** `string`

### PayeeDetailResponse
* PayeeDetailResponse `object`
  * acceptTermsAndConditionsTimestamp `string`: The timestamp when the payee last accepted T&Cs
  * address [PayeeAddress_2](#payeeaddress_2)
  * cellphoneNumber `string`
  * challenge [Challenge_2](#challenge_2)
  * company [Company_2](#company_2)
  * country `string`
  * created `string`
  * disabled `boolean`
  * disabledComment `string`
  * disabledUpdatedTimestamp `string`
  * displayName `string`
  * email `string`
  * enhancedKycCompleted `boolean`
  * gracePeriodEndDate `string`
  * individual [Individual_2](#individual_2)
  * kycCompletedTimestamp `string`
  * language `string`: An IETF BCP 47 language code which has been configured for use within this Velo environment.<BR>
  * marketingOptInDecision `boolean`
  * marketingOptInTimestamp `string`
  * onboardedStatus [OnboardedStatus_2](#onboardedstatus_2)
  * pausePayment `boolean`
  * pausePaymentTimestamp `string`
  * payeeId `string`
  * payeeType [PayeeType](#payeetype)
  * payorRefs `array`
    * items [PayeePayorRefV3](#payeepayorrefv3)
  * watchlistOverrideComment `string`
  * watchlistOverrideExpiresAtTimestamp `string`
  * watchlistStatus [WatchlistStatus](#watchliststatus)
  * watchlistStatusUpdatedTimestamp `string`

### PayeeDetailResponse_2
* PayeeDetailResponse_2 `object`
  * acceptTermsAndConditionsTimestamp `string`: The timestamp when the payee last accepted T&Cs
  * address [PayeeAddress_2](#payeeaddress_2)
  * cellphoneNumber `string`
  * challenge [Challenge_2](#challenge_2)
  * company [Company_2](#company_2)
  * country `string`
  * created `string`
  * disabled `boolean`
  * disabledComment `string`
  * disabledUpdatedTimestamp `string`
  * displayName `string`
  * email `string`
  * enhancedKycCompleted `boolean`
  * gracePeriodEndDate `string`
  * individual [Individual_2](#individual_2)
  * kycCompletedTimestamp `string`
  * language `string`: An IETF BCP 47 language code which has been configured for use within this Velo environment.<BR>
  * marketingOptInDecision `boolean`
  * marketingOptInTimestamp `string`
  * onboardedStatus [OnboardedStatus_2](#onboardedstatus_2)
  * pausePayment `boolean`
  * pausePaymentTimestamp `string`
  * payeeId `string`
  * payeeType [PayeeType](#payeetype)
  * payorRefs `array`
    * items [PayeePayorRef_2](#payeepayorref_2)
  * watchlistOverrideComment `string`
  * watchlistOverrideExpiresAtTimestamp `string`
  * watchlistStatus [WatchlistStatus_2](#watchliststatus_2)
  * watchlistStatusUpdatedTimestamp `string`

### PayeeInvitationStatus
* PayeeInvitationStatus `object`
  * gracePeriodEndDate `string`
  * invitationStatus **required** `string` (values: ACCEPTED, PENDING, DECLINED)
  * payeeId **required** `string`

### PayeeInvitationStatusResponse
* PayeeInvitationStatusResponse `object`
  * gracePeriodEndDate `string`
  * invitationStatus **required** `string` (values: ACCEPTED, PENDING, DECLINED)
  * payeeId **required** `string`

### PayeeInvitationStatusResponse_2
* PayeeInvitationStatusResponse_2 `object`
  * gracePeriodEndDate `string`
  * invitationStatus **required** `string` (values: ACCEPTED, PENDING, DECLINED)
  * payeeId **required** `string`

### PayeePaymentChannel
* PayeePaymentChannel `object`
  * accountName **required** `string`
  * accountNumber **required** `string`
  * countryCode **required** `string`: Country Code must be a valid 2 letter ISO 3166-1 country code.
  * currency **required** `string` (values: USD, GBP, EUR)
  * iban `string`: Must match the regular expression ```^[A-Za-z0-9]+$```.
  * paymentChannelName `string`
  * routingNumber **required** `string`

### PayeePaymentChannel_2
* PayeePaymentChannel_2 `object`
  * accountName **required** `string`
  * accountNumber **required** `string`
  * countryCode **required** `string`: Country Code must be a valid 2 letter ISO 3166-1 country code
  * currency **required** `string` (values: USD, GBP, EUR)
  * iban `string`: Must match the regular expression ```^[A-Za-z0-9]+$```.
  * paymentChannelName `string`
  * routingNumber **required** `string`

### PayeePayorRef
* PayeePayorRef `object`
  * invitationStatus `string`
  * payorId `string`
  * remoteId `string`

### PayeePayorRefV2
* PayeePayorRefV2 `object`
  * invitationStatus `string` (values: ACCEPTED, PENDING, DECLINED)
  * invitationStatusTimestamp `string`: The timestamp when the invitation status is updated
  * paymentChannelId `string`
  * payorId `string`
  * remoteId `string`

### PayeePayorRefV3
* PayeePayorRefV3 `object`
  * invitationStatus [InvitationStatus_2](#invitationstatus_2)
  * invitationStatusTimestamp `string`: The timestamp when the invitation status is updated
  * payableIssues `array`: Indicates any conditions which prevent the payee from being payable for this payor
    * items [PayableIssue](#payableissue)
  * payableStatus `boolean`: Indicates if the payee is payable for this payor
  * paymentChannelId `string`
  * payorId `string`
  * remoteId `string`

### PayeePayorRef_2
* PayeePayorRef_2 `object`
  * invitationStatus [InvitationStatus_2](#invitationstatus_2)
  * invitationStatusTimestamp `string`: The timestamp when the invitation status is updated
  * payableIssues `array`: Indicates any conditions which prevent the payee from being payable for this payor
    * items [PayableIssue_2](#payableissue_2)
  * payableStatus `boolean`: Indicates if the payee is payable for this payor
  * paymentChannelId `string`
  * payorId `string`
  * remoteId `string`

### PayeeResponse
* PayeeResponse `object`
  * acceptTermsAndConditionsTimestamp `string`: The timestamp when the payee last accepted T&Cs
  * address [PayeeAddress](#payeeaddress)
  * cellphoneNumber `string`
  * challenge [Challenge](#challenge)
  * company [CompanyResponse](#companyresponse)
  * country `string`
  * created `string`
  * displayName `string`
  * email `string`
  * gracePeriodEndDate `string`
  * individual [IndividualResponse](#individualresponse)
  * language `string`: An IETF BCP 47 language code which has been configured for use within this Velo environment.<BR>
  * lastOfacCheckTimestamp `string`
  * marketingOptIns `array`
    * items [MarketingOptIn](#marketingoptin)
  * ofacStatus [OfacStatus](#ofacstatus)
  * onboardedStatus [OnboardedStatus](#onboardedstatus)
  * payeeId `string`
  * payeeType [PayeeType](#payeetype)
  * paymentChannel [PayeePaymentChannel](#payeepaymentchannel)
  * payorRefs `array`
    * items [PayeePayorRef](#payeepayorref)

### PayeeResponseV2
* PayeeResponseV2 `object`
  * acceptTermsAndConditionsTimestamp `string`: The timestamp when the payee last accepted T&Cs
  * address [PayeeAddress_2](#payeeaddress_2)
  * cellphoneNumber `string`
  * company [Company](#company)
  * country `string`
  * created `string`
  * disabled `boolean`
  * disabledComment `string`
  * disabledUpdatedTimestamp `string`
  * displayName `string`
  * email `string`
  * enhancedKycCompleted `boolean`
  * gracePeriodEndDate `string`
  * individual [Individual](#individual)
  * kycCompletedTimestamp `string`
  * language `string`: An IETF BCP 47 language code which has been configured for use within this Velo environment.<BR>
  * lastOfacCheckTimestamp `string`
  * marketingOptInDecision `boolean`
  * marketingOptInTimestamp `string`
  * ofacOverride `boolean`
  * ofacOverrideReason `string`
  * ofacOverrideTimestamp `string`
  * ofacStatus [OfacStatus_2](#ofacstatus_2)
  * onboardedStatus [OnboardedStatus_2](#onboardedstatus_2)
  * pausePayment `boolean`
  * pausePaymentTimestamp `string`
  * payeeId `string`
  * payeeType [PayeeType](#payeetype)
  * payorRefs `array`
    * items [PayeePayorRefV2](#payeepayorrefv2)

### PayeeType
* PayeeType `string` (values: Individual, Company)

### PayeeType_2
* PayeeType_2 `string` (values: INDIVIDUAL, COMPANY)

### PayeeUserSelfUpdateRequest
* PayeeUserSelfUpdateRequest `object`: <p>All properties are optional</p>
  * email `string`: the email address of the user
  * firstName `string`
  * lastName `string`
  * primaryContactNumber `string`: The main contact number for the user
  * secondaryContactNumber `string`: The secondary contact number for the user
  * smsNumber `string`: The phone number of a device that the user can receive sms messages on

### Payee_2
* Payee_2 `object`
  * acceptTermsAndConditionsTimestamp `string`: The timestamp when the payee last accepted T&Cs
  * address [PayeeAddress](#payeeaddress)
  * cellphoneNumber `string`
  * challenge [Challenge](#challenge)
  * company [CompanyV1](#companyv1)
  * country `string`
  * created `string`
  * displayName `string`
  * email `string`
  * gracePeriodEndDate `string`
  * individual [IndividualV1](#individualv1)
  * language `string`: An IETF BCP 47 language code which has been configured for use within this Velo environment.<BR>
  * marketingOptIns `array`
    * items [MarketingOptIn](#marketingoptin)
  * onboardedStatus [OnboardedStatus](#onboardedstatus)
  * payeeId `string`
  * payeeType [PayeeType](#payeetype)
  * paymentChannel [PayeePaymentChannel_2](#payeepaymentchannel_2)
  * payorRefs `array`
    * items [PayeePayorRefV2](#payeepayorrefv2)
  * remoteId `string`: Remote Id must be between 1 and 100 characters long
  * type `string` (values: Individual, Company)
  * watchlistStatusUpdatedTimestamp `string`

### PaymentAuditCurrencyV3
* PaymentAuditCurrencyV3 `string` (values: USD, GBP, EUR): ISO 3 character currency code

### PaymentAuditCurrencyV4
* PaymentAuditCurrencyV4 `string` (values: USD, GBP, EUR): ISO 3 character currency code

### PaymentChannelCountry
* PaymentChannelCountry `object`
  * isoCountryCode **required** `string`: The ISO code for the country
  * rules **required** `array`: The rules for the given country
    * items [PaymentChannelRule](#paymentchannelrule)

### PaymentChannelRule
* PaymentChannelRule `object`: Rules that will get applied when creating or updating a payment channel for the given country
  * displayName **required** `string`: User friendly name
  * displayOrder `integer`
  * element **required** `string`: <p>the rule element</p>
  * maxLength `integer`: maximum length of the element data
  * minLength `integer`: mininum length of the element data
  * required **required** `boolean`: is this element required
  * validation **required** `string`: a regex to validate the element data

### PaymentChannelRulesResponse
* PaymentChannelRulesResponse `object`
  * bank `array`
    * items [PaymentChannelCountry](#paymentchannelcountry)

### PaymentDelta
* PaymentDelta `object`
  * paymentAmount `integer`
  * paymentCurrency `string`
  * paymentId **required** `string`
  * payorPaymentId `string`
  * payoutId **required** `string`
  * sourceAmount `integer`
  * sourceCurrency `string`
  * status `string`

### PaymentDeltaResponse
* PaymentDeltaResponse `object`: List Payment Changes Response Object
  * content `array`
    * items [PaymentDelta](#paymentdelta)
  * links `array`
    * items [PagedPayeeResponse_links](#pagedpayeeresponse_links)
  * page [PagedPayeeInvitationStatusResponse_page](#pagedpayeeinvitationstatusresponse_page)

### PaymentDeltaResponseV4
* PaymentDeltaResponseV4 `object`: List Payment Changes Response Object
  * content `array`
    * items [PaymentDeltaV4](#paymentdeltav4)
  * links `array`
    * items [PagedPayeeResponse_links](#pagedpayeeresponse_links)
  * page [PagedPayeeInvitationStatusResponse_page](#pagedpayeeinvitationstatusresponse_page)

### PaymentDeltaV4
* PaymentDeltaV4 `object`
  * paymentAmount `integer`
  * paymentCurrency `string`
  * paymentId **required** `string`
  * payorPaymentId `string`
  * payoutId **required** `string`
  * sourceAmount `integer`
  * sourceCurrency `string`
  * status `string`

### PaymentEventResponseV3
* PaymentEventResponseV3 `object`
  * accountName `string`
  * accountNumber `string`: The account number attached to the event.
  * eventDateTime **required** `string`: The date/time at which the event occurred.
  * eventId **required** `string`: The id of the event.
  * eventType **required** `string` (values: PAYOUT_SUBMITTED, PAYOUT_COMPLETED, PAYOUT_INSTRUCTED_V3, BANK_PAYMENT_REQUESTED, SOURCE_AMOUNT_CONFIRMED, PAYMENT_SUBMITTED, PAYMENT_SUBMITTED_ACCEPTED, PAYMENT_SUBMITTED_REJECTED, PAYMENT_CONFIRMED, PAYMENT_AWAITING_FUNDS, PAYMENT_FUNDED, PAYMENT_UNFUNDED, PAYMENT_FAILED, ACH_SUBMITTED_TO_ODFI, PAYMENT_ACCEPTED_BY_RAILS, ACH_RETURN_RECEIVED, RETURN_PAYMENT_FUNDING_REQUESTED, PAYOUT_BATCH_EXECUTED, PAYOUT_BATCH_QUOTE_EXPIRED, PAYOUT_BATCH_FUNDED, PAYOUT_BATCH_FUNDS_RETURN_REQUEST, PAYOUT_BATCH_FUNDS_RETURNED, PAYOUT_FUNDS_REQUEST, PAYOUT_FUNDS_GRANTED, PAYOUT_FUNDS_DENIED, PAYOUT_BATCH_QUOTED, PAYOUT_QUOTED, ACH_PAYMENT_RETURN_CANCELLED, RETURN_PAYMENT_CANCELLATION_REQUESTED, PAYOUT_WITHDRAWN): The type of the event.
  * iban `string`
  * paymentAmount `integer`: The destination amount exposed by the event.
  * paymentCurrency [PaymentAuditCurrencyV3](#paymentauditcurrencyv3)
  * principal `string`
  * routingNumber `string`: The routing number attached to the event.
  * sourceAmount `integer`: The source amount exposed by the event.
  * sourceCurrency [PaymentAuditCurrencyV3](#paymentauditcurrencyv3)

### PaymentEventResponseV4
* PaymentEventResponseV4 `object`
  * accountName `string`
  * accountNumber `string`: The account number attached to the event.
  * eventDateTime **required** `string`: The date/time at which the event occurred.
  * eventId **required** `string`: The id of the event.
  * eventType **required** `string` (values: PAYOUT_SUBMITTED, PAYOUT_COMPLETED, PAYOUT_INSTRUCTED_V3, BANK_PAYMENT_REQUESTED, SOURCE_AMOUNT_CONFIRMED, PAYMENT_SUBMITTED, PAYMENT_SUBMITTED_ACCEPTED, PAYMENT_SUBMITTED_REJECTED, PAYMENT_CONFIRMED, PAYMENT_AWAITING_FUNDS, PAYMENT_FUNDED, PAYMENT_UNFUNDED, PAYMENT_FAILED, ACH_SUBMITTED_TO_ODFI, PAYMENT_ACCEPTED_BY_RAILS, ACH_RETURN_RECEIVED, RETURN_PAYMENT_FUNDING_REQUESTED, PAYOUT_BATCH_EXECUTED, PAYOUT_BATCH_QUOTE_EXPIRED, PAYOUT_BATCH_FUNDED, PAYOUT_BATCH_FUNDS_RETURN_REQUEST, PAYOUT_BATCH_FUNDS_RETURNED, PAYOUT_FUNDS_REQUEST, PAYOUT_FUNDS_GRANTED, PAYOUT_FUNDS_DENIED, PAYOUT_BATCH_QUOTED, PAYOUT_QUOTED, ACH_PAYMENT_RETURN_CANCELLED, RETURN_PAYMENT_CANCELLATION_REQUESTED, PAYOUT_WITHDRAWN): The type of the event.
  * iban `string`
  * paymentAmount `integer`: The destination amount exposed by the event.
  * paymentCurrency [PaymentAuditCurrencyV4](#paymentauditcurrencyv4)
  * principal `string`
  * routingNumber `string`: The routing number attached to the event.
  * sourceAmount `integer`: The source amount exposed by the event.
  * sourceCurrency [PaymentAuditCurrencyV4](#paymentauditcurrencyv4)

### PaymentInstructionV3
* PaymentInstructionV3 `object`: Instruction for creating a payment
  * amount **required** `integer`: <p>Amount to send to Payee</p>
  * currency **required** `string`: Valid ISO 4217 3 letter currency code. See the <a href="https://www.iso.org/iso-4217-currency-codes.html" target="_blank" a>ISO specification</a> for details.
  * paymentMemo `string`
  * payorPaymentId `string`
  * remoteId **required** `string`: Your identifier for payee
  * sourceAccountName **required** `string`
  * transmissionType [TransmissionType](#transmissiontype)

### PaymentRails
* PaymentRails `string` (values: WU, BOFA)

### PaymentResponseV3
* PaymentResponseV3 `object`
  * accountName `string`
  * accountNumber `string`: The account number for the account which will receive the payment.
  * countryCode `string`: The country code of the payment channel.
  * events **required** `array`
    * items [PaymentEventResponseV3](#paymenteventresponsev3)
  * filenameReference `string`: ACH file payment was submitted in, if applicable
  * fundingStatus **required** `string` (values: FUNDED, INSTRUCTED, UNFUNDED): The funding status of the payment
  * iban `string`: The iban for the payment.
  * individualIdentificationNumber `string`: Individual Identification Number assigned to the payment in the ACH file, if applicable
  * invertedRate `number`: The inverted FX rate for the payment, if FX was involved. **Note** that (depending on the role of the caller) this information may not be displayed
  * payeeId **required** `string`: The id of the paymeee
  * paymentAmount **required** `integer`: The amount which the payee will receive
  * paymentChannelId `string`
  * paymentChannelName `string`
  * paymentCurrency [PaymentAuditCurrencyV3](#paymentauditcurrencyv3)
  * paymentId **required** `string`: The id of the payment
  * paymentMemo `string`: The payment memo set by the payor
  * payorId **required** `string`: The id of the payor
  * payorName `string`: The name of the payor
  * payorPaymentId `string`
  * quoteId **required** `string`: The quote Id used for the FX
  * railsBatchId `string`
  * railsId **required** `string`: The rails ID. Default value is RAILS ID UNAVAILABLE when not populated.
  * railsPaymentId `string`
  * rate `number`: The FX rate for the payment, if FX was involved. **Note** that (depending on the role of the caller) this information may not be displayed
  * rejectionReason `string`
  * remoteId `string`: The remote id by which the payor refers to the payee. Only populated once payment is confirmed
  * returnCost `integer`: The return cost if a returned payment.
  * returnReason `string`
  * routingNumber `string`: The routing number for the payment.
  * sourceAccountId **required** `string`: The id of the source account from which the payment was taken
  * sourceAccountName `string`: The name of the source account from which the payment was taken
  * sourceAmount `integer`: The source amount for the payment (amount debited to make the payment)
  * sourceCurrency [PaymentAuditCurrencyV3](#paymentauditcurrencyv3)
  * status **required** `string` (values: ACCEPTED, AWAITING_FUNDS, FUNDED, UNFUNDED, BANK_PAYMENT_REQUESTED, REJECTED, ACCEPTED_BY_RAILS, CONFIRMED, FAILED, WITHDRAWN)
  * submittedDateTime **required** `string`
  * traceNumber `string`: Trace Number assigned to the payment in the ACH file, if applicable

### PaymentResponseV4
* PaymentResponseV4 `object`
  * accountName `string`
  * accountNumber `string`: The account number for the account which will receive the payment.
  * countryCode `string`: The country code of the payment channel.
  * events **required** `array`
    * items [PaymentEventResponseV4](#paymenteventresponsev4)
  * filenameReference `string`: ACH file payment was submitted in, if applicable
  * fundingStatus **required** `string` (values: FUNDED, INSTRUCTED, UNFUNDED): The funding status of the payment
  * iban `string`: The iban for the payment.
  * individualIdentificationNumber `string`: Individual Identification Number assigned to the payment in the ACH file, if applicable
  * invertedRate `number`: The inverted FX rate for the payment, if FX was involved. **Note** that (depending on the role of the caller) this information may not be displayed
  * isPaymentCcyBaseCcy `boolean`
  * payeeId **required** `string`: The id of the paymeee
  * paymentAmount **required** `integer`: The amount which the payee will receive
  * paymentChannelId `string`
  * paymentChannelName `string`
  * paymentCurrency [PaymentAuditCurrencyV4](#paymentauditcurrencyv4)
  * paymentId **required** `string`: The id of the payment
  * paymentMemo `string`: The payment memo set by the payor
  * payorId **required** `string`: The id of the payor
  * payorName `string`: The name of the payor
  * payorPaymentId `string`
  * payout [PaymentResponseV4_payout](#paymentresponsev4_payout)
  * quoteId **required** `string`: The quote Id used for the FX
  * railsBatchId `string`
  * railsId **required** `string`: The rails ID. Default value is RAILS ID UNAVAILABLE when not populated.
  * railsPaymentId `string`
  * rate `number`: The FX rate for the payment, if FX was involved. **Note** that (depending on the role of the caller) this information may not be displayed
  * rejectionReason `string`
  * remoteId `string`: The remote id by which the payor refers to the payee. Only populated once payment is confirmed
  * returnCost `integer`: The return cost if a returned payment.
  * returnReason `string`
  * routingNumber `string`: The routing number for the payment.
  * sourceAccountId **required** `string`: The id of the source account from which the payment was taken
  * sourceAccountName `string`: The name of the source account from which the payment was taken
  * sourceAmount `integer`: The source amount for the payment (amount debited to make the payment)
  * sourceCurrency [PaymentAuditCurrencyV4](#paymentauditcurrencyv4)
  * status **required** `string` (values: ACCEPTED, AWAITING_FUNDS, FUNDED, UNFUNDED, BANK_PAYMENT_REQUESTED, REJECTED, ACCEPTED_BY_RAILS, CONFIRMED, RETURNED, WITHDRAWN)
  * submittedDateTime **required** `string`
  * traceNumber `string`: Trace Number assigned to the payment in the ACH file, if applicable
  * transmissionType `string`: The transmission type of the payment, e.g. ACH, SAME_DAY_ACH, WIRE
  * withdrawable `boolean`
  * withdrawnReason `string`

### PaymentResponseV4_payout
* PaymentResponseV4_payout `object`
  * payoutFrom [PayoutPayorV4](#payoutpayorv4)
  * payoutId `string`
  * payoutTo [PayoutPayorV4](#payoutpayorv4)

### PaymentV3
* PaymentV3 `object`
  * amount `integer`
  * currency `string`
  * payee [PayoutPayeeV3](#payoutpayeev3)
  * paymentId **required** `string`
  * paymentMemo `string`
  * payorPaymentId `string`
  * remoteId `string`
  * sourceAccountName `string`
  * status `string` (values: SUBMITTED, ACCEPTED, REJECTED, WITHDRAWN, RETURNED, AWAITING_FUNDS, FUNDED, UNFUNDED, CANCELLED, REQUESTED)
  * transmissionType [TransmissionType](#transmissiontype)
  * withdrawable `boolean`

### PayorAddress
* PayorAddress `object`
  * city **required** `string`
  * country **required** `string`
  * countyOrProvince `string`
  * line1 **required** `string`
  * line2 `string`
  * line3 `string`
  * line4 `string`
  * zipOrPostcode `string`

### PayorAddressV2
* PayorAddressV2 `object`
  * city **required** `string`
  * country **required** `string`
  * countyOrProvince `string`
  * line1 **required** `string`
  * line2 `string`
  * line3 `string`
  * line4 `string`
  * zipOrPostcode `string`

### PayorAmlTransactionV3
* PayorAmlTransactionV3 `object`
  * credit `integer`
  * creditCurrency `string`: ISO 4217 3 character currency code
  * dateFundingRequested `string`
  * debit `integer`
  * debitCurrency `string`: ISO 4217 3 character currency code
  * fundingType `string`
  * fxApplied `number`
  * payeeEmail `string`
  * payeeName `string`
  * payeeType `string`
  * paymentAmount `integer`
  * paymentCurrency `string`: ISO 4217 3 character currency code
  * paymentMemo `string`
  * paymentRails `string`
  * paymentStatus `string`
  * payorPaymentId `string`
  * rejectReason `string`
  * remoteId `string`: Remote ID of the Payee, set by Payor
  * reportTransactionType `string`
  * returnCode `string`
  * returnDescription `string`
  * returnFee `string`
  * returnFeeCurrency `string`: ISO 4217 3 character currency code
  * returnFeeDescription `string`
  * sourceAccount `string`
  * transactionDate `string`
  * transactionTime `string`

### PayorAmlTransactionV4
* PayorAmlTransactionV4 `object`
  * credit `integer`
  * creditCurrency `string`: ISO 4217 3 character currency code
  * dateFundingRequested `string`
  * debit `integer`
  * debitCurrency `string`: ISO 4217 3 character currency code
  * fundingType `string`
  * fxApplied `number`
  * payeeEmail `string`
  * payeeName `string`
  * payeeType `string`
  * paymentAmount `integer`
  * paymentCurrency `string`: ISO 4217 3 character currency code
  * paymentMemo `string`
  * paymentRails `string`
  * paymentStatus `string`
  * payorPaymentId `string`
  * rejectReason `string`
  * remoteId `string`: Remote ID of the Payee, set by Payor
  * reportTransactionType `string`
  * returnCode `string`
  * returnDescription `string`
  * returnFee `string`
  * returnFeeCurrency `string`: ISO 4217 3 character currency code
  * returnFeeDescription `string`
  * sourceAccount `string`
  * transactionDate `string`
  * transactionTime `string`

### PayorBrandingResponse
* PayorBrandingResponse `object`
  * collectiveAlias `string`: How the payor has chosen to refer to payees
  * dbaName `string`: The payor’s 'Doing Business As' name
  * logoUrl **required** `string`: The URL to use for this payor’s logo
  * payorName **required** `string`: The name of the payor
  * supportContact `string`: The payor’s support contact address

### PayorCreateApiKeyRequest
* PayorCreateApiKeyRequest `object`
  * description `string`: Description of the key.
  * name **required** `string`: A name for the key.
  * roles **required** `array`: A list of roles to assign to the key.
    * items `string` (values: payor.admin, payor.support): Name of role

### PayorCreateApiKeyResponse
* PayorCreateApiKeyResponse `object`
  * apiKey `string`: API Key
  * apiSecret `string`: API Secret

### PayorCreateApplicationRequest
* PayorCreateApplicationRequest `object`
  * description `string`: Description of the application.
  * name **required** `string`: The name of the application.

### PayorEmailOptOutRequest
* PayorEmailOptOutRequest `object`
  * reminderEmailsOptOut **required** `boolean`

### PayorLinksResponse
* PayorLinksResponse `object`: List Payor Links Response Object
  * links `array`
    * items [PayorLinksResponse_links](#payorlinksresponse_links)
  * payors `array`
    * items [PayorLinksResponse_payors](#payorlinksresponse_payors)

### PayorLinksResponse_links
* PayorLinksResponse_links `object`
  * fromPayorId **required** `string`
  * linkId **required** `string`
  * linkType **required** `string` (values: PARENT_OF)
  * toPayorId **required** `string`

### PayorLinksResponse_payors
* PayorLinksResponse_payors `object`
  * kycState `string` (values: FAILED_KYC, PASSED_KYC, REQUIRES_KYC)
  * payorId **required** `string`
  * payorName **required** `string`
  * primaryContactEmail `string`

### PayorLogoRequest
* PayorLogoRequest `object`
  * logo `string`

### PayorV1
* PayorV1 `object`
  * address [PayorAddress](#payoraddress)
  * allowsLanguageChoice `boolean`: Whether or not the payor allows language choice in the UI.
  * collectiveAlias `string`: How the payor has chosen to refer to payees.
  * dbaName `string`: The payor’s 'Doing Business As' name.
  * fundingAccountAccountName `string`: The funding account name to be used for the payor.
  * fundingAccountAccountNumber `string`: The funding account number to be used for the payor.
  * fundingAccountRoutingNumber `string`: The funding account routing number to be used for the payor.
  * includesReports `boolean`
  * kycState [KycState](#kycstate)
  * language `string` (values: EN, FR): The payor’s language preference. Must be one of [EN, FR].
  * manualLockout `boolean`: Whether or not the payor has been manually locked by the backoffice.
  * maxMasterPayorAdmins `integer`
  * payeeGracePeriodDays `integer`: The grace period for paying payees in days.
  * payeeGracePeriodProcessingEnabled `boolean`: Whether grace period processing is enabled.
  * payorId `string`
  * payorName **required** `string`: The name of the payor.
  * primaryContactEmail `string`: Primary contact email for the payor.
  * primaryContactName `string`: Name of primary contact for the payor.
  * primaryContactPhone `string`: Primary contact phone number for the payor.
  * reminderEmailsOptOut `boolean`: Whether or not the payor has opted-out of reminder emails being sent.
  * supportContact `string`: The payor’s support contact email address.
  * transmissionTypes [TransmissionTypes](#transmissiontypes)

### PayorV2
* PayorV2 `object`
  * address [PayorAddressV2](#payoraddressv2)
  * allowsLanguageChoice `boolean`: Whether or not the payor allows language choice in the UI.
  * collectiveAlias `string`: How the payor has chosen to refer to payees.
  * dbaName `string`: The payor’s 'Doing Business As' name.
  * includesReports `boolean`
  * kycState [KycState](#kycstate)
  * language `string` (values: EN, FR): The payor’s language preference. Must be one of [EN, FR].
  * manualLockout `boolean`: Whether or not the payor has been manually locked by the backoffice.
  * maxMasterPayorAdmins `integer`
  * payeeGracePeriodDays `integer`: The grace period for paying payees in days.
  * payeeGracePeriodProcessingEnabled `boolean`: Whether grace period processing is enabled.
  * paymentRails [PaymentRails](#paymentrails)
  * payorId **required** `string`
  * payorName **required** `string`: The name of the payor.
  * payorXid `string`: A unique identifier that an external system uses to reference the payor in their system
  * primaryContactEmail `string`: Primary contact email for the payor.
  * primaryContactName `string`: Name of primary contact for the payor.
  * primaryContactPhone `string`: Primary contact phone number for the payor.
  * reminderEmailsOptOut `boolean`: Whether or not the payor has opted-out of reminder emails being sent.
  * supportContact `string`: The payor’s support contact email address.
  * transmissionTypes [TransmissionTypes_2](#transmissiontypes_2)
  * wuCustomerId `string`

### PayoutCompanyV3
* PayoutCompanyV3 `object`
  * companyName **required** `string`

### PayoutIndividualV3
* PayoutIndividualV3 `object`
  * name **required** [PayoutNameV3](#payoutnamev3)

### PayoutNameV3
* PayoutNameV3 `object`
  * firstName **required** `string`
  * lastName **required** `string`

### PayoutPayeeV3
* PayoutPayeeV3 `object`: Payee data associated with a payment. Either individual or company must be populated
  * company [PayoutCompanyV3](#payoutcompanyv3)
  * individual [PayoutIndividualV3](#payoutindividualv3)
  * payeeId **required** `string`

### PayoutPayorV4
* PayoutPayorV4 `object`: Details of payor and principal participating in a payout.
  * dbaName **required** `string`: The alternate name of the payor.
  * payorId **required** `string`: The id of the payor.
  * payorName **required** `string`: The name of the payor.
  * principal **required** `string`: Email address if principal is a user or ID if application.
  * principalId **required** `string`: The id of the principal.

### PayoutPrincipalV4
* PayoutPrincipalV4 `object`: Details of principal participating in a payout.
  * principal **required** `string`: Email address if principal is a user or ID if application.
  * principalId **required** `string`: The id of the principal.

### PayoutStatusV3
* PayoutStatusV3 `string` (values: ACCEPTED, REJECTED, SUBMITTED, QUOTED, INSTRUCTED, COMPLETED, INCOMPLETE, CONFIRMED, WITHDRAWN)

### PayoutStatusV4
* PayoutStatusV4 `string` (values: ACCEPTED, REJECTED, SUBMITTED, QUOTED, INSTRUCTED, COMPLETED, INCOMPLETE, CONFIRMED, WITHDRAWN)

### PayoutSummaryAuditV3
* PayoutSummaryAuditV3 `object`
  * fxSummaries `array`
    * items [FxSummaryV3](#fxsummaryv3)
  * instructedDateTime `string`
  * payorId `string`
  * payoutId **required** `string`
  * payoutMemo `string`
  * sourceAccountSummary `array`
    * items [SourceAccountSummaryV3](#sourceaccountsummaryv3)
  * status **required** [PayoutStatusV3](#payoutstatusv3)
  * submittedDateTime **required** `string`
  * totalFailedPayments `integer`
  * totalIncompletePayments `integer`
  * totalPayments `integer`
  * withdrawnDateTime `string`

### PayoutSummaryAuditV4
* PayoutSummaryAuditV4 `object`
  * dateTime `string`
  * fxSummaries `array`
    * items [FxSummaryV4](#fxsummaryv4)
  * instructedDateTime `string`
  * payorId `string`
  * payorName **required** `string`
  * payoutId `string`
  * payoutMemo `string`
  * payoutType **required** [PayoutTypeV4](#payouttypev4)
  * sourceAccountSummary `array`
    * items [SourceAccountSummaryV4](#sourceaccountsummaryv4)
  * status **required** [PayoutStatusV4](#payoutstatusv4)
  * submittedDateTime **required** `string`
  * totalIncompletePayments `integer`
  * totalPayments `integer`
  * totalReturnedPayments `integer`
  * totalWithdrawnPayments `integer`
  * withdrawnDateTime `string`

### PayoutSummaryResponseV3
* PayoutSummaryResponseV3 `object`
  * acceptedPayments **required** `array`
    * items [AcceptedPaymentV3](#acceptedpaymentv3)
  * accounts **required** `array`
    * items [SourceAccountV3](#sourceaccountv3)
  * fxSummaries **required** `array`
    * items [QuoteFxSummaryV3](#quotefxsummaryv3)
  * paymentsAccepted `integer`
  * paymentsRejected `integer`
  * paymentsSubmitted `integer`
  * paymentsWithdrawn **required** `integer`
  * payoutId `string`
  * rejectedPayments **required** `array`
    * items [RejectedPaymentV3](#rejectedpaymentv3)
  * status `string`

### PayoutTypeV4
* PayoutTypeV4 `string` (values: STANDARD, AS, ON_BEHALF_OF): The type of payout.

### QueryBatchResponse
* QueryBatchResponse `object`
  * failureCount `integer`
  * failures `array`
    * items [FailedSubmission](#failedsubmission)
  * pendingCount `integer`
  * status `string` (values: SUBMITTED, ACCEPTED): Batch Status

### QueryBatchResponse_2
* QueryBatchResponse_2 `object`
  * failureCount `integer`
  * failures `array`
    * items [FailedSubmission_2](#failedsubmission_2)
  * pendingCount `integer`
  * status `string` (values: SUBMITTED, ACCEPTED): Batch Status

### QuoteFxSummaryV3
* QuoteFxSummaryV3 `object`
  * creationTime **required** `string`
  * expiryTime `string`
  * fundingStatus **required** `string` (values: UNFUNDED, INSTRUCTED, FUNDED)
  * invertedRate `number`
  * paymentCurrency **required** `string`: Valid ISO 4217 3 letter currency code. See the <a href="https://www.iso.org/iso-4217-currency-codes.html" target="_blank" a>ISO specification</a> for details.
  * quoteId **required** `string`
  * rate **required** `number`
  * sourceCurrency **required** `string`: Valid ISO 4217 3 letter currency code. See the <a href="https://www.iso.org/iso-4217-currency-codes.html" target="_blank" a>ISO specification</a> for details.
  * status **required** `string` (values: UNQUOTED, QUOTED, EXPIRED, EXECUTED, REJECTED)
  * totalPaymentAmount **required** `integer`
  * totalSourceAmount **required** `integer`

### QuoteResponseV3
* QuoteResponseV3 `object`
  * fxSummaries `array`
    * items [QuoteFxSummaryV3](#quotefxsummaryv3)

### RegionV2
* RegionV2 `object`
  * abbreviation `string`
  * name `string`

### RegisterSmsRequest
* RegisterSmsRequest `object`
  * smsNumber **required** `string`: The phone number of a device that the user can receive sms messages on

### RejectedPaymentV3
* RejectedPaymentV3 `object`
  * amount **required** `integer`
  * currencyType **required** `string`: Valid ISO 4217 3 letter currency code. See the <a href="https://www.iso.org/iso-4217-currency-codes.html" target="_blank" a>ISO specification</a> for details.
  * lineNumber `integer`
  * message `string`
  * payorPaymentId **required** `string`
  * reason **required** `string`
  * reasonCode `string`
  * remoteId **required** `string`
  * sourceAccountName **required** `string`

### ResendTokenRequest
* ResendTokenRequest `object`
  * tokenType **required** `string` (values: INVITE_MFA_USER, MFA_REGISTRATION): The type of the token to resend
  * verificationCode `string`: <p>Optional property that MUST be suppied when manually verifying a user</p>

### ResetPasswordRequest
* ResetPasswordRequest `object`
  * email **required** `string`: the email address of the user requesting the reset password

### Role
* Role `object`
  * name **required** `string`: the name of the role

### RoleUpdateRequest
* RoleUpdateRequest `object`
  * roles **required** `array`: <p>The role(s) for the user</p>
    * items `string`
  * verificationCode `string`: <p>Optional property that MUST be suppied when manually verifying a user</p>

### SelfMFATypeUnregisterRequest
* SelfMFATypeUnregisterRequest `object`
  * mfaType **required** `string` (values: SMS, YUBIKEY, TOTP): The type of the MFA device

### SelfUpdatePasswordRequest
* SelfUpdatePasswordRequest `object`
  * newPassword **required** `string`: The new password
  * oldPassword **required** `string`: The user's current password

### SetNotificationsRequest
* SetNotificationsRequest `object`
  * minimumBalance **required** `integer`: Amount to set as minimum balance in minor units

### SourceAccountResponse
* SourceAccountResponse `object`
  * accountType `string`
  * balance `integer`: Decimal implied
  * balanceVisible `boolean`
  * currency `string` (values: USD)
  * customerId `string`
  * fundingAccountId `string`
  * fundingRef `string`
  * id `string`: Source Account Id
  * name `string`
  * payorId `string`
  * physicalAccountId `string`
  * physicalAccountName `string`
  * pooled `boolean`
  * railsId `string`

### SourceAccountResponseV2
* SourceAccountResponseV2 `object`
  * accountType **required** `string`
  * autoTopUpConfig [AutoTopUpConfig](#autotopupconfig)
  * balance `integer`: Decimal implied
  * balanceVisible **required** `boolean`
  * currency `string` (values: USD)
  * customerId `string`
  * fundingAccountId `string`
  * fundingRef **required** `string`
  * id **required** `string`: Source Account Id
  * name `string`
  * notifications [Notifications](#notifications)
  * payorId `string`
  * physicalAccountId `string`
  * physicalAccountName **required** `string`
  * pooled **required** `boolean`
  * railsId **required** `string`

### SourceAccountResponseV3
* SourceAccountResponseV3 `object`
  * archived `boolean`: A flag for whether the source account has been archived.  Only present in the response if true.
  * autoTopUpConfig [AutoTopUpConfig_2](#autotopupconfig_2)
  * balance `integer`: Decimal implied
  * country `string`: The two character ISO country code for the associated account
  * currency `string` (values: USD, EUR, GBP, CAD, HKD)
  * customerId `string`
  * fundingRef `string`: The funding reference (will not be set for DECOUPLED accounts).
  * id **required** `string`: Source Account Id
  * name `string`
  * notifications [Notifications_2](#notifications_2)
  * payorId `string`
  * physicalAccountId `string`: The physical account id (will not be set for DECOUPLED accounts).
  * physicalAccountName `string`: The physical account name (will not be set for DECOUPLED accounts).
  * pooled `boolean`: The pooled account flag (will not be set for DECOUPLED accounts).
  * railsId **required** `string`
  * type **required** `string`

### SourceAccountSummaryV3
* SourceAccountSummaryV3 `object`
  * currency [PaymentAuditCurrencyV3](#paymentauditcurrencyv3)
  * sourceAccountId **required** `string`
  * totalCost **required** `integer`

### SourceAccountSummaryV4
* SourceAccountSummaryV4 `object`
  * currency [PaymentAuditCurrencyV4](#paymentauditcurrencyv4)
  * sourceAccountId **required** `string`
  * totalCost **required** `integer`

### SourceAccountType
* SourceAccountType `string` (values: FBO, WUBS_DECOUPLED)

### SourceAccountV3
* SourceAccountV3 `object`
  * currency **required** `string`: Valid ISO 4217 3 letter currency code. See the <a href="https://www.iso.org/iso-4217-currency-codes.html" target="_blank" a>ISO specification</a> for details.
  * sourceAccountId **required** `string`
  * sourceAccountName **required** `string`
  * totalPayoutCost **required** `integer`

### SupportedCountriesResponse
* SupportedCountriesResponse `object`
  * countries `array`
    * items [SupportedCountry](#supportedcountry)

### SupportedCountriesResponseV2
* SupportedCountriesResponseV2 `object`
  * countries `array`
    * items [SupportedCountryV2](#supportedcountryv2)

### SupportedCountry
* SupportedCountry `object`
  * currencies `array`
    * items [IsoCurrency](#isocurrency)
  * isoCountryCode `string`: Valid ISO 3166 2 character country code. See the <a href="https://www.iso.org/iso-3166-country-codes.html" target="_blank" a>ISO specification</a> for details.

### SupportedCountryV2
* SupportedCountryV2 `object`
  * currencies `array`
    * items [IsoCurrency](#isocurrency)
  * isoCountryCode `string`: Valid ISO 3166 2 character country code. See the <a href="https://www.iso.org/iso-3166-country-codes.html" target="_blank" a>ISO specification</a> for details.
  * regions `array`
    * items [RegionV2](#regionv2)

### SupportedCurrencyResponseV2
* SupportedCurrencyResponseV2 `object`
  * currencies `array`
    * items [SupportedCurrencyV2](#supportedcurrencyv2)

### SupportedCurrencyV2
* SupportedCurrencyV2 `object`
  * currency `string`: Valid ISO 4217 3 letter currency code. See the <a href="https://www.iso.org/iso-4217-currency-codes.html" target="_blank" a>ISO specification</a> for details.
  * maxPaymentAmount `integer`: The max amount allowed in this currency

### SupportedLanguage
* SupportedLanguage `string`: An IETF BCP 47 language code which has been configured for use within this Velo environment.<BR>

### TransferRequest
* TransferRequest `object`
  * amount **required** `integer`: Amount to transfer, in minor units
  * currency **required** `string`
  * toSourceAccountId **required** `string`: The 'to' source account id, which will be credited

### TransferRequest_2
* TransferRequest_2 `object`
  * amount **required** `integer`: Amount to transfer, in minor units
  * currency **required** `string`
  * toSourceAccountId **required** `string`: The 'to' source account id, which will be credited

### TransmissionType
* TransmissionType `string` (values: SAME_DAY_ACH, WIRE, ACH): The transmission type that will be used to send a payment

### TransmissionTypes
* TransmissionTypes `object`
  * ACH **required** `boolean`: Whether the Payor is allowed to pay via ACH
  * SAME_DAY_ACH **required** `boolean`: Whether the Payor is allowed to pay via same day ACH
  * WIRE **required** `boolean`: Whether the Payor is allowed to pay via wire

### TransmissionTypes_2
* TransmissionTypes_2 `object`
  * ACH **required** `boolean`: Whether the Payor is allowed to pay via ACH
  * SAME_DAY_ACH **required** `boolean`: Whether the Payor is allowed to pay via same day ACH
  * WIRE **required** `boolean`: Whether the Payor is allowed to pay via wire

### UnregisterMFARequest
* UnregisterMFARequest `object`
  * mfaType **required** `string` (values: YUBIKEY, TOTP): The type of the MFA device
  * verificationCode `string`: <p>Optional property that MUST be suppied when manually verifying a user</p>

### UpdatePayeeDetailsRequest
* UpdatePayeeDetailsRequest `object`
  * address [PayeeAddress_2](#payeeaddress_2)
  * challenge [Challenge_2](#challenge_2)
  * company [Company_2](#company_2)
  * email `string`
  * individual [Individual_2](#individual_2)
  * language `string`: An IETF BCP 47 language code which has been configured for use within this Velo environment.<BR>
  * payeeType [PayeeType_2](#payeetype_2)

### UpdatePayeeDetailsRequest_2
* UpdatePayeeDetailsRequest_2 `object`
  * address [PayeeAddress_2](#payeeaddress_2)
  * challenge [Challenge_2](#challenge_2)
  * company [Company_2](#company_2)
  * email `string`
  * individual [Individual_2](#individual_2)
  * language `string`: An IETF BCP 47 language code which has been configured for use within this Velo environment.<BR>
  * payeeType [PayeeType_2](#payeetype_2)

### UpdateRemoteIdRequest
* UpdateRemoteIdRequest `object`
  * payorId **required** `string`
  * remoteId **required** `string`

### UpdateWebhookRequest
* UpdateWebhookRequest `object`
  * authorizationHeader `string`: the authorization header to include with the notification.
  * categories `array`: The notification categories to enable.
    * items [Category](#category)
  * enabled `boolean`: whether the webhook is enabled.
  * webhookUrl `string`: the webhook URL to use.

### UserDetailsUpdateRequest
* UserDetailsUpdateRequest `object`: <p>All properties are optional</p>
  * email `string`: the email address of the user
  * firstName `string`
  * lastName `string`
  * mfaType [MFAType](#mfatype)
  * primaryContactNumber `string`: The main contact number for the user
  * secondaryContactNumber `string`: The secondary contact number for the user
  * smsNumber `string`: The phone number of a device that the user can receive sms messages on
  * verificationCode `string`: <p>Optional property that MUST be suppied when manually verifying a user</p>

### UserInfo
* UserInfo `object`
  * mfa_details [MFADetails](#mfadetails)
  * userType [UserType_2](#usertype_2)
  * user_id `string`: the id of the user

### UserResponse
* UserResponse `object`
  * email `string`: the email address of the user
  * entityId `string`: The payorId or payeeId or null if the user is not a payor or payee user
  * firstName `string`
  * id `string`: The id of the user
  * lastName `string`
  * lockedOut `boolean`: If true the user is currently locked out and unable to log in
  * lockedOutTimestamp `string`: A timestamp showing when the user was locked out
  * mfaStatus `string` (values: REGISTERED, UNREGISTERED): The status of the MFA device
  * mfaType `string` (values: SMS, YUBIKEY, TOTP): The type of the MFA device
  * primaryContactNumber `string`: The main contact number for the user
  * roles `array`: The role(s) for the user
    * items [Role](#role)
  * secondaryContactNumber `string`: The secondary contact number for the user
  * smsNumber `string`: The phone number of a device that the user can receive sms messages on
  * status `string` (values: ENABLED, DISABLED, PENDING): The status of the user

### UserStatus
* UserStatus `string` (values: ENABLED, DISABLED, PENDING): The status of the user

### UserType
* UserType `string` (values: BACKOFFICE, PAYOR, PAYEE)

### UserType_2
* UserType_2 `string` (values: BACKOFFICE, PAYOR, PAYEE)

### ValidatePasswordResponse
* ValidatePasswordResponse `object`
  * score `integer`: More secure passwords are given a higher score. <P>
  * suggestions `array`
    * items `string`: Any suggested changes to password text which would make the password more secure
  * valid `boolean`: if true then the password can be accepted
  * warning `string`: Any warning message as a reason for the given score.

### VerificationCode
* VerificationCode `string`: <p>Optional property that MUST be suppied when manually verifying a user</p>

### WatchlistStatus
* WatchlistStatus `string` (values: NONE, PENDING, REVIEW, PASSED, FAILED)

### WatchlistStatus_2
* WatchlistStatus_2 `string` (values: NONE, PENDING, REVIEW, PASSED, FAILED)

### WebhookResponse
* WebhookResponse `object`
  * authorizationHeader `string`
  * categories `array`
    * items [Category](#category)
  * enabled `boolean`
  * id `string`
  * payorId `string`
  * webhookUrl `string`

### WebhooksResponse
* WebhooksResponse `object`: List Webhooks Object
  * content `array`
    * items [WebhookResponse](#webhookresponse)
  * links `array`
    * items [PagedPayeeResponse_links](#pagedpayeeresponse_links)
  * page [PagedPayeeInvitationStatusResponse_page](#pagedpayeeinvitationstatusresponse_page)

### WithdrawPaymentRequest
* WithdrawPaymentRequest `object`
  * reason **required** `string`: Reason for withdrawal

### inline_response_400
* inline_response_400 `object`
  * correlationId `string`: a unique identifier to track a request or related sequence of requests
  * errors `array`: one or more errors
    * items [Error](#error)
  * httpStatusCode `integer`: this will mirror the Status-Code part of the Status-Line http response header and is included for extra clarity

### inline_response_401
* inline_response_401 `object`
  * correlationId `string`: a unique identifier to track a request or related sequence of requests
  * errors `array`: one or more errors
    * items [Error](#error)
  * httpStatusCode `integer`: this will mirror the Status-Code part of the Status-Line http response header and is included for extra clarity

### inline_response_403
* inline_response_403 `object`
  * correlationId `string`: a unique identifier to track a request or related sequence of requests
  * errors `array`: one or more errors
    * items [Error](#error)
  * httpStatusCode `integer`: this will mirror the Status-Code part of the Status-Line http response header and is included for extra clarity

### inline_response_404
* inline_response_404 `object`
  * correlationId `string`: a unique identifier to track a request or related sequence of requests
  * errors `array`: one or more errors
    * items [Error](#error)
  * httpStatusCode `integer`: this will mirror the Status-Code part of the Status-Line http response header and is included for extra clarity

### inline_response_409
* inline_response_409 `object`
  * correlationId `string`: a unique identifier to track a request or related sequence of requests
  * errors `array`: one or more errors
    * items [Error](#error)
  * httpStatusCode `integer`: this will mirror the Status-Code part of the Status-Line http response header and is included for extra clarity

### inline_response_412
* inline_response_412 `object`
  * correlationId `string`: a unique identifier to track a request or related sequence of requests
  * errors `array`: one or more errors
    * items [Error](#error)
  * httpStatusCode `integer`: this will mirror the Status-Code part of the Status-Line http response header and is included for extra clarity


