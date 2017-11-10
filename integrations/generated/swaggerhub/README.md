# @datafire/swaggerhub

Client library for SwaggerHub Registry

## Installation and Usage
```bash
npm install --save datafire @datafire/swaggerhub
```

```js
let datafire = require('datafire');
let swaggerhub = require('@datafire/swaggerhub').create({
  TokenSecured: "",
});

swaggerhub.searchApisAndDomains({}).then(data => {
  console.log(data);
})
```

## Description
# Introduction
This is the registry API for SwaggerHub. It allows you to access, manage, and update your APIs and Domains in SwaggerHub bypassing the Web application.

# Authentication
Use your personal API Key: you may find it by visiting the   [API Key page](https://app.swaggerhub.com/settings/apiKey).


## Actions
### searchApis
Retrieves a list of currently defined APIs in APIs.json format.


```js
swaggerhub.searchApis({}, context)
```

#### Parameters
* query (string) - free text query to match
* state (string) - matches against published state of the spec
* tag (array) - matches against tags associated with an API
* page (integer) - page to return
* limit (integer) - number of results per page
* sort (string) - sort criteria or result set
* order (string) - sort order

### getOwnerApis
Retrieves an APIs.json listing of all APIs defined for this owner


```js
swaggerhub.getOwnerApis({
  "owner": ""
}, context)
```

#### Parameters
* owner (string) **required** - API or Domaion owner identifier
* page (integer) - page to return
* limit (integer) - number of results per page
* sort (string) - sort criteria or result set
* order (string) - sort order

### deleteApi
Deletes the specified API


```js
swaggerhub.deleteApi({
  "owner": "",
  "api": ""
}, context)
```

#### Parameters
* owner (string) **required** - API or Domaion owner identifier
* api (string) **required** - API identifier

### getApiVersions
Retrieves an APIs.json listing for all API versions for this owner and API


```js
swaggerhub.getApiVersions({
  "owner": "",
  "api": ""
}, context)
```

#### Parameters
* owner (string) **required** - API or Domaion owner identifier
* api (string) **required** - API identifier

### saveDefinition
Saves the provided Swagger definition; the owner must match the token owner. The version will be extracted from the Swagger definitions itself.


```js
swaggerhub.saveDefinition({
  "owner": "",
  "api": "",
  "definition": ""
}, context)
```

#### Parameters
* owner (string) **required** - API or Domaion owner identifier
* api (string) **required** - API identifier
* isPrivate (boolean) - Defines whether the API has to be private
* version (string) - api version
* definition (string) **required**
* force (boolean) - force update

### deleteCollaboration
Deletes API's collaboration


```js
swaggerhub.deleteCollaboration({
  "owner": "",
  "api": ""
}, context)
```

#### Parameters
* owner (string) **required** - API or Domaion owner identifier
* api (string) **required** - API identifier

### getCollaboration
Gets API's collaboration


```js
swaggerhub.getCollaboration({
  "owner": "",
  "api": ""
}, context)
```

#### Parameters
* owner (string) **required** - API or Domaion owner identifier
* api (string) **required** - API identifier
* expandTeams (boolean)

### updateCollaboration
Updates API's collaboration


```js
swaggerhub.updateCollaboration({
  "owner": "",
  "api": ""
}, context)
```

#### Parameters
* owner (string) **required** - API or Domaion owner identifier
* api (string) **required** - API identifier
* body (object)

### deleteApiVersion
Deletes a particular version of the specified API


```js
swaggerhub.deleteApiVersion({
  "owner": "",
  "api": "",
  "version": ""
}, context)
```

#### Parameters
* owner (string) **required** - API or Domaion owner identifier
* api (string) **required** - API identifier
* version (string) **required** - version identifier

### getDefinition
Retrieves the Swagger definition for the specified API and version


```js
swaggerhub.getDefinition({
  "owner": "",
  "api": "",
  "version": ""
}, context)
```

#### Parameters
* owner (string) **required** - API or Domaion owner identifier
* api (string) **required** - API identifier
* version (string) **required** - version identifier

### getJsonDefinition
Retrieves the Swagger definition for the specified API and version in JSON format


```js
swaggerhub.getJsonDefinition({
  "owner": "",
  "api": "",
  "version": ""
}, context)
```

#### Parameters
* owner (string) **required** - API or Domaion owner identifier
* api (string) **required** - API identifier
* version (string) **required** - version identifier

### getYamlDefinition
Retrieves the Swagger definition for the specified API and version in YAML format


```js
swaggerhub.getYamlDefinition({
  "owner": "",
  "api": "",
  "version": ""
}, context)
```

#### Parameters
* owner (string) **required** - API or Domaion owner identifier
* api (string) **required** - API identifier
* version (string) **required** - version identifier

### searchDomains
Retrieves a list of currently defined domains in APIs.json format


```js
swaggerhub.searchDomains({}, context)
```

#### Parameters
* query (string) - free text query to match
* state (string) - matches against published state of the spec
* tag (array) - matches against tags associated with a domain
* page (integer) - page to return
* limit (integer) - number of results per page
* sort (string) - sort criteria or result set
* order (string) - sort order

### getOwnerDomains
Retrieves an APIs.json listing of all domains defined for this owner


```js
swaggerhub.getOwnerDomains({
  "owner": ""
}, context)
```

#### Parameters
* owner (string) **required** - API or Domaion owner identifier
* page (integer) - page to return
* limit (integer) - number of results per page
* sort (string) - sort criteria or result set
* order (string) - sort order

### deleteDomain
Deletes the specified domain


```js
swaggerhub.deleteDomain({
  "owner": "",
  "domain": ""
}, context)
```

#### Parameters
* owner (string) **required** - API or Domaion owner identifier
* domain (string) **required** - domain identifier
* force (boolean) - force update

### getDomainVersions
Retrieves an APIs.json listing for all domain versions for this owner and domain


```js
swaggerhub.getDomainVersions({
  "owner": "",
  "domain": ""
}, context)
```

#### Parameters
* owner (string) **required** - API or Domaion owner identifier
* domain (string) **required** - domain identifier

### saveDomainDefinition
Saves the provided Swagger definition of a domain


```js
swaggerhub.saveDomainDefinition({
  "owner": "",
  "domain": "",
  "version": ""
}, context)
```

#### Parameters
* owner (string) **required** - API or Domaion owner identifier
* domain (string) **required** - domain identifier
* isPrivate (boolean) - Defines whether the API has to be private
* version (string) **required** - domain version
* definition (string)
* force (boolean) - force update

### deleteDomainVersion
Deletes a particular version of the specified domain


```js
swaggerhub.deleteDomainVersion({
  "owner": "",
  "domain": "",
  "version": ""
}, context)
```

#### Parameters
* owner (string) **required** - API or Domaion owner identifier
* domain (string) **required** - domain identifier
* version (string) **required** - version identifier
* force (boolean) - force update

### getDomainDefinition
Retrieves the Swagger definition for the specified domain and version


```js
swaggerhub.getDomainDefinition({
  "owner": "",
  "domain": "",
  "version": ""
}, context)
```

#### Parameters
* owner (string) **required** - API or Domaion owner identifier
* domain (string) **required** - domain identifier
* version (string) **required** - version identifier

### getDomainJsonDefinition
Retrieves the definition for the specified domain and version in JSON format


```js
swaggerhub.getDomainJsonDefinition({
  "owner": "",
  "domain": "",
  "version": ""
}, context)
```

#### Parameters
* owner (string) **required** - API or Domaion owner identifier
* domain (string) **required** - domain identifier
* version (string) **required** - version identifier

### getDomainYamlDefinition
Retrieves the definition for the specified domain and version in YAML format


```js
swaggerhub.getDomainYamlDefinition({
  "owner": "",
  "domain": "",
  "version": ""
}, context)
```

#### Parameters
* owner (string) **required** - API or Domaion owner identifier
* domain (string) **required** - domain identifier
* version (string) **required** - version identifier

### searchApisAndDomains
Retrieves a list of currently defined APIs and Domains in APIs.json format


```js
swaggerhub.searchApisAndDomains({}, context)
```

#### Parameters
* specType (string) - Type of Swagger specs to search
* visibility (string) - The visibility of a spec in SwaggerHub
* state (string) - matches against published state of the spec
* owner (string) - API or Domaion owner identifier. Can be username or Organization name
* query (string) - free text query to match
* page (integer) - page to return
* limit (integer) - number of results per page
* sort (string) - sort criteria or result set
* order (string) - sort order

