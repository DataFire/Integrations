# @datafire/maif_local_otoroshi

Client library for Otoroshi Admin

## Installation and Usage
```bash
npm install --save @datafire/maif_local_otoroshi
```
```js
let maif_local_otoroshi = require('@datafire/maif_local_otoroshi').create({
  username: "",
  password: ""
});

.then(data => {
  console.log(data);
});
```

## Description

Admin API of the Otoroshi reverse proxy

## Actions

### allApiKeys
Get all api keys


```js
maif_local_otoroshi.allApiKeys(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [ApiKey](#apikey)

### globalConfig
Get the full configuration of Otoroshi


```js
maif_local_otoroshi.globalConfig(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [GlobalConfig](#globalconfig)

### patchGlobalConfig
Update the global configuration with a diff


```js
maif_local_otoroshi.patchGlobalConfig({
  "body": []
}, context)
```

#### Input
* input `object`
  * body **required** [Patch](#patch)

#### Output
* output [GlobalConfig](#globalconfig)

### putGlobalConfig
Update the global configuration


```js
maif_local_otoroshi.putGlobalConfig({
  "body": {
    "streamEntityOnly": true,
    "autoLinkToDefaultGroup": true,
    "limitConcurrentRequests": true,
    "maxConcurrentRequests": 0,
    "useCircuitBreakers": true,
    "apiReadOnly": true,
    "u2fLoginOnly": true,
    "ipFiltering": {
      "whitelist": [],
      "blacklist": []
    },
    "throttlingQuota": 0,
    "perIpThrottlingQuota": 0,
    "analyticsEventsUrl": "",
    "analyticsWebhooks": [],
    "alertsWebhooks": [],
    "alertsEmails": [],
    "endlessIpAddresses": []
  }
}, context)
```

#### Input
* input `object`
  * body **required** [GlobalConfig](#globalconfig)

#### Output
* output [GlobalConfig](#globalconfig)

### allServiceGroups
Get all service groups


```js
maif_local_otoroshi.allServiceGroups(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Group](#group)

### createGroup
Create a new service group


```js
maif_local_otoroshi.createGroup({
  "body": {
    "id": "",
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [Group](#group)

#### Output
* output [Group](#group)

### apiKeysFromGroup
Get all api keys for the group of a service


```js
maif_local_otoroshi.apiKeysFromGroup({
  "groupId": ""
}, context)
```

#### Input
* input `object`
  * groupId **required** `string`: The api key group id

#### Output
* output `array`
  * items [ApiKey](#apikey)

### createApiKeyFromGroup
Create a new api key for a group


```js
maif_local_otoroshi.createApiKeyFromGroup({
  "groupId": "",
  "body": {
    "clientId": "",
    "clientSecret": "",
    "clientName": "",
    "authorizedGroup": "",
    "enabled": true
  }
}, context)
```

#### Input
* input `object`
  * groupId **required** `string`: The api key group id
  * body **required** [ApiKey](#apikey)

#### Output
* output [ApiKey](#apikey)

### deleteApiKeyFromGroup
Delete an api key for a specified service group


```js
maif_local_otoroshi.deleteApiKeyFromGroup({
  "groupId": "",
  "clientId": ""
}, context)
```

#### Input
* input `object`
  * groupId **required** `string`: The api key group id
  * clientId **required** `string`: the api key id

#### Output
* output [Deleted](#deleted)

### apiKeyFromGroup
Get an api key for a specified service group


```js
maif_local_otoroshi.apiKeyFromGroup({
  "groupId": "",
  "clientId": ""
}, context)
```

#### Input
* input `object`
  * groupId **required** `string`: The api key group id
  * clientId **required** `string`: the api key id

#### Output
* output [ApiKey](#apikey)

### patchApiKeyFromGroup
Update an api key for a specified service descriptor with a diff


```js
maif_local_otoroshi.patchApiKeyFromGroup({
  "groupId": "",
  "clientId": "",
  "body": []
}, context)
```

#### Input
* input `object`
  * groupId **required** `string`: The api key group id
  * clientId **required** `string`: the api key id
  * body **required** [Patch](#patch)

#### Output
* output [ApiKey](#apikey)

### updateApiKeyFromGroup
Update an api key for a specified service group


```js
maif_local_otoroshi.updateApiKeyFromGroup({
  "groupId": "",
  "clientId": "",
  "body": {
    "clientId": "",
    "clientSecret": "",
    "clientName": "",
    "authorizedGroup": "",
    "enabled": true
  }
}, context)
```

#### Input
* input `object`
  * groupId **required** `string`: The api key group id
  * clientId **required** `string`: the api key id
  * body **required** [ApiKey](#apikey)

#### Output
* output [ApiKey](#apikey)

### resetApiKeyFromGroupQuotas
Reset the quota state of an api key


```js
maif_local_otoroshi.resetApiKeyFromGroupQuotas({
  "groupId": "",
  "clientId": ""
}, context)
```

#### Input
* input `object`
  * groupId **required** `string`: The api key group id
  * clientId **required** `string`: the api key id

#### Output
* output [Quotas](#quotas)

### apiKeyFromGroupQuotas
Get the quota state of an api key


```js
maif_local_otoroshi.apiKeyFromGroupQuotas({
  "groupId": "",
  "clientId": ""
}, context)
```

#### Input
* input `object`
  * groupId **required** `string`: The api key group id
  * clientId **required** `string`: the api key id

#### Output
* output [Quotas](#quotas)

### deleteGroup
Delete a service group


```js
maif_local_otoroshi.deleteGroup({
  "serviceGroupId": ""
}, context)
```

#### Input
* input `object`
  * serviceGroupId **required** `string`: The service group id

#### Output
* output [Deleted](#deleted)

### serviceGroup
Get a service group


```js
maif_local_otoroshi.serviceGroup({
  "serviceGroupId": ""
}, context)
```

#### Input
* input `object`
  * serviceGroupId **required** `string`: The service group id

#### Output
* output [Group](#group)

### patchGroup
Update a service group with a diff


```js
maif_local_otoroshi.patchGroup({
  "serviceGroupId": "",
  "body": []
}, context)
```

#### Input
* input `object`
  * serviceGroupId **required** `string`: The service group id
  * body **required** [Patch](#patch)

#### Output
* output [Group](#group)

### updateGroup
Update a service group


```js
maif_local_otoroshi.updateGroup({
  "serviceGroupId": "",
  "body": {
    "id": "",
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * serviceGroupId **required** `string`: The service group id
  * body **required** [Group](#group)

#### Output
* output [Group](#group)

### serviceGroupServices
Get all services descriptor for a group


```js
maif_local_otoroshi.serviceGroupServices({
  "serviceGroupId": ""
}, context)
```

#### Input
* input `object`
  * serviceGroupId **required** `string`: The service group id

#### Output
* output `array`
  * items [ApiKey](#apikey)

### fullImportFromFile
Import the full state of Otoroshi as a file


```js
maif_local_otoroshi.fullImportFromFile({
  "body": {
    "label": "",
    "dateRaw": 0,
    "date": "",
    "stats": {
      "calls": 0,
      "dataIn": 0,
      "dataOut": 0
    },
    "config": {
      "streamEntityOnly": true,
      "autoLinkToDefaultGroup": true,
      "limitConcurrentRequests": true,
      "maxConcurrentRequests": 0,
      "useCircuitBreakers": true,
      "apiReadOnly": true,
      "u2fLoginOnly": true,
      "ipFiltering": {
        "whitelist": [],
        "blacklist": []
      },
      "throttlingQuota": 0,
      "perIpThrottlingQuota": 0,
      "analyticsEventsUrl": "",
      "analyticsWebhooks": [],
      "alertsWebhooks": [],
      "alertsEmails": [],
      "endlessIpAddresses": []
    },
    "admins": [],
    "simpleAdmins": [],
    "serviceGroups": [],
    "apiKeys": [],
    "serviceDescriptors": [],
    "errorTemplates": []
  }
}, context)
```

#### Input
* input `object`
  * body **required** [ImportExport](#importexport)

#### Output
* output [Done](#done)

### globalLiveStats
Get global otoroshi stats


```js
maif_local_otoroshi.globalLiveStats(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Stats](#stats)

### serviceLiveStats
Get live feed of global otoroshi stats (global) or for a service {id}


```js
maif_local_otoroshi.serviceLiveStats({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The service id or global for otoroshi stats

#### Output
* output [Stats](#stats)

### fullExport
Export the full state of Otoroshi


```js
maif_local_otoroshi.fullExport(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [ImportExport](#importexport)

### fullImport
Import the full state of Otoroshi


```js
maif_local_otoroshi.fullImport({
  "body": {
    "label": "",
    "dateRaw": 0,
    "date": "",
    "stats": {
      "calls": 0,
      "dataIn": 0,
      "dataOut": 0
    },
    "config": {
      "streamEntityOnly": true,
      "autoLinkToDefaultGroup": true,
      "limitConcurrentRequests": true,
      "maxConcurrentRequests": 0,
      "useCircuitBreakers": true,
      "apiReadOnly": true,
      "u2fLoginOnly": true,
      "ipFiltering": {
        "whitelist": [],
        "blacklist": []
      },
      "throttlingQuota": 0,
      "perIpThrottlingQuota": 0,
      "analyticsEventsUrl": "",
      "analyticsWebhooks": [],
      "alertsWebhooks": [],
      "alertsEmails": [],
      "endlessIpAddresses": []
    },
    "admins": [],
    "simpleAdmins": [],
    "serviceGroups": [],
    "apiKeys": [],
    "serviceDescriptors": [],
    "errorTemplates": []
  }
}, context)
```

#### Input
* input `object`
  * body **required** [ImportExport](#importexport)

#### Output
* output [Done](#done)

### allServices
Get all services


```js
maif_local_otoroshi.allServices(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Service](#service)

### createService
Create a new service descriptor


```js
maif_local_otoroshi.createService({
  "body": {
    "id": "",
    "groupId": "",
    "name": "",
    "env": "",
    "domain": "",
    "subdomain": "",
    "targets": [],
    "root": "",
    "enabled": true,
    "privateApp": true,
    "forceHttps": true,
    "maintenanceMode": true,
    "buildMode": true,
    "enforceSecureCommunication": true
  }
}, context)
```

#### Input
* input `object`
  * body **required** [Service](#service)

#### Output
* output [Service](#service)

### deleteService
Delete a service descriptor


```js
maif_local_otoroshi.deleteService({
  "serviceId": ""
}, context)
```

#### Input
* input `object`
  * serviceId **required** `string`: The service id

#### Output
* output [Deleted](#deleted)

### service
Get a service descriptor


```js
maif_local_otoroshi.service({
  "serviceId": ""
}, context)
```

#### Input
* input `object`
  * serviceId **required** `string`: The service id

#### Output
* output [Service](#service)

### patchService
Update a service descriptor with a diff


```js
maif_local_otoroshi.patchService({
  "serviceId": "",
  "body": []
}, context)
```

#### Input
* input `object`
  * serviceId **required** `string`: The service id
  * body **required** [Patch](#patch)

#### Output
* output [Service](#service)

### updateService
Update a service descriptor


```js
maif_local_otoroshi.updateService({
  "serviceId": "",
  "body": {
    "id": "",
    "groupId": "",
    "name": "",
    "env": "",
    "domain": "",
    "subdomain": "",
    "targets": [],
    "root": "",
    "enabled": true,
    "privateApp": true,
    "forceHttps": true,
    "maintenanceMode": true,
    "buildMode": true,
    "enforceSecureCommunication": true
  }
}, context)
```

#### Input
* input `object`
  * serviceId **required** `string`: The service id
  * body **required** [Service](#service)

#### Output
* output [Service](#service)

### apiKeys
Get all api keys for the group of a service


```js
maif_local_otoroshi.apiKeys({
  "serviceId": ""
}, context)
```

#### Input
* input `object`
  * serviceId **required** `string`: The api key service id

#### Output
* output `array`
  * items [ApiKey](#apikey)

### createApiKey
Create a new api key for a service


```js
maif_local_otoroshi.createApiKey({
  "serviceId": "",
  "body": {
    "clientId": "",
    "clientSecret": "",
    "clientName": "",
    "authorizedGroup": "",
    "enabled": true
  }
}, context)
```

#### Input
* input `object`
  * serviceId **required** `string`: The api key service id
  * body **required** [ApiKey](#apikey)

#### Output
* output [ApiKey](#apikey)

### deleteApiKey
Delete an api key for a specified service descriptor


```js
maif_local_otoroshi.deleteApiKey({
  "serviceId": "",
  "clientId": ""
}, context)
```

#### Input
* input `object`
  * serviceId **required** `string`: The api key service id
  * clientId **required** `string`: the api key id

#### Output
* output [Deleted](#deleted)

### apiKey
Get an api key for a specified service descriptor


```js
maif_local_otoroshi.apiKey({
  "serviceId": "",
  "clientId": ""
}, context)
```

#### Input
* input `object`
  * serviceId **required** `string`: The api key service id
  * clientId **required** `string`: the api key id

#### Output
* output [ApiKey](#apikey)

### patchApiKey
Update an api key for a specified service descriptor with a diff


```js
maif_local_otoroshi.patchApiKey({
  "serviceId": "",
  "clientId": "",
  "body": []
}, context)
```

#### Input
* input `object`
  * serviceId **required** `string`: The api key service id
  * clientId **required** `string`: the api key id
  * body **required** [Patch](#patch)

#### Output
* output [ApiKey](#apikey)

### updateApiKey
Update an api key for a specified service descriptor


```js
maif_local_otoroshi.updateApiKey({
  "serviceId": "",
  "clientId": "",
  "body": {
    "clientId": "",
    "clientSecret": "",
    "clientName": "",
    "authorizedGroup": "",
    "enabled": true
  }
}, context)
```

#### Input
* input `object`
  * serviceId **required** `string`: The api key service id
  * clientId **required** `string`: the api key id
  * body **required** [ApiKey](#apikey)

#### Output
* output [ApiKey](#apikey)

### apiKeyGroup
Get the group of an api key


```js
maif_local_otoroshi.apiKeyGroup({
  "serviceId": "",
  "clientId": ""
}, context)
```

#### Input
* input `object`
  * serviceId **required** `string`: The api key service id
  * clientId **required** `string`: the api key id

#### Output
* output [Group](#group)

### resetApiKeyQuotas
Reset the quota state of an api key


```js
maif_local_otoroshi.resetApiKeyQuotas({
  "serviceId": "",
  "clientId": ""
}, context)
```

#### Input
* input `object`
  * serviceId **required** `string`: The api key service id
  * clientId **required** `string`: the api key id

#### Output
* output [Quotas](#quotas)

### apiKeyQuotas
Get the quota state of an api key


```js
maif_local_otoroshi.apiKeyQuotas({
  "serviceId": "",
  "clientId": ""
}, context)
```

#### Input
* input `object`
  * serviceId **required** `string`: The api key service id
  * clientId **required** `string`: the api key id

#### Output
* output [Quotas](#quotas)

### serviceDeleteTarget
Delete a service descriptor target


```js
maif_local_otoroshi.serviceDeleteTarget({
  "serviceId": ""
}, context)
```

#### Input
* input `object`
  * serviceId **required** `string`: The service id

#### Output
* output `array`
  * items [Target](#target)

### serviceTargets
Get a service descriptor targets


```js
maif_local_otoroshi.serviceTargets({
  "serviceId": ""
}, context)
```

#### Input
* input `object`
  * serviceId **required** `string`: The service id

#### Output
* output `array`
  * items [Target](#target)

### updateServiceTargets
Update a service descriptor targets


```js
maif_local_otoroshi.updateServiceTargets({
  "serviceId": "",
  "body": []
}, context)
```

#### Input
* input `object`
  * serviceId **required** `string`: The service id
  * body **required** [Patch](#patch)

#### Output
* output `array`
  * items [Target](#target)

### serviceAddTarget
Add a target to a service descriptor


```js
maif_local_otoroshi.serviceAddTarget({
  "serviceId": "",
  "body": {
    "host": "",
    "scheme": ""
  }
}, context)
```

#### Input
* input `object`
  * serviceId **required** `string`: The service id
  * body **required** [Target](#target)

#### Output
* output `array`
  * items [Target](#target)

### deleteServiceTemplate
Delete a service descriptor error template


```js
maif_local_otoroshi.deleteServiceTemplate({
  "serviceId": ""
}, context)
```

#### Input
* input `object`
  * serviceId **required** `string`: The service id

#### Output
* output [Deleted](#deleted)

### serviceTemplate
Get a service descriptor error template


```js
maif_local_otoroshi.serviceTemplate({
  "serviceId": ""
}, context)
```

#### Input
* input `object`
  * serviceId **required** `string`: The service id

#### Output
* output [ErrorTemplate](#errortemplate)

### createServiceTemplate
Update a service descriptor targets


```js
maif_local_otoroshi.createServiceTemplate({
  "serviceId": "",
  "body": {
    "serviceId": "",
    "template40x": "",
    "template50x": "",
    "templateBuild": "",
    "templateMaintenance": "",
    "messages": {}
  }
}, context)
```

#### Input
* input `object`
  * serviceId **required** `string`: The service id
  * body **required** [ErrorTemplate](#errortemplate)

#### Output
* output [ErrorTemplate](#errortemplate)

### updateServiceTemplate
Update an error template to a service descriptor


```js
maif_local_otoroshi.updateServiceTemplate({
  "serviceId": "",
  "body": {
    "serviceId": "",
    "template40x": "",
    "template50x": "",
    "templateBuild": "",
    "templateMaintenance": "",
    "messages": {}
  }
}, context)
```

#### Input
* input `object`
  * serviceId **required** `string`: The service id
  * body **required** [ErrorTemplate](#errortemplate)

#### Output
* output [ErrorTemplate](#errortemplate)

### health
Import the full state of Otoroshi as a file


```js
maif_local_otoroshi.health(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [OtoroshiHealth](#otoroshihealth)

### allLines
Get all environments provided by the current Otoroshi instance


```js
maif_local_otoroshi.allLines(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Environment](#environment)

### servicesForALine
Get all services for an environment provided by the current Otoroshi instance


```js
maif_local_otoroshi.servicesForALine({
  "line": ""
}, context)
```

#### Input
* input `object`
  * line **required** `string`: The environment where to find services

#### Output
* output `array`
  * items [Service](#service)

### initiateApiKey
Get a template of an Otoroshi Api Key. The generated entity is not persisted


```js
maif_local_otoroshi.initiateApiKey(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [ApiKey](#apikey)

### initiateServiceGroup
Get a template of an Otoroshi service group. The generated entity is not persisted


```js
maif_local_otoroshi.initiateServiceGroup(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Group](#group)

### initiateService
Get a template of an Otoroshi service descriptor. The generated entity is not persisted


```js
maif_local_otoroshi.initiateService(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Service](#service)



## Definitions

### ApiKey
* ApiKey `object`: An Otoroshi Api Key. An Api Key is defined for a group of services to allow usage of the same Api Key for multiple services.
  * authorizedGroup **required** `string`: The group id on which the key is authorized
  * clientId **required** `string`: The unique id of the Api Key. Usually 16 random alpha numerical characters, but can be anything
  * clientName **required** `string`: The name of the api key, for humans ;-)
  * clientSecret **required** `string`: The secret of the Api Key. Usually 64 random alpha numerical characters, but can be anything
  * dailyQuota `integer`: Authorized number of calls per day
  * enabled **required** `boolean`: Whether or not the key is enabled. If disabled, resources won't be available to calls using this key
  * metadata `object`: Bunch of metadata for the key
  * monthlyQuota `integer`: Authorized number of calls per month
  * throttlingQuota `integer`: Authorized number of calls per second, measured on 10 seconds

### Auth0Config
* Auth0Config `object`: Configuration for Auth0 domain
  * callbackUrl **required** `string`: Auth0 callback URL
  * clientId **required** `string`: Auth0 client id
  * clientSecret **required** `string`: Auth0 client secret
  * domain **required** `string`: Auth0 domain

### Canary
* Canary `object`: The configuration of the canary mode for a service descriptor
  * enabled **required** `boolean`: Use canary mode for this service
  * root **required** `string`: Otoroshi will append this root to any target choosen. If the specified root is '/api/foo', then a request to https://yyyyyyy/bar will actually hit https://xxxxxxxxx/api/foo/bar
  * targets **required** `array`: The list of target that Otoroshi will proxy and expose through the subdomain defined before. Otoroshi will do round-robin load balancing between all those targets with circuit breaker mecanism to avoid cascading failures
    * items [Target](#target)
  * traffic **required** `integer`: Ratio of traffic that will be sent to canary targets.

### CleverSettings
* CleverSettings `object`: Configuration for CleverCloud client
  * consumerKey **required** `string`: CleverCloud consumer key
  * consumerSecret **required** `string`: CleverCloud consumer token
  * orgaId **required** `string`: CleverCloud organization id
  * secret **required** `string`: CleverCloud oauth secret
  * token **required** `string`: CleverCloud oauth token

### ClientConfig
* ClientConfig `object`: The configuration of the circuit breaker for a service descriptor
  * backoffFactor **required** `integer`: Specify the factor to multiply the delay for each retry
  * callTimeout **required** `integer`: Specify how long each call should last at most in milliseconds
  * globalTimeout **required** `integer`: Specify how long the global call (with retries) should last at most in milliseconds
  * maxErrors **required** `integer`: Specify how many errors can pass before opening the circuit breaker
  * retries **required** `integer`: Specify how many times the client will try to fetch the result of the request after an error before giving up.
  * retryInitialDelay **required** `integer`: Specify the delay between two retries. Each retry, the delay is multiplied by the backoff factor
  * sampleInterval **required** `integer`: Specify the sliding window time for the circuit breaker in milliseconds, after this time, error count will be reseted
  * useCircuitBreaker **required** `boolean`: Use a circuit breaker to avoid cascading failure when calling chains of services. Highly recommended !

### Deleted
* Deleted `object`
  * deleted **required** `boolean`

### Done
* Done `object`
  * done **required** `boolean`

### Environment
* Environment `string`: The name of the environment for service descriptors

### ErrorTemplate
* ErrorTemplate `object`: Error templates for a service descriptor
  * messages **required** `object`: Map for custom messages
  * serviceId **required** `string`: The Id of the service for which the error template is enabled
  * template40x **required** `string`: The html template for 40x errors
  * template50x **required** `string`: The html template for 50x errors
  * templateBuild **required** `string`: The html template for build page
  * templateMaintenance **required** `string`: The html template for maintenance page

### ExposedApi
* ExposedApi `object`: The Open API configuration for your service (if one)
  * exposeApi **required** `boolean`: Whether or not the current service expose an API with an Open API descriptor
  * openApiDescriptorUrl `string`: The URL of the Open API descriptor

### GlobalConfig
* GlobalConfig `object`: The global config object of Otoroshi, used to customize settings of the current Otoroshi instance
  * alertsEmails **required** `array`: Email addresses that will receive all Otoroshi alert events
    * items `string`
  * alertsWebhooks **required** `array`: Webhook that will receive all Otoroshi alert events
    * items [Webhook](#webhook)
  * analyticsEventsUrl **required** `string`: The URL to get analytics events from
  * analyticsWebhooks **required** `array`: Webhook that will receive all internal Otoroshi events
    * items [Webhook](#webhook)
  * apiReadOnly **required** `boolean`: If enabled, Admin API won't be able to write/update/delete entities
  * autoLinkToDefaultGroup **required** `boolean`: If not defined, every new service descriptor will be added to the default group
  * backofficeAuth0Config [Auth0Config](#auth0config)
  * cleverSettings [CleverSettings](#cleversettings)
  * endlessIpAddresses **required** `array`: IP addresses for which any request to Otoroshi will respond with 128 Gb of zeros
    * items `string`
  * ipFiltering **required** [IpFiltering](#ipfiltering)
  * limitConcurrentRequests **required** `boolean`: If enabled, Otoroshi will reject new request if too much at the same time
  * lines `array`: Possibles lines for Otoroshi
    * items `string`
  * mailGunSettings [MailgunSettings](#mailgunsettings)
  * maxConcurrentRequests **required** `integer`: The number of authorized request processed at the same time
  * maxHttp10ResponseSize `integer`: The max size in bytes of an HTTP 1.0 response
  * maxLogsSize `integer`: Number of events kept locally
  * middleFingers `boolean`: Use middle finger emoji as a response character for endless HTTP responses
  * perIpThrottlingQuota **required** `integer`: Authorized number of calls per second globally per IP address, measured on 10 seconds
  * privateAppsAuth0Config [Auth0Config](#auth0config)
  * streamEntityOnly **required** `boolean`: HTTP will be streamed only. Doesn't work with old browsers
  * throttlingQuota **required** `integer`: Authorized number of calls per second globally, measured on 10 seconds
  * u2fLoginOnly **required** `boolean`: If enabled, login to backoffice through Auth0 will be disabled
  * useCircuitBreakers **required** `boolean`: If enabled, services will be authorized to use circuit breakers

### Group
* Group `object`: An Otoroshi service group is just a group of service descriptor. It is useful to be able to define Api Keys for the whole group
  * description `string`: The descriptoin of the group
  * id **required** `string`: The unique id of the group. Usually 64 random alpha numerical characters, but can be anything
  * name **required** `string`: The name of the group

### HealthCheck
* HealthCheck `object`: The configuration for checking health of a service. Otoroshi will perform GET call on the URL to check if the service is still alive
  * enabled **required** `boolean`: Whether or not healthcheck is enabled on the current service descriptor
  * url `string`: The URL to check

### ImportExport
* ImportExport `object`: The structure that can be imported to or exported from Otoroshi. It represent the memory state of Otoroshi
  * admins **required** `array`: Current U2F admin at the time of export
    * items `object`: Administrator using FIDO U2F device to access Otoroshi
      * createdAt **required** `integer`: The creation date of the user
      * label **required** `string`: The label for the user
      * password **required** `string`: The hashed password of the user
      * registration **required** `object`: The U2F registration slug
      * username **required** `string`: The email address of the user
  * apiKeys **required** `array`: Current apik keys at the time of export
    * items `object`: An Otoroshi Api Key. An Api Key is defined for a group of services to allow usage of the same Api Key for multiple services.
      * authorizedGroup **required** `string`: The group id on which the key is authorized
      * clientId **required** `string`: The unique id of the Api Key. Usually 16 random alpha numerical characters, but can be anything
      * clientName **required** `string`: The name of the api key, for humans ;-)
      * clientSecret **required** `string`: The secret of the Api Key. Usually 64 random alpha numerical characters, but can be anything
      * dailyQuota `integer`: Authorized number of calls per day
      * enabled **required** `boolean`: Whether or not the key is enabled. If disabled, resources won't be available to calls using this key
      * metadata `object`: Bunch of metadata for the key
      * monthlyQuota `integer`: Authorized number of calls per month
      * throttlingQuota `integer`: Authorized number of calls per second, measured on 10 seconds
  * appConfig `object`: Current env variables at the time of export
  * config **required** [GlobalConfig](#globalconfig)
  * date **required** `string`
  * dateRaw **required** `integer`
  * errorTemplates **required** `array`: Current error templates at the time of export
    * items `object`: Error templates for a service descriptor
      * messages **required** `object`: Map for custom messages
      * serviceId **required** `string`: The Id of the service for which the error template is enabled
      * template40x **required** `string`: The html template for 40x errors
      * template50x **required** `string`: The html template for 50x errors
      * templateBuild **required** `string`: The html template for build page
      * templateMaintenance **required** `string`: The html template for maintenance page
  * label **required** `string`
  * serviceDescriptors **required** `array`: Current service descriptors at the time of export
    * items `object`: An otoroshi service descriptor. Represent a forward HTTP call on a domain to another location with some optional api management mecanism
      * Canary [Canary](#canary)
      * additionalHeaders `object`: Specify headers that will be added to each client request. Useful to add authentication
      * api [ExposedApi](#exposedapi)
      * buildMode **required** `boolean`: Display a construction page when a user try to use the service
      * clientConfig [ClientConfig](#clientconfig)
      * domain **required** `string`: The domain on which the service is available.
      * enabled **required** `boolean`: Activate or deactivate your service. Once disabled, users will get an error page saying the service does not exist
      * enforceSecureCommunication **required** `boolean`: When enabled, Otoroshi will try to exchange headers with downstream service to ensure no one else can use the service from outside
      * env **required** `string`: The line on which the service is available. Based on that value, the name of the line will be appended to the subdomain. For line prod, nothing will be appended. For example, if the subdomain is 'foo' and line is 'preprod', then the exposed service will be available at 'foo.preprod.mydomain'
      * forceHttps **required** `boolean`: Will force redirection to https:// if not present
      * groupId **required** `string`: Each service descriptor is attached to a group. A group can have one or more services. Each API key is linked to a group and allow access to every service in the group
      * healthCheck [HealthCheck](#healthcheck)
      * id **required** `string`: A unique random string to identify your service
      * ipFiltering [IpFiltering](#ipfiltering)
      * localHost `string`: The host used localy, mainly localhost:xxxx
      * localScheme `string`: The scheme used localy, mainly http
      * maintenanceMode **required** `boolean`: Display a maintainance page when a user try to use the service
      * matchingHeaders `object`: Specify headers that MUST be present on client request to route it. Useful to implement versioning
      * matchingRoot `string`: The root path on which the service is available
      * metadata `object`: Just a bunch of random properties
      * name **required** `string`: The name of your service. Only for debug and human readability purposes
      * privateApp **required** `boolean`: When enabled, user will be allowed to use the service (UI) only if they are registered users of the private apps domain
      * privatePatterns `array`: If you define a public pattern that is a little bit too much, you can make some of public URL private again
        * items `string`
      * publicPatterns `array`: By default, every services are private only and you'll need an API key to access it. However, if you want to expose a public UI, you can define one or more public patterns (regex) to allow access to anybody. For example if you want to allow anybody on any URL, just use '/.*'
        * items `string`
      * redirectToLocal `boolean`: If you work locally with Otoroshi, you may want to use that feature to redirect one particuliar service to a local host. For example, you can relocate https://foo.preprod.bar.com to http://localhost:8080 to make some tests
      * root **required** `string`: Otoroshi will append this root to any target choosen. If the specified root is '/api/foo', then a request to https://yyyyyyy/bar will actually hit https://xxxxxxxxx/api/foo/bar
      * secComExcludedPatterns `array`: URI patterns excluded from secured communications
        * items `string`
      * sendOtoroshiHeadersBack `boolean`: When enabled, Otoroshi will send headers to consumer like request id, client latency, overhead, etc ...
      * statsdConfig [StatsdConfig](#statsdconfig)
      * subdomain **required** `string`: The subdomain on which the service is available
      * targets **required** `array`: The list of target that Otoroshi will proxy and expose through the subdomain defined before. Otoroshi will do round-robin load balancing between all those targets with circuit breaker mecanism to avoid cascading failures
        * items [Target](#target)
  * serviceGroups **required** `array`: Current service groups at the time of export
    * items `object`: An Otoroshi service group is just a group of service descriptor. It is useful to be able to define Api Keys for the whole group
      * description `string`: The descriptoin of the group
      * id **required** `string`: The unique id of the group. Usually 64 random alpha numerical characters, but can be anything
      * name **required** `string`: The name of the group
  * simpleAdmins **required** `array`: Current simple admins at the time of export
    * items `object`: Administrator using just login/password tuple to access Otoroshi
      * createdAt **required** `integer`: The creation date of the user
      * label **required** `string`: The label for the user
      * password **required** `string`: The hashed password of the user
      * username **required** `string`: The email address of the user
  * stats **required** [ImportExportStats](#importexportstats)

### ImportExportStats
* ImportExportStats `object`: Global stats for the current Otoroshi instances
  * calls **required** `integer`: Number of calls to Otoroshi globally
  * dataIn **required** `integer`: The amount of data sent to Otoroshi globally
  * dataOut **required** `integer`: The amount of data sent from Otoroshi globally

### IpFiltering
* IpFiltering `object`: The filtering configuration block for a service of globally.
  * blacklist **required** `array`: Blacklisted IP addresses
    * items `string`
  * whitelist **required** `array`: Whitelisted IP addresses
    * items `string`

### MailgunSettings
* MailgunSettings `object`: Configuration for mailgun api client
  * apiKey **required** `string`: Mailgun Api Key
  * domain **required** `string`: Mailgun domain

### OtoroshiHealth
* OtoroshiHealth `object`: The structure that represent current Otoroshi health
  * datastore **required** `string` (values: healthy, unhealthy, unreachable)
  * otoroshi **required** `string` (values: healthy, unhealthy, down)

### Patch
* Patch `array`: A set of changes described in JSON Patch format: http://jsonpatch.com/ (RFC 6902)
  * items `object`
    * op **required** `string` (values: add, replace, remove, copy, test)
    * path **required** `string`

### Quotas
* Quotas `object`: Quotas state for an api key on a service group
  * authorizedCallsPerDay **required** `integer`: The number of authorized calls per day
  * authorizedCallsPerMonth **required** `integer`: The number of authorized calls per month
  * authorizedCallsPerSec **required** `integer`: The number of authorized calls per second
  * currentCallsPerDay **required** `integer`: The current number of calls per day
  * currentCallsPerMonth **required** `integer`: The current number of calls per month
  * currentCallsPerSec **required** `integer`: The current number of calls per second
  * remainingCallsPerDay **required** `integer`: The remaining number of calls per day
  * remainingCallsPerMonth **required** `integer`: The number of authorized calls per month
  * remainingCallsPerSec **required** `integer`: The remaining number of calls per second

### Service
* Service `object`: An otoroshi service descriptor. Represent a forward HTTP call on a domain to another location with some optional api management mecanism
  * Canary [Canary](#canary)
  * additionalHeaders `object`: Specify headers that will be added to each client request. Useful to add authentication
  * api [ExposedApi](#exposedapi)
  * buildMode **required** `boolean`: Display a construction page when a user try to use the service
  * clientConfig [ClientConfig](#clientconfig)
  * domain **required** `string`: The domain on which the service is available.
  * enabled **required** `boolean`: Activate or deactivate your service. Once disabled, users will get an error page saying the service does not exist
  * enforceSecureCommunication **required** `boolean`: When enabled, Otoroshi will try to exchange headers with downstream service to ensure no one else can use the service from outside
  * env **required** `string`: The line on which the service is available. Based on that value, the name of the line will be appended to the subdomain. For line prod, nothing will be appended. For example, if the subdomain is 'foo' and line is 'preprod', then the exposed service will be available at 'foo.preprod.mydomain'
  * forceHttps **required** `boolean`: Will force redirection to https:// if not present
  * groupId **required** `string`: Each service descriptor is attached to a group. A group can have one or more services. Each API key is linked to a group and allow access to every service in the group
  * healthCheck [HealthCheck](#healthcheck)
  * id **required** `string`: A unique random string to identify your service
  * ipFiltering [IpFiltering](#ipfiltering)
  * localHost `string`: The host used localy, mainly localhost:xxxx
  * localScheme `string`: The scheme used localy, mainly http
  * maintenanceMode **required** `boolean`: Display a maintainance page when a user try to use the service
  * matchingHeaders `object`: Specify headers that MUST be present on client request to route it. Useful to implement versioning
  * matchingRoot `string`: The root path on which the service is available
  * metadata `object`: Just a bunch of random properties
  * name **required** `string`: The name of your service. Only for debug and human readability purposes
  * privateApp **required** `boolean`: When enabled, user will be allowed to use the service (UI) only if they are registered users of the private apps domain
  * privatePatterns `array`: If you define a public pattern that is a little bit too much, you can make some of public URL private again
    * items `string`
  * publicPatterns `array`: By default, every services are private only and you'll need an API key to access it. However, if you want to expose a public UI, you can define one or more public patterns (regex) to allow access to anybody. For example if you want to allow anybody on any URL, just use '/.*'
    * items `string`
  * redirectToLocal `boolean`: If you work locally with Otoroshi, you may want to use that feature to redirect one particuliar service to a local host. For example, you can relocate https://foo.preprod.bar.com to http://localhost:8080 to make some tests
  * root **required** `string`: Otoroshi will append this root to any target choosen. If the specified root is '/api/foo', then a request to https://yyyyyyy/bar will actually hit https://xxxxxxxxx/api/foo/bar
  * secComExcludedPatterns `array`: URI patterns excluded from secured communications
    * items `string`
  * sendOtoroshiHeadersBack `boolean`: When enabled, Otoroshi will send headers to consumer like request id, client latency, overhead, etc ...
  * statsdConfig [StatsdConfig](#statsdconfig)
  * subdomain **required** `string`: The subdomain on which the service is available
  * targets **required** `array`: The list of target that Otoroshi will proxy and expose through the subdomain defined before. Otoroshi will do round-robin load balancing between all those targets with circuit breaker mecanism to avoid cascading failures
    * items [Target](#target)

### SimpleAdmin
* SimpleAdmin `object`: Administrator using just login/password tuple to access Otoroshi
  * createdAt **required** `integer`: The creation date of the user
  * label **required** `string`: The label for the user
  * password **required** `string`: The hashed password of the user
  * username **required** `string`: The email address of the user

### Stats
* Stats `object`: Live stats for a service or globally
  * calls **required** `integer`: Number of calls on the specified service or globally
  * concurrentHandledRequests **required** `integer`: The number of concurrent request currently
  * dataIn **required** `integer`: The amount of data sent to the specified service or Otoroshi globally
  * dataInRate **required** `integer`: The rate of data sent to the specified service or Otoroshi globally
  * dataOut **required** `integer`: The amount of data sent from the specified service or Otoroshi globally
  * dataOutRate **required** `integer`: The rate of data sent from the specified service or Otoroshi globally
  * duration **required** `integer`: The average duration for a call
  * overhead **required** `integer`: The average overhead time induced by Otoroshi for each call
  * rate **required** `integer`: The rate of data sent from and to the specified service or Otoroshi globally

### StatsdConfig
* StatsdConfig `object`: The configuration for statsd metrics push
  * datadog **required** `boolean`: Datadog agent
  * host **required** `string`: The host of the StatsD agent
  * port **required** `integer`: The port of the StatsD agent

### Target
* Target `object`: A Target is where an HTTP call will be forwarded in the end from a service domain
  * host **required** `string`: The host on which the HTTP call will be forwarded. Can be a domain name, or an IP address. Can also have a port
  * scheme **required** `string`: The protocol used for communication. Can be http or https

### U2FAdmin
* U2FAdmin `object`: Administrator using FIDO U2F device to access Otoroshi
  * createdAt **required** `integer`: The creation date of the user
  * label **required** `string`: The label for the user
  * password **required** `string`: The hashed password of the user
  * registration **required** `object`: The U2F registration slug
  * username **required** `string`: The email address of the user

### Webhook
* Webhook `object`: A callback URL where events are posted
  * headers **required** `object`: Headers to authorize the call or whatever
  * url **required** `string`: The URL where events are posted


