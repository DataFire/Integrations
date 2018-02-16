# @datafire/azure_web_certificateregistrationprovider

Client library for CertificateRegistrationProvider API Client

## Installation and Usage
```bash
npm install --save @datafire/azure_web_certificateregistrationprovider
```
```js
let azure_web_certificateregistrationprovider = require('@datafire/azure_web_certificateregistrationprovider').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_web_certificateregistrationprovider.CertificateRegistrationProvider_ListOperations({
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description



## Actions

### CertificateRegistrationProvider_ListOperations
Implements Csm operations Api to exposes the list of available Csm Apis under the resource provider


```js
azure_web_certificateregistrationprovider.CertificateRegistrationProvider_ListOperations({
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
          * metricSpecifications `array`
            * items `object`: Definition of a single resource metric.
              * aggregationType `string`
              * availabilities `array`
                * items `object`: Retention policy of a resource metric.
                  * blobDuration `string`
                  * timeGrain `string`
              * category `string`
              * dimensions `array`
                * items `object`: Dimension of a resource metric. For e.g. instance specific HTTP requests for a web app, 
                  * displayName `string`
                  * internalName `string`
                  * name `string`
                  * toBeExportedForShoebox `boolean`
              * displayDescription `string`
              * displayName `string`
              * enableRegionalMdmAccount `boolean`
              * fillGapWithZero `boolean`
              * isInternal `boolean`
              * metricFilterPattern `string`
              * name `string`
              * sourceMdmAccount `string`
              * sourceMdmNamespace `string`
              * supportsInstanceLevelAggregation `boolean`
              * unit `string`



## Definitions

*This integration has no definitions*
