# @datafire/mastercard_masterpassqr

Client library for Send Person to Merchant

## Installation and Usage
```bash
npm install --save @datafire/mastercard_masterpassqr
```
```js
let mastercard_masterpassqr = require('@datafire/mastercard_masterpassqr').create();

.then(data => {
  console.log(data);
});
```

## Description



## Actions

### createMerchantTransfer
Initiates a Mastercard Merchant Presented QR purchase transaction by securing funds from a consumer’s account with a Funding Transaction and pushing funds to a merchant account with a Payment Transaction.


```js
mastercard_masterpassqr.createMerchantTransfer({
  "partnerId": "",
  "merchant_transfer": null
}, context)
```

#### Input
* input `object`
  * partnerId **required** `string`: Path Param - Provider assigned partner id. 
  * merchant_transfer **required** [MerchantTransfer_1_wrapper](#merchanttransfer_1_wrapper)

#### Output
* output [MerchantTransfer_14_wrapper](#merchanttransfer_14_wrapper)

### getMerchantTransferByRef
Purpose of this service is to retrieve the Transfer resource associated with a specified transfer_reference value.


```js
mastercard_masterpassqr.getMerchantTransferByRef({
  "partnerId": "",
  "ref": ""
}, context)
```

#### Input
* input `object`
  * partnerId **required** `string`: Path Param - Provider assigned partner id. Details - string, 32
  * ref **required** `string`: Query Param - Is the client specified transfer reference when initiating the transfer. Allowable characters are alphanumeric and * , - . _ ~. Details- 6-40 Example- DEF123456

#### Output
* output [MerchantTransfers_69_wrapper](#merchanttransfers_69_wrapper)

### createMerchantPayment
Initiates a Mastercard Merchant Presented QR purchase transaction by pushing funds to a merchant account.


```js
mastercard_masterpassqr.createMerchantPayment({
  "partnerId": ""
}, context)
```

#### Input
* input `object`
  * partnerId **required** `string`: Path Param - Provider assigned partner id. Details - string, 32
  * merchant_payment_transfer [MerchantPaymentTransfer_29_wrapper](#merchantpaymenttransfer_29_wrapper)

#### Output
* output [MerchantTransfer_40_wrapper](#merchanttransfer_40_wrapper)

### createMerchantRefund
Initiates a Mastercard Merchant Presented QR Refund transaction by pushing funds from a merchant account back to the customer's account.


```js
mastercard_masterpassqr.createMerchantRefund({
  "partnerId": ""
}, context)
```

#### Input
* input `object`
  * partnerId **required** `string`: Path Param - Provider assigned partner id. Details - string, 32
  * merchant_refund_transfer [MerchantRefundTransfer_93_wrapper](#merchantrefundtransfer_93_wrapper)

#### Output
* output [MerchantTransfer_104_wrapper](#merchanttransfer_104_wrapper)

### getMerchantTransferById
Purpose of this service is to retrieve the Transfer resource associated with the specified transfer-id.


```js
mastercard_masterpassqr.getMerchantTransferById({
  "partnerId": "",
  "transferId": ""
}, context)
```

#### Input
* input `object`
  * partnerId **required** `string`: Path Param - Provider assigned partner id. Details - string, 32
  * transferId **required** `string`: Path Param - Valid transfer id

#### Output
* output [MerchantTransfer_54_wrapper](#merchanttransfer_54_wrapper)

### createFundingReversal
Funding Reversals must be submitted within 30 minutes of the funding transfer request, and should only be submitted for the following conditions:  Funding Transaction must be reversed if payment transaction cannot complete successfully, i.e. the payment transaction is rejected or declined.  Upon a successful reversal of a funding transaction, the refund must be credited to the sending consumer’s Funding Account.


```js
mastercard_masterpassqr.createFundingReversal({
  "partner-id": "",
  "transfer-id": "",
  "transaction-id": ""
}, context)
```

#### Input
* input `object`
  * partner-id **required** `string`: Path Param - Provider assigned partner id. Details - string, 32
  * transfer-id **required** `string`: Valid transfer id
  * transaction-id **required** `string`: Valid transaction id
  * funding_reversal [FundingReversal_144_wrapper](#fundingreversal_144_wrapper)

#### Output
* output [Transfer_145_wrapper](#transfer_145_wrapper)

### sendNotificationPaymentRetry
Client can simulate a Mastercard Merchant Presented QR Payment notification to the registered URL endpoint. 


```js
mastercard_masterpassqr.sendNotificationPaymentRetry({
  "partnerId": ""
}, context)
```

#### Input
* input `object`
  * partnerId **required** `string`: Path Param - Provider assigned partner id. Details - string, 32
  * notification_request [NotificationRequest_159_wrapper](#notificationrequest_159_wrapper)

#### Output
* output [NotificationResponse_162_wrapper](#notificationresponse_162_wrapper)

### sendNotificationRefundRetry
Client can simulate a Mastercard Merchant Presented QR Refund notification to the registered URL endpoint. 


```js
mastercard_masterpassqr.sendNotificationRefundRetry({
  "partnerId": ""
}, context)
```

#### Input
* input `object`
  * partnerId **required** `string`: Path Param - Provider assigned partner id. Details - string, 32
  * notification_request [NotificationRequest_163_wrapper](#notificationrequest_163_wrapper)

#### Output
* output [NotificationResponse_166_wrapper](#notificationresponse_166_wrapper)

### createTransferNotificationRegistration
This service allows Mastercard Merchant QR originating and receiving partners to register a PAN and service provider to receive notifications on an inbound Merchant Refund or Merchant Payment Transaction.


```js
mastercard_masterpassqr.createTransferNotificationRegistration({
  "partnerId": ""
}, context)
```

#### Input
* input `object`
  * partnerId **required** `string`: Path Param - Provider assigned partner id. Type: Alphanumeric Special Length: 40
  * accountregistration [Accountregistration_167_wrapper](#accountregistration_167_wrapper)

#### Output
* output [Accountregistration_168_wrapper](#accountregistration_168_wrapper)

### deleteTransferNotificationRegistration
This service allows Mastercard Merchant QR originating and receiving partners to delete a registered PAN for notifications. 


```js
mastercard_masterpassqr.deleteTransferNotificationRegistration({
  "partnerId": "",
  "account-reg-ref": ""
}, context)
```

#### Input
* input `object`
  * partnerId **required** `string`: Path Param - Provider assigned partner id. Type: Alphanumeric Special Length: 40
  * account-reg-ref **required** `string`: Path Param - System generated unique account registration identifier. Type: Alphanumeric Special Length: 40

#### Output
* output [Accountregistration_171_wrapper](#accountregistration_171_wrapper)

### NotificationRegistrationAPIReadBy
This service allows Mastercard Merchant QR originating and receiving partners to retrieve the service provider's information for a registered PAN for notifications. 


```js
mastercard_masterpassqr.NotificationRegistrationAPIReadBy({
  "partnerId": "",
  "account-reg-ref": ""
}, context)
```

#### Input
* input `object`
  * partnerId **required** `string`: Path Param - Provider assigned partner id. Type: Alphanumeric Special Length: 40
  * account-reg-ref **required** `string`: Path Param - System generated unique account registration identifier. Type: Alphanumberic Special Length: 40

#### Output
* output [Accountregistration_172_wrapper](#accountregistration_172_wrapper)

### NotificationRegistrationAPIUpdate
This service allows Mastercard Merchant QR originating and receiving partners to update the notitification service provider for a registered PAN.


```js
mastercard_masterpassqr.NotificationRegistrationAPIUpdate({
  "partnerId": "",
  "account-reg-ref": ""
}, context)
```

#### Input
* input `object`
  * partnerId **required** `string`: Path Param - Provider assigned partner id. Type: Alphanumeric Special Length: 40
  * account-reg-ref **required** `string`: Path Param - System generated unique account registration identifier. Type: Alphanumeric Special Length: 40
  * accountregistration [Accountregistration_169_wrapper](#accountregistration_169_wrapper)

#### Output
* output [Accountregistration_170_wrapper](#accountregistration_170_wrapper)

### createFunding
The Funding Transaction enables the 'pull' of money from the sender's card to the Transaction Originator who is providing the Person to Merchant service. The amount that is debited from the Funding Account (sending consumer's account) will be the amount 'pushed' to the recipient via a payment transfer request.  Funds can be transferred from Mastercard® or Maestro® debit card accounts. To initiate the funding transaction, users can provide the sending consumer's Primary Account Number (PAN) or a unique identifier previously mapped to the sending consumer's account.


```js
mastercard_masterpassqr.createFunding({
  "partnerId": ""
}, context)
```

#### Input
* input `object`
  * partnerId **required** `string`: Path Param - Provider assigned partner id. Details - string, 32
  * funding_transfer [FundingTransfer_118_wrapper](#fundingtransfer_118_wrapper)

#### Output
* output [Transfer_129_wrapper](#transfer_129_wrapper)

### createDigitalAccntRefNum
Used to create a digital account reference number from Incontrol 


```js
mastercard_masterpassqr.createDigitalAccntRefNum({
  "partnerId": ""
}, context)
```

#### Input
* input `object`
  * partnerId **required** `string`: Path Param - Provider assigned partner id. 
  * digital_account [DigitalAccount_86_wrapper](#digitalaccount_86_wrapper)

#### Output
* output [DigitalAccount_87_wrapper](#digitalaccount_87_wrapper)

### retrieveDigitalAccntRefNumList
Used to retreive a digital account reference list from Incontrol 


```js
mastercard_masterpassqr.retrieveDigitalAccntRefNumList({
  "partnerId": ""
}, context)
```

#### Input
* input `object`
  * partnerId **required** `string`: Path Param - Provider assigned partner id. Details - string, 32
  * digital_account [DigitalAccount_89_wrapper](#digitalaccount_89_wrapper)

#### Output
* output [DigitalAccount_90_wrapper](#digitalaccount_90_wrapper)



## Definitions

### Accountregistration_167
* Accountregistration_167 `object`: Contains the details of the request message.
  * account_uri **required** `string`: URI describing the account. It must be a direct account reference, i.e. URI scheme must be pan. Valid Values- Refer 'Account URIs'. 
  * notification_partner_id **required** `string`: Service provider partner id being registered to receive notifications. Type: Alphanumeric Special Length: 40

### Accountregistration_167_wrapper
* Accountregistration_167_wrapper `object`: Contains the details of the request message.
  * accountregistration [Accountregistration_167](#accountregistration_167)

### Accountregistration_168
* Accountregistration_168 `object`: Response details
  * account_registration_reference `string`: System generated unique account registration identifier. Type: Alphanumeric Special Length: 40
  * account_uri `string`: URI describing the account. It will be a direct account reference, i.e. URI scheme will be pan. Valid Values- Refer 'Account URIs'. 
  * notification_partner_id `string`: Service provider partner id registered to receive notifications. Type: Alphanumeric Special Length: 40
  * notification_partner_name `string`: Name of the service provider partner id registered. Type: Alphanumeric Special Length: 100

### Accountregistration_168_wrapper
* Accountregistration_168_wrapper `object`: Response details
  * accountregistration [Accountregistration_168](#accountregistration_168)

### Accountregistration_169
* Accountregistration_169 `object`: Contains the details of the request message.
  * account_uri **required** `string`: URI describing the account. It must be a direct account reference, i.e. URI scheme must be pan. Valid Values- Refer 'Account URIs'. 
  * notification_partner_id **required** `string`: Service provider partner id being registered to receive notifications. Type: Alphanumeric Special Length: 40

### Accountregistration_169_wrapper
* Accountregistration_169_wrapper `object`: Contains the details of the request message.
  * accountregistration [Accountregistration_169](#accountregistration_169)

### Accountregistration_170
* Accountregistration_170 `object`: Response details
  * account_registration_reference `string`: System generated unique account registration identifier. Type: Alphanumeric Special Length: 40
  * account_uri `string`: URI describing the account. It will be a direct account reference, i.e. URI scheme will be pan. Valid Values- Refer 'Account URIs'. 
  * notification_partner_id `string`: Service provider partner id registered to receive notifications. Type: Alphanumeric Special Length: 40
  * notification_partner_name `string`: Name of the service provider partner id registered. Type: Alphanumeric Special Length: 100

### Accountregistration_170_wrapper
* Accountregistration_170_wrapper `object`: Response details
  * accountregistration [Accountregistration_170](#accountregistration_170)

### Accountregistration_171
* Accountregistration_171 `object`: Response details
  * account_registration_reference `string`: System generated unique account registration identifier. Type: Alphanumeric Special Length: 40
  * account_uri `string`: URI describing the account. It will be a direct account reference, i.e. URI scheme will be pan. Valid Values- Refer 'Account URIs'. 
  * notification_partner_id `string`: Service provider partner id registered to receive notifications. Type: Alphanumeric Special Length: 40
  * notification_partner_name `string`: Name of the service provider partner id registered. Type: Alphanumeric Special Length: 100

### Accountregistration_171_wrapper
* Accountregistration_171_wrapper `object`: Response details
  * accountregistration [Accountregistration_171](#accountregistration_171)

### Accountregistration_172
* Accountregistration_172 `object`: Response details
  * account_registration_reference `string`: System generated unique account registration identifier. Type: Alphanumberic Special Length: 40
  * account_uri `string`: URI describing the account. It will be a direct account reference, i.e. URI scheme will be pan. Valid Values- Refer 'Account URIs'. 
  * notification_partner_id `string`: Service provider partner id registered to receive notifications. Type: Alphanumeric Special Length: 40
  * notification_partner_name `string`: Name of the service provider partner id registered. Type: Alphanumeric Special Length: 100

### Accountregistration_172_wrapper
* Accountregistration_172_wrapper `object`: Response details
  * accountregistration [Accountregistration_172](#accountregistration_172)

### AdditionalMerchantData_109
* AdditionalMerchantData_109 `object`: Additional merchant data of recipient
  * payment_facilitator_id `integer`: This ID is the Company ID that will be assigned during the time of registration with Mastercard for a Service Provider as Payment Facilitator. Type: Numeric [0-9],Maximum-Length: 11.
  * sub_merchant_id `string`: The Sub-Merchant ID must always be the merchant ID of the sub-merchant whenever a payment facilitator is involved in a transaction,Type: Alphanumeric [a-zA-Z 0-9],Maximum-Length: 15

### AdditionalMerchantData_121
* AdditionalMerchantData_121 `object`: Additional merchant data of sender.
  * payment_facilitator_id **required** `integer`: This ID is the Company ID that will be assigned during the time of registration with Mastercard for a Service Provider as Payment Facilitator. Type: Numeric [0-9]  Length: 1-11.
  * sub_merchant_id **required** `string`: The Sub-Merchant ID must always be the merchant ID of the sub-merchant whenever a payment facilitator is involved in a transaction. Type: Alphanumeric [a-zA-Z 0-9], Length: 1-15.

### AdditionalMerchantData_132
* AdditionalMerchantData_132 `object`: Additional merchant data of sender
  * payment_facilitator_id `integer`: This ID is the Company ID that will be assigned during the time of registration with Mastercard for a Service Provider as Payment Facilitator. Type: Numeric [0-9], Maximum-Length: 11.
  * sub_merchant_id `string`: The Sub-Merchant ID must always be the merchant ID of the sub-merchant whenever a payment facilitator is involved in a transaction. Type: Alphanumeric [a-zA-Z 0-9], Maximum-Length: 15.

### AdditionalMerchantData_17
* AdditionalMerchantData_17 `object`: Additional merchant data of sender.
  * payment_facilitator_id `integer`: This ID is the Company ID that will be assigned during the time of registration with Mastercard for a Service Provider as Payment Facilitator. Type: Numeric [0-9], Maximum-Length: 11.
  * sub_merchant_id `string`: The Sub-Merchant ID must always be the merchant ID of the sub-merchant whenever a payment facilitator is involved in a transaction. Type: Alphanumeric [a-zA-Z 0-9], Maximum- Length: 15.

### AdditionalMerchantData_20
* AdditionalMerchantData_20 `object`: Additional merchant data of recipient
  * payment_facilitator_id `integer`: This ID is the Company ID that will be assigned during the time of registration with Mastercard for a Service Provider as Payment Facilitator. Type: Numeric [0-9], Maximum-Length: 11.
  * sub_merchant_id `string`: The Sub-Merchant ID must always be the merchant ID of the sub-merchant whenever a payment facilitator is involved in a transaction. Type: Alphanumeric [a-zA-Z 0-9], Maximum-Length: 15.

### AdditionalMerchantData_34
* AdditionalMerchantData_34 `object`: Additional merchant data of recipient
  * payment_facilitator_id **required** `integer`: This ID is the Company ID that will be assigned during the time of registration with Mastercard for a Service Provider as Payment Facilitator. Type: Numeric [0-9],Length: 1-11
  * sub_merchant_id **required** `string`: The Sub-Merchant ID must always be the merchant ID of the sub-merchant whenever a payment facilitator is involved in a transaction, Type :Alphanumeric [a-zA-Z 0-9] , Maximum- Length : 1-15

### AdditionalMerchantData_45
* AdditionalMerchantData_45 `object`: Additonal merchant data of recipient.
  * payment_facilitator_id `integer`: This ID is the Company ID that will be assigned during the time of registration with Mastercard for a Service Provider as Payment Facilitator. Type: Numeric [0-9],Maximum-Length: 11
  * sub_merchant_id `string`: The Sub-Merchant ID must always be the merchant ID of the sub-merchant whenever a payment facilitator is involved in a transaction, Type :Alphanumeric [a-zA-Z 0-9] , Maximum- Length :15

### AdditionalMerchantData_5
* AdditionalMerchantData_5 `object`: Additional merchant data of sender.
  * payment_facilitator_id **required** `integer`: This ID is the Company ID that will be assigned during the time of registration with Mastercard for a Service Provider as Payment Facilitator. Type: Numeric [0-9], Length:1- 11.
  * sub_merchant_id **required** `string`: The Sub-Merchant ID must always be the merchant ID of the sub-merchant whenever a payment facilitator is involved in a transaction. Type: Alphanumeric [a-zA-Z 0-9], Length: 1-15.

### AdditionalMerchantData_57
* AdditionalMerchantData_57 `object`: Additional merchant data of sender.
  * payment_facilitator_id `integer`: This ID is the Company ID that will be assigned during the time of registration with Mastercard for a Service Provider as Payment Facilitator.Type:Numeric [0-9], Maximum-Length: 11.
  * sub_merchant_id `string`: The Sub-Merchant ID must always be the merchant ID of the sub-merchant whenever a payment facilitator is involved in a transaction, Type: Alphanumeric [a-zA-Z 0-9], Maximum-Length: 15

### AdditionalMerchantData_60
* AdditionalMerchantData_60 `object`: Additional merchant data of recipinet.
  * payment_facilitator_id `integer`: This ID is the Company ID that will be assigned during the time of registration with Mastercard for a Service Provider as Payment Facilitator.Type:Numeric [0-9], Maximum-Length: 11.
  * sub_merchant_id `string`: The Sub-Merchant ID must always be the merchant ID of the sub-merchant whenever a payment facilitator is involved in a transaction, Type: Alphanumeric [a-zA-Z 0-9], Maximum-Length: 15

### AdditionalMerchantData_74
* AdditionalMerchantData_74 `object`: Additional merchant data of sender.
  * payment_facilitator_id `integer`: This ID is the Company ID that will be assigned during the time of registration with Mastercard for a Service Provider as Payment Facilitator.Type:Numeric [0-9],Maximum-Length: 11.
  * sub_merchant_id `string`: The Sub-Merchant ID must always be the merchant ID of the sub-merchant whenever a payment facilitator is involved in a transaction, Type: Alphanumeric [a-zA-Z 0-9],Maximum-Length: 15

### AdditionalMerchantData_77
* AdditionalMerchantData_77 `object`: Additional merchant data of recipient.
  * payment_facilitator_id `integer`: This ID is the Company ID that will be assigned during the time of registration with Mastercard for a Service Provider as Payment Facilitator.Type:Numeric [0-9],Maximum-Length: 11.
  * sub_merchant_id `string`: The Sub-Merchant ID must always be the merchant ID of the sub-merchant whenever a payment facilitator is involved in a transaction, Type: Alphanumeric [a-zA-Z 0-9],Maximum-Length: 15

### AdditionalMerchantData_9
* AdditionalMerchantData_9 `object`: Additional merchant data of recipient.
  * payment_facilitator_id **required** `integer`: This ID is the Company ID that will be assigned during the time of registration with Mastercard for a Service Provider as Payment Facilitator. Type: Numeric [0-9]  Length: 1-11.
  * sub_merchant_id **required** `string`: The Sub-Merchant ID must always be the merchant ID of the sub-merchant whenever a payment facilitator is involved in a transaction. Type: Alphanumeric [a-zA-Z 0-9], Length: 1-15.

### AdditionalMerchantData_98
* AdditionalMerchantData_98 `object`: Additional merchant data of recipient.
  * payment_facilitator_id **required** `integer`: This ID is the Company ID that will be assigned during the time of registration with Mastercard for a Service Provider as Payment Facilitator.Type: Numeric [0-9], Length:1- 11.
  * sub_merchant_id **required** `string`: The Sub-Merchant ID must always be the merchant ID of the sub-merchant whenever a payment facilitator is involved in a transaction, Type: Alphanumeric [a-zA-Z 0-9],Length:1- 15

### Address_106
* Address_106 `object`: Address of the sender.
  * city `string`: City of the sender. Details- 1-25
  * country `string`: Country of the sender as an ISO alpha country code. Details- Alpha, Length: 3
  * country_subdivision `string`: State or province of the sender. If the payment_transfer.sender.address.country is USA or CAN, the country subdivision is required. Details- Conditional, Alpha, 2-3
  * line1 `string`: First line of the address of the sender. Details- 1-50
  * line2 `string`: Second line of the address of the sender. Details- 1-50
  * postal_code `string`: Postal code of the sender. Format in 5 digits or 5 digits hyphen 4 digits.  Details numeric length: 5 or 5-4

### Address_108
* Address_108 `object`: Address of the recipient/merchant.
  * city `string`: City of the recipient/merchant.
  * country `string`: Country of the recipient as an ISO alpha country code.
  * country_subdivision `string`: State or province of the recipient/merchant.
  * line1 `string`: First line of the address of the recipient/merchant.
  * line2 `string`: Second line of the address of the recipient/merchant.
  * postal_code `string`: Postal code of the recipient/merchant.

### Address_120
* Address_120 `object`: Sender's home address.
  * city `string`: Home city. Details- 1-25
  * country `string`: The sender's home country as an ISO 3166-1 alpha-3 country code, in uppercase. Conditional - required if Sanction Screening validation is enabled. Details- alpha-3
  * country_subdivision `string`: Home state or province. US or Canada country subdivision code is required. Details- 2-3
  * line1 `string`:  First line of sender's home address. Details- 1-50
  * line2 `string`: Second line of sender's home address. Details- 1-50
  * postal_code `string`: Home postal code. Format in 5 digits or 5 digits hyphen 4 digits.  Details numeric length: 5 or 5-4

### Address_124
* Address_124 `object`: Recipient's home address.
  * city **required** `string`: Home city. Details- 1-25
  * country **required** `string`: The recipient's home country as an ISO 3166-1 alpha-3 country code, in uppercase. Details- alpha-3
  * country_subdivision `string`: Home state or province. US or Canada country subdivision code is required. Details- 2-3
  * line1 **required** `string`: First line of recipient's home address. Details- 1-50
  * line2 `string`: Second line of recipient's home address. Details- 1-50
  * postal_code **required** `string`: Home postal code.  Format in 5 digits or 5 digits hyphen 4 digits.  Details numeric length: 5 or 5-4

### Address_131
* Address_131 `object`: Address of the sender.
  * city `string`: City of the sender.
  * country `string`: Country of the sender as an ISO alpha country code.
  * country_subdivision `string`: State or province of the sender.
  * line1 `string`: First line of the address of the sender.
  * line2 `string`: Second line of the address of the sender.
  * postal_code `string`: Postal code of the sender.

### Address_135
* Address_135 `object`:  Address of the recipient.
  * city `string`: City of the recipient
  * country `string`: Country of the recipient as an ISO alpha country code.
  * country_subdivision `string`: State or province of the recipient.
  * line1 `string`: First line of the address of the recipient.
  * line2 `string`: Second line of the address of the recipient.
  * postal_code `string`: Postal code of the recipient.

### Address_147
* Address_147 `object`: Address of the sender.
  * city `string`: City of the sender.
  * country `string`: Country of the sender as an ISO alpha country code.
  * country_subdivision `string`: State or province of the sender.
  * line1 `string`: First line of the address of the sender.
  * line2 `string`: Second line of the address of the sender.
  * postal_code `string`: Postal code of the sender.

### Address_150
* Address_150 `object`:  Address of the recipient.
  * city `string`: City of the recipient
  * country `string`: Country of the recipient as an ISO alpha country code.
  * country_subdivision `string`: State or province of the recipient.
  * line1 `string`: First line of the address of the recipient.
  * line2 `string`: Second line of the address of the recipient.
  * postal_code `string`: Postal code of the recipient.

### Address_16
* Address_16 `object`: Address of the sender.
  * city `string`: City of the sender. \n\nType: Alphanumeric Special [a-zA-Z0-9 !"#$%&'()*+,-./\:;<=>?@[]_`{|}~ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÚÚÝàáâãäåçèéêëìíîïñòóôõöùúûüýÿ], Maximum Length: 25
  * country `string`: Country of the sender as an ISO alpha country code. 
  * country_subdivision `string`: State or province of the sender. If the merchant_transfer.sender.address.country is USA or CAN, the country subdivision is required. 
  * line1 `string`: First line of the address of the sender. \n\nType: Alphanumeric Special [a-zA-Z0-9 !"#$%&'()*+,-./\:;<=>?@[]_`{|}~ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÚÚÝàáâãäåçèéêëìíîïñòóôõöùúûüýÿ], Maximum Length: 50
  * line2 `string`: Second line of the address of the sender. \n\nType: Alphanumeric Special [a-zA-Z0-9 !"#$%&'()*+,-./\:;<=>?@[]_`{|}~ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÚÚÝàáâãäåçèéêëìíîïñòóôõöùúûüýÿ], Maximum Length: 50
  * postal_code `string`: Postal code of the sender. 

### Address_19
* Address_19 `object`: Address of the recipient/merchant.
  * city `string`: City of the recipient/merchant.\n\nType: Alphanumeric Special [a-zA-Z0-9 !"#$%&'()*+,-./\:;<=>?@[]_`{|}~ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÚÚÝàáâãäåçèéêëìíîïñòóôõöùúûüýÿ], Maximum Length: 25
  * country `string`: Country of the recipient as an ISO alpha country code. 
  * country_subdivision `string`: State or province of the recipient/merchant. If the merchant_transfer.recipient.address.country is USA or CAN, the country subdivision code is required. 
  * line1 `string`: First line of the address of the recipient/merchant.\n\nType: Alphanumeric Special [a-zA-Z0-9 !"#$%&'()*+,-./\:;<=>?@[]_`{|}~ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÚÚÝàáâãäåçèéêëìíîïñòóôõöùúûüýÿ], Maximum Length: 50
  * line2 `string`: Second line of the address of the recipient/merchant.\n\nType: Alphanumeric Special [a-zA-Z0-9 !"#$%&'()*+,-./\:;<=>?@[]_`{|}~ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÚÚÝàáâãäåçèéêëìíîïñòóôõöùúûüýÿ], Maximum Length: 50
  * postal_code `string`: Postal code of the recipient. 

### Address_31
* Address_31 `object`: Address of the sender. Optional.
  * city **required** `string`: City of the sender.\n\nType: Alphanumeric Special [a-zA-Z0-9 !"#$%&'()*+,-./\:;<=>?@[]_`{|}~ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÚÚÝàáâãäåçèéêëìíîïñòóôõöùúûüýÿ], Length: 1-25
  * country **required** `string`: Country of the sender as an ISO alpha country code. Details- Alpha, Length: 3
  * country_subdivision `string`: State or province of the sender. If the payment_transfer.sender.address.country is USA or CAN, the country subdivision is required. Details- Conditional, Alpha, 2-3
  * line1 `string`: First line of the address of the sender.\n\nType: Alphanumeric Special [a-zA-Z0-9 !"#$%&'()*+,-./\:;<=>?@[]_`{|}~ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÚÚÝàáâãäåçèéêëìíîïñòóôõöùúûüýÿ], Length: 1-50
  * line2 `string`: Second line of the address of the sender.\n\nType: Alphanumeric Special [a-zA-Z0-9 !"#$%&'()*+,-./\:;<=>?@[]_`{|}~ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÚÚÝàáâãäåçèéêëìíîïñòóôõöùúûüýÿ], Length: 1-50
  * postal_code `string`: Postal code of the sender. Format in 5 digits or 5 digits hyphen 4 digits.  Details numeric length: 5 or 5-4

### Address_33
* Address_33 `object`: Address of the recipient/merchant.
  * city **required** `string`: City of the recipient/merchant.\n\nType: Alphanumeric Special [a-zA-Z0-9 !"#$%&'()*+,-./\:;<=>?@[]_`{|}~ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÚÚÝàáâãäåçèéêëìíîïñòóôõöùúûüýÿ], Length: 1-25
  * country **required** `string`: The recipient's/merchant's home country as an ISO 3166-1 alpha-3 country code, in uppercase. Details- Alpha, Length: 3
  * country_subdivision `string`: State or province of the recipient/merchant. If the merchant_transfer.recipient.address.country is USA or CAN, the country subdivision code is required. 
  * line1 `string`: First line of the address of the recipient/merchant.\n\nType: Alphanumeric Special [a-zA-Z0-9 !"#$%&'()*+,-./\:;<=>?@[]_`{|}~ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÚÚÝàáâãäåçèéêëìíîïñòóôõöùúûüýÿ], Length: 1-50
  * line2 `string`: Second line of the address of the recipient/merchant.\n\nType: Alphanumeric Special [a-zA-Z0-9 !"#$%&'()*+,-./\:;<=>?@[]_`{|}~ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÚÚÝàáâãäåçèéêëìíîïñòóôõöùúûüýÿ], Length: 1-50
  * postal_code `string`: Postal code of the recipient/merchant. Format in 5 digits or 5 digits hyphen 4 digits.  Details numeric length: 5 or 5-4

### Address_4
* Address_4 `object`: Address of the sender. Optional
  * city **required** `string`: City of the sender.\n\nType: Alphanumeric Special [a-zA-Z0-9 !"#$%&'()*+,-./\:;<=>?@[]_`{|}~ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÚÚÝàáâãäåçèéêëìíîïñòóôõöùúûüýÿ], Length: 1-25.
  * country **required** `string`: Country of the sender as an ISO alpha country code. 
  * country_subdivision `string`: State or province of the sender. If the merchant_transfer.sender.address.country is USA or CAN, the country subdivision is required. 
  * line1 `string`: First line of the address of the sender.\n\nType: Alphanumeric Special [a-zA-Z0-9 !"#$%&'()*+,-./\:;<=>?@[]_`{|}~ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÚÚÝàáâãäåçèéêëìíîïñòóôõöùúûüýÿ], Length: 1-50
  * line2 `string`: Second line of the address of the sender.\n\nType: Alphanumeric Special [a-zA-Z0-9 !"#$%&'()*+,-./\:;<=>?@[]_`{|}~ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÚÚÝàáâãäåçèéêëìíîïñòóôõöùúûüýÿ], Length: 1-50
  * postal_code `string`: Postal code of the sender. 

### Address_42
* Address_42 `object`: Address of the sender.
  * city `string`: City of the sender. Details- 1-25
  * country `string`: Country of the sender as an ISO alpha country code. Details- Alpha, Length: 3
  * country_subdivision `string`: State or province of the sender. If the payment_transfer.sender.address.country is USA or CAN, the country subdivision is required. Details- Conditional, Alpha, 2-3
  * line1 `string`: First line of the address of the sender. Details- 1-50
  * line2 `string`: Second line of the address of the sender. Details- 1-50
  * postal_code `string`: Postal code of the sender. Format in 5 digits or 5 digits hyphen 4 digits.  Details numeric length: 5 or 5-4

### Address_44
* Address_44 `object`: Address of the recipient/merchant.
  * city `string`: City of the recipient/merchant.
  * country `string`: Country of the recipient as an ISO alpha country code.
  * country_subdivision `string`: State or province of the recipient/merchant.
  * line1 `string`: First line of the address of the recipient/merchant.
  * line2 `string`: Second line of the address of the recipient/merchant.
  * postal_code `string`: Postal code of the recipient/merchant.

### Address_56
* Address_56 `object`: Address of the sender.
  * city `string`: City of the sender. Details- 1-25
  * country `string`: Country of the sender as an ISO alpha country code. Details- Alpha, Length: 3
  * country_subdivision `string`: State or province of the sender. If the payment_transfer.sender.address.country is USA or CAN, the country subdivision is required. Details- Conditional, Alpha, 2-3
  * line1 `string`: First line of the address of the sender. Details- 1-50
  * line2 `string`: Second line of the address of the sender. Details- 1-50
  * postal_code `string`: Postal code of the sender. Format in 5 digits or 5 digits hyphen 4 digits.  Details numeric length: 5 or 5-4

### Address_59
* Address_59 `object`: Address of the recipient/merchant.
  * city `string`: City of the recipient/merchant.
  * country `string`: Country of the recipient as an ISO alpha country code.
  * country_subdivision `string`: State or province of the recipient/merchant.
  * line1 `string`: First line of the address of the recipient/merchant.
  * line2 `string`: Second line of the address of the recipient/merchant.
  * postal_code `string`: Postal code of the recipient/merchant.

### Address_73
* Address_73 `object`: Address of the sender.
  * city `string`: City of the sender. Details- 1-25
  * country `string`: Country of the sender as an ISO alpha country code. Details- Alpha, Length: 3
  * country_subdivision `string`: State or province of the sender. If the payment_transfer.sender.address.country is USA or CAN, the country subdivision is required. Details- Conditional, Alpha, 2-3
  * line1 `string`: First line of the address of the sender. Details- 1-50
  * line2 `string`: Second line of the address of the sender. Details- 1-50
  * postal_code `string`: Postal code of the sender. Format in 5 digits or 5 digits hyphen 4 digits.  Details numeric length: 5 or 5-4

### Address_76
* Address_76 `object`: Address of the recipient/merchant.
  * city `string`: City of the recipient/merchant.
  * country `string`: Country of the recipient/merchant as an ISO alpha country code.
  * country_subdivision `string`: State or province of the recipient/merchant.
  * line1 `string`: First line of the address of the recipient/merchant.
  * line2 `string`: Second line of the address of the recipient/merchant.
  * postal_code `string`: Postal code of the recipient/merchant.

### Address_8
* Address_8 `object`: Address of the recipient/merchant.
  * city **required** `string`: City of the recipient/merchant.\n\nType: Alphanumeric Special [a-zA-Z0-9 !"#$%&'()*+,-./\:;<=>?@[]_`{|}~ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÚÚÝàáâãäåçèéêëìíîïñòóôõöùúûüýÿ], Length: 1-25
  * country **required** `string`: The recipient''s/merchant''s home country as an ISO 3166-1 alpha-3 country code. 
  * country_subdivision `string`: State or province of the recipient/merchant. If the merchant_transfer.recipient.address.country is USA or CAN, the country subdivision code is required. 
  * line1 `string`: First line of the address of the recipient/merchant.\n\nType: Alphanumeric Special [a-zA-Z0-9 !"#$%&'()*+,-./\:;<=>?@[]_`{|}~ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÚÚÝàáâãäåçèéêëìíîïñòóôõöùúûüýÿ], Length: 1-50
  * line2 `string`: Second line of the address of the recipient/merchant.\n\nType: Alphanumeric Special [a-zA-Z0-9 !"#$%&'()*+,-./\:;<=>?@[]_`{|}~ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÚÚÝàáâãäåçèéêëìíîïñòóôõöùúûüýÿ], Length: 1-50
  * postal_code `string`: Postal code of the receipent. 

### Address_95
* Address_95 `object`: Address of the sender. If this field is included then city and country field are also required.
  * city **required** `string`: City of the sender.\n\nType: Alphanumeric Special [a-zA-Z0-9 !"#$%&'()*+,-./\:;<=>?@[]_`{|}~ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÚÚÝàáâãäåçèéêëìíîïñòóôõöùúûüýÿ], Length: 1-25
  * country **required** `string`: Country of the sender as an ISO alpha country code. Details- Alpha, Length: 3
  * country_subdivision `string`: State or province of the sender. If the payment_transfer.sender.address.country is USA or CAN, the country subdivision is required. Details- Conditional, Alpha, 2-3
  * line1 `string`: First line of the address of the sender.\n\nType: Alphanumeric Special [a-zA-Z0-9 !"#$%&'()*+,-./\:;<=>?@[]_`{|}~ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÚÚÝàáâãäåçèéêëìíîïñòóôõöùúûüýÿ], Length: 1-50
  * line2 `string`: Second line of the address of the sender.\n\nType: Alphanumeric Special [a-zA-Z0-9 !"#$%&'()*+,-./\:;<=>?@[]_`{|}~ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÚÚÝàáâãäåçèéêëìíîïñòóôõöùúûüýÿ], Length: 1-50
  * postal_code `string`: Postal code of the sender. Format in 5 digits or 5 digits hyphen 4 digits.  Details numeric length: 5 or 5-4

### Address_97
* Address_97 `object`: Address of the recipient/merchant.
  * city **required** `string`: City of the recipient/merchant.\n\nType: Alphanumeric Special [a-zA-Z0-9 !"#$%&'()*+,-./\:;<=>?@[]_`{|}~ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÚÚÝàáâãäåçèéêëìíîïñòóôõöùúûüýÿ], Length: 1-25
  * country **required** `string`: The recipient's/merchant's home country as an ISO 3166-1 alpha-3 country code, in uppercase. Details- Alpha, Length: 3
  * country_subdivision `string`: State or province of the recipient/merchant. If the merchant_transfer.recipient.address.country is USA or CAN, the country subdivision code is required. 
  * line1 `string`: First line of the address of the recipient/merchant.\n\nType: Alphanumeric Special [a-zA-Z0-9 !"#$%&'()*+,-./\:;<=>?@[]_`{|}~ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÚÚÝàáâãäåçèéêëìíîïñòóôõöùúûüýÿ], Length: 1-50
  * line2 `string`: Second line of the address of the recipient/merchant.\n\nType: Alphanumeric Special [a-zA-Z0-9 !"#$%&'()*+,-./\:;<=>?@[]_`{|}~ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÚÚÝàáâãäåçèéêëìíîïñòóôõöùúûüýÿ], Length: 1-50
  * postal_code `string`: Postal code of the recipient/merchant. Format in 5 digits or 5 digits hyphen 4 digits.  Details numeric length: 5 or 5-4

### CustomField_100
* CustomField_100 `object`: Contains custom field names and values to appear in the reconciliation report. This can be a list of multiple name/value pairs. The names provided must match the configured in the partner setup.
  * name **required** `string`: Name to be displayed in the reconciliation report. This value will appear as a header in the reconciliation reports. Name values to be defined during the onboarding process. Details- 1-40
  * value **required** `string`: Value to be displayed in the reconciliation report. Details- 1-40

### CustomField_116
* CustomField_116 `object`: Contains custom field names and values to appear in the reconciliation report. This can be a list of multiple name/value pairs. The names provided must match the configured in the partner setup.
  * name `string`: Name to be displayed in the reconciliation report. This value will appear as a header in the reconciliation reports. Name values to be defined during the onboarding process. Details- 1-40
  * value `string`: Value to be displayed in the reconciliation report. Details- 1-40

### CustomField_12
* CustomField_12 `object`: Contains custom field names and values to appear in the reconciliation report. This can be a list of multiple name/value pairs.
  * name **required** `string`: Name to be displayed in the reconciliation report. This value will appear as a header in the reconciliation reports. Name values to be defined during the onboarding process. \n\nType: Alphanumeric Special [a-zA-Z0-9!\"#$%&'()*+,-./\\:;<=>?@[]_`{|}~], Length: 1-40
  * value **required** `string`: Value to be displayed in the reconciliation report. \n\nType: Alphanumeric Special [a-zA-Z0-9!\"#$%&'()*+,-./\\:;<=>?@[]_`{|}~], Length: 1-40

### CustomField_127
* CustomField_127 `object`: Contains custom field names and values to appear in the reconciliation report for this transfer. This could be a list of multiple values. These should match with the information during onboarding.
  * name **required** `string`: Name to be displayed in the reconciliation report for this transfer. This value will appear as a header in the column name of the report. The fields that can be used have to be defined during the onboarding process. Details- 1-40
  * value **required** `string`: Value to be displayed in the reconciliation report for this transfer. Details- 1-40

### CustomField_143
* CustomField_143 `object`: Contains custom field names and values to appear in the reconciliation report. This can be a list of multiple name/value pairs. The names provided must match the configured in the partner setup.
  * name `string`: Name to be displayed in the reconciliation report. This value will appear as a header in the reconciliation reports. Name values to be defined during the onboarding process. Details- 1-40
  * value `string`: Value to be displayed in the reconciliation report. Details- 1-40

### CustomField_158
* CustomField_158 `object`: Contains custom field names and values to appear in the reconciliation report. This can be a list of multiple name/value pairs. The names provided must match the configured in the partner setup.
  * name `string`: Name to be displayed in the reconciliation report. This value will appear as a header in the reconciliation reports. Name values to be defined during the onboarding process. Details- 1-40
  * value `string`: Value to be displayed in the reconciliation report. Details- 1-40

### CustomField_27
* CustomField_27 `object`: Contains custom field names and values to appear in the reconciliation report. This can be a list of multiple name/value pairs.
  * name `string`: Name to be displayed in the reconciliation report. This value will appear as a header in the reconciliation reports. Name values to be defined during the onboarding process.\n\nType: Alphanumeric Special [a-zA-Z0-9!\"#$%&'()*+,-./\\:;<=>?@[]_`{|}~], Maximum Length: 40
  * value `string`: Value to be displayed in the reconciliation report.\n\nType: Alphanumeric Special [a-zA-Z0-9!\"#$%&'()*+,-./\\:;<=>?@[]_`{|}~], Maximum Length: 40

### CustomField_36
* CustomField_36 `object`: Contains custom field names and values to appear in the reconciliation report. This can be a list of multiple name/value pairs. The names provided must match the configured in the partner setup.
  * name **required** `string`: Name to be displayed in the reconciliation report. This value will appear as a header in the reconciliation reports. Name values to be defined during the onboarding process. Details- 1-40
  * value **required** `string`: Value to be displayed in the reconciliation report. Details- 1-40

### CustomField_52
* CustomField_52 `object`: Contains custom field names and values to appear in the reconciliation report. This can be a list of multiple name/value pairs. The names provided must match the configured in the partner setup.
  * name `string`: Name to be displayed in the reconciliation report. This value will appear as a header in the reconciliation reports. Name values to be defined during the onboarding process. Details- 1-40
  * value `string`: Value to be displayed in the reconciliation report. Details- 1-40

### CustomField_67
* CustomField_67 `object`: Contains custom field names and values to appear in the reconciliation report. This can be a list of multiple name/value pairs. The names provided must match the configured in the partner setup.
  * name `string`: Name to be displayed in the reconciliation report. This value will appear as a header in the reconciliation reports. Name values to be defined during the onboarding process. Details- 1-40
  * value `string`: Value to be displayed in the reconciliation report. Details- 1-40

### CustomField_84
* CustomField_84 `object`: Contains custom field names and values to appear in the reconciliation report. This can be a list of multiple name/value pairs. The names provided must match the configured in the partner setup.
  * name `string`: Name to be displayed in the reconciliation report. This value will appear as a header in the reconciliation reports. Name values to be defined during the onboarding process. Details- 1-40
  * value `string`: Value to be displayed in the reconciliation report. Details- 1-40

### Data_112
* Data_112 `object`: An array containing the Transactions in the transfer. Valid Values- Refer 'Transaction Data'
  * transaction `array`: transaction array
    * items [Transaction_113](#transaction_113)

### Data_139
* Data_139 `object`: An array containing the Transactions in the transfer.
  * transaction `array`: transaction array
    * items [Transaction_140](#transaction_140)

### Data_154
* Data_154 `object`: An array containing the Transactions in the transfer.
  * transaction `array`: transaction array
    * items [Transaction_155](#transaction_155)

### Data_23
* Data_23 `object`: An array containing the Transactions in the transfer. Valid Values- Refer 'Transaction Data'
  * transaction `array`: Array of transactions
    * items [Transaction_24](#transaction_24)

### Data_48
* Data_48 `object`: An array containing the Transactions in the transfer. Valid Values- Refer 'Transaction Data'
  * transaction `array`: transaction array
    * items [Transaction_49](#transaction_49)

### Data_63
* Data_63 `object`: An array containing the Transactions in the transfer. Valid Values- Refer 'Transaction Data'
  * transaction `array`: Array of transactions
    * items [Transaction_64](#transaction_64)

### Data_70
* Data_70 `object`: An array containing the Transactions in the transfer
  * merchant_transfer `array`: An array containing the Transactions in the transfer
    * items [MerchantTransfer_71](#merchanttransfer_71)

### Data_80
* Data_80 `object`: An array containing the Transactions in the transfer. Valid Values- Refer 'Transaction Data'
  * transaction `array`: Array of transactions
    * items [Transaction_81](#transaction_81)

### DigitalAccountReferenceNumber_88
* DigitalAccountReferenceNumber_88 `object`: Information about the digital account reference number
  * issue_timestamp `string`: Local date and time when the transaction is submitted. Details-YYYY-MM-DDTHH:MM:SS±hh[:mm]
  * pan `string`: URI describing the account. It will include the account information but will not include security codes (e.g. CVC or expiration date for a card account).

### DigitalAccountReferenceNumber_92
* DigitalAccountReferenceNumber_92 `object`: Contains the details of an individual digital account reference number. 
  * issue_timestamp `string`: Date and time the Digital Account Reference Number was created. Details- YYYY-MM-DDTHH:MM:SSZ Valid Values- Refer 'Date And Time Formats'
  * pan `string`: URI describing the account. URI scheme must be pan.Valid Values- Refer 'Account URIs'. 

### DigitalAccountReferenceNumbers_91
* DigitalAccountReferenceNumbers_91 `object`: Contains the list of digital account reference numbers. This can be a list of multiple pan/timestamp pairs
  * digital_account_reference_number `array`: Contains the details of an individual digital account reference number. 
    * items [DigitalAccountReferenceNumber_92](#digitalaccountreferencenumber_92)

### DigitalAccount_86
* DigitalAccount_86 `object`: Contains the details of the request message.
  * account_type **required** `string`: Account type must contain one of the following: CREDIT, DEBIT, PREPAID, DEPOSIT_ACCOUNT, MOBILE_MONEY_ACCOUNT or CASH.
  * account_uri **required** `string`: URI describing the account. URI scheme must be rawl. Valid Values- Refer 'Account URIs'. 
  * reference **required** `string`: Provide a unique reference number. It must be a unique value for the partner. Details- 6-40, Allowable characters are alphanumeric and * , - . _ ~

### DigitalAccount_86_wrapper
* DigitalAccount_86_wrapper `object`: Contains the details of the request message.
  * digital_account [DigitalAccount_86](#digitalaccount_86)

### DigitalAccount_87
* DigitalAccount_87 `object`: Response details for a create digital account reference number
  * account_type `string`: Account type must contain one of the following: CREDIT, DEBIT, PREPAID, DEPOSIT_ACCOUNT, MOBILE_MONEY_ACCOUNT, CASH.
  * account_uri `string`: URI describing the account. URI scheme must be raw. Valid Values- Refer 'Account URIs'. 
  * digital_account_reference_number [DigitalAccountReferenceNumber_88](#digitalaccountreferencenumber_88)
  * reference `string`: Provide a unique transaction reference number. It must be a unique value for the partner. Details- 6-40, Allowable characters are alphanumeric and * , - . _ ~

### DigitalAccount_87_wrapper
* DigitalAccount_87_wrapper `object`: Response details for a create digital account reference number
  * digital_account [DigitalAccount_87](#digitalaccount_87)

### DigitalAccount_89
* DigitalAccount_89 `object`: Contains the details of the request message.
  * account_type **required** `string`: Account type must contain one of the following: CREDIT, DEBIT, PREPAID, DEPOSIT_ACCOUNT, MOBILE_MONEY_ACCOUNT or CASH.
  * account_uri **required** `string`: URI describing the account. URI scheme must be raw. Valid Values- Refer 'Account URIs'. 
  * reference **required** `string`: Provide a unique reference number. It must be a unique value for the partner. Details- 6-40, Allowable characters are alphanumeric and * , - . _ ~

### DigitalAccount_89_wrapper
* DigitalAccount_89_wrapper `object`: Contains the details of the request message.
  * digital_account [DigitalAccount_89](#digitalaccount_89)

### DigitalAccount_90
* DigitalAccount_90 `object`: Response details for a retrieve digital account reference number
  * account_type `string`: Account type must contain one of the following: CREDIT, DEBIT, PREPAID, DEPOSIT_ACCOUNT, MOBILE_MONEY_ACCOUNT or CASH.
  * account_uri `string`: URI describing the account. URI scheme must be raw. Valid Values- Refer 'Account URIs'. 
  * digital_account_reference_numbers [DigitalAccountReferenceNumbers_91](#digitalaccountreferencenumbers_91)
  * reference `string`: Provide a unique reference number. It must be a unique value for the partner. Details- 6-40, Allowable characters are alphanumeric and * , - . _ ~

### DigitalAccount_90_wrapper
* DigitalAccount_90_wrapper `object`: Response details for a retrieve digital account reference number
  * digital_account [DigitalAccount_90](#digitalaccount_90)

### FundingReversal_144
* FundingReversal_144 `object`: Contains the details of the request message.
  * reversal_reason **required** `string`: Brief description of reason for reversal. Details- alpha-numeric 1-50

### FundingReversal_144_wrapper
* FundingReversal_144_wrapper `object`: Contains the details of the request message.
  * funding_reversal [FundingReversal_144](#fundingreversal_144)

### FundingTransactionReference_38
* FundingTransactionReference_38 `object`: This section describes information used by the Mastercard and Visa networks to link a funding and payment transaction when both card accounts are Visa accounts or both accounts are Mastercard accounts.
  * network `string`: Network on which funding transaction is processed required. Valid values will be provided during partner onboarding.
  * reference_number **required** `string`: Provide the id from the funding transfer resource.\n\nType: Alphanumeric Special [a-zA-Z0-9 * , - . _ ~ ], Length: 1-19

### FundingTransfer_118
* FundingTransfer_118 `object`: Contains the details of the request message.
  * additional_message `string`: Additional Message. Details- alpha-numeric 1-65
  * amount **required** `string`: Amount of the transfer in the smallest unit of currency. Decimal implied before last two positions. Example: 100 = $1.00USD Details- numeric, 1-999999999999
  * authentication_value `string`: List of name/value pairs containing authentication  values. Refer 'Authentication Value URIs'
  * channel `string`:  Initiation channel of the payment request. This value can be defined in the onboarding process instead of passing in every call One of the WEB, MOBILE, BANK, KIOSK. Details- Conditional
  * currency **required** `string`: Three-letter ISO currency code representing the currency of the transfer amount. Details- alpha, length: 3
  * device_id `string`: The serial number of a device. Details- 1-40
  * funding_hints `string`: List of name/value pairs containing funding parameter values. Valid Values- Refer 'Funding Hints URIs'
  * interchange_rate_designator `string`: Indicates the interchange rate and editing rules applied to the transaction.
  * language_data `string`: Language Data Details- binary 1-65
  * language_identification `string`: Language Identification. Details- alpha - 3
  * location `string`: Location where the transaction is initiated from. Details- 1-40. Valid Values- Refer 'Location URIs'
  * participation_id `string`: Participation Id. An identifier agreed by both the issuing institution and the merchant. Details- alpha-numeric 1-30
  * payment_type `string`: Payment type used for transfer. Value - P2M: Person to Merchant. 
  * recipient [Recipient_123](#recipient_123)
  * recipient_account_uri **required** `string`: URI identifying receiver's account to receive the transfer. Valid Values- Refer 'Account URIs'
  * reconciliation_data [ReconciliationData_126](#reconciliationdata_126)
  * sanction_screening_override `boolean`: Override indicator if partner has opted into Sanction Screening validation as part of transaction processing.  If Sanction Screening score on either sender or receiver is equal to or above threshold configured for partner, the payment will error.  To bypass the Sanction Screening validation and process the payment the value 'true' should be submitted.  Details:  Optional – If partner has not enabled Sanction Screening validation default is 'true'.   Required - If partner has opted into Sanction Screening validation but wants to bypass Sanction Screening validation and process the payment, value should be 'true'. 
  * sender [Sender_119](#sender_119)
  * sender_account_uri `string`: URI identifying sender's account to fund the transfer. Only a pan based account is valid. Valid Values- Refer 'Account URIs' Details- Conditional
  * statement_descriptor `string`: The statement descriptor is a string which will be displayed on the recipient's bank or card statement. It consists of one or two parts: the prefix and the content. The prefix is an optional short string typically used to identify the client/merchant. It is defined during client/merchant onboarding and the same value should be used. If not provided in the API call, system will use the value defined in the onboarding process. The content portion of the statement descriptor will be displayed on the recipient's statement. If both the prefix and content portions are defined, they both are appended &lt;prefix&gt;+&lt;content&gt; The overall length may be at most 22 characters, including the prefix (even if not provided in the API call) and the content. Note: While most financial institutions display this information consistently, some may display it incorrectly or not at all. Details- Conditional, 22
  * token_cryptogram [TokenCryptogram_128](#tokencryptogram_128)
  * transfer_reference **required** `string`: Unique transaction reference number. It must be unique within the partner's domain. Allowable characters are alphanumeric and * , - . _ ~. Details- 6-40

### FundingTransfer_118_wrapper
* FundingTransfer_118_wrapper `object`: Contains the details of the request message.
  * funding_transfer [FundingTransfer_118](#fundingtransfer_118)

### GovernmentIds_122
* GovernmentIds_122 `object`: Government id’s may be required in certain markets like LAC region and also by certain Networks. The partner must provide where applicable else there is a potential for the transaction to be rejected.
  * government_id_uri `array`: URI describing the government id. [see Government ID URIs]
    * items `string`

### GovernmentIds_125
* GovernmentIds_125 `object`: Government id’s may be required in certain markets. The partner must provide where applicable.
  * government_id_uri `array`: URI describing the government id. [see Government ID URIs]
    * items `string`

### GovernmentIds_133
* GovernmentIds_133 `object`: Sender Government ID.
  * government_id_uri `array`: URI describing the sender government id. See 'Government ID URIs'.
    * items `string`

### GovernmentIds_136
* GovernmentIds_136 `object`: Recipient Government ID.
  * government_id_uri `array`: URI describing the recipient government id. See 'Government ID URIs'.
    * items `string`

### GovernmentIds_148
* GovernmentIds_148 `object`: Sender Government ID.
  * government_id_uri `array`: URI describing the sender government id. See 'Government ID URIs'.
    * items `string`

### GovernmentIds_151
* GovernmentIds_151 `object`: Recipient Government ID.
  * government_id_uri `array`: URI describing the recipient government id. See 'Government ID URIs'.
    * items `string`

### MerchantPaymentTransfer_29
* MerchantPaymentTransfer_29 `object`: Contains the details of the request message.
  * additional_message `string`: Message a financial institution will associate to the transfer and may display. \n\nType: Alphanumeric Special [a-zA-Z0-9!\"#$%&'()*+,-./\\:;<=>?@[]_`{|}~], Length: 1-65
  * amount **required** `string`: Amount of the transfer. The decimal point is implied based on the payment transfer currency. Details- 1-999999999999
  * authentication_value `string`: List of name/value pairs containing authentication  values. Refer 'Authentication Value URIs'
  * channel `string`: Initiation channel of the transfer request. This value can be defined in the onboarding process instead of passing in every call. Values: WEB, MOBILE, BANK, KIOSK. Details- Conditional
  * convenience_amount `string`: Tip or convenience amount in transaction currency. Length:1-12 numeric. If present, then convenience_indicator is also required.
  * convenience_indicator `string`: Convenience fee type code. Min length: 2. Max Length: 2. Valid values are 01,02 or 03. 01:Indicates consumer should be prompted to enter tip. 02:Indicates the merchant would mandatorily charge a flat convenience fee. 03:Indicates that merchant would charge a percentage convenience fee. Required if convenience_amount is provided.
  * currency **required** `string`: Currency of the transfer amount as an ISO alpha currency code. Details- Alpha, Length: 3
  * device_id `string`: The serial number of a device initiating the transfer. Details- 1-40
  * digital_account_reference_number `string`: URI to identify the digital account reference number. URI scheme must be pan. Valid Values- Refer 'Account URIs'.
  * funding_source **required** `string`: Funding source must contain one of the following: CREDIT, DEBIT, PREPAID, DEPOSIT_ACCOUNT, MOBILE_MONEY_ACCOUNT, CASH. In the Asia/Pacific region, funding sources are limited to Mastercard cards. In Subfield 1 values 04, 05, 06, and 07 are not applicable.
  * funding_transaction_reference [FundingTransactionReference_38](#fundingtransactionreference_38)
  * interchange_rate_designator `string`: Indicates the interchange rate and editing rules applied to the transaction.
  * location `string`: Location where the transaction is initiated. Valid Values- Refer 'Location URIs'.
  * mastercard_assigned_id `string`: Mastercard Assigned ID for tiered interchange calculations. \n\nType: Numeric [0-9], Length: 6
  * participant [Participant_37](#participant_37)
  * participation_id `string`: Participation identifier of the sender. The receiving financial institution will associate the value to the transfer. Details- 1-30
  * payment_origination_country `string`: The country where the payment originates from as an ISO 3166-1 alpha-3 country code, in uppercase. Details - Conditional. If provided, this should match a valid country configured for the partner during onboarding. If the partner is configured for multiple origination countries this field is required and must be provided. Alpha, length: 3
  * payment_type **required** `string`: P2M: Person to Merchant
  * processor_id `string`: The processor ID is a ten-digit number of the form: 9000xxxxxx, where the Single Message System-assigned processor ID will be up to the last six digits xxxxxx. If the partner is enrolled in multiple processorId numbers, the processorId number must be specified. If the partner is only enrolled in a single processorId number then system takes the onboarded value. Please contact your MasterCard Representative to enable the usage of fields in this section. Details- Numeric, 10
  * qr_data `string`: Contains QR data. For future use. Details- alpha numeric special characters 1-237.
  * recipient **required** [Recipient_32](#recipient_32)
  * recipient_account_uri **required** `string`: URI to identify the account of the recipient/merchant. When PAN is the URI then recipient/merchant information is required. Pan, Manual Entry Alias and Alias are valid schemas. Valid Values- Refer 'Account URIs'
  * reconciliation_data [ReconciliationData_35](#reconciliationdata_35)
  * routing_transit_number `string`: The nine-digit Federal Reserve Routing and Transit (R & T) number of the acquiring institution or the nine-digit pseudo-number assigned to the acquiring institution by Mastercard. If the partner is enrolled in multiple routing transit numbers, the routing transit number must be specified. If the partner is only enrolled in a single routing transit number then system takes the onboarded value. Please contact your MasterCard Representative to enable the usage of fields in this section. Details- Numeric, 9
  * sender [Sender_30](#sender_30)
  * sender_account_uri **required** `string`: URI to identify the account information of the sender. When PAN is the URI then sender information is required. If scheme chosen is raw, then funding_source must be other than CREDIT, DEBIT or PREPAID. Valid Values- Refer 'Account URIs'
  * token_cryptogram [TokenCryptogram_39](#tokencryptogram_39)
  * transaction_local_date_time **required** `string`: Local date and time when the transaction is submitted. Details-YYYY-MM-DDTHH:MM:SS±hh[:mm] 
  * transfer_reference **required** `string`: Provide a unique transaction reference number. It must be a unique value for the partner. Details- 6-40, Allowable characters are alphanumeric and * , - . _ ~

### MerchantPaymentTransfer_29_wrapper
* MerchantPaymentTransfer_29_wrapper `object`: Contains the details of the request message.
  * merchant_payment_transfer [MerchantPaymentTransfer_29](#merchantpaymenttransfer_29)

### MerchantRefundTransfer_93
* MerchantRefundTransfer_93 `object`: Contains the details of the request message.
  * additional_message `string`: Message a financial institution will associate to the transfer and may display. \n\nType: Alphanumeric Special [a-zA-Z0-9!\"#$%&'()*+,-./\\:;<=>?@[]_`{|}~], Length: 1-65
  * amount **required** `string`: Amount of the transfer. The decimal point is implied based on the payment transfer currency. Details- 1-999999999999
  * authentication_value `string`: List of name/value pairs containing authentication  values. Refer 'Authentication Value URIs'
  * channel `string`: Initiation channel of the transfer request. This value can be defined in the onboarding process instead of passing in every call. Values: WEB, MOBILE, BANK, KIOSK. Details- Conditional
  * currency **required** `string`: Currency of the transfer amount as an ISO alpha currency code. Details- Alpha, Length: 3
  * device_id `string`: The serial number of a device initiating the transfer. Details- 1-40
  * digital_account_reference_number `string`: URI to identify the digital account reference number. URI scheme must be pan. If merchant_refund_transfer.sender_account_uri does not start with PAN, the Digital Account Reference Number is required. Valid Values- Refer 'Account URIs'.
  * funding_source **required** `string`: Funding source must contain one of the following: CREDIT, DEBIT, PREPAID, DEPOSIT_ACCOUNT, MOBILE_MONEY_ACCOUNT, CASH. In the Asia/Pacific region, funding sources are limited to Mastercard cards. In Subfield 1 values 04, 05, 06, and 07 are not applicable.
  * interchange_rate_designator `string`: Indicates the interchange rate and editing rules applied to the transaction.
  * location `string`: Location where the transaction is initiated. Valid Values- Refer 'Location URIs'.
  * mastercard_assigned_id `string`: Mastercard Assigned ID for tiered interchange calculations. This field can be provided when available if transfer.payment_type is P2M. Type: Numeric [0-9], Maximum Length: 6
  * participant [Participant_101](#participant_101)
  * participation_id `string`: Participation identifier of the sender. The receiving financial institution will associate the value to the transfer. Details- 1-30
  * payment_origination_country `string`: The country where the payment originates from as an ISO 3166-1 alpha-3 country code, in uppercase. Details - Conditional. If provided, this should match a valid country configured for the partner during onboarding. If the partner is configured for multiple origination countries this field is required and must be provided. Alpha, length: 3
  * payment_transaction_reference [PaymentTransactionReference_102](#paymenttransactionreference_102)
  * payment_type **required** `string`: MRF: Merchant Refund
  * processor_id `string`: The processor ID is a ten-digit number of the form: 9000xxxxxx, where the Single Message System-assigned processor ID will be up to the last six digits xxxxxx. If the partner is enrolled in multiple processorId numbers, the processorId number must be specified. If the partner is only enrolled in a single processorId number then system takes the onboarded value. Please contact your MasterCard Representative to enable the usage of fields in this section. Details- Numeric, 10
  * recipient [Recipient_96](#recipient_96)
  * reconciliation_data [ReconciliationData_99](#reconciliationdata_99)
  * routing_transit_number `string`: The nine-digit Federal Reserve Routing and Transit (R & T) number of the acquiring institution or the nine-digit pseudo-number assigned to the acquiring institution by Mastercard. If the partner is enrolled in multiple routing transit numbers, the routing transit number must be specified. If the partner is only enrolled in a single routing transit number then system takes the onboarded value. Please contact your MasterCard Representative to enable the usage of fields in this section. Details- Numeric, 9
  * sender [Sender_94](#sender_94)
  * sender_account_uri **required** `string`: URI to identify the account information of the sender. When PAN is the URI then sender information is required. If scheme chosen is raw, then funding_source must be other than CREDIT, DEBIT or PREPAID. Valid Values- Refer 'Account URIs'
  * token_cryptogram [TokenCryptogram_103](#tokencryptogram_103)
  * transaction_local_date_time **required** `string`: Local date and time when the transaction is submitted. Details-YYYY-MM-DDTHH:MM:SS±hh[:mm] 
  * transfer_reference **required** `string`: Provide a unique transaction reference number. It must be a unique value for the partner. Details- 6-40, Allowable characters are alphanumeric and * , - . _ ~

### MerchantRefundTransfer_93_wrapper
* MerchantRefundTransfer_93_wrapper `object`: Contains the details of the request message.
  * merchant_refund_transfer [MerchantRefundTransfer_93](#merchantrefundtransfer_93)

### MerchantTransfer_1
* MerchantTransfer_1 `object`: Contains the details of the request message.
  * additional_message `string`: Message a financial institution will associate to the transfer and may display. \n\nType: Alphanumeric Special [a-zA-Z0-9!\"#$%&'()*+,-./\\:;<=>?@[]_`{|}~], Length: 1-65
  * convenience_amount `string`: Amount of the convenience fee. The decimal point is implied based on the transaction_amount.currency. "[0-9]*". Max Length: 12. Value must be less than payment_transfer.amount.
  * convenience_indicator `string`: Convenience fee type code. Min length: 2. Max Length: 2. Valid values  (01: Indicates Consumer should be prompted to enter tip 02: Indicates that merchant would mandatorily charge a flat convenience fee 03: Indicates that merchant would charge a percentage convenience fee)
  * digital_account_reference_number `string`: URI to identify the digital account reference number. URI scheme must be pan. Valid Values- Refer 'Account URIs'. 
  * interchange_rate_designator `string`: Indicates the interchange rate and editing rules applied to the transaction. Field is applicable for Europe OIs only.
  * mastercard_assigned_id `string`: Mastercard Assigned ID for tiered interchange calculations. 
  * participant **required** [Participant_13](#participant_13)
  * participation_id `string`: Participation identifier of the sender. The receiving financial institution will associate the value to the transfer. \n\nType: Alphanumeric Special [a-zA-Z0-9!\"#$%&'()*+,-./\\:;<=>?@[]_`{|}~], Length: 1-30
  * payment_origination_country `string`: Country where the payment originated from as an ISO 3166-1 alpha-3 country code. 
  * payment_type **required** `string`: Payment type used for transfer. Value - P2M: Person to Merchant. 
  * processor_id `string`: The processor ID is a ten-digit number of the form: 9000xxxxxx, where the Single Message System-assigned processor ID will be up to the last six digits xxxxxx. Partner must provide this value only if the program they are enabling requires it. For all other implementations this value must not be provided. 
  * qr_data `string`: Encoded QR (Quick Response) code data. Type: Alphanumeric and special characters [a-zA-Z0-9!"#$%&'()*+,-./\:;<=>?@[]_`{|}~], Maximum Length: 237
  * recipient **required** [Recipient_7](#recipient_7)
  * recipient_account_uri **required** `string`: URI to identify the account of the recipient/merchant. Pan, Manual Entry Alias and Alias are valid schemas. Refer 'Account URIs'
  * reconciliation_data [ReconciliationData_11](#reconciliationdata_11)
  * routing_transit_number `string`: The nine-digit Federal Reserve Routing and Transit (R & T) number of the acquiring institution or the nine-digit pseudo-number assigned to the acquiring institution by Mastercard. Partner must provide this value only if the program they are enabling requires it. For all other implementations this value must not be provided.  
  * sender **required** [Sender_3](#sender_3)
  * sender_account_uri **required** `string`: URI to identify the account information of the sender. Only PAN is the valid scheme. Refer 'Account URIs'
  * transaction_local_date_time **required** `string`: Local date and time when the transaction is submitted as an ISO 8601 format. 
  * transfer_amount **required** [TransferAmount_2](#transferamount_2)
  * transfer_reference **required** `string`: Provide a unique transaction reference number. It must be a unique value for each request initiated by the partner. 
  * unique_reference_number `string`: Unique reference number for the transaction.  

### MerchantTransfer_104
* MerchantTransfer_104 `object`: Response details for a merchant transfer.
  * channel `string`: Initiation channel of the transfer request. Values: WEB, MOBILE, BANK, KIOSK.
  * created `string`: Date and time the original transfer was created as an ISO 8601 Timestamp. Details- YYYY-MM-DDTHH:MM:SS±hh[:mm] Valid Values- Refer 'Date And Time Formats
  * device_id `string`: The serial number of a device that initiated the transfer.
  * digital_account_reference_number `string`: URI to identify the digital account reference number. It will include masked account information but will not include security codes (e.g. CVC or expiration date for a card account). 
  * funding_source `string`: Funding source must contain one of the following: CREDIT, DEBIT, PREPAID, DEPOSIT_ACCOUNT, MOBILE_MONEY_ACCOUNT or CASH. 
  * id `string`: System generated unique merchant transfer identifier.
  * interchange_rate_designator `string`: Indicates the interchange rate and editing rules applied to the transaction.
  * location `string`: Location where the transaction is initiated. Valid Values- Refer 'Location URIs'.
  * original_status `string`: Original status of the transfer. One of APPROVED, DECLINED, ERROR, PENDING, UNKNOWN.
  * participant [Participant_117](#participant_117)
  * payment_origination_country `string`: Country where the payment originated from as an ISO 3166-1 alpha-3 country code, in uppercase. Details- Alpha, Length: 3
  * payment_type `string`: P2M: Person to Merchant
  * processor_id `string`: The processor ID is a ten-digit number of the form: 9000xxxxxx, where the Single Message System-assigned processor ID will be up to the last six digits xxxxxx. If the partner is enrolled in multiple processorId numbers, the processorId number must be specified. If the partner is only enrolled in a single processorId number then system takes the onboarded value. Please contact your MasterCard Representative to enable the usage of fields in this section. Details- Numeric, 10
  * recipient [Recipient_107](#recipient_107)
  * recipient_account_uri `string`: URI describing the recipient account. It will include masked account information (e.g. "************1234" for a card account) but will not include security codes (e.g. CVC or expiration date for a card account).
  * reconciliation_data [ReconciliationData_115](#reconciliationdata_115)
  * resource_type `string`: Type of the resource that is being returned. Valid value: merchant_refund_transfer
  * routing_transit_number `string`: The nine-digit Federal Reserve Routing and Transit (R & T) number of the acquiring institution or the nine-digit pseudo-number assigned to the acquiring institution by Mastercard. If the partner is enrolled in multiple routing transit numbers, the routing transit number must be specified. If the partner is only enrolled in a single routing transit number then system takes the onboarded value. Please contact your MasterCard Representative to enable the usage of fields in this section. Details- Numeric, 9
  * sender [Sender_105](#sender_105)
  * sender_account_uri `string`: URI describing the sending account. It will include masked account information (e.g. "************1234" for a card account) but will not include security codes (e.g. CVC or expiration date for a card account).
  * status `string`: Status of the transfer. Values: APPROVED, DECLINED, ERROR, PENDING, REVERSED, CANCELLED.
  * status_timestamp `string`: Timestamp of when the status was changed to its current value. Details-YYYY-MM-DDTHH:MM:SS±hh[:mm] Valid Values- Refer 'Date And Time Formats
  * transaction_history [TransactionHistory_111](#transactionhistory_111)
  * transaction_local_date_time `string`: Local date and time when the transaction is submitted. Details-YYYY-MM-DDTHH:MM:SS±hh[:mm] 
  * transfer_amount [TransferAmount_110](#transferamount_110)
  * transfer_reference `string`: Unique transaction reference number provided when the Transfer was created.

### MerchantTransfer_104_wrapper
* MerchantTransfer_104_wrapper `object`: Response details for a merchant transfer.
  * merchant_transfer [MerchantTransfer_104](#merchanttransfer_104)

### MerchantTransfer_14
* MerchantTransfer_14 `object`: Response details for a merchant transfer.
  * additional_message `string`: Message a financial institution will associate to the transfer and may display.\n\nType: Alphanumeric Special [a-zA-Z0-9!\"#$%&'()*+,-./\\:;<=>?@[]_`{|}~], Maximum Length: 65
  * created `string`: Date and time the original transfer was created as an ISO 8601 format. 
  * digital_account_reference_number `string`: URI to identify the digital account reference number. It will include masked account information but will not include security codes (e.g. CVC or expiration date for a card account). 
  * funding_source `string`: Funding source must contain one of the following: CREDIT, DEBIT, PREPAID, DEPOSIT_ACCOUNT, MOBILE_MONEY_ACCOUNT or CASH.
  * id `string`: System generated unique merchant transfer identifier. 
  * interchange_rate_designator `string`: Indicates the interchange rate and editing rules applied to the transaction. Field is applicable for Europe OIs only.
  * mastercard_assigned_id `string`: Mastercard Assigned ID for tiered interchange calculations. 
  * original_status `string`: Original status of the transfer. Values: APPROVED, UNKNOWN. 
  * participant [Participant_28](#participant_28)
  * participation_id `string`: Participation identifier of the sender. The receiving financial institution will associate the value to the transfer.\n\nType: Alphanumeric Special [a-zA-Z0-9!\"#$%&'()*+,-./\\:;<=>?@[]_`{|}~], Maximum Length: 30
  * payment_origination_country `string`: Country where the payment originated from as an ISO 3166-1 alpha-3 country code. 
  * payment_type `string`: Payment type used for transfer. Value - P2M: Person to Merchant. 
  * processor_id `string`: The processor ID is a ten-digit number of the form: 9000xxxxxx, where the Single Message System-assigned processor ID will be up to the last six digits xxxxxx. If the partner is enrolled in multiple processorId numbers, the processorId number must be specified. If the partner is only enrolled in a single processorId number then system takes the onboarded value. Please contact your MasterCard Representative to enable the usage of fields in this section.
  * recipient [Recipient_18](#recipient_18)
  * recipient_account_uri `string`: URI describing the recipient account. It will include masked account information but will not include security codes (e.g. CVC or expiration date for a card account). Pan, Manula Entry Alias and Alias are valid schemas.
  * reconciliation_data [ReconciliationData_26](#reconciliationdata_26)
  * resource_type `string`: Type of the resource that is being returned. 
  * routing_transit_number `string`: The nine-digit Federal Reserve Routing and Transit (R & T) number of the acquiring institution or the nine-digit pseudo-number assigned to the acquiring institution by Mastercard. If the partner is enrolled in multiple routing transit numbers, the routing transit number must be specified. If the partner is only enrolled in a single routing transit number then system takes the onboarded value. Please contact your MasterCard Representative to enable the usage of fields in this section.  
  * sender [Sender_15](#sender_15)
  * sender_account_uri `string`: URI describing the sending account. It will include masked account information but will not include security codes (e.g. CVC or expiration date for a card account).
  * status `string`: Status of the transfer. Values: APPROVED, UNKNOWN. 
  * status_timestamp `string`: Timestamp of when the status was changed to its current value.  
  * transaction_history [TransactionHistory_22](#transactionhistory_22)
  * transaction_local_date_time `string`: Local date and time when the transaction is submitted as an ISO 8601 format. 
  * transfer_amount [TransferAmount_21](#transferamount_21)
  * transfer_reference `string`: Unique transaction reference number provided by the partner when the Transfer was created. 

### MerchantTransfer_14_wrapper
* MerchantTransfer_14_wrapper `object`: Response details for a merchant transfer.
  * merchant_transfer [MerchantTransfer_14](#merchanttransfer_14)

### MerchantTransfer_1_wrapper
* MerchantTransfer_1_wrapper `object`: Contains the details of the request message.
  * merchant_transfer [MerchantTransfer_1](#merchanttransfer_1)

### MerchantTransfer_40
* MerchantTransfer_40 `object`: Response details for a merchant transfer.
  * additional_message `string`: Message a financial institution will associate to the transfer and may display.\n\nType: Alphanumeric Special [a-zA-Z0-9!\"#$%&'()*+,-./\\:;<=>?@[]_`{|}~], Maximum Length: 65
  * channel `string`: Initiation channel of the transfer request. Values: WEB, MOBILE, BANK, KIOSK.
  * convenience_amount `string`: Tip or convenience amount in transaction currency. Length:1-12 numeric. If present, then convenience_indicator is also required.
  * convenience_indicator `string`: Convenience fee type code. Min length: 2. Max Length: 2. Valid values are 01,02 or 03. 01:Indicates consumer should be prompted to enter tip. 02:Indicates the merchant would mandatorily charge a flat convenience fee. 03:Indicates that merchant would charge a percentage convenience fee. Required if convenience_amount is provided.
  * created `string`: Date and time the original transfer was created as an ISO 8601 Timestamp. Details- YYYY-MM-DDTHH:MM:SS±hh[:mm] Valid Values- Refer 'Date And Time Formats
  * device_id `string`: The serial number of a device that initiated the transfer.
  * digital_account_reference_number `string`: URI to identify the digital account reference number. It will include masked account information but will not include security codes (e.g. CVC or expiration date for a card account). 
  * funding_source `string`: Funding source must contain one of the following: CREDIT, DEBIT, PREPAID, DEPOSIT_ACCOUNT, MOBILE_MONEY_ACCOUNT or CASH. 
  * id `string`: System generated unique merchant transfer identifier.
  * interchange_rate_designator `string`: Indicates the interchange rate and editing rules applied to the transaction.
  * location `string`: Location where the transaction is initiated. Valid Values- Refer 'Location URIs'.
  * original_status `string`: Original status of the transfer. One of APPROVED, DECLINED, ERROR, PENDING, UNKNOWN.
  * participant [Participant_53](#participant_53)
  * participation_id `string`: Participation identifier of the sender. The receiving financial institution will associate the value to the transfer.\n\nType: Alphanumeric Special [a-zA-Z0-9!\"#$%&'()*+,-./\\:;<=>?@[]_`{|}~], Maximum Length: 30
  * payment_origination_country `string`: Country where the payment originated from as an ISO 3166-1 alpha-3 country code, in upper case. 
  * payment_type `string`: P2M: Person to Merchant
  * processor_id `string`: The processor ID is a ten-digit number of the form: 9000xxxxxx, where the Single Message System-assigned processor ID will be up to the last six digits xxxxxx. If the partner is enrolled in multiple processorId numbers, the processorId number must be specified. If the partner is only enrolled in a single processorId number then system takes the onboarded value. Please contact your MasterCard Representative to enable the usage of fields in this section. Details- Numeric, 10
  * qr_data `string`: Contains QR data. For future use. Details- alpha numeric special characters 1-237.
  * recipient [Recipient_43](#recipient_43)
  * recipient_account_uri `string`: URI describing the recipient account. It will include masked account information (e.g. "************1234" for a card account) but will not include security codes (e.g. CVC or expiration date for a card account).
  * reconciliation_data [ReconciliationData_51](#reconciliationdata_51)
  * resource_type `string`: Type of the resource that is being returned. Valid value: merchant_transfer
  * routing_transit_number `string`: The nine-digit Federal Reserve Routing and Transit (R & T) number of the acquiring institution or the nine-digit pseudo-number assigned to the acquiring institution by Mastercard. If the partner is enrolled in multiple routing transit numbers, the routing transit number must be specified. If the partner is only enrolled in a single routing transit number then system takes the onboarded value. Please contact your MasterCard Representative to enable the usage of fields in this section. Details- Numeric, 9
  * sender [Sender_41](#sender_41)
  * sender_account_uri `string`: URI describing the sending account. It will include masked account information (e.g. "************1234" for a card account) but will not include security codes (e.g. CVC or expiration date for a card account).
  * status `string`: Status of the transfer. Values: APPROVED, DECLINED, ERROR, PENDING, REVERSED, CANCELLED.
  * status_timestamp `string`: Timestamp of when the status was changed to its current value. Details-YYYY-MM-DDTHH:MM:SS±hh[:mm] Valid Values- Refer 'Date And Time Formats
  * transaction_history [TransactionHistory_47](#transactionhistory_47)
  * transaction_local_date_time `string`: Local date and time when the transaction is submitted. Details-YYYY-MM-DDTHH:MM:SS±hh[:mm] 
  * transfer_amount [TransferAmount_46](#transferamount_46)
  * transfer_reference `string`: Unique transaction reference number provided when the Transfer was created.

### MerchantTransfer_40_wrapper
* MerchantTransfer_40_wrapper `object`: Response details for a merchant transfer.
  * merchant_transfer [MerchantTransfer_40](#merchanttransfer_40)

### MerchantTransfer_54
* MerchantTransfer_54 `object`: Response details for a merchant transfer.
  * channel `string`: Initiation channel of the transfer request. Values: WEB, MOBILE, BANK, KIOSK.
  * created `string`: Date and time the original transfer was created as an ISO 8601 Timestamp. Details- YYYY-MM-DDTHH:MM:SS±hh[:mm] Valid Values- Refer 'Date And Time Formats
  * device_id `string`: The serial number of a device that initiated the transfer.
  * digital_account_reference_number `string`: Reference number identifying the digital account reference number. Details- Numeric, Length 1-20
  * funding_source `string`: Funding source must contain one of the following: CREDIT, DEBIT, PREPAID, DEPOSIT_ACCOUNT, MOBILE_MONEY_ACCOUNT, CASH. 
  * id `string`: System generated unique merchant transfer identifier.
  * interchange_rate_designator `string`: Indicates the interchange rate and editing rules applied to the transaction. Field is applicable for Europe OIs only.
  * location `string`: Location where the transaction is initiated. Valid Values- Refer 'Location URIs'.
  * original_status `string`: Original status of the transfer. One of APPROVED, DECLINED, ERROR, PENDING, UNKNOWN.
  * participant [Participant_68](#participant_68)
  * payment_origination_country `string`: Country where the payment originated from as an ISO 3166-1 alpha-3 country code, in uppercase. Details- Alpha, Length: 3
  * payment_type `string`: P2M: Person to Merchant
  * processor_id `string`: The processor ID is a ten-digit number of the form: 9000xxxxxx, where the Single Message System-assigned processor ID will be up to the last six digits xxxxxx. If the partner is enrolled in multiple processorId numbers, the processorId number must be specified. If the partner is only enrolled in a single processorId number then system takes the onboarded value. Please contact your MasterCard Representative to enable the usage of fields in this section. Details- Numeric, 10
  * recipient [Recipient_58](#recipient_58)
  * recipient_account_uri `string`: URI describing the recipient account. It will include masked account information (e.g. "************1234" for a card account) but will not include security codes (e.g. CVC or expiration date for a card account).
  * reconciliation_data [ReconciliationData_66](#reconciliationdata_66)
  * resource_type `string`: Type of the resource that is being returned. Valid value: merchant_transfer
  * routing_transit_number `string`: The nine-digit Federal Reserve Routing and Transit (R & T) number of the acquiring institution or the nine-digit pseudo-number assigned to the acquiring institution by Mastercard. If the partner is enrolled in multiple routing transit numbers, the routing transit number must be specified. If the partner is only enrolled in a single routing transit number then system takes the onboarded value. Please contact your MasterCard Representative to enable the usage of fields in this section. Details- Numeric, 9
  * sender [Sender_55](#sender_55)
  * sender_account_uri `string`: URI describing the sending account. It will include masked account information (e.g. "************1234" for a card account) but will not include security codes (e.g. CVC or expiration date for a card account).
  * status `string`: Status of the transfer. Values: APPROVED, DECLINED, ERROR, PENDING, REVERSED, CANCELLED.
  * status_timestamp `string`: Timestamp of when the status was changed to its current value. Details-YYYY-MM-DDTHH:MM:SS±hh[:mm] Valid Values- Refer 'Date And Time Formats
  * transaction_history [TransactionHistory_62](#transactionhistory_62)
  * transaction_local_date_time `string`: Local date and time when the transaction is submitted. Details-YYYY-MM-DDTHH:MM:SS±hh[:mm] 
  * transfer_amount [TransferAmount_61](#transferamount_61)
  * transfer_reference `string`: Unique transaction reference number provided when the Transfer was created.

### MerchantTransfer_54_wrapper
* MerchantTransfer_54_wrapper `object`: Response details for a merchant transfer.
  * merchant_transfer [MerchantTransfer_54](#merchanttransfer_54)

### MerchantTransfer_71
* MerchantTransfer_71 `object`: An array containing the Transactions in the transfer
  * channel `string`: Initiation channel of the transfer request. Values: WEB, MOBILE, BANK, KIOSK.
  * created `string`: Date and time the original transfer was created as an ISO 8601 Timestamp. Details- YYYY-MM-DDTHH:MM:SS±hh[:mm] Valid Values- Refer 'Date And Time Formats
  * device_id `string`: The serial number of a device that initiated the transfer.
  * digital_account_reference_number `string`: Reference number identifying the digital account reference number. Details- Numeric, Length 1-20
  * funding_source `string`: Funding source must contain one of the following: CREDIT, DEBIT, PREPAID, DEPOSIT_ACCOUNT, MOBILE_MONEY_ACCOUNT, CASH. 
  * id `string`: System generated unique merchant transfer identifier.
  * interchange_rate_designator `string`: Indicates the interchange rate and editing rules applied to the transaction. Field is applicable for Europe OIs only.
  * location `string`: Location where the transaction is initiated. Valid Values- Refer 'Location URIs'.
  * original_status `string`: Original status of the transfer. One of APPROVED, DECLINED, ERROR, PENDING, UNKNOWN.
  * participant [Participant_85](#participant_85)
  * payment_origination_country `string`: Country where the payment originated from as an ISO 3166-1 alpha-3 country code, in uppercase. Details- Alpha, Length: 3
  * payment_type `string`: P2M: Person to Merchant
  * processor_id `string`: The processor ID is a ten-digit number of the form: 9000xxxxxx, where the Single Message System-assigned processor ID will be up to the last six digits xxxxxx. If the partner is enrolled in multiple processorId numbers, the processorId number must be specified. If the partner is only enrolled in a single processorId number then system takes the onboarded value. Please contact your MasterCard Representative to enable the usage of fields in this section. Details- Numeric, 10
  * recipient [Recipient_75](#recipient_75)
  * recipient_account_uri `string`: URI describing the recipient/merchant account. It will include masked account information (e.g. "************1234" for a card account) but will not include security codes (e.g. CVC or expiration date for a card account).
  * reconciliation_data [ReconciliationData_83](#reconciliationdata_83)
  * resource_type `string`: Type of the resource that is being returned. Valid value: merchant_transfer
  * routing_transit_number `string`: The nine-digit Federal Reserve Routing and Transit (R & T) number of the acquiring institution or the nine-digit pseudo-number assigned to the acquiring institution by Mastercard. If the partner is enrolled in multiple routing transit numbers, the routing transit number must be specified. If the partner is only enrolled in a single routing transit number then system takes the onboarded value. Please contact your MasterCard Representative to enable the usage of fields in this section. Details- Numeric, 9
  * sender [Sender_72](#sender_72)
  * sender_account_uri `string`: URI describing the sending account. It will include masked account information (e.g. "************1234" for a card account) but will not include security codes (e.g. CVC or expiration date for a card account).
  * status `string`: Status of the transfer. Values: APPROVED, DECLINED, ERROR, PENDING, REVERSED, CANCELLED.
  * status_timestamp `string`: Timestamp of when the status was changed to its current value. Details-YYYY-MM-DDTHH:MM:SS±hh[:mm] Valid Values- Refer 'Date And Time Formats
  * transaction_history [TransactionHistory_79](#transactionhistory_79)
  * transaction_local_date_time `string`: Local date and time when the transaction is submitted. Details-YYYY-MM-DDTHH:MM:SS±hh[:mm] 
  * transfer_amount [TransferAmount_78](#transferamount_78)
  * transfer_reference `string`: Unique transaction reference number provided when the Transfer was created.

### MerchantTransfers_69
* MerchantTransfers_69 `object`: Response details for a merchant transfer.
  * data [Data_70](#data_70)
  * item_count `integer`: Number of Transactions in the list
  * resource_type `string`: Type of resource

### MerchantTransfers_69_wrapper
* MerchantTransfers_69_wrapper `object`: Response details for a merchant transfer.
  * merchant_transfers [MerchantTransfers_69](#merchanttransfers_69)

### NotificationRequest_159
* NotificationRequest_159 `object`: Contains the details of the request message.
  * additional_message `string`: Message a financial institution will associate to the transfer and may display
  * mastercard_assigned_id `string`: Mastercard Assigned ID for tiered interchange calculations. Length: 6. Applicable only for P2M and MRF notifications.
  * merchant_category_code `string`: Merchant category code
  * payment_facilitator_id `string`: Contains the Payment Facilitator ID. Length: 11. Applicable only for P2M and MRF notifications.
  * payment_type **required** `string`: P2M: Person to Merchant, ACO: Agent Cash Out
  * recipient [Recipient_161](#recipient_161)
  * recipient_account_uri **required** `string`: Recepient Account uri . Only accept format: pan:[16 digit]
  * transaction_amount [TransactionAmount_160](#transactionamount_160)
  * transfer_status **required** `string`: APPROVED or DECLINED

### NotificationRequest_159_wrapper
* NotificationRequest_159_wrapper `object`: Contains the details of the request message.
  * notification_request [NotificationRequest_159](#notificationrequest_159)

### NotificationRequest_163
* NotificationRequest_163 `object`: Contains the details of the request message.
  * additional_message `string`: Message a financial institution will associate to the transfer and may display
  * mastercard_assigned_id `string`: Mastercard Assigned ID for tiered interchange calculations. Length: 6. Applicable only for P2M and MRF notifications. 
  * merchant_category_code `string`: Merchant category code
  * payment_facilitator_id `string`: Contains the Payment Facilitator ID. Length: 11. Applicable only for P2M and MRF notifications.
  * payment_type **required** `string`: MRF: Merchant Refund
  * recipient [Recipient_165](#recipient_165)
  * recipient_account_uri **required** `string`: Recepient Account uri . Only accept format: pan:[16 digit]
  * transaction_amount [TransactionAmount_164](#transactionamount_164)
  * transfer_status **required** `string`: APPROVED or DECLINED

### NotificationRequest_163_wrapper
* NotificationRequest_163_wrapper `object`: Contains the details of the request message.
  * notification_request [NotificationRequest_163](#notificationrequest_163)

### NotificationResponse_162
* NotificationResponse_162 `object`: Contains the details of the response message.
  * status `string`: status of the notification
  * transfer_reference `string`: reference for the simulate notification

### NotificationResponse_162_wrapper
* NotificationResponse_162_wrapper `object`: Contains the details of the response message.
  * notification_response [NotificationResponse_162](#notificationresponse_162)

### NotificationResponse_166
* NotificationResponse_166 `object`: Contains the details of the response message.
  * status `string`: status of the notification
  * transfer_reference `string`: reference for the simulate notification

### NotificationResponse_166_wrapper
* NotificationResponse_166_wrapper `object`: Contains the details of the response message.
  * notification_response [NotificationResponse_166](#notificationresponse_166)

### Participant_101
* Participant_101 `object`: Information about a participant that may be passed along to the network.
  * card_acceptor_id `string`: Code identifying the card acceptor. Please contact your MasterCard Representative to enable the usage of fields in this section. Details - alphanumeric, 10-15
  * card_acceptor_name **required** `string`: Merchant Name (or Payment Facilitator and Sub-Merchant Information, that is, the “doing business as” name of the merchant to where the payment transaction is sent to). Details - alphanumeric, 1-22

### Participant_117
* Participant_117 `object`: Information about a participant that may be passed along to the network.
  * card_acceptor_id `string`: Code identifying the card acceptor. Please contact your MasterCard Representative to enable the usage of fields in this section. Details - alphanumeric, 10-15
  * card_acceptor_name `string`: Merchant Name (or Payment Facilitator and Sub-Merchant Information, that is, the “doing business as” name of the merchant to where the payment transaction is sent to). Details - alphanumeric, 1-22

### Participant_13
* Participant_13 `object`: Information about a participant that may be passed along to the network.
  * card_acceptor_id `string`: Code identifying the card acceptor. 
  * card_acceptor_name **required** `string`: Merchant Name (or Payment Facilitator and Sub-Merchant Information, that is, the “doing business as” name of the merchant to where the payment transaction is sent to). \n\nType: Alphanumeric Special [a-zA-Z0-9!\"#$%&'()*+,-./\\:;<=>?@[]_`{|}~], Length: 1-22

### Participant_28
* Participant_28 `object`: Information about a participant that may be passed along to the network.
  * card_acceptor_id `string`: "Code identifying the card acceptor. Please contact your MasterCard Representative to enable the usage of fields in this section. \n\nType: Alphanumeric [A-Za-z0-9], Maximum Length: 15"
  * card_acceptor_name `string`: Merchant Name (or Payment Facilitator and Sub-Merchant Information, that is, the “doing business as” name of the merchant to where the payment transaction is sent to).\n\nType: Alphanumeric Special [a-zA-Z0-9!\"#$%&'()*+,-./\\:;<=>?@[]_`{|}~], Maximum Length: 22

### Participant_37
* Participant_37 `object`: Information about a participant that may be passed along to the network.
  * card_acceptor_id `string`: Code identifying the card acceptor. Please contact your MasterCard Representative to enable the usage of fields in this section. Details - alphanumeric, 10-15
  * card_acceptor_name **required** `string`: Merchant Name (or Payment Facilitator and Sub-Merchant Information, that is, the “doing business as” name of the merchant to where the payment transaction is sent to). Details - alphanumeric, 1-22

### Participant_53
* Participant_53 `object`: Information about a participant that may be passed along to the network.
  * card_acceptor_id `string`: Code identifying the card acceptor. Please contact your MasterCard Representative to enable the usage of fields in this section. Details - alphanumeric, 10-15
  * card_acceptor_name `string`: Merchant Name (or Payment Facilitator and Sub-Merchant Information, that is, the “doing business as” name of the merchant to where the payment transaction is sent to). Details - alphanumeric, 1-22

### Participant_68
* Participant_68 `object`: Information about a participant that may be passed along to the network.
  * card_acceptor_id `string`: Code identifying the card acceptor. Please contact your MasterCard Representative to enable the usage of fields in this section. Details - alphanumeric, 10-15
  * card_acceptor_name `string`: Merchant Name (or Payment Facilitator and Sub-Merchant Information, that is, the “doing business as” name of the merchant to where the payment transaction is sent to). Details - alphanumeric, 1-22

### Participant_85
* Participant_85 `object`: Information about a participant that may be passed along to the network.
  * card_acceptor_id `string`: Code identifying the card acceptor. Please contact your MasterCard Representative to enable the usage of fields in this section. Details - alphanumeric, 10-15
  * card_acceptor_name `string`: Merchant Name (or Payment Facilitator and Sub-Merchant Information, that is, the “doing business as” name of the merchant to where the payment transaction is sent to). Details - alphanumeric, 1-22

### PaymentTransactionReference_102
* PaymentTransactionReference_102 `object`: This section describes information used by the Mastercard and Visa networks to link a funding and payment transaction when both card accounts are Visa accounts or both accounts are Mastercard accounts.
  * network `string`: Network on which payment transaction is processed is required. Valid values will be provided during partner onboarding.
  * reference_number **required** `string`: Unique reference number for the transaction. Type: Alphanumeric Special [a-zA-Z0-9* , - . _ ~ ], Length:19

### Recipient_107
* Recipient_107 `object`: Information about the recipient/merchant of the transaction.
  * additional_merchant_data [AdditionalMerchantData_109](#additionalmerchantdata_109)
  * address [Address_108](#address_108)
  * email `string`: Email address of the recipient/merchant.
  * first_name `string`: First name of the recipient/merchant.
  * last_name `string`: Last name of the recipient/merchant.
  * merchant_category_code `string`: Mastercard defined merchant category code. This identifies the type of business of the recipient/merchant.
  * middle_name `string`: Middle name of the recipient/merchant.
  * phone `string`: Phone number of the recipient/merchant.

### Recipient_123
* Recipient_123 `object`: Recipient information is required for non-tokenized transactions. If a PAN is provided directly, the recipient information should be provided. Details- Conditional
  * address **required** [Address_124](#address_124)
  * date_of_birth `string`: The consumer's date of birth as an ISO 8601 Full Date. Valid Values- Refer 'Date And Time Formats'
  * email `string`: Recipient's email address. Phone number or Email should be provided if the partner is set up to receive notifications. Details- Conditional
  * first_name **required** `string`: Recipient’s first name. Details- alpha, 1-40
  * government_ids [GovernmentIds_125](#governmentids_125)
  * last_name **required** `string`: Recipient’s last name. Details- alpha, 1-40
  * merchant_category_code **required** `string`: Mastercard defined merchant category code. This identifies the type of business of the recipient/merchant. This merchant category code should match valid code set by Mastercard rules. \n\nType: Numeric [0-9], Length: 1-4
  * middle_name `string`: Recipient middle_name. Details- alpha, 40
  * nationality `string`: The recipient home country as an ISO 3166-1 alpha-3 country code, In uppercase. Details- alpha, 3
  * phone `string`: Recipient's phone number, including country code. Phone number or Email should be provided if the partner is set up to receive notifications. Details- Conditional, 1-15

### Recipient_134
* Recipient_134 `object`: Information about the recipient of the transaction.
  * address [Address_135](#address_135)
  * date_of_birth `string`: Date of birth of the recipient as an ISO 8601 Full Date. Valid Values- Refer 'Date And Time Formats'
  * email `string`: Email address of the recipient.
  * first_name `string`: Recipient’s first name.
  * government_ids [GovernmentIds_136](#governmentids_136)
  * last_name `string`: Recipient’s last name.
  * merchant_category_code `string`: Mastercard defined merchant category code. This identifies the type of business of the recipient/merchant. \n\nType: Numeric [0-9], Maximum Length: 4
  * middle_name `string`: Recipient middle_name. Details- alpha, 40
  * nationality `string`: The recipient home country as an ISO 3166-1 alpha-3 country code.
  * phone `string`: Phone number of the recipient.
  * sanction_score `string`: A value ranging from 0 to 100. A higher score indicates a closer match to names on the applicable screening list, while lower scores indicate a less likely match.  Available in response when partner is enabled for Sanction Screening validation and sanction_screening_override value is “false”.

### Recipient_149
* Recipient_149 `object`: Information about the recipient of the transaction.
  * address [Address_150](#address_150)
  * date_of_birth `string`: Date of birth of the recipient as an ISO 8601 Full Date. Valid Values- Refer 'Date And Time Formats'
  * email `string`: Email address of the recipient.
  * first_name `string`: First name of the recipient.
  * government_ids [GovernmentIds_151](#governmentids_151)
  * last_name `string`: Last name of the recipient.
  * middle_name `string`: Middle name of the recipient.
  * nationality `string`: Country of the recipient as an ISO alpha country code.
  * phone `string`: Phone number of the recipient.
  * sanction_score `string`: A value ranging from 0 to 100. A higher score indicates a closer match to names on the applicable screening list, while lower scores indicate a less likely match.  Available in response when partner is enabled for Sanction Screening validation and sanction_screening_override value is “false”.

### Recipient_161
* Recipient_161 `object`: Contains the recipient info
  * address `string`: Recipient address
  * name_on_account `string`: Recipient name

### Recipient_165
* Recipient_165 `object`: Contains the recipient info
  * address `string`: Recipient address
  * name_on_account `string`: Recipient name

### Recipient_18
* Recipient_18 `object`: Information about the recipient/merchant of the transaction.
  * additional_merchant_data [AdditionalMerchantData_20](#additionalmerchantdata_20)
  * address [Address_19](#address_19)
  * email `string`: Email address of the recipient/merchant. Type: Alphanumeric Special [a-zA-Z0-9\-@+.*$_], Maximum Length: 254
  * first_name `string`: First name of the recipient/merchant.\n\nType: Alphanumeric Special [a-zA-Z0-9 !"#$%&'()*+,-./\:;<=>?@[]_`{|}~ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÚÚÝàáâãäåçèéêëìíîïñòóôõöùúûüýÿ], Maximum Length: 40
  * last_name `string`: Last name of the recipient/merchant.\n\nType: Alphanumeric Special [a-zA-Z0-9 !"#$%&'()*+,-./\:;<=>?@[]_`{|}~ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÚÚÝàáâãäåçèéêëìíîïñòóôõöùúûüýÿ], Maximum Length: 40
  * merchant_category_code `string`: Mastercard defined merchant category code. This identifies the type of business of the recipient/merchant. 
  * middle_name `string`: Middle name of the recipient/merchant.\n\nType: Alphanumeric Special [a-zA-Z0-9 !"#$%&'()*+,-./\:;<=>?@[]_`{|}~ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÚÚÝàáâãäåçèéêëìíîïñòóôõöùúûüýÿ], Maximum Length: 40
  * phone `string`: Phone number of the recipient/merchant, Country code can be included. 

### Recipient_32
* Recipient_32 `object`: Information about the recipient/merchant of the transaction. If a PAN is provided in the recipient_account_uri, the recipient/merchant information section is required. Details- Conditional
  * additional_merchant_data [AdditionalMerchantData_34](#additionalmerchantdata_34)
  * address **required** [Address_33](#address_33)
  * email `string`: Email address of the recipient/merchant. Phone number or email address should be provided if the partner is set up to receive notifications. Details- Conditional, 5-254
  * first_name **required** `string`: First name of the recipient/merchant.If business name is XYZ : First name: XYZ ; Last name: XYZ; If business name is XYZ International: First name: XYZ  Last name: International ; if business name is XYZ DBA MA : First name: XYZ Last name: DBA MA.\n\nType: Alphanumeric Special [a-zA-Z0-9 !"#$%&'()*+,-./\:;<=>?@[]_`{|}~ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÚÚÝàáâãäåçèéêëìíîïñòóôõöùúûüýÿ], Length: 1-40
  * last_name **required** `string`: Last name of the recipient/merchant.If business name is XYZ : First name: XYZ ; Last name: XYZ; If business name is XYZ International: First name: XYZ  Last name: International ; if business name is XYZ DBA MA : First name: XYZ Last name: DBA MA.\n\nType: Alphanumeric Special [a-zA-Z0-9 !"#$%&'()*+,-./\:;<=>?@[]_`{|}~ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÚÚÝàáâãäåçèéêëìíîïñòóôõöùúûüýÿ], Length: 1-40
  * merchant_category_code **required** `string`: Mastercard defined merchant category code. This identifies the type of business of the recipient/merchant. This merchant category code should match valid code set by Mastercard rules. Details 1-4
  * middle_name `string`: Middle name of the recipient/merchant.\n\nType: Alphanumeric Special [a-zA-Z0-9 !"#$%&'()*+,-./\:;<=>?@[]_`{|}~ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÚÚÝàáâãäåçèéêëìíîïñòóôõöùúûüýÿ], Length: 1-40
  * phone `string`: Phone number of the recipient/merchant. Phone number or email address should be provided if the partner is set up to receive notifications. Details- 1-15

### Recipient_43
* Recipient_43 `object`: Information about the recipient/merchant of the transaction.
  * additional_merchant_data [AdditionalMerchantData_45](#additionalmerchantdata_45)
  * address [Address_44](#address_44)
  * email `string`: Email address of the recipient/merchant.
  * first_name `string`: First name of the recipient/merchant.
  * last_name `string`: Last name of the recipient/merchant.
  * merchant_category_code `string`: Mastercard defined merchant category code. This identifies the type of business of the recipient/merchant.
  * middle_name `string`: Middle name of the recipient/merchant.
  * phone `string`: Phone number of the recipient/merchant.

### Recipient_58
* Recipient_58 `object`: Information about the recipient/merchant of the transaction.
  * additional_merchant_data [AdditionalMerchantData_60](#additionalmerchantdata_60)
  * address [Address_59](#address_59)
  * email `string`: Email address of the recipient/merchant.
  * first_name `string`: First name of the recipient/merchant.
  * last_name `string`: Last name of the recipient/merchant.
  * merchant_category_code `string`: Mastercard defined merchant category code. This identifies the type of business of the recipient/merchant.
  * middle_name `string`: Middle name of the recipient/merchant.
  * phone `string`: Phone number of the recipient/merchant.

### Recipient_7
* Recipient_7 `object`: Information about the recipient/merchant of the transaction.
  * additional_merchant_data [AdditionalMerchantData_9](#additionalmerchantdata_9)
  * address **required** [Address_8](#address_8)
  * authentication_value `string`: List of name/value pairs containing authentication  values. Refer 'Authentication Value URIs'
  * email `string`: Email address of the recipient/merchant.\n\nType: Alphanumeric Special [a-zA-Z0-9\-@+.*$_], Length: 5-254
  * first_name **required** `string`: First name of the recipient/merchant.If business name is XYZ : First name: XYZ ; Last name: XYZ; If business name is XYZ International: First name: XYZ  Last name: International ; if business name is XYZ DBA MA : First name: XYZ Last name: DBA MA.\n\nType: Alphanumeric Special [a-zA-Z0-9 !"#$%&'()*+,-./\:;<=>?@[]_`{|}~ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÚÚÝàáâãäåçèéêëìíîïñòóôõöùúûüýÿ], Length: 1-40
  * last_name **required** `string`: Last name of the recipient/merchant.If business name is XYZ : First name: XYZ ; Last name: XYZ; If business name is XYZ International: First name: XYZ  Last name: International ; if business name is XYZ DBA MA : First name: XYZ Last name: DBA MA.\n\nType: Alphanumeric Special [a-zA-Z0-9 !"#$%&'()*+,-./\:;<=>?@[]_`{|}~ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÚÚÝàáâãäåçèéêëìíîïñòóôõöùúûüýÿ], Length: 1-40
  * merchant_category_code **required** `string`: Mastercard defined merchant category code. This identifies the type of business of the recipient/merchant. This merchant category code should match valid code set by Mastercard rules. 
  * middle_name `string`: Middle name of the recipient/merchant.\n\nType: Alphanumeric Special [a-zA-Z0-9 !"#$%&'()*+,-./\:;<=>?@[]_`{|}~ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÚÚÝàáâãäåçèéêëìíîïñòóôõöùúûüýÿ], Length: 1-40
  * phone `string`: Phone number of the recipient/merchant, Country code can be included. 
  * token_cryptogram [TokenCryptogram_10](#tokencryptogram_10)

### Recipient_75
* Recipient_75 `object`: Information about the recipient/merchant of the transaction.
  * additional_merchant_data [AdditionalMerchantData_77](#additionalmerchantdata_77)
  * address [Address_76](#address_76)
  * email `string`: Email address of the recipient/merchant.
  * first_name `string`: First name of the recipient/merchant.
  * last_name `string`: Last name of the recipient/merchant.
  * merchant_category_code `string`: Mastercard defined merchant category code. This identifies the type of business of the recipient/merchant.
  * middle_name `string`: Middle name of the recipient/merchant.
  * phone `string`: Phone number of the recipient/merchant.

### Recipient_96
* Recipient_96 `object`: Information about the recipient/merchant of the transaction. If a PAN is provided in the recipient_account_uri, the recipient/merchant information section is required. Details- Conditional
  * additional_merchant_data [AdditionalMerchantData_98](#additionalmerchantdata_98)
  * address **required** [Address_97](#address_97)
  * email `string`: Email address of the recipient/merchant. Phone number or email address should be provided if the partner is set up to receive notifications. Details- Conditional, 5-254
  * first_name `string`: First name of the recipient/merchant.If business name is XYZ : First name: XYZ ; Last name: XYZ; If business name is XYZ International: First name: XYZ  Last name: International ; if business name is XYZ DBA MA : First name: XYZ Last name: DBA MA.\n\nType: Alphanumeric Special [a-zA-Z0-9 !"#$%&'()*+,-./\:;<=>?@[]_`{|}~ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÚÚÝàáâãäåçèéêëìíîïñòóôõöùúûüýÿ], Length: 1-40
  * last_name `string`: Last name of the recipient/merchant.If business name is XYZ : First name: XYZ ; Last name: XYZ; If business name is XYZ International: First name: XYZ  Last name: International ; if business name is XYZ DBA MA : First name: XYZ Last name: DBA MA.\n\nType: Alphanumeric Special [a-zA-Z0-9 !"#$%&'()*+,-./\:;<=>?@[]_`{|}~ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÚÚÝàáâãäåçèéêëìíîïñòóôõöùúûüýÿ], Length: 1-40
  * merchant_category_code **required** `string`: Mastercard defined merchant category code. This identifies the type of business of the recipient/merchant. This merchant category code should match valid code set by Mastercard rules. Details 1-4
  * middle_name `string`: Middle name of the recipient/merchant.\n\nType: Alphanumeric Special [a-zA-Z0-9 !"#$%&'()*+,-./\:;<=>?@[]_`{|}~ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÚÚÝàáâãäåçèéêëìíîïñòóôõöùúûüýÿ], Length: 1-40
  * phone `string`: Phone number of the recipient/merchant. Phone number or email address should be provided if the partner is set up to receive notifications. Details- 1-15

### ReconciliationData_11
* ReconciliationData_11 `object`: Reconciliation information that will be associated to the transfer and will appear in the reconciliation reporting for the partner.
  * custom_field `array`: Contains custom field names and values to appear in the reconciliation report. This can be a list of multiple name/value pairs.
    * items [CustomField_12](#customfield_12)

### ReconciliationData_115
* ReconciliationData_115 `object`: Reconciliation information that will be associated to the transfer and will appear in the reconciliation reporting for the partner.
  * custom_field `array`: Contains custom field names and values to appear in the reconciliation report. This can be a list of multiple name/value pairs. The names provided must match the configured in the partner setup.
    * items [CustomField_116](#customfield_116)

### ReconciliationData_126
* ReconciliationData_126 `object`: Contains information that needs to appear in the reconciliation report for this transfer.
  * custom_field `array`: Contains custom field names and values to appear in the reconciliation report for this transfer. This could be a list of multiple values. These should match with the information during onboarding.
    * items [CustomField_127](#customfield_127)

### ReconciliationData_142
* ReconciliationData_142 `object`: Reconciliation information that will be associated to the transfer and will appear in the reconciliation reporting for the partner.
  * custom_field `array`: Contains custom field names and values to appear in the reconciliation report. This can be a list of multiple name/value pairs. The names provided must match the configured in the partner setup.
    * items [CustomField_143](#customfield_143)

### ReconciliationData_157
* ReconciliationData_157 `object`: Reconciliation information that will be associated to the transfer and will appear in the reconciliation reporting for the partner.
  * custom_field `array`: Contains custom field names and values to appear in the reconciliation report. This can be a list of multiple name/value pairs. The names provided must match the configured in the partner setup.
    * items [CustomField_158](#customfield_158)

### ReconciliationData_26
* ReconciliationData_26 `object`: Reconciliation information that will be associated to the transfer and will appear in the reconciliation reporting for the partner.
  * custom_field `array`: Contains custom field names and values to appear in the reconciliation report. This can be a list of multiple name/value pairs.
    * items [CustomField_27](#customfield_27)

### ReconciliationData_35
* ReconciliationData_35 `object`: Reconciliation information that will be associated to the transfer and will appear in the reconciliation reporting for the partner.
  * custom_field `array`: Contains custom field names and values to appear in the reconciliation report. This can be a list of multiple name/value pairs. The names provided must match the configured in the partner setup.
    * items [CustomField_36](#customfield_36)

### ReconciliationData_51
* ReconciliationData_51 `object`: Reconciliation information that will be associated to the transfer and will appear in the reconciliation reporting for the partner.
  * custom_field `array`: Contains custom field names and values to appear in the reconciliation report. This can be a list of multiple name/value pairs. The names provided must match the configured in the partner setup.
    * items [CustomField_52](#customfield_52)

### ReconciliationData_66
* ReconciliationData_66 `object`: Reconciliation information that will be associated to the transfer and will appear in the reconciliation reporting for the partner.
  * custom_field `array`: Contains custom field names and values to appear in the reconciliation report. This can be a list of multiple name/value pairs. The names provided must match the configured in the partner setup.
    * items [CustomField_67](#customfield_67)

### ReconciliationData_83
* ReconciliationData_83 `object`: Reconciliation information that will be associated to the transfer and will appear in the reconciliation reporting for the partner.
  * custom_field `array`: Contains custom field names and values to appear in the reconciliation report. This can be a list of multiple name/value pairs. The names provided must match the configured in the partner setup.
    * items [CustomField_84](#customfield_84)

### ReconciliationData_99
* ReconciliationData_99 `object`: Reconciliation information that will be associated to the transfer and will appear in the reconciliation reporting for the partner.
  * custom_field `array`: Contains custom field names and values to appear in the reconciliation report. This can be a list of multiple name/value pairs. The names provided must match the configured in the partner setup.
    * items [CustomField_100](#customfield_100)

### Sender_105
* Sender_105 `object`: Information about the sender of the transaction.
  * address [Address_106](#address_106)
  * date_of_birth `string`: Date of birth of the sender as an ISO 8601 Full Date. Valid Values- Refer 'Date And Time Formats'
  * email `string`: Email address of the sender. Phone number or email address should be provided if the partner is set up to receive notifications. Details- Conditional, 5-254
  * first_name `string`: First name of the sender.
  * last_name `string`: Last name of the sender.
  * middle_name `string`: Middle name of the sender.
  * phone `string`: Phone number of the sender. Phone number or email address should be provided if the partner is set up to receive notifications. Details- Conditional, 1-15

### Sender_119
* Sender_119 `object`: Sender information is required for non-tokenized transactions. If a pan number is provided directly, the sender information should be provided. Details- Conditional
  * additional_merchant_data [AdditionalMerchantData_121](#additionalmerchantdata_121)
  * address [Address_120](#address_120)
  * date_of_birth `string`: The consumer's date of birth as an ISO 8601 Full Date. Valid Values- Refer 'Date And Time Formats'
  * email `string`: Sender's email address. Phone number or Email should be provided if the partner is set up to receive notifications. Details- Conditional
  * first_name **required** `string`: Sender’s first name. Details- alpha, 1-40
  * government_ids [GovernmentIds_122](#governmentids_122)
  * last_name **required** `string`: Sender’s last name. Details- alpha, 1-40
  * middle_name `string`: Middle name of the sender. Details- alpha, 40
  * nationality `string`: The senders home country as an ISO 3166-1 alpha-3 country code, In uppercase. Details- alpha, 3
  * phone `string`: Sender's phone number, including country code. Phone number or Email should be provided if the partner is set up to receive notifications. Details- Conditional, 1-15

### Sender_130
* Sender_130 `object`: Information about the sender of the transaction.
  * additional_merchant_data [AdditionalMerchantData_132](#additionalmerchantdata_132)
  * address [Address_131](#address_131)
  * date_of_birth `string`: Date of birth of the sender as an ISO 8601 Full Date.
  * email `string`: Email address of the sender.
  * first_name `string`: Sender’s first name. Details- alpha, 1-40
  * government_ids [GovernmentIds_133](#governmentids_133)
  * last_name `string`: Sender’s last name.
  * middle_name `string`: Middle name of the sender. Details- alpha, 40
  * nationality `string`: The senders home country as an ISO 3166-1 alpha-3 country code.
  * phone `string`: Phone number of the sender.
  * sanction_score `string`: A value ranging from 0 to 100. A higher score indicates a closer match to names on the applicable screening list, while lower scores indicate a less likely match.  Available in response when partner is enabled for Sanction Screening validation and sanction_screening_override value is “false”.

### Sender_146
* Sender_146 `object`: Information about the sender of the transaction.
  * address [Address_147](#address_147)
  * date_of_birth `string`: Date of birth of the sender as an ISO 8601 Full Date.
  * email `string`: Email address of the sender.
  * first_name `string`: First name of the sender.
  * government_ids [GovernmentIds_148](#governmentids_148)
  * last_name `string`: Last name of the sender.
  * middle_name `string`: Middle name of the sender.
  * nationality `string`: Country of the sender as an ISO alpha country code.
  * phone `string`: Phone number of the sender.
  * sanction_score `string`: A value ranging from 0 to 100. A higher score indicates a closer match to names on the applicable screening list, while lower scores indicate a less likely match.  Available in response when partner is enabled for Sanction Screening validation and sanction_screening_override value is “false”.

### Sender_15
* Sender_15 `object`: Information about the sender of the transaction.
  * additional_merchant_data [AdditionalMerchantData_17](#additionalmerchantdata_17)
  * address [Address_16](#address_16)
  * email `string`: Email address of the sender. \n\nType: Alphanumeric Special [a-zA-Z0-9\-@+.*$_], Maximum Length: 254
  * first_name `string`: First name of the sender. \n\nType: Alphanumeric Special [a-zA-Z0-9 !"#$%&'()*+,-./\:;<=>?@[]_`{|}~ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÚÚÝàáâãäåçèéêëìíîïñòóôõöùúûüýÿ], Maximum Length: 40
  * last_name `string`: Last name of the sender. \n\nType: Alphanumeric Special [a-zA-Z0-9 !"#$%&'()*+,-./\:;<=>?@[]_`{|}~ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÚÚÝàáâãäåçèéêëìíîïñòóôõöùúûüýÿ], Maximum Length: 40
  * middle_name `string`: Middle name of the sender. \n\nType: Alphanumeric Special [a-zA-Z0-9 !"#$%&'()*+,-./\:;<=>?@[]_`{|}~ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÚÚÝàáâãäåçèéêëìíîïñòóôõöùúûüýÿ], Maximum Length: 40
  * phone `string`: Phone number of the sender, Country code can be included. 

### Sender_3
* Sender_3 `object`: Information about the sender of the transaction.
  * additional_merchant_data [AdditionalMerchantData_5](#additionalmerchantdata_5)
  * address [Address_4](#address_4)
  * authentication_value `string`: List of name/value pairs containing authentication  values. Refer 'Authentication Value URIs'
  * email `string`: Email address of the sender. Type: Alphanumeric Special [a-zA-Z0-9\-@+.*$_], Length: 5-254
  * first_name **required** `string`: First name of the sender.\n\nType: Alphanumeric Special [a-zA-Z0-9 !"#$%&'()*+,-./\:;<=>?@[]_`{|}~ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÚÚÝàáâãäåçèéêëìíîïñòóôõöùúûüýÿ], Length: 1-40
  * last_name **required** `string`: Last name of the sender.\n\nType: Alphanumeric Special [a-zA-Z0-9 !"#$%&'()*+,-./\:;<=>?@[]_`{|}~ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÚÚÝàáâãäåçèéêëìíîïñòóôõöùúûüýÿ], Length: 1-40
  * middle_name `string`: Middle name of the sender.\n\nType: Alphanumeric Special [a-zA-Z0-9 !"#$%&'()*+,-./\:;<=>?@[]_`{|}~ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÚÚÝàáâãäåçèéêëìíîïñòóôõöùúûüýÿ], Length: 1-40
  * phone `string`: Phone number of the sender, Country code can be included. 
  * token_cryptogram [TokenCryptogram_6](#tokencryptogram_6)

### Sender_30
* Sender_30 `object`: Information about the sender of the transaction. If a PAN number is provided in the sender_account_uri, the sender information section is required. Details- Conditional
  * address [Address_31](#address_31)
  * date_of_birth `string`: Date of birth of the sender as an ISO 8601 Full Date. Valid Values- Refer 'Date And Time Formats'
  * email `string`: Email address of the sender. Phone number or email address should be provided if the partner is set up to receive notifications. Details- Conditional, 5-254
  * first_name **required** `string`: First name of the sender.\n\nType: Alphanumeric Special [a-zA-Z0-9 !"#$%&'()*+,-./\:;<=>?@[]_`{|}~ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÚÚÝàáâãäåçèéêëìíîïñòóôõöùúûüýÿ], Length: 1-40
  * last_name **required** `string`: Last name of the sender.\n\nType: Alphanumeric Special [a-zA-Z0-9 !"#$%&'()*+,-./\:;<=>?@[]_`{|}~ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÚÚÝàáâãäåçèéêëìíîïñòóôõöùúûüýÿ], Length: 1-40
  * middle_name `string`: Middle name of the sender.\n\nType: Alphanumeric Special [a-zA-Z0-9 !"#$%&'()*+,-./\:;<=>?@[]_`{|}~ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÚÚÝàáâãäåçèéêëìíîïñòóôõöùúûüýÿ], Length: 1-40
  * phone `string`: Phone number of the sender. Phone number or email address should be provided if the partner is set up to receive notifications. Details- Conditional, 1-15

### Sender_41
* Sender_41 `object`: Information about the sender of the transaction.
  * address [Address_42](#address_42)
  * date_of_birth `string`: Date of birth of the sender as an ISO 8601 Full Date. Valid Values- Refer 'Date And Time Formats'
  * email `string`: Email address of the sender. Phone number or email address should be provided if the partner is set up to receive notifications. Details- Conditional, 5-254
  * first_name `string`: First name of the sender.
  * last_name `string`: Last name of the sender.
  * middle_name `string`: Middle name of the sender.
  * phone `string`: Phone number of the sender. Phone number or email address should be provided if the partner is set up to receive notifications. Details- Conditional, 1-15

### Sender_55
* Sender_55 `object`: Information about the sender of the transaction.
  * additional_merchant_data [AdditionalMerchantData_57](#additionalmerchantdata_57)
  * address [Address_56](#address_56)
  * date_of_birth `string`: Date of birth of the sender as an ISO 8601 Full Date. Valid Values- Refer 'Date And Time Formats'
  * email `string`: Email address of the sender. Phone number or email address should be provided if the partner is set up to receive notifications. Details- Conditional, 5-254
  * first_name `string`: First name of the sender.
  * last_name `string`: Last name of the sender.
  * middle_name `string`: Middle name of the sender.
  * phone `string`: Phone number of the sender. Phone number or email address should be provided if the partner is set up to receive notifications. Details- Conditional, 1-15

### Sender_72
* Sender_72 `object`: Information about the sender of the transaction.
  * additional_merchant_data [AdditionalMerchantData_74](#additionalmerchantdata_74)
  * address [Address_73](#address_73)
  * date_of_birth `string`: Date of birth of the sender as an ISO 8601 Full Date. Valid Values- Refer 'Date And Time Formats'
  * email `string`: Email address of the sender. Phone number or email address should be provided if the partner is set up to receive notifications. Details- Conditional, 5-254
  * first_name `string`: First name of the sender.
  * last_name `string`: Last name of the sender.
  * middle_name `string`: Middle name of the sender.
  * phone `string`: Phone number of the sender. Phone number or email address should be provided if the partner is set up to receive notifications. Details- Conditional, 1-15

### Sender_94
* Sender_94 `object`: Information about the sender of the transaction. If a PAN number is provided in the sender_account_uri, the sender information section is required. Details- Conditional
  * address [Address_95](#address_95)
  * date_of_birth `string`: Date of birth of the sender as an ISO 8601 Full Date. Valid Values- Refer 'Date And Time Formats'
  * email `string`: Email address of the sender. Phone number or email address should be provided if the partner is set up to receive notifications. Details- Conditional, 5-254
  * first_name `string`: First name of the sender.\n\nType: Alphanumeric Special [a-zA-Z0-9 !"#$%&'()*+,-./\:;<=>?@[]_`{|}~ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÚÚÝàáâãäåçèéêëìíîïñòóôõöùúûüýÿ], Length: 1-40
  * last_name `string`: Last name of the sender.\n\nType: Alphanumeric Special [a-zA-Z0-9 !"#$%&'()*+,-./\:;<=>?@[]_`{|}~ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÚÚÝàáâãäåçèéêëìíîïñòóôõöùúûüýÿ], Length: 1-40
  * merchant_category_code **required** `string`: Mastercard defined merchant category code. This identifies the type of business of the sender/merchant. This merchant category code should match valid code set by Mastercard rules. Details 1-4
  * middle_name `string`: Middle name of the sender.\n\nType: Alphanumeric Special [a-zA-Z0-9 !"#$%&'()*+,-./\:;<=>?@[]_`{|}~ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÚÚÝàáâãäåçèéêëìíîïñòóôõöùúûüýÿ], Length: 1-40
  * phone `string`: Phone number of the sender. Phone number or email address should be provided if the partner is set up to receive notifications. Details- Conditional, 1-15

### TokenCryptogram_10
* TokenCryptogram_10 `object`: Token Cryptogram is a value that needs to be processed along with the token when submitting a transaction.
  * pan_sequence_number `string`:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
  * type **required** `string`: CONTACTLESS_CHIP: When shared cryptogram in token_cryptogram.value is result of a contactless tap and chip information is read by the terminal, CONTACTLESS_MAGSTRIPE: When shared cryptogram in token_cryptogram.value is result of a contactless tap and the magstripe information is read by the terminal, DSRP_UCAF: When shared cryptogram in token_cryptogram.value is result of an in-app purchase and chip information to be passed in the UCAF field, DSRP_CHIP: When shared cryptogram in token_cryptogram.value is result of an in-app purchase leveraging EMV data.Values - CONTACTLESS_CHIP, CONTACTLESS_MAGSTRIPE, DSRP_UCAF, DSRP_CHIP. 
  * value **required** `string`: CONTACTLESS_CHIP - Type: Hexadecimal [A-F0-9], Length: 2-510

### TokenCryptogram_103
* TokenCryptogram_103 `object`: Token Cryptogram is a value that needs to be processed along with the token when submitting a transaction.
  * pan_sequence_number `string`: PAN Sequence Number distinguishes among separate cards having the same PAN. Processors  with chip-reading capability may pass this information for Contactless Chip and Contactless Magstripe transactions.
  * type **required** `string`: CONTACTLESS_CHIP: When shared cryptogram in token_cryptogram.value is result of a contactless tap and chip information is read by the terminal, CONTACTLESS_MAGSTRIPE: When shared cryptogram in token_cryptogram.value is result of a contactless tap and the magstripe information is read by the terminal, DSRP_UCAF: When shared cryptogram in token_cryptogram.value is result of an in-app purchase and chip information to be passed in the UCAF field, DSRP_CHIP: When shared cryptogram in token_cryptogram.value is result of an in-app purchase leveraging EMV data.
  * value **required** `string`: Contains formatted chip data. Details- alphanumeric, 1-255.

### TokenCryptogram_128
* TokenCryptogram_128 `object`: Token Cryptogram is a value that needs to be processed along with the token when submitting a transaction.
  * pan_sequence_number `string`: PAN Sequence Number distinguishes among separate cards having the same PAN. Processors  with chip-reading capability may pass this information for Contactless Chip and Contactless Magstripe transactions.
  * type **required** `string`: CONTACTLESS_CHIP: When shared cryptogram in token_cryptogram.value is result of a contactless tap and chip information is read by the terminal, CONTACTLESS_MAGSTRIPE: When shared cryptogram in token_cryptogram.value is result of a contactless tap and the magstripe information is read by the terminal, DSRP_UCAF: When shared cryptogram in token_cryptogram.value is result of an in-app purchase and chip information to be passed in the UCAF field, DSRP_CHIP: When shared cryptogram in token_cryptogram.value is result of an in-app purchase leveraging EMV data.
  * value **required** `string`: Contains formatted chip data. Details- alphanumeric, 1-255.

### TokenCryptogram_39
* TokenCryptogram_39 `object`: Token Cryptogram is a value that needs to be processed along with the token when submitting a transaction.
  * pan_sequence_number `string`: PAN Sequence Number distinguishes among separate cards having the same PAN. Processors  with chip-reading capability may pass this information for Contactless Chip and Contactless Magstripe transactions.
  * type **required** `string`: CONTACTLESS_CHIP: When shared cryptogram in token_cryptogram.value is result of a contactless tap and chip information is read by the terminal, CONTACTLESS_MAGSTRIPE: When shared cryptogram in token_cryptogram.value is result of a contactless tap and the magstripe information is read by the terminal, DSRP_UCAF: When shared cryptogram in token_cryptogram.value is result of an in-app purchase and chip information to be passed in the UCAF field, DSRP_CHIP: When shared cryptogram in token_cryptogram.value is result of an in-app purchase leveraging EMV data.
  * value **required** `string`: Contains formatted chip data. Details- alphanumeric, 1-255.

### TokenCryptogram_6
* TokenCryptogram_6 `object`: Token Cryptogram is a value that needs to be processed along with the token when submitting a transaction.
  * pan_sequence_number `string`: PAN Sequence Number distinguishes among separate cards having the same PAN. Processors  with chip-reading capability may pass this information for Contactless Chip and Contactless Magstripe transactions.When the token_cryptogram.type contains one the following types CONTACTLESS_CHIP, CONTACTLESS_MAGSTRIPE, DSRP_CHIP, then the pan_sequence_number may be present.
  * type **required** `string`: CONTACTLESS_CHIP: When shared cryptogram in token_cryptogram.value is result of a contactless tap and chip information is read by the terminal, CONTACTLESS_MAGSTRIPE: When shared cryptogram in token_cryptogram.value is result of a contactless tap and the magstripe information is read by the terminal, DSRP_UCAF: When shared cryptogram in token_cryptogram.value is result of an in-app purchase and chip information to be passed in the UCAF field, DSRP_CHIP: When shared cryptogram in token_cryptogram.value is result of an in-app purchase leveraging EMV data.Values - CONTACTLESS_CHIP, CONTACTLESS_MAGSTRIPE, DSRP_UCAF, DSRP_CHIP. 
  * value **required** `string`: CONTACTLESS_CHIP - Type: Hexadecimal [A-F0-9], Length: 2-510

### TransactionAmount_114
* TransactionAmount_114 `object`: transaction amount consist of value and currency
  * currency `string`: Currency of the transfer amount as an ISO alpha currency code.
  * value `string`: Amount of the transfer. The decimal point is implied based on the payment_transfer.currency.

### TransactionAmount_141
* TransactionAmount_141 `object`: transaction amount consist of value and currency
  * currency `string`: Currency of the transfer amount as an ISO alpha currency code.
  * value `string`: Amount of the transfer. The decimal point is implied based on the payment_transfer.currency.

### TransactionAmount_156
* TransactionAmount_156 `object`: transaction amount consist of value and currency
  * currency `string`: Currency of the transfer amount as an ISO alpha currency code.
  * value `string`: Amount of the transfer. The decimal point is implied based on the payment_transfer.currency.

### TransactionAmount_160
* TransactionAmount_160 `object`: Contains the currency of the notification
  * currency `string`: The currency as an ISO 4217 alpha-3 currency code, in uppercase. Details- alpha, 3
  * value `string`: Amount for the transfer in notification. Will default to 5300 if not provided. Details- numeric, 1-999999999999

### TransactionAmount_164
* TransactionAmount_164 `object`: Contains the currency of the notification
  * currency `string`: The currency as an ISO 4217 alpha-3 currency code, in uppercase. Details- alpha, 3
  * value `string`: Amount for the transfer in notification. Will default to 5300 if not provided. Details- numeric, 1-999999999999

### TransactionAmount_25
* TransactionAmount_25 `object`: Transaction amount consists of value and currency
  * currency `string`: Currency of the transfer amount as an ISO alpha currency code. 
  * value `string`: Amount of the transfer. Decimal implied based on the exponent for the merchant_transfer.currency. 

### TransactionAmount_50
* TransactionAmount_50 `object`: transaction amount consist of value and currency
  * currency `string`: Currency of the transfer amount as an ISO alpha currency code.
  * value `string`: Amount of the transfer. The decimal point is implied based on the payment_transfer.currency.

### TransactionAmount_65
* TransactionAmount_65 `object`: Transaction amount consist of value and currency
  * currency `string`: Currency of the transfer amount as an ISO alpha currency code.
  * value `string`: Amount of the transfer. The decimal point is implied based on the merchant_payment_transfer.currency.

### TransactionAmount_82
* TransactionAmount_82 `object`: Transaction amount consist of value and currency
  * currency `string`: Currency of the transfer amount as an ISO alpha currency code.
  * value `string`: Amount of the transfer. The decimal point is implied based on the merchant_payment_transfer.currency.

### TransactionHistory_111
* TransactionHistory_111 `object`: A list of all Transactions in the transfer including reversals, if any applicable.
  * data [Data_112](#data_112)
  * item_count `integer`: Number of Transactions in the list. Details- Numeric Example: 1
  * resource_type `string`: Type of the resource that is being returned. Valid value:  list

### TransactionHistory_138
* TransactionHistory_138 `object`: A list of all Transactions in the transfer including reversals.
  * data [Data_139](#data_139)
  * item_count `integer`: Number of Transactions in the list. Details- Numeric Example: 1
  * resource_type `string`: Resource type of the resource that is being returned.

### TransactionHistory_153
* TransactionHistory_153 `object`: A list of all Transactions in the transfer including reversals.
  * data [Data_154](#data_154)
  * item_count `integer`: Number of Transactions in the list. Details- Numeric Example: 1
  * resource_type `string`: Resource type of the resource that is being returned.

### TransactionHistory_22
* TransactionHistory_22 `object`: A list of all Transactions in the transfer including reversals, if any applicable.
  * data [Data_23](#data_23)
  * item_count `integer`: Number of Transactions in the list. 
  * resource_type `string`: Type of the resource that is being returned. 

### TransactionHistory_47
* TransactionHistory_47 `object`: A list of all Transactions in the transfer including reversals, if any applicable.
  * data [Data_48](#data_48)
  * item_count `integer`: Number of Transactions in the list. Details- Numeric Example: 1
  * resource_type `string`: Type of the resource that is being returned. Valid value:  list

### TransactionHistory_62
* TransactionHistory_62 `object`: A list of all Transactions in the transfer including reversals, if any applicable.
  * data [Data_63](#data_63)
  * item_count `integer`: Number of Transactions in the list. Details- Numeric Example: 1
  * resource_type `string`: Type of the resource that is being returned. Valid value:  list

### TransactionHistory_79
* TransactionHistory_79 `object`: A list of all Transactions in the transfer including reversals, if any applicable.
  * data [Data_80](#data_80)
  * item_count `integer`: Number of Transactions in the list. Details- Numeric Example: 1
  * resource_type `string`: Type of the resource that is being returned. Valid value:  list

### Transaction_113
* Transaction_113 `object`: transaction array
  * account_uri `string`: account uri
  * authorization_id `string`: Transaction response ID code that the authorizing institution assigns.  
  * create_timestamp `string`: Date and time the transaction was created as an ISO 8601 Timestamp. [YYYY-MM-DDTHH:MM:SSZ]
  * funds_availability `string`: An estimate of when the funds might be available. Actual Deposit Availability is determined by the financial institution.[One of: IMMEDIATE, NEXT_BUSINESS_DAY, or TWO_TO_FIVE_BUSINESS_DAYS.]
  * id `string`: System generated unique transfer identifier.
  * network `string`: Proposed network for the transaction.
  * network_status_code `string`: Network Status Code in case of Decline
  * network_status_description `string`: Network Status Description in case of Decline
  * payment_account_reference `string`: A unique value associated with a single PAN and attributed to all tokens associated with that PAN.  
  * resource_type `string`: Type of resource. Valid value:  transaction
  * retrieval_reference `string`: Unique reference number that identifies the transaction at the network. Details- maxlength 24
  * status `string`: Status of the disbursement. One of APPROVED, DECLINED, UNKNOWN, ERROR, or PENDING.
  * status_reason `string`: Reason for status, APPROVED, DECLINED, FRAUD, CARD_EXPIRED, LIMIT_EXCEEDED, UNKNOWN, ERROR, PENDING
  * status_timestamp `string`: Date and time of when the status was changed to its current value as an ISO 8601 Timestamp. [YYYY-MM-DDTHH:MM:SSZ
  * switch_serial_number `string`: Unique transaction identification number (switch serial number) generated (or assigned) by the Single Message System.Type: Numeric [0-9], Maximum Length: 9
  * system_trace_audit_number `string`: Unique system trace audit number for the transaction, the STAN ( system trace audit number ). Details- maxlength 6
  * transaction_amount [TransactionAmount_114](#transactionamount_114)
  * type `string`: Type of the transaction. One of: FUNDING, PAYMENT, FUNDING_REVERSAL, or PAYMENT_REVERSAL.
  * unique_reference_number `string`: Unique reference number for the transaction. Type: Alphanumeric Special [a-zA-Z0-9* , - . _ ~ ], Length:19

### Transaction_140
* Transaction_140 `object`: transaction array
  * account_uri `string`: account uri
  * authorization_id `string`: Transaction response ID code that the authorizing institution assigns.  
  * create_timestamp `string`: Date and time the transaction was created as an ISO 8601 Timestamp. [YYYY-MM-DDTHH:MM:SSZ]
  * id `string`: System generated unique transfer identifier.
  * network `string`: Proposed network for the transaction.
  * network_status_code `string`: Network Status Code in case of Decline
  * network_status_description `string`: Network Status Description in case of Decline
  * payment_account_reference `string`: A unique value associated with a single PAN and attributed to all tokens associated with that PAN.  
  * resource_type `string`: Type of resource
  * retrieval_reference `string`: Unique reference number that identifies the transaction at the network. Details- maxlength 24
  * status `string`: Status of the disbursement. One of APPROVED, DECLINED, UNKNOWN, ERROR, or PENDING.
  * status_reason `string`: Reason for status, APPROVED, DECLINED, FRAUD, CARD_EXPIRED, LIMIT_EXCEEDED, UNKNOWN, ERROR, PENDING
  * status_timestamp `string`: Date and time of when the status was changed to its current value as an ISO 8601 Timestamp. [YYYY-MM-DDTHH:MM:SSZ
  * system_trace_audit_number `string`: Unique system trace audit number for the transaction, the STAN ( system trace audit number ). Details- maxlength 6
  * transaction_amount [TransactionAmount_141](#transactionamount_141)
  * type `string`: Type of the transaction. One of: FUNDING, PAYMENT, FUNDING_REVERSAL, or PAYMENT_REVERSAL.

### Transaction_155
* Transaction_155 `object`: transaction array
  * account_uri `string`: account uri
  * authorization_id `string`: Transaction response ID code that the authorizing institution assigns. This ID will be same as the original funding only transaction.
  * create_timestamp `string`: Date and time the transaction was created as an ISO 8601 Timestamp. [YYYY-MM-DDTHH:MM:SSZ]
  * id `string`: System generated unique transfer identifier.
  * network `string`: Proposed network for the transaction.
  * network_status_code `string`: Network Status Code in case of Decline
  * network_status_description `string`: Network Status Description in case of Decline
  * payment_account_reference `string`: A unique value associated with a single PAN and attributed to all tokens associated with that PAN. This attribute will be same as original funidng only transaction.
  * resource_type `string`: Type of resource
  * retrieval_reference `string`: Unique reference number that identifies the transaction at the network. Details- maxlength 24
  * reversal_reason `string`: Brief description of reason for reversal.
  * status `string`: Status of the disbursement. One of APPROVED, DECLINED, UNKNOWN, ERROR, or PENDING.
  * status_reason `string`: Reason for status, APPROVED, DECLINED, FRAUD, CARD_EXPIRED, LIMIT_EXCEEDED, UNKNOWN, ERROR, PENDING
  * status_timestamp `string`: Date and time of when the status was changed to its current value as an ISO 8601 Timestamp. [YYYY-MM-DDTHH:MM:SSZ
  * system_trace_audit_number `string`: Unique system trace audit number for the transaction, the STAN ( system trace audit number ). Details- maxlength 6
  * transaction_amount [TransactionAmount_156](#transactionamount_156)
  * type `string`: Type of the transaction. One of: FUNDING, PAYMENT, FUNDING_REVERSAL, or PAYMENT_REVERSAL.

### Transaction_24
* Transaction_24 `object`: Array of transactions
  * account_uri `string`: Scrubbed URI describing the account. It will include masked account information but will not include security codes (e.g. CVC or expiration date for a card account). 
  * authorization_id `string`: Transaction response ID code that the authorizing institution assigns.  
  * convenience_amount `string`: Amount of the convenience fee. The decimal point is implied based on the transaction_amount.currency. "[0-9]*". Max Length: 12. Value must be less than payment_transfer.amount.
  * convenience_indicator `string`: Convenience fee type code. Min length: 2. Max Length: 2. Valid values  (01: Indicates Consumer should be prompted to enter tip 02: Indicates that merchant would mandatorily charge a flat convenience fee 03: Indicates that merchant would charge a percentage convenience fee)
  * create_timestamp `string`: Date and time the transaction was created as an ISO 8601 format. 
  * funds_availability `string`: An estimate of when the funds might be available. Actual Deposit Availability is determined by the financial institution. Values: IMMEDIATE, NEXT_BUSINESS_DAY, or TWO_TO_FIVE_BUSINESS_DAYS. 
  * id `string`: System generated unique transfer identifier. 
  * network `string`: Name of the network that processed this transaction. 
  * network_status_code `string`: Network Status Code for this transaction. 
  * network_status_description `string`: Network Status Description of this transaction. 
  * payment_account_reference `string`: A unique value associated with a single PAN and attributed to all tokens associated with that PAN.  
  * qr_data `string`: Encoded QR (Quick Response) code data. Type: Alphanumeric and special characters [a-zA-Z0-9!"#$%&'()*+,-./\:;<=>?@[]_`{|}~], Maximum Length: 237
  * resource_type `string`: Type of resource. Valid value:  transaction. 
  * retrieval_reference `string`: Unique reference number that identifies the transaction at the network. 
  * status `string`: Status of this transaction. Values: APPROVED, UNKNOWN. 
  * status_reason `string`: Reason for status Values: APPROVED,UNKNOWN. The following status reason will be provided based on the status APPROVED: APPROVED; UNKNOWN:UNKNOWN. 
  * status_timestamp `string`: Date and time of the status as an ISO 8601 format. 
  * switch_serial_number `string`: Unique transaction identification number (switch serial number) generated (or assigned) by the Single Message System.
  * system_trace_audit_number `string`: Unique system trace audit number for the transaction, the STAN ( system trace audit number ). 
  * transaction_amount [TransactionAmount_25](#transactionamount_25)
  * type `string`: Type of the transaction. Values: FUNDING, PAYMENT, FUNDING_REVERSAL, or PAYMENT_REVERSAL. 
  * unique_reference_number `string`: Unique reference number for the transaction.  

### Transaction_49
* Transaction_49 `object`: transaction array
  * account_uri `string`: account uri
  * authorization_id `string`: Transaction response ID code that the authorizing institution assigns.  
  * create_timestamp `string`: Date and time the transaction was created as an ISO 8601 Timestamp. [YYYY-MM-DDTHH:MM:SSZ]
  * funds_availability `string`: An estimate of when the funds might be available. Actual Deposit Availability is determined by the financial institution.[One of: IMMEDIATE, NEXT_BUSINESS_DAY, or TWO_TO_FIVE_BUSINESS_DAYS.]
  * id `string`: System generated unique transfer identifier.
  * network `string`: Proposed network for the transaction.
  * network_status_code `string`: Network Status Code in case of Decline
  * network_status_description `string`: Network Status Description in case of Decline
  * payment_account_reference `string`: A unique value associated with a single PAN and attributed to all tokens associated with that PAN.  
  * resource_type `string`: Type of resource. Valid value:  transaction
  * retrieval_reference `string`: Unique reference number that identifies the transaction at the network. Details- maxlength 24
  * status `string`: Status of the disbursement. One of APPROVED, DECLINED, UNKNOWN, ERROR, or PENDING.
  * status_reason `string`: Reason for status, APPROVED, DECLINED, FRAUD, CARD_EXPIRED, LIMIT_EXCEEDED, UNKNOWN, ERROR, PENDING
  * status_timestamp `string`: Date and time of when the status was changed to its current value as an ISO 8601 Timestamp. [YYYY-MM-DDTHH:MM:SSZ
  * switch_serial_number `string`: Unique transaction identification number (switch serial number) generated (or assigned) by the Single Message System.Type: Numeric [0-9], Maximum Length: 9
  * system_trace_audit_number `string`: Unique system trace audit number for the transaction, the STAN ( system trace audit number ). Details- maxlength 6
  * transaction_amount [TransactionAmount_50](#transactionamount_50)
  * type `string`: Type of the transaction. One of: FUNDING, PAYMENT, FUNDING_REVERSAL, or PAYMENT_REVERSAL.
  * unique_reference_number `string`: Unique reference number for the transaction. Type: Alphanumeric Special [a-zA-Z0-9 * , - . _ ~ ], Length: 19

### Transaction_64
* Transaction_64 `object`: Array of transactions
  * account_uri `string`: Scrubbed URI describing the account. It will include masked account information (e.g. "************1234" for a card account) but will not include security codes (e.g. CVC or expiration date for a card account). 
  * authorization_id `string`: Transaction response ID code that the authorizing institution assigns.  
  * convenience_amount `string`: Amount of the convenience fee. The decimal point is implied based on the transaction_amount.currency. "[0-9]*". Max Length: 12. Value must be less than payment_transfer.amount.
  * convenience_indicator `string`: Convenience fee type code. Min length: 2. Max Length: 2. Valid values  (01: Indicates Consumer should be prompted to enter tip 02: Indicates that merchant would mandatorily charge a flat convenience fee 03: Indicates that merchant would charge a percentage convenience fee)
  * create_timestamp `string`: Date and time the transaction was created as an ISO 8601 Timestamp. [YYYY-MM-DDTHH:MM:SS±hh[:mm]]
  * id `string`: System generated unique transfer identifier.
  * network `string`: Name of the network that processed this transaction.
  * network_status_code `string`: Network Status Code in case of Decline
  * network_status_description `string`: Network Status Description in case of Decline
  * payment_account_reference `string`: A unique value associated with a single PAN and attributed to all tokens associated with that PAN.  
  * qr_data `string`: Encoded QR (Quick Response) code data. Type: Alphanumeric and special characters [a-zA-Z0-9!"#$%&'()*+,-./\:;<=>?@[]_`{|}~], Maximum Length: 237
  * resource_type `string`: Type of resource. Valid value:  transaction
  * retrieval_reference `string`: Unique reference number that identifies the transaction at the network. Details- maxlength 24
  * status `string`: Status of this transaction. One of APPROVED, DECLINED, UNKNOWN, ERROR, or PENDING.
  * status_reason `string`: Reason for status One of [APPROVED, DECLINED, FRAUD, CARD_EXPIRED, LIMIT_EXCEEDED,UNKNOWN, ERROR or PENDING] The following status reason will be provided based on the status APPROVED: APPROVED; UNKNOWN:UNKNOWN, ERROR:ERROR, PENDING: PENDING;DECLINED: DECLINED, FRAUD, CARD_EXPIRED, LIMIT_EXCEEDED;
  * status_timestamp `string`: Date and time of the status as an ISO 8601 Timestamp. [YYYY-MM-DDTHH:MM:SS±hh[:mm]]
  * switch_serial_number `string`: Unique transaction identification number (switch serial number) generated (or assigned) by the Single Message System.Type: Numeric [0-9], Maximum Length: 9
  * system_trace_audit_number `string`: Unique system trace audit number for the transaction, the STAN ( system trace audit number ). Details- maxlength 6
  * transaction_amount [TransactionAmount_65](#transactionamount_65)
  * type `string`: Type of the transaction. One of: FUNDING, PAYMENT, FUNDING_REVERSAL, or PAYMENT_REVERSAL.
  * unique_reference_number `string`: Unique reference number for the transaction. Type: Alphanumeric Special [a-zA-Z0-9 * , - . _ ~ ], Length: 19

### Transaction_81
* Transaction_81 `object`: Array of transactions
  * account_uri `string`: Scrubbed URI describing the account. It will include masked account information (e.g. "************1234" for a card account) but will not include security codes (e.g. CVC or expiration date for a card account). 
  * authorization_id `string`: Transaction response ID code that the authorizing institution assigns.  
  * convenience_amount `string`: Amount of the convenience fee. The decimal point is implied based on the transaction_amount.currency. "[0-9]*". Max Length: 12. Value must be less than payment_transfer.amount.
  * convenience_indicator `string`: Convenience fee type code. Min length: 2. Max Length: 2. Valid values  (01: Indicates Consumer should be prompted to enter tip 02: Indicates that merchant would mandatorily charge a flat convenience fee 03: Indicates that merchant would charge a percentage convenience fee)
  * create_timestamp `string`: Date and time the transaction was created as an ISO 8601 Timestamp. [YYYY-MM-DDTHH:MM:SS±hh[:mm]]
  * id `string`: System generated unique transfer identifier.
  * network `string`: Name of the network that processed this transaction.
  * network_status_code `string`: Network Status Code in case of Decline
  * network_status_description `string`: Network Status Description in case of Decline
  * payment_account_reference `string`: A unique value associated with a single PAN and attributed to all tokens associated with that PAN.  
  * qr_data `string`: Encoded QR (Quick Response) code data. Type: Alphanumeric and special characters [a-zA-Z0-9!"#$%&'()*+,-./\:;<=>?@[]_`{|}~], Maximum Length: 237
  * resource_type `string`: Type of resource. Valid value:  transaction
  * retrieval_reference `string`: Unique reference number that identifies the transaction at the network. Details- maxlength 24
  * status `string`: Status of this transaction. One of APPROVED, DECLINED, UNKNOWN, ERROR, or PENDING.
  * status_reason `string`: Reason for status One of [APPROVED, DECLINED, FRAUD, CARD_EXPIRED, LIMIT_EXCEEDED,UNKNOWN, ERROR or PENDING] The following status reason will be provided based on the status APPROVED: APPROVED; UNKNOWN:UNKNOWN, ERROR:ERROR, PENDING: PENDING;DECLINED: DECLINED, FRAUD, CARD_EXPIRED, LIMIT_EXCEEDED;
  * status_timestamp `string`: Date and time of the status as an ISO 8601 Timestamp. [YYYY-MM-DDTHH:MM:SS±hh[:mm]]
  * switch_serial_number `string`: Unique transaction identification number (switch serial number) generated (or assigned) by the Single Message System.Type: Numeric [0-9], Maximum Length: 9
  * system_trace_audit_number `string`: Unique system trace audit number for the transaction, the STAN ( system trace audit number ). Details- maxlength 6
  * transaction_amount [TransactionAmount_82](#transactionamount_82)
  * type `string`: Type of the transaction. One of: FUNDING, PAYMENT, FUNDING_REVERSAL, or PAYMENT_REVERSAL.
  * unique_reference_number `string`: Unique reference number for the transaction. Type: Alphanumeric Special [a-zA-Z0-9 * , - . _ ~ ], Length: 19

### TransferAmount_110
* TransferAmount_110 `object`: Describes the amount paid to the recipient/merchant.
  * currency `string`: Currency of the transfer amount as an ISO alpha currency code.
  * value `string`: Amount of the transfer. The decimal point is implied based on the merchant_payment_transfer.currency.

### TransferAmount_137
* TransferAmount_137 `object`: Describes the amount paid to the recipient.
  * currency `string`: Currency of the transfer amount as an ISO alpha currency code.
  * value `string`: Amount of the transfer. The decimal point is implied based on the payment_transfer.currency.

### TransferAmount_152
* TransferAmount_152 `object`: Describes the amount paid to the recipient.
  * currency `string`: Currency of the transfer amount as an ISO alpha currency code.
  * value `string`: Amount of the transfer. The decimal point is implied based on the payment_transfer.currency.

### TransferAmount_2
* TransferAmount_2 `object`: Information about the transfer amount.
  * currency **required** `string`: Currency of the transfer amount as an ISO alpha currency code. 
  * value **required** `string`: Amount of the transfer in the smallest unit of currency. Decimal implied based on the exponent for the currency. 

### TransferAmount_21
* TransferAmount_21 `object`: Describes the amount paid to the recipient/merchant.
  * currency `string`: Currency of the transfer amount as an ISO alpha currency code. 
  * value `string`: Amount of the transfer in the smallest unit of currency. Decimal implied based on the exponent for the currency. 

### TransferAmount_46
* TransferAmount_46 `object`: Describes the amount paid to the recipient/merchant.
  * currency `string`: Currency of the transfer amount as an ISO alpha currency code.
  * value `string`: Amount of the transfer. The decimal point is implied based on the merchant_payment_transfer.currency.

### TransferAmount_61
* TransferAmount_61 `object`: Describes the amount paid to the recipient/merchant.
  * currency `string`: Currency of the transfer amount as an ISO alpha currency code.
  * value `string`: Amount of the transfer. The decimal point is implied based on the merchant_payment_transfer.currency.

### TransferAmount_78
* TransferAmount_78 `object`: Describes the amount paid to the recipient/merchant.
  * currency `string`: Currency of the transfer amount as an ISO alpha currency code.
  * value `string`: Amount of the transfer. The decimal point is implied based on the merchant_payment_transfer.currency.

### Transfer_129
* Transfer_129 `object`: Response details
  * channel `string`: Initiation channel of the transfer request. Values: WEB, MOBILE, BANK, KIOSK.
  * created `string`: Date and time the original transfer was created as an ISO 8601 Timestamp. Details- YYYY-MM-DDTHH:MM:SSZ Valid Values- Refer 'Date And Time Formats'
  * device_id `string`: The serial number of a device that initiated the transfer.
  * id `string`: System generated unique transfer identifier.
  * interchange_rate_designator `string`: Indicates the interchange rate and editing rules applied to the transaction.
  * location `string`: Location where the transaction is initiated.
  * original_status `string`: Original status of the transfer. One of APPROVED, DECLINED, ERROR, PENDING, UNKNOWN.
  * payment_type `string`: Payment type used for transfer. Value - P2M: Person to Merchant. \n\nType: Alphanumeric [A-Z0-9], Maximum Length: 3
  * recipient [Recipient_134](#recipient_134)
  * recipient_account_uri `string`: URI describing the recipient account. It will include masked account information (e.g. "************1234" for a card account) but will not include security codes (e.g. CVC or expiration date for a card account).
  * reconciliation_data [ReconciliationData_142](#reconciliationdata_142)
  * resource_type `string`: Type of resource
  * sanction_screening_override `boolean`: Sanction Screening validation override if enabled for partner.
  * sender [Sender_130](#sender_130)
  * sender_account_uri `string`: URI describing the sending account. It will include masked account information (e.g. "************1234" for a card account) but will not include security codes (e.g. CVC or expiration date for a card account).
  * statement_descriptor `string`: The statement descriptor is the value that will be displayed on the recipient's bank or card statement. It consists of two parts: the prefix and the content. The prefix is a short string typically used to identify the partner. The appended &lt;prefix&gt;*&lt;content&gt; will be displayed on the recipient's statement. Note: While most financial institutions display this information consistently, some may display it incorrectly or not at all.
  * status `string`: Status of the transfer. Values: APPROVED, DECLINED, ERROR, PENDING, REVERSED, CANCELLED.
  * status_timestamp `string`: Timestamp of when the status was changed to its current value. Details- YYYY-MM-DDTHH:MM:SSZ Valid Values- Refer 'Date And Time Formats'
  * transaction_history [TransactionHistory_138](#transactionhistory_138)
  * transfer_amount [TransferAmount_137](#transferamount_137)
  * transfer_reference `string`: Unique transaction reference number provided when the Transfer was created.

### Transfer_129_wrapper
* Transfer_129_wrapper `object`: Response details
  * transfer [Transfer_129](#transfer_129)

### Transfer_145
* Transfer_145 `object`: Response details
  * channel `string`: Initiation channel of the transfer request. Values: WEB, MOBILE, BANK, KIOSK.
  * created `string`: Date and time the original transfer was created as an ISO 8601 Timestamp. Details- YYYY-MM-DDTHH:MM:SSZ Valid Values- Refer 'Date And Time Formats'
  * device_id `string`: The serial number of a device that initiated the transfer.
  * id `string`: System generated unique transfer identifier.
  * location `string`: Location where the transaction is initiated.
  * original_status `string`: Original status of the transfer. One of APPROVED, DECLINED, ERROR, PENDING, UNKNOWN.
  * payment_type `string`: Payment type used for transfer. Valid values - P2M: Person to Merchant.
  * recipient [Recipient_149](#recipient_149)
  * recipient_account_uri `string`: URI describing the recipient account. It will include masked account information (e.g. "************1234" for a card account) but will not include security codes (e.g. CVC or expiration date for a card account).
  * reconciliation_data [ReconciliationData_157](#reconciliationdata_157)
  * resource_type `string`: Type of resource
  * sanction_screening_override `boolean`: Sanction Screening validation override if enabled for partner.
  * sender [Sender_146](#sender_146)
  * sender_account_uri `string`: URI describing the sending account. It will include masked account information (e.g. "************1234" for a card account) but will not include security codes (e.g. CVC or expiration date for a card account).
  * statement_descriptor `string`: The statement descriptor is the value that will be displayed on the recipient's bank or card statement. It consists of two parts: the prefix and the content. The prefix is a short string typically used to identify the partner. The appended &lt;prefix&gt;*&lt;content&gt; will be displayed on the recipient's statement. Note: While most financial institutions display this information consistently, some may display it incorrectly or not at all.
  * status `string`: Status of the transfer. Values: APPROVED, DECLINED, ERROR, PENDING, REVERSED, CANCELLED.
  * status_timestamp `string`: Timestamp of when the status was changed to its current value. Details- YYYY-MM-DDTHH:MM:SSZ Valid Values- Refer 'Date And Time Formats'
  * transaction_history [TransactionHistory_153](#transactionhistory_153)
  * transfer_amount [TransferAmount_152](#transferamount_152)
  * transfer_reference `string`: Unique transaction reference number provided when the Transfer was created.

### Transfer_145_wrapper
* Transfer_145_wrapper `object`: Response details
  * transfer [Transfer_145](#transfer_145)


