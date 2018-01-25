# @datafire/getsandbox

Client library for Sandbox

## Installation and Usage
```bash
npm install --save @datafire/getsandbox
```
```js
let getsandbox = require('@datafire/getsandbox').create({
  api_key: ""
});

getsandbox.getSandboxes({}).then(data => {
  console.log(data);
});
```

## Description

Sandbox API

## Actions

### getSandboxesActivity
searchActivity


```js
getsandbox.getSandboxesActivity({}, context)
```

#### Input
* input `object`
  * fromTimestamp `integer`: Timestamp to start search from, epoch time in milliseconds.
  * sourceSandboxes `string`: Comma-separated list of Sandbox names to search.
  * keyword `string`: A keyword to search activities by, will match any part of the ActivityMessage.
  * allTypes `boolean`: Flag to return all types of activity, defaults to just Requests
  * maxResults `integer`: Maximum number of results to return

#### Output
* output `array`
  * items [ActivityMessage](#activitymessage)

### getSandboxes
getSandboxes


```js
getsandbox.getSandboxes({}, context)
```

#### Input
* input `object`
  * filterType `string`

#### Output
* output `array`
  * items [Sandbox](#sandbox)

### createSandbox
createSandbox


```js
getsandbox.createSandbox({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [CreateSandbox](#createsandbox)

#### Output
* output [Sandbox](#sandbox)

### deleteSandbox
deleteSandbox


```js
getsandbox.deleteSandbox({
  "sandboxName": ""
}, context)
```

#### Input
* input `object`
  * sandboxName **required** `string`: Name of the Sandbox

#### Output
*Output schema unknown*

### getSandbox
getSandbox


```js
getsandbox.getSandbox({
  "sandboxName": ""
}, context)
```

#### Input
* input `object`
  * sandboxName **required** `string`: Name of the Sandbox

#### Output
* output [Sandbox](#sandbox)

### updateSandbox
updateSandbox


```js
getsandbox.updateSandbox({
  "sandboxName": "",
  "body": {
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * sandboxName **required** `string`: Name of the Sandbox
  * body **required** [Sandbox](#sandbox)

#### Output
* output [Sandbox](#sandbox)

### forkSandbox
forkSandbox


```js
getsandbox.forkSandbox({
  "sandboxName": ""
}, context)
```

#### Input
* input `object`
  * sandboxName **required** `string`: Name of the Sandbox

#### Output
* output [Sandbox](#sandbox)

### deleteSandboxState
deleteSandboxState


```js
getsandbox.deleteSandboxState({
  "sandboxName": ""
}, context)
```

#### Input
* input `object`
  * sandboxName **required** `string`: Name of the Sandbox

#### Output
*Output schema unknown*

### getSandboxState
getSandboxState


```js
getsandbox.getSandboxState({
  "sandboxName": ""
}, context)
```

#### Input
* input `object`
  * sandboxName **required** `string`: Name of the Sandbox

#### Output
*Output schema unknown*



## Definitions

### ActivityMessage
* ActivityMessage `object`
  * createdTimestamp `integer`: Epoch time in milliseconds when the message was created
  * message `string`: The details of the message when type is 'log'
  * messageObject [RuntimeTransaction](#runtimetransaction)
  * messageType `string` (values: request, log)
  * sandboxId `string`: The ID of the sandbox that generated this message

### ConfiguredRouteDetails
* ConfiguredRouteDetails `object`
  * activeErrorOverride `boolean`: Whether error overrides are enabled or not.
  * activeLatency `boolean`: Whether latency delays are enabled or not.
  * defaultLatency `integer`: A delay in milliseconds applied to requests at a 'normal' level.
  * errorOverrideType **required** `string` (values: NONE, TIMEOUT, SERVICE_DOWN): The type of error override applied to this route.
  * loadLatency `integer`: A delay in milliseconds applied to requests at a 'high' level.
  * loadThreshold `integer`: The threshold in transactions/second to signify 'high' load
  * method `string`
  * path `string`
  * properties `object`
  * routeConfig [RouteConfig](#routeconfig)
  * transport `string`

### CreateSandbox
* CreateSandbox `object`
  * commitBaseTemplate `boolean`: Whether to commit the example Sandbox definition upon creation.
  * description `string`: Text describing this Sandbox.
  * name `string`: Optional name to give the Sandbox, will be generated if omitted.
  * ownerOrganisationName `string`: Name of the team this Sandbox should be created under.
  * parentSandboxName `string`: Name of the Sandbox this should be created under, if exists will be a 'clone'.
  * transportType `string` (values: HTTP, JMS)

### Error
* Error `object`
  * code `string`
  * detailedMessage `string`: Longer message describing the error.
  * field `string`: Message describing which field the error relates to.
  * message `string`: Short message describing the error.

### RouteConfig
* RouteConfig `object`
  * errorStrategy `string` (values: NONE, TIMEOUT, SERVICE_DOWN)
  * latencyMs `integer`
  * latencyMultiplier `integer`
  * latencyType `string` (values: NONE, CONSTANT, LINEAR)
  * method `string`
  * path `string`

### RuntimeRequest
* RuntimeRequest `object`
  * body `string`: The body of the given request.
  * contentType `string`: The content type of the body, for example 'application/json'.
  * fullSandboxId `string`: The parent ID of the Sandbox that received the request.
  * fullSandboxName `string`: The parent name of the Sandbox that received the request.
  * headers `object`: Transport headers for the given request.
  * ip `string`: The requestor IP address.
  * properties `object`
  * receivedTimestamp `integer`: The epoch time in milliseconds when the request was received.
  * sandboxId `string`: The ID of the Sandbox that received the request.
  * sandboxName `string`: The name of the Sandbox that received the request.
  * transport `string`: Which transport the request was for, 'HTTP' or 'JMS'.

### RuntimeResponse
* RuntimeResponse `object`
  * body `string`: The body of the given response.
  * durationMillis `integer`: Duration in milliseconds of the processing time in Sandbox.
  * error [Error](#error)
  * headers `object`: Transport headers for the given response.
  * respondedTimestamp `integer`: The epoch time in milliseconds when the response was sent.
  * transport `string`: Which transport the request was for, 'HTTP' or 'JMS'.

### RuntimeTransaction
* RuntimeTransaction `object`
  * request [RuntimeRequest](#runtimerequest)
  * responses `array`
    * items [RuntimeResponse](#runtimeresponse)
  * sandboxName `string`: The source sandbox name.

### Sandbox
* Sandbox `object`
  * apiDefinition `string` (values: None, Apiary, Swagger_V2_Json, RAML_V08, WSDL): The import source of this Sandbox.
  * childSandboxes `array`: Clones of this Sandbox.
    * items [Sandbox](#sandbox)
  * configuredRoutes `array`: Extra configuration applied to some routes, delays, overrides etc.
    * items [ConfiguredRouteDetails](#configuredroutedetails)
  * description `string`
  * gitAccessToken `string`
  * gitUrl `string`: The git clone URL.
  * hasRepository `boolean`: Whether this Sandbox has a git repository or not.
  * id `string`: The ID of the Sandbox.
  * ipWhitelist `array`: The list of IPs allowed to make requests, all allowed if omitted.
    * items `string`
  * name **required** `string`
  * parentSandbox [Sandbox](#sandbox)
  * properties `object`
  * proxyStatus `string` (values: STARTED, STOPPED): The listener status.
  * runtimeVersion `string` (values: VERSION_1, VERSION_2): The library version of this Sandbox.
  * sandboxUrl `string`: The request URL for this Sandbox.
  * stackType `string` (values: JavaScript)
  * transportType `string` (values: HTTP, JMS): The listener transport.


