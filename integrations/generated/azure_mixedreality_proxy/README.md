# @datafire/azure_mixedreality_proxy

Client library for Mixed Reality

## Installation and Usage
```bash
npm install --save @datafire/azure_mixedreality_proxy
```
```js
let azure_mixedreality_proxy = require('@datafire/azure_mixedreality_proxy').create({
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

Mixed Reality Resource Provider Proxy API

## Actions

### Operations_List
Exposing Available Operations


```js
azure_mixedreality_proxy.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [OperationPage](#operationpage)

### CheckNameAvailabilityLocal
Check Name Availability for local uniqueness


```js
azure_mixedreality_proxy.CheckNameAvailabilityLocal({
  "subscriptionId": "",
  "location": "",
  "checkNameAvailability": {
    "name": "",
    "type": ""
  },
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * location **required** `string`: The location in which uniqueness will be verified.
  * checkNameAvailability **required** [CheckNameAvailabilityRequest](#checknameavailabilityrequest)
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [CheckNameAvailabilityResponse](#checknameavailabilityresponse)



## Definitions

### CheckNameAvailabilityRequest
* CheckNameAvailabilityRequest `object`: Check Name Availability Request
  * name **required** `string`: Resource Name To Verify
  * type **required** `string`: Fully qualified resource type which includes provider namespace

### CheckNameAvailabilityResponse
* CheckNameAvailabilityResponse `object`: Check Name Availability Response
  * message `string`: detail message
  * nameAvailable **required** [NameAvailability](#nameavailability)
  * reason [NameUnavailableReason](#nameunavailablereason)

### NameAvailability
* NameAvailability `string` (values: true, false): Whether or not the name is available.

### NameUnavailableReason
* NameUnavailableReason `string` (values: Invalid, AlreadyExists): reason of name unavailable.

### Operation
* Operation `object`: REST API operation
  * display [OperationDisplay](#operationdisplay)
  * name `string`: Operation name: {provider}/{resource}/{operation}

### OperationDisplay
* OperationDisplay `object`: The object that represents the operation.
  * description **required** `string`: Description of operation
  * operation **required** `string`: Operation type: Read, write, delete, etc.
  * provider **required** `string`: Service provider: Microsoft.ResourceProvider
  * resource **required** `string`: Resource on which the operation is performed: Profile, endpoint, etc.

### OperationPage
* OperationPage `object`: Result of the request to list Resource Provider operations. It contains a list of operations and a URL link to get the next set of results.
  * nextLink `string`: URL to get the next set of operation list results if there are any.
  * value `array`: List of operations supported by the Resource Provider.
    * items [Operation](#operation)


