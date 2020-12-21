# @datafire/amazonaws_apigatewaymanagementapi

Client library for AmazonApiGatewayManagementApi

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_apigatewaymanagementapi
```
```js
let amazonaws_apigatewaymanagementapi = require('@datafire/amazonaws_apigatewaymanagementapi').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

The Amazon API Gateway Management API allows you to directly manage runtime aspects of your deployed APIs. To use it, you must explicitly set the SDK's endpoint to point to the endpoint of your deployed API. The endpoint will be of the form https://{api-id}.execute-api.{region}.amazonaws.com/{stage}, or will be the endpoint corresponding to your API's custom domain and base path, if applicable.

## Actions

### DeleteConnection



```js
amazonaws_apigatewaymanagementapi.DeleteConnection({
  "connectionId": ""
}, context)
```

#### Input
* input `object`
  * connectionId **required** `string`

#### Output
*Output schema unknown*

### GetConnection



```js
amazonaws_apigatewaymanagementapi.GetConnection({
  "connectionId": ""
}, context)
```

#### Input
* input `object`
  * connectionId **required** `string`

#### Output
* output [GetConnectionResponse](#getconnectionresponse)

### PostToConnection



```js
amazonaws_apigatewaymanagementapi.PostToConnection({
  "connectionId": "",
  "Data": ""
}, context)
```

#### Input
* input `object`
  * connectionId **required** `string`
  * Data **required** `string`: The data to be sent to the client specified by its connection id.

#### Output
*Output schema unknown*



## Definitions

### Data
* Data `string`: The data to be sent to the client specified by its connection id.

### DeleteConnectionRequest
* DeleteConnectionRequest `object`

### ForbiddenException


### GetConnectionRequest
* GetConnectionRequest `object`

### GetConnectionResponse
* GetConnectionResponse `object`
  * ConnectedAt
  * Identity
    * SourceIp **required**
    * UserAgent **required**
  * LastActiveAt

### GoneException


### Identity
* Identity `object`
  * SourceIp **required**
  * UserAgent **required**

### LimitExceededException


### PayloadTooLargeException


### PostToConnectionRequest
* PostToConnectionRequest `object`
  * Data **required**

### __string
* __string `string`

### __timestampIso8601
* __timestampIso8601 `string`


