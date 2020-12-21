# @datafire/axesso_de

Client library for Axesso Api

## Installation and Usage
```bash
npm install --save @datafire/axesso_de
```
```js
let axesso_de = require('@datafire/axesso_de').create();

.then(data => {
  console.log(data);
});
```

## Description

Use this api to fetch information to Amazon products and more.

## Actions

### requestBuyRecommendation
request buy recommendations to a given product


```js
axesso_de.requestBuyRecommendation({
  "url": ""
}, context)
```

#### Input
* input `object`
  * url **required** `string`: The url of the requested product.

#### Output
* output [BuyRecommendationResponse](#buyrecommendationresponse)

### requestProduct
lookup product information


```js
axesso_de.requestProduct({
  "url": ""
}, context)
```

#### Input
* input `object`
  * url **required** `string`: The url of the requested product.
  * size `string`: Size parameter if available.

#### Output
* output [ProductDetailsResponse](#productdetailsresponse)

### keywordSearch
fetch results auf a keyword search on Amazon


```js
axesso_de.keywordSearch({
  "keyword": "",
  "domainCode": ""
}, context)
```

#### Input
* input `object`
  * keyword **required** `string`: keyword to search
  * domainCode **required** `string`: domain for the search
  * sortBy `string`: sort option
  * numberOfProducts `integer`: number of the results (max 20)

#### Output
* output [KeywordSearchResponse](#keywordsearchresponse)

### sortOptions
request available sort options to use in keyword search


```js
axesso_de.sortOptions(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [SortOptionResponse](#sortoptionresponse)



## Definitions

### BuyRecommendationResponse
* BuyRecommendationResponse `object`
  * buyRecommendations `array`
    * items `string`
  * numberOfProducts `integer`
  * responseMessage `string`
  * responseStatus `string`

### KeywordSearchResponse
* KeywordSearchResponse `object`
  * domainCode `string`
  * foundProducts `array`
    * items `string`
  * keyword `string`
  * numberOfProducts `integer`
  * responseMessage `string`
  * responseStatus `string`
  * sortStrategy `string`

### ProductDetailsResponse
* ProductDetailsResponse `object`
  * answeredQuestions `integer`
  * asin `string`
  * countReview `integer`
  * features `array`
    * items `string`
  * fulfilledBy `string`
  * manufacturer `string`
  * price `number`
  * priceSaving `string`
  * priceShippingInformation `string`
  * prime `boolean`
  * productRating `string`
  * productTitle `string`
  * responseMessage `string`
  * responseStatus `string`
  * retailPrice `number`
  * sizeSelection `array`
    * items `string`
  * soldBy `string`
  * warehouseAvailability `string`

### SortOptionResponse
* SortOptionResponse `object`
  * responseMessage `string`
  * responseStatus `string`
  * resultSize `integer`
  * sortOptions `array`
    * items `object`
      * order `integer`
      * sortName `string`
      * strategy `string`


