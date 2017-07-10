# @datafire/cloud_gov
<p>This API drives the <a href="https://discovery.gsa.gov">Discovery Market Research Tool</a>.
It contains information on the vendors that are part of the OASIS and OASIS Small Business contracting vehicles, such as their contracting history, their elligibility for contract awards, and their small business designations.
To learn more about the tool, please visit <a href="https://discovery.gsa.gov">Discovery</a> or see the README on our <a href="https://github.com/18F/mirage">GitHub repository</a>.</p>
<p><strong>Please note that the base path for this API is <code>https://api.data.gov/gsa/discovery/</code></strong></p>
<p>It requires an API key, obtainable at <a href="http://api.data.gov/">api.data.gov</a>.
It must be passed in the <code>api_key</code> parameter with each request.</p>

## Operation: List_Contracts
<p>This endpoint returns contract history from FPDS for a specific vendor. The vendor's DUNS number is a required parameter. You can also filter contracts by their NAICS code to find contracts relevant to a particular category.  </p>

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "duns": {
      "type": "string",
      "format": "string",
      "description": "A 9-digit DUNS number that uniquely identifies a vendor (required)."
    },
    "naics": {
      "type": "string",
      "format": "string",
      "description": "a six digit NAICS code used to filter by contracts with a certain NAICS"
    },
    "sort": {
      "type": "string",
      "format": "string",
      "description": "a field to sort on. Choices are date, status, agency, and amount"
    },
    "direction": {
      "type": "string",
      "format": "string",
      "description": "The sort direction of the results. Choices are asc or desc."
    },
    "page": {
      "type": "string",
      "format": "string",
      "description": "the page to start on. Results are paginated in increments of 100. Begins at page=1."
    }
  },
  "additionalProperties": false,
  "required": [
    "duns"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Metadata
<p>This endpoint returns metadata for the most recent data loads of SAM and FPDS data. It takes no parameters.  </p>

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: List_Naics
<p>This endpoint lists all of the NAICS codes that are relevant to the OASIS family of vehicles. It takes no parameters.  </p>

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: Get_Vendor
<p>This endpoint returns a single vendor by their 9 digit DUNS number. DUNS numbers can be looked up in the <a href="https://www.sam.gov">System for Award Management</a> by vendor name.  </p>

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "duns": {
      "type": "string",
      "format": "string",
      "description": "a nine digit DUNS number that uniquely identifies the vendor (required)"
    }
  },
  "additionalProperties": false,
  "required": [
    "duns"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: List_Vendors
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

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "naics": {
      "type": "string",
      "format": "string",
      "description": "a six digit NAICS code (required)"
    },
    "setasides": {
      "type": "array",
      "description": "a comma delimited list of two character setaside codes to filter by.  Ex. setasides=A6,A5  will filter by 8a and veteran owned business."
    },
    "vehicle": {
      "type": "string",
      "format": "string",
      "description": "Choices are either oasis or oasissb. Will filter vendors by their presence in either the OASIS unrestricted vehicle or the OASIS Small Business vehicle."
    }
  },
  "additionalProperties": false,
  "required": [
    "naics"
  ]
}
```
### Output Schema
```json
{}
```
