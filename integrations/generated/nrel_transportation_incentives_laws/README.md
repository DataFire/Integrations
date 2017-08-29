# @datafire/nrel_transportation_incentives_laws

Client library for Transportation Laws and Incentives

## Installation and Usage
```bash
npm install --save datafire @datafire/nrel_transportation_incentives_laws
```

```js
let datafire = require('datafire');
let nrel_transportation_incentives_laws = require('@datafire/nrel_transportation_incentives_laws').create({
  api_key: "",
});

nrel_transportation_incentives_laws.v1.output_format.get({}).then(data => {
  console.log(data);
})
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

#### Parameters
* output_format (string) **required** - Response format
* limit (integer) - Limit the number of laws returned
* jurisdiction (string) - Return laws for the given Jurisdiction. Jurisdiction must be given as a two character state code (eg, 'CO' for Colorado). A single jurisdiction, or a comma-separate list of multiple jurisdiction, may be given.  Use the code 'US' for federal laws and the code 'DC' for Washington D.C.
* technology (string) - Search by the technology type. A single type, or a comma-separate list of multiple types, may be given. Values and what they stand for are as follows: 'BIOD' for Biodiesel, 'ETH' for Ethanol, 'NG' for Natural Gas, 'LPG' for Propane (LPG), 'HY' for Hydrogen Fuel Cells, 'EFFEC' for Fuel Economy / Efficiency, 'IR' for Idle Reduction, 'ELEC' for EVs, 'HEV' for HEVs, 'PHEV' for PHEVs, 'OTHER' for Other, 'AFTMKTCONV' for Aftermarket Conversions, and 'NEVS' for NEVs
* incentive_type (string) - Search by the incentive type. A single type, or a comma-separate list of multiple types, may be given. Values and what they stand for are as follows: 'GNT' for Grants, 'TAX' for Tax Incentives, 'LOANS' for Loans and Leases, 'RBATE' for Rebates, 'EXEM' for Exemptions, and 'OTHER' for Other.
* regulation_type (string) - Search by the regulation type. A single type, or a comma-separate list of multiple types, may be given. Values and what they stand for are as follows: 'REGIS' for Registration / Licensing, 'STD' for Fuel Production / Quality, 'DREST' for Driving / Idling, 'REQ' for Acquisition / Fuel Use, 'FUEL' for Fuel Taxes, 'RFS' for Renewable Fuel Standard / Mandate, 'OTHER' for Other, 'AIRQEMISSIONS' for Air Quality / Emissions, and 'CCEINIT' for Climate Change / Energy Initiatives
* user_type (string) - Search by the user type. A single type, or a comma-separate list of multiple types, may be given. Values and what they stand for are as follows: 'IND' for Vehicle Owner/Driver, 'FLEET' for Fleet Purchaser/Manager, 'STATION' for Fueling / TSE Infrastructure Owner, 'AFP' for Alternative Fuel Producer, 'AFS' for Alternative Fuel Dealer, 'PURCH' for Alternative Fuel Purchaser, 'MAN' for AFV Manufacturer/Retrofitter, and 'OTHER' for Other
* poc (boolean) - Include points of contacts in the return value.
* recent (boolean) - Return only recently added or updated laws and incentives
* expired (boolean) - Show only expired, repealed or archived laws and incentives.
* law_type (string) - Search by the law type. A single type, or a comma-separate list of multiple types, may be given. Values are as follows: 'STATEINC' for State Incentives, 'UPINC ' for Utility/Private Incentives, 'LAWREG' for Laws and Regulations, 'INC' for Incentives, 'PROG' for Programs, 'LUP' for Last Updated, 'OVIEW' for Overview, and 'HILITE' for Highlights
* keyword (string) - Search laws by keyword in title or text.
* local (boolean) - Show only local examples of laws and incentives.

### v1.category_list.output_format.get
Return the law categories for a given category type.


```js
nrel_transportation_incentives_laws.v1.category_list.output_format.get({
  "output_format": ""
}, context)
```

#### Parameters
* output_format (string) **required** - Response format
* type (string) - Search by the category type.

### v1.pocs.output_format.get
Get the points of contact for a given jurisdiction.


```js
nrel_transportation_incentives_laws.v1.pocs.output_format.get({
  "output_format": "",
  "jurisdiction": ""
}, context)
```

#### Parameters
* output_format (string) **required** - Response format
* jurisdiction (string) **required** - Return the points of contact for the given Jurisdiction. Jurisdiction must be given as a two character state code (eg, 'CO' for Colorado). A single jurisdiction, or a comma-separate list of multiple jurisdiction, may be given.  Use the code 'US' for federal laws and the code 'DC' for Washington D.C.

### v1.id.output_format.get
Fetch the details of a specific law given the law's ID.


```js
nrel_transportation_incentives_laws.v1.id.output_format.get({
  "output_format": "",
  "id": 0
}, context)
```

#### Parameters
* output_format (string) **required** - Response format
* id (integer) **required** - The id of the law that you are searching
* poc (boolean) - Include points of contacts in the return value.

