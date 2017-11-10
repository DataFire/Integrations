# @datafire/zuora

Client library for Zuora API Reference

## Installation and Usage
```bash
npm install --save datafire @datafire/zuora
```

```js
let datafire = require('datafire');
let zuora = require('@datafire/zuora').create();

zuora.GET_RevenueAutomationStartDate({}).then(data => {
  console.log(data);
})
```

## Description


# Introduction
Welcome to the reference for the Zuora REST API!

<a href="http://en.wikipedia.org/wiki/REST_API" target="_blank">REST</a> is a web-service protocol that lends itself to rapid development by using everyday HTTP and JSON technology.

The Zuora REST API provides a broad set of operations and resources that:

  * Enable Web Storefront integration from your website.
  * Support self-service subscriber sign-ups and account management.
  * Process revenue schedules through custom revenue rule models.
  * Enable manipulation of most objects in the Zuora Object Model.
  
  ## Endpoints
  
  The Zuora REST API is provided via the following endpoints.
  | Tenant              | Base URL for REST Endpoints |
  |-------------------------|-------------------------|
  |US Production | https://rest.zuora.com   |
  |US API Sandbox    | https://rest.apisandbox.zuora.com|
  |US Performance Test | https://rest.pt1.zuora.com |
  |EU Production | https://rest.eu.zuora.com |
  |EU Sandbox | https://rest.sandbox.eu.zuora.com |
  
  The production endpoint provides access to your live user data. The API Sandbox tenant is a good place to test your code without affecting real-world data. To use it, you must be provisioned with an API Sandbox tenant - your Zuora representative can help you if needed.
  
  ## Access to the API
  
  If you have a Zuora tenant, you already have access to the API.
  
  If you don't have a Zuora tenant, go to <a href="
https://www.zuora.com/resource/zuora-test-drive" target="_blank">https://www.zuora.com/resource/zuora-test-drive</a> and sign up for a Production Test Drive tenant. The tenant comes with seed data, such as a sample product catalog.

We recommend that you <a href="https://knowledgecenter.zuora.com/CF_Users_and_Administrators/A_Administrator_Settings/Manage_Users/Create_an_API_User" target="_blank">create an API user</a> specifically for making API calls. Don't log in to the Zuora UI with this account. Logging in to the UI enables a security feature that periodically expires the account's password, which may eventually cause authentication failures with the API. Note that a user role does not have write access to Zuora REST services unless it has the API Write Access permission as described in those instructions.


# API Changelog
You can find the <a href="https://community.zuora.com/t5/Developers/API-Changelog/gpm-p/18092" target="_blank">Changelog</a> of the API Reference in the Zuora Community.


# Authentication

## OAuth v2.0

Zuora recommends that you use OAuth v2.0 to authenticate to the Zuora REST API. Currently, OAuth is not available in every environment. See [Zuora Testing Environments](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/D_Zuora_Environments) for more information.

Authenticating via OAuth requires the following steps:
1. Create a Client
2. Generate a Token

### Create a Client

