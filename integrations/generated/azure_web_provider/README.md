# @datafire/azure_web_provider

Client library for Provider API Client

## Installation and Usage
```bash
npm install --save @datafire/azure_web_provider
```
```js
let azure_web_provider = require('@datafire/azure_web_provider').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_web_provider.Provider_GetAvailableStacks({
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description



## Actions

### Provider_GetAvailableStacks
Get available application frameworks and their versions


```js
azure_web_provider.Provider_GetAvailableStacks({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API Version

#### Output
* output `object`

### Provider_ListOperations
Gets all available operations for the Microsoft.Web resource provider. Also exposes resource metric definitions


```js
azure_web_provider.Provider_ListOperations({
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

### Provider_GetAvailableStacksOnPrem
Get available application frameworks and their versions


```js
azure_web_provider.Provider_GetAvailableStacksOnPrem({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `object`



## Definitions

*This integration has no definitions*
