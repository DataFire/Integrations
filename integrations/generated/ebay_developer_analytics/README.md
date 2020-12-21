# @datafire/ebay_developer_analytics

Client library for Progress to Rate Limit API

## Installation and Usage
```bash
npm install --save @datafire/ebay_developer_analytics
```
```js
let ebay_developer_analytics = require('@datafire/ebay_developer_analytics').create({
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

The <b>Analytics API</b> retrieves call-limit data and the quotas that are set for the RESTful APIs and their associated resources.  <br><br>Responses from calls made to <b>getRateLimits</b> and <b>getUerRateLimits</b> include a list of the applicable resources and the "call limit", or quota, that is set for each resource. In addition to quota information, the response also includes the number of remaining calls available before the limit is reached, the time remaining before the quota resets, and the length of the "time window" to which the quota applies.  <br><br>The <b>getRateLimits</b> and <b>getUserRateLimits</b> methods retrieve call-limit information for either an application or user, respectively, and each method must be called with an appropriate OAuth token. That is, <b>getRateLimites</b> requires an access token generated with a client credentials grant and <b>getUserRateLimites</b> requires requires an access token generated with an authorization code grant. For more information, see <a href="/api-docs/static/oauth-tokens.html">OAuth tokens</a>.  <br><br>Users can analyze the response data to see whether or not a limit might be reached, and from that determine if any action needs to be taken (such as programmatically throttling their request rate). For more on call limits, see <a href="https://developer.ebay.com/support/app-check" target="_blank">Compatible Application Check</a>.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
ebay_developer_analytics.oauthCallback({
  "code": ""
}, context)
```

#### Input
* input `object`
  * code **required** `string`

#### Output
* output `object`
  * access_token `string`
  * refresh_token `string`
  * token_type `string`
  * scope `string`
  * expiration `string`

### oauthRefresh
Exchange a refresh_token for an access_token


