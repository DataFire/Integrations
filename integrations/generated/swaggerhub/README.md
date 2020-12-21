# @datafire/swaggerhub

Client library for SwaggerHub Registry API

## Installation and Usage
```bash
npm install --save @datafire/swaggerhub
```
```js
let swaggerhub = require('@datafire/swaggerhub').create({
  TokenSecured: ""
});

.then(data => {
  console.log(data);
});
```

## Description

# Introduction
This is the registry API for SwaggerHub. It allows you to access, manage, and update your APIs and Domains in SwaggerHub bypassing the Web application.

# Authentication
Use your personal API Key: you can find it by visiting the [API Key page](https://app.swaggerhub.com/settings/apiKey).


## Actions

### searchApis
Retrieves a list of currently defined APIs in APIs.json format.


```js
swaggerhub.searchApis({}, context)
```

#### Input
* input `object`
  * query `string`: Free text query to match
  * state `string` (values: ALL, PUBLISHED, UNPUBLISHED): Matches against published state of the spec:
  * tag `array`: Matches against tags associated with an API
  * page `integer`: Page to return
  * limit `integer`: Number of results per page
  * sort `string` (values: NAME, UPDATED, CREATED, OWNER): Sort criteria or result set:
  * order `string` (values: ASC, DESC): Sort order

#### Output
*Output schema unknown*

### getOwnerApis
Retrieves an APIs.json listing of all APIs defined for this owner


```js
swaggerhub.getOwnerApis({
  "owner": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: API owner (user or organization, case-sensitive)
  * page `integer`: Page to return
  * limit `integer`: Number of results per page
  * sort `string` (values: NAME, UPDATED, CREATED, OWNER): Sort criteria or result set:
  * order `string` (values: ASC, DESC): Sort order

#### Output
* output [ApisJson](#apisjson)

### deleteApi
Deletes the specified API


```js
swaggerhub.deleteApi({
  "owner": "",
  "api": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: API owner (user or organization, case-sensitive)
  * api **required** `string`: API name (case-sensitive)

#### Output
*Output schema unknown*

### getApiVersions
Retrieves an APIs.json listing for all API versions for this owner and API


```js
swaggerhub.getApiVersions({
  "owner": "",
  "api": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: API owner (user or organization, case-sensitive)
  * api **required** `string`: API name (case-sensitive)

#### Output
* output [ApisJson](#apisjson)

### saveDefinition
Saves the provided Swagger definition; the owner must match the token owner. The version will be extracted from the Swagger definition itself.


```js
swaggerhub.saveDefinition({
  "owner": "",
  "api": "",
  "definition": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: API owner (user or organization, case-sensitive)
  * api **required** `string`: API name (case-sensitive)
  * isPrivate `boolean`: Defines whether the API has to be private
  * version `string`: API version
  * oas `string` (values: 2.0, 3.0.0, 3.0.1): The OpenApi Specification (OAS)
  * definition **required** `string`
  * force `boolean`: Force update

#### Output
*Output schema unknown*

### deleteCollaboration
Deletes API's collaboration


```js
swaggerhub.deleteCollaboration({
  "owner": "",
  "api": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: API owner (user or organization, case-sensitive)
  * api **required** `string`: API name (case-sensitive)

#### Output
*Output schema unknown*

### getCollaboration
Gets API's collaboration


```js
swaggerhub.getCollaboration({
  "owner": "",
  "api": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: API owner (user or organization, case-sensitive)
  * api **required** `string`: API name (case-sensitive)
  * expandTeams `boolean`

#### Output
* output [Collaboration](#collaboration)

### updateCollaboration
Updates API's collaboration


```js
swaggerhub.updateCollaboration({
  "owner": "",
  "api": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: API owner (user or organization, case-sensitive)
  * api **required** `string`: API name (case-sensitive)
  * body [Collaboration](#collaboration)

#### Output
*Output schema unknown*

### deleteApiVersion
Deletes a particular version of the specified API


```js
swaggerhub.deleteApiVersion({
  "owner": "",
  "api": "",
  "version": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: API owner (user or organization, case-sensitive)
  * api **required** `string`: API name (case-sensitive)
  * version **required** `string`: Version identifier (case-sensitive)

#### Output
*Output schema unknown*

### getDefinition
Retrieves the Swagger definition for the specified API and version


```js
swaggerhub.getDefinition({
  "owner": "",
  "api": "",
  "version": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: API owner (user or organization, case-sensitive)
  * api **required** `string`: API name (case-sensitive)
  * version **required** `string`: Version identifier (case-sensitive)

#### Output
* output `object`

### getApiComments
Returns all the comments and replies added by collaborators in the specified API version.



```js
swaggerhub.getApiComments({
  "owner": "",
  "api": "",
  "version": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: API owner (user or organization, case-sensitive)
  * api **required** `string`: API name (case-sensitive)
  * version **required** `string`: Version identifier (case-sensitive)

#### Output
* output `array`
  * items [ClosableComment](#closablecomment)

### getJsonDefinition
Retrieves the Swagger definition for the specified API and version in JSON format


```js
swaggerhub.getJsonDefinition({
  "owner": "",
  "api": "",
  "version": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: API owner (user or organization, case-sensitive)
  * api **required** `string`: API name (case-sensitive)
  * version **required** `string`: Version identifier (case-sensitive)

#### Output
* output `object`

### getYamlDefinition
Retrieves the Swagger definition for the specified API and version in YAML format


```js
swaggerhub.getYamlDefinition({
  "owner": "",
  "api": "",
  "version": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: API owner (user or organization, case-sensitive)
  * api **required** `string`: API name (case-sensitive)
  * version **required** `string`: Version identifier (case-sensitive)

#### Output
* output `object`

### searchDomains
Retrieves a list of currently defined domains in APIs.json format


```js
swaggerhub.searchDomains({}, context)
```

#### Input
* input `object`
  * query `string`: Free text query to match
  * state `string` (values: ALL, PUBLISHED, UNPUBLISHED): Matches against published state of the spec:
  * tag `array`: Matches against tags associated with a domain
  * page `integer`: Page to return
  * limit `integer`: Number of results per page
  * sort `string` (values: NAME, UPDATED, CREATED, OWNER): Sort criteria or result set:
  * order `string` (values: ASC, DESC): Sort order

#### Output
*Output schema unknown*

### getOwnerDomains
Retrieves an APIs.json listing of all domains defined for this owner


```js
swaggerhub.getOwnerDomains({
  "owner": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: Domain owner (user or organization, case-sensitive)
  * page `integer`: Page to return
  * limit `integer`: Number of results per page
  * sort `string` (values: NAME, UPDATED, CREATED, OWNER): Sort criteria or result set:
  * order `string` (values: ASC, DESC): Sort order

#### Output
* output [ApisJson](#apisjson)

### deleteDomain
Deletes the specified domain


```js
swaggerhub.deleteDomain({
  "owner": "",
  "domain": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: Domain owner (user or organization, case-sensitive)
  * domain **required** `string`: Domain name (case-sensitive)
  * force `boolean`: Force update

#### Output
*Output schema unknown*

### getDomainVersions
Retrieves an APIs.json listing for all domain versions for this owner and domain


```js
swaggerhub.getDomainVersions({
  "owner": "",
  "domain": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: Domain owner (user or organization, case-sensitive)
  * domain **required** `string`: Domain name (case-sensitive)

#### Output
* output [ApisJson](#apisjson)

### saveDomainDefinition
Saves the provided Swagger definition of a domain


```js
swaggerhub.saveDomainDefinition({
  "owner": "",
  "domain": "",
  "version": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: Domain owner (user or organization, case-sensitive)
  * domain **required** `string`: Domain name (case-sensitive)
  * isPrivate `boolean`: Specifies whether the domain has to be private
  * version **required** `string`: Domain version
  * definition `string`
  * force `boolean`: Force update

#### Output
*Output schema unknown*

### deleteDomainVersion
Deletes a particular version of the specified domain


```js
swaggerhub.deleteDomainVersion({
  "owner": "",
  "domain": "",
  "version": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: Domain owner (user or organization, case-sensitive)
  * domain **required** `string`: Domain name (case-sensitive)
  * version **required** `string`: Version identifier (case-sensitive)
  * force `boolean`: Force update

#### Output
*Output schema unknown*

### getDomainDefinition
Retrieves the Swagger definition for the specified domain and version


```js
swaggerhub.getDomainDefinition({
  "owner": "",
  "domain": "",
  "version": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: Domain owner (user or organization, case-sensitive)
  * domain **required** `string`: Domain name (case-sensitive)
  * version **required** `string`: Version identifier (case-sensitive)

#### Output
* output `object`

### getDomainComments
Returns all the comments and replies added by collaborators in the specified domain version.



```js
swaggerhub.getDomainComments({
  "owner": "",
  "domain": "",
  "version": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: Domain owner (user or organization, case-sensitive)
  * domain **required** `string`: Domain name (case-sensitive)
  * version **required** `string`: Version identifier (case-sensitive)

#### Output
* output `array`
  * items [ClosableComment](#closablecomment)

### getDomainJsonDefinition
Retrieves the definition for the specified domain and version in JSON format


```js
swaggerhub.getDomainJsonDefinition({
  "owner": "",
  "domain": "",
  "version": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: Domain owner (user or organization, case-sensitive)
  * domain **required** `string`: Domain name (case-sensitive)
  * version **required** `string`: Version identifier (case-sensitive)

#### Output
* output `object`

### getDomainYamlDefinition
Retrieves the definition for the specified domain and version in YAML format


```js
swaggerhub.getDomainYamlDefinition({
  "owner": "",
  "domain": "",
  "version": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: Domain owner (user or organization, case-sensitive)
  * domain **required** `string`: Domain name (case-sensitive)
  * version **required** `string`: Version identifier (case-sensitive)

#### Output
* output `object`

### searchApisAndDomains
Retrieves a list of currently defined APIs and Domains in APIs.json format


```js
swaggerhub.searchApisAndDomains({}, context)
```

#### Input
* input `object`
  * specType `string` (values: API, DOMAIN, ANY): Type of Swagger specs to search:
  * visibility `string` (values: PUBLIC, PRIVATE, ANY): The visibility of a spec in SwaggerHub:
  * state `string` (values: ALL, PUBLISHED, UNPUBLISHED): Matches against published state of the spec:
  * owner `string`: API or Domain owner identifier. Can be username or organization name
  * query `string`: Free text query to match
  * page `integer`: Page to return
  * limit `integer`: Number of results per page
  * sort `string` (values: NAME, UPDATED, CREATED, OWNER): Sort criteria or result set:
  * order `string` (values: ASC, DESC): Sort order

#### Output
* output [ApisJson](#apisjson)



## Definitions

### ApisJson
* ApisJson `object`
  * apis `array`
    * items [ApisJsonApi](#apisjsonapi)
  * created `string`
  * description `string`
  * modified `string`
  * name `string`
  * offset `integer`
  * specificationVersion `string`
  * totalCount `integer`
  * url `string`

### ApisJsonApi
* ApisJsonApi `object`
  * description `string`
  * name `string`
  * properties `array`
    * items [ApisJsonProperty](#apisjsonproperty)
  * tags `array`
    * items `string`

### ApisJsonProperty
* ApisJsonProperty `object`: an API property
  * type `string`

### ClosableComment
* ClosableComment
  * body **required** `string`: Markdown contents of the comment
  * created **required** `string`: The UTC date and time when the comment was added
  * id **required** `string`: The unique ID of the comment
  * modified `string`: The UTC date and time the when the comment was last edited
  * user **required** [User](#user)
  * position `integer`: The line number (zero-based) the comment is associated with. For example, if the comment is on line 7 in the editor, `position`=6.
  * replies `array`: A list of replies to this comment
    * items [Comment](#comment)
  * status `string` (values: OPEN, RESOLVED): Comment status

### Collaboration
* Collaboration `object`
  * hint **required** [CollaborationHint](#collaborationhint)
  * members `array`
    * items [CollaborationMembership](#collaborationmembership)
  * owner `string`
  * owners `array`
    * items `string`
  * pendingMembers `array`
    * items [CollaborationMembership](#collaborationmembership)
  * teams `array`
    * items [CollaborationTeamMembership](#collaborationteammembership)

### CollaborationHint
* CollaborationHint `object`
  * type **required** `string`: type identifier of the managed entity

### CollaborationMember
* CollaborationMember `object`
  * name **required** `string`
  * startTime `string`
  * title `string`
  * uuid `string`

### CollaborationMembership
* CollaborationMembership
  * name **required** `string`
  * startTime `string`
  * title `string`
  * uuid `string`
  * blocked `boolean`
  * donotdisturb `boolean`
  * roles **required** `array`
    * items `string` (values: EDIT, COMMENT, VIEW)

### CollaborationTeamMembership
* CollaborationTeamMembership
  * name **required** `string`
  * startTime `string`
  * title `string`
  * uuid `string`
  * blocked `boolean`
  * donotdisturb `boolean`
  * roles **required** `array`
    * items `string` (values: EDIT, COMMENT, VIEW)
  * members `array`
    * items [CollaborationMember](#collaborationmember)

### Comment
* Comment `object`
  * body **required** `string`: Markdown contents of the comment
  * created **required** `string`: The UTC date and time when the comment was added
  * id **required** `string`: The unique ID of the comment
  * modified `string`: The UTC date and time the when the comment was last edited
  * user **required** [User](#user)

### Page
* Page `object`
  * items `array`
    * items `object`
  * offset `integer`
  * total `integer`

### User
* User `object`: The user who added a comment
  * active `boolean`: `true` means an existing user, `false` means the user is inactive (for example, deleted)
  * id `string`: User name


