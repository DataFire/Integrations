# @datafire/payments_service_gov_uk_payments

Client library for GOV.UK Pay API

## Installation and Usage
```bash
npm install --save @datafire/payments_service_gov_uk_payments
```
```js
let payments_service_gov_uk_payments = require('@datafire/payments_service_gov_uk_payments').create({
  Authorization: ""
});

.then(data => {
  console.log(data);
});
```

## Description

GOV.UK Pay API

## Actions

### v1.directdebit.mandates.get
Searches for mandates with the parameters provided. The Authorisation token needs to be specified in the 'Authorization' header as 'Authorization: Bearer YOUR_API_KEY_HERE'


```js
payments_service_gov_uk_payments.v1.directdebit.mandates.get({}, context)
```

#### Input
* input `object`
  * reference `string`
  * state `string`
  * bank_statement_reference `string`
  * email `string`
  * name `string`
  * from_date `string`: From date of mandates to be searched (this date is inclusive). Example=2015-08-13T12:35:00Z
  * to_date `string`: To date of mandates to be searched (this date is exclusive). Example=2015-08-13T12:35:00Z
  * page `integer`: Page number requested for the search, should be a positive integer (optional, defaults to 1)
  * display_size `integer`: Number of results to be shown per page, should be a positive integer (optional, defaults to 500, max 500)

