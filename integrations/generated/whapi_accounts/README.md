# @datafire/whapi_accounts

Client library for Accounts

## Installation and Usage
```bash
npm install --save @datafire/whapi_accounts
```
```js
let whapi_accounts = require('@datafire/whapi_accounts').create({
  apiKey: ""
});

whapi_accounts.getDetails({}).then(data => {
  console.log(data);
})
```

## Description

The Accounts API is a collection of methods used to query a customer account. It allows the developer to retrieve account-related data such as the user account balance.

## Actions

### getDetails
Retrieves a limited set of customer account details. For security purposes, only a subset is supplied, which does not include fields such as security questions and answers.


```js
whapi_accounts.getDetails({
  "apiSecret": "",
  "apiTicket": ""
}, context)
```

#### Input
* input `object`
  * apiSecret **required** `string`: Another unique identifier for your application.
  * apiTicket **required** `string`: Ticket Granting Ticket obtained from a previous request
  * fields `array`: Specify an absolute field list to return (Comma-Separated List)
  * include `array`: Specify fields in addition to the default to return (Comma-Separated List)
  * exclude `array`: Specify fields from the default to exclude (Comma-Separated List)

#### Output
* output [accounts](#accounts)

### getBalance
This method can be used to retrieve the customer’s account balance in UK Sterling.


```js
whapi_accounts.getBalance({
  "apiSecret": "",
  "apiTicket": ""
}, context)
```

#### Input
* input `object`
  * apiSecret **required** `string`: Another unique identifier for your application.
  * apiTicket **required** `string`: Ticket Granting Ticket obtained from a previous request
  * fields `array`: Specify an absolute field list to return (Comma-Separated List)
  * include `array`: Specify fields in addition to the default to return (Comma-Separated List)
  * exclude `array`: Specify fields from the default to exclude (Comma-Separated List)

#### Output
* output [accountBalance](#accountbalance)

### setAccountFlags
Sets a flag based on name to value provided for the user.


```js
whapi_accounts.setAccountFlags({
  "apiSecret": "",
  "apiTicket": "",
  "flags": []
}, context)
```

#### Input
* input `object`
  * apiSecret **required** `string`: Another unique identifier for your application.
  * apiTicket **required** `string`: Ticket Granting Ticket obtained from a previous request
  * apiCountryCode `string`: A two-character ISO 3166-1-Alpha-2 code representing the country API to use.
  * flags **required** [flags](#flags)

#### Output
* output [accountFlagsSet](#accountflagsset)

### getPayments
Retrieves the customer’s account payments in UK Sterling.


```js
whapi_accounts.getPayments({
  "apiSecret": "",
  "apiTicket": ""
}, context)
```

#### Input
* input `object`
  * apiSecret **required** `string`: Another unique identifier for your application.
  * apiTicket **required** `string`: Ticket Granting Ticket obtained from a previous request
  * page `number`: The page number to return (Used with pageSize)
  * pageSize `number`: Specify the number of results to return per page.
  * dateFrom `string`: The FROM datetime from payments to be returned. (yyyy-MM-ddTHH:mm:ss)
  * dateTo `string`: The TO datetime for payments to be returned. (yyyy-MM-ddTHH:mm:ss)
  * sort `string`: The order the response will be retuned by. i.e. date,desc
  * transactionType `string`: Allows the user to select with they want to see withdrawls or deposits. If it is omitted from the query both types will be returned
  * fields `array`: Specify an absolute field list to return (Comma-Separated List)
  * include `array`: Specify fields in addition to the default to return (Comma-Separated List)
  * exclude `array`: Specify fields from the default to exclude (Comma-Separated List)

#### Output
* output [getPayments](#getpayments)

### getRewardEligibility
Gets a customer's rewards eligibility and opt-in/out status


```js
whapi_accounts.getRewardEligibility({
  "apiSecret": "",
  "apiTicket": ""
}, context)
```

#### Input
* input `object`
  * apiSecret **required** `string`: Another unique identifier for your application.
  * apiTicket **required** `string`: Ticket Granting Ticket obtained from a previous request

#### Output
* output [rewardsEligibility](#rewardseligibility)



## Definitions

### accountBalance
* accountBalance `object`
  * availableFunds `number`: Current available funds in this account
  * balance **required** `number`: Current balance of account
  * currencyCode **required** `string`: A three-character ISO4217 currency code. This will be the currency that the user registered in
  * withdrawableFunds `number`: Current withdrawable balance of this account

### accountErrors
* accountErrors `object`
  * errors `array`
    * items [error](#error)

### accountFlagsSet
* accountFlagsSet `object`
  * token `string`

### accounts
* accounts `object`
  * accountId `string`: Account ID
  * accountNum **required** `string`: Account number
  * city `string`: The city of the customer's address
  * contactable `boolean`: Is it okay for the bookmaker to contact the customer with marketing information
  * country `string`: The country of the customer's address
  * countryCode `string`: A two-character ISO 3166-1-Alpha-2 code representing the customer's country of registration
  * county `string`: The county of the customer's address
  * currencyCode `string`: A three-character ISO4217 currency code. This will be the currency that the customer registered in
  * customerId `string`: Customer ID
  * email `string`: The primary email address of the customer with that account. Must be unique.
  * firstName **required** `string`: The first name of the customer with that account
  * flags [flags](#flags)
  * lastName **required** `string`: The last name of the customer with that account
  * mobile `string`: The mobile number of the customer with that account
  * partnerContactable `boolean`: Is it okay for the bookmaker to give the user's contact details to companies with which it has partnerships
  * postcode `string`: The postCode of the customer's address
  * status **required** `string`: Account status
  * street1 `string`: Line number 1 of the customer's street address written out in full
  * street2 `string`: Line number 2 of the customer's street address written out in full
  * street3 `string`: Line number 3 of the customer's street address written out in full
  * title `string`: The title of the name of the customer with that account

### error
* error `object`
  * code `string`: A unique William Hill identifier for the error
  * field `string`: To help pinpoint the exact parameter where a request has failed
  * message `string`: A unique William Hill text string to enable you to identify the error (in English only)

### flags
* flags `array`
  * items [flags_inner](#flags_inner)

### flags_inner
* flags_inner `object`
  * flagName **required** `string`: Name of the flag to set.
  * flagReason `string`: The reason that the flag has been set.
  * flagValue **required** `string`: Value to set the flag to.

### getPayments
* getPayments `object`
  * payments `array`
    * items [payment](#payment)

### payment
* payment `object`
  * action **required** `string`: Action of the payment (D = Deposit, W = withdrawal)
  * amount **required** `number`: The amount of the payment
  * channel `string`: The channel through which the payment was made
  * commision `number`: The commision for the payment
  * id **required** `string`: ID of the payment
  * ipAddress `string`: The IP address from which the payment was made
  * methodId `string`: ID of the payment method
  * paymentDateTime **required** `string`: The date and time when the payment was made
  * status **required** `string`: The status of the payment
  * type `string`: Type of the payment

### rewardsEligibility
* rewardsEligibility `object`: eligibilty status
  * status `string`


