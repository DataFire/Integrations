# @datafire/azure_network_operation

Client library for NetworkManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_network_operation
```
```js
let azure_network_operation = require('@datafire/azure_network_operation').create({
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

The Microsoft Azure Network management API provides a RESTful set of web services that interact with Microsoft Azure Networks service to manage your network resources. The API has entities that capture the relationship between an end user and the Microsoft Azure Networks service.

## Actions

### Operations_List
Lists all of the available Network Rest API operations.


```js
azure_network_operation.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.

#### Output
* output [OperationListResult](#operationlistresult)



## Definitions

### Availability
* Availability `object`: Availability of the metric.
  * blobDuration `string`: Duration of the availability blob.
  * retention `string`: The retention of the availability.
  * timeGrain `string`: The time grain of the availability.

### Dimension
* Dimension `object`: Dimension of the metric.
  * displayName `string`: The display name of the dimension.
  * internalName `string`: The internal name of the dimension.
  * name `string`: The name of the dimension.

### LogSpecification
* LogSpecification `object`: Description of logging specification.
  * blobDuration `string`: Duration of the blob.
  * displayName `string`: The display name of the specification.
  * name `string`: The name of the specification.

### MetricSpecification
* MetricSpecification `object`: Description of metrics specification.
  * aggregationType `string`: The aggregation type.
  * availabilities `array`: List of availability.
    * items [Availability](#availability)
  * dimensions `array`: List of dimensions.
    * items [Dimension](#dimension)
  * displayDescription `string`: The description of the metric.
  * displayName `string`: The display name of the metric.
  * enableRegionalMdmAccount `boolean`: Whether regional MDM account enabled.
  * fillGapWithZero `boolean`: Whether gaps would be filled with zeros.
  * isInternal `boolean`: Whether the metric is internal.
  * metricFilterPattern `string`: Pattern for the filter of the metric.
  * name `string`: The name of the metric.
  * resourceIdDimensionNameOverride `string`: The resource Id dimension name override.
  * sourceMdmAccount `string`: The source MDM account.
  * sourceMdmNamespace `string`: The source MDM namespace.
  * unit `string`: Units the metric to be displayed in.

### Operation
* Operation `object`: Network REST API operation definition.
  * display `object`: Display metadata associated with the operation.
    * description `string`: Description of the operation.
    * operation `string`: Type of the operation: get, read, delete, etc.
    * provider `string`: Service provider: Microsoft Network.
    * resource `string`: Resource on which the operation is performed.
  * name `string`: Operation name: {provider}/{resource}/{operation}.
  * origin `string`: Origin of the operation.
  * properties [OperationPropertiesFormat](#operationpropertiesformat)

### OperationListResult
* OperationListResult `object`: Result of the request to list Network operations. It contains a list of operations and a URL link to get the next set of results.
  * nextLink `string`: URL to get the next set of operation list results if there are any.
  * value `array`: List of Network operations supported by the Network resource provider.
    * items [Operation](#operation)

### OperationPropertiesFormat
* OperationPropertiesFormat `object`: Description of operation properties format.
  * serviceSpecification `object`: Specification of the service.
    * logSpecifications `array`: Operation log specification.
      * items [LogSpecification](#logspecification)
    * metricSpecifications `array`: Operation service specification.
      * items [MetricSpecification](#metricspecification)


