# @datafire/nrel_transportation_incentives_laws

Client library for Transportation Laws and Incentives

## Installation and Usage
```bash
npm install --save @datafire/nrel_transportation_incentives_laws
```
```js
let nrel_transportation_incentives_laws = require('@datafire/nrel_transportation_incentives_laws').create({
  api_key: ""
});

nrel_transportation_incentives_laws.v1.output_format.get({
  "output_format": ""
}).then(data => {
  console.log(data);
});
```

## Description

Query our database of State and Federal Laws and Incentives for Alternative Fuels

## Actions

### v1.output_format.get
Return a full list of laws and incentives that match your query.


```js
nrel_transportation_incentives_laws.v1.output_format.get({
  "output_format": ""
}, context)
```

#### Input
* input `object`
  * output_format **required** `string` (values: json, xml, csv): Response format
  * limit `integer`: Limit the number of laws returned
  * jurisdiction `string`: Return laws for the given Jurisdiction. Jurisdiction must be given as a two character state code (eg, 'CO' for Colorado). A single jurisdiction, or a comma-separate list of multiple jurisdiction, may be given.  Use the code 'US' for federal laws and the code 'DC' for Washington D.C.
  * technology `string`: Search by the technology type. A single type, or a comma-separate list of multiple types, may be given. Values and what they stand for are as follows: 'BIOD' for Biodiesel, 'ETH' for Ethanol, 'NG' for Natural Gas, 'LPG' for Propane (LPG), 'HY' for Hydrogen Fuel Cells, 'EFFEC' for Fuel Economy / Efficiency, 'IR' for Idle Reduction, 'ELEC' for EVs, 'HEV' for HEVs, 'PHEV' for PHEVs, 'OTHER' for Other, 'AFTMKTCONV' for Aftermarket Conversions, and 'NEVS' for NEVs
  * incentive_type `string`: Search by the incentive type. A single type, or a comma-separate list of multiple types, may be given. Values and what they stand for are as follows: 'GNT' for Grants, 'TAX' for Tax Incentives, 'LOANS' for Loans and Leases, 'RBATE' for Rebates, 'EXEM' for Exemptions, and 'OTHER' for Other.
  * regulation_type `string`: Search by the regulation type. A single type, or a comma-separate list of multiple types, may be given. Values and what they stand for are as follows: 'REGIS' for Registration / Licensing, 'STD' for Fuel Production / Quality, 'DREST' for Driving / Idling, 'REQ' for Acquisition / Fuel Use, 'FUEL' for Fuel Taxes, 'RFS' for Renewable Fuel Standard / Mandate, 'OTHER' for Other, 'AIRQEMISSIONS' for Air Quality / Emissions, and 'CCEINIT' for Climate Change / Energy Initiatives
  * user_type `string`: Search by the user type. A single type, or a comma-separate list of multiple types, may be given. Values and what they stand for are as follows: 'IND' for Vehicle Owner/Driver, 'FLEET' for Fleet Purchaser/Manager, 'STATION' for Fueling / TSE Infrastructure Owner, 'AFP' for Alternative Fuel Producer, 'AFS' for Alternative Fuel Dealer, 'PURCH' for Alternative Fuel Purchaser, 'MAN' for AFV Manufacturer/Retrofitter, and 'OTHER' for Other
  * poc `boolean`: Include points of contacts in the return value.
  * recent `boolean`: Return only recently added or updated laws and incentives
  * expired `boolean`: Show only expired, repealed or archived laws and incentives.
  * law_type `string`: Search by the law type. A single type, or a comma-separate list of multiple types, may be given. Values are as follows: 'STATEINC' for State Incentives, 'UPINC ' for Utility/Private Incentives, 'LAWREG' for Laws and Regulations, 'INC' for Incentives, 'PROG' for Programs, 'LUP' for Last Updated, 'OVIEW' for Overview, and 'HILITE' for Highlights
  * keyword `string`: Search laws by keyword in title or text.
  * local `boolean`: Show only local examples of laws and incentives.

