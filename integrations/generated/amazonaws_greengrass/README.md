# @datafire/amazonaws_greengrass

Client library for AWS Greengrass

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_greengrass
```
```js
let amazonaws_greengrass = require('@datafire/amazonaws_greengrass').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

amazonaws_greengrass.ListCoreDefinitions({}).then(data => {
  console.log(data);
});
```

## Description

AWS Greengrass seamlessly extends AWS onto physical devices so they can act locally on the data they generate, while still using the cloud for management, analytics, and durable storage. AWS Greengrass ensures your devices can respond quickly to local events and operate with intermittent connectivity. AWS Greengrass minimizes the cost of transmitting data to the cloud by allowing you to author AWS Lambda functions that execute locally.

## Actions

### ListCoreDefinitions



```js
amazonaws_greengrass.ListCoreDefinitions({}, context)
```

#### Input
* input `object`

#### Output
* output [ListCoreDefinitionsResponse](#listcoredefinitionsresponse)

### CreateCoreDefinition



```js
amazonaws_greengrass.CreateCoreDefinition({}, context)
```

#### Input
* input `object`
  * InitialVersion [CoreDefinitionVersion](#coredefinitionversion)
  * Name [__string](#__string)

#### Output
* output [CreateCoreDefinitionResponse](#createcoredefinitionresponse)

### DeleteCoreDefinition



```js
amazonaws_greengrass.DeleteCoreDefinition({
  "CoreDefinitionId": ""
}, context)
```

#### Input
* input `object`
  * CoreDefinitionId **required** `string`

#### Output
* output [DeleteCoreDefinitionResponse](#deletecoredefinitionresponse)

### GetCoreDefinition



```js
amazonaws_greengrass.GetCoreDefinition({
  "CoreDefinitionId": ""
}, context)
```

#### Input
* input `object`
  * CoreDefinitionId **required** `string`

#### Output
* output [GetCoreDefinitionResponse](#getcoredefinitionresponse)

### UpdateCoreDefinition



```js
amazonaws_greengrass.UpdateCoreDefinition({
  "CoreDefinitionId": ""
}, context)
```

#### Input
* input `object`
  * CoreDefinitionId **required** `string`
  * Name [__string](#__string)

#### Output
* output [UpdateCoreDefinitionResponse](#updatecoredefinitionresponse)

### ListCoreDefinitionVersions



```js
amazonaws_greengrass.ListCoreDefinitionVersions({
  "CoreDefinitionId": ""
}, context)
```

#### Input
* input `object`
  * CoreDefinitionId **required** `string`

#### Output
* output [ListCoreDefinitionVersionsResponse](#listcoredefinitionversionsresponse)

### CreateCoreDefinitionVersion



```js
amazonaws_greengrass.CreateCoreDefinitionVersion({
  "CoreDefinitionId": ""
}, context)
```

#### Input
* input `object`
  * CoreDefinitionId **required** `string`
  * Cores [__listOfCore](#__listofcore)

#### Output
* output [CreateCoreDefinitionVersionResponse](#createcoredefinitionversionresponse)

### GetCoreDefinitionVersion



```js
amazonaws_greengrass.GetCoreDefinitionVersion({
  "CoreDefinitionId": "",
  "CoreDefinitionVersionId": ""
}, context)
```

#### Input
* input `object`
  * CoreDefinitionId **required** `string`
  * CoreDefinitionVersionId **required** `string`

#### Output
* output [GetCoreDefinitionVersionResponse](#getcoredefinitionversionresponse)

### ListDeviceDefinitions



```js
amazonaws_greengrass.ListDeviceDefinitions({}, context)
```

#### Input
* input `object`

#### Output
* output [ListDeviceDefinitionsResponse](#listdevicedefinitionsresponse)

### CreateDeviceDefinition



```js
amazonaws_greengrass.CreateDeviceDefinition({}, context)
```

#### Input
* input `object`
  * InitialVersion [DeviceDefinitionVersion](#devicedefinitionversion)
  * Name [__string](#__string)

#### Output
* output [CreateDeviceDefinitionResponse](#createdevicedefinitionresponse)

### DeleteDeviceDefinition



```js
amazonaws_greengrass.DeleteDeviceDefinition({
  "DeviceDefinitionId": ""
}, context)
```

#### Input
* input `object`
  * DeviceDefinitionId **required** `string`

#### Output
* output [DeleteDeviceDefinitionResponse](#deletedevicedefinitionresponse)

### GetDeviceDefinition



```js
amazonaws_greengrass.GetDeviceDefinition({
  "DeviceDefinitionId": ""
}, context)
```

#### Input
* input `object`
  * DeviceDefinitionId **required** `string`

#### Output
* output [GetDeviceDefinitionResponse](#getdevicedefinitionresponse)

### UpdateDeviceDefinition



```js
amazonaws_greengrass.UpdateDeviceDefinition({
  "DeviceDefinitionId": ""
}, context)
```

#### Input
* input `object`
  * DeviceDefinitionId **required** `string`
  * Name [__string](#__string)

#### Output
* output [UpdateDeviceDefinitionResponse](#updatedevicedefinitionresponse)

### ListDeviceDefinitionVersions



```js
amazonaws_greengrass.ListDeviceDefinitionVersions({
  "DeviceDefinitionId": ""
}, context)
```

#### Input
* input `object`
  * DeviceDefinitionId **required** `string`

#### Output
* output [ListDeviceDefinitionVersionsResponse](#listdevicedefinitionversionsresponse)

### CreateDeviceDefinitionVersion



```js
amazonaws_greengrass.CreateDeviceDefinitionVersion({
  "DeviceDefinitionId": ""
}, context)
```

#### Input
* input `object`
  * DeviceDefinitionId **required** `string`
  * Devices [__listOfDevice](#__listofdevice)

#### Output
* output [CreateDeviceDefinitionVersionResponse](#createdevicedefinitionversionresponse)

### GetDeviceDefinitionVersion



```js
amazonaws_greengrass.GetDeviceDefinitionVersion({
  "DeviceDefinitionId": "",
  "DeviceDefinitionVersionId": ""
}, context)
```

#### Input
* input `object`
  * DeviceDefinitionId **required** `string`
  * DeviceDefinitionVersionId **required** `string`

#### Output
* output [GetDeviceDefinitionVersionResponse](#getdevicedefinitionversionresponse)

### ListFunctionDefinitions



```js
amazonaws_greengrass.ListFunctionDefinitions({}, context)
```

#### Input
* input `object`

#### Output
* output [ListFunctionDefinitionsResponse](#listfunctiondefinitionsresponse)

### CreateFunctionDefinition



```js
amazonaws_greengrass.CreateFunctionDefinition({}, context)
```

#### Input
* input `object`
  * InitialVersion [FunctionDefinitionVersion](#functiondefinitionversion)
  * Name [__string](#__string)

#### Output
* output [CreateFunctionDefinitionResponse](#createfunctiondefinitionresponse)

### DeleteFunctionDefinition



```js
amazonaws_greengrass.DeleteFunctionDefinition({
  "FunctionDefinitionId": ""
}, context)
```

#### Input
* input `object`
  * FunctionDefinitionId **required** `string`

#### Output
* output [DeleteFunctionDefinitionResponse](#deletefunctiondefinitionresponse)

### GetFunctionDefinition



```js
amazonaws_greengrass.GetFunctionDefinition({
  "FunctionDefinitionId": ""
}, context)
```

#### Input
* input `object`
  * FunctionDefinitionId **required** `string`

#### Output
* output [GetFunctionDefinitionResponse](#getfunctiondefinitionresponse)

### UpdateFunctionDefinition



```js
amazonaws_greengrass.UpdateFunctionDefinition({
  "FunctionDefinitionId": ""
}, context)
```

#### Input
* input `object`
  * FunctionDefinitionId **required** `string`
  * Name [__string](#__string)

#### Output
* output [UpdateFunctionDefinitionResponse](#updatefunctiondefinitionresponse)

### ListFunctionDefinitionVersions



```js
amazonaws_greengrass.ListFunctionDefinitionVersions({
  "FunctionDefinitionId": ""
}, context)
```

#### Input
* input `object`
  * FunctionDefinitionId **required** `string`

#### Output
* output [ListFunctionDefinitionVersionsResponse](#listfunctiondefinitionversionsresponse)

### CreateFunctionDefinitionVersion



```js
amazonaws_greengrass.CreateFunctionDefinitionVersion({
  "FunctionDefinitionId": ""
}, context)
```

#### Input
* input `object`
  * FunctionDefinitionId **required** `string`
  * Functions [__listOfFunction](#__listoffunction)

#### Output
* output [CreateFunctionDefinitionVersionResponse](#createfunctiondefinitionversionresponse)

### GetFunctionDefinitionVersion



```js
amazonaws_greengrass.GetFunctionDefinitionVersion({
  "FunctionDefinitionId": "",
  "FunctionDefinitionVersionId": ""
}, context)
```

#### Input
* input `object`
  * FunctionDefinitionId **required** `string`
  * FunctionDefinitionVersionId **required** `string`

#### Output
* output [GetFunctionDefinitionVersionResponse](#getfunctiondefinitionversionresponse)

### ListLoggerDefinitions



```js
amazonaws_greengrass.ListLoggerDefinitions({}, context)
```

#### Input
* input `object`

#### Output
* output [ListLoggerDefinitionsResponse](#listloggerdefinitionsresponse)

### CreateLoggerDefinition



```js
amazonaws_greengrass.CreateLoggerDefinition({}, context)
```

#### Input
* input `object`
  * InitialVersion [LoggerDefinitionVersion](#loggerdefinitionversion)
  * Name [__string](#__string)

#### Output
* output [CreateLoggerDefinitionResponse](#createloggerdefinitionresponse)

### DeleteLoggerDefinition



```js
amazonaws_greengrass.DeleteLoggerDefinition({
  "LoggerDefinitionId": ""
}, context)
```

#### Input
* input `object`
  * LoggerDefinitionId **required** `string`

#### Output
* output [DeleteLoggerDefinitionResponse](#deleteloggerdefinitionresponse)

### GetLoggerDefinition



```js
amazonaws_greengrass.GetLoggerDefinition({
  "LoggerDefinitionId": ""
}, context)
```

#### Input
* input `object`
  * LoggerDefinitionId **required** `string`

#### Output
* output [GetLoggerDefinitionResponse](#getloggerdefinitionresponse)

### UpdateLoggerDefinition



```js
amazonaws_greengrass.UpdateLoggerDefinition({
  "LoggerDefinitionId": ""
}, context)
```

#### Input
* input `object`
  * LoggerDefinitionId **required** `string`
  * Name [__string](#__string)

#### Output
* output [UpdateLoggerDefinitionResponse](#updateloggerdefinitionresponse)

### ListLoggerDefinitionVersions



```js
amazonaws_greengrass.ListLoggerDefinitionVersions({
  "LoggerDefinitionId": ""
}, context)
```

#### Input
* input `object`
  * LoggerDefinitionId **required** `string`

#### Output
* output [ListLoggerDefinitionVersionsResponse](#listloggerdefinitionversionsresponse)

### CreateLoggerDefinitionVersion



```js
amazonaws_greengrass.CreateLoggerDefinitionVersion({
  "LoggerDefinitionId": ""
}, context)
```

#### Input
* input `object`
  * LoggerDefinitionId **required** `string`
  * Loggers [__listOfLogger](#__listoflogger)

#### Output
* output [CreateLoggerDefinitionVersionResponse](#createloggerdefinitionversionresponse)

### GetLoggerDefinitionVersion



```js
amazonaws_greengrass.GetLoggerDefinitionVersion({
  "LoggerDefinitionId": "",
  "LoggerDefinitionVersionId": ""
}, context)
```

#### Input
* input `object`
  * LoggerDefinitionId **required** `string`
  * LoggerDefinitionVersionId **required** `string`

#### Output
* output [GetLoggerDefinitionVersionResponse](#getloggerdefinitionversionresponse)

### ListResourceDefinitions



```js
amazonaws_greengrass.ListResourceDefinitions({}, context)
```

#### Input
* input `object`

#### Output
* output [ListResourceDefinitionsResponse](#listresourcedefinitionsresponse)

### CreateResourceDefinition



```js
amazonaws_greengrass.CreateResourceDefinition({}, context)
```

#### Input
* input `object`
  * InitialVersion [ResourceDefinitionVersion](#resourcedefinitionversion)
  * Name [__string](#__string)

#### Output
* output [CreateResourceDefinitionResponse](#createresourcedefinitionresponse)

### DeleteResourceDefinition



```js
amazonaws_greengrass.DeleteResourceDefinition({
  "ResourceDefinitionId": ""
}, context)
```

#### Input
* input `object`
  * ResourceDefinitionId **required** `string`

#### Output
* output [DeleteResourceDefinitionResponse](#deleteresourcedefinitionresponse)

### GetResourceDefinition



```js
amazonaws_greengrass.GetResourceDefinition({
  "ResourceDefinitionId": ""
}, context)
```

#### Input
* input `object`
  * ResourceDefinitionId **required** `string`

#### Output
* output [GetResourceDefinitionResponse](#getresourcedefinitionresponse)

### UpdateResourceDefinition



```js
amazonaws_greengrass.UpdateResourceDefinition({
  "ResourceDefinitionId": ""
}, context)
```

#### Input
* input `object`
  * ResourceDefinitionId **required** `string`
  * Name [__string](#__string)

#### Output
* output [UpdateResourceDefinitionResponse](#updateresourcedefinitionresponse)

### ListResourceDefinitionVersions



```js
amazonaws_greengrass.ListResourceDefinitionVersions({
  "ResourceDefinitionId": ""
}, context)
```

#### Input
* input `object`
  * ResourceDefinitionId **required** `string`

#### Output
* output [ListResourceDefinitionVersionsResponse](#listresourcedefinitionversionsresponse)

### CreateResourceDefinitionVersion



```js
amazonaws_greengrass.CreateResourceDefinitionVersion({
  "ResourceDefinitionId": ""
}, context)
```

#### Input
* input `object`
  * ResourceDefinitionId **required** `string`
  * Resources [__listOfResource](#__listofresource)

#### Output
* output [CreateResourceDefinitionVersionResponse](#createresourcedefinitionversionresponse)

### GetResourceDefinitionVersion



```js
amazonaws_greengrass.GetResourceDefinitionVersion({
  "ResourceDefinitionId": "",
  "ResourceDefinitionVersionId": ""
}, context)
```

#### Input
* input `object`
  * ResourceDefinitionId **required** `string`
  * ResourceDefinitionVersionId **required** `string`

#### Output
* output [GetResourceDefinitionVersionResponse](#getresourcedefinitionversionresponse)

### ListSubscriptionDefinitions



```js
amazonaws_greengrass.ListSubscriptionDefinitions({}, context)
```

#### Input
* input `object`

#### Output
* output [ListSubscriptionDefinitionsResponse](#listsubscriptiondefinitionsresponse)

### CreateSubscriptionDefinition



```js
amazonaws_greengrass.CreateSubscriptionDefinition({}, context)
```

#### Input
* input `object`
  * InitialVersion [SubscriptionDefinitionVersion](#subscriptiondefinitionversion)
  * Name [__string](#__string)

#### Output
* output [CreateSubscriptionDefinitionResponse](#createsubscriptiondefinitionresponse)

### DeleteSubscriptionDefinition



```js
amazonaws_greengrass.DeleteSubscriptionDefinition({
  "SubscriptionDefinitionId": ""
}, context)
```

#### Input
* input `object`
  * SubscriptionDefinitionId **required** `string`

#### Output
* output [DeleteSubscriptionDefinitionResponse](#deletesubscriptiondefinitionresponse)

### GetSubscriptionDefinition



```js
amazonaws_greengrass.GetSubscriptionDefinition({
  "SubscriptionDefinitionId": ""
}, context)
```

#### Input
* input `object`
  * SubscriptionDefinitionId **required** `string`

#### Output
* output [GetSubscriptionDefinitionResponse](#getsubscriptiondefinitionresponse)

### UpdateSubscriptionDefinition



```js
amazonaws_greengrass.UpdateSubscriptionDefinition({
  "SubscriptionDefinitionId": ""
}, context)
```

#### Input
* input `object`
  * SubscriptionDefinitionId **required** `string`
  * Name [__string](#__string)

#### Output
* output [UpdateSubscriptionDefinitionResponse](#updatesubscriptiondefinitionresponse)

### ListSubscriptionDefinitionVersions



```js
amazonaws_greengrass.ListSubscriptionDefinitionVersions({
  "SubscriptionDefinitionId": ""
}, context)
```

#### Input
* input `object`
  * SubscriptionDefinitionId **required** `string`

#### Output
* output [ListSubscriptionDefinitionVersionsResponse](#listsubscriptiondefinitionversionsresponse)

### CreateSubscriptionDefinitionVersion



```js
amazonaws_greengrass.CreateSubscriptionDefinitionVersion({
  "SubscriptionDefinitionId": ""
}, context)
```

#### Input
* input `object`
  * SubscriptionDefinitionId **required** `string`
  * Subscriptions [__listOfSubscription](#__listofsubscription)

#### Output
* output [CreateSubscriptionDefinitionVersionResponse](#createsubscriptiondefinitionversionresponse)

### GetSubscriptionDefinitionVersion



```js
amazonaws_greengrass.GetSubscriptionDefinitionVersion({
  "SubscriptionDefinitionId": "",
  "SubscriptionDefinitionVersionId": ""
}, context)
```

#### Input
* input `object`
  * SubscriptionDefinitionId **required** `string`
  * SubscriptionDefinitionVersionId **required** `string`

#### Output
* output [GetSubscriptionDefinitionVersionResponse](#getsubscriptiondefinitionversionresponse)

### ListGroups



```js
amazonaws_greengrass.ListGroups({}, context)
```

#### Input
* input `object`

#### Output
* output [ListGroupsResponse](#listgroupsresponse)

### CreateGroup



```js
amazonaws_greengrass.CreateGroup({}, context)
```

#### Input
* input `object`
  * InitialVersion [GroupVersion](#groupversion)
  * Name [__string](#__string)

#### Output
* output [CreateGroupResponse](#creategroupresponse)

### DeleteGroup



```js
amazonaws_greengrass.DeleteGroup({
  "GroupId": ""
}, context)
```

#### Input
* input `object`
  * GroupId **required** `string`

#### Output
* output [DeleteGroupResponse](#deletegroupresponse)

### GetGroup



```js
amazonaws_greengrass.GetGroup({
  "GroupId": ""
}, context)
```

#### Input
* input `object`
  * GroupId **required** `string`

#### Output
* output [GetGroupResponse](#getgroupresponse)

### UpdateGroup



```js
amazonaws_greengrass.UpdateGroup({
  "GroupId": ""
}, context)
```

#### Input
* input `object`
  * GroupId **required** `string`
  * Name [__string](#__string)

#### Output
* output [UpdateGroupResponse](#updategroupresponse)

### ListGroupCertificateAuthorities



```js
amazonaws_greengrass.ListGroupCertificateAuthorities({
  "GroupId": ""
}, context)
```

#### Input
* input `object`
  * GroupId **required** `string`

#### Output
* output [ListGroupCertificateAuthoritiesResponse](#listgroupcertificateauthoritiesresponse)

### CreateGroupCertificateAuthority



```js
amazonaws_greengrass.CreateGroupCertificateAuthority({
  "GroupId": ""
}, context)
```

#### Input
* input `object`
  * GroupId **required** `string`

#### Output
* output [CreateGroupCertificateAuthorityResponse](#creategroupcertificateauthorityresponse)

### GetGroupCertificateConfiguration



```js
amazonaws_greengrass.GetGroupCertificateConfiguration({
  "GroupId": ""
}, context)
```

#### Input
* input `object`
  * GroupId **required** `string`

#### Output
* output [GetGroupCertificateConfigurationResponse](#getgroupcertificateconfigurationresponse)

### UpdateGroupCertificateConfiguration



```js
amazonaws_greengrass.UpdateGroupCertificateConfiguration({
  "GroupId": ""
}, context)
```

#### Input
* input `object`
  * GroupId **required** `string`
  * CertificateExpiryInMilliseconds [__string](#__string)

#### Output
* output [UpdateGroupCertificateConfigurationResponse](#updategroupcertificateconfigurationresponse)

### GetGroupCertificateAuthority



```js
amazonaws_greengrass.GetGroupCertificateAuthority({
  "GroupId": "",
  "CertificateAuthorityId": ""
}, context)
```

#### Input
* input `object`
  * GroupId **required** `string`
  * CertificateAuthorityId **required** `string`

#### Output
* output [GetGroupCertificateAuthorityResponse](#getgroupcertificateauthorityresponse)

### ListDeployments



```js
amazonaws_greengrass.ListDeployments({
  "GroupId": ""
}, context)
```

#### Input
* input `object`
  * GroupId **required** `string`

#### Output
* output [ListDeploymentsResponse](#listdeploymentsresponse)

### CreateDeployment



```js
amazonaws_greengrass.CreateDeployment({
  "GroupId": ""
}, context)
```

#### Input
* input `object`
  * GroupId **required** `string`
  * DeploymentId [__string](#__string)
  * DeploymentType [DeploymentType](#deploymenttype)
  * GroupVersionId [__string](#__string)

#### Output
* output [CreateDeploymentResponse](#createdeploymentresponse)

### ResetDeployments



```js
amazonaws_greengrass.ResetDeployments({
  "GroupId": ""
}, context)
```

#### Input
* input `object`
  * GroupId **required** `string`
  * Force [__boolean](#__boolean)

#### Output
* output [ResetDeploymentsResponse](#resetdeploymentsresponse)

### GetDeploymentStatus



```js
amazonaws_greengrass.GetDeploymentStatus({
  "GroupId": "",
  "DeploymentId": ""
}, context)
```

#### Input
* input `object`
  * GroupId **required** `string`
  * DeploymentId **required** `string`

#### Output
* output [GetDeploymentStatusResponse](#getdeploymentstatusresponse)

### DisassociateRoleFromGroup



```js
amazonaws_greengrass.DisassociateRoleFromGroup({
  "GroupId": ""
}, context)
```

#### Input
* input `object`
  * GroupId **required** `string`

#### Output
* output [DisassociateRoleFromGroupResponse](#disassociaterolefromgroupresponse)

### GetAssociatedRole



```js
amazonaws_greengrass.GetAssociatedRole({
  "GroupId": ""
}, context)
```

#### Input
* input `object`
  * GroupId **required** `string`

#### Output
* output [GetAssociatedRoleResponse](#getassociatedroleresponse)

### AssociateRoleToGroup



```js
amazonaws_greengrass.AssociateRoleToGroup({
  "GroupId": ""
}, context)
```

#### Input
* input `object`
  * GroupId **required** `string`
  * RoleArn [__string](#__string)

#### Output
* output [AssociateRoleToGroupResponse](#associateroletogroupresponse)

### ListGroupVersions



```js
amazonaws_greengrass.ListGroupVersions({
  "GroupId": ""
}, context)
```

#### Input
* input `object`
  * GroupId **required** `string`

#### Output
* output [ListGroupVersionsResponse](#listgroupversionsresponse)

### CreateGroupVersion



```js
amazonaws_greengrass.CreateGroupVersion({
  "GroupId": ""
}, context)
```

#### Input
* input `object`
  * GroupId **required** `string`
  * CoreDefinitionVersionArn [__string](#__string)
  * DeviceDefinitionVersionArn [__string](#__string)
  * FunctionDefinitionVersionArn [__string](#__string)
  * LoggerDefinitionVersionArn [__string](#__string)
  * ResourceDefinitionVersionArn [__string](#__string)
  * SubscriptionDefinitionVersionArn [__string](#__string)

#### Output
* output [CreateGroupVersionResponse](#creategroupversionresponse)

### GetGroupVersion



```js
amazonaws_greengrass.GetGroupVersion({
  "GroupId": "",
  "GroupVersionId": ""
}, context)
```

#### Input
* input `object`
  * GroupId **required** `string`
  * GroupVersionId **required** `string`

#### Output
* output [GetGroupVersionResponse](#getgroupversionresponse)

### DisassociateServiceRoleFromAccount



```js
amazonaws_greengrass.DisassociateServiceRoleFromAccount({}, context)
```

#### Input
* input `object`

#### Output
* output [DisassociateServiceRoleFromAccountResponse](#disassociateservicerolefromaccountresponse)

### GetServiceRoleForAccount



```js
amazonaws_greengrass.GetServiceRoleForAccount({}, context)
```

#### Input
* input `object`

#### Output
* output [GetServiceRoleForAccountResponse](#getserviceroleforaccountresponse)

### AssociateServiceRoleToAccount



```js
amazonaws_greengrass.AssociateServiceRoleToAccount({}, context)
```

#### Input
* input `object`
  * RoleArn [__string](#__string)

#### Output
* output [AssociateServiceRoleToAccountResponse](#associateserviceroletoaccountresponse)

### GetConnectivityInfo



```js
amazonaws_greengrass.GetConnectivityInfo({
  "ThingName": ""
}, context)
```

#### Input
* input `object`
  * ThingName **required** `string`

#### Output
* output [GetConnectivityInfoResponse](#getconnectivityinforesponse)

### UpdateConnectivityInfo



```js
amazonaws_greengrass.UpdateConnectivityInfo({
  "ThingName": ""
}, context)
```

#### Input
* input `object`
  * ThingName **required** `string`
  * ConnectivityInfo [__listOfConnectivityInfo](#__listofconnectivityinfo)

#### Output
* output [UpdateConnectivityInfoResponse](#updateconnectivityinforesponse)

### CreateSoftwareUpdateJob



```js
amazonaws_greengrass.CreateSoftwareUpdateJob({}, context)
```

#### Input
* input `object`
  * S3UrlSignerRole [S3UrlSignerRole](#s3urlsignerrole)
  * SoftwareToUpdate [SoftwareToUpdate](#softwaretoupdate)
  * UpdateAgentLogLevel [UpdateAgentLogLevel](#updateagentloglevel)
  * UpdateTargets [UpdateTargets](#updatetargets)
  * UpdateTargetsArchitecture [UpdateTargetsArchitecture](#updatetargetsarchitecture)
  * UpdateTargetsOperatingSystem [UpdateTargetsOperatingSystem](#updatetargetsoperatingsystem)

#### Output
* output [CreateSoftwareUpdateJobResponse](#createsoftwareupdatejobresponse)



## Definitions

### AssociateRoleToGroupRequest
* AssociateRoleToGroupRequest `object`
  * RoleArn [__string](#__string)

### AssociateRoleToGroupResponse
* AssociateRoleToGroupResponse `object`
  * AssociatedAt [__string](#__string)

### AssociateServiceRoleToAccountRequest
* AssociateServiceRoleToAccountRequest `object`
  * RoleArn [__string](#__string)

### AssociateServiceRoleToAccountResponse
* AssociateServiceRoleToAccountResponse `object`
  * AssociatedAt [__string](#__string)

### BadRequestException
* BadRequestException `object`: General error information.
  * ErrorDetails [ErrorDetails](#errordetails)
  * Message [__string](#__string)

### ConnectivityInfo
* ConnectivityInfo `object`: Information about a Greengrass core's connectivity.
  * HostAddress [__string](#__string)
  * Id [__string](#__string)
  * Metadata [__string](#__string)
  * PortNumber [__integer](#__integer)

### Core
* Core `object`: Information about a core.
  * CertificateArn [__string](#__string)
  * Id [__string](#__string)
  * SyncShadow [__boolean](#__boolean)
  * ThingArn [__string](#__string)

### CoreDefinitionVersion
* CoreDefinitionVersion `object`: Information about a core definition version.
  * Cores [__listOfCore](#__listofcore)

### CreateCoreDefinitionRequest
* CreateCoreDefinitionRequest `object`: Information needed to create a core definition.
  * InitialVersion [CoreDefinitionVersion](#coredefinitionversion)
  * Name [__string](#__string)

### CreateCoreDefinitionResponse
* CreateCoreDefinitionResponse `object`
  * Arn [__string](#__string)
  * CreationTimestamp [__string](#__string)
  * Id [__string](#__string)
  * LastUpdatedTimestamp [__string](#__string)
  * LatestVersion [__string](#__string)
  * LatestVersionArn [__string](#__string)
  * Name [__string](#__string)

### CreateCoreDefinitionVersionRequest
* CreateCoreDefinitionVersionRequest `object`
  * Cores [__listOfCore](#__listofcore)

### CreateCoreDefinitionVersionResponse
* CreateCoreDefinitionVersionResponse `object`
  * Arn [__string](#__string)
  * CreationTimestamp [__string](#__string)
  * Id [__string](#__string)
  * Version [__string](#__string)

### CreateDeploymentRequest
* CreateDeploymentRequest `object`
  * DeploymentId [__string](#__string)
  * DeploymentType [DeploymentType](#deploymenttype)
  * GroupVersionId [__string](#__string)

### CreateDeploymentResponse
* CreateDeploymentResponse `object`
  * DeploymentArn [__string](#__string)
  * DeploymentId [__string](#__string)

### CreateDeviceDefinitionRequest
* CreateDeviceDefinitionRequest `object`
  * InitialVersion [DeviceDefinitionVersion](#devicedefinitionversion)
  * Name [__string](#__string)

### CreateDeviceDefinitionResponse
* CreateDeviceDefinitionResponse `object`
  * Arn [__string](#__string)
  * CreationTimestamp [__string](#__string)
  * Id [__string](#__string)
  * LastUpdatedTimestamp [__string](#__string)
  * LatestVersion [__string](#__string)
  * LatestVersionArn [__string](#__string)
  * Name [__string](#__string)

### CreateDeviceDefinitionVersionRequest
* CreateDeviceDefinitionVersionRequest `object`
  * Devices [__listOfDevice](#__listofdevice)

### CreateDeviceDefinitionVersionResponse
* CreateDeviceDefinitionVersionResponse `object`
  * Arn [__string](#__string)
  * CreationTimestamp [__string](#__string)
  * Id [__string](#__string)
  * Version [__string](#__string)

### CreateFunctionDefinitionRequest
* CreateFunctionDefinitionRequest `object`
  * InitialVersion [FunctionDefinitionVersion](#functiondefinitionversion)
  * Name [__string](#__string)

### CreateFunctionDefinitionResponse
* CreateFunctionDefinitionResponse `object`
  * Arn [__string](#__string)
  * CreationTimestamp [__string](#__string)
  * Id [__string](#__string)
  * LastUpdatedTimestamp [__string](#__string)
  * LatestVersion [__string](#__string)
  * LatestVersionArn [__string](#__string)
  * Name [__string](#__string)

### CreateFunctionDefinitionVersionRequest
* CreateFunctionDefinitionVersionRequest `object`: Information needed to create a function definition version.
  * Functions [__listOfFunction](#__listoffunction)

### CreateFunctionDefinitionVersionResponse
* CreateFunctionDefinitionVersionResponse `object`
  * Arn [__string](#__string)
  * CreationTimestamp [__string](#__string)
  * Id [__string](#__string)
  * Version [__string](#__string)

### CreateGroupCertificateAuthorityRequest
* CreateGroupCertificateAuthorityRequest `object`

### CreateGroupCertificateAuthorityResponse
* CreateGroupCertificateAuthorityResponse `object`
  * GroupCertificateAuthorityArn [__string](#__string)

### CreateGroupRequest
* CreateGroupRequest `object`
  * InitialVersion [GroupVersion](#groupversion)
  * Name [__string](#__string)

### CreateGroupResponse
* CreateGroupResponse `object`
  * Arn [__string](#__string)
  * CreationTimestamp [__string](#__string)
  * Id [__string](#__string)
  * LastUpdatedTimestamp [__string](#__string)
  * LatestVersion [__string](#__string)
  * LatestVersionArn [__string](#__string)
  * Name [__string](#__string)

### CreateGroupVersionRequest
* CreateGroupVersionRequest `object`
  * CoreDefinitionVersionArn [__string](#__string)
  * DeviceDefinitionVersionArn [__string](#__string)
  * FunctionDefinitionVersionArn [__string](#__string)
  * LoggerDefinitionVersionArn [__string](#__string)
  * ResourceDefinitionVersionArn [__string](#__string)
  * SubscriptionDefinitionVersionArn [__string](#__string)

### CreateGroupVersionResponse
* CreateGroupVersionResponse `object`
  * Arn [__string](#__string)
  * CreationTimestamp [__string](#__string)
  * Id [__string](#__string)
  * Version [__string](#__string)

### CreateLoggerDefinitionRequest
* CreateLoggerDefinitionRequest `object`
  * InitialVersion [LoggerDefinitionVersion](#loggerdefinitionversion)
  * Name [__string](#__string)

### CreateLoggerDefinitionResponse
* CreateLoggerDefinitionResponse `object`
  * Arn [__string](#__string)
  * CreationTimestamp [__string](#__string)
  * Id [__string](#__string)
  * LastUpdatedTimestamp [__string](#__string)
  * LatestVersion [__string](#__string)
  * LatestVersionArn [__string](#__string)
  * Name [__string](#__string)

### CreateLoggerDefinitionVersionRequest
* CreateLoggerDefinitionVersionRequest `object`
  * Loggers [__listOfLogger](#__listoflogger)

### CreateLoggerDefinitionVersionResponse
* CreateLoggerDefinitionVersionResponse `object`
  * Arn [__string](#__string)
  * CreationTimestamp [__string](#__string)
  * Id [__string](#__string)
  * Version [__string](#__string)

### CreateResourceDefinitionRequest
* CreateResourceDefinitionRequest `object`
  * InitialVersion [ResourceDefinitionVersion](#resourcedefinitionversion)
  * Name [__string](#__string)

### CreateResourceDefinitionResponse
* CreateResourceDefinitionResponse `object`
  * Arn [__string](#__string)
  * CreationTimestamp [__string](#__string)
  * Id [__string](#__string)
  * LastUpdatedTimestamp [__string](#__string)
  * LatestVersion [__string](#__string)
  * LatestVersionArn [__string](#__string)
  * Name [__string](#__string)

### CreateResourceDefinitionVersionRequest
* CreateResourceDefinitionVersionRequest `object`
  * Resources [__listOfResource](#__listofresource)

### CreateResourceDefinitionVersionResponse
* CreateResourceDefinitionVersionResponse `object`
  * Arn [__string](#__string)
  * CreationTimestamp [__string](#__string)
  * Id [__string](#__string)
  * Version [__string](#__string)

### CreateSoftwareUpdateJobRequest
* CreateSoftwareUpdateJobRequest `object`
  * S3UrlSignerRole [S3UrlSignerRole](#s3urlsignerrole)
  * SoftwareToUpdate [SoftwareToUpdate](#softwaretoupdate)
  * UpdateAgentLogLevel [UpdateAgentLogLevel](#updateagentloglevel)
  * UpdateTargets [UpdateTargets](#updatetargets)
  * UpdateTargetsArchitecture [UpdateTargetsArchitecture](#updatetargetsarchitecture)
  * UpdateTargetsOperatingSystem [UpdateTargetsOperatingSystem](#updatetargetsoperatingsystem)

### CreateSoftwareUpdateJobResponse
* CreateSoftwareUpdateJobResponse `object`
  * IotJobArn [__string](#__string)
  * IotJobId [__string](#__string)

### CreateSubscriptionDefinitionRequest
* CreateSubscriptionDefinitionRequest `object`
  * InitialVersion [SubscriptionDefinitionVersion](#subscriptiondefinitionversion)
  * Name [__string](#__string)

### CreateSubscriptionDefinitionResponse
* CreateSubscriptionDefinitionResponse `object`
  * Arn [__string](#__string)
  * CreationTimestamp [__string](#__string)
  * Id [__string](#__string)
  * LastUpdatedTimestamp [__string](#__string)
  * LatestVersion [__string](#__string)
  * LatestVersionArn [__string](#__string)
  * Name [__string](#__string)

### CreateSubscriptionDefinitionVersionRequest
* CreateSubscriptionDefinitionVersionRequest `object`
  * Subscriptions [__listOfSubscription](#__listofsubscription)

### CreateSubscriptionDefinitionVersionResponse
* CreateSubscriptionDefinitionVersionResponse `object`
  * Arn [__string](#__string)
  * CreationTimestamp [__string](#__string)
  * Id [__string](#__string)
  * Version [__string](#__string)

### DefinitionInformation
* DefinitionInformation `object`: Information about a definition.
  * Arn [__string](#__string)
  * CreationTimestamp [__string](#__string)
  * Id [__string](#__string)
  * LastUpdatedTimestamp [__string](#__string)
  * LatestVersion [__string](#__string)
  * LatestVersionArn [__string](#__string)
  * Name [__string](#__string)

### DeleteCoreDefinitionRequest
* DeleteCoreDefinitionRequest `object`

### DeleteCoreDefinitionResponse
* DeleteCoreDefinitionResponse `object`

### DeleteDeviceDefinitionRequest
* DeleteDeviceDefinitionRequest `object`

### DeleteDeviceDefinitionResponse
* DeleteDeviceDefinitionResponse `object`

### DeleteFunctionDefinitionRequest
* DeleteFunctionDefinitionRequest `object`

### DeleteFunctionDefinitionResponse
* DeleteFunctionDefinitionResponse `object`

### DeleteGroupRequest
* DeleteGroupRequest `object`

### DeleteGroupResponse
* DeleteGroupResponse `object`

### DeleteLoggerDefinitionRequest
* DeleteLoggerDefinitionRequest `object`

### DeleteLoggerDefinitionResponse
* DeleteLoggerDefinitionResponse `object`

### DeleteResourceDefinitionRequest
* DeleteResourceDefinitionRequest `object`

### DeleteResourceDefinitionResponse
* DeleteResourceDefinitionResponse `object`

### DeleteSubscriptionDefinitionRequest
* DeleteSubscriptionDefinitionRequest `object`

### DeleteSubscriptionDefinitionResponse
* DeleteSubscriptionDefinitionResponse `object`

### Deployment
* Deployment `object`: Information about a deployment.
  * CreatedAt [__string](#__string)
  * DeploymentArn [__string](#__string)
  * DeploymentId [__string](#__string)
  * DeploymentType [DeploymentType](#deploymenttype)
  * GroupArn [__string](#__string)

### DeploymentType
* DeploymentType `string` (values: NewDeployment, Redeployment, ResetDeployment, ForceResetDeployment)

### Deployments
* Deployments `array`
  * items [Deployment](#deployment)

### Device
* Device `object`: Information about a device.
  * CertificateArn [__string](#__string)
  * Id [__string](#__string)
  * SyncShadow [__boolean](#__boolean)
  * ThingArn [__string](#__string)

### DeviceDefinitionVersion
* DeviceDefinitionVersion `object`: Information about a device definition version.
  * Devices [__listOfDevice](#__listofdevice)

### DisassociateRoleFromGroupRequest
* DisassociateRoleFromGroupRequest `object`

### DisassociateRoleFromGroupResponse
* DisassociateRoleFromGroupResponse `object`
  * DisassociatedAt [__string](#__string)

### DisassociateServiceRoleFromAccountRequest
* DisassociateServiceRoleFromAccountRequest `object`

### DisassociateServiceRoleFromAccountResponse
* DisassociateServiceRoleFromAccountResponse `object`
  * DisassociatedAt [__string](#__string)

### Empty
* Empty `object`: Empty

### EncodingType
* EncodingType `string` (values: binary, json)

### ErrorDetail
* ErrorDetail `object`: Details about the error.
  * DetailedErrorCode [__string](#__string)
  * DetailedErrorMessage [__string](#__string)

### ErrorDetails
* ErrorDetails `array`: A list of error details.
  * items [ErrorDetail](#errordetail)

### Function
* Function `object`: Information about a Lambda function.
  * FunctionArn [__string](#__string)
  * FunctionConfiguration [FunctionConfiguration](#functionconfiguration)
  * Id [__string](#__string)

### FunctionConfiguration
* FunctionConfiguration `object`: The configuration of the Lambda function.
  * EncodingType [EncodingType](#encodingtype)
  * Environment [FunctionConfigurationEnvironment](#functionconfigurationenvironment)
  * ExecArgs [__string](#__string)
  * Executable [__string](#__string)
  * MemorySize [__integer](#__integer)
  * Pinned [__boolean](#__boolean)
  * Timeout [__integer](#__integer)

### FunctionConfigurationEnvironment
* FunctionConfigurationEnvironment `object`: The environment configuration of the function.
  * AccessSysfs [__boolean](#__boolean)
  * ResourceAccessPolicies [__listOfResourceAccessPolicy](#__listofresourceaccesspolicy)
  * Variables [__mapOf__string](#__mapof__string)

### FunctionDefinitionVersion
* FunctionDefinitionVersion `object`: Information about a function definition version.
  * Functions [__listOfFunction](#__listoffunction)

### GeneralError
* GeneralError `object`: General error information.
  * ErrorDetails [ErrorDetails](#errordetails)
  * Message [__string](#__string)

### GetAssociatedRoleRequest
* GetAssociatedRoleRequest `object`

### GetAssociatedRoleResponse
* GetAssociatedRoleResponse `object`
  * AssociatedAt [__string](#__string)
  * RoleArn [__string](#__string)

### GetConnectivityInfoRequest
* GetConnectivityInfoRequest `object`

### GetConnectivityInfoResponse
* GetConnectivityInfoResponse `object`
  * ConnectivityInfo [__listOfConnectivityInfo](#__listofconnectivityinfo)
  * Message [__string](#__string)

### GetCoreDefinitionRequest
* GetCoreDefinitionRequest `object`

### GetCoreDefinitionResponse
* GetCoreDefinitionResponse `object`
  * Arn [__string](#__string)
  * CreationTimestamp [__string](#__string)
  * Id [__string](#__string)
  * LastUpdatedTimestamp [__string](#__string)
  * LatestVersion [__string](#__string)
  * LatestVersionArn [__string](#__string)
  * Name [__string](#__string)

### GetCoreDefinitionVersionRequest
* GetCoreDefinitionVersionRequest `object`

### GetCoreDefinitionVersionResponse
* GetCoreDefinitionVersionResponse `object`
  * Arn [__string](#__string)
  * CreationTimestamp [__string](#__string)
  * Definition [CoreDefinitionVersion](#coredefinitionversion)
  * Id [__string](#__string)
  * Version [__string](#__string)

### GetDeploymentStatusRequest
* GetDeploymentStatusRequest `object`

### GetDeploymentStatusResponse
* GetDeploymentStatusResponse `object`
  * DeploymentStatus [__string](#__string)
  * DeploymentType [DeploymentType](#deploymenttype)
  * ErrorDetails [ErrorDetails](#errordetails)
  * ErrorMessage [__string](#__string)
  * UpdatedAt [__string](#__string)

### GetDeviceDefinitionRequest
* GetDeviceDefinitionRequest `object`

### GetDeviceDefinitionResponse
* GetDeviceDefinitionResponse `object`
  * Arn [__string](#__string)
  * CreationTimestamp [__string](#__string)
  * Id [__string](#__string)
  * LastUpdatedTimestamp [__string](#__string)
  * LatestVersion [__string](#__string)
  * LatestVersionArn [__string](#__string)
  * Name [__string](#__string)

### GetDeviceDefinitionVersionRequest
* GetDeviceDefinitionVersionRequest `object`

### GetDeviceDefinitionVersionResponse
* GetDeviceDefinitionVersionResponse `object`
  * Arn [__string](#__string)
  * CreationTimestamp [__string](#__string)
  * Definition [DeviceDefinitionVersion](#devicedefinitionversion)
  * Id [__string](#__string)
  * Version [__string](#__string)

### GetFunctionDefinitionRequest
* GetFunctionDefinitionRequest `object`

### GetFunctionDefinitionResponse
* GetFunctionDefinitionResponse `object`
  * Arn [__string](#__string)
  * CreationTimestamp [__string](#__string)
  * Id [__string](#__string)
  * LastUpdatedTimestamp [__string](#__string)
  * LatestVersion [__string](#__string)
  * LatestVersionArn [__string](#__string)
  * Name [__string](#__string)

### GetFunctionDefinitionVersionRequest
* GetFunctionDefinitionVersionRequest `object`

### GetFunctionDefinitionVersionResponse
* GetFunctionDefinitionVersionResponse `object`
  * Arn [__string](#__string)
  * CreationTimestamp [__string](#__string)
  * Definition [FunctionDefinitionVersion](#functiondefinitionversion)
  * Id [__string](#__string)
  * Version [__string](#__string)

### GetGroupCertificateAuthorityRequest
* GetGroupCertificateAuthorityRequest `object`

### GetGroupCertificateAuthorityResponse
* GetGroupCertificateAuthorityResponse `object`
  * GroupCertificateAuthorityArn [__string](#__string)
  * GroupCertificateAuthorityId [__string](#__string)
  * PemEncodedCertificate [__string](#__string)

### GetGroupCertificateConfigurationRequest
* GetGroupCertificateConfigurationRequest `object`

### GetGroupCertificateConfigurationResponse
* GetGroupCertificateConfigurationResponse `object`
  * CertificateAuthorityExpiryInMilliseconds [__string](#__string)
  * CertificateExpiryInMilliseconds [__string](#__string)
  * GroupId [__string](#__string)

### GetGroupRequest
* GetGroupRequest `object`

### GetGroupResponse
* GetGroupResponse `object`
  * Arn [__string](#__string)
  * CreationTimestamp [__string](#__string)
  * Id [__string](#__string)
  * LastUpdatedTimestamp [__string](#__string)
  * LatestVersion [__string](#__string)
  * LatestVersionArn [__string](#__string)
  * Name [__string](#__string)

### GetGroupVersionRequest
* GetGroupVersionRequest `object`

### GetGroupVersionResponse
* GetGroupVersionResponse `object`
  * Arn [__string](#__string)
  * CreationTimestamp [__string](#__string)
  * Definition [GroupVersion](#groupversion)
  * Id [__string](#__string)
  * Version [__string](#__string)

### GetLoggerDefinitionRequest
* GetLoggerDefinitionRequest `object`

### GetLoggerDefinitionResponse
* GetLoggerDefinitionResponse `object`
  * Arn [__string](#__string)
  * CreationTimestamp [__string](#__string)
  * Id [__string](#__string)
  * LastUpdatedTimestamp [__string](#__string)
  * LatestVersion [__string](#__string)
  * LatestVersionArn [__string](#__string)
  * Name [__string](#__string)

### GetLoggerDefinitionVersionRequest
* GetLoggerDefinitionVersionRequest `object`

### GetLoggerDefinitionVersionResponse
* GetLoggerDefinitionVersionResponse `object`
  * Arn [__string](#__string)
  * CreationTimestamp [__string](#__string)
  * Definition [LoggerDefinitionVersion](#loggerdefinitionversion)
  * Id [__string](#__string)
  * Version [__string](#__string)

### GetResourceDefinitionRequest
* GetResourceDefinitionRequest `object`

### GetResourceDefinitionResponse
* GetResourceDefinitionResponse `object`
  * Arn [__string](#__string)
  * CreationTimestamp [__string](#__string)
  * Id [__string](#__string)
  * LastUpdatedTimestamp [__string](#__string)
  * LatestVersion [__string](#__string)
  * LatestVersionArn [__string](#__string)
  * Name [__string](#__string)

### GetResourceDefinitionVersionRequest
* GetResourceDefinitionVersionRequest `object`

### GetResourceDefinitionVersionResponse
* GetResourceDefinitionVersionResponse `object`
  * Arn [__string](#__string)
  * CreationTimestamp [__string](#__string)
  * Definition [ResourceDefinitionVersion](#resourcedefinitionversion)
  * Id [__string](#__string)
  * Version [__string](#__string)

### GetServiceRoleForAccountRequest
* GetServiceRoleForAccountRequest `object`

### GetServiceRoleForAccountResponse
* GetServiceRoleForAccountResponse `object`
  * AssociatedAt [__string](#__string)
  * RoleArn [__string](#__string)

### GetSubscriptionDefinitionRequest
* GetSubscriptionDefinitionRequest `object`

### GetSubscriptionDefinitionResponse
* GetSubscriptionDefinitionResponse `object`
  * Arn [__string](#__string)
  * CreationTimestamp [__string](#__string)
  * Id [__string](#__string)
  * LastUpdatedTimestamp [__string](#__string)
  * LatestVersion [__string](#__string)
  * LatestVersionArn [__string](#__string)
  * Name [__string](#__string)

### GetSubscriptionDefinitionVersionRequest
* GetSubscriptionDefinitionVersionRequest `object`

### GetSubscriptionDefinitionVersionResponse
* GetSubscriptionDefinitionVersionResponse `object`
  * Arn [__string](#__string)
  * CreationTimestamp [__string](#__string)
  * Definition [SubscriptionDefinitionVersion](#subscriptiondefinitionversion)
  * Id [__string](#__string)
  * Version [__string](#__string)

### GroupCertificateAuthorityProperties
* GroupCertificateAuthorityProperties `object`: Information about a certificate authority for a group.
  * GroupCertificateAuthorityArn [__string](#__string)
  * GroupCertificateAuthorityId [__string](#__string)

### GroupCertificateConfiguration
* GroupCertificateConfiguration `object`: Information about a group certificate configuration.
  * CertificateAuthorityExpiryInMilliseconds [__string](#__string)
  * CertificateExpiryInMilliseconds [__string](#__string)
  * GroupId [__string](#__string)

### GroupInformation
* GroupInformation `object`: Information about a group.
  * Arn [__string](#__string)
  * CreationTimestamp [__string](#__string)
  * Id [__string](#__string)
  * LastUpdatedTimestamp [__string](#__string)
  * LatestVersion [__string](#__string)
  * LatestVersionArn [__string](#__string)
  * Name [__string](#__string)

### GroupOwnerSetting
* GroupOwnerSetting `object`: Group owner related settings for local resources.
  * AutoAddGroupOwner [__boolean](#__boolean)
  * GroupOwner [__string](#__string)

### GroupVersion
* GroupVersion `object`: Information about a group version.
  * CoreDefinitionVersionArn [__string](#__string)
  * DeviceDefinitionVersionArn [__string](#__string)
  * FunctionDefinitionVersionArn [__string](#__string)
  * LoggerDefinitionVersionArn [__string](#__string)
  * ResourceDefinitionVersionArn [__string](#__string)
  * SubscriptionDefinitionVersionArn [__string](#__string)

### InternalServerErrorException
* InternalServerErrorException `object`: General error information.
  * ErrorDetails [ErrorDetails](#errordetails)
  * Message [__string](#__string)

### ListCoreDefinitionVersionsRequest
* ListCoreDefinitionVersionsRequest `object`

### ListCoreDefinitionVersionsResponse
* ListCoreDefinitionVersionsResponse `object`
  * NextToken [__string](#__string)
  * Versions [__listOfVersionInformation](#__listofversioninformation)

### ListCoreDefinitionsRequest
* ListCoreDefinitionsRequest `object`

### ListCoreDefinitionsResponse
* ListCoreDefinitionsResponse `object`
  * Definitions [__listOfDefinitionInformation](#__listofdefinitioninformation)
  * NextToken [__string](#__string)

### ListDefinitionsResponse
* ListDefinitionsResponse `object`: A list of definitions.
  * Definitions [__listOfDefinitionInformation](#__listofdefinitioninformation)
  * NextToken [__string](#__string)

### ListDeploymentsRequest
* ListDeploymentsRequest `object`

### ListDeploymentsResponse
* ListDeploymentsResponse `object`
  * Deployments [Deployments](#deployments)
  * NextToken [__string](#__string)

### ListDeviceDefinitionVersionsRequest
* ListDeviceDefinitionVersionsRequest `object`

### ListDeviceDefinitionVersionsResponse
* ListDeviceDefinitionVersionsResponse `object`
  * NextToken [__string](#__string)
  * Versions [__listOfVersionInformation](#__listofversioninformation)

### ListDeviceDefinitionsRequest
* ListDeviceDefinitionsRequest `object`

### ListDeviceDefinitionsResponse
* ListDeviceDefinitionsResponse `object`
  * Definitions [__listOfDefinitionInformation](#__listofdefinitioninformation)
  * NextToken [__string](#__string)

### ListFunctionDefinitionVersionsRequest
* ListFunctionDefinitionVersionsRequest `object`

### ListFunctionDefinitionVersionsResponse
* ListFunctionDefinitionVersionsResponse `object`
  * NextToken [__string](#__string)
  * Versions [__listOfVersionInformation](#__listofversioninformation)

### ListFunctionDefinitionsRequest
* ListFunctionDefinitionsRequest `object`

### ListFunctionDefinitionsResponse
* ListFunctionDefinitionsResponse `object`
  * Definitions [__listOfDefinitionInformation](#__listofdefinitioninformation)
  * NextToken [__string](#__string)

### ListGroupCertificateAuthoritiesRequest
* ListGroupCertificateAuthoritiesRequest `object`

### ListGroupCertificateAuthoritiesResponse
* ListGroupCertificateAuthoritiesResponse `object`
  * GroupCertificateAuthorities [__listOfGroupCertificateAuthorityProperties](#__listofgroupcertificateauthorityproperties)

### ListGroupVersionsRequest
* ListGroupVersionsRequest `object`

### ListGroupVersionsResponse
* ListGroupVersionsResponse `object`
  * NextToken [__string](#__string)
  * Versions [__listOfVersionInformation](#__listofversioninformation)

### ListGroupsRequest
* ListGroupsRequest `object`

### ListGroupsResponse
* ListGroupsResponse `object`
  * Groups [__listOfGroupInformation](#__listofgroupinformation)
  * NextToken [__string](#__string)

### ListLoggerDefinitionVersionsRequest
* ListLoggerDefinitionVersionsRequest `object`

### ListLoggerDefinitionVersionsResponse
* ListLoggerDefinitionVersionsResponse `object`
  * NextToken [__string](#__string)
  * Versions [__listOfVersionInformation](#__listofversioninformation)

### ListLoggerDefinitionsRequest
* ListLoggerDefinitionsRequest `object`

### ListLoggerDefinitionsResponse
* ListLoggerDefinitionsResponse `object`
  * Definitions [__listOfDefinitionInformation](#__listofdefinitioninformation)
  * NextToken [__string](#__string)

### ListResourceDefinitionVersionsRequest
* ListResourceDefinitionVersionsRequest `object`

### ListResourceDefinitionVersionsResponse
* ListResourceDefinitionVersionsResponse `object`
  * NextToken [__string](#__string)
  * Versions [__listOfVersionInformation](#__listofversioninformation)

### ListResourceDefinitionsRequest
* ListResourceDefinitionsRequest `object`

### ListResourceDefinitionsResponse
* ListResourceDefinitionsResponse `object`
  * Definitions [__listOfDefinitionInformation](#__listofdefinitioninformation)
  * NextToken [__string](#__string)

### ListSubscriptionDefinitionVersionsRequest
* ListSubscriptionDefinitionVersionsRequest `object`

### ListSubscriptionDefinitionVersionsResponse
* ListSubscriptionDefinitionVersionsResponse `object`
  * NextToken [__string](#__string)
  * Versions [__listOfVersionInformation](#__listofversioninformation)

### ListSubscriptionDefinitionsRequest
* ListSubscriptionDefinitionsRequest `object`

### ListSubscriptionDefinitionsResponse
* ListSubscriptionDefinitionsResponse `object`
  * Definitions [__listOfDefinitionInformation](#__listofdefinitioninformation)
  * NextToken [__string](#__string)

### ListVersionsResponse
* ListVersionsResponse `object`: A list of versions.
  * NextToken [__string](#__string)
  * Versions [__listOfVersionInformation](#__listofversioninformation)

### LocalDeviceResourceData
* LocalDeviceResourceData `object`: Attributes that define a local device resource.
  * GroupOwnerSetting [GroupOwnerSetting](#groupownersetting)
  * SourcePath [__string](#__string)

### LocalVolumeResourceData
* LocalVolumeResourceData `object`: Attributes that define a local volume resource.
  * DestinationPath [__string](#__string)
  * GroupOwnerSetting [GroupOwnerSetting](#groupownersetting)
  * SourcePath [__string](#__string)

### Logger
* Logger `object`: Information about a logger
  * Component [LoggerComponent](#loggercomponent)
  * Id [__string](#__string)
  * Level [LoggerLevel](#loggerlevel)
  * Space [__integer](#__integer)
  * Type [LoggerType](#loggertype)

### LoggerComponent
* LoggerComponent `string` (values: GreengrassSystem, Lambda)

### LoggerDefinitionVersion
* LoggerDefinitionVersion `object`: Information about a logger definition version.
  * Loggers [__listOfLogger](#__listoflogger)

### LoggerLevel
* LoggerLevel `string` (values: DEBUG, INFO, WARN, ERROR, FATAL)

### LoggerType
* LoggerType `string` (values: FileSystem, AWSCloudWatch)

### Permission
* Permission `string` (values: ro, rw): The type of permission a function has to access a resource.

### ResetDeploymentsRequest
* ResetDeploymentsRequest `object`: Information needed to reset deployments.
  * Force [__boolean](#__boolean)

### ResetDeploymentsResponse
* ResetDeploymentsResponse `object`
  * DeploymentArn [__string](#__string)
  * DeploymentId [__string](#__string)

### Resource
* Resource `object`: Information about a resource.
  * Id [__string](#__string)
  * Name [__string](#__string)
  * ResourceDataContainer [ResourceDataContainer](#resourcedatacontainer)

### ResourceAccessPolicy
* ResourceAccessPolicy `object`: A policy used by the function to access a resource.
  * Permission [Permission](#permission)
  * ResourceId [__string](#__string)

### ResourceDataContainer
* ResourceDataContainer `object`: A container for resource data. The container takes only one of the following supported resource data types: ''LocalDeviceResourceData'', ''LocalVolumeResourceData'', ''SageMakerMachineLearningModelResourceData'', ''S3MachineLearningModelResourceData''.
  * LocalDeviceResourceData [LocalDeviceResourceData](#localdeviceresourcedata)
  * LocalVolumeResourceData [LocalVolumeResourceData](#localvolumeresourcedata)
  * S3MachineLearningModelResourceData [S3MachineLearningModelResourceData](#s3machinelearningmodelresourcedata)
  * SageMakerMachineLearningModelResourceData [SageMakerMachineLearningModelResourceData](#sagemakermachinelearningmodelresourcedata)

### ResourceDefinitionVersion
* ResourceDefinitionVersion `object`: Information about a resource definition version.
  * Resources [__listOfResource](#__listofresource)

### S3MachineLearningModelResourceData
* S3MachineLearningModelResourceData `object`: Attributes that define an S3 machine learning resource.
  * DestinationPath [__string](#__string)
  * S3Uri [__string](#__string)

### S3UrlSignerRole
* S3UrlSignerRole `string`: The IAM Role that Greengrass will use to create pre-signed URLs pointing towards the update artifact.

### SageMakerMachineLearningModelResourceData
* SageMakerMachineLearningModelResourceData `object`: Attributes that define an SageMaker machine learning resource.
  * DestinationPath [__string](#__string)
  * SageMakerJobArn [__string](#__string)

### SoftwareToUpdate
* SoftwareToUpdate `string` (values: core, ota_agent): The piece of software on the Greengrass core that will be updated.

### Subscription
* Subscription `object`: Information about a subscription.
  * Id [__string](#__string)
  * Source [__string](#__string)
  * Subject [__string](#__string)
  * Target [__string](#__string)

### SubscriptionDefinitionVersion
* SubscriptionDefinitionVersion `object`: Information about a subscription definition version.
  * Subscriptions [__listOfSubscription](#__listofsubscription)

### UpdateAgentLogLevel
* UpdateAgentLogLevel `string` (values: NONE, TRACE, DEBUG, VERBOSE, INFO, WARN, ERROR, FATAL): The minimum level of log statements that should be logged by the OTA Agent during an update.

### UpdateConnectivityInfoRequest
* UpdateConnectivityInfoRequest `object`: Connectivity information.
  * ConnectivityInfo [__listOfConnectivityInfo](#__listofconnectivityinfo)

### UpdateConnectivityInfoResponse
* UpdateConnectivityInfoResponse `object`
  * Message [__string](#__string)
  * Version [__string](#__string)

### UpdateCoreDefinitionRequest
* UpdateCoreDefinitionRequest `object`
  * Name [__string](#__string)

### UpdateCoreDefinitionResponse
* UpdateCoreDefinitionResponse `object`

### UpdateDeviceDefinitionRequest
* UpdateDeviceDefinitionRequest `object`
  * Name [__string](#__string)

### UpdateDeviceDefinitionResponse
* UpdateDeviceDefinitionResponse `object`

### UpdateFunctionDefinitionRequest
* UpdateFunctionDefinitionRequest `object`
  * Name [__string](#__string)

### UpdateFunctionDefinitionResponse
* UpdateFunctionDefinitionResponse `object`

### UpdateGroupCertificateConfigurationRequest
* UpdateGroupCertificateConfigurationRequest `object`
  * CertificateExpiryInMilliseconds [__string](#__string)

### UpdateGroupCertificateConfigurationResponse
* UpdateGroupCertificateConfigurationResponse `object`
  * CertificateAuthorityExpiryInMilliseconds [__string](#__string)
  * CertificateExpiryInMilliseconds [__string](#__string)
  * GroupId [__string](#__string)

### UpdateGroupRequest
* UpdateGroupRequest `object`
  * Name [__string](#__string)

### UpdateGroupResponse
* UpdateGroupResponse `object`

### UpdateLoggerDefinitionRequest
* UpdateLoggerDefinitionRequest `object`
  * Name [__string](#__string)

### UpdateLoggerDefinitionResponse
* UpdateLoggerDefinitionResponse `object`

### UpdateResourceDefinitionRequest
* UpdateResourceDefinitionRequest `object`
  * Name [__string](#__string)

### UpdateResourceDefinitionResponse
* UpdateResourceDefinitionResponse `object`

### UpdateSubscriptionDefinitionRequest
* UpdateSubscriptionDefinitionRequest `object`
  * Name [__string](#__string)

### UpdateSubscriptionDefinitionResponse
* UpdateSubscriptionDefinitionResponse `object`

### UpdateTargets
* UpdateTargets `array`: The ARNs of the targets (IoT things or IoT thing groups) that this update will be applied to.
  * items [__string](#__string)

### UpdateTargetsArchitecture
* UpdateTargetsArchitecture `string` (values: armv7l, x86_64, aarch64): The architecture of the cores which are the targets of an update.

### UpdateTargetsOperatingSystem
* UpdateTargetsOperatingSystem `string` (values: ubuntu, raspbian, amazon_linux): The operating system of the cores which are the targets of an update.

### VersionInformation
* VersionInformation `object`: Information about a version.
  * Arn [__string](#__string)
  * CreationTimestamp [__string](#__string)
  * Id [__string](#__string)
  * Version [__string](#__string)

### __boolean
* __boolean `boolean`

### __double
* __double `number`

### __integer
* __integer `integer`

### __listOfConnectivityInfo
* __listOfConnectivityInfo `array`
  * items [ConnectivityInfo](#connectivityinfo)

### __listOfCore
* __listOfCore `array`
  * items [Core](#core)

### __listOfDefinitionInformation
* __listOfDefinitionInformation `array`
  * items [DefinitionInformation](#definitioninformation)

### __listOfDevice
* __listOfDevice `array`
  * items [Device](#device)

### __listOfFunction
* __listOfFunction `array`
  * items [Function](#function)

### __listOfGroupCertificateAuthorityProperties
* __listOfGroupCertificateAuthorityProperties `array`
  * items [GroupCertificateAuthorityProperties](#groupcertificateauthorityproperties)

### __listOfGroupInformation
* __listOfGroupInformation `array`
  * items [GroupInformation](#groupinformation)

### __listOfLogger
* __listOfLogger `array`
  * items [Logger](#logger)

### __listOfResource
* __listOfResource `array`
  * items [Resource](#resource)

### __listOfResourceAccessPolicy
* __listOfResourceAccessPolicy `array`
  * items [ResourceAccessPolicy](#resourceaccesspolicy)

### __listOfSubscription
* __listOfSubscription `array`
  * items [Subscription](#subscription)

### __listOfVersionInformation
* __listOfVersionInformation `array`
  * items [VersionInformation](#versioninformation)

### __long
* __long `integer`

### __mapOf__string
* __mapOf__string `array`
  * items `object`
    * key [__string](#__string)
    * value [__string](#__string)

### __string
* __string `string`

### __timestamp
* __timestamp `string`


