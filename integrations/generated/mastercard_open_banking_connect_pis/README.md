# @datafire/mastercard_open_banking_connect_pis

Client library for Open Banking - Payments initiation service

## Installation and Usage
```bash
npm install --save @datafire/mastercard_open_banking_connect_pis
```
```js
let mastercard_open_banking_connect_pis = require('@datafire/mastercard_open_banking_connect_pis').create();

.then(data => {
  console.log(data);
});
```

## Description

Open Banking - Payments initiation service

## Actions

### payments.aspsps.post
Get the list of all active ASPSPs supported by the Open Banking Connect platform at this time with possibility to filter by id, name or country. This list is updated regularly as new ASPSPs are connected.


```js
mastercard_open_banking_connect_pis.payments.aspsps.post({
  "body": {
    "requestInfo": {
      "xRequestId": ""
    }
  }
}, context)
```

#### Input
* input `object`
  * body **required** [postAspspsParamsBody](#postaspspsparamsbody)

#### Output
* output [postAspspsOKBody](#postaspspsokbody)

### payments.consents.raw.post
Extracts the original raw consent given by the aspsp


```js
mastercard_open_banking_connect_pis.payments.consents.raw.post({
  "body": {
    "requestInfo": null
  }
}, context)
```

#### Input
* input `object`
  * body **required** [postPaymentsConsentsRawParamsBody](#postpaymentsconsentsrawparamsbody)

#### Output
* output [postPaymentsConsentsRawOKBody](#postpaymentsconsentsrawokbody)

### payments.cross_border_credit_transfers.post
Redeem the payment


```js
mastercard_open_banking_connect_pis.payments.cross_border_credit_transfers.post({
  "body": {
    "requestInfo": {
      "aspspId": "",
      "authorization": "",
      "xRequestId": ""
    }
  }
}, context)
```

#### Input
* input `object`
  * body **required** [postPaymentsCrossBorderCreditTransfersParamsBody](#postpaymentscrossbordercredittransfersparamsbody)

#### Output
* output [postPaymentsCrossBorderCreditTransfersOKBody](#postpaymentscrossbordercredittransfersokbody)

### payments.cross_border_credit_transfers.consents.post
Request consent initiation via redirect


```js
mastercard_open_banking_connect_pis.payments.cross_border_credit_transfers.consents.post({
  "body": {
    "payments": {
      "creditorAccount": {
        "identification": "",
        "schemeName": ""
      },
      "creditorAgent": {
        "identification": "",
        "schemeName": ""
      },
      "creditorName": "",
      "debtorAccount": {
        "identification": "",
        "schemeName": ""
      },
      "endToEndIdentification": "",
      "instructedAmount": {
        "amount": 0,
        "currency": ""
      },
      "instructionPriority": "",
      "localInstrument": ""
    },
    "requestInfo": {
      "aspspId": "",
      "tppRedirectURI": "",
      "xRequestId": ""
    }
  }
}, context)
```

#### Input
* input `object`
  * body **required** [postPaymentsCrossBorderCreditTransfersConsentsParamsBody](#postpaymentscrossbordercredittransfersconsentsparamsbody)

#### Output
* output [postPaymentsCrossBorderCreditTransfersConsentsOKBody](#postpaymentscrossbordercredittransfersconsentsokbody)

### payments.cross_border_credit_transfers.payment_status.post
Get payment status


```js
mastercard_open_banking_connect_pis.payments.cross_border_credit_transfers.payment_status.post({
  "body": {
    "paymentId": "",
    "requestInfo": {
      "aspspId": "",
      "consentId": "",
      "xRequestId": ""
    }
  }
}, context)
```

#### Input
* input `object`
  * body **required** [postPaymentsCrossBorderCreditTransfersPaymentStatusParamsBody](#postpaymentscrossbordercredittransferspaymentstatusparamsbody)

#### Output
* output [postPaymentsCrossBorderCreditTransfersPaymentStatusOKBody](#postpaymentscrossbordercredittransferspaymentstatusokbody)

### payments.domestic_credit_transfers.post
Redeem the payment which was previously consented by the PSU.


```js
mastercard_open_banking_connect_pis.payments.domestic_credit_transfers.post({
  "body": {
    "requestInfo": {
      "aspspId": "",
      "authorization": "",
      "xRequestId": ""
    }
  }
}, context)
```

#### Input
* input `object`
  * body **required** [postPaymentsDomesticCreditTransfersParamsBody](#postpaymentsdomesticcredittransfersparamsbody)

#### Output
* output [postPaymentsDomesticCreditTransfersOKBody](#postpaymentsdomesticcredittransfersokbody)

### payments.domestic_credit_transfers.consents.post
Request Payment Initiation Consent for a domestic credit transfer on behalf of the PSU.


```js
mastercard_open_banking_connect_pis.payments.domestic_credit_transfers.consents.post({
  "body": {
    "payments": {
      "creditorAccount": {
        "identification": ""
      },
      "creditorName": "",
      "endToEndIdentification": "",
      "instructedAmount": {
        "amount": 0,
        "currency": ""
      },
      "localInstrument": ""
    },
    "requestInfo": {
      "aspspId": "",
      "tppRedirectURI": "",
      "xRequestId": ""
    }
  }
}, context)
```

#### Input
* input `object`
  * body **required** [postPaymentsDomesticCreditTransfersConsentsParamsBody](#postpaymentsdomesticcredittransfersconsentsparamsbody)

#### Output
* output [postPaymentsDomesticCreditTransfersConsentsOKBody](#postpaymentsdomesticcredittransfersconsentsokbody)

### payments.domestic_credit_transfers.payment_status.post
Get the status for an existing domestic credit transfer payment.


```js
mastercard_open_banking_connect_pis.payments.domestic_credit_transfers.payment_status.post({
  "body": {
    "paymentId": "",
    "requestInfo": {
      "aspspId": "",
      "consentId": "",
      "xRequestId": ""
    }
  }
}, context)
```

#### Input
* input `object`
  * body **required** [postPaymentsDomesticCreditTransfersPaymentStatusParamsBody](#postpaymentsdomesticcredittransferspaymentstatusparamsbody)

#### Output
* output [postPaymentsDomesticCreditTransfersPaymentStatusOKBody](#postpaymentsdomesticcredittransferspaymentstatusokbody)

### payments.health.get
Returns the status of each connectivity provider


```js
mastercard_open_banking_connect_pis.payments.health.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [ApiHealth](#apihealth)

### payments.sepa_credit_transfers.post
Redeem a SEPA credit transfer previously consented by the PSU.


```js
mastercard_open_banking_connect_pis.payments.sepa_credit_transfers.post({
  "body": {
    "requestInfo": {
      "aspspId": "",
      "authorization": "",
      "xRequestId": ""
    }
  }
}, context)
```

#### Input
* input `object`
  * body **required** [postPaymentsSepaCreditTransfersParamsBody](#postpaymentssepacredittransfersparamsbody)

#### Output
* output [postPaymentsSepaCreditTransfersOKBody](#postpaymentssepacredittransfersokbody)

### payments.sepa_credit_transfers.consents.post
Request a SEPA credit transfer consent on behalf of the PSU via a URL redirect to the ASPSP.


```js
mastercard_open_banking_connect_pis.payments.sepa_credit_transfers.consents.post({
  "body": {
    "payments": {
      "creditorAccount": {
        "iban": ""
      },
      "creditorAddress": {
        "country": ""
      },
      "creditorAgent": null,
      "creditorName": "",
      "debtorName": "",
      "endToEndIdentification": "",
      "instructedAmount": {
        "amount": 0,
        "currency": ""
      },
      "instructionPriority": "",
      "localInstrument": ""
    },
    "requestInfo": {
      "aspspId": "",
      "tppRedirectURI": "",
      "xRequestId": ""
    }
  }
}, context)
```

#### Input
* input `object`
  * body **required** [postPaymentsSepaCreditTransfersConsentsParamsBody](#postpaymentssepacredittransfersconsentsparamsbody)

#### Output
* output [postPaymentsSepaCreditTransfersConsentsOKBody](#postpaymentssepacredittransfersconsentsokbody)

### payments.sepa_credit_transfers.payment_status.post
Get the status of an existing SEPA credit transfer


```js
mastercard_open_banking_connect_pis.payments.sepa_credit_transfers.payment_status.post({
  "body": {
    "paymentId": "",
    "requestInfo": {
      "aspspId": "",
      "consentId": "",
      "xRequestId": ""
    }
  }
}, context)
```

#### Input
* input `object`
  * body **required** [postPaymentsSepaCreditTransfersPaymentStatusParamsBody](#postpaymentssepacredittransferspaymentstatusparamsbody)

#### Output
* output [postPaymentsSepaCreditTransfersPaymentStatusOKBody](#postpaymentssepacredittransferspaymentstatusokbody)



## Definitions

### AdditionalDataField
* AdditionalDataField `string` (values: capabilities, logo): Additional ASPSP field Types to be returned

### ApiHealth
* ApiHealth `object`: API Healt response object
  * connectors `array`: Connector availability
    * items [ApiHealth_connectors](#apihealth_connectors)
  * status **required** `string` (values: UP, DOWN, DEGRADED): Overall connect platform availability status
  * statusMessage `string`: Additional informational message

### ApiHealth_connectors
* ApiHealth_connectors `object`
  * name **required** `string`: Connector name
  * status **required** `string` (values: UP, DOWN, DEGRADED): Overall connect platform availability status
  * statusMessage `string`: Additional informational message

### CapabilitiesObject
* CapabilitiesObject `object`: Capabilities related to api profile assigned to ASPSP

### Error
* Error `object`
  * Errors **required** [Error_Errors](#error_errors)

### Error_Errors
* Error_Errors `object`
  * Error **required** `array`
    * items [Error_Errors_Error](#error_errors_error)

### Error_Errors_Error
* Error_Errors_Error `object`
  * Description `string`
  * Details `string`
  * ReasonCode `string`
  * Recoverable `boolean`
  * Source `string`

### LogoFileType
* LogoFileType `string` (values: png, jpg, svg): Type of the uploaded Logo file

### LogoObject
* LogoObject `object`: Logo metadata and image content
  * binaryContent `string`: This field is deprecated, use logoUrl instead
  * fileType [LogoFileType](#logofiletype)
  * logoUrl `string`: URL to a logo file

### Merchant
* Merchant `object`: Marchant Object
  * id **required** `string`: Merchant id
  * name **required** `string`: Merchant name

### PaymentConsent
* PaymentConsent `object`: Return the consent data exchanged for PSU authorization
  * consentId **required** `string`: Consent Id
  * consentRequestId **required** `string`: Consent Request Id, the same as received from /consent operations.
  * signatureStatus [SignatureValidationStatus](#signaturevalidationstatus)

### RequestPisDomesticSchedule
* RequestPisDomesticSchedule `object`
  * endDate `string`: End date for the schedule
  * frequency **required** `string` (values: DAIL, WEEK, MNTH, QUTR, SEMI, YEAR): Frequency type
  * startDate **required** `string`: Start date for the schedule

### RequestPisSepaSchedule
* RequestPisSepaSchedule `object`
  * endDate `string`: End date for the schedule
  * frequency **required** `string` (values: DAIL, WEEK, MNTH, QUTR, SEMI, YEAR): Frequency type
  * startDate **required** `string`: Start date for the schedule

### SepaPaymentConsent
* SepaPaymentConsent `object`: Return the consent data exchanged for PSU authorization
  * consentId **required** `string`: Consent Id
  * consentRequestId **required** `string`: Consent Request Id, the same as received from /consent operations.

### SignatureValidationStatus
* SignatureValidationStatus `string` (values: VALID, UNKNOWN, UNSIGNED, NONCOMPLIANT): For CMA9 ASPSPs: Status of validation of ASPSP's signature present in authorization code that TPP included in the request for credit transfer

### postAspspsOKBody
* postAspspsOKBody `object`
  * aspsps `array`
    * items [postAspspsOKBodyAspspsItems](#postaspspsokbodyaspspsitems)
  * originalRequestInfo **required** [postAspspsOKBodyOriginalRequestInfo](#postaspspsokbodyoriginalrequestinfo)

### postAspspsOKBodyAspspsItems
* postAspspsOKBodyAspspsItems `object`
  * aspspServices `array`: Provided services, AIS - account information, PIS - payment initiation
    * items `string` (values: AIS, PIS, COF)
  * capabilities [CapabilitiesObject](#capabilitiesobject)
  * country `string`: Country code
  * id `string`: Identification of the ASPSP
  * logo [LogoObject](#logoobject)
  * name `string`: Name of the ASPSP
  * profile `string`: ASPSP profile

### postAspspsOKBodyOriginalRequestInfo
* postAspspsOKBodyOriginalRequestInfo `object`
  * xRequestId **required** `string`: Original xRequestId given by the client on request

### postAspspsParamsBody
* postAspspsParamsBody `object`
  * country `string`: Filter by country code (ISO 3166 Alpha 2), exact match pattern
  * id `string`: Filter by internal id of ASPSP, exact match pattern
  * name `string`: Filter by name of ASPSP, contains pattern
  * requestInfo **required** [postAspspsParamsBodyRequestInfo](#postaspspsparamsbodyrequestinfo)
  * returnAdditionalData `array`: Specifies what additional fields for ASPSP object should be included in response
    * items [AdditionalDataField](#additionaldatafield)

### postAspspsParamsBodyRequestInfo
* postAspspsParamsBodyRequestInfo `object`
  * xRequestId **required** `string`: Request id given by the client

### postPaymentsConsentsRawOKBody
* postPaymentsConsentsRawOKBody `object`
  * originalRequestInfo **required** [postPaymentsConsentsRawOKBody_originalRequestInfo](#postpaymentsconsentsrawokbody_originalrequestinfo)
  * rawConsent `string`: Raw Consent

### postPaymentsConsentsRawOKBody_originalRequestInfo
* postPaymentsConsentsRawOKBody_originalRequestInfo `object`
  * xRequestId **required** `string`: Original xRequestId given by the client on request

### postPaymentsConsentsRawParamsBody
* postPaymentsConsentsRawParamsBody `object`
  * requestInfo **required** [postPaymentsConsentsRawParamsBody_requestInfo](#postpaymentsconsentsrawparamsbody_requestinfo)

### postPaymentsConsentsRawParamsBody_requestInfo
* postPaymentsConsentsRawParamsBody_requestInfo `object`
  * aspspId **required** `string`: Identification of ASPSP
  * consentId **required** `string`: Consent identification
  * merchant [Merchant](#merchant)
  * xRequestId **required** `string`: Request id given by the client

### postPaymentsCrossBorderCreditTransfersConsentsOKBody
* postPaymentsCrossBorderCreditTransfersConsentsOKBody `object`
  * _links [postPaymentsCrossBorderCreditTransfersConsentsOKBodyLinks](#postpaymentscrossbordercredittransfersconsentsokbodylinks)
  * additionalData [postPaymentsCrossBorderCreditTransfersConsentsOKBody_additionalData](#postpaymentscrossbordercredittransfersconsentsokbody_additionaldata)
  * aspspSCAApproach `string` (values: REDIRECT)
  * consentRequestId `string`
  * originalRequestInfo **required** [postPaymentsCrossBorderCreditTransfersConsentsOKBodyOriginalRequestInfo](#postpaymentscrossbordercredittransfersconsentsokbodyoriginalrequestinfo)

### postPaymentsCrossBorderCreditTransfersConsentsOKBodyLinks
* postPaymentsCrossBorderCreditTransfersConsentsOKBodyLinks `object`
  * scaRedirect `string`: Redirect URL for SCA

### postPaymentsCrossBorderCreditTransfersConsentsOKBodyOriginalRequestInfo
* postPaymentsCrossBorderCreditTransfersConsentsOKBodyOriginalRequestInfo `object`
  * xRequestId **required** `string`: Original xRequestId given by the client on request

### postPaymentsCrossBorderCreditTransfersConsentsOKBody_additionalData
* postPaymentsCrossBorderCreditTransfersConsentsOKBody_additionalData `object`: Returning additional data related to the consent
  * rawConsent `string`: Raw Consent, available only for specific standards and returned only if requestInfo.flag contained 'Return.Raw.Consent'

### postPaymentsCrossBorderCreditTransfersConsentsParamsBody
* postPaymentsCrossBorderCreditTransfersConsentsParamsBody `object`
  * payments **required** [postPaymentsCrossBorderCreditTransfersConsentsParamsBodyPayments](#postpaymentscrossbordercredittransfersconsentsparamsbodypayments)
  * requestInfo **required** [postPaymentsCrossBorderCreditTransfersConsentsParamsBodyRequestInfo](#postpaymentscrossbordercredittransfersconsentsparamsbodyrequestinfo)

### postPaymentsCrossBorderCreditTransfersConsentsParamsBodyPayments
* postPaymentsCrossBorderCreditTransfersConsentsParamsBodyPayments `object`
  * creditorAccount **required** [postPaymentsCrossBorderCreditTransfersConsentsParamsBodyPaymentsCreditorAccount](#postpaymentscrossbordercredittransfersconsentsparamsbodypaymentscreditoraccount)
  * creditorAddress [postPaymentsCrossBorderCreditTransfersConsentsParamsBodyPaymentsCreditorAddress](#postpaymentscrossbordercredittransfersconsentsparamsbodypaymentscreditoraddress)
  * creditorAgent **required** [postPaymentsCrossBorderCreditTransfersConsentsParamsBodyPaymentsCreditorAgent](#postpaymentscrossbordercredittransfersconsentsparamsbodypaymentscreditoragent)
  * creditorName **required** `string`: Bank name
  * debtorAccount **required** [postPaymentsCrossBorderCreditTransfersConsentsParamsBodyPaymentsDebtorAccount](#postpaymentscrossbordercredittransfersconsentsparamsbodypaymentsdebtoraccount)
  * debtorAddress [postPaymentsCrossBorderCreditTransfersConsentsParamsBodyPayments_debtorAddress](#postpaymentscrossbordercredittransfersconsentsparamsbodypayments_debtoraddress)
  * debtorName `string`: Debtor legal name
  * endToEndIdentification **required** `string`: Payment end to end identification
  * instructedAmount **required** [postPaymentsCrossBorderCreditTransfersConsentsParamsBodyPaymentsInstructedAmount](#postpaymentscrossbordercredittransfersconsentsparamsbodypaymentsinstructedamount)
  * instructionIdentification `string`: Unique identification as assigned by an instructing party for an instructed party to unambiguously identify the instruction. If API profile of ASPSP is CMA9, then field is mandatory.
  * instructionPriority **required** `string` (values: Normal, Urgent): Indicator of the urgency or order of importance
  * localInstrument **required** `string` (values: Swift): User community specific instrument.
  * remittanceInformationReference `string`: Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction. (future use)
  * remittanceInformationUnstructured `string`: Description of the payment
  * requestedExecutionDate `string`: Scheduled Payment Date
  * transferCharges `string` (values: SEN, SHA, BEN): Charge bearer

### postPaymentsCrossBorderCreditTransfersConsentsParamsBodyPaymentsCreditorAccount
* postPaymentsCrossBorderCreditTransfersConsentsParamsBodyPaymentsCreditorAccount `object`
  * identification **required** `string`: Account identification
  * schemeName **required** `string` (values: IBAN, SortCodeAccountNumber): Scheme for the account identification

### postPaymentsCrossBorderCreditTransfersConsentsParamsBodyPaymentsCreditorAddress
* postPaymentsCrossBorderCreditTransfersConsentsParamsBodyPaymentsCreditorAddress `object`
  * buildingNumber `string`
  * city `string`
  * country `string`: ISO 3166 ALPHA2 country code
  * countrySubDivision `string`
  * postalCode `string`
  * street `string`

### postPaymentsCrossBorderCreditTransfersConsentsParamsBodyPaymentsCreditorAgent
* postPaymentsCrossBorderCreditTransfersConsentsParamsBodyPaymentsCreditorAgent `object`
  * identification **required** `string`: Agent identification
  * schemeName **required** `string` (values: BIC): Scheme for the agent/bank identification

### postPaymentsCrossBorderCreditTransfersConsentsParamsBodyPaymentsDebtorAccount
* postPaymentsCrossBorderCreditTransfersConsentsParamsBodyPaymentsDebtorAccount `object`
  * identification **required** `string`: Account identification
  * schemeName **required** `string` (values: IBAN, SortCodeAccountNumber): Scheme for the account identification

### postPaymentsCrossBorderCreditTransfersConsentsParamsBodyPaymentsInstructedAmount
* postPaymentsCrossBorderCreditTransfersConsentsParamsBodyPaymentsInstructedAmount `object`
  * amount **required** `number`: amount value
  * currency **required** `string`: Currency code

### postPaymentsCrossBorderCreditTransfersConsentsParamsBodyPayments_debtorAddress
* postPaymentsCrossBorderCreditTransfersConsentsParamsBodyPayments_debtorAddress `object`
  * buildingNumber `string`
  * city `string`
  * country `string`: ISO 3166 ALPHA2 country code
  * countrySubDivision `string`
  * postalCode `string`
  * street `string`

### postPaymentsCrossBorderCreditTransfersConsentsParamsBodyRequestInfo
* postPaymentsCrossBorderCreditTransfersConsentsParamsBodyRequestInfo `object`
  * aspspId **required** `string`: Identification of ASPSP
  * flags `array`: Request information flags which can influence the behaviour or returned data
    * items `string` (values: Return.Raw.Consent)
  * merchant [Merchant](#merchant)
  * tppRedirectURI **required** `string`: Call back uri
  * xRequestId **required** `string`: Request id given by the client

### postPaymentsCrossBorderCreditTransfersOKBody
* postPaymentsCrossBorderCreditTransfersOKBody `object`
  * consent **required** [PaymentConsent](#paymentconsent)
  * originalRequestInfo **required** [postPaymentsCrossBorderCreditTransfersOKBodyOriginalRequestInfo](#postpaymentscrossbordercredittransfersokbodyoriginalrequestinfo)
  * transfer [postPaymentsCrossBorderCreditTransfersOKBodyTransfer](#postpaymentscrossbordercredittransfersokbodytransfer)

### postPaymentsCrossBorderCreditTransfersOKBodyOriginalRequestInfo
* postPaymentsCrossBorderCreditTransfersOKBodyOriginalRequestInfo `object`
  * xRequestId **required** `string`: Original xRequestId given by the client on request

### postPaymentsCrossBorderCreditTransfersOKBodyTransfer
* postPaymentsCrossBorderCreditTransfersOKBodyTransfer `object`
  * paymentId `string`: PI / Transfer identification
  * statusReasonCode `string`: Rejection reson code
  * transactionStatus `string` (values: ACCP, ACSC, ACSP, ACTC, ACWC, ACWP, PDNG, RCVD, RJCT): Status of the payment

### postPaymentsCrossBorderCreditTransfersParamsBody
* postPaymentsCrossBorderCreditTransfersParamsBody `object`
  * requestInfo **required** [postPaymentsCrossBorderCreditTransfersParamsBodyRequestInfo](#postpaymentscrossbordercredittransfersparamsbodyrequestinfo)

### postPaymentsCrossBorderCreditTransfersParamsBodyRequestInfo
* postPaymentsCrossBorderCreditTransfersParamsBodyRequestInfo `object`
  * aspspId **required** `string`: Identification of ASPSP
  * authorization **required** `string`: The authorization query / data received after PSU has authorized the consent
  * merchant [Merchant](#merchant)
  * xRequestId **required** `string`: Request id given by the client

### postPaymentsCrossBorderCreditTransfersPaymentStatusOKBody
* postPaymentsCrossBorderCreditTransfersPaymentStatusOKBody `object`
  * originalRequestInfo **required** [postPaymentsCrossBorderCreditTransfersPaymentStatusOKBodyOriginalRequestInfo](#postpaymentscrossbordercredittransferspaymentstatusokbodyoriginalrequestinfo)
  * payments [postPaymentsCrossBorderCreditTransfersPaymentStatusOKBodyPayments](#postpaymentscrossbordercredittransferspaymentstatusokbodypayments)

### postPaymentsCrossBorderCreditTransfersPaymentStatusOKBodyOriginalRequestInfo
* postPaymentsCrossBorderCreditTransfersPaymentStatusOKBodyOriginalRequestInfo `object`
  * xRequestId **required** `string`: Original xRequestId given by the client on request

### postPaymentsCrossBorderCreditTransfersPaymentStatusOKBodyPayments
* postPaymentsCrossBorderCreditTransfersPaymentStatusOKBodyPayments `object`
  * statusReasonCode `string`: Rejection reson code
  * transactionStatus **required** `string` (values: ACCP, ACSC, ACSP, ACTC, ACWC, ACWP, PDNG, RCVD, RJCT): Payment transaction status

### postPaymentsCrossBorderCreditTransfersPaymentStatusParamsBody
* postPaymentsCrossBorderCreditTransfersPaymentStatusParamsBody `object`
  * paymentId **required** `string`: Payment identification
  * requestInfo **required** [postPaymentsCrossBorderCreditTransfersPaymentStatusParamsBodyRequestInfo](#postpaymentscrossbordercredittransferspaymentstatusparamsbodyrequestinfo)

### postPaymentsCrossBorderCreditTransfersPaymentStatusParamsBodyRequestInfo
* postPaymentsCrossBorderCreditTransfersPaymentStatusParamsBodyRequestInfo `object`
  * aspspId **required** `string`: Identification of ASPSP
  * consentId **required** `string`: Consent identification
  * merchant [Merchant](#merchant)
  * xRequestId **required** `string`: Request id given by the client

### postPaymentsDomesticCreditTransfersConsentsOKBody
* postPaymentsDomesticCreditTransfersConsentsOKBody `object`
  * _links [postPaymentsDomesticCreditTransfersConsentsOKBodyLinks](#postpaymentsdomesticcredittransfersconsentsokbodylinks)
  * additionalData [postPaymentsCrossBorderCreditTransfersConsentsOKBody_additionalData](#postpaymentscrossbordercredittransfersconsentsokbody_additionaldata)
  * aspspSCAApproach `string` (values: REDIRECT)
  * consentRequestId `string`
  * originalRequestInfo **required** [postPaymentsDomesticCreditTransfersConsentsOKBodyOriginalRequestInfo](#postpaymentsdomesticcredittransfersconsentsokbodyoriginalrequestinfo)

### postPaymentsDomesticCreditTransfersConsentsOKBodyLinks
* postPaymentsDomesticCreditTransfersConsentsOKBodyLinks `object`
  * scaRedirect `string`: Redirect URL for SCA

### postPaymentsDomesticCreditTransfersConsentsOKBodyOriginalRequestInfo
* postPaymentsDomesticCreditTransfersConsentsOKBodyOriginalRequestInfo `object`
  * xRequestId **required** `string`: Original xRequestId given by the client on request

### postPaymentsDomesticCreditTransfersConsentsParamsBody
* postPaymentsDomesticCreditTransfersConsentsParamsBody `object`
  * payments **required** [postPaymentsDomesticCreditTransfersConsentsParamsBodyPayments](#postpaymentsdomesticcredittransfersconsentsparamsbodypayments)
  * requestInfo **required** [postPaymentsDomesticCreditTransfersConsentsParamsBodyRequestInfo](#postpaymentsdomesticcredittransfersconsentsparamsbodyrequestinfo)

### postPaymentsDomesticCreditTransfersConsentsParamsBodyPayments
* postPaymentsDomesticCreditTransfersConsentsParamsBodyPayments `object`
  * creditorAccount **required** [postPaymentsDomesticCreditTransfersConsentsParamsBodyPaymentsCreditorAccount](#postpaymentsdomesticcredittransfersconsentsparamsbodypaymentscreditoraccount)
  * creditorAddress [postPaymentsDomesticCreditTransfersConsentsParamsBodyPaymentsCreditorAddress](#postpaymentsdomesticcredittransfersconsentsparamsbodypaymentscreditoraddress)
  * creditorAgent [postPaymentsDomesticCreditTransfersConsentsParamsBodyPaymentsCreditorAgent](#postpaymentsdomesticcredittransfersconsentsparamsbodypaymentscreditoragent)
  * creditorName **required** `string`: Bank name
  * debtorAccount [postPaymentsDomesticCreditTransfersConsentsParamsBodyPayments_debtorAccount](#postpaymentsdomesticcredittransfersconsentsparamsbodypayments_debtoraccount)
  * debtorAgent [postPaymentsDomesticCreditTransfersConsentsParamsBodyPayments_debtorAgent](#postpaymentsdomesticcredittransfersconsentsparamsbodypayments_debtoragent)
  * endToEndIdentification **required** `string`: Payment end to end identification
  * instructedAmount **required** [postPaymentsDomesticCreditTransfersConsentsParamsBodyPaymentsInstructedAmount](#postpaymentsdomesticcredittransfersconsentsparamsbodypaymentsinstructedamount)
  * instructionIdentification `string`: Unique identification as assigned by an instructing party for an instructed party to unambiguously identify the instruction. If API profile of ASPSP is CMA9, then field is mandatory.
  * instructionPriority `string` (values: Normal, Urgent): Indicator of the urgency or order of importance
  * localInstrument **required** `string` (values: UK.FasterPayments, PL.Elixir): User community specific instrument.
  * remittanceInformationReference `string`: Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction. (future use)
  * remittanceInformationUnstructured `string`: Description of the payment
  * requestedExecutionDate `string`: Scheduled Payment Date
  * schedule [RequestPisDomesticSchedule](#requestpisdomesticschedule)

### postPaymentsDomesticCreditTransfersConsentsParamsBodyPaymentsCreditorAccount
* postPaymentsDomesticCreditTransfersConsentsParamsBodyPaymentsCreditorAccount `object`
  * identification **required** `string`: Account number
  * schemeName `string` (values: UK.AccountNumber, PL.AccountNumber): Account scheme name

### postPaymentsDomesticCreditTransfersConsentsParamsBodyPaymentsCreditorAddress
* postPaymentsDomesticCreditTransfersConsentsParamsBodyPaymentsCreditorAddress `object`
  * buildingNumber **required** `string`
  * city **required** `string`
  * country **required** `string`: ISO 3166 ALPHA2 country code
  * countrySubDivision `string`
  * postalCode **required** `string`
  * street **required** `string`

### postPaymentsDomesticCreditTransfersConsentsParamsBodyPaymentsCreditorAgent
* postPaymentsDomesticCreditTransfersConsentsParamsBodyPaymentsCreditorAgent `object`
  * clearingSystemIdentification **required** `string` (values: UK.SortCode): System identification:
  * memberIdentification **required** `string`: Sort code

### postPaymentsDomesticCreditTransfersConsentsParamsBodyPaymentsInstructedAmount
* postPaymentsDomesticCreditTransfersConsentsParamsBodyPaymentsInstructedAmount `object`
  * amount **required** `number`: amount value
  * currency **required** `string` (values: GBP, PLN): Currency code

### postPaymentsDomesticCreditTransfersConsentsParamsBodyPayments_debtorAccount
* postPaymentsDomesticCreditTransfersConsentsParamsBodyPayments_debtorAccount `object`
  * identification **required** `string`: Debtor account identification, If localInstrument = 'UK.FasterPayments' and debtorAgent was specified then this needs to be a UK Account number (8 digits)

### postPaymentsDomesticCreditTransfersConsentsParamsBodyPayments_debtorAgent
* postPaymentsDomesticCreditTransfersConsentsParamsBodyPayments_debtorAgent `object`
  * identification **required** `string`: Debtor agent identification, If localInstrument = 'UK.FasterPayments' and debtorAccount was specified then this needs to be a UK Sort code (6 digits)

### postPaymentsDomesticCreditTransfersConsentsParamsBodyRequestInfo
* postPaymentsDomesticCreditTransfersConsentsParamsBodyRequestInfo `object`
  * aspspId **required** `string`: Identification of ASPSP
  * flags `array`: Request information flags which can influence the behaviour or returned data
    * items `string` (values: Return.Raw.Consent)
  * merchant [Merchant](#merchant)
  * tppRedirectURI **required** `string`: Call back uri
  * xRequestId **required** `string`: Request id given by the client

### postPaymentsDomesticCreditTransfersOKBody
* postPaymentsDomesticCreditTransfersOKBody `object`
  * consent **required** [PaymentConsent](#paymentconsent)
  * originalRequestInfo **required** [postPaymentsDomesticCreditTransfersOKBodyOriginalRequestInfo](#postpaymentsdomesticcredittransfersokbodyoriginalrequestinfo)
  * transfer **required** [postPaymentsDomesticCreditTransfersOKBodyTransfer](#postpaymentsdomesticcredittransfersokbodytransfer)

### postPaymentsDomesticCreditTransfersOKBodyOriginalRequestInfo
* postPaymentsDomesticCreditTransfersOKBodyOriginalRequestInfo `object`
  * xRequestId **required** `string`: Original xRequestId given by the client on request

### postPaymentsDomesticCreditTransfersOKBodyTransfer
* postPaymentsDomesticCreditTransfersOKBodyTransfer `object`
  * paymentId **required** `string`: PI / Transfer identification
  * statusReasonCode `string`: Rejection reson code
  * transactionStatus **required** `string` (values: ACCP, ACSC, ACSP, ACTC, ACWC, ACWP, PDNG, RCVD, RJCT, CANC): Status of the payment

### postPaymentsDomesticCreditTransfersParamsBody
* postPaymentsDomesticCreditTransfersParamsBody `object`
  * requestInfo **required** [postPaymentsDomesticCreditTransfersParamsBodyRequestInfo](#postpaymentsdomesticcredittransfersparamsbodyrequestinfo)

### postPaymentsDomesticCreditTransfersParamsBodyRequestInfo
* postPaymentsDomesticCreditTransfersParamsBodyRequestInfo `object`
  * aspspId **required** `string`: Identification of ASPSP
  * authorization **required** `string`: The authorization query / data received after PSU has authorized the consent
  * merchant [Merchant](#merchant)
  * xRequestId **required** `string`: Request id given by the client

### postPaymentsDomesticCreditTransfersPaymentStatusOKBody
* postPaymentsDomesticCreditTransfersPaymentStatusOKBody `object`
  * originalRequestInfo **required** [postPaymentsDomesticCreditTransfersPaymentStatusOKBodyOriginalRequestInfo](#postpaymentsdomesticcredittransferspaymentstatusokbodyoriginalrequestinfo)
  * payments [postPaymentsDomesticCreditTransfersPaymentStatusOKBodyPayments](#postpaymentsdomesticcredittransferspaymentstatusokbodypayments)

### postPaymentsDomesticCreditTransfersPaymentStatusOKBodyOriginalRequestInfo
* postPaymentsDomesticCreditTransfersPaymentStatusOKBodyOriginalRequestInfo `object`
  * xRequestId **required** `string`: Original xRequestId given by the client on request

### postPaymentsDomesticCreditTransfersPaymentStatusOKBodyPayments
* postPaymentsDomesticCreditTransfersPaymentStatusOKBodyPayments `object`
  * statusReasonCode `string`: Rejection reson code
  * transactionStatus **required** `string` (values: ACCP, ACSC, ACSP, ACTC, ACWC, ACWP, PDNG, RCVD, RJCT, CANC): Payment transaction status

### postPaymentsDomesticCreditTransfersPaymentStatusParamsBody
* postPaymentsDomesticCreditTransfersPaymentStatusParamsBody `object`
  * paymentId **required** `string`: Payment identification
  * requestInfo **required** [postPaymentsDomesticCreditTransfersPaymentStatusParamsBodyRequestInfo](#postpaymentsdomesticcredittransferspaymentstatusparamsbodyrequestinfo)

### postPaymentsDomesticCreditTransfersPaymentStatusParamsBodyRequestInfo
* postPaymentsDomesticCreditTransfersPaymentStatusParamsBodyRequestInfo `object`
  * aspspId **required** `string`: Identification of ASPSP
  * consentId **required** `string`: Consent identification
  * merchant [Merchant](#merchant)
  * xRequestId **required** `string`: Request id given by the client

### postPaymentsSepaCreditTransfersConsentsOKBody
* postPaymentsSepaCreditTransfersConsentsOKBody `object`
  * _links [postPaymentsSepaCreditTransfersConsentsOKBodyLinks](#postpaymentssepacredittransfersconsentsokbodylinks)
  * additionalData [postPaymentsCrossBorderCreditTransfersConsentsOKBody_additionalData](#postpaymentscrossbordercredittransfersconsentsokbody_additionaldata)
  * aspspSCAApproach `string` (values: REDIRECT)
  * consentRequestId `string`
  * originalRequestInfo **required** [postPaymentsSepaCreditTransfersConsentsOKBodyOriginalRequestInfo](#postpaymentssepacredittransfersconsentsokbodyoriginalrequestinfo)

### postPaymentsSepaCreditTransfersConsentsOKBodyLinks
* postPaymentsSepaCreditTransfersConsentsOKBodyLinks `object`
  * scaRedirect `string`: Redirect URL for SCA

### postPaymentsSepaCreditTransfersConsentsOKBodyOriginalRequestInfo
* postPaymentsSepaCreditTransfersConsentsOKBodyOriginalRequestInfo `object`
  * xRequestId **required** `string`: Original xRequestId given by the client on request

### postPaymentsSepaCreditTransfersConsentsParamsBody
* postPaymentsSepaCreditTransfersConsentsParamsBody `object`
  * payments **required** [postPaymentsSepaCreditTransfersConsentsParamsBodyPayments](#postpaymentssepacredittransfersconsentsparamsbodypayments)
  * requestInfo **required** [postPaymentsSepaCreditTransfersConsentsParamsBodyRequestInfo](#postpaymentssepacredittransfersconsentsparamsbodyrequestinfo)

### postPaymentsSepaCreditTransfersConsentsParamsBodyPayments
* postPaymentsSepaCreditTransfersConsentsParamsBodyPayments `object`
  * categoryPurpose `string` (values: CASH, CORT, DVPM, INTC, TREA): Purpose of the payment
  * creditorAccount **required** [postPaymentsSepaCreditTransfersConsentsParamsBodyPaymentsCreditorAccount](#postpaymentssepacredittransfersconsentsparamsbodypaymentscreditoraccount)
  * creditorAddress **required** [postPaymentsSepaCreditTransfersConsentsParamsBodyPaymentsCreditorAddress](#postpaymentssepacredittransfersconsentsparamsbodypaymentscreditoraddress)
  * creditorAgent **required** [postPaymentsSepaCreditTransfersConsentsParamsBodyPayments_creditorAgent](#postpaymentssepacredittransfersconsentsparamsbodypayments_creditoragent)
  * creditorName **required** `string`: Bank name
  * debtorAccount [postPaymentsSepaCreditTransfersConsentsParamsBodyPaymentsDebtorAccount](#postpaymentssepacredittransfersconsentsparamsbodypaymentsdebtoraccount)
  * debtorAddress [postPaymentsSepaCreditTransfersConsentsParamsBodyPaymentsDebtorAddress](#postpaymentssepacredittransfersconsentsparamsbodypaymentsdebtoraddress)
  * debtorAgent [postPaymentsSepaCreditTransfersConsentsParamsBodyPayments_debtorAgent](#postpaymentssepacredittransfersconsentsparamsbodypayments_debtoragent)
  * debtorName **required** `string`: Debtor legal name
  * endToEndIdentification **required** `string`: Payment end to end identification
  * instructedAmount **required** [postPaymentsSepaCreditTransfersConsentsParamsBodyPaymentsInstructedAmount](#postpaymentssepacredittransfersconsentsparamsbodypaymentsinstructedamount)
  * instructionPriority **required** `string` (values: Normal, Urgent): Indicator of the urgency or order of importance
  * localInstrument **required** `string` (values: SEPA): User community specific instrument.
  * remittanceInformationReference `string`: Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction. (future use)
  * remittanceInformationStructured `string`: Description of the payment
  * remittanceInformationUnstructured `string`: Description of the payment
  * requestedExecutionDate `string`: Scheduled Payment Date
  * schedule [RequestPisSepaSchedule](#requestpissepaschedule)

### postPaymentsSepaCreditTransfersConsentsParamsBodyPaymentsCreditorAccount
* postPaymentsSepaCreditTransfersConsentsParamsBodyPaymentsCreditorAccount `object`
  * iban **required** `string`: Account IBAN

### postPaymentsSepaCreditTransfersConsentsParamsBodyPaymentsCreditorAddress
* postPaymentsSepaCreditTransfersConsentsParamsBodyPaymentsCreditorAddress `object`
  * buildingNumber `string`
  * city `string`
  * country **required** `string`: ISO 3166 ALPHA2 country code
  * countrySubDivision `string`
  * postalCode `string`
  * street `string`

### postPaymentsSepaCreditTransfersConsentsParamsBodyPaymentsDebtorAccount
* postPaymentsSepaCreditTransfersConsentsParamsBodyPaymentsDebtorAccount `object`
  * iban **required** `string`: Account IBAN

### postPaymentsSepaCreditTransfersConsentsParamsBodyPaymentsDebtorAddress
* postPaymentsSepaCreditTransfersConsentsParamsBodyPaymentsDebtorAddress `object`
  * buildingNumber `string`
  * city `string`
  * country `string`: ISO 3166 ALPHA2 country code
  * countrySubDivision `string`
  * postalCode `string`
  * street `string`

### postPaymentsSepaCreditTransfersConsentsParamsBodyPaymentsInstructedAmount
* postPaymentsSepaCreditTransfersConsentsParamsBodyPaymentsInstructedAmount `object`
  * amount **required** `number`: amount value
  * currency **required** `string` (values: EUR): Currency code

### postPaymentsSepaCreditTransfersConsentsParamsBodyPayments_creditorAgent
* postPaymentsSepaCreditTransfersConsentsParamsBodyPayments_creditorAgent `object`
  * bicfi **required** `string`: Creditor FI

### postPaymentsSepaCreditTransfersConsentsParamsBodyPayments_debtorAgent
* postPaymentsSepaCreditTransfersConsentsParamsBodyPayments_debtorAgent `object`
  * bicfi **required** `string`: Debtor FI

### postPaymentsSepaCreditTransfersConsentsParamsBodyRequestInfo
* postPaymentsSepaCreditTransfersConsentsParamsBodyRequestInfo `object`
  * aspspId **required** `string`: Identification of ASPSP
  * flags `array`: Request information flags which can influence the behaviour or returned data
    * items `string` (values: Return.Raw.Consent)
  * merchant [Merchant](#merchant)
  * tppRedirectURI **required** `string`: Call back uri
  * xRequestId **required** `string`: Request id given by the client

### postPaymentsSepaCreditTransfersOKBody
* postPaymentsSepaCreditTransfersOKBody `object`
  * consent **required** [SepaPaymentConsent](#sepapaymentconsent)
  * originalRequestInfo **required** [postPaymentsSepaCreditTransfersOKBodyOriginalRequestInfo](#postpaymentssepacredittransfersokbodyoriginalrequestinfo)
  * transfer **required** [postPaymentsSepaCreditTransfersOKBodyTransfer](#postpaymentssepacredittransfersokbodytransfer)

### postPaymentsSepaCreditTransfersOKBodyOriginalRequestInfo
* postPaymentsSepaCreditTransfersOKBodyOriginalRequestInfo `object`
  * xRequestId **required** `string`: Original xRequestId given by the client on request

### postPaymentsSepaCreditTransfersOKBodyTransfer
* postPaymentsSepaCreditTransfersOKBodyTransfer `object`
  * paymentId **required** `string`: PI / Transfer identification
  * statusReasonCode `string`: Rejection reson code
  * transactionStatus **required** `string` (values: ACCP, ACSC, ACSP, ACTC, ACWC, ACWP, PDNG, RCVD, RJCT, CANC): Status of the payment

### postPaymentsSepaCreditTransfersParamsBody
* postPaymentsSepaCreditTransfersParamsBody `object`
  * requestInfo **required** [postPaymentsSepaCreditTransfersParamsBodyRequestInfo](#postpaymentssepacredittransfersparamsbodyrequestinfo)

### postPaymentsSepaCreditTransfersParamsBodyRequestInfo
* postPaymentsSepaCreditTransfersParamsBodyRequestInfo `object`
  * aspspId **required** `string`: Identification of ASPSP
  * authorization **required** `string`: The authorization query / data received after PSU has authorized the consent
  * merchant [Merchant](#merchant)
  * xRequestId **required** `string`: Request id given by the client

### postPaymentsSepaCreditTransfersPaymentStatusOKBody
* postPaymentsSepaCreditTransfersPaymentStatusOKBody `object`
  * originalRequestInfo **required** [postPaymentsSepaCreditTransfersPaymentStatusOKBodyOriginalRequestInfo](#postpaymentssepacredittransferspaymentstatusokbodyoriginalrequestinfo)
  * payments [postPaymentsSepaCreditTransfersPaymentStatusOKBodyPayments](#postpaymentssepacredittransferspaymentstatusokbodypayments)

### postPaymentsSepaCreditTransfersPaymentStatusOKBodyOriginalRequestInfo
* postPaymentsSepaCreditTransfersPaymentStatusOKBodyOriginalRequestInfo `object`
  * xRequestId **required** `string`: Original xRequestId given by the client on request

### postPaymentsSepaCreditTransfersPaymentStatusOKBodyPayments
* postPaymentsSepaCreditTransfersPaymentStatusOKBodyPayments `object`
  * statusReasonCode `string`: Rejection reson code
  * transactionStatus **required** `string` (values: ACCP, ACSC, ACSP, ACTC, ACWC, ACWP, PDNG, RCVD, RJCT, CANC): Payment transaction status

### postPaymentsSepaCreditTransfersPaymentStatusParamsBody
* postPaymentsSepaCreditTransfersPaymentStatusParamsBody `object`
  * paymentId **required** `string`: Payment identification
  * requestInfo **required** [postPaymentsSepaCreditTransfersPaymentStatusParamsBodyRequestInfo](#postpaymentssepacredittransferspaymentstatusparamsbodyrequestinfo)

### postPaymentsSepaCreditTransfersPaymentStatusParamsBodyRequestInfo
* postPaymentsSepaCreditTransfersPaymentStatusParamsBodyRequestInfo `object`
  * aspspId **required** `string`: Identification of ASPSP
  * consentId **required** `string`: Consent identification
  * merchant [Merchant](#merchant)
  * xRequestId **required** `string`: Request id given by the client


