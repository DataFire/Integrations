# @datafire/consumerfinance_gov

Client library for The Consumer Financial Protection Bureau

## Installation and Usage
```bash
npm install --save @datafire/consumerfinance_gov
```
```js
let consumerfinance_gov = require('@datafire/consumerfinance_gov').create();

consumerfinance_gov.getDatasets(null).then(data => {
  console.log(data);
});
```

## Description

Learn more about home mortgage data, download the data yourself, or build new tools using our API.

## Actions

### getDatasets
Get a list of all datasets.


```js
consumerfinance_gov.getDatasets(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getDatasetHmda
Get metadata for this dataset.


```js
consumerfinance_gov.getDatasetHmda(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getConceptHmda
Get information about a particular concept in this dataset.


```js
consumerfinance_gov.getConceptHmda({
  "concept": ""
}, context)
```

#### Input
* input `object`
  * concept **required** `string`: Name of concept

#### Output
*Output schema unknown*

### querySliceHmda
Query a slice in this dataset.


```js
consumerfinance_gov.querySliceHmda({
  "slice": ""
}, context)
```

#### Input
* input `object`
  * slice **required** `string`: Name of slice
  * $select `string`: Fields to return, separated by commas.
  * $where `string`: Conditions to search for in the slice, in SQL WHERE style.
  * $group `string`: Fields to group by, summarizing the data, separated by commas.
  * $limit `integer`: Number of records to return, 100 by default. Enter 0 for no limit.
  * $offset `integer`: Number of records to skip.
  * $orderBy `string`: Fields to order by, separated by commas. ASC and DESC can be used to modify the order.
  * $callback `string`: JavaScript callback to invoke. Only useful with JSONP requests.

#### Output
* output [QueryResponse](#queryresponse)

### getSliceMetadataHmda
Get the metadata for a slice in this dataset.


```js
consumerfinance_gov.getSliceMetadataHmda({
  "slice": ""
}, context)
```

#### Input
* input `object`
  * slice **required** `string`: Name of slice

#### Output
*Output schema unknown*

### getDataset
Get metadata about a dataset.


```js
consumerfinance_gov.getDataset({
  "dataset": ""
}, context)
```

#### Input
* input `object`
  * dataset **required** `string`: Name of dataset

#### Output
*Output schema unknown*



## Definitions

### QueryResponse
* QueryResponse `object`: Response to a slice query.
  * size **required** `integer`
  * total **required** `integer`


