# @datafire/rbaskets_in

Client library for Request Baskets

## Installation and Usage
```bash
npm install --save datafire @datafire/rbaskets_in
```

```js
let datafire = require('datafire');
let rbaskets_in = require('@datafire/rbaskets_in').actions;

let account = {
  basket_token: "",
}
let context = new datafire.Context({
  accounts: {
    rbaskets_in: account,
  }
})

rbaskets_in.baskets.get({}, context).then(data => {
  console.log(data);
})
```

## Description
RESTful API of Request Baskets service

## Actions
### baskets.get
Fetches a list of basket names managed by service. Require master token.


```js
rbaskets_in.baskets.get({}, context)
```

#### Parameters
* max (integer) - Maximum number of basket names to return; default 20
* skip (integer) - Number of basket names to skip; default 0
* q (string) - Query string to filter result, only those basket names that match the query will be included in response

### baskets.name.delete
Permanently deletes this basket and all collected requests.


```js
rbaskets_in.baskets.name.delete({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required** - The basket name

### baskets.name.get
Retrieves configuration settings of this basket.


```js
rbaskets_in.baskets.name.get({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required** - The basket name

### baskets.name.post
Creates a new basket with this name.


```js
rbaskets_in.baskets.name.post({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required** - The name of new basket
* config (object)

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

#### Parameters
* name (string) **required** - The basket name
* config (object) **required**

### baskets.name.requests.delete
Deletes all requests collected by this basket.


```js
rbaskets_in.baskets.name.requests.delete({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required** - The basket name

### baskets.name.requests.get
Fetches collection of requests collected by this basket.


```js
rbaskets_in.baskets.name.requests.get({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required** - The basket name
* max (integer) - Maximum number of requests to return; default 20
* skip (integer) - Number of requests to skip; default 0
* q (string) - Query string to filter result, only requests that match the query will be included in response
* in (string) - Defines what is taken into account when filtering is applied: `body` - search in content body of collected requests,

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

#### Parameters
* name (string) **required** - The basket name
* method (string) **required** - The HTTP method this response is configured for

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

#### Parameters
* name (string) **required** - The basket name
* method (string) **required** - The HTTP method this response is configured for
* response (object) **required**