```js
ebay_developer_analytics.oauthRefresh(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * access_token `string`
  * refresh_token `string`
  * token_type `string`
  * scope `string`
  * expiration `string`

### getRateLimits
This method retrieves the call limit and utilization data for an application. The data is retrieved for all RESTful APIs and resources. The response from getRateLimits includes a list of the applicable resources and the &quot;call limit&quot;, or quota, that is set for each resource. In addition to quota information, the response also includes the number of remaining calls available before the limit is reached, the time remaining before the quota resets, and the length of the &quot;time window&quot; to which the quota applies. By default, this method returns utilization data for all RESTful API resources. Use the api_name and api_context query parameters to filter the response to only the desired APIs. For more on call limits, see Compatible Application Check.


```js
ebay_developer_analytics.getRateLimits({}, context)
```

#### Input
* input `object`
  * api_context `string`: This optional query parameter filters the result to include only the specified API context. Acceptable values for the parameter are buy, sell, commerce, and developer.
  * api_name `string`: This optional query parameter filters the result to include only the APIs specified. Example values are browse for the Buy APIs context, inventory for the Sell APIs context, and taxonomy for the Commerce APIs context.

#### Output
* output [RateLimitsResponse](#ratelimitsresponse)

### getUserRateLimits
This method retrieves the call limit and utilization data for an application user. The call-limit data is returned for all RESTful APIs and resources that limit calls on a per-user basis. The response from getUserRateLimits includes a list of the applicable resources and the &quot;call limit&quot;, or quota, that is set for each resource. In addition to quota information, the response also includes the number of remaining calls available before the limit is reached, the time remaining before the quota resets, and the length of the &quot;time window&quot; to which the quota applies. By default, this method returns utilization data for all RESTful API resources that limit request access by user. Use the api_name and api_context query parameters to filter the response to only the desired APIs. For more on call limits, see Compatible Application Check.


```js
ebay_developer_analytics.getUserRateLimits({}, context)
```

#### Input
* input `object`
  * api_context `string`: This optional query parameter filters the result to include only the specified API context. Acceptable values for the parameter are buy, sell, commerce, and developer.
  * api_name `string`: This optional query parameter filters the result to include only the APIs specified. Example values are browse for the Buy APIs context, inventory for the Sell APIs context, and taxonomy for the Commerce APIs context.

#### Output
* output [RateLimitsResponse](#ratelimitsresponse)



## Definitions

### Error
* Error `object`: This type defines the fields that can be returned in an error.
  * parameters `array`: An array of name/value pairs that describe details the error condition. These are useful when multiple errors are returned.
    * items [ErrorParameter](#errorparameter)
  * category `string`: Identifies the type of erro.
  * domain `string`: Name for the primary system where the error occurred. This is relevant for application errors.
  * errorId `integer`: A unique number to identify the error.
  * inputRefIds `array`: An array of request elements most closely associated to the error.
    * items `string`
  * longMessage `string`: A more detailed explanation of the error.
  * message `string`: Information on how to correct the problem, in the end user's terms and language where applicable.
  * outputRefIds `array`: An array of request elements most closely associated to the error.
    * items `string`
  * subdomain `string`: Further helps indicate which subsystem the error is coming from. System subcategories include: Initialization, Serialization, Security, Monitoring, Rate Limiting, etc.

### ErrorParameter
* ErrorParameter `object`
  * name `string`: The object of the error.
  * value `string`: The value of the object.

### Rate
* Rate `object`: This complex type defines a &quot;rate&quot; as the quota of calls that can be made to a resource per time window, the remaining number of calls before the threshold is met, the amount of time until the time window resets, and the length of the time window (in seconds).
  * limit `integer`: The maximum number of requests that can be made to this resource during a set time period. The length of time to which the limit is applied is defined by the associated timeWindow value. This value is often referred to as the &quot;call quota&quot; for the resource.
  * remaining `integer`: The remaining number of requests that can be made to this resource before the associated time window resets.
  * reset `string`: The data and time the time window and accumulated calls for this resource reset. When the reset time is reached, the remaining value is reset to the value of limit, and this reset value is reset to the current time plus the number of seconds defined by the timeWindow value. The time stamp is formatted as an ISO 8601 string, which is based on the 24-hour Universal Coordinated Time (UTC) clock. Format: YYYY-MM-DDTHH:MM:SS.SSSZ Example: 2018-08-04T07:09:00.000Z
  * timeWindow `integer`: A period of time, expressed in seconds. The call quota for a resource is applied to the period of time defined by the value of this field.

### RateLimit
* RateLimit `object`: This complex types defines the resource (such as an API method) for which the rate-limit data is returned. A method is included in an API, and an API is part of an API context for the API version specified.
  * apiContext `string`: The context of the API for which rate-limit data is returned. For example buy, sell, commerce, or developer.
  * apiName `string`: The name of the API for which rate-limit data is returned. For example browse for the Buy API, inventory for the Sell API, or taxonomy for the Commerce API.
  * apiVersion `string`: The version of the API for which rate-limit data is returned. For example v1 or v2.
  * resources `array`: A list of the methods for which rate-limit data is returned. For example item for the Feed API, getOrder for the Fulfillment API, and getProduct for the Catalog API.
    * items [Resource](#resource)

### RateLimitsResponse
* RateLimitsResponse `object`: This complex type defines a list of rate-limit data as it pertains to a method within the specified version of an API.
  * rateLimits `array`: The rate-limit data for the specified APIs. The rate-limit data is returned for all the methods in the specified APIs and data pertains to the current time window.
    * items [RateLimit](#ratelimit)

### Resource
* Resource `object`: This complex type defines the resource (API method) and the current rate-limit data for that resource.
  * name `string`: The name of the resource (an API or an API method) to which the rate-limit data applies.
  * rates `array`: A list of rate-limit data, where each list element represents the rate-limit data for a specific resource.
    * items [Rate](#rate)


