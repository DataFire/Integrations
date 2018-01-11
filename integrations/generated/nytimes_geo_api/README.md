# @datafire/nytimes_geo_api

Client library for Geographic

## Installation and Usage
```bash
npm install --save @datafire/nytimes_geo_api
```
```js
let nytimes_geo_api = require('@datafire/nytimes_geo_api').create({
  apikey: ""
});

nytimes_geo_api.query.json.get({}).then(data => {
  console.log(data);
})
```

## Description

The Geographic API extends the Semantic API, using a linked data approach to enhance location concepts used in The New York Times' controlled vocabulary and data resources which combine them with the GeoNames database, an authoritative and free to use database of global geographical places, names and features.


## Actions

### query.json.get
Geographic API


```js
nytimes_geo_api.query.json.get({}, context)
```

#### Input
* input `object`
  * name `string`: A displayable name for the specified place.
  * latitude `string`: The latitude of the specified place.
  * longitude `string`: The longitude of the specified place.
  * elevation `integer`: The elevation of the specified place, in meters.
  * sw `string`: Along with ne, forms a bounded box using the longitude and latitude coordinates specified as the southwest corner. The search results are limited to the resulting box. Two float values, separated by a comma `latitude,longitude` <br/> The ne parameter is required to use this parameter.
  * query `string`: Search keywords to perform a text search on the fields: web_description, event_name and venue_name. 'AND' searches can be performed by wrapping query terms in quotes. If you do not specify a query, all results will be returned.
  * filter `string`: Filters search results based on the facets provided.  For more information on the values you can filter on, see Facets.
  * date_range `string`: Start date to end date in the following format- YYYY-MM-DD:YYYY-MM-DD
  * facets `integer` (values: 0, 1): When facets is set to 1, a count of all facets will be included in the response.
  * sort `string`: Sorts your results on the fields specified. <br/> `sort_value1+[asc | desc],sort_value2+[asc|desc],[...]`<br/> Appending +asc to a facet or response will sort results on that value in ascending order. Appending +desc to a facet or response  will sort results in descending order. You can sort on multiple fields. You can sort on any facet. For the list of responses you can sort on, see the Sortable Field column in the Response table. <br/><br/>If you are doing a spatial search with the ll parameter, you can also sort by the distance from the center of the search: dist+[asc | desc] <br/> **Note:** either +asc or +desc is required when using the sort parameter.
  * limit `integer`: Limits the number of results returned
  * offset `integer`: Sets the starting point of the result set

#### Output
* output `object`
  * results `array`
    * items [Event](#event)



## Definitions

### Event
* Event `object`
  * city `string`
  * critic_name `string`
  * event_detail_url `string`
  * event_id `integer`
  * event_name `string`
  * event_schedule_id `integer`
  * festival `boolean`
  * film_rating `boolean`
  * free `boolean`
  * kid_friendly `boolean`
  * last_chance `boolean`
  * last_modified `string`
  * long_running_show `boolean`
  * previews_and_openings `boolean`
  * recur_days `array`
    * items `string`
  * recurring_start_date `string`
  * state `string`
  * times_pick `boolean`
  * web_description `string`


