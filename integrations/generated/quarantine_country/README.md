# @datafire/quarantine_country

Client library for Coronavirus API

## Installation and Usage
```bash
npm install --save @datafire/quarantine_country
```
```js
let quarantine_country = require('@datafire/quarantine_country').create();

.then(data => {
  console.log(data);
});
```

## Description

Coronavirus API with free COVID-19 live updates. The best free coronavirus API and COVID-19 update source. Programmatically access live corona virus updates for statistics with historical data, maps, charts, graphs. COVID-19 API and corona virus live updates.

## Actions

### spots.day.get
Resolve change chart by day


```js
quarantine_country.spots.day.get({
  "region": ""
}, context)
```

#### Input
* input `object`
  * region **required** `string`: Region short name
  * date `string`: Date to query spots on

#### Output
* output [SpotsResponse](#spotsresponse)

### spots.month.get
Resolve change chart for week


```js
quarantine_country.spots.month.get({
  "region": ""
}, context)
```

#### Input
* input `object`
  * region **required** `string`: Region short name
  * date `string`: Date to query spots on

#### Output
* output [SpotsResponse](#spotsresponse)

### spots.week.get
Resolve change chart for week


```js
quarantine_country.spots.week.get({
  "region": ""
}, context)
```

#### Input
* input `object`
  * region **required** `string`: Region short name
  * date `string`: Date to query spots on

#### Output
* output [SpotsResponse](#spotsresponse)

### spots.year.get
Resolve change chart for week


```js
quarantine_country.spots.year.get({
  "region": ""
}, context)
```

#### Input
* input `object`
  * region **required** `string`: Region short name
  * date `string`: Date to query spots on

#### Output
* output [SpotsResponse](#spotsresponse)

### summary.latest.get
Get latest coronavirus situation report


```js
quarantine_country.summary.latest.get({}, context)
```

#### Input
* input `object`
  * date `string`: Date of the report

#### Output
* output [ReportResponse](#reportresponse)

### summary.region.get
Resolve report for region


```js
quarantine_country.summary.region.get({
  "region": ""
}, context)
```

#### Input
* input `object`
  * region **required** `string`: Region short name
  * date `string`: Date of the report

#### Output
* output [ReportResponse](#reportresponse)



## Definitions

### Report
* Report `object`
  * active_cases `integer`
  * change [Report](#report)
  * death_ratio `number`: Dead / Total cases
  * deaths `integer`
  * name `string`
  * recovered" `integer`
  * recovery_ratio `number`: Recovered / Total cases
  * total_cases `integer`

### ReportResponse
* ReportResponse `object`
  * data `object`
    * change [Report](#report)
    * generated_on `integer`: Timestamp report been updated at
    * regions `object`
    * summary [Report](#report)
  * status `integer`
  * type `string` (values: stack, collection, pagination)

### SpotsResponse
* SpotsResponse `object`
  * data `object`
  * status `integer`
  * type `string` (values: stack, collection, pagination)


