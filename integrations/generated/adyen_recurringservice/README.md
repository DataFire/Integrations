# @datafire/adyen_recurringservice

Client library for Adyen Recurring API

## Installation and Usage
```bash
npm install --save @datafire/adyen_recurringservice
```
```js
let adyen_recurringservice = require('@datafire/adyen_recurringservice').create({
  ApiKeyAuth: "",
  username: "",
  password: ""
});

.then(data => {
  console.log(data);
});
```

## Description

The Recurring APIs allow you to manage and remove your tokens or saved payment details. Tokens should be created with validation during a payment request.

For more information, refer to our [Tokenization documentation](https://docs.adyen.com/checkout/tokenization).
## Authentication
To connect to the Recurring API, you must use your basic authentication credentials. For this, create your web service user, as described in [How to get the WS user password](https://docs.adyen.com/user-management/how-to-get-the-web-service-ws-user-password). Then use its credentials to authenticate your request, for example:

```
curl
-U "ws@Company.YourCompany":"YourWsPassword" \
-H "Content-Type: application/json" \
...
```
Note that when going live, you need to generate new web service user credentials to access the [live endpoints](https://docs.adyen.com/development-resources/live-endpoints).

## Versioning
Recurring API supports versioning of its endpoints through a version suffix in the endpoint URL. This suffix has the following format: "vXX", where XX is the version number.

For example:
```
https://pal-test.adyen.com/pal/servlet/Recurring/v25/disable
```

## Actions

### disable.post
Disables stored payment details to stop charging a shopper with this particular recurring detail ID.

For more information, refer to [Disable stored details](https://docs.adyen.com/classic-integration/recurring-payments/disable-stored-details/).


```js
adyen_recurringservice.disable.post({}, context)
```

#### Input
* input `object`
  * body [DisableRequest](#disablerequest)

#### Output
* output [DisableResult](#disableresult)

### listRecurringDetails.post
Lists the stored payment details for a shopper, if there are any available. The recurring detail ID can be used with a regular authorisation request to charge the shopper. A summary of the payment detail is returned for presentation to the shopper.

For more information, refer to [Retrieve stored details](https://docs.adyen.com/classic-integration/recurring-payments/retrieve-stored-details/).


```js
adyen_recurringservice.listRecurringDetails.post({}, context)
```

#### Input
* input `object`
  * body [RecurringDetailsRequest](#recurringdetailsrequest)

#### Output
* output [RecurringDetailsResult](#recurringdetailsresult)

### scheduleAccountUpdater.post
When making the API call, you can submit either the credit card information, or the recurring detail reference and the shopper reference:
* If the card information is provided, all the sub-fields for `card` are mandatory.
* If the recurring detail reference is provided, the fields for `shopperReference` and `selectedRecurringDetailReference` are mandatory.


```js
adyen_recurringservice.scheduleAccountUpdater.post({}, context)
```

#### Input
* input `object`
  * body [ScheduleAccountUpdaterRequest](#scheduleaccountupdaterrequest)

#### Output
* output [ScheduleAccountUpdaterResult](#scheduleaccountupdaterresult)



## Definitions

### Address
* Address `object`
  * city **required** `string`: The name of the city.
  * country **required** `string`: The two-character country code as defined in ISO-3166-1 alpha-2. For example, **US**.
  * houseNumberOrName **required** `string`: The number or name of the house.
  * postalCode **required** `string`: A maximum of five digits for an address in the US, or a maximum of ten characters for an address in all other countries.
  * stateOrProvince `string`: State or province codes as defined in ISO 3166-2. For example, **CA** in the US or **ON** in Canada.
  * street **required** `string`: The name of the street.

### BankAccount
* BankAccount `object`
  * bankAccountNumber `string`: The bank account number (without separators).
  * bankCity `string`: The bank city.
  * bankLocationId `string`: The location id of the bank. The field value is `nil` in most cases.
  * bankName `string`: The name of the bank.
  * bic `string`: The [Business Identifier Code](https://en.wikipedia.org/wiki/ISO_9362) (BIC) is the SWIFT address assigned to a bank. The field value is `nil` in most cases.
  * countryCode `string`: Country code where the bank is located.
  * iban `string`: The [International Bank Account Number](https://en.wikipedia.org/wiki/International_Bank_Account_Number) (IBAN).
  * ownerName `string`: The name of the bank account holder.
  * taxId `string`: The bank account holder's tax ID.

### Card
* Card `object`
  * cvc `string`: The [card verification code](https://docs.adyen.com/payments-fundamentals/payment-glossary#card-security-code-cvc-cvv-cid) (1-20 characters). Depending on the card brand, it is known also as:
  * expiryMonth **required** `string`: The card expiry month.
  * expiryYear **required** `string`: The card expiry year.
  * holderName **required** `string`: The name of the cardholder, as printed on the card.
  * issueNumber `string`: The issue number of the card (for some UK debit cards only).
  * number **required** `string`: The card number (4-19 characters). Do not use any separators.
  * startMonth `string`: The month component of the start date (for some UK debit cards only).
  * startYear `string`: The year component of the start date (for some UK debit cards only).

### DisableRequest
* DisableRequest `object`
  * contract `string`: Specify the contract if you only want to disable a specific use.
  * merchantAccount **required** `string`: The merchant account identifier with which you want to process the transaction.
  * recurringDetailReference `string`: The ID that uniquely identifies the recurring detail reference.
  * shopperReference **required** `string`: The ID that uniquely identifies the shopper.

### DisableResult
* DisableResult `object`
  * response `string`: Depending on whether a specific recurring detail was in the request, result is either [detail-successfully-disabled] or [all-details-successfully-disabled].

### Name
* Name `object`
  * firstName **required** `string`: The first name.
  * gender **required** `string` (values: MALE, FEMALE, UNKNOWN): The gender.
  * infix `string`: The name's infix, if applicable.
  * lastName **required** `string`: The last name.

### Recurring
* Recurring `object`
  * contract `string` (values: ONECLICK, RECURRING, PAYOUT): The type of recurring contract to be used.
  * recurringDetailName `string`: A descriptive name for this detail.
  * tokenService `string` (values: VISATOKENSERVICE, MCTOKENSERVICE): The name of the token service.

### RecurringDetail
* RecurringDetail `object`
  * additionalData `object`: This field contains additional data, which may be returned in a particular response.
  * alias `string`: The alias of the credit card number.
  * aliasType `string`: The alias type of the credit card number.
  * bank [BankAccount](#bankaccount)
  * billingAddress [Address](#address)
  * card [Card](#card)
  * contractTypes `array`: Types of recurring contracts.
    * items `string`
  * creationDate `string`: The date when the recurring details were created.
  * firstPspReference `string`: The `pspReference` of the first recurring payment that created the recurring detail.
  * name `string`: An optional descriptive name for this recurring detail.
  * paymentMethodVariant `string`: The  type or sub-brand of a payment method used, e.g. Visa Debit, Visa Corporate, etc. For more information, refer to [PaymentMethodVariant](https://docs.adyen.com/development-resources/paymentmethodvariant).
  * recurringDetailReference **required** `string`: The reference that uniquely identifies the recurring detail.
  * shopperName [Name](#name)
  * socialSecurityNumber `string`: A shopper's social security number (only in countries where it is legal to collect).
  * variant **required** `string`: The payment method, such as “mc", "visa", "ideal", "paypal".

### RecurringDetailsRequest
* RecurringDetailsRequest `object`
  * merchantAccount **required** `string`: The merchant account identifier you want to process the (transaction) request with.
  * recurring [Recurring](#recurring)
  * shopperReference **required** `string`: The reference you use to uniquely identify the shopper (e.g. user ID or account ID).

### RecurringDetailsResult
* RecurringDetailsResult `object`
  * creationDate `string`: The date when the recurring details were created.
  * details `array`: Payment details stored for recurring payments.
    * items [RecurringDetail](#recurringdetail)
  * lastKnownShopperEmail `string`: The most recent email for this shopper (if available).
  * shopperReference `string`: The reference you use to uniquely identify the shopper (e.g. user ID or account ID).

### ScheduleAccountUpdaterRequest
* ScheduleAccountUpdaterRequest `object`
  * additionalData `object`: This field contains additional data, which may be required for a particular request.
  * card [Card](#card)
  * merchantAccount **required** `string`: Account of the merchant.
  * reference **required** `string`: A reference that merchants can apply for the call.
  * selectedRecurringDetailReference `string`: The selected detail recurring reference.
  * shopperReference `string`: The reference of the shopper that owns the recurring contract.

### ScheduleAccountUpdaterResult
* ScheduleAccountUpdaterResult `object`
  * pspReference **required** `string`: Adyen's 16-character unique reference associated with the transaction. This value is globally unique; quote it when communicating with us about this request.
  * result **required** `string`: The result of scheduling an Account Updater. If scheduling was successful, this field returns **Success**; otherwise it contains the error message.


