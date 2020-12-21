# @datafire/agco_ats

Client library for AGCO API

## Installation and Usage
```bash
npm install --save @datafire/agco_ats
```
```js
let agco_ats = require('@datafire/agco_ats').create();

.then(data => {
  console.log(data);
});
```

## Description



## Actions

### AftermarketServices_GetCerts
No Documentation Found.


```js
agco_ats.AftermarketServices_GetCerts(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [System.Object](#system.object)

### AftermarketServices_PutECU
No Documentation Found.


```js
agco_ats.AftermarketServices_PutECU({
  "serialNumber": "",
  "ECU": {
    "SerialNumber": "",
    "EngineSerialNumber": "",
    "State": ""
  },
  "EDTInstanceId": ""
}, context)
```

#### Input
* input `object`
  * serialNumber **required** `string`: The serial number of the ECU.
  * ECU **required** [AGCOPowerServices.Models.ECU](#agcopowerservices.models.ecu)
  * EDTInstanceId **required** `string`: The EDT Instance Id of the kit calling this method.

#### Output
* output [AGCOPowerServices.Models.ECU](#agcopowerservices.models.ecu)

### AftermarketServices_GetEngineIQACodes
No Documentation Found.


```js
agco_ats.AftermarketServices_GetEngineIQACodes({
  "serialNumber": "",
  "EDTInstanceId": ""
}, context)
```

#### Input
* input `object`
  * serialNumber **required** `string`: The serial number of the engine.
  * EDTInstanceId **required** `string`: The EDT Instance Id of the kit calling this method.

#### Output
* output `array`
  * items `string`

### AftermarketServices_PutIQACodes
No Documentation Found.


```js
agco_ats.AftermarketServices_PutIQACodes({
  "serialNumber": "",
  "IQACodes": [],
  "EDTInstanceId": ""
}, context)
```

#### Input
* input `object`
  * serialNumber **required** `string`: The serial number of the Engine
  * IQACodes **required** `array`
    * items `string`
  * EDTInstanceId **required** `string`: The EDT Instance Id of the kit calling this method.

#### Output
* output `boolean`

### AftermarketServices_GetProductionData
No Documentation Found.


```js
agco_ats.AftermarketServices_GetProductionData({
  "serialNumber": "",
  "EDTInstanceId": ""
}, context)
```

#### Input
* input `object`
  * serialNumber **required** `string`: The serial number of the engine.
  * EDTInstanceId **required** `string`: The EDT Instance Id of the kit calling this method.

#### Output
* output `array`
  * items [AGCOPowerServices.Models.ProductionData](#agcopowerservices.models.productiondata)

### AftermarketServices_GetConnectionStatus
No Documentation Found.


```js
agco_ats.AftermarketServices_GetConnectionStatus(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `boolean`

### AftermarketServices_GetUserStatus
No Documentation Found.


```js
agco_ats.AftermarketServices_GetUserStatus({
  "voucherCode": "",
  "dealerCode": ""
}, context)
```

#### Input
* input `object`
  * voucherCode **required** `string`
  * dealerCode **required** `string`

#### Output
* output [AGCOPowerServices.Models.UserStatus](#agcopowerservices.models.userstatus)

### AftermarketServices_UpdateUserStatus
No Documentation Found.


```js
agco_ats.AftermarketServices_UpdateUserStatus({
  "userStatus": {
    "VoucherCode": "",
    "DealerCode": ""
  }
}, context)
```

#### Input
* input `object`
  * userStatus **required** [AGCOPowerServices.Models.UserStatus](#agcopowerservices.models.userstatus)

#### Output
* output `boolean`

### Authentication_PutManageTokens
No Documentation Found.


```js
agco_ats.Authentication_PutManageTokens({
  "UserID": 0,
  "tokenOptions": {}
}, context)
```

#### Input
* input `object`
  * UserID **required** `integer`
  * tokenOptions **required** [API.Models.TokenOptions](#api.models.tokenoptions)

#### Output
*Output schema unknown*

### Authentication_Default
No Documentation Found.


```js
agco_ats.Authentication_Default({
  "credentials": {
    "username": "",
    "password": ""
  }
}, context)
```

#### Input
* input `object`
  * credentials **required** [API.Models.Credentials](#api.models.credentials)

#### Output
* output [API.Models.AuthenticatedUser](#api.models.authenticateduser)

### Authentication_IsAlive
No Documentation Found.


```js
agco_ats.Authentication_IsAlive(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### Authentication_RequestPasswordReset
No Documentation Found.


```js
agco_ats.Authentication_RequestPasswordReset({
  "passwordResetRequest": {
    "Username": "",
    "Url": "",
    "ParameterName": ""
  }
}, context)
```

#### Input
* input `object`
  * passwordResetRequest **required** [API.Models.PasswordResetRequest](#api.models.passwordresetrequest)

#### Output
*Output schema unknown*

### Authentication_ResetPasword
No Documentation Found.


```js
agco_ats.Authentication_ResetPasword({
  "passwordReset": {
    "Token": "",
    "NewPassword": ""
  }
}, context)
```

#### Input
* input `object`
  * passwordReset **required** [API.Models.PasswordReset](#api.models.passwordreset)

#### Output
*Output schema unknown*

### api.v2.AuthorizationCodeDefinitions.get
Additional searches: validationFields[Name]=true and dataFields[Name]=true. These can be used to search for authorization code definitions that have the specified data or validation fields.


```js
agco_ats.api.v2.AuthorizationCodeDefinitions.get({}, context)
```

#### Input
* input `object`
  * limit `integer`: Optional. The page limit.  If not specified, the default page limit is 10.
  * offset `integer`: Optional. The page offset.  If not specified, the default page offset is 0.
  * name `string`: Optional. If specified, filters definitions by name. Starting and ending wildcards (*) supported.
  * createdByUserID `integer`: Optional. If specified, filters definitions to those created by the given User ID.
  * deletedByUserID `integer`: Optional. If specified, filters definitions to those deleted by the given User ID.
  * includeDeleted `boolean`: Optional. Whether to include deleted definitions. 'False' by default.

#### Output
* output [API.IPagedResponse[AuthorizationCodes.Shared.Models.AuthorizationCodeDefinition]](#api.ipagedresponse[authorizationcodes.shared.models.authorizationcodedefinition])

### AuthorizationCodeDefinitions_PostAuthorizationCodeDefinition
No Documentation Found.


```js
agco_ats.AuthorizationCodeDefinitions_PostAuthorizationCodeDefinition({
  "authorizationCodeDefinition": {
    "Name": ""
  }
}, context)
```

#### Input
* input `object`
  * authorizationCodeDefinition **required** [AuthorizationCodes.Shared.Models.AuthorizationCodeDefinition](#authorizationcodes.shared.models.authorizationcodedefinition)

#### Output
* output `string`

### AuthorizationCodeDefinitions_DeleteAuthorizationCodeDefinition
No Documentation Found.


```js
agco_ats.AuthorizationCodeDefinitions_DeleteAuthorizationCodeDefinition({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the authorization code definition.

#### Output
*Output schema unknown*

### api.v2.AuthorizationCodeDefinitions.id.get
No Documentation Found.


```js
agco_ats.api.v2.AuthorizationCodeDefinitions.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the authorization code definition.

#### Output
* output [AuthorizationCodes.Shared.Models.AuthorizationCodeDefinition](#authorizationcodes.shared.models.authorizationcodedefinition)

### AuthorizationCodeDefinitions_PutAuthorizationCodeDefinition
No Documentation Found.


```js
agco_ats.AuthorizationCodeDefinitions_PutAuthorizationCodeDefinition({
  "id": "",
  "authorizationCodeDefinition": {
    "Name": ""
  }
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the authorization code definition.
  * authorizationCodeDefinition **required** [AuthorizationCodes.Shared.Models.AuthorizationCodeDefinition](#authorizationcodes.shared.models.authorizationcodedefinition)

#### Output
*Output schema unknown*

### AuthorizationCodes_GetAuthorizationCodes
Additional searches: validationParameters[Name]=Value and dataParameters[Name]=Value. These can be used to search for authorization codes that have been generated using specified values for data or validation parameters.


```js
agco_ats.AuthorizationCodes_GetAuthorizationCodes({}, context)
```

#### Input
* input `object`
  * code `string`: Optional. If provided, searches for entities with the provided authorization code.
  * limit `integer`: Optional. The page limit.  If not specified, the default page limit is 10.
  * offset `integer`: Optional. The page offset.  If not specified, the default page offset is 0.
  * definitionID `string`: Optional. If specified, filters codes by definition id.
  * createdByUserID `integer`: Optional. If specified, filters codes to those created by the given User ID.
  * deletedByUserID `integer`: Optional. If specified, filters codes to those deleted by the given User ID.
  * includeDeleted `boolean`: Optional. Whether to include deleted codes. 'False' by default.

#### Output
* output [API.IPagedResponse[AuthorizationCodes.Shared.Models.AuthorizationCode]](#api.ipagedresponse[authorizationcodes.shared.models.authorizationcode])

### AuthorizationCodes_PostAuthorizationCode
No Documentation Found.


```js
agco_ats.AuthorizationCodes_PostAuthorizationCode({
  "authorizationCode": {}
}, context)
```

#### Input
* input `object`
  * authorizationCode **required** [AuthorizationCodes.Shared.Models.AuthorizationCode](#authorizationcodes.shared.models.authorizationcode)

#### Output
* output `integer`

### AuthorizationCodes_DeleteAuthorizationCode
No Documentation Found.


```js
agco_ats.AuthorizationCodes_DeleteAuthorizationCode({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The id of the authorization code.

#### Output
*Output schema unknown*

### AuthorizationCodes_GetAuthorizationCode
No Documentation Found.


```js
agco_ats.AuthorizationCodes_GetAuthorizationCode({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The id of the authorization code.

#### Output
* output [AuthorizationCodes.Shared.Models.AuthorizationCode](#authorizationcodes.shared.models.authorizationcode)

### AuthorizationCodes_PutAuthorizationCode
No Documentation Found.


```js
agco_ats.AuthorizationCodes_PutAuthorizationCode({
  "id": 0,
  "authorizationCode": {}
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The id of the authorization code.
  * authorizationCode **required** [AuthorizationCodes.Shared.Models.AuthorizationCode](#authorizationcodes.shared.models.authorizationcode)

#### Output
*Output schema unknown*

### Brands_Brands
No Documentation Found.


```js
agco_ats.Brands_Brands(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items `string`

### Bundles_GetBundles
No Documentation Found.


```js
agco_ats.Bundles_GetBundles({}, context)
```

#### Input
* input `object`
  * UpdateGroupID `string`: Optional. Filter by UpdateGroup ID.
  * Active `boolean`: Optional. Filter by active status.
  * limit `integer`: Optional. The page limit. The default page limit is 10.
  * offset `integer`: Optional. The page offset. The default page offset is 0.

#### Output
* output [API.PagedResponse[UpdateSystem.Models.Bundle]](#api.pagedresponse[updatesystem.models.bundle])

### Bundles_PostBundle
No Documentation Found.


```js
agco_ats.Bundles_PostBundle({
  "bundle": {
    "Description": "",
    "UpdateGroupID": "",
    "BundleNumber": 0
  }
}, context)
```

#### Input
* input `object`
  * bundle **required** [UpdateSystem.Models.Bundle](#updatesystem.models.bundle)

#### Output
* output `string`

### Bundles_DeleteBundle
No Documentation Found.


```js
agco_ats.Bundles_DeleteBundle({
  "ID": ""
}, context)
```

#### Input
* input `object`
  * ID **required** `string`: The Bundle ID to Delete

#### Output
*Output schema unknown*

### Bundles_GetBundle
No Documentation Found.


```js
agco_ats.Bundles_GetBundle({
  "ID": ""
}, context)
```

#### Input
* input `object`
  * ID **required** `string`: The Bundle ID

#### Output
* output [UpdateSystem.Models.Bundle](#updatesystem.models.bundle)

### Bundles_PutBundle
No Documentation Found.


```js
agco_ats.Bundles_PutBundle({
  "ID": "",
  "bundle": {
    "Description": "",
    "UpdateGroupID": "",
    "BundleNumber": 0
  }
}, context)
```

#### Input
* input `object`
  * ID **required** `string`: The unique ID of the Bundle
  * bundle **required** [UpdateSystem.Models.Bundle](#updatesystem.models.bundle)

#### Output
*Output schema unknown*

### api.v2.Clients.get
No Documentation Found.


```js
agco_ats.api.v2.Clients.get({}, context)
```

#### Input
* input `object`
  * Tag `string`: Optional. Filter clients by Tag. Wildcards are supported (*).
  * limit `integer`: Optional. The page limit. The default page limit is 10.
  * offset `integer`: Optional. The page offset. The default page offset is 0.

#### Output
* output [API.PagedResponse[UpdateSystem.Models.Client]](#api.pagedresponse[updatesystem.models.client])

### UpdateSystem_GetCachedFiles
No Documentation Found.


```js
agco_ats.UpdateSystem_GetCachedFiles({
  "ClientID": "",
  "Expired": true
}, context)
```

#### Input
* input `object`
  * ClientID **required** `string`: The ClientID of the Client
  * Expired **required** `boolean`: Only Expired Files (true|false)

#### Output
* output `array`
  * items `string`

### api.v2.Clients.ClientID.PackageReports.get
No Documentation Found.


```js
agco_ats.api.v2.Clients.ClientID.PackageReports.get({
  "ClientID": ""
}, context)
```

#### Input
* input `object`
  * ClientID **required** `string`: The Client ID

#### Output
* output `array`
  * items [UpdateSystem.Models.PackageReport](#updatesystem.models.packagereport)

### api.v2.Clients.ClientID.PackageReports.put
No Documentation Found.


```js
agco_ats.api.v2.Clients.ClientID.PackageReports.put({
  "ClientID": "",
  "packageReport": {}
}, context)
```

#### Input
* input `object`
  * ClientID **required** `string`: The Client ID
  * packageReport **required** [UpdateSystem.Models.PackageReport](#updatesystem.models.packagereport)

#### Output
*Output schema unknown*

### PackageReports_Batch
No Documentation Found.


```js
agco_ats.PackageReports_Batch({
  "ClientID": "",
  "packageReports": []
}, context)
```

#### Input
* input `object`
  * ClientID **required** `string`: The Client ID
  * packageReports **required** `array`
    * items [UpdateSystem.Models.PackageReport](#updatesystem.models.packagereport)

#### Output
*Output schema unknown*

### api.v2.Clients.ID.get
No Documentation Found.


```js
agco_ats.api.v2.Clients.ID.get({
  "ID": ""
}, context)
```

#### Input
* input `object`
  * ID **required** `string`: The Client ID

#### Output
* output [UpdateSystem.Models.Client](#updatesystem.models.client)

### Clients_Put
No Documentation Found.


```js
agco_ats.Clients_Put({
  "ID": "",
  "client": {}
}, context)
```

#### Input
* input `object`
  * ID **required** `string`: The Client ID
  * client **required** [UpdateSystem.Models.Client](#updatesystem.models.client)

#### Output
*Output schema unknown*

### Clients_GetAvailableSubscriptions
No Documentation Found.


```js
agco_ats.Clients_GetAvailableSubscriptions({
  "ID": ""
}, context)
```

#### Input
* input `object`
  * ID **required** `string`: The Client ID
  * UpdateGroupID `string`: Optional. Filter by Update Group.
  * limit `integer`: Optional. The page limit. The default page limit is 10.
  * offset `integer`: Optional. The page offset. The default page offset is 0.

#### Output
* output [API.PagedResponse[UpdateSystem.Models.AvailableUpdateGroupSubscription]](#api.pagedresponse[updatesystem.models.availableupdategroupsubscription])

### Clients_GetSubscriptions
No Documentation Found.


```js
agco_ats.Clients_GetSubscriptions({
  "ID": ""
}, context)
```

#### Input
* input `object`
  * ID **required** `string`: The Client ID
  * UpdateGroupID `string`: Optional. Filter by Update Group.
  * limit `integer`: Optional. The page limit. The default page limit is 10.
  * offset `integer`: Optional. The page offset. The default page offset is 0.

#### Output
* output [API.PagedResponse[UpdateSystem.Models.UpdateGroupSubscription]](#api.pagedresponse[updatesystem.models.updategroupsubscription])

### ContentDefinitions_GetContentDefinitions
Gets a collection of ContentDefinitions. When successful, the response is a PagedResponse of ContentDefinitions.
            If unsuccessful, an appropriate ApiError is returned.


```js
agco_ats.ContentDefinitions_GetContentDefinitions({}, context)
```

#### Input
* input `object`
  * limit `integer`: Optional. The page limit.  If not specified, the default page limit is 10.
  * offset `integer`: Optional. The page offset.  If not specified, the default page offset is 0.
  * userID `integer`: Optional. Filter by UserID.

#### Output
* output [API.PagedResponse[ContentSubmission.Shared.BusinessEntities.ContentDefinition]](#api.pagedresponse[contentsubmission.shared.businessentities.contentdefinition])

### ContentDefinitions_PostContentDefinition
Creates a ContentDefinition.  The body of the POST is the ContentDefinition to create.
            The ContentDefinitionID will be assigned on creation of the Job.  When successful, the response
            is the JobID.  If unsuccessful, an appropriate ApiError is returned.


```js
agco_ats.ContentDefinitions_PostContentDefinition({
  "contentDefinition": {}
}, context)
```

#### Input
* input `object`
  * contentDefinition **required** [ContentSubmission.Shared.BusinessEntities.ContentDefinition](#contentsubmission.shared.businessentities.contentdefinition)

#### Output
* output `integer`

### ContentDefinitions_DeleteContentDefinition
Deletes an ContentDefinition. When successful, the response is empty.  If unsuccessful, an appropriate
            ApiError is returned.


```js
agco_ats.ContentDefinitions_DeleteContentDefinition({
  "contentDefinitionID": 0
}, context)
```

#### Input
* input `object`
  * contentDefinitionID **required** `integer`: The ID of the ContentDefinition to delete

#### Output
*Output schema unknown*

### ContentDefinitions_GetContentDefinition
Gets a ContentDefinition by ID. When successful, the response is the requested ContentDefinition.
            If unsuccessful, an appropriate ApiError is returned.


```js
agco_ats.ContentDefinitions_GetContentDefinition({
  "contentDefinitionID": 0
}, context)
```

#### Input
* input `object`
  * contentDefinitionID **required** `integer`: The ID of the ContentDefinition to get.

#### Output
* output [ContentSubmission.Shared.BusinessEntities.ContentDefinition](#contentsubmission.shared.businessentities.contentdefinition)

### ContentDefinitions_PutContentDefinition
Updates a ContentDefinition.  The body of the PUT is the updated ContentDefinition.  
            When successful, the response is empty.  If unsuccessful, an appropriate ApiError is returned.


```js
agco_ats.ContentDefinitions_PutContentDefinition({
  "contentDefinitionID": 0,
  "contentDefinition": {}
}, context)
```

#### Input
* input `object`
  * contentDefinitionID **required** `integer`: The ID of the ContentDefinition to update
  * contentDefinition **required** [ContentSubmission.Shared.BusinessEntities.ContentDefinition](#contentsubmission.shared.businessentities.contentdefinition)

#### Output
*Output schema unknown*

### api.v2.ContentReleases.get
Gets a collection of ContentReleaseVersion. When successful, the response is a PagedResponse of ContentReleaseVersion.
            If unsuccessful, an appropriate ApiError is returned.


```js
agco_ats.api.v2.ContentReleases.get({}, context)
```

#### Input
* input `object`
  * limit `integer`: Optional. The page limit.  If not specified, the default page limit is 10.
  * offset `integer`: Optional. The page offset.  If not specified, the default page offset is 0.
  * deleted `boolean`: Optional. Filter by deleted.
  * releaseID `integer`: Optional. Filter by releaseID.
  * userId `integer`: Optional. Filter by UserID.
  * contentDefinitionID `integer`: Optional. Filter by ContentDefinitionID.
  * version `integer`: Optional. Filter by Version.

#### Output
* output [API.PagedResponse[ContentSubmission.Shared.BusinessEntities.ContentReleaseVersion]](#api.pagedresponse[contentsubmission.shared.businessentities.contentreleaseversion])

### ContentRelease_PostContentRelease
Creates a ContentReleaseVersion.  The body of the POST is the ContentReleaseVersion to create.
            The ContentReleaseId will be assigned on creation of the Job.  When successful, the response
            is the contentReleaseId.  If unsuccessful, an appropriate ApiError is returned.


```js
agco_ats.ContentRelease_PostContentRelease({
  "contentReleaseVersion": {}
}, context)
```

#### Input
* input `object`
  * contentReleaseVersion **required** [ContentSubmission.Shared.BusinessEntities.ContentReleaseVersion](#contentsubmission.shared.businessentities.contentreleaseversion)

#### Output
* output `integer`

### ContentRelease_DeleteContentReleaseVersionn
Deletes an ContentReleaseVersion. When successful, the response is empty.  If unsuccessful, an appropriate
            ApiError is returned.


```js
agco_ats.ContentRelease_DeleteContentReleaseVersionn({
  "ContentReleaseId": 0
}, context)
```

#### Input
* input `object`
  * ContentReleaseId **required** `integer`: The ID of the ContentReleaseVersion to delete

#### Output
*Output schema unknown*

### api.v2.ContentReleases.ContentReleaseId.get
Gets a ContentReleaseVersion by ID. When successful, the response is the requested ContentReleaseVersion.
            If unsuccessful, an appropriate ApiError is returned.


```js
agco_ats.api.v2.ContentReleases.ContentReleaseId.get({
  "ContentReleaseId": 0
}, context)
```

#### Input
* input `object`
  * ContentReleaseId **required** `integer`: The ID of the ContentReleaseVersion to get.

#### Output
* output [ContentSubmission.Shared.BusinessEntities.ContentReleaseVersion](#contentsubmission.shared.businessentities.contentreleaseversion)

### ContentRelease_PutContentDefinition
Updates a ContentReleaseVersion.  The body of the PUT is the updated ContentReleaseVersion.  
            When successful, the response is empty.  If unsuccessful, an appropriate ApiError is returned.


```js
agco_ats.ContentRelease_PutContentDefinition({
  "ContentReleaseId": 0,
  "contentReleaseVersion": {}
}, context)
```

#### Input
* input `object`
  * ContentReleaseId **required** `integer`: The ID of the ContentReleaseVersion to update
  * contentReleaseVersion **required** [ContentSubmission.Shared.BusinessEntities.ContentReleaseVersion](#contentsubmission.shared.businessentities.contentreleaseversion)

#### Output
*Output schema unknown*

### ContentSubmissionTypes_GetContentSubmissionTypes
No Documentation Found.


```js
agco_ats.ContentSubmissionTypes_GetContentSubmissionTypes({}, context)
```

#### Input
* input `object`
  * enabled `boolean`

#### Output
* output `array`
  * items [ContentSubmission.Shared.BusinessEntities.ContentSubmissionType](#contentsubmission.shared.businessentities.contentsubmissiontype)

### ContentSubmissionTypes_PostContentSubmissionType
No Documentation Found.


```js
agco_ats.ContentSubmissionTypes_PostContentSubmissionType({
  "contentSubmissionType": {
    "Name": "",
    "Description": ""
  }
}, context)
```

#### Input
* input `object`
  * contentSubmissionType **required** [ContentSubmission.Shared.BusinessEntities.ContentSubmissionType](#contentsubmission.shared.businessentities.contentsubmissiontype)

#### Output
* output `integer`

### ContentSubmissionTypes_DeleteContentSubmissionType
No Documentation Found.


```js
agco_ats.ContentSubmissionTypes_DeleteContentSubmissionType({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the Content Submission Type

#### Output
*Output schema unknown*

### ContentSubmissionTypes_GetContentSubmissionType
No Documentation Found.


```js
agco_ats.ContentSubmissionTypes_GetContentSubmissionType({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the Content Submission Type

#### Output
* output [ContentSubmission.Shared.BusinessEntities.ContentSubmissionType](#contentsubmission.shared.businessentities.contentsubmissiontype)

### ContentSubmissionTypes_PutContentSubmissionType
No Documentation Found.


```js
agco_ats.ContentSubmissionTypes_PutContentSubmissionType({
  "id": 0,
  "contentSubmissionType": {
    "Name": "",
    "Description": ""
  }
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the Content Submission Type
  * contentSubmissionType **required** [ContentSubmission.Shared.BusinessEntities.ContentSubmissionType](#contentsubmission.shared.businessentities.contentsubmissiontype)

#### Output
*Output schema unknown*

### ContentSubmissions_GetContentSubmissions
Gets a collection of ContentSubmissions. When successful, the response is a PagedResponse of ContentSubmissions.
            If unsuccessful, an appropriate ApiError is returned.


```js
agco_ats.ContentSubmissions_GetContentSubmissions({}, context)
```

#### Input
* input `object`
  * limit `integer`: Optional. The page limit.  If not specified, the default page limit is 10.
  * offset `integer`: Optional. The page offset.  If not specified, the default page offset is 0.
  * userID `integer`: Optional. Filter by UserID.
  * contentDefinitionID `integer`: Optional. Filter by ContentDefinitionID

#### Output
* output [API.PagedResponse[ContentSubmission.Shared.BusinessEntities.ContentSubmission]](#api.pagedresponse[contentsubmission.shared.businessentities.contentsubmission])

### ContentSubmissions_PostContentSubmission
Creates a ContentSubmission.  The body of the POST is the ContentSubmission to create.
            The ContentSubmissionID will be assigned on creation of the Job.  When successful, the response
            is the ContentSubmissionID.  If unsuccessful, an appropriate ApiError is returned.


```js
agco_ats.ContentSubmissions_PostContentSubmission({
  "contentSubmission": {}
}, context)
```

#### Input
* input `object`
  * contentSubmission **required** [ContentSubmission.Shared.BusinessEntities.ContentSubmission](#contentsubmission.shared.businessentities.contentsubmission)

#### Output
* output `integer`

### ContentSubmissions_DeleteContentSubmission
Deletes an ContentSubmission. When successful, the response is empty.  If unsuccessful, an appropriate
            ApiError is returned.


```js
agco_ats.ContentSubmissions_DeleteContentSubmission({
  "contentSubmissionID": 0
}, context)
```

#### Input
* input `object`
  * contentSubmissionID **required** `integer`: The ID of the ContentSubmission to delete

#### Output
*Output schema unknown*

### ContentSubmissions_GetContentSubmission
Gets a ContentSubmission by ID. When successful, the response is the requested ContentSubmission.
            If unsuccessful, an appropriate ApiError is returned.


```js
agco_ats.ContentSubmissions_GetContentSubmission({
  "contentSubmissionID": 0
}, context)
```

#### Input
* input `object`
  * contentSubmissionID **required** `integer`: The ID of the ContentSubmission to get.

#### Output
* output [ContentSubmission.Shared.BusinessEntities.ContentSubmission](#contentsubmission.shared.businessentities.contentsubmission)

### ContentSubmissions_PutContentSubmission
Updates a ContentSubmission.  The body of the PUT is the updated ContentSubmission.  
            When successful, the response is empty.  If unsuccessful, an appropriate ApiError is returned.


```js
agco_ats.ContentSubmissions_PutContentSubmission({
  "contentSubmissionID": 0,
  "contentSubmission": {}
}, context)
```

#### Input
* input `object`
  * contentSubmissionID **required** `integer`: The ID of the ContentSubmission to update
  * contentSubmission **required** [ContentSubmission.Shared.BusinessEntities.ContentSubmission](#contentsubmission.shared.businessentities.contentsubmission)

#### Output
*Output schema unknown*

### DealerByCountry_GetCountries
No Documentation Found.


```js
agco_ats.DealerByCountry_GetCountries({}, context)
```

#### Input
* input `object`
  * limit `integer`: Optional. The page limit. The default page limit is 10.
  * offset `integer`: Optional. The page offset. The default page offset is 0.

#### Output
* output [API.PagedResponse[DealerDB.Models.DealersPerCountry]](#api.pagedresponse[dealerdb.models.dealerspercountry])

### Dealers_GetDealers
No Documentation Found.


```js
agco_ats.Dealers_GetDealers({}, context)
```

#### Input
* input `object`
  * Brand `string`: The brand to filter by.
  * ShippingCountry `string`: The country to filter by.
  * DealerName `string`: The partial Dealer Name to filter by. Wildcard supported (*).
  * limit `integer`: Optional. The page limit. The default page limit is 10.
  * offset `integer`: Optional. The page offset. The default page offset is 0.

#### Output
* output [API.PagedResponse[DealerDB.Models.Dealer]](#api.pagedresponse[dealerdb.models.dealer])

### Dealers_GetDealerbyDealerCode
No Documentation Found.


```js
agco_ats.Dealers_GetDealerbyDealerCode({
  "DealerCode": ""
}, context)
```

#### Input
* input `object`
  * DealerCode **required** `string`: The Dealer Code to Search for

#### Output
* output [DealerDB.Models.Dealer](#dealerdb.models.dealer)

### LicenseActivations_Post
No Documentation Found.


```js
agco_ats.LicenseActivations_Post({
  "licenseActivationCreate": {
    "VoucherCode": "",
    "DealerCode": "",
    "PostalCode": "",
    "SystemInfo": ""
  }
}, context)
```

#### Input
* input `object`
  * licenseActivationCreate **required** [DealerDB.Models.LicenseActivationCreate](#dealerdb.models.licenseactivationcreate)

#### Output
* output [DealerDB.Models.LicenseActivation](#dealerdb.models.licenseactivation)

### LicenseActivations_PostRegisterEDTLite
No Documentation Found.


```js
agco_ats.LicenseActivations_PostRegisterEDTLite({
  "edtLiteRegistration": {
    "InstanceID": "",
    "VoucherCode": "",
    "ExpirationDate": ""
  }
}, context)
```

#### Input
* input `object`
  * edtLiteRegistration **required** [DealerDB.Models.EDTLiteRegistration](#dealerdb.models.edtliteregistration)

#### Output
* output `boolean`

### LicenseActivations_Put
No Documentation Found.


```js
agco_ats.LicenseActivations_Put({
  "ID": "",
  "licenseActivationUpdate": {
    "LicenseVersion": ""
  }
}, context)
```

#### Input
* input `object`
  * ID **required** `string`: The ID of the license.
  * licenseActivationUpdate **required** [DealerDB.Models.LicenseActivationUpdate](#dealerdb.models.licenseactivationupdate)

#### Output
* output [DealerDB.Models.LicenseActivation](#dealerdb.models.licenseactivation)

### LicenseActivations_PutConfirm
No Documentation Found.


```js
agco_ats.LicenseActivations_PutConfirm({
  "ID": "",
  "licenseActivationConfirm": {
    "LicenseVersion": ""
  }
}, context)
```

#### Input
* input `object`
  * ID **required** `string`: The ID of the license
  * licenseActivationConfirm **required** [DealerDB.Models.LicenseActivationConfirm](#dealerdb.models.licenseactivationconfirm)

#### Output
*Output schema unknown*

### api.v2.Licenses.get
No Documentation Found.


```js
agco_ats.api.v2.Licenses.get({}, context)
```

#### Input
* input `object`
  * VoucherCode `string`: Optional. Filter by VoucherCode
  * DealerCode `string`: Optional. Filter by DealerCode
  * Status `string` (values: Active, Inactive, All): Optional. Filter by Status.  By default only active licenses will be returned.
  * limit `integer`: Optional. The page limit. The default page limit is 10.
  * offset `integer`: Optional. The page offset. The default page offset is 0.

#### Output
* output [API.PagedResponse[DealerDB.Models.License]](#api.pagedresponse[dealerdb.models.license])

### api.v2.Licenses.ID.get
No Documentation Found.


```js
agco_ats.api.v2.Licenses.ID.get({
  "ID": ""
}, context)
```

#### Input
* input `object`
  * ID **required** `string`: The ID of the license to get.

#### Output
* output [DealerDB.Models.License](#dealerdb.models.license)

### Logs_GetLogs
No Documentation Found.


```js
agco_ats.Logs_GetLogs({}, context)
```

#### Input
* input `object`
  * limit `integer`: Optional. The page limit. The default page limit is 10.
  * offset `integer`: Optional. The page offset. The default page offset is 0.

#### Output
* output [API.PagedResponse[API.Models.Log]](#api.pagedresponse[api.models.log])

### Logs_PostLog
No Documentation Found.


```js
agco_ats.Logs_PostLog({
  "Message": ""
}, context)
```

#### Input
* input `object`
  * Message **required** `string`: Message to enter into the log

#### Output
* output `string`

### Logs_GetLog
No Documentation Found.


```js
agco_ats.Logs_GetLog({
  "ID": ""
}, context)
```

#### Input
* input `object`
  * ID **required** `string`: The Log ID

#### Output
* output [API.Models.Log](#api.models.log)

### Notifications_PostMail
No Documentation Found.


```js
agco_ats.Notifications_PostMail({
  "Notification": {
    "To_Addresses": [],
    "Subject": "",
    "MessageBody": "",
    "IsBodyHtml": true
  }
}, context)
```

#### Input
* input `object`
  * Notification **required** [API.Models.Notification](#api.models.notification)

#### Output
*Output schema unknown*

### api.v2.PackageTypes.get
No Documentation Found.


```js
agco_ats.api.v2.PackageTypes.get({}, context)
```

#### Input
* input `object`
  * limit `integer`: Optional. The page limit. The default page limit is 10.
  * offset `integer`: Optional. The page offset. The default page offset is 0.

#### Output
* output [API.PagedResponse[UpdateSystem.Models.PackageType]](#api.pagedresponse[updatesystem.models.packagetype])

### PackageTypes_Post
No Documentation Found.


```js
agco_ats.PackageTypes_Post({
  "PackageType": {
    "Description": ""
  }
}, context)
```

#### Input
* input `object`
  * PackageType **required** [UpdateSystem.Models.PackageType](#updatesystem.models.packagetype)

#### Output
* output `string`

### PackageTypes_Delete
No Documentation Found.


```js
agco_ats.PackageTypes_Delete({
  "ID": ""
}, context)
```

#### Input
* input `object`
  * ID **required** `string`: The Package Type ID

#### Output
*Output schema unknown*

### api.v2.PackageTypes.ID.get
No Documentation Found.


```js
agco_ats.api.v2.PackageTypes.ID.get({
  "ID": ""
}, context)
```

#### Input
* input `object`
  * ID **required** `string`: The Package Type ID

#### Output
* output [UpdateSystem.Models.PackageType](#updatesystem.models.packagetype)

### PackageTypes_Put
No Documentation Found.


```js
agco_ats.PackageTypes_Put({
  "ID": "",
  "PackageType": {
    "Description": ""
  }
}, context)
```

#### Input
* input `object`
  * ID **required** `string`: The ID of the Package Type
  * PackageType **required** [UpdateSystem.Models.PackageType](#updatesystem.models.packagetype)

#### Output
*Output schema unknown*

### PackageTypetoBundles_Delete
No Documentation Found.


```js
agco_ats.PackageTypetoBundles_Delete({
  "BundleID": "",
  "PackageTypeID": ""
}, context)
```

#### Input
* input `object`
  * BundleID **required** `string`: The BundleID
  * PackageTypeID **required** `string`: The PackageTypeID

#### Output
*Output schema unknown*

### PackageTypetoBundles_Get
No Documentation Found.


```js
agco_ats.PackageTypetoBundles_Get({}, context)
```

#### Input
* input `object`
  * BundleID `string`: Optional. Filter by BundleID.
  * limit `integer`: Optional. The page limit. The default page limit is 10.
  * offset `integer`: Optional. The page offset. The default page offset is 0.

#### Output
* output [API.PagedResponse[UpdateSystem.Models.PackageTypeIDtoBundle]](#api.pagedresponse[updatesystem.models.packagetypeidtobundle])

### PackageTypetoBundles_Post
No Documentation Found.


```js
agco_ats.PackageTypetoBundles_Post({
  "PackageTypeToBundle": {
    "BundleID": "",
    "PackageTypeID": "",
    "PackageVersion": 0
  }
}, context)
```

#### Input
* input `object`
  * PackageTypeToBundle **required** [UpdateSystem.Models.PackageTypeIDtoBundle](#updatesystem.models.packagetypeidtobundle)

#### Output
*Output schema unknown*

### PackageTypetoBundles_Put
No Documentation Found.


```js
agco_ats.PackageTypetoBundles_Put({
  "PackageTypeToBundle": {
    "BundleID": "",
    "PackageTypeID": "",
    "PackageVersion": 0
  }
}, context)
```

#### Input
* input `object`
  * PackageTypeToBundle **required** [UpdateSystem.Models.PackageTypeIDtoBundle](#updatesystem.models.packagetypeidtobundle)

#### Output
*Output schema unknown*

### Packages_GetPackages
No Documentation Found.


```js
agco_ats.Packages_GetPackages({}, context)
```

#### Input
* input `object`
  * limit `integer`: Optional. The page limit. The default page limit is 10.
  * offset `integer`: Optional. The page offset. The default page offset is 0.

#### Output
* output [API.PagedResponse[UpdateSystem.Models.Package]](#api.pagedresponse[updatesystem.models.package])

### Packages_PostPackage
No Documentation Found.


```js
agco_ats.Packages_PostPackage({
  "package": {
    "PackageTypeID": "",
    "Url": "",
    "CRC": "",
    "Version": 0,
    "Description": "",
    "ReleaseDate": ""
  }
}, context)
```

#### Input
* input `object`
  * package **required** [UpdateSystem.Models.Package](#updatesystem.models.package)

#### Output
* output `string`

### Packages_DeletePackage
No Documentation Found.


```js
agco_ats.Packages_DeletePackage({
  "ID": ""
}, context)
```

#### Input
* input `object`
  * ID **required** `string`: The Package ID to Delete

#### Output
*Output schema unknown*

### Packages_GetPackage
No Documentation Found.


```js
agco_ats.Packages_GetPackage({
  "ID": ""
}, context)
```

#### Input
* input `object`
  * ID **required** `string`: The Package ID to Search for

#### Output
* output [UpdateSystem.Models.Package](#updatesystem.models.package)

### Packages_PutPackage
No Documentation Found.


```js
agco_ats.Packages_PutPackage({
  "ID": "",
  "package": {
    "PackageTypeID": "",
    "Url": "",
    "CRC": "",
    "Version": 0,
    "Description": "",
    "ReleaseDate": ""
  }
}, context)
```

#### Input
* input `object`
  * ID **required** `string`: The unique ID of the Package
  * package **required** [UpdateSystem.Models.Package](#updatesystem.models.package)

#### Output
*Output schema unknown*

### Permissions_GetPermissions
No Documentation Found.


```js
agco_ats.Permissions_GetPermissions({}, context)
```

#### Input
* input `object`
  * limit `integer`: Optional. The page limit. The default page limit is 10.
  * offset `integer`: Optional. The page offset. The default page offset is 0.
  * name `string`: Filter by permission name. Supports ending wildcard (*). Optional.

#### Output
* output [API.PagedResponse[API.Models.Permission]](#api.pagedresponse[api.models.permission])

### Permissions_PostPermission
No Documentation Found.


```js
agco_ats.Permissions_PostPermission({
  "permission": {
    "Name": "",
    "DataRequired": ""
  }
}, context)
```

#### Input
* input `object`
  * permission **required** [API.Models.Permission](#api.models.permission)

#### Output
* output `integer`

### Permissions_DeletePermission
No Documentation Found.


```js
agco_ats.Permissions_DeletePermission({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Id of Permission

#### Output
*Output schema unknown*

### Permissions_GetPermission
No Documentation Found.


```js
agco_ats.Permissions_GetPermission({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Id of Permission

#### Output
* output [API.Models.Permission](#api.models.permission)

### Permissions_PutPermission
No Documentation Found.


```js
agco_ats.Permissions_PutPermission({
  "id": 0,
  "permission": {
    "Name": "",
    "DataRequired": ""
  }
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Id of Permission
  * permission **required** [API.Models.Permission](#api.models.permission)

#### Output
*Output schema unknown*

### PriorityPackages_GetPriorityPackages
No Documentation Found.


```js
agco_ats.PriorityPackages_GetPriorityPackages({}, context)
```

#### Input
* input `object`
  * ClientID `string`: Optional. Filter priority packages by ClientID.
  * Status `string` (values: Active, Completed, All): Optional. Filter returned packages by status. By default only active packages will be returned.
  * limit `integer`: Optional. The page limit. The default page limit is 10.
  * offset `integer`: Optional. The page offset. The default page offset is 0.

#### Output
* output [API.PagedResponse[UpdateSystem.Models.PriorityPackage]](#api.pagedresponse[updatesystem.models.prioritypackage])

### PriorityPackages_PostPriorityPackages
No Documentation Found.


```js
agco_ats.PriorityPackages_PostPriorityPackages({
  "Package": {
    "ClientID": "",
    "PackageID": ""
  }
}, context)
```

#### Input
* input `object`
  * Package **required** [UpdateSystem.Models.PriorityPackage](#updatesystem.models.prioritypackage)

#### Output
* output `string`

### PriorityPackages_DeletePriorityPackages
No Documentation Found.


```js
agco_ats.PriorityPackages_DeletePriorityPackages({
  "ID": ""
}, context)
```

#### Input
* input `object`
  * ID **required** `string`: The Priority Package ID

#### Output
*Output schema unknown*

### PriorityPackages_GetPriorityPackage
No Documentation Found.


```js
agco_ats.PriorityPackages_GetPriorityPackage({
  "ID": ""
}, context)
```

#### Input
* input `object`
  * ID **required** `string`: The Priority Package ID

#### Output
* output [UpdateSystem.Models.PriorityPackage](#updatesystem.models.prioritypackage)

### Release_GetReleases
Gets a collection of Release. When successful, the response is a PagedResponse of Release.
            If unsuccessful, an appropriate ApiError is returned.


```js
agco_ats.Release_GetReleases({}, context)
```

#### Input
* input `object`
  * limit `integer`: Optional. The page limit.  If not specified, the default page limit is 10.
  * offset `integer`: Optional. The page offset.  If not specified, the default page offset is 0.
  * visible `boolean`: Optional. Filter by visible.

#### Output
* output [API.PagedResponse[ContentSubmission.Shared.BusinessEntities.Release]](#api.pagedresponse[contentsubmission.shared.businessentities.release])

### Release_PostRelease
Creates a Release.  The body of the POST is the Release to create.
            The ReleaseId will be assigned on creation of the Job.  When successful, the response
            is the Release Id.  If unsuccessful, an appropriate ApiError is returned.


```js
agco_ats.Release_PostRelease({
  "release": {}
}, context)
```

#### Input
* input `object`
  * release **required** [ContentSubmission.Shared.BusinessEntities.Release](#contentsubmission.shared.businessentities.release)

#### Output
* output `integer`

### Release_GetRelease
Gets a Release by ID. When successful, the response is the requested Release.
            If unsuccessful, an appropriate ApiError is returned.


```js
agco_ats.Release_GetRelease({
  "ReleaseId": 0
}, context)
```

#### Input
* input `object`
  * ReleaseId **required** `integer`: The ID of the Release to get.

#### Output
* output [ContentSubmission.Shared.BusinessEntities.Release](#contentsubmission.shared.businessentities.release)

### Release_PutContentDefinition
Updates a Release.  The body of the PUT is the updated Release.  
            When successful, the response is empty.  If unsuccessful, an appropriate ApiError is returned.


```js
agco_ats.Release_PutContentDefinition({
  "releaseId": 0,
  "release": {}
}, context)
```

#### Input
* input `object`
  * releaseId **required** `integer`: The ID of the Release to update
  * release **required** [ContentSubmission.Shared.BusinessEntities.Release](#contentsubmission.shared.businessentities.release)

#### Output
*Output schema unknown*

### Reporting_BundleStatusSummary
No Documentation Found.


```js
agco_ats.Reporting_BundleStatusSummary({
  "BundleID": ""
}, context)
```

#### Input
* input `object`
  * BundleID **required** `string`: The BundleID
  * limit `integer`: Optional. The page limit. The default page limit is 10.
  * offset `integer`: Optional. The page offset. The default page offset is 0.

#### Output
* output [API.PagedResponse[UpdateSystem.Models.PackageStatusSummary]](#api.pagedresponse[updatesystem.models.packagestatussummary])

### Reporting_BundlesInUpdateGroup
No Documentation Found.


```js
agco_ats.Reporting_BundlesInUpdateGroup({
  "ID": "",
  "IncludeInactive": true
}, context)
```

#### Input
* input `object`
  * ID **required** `string`: The UpdateGroupID
  * IncludeInactive **required** `boolean`: Include Inactive Bundles (true|false)
  * limit `integer`: Optional. The page limit. The default page limit is 10.
  * offset `integer`: Optional. The page offset. The default page offset is 0.

#### Output
* output [API.PagedResponse[UpdateSystem.Models.Bundle]](#api.pagedresponse[updatesystem.models.bundle])

### Reporting_ClientInfo
No Documentation Found.


```js
agco_ats.Reporting_ClientInfo({
  "ClientID": ""
}, context)
```

#### Input
* input `object`
  * ClientID **required** `string`: The Client ID

#### Output
* output [UpdateSystem.Models.ClientInfo](#updatesystem.models.clientinfo)

### Reporting_CurrentPackagesInUpdateGroup
No Documentation Found.


```js
agco_ats.Reporting_CurrentPackagesInUpdateGroup({
  "ID": ""
}, context)
```

#### Input
* input `object`
  * ID **required** `string`: The UpdateGroupID
  * SubscriptionTypeFilter `string` (values: RequiredOnly, Default, All): Optional.  The subscription type filter to use.  By default the Default packages (Required and IncludeByDefault) will be returned.

#### Output
* output `array`
  * items [UpdateSystem.Models.Package](#updatesystem.models.package)

### Reporting_GetClient
No Documentation Found.


```js
agco_ats.Reporting_GetClient({
  "ID": ""
}, context)
```

#### Input
* input `object`
  * ID **required** `string`: The Client ID

#### Output
* output [UpdateSystem.Models.Client](#updatesystem.models.client)

### Reporting_GetSubscriptions
No Documentation Found.


```js
agco_ats.Reporting_GetSubscriptions({}, context)
```

#### Input
* input `object`
  * ClientID `string`: Optional. Filter by Client ID
  * UpdateGroupID `string`: Optional. Filter by Update Group ID
  * limit `integer`: Optional. The page limit. The default page limit is 10.
  * offset `integer`: Optional. The page offset. The default page offset is 0.

#### Output
* output [API.PagedResponse[UpdateSystem.Models.UpdateGroupClientRelationship]](#api.pagedresponse[updatesystem.models.updategroupclientrelationship])

### Reporting_PackageStatusSummary
No Documentation Found.


```js
agco_ats.Reporting_PackageStatusSummary({
  "PackageID": ""
}, context)
```

#### Input
* input `object`
  * PackageID **required** `string`: The Package ID

#### Output
* output [UpdateSystem.Models.PackageStatusSummary](#updatesystem.models.packagestatussummary)

### Reporting_RegisteredClients
No Documentation Found.


```js
agco_ats.Reporting_RegisteredClients({}, context)
```

#### Input
* input `object`
  * UpdateGroupID `string`: Optional. The Update Group ID. If not provided, all clients will be returned.
  * ClientID `string`: Optional. Filter where ClientID matches a value. Wildcards are supported (*).
  * Tag `string`: Optional. Filter where Tag matches a value. Wildcards are supported (*).
  * ReportResult `string`: Optional. Filter where ReportResult matches a value. Wildcards are supported (*).
  * ReportResultIsValid `boolean`: Optional. When 'true' filters results where ReportResult equals ReportResultExpected.  When 'false' filters results where ValueToValidate does not equal ReportResults.
  * ReportValue `string`: Optional. Filter where ReportValue matches a value. Wildcards are supported (*).
  * LastCheckInBefore `string`: Optional. Filter where LastCheckIn occured before the provided date.
  * LastCheckInAfter `string`: Optional. Filter where LastCheckIn occured after the provided date.
  * OrderBy `string`: Optional. Specify the order in which results should be returned. Use this format: [FieldName] [ASC|ASCENDING|DESC|DESCENDING],...   
  * limit `integer`: Optional. The page limit. The default page limit is 10.
  * offset `integer`: Optional. The page offset. The default page offset is 0.

#### Output
* output [API.PagedResponse[UpdateSystem.Models.ClientStatus,UpdateSystem.Models.PagedClientStatusMetadata]](#api.pagedresponse[updatesystem.models.clientstatus,updatesystem.models.pagedclientstatusmetadata])

### Reporting_UpdateGroups
No Documentation Found.


```js
agco_ats.Reporting_UpdateGroups({}, context)
```

#### Input
* input `object`
  * limit `integer`: Optional. The page limit. The default page limit is 10.
  * offset `integer`: Optional. The page offset. The default page offset is 0.

#### Output
* output [API.PagedResponse[UpdateSystem.Models.UpdateGroup]](#api.pagedresponse[updatesystem.models.updategroup])

### Reporting_UpdateMetrics
No Documentation Found.


```js
agco_ats.Reporting_UpdateMetrics({
  "UpdateGroupID": ""
}, context)
```

#### Input
* input `object`
  * UpdateGroupID **required** `string`: The UpdateType in which clients must be for the report to include them.
  * bundleNumber `integer`: Optional. Tells us which chart to show based upon filter.

#### Output
* output [UpdateSystem.Models.UpdateMetricsData](#updatesystem.models.updatemetricsdata)

### Roles_GetRoles
No Documentation Found.


```js
agco_ats.Roles_GetRoles({}, context)
```

#### Input
* input `object`
  * limit `integer`: Optional. The page limit. The default page limit is 10.
  * offset `integer`: Optional. The page offset. The default page offset is 0.
  * name `string`: Optional. Finds a role with the given name.

#### Output
* output [API.PagedResponse[API.Models.Role]](#api.pagedresponse[api.models.role])

### Roles_PostRole
No Documentation Found.


```js
agco_ats.Roles_PostRole({
  "role": {
    "Name": "",
    "Description": ""
  }
}, context)
```

#### Input
* input `object`
  * role **required** [API.Models.Role](#api.models.role)

#### Output
* output `integer`

### Roles_DeleteRole
No Documentation Found.


```js
agco_ats.Roles_DeleteRole({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The role's id

#### Output
*Output schema unknown*

### Roles_GetRole
No Documentation Found.


```js
agco_ats.Roles_GetRole({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The role's id

#### Output
* output [API.Models.Role](#api.models.role)

### Roles_PutRole
No Documentation Found.


```js
agco_ats.Roles_PutRole({
  "id": 0,
  "role": {
    "Name": "",
    "Description": ""
  }
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The role's id
  * role **required** [API.Models.Role](#api.models.role)

#### Output
*Output schema unknown*

### Roles_GetRolePermissions
No Documentation Found.


```js
agco_ats.Roles_GetRolePermissions({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The id of the Role
  * name `string`: Filter by permission name. Optional.
  * limit `integer`: Optional. The page limit. The default page limit is 10.
  * offset `integer`: Optional. The page offset. The default page offset is 0.

#### Output
* output [API.PagedResponse[API.Models.Permission]](#api.pagedresponse[api.models.permission])

### Roles_PutRolePermissions
No Documentation Found.


```js
agco_ats.Roles_PutRolePermissions({
  "id": 0,
  "permissionChanges": []
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The id of the Role
  * permissionChanges **required** `array`
    * items [API.Models.RolePermissionChange](#api.models.rolepermissionchange)

#### Output
*Output schema unknown*

### UserPermissions_GetUsers
No Documentation Found.


```js
agco_ats.UserPermissions_GetUsers({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The Role's ID
  * limit `integer`: The page limit. The default page limit is 10.
  * offset `integer`: The page offset. The default page offset is 0.

#### Output
* output [API.PagedResponse[API.Models.User]](#api.pagedresponse[api.models.user])

### api.v2.Roles.id.Users.put
No Documentation Found.


```js
agco_ats.api.v2.Roles.id.Users.put({
  "id": 0,
  "roleChanges": []
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The Role's ID
  * roleChanges **required** `array`
    * items [API.Models.RoleUserChange](#api.models.roleuserchange)

#### Output
*Output schema unknown*

### UpdateGroupClientRelationships_GetSubscriptions
No Documentation Found.


```js
agco_ats.UpdateGroupClientRelationships_GetSubscriptions({}, context)
```

#### Input
* input `object`
  * ClientID `string`: Optional. Filter by Client ID
  * UpdateGroupID `string`: Optional. Filter by Update Group ID
  * limit `integer`: Optional. The page limit. The default page limit is 10.
  * offset `integer`: Optional. The page offset. The default page offset is 0.

#### Output
* output [API.PagedResponse[UpdateSystem.Models.UpdateGroupClientRelationship]](#api.pagedresponse[updatesystem.models.updategroupclientrelationship])

### UpdateGroupClientRelationships_PostSubscription
No Documentation Found.


```js
agco_ats.UpdateGroupClientRelationships_PostSubscription({
  "subscription": {
    "UpdateGroupID": "",
    "ClientID": ""
  }
}, context)
```

#### Input
* input `object`
  * subscription **required** [UpdateSystem.Models.UpdateGroupClientRelationship](#updatesystem.models.updategroupclientrelationship)

#### Output
* output `string`

### UpdateGroupClientRelationships_PutSubscriptionByClientIDUpdateGroupID
No Documentation Found.


```js
agco_ats.UpdateGroupClientRelationships_PutSubscriptionByClientIDUpdateGroupID({
  "ClientID": "",
  "UpdateGroupID": "",
  "Active": true
}, context)
```

#### Input
* input `object`
  * ClientID **required** `string`: The Client ID.  This can be a client ID that has not been registered yet.
  * UpdateGroupID **required** `string`: The Update Group ID
  * Active **required** `boolean`: Subscribe the client to the Update Group.

#### Output
*Output schema unknown*

### UpdateGroupClientRelationships_GetSubscription
No Documentation Found.


```js
agco_ats.UpdateGroupClientRelationships_GetSubscription({
  "RelationshipID": ""
}, context)
```

#### Input
* input `object`
  * RelationshipID **required** `string`: The RelationshipID.

#### Output
* output [UpdateSystem.Models.UpdateGroupClientRelationship](#updatesystem.models.updategroupclientrelationship)

### UpdateGroupClientRelationships_PutSubscription
No Documentation Found.


```js
agco_ats.UpdateGroupClientRelationships_PutSubscription({
  "RelationshipID": "",
  "subscription": {
    "UpdateGroupID": "",
    "ClientID": ""
  }
}, context)
```

#### Input
* input `object`
  * RelationshipID **required** `string`: The relationship id of the UpdateGroupClientRelationship
  * subscription **required** [UpdateSystem.Models.UpdateGroupClientRelationship](#updatesystem.models.updategroupclientrelationship)

#### Output
*Output schema unknown*

### UpdateGroupSubscriptions_GetUpdateGroupSubscriptions
No Documentation Found.


```js
agco_ats.UpdateGroupSubscriptions_GetUpdateGroupSubscriptions({}, context)
```

#### Input
* input `object`
  * UpdateGroupID `string`: Optional. Filter by Update Group ID.
  * PackageTypeID `string`: Optional. Filter by Package Type ID.
  * ClientID `string`: Optional. Filter by Client ID.
  * limit `integer`: Optional. The page limit. The default page limit is 10.
  * offset `integer`: Optional. The page offset. The default page offset is 0.

#### Output
* output [API.PagedResponse[UpdateSystem.Models.UpdateGroupSubscription]](#api.pagedresponse[updatesystem.models.updategroupsubscription])

### UpdateGroupSubscriptions_PostUpdateGroupSubscription
No Documentation Found.


```js
agco_ats.UpdateGroupSubscriptions_PostUpdateGroupSubscription({
  "UpdateGroupSubscription": {
    "UpdateGroupID": "",
    "PackageTypeID": "",
    "ClientID": "",
    "Include": true
  }
}, context)
```

#### Input
* input `object`
  * UpdateGroupSubscription **required** [UpdateSystem.Models.UpdateGroupSubscription](#updatesystem.models.updategroupsubscription)

#### Output
* output `integer`

### UpdateGroupSubscriptions_DeleteUpdateGroupSubscription
No Documentation Found.


```js
agco_ats.UpdateGroupSubscriptions_DeleteUpdateGroupSubscription({
  "UpdateGroupSubscriptionID": 0
}, context)
```

#### Input
* input `object`
  * UpdateGroupSubscriptionID **required** `integer`: The Update Group Subscription ID to delete

#### Output
*Output schema unknown*

### UpdateGroupSubscriptions_GetUpdateGroupSubscription
No Documentation Found.


```js
agco_ats.UpdateGroupSubscriptions_GetUpdateGroupSubscription({
  "UpdateGroupSubscriptionID": 0
}, context)
```

#### Input
* input `object`
  * UpdateGroupSubscriptionID **required** `integer`: The Update Group Subscription ID

#### Output
* output [UpdateSystem.Models.UpdateGroupSubscription](#updatesystem.models.updategroupsubscription)

### UpdateGroupSubscriptions_PutUpdateGroupSubscription
No Documentation Found.


```js
agco_ats.UpdateGroupSubscriptions_PutUpdateGroupSubscription({
  "UpdateGroupSubscriptionID": 0,
  "UpdateGroupSubscription": {
    "UpdateGroupID": "",
    "PackageTypeID": "",
    "ClientID": "",
    "Include": true
  }
}, context)
```

#### Input
* input `object`
  * UpdateGroupSubscriptionID **required** `integer`: The Update Group Subscription ID
  * UpdateGroupSubscription **required** [UpdateSystem.Models.UpdateGroupSubscription](#updatesystem.models.updategroupsubscription)

#### Output
*Output schema unknown*

### api.v2.UpdateGroups.get
No Documentation Found.


```js
agco_ats.api.v2.UpdateGroups.get({}, context)
```

#### Input
* input `object`
  * limit `integer`: Optional. The page limit. The default page limit is 10.
  * offset `integer`: Optional. The page offset. The default page offset is 0.

#### Output
* output [API.PagedResponse[UpdateSystem.Models.UpdateGroup]](#api.pagedresponse[updatesystem.models.updategroup])

### UpdateGroups_Post
No Documentation Found.


```js
agco_ats.UpdateGroups_Post({
  "updateGroup": {
    "Description": "",
    "UpdateType": ""
  }
}, context)
```

#### Input
* input `object`
  * updateGroup **required** [UpdateSystem.Models.UpdateGroup](#updatesystem.models.updategroup)

#### Output
* output `string`

### UpdateGroups_Delete
No Documentation Found.


```js
agco_ats.UpdateGroups_Delete({
  "ID": ""
}, context)
```

#### Input
* input `object`
  * ID **required** `string`: The ID of the Update Group to Delete

#### Output
*Output schema unknown*

### api.v2.UpdateGroups.ID.get
No Documentation Found.


```js
agco_ats.api.v2.UpdateGroups.ID.get({
  "ID": ""
}, context)
```

#### Input
* input `object`
  * ID **required** `string`: The ID of the Update Group

#### Output
* output [UpdateSystem.Models.UpdateGroup](#updatesystem.models.updategroup)

### UpdateGroups_Put
No Documentation Found.


```js
agco_ats.UpdateGroups_Put({
  "ID": "",
  "updateGroup": {
    "Description": "",
    "UpdateType": ""
  }
}, context)
```

#### Input
* input `object`
  * ID **required** `string`: ID of the Update Group
  * updateGroup **required** [UpdateSystem.Models.UpdateGroup](#updatesystem.models.updategroup)

#### Output
*Output schema unknown*

### UpdateGroups_GetUpdateGroupBundles
No Documentation Found.


```js
agco_ats.UpdateGroups_GetUpdateGroupBundles({
  "ID": "",
  "IncludeInactive": true
}, context)
```

#### Input
* input `object`
  * ID **required** `string`: The UpdateGroupID
  * IncludeInactive **required** `boolean`: Include Inactive Bundles (true|false)
  * limit `integer`: Optional. The page limit. The default page limit is 10.
  * offset `integer`: Optional. The page offset. The default page offset is 0.

#### Output
* output [API.PagedResponse[UpdateSystem.Models.Bundle]](#api.pagedresponse[updatesystem.models.bundle])

### UpdateSystem_GetCheckin
No Documentation Found.


```js
agco_ats.UpdateSystem_GetCheckin({
  "ClientID": "",
  "Preview": true
}, context)
```

#### Input
* input `object`
  * ClientID **required** `string`: The Client ID to check-in.  If this is a new client ID it will be added to Clients.
  * Preview **required** `boolean`: Get Pkgs w\o updating Datetimes(true|false)

#### Output
* output [UpdateSystem.Models.CheckinResult](#updatesystem.models.checkinresult)

### UserContentDefinitions_GetUserContentDefinitions
Gets a collection of UserContentDefinitions. When successful, the response is a PagedResponse of UserContentDefinitions.
            If unsuccessful, an appropriate ApiError is returned.


```js
agco_ats.UserContentDefinitions_GetUserContentDefinitions({}, context)
```

#### Input
* input `object`
  * limit `integer`: Optional. The page limit.  If not specified, the default page limit is 10.
  * offset `integer`: Optional. The page offset.  If not specified, the default page offset is 0.
  * userID `integer`: Optional. Filter by UserID.
  * contentDefinitionID `integer`: Optional. Filter by ContentDefinitionID

#### Output
* output [API.PagedResponse[ContentSubmission.Shared.BusinessEntities.UserContentDefinition]](#api.pagedresponse[contentsubmission.shared.businessentities.usercontentdefinition])

### UserContentDefinitions_PostUserContentDefinition
Creates a UserContentDefinition.  The body of the POST is the UserContentDefinition to create.
            The UserContentDefinitionID will be assigned on creation of the Job.  When successful, the response
            is the UserContentDefinitionID.  If unsuccessful, an appropriate ApiError is returned.


```js
agco_ats.UserContentDefinitions_PostUserContentDefinition({
  "userContentDefinition": {}
}, context)
```

#### Input
* input `object`
  * userContentDefinition **required** [ContentSubmission.Shared.BusinessEntities.UserContentDefinition](#contentsubmission.shared.businessentities.usercontentdefinition)

#### Output
* output `integer`

### UserContentDefinitions_DeleteUserContentDefinition
Deletes an UserContentDefinition. When successful, the response is empty.  If unsuccessful, an appropriate
            ApiError is returned.


```js
agco_ats.UserContentDefinitions_DeleteUserContentDefinition({
  "userContentDefinitionID": 0
}, context)
```

#### Input
* input `object`
  * userContentDefinitionID **required** `integer`: The ID of the UserContentDefinition to delete

#### Output
*Output schema unknown*

### UserContentDefinitions_GetUserContentDefinition
Gets a UserContentDefinition by ID. When successful, the response is the requested UserContentDefinition.
            If unsuccessful, an appropriate ApiError is returned.


```js
agco_ats.UserContentDefinitions_GetUserContentDefinition({
  "userContentDefinitionID": 0
}, context)
```

#### Input
* input `object`
  * userContentDefinitionID **required** `integer`: The ID of the UserContentDefinition to get.

#### Output
* output [ContentSubmission.Shared.BusinessEntities.UserContentDefinition](#contentsubmission.shared.businessentities.usercontentdefinition)

### api.v2.Users.get
No Documentation Found.


```js
agco_ats.api.v2.Users.get({}, context)
```

#### Input
* input `object`
  * username `string`: Optional. Search by username. Supports beginning and ending wildcards (*).
  * email `string`: Optional. Search by email. Supports beginning and ending wildcards (*).
  * name `string`: Optional. Search by name. Supports beginning and ending wildcards (*).
  * limit `integer`: Optional. The page limit. The default page limit is 10.
  * offset `integer`: Optional. The page offset. The default page offset is 0.

#### Output
* output [API.PagedResponse[API.Models.User]](#api.pagedresponse[api.models.user])

### Users_Post
No Documentation Found.


```js
agco_ats.Users_Post({
  "user": {}
}, context)
```

#### Input
* input `object`
  * user **required** [API.Models.User](#api.models.user)

#### Output
* output [API.Models.User](#api.models.user)

### Users_GetCurrentUser
No Documentation Found.


```js
agco_ats.Users_GetCurrentUser(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [API.Models.User](#api.models.user)

### Users_PutCurrentUser
No Documentation Found.


```js
agco_ats.Users_PutCurrentUser({
  "user": {}
}, context)
```

#### Input
* input `object`
  * user **required** [API.Models.User](#api.models.user)

#### Output
*Output schema unknown*

### api.v2.Users.Current.Permissions.get
No Documentation Found.


```js
agco_ats.api.v2.Users.Current.Permissions.get({}, context)
```

#### Input
* input `object`
  * Permission `string`: Filter by permission name. Supports ending wildcard (*). Optional.
  * limit `integer`: The page limit. The default page limit is 10.
  * offset `integer`: The page offset. The default page offset is 0.

#### Output
* output [API.PagedResponse[API.Models.UserEffectivePermission]](#api.pagedresponse[api.models.usereffectivepermission])

### UserPermissions_GetCurrentUserRoles
No Documentation Found.


```js
agco_ats.UserPermissions_GetCurrentUserRoles({}, context)
```

#### Input
* input `object`
  * Role `string`: Filter by role name. Supports ending wildcard (*). Optional.
  * limit `integer`: The page limit. The default page limit is 10.
  * offset `integer`: The page offset. The default page offset is 0.

#### Output
* output [API.PagedResponse[API.Models.Role]](#api.pagedresponse[api.models.role])

### Users_Delete
No Documentation Found.


```js
agco_ats.Users_Delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The user id

#### Output
*Output schema unknown*

### api.v2.Users.id.get
No Documentation Found.


```js
agco_ats.api.v2.Users.id.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The user ID

#### Output
* output [API.Models.User](#api.models.user)

### Users_Put
No Documentation Found.


```js
agco_ats.Users_Put({
  "id": 0,
  "user": {}
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The user id
  * user **required** [API.Models.User](#api.models.user)

#### Output
*Output schema unknown*

### api.v2.Users.id.Permissions.get
No Documentation Found.


```js
agco_ats.api.v2.Users.id.Permissions.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The User's ID
  * Permission `string`: Filter by permission name. Supports ending wildcard (*). Optional.
  * limit `integer`: The page limit. The default page limit is 10.
  * offset `integer`: The page offset. The default page offset is 0.

#### Output
* output [API.PagedResponse[API.Models.UserEffectivePermission]](#api.pagedresponse[api.models.usereffectivepermission])

### UserPermissions_GetRoles
No Documentation Found.


```js
agco_ats.UserPermissions_GetRoles({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The User's ID
  * Role `string`: Filter by role name. Supports ending wildcard (*). Optional.
  * limit `integer`: The page limit. The default page limit is 10.
  * offset `integer`: The page offset. The default page offset is 0.

#### Output
* output [API.PagedResponse[API.Models.Role]](#api.pagedresponse[api.models.role])

### api.v2.Users.id.Roles.put
No Documentation Found.


```js
agco_ats.api.v2.Users.id.Roles.put({
  "id": 0,
  "roleChanges": []
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The User's ID
  * roleChanges **required** `array`
    * items [API.Models.UserRoleChange](#api.models.userrolechange)

#### Output
*Output schema unknown*

### VoucherHistory_GetVoucherHistory
No Documentation Found.


```js
agco_ats.VoucherHistory_GetVoucherHistory({}, context)
```

#### Input
* input `object`
  * VoucherCode `string`: Optional. Filter history data by Voucher Code.
  * ChangedBefore `string`: Optional. Filter history data where changes occured before provided date.
  * ChangedAfter `string`: Optional. Filter history data where changes occured after provided date.
  * limit `integer`: Optional. The page limit. The default page limit is 10.
  * offset `integer`: Optional. The page offset. The default page offset is 0.

#### Output
* output [API.PagedResponse[DealerDB.Models.VoucherHistory]](#api.pagedresponse[dealerdb.models.voucherhistory])

### api.v2.Vouchers.get
No Documentation Found.


```js
agco_ats.api.v2.Vouchers.get({}, context)
```

#### Input
* input `object`
  * Type `string` (values: Commercial, Internal, Temporary): Optional. Filter vouchers by Type
  * DealerCode `string`: Optional. Filter vouchers by DealerCode
  * LicenseTo `string`: Optional. Filter vouchers by LicenseTo. Wildcard supported (*).
  * Purpose `string`: Optional. Filter vouchers by Purpose. Wildcard supported (*).
  * OrderNumber `string`: Optional. Filter vouchers by OrderNumber
  * Email `string`: Optional. Filter vouchers by Email. Wildcard supported (*).
  * ModifiedBy `string`: Optional. Filter vouchers by ModifiedBy
  * CreatedAfter `string`: Optional. Filter vouchers by CreatedDate
  * CreatedBefore `string`: Optional. Filter vouchers by CreatedDate
  * PunchedAfter `string`: Optional. Filter vouchers by PunchedDate
  * PunchedBefore `string`: Optional. Filter vouchers by PunchedDate
  * Punched `boolean`: Optional. Filter vouchers by Punched status
  * ExpirationAfter `string`: Optional. Filter vouchers by ExpirationDate
  * ExpirationBefore `string`: Optional. Filter vouchers by ExpirationDate
  * Deleted `string` (values: NotDeleted, Deleted, All): Optional. Filter vouchers by Deleted state. By default only vouchers that are not deleted are returned.
  * limit `integer`: Optional. The page limit. The default page limit is 10.
  * offset `integer`: Optional. The page offset. The default page offset is 0.

#### Output
* output [API.PagedResponse[DealerDB.Models.Voucher]](#api.pagedresponse[dealerdb.models.voucher])

### Vouchers_Post
No Documentation Found.


```js
agco_ats.Vouchers_Post({
  "voucher": {}
}, context)
```

#### Input
* input `object`
  * voucher **required** [DealerDB.Models.Voucher](#dealerdb.models.voucher)

#### Output
* output `string`

### Vouchers_Delete
No Documentation Found.


```js
agco_ats.Vouchers_Delete({
  "VoucherCode": ""
}, context)
```

#### Input
* input `object`
  * VoucherCode **required** `string`: The voucher code of the voucher to delete.

#### Output
*Output schema unknown*

### api.v2.Vouchers.VoucherCode.get
No Documentation Found.


```js
agco_ats.api.v2.Vouchers.VoucherCode.get({
  "VoucherCode": ""
}, context)
```

#### Input
* input `object`
  * VoucherCode **required** `string`: The voucher code of the voucher to get.
  * Deleted `string` (values: NotDeleted, Deleted, All): Optional. Filter vouchers by Deleted state. By default only vouchers that are not deleted are returned.

#### Output
* output [DealerDB.Models.Voucher](#dealerdb.models.voucher)

### Vouchers_Put
No Documentation Found.


```js
agco_ats.Vouchers_Put({
  "VoucherCode": "",
  "voucher": {}
}, context)
```

#### Input
* input `object`
  * VoucherCode **required** `string`: The voucher code of the voucher to update.
  * voucher **required** [DealerDB.Models.Voucher](#dealerdb.models.voucher)

#### Output
*Output schema unknown*

### Vouchers_GetVoucherHistory
No Documentation Found.


```js
agco_ats.Vouchers_GetVoucherHistory({
  "VoucherCode": ""
}, context)
```

#### Input
* input `object`
  * VoucherCode **required** `string`: The voucher code to get history for.
  * limit `integer`: Optional. The page limit. The default page limit is 10.
  * offset `integer`: Optional. The page offset. The default page offset is 0.

#### Output
* output [API.PagedResponse[DealerDB.Models.VoucherHistory]](#api.pagedresponse[dealerdb.models.voucherhistory])

### Activities_GetActivities
Gets a collection of Activities. When successful, the response is a PagedResponse of Activities.  
            If unsuccessful, an appropriate ApiError is returned.


```js
agco_ats.Activities_GetActivities({}, context)
```

#### Input
* input `object`
  * limit `integer`: Optional. The page limit.  If not specified, the default page limit is 10.
  * offset `integer`: Optional. The page offset.  If not specified, the default page offset is 0.
  * isIncludeDeleted `boolean`: Does it include deleted activity, or not

#### Output
* output [API.PagedResponse[BuildSystem.Shared.DTO.Activity]](#api.pagedresponse[buildsystem.shared.dto.activity])

### Activities_PostActivity
Creates an Activity.  The body of the POST is the Activity to create.  The ActivityID will be assigned
            on creation of the Activity.  When successful, the response is the ActivityID.  If unsuccessful, an 
            appropriate ApiError is returned.


```js
agco_ats.Activities_PostActivity({
  "activity": {}
}, context)
```

#### Input
* input `object`
  * activity **required** [BuildSystem.Shared.DTO.Activity](#buildsystem.shared.dto.activity)

#### Output
* output `integer`

### Activities_DeleteActivity
Deletes an Activity. When successful, the response is empty.  If unsuccessful, an appropriate
            ApiError is returned.


```js
agco_ats.Activities_DeleteActivity({
  "activityID": 0
}, context)
```

#### Input
* input `object`
  * activityID **required** `integer`: The id of the activity to delete

#### Output
*Output schema unknown*

### Activities_GetActivity
Gets an Activity by ID. When successful, the response is the requested Activity.  If unsuccessful,
            an appropriate ApiError is returned.


```js
agco_ats.Activities_GetActivity({
  "activityID": 0
}, context)
```

#### Input
* input `object`
  * activityID **required** `integer`: The ID of the Activity to get.
  * isIncludeDeleted `boolean`: Does it include deleted activity, or not

#### Output
* output [BuildSystem.Shared.DTO.Activity](#buildsystem.shared.dto.activity)

### Activities_PutActivity
Updates an Activity.  The body of the PUT is the updated Activity.  When successful, the response is empty.
            If unsuccessful, an appropriate ApiError is returned.


```js
agco_ats.Activities_PutActivity({
  "activityID": 0,
  "activity": {}
}, context)
```

#### Input
* input `object`
  * activityID **required** `integer`: The id of the activity to update
  * activity **required** [BuildSystem.Shared.DTO.Activity](#buildsystem.shared.dto.activity)

#### Output
*Output schema unknown*

### ActivityRuns_GetActivityRuns
Gets a collection of ActivityRuns. When successful, the response is a PagedResponse of ActivityRuns.  
            If unsuccessful, an appropriate ApiError is returned.


```js
agco_ats.ActivityRuns_GetActivityRuns({}, context)
```

#### Input
* input `object`
  * limit `integer`: Optional. The page limit.  If not specified, the default page limit is 10.
  * offset `integer`: Optional. The page offset.  If not specified, the default page offset is 0.
  * status `string` (values: Ready, InProgress, Succeeded, Cancelled, Failed): Optional. Filter activity runs by status.  Value should be a comma separated list of status to include.

#### Output
* output [API.PagedResponse[BuildSystem.Shared.DTO.ActivityRun]](#api.pagedresponse[buildsystem.shared.dto.activityrun])

### ActivityRuns_GetActivityRun
Gets an ActivityRun by ID. When successful, the response is the requested ActivityRun.  If unsuccessful,
            an appropriate ApiError is returned.


```js
agco_ats.ActivityRuns_GetActivityRun({
  "activityRunID": 0
}, context)
```

#### Input
* input `object`
  * activityRunID **required** `integer`: The ID of the ActivityRun to get.

#### Output
* output [BuildSystem.Shared.DTO.ActivityRun](#buildsystem.shared.dto.activityrun)

### ActivityRuns_PutActivityRun
Updates the ActivityRunStatus of an ActivityRun.  The body of the PUT is the updated ActivityRunStatus.
            When successful, the response is empty.  If unsuccessful, an appropriate ApiError is returned.


```js
agco_ats.ActivityRuns_PutActivityRun({
  "activityRunID": 0,
  "activityRun": {
    "Status": {}
  }
}, context)
```

#### Input
* input `object`
  * activityRunID **required** `integer`: The ID of the ActivityRun to update ActivityRunStatus for.
  * activityRun **required** [BuildSystem.Shared.DTO.ActivityRun](#buildsystem.shared.dto.activityrun)

#### Output
*Output schema unknown*

### ActivityRuns_GetActivityRunStatus
Gets the ActivityRunStatus of an ActivityRun.  When successful, the response is the requested ActivityRunStatus.
            If unsuccessful, an appropriate ApiError is returned.


```js
agco_ats.ActivityRuns_GetActivityRunStatus({
  "activityRunID": 0
}, context)
```

#### Input
* input `object`
  * activityRunID **required** `integer`: The ID of the ActivityRun to get ActivityRunStatus for.

#### Output
* output [BuildSystem.Shared.DTO.ActivityRunStatus](#buildsystem.shared.dto.activityrunstatus)

### ActivityRuns_PutActivityRunStatus
Updates the ActivityRunStatus of an ActivityRun.  The body of the PUT is the updated ActivityRunStatus.
            When successful, the response is empty.  If unsuccessful, an appropriate ApiError is returned.


```js
agco_ats.ActivityRuns_PutActivityRunStatus({
  "activityRunID": 0,
  "activityRunStatus": {}
}, context)
```

#### Input
* input `object`
  * activityRunID **required** `integer`: The ID of the ActivityRun to update ActivityRunStatus for.
  * activityRunStatus **required** [BuildSystem.Shared.DTO.ActivityRunStatus](#buildsystem.shared.dto.activityrunstatus)

#### Output
*Output schema unknown*

### Agents_GetAgents
Gets a collection of Agents. When successful, the response is a PagedResponse of Agents.  
            If unsuccessful, an appropriate ApiError is returned.


```js
agco_ats.Agents_GetAgents({}, context)
```

#### Input
* input `object`
  * limit `integer`: Optional. The page limit.  If not specified, the default page limit is 10.
  * offset `integer`: Optional. The page offset.  If not specified, the default page offset is 0.

#### Output
* output [API.PagedResponse[BuildSystem.Shared.DTO.Agent]](#api.pagedresponse[buildsystem.shared.dto.agent])

### Agents_PostAgent
Creates an Agent.  The body of the POST is the Agent to create.  The AgentID will be assigned
            on creation of the Agent.  When successful, the response is the AgentID.  If unsuccessful, an
            appropriate ApiError is returned.


```js
agco_ats.Agents_PostAgent({
  "agent": {
    "UserID": 0,
    "MachineName": "",
    "Status": {
      "Online": true
    },
    "KeepAliveInterval": 0
  }
}, context)
```

#### Input
* input `object`
  * agent **required** [BuildSystem.Shared.DTO.Agent](#buildsystem.shared.dto.agent)

#### Output
* output `integer`

### Agents_GetCurrentAgentAsync
Gets the Agent associated with the current user. When successful, the response is the requested Agent.  If unsuccessful,
            an appropriate ApiError is returned.


```js
agco_ats.Agents_GetCurrentAgentAsync(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [BuildSystem.Shared.DTO.Agent](#buildsystem.shared.dto.agent)

### Agents_GetCurrentAgentActivityRun
Gets the activity run assigned to an agent.  When successful, the response is the ActivityRun
            assigned to the Agent.  If unsuccessful, an appropriate ApiError is returned.


```js
agco_ats.Agents_GetCurrentAgentActivityRun(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [BuildSystem.Shared.DTO.ActivityRun](#buildsystem.shared.dto.activityrun)

### Agents_DeleteAgent
Deletes an Agent. When successful, the response is empty.  If unsuccessful, an appropriate
            ApiError is returned.


```js
agco_ats.Agents_DeleteAgent({
  "agentID": 0
}, context)
```

#### Input
* input `object`
  * agentID **required** `integer`: The id of the Agent to delete.

#### Output
*Output schema unknown*

### Agents_GetAgentAsync
Gets an Agent by ID. When successful, the response is the requested Agent.  If unsuccessful,
            an appropriate ApiError is returned.


```js
agco_ats.Agents_GetAgentAsync({
  "agentID": 0
}, context)
```

#### Input
* input `object`
  * agentID **required** `integer`: The id of the Agent to get.

#### Output
* output [BuildSystem.Shared.DTO.Agent](#buildsystem.shared.dto.agent)

### Agents_PutAgent
Updates an Agent.  The body of the PUT is the updated Agent.  When successful, the response is empty.
            If unsuccessful, an appropriate ApiError is returned.


```js
agco_ats.Agents_PutAgent({
  "agentID": 0,
  "agent": {
    "UserID": 0,
    "MachineName": "",
    "Status": {
      "Online": true
    },
    "KeepAliveInterval": 0
  }
}, context)
```

#### Input
* input `object`
  * agentID **required** `integer`: The id of the Agent to update.
  * agent **required** [BuildSystem.Shared.DTO.Agent](#buildsystem.shared.dto.agent)

#### Output
*Output schema unknown*

### Agents_GetAgentActivityRun
Gets the activity run assigned to an agent.  When successful, the response is the ActivityRun
            assigned to the Agent.  If unsuccessful, an appropriate ApiError is returned.


```js
agco_ats.Agents_GetAgentActivityRun({
  "agentID": 0
}, context)
```

#### Input
* input `object`
  * agentID **required** `integer`: The id of the Agent to get.

#### Output
* output [BuildSystem.Shared.DTO.ActivityRun](#buildsystem.shared.dto.activityrun)

### Agents_PutAgentActivityRun
No Documentation Found.


```js
agco_ats.Agents_PutAgentActivityRun({
  "agentID": 0,
  "activityRun": {
    "Status": {}
  }
}, context)
```

#### Input
* input `object`
  * agentID **required** `integer`: The id of the Agent to update.
  * activityRun **required** [BuildSystem.Shared.DTO.ActivityRun](#buildsystem.shared.dto.activityrun)

#### Output
*Output schema unknown*

### Agents_PutAgentStatus
Updates the status of an Agent.The body of the PUT is the updated Agent status.  When successful,
            the response is empty.If unsuccessful, an appropriate ApiError is returned.


```js
agco_ats.Agents_PutAgentStatus({
  "agentID": 0,
  "agentStatus": {
    "Online": true
  }
}, context)
```

#### Input
* input `object`
  * agentID **required** `integer`: The id of the Agent to update.
  * agentStatus **required** [BuildSystem.Shared.DTO.AgentStatus](#buildsystem.shared.dto.agentstatus)

#### Output
*Output schema unknown*

### JobRuns_GetJobRuns
Gets a collection of JobRuns. When successful, the response is a PagedResponse of JobRuns.
            If unsuccessful, an appropriate ApiError is returned.


```js
agco_ats.JobRuns_GetJobRuns({}, context)
```

#### Input
* input `object`
  * limit `integer`: Optional. The page limit.  If not specified, the default page limit is 10.
  * offset `integer`: Optional. The page offset.  If not specified, the default page offset is 0.
  * includeActivityRunDetails `boolean`: Optional. Indicates whether to include ActivityRun details.  Defaults to false.

#### Output
* output [API.PagedResponse[BuildSystem.Shared.DTO.JobRun]](#api.pagedresponse[buildsystem.shared.dto.jobrun])

### JobRuns_PostJobRun
Creates a JobRun.  The body of the POST is the JobRun to create.  The JobRunID will be assigned on
            creation of the JobRun.  When successful, the response is the JobRunID.  If unsuccessful, an 
            appropriate ApiError is returned.


```js
agco_ats.JobRuns_PostJobRun({
  "jobRun": {}
}, context)
```

#### Input
* input `object`
  * jobRun **required** [BuildSystem.Shared.DTO.JobRun](#buildsystem.shared.dto.jobrun)

#### Output
* output `integer`

### JobRuns_DeleteJobRun
Deletes a JobRun. When successful, the response is empty.  If unsuccessful, an appropriate
            ApiError is returned.


```js
agco_ats.JobRuns_DeleteJobRun({
  "jobRunID": 0
}, context)
```

#### Input
* input `object`
  * jobRunID **required** `integer`: The id of the JobRun to delete

#### Output
*Output schema unknown*

### JobRuns_GetJobRun
Gets a JobRun by ID. When successful, the response is the requested JobRun.
            If unsuccessful, an appropriate ApiError is returned.


```js
agco_ats.JobRuns_GetJobRun({
  "jobRunID": 0
}, context)
```

#### Input
* input `object`
  * jobRunID **required** `integer`: The ID of the JobRun to get.
  * includeActivityRunDetails `boolean`: Optional. Indicates whether to include ActivityRun details.  Defaults to false.

#### Output
* output [BuildSystem.Shared.DTO.JobRun](#buildsystem.shared.dto.jobrun)

### JobRuns_PutJobRun
/// 
            Updates a JobRun.  The body of the PUT is the updated JobRun.
            When successful, the response is empty.  If unsuccessful, an appropriate ApiError is returned.


```js
agco_ats.JobRuns_PutJobRun({
  "jobRunID": 0,
  "jobRun": {}
}, context)
```

#### Input
* input `object`
  * jobRunID **required** `integer`: The id of the JobRun to update
  * jobRun **required** [BuildSystem.Shared.DTO.JobRun](#buildsystem.shared.dto.jobrun)

#### Output
*Output schema unknown*

### Jobs_GetJobs
Gets a collection of Jobs. When successful, the response is a PagedResponse of Jobs.
            If unsuccessful, an appropriate ApiError is returned. 
            ///


```js
agco_ats.Jobs_GetJobs({}, context)
```

#### Input
* input `object`
  * limit `integer`: Optional. The page limit.  If not specified, the default page limit is 10.
  * offset `integer`: Optional. The page offset.  If not specified, the default page offset is 0.
  * isIncludeDeleted `boolean`: Does it include deleted job, or not

#### Output
* output [API.PagedResponse[BuildSystem.Shared.DTO.Job]](#api.pagedresponse[buildsystem.shared.dto.job])

### Jobs_PostJob
Creates a Job.  The body of the POST is the Job to create.  The JobID will be assigned on
            creation of the Job.  When successful, the response is the JobID.  If unsuccessful, an 
            appropriate ApiError is returned.


```js
agco_ats.Jobs_PostJob({
  "job": {}
}, context)
```

#### Input
* input `object`
  * job **required** [BuildSystem.Shared.DTO.Job](#buildsystem.shared.dto.job)

#### Output
* output `integer`

### Jobs_DeleteJob
Deletes a Job. When successful, the response is empty.  If unsuccessful, an appropriate
            ApiError is returned.


```js
agco_ats.Jobs_DeleteJob({
  "jobID": 0
}, context)
```

#### Input
* input `object`
  * jobID **required** `integer`: The id of the job to delete

#### Output
*Output schema unknown*

### Jobs_GetJob
Gets a Job by ID. When successful, the response is the requested Job.
            If unsuccessful, an appropriate ApiError is returned.


```js
agco_ats.Jobs_GetJob({
  "jobID": 0
}, context)
```

#### Input
* input `object`
  * jobID **required** `integer`: The ID of the Job to get.
  * isIncludeDeleted `boolean`: Does it include deleted job, or not

#### Output
* output [BuildSystem.Shared.DTO.Job](#buildsystem.shared.dto.job)

### Jobs_PutJob
Updates a Job.  The body of the PUT is the updated Job.  When successful, the response is empty.
            If unsuccessful, an appropriate ApiError is returned.


```js
agco_ats.Jobs_PutJob({
  "jobID": 0,
  "job": {}
}, context)
```

#### Input
* input `object`
  * jobID **required** `integer`: The id of the job to update
  * job **required** [BuildSystem.Shared.DTO.Job](#buildsystem.shared.dto.job)

#### Output
*Output schema unknown*

### Steps_GetSteps
Gets a collection of Steps. When successful, the response is a PagedResponse of Steps.
            If unsuccessful, an appropriate ApiError is returned.  Steps.Read permission is required.


```js
agco_ats.Steps_GetSteps({}, context)
```

#### Input
* input `object`
  * limit `integer`: Optional. The page limit.  If not specified, the default page limit is 10.
  * offset `integer`: Optional. The page offset.  If not specified, the default page offset is 0.
  * includeDeleted `boolean`: Does it include deleted step, or not

#### Output
* output [API.PagedResponse[BuildSystem.Shared.DTO.Step]](#api.pagedresponse[buildsystem.shared.dto.step])

### Steps_PostStep
No Documentation Found.


```js
agco_ats.Steps_PostStep({
  "step": {
    "Name": "",
    "ConfigRequired": true,
    "ImplementationID": ""
  }
}, context)
```

#### Input
* input `object`
  * step **required** [BuildSystem.Shared.DTO.Step](#buildsystem.shared.dto.step)

#### Output
* output `integer`

### Steps_GetStep
Gets a Step by ID. When successful, the response is the requested Step.
            If unsuccessful, an appropriate ApiError is returned.  Steps.Read permission is required.


```js
agco_ats.Steps_GetStep({
  "stepID": 0
}, context)
```

#### Input
* input `object`
  * stepID **required** `integer`: The ID of the Step to get.
  * isIncludeDeleted `boolean`: Does it include deleted step, or not

#### Output
* output [BuildSystem.Shared.DTO.Step](#buildsystem.shared.dto.step)

### Steps_PutStep
No Documentation Found.


```js
agco_ats.Steps_PutStep({
  "stepID": 0,
  "step": {
    "Name": "",
    "ConfigRequired": true,
    "ImplementationID": ""
  }
}, context)
```

#### Input
* input `object`
  * stepID **required** `integer`: The step ID of the step to update
  * step **required** [BuildSystem.Shared.DTO.Step](#buildsystem.shared.dto.step)

#### Output
*Output schema unknown*



## Definitions

### AGCOPowerServices.Models.ECU
* AGCOPowerServices.Models.ECU `object`: An AGCO Power ECU
  * ActivationCode `string`: The code used to activate the ECU. May not be modified. Returned only on activation.
  * DamagedDescription `string`: A description why the ECU cannot be deactivated.
  * EngineSerialNumber **required** `string`: The serial number of the ECU’s engine
  * ReplacesECUSerialNumber `string`: The serial number of the ECU that this ECU replaces. Required if activating an ECU..
  * SerialNumber **required** `string`: The serial number of the ECU
  * State **required** `string` (values: Active, Inactive, Damaged): The state of the ECU

### AGCOPowerServices.Models.ProductionData
* AGCOPowerServices.Models.ProductionData `object`: Production data for an AGCO Power engine.
  * DataType **required** `string`: Type of data. Valid types are (but not limited to)
  * DataValues **required** `string`: Raw values of the calibration data

### AGCOPowerServices.Models.UserStatus
* AGCOPowerServices.Models.UserStatus `object`: Status of a voucher in the AGCO Power system
  * DealerCode **required** `string`: The dealer code of the voucher
  * State `string` (values: Active, Inactive, None): The state of the voucher
  * VoucherCode **required** `string`: The voucher code

### API.IPagedResponse[AuthorizationCodes.Shared.Models.AuthorizationCodeDefinition]
* API.IPagedResponse[AuthorizationCodes.Shared.Models.AuthorizationCodeDefinition] `object`
  * Entities `array`
    * items [AuthorizationCodes.Shared.Models.AuthorizationCodeDefinition](#authorizationcodes.shared.models.authorizationcodedefinition)
  * Metadata [API.PagedResponseMetadata](#api.pagedresponsemetadata)

### API.IPagedResponse[AuthorizationCodes.Shared.Models.AuthorizationCode]
* API.IPagedResponse[AuthorizationCodes.Shared.Models.AuthorizationCode] `object`
  * Entities `array`
    * items [AuthorizationCodes.Shared.Models.AuthorizationCode](#authorizationcodes.shared.models.authorizationcode)
  * Metadata [API.PagedResponseMetadata](#api.pagedresponsemetadata)

### API.Models.ApiError
* API.Models.ApiError `object`
  * DeveloperMessage `string`
  * ErrorCode `integer`
  * MoreInfo `string`
  * UserMessage `string`

### API.Models.AuthenticatedUser
* API.Models.AuthenticatedUser `object`
  * Email `string`: The user's email address
  * MACId `string`: The MAC identifier to use for API access
  * MACToken `string`: The MAC token to use for API access
  * Name `string`: The user's name
  * Token `string`: The token to use for API access
  * UserID `integer`: The user ID
  * Username `string`: The username used for authentication

### API.Models.Credentials
* API.Models.Credentials `object`
  * BearerAction `string` (values: None, Reset, Disable): The action to perform on the bearer token. Optional. Defaults to ‘None’.
  * MACAction `string` (values: None, Reset, Disable): The action to perform on the MAC token. Optional. Defaults to ‘None’.
  * password **required** `string`: A secret word or phrase that must be used to gain admission
  * username **required** `string`: A unique ID a user needs to login with

### API.Models.Log
* API.Models.Log `object`
  * ID `string`
  * Message `string`
  * TimeStamp `string`

### API.Models.Notification
* API.Models.Notification `object`
  * CC_Addresses `array`
    * items `string`
  * IsBodyHtml **required** `boolean`
  * MessageBody **required** `string`
  * Subject **required** `string`
  * To_Addresses **required** `array`
    * items `string`

### API.Models.PasswordReset
* API.Models.PasswordReset `object`
  * NewPassword **required** `string`: The new password
  * Token **required** `string`: The password reset token

### API.Models.PasswordResetRequest
* API.Models.PasswordResetRequest `object`
  * ParameterName **required** `string`: The query string parameter name to use for supplying the password reset token
  * Url **required** `string`: The URL to direct the user to reset the password.
  * Username **required** `string`: The username to reset the password for

### API.Models.Permission
* API.Models.Permission `object`
  * DataDescription `string`: Description of data to be provided with Role Authorization
  * DataRequired **required** `string` (values: Yes, No, Optional): Indicates if data is required or optional
  * Description `string`
  * Id `integer`: The identifier of the permission.
  * Name **required** `string`: The name of the permission.

### API.Models.Role
* API.Models.Role `object`: Defines an API Role
  * Description **required** `string`: Role description
  * Id `integer`: The role's identifier.
  * Name **required** `string`: The name of the role. Must be alpha-numeric strings separated by a period (.).

### API.Models.RolePermissionChange
* API.Models.RolePermissionChange `object`: Change to the Permissions that a Role is given.
  * Action **required** `string` (values: Grant, Revoke): The action to take.
  * Permission **required** `string`: The name of the permission to grant or revoke.

### API.Models.RoleUserChange
* API.Models.RoleUserChange `object`
  * Action **required** `string` (values: Grant, Revoke): The action to take with the user
  * Id **required** `integer`: The Id of the User

### API.Models.TokenOptions
* API.Models.TokenOptions `object`
  * BearerAction `string` (values: None, Reset, Disable): The action to perform on the bearer token. Optional. Defaults to ‘None’.
  * MACAction `string` (values: None, Reset, Disable): The action to perform on the MAC token. Optional. Defaults to ‘None’.

### API.Models.User
* API.Models.User `object`
  * ChangePassword `string`: Never Returned.  When changing a user's password, this field must contain the new password.
  * Email `string`: The user's email address
  * Name `string`: The user's name
  * Password `string`: Never Returned.  Required when creating a new user or updating a user.  When changing a user's password this field must contain the current password.
  * UserID `integer`: The user ID
  * Username `string`: The username used for authentication

### API.Models.UserEffectivePermission
* API.Models.UserEffectivePermission `object`
  * PermissionId `integer`
  * PermissionName `string`
  * UserID `integer`

### API.Models.UserRoleChange
* API.Models.UserRoleChange `object`
  * Action **required** `string` (values: Grant, Revoke): The action to take with the role
  * Name **required** `string`: The name of the role

### API.PagedResponseMetadata
* API.PagedResponseMetadata `object`: Metadata for the paged response
  * Limit **required** `integer`: The number of entities this paged response is limited to.
  * Offset **required** `integer`: The number of entities prior to this page of items.
  * TotalCount **required** `integer`: The total number of entities matching the request.

### API.PagedResponse[API.Models.Log]
* API.PagedResponse[API.Models.Log] `object`: A response containing a page of results and metadata concerning the results
  * Entities **required** `array`
    * items [API.Models.Log](#api.models.log)
  * Metadata **required** [API.PagedResponseMetadata](#api.pagedresponsemetadata)

### API.PagedResponse[API.Models.Permission]
* API.PagedResponse[API.Models.Permission] `object`: A response containing a page of results and metadata concerning the results
  * Entities **required** `array`
    * items [API.Models.Permission](#api.models.permission)
  * Metadata **required** [API.PagedResponseMetadata](#api.pagedresponsemetadata)

### API.PagedResponse[API.Models.Role]
* API.PagedResponse[API.Models.Role] `object`: A response containing a page of results and metadata concerning the results
  * Entities **required** `array`
    * items [API.Models.Role](#api.models.role)
  * Metadata **required** [API.PagedResponseMetadata](#api.pagedresponsemetadata)

### API.PagedResponse[API.Models.UserEffectivePermission]
* API.PagedResponse[API.Models.UserEffectivePermission] `object`: A response containing a page of results and metadata concerning the results
  * Entities **required** `array`
    * items [API.Models.UserEffectivePermission](#api.models.usereffectivepermission)
  * Metadata **required** [API.PagedResponseMetadata](#api.pagedresponsemetadata)

### API.PagedResponse[API.Models.User]
* API.PagedResponse[API.Models.User] `object`: A response containing a page of results and metadata concerning the results
  * Entities **required** `array`
    * items [API.Models.User](#api.models.user)
  * Metadata **required** [API.PagedResponseMetadata](#api.pagedresponsemetadata)

### API.PagedResponse[BuildSystem.Shared.DTO.ActivityRun]
* API.PagedResponse[BuildSystem.Shared.DTO.ActivityRun] `object`: A response containing a page of results and metadata concerning the results
  * Entities **required** `array`
    * items [BuildSystem.Shared.DTO.ActivityRun](#buildsystem.shared.dto.activityrun)
  * Metadata **required** [API.PagedResponseMetadata](#api.pagedresponsemetadata)

### API.PagedResponse[BuildSystem.Shared.DTO.Activity]
* API.PagedResponse[BuildSystem.Shared.DTO.Activity] `object`: A response containing a page of results and metadata concerning the results
  * Entities **required** `array`
    * items [BuildSystem.Shared.DTO.Activity](#buildsystem.shared.dto.activity)
  * Metadata **required** [API.PagedResponseMetadata](#api.pagedresponsemetadata)

### API.PagedResponse[BuildSystem.Shared.DTO.Agent]
* API.PagedResponse[BuildSystem.Shared.DTO.Agent] `object`: A response containing a page of results and metadata concerning the results
  * Entities **required** `array`
    * items [BuildSystem.Shared.DTO.Agent](#buildsystem.shared.dto.agent)
  * Metadata **required** [API.PagedResponseMetadata](#api.pagedresponsemetadata)

### API.PagedResponse[BuildSystem.Shared.DTO.JobRun]
* API.PagedResponse[BuildSystem.Shared.DTO.JobRun] `object`: A response containing a page of results and metadata concerning the results
  * Entities **required** `array`
    * items [BuildSystem.Shared.DTO.JobRun](#buildsystem.shared.dto.jobrun)
  * Metadata **required** [API.PagedResponseMetadata](#api.pagedresponsemetadata)

### API.PagedResponse[BuildSystem.Shared.DTO.Job]
* API.PagedResponse[BuildSystem.Shared.DTO.Job] `object`: A response containing a page of results and metadata concerning the results
  * Entities **required** `array`
    * items [BuildSystem.Shared.DTO.Job](#buildsystem.shared.dto.job)
  * Metadata **required** [API.PagedResponseMetadata](#api.pagedresponsemetadata)

### API.PagedResponse[BuildSystem.Shared.DTO.Step]
* API.PagedResponse[BuildSystem.Shared.DTO.Step] `object`: A response containing a page of results and metadata concerning the results
  * Entities **required** `array`
    * items [BuildSystem.Shared.DTO.Step](#buildsystem.shared.dto.step)
  * Metadata **required** [API.PagedResponseMetadata](#api.pagedresponsemetadata)

### API.PagedResponse[ContentSubmission.Shared.BusinessEntities.ContentDefinition]
* API.PagedResponse[ContentSubmission.Shared.BusinessEntities.ContentDefinition] `object`: A response containing a page of results and metadata concerning the results
  * Entities **required** `array`
    * items [ContentSubmission.Shared.BusinessEntities.ContentDefinition](#contentsubmission.shared.businessentities.contentdefinition)
  * Metadata **required** [API.PagedResponseMetadata](#api.pagedresponsemetadata)

### API.PagedResponse[ContentSubmission.Shared.BusinessEntities.ContentReleaseVersion]
* API.PagedResponse[ContentSubmission.Shared.BusinessEntities.ContentReleaseVersion] `object`: A response containing a page of results and metadata concerning the results
  * Entities **required** `array`
    * items [ContentSubmission.Shared.BusinessEntities.ContentReleaseVersion](#contentsubmission.shared.businessentities.contentreleaseversion)
  * Metadata **required** [API.PagedResponseMetadata](#api.pagedresponsemetadata)

### API.PagedResponse[ContentSubmission.Shared.BusinessEntities.ContentSubmission]
* API.PagedResponse[ContentSubmission.Shared.BusinessEntities.ContentSubmission] `object`: A response containing a page of results and metadata concerning the results
  * Entities **required** `array`
    * items [ContentSubmission.Shared.BusinessEntities.ContentSubmission](#contentsubmission.shared.businessentities.contentsubmission)
  * Metadata **required** [API.PagedResponseMetadata](#api.pagedresponsemetadata)

### API.PagedResponse[ContentSubmission.Shared.BusinessEntities.Release]
* API.PagedResponse[ContentSubmission.Shared.BusinessEntities.Release] `object`: A response containing a page of results and metadata concerning the results
  * Entities **required** `array`
    * items [ContentSubmission.Shared.BusinessEntities.Release](#contentsubmission.shared.businessentities.release)
  * Metadata **required** [API.PagedResponseMetadata](#api.pagedresponsemetadata)

### API.PagedResponse[ContentSubmission.Shared.BusinessEntities.UserContentDefinition]
* API.PagedResponse[ContentSubmission.Shared.BusinessEntities.UserContentDefinition] `object`: A response containing a page of results and metadata concerning the results
  * Entities **required** `array`
    * items [ContentSubmission.Shared.BusinessEntities.UserContentDefinition](#contentsubmission.shared.businessentities.usercontentdefinition)
  * Metadata **required** [API.PagedResponseMetadata](#api.pagedresponsemetadata)

### API.PagedResponse[DealerDB.Models.Dealer]
* API.PagedResponse[DealerDB.Models.Dealer] `object`: A response containing a page of results and metadata concerning the results
  * Entities **required** `array`
    * items [DealerDB.Models.Dealer](#dealerdb.models.dealer)
  * Metadata **required** [API.PagedResponseMetadata](#api.pagedresponsemetadata)

### API.PagedResponse[DealerDB.Models.DealersPerCountry]
* API.PagedResponse[DealerDB.Models.DealersPerCountry] `object`: A response containing a page of results and metadata concerning the results
  * Entities **required** `array`
    * items [DealerDB.Models.DealersPerCountry](#dealerdb.models.dealerspercountry)
  * Metadata **required** [API.PagedResponseMetadata](#api.pagedresponsemetadata)

### API.PagedResponse[DealerDB.Models.License]
* API.PagedResponse[DealerDB.Models.License] `object`: A response containing a page of results and metadata concerning the results
  * Entities **required** `array`
    * items [DealerDB.Models.License](#dealerdb.models.license)
  * Metadata **required** [API.PagedResponseMetadata](#api.pagedresponsemetadata)

### API.PagedResponse[DealerDB.Models.VoucherHistory]
* API.PagedResponse[DealerDB.Models.VoucherHistory] `object`: A response containing a page of results and metadata concerning the results
  * Entities **required** `array`
    * items [DealerDB.Models.VoucherHistory](#dealerdb.models.voucherhistory)
  * Metadata **required** [API.PagedResponseMetadata](#api.pagedresponsemetadata)

### API.PagedResponse[DealerDB.Models.Voucher]
* API.PagedResponse[DealerDB.Models.Voucher] `object`: A response containing a page of results and metadata concerning the results
  * Entities **required** `array`
    * items [DealerDB.Models.Voucher](#dealerdb.models.voucher)
  * Metadata **required** [API.PagedResponseMetadata](#api.pagedresponsemetadata)

### API.PagedResponse[UpdateSystem.Models.AvailableUpdateGroupSubscription]
* API.PagedResponse[UpdateSystem.Models.AvailableUpdateGroupSubscription] `object`: A response containing a page of results and metadata concerning the results
  * Entities **required** `array`
    * items [UpdateSystem.Models.AvailableUpdateGroupSubscription](#updatesystem.models.availableupdategroupsubscription)
  * Metadata **required** [API.PagedResponseMetadata](#api.pagedresponsemetadata)

### API.PagedResponse[UpdateSystem.Models.Bundle]
* API.PagedResponse[UpdateSystem.Models.Bundle] `object`: A response containing a page of results and metadata concerning the results
  * Entities **required** `array`
    * items [UpdateSystem.Models.Bundle](#updatesystem.models.bundle)
  * Metadata **required** [API.PagedResponseMetadata](#api.pagedresponsemetadata)

### API.PagedResponse[UpdateSystem.Models.ClientStatus,UpdateSystem.Models.PagedClientStatusMetadata]
* API.PagedResponse[UpdateSystem.Models.ClientStatus,UpdateSystem.Models.PagedClientStatusMetadata] `object`: A response containing a page of results and metadata concerning the results
  * Entities **required** `array`
    * items [UpdateSystem.Models.ClientStatus](#updatesystem.models.clientstatus)
  * Metadata **required** [UpdateSystem.Models.PagedClientStatusMetadata](#updatesystem.models.pagedclientstatusmetadata)

### API.PagedResponse[UpdateSystem.Models.Client]
* API.PagedResponse[UpdateSystem.Models.Client] `object`: A response containing a page of results and metadata concerning the results
  * Entities **required** `array`
    * items [UpdateSystem.Models.Client](#updatesystem.models.client)
  * Metadata **required** [API.PagedResponseMetadata](#api.pagedresponsemetadata)

### API.PagedResponse[UpdateSystem.Models.PackageStatusSummary]
* API.PagedResponse[UpdateSystem.Models.PackageStatusSummary] `object`: A response containing a page of results and metadata concerning the results
  * Entities **required** `array`
    * items [UpdateSystem.Models.PackageStatusSummary](#updatesystem.models.packagestatussummary)
  * Metadata **required** [API.PagedResponseMetadata](#api.pagedresponsemetadata)

### API.PagedResponse[UpdateSystem.Models.PackageTypeIDtoBundle]
* API.PagedResponse[UpdateSystem.Models.PackageTypeIDtoBundle] `object`: A response containing a page of results and metadata concerning the results
  * Entities **required** `array`
    * items [UpdateSystem.Models.PackageTypeIDtoBundle](#updatesystem.models.packagetypeidtobundle)
  * Metadata **required** [API.PagedResponseMetadata](#api.pagedresponsemetadata)

### API.PagedResponse[UpdateSystem.Models.PackageType]
* API.PagedResponse[UpdateSystem.Models.PackageType] `object`: A response containing a page of results and metadata concerning the results
  * Entities **required** `array`
    * items [UpdateSystem.Models.PackageType](#updatesystem.models.packagetype)
  * Metadata **required** [API.PagedResponseMetadata](#api.pagedresponsemetadata)

### API.PagedResponse[UpdateSystem.Models.Package]
* API.PagedResponse[UpdateSystem.Models.Package] `object`: A response containing a page of results and metadata concerning the results
  * Entities **required** `array`
    * items [UpdateSystem.Models.Package](#updatesystem.models.package)
  * Metadata **required** [API.PagedResponseMetadata](#api.pagedresponsemetadata)

### API.PagedResponse[UpdateSystem.Models.PriorityPackage]
* API.PagedResponse[UpdateSystem.Models.PriorityPackage] `object`: A response containing a page of results and metadata concerning the results
  * Entities **required** `array`
    * items [UpdateSystem.Models.PriorityPackage](#updatesystem.models.prioritypackage)
  * Metadata **required** [API.PagedResponseMetadata](#api.pagedresponsemetadata)

### API.PagedResponse[UpdateSystem.Models.UpdateGroupClientRelationship]
* API.PagedResponse[UpdateSystem.Models.UpdateGroupClientRelationship] `object`: A response containing a page of results and metadata concerning the results
  * Entities **required** `array`
    * items [UpdateSystem.Models.UpdateGroupClientRelationship](#updatesystem.models.updategroupclientrelationship)
  * Metadata **required** [API.PagedResponseMetadata](#api.pagedresponsemetadata)

### API.PagedResponse[UpdateSystem.Models.UpdateGroupSubscription]
* API.PagedResponse[UpdateSystem.Models.UpdateGroupSubscription] `object`: A response containing a page of results and metadata concerning the results
  * Entities **required** `array`
    * items [UpdateSystem.Models.UpdateGroupSubscription](#updatesystem.models.updategroupsubscription)
  * Metadata **required** [API.PagedResponseMetadata](#api.pagedresponsemetadata)

### API.PagedResponse[UpdateSystem.Models.UpdateGroup]
* API.PagedResponse[UpdateSystem.Models.UpdateGroup] `object`: A response containing a page of results and metadata concerning the results
  * Entities **required** `array`
    * items [UpdateSystem.Models.UpdateGroup](#updatesystem.models.updategroup)
  * Metadata **required** [API.PagedResponseMetadata](#api.pagedresponsemetadata)

### AuthorizationCodes.Shared.Models.AuthorizationCode
* AuthorizationCodes.Shared.Models.AuthorizationCode `object`: Represents the model containing an authorization code used to unlock a feature in machines and EDT
  * Code `string`: The code to enter to unlock a feature. Read only.
  * CreatedByUserID `integer`: The ID of the user that created this authorization code. Read only.
  * CreatedDate `string`: A timestamp of when this code was created. Read only.
  * DataParameters `array`: The parameters and values contained as data in this authorization code. May not be updated.
    * items [AuthorizationCodes.Shared.Models.Parameter](#authorizationcodes.shared.models.parameter)
  * DefinitionID `string`: The id of the definition for this authorization code. May not be updated.
  * DeletedByUserID `integer`: The ID of the user that deleted this authorization code. Read only.
  * DeletedDate `string`: A timestamp of when this authorization code was deleted. Read only.
  * ID `integer`: The identifier for the authorization code. Read only.
  * IsDeleted `boolean`: Indicates whether this code is deleted.
  * ValidationParameters `array`: The parameters and values used to validate this authorization code. May not be updated.
    * items [AuthorizationCodes.Shared.Models.Parameter](#authorizationcodes.shared.models.parameter)

### AuthorizationCodes.Shared.Models.AuthorizationCodeDefinition
* AuthorizationCodes.Shared.Models.AuthorizationCodeDefinition `object`: Represents the model used to define how a type of authorization code is generated.
  * CreatedByUserID `integer`: The ID of the user that created this definition. Read only.
  * CreatedDate `string`: A timestamp of when this definition was created. Read only.
  * DataFields `array`: The defined fields to include in authorization codes generated from this definition. May not be updated.
    * items [AuthorizationCodes.Shared.Models.DataField](#authorizationcodes.shared.models.datafield)
  * DeletedByUserID `integer`: The ID of the user that deleted this definition. Read only.
  * DeletedDate `string`: A timestamp of when this definition was deleted. Read only.
  * Description `string`: A description of this definition. May not be updated.
  * DurationAccuracy `integer`: The number of bits used for timestamp verification. Defaults to 5. May not be updated.
  * DurationAmount `integer`: The amount of duration for the specified duration unit used to calculate the Authorization Code. Defaults to 1. May not be updated.
  * DurationUnits `string` (values: Weeks, Days, Hours, Minutes): The units of duration used to calculate the Authorization Code. Defaults to 'Days'. May not be updated.
  * HashLength `integer`: The bit length of the hash data which will be used for the authorization code. Defaults to 20. May not be updated.
  * ID `string`: The ID of the authorization code definition. Read only.
  * IsDeleted `boolean`: Indicates whether this definition is enabled. True if generating codes is disabled.
  * Name **required** `string`: The name of the authorization code definition. May not be updated.
  * RandomLength `integer`: The bit length of random data which will be included in the authorization code.  This is necessary to allow creation of "identical" authorization codes containing the same timestamp. Defaults to 5. May not be updated.
  * ValidationFields `array`: The defined fields to verify when reading authorization codes generated from this definition. May not be updated.
    * items [AuthorizationCodes.Shared.Models.ValidationField](#authorizationcodes.shared.models.validationfield)

### AuthorizationCodes.Shared.Models.DataField
* AuthorizationCodes.Shared.Models.DataField `object`
  * DigitsPrecision `integer`: The number of decimal digits to be used by this data field. Required only by the 'Float' data type. Must be in range 1 - 15.
  * MaxExponent `integer`: The maximum exponent to be used by this data field. Required only by the 'Float' data type. May not be greater than 307.
  * MaxValue `number`: The maximum value that can be represented by this data field. Required only by the 'Decimal' data type.
  * MinExponent `integer`: The minimum exponent to be used by this data field. Required only by the 'Float' data type. May not be less than -292.
  * MinValue `number`: The minimum value that can be represented by this data field. Required only by the 'Decimal' data type.
  * Name **required** `string`: The name of the field.
  * ScaleFactor `number`: The resolution of values that can be represented by this data field. The base value is multiplied by this to compute the final value. Required only by the 'Decimal' data type.
  * Signed `boolean`: Indicates whether this value is signed. Required only by the 'Float' data type.
  * Type **required** `string` (values: Boolean, Decimal, Float, VariableLengthByteArray): The type of this data field.

### AuthorizationCodes.Shared.Models.Parameter
* AuthorizationCodes.Shared.Models.Parameter `object`: A parameter used to create an authorization code.
  * Name **required** `string`: The name of the parameter. May not be updated.
  * Value **required** `string`: The value of the parameter. May not be updated.

### AuthorizationCodes.Shared.Models.ValidationField
* AuthorizationCodes.Shared.Models.ValidationField `object`
  * Name **required** `string`: The name of the field.
  * Type **required** `string` (values: Boolean, Float, Int, StringCaseInsensitive, StringCaseSensitive): The type for this validation field.

### BuildSystem.Shared.DTO.Activity
* BuildSystem.Shared.DTO.Activity `object`: A DTO for an IActivity
  * ActivityID `integer`: The ID of the activity
  * Deleted `boolean`
  * Name `string`: The name of the activity
  * Parameters `array`: The parameters for this activity
    * items [BuildSystem.Shared.DTO.Parameter](#buildsystem.shared.dto.parameter)
  * Steps `array`: The steps which are performed for this activity
    * items [BuildSystem.Shared.DTO.ActivityStep](#buildsystem.shared.dto.activitystep)

### BuildSystem.Shared.DTO.ActivityRun
* BuildSystem.Shared.DTO.ActivityRun `object`: A DTO for an IActivityRun
  * ActivityRunID `integer`: The identifier for the ActivityRun
  * EndDate `string`: Read Only. The UTC date and time when the activity completed
  * JobActivityID `integer`: Read Only. The ID of the Job Activity that defines this activity run
  * JobRunID `integer`: Read Only. The ID of the JobRun under which this ActivityRun is executing
  * Parameters `array`: The parameters used for this run of the activity.  Parameters cannot be added or removed, but output parameter values may be updated.
    * items [BuildSystem.Shared.DTO.ParameterValue](#buildsystem.shared.dto.parametervalue)
  * StartDate `string`: Read Only. The UTC date and time when the activity started
  * Status **required** [BuildSystem.Shared.DTO.ActivityRunStatus](#buildsystem.shared.dto.activityrunstatus)
  * Steps `array`: Read Only. The steps to be executed for the activity.  These steps come from the relationship through JobActivity down to ActivityStep
    * items [BuildSystem.Shared.DTO.ActivityStep](#buildsystem.shared.dto.activitystep)

### BuildSystem.Shared.DTO.ActivityRunStatus
* BuildSystem.Shared.DTO.ActivityRunStatus `object`: A DTO for an IActivityRunStatus
  * CurrentStep `integer`: The activity step currently executing, indicated by numeric order
  * Status `string` (values: Ready, InProgress, Succeeded, Cancelled, Failed): The status of the ActivityRun
  * StepProgress `integer`: The percent progress from the currently executing step.  This value shall be null if progress is not available
  * StepStatus `string`: The status text from the currently executing step

### BuildSystem.Shared.DTO.ActivityStep
* BuildSystem.Shared.DTO.ActivityStep `object`: A DTO for an IActivityStep
  * ActivityID `integer`: The id of the activity this activity step belongs to
  * ActivityStepID `integer`: The id of this activity step
  * ImplementationID `string`: The implementation id which is used to look up the step implementation
  * ParameterMappings `array`: The mapping of values from a source to be used for the step parameters
    * items [BuildSystem.Shared.DTO.ParameterMapping](#buildsystem.shared.dto.parametermapping)
  * RunOrder `integer`: The order of this activity step relative to other activity steps
  * StepID `integer`: The id of the step
  * StepName `string`: The name of the step
  * UseConfig `string`: Indicates the configuration for the ActivityStep to use at runtime.  The build agent must provide this configuration

### BuildSystem.Shared.DTO.Agent
* BuildSystem.Shared.DTO.Agent `object`: A DTO for an IAgent
  * AgentID `integer`: The id of the Agent
  * KeepAliveInterval **required** `integer`: The 'Heartbeat Interval' used by the Build Agent.
  * MachineName **required** `string`: The machine name of the computer the agent is running on
  * Status **required** [BuildSystem.Shared.DTO.AgentStatus](#buildsystem.shared.dto.agentstatus)
  * StepConfigurations `array`: The agent's step configurations
    * items [BuildSystem.Shared.DTO.StepConfiguration](#buildsystem.shared.dto.stepconfiguration)
  * UserID **required** `integer`: The UserID of the Agent

### BuildSystem.Shared.DTO.AgentStatus
* BuildSystem.Shared.DTO.AgentStatus `object`: A DTO for an IAgentStatus
  * LastStatusUpdate `string`: ReadOnly. The UTC date and time of the last status update
  * Online **required** `boolean`: Indicates if the agent is online

### BuildSystem.Shared.DTO.Job
* BuildSystem.Shared.DTO.Job `object`: A DTO for an IJob
  * Activities `array`: The activities which are performed for the job
    * items [BuildSystem.Shared.DTO.JobActivity](#buildsystem.shared.dto.jobactivity)
  * Deleted `boolean`: Indicates if the job has been deleted.
  * JobID `integer`: The ID of the job
  * Name `string`: The name of the job
  * Parameters `array`: The parameters for the job
    * items [BuildSystem.Shared.DTO.Parameter](#buildsystem.shared.dto.parameter)

### BuildSystem.Shared.DTO.JobActivity
* BuildSystem.Shared.DTO.JobActivity `object`: A DTO for an IJobActivity
  * ActivityID `integer`: The ID of the activity to be run as part of the job
  * JobActivityID `integer`: The ID of this job activity
  * JobID `integer`: The ID of the job this job activity belongs to
  * ParameterMappings `array`: The mapping of values from a source to be used for the activity parameters
    * items [BuildSystem.Shared.DTO.ParameterMapping](#buildsystem.shared.dto.parametermapping)
  * RunOrder `integer`: The order of this job activity relative to others in the job

### BuildSystem.Shared.DTO.JobRun
* BuildSystem.Shared.DTO.JobRun `object`: A DTO for an IJobRun
  * ActivityRuns `array`: The activity runs belonging to this JobRun
    * items [BuildSystem.Shared.DTO.ActivityRun](#buildsystem.shared.dto.activityrun)
  * EndDate `string`: The UTC date and time when the job completed
  * JobID `integer`: The ID of the job that defines the run
  * JobRunID `integer`: The ID of this JobRun
  * Parameters `array`: The parameters used for this run of the job
    * items [BuildSystem.Shared.DTO.ParameterValue](#buildsystem.shared.dto.parametervalue)
  * StartDate `string`: The UTC date and time when the job started
  * Status `string` (values: Ready, InProgress, Succeeded, Cancelled, Failed): The status of this JobRun

### BuildSystem.Shared.DTO.Parameter
* BuildSystem.Shared.DTO.Parameter `object`: A DTO for an IParameter
  * Direction `string` (values: Input, Output): The parameter direction (Input or Output)
  * Name `string`: The name of the parameter
  * Type `string` (values: String, Boolean, Integer, Float, StringDictionary): The data type of the parameter

### BuildSystem.Shared.DTO.ParameterMapping
* BuildSystem.Shared.DTO.ParameterMapping `object`: A DTO for an IParameterMapping
  * Name `string`: The name of the parameter this mapping applies to
  * Source `string`: The source of the value.  The meaning of this value is determined by the source type.  When the source type is “Constant” then source is the value formatted as a string.  When the source type is “Variable” then the source is the name of the variable
  * SourceType `string` (values: Constant, Variable): The source type used for supplying the parameter

### BuildSystem.Shared.DTO.ParameterValue
* BuildSystem.Shared.DTO.ParameterValue `object`: A DTO for an IParameterValue
  * Direction `string` (values: Input, Output): The parameter direction (Input or Output)
  * Name `string`: The name of the parameter this value is for
  * Value `string`: The parameter value in string representation

### BuildSystem.Shared.DTO.Step
* BuildSystem.Shared.DTO.Step `object`: Step
  * ConfigRequired **required** `boolean`: Indicates if the step requires configuration values to be provided by the build agent
  * Deleted `boolean`: Read Only.  Indicates if the record is deleted.
  * Description `string`: A description of the step to be presented to a user
  * ImplementationID **required** `string`: The implementation ID used to lookup the step implementation when it is executed
  * Name **required** `string`: The name of the step
  * Parameters `array`: The parameters for this step
    * items [BuildSystem.Shared.DTO.Parameter](#buildsystem.shared.dto.parameter)
  * StepID `integer`: The ID of the step

### BuildSystem.Shared.DTO.StepConfiguration
* BuildSystem.Shared.DTO.StepConfiguration `object`: Step Configuration
  * Configurations `array`: The configuration names supported.  The configurations collection is empty for steps which do not require configuration.
    * items `string`
  * StepImplementationID **required** `string`: The Implementation ID of the step this configuration is for

### ContentSubmission.Shared.BusinessEntities.ContentDefinition
* ContentSubmission.Shared.BusinessEntities.ContentDefinition `object`
  * ContentDefinitionID `integer`
  * Description `string`
  * Name `string`
  * PackageTypeID `string`
  * TypeID `integer`

### ContentSubmission.Shared.BusinessEntities.ContentReleaseVersion
* ContentSubmission.Shared.BusinessEntities.ContentReleaseVersion `object`
  * ContentDefinitionID `integer`
  * ContentReleaseID `integer`
  * Deleted `boolean`
  * PublisherUserID `integer`
  * ReleaseID `integer`
  * TestReportUrl `string`
  * UpdatedDate `string`
  * Version `integer`

### ContentSubmission.Shared.BusinessEntities.ContentSubmission
* ContentSubmission.Shared.BusinessEntities.ContentSubmission `object`
  * ContentDefinitionID `integer`
  * ContentSubmissionID `integer`
  * JobRunID `integer`
  * PackageID `string`
  * ReleaseNotes `string`
  * Repository `string`
  * Revision `integer`
  * SubmissionDate `string`
  * UserID `integer`
  * Version `integer`

### ContentSubmission.Shared.BusinessEntities.ContentSubmissionType
* ContentSubmission.Shared.BusinessEntities.ContentSubmissionType `object`
  * AttributeTemplate `string`
  * CategoryTemplate `string`
  * Description **required** `string`
  * Enabled `boolean`
  * ID `integer`
  * InventoryPackageID `string`
  * JobID `integer`
  * Name **required** `string`
  * ReleaseNotesDescription `string`

### ContentSubmission.Shared.BusinessEntities.Release
* ContentSubmission.Shared.BusinessEntities.Release `object`
  * BuildDate `string`
  * ReleaseDate `string`
  * ReleaseID `integer`
  * ReleaseNumber `string`
  * Visible `boolean`

### ContentSubmission.Shared.BusinessEntities.UserContentDefinition
* ContentSubmission.Shared.BusinessEntities.UserContentDefinition `object`
  * ContentDefinitionID `integer`
  * UserContentDefinitionID `integer`
  * UserID `integer`

### DealerDB.Models.Dealer
* DealerDB.Models.Dealer `object`
  * BillingAddress `string`
  * BillingAddress2 `string`
  * BillingAddress3 `string`
  * BillingAddress4 `string`
  * BillingCity `string`
  * BillingCountry `string`
  * BillingCountryCode `string`
  * BillingState `string`
  * BillingZip `string`
  * Brands `array`
    * items `string`
  * DealerCode `string`
  * DealerName `string`
  * DealerStatus `string`
  * DealerStatusUpdateDate `string`
  * Filler `string`
  * IsValid `boolean`
  * LanguagePreference `string`
  * Region1 `string`
  * Region2 `string`
  * RegionMapping `string`
  * RoleBrand `string`
  * ShippingAddress2 `string`
  * ShippingAddress3 `string`
  * ShippingAddress4 `string`
  * ShippingCity `string`
  * ShippingCountry `string`
  * ShippingState `string`
  * ShippingStreet `string`
  * ShippingZip `string`
  * Telephone `string`
  * VATCode `string`

### DealerDB.Models.DealersPerCountry
* DealerDB.Models.DealersPerCountry `object`
  * Count `integer`
  * Country `string`

### DealerDB.Models.EDTLiteRegistration
* DealerDB.Models.EDTLiteRegistration `object`: Registration for an EDT Lite
  * DealerCode `string`: The dealer code with which the EDT Lite was created.
  * ExpirationDate **required** `string`: The date at which the content of the EDT Lite expires.
  * InstanceID **required** `string`: The identifier for the EDT Lite.
  * VoucherCode **required** `string`: The voucher code with which the EDT Lite was created.

### DealerDB.Models.License
* DealerDB.Models.License `object`
  * Active `boolean`: True if license is active.
  * CreatedDate `string`: The date the license was created.
  * DeactivatedDate `string`: The date the license was deactivated.
  * LicenseActivationType `string` (values: EDT, EDTLite): The type of license (e.g. EDT, EDT Lite)
  * LicenseID `string`: The LicenseID
  * LicenseVersion `string`: The version of the license.
  * RefreshDate `string`: The date the license was refreshed.
  * SystemInfo `string`: Information about the system which is licensed.
  * UpdatedLicenseVersion `string`: The updated version of the license.  A value in this field indicates that the update has not been confirmed.
  * VoucherCode `string`: The voucher code that generated the license.

### DealerDB.Models.LicenseActivation
* DealerDB.Models.LicenseActivation `object`
  * Key `string`: The license key in base64 format.  This is only provided when the LicenseData is a new license.
  * LicenseData `string`: The license data in base64 format.

### DealerDB.Models.LicenseActivationConfirm
* DealerDB.Models.LicenseActivationConfirm `object`
  * LicenseVersion **required** `string`: The license version to confirm

### DealerDB.Models.LicenseActivationCreate
* DealerDB.Models.LicenseActivationCreate `object`
  * DealerCode **required** `string`: The Dealer Code of the dealer activating the license
  * LicenseActivationType `string` (values: EDT, EDTLite): The type of license to create (e.g. EDT, EDT Lite)
  * PostalCode **required** `string`: The dealer's postal code (zip code)
  * SystemInfo **required** `string`: Information about  the system being activated
  * VoucherCode **required** `string`: The Voucher Code to use for activation

### DealerDB.Models.LicenseActivationUpdate
* DealerDB.Models.LicenseActivationUpdate `object`
  * LicenseVersion **required** `string`: The license version to update
  * SystemInfo `string`: Information about  the system being activated

### DealerDB.Models.Voucher
* DealerDB.Models.Voucher `object`: A voucher for EDT activation
  * CreatedDate `string`: Read-Only. The date the voucher was created.
  * DealerCode `string`: The dealer code the voucher is assigned to.  Required for commercial vouchers.
  * Deleted `boolean`: Read-Only. True if voucher has been deleted.
  * Email `string`: The email address. Required for Internal Vouchers
  * ExpirationDate `string`: The expiration date of the voucher. Required for Temporary Vouchers.
  * LicenseTo `string`: Required for Internal Vouchers
  * ModifiedBy `string`: Read-Only. The user that made the last modification to the voucher.
  * OrderNumber `string`: The order number of a commercial license. Required for Commercial Vouchers. Not supported for other Vouchers.
  * Punched `boolean`: True if voucher has aleady been used.  False if the voucher has not been used.
  * PunchedDate `string`: Read-Only. The date the voucher was punched.
  * Purpose `string`: Required for Internal Vouchers
  * Type `string` (values: Commercial, Internal, Temporary): The type of voucher. Commercial is the default if not specified.
  * VoucherCode `string`: The voucher code.

### DealerDB.Models.VoucherHistory
* DealerDB.Models.VoucherHistory `object`
  * ChangedDate `string`
  * CreatedDate `string`: Read-Only. The date the voucher was created.
  * DealerCode `string`: The dealer code the voucher is assigned to.  Required for commercial vouchers.
  * Deleted `boolean`: Read-Only. True if voucher has been deleted.
  * Email `string`: The email address. Required for Internal Vouchers
  * ExpirationDate `string`: The expiration date of the voucher. Required for Temporary Vouchers.
  * ID `integer`: The id of the voucher history item
  * LicenseTo `string`: Required for Internal Vouchers
  * ModifiedBy `string`: Read-Only. The user that made the last modification to the voucher.
  * OrderNumber `string`: The order number of a commercial license. Required for Commercial Vouchers. Not supported for other Vouchers.
  * Punched `boolean`: True if voucher has aleady been used.  False if the voucher has not been used.
  * PunchedDate `string`: Read-Only. The date the voucher was punched.
  * Purpose `string`: Required for Internal Vouchers
  * Type `string` (values: Commercial, Internal, Temporary): The type of voucher.
  * VoucherCode `string`: The voucher code.

### System.Object
* System.Object `object`

### UpdateSystem.Models.AttributeValue
* UpdateSystem.Models.AttributeValue `object`
  * Key **required** `string`: The attribute name
  * TimeStamp `string`: Read Only. The timestamp.
  * Value `string`: The value

### UpdateSystem.Models.AvailableSubscription
* UpdateSystem.Models.AvailableSubscription `object`
  * PackageType [UpdateSystem.Models.PackageType](#updatesystem.models.packagetype)
  * SubscriptionType `string` (values: Required, IncludeByDefault, ExcludeByDefault): The type of subscription supported.

### UpdateSystem.Models.AvailableUpdateGroupSubscription
* UpdateSystem.Models.AvailableUpdateGroupSubscription `object`
  * AvailableSubscriptions `array`: The available subscriptions for this update group.
    * items [UpdateSystem.Models.AvailableSubscription](#updatesystem.models.availablesubscription)
  * UpdateGroup [UpdateSystem.Models.UpdateGroup](#updatesystem.models.updategroup)

### UpdateSystem.Models.Bundle
* UpdateSystem.Models.Bundle `object`
  * Active `boolean`: Default Value: false. During the creation of the Bundle, this field must be false.
  * BundleID `string`: Read-Only.
  * BundleNumber **required** `integer`: The bundle number
  * Description **required** `string`: The Bundle description.
  * UpdateGroupID **required** `string`: The update group this bundle belongs to.

### UpdateSystem.Models.Category
* UpdateSystem.Models.Category `object`
  * Values `array`
    * items [UpdateSystem.Models.AttributeValue](#updatesystem.models.attributevalue)
  * category **required** `string`: The category name

### UpdateSystem.Models.CheckinResult
* UpdateSystem.Models.CheckinResult `object`
  * Packages `array`: The packages for the client to run.
    * items [UpdateSystem.Models.Package](#updatesystem.models.package)
  * RemovePackages `array`: The package ids for the client to remove.
    * items `string`

### UpdateSystem.Models.Client
* UpdateSystem.Models.Client `object`
  * ClientID `string`: Read Only. The id of the client
  * LastCheckin `string`: Read Only. The time of the client's last checkin with the server.
  * Tag `string`: A description of the client that can be used for easy reference

### UpdateSystem.Models.ClientInfo
* UpdateSystem.Models.ClientInfo `object`
  * ClientID `string`: The id of the client
  * Package `array`: The packages
    * items [UpdateSystem.Models.PackageReport](#updatesystem.models.packagereport)

### UpdateSystem.Models.ClientStatus
* UpdateSystem.Models.ClientStatus `object`
  * ClientID `string`: The Client ID
  * LastCheckin `string`: The time of the client's last check-in
  * MinutesElapsed `integer`: The number of minutes that have passed since the last check-in
  * ReportResult `string`: The result for the client included in the UpdateGroup's report
  * ReportResultIsValid `boolean`: True if the result for the client matches what is expected for the UpdateGroup
  * ReportValue `string`: The value for the client included in the UpdateGroup's report
  * Tag `string`: A descriptive name for the client

### UpdateSystem.Models.Package
* UpdateSystem.Models.Package `object`
  * Autorun `boolean`: Value is true if package should run automatically. Default value is false.
  * CRC **required** `string`: The CRC used to validate the download.
  * Description **required** `string`: The package description
  * LocalizedName `string`: Optional. The StringID used to localize the name of the Package
  * Notes `string`: Notes about the package
  * PackageID `string`: Read Only. The package ID
  * PackageTypeID **required** `string`: The id of the package type this package belongs to.
  * PreviousVersion `integer`: For delta packages, the previous version required.  For non-delta packages, the Previous version is 0.  Default value is 0.
  * ReleaseDate **required** `string`: The date the package was released
  * Released `boolean`: True if the package is released.  Default value is False.
  * RemoveOnSuccess `boolean`: True to remove the package after successful execution.  Default value is False.
  * Size `integer`: The size of the file at the specified URL.  If a size is not supplied at creation time, the size will be determined by the response from the URL.
  * Switches `string`: The command line arguments for the package.  Default value is an empty string.
  * Url **required** `string`: The Url to download the package from.
  * Version **required** `integer`: The version.

### UpdateSystem.Models.PackageReport
* UpdateSystem.Models.PackageReport `object`
  * Categories `array`: The package report's categories.
    * items [UpdateSystem.Models.Category](#updatesystem.models.category)
  * PackageDescription `string`: Read Only. The package description
  * PackageID `string`: The PackageID.

### UpdateSystem.Models.PackageStatus
* UpdateSystem.Models.PackageStatus `object`
  * ClientID `string`: The id of the client
  * ClientKey `string`: The client's tag
  * DownloadTime `string`: The amount of time spent downloading
  * Downloaded `string`: The number of bytes downloaded
  * InstallCompleted `string`: The time the package completed
  * InstallResult `string`: The package result
  * InstallStarted `string`: The time the package was started
  * InstallTime `string`: The amount of time required to run the package
  * Percentage `string`: The download completion percentage
  * Size `string`: The total size of the package
  * Timestamp `string`: The time the status was last updated

### UpdateSystem.Models.PackageStatusSummary
* UpdateSystem.Models.PackageStatusSummary `object`
  * AverageDownloadTime `string`: The average time required to complete the download
  * AverageInstallTime `string`: The average time required to complete the install
  * Downloaded `integer`: The number of clients that have completed the download
  * Error `integer`: The result of the install
  * Installed `integer`: The number of clients that have completed the install
  * Package `string`: The name of the package
  * PackageID `string`: The ID of the package
  * PackageStatusItems `array`: The individual package status items
    * items [UpdateSystem.Models.PackageStatus](#updatesystem.models.packagestatus)

### UpdateSystem.Models.PackageType
* UpdateSystem.Models.PackageType `object`
  * Attribute `string`: The inventory attribute (from the InventoryPackage) used to determine what version of this package type is installed.
  * Category `string`: The inventory category (from the InventoryPackage) used to determine what version of this package type is installed.
  * Description **required** `string`: The description of the package type
  * Icon `string`: Optional.  The icon to use for the PackageType, in base 64
  * InventoryFrequency `integer`: The number of minutes to wait before requesting another inventory.  The default value is 1440 (24 hours).
  * InventoryPackage `string`: The inventory package used to determine what version of this package type is installed.
  * LocalizedDescription `string`: Optional. The StringID used to localize the description of the PackageType
  * LocalizedName `string`: Optional. The StringID used to localize the name of the PackageType
  * MaxDeltaPackages `integer`: The maximum number of "chained" delta packages to use when updating the client
  * PackageTypeID `string`: Read Only. The package type id.

### UpdateSystem.Models.PackageTypeIDtoBundle
* UpdateSystem.Models.PackageTypeIDtoBundle `object`
  * BundleID **required** `string`: The bundle to include the package in.
  * PackageTypeID **required** `string`: The package type id of the package to include
  * PackageVersion **required** `integer`: The package version of the package to include
  * Priority `integer`: The execution priority of the package relative to other packages in the bundle. Range 1 - 100, lower value indication higher priority.
  * SubscriptionType `string` (values: Required, IncludeByDefault, ExcludeByDefault): Optional. The type of subscription supported.  The default subscription type is Required.

### UpdateSystem.Models.PagedClientStatusMetadata
* UpdateSystem.Models.PagedClientStatusMetadata `object`
  * Limit **required** `integer`: The number of entities this paged response is limited to.
  * Offset **required** `integer`: The number of entities prior to this page of items.
  * ReportResultExpected **required** `string`: The label for data contained in ClientStatus.ReportResults
  * ReportResultLabel **required** `string`: The label for data contained in ClientStatus.ReportResults
  * ReportValueLabel **required** `string`: The label for data contained in ClientStatus.ReportValue
  * TotalCount **required** `integer`: The total number of entities matching the request.

### UpdateSystem.Models.PriorityPackage
* UpdateSystem.Models.PriorityPackage `object`
  * Autorun `boolean`: Read Only. From the package specified by package ID.
  * CRC `string`: Read Only. From the package specified by package ID.
  * ClientID **required** `string`: The ID of the client to receive the priority package
  * Description `string`: Read Only. From the package specified by package ID.
  * Notes `string`: Read Only. From the package specified by package ID.
  * PackageID **required** `string`: The ID of the package to push as a priority package.
  * PackageTypeID `string`: Read Only. From the package specified by package ID.
  * PreviousVersion `integer`: Read Only. From the package specified by package ID.
  * PriorityPackageID `string`: Read Only. The ID of the priority package.
  * ReleaseDate `string`: Read Only. From the package specified by package ID.
  * Released `boolean`: Read Only. From the package specified by package ID.
  * RemoveOnSuccess `boolean`: Read Only. From the package specified by package ID.
  * Size `integer`: Read Only. From the package specified by package ID.
  * Switches `string`: The command line arguments for the priority package.  Default value is an empty string.
  * TimeStamp `string`: Read Only. The timestamp of the priority package.
  * Url `string`: Read Only. From the package specified by package ID.
  * Version `integer`: Read Only. From the package specified by package ID.

### UpdateSystem.Models.UpdateGroup
* UpdateSystem.Models.UpdateGroup `object`
  * Description **required** `string`: The description of the update group
  * ID `string`
  * InventoryFrequency `integer`: The time in minutes between inventory checks. Default value is 1440 minutes (one day).
  * InventoryPackage `string`: The Package ID of the package used for inventory
  * LocalizedDescription `string`: Optional. The StringID used to localize the description of the update group
  * LocalizedName `string`: Optional. The StringID used to localize the name of the update group
  * ReportField `string`: A field to return in the status report for this update group.
  * UpdateType **required** `string`: The update type name
  * ValidatingField `string`: A field used for validation in the status report for this update group.
  * ValueToValidate `string`: The value to validate the ValidationField against.
  * Version `string`: The version of the UpdateGroup, this value is incremented with each modification to a related Bundle or PackageType

### UpdateSystem.Models.UpdateGroupClientRelationship
* UpdateSystem.Models.UpdateGroupClientRelationship `object`
  * Active `boolean`: The subscription status.  The status is active by default.
  * ClientID **required** `string`: Read Only after creation. The client id of the subscriber.
  * LastCheckin `string`: ReadOnly. The timestamp of the last checkin.
  * RelationshipID `string`: Read Only after creation. The relationship id.  A relationship id will be assigned if not provided on creation.
  * UpdateGroupID **required** `string`: Read Only after creation. The update group to subscribe to.

### UpdateSystem.Models.UpdateGroupSubscription
* UpdateSystem.Models.UpdateGroupSubscription `object`
  * ClientID **required** `string`: The ClientID.
  * Include **required** `boolean`: True to receive content of type indicated by PackageTypeID.
  * PackageTypeID **required** `string`: The PackageType to set subscription status for
  * UpdateGroupID **required** `string`: The Update Group this subscription is relevant for.
  * UpdateGroupSubscriptionID `integer`: The Update Group Subscription ID.  This ID will be automatically assigned when creating an Update Group Subscription.

### UpdateSystem.Models.UpdateMetricsData
* UpdateSystem.Models.UpdateMetricsData `object`: Model that retrieves the data for UpdateMetrics
  * ActiveVersion `string`: Active version (bundle number) of update type.
  * ActiveVersionByClient `array`: Generic collection that is of type ActiveVersionByClientRecord
    * items [UpdateSystem.Models.UpdateMetricsData.ActiveVersionByClientRecord](#updatesystem.models.updatemetricsdata.activeversionbyclientrecord)
  * CurrentStateByClient `array`: Generic collection that is of type CurrentStateByClientRecord
    * items [UpdateSystem.Models.UpdateMetricsData.CurrentStateByClientRecord](#updatesystem.models.updatemetricsdata.currentstatebyclientrecord)
  * CutOffDate `string`: Date that has been configured to only show the most recent clients with a cut off date. (Ex. year from current date)
  * DataRefreshed `string`: Data was refreshed at this time.
  * FilteredClientCount `integer`: Sum of clients represented
  * PackageErrors `array`: Generic collection that is of type PackageErrorsRecord
    * items [UpdateSystem.Models.UpdateMetricsData.PackageErrorsRecord](#updatesystem.models.updatemetricsdata.packageerrorsrecord)
  * TotalClientCount `integer`: Total clients we have ever serviced

### UpdateSystem.Models.UpdateMetricsData.ActiveVersionByClientRecord
* UpdateSystem.Models.UpdateMetricsData.ActiveVersionByClientRecord `object`
  * BundleNumber `integer`
  * ClientCount `integer`
  * ReleaseName `string`

### UpdateSystem.Models.UpdateMetricsData.CurrentStateByClientRecord
* UpdateSystem.Models.UpdateMetricsData.CurrentStateByClientRecord `object`
  * ClientCount `integer`
  * State `string`

### UpdateSystem.Models.UpdateMetricsData.PackageErrorsRecord
* UpdateSystem.Models.UpdateMetricsData.PackageErrorsRecord `object`
  * ClientCount `integer`
  * ErrorCode `string`
  * LongDescription `string`
  * ShortDescription `string`


