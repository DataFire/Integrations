# @datafire/fungenerators_uuid

Client library for UUID Generation API

## Installation and Usage
```bash
npm install --save @datafire/fungenerators_uuid
```
```js
let fungenerators_uuid = require('@datafire/fungenerators_uuid').create({
  "X-Fungenerators-Api-Secret": ""
});

.then(data => {
  console.log(data);
});
```

## Description

A full featured, REST based UUID generator with json/xml/jsonp result support. You can try them out right here. [Click here to subscribe](http://fungenerators.com/api/uuid/)


## Actions

### uuid.get
Generate a random UUID (v4).


```js
fungenerators_uuid.uuid.get({}, context)
```

#### Input
* input `object`
  * count `integer`: Number of UUID's to generate (defaults to 1)

#### Output
*Output schema unknown*

### uuid.post
Parse a UUID string and return its version and check whether it is valid.


```js
fungenerators_uuid.uuid.post({
  "uuidstr": ""
}, context)
```

#### Input
* input `object`
  * uuidstr **required** `string`: UUID String to parse

#### Output
*Output schema unknown*

### uuid.version.version.get
Generate a random UUID (v4).


```js
fungenerators_uuid.uuid.version.version.get({
  "version": 0
}, context)
```

#### Input
* input `object`
  * count `integer`: Number of UUID's to generate (defaults to 1)
  * version **required** `integer`: Version of the UUID spec to use. (0-5), Use '0' for nil (00000000-0000-0000-0000-000000000000) UUID.
  * type `string`: For v3 and v5 of UUID Spec you can supply the type (dns/url/oid/x500/nil).
  * text `string`: For v3 and v5 of UUID Spec supply the text value for the type specified dns/url/oid/x500/nil. For example specify a dns/domain string if the type is "dns"

#### Output
*Output schema unknown*



## Definitions

*This integration has no definitions*
