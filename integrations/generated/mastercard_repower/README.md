# @datafire/mastercard_repower

Client library for rePower

## Installation and Usage
```bash
npm install --save @datafire/mastercard_repower
```
```js
let mastercard_repower = require('@datafire/mastercard_repower').create();

.then(data => {
  console.log(data);
});
```

## Description



## Actions

### repowerPost2
Mastercard rePower empowers consumers to instantly add money to eligible Mastercard cards. Money is available immediately for expenditures anywhere Mastercard prepaid account is accepted. The ease with which cardholders can convert cash to prepaid card funds turns their reloadable prepaid cards into valuable and practical financial tools. Making the reload process simple and accessible provides merchants with an opportunity to increase cardholder traffic. Unlike other top-up services, merchants have the flexibility to set their own reload fees.  This resource streamlines development efforts to offer Mastercard rePower services, through quick and convenient web services with the following benefits: 1)Savings in development and operational costs associated with implementing a standard MIP connection.  2)Requires support for only a single acquiring interface.  3)Leverages existing processing messages and transaction codes  4)Mastercard provides a net settlement guarantee for each reload transaction  5)Supports EMV, PayPass & MDES transactions.  This resource facilitates the ability for cardholders to reload their prepaid cards easily and securely. 




```js
mastercard_repower.repowerPost2({}, context)
```

