# @datafire/azure_serialconsole

Client library for MicrosoftSerialConsoleClient

## Installation and Usage
```bash
npm install --save @datafire/azure_serialconsole
```
```js
let azure_serialconsole = require('@datafire/azure_serialconsole').create({
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

The Azure Serial Console allows you to access the serial console of a Virtual Machine or VM scale set instance

## Actions

### ListOperations
Gets a list of Serial Console API operations.


```js
azure_serialconsole.ListOperations({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for this operation.

#### Output
* output [SerialConsoleOperations](#serialconsoleoperations)

### GetConsoleStatus
Gets whether or not Serial Console is disabled for a given subscription


```js
azure_serialconsole.GetConsoleStatus({
  "api-version": "",
  "subscriptionId": "",
  "default": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: Subscription ID which uniquely identifies the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call requiring it.
  * default **required** `string`: Default parameter. Leave the value as "default".

#### Output
* output [SerialConsoleStatus](#serialconsolestatus)

### DisableConsole
Disables the Serial Console service for all VMs and VM scale sets in the provided subscription


```js
azure_serialconsole.DisableConsole({
  "api-version": "",
  "subscriptionId": "",
  "default": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: Subscription ID which uniquely identifies the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call requiring it.
  * default **required** `string`: Default parameter. Leave the value as "default".

#### Output
* output [DisableSerialConsoleResult](#disableserialconsoleresult)

### EnableConsole
Enables the Serial Console service for all VMs and VM scale sets in the provided subscription


```js
azure_serialconsole.EnableConsole({
  "api-version": "",
  "subscriptionId": "",
  "default": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: Subscription ID which uniquely identifies the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call requiring it.
  * default **required** `string`: Default parameter. Leave the value as "default".

#### Output
* output [EnableSerialConsoleResult](#enableserialconsoleresult)



## Definitions

### DisableSerialConsoleResult
* Serial Console Disable Result `object`: Returns whether or not Serial Console is disabled.
  * disabled `boolean`: Whether or not Serial Console is disabled.

### EnableSerialConsoleResult
* Serial Console Enable Result `object`: Returns whether or not Serial Console is disabled (enabled).
  * disabled `boolean`: Whether or not Serial Console is disabled (enabled).

### GetSerialConsoleSubscriptionNotFound
* Serial Console subscription not found `object`: Error saying that the provided subscription could not be found
  * code `string`: Error code
  * message `string`: Subscription not found message

### SerialConsoleOperations
* Serial Console operations `object`: Serial Console operations
  * value `array`: A list of Serial Console operations
    * items `object`
      * display `object`
        * description `string`
        * operation `string`
        * provider `string`
        * resource `string`
      * isDataAction `string`
      * name `string`

### SerialConsoleStatus
* Serial Console GET Result `object`: Returns whether or not Serial Console is disabled.
  * disabled `boolean`: Whether or not Serial Console is disabled.


