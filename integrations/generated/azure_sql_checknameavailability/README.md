# @datafire/azure_sql_checknameavailability

Client library for Azure SQL Database

## Installation and Usage
```bash
npm install --save @datafire/azure_sql_checknameavailability
```
```js
let azure_sql_checknameavailability = require('@datafire/azure_sql_checknameavailability').create({
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

Provides create, read, update and delete functionality for Azure SQL Database resources including servers, databases, elastic pools, recommendations, and operations.

## Actions

### Servers_CheckNameAvailability
Determines whether a resource can be created with the specified name.


```js
azure_sql_checknameavailability.Servers_CheckNameAvailability({
  "api-version": "",
  "subscriptionId": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the request.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * parameters **required** [CheckNameAvailabilityRequest](#checknameavailabilityrequest)

#### Output
* output [CheckNameAvailabilityResponse](#checknameavailabilityresponse)



## Definitions

### CheckNameAvailabilityRequest
* CheckNameAvailabilityRequest `object`: A request to check whether the specified name for a resource is available.
  * name **required** `string`: The name whose availability is to be checked.
  * type **required** `string` (values: Microsoft.Sql/servers): The type of resource that is used as the scope of the availability check.

### CheckNameAvailabilityResponse
* CheckNameAvailabilityResponse `object`: A response indicating whether the specified name for a resource is available.
  * available `boolean`: True if the name is available, otherwise false.
  * message `string`: A message explaining why the name is unavailable. Will be null if the name is available.
  * name `string`: The name whose availability was checked.
  * reason `string` (values: Invalid, AlreadyExists): The reason code explaining why the name is unavailable. Will be null if the name is available.