#### Output
* output [LawsResponse](#lawsresponse)

### v1.category_list.output_format.get
Return the law categories for a given category type.


```js
nrel_transportation_incentives_laws.v1.category_list.output_format.get({
  "output_format": ""
}, context)
```

#### Input
* input `object`
  * output_format **required** `string` (values: json, xml): Response format
  * type `string` (values: tech, user, regulation, incentive): Search by the category type.

#### Output
* output [CategoryResults](#categoryresults)

### v1.pocs.output_format.get
Get the points of contact for a given jurisdiction.


```js
nrel_transportation_incentives_laws.v1.pocs.output_format.get({
  "output_format": "",
  "jurisdiction": ""
}, context)
```

#### Input
* input `object`
  * output_format **required** `string` (values: json, xml): Response format
  * jurisdiction **required** `string`: Return the points of contact for the given Jurisdiction. Jurisdiction must be given as a two character state code (eg, 'CO' for Colorado). A single jurisdiction, or a comma-separate list of multiple jurisdiction, may be given.  Use the code 'US' for federal laws and the code 'DC' for Washington D.C.

#### Output
* output [PocResults](#pocresults)

### v1.id.output_format.get
Fetch the details of a specific law given the law's ID.


```js
nrel_transportation_incentives_laws.v1.id.output_format.get({
  "output_format": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * output_format **required** `string` (values: json, xml): Response format
  * id **required** `integer`: The id of the law that you are searching
  * poc `boolean`: Include points of contacts in the return value.

#### Output
* output [LawResult](#lawresult)



## Definitions

### Category
* Category `object`: A category that the law applies to
  * category_type **required** `string`: The type of category. (E.g. tech, incentive, regulation, user)
  * code **required** `string`: The code used to identify the category
  * title **required** `string`: The full name of the category

### CategoryResults
* CategoryResults `object`
  * inputs **required** [Inputs](#inputs)
  * metadata **required** [Metadata](#metadata)
  * result **required** `array`: The array of law categories returned
    * items [FullCategory](#fullcategory)

### FullCategory
* FullCategory `object`
  * category_type **required** `string`: The type of category. (E.g. tech, incentive, regulation, user)
  * code **required** `string`: The code used to identify the category
  * help_text `string`: A short description of what the law category encompasses
  * sort_order **required** `string`: The sort order for the categories
  * title **required** `string`: The full name of the category

### Inputs


### Law
* Law `object`: This is a Law
  * agency `string`: The agency with primary responsibility for federal incentives/regulations.
  * amended_date `string`: The date the incentive/law/regulation was updated through new legislation or rulemaking.
  * archived_date `string`: The date that an incentive/law/regulation is no longer relevant to the database. This may include longstanding Executive Orders or laws requiring legislative studies that have been completed.
  * categories **required** `array`: The various law categories that apply to this law
    * items [Category](#category)
  * contacts `array`: The contacts for the given law, returned only if the parameter poc is true
    * items [Poc](#poc)
  * enacted_date `string`: The date the enacting legislation (if applicable) was signed into law.
  * expired_date `string`: The date the incentive/law/regulation is set to end.
  * id **required** `integer`: A unique identifier for this specific incentive/law/regulation.
  * is_recent `boolean`: The true or false value used to distinguish between recent federal executive actions (TRUE) and active incentives/laws/regulations (FALSE).
  * plaintext **required** `string`: Description of the incentive/law/regulation, including applicable legislative references, in <a href="https://guides.github.com/features/mastering-markdown/">markdown formatting</a>
  * recent_update_or_new `string`: An indicator if the last significant update was an update or the laws creation.
  * references **required** `array`: The URL associated with any bill or legislative reference included in the description.
    * items [LawReference](#lawreference)
  * repealed_date `string`: The date legislation is enacted or a rulemaking is finalized to repeal the incentive/law/regulation.
  * seq_num `integer`: The numerical value assigned to a description to show the order in which it is displayed online within a jurisdiction (state).
  * significant_update_date `string`: When the last significant update to the law was made.
  * state **required** `string`: The state in which the incentive/law/regulation was enacted and is active.
  * text **required** `string`: Description of the incentive/law/regulation, including applicable legislative references, html formated.
  * title **required** `string`: The brief title assigned to the incentive/law/regulation description.
  * topics **required** `array`: For local incentive/regulation descriptions, the category that the incentive/regulation falls under, described below: Infrastructure Requirements, Vehicle Purchase and Infrastructure Development Incentives, Fuel Use Incentives, Parking Incentives, Technical Assistance, Vehicle Acquisition Requirements, Promotion Initiatives, Idle Reduction Requirements, Renewable Fuels Mandates and Standards
    * items [LawTopics](#lawtopics)
  * type **required** `string`: The category that the incentive/law/regulation falls under, described below: -State Incentives, -Laws and Regulations, -Utility/Private Incentives
  * types **required** `array`: The types that apply to this law
    * items [LawType](#lawtype)

### LawReference
* LawReference `object`: The URL associated with any bill or legislative reference included in the description.
  * description **required** `string`: The context of the reference
  * url **required** `string`: The url linking to the reference.

### LawResult
* LawResult `object`
  * inputs **required** [Inputs](#inputs)
  * metadata **required** [Metadata](#metadata)
  * result **required** [Law](#law)

### LawTopics
* LawTopics `object`: For local incentive/regulation descriptions, the category that the incentive/regulation falls under, described below: Infrastructure Requirements, Vehicle Purchase and Infrastructure Development Incentives, Fuel Use Incentives, Parking Incentives, Technical Assistance, Vehicle Acquisition Requirements, Promotion Initiatives, Idle Reduction Requirements, Renewable Fuels Mandates and Standards
  * id **required** `integer`: The database id of the law topic
  * sort_order **required** `integer`: The sort order of the law topic
  * title **required** `string`: The name of the law topic

### LawType
* LawType `object`: The category that the incentive/law/regulation falls under, described below: -State Incentives, -Laws and Regulations, -Utility/Private Incentives
  * code **required** `string`: The code used to identify the law type
  * id **required** `integer`: The id of the law type
  * title **required** `string`: The name of the law type

### LawsResponse
* LawsResponse `object`
  * inputs **required** [Inputs](#inputs)
  * metadata **required** [Metadata](#metadata)
  * result **required** `array`: The array of laws returned
    * items [Law](#law)

### Metadata
* Metadata `object`: The identifying metadata.
  * count `integer`: If the request returns an array of results, this is the number of results returned in the array
  * version **required** `string`: This is the version of the api

### Poc
* Poc `object`
  * agency `string`: The agency that the contact represents
  * email `string`: The contacts email address
  * fax `string`: The contacts fax number
  * name **required** `string`: The name of the contact
  * state **required** `string`: The state in which the contact is based ('US' for Federal laws and 'DC' for the District of Columbia)
  * telephone `string`: The contacts phone number
  * title `string`: The job title of the contact
  * web_page `string`: The contacts webpage

### PocResults
* PocResults `object`
  * inputs **required** [Inputs](#inputs)
  * metadata **required** [Metadata](#metadata)
  * result **required** `array`: The array of Points of Contacts for the state requested
    * items [Poc](#poc)


