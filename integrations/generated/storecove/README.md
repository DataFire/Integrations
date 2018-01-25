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

storecove.create_invoice_submission({
  "invoice_submission": {
    "mode": "",
    "supplierId": 0,
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
}).then(data => {
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
    "supplierId": 0,
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
  "invoice_recipient_preflight": {
    "supplierId": 0,
    "invoiceRecipient": {}
  }
}, context)
```

#### Input
* input `object`
  * invoice_recipient_preflight **required** [InvoiceRecipientPreflight](#invoicerecipientpreflight)

#### Output
* output [PreflightInvoiceRecipientResult](#preflightinvoicerecipientresult)

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
storecove.shops_index(null, context)
```

#### Input
*This action has no parameters*

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
  * amountExcludingVat **required** `number`: The amount excluding VAT. Should equal quantity x itemPrice (if these are both present). A difference of 5 cents or 1% between the calculated value and the provided value is allowed.
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
  * tax `object`: The tax for this invoice line.
    * amount **required** `number`: The amount of VAT. Should equal percentage x amountExcludingVat. A difference of 5 cents or 1% between the calculated value and the provided value is allowed.
    * country **required** [Country](#country)
    * percentage **required** `number`: The percentage VAT. This should be a valid VAT percentage in the country at the time of the issueDate of this invoice.

### InvoiceRecipient
* Recipient ids `object`: Ids that identify this invoice recipient. The list of identifiers should match with the accountingCustomerParty. I.e., you should not be sending an invoice for one accountingCustomerParty to the publicIdentifier of another.
  * emails `array`: The email addresses the invoice should be sent to if none of the other identifiers can be used
    * items `string`: The email address the invoice should be sent to
  * id `string`: Your id for this organization. This should match the id that you use for the Storecove widget (if you use that).
  * publicIdentifiers [PublicIdentifiers](#publicidentifiers)

### InvoiceRecipientPreflight
* Invoice recipient preflight `object`: Identifies the invoice recipient to preflight
  * invoiceRecipient **required** [InvoiceRecipient](#invoicerecipient)
  * supplierId **required** `integer`: The supplier id, provided by Storecove.

### InvoiceSubmission
* Invoice submission `object`: The invoice you want Storecove to process, with some meta-data.
  * document `string`: The invoice in PDF form. The document should be base64 encoded and the enocded string length should not exceed 2MB (2097152 bytes).
  * documentUrl `string`: A URL to retrieve the PDF document via HTTP GET. If the link expires, please allow at least 7 days of validity.
  * invoice **required** `object`: The invoice to send
    * accountingCostCode [AccountingCostCode](#accountingcostcode)
    * accountingCustomerParty **required** [AccountingCustomerParty](#accountingcustomerparty)
    * amountIncludingVat **required** `number`: amountIncludingVat is important because of rounding differences. In many invoices, the sum of the line item amounts excluding VAT and the VAT amounts is not equal to first summing the line items without VAT, and then applying VAT. The difference is automatically calculated and included in the electronic invoice, so the receiving accounting package can process the electronic invoice without problems.
    * billingReference `string`: A reference to a commercial invoice or corrective invoice of which the current invoice is a correction.
    * buyerReference `string`: A reference provided by the buyer used for internal routing of the document.
    * contractDocumentReference `string`: A reference to a contract or framework agreement that this invoice relates to.
    * documentCurrencyCode [CurrencyCode](#currencycode)
    * dueDate `string`: Format: yyyy-mm-dd.
    * invoiceLines **required** `array`: An array of invoice lines.
      * items [InvoiceLine](#invoiceline)
    * invoiceNumber **required** `string`: The invoice number you assigned to the invoice. The invoiceNumber should be unique for the supplierId and year of the issueDate. This means invoice numbers can be reused in different years, as is customary in some countries.
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
  * legalSupplierId `integer`: If a supplierId has more than one legal entity to send invoices from, specify the legal entity here. If you have not received one or more legal entities, don't supply this field.
  * mode **required** `string` (values: direct): The mode in which to run this invoice submission.
  * supplierId **required** `integer`: The supplier id, provided by Storecove.

### InvoiceSubmissionResult
* Invoice submission result `object`: The result of an invoice submission
  * guid `string`: A (V4) GUID for the invoice submission

### LegalEntity
* LegalEntity `object`
  * city `string`
  * country `string`
  * county `string`
  * identifiers `array`
    * items [LegalEntityIdentifier](#legalentityidentifier)
  * line1 `string`
  * line2 `string`
  * name `string`
  * zip `string`

### LegalEntityIdentifier
* LegalEntityIdentifier `object`
  * identifier `string`
  * scheme `string`
  * scheme_agency `string`

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

### PreflightInvoiceRecipientResult
* Preflight invoice recipient result `object`: The result of preflighting an invoice recipient
  * code `string` (values: ok, nok): The result code of the preflight request

### PublicIdentifier
* Public identifier `object`: A public identifier for this customer.
  * id **required** `string`: The actual identifier.
  * scheme **required** `string`: The scheme of the public identifier, e.g. chambre of commerce number (for The Netherlands: NL:KVK), VAT, IBAN, or NL:OIN (OIN is a Dutch government organizaton id). The full list can be found on https://joinup.ec.europa.eu/svn/peppol/TransportInfrastructure/PEPPOL_Policy%20for%20use%20of%20identifiers-300.pdf.

### PublicIdentifiers
* Public identifiers `array`: A list of public identifiers that uniquely identifiy this customer.
  * items [PublicIdentifier](#publicidentifier)

### Shop
* Shop `object`
  * description `string`
  * id `integer`
  * legal_entities `array`
    * items [LegalEntity](#legalentity)
  * logo [Logos](#logos)
  * name `string`

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


