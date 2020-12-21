# @datafire/adyen_checkoutservice

Client library for Adyen Checkout API

## Installation and Usage
```bash
npm install --save @datafire/adyen_checkoutservice
```
```js
let adyen_checkoutservice = require('@datafire/adyen_checkoutservice').create({
  ApiKeyAuth: "",
  username: "",
  password: ""
});

.then(data => {
  console.log(data);
});
```

## Description

Adyen Checkout API provides a simple and flexible way to initiate and authorise online payments. You can use the same integration for payments made with cards (including 3D Secure), mobile wallets, and local payment methods (for example, iDEAL and Sofort).

This API reference provides information on available endpoints and how to interact with them. To learn more about the API, visit [Checkout documentation](https://docs.adyen.com/checkout).

## Authentication
Each request to the Checkout API must be signed with an API key. For this, obtain an API Key from your Customer Area, as described in [How to get the API key](https://docs.adyen.com/user-management/how-to-get-the-api-key). Then set this key to the `X-API-Key` header value, for example:

```
curl
-H "Content-Type: application/json" \
-H "X-API-Key: Your_Checkout_API_key" \
...
```
Note that when going live, you need to generate a new API Key to access the [live endpoints](https://docs.adyen.com/development-resources/live-endpoints).

## Versioning
Checkout API supports versioning of its endpoints through a version suffix in the endpoint URL. This suffix has the following format: "vXX", where XX is the version number.

For example:
```
https://checkout-test.adyen.com/v64/payments
```

## Actions

### orders.post
Creates an order to be used for partial payments. Make a POST `/orders` call before making a `/payments` call when processing payments with different payment methods.


```js
adyen_checkoutservice.orders.post({}, context)
```

#### Input
* input `object`
  * body [CheckoutCreateOrderRequest](#checkoutcreateorderrequest)

#### Output
* output [CheckoutCreateOrderResponse](#checkoutcreateorderresponse)

### orders.cancel.post
Cancels an order. Cancellation of an order results in an automatic rollback of all payments made in the order, either by canceling or refunding the payment, depending on the type of payment method.


```js
adyen_checkoutservice.orders.cancel.post({}, context)
```

#### Input
* input `object`
  * body [CheckoutCancelOrderRequest](#checkoutcancelorderrequest)

#### Output
* output [CheckoutCancelOrderResponse](#checkoutcancelorderresponse)

### originKeys.post
This operation takes the origin domains and returns a JSON object containing the corresponding origin keys for the domains. 
> Instead of using an origin key, consider [switching to a client key](https://docs.adyen.com/user-management/client-side-authentication/migrate-from-origin-key-to-client-key) for your Web Drop-in or Web Component integration. This allows you to use a single key for all origins, add or remove origins without generating a new key, and detect the card type from the number entered in your payment form. 


```js
adyen_checkoutservice.originKeys.post({}, context)
```

#### Input
* input `object`
  * body [CheckoutUtilityRequest](#checkoututilityrequest)

#### Output
* output [CheckoutUtilityResponse](#checkoututilityresponse)

### paymentLinks.post
Creates a payment link to our hosted payment form where shoppers can pay. The list of payment methods presented to the shopper depends on the `currency` and `country` parameters sent in the request.

For more information, refer to [Pay by Link documentation](https://docs.adyen.com/checkout/pay-by-link#create-payment-links-through-api).


```js
adyen_checkoutservice.paymentLinks.post({}, context)
```

#### Input
* input `object`
  * body [CreatePaymentLinkRequest](#createpaymentlinkrequest)

#### Output
* output [PaymentLinkResource](#paymentlinkresource)

### paymentLinks.linkId.get
Retrieves the payment link details using the payment link `id`.


```js
adyen_checkoutservice.paymentLinks.linkId.get({
  "linkId": ""
}, context)
```

#### Input
* input `object`
  * linkId **required** `string`: Unique identifier of the payment link.

#### Output
* output [PaymentLinkResource](#paymentlinkresource)

### paymentLinks.linkId.patch
Updates the status of a payment link. Use this endpoint to [force the expiry of a payment link](https://docs.adyen.com/checkout/pay-by-link#update-payment-link-status).


```js
adyen_checkoutservice.paymentLinks.linkId.patch({
  "linkId": ""
}, context)
```

#### Input
* input `object`
  * linkId **required** `string`: Unique identifier of the payment link.
  * body [UpdatePaymentLinkRequest](#updatepaymentlinkrequest)

#### Output
* output [PaymentLinkResource](#paymentlinkresource)

### paymentMethods.post
Queries the available payment methods for a transaction based on the transaction context (like amount, country, and currency). Besides giving back a list of the available payment methods, the response also returns which input details you need to collect from the shopper (to be submitted to `/payments`).

Although we highly recommend using this endpoint to ensure you are always offering the most up-to-date list of payment methods, its usage is optional. You can, for example, also cache the `/paymentMethods` response and update it once a week.


```js
adyen_checkoutservice.paymentMethods.post({}, context)
```

#### Input
* input `object`
  * body [PaymentMethodsRequest](#paymentmethodsrequest)

#### Output
* output [PaymentMethodsResponse](#paymentmethodsresponse)

### paymentMethods.balance.post
Retrieves the balance remaining on a shopper's gift card. To check a gift card's balance, make a POST `/paymentMethods/balance` call and include the gift card's details inside a `paymentMethod` object.


```js
adyen_checkoutservice.paymentMethods.balance.post({}, context)
```

#### Input
* input `object`
  * body [CheckoutBalanceCheckRequest](#checkoutbalancecheckrequest)

#### Output
* output [CheckoutBalanceCheckResponse](#checkoutbalancecheckresponse)

### paymentSession.post
Provides the data object that can be used to start the Checkout SDK. To set up the payment, pass its amount, currency, and other required parameters. We use this to optimise the payment flow and perform better risk assessment of the transaction.

For more information, refer to [How it works](https://docs.adyen.com/checkout#howitworks).


```js
adyen_checkoutservice.paymentSession.post({}, context)
```

#### Input
* input `object`
  * body [PaymentSetupRequest](#paymentsetuprequest)

#### Output
* output [PaymentSetupResponse](#paymentsetupresponse)

### payments.post
Sends payment parameters (like amount, country, and currency) together with other required input details collected from the shopper. To know more about required parameters for specific payment methods, refer to our [payment method guides](https://docs.adyen.com/payment-methods). The response returns the result of the payment request:
* For some payment methods (e.g. Visa, Mastercard, and SEPA Direct Debits) you'll get a final state in the `resultCode` (e.g. **Authorised** or **Refused**).
* For other payment methods, you'll receive **RedirectShopper** as `resultCode` together with a `redirectUrl`. In this case, the shopper must finalize the payment on the page behind the `redirectUrl`.


```js
adyen_checkoutservice.payments.post({}, context)
```

#### Input
* input `object`
  * body [PaymentRequest](#paymentrequest)

#### Output
* output [PaymentResponse](#paymentresponse)

### payments.details.post
Submits details for a payment created using `/payments`. This step is only needed when no final state has been reached on the `/payments` request (for example for 3D Secure, or when getting redirected back directly from a payment method using an app switch).

The exact details, which need to be sent to this endpoint, are always specified in the response of the associated `/payments` request.

In addition, the endpoint can be used to verify a `payload`, which is returned after coming back from the Checkout SDK or any of the redirect based methods on the Checkout API.


```js
adyen_checkoutservice.payments.details.post({}, context)
```

#### Input
* input `object`
  * body [DetailsRequest](#detailsrequest)

#### Output
* output [PaymentResponse](#paymentresponse)

### payments.result.post
Verifies the payment result using the payload returned from the Checkout SDK.

For more information, refer to [How it works](https://docs.adyen.com/checkout#howitworks).


```js
adyen_checkoutservice.payments.result.post({}, context)
```

#### Input
* input `object`
  * body [PaymentVerificationRequest](#paymentverificationrequest)

#### Output
* output [PaymentVerificationResponse](#paymentverificationresponse)



## Definitions

### AccountInfo
* AccountInfo `object`
  * accountAgeIndicator `string` (values: notApplicable, thisTransaction, lessThan30Days, from30To60Days, moreThan60Days): Indicator for the length of time since this shopper account was created in the merchant's environment.
  * accountChangeDate `string`: Date when the shopper's account was last changed.
  * accountChangeIndicator `string` (values: thisTransaction, lessThan30Days, from30To60Days, moreThan60Days): Indicator for the length of time since the shopper's account was last updated.
  * accountCreationDate `string`: Date when the shopper's account was created.
  * accountType `string` (values: notApplicable, credit, debit): Indicates the type of account. For example, for a multi-account card product.
  * addCardAttemptsDay `integer`: Number of attempts the shopper tried to add a card to their account in the last day.
  * deliveryAddressUsageDate `string`: Date the selected delivery address was first used.
  * deliveryAddressUsageIndicator `string` (values: thisTransaction, lessThan30Days, from30To60Days, moreThan60Days): Indicator for the length of time since this delivery address was first used.
  * homePhone `string`: Shopper's home phone number (including the country code).
  * mobilePhone `string`: Shopper's mobile phone number (including the country code).
  * passwordChangeDate `string`: Date when the shopper last changed their password.
  * passwordChangeIndicator `string` (values: notApplicable, thisTransaction, lessThan30Days, from30To60Days, moreThan60Days): Indicator when the shopper has changed their password.
  * pastTransactionsDay `integer`: Number of all transactions (successful and abandoned) from this shopper in the past 24 hours.
  * pastTransactionsYear `integer`: Number of all transactions (successful and abandoned) from this shopper in the past year.
  * paymentAccountAge `string`: Date this payment method was added to the shopper's account.
  * paymentAccountIndicator `string` (values: notApplicable, thisTransaction, lessThan30Days, from30To60Days, moreThan60Days): Indicator for the length of time since this payment method was added to this shopper's account.
  * purchasesLast6Months `integer`: Number of successful purchases in the last six months.
  * suspiciousActivity `boolean`: Whether suspicious activity was recorded on this account.
  * workPhone `string`: Shopper's work phone number (including the country code).

### AchDetails
* AchDetails `object`
  * bankAccountNumber **required** `string`: The bank account number (without separators).
  * bankLocationId `string`: The bank routing number of the account. The field value is `nil` in most cases.
  * encryptedBankAccountNumber `string`: Encrypted bank account number. The bank account number (without separators).
  * encryptedBankLocationId `string`: Encrypted location id. The bank routing number of the account. The field value is `nil` in most cases.
  * ownerName `string`: The name of the bank account holder.
  * storedPaymentMethodId `string`: This is the `recurringDetailReference` returned in the response when you created the token.
  * type **required** `string`: **ach**

### AdditionalData3DSecure
* AdditionalData3DSecure `object`
  * allow3DS2 `string`: This parameter indicates that you are able to process 3D Secure 2 transactions natively on your payment page. Send this field when you are using `/payments` endpoint with any of our [native 3D Secure 2 solutions](https://docs.adyen.com/checkout/3d-secure/native-3ds2), such as Components or Drop-in. Possible values:
  * executeThreeD `string`: This parameter indicates if you want to perform 3D Secure authentication on a transaction or not. Allowed values:
  * mpiImplementationType `string`: In case of Secure+, this field must be set to **CUPSecurePlus**.
  * scaExemption `string`: Indicates the [exemption type](https://docs.adyen.com/payments-fundamentals/psd2-sca-compliance-and-implementation-guide#specifypreferenceinyourapirequest) that you want to request for the transaction. Possible values:

### AdditionalDataAirline
* AdditionalDataAirline `object`
  * airline.agency_invoice_number `string`: Reference number for the invoice, issued by the agency.
  * airline.agency_plan_name `string`: 2-letter agency plan identifier; alphabetical.
  * airline.airline_code `string`: [IATA](https://www.iata.org/services/pages/codes.aspx) 3-digit accounting code (PAX); numeric. It identifies the carrier.
  * airline.airline_designator_code `string`: [IATA](https://www.iata.org/services/pages/codes.aspx) 2-letter accounting code (PAX); alphabetical. It identifies the carrier.
  * airline.boarding_fee `string`: Chargeable amount for boarding the plane.
  * airline.computerized_reservation_system `string`: The [CRS](https://en.wikipedia.org/wiki/Computer_reservation_system) used to make the reservation and purchase the ticket.
  * airline.customer_reference_number `string`: Reference number; alphanumeric.
  * airline.document_type `string`: Optional 2-digit code; alphanumeric. It identifies the type of product of the transaction. The description of the code may appear on credit card statements.
  * airline.flight_date `string`: Flight departure date. Local time `(HH:mm)` is optional.
  * airline.leg.carrier_code `string`: [IATA](https://www.iata.org/services/pages/codes.aspx) 2-letter accounting code (PAX); alphabetical. It identifies the carrier.
  * airline.leg.class_of_travel `string`: 1-letter travel class identifier; alphabetical. There is no standard; however, the following codes are used rather consistently:
  * airline.leg.date_of_travel `string`: 	
  * airline.leg.depart_airport `string`: Alphabetical identifier of the departure airport.
  * airline.leg.depart_tax `string`: [Departure tax](https://en.wikipedia.org/wiki/Departure_tax). Amount charged by a country to an individual upon their leaving. The transaction amount needs to be represented in minor units according to the [following table](https://docs.adyen.com/development-resources/currency-codes).
  * airline.leg.destination_code `string`: Alphabetical identifier of the destination/arrival airport.
  * airline.leg.fare_base_code `string`: [Fare basis code](https://en.wikipedia.org/wiki/Fare_basis_code); alphanumeric.
  * airline.leg.flight_number `string`: The flight identifier.
  * airline.leg.stop_over_code `string`: 1-letter code that indicates whether the passenger is entitled to make a stopover. Only two types of characters are allowed:
  * airline.passenger.date_of_birth `string`: Date of birth of the passenger.
  * airline.passenger.first_name `string`: Passenger first name/given name.
  * airline.passenger.last_name `string`: Passenger last name/family name.
  * airline.passenger.telephone_number `string`: Telephone number of the passenger, including country code. This is an alphanumeric field that can include the '+' and '-' signs.
  * airline.passenger.traveller_type `string`: Passenger type code (PTC). IATA PTC values are 3-letter alphabetical. Example: ADT, SRC, CNN, INS.
  * airline.passenger_name **required** `string`: Passenger name, initials, and a title.
  * airline.ticket_issue_address `string`: Address of the place/agency that issued the ticket.
  * airline.ticket_number `string`: The ticket's unique identifier.
  * airline.travel_agency_code `string`: IATA number, also ARC number or ARC/IATA number. Unique identifier number for travel agencies.
  * airline.travel_agency_name `string`: The name of the travel agency.

### AdditionalDataCarRental
* AdditionalDataCarRental `object`
  * carRental.checkOutDate `string`: Pick-up date.
  * carRental.customerServiceTollFreeNumber `string`: The customer service phone number of the car rental company.
  * carRental.daysRented `string`: Number of days for which the car is being rented.
  * carRental.fuelCharges `string`: Any fuel charges associated with the rental.
  * carRental.insuranceCharges `string`: Any insurance charges associated with the rental.
  * carRental.locationCity `string`: The city from which the car is rented.
  * carRental.locationCountry `string`: The country from which the car is rented.
  * carRental.locationStateProvince `string`: The state or province from where the car is rented.
  * carRental.noShowIndicator `string`: Indicates if the customer was a "no-show" (neither keeps nor cancels their booking).
  * carRental.oneWayDropOffCharges `string`: Charge associated with not returning a vehicle to the original rental location.
  * carRental.rate `string`: Daily rental rate.
  * carRental.rateIndicator `string`: Specifies whether the given rate is applied daily or weekly.
  * carRental.rentalAgreementNumber `string`: The rental agreement number associated with this car rental.
  * carRental.rentalClassId `string`: Daily rental rate.
  * carRental.renterName `string`: The name of the person renting the car.
  * carRental.returnCity `string`: The city where the car must be returned.
  * carRental.returnCountry `string`: The country where the car must be returned.
  * carRental.returnDate `string`: The last date to return the car by.
  * carRental.returnLocationId `string`: Agency code, phone number, or address abbreviation
  * carRental.returnStateProvince `string`: The state or province where the car must be returned.
  * carRental.taxExemptIndicator `string`: Indicates whether the goods or services were tax-exempt, or tax was not collected.
  * travelEntertainmentAuthData.duration `string`: Number of nights.  This should be included in the auth message.
  * travelEntertainmentAuthData.market `string`: Indicates what market-specific dataset will be submitted or is being submitted. Value should be "A" for Car rental. This should be included in the auth message.

### AdditionalDataCommon
* AdditionalDataCommon `object`
  * RequestedTestErrorResponseCode `string`: Triggers test scenarios that allow to replicate certain communication errors.
  * authorisationType `string`: Flags a card payment request for either pre-authorisation or final authorisation. For more information, refer to [Authorisation types](https://docs.adyen.com/checkout/adjust-authorisation#authorisation-types).
  * customRoutingFlag `string`: Allows you to determine or override the acquirer account that should be used for the transaction.
  * networkTxReference `string`: Allows you to link the transaction to the original or previous one in a subscription/card-on-file chain. This field is required for token-based transactions where Adyen does not tokenize the card.
  * overwriteBrand `string`: Boolean indicator that can be optionally used for performing debit transactions on combo cards (for example, combo cards in Brazil). This is not mandatory but we recommend that you set this to true if you want to use the `selectedBrand` value to specify how to process the transaction.
  * subMerchantCity `string`: This field is required if the transaction is performed by a registered payment facilitator. This field must contain the city of the actual merchant's address.
  * subMerchantCountry `string`: This field is required if the transaction is performed by a registered payment facilitator. This field must contain the three-letter country code of the actual merchant's address.
  * subMerchantID `string`: This field contains an identifier of the actual merchant when a transaction is submitted via a payment facilitator. The payment facilitator must send in this unique ID.
  * subMerchantName `string`: This field is required if the transaction is performed by a registered payment facilitator. This field must contain the name of the actual merchant.
  * subMerchantPostalCode `string`: This field is required if the transaction is performed by a registered payment facilitator. This field must contain the postal code of the actual merchant's address.
  * subMerchantState `string`: This field is required if the transaction is performed by a registered payment facilitator, and if applicable to the country. This field must contain the state code of the actual merchant's address.
  * subMerchantStreet `string`: This field is required if the transaction is performed by a registered payment facilitator. This field must contain the street of the actual merchant's address.
  * subMerchantTaxId `string`: This field is required if the transaction is performed by a registered payment facilitator. This field must contain the tax ID of the actual merchant.

### AdditionalDataLevel23
* AdditionalDataLevel23 `object`
  * enhancedSchemeData.customerReference `string`: Customer code, if supplied by a customer.
  * enhancedSchemeData.destinationCountryCode `string`: Destination country code.
  * enhancedSchemeData.destinationPostalCode `string`: The postal code of a destination address.
  * enhancedSchemeData.destinationStateProvinceCode `string`: Destination state or province code.
  * enhancedSchemeData.dutyAmount `string`: Duty amount, in minor units.
  * enhancedSchemeData.freightAmount `string`: Shipping amount, in minor units.
  * enhancedSchemeData.itemDetailLine[itemNr].commodityCode `string`: Item commodity code.
  * enhancedSchemeData.itemDetailLine[itemNr].description `string`: Item description.
  * enhancedSchemeData.itemDetailLine[itemNr].discountAmount `string`: Discount amount, in minor units.
  * enhancedSchemeData.itemDetailLine[itemNr].productCode `string`: Product code.
  * enhancedSchemeData.itemDetailLine[itemNr].quantity `string`: Quantity, specified as an integer value.
  * enhancedSchemeData.itemDetailLine[itemNr].totalAmount `string`: Total amount, in minor units.
  * enhancedSchemeData.itemDetailLine[itemNr].unitOfMeasure `string`: Item unit of measurement.
  * enhancedSchemeData.itemDetailLine[itemNr].unitPrice `string`: Unit price, specified in [minor units](https://docs.adyen.com/development-resources/currency-codes).
  * enhancedSchemeData.orderDate `string`: Order date.
  * enhancedSchemeData.shipFromPostalCode `string`: The postal code of a "ship-from" address.
  * enhancedSchemeData.totalTaxAmount `string`: Total tax amount, in minor units.

### AdditionalDataLodging
* AdditionalDataLodging `object`
  * lodging.checkInDate `string`: The arrival date.
  * lodging.checkOutDate `string`: The departure date.
  * lodging.customerServiceTollFreeNumber `string`: The toll free phone number for the hotel/lodgings.
  * lodging.fireSafetyActIndicator `string`: Identifies that the facility complies with the Hotel and Motel Fire Safety Act of 1990. Values can be: 'Y' or 'N'.
  * lodging.folioCashAdvances `string`: The folio cash advances.
  * lodging.folioNumber `string`: Card acceptor’s internal invoice or billing ID reference number.
  * lodging.foodBeverageCharges `string`: Any charges for food and beverages associated with the booking.
  * lodging.noShowIndicator `string`: Indicates if the customer was a "no-show" (neither keeps nor cancels their booking).
  * lodging.prepaidExpenses `string`: Prepaid expenses for the booking.
  * lodging.propertyPhoneNumber `string`: Identifies specific lodging property location by its local phone number.
  * lodging.room1.numberOfNights `string`: Total number of nights the room will be rented.
  * lodging.room1.rate `string`: The rate of the room.
  * lodging.room1.tax `string`: The total amount of tax to be paid.
  * lodging.totalRoomTax `string`: Total room tax amount.
  * lodging.totalTax `string`: Total tax amount.
  * travelEntertainmentAuthData.duration `string`: Number of nights. This should be included in the auth message.
  * travelEntertainmentAuthData.market `string`: Indicates what market-specific dataset will be submitted or is being submitted. Value should be "H" for Hotel. This should be included in the auth message.

### AdditionalDataOpenInvoice
* AdditionalDataOpenInvoice `object`
  * openinvoicedata.merchantData `string`: Holds different merchant data points like product, purchase, customer, and so on. It takes data in a Base64 encoded string.
  * openinvoicedata.numberOfLines `string`: The number of invoice lines included in `openinvoicedata`.
  * openinvoicedataLine[itemNr].currencyCode `string`: The three-character ISO currency code.
  * openinvoicedataLine[itemNr].description `string`: A text description of the product the invoice line refers to.
  * openinvoicedataLine[itemNr].itemAmount `string`: The price for one item in the invoice line, represented in minor units.
  * openinvoicedataLine[itemNr].itemId `string`: A unique id for this item. Required for RatePay if the description of each item is not unique.
  * openinvoicedataLine[itemNr].itemVatAmount `string`: The VAT due for one item in the invoice line, represented in minor units.
  * openinvoicedataLine[itemNr].itemVatPercentage `string`: The VAT percentage for one item in the invoice line, represented in minor units.
  * openinvoicedataLine[itemNr].numberOfItems `string`: The number of units purchased of a specific product.
  * openinvoicedataLine[itemNr].vatCategory `string`: Required for AfterPay. The country-specific VAT category a product falls under.

### AdditionalDataOpi
* AdditionalDataOpi `object`
  * opi.includeTransToken `string`: Optional boolean indicator. Set to **true** if you want an ecommerce transaction to return an `opi.transToken` as additional data in the response.

### AdditionalDataRatepay
* AdditionalDataRatepay `object`
  * ratepay.installmentAmount `string`: Amount the customer has to pay each month.
  * ratepay.interestRate `string`: Interest rate of this installment.
  * ratepay.lastInstallmentAmount `string`: Amount of the last installment.
  * ratepay.paymentFirstday `string`: Calendar day of the first payment.
  * ratepaydata.deliveryDate `string`: Date the merchant delivered the goods to the customer.
  * ratepaydata.dueDate `string`: Date by which the customer must settle the payment.
  * ratepaydata.invoiceDate `string`: Invoice date, defined by the merchant. If not included, the invoice date is set to the delivery date.
  * ratepaydata.invoiceId `string`: Identification name or number for the invoice, defined by the merchant.

### AdditionalDataRetry
* AdditionalDataRetry `object`
  * retry.chainAttemptNumber `string`: The number of times the transaction (not order) has been retried between different payment service providers. For instance, the `chainAttemptNumber` set to 2 means that this transaction has been recently tried on another provider before being sent to Adyen.
  * retry.orderAttemptNumber `string`: The index of the attempt to bill a particular order, which is identified by the `merchantOrderReference` field. For example, if a recurring transaction fails and is retried one day later, then the order number for these attempts would be 1 and 2, respectively.
  * retry.skipRetry `string`: The Boolean value indicating whether Adyen should skip or retry this transaction, if possible.

### AdditionalDataRisk
* AdditionalDataRisk `object`
  * riskdata.[customFieldName] `string`: The data for your custom risk field. For more information, refer to [Create custom risk fields](https://docs.adyen.com/risk-management/configure-custom-risk-rules#step-1-create-custom-risk-fields).
  * riskdata.basket.item[itemNr].amountPerItem `string`: The price of item in the basket, represented in [minor units](https://docs.adyen.com/development-resources/currency-codes).
  * riskdata.basket.item[itemNr].brand `string`: Brand of the item.
  * riskdata.basket.item[itemNr].category `string`: Category of the item.
  * riskdata.basket.item[itemNr].color `string`: Color of the item.
  * riskdata.basket.item[itemNr].currency `string`: The three-character [ISO currency code](https://en.wikipedia.org/wiki/ISO_4217).
  * riskdata.basket.item[itemNr].itemID `string`: ID of the item.
  * riskdata.basket.item[itemNr].manufacturer `string`: Manufacturer of the item.
  * riskdata.basket.item[itemNr].productTitle `string`: A text description of the product the invoice line refers to.
  * riskdata.basket.item[itemNr].quantity `string`: Quantity of the item purchased.
  * riskdata.basket.item[itemNr].receiverEmail `string`: Email associated with the given product in the basket (usually in electronic gift cards).
  * riskdata.basket.item[itemNr].size `string`: Size of the item.
  * riskdata.basket.item[itemNr].sku `string`: [Stock keeping unit](https://en.wikipedia.org/wiki/Stock_keeping_unit).
  * riskdata.basket.item[itemNr].upc `string`: [Universal Product Code](https://en.wikipedia.org/wiki/Universal_Product_Code).
  * riskdata.promotions.promotion[itemNr].promotionCode `string`: Code of the promotion.
  * riskdata.promotions.promotion[itemNr].promotionDiscountAmount `string`: The discount amount of the promotion, represented in [minor units](https://docs.adyen.com/development-resources/currency-codes).
  * riskdata.promotions.promotion[itemNr].promotionDiscountCurrency `string`: The three-character [ISO currency code](https://en.wikipedia.org/wiki/ISO_4217).
  * riskdata.promotions.promotion[itemNr].promotionDiscountPercentage `string`: Promotion's percentage discount. It is represented in percentage value and there is no need to include the '%' sign.
  * riskdata.promotions.promotion[itemNr].promotionName `string`: Name of the promotion.

### AdditionalDataRiskStandalone
* AdditionalDataRiskStandalone `object`
  * PayPal.CountryCode `string`: Shopper's country of residence in the form of ISO standard 3166 2-character country codes.
  * PayPal.EmailId `string`: Shopper's email.
  * PayPal.FirstName `string`: Shopper's first name.
  * PayPal.LastName `string`: Shopper's last name.
  * PayPal.PayerId `string`: Unique PayPal Customer Account identification number. Character length and limitations: 13 single-byte alphanumeric characters.
  * PayPal.Phone `string`: Shopper's phone number.
  * PayPal.ProtectionEligibility `string`: Allowed values:
  * PayPal.TransactionId `string`: Unique transaction ID of the payment.
  * avsResultRaw `string`: Raw AVS result received from the acquirer, where available. Example: D
  * bin `string`: The Bank Identification Number of a credit card, which is the first six digits of a card number. Required for [tokenized card request](https://docs.adyen.com/risk-management/standalone-risk#tokenised-pan-request).
  * cvcResultRaw `string`: Raw CVC result received from the acquirer, where available. Example: 1
  * riskToken `string`: Unique identifier or token for the shopper's card details.
  * threeDAuthenticated `string`: A Boolean value indicating whether 3DS authentication was completed on this payment. Example: true
  * threeDOffered `string`: A Boolean value indicating whether 3DS was offered for this payment. Example: true
  * tokenDataType `string`: Required for PayPal payments only. The only supported value is: **paypal**.

### AdditionalDataTemporaryServices
* AdditionalDataTemporaryServices `object`
  * enhancedSchemeData.customerReference `string`: Customer code, if supplied by a customer.
  * enhancedSchemeData.employeeName `string`: Name or ID associated with the individual working in a temporary capacity.
  * enhancedSchemeData.jobDescription `string`: Description of the job or task of the individual working in a temporary capacity.
  * enhancedSchemeData.regularHoursRate `string`: Amount paid per regular hours worked, minor units.
  * enhancedSchemeData.regularHoursWorked `string`: Amount of time worked during a normal operation for the task or job.
  * enhancedSchemeData.requestName `string`: Name of the individual requesting temporary services.
  * enhancedSchemeData.tempStartDate `string`: Date for the beginning of the pay period.
  * enhancedSchemeData.tempWeekEnding `string`: Date of the end of the billing cycle.
  * enhancedSchemeData.totalTaxAmount `string`: Total tax amount, in minor units. For example, 2000 means USD 20.00

### AdditionalDataWallets
* AdditionalDataWallets `object`
  * androidpay.token `string`: The Android Pay token retrieved from the SDK.
  * masterpass.transactionId `string`: The Mastercard Masterpass Transaction ID retrieved from the SDK.
  * payment.token `string`: The Apple Pay token retrieved from the SDK.
  * paywithgoogle.token `string`: The Google Pay token retrieved from the SDK.
  * samsungpay.token `string`: The Samsung Pay token retrieved from the SDK.
  * visacheckout.callId `string`: The Visa Checkout Call ID retrieved from the SDK.

### Address
* Address `object`
  * city **required** `string`: The name of the city.
  * country **required** `string`: The two-character country code as defined in ISO-3166-1 alpha-2. For example, **US**.
  * houseNumberOrName **required** `string`: The number or name of the house.
  * postalCode **required** `string`: A maximum of five digits for an address in the US, or a maximum of ten characters for an address in all other countries.
  * stateOrProvince `string`: State or province codes as defined in ISO 3166-2. For example, **CA** in the US or **ON** in Canada.
  * street **required** `string`: The name of the street.

### AmazonPayDetails
* AmazonPayDetails `object`
  * amazonPayToken `string`
  * checkoutSessionId `string`
  * type **required** `string`: **amazonpay**

### Amount
* Amount `object`
  * currency **required** `string`: The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes).
  * value **required** `integer`: The amount of the transaction, in [minor units](https://docs.adyen.com/development-resources/currency-codes).

### AndroidPayDetails
* AndroidPayDetails `object`
  * androidPayToken **required** `string`
  * type **required** `string`: **androidpay**

### ApplePayDetails
* ApplePayDetails `object`
  * applePayToken **required** `string`
  * fundingSource `string` (values: credit, debit)
  * storedPaymentMethodId `string`: This is the `recurringDetailReference` returned in the response when you created the token.
  * type **required** `string`: **applepay**

### ApplicationInfo
* ApplicationInfo `object`
  * adyenLibrary [CommonField](#commonfield)
  * adyenPaymentSource [CommonField](#commonfield)
  * externalPlatform [ExternalPlatform](#externalplatform)
  * merchantApplication [CommonField](#commonfield)
  * merchantDevice [MerchantDevice](#merchantdevice)
  * shopperInteractionDevice [ShopperInteractionDevice](#shopperinteractiondevice)

### Avs
* Avs `object`
  * addressEditable `boolean`: Indicates whether the shopper is allowed to modify the billing address for the current payment request.
  * enabled `string` (values: yes, no, automatic): Specifies whether the shopper should enter their billing address during checkout.

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

### BillDeskOnlineDetails
* BillDeskOnlineDetails `object`
  * issuer **required** `string`: The issuer id of the shopper's selected bank.
  * type **required** `string`: **billdesk_online**

### BillDeskWalletDetails
* BillDeskWalletDetails `object`
  * issuer **required** `string`: The issuer id of the shopper's selected bank.
  * type **required** `string`: **billdesk_wallet**

### BlikDetails
* BlikDetails `object`
  * blikCode `string`: BLIK code consisting of 6 digits.
  * type **required** `string`: **blik**

### BrowserInfo
* BrowserInfo `object`
  * acceptHeader **required** `string`: The accept header value of the shopper's browser.
  * colorDepth **required** `integer`: The color depth of the shopper's browser in bits per pixel. This should be obtained by using the browser's `screen.colorDepth` property. Accepted values: 1, 4, 8, 15, 16, 24, 30, 32 or 48 bit color depth.
  * javaEnabled **required** `boolean`: Boolean value indicating if the shopper's browser is able to execute Java.
  * javaScriptEnabled `boolean`: Boolean value indicating if the shopper's browser is able to execute JavaScript. A default 'true' value is assumed if the field is not present.
  * language **required** `string`: The `navigator.language` value of the shopper's browser (as defined in IETF BCP 47).
  * screenHeight **required** `integer`: The total height of the shopper's device screen in pixels.
  * screenWidth **required** `integer`: The total width of the shopper's device screen in pixels.
  * timeZoneOffset **required** `integer`: Time difference between UTC time and the shopper's browser local time, in minutes.
  * userAgent **required** `string`: The user agent value of the shopper's browser.

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

### CardDetails
* CardDetails `object`
  * cupsecureplus.smscode `string`
  * cvc `string`
  * encryptedCardNumber **required** `string`
  * encryptedExpiryMonth **required** `string`
  * encryptedExpiryYear **required** `string`
  * expiryMonth `string`
  * expiryYear `string`
  * fundingSource `string` (values: credit, debit)
  * holderName `string`
  * number `string`
  * storedPaymentMethodId `string`: This is the `recurringDetailReference` returned in the response when you created the token.
  * type **required** `string`: **scheme**

### CheckoutAwaitAction
* CheckoutAwaitAction `object`
  * paymentData `string`: When non-empty, contains a value that you must submit to the `/payments/details` endpoint. In some cases, required for polling.
  * paymentMethodType `string`: Specifies the payment method.
  * url `string`: Specifies the URL to redirect to.

### CheckoutBalanceCheckRequest
* CheckoutBalanceCheckRequest `object`
  * accountInfo [AccountInfo](#accountinfo)
  * additionalAmount [Amount](#amount)
  * amount **required** [Amount](#amount)
  * applicationInfo [ApplicationInfo](#applicationinfo)
  * billingAddress [Address](#address)
  * browserInfo [BrowserInfo](#browserinfo)
  * captureDelayHours `integer`: The delay between the authorisation and scheduled auto-capture, specified in hours.
  * dateOfBirth `string`: The shopper's date of birth.
  * dccQuote [ForexQuote](#forexquote)
  * deliveryAddress [Address](#address)
  * deliveryDate `string`: The date and time the purchased goods should be delivered.
  * deviceFingerprint `string`: A string containing the shopper's device fingerprint. For more information, refer to [Device fingerprinting](https://docs.adyen.com/risk-management/device-fingerprinting).
  * enableRealTimeUpdate `boolean`: Choose if a specific transaction should use the Real-time Account Updater, regardless of other settings.
  * fraudOffset `integer`: An integer value that is added to the normal fraud score. The value can be either positive or negative.
  * installments [Installments](#installments)
  * mcc `string`: The [merchant category code](https://en.wikipedia.org/wiki/Merchant_category_code) (MCC) is a four-digit number, which relates to a particular market segment. This code reflects the predominant activity that is conducted by the merchant.
  * merchantAccount **required** `string`: The merchant account identifier, with which you want to process the transaction.
  * merchantOrderReference `string`: This reference allows linking multiple transactions to each other for reporting purposes (i.e. order auth-rate). The reference should be unique per billing cycle.
  * merchantRiskIndicator [MerchantRiskIndicator](#merchantriskindicator)
  * metadata `object`: Metadata consists of entries, each of which includes a key and a value.
  * orderReference `string`: When you are doing multiple partial (gift card) payments, this is the `pspReference` of the first payment. We use this to link the multiple payments to each other. As your own reference for linking multiple payments, use the `merchantOrderReference`instead.
  * paymentMethod **required** `object`: The collection that contains the type of the payment method and its specific information.
  * recurring [Recurring](#recurring)
  * recurringProcessingModel `string` (values: CardOnFile, Subscription, UnscheduledCardOnFile): Defines a recurring payment type.
  * reference **required** `string`: The reference to uniquely identify a payment. This reference is used in all communication with you about the payment status. We recommend using a unique value per payment; however, it is not a requirement.
  * selectedBrand `string`: Some payment methods require defining a value for this field to specify how to process the transaction.
  * selectedRecurringDetailReference `string`: The `recurringDetailReference` you want to use for this payment. The value `LATEST` can be used to select the most recently stored recurring detail.
  * sessionId `string`: A session ID used to identify a payment session.
  * shopperEmail `string`: The shopper's email address. We recommend that you provide this data, as it is used in velocity fraud checks.
  * shopperIP `string`: The shopper's IP address. In general, we recommend that you provide this data, as it is used in a number of risk checks (for instance, number of payment attempts or location-based checks).
  * shopperInteraction `string` (values: Ecommerce, ContAuth, Moto, POS): Specifies the sales channel, through which the shopper gives their card details, and whether the shopper is a returning customer.
  * shopperLocale `string`: The combination of a language code and a country code to specify the language to be used in the payment.
  * shopperName [Name](#name)
  * shopperReference `string`: The shopper's reference to uniquely identify this shopper (e.g. user ID or account ID).
  * shopperStatement `string`: The text to be shown on the shopper's bank statement. To enable this field, contact our [Support Team](https://support.adyen.com/hc/en-us/requests/new).
  * socialSecurityNumber `string`: The shopper's social security number.
  * splits `array`: Information on how the payment should be split between accounts when using [Adyen for Platforms](https://docs.adyen.com/platforms/processing-payments#providing-split-information).
    * items [Split](#split)
  * store `string`: The physical store, for which this payment is processed.
  * telephoneNumber `string`: The shopper's telephone number.
  * threeDS2RequestData [ThreeDS2RequestData](#threeds2requestdata)
  * threeDSAuthenticationOnly `boolean`: If set to true, you will only perform the [3D Secure 2 authentication](https://docs.adyen.com/checkout/3d-secure/other-3ds-flows/authentication-only), and not the payment authorisation.
  * totalsGroup `string`: The reference value to aggregate sales totals in reporting. When not specified, the store field is used (if available).
  * trustedShopper `boolean`: Set to true if the payment should be routed to a trusted MID.

### CheckoutBalanceCheckResponse
* CheckoutBalanceCheckResponse `object`
  * balance **required** [Amount](#amount)
  * fraudResult [FraudResult](#fraudresult)
  * pspReference `string`: Adyen's 16-character string reference associated with the transaction/request. This value is globally unique; quote it when communicating with us about this request.
  * refusalReason `string`: If the payment's authorisation is refused or an error occurs during authorisation, this field holds Adyen's mapped reason for the refusal or a description of the error. When a transaction fails, the authorisation response includes `resultCode` and `refusalReason` values.
  * resultCode `string` (values: AuthenticationFinished, Authorised, Cancelled, ChallengeShopper, Error, IdentifyShopper, Pending, PresentToShopper, Received, RedirectShopper, Refused): The result of the payment. For more information, see [Result codes](https://docs.adyen.com/checkout/payment-result-codes).

### CheckoutCancelOrderRequest
* CheckoutCancelOrderRequest `object`
  * merchantAccount **required** `string`: The merchant account identifier that orderData belongs to.
  * order **required** [CheckoutOrder](#checkoutorder)

### CheckoutCancelOrderResponse
* CheckoutCancelOrderResponse `object`
  * pspReference **required** `string`: A unique reference of the cancellation request.
  * resultCode **required** `string`: The result of the cancellation request.

### CheckoutCreateOrderRequest
* CheckoutCreateOrderRequest `object`
  * amount **required** [Amount](#amount)
  * expiresAt `string`: The date that order expires; e.g. 2019-03-23T12:25:28Z. If not provided, the default expiry duration is 1 day.
  * merchantAccount **required** `string`: The merchant account identifier, with which you want to process the order.
  * reference `string`: A custom reference identifying the order.

### CheckoutCreateOrderResponse
* CheckoutCreateOrderResponse `object`
  * expiresAt **required** `string`: The date that the order will expire.
  * fraudResult [FraudResult](#fraudresult)
  * orderData **required** `string`: The encrypted data that will be used by merchant for adding payments to the order.
  * pspReference `string`: Adyen's 16-character string reference associated with the transaction/request. This value is globally unique; quote it when communicating with us about this request.
  * refusalReason `string`: If the payment's authorisation is refused or an error occurs during authorisation, this field holds Adyen's mapped reason for the refusal or a description of the error. When a transaction fails, the authorisation response includes `resultCode` and `refusalReason` values.
  * remainingAmount **required** [Amount](#amount)
  * resultCode `string` (values: AuthenticationFinished, Authorised, Cancelled, ChallengeShopper, Error, IdentifyShopper, Pending, PresentToShopper, Received, RedirectShopper, Refused): The result of the payment. For more information, see [Result codes](https://docs.adyen.com/checkout/payment-result-codes).

### CheckoutDonationAction
* CheckoutDonationAction `object`
  * paymentData `string`: When non-empty, contains a value that you must submit to the `/payments/details` endpoint. In some cases, required for polling.
  * paymentMethodType `string`: Specifies the payment method.
  * url `string`: Specifies the URL to redirect to.

### CheckoutOneTimePasscodeAction
* CheckoutOneTimePasscodeAction `object`
  * paymentData `string`: When non-empty, contains a value that you must submit to the `/payments/details` endpoint. In some cases, required for polling.
  * paymentMethodType `string`: Specifies the payment method.
  * redirect [Redirect](#redirect)
  * resendInterval `integer`: The interval in second between OTP resend.
  * resendMaxAttempts `integer`: The maximum number of OTP resend attempts.
  * resendUrl `string`: The URL, to which you make POST request to trigger OTP resend.
  * url `string`: Specifies the URL to redirect to.

### CheckoutOrder
* CheckoutOrder `object`
  * orderData **required** `string`: The encrypted order data.
  * pspReference **required** `string`: The `pspReference` that belongs to the order.

### CheckoutOrderResponse
* CheckoutOrderResponse `object`
  * expiresAt `string`: The expiry date for the order.
  * orderData `string`: The encrypted order data.
  * pspReference **required** `string`: The `pspReference` that belongs to the order.
  * reference `string`: The merchant reference for the order.
  * remainingAmount [Amount](#amount)

### CheckoutQrCodeAction
* CheckoutQrCodeAction `object`
  * paymentData `string`: When non-empty, contains a value that you must submit to the `/payments/details` endpoint. In some cases, required for polling.
  * paymentMethodType `string`: Specifies the payment method.
  * qrCodeData `string`: The contents of the QR code as a UTF8 string.
  * url `string`: Specifies the URL to redirect to.

### CheckoutRedirectAction
* CheckoutRedirectAction `object`
  * data `object`: When the redirect URL must be accessed via POST, use this data to post to the redirect URL.
  * method `string`: Specifies the HTTP method, for example GET or POST.
  * paymentData `string`: When non-empty, contains a value that you must submit to the `/payments/details` endpoint. In some cases, required for polling.
  * paymentMethodType `string`: Specifies the payment method.
  * url `string`: Specifies the URL to redirect to.

### CheckoutSDKAction
* CheckoutSDKAction `object`
  * paymentData `string`: When non-empty, contains a value that you must submit to the `/payments/details` endpoint. In some cases, required for polling.
  * paymentMethodType `string`: Specifies the payment method.
  * sdkData `object`: The data to pass to the SDK.
  * url `string`: Specifies the URL to redirect to.

### CheckoutThreeDS2ChallengeAction
* CheckoutThreeDS2ChallengeAction `object`
  * paymentData `string`: When non-empty, contains a value that you must submit to the `/payments/details` endpoint. In some cases, required for polling.
  * paymentMethodType `string`: Specifies the payment method.
  * token `string`: A token to pass to the 3DS2 Component to get the challenge.
  * url `string`: Specifies the URL to redirect to.

### CheckoutThreeDS2FingerPrintAction
* CheckoutThreeDS2FingerPrintAction `object`
  * paymentData `string`: When non-empty, contains a value that you must submit to the `/payments/details` endpoint. In some cases, required for polling.
  * paymentMethodType `string`: Specifies the payment method.
  * token `string`: A token to pass to the 3DS2 Component to get the fingerprint.
  * url `string`: Specifies the URL to redirect to.

### CheckoutUtilityRequest
* CheckoutUtilityRequest `object`
  * originDomains **required** `array`: The list of origin domains, for which origin keys are requested.
    * items `string`

### CheckoutUtilityResponse
* CheckoutUtilityResponse `object`
  * originKeys `object`: The list of origin keys for all requested domains. For each list item, the key is the domain and the value is the origin key.

### CheckoutVoucherAction
* CheckoutVoucherAction `object`
  * alternativeReference `string`: The voucher alternative reference code.
  * collectionInstitutionNumber `string`: A collection institution number (store number) for Econtext Pay-Easy ATM.
  * downloadUrl `string`: The URL to download the voucher.
  * entity `string`: An entity number of Multibanco.
  * expiresAt `string`: The date time of the voucher expiry.
  * initialAmount [Amount](#amount)
  * instructionsUrl `string`: The URL to the detailed instructions to make payment using the voucher.
  * issuer `string`: The issuer of the voucher.
  * maskedTelephoneNumber `string`: The shopper telephone number (partially masked).
  * merchantName `string`: The merchant name.
  * merchantReference `string`: The merchant reference.
  * paymentData `string`: When non-empty, contains a value that you must submit to the `/payments/details` endpoint. In some cases, required for polling.
  * paymentMethodType `string`: Specifies the payment method.
  * reference `string`: The voucher reference code.
  * shopperEmail `string`: The shopper email.
  * shopperName `string`: The shopper name.
  * surcharge [Amount](#amount)
  * totalAmount [Amount](#amount)
  * url `string`: Specifies the URL to redirect to.

### CommonField
* CommonField `object`
  * name `string`: Name of the field. For example, Name of External Platform.
  * version `string`: Version of the field. For example, Version of External Platform.

### Company
* Company `object`
  * homepage `string`: The company website's home page.
  * name `string`: The company name.
  * registrationNumber `string`: Registration number of the company.
  * registryLocation `string`: Registry location of the company.
  * taxId `string`: Tax ID of the company.
  * type `string`: The company type.

### Configuration
* Configuration `object`
  * avs [Avs](#avs)
  * cardHolderName `string` (values: NONE, OPTIONAL, REQUIRED): Determines whether the cardholder name should be provided or not.
  * installments [Installments](#installments)
  * shopperInput [ShopperInput](#shopperinput)

### CreatePaymentLinkRequest
* CreatePaymentLinkRequest `object`
  * allowedPaymentMethods `array`: List of payments methods to be presented to the shopper. To refer to payment methods, use their `paymentMethod.type` from [Payment methods overview](https://docs.adyen.com/payment-methods).
    * items `string`
  * amount **required** [Amount](#amount)
  * applicationInfo [ApplicationInfo](#applicationinfo)
  * billingAddress [Address](#address)
  * blockedPaymentMethods `array`: List of payments methods to be hidden from the shopper. To refer to payment methods, use their `paymentMethod.type` from [Payment methods overview](https://docs.adyen.com/payment-methods).
    * items `string`
  * countryCode `string`: The shopper's two-letter country code.
  * deliverAt `string`: The date and time the purchased goods should be delivered.
  * deliveryAddress [Address](#address)
  * description `string`: A short description visible on the payment page.
  * expiresAt `string`: The date that the payment link expires, in ISO 8601 format. For example `2019-11-23T12:25:28Z`, or `2020-05-27T20:25:28+08:00`. Maximum expiry date should be 30 days from when the payment link is created. If not provided, the default expiry is set to 24 hours after the payment link is created.
  * lineItems `array`: Price and product information about the purchased items, to be included on the invoice sent to the shopper.
    * items [LineItem](#lineitem)
  * merchantAccount **required** `string`: The merchant account identifier for which the payment link is created.
  * merchantOrderReference `string`: This reference allows linking multiple transactions to each other for reporting purposes (for example, order auth-rate). The reference should be unique per billing cycle.
  * metadata `object`: Metadata consists of entries, each of which includes a key and a value.
  * recurringProcessingModel `string` (values: CardOnFile, Subscription, UnscheduledCardOnFile): Defines a recurring payment type.
  * reference **required** `string`: A reference that is used to uniquely identify the payment in future communications about the payment status.
  * returnUrl `string`: Website URL used for redirection after payment is completed.
  * reusable `boolean`: Indicates whether the payment link can be reused for multiple payments. If not provided, this defaults to **false** which means the link can be used for one successful payment only.
  * shopperEmail `string`: The shopper's email address.
  * shopperLocale `string`: The language to be used in the payment page, specified by a combination of a language and country code. For example, `en-US`.
  * shopperName [Name](#name)
  * shopperReference `string`: A unique identifier for the shopper (for example, user ID or account ID).
  * splits `array`: Information on how the payment should be split between accounts when using [Adyen for Platforms](https://docs.adyen.com/platforms/processing-payments#providing-split-information).
    * items [Split](#split)
  * store `string`: The physical store, for which this payment is processed.
  * storePaymentMethod `boolean`: When this is set to **true** and the `shopperReference` is provided, the payment details will be stored.

### DetailsRequest
* DetailsRequest `object`
  * details **required** [PaymentCompletionDetails](#paymentcompletiondetails)
  * paymentData `string`: The `paymentData` value that you received in the response to the `/payments` call.
  * threeDSAuthenticationOnly `boolean`: Change the `authenticationOnly` indicator originally set in the `/payments` request. Only needs to be set if you want to modify the value set previously.

### DeviceRenderOptions
* DeviceRenderOptions `object`
  * sdkInterface `string` (values: native, html, both): Supported SDK interface types.
  * sdkUiType `array`: UI types supported for displaying specific challenges.
    * items `string` (values: multiSelect, otherHtml, outOfBand, singleSelect, text)

### DokuDetails
* DokuDetails `object`
  * firstName **required** `string`: The shopper's first name.
  * infix `string`
  * lastName **required** `string`: The shopper's last name.
  * ovoId `string`
  * shopperEmail **required** `string`: The shopper's email.
  * type **required** `string` (values: doku_mandiri_va, doku_cimb_va, doku_danamon_va, doku_bni_va, doku_permata_lite_atm, doku_bri_va, doku_bca_va, doku_alfamart, doku_indomaret): **doku**

### DotpayDetails
* DotpayDetails `object`
  * issuer **required** `string`: The Dotpay issuer value of the shopper's selected bank. Set this to an **id** of a Dotpay issuer to preselect it.
  * type **required** `string`: **dotpay**

### DragonpayDetails
* DragonpayDetails `object`
  * issuer **required** `string`: The Dragonpay issuer value of the shopper's selected bank. Set this to an **id** of a Dragonpay issuer to preselect it.
  * shopperEmail `string`: The shopper’s email address.
  * type **required** `string` (values: dragonpay_ebanking, dragonpay_otc_banking, dragonpay_otc_non_banking, dragonpay_otc_philippines): **dragonpay**

### EcontextVoucherDetails
* EcontextVoucherDetails `object`
  * firstName **required** `string`: The shopper's first name.
  * lastName **required** `string`: The shopper's last name.
  * shopperEmail **required** `string`: The shopper's email.
  * telephoneNumber **required** `string`: The shopper's contact number.
  * type **required** `string` (values: econtext_seveneleven, econtext_stores): **econtextvoucher**

### EntercashDetails
* EntercashDetails `object`
  * issuer **required** `string`: The issuer id of the shopper's selected bank.
  * type **required** `string`: **entercash**

### ExternalPlatform
* ExternalPlatform `object`
  * integrator `string`: External platform integrator.
  * name `string`: Name of the field. For example, Name of External Platform.
  * version `string`: Version of the field. For example, Version of External Platform.

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

### FraudCheckResult
* FraudCheckResult `object`
  * accountScore **required** `integer`: The fraud score generated by the risk check.
  * checkId **required** `integer`: The ID of the risk check.
  * name **required** `string`: The name of the risk check.

### FraudResult
* FraudResult `object`
  * accountScore **required** `integer`: The total fraud score generated by the risk checks.
  * results `array`: The result of the individual risk checks.
    * items [FraudCheckResult](#fraudcheckresult)

### GiropayDetails
* GiropayDetails `object`
  * storedPaymentMethodId `string`: This is the `recurringDetailReference` returned in the response when you created the token.
  * type **required** `string`: **giropay**

### GooglePayDetails
* GooglePayDetails `object`
  * fundingSource `string` (values: credit, debit)
  * googlePayCardNetwork **required** `string`
  * googlePayToken **required** `string`
  * storedPaymentMethodId `string`: This is the `recurringDetailReference` returned in the response when you created the token.
  * type **required** `string`: **paywithgoogle**

### IdealDetails
* IdealDetails `object`
  * issuer **required** `string`: The iDEAL issuer value of the shopper's selected bank. Set this to an **id** of an iDEAL issuer to preselect it.
  * storedPaymentMethodId `string`: This is the `recurringDetailReference` returned in the response when you created the token.
  * type **required** `string`: **ideal**

### InputDetail
* InputDetail `object`
  * configuration `object`: Configuration parameters for the required input.
  * details `array`: Input details can also be provided recursively.
    * items [SubInputDetail](#subinputdetail)
  * inputDetails `array`: Input details can also be provided recursively (deprecated).
    * items [SubInputDetail](#subinputdetail)
  * itemSearchUrl `string`: In case of a select, the URL from which to query the items.
  * items `array`: In case of a select, the items to choose from.
    * items [Item](#item)
  * key `string`: The value to provide in the result.
  * optional `boolean`: True if this input value is optional.
  * type `string`: The type of the required input.
  * value `string`: The value can be pre-filled, if available.

### Installments
* Installments `object`
  * plan `string` (values: regular, revolving): Defines the type of installment plan. If not set, defaults to **regular**.
  * value **required** `integer`: Defines the number of installments. Its value needs to be greater than zero.

### Item
* Item `object`
  * id `string`: The value to provide in the result.
  * name `string`: The display name.

### KlarnaDetails
* KlarnaDetails `object`
  * bankAccount `string`
  * billingAddress `string`
  * deliveryAddress `string`
  * installmentConfigurationKey `string`
  * personalDetails `string`
  * separateDeliveryAddress `string`
  * storedPaymentMethodId `string`: This is the `recurringDetailReference` returned in the response when you created the token.
  * token `string`
  * type **required** `string` (values: klarna, klarnapayments, klarnapayments_account, klarnapayments_b2b, klarna_paynow, klarna_account, klarna_b2b): **klarna**

### LianLianPayDetails
* LianLianPayDetails `object`
  * telephoneNumber **required** `string`
  * type **required** `string` (values: lianlianpay_ebanking_enterprise, lianlianpay_ebanking_credit, lianlianpay_ebanking_debit): **lianlianpay**

### LineItem
* LineItem `object`
  * amountExcludingTax `integer`: Item amount excluding the tax, in minor units.
  * amountIncludingTax `integer`: Item amount including the tax, in minor units.
  * description `string`: Description of the line item.
  * id `string`: ID of the line item.
  * quantity `integer`: Number of items.
  * taxAmount `integer`: Tax amount, in minor units.
  * taxCategory `string` (values: High, Low, None, Zero): Required for AfterPay. Tax category: High, Low, None, Zero
  * taxPercentage `integer`: Tax percentage, in minor units.

### MasterpassDetails
* MasterpassDetails `object`
  * fundingSource `string` (values: credit, debit)
  * masterpassTransactionId **required** `string`: The Masterpass transaction ID.
  * type **required** `string`: **masterpass**

### MbwayDetails
* MbwayDetails `object`
  * shopperEmail **required** `string`
  * telephoneNumber **required** `string`
  * type **required** `string`: **mbway**

### MerchantDevice
* MerchantDevice `object`
  * os `string`: Operating system running on the merchant device.
  * osVersion `string`: Version of the operating system on the merchant device.
  * reference `string`: Merchant device reference.

### MerchantRiskIndicator
* MerchantRiskIndicator `object`
  * addressMatch `boolean`: Whether the chosen delivery address is identical to the billing address.
  * deliveryAddressIndicator `string` (values: shipToBillingAddress, shipToVerifiedAddress, shipToNewAddress, shipToStore, digitalGoods, goodsNotShipped, other): Indicator regarding the delivery address.
  * deliveryEmail `string`: The delivery email address (for digital goods).
  * deliveryTimeframe `string` (values: electronicDelivery, sameDayShipping, overnightShipping, twoOrMoreDaysShipping): The estimated delivery time for the shopper to receive the goods.
  * giftCardAmount [Amount](#amount)
  * giftCardCount `integer`: For prepaid or gift card purchase, total count of individual prepaid or gift cards/codes purchased.
  * preOrderDate `string`: For pre-order purchases, the expected date this product will be available to the shopper.
  * preOrderPurchase `boolean`: Indicator for whether this transaction is for pre-ordering a product.
  * reorderItems `boolean`: Indicator for whether the shopper has already purchased the same items in the past.

### MobilePayDetails
* MobilePayDetails `object`
  * type **required** `string`: **mobilepay**

### MolPayDetails
* MolPayDetails `object`
  * issuer **required** `string`
  * type **required** `string` (values: molpay_ebanking_fpx_MY, molpay_ebanking_TH): **molpay**

### Name
* Name `object`
  * firstName **required** `string`: The first name.
  * gender **required** `string` (values: MALE, FEMALE, UNKNOWN): The gender.
  * infix `string`: The name's infix, if applicable.
  * lastName **required** `string`: The last name.

### NexoRouterDetails
* NexoRouterDetails `object`
  * type **required** `string`: **nexorouter**
  * uniqueTerminalId `string`

### OpenInvoiceDetails
* OpenInvoiceDetails `object`
  * bankAccount `string`
  * billingAddress `string`
  * deliveryAddress `string`
  * installmentConfigurationKey `string`
  * personalDetails `string`
  * separateDeliveryAddress `string`
  * storedPaymentMethodId `string`: This is the `recurringDetailReference` returned in the response when you created the token.
  * type **required** `string`: **openinvoice**

### PayPalDetails
* PayPalDetails `object`
  * orderID `string`
  * payerID `string`
  * subtype `string` (values: redirect, sdk): The type of flow to initiate.
  * type **required** `string`: **paypal**

### PayUUpiDetails
* PayUUpiDetails `object`
  * shopperNotificationReference `string`: The `shopperNotificationReference` returned in the response when you requested to notify the shopper. Used for recurring payment only.
  * storedPaymentMethodId `string`: This is the `recurringDetailReference` returned in the response when you created the token.
  * subscriptionDetails `object`: The details to initiate subscription tracntion.
  * type **required** `string`: **payu_IN_upi**
  * virtualPaymentAddress `string`: The virtual payment address for UPI.

### PaymentCompletionDetails
* PaymentCompletionDetails `object`
  * MD `string`
  * PaReq `string`
  * PaRes `string`
  * billingToken `string`
  * cupsecureplus.smscode `string`
  * facilitatorAccessToken `string`
  * oneTimePasscode `string`
  * orderID `string`
  * payerID `string`
  * payload `string`
  * paymentID `string`
  * paymentStatus `string`
  * redirectResult `string`
  * returnUrlQueryString `string`
  * threeds2.challengeResult `string`
  * threeds2.fingerprint `string`

### PaymentDetails
* PaymentDetails `object`
  * type **required** `string`: The payment method type.

### PaymentLinkResource
* PaymentLinkResource `object`
  * allowedPaymentMethods `array`: List of payments methods to be presented to the shopper. To refer to payment methods, use their `paymentMethod.type` from [Payment methods overview](https://docs.adyen.com/payment-methods).
    * items `string`
  * amount **required** [Amount](#amount)
  * applicationInfo [ApplicationInfo](#applicationinfo)
  * billingAddress [Address](#address)
  * blockedPaymentMethods `array`: List of payments methods to be hidden from the shopper. To refer to payment methods, use their `paymentMethod.type` from [Payment methods overview](https://docs.adyen.com/payment-methods).
    * items `string`
  * countryCode `string`: The shopper's two-letter country code.
  * deliverAt `string`: The date and time the purchased goods should be delivered.
  * deliveryAddress [Address](#address)
  * description `string`: A short description visible on the payment page.
  * expiresAt `string`: The date that the payment link expires, in ISO 8601 format. For example `2019-11-23T12:25:28Z`, or `2020-05-27T20:25:28+08:00`. Maximum expiry date should be 30 days from when the payment link is created. If not provided, the default expiry is set to 24 hours after the payment link is created.
  * id **required** `string`: A unique identifier of the payment link.
  * lineItems `array`: Price and product information about the purchased items, to be included on the invoice sent to the shopper.
    * items [LineItem](#lineitem)
  * merchantAccount **required** `string`: The merchant account identifier for which the payment link is created.
  * merchantOrderReference `string`: This reference allows linking multiple transactions to each other for reporting purposes (for example, order auth-rate). The reference should be unique per billing cycle.
  * recurringProcessingModel `string` (values: CardOnFile, Subscription, UnscheduledCardOnFile): Defines a recurring payment type.
  * reference **required** `string`: A reference that is used to uniquely identify the payment in future communications about the payment status.
  * returnUrl `string`: Website URL used for redirection after payment is completed.
  * reusable `boolean`: Indicates whether the payment link can be reused for multiple payments. If not provided, this defaults to **false** which means the link can be used for one successful payment only.
  * shopperEmail `string`: The shopper's email address.
  * shopperLocale `string`: The language to be used in the payment page, specified by a combination of a language and country code. For example, `en-US`.
  * shopperName [Name](#name)
  * shopperReference `string`: A unique identifier for the shopper (for example, user ID or account ID).
  * splits `array`: Information on how the payment should be split between accounts when using [Adyen for Platforms](https://docs.adyen.com/platforms/processing-payments#providing-split-information).
    * items [Split](#split)
  * status **required** `string` (values: active, expired, paid): Status of the payment link. Possible values:
  * store `string`: The physical store, for which this payment is processed.
  * storePaymentMethod `boolean`: When this is set to **true** and the `shopperReference` is provided, the payment details will be stored.
  * url **required** `string`: The URL at which the shopper can complete the payment.

### PaymentMethod
* PaymentMethod `object`
  * brands `array`: List of possible brands. For example: visa, mc.
    * items `string`
  * configuration `object`: The configuration of the payment method.
  * details `array`: All input details to be provided to complete the payment with this payment method.
    * items [InputDetail](#inputdetail)
  * fundingSource `string` (values: credit, debit): The funding source of the payment method.
  * group [PaymentMethodGroup](#paymentmethodgroup)
  * inputDetails `array`: All input details to be provided to complete the payment with this payment method.
    * items [InputDetail](#inputdetail)
  * name `string`: The displayable name of this payment method.
  * paymentMethodData `string`: Echo data required to send in next calls.
  * supportsRecurring `boolean`: Indicates whether this payment method supports tokenization or not.
  * type `string`: The unique payment method code.

### PaymentMethodGroup
* PaymentMethodGroup `object`
  * name `string`: The name of the group.
  * paymentMethodData `string`: Echo data to be used if the payment method is displayed as part of this group.
  * type `string`: The unique code of the group.

### PaymentMethodsGroup
* PaymentMethodsGroup `object`
  * groupType `string`: The type to submit for any payment method in this group.
  * name `string`: The human-readable name of this group.
  * types `array`: The types of payment methods that belong in this group.
    * items `string`

### PaymentMethodsRequest
* PaymentMethodsRequest `object`
  * allowedPaymentMethods `array`: List of payments methods to be presented to the shopper. To refer to payment methods, use their `paymentMethod.type` from [Payment methods overview](https://docs.adyen.com/payment-methods).
    * items `string`
  * amount [Amount](#amount)
  * blockedPaymentMethods `array`: List of payments methods to be hidden from the shopper. To refer to payment methods, use their `paymentMethod.type` from [Payment methods overview](https://docs.adyen.com/payment-methods).
    * items `string`
  * channel `string` (values: iOS, Android, Web): The platform where a payment transaction takes place. This field can be used for filtering out payment methods that are only available on specific platforms. Possible values:
  * countryCode `string`: The shopper's country code.
  * enableRealTimeUpdate `boolean`: Choose if a specific transaction should use the Real-time Account Updater, regardless of other settings.
  * merchantAccount **required** `string`: The merchant account identifier, with which you want to process the transaction.
  * order [CheckoutOrder](#checkoutorder)
  * shopperLocale `string`: The combination of a language code and a country code to specify the language to be used in the payment.
  * shopperReference `string`: The shopper's reference to uniquely identify this shopper (e.g. user ID or account ID).
  * splitCardFundingSources `boolean`: Boolean value indicating whether the card payment method should be split into separate debit and credit options.
  * store `string`: The physical store, for which this payment is processed.

### PaymentMethodsResponse
* PaymentMethodsResponse `object`
  * groups `array`: Groups of payment methods.
    * items [PaymentMethodsGroup](#paymentmethodsgroup)
  * oneClickPaymentMethods `array`: Detailed list of one-click payment methods.
    * items [RecurringDetail](#recurringdetail)
  * paymentMethods `array`: Detailed list of payment methods required to generate payment forms.
    * items [PaymentMethod](#paymentmethod)
  * storedPaymentMethods `array`: List of all stored payment methods.
    * items [StoredPaymentMethod](#storedpaymentmethod)

### PaymentRequest
* PaymentRequest `object`
  * accountInfo [AccountInfo](#accountinfo)
  * amount **required** [Amount](#amount)
  * applicationInfo [ApplicationInfo](#applicationinfo)
  * billingAddress [Address](#address)
  * browserInfo [BrowserInfo](#browserinfo)
  * captureDelayHours `integer`: The delay between the authorisation and scheduled auto-capture, specified in hours.
  * channel `string` (values: iOS, Android, Web): The platform where a payment transaction takes place. This field is optional for filtering out payment methods that are only available on specific platforms. If this value is not set, then we will try to infer it from the `sdkVersion` or `token`.
  * company [Company](#company)
  * conversionId `string`: Conversion ID that corresponds to the Id generated for tracking user payment journey.
  * countryCode `string`: The shopper country.
  * dateOfBirth `string`: The shopper's date of birth.
  * dccQuote [ForexQuote](#forexquote)
  * deliveryAddress [Address](#address)
  * deliveryDate `string`: The date and time the purchased goods should be delivered.
  * deviceFingerprint `string`: A string containing the shopper's device fingerprint. For more information, refer to [Device fingerprinting](https://docs.adyen.com/risk-management/device-fingerprinting).
  * enableOneClick `boolean`: When true and `shopperReference` is provided, the shopper will be asked if the payment details should be stored for future one-click payments.
  * enablePayOut `boolean`: When true and `shopperReference` is provided, the payment details will be tokenized for payouts.
  * enableRealTimeUpdate `boolean`: Choose if a specific transaction should use the Real-time Account Updater, regardless of other settings.
  * enableRecurring `boolean`: When true and `shopperReference` is provided, the payment details will be tokenized for recurring payments.
  * entityType `string` (values: NaturalPerson, CompanyName): The type of the entity the payment is processed for.
  * fraudOffset `integer`: An integer value that is added to the normal fraud score. The value can be either positive or negative.
  * installments [Installments](#installments)
  * lineItems `array`: Price and product information about the purchased items, to be included on the invoice sent to the shopper.
    * items [LineItem](#lineitem)
  * mcc `string`: The [merchant category code](https://en.wikipedia.org/wiki/Merchant_category_code) (MCC) is a four-digit number, which relates to a particular market segment. This code reflects the predominant activity that is conducted by the merchant.
  * merchantAccount **required** `string`: The merchant account identifier, with which you want to process the transaction.
  * merchantOrderReference `string`: This reference allows linking multiple transactions to each other for reporting purposes (i.e. order auth-rate). The reference should be unique per billing cycle.
  * merchantRiskIndicator [MerchantRiskIndicator](#merchantriskindicator)
  * metadata `object`: Metadata consists of entries, each of which includes a key and a value.
  * mpiData [ThreeDSecureData](#threedsecuredata)
  * order [CheckoutOrder](#checkoutorder)
  * orderReference `string`: When you are doing multiple partial (gift card) payments, this is the `pspReference` of the first payment. We use this to link the multiple payments to each other. As your own reference for linking multiple payments, use the `merchantOrderReference`instead.
  * origin `string`: Required for the 3D Secure 2 `channel` **Web** integration.
  * recurringExpiry `string`: Date after which no further authorisations shall be performed. Only for 3D Secure 2.
  * recurringFrequency `string`: Minimum number of days between authorisations. Only for 3D Secure 2.
  * recurringProcessingModel `string` (values: CardOnFile, Subscription, UnscheduledCardOnFile): Defines a recurring payment type.
  * redirectFromIssuerMethod `string`: Specifies the redirect method (GET or POST) when redirecting back from the issuer.
  * redirectToIssuerMethod `string`: Specifies the redirect method (GET or POST) when redirecting to the issuer.
  * reference **required** `string`: The reference to uniquely identify a payment. This reference is used in all communication with you about the payment status. We recommend using a unique value per payment; however, it is not a requirement.
  * returnUrl **required** `string`: The URL to return to in case of a redirection.
  * riskData [RiskData](#riskdata)
  * sessionValidity `string`: The date and time until when the session remains valid, in [ISO 8601](https://www.w3.org/TR/NOTE-datetime) format.
  * shopperEmail `string`: The shopper's email address. We recommend that you provide this data, as it is used in velocity fraud checks.
  * shopperIP `string`: The shopper's IP address. In general, we recommend that you provide this data, as it is used in a number of risk checks (for instance, number of payment attempts or location-based checks).
  * shopperInteraction `string` (values: Ecommerce, ContAuth, Moto, POS): Specifies the sales channel, through which the shopper gives their card details, and whether the shopper is a returning customer.
  * shopperLocale `string`: The combination of a language code and a country code to specify the language to be used in the payment.
  * shopperName [Name](#name)
  * shopperReference `string`: The shopper's reference to uniquely identify this shopper (e.g. user ID or account ID).
  * shopperStatement `string`: The text to be shown on the shopper's bank statement. To enable this field, contact our [Support Team](https://support.adyen.com/hc/en-us/requests/new).
  * socialSecurityNumber `string`: The shopper's social security number.
  * splits `array`: Information on how the payment should be split between accounts when using [Adyen for Platforms](https://docs.adyen.com/platforms/processing-payments#providing-split-information).
    * items [Split](#split)
  * store `string`: The physical store, for which this payment is processed.
  * storePaymentMethod `boolean`: When true and `shopperReference` is provided, the payment details will be stored.
  * telephoneNumber `string`: The shopper's telephone number.
  * threeDS2RequestData [ThreeDS2RequestData](#threeds2requestdata)
  * threeDSAuthenticationOnly `boolean`: If set to true, you will only perform the [3D Secure 2 authentication](https://docs.adyen.com/checkout/3d-secure/other-3ds-flows/authentication-only), and not the payment authorisation.
  * trustedShopper `boolean`: Set to true if the payment should be routed to a trusted MID.

### PaymentResponse
* PaymentResponse `object`
  * amount [Amount](#amount)
  * authentication `object`: Contains `threeds2.fingerprint` or `threeds2.challengeToken` values to be used in further calls to `/payments/details` endpoint. 
  * details `array`: When non-empty, contains all the fields that you must submit to the `/payments/details` endpoint.
    * items [InputDetail](#inputdetail)
  * fraudResult [FraudResult](#fraudresult)
  * merchantReference `string`: The reference to uniquely identify a payment. This reference is used in all communication with you about the payment status. We recommend using a unique value per payment; however, it is not a requirement.
  * order [CheckoutOrderResponse](#checkoutorderresponse)
  * outputDetails `object`: Contains the details that will be presented to the shopper.
  * paymentData `string`: When non-empty, contains a value that you must submit to the `/payments/details` endpoint.
  * pspReference `string`: Adyen's 16-character string reference associated with the transaction/request. This value is globally unique; quote it when communicating with us about this request.
  * redirect [Redirect](#redirect)
  * refusalReason `string`: If the payment's authorisation is refused or an error occurs during authorisation, this field holds Adyen's mapped reason for the refusal or a description of the error. When a transaction fails, the authorisation response includes `resultCode` and `refusalReason` values.
  * refusalReasonCode `string`: Code that specifies the refusal reason. For more information, see [Authorisation refusal reasons](https://docs.adyen.com/development-resources/refusal-reasons).
  * resultCode `string` (values: AuthenticationFinished, Authorised, Cancelled, ChallengeShopper, Error, IdentifyShopper, Pending, PresentToShopper, Received, RedirectShopper, Refused): The result of the payment. For more information, see [Result codes](https://docs.adyen.com/checkout/payment-result-codes).

### PaymentSetupRequest
* PaymentSetupRequest `object`
  * allowedPaymentMethods `array`: List of payments methods to be presented to the shopper. To refer to payment methods, use their `paymentMethod.type`from [Payment methods overview](https://docs.adyen.com/payment-methods).
    * items `string`
  * amount **required** [Amount](#amount)
  * applicationInfo [ApplicationInfo](#applicationinfo)
  * billingAddress [Address](#address)
  * blockedPaymentMethods `array`: List of payments methods to be hidden from the shopper. To refer to payment methods, use their `paymentMethod.type`from [Payment methods overview](https://docs.adyen.com/payment-methods).
    * items `string`
  * captureDelayHours `integer`: The delay between the authorisation and scheduled auto-capture, specified in hours.
  * channel `string` (values: iOS, Android, Web): The platform where a payment transaction takes place. This field is optional for filtering out payment methods that are only available on specific platforms. If this value is not set, then we will try to infer it from the `sdkVersion` or `token`.
  * company [Company](#company)
  * configuration [Configuration](#configuration)
  * conversionId `string`: Conversion ID that corresponds to the Id generated for tracking user payment journey.
  * countryCode **required** `string`: The shopper country.
  * dateOfBirth `string`: The shopper's date of birth.
  * dccQuote [ForexQuote](#forexquote)
  * deliveryAddress [Address](#address)
  * deliveryDate `string`: The date and time the purchased goods should be delivered.
  * enableOneClick `boolean`: When true and `shopperReference` is provided, the shopper will be asked if the payment details should be stored for future one-click payments.
  * enablePayOut `boolean`: When true and `shopperReference` is provided, the payment details will be tokenized for payouts.
  * enableRealTimeUpdate `boolean`: Choose if a specific transaction should use the Real-time Account Updater, regardless of other settings.
  * enableRecurring `boolean`: When true and `shopperReference` is provided, the payment details will be tokenized for recurring payments.
  * entityType `string` (values: NaturalPerson, CompanyName): The type of the entity the payment is processed for.
  * fraudOffset `integer`: An integer value that is added to the normal fraud score. The value can be either positive or negative.
  * installments [Installments](#installments)
  * lineItems `array`: Price and product information about the purchased items, to be included on the invoice sent to the shopper.
    * items [LineItem](#lineitem)
  * mcc `string`: The [merchant category code](https://en.wikipedia.org/wiki/Merchant_category_code) (MCC) is a four-digit number, which relates to a particular market segment. This code reflects the predominant activity that is conducted by the merchant.
  * merchantAccount **required** `string`: The merchant account identifier, with which you want to process the transaction.
  * merchantOrderReference `string`: This reference allows linking multiple transactions to each other for reporting purposes (i.e. order auth-rate). The reference should be unique per billing cycle.
  * metadata `object`: Metadata consists of entries, each of which includes a key and a value.
  * orderReference `string`: When you are doing multiple partial (gift card) payments, this is the `pspReference` of the first payment. We use this to link the multiple payments to each other. As your own reference for linking multiple payments, use the `merchantOrderReference`instead.
  * origin `string`: Required for the Web integration.
  * recurringExpiry `string`: Date after which no further authorisations shall be performed. Only for 3D Secure 2.
  * recurringFrequency `string`: Minimum number of days between authorisations. Only for 3D Secure 2.
  * reference **required** `string`: The reference to uniquely identify a payment. This reference is used in all communication with you about the payment status. We recommend using a unique value per payment; however, it is not a requirement.
  * returnUrl **required** `string`: The URL to return to in case of a redirection.
  * riskData [RiskData](#riskdata)
  * sdkVersion `string`: The version of the SDK you are using (for Web SDK integrations only).
  * sessionValidity `string`: The date and time until when the session remains valid, in [ISO 8601](https://www.w3.org/TR/NOTE-datetime) format.
  * shopperEmail `string`: The shopper's email address. We recommend that you provide this data, as it is used in velocity fraud checks.
  * shopperIP `string`: The shopper's IP address. In general, we recommend that you provide this data, as it is used in a number of risk checks (for instance, number of payment attempts or location-based checks).
  * shopperInteraction `string` (values: Ecommerce, ContAuth, Moto, POS): Specifies the sales channel, through which the shopper gives their card details, and whether the shopper is a returning customer.
  * shopperLocale `string`: The combination of a language code and a country code to specify the language to be used in the payment.
  * shopperName [Name](#name)
  * shopperReference `string`: The shopper's reference to uniquely identify this shopper (e.g. user ID or account ID).
  * shopperStatement `string`: The text to be shown on the shopper's bank statement. To enable this field, contact our [Support Team](https://support.adyen.com/hc/en-us/requests/new).
  * socialSecurityNumber `string`: The shopper's social security number.
  * splits `array`: Information on how the payment should be split between accounts when using [Adyen for Platforms](https://docs.adyen.com/platforms/processing-payments#providing-split-information).
    * items [Split](#split)
  * storePaymentMethod `boolean`: When true and `shopperReference` is provided, the payment details will be stored.
  * telephoneNumber `string`: The shopper's telephone number.
  * threeDSAuthenticationOnly `boolean`: If set to true, you will only perform the [3D Secure 2 authentication](https://docs.adyen.com/checkout/3d-secure/other-3ds-flows/authentication-only), and not the payment authorisation.
  * token `string`: The token obtained when initializing the SDK.
  * trustedShopper `boolean`: Set to true if the payment should be routed to a trusted MID.

### PaymentSetupResponse
* PaymentSetupResponse `object`
  * paymentSession `string`: The encoded payment session that you need to pass to the SDK.
  * recurringDetails `array`: The detailed list of stored payment details required to generate payment forms. Will be empty if oneClick is set to false in the request.
    * items [RecurringDetail](#recurringdetail)

### PaymentVerificationRequest
* PaymentVerificationRequest `object`
  * payload **required** `string`: Encrypted and signed payment result data. You should receive this value from the Checkout SDK after the shopper completes the payment.

### PaymentVerificationResponse
* PaymentVerificationResponse `object`
  * fraudResult [FraudResult](#fraudresult)
  * merchantReference **required** `string`: A unique value that you provided in the initial `/paymentSession` request as a `reference` field.
  * order [CheckoutOrderResponse](#checkoutorderresponse)
  * paymentMethod **required** `string`: The payment method used in the transaction.
  * pspReference `string`: Adyen's 16-character string reference associated with the transaction/request. This value is globally unique; quote it when communicating with us about this request.
  * refusalReason `string`: If the payment's authorisation is refused or an error occurs during authorisation, this field holds Adyen's mapped reason for the refusal or a description of the error. When a transaction fails, the authorisation response includes `resultCode` and `refusalReason` values.
  * refusalReasonCode `string`: Code that specifies the refusal reason. For more information, see [Authorisation refusal reasons](https://docs.adyen.com/development-resources/refusal-reasons).
  * resultCode `string` (values: AuthenticationFinished, Authorised, Cancelled, ChallengeShopper, Error, IdentifyShopper, Pending, PresentToShopper, Received, RedirectShopper, Refused): The result of the payment. For more information, see [Result codes](https://docs.adyen.com/checkout/payment-result-codes).
  * serviceError [ServiceError](#serviceerror)
  * shopperLocale **required** `string`: The shopperLocale value provided in the payment request.

### QiwiWalletDetails
* QiwiWalletDetails `object`
  * telephoneNumber **required** `string`
  * type **required** `string`: **qiwiwallet**

### Recurring
* Recurring `object`
  * contract `string` (values: ONECLICK, RECURRING, PAYOUT): The type of recurring contract to be used.
  * recurringDetailName `string`: A descriptive name for this detail.
  * recurringExpiry `string`: Date after which no further authorisations shall be performed. Only for 3D Secure 2.
  * recurringFrequency `string`: Minimum number of days between authorisations. Only for 3D Secure 2.
  * tokenService `string` (values: VISATOKENSERVICE, MCTOKENSERVICE): The name of the token service.

### RecurringDetail
* RecurringDetail `object`
  * brands `array`: List of possible brands. For example: visa, mc.
    * items `string`
  * configuration `object`: The configuration of the payment method.
  * details `array`: All input details to be provided to complete the payment with this payment method.
    * items [InputDetail](#inputdetail)
  * fundingSource `string` (values: credit, debit): The funding source of the payment method.
  * group [PaymentMethodGroup](#paymentmethodgroup)
  * inputDetails `array`: All input details to be provided to complete the payment with this payment method.
    * items [InputDetail](#inputdetail)
  * name `string`: The displayable name of this payment method.
  * paymentMethodData `string`: Echo data required to send in next calls.
  * recurringDetailReference `string`: The reference that uniquely identifies the recurring detail.
  * storedDetails [StoredDetails](#storeddetails)
  * supportsRecurring `boolean`: Indicates whether this payment method supports tokenization or not.
  * type `string`: The unique payment method code.

### Redirect
* Redirect `object`
  * data `object`: When the redirect URL must be accessed via POST, use this data to post to the redirect URL.
  * method `string` (values: GET, POST): The web method that you must use to access the redirect URL.
  * url `string`: The URL, to which you must redirect a shopper to complete a payment.

### ResponseAdditionalDataBillingAddress
* ResponseAdditionalDataBillingAddress `object`
  * billingAddress.city `string`: The billing address city passed in the payment request.
  * billingAddress.country `string`: The billing address country passed in the payment request.
  * billingAddress.houseNumberOrName `string`: The billing address house number or name passed in the payment request.
  * billingAddress.postalCode `string`: The billing address postal code passed in the payment request.
  * billingAddress.stateOrProvince `string`: The billing address state or province passed in the payment request.
  * billingAddress.street `string`: The billing address street passed in the payment request.

### ResponseAdditionalDataCard
* ResponseAdditionalDataCard `object`
  * cardBin `string`: The Bank Identification Number of a credit card, which is the first six digits of a card number.
  * cardHolderName `string`: The cardholder name passed in the payment request.
  * cardIssuingBank `string`: The bank or the financial institution granting lines of credit through card association branded payment cards. This information can be included when available.
  * cardIssuingCountry `string`: The country where the card was issued.
  * cardIssuingCurrency `string`: The currency in which the card is issued, if this information is available. Provided as the currency code or currency number from the ISO-4217 standard. 
  * cardPaymentMethod `string`: The card payment method used for the transaction.
  * cardSummary `string`: The last four digits of a card number.

### ResponseAdditionalDataCommon
* ResponseAdditionalDataCommon `object`
  * acquirerAccountCode `string`: The name of the Adyen acquirer account.
  * acquirerCode `string`: The name of the acquirer processing the payment request.
  * acquirerReference `string`: The reference number that can be used for reconciliation in case a non-Adyen acquirer is used for settlement.
  * alias `string`: The Adyen alias of the card.
  * aliasType `string`: The type of the card alias.
  * authCode `string`: Authorisation code:
  * authorisedAmountCurrency `string`: The currency of the authorised amount, as a three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes).
  * authorisedAmountValue `string`: Value of the amount authorised.
  * avsResult `string`: The AVS result code of the payment, which provides information about the outcome of the AVS check.
  * avsResultRaw `string`: Raw AVS result received from the acquirer, where available.
  * bic `string`: BIC of a bank account.
  * dsTransID `string`: Supported for 3D Secure 2. The unique transaction identifier assigned by the DS to identify a single transaction.
  * eci `string`: The Electronic Commerce Indicator returned from the schemes for the 3DS payment session.
  * expiryDate `string`: The expiry date on the card.
  * extraCostsCurrency `string`: The currency of the extra amount charged due to additional amounts set in the skin used in the HPP payment request.
  * extraCostsValue `string`: The value of the extra amount charged due to additional amounts set in the skin used in the HPP payment request. The amount is in minor units.
  * fraudCheck-[itemNr]-[FraudCheckname] `string`: The fraud score due to a particular fraud check. The fraud check name is found in the key of the key-value pair.
  * fundingSource `string`: Information regarding the funding type of the card. The possible return values are:
  * fundsAvailability `string`: Indicates availability of funds.
  * inferredRefusalReason `string`: Provides the more granular indication of why a transaction was refused. When a transaction fails with either "Refused", "Restricted Card", "Transaction Not Permitted", "Not supported" or "DeclinedNon Generic" refusalReason from the issuer, Adyen cross references its PSP-wide data for extra insight into the refusal reason. If an inferred refusal reason is available, the `inferredRefusalReason`, field is populated and the `refusalReason`, is set to "Not Supported".
  * issuerCountry `string`: The issuing country of the card based on the BIN list that Adyen maintains.
  * mcBankNetReferenceNumber `string`: The `mcBankNetReferenceNumber`, is a minimum of six characters and a maximum of nine characters long.
  * networkTxReference `string`: Returned in the response if you are not tokenizing with Adyen and are using the Merchant-initiated transactions (MIT) framework from Mastercard or Visa.
  * ownerName `string`: The owner name of a bank account.
  * paymentAccountReference `string`: The Payment Account Reference (PAR) value links a network token with the underlying primary account number (PAN). The PAR value consists of 29 uppercase alphanumeric characters.
  * paymentMethodVariant `string`: The Adyen sub-variant of the payment method used for the payment request.
  * payoutEligible `string`: Indicates whether a payout is eligible or not for this card.
  * realtimeAccountUpdaterStatus `string`: The response code from the Real Time Account Updater service.
  * receiptFreeText `string`: Message to be displayed on the terminal.
  * recurring.firstPspReference `string`: The `pspReference`, of the first recurring payment that created the recurring detail.
  * recurring.recurringDetailReference `string`: The reference that uniquely identifies the recurring transaction.
  * referred `string`: If the payment is referred, this field is set to true.
  * refusalReasonRaw `string`: Raw refusal reason received from the acquirer, where available.
  * shopperInteraction `string`: The shopper interaction type of the payment request.
  * shopperReference `string`: The shopperReference passed in the payment request.
  * terminalId `string`: The terminal ID used in a point-of-sale payment.
  * threeDAuthenticated `string`: A Boolean value indicating whether 3DS authentication was completed on this payment.
  * threeDAuthenticatedResponse `string`: The raw 3DS authentication result from the card issuer.
  * threeDOffered `string`: A Boolean value indicating whether 3DS was offered for this payment.
  * threeDOfferedResponse `string`: The raw enrollment result from the 3DS directory services of the card schemes.
  * threeDSVersion `string`: The 3D Secure 2 version.
  * visaTransactionId `string`: The `visaTransactionId`, has a fixed length of 15 numeric characters.
  * xid `string`: The 3DS transaction ID of the 3DS session sent in notifications. The value is Base64-encoded and is returned for transactions with directoryResponse 'N' or 'Y'. If you want to submit the xid in your 3D Secure 1 request, use the `mpiData.xid`, field.

### ResponseAdditionalDataDeliveryAddress
* ResponseAdditionalDataDeliveryAddress `object`
  * deliveryAddress.city `string`: The delivery address city passed in the payment request.
  * deliveryAddress.country `string`: The delivery address country passed in the payment request.
  * deliveryAddress.houseNumberOrName `string`: The delivery address house number or name passed in the payment request.
  * deliveryAddress.postalCode `string`: The delivery address postal code passed in the payment request.
  * deliveryAddress.stateOrProvince `string`: The delivery address state or province passed in the payment request.
  * deliveryAddress.street `string`: The delivery address street passed in the payment request.

### ResponseAdditionalDataInstallments
* ResponseAdditionalDataInstallments `object`
  * installmentPaymentData.installmentType `string`: Type of installment. The value of `installmentType` should be **IssuerFinanced**.
  * installmentPaymentData.option[itemNr].annualPercentageRate `string`: Annual interest rate.
  * installmentPaymentData.option[itemNr].firstInstallmentAmount `string`: First Installment Amount in minor units.
  * installmentPaymentData.option[itemNr].installmentFee `string`: Installment fee amount in minor units.
  * installmentPaymentData.option[itemNr].interestRate `string`: Interest rate for the installment period.
  * installmentPaymentData.option[itemNr].maximumNumberOfInstallments `string`: Maximum number of installments possible for this payment.
  * installmentPaymentData.option[itemNr].minimumNumberOfInstallments `string`: Minimum number of installments possible for this payment.
  * installmentPaymentData.option[itemNr].numberOfInstallments `string`: Total number of installments possible for this payment.
  * installmentPaymentData.option[itemNr].subsequentInstallmentAmount `string`: Subsequent Installment Amount in minor units.
  * installmentPaymentData.option[itemNr].totalAmountDue `string`: Total amount in minor units.
  * installmentPaymentData.paymentOptions `string`: Possible values:
  * installments.value `string`: The number of installments that the payment amount should be charged with.

### ResponseAdditionalDataNetworkTokens
* ResponseAdditionalDataNetworkTokens `object`
  * networkToken.available `string`: Indicates whether a network token is available for the specified card.
  * networkToken.bin `string`: The Bank Identification Number of a tokenized card, which is the first six digits of a card number.
  * networkToken.tokenSummary `string`: The last four digits of a card number.

### ResponseAdditionalDataOpi
* ResponseAdditionalDataOpi `object`
  * opi.transToken `string`: Returned in the response if you included `opi.returnTransToken` in an ecommerce request. This contains an OPI token that you can use to identify an ecommerce transaction in your Oracle system integrations such as Opera.

### ResponseAdditionalDataPayPal
* ResponseAdditionalDataPayPal `object`
  * paypalEmail `string`: The buyer's PayPal account email address.
  * paypalPayerId `string`: The buyer's PayPal ID.
  * paypalPayerResidenceCountry `string`: The buyer's country of residence.
  * paypalPayerStatus `string`: The status of the buyer's PayPal account.
  * paypalProtectionEligibility `string`: The eligibility for PayPal Seller Protection for this payment.

### ResponseAdditionalDataSepa
* ResponseAdditionalDataSepa `object`
  * sepadirectdebit.dateOfSignature `string`: The transaction signature date.
  * sepadirectdebit.mandateId `string`: Its value corresponds to the pspReference value of the transaction.
  * sepadirectdebit.sequenceType `string`: This field can take one of the following values:

### RiskData
* RiskData `object`
  * clientData `string`: Contains client-side data, like the device fingerprint, cookies, and specific browser settings.

### SDKEphemPubKey
* SDKEphemPubKey `object`
  * crv `string`: The `crv` value as received from the 3D Secure 2 SDK.
  * kty `string`: The `kty` value as received from the 3D Secure 2 SDK.
  * x `string`: The `x` value as received from the 3D Secure 2 SDK.
  * y `string`: The `y` value as received from the 3D Secure 2 SDK.

### SamsungPayDetails
* SamsungPayDetails `object`
  * fundingSource `string` (values: credit, debit)
  * samsungPayToken **required** `string`
  * storedPaymentMethodId `string`: This is the `recurringDetailReference` returned in the response when you created the token.
  * type **required** `string`: **samsungpay**

### SepaDirectDebitDetails
* SepaDirectDebitDetails `object`
  * iban **required** `string`: The International Bank Account Number (IBAN).
  * ownerName **required** `string`: The name of the bank account holder.
  * storedPaymentMethodId `string`: This is the `recurringDetailReference` returned in the response when you created the token.
  * type **required** `string`: **sepadirectdebit**

### ServiceError
* ServiceError `object`
  * errorCode `string`
  * errorType `string`
  * message `string`

### ShopperInput
* ShopperInput `object`
  * billingAddress `string` (values: editable, hidden, readOnly): Specifies visibility of billing address fields.
  * deliveryAddress `string` (values: editable, hidden, readOnly): Specifies visibility of delivery address fields.
  * personalDetails `string` (values: editable, hidden, readOnly): Specifies visibility of personal details.

### ShopperInteractionDevice
* ShopperInteractionDevice `object`
  * locale `string`: Locale on the shopper interaction device.
  * os `string`: Operating system running on the shopper interaction device.
  * osVersion `string`: Version of the operating system on the shopper interaction device.

### Split
* Split `object`
  * account `string`: The account to which this split applies.
  * amount **required** [SplitAmount](#splitamount)
  * description `string`: A description of this split.
  * reference `string`: The reference of this split. Used to link other operations (e.g. captures and refunds) to this split.
  * type **required** `string` (values: BalanceAccount, Commission, Default, MarketPlace, PaymentFee, VAT, Verification): The type of this split.

### SplitAmount
* SplitAmount `object`
  * currency `string`: The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes).
  * value **required** `integer`: The payable amount that can be charged for the transaction.

### StoredDetails
* StoredDetails `object`
  * bank [BankAccount](#bankaccount)
  * card [Card](#card)
  * emailAddress `string`: The email associated with stored payment details.

### StoredPaymentMethod
* StoredPaymentMethod `object`
  * brand `string`: The brand of the card.
  * expiryMonth `string`: The month the card expires.
  * expiryYear `string`: The year the card expires.
  * holderName `string`: The unique payment method code.
  * id `string`: A unique identifier of this stored payment method.
  * lastFour `string`: The last four digits of the PAN.
  * name `string`: The display name of the stored payment method.
  * shopperEmail `string`: The shopper’s email address.
  * supportedShopperInteractions `array`: The supported shopper interactions for this stored payment method.
    * items `string`
  * type `string`: The type of payment method.

### StoredPaymentMethodDetails
* StoredPaymentMethodDetails `object`
  * storedPaymentMethodId `string`: This is the `recurringDetailReference` returned in the response when you created the token.
  * type **required** `string`: The payment method type.

### SubInputDetail
* SubInputDetail `object`
  * configuration `object`: Configuration parameters for the required input.
  * items `array`: In case of a select, the items to choose from.
    * items [Item](#item)
  * key `string`: The value to provide in the result.
  * optional `boolean`: True if this input is optional to provide.
  * type `string`: The type of the required input.
  * value `string`: The value can be pre-filled, if available.

### ThreeDS2RequestData
* ThreeDS2RequestData `object`
  * acquirerBIN `string`: Required for [authentication-only integration](https://docs.adyen.com/checkout/3d-secure/other-3ds-flows/authentication-only). The acquiring BIN enrolled for 3D Secure 2. This string should match the value that you will use in the authorisation. Use 123456 on the Test platform.
  * acquirerMerchantID `string`: Required for [authentication-only integration](https://docs.adyen.com/checkout/3d-secure/other-3ds-flows/authentication-only). The merchantId that is enrolled for 3D Secure 2 by the merchant's acquirer. This string should match the value that you will use in the authorisation. Use 123456 on the Test platform.
  * authenticationOnly `boolean`: If set to true, you will only perform the [3D Secure 2 authentication](https://docs.adyen.com/checkout/3d-secure/other-3ds-flows/authentication-only), and not the payment authorisation.
  * challengeIndicator `string` (values: noPreference, requestNoChallenge, requestChallenge, requestChallengeAsMandate): Possibility to specify a preference for receiving a challenge from the issuer.
  * deviceChannel **required** `string`: The environment of the shopper.
  * deviceRenderOptions [DeviceRenderOptions](#devicerenderoptions)
  * mcc `string`: Required for merchants that have been enrolled for 3D Secure 2 by another party than Adyen, mostly [authentication-only integrations](https://docs.adyen.com/checkout/3d-secure/other-3ds-flows/authentication-only). The `mcc` is a four-digit code with which the previously given `acquirerMerchantID` is registered at the scheme.
  * merchantName `string`: Required for [authentication-only integration](https://docs.adyen.com/checkout/3d-secure/other-3ds-flows/authentication-only). The merchant name that the issuer presents to the shopper if they get a challenge. We recommend to use the same value that you will use in the authorization. Maximum length is 40 characters.
  * messageVersion `string`: The `messageVersion` value indicating the 3D Secure 2 protocol version.
  * notificationURL `string`: URL to where the issuer should send the `CRes`. Required if you are not using components for `channel` **Web** or if you are using classic integration `deviceChannel` **browser**.
  * sdkAppID `string`: The `sdkAppID` value as received from the 3D Secure 2 SDK.
  * sdkEncData `string`: The `sdkEncData` value as received from the 3D Secure 2 SDK.
  * sdkEphemPubKey [SDKEphemPubKey](#sdkephempubkey)
  * sdkMaxTimeout `integer`: The maximum amount of time in minutes for the 3D Secure 2 authentication process.
  * sdkReferenceNumber `string`: The `sdkReferenceNumber` value as received from the 3D Secure 2 SDK.
  * sdkTransID `string`: The `sdkTransID` value as received from the 3D Secure 2 SDK.
  * threeDSCompInd `string`: Completion indicator for the device fingerprinting.
  * threeDSRequestorID `string`: Required for [authentication-only integration](https://docs.adyen.com/checkout/3d-secure/other-3ds-flows/authentication-only) for Visa. Unique 3D Secure requestor identifier assigned by the Directory Server when you enrol for 3D Secure 2.
  * threeDSRequestorName `string`: Required for [authentication-only integration](https://docs.adyen.com/checkout/3d-secure/other-3ds-flows/authentication-only) for Visa. Unique 3D Secure requestor name assigned by the Directory Server when you enrol for 3D Secure 2.
  * threeDSRequestorURL `string`: URL of the (customer service) website that will be shown to the shopper in case of technical errors during the 3D Secure 2 process.
  * transactionType `string` (values: goodsOrServicePurchase, checkAcceptance, accountFunding, quasiCashTransaction, prepaidActivationAndLoad): Identify the type of the transaction being authenticated.
  * whiteListStatus `string`: The `whiteListStatus` value returned from a previous 3D Secure 2 transaction, only applicable for 3D Secure 2 protocol version 2.2.0.

### ThreeDSecureData
* ThreeDSecureData `object`
  * authenticationResponse `string` (values: Y, N, U, A): In 3D Secure 1, the authentication response if the shopper was redirected.
  * cavv `string`: The cardholder authentication value (base64 encoded, 20 bytes in a decoded form).
  * cavvAlgorithm `string`: The CAVV algorithm used. Include this only for 3D Secure 1.
  * directoryResponse `string` (values: A, C, D, I, N, R, U, Y): In 3D Secure 1, this is the enrollment response from the 3D directory server.
  * dsTransID `string`: Supported for 3D Secure 2. The unique transaction identifier assigned by the Directory Server (DS) to identify a single transaction.
  * eci `string`: The electronic commerce indicator.
  * threeDSVersion `string`: The version of the 3D Secure protocol.
  * xid `string`: Supported for 3D Secure 1. The transaction identifier (Base64-encoded, 20 bytes in a decoded form).

### UpdatePaymentLinkRequest
* UpdatePaymentLinkRequest `object`
  * status **required** `string` (values: expired): Status of the payment link. Possible values:

### VippsDetails
* VippsDetails `object`
  * storedPaymentMethodId `string`: This is the `recurringDetailReference` returned in the response when you created the token.
  * telephoneNumber **required** `string`
  * type **required** `string`: **vipps**

### VisaCheckoutDetails
* VisaCheckoutDetails `object`
  * fundingSource `string` (values: credit, debit)
  * type **required** `string`: **visacheckout**
  * visaCheckoutCallId **required** `string`

### WeChatPayDetails
* WeChatPayDetails `object`
  * appId `string`
  * openid `string`
  * type **required** `string`: **wechatpay**

### WeChatPayMiniProgramDetails
* WeChatPayMiniProgramDetails `object`
  * appId `string`
  * openid `string`
  * type **required** `string`: **wechatpayMiniProgram**


