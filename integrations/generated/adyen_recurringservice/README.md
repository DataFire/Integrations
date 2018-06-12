# @datafire/adyen_recurringservice

Client library for Adyen Recurring Service

## Installation and Usage
```bash
npm install --save @datafire/adyen_recurringservice
```
```js
let adyen_recurringservice = require('@datafire/adyen_recurringservice').create();

adyen_recurringservice.listRecurringDetails.post({}).then(data => {
  console.log(data);
});
```

## Description

Additional methods that allow you to manage payment details stored for recurring payments. For more information, refer to [Recurring payments](https://docs.adyen.com/developers/features/recurring-payments).

## Actions

### disable.post
Disables stored payment details to stop charging a shopper with this particular recurring detail ID.

For more information, refer to [Disable stored details](https://docs.adyen.com/developers/features/recurring-payments/disable-stored-details).


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

For more information, refer to [Retrieve stored details](https://docs.adyen.com/developers/features/recurring-payments/retrieve-stored-details).


```js
adyen_recurringservice.listRecurringDetails.post({}, context)
```

#### Input
* input `object`
  * body [RecurringDetailsRequest](#recurringdetailsrequest)

#### Output
* output [RecurringDetailsResult](#recurringdetailsresult)



## Definitions

### Address
* Address `object`
  * city **required** `string`: The city name.
  * country **required** `string`: A valid value is an ISO two-character country code (e.g. 'NL').
  * houseNumberOrName **required** `string`: The house number or name.
  * postalCode `string`: The postal code with a maximum of 5 characters for USA and maximum of 10 characters for any other country.
  * stateOrProvince `string`: For USA or Canada, a valid 2-character abbreviation for the state or province respectively. For other countries any abbreviation with maximum 3 characters for the state or province.
  * street **required** `string`: The street name.

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
  * cvc `string`: The [card verification code](https://docs.adyen.com/developers/payment-glossary#cardsecuritycodecvccvvcid) (1-20 characters). Depending on the card brand, it is known also as:
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
  * merchantAccount **required** `string`: Your merchant account.
  * recurringDetailReference `string`: The ID that uniquely identifies the recurring detail reference.
  * shopperReference **required** `string`: The ID that uniquely identifies the shopper.

### DisableResult
* DisableResult `object`
  * details `array`: A list of one or more recurring payment details that were disabled.
    * items [RecurringDetail](#recurringdetail)
  * response `string`: Depending on whether a specific recurring detail was in the request, result is either [detail-successfully-disabled] or [all-details-successfully-disabled].

### ELV
* ELV `object`
  * accountHolderName `string`
  * bankAccountNumber `string`
  * bankLocation `string`
  * bankLocationId `string`
  * bankName `string`

### Name
* Name `object`
  * firstName **required** `string`: A person's first name.
  * gender **required** `string` (values: MALE, FEMALE, UNKNOWN): A person's gender (can be unknown).
  * infix `string`: A person name's infix, if applicable. Maximum length: 20 characters.
  * lastName **required** `string`: A person's last name.

### Recurring
* Recurring `object`
  * contract `string` (values: ONECLICK, RECURRING, PAYOUT): The type of recurring contract to be used.
  * recurringDetailName `string`: A descriptive name for this detail.
  * tokenService `string` (values: VISATOKENSERVICE): The name of the token service.

### RecurringDetail
* RecurringDetail `object`
  * acquirer `string`
  * acquirerAccount `string`
  * additionalData `object`
  * alias `string`
  * aliasType `string`
  * bank [BankAccount](#bankaccount)
  * billingAddress [Address](#address)
  * card [Card](#card)
  * contractTypes `array`
    * items `string`
  * creationDate `string`
  * elv [ELV](#elv)
  * firstPspReference `string`
  * name `string`: An optional descriptive name for this recurring detail
  * paymentMethodVariant `string`
  * recurringDetailReference `string`: The reference that uniquely identifies the recurring detail
  * shopperName [Name](#name)
  * socialSecurityNumber `string`
  * tokenDetails [TokenDetails](#tokendetails)
  * variant `string`

### RecurringDetailsRequest
* RecurringDetailsRequest `object`
  * merchantAccount **required** `string`: The merchant account identifier you want to process the (transaction) request with.
  * recurring [Recurring](#recurring)
  * shopperReference **required** `string`: The reference you use to uniquely identify the shopper (e.g. user ID or account ID).

### RecurringDetailsResult
* RecurringDetailsResult `object`
  * creationDate `string`: The date when the recurring details were created.
  * details `array`: A list of one or more recurring payment details.
    * items [RecurringDetail](#recurringdetail)
  * invalidOneclickContracts `boolean`
  * lastKnownShopperEmail `string`: The most recent email for this shopper (if available).
  * shopperReference `string`: The reference you use to uniquely identify the shopper (e.g. user ID or account ID).

### TokenDetails
* TokenDetails `object`
  * tokenData `object`
  * tokenDataType `string`


