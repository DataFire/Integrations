# @datafire/azure_web_domainregistrationprovider

Client library for DomainRegistrationProvider API Client

## Installation and Usage
```bash
npm install --save @datafire/azure_web_domainregistrationprovider
```
```js
let azure_web_domainregistrationprovider = require('@datafire/azure_web_domainregistrationprovider').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

.then(data => {
  console.log(data);
});
```

## Description



## Actions

### DomainRegistrationProvider_ListOperations
Implements Csm operations Api to exposes the list of available Csm Apis under the resource provider


```js
azure_web_domainregistrationprovider.DomainRegistrationProvider_ListOperations({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API Version

#### Output
* output `object`: Collection of Azure resource manager operation metadata.
  * nextLink `string`: Link to next page of resources.
  * value **required** `array`: Collection of resources.
    * items `object`: Description of an operation available for Microsoft.Web resource provider.
      * display `object`: Meta data about operation used for display in portal.
        * description `string`
        * operation `string`
        * provider `string`
        * resource `string`
      * name `string`
      * origin `string`
      * properties `object`: Properties available for a Microsoft.Web resource provider operation.
        * serviceSpecification `object`: Resource metrics service provided by Microsoft.Insights resource provider.
          * logSpecifications `array`
          * metricSpecifications `array`



## Definitions

*This integration has no definitions*
