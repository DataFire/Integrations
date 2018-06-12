# @datafire/adyen_paymentservice

Client library for Adyen Payment Service

## Installation and Usage
```bash
npm install --save @datafire/adyen_paymentservice
```
```js
let adyen_paymentservice = require('@datafire/adyen_paymentservice').create();

adyen_paymentservice.refund.post({}).then(data => {
  console.log(data);
});
```

## Description

A set of API endpoints that allow you to initiate, settle, and modify payments on the Adyen payments platform. You can use the API to accept card payments (including One-Click and 3D Secure), bank transfers, ewallets, and many other payment methods. For more information, refer to [Ecommerce integration](https://docs.adyen.com/developers/ecommerce-integration).

## Actions

### adjustAuthorisation.post
Allows you to increase or decrease the authorised amount after the initial authorisation has taken place. This functionality enables tipping, improving the chances your authorisation will be valid, charging the shopper when they have already left the merchant premises, etc.

For more information, refer to [Adjust Authorisation](https://docs.adyen.com/developers/payment-modifications#adjustauthorisation).


```js
adyen_paymentservice.adjustAuthorisation.post({}, context)
```

#### Input
* input `object`
  * body [ModificationRequest](#modificationrequest)

#### Output
* output [ModificationResult](#modificationresult)

### authorise.post
Creates a payment with a unique reference (`pspReference`) and attempts to obtain an authorisation hold. For cards, this amount can be captured or cancelled later. Non-card payment methods typically don't support this and will automatically capture as part of the authorisation.

For more information, refer to [Ecommerce quick integration](https://docs.adyen.com/developers/ecommerce-integration).


```js
adyen_paymentservice.authorise.post({}, context)
```

#### Input
* input `object`
  * body [PaymentRequest](#paymentrequest)

#### Output
* output [PaymentResult](#paymentresult)

### authorise3d.post
For an authenticated 3D Secure session, completes the payment authorisation. This endpoint must receive the `md` and `paResponse` parameters that you get from the card issuer after a shopper pays via 3D Secure.

For more information, refer to [3D Secure](https://docs.adyen.com/developers/risk-management/3d-secure).


```js
adyen_paymentservice.authorise3d.post({}, context)
```

#### Input
* input `object`
  * body [PaymentRequest3d](#paymentrequest3d)

#### Output
* output [PaymentResult](#paymentresult)

### cancel.post
Cancels the authorisation hold on a payment, returning a unique reference for this request. You can cancel payments after authorisation only for payment methods that support distinct authorisations and captures.

For more information, refer to [Cancel](https://docs.adyen.com/developers/payment-modifications#cancel).


```js
adyen_paymentservice.cancel.post({}, context)
```

#### Input
* input `object`
  * body [ModificationRequest](#modificationrequest)

#### Output
* output [ModificationResult](#modificationresult)

### cancelOrRefund.post
Cancels a payment if it has not yet been captured yet, or refunds it if it has already been captured. This is useful when it is not certain if the payment has been captured or not (for example, when using auto-capture).

For more information, refer to [Cancel or refund](https://docs.adyen.com/developers/payment-modifications#cancelorrefund).


```js
adyen_paymentservice.cancelOrRefund.post({}, context)
```

#### Input
* input `object`
  * body [ModificationRequest](#modificationrequest)

#### Output
* output [ModificationResult](#modificationresult)

### capture.post
Captures the authorisation hold on a payment, returning a unique reference for this request. Usually the full authorisation amount is captured, however it's also possible to capture a smaller amount, which results in cancelling the remaining authorisation balance.

Payment methods, which automatically capture as part of authorisation, don't need to be captured, but submitting a capture request on these transactions will not result in double charges. If immediate or delayed auto-capture is enabled, calling the capture method is not neccessary.

For more information, refer to [Capture](https://docs.adyen.com/developers/payment-modifications#capture).


```js
adyen_paymentservice.capture.post({}, context)
```

#### Input
* input `object`
  * body [ModificationRequest](#modificationrequest)

#### Output
* output [ModificationResult](#modificationresult)

### refund.post
Refunds a payment that has previously been captured, returning a unique reference for this request. Refunding can be done on the full captured amount or a partial amount. Multiple (partial) refunds will be accepted as long as their sum doesn't exceed the captured amount. Payments which have been authorised, but not captured, cannot be refunded, use the /cancel method instead.

> Some payment methods/gateways do not support partial/multiple refunds.
> A margin above the captured limit can be configured to cover shipping/handling costs.

For more information, refer to [Refund](https://docs.adyen.com/developers/payment-modifications#refund).


```js
adyen_paymentservice.refund.post({}, context)
```

#### Input
* input `object`
  * body [ModificationRequest](#modificationrequest)

#### Output
* output [ModificationResult](#modificationresult)



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

### Installments
* Installments `object`
  * value **required** `integer`: Defines the number of installments. Its value needs to be greater than zero.

### ModificationRequest
* ModificationRequest `object`
  * additionalData `object`: This field contains additional data, which may be required for a particular payment request.
  * authorisationCode `string`: The authorisation code of the payment (only required for the "authoriseReferral" method).
  * merchantAccount **required** `string`: The merchant account that is used to process the payment.
  * modificationAmount [Amount](#amount)
  * originalMerchantReference `string`: The original merchant reference to cancel.
  * originalReference **required** `string`: The original pspReference of the payment to modify.
  * reference `string`: Optionally, you can specify your reference for the payment modification. This reference is visible in Customer Area and in reports.
  * tenderReference `string`: The transaction reference provided by the PED. For Point-of-sale integrations only.
  * uniqueTerminalId `string`: Unique terminal ID for the PED that originally processed the request. For Point-of-sale integrations only.

### ModificationResult
* ModificationResult `object`
  * additionalData `object`: This field contains additional data, which may be returned in a particular modification response.
  * pspReference `string`: Adyen's 16-digit unique reference associated with the transaction/the request. This value is globally unique; quote it when communicating with us about this request.
  * response `string` (values: [capture-received], [cancel-received], [refund-received], [cancelOrRefund-received]): Indicates if the modification request has been received for processing.

### Name
* Name `object`
  * firstName **required** `string`: A person's first name.
  * gender **required** `string` (values: MALE, FEMALE, UNKNOWN): A person's gender (can be unknown).
  * infix `string`: A person name's infix, if applicable. Maximum length: 20 characters.
  * lastName **required** `string`: A person's last name.

### PaymentRequest
* PaymentRequest `object`
  * additionalAmount [Amount](#amount)
  * additionalData `object`: This field contains additional data, which may be required for a particular payment request.
  * amount **required** [Amount](#amount)
  * bankAccount [BankAccount](#bankaccount)
  * billingAddress [Address](#address)
  * browserInfo [BrowserInfo](#browserinfo)
  * captureDelayHours `integer`: The delay between the authorisation and scheduled auto-capture, specified in hours.
  * card [Card](#card)
  * dateOfBirth `string`: The shopper's date of birth.
  * dccQuote [ForexQuote](#forexquote)
  * deliveryAddress [Address](#address)
  * deliveryDate `string`: The date and time the purchased goods should be delivered.
  * deviceFingerprint `string`: A string containing the shopper's device fingerprint. For more information, refer to [Device fingerprinting](https://docs.adyen.com/developers/risk-management/device-fingerprinting).
  * entityType `string` (values: NaturalPerson, CompanyName): The type of the entity the payment is processed for.
  * fraudOffset `integer`: An integer value that is added to the normal fraud score. The value can be either positive or negative.
  * installments [Installments](#installments)
  * mcc `string`: The [merchant category code](https://en.wikipedia.org/wiki/Merchant_category_code) (MCC) is a four-digit number, which relates to a particular market segment. This code reflects the predominant activity that is conducted by the merchant.
  * merchantAccount **required** `string`: The merchant account identifier, with which you want to process the transaction.
  * merchantOrderReference `string`: This reference allows linking multiple transactions to each other.
  * metadata `object`: Metadata consists of entries, each of which includes a key and a value.
  * mpiData [ThreeDSecureData](#threedsecuredata)
  * nationality `string`: The two-character country code of the shopper's nationality.
  * orderReference `string`: The order reference to link multiple partial payments.
  * recurring [Recurring](#recurring)
  * recurringProcessingModel `string` (values: CardOnFile, Subscription): Defines a recurring payment type.
  * reference **required** `string`: The reference to uniquely identify a payment. This reference is used in all communication with you about the payment status. We recommend using a unique value per payment; however, it is not a requirement.
  * selectedBrand `string`: Some payment methods require defining a value for this field to specify how to process the transaction.
  * selectedRecurringDetailReference `string`: The `recurringDetailReference` you want to use for this payment. The value `LATEST` can be used to select the most recently stored recurring detail.
  * sessionId `string`: A session ID used to identify a payment session.
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
  * totalsGroup `string`: The reference value to aggregate sales totals in reporting. When not specified, the store field is used (if available).

### PaymentRequest3d
* PaymentRequest3d `object`
  * additionalAmount [Amount](#amount)
  * additionalData `object`: This field contains additional data, which may be required for a particular payment request.
  * amount **required** [Amount](#amount)
  * billingAddress [Address](#address)
  * browserInfo [BrowserInfo](#browserinfo)
  * captureDelayHours `integer`: The delay between the authorisation and scheduled auto-capture, specified in hours.
  * dateOfBirth `string`: The shopper's date of birth.
  * dccQuote [ForexQuote](#forexquote)
  * deliveryAddress [Address](#address)
  * deliveryDate `string`: The date and time the purchased goods should be delivered.
  * deviceFingerprint `string`: A string containing the shopper's device fingerprint. For more information, refer to [Device fingerprinting](https://docs.adyen.com/developers/risk-management/device-fingerprinting).
  * fraudOffset `integer`: An integer value that is added to the normal fraud score. The value can be either positive or negative.
  * installments [Installments](#installments)
  * mcc `string`: The [merchant category code](https://en.wikipedia.org/wiki/Merchant_category_code) (MCC) is a four-digit number, which relates to a particular market segment. This code reflects the predominant activity that is conducted by the merchant.
  * md **required** `string`: The payment session identifier returned by the card issuer.
  * merchantAccount **required** `string`: The merchant account identifier, with which you want to process the transaction.
  * merchantOrderReference `string`: This reference allows linking multiple transactions to each other.
  * metadata `object`: Metadata consists of entries, each of which includes a key and a value.
  * orderReference `string`: The order reference to link multiple partial payments.
  * paResponse **required** `string`: Payment authorisation response returned by the card issuer. The `paResponse` field holds the PaRes value received from the card issuer.
  * recurring [Recurring](#recurring)
  * recurringProcessingModel `string` (values: CardOnFile, Subscription): Defines a recurring payment type.
  * reference **required** `string`: The reference to uniquely identify a payment. This reference is used in all communication with you about the payment status. We recommend using a unique value per payment; however, it is not a requirement.
  * selectedBrand `string`: Some payment methods require defining a value for this field to specify how to process the transaction.
  * selectedRecurringDetailReference `string`: The `recurringDetailReference` you want to use for this payment. The value `LATEST` can be used to select the most recently stored recurring detail.
  * sessionId `string`: A session ID used to identify a payment session.
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
  * totalsGroup `string`: The reference value to aggregate sales totals in reporting. When not specified, the store field is used (if available).

### PaymentResult
* PaymentResult `object`
  * additionalData `object`: This field contains additional data, which may be required to return in a particular payment response. To choose data fields to be returned, go to **Customer Area** > **Settings** > **API and Response**.
  * authCode `string`: Authorisation code:
  * dccAmount [Amount](#amount)
  * dccSignature `string`: Cryptographic signature used to verify `dccQuote`.
  * fraudResult [FraudResult](#fraudresult)
  * issuerUrl `string`: The URL to direct the shopper to.
  * md `string`: The payment session.
  * paRequest `string`: The 3D request data for the issuer.
  * pspReference `string`: Adyen's 16-digit unique reference associated with the transaction/the request. This value is globally unique; quote it when communicating with us about this request.
  * refusalReason `string`: If the payment's authorisation is refused or an error occurs during authorisation, this field holds Adyen's mapped reason for the refusal or a description of the error.
  * resultCode `string` (values: Authorised, PartiallyAuthorised, Refused, Error, Cancelled, Received, RedirectShopper): The result of the payment.

### Recurring
* Recurring `object`
  * contract `string` (values: ONECLICK, RECURRING, PAYOUT): The type of recurring contract to be used.
  * recurringDetailName `string`: A descriptive name for this detail.
  * tokenService `string` (values: VISATOKENSERVICE): The name of the token service.

### ThreeDSecureData
* ThreeDSecureData `object`
  * authenticationResponse `string` (values: Y, N, U, A): The authentication response if the shopper was redirected.
  * cavv `string`: The cardholder authentication value (base64 encoded, 20 bytes in a decoded form).
  * cavvAlgorithm `string`: The CAVV algorithm used.
  * directoryResponse `string` (values: Y, N, U, E): The enrollment response from the 3D directory server.
  * eci `string`: The electronic commerce indicator.
  * xid `string`: The transaction identifier (base64 encoded, 20 bytes in a decoded form).


