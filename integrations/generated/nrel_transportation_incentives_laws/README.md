# @datafire/nrel_transportation_incentives_laws
Query our database of State and Federal Laws and Incentives for Alternative Fuels

## Operation: v1.output_format.get
Return a full list of laws and incentives that match your query.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "output_format": {
      "type": "string",
      "description": "Response format",
      "enum": [
        "json",
        "xml",
        "csv"
      ]
    },
    "limit": {
      "type": "integer",
      "description": "Limit the number of laws returned"
    },
    "jurisdiction": {
      "type": "string",
      "description": "Return laws for the given Jurisdiction. Jurisdiction must be given as a two character state code (eg, 'CO' for Colorado). A single jurisdiction, or a comma-separate list of multiple jurisdiction, may be given.  Use the code 'US' for federal laws and the code 'DC' for Washington D.C."
    },
    "technology": {
      "type": "string",
      "description": "Search by the technology type. A single type, or a comma-separate list of multiple types, may be given. Values and what they stand for are as follows: 'BIOD' for Biodiesel, 'ETH' for Ethanol, 'NG' for Natural Gas, 'LPG' for Propane (LPG), 'HY' for Hydrogen Fuel Cells, 'EFFEC' for Fuel Economy / Efficiency, 'IR' for Idle Reduction, 'ELEC' for EVs, 'HEV' for HEVs, 'PHEV' for PHEVs, 'OTHER' for Other, 'AFTMKTCONV' for Aftermarket Conversions, and 'NEVS' for NEVs"
    },
    "incentive_type": {
      "type": "string",
      "description": "Search by the incentive type. A single type, or a comma-separate list of multiple types, may be given. Values and what they stand for are as follows: 'GNT' for Grants, 'TAX' for Tax Incentives, 'LOANS' for Loans and Leases, 'RBATE' for Rebates, 'EXEM' for Exemptions, and 'OTHER' for Other."
    },
    "regulation_type": {
      "type": "string",
      "description": "Search by the regulation type. A single type, or a comma-separate list of multiple types, may be given. Values and what they stand for are as follows: 'REGIS' for Registration / Licensing, 'STD' for Fuel Production / Quality, 'DREST' for Driving / Idling, 'REQ' for Acquisition / Fuel Use, 'FUEL' for Fuel Taxes, 'RFS' for Renewable Fuel Standard / Mandate, 'OTHER' for Other, 'AIRQEMISSIONS' for Air Quality / Emissions, and 'CCEINIT' for Climate Change / Energy Initiatives"
    },
    "user_type": {
      "type": "string",
      "description": "Search by the user type. A single type, or a comma-separate list of multiple types, may be given. Values and what they stand for are as follows: 'IND' for Vehicle Owner/Driver, 'FLEET' for Fleet Purchaser/Manager, 'STATION' for Fueling / TSE Infrastructure Owner, 'AFP' for Alternative Fuel Producer, 'AFS' for Alternative Fuel Dealer, 'PURCH' for Alternative Fuel Purchaser, 'MAN' for AFV Manufacturer/Retrofitter, and 'OTHER' for Other"
    },
    "poc": {
      "type": "boolean",
      "description": "Include points of contacts in the return value."
    },
    "recent": {
      "type": "boolean",
      "description": "Return only recently added or updated laws and incentives"
    },
    "expired": {
      "type": "boolean",
      "description": "Show only expired, repealed or archived laws and incentives."
    },
    "law_type": {
      "type": "string",
      "description": "Search by the law type. A single type, or a comma-separate list of multiple types, may be given. Values are as follows: 'STATEINC' for State Incentives, 'UPINC ' for Utility/Private Incentives, 'LAWREG' for Laws and Regulations, 'INC' for Incentives, 'PROG' for Programs, 'LUP' for Last Updated, 'OVIEW' for Overview, and 'HILITE' for Highlights"
    },
    "keyword": {
      "type": "string",
      "description": "Search laws by keyword in title or text."
    },
    "local": {
      "type": "boolean",
      "description": "Show only local examples of laws and incentives."
    }
  },
  "additionalProperties": false,
  "required": [
    "output_format"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/LawsResponse"
}
```
## Operation: v1.category_list.output_format.get
Return the law categories for a given category type.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "output_format": {
      "type": "string",
      "description": "Response format",
      "enum": [
        "json",
        "xml"
      ]
    },
    "type": {
      "type": "string",
      "description": "Search by the category type.",
      "enum": [
        "tech",
        "user",
        "regulation",
        "incentive"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "output_format"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CategoryResults"
}
```
## Operation: v1.pocs.output_format.get
Get the points of contact for a given jurisdiction.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "output_format": {
      "type": "string",
      "description": "Response format",
      "enum": [
        "json",
        "xml"
      ]
    },
    "jurisdiction": {
      "type": "string",
      "description": "Return the points of contact for the given Jurisdiction. Jurisdiction must be given as a two character state code (eg, 'CO' for Colorado). A single jurisdiction, or a comma-separate list of multiple jurisdiction, may be given.  Use the code 'US' for federal laws and the code 'DC' for Washington D.C."
    }
  },
  "additionalProperties": false,
  "required": [
    "output_format",
    "jurisdiction"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PocResults"
}
```
## Operation: v1.id.output_format.get
Fetch the details of a specific law given the law's ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "output_format": {
      "type": "string",
      "description": "Response format",
      "enum": [
        "json",
        "xml"
      ]
    },
    "id": {
      "type": "integer",
      "description": "The id of the law that you are searching"
    },
    "poc": {
      "type": "boolean",
      "description": "Include points of contacts in the return value."
    }
  },
  "additionalProperties": false,
  "required": [
    "output_format",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/LawResult"
}
```
