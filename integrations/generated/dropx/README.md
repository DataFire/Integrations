# @datafire/dropx

Client library for DropX

## Installation and Usage
```bash
npm install --save @datafire/dropx
```
```js
let dropx = require('@datafire/dropx').create({
  api_key: ""
});

.then(data => {
  console.log(data);
});
```

## Description

dropX.io API provides programmatic access to the e-commerce intelligence data.

## Actions

### products.get
Returns product details


```js
dropx.products.get({
  "pids": ""
}, context)
```

#### Input
* input `object`
  * pids **required** `string`: search array of ids

#### Output
*Output schema unknown*

### products.link_search.get
Returns list of e-commerce product that are close to the one provided -- one from each provider


```js
dropx.products.link_search.get({
  "url": ""
}, context)
```

#### Input
* input `object`
  * url **required** `string`: URL must be a url encoded value
  * providers `string`: A valid e commerce website link(eg. www.flipkart.com or http://www.amazon.in) by a ',' seperated values to filter response by required e-commerce providers

#### Output
*Output schema unknown*

### products.link_search_v2.get
Returns list of e-commerce product that are close to the one provided -- one from each provider


```js
dropx.products.link_search_v2.get({
  "url": ""
}, context)
```

#### Input
* input `object`
  * url **required** `string`: URL must be a url encoded value
  * providers `string`: A valid e commerce website link(eg. www.flipkart.com or http://www.amazon.in) by a ',' seperated values to filter response by required e-commerce providers

#### Output
*Output schema unknown*

### products.search.get
Returns one unique result from every provider that dropx.io tracks


```js
dropx.products.search.get({
  "term": ""
}, context)
```

#### Input
* input `object`
  * term **required** `string`: search terms giving any title of products that are sold online
  * providers `string`: A valid e commerce website link(eg. www.flipkart.com or http://www.amazon.in) by a ',' seperated values to filter response by required e-commerce providers

#### Output
*Output schema unknown*

### products.search_v2.get
Returns one unique result from every provider that dropx.io tracks


```js
dropx.products.search_v2.get({
  "term": ""
}, context)
```

#### Input
* input `object`
  * term **required** `string`: search terms giving any title of products that are sold online
  * providers `string`: A valid e commerce website link(eg. www.flipkart.com or http://www.amazon.in) by a ',' seperated values to filter response by required e-commerce providers

#### Output
*Output schema unknown*

### products.title_search.get
Returns list of product ids


```js
dropx.products.title_search.get({
  "term": ""
}, context)
```

#### Input
* input `object`
  * term **required** `string`: search terms giving any title of products that are sold online

#### Output
*Output schema unknown*

### users.usage.get
Returns API request consumption details.


```js
dropx.users.usage.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*



## Definitions

*This integration has no definitions*
