# @datafire/rbaskets_in
RESTful API of Request Baskets service

## Operation: baskets.get
Fetches a list of basket names managed by service. Require master token.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "max": {
      "type": "integer",
      "description": "Maximum number of basket names to return; default 20"
    },
    "skip": {
      "type": "integer",
      "description": "Number of basket names to skip; default 0"
    },
    "q": {
      "type": "string",
      "description": "Query string to filter result, only those basket names that match the query will be included in response"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Baskets"
}
```
## Operation: baskets.name.delete
Permanently deletes this basket and all collected requests.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "The basket name"
    }
  },
  "additionalProperties": false,
  "required": [
    "name"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: baskets.name.get
Retrieves configuration settings of this basket.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "The basket name"
    }
  },
  "additionalProperties": false,
  "required": [
    "name"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Config"
}
```
## Operation: baskets.name.post
Creates a new basket with this name.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "The name of new basket"
    },
    "config": {
      "$ref": "#/definitions/Config"
    }
  },
  "additionalProperties": false,
  "required": [
    "name"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Token"
}
```
## Operation: baskets.name.put
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


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "The basket name"
    },
    "config": {
      "$ref": "#/definitions/Config"
    }
  },
  "additionalProperties": false,
  "required": [
    "name",
    "config"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: baskets.name.requests.delete
Deletes all requests collected by this basket.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "The basket name"
    }
  },
  "additionalProperties": false,
  "required": [
    "name"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: baskets.name.requests.get
Fetches collection of requests collected by this basket.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "The basket name"
    },
    "max": {
      "type": "integer",
      "description": "Maximum number of requests to return; default 20"
    },
    "skip": {
      "type": "integer",
      "description": "Number of requests to skip; default 0"
    },
    "q": {
      "type": "string",
      "description": "Query string to filter result, only requests that match the query will be included in response"
    },
    "in": {
      "type": "string",
      "description": "Defines what is taken into account when filtering is applied: `body` - search in content body of collected requests,\n`query` - search among query parameters of collected requests, `headers` - search among request header values,\n`any` - search anywhere; default `any`\n",
      "enum": [
        "any",
        "body",
        "query",
        "headers"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "name"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Requests"
}
```
## Operation: baskets.name.responses.method.get
Retrieves information about configured response of the basket. Service will reply with this response to any
HTTP request sent to the basket with appropriate HTTP method.

If nothing is configured, the default response is HTTP 200 - OK with empty content.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "The basket name"
    },
    "method": {
      "type": "string",
      "description": "The HTTP method this response is configured for",
      "enum": [
        "GET",
        "HEAD",
        "POST",
        "PUT",
        "PATCH",
        "DELETE",
        "CONNECT",
        "OPTIONS",
        "TRACE"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "name",
    "method"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Response"
}
```
## Operation: baskets.name.responses.method.put
Allows to configure HTTP response of this basket. The service will reply with configured response to any HTTP
request sent to the basket with appropriate HTTP method.

If nothing is configured, the default response is HTTP 200 - OK with empty content.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "The basket name"
    },
    "method": {
      "type": "string",
      "description": "The HTTP method this response is configured for",
      "enum": [
        "GET",
        "HEAD",
        "POST",
        "PUT",
        "PATCH",
        "DELETE",
        "CONNECT",
        "OPTIONS",
        "TRACE"
      ]
    },
    "response": {
      "$ref": "#/definitions/Response"
    }
  },
  "additionalProperties": false,
  "required": [
    "name",
    "method",
    "response"
  ]
}
```
### Output Schema
```json
{}
```
