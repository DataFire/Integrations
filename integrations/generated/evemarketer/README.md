# @datafire/evemarketer

Client library for EVEMarketer Marketstat

## Installation and Usage
```bash
npm install --save @datafire/evemarketer
```
```js
let evemarketer = require('@datafire/evemarketer').create();

evemarketer.marketstat.get({
  "typeid": []
}).then(data => {
  console.log(data);
});
```

## Description

EVEMarketer Marketstat API is almost compatible with EVE-Central's Marketstat API.

## Actions

### marketstat.get
XML Marketstat


```js
evemarketer.marketstat.get({
  "typeid": []
}, context)
```

#### Input
* input `object`
  * typeid **required** `array`: TypeID. Multiple TypeIDs can be specified in the following format (up to 200 TypeIDs per request):
  * regionlimit `integer`: Limit the statistics to a single region.
  * usesystem `integer`: Limit the statistics to a single solar system.

#### Output
* output [ExecAPI](#execapi)

### marketstat.post
XML Marketstat


```js
evemarketer.marketstat.post({
  "typeid": []
}, context)
```

#### Input
* input `object`
  * typeid **required** `array`: TypeID. Multiple TypeIDs can be specified in the following format (up to 200 TypeIDs per request):
  * regionlimit `integer`: Limit the statistics to a single region.
  * usesystem `integer`: Limit the statistics to a single solar system.

#### Output
* output [ExecAPI](#execapi)

### marketstat.json.get
JSON Marketstat


```js
evemarketer.marketstat.json.get({
  "typeid": []
}, context)
```

#### Input
* input `object`
  * typeid **required** `array`: TypeID. Multiple TypeIDs can be specified in the following format (up to 200 TypeIDs per request):
  * regionlimit `integer`: Limit the statistics to a single region.
  * usesystem `integer`: Limit the statistics to a single region.

#### Output
* output `array`
  * items [Type](#type)

### marketstat.json.post
JSON Marketstat


```js
evemarketer.marketstat.json.post({
  "typeid": []
}, context)
```

#### Input
* input `object`
  * typeid **required** `array`: TypeID. Multiple TypeIDs can be specified in the following format (up to 200 TypeIDs per request):
  * regionlimit `integer`: Limit the statistics to a single region.
  * usesystem `integer`: Limit the statistics to a single region.

#### Output
* output `array`
  * items [Type](#type)



## Definitions

### ExecAPI
* ExecAPI `object`
  * marketstat [MarketStatXML](#marketstatxml)
  * method `string`
  * version `string`

### ForQuery
* ForQuery `object`
  * bid `boolean`: is buy?
  * hours `integer`: always 0
  * minq `integer`: always 0
  * regions `array`: Region IDs
    * items `integer`
  * systems `array`: System IDs
    * items `integer`
  * types `array`: Type IDs
    * items `integer`

### MarketStatXML
* MarketStatXML `array`
  * items `object`
    * buy [TypeStatXML](#typestatxml)
    * sell [TypeStatXML](#typestatxml)

### Type
* Type `object`
  * buy [TypeStat](#typestat)
  * sell [TypeStat](#typestat)

### TypeStat
* TypeStat `object`
  * avg `number`: Average Price
  * fivePercent `number`
  * forQuery [ForQuery](#forquery)
  * generated `integer`: Generated at (UNIX Timestamp msec)
  * highToLow `boolean`
  * max `number`
  * median `number`: Median Price
  * min `number`
  * stdDev `number`: Standard Deviation
  * variance `number`
  * volume `integer`: Order Volume
  * wavg `number`: Weighted Average Price

### TypeStatXML
* TypeStatXML `object`
  * avg `number`: Weighted Average Price
  * max `number`: Maximum Price
  * median `number`: Median Price
  * min `number`: Minimum Price
  * percentile `number`: 5% Price
  * stddev `number`: Standard Deviation
  * volume `integer`: Order Volume


