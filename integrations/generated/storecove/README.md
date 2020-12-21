# @datafire/storecove

Client library for Storecove API

## Installation and Usage
```bash
npm install --save @datafire/storecove
```
```js
let storecove = require('@datafire/storecove').create({
  Bearer: ""
});

.then(data => {
  console.log(data);
});
```

## Description

Storecove API

## Actions

### create_invoice_submission
Submit an invoice for delivery.


```js
storecove.create_invoice_submission({
  "invoice_submission": {}
}, context)
```

#### Input
* input `object`
  * invoice_submission **required** [InvoiceSubmission](#invoicesubmission)

#### Output
* output [InvoiceSubmissionResult](#invoicesubmissionresult)

### preflight_invoice_recipient
Check whether Storecove can deliver an invoice for a list of ids.


```js
storecove.preflight_invoice_recipient({
  "invoice_recipient_preflight": {}
}, context)
```

#### Input
* input `object`
  * invoice_recipient_preflight **required** [InvoiceRecipientPreflight](#invoicerecipientpreflight)

#### Output
* output [PreflightInvoiceRecipientResult](#preflightinvoicerecipientresult)

### create_legal_entity
Create a new LegalEntity.


```js
storecove.create_legal_entity({
  "legal_entity": null
}, context)
```

#### Input
* input `object`
  * legal_entity **required** [LegalEntityCreate](#legalentitycreate)

#### Output
* output [LegalEntity](#legalentity)

### delete_legal_entity
Delete a specific LegalEntity.


```js
storecove.delete_legal_entity({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: legal_entity id

#### Output
*Output schema unknown*

### get_legal_entity
Get a specific LegalEntity.


```js
storecove.get_legal_entity({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: legal_entity id

#### Output
* output [LegalEntity](#legalentity)

### update_legal_entity
Update a specific LegalEntity.


```js
storecove.update_legal_entity({
  "id": 0,
  "legal_entity": null
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: legal_entity id
  * legal_entity **required** [LegalEntityUpdate](#legalentityupdate)

#### Output
* output [LegalEntity](#legalentity)

### create_administration
Create a new Administration. An Administration is an email destination for purchase invoices.


```js
storecove.create_administration({
  "legal_entity_id": 0,
  "administration": null
}, context)
```

#### Input
* input `object`
  * legal_entity_id **required** `integer`: The id of the LegalEntity for which to create the Administration
  * administration **required** [AdministrationCreate](#administrationcreate)

#### Output
* output [Administration](#administration)

### delete_administration
Delete an Administration


```js
storecove.delete_administration({
  "legal_entity_id": 0,
  "id": 0
}, context)
```

#### Input
* input `object`
  * legal_entity_id **required** `integer`: The id of the LegalEntity the Administration belongs to
  * id **required** `integer`: The id of the Administration

#### Output
*Output schema unknown*

### create_peppol_identifier
Create a new PeppolIdentifier.


```js
storecove.create_peppol_identifier({
  "legal_entity_id": 0,
  "peppol_identifier": null
}, context)
```

#### Input
* input `object`
  * legal_entity_id **required** `integer`: The id of the LegalEntity for which to create the PeppolIdentifier
  * peppol_identifier **required** [PeppolIdentifierCreate](#peppolidentifiercreate)

#### Output
* output [PeppolIdentifier](#peppolidentifier)

### delete_peppol_identifier
Delete a PeppolIdentifier.


```js
storecove.delete_peppol_identifier({
  "legal_entity_id": 0,
  "superscheme": "",
  "scheme": "",
  "identifier": ""
}, context)
```

#### Input
* input `object`
  * legal_entity_id **required** `integer`: The id of the LegalEntity this PeppolIdentifier belongs to
  * superscheme **required** `string`: The superscheme of the identifier. Should always be "iso6523-actorid-upis".
  * scheme **required** `string`: PEPPOL identifier scheme id, e.g. "DE:VAT". For a full list see <<peppol_schemes_list>>.
  * identifier **required** `string`: PEPPOL identifier

#### Output
*Output schema unknown*

### get_invoice_json
Get a specific PurchaseInvoice, in JSON format. Recommended way of getting a PurchaseInvoice, since it provides the data in a JSON object and the JSON format is the richest we have that supports all features a PurchaseInvoice can have.


```js
storecove.get_invoice_json({
  "guid": ""
}, context)
```

#### Input
* input `object`
  * guid **required** `string`: purchase invoice guid

#### Output
* output [PurchaseInvoiceUbl](#purchaseinvoiceubl)

### get_invoice_ubl
Get a specific PurchaseInvoice. Using /json as {packaging} is recommended (in which case you can just omit it), however, this endpoint allows getting the invoice in a differently serialized format such as UBL.


```js
storecove.get_invoice_ubl({
  "guid": "",
  "packaging": ""
}, context)
```

#### Input
* input `object`
  * guid **required** `string`: purchase invoice guid
  * packaging **required** `string` (values: json, ubl): How to package the purchase invoice. Use "json" or "ubl" 

#### Output
* output [PurchaseInvoiceUbl](#purchaseinvoiceubl)

### get_invoice_ubl_versioned
Get a specific PurchaseInvoice in a non-JSON serialized format with version.


```js
storecove.get_invoice_ubl_versioned({
  "guid": "",
  "packaging": "",
  "package_version": ""
}, context)
```

#### Input
* input `object`
  * guid **required** `string`: purchase invoice guid
  * packaging **required** `string` (values: ubl): How to package the purchase invoice. Use "ubl"
  * package_version **required** `string` (values: original, si11, si12, si20, aunz, sg): The version of the ubl package.

#### Output
* output [PurchaseInvoiceUbl](#purchaseinvoiceubl)



## Definitions

### AccountingCustomerParty
* Customer `object`: The customer receiving the invoice.
  * accountId `string`: The account id you assigned to the customer.
  * party **required** [Party](#party)

### AccountingSupplierParty
* Supplier `object`: The party sending the invoice. Most data for the AccountingSupplierParty is taken from the Storecove database, where your sender identity resides and has been validated. However, we provide a limited number of fields here that you can specify on an invoice-by-invoice basis.
  * party [SupplierParty](#supplierparty)

### AdditionalItemProperty
* Additional Item Property `object`: An additional property for the item
  * name **required** `string`: The name of the property.
  * value **required** `string`: The value of the property.

### Address
* Address `object`: The address
  * city `string`: The name of the city. Mandatory in most countries.
  * country **required** [Country](#country)
  * county `string`: An optional county name.
  * street1 `string`: The street name and number. Mandatory in most countries.
  * street2 `string`: The second street field. Use this if you used the first field for the building name.
  * zip `string`: The zipcode/postalzone. Mandatory unless the country does not have zip codes.

### Administration
* Administration `object`
  * email `string`: The email address to send the received document to
  * id `integer`: The Storecove assigned id for the Administration.
  * legal_entity_id `integer`: The LegalEntity the Administration belongs to.
  * package_version `string` (values: peppol_bis_v3): The version of the package.
  * packaging `string` (values: ubl): How to package the purchase invoice.
  * sender_email_identity_id `integer`: The id of the SenderEmailIdentity. If not provided, the Storecove default sender will be used

### AdministrationCreate
* AdministrationCreate `object`
  * email `string`: The email address to send the received document to
  * legal_entity_id `integer`: The LegalEntity the Administration belongs to.
  * package_version `string` (values: peppol_bis_v3): The version of the package.
  * packaging `string` (values: ubl): How to package the purchase invoice.
  * sender_email_identity_id `integer`: The id of the SenderEmailIdentity. If not provided, the Storecove default sender will be used

### AdministrationUpdate
* AdministrationUpdate `object`
  * email `string`: The email address to send the received document to
  * package_version `string` (values: peppol_bis_v3): The version of the package.
  * packaging `string` (values: ubl): How to package the purchase invoice.
  * sender_email_identity_id `integer`: The id of the SenderEmailIdentity. If not provided, the Storecove default sender will be used

### AllowanceCharge
* Allowance or Charge `object`
  * amountExcludingVat **required** `number`: The amount for the allowance or charge, excluding VAT
  * reason `string`: The reason for the allowance or charge, free text
  * reasonCode `string`: Do not use. Contact Storecove first if you want to use this field.
  * tax **required** [Tax](#tax)

### Attachment
* Invoice Attachment `object`: A document attachment to the invoice.
  * document **required** `string`: The base64 encoded version of the document attachment.
  * filename `string`: The name of the file attachment.
  * mimeType **required** `string` (values: application/pdf): The document attachment mime type. Currently only application/pdf is allowed.
  * primaryImage `boolean`: Whether or not this document is a visual representation of the invoice data.

### Contact
* Contact `object`: Contact details for the invoice
  * email `string`
  * firstName `string`
  * id `string`: Only supported for AccountingCustomerParty.
  * lastName `string`
  * phone `string`

### Country
* Country `string` (values: AD, AE, AF, AG, AI, AL, AM, AO, AQ, AR, AS, AT, AU, AW, AX, AZ, BA, BB, BD, BE, BF, BG, BH, BI, BJ, BL, BM, BN, BO, BQ, BR, BS, BT, BV, BW, BY, BZ, CA, CC, CD, CF, CG, CH, CI, CK, CL, CM, CN, CO, CR, CU, CV, CW, CX, CY, CZ, DE, DJ, DK, DM, DO, DZ, EC, EE, EG, EH, ER, ES, ET, FI, FJ, FK, FM, FO, FR, GA, GB, GD, GE, GF, GG, GH, GI, GL, GM, GN, GP, GQ, GR, GS, GT, GU, GW, GY, HK, HM, HN, HR, HT, HU, ID, IE, IL, IM, IN, IO, IQ, IR, IS, IT, JE, JM, JO, JP, KE, KG, KH, KI, KM, KN, KP, KR, KW, KY, KZ, LA, LB, LC, LI, LK, LR, LS, LT, LU, LV, LY, MA, MC, MD, ME, MF, MG, MH, MK, ML, MM, MN, MO, MP, MQ, MR, MS, MT, MU, MV, MW, MX, MY, MZ, NA, NC, NE, NF, NG, NI, NL, NO, NP, NR, NU, NZ, OM, PA, PE, PF, PG, PH, PK, PL, PM, PN, PR, PS, PT, PW, PY, QA, RE, RO, RS, RU, RW, SA, SB, SC, SD, SE, SG, SH, SI, SJ, SK, SL, SM, SN, SO, SR, SS, ST, SV, SX, SY, SZ, TC, TD, TF, TG, TH, TJ, TK, TL, TM, TN, TO, TR, TT, TV, TW, TZ, UA, UG, UM, US, UY, UZ, VA, VC, VE, VG, VI, VN, VU, WF, WS, YE, YT, ZA, ZM, ZW): An ISO 3166-1 alpha-2 country code.

### CurrencyCode
* Currency `string` (values: AED, AFN, ALL, AMD, ANG, AOA, ARS, AUD, AWG, AZN, BAM, BBD, BDT, BGN, BHD, BIF, BMD, BND, BOB, BOV, BRL, BSD, BTN, BWP, BYN, BYR, BZD, CAD, CDF, CHE, CHF, CHW, CLF, CLP, CNY, COP, COU, CRC, CUC, CUP, CVE, CZK, DJF, DKK, DOP, DZD, EGP, ERN, ETB, EUR, FJD, FKP, GBP, GEL, GHS, GIP, GMD, GNF, GTQ, GYD, HKD, HNL, HRK, HTG, HUF, IDR, ILS, INR, IQD, IRR, ISK, JMD, JOD, JPY, KES, KGS, KHR, KMF, KPW, KRW, KWD, KYD, KZT, LAK, LBP, LKR, LRD, LSL, LYD, MAD, MDL, MGA, MKD, MMK, MNT, MOP, MRO, MUR, MVR, MWK, MXN, MXV, MYR, MZN, NAD, NGN, NIO, NOK, NPR, NZD, OMR, PAB, PEN, PGK, PHP, PKR, PLN, PYG, QAR, RON, RSD, RUB, RWF, SAR, SBD, SCR, SDG, SEK, SGD, SHP, SLL, SOS, SRD, SSP, STD, SYP, SZL, THB, TJS, TMT, TND, TOP, TRY, TTD, TWD, TZS, UAH, UGX, USD, USN, UYI, UYU, UZS, VEF, VND, VUV, WST, XAF, XAG, XAU, XBA, XBB, XBC, XBD, XCD, XDR, XFU, XOF, XPD, XPF, XPT, XSU, XTS, XUA, XXX, YER, ZAR, ZMW): The ISO 4217 currency code.

### Delivery
* Delivery `object`
  * actualDate `string`: The actual date of the delivery.
  * location `object`
    * address [Address](#address)
    * id `string`: The location identifier.
    * schemeAgencyId `string`: The schemeAgencyId of the location identifier (e.g. 'ZZZ')
    * schemeId `string`: The schemeId of the location identifier (e.g. 'EAN')
  * quantity `number`: The quantity of the delivery.

### ErrorModel
* ErrorModel `object`
  * details `string`
  * source `string`

### Invoice
* Invoice `object`: The invoice to send.  Provide either invoice, or invoiceData, but not both.
  * accountingCost `string`: The buyer's accounting cost centre for this invoice, expressed as text.
  * accountingCustomerParty **required** [AccountingCustomerParty](#accountingcustomerparty)
  * accountingSupplierParty [AccountingSupplierParty](#accountingsupplierparty)
  * allowanceCharges `array`: An array of allowance charges.
    * items [AllowanceCharge](#allowancecharge)
  * amountIncludingVat **required** `number`: amountIncludingVat is important because of rounding differences. In many invoices, the sum of the line item amounts excluding VAT and the VAT amounts is not equal to first summing the line items without VAT, and then applying VAT. The difference is automatically calculated and included in the electronic invoice, so the receiving accounting package can process the electronic invoice without problems.
  * billingReference `string`: A reference to a commercial invoice or corrective invoice of which the current invoice is a correction. This field is mandatory when sending invoiceType 384.
  * buyerReference `string`: A reference provided by the buyer used for internal routing of the document.
  * consumerTaxMode `boolean`: Whether or not to process the invoice in consumer tax mode. In this mode, the VAT identifier of the sender will not be the default VAT identifier, but the one that matches with the country of the receiving consumer, if that additional VAT identifier for that country is available. These additional VAT identifiers need to be added to the sending LegalEntity by Storecove, so if you need to send invoices in this mode, please contact us.
  * contractDocumentReference `string`: A reference to a contract or framework agreement that this invoice relates to.
  * delivery [Delivery](#delivery)
  * documentCurrencyCode [CurrencyCode](#currencycode)
  * dueDate `string`: Format: yyyy-mm-dd.
  * invoiceLines **required** `array`: An array of invoice lines.
    * items [InvoiceLine](#invoiceline)
  * invoiceNumber **required** `string`: The invoice number you assigned to the invoice. The invoiceNumber should be unique for the legalEntityId and year of the issueDate. This means invoice numbers can be reused in different years, as is customary in some countries.
  * invoicePeriod `string`: The period (or specific date) to which the invoice applies. Format: yyyy-mm-dd - yyyy-mm-dd.
  * invoiceType `string` (values: 380, 381, 384): Do not use. This field is available for legacy reasons only. If you want to send a regular invoice (aka UBL type '380'), make sure you have a positive invoice amount. For a credit note (aka UBL type '381'), simply provide a negative invoice amount. If you, in addition to a negative invoice amount, also specify a billingReferences, your invoice will become a corrective invoice (aka UBL type '384'). If your invoice is not sent in the UBL syntax, Storecove will provide the appropriate type for the syntax the invoice is sent in.
  * issueDate **required** `string`: Format: yyyy-mm-dd.
  * note `string`: A note to add to the invoice
  * orderReference `string`: A reference to an order for this invoice, assigned by the buyer. Note that this often is a key field, since many receivers of invoices will use this field to automatically match the invoice to an order they placed. Many receivers refuse invoices that cannot be automatically matched, in particular government agencies. So it is highly recommended to fill this field whenever possible.
  * paymentMeansBic `string`: The BIC (Swift) of the bank where the amount payable should be transferred to
  * paymentMeansCode `string` (values: online_payment_service, bank_card, direct_debit, standing_agreement, credit_transfer, se_bankgiro, se_plusgiro, aunz_npp, , 1, 30, 31, 42, 48, 49, 57, 58): How the invoice has been / will be paid. Use only online_payment_service (payment will be made or has been made by an online payment service), bank_card (e.g. debit card, credit card), direct_debit (the amount has been / will be taken out of the client's bank account), standing_agreement (an unspecified payment means known to both buyer and seller) or credit_transfer (the buyer will do / has done a bank transfer). The numeric codes are for legacy purposes, they should not be used.
  * paymentMeansIban `string`: The IBAN the amount payable should be transferred to
  * paymentMeansPaymentId `string`: The payment id that you will use to match the payment against the invoice.
  * prepaidAmount `number`: The amount already paid.
  * projectReference `string`: Information about the project this invoice relates to.
  * salesOrderId `string`: A reference to an order for this invoice, assigned by the seller.
  * taxExemptReason `string` (values: export, reverse_charge, zero_rated, exempt, outside_scope, intra_community): DEPRECATED. Use Tax/category and specify this per invoice line. If you do specify this field, it will be applied to all invoice lines and it is an error to specify a Tax/category at the invoice line level. This field holds the reason no tax is present in the invoice. Note that this is an invoice level field and you cannot specify it per invoice line. This field is mandatory unless tax is present in the invoice.
  * taxPointDate `string`: The tax date is the date on which the supply of goods or of services was made or completed or the date on which the payment on account was made insofar as that date can be determined and differs from the date of the issue of the invoice. EU 2006-112 Article 226 Point 7. Note: For the Dutch TAX authorities the tac date should be the same as the issue date.
  * taxSubtotals `array`: An array of tax subtotals. This element is mandatory for taxSystem 'tax_line_percentages'.
    * items [TaxSubtotal](#taxsubtotal)
  * taxSystem `string` (values: tax_line_amounts, tax_line_percentages, tax_no_tax): The tax system used for the invoice. The system 'tax_line_percentages' is preferred, but for historic purposes 'tax_line_amounts is supported and default. Since not all invoice formats that we are required to send support 'tax_line_amounts' we will need to convert the invoice to the 'tax_line_percentags' system if we are forced to send the invoice in that tax system.
  * ublExtensions `array`: An array of ubl extensions.
    * items `string`
  * vatReverseCharge `boolean`: DEPRECTATED. Use taxExemptReason.

### InvoiceData
* Invoice Data `object`: The invoice to send, in base64 encoded format. Provide either invoice, or invoiceData, but not both.
  * conversionStrategy `string` (values: ubl, cii): How to interpret the document.
  * document `string`: The base64 encoded version of the document.

### InvoiceLine
* Invoice line `object`
  * accountingCost `string`: The buyer's accounting cost centre for this invoice line, expressed as text.
  * additionalItemProperties `array`: An array of additional item properties.
    * items [AdditionalItemProperty](#additionalitemproperty)
  * allowanceCharge `number`: The discount or surcharge on this item. Should be negative for discounts
  * amountExcludingVat **required** `number`: The amount excluding VAT. Should equal quantity x itemPrice + allowanceCharge.
  * buyersItemIdentification `string`: The ID the buyer assigned to this item.
  * delivery [Delivery](#delivery)
  * description `string`: The description for this invoice line.
  * invoicePeriod `string`: The period (or specific date) to which the invoice line applies. Format: yyyy-mm-dd - yyyy-mm-dd.
  * itemPrice `number`: The price per item (may be fractional)
  * name `string`: A short name for this invoice line. If not provided, it will be taken from description and description will be set to an emtpy string.
  * orderLineReferenceLineId `string`: A reference to the ID of the order. The order is specified as the orderReference at the invoice level. It is not possible to specify an orderReference at the invoice line level. An invoice MUST at this time be for a single order only.
  * quantity `number`: The number of items (may be fractional).
  * quantityUnitCode `string` (values: 10, 11, 13, 14, 15, 20, 21, 22, 23, 24, 25, 27, 28, 33, 34, 35, 37, 38, 40, 41, 56, 57, 58, 59, 60, 61, 74, 77, 80, 81, 85, 87, 89, 91, 1I, 2A, 2B, 2C, 2G, 2H, 2I, 2J, 2K, 2L, 2M, 2N, 2P, 2Q, 2R, 2U, 2X, 2Y, 2Z, 3B, 3C, 4C, 4G, 4H, 4K, 4L, 4M, 4N, 4O, 4P, 4Q, 4R, 4T, 4U, 4W, 4X, 5A, 5B, 5E, 5J, A10, A11, A12, A13, A14, A15, A16, A17, A18, A19, A2, A20, A21, A22, A23, A24, A26, A27, A28, A29, A3, A30, A31, A32, A33, A34, A35, A36, A37, A38, A39, A4, A40, A41, A42, A43, A44, A45, A47, A48, A49, A5, A53, A54, A55, A56, A59, A6, A68, A69, A7, A70, A71, A73, A74, A75, A76, A8, A84, A85, A86, A87, A88, A89, A9, A90, A91, A93, A94, A95, A96, A97, A98, A99, AA, AB, ACR, ACT, AD, AE, AH, AI, AK, AL, AMH, AMP, ANN, APZ, AQ, AS, ASM, ASU, ATM, AWG, AY, AZ, B1, B10, B11, B12, B13, B14, B15, B16, B17, B18, B19, B20, B21, B22, B23, B24, B25, B26, B27, B28, B29, B3, B30, B31, B32, B33, B34, B35, B4, B41, B42, B43, B44, B45, B46, B47, B48, B49, B50, B52, B53, B54, B55, B56, B57, B58, B59, B60, B61, B62, B63, B64, B66, B67, B68, B69, B7, B70, B71, B72, B73, B74, B75, B76, B77, B78, B79, B8, B80, B81, B82, B83, B84, B85, B86, B87, B88, B89, B90, B91, B92, B93, B94, B95, B96, B97, B98, B99, BAR, BB, BFT, BHP, BIL, BLD, BLL, BP, BPM, BQL, BTU, BUA, BUI, C0, C10, C11, C12, C13, C14, C15, C16, C17, C18, C19, C20, C21, C22, C23, C24, C25, C26, C27, C28, C29, C3, C30, C31, C32, C33, C34, C35, C36, C37, C38, C39, C40, C41, C42, C43, C44, C45, C46, C47, C48, C49, C50, C51, C52, C53, C54, C55, C56, C57, C58, C59, C60, C61, C62, C63, C64, C65, C66, C67, C68, C69, C7, C70, C71, C72, C73, C74, C75, C76, C78, C79, C8, C80, C81, C82, C83, C84, C85, C86, C87, C88, C89, C9, C90, C91, C92, C93, C94, C95, C96, C97, C99, CCT, CDL, CEL, CEN, CG, CGM, CKG, CLF, CLT, CMK, CMQ, CMT, CNP, CNT, COU, CTG, CTM, CTN, CUR, CWA, CWI, D03, D04, D1, D10, D11, D12, D13, D15, D16, D17, D18, D19, D2, D20, D21, D22, D23, D24, D25, D26, D27, D29, D30, D31, D32, D33, D34, D36, D41, D42, D43, D44, D45, D46, D47, D48, D49, D5, D50, D51, D52, D53, D54, D55, D56, D57, D58, D59, D6, D60, D61, D62, D63, D65, D68, D69, D73, D74, D77, D78, D80, D81, D82, D83, D85, D86, D87, D88, D89, D91, D93, D94, D95, DAA, DAD, DAY, DB, DD, DEC, DG, DJ, DLT, DMA, DMK, DMO, DMQ, DMT, DN, DPC, DPR, DPT, DRA, DRI, DRL, DT, DTN, DWT, DZN, DZP, E01, E07, E08, E09, E10, E12, E14, E15, E16, E17, E18, E19, E20, E21, E22, E23, E25, E27, E28, E30, E31, E32, E33, E34, E35, E36, E37, E38, E39, E4, E40, E41, E42, E43, E44, E45, E46, E47, E48, E49, E50, E51, E52, E53, E54, E55, E56, E57, E58, E59, E60, E61, E62, E63, E64, E65, E66, E67, E68, E69, E70, E71, E72, E73, E74, E75, E76, E77, E78, E79, E80, E81, E82, E83, E84, E85, E86, E87, E88, E89, E90, E91, E92, E93, E94, E95, E96, E97, E98, E99, EA, EB, EQ, F01, F02, F03, F04, F05, F06, F07, F08, F10, F11, F12, F13, F14, F15, F16, F17, F18, F19, F20, F21, F22, F23, F24, F25, F26, F27, F28, F29, F30, F31, F32, F33, F34, F35, F36, F37, F38, F39, F40, F41, F42, F43, F44, F45, F46, F47, F48, F49, F50, F51, F52, F53, F54, F55, F56, F57, F58, F59, F60, F61, F62, F63, F64, F65, F66, F67, F68, F69, F70, F71, F72, F73, F74, F75, F76, F77, F78, F79, F80, F81, F82, F83, F84, F85, F86, F87, F88, F89, F90, F91, F92, F93, F94, F95, F96, F97, F98, F99, FAH, FAR, FBM, FC, FF, FH, FIT, FL, FOT, FP, FR, FS, FTK, FTQ, G01, G04, G05, G06, G08, G09, G10, G11, G12, G13, G14, G15, G16, G17, G18, G19, G2, G20, G21, G23, G24, G25, G26, G27, G28, G29, G3, G30, G31, G32, G33, G34, G35, G36, G37, G38, G39, G40, G41, G42, G43, G44, G45, G46, G47, G48, G49, G50, G51, G52, G53, G54, G55, G56, G57, G58, G59, G60, G61, G62, G63, G64, G65, G66, G67, G68, G69, G70, G71, G72, G73, G74, G75, G76, G77, G78, G79, G80, G81, G82, G83, G84, G85, G86, G87, G88, G89, G90, G91, G92, G93, G94, G95, G96, G97, G98, G99, GB, GBQ, GDW, GE, GF, GFI, GGR, GIA, GIC, GII, GIP, GJ, GL, GLD, GLI, GLL, GM, GO, GP, GQ, GRM, GRN, GRO, GV, GWH, H03, H04, H05, H06, H07, H08, H09, H10, H11, H12, H13, H14, H15, H16, H18, H19, H20, H21, H22, H23, H24, H25, H26, H27, H28, H29, H30, H31, H32, H33, H34, H35, H36, H37, H38, H39, H40, H41, H42, H43, H44, H45, H46, H47, H48, H49, H50, H51, H52, H53, H54, H55, H56, H57, H58, H59, H60, H61, H62, H63, H64, H65, H66, H67, H68, H69, H70, H71, H72, H73, H74, H75, H76, H77, H79, H80, H81, H82, H83, H84, H85, H87, H88, H89, H90, H91, H92, H93, H94, H95, H96, H98, H99, HA, HBA, HBX, HC, HDW, HEA, HGM, HH, HIU, HKM, HLT, HM, HMQ, HMT, HPA, HTZ, HUR, IA, IE, INH, INK, INQ, ISD, IU, IV, J10, J12, J13, J14, J15, J16, J17, J18, J19, J2, J20, J21, J22, J23, J24, J25, J26, J27, J28, J29, J30, J31, J32, J33, J34, J35, J36, J38, J39, J40, J41, J42, J43, J44, J45, J46, J47, J48, J49, J50, J51, J52, J53, J54, J55, J56, J57, J58, J59, J60, J61, J62, J63, J64, J65, J66, J67, J68, J69, J70, J71, J72, J73, J74, J75, J76, J78, J79, J81, J82, J83, J84, J85, J87, J90, J91, J92, J93, J95, J96, J97, J98, J99, JE, JK, JM, JNT, JOU, JPS, JWL, K1, K10, K11, K12, K13, K14, K15, K16, K17, K18, K19, K2, K20, K21, K22, K23, K26, K27, K28, K3, K30, K31, K32, K33, K34, K35, K36, K37, K38, K39, K40, K41, K42, K43, K45, K46, K47, K48, K49, K50, K51, K52, K53, K54, K55, K58, K59, K6, K60, K61, K62, K63, K64, K65, K66, K67, K68, K69, K70, K71, K73, K74, K75, K76, K77, K78, K79, K80, K81, K82, K83, K84, K85, K86, K87, K88, K89, K90, K91, K92, K93, K94, K95, K96, K97, K98, K99, KA, KAT, KB, KBA, KCC, KDW, KEL, KGM, KGS, KHY, KHZ, KI, KIC, KIP, KJ, KJO, KL, KLK, KLX, KMA, KMH, KMK, KMQ, KMT, KNI, KNM, KNS, KNT, KO, KPA, KPH, KPO, KPP, KR, KSD, KSH, KT, KTN, KUR, KVA, KVR, KVT, KW, KWH, KWO, KWT, KX, L10, L11, L12, L13, L14, L15, L16, L17, L18, L19, L2, L20, L21, L23, L24, L25, L26, L27, L28, L29, L30, L31, L32, L33, L34, L35, L36, L37, L38, L39, L40, L41, L42, L43, L44, L45, L46, L47, L48, L49, L50, L51, L52, L53, L54, L55, L56, L57, L58, L59, L60, L63, L64, L65, L66, L67, L68, L69, L70, L71, L72, L73, L74, L75, L76, L77, L78, L79, L80, L81, L82, L83, L84, L85, L86, L87, L88, L89, L90, L91, L92, L93, L94, L95, L96, L98, L99, LA, LAC, LBR, LBT, LD, LEF, LF, LH, LK, LM, LN, LO, LP, LPA, LR, LS, LTN, LTR, LUB, LUM, LUX, LY, M1, M10, M11, M12, M13, M14, M15, M16, M17, M18, M19, M20, M21, M22, M23, M24, M25, M26, M27, M29, M30, M31, M32, M33, M34, M35, M36, M37, M38, M39, M4, M40, M41, M42, M43, M44, M45, M46, M47, M48, M49, M5, M50, M51, M52, M53, M55, M56, M57, M58, M59, M60, M61, M62, M63, M64, M65, M66, M67, M68, M69, M7, M70, M71, M72, M73, M74, M75, M76, M77, M78, M79, M80, M81, M82, M83, M84, M85, M86, M87, M88, M89, M9, M90, M91, M92, M93, M94, M95, M96, M97, M98, M99, MAH, MAL, MAM, MAR, MAW, MBE, MBF, MBR, MC, MCU, MD, MGM, MHZ, MIK, MIL, MIN, MIO, MIU, MLD, MLT, MMK, MMQ, MMT, MND, MON, MPA, MQH, MQS, MSK, MTK, MTQ, MTR, MTS, MVA, MWH, N1, N10, N11, N12, N13, N14, N15, N16, N17, N18, N19, N20, N21, N22, N23, N24, N25, N26, N27, N28, N29, N3, N30, N31, N32, N33, N34, N35, N36, N37, N38, N39, N40, N41, N42, N43, N44, N45, N46, N47, N48, N49, N50, N51, N52, N53, N54, N55, N56, N57, N58, N59, N60, N61, N62, N63, N64, N65, N66, N67, N68, N69, N70, N71, N72, N73, N74, N75, N76, N77, N78, N79, N80, N81, N82, N83, N84, N85, N86, N87, N88, N89, N90, N91, N92, N93, N94, N95, N96, N97, N98, N99, NA, NAR, NCL, NEW, NF, NIL, NIU, NL, NM3, NMI, NMP, NPT, NT, NU, NX, OA, ODE, OHM, ON, ONZ, OPM, OT, OZA, OZI, P1, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P2, P20, P21, P22, P23, P24, P25, P26, P27, P28, P29, P30, P31, P32, P33, P34, P35, P36, P37, P38, P39, P40, P41, P42, P43, P44, P45, P46, P47, P48, P49, P5, P50, P51, P52, P53, P54, P55, P56, P57, P58, P59, P60, P61, P62, P63, P64, P65, P66, P67, P68, P69, P70, P71, P72, P73, P74, P75, P76, P77, P78, P79, P80, P81, P82, P83, P84, P85, P86, P87, P88, P89, P90, P91, P92, P93, P94, P95, P96, P97, P98, P99, PAL, PD, PFL, PGL, PI, PLA, PO, PQ, PR, PS, PTD, PTI, PTL, PTN, Q10, Q11, Q12, Q13, Q14, Q15, Q16, Q17, Q18, Q19, Q20, Q21, Q22, Q23, Q24, Q25, Q26, Q27, Q28, Q29, Q30, Q31, Q32, Q33, Q34, Q35, Q36, Q37, Q38, Q39, Q40, Q3, QA, QAN, QB, QR, QTD, QTI, QTL, QTR, R1, R9, RH, RM, ROM, RP, RPM, RPS, RT, S3, S4, SAN, SCO, SCR, SEC, SET, SG, SIE, SM3, SMI, SQ, SQR, SR, STC, STI, STK, STL, STN, STW, SW, SX, SYR, T0, T3, TAH, TAN, TI, TIC, TIP, TKM, TMS, TNE, TP, TPI, TPR, TQD, TRL, TST, TTS, U1, U2, UB, UC, VA, VLT, VP, W2, WA, WB, WCD, WE, WEB, WEE, WG, WHR, WM, WSD, WTT, X1, YDK, YDQ, YRD, Z11, ZP, ZZ, X1A, X1B, X1D, X1F, X1G, X1W, X2C, X3A, X3H, X43, X44, X4A, X4B, X4C, X4D, X4F, X4G, X4H, X5H, X5L, X5M, X6H, X6P, X7A, X7B, X8A, X8B, X8C, XAA, XAB, XAC, XAD, XAE, XAF, XAG, XAH, XAI, XAJ, XAL, XAM, XAP, XAT, XAV, XB4, XBA, XBB, XBC, XBD, XBE, XBF, XBG, XBH, XBI, XBJ, XBK, XBL, XBM, XBN, XBO, XBP, XBQ, XBR, XBS, XBT, XBU, XBV, XBW, XBX, XBY, XBZ, XCA, XCB, XCC, XCD, XCE, XCF, XCG, XCH, XCI, XCJ, XCK, XCL, XCM, XCN, XCO, XCP, XCQ, XCR, XCS, XCT, XCU, XCV, XCW, XCX, XCY, XCZ, XDA, XDB, XDC, XDG, XDH, XDI, XDJ, XDK, XDL, XDM, XDN, XDP, XDR, XDS, XDT, XDU, XDV, XDW, XDX, XDY, XEC, XED, XEE, XEF, XEG, XEH, XEI, XEN, XFB, XFC, XFD, XFE, XFI, XFL, XFO, XFP, XFR, XFT, XFW, XFX, XGB, XGI, XGL, XGR, XGU, XGY, XGZ, XHA, XHB, XHC, XHG, XHN, XHR, XIA, XIB, XIC, XID, XIE, XIF, XIG, XIH, XIK, XIL, XIN, XIZ, XJB, XJC, XJG, XJR, XJT, XJY, XKG, XKI, XLE, XLG, XLT, XLU, XLV, XLZ, XMA, XMB, XMC, XME, XMR, XMS, XMT, XMW, XMX, XNA, XNE, XNF, XNG, XNS, XNT, XNU, XNV, XOA, XOB, XOC, XOD, XOE, XOF, XOK, XOT, XOU, XP2, XPA, XPB, XPC, XPD, XPE, XPF, XPG, XPH, XPI, XPJ, XPK, XPL, XPN, XPO, XPP, XPR, XPT, XPU, XPV, XPX, XPY, XPZ, XQA, XQB, XQC, XQD, XQF, XQG, XQH, XQJ, XQK, XQL, XQM, XQN, XQP, XQQ, XQR, XQS, XRD, XRG, XRJ, XRK, XRL, XRO, XRT, XRZ, XSA, XSB, XSC, XSD, XSE, XSH, XSI, XSK, XSL, XSM, XSO, XSP, XSS, XST, XSU, XSV, XSW, XSY, XSZ, XT1, XTB, XTC, XTD, XTE, XTG, XTI, XTK, XTL, XTN, XTO, XTR, XTS, XTT, XTU, XTV, XTW, XTY, XTZ, XUC, XUN, XVA, XVG, XVI, XVK, XVL, XVO, XVP, XVQ, XVN, XVR, XVS, XVY, XWA, XWB, XWC, XWD, XWF, XWG, XWH, XWJ, XWK, XWL, XWM, XWN, XWP, XWQ, XWR, XWS, XWT, XWU, XWV, XWW, XWX, XWY, XWZ, XXA, XXB, XXC, XXD, XXF, XXG, XXH, XXJ, XXK, XYA, XYB, XYC, XYD, XYF, XYG, XYH, XYJ, XYK, XYL, XYM, XYN, XYP, XYQ, XYR, XYS, XYT, XYV, XYW, XYX, XYY, XYZ, XZA, XZB, XZC, XZD, XZF, XZG, XZH, XZJ, XZK, XZL, XZM, XZN, XZP, XZQ, XZR, XZS, XZT, XZU, XZV, XZW, XZX, XZY, XZZ, 04, 05, 08, 16, 17, 18, 19, 26, 29, 30, 31, 32, 36, 43, 44, 45, 46, 47, 48, 53, 54, 62, 63, 64, 66, 69, 71, 72, 73, 76, 78, 84, 90, 92, 93, 94, 95, 96, 97, 98, 1A, 1B, 1C, 1D, 1E, 1F, 1G, 1H, 1J, 1K, 1L, 1M, 1X, 2V, 2W, 3E, 3G, 3H, 3I, 4A, 4B, 4E, 5C, 5F, 5G, 5H, 5I, 5K, 5P, 5Q, A1, A25, A50, A51, A52, A57, A58, A60, A61, A62, A63, A64, A65, A66, A67, A77, A78, A79, A80, A81, A82, A83, AJ, AM, AP, AR, ARE, ATT, AV, AW, B0, B2, B36, B37, B38, B39, B40, B5, B51, B6, B65, B9, BD, BE, BG, BH, BJ, BK, BL, BO, BR, BT, BW, BX, BZ, C1, C2, C4, C5, C6, C77, C98, CA, CH, CJ, CK, CL, CO, CQ, CR, CS, CT, CU, CV, CY, CZ, D14, D28, D35, D37, D38, D39, D40, D64, D66, D67, D7, D70, D71, D72, D75, D76, D79, D8, D9, D90, D92, D96, D97, D98, D99, DC, DE, DI, DQ, DR, DRM, DS, DU, DX, DY, E2, E3, E5, EC, EP, EV, F1, F9, FB, FD, FE, FG, FM, G7, GC, GD, GH, GK, GN, GRT, GT, GW, GY, GZ, H1, H2, HAR, HD, HE, HF, HI, HJ, HK, HL, HN, HO, HP, HS, HT, HY, IC, IF, II, IL, IM, IP, IT, JB, JG, JO, JR, K5, KD, KF, KG, KS, KTM, LC, LE, LI, LJ, LX, M0, MA, MF, MK, MQ, MT, MV, N2, NB, NBB, NC, ND, NE, NG, NH, NI, NJ, NN, NPL, NPR, NQ, NR, NRL, NTT, NV, NY, OP, OZ, P0, P3, P4, P6, P7, P8, P9, PA, PB, PE, PF, PG, PK, PL, PM, PN, PT, PU, PV, PW, PY, PZ, QD, QH, QK, QT, R4, RA, RD, RG, RK, RL, RN, RO, RS, RU, S5, S6, S7, S8, SA, SD, SE, SHT, SK, SL, SN, SO, SP, SS, SST, ST, SV, T1, T4, T5, T6, T7, T8, TA, TC, TD, TE, TF, TJ, TK, TL, TN, TQ, TR, TS, TSD, TSH, TT, TU, TV, TW, TY, UA, UD, UE, UF, UH, UM, VI, VQ, VS, W4, WH, WI, WR, WW, YL, YT, Z1, Z2, Z3, Z4, Z5, Z6, Z8): The unit of measure that applies to the invoiced quantity. Codes for unit of packaging from UNECE Recommendation No. 21 can be used in accordance with the descriptions in the "Intro" section of UN/ECE Recommendation 20, Revision 11 (2015): The 2 character alphanumeric code values in UNECE Recommendation 21 shall be used. To avoid duplication with existing code values in UNECE Recommendation No. 20, each code value from UNECE Recommendation 21 shall be prefixed with an “X”, resulting in a 3 alphanumeric code when used as a unit of measure. Note that the following additionally allowed codes are deprecated and will be converted to C62: 04, 05, 08, 16, 17, 18, 19, 26, 29, 30, 31, 32, 36, 43, 44, 45, 46, 47, 48, 53, 54, 62, 63, 64, 66, 69, 71, 72, 73, 76, 78, 84, 90, 92, 93, 94, 95, 96, 97, 98, 1A, 1B, 1C, 1D, 1E, 1F, 1G, 1H, 1J, 1K, 1L, 1M, 1X, 2V, 2W, 3E, 3G, 3H, 3I, 4A, 4B, 4E, 5C, 5F, 5G, 5H, 5I, 5K, 5P, 5Q, A1, A25, A50, A51, A52, A57, A58, A60, A61, A62, A63, A64, A65, A66, A67, A77, A78, A79, A80, A81, A82, A83, AJ, AM, AP, AR, ARE, ATT, AV, AW, B0, B2, B36, B37, B38, B39, B40, B5, B51, B6, B65, B9, BD, BE, BG, BH, BJ, BK, BL, BO, BR, BT, BW, BX, BZ, C1, C2, C4, C5, C6, C77, C98, CA, CH, CJ, CK, CL, CO, CQ, CR, CS, CT, CU, CV, CY, CZ, D14, D28, D35, D37, D38, D39, D40, D64, D66, D67, D7, D70, D71, D72, D75, D76, D79, D8, D9, D90, D92, D96, D97, D98, D99, DC, DE, DI, DQ, DR, DRM, DS, DU, DX, DY, E2, E3, E5, EC, EP, EV, F1, F9, FB, FD, FE, FG, FM, G7, GC, GD, GH, GK, GN, GRT, GT, GW, GY, GZ, H1, H2, HAR, HD, HE, HF, HI, HJ, HK, HL, HN, HO, HP, HS, HT, HY, IC, IF, II, IL, IM, IP, IT, JB, JG, JO, JR, K5, KD, KF, KG, KS, KTM, LC, LE, LI, LJ, LX, M0, MA, MF, MK, MQ, MT, MV, N2, NB, NBB, NC, ND, NE, NG, NH, NI, NJ, NN, NPL, NPR, NQ, NR, NRL, NTT, NV, NY, OP, OZ, P0, P3, P4, P6, P7, P8, P9, PA, PB, PE, PF, PG, PK, PL, PM, PN, PT, PU, PV, PW, PY, PZ, QD, QH, QK, QT, R4, RA, RD, RG, RK, RL, RN, RO, RS, RU, S5, S6, S7, S8, SA, SD, SE, SHT, SK, SL, SN, SO, SP, SS, SST, ST, SV, T1, T4, T5, T6, T7, T8, TA, TC, TD, TE, TF, TJ, TK, TL, TN, TQ, TR, TS, TSD, TSH, TT, TU, TV, TW, TY, UA, UD, UE, UF, UH, UM, VI, VQ, VS, W4, WH, WI, WR, WW, YL, YT, Z1, Z2, Z3, Z4, Z5, Z6, Z8
  * sellersItemIdentification `string`: The ID the seller assigned to this item.
  * standardItemIdentification `string`: Standardized ID for the item.
  * standardItemIdentificationSchemeAgencyId `string`: The scheme agency for the standardized ID for the item.
  * standardItemIdentificationSchemeId `string`: The scheme for the standardized ID for the item.
  * tax [Tax](#tax)

### InvoiceRecipient
* Recipient ids `object`: The different ways to send the invoice to the recipient. The publicIdentifiers are used to send via the Peppol network, if the recipient is not registered on the Peppol network, the invoice will be sent to the email addresses in the emails property. This property is only mandatory when sending the invoice data using the <<_openapi_invoice>> property, not when sending using the <<_openapi_invoicedata>> property, in which case this information will be extracted from the <<_openapi_invoicedata>> object. If you do specify an <<_openapi_invoicerecipient>> object and an <<_openapi_invoicedata>> object, the data from the two will be merged.
  * emails `array`: The email addresses the invoice should be sent to if none of the other identifiers can be used
    * items `string`: The email address the invoice should be sent to
  * publicIdentifiers [PublicIdentifiers](#publicidentifiers)

### InvoiceRecipientPreflight
* Invoice recipient preflight `object`: Identifies the invoice recipient to preflight
  * publicIdentifiers [PublicIdentifiers](#publicidentifiers)

### InvoiceSubmission
* Invoice submission `object`: The invoice you want Storecove to process, with some meta-data.
  * attachments `array`: An array of attachments. You may provide up to 10 attchments, but the total size must not exceed 10MB after Base64 encoding.
    * items [Attachment](#attachment)
  * document `string`: DEPRECATED. Use attachments.
  * documentUrl `string`: DEPRECATED. Use attachments.
  * invoice [Invoice](#invoice)
  * invoiceData [InvoiceData](#invoicedata)
  * invoiceRecipient [InvoiceRecipient](#invoicerecipient)
  * legalEntityId `integer`: The id of the LegalEntity this invoice should be sent for.
  * legalSupplierId `integer`: DEPRECATED. Use legalEntityId
  * mode `string` (values: direct): DEPRECATED.
  * supplierId `integer`: DEPRECATED.

### InvoiceSubmissionResult
* Invoice submission result `object`: The result of an invoice submission
  * guid `string`: A (V4) GUID for the invoice submission

### LegalEntity
* LegalEntity
  * city `string`: The city.
  * country [Country](#country)
  * county `string`: County, if applicable
  * id `integer`: The Storecove assigned id for the LegalEntity.
  * line1 `string`: The first address line.
  * line2 `string`: The second address line, if applicable
  * party_name `string`: The name of the company.
  * public `boolean`: Whether or not this LegalEntity is public. Public means it will be listed in the PEPPOL directory at https://directory.peppol.eu/ which is normally what you want. If you have a good reason to not want the LegalEntity listed, provide false. This property is ignored when for country SG, where it is always true.
  * tenant_id `string`: The id of the tenant, to be used in case of multi-tenant solutions. This property will included in webhook events.
  * zip `string`: The zipcode.
  * peppol_identifiers `array`
    * items [PeppolIdentifier](#peppolidentifier)
  * peppol_identifiers `array`

### LegalEntityCreate
* LegalEntityCreate `object`
  * city **required** `string`: The city.
  * country **required** [Country](#country)
  * county `string`: County, if applicable
  * line1 **required** `string`: The first address line.
  * line2 `string`: The second address line, if applicable
  * party_name **required** `string`: The name of the company.
  * public `boolean`: Whether or not this LegalEntity is public. Public means it will be entered into the PEPPOL directory at https://directory.peppol.eu/
  * tenant_id `string`: The id of the tenant, to be used in case of multi-tenant solutions. This property will included in webhook events.
  * zip **required** `string`: The zipcode.

### LegalEntityUpdate
* LegalEntityUpdate `object`
  * city `string`: The city.
  * country [Country](#country)
  * county `string`: County, if applicable
  * id `integer`: The Storecove assigned id for the LegalEntity.
  * line1 `string`: The first address line.
  * line2 `string`: The second address line, if applicable
  * party_name `string`: The name of the company.
  * public `boolean`: Whether or not this LegalEntity is public. Public means it will be listed in the PEPPOL directory at https://directory.peppol.eu/ which is normally what you want. If you have a good reason to not want the LegalEntity listed, provide false. This property is ignored when for country SG, where it is always true.
  * tenant_id `string`: The id of the tenant, to be used in case of multi-tenant solutions. This property will included in webhook events.
  * zip `string`: The zipcode.

### Party
* Party `object`: A party that can receive or send invoices
  * address **required** [Address](#address)
  * companyName **required** `string`: The name of the company receiving the invoice
  * contact [Contact](#contact)

### PeppolIdentifier
* PeppolIdentifier `object`
  * identifier `string`: The identifier.
  * scheme `string`: The scheme of the identifier. See <<_peppol_schemes_list>> for a list.
  * superscheme `string`: The superscheme of the identifier. Should always be "iso6523-actorid-upis".

### PeppolIdentifierCreate
* PeppolIdentifierCreate `object`
  * identifier **required** `string`: The identifier.
  * scheme **required** `string`: The scheme of the identifier. See <<_peppol_schemes_list>> for a list.
  * superscheme **required** `string`: The superscheme of the identifier. Should always be "iso6523-actorid-upis".

### PreflightInvoiceRecipientResult
* Preflight invoice recipient result `object`: The result of preflighting an invoice recipient
  * code `string` (values: ok, nok): The result code of the preflight request

### PublicIdentifier
* Public identifier `object`: A public identifier for this customer.
  * id **required** `string`: The actual identifier.
  * scheme **required** `string`: The scheme of the identifier. See <<_peppol_schemes_list>> for a list.

### PublicIdentifiers
* Public identifiers `array`: A list of public identifiers that uniquely identifiy this customer.
  * items [PublicIdentifier](#publicidentifier)

### PurchaseInvoice
* PurchaseInvoice `object`
  * accounting [PurchaseInvoiceAccountingDetails](#purchaseinvoiceaccountingdetails)
  * accounting_cost `string`: The accounting cost code.
  * allowance_charge `number`: DEPRECATED - Use the allowance_charges array.
  * allowance_charges `array`
    * items [PurchaseInvoiceAllowanceCharge](#purchaseinvoiceallowancecharge)
  * amount_including_tax `number`: The total invoice amount payable, including tax. This is equal to the sum of the invoice_lines (amount_excluding_tax + tax.amount)
  * amount_including_vat `number`: DEPRECATED - Use amount_including_tax.
  * attachments `array`
    * items [PurchaseInvoiceAttachment](#purchaseinvoiceattachment)
  * billing_reference `string`: Reference to the previous invoice this invoice relates to.
  * buyer_reference `string`: Reference provided by the buyer. Used for routing.
  * contract_document_reference `string`: Reference to the contract.
  * delivery `object`: The details of the delivery associated with this invoice.
    * actual_date `string`: The actual delivery date.
    * location `object`: The location the goods/services were delivered to.
      * city `string`: Address city.
      * country `string`: Address country.
      * county `string`: Address county.
      * department `string`: Department name.
      * id `string`: The id of the location.
      * line1 `string`: Address line 1.
      * line2 `string`: Address line 2.
      * scheme_id `string`: The scheme id for the id of the location.
      * zip `string`: Address zip code
    * party `object`: The party the goods/services were delivered to.
      * name `string`: The name of the deliveyr party.
  * document `string`: DEPRECTATED. Use the new atatchments array.
  * document_currency_code `string`: The ISO 4217 currency for the invoice.
  * due_date `string`: The date the invoice must be payed by. Format "YYYY-MM-DD".
  * external_key `string`: Used for accountants. The id you specified for the organization.
  * external_user_id `string`: Used for the embedded portal retrieval service. The external_user_id you provided when the ShopAccount was created.
  * guid `string`: The GUID of the invoice
  * invoice_lines `array`
    * items [PurchaseInvoiceInvoiceLine](#purchaseinvoiceinvoiceline)
  * invoice_number `string`: The invoicenumber.
  * invoice_type `string` (values: invoice, creditnote, correctioninvoice): The type of invoice.
  * issue_date `string`: The date the invoice was issued. Format "YYYY-MM-DD".
  * legal_entity_id `integer`: The id of the LegalEntity the invoice was received for.
  * note `string`: The invoice level note.
  * order_reference `string`: Reference to the order. Used for matching the invoice to an order.
  * payable_amount `number`: The total invoice amount payable including tax. This is equal to amount_including_tax + allowance_charge + payable_rounding_amount. This property is redundant and provided only to make invoice processing easier. You can also choose to only store this property, instead of the underlying fields.
  * payable_rounding_amount `number`: The difference between the invoice total and the sum of the invoice lines.
  * payment_means `object`: DEPRECATED - Use the new payment_means_array array.
    * iban `string`: The IBAN to which to transfer.
    * id `string`: An id to mention in the transfer.
  * payment_means_array `array`: The different payment means that can be used to pay the invoice.
    * items [PurchaseInvoicePaymentMeans](#purchaseinvoicepaymentmeans)
  * payment_means_payment_id `string`: DEPRECATED - use the payment_id property in the payment_means_array
  * payment_terms_note `string`: A textual description of the payment terms.
  * period_end `string`: The end date of the period this invoice relates to. Format "YYYY-MM-DD".
  * period_start `string`: The start date of the period this invoice relates to. Format "YYYY-MM-DD".
  * prepaid_amount `number`: The amount already paid.
  * project_reference `string`: Reference to the project.
  * sender [PurchaseInvoiceSender](#purchaseinvoicesender)
  * source `string` (values: peppol, script, supplier, email): The source the invoice was received from.
  * system_generated_primary_image `boolean`: Whether or not the document image (PDF) was generated by Storecove. If true, it means the invoice was received without any attachments and Storecove generated one for you. If false, the invoice will contain at least one attachment, which was received from the invoice sender..
  * tax_point_date `string`: The date the invoice was issued for tax purposes. In most countries MUST match the issue_date. Format "YYYY-MM-DD".
  * tax_subtotals `array`
    * items [PurchaseInvoiceTaxSubtotal](#purchaseinvoicetaxsubtotal)
  * tax_system `string`: The tax system of the invoice. Either tax_line_percentages or tax_line_amounts. The first tax system means the invoice lines contain only the tax percentages and the tax amounts are included only in the tax subtotals at the invoice level and so are only calculated at the invoice level. The tax system tax_line_amounts means that in addition to the percentage, each invoice line also contains the tax amount. The tax subtotals at the invoice level are calculated as the sum of the tax of the invoice lines. The distinction between the two tax systems has has implications for rounding.
  * vat_reverse_charge `boolean`: DEPRECATED - This is now part of each invoice line.

### PurchaseInvoiceAccountingDetails
* PurchaseInvoiceAccountingDetails `object`
  * code `string`: The the code of the general ledger account.
  * list `string`: The name of the list for the code, e.g. "RGS".
  * list_version `string`: The version of the list for the code, e.g. "1.1".
  * name `string`: A textual description of the code.

### PurchaseInvoiceAllowanceCharge
* PurchaseInvoiceAllowanceCharge `object`
  * amount_excluding_tax `number`: The amount excluding tax.
  * amount_excluding_vat `string`: DEPRECATED - use amount_excluding_tax.
  * reason `string`: The reason for the allowance or charge.
  * tax [PurchaseInvoiceTax](#purchaseinvoicetax)
  * vat [PurchaseInvoiceVat](#purchaseinvoicevat)

### PurchaseInvoiceAttachment
* PurchaseInvoiceAttachment `object`
  * content_type `string`: The attachment content type (mime type).
  * document `string`: The Base64 encoded document attachment.

### PurchaseInvoiceInvoiceLine
* PurchaseInvoiceInvoiceLine `object`
  * accounting [PurchaseInvoiceAccountingDetails](#purchaseinvoiceaccountingdetails)
  * allowance_charge `number`: DEPRECATED - use allowance_charges.
  * allowance_charges `array`
    * items [PurchaseInvoiceInvoiceLineAllowanceCharge](#purchaseinvoiceinvoicelineallowancecharge)
  * amount_excluding_vat `number`: The amount excluding VAT. This is equal to quantity x price_amount + allowance_charge. This property is redundant and provided only to make invoice processing more easy. You can also choose to only store this property, instead of the underlying fields.
  * description `string`: The description for the invoice line.
  * price_amount `number`: The price for one item, excluding VAT.
  * quantity `number`: The quantity of the item.
  * vat `object`: The VAT details for the invoice line.
    * amount `number`: The amount of VAT for the invoice line.
    * country `string`: The ISO 3166 country of the VAT for the invoice line.
    * percentage `number`: The percentage of VAT for the invoice line.

### PurchaseInvoiceInvoiceLineAllowanceCharge
* PurchaseInvoiceInvoiceLineAllowanceCharge `object`
  * amount `number`: The amount of the allowance or charge.

### PurchaseInvoicePaymentMeans
* PurchaseInvoicePaymentMeans `object`
  * account `string`: The account number to which to transfer.
  * branch_code `string` (values: NPP, SE:BANKGIRO, SE:PLUSGIRO): The code identifying the bank branch. May contain a BIC/SWIFT or something appropriate for the payment method, such as "NPP" for type NppPaymentMean.
  * holder `string`: The account holder name to which to transfer.
  * mandate `string`: The mandate, used only for type DirectDebitPaymentMean.
  * network `string`: The payment network. Used only for type CardPaymentType.
  * payment_id `string`: The payment id to use when making the payment. The invoice sender will use this to match the received funds to the invoice.
  * type `string` (values: BankPaymentMean, CardPaymentMean, DirectDebitPaymentMean, NppPaymentMean, SeBankgiroPaymentMean, SePlusGiroPaymentMean): The type of payment means.

### PurchaseInvoiceSender
* PurchaseInvoiceSender `object`
  * billing_contact [PurchaseInvoiceSenderBillingContact](#purchaseinvoicesenderbillingcontact)
  * city `string`: The city.
  * country `string`: The country.
  * county `string`: The county.
  * department `string`: The department who sent the invoice.
  * identifiers `array`: The array of identifiers for this sender.
    * items [PeppolIdentifier](#peppolidentifier)
  * line1 `string`: The address
  * line2 `string`: The address, line 2
  * party_name `string`: The party who sent the invoice.
  * peppol_identifiers [PeppolIdentifier](#peppolidentifier)
  * zip `string`: The zip code.

### PurchaseInvoiceSenderBillingContact
* PurchaseInvoiceSenderBillingContact `object`
  * email `string`: The email of the billing contact.
  * first_name `string`: The first name of the billing contact.
  * last_name `string`: The last name of the billing contact.

### PurchaseInvoiceTax
* PurchaseInvoiceTax `object`
  * tax `object`: The tax element.
    * amount `string`: The tax country.
    * category `string`: The tax category.
    * category_code `string`: The tax category code.
    * percentage `number`: The tax percentage.
    * type `string`: The tax type.

### PurchaseInvoiceTaxSubtotal
* PurchaseInvoiceTaxSubtotal `object`
  * amount_excluding_tax `number`: The amount excluding tax.
  * amount_excluding_vat `string`: DEPRECATED - use amount_excluding_tax.
  * tax [PurchaseInvoiceTax](#purchaseinvoicetax)
  * vat [PurchaseInvoiceVat](#purchaseinvoicevat)

### PurchaseInvoiceUbl
* PurchaseInvoiceUbl `object`
  * external_key `string`: Used for accountants. The id you specified for the organization.
  * external_user_id `string`: Used for the embedded portal retrieval service. The external_user_id you provided when the ShopAccount was created.
  * guid `string`: The GUID of the invoice
  * legal_entity_id `integer`: The id of the LegalEntity the invoice was received for.
  * system_generated_primary_image `boolean`: Whether or not the document image (PDF) was generated by Storecove. If true, it means the invoice was received without any attachments and Storecove generated one for you. If false, the invoice will contain at least one attachment, which was received from the invoice sender.
  * tax_system `string`: The tax system of the invoice. Either tax_line_percentages or tax_line_amounts. The first tax system means the invoice lines contain only the tax percentages and the tax amounts are included only in the tax subtotals at the invoice level and so are only calculated at the invoice level. The tax system tax_line_amounts means that in addition to the percentage, each invoice line also contains the tax amount.
  * ubl `string`: The Base64 encoded UBL invoice.

### PurchaseInvoiceVat
* VAT - DEPRECATED `object`: DEPRECATED - Use tax.
  * amount `string`: The VAT country.
  * percentage `string`: The VAT percentage.

### SupplierParty
* SupplierParty `object`: A party that can send invoices
  * contact [Contact](#contact)

### Tax
* Tax `object`
  * amount `number`: The amount of VAT. Mandatory if taxSystem == 'tax_line_amounts'. However, it is best to use taxSystem tax_line_percentages and provide only the percentage, not the actual amount. The amount is then provided at the invoice level, in the taxSubtotals element.
  * category `string` (values: standard, zero_rated, reverse_charge, intra_community, exempt, export, outside_scope, regulation33_exempt, nonregulation33_exempt, deemed_supply, srca_s, srca_c, not_registered, sales_tax, sales_tax_work, service_tax, service_tax_import, sales_to_export_market, sales_to_special_area, sales_to_designated_area, exemption_schedule_a, exemption_schedule_b, exemption_schedule_c_a, exemption_schedule_c_b, exemption_schedule_c_c, exemption_service_tax): The optional category code for the tax. This is not mandatory, but highly recommended. If not provided, it will be automatically derived from the country/percentage in combination with the invoice taxPointDate (which defaults to the issueDate), but there are situations in which this fails and the category needs to be specified explicitly. In particular, there are multiple categories available for 0%. The allowed values depend on the country of the tax.
  * country **required** [Country](#country)
  * percentage `number`: The percentage VAT. This should be a valid VAT percentage in the country at the time of the issueDate of this invoice. Mandatory if taxSystem == 'tax_line_percentages'

### TaxSubtotal
* Tax Subtotal `object`: The total amount of tax of this type in the invoice.
  * category `string` (values: standard, zero_rated, reverse_charge, intra_community, exempt, export, outside_scope, regulation33_exempt, nonregulation33_exempt, deemed_supply, srca_s, srca_c, not_registered, sales_tax_work, service_tax, service_tax_import, sales_to_export_market, sales_to_special_area, sales_to_designated_area, exemption_schedule_a, exemption_schedule_b, exemption_schedule_c_a, exemption_schedule_c_b, exemption_schedule_c_c, exemption_service_tax): The tax category. For a description see <<_openapi_tax>>
  * country [Country](#country)
  * percentage `number`: The tax percentage. This should be a valid tax percentage in the country at the time of the taxpointDate of this invoice. Required unless taxAmount is provided.
  * taxAmount `number`: The amount of tax.
  * taxableAmount **required** `number`: The amount on which the tax is levied. Required unless percentage is provided.


