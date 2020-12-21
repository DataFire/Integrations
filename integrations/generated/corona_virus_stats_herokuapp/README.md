# @datafire/corona_virus_stats_herokuapp

Client library for COVID19 Stats

## Installation and Usage
```bash
npm install --save @datafire/corona_virus_stats_herokuapp
```
```js
let corona_virus_stats_herokuapp = require('@datafire/corona_virus_stats_herokuapp').create({
  Bearer: ""
});

.then(data => {
  console.log(data);
});
```

## Description

Free API documentation to get Real time corona virus stats

## Actions

### cases_search
search a country


```js
corona_virus_stats_herokuapp.cases_search({}, context)
```

#### Input
* input `object`
  * search `string`: A search term.
  * page `integer`: Inform the page. Starting with 1. Default: 1
  * limit `integer`: Limit per page, Default: 20.

#### Output
* output `object`
  * count **required** `integer`
  * next `string`
  * previous `string`
  * results **required** `array`
    * items [CountryStats](#countrystats)

### cases.general_stats.get
Get the general stats


```js
corona_virus_stats_herokuapp.cases.general_stats.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [GeneralStats](#generalstats)

### docs_list



```js
corona_virus_stats_herokuapp.docs_list(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*



## Definitions

### CountryStats
* CountryStats `object`
  * active_cases `integer`
  * cases_per_mill_pop `number`
  * country **required** `string`
  * flag `string`
  * last_update `string`
  * new_cases `integer`
  * new_deaths `integer`
  * serious_critical `integer`
  * total_cases `integer`
  * total_deaths `integer`
  * total_recovered `string`

### GeneralStats
* GeneralStats `object`
  * cases_with_outcome **required** `integer`
  * created_at `string`
  * critical_condition_active_cases **required** `integer`
  * currently_infected **required** `integer`
  * death_cases **required** `integer`
  * death_closed_cases **required** `integer`
  * deleted `boolean`
  * id `string`
  * last_update **required** `string`
  * mild_condition_active_cases **required** `integer`
  * recovered_closed_cases **required** `integer`
  * recovery_cases **required** `integer`
  * total_cases **required** `integer`
  * updated_at `string`


