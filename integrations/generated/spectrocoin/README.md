# @datafire/spectrocoin

Client library for SpectroCoin Merchant

## Installation and Usage
```bash
npm install --save @datafire/spectrocoin
```
```js
let spectrocoin = require('@datafire/spectrocoin').create();

spectrocoin.createOrder({}).then(data => {
  console.log(data);
});
```

## Description

This is an API designed for merchants who are using SpectroCoin services and wishes to integrate them locally.

## Actions

### createOrder
Create merchant order


```js
spectrocoin.createOrder({}, context)
```

#### Input
* input `object`
  * body [Order_request_class_used_to_provide_order_specific_information](#order_request_class_used_to_provide_order_specific_information)

#### Output
* output [Order_information_class](#order_information_class)



## Definitions

### Order_information_class
* Order_information_class `object`
  * depositAddress **required** `string`: Payment deposit address
  * orderId **required** `string`: Merchant provided or generated order id
  * orderRequestId **required** `integer`: Generated unique order request id
  * payAmount **required** `number`: Amount of payment currency to be paid by merchant customer
  * payCurrency **required** `string`: Currency to be paid with
  * receiveAmount **required** `number`: Amount of receive currency to be funded to merchant account
  * receiveCurrency **required** `string`: Currency to be funded to merchant account
  * redirectUrl **required** `string`: SpectroCoin payment window url where merchant customer may be redirected
  * validUntil **required** `integer`: Timestamp until when order is valid

### Order_request_class_used_to_provide_order_specific_information
* Order_request_class_used_to_provide_order_specific_information `object`
  * apiId **required** `integer`: API ID of specific API you have configured on your merchant account
  * callbackUrl `string`: Url of merchant endpoint callback about order status to be returned
  * culture `string` (values: en, lt, ru, de): Merchant customer culture payment window to be presented
  * description `string`: Order description. Will be presented for merchant customer at payment window
  * failureUrl `string`: Url of merchant page customer should be redirected after unsuccessful payment
  * merchantId **required** `integer`: Merchant ID assigned to your account
  * orderId `string`: Custom order ID. Must be unique per API. If not provided it will be generated.
  * payAmount `number`: Pay amount in pay currency of value which should be paid by merchant customer. If not provided receive amount will be used to calculate pay amount
  * payCurrency **required** `string`: Currency of pay amount
  * payerEmail `string`: Specified payer email.
  * payerName `string`: Specified payer name.
  * payerSurname `string`: Specified payer surname.
  * receiveAmount `number`: Receive amount in receive currency of value that merchant will be funded after merchant customers payment approval. If not provided pay amount will be used to calculate receive amount
  * receiveCurrency **required** `string`: Currency of receive amount
  * sign **required** `string`: Signature required for signing create order request
  * successUrl `string`: Url of merchant page customer should be redirected after successful payment


