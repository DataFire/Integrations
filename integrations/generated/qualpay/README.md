# @datafire/qualpay

Client library for Qualpay Payment Gateway

## Installation and Usage
```bash
npm install --save @datafire/qualpay
```
```js
let qualpay = require('@datafire/qualpay').create({
  username: "",
  password: ""
});

qualpay.Authorization({
  "body": {
    "merchant_id": 0
  }
}).then(data => {
  console.log(data);
});
```

## Description

This document describes the Qualpay Payment Gateway API.

## Actions

### Authorization
An approved transaction will continue to be open until it expires or a capture message is received. Authorizations are automatically voided if they are not captured within 28 days, although most issuing banks will release the hold after 24 hours in retail environments or 7 days in card not present environments.


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
This message is used when the timing of the batch close needs to be controlled by the merchant rather than relying on the daily automatic batch close.


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
A capture message may be completed for any amount up to the originally authorized amount.


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
A non-referenced credit requires that the cardholder data be provided in the message. This message is only available during the first 30 days of account production activity - the refund message should generally be used to return money to the cardholder.


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

### Force
Can be used when an online authorization request received a 'declined' reason code and the merchant received an authorization from a voice or automated response (ARU) system. The required fields are the same as a sale or authorization request, except that the expiration date (exp_date) is not required, and the 6-character authorization code (auth_code) IS required.


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

### Refund
Returns money to the cardholder from a previously captured transaction. Multiple refunds are allowed per captured transaction, provided that the sum of all refunds does not exceed the original captured transaction amount. Authorizations that have not been captured are not eligible for refund.


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
This message will perform an authorization of the transaction, and if approved will immediately capture the transaction to be included in the next batch close. It is used in card present environments, and also card not present environments where no physical goods are being shipped.


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
Once stored, a unique card identifier is returned for use in future transactions. Optionally, tokenization can be requested in an auth, verify, force, credit, or sale message by sending the tokenize field set to true.


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
A verify message will return success if the cardholder information was verified by the issuer. If AVS or CVV data is included in the message, then the AVS or CVV result code will be returned in the response message.


