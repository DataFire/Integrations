# @datafire/nbg_gr

Client library for Account and Transaction API Specification - UK

## Installation and Usage
```bash
npm install --save @datafire/nbg_gr
```
```js
let nbg_gr = require('@datafire/nbg_gr').create({
  "Client-Id": ""
});

.then(data => {
  console.log(data);
});
```

## Description

## Functionality at a glance

The NBG "UK OPB - Account and Transaction v3.1.5" API follows the [UK Open Banking Specification
    v3.1.5](https://openbankinguk.github.io/read-write-api-site3/v3.1.5/profiles/account-and-transaction-api-profile.html)

This Account and Transaction API Specification describes the flows and payloads for retrieving a list of accounts and their transactions.

The API endpoints described here allow a AISP to:  

* Create the Consent with the appropriate permissions in order to be able to access the API Endpoints

* Retrieve the list of accounts

* Retrieve an account's details

* Retrieve an account's balances

* Retrieve an account's transactions

* Retrieve an account's beneficiaries

* Retrieve an account's standing orders

* Retrieve an account's party

* Retrieve an account's scheduled payments

* Retrieve an account's statements



## Quick Getting Started


1. **Login/Register** to the NBG Technology HUB

2. Go to **"APPS"**

3. Select your Organization and go to step 4. If you want to create a new Organization click **\"CREATE AN ORGANIZATION\"** and follow the steps below:
	1. Enter the title of your Organization
	2. Enter a short description of your Organization (optional)
	3. Click **"SUBMIT"**

4. Select the Organization of choice and click **"ADD AN APPLICATION"** 
	  1. Fill in the forms (title and short description)
	  2. Check **\"Authorization Code\" and \"Client Credentials\"** 
	  3. Enter the **OAuth Redirect and Post Logout URIs** (these are the URIs that we will redirect the user upon logging in and logging out respectively)
		  
		  You can use the following redirect URL to easily test the API through the portal: *https://developer.nbg.gr/oauth2/redoc-callback*
	  4. Click **"SUBMIT"**
	  5. Store the APPs **"Client ID"** and **"Client Secret"**
5. Go to **"API PRODUCTS"** and select the **ACCOUNT INFORMATION - UK OPEN BANKING API**

6. Click **\"START USING THIS API\"**, choose your app and click
**"SUBSCRIBE"**

7. Get an Access Token using the Access Token Flow and the API scopes provided in the Authentication and Authorization (OAuth2) section below

8. Create a Sandbox

9. Play with the API 


### Sandbox Flow

The Sandbox Flow matches the Production Flow. The difference lies into the Data used. Instead of live
data, the Sandbox flow uses mocked data.


### Production Flow  

The Production Flow is described in the [UK Open Banking v3.1.5
Specification](https://openbankinguk.github.io/read-write-api-site3/v3.1.5/profiles/account-and-transaction-api-profile.html)

More details about the implementation specifics followed, please visit section **UK OPB Implementation
Specifics**


## Authentication and Authorization (OAuth2)

This API version uses the OAuth2 protocol for authentication and authorization, which means that a
Bearer (access token) should be acquired. An access token can be retrieved using the client_id and
client_secret of the APP that you created and subscribed in this API, and your own credentials
(username, password) that you use to sign in the NBG Technology HUB. The scopes are defined below:

**Authorization Endpoint:** 

	  https://my.nbg.gr/identity/connect/authorize


**Token Endpoint:** 

	  https://my.nbg.gr/identity/connect/token

### Authorization Code ###

**Sandbox Scopes:** 

	  sandbox-uk-account-info-api-v1 offline_access


**Production Scopes:** 

	  accounts offline_access

### Client Credentials ###

**Sandbox Scopes:** 

	  sandbox-uk-account-info-api-v1


**Production Scopes:** 

	  accounts


See more [here](https://developer.nbg.gr/oauth-document)

## QWAC Certificates

TPPs are required to present a QWAC certificate during API consumption. The API checks that this certificate has been provided and is valid. In sandbox mode the certificate validations are optional. To validate your certificate in sandbox implementation, please send us your QWAC certificate at developer@nbg.gr and set the HTTP Header **\"x-sandbox-qwac-certificate-check\"** with the value **\"true\"** in your requests. 

## SMS Challenge (One Time Password)

In order to successfully authorize an Accounts Access you will need to provide the SMS OTP (One Time Password) in the corresponding Accounts Consent UI Screen.

By default the SMS OTP will be sent to the mobile number declared upon singing up in the NBG Technology HUB. 



## Create your Sandbox

Create a new Sandbox application by invoking the POST /sandbox. This call will generate a new Sandbox
with a unique sandbox-id.


__Important!__ Before proceeding save the sandbox id you just created.


When you create a sandbox, users and sandbox specific data are generated as sample data.


## Start Testing

Once you have your sandbox-id, you can start invoking the rest of the operations by providing the
mandatory http header **sandbox-id**  and the http headers described below.


## Important notes


**Request headers**


The following HTTP header parameters are required for every call:


1. Authorization. The Auth2 Token

2. sandbox-id. Your Sandbox ID


**Consent**


In order to be able to effectively start using the Endpoints the appropriate Consent needs to be
created and set to the 'Authorised' status. 


In order to create the Consent you need to at least set the required **permissions** and the **Risk**
sections. 


Optionally you may set the 


1. ExpirationDateTime. When the Consent expires 


2. TransactionFromDateTime. Start Date to retrieve the transactions 


3. TransactionToDateTime. End Date to retrieve the transactions 

**Not Implemented Endpoints**

The following endpoints are not implemented in the API

1. GET /balances
2. GET /transactions
3. GET /beneficiaries
4. GET /accounts/\{AccountId\}/direct-debits
5. GET /direct-debits
6. GET /standing-orders
7. GET /accounts/\{AccountId\}/product
8. GET /products
9. GET /accounts/\{AccountId\}/offers
10. GET /offers
11. GET /scheduled-payments
12. GET /statements


## Error Codes

The error codes and their description can be found
[here](https://openbankinguk.github.io/read-write-api-site3/v3.1.5/profiles/read-write-data-api-profile.html#error-response-structure)


# UK OPB Implementation Specifics 

Below you may find more specific information & limitations regarding the implementation followed in the Production API.


## Token Endpoint Client Authentication

At this point the supported __Client Authentication__ method is "__Client Secret Basic__" - usage of "Client ID" & "Client Secret".


## Consent Authorization

For a PSU to Authorize a Consent, they need to be redirected to the appropriate Consent UI.

For this redirection to take place the TPP needs to follow the Authorization Endpoint by amending the generated "Consent ID", like this: https://my.nbg.gr/identity/connect/authorize?consent_id={{consent_id}}&client_id={{client_id}}&scope={{scope}}&redirect_uri={{redirect_uri}}&response_type=code

Once the PSU is redirected to the Consent Authorization Screen, they need to enter their IBank (Production) or Developer Portal (Sandbox) Credentials and either Authorize or Reject the Consent.

At this point the Consent is binded with the PSU.


## Debtor Account
Currently, only the "UK.OBIE.IBAN" scheme is supported.



# Feedback and Questions

We would love to hear your feedback and answer your questions. Send us at
[developer@nbg.gr](developer@nbg.gr)


Check out our [Sandbox Postman
Collection](https://github.com/NBG-Developer-Portal/Account-Information-UK-Open-Banking)!


________________________________________

Created by [**NBG**](https://www.nbg.gr/).

 # Entities 

 Below, the main entities are documented.
 <a name=OBExternalPermissions1Code></a> 
## OBExternalPermissions1Code 
### Attributes 

| Type| Description| Example| Values|
| -----| -----| -----| -----|
| enum| Specifies the Open Banking account access data types. This is a list of the data clusters being consented by the PSU, and requested for authorisation with the ASPSP.| <ul style="padding-left: 0"><li>ReadAccountsBasic</li><li>ReadAccountsDetail</li><li>ReadBalances</li><li>ReadBeneficiariesBasic</li><li>ReadBeneficiariesDetail</li><li>ReadDirectDebits</li><li>ReadOffers</li><li>ReadPAN</li><li>ReadParty</li><li>ReadPartyPSU</li><li>ReadProducts</li><li>ReadScheduledPaymentsBasic</li><li>ReadScheduledPaymentsDetail</li><li>ReadStandingOrdersBasic</li><li>ReadStandingOrdersDetail</li><li>ReadStatementsBasic</li><li>ReadStatementsDetail</li><li>ReadTransactionsBasic</li><li>ReadTransactionsCredits</li><li>ReadTransactionsDebits</li><li>ReadTransactionsDetail</li></ul>|

 <a name=OBReadData1></a> 
## OBReadData1 


### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| Permissions| Specifies the Open Banking account access data types. This is a list of the data clusters being consented by the PSU, and requested for authorisation with the ASPSP.| array[[OBExternalPermissions1Code](#OBExternalPermissions1Code)]|
| ExpirationDateTime| Specified date and time the permissions will expire. If this is not populated, the permissions will be open ended. All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00| string|
| TransactionFromDateTime| Specified start date and time for the transaction query period. If this is not populated, the start date will be open ended, and data will be returned from the earliest available transaction. All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00| string|
| TransactionToDateTime| Specified end date and time for the transaction query period. If this is not populated, the end date will be open ended, and data will be returned to the latest available transaction. All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00| string|

 <a name=OBRisk2></a> 
## OBRisk2 
The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Account Info. 

### Attributes 

| Name| Description| Values|
| -----| -----| -----|

 <a name=OBReadConsent1></a> 
## OBReadConsent1 


### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| Data | Entity | <details><summary>[OBReadData1](#OBReadData1)</summary><ul><li>Permissions [array[[OBExternalPermissions1Code](#OBExternalPermissions1Code)]]</li> <li>ExpirationDateTime [string]</li> <li>TransactionFromDateTime [string]</li> <li>TransactionToDateTime [string]</li> </ul></details> | 
| Risk | Entity | <details><summary>[OBRisk2](#OBRisk2)</summary><ul></ul></details> | 

 <a name=OBExternalRequestStatus1Code></a> 
## OBExternalRequestStatus1Code 
### Attributes 

| Type| Description| Example| Values|
| -----| -----| -----| -----|
| enum| Specifies the status of consent resource in code form.| <ul style="padding-left: 0"><li>Authorised</li><li>AwaitingAuthorisation</li><li>Rejected</li><li>Revoked</li></ul>|

 <a name=OBReadDataConsentResponse1></a> 
## OBReadDataConsentResponse1 


### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| ConsentId| Unique identification as assigned to identify the account access consent resource.| string|
| CreationDateTime| Date and time at which the resource was created. All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00| string|
| Status | Entity | <details><summary>[OBExternalRequestStatus1Code](#OBExternalRequestStatus1Code)</summary><ul></ul></details> | 
| StatusUpdateDateTime| Date and time at which the resource status was updated. All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00| string|
| Permissions| Specifies the Open Banking account access data types. This is a list of the data clusters being consented by the PSU, and requested for authorisation with the ASPSP.| array[[OBExternalPermissions1Code](#OBExternalPermissions1Code)]|
| ExpirationDateTime| Specified date and time the permissions will expire. If this is not populated, the permissions will be open ended. All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00| string|
| TransactionFromDateTime| Specified start date and time for the transaction query period. If this is not populated, the start date will be open ended, and data will be returned from the earliest available transaction. All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00| string|
| TransactionToDateTime| Specified end date and time for the transaction query period. If this is not populated, the end date will be open ended, and data will be returned to the latest available transaction. All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00| string|

 <a name=Links></a> 
## Links 
Links relevant to the payload 

### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| Self| -| string|
| First| -| string|
| Prev| -| string|
| Next| -| string|
| Last| -| string|

 <a name=Meta></a> 
## Meta 
Meta Data relevant to the payload 

### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| TotalPages| -| integer|
| FirstAvailableDateTime| All dates in the JSON payloads are represented in ISO 8601 date-time format. All date-time fields in responses must include the timezone.An example is below: 2017-04-05T10:43:07+00:00| string|
| LastAvailableDateTime| All dates in the JSON payloads are represented in ISO 8601 date-time format. All date-time fields in responses must include the timezone.An example is below: 2017-04-05T10:43:07+00:00| string|

 <a name=OBReadConsentResponse1></a> 
## OBReadConsentResponse1 


### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| Data | Entity | <details><summary>[OBReadDataConsentResponse1](#OBReadDataConsentResponse1)</summary><ul><li>ConsentId [string]</li> <li>CreationDateTime [string]</li> <li><details><summary>Status [[OBExternalRequestStatus1Code](#OBExternalRequestStatus1Code)]</summary><ul></ul></details></li><li>StatusUpdateDateTime [string]</li> <li>Permissions [array[[OBExternalPermissions1Code](#OBExternalPermissions1Code)]]</li> <li>ExpirationDateTime [string]</li> <li>TransactionFromDateTime [string]</li> <li>TransactionToDateTime [string]</li> </ul></details> | 
| Risk | Entity | <details><summary>[OBRisk2](#OBRisk2)</summary><ul></ul></details> | 
| Links | Entity | <details><summary>[Links](#Links)</summary><ul><li>Self [string]</li> <li>First [string]</li> <li>Prev [string]</li> <li>Next [string]</li> <li>Last [string]</li> </ul></details> | 
| Meta | Entity | <details><summary>[Meta](#Meta)</summary><ul><li>TotalPages [integer]</li> <li>FirstAvailableDateTime [string]</li> <li>LastAvailableDateTime [string]</li> </ul></details> | 

 <a name=ErrorCode></a> 
## ErrorCode 
### Attributes 

| Type| Description| Example| Values|
| -----| -----| -----| -----|
| enum| This is Data Type gives a low level textual error code to help categorise an error response. The applicable HTTP response code is also given.| <ul style="padding-left: 0"><li>UK.OBIE.Field.Expected</li><li>UK.OBIE.Field.Invalid</li><li>UK.OBIE.Field.InvalidDate</li><li>UK.OBIE.Field.Missing</li><li>UK.OBIE.Field.Unexpected</li><li>UK.OBIE.Header.Invalid</li><li>UK.OBIE.Header.Missing</li><li>UK.OBIE.Resource.ConsentMismatch</li><li>UK.OBIE.Resource.InvalidConsentStatus</li><li>UK.OBIE.Resource.InvalidFormat</li><li>UK.OBIE.Resource.NotFound</li><li>UK.OBIE.Rules.AfterCutOffDateTime</li><li>UK.OBIE.Rules.DuplicateReference</li><li>UK.OBIE.Signature.Invalid</li><li>UK.OBIE.Signature.InvalidClaim</li><li>UK.OBIE.Signature.MissingClaim</li><li>UK.OBIE.Signature.Malformed</li><li>UK.OBIE.Signature.Missing</li><li>UK.OBIE.Signature.Unexpected</li><li>UK.OBIE.Unsupported.AccountIdentifier</li><li>UK.OBIE.Unsupported.AccountSecondaryIdentifier</li><li>UK.OBIE.Unsupported.Currency</li><li>UK.OBIE.Unsupported.EventType</li><li>UK.OBIE.Unsupported.Frequency</li><li>UK.OBIE.Unsupported.LocalInstrument</li><li>UK.OBIE.Unsupported.Scheme</li><li>UK.OBIE.Reauthenticate</li><li>UK.OBIE.Rules.ResourceAlreadyExists</li><li>UK.OBIE.UnexpectedError</li></ul>|

 <a name=OBError1></a> 
## OBError1 


### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| ErrorCode | Entity | <details><summary>[ErrorCode](#ErrorCode)</summary><ul></ul></details> | 
| Message| A description of the error that occurred. e.g., 'A mandatory field isn't supplied' or 'RequestedExecutionDateTime must be in future'OBIE doesn't standardise this field| string|
| Path| Recommended but optional reference to the JSON Path of the field with error, e.g., Data.Initiation.InstructedAmount.Currency| string|
| Url| URL to help remediate the problem, or provide more information, or to API Reference, or help etc| string|

 <a name=OBErrorResponse1></a> 
## OBErrorResponse1 
An array of detail error codes, and messages, and URLs to documentation to help remediation. 

### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| Code| High level textual error code, to help categorize the errors.| string|
| Id| A unique reference for the error instance, for audit purposes, in case of unknown/unclassified errors.| string|
| Message| Brief Error message, e.g., 'There is something wrong with the request parameters provided'| string|
| Errors| Gets or Sets Errors| array[[OBError1](#OBError1)]|

 <a name=OBAccountStatus1Code></a> 
## OBAccountStatus1Code 
### Attributes 

| Type| Description| Example| Values|
| -----| -----| -----| -----|
| enum| -| <ul style="padding-left: 0"><li>Deleted</li><li>Disabled</li><li>Enabled</li><li>Pending</li><li>ProForma</li></ul>|

 <a name=OBExternalAccountType1Code></a> 
## OBExternalAccountType1Code 
### Attributes 

| Type| Description| Example| Values|
| -----| -----| -----| -----|
| enum| -| <ul style="padding-left: 0"><li>Business</li><li>Personal</li></ul>|

 <a name=OBExternalAccountSubType1Code></a> 
## OBExternalAccountSubType1Code 
### Attributes 

| Type| Description| Example| Values|
| -----| -----| -----| -----|
| enum| -| <ul style="padding-left: 0"><li>ChargeCard</li><li>CreditCard</li><li>CurrentAccount</li><li>EMoney</li><li>Loan</li><li>Mortgage</li><li>PrePaidCard</li><li>Savings</li></ul>|

 <a name=OBCashAccount5></a> 
## OBCashAccount5 


### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| SchemeName| Name of the identification scheme, in a coded form as published in an external list.| string|
| Identification| Identification assigned by an institution to identify an account. This identification is known by the account owner.| string|
| Name| The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels. Note, the account name is not the product name or the nickname of the account.| string|
| SecondaryIdentification| This is secondary identification of the account, as assigned by the account servicing institution. This can be used by building societies to additionally identify accounts with a roll number(in addition to a sort code and account number combination).| string|

 <a name=OBBranchAndFinancialInstitutionIdentification5></a> 
## OBBranchAndFinancialInstitutionIdentification5 


### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| SchemeName| Name of the identification scheme, in a coded form as published in an external list.| string|
| Identification| Unique and unambiguous identification of the servicing institution.| string|

 <a name=OBAccount6></a> 
## OBAccount6 
Unambiguous identification of the account to which credit and debit entries are made. 

### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| AccountId| A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.| string|
| Status | Entity | <details><summary>[OBAccountStatus1Code](#OBAccountStatus1Code)</summary><ul></ul></details> | 
| StatusUpdateDateTime| Date and time at which the resource status was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00| string|
| Currency| Identification of the currency in which the account is held.  Usage: Currency should only be used in case one and the same account number covers several currencies and the initiating party needs to identify which currency needs to be used for settlement on the account.| string|
| AccountType | Entity | <details><summary>[OBExternalAccountType1Code](#OBExternalAccountType1Code)</summary><ul></ul></details> | 
| AccountSubType | Entity | <details><summary>[OBExternalAccountSubType1Code](#OBExternalAccountSubType1Code)</summary><ul></ul></details> | 
| Description| Specifies the description of the account type.| string|
| Nickname| The nickname of the account, assigned by the account owner in order to provide an additional means of identification of the account.| string|
| OpeningDate| Date on which the account and related basic services are effectively operational for the account owner.All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00| string|
| MaturityDate| Maturity date of the account.All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00| string|
| Account| Provides the details to identify an account.| array[[OBCashAccount5](#OBCashAccount5)]|
| Servicer | Entity | <details><summary>[OBBranchAndFinancialInstitutionIdentification5](#OBBranchAndFinancialInstitutionIdentification5)</summary><ul><li>SchemeName [string]</li> <li>Identification [string]</li> </ul></details> | 

 <a name=OBReadDataAccount5></a> 
## OBReadDataAccount5 


### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| Account| Unambiguous identification of the account to which credit and debit entries are made.| array[[OBAccount6](#OBAccount6)]|

 <a name=OBReadAccount5></a> 
## OBReadAccount5 


### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| Data | Entity | <details><summary>[OBReadDataAccount5](#OBReadDataAccount5)</summary><ul><li>Account [array[[OBAccount6](#OBAccount6)]]</li> </ul></details> | 
| Links | Entity | <details><summary>[Links](#Links)</summary><ul><li>Self [string]</li> <li>First [string]</li> <li>Prev [string]</li> <li>Next [string]</li> <li>Last [string]</li> </ul></details> | 
| Meta | Entity | <details><summary>[Meta](#Meta)</summary><ul><li>TotalPages [integer]</li> <li>FirstAvailableDateTime [string]</li> <li>LastAvailableDateTime [string]</li> </ul></details> | 

 <a name=OBCreditDebitCode></a> 
## OBCreditDebitCode 
### Attributes 

| Type| Description| Example| Values|
| -----| -----| -----| -----|
| enum| -| <ul style="padding-left: 0"><li>Credit</li><li>Debit</li></ul>|

 <a name=OBBalanceType1Code></a> 
## OBBalanceType1Code 
### Attributes 

| Type| Description| Example| Values|
| -----| -----| -----| -----|
| enum| -| <ul style="padding-left: 0"><li>ClosingAvailable</li><li>ClosingBooked</li><li>ClosingCleared</li><li>Expected</li><li>ForwardAvailable</li><li>Information</li><li>InterimAvailable</li><li>InterimBooked</li><li>InterimCleared</li><li>OpeningAvailable</li><li>OpeningBooked</li><li>OpeningCleared</li><li>PreviouslyClosedBooked</li></ul>|

 <a name=OBActiveOrHistoricCurrencyAndAmount></a> 
## OBActiveOrHistoricCurrencyAndAmount 


### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| Amount| A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.| string|
| Currency| A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".| string|

 <a name=OBExternalLimitType1Code></a> 
## OBExternalLimitType1Code 
### Attributes 

| Type| Description| Example| Values|
| -----| -----| -----| -----|
| enum| -| <ul style="padding-left: 0"><li>Available</li><li>Credit</li><li>Emergency</li><li>Pre-Agreed</li><li>Temporary</li></ul>|

 <a name=OBCreditLine1></a> 
## OBCreditLine1 


### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| Included| Indicates whether or not the credit line is included in the balance of the account. Usage: If not present, credit line is not included in the balance amount of the account.| boolean|
| Type | Entity | <details><summary>[OBExternalLimitType1Code](#OBExternalLimitType1Code)</summary><ul></ul></details> | 
| Amount | Entity | <details><summary>[OBActiveOrHistoricCurrencyAndAmount](#OBActiveOrHistoricCurrencyAndAmount)</summary><ul><li>Amount [string]</li> <li>Currency [string]</li> </ul></details> | 

 <a name=OBCashBalance1></a> 
## OBCashBalance1 
Set of elements used to define the balance details. 

### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| AccountId| A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.| string|
| CreditDebitIndicator | Entity | <details><summary>[OBCreditDebitCode](#OBCreditDebitCode)</summary><ul></ul></details> | 
| Type | Entity | <details><summary>[OBBalanceType1Code](#OBBalanceType1Code)</summary><ul></ul></details> | 
| DateTime| Indicates the date (and time) of the balance.All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00| string|
| Amount | Entity | <details><summary>[OBActiveOrHistoricCurrencyAndAmount](#OBActiveOrHistoricCurrencyAndAmount)</summary><ul><li>Amount [string]</li> <li>Currency [string]</li> </ul></details> | 
| CreditLine| Set of elements used to provide details on the credit line.| array[[OBCreditLine1](#OBCreditLine1)]|

 <a name=OBReadDataBalance1></a> 
## OBReadDataBalance1 


### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| Balance| Set of elements used to define the balance details.| array[[OBCashBalance1](#OBCashBalance1)]|

 <a name=OBReadBalance1></a> 
## OBReadBalance1 


### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| Data | Entity | <details><summary>[OBReadDataBalance1](#OBReadDataBalance1)</summary><ul><li>Balance [array[[OBCashBalance1](#OBCashBalance1)]]</li> </ul></details> | 
| Links | Entity | <details><summary>[Links](#Links)</summary><ul><li>Self [string]</li> <li>First [string]</li> <li>Prev [string]</li> <li>Next [string]</li> <li>Last [string]</li> </ul></details> | 
| Meta | Entity | <details><summary>[Meta](#Meta)</summary><ul><li>TotalPages [integer]</li> <li>FirstAvailableDateTime [string]</li> <li>LastAvailableDateTime [string]</li> </ul></details> | 

 <a name=OBBeneficiaryType1Code></a> 
## OBBeneficiaryType1Code 
### Attributes 

| Type| Description| Example| Values|
| -----| -----| -----| -----|
| enum| Specifies the Beneficiary Type.| <ul style="padding-left: 0"><li>Trusted</li><li>Ordinary</li></ul>|

 <a name=OBSupplementaryData1></a> 
## OBSupplementaryData1 
Additional information that can not be captured in the structured fields and/or any other specific block. 

### Attributes 

| Name| Description| Values|
| -----| -----| -----|

 <a name=OBAddressTypeCode></a> 
## OBAddressTypeCode 
### Attributes 

| Type| Description| Example| Values|
| -----| -----| -----| -----|
| enum| Identifies the nature of the postal address.| <ul style="padding-left: 0"><li>Business</li><li>Correspondence</li><li>DeliveryTo</li><li>MailTo</li><li>POBox</li><li>Postal</li><li>Residential</li><li>Statement</li></ul>|

 <a name=OBPostalAddress6></a> 
## OBPostalAddress6 
Information that locates and identifies a specific address, as defined by postal services. 

### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| AddressType | Entity | <details><summary>[OBAddressTypeCode](#OBAddressTypeCode)</summary><ul></ul></details> | 
| Department| Identification of a division of a large organisation or building.| string|
| SubDepartment| Identification of a sub-division of a large organisation or building.| string|
| StreetName| Name of a street or thoroughfare.| string|
| BuildingNumber| Number that identifies the position of a building on a street.| string|
| PostCode| Identifier consisting of a group of letters and/or numbers that is added to a postal address to assist the sorting of mail.| string|
| TownName| Name of a built-up area, with defined boundaries, and a local government.| string|
| CountrySubDivision| Identifies a subdivision of a country such as state, region, county.| string|
| Country| Nation with its own government.| string|
| AddressLine| Information that locates and identifies a specific address, as defined by postal services, presented in free format text.| array|

 <a name=OBBranchAndFinancialInstitutionIdentification6></a> 
## OBBranchAndFinancialInstitutionIdentification6 


### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| SchemeName| Name of the identification scheme, in a coded form as published in an external list.| string|
| Identification| Unique and unambiguous identification of the servicing institution.| string|
| Name| Name by which an agent is known and which is usually used to identify that agent.| string|
| PostalAddress | Entity | <details><summary>[OBPostalAddress6](#OBPostalAddress6)</summary><ul><li><details><summary>AddressType [[OBAddressTypeCode](#OBAddressTypeCode)]</summary><ul></ul></details></li><li>Department [string]</li> <li>SubDepartment [string]</li> <li>StreetName [string]</li> <li>BuildingNumber [string]</li> <li>PostCode [string]</li> <li>TownName [string]</li> <li>CountrySubDivision [string]</li> <li>Country [string]</li> <li>AddressLine [array]</li> </ul></details> | 

 <a name=OBBeneficiary5></a> 
## OBBeneficiary5 


### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| AccountId| A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.| string|
| BeneficiaryId| A unique and immutable identifier used to identify the beneficiary resource. This identifier has no meaning to the account owner.| string|
| BeneficiaryType | Entity | <details><summary>[OBBeneficiaryType1Code](#OBBeneficiaryType1Code)</summary><ul></ul></details> | 
| Reference| Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction. Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money. If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.| string|
| SupplementaryData | Entity | <details><summary>[OBSupplementaryData1](#OBSupplementaryData1)</summary><ul></ul></details> | 
| CreditorAgent | Entity | <details><summary>[OBBranchAndFinancialInstitutionIdentification6](#OBBranchAndFinancialInstitutionIdentification6)</summary><ul><li>SchemeName [string]</li> <li>Identification [string]</li> <li>Name [string]</li> <li><details><summary>PostalAddress [[OBPostalAddress6](#OBPostalAddress6)]</summary><ul><li><details><summary>AddressType [[OBAddressTypeCode](#OBAddressTypeCode)]</summary><ul></ul></details></li><li>Department [string]</li> <li>SubDepartment [string]</li> <li>StreetName [string]</li> <li>BuildingNumber [string]</li> <li>PostCode [string]</li> <li>TownName [string]</li> <li>CountrySubDivision [string]</li> <li>Country [string]</li> <li>AddressLine [array]</li> </ul></details></li></ul></details> | 
| CreditorAccount | Entity | <details><summary>[OBCashAccount5](#OBCashAccount5)</summary><ul><li>SchemeName [string]</li> <li>Identification [string]</li> <li>Name [string]</li> <li>SecondaryIdentification [string]</li> </ul></details> | 

 <a name=OBReadDataBeneficiary5></a> 
## OBReadDataBeneficiary5 


### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| Beneficiary| -| array[[OBBeneficiary5](#OBBeneficiary5)]|

 <a name=OBReadBeneficiary5></a> 
## OBReadBeneficiary5 


### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| Data | Entity | <details><summary>[OBReadDataBeneficiary5](#OBReadDataBeneficiary5)</summary><ul><li>Beneficiary [array[[OBBeneficiary5](#OBBeneficiary5)]]</li> </ul></details> | 
| Links | Entity | <details><summary>[Links](#Links)</summary><ul><li>Self [string]</li> <li>First [string]</li> <li>Prev [string]</li> <li>Next [string]</li> <li>Last [string]</li> </ul></details> | 
| Meta | Entity | <details><summary>[Meta](#Meta)</summary><ul><li>TotalPages [integer]</li> <li>FirstAvailableDateTime [string]</li> <li>LastAvailableDateTime [string]</li> </ul></details> | 

 <a name=OBExternalDirectDebitStatus1Code></a> 
## OBExternalDirectDebitStatus1Code 
### Attributes 

| Type| Description| Example| Values|
| -----| -----| -----| -----|
| enum| -| <ul style="padding-left: 0"><li>Active</li><li>Inactive</li></ul>|

 <a name=OBDirectDebit2></a> 
## OBDirectDebit2 
Account to or from which a cash entry is made. 

### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| AccountId| A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.| string|
| DirectDebitId| A unique and immutable identifier used to identify the direct debit resource. This identifier has no meaning to the account owner.| string|
| MandateIdentification| Direct Debit reference. For AUDDIS service users provide Core Reference. For non AUDDIS service users provide Core reference if possible or last used reference.| string|
| DirectDebitStatusCode | Entity | <details><summary>[OBExternalDirectDebitStatus1Code](#OBExternalDirectDebitStatus1Code)</summary><ul></ul></details> | 
| Name| Name of Service User.| string|
| PreviousPaymentDateTime| Date of most recent direct debit collection.All dates in the JSON payloads are represented in ISO 8601 date-time format. All date-time fields in responses must include the timezone.An example is below: 2017-04-05T10:43:07+00:00| string|
| Frequency| Regularity with which direct debit instructions are to be created and processed.| string|
| PreviousPaymentAmount | Entity | <details><summary>[OBActiveOrHistoricCurrencyAndAmount](#OBActiveOrHistoricCurrencyAndAmount)</summary><ul><li>Amount [string]</li> <li>Currency [string]</li> </ul></details> | 

 <a name=OBReadDataDirectDebit2></a> 
## OBReadDataDirectDebit2 


### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| DirectDebit| Account to or from which a cash entry is made.| array[[OBDirectDebit2](#OBDirectDebit2)]|

 <a name=OBReadDirectDebit2></a> 
## OBReadDirectDebit2 


### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| Data | Entity | <details><summary>[OBReadDataDirectDebit2](#OBReadDataDirectDebit2)</summary><ul><li>DirectDebit [array[[OBDirectDebit2](#OBDirectDebit2)]]</li> </ul></details> | 
| Links | Entity | <details><summary>[Links](#Links)</summary><ul><li>Self [string]</li> <li>First [string]</li> <li>Prev [string]</li> <li>Next [string]</li> <li>Last [string]</li> </ul></details> | 
| Meta | Entity | <details><summary>[Meta](#Meta)</summary><ul><li>TotalPages [integer]</li> <li>FirstAvailableDateTime [string]</li> <li>LastAvailableDateTime [string]</li> </ul></details> | 

 <a name=OBExternalOfferType1Code></a> 
## OBExternalOfferType1Code 
### Attributes 

| Type| Description| Example| Values|
| -----| -----| -----| -----|
| enum| -| <ul style="padding-left: 0"><li>BalanceTransfer</li><li>LimitIncrease</li><li>MoneyTransfer</li><li>Other</li><li>PromotionalRate</li></ul>|

 <a name=OBOffer1></a> 
## OBOffer1 


### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| AccountId| A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.| string|
| OfferId| A unique and immutable identifier used to identify the offer resource. This identifier has no meaning to the account owner.| string|
| OfferType | Entity | <details><summary>[OBExternalOfferType1Code](#OBExternalOfferType1Code)</summary><ul></ul></details> | 
| Description| Further details of the offer.| string|
| StartDateTime| Date and time at which the offer starts.All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00| string|
| EndDateTime| Date and time at which the offer ends.All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00| string|
| Rate| Rate associated with the offer type.| string|
| Value| Value associated with the offer type.| integer|
| Term| Further details of the term of the offer.| string|
| URL| URL (Uniform Resource Locator) where documentation on the offer can be found| string|
| Amount | Entity | <details><summary>[OBActiveOrHistoricCurrencyAndAmount](#OBActiveOrHistoricCurrencyAndAmount)</summary><ul><li>Amount [string]</li> <li>Currency [string]</li> </ul></details> | 
| Fee | Entity | <details><summary>[OBActiveOrHistoricCurrencyAndAmount](#OBActiveOrHistoricCurrencyAndAmount)</summary><ul><li>Amount [string]</li> <li>Currency [string]</li> </ul></details> | 

 <a name=OBReadDataOffer1></a> 
## OBReadDataOffer1 


### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| Offer| -| array[[OBOffer1](#OBOffer1)]|

 <a name=OBReadOffer1></a> 
## OBReadOffer1 


### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| Data | Entity | <details><summary>[OBReadDataOffer1](#OBReadDataOffer1)</summary><ul><li>Offer [array[[OBOffer1](#OBOffer1)]]</li> </ul></details> | 
| Links | Entity | <details><summary>[Links](#Links)</summary><ul><li>Self [string]</li> <li>First [string]</li> <li>Prev [string]</li> <li>Next [string]</li> <li>Last [string]</li> </ul></details> | 
| Meta | Entity | <details><summary>[Meta](#Meta)</summary><ul><li>TotalPages [integer]</li> <li>FirstAvailableDateTime [string]</li> <li>LastAvailableDateTime [string]</li> </ul></details> | 

 <a name=OBExternalPartyType1Code></a> 
## OBExternalPartyType1Code 
### Attributes 

| Type| Description| Example| Values|
| -----| -----| -----| -----|
| enum| -| <ul style="padding-left: 0"><li>Delegate</li><li>Joint</li><li>Sole</li></ul>|

 <a name=OBRelationship1></a> 
## OBRelationship1 


### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| Related| Absolute URI to the related resource.| string|
| Id| Unique identification as assigned by the ASPSP to uniquely identify the related resource.| string|

 <a name=OBPartyRelationships1></a> 
## OBPartyRelationships1 


### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| Account | Entity | <details><summary>[OBRelationship1](#OBRelationship1)</summary><ul><li>Related [string]</li> <li>Id [string]</li> </ul></details> | 

 <a name=OBPostalAddress8></a> 
## OBPostalAddress8 


### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| AddressType | Entity | <details><summary>[OBAddressTypeCode](#OBAddressTypeCode)</summary><ul></ul></details> | 
| AddressLine| Information that locates and identifies a specific address, as defined by postal services, that is presented in free format text.| array|
| StreetName| Name of a street or thoroughfare.| string|
| BuildingNumber| Number that identifies the position of a building on a street.| string|
| PostCode| Identifier consisting of a group of letters and/or numbers that is added to a postal address to assist the sorting of mail.| string|
| TownName| Name of a built-up area, with defined boundaries, and a local government.| string|
| CountrySubDivision| Identifies a subdivision of a country eg, state, region, county.| string|
| Country| Nation with its own government, occupying a particular territory.| string|

 <a name=OBParty2></a> 
## OBParty2 


### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| PartyId| A unique and immutable identifier used to identify the customer resource. This identifier has no meaning to the account owner.| string|
| PartyNumber| Number assigned by an agent to identify its customer.| string|
| PartyType | Entity | <details><summary>[OBExternalPartyType1Code](#OBExternalPartyType1Code)</summary><ul></ul></details> | 
| Name| Name by which a party is known and which is usually used to identify that party.| string|
| FullLegalName| Specifies a character string with a maximum length of 350 characters.| string|
| LegalStructure| Legal standing of the party.| string|
| BeneficialOwnership| A flag to indicate a party's beneficial ownership of the related account.| boolean|
| AccountRole| A party’s role with respect to the related account.| string|
| EmailAddress| Address for electronic mail (e-mail).| string|
| Phone| Collection of information that identifies a phone number, as defined by telecom services.| string|
| Mobile| Collection of information that identifies a mobile phone number, as defined by telecom services.| string|
| Relationships | Entity | <details><summary>[OBPartyRelationships1](#OBPartyRelationships1)</summary><ul><li><details><summary>Account [[OBRelationship1](#OBRelationship1)]</summary><ul><li>Related [string]</li> <li>Id [string]</li> </ul></details></li></ul></details> | 
| Address| Postal address of a party.| array[[OBPostalAddress8](#OBPostalAddress8)]|

 <a name=OBReadDataParty2></a> 
## OBReadDataParty2 


### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| Party | Entity | <details><summary>[OBParty2](#OBParty2)</summary><ul><li>PartyId [string]</li> <li>PartyNumber [string]</li> <li><details><summary>PartyType [[OBExternalPartyType1Code](#OBExternalPartyType1Code)]</summary><ul></ul></details></li><li>Name [string]</li> <li>FullLegalName [string]</li> <li>LegalStructure [string]</li> <li>BeneficialOwnership [boolean]</li> <li>AccountRole [string]</li> <li>EmailAddress [string]</li> <li>Phone [string]</li> <li>Mobile [string]</li> <li><details><summary>Relationships [[OBPartyRelationships1](#OBPartyRelationships1)]</summary><ul><li><details><summary>Account [[OBRelationship1](#OBRelationship1)]</summary><ul><li>Related [string]</li> <li>Id [string]</li> </ul></details></li></ul></details></li><li>Address [array[[OBPostalAddress8](#OBPostalAddress8)]]</li> </ul></details> | 

 <a name=OBReadParty2></a> 
## OBReadParty2 


### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| Data | Entity | <details><summary>[OBReadDataParty2](#OBReadDataParty2)</summary><ul><li><details><summary>Party [[OBParty2](#OBParty2)]</summary><ul><li>PartyId [string]</li> <li>PartyNumber [string]</li> <li><details><summary>PartyType [[OBExternalPartyType1Code](#OBExternalPartyType1Code)]</summary><ul></ul></details></li><li>Name [string]</li> <li>FullLegalName [string]</li> <li>LegalStructure [string]</li> <li>BeneficialOwnership [boolean]</li> <li>AccountRole [string]</li> <li>EmailAddress [string]</li> <li>Phone [string]</li> <li>Mobile [string]</li> <li><details><summary>Relationships [[OBPartyRelationships1](#OBPartyRelationships1)]</summary><ul><li><details><summary>Account [[OBRelationship1](#OBRelationship1)]</summary><ul><li>Related [string]</li> <li>Id [string]</li> </ul></details></li></ul></details></li><li>Address [array[[OBPostalAddress8](#OBPostalAddress8)]]</li> </ul></details></li></ul></details> | 
| Links | Entity | <details><summary>[Links](#Links)</summary><ul><li>Self [string]</li> <li>First [string]</li> <li>Prev [string]</li> <li>Next [string]</li> <li>Last [string]</li> </ul></details> | 
| Meta | Entity | <details><summary>[Meta](#Meta)</summary><ul><li>TotalPages [integer]</li> <li>FirstAvailableDateTime [string]</li> <li>LastAvailableDateTime [string]</li> </ul></details> | 

 <a name=OBReadDataParty3></a> 
## OBReadDataParty3 


### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| Party| -| array[[OBParty2](#OBParty2)]|

 <a name=OBReadParty3></a> 
## OBReadParty3 


### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| Data | Entity | <details><summary>[OBReadDataParty3](#OBReadDataParty3)</summary><ul><li>Party [array[[OBParty2](#OBParty2)]]</li> </ul></details> | 
| Links | Entity | <details><summary>[Links](#Links)</summary><ul><li>Self [string]</li> <li>First [string]</li> <li>Prev [string]</li> <li>Next [string]</li> <li>Last [string]</li> </ul></details> | 
| Meta | Entity | <details><summary>[Meta](#Meta)</summary><ul><li>TotalPages [integer]</li> <li>FirstAvailableDateTime [string]</li> <li>LastAvailableDateTime [string]</li> </ul></details> | 

 <a name=OBExternalProductType1Code></a> 
## OBExternalProductType1Code 
### Attributes 

| Type| Description| Example| Values|
| -----| -----| -----| -----|
| enum| Product type : Personal Current Account, Business Current Account| <ul style="padding-left: 0"><li>BusinessCurrentAccount</li><li>CommercialCreditCard</li><li>Other</li><li>PersonalCurrentAccount</li><li>SMELoan</li></ul>|

 <a name=OBOtherProductSegment1Code></a> 
## OBOtherProductSegment1Code 
### Attributes 

| Type| Description| Example| Values|
| -----| -----| -----| -----|
| enum| -| <ul style="padding-left: 0"><li>GEAS</li><li>GEBA</li><li>GEBR</li><li>GEBU</li><li>GECI</li><li>GECS</li><li>GEFB</li><li>GEFG</li><li>GEG</li><li>GEGR</li><li>GEGS</li><li>GEOT</li><li>GEOV</li><li>GEPA</li><li>GEPR</li><li>GERE</li><li>GEST</li><li>GEYA</li><li>GEYO</li><li>PSCA</li><li>PSES</li><li>PSNC</li><li>PSNP</li><li>PSRG</li><li>PSSS</li><li>PSST</li><li>PSSW</li></ul>|

 <a name=OBPeriod1Code></a> 
## OBPeriod1Code 
### Attributes 

| Type| Description| Example| Values|
| -----| -----| -----| -----|
| enum| The unit of period (days, weeks, months etc.) of the promotional length| <ul style="padding-left: 0"><li>PACT</li><li>PDAY</li><li>PHYR</li><li>PMTH</li><li>PQTR</li><li>PWEK</li><li>PYER</li></ul>|

 <a name=OBOtherCodeType1></a> 
## OBOtherCodeType1 


### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| Code| The four letter Mnemonic used within an XML file to identify a code| string|
| Name| Long name associated with the code| string|
| Description| Description to describe the purpose of the code| string|

 <a name=OBOtherProductDetails1></a> 
## OBOtherProductDetails1 


### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| Segment| Market segmentation is a marketing term referring to the aggregating of prospective buyers into groups, or segments, that have common needs and respond similarly to a marketing action. Market segmentation enables companies to target different categories of consumers who perceive the full value of certain products and services differently from one another. Read more: Market Segmentation http://www.investopedia.com/terms/m/marketsegmentation.asp#ixzz4gfEEalTd| array[[OBOtherProductSegment1Code](#OBOtherProductSegment1Code)]|
| FeeFreeLength| The length/duration of the fee free period| integer|
| FeeFreeLengthPeriod | Entity | <details><summary>[OBPeriod1Code](#OBPeriod1Code)</summary><ul></ul></details> | 
| MonthlyMaximumCharge| The maximum relevant charges that could accrue as defined fully in Part 7 of the CMA order| string|
| Notes| Optional additional notes to supplement the Core product details| array|
| OtherSegment | Entity | <details><summary>[OBOtherCodeType1](#OBOtherCodeType1)</summary><ul><li>Code [string]</li> <li>Name [string]</li> <li>Description [string]</li> </ul></details> | 

 <a name=OBTierBandType1Code></a> 
## OBTierBandType1Code 
### Attributes 

| Type| Description| Example| Values|
| -----| -----| -----| -----|
| enum| The methodology of how credit interest is paid/applied. It can be:- 1. Banded Interest rates are banded. i.e. Increasing rate on whole balance as balance increases. 2. Tiered Interest rates are tiered. i.e. increasing rate for each tier as balance increases, but interest paid on tier fixed for that tier and not on whole balance. 3. Whole The same interest rate is applied irrespective of the product holder's account balance| <ul style="padding-left: 0"><li>INBA</li><li>INTI</li><li>INWH</li></ul>|

 <a name=OBInterestCalculationMethod1Code></a> 
## OBInterestCalculationMethod1Code 
### Attributes 

| Type| Description| Example| Values|
| -----| -----| -----| -----|
| enum| -| <ul style="padding-left: 0"><li>ITCO</li><li>ITOT</li><li>ITSI</li></ul>|

 <a name=OBInterestDestination1Code></a> 
## OBInterestDestination1Code 
### Attributes 

| Type| Description| Example| Values|
| -----| -----| -----| -----|
| enum| Describes whether accrued interest is payable only to the BCA or to another bank account| <ul style="padding-left: 0"><li>INOT</li><li>INPA</li><li>INSC</li></ul>|

 <a name=OBFrequency1Code></a> 
## OBFrequency1Code 
### Attributes 

| Type| Description| Example| Values|
| -----| -----| -----| -----|
| enum| How often is credit interest calculated for the account.| <ul style="padding-left: 0"><li>FQAT</li><li>FQDY</li><li>FQHY</li><li>FQMY</li><li>FQOT</li><li>FQQY</li><li>FQSD</li><li>FQWY</li><li>FQYY</li></ul>|

 <a name=OBInterestFixedVariableType1Code></a> 
## OBInterestFixedVariableType1Code 
### Attributes 

| Type| Description| Example| Values|
| -----| -----| -----| -----|
| enum| Type of interest rate, Fixed or Variable| <ul style="padding-left: 0"><li>INFI</li><li>INVA</li></ul>|

 <a name=OBInterestRateType1Code></a> 
## OBInterestRateType1Code 
### Attributes 

| Type| Description| Example| Values|
| -----| -----| -----| -----|
| enum| Interest rate types, other than AER, which financial institutions may use to describe the annual interest rate payable to the account holder's account.| <ul style="padding-left: 0"><li>INBB</li><li>INFR</li><li>INGR</li><li>INLR</li><li>INNE</li><li>INOT</li></ul>|

 <a name=OBTierBand1></a> 
## OBTierBand1 
Tier Band Details 

### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| Identification| Unique and unambiguous identification of a  Tier Band for the Product.| string|
| TierValueMinimum| Minimum deposit value for which the credit interest tier applies.| string|
| TierValueMaximum| Maximum deposit value for which the credit interest tier applies.| string|
| CalculationFrequency | Entity | <details><summary>[OBFrequency1Code](#OBFrequency1Code)</summary><ul></ul></details> | 
| ApplicationFrequency | Entity | <details><summary>[OBFrequency1Code](#OBFrequency1Code)</summary><ul></ul></details> | 
| DepositInterestAppliedCoverage | Entity | <details><summary>[OBTierBandType1Code](#OBTierBandType1Code)</summary><ul></ul></details> | 
| FixedVariableInterestRateType | Entity | <details><summary>[OBInterestFixedVariableType1Code](#OBInterestFixedVariableType1Code)</summary><ul></ul></details> | 
| AER| The annual equivalent rate (AER) is interest that is calculated under the assumption that any interest paid is combined with the original balance and the next interest payment will be based on the slightly higher account balance. Overall, this means that interest can be compounded several times in a year depending on the number of times that interest payments are made.  Read more: Annual Equivalent Rate (AER) http://www.investopedia.com/terms/a/aer.asp#ixzz4gfR7IO1A| string|
| BankInterestRateType | Entity | <details><summary>[OBInterestRateType1Code](#OBInterestRateType1Code)</summary><ul></ul></details> | 
| BankInterestRate| Bank Interest for the product| string|
| Notes| Optional additional notes to supplement the Tier Band details| array|
| OtherBankInterestType | Entity | <details><summary>[OBOtherCodeType1](#OBOtherCodeType1)</summary><ul><li>Code [string]</li> <li>Name [string]</li> <li>Description [string]</li> </ul></details> | 
| OtherApplicationFrequency | Entity | <details><summary>[OBOtherCodeType1](#OBOtherCodeType1)</summary><ul><li>Code [string]</li> <li>Name [string]</li> <li>Description [string]</li> </ul></details> | 
| OtherCalculationFrequency | Entity | <details><summary>[OBOtherCodeType1](#OBOtherCodeType1)</summary><ul><li>Code [string]</li> <li>Name [string]</li> <li>Description [string]</li> </ul></details> | 

 <a name=OBTierBandSet1></a> 
## OBTierBandSet1 
The group of tiers or bands for which credit interest can be applied. 

### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| TierBandMethod | Entity | <details><summary>[OBTierBandType1Code](#OBTierBandType1Code)</summary><ul></ul></details> | 
| CalculationMethod | Entity | <details><summary>[OBInterestCalculationMethod1Code](#OBInterestCalculationMethod1Code)</summary><ul></ul></details> | 
| Destination | Entity | <details><summary>[OBInterestDestination1Code](#OBInterestDestination1Code)</summary><ul></ul></details> | 
| Notes| Optional additional notes to supplement the Tier Band Set details| array|
| OtherCalculationMethod | Entity | <details><summary>[OBOtherCodeType1](#OBOtherCodeType1)</summary><ul><li>Code [string]</li> <li>Name [string]</li> <li>Description [string]</li> </ul></details> | 
| OtherDestination | Entity | <details><summary>[OBOtherCodeType1](#OBOtherCodeType1)</summary><ul><li>Code [string]</li> <li>Name [string]</li> <li>Description [string]</li> </ul></details> | 
| TierBand| Tier Band Details| array[[OBTierBand1](#OBTierBand1)]|

 <a name=OBCreditInterest1></a> 
## OBCreditInterest1 
Details about the interest that may be payable to the Account holders 

### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| TierBandSet| -| array[[OBTierBandSet1](#OBTierBandSet1)]|

 <a name=OBOverdraftType1Code></a> 
## OBOverdraftType1Code 
### Attributes 

| Type| Description| Example| Values|
| -----| -----| -----| -----|
| enum| An overdraft can either be 'committed' which means that the facility cannot be withdrawn without reasonable notification before it's agreed end date, or 'on demand' which means that the financial institution can demand repayment at any point in time.| <ul style="padding-left: 0"><li>OVCO</li><li>OVOD</li><li>OVOT</li></ul>|

 <a name=OBOverdraftFeeType1Code></a> 
## OBOverdraftFeeType1Code 
### Attributes 

| Type| Description| Example| Values|
| -----| -----| -----| -----|
| enum| Fee/charge type which is being capped| <ul style="padding-left: 0"><li>FBAO</li><li>FBAR</li><li>FBEB</li><li>FBIT</li><li>FBOR</li><li>FBOS</li><li>FBSC</li><li>FBTO</li><li>FBUB</li><li>FBUT</li><li>FTOT</li><li>FTUT</li></ul>|

 <a name=OBMinMaxType1Code></a> 
## OBMinMaxType1Code 
### Attributes 

| Type| Description| Example| Values|
| -----| -----| -----| -----|
| enum| Min Max type| <ul style="padding-left: 0"><li>FMMN</li><li>FMMX</li></ul>|

 <a name=OBOverdraftFeeChargeCap1></a> 
## OBOverdraftFeeChargeCap1 
Details about any caps (maximum charges) that apply to a particular fee/charge. Capping can either be based on an amount (in gbp), an amount (in items) or a rate. 

### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| FeeType| -| array[[OBOverdraftFeeType1Code](#OBOverdraftFeeType1Code)]|
| MinMaxType | Entity | <details><summary>[OBMinMaxType1Code](#OBMinMaxType1Code)</summary><ul></ul></details> | 
| FeeCapOccurrence| Indicates whether the advertised overdraft rate is guaranteed to be offered to a borrower by the bank e.g. if it's part of a government scheme, or whether the rate may vary dependent on the applicant's circumstances.| integer|
| FeeCapAmount| Cap amount charged for a fee/charge| string|
| CappingPeriod | Entity | <details><summary>[OBPeriod1Code](#OBPeriod1Code)</summary><ul></ul></details> | 
| Notes| Notes related to Overdraft fee charge cap| array|
| OtherFeeType| -| array[[OBOtherCodeType1](#OBOtherCodeType1)]|

 <a name=OBFeeFrequency1Code></a> 
## OBFeeFrequency1Code 
### Attributes 

| Type| Description| Example| Values|
| -----| -----| -----| -----|
| enum| Frequency at which the overdraft charge is applied to the account| <ul style="padding-left: 0"><li>FEAC</li><li>FEAO</li><li>FECP</li><li>FEDA</li><li>FEHO</li><li>FEI</li><li>FEMO</li><li>FEOA</li><li>FEOT</li><li>FEPC</li><li>FEPH</li><li>FEPO</li><li>FEPS</li><li>FEPT</li><li>FEPTA</li><li>FEPTP</li><li>FEQU</li><li>FESM</li><li>FEST</li><li>FEWE</li><li>FEYE</li></ul>|

 <a name=OBOverdraftFeesChargeDetails1></a> 
## OBOverdraftFeesChargeDetails1 
Details about the fees/charges 

### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| FeeType | Entity | <details><summary>[OBOverdraftFeeType1Code](#OBOverdraftFeeType1Code)</summary><ul></ul></details> | 
| NegotiableIndicator| Indicates whether fee and charges are negotiable| boolean|
| OverdraftControlIndicator| Indicates if the fee/charge is already covered by an 'Overdraft Control' fee or not.| boolean|
| IncrementalBorrowingAmount| Every additional tranche of an overdraft balance to which an overdraft fee is applied| string|
| FeeAmount| Amount charged for an overdraft fee/charge (where it is charged in terms of an amount rather than a rate)| string|
| FeeRate| Rate charged for overdraft fee/charge (where it is charged in terms of a rate rather than an amount)| string|
| FeeRateType | Entity | <details><summary>[OBInterestRateType1Code](#OBInterestRateType1Code)</summary><ul></ul></details> | 
| ApplicationFrequency | Entity | <details><summary>[OBFeeFrequency1Code](#OBFeeFrequency1Code)</summary><ul></ul></details> | 
| CalculationFrequency | Entity | <details><summary>[OBFeeFrequency1Code](#OBFeeFrequency1Code)</summary><ul></ul></details> | 
| Notes| Free text for capturing any other info related to Overdraft Fees Charge Details| array|
| OverdraftFeeChargeCap| -| array[[OBOverdraftFeeChargeCap1](#OBOverdraftFeeChargeCap1)]|
| OtherFeeType | Entity | <details><summary>[OBOtherCodeType1](#OBOtherCodeType1)</summary><ul><li>Code [string]</li> <li>Name [string]</li> <li>Description [string]</li> </ul></details> | 
| OtherFeeRateType | Entity | <details><summary>[OBOtherCodeType1](#OBOtherCodeType1)</summary><ul><li>Code [string]</li> <li>Name [string]</li> <li>Description [string]</li> </ul></details> | 
| OtherApplicationFrequency | Entity | <details><summary>[OBOtherCodeType1](#OBOtherCodeType1)</summary><ul><li>Code [string]</li> <li>Name [string]</li> <li>Description [string]</li> </ul></details> | 
| OtherCalculationFrequency | Entity | <details><summary>[OBOtherCodeType1](#OBOtherCodeType1)</summary><ul><li>Code [string]</li> <li>Name [string]</li> <li>Description [string]</li> </ul></details> | 

 <a name=OBOverdraftFeesCharges1></a> 
## OBOverdraftFeesCharges1 
Overdraft fees and charges 

### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| OverdraftFeeChargeCap| -| array[[OBOverdraftFeeChargeCap1](#OBOverdraftFeeChargeCap1)]|
| OverdraftFeeChargeDetail| -| array[[OBOverdraftFeesChargeDetails1](#OBOverdraftFeesChargeDetails1)]|

 <a name=OBOverdraftTierBand1></a> 
## OBOverdraftTierBand1 
Provides overdraft details for a specific tier or band 

### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| Identification| Unique and unambiguous identification of a  Tier Band for a overdraft.| string|
| TierValueMin| Minimum value of Overdraft Tier/Band| string|
| TierValueMax| Maximum value of Overdraft Tier/Band| string|
| EAR| EAR means Effective Annual Rate and/or Equivalent Annual Rate (frequently used interchangeably), being the actual annual interest rate of an Overdraft.| string|
| AgreementLengthMin| Specifies the minimum length of a band for a fixed overdraft agreement| integer|
| AgreementLengthMax| Specifies the maximum length of a band for a fixed overdraft agreement| integer|
| AgreementPeriod | Entity | <details><summary>[OBPeriod1Code](#OBPeriod1Code)</summary><ul></ul></details> | 
| OverdraftInterestChargingCoverage | Entity | <details><summary>[OBTierBandType1Code](#OBTierBandType1Code)</summary><ul></ul></details> | 
| BankGuaranteedIndicator| Indicates whether the advertised overdraft rate is guaranteed to be offered to a borrower by the bank e.g. if it�s part of a government scheme, or whether the rate may vary dependent on the applicant�s circumstances.| boolean|
| Notes| Optional additional notes to supplement the Tier/band details| array|
| OverdraftFeesCharges| -| array[[OBOverdraftFeesCharges1](#OBOverdraftFeesCharges1)]|

 <a name=OBOverdraftTierbandSet1></a> 
## OBOverdraftTierbandSet1 
Tier band set details 

### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| TierBandMethod | Entity | <details><summary>[OBTierBandType1Code](#OBTierBandType1Code)</summary><ul></ul></details> | 
| OverdraftType | Entity | <details><summary>[OBOverdraftType1Code](#OBOverdraftType1Code)</summary><ul></ul></details> | 
| Identification| Unique and unambiguous identification of a  Tier Band for a overdraft product.| string|
| AuthorisedIndicator| Indicates if the Overdraft is authorised (Y) or unauthorised (N)| boolean|
| BufferAmount| When a customer exceeds their credit limit, a financial institution will not charge the customer unauthorised overdraft charges if they do not exceed by more than the buffer amount. Note: Authorised overdraft charges may still apply.| string|
| Notes| Optional additional notes to supplement the overdraft Tier Band Set details| array|
| OverdraftTierBand| -| array[[OBOverdraftTierBand1](#OBOverdraftTierBand1)]|
| OverdraftFeesCharges| -| array[[OBOverdraftFeesCharges1](#OBOverdraftFeesCharges1)]|

 <a name=OBOverdraft1></a> 
## OBOverdraft1 
Borrowing details 

### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| Notes| Associated Notes about the overdraft rates| array|
| OverdraftTierBandSet| Tier band set details| array[[OBOverdraftTierbandSet1](#OBOverdraftTierbandSet1)]|

 <a name=OBFeeType1Code></a> 
## OBFeeType1Code 
### Attributes 

| Type| Description| Example| Values|
| -----| -----| -----| -----|
| enum| Fee/Charge Type| <ul style="padding-left: 0"><li>FEPF</li><li>FTOT</li><li>FYAF</li><li>FYAM</li><li>FYAQ</li><li>FYCP</li><li>FYDB</li><li>FYMI</li><li>FYXX</li></ul>|

 <a name=OBFeeCategory1Code></a> 
## OBFeeCategory1Code 
### Attributes 

| Type| Description| Example| Values|
| -----| -----| -----| -----|
| enum| Categorisation of fees and charges into standard categories.| <ul style="padding-left: 0"><li>FCOT</li><li>FCRE</li><li>FCSV</li></ul>|

 <a name=OBOtherFeeChargeDetailType></a> 
## OBOtherFeeChargeDetailType 
Other Fee/charge type which is not available in the standard code set 

### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| Code| The four letter Mnemonic used within an XML file to identify a code| string|
| FeeCategory | Entity | <details><summary>[OBFeeCategory1Code](#OBFeeCategory1Code)</summary><ul></ul></details> | 
| Name| Long name associated with the code| string|
| Description| Description to describe the purpose of the code| string|

 <a name=OBLoanInterestFeesChargeDetail1></a> 
## OBLoanInterestFeesChargeDetail1 
Other fees/charges details 

### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| FeeType | Entity | <details><summary>[OBFeeType1Code](#OBFeeType1Code)</summary><ul></ul></details> | 
| NegotiableIndicator| Fee/charge which is usually negotiable rather than a fixed amount| boolean|
| FeeAmount| Fee Amount charged for a fee/charge (where it is charged in terms of an amount rather than a rate)| string|
| FeeRate| Rate charged for Fee/Charge (where it is charged in terms of a rate rather than an amount)| string|
| FeeRateType | Entity | <details><summary>[OBInterestRateType1Code](#OBInterestRateType1Code)</summary><ul></ul></details> | 
| ApplicationFrequency | Entity | <details><summary>[OBFeeFrequency1Code](#OBFeeFrequency1Code)</summary><ul></ul></details> | 
| CalculationFrequency | Entity | <details><summary>[OBFeeFrequency1Code](#OBFeeFrequency1Code)</summary><ul></ul></details> | 
| Notes| Optional additional notes to supplement the fee/charge details.| array|
| OtherFeeType | Entity | <details><summary>[OBOtherFeeChargeDetailType](#OBOtherFeeChargeDetailType)</summary><ul><li>Code [string]</li> <li><details><summary>FeeCategory [[OBFeeCategory1Code](#OBFeeCategory1Code)]</summary><ul></ul></details></li><li>Name [string]</li> <li>Description [string]</li> </ul></details> | 
| OtherFeeRateType | Entity | <details><summary>[OBOtherCodeType1](#OBOtherCodeType1)</summary><ul><li>Code [string]</li> <li>Name [string]</li> <li>Description [string]</li> </ul></details> | 
| OtherApplicationFrequency | Entity | <details><summary>[OBOtherCodeType1](#OBOtherCodeType1)</summary><ul><li>Code [string]</li> <li>Name [string]</li> <li>Description [string]</li> </ul></details> | 
| OtherCalculationFrequency | Entity | <details><summary>[OBOtherCodeType1](#OBOtherCodeType1)</summary><ul><li>Code [string]</li> <li>Name [string]</li> <li>Description [string]</li> </ul></details> | 

 <a name=OBLoanInterestFeesChargeCap1></a> 
## OBLoanInterestFeesChargeCap1 
Details about any caps (minimum/maximum charges) that apply to a particular fee/charge 

### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| FeeType| -| array[[OBFeeType1Code](#OBFeeType1Code)]|
| MinMaxType | Entity | <details><summary>[OBMinMaxType1Code](#OBMinMaxType1Code)</summary><ul></ul></details> | 
| FeeCapOccurrence| Fee/charges are captured dependent on the number of occurrences rather than capped at a particular amount| integer|
| FeeCapAmount| Cap amount charged for a fee/charge (where it is charged in terms of an amount rather than a rate)| string|
| CappingPeriod | Entity | <details><summary>[OBFeeFrequency1Code](#OBFeeFrequency1Code)</summary><ul></ul></details> | 
| Notes| Free text for adding extra details for fee charge cap| array|
| OtherFeeType| -| array[[OBOtherCodeType1](#OBOtherCodeType1)]|

 <a name=OBLoanInterestFeesCharges1></a> 
## OBLoanInterestFeesCharges1 
Contains details of fees and charges which are not associated with either LoanRepayment or features/benefits 

### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| LoanInterestFeeChargeDetail| -| array[[OBLoanInterestFeesChargeDetail1](#OBLoanInterestFeesChargeDetail1)]|
| LoanInterestFeeChargeCap| -| array[[OBLoanInterestFeesChargeCap1](#OBLoanInterestFeesChargeCap1)]|

 <a name=OBLoanInterestTierBand1></a> 
## OBLoanInterestTierBand1 
Tier Band Details 

### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| Identification| Unique and unambiguous identification of a  Tier Band for a SME Loan.| string|
| TierValueMinimum| Minimum loan value for which the loan interest tier applies.| string|
| TierValueMaximum| Maximum loan value for which the loan interest tier applies.| string|
| TierValueMinTerm| Minimum loan term for which the loan interest tier applies.| integer|
| MinTermPeriod | Entity | <details><summary>[OBPeriod1Code](#OBPeriod1Code)</summary><ul></ul></details> | 
| TierValueMaxTerm| Maximum loan term for which the loan interest tier applies.| integer|
| MaxTermPeriod | Entity | <details><summary>[OBPeriod1Code](#OBPeriod1Code)</summary><ul></ul></details> | 
| FixedVariableInterestRateType | Entity | <details><summary>[OBInterestFixedVariableType1Code](#OBInterestFixedVariableType1Code)</summary><ul></ul></details> | 
| RepAPR| The annual equivalent rate (AER) is interest that is calculated under the assumption that any interest paid is combined with the original balance and the next interest payment will be based on the slightly higher account balance. Overall, this means that interest can be compounded several times in a year depending on the number of times that interest payments are made.  For SME Loan, this APR is the representative APR which includes any account fees.| string|
| LoanProviderInterestRateType | Entity | <details><summary>[OBInterestRateType1Code](#OBInterestRateType1Code)</summary><ul></ul></details> | 
| LoanProviderInterestRate| Loan provider Interest for the SME Loan product| string|
| Notes| Optional additional notes to supplement the Tier Band details| array|
| OtherLoanProviderInterestRateType | Entity | <details><summary>[OBOtherCodeType1](#OBOtherCodeType1)</summary><ul><li>Code [string]</li> <li>Name [string]</li> <li>Description [string]</li> </ul></details> | 
| LoanInterestFeesCharges| -| array[[OBLoanInterestFeesCharges1](#OBLoanInterestFeesCharges1)]|

 <a name=OBLoanInterestTierBandSet1></a> 
## OBLoanInterestTierBandSet1 
The group of tiers or bands for which debit interest can be applied. 

### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| TierBandMethod | Entity | <details><summary>[OBTierBandType1Code](#OBTierBandType1Code)</summary><ul></ul></details> | 
| Identification| Loan interest tierbandset identification. Used by  loan providers for internal use purpose.| string|
| CalculationMethod | Entity | <details><summary>[OBInterestCalculationMethod1Code](#OBInterestCalculationMethod1Code)</summary><ul></ul></details> | 
| Notes| Optional additional notes to supplement the Tier Band Set details| array|
| OtherCalculationMethod | Entity | <details><summary>[OBOtherCodeType1](#OBOtherCodeType1)</summary><ul><li>Code [string]</li> <li>Name [string]</li> <li>Description [string]</li> </ul></details> | 
| LoanInterestTierBand| -| array[[OBLoanInterestTierBand1](#OBLoanInterestTierBand1)]|
| LoanInterestFeesCharges| -| array[[OBLoanInterestFeesCharges1](#OBLoanInterestFeesCharges1)]|

 <a name=OBLoanInterest1></a> 
## OBLoanInterest1 
Details about the interest that may be payable to the SME Loan holders 

### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| Notes| Optional additional notes to supplement the LoanInterest| array|
| LoanInterestTierBandSet| -| array[[OBLoanInterestTierBandSet1](#OBLoanInterestTierBandSet1)]|

 <a name=OBRepaymentType1Code></a> 
## OBRepaymentType1Code 
### Attributes 

| Type| Description| Example| Values|
| -----| -----| -----| -----|
| enum| Repayment type| <ul style="padding-left: 0"><li>USBA</li><li>USBU</li><li>USCI</li><li>USCS</li><li>USER</li><li>USFA</li><li>USFB</li><li>USFI</li><li>USIO</li><li>USOT</li><li>USPF</li><li>USRW</li><li>USSL</li></ul>|

 <a name=OBRepaymentFrequency1Code></a> 
## OBRepaymentFrequency1Code 
### Attributes 

| Type| Description| Example| Values|
| -----| -----| -----| -----|
| enum| Repayment frequency| <ul style="padding-left: 0"><li>SMDA</li><li>SMFL</li><li>SMFO</li><li>SMHY</li><li>SMMO</li><li>SMOT</li><li>SMQU</li><li>SMWE</li><li>SMYE</li></ul>|

 <a name=OBRepaymentAmountType1Code></a> 
## OBRepaymentAmountType1Code 
### Attributes 

| Type| Description| Example| Values|
| -----| -----| -----| -----|
| enum| The repayment is for paying just the interest only or both interest and capital or bullet amount or balance to date etc| <ul style="padding-left: 0"><li>RABD</li><li>RABL</li><li>RACI</li><li>RAFC</li><li>RAIO</li><li>RALT</li><li>USOT</li></ul>|

 <a name=OBRepaymentFeeChargeDetail1></a> 
## OBRepaymentFeeChargeDetail1 
Details about specific fees/charges that are applied for repayment 

### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| FeeType | Entity | <details><summary>[OBFeeType1Code](#OBFeeType1Code)</summary><ul></ul></details> | 
| NegotiableIndicator| Fee/charge which is usually negotiable rather than a fixed amount| boolean|
| FeeAmount| Fee Amount charged for a fee/charge (where it is charged in terms of an amount rather than a rate)| string|
| FeeRate| Rate charged for Fee/Charge (where it is charged in terms of a rate rather than an amount)| string|
| FeeRateType | Entity | <details><summary>[OBInterestRateType1Code](#OBInterestRateType1Code)</summary><ul></ul></details> | 
| ApplicationFrequency | Entity | <details><summary>[OBFeeFrequency1Code](#OBFeeFrequency1Code)</summary><ul></ul></details> | 
| CalculationFrequency | Entity | <details><summary>[OBFeeFrequency1Code](#OBFeeFrequency1Code)</summary><ul></ul></details> | 
| Notes| Optional additional notes to supplement the fee/charge details| array|
| OtherFeeType | Entity | <details><summary>[OBOtherFeeChargeDetailType](#OBOtherFeeChargeDetailType)</summary><ul><li>Code [string]</li> <li><details><summary>FeeCategory [[OBFeeCategory1Code](#OBFeeCategory1Code)]</summary><ul></ul></details></li><li>Name [string]</li> <li>Description [string]</li> </ul></details> | 
| OtherFeeRateType | Entity | <details><summary>[OBOtherCodeType1](#OBOtherCodeType1)</summary><ul><li>Code [string]</li> <li>Name [string]</li> <li>Description [string]</li> </ul></details> | 
| OtherApplicationFrequency | Entity | <details><summary>[OBOtherCodeType1](#OBOtherCodeType1)</summary><ul><li>Code [string]</li> <li>Name [string]</li> <li>Description [string]</li> </ul></details> | 
| OtherCalculationFrequency | Entity | <details><summary>[OBOtherCodeType1](#OBOtherCodeType1)</summary><ul><li>Code [string]</li> <li>Name [string]</li> <li>Description [string]</li> </ul></details> | 

 <a name=OBRepaymentFeeChargeCap1></a> 
## OBRepaymentFeeChargeCap1 
RepaymentFeeChargeCap sets daily, weekly, monthly, yearly limits on the fees that are charged 

### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| FeeType| -| array[[OBFeeType1Code](#OBFeeType1Code)]|
| MinMaxType | Entity | <details><summary>[OBMinMaxType1Code](#OBMinMaxType1Code)</summary><ul></ul></details> | 
| FeeCapOccurrence| Fee/Charges are captured dependent on the number of occurrences rather than capped at a particular amount| integer|
| FeeCapAmount| Cap amount charged for a fee/charge (where it is charged in terms of an amount rather than a rate)| string|
| CappingPeriod | Entity | <details><summary>[OBPeriod1Code](#OBPeriod1Code)</summary><ul></ul></details> | 
| Notes| Free text for adding extra details for fee charge cap| array|
| OtherFeeType| -| array[[OBOtherCodeType1](#OBOtherCodeType1)]|

 <a name=OBRepaymentFeeCharges1></a> 
## OBRepaymentFeeCharges1 
Applicable fee/charges for repayment such as prepayment, full early repayment or non repayment. 

### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| RepaymentFeeChargeDetail| -| array[[OBRepaymentFeeChargeDetail1](#OBRepaymentFeeChargeDetail1)]|
| RepaymentFeeChargeCap| -| array[[OBRepaymentFeeChargeCap1](#OBRepaymentFeeChargeCap1)]|

 <a name=OBRepaymentHoliday1></a> 
## OBRepaymentHoliday1 
Details of capital repayment holiday if any 

### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| MaxHolidayLength| The maximum length/duration of a Repayment Holiday| integer|
| MaxHolidayPeriod | Entity | <details><summary>[OBPeriod1Code](#OBPeriod1Code)</summary><ul></ul></details> | 
| Notes| Free text for adding details for repayment holiday| array|

 <a name=OBRepayment1></a> 
## OBRepayment1 
Repayment details of the Loan product 

### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| RepaymentType | Entity | <details><summary>[OBRepaymentType1Code](#OBRepaymentType1Code)</summary><ul></ul></details> | 
| RepaymentFrequency | Entity | <details><summary>[OBRepaymentFrequency1Code](#OBRepaymentFrequency1Code)</summary><ul></ul></details> | 
| AmountType | Entity | <details><summary>[OBRepaymentAmountType1Code](#OBRepaymentAmountType1Code)</summary><ul></ul></details> | 
| Notes| Optional additional notes to supplement the Repayment| array|
| OtherRepaymentType | Entity | <details><summary>[OBOtherCodeType1](#OBOtherCodeType1)</summary><ul><li>Code [string]</li> <li>Name [string]</li> <li>Description [string]</li> </ul></details> | 
| OtherRepaymentFrequency | Entity | <details><summary>[OBOtherCodeType1](#OBOtherCodeType1)</summary><ul><li>Code [string]</li> <li>Name [string]</li> <li>Description [string]</li> </ul></details> | 
| OtherAmountType | Entity | <details><summary>[OBOtherCodeType1](#OBOtherCodeType1)</summary><ul><li>Code [string]</li> <li>Name [string]</li> <li>Description [string]</li> </ul></details> | 
| RepaymentFeeCharges | Entity | <details><summary>[OBRepaymentFeeCharges1](#OBRepaymentFeeCharges1)</summary><ul><li>RepaymentFeeChargeDetail [array[[OBRepaymentFeeChargeDetail1](#OBRepaymentFeeChargeDetail1)]]</li> <li>RepaymentFeeChargeCap [array[[OBRepaymentFeeChargeCap1](#OBRepaymentFeeChargeCap1)]]</li> </ul></details> | 
| RepaymentHoliday| -| array[[OBRepaymentHoliday1](#OBRepaymentHoliday1)]|

 <a name=OBTariffType1Code></a> 
## OBTariffType1Code 
### Attributes 

| Type| Description| Example| Values|
| -----| -----| -----| -----|
| enum| TariffType which defines the fee and charges.| <ul style="padding-left: 0"><li>TTEL</li><li>TTMX</li><li>TTOT</li></ul>|

 <a name=OBFeeChargeCap1></a> 
## OBFeeChargeCap1 
Details about any caps (maximum charges) that apply to a particular or group of fee/charge 

### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| FeeType| -| array[[OBFeeType1Code](#OBFeeType1Code)]|
| MinMaxType | Entity | <details><summary>[OBMinMaxType1Code](#OBMinMaxType1Code)</summary><ul></ul></details> | 
| FeeCapOccurrence| Fee/Charges are captured dependent on the number of occurrences rather than capped at a particular amount| integer|
| FeeCapAmount| Cap amount charged for a fee/charge (where it is charged in terms of an amount rather than a rate)| string|
| CappingPeriod | Entity | <details><summary>[OBPeriod1Code](#OBPeriod1Code)</summary><ul></ul></details> | 
| Notes| Free text for adding extra details for fee charge cap| array|
| OtherFeeType| -| array[[OBOtherCodeType1](#OBOtherCodeType1)]|

 <a name=OBFeeApplicableRange1></a> 
## OBFeeApplicableRange1 
Range or amounts or rates for which the fee/charge applies 

### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| MinimumAmount| Minimum Amount on which fee/charge is applicable (where it is expressed as an amount)| string|
| MaximumAmount| Maximum Amount on which fee is applicable (where it is expressed as an amount)| string|
| MinimumRate| Minimum rate on which fee/charge is applicable(where it is expressed as an rate)| string|
| MaximumRate| Maximum rate on which fee/charge is applicable(where it is expressed as an rate)| string|

 <a name=OBFeeChargeDetail1></a> 
## OBFeeChargeDetail1 
Other fees/charges details 

### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| FeeCategory | Entity | <details><summary>[OBFeeCategory1Code](#OBFeeCategory1Code)</summary><ul></ul></details> | 
| FeeType | Entity | <details><summary>[OBFeeType1Code](#OBFeeType1Code)</summary><ul></ul></details> | 
| NegotiableIndicator| Fee/charge which is usually negotiable rather than a fixed amount| boolean|
| FeeAmount| Fee Amount charged for a fee/charge (where it is charged in terms of an amount rather than a rate)| string|
| FeeRate| Rate charged for Fee/Charge (where it is charged in terms of a rate rather than an amount)| string|
| FeeRateType | Entity | <details><summary>[OBInterestRateType1Code](#OBInterestRateType1Code)</summary><ul></ul></details> | 
| ApplicationFrequency | Entity | <details><summary>[OBFeeFrequency1Code](#OBFeeFrequency1Code)</summary><ul></ul></details> | 
| CalculationFrequency | Entity | <details><summary>[OBFeeFrequency1Code](#OBFeeFrequency1Code)</summary><ul></ul></details> | 
| Notes| Optional additional notes to supplement the fee/charge details.| array|
| FeeChargeCap| -| array[[OBFeeChargeCap1](#OBFeeChargeCap1)]|
| OtherFeeCategoryType | Entity | <details><summary>[OBOtherCodeType1](#OBOtherCodeType1)</summary><ul><li>Code [string]</li> <li>Name [string]</li> <li>Description [string]</li> </ul></details> | 
| OtherFeeType | Entity | <details><summary>[OBOtherFeeChargeDetailType](#OBOtherFeeChargeDetailType)</summary><ul><li>Code [string]</li> <li><details><summary>FeeCategory [[OBFeeCategory1Code](#OBFeeCategory1Code)]</summary><ul></ul></details></li><li>Name [string]</li> <li>Description [string]</li> </ul></details> | 
| OtherFeeRateType | Entity | <details><summary>[OBOtherCodeType1](#OBOtherCodeType1)</summary><ul><li>Code [string]</li> <li>Name [string]</li> <li>Description [string]</li> </ul></details> | 
| OtherApplicationFrequency | Entity | <details><summary>[OBOtherCodeType1](#OBOtherCodeType1)</summary><ul><li>Code [string]</li> <li>Name [string]</li> <li>Description [string]</li> </ul></details> | 
| OtherCalculationFrequency | Entity | <details><summary>[OBOtherCodeType1](#OBOtherCodeType1)</summary><ul><li>Code [string]</li> <li>Name [string]</li> <li>Description [string]</li> </ul></details> | 
| FeeApplicableRange | Entity | <details><summary>[OBFeeApplicableRange1](#OBFeeApplicableRange1)</summary><ul><li>MinimumAmount [string]</li> <li>MaximumAmount [string]</li> <li>MinimumRate [string]</li> <li>MaximumRate [string]</li> </ul></details> | 

 <a name=OBOtherFeesAndCharges1></a> 
## OBOtherFeesAndCharges1 
Contains details of fees and charges which are not associated with either Overdraft or features/benefits 

### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| TariffType | Entity | <details><summary>[OBTariffType1Code](#OBTariffType1Code)</summary><ul></ul></details> | 
| TariffName| Name of the tariff| string|
| OtherTariffType | Entity | <details><summary>[OBOtherCodeType1](#OBOtherCodeType1)</summary><ul><li>Code [string]</li> <li>Name [string]</li> <li>Description [string]</li> </ul></details> | 
| FeeChargeDetail| -| array[[OBFeeChargeDetail1](#OBFeeChargeDetail1)]|
| FeeChargeCap| -| array[[OBFeeChargeCap1](#OBFeeChargeCap1)]|

 <a name=OBOtherProductType1></a> 
## OBOtherProductType1 
Other product type details associated with the account. 

### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| Name| Long name associated with the product| string|
| Description| Description of the Product associated with the account| string|
| ProductDetails | Entity | <details><summary>[OBOtherProductDetails1](#OBOtherProductDetails1)</summary><ul><li>Segment [array[[OBOtherProductSegment1Code](#OBOtherProductSegment1Code)]]</li> <li>FeeFreeLength [integer]</li> <li><details><summary>FeeFreeLengthPeriod [[OBPeriod1Code](#OBPeriod1Code)]</summary><ul></ul></details></li><li>MonthlyMaximumCharge [string]</li> <li>Notes [array]</li> <li><details><summary>OtherSegment [[OBOtherCodeType1](#OBOtherCodeType1)]</summary><ul><li>Code [string]</li> <li>Name [string]</li> <li>Description [string]</li> </ul></details></li></ul></details> | 
| CreditInterest | Entity | <details><summary>[OBCreditInterest1](#OBCreditInterest1)</summary><ul><li>TierBandSet [array[[OBTierBandSet1](#OBTierBandSet1)]]</li> </ul></details> | 
| Overdraft | Entity | <details><summary>[OBOverdraft1](#OBOverdraft1)</summary><ul><li>Notes [array]</li> <li>OverdraftTierBandSet [array[[OBOverdraftTierbandSet1](#OBOverdraftTierbandSet1)]]</li> </ul></details> | 
| LoanInterest | Entity | <details><summary>[OBLoanInterest1](#OBLoanInterest1)</summary><ul><li>Notes [array]</li> <li>LoanInterestTierBandSet [array[[OBLoanInterestTierBandSet1](#OBLoanInterestTierBandSet1)]]</li> </ul></details> | 
| Repayment | Entity | <details><summary>[OBRepayment1](#OBRepayment1)</summary><ul><li><details><summary>RepaymentType [[OBRepaymentType1Code](#OBRepaymentType1Code)]</summary><ul></ul></details></li><li><details><summary>RepaymentFrequency [[OBRepaymentFrequency1Code](#OBRepaymentFrequency1Code)]</summary><ul></ul></details></li><li><details><summary>AmountType [[OBRepaymentAmountType1Code](#OBRepaymentAmountType1Code)]</summary><ul></ul></details></li><li>Notes [array]</li> <li><details><summary>OtherRepaymentType [[OBOtherCodeType1](#OBOtherCodeType1)]</summary><ul><li>Code [string]</li> <li>Name [string]</li> <li>Description [string]</li> </ul></details></li><li><details><summary>OtherRepaymentFrequency [[OBOtherCodeType1](#OBOtherCodeType1)]</summary><ul><li>Code [string]</li> <li>Name [string]</li> <li>Description [string]</li> </ul></details></li><li><details><summary>OtherAmountType [[OBOtherCodeType1](#OBOtherCodeType1)]</summary><ul><li>Code [string]</li> <li>Name [string]</li> <li>Description [string]</li> </ul></details></li><li><details><summary>RepaymentFeeCharges [[OBRepaymentFeeCharges1](#OBRepaymentFeeCharges1)]</summary><ul><li>RepaymentFeeChargeDetail [array[[OBRepaymentFeeChargeDetail1](#OBRepaymentFeeChargeDetail1)]]</li> <li>RepaymentFeeChargeCap [array[[OBRepaymentFeeChargeCap1](#OBRepaymentFeeChargeCap1)]]</li> </ul></details></li><li>RepaymentHoliday [array[[OBRepaymentHoliday1](#OBRepaymentHoliday1)]]</li> </ul></details> | 
| OtherFeesCharges| -| array[[OBOtherFeesAndCharges1](#OBOtherFeesAndCharges1)]|
| SupplementaryData | Entity | <details><summary>[OBSupplementaryData1](#OBSupplementaryData1)</summary><ul></ul></details> | 

 <a name=OBBCAProductSegment1Code></a> 
## OBBCAProductSegment1Code 
### Attributes 

| Type| Description| Example| Values|
| -----| -----| -----| -----|
| enum| -| <ul style="padding-left: 0"><li>ClientAccount</li><li>Standard</li><li>NonCommercialChaitiesClbSoc</li><li>NonCommercialPublicAuthGovt</li><li>Religious</li><li>SectorSpecific</li><li>Startup</li><li>Switcher</li></ul>|

 <a name=OBBCAProductDetails1></a> 
## OBBCAProductDetails1 


### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| Segment| Market segmentation is a marketing term referring to the aggregating of prospective buyers into groups, or segments, that have common needs and respond similarly to a marketing action. Market segmentation enables companies to target different categories of consumers who perceive the full value of certain products and services differently from one another.  Read more: Market Segmentation http://www.investopedia.com/terms/m/marketsegmentation.asp#ixzz4gfEEalTd  With respect to BCA products, they are segmented in relation to different markets that they wish to focus on.| array[[OBBCAProductSegment1Code](#OBBCAProductSegment1Code)]|
| FeeFreeLength| The length/duration of the fee free period| number|
| FeeFreeLengthPeriod | Entity | <details><summary>[OBPeriod1Code](#OBPeriod1Code)</summary><ul></ul></details> | 
| Notes| Optional additional notes to supplement the Core product details| array|

 <a name=OBBCAData1></a> 
## OBBCAData1 


### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| ProductDetails | Entity | <details><summary>[OBBCAProductDetails1](#OBBCAProductDetails1)</summary><ul><li>Segment [array[[OBBCAProductSegment1Code](#OBBCAProductSegment1Code)]]</li> <li>FeeFreeLength [number]</li> <li><details><summary>FeeFreeLengthPeriod [[OBPeriod1Code](#OBPeriod1Code)]</summary><ul></ul></details></li><li>Notes [array]</li> </ul></details> | 
| CreditInterest | Entity | <details><summary>[OBCreditInterest1](#OBCreditInterest1)</summary><ul><li>TierBandSet [array[[OBTierBandSet1](#OBTierBandSet1)]]</li> </ul></details> | 
| Overdraft | Entity | <details><summary>[OBOverdraft1](#OBOverdraft1)</summary><ul><li>Notes [array]</li> <li>OverdraftTierBandSet [array[[OBOverdraftTierbandSet1](#OBOverdraftTierbandSet1)]]</li> </ul></details> | 
| OtherFeesCharges| Contains details of fees and charges which are not associated with either Overdraft or features/benefits| array[[OBOtherFeesAndCharges1](#OBOtherFeesAndCharges1)]|

 <a name=OBPCAProductSegment1Code></a> 
## OBPCAProductSegment1Code 
### Attributes 

| Type| Description| Example| Values|
| -----| -----| -----| -----|
| enum| -| <ul style="padding-left: 0"><li>Basic</li><li>BenefitAndReward</li><li>CreditInterest</li><li>Cashback</li><li>General</li><li>Graduate</li><li>Other</li><li>Overdraft</li><li>Packaged</li><li>Premium</li><li>Reward</li><li>Student</li><li>YoungAdult</li><li>Youth</li></ul>|

 <a name=OBPCAProductDetails1></a> 
## OBPCAProductDetails1 


### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| Segment| Market segmentation is a marketing term referring to the aggregating of prospective buyers into groups, or segments, that have common needs and respond similarly to a marketing action. Market segmentation enables companies to target different categories of consumers who perceive the full value of certain products and services differently from one another.  Read more: Market Segmentation http://www.investopedia.com/terms/m/marketsegmentation.asp#ixzz4gfEEalTd  With respect to PCA products, they are segmented in relation to different markets that they wish to focus on.| array[[OBPCAProductSegment1Code](#OBPCAProductSegment1Code)]|
| MonthlyMaximumCharge| The maximum relevant charges that could accrue as defined fully in Part 7 of the CMA order| string|
| Notes| Optional additional notes to supplement the Core product details| array|

 <a name=OBPCAData1></a> 
## OBPCAData1 


### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| ProductDetails | Entity | <details><summary>[OBPCAProductDetails1](#OBPCAProductDetails1)</summary><ul><li>Segment [array[[OBPCAProductSegment1Code](#OBPCAProductSegment1Code)]]</li> <li>MonthlyMaximumCharge [string]</li> <li>Notes [array]</li> </ul></details> | 
| CreditInterest | Entity | <details><summary>[OBCreditInterest1](#OBCreditInterest1)</summary><ul><li>TierBandSet [array[[OBTierBandSet1](#OBTierBandSet1)]]</li> </ul></details> | 
| Overdraft | Entity | <details><summary>[OBOverdraft1](#OBOverdraft1)</summary><ul><li>Notes [array]</li> <li>OverdraftTierBandSet [array[[OBOverdraftTierbandSet1](#OBOverdraftTierbandSet1)]]</li> </ul></details> | 
| OtherFeesCharges | Entity | <details><summary>[OBOtherFeesAndCharges1](#OBOtherFeesAndCharges1)</summary><ul><li><details><summary>TariffType [[OBTariffType1Code](#OBTariffType1Code)]</summary><ul></ul></details></li><li>TariffName [string]</li> <li><details><summary>OtherTariffType [[OBOtherCodeType1](#OBOtherCodeType1)]</summary><ul><li>Code [string]</li> <li>Name [string]</li> <li>Description [string]</li> </ul></details></li><li>FeeChargeDetail [array[[OBFeeChargeDetail1](#OBFeeChargeDetail1)]]</li> <li>FeeChargeCap [array[[OBFeeChargeCap1](#OBFeeChargeCap1)]]</li> </ul></details> | 

 <a name=OBProduct2></a> 
## OBProduct2 
Product details associated with the Account 

### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| ProductName| The name of the Product used for marketing purposes from a customer perspective. I.e. what the customer would recognise.| string|
| ProductId| The unique ID that has been internally assigned by the financial institution to each of the current account banking products they market to their retail and/or small to medium enterprise (SME) customers.| string|
| AccountId| A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.| string|
| SecondaryProductId| Any secondary Identification which  supports Product Identifier to uniquely identify the current account banking products.| string|
| ProductType | Entity | <details><summary>[OBExternalProductType1Code](#OBExternalProductType1Code)</summary><ul></ul></details> | 
| MarketingStateId| Unique and unambiguous identification of a  Product Marketing State.| string|
| OtherProductType | Entity | <details><summary>[OBOtherProductType1](#OBOtherProductType1)</summary><ul><li>Name [string]</li> <li>Description [string]</li> <li><details><summary>ProductDetails [[OBOtherProductDetails1](#OBOtherProductDetails1)]</summary><ul><li>Segment [array[[OBOtherProductSegment1Code](#OBOtherProductSegment1Code)]]</li> <li>FeeFreeLength [integer]</li> <li><details><summary>FeeFreeLengthPeriod [[OBPeriod1Code](#OBPeriod1Code)]</summary><ul></ul></details></li><li>MonthlyMaximumCharge [string]</li> <li>Notes [array]</li> <li><details><summary>OtherSegment [[OBOtherCodeType1](#OBOtherCodeType1)]</summary><ul><li>Code [string]</li> <li>Name [string]</li> <li>Description [string]</li> </ul></details></li></ul></details></li><li><details><summary>CreditInterest [[OBCreditInterest1](#OBCreditInterest1)]</summary><ul><li>TierBandSet [array[[OBTierBandSet1](#OBTierBandSet1)]]</li> </ul></details></li><li><details><summary>Overdraft [[OBOverdraft1](#OBOverdraft1)]</summary><ul><li>Notes [array]</li> <li>OverdraftTierBandSet [array[[OBOverdraftTierbandSet1](#OBOverdraftTierbandSet1)]]</li> </ul></details></li><li><details><summary>LoanInterest [[OBLoanInterest1](#OBLoanInterest1)]</summary><ul><li>Notes [array]</li> <li>LoanInterestTierBandSet [array[[OBLoanInterestTierBandSet1](#OBLoanInterestTierBandSet1)]]</li> </ul></details></li><li><details><summary>Repayment [[OBRepayment1](#OBRepayment1)]</summary><ul><li><details><summary>RepaymentType [[OBRepaymentType1Code](#OBRepaymentType1Code)]</summary><ul></ul></details></li><li><details><summary>RepaymentFrequency [[OBRepaymentFrequency1Code](#OBRepaymentFrequency1Code)]</summary><ul></ul></details></li><li><details><summary>AmountType [[OBRepaymentAmountType1Code](#OBRepaymentAmountType1Code)]</summary><ul></ul></details></li><li>Notes [array]</li> <li><details><summary>OtherRepaymentType [[OBOtherCodeType1](#OBOtherCodeType1)]</summary><ul><li>Code [string]</li> <li>Name [string]</li> <li>Description [string]</li> </ul></details></li><li><details><summary>OtherRepaymentFrequency [[OBOtherCodeType1](#OBOtherCodeType1)]</summary><ul><li>Code [string]</li> <li>Name [string]</li> <li>Description [string]</li> </ul></details></li><li><details><summary>OtherAmountType [[OBOtherCodeType1](#OBOtherCodeType1)]</summary><ul><li>Code [string]</li> <li>Name [string]</li> <li>Description [string]</li> </ul></details></li><li><details><summary>RepaymentFeeCharges [[OBRepaymentFeeCharges1](#OBRepaymentFeeCharges1)]</summary><ul><li>RepaymentFeeChargeDetail [array[[OBRepaymentFeeChargeDetail1](#OBRepaymentFeeChargeDetail1)]]</li> <li>RepaymentFeeChargeCap [array[[OBRepaymentFeeChargeCap1](#OBRepaymentFeeChargeCap1)]]</li> </ul></details></li><li>RepaymentHoliday [array[[OBRepaymentHoliday1](#OBRepaymentHoliday1)]]</li> </ul></details></li><li>OtherFeesCharges [array[[OBOtherFeesAndCharges1](#OBOtherFeesAndCharges1)]]</li> <li><details><summary>SupplementaryData [[OBSupplementaryData1](#OBSupplementaryData1)]</summary><ul></ul></details></li></ul></details> | 
| BCA | Entity | <details><summary>[OBBCAData1](#OBBCAData1)</summary><ul><li><details><summary>ProductDetails [[OBBCAProductDetails1](#OBBCAProductDetails1)]</summary><ul><li>Segment [array[[OBBCAProductSegment1Code](#OBBCAProductSegment1Code)]]</li> <li>FeeFreeLength [number]</li> <li><details><summary>FeeFreeLengthPeriod [[OBPeriod1Code](#OBPeriod1Code)]</summary><ul></ul></details></li><li>Notes [array]</li> </ul></details></li><li><details><summary>CreditInterest [[OBCreditInterest1](#OBCreditInterest1)]</summary><ul><li>TierBandSet [array[[OBTierBandSet1](#OBTierBandSet1)]]</li> </ul></details></li><li><details><summary>Overdraft [[OBOverdraft1](#OBOverdraft1)]</summary><ul><li>Notes [array]</li> <li>OverdraftTierBandSet [array[[OBOverdraftTierbandSet1](#OBOverdraftTierbandSet1)]]</li> </ul></details></li><li>OtherFeesCharges [array[[OBOtherFeesAndCharges1](#OBOtherFeesAndCharges1)]]</li> </ul></details> | 
| PCA | Entity | <details><summary>[OBPCAData1](#OBPCAData1)</summary><ul><li><details><summary>ProductDetails [[OBPCAProductDetails1](#OBPCAProductDetails1)]</summary><ul><li>Segment [array[[OBPCAProductSegment1Code](#OBPCAProductSegment1Code)]]</li> <li>MonthlyMaximumCharge [string]</li> <li>Notes [array]</li> </ul></details></li><li><details><summary>CreditInterest [[OBCreditInterest1](#OBCreditInterest1)]</summary><ul><li>TierBandSet [array[[OBTierBandSet1](#OBTierBandSet1)]]</li> </ul></details></li><li><details><summary>Overdraft [[OBOverdraft1](#OBOverdraft1)]</summary><ul><li>Notes [array]</li> <li>OverdraftTierBandSet [array[[OBOverdraftTierbandSet1](#OBOverdraftTierbandSet1)]]</li> </ul></details></li><li><details><summary>OtherFeesCharges [[OBOtherFeesAndCharges1](#OBOtherFeesAndCharges1)]</summary><ul><li><details><summary>TariffType [[OBTariffType1Code](#OBTariffType1Code)]</summary><ul></ul></details></li><li>TariffName [string]</li> <li><details><summary>OtherTariffType [[OBOtherCodeType1](#OBOtherCodeType1)]</summary><ul><li>Code [string]</li> <li>Name [string]</li> <li>Description [string]</li> </ul></details></li><li>FeeChargeDetail [array[[OBFeeChargeDetail1](#OBFeeChargeDetail1)]]</li> <li>FeeChargeCap [array[[OBFeeChargeCap1](#OBFeeChargeCap1)]]</li> </ul></details></li></ul></details> | 

 <a name=OBReadDataProduct2></a> 
## OBReadDataProduct2 
Aligning with the read write specs structure. 

### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| Product| -| array[[OBProduct2](#OBProduct2)]|

 <a name=OBReadProduct2></a> 
## OBReadProduct2 
Product details of Other Product which is not avaiable in the standard list 

### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| Data | Entity | <details><summary>[OBReadDataProduct2](#OBReadDataProduct2)</summary><ul><li>Product [array[[OBProduct2](#OBProduct2)]]</li> </ul></details> | 
| Links | Entity | <details><summary>[Links](#Links)</summary><ul><li>Self [string]</li> <li>First [string]</li> <li>Prev [string]</li> <li>Next [string]</li> <li>Last [string]</li> </ul></details> | 
| Meta | Entity | <details><summary>[Meta](#Meta)</summary><ul><li>TotalPages [integer]</li> <li>FirstAvailableDateTime [string]</li> <li>LastAvailableDateTime [string]</li> </ul></details> | 

 <a name=SandboxRequest></a> 
## SandboxRequest 
Request to create a new sandbox 

### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| sandboxId| Sandbox Id| string|

 <a name=SandboxRetryCacheEntry></a> 
## SandboxRetryCacheEntry 
Keeps the number of calls without x-fapi-customer-ip-address header present 

### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| cacheKey| Cache key| string|
| count| Number of retries ( up to 4 )| integer|
| expirationTimestamp| Expiration timestamp of the entry| string|

 <a name=SandboxBankAccountInfo></a> 
## SandboxBankAccountInfo 
General account information 

### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| currency| Currency (EUR, USD ...)| string|
| iban| Account's IBAN| string|
| accountType| Account's type (Business, Personal)| string|
| accountSubType| Account's sub-type (ChargeCard, CreditCard, CurrentAccount ...)| string|
| description| Account's description| string|
| alias| Account's alias| string|
| openingDate| Account's opening date| string|
| availableBalance| Account's available balance| number|
| ledgerBalance| Account's ledger balance| number|

 <a name=SandboxParty></a> 
## SandboxParty 
Connected party information 

### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| id| Party id| string|
| name| Name| string|

 <a name=SandboxBeneficiary></a> 
## SandboxBeneficiary 
Beneficiary information 

### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| name| Beneficiary name| string|

 <a name=SandboxStandingOrder></a> 
## SandboxStandingOrder 
Standing order information 

### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| description| Standing order short description| string|
| frequency| Standing order frequency| string|
| firstPaymentDate| Standing order first collection date| string|
| nextPaymentDate| Standing order next collection date| string|
| finalPaymentDate| Standing order final collection date| string|
| lastPaymentDate| Standing order last executed payment date| string|
| status| Standing order status (Active, Inactive)| string|
| amount| Standing order amount| number|

 <a name=SandboxScheduledPayment></a> 
## SandboxScheduledPayment 
Scheduled payment information 

### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| description| Scheduled payment's short description| string|
| executionDate| Scheduled payment's execution date| string|
| amount| Amount| number|
| senderReference| Debtor / Sender reference| string|

 <a name=SandboxStatement></a> 
## SandboxStatement 
Statement information 

### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| number| Statement number| string|
| year| Statement year| integer|
| month| Statement month| integer|

 <a name=SandboxTransaction></a> 
## SandboxTransaction 
Transaction information 

### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| amount| Amount| number|
| currency| Currency (EUR, USD ...)| string|
| creditDebit| Credit / Debit indicator| string|
| valueDateTime| Valeur| string|
| bookingDateTime| Booking date time| string|
| description| Description| string|
| accountingBalance| Balance| number|

 <a name=SandboxBankAccount></a> 
## SandboxBankAccount 
Sandbox bank account 

### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| info | Entity | <details><summary>[SandboxBankAccountInfo](#SandboxBankAccountInfo)</summary><ul><li>currency [string]</li> <li>iban [string]</li> <li>accountType [string]</li> <li>accountSubType [string]</li> <li>description [string]</li> <li>alias [string]</li> <li>openingDate [string]</li> <li>availableBalance [number]</li> <li>ledgerBalance [number]</li> </ul></details> | 
| party | Entity | <details><summary>[SandboxParty](#SandboxParty)</summary><ul><li>id [string]</li> <li>name [string]</li> </ul></details> | 
| beneficiaries| List of account's beneficiaries| array[[SandboxBeneficiary](#SandboxBeneficiary)]|
| standingOrders| List of account's standing orders| array[[SandboxStandingOrder](#SandboxStandingOrder)]|
| scheduledPayments| List of account's scheduled payments| array[[SandboxScheduledPayment](#SandboxScheduledPayment)]|
| statements| List of account's statements| array[[SandboxStatement](#SandboxStatement)]|
| transactions| List of account's transactions| array[[SandboxTransaction](#SandboxTransaction)]|

 <a name=SandboxCardInfo></a> 
## SandboxCardInfo 
Sandbox card information 

### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| number| Card number| string|
| description| Description| string|
| holderName| Holder name| string|
| expiration| Expiration date (05/2022)| string|
| type| Type| string|
| subType| Sub type| string|
| availableBalance| Available balance| number|
| ledgerBalance| Ledger balance| number|

 <a name=SandboxCard></a> 
## SandboxCard 
Sandbox card 

### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| info | Entity | <details><summary>[SandboxCardInfo](#SandboxCardInfo)</summary><ul><li>number [string]</li> <li>description [string]</li> <li>holderName [string]</li> <li>expiration [string]</li> <li>type [string]</li> <li>subType [string]</li> <li>availableBalance [number]</li> <li>ledgerBalance [number]</li> </ul></details> | 
| party | Entity | <details><summary>[SandboxParty](#SandboxParty)</summary><ul><li>id [string]</li> <li>name [string]</li> </ul></details> | 
| statements| Card statements| array[[SandboxStatement](#SandboxStatement)]|
| transactions| Card transactions| array[[SandboxTransaction](#SandboxTransaction)]|

 <a name=SandboxUser></a> 
## SandboxUser 
User data 

### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| userId| Connected user id| string|
| retryCacheEntries| Retry cache entries| array[[SandboxRetryCacheEntry](#SandboxRetryCacheEntry)]|
| accounts| List of accounts| array[[SandboxBankAccount](#SandboxBankAccount)]|
| cards| List of cards| array[[SandboxCard](#SandboxCard)]|

 <a name=Sandbox></a> 
## Sandbox 
Sandbox model 

### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| sandboxId| Sandbox id| string|
| users| List of users| array[[SandboxUser](#SandboxUser)]|

 <a name=OBExternalScheduleType1Code></a> 
## OBExternalScheduleType1Code 
### Attributes 

| Type| Description| Example| Values|
| -----| -----| -----| -----|
| enum| -| <ul style="padding-left: 0"><li>Arrival</li><li>Execution</li></ul>|

 <a name=OBScheduledPayment3></a> 
## OBScheduledPayment3 


### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| AccountId| A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.| string|
| ScheduledPaymentId| A unique and immutable identifier used to identify the scheduled payment resource. This identifier has no meaning to the account owner.| string|
| ScheduledPaymentDateTime| The date on which the scheduled payment will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format. All date-time fields in responses must include the timezone.An example is below: 2017-04-05T10:43:07+00:00| string|
| ScheduledType | Entity | <details><summary>[OBExternalScheduleType1Code](#OBExternalScheduleType1Code)</summary><ul></ul></details> | 
| Reference| Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction. Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money. If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.| string|
| DebtorReference| A reference value provided by the PSU to the PISP while setting up the scheduled payment.| string|
| InstructedAmount | Entity | <details><summary>[OBActiveOrHistoricCurrencyAndAmount](#OBActiveOrHistoricCurrencyAndAmount)</summary><ul><li>Amount [string]</li> <li>Currency [string]</li> </ul></details> | 
| CreditorAgent | Entity | <details><summary>[OBBranchAndFinancialInstitutionIdentification5](#OBBranchAndFinancialInstitutionIdentification5)</summary><ul><li>SchemeName [string]</li> <li>Identification [string]</li> </ul></details> | 
| CreditorAccount | Entity | <details><summary>[OBCashAccount5](#OBCashAccount5)</summary><ul><li>SchemeName [string]</li> <li>Identification [string]</li> <li>Name [string]</li> <li>SecondaryIdentification [string]</li> </ul></details> | 

 <a name=OBReadDataScheduledPayment3></a> 
## OBReadDataScheduledPayment3 


### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| ScheduledPayment| -| array[[OBScheduledPayment3](#OBScheduledPayment3)]|

 <a name=OBReadScheduledPayment3></a> 
## OBReadScheduledPayment3 


### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| Data | Entity | <details><summary>[OBReadDataScheduledPayment3](#OBReadDataScheduledPayment3)</summary><ul><li>ScheduledPayment [array[[OBScheduledPayment3](#OBScheduledPayment3)]]</li> </ul></details> | 
| Links | Entity | <details><summary>[Links](#Links)</summary><ul><li>Self [string]</li> <li>First [string]</li> <li>Prev [string]</li> <li>Next [string]</li> <li>Last [string]</li> </ul></details> | 
| Meta | Entity | <details><summary>[Meta](#Meta)</summary><ul><li>TotalPages [integer]</li> <li>FirstAvailableDateTime [string]</li> <li>LastAvailableDateTime [string]</li> </ul></details> | 

 <a name=OBExternalStandingOrderStatus1Code></a> 
## OBExternalStandingOrderStatus1Code 
### Attributes 

| Type| Description| Example| Values|
| -----| -----| -----| -----|
| enum| -| <ul style="padding-left: 0"><li>Active</li><li>Inactive</li></ul>|

 <a name=OBStandingOrder5></a> 
## OBStandingOrder5 


### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| AccountId| A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.| string|
| StandingOrderId| A unique and immutable identifier used to identify the standing order resource. This identifier has no meaning to the account owner.| string|
| Frequency| Individual Definitions: NotKnown - Not Known EvryDay - Every day EvryWorkgDay - Every working day IntrvlDay - An interval specified in number of calendar days(02 to 31) IntrvlWkDay - An interval specified in weeks(01 to 09), and the day within the week(01 to 07) WkInMnthDay - A monthly interval, specifying the week of the month(01 to 05) and day within the week(01 to 07) IntrvlMnthDay - An interval specified in months(between 01 to 06, 12, 24), specifying the day within the month(-05 to -01, 01 to 31) QtrDay - Quarterly(either ENGLISH, SCOTTISH, or RECEIVED) ENGLISH = Paid on the 25th March, 24th June, 29th September and 25th December. SCOTTISH = Paid on the 2nd February, 15th May, 1st August and 11th November. RECEIVED = Paid on the 20th March, 19th June, 24th September and 20th December. Individual Patterns: NotKnown (ScheduleCode) EvryDay (ScheduleCode) EvryWorkgDay (ScheduleCode) IntrvlDay:NoOfDay (ScheduleCode + NoOfDay) IntrvlWkDay:IntervalInWeeks:DayInWeek(ScheduleCode + IntervalInWeeks + DayInWeek) WkInMnthDay:WeekInMonth:DayInWeek(ScheduleCode + WeekInMonth + DayInWeek) IntrvlMnthDay:IntervalInMonths:DayInMonth(ScheduleCode + IntervalInMonths + DayInMonth) QtrDay: + either(ENGLISH, SCOTTISH or RECEIVED) ScheduleCode + QuarterDay The regular expression for this element combines five smaller versions for each permitted pattern.To aid legibility - the components are presented individually here: NotKnown EvryDay EvryWorkgDay IntrvlDay:((0[2-9])|([1 - 2][0 - 9])|3[0-1]) IntrvlWkDay:0[1-9]:0[1-7] WkInMnthDay:0[1-5]:0[1-7] IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12] [0-9]|3[01]) QtrDay:(ENGLISH|SCOTTISH|RECEIVED) Full Regular Expression: ^(NotKnown)$|^(EvryDay)$|^(EvryWorkgDay)$|^(IntrvlDay:((0[2-9])|([1 - 2][0 - 9])|3[0-1]))$|^(IntrvlWkDay:0[1-9]:0[1-7])$|^(WkInMnthDay:0[1-5]:0[1-7])$|^(IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12] [0-9]|3[01]))$|^(QtrDay:(ENGLISH|SCOTTISH|RECEIVED))$| string|
| Reference| Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction. Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money. If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.| string|
| FirstPaymentDateTime| The date on which the first payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format. All date-time fields in responses must include the timezone.An example is below: 2017-04-05T10:43:07+00:00| string|
| NextPaymentDateTime| The date on which the next payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format. All date-time fields in responses must include the timezone.An example is below: 2017-04-05T10:43:07+00:00| string|
| LastPaymentDateTime| The date on which the last (most recent) payment for a Standing Order schedule was made.All dates in the JSON payloads are represented in ISO 8601 date-time format. All date-time fields in responses must include the timezone.An example is below: 2017-04-05T10:43:07+00:00| string|
| FinalPaymentDateTime| The date on which the final payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format. All date-time fields in responses must include the timezone.An example is below: 2017-04-05T10:43:07+00:00| string|
| NumberOfPayments| Number of the payments that will be made in completing this frequency sequence including any executed since the sequence start date.| string|
| StandingOrderStatusCode | Entity | <details><summary>[OBExternalStandingOrderStatus1Code](#OBExternalStandingOrderStatus1Code)</summary><ul></ul></details> | 
| FirstPaymentAmount | Entity | <details><summary>[OBActiveOrHistoricCurrencyAndAmount](#OBActiveOrHistoricCurrencyAndAmount)</summary><ul><li>Amount [string]</li> <li>Currency [string]</li> </ul></details> | 
| NextPaymentAmount | Entity | <details><summary>[OBActiveOrHistoricCurrencyAndAmount](#OBActiveOrHistoricCurrencyAndAmount)</summary><ul><li>Amount [string]</li> <li>Currency [string]</li> </ul></details> | 
| LastPaymentAmount | Entity | <details><summary>[OBActiveOrHistoricCurrencyAndAmount](#OBActiveOrHistoricCurrencyAndAmount)</summary><ul><li>Amount [string]</li> <li>Currency [string]</li> </ul></details> | 
| FinalPaymentAmount | Entity | <details><summary>[OBActiveOrHistoricCurrencyAndAmount](#OBActiveOrHistoricCurrencyAndAmount)</summary><ul><li>Amount [string]</li> <li>Currency [string]</li> </ul></details> | 
| CreditorAgent | Entity | <details><summary>[OBBranchAndFinancialInstitutionIdentification5](#OBBranchAndFinancialInstitutionIdentification5)</summary><ul><li>SchemeName [string]</li> <li>Identification [string]</li> </ul></details> | 
| CreditorAccount | Entity | <details><summary>[OBCashAccount5](#OBCashAccount5)</summary><ul><li>SchemeName [string]</li> <li>Identification [string]</li> <li>Name [string]</li> <li>SecondaryIdentification [string]</li> </ul></details> | 
| SupplementaryData | Entity | <details><summary>[OBSupplementaryData1](#OBSupplementaryData1)</summary><ul></ul></details> | 

 <a name=OBReadDataStandingOrder5></a> 
## OBReadDataStandingOrder5 


### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| StandingOrder| -| array[[OBStandingOrder5](#OBStandingOrder5)]|

 <a name=OBReadStandingOrder6></a> 
## OBReadStandingOrder6 


### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| Data | Entity | <details><summary>[OBReadDataStandingOrder5](#OBReadDataStandingOrder5)</summary><ul><li>StandingOrder [array[[OBStandingOrder5](#OBStandingOrder5)]]</li> </ul></details> | 
| Links | Entity | <details><summary>[Links](#Links)</summary><ul><li>Self [string]</li> <li>First [string]</li> <li>Prev [string]</li> <li>Next [string]</li> <li>Last [string]</li> </ul></details> | 
| Meta | Entity | <details><summary>[Meta](#Meta)</summary><ul><li>TotalPages [integer]</li> <li>FirstAvailableDateTime [string]</li> <li>LastAvailableDateTime [string]</li> </ul></details> | 

 <a name=OBExternalStatementType1Code></a> 
## OBExternalStatementType1Code 
### Attributes 

| Type| Description| Example| Values|
| -----| -----| -----| -----|
| enum| -| <ul style="padding-left: 0"><li>AccountClosure</li><li>AccountOpening</li><li>Annual</li><li>Interim</li><li>RegularPeriodic</li></ul>|

 <a name=OBStatementBenefit1></a> 
## OBStatementBenefit1 
Set of elements used to provide details of a benefit or reward amount for the statement resource. 

### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| Type| Benefit type, in a coded form.| string|
| Amount | Entity | <details><summary>[OBActiveOrHistoricCurrencyAndAmount](#OBActiveOrHistoricCurrencyAndAmount)</summary><ul><li>Amount [string]</li> <li>Currency [string]</li> </ul></details> | 

 <a name=OBStatementFee2></a> 
## OBStatementFee2 
Set of elements used to provide details of a fee for the statement resource. 

### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| Description| Description that may be available for the statement fee.| string|
| CreditDebitIndicator | Entity | <details><summary>[OBCreditDebitCode](#OBCreditDebitCode)</summary><ul></ul></details> | 
| Type| Fee type, in a coded form.| string|
| Rate| Rate charged for Statement Fee (where it is charged in terms of a rate rather than an amount)| number|
| RateType| Description that may be available for the statement fee rate type.| string|
| Frequency| How frequently the fee is applied to the Account.| string|
| Amount | Entity | <details><summary>[OBActiveOrHistoricCurrencyAndAmount](#OBActiveOrHistoricCurrencyAndAmount)</summary><ul><li>Amount [string]</li> <li>Currency [string]</li> </ul></details> | 

 <a name=OBStatementInterest2></a> 
## OBStatementInterest2 
Set of elements used to provide details of a generic interest amount related to the statement resource. 

### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| Description| Description that may be available for the statement interest.| string|
| CreditDebitIndicator | Entity | <details><summary>[OBCreditDebitCode](#OBCreditDebitCode)</summary><ul></ul></details> | 
| Type| Interest amount type, in a coded form.| string|
| Rate| Field representing a percentage (e.g. 0.05 represents 5% and 0.9525 represents 95.25%). Note the number of decimal places may vary.| number|
| RateType| Description that may be available for the statement Interest rate type.| string|
| Frequency| Specifies the statement fee type requested| string|
| Amount | Entity | <details><summary>[OBActiveOrHistoricCurrencyAndAmount](#OBActiveOrHistoricCurrencyAndAmount)</summary><ul><li>Amount [string]</li> <li>Currency [string]</li> </ul></details> | 

 <a name=OBStatementAmount1></a> 
## OBStatementAmount1 
Set of elements used to provide details of a generic amount for the statement resource. 

### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| CreditDebitIndicator | Entity | <details><summary>[OBCreditDebitCode](#OBCreditDebitCode)</summary><ul></ul></details> | 
| Type| Amount type, in a coded form.| string|
| Amount | Entity | <details><summary>[OBActiveOrHistoricCurrencyAndAmount](#OBActiveOrHistoricCurrencyAndAmount)</summary><ul><li>Amount [string]</li> <li>Currency [string]</li> </ul></details> | 

 <a name=OBStatementDateTime1></a> 
## OBStatementDateTime1 
Set of elements used to provide details of a generic date time for the statement resource. 

### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| DateTime| Date and time associated with the date time type.All dates in the JSON payloads are represented in ISO 8601 date-time format. All date-time fields in responses must include the timezone.An example is below: 2017-04-05T10:43:07+00:00| string|
| Type| Date time type, in a coded form.| string|

 <a name=OBStatementRate1></a> 
## OBStatementRate1 
Set of elements used to provide details of a generic rate related to the statement resource. 

### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| Rate| Rate associated with the statement rate type.| string|
| Type| Statement rate type, in a coded form.| string|

 <a name=OBStatementValue1></a> 
## OBStatementValue1 
Set of elements used to provide details of a generic number value related to the statement resource. 

### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| Value| Value associated with the statement value type.| string|
| Type| Statement value type, in a coded form.| string|

 <a name=OBStatement2></a> 
## OBStatement2 
Provides further details on a statement resource. 

### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| AccountId| A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.| string|
| StatementId| Unique identifier for the statement resource within an servicing institution. This identifier is both unique and immutable.| string|
| StatementReference| Unique reference for the statement. This reference may be optionally populated if available.| string|
| Type | Entity | <details><summary>[OBExternalStatementType1Code](#OBExternalStatementType1Code)</summary><ul></ul></details> | 
| StartDateTime| Date and time at which the statement period starts.All dates in the JSON payloads are represented in ISO 8601 date-time format. All date-time fields in responses must include the timezone.An example is below: 2017-04-05T10:43:07+00:00| string|
| EndDateTime| Date and time at which the statement period starts.All dates in the JSON payloads are represented in ISO 8601 date-time format. All date-time fields in responses must include the timezone.An example is below: 2017-04-05T10:43:07+00:00| string|
| CreationDateTime| Date and time at which the statement period starts.All dates in the JSON payloads are represented in ISO 8601 date-time format. All date-time fields in responses must include the timezone.An example is below: 2017-04-05T10:43:07+00:00| string|
| StatementDescription| Other descriptions that may be available for the statement resource.| array|
| StatementBenefit| Set of elements used to provide details of a benefit or reward amount for the statement resource.| array[[OBStatementBenefit1](#OBStatementBenefit1)]|
| StatementFee| Set of elements used to provide details of a fee for the statement resource.| array[[OBStatementFee2](#OBStatementFee2)]|
| StatementInterest| Set of elements used to provide details of a generic interest amount related to the statement resource.| array[[OBStatementInterest2](#OBStatementInterest2)]|
| StatementAmount| Set of elements used to provide details of a generic amount for the statement resource.| array[[OBStatementAmount1](#OBStatementAmount1)]|
| StatementDateTime| Set of elements used to provide details of a generic date time for the statement resource.| array[[OBStatementDateTime1](#OBStatementDateTime1)]|
| StatementRate| Set of elements used to provide details of a generic rate related to the statement resource.| array[[OBStatementRate1](#OBStatementRate1)]|
| StatementValue| Set of elements used to provide details of a generic number value related to the statement resource.| array[[OBStatementValue1](#OBStatementValue1)]|

 <a name=OBReadDataStatement2></a> 
## OBReadDataStatement2 


### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| Statement| Provides further details on a statement resource.| array[[OBStatement2](#OBStatement2)]|

 <a name=OBReadStatement2></a> 
## OBReadStatement2 


### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| Data | Entity | <details><summary>[OBReadDataStatement2](#OBReadDataStatement2)</summary><ul><li>Statement [array[[OBStatement2](#OBStatement2)]]</li> </ul></details> | 
| Links | Entity | <details><summary>[Links](#Links)</summary><ul><li>Self [string]</li> <li>First [string]</li> <li>Prev [string]</li> <li>Next [string]</li> <li>Last [string]</li> </ul></details> | 
| Meta | Entity | <details><summary>[Meta](#Meta)</summary><ul><li>TotalPages [integer]</li> <li>FirstAvailableDateTime [string]</li> <li>LastAvailableDateTime [string]</li> </ul></details> | 

 <a name=OBEntryStatus1Code></a> 
## OBEntryStatus1Code 
### Attributes 

| Type| Description| Example| Values|
| -----| -----| -----| -----|
| enum| -| <ul style="padding-left: 0"><li>Booked</li><li>Pending</li></ul>|

 <a name=OBTransactionMutability1Code></a> 
## OBTransactionMutability1Code 
### Attributes 

| Type| Description| Example| Values|
| -----| -----| -----| -----|
| enum| -| <ul style="padding-left: 0"><li>Mutable</li><li>Immutable</li></ul>|

 <a name=OBCurrencyExchange5></a> 
## OBCurrencyExchange5 
Set of elements used to provide details on the currency exchange. 

### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| SourceCurrency| Currency from which an amount is to be converted in a currency conversion.| string|
| TargetCurrency| Currency into which an amount is to be converted in a currency conversion.| string|
| UnitCurrency| Currency in which the rate of exchange is expressed in a currency exchange. In the example 1GBP = xxxCUR, the unit currency is GBP.| string|
| ExchangeRate| Factor used to convert an amount from one currency into another. This reflects the price at which one currency was bought with another currency. Usage: ExchangeRate expresses the ratio between UnitCurrency and QuotedCurrency (ExchangeRate = UnitCurrency/QuotedCurrency).| number|
| ContractIdentification| Unique identification to unambiguously identify the foreign exchange contract.| string|
| QuotationDate| Date and time at which an exchange rate is quoted.All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00| string|
| InstructedAmount | Entity | <details><summary>[OBActiveOrHistoricCurrencyAndAmount](#OBActiveOrHistoricCurrencyAndAmount)</summary><ul><li>Amount [string]</li> <li>Currency [string]</li> </ul></details> | 

 <a name=OBBankTransactionCodeStructure1></a> 
## OBBankTransactionCodeStructure1 
Set of elements used to fully identify the type of underlying transaction resulting in an entry. 

### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| Code| Specifies the family within a domain.| string|
| SubCode| Specifies the sub-product family within a specific family.| string|

 <a name=ProprietaryBankTransactionCodeStructure1></a> 
## ProprietaryBankTransactionCodeStructure1 
Set of elements to fully identify a proprietary bank transaction code. 

### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| Code| Proprietary bank transaction code to identify the underlying transaction.| string|
| Issuer| Identification of the issuer of the proprietary bank transaction code.| string|

 <a name=OBTransactionCashBalance></a> 
## OBTransactionCashBalance 
Set of elements used to define the balance as a numerical representation of the net increases and decreases in an account after a transaction entry is applied to the account. 

### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| CreditDebitIndicator | Entity | <details><summary>[OBCreditDebitCode](#OBCreditDebitCode)</summary><ul></ul></details> | 
| Type | Entity | <details><summary>[OBBalanceType1Code](#OBBalanceType1Code)</summary><ul></ul></details> | 
| Amount | Entity | <details><summary>[OBActiveOrHistoricCurrencyAndAmount](#OBActiveOrHistoricCurrencyAndAmount)</summary><ul><li>Amount [string]</li> <li>Currency [string]</li> </ul></details> | 

 <a name=OBMerchantDetails1></a> 
## OBMerchantDetails1 
Details of the merchant involved in the transaction. 

### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| MerchantName| Name by which the merchant is known.| string|
| MerchantCategoryCode| Category code conform to ISO 18245, related to the type of services or goods the merchant provides for the transaction.| string|

 <a name=OBCashAccount6></a> 
## OBCashAccount6 
Unambiguous identification of the account of the creditor, in the case of a debit transaction. 

### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| SchemeName| Name of the identification scheme, in a coded form as published in an external list.| string|
| Identification| Identification assigned by an institution to identify an account. This identification is known by the account owner.| string|
| Name| The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels. Note, the account name is not the product name or the nickname of the account.| string|
| SecondaryIdentification| This is secondary identification of the account, as assigned by the account servicing institution. This can be used by building societies to additionally identify accounts with a roll number(in addition to a sort code and account number combination).| string|

 <a name=OBExternalCardSchemeType1Code></a> 
## OBExternalCardSchemeType1Code 
### Attributes 

| Type| Description| Example| Values|
| -----| -----| -----| -----|
| enum| Name of the card scheme.| <ul style="padding-left: 0"><li>AmericanExpress</li><li>Diners</li><li>Discover</li><li>MasterCard</li><li>VISA</li></ul>|

 <a name=OBExternalCardAuthorisationType1Code></a> 
## OBExternalCardAuthorisationType1Code 
### Attributes 

| Type| Description| Example| Values|
| -----| -----| -----| -----|
| enum| The card authorisation type.| <ul style="padding-left: 0"><li>ConsumerDevice</li><li>Contactless</li><li>None</li><li>PIN</li></ul>|

 <a name=OBTransactionCardInstrument1></a> 
## OBTransactionCardInstrument1 
Set of elements to describe the card instrument used in the transaction. 

### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| CardSchemeName | Entity | <details><summary>[OBExternalCardSchemeType1Code](#OBExternalCardSchemeType1Code)</summary><ul></ul></details> | 
| AuthorisationType | Entity | <details><summary>[OBExternalCardAuthorisationType1Code](#OBExternalCardAuthorisationType1Code)</summary><ul></ul></details> | 
| Name| Name of the cardholder using the card instrument.| string|
| Identification| Identification assigned by an institution to identify the card instrument used in the transaction. This identification is known by the account owner, and may be masked.| string|

 <a name=OBTransaction6></a> 
## OBTransaction6 
Provides further details on an entry in the report. 

### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| AccountId| A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.| string|
| TransactionId| Unique identifier for the transaction within an servicing institution. This identifier is both unique and immutable.| string|
| TransactionReference| Unique reference for the transaction. This reference is optionally populated, and may as an example be the FPID in the Faster Payments context.| string|
| StatementReference| Unique reference for the statement. This reference may be optionally populated if available.| array|
| CreditDebitIndicator | Entity | <details><summary>[OBCreditDebitCode](#OBCreditDebitCode)</summary><ul></ul></details> | 
| Status | Entity | <details><summary>[OBEntryStatus1Code](#OBEntryStatus1Code)</summary><ul></ul></details> | 
| TransactionMutability | Entity | <details><summary>[OBTransactionMutability1Code](#OBTransactionMutability1Code)</summary><ul></ul></details> | 
| BookingDateTime| Date and time when a transaction entry is posted to an account on the account servicer's books. Usage: Booking date is the expected booking date, unless the status is booked, in which case it is the actual booking date.All dates in the JSON payloads are represented in ISO 8601 date-time format. All date-time fields in responses must include the timezone.An example is below: 2017-04-05T10:43:07+00:00| string|
| ValueDateTime| Date and time at which assets become available to the account owner in case of a credit entry, or cease to be available to the account owner in case of a debit transaction entry. Usage: If transaction entry status is pending and value date is present, then the value date refers to an expected/requested value date. For transaction entries subject to availability/float and for which availability information is provided, the value date must not be used.In this case the availability component identifies the number of availability days.All dates in the JSON payloads are represented in ISO 8601 date-time format. All date-time fields in responses must include the timezone.An example is below: 2017-04-05T10:43:07+00:00| string|
| TransactionInformation| Further details of the transaction. This is the transaction narrative, which is unstructured text.| string|
| AddressLine| Information that locates and identifies a specific address for a transaction entry, that is presented in free format text| string|
| Amount | Entity | <details><summary>[OBActiveOrHistoricCurrencyAndAmount](#OBActiveOrHistoricCurrencyAndAmount)</summary><ul><li>Amount [string]</li> <li>Currency [string]</li> </ul></details> | 
| ChargeAmount | Entity | <details><summary>[OBActiveOrHistoricCurrencyAndAmount](#OBActiveOrHistoricCurrencyAndAmount)</summary><ul><li>Amount [string]</li> <li>Currency [string]</li> </ul></details> | 
| CurrencyExchange | Entity | <details><summary>[OBCurrencyExchange5](#OBCurrencyExchange5)</summary><ul><li>SourceCurrency [string]</li> <li>TargetCurrency [string]</li> <li>UnitCurrency [string]</li> <li>ExchangeRate [number]</li> <li>ContractIdentification [string]</li> <li>QuotationDate [string]</li> <li><details><summary>InstructedAmount [[OBActiveOrHistoricCurrencyAndAmount](#OBActiveOrHistoricCurrencyAndAmount)]</summary><ul><li>Amount [string]</li> <li>Currency [string]</li> </ul></details></li></ul></details> | 
| BankTransactionCode | Entity | <details><summary>[OBBankTransactionCodeStructure1](#OBBankTransactionCodeStructure1)</summary><ul><li>Code [string]</li> <li>SubCode [string]</li> </ul></details> | 
| ProprietaryBankTransactionCode | Entity | <details><summary>[ProprietaryBankTransactionCodeStructure1](#ProprietaryBankTransactionCodeStructure1)</summary><ul><li>Code [string]</li> <li>Issuer [string]</li> </ul></details> | 
| Balance | Entity | <details><summary>[OBTransactionCashBalance](#OBTransactionCashBalance)</summary><ul><li><details><summary>CreditDebitIndicator [[OBCreditDebitCode](#OBCreditDebitCode)]</summary><ul></ul></details></li><li><details><summary>Type [[OBBalanceType1Code](#OBBalanceType1Code)]</summary><ul></ul></details></li><li><details><summary>Amount [[OBActiveOrHistoricCurrencyAndAmount](#OBActiveOrHistoricCurrencyAndAmount)]</summary><ul><li>Amount [string]</li> <li>Currency [string]</li> </ul></details></li></ul></details> | 
| MerchantDetails | Entity | <details><summary>[OBMerchantDetails1](#OBMerchantDetails1)</summary><ul><li>MerchantName [string]</li> <li>MerchantCategoryCode [string]</li> </ul></details> | 
| CreditorAgent | Entity | <details><summary>[OBBranchAndFinancialInstitutionIdentification6](#OBBranchAndFinancialInstitutionIdentification6)</summary><ul><li>SchemeName [string]</li> <li>Identification [string]</li> <li>Name [string]</li> <li><details><summary>PostalAddress [[OBPostalAddress6](#OBPostalAddress6)]</summary><ul><li><details><summary>AddressType [[OBAddressTypeCode](#OBAddressTypeCode)]</summary><ul></ul></details></li><li>Department [string]</li> <li>SubDepartment [string]</li> <li>StreetName [string]</li> <li>BuildingNumber [string]</li> <li>PostCode [string]</li> <li>TownName [string]</li> <li>CountrySubDivision [string]</li> <li>Country [string]</li> <li>AddressLine [array]</li> </ul></details></li></ul></details> | 
| CreditorAccount | Entity | <details><summary>[OBCashAccount6](#OBCashAccount6)</summary><ul><li>SchemeName [string]</li> <li>Identification [string]</li> <li>Name [string]</li> <li>SecondaryIdentification [string]</li> </ul></details> | 
| DebtorAgent | Entity | <details><summary>[OBBranchAndFinancialInstitutionIdentification6](#OBBranchAndFinancialInstitutionIdentification6)</summary><ul><li>SchemeName [string]</li> <li>Identification [string]</li> <li>Name [string]</li> <li><details><summary>PostalAddress [[OBPostalAddress6](#OBPostalAddress6)]</summary><ul><li><details><summary>AddressType [[OBAddressTypeCode](#OBAddressTypeCode)]</summary><ul></ul></details></li><li>Department [string]</li> <li>SubDepartment [string]</li> <li>StreetName [string]</li> <li>BuildingNumber [string]</li> <li>PostCode [string]</li> <li>TownName [string]</li> <li>CountrySubDivision [string]</li> <li>Country [string]</li> <li>AddressLine [array]</li> </ul></details></li></ul></details> | 
| DebtorAccount | Entity | <details><summary>[OBCashAccount6](#OBCashAccount6)</summary><ul><li>SchemeName [string]</li> <li>Identification [string]</li> <li>Name [string]</li> <li>SecondaryIdentification [string]</li> </ul></details> | 
| CardInstrument | Entity | <details><summary>[OBTransactionCardInstrument1](#OBTransactionCardInstrument1)</summary><ul><li><details><summary>CardSchemeName [[OBExternalCardSchemeType1Code](#OBExternalCardSchemeType1Code)]</summary><ul></ul></details></li><li><details><summary>AuthorisationType [[OBExternalCardAuthorisationType1Code](#OBExternalCardAuthorisationType1Code)]</summary><ul></ul></details></li><li>Name [string]</li> <li>Identification [string]</li> </ul></details> | 
| SupplementaryData | Entity | <details><summary>[OBSupplementaryData1](#OBSupplementaryData1)</summary><ul></ul></details> | 

 <a name=OBReadDataTransaction6></a> 
## OBReadDataTransaction6 


### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| Transaction| Provides further details on an entry in the report.| array[[OBTransaction6](#OBTransaction6)]|

 <a name=OBReadTransaction6></a> 
## OBReadTransaction6 


### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| Data | Entity | <details><summary>[OBReadDataTransaction6](#OBReadDataTransaction6)</summary><ul><li>Transaction [array[[OBTransaction6](#OBTransaction6)]]</li> </ul></details> | 
| Links | Entity | <details><summary>[Links](#Links)</summary><ul><li>Self [string]</li> <li>First [string]</li> <li>Prev [string]</li> <li>Next [string]</li> <li>Last [string]</li> </ul></details> | 
| Meta | Entity | <details><summary>[Meta](#Meta)</summary><ul><li>TotalPages [integer]</li> <li>FirstAvailableDateTime [string]</li> <li>LastAvailableDateTime [string]</li> </ul></details> | 


## Actions

### account_access_consents.post
Create Account Access Consents


```js
nbg_gr.account_access_consents.post({
  "Authorization": "",
  "sandbox-id": ""
}, context)
```

#### Input
* input `object`
  * x-fapi-auth-date `string`: The time when the PSU last logged in with the TPP.
  * x-fapi-customer-ip-address `string`: The PSU's IP address if the PSU is currently logged in with the TPP.
  * x-fapi-interaction-id `string`: An RFC4122 UID used as a correlation id.
  * Authorization **required** `string`: An Authorisation Token as per https://tools.ietf.org/html/rfc6750
  * x-customer-user-agent `string`: Indicates the user-agent that the PSU is using.
  * sandbox-id **required** `string`: The unique id of the sandbox to be used
  * body [OBReadConsent1](#obreadconsent1)

#### Output
* output [OBReadConsentResponse1](#obreadconsentresponse1)

### account_access_consents.consentId.delete
Delete Account Access Consents by Consent ID


```js
nbg_gr.account_access_consents.consentId.delete({
  "consentId": "",
  "Authorization": "",
  "sandbox-id": ""
}, context)
```

#### Input
* input `object`
  * consentId **required** `string`: ConsentId
  * x-fapi-auth-date `string`: The time when the PSU last logged in with the TPP.
  * x-fapi-customer-ip-address `string`: The PSU's IP address if the PSU is currently logged in with the TPP.
  * x-fapi-interaction-id `string`: An RFC4122 UID used as a correlation id.
  * Authorization **required** `string`: An Authorisation Token as per https://tools.ietf.org/html/rfc6750
  * x-customer-user-agent `string`: Indicates the user-agent that the PSU is using.
  * sandbox-id **required** `string`: The unique id of the sandbox to be used

#### Output
*Output schema unknown*

### account_access_consents.consentId.get
Get Account Access Consents by Consent ID


```js
nbg_gr.account_access_consents.consentId.get({
  "consentId": "",
  "Authorization": "",
  "sandbox-id": ""
}, context)
```

#### Input
* input `object`
  * consentId **required** `string`: ConsentId
  * x-fapi-auth-date `string`: The time when the PSU last logged in with the TPP.
  * x-fapi-customer-ip-address `string`: The PSU's IP address if the PSU is currently logged in with the TPP.
  * x-fapi-interaction-id `string`: An RFC4122 UID used as a correlation id.
  * Authorization **required** `string`: An Authorisation Token as per https://tools.ietf.org/html/rfc6750
  * x-customer-user-agent `string`: Indicates the user-agent that the PSU is using.
  * sandbox-id **required** `string`: The unique id of the sandbox to be used

#### Output
* output [OBReadConsentResponse1](#obreadconsentresponse1)

### accounts.get
Get Accounts


```js
nbg_gr.accounts.get({
  "Authorization": "",
  "sandbox-id": ""
}, context)
```

#### Input
* input `object`
  * x-fapi-auth-date `string`: The time when the PSU last logged in with the TPP.
  * x-fapi-customer-ip-address `string`: The PSU's IP address if the PSU is currently logged in with the TPP.
  * x-fapi-interaction-id `string`: An RFC4122 UID used as a correlation id.
  * Authorization **required** `string`: An Authorisation Token as per https://tools.ietf.org/html/rfc6750
  * x-customer-user-agent `string`: Indicates the user-agent that the PSU is using.
  * sandbox-id **required** `string`: The unique id of the sandbox to be used

#### Output
* output [OBReadAccount5](#obreadaccount5)

### accounts.accountId.get
Get Accounts by Account ID


```js
nbg_gr.accounts.accountId.get({
  "accountId": "",
  "Authorization": "",
  "sandbox-id": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: AccountId
  * x-fapi-auth-date `string`: The time when the PSU last logged in with the TPP.
  * x-fapi-customer-ip-address `string`: The PSU's IP address if the PSU is currently logged in with the TPP.
  * x-fapi-interaction-id `string`: An RFC4122 UID used as a correlation id.
  * Authorization **required** `string`: An Authorisation Token as per https://tools.ietf.org/html/rfc6750
  * x-customer-user-agent `string`: Indicates the user-agent that the PSU is using.
  * sandbox-id **required** `string`: The unique id of the sandbox to be used

#### Output
* output [OBReadAccount5](#obreadaccount5)

### accounts.accountId.balances.get
Get Balances by Account ID


```js
nbg_gr.accounts.accountId.balances.get({
  "accountId": "",
  "Authorization": "",
  "sandbox-id": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: AccountId
  * x-fapi-auth-date `string`: The time when the PSU last logged in with the TPP.
  * x-fapi-customer-ip-address `string`: The PSU's IP address if the PSU is currently logged in with the TPP.
  * x-fapi-interaction-id `string`: An RFC4122 UID used as a correlation id.
  * Authorization **required** `string`: An Authorisation Token as per https://tools.ietf.org/html/rfc6750
  * x-customer-user-agent `string`: Indicates the user-agent that the PSU is using.
  * sandbox-id **required** `string`: The unique id of the sandbox to be used

#### Output
* output [OBReadBalance1](#obreadbalance1)

### accounts.accountId.beneficiaries.get
Get Beneficiaries by Account ID


```js
nbg_gr.accounts.accountId.beneficiaries.get({
  "accountId": "",
  "Authorization": "",
  "sandbox-id": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: AccountId
  * x-fapi-auth-date `string`: The time when the PSU last logged in with the TPP.
  * x-fapi-customer-ip-address `string`: The PSU's IP address if the PSU is currently logged in with the TPP.
  * x-fapi-interaction-id `string`: An RFC4122 UID used as a correlation id.
  * Authorization **required** `string`: An Authorisation Token as per https://tools.ietf.org/html/rfc6750
  * x-customer-user-agent `string`: Indicates the user-agent that the PSU is using.
  * sandbox-id **required** `string`: The unique id of the sandbox to be used

#### Output
* output [OBReadBeneficiary5](#obreadbeneficiary5)

### accounts.accountId.direct_debits.get
Get Direct Debits by Account ID


```js
nbg_gr.accounts.accountId.direct_debits.get({
  "accountId": "",
  "Authorization": "",
  "sandbox-id": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: AccountId
  * x-fapi-auth-date `string`: The time when the PSU last logged in with the TPP.
  * x-fapi-customer-ip-address `string`: The PSU's IP address if the PSU is currently logged in with the TPP.
  * x-fapi-interaction-id `string`: An RFC4122 UID used as a correlation id.
  * Authorization **required** `string`: An Authorisation Token as per https://tools.ietf.org/html/rfc6750
  * x-customer-user-agent `string`: Indicates the user-agent that the PSU is using.
  * sandbox-id **required** `string`: The unique id of the sandbox to be used

#### Output
* output [OBReadDirectDebit2](#obreaddirectdebit2)

### accounts.accountId.offers.get
Get Offers by Account ID


```js
nbg_gr.accounts.accountId.offers.get({
  "accountId": "",
  "Authorization": "",
  "sandbox-id": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: AccountId
  * x-fapi-auth-date `string`: The time when the PSU last logged in with the TPP.
  * x-fapi-customer-ip-address `string`: The PSU's IP address if the PSU is currently logged in with the TPP.
  * x-fapi-interaction-id `string`: An RFC4122 UID used as a correlation id.
  * Authorization **required** `string`: An Authorisation Token as per https://tools.ietf.org/html/rfc6750
  * x-customer-user-agent `string`: Indicates the user-agent that the PSU is using.
  * sandbox-id **required** `string`: The unique id of the sandbox to be used

#### Output
* output [OBReadOffer1](#obreadoffer1)

### accounts.accountId.parties.get
Get Parties by Account ID


```js
nbg_gr.accounts.accountId.parties.get({
  "accountId": "",
  "Authorization": "",
  "sandbox-id": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: AccountId
  * x-fapi-auth-date `string`: The time when the PSU last logged in with the TPP.
  * x-fapi-customer-ip-address `string`: The PSU's IP address if the PSU is currently logged in with the TPP.
  * x-fapi-interaction-id `string`: An RFC4122 UID used as a correlation id.
  * Authorization **required** `string`: An Authorisation Token as per https://tools.ietf.org/html/rfc6750
  * x-customer-user-agent `string`: Indicates the user-agent that the PSU is using.
  * sandbox-id **required** `string`: The unique id of the sandbox to be used

#### Output
* output [OBReadParty3](#obreadparty3)

### accounts.accountId.party.get
Get Party by Account ID


```js
nbg_gr.accounts.accountId.party.get({
  "accountId": "",
  "Authorization": "",
  "sandbox-id": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: AccountId
  * x-fapi-auth-date `string`: The time when the PSU last logged in with the TPP.
  * x-fapi-customer-ip-address `string`: The PSU's IP address if the PSU is currently logged in with the TPP.
  * x-fapi-interaction-id `string`: An RFC4122 UID used as a correlation id.
  * Authorization **required** `string`: An Authorisation Token as per https://tools.ietf.org/html/rfc6750
  * x-customer-user-agent `string`: Indicates the user-agent that the PSU is using.
  * sandbox-id **required** `string`: The unique id of the sandbox to be used

#### Output
* output [OBReadParty2](#obreadparty2)

### accounts.accountId.product.get
Get Products by Account ID


```js
nbg_gr.accounts.accountId.product.get({
  "accountId": "",
  "Authorization": "",
  "sandbox-id": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: AccountId
  * x-fapi-auth-date `string`: The time when the PSU last logged in with the TPP.
  * x-fapi-customer-ip-address `string`: The PSU's IP address if the PSU is currently logged in with the TPP.
  * x-fapi-interaction-id `string`: An RFC4122 UID used as a correlation id.
  * Authorization **required** `string`: An Authorisation Token as per https://tools.ietf.org/html/rfc6750
  * x-customer-user-agent `string`: Indicates the user-agent that the PSU is using.
  * sandbox-id **required** `string`: The unique id of the sandbox to be used

#### Output
* output [OBReadProduct2](#obreadproduct2)

### accounts.accountId.scheduled_payments.get
Get Scheduled Payments by Account ID


```js
nbg_gr.accounts.accountId.scheduled_payments.get({
  "accountId": "",
  "Authorization": "",
  "sandbox-id": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: AccountId
  * x-fapi-auth-date `string`: The time when the PSU last logged in with the TPP.
  * x-fapi-customer-ip-address `string`: The PSU's IP address if the PSU is currently logged in with the TPP.
  * x-fapi-interaction-id `string`: An RFC4122 UID used as a correlation id.
  * Authorization **required** `string`: An Authorisation Token as per https://tools.ietf.org/html/rfc6750
  * x-customer-user-agent `string`: Indicates the user-agent that the PSU is using.
  * sandbox-id **required** `string`: The unique id of the sandbox to be used

#### Output
* output [OBReadScheduledPayment3](#obreadscheduledpayment3)

### accounts.accountId.standing_orders.get
Get Standing Orders by Account ID


```js
nbg_gr.accounts.accountId.standing_orders.get({
  "accountId": "",
  "Authorization": "",
  "sandbox-id": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: AccountId
  * x-fapi-auth-date `string`: The time when the PSU last logged in with the TPP.
  * x-fapi-customer-ip-address `string`: The PSU's IP address if the PSU is currently logged in with the TPP.
  * x-fapi-interaction-id `string`: An RFC4122 UID used as a correlation id.
  * Authorization **required** `string`: An Authorisation Token as per https://tools.ietf.org/html/rfc6750
  * x-customer-user-agent `string`: Indicates the user-agent that the PSU is using.
  * sandbox-id **required** `string`: The unique id of the sandbox to be used

#### Output
* output [OBReadStandingOrder6](#obreadstandingorder6)

### accounts.accountId.statements.get
Get Statements by Account ID


```js
nbg_gr.accounts.accountId.statements.get({
  "accountId": "",
  "Authorization": "",
  "sandbox-id": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: AccountId
  * fromStatementDateTime `string`: The UTC ISO 8601 Date Time to filter statements FROM NB Time component is optional - set to 00:00:00 for just Date. If the Date Time contains a timezone, the ASPSP must ignore the timezone component.
  * toStatementDateTime `string`: The UTC ISO 8601 Date Time to filter statements TO NB Time component is optional - set to 00:00:00 for just Date. If the Date Time contains a timezone, the ASPSP must ignore the timezone component.
  * x-fapi-auth-date `string`: The time when the PSU last logged in with the TPP.
  * x-fapi-customer-ip-address `string`: The PSU's IP address if the PSU is currently logged in with the TPP.
  * x-fapi-interaction-id `string`: An RFC4122 UID used as a correlation id.
  * Authorization **required** `string`: An Authorisation Token as per https://tools.ietf.org/html/rfc6750
  * x-customer-user-agent `string`: Indicates the user-agent that the PSU is using.
  * sandbox-id **required** `string`: The unique id of the sandbox to be used

#### Output
* output [OBReadStatement2](#obreadstatement2)

### accounts.accountId.statements.statementId.get
Get Statements by Account ID and Statement ID


```js
nbg_gr.accounts.accountId.statements.statementId.get({
  "accountId": "",
  "statementId": "",
  "Authorization": "",
  "sandbox-id": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: AccountId
  * statementId **required** `string`: StatementId
  * x-fapi-auth-date `string`: The time when the PSU last logged in with the TPP.
  * x-fapi-customer-ip-address `string`: The PSU's IP address if the PSU is currently logged in with the TPP.
  * x-fapi-interaction-id `string`: An RFC4122 UID used as a correlation id.
  * Authorization **required** `string`: An Authorisation Token as per https://tools.ietf.org/html/rfc6750
  * x-customer-user-agent `string`: Indicates the user-agent that the PSU is using.
  * sandbox-id **required** `string`: The unique id of the sandbox to be used

#### Output
* output [OBReadStatement2](#obreadstatement2)

### accounts.accountId.statements.statementId.file.get
Get Statements by Account ID and Statement ID (File)


```js
nbg_gr.accounts.accountId.statements.statementId.file.get({
  "accountId": "",
  "statementId": "",
  "Authorization": "",
  "sandbox-id": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: AccountId
  * statementId **required** `string`: StatementId
  * x-fapi-auth-date `string`: The time when the PSU last logged in with the TPP.
  * x-fapi-customer-ip-address `string`: The PSU's IP address if the PSU is currently logged in with the TPP.
  * x-fapi-interaction-id `string`: An RFC4122 UID used as a correlation id.
  * Authorization **required** `string`: An Authorisation Token as per https://tools.ietf.org/html/rfc6750
  * x-customer-user-agent `string`: Indicates the user-agent that the PSU is using.
  * sandbox-id **required** `string`: The unique id of the sandbox to be used

#### Output
* output `string`

### accounts.accountId.statements.statementId.transactions.get
Get Transactions by Account ID and Statement ID


```js
nbg_gr.accounts.accountId.statements.statementId.transactions.get({
  "accountId": "",
  "statementId": "",
  "Authorization": "",
  "sandbox-id": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: AccountId
  * statementId **required** `string`: StatementId
  * x-fapi-auth-date `string`: The time when the PSU last logged in with the TPP.
  * x-fapi-customer-ip-address `string`: The PSU's IP address if the PSU is currently logged in with the TPP.
  * x-fapi-interaction-id `string`: An RFC4122 UID used as a correlation id.
  * Authorization **required** `string`: An Authorisation Token as per https://tools.ietf.org/html/rfc6750
  * x-customer-user-agent `string`: Indicates the user-agent that the PSU is using.
  * sandbox-id **required** `string`: The unique id of the sandbox to be used

#### Output
* output [OBReadTransaction6](#obreadtransaction6)

### accounts.accountId.transactions.get
Get Transactions by Account ID


```js
nbg_gr.accounts.accountId.transactions.get({
  "accountId": "",
  "Authorization": "",
  "sandbox-id": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: AccountId
  * fromBookingDateTime `string`: The UTC ISO 8601 Date Time to filter transactions FROM NB Time component is optional - set to 00:00:00 for just Date. If the Date Time contains a timezone, the ASPSP must ignore the timezone component.
  * toBookingDateTime `string`: The UTC ISO 8601 Date Time to filter transactions TO NB Time component is optional - set to 00:00:00 for just Date. If the Date Time contains a timezone, the ASPSP must ignore the timezone component.
  * x-fapi-auth-date `string`: The time when the PSU last logged in with the TPP.
  * x-fapi-customer-ip-address `string`: The PSU's IP address if the PSU is currently logged in with the TPP.
  * x-fapi-interaction-id `string`: An RFC4122 UID used as a correlation id.
  * Authorization **required** `string`: An Authorisation Token as per https://tools.ietf.org/html/rfc6750
  * x-customer-user-agent `string`: Indicates the user-agent that the PSU is using.
  * sandbox-id **required** `string`: The unique id of the sandbox to be used

#### Output
* output [OBReadTransaction6](#obreadtransaction6)

### balances.get
Get Balances


```js
nbg_gr.balances.get({
  "Authorization": "",
  "sandbox-id": ""
}, context)
```

#### Input
* input `object`
  * x-fapi-auth-date `string`: The time when the PSU last logged in with the TPP.
  * x-fapi-customer-ip-address `string`: The PSU's IP address if the PSU is currently logged in with the TPP.
  * x-fapi-interaction-id `string`: An RFC4122 UID used as a correlation id.
  * Authorization **required** `string`: An Authorisation Token as per https://tools.ietf.org/html/rfc6750
  * x-customer-user-agent `string`: Indicates the user-agent that the PSU is using.
  * sandbox-id **required** `string`: The unique id of the sandbox to be used

#### Output
* output [OBReadBalance1](#obreadbalance1)

### beneficiaries.get
Get Beneficiaries


```js
nbg_gr.beneficiaries.get({
  "Authorization": "",
  "sandbox-id": ""
}, context)
```

#### Input
* input `object`
  * x-fapi-auth-date `string`: The time when the PSU last logged in with the TPP.
  * x-fapi-customer-ip-address `string`: The PSU's IP address if the PSU is currently logged in with the TPP.
  * x-fapi-interaction-id `string`: An RFC4122 UID used as a correlation id.
  * Authorization **required** `string`: An Authorisation Token as per https://tools.ietf.org/html/rfc6750
  * x-customer-user-agent `string`: Indicates the user-agent that the PSU is using.
  * sandbox-id **required** `string`: The unique id of the sandbox to be used

#### Output
* output [OBReadBeneficiary5](#obreadbeneficiary5)

### direct_debits.get
Get Direct Debits


```js
nbg_gr.direct_debits.get({
  "Authorization": "",
  "sandbox-id": ""
}, context)
```

#### Input
* input `object`
  * x-fapi-auth-date `string`: The time when the PSU last logged in with the TPP.
  * x-fapi-customer-ip-address `string`: The PSU's IP address if the PSU is currently logged in with the TPP.
  * x-fapi-interaction-id `string`: An RFC4122 UID used as a correlation id.
  * Authorization **required** `string`: An Authorisation Token as per https://tools.ietf.org/html/rfc6750
  * x-customer-user-agent `string`: Indicates the user-agent that the PSU is using.
  * sandbox-id **required** `string`: The unique id of the sandbox to be used

#### Output
* output [OBReadDirectDebit2](#obreaddirectdebit2)

### offers.get
Get Offers


```js
nbg_gr.offers.get({
  "Authorization": "",
  "sandbox-id": ""
}, context)
```

#### Input
* input `object`
  * x-fapi-auth-date `string`: The time when the PSU last logged in with the TPP.
  * x-fapi-customer-ip-address `string`: The PSU's IP address if the PSU is currently logged in with the TPP.
  * x-fapi-interaction-id `string`: An RFC4122 UID used as a correlation id.
  * Authorization **required** `string`: An Authorisation Token as per https://tools.ietf.org/html/rfc6750
  * x-customer-user-agent `string`: Indicates the user-agent that the PSU is using.
  * sandbox-id **required** `string`: The unique id of the sandbox to be used

#### Output
* output [OBReadOffer1](#obreadoffer1)

### party.get
Get Party


```js
nbg_gr.party.get({
  "Authorization": "",
  "sandbox-id": ""
}, context)
```

#### Input
* input `object`
  * x-fapi-auth-date `string`: The time when the PSU last logged in with the TPP.
  * x-fapi-customer-ip-address `string`: The PSU's IP address if the PSU is currently logged in with the TPP.
  * x-fapi-interaction-id `string`: An RFC4122 UID used as a correlation id.
  * Authorization **required** `string`: An Authorisation Token as per https://tools.ietf.org/html/rfc6750
  * x-customer-user-agent `string`: Indicates the user-agent that the PSU is using.
  * sandbox-id **required** `string`: The unique id of the sandbox to be used

#### Output
* output [OBReadParty2](#obreadparty2)

### products.get
Get Products


```js
nbg_gr.products.get({
  "Authorization": "",
  "sandbox-id": ""
}, context)
```

#### Input
* input `object`
  * x-fapi-auth-date `string`: The time when the PSU last logged in with the TPP.
  * x-fapi-customer-ip-address `string`: The PSU's IP address if the PSU is currently logged in with the TPP.
  * x-fapi-interaction-id `string`: An RFC4122 UID used as a correlation id.
  * Authorization **required** `string`: An Authorisation Token as per https://tools.ietf.org/html/rfc6750
  * x-customer-user-agent `string`: Indicates the user-agent that the PSU is using.
  * sandbox-id **required** `string`: The unique id of the sandbox to be used

#### Output
* output [OBReadProduct2](#obreadproduct2)

### sandbox.post
Create Sandbox


```js
nbg_gr.sandbox.post({
  "Authorization": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: An Authorisation Token as per https://tools.ietf.org/html/rfc6750
  * body [SandboxRequest](#sandboxrequest)

#### Output
* output [Sandbox](#sandbox)

### sandbox.put
Import Sandbox


```js
nbg_gr.sandbox.put({
  "Authorization": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: An Authorisation Token as per https://tools.ietf.org/html/rfc6750
  * body [Sandbox](#sandbox)

#### Output
*Output schema unknown*

### sandbox.sandboxId.delete
Delete Sandbox


```js
nbg_gr.sandbox.sandboxId.delete({
  "sandboxId": "",
  "Authorization": ""
}, context)
```

#### Input
* input `object`
  * sandboxId **required** `string`: Sandbox Id
  * Authorization **required** `string`: An Authorisation Token as per https://tools.ietf.org/html/rfc6750

#### Output
*Output schema unknown*

### sandbox.sandboxId.get
Get Sandbox


```js
nbg_gr.sandbox.sandboxId.get({
  "sandboxId": "",
  "Authorization": ""
}, context)
```

#### Input
* input `object`
  * sandboxId **required** `string`: Sandbox Id
  * Authorization **required** `string`: An Authorisation Token as per https://tools.ietf.org/html/rfc6750

#### Output
* output [Sandbox](#sandbox)

### scheduled_payments.get
Get Scheduled Payments


```js
nbg_gr.scheduled_payments.get({
  "Authorization": "",
  "sandbox-id": ""
}, context)
```

#### Input
* input `object`
  * x-fapi-auth-date `string`: The time when the PSU last logged in with the TPP.
  * x-fapi-customer-ip-address `string`: The PSU's IP address if the PSU is currently logged in with the TPP.
  * x-fapi-interaction-id `string`: An RFC4122 UID used as a correlation id.
  * Authorization **required** `string`: An Authorisation Token as per https://tools.ietf.org/html/rfc6750
  * x-customer-user-agent `string`: Indicates the user-agent that the PSU is using.
  * sandbox-id **required** `string`: The unique id of the sandbox to be used

#### Output
* output [OBReadScheduledPayment3](#obreadscheduledpayment3)

### standing_orders.get
Get Standing Orders


```js
nbg_gr.standing_orders.get({
  "Authorization": "",
  "sandbox-id": ""
}, context)
```

#### Input
* input `object`
  * x-fapi-auth-date `string`: The time when the PSU last logged in with the TPP.
  * x-fapi-customer-ip-address `string`: The PSU's IP address if the PSU is currently logged in with the TPP.
  * x-fapi-interaction-id `string`: An RFC4122 UID used as a correlation id.
  * Authorization **required** `string`: An Authorisation Token as per https://tools.ietf.org/html/rfc6750
  * x-customer-user-agent `string`: Indicates the user-agent that the PSU is using.
  * sandbox-id **required** `string`: The unique id of the sandbox to be used

#### Output
* output [OBReadStandingOrder6](#obreadstandingorder6)

### statements.get
Get Statements


```js
nbg_gr.statements.get({
  "Authorization": "",
  "sandbox-id": ""
}, context)
```

#### Input
* input `object`
  * fromStatementDateTime `string`: The UTC ISO 8601 Date Time to filter statements FROM NB Time component is optional - set to 00:00:00 for just Date. If the Date Time contains a timezone, the ASPSP must ignore the timezone component.
  * toStatementDateTime `string`: The UTC ISO 8601 Date Time to filter statements TO NB Time component is optional - set to 00:00:00 for just Date. If the Date Time contains a timezone, the ASPSP must ignore the timezone component.
  * x-fapi-auth-date `string`: The time when the PSU last logged in with the TPP.
  * x-fapi-customer-ip-address `string`: The PSU's IP address if the PSU is currently logged in with the TPP.
  * x-fapi-interaction-id `string`: An RFC4122 UID used as a correlation id.
  * Authorization **required** `string`: An Authorisation Token as per https://tools.ietf.org/html/rfc6750
  * x-customer-user-agent `string`: Indicates the user-agent that the PSU is using.
  * sandbox-id **required** `string`: The unique id of the sandbox to be used

#### Output
* output [OBReadStatement2](#obreadstatement2)

### transactions.get
Get Transactions


```js
nbg_gr.transactions.get({
  "Authorization": "",
  "sandbox-id": ""
}, context)
```

#### Input
* input `object`
  * fromBookingDateTime `string`: The UTC ISO 8601 Date Time to filter transactions FROM NB Time component is optional - set to 00:00:00 for just Date. If the Date Time contains a timezone, the ASPSP must ignore the timezone component.
  * toBookingDateTime `string`: The UTC ISO 8601 Date Time to filter transactions TO NB Time component is optional - set to 00:00:00 for just Date. If the Date Time contains a timezone, the ASPSP must ignore the timezone component.
  * x-fapi-auth-date `string`: The time when the PSU last logged in with the TPP.
  * x-fapi-customer-ip-address `string`: The PSU's IP address if the PSU is currently logged in with the TPP.
  * x-fapi-interaction-id `string`: An RFC4122 UID used as a correlation id.
  * Authorization **required** `string`: An Authorisation Token as per https://tools.ietf.org/html/rfc6750
  * x-customer-user-agent `string`: Indicates the user-agent that the PSU is using.
  * sandbox-id **required** `string`: The unique id of the sandbox to be used

#### Output
* output [OBReadTransaction6](#obreadtransaction6)



## Definitions

### ErrorCode
* ErrorCode `string` (values: UK.OBIE.Field.Expected, UK.OBIE.Field.Invalid, UK.OBIE.Field.InvalidDate, UK.OBIE.Field.Missing, UK.OBIE.Field.Unexpected, UK.OBIE.Header.Invalid, UK.OBIE.Header.Missing, UK.OBIE.Resource.ConsentMismatch, UK.OBIE.Resource.InvalidConsentStatus, UK.OBIE.Resource.InvalidFormat, UK.OBIE.Resource.NotFound, UK.OBIE.Rules.AfterCutOffDateTime, UK.OBIE.Rules.DuplicateReference, UK.OBIE.Signature.Invalid, UK.OBIE.Signature.InvalidClaim, UK.OBIE.Signature.MissingClaim, UK.OBIE.Signature.Malformed, UK.OBIE.Signature.Missing, UK.OBIE.Signature.Unexpected, UK.OBIE.Unsupported.AccountIdentifier, UK.OBIE.Unsupported.AccountSecondaryIdentifier, UK.OBIE.Unsupported.Currency, UK.OBIE.Unsupported.EventType, UK.OBIE.Unsupported.Frequency, UK.OBIE.Unsupported.LocalInstrument, UK.OBIE.Unsupported.Scheme, UK.OBIE.Reauthenticate, UK.OBIE.Rules.ResourceAlreadyExists, UK.OBIE.UnexpectedError): This is Data Type gives a low level textual error code to help categorise an error response. The applicable HTTP response code is also given.

### Links
* Links `object`: Links relevant to the payload
  * First `string`
  * Last `string`
  * Next `string`
  * Prev `string`
  * Self **required** `string`

### Meta
* Meta `object`: Meta Data relevant to the payload
  * FirstAvailableDateTime `string`: All dates in the JSON payloads are represented in ISO 8601 date-time format.
  * LastAvailableDateTime `string`: All dates in the JSON payloads are represented in ISO 8601 date-time format.
  * TotalPages `integer`

### OBAccount6
* OBAccount6 `object`: Unambiguous identification of the account to which credit and debit entries are made.
  * Account `array`: Provides the details to identify an account.
    * items [OBCashAccount5](#obcashaccount5)
  * AccountId **required** `string`: A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.
  * AccountSubType **required** [OBExternalAccountSubType1Code](#obexternalaccountsubtype1code)
  * AccountType **required** [OBExternalAccountType1Code](#obexternalaccounttype1code)
  * Currency **required** `string`: Identification of the currency in which the account is held.  Usage: Currency should only be used in case one and the same account number covers several currencies and the initiating party needs to identify which currency needs to be used for settlement on the account.
  * Description `string`: Specifies the description of the account type.
  * MaturityDate `string`: Maturity date of the account.All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00
  * Nickname `string`: The nickname of the account, assigned by the account owner in order to provide an additional means of identification of the account.
  * OpeningDate `string`: Date on which the account and related basic services are effectively operational for the account owner.All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00
  * Servicer [OBBranchAndFinancialInstitutionIdentification5](#obbranchandfinancialinstitutionidentification5)
  * Status [OBAccountStatus1Code](#obaccountstatus1code)
  * StatusUpdateDateTime `string`: Date and time at which the resource status was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00

### OBAccountStatus1Code
* OBAccountStatus1Code `string` (values: Deleted, Disabled, Enabled, Pending, ProForma)

### OBActiveOrHistoricCurrencyAndAmount
* OBActiveOrHistoricCurrencyAndAmount `object`
  * Amount **required** `string`: A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.
  * Currency **required** `string`: A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".

### OBAddressTypeCode
* OBAddressTypeCode `string` (values: Business, Correspondence, DeliveryTo, MailTo, POBox, Postal, Residential, Statement): Identifies the nature of the postal address.

### OBBCAData1
* OBBCAData1 `object`
  * CreditInterest [OBCreditInterest1](#obcreditinterest1)
  * OtherFeesCharges `array`: Contains details of fees and charges which are not associated with either Overdraft or features/benefits
    * items [OBOtherFeesAndCharges1](#obotherfeesandcharges1)
  * Overdraft [OBOverdraft1](#oboverdraft1)
  * ProductDetails [OBBCAProductDetails1](#obbcaproductdetails1)

### OBBCAProductDetails1
* OBBCAProductDetails1 `object`
  * FeeFreeLength `number`: The length/duration of the fee free period
  * FeeFreeLengthPeriod [OBPeriod1Code](#obperiod1code)
  * Notes `array`: Optional additional notes to supplement the Core product details
    * items `string`
  * Segment `array`: Market segmentation is a marketing term referring to the aggregating of prospective buyers into groups, or segments, that have common needs and respond similarly to a marketing action. Market segmentation enables companies to target different categories of consumers who perceive the full value of certain products and services differently from one another.  Read more: Market Segmentation http://www.investopedia.com/terms/m/marketsegmentation.asp#ixzz4gfEEalTd  With respect to BCA products, they are segmented in relation to different markets that they wish to focus on.
    * items [OBBCAProductSegment1Code](#obbcaproductsegment1code)

### OBBCAProductSegment1Code
* OBBCAProductSegment1Code `string` (values: ClientAccount, Standard, NonCommercialChaitiesClbSoc, NonCommercialPublicAuthGovt, Religious, SectorSpecific, Startup, Switcher)

### OBBalanceType1Code
* OBBalanceType1Code `string` (values: ClosingAvailable, ClosingBooked, ClosingCleared, Expected, ForwardAvailable, Information, InterimAvailable, InterimBooked, InterimCleared, OpeningAvailable, OpeningBooked, OpeningCleared, PreviouslyClosedBooked)

### OBBankTransactionCodeStructure1
* OBBankTransactionCodeStructure1 `object`: Set of elements used to fully identify the type of underlying transaction resulting in an entry.
  * Code **required** `string`: Specifies the family within a domain.
  * SubCode **required** `string`: Specifies the sub-product family within a specific family.

### OBBeneficiary5
* OBBeneficiary5 `object`
  * AccountId `string`: A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.
  * BeneficiaryId `string`: A unique and immutable identifier used to identify the beneficiary resource. This identifier has no meaning to the account owner.
  * BeneficiaryType [OBBeneficiaryType1Code](#obbeneficiarytype1code)
  * CreditorAccount [OBCashAccount5](#obcashaccount5)
  * CreditorAgent [OBBranchAndFinancialInstitutionIdentification6](#obbranchandfinancialinstitutionidentification6)
  * Reference `string`: Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.
  * SupplementaryData [OBSupplementaryData1](#obsupplementarydata1)

### OBBeneficiaryType1Code
* OBBeneficiaryType1Code `string` (values: Trusted, Ordinary): Specifies the Beneficiary Type.

### OBBranchAndFinancialInstitutionIdentification5
* OBBranchAndFinancialInstitutionIdentification5 `object`
  * Identification **required** `string`: Unique and unambiguous identification of the servicing institution.
  * SchemeName **required** `string`: Name of the identification scheme, in a coded form as published in an external list.

### OBBranchAndFinancialInstitutionIdentification6
* OBBranchAndFinancialInstitutionIdentification6 `object`
  * Identification `string`: Unique and unambiguous identification of the servicing institution.
  * Name `string`: Name by which an agent is known and which is usually used to identify that agent.
  * PostalAddress [OBPostalAddress6](#obpostaladdress6)
  * SchemeName `string`: Name of the identification scheme, in a coded form as published in an external list.

### OBCashAccount5
* OBCashAccount5 `object`
  * Identification **required** `string`: Identification assigned by an institution to identify an account. This identification is known by the account owner.
  * Name `string`: The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels.
  * SchemeName **required** `string`: Name of the identification scheme, in a coded form as published in an external list.
  * SecondaryIdentification `string`: This is secondary identification of the account, as assigned by the account servicing institution.

### OBCashAccount6
* OBCashAccount6 `object`: Unambiguous identification of the account of the creditor, in the case of a debit transaction.
  * Identification `string`: Identification assigned by an institution to identify an account. This identification is known by the account owner.
  * Name `string`: The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels.
  * SchemeName `string`: Name of the identification scheme, in a coded form as published in an external list.
  * SecondaryIdentification `string`: This is secondary identification of the account, as assigned by the account servicing institution.

### OBCashBalance1
* OBCashBalance1 `object`: Set of elements used to define the balance details.
  * AccountId **required** `string`: A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.
  * Amount **required** [OBActiveOrHistoricCurrencyAndAmount](#obactiveorhistoriccurrencyandamount)
  * CreditDebitIndicator **required** [OBCreditDebitCode](#obcreditdebitcode)
  * CreditLine `array`: Set of elements used to provide details on the credit line.
    * items [OBCreditLine1](#obcreditline1)
  * DateTime **required** `string`: Indicates the date (and time) of the balance.All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00
  * Type **required** [OBBalanceType1Code](#obbalancetype1code)

### OBCreditDebitCode
* OBCreditDebitCode `string` (values: Credit, Debit)

### OBCreditInterest1
* OBCreditInterest1 `object`: Details about the interest that may be payable to the Account holders
  * TierBandSet **required** `array`
    * items [OBTierBandSet1](#obtierbandset1)

### OBCreditLine1
* OBCreditLine1 `object`
  * Amount [OBActiveOrHistoricCurrencyAndAmount](#obactiveorhistoriccurrencyandamount)
  * Included **required** `boolean`: Indicates whether or not the credit line is included in the balance of the account.
  * Type [OBExternalLimitType1Code](#obexternallimittype1code)

### OBCurrencyExchange5
* OBCurrencyExchange5 `object`: Set of elements used to provide details on the currency exchange.
  * ContractIdentification `string`: Unique identification to unambiguously identify the foreign exchange contract.
  * ExchangeRate **required** `number`: Factor used to convert an amount from one currency into another. This reflects the price at which one currency was bought with another currency. Usage: ExchangeRate expresses the ratio between UnitCurrency and QuotedCurrency (ExchangeRate = UnitCurrency/QuotedCurrency).
  * InstructedAmount [OBActiveOrHistoricCurrencyAndAmount](#obactiveorhistoriccurrencyandamount)
  * QuotationDate `string`: Date and time at which an exchange rate is quoted.All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00
  * SourceCurrency **required** `string`: Currency from which an amount is to be converted in a currency conversion.
  * TargetCurrency `string`: Currency into which an amount is to be converted in a currency conversion.
  * UnitCurrency `string`: Currency in which the rate of exchange is expressed in a currency exchange. In the example 1GBP = xxxCUR, the unit currency is GBP.

### OBDirectDebit2
* OBDirectDebit2 `object`: Account to or from which a cash entry is made.
  * AccountId **required** `string`: A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.
  * DirectDebitId `string`: A unique and immutable identifier used to identify the direct debit resource. This identifier has no meaning to the account owner.
  * DirectDebitStatusCode [OBExternalDirectDebitStatus1Code](#obexternaldirectdebitstatus1code)
  * Frequency `string`: Regularity with which direct debit instructions are to be created and processed.
  * MandateIdentification **required** `string`: Direct Debit reference. For AUDDIS service users provide Core Reference. For non AUDDIS service users provide Core reference if possible or last used reference.
  * Name **required** `string`: Name of Service User.
  * PreviousPaymentAmount [OBActiveOrHistoricCurrencyAndAmount](#obactiveorhistoriccurrencyandamount)
  * PreviousPaymentDateTime `string`: Date of most recent direct debit collection.All dates in the JSON payloads are represented in ISO 8601 date-time format.

### OBEntryStatus1Code
* OBEntryStatus1Code `string` (values: Booked, Pending)

### OBError1
* OBError1 `object`
  * ErrorCode **required** [ErrorCode](#errorcode)
  * Message **required** `string`: A description of the error that occurred. e.g., 'A mandatory field isn't supplied' or 'RequestedExecutionDateTime must be in future'OBIE doesn't standardise this field
  * Path `string`: Recommended but optional reference to the JSON Path of the field with error, e.g., Data.Initiation.InstructedAmount.Currency
  * Url `string`: URL to help remediate the problem, or provide more information, or to API Reference, or help etc

### OBErrorResponse1
* OBErrorResponse1 `object`: An array of detail error codes, and messages, and URLs to documentation to help remediation.
  * Code **required** `string`: High level textual error code, to help categorize the errors.
  * Errors **required** `array`: Gets or Sets Errors
    * items [OBError1](#oberror1)
  * Id `string`: A unique reference for the error instance, for audit purposes, in case of unknown/unclassified errors.
  * Message **required** `string`: Brief Error message, e.g., 'There is something wrong with the request parameters provided'

### OBExternalAccountSubType1Code
* OBExternalAccountSubType1Code `string` (values: ChargeCard, CreditCard, CurrentAccount, EMoney, Loan, Mortgage, PrePaidCard, Savings)

### OBExternalAccountType1Code
* OBExternalAccountType1Code `string` (values: Business, Personal)

### OBExternalCardAuthorisationType1Code
* OBExternalCardAuthorisationType1Code `string` (values: ConsumerDevice, Contactless, None, PIN): The card authorisation type.

### OBExternalCardSchemeType1Code
* OBExternalCardSchemeType1Code `string` (values: AmericanExpress, Diners, Discover, MasterCard, VISA): Name of the card scheme.

### OBExternalDirectDebitStatus1Code
* OBExternalDirectDebitStatus1Code `string` (values: Active, Inactive)

### OBExternalLimitType1Code
* OBExternalLimitType1Code `string` (values: Available, Credit, Emergency, Pre-Agreed, Temporary)

### OBExternalOfferType1Code
* OBExternalOfferType1Code `string` (values: BalanceTransfer, LimitIncrease, MoneyTransfer, Other, PromotionalRate)

### OBExternalPartyType1Code
* OBExternalPartyType1Code `string` (values: Delegate, Joint, Sole)

### OBExternalPermissions1Code
* OBExternalPermissions1Code `string` (values: ReadAccountsBasic, ReadAccountsDetail, ReadBalances, ReadBeneficiariesBasic, ReadBeneficiariesDetail, ReadDirectDebits, ReadOffers, ReadPAN, ReadParty, ReadPartyPSU, ReadProducts, ReadScheduledPaymentsBasic, ReadScheduledPaymentsDetail, ReadStandingOrdersBasic, ReadStandingOrdersDetail, ReadStatementsBasic, ReadStatementsDetail, ReadTransactionsBasic, ReadTransactionsCredits, ReadTransactionsDebits, ReadTransactionsDetail): Specifies the Open Banking account access data types. This is a list of the data clusters being consented by the PSU, and requested for authorisation with the ASPSP.

### OBExternalProductType1Code
* OBExternalProductType1Code `string` (values: BusinessCurrentAccount, CommercialCreditCard, Other, PersonalCurrentAccount, SMELoan): Product type : Personal Current Account, Business Current Account

### OBExternalRequestStatus1Code
* OBExternalRequestStatus1Code `string` (values: Authorised, AwaitingAuthorisation, Rejected, Revoked): Specifies the status of consent resource in code form.

### OBExternalScheduleType1Code
* OBExternalScheduleType1Code `string` (values: Arrival, Execution)

### OBExternalStandingOrderStatus1Code
* OBExternalStandingOrderStatus1Code `string` (values: Active, Inactive)

### OBExternalStatementType1Code
* OBExternalStatementType1Code `string` (values: AccountClosure, AccountOpening, Annual, Interim, RegularPeriodic)

### OBFeeApplicableRange1
* OBFeeApplicableRange1 `object`: Range or amounts or rates for which the fee/charge applies
  * MaximumAmount `string`: Maximum Amount on which fee is applicable (where it is expressed as an amount)
  * MaximumRate `string`: Maximum rate on which fee/charge is applicable(where it is expressed as an rate)
  * MinimumAmount `string`: Minimum Amount on which fee/charge is applicable (where it is expressed as an amount)
  * MinimumRate `string`: Minimum rate on which fee/charge is applicable(where it is expressed as an rate)

### OBFeeCategory1Code
* OBFeeCategory1Code `string` (values: FCOT, FCRE, FCSV): Categorisation of fees and charges into standard categories.

### OBFeeChargeCap1
* OBFeeChargeCap1 `object`: Details about any caps (maximum charges) that apply to a particular or group of fee/charge
  * CappingPeriod [OBPeriod1Code](#obperiod1code)
  * FeeCapAmount `string`: Cap amount charged for a fee/charge (where it is charged in terms of an amount rather than a rate)
  * FeeCapOccurrence `integer`: Fee/Charges are captured dependent on the number of occurrences rather than capped at a particular amount
  * FeeType **required** `array`
    * items [OBFeeType1Code](#obfeetype1code)
  * MinMaxType **required** [OBMinMaxType1Code](#obminmaxtype1code)
  * Notes `array`: Free text for adding extra details for fee charge cap
    * items `string`
  * OtherFeeType `array`
    * items [OBOtherCodeType1](#obothercodetype1)

### OBFeeChargeDetail1
* OBFeeChargeDetail1 `object`: Other fees/charges details
  * ApplicationFrequency **required** [OBFeeFrequency1Code](#obfeefrequency1code)
  * CalculationFrequency [OBFeeFrequency1Code](#obfeefrequency1code)
  * FeeAmount `string`: Fee Amount charged for a fee/charge (where it is charged in terms of an amount rather than a rate)
  * FeeApplicableRange [OBFeeApplicableRange1](#obfeeapplicablerange1)
  * FeeCategory **required** [OBFeeCategory1Code](#obfeecategory1code)
  * FeeChargeCap `array`
    * items [OBFeeChargeCap1](#obfeechargecap1)
  * FeeRate `string`: Rate charged for Fee/Charge (where it is charged in terms of a rate rather than an amount)
  * FeeRateType [OBInterestRateType1Code](#obinterestratetype1code)
  * FeeType **required** [OBFeeType1Code](#obfeetype1code)
  * NegotiableIndicator `boolean`: Fee/charge which is usually negotiable rather than a fixed amount
  * Notes `array`: Optional additional notes to supplement the fee/charge details.
    * items `string`
  * OtherApplicationFrequency [OBOtherCodeType1](#obothercodetype1)
  * OtherCalculationFrequency [OBOtherCodeType1](#obothercodetype1)
  * OtherFeeCategoryType [OBOtherCodeType1](#obothercodetype1)
  * OtherFeeRateType [OBOtherCodeType1](#obothercodetype1)
  * OtherFeeType [OBOtherFeeChargeDetailType](#obotherfeechargedetailtype)

### OBFeeFrequency1Code
* OBFeeFrequency1Code `string` (values: FEAC, FEAO, FECP, FEDA, FEHO, FEI, FEMO, FEOA, FEOT, FEPC, FEPH, FEPO, FEPS, FEPT, FEPTA, FEPTP, FEQU, FESM, FEST, FEWE, FEYE): Frequency at which the overdraft charge is applied to the account

### OBFeeType1Code
* OBFeeType1Code `string` (values: FEPF, FTOT, FYAF, FYAM, FYAQ, FYCP, FYDB, FYMI, FYXX): Fee/Charge Type

### OBFrequency1Code
* OBFrequency1Code `string` (values: FQAT, FQDY, FQHY, FQMY, FQOT, FQQY, FQSD, FQWY, FQYY): How often is credit interest calculated for the account.

### OBInterestCalculationMethod1Code
* OBInterestCalculationMethod1Code `string` (values: ITCO, ITOT, ITSI)

### OBInterestDestination1Code
* OBInterestDestination1Code `string` (values: INOT, INPA, INSC): Describes whether accrued interest is payable only to the BCA or to another bank account

### OBInterestFixedVariableType1Code
* OBInterestFixedVariableType1Code `string` (values: INFI, INVA): Type of interest rate, Fixed or Variable

### OBInterestRateType1Code
* OBInterestRateType1Code `string` (values: INBB, INFR, INGR, INLR, INNE, INOT): Interest rate types, other than AER, which financial institutions may use to describe the annual interest rate payable to the account holder's account.

### OBLoanInterest1
* OBLoanInterest1 `object`: Details about the interest that may be payable to the SME Loan holders
  * LoanInterestTierBandSet **required** `array`
    * items [OBLoanInterestTierBandSet1](#obloaninteresttierbandset1)
  * Notes `array`: Optional additional notes to supplement the LoanInterest
    * items `string`

### OBLoanInterestFeesChargeCap1
* OBLoanInterestFeesChargeCap1 `object`: Details about any caps (minimum/maximum charges) that apply to a particular fee/charge
  * CappingPeriod [OBFeeFrequency1Code](#obfeefrequency1code)
  * FeeCapAmount `string`: Cap amount charged for a fee/charge (where it is charged in terms of an amount rather than a rate)
  * FeeCapOccurrence `integer`: Fee/charges are captured dependent on the number of occurrences rather than capped at a particular amount
  * FeeType **required** `array`
    * items [OBFeeType1Code](#obfeetype1code)
  * MinMaxType **required** [OBMinMaxType1Code](#obminmaxtype1code)
  * Notes `array`: Free text for adding extra details for fee charge cap
    * items `string`
  * OtherFeeType `array`
    * items [OBOtherCodeType1](#obothercodetype1)

### OBLoanInterestFeesChargeDetail1
* OBLoanInterestFeesChargeDetail1 `object`: Other fees/charges details
  * ApplicationFrequency **required** [OBFeeFrequency1Code](#obfeefrequency1code)
  * CalculationFrequency **required** [OBFeeFrequency1Code](#obfeefrequency1code)
  * FeeAmount `string`: Fee Amount charged for a fee/charge (where it is charged in terms of an amount rather than a rate)
  * FeeRate `string`: Rate charged for Fee/Charge (where it is charged in terms of a rate rather than an amount)
  * FeeRateType [OBInterestRateType1Code](#obinterestratetype1code)
  * FeeType **required** [OBFeeType1Code](#obfeetype1code)
  * NegotiableIndicator `boolean`: Fee/charge which is usually negotiable rather than a fixed amount
  * Notes `array`: Optional additional notes to supplement the fee/charge details.
    * items `string`
  * OtherApplicationFrequency [OBOtherCodeType1](#obothercodetype1)
  * OtherCalculationFrequency [OBOtherCodeType1](#obothercodetype1)
  * OtherFeeRateType [OBOtherCodeType1](#obothercodetype1)
  * OtherFeeType [OBOtherFeeChargeDetailType](#obotherfeechargedetailtype)

### OBLoanInterestFeesCharges1
* OBLoanInterestFeesCharges1 `object`: Contains details of fees and charges which are not associated with either LoanRepayment or features/benefits
  * LoanInterestFeeChargeCap `array`
    * items [OBLoanInterestFeesChargeCap1](#obloaninterestfeeschargecap1)
  * LoanInterestFeeChargeDetail **required** `array`
    * items [OBLoanInterestFeesChargeDetail1](#obloaninterestfeeschargedetail1)

### OBLoanInterestTierBand1
* OBLoanInterestTierBand1 `object`: Tier Band Details
  * FixedVariableInterestRateType **required** [OBInterestFixedVariableType1Code](#obinterestfixedvariabletype1code)
  * Identification `string`: Unique and unambiguous identification of a  Tier Band for a SME Loan.
  * LoanInterestFeesCharges `array`
    * items [OBLoanInterestFeesCharges1](#obloaninterestfeescharges1)
  * LoanProviderInterestRate `string`: Loan provider Interest for the SME Loan product
  * LoanProviderInterestRateType [OBInterestRateType1Code](#obinterestratetype1code)
  * MaxTermPeriod [OBPeriod1Code](#obperiod1code)
  * MinTermPeriod **required** [OBPeriod1Code](#obperiod1code)
  * Notes `array`: Optional additional notes to supplement the Tier Band details
    * items `string`
  * OtherLoanProviderInterestRateType [OBOtherCodeType1](#obothercodetype1)
  * RepAPR **required** `string`: The annual equivalent rate (AER) is interest that is calculated under the assumption that any interest paid is combined with the original balance and the next interest payment will be based on the slightly higher account balance. Overall, this means that interest can be compounded several times in a year depending on the number of times that interest payments are made.  For SME Loan, this APR is the representative APR which includes any account fees.
  * TierValueMaxTerm `integer`: Maximum loan term for which the loan interest tier applies.
  * TierValueMaximum `string`: Maximum loan value for which the loan interest tier applies.
  * TierValueMinTerm **required** `integer`: Minimum loan term for which the loan interest tier applies.
  * TierValueMinimum **required** `string`: Minimum loan value for which the loan interest tier applies.

### OBLoanInterestTierBandSet1
* OBLoanInterestTierBandSet1 `object`: The group of tiers or bands for which debit interest can be applied.
  * CalculationMethod **required** [OBInterestCalculationMethod1Code](#obinterestcalculationmethod1code)
  * Identification `string`: Loan interest tierbandset identification. Used by  loan providers for internal use purpose.
  * LoanInterestFeesCharges `array`
    * items [OBLoanInterestFeesCharges1](#obloaninterestfeescharges1)
  * LoanInterestTierBand **required** `array`
    * items [OBLoanInterestTierBand1](#obloaninteresttierband1)
  * Notes `array`: Optional additional notes to supplement the Tier Band Set details
    * items `string`
  * OtherCalculationMethod [OBOtherCodeType1](#obothercodetype1)
  * TierBandMethod **required** [OBTierBandType1Code](#obtierbandtype1code)

### OBMerchantDetails1
* OBMerchantDetails1 `object`: Details of the merchant involved in the transaction.
  * MerchantCategoryCode `string`: Category code conform to ISO 18245, related to the type of services or goods the merchant provides for the transaction.
  * MerchantName `string`: Name by which the merchant is known.

### OBMinMaxType1Code
* OBMinMaxType1Code `string` (values: FMMN, FMMX): Min Max type

### OBOffer1
* OBOffer1 `object`
  * AccountId **required** `string`: A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.
  * Amount [OBActiveOrHistoricCurrencyAndAmount](#obactiveorhistoriccurrencyandamount)
  * Description `string`: Further details of the offer.
  * EndDateTime `string`: Date and time at which the offer ends.All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00
  * Fee [OBActiveOrHistoricCurrencyAndAmount](#obactiveorhistoriccurrencyandamount)
  * OfferId `string`: A unique and immutable identifier used to identify the offer resource. This identifier has no meaning to the account owner.
  * OfferType [OBExternalOfferType1Code](#obexternaloffertype1code)
  * Rate `string`: Rate associated with the offer type.
  * StartDateTime `string`: Date and time at which the offer starts.All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00
  * Term `string`: Further details of the term of the offer.
  * URL `string`: URL (Uniform Resource Locator) where documentation on the offer can be found
  * Value `integer`: Value associated with the offer type.

### OBOtherCodeType1
* OBOtherCodeType1 `object`
  * Code `string`: The four letter Mnemonic used within an XML file to identify a code
  * Description **required** `string`: Description to describe the purpose of the code
  * Name **required** `string`: Long name associated with the code

### OBOtherFeeChargeDetailType
* OBOtherFeeChargeDetailType `object`: Other Fee/charge type which is not available in the standard code set
  * Code `string`: The four letter Mnemonic used within an XML file to identify a code
  * Description **required** `string`: Description to describe the purpose of the code
  * FeeCategory **required** [OBFeeCategory1Code](#obfeecategory1code)
  * Name **required** `string`: Long name associated with the code

### OBOtherFeesAndCharges1
* OBOtherFeesAndCharges1 `object`: Contains details of fees and charges which are not associated with either Overdraft or features/benefits
  * FeeChargeCap `array`
    * items [OBFeeChargeCap1](#obfeechargecap1)
  * FeeChargeDetail **required** `array`
    * items [OBFeeChargeDetail1](#obfeechargedetail1)
  * OtherTariffType [OBOtherCodeType1](#obothercodetype1)
  * TariffName `string`: Name of the tariff
  * TariffType [OBTariffType1Code](#obtarifftype1code)

### OBOtherProductDetails1
* OBOtherProductDetails1 `object`
  * FeeFreeLength `integer`: The length/duration of the fee free period
  * FeeFreeLengthPeriod [OBPeriod1Code](#obperiod1code)
  * MonthlyMaximumCharge `string`: The maximum relevant charges that could accrue as defined fully in Part 7 of the CMA order
  * Notes `array`: Optional additional notes to supplement the Core product details
    * items `string`
  * OtherSegment [OBOtherCodeType1](#obothercodetype1)
  * Segment `array`: Market segmentation is a marketing term referring to the aggregating of prospective buyers into groups, or segments, that have common needs and respond similarly to a marketing action. Market segmentation enables companies to target different categories of consumers who perceive the full value of certain products and services differently from one another. Read more: Market Segmentation http://www.investopedia.com/terms/m/marketsegmentation.asp#ixzz4gfEEalTd
    * items [OBOtherProductSegment1Code](#obotherproductsegment1code)

### OBOtherProductSegment1Code
* OBOtherProductSegment1Code `string` (values: GEAS, GEBA, GEBR, GEBU, GECI, GECS, GEFB, GEFG, GEG, GEGR, GEGS, GEOT, GEOV, GEPA, GEPR, GERE, GEST, GEYA, GEYO, PSCA, PSES, PSNC, PSNP, PSRG, PSSS, PSST, PSSW)

### OBOtherProductType1
* OBOtherProductType1 `object`: Other product type details associated with the account.
  * CreditInterest [OBCreditInterest1](#obcreditinterest1)
  * Description **required** `string`: Description of the Product associated with the account
  * LoanInterest [OBLoanInterest1](#obloaninterest1)
  * Name **required** `string`: Long name associated with the product
  * OtherFeesCharges `array`
    * items [OBOtherFeesAndCharges1](#obotherfeesandcharges1)
  * Overdraft [OBOverdraft1](#oboverdraft1)
  * ProductDetails [OBOtherProductDetails1](#obotherproductdetails1)
  * Repayment [OBRepayment1](#obrepayment1)
  * SupplementaryData [OBSupplementaryData1](#obsupplementarydata1)

### OBOverdraft1
* OBOverdraft1 `object`: Borrowing details
  * Notes `array`: Associated Notes about the overdraft rates
    * items `string`
  * OverdraftTierBandSet **required** `array`: Tier band set details
    * items [OBOverdraftTierbandSet1](#oboverdrafttierbandset1)

### OBOverdraftFeeChargeCap1
* OBOverdraftFeeChargeCap1 `object`: Details about any caps (maximum charges) that apply to a particular fee/charge. Capping can either be based on an amount (in gbp), an amount (in items) or a rate.
  * CappingPeriod [OBPeriod1Code](#obperiod1code)
  * FeeCapAmount `string`: Cap amount charged for a fee/charge
  * FeeCapOccurrence `integer`: Indicates whether the advertised overdraft rate is guaranteed to be offered to a borrower by the bank e.g. if it's part of a government scheme, or whether the rate may vary dependent on the applicant's circumstances.
  * FeeType **required** `array`
    * items [OBOverdraftFeeType1Code](#oboverdraftfeetype1code)
  * MinMaxType **required** [OBMinMaxType1Code](#obminmaxtype1code)
  * Notes `array`: Notes related to Overdraft fee charge cap
    * items `string`
  * OtherFeeType `array`
    * items [OBOtherCodeType1](#obothercodetype1)

### OBOverdraftFeeType1Code
* OBOverdraftFeeType1Code `string` (values: FBAO, FBAR, FBEB, FBIT, FBOR, FBOS, FBSC, FBTO, FBUB, FBUT, FTOT, FTUT): Fee/charge type which is being capped

### OBOverdraftFeesChargeDetails1
* OBOverdraftFeesChargeDetails1 `object`: Details about the fees/charges
  * ApplicationFrequency **required** [OBFeeFrequency1Code](#obfeefrequency1code)
  * CalculationFrequency [OBFeeFrequency1Code](#obfeefrequency1code)
  * FeeAmount `string`: Amount charged for an overdraft fee/charge (where it is charged in terms of an amount rather than a rate)
  * FeeRate `string`: Rate charged for overdraft fee/charge (where it is charged in terms of a rate rather than an amount)
  * FeeRateType [OBInterestRateType1Code](#obinterestratetype1code)
  * FeeType **required** [OBOverdraftFeeType1Code](#oboverdraftfeetype1code)
  * IncrementalBorrowingAmount `string`: Every additional tranche of an overdraft balance to which an overdraft fee is applied
  * NegotiableIndicator `boolean`: Indicates whether fee and charges are negotiable
  * Notes `array`: Free text for capturing any other info related to Overdraft Fees Charge Details
    * items `string`
  * OtherApplicationFrequency [OBOtherCodeType1](#obothercodetype1)
  * OtherCalculationFrequency [OBOtherCodeType1](#obothercodetype1)
  * OtherFeeRateType [OBOtherCodeType1](#obothercodetype1)
  * OtherFeeType [OBOtherCodeType1](#obothercodetype1)
  * OverdraftControlIndicator `boolean`: Indicates if the fee/charge is already covered by an 'Overdraft Control' fee or not.
  * OverdraftFeeChargeCap `array`
    * items [OBOverdraftFeeChargeCap1](#oboverdraftfeechargecap1)

### OBOverdraftFeesCharges1
* OBOverdraftFeesCharges1 `object`: Overdraft fees and charges
  * OverdraftFeeChargeCap `array`
    * items [OBOverdraftFeeChargeCap1](#oboverdraftfeechargecap1)
  * OverdraftFeeChargeDetail **required** `array`
    * items [OBOverdraftFeesChargeDetails1](#oboverdraftfeeschargedetails1)

### OBOverdraftTierBand1
* OBOverdraftTierBand1 `object`: Provides overdraft details for a specific tier or band
  * AgreementLengthMax `integer`: Specifies the maximum length of a band for a fixed overdraft agreement
  * AgreementLengthMin `integer`: Specifies the minimum length of a band for a fixed overdraft agreement
  * AgreementPeriod [OBPeriod1Code](#obperiod1code)
  * BankGuaranteedIndicator `boolean`: Indicates whether the advertised overdraft rate is guaranteed to be offered to a borrower by the bank e.g. if it�s part of a government scheme, or whether the rate may vary dependent on the applicant�s circumstances.
  * EAR `string`: EAR means Effective Annual Rate and/or Equivalent Annual Rate (frequently used interchangeably), being the actual annual interest rate of an Overdraft.
  * Identification `string`: Unique and unambiguous identification of a  Tier Band for a overdraft.
  * Notes `array`: Optional additional notes to supplement the Tier/band details
    * items `string`
  * OverdraftFeesCharges `array`
    * items [OBOverdraftFeesCharges1](#oboverdraftfeescharges1)
  * OverdraftInterestChargingCoverage [OBTierBandType1Code](#obtierbandtype1code)
  * TierValueMax `string`: Maximum value of Overdraft Tier/Band
  * TierValueMin **required** `string`: Minimum value of Overdraft Tier/Band

### OBOverdraftTierbandSet1
* OBOverdraftTierbandSet1 `object`: Tier band set details
  * AuthorisedIndicator `boolean`: Indicates if the Overdraft is authorised (Y) or unauthorised (N)
  * BufferAmount `string`: When a customer exceeds their credit limit, a financial institution will not charge the customer unauthorised overdraft charges if they do not exceed by more than the buffer amount. Note: Authorised overdraft charges may still apply.
  * Identification `string`: Unique and unambiguous identification of a  Tier Band for a overdraft product.
  * Notes `array`: Optional additional notes to supplement the overdraft Tier Band Set details
    * items `string`
  * OverdraftFeesCharges `array`
    * items [OBOverdraftFeesCharges1](#oboverdraftfeescharges1)
  * OverdraftTierBand **required** `array`
    * items [OBOverdraftTierBand1](#oboverdrafttierband1)
  * OverdraftType [OBOverdraftType1Code](#oboverdrafttype1code)
  * TierBandMethod **required** [OBTierBandType1Code](#obtierbandtype1code)

### OBOverdraftType1Code
* OBOverdraftType1Code `string` (values: OVCO, OVOD, OVOT): An overdraft can either be 'committed' which means that the facility cannot be withdrawn without reasonable notification before it's agreed end date, or 'on demand' which means that the financial institution can demand repayment at any point in time.

### OBPCAData1
* OBPCAData1 `object`
  * CreditInterest [OBCreditInterest1](#obcreditinterest1)
  * OtherFeesCharges [OBOtherFeesAndCharges1](#obotherfeesandcharges1)
  * Overdraft [OBOverdraft1](#oboverdraft1)
  * ProductDetails [OBPCAProductDetails1](#obpcaproductdetails1)

### OBPCAProductDetails1
* OBPCAProductDetails1 `object`
  * MonthlyMaximumCharge `string`: The maximum relevant charges that could accrue as defined fully in Part 7 of the CMA order
  * Notes `array`: Optional additional notes to supplement the Core product details
    * items `string`
  * Segment `array`: Market segmentation is a marketing term referring to the aggregating of prospective buyers into groups, or segments, that have common needs and respond similarly to a marketing action. Market segmentation enables companies to target different categories of consumers who perceive the full value of certain products and services differently from one another.  Read more: Market Segmentation http://www.investopedia.com/terms/m/marketsegmentation.asp#ixzz4gfEEalTd  With respect to PCA products, they are segmented in relation to different markets that they wish to focus on.
    * items [OBPCAProductSegment1Code](#obpcaproductsegment1code)

### OBPCAProductSegment1Code
* OBPCAProductSegment1Code `string` (values: Basic, BenefitAndReward, CreditInterest, Cashback, General, Graduate, Other, Overdraft, Packaged, Premium, Reward, Student, YoungAdult, Youth)

### OBParty2
* OBParty2 `object`
  * AccountRole `string`: A party’s role with respect to the related account.
  * Address `array`: Postal address of a party.
    * items [OBPostalAddress8](#obpostaladdress8)
  * BeneficialOwnership `boolean`: A flag to indicate a party's beneficial ownership of the related account.
  * EmailAddress `string`: Address for electronic mail (e-mail).
  * FullLegalName `string`: Specifies a character string with a maximum length of 350 characters.
  * LegalStructure `string`: Legal standing of the party.
  * Mobile `string`: Collection of information that identifies a mobile phone number, as defined by telecom services.
  * Name `string`: Name by which a party is known and which is usually used to identify that party.
  * PartyId **required** `string`: A unique and immutable identifier used to identify the customer resource. This identifier has no meaning to the account owner.
  * PartyNumber `string`: Number assigned by an agent to identify its customer.
  * PartyType [OBExternalPartyType1Code](#obexternalpartytype1code)
  * Phone `string`: Collection of information that identifies a phone number, as defined by telecom services.
  * Relationships [OBPartyRelationships1](#obpartyrelationships1)

### OBPartyRelationships1
* OBPartyRelationships1 `object`
  * Account [OBRelationship1](#obrelationship1)

### OBPeriod1Code
* OBPeriod1Code `string` (values: PACT, PDAY, PHYR, PMTH, PQTR, PWEK, PYER): The unit of period (days, weeks, months etc.) of the promotional length

### OBPostalAddress6
* OBPostalAddress6 `object`: Information that locates and identifies a specific address, as defined by postal services.
  * AddressLine `array`: Information that locates and identifies a specific address, as defined by postal services, presented in free format text.
    * items `string`
  * AddressType [OBAddressTypeCode](#obaddresstypecode)
  * BuildingNumber `string`: Number that identifies the position of a building on a street.
  * Country `string`: Nation with its own government.
  * CountrySubDivision `string`: Identifies a subdivision of a country such as state, region, county.
  * Department `string`: Identification of a division of a large organisation or building.
  * PostCode `string`: Identifier consisting of a group of letters and/or numbers that is added to a postal address to assist the sorting of mail.
  * StreetName `string`: Name of a street or thoroughfare.
  * SubDepartment `string`: Identification of a sub-division of a large organisation or building.
  * TownName `string`: Name of a built-up area, with defined boundaries, and a local government.

### OBPostalAddress8
* OBPostalAddress8 `object`
  * AddressLine `array`: Information that locates and identifies a specific address, as defined by postal services, that is presented in free format text.
    * items `string`
  * AddressType [OBAddressTypeCode](#obaddresstypecode)
  * BuildingNumber `string`: Number that identifies the position of a building on a street.
  * Country **required** `string`: Nation with its own government, occupying a particular territory.
  * CountrySubDivision `string`: Identifies a subdivision of a country eg, state, region, county.
  * PostCode `string`: Identifier consisting of a group of letters and/or numbers that is added to a postal address to assist the sorting of mail.
  * StreetName `string`: Name of a street or thoroughfare.
  * TownName `string`: Name of a built-up area, with defined boundaries, and a local government.

### OBProduct2
* OBProduct2 `object`: Product details associated with the Account
  * AccountId **required** `string`: A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.
  * BCA [OBBCAData1](#obbcadata1)
  * MarketingStateId `string`: Unique and unambiguous identification of a  Product Marketing State.
  * OtherProductType [OBOtherProductType1](#obotherproducttype1)
  * PCA [OBPCAData1](#obpcadata1)
  * ProductId `string`: The unique ID that has been internally assigned by the financial institution to each of the current account banking products they market to their retail and/or small to medium enterprise (SME) customers.
  * ProductName `string`: The name of the Product used for marketing purposes from a customer perspective. I.e. what the customer would recognise.
  * ProductType **required** [OBExternalProductType1Code](#obexternalproducttype1code)
  * SecondaryProductId `string`: Any secondary Identification which  supports Product Identifier to uniquely identify the current account banking products.

### OBReadAccount5
* OBReadAccount5 `object`
  * Data **required** [OBReadDataAccount5](#obreaddataaccount5)
  * Links [Links](#links)
  * Meta [Meta](#meta)

### OBReadBalance1
* OBReadBalance1 `object`
  * Data **required** [OBReadDataBalance1](#obreaddatabalance1)
  * Links **required** [Links](#links)
  * Meta **required** [Meta](#meta)

### OBReadBeneficiary5
* OBReadBeneficiary5 `object`
  * Data **required** [OBReadDataBeneficiary5](#obreaddatabeneficiary5)
  * Links [Links](#links)
  * Meta [Meta](#meta)

### OBReadConsent1
* OBReadConsent1 `object`
  * Data **required** [OBReadData1](#obreaddata1)
  * Risk **required** [OBRisk2](#obrisk2)

### OBReadConsentResponse1
* OBReadConsentResponse1 `object`
  * Data **required** [OBReadDataConsentResponse1](#obreaddataconsentresponse1)
  * Links **required** [Links](#links)
  * Meta **required** [Meta](#meta)
  * Risk **required** [OBRisk2](#obrisk2)

### OBReadData1
* OBReadData1 `object`
  * ExpirationDateTime `string`: Specified date and time the permissions will expire. If this is not populated, the permissions will be open ended. All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00
  * Permissions **required** `array`: Specifies the Open Banking account access data types. This is a list of the data clusters being consented by the PSU, and requested for authorisation with the ASPSP.
    * items [OBExternalPermissions1Code](#obexternalpermissions1code)
  * TransactionFromDateTime `string`: Specified start date and time for the transaction query period. If this is not populated, the start date will be open ended, and data will be returned from the earliest available transaction. All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00
  * TransactionToDateTime `string`: Specified end date and time for the transaction query period. If this is not populated, the end date will be open ended, and data will be returned to the latest available transaction. All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00

### OBReadDataAccount5
* OBReadDataAccount5 `object`
  * Account `array`: Unambiguous identification of the account to which credit and debit entries are made.
    * items [OBAccount6](#obaccount6)

### OBReadDataBalance1
* OBReadDataBalance1 `object`
  * Balance **required** `array`: Set of elements used to define the balance details.
    * items [OBCashBalance1](#obcashbalance1)

### OBReadDataBeneficiary5
* OBReadDataBeneficiary5 `object`
  * Beneficiary `array`
    * items [OBBeneficiary5](#obbeneficiary5)

### OBReadDataConsentResponse1
* OBReadDataConsentResponse1 `object`
  * ConsentId **required** `string`: Unique identification as assigned to identify the account access consent resource.
  * CreationDateTime **required** `string`: Date and time at which the resource was created. All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00
  * ExpirationDateTime `string`: Specified date and time the permissions will expire. If this is not populated, the permissions will be open ended. All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00
  * Permissions **required** `array`: Specifies the Open Banking account access data types. This is a list of the data clusters being consented by the PSU, and requested for authorisation with the ASPSP.
    * items [OBExternalPermissions1Code](#obexternalpermissions1code)
  * Status **required** [OBExternalRequestStatus1Code](#obexternalrequeststatus1code)
  * StatusUpdateDateTime **required** `string`: Date and time at which the resource status was updated. All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00
  * TransactionFromDateTime `string`: Specified start date and time for the transaction query period. If this is not populated, the start date will be open ended, and data will be returned from the earliest available transaction. All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00
  * TransactionToDateTime `string`: Specified end date and time for the transaction query period. If this is not populated, the end date will be open ended, and data will be returned to the latest available transaction. All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00

### OBReadDataDirectDebit2
* OBReadDataDirectDebit2 `object`
  * DirectDebit `array`: Account to or from which a cash entry is made.
    * items [OBDirectDebit2](#obdirectdebit2)

### OBReadDataOffer1
* OBReadDataOffer1 `object`
  * Offer `array`
    * items [OBOffer1](#oboffer1)

### OBReadDataParty2
* OBReadDataParty2 `object`
  * Party [OBParty2](#obparty2)

### OBReadDataParty3
* OBReadDataParty3 `object`
  * Party `array`
    * items [OBParty2](#obparty2)

### OBReadDataProduct2
* OBReadDataProduct2 `object`: Aligning with the read write specs structure.
  * Product `array`
    * items [OBProduct2](#obproduct2)

### OBReadDataScheduledPayment3
* OBReadDataScheduledPayment3 `object`
  * ScheduledPayment `array`
    * items [OBScheduledPayment3](#obscheduledpayment3)

### OBReadDataStandingOrder5
* OBReadDataStandingOrder5 `object`
  * StandingOrder `array`
    * items [OBStandingOrder5](#obstandingorder5)

### OBReadDataStatement2
* OBReadDataStatement2 `object`
  * Statement `array`: Provides further details on a statement resource.
    * items [OBStatement2](#obstatement2)

### OBReadDataTransaction6
* OBReadDataTransaction6 `object`
  * Transaction `array`: Provides further details on an entry in the report.
    * items [OBTransaction6](#obtransaction6)

### OBReadDirectDebit2
* OBReadDirectDebit2 `object`
  * Data **required** [OBReadDataDirectDebit2](#obreaddatadirectdebit2)
  * Links [Links](#links)
  * Meta [Meta](#meta)

### OBReadOffer1
* OBReadOffer1 `object`
  * Data **required** [OBReadDataOffer1](#obreaddataoffer1)
  * Links [Links](#links)
  * Meta [Meta](#meta)

### OBReadParty2
* OBReadParty2 `object`
  * Data **required** [OBReadDataParty2](#obreaddataparty2)
  * Links [Links](#links)
  * Meta [Meta](#meta)

### OBReadParty3
* OBReadParty3 `object`
  * Data **required** [OBReadDataParty3](#obreaddataparty3)
  * Links [Links](#links)
  * Meta [Meta](#meta)

### OBReadProduct2
* OBReadProduct2 `object`: Product details of Other Product which is not avaiable in the standard list
  * Data **required** [OBReadDataProduct2](#obreaddataproduct2)
  * Links [Links](#links)
  * Meta [Meta](#meta)

### OBReadScheduledPayment3
* OBReadScheduledPayment3 `object`
  * Data **required** [OBReadDataScheduledPayment3](#obreaddatascheduledpayment3)
  * Links [Links](#links)
  * Meta [Meta](#meta)

### OBReadStandingOrder6
* OBReadStandingOrder6 `object`
  * Data **required** [OBReadDataStandingOrder5](#obreaddatastandingorder5)
  * Links [Links](#links)
  * Meta [Meta](#meta)

### OBReadStatement2
* OBReadStatement2 `object`
  * Data **required** [OBReadDataStatement2](#obreaddatastatement2)
  * Links [Links](#links)
  * Meta [Meta](#meta)

### OBReadTransaction6
* OBReadTransaction6 `object`
  * Data **required** [OBReadDataTransaction6](#obreaddatatransaction6)
  * Links [Links](#links)
  * Meta [Meta](#meta)

### OBRelationship1
* OBRelationship1 `object`
  * Id **required** `string`: Unique identification as assigned by the ASPSP to uniquely identify the related resource.
  * Related **required** `string`: Absolute URI to the related resource.

### OBRepayment1
* OBRepayment1 `object`: Repayment details of the Loan product
  * AmountType [OBRepaymentAmountType1Code](#obrepaymentamounttype1code)
  * Notes `array`: Optional additional notes to supplement the Repayment
    * items `string`
  * OtherAmountType [OBOtherCodeType1](#obothercodetype1)
  * OtherRepaymentFrequency [OBOtherCodeType1](#obothercodetype1)
  * OtherRepaymentType [OBOtherCodeType1](#obothercodetype1)
  * RepaymentFeeCharges [OBRepaymentFeeCharges1](#obrepaymentfeecharges1)
  * RepaymentFrequency [OBRepaymentFrequency1Code](#obrepaymentfrequency1code)
  * RepaymentHoliday `array`
    * items [OBRepaymentHoliday1](#obrepaymentholiday1)
  * RepaymentType [OBRepaymentType1Code](#obrepaymenttype1code)

### OBRepaymentAmountType1Code
* OBRepaymentAmountType1Code `string` (values: RABD, RABL, RACI, RAFC, RAIO, RALT, USOT): The repayment is for paying just the interest only or both interest and capital or bullet amount or balance to date etc

### OBRepaymentFeeChargeCap1
* OBRepaymentFeeChargeCap1 `object`: RepaymentFeeChargeCap sets daily, weekly, monthly, yearly limits on the fees that are charged
  * CappingPeriod [OBPeriod1Code](#obperiod1code)
  * FeeCapAmount `string`: Cap amount charged for a fee/charge (where it is charged in terms of an amount rather than a rate)
  * FeeCapOccurrence `integer`: Fee/Charges are captured dependent on the number of occurrences rather than capped at a particular amount
  * FeeType **required** `array`
    * items [OBFeeType1Code](#obfeetype1code)
  * MinMaxType **required** [OBMinMaxType1Code](#obminmaxtype1code)
  * Notes `array`: Free text for adding extra details for fee charge cap
    * items `string`
  * OtherFeeType `array`
    * items [OBOtherCodeType1](#obothercodetype1)

### OBRepaymentFeeChargeDetail1
* OBRepaymentFeeChargeDetail1 `object`: Details about specific fees/charges that are applied for repayment
  * ApplicationFrequency **required** [OBFeeFrequency1Code](#obfeefrequency1code)
  * CalculationFrequency **required** [OBFeeFrequency1Code](#obfeefrequency1code)
  * FeeAmount `string`: Fee Amount charged for a fee/charge (where it is charged in terms of an amount rather than a rate)
  * FeeRate `string`: Rate charged for Fee/Charge (where it is charged in terms of a rate rather than an amount)
  * FeeRateType [OBInterestRateType1Code](#obinterestratetype1code)
  * FeeType **required** [OBFeeType1Code](#obfeetype1code)
  * NegotiableIndicator `boolean`: Fee/charge which is usually negotiable rather than a fixed amount
  * Notes `array`: Optional additional notes to supplement the fee/charge details
    * items `string`
  * OtherApplicationFrequency [OBOtherCodeType1](#obothercodetype1)
  * OtherCalculationFrequency [OBOtherCodeType1](#obothercodetype1)
  * OtherFeeRateType [OBOtherCodeType1](#obothercodetype1)
  * OtherFeeType [OBOtherFeeChargeDetailType](#obotherfeechargedetailtype)

### OBRepaymentFeeCharges1
* OBRepaymentFeeCharges1 `object`: Applicable fee/charges for repayment such as prepayment, full early repayment or non repayment.
  * RepaymentFeeChargeCap `array`
    * items [OBRepaymentFeeChargeCap1](#obrepaymentfeechargecap1)
  * RepaymentFeeChargeDetail **required** `array`
    * items [OBRepaymentFeeChargeDetail1](#obrepaymentfeechargedetail1)

### OBRepaymentFrequency1Code
* OBRepaymentFrequency1Code `string` (values: SMDA, SMFL, SMFO, SMHY, SMMO, SMOT, SMQU, SMWE, SMYE): Repayment frequency

### OBRepaymentHoliday1
* OBRepaymentHoliday1 `object`: Details of capital repayment holiday if any
  * MaxHolidayLength `integer`: The maximum length/duration of a Repayment Holiday
  * MaxHolidayPeriod [OBPeriod1Code](#obperiod1code)
  * Notes `array`: Free text for adding details for repayment holiday
    * items `string`

### OBRepaymentType1Code
* OBRepaymentType1Code `string` (values: USBA, USBU, USCI, USCS, USER, USFA, USFB, USFI, USIO, USOT, USPF, USRW, USSL): Repayment type

### OBRisk2
* OBRisk2 `object`: The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Account Info.

### OBScheduledPayment3
* OBScheduledPayment3 `object`
  * AccountId **required** `string`: A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.
  * CreditorAccount [OBCashAccount5](#obcashaccount5)
  * CreditorAgent [OBBranchAndFinancialInstitutionIdentification5](#obbranchandfinancialinstitutionidentification5)
  * DebtorReference `string`: A reference value provided by the PSU to the PISP while setting up the scheduled payment.
  * InstructedAmount **required** [OBActiveOrHistoricCurrencyAndAmount](#obactiveorhistoriccurrencyandamount)
  * Reference `string`: Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.
  * ScheduledPaymentDateTime **required** `string`: The date on which the scheduled payment will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format.
  * ScheduledPaymentId `string`: A unique and immutable identifier used to identify the scheduled payment resource. This identifier has no meaning to the account owner.
  * ScheduledType **required** [OBExternalScheduleType1Code](#obexternalscheduletype1code)

### OBStandingOrder5
* OBStandingOrder5 `object`
  * AccountId **required** `string`: A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.
  * CreditorAccount [OBCashAccount5](#obcashaccount5)
  * CreditorAgent [OBBranchAndFinancialInstitutionIdentification5](#obbranchandfinancialinstitutionidentification5)
  * FinalPaymentAmount [OBActiveOrHistoricCurrencyAndAmount](#obactiveorhistoriccurrencyandamount)
  * FinalPaymentDateTime `string`: The date on which the final payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format.
  * FirstPaymentAmount [OBActiveOrHistoricCurrencyAndAmount](#obactiveorhistoriccurrencyandamount)
  * FirstPaymentDateTime `string`: The date on which the first payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format.
  * Frequency **required** `string`: Individual Definitions:
  * LastPaymentAmount [OBActiveOrHistoricCurrencyAndAmount](#obactiveorhistoriccurrencyandamount)
  * LastPaymentDateTime `string`: The date on which the last (most recent) payment for a Standing Order schedule was made.All dates in the JSON payloads are represented in ISO 8601 date-time format.
  * NextPaymentAmount [OBActiveOrHistoricCurrencyAndAmount](#obactiveorhistoriccurrencyandamount)
  * NextPaymentDateTime `string`: The date on which the next payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format.
  * NumberOfPayments `string`: Number of the payments that will be made in completing this frequency sequence including any executed since the sequence start date.
  * Reference `string`: Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.
  * StandingOrderId `string`: A unique and immutable identifier used to identify the standing order resource. This identifier has no meaning to the account owner.
  * StandingOrderStatusCode [OBExternalStandingOrderStatus1Code](#obexternalstandingorderstatus1code)
  * SupplementaryData [OBSupplementaryData1](#obsupplementarydata1)

### OBStatement2
* OBStatement2 `object`: Provides further details on a statement resource.
  * AccountId **required** `string`: A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.
  * CreationDateTime **required** `string`: Date and time at which the statement period starts.All dates in the JSON payloads are represented in ISO 8601 date-time format.
  * EndDateTime **required** `string`: Date and time at which the statement period starts.All dates in the JSON payloads are represented in ISO 8601 date-time format.
  * StartDateTime **required** `string`: Date and time at which the statement period starts.All dates in the JSON payloads are represented in ISO 8601 date-time format.
  * StatementAmount `array`: Set of elements used to provide details of a generic amount for the statement resource.
    * items [OBStatementAmount1](#obstatementamount1)
  * StatementBenefit `array`: Set of elements used to provide details of a benefit or reward amount for the statement resource.
    * items [OBStatementBenefit1](#obstatementbenefit1)
  * StatementDateTime `array`: Set of elements used to provide details of a generic date time for the statement resource.
    * items [OBStatementDateTime1](#obstatementdatetime1)
  * StatementDescription `array`: Other descriptions that may be available for the statement resource.
    * items `string`
  * StatementFee `array`: Set of elements used to provide details of a fee for the statement resource.
    * items [OBStatementFee2](#obstatementfee2)
  * StatementId `string`: Unique identifier for the statement resource within an servicing institution. This identifier is both unique and immutable.
  * StatementInterest `array`: Set of elements used to provide details of a generic interest amount related to the statement resource.
    * items [OBStatementInterest2](#obstatementinterest2)
  * StatementRate `array`: Set of elements used to provide details of a generic rate related to the statement resource.
    * items [OBStatementRate1](#obstatementrate1)
  * StatementReference `string`: Unique reference for the statement. This reference may be optionally populated if available.
  * StatementValue `array`: Set of elements used to provide details of a generic number value related to the statement resource.
    * items [OBStatementValue1](#obstatementvalue1)
  * Type **required** [OBExternalStatementType1Code](#obexternalstatementtype1code)

### OBStatementAmount1
* OBStatementAmount1 `object`: Set of elements used to provide details of a generic amount for the statement resource.
  * Amount **required** [OBActiveOrHistoricCurrencyAndAmount](#obactiveorhistoriccurrencyandamount)
  * CreditDebitIndicator **required** [OBCreditDebitCode](#obcreditdebitcode)
  * Type **required** `string`: Amount type, in a coded form.

### OBStatementBenefit1
* OBStatementBenefit1 `object`: Set of elements used to provide details of a benefit or reward amount for the statement resource.
  * Amount **required** [OBActiveOrHistoricCurrencyAndAmount](#obactiveorhistoriccurrencyandamount)
  * Type **required** `string`: Benefit type, in a coded form.

### OBStatementDateTime1
* OBStatementDateTime1 `object`: Set of elements used to provide details of a generic date time for the statement resource.
  * DateTime **required** `string`: Date and time associated with the date time type.All dates in the JSON payloads are represented in ISO 8601 date-time format.
  * Type **required** `string`: Date time type, in a coded form.

### OBStatementFee2
* OBStatementFee2 `object`: Set of elements used to provide details of a fee for the statement resource.
  * Amount **required** [OBActiveOrHistoricCurrencyAndAmount](#obactiveorhistoriccurrencyandamount)
  * CreditDebitIndicator **required** [OBCreditDebitCode](#obcreditdebitcode)
  * Description `string`: Description that may be available for the statement fee.
  * Frequency `string`: How frequently the fee is applied to the Account.
  * Rate `number`: Rate charged for Statement Fee (where it is charged in terms of a rate rather than an amount)
  * RateType `string`: Description that may be available for the statement fee rate type.
  * Type **required** `string`: Fee type, in a coded form.

### OBStatementInterest2
* OBStatementInterest2 `object`: Set of elements used to provide details of a generic interest amount related to the statement resource.
  * Amount **required** [OBActiveOrHistoricCurrencyAndAmount](#obactiveorhistoriccurrencyandamount)
  * CreditDebitIndicator **required** [OBCreditDebitCode](#obcreditdebitcode)
  * Description `string`: Description that may be available for the statement interest.
  * Frequency `string`: Specifies the statement fee type requested
  * Rate `number`: Field representing a percentage (e.g. 0.05 represents 5% and 0.9525 represents 95.25%). Note the number of decimal places may vary.
  * RateType `string`: Description that may be available for the statement Interest rate type.
  * Type **required** `string`: Interest amount type, in a coded form.

### OBStatementRate1
* OBStatementRate1 `object`: Set of elements used to provide details of a generic rate related to the statement resource.
  * Rate **required** `string`: Rate associated with the statement rate type.
  * Type **required** `string`: Statement rate type, in a coded form.

### OBStatementValue1
* OBStatementValue1 `object`: Set of elements used to provide details of a generic number value related to the statement resource.
  * Type **required** `string`: Statement value type, in a coded form.
  * Value **required** `string`: Value associated with the statement value type.

### OBSupplementaryData1
* OBSupplementaryData1 `object`: Additional information that can not be captured in the structured fields and/or any other specific block.

### OBTariffType1Code
* OBTariffType1Code `string` (values: TTEL, TTMX, TTOT): TariffType which defines the fee and charges.

### OBTierBand1
* OBTierBand1 `object`: Tier Band Details
  * AER **required** `string`: The annual equivalent rate (AER) is interest that is calculated under the assumption that any interest paid is combined with the original balance and the next interest payment will be based on the slightly higher account balance. Overall, this means that interest can be compounded several times in a year depending on the number of times that interest payments are made.  Read more: Annual Equivalent Rate (AER) http://www.investopedia.com/terms/a/aer.asp#ixzz4gfR7IO1A
  * ApplicationFrequency **required** [OBFrequency1Code](#obfrequency1code)
  * BankInterestRate `string`: Bank Interest for the product
  * BankInterestRateType [OBInterestRateType1Code](#obinterestratetype1code)
  * CalculationFrequency [OBFrequency1Code](#obfrequency1code)
  * DepositInterestAppliedCoverage [OBTierBandType1Code](#obtierbandtype1code)
  * FixedVariableInterestRateType **required** [OBInterestFixedVariableType1Code](#obinterestfixedvariabletype1code)
  * Identification `string`: Unique and unambiguous identification of a  Tier Band for the Product.
  * Notes `array`: Optional additional notes to supplement the Tier Band details
    * items `string`
  * OtherApplicationFrequency [OBOtherCodeType1](#obothercodetype1)
  * OtherBankInterestType [OBOtherCodeType1](#obothercodetype1)
  * OtherCalculationFrequency [OBOtherCodeType1](#obothercodetype1)
  * TierValueMaximum `string`: Maximum deposit value for which the credit interest tier applies.
  * TierValueMinimum **required** `string`: Minimum deposit value for which the credit interest tier applies.

### OBTierBandSet1
* OBTierBandSet1 `object`: The group of tiers or bands for which credit interest can be applied.
  * CalculationMethod [OBInterestCalculationMethod1Code](#obinterestcalculationmethod1code)
  * Destination **required** [OBInterestDestination1Code](#obinterestdestination1code)
  * Notes `array`: Optional additional notes to supplement the Tier Band Set details
    * items `string`
  * OtherCalculationMethod [OBOtherCodeType1](#obothercodetype1)
  * OtherDestination [OBOtherCodeType1](#obothercodetype1)
  * TierBand **required** `array`: Tier Band Details
    * items [OBTierBand1](#obtierband1)
  * TierBandMethod **required** [OBTierBandType1Code](#obtierbandtype1code)

### OBTierBandType1Code
* OBTierBandType1Code `string` (values: INBA, INTI, INWH): The methodology of how credit interest is paid/applied. It can be:- 1. Banded Interest rates are banded. i.e. Increasing rate on whole balance as balance increases. 2. Tiered Interest rates are tiered. i.e. increasing rate for each tier as balance increases, but interest paid on tier fixed for that tier and not on whole balance. 3. Whole The same interest rate is applied irrespective of the product holder's account balance

### OBTransaction6
* OBTransaction6 `object`: Provides further details on an entry in the report.
  * AccountId **required** `string`: A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.
  * AddressLine `string`: Information that locates and identifies a specific address for a transaction entry, that is presented in free format text
  * Amount **required** [OBActiveOrHistoricCurrencyAndAmount](#obactiveorhistoriccurrencyandamount)
  * Balance [OBTransactionCashBalance](#obtransactioncashbalance)
  * BankTransactionCode [OBBankTransactionCodeStructure1](#obbanktransactioncodestructure1)
  * BookingDateTime **required** `string`: Date and time when a transaction entry is posted to an account on the account servicer's books.
  * CardInstrument [OBTransactionCardInstrument1](#obtransactioncardinstrument1)
  * ChargeAmount [OBActiveOrHistoricCurrencyAndAmount](#obactiveorhistoriccurrencyandamount)
  * CreditDebitIndicator **required** [OBCreditDebitCode](#obcreditdebitcode)
  * CreditorAccount [OBCashAccount6](#obcashaccount6)
  * CreditorAgent [OBBranchAndFinancialInstitutionIdentification6](#obbranchandfinancialinstitutionidentification6)
  * CurrencyExchange [OBCurrencyExchange5](#obcurrencyexchange5)
  * DebtorAccount [OBCashAccount6](#obcashaccount6)
  * DebtorAgent [OBBranchAndFinancialInstitutionIdentification6](#obbranchandfinancialinstitutionidentification6)
  * MerchantDetails [OBMerchantDetails1](#obmerchantdetails1)
  * ProprietaryBankTransactionCode [ProprietaryBankTransactionCodeStructure1](#proprietarybanktransactioncodestructure1)
  * StatementReference `array`: Unique reference for the statement. This reference may be optionally populated if available.
    * items `string`
  * Status **required** [OBEntryStatus1Code](#obentrystatus1code)
  * SupplementaryData [OBSupplementaryData1](#obsupplementarydata1)
  * TransactionId `string`: Unique identifier for the transaction within an servicing institution. This identifier is both unique and immutable.
  * TransactionInformation `string`: Further details of the transaction.
  * TransactionMutability [OBTransactionMutability1Code](#obtransactionmutability1code)
  * TransactionReference `string`: Unique reference for the transaction. This reference is optionally populated, and may as an example be the FPID in the Faster Payments context.
  * ValueDateTime `string`: Date and time at which assets become available to the account owner in case of a credit entry, or cease to be available to the account owner in case of a debit transaction entry.

### OBTransactionCardInstrument1
* OBTransactionCardInstrument1 `object`: Set of elements to describe the card instrument used in the transaction.
  * AuthorisationType [OBExternalCardAuthorisationType1Code](#obexternalcardauthorisationtype1code)
  * CardSchemeName **required** [OBExternalCardSchemeType1Code](#obexternalcardschemetype1code)
  * Identification `string`: Identification assigned by an institution to identify the card instrument used in the transaction. This identification is known by the account owner, and may be masked.
  * Name `string`: Name of the cardholder using the card instrument.

### OBTransactionCashBalance
* OBTransactionCashBalance `object`: Set of elements used to define the balance as a numerical representation of the net increases and decreases in an account after a transaction entry is applied to the account.
  * Amount **required** [OBActiveOrHistoricCurrencyAndAmount](#obactiveorhistoriccurrencyandamount)
  * CreditDebitIndicator **required** [OBCreditDebitCode](#obcreditdebitcode)
  * Type **required** [OBBalanceType1Code](#obbalancetype1code)

### OBTransactionMutability1Code
* OBTransactionMutability1Code `string` (values: Mutable, Immutable)

### ProprietaryBankTransactionCodeStructure1
* ProprietaryBankTransactionCodeStructure1 `object`: Set of elements to fully identify a proprietary bank transaction code.
  * Code **required** `string`: Proprietary bank transaction code to identify the underlying transaction.
  * Issuer `string`: Identification of the issuer of the proprietary bank transaction code.

### Sandbox
* Sandbox `object`: Sandbox model
  * sandboxId **required** `string`: Sandbox id
  * users `array`: List of users
    * items [SandboxUser](#sandboxuser)

### SandboxBankAccount
* SandboxBankAccount `object`: Sandbox bank account
  * info [SandboxBankAccountInfo](#sandboxbankaccountinfo)
  * beneficiaries `array`: List of account's beneficiaries
    * items [SandboxBeneficiary](#sandboxbeneficiary)
  * party [SandboxParty](#sandboxparty)
  * scheduledPayments `array`: List of account's scheduled payments
    * items [SandboxScheduledPayment](#sandboxscheduledpayment)
  * standingOrders `array`: List of account's standing orders
    * items [SandboxStandingOrder](#sandboxstandingorder)
  * statements `array`: List of account's statements
    * items [SandboxStatement](#sandboxstatement)
  * transactions `array`: List of account's transactions
    * items [SandboxTransaction](#sandboxtransaction)

### SandboxBankAccountInfo
* SandboxBankAccountInfo `object`: General account information
  * accountSubType **required** `string`: Account's sub-type (ChargeCard, CreditCard, CurrentAccount ...)
  * accountType **required** `string`: Account's type (Business, Personal)
  * alias `string`: Account's alias
  * availableBalance `number`: Account's available balance
  * currency **required** `string`: Currency (EUR, USD ...)
  * description `string`: Account's description
  * iban **required** `string`: Account's IBAN
  * ledgerBalance `number`: Account's ledger balance
  * openingDate `string`: Account's opening date

### SandboxBeneficiary
* SandboxBeneficiary `object`: Beneficiary information
  * name `string`: Beneficiary name

### SandboxCard
* SandboxCard `object`: Sandbox card
  * info [SandboxCardInfo](#sandboxcardinfo)
  * party [SandboxParty](#sandboxparty)
  * statements `array`: Card statements
    * items [SandboxStatement](#sandboxstatement)
  * transactions `array`: Card transactions
    * items [SandboxTransaction](#sandboxtransaction)

### SandboxCardInfo
* SandboxCardInfo `object`: Sandbox card information
  * availableBalance `number`: Available balance
  * description `string`: Description
  * expiration **required** `string`: Expiration date (05/2022)
  * holderName **required** `string`: Holder name
  * ledgerBalance `number`: Ledger balance
  * number **required** `string`: Card number
  * subType `string`: Sub type
  * type `string`: Type

### SandboxParty
* SandboxParty `object`: Connected party information
  * id `string`: Party id
  * name `string`: Name

### SandboxRequest
* SandboxRequest `object`: Request to create a new sandbox
  * sandboxId **required** `string`: Sandbox Id

### SandboxRetryCacheEntry
* SandboxRetryCacheEntry `object`: Keeps the number of calls without x-fapi-customer-ip-address header present
  * cacheKey `string`: Cache key
  * count `integer`: Number of retries ( up to 4 )
  * expirationTimestamp `string`: Expiration timestamp of the entry

### SandboxScheduledPayment
* SandboxScheduledPayment `object`: Scheduled payment information
  * amount `number`: Amount
  * description `string`: Scheduled payment's short description
  * executionDate `string`: Scheduled payment's execution date
  * senderReference `string`: Debtor / Sender reference

### SandboxStandingOrder
* SandboxStandingOrder `object`: Standing order information
  * amount `number`: Standing order amount
  * description `string`: Standing order short description
  * finalPaymentDate `string`: Standing order final collection date
  * firstPaymentDate `string`: Standing order first collection date
  * frequency **required** `string`: Standing order frequency
  * lastPaymentDate `string`: Standing order last executed payment date
  * nextPaymentDate `string`: Standing order next collection date
  * status `string`: Standing order status (Active, Inactive)

### SandboxStatement
* SandboxStatement `object`: Statement information
  * month `integer`: Statement month
  * number `string`: Statement number
  * year `integer`: Statement year

### SandboxTransaction
* SandboxTransaction `object`: Transaction information
  * accountingBalance `number`: Balance
  * amount `number`: Amount
  * bookingDateTime `string`: Booking date time
  * creditDebit `string`: Credit / Debit indicator
  * currency `string`: Currency (EUR, USD ...)
  * description `string`: Description
  * valueDateTime `string`: Valeur

### SandboxUser
* SandboxUser `object`: User data
  * accounts `array`: List of accounts
    * items [SandboxBankAccount](#sandboxbankaccount)
  * cards `array`: List of cards
    * items [SandboxCard](#sandboxcard)
  * retryCacheEntries `array`: Retry cache entries
    * items [SandboxRetryCacheEntry](#sandboxretrycacheentry)
  * userId `string`: Connected user id


