# @datafire/ldap

Client library for LDAP - Lightweight Directory Access Protocol

## Installation and Usage
```bash
npm install --save @datafire/ldap
```
```js
let ldap = require('@datafire/ldap').create({
  host: "",
  dn: "",
  password: ""
});

.then(data => {
  console.log(data);
});
```

## Description

The Lightweight Directory Access Protocol is an open, vendor-neutral, industry standard application protocol for accessing and maintaining distributed directory information services over an Internet Protocol (IP) network.

## Actions

### add



```js
ldap.add({
  "dn": "",
  "entry": {}
}, context)
```

#### Input
* input `object`
  * dn **required** `string`: Distinguished Name, e.g. cn=foo, o=example
  * entry **required** `object`
    * cn `string`: Common Name
    * sn `string`: Surname
    * email `array`
      * items `string`
    * objectclass `string`

#### Output
* output `string`

### compare



```js
ldap.compare({
  "dn": "",
  "attribute": "",
  "value": ""
}, context)
```

#### Input
* input `object`
  * dn **required** `string`: Distinguished Name, e.g. cn=foo, o=example
  * attribute **required** `string`
  * value **required** `string`

#### Output
*Output schema unknown*

### del



```js
ldap.del({
  "dn": ""
}, context)
```

#### Input
* input `object`
  * dn **required** `string`: Distinguished Name, e.g. cn=foo, o=example

#### Output
* output `string`

### modify



```js
ldap.modify({
  "dn": "",
  "change": {}
}, context)
```

#### Input
* input `object`
  * dn **required** `string`: Distinguished Name, e.g. cn=foo, o=example
  * change **required** `object`
    * operation `string` (values: add, delete, replace)
    * modification `object`

#### Output
* output `string`

### search



```js
ldap.search({
  "base": ""
}, context)
```

#### Input
* input `object`
  * base **required** `string`: A DN string, e.g. o=example
  * searchOptions `object`
    * scope `string` (values: base, one, sub)
    * filter `string`: e.g. (&(l=Seattle)(email=*@foo.com))
    * attributes `array`: Attributes to select and return. Empty set means all attributes
      * items `string`
    * attrsOnly `boolean`
    * sizeLimit `integer`: Maximum number of entries to return (0=unlimited)
    * timeLimit `integer`: Time limit in seconds

#### Output
* output `array`
  * items `object`
    * dn `string`
    * sn `string`
    * cn `string`
    * controls `array`
    * email `string`
    * objectclass `string`

### modifyDN



```js
ldap.modifyDN({
  "dn": "",
  "newDN": ""
}, context)
```

#### Input
* input `object`
  * dn **required** `string`: Distinguished Name, e.g. cn=foo, o=example
  * newDN **required** `string`: The new DN for this object

#### Output
* output `string`



## Definitions

*This integration has no definitions*
