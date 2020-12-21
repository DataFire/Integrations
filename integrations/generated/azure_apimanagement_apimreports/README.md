# @datafire/azure_apimanagement_apimreports

Client library for ApiManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_apimanagement_apimreports
```
```js
let azure_apimanagement_apimreports = require('@datafire/azure_apimanagement_apimreports').create({
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

Use these REST APIs to get the analytics reports associated with your Azure API Management deployment.

## Actions

### Reports_ListByApi
Lists report records by API.


```js
azure_apimanagement_apimreports.Reports_ListByApi({
  "resourceGroupName": "",
  "serviceName": "",
  "$filter": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * $filter **required** `string`: The filter to apply on the operation.
  * $top `integer`: Number of records to return.
  * $skip `integer`: Number of records to skip.
  * $orderby `string`: OData order by query option.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Paged Report records list representation.
  * count `integer`: Total record count number across all pages.
  * nextLink `string`: Next page link if any.
  * value `array`: Page values.
    * items `object`: Report data.
      * apiId `string`: API identifier path. /apis/{apiId}
      * apiRegion `string`: API region identifier.
      * apiTimeAvg `number`: Average time it took to process request.
      * apiTimeMax `number`: Maximum time it took to process request.
      * apiTimeMin `number`: Minimum time it took to process request.
      * bandwidth `integer`: Bandwidth consumed.
      * cacheHitCount `integer`: Number of times when content was served from cache policy.
      * cacheMissCount `integer`: Number of times content was fetched from backend.
      * callCountBlocked `integer`: Number of calls blocked due to invalid credentials. This includes calls returning HttpStatusCode.Unauthorized and HttpStatusCode.Forbidden and HttpStatusCode.TooManyRequests
      * callCountFailed `integer`: Number of calls failed due to proxy or backend errors. This includes calls returning HttpStatusCode.BadRequest(400) and any Code between HttpStatusCode.InternalServerError (500) and 600
      * callCountOther `integer`: Number of other calls.
      * callCountSuccess `integer`: Number of successful calls. This includes calls returning HttpStatusCode <= 301 and HttpStatusCode.NotModified and HttpStatusCode.TemporaryRedirect
      * callCountTotal `integer`: Total number of calls.
      * country `string`: Country to which this record data is related.
      * interval `string`: Length of aggregation period.  Interval must be multiple of 15 minutes and may not be zero. The value should be in ISO 8601 format (http://en.wikipedia.org/wiki/ISO_8601#Durations).
      * name `string`: Name depending on report endpoint specifies product, API, operation or developer name.
      * operationId `string`: Operation identifier path. /apis/{apiId}/operations/{operationId}
      * productId `string`: Product identifier path. /products/{productId}
      * region `string`: Country region to which this record data is related.
      * serviceTimeAvg `number`: Average time it took to process request on backend.
      * serviceTimeMax `number`: Maximum time it took to process request on backend.
      * serviceTimeMin `number`: Minimum time it took to process request on backend.
      * subscriptionId `string`: Subscription identifier path. /subscriptions/{subscriptionId}
      * timestamp `string`: Start of aggregation period. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
      * userId `string`: User identifier path. /users/{userId}
      * zip `string`: Zip code to which this record data is related.

### Reports_ListByGeo
Lists report records by geography.


```js
azure_apimanagement_apimreports.Reports_ListByGeo({
  "resourceGroupName": "",
  "serviceName": "",
  "$filter": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * $filter **required** `string`: |   Field     |     Usage     |     Supported operators     |     Supported functions     |</br>|-------------|-------------|-------------|-------------|</br>| timestamp | filter | ge, le |     | </br>| country | select |     |     | </br>| region | select |     |     | </br>| zip | select |     |     | </br>| apiRegion | filter | eq |     | </br>| userId | filter | eq |     | </br>| productId | filter | eq |     | </br>| subscriptionId | filter | eq |     | </br>| apiId | filter | eq |     | </br>| operationId | filter | eq |     | </br>| callCountSuccess | select |     |     | </br>| callCountBlocked | select |     |     | </br>| callCountFailed | select |     |     | </br>| callCountOther | select |     |     | </br>| bandwidth | select, orderBy |     |     | </br>| cacheHitsCount | select |     |     | </br>| cacheMissCount | select |     |     | </br>| apiTimeAvg | select |     |     | </br>| apiTimeMin | select |     |     | </br>| apiTimeMax | select |     |     | </br>| serviceTimeAvg | select |     |     | </br>| serviceTimeMin | select |     |     | </br>| serviceTimeMax | select |     |     | </br>
  * $top `integer`: Number of records to return.
  * $skip `integer`: Number of records to skip.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Paged Report records list representation.
  * count `integer`: Total record count number across all pages.
  * nextLink `string`: Next page link if any.
  * value `array`: Page values.
    * items `object`: Report data.
      * apiId `string`: API identifier path. /apis/{apiId}
      * apiRegion `string`: API region identifier.
      * apiTimeAvg `number`: Average time it took to process request.
      * apiTimeMax `number`: Maximum time it took to process request.
      * apiTimeMin `number`: Minimum time it took to process request.
      * bandwidth `integer`: Bandwidth consumed.
      * cacheHitCount `integer`: Number of times when content was served from cache policy.
      * cacheMissCount `integer`: Number of times content was fetched from backend.
      * callCountBlocked `integer`: Number of calls blocked due to invalid credentials. This includes calls returning HttpStatusCode.Unauthorized and HttpStatusCode.Forbidden and HttpStatusCode.TooManyRequests
      * callCountFailed `integer`: Number of calls failed due to proxy or backend errors. This includes calls returning HttpStatusCode.BadRequest(400) and any Code between HttpStatusCode.InternalServerError (500) and 600
      * callCountOther `integer`: Number of other calls.
      * callCountSuccess `integer`: Number of successful calls. This includes calls returning HttpStatusCode <= 301 and HttpStatusCode.NotModified and HttpStatusCode.TemporaryRedirect
      * callCountTotal `integer`: Total number of calls.
      * country `string`: Country to which this record data is related.
      * interval `string`: Length of aggregation period.  Interval must be multiple of 15 minutes and may not be zero. The value should be in ISO 8601 format (http://en.wikipedia.org/wiki/ISO_8601#Durations).
      * name `string`: Name depending on report endpoint specifies product, API, operation or developer name.
      * operationId `string`: Operation identifier path. /apis/{apiId}/operations/{operationId}
      * productId `string`: Product identifier path. /products/{productId}
      * region `string`: Country region to which this record data is related.
      * serviceTimeAvg `number`: Average time it took to process request on backend.
      * serviceTimeMax `number`: Maximum time it took to process request on backend.
      * serviceTimeMin `number`: Minimum time it took to process request on backend.
      * subscriptionId `string`: Subscription identifier path. /subscriptions/{subscriptionId}
      * timestamp `string`: Start of aggregation period. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
      * userId `string`: User identifier path. /users/{userId}
      * zip `string`: Zip code to which this record data is related.

### Reports_ListByOperation
Lists report records by API Operations.


```js
azure_apimanagement_apimreports.Reports_ListByOperation({
  "resourceGroupName": "",
  "serviceName": "",
  "$filter": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * $filter **required** `string`: |   Field     |     Usage     |     Supported operators     |     Supported functions     |</br>|-------------|-------------|-------------|-------------|</br>| timestamp | filter | ge, le |     | </br>| displayName | select, orderBy |     |     | </br>| apiRegion | filter | eq |     | </br>| userId | filter | eq |     | </br>| productId | filter | eq |     | </br>| subscriptionId | filter | eq |     | </br>| apiId | filter | eq |     | </br>| operationId | select, filter | eq |     | </br>| callCountSuccess | select, orderBy |     |     | </br>| callCountBlocked | select, orderBy |     |     | </br>| callCountFailed | select, orderBy |     |     | </br>| callCountOther | select, orderBy |     |     | </br>| callCountTotal | select, orderBy |     |     | </br>| bandwidth | select, orderBy |     |     | </br>| cacheHitsCount | select |     |     | </br>| cacheMissCount | select |     |     | </br>| apiTimeAvg | select, orderBy |     |     | </br>| apiTimeMin | select |     |     | </br>| apiTimeMax | select |     |     | </br>| serviceTimeAvg | select |     |     | </br>| serviceTimeMin | select |     |     | </br>| serviceTimeMax | select |     |     | </br>
  * $top `integer`: Number of records to return.
  * $skip `integer`: Number of records to skip.
  * $orderby `string`: OData order by query option.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Paged Report records list representation.
  * count `integer`: Total record count number across all pages.
  * nextLink `string`: Next page link if any.
  * value `array`: Page values.
    * items `object`: Report data.
      * apiId `string`: API identifier path. /apis/{apiId}
      * apiRegion `string`: API region identifier.
      * apiTimeAvg `number`: Average time it took to process request.
      * apiTimeMax `number`: Maximum time it took to process request.
      * apiTimeMin `number`: Minimum time it took to process request.
      * bandwidth `integer`: Bandwidth consumed.
      * cacheHitCount `integer`: Number of times when content was served from cache policy.
      * cacheMissCount `integer`: Number of times content was fetched from backend.
      * callCountBlocked `integer`: Number of calls blocked due to invalid credentials. This includes calls returning HttpStatusCode.Unauthorized and HttpStatusCode.Forbidden and HttpStatusCode.TooManyRequests
      * callCountFailed `integer`: Number of calls failed due to proxy or backend errors. This includes calls returning HttpStatusCode.BadRequest(400) and any Code between HttpStatusCode.InternalServerError (500) and 600
      * callCountOther `integer`: Number of other calls.
      * callCountSuccess `integer`: Number of successful calls. This includes calls returning HttpStatusCode <= 301 and HttpStatusCode.NotModified and HttpStatusCode.TemporaryRedirect
      * callCountTotal `integer`: Total number of calls.
      * country `string`: Country to which this record data is related.
      * interval `string`: Length of aggregation period.  Interval must be multiple of 15 minutes and may not be zero. The value should be in ISO 8601 format (http://en.wikipedia.org/wiki/ISO_8601#Durations).
      * name `string`: Name depending on report endpoint specifies product, API, operation or developer name.
      * operationId `string`: Operation identifier path. /apis/{apiId}/operations/{operationId}
      * productId `string`: Product identifier path. /products/{productId}
      * region `string`: Country region to which this record data is related.
      * serviceTimeAvg `number`: Average time it took to process request on backend.
      * serviceTimeMax `number`: Maximum time it took to process request on backend.
      * serviceTimeMin `number`: Minimum time it took to process request on backend.
      * subscriptionId `string`: Subscription identifier path. /subscriptions/{subscriptionId}
      * timestamp `string`: Start of aggregation period. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
      * userId `string`: User identifier path. /users/{userId}
      * zip `string`: Zip code to which this record data is related.

### Reports_ListByProduct
Lists report records by Product.


```js
azure_apimanagement_apimreports.Reports_ListByProduct({
  "resourceGroupName": "",
  "serviceName": "",
  "$filter": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * $filter **required** `string`: |   Field     |     Usage     |     Supported operators     |     Supported functions     |</br>|-------------|-------------|-------------|-------------|</br>| timestamp | filter | ge, le |     | </br>| displayName | select, orderBy |     |     | </br>| apiRegion | filter | eq |     | </br>| userId | filter | eq |     | </br>| productId | select, filter | eq |     | </br>| subscriptionId | filter | eq |     | </br>| callCountSuccess | select, orderBy |     |     | </br>| callCountBlocked | select, orderBy |     |     | </br>| callCountFailed | select, orderBy |     |     | </br>| callCountOther | select, orderBy |     |     | </br>| callCountTotal | select, orderBy |     |     | </br>| bandwidth | select, orderBy |     |     | </br>| cacheHitsCount | select |     |     | </br>| cacheMissCount | select |     |     | </br>| apiTimeAvg | select, orderBy |     |     | </br>| apiTimeMin | select |     |     | </br>| apiTimeMax | select |     |     | </br>| serviceTimeAvg | select |     |     | </br>| serviceTimeMin | select |     |     | </br>| serviceTimeMax | select |     |     | </br>
  * $top `integer`: Number of records to return.
  * $skip `integer`: Number of records to skip.
  * $orderby `string`: OData order by query option.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Paged Report records list representation.
  * count `integer`: Total record count number across all pages.
  * nextLink `string`: Next page link if any.
  * value `array`: Page values.
    * items `object`: Report data.
      * apiId `string`: API identifier path. /apis/{apiId}
      * apiRegion `string`: API region identifier.
      * apiTimeAvg `number`: Average time it took to process request.
      * apiTimeMax `number`: Maximum time it took to process request.
      * apiTimeMin `number`: Minimum time it took to process request.
      * bandwidth `integer`: Bandwidth consumed.
      * cacheHitCount `integer`: Number of times when content was served from cache policy.
      * cacheMissCount `integer`: Number of times content was fetched from backend.
      * callCountBlocked `integer`: Number of calls blocked due to invalid credentials. This includes calls returning HttpStatusCode.Unauthorized and HttpStatusCode.Forbidden and HttpStatusCode.TooManyRequests
      * callCountFailed `integer`: Number of calls failed due to proxy or backend errors. This includes calls returning HttpStatusCode.BadRequest(400) and any Code between HttpStatusCode.InternalServerError (500) and 600
      * callCountOther `integer`: Number of other calls.
      * callCountSuccess `integer`: Number of successful calls. This includes calls returning HttpStatusCode <= 301 and HttpStatusCode.NotModified and HttpStatusCode.TemporaryRedirect
      * callCountTotal `integer`: Total number of calls.
      * country `string`: Country to which this record data is related.
      * interval `string`: Length of aggregation period.  Interval must be multiple of 15 minutes and may not be zero. The value should be in ISO 8601 format (http://en.wikipedia.org/wiki/ISO_8601#Durations).
      * name `string`: Name depending on report endpoint specifies product, API, operation or developer name.
      * operationId `string`: Operation identifier path. /apis/{apiId}/operations/{operationId}
      * productId `string`: Product identifier path. /products/{productId}
      * region `string`: Country region to which this record data is related.
      * serviceTimeAvg `number`: Average time it took to process request on backend.
      * serviceTimeMax `number`: Maximum time it took to process request on backend.
      * serviceTimeMin `number`: Minimum time it took to process request on backend.
      * subscriptionId `string`: Subscription identifier path. /subscriptions/{subscriptionId}
      * timestamp `string`: Start of aggregation period. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
      * userId `string`: User identifier path. /users/{userId}
      * zip `string`: Zip code to which this record data is related.

### Reports_ListByRequest
Lists report records by Request.


```js
azure_apimanagement_apimreports.Reports_ListByRequest({
  "resourceGroupName": "",
  "serviceName": "",
  "$filter": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * $filter **required** `string`: |   Field     |     Usage     |     Supported operators     |     Supported functions     |</br>|-------------|-------------|-------------|-------------|</br>| timestamp | filter | ge, le |     | </br>| apiId | filter | eq |     | </br>| operationId | filter | eq |     | </br>| productId | filter | eq |     | </br>| userId | filter | eq |     | </br>| apiRegion | filter | eq |     | </br>| subscriptionId | filter | eq |     | </br>
  * $top `integer`: Number of records to return.
  * $skip `integer`: Number of records to skip.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Paged Report records list representation.
  * count `integer`: Total record count number across all pages.
  * value `array`: Page values.
    * items `object`: Request Report data.
      * apiId `string`: API identifier path. /apis/{apiId}
      * apiRegion `string`: Azure region where the gateway that processed this request is located.
      * apiTime `number`: The total time it took to process this request.
      * backendResponseCode `string`: The HTTP status code received by the gateway as a result of forwarding this request to the backend.
      * cache `string`: Specifies if response cache was involved in generating the response. If the value is none, the cache was not used. If the value is hit, cached response was returned. If the value is miss, the cache was used but lookup resulted in a miss and request was fulfilled by the backend.
      * ipAddress `string`: The client IP address associated with this request.
      * method `string`: The HTTP method associated with this request..
      * operationId `string`: Operation identifier path. /apis/{apiId}/operations/{operationId}
      * productId `string`: Product identifier path. /products/{productId}
      * requestId `string`: Request Identifier.
      * requestSize `integer`: The size of this request..
      * responseCode `integer`: The HTTP status code returned by the gateway.
      * responseSize `integer`: The size of the response returned by the gateway.
      * serviceTime `number`: he time it took to forward this request to the backend and get the response back.
      * subscriptionId `string`: Subscription identifier path. /subscriptions/{subscriptionId}
      * timestamp `string`: The date and time when this request was received by the gateway in ISO 8601 format.
      * url `string`: The full URL associated with this request.
      * userId `string`: User identifier path. /users/{userId}

### Reports_ListBySubscription
Lists report records by subscription.


```js
azure_apimanagement_apimreports.Reports_ListBySubscription({
  "resourceGroupName": "",
  "serviceName": "",
  "$filter": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * $filter **required** `string`: |   Field     |     Usage     |     Supported operators     |     Supported functions     |</br>|-------------|-------------|-------------|-------------|</br>| timestamp | filter | ge, le |     | </br>| displayName | select, orderBy |     |     | </br>| apiRegion | filter | eq |     | </br>| userId | select, filter | eq |     | </br>| productId | select, filter | eq |     | </br>| subscriptionId | select, filter | eq |     | </br>| callCountSuccess | select, orderBy |     |     | </br>| callCountBlocked | select, orderBy |     |     | </br>| callCountFailed | select, orderBy |     |     | </br>| callCountOther | select, orderBy |     |     | </br>| callCountTotal | select, orderBy |     |     | </br>| bandwidth | select, orderBy |     |     | </br>| cacheHitsCount | select |     |     | </br>| cacheMissCount | select |     |     | </br>| apiTimeAvg | select, orderBy |     |     | </br>| apiTimeMin | select |     |     | </br>| apiTimeMax | select |     |     | </br>| serviceTimeAvg | select |     |     | </br>| serviceTimeMin | select |     |     | </br>| serviceTimeMax | select |     |     | </br>
  * $top `integer`: Number of records to return.
  * $skip `integer`: Number of records to skip.
  * $orderby `string`: OData order by query option.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Paged Report records list representation.
  * count `integer`: Total record count number across all pages.
  * nextLink `string`: Next page link if any.
  * value `array`: Page values.
    * items `object`: Report data.
      * apiId `string`: API identifier path. /apis/{apiId}
      * apiRegion `string`: API region identifier.
      * apiTimeAvg `number`: Average time it took to process request.
      * apiTimeMax `number`: Maximum time it took to process request.
      * apiTimeMin `number`: Minimum time it took to process request.
      * bandwidth `integer`: Bandwidth consumed.
      * cacheHitCount `integer`: Number of times when content was served from cache policy.
      * cacheMissCount `integer`: Number of times content was fetched from backend.
      * callCountBlocked `integer`: Number of calls blocked due to invalid credentials. This includes calls returning HttpStatusCode.Unauthorized and HttpStatusCode.Forbidden and HttpStatusCode.TooManyRequests
      * callCountFailed `integer`: Number of calls failed due to proxy or backend errors. This includes calls returning HttpStatusCode.BadRequest(400) and any Code between HttpStatusCode.InternalServerError (500) and 600
      * callCountOther `integer`: Number of other calls.
      * callCountSuccess `integer`: Number of successful calls. This includes calls returning HttpStatusCode <= 301 and HttpStatusCode.NotModified and HttpStatusCode.TemporaryRedirect
      * callCountTotal `integer`: Total number of calls.
      * country `string`: Country to which this record data is related.
      * interval `string`: Length of aggregation period.  Interval must be multiple of 15 minutes and may not be zero. The value should be in ISO 8601 format (http://en.wikipedia.org/wiki/ISO_8601#Durations).
      * name `string`: Name depending on report endpoint specifies product, API, operation or developer name.
      * operationId `string`: Operation identifier path. /apis/{apiId}/operations/{operationId}
      * productId `string`: Product identifier path. /products/{productId}
      * region `string`: Country region to which this record data is related.
      * serviceTimeAvg `number`: Average time it took to process request on backend.
      * serviceTimeMax `number`: Maximum time it took to process request on backend.
      * serviceTimeMin `number`: Minimum time it took to process request on backend.
      * subscriptionId `string`: Subscription identifier path. /subscriptions/{subscriptionId}
      * timestamp `string`: Start of aggregation period. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
      * userId `string`: User identifier path. /users/{userId}
      * zip `string`: Zip code to which this record data is related.

### Reports_ListByTime
Lists report records by Time.


```js
azure_apimanagement_apimreports.Reports_ListByTime({
  "resourceGroupName": "",
  "serviceName": "",
  "$filter": "",
  "interval": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * $filter **required** `string`: |   Field     |     Usage     |     Supported operators     |     Supported functions     |</br>|-------------|-------------|-------------|-------------|</br>| timestamp | filter, select | ge, le |     | </br>| interval | select |     |     | </br>| apiRegion | filter | eq |     | </br>| userId | filter | eq |     | </br>| productId | filter | eq |     | </br>| subscriptionId | filter | eq |     | </br>| apiId | filter | eq |     | </br>| operationId | filter | eq |     | </br>| callCountSuccess | select |     |     | </br>| callCountBlocked | select |     |     | </br>| callCountFailed | select |     |     | </br>| callCountOther | select |     |     | </br>| bandwidth | select, orderBy |     |     | </br>| cacheHitsCount | select |     |     | </br>| cacheMissCount | select |     |     | </br>| apiTimeAvg | select |     |     | </br>| apiTimeMin | select |     |     | </br>| apiTimeMax | select |     |     | </br>| serviceTimeAvg | select |     |     | </br>| serviceTimeMin | select |     |     | </br>| serviceTimeMax | select |     |     | </br>
  * $top `integer`: Number of records to return.
  * $skip `integer`: Number of records to skip.
  * $orderby `string`: OData order by query option.
  * interval **required** `string`: By time interval. Interval must be multiple of 15 minutes and may not be zero. The value should be in ISO  8601 format (http://en.wikipedia.org/wiki/ISO_8601#Durations).This code can be used to convert TimeSpan to a valid interval string: XmlConvert.ToString(new TimeSpan(hours, minutes, seconds)).
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Paged Report records list representation.
  * count `integer`: Total record count number across all pages.
  * nextLink `string`: Next page link if any.
  * value `array`: Page values.
    * items `object`: Report data.
      * apiId `string`: API identifier path. /apis/{apiId}
      * apiRegion `string`: API region identifier.
      * apiTimeAvg `number`: Average time it took to process request.
      * apiTimeMax `number`: Maximum time it took to process request.
      * apiTimeMin `number`: Minimum time it took to process request.
      * bandwidth `integer`: Bandwidth consumed.
      * cacheHitCount `integer`: Number of times when content was served from cache policy.
      * cacheMissCount `integer`: Number of times content was fetched from backend.
      * callCountBlocked `integer`: Number of calls blocked due to invalid credentials. This includes calls returning HttpStatusCode.Unauthorized and HttpStatusCode.Forbidden and HttpStatusCode.TooManyRequests
      * callCountFailed `integer`: Number of calls failed due to proxy or backend errors. This includes calls returning HttpStatusCode.BadRequest(400) and any Code between HttpStatusCode.InternalServerError (500) and 600
      * callCountOther `integer`: Number of other calls.
      * callCountSuccess `integer`: Number of successful calls. This includes calls returning HttpStatusCode <= 301 and HttpStatusCode.NotModified and HttpStatusCode.TemporaryRedirect
      * callCountTotal `integer`: Total number of calls.
      * country `string`: Country to which this record data is related.
      * interval `string`: Length of aggregation period.  Interval must be multiple of 15 minutes and may not be zero. The value should be in ISO 8601 format (http://en.wikipedia.org/wiki/ISO_8601#Durations).
      * name `string`: Name depending on report endpoint specifies product, API, operation or developer name.
      * operationId `string`: Operation identifier path. /apis/{apiId}/operations/{operationId}
      * productId `string`: Product identifier path. /products/{productId}
      * region `string`: Country region to which this record data is related.
      * serviceTimeAvg `number`: Average time it took to process request on backend.
      * serviceTimeMax `number`: Maximum time it took to process request on backend.
      * serviceTimeMin `number`: Minimum time it took to process request on backend.
      * subscriptionId `string`: Subscription identifier path. /subscriptions/{subscriptionId}
      * timestamp `string`: Start of aggregation period. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
      * userId `string`: User identifier path. /users/{userId}
      * zip `string`: Zip code to which this record data is related.

### Reports_ListByUser
Lists report records by User.


```js
azure_apimanagement_apimreports.Reports_ListByUser({
  "resourceGroupName": "",
  "serviceName": "",
  "$filter": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * $filter **required** `string`: |   Field     |     Usage     |     Supported operators     |     Supported functions     |</br>|-------------|-------------|-------------|-------------|</br>| timestamp | filter | ge, le |     | </br>| displayName | select, orderBy |     |     | </br>| userId | select, filter | eq |     | </br>| apiRegion | filter | eq |     | </br>| productId | filter | eq |     | </br>| subscriptionId | filter | eq |     | </br>| apiId | filter | eq |     | </br>| operationId | filter | eq |     | </br>| callCountSuccess | select, orderBy |     |     | </br>| callCountBlocked | select, orderBy |     |     | </br>| callCountFailed | select, orderBy |     |     | </br>| callCountOther | select, orderBy |     |     | </br>| callCountTotal | select, orderBy |     |     | </br>| bandwidth | select, orderBy |     |     | </br>| cacheHitsCount | select |     |     | </br>| cacheMissCount | select |     |     | </br>| apiTimeAvg | select, orderBy |     |     | </br>| apiTimeMin | select |     |     | </br>| apiTimeMax | select |     |     | </br>| serviceTimeAvg | select |     |     | </br>| serviceTimeMin | select |     |     | </br>| serviceTimeMax | select |     |     | </br>
  * $top `integer`: Number of records to return.
  * $skip `integer`: Number of records to skip.
  * $orderby `string`: OData order by query option.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Paged Report records list representation.
  * count `integer`: Total record count number across all pages.
  * nextLink `string`: Next page link if any.
  * value `array`: Page values.
    * items `object`: Report data.
      * apiId `string`: API identifier path. /apis/{apiId}
      * apiRegion `string`: API region identifier.
      * apiTimeAvg `number`: Average time it took to process request.
      * apiTimeMax `number`: Maximum time it took to process request.
      * apiTimeMin `number`: Minimum time it took to process request.
      * bandwidth `integer`: Bandwidth consumed.
      * cacheHitCount `integer`: Number of times when content was served from cache policy.
      * cacheMissCount `integer`: Number of times content was fetched from backend.
      * callCountBlocked `integer`: Number of calls blocked due to invalid credentials. This includes calls returning HttpStatusCode.Unauthorized and HttpStatusCode.Forbidden and HttpStatusCode.TooManyRequests
      * callCountFailed `integer`: Number of calls failed due to proxy or backend errors. This includes calls returning HttpStatusCode.BadRequest(400) and any Code between HttpStatusCode.InternalServerError (500) and 600
      * callCountOther `integer`: Number of other calls.
      * callCountSuccess `integer`: Number of successful calls. This includes calls returning HttpStatusCode <= 301 and HttpStatusCode.NotModified and HttpStatusCode.TemporaryRedirect
      * callCountTotal `integer`: Total number of calls.
      * country `string`: Country to which this record data is related.
      * interval `string`: Length of aggregation period.  Interval must be multiple of 15 minutes and may not be zero. The value should be in ISO 8601 format (http://en.wikipedia.org/wiki/ISO_8601#Durations).
      * name `string`: Name depending on report endpoint specifies product, API, operation or developer name.
      * operationId `string`: Operation identifier path. /apis/{apiId}/operations/{operationId}
      * productId `string`: Product identifier path. /products/{productId}
      * region `string`: Country region to which this record data is related.
      * serviceTimeAvg `number`: Average time it took to process request on backend.
      * serviceTimeMax `number`: Maximum time it took to process request on backend.
      * serviceTimeMin `number`: Minimum time it took to process request on backend.
      * subscriptionId `string`: Subscription identifier path. /subscriptions/{subscriptionId}
      * timestamp `string`: Start of aggregation period. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
      * userId `string`: User identifier path. /users/{userId}
      * zip `string`: Zip code to which this record data is related.



## Definitions

*This integration has no definitions*
