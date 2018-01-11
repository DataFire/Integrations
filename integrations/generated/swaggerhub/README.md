# @datafire/swaggerhub

Client library for SwaggerHub Registry

## Installation and Usage
```bash
npm install --save @datafire/swaggerhub
```
```js
let swaggerhub = require('@datafire/swaggerhub').create({
  TokenSecured: ""
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

#### Input
* input `object`
  * query `string`: free text query to match
  * state `string` (values: ALL, PUBLISHED, UNPUBLISHED): matches against published state of the spec
  * tag `array`: matches against tags associated with an API
  * page `integer`: page to return
  * limit `integer`: number of results per page
  * sort `string` (values: NAME, UPDATED, CREATED, OWNER): sort criteria or result set
  * order `string` (values: ASC, DESC): sort order

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
  * owner **required** `string`: API or Domaion owner identifier
  * page `integer`: page to return
  * limit `integer`: number of results per page
  * sort `string` (values: NAME, UPDATED, CREATED, OWNER): sort criteria or result set
  * order `string` (values: ASC, DESC): sort order

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
  * owner **required** `string`: API or Domaion owner identifier
  * api **required** `string`: API identifier

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
  * owner **required** `string`: API or Domaion owner identifier
  * api **required** `string`: API identifier

#### Output
* output [ApisJson](#apisjson)

### saveDefinition
Saves the provided Swagger definition; the owner must match the token owner. The version will be extracted from the Swagger definitions itself.


```js
swaggerhub.saveDefinition({
  "owner": "",
  "api": "",
  "definition": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: API or Domaion owner identifier
  * api **required** `string`: API identifier
  * isPrivate `boolean`: Defines whether the API has to be private
  * version `string`: api version
  * definition **required** `string`
  * force `boolean`: force update

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
  * owner **required** `string`: API or Domaion owner identifier
  * api **required** `string`: API identifier

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
  * owner **required** `string`: API or Domaion owner identifier
  * api **required** `string`: API identifier
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
  * owner **required** `string`: API or Domaion owner identifier
  * api **required** `string`: API identifier
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
  * owner **required** `string`: API or Domaion owner identifier
  * api **required** `string`: API identifier
  * version **required** `string`: version identifier

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
  * owner **required** `string`: API or Domaion owner identifier
  * api **required** `string`: API identifier
  * version **required** `string`: version identifier

#### Output
* output `object`

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
  * owner **required** `string`: API or Domaion owner identifier
  * api **required** `string`: API identifier
  * version **required** `string`: version identifier

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
  * owner **required** `string`: API or Domaion owner identifier
  * api **required** `string`: API identifier
  * version **required** `string`: version identifier

#### Output
* output `object`

### searchDomains
Retrieves a list of currently defined domains in APIs.json format


```js
swaggerhub.searchDomains({}, context)
```

#### Input
* input `object`
  * query `string`: free text query to match
  * state `string` (values: ALL, PUBLISHED, UNPUBLISHED): matches against published state of the spec
  * tag `array`: matches against tags associated with a domain
  * page `integer`: page to return
  * limit `integer`: number of results per page
  * sort `string` (values: NAME, UPDATED, CREATED, OWNER): sort criteria or result set
  * order `string` (values: ASC, DESC): sort order

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
  * owner **required** `string`: API or Domaion owner identifier
  * page `integer`: page to return
  * limit `integer`: number of results per page
  * sort `string` (values: NAME, UPDATED, CREATED, OWNER): sort criteria or result set
  * order `string` (values: ASC, DESC): sort order

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
  * owner **required** `string`: API or Domaion owner identifier
  * domain **required** `string`: domain identifier
  * force `boolean`: force update

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
  * owner **required** `string`: API or Domaion owner identifier
  * domain **required** `string`: domain identifier

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
  * owner **required** `string`: API or Domaion owner identifier
  * domain **required** `string`: domain identifier
  * isPrivate `boolean`: Defines whether the API has to be private
  * version **required** `string`: domain version
  * definition `string`
  * force `boolean`: force update

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
  * owner **required** `string`: API or Domaion owner identifier
  * domain **required** `string`: domain identifier
  * version **required** `string`: version identifier
  * force `boolean`: force update

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
  * owner **required** `string`: API or Domaion owner identifier
  * domain **required** `string`: domain identifier
  * version **required** `string`: version identifier

#### Output
* output `object`

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
  * owner **required** `string`: API or Domaion owner identifier
  * domain **required** `string`: domain identifier
  * version **required** `string`: version identifier

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
  * owner **required** `string`: API or Domaion owner identifier
  * domain **required** `string`: domain identifier
  * version **required** `string`: version identifier

#### Output
* output `object`

### searchApisAndDomains
Retrieves a list of currently defined APIs and Domains in APIs.json format


```js
swaggerhub.searchApisAndDomains({}, context)
```

#### Input
* input `object`
  * specType `string` (values: API, DOMAIN, ANY): Type of Swagger specs to search
  * visibility `string` (values: PUBLIC, PRIVATE, ANY): The visibility of a spec in SwaggerHub
  * state `string` (values: ALL, PUBLISHED, UNPUBLISHED): matches against published state of the spec
  * owner `string`: API or Domaion owner identifier. Can be username or Organization name
  * query `string`: free text query to match
  * page `integer`: page to return
  * limit `integer`: number of results per page
  * sort `string` (values: NAME, UPDATED, CREATED, OWNER): sort criteria or result set
  * order `string` (values: ASC, DESC): sort order

#### Output
* output [ApisJson](#apisjson)



## Definitions

### AccessToken
* AccessToken `object`
  * token `string`

### ApiMetadata
* ApiMetadata `object`
  * categories **required** `array`
    * items `string`
  * defaultVersion `string`
  * links `array`
    * items [ApiMetadataLink](#apimetadatalink)
  * tags **required** `array`
    * items `string`

### ApiMetadataLink
* ApiMetadataLink `object`
  * type **required** `string`
  * url **required** `string`

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

### ApisJsonUrlProperty


### ApisJsonValueProperty


### ClosableComment


### ClosableCommentPatch


### CodegenLanguage
* CodegenLanguage `object`
  * customValues `object`
  * visible **required** `boolean`

### CodegenSettings
* CodegenSettings `object`
  * client `object`
  * server `object`

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


### CollaborationMembershipList
* CollaborationMembershipList `object`
  * hint **required** [CollaborationHint](#collaborationhint)
  * items `array`
    * items [CollaborationMembership](#collaborationmembership)

### CollaborationRoles
* CollaborationRoles `object`
  * api `string`
  * owner `string`
  * roles `array`
    * items `string` (values: EDIT, COMMENT, VIEW)

### CollaborationTeamMembership


### Comment
* Comment `object`
  * body **required** `string`
  * created **required** `string`
  * id **required** `string`
  * modified `string`
  * user **required** [User](#user)

### CommentPatch
* CommentPatch `object`
  * body `string`

### CommentsBatch
* CommentsBatch `object`
  * addComment `array`
    * items [NewComment](#newcomment)
  * addReply `object`
  * deleteComment `array`
    * items `string`
  * deleteReply `object`
  * updateComment `object`
  * updateReply `object`
  * updateStatus `object`

### Comparison
* Comparison `array`: a list of differences between two APIs
  * items [ComparisonPart](#comparisonpart)

### ComparisonDetail
* ComparisonDetail `object`: details for one side of a ComparisonPart
  * content **required** `string`: the content of the API definition between `startPosition` and `endPosition`
  * endPosition **required** [Position](#position)
  * path `string`: the path to the object (notation similar to JSONPath)
  * startPosition **required** [Position](#position)

### ComparisonPart
* ComparisonPart `object`: a part of the API that was (or wasn't) changed
  * base [ComparisonDetail](#comparisondetail)
  * other [ComparisonDetail](#comparisondetail)
  * type **required** `string` (values: UNMODIFIED, INSERTED, DELETED, CHANGED): the type of change that this part describes

### EntryId
* EntryId `object`
  * name `string`
  * owner `string`
  * version `string`

### GitHubExportSettings
* GitHubExportSettings `object`
  * branch **required** `string`
  * notificationEmail **required** `string`
  * owner **required** `string`
  * path `string`
  * repository **required** `string`
  * token **required** `string`
  * yamlPath `string`

### LifecycleSettings
* LifecycleSettings `object`
  * published `boolean`

### MissingSpecMembers
* MissingSpecMembers `object`
  * names `array`
    * items `string`
  * spec [SimpleSpec](#simplespec)

### NewComment
* NewComment `object`
  * body **required** `string`
  * position **required** `integer`
  * replies `array`
    * items [NewReply](#newreply)

### NewReply
* NewReply `object`
  * body **required** `string`

### NotCollaboratorProjectMembers
* NotCollaboratorProjectMembers `object`
  * missingApisMembers `array`
    * items [MissingSpecMembers](#missingspecmembers)
  * missingApisTeams `array`
    * items [MissingSpecMembers](#missingspecmembers)
  * missingDomainsMembers `array`
    * items [MissingSpecMembers](#missingspecmembers)
  * missingDomainsTeams `array`
    * items [MissingSpecMembers](#missingspecmembers)

### Page
* Page `object`
  * items `array`
    * items `object`
  * offset `integer`
  * total `integer`

### PluginConfiguration
* PluginConfiguration `object`
  * configuration `object`
  * definitionId **required** `string`
  * draft `boolean`
  * id `string`
  * lifecycles **required** `array`
    * items `string`
  * name **required** `string`
  * objectId **required** `string`
  * ownerName **required** `string`
  * path **required** `string`

### PluginDefinition
* PluginDefinition `object`
  * configurationSchema **required** `object`
  * createdBy **required** `string`
  * createdOn **required** `string`
  * enabled **required** `boolean`
  * id `string`
  * implementingClass **required** `string`
  * limit `integer`: count of allowed configurations
  * name **required** `string`
  * version **required** `string`

### Position
* Position `object`: a position in a text document
  * column **required** `integer`
  * line **required** `integer`

### Private
* Private `object`
  * private **required** `boolean`

### ProjectEntry
* ProjectEntry `object`
  * apis `array`
    * items [EntryId](#entryid)
  * domains `array`
    * items [EntryId](#entryid)
  * groupId **required** `string`
  * name **required** `string`
  * projectId **required** `string`

### ProjectMember
* ProjectMember `object`
  * name **required** `string`
  * roles **required** `array`
    * items `string`
  * type **required** `string` (values: USER, TEAM)

### ProjectMemberList
* ProjectMemberList `object`
  * members `array`
    * items [ProjectMember](#projectmember)

### ProjectsJson
* ProjectsJson `object`
  * offset `integer`
  * projects `array`
    * items [ProjectEntry](#projectentry)
  * totalCount `integer`

### SimpleSpec
* SimpleSpec `object`
  * name `string`
  * owner `string`

### SpecId
* SpecId `object`
  * name **required** `string`
  * owner **required** `string`
  * version **required** `string`

### SystemPluginConfiguration
* SystemPluginConfiguration `object`
  * configuration `object`
  * id `string`
  * implementingClass **required** `string`
  * lifecycles **required** `array`
    * items `string`
  * version **required** `string`

### Template
* Template `object`
  * id **required** `string`
  * title **required** `string`

### TemplateCatalog
* TemplateCatalog `object`
  * default [Template](#template)
  * templates `array`
    * items [Template](#template)

### User
* User `object`
  * active `boolean`
  * id `string`

### UserCredentials
* UserCredentials `object`
  * password `string`
  * username `string`

### VersionMetadata
* VersionMetadata `object`
  * codegenSettings [CodegenSettings](#codegensettings)


