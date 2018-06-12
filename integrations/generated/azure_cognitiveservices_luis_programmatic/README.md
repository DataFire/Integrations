# @datafire/azure_cognitiveservices_luis_programmatic

Client library for LUIS Programmatic

## Installation and Usage
```bash
npm install --save @datafire/azure_cognitiveservices_luis_programmatic
```
```js
let azure_cognitiveservices_luis_programmatic = require('@datafire/azure_cognitiveservices_luis_programmatic').create({
  apiKeyHeader: ""
});

azure_cognitiveservices_luis_programmatic.Apps_List({}).then(data => {
  console.log(data);
});
```

## Description



## Actions

### Apps_List
Lists all of the user applications.


```js
azure_cognitiveservices_luis_programmatic.Apps_List({}, context)
```

#### Input
* input `object`
  * skip `integer`: The number of entries to skip. Default value is 0.
  * take `integer`: The number of entries to return. Maximum page size is 500. Default is 100.

#### Output
* output [ApplicationsInfoList](#applicationsinfolist)

### Apps_Add
Creates a new LUIS app.


```js
azure_cognitiveservices_luis_programmatic.Apps_Add({
  "applicationCreateObject": {
    "culture": "",
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * applicationCreateObject **required** [ApplicationCreateObject](#applicationcreateobject)

#### Output
* output [GuidResponse](#guidresponse)

### Apps_ListCortanaEndpoints
Gets the endpoint URLs for the prebuilt Cortana applications.


```js
azure_cognitiveservices_luis_programmatic.Apps_ListCortanaEndpoints(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [PersonalAssistantsResponse](#personalassistantsresponse)

### Apps_ListSupportedCultures
Gets the supported application cultures.


```js
azure_cognitiveservices_luis_programmatic.Apps_ListSupportedCultures(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [AvailableCultures](#availablecultures)

### Apps_ListAvailableCustomPrebuiltDomains
Gets all the available custom prebuilt domains for all cultures.


```js
azure_cognitiveservices_luis_programmatic.Apps_ListAvailableCustomPrebuiltDomains(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [PrebuiltDomainsList](#prebuiltdomainslist)

### Apps_AddCustomPrebuiltDomain
Adds a prebuilt domain along with its models as a new application.


```js
azure_cognitiveservices_luis_programmatic.Apps_AddCustomPrebuiltDomain({
  "prebuiltDomainCreateObject": {}
}, context)
```

#### Input
* input `object`
  * prebuiltDomainCreateObject **required** [PrebuiltDomainCreateObject](#prebuiltdomaincreateobject)

#### Output
* output [GuidResponse](#guidresponse)

### Apps_ListAvailableCustomPrebuiltDomainsForCulture
Gets all the available custom prebuilt domains for a specific culture.


```js
azure_cognitiveservices_luis_programmatic.Apps_ListAvailableCustomPrebuiltDomainsForCulture({
  "culture": ""
}, context)
```

#### Input
* input `object`
  * culture **required** `string`: Culture.

#### Output
* output [PrebuiltDomainsList](#prebuiltdomainslist)

### Apps_ListDomains
Gets the available application domains.


```js
azure_cognitiveservices_luis_programmatic.Apps_ListDomains(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [AvailableDomains](#availabledomains)

### Apps_Import
Imports an application to LUIS, the application's structure should be included in in the request body.


```js
azure_cognitiveservices_luis_programmatic.Apps_Import({
  "luisApp": {}
}, context)
```

#### Input
* input `object`
  * appName `string`: The application name to create. If not specified, the application name will be read from the imported object.
  * luisApp **required** [LuisApp](#luisapp)

#### Output
* output [GuidResponse](#guidresponse)

### Apps_ListUsageScenarios
Gets the application available usage scenarios.


```js
azure_cognitiveservices_luis_programmatic.Apps_ListUsageScenarios(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [ApplicationUsageScenarios](#applicationusagescenarios)

### Apps_Delete
Deletes an application.


```js
azure_cognitiveservices_luis_programmatic.Apps_Delete({
  "appId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.

#### Output
* output [OperationStatus](#operationstatus)

### Apps_Get
Gets the application info.


```js
azure_cognitiveservices_luis_programmatic.Apps_Get({
  "appId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.

#### Output
* output [ApplicationInfoResponse](#applicationinforesponse)

### Apps_Update
Updates the name or description of the application.


```js
azure_cognitiveservices_luis_programmatic.Apps_Update({
  "appId": "",
  "applicationUpdateObject": {}
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * applicationUpdateObject **required** [ApplicationUpdateObject](#applicationupdateobject)

#### Output
* output [OperationStatus](#operationstatus)

### Apps_ListEndpoints
Returns the available endpoint deployment regions and URLs.


```js
azure_cognitiveservices_luis_programmatic.Apps_ListEndpoints({
  "appId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.

#### Output
* output [AvailableEndpoints](#availableendpoints)

### Permissions_Delete
Removes a user from the allowed list of users to access this LUIS application. Users are removed using their email address.


```js
azure_cognitiveservices_luis_programmatic.Permissions_Delete({
  "appId": "",
  "userToDelete": {}
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * userToDelete **required** [UserCollaborator](#usercollaborator)

#### Output
* output [OperationStatus](#operationstatus)

### Permissions_List
Gets the list of user emails that have permissions to access your application.


```js
azure_cognitiveservices_luis_programmatic.Permissions_List({
  "appId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.

#### Output
* output [UserAccessList](#useraccesslist)

### Permissions_Add
Adds a user to the allowed list of users to access this LUIS application. Users are added using their email address.


```js
azure_cognitiveservices_luis_programmatic.Permissions_Add({
  "appId": "",
  "userToAdd": {}
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * userToAdd **required** [UserCollaborator](#usercollaborator)

#### Output
* output [OperationStatus](#operationstatus)

### Permissions_Update
Replaces the current users access list with the one sent in the body. If an empty list is sent, all access to other users will be removed.


```js
azure_cognitiveservices_luis_programmatic.Permissions_Update({
  "appId": "",
  "collaborators": {}
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * collaborators **required** [CollaboratorsArray](#collaboratorsarray)

#### Output
* output [OperationStatus](#operationstatus)

### Apps_Publish
Publishes a specific version of the application.


```js
azure_cognitiveservices_luis_programmatic.Apps_Publish({
  "appId": "",
  "applicationPublishObject": {}
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * applicationPublishObject **required** [ApplicationPublishObject](#applicationpublishobject)

#### Output
* output [ProductionOrStagingEndpointInfo](#productionorstagingendpointinfo)

### Apps_DownloadQueryLogs
Gets the query logs of the past month for the application.


```js
azure_cognitiveservices_luis_programmatic.Apps_DownloadQueryLogs({
  "appId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.

#### Output
* output `object`: The query logs of an application for the past month in CSV format.

### Apps_GetSettings
Get the application settings.


```js
azure_cognitiveservices_luis_programmatic.Apps_GetSettings({
  "appId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.

#### Output
* output [ApplicationSettings](#applicationsettings)

### Apps_UpdateSettings
Updates the application settings.


```js
azure_cognitiveservices_luis_programmatic.Apps_UpdateSettings({
  "appId": "",
  "applicationSettingUpdateObject": {}
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * applicationSettingUpdateObject **required** [ApplicationSettingUpdateObject](#applicationsettingupdateobject)

#### Output
* output [OperationStatus](#operationstatus)

### Versions_List
Gets the application versions info.


```js
azure_cognitiveservices_luis_programmatic.Versions_List({
  "appId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * skip `integer`: The number of entries to skip. Default value is 0.
  * take `integer`: The number of entries to return. Maximum page size is 500. Default is 100.

#### Output
* output `array`
  * items [VersionInfo](#versioninfo)

### Versions_Import
Imports a new version into a LUIS application.


```js
azure_cognitiveservices_luis_programmatic.Versions_Import({
  "appId": "",
  "luisApp": {}
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId `string`: The new versionId to import. If not specified, the versionId will be read from the imported object.
  * luisApp **required** [LuisApp](#luisapp)

#### Output
* output [VersionResponse](#versionresponse)

### Versions_Delete
Deletes an application version.


```js
azure_cognitiveservices_luis_programmatic.Versions_Delete({
  "appId": "",
  "versionId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.

#### Output
* output [OperationStatus](#operationstatus)

### Versions_Get
Gets the version info.


```js
azure_cognitiveservices_luis_programmatic.Versions_Get({
  "appId": "",
  "versionId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.

#### Output
* output [VersionInfo](#versioninfo)

### Versions_Update
Updates the name or description of the application version.


```js
azure_cognitiveservices_luis_programmatic.Versions_Update({
  "appId": "",
  "versionId": "",
  "versionUpdateObject": {}
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * versionUpdateObject **required** [TaskUpdateObject](#taskupdateobject)

#### Output
* output [OperationStatus](#operationstatus)

### Versions_Clone
Creates a new version using the current snapshot of the selected application version.


```js
azure_cognitiveservices_luis_programmatic.Versions_Clone({
  "appId": "",
  "versionId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * versionCloneObject [TaskUpdateObject](#taskupdateobject)

#### Output
* output `string`

### Model_ListClosedLists
Gets information about the closedlist models.


```js
azure_cognitiveservices_luis_programmatic.Model_ListClosedLists({
  "appId": "",
  "versionId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * skip `integer`: The number of entries to skip. Default value is 0.
  * take `integer`: The number of entries to return. Maximum page size is 500. Default is 100.

#### Output
* output [ClosedListEntityExtractorsList](#closedlistentityextractorslist)

### Model_AddClosedList
Adds a closed list model to the application.


```js
azure_cognitiveservices_luis_programmatic.Model_AddClosedList({
  "appId": "",
  "versionId": "",
  "closedListModelCreateObject": {}
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * closedListModelCreateObject **required** [ClosedListModelCreateObject](#closedlistmodelcreateobject)

#### Output
* output [GuidResponse](#guidresponse)

### Model_DeleteClosedList
Deletes a closed list model from the application.


```js
azure_cognitiveservices_luis_programmatic.Model_DeleteClosedList({
  "appId": "",
  "versionId": "",
  "clEntityId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * clEntityId **required** `string`: The closed list model ID.

#### Output
* output [OperationStatus](#operationstatus)

### Model_GetClosedList
Gets information of a closed list model.


```js
azure_cognitiveservices_luis_programmatic.Model_GetClosedList({
  "appId": "",
  "versionId": "",
  "clEntityId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * clEntityId **required** `string`: The closed list model ID.

#### Output
* output [ClosedListEntityExtractor](#closedlistentityextractor)

### Model_PatchClosedList
Adds a batch of sublists to an existing closedlist.


```js
azure_cognitiveservices_luis_programmatic.Model_PatchClosedList({
  "appId": "",
  "versionId": "",
  "clEntityId": "",
  "closedListModelPatchObject": {}
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * clEntityId **required** `string`: The closed list model ID.
  * closedListModelPatchObject **required** [ClosedListModelPatchObject](#closedlistmodelpatchobject)

#### Output
* output [OperationStatus](#operationstatus)

### Model_UpdateClosedList
Updates the closed list model.


```js
azure_cognitiveservices_luis_programmatic.Model_UpdateClosedList({
  "appId": "",
  "versionId": "",
  "clEntityId": "",
  "closedListModelUpdateObject": {}
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * clEntityId **required** `string`: The closed list model ID.
  * closedListModelUpdateObject **required** [ClosedListModelUpdateObject](#closedlistmodelupdateobject)

#### Output
* output [OperationStatus](#operationstatus)

### Model_AddSubList
Adds a list to an existing closed list.


```js
azure_cognitiveservices_luis_programmatic.Model_AddSubList({
  "appId": "",
  "versionId": "",
  "clEntityId": "",
  "wordListCreateObject": {}
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * clEntityId **required** `string`: The closed list entity extractor ID.
  * wordListCreateObject **required** [WordListObject](#wordlistobject)

#### Output
* output `integer`

### Model_DeleteSubList
Deletes a sublist of a specific closed list model.


```js
azure_cognitiveservices_luis_programmatic.Model_DeleteSubList({
  "appId": "",
  "versionId": "",
  "clEntityId": "",
  "subListId": 0
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * clEntityId **required** `string`: The closed list entity extractor ID.
  * subListId **required** `integer`: The sublist ID.

#### Output
* output [OperationStatus](#operationstatus)

### Model_UpdateSubList
Updates one of the closed list's sublists.


```js
azure_cognitiveservices_luis_programmatic.Model_UpdateSubList({
  "appId": "",
  "versionId": "",
  "clEntityId": "",
  "subListId": 0,
  "wordListBaseUpdateObject": {}
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * clEntityId **required** `string`: The closed list entity extractor ID.
  * subListId **required** `integer`: The sublist ID.
  * wordListBaseUpdateObject **required** [WordListBaseUpdateObject](#wordlistbaseupdateobject)

#### Output
* output [OperationStatus](#operationstatus)

### Model_ListCompositeEntities
Gets information about the composite entity models.


```js
azure_cognitiveservices_luis_programmatic.Model_ListCompositeEntities({
  "appId": "",
  "versionId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * skip `integer`: The number of entries to skip. Default value is 0.
  * take `integer`: The number of entries to return. Maximum page size is 500. Default is 100.

#### Output
* output [CompositeEntityExtractorsList](#compositeentityextractorslist)

### Model_AddCompositeEntity
Adds a composite entity extractor to the application.


```js
azure_cognitiveservices_luis_programmatic.Model_AddCompositeEntity({
  "appId": "",
  "versionId": "",
  "compositeModelCreateObject": {}
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * compositeModelCreateObject **required** [CompositeEntityModel](#compositeentitymodel)

#### Output
* output [GuidResponse](#guidresponse)

### Model_DeleteCompositeEntity
Deletes a composite entity extractor from the application.


```js
azure_cognitiveservices_luis_programmatic.Model_DeleteCompositeEntity({
  "appId": "",
  "versionId": "",
  "cEntityId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * cEntityId **required** `string`: The composite entity extractor ID.

#### Output
* output [OperationStatus](#operationstatus)

### Model_GetCompositeEntity
Gets information about the composite entity model.


```js
azure_cognitiveservices_luis_programmatic.Model_GetCompositeEntity({
  "appId": "",
  "versionId": "",
  "cEntityId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * cEntityId **required** `string`: The composite entity extractor ID.

#### Output
* output [CompositeEntityExtractor](#compositeentityextractor)

### Model_UpdateCompositeEntity
Updates the composite entity extractor.


```js
azure_cognitiveservices_luis_programmatic.Model_UpdateCompositeEntity({
  "appId": "",
  "versionId": "",
  "cEntityId": "",
  "compositeModelUpdateObject": {}
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * cEntityId **required** `string`: The composite entity extractor ID.
  * compositeModelUpdateObject **required** [CompositeEntityModel](#compositeentitymodel)

#### Output
* output [OperationStatus](#operationstatus)

### Model_AddCompositeEntityChild
Creates a single child in an existing composite entity model.


```js
azure_cognitiveservices_luis_programmatic.Model_AddCompositeEntityChild({
  "appId": "",
  "versionId": "",
  "cEntityId": "",
  "compositeChildModelCreateObject": {}
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * cEntityId **required** `string`: The composite entity extractor ID.
  * compositeChildModelCreateObject **required** `object`
    * name `string`

#### Output
* output [GuidResponse](#guidresponse)

### Model_DeleteCompositeEntityChild
Deletes a composite entity extractor child from the application.


```js
azure_cognitiveservices_luis_programmatic.Model_DeleteCompositeEntityChild({
  "appId": "",
  "versionId": "",
  "cEntityId": "",
  "cChildId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * cEntityId **required** `string`: The composite entity extractor ID.
  * cChildId **required** `string`: The hierarchical entity extractor child ID.

#### Output
* output [OperationStatus](#operationstatus)

### Model_AddCustomPrebuiltDomain
Adds a customizable prebuilt domain along with all of its models to this application.


```js
azure_cognitiveservices_luis_programmatic.Model_AddCustomPrebuiltDomain({
  "appId": "",
  "versionId": "",
  "prebuiltDomainObject": {}
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * prebuiltDomainObject **required** [PrebuiltDomainCreateBaseObject](#prebuiltdomaincreatebaseobject)

#### Output
* output [GuidList](#guidlist)

### Model_DeleteCustomPrebuiltDomain
Deletes a prebuilt domain's models from the application.


```js
azure_cognitiveservices_luis_programmatic.Model_DeleteCustomPrebuiltDomain({
  "appId": "",
  "versionId": "",
  "domainName": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * domainName **required** `string`: Domain name.

#### Output
* output [OperationStatus](#operationstatus)

### Model_ListCustomPrebuiltEntities
Gets all custom prebuilt entities information of this application.


```js
azure_cognitiveservices_luis_programmatic.Model_ListCustomPrebuiltEntities({
  "appId": "",
  "versionId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.

#### Output
* output [EntityExtractorsList](#entityextractorslist)

### Model_AddCustomPrebuiltEntity
Adds a custom prebuilt entity model to the application.


```js
azure_cognitiveservices_luis_programmatic.Model_AddCustomPrebuiltEntity({
  "appId": "",
  "versionId": "",
  "prebuiltDomainModelCreateObject": {}
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * prebuiltDomainModelCreateObject **required** [PrebuiltDomainModelCreateObject](#prebuiltdomainmodelcreateobject)

#### Output
* output [GuidResponse](#guidresponse)

### Model_ListCustomPrebuiltIntents
Gets custom prebuilt intents information of this application.


```js
azure_cognitiveservices_luis_programmatic.Model_ListCustomPrebuiltIntents({
  "appId": "",
  "versionId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.

#### Output
* output [IntentClassifiersList](#intentclassifierslist)

### Model_AddCustomPrebuiltIntent
Adds a custom prebuilt intent model to the application.


```js
azure_cognitiveservices_luis_programmatic.Model_AddCustomPrebuiltIntent({
  "appId": "",
  "versionId": "",
  "prebuiltDomainModelCreateObject": {}
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * prebuiltDomainModelCreateObject **required** [PrebuiltDomainModelCreateObject](#prebuiltdomainmodelcreateobject)

#### Output
* output [GuidResponse](#guidresponse)

### Model_ListCustomPrebuiltModels
Gets all custom prebuilt models information of this application.


```js
azure_cognitiveservices_luis_programmatic.Model_ListCustomPrebuiltModels({
  "appId": "",
  "versionId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.

#### Output
* output [CustomPrebuiltModelList](#customprebuiltmodellist)

### Model_ListEntities
Gets information about the entity models.


```js
azure_cognitiveservices_luis_programmatic.Model_ListEntities({
  "appId": "",
  "versionId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * skip `integer`: The number of entries to skip. Default value is 0.
  * take `integer`: The number of entries to return. Maximum page size is 500. Default is 100.

#### Output
* output [EntityExtractorsList](#entityextractorslist)

### Model_AddEntity
Adds an entity extractor to the application.


```js
azure_cognitiveservices_luis_programmatic.Model_AddEntity({
  "appId": "",
  "versionId": "",
  "modelCreateObject": {}
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * modelCreateObject **required** [ModelCreateObject](#modelcreateobject)

#### Output
* output [GuidResponse](#guidresponse)

### Model_DeleteEntity
Deletes an entity extractor from the application.


```js
azure_cognitiveservices_luis_programmatic.Model_DeleteEntity({
  "appId": "",
  "versionId": "",
  "entityId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * entityId **required** `string`: The entity extractor ID.

#### Output
* output [OperationStatus](#operationstatus)

### Model_GetEntity
Gets information about the entity model.


```js
azure_cognitiveservices_luis_programmatic.Model_GetEntity({
  "appId": "",
  "versionId": "",
  "entityId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * entityId **required** `string`: The entity extractor ID.

#### Output
* output [EntityExtractor](#entityextractor)

### Model_UpdateEntity
Updates the name of an entity extractor.


```js
azure_cognitiveservices_luis_programmatic.Model_UpdateEntity({
  "appId": "",
  "versionId": "",
  "entityId": "",
  "modelUpdateObject": {}
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * entityId **required** `string`: The entity extractor ID.
  * modelUpdateObject **required** [ModelUpdateObject](#modelupdateobject)

#### Output
* output [OperationStatus](#operationstatus)

### Model_GetEntitySuggestions
Get suggestion examples that would improve the accuracy of the entity model.


```js
azure_cognitiveservices_luis_programmatic.Model_GetEntitySuggestions({
  "appId": "",
  "versionId": "",
  "entityId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * entityId **required** `string`: The target entity extractor model to enhance.
  * take `integer`: The number of entries to return. Maximum page size is 500. Default is 100.

#### Output
* output [EntitiesSuggestionExamples](#entitiessuggestionexamples)

### Examples_Add
Adds a labeled example to the application.


```js
azure_cognitiveservices_luis_programmatic.Examples_Add({
  "appId": "",
  "versionId": "",
  "exampleLabelObject": {}
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * exampleLabelObject **required** [ExampleLabelObject](#examplelabelobject)

#### Output
* output [LabelExampleResponse](#labelexampleresponse)

### Examples_List
Returns examples to be reviewed.


```js
azure_cognitiveservices_luis_programmatic.Examples_List({
  "appId": "",
  "versionId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * skip `integer`: The number of entries to skip. Default value is 0.
  * take `integer`: The number of entries to return. Maximum page size is 500. Default is 100.

#### Output
* output [LabeledUtterances](#labeledutterances)

### Examples_Batch
Adds a batch of labeled examples to the application.


```js
azure_cognitiveservices_luis_programmatic.Examples_Batch({
  "appId": "",
  "versionId": "",
  "exampleLabelObjectArray": []
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * exampleLabelObjectArray **required** [ExampleLabelObjectArray](#examplelabelobjectarray)

#### Output
* output [BatchLabelExampleResponse](#batchlabelexampleresponse)

### Examples_Delete
Deletes the labeled example with the specified ID.


```js
azure_cognitiveservices_luis_programmatic.Examples_Delete({
  "appId": "",
  "versionId": "",
  "exampleId": 0
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * exampleId **required** `integer`: The example ID.

#### Output
* output [OperationStatus](#operationstatus)

### Versions_Export
Exports a LUIS application to JSON format.


```js
azure_cognitiveservices_luis_programmatic.Versions_Export({
  "appId": "",
  "versionId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.

#### Output
* output [LuisApp](#luisapp)

### Features_List
Gets all the extraction features for the specified application version.


```js
azure_cognitiveservices_luis_programmatic.Features_List({
  "appId": "",
  "versionId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * skip `integer`: The number of entries to skip. Default value is 0.
  * take `integer`: The number of entries to return. Maximum page size is 500. Default is 100.

#### Output
* output [FeaturesResponseObject](#featuresresponseobject)

### Model_ListHierarchicalEntities
Gets information about the hierarchical entity models.


```js
azure_cognitiveservices_luis_programmatic.Model_ListHierarchicalEntities({
  "appId": "",
  "versionId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * skip `integer`: The number of entries to skip. Default value is 0.
  * take `integer`: The number of entries to return. Maximum page size is 500. Default is 100.

#### Output
* output [HierarchicalEntityExtractorsList](#hierarchicalentityextractorslist)

### Model_AddHierarchicalEntity
Adds a hierarchical entity extractor to the application version.


```js
azure_cognitiveservices_luis_programmatic.Model_AddHierarchicalEntity({
  "appId": "",
  "versionId": "",
  "hierarchicalModelCreateObject": {}
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * hierarchicalModelCreateObject **required** [HierarchicalEntityModel](#hierarchicalentitymodel)

#### Output
* output [GuidResponse](#guidresponse)

### Model_DeleteHierarchicalEntity
Deletes a hierarchical entity extractor from the application version.


```js
azure_cognitiveservices_luis_programmatic.Model_DeleteHierarchicalEntity({
  "appId": "",
  "versionId": "",
  "hEntityId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * hEntityId **required** `string`: The hierarchical entity extractor ID.

#### Output
* output [OperationStatus](#operationstatus)

### Model_GetHierarchicalEntity
Gets information about the hierarchical entity model.


```js
azure_cognitiveservices_luis_programmatic.Model_GetHierarchicalEntity({
  "appId": "",
  "versionId": "",
  "hEntityId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * hEntityId **required** `string`: The hierarchical entity extractor ID.

#### Output
* output [HierarchicalEntityExtractor](#hierarchicalentityextractor)

### Model_UpdateHierarchicalEntity
Updates the name and children of a hierarchical entity model.


```js
azure_cognitiveservices_luis_programmatic.Model_UpdateHierarchicalEntity({
  "appId": "",
  "versionId": "",
  "hEntityId": "",
  "hierarchicalModelUpdateObject": {}
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * hEntityId **required** `string`: The hierarchical entity extractor ID.
  * hierarchicalModelUpdateObject **required** [HierarchicalEntityModel](#hierarchicalentitymodel)

#### Output
* output [OperationStatus](#operationstatus)

### Model_AddHierarchicalEntityChild
Creates a single child in an existing hierarchical entity model.


```js
azure_cognitiveservices_luis_programmatic.Model_AddHierarchicalEntityChild({
  "appId": "",
  "versionId": "",
  "hEntityId": "",
  "hierarchicalChildModelCreateObject": {}
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * hEntityId **required** `string`: The hierarchical entity extractor ID.
  * hierarchicalChildModelCreateObject **required** `object`
    * name `string`

#### Output
* output [GuidResponse](#guidresponse)

### Model_DeleteHierarchicalEntityChild
Deletes a hierarchical entity extractor child from the application.


```js
azure_cognitiveservices_luis_programmatic.Model_DeleteHierarchicalEntityChild({
  "appId": "",
  "versionId": "",
  "hEntityId": "",
  "hChildId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * hEntityId **required** `string`: The hierarchical entity extractor ID.
  * hChildId **required** `string`: The hierarchical entity extractor child ID.

#### Output
* output [OperationStatus](#operationstatus)

### Model_GetHierarchicalEntityChild
Gets information about the hierarchical entity child model.


```js
azure_cognitiveservices_luis_programmatic.Model_GetHierarchicalEntityChild({
  "appId": "",
  "versionId": "",
  "hEntityId": "",
  "hChildId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * hEntityId **required** `string`: The hierarchical entity extractor ID.
  * hChildId **required** `string`: The hierarchical entity extractor child ID.

#### Output
* output [HierarchicalChildEntity](#hierarchicalchildentity)

### Model_UpdateHierarchicalEntityChild
Renames a single child in an existing hierarchical entity model.


```js
azure_cognitiveservices_luis_programmatic.Model_UpdateHierarchicalEntityChild({
  "appId": "",
  "versionId": "",
  "hEntityId": "",
  "hChildId": "",
  "hierarchicalChildModelUpdateObject": {}
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * hEntityId **required** `string`: The hierarchical entity extractor ID.
  * hChildId **required** `string`: The hierarchical entity extractor child ID.
  * hierarchicalChildModelUpdateObject **required** `object`
    * name `string`

#### Output
* output [OperationStatus](#operationstatus)

### Model_ListIntents
Gets information about the intent models.


```js
azure_cognitiveservices_luis_programmatic.Model_ListIntents({
  "appId": "",
  "versionId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * skip `integer`: The number of entries to skip. Default value is 0.
  * take `integer`: The number of entries to return. Maximum page size is 500. Default is 100.

#### Output
* output [IntentClassifiersList](#intentclassifierslist)

### Model_AddIntent
Adds an intent classifier to the application.


```js
azure_cognitiveservices_luis_programmatic.Model_AddIntent({
  "appId": "",
  "versionId": "",
  "intentCreateObject": {}
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * intentCreateObject **required** [ModelCreateObject](#modelcreateobject)

#### Output
* output [GuidResponse](#guidresponse)

### Model_DeleteIntent
Deletes an intent classifier from the application.


```js
azure_cognitiveservices_luis_programmatic.Model_DeleteIntent({
  "appId": "",
  "versionId": "",
  "intentId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * intentId **required** `string`: The intent classifier ID.
  * deleteUtterances `boolean`: Also delete the intent's utterances (true). Or move the utterances to the None intent (false - the default value).

#### Output
* output [OperationStatus](#operationstatus)

### Model_GetIntent
Gets information about the intent model.


```js
azure_cognitiveservices_luis_programmatic.Model_GetIntent({
  "appId": "",
  "versionId": "",
  "intentId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * intentId **required** `string`: The intent classifier ID.

#### Output
* output [IntentClassifier](#intentclassifier)

### Model_UpdateIntent
Updates the name of an intent classifier.


```js
azure_cognitiveservices_luis_programmatic.Model_UpdateIntent({
  "appId": "",
  "versionId": "",
  "intentId": "",
  "modelUpdateObject": {}
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * intentId **required** `string`: The intent classifier ID.
  * modelUpdateObject **required** [ModelUpdateObject](#modelupdateobject)

#### Output
* output [OperationStatus](#operationstatus)

### Model_GetIntentSuggestions
Suggests examples that would improve the accuracy of the intent model.


```js
azure_cognitiveservices_luis_programmatic.Model_GetIntentSuggestions({
  "appId": "",
  "versionId": "",
  "intentId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * intentId **required** `string`: The intent classifier ID.
  * take `integer`: The number of entries to return. Maximum page size is 500. Default is 100.

#### Output
* output [IntentsSuggestionExamples](#intentssuggestionexamples)

### Model_ListPrebuiltEntities
Gets all the available prebuilt entity extractors for the application.


```js
azure_cognitiveservices_luis_programmatic.Model_ListPrebuiltEntities({
  "appId": "",
  "versionId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.

#### Output
* output [AvailablePrebuiltEntityModels](#availableprebuiltentitymodels)

### Model_ListModels
Gets information about the application version models.


```js
azure_cognitiveservices_luis_programmatic.Model_ListModels({
  "appId": "",
  "versionId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * skip `integer`: The number of entries to skip. Default value is 0.
  * take `integer`: The number of entries to return. Maximum page size is 500. Default is 100.

#### Output
* output [ModelsInfoResponseObject](#modelsinforesponseobject)

### Features_GetApplicationVersionPatternFeatures
[DEPRECATED NOTICE: This operation will soon be removed] Gets all the pattern features.


```js
azure_cognitiveservices_luis_programmatic.Features_GetApplicationVersionPatternFeatures({
  "appId": "",
  "versionId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * skip `integer`: The number of entries to skip. Default value is 0.
  * take `integer`: The number of entries to return. Maximum page size is 500. Default is 100.

#### Output
* output [PatternFeatureInfoList](#patternfeatureinfolist)

### Features_CreatePatternFeature
[DEPRECATED NOTICE: This operation will soon be removed] Creates a new pattern feature.


```js
azure_cognitiveservices_luis_programmatic.Features_CreatePatternFeature({
  "appId": "",
  "versionId": "",
  "patternCreateObject": {}
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * patternCreateObject **required** [PatternCreateObject](#patterncreateobject)

#### Output
* output [FeatureIDResponse](#featureidresponse)

### Features_DeletePatternFeature
[DEPRECATED NOTICE: This operation will soon be removed] Deletes a pattern feature.


```js
azure_cognitiveservices_luis_programmatic.Features_DeletePatternFeature({
  "appId": "",
  "versionId": "",
  "patternId": 0
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * patternId **required** `integer`: The pattern feature ID.

#### Output
* output [OperationStatus](#operationstatus)

### Features_GetPatternFeatureInfo
[DEPRECATED NOTICE: This operation will soon be removed] Gets the specified pattern feature's info.


```js
azure_cognitiveservices_luis_programmatic.Features_GetPatternFeatureInfo({
  "appId": "",
  "versionId": "",
  "patternId": 0
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * patternId **required** `integer`: The pattern feature ID.

#### Output
* output [PatternFeatureInfo](#patternfeatureinfo)

### Features_UpdatePatternFeature
[DEPRECATED NOTICE: This operation will soon be removed] Updates the pattern, the name and the state of the pattern feature.


```js
azure_cognitiveservices_luis_programmatic.Features_UpdatePatternFeature({
  "appId": "",
  "versionId": "",
  "patternId": 0,
  "patternUpdateObject": {}
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * patternId **required** `integer`: The pattern feature ID.
  * patternUpdateObject **required** [PatternUpdateObject](#patternupdateobject)

#### Output
* output [OperationStatus](#operationstatus)

### Features_ListPhraseLists
Gets all the phraselist features.


```js
azure_cognitiveservices_luis_programmatic.Features_ListPhraseLists({
  "appId": "",
  "versionId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * skip `integer`: The number of entries to skip. Default value is 0.
  * take `integer`: The number of entries to return. Maximum page size is 500. Default is 100.

#### Output
* output [PhraseListFeatureInfoList](#phraselistfeatureinfolist)

### Features_AddPhraseList
Creates a new phraselist feature.


```js
azure_cognitiveservices_luis_programmatic.Features_AddPhraseList({
  "appId": "",
  "versionId": "",
  "phraselistCreateObject": {}
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * phraselistCreateObject **required** [PhraselistCreateObject](#phraselistcreateobject)

#### Output
* output [FeatureIDResponse](#featureidresponse)

### Features_DeletePhraseList
Deletes a phraselist feature.


```js
azure_cognitiveservices_luis_programmatic.Features_DeletePhraseList({
  "appId": "",
  "versionId": "",
  "phraselistId": 0
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * phraselistId **required** `integer`: The ID of the feature to be deleted.

#### Output
* output [OperationStatus](#operationstatus)

### Features_GetPhraseList
Gets phraselist feature info.


```js
azure_cognitiveservices_luis_programmatic.Features_GetPhraseList({
  "appId": "",
  "versionId": "",
  "phraselistId": 0
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * phraselistId **required** `integer`: The ID of the feature to be retrieved.

#### Output
* output [PhraseListFeatureInfo](#phraselistfeatureinfo)

### Features_UpdatePhraseList
Updates the phrases, the state and the name of the phraselist feature.


```js
azure_cognitiveservices_luis_programmatic.Features_UpdatePhraseList({
  "appId": "",
  "versionId": "",
  "phraselistId": 0
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * phraselistId **required** `integer`: The ID of the feature to be updated.
  * phraselistUpdateObject [PhraselistUpdateObject](#phraselistupdateobject)

#### Output
* output [OperationStatus](#operationstatus)

### Model_ListPrebuilts
Gets information about the prebuilt entity models.


```js
azure_cognitiveservices_luis_programmatic.Model_ListPrebuilts({
  "appId": "",
  "versionId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * skip `integer`: The number of entries to skip. Default value is 0.
  * take `integer`: The number of entries to return. Maximum page size is 500. Default is 100.

#### Output
* output [PrebuiltEntityExtractorsList](#prebuiltentityextractorslist)

### Model_AddPrebuilt
Adds a list of prebuilt entity extractors to the application.


```js
azure_cognitiveservices_luis_programmatic.Model_AddPrebuilt({
  "appId": "",
  "versionId": "",
  "prebuiltExtractorNames": []
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * prebuiltExtractorNames **required** [PrebuiltExtractorNames](#prebuiltextractornames)

#### Output
* output [PrebuiltEntityExtractorsList](#prebuiltentityextractorslist)

### Model_DeletePrebuilt
Deletes a prebuilt entity extractor from the application.


```js
azure_cognitiveservices_luis_programmatic.Model_DeletePrebuilt({
  "appId": "",
  "versionId": "",
  "prebuiltId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * prebuiltId **required** `string`: The prebuilt entity extractor ID.

#### Output
* output [OperationStatus](#operationstatus)

### Model_GetPrebuilt
Gets information about the prebuilt entity model.


```js
azure_cognitiveservices_luis_programmatic.Model_GetPrebuilt({
  "appId": "",
  "versionId": "",
  "prebuiltId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * prebuiltId **required** `string`: The prebuilt entity extractor ID.

#### Output
* output [PrebuiltEntityExtractor](#prebuiltentityextractor)

### Versions_DeleteUnlabelledUtterance
Deleted an unlabelled utterance.


```js
azure_cognitiveservices_luis_programmatic.Versions_DeleteUnlabelledUtterance({
  "appId": "",
  "versionId": "",
  "utterance": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * utterance **required** `string`

#### Output
* output [OperationStatus](#operationstatus)

### Train_GetStatus
Gets the training status of all models (intents and entities) for the specified LUIS app. You must call the train API to train the LUIS app before you call this API to get training status. "appID" specifies the LUIS app ID. "versionId" specifies the version number of the LUIS app. For example, "0.1".


```js
azure_cognitiveservices_luis_programmatic.Train_GetStatus({
  "appId": "",
  "versionId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.

#### Output
* output [ModelTrainingInfoList](#modeltraininginfolist)

### Train_TrainVersion
Sends a training request for a version of a specified LUIS app. This POST request initiates a request asynchronously. To determine whether the training request is successful, submit a GET request to get training status. Note: The application version is not fully trained unless all the models (intents and entities) are trained successfully or are up to date. To verify training success, get the training status at least once after training is complete.


```js
azure_cognitiveservices_luis_programmatic.Train_TrainVersion({
  "appId": "",
  "versionId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.

#### Output
* output [EnqueueTrainingResponse](#enqueuetrainingresponse)



## Definitions

### ApplicationCreateObject
* ApplicationCreateObject `object`: Properties for creating a new LUIS Application
  * culture **required** `string`: The culture for the new application. It is the language that your app understands and speaks. E.g.: "en-us". Note: the culture cannot be changed after the app is created.
  * description `string`: Description of the new application. Optional.
  * domain `string`: The domain for the new application. Optional. E.g.: Comics.
  * initialVersionId `string`: The initial version ID. Optional. Default value is: "0.1"
  * name **required** `string`: The name for the new application.
  * usageScenario `string`: Defines the scenario for the new application. Optional. E.g.: IoT.

### ApplicationInfoResponse
* ApplicationInfoResponse `object`: Response containing the Application Info.
  * activeVersion `string`: The version ID currently marked as active.
  * createdDateTime `string`: The version's creation timestamp.
  * culture `string`: The culture of the application. E.g.: en-us.
  * description `string`: The description of the application.
  * domain `string`: The domain for the new application. Optional. E.g.: Comics.
  * endpointHitsCount `integer`: Number of calls made to this endpoint.
  * endpoints `object`: The Runtime endpoint URL for this model version.
  * id `string`: The ID (GUID) of the application.
  * name `string`: The name of the application.
  * usageScenario `string`: Defines the scenario for the new application. Optional. E.g.: IoT.
  * versionsCount `integer`: Amount of model versions within the application.

### ApplicationPublishObject
* ApplicationPublishObject `object`: Object model for publishing a specific application version.
  * isStaging `boolean`: Indicates if the staging slot should be used, instead of the Production one.
  * region `string`: The target region that the application is published to.
  * versionId `string`: The version ID to publish.

### ApplicationSettingUpdateObject
* ApplicationSettingUpdateObject `object`: Object model for updating an application's settings.
  * public `boolean`: Setting your application as public allows other people to use your application's endpoint using their own keys.

### ApplicationSettings
* ApplicationSettings `object`: The application settings.
  * id **required** `string`: The application ID.
  * public **required** `boolean`: Setting your application as public allows other people to use your application's endpoint using their own keys.

### ApplicationUpdateObject
* ApplicationUpdateObject `object`: Object model for updating the name or description of an application.
  * description `string`: The application's new description.
  * name `string`: The application's new name.

### ApplicationUsageScenarios
* ApplicationUsageScenarios `array`: A list of possible application usage scenarios.
  * items `string`

### ApplicationsInfoList
* ApplicationsInfoList `array`: List of Application Infos.
  * items [ApplicationInfoResponse](#applicationinforesponse)

### AvailableCulture
* AvailableCulture `object`: Available culture for using in a new application.
  * code `string`: The ISO value for the language.
  * name `string`: The language name.

### AvailableCultures
* AvailableCultures `array`: A list of available application cultures.
  * items [AvailableCulture](#availableculture)

### AvailableDomains
* AvailableDomains `array`: A list of available application domains.
  * items `string`

### AvailableEndpoints
* AvailableEndpoints `object`: Collection of endpoint URLs where the selected application is deployed to.

### AvailablePrebuiltEntityModel
* AvailablePrebuiltEntityModel `object`: Available Prebuilt entity model for using in an application.
  * description `string`: The entity description and usage information.
  * examples `string`: Usage examples.
  * name `string`: The entity name.

### AvailablePrebuiltEntityModels
* AvailablePrebuiltEntityModels `array`: List of Available Prebuilt entity models.
  * items [AvailablePrebuiltEntityModel](#availableprebuiltentitymodel)

### BatchLabelExample
* BatchLabelExample `object`: Response when adding a batch of labeled examples.
  * error [OperationStatus](#operationstatus)
  * hasError `boolean`
  * value [LabelExampleResponse](#labelexampleresponse)

### BatchLabelExampleResponse
* BatchLabelExampleResponse `array`: Response when adding a batch of labeled examples.
  * items [BatchLabelExample](#batchlabelexample)

### ChildEntity
* ChildEntity `object`: The base child entity type.
  * id **required** `string`: The ID (GUID) belonging to a child entity.
  * name `string`: The name of a child entity.

### ClosedList
* ClosedList `object`: Exported Model - A Closed List.
  * name `string`: Name of the closed list feature.
  * subLists `array`: Sublists for the feature.
    * items [SubClosedList](#subclosedlist)

### ClosedListEntityExtractor
* ClosedListEntityExtractor `object`: Closed List Entity Extractor.
  * subLists `array`: List of sub-lists.
    * items [SubClosedListResponse](#subclosedlistresponse)
  * id **required** `string`: The ID of the Entity Model.
  * name `string`: Name of the Entity Model.
  * readableType **required** [ReadableType](#readabletype)
  * typeId `integer`: The type ID of the Entity Model.

### ClosedListEntityExtractorsList
* ClosedListEntityExtractorsList `array`: List of Closed List Entity Extractors.
  * items [ClosedListEntityExtractor](#closedlistentityextractor)

### ClosedListModelCreateObject
* ClosedListModelCreateObject `object`: Object model for creating a closed list.
  * name `string`: Name of the closed list feature.
  * subLists `array`: Sublists for the feature.
    * items [WordListObject](#wordlistobject)

### ClosedListModelPatchObject
* ClosedListModelPatchObject `object`: Object model for adding a batch of sublists to an existing closedlist.
  * subLists `array`: Sublists to add.
    * items [WordListObject](#wordlistobject)

### ClosedListModelUpdateObject
* ClosedListModelUpdateObject `object`: Object model for updating a closed list.
  * name `string`: The new name of the closed list feature.
  * subLists `array`: The new sublists for the feature.
    * items [WordListObject](#wordlistobject)

### CollaboratorsArray
* CollaboratorsArray `object`
  * emails `array`: The email address of the users.
    * items `string`

### CompositeEntityExtractor
* CompositeEntityExtractor `object`: A Composite Entity Extractor.
  * children `array`: List of child entities.
    * items [ChildEntity](#childentity)
  * id **required** `string`: The ID of the Entity Model.
  * name `string`: Name of the Entity Model.
  * readableType **required** [ReadableType](#readabletype)
  * typeId `integer`: The type ID of the Entity Model.

### CompositeEntityExtractorsList
* CompositeEntityExtractorsList `array`: List of Composite Entity Extractors.
  * items [CompositeEntityExtractor](#compositeentityextractor)

### CompositeEntityModel
* CompositeEntityModel `object`: A composite entity.
  * children `array`: Child entities.
    * items `string`
  * name `string`: Entity name.

### CustomPrebuiltModel
* CustomPrebuiltModel: A Custom Prebuilt model.
  * id **required** `string`: The ID of the Entity Model.
  * name `string`: Name of the Entity Model.
  * readableType **required** [ReadableType](#readabletype)
  * typeId `integer`: The type ID of the Entity Model.
  * customPrebuiltDomainName `string`: The domain name.
  * customPrebuiltModelName `string`: The intent name or entity name.
  * id **required** `string`: The ID of the Entity Model.
  * name `string`: Name of the Entity Model.
  * readableType **required** [ReadableType](#readabletype)
  * typeId `integer`: The type ID of the Entity Model.
  * customPrebuiltDomainName `string`: The domain name.
  * customPrebuiltModelName `string`: The intent name or entity name.
  * id **required** `string`: The ID of the Entity Model.
  * name `string`: Name of the Entity Model.
  * readableType **required** [ReadableType](#readabletype)
  * typeId `integer`: The type ID of the Entity Model.

### CustomPrebuiltModelList
* CustomPrebuiltModelList `array`: A List of Custom Prebuilt models.
  * items [CustomPrebuiltModel](#customprebuiltmodel)

### EndpointInfo
* EndpointInfo `object`: The base class "ProductionOrStagingEndpointInfo" inherits from.
  * assignedEndpointKey `string`: The endpoint key.
  * endpointRegion `string`: The endpoint's region.
  * endpointUrl `string`: The Runtime endpoint URL for this model version.
  * isStaging `boolean`: Indicates if the staging slot should be used, instead of the Production one.
  * publishedDateTime `string`: Timestamp when was last published.
  * region `string`: The target region that the application is published to.
  * versionId `string`: The version ID to publish.

### EndpointKeys
* EndpointKeys `array`: An a array of GUIDs, comprised of Azure Endpoint Keys and the Programmatic API key.
  * items `string`

### EnqueueTrainingResponse
* EnqueueTrainingResponse `object`: Response model when requesting to train the model.
  * status [TrainingStatus](#trainingstatus)
  * statusId `integer`: The train request status ID.

### EntitiesSuggestionExample
* EntitiesSuggestionExample `object`: Predicted/suggested entity.
  * entityPredictions `array`: Predicted/suggested entities.
    * items [EntityPrediction](#entityprediction)
  * intentPredictions `array`: Predicted/suggested intents.
    * items [IntentPrediction](#intentprediction)
  * text `string`: The utterance. E.g.: what's the weather like in seattle?
  * tokenizedText `array`: The utterance tokenized.
    * items `string`

### EntitiesSuggestionExamples
* EntitiesSuggestionExamples `array`: List of predicted/suggested entities.
  * items [EntitiesSuggestionExample](#entitiessuggestionexample)

### EntityExtractor
* EntityExtractor `object`: Entity Extractor.
  * customPrebuiltDomainName `string`: The domain name.
  * customPrebuiltModelName `string`: The intent name or entity name.
  * id **required** `string`: The ID of the Entity Model.
  * name `string`: Name of the Entity Model.
  * readableType **required** [ReadableType](#readabletype)
  * typeId `integer`: The type ID of the Entity Model.

### EntityExtractorsList
* EntityExtractorsList `array`: List of Entity Extractors.
  * items [EntityExtractor](#entityextractor)

### EntityLabel
* EntityLabel `object`: Defines the entity type and position of the extracted entity within the example.
  * endTokenIndex **required** `integer`: The index within the utterance where the extracted entity ends.
  * entityName **required** `string`: The entity type.
  * startTokenIndex **required** `integer`: The index within the utterance where the extracted entity starts.

### EntityLabelObject
* EntityLabelObject `object`: Defines the entity type and position of the extracted entity within the example.
  * endCharIndex **required** `integer`: The index within the utterance where the extracted entity ends.
  * entityName **required** `string`: The entity type.
  * startCharIndex **required** `integer`: The index within the utterance where the extracted entity starts.

### EntityPrediction
* EntityPrediction `object`: A suggested entity.
  * endTokenIndex **required** `integer`: The index within the utterance where the extracted entity ends.
  * entityName **required** `string`: The entity's name
  * phrase **required** `string`: The actual token(s) that comprise the entity.
  * startTokenIndex **required** `integer`: The index within the utterance where the extracted entity starts.

### ErrorResponse
* ErrorResponse `object`: Error response when invoking an operation on the API.
  * errorType `string`

### ExampleLabelObject
* ExampleLabelObject `object`: A labeled example.
  * entityLabels `array`: The idenfied entities within the utterance.
    * items [EntityLabelObject](#entitylabelobject)
  * intentName `string`: The idenfitied intent representing the utterance.
  * text `string`: The sample's utterance.

### ExampleLabelObjectArray
* ExampleLabelObjectArray `array`: Object model for adding a batch of labeled examples.
  * items [ExampleLabelObject](#examplelabelobject)

### FeatureIDResponse
* FeatureIDResponse `integer`: The ID of the created feature.

### FeatureInfoObject
* FeatureInfoObject `object`: The base class Features-related response objects inherit from.
  * id `integer`: A six-digit ID used for Features.
  * isActive `boolean`: Indicates if the feature is enabled.
  * name `string`: The name of the Feature.

### FeaturesResponseObject
* FeaturesResponseObject `object`: Model Features, including Patterns and Phraselists.
  * patternFeatures [PatternFeatureInfoList](#patternfeatureinfolist)
  * phraselistFeatures [PhraseListFeatureInfoList](#phraselistfeatureinfolist)

### GuidList
* GuidList `array`: List of IDs (GUID)
  * items [GuidResponse](#guidresponse)

### GuidResponse
* GuidResponse `string`: The ID (GUID) returned by an operation.

### HierarchicalChildEntity
* HierarchicalChildEntity `object`: A Hierarchical Child Entity.
  * readableType [ReadableType](#readabletype)
  * typeId `integer`: The type ID of the Entity Model.
  * id **required** `string`: The ID (GUID) belonging to a child entity.
  * name `string`: The name of a child entity.

### HierarchicalEntityExtractor
* HierarchicalEntityExtractor `object`: Hierarchical Entity Extractor.
  * children `array`: List of child entities.
    * items [ChildEntity](#childentity)
  * id **required** `string`: The ID of the Entity Model.
  * name `string`: Name of the Entity Model.
  * readableType **required** [ReadableType](#readabletype)
  * typeId `integer`: The type ID of the Entity Model.

### HierarchicalEntityExtractorsList
* HierarchicalEntityExtractorsList `array`: List of Hierarchical Entity Extractors.
  * items [HierarchicalEntityExtractor](#hierarchicalentityextractor)

### HierarchicalEntityModel
* HierarchicalEntityModel `object`: A Hierarchical Entity Extractor.
  * children `array`: Child entities.
    * items `string`
  * name `string`: Entity name.

### HierarchicalModel
* HierarchicalModel `object`
  * children `array`
    * items `string`
  * name `string`

### IntentClassifier
* IntentClassifier `object`: Intent Classifier.
  * customPrebuiltDomainName `string`: The domain name.
  * customPrebuiltModelName `string`: The intent name or entity name.
  * id **required** `string`: The ID of the Entity Model.
  * name `string`: Name of the Entity Model.
  * readableType **required** [ReadableType](#readabletype)
  * typeId `integer`: The type ID of the Entity Model.

### IntentClassifiersList
* IntentClassifiersList `array`: List of Intent Classifiers.
  * items [IntentClassifier](#intentclassifier)

### IntentPrediction
* IntentPrediction `object`: A suggested intent.
  * name `string`: The intent's name
  * score `number`: The intent's score, based on the prediction model.

### IntentsSuggestionExample
* IntentsSuggestionExample `object`: Predicted/suggested intent.
  * entityPredictions `array`: Predicted/suggested entities.
    * items [EntityPrediction](#entityprediction)
  * intentPredictions `array`: Predicted/suggested intents.
    * items [IntentPrediction](#intentprediction)
  * text `string`: The utterance. E.g.: what's the weather like in seattle?
  * tokenizedText `array`: The utterance tokenized.
    * items `string`

### IntentsSuggestionExamples
* IntentsSuggestionExamples `array`: List of predicted/suggested intents.
  * items [IntentsSuggestionExample](#intentssuggestionexample)

### JSONEntity
* JSONEntity `object`: Exported Model - Extracted Entity from utterance.
  * endPos **required** `integer`: The index within the utterance where the extracted entity ends.
  * entity **required** `string`: The entity name.
  * startPos **required** `integer`: The index within the utterance where the extracted entity starts.

### JSONModelFeature
* JSONModelFeature `object`: Exported Model - Phraselist Model Feature.
  * activated `boolean`: Indicates if the feature is enabled.
  * mode `boolean`: An exchangeable phrase list feature are serves as single feature to the LUIS underlying training algorithm. It is used as a lexicon lookup feature where its value is 1 if the lexicon contains a given word or 0 if it doesn’t. Think of an exchangeable as a synonyms list. A non-exchangeable phrase list feature has all the phrases in the list serve as separate features to the underlying training algorithm. So, if you your phrase list feature contains 5 phrases, they will be mapped to 5 separate features. You can think of the non-exchangeable phrase list feature as an additional bag of words that you are willing to add to LUIS existing vocabulary features. Think of a non-exchangeable as set of different words. Default value is true.
  * name `string`: The Phraselist name.
  * words `string`: List of comma-separated phrases that represent the Phraselist.

### JSONRegexFeature
* JSONRegexFeature `object`: Exported Model - A Pattern feature.
  * activated `boolean`: Indicates if the Pattern feature is enabled.
  * name `string`: Name of the feature.
  * pattern `string`: The Regular Expression to match.

### JSONUtterance
* JSONUtterance `object`: Exported Model - Utterance that was used to train the model.
  * entities `array`: The matched entities.
    * items [JSONEntity](#jsonentity)
  * intent `string`: The matched intent.
  * text `string`: The utterance.

### LabelExampleResponse
* LabelExampleResponse `object`: Response when adding a labeled example.
  * ExampleId `integer`: The newly created sample ID.
  * UtteranceText `string`: The sample's utterance.

### LabeledUtterance
* LabeledUtterance `object`: A prediction and label pair of an example.
  * entityLabels `array`: The entities matching the example.
    * items [EntityLabel](#entitylabel)
  * entityPredictions `array`: List of suggested entities.
    * items [EntityPrediction](#entityprediction)
  * id `integer`: ID of Labeled Utterance.
  * intentLabel `string`: The intent matching the example.
  * intentPredictions `array`: List of suggested intents.
    * items [IntentPrediction](#intentprediction)
  * text `string`: The utterance. E.g.: what's the weather like in seattle?
  * tokenizedText `array`: The utterance tokenized.
    * items `string`

### LabeledUtterances
* LabeledUtterances `array`: A list of predictions and label pairs for every example in the application.
  * items [LabeledUtterance](#labeledutterance)

### LuisApp
* LuisApp `object`: Exported Model - An exported LUIS Application.
  * bing_entities `array`: List of prebuilt intents.
    * items `string`
  * closedLists `array`: List of closed lists.
    * items [ClosedList](#closedlist)
  * composites `array`: List of composite entities.
    * items [HierarchicalModel](#hierarchicalmodel)
  * culture `string`: The culture of the application. E.g.: en-us.
  * desc `string`: The description of the application.
  * entities `array`: List of entities.
    * items [HierarchicalModel](#hierarchicalmodel)
  * intents `array`: List of intents.
    * items [HierarchicalModel](#hierarchicalmodel)
  * model_features `array`: List of model features.
    * items [JSONModelFeature](#jsonmodelfeature)
  * name `string`: The name of the application.
  * regex_features `array`: List of pattern features.
    * items [JSONRegexFeature](#jsonregexfeature)
  * utterances `array`: List of sample utterances.
    * items [JSONUtterance](#jsonutterance)
  * versionId `string`: The version ID of the application that was exported.

### ModelCreateObject
* ModelCreateObject `object`: Object model for creating a new entity extractor.
  * name `string`: Name of the new entity extractor.

### ModelInfo
* ModelInfo `object`: Base type used in entity types.
  * id **required** `string`: The ID of the Entity Model.
  * name `string`: Name of the Entity Model.
  * readableType **required** [ReadableType](#readabletype)
  * typeId `integer`: The type ID of the Entity Model.

### ModelInfoResponse
* ModelInfoResponse `object`: An application model info.
  * id **required** `string`: The ID of the Entity Model.
  * name `string`: Name of the Entity Model.
  * readableType **required** [ReadableType](#readabletype)
  * typeId `integer`: The type ID of the Entity Model.
  * children `array`: List of child entities.
    * items [ChildEntity](#childentity)
  * id **required** `string`: The ID of the Entity Model.
  * name `string`: Name of the Entity Model.
  * readableType **required** [ReadableType](#readabletype)
  * typeId `integer`: The type ID of the Entity Model.
  * children `array`: List of child entities.
    * items [ChildEntity](#childentity)
  * id **required** `string`: The ID of the Entity Model.
  * name `string`: Name of the Entity Model.
  * readableType **required** [ReadableType](#readabletype)
  * typeId `integer`: The type ID of the Entity Model.
  * subLists `array`: List of sub-lists.
    * items [SubClosedListResponse](#subclosedlistresponse)
  * id **required** `string`: The ID of the Entity Model.
  * name `string`: Name of the Entity Model.
  * readableType **required** [ReadableType](#readabletype)
  * typeId `integer`: The type ID of the Entity Model.
  * customPrebuiltDomainName `string`: The domain name.
  * customPrebuiltModelName `string`: The intent name or entity name.
  * id **required** `string`: The ID of the Entity Model.
  * name `string`: Name of the Entity Model.
  * readableType **required** [ReadableType](#readabletype)
  * typeId `integer`: The type ID of the Entity Model.
  * customPrebuiltDomainName `string`: The domain name.
  * customPrebuiltModelName `string`: The intent name or entity name.
  * id **required** `string`: The ID of the Entity Model.
  * name `string`: Name of the Entity Model.
  * readableType **required** [ReadableType](#readabletype)
  * typeId `integer`: The type ID of the Entity Model.

### ModelTrainingDetails
* ModelTrainingDetails `object`: Model Training Details.
  * exampleCount `integer`: The count of examples used to train the model.
  * failureReason `string`: Reason for the training failure.
  * status [TrainingStatus](#trainingstatus)
  * statusId `integer`: The train request status ID.
  * trainingDateTime `string`: When the model was trained.

### ModelTrainingInfo
* ModelTrainingInfo `object`: Model Training Info.
  * details [ModelTrainingDetails](#modeltrainingdetails)
  * modelId `string`: The ID (GUID) of the model.

### ModelTrainingInfoList
* ModelTrainingInfoList `array`: List of Model Training Infos.
  * items [ModelTrainingInfo](#modeltraininginfo)

### ModelUpdateObject
* ModelUpdateObject `object`: Object model for updating an intent classifier.
  * name `string`: The entity's new name.

### ModelsInfoResponseObject
* ModelsInfoResponseObject `array`: A list of application model infos.
  * items [ModelInfoResponse](#modelinforesponse)

### OperationError
* OperationError `object`: Operation error details when invoking an operation on the API.
  * code `string`
  * message `string`

### OperationStatus
* OperationStatus `object`: Response of an Operation status.
  * code `string` (values: Failed, FAILED, Success): Status Code.
  * message `string`: Status details.

### PatternCreateObject
* PatternCreateObject `object`: Object model for creating a Pattern feature.
  * name `string`: Name of the feature.
  * pattern `string`: The Regular Expression to match.

### PatternFeatureInfo
* PatternFeatureInfo `object`: Pattern feature.
  * pattern `string`: The Regular Expression to match.
  * id `integer`: A six-digit ID used for Features.
  * isActive `boolean`: Indicates if the feature is enabled.
  * name `string`: The name of the Feature.

### PatternFeatureInfoList
* PatternFeatureInfoList `array`: List of Pattern features.
  * items [PatternFeatureInfo](#patternfeatureinfo)

### PatternUpdateObject
* PatternUpdateObject `object`: Object model for updating an existing Pattern feature.
  * isActive `boolean`: Indicates if the Pattern feature is enabled.
  * name `string`: Name of the feature.
  * pattern `string`: The Regular Expression to match.

### PersonalAssistantUrls
* PersonalAssistantUrls `object`: Endpoint URLs for prebuilt Cortana applications.

### PersonalAssistantsResponse
* PersonalAssistantsResponse `object`: Response containing user's endpoint keys and the endpoint URLs of the prebuilt Cortana applications.
  * endpointKeys [EndpointKeys](#endpointkeys)
  * endpointUrls [PersonalAssistantUrls](#personalassistanturls)

### PhraseListFeatureInfo
* PhraseListFeatureInfo `object`: Phraselist Feature.
  * isExchangeable `boolean`: An exchangeable phrase list feature are serves as single feature to the LUIS underlying training algorithm. It is used as a lexicon lookup feature where its value is 1 if the lexicon contains a given word or 0 if it doesn’t. Think of an exchangeable as a synonyms list. A non-exchangeable phrase list feature has all the phrases in the list serve as separate features to the underlying training algorithm. So, if you your phrase list feature contains 5 phrases, they will be mapped to 5 separate features. You can think of the non-exchangeable phrase list feature as an additional bag of words that you are willing to add to LUIS existing vocabulary features. Think of a non-exchangeable as set of different words. Default value is true.
  * phrases `string`: A list of comma-separated values.
  * id `integer`: A six-digit ID used for Features.
  * isActive `boolean`: Indicates if the feature is enabled.
  * name `string`: The name of the Feature.

### PhraseListFeatureInfoList
* PhraseListFeatureInfoList `array`: List of Phraselist Features.
  * items [PhraseListFeatureInfo](#phraselistfeatureinfo)

### PhraselistCreateObject
* PhraselistCreateObject `object`: Object model for creating a phraselist model.
  * isExchangeable `boolean`: An exchangeable phrase list feature are serves as single feature to the LUIS underlying training algorithm. It is used as a lexicon lookup feature where its value is 1 if the lexicon contains a given word or 0 if it doesn’t. Think of an exchangeable as a synonyms list. A non-exchangeable phrase list feature has all the phrases in the list serve as separate features to the underlying training algorithm. So, if you your phrase list feature contains 5 phrases, they will be mapped to 5 separate features. You can think of the non-exchangeable phrase list feature as an additional bag of words that you are willing to add to LUIS existing vocabulary features. Think of a non-exchangeable as set of different words. Default value is true.
  * name `string`: The Phraselist name.
  * phrases `string`: List of comma-separated phrases that represent the Phraselist.

### PhraselistUpdateObject
* PhraselistUpdateObject `object`: Object model for updating a Phraselist.
  * isActive `boolean`: Indicates if the Phraselist is enabled.
  * isExchangeable `boolean`: An exchangeable phrase list feature are serves as single feature to the LUIS underlying training algorithm. It is used as a lexicon lookup feature where its value is 1 if the lexicon contains a given word or 0 if it doesn’t. Think of an exchangeable as a synonyms list. A non-exchangeable phrase list feature has all the phrases in the list serve as separate features to the underlying training algorithm. So, if you your phrase list feature contains 5 phrases, they will be mapped to 5 separate features. You can think of the non-exchangeable phrase list feature as an additional bag of words that you are willing to add to LUIS existing vocabulary features. Think of a non-exchangeable as set of different words. Default value is true.
  * name `string`: The Phraselist name.
  * phrases `string`: List of comma-separated phrases that represent the Phraselist.

### PrebuiltDomain
* PrebuiltDomain `object`: Prebuilt Domain.
  * culture `string`
  * description `string`
  * entities `array`
    * items [PrebuiltDomainItem](#prebuiltdomainitem)
  * examples `string`
  * intents `array`
    * items [PrebuiltDomainItem](#prebuiltdomainitem)
  * name `string`

### PrebuiltDomainCreateBaseObject
* PrebuiltDomainCreateBaseObject `object`: A model object containing the name of the custom prebuilt entity and the name of the domain to which this model belongs.
  * domainName `string`: The domain name.

### PrebuiltDomainCreateObject
* PrebuiltDomainCreateObject `object`: A prebuilt domain create object containing the name and culture of the domain.
  * culture `string`: The culture of the new domain.
  * domainName `string`: The domain name.

### PrebuiltDomainItem
* PrebuiltDomainItem `object`
  * description `string`
  * examples `string`
  * name `string`

### PrebuiltDomainModelCreateObject
* PrebuiltDomainModelCreateObject `object`: A model object containing the name of the custom prebuilt intent or entity and the name of the domain to which this model belongs.
  * domainName `string`: The domain name.
  * modelName `string`: The intent name or entity name.

### PrebuiltDomainsList
* PrebuiltDomainsList `array`: List of Prebuilt Domains.
  * items [PrebuiltDomain](#prebuiltdomain)

### PrebuiltEntityExtractor
* PrebuiltEntityExtractor `object`: Prebuilt Entity Extractor.
  * id **required** `string`: The ID of the Entity Model.
  * name `string`: Name of the Entity Model.
  * readableType **required** [ReadableType](#readabletype)
  * typeId `integer`: The type ID of the Entity Model.

### PrebuiltEntityExtractorsList
* PrebuiltEntityExtractorsList `array`: List of Prebuilt Entity Extractors.
  * items [PrebuiltEntityExtractor](#prebuiltentityextractor)

### PrebuiltExtractorNames
* PrebuiltExtractorNames `array`: Objet model for adding a prebuilt entity to the application.
  * items `string`

### ProductionOrStagingEndpointInfo
* ProductionOrStagingEndpointInfo `object`
  * assignedEndpointKey `string`: The endpoint key.
  * endpointRegion `string`: The endpoint's region.
  * endpointUrl `string`: The Runtime endpoint URL for this model version.
  * isStaging `boolean`: Indicates if the staging slot should be used, instead of the Production one.
  * publishedDateTime `string`: Timestamp when was last published.
  * region `string`: The target region that the application is published to.
  * versionId `string`: The version ID to publish.

### ReadableType
* ReadableType `string` (values: Entity Extractor, Hierarchical Entity Extractor, Hierarchical Child Entity Extractor, Composite Entity Extractor, Closed List Entity Extractor, Prebuilt Entity Extractor, Intent Classifier): Full name of the entity type.

### SubClosedList
* SubClosedList `object`: Sublist of items for a Closed list.
  * canonicalForm `string`: The standard form that the list represents.
  * list `array`: List of synonym words.
    * items `string`

### SubClosedListResponse
* SubClosedListResponse `object`: Sublist of items for a Closed list.
  * id `integer`: The sublist ID
  * canonicalForm `string`: The standard form that the list represents.
  * list `array`: List of synonym words.
    * items `string`

### TaskUpdateObject
* TaskUpdateObject `object`: Object model for cloning an application's version.
  * version `string`: The new version for the cloned model.

### TrainingStatus
* TrainingStatus `string` (values: Queued, InProgress, UpToDate, Fail, Success): The Trainning status.

### UserAccessList
* UserAccessList `object`: List of user permissions.
  * emails `array`
    * items `string`
  * owner `string`: The email address of owner of the application.

### UserCollaborator
* UserCollaborator `object`
  * email `string`: The email address of the user.

### VersionInfo
* VersionInfo `object`: Object model of an application version.
  * assignedEndpointKey `object`: The endpoint key.
  * createdDateTime `string`: The version's creation timestamp.
  * endpointHitsCount `integer`: Number of calls made to this endpoint.
  * endpointUrl `string`: The Runtime endpoint URL for this model version.
  * entitiesCount `integer`: Number of entities in this model.
  * externalApiKeys `object`: External keys.
  * intentsCount `integer`: Number of intents in this model.
  * lastModifiedDateTime `string`: Timestamp of the last update.
  * lastPublishedDateTime `string`: Timestamp when was last published.
  * lastTrainedDateTime `string`: Timestamp of the last time the model was trained.
  * trainingStatus **required** `string` (values: NeedsTraining, InProgress, Trained): The current training status.
  * version **required** `string`: The version ID. E.g.: "0.1"

### VersionResponse
* VersionResponse `string`: The new version ID returned by when importing a model version.

### WordListBaseUpdateObject
* WordListBaseUpdateObject `object`: Object model for updating one of the closed list's sublists.
  * canonicalForm `string`: The standard form that the list represents.
  * list `array`: List of synonym words.
    * items `string`

### WordListObject
* WordListObject `object`: Sublist of items for a Closed list.
  * canonicalForm `string`: The standard form that the list represents.
  * list `array`: List of synonym words.
    * items `string`


