# @datafire/swaggerhub

Client library for SwaggerHub Registry

## Installation and Usage
```bash
npm install --save datafire @datafire/swaggerhub
```

```js
let datafire = require('datafire');
let swaggerhub = require('@datafire/swaggerhub').actions;

let account = {
  TokenSecured: "",
}
let context = new datafire.Context({
  accounts: {
    swaggerhub: account,
  }
})


swaggerhub.searchDomains({}, context).then(data => {
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
Retrieves a list of currently defined APIs in APIs.json format


```js
swaggerhub.searchApis({}, context)
```


### getApiTemplates
Retrieves list of apis templates


```js
swaggerhub.getApiTemplates(null, context)
```


### getOwnerApis
Retrieves an APIs.json listing of all APIs defined for this owner


```js
swaggerhub.getOwnerApis({
  "owner": ""
}, context)
```

#### Parameters
* owner (string) **required** - API owner identifier
* page (integer) - page to return
* limit (integer) - number of results per page
* sort (string) - sort criteria
* order (string) - sort order

### updateOwner
Updates owner


```js
swaggerhub.updateOwner({
  "owner": "",
  "newNameToken": ""
}, context)
```

#### Parameters
* owner (string) **required** - API owner identifier
* newNameToken (string) **required** - Token for updating owner name

### deleteApi
Deletes the specified API


```js
swaggerhub.deleteApi({
  "owner": "",
  "api": ""
}, context)
```

#### Parameters
* owner (string) **required** - API owner identifier
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
* owner (string) **required** - API owner identifier
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
* owner (string) **required** - API owner identifier
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
* owner (string) **required** - API owner identifier
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
* owner (string) **required** - API owner identifier
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
* owner (string) **required** - API owner identifier
* api (string) **required** - API identifier
* body (object)

### renameApi
Renames API


```js
swaggerhub.renameApi({
  "owner": "",
  "api": "",
  "newName": ""
}, context)
```

#### Parameters
* owner (string) **required** - API owner identifier
* api (string) **required** - API identifier
* newName (string) **required** - New name

### saveApiDefinitionByTemplate
Creates API by template


```js
swaggerhub.saveApiDefinitionByTemplate({
  "owner": "",
  "api": "",
  "template": ""
}, context)
```

#### Parameters
* owner (string) **required** - API owner identifier
* api (string) **required** - API identifier
* isPrivate (boolean) - Defines whether the API has to be private
* template (string) **required** - Template id

### transferApi
transfers api to another owner


```js
swaggerhub.transferApi({
  "owner": "",
  "api": "",
  "newOwner": ""
}, context)
```

#### Parameters
* owner (string) **required** - API owner identifier
* api (string) **required** - API identifier
* newOwner (string) **required** - New owner
* transferIntegrations (boolean) - Transfer integrations

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
* owner (string) **required** - API owner identifier
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
* owner (string) **required** - API owner identifier
* api (string) **required** - API identifier
* version (string) **required** - version identifier

### bumpApi
Adds API version.


```js
swaggerhub.bumpApi({
  "owner": "",
  "api": "",
  "version": "",
  "newVersion": ""
}, context)
```

#### Parameters
* owner (string) **required** - API owner identifier
* api (string) **required** - API identifier
* version (string) **required** - version identifier
* isPrivate (boolean) - Defines whether the API has to be private
* newVersion (string) **required** - New api version
* force (boolean) - force update

### getApiComments
Returns the list of comments for the specified API


```js
swaggerhub.getApiComments({
  "owner": "",
  "api": "",
  "version": ""
}, context)
```

#### Parameters
* owner (string) **required** - API owner identifier
* api (string) **required** - API identifier
* version (string) **required** - version identifier

### addApiComment
Adds a new comment to the specified API


```js
swaggerhub.addApiComment({
  "owner": "",
  "api": "",
  "version": "",
  "body": {
    "body": "",
    "position": 0
  }
}, context)
```

#### Parameters
* owner (string) **required** - API owner identifier
* api (string) **required** - API identifier
* version (string) **required** - version identifier
* body (object) **required**

### updateApiComments
Updates passed batch of comments


```js
swaggerhub.updateApiComments({
  "owner": "",
  "api": "",
  "version": "",
  "body": {}
}, context)
```

#### Parameters
* owner (string) **required** - API owner identifier
* api (string) **required** - API identifier
* version (string) **required** - version identifier
* body (object) **required**

### deleteApiComment
Deletes specified comment


```js
swaggerhub.deleteApiComment({
  "owner": "",
  "api": "",
  "version": "",
  "comment": ""
}, context)
```

#### Parameters
* owner (string) **required** - API owner identifier
* api (string) **required** - API identifier
* version (string) **required** - version identifier
* comment (string) **required** - comment identifier

### updateApiComment
Updates specified comment


```js
swaggerhub.updateApiComment({
  "owner": "",
  "api": "",
  "version": "",
  "comment": ""
}, context)
```

#### Parameters
* owner (string) **required** - API owner identifier
* api (string) **required** - API identifier
* version (string) **required** - version identifier
* comment (string) **required** - comment identifier
* body (undefined)

### addApiCommentReply
Adds a new reply to the specified comment


```js
swaggerhub.addApiCommentReply({
  "owner": "",
  "api": "",
  "version": "",
  "comment": "",
  "body": {
    "body": ""
  }
}, context)
```

#### Parameters
* owner (string) **required** - API owner identifier
* api (string) **required** - API identifier
* version (string) **required** - version identifier
* comment (string) **required** - comment identifier
* body (object) **required**

### deleteApiCommentReply
Deletes specified comment reply


```js
swaggerhub.deleteApiCommentReply({
  "owner": "",
  "api": "",
  "version": "",
  "comment": "",
  "reply": ""
}, context)
```

#### Parameters
* owner (string) **required** - API owner identifier
* api (string) **required** - API identifier
* version (string) **required** - version identifier
* comment (string) **required** - comment identifier
* reply (string) **required** - reply identifier

### updateApiCommentReply
Updates specified comment reply


```js
swaggerhub.updateApiCommentReply({
  "owner": "",
  "api": "",
  "version": "",
  "comment": "",
  "reply": ""
}, context)
```

#### Parameters
* owner (string) **required** - API owner identifier
* api (string) **required** - API identifier
* version (string) **required** - version identifier
* comment (string) **required** - comment identifier
* reply (string) **required** - reply identifier
* body (object)

### setApiCommentStatus
Updates status to the specified comment


```js
swaggerhub.setApiCommentStatus({
  "owner": "",
  "api": "",
  "version": "",
  "comment": "",
  "status": ""
}, context)
```

#### Parameters
* owner (string) **required** - API owner identifier
* api (string) **required** - API identifier
* version (string) **required** - version identifier
* comment (string) **required** - comment identifier
* status (string) **required** - comment status

### deleteDraftApi
Deletes a particular version of the specified API


```js
swaggerhub.deleteDraftApi({
  "owner": "",
  "api": "",
  "version": ""
}, context)
```

#### Parameters
* owner (string) **required** - API owner identifier
* api (string) **required** - API identifier
* version (string) **required** - version identifier

### getDraft
Retrieves the draft for the specified API and version


```js
swaggerhub.getDraft({
  "owner": "",
  "api": "",
  "version": ""
}, context)
```

#### Parameters
* owner (string) **required** - API owner identifier
* api (string) **required** - API identifier
* version (string) **required** - version identifier

### saveDraft
Saves the provided draft for a swagger definition.


```js
swaggerhub.saveDraft({
  "owner": "",
  "api": "",
  "version": "",
  "definition": ""
}, context)
```

#### Parameters
* owner (string) **required** - API owner identifier
* api (string) **required** - API identifier
* version (string) **required** - version identifier
* definition (string) **required**

### forkApi
Forks the provided Swagger definition.


```js
swaggerhub.forkApi({
  "owner": "",
  "api": "",
  "version": "",
  "newSpec": {
    "name": "",
    "owner": "",
    "version": ""
  }
}, context)
```

#### Parameters
* owner (string) **required** - API owner identifier
* api (string) **required** - API identifier
* version (string) **required** - version identifier
* isPrivate (boolean) - Defines whether the API has to be private
* newSpec (object) **required**
* force (boolean) - force update

### compareApis
Compares two APIs


```js
swaggerhub.compareApis({
  "owner": "",
  "api": "",
  "version": "",
  "method": "",
  "otherApiPath": ""
}, context)
```

#### Parameters
* owner (string) **required** - API owner identifier
* api (string) **required** - API identifier
* version (string) **required** - version identifier
* method (string) **required** - The method to use for comparing two APIs.
* otherApiPath (string) **required** - URL to external API or path to internal API

### compareApisFromFile
Compares two APIs


```js
swaggerhub.compareApisFromFile({
  "owner": "",
  "api": "",
  "version": "",
  "method": "",
  "definition": ""
}, context)
```

#### Parameters
* owner (string) **required** - API owner identifier
* api (string) **required** - API identifier
* version (string) **required** - version identifier
* method (string) **required** - The method to use for comparing two APIs.
* definition (string) **required**

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
* owner (string) **required** - API owner identifier
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
* owner (string) **required** - API owner identifier
* api (string) **required** - API identifier
* version (string) **required** - version identifier

### searchDomains
Retrieves a list of currently defined domains in APIs.json format


```js
swaggerhub.searchDomains({}, context)
```


### getDomainTemplates
Retrieves list of domains templates


```js
swaggerhub.getDomainTemplates(null, context)
```


### getOwnerDomains
Retrieves an APIs.json listing of all domains defined for this owner


```js
swaggerhub.getOwnerDomains({
  "owner": ""
}, context)
```

#### Parameters
* owner (string) **required** - API owner identifier
* page (integer) - page to return
* limit (integer) - number of results per page
* sort (string) - sort criteria
* order (string) - sort order

### getOwnerReferences
Retrieves an APIs.json listing of entries referensing owner domains


```js
swaggerhub.getOwnerReferences({
  "owner": ""
}, context)
```

#### Parameters
* owner (string) **required** - API owner identifier

### deleteDomain
Deletes the specified domain


```js
swaggerhub.deleteDomain({
  "owner": "",
  "domain": ""
}, context)
```

#### Parameters
* owner (string) **required** - API owner identifier
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
* owner (string) **required** - API owner identifier
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
* owner (string) **required** - API owner identifier
* domain (string) **required** - domain identifier
* isPrivate (boolean) - Defines whether the API has to be private
* version (string) **required** - domain version
* definition (string)
* force (boolean) - force update

### renameDomain
Renames domain


```js
swaggerhub.renameDomain({
  "owner": "",
  "domain": "",
  "newName": ""
}, context)
```

#### Parameters
* owner (string) **required** - API owner identifier
* domain (string) **required** - domain identifier
* newName (string) **required** - New name
* force (boolean) - force update

### transferDomain
transfers domain to another owner


```js
swaggerhub.transferDomain({
  "owner": "",
  "domain": "",
  "newOwner": ""
}, context)
```

#### Parameters
* owner (string) **required** - API owner identifier
* domain (string) **required** - domain identifier
* newOwner (string) **required** - New owner
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
* owner (string) **required** - API owner identifier
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
* owner (string) **required** - API owner identifier
* domain (string) **required** - domain identifier
* version (string) **required** - version identifier

### bumpDomain
Adds domain version.


```js
swaggerhub.bumpDomain({
  "owner": "",
  "domain": "",
  "version": "",
  "newVersion": ""
}, context)
```

#### Parameters
* owner (string) **required** - API owner identifier
* domain (string) **required** - domain identifier
* version (string) **required** - version identifier
* isPrivate (boolean) - Defines whether the API has to be private
* newVersion (string) **required** - New domain version
* force (boolean) - force update

### getDomainComments
Returns the list of comments for the specified domain


```js
swaggerhub.getDomainComments({
  "owner": "",
  "domain": "",
  "version": ""
}, context)
```

#### Parameters
* owner (string) **required** - API owner identifier
* domain (string) **required** - domain identifier
* version (string) **required** - version identifier

### addDomainComment
Adds a new comment to the specified domain


```js
swaggerhub.addDomainComment({
  "owner": "",
  "domain": "",
  "version": "",
  "body": {
    "body": "",
    "position": 0
  }
}, context)
```

#### Parameters
* owner (string) **required** - API owner identifier
* domain (string) **required** - domain identifier
* version (string) **required** - version identifier
* body (object) **required**

### updateDomainComments
Updates passed batch of comments


```js
swaggerhub.updateDomainComments({
  "owner": "",
  "domain": "",
  "version": "",
  "body": {}
}, context)
```

#### Parameters
* owner (string) **required** - API owner identifier
* domain (string) **required** - domain identifier
* version (string) **required** - version identifier
* body (object) **required**

### deleteDomainComment
Deletes specified comment


```js
swaggerhub.deleteDomainComment({
  "owner": "",
  "domain": "",
  "version": "",
  "comment": ""
}, context)
```

#### Parameters
* owner (string) **required** - API owner identifier
* domain (string) **required** - domain identifier
* version (string) **required** - version identifier
* comment (string) **required** - comment identifier

### updateDomainComment
Updates specified comment


```js
swaggerhub.updateDomainComment({
  "owner": "",
  "domain": "",
  "version": "",
  "comment": ""
}, context)
```

#### Parameters
* owner (string) **required** - API owner identifier
* domain (string) **required** - domain identifier
* version (string) **required** - version identifier
* comment (string) **required** - comment identifier
* body (undefined)

### addDomainCommentReply
Adds a new reply to the specified comment


```js
swaggerhub.addDomainCommentReply({
  "owner": "",
  "domain": "",
  "version": "",
  "comment": "",
  "body": {
    "body": ""
  }
}, context)
```

#### Parameters
* owner (string) **required** - API owner identifier
* domain (string) **required** - domain identifier
* version (string) **required** - version identifier
* comment (string) **required** - comment identifier
* body (object) **required**

### deleteDomainCommentReply
Deletes specified comment reply


```js
swaggerhub.deleteDomainCommentReply({
  "owner": "",
  "domain": "",
  "version": "",
  "comment": "",
  "reply": ""
}, context)
```

#### Parameters
* owner (string) **required** - API owner identifier
* domain (string) **required** - domain identifier
* version (string) **required** - version identifier
* comment (string) **required** - comment identifier
* reply (string) **required** - reply identifier

### updateDomainCommentReply
Updates specified comment reply


```js
swaggerhub.updateDomainCommentReply({
  "owner": "",
  "domain": "",
  "version": "",
  "comment": "",
  "reply": ""
}, context)
```

#### Parameters
* owner (string) **required** - API owner identifier
* domain (string) **required** - domain identifier
* version (string) **required** - version identifier
* comment (string) **required** - comment identifier
* reply (string) **required** - reply identifier
* body (object)

### setDomainCommentStatus
Updates status to the specified comment


```js
swaggerhub.setDomainCommentStatus({
  "owner": "",
  "domain": "",
  "version": "",
  "comment": "",
  "status": ""
}, context)
```

#### Parameters
* owner (string) **required** - API owner identifier
* domain (string) **required** - domain identifier
* version (string) **required** - version identifier
* comment (string) **required** - comment identifier
* status (string) **required** - comment status

### deleteDraftDomain
Deletes a particular version of the specified Domain


```js
swaggerhub.deleteDraftDomain({
  "owner": "",
  "domain": "",
  "version": ""
}, context)
```

#### Parameters
* owner (string) **required** - API owner identifier
* domain (string) **required** - domain identifier
* version (string) **required** - version identifier

### getDraftDomain
Retrieves the draft for the specified domain


```js
swaggerhub.getDraftDomain({
  "owner": "",
  "domain": "",
  "version": ""
}, context)
```

#### Parameters
* owner (string) **required** - API owner identifier
* domain (string) **required** - domain identifier
* version (string) **required** - version identifier

### saveDraftDomain
Saves the provided draft for a domain definition.


```js
swaggerhub.saveDraftDomain({
  "owner": "",
  "domain": "",
  "version": ""
}, context)
```

#### Parameters
* owner (string) **required** - API owner identifier
* domain (string) **required** - domain identifier
* version (string) **required** - version identifier
* definition (string)

### forkDomain
Forks the provided domain definition.


```js
swaggerhub.forkDomain({
  "owner": "",
  "domain": "",
  "version": "",
  "newSpec": {
    "name": "",
    "owner": "",
    "version": ""
  }
}, context)
```

#### Parameters
* owner (string) **required** - API owner identifier
* domain (string) **required** - domain identifier
* version (string) **required** - version identifier
* isPrivate (boolean) - Defines whether the API has to be private
* newSpec (object) **required**
* force (boolean) - force update

### saveDomainDefinitionByTemplate
Creates Domain by template


```js
swaggerhub.saveDomainDefinitionByTemplate({
  "owner": "",
  "domain": "",
  "version": "",
  "template": ""
}, context)
```

#### Parameters
* owner (string) **required** - API owner identifier
* domain (string) **required** - domain identifier
* version (string) **required** - version identifier
* isPrivate (boolean) - Defines whether the API has to be private
* template (string) **required** - Template id

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
* owner (string) **required** - API owner identifier
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
* owner (string) **required** - API owner identifier
* domain (string) **required** - domain identifier
* version (string) **required** - version identifier

### getAvailablePlugins
Retrieves a list of all available plugins (ignore system plugins)


```js
swaggerhub.getAvailablePlugins(null, context)
```


### removePluginConfiguration
Deletes the provided Plugin configuration


```js
swaggerhub.removePluginConfiguration({
  "pluginConfiguration": {
    "definitionId": "",
    "lifecycles": [],
    "name": "",
    "objectId": "",
    "ownerName": "",
    "path": ""
  }
}, context)
```

#### Parameters
* pluginConfiguration (object) **required**

### getPlugins
Retrieves a list of enabled plugin configurations


```js
swaggerhub.getPlugins({
  "objectId": ""
}, context)
```

#### Parameters
* objectId (string) **required** - plugin configuration objectId
* page (integer) - page to return
* limit (integer) - number of results per page

### addPluginConfiguration
Saves the provided Plugin configuration


```js
swaggerhub.addPluginConfiguration({
  "pluginConfiguration": {
    "definitionId": "",
    "lifecycles": [],
    "name": "",
    "objectId": "",
    "ownerName": "",
    "path": ""
  }
}, context)
```

#### Parameters
* pluginConfiguration (object) **required**
* trigger (boolean) - if true, also execute plugin

### updatePluginConfiguration
Updated the provided Plugin configuration


```js
swaggerhub.updatePluginConfiguration({
  "pluginConfiguration": {
    "definitionId": "",
    "lifecycles": [],
    "name": "",
    "objectId": "",
    "ownerName": "",
    "path": ""
  }
}, context)
```

#### Parameters
* pluginConfiguration (object) **required**
* trigger (boolean) - if true, also execute plugin

### triggerPluginConfiguration
triggers execution of plugin configuration identified by id


```js
swaggerhub.triggerPluginConfiguration({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - plugin configuration id

### buildConfigurationSchema
Get configuration schema for the provided Plugin configuration


```js
swaggerhub.buildConfigurationSchema({
  "pluginConfiguration": {
    "definitionId": "",
    "lifecycles": [],
    "name": "",
    "objectId": "",
    "ownerName": "",
    "path": ""
  }
}, context)
```

#### Parameters
* pluginConfiguration (object) **required**

### getApiTokenByCredentials
Retrieves an API token valid for the user identified by user object in body


```js
swaggerhub.getApiTokenByCredentials({
  "user": {}
}, context)
```

#### Parameters
* user (object) **required**

