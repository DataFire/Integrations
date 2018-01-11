# @datafire/cloud_gov

Client library for Discovery Market Research

## Installation and Usage
```bash
npm install --save @datafire/cloud_gov
```
```js
let cloud_gov = require('@datafire/cloud_gov').create();

cloud_gov.List_Contracts({}).then(data => {
  console.log(data);
})
```

## Description

<p>This API drives the <a href="https://discovery.gsa.gov">Discovery Market Research Tool</a>.
It contains information on the vendors that are part of the OASIS and OASIS Small Business contracting vehicles, such as their contracting history, their elligibility for contract awards, and their small business designations.
To learn more about the tool, please visit <a href="https://discovery.gsa.gov">Discovery</a> or see the README on our <a href="https://github.com/18F/mirage">GitHub repository</a>.</p>
<p><strong>Please note that the base path for this API is <code>https://api.data.gov/gsa/discovery/</code></strong></p>
<p>It requires an API key, obtainable at <a href="http://api.data.gov/">api.data.gov</a>.
It must be passed in the <code>api_key</code> parameter with each request.</p>

## Actions

### List_Contracts
<p>This endpoint returns contract history from FPDS for a specific vendor. The vendor's DUNS number is a required parameter. You can also filter contracts by their NAICS code to find contracts relevant to a particular category.  </p>


```js
cloud_gov.List_Contracts({
  "duns": ""
}, context)
```

#### Input
* input `object`
  * duns **required** `string`: A 9-digit DUNS number that uniquely identifies a vendor (required).
  * naics `string`: a six digit NAICS code used to filter by contracts with a certain NAICS
  * sort `string`: a field to sort on. Choices are date, status, agency, and amount
  * direction `string`: The sort direction of the results. Choices are asc or desc.
  * page `string`: the page to start on. Results are paginated in increments of 100. Begins at page=1.

#### Output
*Output schema unknown*

### Metadata
<p>This endpoint returns metadata for the most recent data loads of SAM and FPDS data. It takes no parameters.  </p>


```js
cloud_gov.Metadata(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### List_Naics
<p>This endpoint lists all of the NAICS codes that are relevant to the OASIS family of vehicles. It takes no parameters.  </p>


```js
cloud_gov.List_Naics(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### Get_Vendor
<p>This endpoint returns a single vendor by their 9 digit DUNS number. DUNS numbers can be looked up in the <a href="https://www.sam.gov">System for Award Management</a> by vendor name.  </p>


```js
cloud_gov.Get_Vendor({
  "duns": ""
}, context)
```

#### Input
* input `object`
  * duns **required** `string`: a nine digit DUNS number that uniquely identifies the vendor (required)

#### Output
*Output schema unknown*

### List_Vendors
<p>This endpoint returns a list of vendors filtered by a NAICS code. The NAICS code maps to an OASIS pool and is used to retrieve vendors in that pool only.</p>
<p>OASIS pools are groupings of NAICS codes that have the same small business size standard. Because contracts solicited to OASIS vendors can only be issued to one pool, much of the data is presented as part of a pool grouping. Using the NAICS code is a shortcut, so that you don't have to explicitly map the NAICS code to a pool in OASIS yourself.</p>
<p>Vendors can also be filtered by a particular setaside. Valid values for the setasides are two-character codes which include:</p>
<ul>
<li>A6 (8(a))</li>
<li>XX (Hubzone)</li>
<li>QF (service disabled veteran owned)</li>
<li>A2 (women owned)</li>
<li>A5 (veteran owned)</li>
<li>27 (small disadvantaged business).  </li>
</ul>


```js
cloud_gov.List_Vendors({
  "naics": ""
}, context)
```

#### Input
* input `object`
  * naics **required** `string`: a six digit NAICS code (required)
  * setasides `array`: a comma delimited list of two character setaside codes to filter by.  Ex. setasides=A6,A5  will filter by 8a and veteran owned business.
  * vehicle `string`: Choices are either oasis or oasissb. Will filter vendors by their presence in either the OASIS unrestricted vehicle or the OASIS Small Business vehicle.

#### Output
*Output schema unknown*



## Definitions

*This integration has no definitions*