You must first [create an OAuth client](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/A_Administrator_Settings/Manage_Users#Create_an_OAuth_Client_for_a_User) in the Zuora UI. To do this, you must be an administrator of your Zuora tenant. This is a one-time operation. You will be provided with a Client ID and a Client Secret. Please note this information down, as it will be required for the next step.

### Generate a Token

After creating a client, you must make a call to obtain a bearer token using the [Generate an OAuth token](https://www.zuora.com/developer/api-reference/#operation/createToken) operation. This operation requires the following parameters:
- `client_id` - the Client ID displayed when you created the OAuth client in the previous step
- `client_secret` - the Client Secret displayed when you created the OAuth client in the previous step
- `grant_type` - must be set to `client_credentials`

**Note**: The Client ID and Client Secret mentioned above were displayed when you created the OAuth Client in the prior step. The [Generate an OAuth token](https://www.zuora.com/developer/api-reference/#operation/createToken) response specifies how long the bearer token is valid for. Call [Generate an OAuth token](https://www.zuora.com/developer/api-reference/#operation/createToken) again to generate a new bearer token.

For every subsequent API request, a valid bearer token must be provided in an HTTP header:

`Authorization: Bearer {bearer_token}`




## Other Supported Authentication Schemes

Zuora continues to support the following additional legacy means of authentication:

  * Use username and password. Include authentication with each request in the header: 
  
    * `apiAccessKeyId` 
    * `apiSecretAccessKey`
    * `entityId` or `entityName` (Only for [Zuora Multi-entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity "Multi-entity"). See "Entity Id and Entity Name" below for more information.)

  * Use an authorization cookie. The cookie authorizes the user to make calls to the REST API for the duration specified in  **Administration > Security Policies > Session timeout**. The cookie expiration time is reset with this duration after every call to the REST API. To obtain a cookie, call the REST  `connections` resource with the following API user information: 
  
    *   ID    
    *   password
    *   entity Id or entity name (Only for [Zuora Multi-entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity "Multi-entity"). See "Entity Id and Entity Name" below for more information.) 
    
  * For CORS-enabled APIs only: Include a 'single-use' token in the request header, which re-authenticates the user with each request. See below for more details.

### Entity Id and Entity Name

The `entityId` and `entityName` parameters are only used for [Zuora Multi-entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity "Zuora Multi-entity").


The  `entityId` and `entityName` parameters specify the Id and the [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name "Introduction to Entity and Entity Hierarchy") that you want to access, respectively. Note that you must have permission to access the entity. 

You can specify either the `entityId` or `entityName` parameter in the authentication to access and view an entity.

  * If both `entityId` and `entityName` are specified in the authentication, an error occurs. 
  * If neither `entityId` nor `entityName` is specified in the authentication, you will log in to the entity in which your user account is created. 
  

To get the entity Id and entity name, you can use the GET Entities REST call. For more information, see [API User Authentication](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/A_Overview_of_Multi-entity#API_User_Authentication "API User Authentication").
  
  ### Token Authentication for CORS-Enabled APIs
  
  The CORS mechanism enables REST API calls to Zuora to be made directly from your customer's browser, with all credit card and security information transmitted directly to Zuora. This minimizes your PCI compliance burden, allows you to implement advanced validation on your payment forms, and  makes your payment forms look just like any other part of your website.
  
For security reasons, instead of using cookies, an API request via CORS uses **tokens** for authentication.

The token method of authentication is only designed for use with requests that must originate from your customer's browser; **it should  not be considered a replacement to the existing cookie authentication** mechanism.

See [Zuora CORS REST](https://knowledgecenter.zuora.com/DC_Developers/REST_API/A_REST_basics/G_CORS_REST "Zuora CORS REST") for details on how CORS works and how you can begin to implement customer calls to the Zuora REST APIs. See  [HMAC Signatures](https://www.zuora.com/developer/api-reference/#operation/POSTHMACSignature "HMAC Signatures") for details on the HMAC method that returns the authentication token.

# Requests and Responses

## Request IDs 
As a general rule, when asked to supply a "key" for an account or subscription (accountKey, account-key, subscriptionKey, subscription-key), you can provide either the actual ID or  the number of the entity.

## HTTP Request Body

Most of the parameters and data accompanying your requests will be contained in the body of the HTTP request. 

The Zuora REST API accepts JSON in the HTTP request body. No other data format (e.g., XML) is supported.

### Data Type

([Actions](https://www.zuora.com/developer/api-reference/#tag/Actions) and CRUD operations only) We recommend that you do not specify the decimal values with quotation marks, commas, and spaces. Use characters of `+-0-9.eE`, for example, `5`, `1.9`, `-8.469`, and `7.7e2`. Also, Zuora does not convert currencies for decimal values.

## Testing a Request

Use a third party client, such as [curl](https://curl.haxx.se "curl"), [Postman](https://www.getpostman.com "Postman"), or [Advanced REST Client](https://advancedrestclient.com "Advanced REST Client"), to test the Zuora REST API.

You can test the Zuora REST API from the Zuora API Sandbox or Production tenants. If connecting to Production, bear in mind that you are working with your live production data, not sample data or test data.

## Testing with Credit Cards

Sooner or later it will probably be necessary to test some transactions that involve credit cards. For suggestions on how to handle this, see [Going Live With Your Payment Gateway](https://knowledgecenter.zuora.com/CB_Billing/M_Payment_Gateways/C_Managing_Payment_Gateways/B_Going_Live_Payment_Gateways#Testing_with_Credit_Cards "C_Zuora_User_Guides/A_Billing_and_Payments/M_Payment_Gateways/C_Managing_Payment_Gateways/B_Going_Live_Payment_Gateways#Testing_with_Credit_Cards"
).

## Concurrent Request Limits

Zuora enforces tenant-level concurrent request limits. See <a href="https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Policies/Concurrent_Request_Limits" target="_blank">Concurrent Request Limits</a> for more information.



## Error Handling

Responses and error codes are detailed in [Responses and errors](https://knowledgecenter.zuora.com/DC_Developers/REST_API/A_REST_basics/3_Responses_and_errors "Responses and errors").

# Pagination

When retrieving information (using GET methods), the optional `pageSize` query parameter sets the maximum number of rows to return in a response. The maximum is `40`; larger values are treated as `40`. If this value is empty or invalid, `pageSize` typically defaults to `10`.

The default value for the maximum number of rows retrieved can be overridden at the method level.

If more rows are available, the response will include a `nextPage` element, which contains a URL for requesting the next page.  If this value is not provided, no more rows are available. No "previous page" element is explicitly provided; to support backward paging, use the previous call.

## Array Size

For data items that are not paginated, the REST API supports arrays of up to 300 rows.  Thus, for instance, repeated pagination can retrieve thousands of customer accounts, but within any account an array of no more than 300 rate plans is returned.

# API Versions

The Zuora REST API are version controlled. Versioning ensures that Zuora REST API changes are backward compatible. Zuora uses a major and minor version nomenclature to manage changes. By specifying a version in a REST request, you can get expected responses regardless of future changes to the API.

## Major Version

The major version number of the REST API appears in the REST URL. Currently, Zuora only supports the **v1** major version. For example, `POST https://rest.zuora.com/v1/subscriptions`.

## Minor Version

Zuora uses minor versions for the REST API to control small changes. For example, a field in a REST method is deprecated and a new field is used to replace it. 

Some fields in the REST methods are supported as of minor versions. If a field is not noted with a minor version, this field is available for all minor versions. If a field is noted with a minor version, this field is in version control. You must specify the supported minor version in the request header to process without an error. 

If a field is in version control, it is either with a minimum minor version or a maximum minor version, or both of them. You can only use this field with the minor version between the minimum and the maximum minor versions. For example, the `invoiceCollect` field in the POST Subscription method is in version control and its maximum minor version is 189.0. You can only use this field with the minor version 189.0 or earlier.

If you specify a version number in the request header that is not supported, Zuora will use the minimum minor version of the REST API. In our REST API documentation, if a field or feature requires a minor version number, we note that in the field description.

You only need to specify the version number when you use the fields require a minor version. To specify the minor version, set the `zuora-version` parameter to the minor version number in the request header for the request call. For example, the `collect` field is in 196.0 minor version. If you want to use this field for the POST Subscription method, set the  `zuora-version` parameter to `196.0` in the request header. The `zuora-version` parameter is case sensitive.

For all the REST API fields, by default, if the minor version is not specified in the request header, Zuora will use the minimum minor version of the REST API to avoid breaking your integration. 

### Minor Version History

The supported minor versions are not serial. This section documents the changes made to each Zuora REST API minor version.

The following table lists the supported versions and the fields that have a Zuora REST API minor version.

| Fields         | Minor Version      | REST Methods    | Description |
|:--------|:--------|:--------|:--------|
| invoiceCollect | 189.0 and earlier  | [Create Subscription](https://www.zuora.com/developer/api-reference/#operation/POST_Subscription "Create Subscription"); [Update Subscription](https://www.zuora.com/developer/api-reference/#operation/PUT_Subscription "Update Subscription"); [Renew Subscription](https://www.zuora.com/developer/api-reference/#operation/PUT_RenewSubscription "Renew Subscription"); [Cancel Subscription](https://www.zuora.com/developer/api-reference/#operation/PUT_CancelSubscription "Cancel Subscription"); [Suspend Subscription](https://www.zuora.com/developer/api-reference/#operation/PUT_SuspendSubscription "Suspend Subscription"); [Resume Subscription](https://www.zuora.com/developer/api-reference/#operation/PUT_ResumeSubscription "Resume Subscription"); [Create Account](https://www.zuora.com/developer/api-reference/#operation/POST_Account "Create Account")|Generates an invoice and collects a payment for a subscription. |
| collect        | 196.0 and later    | [Create Subscription](https://www.zuora.com/developer/api-reference/#operation/POST_Subscription "Create Subscription"); [Update Subscription](https://www.zuora.com/developer/api-reference/#operation/PUT_Subscription "Update Subscription"); [Renew Subscription](https://www.zuora.com/developer/api-reference/#operation/PUT_RenewSubscription "Renew Subscription"); [Cancel Subscription](https://www.zuora.com/developer/api-reference/#operation/PUT_CancelSubscription "Cancel Subscription"); [Suspend Subscription](https://www.zuora.com/developer/api-reference/#operation/PUT_SuspendSubscription "Suspend Subscription"); [Resume Subscription](https://www.zuora.com/developer/api-reference/#operation/PUT_ResumeSubscription "Resume Subscription"); [Create Account](https://www.zuora.com/developer/api-reference/#operation/POST_Account "Create Account")|Collects an automatic payment for a subscription. |
| invoice | 196.0 and 207.0| [Create Subscription](https://www.zuora.com/developer/api-reference/#operation/POST_Subscription "Create Subscription"); [Update Subscription](https://www.zuora.com/developer/api-reference/#operation/PUT_Subscription "Update Subscription"); [Renew Subscription](https://www.zuora.com/developer/api-reference/#operation/PUT_RenewSubscription "Renew Subscription"); [Cancel Subscription](https://www.zuora.com/developer/api-reference/#operation/PUT_CancelSubscription "Cancel Subscription"); [Suspend Subscription](https://www.zuora.com/developer/api-reference/#operation/PUT_SuspendSubscription "Suspend Subscription"); [Resume Subscription](https://www.zuora.com/developer/api-reference/#operation/PUT_ResumeSubscription "Resume Subscription"); [Create Account](https://www.zuora.com/developer/api-reference/#operation/POST_Account "Create Account")|Generates an invoice for a subscription. |
| invoiceTargetDate | 196.0 and earlier  | [Preview Subscription](https://www.zuora.com/developer/api-reference/#operation/POST_SubscriptionPreview "Preview Subscription") |Date through which charges are calculated on the invoice, as `yyyy-mm-dd`. |
| invoiceTargetDate | 207.0 and earlier  | [Create Subscription](https://www.zuora.com/developer/api-reference/#operation/POST_Subscription "Create Subscription"); [Update Subscription](https://www.zuora.com/developer/api-reference/#operation/PUT_Subscription "Update Subscription"); [Renew Subscription](https://www.zuora.com/developer/api-reference/#operation/PUT_RenewSubscription "Renew Subscription"); [Cancel Subscription](https://www.zuora.com/developer/api-reference/#operation/PUT_CancelSubscription "Cancel Subscription"); [Suspend Subscription](https://www.zuora.com/developer/api-reference/#operation/PUT_SuspendSubscription "Suspend Subscription"); [Resume Subscription](https://www.zuora.com/developer/api-reference/#operation/PUT_ResumeSubscription "Resume Subscription"); [Create Account](https://www.zuora.com/developer/api-reference/#operation/POST_Account "Create Account")|Date through which charges are calculated on the invoice, as `yyyy-mm-dd`. |
| targetDate | 207.0 and later | [Preview Subscription](https://www.zuora.com/developer/api-reference/#operation/POST_SubscriptionPreview "Preview Subscription") |Date through which charges are calculated on the invoice, as `yyyy-mm-dd`. |
| targetDate | 211.0 and later | [Create Subscription](https://www.zuora.com/developer/api-reference/#operation/POST_Subscription "Create Subscription"); [Update Subscription](https://www.zuora.com/developer/api-reference/#operation/PUT_Subscription "Update Subscription"); [Renew Subscription](https://www.zuora.com/developer/api-reference/#operation/PUT_RenewSubscription "Renew Subscription"); [Cancel Subscription](https://www.zuora.com/developer/api-reference/#operation/PUT_CancelSubscription "Cancel Subscription"); [Suspend Subscription](https://www.zuora.com/developer/api-reference/#operation/PUT_SuspendSubscription "Suspend Subscription"); [Resume Subscription](https://www.zuora.com/developer/api-reference/#operation/PUT_ResumeSubscription "Resume Subscription"); [Create Account](https://www.zuora.com/developer/api-reference/#operation/POST_Account "Create Account")|Date through which charges are calculated on the invoice, as `yyyy-mm-dd`. |
| includeExisting DraftInvoiceItems | 196.0 and earlier| [Preview Subscription](https://www.zuora.com/developer/api-reference/#operation/POST_SubscriptionPreview "Preview Subscription"); [Update Subscription](https://www.zuora.com/developer/api-reference/#operation/PUT_Subscription "Update Subscription") | Specifies whether to include draft invoice items in subscription previews. Specify it to be `true` (default) to include draft invoice items in the preview result. Specify it to be `false` to excludes draft invoice items in the preview result. |
| includeExisting DraftDocItems | 207.0 and later  | [Preview Subscription](https://www.zuora.com/developer/api-reference/#operation/POST_SubscriptionPreview "Preview Subscription"); [Update Subscription](https://www.zuora.com/developer/api-reference/#operation/PUT_Subscription "Update Subscription") | Specifies whether to include draft invoice items in subscription previews. Specify it to be `true` (default) to include draft invoice items in the preview result. Specify it to be `false` to excludes draft invoice items in the preview result. |
| previewType | 196.0 and earlier| [Preview Subscription](https://www.zuora.com/developer/api-reference/#operation/POST_SubscriptionPreview "Preview Subscription"); [Update Subscription](https://www.zuora.com/developer/api-reference/#operation/PUT_Subscription "Update Subscription") | The type of preview you will receive. The possible values are `InvoiceItem`(default), `ChargeMetrics`, and `InvoiceItemChargeMetrics`. |
| previewType | 207.0 and later  | [Preview Subscription](https://www.zuora.com/developer/api-reference/#operation/POST_SubscriptionPreview "Preview Subscription"); [Update Subscription](https://www.zuora.com/developer/api-reference/#operation/PUT_Subscription "Update Subscription") | The type of preview you will receive. The possible values are `LegalDoc`(default), `ChargeMetrics`, and `LegalDocChargeMetrics`. |
| runBilling  | 211.0 and later  | [Create Subscription](https://www.zuora.com/developer/api-reference/#operation/POST_Subscription "Create Subscription"); [Update Subscription](https://www.zuora.com/developer/api-reference/#operation/PUT_Subscription "Update Subscription"); [Renew Subscription](https://www.zuora.com/developer/api-reference/#operation/PUT_RenewSubscription "Renew Subscription"); [Cancel Subscription](https://www.zuora.com/developer/api-reference/#operation/PUT_CancelSubscription "Cancel Subscription"); [Suspend Subscription](https://www.zuora.com/developer/api-reference/#operation/PUT_SuspendSubscription "Suspend Subscription"); [Resume Subscription](https://www.zuora.com/developer/api-reference/#operation/PUT_ResumeSubscription "Resume Subscription"); [Create Account](https://www.zuora.com/developer/api-reference/#operation/POST_Account "Create Account")|Generates an invoice or credit memo for a subscription. **Note:** Credit memos are only available if you have the Advanced AR Settlement feature enabled. |
| invoiceDate | 214.0 and earlier  | [Invoice and Collect](https://www.zuora.com/developer/api-reference/#operation/POST_TransactionInvoicePayment "Invoice and Collect") |Date that should appear on the invoice being generated, as `yyyy-mm-dd`. |
| invoiceTargetDate | 214.0 and earlier  | [Invoice and Collect](https://www.zuora.com/developer/api-reference/#operation/POST_TransactionInvoicePayment "Invoice and Collect") |Date through which to calculate charges on this account if an invoice is generated, as `yyyy-mm-dd`. |
| documentDate | 215.0 and later | [Invoice and Collect](https://www.zuora.com/developer/api-reference/#operation/POST_TransactionInvoicePayment "Invoice and Collect") |Date that should appear on the invoice and credit memo being generated, as `yyyy-mm-dd`. |
| targetDate | 215.0 and later | [Invoice and Collect](https://www.zuora.com/developer/api-reference/#operation/POST_TransactionInvoicePayment "Invoice and Collect") |Date through which to calculate charges on this account if an invoice or a credit memo is generated, as `yyyy-mm-dd`. |

#### Version 207.0 and Later

The response structure of the [Preview Subscription](https://www.zuora.com/developer/api-reference/#operation/POST_SubscriptionPreview "Preview Subscription") and [Update Subscription](https://www.zuora.com/developer/api-reference/#operation/PUT_Subscription "Update Subscription") methods are changed. The following invoice related response fields are moved to the invoice container:

  * amount
  * amountWithoutTax
  * taxAmount
  * invoiceItems
  * targetDate
  * chargeMetrics

# Zuora Object Model

The following diagram presents a high-level view of the key Zuora objects. Click the image to open it in a new tab to resize it.

<a href="https://www.zuora.com/wp-content/uploads/2017/01/ZuoraERD.jpeg" target="_blank"><img src="https://www.zuora.com/wp-content/uploads/2017/01/ZuoraERD.jpeg" alt="Zuora Object Model Diagram"></a>

You can use the [Describe object](https://www.zuora.com/developer/api-reference/#operation/GET_Describe) operation to list the fields of each Zuora object that is available in your tenant. When you call the operation, you must specify the API name of the Zuora object.

The following table provides the API name of each Zuora object:

| Object                                        | API Name                                   |
|-----------------------------------------------|--------------------------------------------|
| Account                                       | `Account`                                  |
| Accounting Code                               | `AccountingCode`                           |
| Accounting Period                             | `AccountingPeriod`                         |
| Amendment                                     | `Amendment`                                |
| Application Group                             | `ApplicationGroup`                         |
| Billing Run                                   | `BillingRun`                               |
| Contact                                       | `Contact`                                  |
| Contact Snapshot                              | `ContactSnapshot`                          |
| Credit Balance Adjustment                     | `CreditBalanceAdjustment`                  |
| Credit Memo                                   | `CreditMemo`                               |
| Credit Memo Application                       | `CreditMemoApplication`                    |
| Credit Memo Application Item                  | `CreditMemoApplicationItem`                |
| Credit Memo Item                              | `CreditMemoItem`                           |
| Credit Memo Part                              | `CreditMemoPart`                           |
| Credit Memo Part Item                         | `CreditMemoPartItem`                       |
| Credit Taxation Item                          | `CreditTaxationItem`                       |
| Custom Exchange Rate                          | `FXCustomRate`                             |
| Debit Memo                                    | `DebitMemo`                                |
| Debit Memo Item                               | `DebitMemoItem`                            |
| Debit Taxation Item                           | `DebitTaxationItem`                        |
| Discount Applied Metrics                      | `DiscountAppliedMetrics`                   |
| Entity                                        | `Tenant`                                   |
| Gateway Reconciliation Event                  | `PaymentGatewayReconciliationEventLog`     |
| Gateway Reconciliation Job                    | `PaymentReconciliationJob`                 |
| Gateway Reconciliation Log                    | `PaymentReconciliationLog`                 |
| Invoice                                       | `Invoice`                                  |
| Invoice Adjustment                            | `InvoiceAdjustment`                        |
| Invoice Item                                  | `InvoiceItem`                              |
| Invoice Item Adjustment                       | `InvoiceItemAdjustment`                    |
| Invoice Payment                               | `InvoicePayment`                           |
| Journal Entry                                 | `JournalEntry`                             |
| Journal Entry Item                            | `JournalEntryItem`                         |
| Journal Run                                   | `JournalRun`                               |
| Order                                         | `Order`                                    |
| Order Action                                  | `OrderAction`                              |
| Order MRR                                     | `OrderMrr`                                 |
| Order Quantity                                | `OrderQuantity`                            |
| Order TCB                                     | `OrderTcb`                                 |
| Order TCV                                     | `OrderTcv`                                 |
| Payment                                       | `Payment`                                  |
| Payment Application                           | `PaymentApplication`                       |
| Payment Application Item                      | `PaymentApplicationItem`                   |
| Payment Method                                | `PaymentMethod`                            |
| Payment Method Snapshot                       | `PaymentMethodSnapshot`                    |
| Payment Method Transaction Log                | `PaymentMethodTransactionLog`              |
| Payment Method Update                         | `UpdaterDetail`                            |
| Payment Part                                  | `PaymentPart`                              |
| Payment Part Item                             | `PaymentPartItem`                          |
| Payment Transaction Log                       | `PaymentTransactionLog`                    |
| Processed Usage                               | `ProcessedUsage`                           |
| Product                                       | `Product`                                  |
| Product Rate Plan                             | `ProductRatePlan`                          |
| Product Rate Plan Charge                      | `ProductRatePlanCharge`                    |
| Product Rate Plan Charge Tier                 | `ProductRatePlanChargeTier`                |
| Rate Plan                                     | `RatePlan`                                 |
| Rate Plan Charge                              | `RatePlanCharge`                           |
| Rate Plan Charge Tier                         | `RatePlanChargeTier`                       |
| Refund                                        | `Refund`                                   |
| Refund Application                            | `RefundApplication`                        |
| Refund Application Item                       | `RefundApplicationItem`                    |
| Refund Invoice Payment                        | `RefundInvoicePayment`                     |
| Refund Part                                   | `RefundPart`                               |
| Refund Part Item                              | `RefundPartItem`                           |
| Refund Transaction Log                        | `RefundTransactionLog`                     |
| Revenue Charge Summary                        | `RevenueChargeSummary`                     |
| Revenue Charge Summary Item                   | `RevenueChargeSummaryItem`                 |
| Revenue Event                                 | `RevenueEvent`                             |
| Revenue Event Credit Memo Item                | `RevenueEventCreditMemoItem`               |
| Revenue Event Debit Memo Item                 | `RevenueEventDebitMemoItem`                |
| Revenue Event Invoice Item                    | `RevenueEventInvoiceItem`                  |
| Revenue Event Invoice Item Adjustment         | `RevenueEventInvoiceItemAdjustment`        |
| Revenue Event Item                            | `RevenueEventItem`                         |
| Revenue Event Item Credit Memo Item           | `RevenueEventItemCreditMemoItem`           |
| Revenue Event Item Debit Memo Item            | `RevenueEventItemDebitMemoItem`            |
| Revenue Event Item Invoice Item               | `RevenueEventItemInvoiceItem`              |
| Revenue Event Item Invoice Item Adjustment    | `RevenueEventItemInvoiceItemAdjustment`    |
| Revenue Event Type                            | `RevenueEventType`                         |
| Revenue Schedule                              | `RevenueSchedule`                          |
| Revenue Schedule Credit Memo Item             | `RevenueScheduleCreditMemoItem`            |
| Revenue Schedule Debit Memo Item              | `RevenueScheduleDebitMemoItem`             |
| Revenue Schedule Invoice Item                 | `RevenueScheduleInvoiceItem`               |
| Revenue Schedule Invoice Item Adjustment      | `RevenueScheduleInvoiceItemAdjustment`     |
| Revenue Schedule Item                         | `RevenueScheduleItem`                      |
| Revenue Schedule Item Credit Memo Item        | `RevenueScheduleItemCreditMemoItem`        |
| Revenue Schedule Item Debit Memo Item         | `RevenueScheduleItemDebitMemoItem`         |
| Revenue Schedule Item Invoice Item            | `RevenueScheduleItemInvoiceItem`           |
| Revenue Schedule Item Invoice Item Adjustment | `RevenueScheduleItemInvoiceItemAdjustment` |
| Subscription                                  | `Subscription`                             |
| Taxable Item Snapshot                         | `TaxableItemSnapshot`                      |
| Taxation Item                                 | `TaxationItem`                             |
| Updater Batch                                 | `UpdaterBatch`                             |
| Usage                                         | `Usage`                                    |


## Actions
### createToken
Generates a bearer token that enables an OAuth client to authenticate with the Zuora REST API. The OAuth client must have been created using the Zuora UI. See [Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication) for more information.

**Note:** When using this operation, do not set any authentication headers such as `Authorization`, `apiAccessKeyId`, or `apiSecretAccessKey`.



```js
zuora.createToken({
  "client_id": "",
  "client_secret": "",
  "grant_type": ""
}, context)
```

#### Parameters
* client_id (string) **required** - The Client ID of the OAuth client.
* client_secret (string) **required** - The Client Secret that was displayed when the OAuth client was created.
* grant_type (string) **required** - The OAuth grant type that will be used to generate the token. The value of this parameter must be `client_credentials`.

### GET_AllAccountingCodes
This reference describes how to query all accounting codes in your chart of accounts through the REST API.


```js
zuora.GET_AllAccountingCodes({}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* pageSize (integer) - Number of rows returned per page.

### POST_AccountingCode
This reference describes how to create a new accounting code through the REST API. 
The accounting code will be active as soon as it has been created.

## Prerequisites
  If you have Zuora Finance enabled on your tenant, you must have the  Configure Accounting Codes permission. 



```js
zuora.POST_AccountingCode({
  "Request": {
    "name": "",
    "type": ""
  }
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* Request (object) **required**

### DELETE_AccountingCode
This reference describes how to delete an accounting code through the REST API.
## Prerequisites
If you have Zuora Finance enabled on your tenant, then you must have the Delete Unused Accounting Code permission.
## Limitations
You can only delete accounting codes that have never been associated with any transactions. An accounting code must be deactivated before you can delete it.



```js
zuora.DELETE_AccountingCode({
  "ac-id": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* ac-id (string) **required** - ID of the accounting code you want to delete.

### GET_AccountingCode
This reference describes how to query an accounting code through the REST API.


```js
zuora.GET_AccountingCode({
  "ac-id": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* ac-id (string) **required** - ID of the accounting code you want to query.

### PUT_AccountingCode
This reference describes how to update an existing accounting code through the REST API.
## Prerequisites
  If you have Zuora Finance enabled on your tenant, you must have the  Manage Accounting Code permission. 
## Limitations
You can only update accounting codes that are not already associated with any transactions.



```js
zuora.PUT_AccountingCode({
  "ac-id": "",
  "Request": {}
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* ac-id (string) **required** - ID of the accounting code you want to update.
* Request (object) **required**

### PUT_ActivateAccountingCode
This reference describes how to activate an accounting code through the REST API.

Prerequisites
-------------
If you have Zuora Finance enabled on your tenant, you must have the Manage Accounting Code permission. 



```js
zuora.PUT_ActivateAccountingCode({
  "ac-id": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* ac-id (string) **required** - ID of the accounting code you want to activate.

### PUT_DeactivateAccountingCode
This reference describes how to deactivate an accounting code through the REST API.

## Prerequisites
If you have Zuora Finance enabled on your tenant, you must have the Manage Accounting Code permission.
## Limitations
You can only deactivate accounting codes that are not associated with any transactions. 
You cannot disable accounting codes of type AccountsReceivable.



```js
zuora.PUT_DeactivateAccountingCode({
  "ac-id": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* ac-id (string) **required** - ID of the accounting code you want to deactivate.

### GET_AllAccountingPeriods
Retrieves all accounting periods on your tenant.


```js
zuora.GET_AllAccountingPeriods({}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* pageSize (integer) - Number of rows returned per page.

### POST_AccountingPeriod
Creates an accounting period.
Prerequisites
-------------
* You must have Zuora Finance enabled on your tenant.
* You must have the Create Accounting Period user permission.

Limitations
-----------
* When creating the first accounting period on your tenant, the start date must be equal to or earlier than the date of the earliest transaction on the tenant.
* Start and end dates of accounting periods must be contiguous. For example, if one accounting period ends on January 31, the next period must start on February 1.
* If you have the Revenue Recognition Package and have enabled the "Monthly recognition over time" revenue recognition model, the accounting period start date and end date must be on the first day and last day of the month, respectively. Note that the start and end dates do not necessarily have to be in the same month.


```js
zuora.POST_AccountingPeriod({
  "Request": {
    "name": "",
    "startDate": "",
    "endDate": "",
    "fiscalYear": ""
  }
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* Request (object) **required**

### DELETE_AccountingPeriod

Deletes an accounting period.

Prerequisites
-------------

 * You must have Zuora Finance enabled on your tenant.

 * You must have the Delete Accounting Period user permission. See [Finance Roles](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/A_Administrator_Settings/User_Roles/f_Finance_Roles).


Limitations
-----------

The accounting period to be deleted:

* Must be the most recent accounting period

* Must be an open accounting period

* Must have no revenue distributed into it

* Must not have any active journal entries

* Must not be the open-ended accounting period

* Must not be in the process of running a trial balance



```js
zuora.DELETE_AccountingPeriod({
  "ap-id": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* ap-id (string) **required** - ID of the accounting period you want to delete.

### GET_AccountingPeriod
Retrieves an accounting period.
Prerequisites
-------------

You must have Zuora Finance enabled on your tenant.



```js
zuora.GET_AccountingPeriod({
  "ap-id": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* ap-id (string) **required** - ID of the accounting period you want to get.

### PUT_UpdateAccountingPeriod

Updates an accounting period.

Prerequisites
-------------

* You must have Zuora Finance enabled on your tenant.

* You must have the Create Accounting Period user permission. See [Finance Roles](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/A_Administrator_Settings/User_Roles/f_Finance_Roles).

Limitations
-----------

* You can update the start date of only the earliest accounting period on your tenant. You cannot update the start date of later periods.

* If you update the earliest accounting period, the start date must be equal to or earlier than the date of the earliest transaction on the tenant.

* Start and end dates of accounting periods must be contiguous. For example, if one accounting period ends on January 31, the next period must start on February 1.

* If you have the Revenue Recognition Package and have enabled the "Monthly recognition over time" revenue recognition model, the accounting period start date and end date must be on the first day and last day of the month, respectively. Note that the start and end dates do not necessarily have to be in the same month.

* You cannot update the start date or end date of an accounting period if:
  * Any revenue has been distributed into the period.
  * The period has any active journal entries.



```js
zuora.PUT_UpdateAccountingPeriod({
  "ap-id": "",
  "Request": {}
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* ap-id (string) **required** - ID of the accounting period you want to update.
* Request (object) **required**

### PUT_CloseAccountingPeriod
Close an accounting period by accounting period ID.

Prerequisites
-------------
You must have Zuora Finance enabled on your tenant. You must have the Manage Close Process and Run Trial Balance user permissions.

Limitations
-----------
* The accounting period cannot already be closed.
* The accounting period cannot be in the process of running a trial balance.
* All earlier accounting periods must be closed.
* There must be no required action items for the accounting period. See Reconcile Transactions Before Closing an Accounting Period for more information.

Notes
-----
When you close an accounting period in Zuora, a trial balance is automatically run for that period. A successful response means only that the accounting period is now closed, but does not mean that the trial balance has successfully completed.


```js
zuora.PUT_CloseAccountingPeriod({
  "ap-id": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* ap-id (string) **required** - ID of the accounting period you want to close.

### PUT_PendingCloseAccountingPeriod
Sets an accounting period to pending close.


Prerequisites
-------------

* You must have Zuora Finance enabled on your tenant.
* You must have the Manage Close Process and Run Trial Balance user permissions.

            
Limitations 
 -----------
 
 * The accounting period cannot be closed or pending close.
 
 * The accounting period cannot be in the process of running a trial balance.
 
 * All earlier accounting periods must be closed.
 
 
Notes
-----
When you set an accounting period to pending close in Zuora, a trial balance is automatically run for that period. A response of `{ "success": true }`  means only that the accounting period status is now pending close, but does not mean that the trial balance has successfully completed. You can use the Get Accounting Period REST API call to view details about the outcome of the trial balance.



```js
zuora.PUT_PendingCloseAccountingPeriod({
  "ap-id": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* ap-id (string) **required** - ID of the accounting period you want to set to pending close.

### PUT_ReopenAccountingPeriod
Re-opens an accounting period.
Prerequisites
-------------
* You must have Zuora Finance enabled on your tenant.
* You must have the Manage Close Process and Run Trial Balance user permissions.

Limitations
-----------
* The accounting period must be closed or pending close.
* You can only re-open an accounting period that is immediately previous to an open period.


```js
zuora.PUT_ReopenAccountingPeriod({
  "ap-id": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* ap-id (string) **required** - ID of the accounting period that you want to re-open.

### PUT_RunTrialBalance
Runs the trial balance for an accounting period. 

Prerequisites
-------------

* You must have Zuora Finance enabled on your tenant.

* You must have the Manage Close Process and Run Trial Balance user permissions. See [Finance Roles](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/A_Administrator_Settings/User_Roles/f_Finance_Roles).

          
Limitations 
-----------
 
 * The accounting period must be open.
 
 * The accounting period cannot already be in the process of running a trial balance.
 
Notes
-----
The trial balance is run asynchronously. A response of `{ "success": true }` means only that the trial balance has started processing, but does not mean that the trial balance has successfully completed. You can use the [Get Accounting Period](https://knowledgecenter.zuora.com/DC_Developers/REST_API/B_REST_API_reference/Accounting_Periods/Get_Accounting_Period) REST API call to view details about the outcome of the trial balance.



```js
zuora.PUT_RunTrialBalance({
  "ap-id": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* ap-id (string) **required** - ID of the accounting period for which you want to run a trial balance.

### POST_Account
This REST API reference describes how to create a customer account with a credit-card payment method, a bill-to contact, and an optional sold-to contact. Request and response field descriptions and sample code are provided. Use this method to optionally create a subscription, invoice for that subscription, and collect payment through the default payment method. The transaction is atomic; if any part fails for any reason, the entire transaction is rolled back.

This API call is CORS Enabled, so you can use client-side Javascript to invoke the call. 

## Notes
1. The account is created in active status.  
2. The request must provide either a **creditCard** structure or the **hpmCreditCardPaymentMethodId** field (but not both). The one provided becomes the default payment method for this account. If the credit card information is declined or can't be verified, then the account is not created.
3. Customer accounts created with this call are automatically be set to Auto Pay.
4. If either the **workEmail** or **personalEmail** are specified, then the account's email delivery preference is automatically set to `true`. (In that case, emails go to the **workEmail** address, if it exists, or else the **personalEmail**.) If neither field is specified, the email delivery preference is automatically set to `false`.

## Defaults for customerAcceptanceDate and serviceActivationDate
Default values for **customerAcceptanceDate** and **serviceActivationDate** are set as follows.

|        | serviceActivationDate(SA) specified          | serviceActivationDate (SA) NOT specified  |
| ------------- |:-------------:| -----:|
| customerAcceptanceDate (CA) specified      | SA uses value in the request call; CA uses value in the request call| CA uses value in the request call;SA uses CE as default |
| customerAcceptanceDate (CA) NOT specified      | SA uses value in the request call; CA uses SA as default |   SA and CA use CE as default |



```js
zuora.POST_Account({
  "Request": {
    "name": "",
    "currency": "",
    "billToContact": {
      "firstName": "",
      "lastName": ""
    }
  }
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* zuora-version (string) - The minor version of the Zuora REST API. 
* Request (object) **required**

### GET_Account
This REST API reference describes how to retrieve basic information about a customer account.

This REST call is a quick retrieval that doesn't include the account's subscriptions, invoices, payments, or usage details. Use Get account summary to get more detailed information about an account.



```js
zuora.GET_Account({
  "account-key": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* account-key (string) **required** - Account number or account ID.

### PUT_Account
This REST API reference describes how to update a customer account by specifying the account-key.

## Notes
1. Only the fields to be changed should be specified.  Any field that's not included in the request body will not be changed.
2. If an empty field is submitted with this call, the corresponding field in the account is emptied.
3. Email addresses: If no email addresses are specified, no change is made to the email addresses on file or to the email delivery preference. If either the **personalEmail** or **workEmail** is specified (or both), the system updates the corresponding email address(es) on file and the email delivery preference is set to `true`. (In that case, emails go to the **workEmail** address, if it exists, or else the **personalEmail**.) On the other hand, if as a result of this call both of the email addresses for the account are empty, the email delivery preference is set to `false`.
4. The bill-to and sold-to contacts are separate data entities; updating either one does not update the other.



```js
zuora.PUT_Account({
  "account-key": "",
  "Request": {}
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* account-key (string) **required** - Account number or account ID.
* Request (object) **required**

### GET_AccountSummary
This REST API reference describes how to retrieve detailed information about the specified customer account.

The response includes the account information and a summary of the account’s subscriptions, invoices, payments, and usages for the last six recently updated subscriptions.

## Notes 
Returns only the six most recent subscriptions based on the subscription updatedDate. Within those subscriptions, there may be many rate plans and many rate plan charges. These items are subject to the maximum limit on the array size. 



```js
zuora.GET_AccountSummary({
  "account-key": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* account-key (string) **required** - Account number or account ID.

### POST_GenerateBillingDocuments
Generates draft or posted billing documents for a specified account. You can also generate billing documents for specified subscriptions of a specified account. The billing documents contain invoices and credit memos. To generate credit memos, you must have the Advanced AR Settlement feature enabled.



```js
zuora.POST_GenerateBillingDocuments({
  "body": {},
  "id": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* body (object) **required**
* id (string) **required** - The ID of the customer account that billing documents are generated for. For example, 8a8082e65b27f6c3015ba3e326b26419.

### Action_POSTamend

Use the amend call to change a subscription, such as upgrading the subscription.

**Note:** Zuora recommends that you use [Update subscription](https://www.zuora.com/developer/api-reference/#operation/PUT_Subscription) to amend subscriptions.

The amend call:

* Supports the Amendment object
* Is not an asynchronous process

## Limits 
### Objects per Call 
Up to ten Amendment objects.



### Errors 
If one of your Amendment objects fails in a single amend call, then the entire call fails.

## Required Fields 
The following fields are always required for this call:

* `Amendment`.`Type`
* `Amendment`.`Name`
* `Amendment`.`SubscriptionId`



```js
zuora.Action_POSTamend({
  "amendRequest": {}
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* amendRequest (object) **required**

### Action_POSTcreate
Use the create call to create one or more objects of a specific type. You can specify different types in different create calls, but each create call must apply to only one type of object.

## Limits

### Objects per Call

50 objects are supported in a single call.



## How to Use this Call

You can call create on an array of one or more zObjects. It returns an array of SaveResults, indicating the success or failure of creating each object. The following information applies to this call:

* You cannot pass in null zObjects.
* You can pass in a maximum of 50 zObjects at a time.
* All objects must be of the same type.

### Using Create and Subscribe Calls 
Both the create and subscribe calls will create a new account. However, there are differences between the calls.

Use the create call to create an account independent of a subscription.

Use the subscribe call to create the account with the subscription and the initial payment information.



```js
zuora.Action_POSTcreate({
  "createRequest": {
    "objects": [],
    "type": ""
  }
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* createRequest (object) **required**

### Action_POSTdelete
Deletes one or more objects of the same type. You can specify different types in different delete calls, but each delete call must apply only to one type of object.

The following information applies to this call:

* You will need to first determine the IDs for the objects you wish to delete.
* You cannot pass in any null IDs.
* All objects in a specific delete call must be of the same type.


### Objects per Call
50 objects are supported in a single call.



```js
zuora.Action_POSTdelete({
  "deleteRequest": {
    "type": "",
    "ids": []
  }
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* deleteRequest (object) **required**

### Action_POSTexecute
Use the execute call to execute a process to split an invoice into multiple invoices. The original invoice must be in draft status. The resulting invoices are called split invoices.

**Note:** This feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com). 

To split a draft invoice into multiple split invoices:

1. Use the create call to create a separate InvoiceSplitItem object for each split invoice that you want to create from the original draft invoice.
2. Use the create call to create a single InvoiceSplit object to collect all of the InvoiceSplitItem objects.
3. Use the execute call to split the draft invoice into multiple split invoices.

You need to create InvoiceSplitItem objects and an InvoiceSplit object before you can use the execute call. 

* Supported objects: InvoiceSplit
* Asynchronous process: yes



```js
zuora.Action_POSTexecute({
  "executeRequest": {
    "type": "",
    "ids": [],
    "synchronous": true
  }
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* executeRequest (object) **required**

### Action_POSTgenerate
Generates an on-demand invoice for a specific customer. This is similar to creating an ad-hoc bill run for a specific customer account in the Zuora UI.

* Supported objects: Invoice
* Asynchronous process: yes

The ID of the generated invoice is returned in the response. If multiple invoices are generated, only the id of the first invoice generated is returned. This occurs when an account has multiple subscriptions with the [invoice subscription separately](https://knowledgecenter.zuora.com/BC_Subscription_Management/Subscriptions/B_Creating_Subscriptions/Invoicing_Subscriptions_Separately) option enabled.



```js
zuora.Action_POSTgenerate({
  "generateRequest": {
    "objects": [],
    "type": ""
  }
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* generateRequest (object) **required**

### Action_POSTquery
The query call sends a query expression by specifying the object to query, the fields to retrieve from that object, and any filters to determine whether a given object should be queried.


You can use ZOQL (Zuora Object Query Language) to construct those queries, passing them through the `queryString`.


Once the call is made, the API executes the query against the specified object and returns a query response object to your application. Your application can then iterate through rows in the query response to retrieve information.

## Limitations 

This call has the following limitations:

* All ZOQL keywords must be in lower case.
* The number of records returned is limited to 2000 records



```js
zuora.Action_POSTquery({
  "queryRequest": {
    "queryString": ""
  }
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* queryRequest (object) **required**

### Action_POSTqueryMore
Use queryMore to request additional results from a previous query call. If your initial query call returns more than 2000 results, you can use queryMore to query for the additional results.


Any `queryLocator` results greater than 2,000, will only be stored by Zuora for 5 days before it is deleted.


 This call sends a request for additional results from an initial query call. If the initial query call returns more than 2000 results, you can use the `queryLocator` returned from query to request the next set of results.


**Note:** Zuora expires queryMore cursors after 15 minutes of activity.


To use queryMore, you first construct a query call. By default, the query call will return up to 2000 results. If there are more than 2000 results, query will return a boolean `done`, which will be marked as `false`, and a `queryLocator`, which is a marker you will pass to queryMore to get the next set of results.



```js
zuora.Action_POSTqueryMore({
  "queryMoreRequest": {
    "queryLocator": ""
  }
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* queryMoreRequest (object) **required**

### Action_POSTsubscribe

This call performs many actions.  Use the subscribe call to bundle information required to create at least one new subscription. 

The call takes in an array of SubscribeRequests. Because it takes an array, you can submit a batch of subscription requests at once. You can create up to 50 different subscriptions in a single subscribe call.

This is a combined call that you can use to perform all of the following tasks in a single call:

* Create accounts
* Create contacts
* Create payment methods, including external payment options
* Create an invoice for the subscription
* Apply the first payment to a subscription

## Object Limits 
50 objects are supported in a single call.



## Effective Date
If the effective date is in the future, the invoices will not be generated, and there will be no invoice number.

## Subscription Name, Number, and ID 
### Subscription Name and Number 
The subscription name is a unique identifier for the subscription. If you do not specify a value for the name, Zuora will create one automatically. The automatically generated value is known as the subscription number, such as `A-S00000080`. You cannot change the subscription name or number after creating the subscription. 

* **Subscription name**: The name that you set for the subscription.
* **Subscription number**: The value generated by Zuora automatically if you do not specify a subscription name. 

Both the subscription name and number must be unique. If they are not, an error will occur.

### Subscription ID 
The subscription ID is a 32-digit ID in the format 4028xxxx. This is also the unique identifier for a subscription. This value is automatically generated by the system and cannot be edited or updated, but it can be queried. One subscription can have only one subscription name or number, but it can have multiple IDs: Each version of a subscription has a different ID.

The Subscription object contains the fields `OriginalId` and `PreviousSubscriptionId`. `OriginalId` is the ID for the first version of a subscription. `PreviousSubscriptionId` is the ID of the version created immediately prior to the current version.

## Subscription Preview 
You can preview invoices that would be generated by the subscribe call. 

## Invoice Subscriptions Separately
If you have enabled the invoice subscriptions separately feature, a subscribe call will generate an invoice for each subscription for every subscription where the field `IsInvoiceSeparate` is set to `true`.

If the invoice subscriptions separately feature is disabled, a subscribe call will generate a single invoice for all subscriptions.

See [Invoicing Subscriptions Separately](https://knowledgecenter.zuora.com/BC_Subscription_Management/Subscriptions/B_Creating_Subscriptions/Invoicing_Subscriptions_Separately) for more information.

## Subscriptions and Draft Invoices 
If a draft invoice that includes charges exists in a customer account, using the subscribe call to create a new subscription and generate an invoice will cause the new subscription to be added to the existing draft invoice. Zuora will then post the invoice. 

## When to Use Subscribe and Create Calls 
You can use either the subscribe call or the create call to create the objects associated with a subscription (accounts, contacts, and so on). There are differences between these calls, however, and some situations are better for one or the other.

### Use the Subscribe Call 
The subscribe call bundles up all the information you need for a subscription. Use the subscribe call to create new subscriptions when you have all the information you need.

Subscribe calls cannot update BillTo, SoldTo, and Payment information objects cannot be updated if there is an existing account ID in the call. These objects are not supported in a subscribe call.

### Use the Create Call 
The create call is more useful when you want to develop in stages. For example, if you want to first create an account, then a contact, and so on. If you do not have all information available, use the create call. To create a subscription, you must activate the account from Draft status to Active by calling the subscribe call.



```js
zuora.Action_POSTsubscribe({
  "subscribeRequest": {
    "subscribes": []
  }
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* subscribeRequest (object) **required**

### Action_POSTupdate

Updates the information in one or more objects of the same type. You can specify different types of objects in different update calls, but each specific update call must apply to only one type of object.

You can update an array of one or more zObjects. It returns an array of SaveResults, indicating the success or failure of updating each object. The following information applies to this call:

* You cannot pass in null zObjects.
* You can pass in a maximum of 50 zObjects at a time.
* All objects must be of the same type.
* For each field in each object, you must determine that object's ID. Then populate the fields that you want update with the new information.
* Zuora ignores unrecognized fields in update calls. For example, if an optional field is spelled incorrectly or a field that does not exist is specified, Zuora ignores the field and continues to process the call. No error message is returned for unrecognized fields.

## Object Limits 
50 objects are supported in a single call.



```js
zuora.Action_POSTupdate({
  "updateRequest": {
    "objects": [],
    "type": ""
  }
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* updateRequest (object) **required**

### GET_AmendmentsBySubscriptionID
Retrieves detailed information about the amendment with the specified subscription.


```js
zuora.GET_AmendmentsBySubscriptionID({
  "subscription-id": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* subscription-id (string) **required** - The ID of the subscription whose amendment changes you want to retrieve.

### GET_AmendmentsByKey
Retrieves detailed information about the specified subscription amendment.


```js
zuora.GET_AmendmentsByKey({
  "amendment-key": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* amendment-key (string) **required** - Can be the amendment ID or the amendment code.

### POST_Attachments
Use the Add Attachment REST request with a multipart/form-data to attach a document file to an Account, a Subscription, or an Invoice.


```js
zuora.POST_Attachments({
  "associatedObjectType": "",
  "associatedObjectKey": "",
  "Request": {
    "file": ""
  }
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* description (string) - Description of the attachment document.
* associatedObjectType (string) **required** - Specify one of the following values: Account, Subscription, or Invoice.
* associatedObjectKey (string) **required** - For the Subscription type, specify the Subscription Number. An attachment is tied to the Subscription Number and thus viewable with every subscription version.
* Request (object) **required**

### DELETE_Attachments
Use the Delete Attachment REST request to delete an attachment from a Zuora object.


```js
zuora.DELETE_Attachments({
  "attachment-id": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* attachment-id (string) **required** - Id of the attachment to be deleted.

### GET_Attachments
Use the View Attachment REST request to retrieve information about an attachment document.


```js
zuora.GET_Attachments({
  "attachment-id": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* attachment-id (string) **required** - Id of the attachment you want to view.

### PUT_Attachments
Use the Edit Attachment REST request to make changes to the descriptive fields of an attachment, such as the description and the file name. You cannot change the actual content of the attached file in Zuora. If you need to change the actual content, you need to delete the attachment and add the updated file as a new attachment.


```js
zuora.PUT_Attachments({
  "attachment-id": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* attachment-id (string) **required** - Id of the attachment to be updated.
* Request (object)

### GET_AttachmentsList
Use the View Attachment REST request to get a list of attachments on an account, an invoice, or a subscription.


```js
zuora.GET_AttachmentsList({
  "object-type": "",
  "object-key": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* pageSize (integer) - Number of rows returned per page.
* object-type (string) **required** - The type of object to list attachements for.
* object-key (string) **required** - ID of the object to list attachements for.

### POST_EmailBillingDocumentsfromBillRun
Manually emails all the billing documents that are generated from a specified bill run to your customers. 


Bill runs can generate invoices and credit memos based on your [invoice and credit memo generation rule](https://knowledgecenter.zuora.com/CB_Billing/Advanced_AR_Settlement/Credit_and_Debit_Memos/Rules_for_Generating_Invoices_and_Credit_Memos). Credit memos are only available if you have the Advanced AR Settlement feature enabled.


Using this API operation, the billing documents are sent to the email addresses specified in the **To Email** field of the email templates. The email template used for each billing document is set in the **Delivery Options** panel of the **Edit notification** dialog from the Zuora UI. See [Edit Email Templates](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/Notifications/Create_Email_Templates) for more information about how to edit the **To Email** field in the email template.





## Notes
  - Even though no field is required in the Request body, you still need to specify `{}` in the request. Otherwise, an error will be returned.


  - You can only email posted billing documents.
  
  
  - You must activate the following notifications before emailing invoices and credit memos:
    - **Manual Email For Invoice | Manual Email For Invoice** 
    - **Email Credit Memo | Manually email Credit Memo**
 
  
  - To include the invoice PDF in the email, select the **Include Invoice PDF** check box in the **Edit notification** dialog from the Zuora UI. To include the credit memo PDF in the email, select the **Include Credit Memo PDF** check box in the **Edit notification** dialog from the Zuora UI. See [Create and Edit Notifications](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/Notifications/C_Create_Notifications#section_2) for more information.



  - Zuora sends the email messages based on the email template you set. You can set the email template to use in the **Delivery Options** panel of the **Edit notification** dialog from the Zuora UI. By default, the following templates are used for billing documents:
    - Invoices: **Invoice Posted Default Email Template**
    - Credit memos: **Manual Email for Credit Memo Default Template**  

    See [Create and Edit Email Templates](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/Notifications/Create_Email_Templates) for more information.
  
  



```js
zuora.POST_EmailBillingDocumentsfromBillRun({
  "billRunId": "",
  "Request": {}
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* billRunId (string) **required** - The ID of the bill run. For example, 2c92c8f95d0c886e015d11287a8f0f8b.
* Request (object) **required**

### GET_BillingDocuments
Retrieves the information about all billing documents associated with a specified account. The billing documents contain invoices, credit memos, and debit memos. 

To retrieve information about credit memos and debit memos, you must have the Advanced AR Settlement feature enabled. 



```js
zuora.GET_BillingDocuments({
  "accountId": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* pageSize (integer) - Number of rows returned per page.
* accountId (string) **required** - The ID of the customer account that the billing documents are associated with. 
* documentDate (string) - The date of the billing document. It represents the invoice date for invoices, credit memo date for credit memos, and debit memo date for debit memos.
* status (string) - The status of the billing document.
* sort (string) - This parameter restricts the order of the data returned in the response. You can use this parameter to supply a dimension you want to sort on.

### POST_BillingPreviewRun
**Note:** This feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).


Creates billing preview runs for multiple customer accounts.

You can run up to 10 billing previews in batches concurrently. A single batch of customer accounts can only have one billing preview run at a time. So you can have up to 10 batches running at the same time. If you create a billing preview run for all customer batches, you cannot create another billing preview run until this preview run is completed.



```js
zuora.POST_BillingPreviewRun({
  "Request": {
    "targetDate": ""
  }
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* Request (object) **required**

### GET_BillingPreviewRun
**Note:** This feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). 


Retrieves a preview of future invoice items for multiple customer accounts through a billing preview run. If you have the Advanced AR Settlement feature enabled,  you can also retrieve a preview of future credit memo items. The Advanced AR Settlement feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). 

A billing preview run asynchronously generates a downloadable CSV file containing a preview of invoice item data and credit memo item data for a batch of customer accounts.



```js
zuora.GET_BillingPreviewRun({
  "billingPreviewRunId": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* billingPreviewRunId (string) **required** - Id of the billing preview run.

### POST_MassUpdater
This reference describes how to perform a mass action through the REST API. 

Using this API method, you send a multipart/form-data request containing a `.csv` file with data about the mass action you want to perform. Zuora returns a key and then asynchronously processes the mass action. You can use the key to get details about the result of the mass action.



```js
zuora.POST_MassUpdater({
  "Content-Type": "",
  "Request": {
    "file": "",
    "params": {
      "actionType": ""
    }
  }
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* Content-Type (string) **required** - Must be multipart/form-data.
* Request (object) **required**

### GET_MassUpdater
This reference describes how to get information about the result of a mass action through the REST API. 



```js
zuora.GET_MassUpdater({
  "bulk-key": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* bulk-key (string) **required** - String of 32 characters that identifies a mass action. You get the bulk-key after performing a mass action through the REST API.

### PUT_MassUpdater
This reference describes how to stop a mass action through the REST API. You can stop a mass action when its status is Pending or Processing. After you have stopped a mass action, you can get the mass action result to see details of the mass action.

- If you stop a mass action when its status is Pending, no response file is generated because no records have been processed.

- If you stop a mass action when its status is Processing, a response file is generated. You can check the response file to see which records have been processed and which have not. In the response file, the **Success** column has the value `Y` (successful) or `N` (failed) for processed records, and a blank value for unprocessed records.

Records that have already been processed when a mass action is stopped are not rolled back.



```js
zuora.PUT_MassUpdater({
  "bulk-key": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* bulk-key (string) **required** - String of 32 characters that identifies a mass action. You get the bulk-key after performing a mass action through the REST API.

### GET_Catalog
This REST API reference describes how to retrieve the entire product catalog, including all products, features, and their corresponding rate plans, charges. Products are returned in reverse chronological order on the UpdatedDate field. 

With rate plans and rate plan charges, the REST API has a maximum array size. 



```js
zuora.GET_Catalog({}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* pageSize (integer) - Number of rows returned per page.

### PUT_Catalog
**Note:** The Multi-entity feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).

Shares a product with a target entity. Zuora synchronizes the shared products to the target entity after sharing. For more information about product sharing, see [Products Sharing Across Entities](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/C_Business_Objects_Sharing_Across_Entities/B_Products_Sharing_Across_Entities).

Note that:

- You must finish all the [prerequisites](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/C_Business_Objects_Sharing_Across_Entities/B_Products_Sharing_Across_Entities/Share_Products) before sharing products with other entities. 

- Only source entity administrators have permission to share products with other entities. You must make the call as a source entity administrator.

- Currently, you can only share a product with one entity at a time. An error occurs if you try to share a product to more than one entity.



```js
zuora.PUT_Catalog({
  "product-id": "",
  "Request": {
    "toEntityIds": []
  }
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* product-id (string) **required** - The Id of the product you want to share. For example, 8a808255575bdae4015774e9602e16fe.
* Request (object) **required**

### GET_CRSByChargeID
This REST API reference describes how to retrieve the details of a charge revenue summary by specifying the subscription charge ID. This response retrieves all revenue items associated with a charge revenue summary.



```js
zuora.GET_CRSByChargeID({
  "charge-key": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* charge-key (string) **required** - ID of the subscription rate plan charge; for example, 402892793e173340013e173b81000012.

### GET_CRSByCRSNumber
This REST API reference describes how to retrieve the details of a charge revenue summary by specifying the charge revenue summary number. The response includes all revenue items associated with the charge revenue summary.



```js
zuora.GET_CRSByCRSNumber({
  "crs-number": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* crs-number (string) **required** - The charge revenue summary number.

### POST_Connections
Establishes a connection to the Zuora REST API service based on a valid user credentials.

This call authenticates the user and returns an API session cookie that's used to authorize subsequent calls to the REST API. A call to `connections` is a required first step before using the Zuora REST API to access data.

The credentials must belong to a user account that has permission to access the API service.

As noted elsewhere, it's strongly recommended that an account used for Zuora API activity is never used to log into the Zuora UI.  Once an account is used to log into the UI, it may be subject to periodic forced password changes, which may eventually lead to authentication failures when using the API.



```js
zuora.POST_Connections({
  "apiAccessKeyId": "",
  "apiSecretAccessKey": "",
  "Content-Type": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* apiAccessKeyId (string) **required** - Account username
* apiSecretAccessKey (string) **required** - Account password
* Content-Type (string) **required** - Must be set to "application/json"

### GET_CreditMemos
**Note:** The Advanced AR Settlement feature is in **Limited Availability**. This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). 

Retrieves the information about all credit memos.



```js
zuora.GET_CreditMemos({}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* pageSize (integer) - Number of rows returned per page.
* fieldsFilterable (string) - This parameter restricts the data returned in the response. You can use this parameter to supply a dimension you want to filter on.
* sort (string) - This parameter restricts the order of the data returned in the response. You can use this parameter to supply a dimension you want to sort on.

### POST_CreditMemoFromPrpc
**Note:** The Advanced AR Settlement feature is in **Limited Availability**. This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). 

Creates an ad-hoc credit memo from a product rate plan charge. Zuora only supports one-time negative charges for credit memos. 

You can create a credit memo only if you have the user permission. See [Billing Roles](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/A_Administrator_Settings/User_Roles/d_Billing_Roles) for more information.



```js
zuora.POST_CreditMemoFromPrpc({
  "body": {
    "accountId": ""
  }
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* body (object) **required**

### DELETE_CreditMemo
**Note:** The Advanced AR Settlement feature is in **Limited Availability**. This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). 

Deletes a credit memo. Only credit memos with the Cancelled status can be deleted. 

You can delete a credit memo only if you have the user permission. See [Billing Roles](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/A_Administrator_Settings/User_Roles/d_Billing_Roles) for more information.



```js
zuora.DELETE_CreditMemo({
  "creditMemoId": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* creditMemoId (string) **required** - The unique ID of a credit memo. For example, 8a8082e65b27f6c3015ba45ff82c7172.

### GET_CreditMemo
**Note:** The Advanced AR Settlement feature is in **Limited Availability**. This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). 

Retrieves the information about a specific credit memo.



```js
zuora.GET_CreditMemo({
  "creditMemoId": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* creditMemoId (string) **required** - The unique ID of a credit memo. For example, 8a8082e65b27f6c3015ba45ff82c7172.

### PUT_UpdateCreditMemo
**Note:** The Advanced AR Settlement feature is in **Limited Availability**. This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). 

Updates the basic and finance information about a credit memo. Currently, Zuora supports updating tax-exclusive memo items, but does not support updating tax-inclusive memo items. 

If the amount of a memo item is updated, the tax will be recalculated in the following conditions:
  - The memo is created from a product rate plan charge and you use Avalara to calculate the tax.
  - The memo is created from an invoice and you use Avalara or Zuora Tax to calculate the tax.

You can update a credit memo only if you have the user permission. See [Billing Roles](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/A_Administrator_Settings/User_Roles/d_Billing_Roles) for more information.



```js
zuora.PUT_UpdateCreditMemo({
  "body": {},
  "creditMemoId": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* body (object) **required**
* creditMemoId (string) **required** - The unique ID of a credit memo. For example, 8a8082e65b27f6c3015ba45ff82c7172. 

### PUT_ApplyCreditMemo
**Note:** The Advanced AR Settlement feature is in **Limited Availability**. This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).

Applies a posted credit memo to one or more invoices and debit memos. 

You can apply a credit memo to an invoice or a debit memo only if you have the user permission. See [Billing Roles](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/A_Administrator_Settings/User_Roles/d_Billing_Roles) for more information.



```js
zuora.PUT_ApplyCreditMemo({
  "body": {},
  "creditMemoId": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* body (object) **required**
* creditMemoId (string) **required** - The unique ID of a credit memo. For example, 8a8082e65b27f6c3015ba45ff82c7172.

### PUT_CancelCreditMemo
**Note:** The Advanced AR Settlement feature is in **Limited Availability**. This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). 

Cancels a credit memo. Only credit memos with the Draft status can be cancelled. 

You can cancel a credit memo only if you have the user permission. See [Billing Roles](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/A_Administrator_Settings/User_Roles/d_Billing_Roles) for more information.



```js
zuora.PUT_CancelCreditMemo({
  "creditMemoId": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* creditMemoId (string) **required** - The unique ID of a credit memo. For example, 8a8082e65b27f6c3015ba45ff82c7172.

### POST_EmailCreditMemo
**Note:** The Advanced AR Settlement feature is in **Limited Availability**. This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). 

Sends a posted credit memo to the specified email addresses manually.



## Notes
  - You must activate the **Email Credit Memo | Manually email Credit Memo** notification before emailing credit memos. To include the credit memo PDF in the email, select the **Include Credit Memo PDF** check box in the **Edit notification** dialog from the Zuora UI. See [Create and Edit Notifications](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/Notifications/C_Create_Notifications#section_2) for more information.


  - Zuora sends the email messages based on the email template you set. You can set the email template to use in the **Delivery Options** panel of the **Edit notification** dialog from the Zuora UI. By default, the **Manual Email for Credit Memo Default Template** template is used. See [Create and Edit Email Templates](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/Notifications/Create_Email_Templates) for more information.


  - The credit memos are sent only to the work email addresses or personal email addresses of the Bill To contact if the following conditions are all met:

    * The `useEmailTemplateSetting` field is set to `false`.
    * The email addresses are not specified in the `emailAddresses` field.



```js
zuora.POST_EmailCreditMemo({
  "Request": {},
  "creditMemoId": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* Request (object) **required**
* creditMemoId (string) **required** - The ID of a posted credit memo. For example, 8a8082e65b27f6c3015ba45ff82c7172.

### GET_CreditMemoItems
**Note:** The Advanced AR Settlement feature is in **Limited Availability**. This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). 

Retrieves the information about all items of a credit memo. A credit memo item is a single line item in a credit memo. 



```js
zuora.GET_CreditMemoItems({
  "creditMemoId": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* pageSize (integer) - Number of rows returned per page.
* creditMemoId (string) **required** - The unique ID of a credit memo. For example, 8a8082e65b27f6c3015ba45ff82c7172.
* fieldsFilterable (string) - This parameter restricts the data returned in the response. You can use this parameter to supply a dimension you want to filter on.
* sort (string) - This parameter restricts the order of the data returned in the response. You can use this parameter to supply a dimension you want to sort on.

### GET_CreditMemoItem
**Note:** The Advanced AR Settlement feature is in **Limited Availability**. This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).

Retrieves the information about a specific item of a credit memo. A credit memo item is a single line item in a credit memo.



```js
zuora.GET_CreditMemoItem({
  "cmitemid": "",
  "creditMemoId": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* cmitemid (string) **required** - The unique ID of a credit memo item. You can get the credit memo item ID from the response of [Get credit memo items](https://www.zuora.com/developer/api-reference/#operation/GET_CreditMemoItems).
* creditMemoId (string) **required** - The unique ID of a credit memo. For example, 8a8082e65b27f6c3015ba45ff82c7172.

### GET_CreditMemoParts
**Note:** The Advanced AR Settlement feature is in **Limited Availability**. This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). 

Retrieves the information about all parts of a credit memo. A credit memo can consist of an unapplied part, and several parts applied to invoices and debit memos. You can use this operation to get all the applied and unapplied portions of a credit memo.



```js
zuora.GET_CreditMemoParts({
  "creditMemoId": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* pageSize (integer) - Number of rows returned per page.
* creditMemoId (string) **required** - The unique ID of a credit memo. For example, 8a8082e65b27f6c3015ba45ff82c7172.

### GET_CreditMemoPart
**Note:** The Advanced AR Settlement feature is in **Limited Availability**. This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). 

Retrieves the information about a specific credit memo part. A credit memo can consist of an unapplied part, and several parts applied to invoices and debit memos.



```js
zuora.GET_CreditMemoPart({
  "partid": "",
  "creditMemoId": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* partid (string) **required** - The unique ID of a specific credit memo part. You can get the credit memo part ID from the response of [Get credit memo parts](https://www.zuora.com/developer/api-reference/#operation/GET_CreditMemoParts).
* creditMemoId (string) **required** - The unique ID of a credit memo. For example, 8a8082e65b27f6c3015ba45ff82c7172.

### GET_CreditMemoItemParts
**Note:** The Advanced AR Settlement feature is in **Limited Availability**. This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). 

Retrieves the information about all items of a credit memo part. A credit memo part item is a single line item in a credit memo part. A credit memo part can consist of several different types of items.



```js
zuora.GET_CreditMemoItemParts({
  "partid": "",
  "creditMemoId": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* pageSize (integer) - Number of rows returned per page.
* partid (string) **required** - The unique ID of a specific credit memo part. You can get the credit memo part ID from the response of [Get credit memo parts](https://www.zuora.com/developer/api-reference/#operation/GET_CreditMemoParts). .
* creditMemoId (string) **required** - The unique ID of a credit memo. For example, 8a8082e65b27f6c3015ba45ff82c7172.

### GET_CreditMemoItemPart
**Note:** The Advanced AR Settlement feature is in **Limited Availability**. This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).

Retrieves the information about a specific credit memo part item.  A credit memo part item is a single line item in a credit memo part. A credit memo part can consist of several different types of items.



```js
zuora.GET_CreditMemoItemPart({
  "partid": "",
  "itempartid": "",
  "creditMemoId": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* partid (string) **required** - The unique ID of a specific credit memo part. You can get the credit memo part ID from the response of [Get credit memo parts](https://www.zuora.com/developer/api-reference/#operation/GET_CreditMemoParts).
* itempartid (string) **required** - The unique ID of a specific credit memo part item. You can get the credit memo part item ID from the response of [Get credit memo part items](https://www.zuora.com/developer/api-reference/#operation/GET_CreditMemoItemParts).
* creditMemoId (string) **required** - The unique ID of a credit memo. For example, 8a8082e65b27f6c3015ba45ff82c7172.

### POST_CreditMemoPDF
**Note:** The Advanced AR Settlement feature is in **Limited Availability**. This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). 

Creates PDF for a specified credit memo. To access the generated PDF, you can download it by clicking **View PDF** on the detailed credit memo page through the Zuora UI.



```js
zuora.POST_CreditMemoPDF({
  "creditMemoId": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* creditMemoId (string) **required** - The unique ID of the credit memo that you want to create PDF for. For example, 8a8082e65b27f6c3015ba45ff82c7172.

### PUT_PostCreditMemo
**Note:** The Advanced AR Settlement feature is in **Limited Availability**. This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). 

Posts a credit memo to activate it. You can post credit memos only if you have the [Billing permissions](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/A_Administrator_Settings/User_Roles/d_Billing_Roles#Billing_Permissions).



```js
zuora.PUT_PostCreditMemo({
  "creditMemoId": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* creditMemoId (string) **required** - The unique ID of a credit memo. For example, 8a8082e65b27f6c3015ba45ff82c7172.

### POST_CM_TaxationItems
**Note:** This feature is only available if you have the Advanced AR Settlement feature enabled. The Advanced AR Settlement feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).

Creates taxation items for a credit memo.



```js
zuora.POST_CM_TaxationItems({
  "creditMemoId": "",
  "body": {}
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* creditMemoId (string) **required** - The unique ID of a credit memo. For example, 8a8082e65b27f6c3015ba45ff82c7172.
* body (object) **required**

### PUT_UnapplyCreditMemo
**Note:** The Advanced AR Settlement feature is in **Limited Availability**. This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).

Unapplies an applied credit memo from one or more invoices and debit memos. The full applied amount from invoices and debit memos is transferred into the unapplied amount of the credit memo. 

You can unapply a credit memo from an invoice or a debit memo only if you have the user permission. See [Billing Roles](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/A_Administrator_Settings/User_Roles/d_Billing_Roles) for more information.



```js
zuora.PUT_UnapplyCreditMemo({
  "body": {},
  "creditMemoId": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* body (object) **required**
* creditMemoId (string) **required** - The unique ID of a credit memo. For example, 8a8082e65b27f6c3015ba45ff82c7172.

### GET_BreakdownCreditMemoByOrder
**Note:** This operation is only available if you have the [Advanced AR Settlement](https://knowledgecenter.zuora.com/CB_Billing/Advanced_AR_Settlement) and [Order Metrics](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/Orders_Generation_for_Subscriptions_and_Amendments) features enabled. If you wish to have access to the features, submit a request at [Zuora Global Support](http://support.zuora.com/).


Retrieves a specified credit memo that is broken down by orders. The credit memo items might be broken down into a list of order rated items.



```js
zuora.GET_BreakdownCreditMemoByOrder({
  "creditMemoNumber": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* creditMemoNumber (string) **required** - Number of credit memo to be broken down.

### POST_RefundCreditMemo
**Note:** The Advanced AR Settlement feature is in **Limited Availability**. This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). 

Refunds a full or partial posted credit memo to your customers. Only the amount of unapplied part could be refunded. 

You can refund a credit memo only if you have the user permission. See [Billing Roles](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/A_Administrator_Settings/User_Roles/d_Billing_Roles) for more information.



```js
zuora.POST_RefundCreditMemo({
  "body": {
    "totalAmount": 0,
    "type": ""
  },
  "creditmemoId": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* body (object) **required**
* creditmemoId (string) **required** - The unique ID of a credit memo. For example, 8a8082e65b27f6c3015ba45ff82c7172.

### GET_CustomExchangeRates
This feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). 

This reference describes how to query custom foreign exchange rates from Zuora. You can use this API method to query exchange rates only if you use a custom exchange rate provider and upload rates with the Import Foreign Exchange Rates mass action. 



```js
zuora.GET_CustomExchangeRates({
  "currency": "",
  "startDate": "",
  "endDate": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* currency (string) **required** - The target base currency of the tenant. The exchange rates in the response are calculated in relation to the target currency.
* startDate (string) **required** - Start date of the date range for which you want to get exchange rates.
* endDate (string) **required** - End date of the date range for which you want to get exchange rates.

### GET_DebitMemos
**Note:** The Advanced AR Settlement feature is in **Limited Availability**. This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).

Retrieves the information about all debit memos associated with all customer accounts.



```js
zuora.GET_DebitMemos({}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* pageSize (integer) - Number of rows returned per page.
* fieldsFilterable (string) - This parameter restricts the data returned in the response. You can use this parameter to supply a dimension you want to filter on.
* sort (string) - This parameter restricts the order of the data returned in the response. You can use this parameter to supply a dimension you want to sort on.

### POST_DebitMemoFromPrpc
**Note:** The Advanced AR Settlement feature is in **Limited Availability**. This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). 

Creates an ad-hoc debit memo from a product rate plan charge. Zuora only supports one-time positive charges for debit memos. 

 You can create a debit memo only if you have the user permission. See [Billing Roles](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/A_Administrator_Settings/User_Roles/d_Billing_Roles) for more information.



```js
zuora.POST_DebitMemoFromPrpc({
  "body": {
    "accountId": ""
  }
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* body (object) **required**

### DELETE_DebitMemo
**Note:** The Advanced AR Settlement feature is in **Limited Availability**. This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). 

Deletes a debit memo. Only debit memos with the Cancelled status can be deleted. 

You can delete a debit memo only if you have the user permission. See [Billing Roles](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/A_Administrator_Settings/User_Roles/d_Billing_Roles) for more information.



```js
zuora.DELETE_DebitMemo({
  "debitMemoId": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* debitMemoId (string) **required** - The unique ID of a debit memo. For example, 8a8082e65b27f6c3015ba419f3c2644e.

### GET_DebitMemo
**Note:** The Advanced AR Settlement feature is in **Limited Availability**. This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). 

Retrieves the information about a specific debit memo.



```js
zuora.GET_DebitMemo({
  "debitMemoId": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* debitMemoId (string) **required** - The unique ID of a debit memo. For example, 8a8082e65b27f6c3015ba419f3c2644e.

### PUT_DebitMemo
**Note:** The Advanced AR Settlement feature is in **Limited Availability**. This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). 

Updates the basic and finance information about a debit memo. Currently, Zuora supports updating tax-exclusive memo items, but does not support updating tax-inclusive memo items. 

If the amount of a memo item is updated, the tax will be recalculated in the following conditions:
  - The memo is created from a product rate plan charge and you use Avalara to calculate the tax.
  - The memo is created from an invoice and you use Avalara or Zuora Tax to calculate the tax.

You can update a debit memo only if you have the user permission. See [Billing Roles](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/A_Administrator_Settings/User_Roles/d_Billing_Roles) for more information.



```js
zuora.PUT_DebitMemo({
  "body": {},
  "debitMemoId": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* body (object) **required**
* debitMemoId (string) **required** - The unique ID of a debit memo. For example, 8a8082e65b27f6c3015ba419f3c2644e.

### PUT_CancelDebitMemo
**Note:** The Advanced AR Settlement feature is in **Limited Availability**. This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). 

Cancels a debit memo. Only debit memos with the Draft status can be cancelled. 

You can cancel a debit memo only if you have the user permission. See [Billing Roles](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/A_Administrator_Settings/User_Roles/d_Billing_Roles) for more information.



```js
zuora.PUT_CancelDebitMemo({
  "debitMemoId": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* debitMemoId (string) **required** - The unique ID of a debit memo. For example, 8a8082e65b27f6c3015ba419f3c2644e.

### POST_EmailDebitMemo
**Note:** The Advanced AR Settlement feature is in **Limited Availability**. This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). 

Sends a posted debit memo to the specified email addresses manually.



## Notes
  - You must activate the **Email Debit Memo | Manually email Debit Memo** notification before emailing debit memos. To include the debit memo PDF in the email, select the **Include Debit Memo PDF** check box in the **Edit notification** dialog from the Zuora UI. See [Create and Edit Notifications](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/Notifications/C_Create_Notifications#section_2) for more information.


  - Zuora sends the email messages based on the email template you set. You can set the email template to use in the **Delivery Options** panel of the **Edit notification** dialog from the Zuora UI. By default, the **Manual Email for Debit Memo Default Template** template is used. See [Create and Edit Email Templates](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/Notifications/Create_Email_Templates) for more information.


  - The debit memos are sent only to the work email addresses or personal email addresses of the Bill To contact if the following conditions are all met:

    * The `useEmailTemplateSetting` field is set to `false`.
    * The email addresses are not specified in the `emailAddresses` field.



```js
zuora.POST_EmailDebitMemo({
  "Request": {},
  "debitMemoId": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* Request (object) **required**
* debitMemoId (string) **required** - The ID of a posted debit memo. For example, 8a8082e65b27f6c3015ba419f3c2644e.

### GET_DebitMemoItems
**Note:** The Advanced AR Settlement feature is in **Limited Availability**. This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). 

Retrieves the information about all items of a debit memo. A debit memo item is a single line item in a debit memo. 



```js
zuora.GET_DebitMemoItems({
  "debitMemoId": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* pageSize (integer) - Number of rows returned per page.
* debitMemoId (string) **required** - The unique ID of a debit memo. For example, 8a8082e65b27f6c3015ba419f3c2644e.
* fieldsFilterable (string) - This parameter restricts the data returned in the response. You can use this parameter to supply a dimension you want to filter on.
* sort (string) - This parameter restricts the order of the data returned in the response. You can use this parameter to supply a dimension you want to sort on.

### GET_DebitMemoItem
**Note:** The Advanced AR Settlement feature is in **Limited Availability**. This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).

Retrieves the information about a specific item of a debit memo. A debit memo item is a single line item in a debit memo.



```js
zuora.GET_DebitMemoItem({
  "dmitemid": "",
  "debitMemoId": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* dmitemid (string) **required** - The unique ID of a debit memo item. You can get the debit memo item ID from the response of [Get debit memo items](https://www.zuora.com/developer/api-reference/#operation/GET_DebitMemoItems).
* debitMemoId (string) **required** - The unique ID of a debit memo. For example, 8a8082e65b27f6c3015ba419f3c2644e.

### POST_DebitMemoPDF
**Note:** The Advanced AR Settlement feature is in **Limited Availability**. This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).

Creates PDF for a specified debit memo. To access the generated PDF, you can download it by clicking **View PDF** on the detailed debit memo page through the Zuora UI.



```js
zuora.POST_DebitMemoPDF({
  "debitMemoId": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* debitMemoId (string) **required** - The unique ID of the debit memo that you want to create PDF for. For example, 8a8082e65b27f6c3015ba419f3c2644e.

### PUT_PostDebitMemo
**Note:** The Advanced AR Settlement feature is in **Limited Availability**. This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). 

Posts a debit memo to activate it. You can post debit memos only if you have the [Billing permissions](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/A_Administrator_Settings/User_Roles/d_Billing_Roles#Billing_Permissions).



```js
zuora.PUT_PostDebitMemo({
  "debitMemoId": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* debitMemoId (string) **required** - The unique ID of a debit memo. For example, 8a8082e65b27f6c3015ba419f3c2644e.

### POST_DM_TaxationItems
**Note:** This feature is only available if you have the Advanced AR Settlement feature enabled. The Advanced AR Settlement feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).

Creates taxation items for a debit memo.



```js
zuora.POST_DM_TaxationItems({
  "debitMemoId": "",
  "body": {}
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* debitMemoId (string) **required** - The unique ID of a debit memo. For example, 8a8082e65b27f6c3015ba419f3c2644e.
* body (object) **required**

### GET_Describe
Provides a reference listing of each object that is available in your Zuora tenant.

The information returned by this call is useful if you are using [CRUD: Create Export](https://www.zuora.com/developer/api-reference/#operation/Object_POSTExport) or the [AQuA API](https://knowledgecenter.zuora.com/DC_Developers/T_Aggregate_Query_API) to create a data source export. See [Export ZOQL](https://knowledgecenter.zuora.com/DC_Developers/M_Export_ZOQL) for more information.

## Response
The response contains an XML document that lists the fields of the specified object. Each of the object's fields is represented by a `<field>` element in the XML document.
    
Each `<field>` element contains the following elements:
  * `<name>` - API name of the field
  * `<label>` - Name of the field in the Zuora user interface
  * `<type>` - Data type of the field. For example, `text`, `decimal`, or `picklist`. If the data type is `picklist`, the `<field>` element contains an `<options>` element that lists the possible values of the field
  * `<contexts>` - Specifies the availability of the field. If the `<contexts>` element lists the `export` context, the field is available for use in data source exports

For example:
```xml
<field>
  <name>TaxMode</name>
  <label>Tax Mode</label>
  <type>picklist</type>
  <options>
    <option>TaxExclusive</option>
    <option>TaxInclusive</option>
  </options>
  <contexts>
    <context>export</context>
  </contexts>
</field>
```

It is strongly recommended that your integration checks `<contexts>` elements in the response. If your integration does not check `<contexts>` elements, your integration may process fields that are not available for use in data source exports. See [Changes to the Describe API](https://knowledgecenter.zuora.com/DC_Developers/M_Export_ZOQL/Changes_to_the_Describe_API) for more information.



```js
zuora.GET_Describe({
  "object": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* object (string) **required** - API name of an object in your Zuora tenant. For example, `InvoiceItem`. See [Zuora Object Model](https://www.zuora.com/developer/api-reference/#section/Zuora-Object-Model) for the list of valid object names.

### GET_Entities
**Note:** The Multi-entity feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). 


Retrieves detailed information of certain entities in a multi-entity hierarchy.


You can retrieve:

 - Provisioned entities
  
 - Unprovisioned entities
  
 - Both provisioned and unprovisioned entities

## User Access Permission

You can make the call as any entity user.



```js
zuora.GET_Entities({}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* provisioned (string) - Specify whether to retrieve provisioned or unprovisioned entities:

### POST_Entities
**Note:** The Multi-entity feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). 

Creates an entity in a multi-entity hierarchy.

## User Access Permission
You must make the call as a global entity administrator.

## Notes
* We recommend that you assign only one administrator to manage the entity hierarchy, because an administrator of the global entity by default can only access to the entities that are created by themselves.



```js
zuora.POST_Entities({
  "Request": {
    "name": "",
    "parentId": "",
    "locale": "",
    "timezone": ""
  }
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* Request (object) **required**

### DELETE_Entities
**Note:** The Multi-entity feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). 

Removes an entity and its sub-entities from a multi-entity hierarchy. You can only remove unprovisioned entities. An error occurred when you remove a provisioned entity.

## User Access Permission
You must make the call as a global entity administrator.   



```js
zuora.DELETE_Entities({
  "id": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* id (string) **required** - Specify the Id of the entity that you want to delete. You can get the entity Id from the GET Entities call.

### GET_EntityById
**Note:** The Multi-entity feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). 

Retrieves detailed information about a specified entity.

## User Access Permission
You can make the call as any entity user.     



```js
zuora.GET_EntityById({
  "id": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* id (string) **required** - Specify the Id of the entity that you want to retrieve. You can get the entity Id from the GET Entities call.

### PUT_Entities
**Note:** The Multi-entity feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). 

Edits the following information about an unprovisioned entity:

 - Name
 
 - Display name
 
 - Locale
 
 - Timezone

## User Access Permission
You must make the call as a global entity administrator.

## Notes
* You are not allowed to edit the locale and time zone of the provisioned entities through the REST API.
* You are not allowed to edit the display name of the global entity.



```js
zuora.PUT_Entities({
  "id": "",
  "Request": {}
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* id (string) **required** - The Id of the entity that you want to edit. You can get the entity Id from the GET Entities call.
* Request (object) **required**

### PUT_ProvisionEntity
**Note:** The Multi-entity feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). 

Provisions an entity. You can only provision an entity if its parent entity is provisioned.

## User Access Permission
You must make the call as a global entity administrator. 

## Notes
* Zuora does not allow you to remove a provisioned entity from the multi-entity hierarchy. So before you provision an entity, make sure that you put the entity in the correct place in the multi-entity hierarchy. 



```js
zuora.PUT_ProvisionEntity({
  "id": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* id (string) **required** - Specify the Id of the entity that you want to provision.  You can get the entity Id from the GET Entities call.

### GET_EntityConnections
**Note:** The Multi-entity feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).

Retrieves information about certain connections for a specified entity. You can specify the entity to retrieve in the `entityId` or `entityName` request header.

You can retrieve:
 - Inbound connections
 - Outbound connections
 - Both inbound and outbound connections

## User Access Permission
You can make the call as any entity user. 



```js
zuora.GET_EntityConnections({}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* pageSize (integer) - Number of rows returned per page.
* type (string) - Specifies whether to retrieve inbound or outbound connections for an entity.

### POST_EntityConnections
**Note:** The Multi-entity feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).

Initiates a connection request from a source entity to a target entity.

## User Access Permission
You must make the call as a source entity administrator. Also, this administrator must have permission to access to the target entity.



```js
zuora.POST_EntityConnections({}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* Request (object)

### PUT_EntityConnectionsAccept
**Note:** The Multi-entity feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).

Accepts a connection request.

## User Access Permission
You must make the call as an entity administrator to accept a connection request.



```js
zuora.PUT_EntityConnectionsAccept({
  "connection-id": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* connection-id (string) **required** - The ID of the connection that you want to accept.

### PUT_EntityConnectionsDeny
**Note:** The Multi-entity feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).

Denies a connection request.

## User Access Permission
You must make the call as an entity administrator to deny a connection request.



```js
zuora.PUT_EntityConnectionsDeny({
  "connection-id": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* connection-id (string) **required** - The ID of the connection that you want to deny.

### PUT_EntityConnectionsDisconnect
**Note:** The Multi-entity feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).

Disconnects an established connection request.

## User Access Permission
You must make the call as an administrator of the target entity or source entity.



```js
zuora.PUT_EntityConnectionsDisconnect({
  "connection-id": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* connection-id (string) **required** - The ID of the connection that you want to disconnect.

### GET_Files
Retrieve a file by specifying its file ID. You can retrieve accounting period reports, such as the Revenue Detail report, as well as other files such as invoice PDFs.

## Example

```curl
curl -i -k -H "apiAccessKeyId:$USER_NAME" -H "apiSecretAccessKey:$PASSWORD"
-H "Accept:application/pdf"
-X GET https://rest.zuora.com/v1/files/2c92c08c55534cf00155581fb474314d
-o /Users/jsmith/Downloads/invoiceFile1.pdf
```
The invoice PDF is downloaded to /Users/jsmith/Downloads and named invoiceFile1.pdf.

## File Size Limitation
The maximum export file size is 2047MB. If you have large data requests that go over this limit, you will get the following 403 HTTP response code from Zuora.

`<security:max-object-size>2047MB</security:max-object-size>`

Submit a request at [Zuora Global Support](https://zuora.zendesk.com/agent/) if you require additional assistance.

We can work with you to determine if large file optimization is an option for you.



```js
zuora.GET_Files({
  "file-id": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* file-id (string) **required** - The Zuora ID of the file you want to retrieve.

### POST_HMACSignatures
This REST API reference describes how to return unique signature and token values that used to process a CORS enabled API call.



```js
zuora.POST_HMACSignatures({
  "Request": {
    "uri": "",
    "method": ""
  }
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* Request (object) **required**

### Get_HostedPages
The hostedpages call returns the Payment Pages configuration metadata,
specifically, page ID, page version, payment method type.

The following are the version-specific and general REST requests for Payment Pages:

* The request for Payment Pages 1.0 configuration information: `GET <BaseURL>/hostedpages?version=1`
* The request for Payment Pages 2.0 configuration information: `GET <BaseURL>/hostedpages?version=2`
* The request for all versions of Payment Pages configuration information: `GET <BaseURL>/hostedpages`

## Notes
If you do not have the corresponding tenant setting enabled, e.g., the request `version` parameter set to 2 with the Payment Pages 2.0 setting disabled, you will receive an error.



```js
zuora.Get_HostedPages({}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* pageSize (integer) - Number of rows returned per page.
* versionNumber (string) - Version of the Payment Pages for which you want to retrieve the configuration information. Specify 1 for Payment Pages 1.0 or 2 for Payment Pages 2.0. If omitted, information for all versions of Payment Pages are returned.

### POST_CreditMemoFromInvoice
**Note:** The Advanced AR Settlement feature is in **Limited Availability**. This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). 

Creates an ad-hoc credit memo from an invoice.

You can create a credit memo from an invoice only if you have the user permission. See [Billing Roles](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/A_Administrator_Settings/User_Roles/d_Billing_Roles) for more information.



```js
zuora.POST_CreditMemoFromInvoice({
  "body": {},
  "invoiceId": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* body (object) **required**
* invoiceId (string) **required** - The ID of an invoice that you want to create a credit memo from.

### POST_DebitMemoFromInvoice
**Note:** The Advanced AR Settlement feature is in **Limited Availability**. This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). 

Creates an ad-hoc debit memo from an invoice.

You can create a debit memo from an invoice only if you have the user permission. See [Billing Roles](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/A_Administrator_Settings/User_Roles/d_Billing_Roles) for more information.



```js
zuora.POST_DebitMemoFromInvoice({
  "invoiceId": "",
  "body": {}
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* invoiceId (string) **required** - The ID of an invoice that you want to create a debit memo from.
* body (object) **required**

### POST_EmailInvoice
Sends a posted invoice to the specified email addresses manually.



## Notes
  - You must activate the **Manual Email For Invoice | Manual Email For Invoice** notification before emailing invoices. To include the invoice PDF in the email, select the **Include Invoice PDF** check box in the **Edit notification** dialog from the Zuora UI. See [Create and Edit Notifications](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/Notifications/C_Create_Notifications#section_2) for more information.


  - Zuora sends the email messages based on the email template you set. You can set the email template to use in the **Delivery Options** panel of the **Edit notification** dialog from the Zuora UI. By default, the **Invoice Posted Default Email Template** template is used. See [Create and Edit Email Templates](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/Notifications/Create_Email_Templates) for more information.


  - The invoices are sent only to the work email addresses or personal email addresses of the Bill To contact if the following conditions are all met:

    * The `useEmailTemplateSetting` field is set to `false`.
    * The email addresses are not specified in the `emailAddresses` field.



```js
zuora.POST_EmailInvoice({
  "Request": {},
  "invoiceId": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* Request (object) **required**
* invoiceId (string) **required** - The ID of the invoice. For example, 2c92c8955bd63cc1015bd7c151af02ab.

### PUT_ReverseInvoice
Reverses posted invoices. 


**Note:** This feature is only available if you have the Advanced AR Settlement feature enabled. The Advanced AR Settlement feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).

**Restrictions**

You are not allowed to reverse an invoice if one of the following restrictions is met:

* Payments and credit memos are applied to the invoice.
* The invoice is split.
* The invoice is not in Posted status.
* The total amount of the invoice is less than 0 (a negative invoice).
* Using Tax Connector for Extension Platform to calculate taxes.

See [Reverse Posted Invoices](https://knowledgecenter.zuora.com/CB_Billing/IA_Invoices/Reverse_Posted_Invoices) for more information.



```js
zuora.PUT_ReverseInvoice({
  "invoiceId": "",
  "Request": {}
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* invoiceId (string) **required** - The ID of the invoice. For example, 2c92c8955bd63cc1015bd7c151af02ab.
* Request (object) **required**

### GET_BreakdownInvoiceByOrder
**Note:** This feature is only available if you have the [Order Metrics](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/Orders_Generation_for_Subscriptions_and_Amendments) feature enabled. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). We will investigate your use cases and data before enabling this feature for you.


Retrieves a specified invoice that is broken down by orders. The invoice items might be broken down into a list of order rated items.



```js
zuora.GET_BreakdownInvoiceByOrder({
  "invoiceNumber": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* invoiceNumber (string) **required** - Number of invoice to be broken down.

### POST_SummaryJournalEntry
This REST API reference describes how to manually create a summary journal entry. Request and response field descriptions and sample code are provided.
## Requirements
1.The sum of debits must equal the sum of credits in the summary journal entry.

2.The following applies only if you use foreign currency conversion:
  * If you have configured Aggregate transactions with different currencies during a Journal Run to "Yes", the value of the **currency** field must be the same as your tenant's home currency. That is, you must create journal entries using your home currency.
  * All journal entries in an accounting period must either all be aggregated or all be unaggregated. You cannot have a mix of aggregated and unaggregated journal entries in the same accounting period.



```js
zuora.POST_SummaryJournalEntry({
  "Request": {
    "journalEntryDate": "",
    "accountingPeriodName": "",
    "currency": "",
    "journalEntryItems": []
  }
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* Request (object) **required**

### GET_AllSummaryJournalEntries

This REST API reference describes how to retrieve information about all summary journal entries in a journal run.



```js
zuora.GET_AllSummaryJournalEntries({
  "jr-number": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* pageSize (integer) - Number of rows returned per page.
* jr-number (string) **required** - Journal run number.

### DELETE_SummaryJournalEntry
This reference describes how to delete a summary journal entry using the REST API.

You must have the "Delete Cancelled Journal Entry" user permission enabled to delete summary journal entries.

A summary journal entry must be canceled before it can be deleted.



```js
zuora.DELETE_SummaryJournalEntry({
  "je-number": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* je-number (string) **required** - Journal entry number in the format JE-00000001.

### GET_SummaryJournalEntry
This REST API reference describes how to get information about a summary journal entry by its journal entry number.



```js
zuora.GET_SummaryJournalEntry({
  "je-number": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* je-number (string) **required**

### PUT_BasicSummaryJournalEntry

This REST API reference describes how to update the basic information of a summary journal entry. Request and response field descriptions and sample code are provided.



```js
zuora.PUT_BasicSummaryJournalEntry({
  "je-number": "",
  "Request": {}
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* je-number (string) **required** - Journal entry number in the format JE-00000001.
* Request (object) **required**

### PUT_SummaryJournalEntry

This reference describes how to cancel a summary journal entry using the REST API.

You must have the "Cancel Journal Entry" user permission enabled to cancel summary journal entries.

A summary journal entry cannot be canceled if its Transferred to Accounting status is "Yes" or "Processing".



```js
zuora.PUT_SummaryJournalEntry({
  "je-number": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* je-number (string) **required** - Journal entry number in the format JE-00000001.

### POST_JournalRun
This REST API reference describes how to create a journal run. Request and response field descriptions and sample code are provided.



```js
zuora.POST_JournalRun({
  "Request": {
    "transactionTypes": [],
    "journalEntryDate": ""
  }
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* Request (object) **required**

### DELETE_JournalRun
This reference describes how to delete a journal run using the REST API.
                      
 You can only delete journal runs that have already been canceled.
                      
 You must have the "Delete Cancelled Journal Run" Zuora Finance user permission enabled to delete journal runs.



```js
zuora.DELETE_JournalRun({
  "jr-number": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* jr-number (string) **required** - Journal run number. Must be a valid journal run number in the format `JR-00000001`.

### GET_JournalRun
This REST API reference describes how to get information about a journal run. Request and response field descriptions and sample code are provided.



```js
zuora.GET_JournalRun({
  "jr-number": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* jr-number (string) **required** - Journal run number. Must be a valid journal run number in the format `JR-00000001`.

### PUT_JournalRun
This reference describes how to cancel a journal run using the REST API.
          
The summary journal entries in the journal run are canceled asynchronously. See the "Example" section below for details.
          
You must have the "Cancel Journal Run" Zuora Finance user permission enabled to cancel journal runs.

## Notes
When you cancel a journal run, the summary journal entries associated with that journal run are canceled asynchronously. A response of `{ "success": true }` means only that the specified journal run has a status of "Pending", "Error", or "Completed" and therefore can be canceled, but does not mean that the whole journal run was successfully canceled.

For example, let's say you want to cancel journal run JR-00000075. The journal run status is "Completed" and it contains ten journal entries. One of the journal entries has its Transferred to Accounting status set to "Yes", meaning that the entry cannot be canceled. The workflow might go as follows:
1. You make an API call to cancel the journal run.
2. The journal run status is "Completed", so you receive a response of `{ "success": true }`.
3. Zuora begins asynchronously canceling journal entries associated with the journal run. The journal entry whose Transferred to Accounting status is "Yes" fails to be canceled. The cancelation process continues, and the other journal entries are successfully canceled.
4. The journal run status remains as "Completed". The status does not change to "Canceled" because the journal run still contains a journey entry that is not canceled.



```js
zuora.PUT_JournalRun({
  "jr-number": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* jr-number (string) **required** - Journal run number. Must be a valid journal run number in the format JR-00000001. 

### GET_CalloutHistory
This REST API reference describes how to get a notification history for callouts.



```js
zuora.GET_CalloutHistory({}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* pageSize (integer) - Number of rows returned per page.
* endTime (string) - The final date and time of records to be returned. Defaults to now. Use format yyyy-MM-ddTHH:mm:ss.
* startTime (string) - The initial date and time of records to be returned. Defaults to (end time - 1 day). Use format yyyy-MM-ddTHH:mm:ss.
* objectId (string) - The ID of an object that triggered a callout notification.
* failedOnly (boolean) - If `true`, only return failed records. If `false`, return all records in the given date range. The default value is `true`.
* eventCategory (string) - Category of records to be returned by event category.
* includeResponseContent (boolean)

### GET_EmailHistory
This REST API reference describes how to get a notification history for notification emails.


## Notes
Request parameters and their values may be appended with a "?" following the HTTPS GET request.  Additional request parameter are separated by "&". 

For example:

`GET https://rest.zuora.com/v1/notification-history/email?startTime=2015-01-12T00:00:00&endTime=2015-01-15T00:00:00&failedOnly=false&eventCategory=1000&pageSize=1`



```js
zuora.GET_EmailHistory({}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* pageSize (integer) - Number of rows returned per page.
* endTime (string) - The end date and time of records to be returned. Defaults to now. Use format yyyy-MM-ddTHH:mm:ss. The maximum date range (endTime - startTime) is three days.
* startTime (string) - The initial date and time of records to be returned. Defaults to (end time - 1 day). Use format yyyy-MM-ddTHH:mm:ss. The maximum date range (endTime - startTime) is three days.
* objectId (string) - The Id of an object that triggered an email notification.
* failedOnly (boolean) - If `true`, only returns failed records. When `false`, returns all records in the given date range. Defaults to `true` when not specified.
* eventCategory (string) - Category of records to be returned by event category.

### Object_POSTAccount
CRUD: Create Account


```js
zuora.Object_POSTAccount({
  "CreateRequest": {
    "BillCycleDay": 0,
    "Currency": "",
    "Name": "",
    "Status": ""
  }
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* CreateRequest (object) **required**

### Object_DELETEAccount
CRUD: Delete Account


```js
zuora.Object_DELETEAccount({
  "id": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* id (string) **required** - Object id

### Object_GETAccount
CRUD: Retrieve Account


```js
zuora.Object_GETAccount({
  "id": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* fields (string) - Object fields to return
* id (string) **required** - Object id

### Object_PUTAccount
CRUD: Update Account


```js
zuora.Object_PUTAccount({
  "id": "",
  "ModifyRequest": {}
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* id (string) **required** - Object id
* ModifyRequest (object) **required**

### Object_POSTAmendment
This operation has some limitations. Zuora recommends that you use [Update subscription](https://www.zuora.com/developer/api-reference/#operation/PUT_Subscription) to amend subscriptions. If you need to create an Amendment object, Zuora recommends that you use [Amend](https://www.zuora.com/developer/api-reference/#operation/Action_POSTamend) instead of CRUD: Create Amendment.



```js
zuora.Object_POSTAmendment({
  "CreateRequest": {
    "SubscriptionId": "",
    "Type": ""
  }
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* CreateRequest (object) **required**

### Object_DELETEAmendment
CRUD: Delete amendment


```js
zuora.Object_DELETEAmendment({
  "id": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* id (string) **required** - Object id

### Object_GETAmendment
CRUD: Get amendment


```js
zuora.Object_GETAmendment({
  "id": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* fields (string) - Object fields to return
* id (string) **required** - Object id

### Object_PUTAmendment
CRUD: Update amendment


```js
zuora.Object_PUTAmendment({
  "id": "",
  "ModifyRequest": {}
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* id (string) **required** - Object id
* ModifyRequest (object) **required**

### Object_POSTBillRun
**Note:** This feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com). 


Creates an ad hoc bill run or a single account or multiple customer accounts.

When creating a single account ad hoc bill run, your request must include `AccountId` and must not include `Batch` or `BillCycleDay`. 



```js
zuora.Object_POSTBillRun({
  "CreateRequest": {
    "InvoiceDate": "",
    "TargetDate": ""
  }
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* CreateRequest (object) **required**

### Object_DELETEBillRun
**Note:** This feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com). 


When deleting a bill run, the logic is the same as when using the UI to delete a bill run. The only required parameter is `BillRunId`. The Status for the bill run must be `Canceled` in order to delete a bill run.



```js
zuora.Object_DELETEBillRun({
  "id": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* id (string) **required** - Object id

### Object_GETBillRun
**Note:** This feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com). 


Business operations depending on the completion of the bill run will not be available while the bill run query returns `PostInProgress`. Upon completion of the bill run, a query will return `Posted`.



```js
zuora.Object_GETBillRun({
  "id": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* fields (string) - Object fields to return
* id (string) **required** - Object id

### Object_PUTBillRun
**Note:** This feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com). 


## Post a Bill Run

Posting a bill run is an asynchronous operation. To post a bill run, the current bill run must have a status of `Completed`.

When a bill run is posted, its status is changed to `PostInProgress`. Once all invoices for this bill run are posted then its status is changed to `Posted`.   

When you post a bill run and query the status of a bill run, you will get one of the following results `PostInProgress`, `Completed`, or `Posted`. If all invoices in the bill run are posted, then the status of the bill run is `Posted`. If one or more invoices fail to post, the status will change back to `Completed` and you will need to post the bill run again.

## Cancel a Bill Run

Canceling a bill run is an asynchronous operation. When canceling a bill run, the logic is the same as when using the UI to cancel a bill run. You need to provide the `BillRunId`, and set the Status to `Canceled`. 

When canceling a bill run, consider the following:

* Canceling a bill run with a `Completed` status.
  * Only the current bill run will be canceled.
* Canceling a bill run with a `Pending` status.
  * When canceling an Ad-hoc bill run, only the current bill run will be canceled.
  * When canceling a scheduled bill, all scheduled bill runs will be canceled.

The Cancel operation may not be successful. Its success depends on its current business validation. Only a bill run that has no posted invoices can be canceled. If any posted invoices belong to the bill run then an invalid value exception will be thrown with the message, "The Bill Run cannot be Cancelled, There are Posted invoices."



```js
zuora.Object_PUTBillRun({
  "id": "",
  "ModifyRequest": {
    "Status": ""
  }
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* id (string) **required** - Object id
* ModifyRequest (object) **required**

### Object_GETCommunicationProfile
CRUD: Retrieve CommunicationProfile


```js
zuora.Object_GETCommunicationProfile({
  "id": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* fields (string) - Object fields to return
* id (string) **required** - Object id

### Object_POSTContact
CRUD: Create Contact


```js
zuora.Object_POSTContact({
  "CreateRequest": {
    "AccountId": "",
    "FirstName": "",
    "LastName": ""
  }
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* CreateRequest (object) **required**

### Object_DELETEContact
CRUD: Delete Contact


```js
zuora.Object_DELETEContact({
  "id": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* id (string) **required** - Object id

### Object_GETContact
CRUD: Retrieve Contact


```js
zuora.Object_GETContact({
  "id": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* fields (string) - Object fields to return
* id (string) **required** - Object id

### Object_PUTContact
CRUD: Update Contact


```js
zuora.Object_PUTContact({
  "id": "",
  "ModifyRequest": {}
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* id (string) **required** - Object id
* ModifyRequest (object) **required**

### Object_GETCreditBalanceAdjustment
CRUD: Retrieve CreditBalanceAdjustment


```js
zuora.Object_GETCreditBalanceAdjustment({
  "id": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* fields (string) - Object fields to return
* id (string) **required** - Object id

### Object_POSTExport
Use this operation to create a data source export. After you have created a data source export, use [CRUD: Retrieve Export](https://www.zuora.com/developer/api-reference/#operation/Object_GETExport) to check the status of the data source export and access the exported data.

When you export data from Zuora, each exported file is available for download for 7 days. Data source exports (Export objects) older than 90 days are automatically deleted.



```js
zuora.Object_POSTExport({
  "CreateRequest": {
    "Format": "",
    "Query": ""
  }
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* CreateRequest (object) **required**

### Object_GETExport
Use this operation to check the status of a data source export and access the exported data.

When you export data from Zuora, each exported file is available for download for 7 days. Data source exports (Export objects) older than 90 days are automatically deleted.



```js
zuora.Object_GETExport({
  "id": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* fields (string) - Object fields to return
* id (string) **required** - Object id

### Object_DELETEFeature
CRUD: Delete Feature


```js
zuora.Object_DELETEFeature({
  "id": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* id (string) **required** - Object id

### Object_GETFeature
CRUD: Retrieve Feature


```js
zuora.Object_GETFeature({
  "id": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* fields (string) - Object fields to return
* id (string) **required** - Object id

### Object_GETImport
CRUD: Retrieve Import


```js
zuora.Object_GETImport({
  "id": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* fields (string) - Object fields to return
* id (string) **required** - Object id

### Object_POSTInvoiceAdjustment
CRUD: Create InvoiceAdjustment


```js
zuora.Object_POSTInvoiceAdjustment({
  "CreateRequest": {
    "Amount": 0,
    "Type": ""
  }
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* CreateRequest (object) **required**

### Object_DELETEInvoiceAdjustment
CRUD: Delete InvoiceAdjustment


```js
zuora.Object_DELETEInvoiceAdjustment({
  "id": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* id (string) **required** - Object id

### Object_GETInvoiceAdjustment
CRUD: Retrieve InvoiceAdjustment


```js
zuora.Object_GETInvoiceAdjustment({
  "id": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* fields (string) - Object fields to return
* id (string) **required** - Object id

### Object_PUTInvoiceAdjustment
CRUD: Update InvoiceAdjustment


```js
zuora.Object_PUTInvoiceAdjustment({
  "id": "",
  "ModifyRequest": {}
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* id (string) **required** - Object id
* ModifyRequest (object) **required**

### Object_DELETEInvoiceItemAdjustment
CRUD: Delete InvoiceItemAdjustment


```js
zuora.Object_DELETEInvoiceItemAdjustment({
  "id": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* id (string) **required** - Object id

### Object_GETInvoiceItemAdjustment
CRUD: Retrieve InvoiceItemAdjustment


```js
zuora.Object_GETInvoiceItemAdjustment({
  "id": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* fields (string) - Object fields to return
* id (string) **required** - Object id

### Object_GETInvoiceItem
CRUD: Retrieve InvoiceItem


```js
zuora.Object_GETInvoiceItem({
  "id": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* fields (string) - Object fields to return
* id (string) **required** - Object id

### Object_POSTInvoicePayment
CRUD: Create InvoicePayment


```js
zuora.Object_POSTInvoicePayment({
  "CreateRequest": {
    "Amount": 0,
    "InvoiceId": "",
    "PaymentId": ""
  }
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* CreateRequest (object) **required**

### Object_GETInvoicePayment
CRUD: Retrieve InvoicePayment


```js
zuora.Object_GETInvoicePayment({
  "id": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* fields (string) - Object fields to return
* id (string) **required** - Object id

### Object_PUTInvoicePayment
CRUD: Update InvoicePayment


```js
zuora.Object_PUTInvoicePayment({
  "id": "",
  "ModifyRequest": {}
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* id (string) **required** - Object id
* ModifyRequest (object) **required**

### Object_GETInvoiceSplitItem
CRUD: Retrieve InvoiceSplitItem


```js
zuora.Object_GETInvoiceSplitItem({
  "id": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* fields (string) - Object fields to return
* id (string) **required** - Object id

### Object_GETInvoiceSplit
CRUD: Retrieve InvoiceSplit


```js
zuora.Object_GETInvoiceSplit({
  "id": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* fields (string) - Object fields to return
* id (string) **required** - Object id

### Object_DELETEInvoice
CRUD: Delete Invoice


```js
zuora.Object_DELETEInvoice({
  "id": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* id (string) **required** - Object id

### Object_GETInvoice
CRUD: Retrieve Invoice


```js
zuora.Object_GETInvoice({
  "id": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* fields (string) - Object fields to return
* id (string) **required** - Object id

### Object_PUTInvoice
CRUD: Update Invoice


```js
zuora.Object_PUTInvoice({
  "id": "",
  "ModifyRequest": {}
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* id (string) **required** - Object id
* ModifyRequest (object) **required**

### Object_POSTPayment
Creates a payment.



```js
zuora.Object_POSTPayment({
  "CreateRequest": {
    "AccountId": "",
    "EffectiveDate": "",
    "PaymentMethodId": "",
    "Status": "",
    "Type": ""
  }
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* CreateRequest (object) **required**

### Object_POSTPaymentMethod
CRUD: Create payment method


```js
zuora.Object_POSTPaymentMethod({
  "CreateRequest": {
    "AccountId": "",
    "Type": ""
  }
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* CreateRequest (object) **required**

### Object_GETPaymentMethodSnapshot
This REST API reference describes how to retrieve a Payment Method Snapshot.

A Payment Method Snapshot is a copy of the particular Payment Method used in a transaction. If the Payment Method is deleted, the Payment Method Snapshot continues to retain the data used in each of the past transactions.

## Notes
The following Payment Method fields are not available in Payment Method Snapshots:

* `Active`
* `AchAddress1`
* `AchAddress2`
* `CreatedById`
* `CreatedDate`
* `UpdatedById`
* `UpdatedDate`

The Payment Method Snapshot field `PaymentMethodId` is not available in Payment Methods.



```js
zuora.Object_GETPaymentMethodSnapshot({
  "id": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* fields (string) - Object fields to return
* id (string) **required** - Object id

### Object_GETPaymentMethodTransactionLog
CRUD: Retrieve PaymentMethodTransactionLog


```js
zuora.Object_GETPaymentMethodTransactionLog({
  "id": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* fields (string) - Object fields to return
* id (string) **required** - Object id

### Object_DELETEPaymentMethod
CRUD: Delete payment method


```js
zuora.Object_DELETEPaymentMethod({
  "id": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* id (string) **required** - Object id

### Object_GETPaymentMethod
CRUD: Get payment method


```js
zuora.Object_GETPaymentMethod({
  "id": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* fields (string) - Object fields to return
* id (string) **required** - Object id

### Object_PUTPaymentMethod
CRUD: Update payment method


```js
zuora.Object_PUTPaymentMethod({
  "id": "",
  "ModifyRequest": {}
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* id (string) **required** - Object id
* ModifyRequest (object) **required**

### Object_GETPaymentTransactionLog
Retrieves information about a specific payment transaction log.



```js
zuora.Object_GETPaymentTransactionLog({
  "id": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* id (string) **required** - The ID of a payment transaction log.

### Object_DELETEPayment
Deletes a payment. Only payments with the Cancelled status can be deleted. 



```js
zuora.Object_DELETEPayment({
  "id": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* id (string) **required** - The unique ID of the payment to be deleted. For example, 2c92c0f85d4e95ae015d4f7e5d690622.

### Object_GETPayment
Retrives the information about one specific payment. 



```js
zuora.Object_GETPayment({
  "id": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* id (string) **required** - The unique ID of a payment. For example, 2c92c095592623ea01596621ada84352.

### Object_PUTPayment
Updates a payment. 



```js
zuora.Object_PUTPayment({
  "id": "",
  "ModifyRequest": {}
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* id (string) **required** - The unique ID of a payment. For example, 2c92c095592623ea01596621ada84352.
* ModifyRequest (object) **required**

### Object_POSTProduct
CRUD: Create Product


```js
zuora.Object_POSTProduct({
  "CreateRequest": {
    "EffectiveEndDate": "",
    "EffectiveStartDate": "",
    "Name": ""
  }
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* CreateRequest (object) **required**

### Object_DELETEProductFeature
CRUD: Delete ProductFeature


```js
zuora.Object_DELETEProductFeature({
  "id": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* id (string) **required** - Object id

### Object_GETProductFeature
CRUD: Retrieve ProductFeature


```js
zuora.Object_GETProductFeature({
  "id": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* fields (string) - Object fields to return
* id (string) **required** - Object id

### Object_POSTProductRatePlan
CRUD: Create ProductRatePlan


```js
zuora.Object_POSTProductRatePlan({
  "CreateRequest": {
    "Name": "",
    "ProductId": ""
  }
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* CreateRequest (object) **required**

### Object_GETProductRatePlanChargeTier
CRUD: Retrieve ProductRatePlanChargeTier


```js
zuora.Object_GETProductRatePlanChargeTier({
  "id": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* fields (string) - Object fields to return
* id (string) **required** - Object id

### Object_DELETEProductRatePlanCharge
CRUD: Delete ProductRatePlanCharge


```js
zuora.Object_DELETEProductRatePlanCharge({
  "id": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* id (string) **required** - Object id

### Object_GETProductRatePlanCharge
CRUD: Retrieve ProductRatePlanCharge


```js
zuora.Object_GETProductRatePlanCharge({
  "id": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* fields (string) - Object fields to return
* id (string) **required** - Object id

### Object_DELETEProductRatePlan
CRUD: Delete ProductRatePlan


```js
zuora.Object_DELETEProductRatePlan({
  "id": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* id (string) **required** - Object id

### Object_GETProductRatePlan
CRUD: Retrieve ProductRatePlan


```js
zuora.Object_GETProductRatePlan({
  "id": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* fields (string) - Object fields to return
* id (string) **required** - Object id

### Object_PUTProductRatePlan
CRUD: Update ProductRatePlan


```js
zuora.Object_PUTProductRatePlan({
  "id": "",
  "ModifyRequest": {}
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* id (string) **required** - Object id
* ModifyRequest (object) **required**

### Object_DELETEProduct
CRUD: Delete Product


```js
zuora.Object_DELETEProduct({
  "id": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* id (string) **required** - Object id

### Object_GETProduct
CRUD: Retrieve Product


```js
zuora.Object_GETProduct({
  "id": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* fields (string) - Object fields to return
* id (string) **required** - Object id

### Object_PUTProduct
CRUD: Update Product


```js
zuora.Object_PUTProduct({
  "id": "",
  "ModifyRequest": {}
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* id (string) **required** - Object id
* ModifyRequest (object) **required**

### Object_GETRatePlanChargeTier
CRUD: Retrieve RatePlanChargeTier


```js
zuora.Object_GETRatePlanChargeTier({
  "id": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* fields (string) - Object fields to return
* id (string) **required** - Object id

### Object_GETRatePlanCharge
CRUD: Retrieve RatePlanCharge


```js
zuora.Object_GETRatePlanCharge({
  "id": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* fields (string) - Object fields to return
* id (string) **required** - Object id

### Object_GETRatePlan
CRUD: Retrieve RatePlan


```js
zuora.Object_GETRatePlan({
  "id": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* fields (string) - Object fields to return
* id (string) **required** - Object id

### Object_POSTRefund
CRUD: Create refund


```js
zuora.Object_POSTRefund({
  "CreateRequest": {
    "Amount": 0,
    "Type": ""
  }
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* CreateRequest (object) **required**

### Object_GETRefundInvoicePayment
CRUD: Retrieve RefundInvoicePayment


```js
zuora.Object_GETRefundInvoicePayment({
  "id": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* fields (string) - Object fields to return
* id (string) **required** - Object id

### Object_GETRefundTransactionLog
CRUD: Retrieve RefundTransactionLog


```js
zuora.Object_GETRefundTransactionLog({
  "id": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* fields (string) - Object fields to return
* id (string) **required** - Object id

### Object_DELETERefund
CRUD: Delete refund


```js
zuora.Object_DELETERefund({
  "id": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* id (string) **required** - Object id

### Object_GETRefund
CRUD: Get refund


```js
zuora.Object_GETRefund({
  "id": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* fields (string) - Object fields to return
* id (string) **required** - Object id

### Object_PUTRefund
CRUD: Update refund


```js
zuora.Object_PUTRefund({
  "id": "",
  "ModifyRequest": {}
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* id (string) **required** - Object id
* ModifyRequest (object) **required**

### Object_GETSubscriptionProductFeature
CRUD: Retrieve SubscriptionProductFeature


```js
zuora.Object_GETSubscriptionProductFeature({
  "id": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* fields (string) - Object fields to return
* id (string) **required** - Object id

### Object_DELETESubscription
CRUD: Delete Subscription


```js
zuora.Object_DELETESubscription({
  "id": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* id (string) **required** - Object id

### Object_GETSubscription
CRUD: Retrieve Subscription


```js
zuora.Object_GETSubscription({
  "id": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* fields (string) - Object fields to return
* id (string) **required** - Object id

### Object_PUTSubscription
CRUD: Update Subscription


```js
zuora.Object_PUTSubscription({
  "id": "",
  "ModifyRequest": {}
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* id (string) **required** - Object id
* ModifyRequest (object) **required**

### Object_POSTTaxationItem
CRUD: Create TaxationItem


```js
zuora.Object_POSTTaxationItem({
  "CreateRequest": {
    "InvoiceItemId": "",
    "Jurisdiction": "",
    "Name": "",
    "TaxAmount": 0,
    "TaxRate": 0,
    "TaxDate": "",
    "TaxRateType": ""
  }
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* CreateRequest (object) **required**

### Object_DELETETaxationItem
CRUD: Delete TaxationItem


```js
zuora.Object_DELETETaxationItem({
  "id": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* id (string) **required** - Object id

### Object_GETTaxationItem
CRUD: Retrieve TaxationItem


```js
zuora.Object_GETTaxationItem({
  "id": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* fields (string) - Object fields to return
* id (string) **required** - Object id

### Object_PUTTaxationItem
CRUD: Update TaxationItem


```js
zuora.Object_PUTTaxationItem({
  "id": "",
  "ModifyRequest": {}
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* id (string) **required** - Object id
* ModifyRequest (object) **required**

### Object_POSTUnitOfMeasure
CRUD: Create UnitOfMeasure


```js
zuora.Object_POSTUnitOfMeasure({
  "CreateRequest": {
    "DecimalPlaces": 0,
    "UomName": ""
  }
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* CreateRequest (object) **required**

### Object_DELETEUnitOfMeasure
CRUD: Delete UnitOfMeasure


```js
zuora.Object_DELETEUnitOfMeasure({
  "id": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* id (string) **required** - Object id

### Object_GETUnitOfMeasure
CRUD: Retrieve UnitOfMeasure


```js
zuora.Object_GETUnitOfMeasure({
  "id": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* fields (string) - Object fields to return
* id (string) **required** - Object id

### Object_PUTUnitOfMeasure
CRUD: Update UnitOfMeasure


```js
zuora.Object_PUTUnitOfMeasure({
  "id": "",
  "ModifyRequest": {}
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* id (string) **required** - Object id
* ModifyRequest (object) **required**

### Object_POSTUsage
CRUD: Create Usage


```js
zuora.Object_POSTUsage({
  "CreateRequest": {
    "Quantity": 0,
    "StartDateTime": "",
    "UOM": ""
  }
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* CreateRequest (object) **required**

### Object_DELETEUsage
CRUD: Delete Usage


```js
zuora.Object_DELETEUsage({
  "id": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* id (string) **required** - Object id

### Object_GETUsage
CRUD: Retrieve Usage


```js
zuora.Object_GETUsage({
  "id": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* fields (string) - Object fields to return
* id (string) **required** - Object id

### Object_PUTUsage
CRUD: Update Usage


```js
zuora.Object_PUTUsage({
  "id": "",
  "ModifyRequest": {}
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* id (string) **required** - Object id
* ModifyRequest (object) **required**

### POST_BillingPreview
**Note:** The Billing Preview feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). 


Generates a preview of future invoice items for one customer account. Use the BillingPreview call to calculate how much a single customer will be invoiced from the most recent invoice to a specific end of term date in the future.

Additionally, you can use the BillingPreview service to access real-time data on an individual customer's usage consumption. 

The BillingPreview call does not calculate taxes for charges in the subscription.

If you have the Advanced AR Settlement feature enabled, you can also generate a preview of future credit memo items for one customer account. The Advanced AR Settlement feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). 



```js
zuora.POST_BillingPreview({
  "Request": {
    "accountId": "",
    "targetDate": ""
  }
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* Request (object) **required**

### POST_TransactionInvoicePayment
Generates and posts invoices and credit memos and collects payments for posted invoices. Credit memos are only available if you have the Advanced AR Settlement feature enabled and negative charges exist. Credit memos will not be applied to invoices. If draft invoices and credit memos exist when you run this operation, this operation will post the invoices and credit memos. Note that draft credit memos created from an invoice or a product rate plan charge will not be posted.

You can use this operation to generate invoices and collect payments on the posted invoices,
 or else simply collect payment on a specified existing
invoice. The customer's default payment method is used, and the full
amount due is collected. The operation depends on the parameters you
specify.

- To generate one or more new invoices for that customer and collect
payment on the generated invoice(s), leave the **invoiceId** field empty. 

- To collect payment on an existing invoice, specify the invoice ID. 


The operation is atomic; if any part is unsuccessful, the entire
operation is rolled back.

When an error occurs, gateway reason codes and error messages are returned the error response of this operation. The following items are some gateway response code examples.

- Orbital: `05 Do Not Honor`; `14 Invalid Credit Card Number`
- Vantiv: `301 Invalid Account Number`; `304 Lost/Stolen Card`  
- CyberSource2: `202 Expired card`; `231 Invalid account number`

For more reason code information, see the corresponding payment gateway documentation. 


## Notes

Timeouts may occur when using this method on an account that
has an extremely high number of subscriptions.



```js
zuora.POST_TransactionInvoicePayment({
  "Request": {
    "accountKey": ""
  }
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* zuora-version (string) - 
* Request (object) **required**

### GET_AllOrders
**Note:** This feature is only available if you have the [Order Metrics](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/Orders_Generation_for_Subscriptions_and_Amendments) feature enabled. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). We will investigate your use cases and data before enabling this feature for you.


Retrieves information about all orders in your tenant. By default, it returns the first page of the orders. 



```js
zuora.GET_AllOrders({}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* page (integer) - The page number of the orders retrieved. 
* pageSize (integer) - Number of rows returned per page.
* dateFilterOption (string) - The date type to filter on.This field value can be orderDate or updatedDate. Default is orderDate.
* startDate (string) - The result will only contain the orders with the date of dateFilterOption later than or equal to this date.
* endDate (string) - The result will only contains orders with the date of dateFilterOption earlier than or equal to this date.

### GET_OrdersByInvoiceOwner
**Note:** This feature is only available if you have the [Order Metrics](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/Orders_Generation_for_Subscriptions_and_Amendments) feature enabled. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). We will investigate your use cases and data before enabling this feature for you.

Retrieves the detailed information about all orders for a specified invoice owner.



```js
zuora.GET_OrdersByInvoiceOwner({
  "accountNumber": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* accountNumber (string) **required** - The invoice owner account number.
* page (integer) - The page number of the orders retrieved. The default is 1.
* pageSize (integer) - Number of rows returned per page.
* dateFilterOption (string) - The date type to filter on. This field value can be orderDate or updatedDate. Default is orderDate.
* startDate (string) - The result will only contain the orders with the date of dateFilterOption later than or equal to this date.
* endDate (string) - The result will only contain the orders with the date of dateFilterOption earlier than or equal to this date.

### GET_OrdersBySubscriptionNumber
**Note:** This feature is only available if you have the [Order Metrics](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/Orders_Generation_for_Subscriptions_and_Amendments) feature enabled. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). We will investigate your use cases and data before enabling this feature for you.

Retrieves the detailed information about all orders for a specified subscription. Any orders containing the changes on the specified subscription are returned.



```js
zuora.GET_OrdersBySubscriptionNumber({
  "subscriptionNumber": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* subscriptionNumber (string) **required** - The subscription number.
* page (integer) - The page number of the orders retrieved. The default is '1'.
* pageSize (integer) - Number of rows returned per page.
* dateFilterOption (string) - The date type to filter on. This field value can be 'orderDate' or 'updatedDate'. Default is orderDate.
* startDate (string) - The result will only contain the orders with the date of 'dateFilterOption' later than or equal to this date.
* endDate (string) - The result will only contain the orders with the date of 'dateFilterOption' earlier than or equal to this date.

### GET_OrdersBySubscriptionOwner
**Note:** This feature is only available if you have the [Order Metrics](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/Orders_Generation_for_Subscriptions_and_Amendments) feature enabled. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). We will investigate your use cases and data before enabling this feature for you.

Retrieves the detailed information about all orders for a specified subscription owner. Any orders containing the changes on the subscriptions owned by this account are returned.



```js
zuora.GET_OrdersBySubscriptionOwner({
  "accountNumber": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* accountNumber (string) **required** - The subscription owner account number.
* page (integer) - The page number of the orders retrieved. The default is 1.
* pageSize (integer) - Number of rows returned per page.
* dateFilterOption (string) - The date type to filter on.
* startDate (string) - The result will only contain the orders with the date of 'dateFilterOption' later than or equal to this date.
* endDate (string) - The result will only contain the orders with the date of 'dateFilterOption' earlier than or equal to this date.

### GET_Order
**Note:** This feature is only available if you have the [Order Metrics](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/Orders_Generation_for_Subscriptions_and_Amendments) feature enabled. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). We will investigate your use cases and data before enabling this feature for you.


Retrieves the detailed information about a specified order.



```js
zuora.GET_Order({
  "orderNumber": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* orderNumber (string) **required** - The order number to be retrieved.

### GET_OrderBillingInfo
**Note:** This feature is only available if you have the [Order Metrics](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/Orders_Generation_for_Subscriptions_and_Amendments) feature enabled. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). We will investigate your use cases and data before enabling this feature for you.

Retrieves the billing information about a specified order. The information includes the billed and unbilled amount of the order.



```js
zuora.GET_OrderBillingInfo({
  "orderNumber": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* orderNumber (string) **required** - The order number.
* asOfDate (string) - Billing states of the order will be calculated as of this date. Invoices with the invoice date later than this date will not be counted into the billed amount. The default value is today.

### GET_OrderMetricsforEvergreenSubscription
**Note:** This feature is only available if you have the [Order Metrics](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/Orders_Generation_for_Subscriptions_and_Amendments) feature enabled. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). We will investigate your use cases and data before enabling this feature for you.


Retrieves the metrics of an evergreen subscription in a specified order.



```js
zuora.GET_OrderMetricsforEvergreenSubscription({
  "orderNumber": "",
  "subscriptionNumber": "",
  "startDate": "",
  "endDate": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* orderNumber (string) **required** - The order number.
* subscriptionNumber (string) **required** - The subscription number you want to get the metrics for.
* startDate (string) **required** - The start date of the date range for which you want to get the metrics. The date must be in yyyy-mm-dd format. For example, 2017-12-03.
* endDate (string) **required** - The end date of the date range for which you want to get the metrics. The date must be in yyyy-mm-dd format. For example, 2017-12-03.

### GET_OrderRatedResult
**Note:** This feature is only available if you have the [Order Metrics](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/Orders_Generation_for_Subscriptions_and_Amendments) feature enabled. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). We will investigate your use cases and data before enabling this feature for you.

Retrieves the rated results of all the subscriptions in the specified order.



```js
zuora.GET_OrderRatedResult({
  "orderNumber": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* orderNumber (string) **required** - The order number.

### POST_PaymentMethods
This REST API reference describes how to create a new credit card
payment method for a customer account.

## Notes

This API call is CORS Enabled. Use client-side JavaScript to invoke the call. 



```js
zuora.POST_PaymentMethods({
  "Request": {
    "accountKey": "",
    "creditCardType": "",
    "creditCardNumber": "",
    "expirationMonth": "",
    "expirationYear": ""
  }
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* Request (object) **required**

### GET_PaymentMethods
This REST API reference describes how to retrieve all credit card
information for the specified customer account. 

## Notes
The response includes details credit or debit cards for the specified customer account. Card numbers are masked, e.g., "************1234". Cards are returned in reverse chronological order of last update.

You can send requests for bank transfer payment methods types. The response will not include bank transfer details.

The response only includes payment details on payment methods that are credit or debit cards.



```js
zuora.GET_PaymentMethods({
  "account-key": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* pageSize (integer) - Number of rows returned per page.
* account-key (string) **required** - Account number or account ID.

### PUT_PaymentMethods
Updates an existing credit card payment method for the specified
customer account.



```js
zuora.PUT_PaymentMethods({
  "payment-method-id": "",
  "Request": {}
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* payment-method-id (string) **required** - Unique ID of the payment method to update.
* Request (object) **required**

### POST_PaymentMethodsDecryption
The decryption API endpoint can conditionally perform 3 tasks in one atomic call:
  * Decrypt Apple Pay Payment token
  * Create Credit Card Payment Method in Zuora with decrypted Apple Pay information
  * Process Payment on a specified Invoice (optional)



```js
zuora.POST_PaymentMethodsDecryption({
  "Request": {
    "accountID": "",
    "integrationType": "",
    "merchantID": "",
    "paymentToken": {}
  }
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* Request (object) **required**

### DELETE_PaymentMethods
Deletes a credit card payment method from the specified customer
account.

If the specified payment method is the account's default payment
method, the request will fail.  In that case, you must first designate a
different payment method for that customer to be the default.



```js
zuora.DELETE_PaymentMethods({
  "payment-method-id": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* payment-method-id (string) **required** - Unique identifier of a payment method. (Since this ID is unique, and linked to a customer account in the system, no customer identifier is needed.)

### PUT_VerifyPaymentMethods
Sends an authorization request to the corresponding payment gateway to verify the payment method, even though no changes are made for the payment method. Supported payment methods are Credit Cards and Paypal.

Zuora now supports performing a standalone zero dollar verification or one dollar authorization for credit cards. It also supports a billing agreement status check on PayPal payment methods.

If a payment method is created by Hosted Payment Pages and is not assigned to any billing account, the payment method cannot be verified through this operation.



```js
zuora.PUT_VerifyPaymentMethods({
  "payment-method-id": "",
  "body": {}
}, context)
```

#### Parameters
* payment-method-id (string) **required** - The ID of the payment method to be verified.
* body (object) **required**

### GET_Paymentgateways
Retrieves the basic information about all the payment gateways.



```js
zuora.GET_Paymentgateways({}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).

### GET_RetrieveAllPayments
**Note:** The Advanced AR Settlement feature is in **Limited Availability**. This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). 

Retrieves the information about all payments from all your customer accounts.



```js
zuora.GET_RetrieveAllPayments({}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* pageSize (integer) - Number of rows returned per page.
* fieldsFilterable (string) - This parameter restricts the data returned in the response. You can use this parameter to supply a dimension you want to filter on.
* sort (string) - This parameter restricts the order of the data returned in the response. You can use this parameter to supply a dimension you want to sort on.

### POST_CreatePayment
**Note:** The Advanced AR Settlement feature is in **Limited Availability**. This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). 

Creates a payment for the following scenarios:

- A full payment on an invoice or debit memo
- A partial payment
- A payment for several invoices and debit memos
- An unapplied payment 

If you do not know to which customer account the payment belongs, you can create a payment without specifying a customer account.

For more information, see [Create Payments](https://knowledgecenter.zuora.com/CB_Billing/Advanced_AR_Settlement/A_Unapplied_Payments/Management_of_Unapplied_Payments/AA_Create_Payments) and [Create Payments Without Specifying Customer Accounts](https://knowledgecenter.zuora.com/CB_Billing/Advanced_AR_Settlement/A_Unapplied_Payments/Management_of_Unapplied_Payments/AA_Create_Payments_Without_Specifying_Customer_Accounts).
    



```js
zuora.POST_CreatePayment({
  "body": {
    "amount": 0,
    "paymentMethodId": "",
    "currency": "",
    "type": ""
  }
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* body (object) **required**

### DELETE_Payment
**Note:** The Advanced AR Settlement feature is in **Limited Availability**. This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). 

Deletes a payment. Only payments with the Cancelled status can be deleted. 



```js
zuora.DELETE_Payment({
  "paymentId": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* paymentId (string) **required** - The unique ID of an unapplied payment. For example, 8a8082e65b27f6c3015b89e4344c16b1.

### GET_Payment
**Note:** The Advanced AR Settlement feature is in **Limited Availability**. This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). 

Retrieves the information about one specific payment.



```js
zuora.GET_Payment({
  "paymentId": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* paymentId (string) **required** - The unique ID of a payment. For example, 8a8082e65b27f6c3015b89e4344c16b1.

### PUT_UpdatePayment
**Note:** The Advanced AR Settlement feature is in **Limited Availability**. This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). 

Updates a payment.



```js
zuora.PUT_UpdatePayment({
  "body": {},
  "paymentId": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* body (object) **required**
* paymentId (string) **required** - The unique ID of an unapplied payment. For example, 8a8082e65b27f6c3015b89e4344c16b1.

### PUT_ApplyPayment
**Note:** The Advanced AR Settlement feature is in **Limited Availability**. This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). 

Applies an unapplied payment to invoices and debit memos.

For more information, see [Apply Unapplied Payments to Invoices and Debit Memos](https://knowledgecenter.zuora.com/CB_Billing/Advanced_AR_Settlement/A_Unapplied_Payments/Management_of_Unapplied_Payments/Apply_Unapplied_Payments_to_Invoices_and_Debit_Memos).



```js
zuora.PUT_ApplyPayment({
  "body": {},
  "paymentId": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* body (object) **required**
* paymentId (string) **required** - The unique ID of an unapplied payment. For example, 8a8082e65b27f6c3015b89e4344c16b1.

### PUT_CancelPayment
**Note:** The Advanced AR Settlement feature is in **Limited Availability**. This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). 

Cancels a payment.



```js
zuora.PUT_CancelPayment({
  "paymentId": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* paymentId (string) **required** - The unique ID of an unapplied payment. For example, 8a8082e65b27f6c3015b89e4344c16b1.

### GET_PaymentParts
**Note:** The Advanced AR Settlement feature is in **Limited Availability**. This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). 

Retrieves the information about all parts of a payment. A payment can consist of an unapplied part, and several parts applied to invoices and debit memos. You can use this operation to get all the applied and unapplied portions of a payment.



```js
zuora.GET_PaymentParts({
  "paymentId": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* pageSize (integer) - Number of rows returned per page.
* paymentId (string) **required** - The unique ID of a payment. For example, 8a8082e65b27f6c3015b89e4344c16b1.

### GET_PaymentPart
**Note:** The Advanced AR Settlement feature is in **Limited Availability**. This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). 

Retrieves the information about a specific payment part. A payment can consist of an unapplied part, and several parts applied to invoices and debit memos.



```js
zuora.GET_PaymentPart({
  "partid": "",
  "paymentId": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* partid (string) **required** - The unique ID of a specific payment part. You can get the payment part ID from the response of [Get payment parts](https://www.zuora.com/developer/api-reference/#operation/GET_PaymentParts).
* paymentId (string) **required** - The unique ID of a payment. For example, 8a8082e65b27f6c3015b89e4344c16b1.

### GET_PaymentItemParts
**Note:** The Invoice Item Settlement feature is in **Limited Availability**, and it must be used together with other Advanced AR Settlement features (Unapplied Payments, and Credit and Debit memos). If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). 

Retrieves the information about all items of a payment part. A payment part item is a single line item in a payment part. A payment part can consist of several different types of items.



```js
zuora.GET_PaymentItemParts({
  "partid": "",
  "paymentId": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* pageSize (integer) - Number of rows returned per page.
* partid (string) **required** - The unique ID of a specific payment part. You can get the payment part ID from the response of [Get payment parts](https://www.zuora.com/developer/api-reference/#operation/GET_PaymentParts).
* paymentId (string) **required** - The unique ID of a payment. For example, 8a8082e65b27f6c3015b89e4344c16b1.

### GET_PaymentItemPart
**Note:** The Invoice Item Settlement feature is in **Limited Availability**, and it must be used together with other Advanced AR Settlement features (Unapplied Payments, and Credit and Debit memos). If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).

Retrieves the information about a specific payment part item. A payment part item is a single line item in a payment part. A payment part can consist of several different types of items.



```js
zuora.GET_PaymentItemPart({
  "partid": "",
  "itempartid": "",
  "paymentId": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* partid (string) **required** - The unique ID of a specific payment part. You can get the payment part ID from the response of [Get payment parts](https://www.zuora.com/developer/api-reference/#operation/GET_PaymentParts).
* itempartid (string) **required** - The unique ID of a specific payment part item. You can get the payment part item ID from the response of [Get payment part items](https://www.zuora.com/developer/api-reference/#operation/GET_PayemntItemParts).
* paymentId (string) **required** - The unique ID of a payment. For example, 8a8082e65b27f6c3015b89e4344c16b1.

### POST_RefundPayment
**Note:** The Advanced AR Settlement feature is in **Limited Availability**. This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). 

Refunds a full or partial unapplied payment to your customers. To refund applied payments, you must unapply the applied payments from the invoices or debit memos, and then refund the unapplied payments to customers.

For more information, see [Refund Payments](https://knowledgecenter.zuora.com/CB_Billing/Advanced_AR_Settlement/A_Unapplied_Payments/Management_of_Unapplied_Payments/Z_Refund_Payments).



```js
zuora.POST_RefundPayment({
  "body": {
    "totalAmount": 0,
    "type": ""
  },
  "paymentId": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* body (object) **required**
* paymentId (string) **required** - The unique ID of an unapplied payment. For example, 8a8082e65b27f6c3015b89e4344c16b1.

### PUT_TransferPayment
**Note:** The Advanced AR Settlement feature is in **Limited Availability**. This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). 

Transfers an unapplied payment.

For more information, see [Transfer Unapplied Payments](https://knowledgecenter.zuora.com/CB_Billing/Advanced_AR_Settlement/A_Unapplied_Payments/Management_of_Unapplied_Payments/Transfer_Unapplied_Payments).



```js
zuora.PUT_TransferPayment({
  "body": {},
  "paymentId": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* body (object) **required**
* paymentId (string) **required** - The unique ID of an unapplied payment. For example, 8a8082e65b27f6c3015b89e4344c16b1.

### PUT_UnapplyPayment
**Note:** The Advanced AR Settlement feature is in **Limited Availability**. This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). 

Unapplies an applied payment from invoices and debit memos.

For more information, see [Unapply Payments from Invoices and Debit Memos](https://knowledgecenter.zuora.com/CB_Billing/Advanced_AR_Settlement/A_Unapplied_Payments/Management_of_Unapplied_Payments/Unapply_Payments_from_Invoices_and_Debit_Memos).



```js
zuora.PUT_UnapplyPayment({
  "body": {},
  "paymentId": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* body (object) **required**
* paymentId (string) **required** - The unique ID of an applied payment. For example, 8a8082e65b27f6c3015b89e4344c16b1.

### POST_QuotesDocument
The `document` call generates a quote document and returns the generated document URL. You can directly access the generated quote file through the returned URL.

The `document` call should be only used from Zuora Quotes. 

## File Size Limitation 
The maximum export file size is 2047MB. If you have large data requests that go over this limit, you will get the following 403 HTTP response code from Zuora:
`security:max-object-size>2047MB</security:max-object-size>`

Submit a request at [Zuora Global Support](http://support.zuora.com/) if you require additional assistance.

We can work with you to determine if large file optimization is an option for you.



```js
zuora.POST_QuotesDocument({
  "Request": {
    "documentType": "",
    "quoteId": "",
    "serverUrl": "",
    "templateId": "",
    "sessionId": ""
  }
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* Request (object) **required**

### GET_Refunds
**Note:** This feature is only available if you have the Advanced AR Settlement feature enabled. The Advanced AR Settlement feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). 

Retrieves the information about all refunds. Two types of refunds are available, electronic refunds and external refunds.



```js
zuora.GET_Refunds({}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* pageSize (integer) - Number of rows returned per page.
* fieldsFilterable (string) - This parameter restricts the data returned in the response. You can use this parameter to supply a dimension you want to filter on.
* sort (string) - This parameter restricts the order of the data returned in the response. You can use this parameter to supply a dimension you want to sort on.

### DELETE_Refund
**Note:** This feature is only available if you have the Advanced AR Settlement feature enabled. The Advanced AR Settlement feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). 

Deletes a refund. You can delete a refund with the Canceled or Error status. 



```js
zuora.DELETE_Refund({
  "refundId": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* refundId (string) **required** - The unique ID of a refund. For example, 4028905f5a87c0ff015a889e590e00c9.

### GET_Refund
**Note:** This feature is only available if you have the Advanced AR Settlement feature enabled. The Advanced AR Settlement feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). 

Retrieves the information about a specific refund.



```js
zuora.GET_Refund({
  "refundId": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* refundId (string) **required** - The unique ID of a refund. For example, 4028905f5a87c0ff015a889e590e00c9.

### PUT_UpdateRefund
**Note:** This feature is only available if you have the Advanced AR Settlement feature enabled. The Advanced AR Settlement feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). 

Updates the basic and finance information about a refund.



```js
zuora.PUT_UpdateRefund({
  "body": {},
  "refundId": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* body (object) **required**
* refundId (string) **required** - The unique ID of a refund. For example, 4028905f5a87c0ff015a889e590e00c9.

### PUT_CancelRefund
**Note:** This feature is only available if you have the Advanced AR Settlement feature enabled. The Advanced AR Settlement feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). 

Cancels a refund.



```js
zuora.PUT_CancelRefund({
  "refundId": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* refundId (string) **required** - The unique ID of a refund. For example, 4028905f5a87c0ff015a889e590e00c9.      

### GET_RefundParts
**Note:** This feature is only available if you have the Advanced AR Settlement feature enabled. The Advanced AR Settlement feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). 

Retrieves the information about all parts of a refund.



```js
zuora.GET_RefundParts({
  "refundId": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* refundId (string) **required** - The unique ID of a refund. For example, 4028905f5a87c0ff015a889e590e00c9.

### GET_RefundPart
**Note:** This feature is only available if you have the Advanced AR Settlement feature enabled. The Advanced AR Settlement feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). 

Retrieves the information about a specific refund part.



```js
zuora.GET_RefundPart({
  "refundpartid": "",
  "refundId": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* refundpartid (string) **required** - The unique ID of a specific refund part. You can get the refund part ID from the response of [Get refund parts](https://www.zuora.com/developer/api-reference/#operation/GET_RefundParts).
* refundId (string) **required** - The unique ID of a refund. For example, 4028905f5a87c0ff015a889e590e00c9.

### GET_RefundItemParts
**Note:** The Invoice Item Settlement feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at  [Zuora Global Support](http://support.zuora.com/).

Retrieves the information about all items of a refund part. A refund part item is a single line item in a refund part. A refund part can consist of several different types of items.



```js
zuora.GET_RefundItemParts({
  "refundpartid": "",
  "refundId": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* pageSize (integer) - Number of rows returned per page.
* refundpartid (string) **required** - The unique ID of a specific refund part. You can get the refund part ID from the response of [Get refund parts](https://www.zuora.com/developer/api-reference/#operation/GET_RefundParts).
* refundId (string) **required** - The unique ID of a refund. For example, 4028905f5a87c0ff015a889e590e00c9.

### GET_RefundItemPart
**Note:** The Invoice Item Settlement feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at  [Zuora Global Support](http://support.zuora.com/).  

Retrieves the information about a specific refund part item. A refund part item is a single line item in a refund part. A refund part can consist of several different types of items.



```js
zuora.GET_RefundItemPart({
  "itempartid": "",
  "refundpartid": "",
  "refundId": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* itempartid (string) **required** - The unique ID of a specific refund part item. You can get the refund part item ID from the response of [Get refund part items](https://www.zuora.com/developer/api-reference/#operation/GET_RefundItemParts).
* refundpartid (string) **required** - The unique ID of a specific refund part. You can get the refund part ID from the response of [Get refund parts](https://www.zuora.com/developer/api-reference/#operation/GET_RefundParts).
* refundId (string) **required** - The unique ID of a refund. For example, 4028905f5a87c0ff015a889e590e00c9.

### GET_RevenueEventForRevenueSchedule

This REST API reference describes how to get all revenue events in a revenue schedule by specifying the revenue schedule number. Request and response field descriptions and sample code are provided.



```js
zuora.GET_RevenueEventForRevenueSchedule({
  "rs-number": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* pageSize (integer) - Number of rows returned per page.
* rs-number (string) **required** - Revenue schedule number. The revenue schedule number is always prefixed with "RS", for example, "RS-00000001".

### GET_RevenueEventDetails

This REST API reference describes how to get revenue event details by specifying the revenue event number. Request and response field descriptions and sample code are provided.



```js
zuora.GET_RevenueEventDetails({
  "event-number": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* event-number (string) **required** - The number associated with the revenue event.

### GET_RevenueItemsByChargeRevenueSummaryNumber
This REST API reference describes how to get the details for each revenue item in a charge revenue summary by specifying the charge revenue summary number. Request and response field descriptions and sample code are provided.



```js
zuora.GET_RevenueItemsByChargeRevenueSummaryNumber({
  "crs-number": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* pageSize (integer) - Number of rows returned per page.
* crs-number (string) **required** - The charge revenue summary number.

### GET_RevenueItemsByChargeRevenueEventNumber
This REST API reference describes how to get the details of each revenue item in a revenue event by specifying the revenue event number. Request and response field descriptions and sample code are provided.



```js
zuora.GET_RevenueItemsByChargeRevenueEventNumber({
  "event-number": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* pageSize (integer) - Number of rows returned per page.
* event-number (string) **required** - The number associated with the revenue event.

### PUT_CustomFieldsonRevenueItemsByRevenueEvent
This REST API reference describes how to update custom fields on revenue items by specifying the revenue event number. Request and response field descriptions and sample code are provided.



```js
zuora.PUT_CustomFieldsonRevenueItemsByRevenueEvent({
  "event-number": "",
  "Request": {
    "revenueItems": []
  }
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* event-number (string) **required** - The number associated with the revenue event.
* Request (object) **required**

### GET_RevenueItemsByRevenueSchedule
This REST API reference describes how to get the details for each revenue items in a revenue schedule by specifying the revenue schedule number. Request and response field descriptions and sample code are provided.



```js
zuora.GET_RevenueItemsByRevenueSchedule({
  "rs-number": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* pageSize (integer) - Number of rows returned per page.
* rs-number (string) **required** - Revenue schedule number. The revenue schedule number is always prefixed with "RS", for example, "RS-00000001".

### PUT_CustomFieldsonRevenueItemsByRevenueSchedule
This REST API reference describes how to update custom fields on revenue Items by specifying the revenue schedule number. Request and response field descriptions and sample code are provided.



```js
zuora.PUT_CustomFieldsonRevenueItemsByRevenueSchedule({
  "rs-number": "",
  "Request": {
    "revenueItems": []
  }
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* rs-number (string) **required** - Revenue schedule number. The revenue schedule number is always prefixed with "RS", for example, "RS-00000001".
* Request (object) **required**

### GET_RevenueRecRulebyProductRatePlanCharge
**Note:** This feature is only available if you have the Advanced AR Settlement feature enabled. The Advanced AR Settlement feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). 

Retrieves the revenue recognition rule associated with a production rate plan charge by specifying the charge ID.



```js
zuora.GET_RevenueRecRulebyProductRatePlanCharge({
  "charge-key": ""
}, context)
```

#### Parameters
* charge-key (string) **required** - The unique ID of a product rate plan charge. For example, 8a8082e65ba86084015bb323d3c61d82.

### GET_RevenueRecRules
Retrieves the revenue recognition rule associated with a subscription charge by specifying the charge ID. Request and response field descriptions and sample code are provided.



```js
zuora.GET_RevenueRecRules({
  "charge-key": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* charge-key (string) **required** - The unique ID of the subscription rate plan charge. For example, 402892793e173340013e173b81000012.

### GET_RSbyCreditMemoItem
**Note:** This feature is only available if you have the Advanced AR Settlement feature enabled. The Advanced AR Settlement feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).

Retrieves the details about a revenue schedule by specifying a valid credit memo item ID.



```js
zuora.GET_RSbyCreditMemoItem({
  "cmi-id": ""
}, context)
```

#### Parameters
* cmi-id (string) **required** - The unique ID of a credit memo item. You can get the credit memo item ID from the response of [Get credit memo items](https://www.zuora.com/developer/api-reference/#operation/GET_CreditMemoItems).

### POST_RSforCreditMemoItem_ManualDistribution
**Note:** This feature is only available if you have the Advanced AR Settlement feature enabled. The Advanced AR Settlement feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).

Creates a revenue schedule for a credit memo item, and manually distribute the revenue.



```js
zuora.POST_RSforCreditMemoItem_ManualDistribution({
  "cmi-id": "",
  "body": {}
}, context)
```

#### Parameters
* cmi-id (string) **required** - The unique ID of a credit memo item. You can get the credit memo item ID from the response of [Get credit memo items](https://www.zuora.com/developer/api-reference/#operation/GET_CreditMemoItems).
* body (object) **required**

### POST_RSforCreditMemoItem_DistributeByDateRange
**Note:** This feature is only available if you have the Advanced AR Settlement feature enabled. The Advanced AR Settlement feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).

Creates a revenue schedule for a credit memo item, and automatically distribute the revenue by specifying the recognition start and end dates.



```js
zuora.POST_RSforCreditMemoItem_DistributeByDateRange({
  "cmi-id": "",
  "body": {
    "recognitionEnd": "",
    "recognitionStart": ""
  }
}, context)
```

#### Parameters
* cmi-id (string) **required** - The unique ID of a credit memo item. You can get the credit memo item ID from the response of [Get credit memo items](https://www.zuora.com/developer/api-reference/#operation/GET_CreditMemoItems).
* body (object) **required**

### GET_RSbyDebitMemoItem
**Note:** This feature is only available if you have the Advanced AR Settlement feature enabled. The Advanced AR Settlement feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).

Retrieves the details about a revenue schedule by specifying a valid debit memo item ID.



```js
zuora.GET_RSbyDebitMemoItem({
  "dmi-id": ""
}, context)
```

#### Parameters
* dmi-id (string) **required** - The unique ID of a debit memo item. You can get the debit memo item ID from the response of [Get debit memo items](https://www.zuora.com/developer/api-reference/#operation/GET_DebitMemoItems).

### POST_RSforDebitMemoItem_ManualDistribution
**Note:** This feature is only available if you have the Advanced AR Settlement feature enabled. The Advanced AR Settlement feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).

Creates a revenue schedule for a debit memo item, and manually distribute the revenue.



```js
zuora.POST_RSforDebitMemoItem_ManualDistribution({
  "dmi-id": "",
  "body": {}
}, context)
```

#### Parameters
* dmi-id (string) **required** - The unique ID of a debit memo item. You can get the debit memo item ID from the response of [Get debit memo items](https://www.zuora.com/developer/api-reference/#operation/GET_DebitMemoItems).
* body (object) **required**

### POST_RSforDebitMemoItem_DistributeByDateRange
**Note:** This feature is only available if you have the Advanced AR Settlement feature enabled. The Advanced AR Settlement feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).

Creates a revenue schedule for a debit memo item, and automatically distribute the revenue by specifying the recognition start and end dates.



```js
zuora.POST_RSforDebitMemoItem_DistributeByDateRange({
  "dmi-id": "",
  "body": {
    "recognitionEnd": "",
    "recognitionStart": ""
  }
}, context)
```

#### Parameters
* dmi-id (string) **required** - The unique ID of a debit memo item. You can get the debit memo item ID from the response of [Get debit memo items](https://www.zuora.com/developer/api-reference/#operation/GET_DebitMemoItems).
* body (object) **required**

### GET_RSbyInvoiceItemAdjustment
Retrieves the details of a revenue schedule by specifying a valid invoice item adjustment identifier. Request and response field descriptions and sample code are provided.



```js
zuora.GET_RSbyInvoiceItemAdjustment({
  "invoice-item-adj-id": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* invoice-item-adj-id (string) **required** - ID or number of the Invoice Item Adjustment, for example, e20b07fd416dcfcf0141c81164fd0a72.

### POST_RSforInvoiceItemAdjustment_ManualDistribution
Creates a revenue schedule for an Invoice Item Adjustment and manually distribute the revenue.



```js
zuora.POST_RSforInvoiceItemAdjustment_ManualDistribution({
  "invoice-item-adj-key": "",
  "Request": {}
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* invoice-item-adj-key (string) **required** - ID or number of the Invoice Item Adjustment, for example, e20b07fd416dcfcf0141c81164fd0a72.
* Request (object) **required**

### POST_RSforInvoiceItemAdjustment_DistributeByDateRange
Creates a revenue schedule for an Invoice Item Adjustment and distribute the revenue by specifying the recognition start and end dates.



```js
zuora.POST_RSforInvoiceItemAdjustment_DistributeByDateRange({
  "invoice-item-adj-key": "",
  "Request": {
    "recognitionEnd": "",
    "recognitionStart": "",
    "revenueEvent": {}
  }
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* invoice-item-adj-key (string) **required** - ID or number of the Invoice Item Adjustment, for example, e20b07fd416dcfcf0141c81164fd0a72.
* Request (object) **required**

### GET_RSbyInvoiceItem
Retrieves the details of a revenue schedule by specifying the invoice item ID.



```js
zuora.GET_RSbyInvoiceItem({
  "invoice-item-id": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* invoice-item-id (string) **required** - A valid Invoice Item ID.

### POST_RSforInvoiceItem_ManualDistribution
Creates a revenue schedule for an Invoice Item and manually distribute the revenue.



```js
zuora.POST_RSforInvoiceItem_ManualDistribution({
  "invoice-item-id": "",
  "Request": {}
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* invoice-item-id (string) **required** - ID of the Invoice Item, for example, e20b07fd416dcfcf0141c81164fd0a75.
* Request (object) **required**

### POST_RSforInvoiceItem_DistributeByDateRange
Creates a revenue schedule for an Invoice Item and distribute the revenue by specifying the recognition start and end dates.



```js
zuora.POST_RSforInvoiceItem_DistributeByDateRange({
  "invoice-item-id": "",
  "Request": {
    "recognitionEnd": "",
    "recognitionStart": "",
    "revenueEvent": {}
  }
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* invoice-item-id (string) **required** - ID of the Invoice Item, for example, e20b07fd416dcfcf0141c81164fd0a75.
* Request (object) **required**

### GET_RSbyProductChargeAndBillingAccount
**Note:** This feature is only available if you have the Advanced AR Settlement feature enabled. The Advanced AR Settlement feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).

Retrieves the details about all revenue schedules of a product rate plan charge by specifying the charge ID and billing account ID.



```js
zuora.GET_RSbyProductChargeAndBillingAccount({
  "account-key": "",
  "charge-key": ""
}, context)
```

#### Parameters
* pageSize (integer) - Number of rows returned per page.
* account-key (string) **required** - The account number or account ID.
* charge-key (string) **required** - The unique ID of a product rate plan charge. For example, 8a8082e65ba86084015bb323d3c61d82.

### GET_RSforSubscCharge
Retrieves the revenue schedule details by specifying subscription charge ID. Request and response field descriptions and sample code are provided



```js
zuora.GET_RSforSubscCharge({
  "charge-key": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* pageSize (integer) - Number of rows returned per page.
* charge-key (string) **required** - ID of the subscription rate plan charge; for example, 402892793e173340013e173b81000012.

### POST_RSforSubscCharge
Creates a revenue schedule by specifying the subscription charge. This method is for custom unlimited revenue recognition only.



```js
zuora.POST_RSforSubscCharge({
  "charge-key": "",
  "Request": {
    "amount": "",
    "revenueScheduleDate": ""
  }
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* charge-key (string) **required** - ID of the subscription rate plan charge; for example, 402892793e173340013e173b81000012.
* Request (object) **required**

### DELETE_RS
Deletes a revenue schedule by specifying its revenue schedule number
## Prerequisites
You must have the Delete Custom Revenue Schedule permissions in Zuora Finance.



```js
zuora.DELETE_RS({
  "rs-number": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* rs-number (string) **required** - 

### GET_RS
Retrieves the details of a revenue schedule by specifying the revenue schedule number. Request and response field descriptions and sample code are provided.



```js
zuora.GET_RS({
  "rs-number": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* rs-number (string) **required** - Revenue schedule number. The revenue schedule number is always prefixed with "RS", for example, "RS-00000001".

### PUT_RSBasicInfo
Retrieves basic information of a revenue schedule by specifying the revenue schedule number. Request and response field descriptions and sample code are provided.



```js
zuora.PUT_RSBasicInfo({
  "rs-number": "",
  "Request": {}
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* rs-number (string) **required** - Revenue schedule number. The revenue schedule number is always prefixed with "RS", for example, "RS-00000001".
* Request (object) **required**

### PUT_RevenueAcrossAP
Distributes revenue by specifying the revenue schedule number. Request and response field descriptions and sample code are provided.



```js
zuora.PUT_RevenueAcrossAP({
  "rs-number": "",
  "Request": {}
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* rs-number (string) **required** - Revenue schedule number. The revenue schedule number is always prefixed with "RS", for example, "RS-00000001".
* Request (object) **required**

### PUT_RevenueSpecificDate
Distributes revenue on a specific recognition date. Request and response field descriptions and sample code are provided.



```js
zuora.PUT_RevenueSpecificDate({
  "rs-number": "",
  "Request": {
    "distributionType": "",
    "distributeOn": ""
  }
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* rs-number (string) **required** - Revenue schedule number. The revenue schedule number is always prefixed with "RS", for example, "RS-00000001".
* Request (object) **required**

### PUT_RevenueByRecognitionStartandEndDates
Distributes revenue by specifying the recognition start and end dates. Request and response field descriptions and sample code are provided.



```js
zuora.PUT_RevenueByRecognitionStartandEndDates({
  "rs-number": "",
  "Request": {
    "recognitionEnd": "",
    "recognitionStart": ""
  }
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* rs-number (string) **required** - Revenue schedule number. Specify the revenue schedule whose revenue you want to distribute.
* Request (object) **required**

### POST_RSASignatures

The REST API used in Payment Pages 2.0 are CORS (Cross-Origin Resource Sharing) enabled and therefore requires a digital signature. The POST rsa_signatures call generates and returns the required digital signature and token for a Payment Pages 2.0 form. You need to pass the generated signature to your client for it to access Payment Pages 2.0. 
  
This REST service should be used only when you implement Payment Pages 2.0. 



```js
zuora.POST_RSASignatures({
  "Request": {
    "method": "",
    "pageId": "",
    "uri": ""
  }
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* Request (object) **required**

### POST_DecryptRSASignatures

The REST API used in Payment Pages 2.0 are CORS (Cross-Origin Resource Sharing) enabled and therefore requires a digital signature. You use rsa_signatures to generate the required digital signature and token for a Payment Pages 2.0 form, and then you use the decrypt REST service to decrypt the signature to validate the signature and key.

This REST service should be used only when you implement Payment Pages 2.0. 



```js
zuora.POST_DecryptRSASignatures({
  "Request": {
    "method": "",
    "publicKey": "",
    "signature": ""
  }
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* Request (object) **required**

### GET_RevenueAutomationStartDate
This REST API reference describes how to get the revenue automation start date. Request and response field descriptions and sample code are provided.



```js
zuora.GET_RevenueAutomationStartDate({}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).

### POST_Subscription
This REST API reference describes how to create a new subscription for an existing customer account.

## Notes
If invoiceCollect is `true`, the call will not return success = `true` unless the subscription, invoice, and payment are all successful.

Default values for **customerAcceptanceDate** and **serviceActivationDate** are set as follows.

|        | serviceActivationDate(SA) specified          | serviceActivationDate (SA) NOT specified  |
| ------------- |:-------------:| -----:|
| customerAcceptanceDate (CA) specified| SA uses value in the request call; CA uses value in the request call| CA uses value in the request call;SA uses CE as default |
| customerAcceptanceDate (CA) NOT specified      | SA uses value in the request call; CA uses SA as default |   SA and CA use CE as default |



```js
zuora.POST_Subscription({
  "Request": {
    "accountKey": "",
    "contractEffectiveDate": "",
    "subscribeToRatePlans": [],
    "termType": "",
    "renewalTerm": 0
  }
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* zuora-version (string) - The minor version of the Zuora REST API. 
* Request (object) **required**

### GET_SubscriptionsByAccount
Retrieves all subscriptions associated with the specified account. Zuora only returns the latest version of the subscriptions.

Subscription data is returned in reverse chronological order based on `updatedDate`.



```js
zuora.GET_SubscriptionsByAccount({
  "account-key": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* pageSize (integer) - Number of rows returned per page.
* account-key (string) **required** - 
* charge-detail (string) - The segmented rate plan charges.

### POST_PreviewSubscription
The REST API reference describes how to create a new subscription in preview mode. This call does not require a valid customer account. It can be used to show potential new customers a preview of a subscription with complete details and charges before creating an account, or to let existing customers preview a subscription with all charges before committing.

## Notes
- The response of the Preview Subscription call is based on the REST API minor version you set in the request header. The response structure might be different if you use different minor version numbers. 

- If you have the Advanced AR Settlement feature enabled, we recommend that you set the `zuora-version` parameter to `207.0` or later. Otherwise, an error is returned.


- Default values for **customerAcceptanceDate** and **serviceActivationDate** are set as follows.

|        | serviceActivationDate (SA) specified          | serviceActivationDate (SA) NOT specified  |
| ------------- |:-------------:| -----:|
| customerAcceptanceDate (CA) specified      | SA uses value in the request call; CA uses value in the request call| CA uses value in the request call;SA uses CE as default |
| customerAcceptanceDate (CA) NOT specified      | SA uses value in the request call; CA uses SA as default |   SA and CA use CE as default |



```js
zuora.POST_PreviewSubscription({
  "Request": {
    "termType": "",
    "contractEffectiveDate": "",
    "subscribeToRatePlans": []
  }
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* zuora-version (string) - 
* Request (object) **required**

### GET_SubscriptionsByKey
This REST API reference describes how to retrieve detailed information about a specified subscription in the latest version.



```js
zuora.GET_SubscriptionsByKey({
  "subscription-key": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* subscription-key (string) **required** - Possible values are:
* charge-detail (string) - 

### PUT_Subscription
Use this call to make the following kinds of changes to a subscription:
  * Add a note
  * Change the renewal term or auto-renewal flag
  * Change the term length or change between evergreen and termed
  * Add a new product rate plan
  * Remove an existing subscription rate plan
  * Change the quantity or price of an existing subscription rate plan

## Notes
* The Update Subscription call creates a new subscription, which has the old subscription number but a new subscription ID.  The old subscription is canceled but remains in the system.
* In one request, this call can make:
  * Up to 9 combined add, update, and remove changes
  * No more than 1 change to terms & conditions
* Updates are performed in the following sequence:
  1. First change the notes on the existing subscription, if requested.
  2. Then change the terms and conditions, if requested.
  3. Then perform the remaining amendments based upon the effective dates specified. If multiple amendments have the same contract-effective dates, then execute adds before updates, and updates before removes.
* The update operation is atomic. If any of the updates fails, the entire operation is rolled back.
* The response of the Update Subscription call is based on the REST API minor version you set in the request header. The response structure might be different if you use different minor version numbers. 
* If you have the Advanced AR Settlement feature enabled, we recommend that you set the `zuora-version` parameter to `207.0` or later. Otherwise, an error is returned.

## Override a Tiered Price
There are two ways you override a tiered price:

* Override a specific tier number
For example: `tiers[{tier:1,price:8},{tier:2,price:6}]`

* Override the entire tier structure
For example:  `tiers[{tier:1,price:8,startingUnit:1,endingUnit:100,priceFormat:"FlatFee"},
{tier:2,price:6,startingUnit:101,priceFormat:"FlatFee"}]`

If you just override a specific tier, do not include the `startingUnit` field in the request.



```js
zuora.PUT_Subscription({
  "subscription-key": "",
  "Request": {}
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* zuora-version (string) - 
* subscription-key (string) **required** - Subscription number or ID.
* Request (object) **required**

### PUT_CancelSubscription
This REST API reference describes how to cancel an active subscription.



```js
zuora.PUT_CancelSubscription({
  "subscription-key": "",
  "Request": {
    "cancellationPolicy": "",
    "invoiceCollect": true
  }
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* zuora-version (string) - The minor version of the Zuora REST API. 
* subscription-key (string) **required** - Subscription number or ID. Subscription status must be `Active`.
* Request (object) **required**

### PUT_RenewSubscription
Renews a termed subscription using existing renewal terms.



```js
zuora.PUT_RenewSubscription({
  "subscription-key": "",
  "Request": {}
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* zuora-version (string) - The minor version of the Zuora REST API. 
* subscription-key (string) **required** - Subscription number or ID
* Request (object) **required**

### PUT_ResumeSubscription
This REST API reference describes how to resume a suspended subscription. 

This feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://suport.zuora.com). 



```js
zuora.PUT_ResumeSubscription({
  "subscription-key": "",
  "Request": {
    "resumePolicy": ""
  }
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* zuora-version (string) - The minor version of the Zuora REST API. 
* subscription-key (string) **required** - Subscription number or ID. Subscription status must be Active.
* Request (object) **required**

### PUT_SuspendSubscription
This REST API reference describes how to suspend an active subscription. 

This feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://suport.zuora.com).



```js
zuora.PUT_SuspendSubscription({
  "subscription-key": "",
  "Request": {
    "suspendPolicy": ""
  }
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* zuora-version (string) - The minor version of the Zuora REST API. 
* subscription-key (string) **required** - Subscription number or ID. Subscription status must be Active.
* Request (object) **required**

### GET_SubscriptionsByKeyAndVersion
This REST API reference describes how to retrieve detailed information about a specified subscription in a specified version. When you create a subscription amendment, you create a new version of the subscription. You can use this method to retrieve information about a subscription in any version.



```js
zuora.GET_SubscriptionsByKeyAndVersion({
  "subscription-key": "",
  "version": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* subscription-key (string) **required** - Subscription number. For example, A-S00000135.
* version (string) **required** - Subscription version. For example, 1.
* charge-detail (string) - 

### DELETE_TaxationItem
Deletes a specific taxation item by ID.



```js
zuora.DELETE_TaxationItem({
  "id": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* id (string) **required** - The unique ID of a taxation item.

### GET_TaxationItem
Retrieves the information about a specific taxation item by ID.



```js
zuora.GET_TaxationItem({
  "id": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* id (string) **required** - The unique ID of a taxation item.

### PUT_TaxationItem
Updates a specific taxation item by ID.



```js
zuora.PUT_TaxationItem({
  "body": {
    "taxRate": 0,
    "jurisdiction": "",
    "name": "",
    "taxRateType": "",
    "taxAmount": 0
  },
  "id": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* body (object) **required**
* id (string) **required** - The unique ID of a taxation item.

### GET_TransactionInvoice
Retrieves invoices for a specified account. 
Invoices are returned in reverse chronological order by **updatedDate**.



```js
zuora.GET_TransactionInvoice({
  "account-key": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* pageSize (integer) - Number of rows returned per page.
* account-key (string) **required** - Account number or account ID.

### GET_TransactionPayment
Retrieves payments for a specified account. Payments are returned in
reverse chronological order by **updatedDate**.



```js
zuora.GET_TransactionPayment({
  "account-key": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* pageSize (integer) - Number of rows returned per page.
* account-key (string) **required** - Account number or account ID.

### POST_Usage

This REST API reference describes how to post or import usage data for one or more accounts in the CSV  format. There are no path or query parameters. The data is uploade using the HTTP multipart/form-data POST method and applied to the user's tenant. 

## How this REST API Call Works
The content of the upload file must follow the format used by the UI import tool. It must be a comma-separated (CSV) file with a corresponding .csv extension. The file size must not exceed 4MB. Click [here](https://knowledgecenter.zuora.com/@api/deki/files/4105/UsageFileFormat.csv) to download the usage file template.

At the completion of the upload, before actually processing the file contents, theAPI returns a response containing the byte count of the received file and a URL for checking the status of the import process.  Of the five possible results displayed at that URL Pending, Processing, Completed, Canceled, and Failed) only a Completed status indicates that the import was successful.  The operation is atomic; if any record fails, the file is rejected.  In that case, the entire import is rolled back and all stored data is returned to its original state.

To view the actual import status, enter the resulting status URL from the checkImportStatus response using a tool such as POSTMAN.This additional step provides more information about why the import may have failed.

To manage the information after a successful upload, use the web-based UI.

## Upload File Format
The upload file uses the following headings:

| Heading         | Description   | Required |
|-----------------|--------|----------|
| ACCOUNT_ID      | Enter the account number, e.g., the default account number, such as A00000001, or your custom account number.,Although this field is labeled as Account_Id, it is not the actual Account ID nor Account Name.  | Yes      |
| UOM             | Enter the unit of measure. This must match the UOM for the usage. | Yes      |
| QTY             | Enter the quantity.  | Yes      |
| STARTDATE       | Enter the start date of the usage.,This date determines the invoice item service period the associated usage is billed to. Date format is based on locale of the current user. Default date format: `MM/DD/YYYY` | Yes      |
| ENDDATE         | Enter the end date of the usage.,This is not used in calculations for usage billing and is optional. Date format is based on locale of the current user. Default date format: `MM/DD/YYYY`    | Yes      |
| SUBSCRIPTION_ID | Enter the subscription number or subscription name. If you created the subscription in the Zuora application, Zuora created a number automatically in a format similar to A-S00000001. If you do not provide a value for this field, the associated usage will be added to all subscriptions for the specified Account that use this Unit Of Measure. If your Accounts can have multiple subscriptions and you do not want double or triple counting of usage, you must specify the Subscription or Charge ID in each usage record.  | Yes      |
| CHARGE_ID       | Enter the charge number (not the charge name). You can see the charge ID, e.g., C-00000001, when you add your rate plan to your subscription and view your individual charges. If your Accounts can have multiple subscriptions and you do not want double or triple counting of usage, you must specify the specific Subscription or Charge ID in each usage record. This field is related to the Charge Number on the subscription rate plan.                       | Yes      |
| DESCRIPTION     | Enter a description for the charge. | No       |



```js
zuora.POST_Usage({
  "Content-Type": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* Content-Type (string) **required** - Must be set to "multipart/form-data".

### GET_Usage
This REST API reference describes how to retrieve usage details for an account. Usage data is returned in reverse chronological order.



```js
zuora.GET_Usage({
  "account-key": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* pageSize (integer) - Number of rows returned per page.
* account-key (string) **required** - Account number or account ID.

### PUT_AcceptUserAccess
**Note:** The Multi-entity feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). 

Accepts user access to an entity.

## User Access Permission
You must make the calls as an administrator of the entity that you want to accept the user access to. 



```js
zuora.PUT_AcceptUserAccess({
  "username": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* username (string) **required** - Specify the login name of the user that you want to accept the access request for.

### GET_EntitiesUserAccessible
**Note:** The Multi-entity feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). 

Retrieves detailed information about all the entities that a user has permission to access.

## User Access Permission
You can make the call as any entity user.



```js
zuora.GET_EntitiesUserAccessible({
  "username": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* username (string) **required** - Specify the login user name that you want to retrieve.

### PUT_DenyUserAccess
**Note:** The Multi-entity feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). 

Denies a user access to an entity. 

## User Access Permission
You must make the calls as an administrator of the entity that you want to deny the user access to.



```js
zuora.PUT_DenyUserAccess({
  "username": ""
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* username (string) **required** - Specify the login name of the user that you want to deny the access.

### PUT_SendUserAccessRequests
**Note:** The Multi-entity feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). 

Sends access requests to the entities that a user wants to access.

## User Access Permission
You must make the call as an administrator of the entity, in which the request user is created. Also, this administrator must have the permission to access the entities that the request user wants to access.



```js
zuora.PUT_SendUserAccessRequests({
  "username": "",
  "Request": {
    "targetEntityIds": []
  }
}, context)
```

#### Parameters
* entityId (string) - The Id of the entity that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* entityName (string) - The [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name) that you want to access. Note that you must have permission to access the entity. For more information, see [REST Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Entity-Id-and-Entity-Name).
* username (string) **required** - Specify the login name of the user who wants to access other entities.
* Request (object) **required**

