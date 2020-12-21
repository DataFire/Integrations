# @datafire/adyen_binlookupservice

Client library for Adyen BinLookup API

## Installation and Usage
```bash
npm install --save @datafire/adyen_binlookupservice
```
```js
let adyen_binlookupservice = require('@datafire/adyen_binlookupservice').create({
  ApiKeyAuth: "",
  username: "",
  password: ""
});

.then(data => {
  console.log(data);
});
```

## Description

The BIN Lookup API provides endpoints for retrieving information, such as cost estimates, and 3D Secure supported version based on a given BIN.

## Actions

### get3dsAvailability.post
Verifies whether 3D Secure is available for the specified BIN or card brand. For 3D Secure 2, this endpoint also returns device fingerprinting keys.

For more information, refer to [3D Secure 2](https://docs.adyen.com/checkout/3d-secure/native-3ds2).


```js
adyen_binlookupservice.get3dsAvailability.post({}, context)
```

#### Input
* input `object`
  * body [ThreeDSAvailabilityRequest](#threedsavailabilityrequest)

#### Output
* output [ThreeDSAvailabilityResponse](#threedsavailabilityresponse)

### getCostEstimate.post
Use the Adyen Cost Estimation API to pre-calculate interchange and scheme fee costs. Knowing these costs prior actual payment authorisation gives you an opportunity to charge those costs to the cardholder, if necessary.

To retrieve this information, make the call to the `/getCostEstimate` endpoint. The response to this call contains the amount of the interchange and scheme fees charged by the network for this transaction, and also which surcharging policy is possible (based on current regulations).

> Since not all information is known in advance (for example, if the cardholder will successfully authenticate via 3D Secure or if you also plan to provide additional Level 2/3 data), the returned amounts are based on a set of assumption criteria you define in the `assumptions` parameter.


```js
adyen_binlookupservice.getCostEstimate.post({}, context)
```

#### Input
* input `object`
  * body [CostEstimateRequest](#costestimaterequest)

#### Output
* output [CostEstimateResponse](#costestimateresponse)



## Definitions

### Amount
* Amount `object`
  * currency **required** `string`: The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes).
  * value **required** `integer`: The payable amount that can be charged for the transaction.

### BinDetail
* BinDetail `object`
  * issuerCountry `string`: The country where the card was issued.

### CardBin
* CardBin `object`
  * bin `string`: The first 6 digit of the card number. Enable this field via merchant account settings.
  * commercial `boolean`: If true, it indicates a commercial card. Enable this field via merchant account settings.
  * fundingSource `string`: The card funding source. Valid values are:
  * fundsAvailability `string`: Indicates availability of funds.
  * issuingBank `string`: The issuing bank of the card.
  * issuingCountry `string`: The country where the card was issued from.
  * issuingCurrency `string`: The currency of the card.
  * paymentMethod `string`: The payment method associated with the card (e.g. visa, mc, or amex).
  * payoutEligible `string`: Indicates whether a payout is eligible or not for this card.
  * summary `string`: The last four digits of the card number.

### CostEstimateAssumptions
* CostEstimateAssumptions `object`
  * assume3DSecureAuthenticated `boolean`: If true, the cardholder is expected to successfully authorise via 3D Secure.
  * assumeLevel3Data `boolean`: If true, the transaction is expected to have valid Level 3 data.
  * installments `integer`: If not zero, the number of installments.

### CostEstimateRequest
* CostEstimateRequest `object`
  * amount **required** [Amount](#amount)
  * assumptions [CostEstimateAssumptions](#costestimateassumptions)
  * cardNumber `string`: The card number (4-19 characters) for PCI compliant use cases. Do not use any separators.
  * encryptedCard `string`
  * encryptedCardNumber `string`: Encrypted data that stores card information for non PCI-compliant use cases. The encrypted data must be created with the Checkout Card Component or Secured Fields Component, and must contain the `encryptedCardNumber` field.
  * merchantAccount **required** `string`: The merchant account identifier you want to process the (transaction) request with.
  * merchantDetails [MerchantDetails](#merchantdetails)
  * recurring [Recurring](#recurring)
  * selectedRecurringDetailReference `string`: The `recurringDetailReference` you want to use for this cost estimate. The value `LATEST` can be used to select the most recently stored recurring detail.
  * shopperInteraction `string` (values: Ecommerce, ContAuth, Moto, POS): Specifies the sales channel, through which the shopper gives their card details, and whether the shopper is a returning customer.
  * shopperReference `string`: The shopper's reference to uniquely identify this shopper (e.g. user ID or account ID).

### CostEstimateResponse
* CostEstimateResponse `object`
  * cardBin [CardBin](#cardbin)
  * costEstimateAmount [Amount](#amount)
  * resultCode `string`: The result of the cost estimation.
  * surchargeType `string`: Indicates the way the charges can be passed on to the cardholder. The following values are possible:

### DSPublicKeyDetail
* DSPublicKeyDetail `object`
  * brand `string`: Card brand.
  * directoryServerId `string`: Directory Server (DS) identifier.
  * publicKey `string`: Public key. The 3D Secure 2 SDK encrypts the device information by using the DS public key.

### MerchantDetails
* MerchantDetails `object`
  * countryCode `string`: 2-letter ISO 3166 country code of the card acceptor location.
  * enrolledIn3DSecure `boolean`: If true, indicates that the merchant is enrolled in 3D Secure for the card network.
  * mcc `string`: The merchant category code (MCC) is a four-digit number which relates to a particular market segment. This code reflects the predominant activity that is conducted by the merchant.

### Recurring
* Recurring `object`
  * contract `string` (values: ONECLICK, RECURRING, PAYOUT): The type of recurring contract to be used.
  * recurringDetailName `string`: A descriptive name for this detail.
  * recurringExpiry `string`: Date after which no further authorisations shall be performed. Only for 3D Secure 2.
  * recurringFrequency `string`: Minimum number of days between authorisations. Only for 3D Secure 2.
  * tokenService `string` (values: VISATOKENSERVICE, MCTOKENSERVICE): The name of the token service.

### ThreeDS2CardRangeDetail
* ThreeDS2CardRangeDetail `object`
  * brandCode `string`: Card brand.
  * endRange `string`: BIN end range.
  * startRange `string`: BIN start range.
  * threeDS2Version `string`: 3D Secure protocol version.
  * threeDSMethodURL `string`: In a 3D Secure 2 browser-based flow, this is the URL where you should send the device fingerprint to.

### ThreeDSAvailabilityRequest
* ThreeDSAvailabilityRequest `object`
  * additionalData `object`: This field contains additional data, which may be required for a particular request.
  * brands `array`: List of brands.
    * items `string`
  * cardNumber `string`: Card number or BIN.
  * merchantAccount **required** `string`: The merchant account identifier.
  * recurringDetailReference `string`: A recurring detail reference corresponding to a card.
  * shopperReference `string`: The shopper's reference to uniquely identify this shopper (e.g. user ID or account ID).

### ThreeDSAvailabilityResponse
* ThreeDSAvailabilityResponse `object`
  * binDetails [BinDetail](#bindetail)
  * dsPublicKeys `array`: List of Directory Server (DS) public keys.
    * items [DSPublicKeyDetail](#dspublickeydetail)
  * threeDS1Supported `boolean`: Indicator if 3D Secure 1 is supported.
  * threeDS2CardRangeDetails `array`: List of brand and card range pairs.
    * items [ThreeDS2CardRangeDetail](#threeds2cardrangedetail)
  * threeDS2supported `boolean`: Indicator if 3D Secure 2 is supported.


