# @datafire/payments_service_gov_uk_payments

Client library for GOV.UK Pay Api

## Installation and Usage
```bash
npm install --save @datafire/payments_service_gov_uk_payments
```
```js
let payments_service_gov_uk_payments = require('@datafire/payments_service_gov_uk_payments').create();

payments_service_gov_uk_payments.searchPayments({}).then(data => {
  console.log(data);
});
```

## Description

GOV.UK Pay Api

## Actions

### searchPayments
Search payments by reference, state, 'from' and 'to' date. The Authorisation token needs to be specified in the 'authorization' header as 'authorization: Bearer YOUR_API_KEY_HERE'


```js
payments_service_gov_uk_payments.searchPayments({}, context)
```

#### Input
* input `object`
  * reference `string`: Your payment reference to search
  * email `string`: The user email used in the payment to be searched
  * state `string` (values: range[created, started, submitted, success, failed, cancelled, error): State of payments to be searched. Example=success
  * card_brand `string`: Card brand used for payment. Example=master-card
  * from_date `string`: From date of payments to be searched (this date is inclusive). Example=2015-08-13T12:35:00Z
  * to_date `string`: To date of payments to be searched (this date is exclusive). Example=2015-08-14T12:35:00Z
  * page `string`: Page number requested for the search, should be a positive integer (optional, defaults to 1)
  * display_size `string`: Number of results to be shown per page, should be a positive integer (optional, defaults to 500, max 500)

#### Output
* output [PaymentSearchResults](#paymentsearchresults)

### newPayment
Create a new payment for the account associated to the Authorisation token. The Authorisation token needs to be specified in the 'authorization' header as 'authorization: Bearer YOUR_API_KEY_HERE'


```js
payments_service_gov_uk_payments.newPayment({
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
  * body **required** [CreatePaymentRequest](#createpaymentrequest)

#### Output
* output [PaymentWithAllLinks](#paymentwithalllinks)

### getPayment
Return information about the payment The Authorisation token needs to be specified in the 'authorization' header as 'authorization: Bearer YOUR_API_KEY_HERE'


```js
payments_service_gov_uk_payments.getPayment({
  "paymentId": ""
}, context)
```

#### Input
* input `object`
  * paymentId **required** `string`

#### Output
* output [PaymentWithAllLinks](#paymentwithalllinks)

### cancelPayment
Cancel a payment based on the provided payment ID and the Authorisation token. The Authorisation token needs to be specified in the 'authorization' header as 'authorization: Bearer YOUR_API_KEY_HERE'. A payment can only be cancelled if it's in a state that isn't finished.


```js
payments_service_gov_uk_payments.cancelPayment({
  "paymentId": ""
}, context)
```

#### Input
* input `object`
  * paymentId **required** `string`

#### Output
*Output schema unknown*

### getPaymentEvents
Return payment events information about a certain payment The Authorisation token needs to be specified in the 'authorization' header as 'authorization: Bearer YOUR_API_KEY_HERE'


```js
payments_service_gov_uk_payments.getPaymentEvents({
  "paymentId": ""
}, context)
```

#### Input
* input `object`
  * paymentId **required** `string`

#### Output
* output [PaymentEventsInformation](#paymenteventsinformation)

### getRefunds
Return refunds for a payment. The Authorisation token needs to be specified in the 'authorization' header as 'authorization: Bearer YOUR_API_KEY_HERE'


```js
payments_service_gov_uk_payments.getRefunds({
  "paymentId": ""
}, context)
```

#### Input
* input `object`
  * paymentId **required** `string`

#### Output
*Output schema unknown*

### submitRefund
Return issued refund information. The Authorisation token needs to be specified in the 'authorization' header as 'authorization: Bearer YOUR_API_KEY_HERE'


```js
payments_service_gov_uk_payments.submitRefund({
  "paymentId": "",
  "body": {
    "amount": 0
  }
}, context)
```

#### Input
* input `object`
  * paymentId **required** `string`: paymentId
  * body **required** [CreatePaymentRefundRequest](#createpaymentrefundrequest)

#### Output
*Output schema unknown*

### getRefundById
Return payment refund information by Refund ID The Authorisation token needs to be specified in the 'authorization' header as 'authorization: Bearer YOUR_API_KEY_HERE'


```js
payments_service_gov_uk_payments.getRefundById({
  "paymentId": "",
  "refundId": ""
}, context)
```

#### Input
* input `object`
  * paymentId **required** `string`
  * refundId **required** `string`

#### Output
*Output schema unknown*



## Definitions

### Billing Address


### Billing_Address
* Billing_Address `object`: A structure representing the billing address of a card
  * city `string`
  * country `string`
  * line1 `string`
  * line2 `string`
  * postcode `string`

### Card Payment


### Card_Payment
* Card_Payment
  * amount `integer`
  * created_date `string`
  * description `string`
  * email `string`
  * payment_id `string`
  * payment_provider `string`
  * reference `string`
  * return_url `string`
  * state [Payment%20state](#payment%20state)
  * card_brand `string`: Card Brand
  * card_details [Payment%20card%20details](#payment%20card%20details)
  * refund_summary [Refund%20Summary](#refund%20summary)
  * settlement_summary [Settlement%20Summary](#settlement%20summary)

### CreatePaymentRefundRequest
* CreatePaymentRefundRequest `object`: The Payment Refund Request Payload
  * amount **required** `integer`: Amount in pence. Can't be more than the available amount for refunds
  * refund_amount_available `integer`: Amount in pence. Total amount still available before issuing the refund

### CreatePaymentRequest
* CreatePaymentRequest `object`: The Payment Request Payload
  * amount **required** `integer`: amount in pence
  * description **required** `string`: payment description
  * reference **required** `string`: payment reference
  * return_url **required** `string`: service return url

### Direct_Debit_Payment
* Direct_Debit_Payment
  * amount `integer`
  * created_date `string`
  * description `string`
  * email `string`
  * payment_id `string`
  * payment_provider `string`
  * reference `string`
  * return_url `string`
  * state [Payment%20state](#payment%20state)

### Payment
* Payment `object`
  * amount `integer`
  * created_date `string`
  * description `string`
  * email `string`
  * payment_id `string`
  * payment_provider `string`
  * reference `string`
  * return_url `string`
  * state [Payment%20state](#payment%20state)

### Payment Error


### Payment Event information


### Payment card details


### Payment state


### PaymentEventsInformation
* PaymentEventsInformation `object`: A List of Payment Events information
  * _links [linksForEvents](#linksforevents)
  * events `array`
    * items [Payment%20Event%20information](#payment%20event%20information)
  * payment_id `string`

### PaymentSearchResults
* PaymentSearchResults `object`
  * results `array`
    * items [Card%20Payment](#card%20payment)

### PaymentWithAllLinks
* PaymentWithAllLinks `object`
  * _links [allLinksForAPayment](#alllinksforapayment)
  * payment [Payment](#payment)

### Payment_Error
* Payment_Error `object`: A Payment Error response
  * code `string`
  * description `string`
  * field `string`

### Payment_Event_information
* Payment_Event_information `object`: A List of Payment Events information
  * _links [payment-event-link](#payment-event-link)
  * payment_id `string`
  * state [Payment%20state](#payment%20state)
  * updated `string`: updated

### Payment_card_details
* Payment_card_details `object`: A structure representing the payment card
  * billing_address [Billing%20Address](#billing%20address)
  * card_brand `string`
  * cardholder_name `string`
  * expiry_date `string`
  * last_digits_card_number `string`

### Payment_state
* Payment_state `object`: A structure representing the current state of the payment in its lifecycle.
  * code **required** `string`: What went wrong with the Payment if it finished with an error - error code
  * finished **required** `boolean`: Whether the payment has finished
  * message **required** `string`: What went wrong with the Payment if it finished with an error - English message
  * status **required** `string`: Current progress of the payment in its lifecycle

### Refund Summary


### Refund_Summary
* Refund_Summary `object`: A structure representing the refunds availability
  * amount_available `integer`: Amount available for refund in pence
  * amount_submitted `integer`: Amount submitted for refunds on this Payment in pence
  * status `string`: Availability status of the refund

### Settlement Summary


### Settlement_Summary
* Settlement_Summary `object`: A structure representing information about a settlement
  * capture_submit_time `string`: Date and time capture request has been submitted (may be null if capture request was not immediately acknowledged by payment gateway)
  * captured_date `string`: Date of the capture event

### allLinksForAPayment
* allLinksForAPayment `object`: self,events and next links of a Payment
  * cancel [paymentPOSTLink](#paymentpostlink)
  * events [paymentLink](#paymentlink)
  * next_url [paymentLink](#paymentlink)
  * next_url_post [paymentPOSTLink](#paymentpostlink)
  * refunds [paymentLink](#paymentlink)
  * self [paymentLink](#paymentlink)

### linksForEvents
* linksForEvents `object`: links for events resource
  * self [paymentLink](#paymentlink)

### linksForSearchResults
* linksForSearchResults `object`: links for search payment resource
  * cancel [paymentPOSTLink](#paymentpostlink)
  * events [paymentLink](#paymentlink)
  * refunds [paymentLink](#paymentlink)
  * self [paymentLink](#paymentlink)

### payment-event-link
* payment-event-link `object`: Resource link for a payment of a payment event
  * payment_url [paymentLink](#paymentlink)

### paymentLink
* paymentLink `object`: A link related to a payment
  * href `string`
  * method `string`

### paymentPOSTLink
* paymentPOSTLink `object`: A POST link related to a payment
  * href `string`
  * method `string`
  * params `object`
  * type `string`


