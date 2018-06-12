# @datafire/adyen_checkoutservice

Client library for Adyen Checkout Service

## Installation and Usage
```bash
npm install --save @datafire/adyen_checkoutservice
```
```js
let adyen_checkoutservice = require('@datafire/adyen_checkoutservice').create();

adyen_checkoutservice.verify.post({}).then(data => {
  console.log(data);
});
```

## Description

A web service to initiate and authorise payments with Adyen Checkout. You can use the same integration for payments made with cards (including One-Click and 3D Secure), mobile wallets, and local payment methods (e.g. iDEAL and Sofort). For more information, refer to [Checkout documentation](https://docs.adyen.com/developers/checkout).

## Actions

### setup.post
Provides the data object that can be used to start the Checkout SDK. For the initial payment setup, pass the payment amount, currency, and other information that can be used by Adyen to optimize the payment flow and perform better risk assessment of the transaction.

For more information, refer to [Set up a payment](https://docs.adyen.com/developers/checkout/implement-your-server-checkout/set-up-a-payment-checkout).


```js
adyen_checkoutservice.setup.post({}, context)
```

#### Input
* input `object`
  * body [PaymentSetupRequest](#paymentsetuprequest)

#### Output
* output [PaymentSetupResponse](#paymentsetupresponse)

### verify.post
Verifies the payment result using the payload returned from the SDK.

For more information, refer to [Verify a payment](https://docs.adyen.com/developers/checkout/implement-your-server-checkout/verify-a-payment-checkout).


```js
adyen_checkoutservice.verify.post({}, context)
```

#### Input
* input `object`
  * body [PaymentVerificationRequest](#paymentverificationrequest)

#### Output
* output [PaymentVerificationResponse](#paymentverificationresponse)



## Definitions

### Address
* Address `object`
  * city **required** `string`: The city name.
  * country **required** `string`: A valid value is an ISO two-character country code (e.g. 'NL').
  * houseNumberOrName **required** `string`: The house number or name.
  * postalCode `string`: The postal code with a maximum of 5 characters for USA and maximum of 10 characters for any other country.
  * stateOrProvince `string`: For USA or Canada, a valid 2-character abbreviation for the state or province respectively. For other countries any abbreviation with maximum 3 characters for the state or province.
  * street **required** `string`: The street name.

### Amount
* Amount `object`
  * currency **required** `string`: The three-character [ISO currency code](https://docs.adyen.com/developers/currency-codes).
  * value **required** `integer`: The payable amount that can be charged for the transaction.

### Avs
* Avs `object`
  * addressEditable `boolean`
  * enabled `string`

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

### BrowserInfo
* BrowserInfo `object`
  * acceptHeader **required** `string`: The accept header value of the shopper's browser.
  * userAgent **required** `string`: The user agent value of the shopper's browser.

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

### Collection


### Configuration
* Configuration `object`
  * avs [Avs](#avs)
  * cardHolderNameRequired `boolean`
  * installments [Installments](#installments)

### ForexQuote
* ForexQuote `object`
  * account `string`: The account name.
  * accountType `string`: The account type.
  * baseAmount [Amount](#amount)
  * basePoints **required** `integer`: The base points.
  * buy [Amount](#amount)
  * interbank [Amount](#amount)
  * reference `string`: The reference assigned to the forex quote request.
  * sell [Amount](#amount)
  * signature `string`: The signature to validate the integrity.
  * source `string`: The source of the forex quote.
  * type `string`: The type of forex.
  * validTill **required** `string`: The date until which the forex quote is valid.

### FraudResult
* FraudResult `object`
  * accountScore **required** `integer`: The total fraud score generated by the risk checks.
  * results [Collection](#collection)

### InputDetail
* InputDetail `object`
  * configuration `object`: Configuration parameters for the required input.
  * inputDetails `array`: In case of address data, inputDetails can be set recursively.
    * items [SubInputDetail](#subinputdetail)
  * itemSearchUrl `string`: In case of a select, the URL from which to query the items.
  * items `array`: In case of a select, the items to choose from.
    * items [Item](#item)
  * key `string`: The value to provide in the result.
  * optional `boolean`: True if this input is optional to provide.
  * type `string`: The type of the required input.
  * value `string`: The value can be pre-filled, if available.

### Installments
* Installments `object`
  * value **required** `integer`: Defines the number of installments. Its value needs to be greater than zero.

### Item
* Item `object`
  * id `string`: value to provide in the result
  * imageUrl `string`: optional image URL
  * name `string`: display name

### Name
* Name `object`
  * firstName **required** `string`: A person's first name.
  * gender **required** `string` (values: MALE, FEMALE, UNKNOWN): A person's gender (can be unknown).
  * infix `string`: A person name's infix, if applicable. Maximum length: 20 characters.
  * lastName **required** `string`: A person's last name.

### PaymentDetails
* PaymentDetails `object`
  * additionalAmount [Amount](#amount)
  * amount [Amount](#amount)
  * countryCode `string`: The shopper's country code.
  * reference `string`: The reference assigned to the payment.
  * sessionValidity `string`: The maximum validity of the session.
  * shopperLocale `string`: The shopper's locale.
  * shopperReference `string`: The reference used to uniquely identify the shopper (e.g. user ID or account ID).

### PaymentMethod
* PaymentMethod `object`
  * configuration `object`: The configuration.
  * group [PaymentMethodGroup](#paymentmethodgroup)
  * inputDetails `array`: All input details to be provided to complete the payment with this payment method.
    * items [InputDetail](#inputdetail)
  * name `string`: The displayable name of this payment method.
  * paymentMethodData `string`: echo data required to send in next calls.
  * type `string`: The unique payment method code.

### PaymentMethodGroup
* PaymentMethodGroup `object`
  * name `string`: The name of the group.
  * paymentMethodData `string`: Echo data to be used if the payment method is displayed as part of this group.
  * type `string`: The unique code of the group.

### PaymentSetupRequest
* PaymentSetupRequest `object`
  * additionalAmount [Amount](#amount)
  * additionalData `object`: This field contains additional data, which may be required for a particular payment request.
  * amount **required** [Amount](#amount)
  * bankAccount [BankAccount](#bankaccount)
  * billingAddress [Address](#address)
  * browserInfo [BrowserInfo](#browserinfo)
  * captureDelayHours `integer`: The delay between the authorisation and scheduled auto-capture, specified in hours.
  * card [Card](#card)
  * channel **required** `string` (values: iOS, Android, Web): The platform where a payment transaction takes place. This field is required for filtering out payment methods that are only available on specific platforms.
  * configuration [Configuration](#configuration)
  * countryCode `string`: The shopper country.
  * dateOfBirth `string`: The shopper's date of birth.
  * dccQuote [ForexQuote](#forexquote)
  * deliveryAddress [Address](#address)
  * deliveryDate `string`: The date and time the purchased goods should be delivered.
  * deviceFingerprint `string`: A string containing the shopper's device fingerprint. For more information, refer to [Device fingerprinting](https://docs.adyen.com/developers/risk-management/device-fingerprinting).
  * enableOneClick `boolean`: When true and `shopperReference` is provided, the shopper will be asked if the payment details should be stored for future one-click payments.
  * enableRecurring `boolean`: When true and `shopperReference` is provided, 'Recurring' will be added to the recurring contract.
  * entityType `string` (values: NaturalPerson, CompanyName): The type of the entity the payment is processed for.
  * fraudOffset `integer`: An integer value that is added to the normal fraud score. The value can be either positive or negative.
  * html `boolean`: Required for the Web integration.
  * installments [Installments](#installments)
  * mcc `string`: The [merchant category code](https://en.wikipedia.org/wiki/Merchant_category_code) (MCC) is a four-digit number, which relates to a particular market segment. This code reflects the predominant activity that is conducted by the merchant.
  * merchantAccount **required** `string`: The merchant account identifier, with which you want to process the transaction.
  * merchantOrderReference `string`: This reference allows linking multiple transactions to each other.
  * metadata `object`: Metadata consists of entries, each of which includes a key and a value.
  * mpiData [ThreeDSecureData](#threedsecuredata)
  * nationality `string`: The two-character country code of the shopper's nationality.
  * orderReference `string`: The order reference to link multiple partial payments.
  * origin `string`: Required for the Web integration.
  * recurring [Recurring](#recurring)
  * recurringProcessingModel `string` (values: CardOnFile, Subscription): Defines a recurring payment type.
  * reference **required** `string`: The reference to uniquely identify a payment. This reference is used in all communication with you about the payment status. We recommend using a unique value per payment; however, it is not a requirement.
  * returnUrl `string`: The URL to return to.
  * selectedBrand `string`: Some payment methods require defining a value for this field to specify how to process the transaction.
  * selectedRecurringDetailReference `string`: The `recurringDetailReference` you want to use for this payment. The value `LATEST` can be used to select the most recently stored recurring detail.
  * sessionId `string`: A session ID used to identify a payment session.
  * sessionValidity `string`: The maximum validity of the session.
  * shopperEmail `string`: The shopper's email address. We recommend that you provide this data, as it is used in velocity fraud checks.
  * shopperIP `string`: The shopper's IP address. We recommend that you provide this data, as it is used in a number of risk checks (for instance, number of payment attempts or location-based checks).
  * shopperInteraction `string` (values: Ecommerce, ContAuth, Moto, POS): Specifies the sales channel, through which the shopper gives their card details, and whether the shopper is a returning customer.
  * shopperLocale `string`: The combination of a language code and a country code to specify the language to be used in the payment.
  * shopperName [Name](#name)
  * shopperReference `string`: The shopper's reference to uniquely identify this shopper (e.g. user ID or account ID).
  * shopperStatement `string`: The text to appear on the shopper's bank statement.
  * socialSecurityNumber `string`: The shopper's social security number.
  * store `string`: The physical store, for which this payment is processed.
  * telephoneNumber `string`: The shopper's telephone number.
  * token `string`: The token obtained when initializing the SDK.
  * totalsGroup `string`: The reference value to aggregate sales totals in reporting. When not specified, the store field is used (if available).

### PaymentSetupResponse
* PaymentSetupResponse `object`
  * disableRecurringDetailUrl `string`: The URL to disable recurring details.
  * generationtime `string`: The generationtime of this request, required for encryption.
  * html `string`: The stream with html logic, if the html flag was set in the request.
  * initiationUrl `string`: The URL for the initiation call.
  * logoBaseUrl `string`: The base URL for payment method logos.
  * origin `string`: The user origin.
  * originKey `string`: The encrypted user origin.
  * payment [PaymentDetails](#paymentdetails)
  * paymentData `string`: The data blob required to be sent in every future session call.
  * paymentMethods `array`: The detailed list of payment methods required to generate payment forms.
    * items [PaymentMethod](#paymentmethod)
  * publicKey `string`: The public key required to encrypt sensitive data.
  * publicKeyToken `string`: The public key token.
  * recurringDetails `array`: The detailed list of stored payment details required to generate payment forms. Will be empty if oneClick is set to false in the request.
    * items [RecurringDetail](#recurringdetail)

### PaymentVerificationRequest
* PaymentVerificationRequest `object`
  * payload **required** `string`: Encrypted and signed payment result data. You should receive this value from the Checkout SDK after the shopper completes the payment.

### PaymentVerificationResponse
* PaymentVerificationResponse `object`
  * additionalData `object`: This field contains additional data, which may be required to return in a particular payment response. To choose data fields to be returned, go to **Customer Area** > **Settings** > **API and Response**.
  * authResponse **required** `string`: The authorisation code representing the authentication result.
  * errorMessage `string`: The error message.
  * fraudResult [FraudResult](#fraudresult)
  * merchantReference **required** `string`: A unique value that you provided in the initial /setup request as a `reference` field.
  * pspReference `string`: Adyen's 16-digit unique reference associated with the transaction/the request. This value is globally unique; quote it when communicating with us about this request.
  * refusalReason `string`: If the payment's authorisation is refused or an error occurs during authorisation, this field holds Adyen's mapped reason for the refusal or a description of the error.
  * resultCode `string` (values: Authorised, PartiallyAuthorised, Refused, Error, Cancelled, Received, RedirectShopper): The result of the payment.

### Recurring
* Recurring `object`
  * contract `string` (values: ONECLICK, RECURRING, PAYOUT): The type of recurring contract to be used.
  * recurringDetailName `string`: A descriptive name for this detail.
  * tokenService `string` (values: VISATOKENSERVICE): The name of the token service.

### RecurringDetail
* RecurringDetail `object`
  * bank [BankAccount](#bankaccount)
  * card [Card](#card)
  * configuration `object`: The configuration.
  * emailAddress `string`
  * group [PaymentMethodGroup](#paymentmethodgroup)
  * inputDetails `array`: All input details to be provided to complete the payment with this payment method.
    * items [InputDetail](#inputdetail)
  * name `string`: The displayable name of this payment method.
  * paymentMethodData `string`: echo data required to send in next calls.
  * type `string`: The unique payment method code.

### SubInputDetail
* SubInputDetail `object`
  * key `string`: The value to provide in the result.
  * optional `boolean`: True if this input is optional to provide.
  * type `string`: The type of the required input.
  * value `string`: The value can be pre-filled, if available.

### ThreeDSecureData
* ThreeDSecureData `object`
  * authenticationResponse `string` (values: Y, N, U, A): The authentication response if the shopper was redirected.
  * cavv `string`: The cardholder authentication value (base64 encoded, 20 bytes in a decoded form).
  * cavvAlgorithm `string`: The CAVV algorithm used.
  * directoryResponse `string` (values: Y, N, U, E): The enrollment response from the 3D directory server.
  * eci `string`: The electronic commerce indicator.
  * xid `string`: The transaction identifier (base64 encoded, 20 bytes in a decoded form).


