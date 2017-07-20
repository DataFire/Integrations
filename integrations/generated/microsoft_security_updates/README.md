# @datafire/microsoft_security_updates

Client library for Microsoft Security Updates

## Installation and Usage
```bash
npm install --save datafire @datafire/microsoft_security_updates
```

```js
let datafire = require('datafire');
let microsoft_security_updates = require('@datafire/microsoft_security_updates').actions;

let account = {
  api-key: "",
}
let context = new datafire.Context({
  accounts: {
    microsoft_security_updates: account,
  }
})

microsoft_security_updates.Updates.get({}, context).then(data => {
  console.log(data);
})
```

## Description


## Actions
### Updates.get
Get all updates with a link to the CVRF document



```js
microsoft_security_updates.Updates.get({
  "api-version": ""
}, context)
```

#### Parameters
* api-version (string) **required**

### Updates_id_.get
Get updates with a link to the CVRF document for a particular ID.

ID can be:

  * Update ID (ie: 2016-Aug)
  * Vulnerability ID (ie: CVE-2016-0128)
  * Year (ie: 2016)



```js
microsoft_security_updates.Updates_id_.get({
  "api-version": "",
  "id": ""
}, context)
```

#### Parameters
* api-version (string) **required**
* id (string) **required**

### cvrf.id.get
Gets a CVRF document by ID (ie: 2016-Aug)

Note: to view the correct XML response, please change *$ref: '#/definitions/cvrfReturnTypes200'* to *$ref: '#/definitions/cvrfReturnTypes200_xml'* in the swagger.json or swagger.yaml file



```js
microsoft_security_updates.cvrf.id.get({
  "api-version": "",
  "id": ""
}, context)
```

#### Parameters
* api-version (string) **required**
* id (string) **required**

