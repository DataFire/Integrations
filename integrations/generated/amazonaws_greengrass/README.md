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

### ListSubscriptionDefinitions



```js
amazonaws_greengrass.ListSubscriptionDefinitions({}, context)
```

#### Input
* input `object`

#### Output
* output [ListSubscriptionDefinitionsResponse](#listsubscriptiondefinitionsresponse)

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

### GetServiceRoleForAccount



```js
amazonaws_greengrass.GetServiceRoleForAccount({}, context)
```

#### Input
* input `object`

#### Output
* output [GetServiceRoleForAccountResponse](#getserviceroleforaccountresponse)

### UpdateConnectivityInfo



```js
amazonaws_greengrass.UpdateConnectivityInfo({
  "ThingName": ""
}, context)
```

#### Input
* input `object`
  * ThingName **required** `string`
  * ConnectivityInfo [ListOfConnectivityInfo](#listofconnectivityinfo)

#### Output
* output [UpdateConnectivityInfoResponse](#updateconnectivityinforesponse)



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
* BadRequestException `object`: General Error
  * ErrorDetails [ErrorDetails](#errordetails)
  * Message [__string](#__string)

### ConnectivityInfo
* ConnectivityInfo `object`: Connectivity Info
  * HostAddress [__string](#__string)
  * Id [__string](#__string)
  * Metadata [__string](#__string)
  * PortNumber [__integer](#__integer)

### Core
* Core `object`: Information on the core
  * CertificateArn [__string](#__string)
  * Id [__string](#__string)
  * SyncShadow [__boolean](#__boolean)
  * ThingArn [__string](#__string)

### CoreDefinitionVersion
* CoreDefinitionVersion `object`: Information on core definition version
  * Cores [ListOfCore](#listofcore)

### CreateCoreDefinitionRequest
* CreateCoreDefinitionRequest `object`: Information on the core definition request
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
  * Cores [ListOfCore](#listofcore)

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
  * Devices [ListOfDevice](#listofdevice)

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
* CreateFunctionDefinitionVersionRequest `object`: Function definition version
  * Functions [ListOfFunction](#listoffunction)

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
  * Loggers [ListOfLogger](#listoflogger)

### CreateLoggerDefinitionVersionResponse
* CreateLoggerDefinitionVersionResponse `object`
  * Arn [__string](#__string)
  * CreationTimestamp [__string](#__string)
  * Id [__string](#__string)
  * Version [__string](#__string)

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
  * Subscriptions [ListOfSubscription](#listofsubscription)

### CreateSubscriptionDefinitionVersionResponse
* CreateSubscriptionDefinitionVersionResponse `object`
  * Arn [__string](#__string)
  * CreationTimestamp [__string](#__string)
  * Id [__string](#__string)
  * Version [__string](#__string)

### DefinitionInformation
* DefinitionInformation `object`: Information on the Definition
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

### DeleteSubscriptionDefinitionRequest
* DeleteSubscriptionDefinitionRequest `object`

### DeleteSubscriptionDefinitionResponse
* DeleteSubscriptionDefinitionResponse `object`

### Deployment
* Deployment `object`: Information on the deployment
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
* Device `object`: Information on a Device
  * CertificateArn [__string](#__string)
  * Id [__string](#__string)
  * SyncShadow [__boolean](#__boolean)
  * ThingArn [__string](#__string)

### DeviceDefinitionVersion
* DeviceDefinitionVersion `object`: Information on device definition version
  * Devices [ListOfDevice](#listofdevice)

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

### ErrorDetail
* ErrorDetail `object`: ErrorDetail
  * DetailedErrorCode [__string](#__string)
  * DetailedErrorMessage [__string](#__string)

### ErrorDetails
* ErrorDetails `array`: Error Details
  * items [ErrorDetail](#errordetail)

### Function
* Function `object`: Information on function
  * FunctionArn [__string](#__string)
  * FunctionConfiguration [FunctionConfiguration](#functionconfiguration)
  * Id [__string](#__string)

### FunctionConfiguration
* FunctionConfiguration `object`: Configuration of the function
  * Environment [FunctionConfigurationEnvironment](#functionconfigurationenvironment)
  * ExecArgs [__string](#__string)
  * Executable [__string](#__string)
  * MemorySize [__integer](#__integer)
  * Pinned [__boolean](#__boolean)
  * Timeout [__integer](#__integer)

### FunctionConfigurationEnvironment
* FunctionConfigurationEnvironment `object`: Environment of the function configuration
  * Variables [MapOf__string](#mapof__string)

### FunctionDefinitionVersion
* FunctionDefinitionVersion `object`: Information on the function definition version
  * Functions [ListOfFunction](#listoffunction)

### GeneralError
* GeneralError `object`: General Error
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
  * ConnectivityInfo [ListOfConnectivityInfo](#listofconnectivityinfo)
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
* GroupCertificateAuthorityProperties `object`: Information on group certificate authority properties
  * GroupCertificateAuthorityArn [__string](#__string)
  * GroupCertificateAuthorityId [__string](#__string)

### GroupCertificateConfiguration
* GroupCertificateConfiguration `object`: Information on the group certificate configuration
  * CertificateAuthorityExpiryInMilliseconds [__string](#__string)
  * CertificateExpiryInMilliseconds [__string](#__string)
  * GroupId [__string](#__string)

### GroupInformation
* GroupInformation `object`: Information on the group
  * Arn [__string](#__string)
  * CreationTimestamp [__string](#__string)
  * Id [__string](#__string)
  * LastUpdatedTimestamp [__string](#__string)
  * LatestVersion [__string](#__string)
  * LatestVersionArn [__string](#__string)
  * Name [__string](#__string)

### GroupVersion
* GroupVersion `object`: Information on group version
  * CoreDefinitionVersionArn [__string](#__string)
  * DeviceDefinitionVersionArn [__string](#__string)
  * FunctionDefinitionVersionArn [__string](#__string)
  * LoggerDefinitionVersionArn [__string](#__string)
  * SubscriptionDefinitionVersionArn [__string](#__string)

### InternalServerErrorException
* InternalServerErrorException `object`: General Error
  * ErrorDetails [ErrorDetails](#errordetails)
  * Message [__string](#__string)

### ListCoreDefinitionVersionsRequest
* ListCoreDefinitionVersionsRequest `object`

### ListCoreDefinitionVersionsResponse
* ListCoreDefinitionVersionsResponse `object`
  * NextToken [__string](#__string)
  * Versions [ListOfVersionInformation](#listofversioninformation)

### ListCoreDefinitionsRequest
* ListCoreDefinitionsRequest `object`

### ListCoreDefinitionsResponse
* ListCoreDefinitionsResponse `object`
  * Definitions [ListOfDefinitionInformation](#listofdefinitioninformation)
  * NextToken [__string](#__string)

### ListDefinitionsResponse
* ListDefinitionsResponse `object`: List of definition responses
  * Definitions [ListOfDefinitionInformation](#listofdefinitioninformation)
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
  * Versions [ListOfVersionInformation](#listofversioninformation)

### ListDeviceDefinitionsRequest
* ListDeviceDefinitionsRequest `object`

### ListDeviceDefinitionsResponse
* ListDeviceDefinitionsResponse `object`
  * Definitions [ListOfDefinitionInformation](#listofdefinitioninformation)
  * NextToken [__string](#__string)

### ListFunctionDefinitionVersionsRequest
* ListFunctionDefinitionVersionsRequest `object`

### ListFunctionDefinitionVersionsResponse
* ListFunctionDefinitionVersionsResponse `object`
  * NextToken [__string](#__string)
  * Versions [ListOfVersionInformation](#listofversioninformation)

### ListFunctionDefinitionsRequest
* ListFunctionDefinitionsRequest `object`

### ListFunctionDefinitionsResponse
* ListFunctionDefinitionsResponse `object`
  * Definitions [ListOfDefinitionInformation](#listofdefinitioninformation)
  * NextToken [__string](#__string)

### ListGroupCertificateAuthoritiesRequest
* ListGroupCertificateAuthoritiesRequest `object`

### ListGroupCertificateAuthoritiesResponse
* ListGroupCertificateAuthoritiesResponse `object`
  * GroupCertificateAuthorities [ListOfGroupCertificateAuthorityProperties](#listofgroupcertificateauthorityproperties)

### ListGroupVersionsRequest
* ListGroupVersionsRequest `object`

### ListGroupVersionsResponse
* ListGroupVersionsResponse `object`
  * NextToken [__string](#__string)
  * Versions [ListOfVersionInformation](#listofversioninformation)

### ListGroupsRequest
* ListGroupsRequest `object`

### ListGroupsResponse
* ListGroupsResponse `object`
  * Groups [ListOfGroupInformation](#listofgroupinformation)
  * NextToken [__string](#__string)

### ListLoggerDefinitionVersionsRequest
* ListLoggerDefinitionVersionsRequest `object`

### ListLoggerDefinitionVersionsResponse
* ListLoggerDefinitionVersionsResponse `object`
  * NextToken [__string](#__string)
  * Versions [ListOfVersionInformation](#listofversioninformation)

### ListLoggerDefinitionsRequest
* ListLoggerDefinitionsRequest `object`

### ListLoggerDefinitionsResponse
* ListLoggerDefinitionsResponse `object`
  * Definitions [ListOfDefinitionInformation](#listofdefinitioninformation)
  * NextToken [__string](#__string)

### ListOfConnectivityInfo
* ListOfConnectivityInfo `array`
  * items [ConnectivityInfo](#connectivityinfo)

### ListOfCore
* ListOfCore `array`
  * items [Core](#core)

### ListOfDefinitionInformation
* ListOfDefinitionInformation `array`
  * items [DefinitionInformation](#definitioninformation)

### ListOfDevice
* ListOfDevice `array`
  * items [Device](#device)

### ListOfFunction
* ListOfFunction `array`
  * items [Function](#function)

### ListOfGroupCertificateAuthorityProperties
* ListOfGroupCertificateAuthorityProperties `array`
  * items [GroupCertificateAuthorityProperties](#groupcertificateauthorityproperties)

### ListOfGroupInformation
* ListOfGroupInformation `array`
  * items [GroupInformation](#groupinformation)

### ListOfLogger
* ListOfLogger `array`
  * items [Logger](#logger)

### ListOfSubscription
* ListOfSubscription `array`
  * items [Subscription](#subscription)

### ListOfVersionInformation
* ListOfVersionInformation `array`
  * items [VersionInformation](#versioninformation)

### ListSubscriptionDefinitionVersionsRequest
* ListSubscriptionDefinitionVersionsRequest `object`

### ListSubscriptionDefinitionVersionsResponse
* ListSubscriptionDefinitionVersionsResponse `object`
  * NextToken [__string](#__string)
  * Versions [ListOfVersionInformation](#listofversioninformation)

### ListSubscriptionDefinitionsRequest
* ListSubscriptionDefinitionsRequest `object`

### ListSubscriptionDefinitionsResponse
* ListSubscriptionDefinitionsResponse `object`
  * Definitions [ListOfDefinitionInformation](#listofdefinitioninformation)
  * NextToken [__string](#__string)

### ListVersionsResponse
* ListVersionsResponse `object`: List of versions response
  * NextToken [__string](#__string)
  * Versions [ListOfVersionInformation](#listofversioninformation)

### Logger
* Logger `object`: Information on the Logger
  * Component [LoggerComponent](#loggercomponent)
  * Id [__string](#__string)
  * Level [LoggerLevel](#loggerlevel)
  * Space [__integer](#__integer)
  * Type [LoggerType](#loggertype)

### LoggerComponent
* LoggerComponent `string` (values: GreengrassSystem, Lambda)

### LoggerDefinitionVersion
* LoggerDefinitionVersion `object`: Information on logger definition version
  * Loggers [ListOfLogger](#listoflogger)

### LoggerLevel
* LoggerLevel `string` (values: DEBUG, INFO, WARN, ERROR, FATAL)

### LoggerType
* LoggerType `string` (values: FileSystem, AWSCloudWatch)

### MapOf__string
* MapOf__string `array`
  * items `object`
    * key [__string](#__string)
    * value [__string](#__string)

### ResetDeploymentsRequest
* ResetDeploymentsRequest `object`: Information needed to perform a reset of a group's deployments.
  * Force [__boolean](#__boolean)

### ResetDeploymentsResponse
* ResetDeploymentsResponse `object`
  * DeploymentArn [__string](#__string)
  * DeploymentId [__string](#__string)

### Subscription
* Subscription `object`: Information on subscription
  * Id [__string](#__string)
  * Source [__string](#__string)
  * Subject [__string](#__string)
  * Target [__string](#__string)

### SubscriptionDefinitionVersion
* SubscriptionDefinitionVersion `object`: Information on subscription definition version
  * Subscriptions [ListOfSubscription](#listofsubscription)

### UpdateConnectivityInfoRequest
* UpdateConnectivityInfoRequest `object`: connectivity info request
  * ConnectivityInfo [ListOfConnectivityInfo](#listofconnectivityinfo)

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

### UpdateSubscriptionDefinitionRequest
* UpdateSubscriptionDefinitionRequest `object`
  * Name [__string](#__string)

### UpdateSubscriptionDefinitionResponse
* UpdateSubscriptionDefinitionResponse `object`

### VersionInformation
* VersionInformation `object`: Information on the version
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

### __string
* __string `string`

### __timestamp
* __timestamp `string`