```js
qualpay.Verify({
  "body": {
    "card_number": "",
    "exp_date": "",
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
Authorizations can be voided at any time. Captured transactions can be voided until the batch is closed.


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

### Customer
* Customer `object`
  * billing_addr1 `string`: Customer billing address street.
  * billing_addr2 `string`: Customer billing address, line 2.
  * billing_city `string`: Customer billing city.
  * billing_country `string`: Customer billing country.
  * billing_country_code `string`: ISO numeric country code for the billing address. Refer to <a href="/developer/api/reference#currency-codes"target="_blank">Currency Codes</a> for a list of country codes.
  * billing_state `string`: Customer billing state (abbreviated).
  * billing_zip `string`: Customer billing zip code.
  * billing_zip4 `string`: Customer billing zip+4 code if applicable.
  * customer_email `string`: Customer e-mail address.
  * customer_firm_name `string`: Customer Business name if applicable. 
  * customer_first_name **required** `string`: Customer first name.
  * customer_last_name **required** `string`: Customer last name.
  * customer_phone `string`: Customer phone number.
  * shipping_addresses `array`: List of shipping addresses for customer.
    * items [ShippingAddress](#shippingaddress)

### PGApiBatchCloseRequest
* PGApiBatchCloseRequest `object`
  * developer_id `string`: Used to indicate which company developed the integration to the Qualpay Payment Gateway. This may also be used to provide the payment solution name that is connected to the Qualpay Payment Gateway.
  * loc_id `string`: When a merchant has more than one location using the same currency, this value is used to specify the specific location for this request.
  * merchant_id **required** `integer`: Unique identifier on the Qualpay system.
  * profile_id `string`: Explicitly identifies which Payment Gateway profile should be used for the request.
  * report_data `string`: This field contains a JSON array of field data that will be included with the transaction data reported in Qualpay Manager.
  * session_id `string`: INTERNAL USE ONLY.
  * tran_currency `integer`: ISO numeric currency code for the transaction. Default is 840 - USD. Refer to <a href="/developer/api/reference#currency-codes"target="_blank">Currency Codes</a> for a list of currency codes.
  * user_id `integer`: INTERNAL USE ONLY.

### PGApiBatchCloseResponse
* PGApiBatchCloseResponse `object`
  * amt_tran `number`: Transaction amount, returned only on partial approvals.
  * auth_avs_result `string`: AVS result from card issuer (if avs_zip and optionally avs_address were provided in the request).
  * auth_code `string`: Card issuer authorization code returned on successful authorization request.
  * auth_cvv2_result `string`: CVV2 result from card issuer (if CVV2 data was sent in the request).
  * batch_info `string`: JSON array of JSON objects containing the batch close results by currency and location.
  * card_id `string`: 32-byte value returned after successful tokenize request or when an authorization or sale transaction includes requests tokenization of the carcholder data.
  * echo_fields `string`: Data that was provided in echo_fields in the request.
  * pg_id **required** `string`: 32-byte unique identifier generated by the payment gateway, returned in all valid responses. It provides a reference to the transaction and is required for some post-auth operations (e.g. capture, refund, or void).
  * rcode **required** `string`: Repsonse code from the payment gateway. "000" indicates success. Refer to <a href="/developer/api/reference#api-response-codes"target="_blank">Platform API Response Codes</a> for entire list of Payment Gateway Response Codes.
  * rmsg **required** `string`: Response text from the payment gateway.

### PGApiCaptureRequest
* PGApiCaptureRequest `object`
  * amt_tran **required** `number`: Total amount of transaction to capture (if different than original authorization amount). Partial captures are allowed here if the capture amount is less than the authorized amount.
  * developer_id `string`: Used to indicate which company developed the integration to the Qualpay Payment Gateway. This may also be used to provide the payment solution name that is connected to the Qualpay Payment Gateway.
  * loc_id `string`: When a merchant has more than one location using the same currency, this value is used to specify the specific location for this request.
  * merchant_id **required** `integer`: Unique identifier on the Qualpay system.
  * profile_id `string`: Explicitly identifies which Payment Gateway profile should be used for the request.
  * report_data `string`: This field contains a JSON array of field data that will be included with the transaction data reported in Qualpay Manager.
  * session_id `string`: INTERNAL USE ONLY.
  * user_id `integer`: INTERNAL USE ONLY.
  * vendor_id `integer`: Identifies the vendor to which this capture request applies.

### PGApiCaptureResponse
* PGApiCaptureResponse `object`
  * amt_tran `number`: Transaction amount, returned only on partial approvals.
  * auth_avs_result `string`: AVS result from card issuer (if avs_zip and optionally avs_address were provided in the request).
  * auth_code `string`: Card issuer authorization code returned on successful authorization request.
  * auth_cvv2_result `string`: CVV2 result from card issuer (if CVV2 data was sent in the request).
  * batch_info `string`: JSON array of JSON objects containing the batch close results by currency and location.
  * card_id `string`: 32-byte value returned after successful tokenize request or when an authorization or sale transaction includes requests tokenization of the carcholder data.
  * echo_fields `string`: Data that was provided in echo_fields in the request.
  * pg_id **required** `string`: 32-byte unique identifier generated by the payment gateway, returned in all valid responses. It provides a reference to the transaction and is required for some post-auth operations (e.g. capture, refund, or void).
  * rcode **required** `string`: Repsonse code from the payment gateway. "000" indicates success. Refer to <a href="/developer/api/reference#api-response-codes"target="_blank">Platform API Response Codes</a> for entire list of Payment Gateway Response Codes.
  * rmsg **required** `string`: Response text from the payment gateway.

### PGApiRefundRequest
* PGApiRefundRequest `object`
  * amt_tran **required** `number`: Total amount to refund. Partial refunds are allowed by providing an amount in this field that is less than the total original transaction amount.
  * developer_id `string`: Used to indicate which company developed the integration to the Qualpay Payment Gateway. This may also be used to provide the payment solution name that is connected to the Qualpay Payment Gateway.
  * loc_id `string`: When a merchant has more than one location using the same currency, this value is used to specify the specific location for this request.
  * merchant_id **required** `integer`: Unique identifier on the Qualpay system.
  * profile_id `string`: Explicitly identifies which Payment Gateway profile should be used for the request.
  * report_data `string`: This field contains a JSON array of field data that will be included with the transaction data reported in Qualpay Manager.
  * session_id `string`: INTERNAL USE ONLY.
  * user_id `integer`: INTERNAL USE ONLY.
  * vendor_id `integer`: Identifies the vendor to which this refund request applies.

### PGApiRefundResponse
* PGApiRefundResponse `object`
  * amt_tran `number`: Transaction amount, returned only on partial approvals.
  * auth_avs_result `string`: AVS result from card issuer (if avs_zip and optionally avs_address were provided in the request).
  * auth_code `string`: Card issuer authorization code returned on successful authorization request.
  * auth_cvv2_result `string`: CVV2 result from card issuer (if CVV2 data was sent in the request).
  * batch_info `string`: JSON array of JSON objects containing the batch close results by currency and location.
  * card_id `string`: 32-byte value returned after successful tokenize request or when an authorization or sale transaction includes requests tokenization of the carcholder data.
  * echo_fields `string`: Data that was provided in echo_fields in the request.
  * pg_id **required** `string`: 32-byte unique identifier generated by the payment gateway, returned in all valid responses. It provides a reference to the transaction and is required for some post-auth operations (e.g. capture, refund, or void).
  * rcode **required** `string`: Repsonse code from the payment gateway. "000" indicates success. Refer to <a href="/developer/api/reference#api-response-codes"target="_blank">Platform API Response Codes</a> for entire list of Payment Gateway Response Codes.
  * rmsg **required** `string`: Response text from the payment gateway.

### PGApiResponse
* PGApiResponse `object`
  * amt_tran `number`: Transaction amount, returned only on partial approvals.
  * auth_avs_result `string`: AVS result from card issuer (if avs_zip and optionally avs_address were provided in the request).
  * auth_code `string`: Card issuer authorization code returned on successful authorization request.
  * auth_cvv2_result `string`: CVV2 result from card issuer (if CVV2 data was sent in the request).
  * batch_info `string`: JSON array of JSON objects containing the batch close results by currency and location.
  * card_id `string`: 32-byte value returned after successful tokenize request or when an authorization or sale transaction includes requests tokenization of the carcholder data.
  * echo_fields `string`: Data that was provided in echo_fields in the request.
  * pg_id **required** `string`: 32-byte unique identifier generated by the payment gateway, returned in all valid responses. It provides a reference to the transaction and is required for some post-auth operations (e.g. capture, refund, or void).
  * rcode **required** `string`: Repsonse code from the payment gateway. "000" indicates success. Refer to <a href="/developer/api/reference#api-response-codes"target="_blank">Platform API Response Codes</a> for entire list of Payment Gateway Response Codes.
  * rmsg **required** `string`: Response text from the payment gateway.

### PGApiTokenizeRequest
* PGApiTokenizeRequest `object`
  * avs_address `string`: Street address of the cardholder. If present, it will be included in the authorization request sent to the issuing bank.
  * avs_zip `string`: Zip code of the cardholder. If present, it will be included in the authorization request sent to the issuing bank.
  * card_id `string`: Card ID received from a tokenization request. The card_id may be used in place of a card number in requests requiring cardholder account data.
  * card_number `string`: Cardholder's card number. If this field is present in the request, the field card_swipe must NOT be present, the field exp_date must USUALLY be present, and the fields card_id and customer_id should NOT be present.
  * card_swipe `string`: Contains either track 1 or track 2 data magnetic stripe data. If the magnetic stripe reader provides both track 1 and track 2 data in a single read, it is the responsibility of the imeplementer to send data for only one of the two tracks.
  * cvv2 `string`: CVV2 or CID value from the signature panel on the back of the cardholder's card. If present during a request that requires authorization, the value will be sent to the issuer for validation.
  * developer_id `string`: Used to indicate which company developed the integration to the Qualpay Payment Gateway. This may also be used to provide the payment solution name that is connected to the Qualpay Payment Gateway.
  * exp_date **required** `string`: Expiration date of cardholder card number. Required when the field card_number is present. If card_swipe is present in the request, this field must NOT be present. When card_id or customer_id is present in the request this field may also be present; if it is not, then the expiration date from the Card Vault will be used.
  * loc_id `string`: When a merchant has more than one location using the same currency, this value is used to specify the specific location for this request.
  * merchant_id **required** `integer`: Unique identifier on the Qualpay system.
  * profile_id `string`: Explicitly identifies which Payment Gateway profile should be used for the request.
  * report_data `string`: This field contains a JSON array of field data that will be included with the transaction data reported in Qualpay Manager.
  * session_id `string`: INTERNAL USE ONLY.
  * single_use `boolean`: In a tokenize request, setting the single_use field to "true" will cause a single-use token to be generated. This token will expire in 10 minutes or when first used. This field defaults to "false".
  * user_id `integer`: INTERNAL USE ONLY.

### PGApiTokenizeResponse
* PGApiTokenizeResponse `object`
  * amt_tran `number`: Transaction amount, returned only on partial approvals.
  * auth_avs_result `string`: AVS result from card issuer (if avs_zip and optionally avs_address were provided in the request).
  * auth_code `string`: Card issuer authorization code returned on successful authorization request.
  * auth_cvv2_result `string`: CVV2 result from card issuer (if CVV2 data was sent in the request).
  * batch_info `string`: JSON array of JSON objects containing the batch close results by currency and location.
  * card_id `string`: 32-byte value returned after successful tokenize request or when an authorization or sale transaction includes requests tokenization of the carcholder data.
  * card_number `string`: Cardholder's card number (truncated).
  * echo_fields `string`: Data that was provided in echo_fields in the request.
  * pg_id **required** `string`: 32-byte unique identifier generated by the payment gateway, returned in all valid responses. It provides a reference to the transaction and is required for some post-auth operations (e.g. capture, refund, or void).
  * rcode **required** `string`: Repsonse code from the payment gateway. "000" indicates success. Refer to <a href="/developer/api/reference#api-response-codes"target="_blank">Platform API Response Codes</a> for entire list of Payment Gateway Response Codes.
  * rmsg **required** `string`: Response text from the payment gateway.

### PGApiTransactionRequest
* PGApiTransactionRequest `object`
  * amt_convenience_fee `number`: Amount of convenience fee. A convenience fee is a fee charged for the "convenience" of being able to pay using an alternative payment channel outside the merchant's customary payment channel and must be a flat/fixed fee amount per transaction. This field tracks the convenience fee amount for display purposes, but the amount of the fee must be included in amt_tran.
  * amt_fbo `number`: Total amount of transaction transferred to the FBO account.
  * amt_tax `number`: Amount of sales tax included in the total transaction amount. Required for Level 2 and Level 3 interchange qualification.
  * amt_tran `number`: Total amount of transaction including sales tax (if applicable).
  * amt_tran_fee `number`: Amount of transaction surcharge fee. A surcharge is a fee added to the cost of a purchase for the "privilege" of using a credit card, and can be a percentage of the transaction amount. This field tracks the surcharge amount of the transaction for display purposes, but the amount of the fee must be included in amt_tran.
  * auth_code `string`: Auth code is required for a force request, and should contain the 6-character authorization code that was received during a voice or ARU authoirzation.
  * avs_address `string`: Street address of the cardholder. If present, it will be included in the authorization request sent to the issuing bank.
  * avs_zip `string`: Zip code of the cardholder. If present, it will be included in the authorization request sent to the issuing bank.
  * card_id `string`: Card ID received from a tokenization request. The card_id may be used in place of a card number or card swipe.
  * card_number `string`: Cardholder's card number. If this field is present in the request, the field card_swipe must NOT be present, the field exp_date must USUALLY be present, and the fields card_id and customer_id should NOT be present.
  * card_swipe `string`: Contains either track 1 or track 2 data magnetic stripe data. If the magnetic stripe reader provides both track 1 and track 2 data in a single read, it is the responsibility of the imeplementer to send data for only one of the two tracks.
  * cardholder_name `string`: When provided in a tokenize request, the cardholder name will be stored in the Card Vault along with the cardholder card number and expiration date.
  * cavv_3ds `string`: CAVV returned from the merchants 3DS MPI (Base64 encoded).
  * customer [Customer](#customer)
  * customer_code `string`: Reference code supplied by the cardholder to the merchant.
  * customer_email `string`: Must contain comma-separated list of e-mail addresses to which a receipt should be sent.
  * customer_id `string`: Customer ID value established by the merchant. The customer_id may be used in place of a card number in requests requiring cardholder account data.
  * cvv2 `string`: CVV2 or CID value from the signature panel on the back of the cardholder's card. If present during a request that requires authorization, the value will be sent to the issuer for validation.
  * dba_name `string`: When the merchant has been authorized to send dynamic DBA information, this field should contain the DBA name used in the authorization and clearing messages.<br>Note: the payment gateway will automatically add a prefix plus an asterisk (*) to the dba_name value. For example, if the prefix is ABC and the dba_name value is SHOE CO, the DBA name will show as "ABC*SHOE CO" on the cardholder's credit card statement.
  * developer_id `string`: Used to indicate which company developed the integration to the Qualpay Payment Gateway. This may also be used to provide the payment solution name that is connected to the Qualpay Payment Gateway.
  * email_receipt `boolean`: When this field is provided and set to true, a customer_email must also be provided. When these two fields are provided, a transaction receipt will be sent via e-mail to the address(es) provided in the customer_email field.
  * exp_date `string`: Expiration date of cardholder card number. Required when the field card_number is present. If card_swipe is present in the request, this field must NOT be present. When card_id or customer_id is present in the request this field may also be present; if it is not, then the expiration date from the Card Vault will be used.
  * fbo_id `integer`: For Benefit Of (FBO) account identifier on the Qualpay system.
  * line_items `string`: JSON array of JSON objects. Each object represents a single line item detail element related to the transaction. Each detail element has required subfields: quantity (7N), description (26AN), unit_of_measure (12AN), product_code (12AN), debit_credit_ind (1 AN), unit_cost (12,2N). Optional subfields: type_of_supply (2AN), commodity code (12AN)
  * loc_id `string`: When a merchant has more than one location using the same currency, this value is used to specify the specific location for this request.
  * mc_ucaf_data `string`: MasterCard UCAF Field Data returned from the merchants 3DS MPI (Base64 encoded).
  * mc_ucaf_ind `string`: MasterCard UCAF Collection Indicator returned from the merchants 3DS MPI.
  * merch_ref_num `string`: Merchant provided reference value that will be stored with the transaction data and included with transaction data in reports within Qualpay Manager. This value will also be attached to any lifecycle transactions (e.g. retrieval requests and chargebacks) that may occur.
  * merchant_id **required** `integer`: Unique identifier on the Qualpay system.
  * moto_ecomm_ind `string`: Indicates type of MOTO transaction: 0 = Card Present (not MOTO/e-Commerce), 1 = One Time MOTO transaction, 2 = Recurring, 3 = Installment, 5 = Full 3D-Secure transaction, 6 = Merchant 3D-Secure transaction, 7 = e-Commerce Channel Encrypted (SSL).
  * pg_id `string`: PG ID of previously authorized transaction. This field is required when sending a capture, refund, or void request.
  * profile_id `string`: Explicitly identifies which Payment Gateway profile should be used for the request.
  * purchase_id `string`: Purchase Identifier (also referred to as the invoice number generated by the merchant.
  * report_data `string`: This field contains a JSON array of field data that will be included with the transaction data reported in Qualpay Manager.
  * session_id `string`: INTERNAL USE ONLY.
  * subscription_id `integer`: Identifies the recurring subscription that applies to this transaction.
  * tokenize `boolean`: In an authorization, credit, force, sale, or verify request the merchant can set tokenize to "true" and the payment gateway will store the cardholder data in the Card Vault and provide a card_id in the repsonse. If the card_number or card_id in the request is already in the Card Vault, this flag instructs the payment gateway to update the associated data (e.g. avs_address, avs_zip, exp_date) if present.
  * tran_currency `integer`: ISO numeric currency code for the transaction. Default is 840 - USD. Refer to <a href="/developer/api/reference#currency-codes"target="_blank">Currency Codes</a> for a list of currency codes.
  * user_id `integer`: INTERNAL USE ONLY.
  * xid_3ds `string`: Transaction ID (XID) returned from the merchants 3DS MPI (Base64 encoded).

### PGApiTransactionResponse
* PGApiTransactionResponse `object`
  * amt_tran `number`: Transaction amount, returned only on partial approvals.
  * auth_avs_result `string`: AVS result from card issuer (if avs_zip and optionally avs_address were provided in the request).
  * auth_code `string`: Card issuer authorization code returned on successful authorization request.
  * auth_cvv2_result `string`: CVV2 result from card issuer (if CVV2 data was sent in the request).
  * batch_info `string`: JSON array of JSON objects containing the batch close results by currency and location.
  * card_id `string`: 32-byte value returned after successful tokenize request or when an authorization or sale transaction includes requests tokenization of the carcholder data.
  * echo_fields `string`: Data that was provided in echo_fields in the request.
  * merchant_advice_code `string`: Recurring transaction advice for MasterCard authorizations.<ul><li>M001 = New account information available</li><li>M002 = Try again later</li><li>M003 = Do not try again for recurring payments transaction</li><li>M004 = Token requirements not fulfilled for this token type</li><li>M021 = Recurring payment cancellation</li></ul>
  * pg_id **required** `string`: 32-byte unique identifier generated by the payment gateway, returned in all valid responses. It provides a reference to the transaction and is required for some post-auth operations (e.g. capture, refund, or void).
  * rcode **required** `string`: Repsonse code from the payment gateway. "000" indicates success. Refer to <a href="/developer/api/reference#api-response-codes"target="_blank">Platform API Response Codes</a> for entire list of Payment Gateway Response Codes.
  * rmsg **required** `string`: Response text from the payment gateway.

### PGApiVerifyRequest
* PGApiVerifyRequest `object`
  * avs_address `string`: Street address of the cardholder. If present, it will be included in the authorization request sent to the issuing bank.
  * avs_zip `string`: Zip code of the cardholder. If present, it will be included in the authorization request sent to the issuing bank.
  * card_id `string`: Card ID received from a tokenization request. The card_id may be used in place of a card number or card swipe.
  * card_number **required** `string`: Cardholder's card number. If this field is present in the request, the field card_swipe must NOT be present, the field exp_date must USUALLY be present, and the fields card_id and customer_id should NOT be present.
  * card_swipe `string`: Contains either track 1 or track 2 data magnetic stripe data. If the magnetic stripe reader provides both track 1 and track 2 data in a single read, it is the responsibility of the imeplementer to send data for only one of the two tracks.
  * cardholder_name `string`: When provided in a tokenize request, the cardholder name will be stored in the Card Vault along with the cardholder card number and expiration date.
  * customer [Customer](#customer)
  * customer_code `string`: Reference code supplied by the cardholder to the merchant.
  * cvv2 `string`: CVV2 or CID value from the signature panel on the back of the cardholder's card. If present during a request that requires authorization, the value will be sent to the issuer for validation.
  * developer_id `string`: Used to indicate which company developed the integration to the Qualpay Payment Gateway. This may also be used to provide the payment solution name that is connected to the Qualpay Payment Gateway.
  * exp_date **required** `string`: Expiration date of cardholder card number. Required when the field card_number is present. If card_swipe is present in the request, this field must NOT be present. When card_id or customer_id is present in the request this field may also be present; if it is not, then the expiration date from the Card Vault will be used.
  * loc_id `string`: When a merchant has more than one location using the same currency, this value is used to specify the specific location for this request.
  * merch_ref_num `string`: Merchant provided reference value that will be stored with the transaction data and included with transaction data in reports within Qualpay Manager. This value will also be attached to any lifecycle transactions (e.g. retrieval requests and chargebacks) that may occur.
  * merchant_id **required** `integer`: Unique identifier on the Qualpay system.
  * moto_ecomm_ind `string`: Indicates type of MOTO transaction: 0 = Card Present (not MOTO/e-Commerce), 1 = One Time MOTO transaction, 2 = Recurring, 3 = Installment, 5 = Full 3D-Secure transaction, 6 = Merchant 3D-Secure transaction, 7 = e-Commerce Channel Encrypted (SSL).
  * profile_id `string`: Explicitly identifies which Payment Gateway profile should be used for the request.
  * report_data `string`: This field contains a JSON array of field data that will be included with the transaction data reported in Qualpay Manager.
  * session_id `string`: INTERNAL USE ONLY.
  * tokenize `boolean`: In an authorization, credit, force, sale, or verify request the merchant can set tokenize to "true" and the payment gateway will store the cardholder data in the Card Vault and provide a card_id in the repsonse. If the card_number or card_id in the request is already in the Card Vault, this flag instructs the payment gateway to update the associated data (e.g. avs_address, avs_zip, exp_date) if present.
  * user_id `integer`: INTERNAL USE ONLY.

### PGApiVerifyResponse
* PGApiVerifyResponse `object`
  * amt_tran `number`: Transaction amount, returned only on partial approvals.
  * auth_avs_result `string`: AVS result from card issuer (if avs_zip and optionally avs_address were provided in the request).
  * auth_code `string`: Card issuer authorization code returned on successful authorization request.
  * auth_cvv2_result `string`: CVV2 result from card issuer (if CVV2 data was sent in the request).
  * batch_info `string`: JSON array of JSON objects containing the batch close results by currency and location.
  * card_id `string`: 32-byte value returned after successful tokenize request or when an authorization or sale transaction includes requests tokenization of the carcholder data.
  * echo_fields `string`: Data that was provided in echo_fields in the request.
  * pg_id **required** `string`: 32-byte unique identifier generated by the payment gateway, returned in all valid responses. It provides a reference to the transaction and is required for some post-auth operations (e.g. capture, refund, or void).
  * rcode **required** `string`: Repsonse code from the payment gateway. "000" indicates success. Refer to <a href="/developer/api/reference#api-response-codes"target="_blank">Platform API Response Codes</a> for entire list of Payment Gateway Response Codes.
  * rmsg **required** `string`: Response text from the payment gateway.

### PGApiVoidRequest
* PGApiVoidRequest `object`
  * developer_id `string`: Used to indicate which company developed the integration to the Qualpay Payment Gateway. This may also be used to provide the payment solution name that is connected to the Qualpay Payment Gateway.
  * loc_id `string`: When a merchant has more than one location using the same currency, this value is used to specify the specific location for this request.
  * merchant_id **required** `integer`: Unique identifier on the Qualpay system.
  * profile_id `string`: Explicitly identifies which Payment Gateway profile should be used for the request.
  * report_data `string`: This field contains a JSON array of field data that will be included with the transaction data reported in Qualpay Manager.
  * session_id `string`: INTERNAL USE ONLY.
  * user_id `integer`: INTERNAL USE ONLY.
  * vendor_id `integer`: Identifies the vendor to which this void request applies.

### PGApiVoidResponse
* PGApiVoidResponse `object`
  * amt_tran `number`: Transaction amount, returned only on partial approvals.
  * auth_avs_result `string`: AVS result from card issuer (if avs_zip and optionally avs_address were provided in the request).
  * auth_code `string`: Card issuer authorization code returned on successful authorization request.
  * auth_cvv2_result `string`: CVV2 result from card issuer (if CVV2 data was sent in the request).
  * batch_info `string`: JSON array of JSON objects containing the batch close results by currency and location.
  * card_id `string`: 32-byte value returned after successful tokenize request or when an authorization or sale transaction includes requests tokenization of the carcholder data.
  * echo_fields `string`: Data that was provided in echo_fields in the request.
  * pg_id **required** `string`: 32-byte unique identifier generated by the payment gateway, returned in all valid responses. It provides a reference to the transaction and is required for some post-auth operations (e.g. capture, refund, or void).
  * rcode **required** `string`: Repsonse code from the payment gateway. "000" indicates success. Refer to <a href="/developer/api/reference#api-response-codes"target="_blank">Platform API Response Codes</a> for entire list of Payment Gateway Response Codes.
  * rmsg **required** `string`: Response text from the payment gateway.

### ShippingAddress
* ShippingAddress `object`
  * primary `boolean`: Identifies the primary shipping address where there are multiple shipping addresses.
  * shipping_addr1 **required** `string`: Customer street and number, P.O. box, c/o.
  * shipping_addr2 `string`: Customer apartment, suite, unit, building, floor, etc.
  * shipping_city **required** `string`: Customer shipping city.
  * shipping_country `string`: Customer shipping country.
  * shipping_country_code `string`: ISO numeric country code for the shipping address. Refer to <a href="/developer/api/reference#currency-codes"target="_blank">Currency Codes</a> for a list of country codes. If the country code is provided, the shipping_country will be updated to match the country code. 
  * shipping_firm_name `string`: Business name if applicable. 
  * shipping_first_name **required** `string`: Customer shipping first name.
  * shipping_last_name **required** `string`: Customer shipping last name.
  * shipping_state **required** `string`: Customer shipping state (abbreviated).
  * shipping_zip **required** `string`: Customer shipping zip code.
  * shipping_zip4 `string`: Customer shipping zip+4 code if applicable.


