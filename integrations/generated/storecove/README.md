# @datafire/storecove

Client library for Storecove

## Installation and Usage
```bash
npm install --save @datafire/storecove
```
```js
let storecove = require('@datafire/storecove').create({
  Bearer: ""
});

storecove.shops_index({}).then(data => {
  console.log(data);
});
```

## Description

Storecove API

## Actions

### create_invoice_submission
Submit an invoice for delivery.
include::examples/invoice_submissions/create_invoice_submission/tabs.adoc[]


```js
storecove.create_invoice_submission({
  "invoice_submission": {
    "mode": "",
    "invoiceRecipient": {},
    "invoice": {
      "invoiceNumber": "",
      "issueDate": "",
      "accountingCustomerParty": {
        "party": {
          "companyName": "",
          "address": {
            "country": ""
          }
        }
      },
      "invoiceLines": [],
      "amountIncludingVat": 0
    }
  }
}, context)
```

#### Input
* input `object`
  * invoice_submission **required** [InvoiceSubmission](#invoicesubmission)

#### Output
* output [InvoiceSubmissionResult](#invoicesubmissionresult)

### preflight_invoice_recipient
Check whether Storecove can deliver an invoice for a list of ids.
include::examples/invoice_submissions/preflight_invoice_recipient/tabs.adoc[]


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
  * scheme **required** `string`: PEPPOL identifier scheme id, e.g. "DE:VAT". For a full list see <<_company>>.
  * identifier **required** `string`: PEPPOL identifier

#### Output
*Output schema unknown*

### get_invoice
Get a specific Invoice.


```js
storecove.get_invoice({
  "guid": ""
}, context)
```

#### Input
* input `object`
  * guid **required** `string`: purchase invoice guid

#### Output
* output [PurchaseInvoice](#purchaseinvoice)

### get_invoice_ubl
Get a specific Invoice in UBL form.


```js
storecove.get_invoice_ubl({
  "guid": ""
}, context)
```

#### Input
* input `object`
  * guid **required** `string`: purchase invoice guid

#### Output
* output [PurchaseInvoiceUbl](#purchaseinvoiceubl)

### shop_account_requests_index
Retrieve all active ShopAccountRequests for one of your entities.
include::examples/shop_account_requests/shop_account_requests_index/tabs.adoc[]


```js
storecove.shop_account_requests_index({
  "external_user_id": ""
}, context)
```

#### Input
* input `object`
  * external_user_id **required** `string`: Filter by the external_user_id

#### Output
* output `array`
  * items [ShopAccountRequestResult](#shopaccountrequestresult)

### create_shop_account_request
Create a new ShopAccountRequest
include::examples/shop_account_requests/create_shop_account_request/tabs.adoc[]


```js
storecove.create_shop_account_request({
  "shop_account_request": null
}, context)
```

#### Input
* input `object`
  * shop_account_request **required** [ShopAccountRequestInput](#shopaccountrequestinput)

#### Output
* output [ShopAccountRequestResult](#shopaccountrequestresult)

### delete_shop_account_request
Delete a specific ShopAccountRequest
include::examples/shop_account_requests/delete_shop_account_request/tabs.adoc[]


```js
storecove.delete_shop_account_request({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: shop_account_request id

#### Output
*Output schema unknown*

### get_shop_account_request
Show a specific ShopAccountRequest
include::examples/shop_account_requests/get_shop_account_request/tabs.adoc[]


```js
storecove.get_shop_account_request({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: shop_account_request id

#### Output
* output [ShopAccountRequestResult](#shopaccountrequestresult)

### update_shop_account_request
Update a specific ShopAccountRequest
include::examples/shop_account_requests/update_shop_account_request/tabs.adoc[]


```js
storecove.update_shop_account_request({
  "id": 0,
  "shop_account_request": null
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: shop_account_request id
  * shop_account_request **required** [ShopAccountRequestUpdate](#shopaccountrequestupdate)

#### Output
* output [ShopAccountRequestResult](#shopaccountrequestresult)

### shop_accounts_index
Retrieve all active ShopAccounts for one of your entities.
include::examples/shop_accounts/shop_accounts_index/tabs.adoc[]


```js
storecove.shop_accounts_index({
  "external_user_id": ""
}, context)
```

#### Input
* input `object`
  * external_user_id **required** `string`: Filter by the external_user_id

#### Output
* output `array`
  * items [ShopAccountResult](#shopaccountresult)

### create_shop_account
Create a new ShopAccount.
include::examples/shop_accounts/create_shop_account/tabs.adoc[]


```js
storecove.create_shop_account({
  "shop_account": null
}, context)
```

#### Input
* input `object`
  * shop_account **required** [ShopAccountInput](#shopaccountinput)

#### Output
* output [ShopAccountResult](#shopaccountresult)

### shop_accounts_auth_failures
Get ShopAccounts with authorization failures.
include::examples/shop_accounts/shop_accounts_auth_failures/tabs.adoc[]


```js
storecove.shop_accounts_auth_failures(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [ShopAccountResult](#shopaccountresult)

### delete_shop_account
Delete a specific ShopAccount.
include::examples/shop_accounts/delete_shop_account/tabs.adoc[]


```js
storecove.delete_shop_account({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: shop_account id

#### Output
*Output schema unknown*

### get_shop_account
Get a specific ShopAccount.
include::examples/shop_accounts/get_shop_account/tabs.adoc[]


```js
storecove.get_shop_account({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: shop_account id

#### Output
* output [ShopAccountResult](#shopaccountresult)

### update_shop_account
Update a specific ShopAccount.
include::examples/shop_accounts/update_shop_account/tabs.adoc[]


```js
storecove.update_shop_account({
  "id": 0,
  "shop_account": null
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: shop_account id
  * shop_account **required** [ShopAccountUpdate](#shopaccountupdate)

#### Output
* output [ShopAccountResult](#shopaccountresult)

### shops_index
Get all available shops.
include::examples/shops/shops_index/tabs.adoc[]


```js
storecove.shops_index({}, context)
```

#### Input
* input `object`
  * cc `string`: Include creditcards in list. Add ?cc=true to URL to use.

#### Output
* output `array`
  * items [Shop](#shop)



## Definitions

### AccountingCostCode
* Accounting cost code `object`: The code in the chart of accounts used by the receiver of the invoice.
  * code `string`
  * list `string`
  * listAgency `string`
  * listVersion `string`

### AccountingCustomerParty
* Customer `object`: The customer receiving the invoice.
  * accountId `string`: The account id you assigned to the customer.
  * party **required** [Party](#party)

### AllowanceCharge
* Allowance Charge `object`
  * amountExcludingVat **required** `number`: The amount for the allowance charge, excluding VAT
  * reason `string`: The reason for the allowance charge, free text
  * reasonCode `string`: The reason code for the allowance charge. Uses list http://www.unece.org/trade/untdid/d12a/tred/tred4465.htm , defaults to 1 - Agreed settlement
  * tax **required** `object`: The tax for this allowance charge.
    * amount **required** `number`: The amount of VAT. Should equal percentage x amountExcludingVat. A difference of 5 cents or 1% between the calculated value and the provided value is allowed.
    * country **required** [Country](#country)
    * percentage **required** `number`: The percentage VAT. This should be a valid VAT percentage in the country at the time of the issueDate of this invoice.

### Country
* Country `string` (values: AD, AE, AF, AG, AI, AL, AM, AO, AQ, AR, AS, AT, AU, AW, AX, AZ, BA, BB, BD, BE, BF, BG, BH, BI, BJ, BL, BM, BN, BO, BQ, BR, BS, BT, BV, BW, BY, BZ, CA, CC, CD, CF, CG, CH, CI, CK, CL, CM, CN, CO, CR, CU, CV, CW, CX, CY, CZ, DE, DJ, DK, DM, DO, DZ, EC, EE, EG, EH, ER, ES, ET, FI, FJ, FK, FM, FO, FR, GA, GB, GD, GE, GF, GG, GH, GI, GL, GM, GN, GP, GQ, GR, GS, GT, GU, GW, GY, HK, HM, HN, HR, HT, HU, ID, IE, IL, IM, IN, IO, IQ, IR, IS, IT, JE, JM, JO, JP, KE, KG, KH, KI, KM, KN, KP, KR, KW, KY, KZ, LA, LB, LC, LI, LK, LR, LS, LT, LU, LV, LY, MA, MC, MD, ME, MF, MG, MH, MK, ML, MM, MN, MO, MP, MQ, MR, MS, MT, MU, MV, MW, MX, MY, MZ, NA, NC, NE, NF, NG, NI, NL, NO, NP, NR, NU, NZ, OM, PA, PE, PF, PG, PH, PK, PL, PM, PN, PR, PS, PT, PW, PY, QA, RE, RO, RS, RU, RW, SA, SB, SC, SD, SE, SG, SH, SI, SJ, SK, SL, SM, SN, SO, SR, SS, ST, SV, SX, SY, SZ, TC, TD, TF, TG, TH, TJ, TK, TL, TM, TN, TO, TR, TT, TV, TW, TZ, UA, UG, UM, US, UY, UZ, VA, VC, VE, VG, VI, VN, VU, WF, WS, YE, YT, ZA, ZM, ZW): An ISO 3166-1 alpha-2 country code.

### CurrencyCode
* Currency `string` (values: AED, AFN, ALL, AMD, ANG, AOA, ARS, AUD, AWG, AZN, BAM, BBD, BDT, BGN, BHD, BIF, BMD, BND, BOB, BOV, BRL, BSD, BTN, BWP, BYN, BYR, BZD, CAD, CDF, CHE, CHF, CHW, CLF, CLP, CNY, COP, COU, CRC, CUC, CUP, CVE, CZK, DJF, DKK, DOP, DZD, EGP, ERN, ETB, EUR, FJD, FKP, GBP, GEL, GHS, GIP, GMD, GNF, GTQ, GYD, HKD, HNL, HRK, HTG, HUF, IDR, ILS, INR, IQD, IRR, ISK, JMD, JOD, JPY, KES, KGS, KHR, KMF, KPW, KRW, KWD, KYD, KZT, LAK, LBP, LKR, LRD, LSL, LYD, MAD, MDL, MGA, MKD, MMK, MNT, MOP, MRO, MUR, MVR, MWK, MXN, MXV, MYR, MZN, NAD, NGN, NIO, NOK, NPR, NZD, OMR, PAB, PEN, PGK, PHP, PKR, PLN, PYG, QAR, RON, RSD, RUB, RWF, SAR, SBD, SCR, SDG, SEK, SGD, SHP, SLL, SOS, SRD, SSP, STD, SYP, SZL, THB, TJS, TMT, TND, TOP, TRY, TTD, TWD, TZS, UAH, UGX, USD, USN, UYI, UYU, UZS, VEF, VND, VUV, WST, XAF, XAG, XAU, XBA, XBB, XBC, XBD, XCD, XDR, XFU, XOF, XPD, XPF, XPT, XSU, XTS, XUA, XXX, YER, ZAR, ZMW): The ISO 4217 currency code.

### ErrorModel
* ErrorModel `object`
  * details `string`
  * source `string`

### InvoiceLine
* Invoice line `object`
  * accountingCostCode [AccountingCostCode](#accountingcostcode)
  * allowanceCharge `number`: The discount or surcharge on this item. Should be negative for discounts
  * amountExcludingVat **required** `number`: The amount excluding VAT. Should equal quantity x itemPrice + allowanceCharge. A difference of 5 cents or 1% between the calculated value and the provided value is allowed.
  * description **required** `string`: The description for this invoice line.
  * groupArticlegroupAccount `string`: The articlegroup account number.
  * groupArticlegroupCode `string`: The articlegroup code.
  * groupArticlegroupDescription `string`: The description of the acticlegroup.
  * groupCustomerAccount `string`: The account number the customer assigned to this customer code.
  * groupCustomerCode `string`: The code the customer gave this item.
  * groupCustomerDescription `string`: The description for the code the customer gave this item.
  * groupNziAccount `string`: The NZI account number.
  * groupNziCode `string`: The NZI (Nationale Zorg Instelling) code.
  * groupNziDescription `string`: The description of the NZI code.
  * id `string`: Your id for this invoice line.
  * imageUrl `string`: A URL to an image for the product in the invoice line.
  * invoicePeriod `string`: The period (or specific date) to which the invoice line applies. Format: yyyy-mm-dd - yyyy-mm-dd.
  * itemPrice `number`: The price per item (may be fractional)
  * quantity `number`: The number of items (may be fractional).
  * sellersItemIdentification `string`: The ID the seller assigned to this item.
  * standardItemIdentification `string`: Standardized ID for the item. Identifiers based on GTIN.
  * tax `object`: The tax for this invoice line.
    * amount **required** `number`: The amount of VAT. Should equal percentage x amountExcludingVat. A difference of 5 cents or 1% between the calculated value and the provided value is allowed.
    * country **required** [Country](#country)
    * percentage **required** `number`: The percentage VAT. This should be a valid VAT percentage in the country at the time of the issueDate of this invoice.

### InvoiceRecipient
* Recipient ids `object`: Ids that identify this invoice recipient. The list of identifiers should match with the accountingCustomerParty. I.e., you should not be sending an invoice for one accountingCustomerParty to the publicIdentifier of another.
  * emails `array`: The email addresses the invoice should be sent to if none of the other identifiers can be used
    * items `string`: The email address the invoice should be sent to
  * id `string`: DEPRECATED. Use widgetIdentification.id
  * publicIdentifiers [PublicIdentifiers](#publicidentifiers)
  * widgetIdentification [WidgetIdentification](#widgetidentification)

### InvoiceRecipientPreflight
* Invoice recipient preflight `object`: Identifies the invoice recipient to preflight
  * publicIdentifiers [PublicIdentifiers](#publicidentifiers)
  * supplierId `integer`: DEPRECATED.
  * widgetIdentification [WidgetIdentification](#widgetidentification)

### InvoiceSubmission
* Invoice submission `object`: The invoice you want Storecove to process, with some meta-data.
  * document `string`: The invoice in PDF form. The document should be base64 encoded and the enocded string length should not exceed 2MB (2097152 bytes).
  * documentUrl `string`: A URL to retrieve the PDF document via HTTP GET. If the link expires, please allow at least 7 days of validity.
  * invoice **required** `object`: The invoice to send
    * accountingCostCode [AccountingCostCode](#accountingcostcode)
    * accountingCustomerParty **required** [AccountingCustomerParty](#accountingcustomerparty)
    * allowanceCharges `array`: An array of allowance charges.
      * items [AllowanceCharge](#allowancecharge)
    * amountIncludingVat **required** `number`: amountIncludingVat is important because of rounding differences. In many invoices, the sum of the line item amounts excluding VAT and the VAT amounts is not equal to first summing the line items without VAT, and then applying VAT. The difference is automatically calculated and included in the electronic invoice, so the receiving accounting package can process the electronic invoice without problems.
    * billingReference `string`: A reference to a commercial invoice or corrective invoice of which the current invoice is a correction.
    * buyerReference `string`: A reference provided by the buyer used for internal routing of the document.
    * contractDocumentReference `string`: A reference to a contract or framework agreement that this invoice relates to.
    * documentCurrencyCode [CurrencyCode](#currencycode)
    * dueDate `string`: Format: yyyy-mm-dd.
    * invoiceLines **required** `array`: An array of invoice lines.
      * items [InvoiceLine](#invoiceline)
    * invoiceNumber **required** `string`: The invoice number you assigned to the invoice. The invoiceNumber should be unique for the legalEntityId and year of the issueDate. This means invoice numbers can be reused in different years, as is customary in some countries.
    * invoicePeriod `string`: The period (or specific date) to which the invoice applies. Format: yyyy-mm-dd - yyyy-mm-dd.
    * invoiceType `string` (values: 380, 384): Use 380 for a regular invoice, 384 for a Corrective invoice.
    * issueDate **required** `string`: Format: yyyy-mm-dd.
    * orderReference `string`: A reference to an order for this invoice.
    * paymentMeansCode `string`: Leave empty. Defaults to 31 if an IBAN is provided, otherwise defaults to 1. But leave empty.
    * paymentMeansIban `string`: The IBAN the amount payable should be transferred to
    * paymentMeansPaymentId `string`: The payment id that you will use to match the payment against the invoice.
    * projectReference `string`: Information about the project this invoice relates to.
    * taxPointDate `string`: The tax date is the date on which the supply of goods or of services was made or completed or the date on which the payment on account was made insofar as that date can be determined and differs from the date of the issue of the invoice. EU 2006-112 Article 226 Point 7. Note: For the Dutch TAX authorities the tac date should be the same as the issue date.
    * vatReverseCharge `boolean`: Whether or not the invoice is reverse charged
  * invoiceRecipient **required** [InvoiceRecipient](#invoicerecipient)
  * legalEntityId `integer`: The id of the LegalEntity this invoice should be sent for.
  * legalSupplierId `integer`: DEPRECATED. Use legalEntityId
  * mode **required** `string` (values: direct): The mode in which to run this invoice submission.
  * supplierId `integer`: DEPRECATED.

### InvoiceSubmissionResult
* Invoice submission result `object`: The result of an invoice submission
  * guid `string`: A (V4) GUID for the invoice submission

### LegalEntity
* LegalEntity
  * city `string`: The city.
  * country [Country](#country)
  * county `string`: County, if applicable
  * line1 `string`: The first address line.
  * line2 `string`: The second address line, if applicable
  * party_name `string`: The name of the company.
  * zip `string`: The zipcode.
  * peppol_identifiers `array`
    * items [PeppolIdentifier](#peppolidentifier)

### LegalEntityCreate
* LegalEntityCreate `object`
  * city **required** `string`: The city.
  * country **required** [Country](#country)
  * county `string`: County, if applicable
  * line1 **required** `string`: The first address line.
  * line2 `string`: The second address line, if applicable
  * party_name **required** `string`: The name of the company.
  * zip **required** `string`: The zipcode.

### LegalEntityIdentifier
* LegalEntityIdentifier `object`
  * identifier `string`
  * scheme `string`
  * scheme_agency `string`

### LegalEntityShop
* LegalEntityShop `object`
  * city `string`
  * country `string`
  * county `string`
  * identifiers `array`
    * items [LegalEntityIdentifier](#legalentityidentifier)
  * line1 `string`
  * line2 `string`
  * name `string`
  * zip `string`

### LegalEntityUpdate
* LegalEntityUpdate `object`
  * city `string`: The city.
  * country [Country](#country)
  * county `string`: County, if applicable
  * line1 `string`: The first address line.
  * line2 `string`: The second address line, if applicable
  * party_name `string`: The name of the company.
  * zip `string`: The zipcode.

### Logos
* Logos `object`
  * medium `string`
  * small `string`
  * thumb `string`

### Party
* Party `object`: A party that can receive or send invoices
  * address **required** `object`: The company address
    * city `string`: The name of the city.
    * country **required** [Country](#country)
    * county `string`: An optional county name.
    * department `string`: The department the invoice is addressed to
    * number `string`: This number will be added to the street1 element. The number can be provided in this field OR in the street1 field, but not in both.
    * postbox `string`: The postbox number
    * street1 `string`: The street name. The number can be provided in this fiedl OR in the number field, but not in both.
    * street2 `string`: The second street field. Use this if you used the first field for the building name.
    * zip `string`: The zipcode/postalzone.
  * companyName **required** `string`: The name of the company receiving the invoice
  * contact `object`: The billing contact
    * email `string`
    * firstName `string`
    * lastName `string`

### PeppolIdentifier
* PeppolIdentifier `object`
  * identifier `string`: The identifier.
  * scheme `string`: The scheme of the identifier. See <<_company>> for a list.
  * superscheme `string`: The superscheme of the identifier. Should always be "iso6523-actorid-upis".

### PeppolIdentifierCreate
* PeppolIdentifierCreate `object`
  * identifier **required** `string`: The identifier.
  * scheme **required** `string`: The scheme of the identifier. See <<_company>> for a list.
  * superscheme **required** `string`: The superscheme of the identifier. Should always be "iso6523-actorid-upis".

### PreflightInvoiceRecipientResult
* Preflight invoice recipient result `object`: The result of preflighting an invoice recipient
  * code `string` (values: ok, nok): The result code of the preflight request

### PublicIdentifier
* Public identifier `object`: A public identifier for this customer.
  * id **required** `string`: The actual identifier.
  * scheme **required** `string`: The scheme of the identifier. See <<_company>> for a list.

### PublicIdentifiers
* Public identifiers `array`: A list of public identifiers that uniquely identifiy this customer.
  * items [PublicIdentifier](#publicidentifier)

### PurchaseInvoice
* PurchaseInvoice `object`
  * accounting [PurchaseInvoiceAccountingDetails](#purchaseinvoiceaccountingdetails)
  * allowance_charge `number`: A correction on the amount to pay, for instance if the invoice has been prepaid, in which case it will be negative.
  * amount_including_vat `number`: The total invoice amount payable, including VAT. This is equal to the sum of the invoice_lines (amount_excluding_vat + vat.amount)
  * billing_reference `string`: The end date of the period this invoice relates to. Format "YYYY-MM-DD".
  * buyer_reference `string`: The end date of the period this invoice relates to. Format "YYYY-MM-DD".
  * contract_document_reference `string`: The end date of the period this invoice relates to. Format "YYYY-MM-DD".
  * document `string`: The Base64 encoded PDF document associated with the invoice.
  * document_currency_code `string`: The ISO 4217 currency for the invoice.
  * due_date `string`: The date the invoice must be payed by. Format "YYYY-MM-DD".
  * guid `string`: The GUID of the invoice
  * invoice_lines `array`
    * items [PurchaseInvoiceInvoiceLine](#purchaseinvoiceinvoiceline)
  * invoice_number `string`: The invoicenumber.
  * invoice_type `string` (values: invoice, creditnote, correctioninvoice): The type of invoice.
  * issue_date `string`: The date the invoice was issued. Format "YYYY-MM-DD".
  * legal_entity_id `integer`: The id of the LegalEntity the invoice was received for.
  * payable_amount `number`: The total invoice amount payable including VAT. This is equal to amount_including_vat + allowance_charge + payable_rounding_amount. This property is redundant and provided only to make invoice processing more easy. You can also choose to only store this property, instead of the underlying fields.
  * payable_rounding_amount `number`: The difference between the invoice total and the sum of the invoice lines.
  * payment_means `object`: How the invoice can be paid.
    * iban `string`: The IBAN to which to transfer.
    * id `string`: An id to mention in the transfer.
  * period_end `string`: The end date of the period this invoice relates to. Format "YYYY-MM-DD".
  * period_start `string`: The start date of the period this invoice relates to. Format "YYYY-MM-DD".
  * sender [PurchaseInvoiceSender](#purchaseinvoicesender)
  * source `string` (values: peppol, script, supplier, email): The source the invoice was received from.
  * tax_point_date `string`: The date the invoice was issued for tax purposes. In most countries MUST match the issue_date. Format "YYYY-MM-DD".
  * vat_reverse_charge `boolean`: Whether or not the invoice is reverse charged.

### PurchaseInvoiceAccountingDetails
* PurchaseInvoiceAccountingDetails `object`
  * code `string`: The the code of the general ledger account.
  * list `string`: The name of the list for the code, e.g. "RGS".
  * list_version `string`: The version of the list for the code, e.g. "1.1".
  * name `string`: A textual descroption of the code.

### PurchaseInvoiceInvoiceLine
* PurchaseInvoiceInvoiceLine `object`
  * accounting [PurchaseInvoiceAccountingDetails](#purchaseinvoiceaccountingdetails)
  * allowance_charge `number`: The adjustment to the price, for instance a discount.
  * amount_excluding_vat `number`: The amount excluding VAT. This is equal to quantity x price_amount + allowance_charge. This property is redundant and provided only to make invoice processing more easy. You can also choose to only store this property, instead of the underlying fields.
  * description `string`: The description for the invoice line.
  * price_amount `number`: The price for one item, excluding VAT.
  * quantity `number`: The quantity of the item.
  * vat `object`: The VAT details for the invoice line.
    * amount `number`: The amount of VAT for the invoice line.
    * country `string`: The ISO 3166 country of the VAT for the invoice line.
    * percentage `number`: The percentage of VAT for the invoice line.

### PurchaseInvoiceSender
* PurchaseInvoiceSender `object`
  * billing_contact [PurchaseInvoiceSenderBillingContact](#purchaseinvoicesenderbillingcontact)
  * city `string`: The city.
  * country `string`: The country.
  * county `string`: The county.
  * department `string`: The department who sent the invoice.
  * line1 `string`: The address
  * line2 `string`: The address, line 2
  * party_name `string`: The party who sent the invoice.
  * peppol_identifiers `array`
    * items [PeppolIdentifier](#peppolidentifier)
  * zip `string`: The zip code.

### PurchaseInvoiceSenderBillingContact
* PurchaseInvoiceSenderBillingContact `object`
  * email `string`: The email of the billing contact.
  * first_name `string`: The first name of the billing contact.
  * last_name `string`: The last name of the billing contact.

### PurchaseInvoiceUbl
* PurchaseInvoiceUbl `object`
  * guid `string`: The GUID of the invoice
  * legal_entity_id `integer`: The id of the LegalEntity the invoice was received for.
  * ubl `string`: The Base64 encoded UBL invoice.

### Shop
* Shop `object`
  * description `string`
  * id `integer`
  * legal_entities `array`
    * items [LegalEntityShop](#legalentityshop)
  * logo [Logos](#logos)
  * name `string`
  * purpose `string`: The purpose of the shop. Either "invoice" or "statement"

### ShopAccountInput
* ShopAccountInput `object`
  * email `string`: This is email address determines where the invoices for all ShopAccounts
  * external_user_id **required** `string`: The _external_user_id_ is what identifies the entity for which you create
  * password **required** `string`: The password for the account.
  * shop_id **required** `integer`: The id of the Shop the account is for.
  * username **required** `string`: The username for the account. The username needs to be unique in combination with the shop_id.

### ShopAccountRequestInput
* ShopAccountRequestInput `object`
  * external_user_id **required** `string`
  * password **required** `string`
  * request_name **required** `string`
  * request_url **required** `string`
  * username **required** `string`

### ShopAccountRequestResult
* ShopAccountRequestResult `object`
  * external_user_id `string`
  * id `integer`
  * request_name `string`
  * request_url `string`
  * username `string`

### ShopAccountRequestUpdate
* ShopAccountRequestUpdate `object`
  * password `string`
  * request_name `string`
  * request_url `string`
  * username `string`

### ShopAccountResult
* ShopAccountResult `object`
  * email `string`: See <<_openapi_shopaccountinput>>.
  * external_user_id `string`: See <<_openapi_shopaccountinput>>.
  * from_date `string`: The date from invoices will be collected. This field defaults to the first day of the month
  * id `integer`: The Storecove id for the ShopAccount
  * shop [Shop](#shop)
  * sign_in_error_confirmed `boolean`: Whether or not Storecove has detected and confirmed a sign-in failure. This field is reset
  * sign_in_error_confirmed_at `string`: The date on which the sign-in error was confirmed.
  * username `string`: See <<_openapi_shopaccountinput>>.

### ShopAccountUpdate
* ShopAccountUpdate `object`
  * email `string`: See <<_openapi_shopaccountinput>>.
  * password `string`: See <<_openapi_shopaccountinput>>.
  * username `string`: See <<_openapi_shopaccountinput>>.

### WidgetIdentification
* Widget Identification `object`: The identification for the identifier related to the Storecove Destination Configuration widget.
  * id **required** `string`: Your id for this organization. This should match the id that you use for the Storecove widget (if you use that).
  * legalEntityId **required** `integer`: The id of the LegalEntity this invoice should be sent for.


