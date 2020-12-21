# @datafire/data_gov

Client library for Regulations.gov

## Installation and Usage
```bash
npm install --save @datafire/data_gov
```
```js
let data_gov = require('@datafire/data_gov').create({
  api_key: ""
});

.then(data => {
  console.log(data);
});
```

## Description

Provides public users access to federal regulatory content.

## Actions

### docket
Returns Docket information


```js
data_gov.docket({
  "response_format": "",
  "docketId": ""
}, context)
```

#### Input
* input `object`
  * response_format **required** `string` (values: json, xml): Format
  * docketId **required** `string`: Docket ID

#### Output
*Output schema unknown*

### document
Returns Document information


```js
data_gov.document({
  "response_format": ""
}, context)
```

#### Input
* input `object`
  * response_format **required** `string` (values: json, xml): Format
  * documentId `string`: FDMS Document ID
  * federalRegisterNumber `string`: Federal Register Document Number

#### Output
*Output schema unknown*

### documents
This API allows users to build a query based on any of the parameters below.  If you have trouble building queries, you may wish to try them through the <a href="http://www.regulations.gov/#!advancedSearch">Advanced Search</a> page on the Regulations.gov website.


```js
data_gov.documents({
  "response_format": ""
}, context)
```

#### Input
* input `object`
  * response_format **required** `string` (values: json, xml): Format
  * countsOnly `integer` (values: 0, 1): Counts Only: <ul><li>1 (will return only the document count for a search query)</li><li>0 (will return documents as well)</li></ul>
  * encoded `integer` (values: 0, 1): Encoded: <ul><li>1 (will accept Regulations.gov style encoded parameters)</li><li>0 (will not accept such encoded parameters)</li></ul>
  * s `string`: Keyword(s)
  * dct `string` (values: N, PR, FR, O, SR, PS): Document Type: <ul><li>N: Notice</li><li>PR: Proposed Rule</li><li>FR: Rule</li><li>O: Other</li><li>SR: Supporting & Related Material</li><li>PS: Public Submission</li></ul>
  * dktid `string`: Valid Docket ID (ex. SEC-2012-0044)
  * dkt `string` (values: N, R): Docket Type: <ul><li>R: Rulemaking</li><li>N: Nonrulemaking</li></ul><p>A Docket Type is either Rulemaking or Nonrulemaking. A Rulemaking docket includes the type of regulation that establishes a rule. While a Non-Rulemaking docket does not include a rule.</p>
  * cp `string` (values: O, C): Comment Period: <ul><li>O: Open</li><li>C: Closed</li></ul>
  * a `string`: Federal Agency: List of accepted Federal Agency values. This field allows multiple values. Ex. a=FMCSA%252BEPA%252BFDA
  * rpp `string` (values: 10, 25, 100, 500, 1000): Results Per Page 10, 25, 100, 500, 1,000.  Results per page may not exceed 1,000.
  * po `integer`: Enter the page offset (always starts with 0). This is used in conjunction with results per page to provide large data sets. For example, if a search produces 82 results and the result per page is set to 25, this will generate 4 pages. 3 pages will have 25 results and the last page will have 7 results. Page offset values for each page will be: <pre>Page 1: po=0 Page 2: po=25 Page 3: po=50 Page 4: po=75</pre> The total number of pages is [total results/results per page] and page offset for page X is [X-1 * results per page]
  * cs `integer` (values: 0, 3, 15, 30, 90): Comment Period Closing Soon: <ul><li>0 (closing today)</li><li>3 (closing within 3 days)</li><li>15 (closing within 15 days)</li><li>30 (closing within 30 days)</li><li>90 (closing within 90 days)</li></ul>
  * np `integer` (values: 0, 3, 15, 30, 90): Newly Posted: <ul><li>0 (posted today)</li><li>3 (posted within last 3 days)</li><li>15 (posted within last 15 days)</li><li>30 (posted within last 30 days)</li><li>90 (posted within last 90 days)</li></ul>  For periods of time beyond 90-days, please use a date range with the Posted Date parameter.
  * cmsd `string`: Comment Period Start Date: Enter a date in the form of MM/DD/YY. Note: If the Comment Period End Date is also provided, then ensure the Comment Period Start date is earlier.
  * cmd `string`: Comment Period End Date: Enter a date in the form of MM/DD/YY. Note: If the Comment Period Start Date is also provided, then ensure the Comment Period End date is after.<br/>* Comment Period Start and End Dates are mutually exclusive with the 'closing soon' parameter. If both are provided, 'closing soon' will be ignored.
  * crd `string`: Creation Date: Enter a date in the form of MM/DD/YY. Accepts a single date or a date range. Ex. <code>crd=11/06/13-03/06/14</code>
  * rd `string`: Received Date: Enter a date in the form of MM/DD/YY. Accepts a single date or a date range. Ex. <code>rd=11/06/13-03/06/14</code>
  * pd `string`: Posted Date: Enter a date in the form of MM/DD/YY. Accepts a single date or a date range. Ex. <code>pd=11/06/13-03/06/14</code>
  * cat `string` (values: AD, AEP, BFS, CT, LES, EELS, EUMM, HCFP, PRE, ITT): Document Category: <ul><li>AD (Aerospace and Transportation)</li> <li>AEP (Agriculture, Environment, and Public Lands)</li> <li>BFS (Banking and Financial)</li> <li>CT (Commerce and International)</li> <li>LES (Defense, Law Enforcement, and Security)</li> <li>EELS (Education, Labor, Presidential, and Government Services)</li> <li>EUMM (Energy, Natural Resources, and Utilities)</li> <li>HCFP (Food Safety, Health, and Pharmaceutical)</li> <li>PRE (Housing, Development, and Real Estate)</li> <li>ITT (Technology and Telecommunications)</li></ul>
  * sb `string` (values: docketId, docId, title, postedDate, agency, documentType, submitterName, organization): Sort By: <ul><li>docketId (Docket ID)</li><li>docId (Document ID)</li><li>title (Title)</li><li>postedDate (Posted Date)</li><li>agency (Agency)</li><li>documentType (Document Type)</li><li>submitterName (Submitter Name)</li><li>organization (Organization)</li></ul> Sort Order is REQUIRED if this parameter is included.
  * so `string` (values: ASC, DESC): Sort Order: <ul><li>ASC: Ascending</li><li>DESC: Descending</li></ul>
  * dktst `string`: Docket Subtype: Only one docket subtype at a time may be selected. One or more agency values must be part of the request. Only values valid for the selected agency will be returned.
  * dktst2 `string`: Docket Sub-subtype: Only one docket sub-subtype at a time may be selected. One or more agency values must be part of the request. Only values valid for the selected agency will be returned.
  * docst `string`: Document Subtype: Single or multiple document subtypes may be included.  Multiple values should be passed as follows: <code>docst=%20Certificate+of+Service%252BCorrespondence</code>

#### Output
*Output schema unknown*



## Definitions

*This integration has no definitions*
