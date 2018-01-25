# @datafire/roaring

Client library for CompanyAPI

## Installation and Usage
```bash
npm install --save @datafire/roaring
```
```js
let roaring = require('@datafire/roaring').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

roaring.company_board_members.get({
  "countryCode": "",
  "companyId": ""
}).then(data => {
  console.log(data);
});
```

## Description



## Actions

### company_board_members.get



```js
roaring.company_board_members.get({
  "countryCode": "",
  "companyId": ""
}, context)
```

#### Input
* input `object`
  * countryCode **required** `string`: Country code for the company
  * companyId **required** `string`: Company identification for the company

#### Output
* output [CompanyBoardMembersResult](#companyboardmembersresult)

### company_board_members.post



```js
roaring.company_board_members.post({
  "countryCode": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * countryCode **required** `string`: Country code for the company
  * body **required** [CompanyLookupRequestBody](#companylookuprequestbody)

#### Output
* output [CompanyBoardMembersMulti](#companyboardmembersmulti)

### company_credit_decision.get



```js
roaring.company_credit_decision.get({
  "countryCode": "",
  "companyId": "",
  "template": ""
}, context)
```

#### Input
* input `object`
  * countryCode **required** `string`: Country code for the company
  * companyId **required** `string`: Company identification for the company
  * template **required** `string`: Template for credit decision

#### Output
* output [CompanyCreditDecisionResult](#companycreditdecisionresult)

### company_economy_overview.get



```js
roaring.company_economy_overview.get({
  "countryCode": "",
  "companyId": ""
}, context)
```

#### Input
* input `object`
  * countryCode **required** `string`: Country code for the company
  * companyId **required** `string`: Company identification for the company

#### Output
* output [CompanyEconomyOverviewResult](#companyeconomyoverviewresult)

### company_economy_overview.post



```js
roaring.company_economy_overview.post({
  "countryCode": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * countryCode **required** `string`: Country code for the company
  * body **required** [CompanyLookupRequestBody](#companylookuprequestbody)

#### Output
* output [CompanyEconomyOverviewMulti](#companyeconomyoverviewmulti)

### company_event.post



```js
roaring.company_event.post({
  "countryCode": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * countryCode **required** `string`: Country code for the company
  * body **required** [CompanyEventRequestBody](#companyeventrequestbody)

#### Output
* output [CompanyEventResult](#companyeventresult)

### company_overview.get



```js
roaring.company_overview.get({
  "countryCode": "",
  "companyId": ""
}, context)
```

#### Input
* input `object`
  * countryCode **required** `string`: Country code for the company
  * companyId **required** `string`: Company identification for the company

#### Output
* output [CompanyOverviewResult](#companyoverviewresult)

### company_overview.post



```js
roaring.company_overview.post({
  "countryCode": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * countryCode **required** `string`: Country code for the company
  * body **required** [CompanyLookupRequestBody](#companylookuprequestbody)

#### Output
* output [CompanyOverviewMulti](#companyoverviewmulti)

### company_signatory.get



```js
roaring.company_signatory.get({
  "countryCode": "",
  "companyId": ""
}, context)
```

#### Input
* input `object`
  * countryCode **required** `string`: Country code for the company
  * companyId **required** `string`: Company identification for the company

#### Output
* output [CompanySignatoryResult](#companysignatoryresult)

### company_signatory.post



```js
roaring.company_signatory.post({
  "countryCode": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * countryCode **required** `string`: Country code for the company
  * body **required** [CompanyLookupRequestBody](#companylookuprequestbody)

#### Output
* output [CompanySignatoryMulti](#companysignatorymulti)

### company_simple_search.get



```js
roaring.company_simple_search.get({
  "countryCode": ""
}, context)
```

#### Input
* input `object`
  * countryCode **required** `string`: Country code for the company
  * companyName `string`: Company name
  * town `string`: Town

#### Output
*Output schema unknown*



## Definitions

### BadRequest
* BadRequest `object`: Returned when something is wrong in the request, e.g. too many entities are requested or arguments are missing
  * error `string`
  * message `string`

### CompanyBoardMembersMulti
* CompanyBoardMembersMulti `object`
  * companies `array`
    * items [CompanyBoardMembersResult](#companyboardmembersresult)
  * responseInfo [ResponseInfo](#responseinfo)

### CompanyBoardMembersResult
* CompanyBoardMembersResult `object`: Roaring Apps company board members lookup. list contains all possible fields returned
  * boardMembers `array`: Array of board members for the requested company
    * items `object`
      * boardMemberCompanyId `string`
      * firstName `string`
      * fromDate `string`
      * fullName `string`
      * givenName `string`
      * middleName `string`
      * personalNumber `string`
      * roleCode `string`
      * roleName `string`
      * surName `string`
      * toDate `string`
  * changeDate `string`
  * companyId `string`

### CompanyCreditDecisionResult
* CompanyCreditDecisionResult `object`: Roaring Apps company credit decision
  * address `string`
  * companyId `string`: Company identifier
  * rejections [CompanyRejection](#companyrejection)
  * statusCode `string`
  * statusText `string`
  * town `string`
  * zipCode `string`

### CompanyEconomyOverviewMulti
* CompanyEconomyOverviewMulti `object`
  * companies `array`
    * items [CompanyEconomyOverviewResult](#companyeconomyoverviewresult)
  * responseInfo [ResponseInfo](#responseinfo)

### CompanyEconomyOverviewResult
* CompanyEconomyOverviewResult `object`: Roaring Apps company economy overview in a lookup. list contains all possible fields returned
  * bsCashAndBankBalances `string`
  * bsShareCapital `string`
  * bsTotalAssets `string`
  * bsTotalEquity `string`
  * changeDate `string`
  * companyId `string`
  * kpiNetMarginPercent `string`
  * kpiQuickRatioPercent `string`
  * kpiSolidityPercent `string`
  * nbrOfEmployees `string`
  * nbrOfEmployeesInterval `string`
  * nbrOfEmployeesOfficeInterval `string`
  * netTurnover `string`
  * plNetIncome `string`
  * plOperatingProfit `string`
  * plProfitLossAfterFinItems `string`
  * turnoverInterval `string`
  * turnoverPerEmployee `string`

### CompanyEventRequestBody
* CompanyEventRequestBody `object`
  * requests `array`
    * items `object`
      * companyId `string`: Company identifier
      * date `string`: Earliest date to fetch events for

### CompanyEventResult
* CompanyEventResult `object`: Roaring Apps company event lookup. list contains all possible fields returned
  * responses `array`: Array of events for the requested companies
    * items `object`
      * changeDate `string`: Date for when the event occurred
      * code `string`: Change code for the event
      * companyId `string`: Company identifier
      * dataSet `array`: List of all Roaring datasets affected by the event
        * items `string`

### CompanyLookupRequestBody
* CompanyLookupRequestBody `object`
  * companyIds `array`
    * items `string`

### CompanyOverviewMulti
* CompanyOverviewMulti `object`
  * companies `array`
    * items [CompanyOverviewResult](#companyoverviewresult)
  * responseInfo [ResponseInfo](#responseinfo)

### CompanyOverviewResult
* CompanyOverviewResult `object`: Roaring Apps company overview in a lookup. list contains all possible fields returned by either of the api verb calls
  * address `string`: Postal address, street/P.O BOX
  * changeDate `string`: Date for when the record was last changed 
  * coAddress `string`: Postal address, C/O address
  * commune `string`: Postal address, commune name
  * companyHolder `string`: Name of company holder
  * companyId `string`: Company identifier (company registration number / organization number)
  * companyName `string`: Company name
  * companyRegistrationDate `string`: Company registration date
  * county `string`: Postal address, county
  * email `string`: Email address
  * employerContributionReg `string`: Company is registererd for employer contribution tax (Arb.avg Sweden)
  * faxNumber `string`: Fax number
  * industryCode `string`: Company main industry, NACE code
  * industryText `string`: Company main industry, NACE text
  * legalGroupCode `string`: Company type code
  * legalGroupText `string`: Company type text
  * numberCompanyUnits `integer`: Number of company units/workplaces
  * numberEmployees `string`: Number of employees (pcs)
  * phoneNumber `string`: Telephone number
  * preliminaryTaxReg `string`: Company is approved for preliminary tax (F-skatt Sweden)
  * severalCompanyName `boolean`: Indicates if the company have more than one active name
  * statusCode `string`: Company status code
  * statusDateFrom `string`: Company status date from
  * statusTextDetailed `string`: Company status text detailed
  * statusTextHigh `string`: Company status text
  * topDirectorFunction `string`: Top director's function
  * topDirectorName `string`: Top director's name
  * town `string`: Postal address, town
  * vatReg `string`: Company is registered for VAT (MOMS Sweden)
  * vepChangedDate `string`: Show the latest date any of preliminaryTaxReg, employerContributionReg or vatReg has had a change
  * visitAddress `string`: Visiting address, street name, street number and unit
  * visitCommune `string`: Visiting address, commune
  * visitCounty `string`: Visiting address, county
  * visitStreet `string`: Visiting address, street
  * visitStreetNumber `string`: Visiting address, number
  * visitStreetUnit `string`: Visiting address, unit
  * visitTown `string`: Visiting address, town
  * visitZipCode `string`: Visiting address, zip code
  * webAddress `string`: Web address
  * zipCode `string`: Postal address, zipcode

### CompanyRejection
* CompanyRejection `object`: Credit decision rejection
  * causeOfReject `string`
  * rejectComment `string`
  * rejectText `string`

### CompanySignatoryMulti
* CompanySignatoryMulti `object`
  * companies `array`
    * items [CompanySignatoryResult](#companysignatoryresult)
  * responseInfo [ResponseInfo](#responseinfo)

### CompanySignatoryResult
* CompanySignatoryResult `object`: Roaring Apps company signatory in a lookup. list contains all possible fields returned
  * changeDate `string`: date for when the result signatory was set
  * companyId `string`: Company identifier
  * companySignatory `string`: Signatory for the company

### NotFound
* NotFound `object`: Requested resource could not be found
  * error `string`
  * message `string`

### ResponseInfo
* ResponseInfo `object`
  * hitCount `integer`: Number of companyIds in response (companyIds that could be found)
  * noMatchIds `array`: Array of companyIds that was in request but could not be matched
    * items `string`
  * requestCount `integer`: Number of requested companyIds

### ServerError
* ServerError `object`: Internal server error
  * error `string`
  * message `string`


