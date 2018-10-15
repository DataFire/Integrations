# @datafire/openapi_space

Client library for OpenAPI space

## Installation and Usage
```bash
npm install --save @datafire/openapi_space
```
```js
let openapi_space = require('@datafire/openapi_space').create({
  AuthToken: ""
});

openapi_space.register({}).then(data => {
  console.log(data);
});
```

## Description

This is the API for OpenAPI space.

## Actions

### search_apis
Retrieves a list of currently defined APIs in API meta list format.


```js
openapi_space.search_apis({}, context)
```

#### Input
* input `object`
  * query `string`: free text query to match
  * limit `integer`: the maximum number of APIs to return
  * offset `integer`: the offset where to start from when fetching a limited number of APIs
  * sort `string` (values: NAME, UPDATED, CREATED, OWNER): sort criteria or result set
  * order `string` (values: ASC, DESC): sort order

#### Output
* output [APIMetaList](#apimetalist)

### get_owner_apis
Retrieves an API meta listing of all APIs defined for this owner


```js
openapi_space.get_owner_apis({
  "owner": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: API owner identifier
  * sort `string` (values: NAME, UPDATED, CREATED, OWNER): sort criteria or result set
  * order `string` (values: ASC, DESC): sort order

#### Output
* output [APIMetaList](#apimetalist)

### delete_api
Deletes the specified API


```js
openapi_space.delete_api({
  "owner": "",
  "api": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: API owner identifier
  * api **required** `string`: API identifier

#### Output
* output [APIMetaList](#apimetalist)

### get_api_versions
Retrieves an API meta listing for all API versions for this owner and API


```js
openapi_space.get_api_versions({
  "owner": "",
  "api": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: API owner identifier
  * api **required** `string`: API identifier

#### Output
* output [APIMetaList](#apimetalist)

### save_definition
Saves the provided Swagger definition; the owner must match the token owner. The version will be extracted from the Swagger definitions itself.


```js
openapi_space.save_definition({
  "owner": "",
  "api": "",
  "definition": {}
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: API owner identifier
  * api **required** `string`: API identifier
  * private `boolean`: Defines whether the API has to be private
  * definition **required** `object`
  * force `boolean`: force update

#### Output
* output [APIMeta](#apimeta)

### delete_api_version
Deletes a particular version of the specified API


```js
openapi_space.delete_api_version({
  "owner": "",
  "api": "",
  "version": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: API owner identifier
  * api **required** `string`: API identifier
  * version **required** `string`: version identifier

#### Output
* output [APIMeta](#apimeta)

### publish_api_version
Publish a particular version of the specified API


```js
openapi_space.publish_api_version({
  "owner": "",
  "api": "",
  "version": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: API owner identifier
  * api **required** `string`: API identifier
  * version **required** `string`: version identifier

#### Output
*Output schema unknown*

### get_json_definition
Retrieves the Swagger definition for the specified API and version in JSON format


```js
openapi_space.get_json_definition({
  "owner": "",
  "api": "",
  "version": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: API owner identifier
  * api **required** `string`: API identifier
  * version **required** `string`: version identifier

#### Output
* output `object`

### get_yaml_definition
Retrieves the Swagger definition for the specified API and version in YAML format


```js
openapi_space.get_yaml_definition({
  "owner": "",
  "api": "",
  "version": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: API owner identifier
  * api **required** `string`: API identifier
  * version **required** `string`: version identifier

#### Output
* output `object`

### login
Log in to OpenAPI space


```js
openapi_space.login({}, context)
```

#### Input
* input `object`
  * body [Credentials](#credentials)

#### Output
* output [LoginToken](#logintoken)

### login_apinf
Log in to OpenAPI space using an APInf account


```js
openapi_space.login_apinf({}, context)
```

#### Input
* input `object`
  * body `object`
    * password **required** `string`
    * username **required** `string`

#### Output
* output [LoginToken](#logintoken)

### login_apinf_token
Log in to OpenAPI space using an APInf authentication token


```js
openapi_space.login_apinf_token({}, context)
```

#### Input
* input `object`
  * body `object`
    * auth_token **required** `string`
    * user_id **required** `string`

#### Output
* output [LoginToken](#logintoken)

### logout
Log out from OpenAPI space


```js
openapi_space.logout(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### ping
Check whether or not you are authenticated


```js
openapi_space.ping(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Registration](#registration)

### register
Register to OpenAPI space


```js
openapi_space.register({}, context)
```

#### Input
* input `object`
  * body [Registration](#registration)

#### Output
* output [LoginToken](#logintoken)



## Definitions

### APIMeta
* APIMeta `object`
  * created `string`
  * description `string`
  * modified `string`
  * name `string`
  * owner `string`
  * swagger `object`: An optional Swagger spec. Not included in meta lists.
  * url `string`
  * versions `array`


### APIMetaList
* APIMetaList `array`
  * items [APIMeta](#apimeta)

### Credentials
* Credentials `object`
  * password **required** `string`
  * username **required** `string`

### LoginToken
* LoginToken `object`
  * token `string`: The authentication token sent from the server after a successful login
  * username `string`

### Registration
* Registration
  * password **required** `string`
  * username **required** `string`
  * email **required** `string`


