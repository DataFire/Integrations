# @datafire/nrel_building_case_studies

Client library for High Performance Building Database

## Installation and Usage
```bash
npm install --save @datafire/nrel_building_case_studies
```
```js
let nrel_building_case_studies = require('@datafire/nrel_building_case_studies').create({
  api_key: ""
});

nrel_building_case_studies.project({}).then(data => {
  console.log(data);
})
```

## Description

The Buildings Database is a shared resource for the building industry. The Database, developed by the U.S. Department of Energy and the National Renewable Energy Laboratory (NREL), is a unique central repository of in-depth information and data on high-performance, green building projects across the United States and abroad.  

## Actions

### project
A filterable list of projects.


```js
nrel_building_case_studies.project({
  "output_format": ""
}, context)
```

#### Input
* input `object`
  * output_format **required** `string` (values: json, xml): Response Format
  * search `string`: Search Text
  * portal `string`: Portal ID
  * page `integer`: Page Number
  * city `string`: City
  * province `string`: State or Province (ex: 'CO', 'AZ')
  * region `string`: Climate Region.  Use integer from mapping (256: '1A: Very Hot - Humid', 257: '1B: Very Hot - Dry', 258: '2A: Hot - Humid', 259: '2B: Hot - Dry', 260: '3A: Warm - Humid', 261: '3B: Warm - Dry', 262: '3C: Warm - Marine', 263: '4A: Mixed - Humid', 264: '4B: Mixed - Dry', 265: '4C: Mixed - Marine', 266: '5A: Cool - Humid', 267: '5B: Cool - Dry', 268: '5C: Cool - Marine', 269: '6A: Cold - Humid', 270: '6B: Cold - Dry', 271: '7: Very Cold', 272: '8: Subarctic')

#### Output
*Output schema unknown*

### document
This API allows users to request metadata associated with the specific Document.


```js
nrel_building_case_studies.document({
  "output_format": "",
  "project_id": 0
}, context)
```

#### Input
* input `object`
  * output_format **required** `string` (values: json, xml): Response Format
  * project_id **required** `integer`: Project ID

#### Output
*Output schema unknown*



## Definitions

** No definitions **
