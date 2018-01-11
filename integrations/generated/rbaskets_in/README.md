# @datafire/rbaskets_in

Client library for Request Baskets

## Installation and Usage
```bash
npm install --save @datafire/rbaskets_in
```
```js
let rbaskets_in = require('@datafire/rbaskets_in').create({
  basket_token: ""
});

rbaskets_in.baskets.get({}).then(data => {
  console.log(data);
})
```

## Description

RESTful API of [Request Baskets](https://rbaskets.in) service.

Request Baskets is an open source project of a service to collect HTTP requests and inspect them via RESTful
API or web UI.

Check out the [project page](https://github.com/darklynx/request-baskets) for more detailed description.


## Actions

### baskets.get
Fetches a list of basket names managed by service. Require master token.


```js
rbaskets_in.baskets.get({}, context)
```

#### Input
* input `object`
  * max `integer`: Maximum number of basket names to return; default 20
  * skip `integer`: Number of basket names to skip; default 0
  * q `string`: Query string to filter result, only those basket names that match the query will be included in response

#### Output
* output [Baskets](#baskets)

### baskets.name.delete
Permanently deletes this basket and all collected requests.


```js
rbaskets_in.baskets.name.delete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The basket name

#### Output
*Output schema unknown*

### baskets.name.get
Retrieves configuration settings of this basket.


```js
rbaskets_in.baskets.name.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The basket name

#### Output
* output [Config](#config)

### baskets.name.post
Creates a new basket with this name.


```js
rbaskets_in.baskets.name.post({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of new basket
  * config [Config](#config)

#### Output
* output [Token](#token)

### baskets.name.put
Updates configuration settings of this basket.

Special configuration parameters for request forwarding:
  * `insecure_tls` controls certificate verification when forwarding requests. Setting this parameter to `true`
  allows to forward collected HTTP requests via HTTPS protocol even if the forward end-point is configured with
  self-signed TLS/SSL certificate. **Warning:** enabling this feature has known security implications.
  * `expand_path` changes the logic of constructing taget URL when forwarding requests. If this parameter is
  set to `true` the forward URL path will be expanded when original HTTP request contains compound path. For
  example, a basket with name **server1** is configured to forward all requests to `http://server1.intranet:8001/myservice`
  and it has received an HTTP request like `GET http://baskets.example.com/server1/component/123/events?status=OK`
  then depending on `expand_path` settings the request will be forwarded to:
    * `true` => `GET http://server1.intranet:8001/myservice/component/123/events?status=OK`
    * `false` => `GET http://server1.intranet:8001/myservice?status=OK`



```js
rbaskets_in.baskets.name.put({
  "name": "",
  "config": {}
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The basket name
  * config **required** [Config](#config)

#### Output
*Output schema unknown*

### baskets.name.requests.delete
Deletes all requests collected by this basket.


```js
rbaskets_in.baskets.name.requests.delete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The basket name

#### Output
*Output schema unknown*

### baskets.name.requests.get
Fetches collection of requests collected by this basket.


```js
rbaskets_in.baskets.name.requests.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The basket name
  * max `integer`: Maximum number of requests to return; default 20
  * skip `integer`: Number of requests to skip; default 0
  * q `string`: Query string to filter result, only requests that match the query will be included in response
  * in `string` (values: any, body, query, headers): Defines what is taken into account when filtering is applied: `body` - search in content body of collected requests,

#### Output
* output [Requests](#requests)

### baskets.name.responses.method.get
Retrieves information about configured response of the basket. Service will reply with this response to any
HTTP request sent to the basket with appropriate HTTP method.

If nothing is configured, the default response is HTTP 200 - OK with empty content.



```js
rbaskets_in.baskets.name.responses.method.get({
  "name": "",
  "method": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The basket name
  * method **required** `string` (values: GET, HEAD, POST, PUT, PATCH, DELETE, CONNECT, OPTIONS, TRACE): The HTTP method this response is configured for

#### Output
* output [Response](#response)

### baskets.name.responses.method.put
Allows to configure HTTP response of this basket. The service will reply with configured response to any HTTP
request sent to the basket with appropriate HTTP method.

If nothing is configured, the default response is HTTP 200 - OK with empty content.



```js
rbaskets_in.baskets.name.responses.method.put({
  "name": "",
  "method": "",
  "response": {}
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The basket name
  * method **required** `string` (values: GET, HEAD, POST, PUT, PATCH, DELETE, CONNECT, OPTIONS, TRACE): The HTTP method this response is configured for
  * response **required** [Response](#response)

#### Output
*Output schema unknown*



## Definitions

### Baskets
* Baskets `object`
  * count `integer`: Total number of baskets in the system; not present if query is applied
  * has_more **required** `boolean`: Indicates if there are more baskets to fetch
  * names **required** `array`: Collection of basket names
    * items `string`

### Config
* Config `object`
  * capacity `integer`: Baskets capacity, defines maximum number of requests to store
  * expand_path `boolean`: If set to `true` the forward URL path will be expanded when original HTTP request contains compound path.
  * forward_url `string`: URL to forward all incoming requests of the basket, `empty` value disables forwarding
  * insecure_tls `boolean`: If set to `true` the certificate verification will be disabled if forward URL indicates HTTPS scheme.

### Headers
* Headers `object`: Map of HTTP headers, key represents name, value is array of values

### Request
* Request `object`
  * body `string`: Content of request body
  * content_length `integer`: Content lenght of request
  * date `integer`: Date and time of request in Unix time ms. format (number of miliseconds elapsed since January 1, 1970 UTC)
  * headers [Headers](#headers)
  * method `string`: HTTP methof of request
  * path `string`: URL path of request
  * query `string`: Query parameters of request

### Requests
* Requests `object`
  * count `integer`: Current number of collected requests hold by basket; not present if query is applied
  * has_more **required** `boolean`: Indicates if there are more requests collected by basket to fetch
  * requests **required** `array`: Collection of collected requests
    * items [Request](#request)
  * total_count `integer`: Total number of all requests passed through this basket; not present if query is applied

### Response
* Response `object`
  * body `string`: Content of response body
  * headers [Headers](#headers)
  * is_template `boolean`: If set to `true` the body is treated as [HTML template](https://golang.org/pkg/html/template) that accepts
  * status `integer`: The HTTP status code to reply with

### Token
* Token `object`
  * token **required** `string`: Secure token to manage the basket, generated by system


