# @datafire/mastercard_bintableresource

Client library for MasterCard Bin Table Listing

## Installation and Usage
```bash
npm install --save @datafire/mastercard_bintableresource
```
```js
let mastercard_bintableresource = require('@datafire/mastercard_bintableresource').create();

.then(data => {
  console.log(data);
});
```

## Description

MasterCard Bin Table Listing API

## Actions

### binlisting.get
REST service will retrieve and return the BIN Table file to Merchants.


```js
mastercard_bintableresource.binlisting.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [BinTableResponse](#bintableresponse)



## Definitions

### BinTableResponse
* BinTableResponse `object`
  * data **required** `string`: BIN Table Listing file.

### NoResource
* NoResource `object`
  * ReasonCode `string`: RESOURCE_UNKOWN
  * Source `string`: System.
  * description `string`: Resource not found
  * recoverable `boolean`


