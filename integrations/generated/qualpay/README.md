# @datafire/qualpay

Client library for Qualpay Payment Gateway API

## Installation and Usage
```bash
npm install --save @datafire/qualpay
```
```js
let qualpay = require('@datafire/qualpay').create({
  username: "",
  password: ""
});

.then(data => {
  console.log(data);
});
```

## Description

This document describes the Qualpay Payment Gateway API.

## Actions

### ardef.post
Gets Card type information for Visa, Mastercard, and Discover. Useful if you prohibit or allow certain activity based on card type. For example, you may not want to allow a subscription to be created using a prepaid card.


```js
qualpay.ardef.post({
  "body": {
    "card_number": "",
    "merchant_id": 0
  }
}, context)
```

#### Input
* input `object`
  * body **required** [ArdefRequest](#ardefrequest)

#### Output
* output [ArdefResponse](#ardefresponse)

### Authorization
Authorizes a credit card for capture at a later time. An authorized transaction will continue to be open until it expires or a capture message is received. Authorizations are automatically voided if they are not captured within 28 days, although most issuing banks will release the hold after 24 hours in retail environments or 7 days in card not present environments.


```js
qualpay.Authorization({
  "body": {
    "merchant_id": 0
  }
}, context)
```

#### Input
* input `object`
  * body **required** [PGApiTransactionRequest](#pgapitransactionrequest)

#### Output
* output [PGApiTransactionResponse](#pgapitransactionresponse)

### batchClose.post
Closes a batch. Use this request when the timing of the batch close needs to be controlled rather than relying on the once-daily automatic batch close which is 9 PM Pacific by default, and can be changed in the Qualpay Manager administration settings.


```js
qualpay.batchClose.post({
  "body": {
    "merchant_id": 0
  }
}, context)
```

#### Input
* input `object`
  * body **required** [PGApiBatchCloseRequest](#pgapibatchcloserequest)

#### Output
* output [PGApiBatchCloseResponse](#pgapibatchcloseresponse)

### Capture
Captures an authorized transaction for any amount up to the amount originally authorized. An authorized transaction can only be captured once.


```js
qualpay.Capture({
  "pgIdOrig": "",
  "body": {
    "amt_tran": 0,
    "merchant_id": 0
  }
}, context)
```

#### Input
* input `object`
  * pgIdOrig **required** `string`: pgIdOrig
  * body **required** [PGApiCaptureRequest](#pgapicapturerequest)

#### Output
* output [PGApiCaptureResponse](#pgapicaptureresponse)

### Credit
Issues an unlinked credit. Credit requests require that the cardholder data is  provided in the request. Credits are only available during the first 30 days of account opening unless you contact Qualpay support to make other arrangements. The refund request should generally be used to return money to the cardholder, as it is a reversal of a previously captured transaction. A refund request is linked to the original transaction which is helpful for reconciliation purposes.


```js
qualpay.Credit({
  "body": {
    "merchant_id": 0
  }
}, context)
```

#### Input
* input `object`
  * body **required** [PGApiTransactionRequest](#pgapitransactionrequest)

#### Output
* output [PGApiTransactionResponse](#pgapitransactionresponse)

### emailReceipt.pgId.post
Sends the transaction receipt to multiple email addresses. Receipts can be sent only for successful transactions.


```js
qualpay.emailReceipt.pgId.post({
  "pgId": "",
  "body": {
    "email_address": [],
    "merchant_id": 0
  }
}, context)
```

#### Input
* input `object`
  * pgId **required** `string`: pgId
  * body **required** [PGApiEmailReceiptRequest](#pgapiemailreceiptrequest)

#### Output
* output [PGApiEmailReceiptResponse](#pgapiemailreceiptresponse)

### Expire
Once expired, the token (card_id) is no longer valid for use in future transactions.


```js
qualpay.Expire({
  "body": {
    "card_id": "",
    "merchant_id": 0
  }
}, context)
```

#### Input
* input `object`
  * body **required** [PGApiExpireTokenRequest](#pgapiexpiretokenrequest)

#### Output
* output [PGApiExpireTokenResponse](#pgapiexpiretokenresponse)

### Force
Forces an approval, used when an online authorization request received a 'declined' reason code and you have received an authorization from a voice or automated response (ARU) system. The required fields are the same as a sale or authorization request, except that the expiration date (exp_date) is not required, and the 6-character authorization code (auth_code) is required.


```js
qualpay.Force({
  "body": {
    "merchant_id": 0
  }
}, context)
```

#### Input
* input `object`
  * body **required** [PGApiTransactionRequest](#pgapitransactionrequest)

#### Output
* output [PGApiTransactionResponse](#pgapitransactionresponse)

### Recharge
Creates a new sale transaction using the cardholder data from a previous successful transaction.


```js
qualpay.Recharge({
  "pgIdOrig": "",
  "body": {
    "amt_tran": 0,
    "merchant_id": 0
  }
}, context)
```

#### Input
* input `object`
  * pgIdOrig **required** `string`: pgIdOrig
  * body **required** [PGApiRechargeRequest](#pgapirechargerequest)

#### Output
* output [PGApiRechargeResponse](#pgapirechargeresponse)

### Refund
Returns money to the cardholder from a previously captured transaction. Multiple refunds are allowed per captured transaction, provided that the sum of all refunds does not exceed the original captured transaction amount. Authorizations that have not been captured are not eligible for a refund.


```js
qualpay.Refund({
  "pgIdOrig": "",
  "body": {
    "amt_tran": 0,
    "merchant_id": 0
  }
}, context)
```

#### Input
* input `object`
  * pgIdOrig **required** `string`: pgIdOrig
  * body **required** [PGApiRefundRequest](#pgapirefundrequest)

#### Output
* output [PGApiRefundResponse](#pgapirefundresponse)

### Sale
Requests authorization, and, if approved, will immediately capture the transaction to be included in the next batch close. This transaction type is used in card-present environments, and also card-not-present environments where no physical goods are being shipped.


```js
qualpay.Sale({
  "body": {
    "merchant_id": 0
  }
}, context)
```

#### Input
* input `object`
  * body **required** [PGApiTransactionRequest](#pgapitransactionrequest)

#### Output
* output [PGApiTransactionResponse](#pgapitransactionresponse)

### Tokenize
Once stored, a unique card_id is returned for use in future transactions. Optionally, tokenization can be requested in an authorization, verify, force, credit, or sale request by sending the tokenize field set to true.


```js
qualpay.Tokenize({
  "body": {
    "exp_date": "",
    "merchant_id": 0
  }
}, context)
```

#### Input
* input `object`
  * body **required** [PGApiTokenizeRequest](#pgapitokenizerequest)

#### Output
* output [PGApiTokenizeResponse](#pgapitokenizeresponse)

### Verify
A verify request will return success if the cardholder information was verified by the issuer. If AVS or CVV data is included in the message, then the AVS or CVV result code will be returned in the response message. This is useful if you want to determine if you have been presented with a valid card, but are not ready to authorize the card.


```js
qualpay.Verify({
  "body": {
    "card_number": "",
    "merchant_id": 0
  }
}, context)
```

#### Input
* input `object`
  * body **required** [PGApiVerifyRequest](#pgapiverifyrequest)

#### Output
* output [PGApiVerifyResponse](#pgapiverifyresponse)

### Void
Authorizations can be voided at any time until Qualpay automatically voids them at 28 days. Captured transactions can be voided until the batch is closed. If your batch closes and you did not void the transaction in time, you may make a refund request.


```js
qualpay.Void({
  "pgIdOrig": "",
  "body": {
    "merchant_id": 0
  }
}, context)
```

#### Input
* input `object`
  * pgIdOrig **required** `string`: pgIdOrig
  * body **required** [PGApiVoidRequest](#pgapivoidrequest)

#### Output
* output [PGApiVoidResponse](#pgapivoidresponse)



## Definitions

### ArdefRequest
* ArdefRequest `object`
  * card_number **required** `string`: <strong>Format: </strong>Variable length, up to 19 N<br><strong>Description: </strong>Cardholder's card number.
  * merchant_id **required** `integer`: <strong>Format: </strong>Variable length, up to 12 N<br><strong>Description: </strong>Unique identifier on the Qualpay system.

### ArdefResponse
* ArdefResponse `object`
  * funding_source `string`: <strong>Format: </strong>Fixed length, 1 AN<br><strong>Description: </strong>Funding type for a card type request submitted.<ul><li> C - Credit</li><li> D - Debit</li><li>P - Prepaid</li></ul>
  * ind_comm_level2 `string`: <strong>Format: </strong>Fixed length, 1 AN<br><strong>Description: </strong>This field will be set to Y for Level 2 purchasing cards.
  * ind_comm_level3 `string`: <strong>Format: </strong>Fixed length, 1 AN<br><strong>Description: </strong>This field will be set to Y for Level 3 purchasing cards.
  * issuer_country `string`: <strong>Format: </strong>Fixed length, 2 AN<br><strong>Description: </strong>Issuer Country for a card type request submitted.
  * pg_id `string`: <strong>Format: </strong>Fixed length, 32 AN<br><strong>Description: </strong>32-byte unique identifier generated by the payment gateway, returned in all valid responses.
  * rcode `string`: <strong>Format: </strong>Fixed length, 3 AN<br><strong>Description: </strong>Response code from the payment gateway. "000" indicates success. Refer to <a href="/developer/api/reference#api-response-codes"target="_blank">Platform API Response Codes</a> for entire list of Payment Gateway Response Codes.
  * rmsg `string`: <strong>Format: </strong>Variable length<br><strong>Description: </strong>Response text from the payment gateway.

### Customer
* Customer `object`
  * billing_addr1 `string`: <strong>Format: </strong>Variable length<br><strong>Description: </strong>Customer billing address street.
  * billing_addr2 `string`: <strong>Format: </strong>Variable length<br><strong>Description: </strong>Customer billing address, line 2.
  * billing_city `string`: <strong>Format: </strong>Variable length<br><strong>Description: </strong>Customer billing city.
  * billing_country `string`: <strong>Format: </strong>Variable length<br><strong>Description: </strong>Customer billing country.
  * billing_country_code `string`: <strong>Format: </strong>Fixed length, 3 N<br><strong>Description: </strong>ISO numeric country code for the billing address. Refer to <a href="/developer/api/reference#country-codes"target="_blank">Country Codes</a> for a list of country codes.
  * billing_state `string`: <strong>Format: </strong>Variable length<br><strong>Description: </strong>Customer billing state (abbreviated).
  * billing_zip `string`: <strong>Format: </strong>Variable length<br><strong>Description: </strong>Customer billing zip code.
  * billing_zip4 `string`: <strong>Format: </strong>Fixed length, 4 N<br><strong>Description: </strong>Customer billing zip+4 code if applicable.
  * customer_email `string`: <strong>Format: </strong>Variable length, up to 64 AN<br><strong>Description: </strong>Customer e-mail address.
  * customer_firm_name `string`: <strong>Format: </strong>Variable length, up to 64 AN<br><strong>Description: </strong>Customer Business name if applicable.<br><strong>Conditional Requirement: </strong>Either customer first and last name or firm name is required. 
  * customer_first_name `string`: <strong>Format: </strong>Variable length, up to 32 AN<br><strong>Description: </strong>Customer first name.<br><strong>Conditional Requirement: </strong>Either customer first and last name or firm name is required. 
  * customer_last_name `string`: <strong>Format: </strong>Variable length, up to 32 AN<br><strong>Description: </strong>Customer last name.<br><strong>Conditional Requirement: </strong>Either customer first and last name or firm name is required. 
  * customer_phone `string`: <strong>Format: </strong>Variable length, up to 16 N<br><strong>Description: </strong>Customer phone number.
  * shipping_addresses `array`: List of shipping addresses for customer.
    * items [ShippingAddress](#shippingaddress)

### PGApiBadResponse
* PGApiBadResponse `object`
  * echo_fields `string`: <strong>Format: </strong>Variable length<br><strong>Description: </strong>Data that was provided in echo_fields in the request.
  * pg_id `string`: <strong>Format: </strong>Fixed length, 32 AN<br><strong>Description: </strong>32-byte unique identifier generated by the payment gateway, returned in all valid responses.
  * rcode `string`: <strong>Format: </strong>Fixed length, 3 AN<br><strong>Description: </strong>Response code from the payment gateway. "000" indicates success. Refer to <a href="/developer/api/reference#api-response-codes"target="_blank">Platform API Response Codes</a> for entire list of Payment Gateway Response Codes.
  * rmsg `string`: <strong>Format: </strong>Variable length<br><strong>Description: </strong>Response text from the payment gateway.

### PGApiBatchCloseRequest
* PGApiBatchCloseRequest `object`
  * developer_id `string`: <strong>Format: </strong>Variable length, up to 32 AN<br><strong>Description: </strong>Use to indicate which company developed the integration to Qualpay or the name of the payment solution that is connected to Qualpay.  Suggested usage is softwareABCv1.0 or companyXYZv2.0.
  * echo_fields `string`: <strong>Format: </strong>Variable length<br><strong>Description: </strong>This field contains a JSON array of field data that will be echoed back in the response message.
  * loc_id `string`: <strong>Format: </strong>Variable length, up to 4 N<br><strong>Description: </strong>When a merchant has more than one location using the same currency, this value is used to specify the specific location for this request.
  * merchant_id **required** `integer`: <strong>Format: </strong>Variable length, up to 12 N<br><strong>Description: </strong>Unique identifier on the Qualpay system.
  * profile_id `string`: <strong>Format: </strong>Fixed length, 20 N<br><strong>Description: </strong>Explicitly identifies which Payment Gateway profile should be used for the request.
  * report_data `string`: <strong>Format: </strong>Variable length<br><strong>Description: </strong>This field contains a JSON array of field data that will be included with the transaction data reported in Qualpay Manager.
  * retry_attempt `integer`: <strong>Format: </strong>Variable length, up to 4 N<br><strong>Description: </strong>This field contains a number greater than zero (0). When the value is one (1), the payment gateway treats the message as a new message. If the value is greater than one (1), then the payment gateway will return the result of the original message. If the original message did not complete, the payment gateway treats the message as a new message.<br><strong>Conditional Requirement: </strong>This field is required when the retry_id is present in the request message.
  * retry_id `integer`: <strong>Format: </strong>Variable length, up to 15 N<br><strong>Description: </strong>This field contains a merchant generated number used to identify the request. This value must be unique within the last 24 hours. When present, the payment gateway will use the retry_attempt to determine whether the message is new or a retry of a previous message.
  * session_id `string`: INTERNAL USE ONLY.
  * tran_currency `integer`: <strong>Format: </strong>Variable length, up to 3 N<br><strong>Default: </strong>840<br><strong>Description: </strong>ISO numeric currency code for the transaction. Refer to <a href="/developer/api/reference#country-codes"target="_blank">Country Codes</a> for a list of currency codes.
  * user_id `integer`: INTERNAL USE ONLY.

### PGApiBatchCloseResponse
* PGApiBatchCloseResponse `object`
  * batch_info `string`: <strong>Format: </strong>Variable length<br><strong>Description: </strong>JSON array of JSON objects containing the batch close results by currency and location.
  * echo_fields `string`: <strong>Format: </strong>Variable length<br><strong>Description: </strong>Data that was provided in echo_fields in the request.
  * pg_id `string`: <strong>Format: </strong>Fixed length, 32 AN<br><strong>Description: </strong>32-byte unique identifier generated by the payment gateway, returned in all valid responses.
  * rcode `string`: <strong>Format: </strong>Fixed length, 3 AN<br><strong>Description: </strong>Response code from the payment gateway. "000" indicates success. Refer to <a href="/developer/api/reference#api-response-codes"target="_blank">Platform API Response Codes</a> for entire list of Payment Gateway Response Codes.
  * rmsg `string`: <strong>Format: </strong>Variable length<br><strong>Description: </strong>Response text from the payment gateway.

### PGApiCaptureRequest
* PGApiCaptureRequest `object`
  * amt_tran **required** `number`: <strong>Format: </strong>Variable length, up to 12,2 N<br><strong>Description: </strong>Total amount to capture. The amount must be less than or equal to the authorized amount.
  * developer_id `string`: <strong>Format: </strong>Variable length, up to 32 AN<br><strong>Description: </strong>Use to indicate which company developed the integration to Qualpay or the name of the payment solution that is connected to Qualpay.  Suggested usage is softwareABCv1.0 or companyXYZv2.0.
  * echo_fields `string`: <strong>Format: </strong>Variable length<br><strong>Description: </strong>This field contains a JSON array of field data that will be echoed back in the response message.
  * loc_id `string`: <strong>Format: </strong>Variable length, up to 4 N<br><strong>Description: </strong>When a merchant has more than one location using the same currency, this value is used to specify the specific location for this request.
  * merchant_id **required** `integer`: <strong>Format: </strong>Variable length, up to 12 N<br><strong>Description: </strong>Unique identifier on the Qualpay system.
  * profile_id `string`: <strong>Format: </strong>Fixed length, 20 N<br><strong>Description: </strong>Explicitly identifies which Payment Gateway profile should be used for the request.
  * report_data `string`: <strong>Format: </strong>Variable length<br><strong>Description: </strong>This field contains a JSON array of field data that will be included with the transaction data reported in Qualpay Manager.
  * retry_attempt `integer`: <strong>Format: </strong>Variable length, up to 4 N<br><strong>Description: </strong>This field contains a number greater than zero (0). When the value is one (1), the payment gateway treats the message as a new message. If the value is greater than one (1), then the payment gateway will return the result of the original message. If the original message did not complete, the payment gateway treats the message as a new message.<br><strong>Conditional Requirement: </strong>This field is required when the retry_id is present in the request message.
  * retry_id `integer`: <strong>Format: </strong>Variable length, up to 15 N<br><strong>Description: </strong>This field contains a merchant generated number used to identify the request. This value must be unique within the last 24 hours. When present, the payment gateway will use the retry_attempt to determine whether the message is new or a retry of a previous message.
  * session_id `string`: INTERNAL USE ONLY.
  * user_id `integer`: INTERNAL USE ONLY.
  * vendor_id `integer`: <strong>Format: </strong>Variable length, up to 12 N<br><strong>Description: </strong>Identifies the vendor to which this capture request applies.

### PGApiCaptureResponse
* PGApiCaptureResponse `object`
  * echo_fields `string`: <strong>Format: </strong>Variable length<br><strong>Description: </strong>Data that was provided in echo_fields in the request.
  * pg_id `string`: <strong>Format: </strong>Fixed length, 32 AN<br><strong>Description: </strong>32-byte unique identifier generated by the payment gateway, returned in all valid responses.
  * rcode `string`: <strong>Format: </strong>Fixed length, 3 AN<br><strong>Description: </strong>Response code from the payment gateway. "000" indicates success. Refer to <a href="/developer/api/reference#api-response-codes"target="_blank">Platform API Response Codes</a> for entire list of Payment Gateway Response Codes.
  * rmsg `string`: <strong>Format: </strong>Variable length<br><strong>Description: </strong>Response text from the payment gateway.

### PGApiDeclineResponse
* PGApiDeclineResponse `object`
  * echo_fields `string`: <strong>Format: </strong>Variable length<br><strong>Description: </strong>Data that was provided in echo_fields in the request.
  * pg_id `string`: <strong>Format: </strong>Fixed length, 32 AN<br><strong>Description: </strong>32-byte unique identifier generated by the payment gateway, returned in all valid responses.
  * rcode `string`: <strong>Format: </strong>Fixed length, 3 AN<br><strong>Description: </strong>Response code from the payment gateway. "000" indicates success. Refer to <a href="/developer/api/reference#api-response-codes"target="_blank">Platform API Response Codes</a> for entire list of Payment Gateway Response Codes.
  * rmsg `string`: <strong>Format: </strong>Variable length<br><strong>Description: </strong>Response text from the payment gateway.

### PGApiEmailReceiptRequest
* PGApiEmailReceiptRequest `object`
  * developer_id `string`: <strong>Format: </strong>Variable length, up to 32 AN<br><strong>Description: </strong>Use to indicate which company developed the integration to Qualpay or the name of the payment solution that is connected to Qualpay.  Suggested usage is softwareABCv1.0 or companyXYZv2.0.
  * email_address **required** `array`:  AN<br><strong>Description: </strong>An array of email addresses to which the transaction receipt should be sent to. 
    * items `string`
  * logo_url `string`:  AN<br><strong>Description: </strong>A link to the logo image that will be included in the transaction receipt. 
  * merchant_id **required** `integer`: <strong>Format: </strong>Variable length, up to 12 N<br><strong>Description: </strong>Unique identifier on the Qualpay system.
  * vendor_id `integer`: <strong>Format: </strong>Variable length, up to 12 N<br><strong>Description: </strong>Identifies the vendor to which this email receipt request applies.

### PGApiEmailReceiptResponse
* PGApiEmailReceiptResponse `object`
  * pg_id `string`: <strong>Format: </strong>Fixed length, 32 AN<br><strong>Description: </strong>32-byte unique identifier generated by the payment gateway, returned in all valid responses.
  * rcode `string`: <strong>Format: </strong>Fixed length, 3 AN<br><strong>Description: </strong>Response code from the payment gateway. "000" indicates success. Refer to <a href="/developer/api/reference#api-response-codes"target="_blank">Platform API Response Codes</a> for entire list of Payment Gateway Response Codes.
  * rmsg `string`: <strong>Format: </strong>Variable length<br><strong>Description: </strong>Response text from the payment gateway.

### PGApiExpireTokenRequest
* PGApiExpireTokenRequest `object`
  * card_id **required** `string`: <strong>Format: </strong>Fixed length, 32 AN<br><strong>Description: </strong>Card ID received from a tokenization request.
  * developer_id `string`: <strong>Format: </strong>Variable length, up to 32 AN<br><strong>Description: </strong>Use to indicate which company developed the integration to Qualpay or the name of the payment solution that is connected to Qualpay.  Suggested usage is softwareABCv1.0 or companyXYZv2.0.
  * echo_fields `string`: <strong>Format: </strong>Variable length<br><strong>Description: </strong>This field contains a JSON array of field data that will be echoed back in the response message.
  * loc_id `string`: <strong>Format: </strong>Variable length, up to 4 N<br><strong>Description: </strong>When a merchant has more than one location using the same currency, this value is used to specify the specific location for this request.
  * merchant_id **required** `integer`: <strong>Format: </strong>Variable length, up to 12 N<br><strong>Description: </strong>Unique identifier on the Qualpay system.
  * profile_id `string`: <strong>Format: </strong>Fixed length, 20 N<br><strong>Description: </strong>Explicitly identifies which Payment Gateway profile should be used for the request.
  * report_data `string`: <strong>Format: </strong>Variable length<br><strong>Description: </strong>This field contains a JSON array of field data that will be included with the transaction data reported in Qualpay Manager.
  * retry_attempt `integer`: <strong>Format: </strong>Variable length, up to 4 N<br><strong>Description: </strong>This field contains a number greater than zero (0). When the value is one (1), the payment gateway treats the message as a new message. If the value is greater than one (1), then the payment gateway will return the result of the original message. If the original message did not complete, the payment gateway treats the message as a new message.<br><strong>Conditional Requirement: </strong>This field is required when the retry_id is present in the request message.
  * retry_id `integer`: <strong>Format: </strong>Variable length, up to 15 N<br><strong>Description: </strong>This field contains a merchant generated number used to identify the request. This value must be unique within the last 24 hours. When present, the payment gateway will use the retry_attempt to determine whether the message is new or a retry of a previous message.
  * session_id `string`: INTERNAL USE ONLY.
  * user_id `integer`: INTERNAL USE ONLY.

### PGApiExpireTokenResponse
* PGApiExpireTokenResponse `object`
  * echo_fields `string`: <strong>Format: </strong>Variable length<br><strong>Description: </strong>Data that was provided in echo_fields in the request.
  * pg_id `string`: <strong>Format: </strong>Fixed length, 32 AN<br><strong>Description: </strong>32-byte unique identifier generated by the payment gateway, returned in all valid responses.
  * rcode `string`: <strong>Format: </strong>Fixed length, 3 AN<br><strong>Description: </strong>Response code from the payment gateway. "000" indicates success. Refer to <a href="/developer/api/reference#api-response-codes"target="_blank">Platform API Response Codes</a> for entire list of Payment Gateway Response Codes.
  * rmsg `string`: <strong>Format: </strong>Variable length<br><strong>Description: </strong>Response text from the payment gateway.

### PGApiInternalErrorResponse
* PGApiInternalErrorResponse `object`
  * echo_fields `string`: <strong>Format: </strong>Variable length<br><strong>Description: </strong>Data that was provided in echo_fields in the request.
  * pg_id `string`: <strong>Format: </strong>Fixed length, 32 AN<br><strong>Description: </strong>32-byte unique identifier generated by the payment gateway, returned in all valid responses.
  * rcode `string`: <strong>Format: </strong>Fixed length, 3 AN<br><strong>Description: </strong>Response code from the payment gateway. "000" indicates success. Refer to <a href="/developer/api/reference#api-response-codes"target="_blank">Platform API Response Codes</a> for entire list of Payment Gateway Response Codes.
  * rmsg `string`: <strong>Format: </strong>Variable length<br><strong>Description: </strong>Response text from the payment gateway.

### PGApiRechargeRequest
* PGApiRechargeRequest `object`
  * amt_tran **required** `number`: <strong>Format: </strong>Variable length, up to 12,2 N<br><strong>Description: </strong>Amount to recharge using the payment data from a previous transaction.
  * developer_id `string`: <strong>Format: </strong>Variable length, up to 32 AN<br><strong>Description: </strong>Use to indicate which company developed the integration to Qualpay or the name of the payment solution that is connected to Qualpay.  Suggested usage is softwareABCv1.0 or companyXYZv2.0.
  * echo_fields `string`: <strong>Format: </strong>Variable length<br><strong>Description: </strong>This field contains a JSON array of field data that will be echoed back in the response message.
  * loc_id `string`: <strong>Format: </strong>Variable length, up to 4 N<br><strong>Description: </strong>When a merchant has more than one location using the same currency, this value is used to specify the specific location for this request.
  * merchant_id **required** `integer`: <strong>Format: </strong>Variable length, up to 12 N<br><strong>Description: </strong>Unique identifier on the Qualpay system.
  * profile_id `string`: <strong>Format: </strong>Fixed length, 20 N<br><strong>Description: </strong>Explicitly identifies which Payment Gateway profile should be used for the request.
  * report_data `string`: <strong>Format: </strong>Variable length<br><strong>Description: </strong>This field contains a JSON array of field data that will be included with the transaction data reported in Qualpay Manager.
  * retry_attempt `integer`: <strong>Format: </strong>Variable length, up to 4 N<br><strong>Description: </strong>This field contains a number greater than zero (0). When the value is one (1), the payment gateway treats the message as a new message. If the value is greater than one (1), then the payment gateway will return the result of the original message. If the original message did not complete, the payment gateway treats the message as a new message.<br><strong>Conditional Requirement: </strong>This field is required when the retry_id is present in the request message.
  * retry_id `integer`: <strong>Format: </strong>Variable length, up to 15 N<br><strong>Description: </strong>This field contains a merchant generated number used to identify the request. This value must be unique within the last 24 hours. When present, the payment gateway will use the retry_attempt to determine whether the message is new or a retry of a previous message.
  * session_id `string`: INTERNAL USE ONLY.
  * user_id `integer`: INTERNAL USE ONLY.

### PGApiRechargeResponse
* PGApiRechargeResponse `object`
  * echo_fields `string`: <strong>Format: </strong>Variable length<br><strong>Description: </strong>Data that was provided in echo_fields in the request.
  * pg_id `string`: <strong>Format: </strong>Fixed length, 32 AN<br><strong>Description: </strong>32-byte unique identifier generated by the payment gateway, returned in all valid responses.
  * rcode `string`: <strong>Format: </strong>Fixed length, 3 AN<br><strong>Description: </strong>Response code from the payment gateway. "000" indicates success. Refer to <a href="/developer/api/reference#api-response-codes"target="_blank">Platform API Response Codes</a> for entire list of Payment Gateway Response Codes.
  * rmsg `string`: <strong>Format: </strong>Variable length<br><strong>Description: </strong>Response text from the payment gateway.

### PGApiRefundRequest
* PGApiRefundRequest `object`
  * amt_tran **required** `number`: <strong>Format: </strong>Variable length, up to 12,2 N<br><strong>Description: </strong>Total amount to refund. Partial refunds are allowed by providing an amount in this field that is less than the total original transaction amount.
  * developer_id `string`: <strong>Format: </strong>Variable length, up to 32 AN<br><strong>Description: </strong>Use to indicate which company developed the integration to Qualpay or the name of the payment solution that is connected to Qualpay.  Suggested usage is softwareABCv1.0 or companyXYZv2.0.
  * echo_fields `string`: <strong>Format: </strong>Variable length<br><strong>Description: </strong>This field contains a JSON array of field data that will be echoed back in the response message.
  * loc_id `string`: <strong>Format: </strong>Variable length, up to 4 N<br><strong>Description: </strong>When a merchant has more than one location using the same currency, this value is used to specify the specific location for this request.
  * merchant_id **required** `integer`: <strong>Format: </strong>Variable length, up to 12 N<br><strong>Description: </strong>Unique identifier on the Qualpay system.
  * profile_id `string`: <strong>Format: </strong>Fixed length, 20 N<br><strong>Description: </strong>Explicitly identifies which Payment Gateway profile should be used for the request.
  * report_data `string`: <strong>Format: </strong>Variable length<br><strong>Description: </strong>This field contains a JSON array of field data that will be included with the transaction data reported in Qualpay Manager.
  * retry_attempt `integer`: <strong>Format: </strong>Variable length, up to 4 N<br><strong>Description: </strong>This field contains a number greater than zero (0). When the value is one (1), the payment gateway treats the message as a new message. If the value is greater than one (1), then the payment gateway will return the result of the original message. If the original message did not complete, the payment gateway treats the message as a new message.<br><strong>Conditional Requirement: </strong>This field is required when the retry_id is present in the request message.
  * retry_id `integer`: <strong>Format: </strong>Variable length, up to 15 N<br><strong>Description: </strong>This field contains a merchant generated number used to identify the request. This value must be unique within the last 24 hours. When present, the payment gateway will use the retry_attempt to determine whether the message is new or a retry of a previous message.
  * session_id `string`: INTERNAL USE ONLY.
  * user_id `integer`: INTERNAL USE ONLY.
  * vendor_id `integer`: <strong>Format: </strong>Variable length, up to 12 N<br><strong>Description: </strong>Identifies the vendor to which this refund request applies.

### PGApiRefundResponse
* PGApiRefundResponse `object`
  * echo_fields `string`: <strong>Format: </strong>Variable length<br><strong>Description: </strong>Data that was provided in echo_fields in the request.
  * pg_id `string`: <strong>Format: </strong>Fixed length, 32 AN<br><strong>Description: </strong>32-byte unique identifier generated by the payment gateway, returned in all valid responses.
  * rcode `string`: <strong>Format: </strong>Fixed length, 3 AN<br><strong>Description: </strong>Response code from the payment gateway. "000" indicates success. Refer to <a href="/developer/api/reference#api-response-codes"target="_blank">Platform API Response Codes</a> for entire list of Payment Gateway Response Codes.
  * rmsg `string`: <strong>Format: </strong>Variable length<br><strong>Description: </strong>Response text from the payment gateway.

### PGApiResponse
* PGApiResponse `object`
  * echo_fields `string`: <strong>Format: </strong>Variable length<br><strong>Description: </strong>Data that was provided in echo_fields in the request.
  * pg_id `string`: <strong>Format: </strong>Fixed length, 32 AN<br><strong>Description: </strong>32-byte unique identifier generated by the payment gateway, returned in all valid responses.
  * rcode `string`: <strong>Format: </strong>Fixed length, 3 AN<br><strong>Description: </strong>Response code from the payment gateway. "000" indicates success. Refer to <a href="/developer/api/reference#api-response-codes"target="_blank">Platform API Response Codes</a> for entire list of Payment Gateway Response Codes.
  * rmsg `string`: <strong>Format: </strong>Variable length<br><strong>Description: </strong>Response text from the payment gateway.

### PGApiTimeoutResponse
* PGApiTimeoutResponse `object`
  * echo_fields `string`: <strong>Format: </strong>Variable length<br><strong>Description: </strong>Data that was provided in echo_fields in the request.
  * pg_id `string`: <strong>Format: </strong>Fixed length, 32 AN<br><strong>Description: </strong>32-byte unique identifier generated by the payment gateway, returned in all valid responses.
  * rcode `string`: <strong>Format: </strong>Fixed length, 3 AN<br><strong>Description: </strong>Response code from the payment gateway. "000" indicates success. Refer to <a href="/developer/api/reference#api-response-codes"target="_blank">Platform API Response Codes</a> for entire list of Payment Gateway Response Codes.
  * rmsg `string`: <strong>Format: </strong>Variable length<br><strong>Description: </strong>Response text from the payment gateway.

### PGApiTokenizeRequest
* PGApiTokenizeRequest `object`
  * avs_address `string`: <strong>Format: </strong>Variable length, up to 20 AN<br><strong>Description: </strong>Street address of the cardholder. If present, it will be included in the authorization request sent to the issuing bank.
  * avs_zip `string`: <strong>Format: </strong>Variable length, up to 9 N<br><strong>Description: </strong>Zip code of the cardholder. If present, it will be included in the authorization request sent to the issuing bank.<br><strong>Conditional Requirement: </strong>This field is required if avs_address is present.
  * card_id `string`: <strong>Format: </strong>Fixed length, 32 AN<br><strong>Description: </strong>Card ID received from a tokenization request. The card_id may be used in place of a card number in requests requiring cardholder account data.<br><strong>Conditional Requirement: </strong>Refer to <a href="/developer/api/reference#card-source-conditional-requirements"target="_blank">Card or Bank Account Data Sources and Conditional Requirements</a>
  * card_number `string`: <strong>Format: </strong>Variable length, up to 19 N<br><strong>Description: </strong>Cardholder's card number.<br><strong>Conditional Requirement: </strong>Refer to <a href="/developer/api/reference#card-source-conditional-requirements"target="_blank">Card or Bank Account Data Sources and Conditional Requirements</a>
  * card_swipe `string`: <strong>Format: </strong>Variable length, up to 79<br><strong>Description: </strong>Contains either track 1 or track 2 magnetic stripe data. If the magnetic stripe reader provides both track 1 and track 2 data in a single read, it is the responsibility of the implementer to send data for only one of the two tracks.<br><strong>Conditional Requirement: </strong>Refer to <a href="/developer/api/reference#card-source-conditional-requirements"target="_blank">Card or Bank Account Data Sources and Conditional Requirements</a>
  * cardholder_name `string`: <strong>Format: </strong>Variable length, up to 64 AN<br><strong>Description: </strong>When provided in a tokenize request, the cardholder name will be stored in the Card Vault along with the cardholder card number and expiration date.
  * cvv2 `string`: <strong>Format: </strong>Variable length, up to 4 N<br><strong>Description: </strong>CVV2 or CID value from the signature panel on the back of the cardholder's card. If present during a request that requires authorization, the value will be sent to the issuer for validation.
  * dda_number `string`: <strong>Format: </strong>Variable length, up to 17 N<br><strong>Description: </strong>Owner's account number at the bank. Applicable for ACH payments.<br><strong>Conditional Requirement: </strong>Refer to <a href="/developer/api/reference#card-source-conditional-requirements"target="_blank">Card or Bank Account Data Sources and Conditional Requirements</a>
  * developer_id `string`: <strong>Format: </strong>Variable length, up to 32 AN<br><strong>Description: </strong>Use to indicate which company developed the integration to Qualpay or the name of the payment solution that is connected to Qualpay.  Suggested usage is softwareABCv1.0 or companyXYZv2.0.
  * echo_fields `string`: <strong>Format: </strong>Variable length<br><strong>Description: </strong>This field contains a JSON array of field data that will be echoed back in the response message.
  * email_address `array`:  AN<br><strong>Description: </strong>An array of cardholder email addresses.
    * items `string`
  * exp_date **required** `string`: <strong>Format: </strong>Fixed length, 4 N(MMYY format)<br><strong>Description: </strong>Expiration date of cardholder card number. When card_id or customer_id is present in the request this field may also be present; if it is not, then the expiration date from the Card Vault will be used.<br><strong>Conditional Requirement: </strong>Refer to <a href="/developer/api/reference#card-source-conditional-requirements"target="_blank">Card or Bank Account Data Sources and Conditional Requirements</a>
  * loc_id `string`: <strong>Format: </strong>Variable length, up to 4 N<br><strong>Description: </strong>When a merchant has more than one location using the same currency, this value is used to specify the specific location for this request.
  * merchant_id **required** `integer`: <strong>Format: </strong>Variable length, up to 12 N<br><strong>Description: </strong>Unique identifier on the Qualpay system.
  * payload_google_pay `string`: <strong>Format: </strong>Variable length<br><strong>Description: </strong>Google Pay payload
  * profile_id `string`: <strong>Format: </strong>Fixed length, 20 N<br><strong>Description: </strong>Explicitly identifies which Payment Gateway profile should be used for the request.
  * report_data `string`: <strong>Format: </strong>Variable length<br><strong>Description: </strong>This field contains a JSON array of field data that will be included with the transaction data reported in Qualpay Manager.
  * retry_attempt `integer`: <strong>Format: </strong>Variable length, up to 4 N<br><strong>Description: </strong>This field contains a number greater than zero (0). When the value is one (1), the payment gateway treats the message as a new message. If the value is greater than one (1), then the payment gateway will return the result of the original message. If the original message did not complete, the payment gateway treats the message as a new message.<br><strong>Conditional Requirement: </strong>This field is required when the retry_id is present in the request message.
  * retry_id `integer`: <strong>Format: </strong>Variable length, up to 15 N<br><strong>Description: </strong>This field contains a merchant generated number used to identify the request. This value must be unique within the last 24 hours. When present, the payment gateway will use the retry_attempt to determine whether the message is new or a retry of a previous message.
  * session_id `string`: INTERNAL USE ONLY.
  * single_use `boolean`: <br><strong>Default: </strong>false<br><strong>Description: </strong>In a tokenize request, setting the single_use field to "true" will cause a single-use token to be generated. This token will expire in 10 minutes or when first used.
  * tr_number `string`: <strong>Format: </strong>Fixed length, 9 N<br><strong>Description: </strong>Bank transit/routing number. Applicable for ACH payments.<br><strong>Conditional Requirement: </strong>Refer to <a href="/developer/api/reference#card-source-conditional-requirements"target="_blank">Card or Bank Account Data Sources and Conditional Requirements</a>
  * type_id `string`: <strong>Format: </strong>Fixed length, 1 AN<br><strong>Default: </strong>C<br><strong>Description: </strong>Bank Account Type. Applicable for ACH payments. Possible values are: <ul><li>C = Personal checking account</li><li>S = Personal savings account</li><li>K = Business checking account</li><li>V = Business savings account</li></ul>
  * user_id `integer`: INTERNAL USE ONLY.

### PGApiTokenizeResponse
* PGApiTokenizeResponse `object`
  * card_id `string`: <strong>Format: </strong>Fixed length, 32 AN<br><strong>Description: </strong>32-byte value returned after successful tokenize request or when an authorization or sale transaction requests tokenization of the cardholder data.
  * card_number `string`: <strong>Format: </strong>Variable length, up to 16 AN<br><strong>Description: </strong>Cardholder's card number (truncated).
  * echo_fields `string`: <strong>Format: </strong>Variable length<br><strong>Description: </strong>Data that was provided in echo_fields in the request.
  * pg_id `string`: <strong>Format: </strong>Fixed length, 32 AN<br><strong>Description: </strong>32-byte unique identifier generated by the payment gateway, returned in all valid responses.
  * rcode `string`: <strong>Format: </strong>Fixed length, 3 AN<br><strong>Description: </strong>Response code from the payment gateway. "000" indicates success. Refer to <a href="/developer/api/reference#api-response-codes"target="_blank">Platform API Response Codes</a> for entire list of Payment Gateway Response Codes.
  * rmsg `string`: <strong>Format: </strong>Variable length<br><strong>Description: </strong>Response text from the payment gateway.

### PGApiTransactionRequest
* PGApiTransactionRequest `object`
  * amt_convenience_fee `number`: <strong>Format: </strong>Variable length, up to 8,2 N<br><strong>Description: </strong>Amount of convenience fee. A convenience fee is a fee charged to your customer for the "convenience" of being able to pay using an alternative payment channel outside your merchant's customary payment channel. Must be a flat/fixed fee amount per transaction. This field tracks the convenience fee amount for display purposes, but the amount of the fee must be included in amt_tran.
  * amt_fbo `number`: <strong>Format: </strong>Variable length, up to 12,2 N<br><strong>Description: </strong>Total amount of transaction to be transferred to the "for benefit of" (FBO) account.
  * amt_tax `number`: <strong>Format: </strong>Variable length, up to 12,2 N<br><strong>Description: </strong>Amount of sales tax included in the total transaction amount. This field tracks the tax amount for display and interchange purposes, but the amount of the tax must be included in amt_tran.<br><strong>Conditional Requirement: </strong>Required for Level 2 and Level 3 interchange qualification.
  * amt_tran `number`: <strong>Format: </strong>Variable length, up to 12,2 N<br><strong>Description: </strong>Total amount of transaction including sales tax (amt_tax), convenience fee (amt_convenience_fee), and/or surcharge (amt_tran_fee) if applicable.
  * amt_tran_fee `number`: <strong>Format: </strong>Variable length, up to 8,2 N<br><strong>Description: </strong>Amount of transaction surcharge fee. A surcharge is a fee added to the cost of a purchase for the "privilege" of using a credit card instead of another form of payment, and can be a percentage of the transaction amount or fixed amount of up to 4% of amt_tran. This field tracks the surcharge amount of the transaction for display purposes, but the amount of the fee must be included in amt_tran.
  * auth_code `string`: <strong>Format: </strong>Fixed length, 6 AN<br><strong>Description: </strong>This field should contain the 6-character authorization code that was received during a voice or Automated Response Unit(ARU) authorization for force request type. This is field is applicable to only force request type.<br><strong>Conditional Requirement: </strong>This field is required in force request type.
  * avs_address `string`: <strong>Format: </strong>Variable length, up to 20 AN<br><strong>Description: </strong>Street address of the cardholder. If present, it will be included in the authorization request sent to the issuing bank.
  * avs_zip `string`: <strong>Format: </strong>Variable length, up to 9 AN<br><strong>Description: </strong>Zip code of the cardholder. If present, it will be included in the authorization request sent to the issuing bank.<br><strong>Conditional Requirement: </strong>This field is required if avs_address is present.
  * card_id `string`: <strong>Format: </strong>Fixed length, 32 AN<br><strong>Description: </strong>Card ID received from a tokenization request. The card_id may be used in place of a card number or card swipe.<br><strong>Conditional Requirement: </strong>Refer to <a href="/developer/api/reference#card-source-conditional-requirements"target="_blank">Card or Bank Account Data Sources and Conditional Requirements</a>
  * card_number `string`: <strong>Format: </strong>Variable length, up to 19 N<br><strong>Description: </strong>Cardholder's card number.<br><strong>Conditional Requirement: </strong>Refer to <a href="/developer/api/reference#card-source-conditional-requirements"target="_blank">Card or Bank Account Data Sources and Conditional Requirements</a>
  * card_swipe `string`: <strong>Format: </strong>Variable length, up to 79 AN<br><strong>Description: </strong>Contains either track 1 or track 2 magnetic stripe data. If the magnetic stripe reader provides both track 1 and track 2 data in a single read, it is the responsibility of the implementer to send data for only one of the two tracks.<br><strong>Conditional Requirement: </strong>Refer to <a href="/developer/api/reference#card-source-conditional-requirements"target="_blank">Card or Bank Account Data Sources and Conditional Requirements</a>
  * cardholder_name `string`: <strong>Format: </strong>Variable length, up to 64 AN<br><strong>Description: </strong>When provided in a tokenize request, the cardholder name will be stored in the Card Vault along with the cardholder card number and expiration date.
  * cavv_3ds `string`: <strong>Format: </strong>Fixed length, 28 AN<br><strong>Description: </strong>Base 64 encoded CAVV returned from the merchant’s third-party 3-D Secure Merchant Plug-in (MPI). Use for Visa 3D Secure transactions.
  * customer [Customer](#customer)
  * customer_code `string`: <strong>Format: </strong>Variable length, up to 17 AN<br><strong>Description: </strong>Reference code supplied by the cardholder to the merchant.
  * customer_email `string`: <strong>Format: </strong>Variable length<br><strong>Description: </strong><strong>[Deprecated use email_address]</strong> Comma-separated list of e-mail addresses to which a receipt should be sent.
  * customer_id `string`: <strong>Format: </strong>Variable length, up to 32 AN<br><strong>Description: </strong>Customer ID value established by the merchant. The customer_id may be used in place of a card number in requests requiring cardholder account data. When used with a card_id or card_number or card_swipe, the request will be tied to the customer_id in Qualpay reporting. <br><strong>Conditional Requirement: </strong>Refer to <a href="/developer/api/reference#card-source-conditional-requirements"target="_blank">Card or Bank Account Data Sources and Conditional Requirements</a>
  * cvv2 `string`: <strong>Format: </strong>Variable length, up to 4 N<br><strong>Description: </strong>CVV2 or CID value from the signature panel on the back of the cardholder's card. If present during a request that requires authorization, the value will be sent to the issuer for validation.
  * dba_name `string`: <strong>Format: </strong>Variable length, up to 21 AN<br><strong>Description: </strong>When the merchant has been authorized to send dynamic DBA information, this field will contain the DBA name used by Qulapay in the authorization and clearing messages.<br>Note: the payment gateway will automatically add a prefix plus an asterisk (*) to the dba_name value. For example, if the prefix is ABC and the dba_name value is SHOE CO, the DBA name will show as "ABC*SHOE CO" on the cardholder's credit card statement.
  * dba_suffix `string`: <strong>Format: </strong>Fixed length, 9 AN<br><strong>Description: </strong>For use by merchants using negative option marketing.  This field must be used in the first transaction at the conclusion of the free or reduced trial. This suffix will be appended to the end of your DBA and the result will appear on the cardholder statement. (If your DBA and suffix contain more that 25 characters, your DBA will be truncated.) Possible values are: <ul><li>END DSCNT</li><li>END OFFER</li><li>END PROMO</li><li>END TRIAL</li></ul>
  * dda_number `string`: <strong>Format: </strong>Variable length, up to 17 N<br><strong>Description: </strong>Owner's account number at the bank. Applicable for ACH payments.<br><strong>Conditional Requirement: </strong>Refer to <a href="/developer/api/reference#card-source-conditional-requirements"target="_blank">Card or Bank Account Data Sources and Conditional Requirements</a>
  * developer_id `string`: <strong>Format: </strong>Variable length, up to 32 AN<br><strong>Description: </strong>Use to indicate which company developed the integration to Qualpay or the name of the payment solution that is connected to Qualpay.  Suggested usage is softwareABCv1.0 or companyXYZv2.0.
  * duplicate_seconds `integer`: <strong>Format: </strong>Variable length, up to 5 N<br><strong>Description: </strong>Duplicate transaction window in seconds. Qualpay will reject any transactions after a successful transaction within the duplicate_seconds window with a duplicate Account Number and optionally Purchase ID or, and, Merchant Reference Number. This value overrides any value set for a merchant on Qualpay Manager.
  * echo_fields `string`: <strong>Format: </strong>Variable length<br><strong>Description: </strong>This field contains a JSON array of field data that will be echoed back in the response message.
  * email_address `array`:  AN<br><strong>Description: </strong>An array of email addresses to which the transaction receipt should be sent to. 
    * items `string`
  * email_receipt `boolean`: <br><strong>Default: </strong>false<br><strong>Description: </strong>When this field is provided and set to true, a customer_email must also be provided. When these two fields are provided, a transaction receipt will be sent via e-mail to the address(es) provided in the customer_email field.
  * exp_date `string`: <strong>Format: </strong>Fixed length, 4 N, MMYY format<br><strong>Description: </strong>Expiration date of cardholder card number.  When card_id or customer_id is present in the request this field may also be present; if it is not, then the expiration date from the Card Vault will be used.<br><strong>Conditional Requirement: </strong>Refer to <a href="/developer/api/reference#card-source-conditional-requirements"target="_blank">Card or Bank Account Data Sources and Conditional Requirements</a>
  * fbo_id `integer`: <strong>Format: </strong>Variable length, up to 16 N<br><strong>Description: </strong>For Benefit Of (FBO) merchant account identifier on the Qualpay system. Contact Qualpay customer support to obtain your FBO information.
  * line_items `string`: <strong>Format: </strong>Variable length<br><strong>Description: </strong>JSON array of JSON objects. Each object represents a single line item detail element related to the transaction. Each detail element has required subfields: <br>quantity (7N)<br> description (26AN)<br> unit_of_measure (12AN)<br> product_code (12AN) - cannot be all zeroes<br> debit_credit_ind (1 AN)<br> unit_cost (12,2N)<br> Optional subfields: <br>type_of_supply (2AN) - visa only<br>commodity_code - visa only(12AN)<br><strong>Conditional Requirement: </strong> This field is required for Level 3 interchange qualification.
  * loc_id `string`: <strong>Format: </strong>Variable length, up to 4 N<br><strong>Description: </strong>When a merchant has more than one location using the same currency, this value is used to specify the specific location for this request.
  * mc_ucaf_data `string`: <strong>Format: </strong>Variable length, up to 32 AN<br><strong>Description: </strong>Base64 encoded MasterCard UCAF Field Data returned from the merchant’s third-party 3D Secure Merchant Plug-in (MPI). Use for MasterCard 3-D Secure transactions.
  * mc_ucaf_ind `string`: <strong>Format: </strong>Fixed length, 1 AN<br><strong>Description: </strong>MasterCard UCAF Collection Indicator returned from the merchant’s third-party 3-D Secure Merchant Plug-in (MPI). Use for MasterCard 3-D Secure transactions.
  * merch_ref_num `string`: <strong>Format: </strong>Variable length, up to 128 AN<br><strong>Description: </strong>Merchant provided reference value that will be stored with the transaction data and included with transaction data in reports within Qualpay Manager. This value will also be attached to any lifecycle transactions (e.g. retrieval requests and chargebacks) that may occur.
  * merchant_id **required** `integer`: <strong>Format: </strong>Variable length, up to 12 N<br><strong>Description: </strong>Unique identifier on the Qualpay system.
  * moto_ecomm_ind `string`: <strong>Format: </strong>Fixed length, 1 N<br><strong>Default: </strong>7<br><strong>Description: </strong>Indicates type of MOTO transaction: <ul><li>0 = Card Present (not MOTO/e-Commerce)</li><li> 1 = One Time MOTO transaction</li><li>2 = Recurring </li><li>3 = Installment </li><li>5 = Full 3D-Secure transaction</li><li>6 = Merchant 3D-Secure transaction</li><li>7 = e-Commerce Channel Encrypted (SSL)</li></ul>
  * partial_auth `boolean`: <br><strong>Default: </strong>false<br><strong>Description: </strong>This field must be present and set to a value of 'true' in order for the request to allow for approval of a partial amount. This would be used to allow a merchant to accept a partial payment from pre-paid or debit cards. When only part of the requested amount is available, the response code will be 010 and the amt_tran field in the response will contain the amount that was approved. A second sale request  on a different card is needed  to capture the remaining amount. Applicable to auth and sale request types.
  * payload_google_pay `string`: <strong>Format: </strong>Variable length<br><strong>Description: </strong>Google Pay payload
  * pg_id `string`: <strong>Format: </strong>Fixed length, 32 AN<br><strong>Description: </strong>PG ID of previously authorized transaction. This field is required when sending a capture, refund, or void request.
  * profile_id `string`: <strong>Format: </strong>Fixed length, 20 N<br><strong>Description: </strong>Explicitly identifies which Payment Gateway profile should be used for the request.
  * purchase_id `string`: <strong>Format: </strong>Variable length, up to 25 AN<br><strong>Description: </strong>Purchase Identifier (also referred to as the invoice number generated by the merchant).<br><strong>Conditional Requirement: </strong> This field is required for Level 2 and Level 3 interchange qualification.
  * report_data `string`: <strong>Format: </strong>Variable length<br><strong>Description: </strong>This field contains a JSON array of field data that will be included with the transaction data reported in Qualpay Manager.
  * retry_attempt `integer`: <strong>Format: </strong>Variable length, up to 4 N<br><strong>Description: </strong>This field contains a number greater than zero (0). When the value is one (1), the payment gateway treats the message as a new message. If the value is greater than one (1), then the payment gateway will return the result of the original message. If the original message did not complete, the payment gateway treats the message as a new message.<br><strong>Conditional Requirement: </strong>This field is required when the retry_id is present in the request message.
  * retry_id `integer`: <strong>Format: </strong>Variable length, up to 15 N<br><strong>Description: </strong>This field contains a merchant generated number used to identify the request. This value must be unique within the last 24 hours. When present, the payment gateway will use the retry_attempt to determine whether the message is new or a retry of a previous message.
  * session_id `string`: INTERNAL USE ONLY.
  * subscription_id `integer`: <strong>Format: </strong>Variable length, up to 10 N<br><strong>Description: </strong>Identifies the recurring subscription that applies to this transaction.
  * tokenize `boolean`: <br><strong>Default: </strong>false<br><strong>Description: </strong>In an authorization, credit, force, sale, or verify request the merchant can set tokenize to "true" and the payment gateway will store the cardholder data in the Card Vault and provide a card_id in the response. If the card_number or card_id in the request is already in the Card Vault, this flag instructs the payment gateway to update the associated data (e.g. avs_address, avs_zip, exp_date) if present.<br><strong>Conditional Requirement: </strong>Refer to <a href="/developer/api/reference#card-source-conditional-requirements"target="_blank">Card or Bank Account Data Sources and Conditional Requirements</a>
  * tr_number `string`: <strong>Format: </strong>Fixed length, 9 N<br><strong>Description: </strong>Bank transit/routing number. Applicable for ACH payments.<br><strong>Conditional Requirement: </strong>Refer to <a href="/developer/api/reference#card-source-conditional-requirements"target="_blank">Card or Bank Account Data Sources and Conditional Requirements</a>
  * tran_currency `integer`: <strong>Format: </strong>Fixed length, 3 N<br><strong>Default: </strong>840<br><strong>Description: </strong>ISO numeric currency code for the transaction. Refer to <a href="/developer/api/reference#country-codes"target="_blank">Country Codes</a> for a list of currency codes.
  * type_id `string`: <strong>Format: </strong>Fixed length, 1 AN<br><strong>Default: </strong>C<br><strong>Description: </strong>Bank Account Type. Applicable for ACH payments. Possible values are: <ul><li>C = Personal checking account</li><li>S = Personal savings account</li><li>K = Business checking account</li><li>V = Business savings account</li></ul>
  * user_id `integer`: INTERNAL USE ONLY.
  * vendor_id `integer`: <strong>Format: </strong>Variable length, up to 12 N<br><strong>Description: </strong>Identifies the vendor to which this capture request applies.
  * xid_3ds `string`: <strong>Format: </strong>Fixed length, 28 AN<br><strong>Description: </strong>Base64 encoded transaction ID (XID) returned from the merchant’s third-party 3D Secure Merchant Plug-in (MPI). Use for Visa 3-D Secure transactions.

### PGApiTransactionResponse
* PGApiTransactionResponse `object`
  * amt_tran `number`: <strong>Format: </strong>Variable length, up to 12,2 N<br><strong>Description: </strong>Transaction amount, returned only on partial approvals.
  * auth_avs_result `string`: <strong>Format: </strong>Fixed length, 1 AN<br><strong>Description: </strong>AVS result from card issuer (if avs_zip and optionally avs_address were provided in the request). Refer to <a href="/developer/api/reference#avs-result-codes"target="_blank">Payment Result Codes for AVS</a> for possible values.
  * auth_code `string`: <strong>Format: </strong>Fixed length, 6 AN<br><strong>Description: </strong>Card issuer authorization code returned on successful authorization request.
  * auth_cvv2_result `string`: <strong>Format: </strong>Fixed length, 1 AN<br><strong>Description: </strong>CVV2 result from card issuer (if CVV2 data was sent in the request). Refer to <a href="/developer/api/reference#cvv2-result-codes"target="_blank">Payment Result Codes for CVV2</a> for possible values.
  * card_id `string`: <strong>Format: </strong>Fixed length, 32 AN<br><strong>Description: </strong>32-byte value returned after successful tokenize request or when an authorization or sale transaction requests tokenization of the cardholder data.
  * echo_fields `string`: <strong>Format: </strong>Variable length<br><strong>Description: </strong>Data that was provided in echo_fields in the request.
  * merchant_advice_code `string`: <strong>Format: </strong>Fixed length, 4 AN<br><strong>Description: </strong>Recurring transaction advice for MasterCard authorizations.<ul><li>M001 = New account information available</li><li>M002 = Try again later</li><li>M003 = Do not try again for recurring payments transaction</li><li>M004 = Token requirements not fulfilled for this token type</li><li>M021 = Recurring payment cancellation</li></ul>
  * pg_id `string`: <strong>Format: </strong>Fixed length, 32 AN<br><strong>Description: </strong>32-byte unique identifier generated by the payment gateway, returned in all valid responses.
  * rcode `string`: <strong>Format: </strong>Fixed length, 3 AN<br><strong>Description: </strong>Response code from the payment gateway. "000" indicates success. Refer to <a href="/developer/api/reference#api-response-codes"target="_blank">Platform API Response Codes</a> for entire list of Payment Gateway Response Codes.
  * rmsg `string`: <strong>Format: </strong>Variable length<br><strong>Description: </strong>Response text from the payment gateway.

### PGApiUnauthResponse
* PGApiUnauthResponse `object`
  * echo_fields `string`: <strong>Format: </strong>Variable length<br><strong>Description: </strong>Data that was provided in echo_fields in the request.
  * pg_id `string`: <strong>Format: </strong>Fixed length, 32 AN<br><strong>Description: </strong>32-byte unique identifier generated by the payment gateway, returned in all valid responses.
  * rcode `string`: <strong>Format: </strong>Fixed length, 3 AN<br><strong>Description: </strong>Response code from the payment gateway. "000" indicates success. Refer to <a href="/developer/api/reference#api-response-codes"target="_blank">Platform API Response Codes</a> for entire list of Payment Gateway Response Codes.
  * rmsg `string`: <strong>Format: </strong>Variable length<br><strong>Description: </strong>Response text from the payment gateway.

### PGApiVerifyRequest
* PGApiVerifyRequest `object`
  * avs_address `string`: <strong>Format: </strong>Variable length, up to 20 AN<br><strong>Description: </strong>Street address of the cardholder. If present, it will be included in the authorization request sent to the issuing bank.
  * avs_zip `string`: <strong>Format: </strong>Variable length, up to 9 N<br><strong>Description: </strong>Zip code of the cardholder. If present, it will be included in the authorization request sent to the issuing bank.<br><strong>Conditional Requirement: </strong>This field is required if avs_address is present.
  * card_id `string`: <strong>Format: </strong>Variable length, up to 32 AN<br><strong>Description: </strong>Card ID received from a tokenization request. The card_id may be used in place of a card number or card swipe.<br><strong>Conditional Requirement: </strong>Refer to <a href="/developer/api/reference#card-source-conditional-requirements"target="_blank">Card or Bank Account Data Sources and Conditional Requirements</a>
  * card_number **required** `string`: <strong>Format: </strong>Variable length, up to 19 N<br><strong>Description: </strong>Cardholder's card number. <br><strong>Conditional Requirement: </strong>Refer to <a href="/developer/api/reference#card-source-conditional-requirements"target="_blank">Card or Bank Account Data Sources and Conditional Requirements</a>
  * card_swipe `string`: <strong>Format: </strong>Variable length, up to 79 AN<br><strong>Description: </strong>Contains either track 1 or track 2 data magnetic stripe data. If the magnetic stripe reader provides both track 1 and track 2 data in a single read, it is the responsibility of the implementer to send data for only one of the two tracks.<br><strong>Conditional Requirement: </strong>Refer to <a href="/developer/api/reference#card-source-conditional-requirements"target="_blank">Card or Bank Account Data Sources and Conditional Requirements</a>
  * cardholder_name `string`: <strong>Format: </strong>Variable length, up to 64 AN<br><strong>Description: </strong>When provided in a tokenize request, the cardholder name will be stored in the Card Vault along with the cardholder card number and expiration date.
  * customer [Customer](#customer)
  * customer_code `string`: <strong>Format: </strong>Variable length, up to 17 AN<br><strong>Description: </strong>Reference code supplied by the cardholder to the merchant.
  * cvv2 `string`: <strong>Format: </strong>Variable length, up to 4 N<br><strong>Description: </strong>CVV2 or CID value from the signature panel on the back of the cardholder's card. If present during a request that requires authorization, the value will be sent to the issuer for validation.
  * developer_id `string`: <strong>Format: </strong>Variable length, up to 32 AN<br><strong>Description: </strong>Use to indicate which company developed the integration to Qualpay or the name of the payment solution that is connected to Qualpay.  Suggested usage is softwareABCv1.0 or companyXYZv2.0.
  * echo_fields `string`: <strong>Format: </strong>Variable length<br><strong>Description: </strong>This field contains a JSON array of field data that will be echoed back in the response message.
  * exp_date `string`: <strong>Format: </strong>Fixed length, 4 N, MMYY format<br><strong>Description: </strong>Expiration date of cardholder card number. Required when the field card_number is present. If card_swipe is present in the request, this field must NOT be present. When card_id or customer_id is present in the request this field may also be present; if it is not, then the expiration date from the Card Vault will be used.<br><strong>Conditional Requirement: </strong>Refer to <a href="/developer/api/reference#card-source-conditional-requirements"target="_blank">Card or Bank Account Data Sources and Conditional Requirements</a>
  * loc_id `string`: <strong>Format: </strong>Variable length, up to 4 N<br><strong>Description: </strong>When a merchant has more than one location using the same currency, this value is used to specify the specific location for this request.
  * merch_ref_num `string`: <strong>Format: </strong>Variable length, up to 128 AN<br><strong>Description: </strong>Merchant provided reference value that will be stored with the transaction data and included with transaction data in reports within Qualpay Manager. This value will also be attached to any lifecycle transactions (e.g. retrieval requests and chargebacks) that may occur.
  * merchant_id **required** `integer`: <strong>Format: </strong>Variable length, up to 12 N<br><strong>Description: </strong>Unique identifier on the Qualpay system.
  * payload_google_pay `string`: <strong>Format: </strong>Variable length<br><strong>Description: </strong>Google Pay payload
  * profile_id `string`: <strong>Format: </strong>Fixed length, 20 N<br><strong>Description: </strong>Explicitly identifies which Payment Gateway profile should be used for the request.
  * report_data `string`: <strong>Format: </strong>Variable length<br><strong>Description: </strong>This field contains a JSON array of field data that will be included with the transaction data reported in Qualpay Manager.
  * retry_attempt `integer`: <strong>Format: </strong>Variable length, up to 4 N<br><strong>Description: </strong>This field contains a number greater than zero (0). When the value is one (1), the payment gateway treats the message as a new message. If the value is greater than one (1), then the payment gateway will return the result of the original message. If the original message did not complete, the payment gateway treats the message as a new message.<br><strong>Conditional Requirement: </strong>This field is required when the retry_id is present in the request message.
  * retry_id `integer`: <strong>Format: </strong>Variable length, up to 15 N<br><strong>Description: </strong>This field contains a merchant generated number used to identify the request. This value must be unique within the last 24 hours. When present, the payment gateway will use the retry_attempt to determine whether the message is new or a retry of a previous message.
  * session_id `string`: INTERNAL USE ONLY.
  * tokenize `boolean`: <br><strong>Default: </strong>false<br><strong>Description: </strong>In an authorization, credit, force, sale, or verify request the merchant can set tokenize to "true" and the payment gateway will store the cardholder data in the Card Vault and provide a card_id in the response. If the card_number or card_id in the request is already in the Card Vault, this flag instructs the payment gateway to update the associated data (e.g. avs_address, avs_zip, exp_date) if present.
  * user_id `integer`: INTERNAL USE ONLY.

### PGApiVerifyResponse
* PGApiVerifyResponse `object`
  * auth_avs_result `string`: <strong>Format: </strong>Fixed length, 1 AN<br><strong>Description: </strong>AVS result from card issuer (if avs_zip and optionally avs_address were provided in the request). Refer to <a href="/developer/api/reference#avs-result-codes"target="_blank">Payment Result Codes for AVS</a> for possible values.
  * auth_code `string`: <strong>Format: </strong>Fixed length, 6 AN<br><strong>Description: </strong>Card issuer authorization code returned on successful authorization request.
  * auth_cvv2_result `string`: <strong>Format: </strong>Fixed length, 1 AN<br><strong>Description: </strong>CVV2 result from card issuer (if CVV2 data was sent in the request). Refer to <a href="/developer/api/reference#cvv2-result-codes"target="_blank">Payment Result Codes for CVV2</a> for possible values.
  * card_id `string`: <strong>Format: </strong>Fixed length, 32 AN<br><strong>Description: </strong>32-byte value returned after successful tokenize request or when an authorization or sale transaction requests tokenization of the cardholder data.
  * card_number `string`: <strong>Format: </strong>Variable length, up to 16 AN<br><strong>Description: </strong>Cardholder's card number (truncated).
  * echo_fields `string`: <strong>Format: </strong>Variable length<br><strong>Description: </strong>Data that was provided in echo_fields in the request.
  * merchant_advice_code `string`: <strong>Format: </strong>Fixed length 4 AN<br><strong>Description: </strong>Recurring transaction advice for MasterCard authorizations.<ul><li>M001 = New account information available</li><li>M002 = Try again later</li><li>M003 = Do not try again for recurring payments transaction</li><li>M004 = Token requirements not fulfilled for this token type</li><li>M021 = Recurring payment cancellation</li></ul>
  * pg_id `string`: <strong>Format: </strong>Fixed length, 32 AN<br><strong>Description: </strong>32-byte unique identifier generated by the payment gateway, returned in all valid responses.
  * rcode `string`: <strong>Format: </strong>Fixed length, 3 AN<br><strong>Description: </strong>Response code from the payment gateway. "000" indicates success. Refer to <a href="/developer/api/reference#api-response-codes"target="_blank">Platform API Response Codes</a> for entire list of Payment Gateway Response Codes.
  * rmsg `string`: <strong>Format: </strong>Variable length<br><strong>Description: </strong>Response text from the payment gateway.

### PGApiVoidRequest
* PGApiVoidRequest `object`
  * developer_id `string`: <strong>Format: </strong>Variable length, up to 32 AN<br><strong>Description: </strong>Use to indicate which company developed the integration to Qualpay or the name of the payment solution that is connected to Qualpay.  Suggested usage is softwareABCv1.0 or companyXYZv2.0.
  * echo_fields `string`: <strong>Format: </strong>Variable length<br><strong>Description: </strong>This field contains a JSON array of field data that will be echoed back in the response message.
  * loc_id `string`: <strong>Format: </strong>Variable length, up to 4 N<br><strong>Description: </strong>When a merchant has more than one location using the same currency, this value is used to specify the specific location for this request.
  * merchant_id **required** `integer`: <strong>Format: </strong>Variable length, up to 12 N<br><strong>Description: </strong>Unique identifier on the Qualpay system.
  * profile_id `string`: <strong>Format: </strong>Fixed length, 20 N<br><strong>Description: </strong>Explicitly identifies which Payment Gateway profile should be used for the request.
  * report_data `string`: <strong>Format: </strong>Variable length<br><strong>Description: </strong>This field contains a JSON array of field data that will be included with the transaction data reported in Qualpay Manager.
  * retry_attempt `integer`: <strong>Format: </strong>Variable length, up to 4 N<br><strong>Description: </strong>This field contains a number greater than zero (0). When the value is one (1), the payment gateway treats the message as a new message. If the value is greater than one (1), then the payment gateway will return the result of the original message. If the original message did not complete, the payment gateway treats the message as a new message.<br><strong>Conditional Requirement: </strong>This field is required when the retry_id is present in the request message.
  * retry_id `integer`: <strong>Format: </strong>Variable length, up to 15 N<br><strong>Description: </strong>This field contains a merchant generated number used to identify the request. This value must be unique within the last 24 hours. When present, the payment gateway will use the retry_attempt to determine whether the message is new or a retry of a previous message.
  * session_id `string`: INTERNAL USE ONLY.
  * user_id `integer`: INTERNAL USE ONLY.
  * vendor_id `integer`: <strong>Format: </strong>Variable length, up to 12 N<br><strong>Description: </strong>Identifies the vendor to which this void request applies.

### PGApiVoidResponse
* PGApiVoidResponse `object`
  * echo_fields `string`: <strong>Format: </strong>Variable length<br><strong>Description: </strong>Data that was provided in echo_fields in the request.
  * pg_id `string`: <strong>Format: </strong>Fixed length, 32 AN<br><strong>Description: </strong>32-byte unique identifier generated by the payment gateway, returned in all valid responses.
  * rcode `string`: <strong>Format: </strong>Fixed length, 3 AN<br><strong>Description: </strong>Response code from the payment gateway. "000" indicates success. Refer to <a href="/developer/api/reference#api-response-codes"target="_blank">Platform API Response Codes</a> for entire list of Payment Gateway Response Codes.
  * rmsg `string`: <strong>Format: </strong>Variable length<br><strong>Description: </strong>Response text from the payment gateway.

### ShippingAddress
* ShippingAddress `object`
  * primary `boolean`: <br><strong>Default: </strong>false<br><strong>Description: </strong>Identifies the primary shipping address where there are multiple shipping addresses.
  * shipping_addr1 **required** `string`: <strong>Format: </strong>Variable length<br><strong>Description: </strong>Customer street and number, P.O. box, c/o.
  * shipping_addr2 `string`: <strong>Format: </strong>Variable length<br><strong>Description: </strong>Customer apartment, suite, unit, building, floor, etc.
  * shipping_city **required** `string`: <strong>Format: </strong>Variable length<br><strong>Description: </strong>Customer shipping city.
  * shipping_country `string`: <strong>Format: </strong>Variable length<br><strong>Description: </strong>Customer shipping country.
  * shipping_country_code `string`: <strong>Format: </strong>Fixed length, 3 N<br><strong>Description: </strong>ISO numeric country code for the shipping address. Refer to <a href="/developer/api/reference#country-codes"target="_blank">Country Codes</a> for a list of country codes. If the country code is provided, the shipping_country will be updated to match the country code. 
  * shipping_firm_name `string`: <strong>Format: </strong>Variable length, up to 64 AN<br><strong>Description: </strong>Business name if applicable. 
  * shipping_first_name **required** `string`: <strong>Format: </strong>Variable length, up to 32 AN<br><strong>Description: </strong>Customer shipping first name.
  * shipping_last_name **required** `string`: <strong>Format: </strong>Variable length, up to 32 AN<br><strong>Description: </strong>Customer shipping last name.
  * shipping_state **required** `string`: <strong>Format: </strong>Variable length<br><strong>Description: </strong>Customer shipping state (abbreviated).
  * shipping_zip **required** `string`: <strong>Format: </strong>Variable length<br><strong>Description: </strong>Customer shipping zip code.
  * shipping_zip4 `string`: <strong>Format: </strong>Fixed length, 4 N<br><strong>Description: </strong>Customer shipping zip+4 code if applicable.


