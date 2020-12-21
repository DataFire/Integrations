# @datafire/azure_cognitiveservices_luis_authoring

Client library for LUIS Authoring Client

## Installation and Usage
```bash
npm install --save @datafire/azure_cognitiveservices_luis_authoring
```
```js
let azure_cognitiveservices_luis_authoring = require('@datafire/azure_cognitiveservices_luis_authoring').create({
  apiKeyHeader: ""
});

.then(data => {
  console.log(data);
});
```

## Description



## Actions

### Apps_List
Lists all of the user's applications.


```js
azure_cognitiveservices_luis_authoring.Apps_List({}, context)
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
azure_cognitiveservices_luis_authoring.Apps_Add({
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
azure_cognitiveservices_luis_authoring.Apps_ListCortanaEndpoints(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [PersonalAssistantsResponse](#personalassistantsresponse)

### Apps_ListSupportedCultures
Gets a list of supported cultures. Cultures are equivalent to the written language and locale. For example,"en-us" represents the U.S. variation of English.


```js
azure_cognitiveservices_luis_authoring.Apps_ListSupportedCultures(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [AvailableCultures](#availablecultures)

### Apps_ListAvailableCustomPrebuiltDomains
Gets all the available custom prebuilt domains for all cultures.


```js
azure_cognitiveservices_luis_authoring.Apps_ListAvailableCustomPrebuiltDomains(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [PrebuiltDomainsList](#prebuiltdomainslist)

### Apps_AddCustomPrebuiltDomain
Adds a prebuilt domain along with its intent and entity models as a new application.


```js
azure_cognitiveservices_luis_authoring.Apps_AddCustomPrebuiltDomain({
  "prebuiltDomainCreateObject": {}
}, context)
```

#### Input
* input `object`
  * prebuiltDomainCreateObject **required** [PrebuiltDomainCreateObject](#prebuiltdomaincreateobject)

#### Output
* output [GuidResponse](#guidresponse)

### Apps_ListAvailableCustomPrebuiltDomainsForCulture
Gets all the available prebuilt domains for a specific culture.


```js
azure_cognitiveservices_luis_authoring.Apps_ListAvailableCustomPrebuiltDomainsForCulture({
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
azure_cognitiveservices_luis_authoring.Apps_ListDomains(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [AvailableDomains](#availabledomains)

### Apps_Import
Imports an application to LUIS, the application's structure is included in the request body.


```js
azure_cognitiveservices_luis_authoring.Apps_Import({
  "luisApp": {}
}, context)
```

#### Input
* input `object`
  * appName `string`: The application name to create. If not specified, the application name will be read from the imported object. If the application name already exists, an error is returned.
  * luisApp **required** [LuisApp](#luisapp)

#### Output
* output [GuidResponse](#guidresponse)

### Apps_ListUsageScenarios
Gets the application available usage scenarios.


```js
azure_cognitiveservices_luis_authoring.Apps_ListUsageScenarios(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [ApplicationUsageScenarios](#applicationusagescenarios)

### Apps_Delete
Deletes an application.


```js
azure_cognitiveservices_luis_authoring.Apps_Delete({
  "appId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * force `boolean`: A flag to indicate whether to force an operation.

#### Output
* output [OperationStatus](#operationstatus)

### Apps_Get
Gets the application info.


```js
azure_cognitiveservices_luis_authoring.Apps_Get({
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
azure_cognitiveservices_luis_authoring.Apps_Update({
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

### AzureAccounts_RemoveFromApp
Removes assigned Azure account from the application.


```js
azure_cognitiveservices_luis_authoring.AzureAccounts_RemoveFromApp({
  "appId": "",
  "Authorization": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * Authorization **required** `string`: The bearer authorization header to use; containing the user's ARM token used to validate Azure accounts information.
  * azureAccountInfoObject [AzureAccountInfoObject](#azureaccountinfoobject)

#### Output
* output [OperationStatus](#operationstatus)

### AzureAccounts_GetAssigned
Gets the LUIS Azure accounts assigned to the application for the user using his ARM token.


```js
azure_cognitiveservices_luis_authoring.AzureAccounts_GetAssigned({
  "appId": "",
  "Authorization": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * Authorization **required** `string`: The bearer authorization header to use; containing the user's ARM token used to validate Azure accounts information.

#### Output
* output [AzureAccountInfoList](#azureaccountinfolist)

### AzureAccounts_AssignToApp
Assigns an Azure account to the application.


```js
azure_cognitiveservices_luis_authoring.AzureAccounts_AssignToApp({
  "appId": "",
  "Authorization": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * Authorization **required** `string`: The bearer authorization header to use; containing the user's ARM token used to validate Azure accounts information.
  * azureAccountInfoObject [AzureAccountInfoObject](#azureaccountinfoobject)

#### Output
* output [OperationStatus](#operationstatus)

### Apps_ListEndpoints
Returns the available endpoint deployment regions and URLs.


```js
azure_cognitiveservices_luis_authoring.Apps_ListEndpoints({
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
azure_cognitiveservices_luis_authoring.Permissions_Delete({
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
azure_cognitiveservices_luis_authoring.Permissions_List({
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
azure_cognitiveservices_luis_authoring.Permissions_Add({
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
Replaces the current user access list with the new list sent in the body. If an empty list is sent, all access to other users will be removed.


```js
azure_cognitiveservices_luis_authoring.Permissions_Update({
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
azure_cognitiveservices_luis_authoring.Apps_Publish({
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

### Apps_GetPublishSettings
Get the application publish settings including 'UseAllTrainingData'.


```js
azure_cognitiveservices_luis_authoring.Apps_GetPublishSettings({
  "appId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.

#### Output
* output [PublishSettings](#publishsettings)

### Apps_UpdatePublishSettings
Updates the application publish settings including 'UseAllTrainingData'.


```js
azure_cognitiveservices_luis_authoring.Apps_UpdatePublishSettings({
  "appId": "",
  "publishSettingUpdateObject": {}
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * publishSettingUpdateObject **required** [PublishSettingUpdateObject](#publishsettingupdateobject)

#### Output
* output [OperationStatus](#operationstatus)

### Apps_DownloadQueryLogs
Gets the logs of the past month's endpoint queries for the application.


```js
azure_cognitiveservices_luis_authoring.Apps_DownloadQueryLogs({
  "appId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.

#### Output
* output `object`: The query logs of an application for the past month in CSV format.

### Apps_GetSettings
Get the application settings including 'UseAllTrainingData'.


```js
azure_cognitiveservices_luis_authoring.Apps_GetSettings({
  "appId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.

#### Output
* output [ApplicationSettings](#applicationsettings)

### Apps_UpdateSettings
Updates the application settings including 'UseAllTrainingData'.


```js
azure_cognitiveservices_luis_authoring.Apps_UpdateSettings({
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
Gets a list of versions for this application ID.


```js
azure_cognitiveservices_luis_authoring.Versions_List({
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
azure_cognitiveservices_luis_authoring.Versions_Import({
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
azure_cognitiveservices_luis_authoring.Versions_Delete({
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
Gets the version information such as date created, last modified date, endpoint URL, count of intents and entities, training and publishing status.


```js
azure_cognitiveservices_luis_authoring.Versions_Get({
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
azure_cognitiveservices_luis_authoring.Versions_Update({
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
Creates a new version from the selected version.


```js
azure_cognitiveservices_luis_authoring.Versions_Clone({
  "appId": "",
  "versionId": "",
  "versionCloneObject": {}
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * versionCloneObject **required** [TaskUpdateObject](#taskupdateobject)

#### Output
* output `string`

### Model_ListClosedLists
Gets information about all the list entity models in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_ListClosedLists({
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
Adds a list entity model to a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_AddClosedList({
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
Deletes a list entity model from a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_DeleteClosedList({
  "appId": "",
  "versionId": "",
  "clEntityId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * clEntityId **required** `string`: The list entity model ID.

#### Output
* output [OperationStatus](#operationstatus)

### Model_GetClosedList
Gets information about a list entity in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_GetClosedList({
  "appId": "",
  "versionId": "",
  "clEntityId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * clEntityId **required** `string`: The list model ID.

#### Output
* output [ClosedListEntityExtractor](#closedlistentityextractor)

### Model_PatchClosedList
Adds a batch of sublists to an existing list entity in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_PatchClosedList({
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
  * clEntityId **required** `string`: The list entity model ID.
  * closedListModelPatchObject **required** [ClosedListModelPatchObject](#closedlistmodelpatchobject)

#### Output
* output [OperationStatus](#operationstatus)

### Model_UpdateClosedList
Updates the list entity in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_UpdateClosedList({
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
  * clEntityId **required** `string`: The list model ID.
  * closedListModelUpdateObject **required** [ClosedListModelUpdateObject](#closedlistmodelupdateobject)

#### Output
* output [OperationStatus](#operationstatus)

### Model_AddSubList
Adds a sublist to an existing list entity in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_AddSubList({
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
  * clEntityId **required** `string`: The list entity extractor ID.
  * wordListCreateObject **required** [WordListObject](#wordlistobject)

#### Output
* output `integer`

### Model_DeleteSubList
Deletes a sublist of a specific list entity model from a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_DeleteSubList({
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
  * clEntityId **required** `string`: The list entity extractor ID.
  * subListId **required** `integer`: The sublist ID.

#### Output
* output [OperationStatus](#operationstatus)

### Model_UpdateSubList
Updates one of the list entity's sublists in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_UpdateSubList({
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
  * clEntityId **required** `string`: The list entity extractor ID.
  * subListId **required** `integer`: The sublist ID.
  * wordListBaseUpdateObject **required** [WordListBaseUpdateObject](#wordlistbaseupdateobject)

#### Output
* output [OperationStatus](#operationstatus)

### Model_ListClosedListEntityRoles
Get all roles for a list entity in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_ListClosedListEntityRoles({
  "appId": "",
  "versionId": "",
  "entityId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * entityId **required** `string`: entity Id

#### Output
* output [EntityRoleList](#entityrolelist)

### Model_CreateClosedListEntityRole
Create a role for a list entity in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_CreateClosedListEntityRole({
  "appId": "",
  "versionId": "",
  "entityId": "",
  "entityRoleCreateObject": {}
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * entityId **required** `string`: The entity model ID.
  * entityRoleCreateObject **required** [EntityRoleCreateObject](#entityrolecreateobject)

#### Output
* output [GuidResponse](#guidresponse)

### Model_DeleteClosedListEntityRole
Delete a role for a given list entity in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_DeleteClosedListEntityRole({
  "appId": "",
  "versionId": "",
  "entityId": "",
  "roleId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * entityId **required** `string`: The entity ID.
  * roleId **required** `string`: The entity role Id.

#### Output
* output [OperationStatus](#operationstatus)

### Model_GetClosedListEntityRole
Get one role for a given list entity in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_GetClosedListEntityRole({
  "appId": "",
  "versionId": "",
  "entityId": "",
  "roleId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * entityId **required** `string`: entity ID.
  * roleId **required** `string`: entity role ID.

#### Output
* output [EntityRole](#entityrole)

### Model_UpdateClosedListEntityRole
Update a role for a given list entity in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_UpdateClosedListEntityRole({
  "appId": "",
  "versionId": "",
  "entityId": "",
  "roleId": "",
  "entityRoleUpdateObject": {}
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * entityId **required** `string`: The entity ID.
  * roleId **required** `string`: The entity role ID.
  * entityRoleUpdateObject **required** [EntityRoleUpdateObject](#entityroleupdateobject)

#### Output
* output [OperationStatus](#operationstatus)

### Model_ListCompositeEntities
Gets information about all the composite entity models in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_ListCompositeEntities({
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

### Model_DeleteCompositeEntity
Deletes a composite entity from a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_DeleteCompositeEntity({
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
Gets information about a composite entity in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_GetCompositeEntity({
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
Updates a composite entity in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_UpdateCompositeEntity({
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
Creates a single child in an existing composite entity model in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_AddCompositeEntityChild({
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
Deletes a composite entity extractor child from a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_DeleteCompositeEntityChild({
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

### Model_ListCompositeEntityRoles
Get all roles for a composite entity in a version of the application


```js
azure_cognitiveservices_luis_authoring.Model_ListCompositeEntityRoles({
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
* output [EntityRoleList](#entityrolelist)

### Model_CreateCompositeEntityRole
Create a role for a composite entity in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_CreateCompositeEntityRole({
  "appId": "",
  "versionId": "",
  "cEntityId": "",
  "entityRoleCreateObject": {}
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * cEntityId **required** `string`: The composite entity extractor ID.
  * entityRoleCreateObject **required** [EntityRoleCreateObject](#entityrolecreateobject)

#### Output
* output [GuidResponse](#guidresponse)

### Model_DeleteCompositeEntityRole
Delete a role for a given composite entity in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_DeleteCompositeEntityRole({
  "appId": "",
  "versionId": "",
  "cEntityId": "",
  "roleId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * cEntityId **required** `string`: The composite entity extractor ID.
  * roleId **required** `string`: The entity role Id.

#### Output
* output [OperationStatus](#operationstatus)

### Model_GetCompositeEntityRole
Get one role for a given composite entity in a version of the application


```js
azure_cognitiveservices_luis_authoring.Model_GetCompositeEntityRole({
  "appId": "",
  "versionId": "",
  "cEntityId": "",
  "roleId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * cEntityId **required** `string`: The composite entity extractor ID.
  * roleId **required** `string`: entity role ID.

#### Output
* output [EntityRole](#entityrole)

### Model_UpdateCompositeEntityRole
Update a role for a given composite entity in a version of the application


```js
azure_cognitiveservices_luis_authoring.Model_UpdateCompositeEntityRole({
  "appId": "",
  "versionId": "",
  "cEntityId": "",
  "roleId": "",
  "entityRoleUpdateObject": {}
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * cEntityId **required** `string`: The composite entity extractor ID.
  * roleId **required** `string`: The entity role ID.
  * entityRoleUpdateObject **required** [EntityRoleUpdateObject](#entityroleupdateobject)

#### Output
* output [OperationStatus](#operationstatus)

### Model_AddCustomPrebuiltDomain
Adds a customizable prebuilt domain along with all of its intent and entity models in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_AddCustomPrebuiltDomain({
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
Deletes a prebuilt domain's models in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_DeleteCustomPrebuiltDomain({
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
Gets all prebuilt entities used in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_ListCustomPrebuiltEntities({
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
Adds a prebuilt entity model to a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_AddCustomPrebuiltEntity({
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

### Model_ListCustomPrebuiltEntityRoles
Get all roles for a prebuilt entity in a version of the application


```js
azure_cognitiveservices_luis_authoring.Model_ListCustomPrebuiltEntityRoles({
  "appId": "",
  "versionId": "",
  "entityId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * entityId **required** `string`: entity Id

#### Output
* output [EntityRoleList](#entityrolelist)

### Model_CreateCustomPrebuiltEntityRole
Create a role for a prebuilt entity in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_CreateCustomPrebuiltEntityRole({
  "appId": "",
  "versionId": "",
  "entityId": "",
  "entityRoleCreateObject": {}
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * entityId **required** `string`: The entity model ID.
  * entityRoleCreateObject **required** [EntityRoleCreateObject](#entityrolecreateobject)

#### Output
* output [GuidResponse](#guidresponse)

### Model_DeleteCustomEntityRole
Delete a role for a given prebuilt entity in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_DeleteCustomEntityRole({
  "appId": "",
  "versionId": "",
  "entityId": "",
  "roleId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * entityId **required** `string`: The entity ID.
  * roleId **required** `string`: The entity role Id.

#### Output
* output [OperationStatus](#operationstatus)

### Model_GetCustomEntityRole
Get one role for a given prebuilt entity in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_GetCustomEntityRole({
  "appId": "",
  "versionId": "",
  "entityId": "",
  "roleId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * entityId **required** `string`: entity ID.
  * roleId **required** `string`: entity role ID.

#### Output
* output [EntityRole](#entityrole)

### Model_UpdateCustomPrebuiltEntityRole
Update a role for a given prebuilt entity in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_UpdateCustomPrebuiltEntityRole({
  "appId": "",
  "versionId": "",
  "entityId": "",
  "roleId": "",
  "entityRoleUpdateObject": {}
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * entityId **required** `string`: The entity ID.
  * roleId **required** `string`: The entity role ID.
  * entityRoleUpdateObject **required** [EntityRoleUpdateObject](#entityroleupdateobject)

#### Output
* output [OperationStatus](#operationstatus)

### Model_ListCustomPrebuiltIntents
Gets information about customizable prebuilt intents added to a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_ListCustomPrebuiltIntents({
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
Adds a customizable prebuilt intent model to a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_AddCustomPrebuiltIntent({
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
Gets all prebuilt intent and entity model information used in a version of this application.


```js
azure_cognitiveservices_luis_authoring.Model_ListCustomPrebuiltModels({
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
Gets information about all the simple entity models in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_ListEntities({
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
* output [NDepthEntityExtractorsList](#ndepthentityextractorslist)

### Model_AddEntity
Adds an entity extractor to a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_AddEntity({
  "appId": "",
  "versionId": "",
  "entityModelCreateObject": {}
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * entityModelCreateObject **required** [EntityModelCreateObject](#entitymodelcreateobject)

#### Output
* output [GuidResponse](#guidresponse)

### Model_DeleteEntity
Deletes an entity or a child from a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_DeleteEntity({
  "appId": "",
  "versionId": "",
  "entityId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * entityId **required** `string`: The entity extractor or the child entity extractor ID.

#### Output
* output [OperationStatus](#operationstatus)

### Model_GetEntity
Gets information about an entity model in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_GetEntity({
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
* output [NDepthEntityExtractor](#ndepthentityextractor)

### Model_UpdateEntityChild
Updates the name of an entity extractor or the name and instanceOf model of a child entity extractor.


```js
azure_cognitiveservices_luis_authoring.Model_UpdateEntityChild({
  "appId": "",
  "versionId": "",
  "entityId": "",
  "entityModelUpdateObject": {}
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * entityId **required** `string`: The entity extractor or the child entity extractor ID.
  * entityModelUpdateObject **required** [EntityModelUpdateObject](#entitymodelupdateobject)

#### Output
* output [OperationStatus](#operationstatus)

### Model_AddEntityChild
Creates a single child in an existing entity model hierarchy in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_AddEntityChild({
  "appId": "",
  "versionId": "",
  "entityId": "",
  "childEntityModelCreateObject": {}
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * entityId **required** `string`: The entity extractor ID.
  * childEntityModelCreateObject **required** [ChildEntityModelCreateObject](#childentitymodelcreateobject)

#### Output
* output [GuidResponse](#guidresponse)

### Model_DeleteEntityFeature
Deletes a relation from the feature relations used by the entity in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_DeleteEntityFeature({
  "appId": "",
  "versionId": "",
  "entityId": "",
  "featureRelationDeleteObject": {}
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * entityId **required** `string`: The entity extractor ID.
  * featureRelationDeleteObject **required** [ModelFeatureInformation](#modelfeatureinformation)

#### Output
* output [OperationStatus](#operationstatus)

### Model_GetEntityFeatures
Gets the information of the features used by the entity in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_GetEntityFeatures({
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
* output [FeaturesPerModelResponseObject](#featurespermodelresponseobject)

### Features_AddEntityFeature
Adds a new feature relation to be used by the entity in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Features_AddEntityFeature({
  "appId": "",
  "versionId": "",
  "entityId": "",
  "featureRelationCreateObject": {}
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * entityId **required** `string`: The entity extractor ID.
  * featureRelationCreateObject **required** [ModelFeatureInformation](#modelfeatureinformation)

#### Output
* output [OperationStatus](#operationstatus)

### Model_ReplaceEntityFeatures
Updates the information of the features used by the entity in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_ReplaceEntityFeatures({
  "appId": "",
  "versionId": "",
  "entityId": "",
  "featureRelationsUpdateObject": []
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * entityId **required** `string`: The entity extractor ID.
  * featureRelationsUpdateObject **required** [FeaturesPerModelResponseObject](#featurespermodelresponseobject)

#### Output
* output [OperationStatus](#operationstatus)

### Model_ListEntityRoles
Get all roles for an entity in a version of the application


```js
azure_cognitiveservices_luis_authoring.Model_ListEntityRoles({
  "appId": "",
  "versionId": "",
  "entityId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * entityId **required** `string`: entity Id

#### Output
* output [EntityRoleList](#entityrolelist)

### Model_CreateEntityRole
Create an entity role in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_CreateEntityRole({
  "appId": "",
  "versionId": "",
  "entityId": "",
  "entityRoleCreateObject": {}
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * entityId **required** `string`: The entity model ID.
  * entityRoleCreateObject **required** [EntityRoleCreateObject](#entityrolecreateobject)

#### Output
* output [GuidResponse](#guidresponse)

### Model_DeleteEntityRole
Delete an entity role in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_DeleteEntityRole({
  "appId": "",
  "versionId": "",
  "entityId": "",
  "roleId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * entityId **required** `string`: The entity ID.
  * roleId **required** `string`: The entity role Id.

#### Output
* output [OperationStatus](#operationstatus)

### Model_GetEntityRole
Get one role for a given entity in a version of the application


```js
azure_cognitiveservices_luis_authoring.Model_GetEntityRole({
  "appId": "",
  "versionId": "",
  "entityId": "",
  "roleId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * entityId **required** `string`: entity ID.
  * roleId **required** `string`: entity role ID.

#### Output
* output [EntityRole](#entityrole)

### Model_UpdateEntityRole
Update a role for a given entity in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_UpdateEntityRole({
  "appId": "",
  "versionId": "",
  "entityId": "",
  "roleId": "",
  "entityRoleUpdateObject": {}
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * entityId **required** `string`: The entity ID.
  * roleId **required** `string`: The entity role ID.
  * entityRoleUpdateObject **required** [EntityRoleUpdateObject](#entityroleupdateobject)

#### Output
* output [OperationStatus](#operationstatus)

### Model_ListEntitySuggestions
Get suggested example utterances that would improve the accuracy of the entity model in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_ListEntitySuggestions({
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
Adds a labeled example utterance in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Examples_Add({
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
Returns example utterances to be reviewed from a version of the application.


```js
azure_cognitiveservices_luis_authoring.Examples_List({
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
Adds a batch of labeled example utterances to a version of the application.


```js
azure_cognitiveservices_luis_authoring.Examples_Batch({
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
Deletes the labeled example utterances with the specified ID from a version of the application.


```js
azure_cognitiveservices_luis_authoring.Examples_Delete({
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
azure_cognitiveservices_luis_authoring.Versions_Export({
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
Gets all the extraction phraselist and pattern features in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Features_List({
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
Gets information about all the hierarchical entity models in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_ListHierarchicalEntities({
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

### Model_DeleteHierarchicalEntity
Deletes a hierarchical entity from a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_DeleteHierarchicalEntity({
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
Gets information about a hierarchical entity in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_GetHierarchicalEntity({
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
Updates the name of a hierarchical entity model in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_UpdateHierarchicalEntity({
  "appId": "",
  "versionId": "",
  "hEntityId": "",
  "modelUpdateObject": {}
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * hEntityId **required** `string`: The hierarchical entity extractor ID.
  * modelUpdateObject **required** [ModelUpdateObject](#modelupdateobject)

#### Output
* output [OperationStatus](#operationstatus)

### Model_DeleteHierarchicalEntityChild
Deletes a hierarchical entity extractor child in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_DeleteHierarchicalEntityChild({
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
Gets information about the child's model contained in an hierarchical entity child model in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_GetHierarchicalEntityChild({
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
Renames a single child in an existing hierarchical entity model in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_UpdateHierarchicalEntityChild({
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

### Model_ListHierarchicalEntityRoles
Get all roles for a hierarchical entity in a version of the application


```js
azure_cognitiveservices_luis_authoring.Model_ListHierarchicalEntityRoles({
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
* output [EntityRoleList](#entityrolelist)

### Model_CreateHierarchicalEntityRole
Create a role for an hierarchical entity in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_CreateHierarchicalEntityRole({
  "appId": "",
  "versionId": "",
  "hEntityId": "",
  "entityRoleCreateObject": {}
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * hEntityId **required** `string`: The hierarchical entity extractor ID.
  * entityRoleCreateObject **required** [EntityRoleCreateObject](#entityrolecreateobject)

#### Output
* output [GuidResponse](#guidresponse)

### Model_DeleteHierarchicalEntityRole
Delete a role for a given hierarchical role in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_DeleteHierarchicalEntityRole({
  "appId": "",
  "versionId": "",
  "hEntityId": "",
  "roleId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * hEntityId **required** `string`: The hierarchical entity extractor ID.
  * roleId **required** `string`: The entity role Id.

#### Output
* output [OperationStatus](#operationstatus)

### Model_GetHierarchicalEntityRole
Get one role for a given hierarchical entity in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_GetHierarchicalEntityRole({
  "appId": "",
  "versionId": "",
  "hEntityId": "",
  "roleId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * hEntityId **required** `string`: The hierarchical entity extractor ID.
  * roleId **required** `string`: entity role ID.

#### Output
* output [EntityRole](#entityrole)

### Model_UpdateHierarchicalEntityRole
Update a role for a given hierarchical entity in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_UpdateHierarchicalEntityRole({
  "appId": "",
  "versionId": "",
  "hEntityId": "",
  "roleId": "",
  "entityRoleUpdateObject": {}
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * hEntityId **required** `string`: The hierarchical entity extractor ID.
  * roleId **required** `string`: The entity role ID.
  * entityRoleUpdateObject **required** [EntityRoleUpdateObject](#entityroleupdateobject)

#### Output
* output [OperationStatus](#operationstatus)

### Model_ListIntents
Gets information about the intent models in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_ListIntents({
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
Adds an intent to a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_AddIntent({
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
Deletes an intent from a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_DeleteIntent({
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
  * deleteUtterances `boolean`: If true, deletes the intent's example utterances. If false, moves the example utterances to the None intent. The default value is false.

#### Output
* output [OperationStatus](#operationstatus)

### Model_GetIntent
Gets information about the intent model in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_GetIntent({
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
Updates the name of an intent in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_UpdateIntent({
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

### Model_DeleteIntentFeature
Deletes a relation from the feature relations used by the intent in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_DeleteIntentFeature({
  "appId": "",
  "versionId": "",
  "intentId": "",
  "featureRelationDeleteObject": {}
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * intentId **required** `string`: The intent classifier ID.
  * featureRelationDeleteObject **required** [ModelFeatureInformation](#modelfeatureinformation)

#### Output
* output [OperationStatus](#operationstatus)

### Model_GetIntentFeatures
Gets the information of the features used by the intent in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_GetIntentFeatures({
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
* output [FeaturesPerModelResponseObject](#featurespermodelresponseobject)

### Features_AddIntentFeature
Adds a new feature relation to be used by the intent in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Features_AddIntentFeature({
  "appId": "",
  "versionId": "",
  "intentId": "",
  "featureRelationCreateObject": {}
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * intentId **required** `string`: The intent classifier ID.
  * featureRelationCreateObject **required** [ModelFeatureInformation](#modelfeatureinformation)

#### Output
* output [OperationStatus](#operationstatus)

### Model_ReplaceIntentFeatures
Updates the information of the features used by the intent in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_ReplaceIntentFeatures({
  "appId": "",
  "versionId": "",
  "intentId": "",
  "featureRelationsUpdateObject": []
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * intentId **required** `string`: The intent classifier ID.
  * featureRelationsUpdateObject **required** [FeaturesPerModelResponseObject](#featurespermodelresponseobject)

#### Output
* output [OperationStatus](#operationstatus)

### Pattern_ListIntentPatterns
Returns patterns for the specific intent in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Pattern_ListIntentPatterns({
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
  * skip `integer`: The number of entries to skip. Default value is 0.
  * take `integer`: The number of entries to return. Maximum page size is 500. Default is 100.

#### Output
* output [PatternRuleList](#patternrulelist)

### Model_ListIntentSuggestions
Suggests example utterances that would improve the accuracy of the intent model in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_ListIntentSuggestions({
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
Gets all the available prebuilt entities in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_ListPrebuiltEntities({
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
Gets information about all the intent and entity models in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_ListModels({
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

### Model_Examples
Gets the example utterances for the given intent or entity model in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_Examples({
  "appId": "",
  "versionId": "",
  "modelId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * modelId **required** `string`: The ID (GUID) of the model.
  * skip `integer`: The number of entries to skip. Default value is 0.
  * take `integer`: The number of entries to return. Maximum page size is 500. Default is 100.

#### Output
* output [ExamplesPerModelResponseObject](#examplespermodelresponseobject)

### Model_ListPatternAnyEntityInfos
Get information about the Pattern.Any entity models in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_ListPatternAnyEntityInfos({
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
* output [PatternAnyEntityExtractorList](#patternanyentityextractorlist)

### Model_CreatePatternAnyEntityModel
Adds a pattern.any entity extractor to a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_CreatePatternAnyEntityModel({
  "appId": "",
  "versionId": "",
  "extractorCreateObject": {}
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * extractorCreateObject **required** [PatternAnyModelCreateObject](#patternanymodelcreateobject)

#### Output
* output [GuidResponse](#guidresponse)

### Model_DeletePatternAnyEntityModel
Deletes a Pattern.Any entity extractor from a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_DeletePatternAnyEntityModel({
  "appId": "",
  "versionId": "",
  "entityId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * entityId **required** `string`: The Pattern.Any entity extractor ID.

#### Output
* output [OperationStatus](#operationstatus)

### Model_GetPatternAnyEntityInfo
Gets information about the Pattern.Any model in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_GetPatternAnyEntityInfo({
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
* output [PatternAnyEntityExtractor](#patternanyentityextractor)

### Model_UpdatePatternAnyEntityModel
Updates the name and explicit (exception) list of a Pattern.Any entity model in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_UpdatePatternAnyEntityModel({
  "appId": "",
  "versionId": "",
  "entityId": "",
  "patternAnyUpdateObject": {}
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * entityId **required** `string`: The Pattern.Any entity extractor ID.
  * patternAnyUpdateObject **required** [PatternAnyModelUpdateObject](#patternanymodelupdateobject)

#### Output
* output [OperationStatus](#operationstatus)

### Model_GetExplicitList
Get the explicit (exception) list of the pattern.any entity in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_GetExplicitList({
  "appId": "",
  "versionId": "",
  "entityId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * entityId **required** `string`: The Pattern.Any entity id.

#### Output
* output [ExplicitListItemList](#explicitlistitemlist)

### Model_AddExplicitListItem
Add a new exception to the explicit list for the Pattern.Any entity in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_AddExplicitListItem({
  "appId": "",
  "versionId": "",
  "entityId": "",
  "item": {}
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * entityId **required** `string`: The Pattern.Any entity extractor ID.
  * item **required** [ExplicitListItemCreateObject](#explicitlistitemcreateobject)

#### Output
* output [ExplicitListItemIDResponse](#explicitlistitemidresponse)

### Model_DeleteExplicitListItem
Delete an item from the explicit (exception) list for a Pattern.any entity in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_DeleteExplicitListItem({
  "appId": "",
  "versionId": "",
  "entityId": "",
  "itemId": 0
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * entityId **required** `string`: The pattern.any entity id.
  * itemId **required** `integer`: The explicit list item which will be deleted.

#### Output
* output [OperationStatus](#operationstatus)

### Model_GetExplicitListItem
Get the explicit (exception) list of the pattern.any entity in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_GetExplicitListItem({
  "appId": "",
  "versionId": "",
  "entityId": "",
  "itemId": 0
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * entityId **required** `string`: The Pattern.Any entity Id.
  * itemId **required** `integer`: The explicit list item Id.

#### Output
* output [ExplicitListItem](#explicitlistitem)

### Model_UpdateExplicitListItem
Updates an explicit (exception) list item for a Pattern.Any entity in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_UpdateExplicitListItem({
  "appId": "",
  "versionId": "",
  "entityId": "",
  "itemId": 0,
  "item": {}
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * entityId **required** `string`: The Pattern.Any entity extractor ID.
  * itemId **required** `integer`: The explicit list item ID.
  * item **required** [ExplicitListItemUpdateObject](#explicitlistitemupdateobject)

#### Output
* output [OperationStatus](#operationstatus)

### Model_ListPatternAnyEntityRoles
Get all roles for a Pattern.any entity in a version of the application


```js
azure_cognitiveservices_luis_authoring.Model_ListPatternAnyEntityRoles({
  "appId": "",
  "versionId": "",
  "entityId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * entityId **required** `string`: entity Id

#### Output
* output [EntityRoleList](#entityrolelist)

### Model_CreatePatternAnyEntityRole
Create a role for an Pattern.any entity in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_CreatePatternAnyEntityRole({
  "appId": "",
  "versionId": "",
  "entityId": "",
  "entityRoleCreateObject": {}
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * entityId **required** `string`: The entity model ID.
  * entityRoleCreateObject **required** [EntityRoleCreateObject](#entityrolecreateobject)

#### Output
* output [GuidResponse](#guidresponse)

### Model_DeletePatternAnyEntityRole
Delete a role for a given Pattern.any entity in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_DeletePatternAnyEntityRole({
  "appId": "",
  "versionId": "",
  "entityId": "",
  "roleId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * entityId **required** `string`: The entity ID.
  * roleId **required** `string`: The entity role Id.

#### Output
* output [OperationStatus](#operationstatus)

### Model_GetPatternAnyEntityRole
Get one role for a given Pattern.any entity in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_GetPatternAnyEntityRole({
  "appId": "",
  "versionId": "",
  "entityId": "",
  "roleId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * entityId **required** `string`: entity ID.
  * roleId **required** `string`: entity role ID.

#### Output
* output [EntityRole](#entityrole)

### Model_UpdatePatternAnyEntityRole
Update a role for a given Pattern.any entity in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_UpdatePatternAnyEntityRole({
  "appId": "",
  "versionId": "",
  "entityId": "",
  "roleId": "",
  "entityRoleUpdateObject": {}
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * entityId **required** `string`: The entity ID.
  * roleId **required** `string`: The entity role ID.
  * entityRoleUpdateObject **required** [EntityRoleUpdateObject](#entityroleupdateobject)

#### Output
* output [OperationStatus](#operationstatus)

### Pattern_AddPattern
Adds a pattern to a version of the application.


```js
azure_cognitiveservices_luis_authoring.Pattern_AddPattern({
  "appId": "",
  "versionId": "",
  "pattern": {}
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * pattern **required** [PatternRuleCreateObject](#patternrulecreateobject)

#### Output
* output [PatternRuleInfo](#patternruleinfo)

### Pattern_DeletePatterns
Deletes a list of patterns in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Pattern_DeletePatterns({
  "appId": "",
  "versionId": "",
  "patternIds": []
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * patternIds **required** `array`
    * items `string`

#### Output
* output [OperationStatus](#operationstatus)

### Pattern_ListPatterns
Gets patterns in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Pattern_ListPatterns({
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
* output [PatternRuleList](#patternrulelist)

### Pattern_BatchAddPatterns
Adds a batch of patterns in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Pattern_BatchAddPatterns({
  "appId": "",
  "versionId": "",
  "patterns": []
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * patterns **required** `array`
    * items [PatternRuleCreateObject](#patternrulecreateobject)

#### Output
* output [PatternRuleList](#patternrulelist)

### Pattern_UpdatePatterns
Updates patterns in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Pattern_UpdatePatterns({
  "appId": "",
  "versionId": "",
  "patterns": []
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * patterns **required** `array`
    * items [PatternRuleUpdateObject](#patternruleupdateobject)

#### Output
* output [PatternRuleList](#patternrulelist)

### Pattern_DeletePattern
Deletes the pattern with the specified ID from a version of the application..


```js
azure_cognitiveservices_luis_authoring.Pattern_DeletePattern({
  "appId": "",
  "versionId": "",
  "patternId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * patternId **required** `string`: The pattern ID.

#### Output
* output [OperationStatus](#operationstatus)

### Pattern_UpdatePattern
Updates a pattern in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Pattern_UpdatePattern({
  "appId": "",
  "versionId": "",
  "patternId": "",
  "pattern": {}
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * patternId **required** `string`: The pattern ID.
  * pattern **required** [PatternRuleUpdateObject](#patternruleupdateobject)

#### Output
* output [PatternRuleInfo](#patternruleinfo)

### Features_ListPhraseLists
Gets all the phraselist features in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Features_ListPhraseLists({
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
Creates a new phraselist feature in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Features_AddPhraseList({
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
Deletes a phraselist feature from a version of the application.


```js
azure_cognitiveservices_luis_authoring.Features_DeletePhraseList({
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
Gets phraselist feature info in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Features_GetPhraseList({
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
Updates the phrases, the state and the name of the phraselist feature in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Features_UpdatePhraseList({
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
Gets information about all the prebuilt entities in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_ListPrebuilts({
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
Adds a list of prebuilt entities to a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_AddPrebuilt({
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

### Model_ListPrebuiltEntityRoles
Get a prebuilt entity's roles in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_ListPrebuiltEntityRoles({
  "appId": "",
  "versionId": "",
  "entityId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * entityId **required** `string`: entity Id

#### Output
* output [EntityRoleList](#entityrolelist)

### Model_CreatePrebuiltEntityRole
Create a role for a prebuilt entity in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_CreatePrebuiltEntityRole({
  "appId": "",
  "versionId": "",
  "entityId": "",
  "entityRoleCreateObject": {}
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * entityId **required** `string`: The entity model ID.
  * entityRoleCreateObject **required** [EntityRoleCreateObject](#entityrolecreateobject)

#### Output
* output [GuidResponse](#guidresponse)

### Model_DeletePrebuiltEntityRole
Delete a role in a prebuilt entity in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_DeletePrebuiltEntityRole({
  "appId": "",
  "versionId": "",
  "entityId": "",
  "roleId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * entityId **required** `string`: The entity ID.
  * roleId **required** `string`: The entity role Id.

#### Output
* output [OperationStatus](#operationstatus)

### Model_GetPrebuiltEntityRole
Get one role for a given prebuilt entity in a version of the application


```js
azure_cognitiveservices_luis_authoring.Model_GetPrebuiltEntityRole({
  "appId": "",
  "versionId": "",
  "entityId": "",
  "roleId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * entityId **required** `string`: entity ID.
  * roleId **required** `string`: entity role ID.

#### Output
* output [EntityRole](#entityrole)

### Model_UpdatePrebuiltEntityRole
Update a role for a given prebuilt entity in a version of the application


```js
azure_cognitiveservices_luis_authoring.Model_UpdatePrebuiltEntityRole({
  "appId": "",
  "versionId": "",
  "entityId": "",
  "roleId": "",
  "entityRoleUpdateObject": {}
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * entityId **required** `string`: The entity ID.
  * roleId **required** `string`: The entity role ID.
  * entityRoleUpdateObject **required** [EntityRoleUpdateObject](#entityroleupdateobject)

#### Output
* output [OperationStatus](#operationstatus)

### Model_DeletePrebuilt
Deletes a prebuilt entity extractor from a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_DeletePrebuilt({
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
Gets information about a prebuilt entity model in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_GetPrebuilt({
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

### Model_ListRegexEntityInfos
Gets information about the regular expression entity models in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_ListRegexEntityInfos({
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
* output [RegexEntityExtractorList](#regexentityextractorlist)

### Model_CreateRegexEntityModel
Adds a regular expression entity model to a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_CreateRegexEntityModel({
  "appId": "",
  "versionId": "",
  "regexEntityExtractorCreateObj": {}
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * regexEntityExtractorCreateObj **required** [RegexModelCreateObject](#regexmodelcreateobject)

#### Output
* output [GuidResponse](#guidresponse)

### Model_ListRegexEntityRoles
Get all roles for a regular expression entity in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_ListRegexEntityRoles({
  "appId": "",
  "versionId": "",
  "entityId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * entityId **required** `string`: entity Id

#### Output
* output [EntityRoleList](#entityrolelist)

### Model_CreateRegexEntityRole
Create a role for an regular expression entity in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_CreateRegexEntityRole({
  "appId": "",
  "versionId": "",
  "entityId": "",
  "entityRoleCreateObject": {}
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * entityId **required** `string`: The entity model ID.
  * entityRoleCreateObject **required** [EntityRoleCreateObject](#entityrolecreateobject)

#### Output
* output [GuidResponse](#guidresponse)

### Model_DeleteRegexEntityRole
Delete a role for a given regular expression in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_DeleteRegexEntityRole({
  "appId": "",
  "versionId": "",
  "entityId": "",
  "roleId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * entityId **required** `string`: The entity ID.
  * roleId **required** `string`: The entity role Id.

#### Output
* output [OperationStatus](#operationstatus)

### Model_GetRegexEntityRole
Get one role for a given regular expression entity in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_GetRegexEntityRole({
  "appId": "",
  "versionId": "",
  "entityId": "",
  "roleId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * entityId **required** `string`: entity ID.
  * roleId **required** `string`: entity role ID.

#### Output
* output [EntityRole](#entityrole)

### Model_UpdateRegexEntityRole
Update a role for a given regular expression entity in a version of the application


```js
azure_cognitiveservices_luis_authoring.Model_UpdateRegexEntityRole({
  "appId": "",
  "versionId": "",
  "entityId": "",
  "roleId": "",
  "entityRoleUpdateObject": {}
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * entityId **required** `string`: The entity ID.
  * roleId **required** `string`: The entity role ID.
  * entityRoleUpdateObject **required** [EntityRoleUpdateObject](#entityroleupdateobject)

#### Output
* output [OperationStatus](#operationstatus)

### Model_DeleteRegexEntityModel
Deletes a regular expression entity from a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_DeleteRegexEntityModel({
  "appId": "",
  "versionId": "",
  "regexEntityId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * regexEntityId **required** `string`: The regular expression entity extractor ID.

#### Output
* output [OperationStatus](#operationstatus)

### Model_GetRegexEntityEntityInfo
Gets information about a regular expression entity in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_GetRegexEntityEntityInfo({
  "appId": "",
  "versionId": "",
  "regexEntityId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * regexEntityId **required** `string`: The regular expression entity model ID.

#### Output
* output [RegexEntityExtractor](#regexentityextractor)

### Model_UpdateRegexEntityModel
Updates the regular expression entity in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Model_UpdateRegexEntityModel({
  "appId": "",
  "versionId": "",
  "regexEntityId": "",
  "regexEntityUpdateObject": {}
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * regexEntityId **required** `string`: The regular expression entity extractor ID.
  * regexEntityUpdateObject **required** [RegexModelUpdateObject](#regexmodelupdateobject)

#### Output
* output [OperationStatus](#operationstatus)

### Settings_List
Gets the settings in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Settings_List({
  "appId": "",
  "versionId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.

#### Output
* output `array`
  * items [AppVersionSettingObject](#appversionsettingobject)

### Settings_Update
Updates the settings in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Settings_Update({
  "appId": "",
  "versionId": "",
  "listOfAppVersionSettingObject": []
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.
  * listOfAppVersionSettingObject **required** `array`
    * items [AppVersionSettingObject](#appversionsettingobject)

#### Output
* output [OperationStatus](#operationstatus)

### Versions_DeleteUnlabelledUtterance
Deleted an unlabelled utterance in a version of the application.


```js
azure_cognitiveservices_luis_authoring.Versions_DeleteUnlabelledUtterance({
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
azure_cognitiveservices_luis_authoring.Train_GetStatus({
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
azure_cognitiveservices_luis_authoring.Train_TrainVersion({
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

### AzureAccounts_ListUserLUISAccounts
Gets the LUIS Azure accounts for the user using his ARM token.


```js
azure_cognitiveservices_luis_authoring.AzureAccounts_ListUserLUISAccounts({
  "Authorization": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: The bearer authorization header to use; containing the user's ARM token used to validate Azure accounts information.

#### Output
* output [AzureAccountInfoList](#azureaccountinfolist)

### Apps_PackagePublishedApplicationAsGzip
Packages a published LUIS application as a GZip file to be used in the LUIS container.


```js
azure_cognitiveservices_luis_authoring.Apps_PackagePublishedApplicationAsGzip({
  "appId": "",
  "slotName": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * slotName **required** `string`: The publishing slot name.

#### Output
* output `file`

### Apps_PackageTrainedApplicationAsGzip
Packages trained LUIS application as GZip file to be used in the LUIS container.


```js
azure_cognitiveservices_luis_authoring.Apps_PackageTrainedApplicationAsGzip({
  "appId": "",
  "versionId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The application ID.
  * versionId **required** `string`: The version ID.

#### Output
* output `file`



## Definitions

### AppVersionSettingObject
* AppVersionSettingObject `object`: Object model of an application version setting.
  * name `string`: The application version setting name.
  * value `string`: The application version setting value.

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
  * culture `string`: The culture of the application. For example, "en-us".
  * description `string`: The description of the application.
  * domain `string`: The domain for the new application. Optional. For example, Comics.
  * endpointHitsCount `integer`: Number of calls made to this endpoint.
  * endpoints `object`: The Runtime endpoint URL for this model version.
  * id `string`: The ID (GUID) of the application.
  * name `string`: The name of the application.
  * usageScenario `string`: Defines the scenario for the new application. Optional. For example, IoT.
  * versionsCount `integer`: Amount of model versions within the application.

### ApplicationPublishObject
* ApplicationPublishObject `object`: Object model for publishing a specific application version.
  * isStaging `boolean`: Indicates if the staging slot should be used, instead of the Production one.
  * versionId `string`: The version ID to publish.

### ApplicationSettingUpdateObject
* ApplicationSettingUpdateObject `object`: Object model for updating an application's settings.
  * public `boolean`: Setting your application as public allows other people to use your application's endpoint using their own keys.

### ApplicationSettings
* ApplicationSettings `object`: The application settings.
  * id **required** `string`: The application ID.
  * public **required** `boolean`: Setting your application as public allows other people to use your application's endpoint using their own keys for billing purposes.

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

### AzureAccountInfoList
* AzureAccountInfoList `array`: List of Azure account info objects.
  * items [AzureAccountInfoObject](#azureaccountinfoobject)

### AzureAccountInfoObject
* AzureAccountInfoObject `object`: Defines the Azure account information object.
  * accountName **required** `string`: The Azure account name.
  * azureSubscriptionId **required** `string`: The id for the Azure subscription.
  * resourceGroup **required** `string`: The Azure resource group name.

### BatchLabelExample
* BatchLabelExample `object`: Response when adding a batch of labeled example utterances.
  * error [OperationStatus](#operationstatus)
  * hasError `boolean`
  * value [LabelExampleResponse](#labelexampleresponse)

### BatchLabelExampleResponse
* BatchLabelExampleResponse `array`: Response when adding a batch of labeled example utterances.
  * items [BatchLabelExample](#batchlabelexample)

### ChildEntity
* ChildEntity `object`: The base child entity type.
  * children `array`: List of children
    * items [ChildEntity](#childentity)
  * id **required** `string`: The ID (GUID) belonging to a child entity.
  * instanceOf `string`: Instance of Model.
  * name `string`: The name of a child entity.
  * readableType [ReadableType](#readabletype)
  * typeId `integer`: The type ID of the Entity Model.

### ChildEntityModelCreateObject
* ChildEntityModelCreateObject `object`: A child entity extractor create object.
  * children `array`: Child entities.
    * items [ChildEntityModelCreateObject](#childentitymodelcreateobject)
  * instanceOf `string`: The instance of model name
  * name `string`: Entity name.

### ClosedList
* ClosedList `object`: Exported Model - A list entity.
  * name `string`: Name of the list entity.
  * roles `array`
    * items `string`
  * subLists `array`: Sublists for the list entity.
    * items [SubClosedList](#subclosedlist)

### ClosedListEntityExtractor
* ClosedListEntityExtractor `object`: List Entity Extractor.
  * subLists `array`: List of sublists.
    * items [SubClosedListResponse](#subclosedlistresponse)
  * id **required** `string`: The ID of the Entity Model.
  * name `string`: Name of the Entity Model.
  * readableType **required** [ReadableType](#readabletype)
  * typeId `integer`: The type ID of the Entity Model.
  * roles [EntityRoleList](#entityrolelist)
  * id **required** `string`: The ID of the Entity Model.
  * name `string`: Name of the Entity Model.
  * readableType **required** [ReadableType](#readabletype)
  * typeId `integer`: The type ID of the Entity Model.

### ClosedListEntityExtractorsList
* ClosedListEntityExtractorsList `array`: List of List Entity Extractors.
  * items [ClosedListEntityExtractor](#closedlistentityextractor)

### ClosedListModelCreateObject
* ClosedListModelCreateObject `object`: Object model for creating a list entity.
  * name `string`: Name of the list entity.
  * subLists `array`: Sublists for the feature.
    * items [WordListObject](#wordlistobject)

### ClosedListModelPatchObject
* ClosedListModelPatchObject `object`: Object model for adding a batch of sublists to an existing list entity.
  * subLists `array`: Sublists to add.
    * items [WordListObject](#wordlistobject)

### ClosedListModelUpdateObject
* ClosedListModelUpdateObject `object`: Object model for updating a list entity.
  * name `string`: The new name of the list entity.
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
  * roles [EntityRoleList](#entityrolelist)
  * id **required** `string`: The ID of the Entity Model.
  * name `string`: Name of the Entity Model.
  * readableType **required** [ReadableType](#readabletype)
  * typeId `integer`: The type ID of the Entity Model.

### CompositeEntityExtractorsList
* CompositeEntityExtractorsList `array`: List of Composite Entity Extractors.
  * items [CompositeEntityExtractor](#compositeentityextractor)

### CompositeEntityModel
* CompositeEntityModel `object`: A composite entity extractor.
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
  * roles [EntityRoleList](#entityrolelist)
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
  * failedRegions `string`: Regions where publishing failed.
  * isStaging `boolean`: Indicates if the staging slot should be used, instead of the Production one.
  * publishedDateTime `string`: Timestamp when was last published.
  * region `string`: The target region that the application is published to.
  * versionId `string`: The version ID to publish.

### EndpointKeys
* EndpointKeys `array`: An a array of GUIDs, comprised of Azure Endpoint Keys and the Authoring API key.
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
  * text `string`: The utterance. For example, "What's the weather like in seattle?"
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
  * roles [EntityRoleList](#entityrolelist)
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
  * role `string`: The role of the predicted entity.
  * roleId `string`: The role id for the predicted entity.
  * startTokenIndex **required** `integer`: The index within the utterance where the extracted entity starts.

### EntityLabelObject
* EntityLabelObject `object`: Defines the entity type and position of the extracted entity within the example.
  * endCharIndex **required** `integer`: The index within the utterance where the extracted entity ends.
  * entityName **required** `string`: The entity type.
  * role `string`: The role the entity plays in the utterance.
  * startCharIndex **required** `integer`: The index within the utterance where the extracted entity starts.

### EntityModelCreateObject
* EntityModelCreateObject `object`: An entity extractor create object.
  * children `array`: Child entities.
    * items [ChildEntityModelCreateObject](#childentitymodelcreateobject)
  * name `string`: Entity name.

### EntityModelInfo
* EntityModelInfo `object`: An Entity Extractor model info.
  * roles [EntityRoleList](#entityrolelist)
  * id **required** `string`: The ID of the Entity Model.
  * name `string`: Name of the Entity Model.
  * readableType **required** [ReadableType](#readabletype)
  * typeId `integer`: The type ID of the Entity Model.

### EntityModelUpdateObject
* EntityModelUpdateObject `object`: An entity extractor update object.
  * instanceOf `string`: The instance of model name
  * name `string`: Entity name.

### EntityPrediction
* EntityPrediction `object`: A suggested entity.
  * endTokenIndex **required** `integer`: The index within the utterance where the extracted entity ends.
  * entityName **required** `string`: The entity's name
  * phrase **required** `string`: The actual token(s) that comprise the entity.
  * startTokenIndex **required** `integer`: The index within the utterance where the extracted entity starts.

### EntityRole
* EntityRole `object`: Entity extractor role
  * id `string`: The entity role ID.
  * name `string`: The entity role name.

### EntityRoleCreateObject
* EntityRoleCreateObject `object`: Object model for creating an entity role.
  * name `string`: The entity role name.

### EntityRoleList
* EntityRoleList `array`: List of Pattern.Any Entity Extractors.
  * items [EntityRole](#entityrole)

### EntityRoleUpdateObject
* EntityRoleUpdateObject `object`: Object model for updating an entity role.
  * name `string`: The entity role name.

### ErrorResponse
* ErrorResponse `object`: Error response when invoking an operation on the API.
  * errorType `string`

### ExampleLabelObject
* ExampleLabelObject `object`: A labeled example utterance.
  * entityLabels `array`: The identified entities within the example utterance.
    * items [EntityLabelObject](#entitylabelobject)
  * intentName `string`: The identified intent representing the example utterance.
  * text `string`: The example utterance.

### ExampleLabelObjectArray
* ExampleLabelObjectArray `array`: Object model for adding a batch of labeled examples.
  * items [ExampleLabelObject](#examplelabelobject)

### ExamplesPerModelResponseObject
* ExamplesPerModelResponseObject `array`: A list of example utterances per model.
  * items [LabelTextObject](#labeltextobject)

### ExplicitListItem
* ExplicitListItem `object`: Explicit (exception) list item
  * explicitListItem `string`: The explicit list item value.
  * id `integer`: The explicit list item ID.

### ExplicitListItemCreateObject
* ExplicitListItemCreateObject `object`: Object model for creating an explicit (exception) list item.
  * explicitListItem `string`: The explicit list item.

### ExplicitListItemIDResponse
* ExplicitListItemIDResponse `integer`: The ID of the created explicit list item.

### ExplicitListItemList
* ExplicitListItemList `array`: List of explicit (exception) list items
  * items [ExplicitListItem](#explicitlistitem)

### ExplicitListItemUpdateObject
* ExplicitListItemUpdateObject `object`: Model object for updating an explicit (exception) list item.
  * explicitListItem `string`: The explicit list item.

### FeatureIDResponse
* FeatureIDResponse `integer`: The ID of the created feature.

### FeatureInfoObject
* FeatureInfoObject `object`: The base class Features-related response objects inherit from.
  * enabledForAllModels `boolean`: Indicates if the feature is enabled for all models in the application.
  * id `integer`: A six-digit ID used for Features.
  * isActive `boolean`: Indicates if the feature is enabled.
  * name `string`: The name of the Feature.

### FeaturesPerModelResponseObject
* FeaturesPerModelResponseObject `array`: A list of feature information objects per model.
  * items [ModelFeatureInformation](#modelfeatureinformation)

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
  * children `array`: List of children
    * items [ChildEntity](#childentity)
  * id **required** `string`: The ID (GUID) belonging to a child entity.
  * instanceOf `string`: Instance of Model.
  * name `string`: The name of a child entity.
  * readableType [ReadableType](#readabletype)
  * typeId `integer`: The type ID of the Entity Model.

### HierarchicalEntityExtractor
* HierarchicalEntityExtractor `object`: Hierarchical Entity Extractor.
  * children `array`: List of child entities.
    * items [ChildEntity](#childentity)
  * id **required** `string`: The ID of the Entity Model.
  * name `string`: Name of the Entity Model.
  * readableType **required** [ReadableType](#readabletype)
  * typeId `integer`: The type ID of the Entity Model.
  * roles [EntityRoleList](#entityrolelist)
  * id **required** `string`: The ID of the Entity Model.
  * name `string`: Name of the Entity Model.
  * readableType **required** [ReadableType](#readabletype)
  * typeId `integer`: The type ID of the Entity Model.

### HierarchicalEntityExtractorsList
* HierarchicalEntityExtractorsList `array`: List of Hierarchical Entity Extractors.
  * items [HierarchicalEntityExtractor](#hierarchicalentityextractor)

### HierarchicalModel
* HierarchicalModel `object`
  * children `array`
    * items [JsonChild](#jsonchild)
  * features `array`
    * items [JsonModelFeatureInformation](#jsonmodelfeatureinformation)
  * inherits [PrebuiltDomainObject](#prebuiltdomainobject)
  * name `string`
  * roles `array`
    * items `string`

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
  * text `string`: The utterance. For example, "What's the weather like in seattle?"
  * tokenizedText `array`: The tokenized utterance.
    * items `string`

### IntentsSuggestionExamples
* IntentsSuggestionExamples `array`: List of predicted/suggested intents.
  * items [IntentsSuggestionExample](#intentssuggestionexample)

### JSONEntity
* JSONEntity `object`: Exported Model - Extracted Entity from utterance.
  * endPos **required** `integer`: The index within the utterance where the extracted entity ends.
  * entity **required** `string`: The entity name.
  * role `string`: The role the entity plays in the utterance.
  * startPos **required** `integer`: The index within the utterance where the extracted entity starts.

### JSONModelFeature
* JSONModelFeature `object`: Exported Model - Phraselist Model Feature.
  * activated `boolean`: Indicates if the feature is enabled.
  * enabledForAllModels `boolean`: Indicates if the Phraselist is enabled for all models in the application.
  * mode `boolean`: An interchangeable phrase list feature serves as a list of synonyms for training. A non-exchangeable phrase list serves as separate features for training. So, if your non-interchangeable phrase list contains 5 phrases, they will be mapped to 5 separate features. You can think of the non-interchangeable phrase list as an additional bag of words to add to LUIS existing vocabulary features. It is used as a lexicon lookup feature where its value is 1 if the lexicon contains a given word or 0 if it doesn’t.  Default value is true.
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

### JsonChild
* JsonChild `object`
  * children `array`
    * items [JsonChild](#jsonchild)
  * features `array`
    * items [JsonModelFeatureInformation](#jsonmodelfeatureinformation)
  * instanceOf `string`
  * name `string`

### JsonModelFeatureInformation
* JsonModelFeatureInformation `object`: An object containing the model feature information either the model name or feature name.
  * featureName `string`: The name of the feature used.
  * modelName `string`: The name of the model used.

### LabelExampleResponse
* LabelExampleResponse `object`: Response when adding a labeled example utterance.
  * ExampleId `integer`: The newly created sample ID.
  * UtteranceText `string`: The example utterance.

### LabelTextObject
* LabelTextObject `object`: An object containing the example utterance's text.
  * id `integer`: The ID of the Label.
  * text `string`: The text of the label.

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
  * text `string`: The utterance. For example, "What's the weather like in seattle?"
  * tokenizedText `array`: The utterance tokenized.
    * items `string`

### LabeledUtterances
* LabeledUtterances `array`: A list of predictions and label pairs for every example in the application.
  * items [LabeledUtterance](#labeledutterance)

### LuisApp
* LuisApp `object`: Exported Model - An exported LUIS Application.
  * closedLists `array`: List of list entities.
    * items [ClosedList](#closedlist)
  * composites `array`: List of composite entities.
    * items [HierarchicalModel](#hierarchicalmodel)
  * culture `string`: The culture of the application. E.g.: en-us.
  * desc `string`: The description of the application.
  * entities `array`: List of entities.
    * items [HierarchicalModel](#hierarchicalmodel)
  * hierarchicals `array`: List of hierarchical entities.
    * items [HierarchicalModel](#hierarchicalmodel)
  * intents `array`: List of intents.
    * items [HierarchicalModel](#hierarchicalmodel)
  * name `string`: The name of the application.
  * patternAnyEntities `array`: List of Pattern.Any entities.
    * items [PatternAny](#patternany)
  * patterns `array`: List of patterns.
    * items [PatternRule](#patternrule)
  * phraselists `array`: List of model features.
    * items [JSONModelFeature](#jsonmodelfeature)
  * prebuiltEntities `array`: List of prebuilt entities.
    * items [PrebuiltEntity](#prebuiltentity)
  * regex_entities `array`: List of regular expression entities.
    * items [RegexEntity](#regexentity)
  * regex_features `array`: List of pattern features.
    * items [JSONRegexFeature](#jsonregexfeature)
  * utterances `array`: List of example utterances.
    * items [JSONUtterance](#jsonutterance)
  * versionId `string`: The version ID of the application that was exported.

### ModelCreateObject
* ModelCreateObject `object`: Object model for creating a new entity extractor.
  * name `string`: Name of the new entity extractor.

### ModelFeatureInformation
* ModelFeatureInformation `object`: An object containing the model feature information either the model name or feature name.
  * featureName `string`: The name of the feature used.
  * modelName `string`: The name of the model used.

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
  * roles [EntityRoleList](#entityrolelist)
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
  * roles [EntityRoleList](#entityrolelist)
  * id **required** `string`: The ID of the Entity Model.
  * name `string`: Name of the Entity Model.
  * readableType **required** [ReadableType](#readabletype)
  * typeId `integer`: The type ID of the Entity Model.
  * subLists `array`: List of sublists.
    * items [SubClosedListResponse](#subclosedlistresponse)
  * id **required** `string`: The ID of the Entity Model.
  * name `string`: Name of the Entity Model.
  * readableType **required** [ReadableType](#readabletype)
  * typeId `integer`: The type ID of the Entity Model.
  * roles [EntityRoleList](#entityrolelist)
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
  * roles [EntityRoleList](#entityrolelist)
  * id **required** `string`: The ID of the Entity Model.
  * name `string`: Name of the Entity Model.
  * readableType **required** [ReadableType](#readabletype)
  * typeId `integer`: The type ID of the Entity Model.
  * regexPattern `string`: The Regular Expression entity pattern.
  * id **required** `string`: The ID of the Entity Model.
  * name `string`: Name of the Entity Model.
  * readableType **required** [ReadableType](#readabletype)
  * typeId `integer`: The type ID of the Entity Model.
  * roles [EntityRoleList](#entityrolelist)
  * id **required** `string`: The ID of the Entity Model.
  * name `string`: Name of the Entity Model.
  * readableType **required** [ReadableType](#readabletype)
  * typeId `integer`: The type ID of the Entity Model.
  * explicitList [ExplicitListItemList](#explicitlistitemlist)
  * id **required** `string`: The ID of the Entity Model.
  * name `string`: Name of the Entity Model.
  * readableType **required** [ReadableType](#readabletype)
  * typeId `integer`: The type ID of the Entity Model.
  * roles [EntityRoleList](#entityrolelist)
  * id **required** `string`: The ID of the Entity Model.
  * name `string`: Name of the Entity Model.
  * readableType **required** [ReadableType](#readabletype)
  * typeId `integer`: The type ID of the Entity Model.
  * children `array`
    * items [ChildEntity](#childentity)
  * customPrebuiltDomainName `string`: The domain name.
  * customPrebuiltModelName `string`: The intent name or entity name.
  * id **required** `string`: The ID of the Entity Model.
  * name `string`: Name of the Entity Model.
  * readableType **required** [ReadableType](#readabletype)
  * typeId `integer`: The type ID of the Entity Model.
  * roles [EntityRoleList](#entityrolelist)
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

### NDepthEntityExtractor
* NDepthEntityExtractor `object`: N-Depth Entity Extractor.
  * children `array`
    * items [ChildEntity](#childentity)
  * customPrebuiltDomainName `string`: The domain name.
  * customPrebuiltModelName `string`: The intent name or entity name.
  * id **required** `string`: The ID of the Entity Model.
  * name `string`: Name of the Entity Model.
  * readableType **required** [ReadableType](#readabletype)
  * typeId `integer`: The type ID of the Entity Model.
  * roles [EntityRoleList](#entityrolelist)
  * id **required** `string`: The ID of the Entity Model.
  * name `string`: Name of the Entity Model.
  * readableType **required** [ReadableType](#readabletype)
  * typeId `integer`: The type ID of the Entity Model.

### NDepthEntityExtractorsList
* NDepthEntityExtractorsList `array`: List of N-Depth Entity Extractors.
  * items [NDepthEntityExtractor](#ndepthentityextractor)

### OperationError
* OperationError `object`: Operation error details when invoking an operation on the API.
  * code `string`
  * message `string`

### OperationStatus
* OperationStatus `object`: Response of an Operation status.
  * code `string` (values: Failed, FAILED, Success): Status Code.
  * message `string`: Status details.

### PatternAny
* PatternAny `object`: Pattern.Any Entity Extractor.
  * explicitList `array`
    * items `string`
  * name `string`
  * roles `array`
    * items `string`

### PatternAnyEntityExtractor
* PatternAnyEntityExtractor `object`: Pattern.Any Entity Extractor.
  * explicitList [ExplicitListItemList](#explicitlistitemlist)
  * id **required** `string`: The ID of the Entity Model.
  * name `string`: Name of the Entity Model.
  * readableType **required** [ReadableType](#readabletype)
  * typeId `integer`: The type ID of the Entity Model.
  * roles [EntityRoleList](#entityrolelist)
  * id **required** `string`: The ID of the Entity Model.
  * name `string`: Name of the Entity Model.
  * readableType **required** [ReadableType](#readabletype)
  * typeId `integer`: The type ID of the Entity Model.

### PatternAnyEntityExtractorList
* PatternAnyEntityExtractorList `array`: List of Pattern.Any Entity Extractors.
  * items [PatternAnyEntityExtractor](#patternanyentityextractor)

### PatternAnyModelCreateObject
* PatternAnyModelCreateObject `object`: Model object for creating a Pattern.Any entity model.
  * explicitList `array`: The Pattern.Any explicit list.
    * items `string`
  * name `string`: The model name.

### PatternAnyModelUpdateObject
* PatternAnyModelUpdateObject `object`: Model object for updating a Pattern.Any entity model.
  * explicitList `array`: The Pattern.Any explicit list.
    * items `string`
  * name `string`: The model name.

### PatternFeatureInfo
* PatternFeatureInfo `object`: Pattern feature.
  * pattern `string`: The Regular Expression to match.
  * enabledForAllModels `boolean`: Indicates if the feature is enabled for all models in the application.
  * id `integer`: A six-digit ID used for Features.
  * isActive `boolean`: Indicates if the feature is enabled.
  * name `string`: The name of the Feature.

### PatternFeatureInfoList
* PatternFeatureInfoList `array`: List of Pattern features.
  * items [PatternFeatureInfo](#patternfeatureinfo)

### PatternRule
* PatternRule `object`: Pattern
  * intent `string`: The intent's name where the pattern belongs to.
  * pattern `string`: The pattern text.

### PatternRuleCreateObject
* PatternRuleCreateObject `object`: Object model for creating a pattern
  * intent `string`: The intent's name which the pattern belongs to.
  * pattern `string`: The pattern text.

### PatternRuleInfo
* PatternRuleInfo `object`: Pattern rule
  * id `string`: The pattern ID.
  * intent `string`: The intent's name where the pattern belongs to.
  * pattern `string`: The pattern text.

### PatternRuleList
* PatternRuleList `array`: List of patterns
  * items [PatternRuleInfo](#patternruleinfo)

### PatternRuleUpdateObject
* PatternRuleUpdateObject `object`: Object model for updating a pattern.
  * id `string`: The pattern ID.
  * intent `string`: The intent's name which the pattern belongs to.
  * pattern `string`: The pattern text.

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
  * enabledForAllModels `boolean`: Indicates if the feature is enabled for all models in the application.
  * id `integer`: A six-digit ID used for Features.
  * isActive `boolean`: Indicates if the feature is enabled.
  * name `string`: The name of the Feature.

### PhraseListFeatureInfoList
* PhraseListFeatureInfoList `array`: List of Phraselist Features.
  * items [PhraseListFeatureInfo](#phraselistfeatureinfo)

### PhraselistCreateObject
* PhraselistCreateObject `object`: Object model for creating a phraselist model.
  * enabledForAllModels `boolean`: Indicates if the Phraselist is enabled for all models in the application.
  * isExchangeable `boolean`: An interchangeable phrase list feature serves as a list of synonyms for training. A non-exchangeable phrase list serves as separate features for training. So, if your non-interchangeable phrase list contains 5 phrases, they will be mapped to 5 separate features. You can think of the non-interchangeable phrase list as an additional bag of words to add to LUIS existing vocabulary features. It is used as a lexicon lookup feature where its value is 1 if the lexicon contains a given word or 0 if it doesn’t.  Default value is true.
  * name `string`: The Phraselist name.
  * phrases `string`: List of comma-separated phrases that represent the Phraselist.

### PhraselistUpdateObject
* PhraselistUpdateObject `object`: Object model for updating a Phraselist.
  * enabledForAllModels `boolean`: Indicates if the Phraselist is enabled for all models in the application.
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

### PrebuiltDomainObject
* PrebuiltDomainObject `object`
  * domain_name `string`
  * model_name `string`

### PrebuiltDomainsList
* PrebuiltDomainsList `array`: List of Prebuilt Domains.
  * items [PrebuiltDomain](#prebuiltdomain)

### PrebuiltEntity
* PrebuiltEntity `object`: Prebuilt Entity Extractor.
  * name `string`
  * roles `array`
    * items `string`

### PrebuiltEntityExtractor
* PrebuiltEntityExtractor `object`: Prebuilt Entity Extractor.
  * id **required** `string`: The ID of the Entity Model.
  * name `string`: Name of the Entity Model.
  * readableType **required** [ReadableType](#readabletype)
  * typeId `integer`: The type ID of the Entity Model.
  * roles [EntityRoleList](#entityrolelist)
  * id **required** `string`: The ID of the Entity Model.
  * name `string`: Name of the Entity Model.
  * readableType **required** [ReadableType](#readabletype)
  * typeId `integer`: The type ID of the Entity Model.

### PrebuiltEntityExtractorsList
* PrebuiltEntityExtractorsList `array`: List of Prebuilt Entity Extractors.
  * items [PrebuiltEntityExtractor](#prebuiltentityextractor)

### PrebuiltExtractorNames
* PrebuiltExtractorNames `array`: Object model for adding a prebuilt entity to the application.
  * items `string`

### ProductionOrStagingEndpointInfo
* ProductionOrStagingEndpointInfo `object`
  * assignedEndpointKey `string`: The endpoint key.
  * endpointRegion `string`: The endpoint's region.
  * endpointUrl `string`: The Runtime endpoint URL for this model version.
  * failedRegions `string`: Regions where publishing failed.
  * isStaging `boolean`: Indicates if the staging slot should be used, instead of the Production one.
  * publishedDateTime `string`: Timestamp when was last published.
  * region `string`: The target region that the application is published to.
  * versionId `string`: The version ID to publish.

### PublishSettingUpdateObject
* PublishSettingUpdateObject `object`: Object model for updating an application's publish settings.
  * sentimentAnalysis `boolean`: Setting sentiment analysis as true returns the Sentiment of the input utterance along with the response
  * speech `boolean`: Setting speech as public enables speech priming in your app
  * spellChecker `boolean`: Setting spell checker as public enables spell checking the input utterance.

### PublishSettings
* PublishSettings `object`: The application publish settings.
  * id **required** `string`: The application ID.
  * sentimentAnalysis **required** `boolean`: Setting sentiment analysis as true returns the sentiment of the input utterance along with the response
  * speech **required** `boolean`: Enables speech priming in your app
  * spellChecker **required** `boolean`: Enables spell checking of the utterance.

### ReadableType
* ReadableType `string` (values: Entity Extractor, Child Entity Extractor, Hierarchical Entity Extractor, Hierarchical Child Entity Extractor, Composite Entity Extractor, List Entity Extractor, Prebuilt Entity Extractor, Intent Classifier, Pattern.Any Entity Extractor, Closed List Entity Extractor, Regex Entity Extractor): Full name of the entity type.

### RegexEntity
* RegexEntity `object`: Regular Expression Entity Extractor.
  * name `string`
  * regexPattern `string`
  * roles `array`
    * items `string`

### RegexEntityExtractor
* RegexEntityExtractor `object`: Regular Expression Entity Extractor.
  * regexPattern `string`: The Regular Expression entity pattern.
  * id **required** `string`: The ID of the Entity Model.
  * name `string`: Name of the Entity Model.
  * readableType **required** [ReadableType](#readabletype)
  * typeId `integer`: The type ID of the Entity Model.
  * roles [EntityRoleList](#entityrolelist)
  * id **required** `string`: The ID of the Entity Model.
  * name `string`: Name of the Entity Model.
  * readableType **required** [ReadableType](#readabletype)
  * typeId `integer`: The type ID of the Entity Model.

### RegexEntityExtractorList
* RegexEntityExtractorList `array`: List of Regular Expression Entity Extractors.
  * items [RegexEntityExtractor](#regexentityextractor)

### RegexModelCreateObject
* RegexModelCreateObject `object`: Model object for creating a regular expression entity model.
  * name `string`: The model name.
  * regexPattern `string`: The regular expression entity pattern.

### RegexModelUpdateObject
* RegexModelUpdateObject `object`: Model object for updating a regular expression entity model.
  * name `string`: The model name.
  * regexPattern `string`: The regular expression entity pattern.

### SubClosedList
* SubClosedList `object`: Sublist of items for a list entity.
  * canonicalForm `string`: The standard form that the list represents.
  * list `array`: List of synonym words.
    * items `string`

### SubClosedListResponse
* SubClosedListResponse `object`: Sublist of items for a list entity.
  * id `integer`: The sublist ID
  * canonicalForm `string`: The standard form that the list represents.
  * list `array`: List of synonym words.
    * items `string`

### TaskUpdateObject
* TaskUpdateObject `object`: Object model for cloning an application's version.
  * version `string`: The new version for the cloned model.

### TrainingStatus
* TrainingStatus `string` (values: Queued, InProgress, UpToDate, Fail, Success): The Training status.

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
* WordListBaseUpdateObject `object`: Object model for updating one of the list entity's sublists.
  * canonicalForm `string`: The standard form that the list represents.
  * list `array`: List of synonym words.
    * items `string`

### WordListObject
* WordListObject `object`: Sublist of items for a list entity.
  * canonicalForm `string`: The standard form that the list represents.
  * list `array`: List of synonym words.
    * items `string`