#### Output
* output [SearchMandateResponse](#searchmandateresponse)

### v1.directdebit.mandates.post
Create a new mandate for the account associated to the Authorisation token. The Authorisation token needs to be specified in the 'Authorization' header as 'Authorization: Bearer YOUR_API_KEY_HERE'


```js
payments_service_gov_uk_payments.v1.directdebit.mandates.post({
  "body": {
    "reference": "",
    "return_url": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [CreateMandateRequest](#createmandaterequest)

#### Output
* output [MandateResponse](#mandateresponse)

### v1.directdebit.mandates.mandateId.get
Return information about the mandate. The Authorisation token needs to be specified in the 'Authorization' header as 'Authorization: Bearer YOUR_API_KEY_HERE'


```js
payments_service_gov_uk_payments.v1.directdebit.mandates.mandateId.get({
  "mandateId": ""
}, context)
```

#### Input
* input `object`
  * mandateId **required** `string`

#### Output
* output [MandateResponse](#mandateresponse)

### v1.directdebit.payments.get
Search Direct Debit payments by reference, state, mandate id, and 'from' and 'to' dates. The Authorisation token needs to be specified in the 'Authorization' header as 'Authorization: Bearer YOUR_API_KEY_HERE'


```js
payments_service_gov_uk_payments.v1.directdebit.payments.get({}, context)
```

#### Input
* input `object`
  * reference `string`: Your payment reference to search
  * state `string`: State of payments to be searched. Example=success
  * mandate_id `string`: The GOV.UK Pay identifier for the mandate
  * from_date `string`: From date of Direct Debit payments to be searched (this date is inclusive). Example=2015-08-13T12:35:00Z
  * to_date `string`: To date of Direct Debit payments to be searched (this date is exclusive). Example=2015-08-13T12:35:00Z
  * page `integer`: Page number requested for the search, should be a positive integer (optional, defaults to 1)
  * display_size `integer`: Number of results to be shown per page, should be a positive integer (optional, defaults to 500, max 500)

#### Output
* output [DirectDebitSearchResponse](#directdebitsearchresponse)

### v1.directdebit.payments.post
Create a new Direct Debit payment for the account associated to the Authorisation token. The Authorisation token needs to be specified in the 'authorization' header as 'authorization: Bearer YOUR_API_KEY_HERE'


```js
payments_service_gov_uk_payments.v1.directdebit.payments.post({
  "body": {
    "amount": 0,
    "description": "",
    "reference": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [CreateDirectDebitPaymentRequest](#createdirectdebitpaymentrequest)

#### Output
* output [DirectDebitPayment](#directdebitpayment)

### v1.directdebit.payments.paymentId.get
Return information about the Direct Debit payment. The Authorisation token needs to be specified in the 'Authorization' header as 'Authorization: Bearer YOUR_API_KEY_HERE'


```js
payments_service_gov_uk_payments.v1.directdebit.payments.paymentId.get({
  "paymentId": ""
}, context)
```

#### Input
* input `object`
  * paymentId **required** `string`: Payment identifier

#### Output
* output [DirectDebitPayment](#directdebitpayment)

### v1.payments.get
Search payments by reference, state, 'from' and 'to' date. The Authorisation token needs to be specified in the 'authorization' header as 'authorization: Bearer YOUR_API_KEY_HERE'


```js
payments_service_gov_uk_payments.v1.payments.get({}, context)
```

#### Input
* input `object`
  * reference `string`: Your payment reference to search (exact match, case insensitive)
  * email `string`: The user email used in the payment to be searched
  * state `string` (values: created, started, submitted, success, failed, cancelled, error): State of payments to be searched. Example=success
  * card_brand `string`: Card brand used for payment. Example=master-card
  * from_date `string`: From date of payments to be searched (this date is inclusive). Example=2015-08-13T12:35:00Z
  * to_date `string`: To date of payments to be searched (this date is exclusive). Example=2015-08-14T12:35:00Z
  * page `string`: Page number requested for the search, should be a positive integer (optional, defaults to 1)
  * display_size `string`: Number of results to be shown per page, should be a positive integer (optional, defaults to 500, max 500)
  * cardholder_name `string`: Name on card used to make payment
  * first_digits_card_number `string`: First six digits of the card used to make payment
  * last_digits_card_number `string`: Last four digits of the card used to make payment
  * from_settled_date `string`: From settled date of payment to be searched (this date is inclusive). Example=2015-08-13
  * to_settled_date `string`: To settled date of payment to be searched (this date is inclusive). Example=2015-08-14

#### Output
* output [PaymentSearchResults](#paymentsearchresults)

### v1.payments.post
Create a new payment for the account associated to the Authorisation token. The Authorisation token needs to be specified in the 'authorization' header as 'authorization: Bearer YOUR_API_KEY_HERE'


```js
payments_service_gov_uk_payments.v1.payments.post({
  "body": {
    "amount": 0,
    "description": "",
    "reference": "",
    "return_url": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [CreateCardPaymentRequest](#createcardpaymentrequest)

#### Output
* output [CreatePaymentResult](#createpaymentresult)

### v1.payments.paymentId.get
Return information about the payment The Authorisation token needs to be specified in the 'authorization' header as 'authorization: Bearer YOUR_API_KEY_HERE'


```js
payments_service_gov_uk_payments.v1.payments.paymentId.get({
  "paymentId": ""
}, context)
```

#### Input
* input `object`
  * paymentId **required** `string`: Payment identifier

#### Output
* output [GetPaymentResult](#getpaymentresult)

### v1.payments.paymentId.cancel.post
Cancel a payment based on the provided payment ID and the Authorisation token. The Authorisation token needs to be specified in the 'authorization' header as 'authorization: Bearer YOUR_API_KEY_HERE'. A payment can only be cancelled if it's in a state that isn't finished.


```js
payments_service_gov_uk_payments.v1.payments.paymentId.cancel.post({
  "paymentId": ""
}, context)
```

#### Input
* input `object`
  * paymentId **required** `string`: Payment identifier

#### Output
*Output schema unknown*

### v1.payments.paymentId.capture.post
Capture a payment based on the provided payment ID and the Authorisation token. The Authorisation token needs to be specified in the 'authorization' header as 'authorization: Bearer YOUR_API_KEY_HERE'. A payment can only be captured if it's in 'submitted' state


```js
payments_service_gov_uk_payments.v1.payments.paymentId.capture.post({
  "paymentId": ""
}, context)
```

#### Input
* input `object`
  * paymentId **required** `string`: Payment identifier

#### Output
*Output schema unknown*

### v1.payments.paymentId.events.get
Return payment events information about a certain payment The Authorisation token needs to be specified in the 'authorization' header as 'authorization: Bearer YOUR_API_KEY_HERE'


```js
payments_service_gov_uk_payments.v1.payments.paymentId.events.get({
  "paymentId": ""
}, context)
```

#### Input
* input `object`
  * paymentId **required** `string`: Payment identifier

#### Output
* output [PaymentEvents](#paymentevents)

### v1.payments.paymentId.refunds.get
Return refunds for a payment. The Authorisation token needs to be specified in the 'authorization' header as 'authorization: Bearer YOUR_API_KEY_HERE'


```js
payments_service_gov_uk_payments.v1.payments.paymentId.refunds.get({
  "paymentId": ""
}, context)
```

#### Input
* input `object`
  * paymentId **required** `string`

#### Output
* output [RefundForSearchResult](#refundforsearchresult)

### v1.payments.paymentId.refunds.post
Return issued refund information. The Authorisation token needs to be specified in the 'authorization' header as 'authorization: Bearer YOUR_API_KEY_HERE'


```js
payments_service_gov_uk_payments.v1.payments.paymentId.refunds.post({
  "paymentId": "",
  "body": {
    "amount": 0
  }
}, context)
```

#### Input
* input `object`
  * paymentId **required** `string`: paymentId
  * body **required** [PaymentRefundRequest](#paymentrefundrequest)

#### Output
* output [Refund](#refund)

### v1.payments.paymentId.refunds.refundId.get
Return payment refund information by Refund ID The Authorisation token needs to be specified in the 'authorization' header as 'authorization: Bearer YOUR_API_KEY_HERE'


```js
payments_service_gov_uk_payments.v1.payments.paymentId.refunds.refundId.get({
  "paymentId": "",
  "refundId": ""
}, context)
```

#### Input
* input `object`
  * paymentId **required** `string`
  * refundId **required** `string`

#### Output
* output [Refund](#refund)

### v1.refunds.get
Search refunds by 'from' and 'to' date. The Authorisation token needs to be specified in the 'authorization' header as 'authorization: Bearer YOUR_API_KEY_HERE'


```js
payments_service_gov_uk_payments.v1.refunds.get({}, context)
```

#### Input
* input `object`
  * from_date `string`: From date of refunds to be searched (this date is inclusive). Example=2015-08-13T12:35:00Z
  * to_date `string`: To date of refunds to be searched (this date is exclusive). Example=2015-08-14T12:35:00Z
  * from_settled_date `string`: From settled date of refund to be searched (this date is inclusive). Example=2015-08-13
  * to_settled_date `string`: To settled date of refund to be searched (this date is inclusive). Example=2015-08-13
  * page `string`: Page number requested for the search, should be a positive integer (optional, defaults to 1)
  * display_size `string`: Number of results to be shown per page, should be a positive integer (optional, defaults to 500, max 500)

#### Output
* output [RefundSearchResults](#refundsearchresults)



## Definitions

### Address
* Address `object`: A structure representing the billing address of a card
  * city `string`
  * country `string`
  * line1 `string`
  * line2 `string`
  * postcode `string`

### CardDetails
* CardDetails `object`: A structure representing the payment card
  * billing_address [Address](#address)
  * card_brand `string`
  * card_type `string` (values: debit, credit, null): The card type, `debit` or `credit` or `null` if not able to determine
  * cardholder_name `string`
  * expiry_date `string`: The expiry date of the card in MM/yy format
  * first_digits_card_number `string`
  * last_digits_card_number `string`

### CreateCardPaymentRequest
* CreateCardPaymentRequest `object`: The Payment Request Payload
  * amount **required** `integer`: amount in pence
  * delayed_capture `boolean`: delayed capture flag
  * description **required** `string`: payment description
  * email `string`: email
  * language `string` (values: en, cy): ISO-639-1 Alpha-2 code of a supported language to use on the payment pages
  * metadata `object`: Additional metadata - up to 10 name/value pairs - on the payment. Each key must be between 1 and 30 characters long. The value, if a string, must be no greater than 50 characters long. Other permissible value types: boolean, number.
  * moto `boolean`: Mail Order / Telephone Order (MOTO) payment flag
  * prefilled_cardholder_details [PrefilledCardholderDetails](#prefilledcardholderdetails)
  * reference **required** `string`: payment reference
  * return_url **required** `string`: service return url

### CreateDirectDebitPaymentRequest
* CreateDirectDebitPaymentRequest `object`: The Direct Debit Payment Request Payload
  * amount **required** `integer`: amount in pence
  * description **required** `string`: payment description
  * mandate_id `string`: ID of the mandates being used to collect the payment
  * reference **required** `string`: payment reference

### CreateMandateRequest
* CreateMandateRequest `object`: The Payload to create a new Mandate
  * description `string`: mandate description
  * reference **required** `string`: mandate reference
  * return_url **required** `string`: mandate return url

### CreatePaymentResult
* CreatePaymentResult `object`
  * _links [PaymentLinks](#paymentlinks)
  * amount `integer`: The amount in pence.
  * card_details [CardDetails](#carddetails)
  * created_date `string`: The date you created the payment.
  * delayed_capture `boolean`: Whether to [delay capturing](https://docs.payments.service.gov.uk/optional_features/delayed_capture/) this payment.
  * description `string`: The human-readable description you gave the payment.
  * email `string`: The email address of your user.
  * language `string` (values: en, cy): Which language your users will see on the payment pages when they make a payment.
  * metadata `object`: [Custom metadata](https://docs.payments.service.gov.uk/optional_features/custom_metadata/) you added to the payment.
  * moto `boolean`: Mail Order / Telephone Order (MOTO) payment flag.
  * payment_id `string`: The unique identifier of the payment.
  * payment_provider `string`
  * provider_id `string`: The reference number the payment gateway associated with the payment.
  * reference `string`: The reference number you associated with this payment.
  * refund_summary [RefundSummary](#refundsummary)
  * return_url `string`: An HTTPS URL on your site that your user will be sent back to once they have completed their payment attempt on GOV.UK Pay.
  * settlement_summary [PaymentSettlementSummary](#paymentsettlementsummary)
  * state [PaymentState](#paymentstate)

### DirectDebitConnectorPaymentResponse
* DirectDebitConnectorPaymentResponse `object`
  * amount `integer`
  * created_date `string`
  * description `string`
  * mandate_id `string`
  * payment_id `string`
  * payment_provider `string`
  * provider_id `string`
  * reference `string`
  * state [DirectDebitPaymentState](#directdebitpaymentstate)

### DirectDebitPayment
* DirectDebitPayment `object`
  * _links [DirectDebitPaymentLinks](#directdebitpaymentlinks)
  * amount `integer`
  * created_date `string`
  * description `string`
  * mandate_id `string`
  * payment_id `string`
  * payment_provider `string`
  * provider_id `string`
  * reference `string`
  * state [DirectDebitPaymentState](#directdebitpaymentstate)

### DirectDebitPaymentLinks
* DirectDebitPaymentLinks `object`: links for payment
  * mandate [Link](#link)
  * self [Link](#link)

### DirectDebitPaymentState
* DirectDebitPaymentState `object`
  * details `string`
  * status `string`

### DirectDebitSearchResponse
* DirectDebitSearchResponse `object`
  * _links [SearchNavigationLinks](#searchnavigationlinks)
  * count `integer`
  * page `integer`
  * results `array`
    * items [DirectDebitConnectorPaymentResponse](#directdebitconnectorpaymentresponse)
  * total `integer`

### EmbeddedRefunds
* EmbeddedRefunds `object`
  * refunds `array`
    * items [Refund](#refund)

### ErrorResponse
* ErrorResponse `object`: An error response
  * code `string`
  * description `string`

### GetPaymentResult
* GetPaymentResult `object`
  * _links [PaymentLinks](#paymentlinks)
  * amount `integer`
  * card_brand `string`: Card Brand
  * card_details [CardDetails](#carddetails)
  * corporate_card_surcharge `integer`
  * created_date `string`
  * delayed_capture `boolean`: delayed capture flag
  * description `string`
  * email `string`
  * fee `integer`: processing fee taken by the GOV.UK Pay platform, in pence. Only available depending on payment service provider
  * language `string` (values: en, cy)
  * metadata `object`
  * moto `boolean`: Mail Order / Telephone Order (MOTO) payment flag
  * net_amount `integer`: amount including all surcharges and less all fees, in pence. Only available depending on payment service provider
  * payment_id `string`
  * payment_provider `string`
  * provider_id `string`
  * reference `string`
  * refund_summary [RefundSummary](#refundsummary)
  * return_url `string`
  * settlement_summary [PaymentSettlementSummary](#paymentsettlementsummary)
  * state [PaymentState](#paymentstate)
  * total_amount `integer`

### Link
* Link `object`: A link related to a payment
  * href `string`
  * method `string`

### MandateError
* MandateError `object`: A Mandate Error response
  * code `string`
  * description `string`
  * field `string`

### MandateLinks
* MandateLinks `object`: payment, events, self and next links of a Mandate
  * next_url [Link](#link)
  * next_url_post [PostLink](#postlink)
  * payments [Link](#link)
  * self [Link](#link)

### MandateResponse
* MandateResponse `object`
  * _links [MandateLinks](#mandatelinks)
  * bank_statement_reference `string`: This value comes from GoCardless when a mandate has been created.
  * created_date `string`: mandate created date
  * description `string`: description
  * mandate_id `string`: mandate id
  * payer [Payer](#payer)
  * payment_provider `string`: payment_provider
  * provider_id `string`: provider id
  * reference `string`: service reference
  * return_url `string`: service return url
  * state [MandateStatus](#mandatestatus)

### MandateStatus
* MandateStatus `object`
  * details `string`
  * status `string`

### Payer
* Payer `object`
  * email `string`
  * name `string`

### PaymentDetailForSearch
* PaymentDetailForSearch `object`
  * _links [PaymentLinksForSearch](#paymentlinksforsearch)
  * amount `integer`
  * card_brand `string`: Card Brand
  * card_details [CardDetails](#carddetails)
  * corporate_card_surcharge `integer`
  * created_date `string`
  * delayed_capture `boolean`: delayed capture flag
  * description `string`
  * email `string`
  * fee `integer`: processing fee taken by the GOV.UK Pay platform, in pence. Only available depending on payment service provider
  * language `string` (values: en, cy)
  * metadata `object`
  * moto `boolean`: Mail Order / Telephone Order (MOTO) payment flag
  * net_amount `integer`: amount including all surcharges and less all fees, in pence. Only available depending on payment service provider
  * payment_id `string`
  * payment_provider `string`
  * provider_id `string`
  * reference `string`
  * refund_summary [RefundSummary](#refundsummary)
  * return_url `string`
  * settlement_summary [PaymentSettlementSummary](#paymentsettlementsummary)
  * state [PaymentState](#paymentstate)
  * total_amount `integer`

### PaymentError
* PaymentError `object`: A Payment Error response
  * code `string`
  * description `string`
  * field `string`

### PaymentEvent
* PaymentEvent `object`: A List of Payment Events information
  * _links [PaymentEventLink](#paymenteventlink)
  * payment_id `string`
  * state [PaymentState](#paymentstate)
  * updated `string`: updated

### PaymentEventLink
* PaymentEventLink `object`: Resource link for a payment of a payment event
  * payment_url [Link](#link)

### PaymentEvents
* PaymentEvents `object`: A List of Payment Events information
  * _links [PaymentLinksForEvents](#paymentlinksforevents)
  * events `array`
    * items [PaymentEvent](#paymentevent)
  * payment_id `string`

### PaymentLinks
* PaymentLinks `object`: links for payment
  * cancel [PostLink](#postlink)
  * capture [PostLink](#postlink)
  * events [Link](#link)
  * next_url [Link](#link)
  * next_url_post [PostLink](#postlink)
  * refunds [Link](#link)
  * self [Link](#link)

### PaymentLinksForEvents
* PaymentLinksForEvents `object`: links for events resource
  * self [Link](#link)

### PaymentLinksForSearch
* PaymentLinksForSearch `object`: links for search payment resource
  * cancel [PostLink](#postlink)
  * capture [PostLink](#postlink)
  * events [Link](#link)
  * refunds [Link](#link)
  * self [Link](#link)

### PaymentRefundRequest
* PaymentRefundRequest `object`: The Payment Refund Request Payload
  * amount **required** `integer`: Amount in pence. Can't be more than the available amount for refunds
  * refund_amount_available `integer`: Amount in pence. Total amount still available before issuing the refund

### PaymentSearchResults
* PaymentSearchResults `object`
  * _links [SearchNavigationLinks](#searchnavigationlinks)
  * count `integer`
  * page `integer`
  * results `array`
    * items [PaymentDetailForSearch](#paymentdetailforsearch)
  * total `integer`

### PaymentSettlementSummary
* PaymentSettlementSummary `object`: A structure representing information about a settlement
  * capture_submit_time `string`: Date and time capture request has been submitted. May be null if capture request was not immediately acknowledged by payment gateway.
  * captured_date `string`: Date of the capture event.
  * settled_date `string`: The date that the transaction was paid into the service's account.

### PaymentState
* PaymentState `object`: A structure representing the current state of the payment in its lifecycle.
  * code `string`: What went wrong with the Payment if it finished with an error - error code
  * finished `boolean`: Whether the payment has finished
  * message `string`: What went wrong with the Payment if it finished with an error - English message
  * status `string`: Current progress of the payment in its lifecycle

### PostLink
* PostLink `object`: A POST link related to a payment
  * href `string`
  * method `string`
  * params `object`
  * type `string`

### PrefilledCardholderDetails
* PrefilledCardholderDetails `object`
  * billing_address [Address](#address)
  * cardholder_name `string`: prefilled cardholder name

### Refund
* Refund `object`
  * _links [RefundLinksForSearch](#refundlinksforsearch)
  * amount `integer`
  * created_date `string`
  * refund_id `string`
  * settlement_summary [RefundSettlementSummary](#refundsettlementsummary)
  * status `string` (values: submitted, success, error)

### RefundDetailForSearch
* RefundDetailForSearch `object`
  * _links [RefundLinksForSearch](#refundlinksforsearch)
  * amount `integer`
  * created_date `string`
  * refund_id `string`
  * settlement_summary [RefundSettlementSummary](#refundsettlementsummary)
  * status `string` (values: submitted, success, error)

### RefundError
* RefundError `object`: A Refund Error response
  * code `string`
  * description `string`
  * field `string`

### RefundForSearchResult
* RefundForSearchResult `object`
  * _embedded [EmbeddedRefunds](#embeddedrefunds)
  * _links [RefundLinksForSearch](#refundlinksforsearch)
  * payment_id `string`

### RefundLinksForSearch
* RefundLinksForSearch `object`: links for search refunds resource
  * payment [Link](#link)
  * self [Link](#link)

### RefundSearchResults
* RefundSearchResults `object`
  * _links [SearchNavigationLinks](#searchnavigationlinks)
  * count `integer`
  * page `integer`
  * results `array`
    * items [RefundDetailForSearch](#refunddetailforsearch)
  * total `integer`

### RefundSettlementSummary
* RefundSettlementSummary `object`: A structure representing information about a settlement for refunds
  * settled_date `string`: The date that the transaction was refunded from the service's account.

### RefundSummary
* RefundSummary `object`: A structure representing the refunds availability
  * amount_available `integer`: Amount available for refund in pence
  * amount_submitted `integer`: Amount submitted for refunds on this Payment in pence
  * status `string`: Availability status of the refund

### SearchMandateResponse
* SearchMandateResponse `object`
  * _links [SearchNavigationLinks](#searchnavigationlinks)
  * count `integer`
  * page `integer`
  * results `array`
    * items [MandateResponse](#mandateresponse)
  * total `integer`

### SearchNavigationLinks
* SearchNavigationLinks `object`: Links to navigate through pages
  * first_page [Link](#link)
  * last_page [Link](#link)
  * next_page [Link](#link)
  * prev_page [Link](#link)
  * self [Link](#link)


