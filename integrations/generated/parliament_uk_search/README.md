# @datafire/parliament_uk_search

Client library for UK Parliament Search Service

## Installation and Usage
```bash
npm install --save @datafire/parliament_uk_search
```
```js
let parliament_uk_search = require('@datafire/parliament_uk_search').create();

.then(data => {
  console.log(data);
});
```

## Description

Performs search on parliament.uk domain. Implements [OpenSearch specification](https://github.com/dewitt/opensearch). Throttled at 10 requests per second per IP address.

## Actions

### description.get
OpenSearch description document


```js
parliament_uk_search.description.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### query.get
Search results


```js
parliament_uk_search.query.get({
  "q": ""
}, context)
```

#### Input
* input `object`
  * q **required** `string`
  * start `number`
  * count `number`
  * subdomains `string`
  * inUrlPrefixes `string`

#### Output
*Output schema unknown*

### query.extension.get
Search results


```js
parliament_uk_search.query.extension.get({
  "extension": "",
  "q": ""
}, context)
```

#### Input
* input `object`
  * extension **required** `string` (values: atom, rss, html, json): extension
  * q **required** `string`
  * start `number`
  * count `number`
  * subdomains `string`
  * inUrlPrefixes `string`

#### Output
*Output schema unknown*



## Definitions

*This integration has no definitions*
