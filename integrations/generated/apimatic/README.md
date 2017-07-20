# @datafire/apimatic

Client library for APIMATIC API Transformer

## Installation and Usage
```bash
npm install --save datafire @datafire/apimatic
```

```js
let datafire = require('datafire');
let apimatic = require('@datafire/apimatic').actions;

let account = {
  api-key: "",
  username: "",
  password: "",
}
let context = new datafire.Context({
  accounts: {
    apimatic: account,
  }
})

apimatic.ConvertAPI({}, context).then(data => {
  console.log(data);
})
```

## Description
Transform API Descriptions from/to various formats

## Actions
### ConvertAPI
Transform API Descriptions from/to various formats e.g., Swagger, API Blueprint, RAML, WADL, Google Discovery, I/O Docs.

### INPUTS
* API Blueprint
* Swagger 1.0 - 1.2
* Swagger 2.0 JSON
* Swagger 2.0 YAML
* WADL - W3C 2009
* Google Discovery
* RAML 0.8
* I/O Docs - Mashery
* HAR 1.2
* Postman Collection 1.0 - 2.0
* APIMATIC Format
* Mashape

### OUTPUTS
* API Blueprint
* Swagger 1.2
* Swagger 2.0 JSON
* Swagger 2.0 YAML
* WADL - W3C 2009
* RAML 0.8 - 1.0
* APIMATIC Format


```js
apimatic.ConvertAPI({
  "format": ""
}, context)
```

#### Parameters
* format (string) **required**
* url (string)