#### Input
* input `object`
  * RepowerRequest [Repowerrequest_1_wrapper](#repowerrequest_1_wrapper)

#### Output
* output [Repower_5_wrapper](#repower_5_wrapper)

### repowerReversalPost2
A Transfer Reversal is a request to reverse a previously submitted Mastercard rePower Transfer, and is only available in extremely limited circumstances.  Reversal Processing : A rePower transaction reversal may be submitted in the event of a documented clerical error. The rePower transaction reversal must be submitted within 15 minutes of the time the original rePower transaction was authorized.  Use this resource to reverse a previously submitted rePower Transfer. 


```js
mastercard_repower.repowerReversalPost2({}, context)
```

#### Input
* input `object`
  * RepowerReversalRequest [Repowerreversalrequest_10_wrapper](#repowerreversalrequest_10_wrapper)

#### Output
* output [Repowerreversal_11_wrapper](#repowerreversal_11_wrapper)



## Definitions

### Accountbalance_9
* Accountbalance_9 `object`: Account Balance amount value and currency
  * Currency `string`: Global currency code used to represent the type of currency for the "Value" for the Account balance. Details- numeric, 3, valid ISO 4217 numeric currency codes (leading zeros may be required.)
  * Value `string`: Account balance. Implied decimal point based on currency exponent. Details- Numeric, 12

### Cardacceptor_2
* Cardacceptor_2 `object`: Card Acceptor
  * City **required** `string`: City of merchant's address. Details- String, 1-13
  * Country **required** `string`: The CountryIso3Code will be a three character value compliant with ISO 3166-1 and alpha-3 standards. Details- String, 3
  * Name **required** `string`: Point of sale merchant's name. Details- String, 1-22
  * PostalCode `string`: The PostalCode is a value representing the zip code for the merchant's address. Details- String, 10
  * State **required** `string`: State of the merchant's address. Details- String, 2

### Repower_5
* Repower_5 `object`: Response details
  * AccountBalance [Accountbalance_9](#accountbalance_9)
  * ICCEMVData `string`:  Integrated Circuit Card (ICC) System related data. It must be present for EMV transactions. Required DE 55 Subelements in /0200 and /0220 Messages. Details- Conditional, String, 255
  * PANMappingFileInformation `string`: PAN Mapping File Information will be avalable when the PAN is MDES token. Details- Conditional, String, 33
  * PersonPresentIndicator `string`: Person Present Indicator values is populated in repower response.
  * RequestId `string`: This is the unique identifier for API Web service request. Details- Numeric value, variable length between 1 and 19 digits, without zero padding
  * TransactionHistory [Transactionhistory_6](#transactionhistory_6)
  * TransactionReference `string`: This value represents the unique reference number for the rePower transaction provided by the merchant or acquiring institution. Details- Alphanumeric value, 19

### Repower_5_wrapper
* Repower_5_wrapper `object`: Response details
  * Repower [Repower_5](#repower_5)

### Repowerrequest_1
* Repowerrequest_1 `object`: Contains the details of the repower request message.
  * AdditionalSenderInformation `string`:  Contains additional sender information in the Financial Transaction.The first 20 digits will be telephone number(n-20), the next 8 digits will be Date of Birth(n-8)(MMDDYYYY)and 'Check' or 'Cash' needs to be populated next based on check load or cash load.  Details- String, Min 32 characters, Max 65 characters in Length
  * CardAcceptor [Cardacceptor_2](#cardacceptor_2)
  * CardNumber **required** `string`: Cardholder personal account number. Details- Numeric, 16 or 19, must pass LUHN MOD10 validation
  * CardSequenceNumber `string`: Card Sequence Number as part of PaymentPOS Entry mode Integrated Circuit and contactless M/Chip. It must be present for EMV,MDES or PayPass transactions (where POS Entry Mode = "05x" or "07x"). Details- Numeric, 3, The Possible values for Card Sequence Number are in the range 000–099
  * Channel **required** `string`: Origination channel for the rePower transaction as 'Attended POS' (P) or 'Web' (W).  Details- Alpha, 1, Constant P or W
  * ICA **required** `string`: ICA of acquiring institution. Details- Numeric, 4-6
  * ICCEMVData `string`: Integrated Circuit Card (ICC) System related data. It must be present for EMV(Including paypass/MDES EMV) transactions. Details- String, 255. Please refer section 'ICCEMVData' for more details.
  * LocalDate **required** `string`: This is the local date for the location where the request is originating. Details- Numeric, 4, MMDD
  * LocalTime **required** `string`:  This is the local time for the location where the request is originating. The format is military or twenty-four hour clock time. Details- Numeric, HHMMSS
  * MerchantType **required** `string`: Merchant's type of business or Service will be represented as a member financial institution initiated rePower transaction (6532), or merchant initiated rePower transaction (6533). Details- Numeric, 4, constant 6532 or 6533
  * POSCardDataTerminalInputCapabilityIndicator `string`: Point of Service (POS) card data terminal input capability indicator. It must be present for EMV,MDES or PayPass transactions (where POS Entry Mode = "05x" or "07x" or "91x"). Details- Conditional, numeric, 1, The Possible values for POS card data terminal input capability indicator is 3 or 4.
  * PaymentInitiationChannel `string`: Payment Initiation Channel is the device type used to identify mobile-initiated (m-commerce) or other non-card device initiated transactions. It's an option field for paypass transactions. Details-  Numeric, 2 digits. The possible values for Payment Initiation Channel is detailed out in section 'PaymentInitiationChannel'
  * PaymentPosEntryMode `string`: PaymentPos Entry Mode to represent the POS Terminal PAN Entry Mode & Terminal PIN Entry Mode. This is required for EMV transactions and Paypass/MDES magstripe transactions. The first two digits indicate PAN entry mode and the last digit indicate PIN entry mode. Details- Numeric, 3. For PAN/PIN Entry mode details refer section 'PaymentPosEntryMode'
  * ProcessorId **required** `string`: Processor Id. Details- Numeric, 10
  * ReceiverTrack2Data `string`: Contains 8 sub fields to enhance the repower API to support EMV scripting data fields.It must be present for EMV, MDES or PayPass transactions(where POS Entry Mode is other than 010 or 011 or 012). Details- Conditional, String, Max 37 characters in Length. Refer section 'ReceiverTrack2Data'
  * RoutingAndTransitNumber **required** `string`: Routing and Transit number. Details- Numeric, 9
  * TransactionAmount [Transactionamount_3](#transactionamount_3)
  * TransactionFee [Transactionfee_4](#transactionfee_4)
  * TransactionReference **required** `string`: Repower Transaction Reference Number. Provided by the Client submitting the rePower transfer request. Must be "unique" across all rePower transfer requests. Details- Numeric, length 19

### Repowerrequest_1_wrapper
* Repowerrequest_1_wrapper `object`: Contains the details of the repower request message.
  * RepowerRequest [Repowerrequest_1](#repowerrequest_1)

### Repowerreversal_11
* Repowerreversal_11 `object`: Response details
  * OriginalRequestId `string`: Unique identifier assigned to the original rePower transaction request. Details- Numeric value, 1-19
  * RequestId `string`: This is the unique identifier for API Web service request. Details- Numeric value, variable length between 1 and 19 digits, without zero padding
  * TransactionHistory [Transactionhistory_12](#transactionhistory_12)
  * TransactionReference `string`: This is the Request ID for the original rePower transaction provided by the merchant or acquiring institution. Details- Alphanumeric value, 19

### Repowerreversal_11_wrapper
* Repowerreversal_11_wrapper `object`: Response details
  * RepowerReversal [Repowerreversal_11](#repowerreversal_11)

### Repowerreversalrequest_10
* Repowerreversalrequest_10 `object`: Contains the details of the repower reversal request message.
  * ICA **required** `string`: ICA of acquiring institution. Details- Numeric, 4-6
  * ReversalReason **required** `string`: Brief description of reason for reversal. Details- String, 1-50
  * TransactionReference **required** `string`: Unique reference number provided by the client in the "original" rePower transfer to be reversed. Details- Alphanumeric, 19

### Repowerreversalrequest_10_wrapper
* Repowerreversalrequest_10_wrapper `object`: Contains the details of the repower reversal request message.
  * RepowerReversalRequest [Repowerreversalrequest_10](#repowerreversalrequest_10)

### Response_14
* Response_14 `object`: Transaction response
  * Code `string`: Code that specifies the dispensation of the financial transaction request. Details- Alpha numeric, 2
  * Description `string`: This is the Description of response. Details- Alpha Numeric, Special, 80

### Response_8
* Response_8 `object`: Transaction response
  * Code `string`: Code that specifies the dispensation of the financial transaction request. Details- Alpha numeric, 2
  * Description `string`: This is the Description of response. Details- Alpha Numeric, Special, 80

### Transaction_13
* Transaction_13 `object`: Information for one transaction
  * NetworkReferenceNumber `string`: Network Reference Number that can be used for transaction inquiry. Details- Numeric, 9
  * Response [Response_14](#response_14)
  * SettlementDate `string`: Date Funds will be transferred between the acquirer and issuer by Single Message System, in MMDD format
  * SubmitDateTime `string`: This is the time and date of the transaction submission, in the following format: <date>T<time>Z, where date> is YYYY-MM-DD, <time> is HH:MM:SS
  * SystemTraceAuditNumber `string`: Identifier assigned to each transaction by the rePower service. This identifier is unique for any single UTC date. Details- Numeric value, 6
  * Type `string`: Type of transaction. Details- Alpha

### Transaction_7
* Transaction_7 `object`: Information for one transaction
  * NetworkReferenceNumber `string`: Network Reference Number that can be used for transaction inquiry. Details- Numeric, 9
  * Response [Response_8](#response_8)
  * SettlementDate `string`: Date Funds will be transferred between the acquirer and issuer by Single Message System, in MMDD format
  * SubmitDateTime `string`: This is the time and date of the transaction submission, in the following format: <date>T<time>Z, where date> is YYYY-MM-DD, <time> is HH:MM:SS
  * SystemTraceAuditNumber `string`: Identifier assigned to each transaction by the rePower service. This identifier is unique for any single UTC date. Details- Numeric value, 6
  * Type `string`: Type of transaction. Details- Alpha

### Transactionamount_3
* Transactionamount_3 `object`: Transaction amount value and currency
  * Currency **required** `string`: Global currency code used to represent the type of currency for the "Value" representing funds to be topped up. Details- numeric, 3, valid ISO 4217 numeric currency codes (leading zeros may be required.)
  * Value **required** `string`: The amount to be loaded onto the account. Implied decimal point based on currency exponent. Details- Numeric, 2-12

### Transactionfee_4
* Transactionfee_4 `object`: Transaction fee amount and currency
  * Currency `string`: Global currency code used to represent the type of currency for the "Value" representing the fees.It should match the transaction amount currency. Details- Numeric, 3, valid ISO 4217 numeric currency codes (leading zeros may be required.)
  * Value `string`: Fee charged by the acquirer for transaction activity in the currency of the Transaction amount value. Details- numeric, 1-8

### Transactionhistory_12
* Transactionhistory_12 `object`: List of transactions performed to complete request 
  * Transaction `array`: Information for one transaction
    * items [Transaction_13](#transaction_13)

### Transactionhistory_6
* Transactionhistory_6 `object`: List of transactions performed to complete request 
  * Transaction `array`: Information for one transaction
    * items [Transaction_7](#transaction_7)


