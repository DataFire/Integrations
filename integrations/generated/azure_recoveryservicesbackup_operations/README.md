# @datafire/azure_recoveryservicesbackup_operations

Client library for RecoveryServicesBackupClient

## Installation and Usage
```bash
npm install --save @datafire/azure_recoveryservicesbackup_operations
```
```js
let azure_recoveryservicesbackup_operations = require('@datafire/azure_recoveryservicesbackup_operations').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_recoveryservicesbackup_operations.Operations_List({
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description



## Actions

### Operations_List
Returns the list of available operations.


```js
azure_recoveryservicesbackup_operations.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.

#### Output
* output [ClientDiscoveryResponse](#clientdiscoveryresponse)



## Definitions

### ClientDiscoveryDisplay
* ClientDiscoveryDisplay `object`: Localized display information of an operation.
  * description `string`: Description of the operation having details of what operation is about.
  * operation `string`: Operations Name itself.
  * provider `string`: Name of the provider for display purposes
  * resource `string`: ResourceType for which this Operation can be performed.

### ClientDiscoveryForLogSpecification
* ClientDiscoveryForLogSpecification `object`: Class to represent shoebox log specification in json client discovery.
  * blobDuration `string`: blob duration of shoebox log specification
  * displayName `string`: Localized display name
  * name `string`: Name for shoebox log specification.

### ClientDiscoveryForProperties
* ClientDiscoveryForProperties `object`: Class to represent shoebox properties in json client discovery.
  * serviceSpecification [ClientDiscoveryForServiceSpecification](#clientdiscoveryforservicespecification)

### ClientDiscoveryForServiceSpecification
* ClientDiscoveryForServiceSpecification `object`: Class to represent shoebox service specification in json client discovery.
  * logSpecifications `array`: List of log specifications of this operation.
    * items [ClientDiscoveryForLogSpecification](#clientdiscoveryforlogspecification)

### ClientDiscoveryResponse
* ClientDiscoveryResponse `object`: Operations List response which contains list of available APIs.
  * nextLink `string`: Link to the next chunk of Response.
  * value `array`: List of available operationss.
    * items [ClientDiscoveryValueForSingleApi](#clientdiscoveryvalueforsingleapi)

### ClientDiscoveryValueForSingleApi
* ClientDiscoveryValueForSingleApi `object`: Available operation details.
  * display [ClientDiscoveryDisplay](#clientdiscoverydisplay)
  * name `string`: Name of the Operation.
  * origin `string`: The intended executor of the operation;governs the display of the operation in the RBAC UX and the audit logs UX
  * properties [ClientDiscoveryForProperties](#clientdiscoveryforproperties)


