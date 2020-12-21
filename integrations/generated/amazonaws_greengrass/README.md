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

.then(data => {
  console.log(data);
});
```

## Description

AWS IoT Greengrass seamlessly extends AWS onto physical devices so they can act locally on the data they generate, while still using the cloud for management, analytics, and durable storage. AWS IoT Greengrass ensures your devices can respond quickly to local events and operate with intermittent connectivity. AWS IoT Greengrass minimizes the cost of transmitting data to the cloud by allowing you to author AWS Lambda functions that execute locally.

## Actions

### ListBulkDeployments



```js
amazonaws_greengrass.ListBulkDeployments({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListBulkDeploymentsResponse](#listbulkdeploymentsresponse)

### StartBulkDeployment



```js
amazonaws_greengrass.StartBulkDeployment({
  "ExecutionRoleArn": "",
  "InputFileUri": ""
}, context)
```

#### Input
* input `object`
  * tags `object`: The key-value pair for the resource tag.
  * ExecutionRoleArn **required** `string`: The ARN of the execution role to associate with the bulk deployment operation. This IAM role must allow the ''greengrass:CreateDeployment'' action for all group versions that are listed in the input file. This IAM role must have access to the S3 bucket containing the input file.
  * InputFileUri **required** `string`: The URI of the input file contained in the S3 bucket. The execution role must have ''getObject'' permissions on this bucket to access the input file. The input file is a JSON-serialized, line delimited file with UTF-8 encoding that provides a list of group and version IDs and the deployment type. This file must be less than 100 MB. Currently, AWS IoT Greengrass supports only ''NewDeployment'' deployment types.

#### Output
* output [StartBulkDeploymentResponse](#startbulkdeploymentresponse)

### StopBulkDeployment



```js
amazonaws_greengrass.StopBulkDeployment({
  "BulkDeploymentId": ""
}, context)
```

#### Input
* input `object`
  * BulkDeploymentId **required** `string`

#### Output
* output [StopBulkDeploymentResponse](#stopbulkdeploymentresponse)

### ListBulkDeploymentDetailedReports



```js
amazonaws_greengrass.ListBulkDeploymentDetailedReports({
  "BulkDeploymentId": ""
}, context)
```

#### Input
* input `object`
  * BulkDeploymentId **required** `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListBulkDeploymentDetailedReportsResponse](#listbulkdeploymentdetailedreportsresponse)

### GetBulkDeploymentStatus



```js
amazonaws_greengrass.GetBulkDeploymentStatus({
  "BulkDeploymentId": ""
}, context)
```

#### Input
* input `object`
  * BulkDeploymentId **required** `string`

#### Output
* output [GetBulkDeploymentStatusResponse](#getbulkdeploymentstatusresponse)

### ListConnectorDefinitions



```js
amazonaws_greengrass.ListConnectorDefinitions({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListConnectorDefinitionsResponse](#listconnectordefinitionsresponse)

### CreateConnectorDefinition



```js
amazonaws_greengrass.CreateConnectorDefinition({}, context)
```

#### Input
* input `object`
  * tags `object`: The key-value pair for the resource tag.
  * InitialVersion `object`: Information about the connector definition version, which is a container for connectors.
    * Connectors
      * items [Connector](#connector)
  * Name `string`: The name of the connector definition.

#### Output
* output [CreateConnectorDefinitionResponse](#createconnectordefinitionresponse)

### DeleteConnectorDefinition



```js
amazonaws_greengrass.DeleteConnectorDefinition({
  "ConnectorDefinitionId": ""
}, context)
```

#### Input
* input `object`
  * ConnectorDefinitionId **required** `string`

#### Output
* output [DeleteConnectorDefinitionResponse](#deleteconnectordefinitionresponse)

### GetConnectorDefinition



```js
amazonaws_greengrass.GetConnectorDefinition({
  "ConnectorDefinitionId": ""
}, context)
```

#### Input
* input `object`
  * ConnectorDefinitionId **required** `string`

#### Output
* output [GetConnectorDefinitionResponse](#getconnectordefinitionresponse)

### UpdateConnectorDefinition



```js
amazonaws_greengrass.UpdateConnectorDefinition({
  "ConnectorDefinitionId": ""
}, context)
```

#### Input
* input `object`
  * ConnectorDefinitionId **required** `string`
  * Name `string`: The name of the definition.

#### Output
* output [UpdateConnectorDefinitionResponse](#updateconnectordefinitionresponse)

### ListConnectorDefinitionVersions



```js
amazonaws_greengrass.ListConnectorDefinitionVersions({
  "ConnectorDefinitionId": ""
}, context)
```

#### Input
* input `object`
  * ConnectorDefinitionId **required** `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListConnectorDefinitionVersionsResponse](#listconnectordefinitionversionsresponse)

### CreateConnectorDefinitionVersion



```js
amazonaws_greengrass.CreateConnectorDefinitionVersion({
  "ConnectorDefinitionId": ""
}, context)
```

#### Input
* input `object`
  * ConnectorDefinitionId **required** `string`
  * Connectors `array`: A list of references to connectors in this version, with their corresponding configuration settings.
    * items [Connector](#connector)

#### Output
* output [CreateConnectorDefinitionVersionResponse](#createconnectordefinitionversionresponse)

### GetConnectorDefinitionVersion



```js
amazonaws_greengrass.GetConnectorDefinitionVersion({
  "ConnectorDefinitionId": "",
  "ConnectorDefinitionVersionId": ""
}, context)
```

#### Input
* input `object`
  * ConnectorDefinitionId **required** `string`
  * ConnectorDefinitionVersionId **required** `string`
  * NextToken `string`

#### Output
* output [GetConnectorDefinitionVersionResponse](#getconnectordefinitionversionresponse)

### ListCoreDefinitions



```js
amazonaws_greengrass.ListCoreDefinitions({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListCoreDefinitionsResponse](#listcoredefinitionsresponse)

### CreateCoreDefinition



```js
amazonaws_greengrass.CreateCoreDefinition({}, context)
```

#### Input
* input `object`
  * tags `object`: The key-value pair for the resource tag.
  * InitialVersion `object`: Information about a core definition version.
    * Cores
      * items [Core](#core)
  * Name `string`: The name of the core definition.

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
  * Name `string`: The name of the definition.

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
  * MaxResults `string`
  * NextToken `string`

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
  * Cores `array`: A list of cores in the core definition version.
    * items [Core](#core)

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
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListDeviceDefinitionsResponse](#listdevicedefinitionsresponse)

### CreateDeviceDefinition



```js
amazonaws_greengrass.CreateDeviceDefinition({}, context)
```

#### Input
* input `object`
  * tags `object`: The key-value pair for the resource tag.
  * InitialVersion `object`: Information about a device definition version.
    * Devices
      * items [Device](#device)
  * Name `string`: The name of the device definition.

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
  * Name `string`: The name of the definition.

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
  * MaxResults `string`
  * NextToken `string`

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
  * Devices `array`: A list of devices in the definition version.
    * items [Device](#device)

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
  * NextToken `string`

#### Output
* output [GetDeviceDefinitionVersionResponse](#getdevicedefinitionversionresponse)

### ListFunctionDefinitions



```js
amazonaws_greengrass.ListFunctionDefinitions({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListFunctionDefinitionsResponse](#listfunctiondefinitionsresponse)

### CreateFunctionDefinition



```js
amazonaws_greengrass.CreateFunctionDefinition({}, context)
```

#### Input
* input `object`
  * tags `object`: The key-value pair for the resource tag.
  * InitialVersion `object`: Information about a function definition version.
    * DefaultConfig
      * Execution [FunctionDefaultExecutionConfig](#functiondefaultexecutionconfig)
    * Functions
      * items [Function](#function)
  * Name `string`: The name of the function definition.

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
  * Name `string`: The name of the definition.

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
  * MaxResults `string`
  * NextToken `string`

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
  * DefaultConfig `object`: The default configuration that applies to all Lambda functions in the group. Individual Lambda functions can override these settings.
    * Execution [FunctionDefaultExecutionConfig](#functiondefaultexecutionconfig)
  * Functions `array`: A list of Lambda functions in this function definition version.
    * items [Function](#function)

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
  * NextToken `string`

#### Output
* output [GetFunctionDefinitionVersionResponse](#getfunctiondefinitionversionresponse)

### ListLoggerDefinitions



```js
amazonaws_greengrass.ListLoggerDefinitions({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListLoggerDefinitionsResponse](#listloggerdefinitionsresponse)

### CreateLoggerDefinition



```js
amazonaws_greengrass.CreateLoggerDefinition({}, context)
```

#### Input
* input `object`
  * tags `object`: The key-value pair for the resource tag.
  * InitialVersion `object`: Information about a logger definition version.
    * Loggers
      * items [Logger](#logger)
  * Name `string`: The name of the logger definition.

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
  * Name `string`: The name of the definition.

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
  * MaxResults `string`
  * NextToken `string`

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
  * Loggers `array`: A list of loggers.
    * items [Logger](#logger)

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
  * NextToken `string`

#### Output
* output [GetLoggerDefinitionVersionResponse](#getloggerdefinitionversionresponse)

### ListResourceDefinitions



```js
amazonaws_greengrass.ListResourceDefinitions({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListResourceDefinitionsResponse](#listresourcedefinitionsresponse)

### CreateResourceDefinition



```js
amazonaws_greengrass.CreateResourceDefinition({}, context)
```

#### Input
* input `object`
  * tags `object`: The key-value pair for the resource tag.
  * InitialVersion `object`: Information about a resource definition version.
    * Resources
      * items [Resource](#resource)
  * Name `string`: The name of the resource definition.

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
  * Name `string`: The name of the definition.

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
  * MaxResults `string`
  * NextToken `string`
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
  * Resources `array`: A list of resources.
    * items [Resource](#resource)

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
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListSubscriptionDefinitionsResponse](#listsubscriptiondefinitionsresponse)

### CreateSubscriptionDefinition



```js
amazonaws_greengrass.CreateSubscriptionDefinition({}, context)
```

#### Input
* input `object`
  * tags `object`: The key-value pair for the resource tag.
  * InitialVersion `object`: Information about a subscription definition version.
    * Subscriptions
      * items [Subscription](#subscription)
  * Name `string`: The name of the subscription definition.

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
  * Name `string`: The name of the definition.

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
  * MaxResults `string`
  * NextToken `string`
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
  * Subscriptions `array`: A list of subscriptions.
    * items [Subscription](#subscription)

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
  * NextToken `string`
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
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListGroupsResponse](#listgroupsresponse)

### CreateGroup



```js
amazonaws_greengrass.CreateGroup({}, context)
```

#### Input
* input `object`
  * tags `object`: The key-value pair for the resource tag.
  * InitialVersion `object`: Information about a group version.
    * ConnectorDefinitionVersionArn
    * CoreDefinitionVersionArn
    * DeviceDefinitionVersionArn
    * FunctionDefinitionVersionArn
    * LoggerDefinitionVersionArn
    * ResourceDefinitionVersionArn
    * SubscriptionDefinitionVersionArn
  * Name `string`: The name of the group.

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
  * Name `string`: The name of the definition.

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
  * CertificateExpiryInMilliseconds `string`: The amount of time remaining before the certificate expires, in milliseconds.

#### Output
* output [UpdateGroupCertificateConfigurationResponse](#updategroupcertificateconfigurationresponse)

### GetGroupCertificateAuthority



```js
amazonaws_greengrass.GetGroupCertificateAuthority({
  "CertificateAuthorityId": "",
  "GroupId": ""
}, context)
```

#### Input
* input `object`
  * CertificateAuthorityId **required** `string`
  * GroupId **required** `string`

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
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListDeploymentsResponse](#listdeploymentsresponse)

### CreateDeployment



```js
amazonaws_greengrass.CreateDeployment({
  "GroupId": "",
  "DeploymentType": ""
}, context)
```

#### Input
* input `object`
  * GroupId **required** `string`
  * DeploymentId `string`: The ID of the deployment if you wish to redeploy a previous deployment.
  * DeploymentType **required** `string` (values: NewDeployment, Redeployment, ResetDeployment, ForceResetDeployment): The type of deployment. When used for ''CreateDeployment'', only ''NewDeployment'' and ''Redeployment'' are valid.
  * GroupVersionId `string`: The ID of the group version to be deployed.

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
  * Force `boolean`: If true, performs a best-effort only core reset.

#### Output
* output [ResetDeploymentsResponse](#resetdeploymentsresponse)

### GetDeploymentStatus



```js
amazonaws_greengrass.GetDeploymentStatus({
  "DeploymentId": "",
  "GroupId": ""
}, context)
```

#### Input
* input `object`
  * DeploymentId **required** `string`
  * GroupId **required** `string`

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
  "GroupId": "",
  "RoleArn": ""
}, context)
```

#### Input
* input `object`
  * GroupId **required** `string`
  * RoleArn **required** `string`: The ARN of the role you wish to associate with this group. The existence of the role is not validated.

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
  * MaxResults `string`
  * NextToken `string`

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
  * ConnectorDefinitionVersionArn `string`: The ARN of the connector definition version for this group.
  * CoreDefinitionVersionArn `string`: The ARN of the core definition version for this group.
  * DeviceDefinitionVersionArn `string`: The ARN of the device definition version for this group.
  * FunctionDefinitionVersionArn `string`: The ARN of the function definition version for this group.
  * LoggerDefinitionVersionArn `string`: The ARN of the logger definition version for this group.
  * ResourceDefinitionVersionArn `string`: The ARN of the resource definition version for this group.
  * SubscriptionDefinitionVersionArn `string`: The ARN of the subscription definition version for this group.

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
amazonaws_greengrass.AssociateServiceRoleToAccount({
  "RoleArn": ""
}, context)
```

#### Input
* input `object`
  * RoleArn **required** `string`: The ARN of the service role you wish to associate with your account.

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
  * ConnectivityInfo `array`: A list of connectivity info.
    * items [ConnectivityInfo](#connectivityinfo)

#### Output
* output [UpdateConnectivityInfoResponse](#updateconnectivityinforesponse)

### GetThingRuntimeConfiguration



```js
amazonaws_greengrass.GetThingRuntimeConfiguration({
  "ThingName": ""
}, context)
```

#### Input
* input `object`
  * ThingName **required** `string`

#### Output
* output [GetThingRuntimeConfigurationResponse](#getthingruntimeconfigurationresponse)

### UpdateThingRuntimeConfiguration



```js
amazonaws_greengrass.UpdateThingRuntimeConfiguration({
  "ThingName": ""
}, context)
```

#### Input
* input `object`
  * ThingName **required** `string`
  * TelemetryConfiguration `object`: Configuration settings for running telemetry.
    * Telemetry

#### Output
* output [UpdateThingRuntimeConfigurationResponse](#updatethingruntimeconfigurationresponse)

### CreateSoftwareUpdateJob



```js
amazonaws_greengrass.CreateSoftwareUpdateJob({
  "S3UrlSignerRole": "",
  "SoftwareToUpdate": "",
  "UpdateTargets": [],
  "UpdateTargetsArchitecture": "",
  "UpdateTargetsOperatingSystem": ""
}, context)
```

#### Input
* input `object`
  * S3UrlSignerRole **required** `string`: The IAM Role that Greengrass will use to create pre-signed URLs pointing towards the update artifact.
  * SoftwareToUpdate **required** `string` (values: core, ota_agent): The piece of software on the Greengrass core that will be updated.
  * UpdateAgentLogLevel `string` (values: NONE, TRACE, DEBUG, VERBOSE, INFO, WARN, ERROR, FATAL): The minimum level of log statements that should be logged by the OTA Agent during an update.
  * UpdateTargets **required** `array`: The ARNs of the targets (IoT things or IoT thing groups) that this update will be applied to.
    * items [__string](#__string)
  * UpdateTargetsArchitecture **required** `string` (values: armv6l, armv7l, x86_64, aarch64): The architecture of the cores which are the targets of an update.
  * UpdateTargetsOperatingSystem **required** `string` (values: ubuntu, raspbian, amazon_linux, openwrt): The operating system of the cores which are the targets of an update.

#### Output
* output [CreateSoftwareUpdateJobResponse](#createsoftwareupdatejobresponse)

### ListTagsForResource



```js
amazonaws_greengrass.ListTagsForResource({
  "resource-arn": ""
}, context)
```

#### Input
* input `object`
  * resource-arn **required** `string`

#### Output
* output [ListTagsForResourceResponse](#listtagsforresourceresponse)

### TagResource



```js
amazonaws_greengrass.TagResource({
  "resource-arn": ""
}, context)
```

#### Input
* input `object`
  * resource-arn **required** `string`
  * tags `object`: The key-value pair for the resource tag.

#### Output
*Output schema unknown*

### UntagResource



```js
amazonaws_greengrass.UntagResource({
  "resource-arn": "",
  "tagKeys": []
}, context)
```

#### Input
* input `object`
  * resource-arn **required** `string`
  * tagKeys **required** `array`

#### Output
*Output schema unknown*



## Definitions

### AssociateRoleToGroupRequest
* AssociateRoleToGroupRequest `object`
  * RoleArn **required**

### AssociateRoleToGroupResponse
* AssociateRoleToGroupResponse `object`
  * AssociatedAt

### AssociateServiceRoleToAccountRequest
* AssociateServiceRoleToAccountRequest `object`
  * RoleArn **required**

### AssociateServiceRoleToAccountResponse
* AssociateServiceRoleToAccountResponse `object`
  * AssociatedAt

### BadRequestException


### BulkDeployment
* BulkDeployment `object`: Information about a bulk deployment. You cannot start a new bulk deployment while another one is still running or in a non-terminal state.
  * BulkDeploymentArn
  * BulkDeploymentId
  * CreatedAt

### BulkDeploymentMetrics
* BulkDeploymentMetrics `object`: Relevant metrics on input records processed during bulk deployment.
  * InvalidInputRecords
  * RecordsProcessed
  * RetryAttempts

### BulkDeploymentResult
* BulkDeploymentResult `object`: Information about an individual group deployment in a bulk deployment operation.
  * CreatedAt
  * DeploymentArn
  * DeploymentId
  * DeploymentStatus
  * DeploymentType
  * ErrorDetails
    * items [ErrorDetail](#errordetail)
  * ErrorMessage
  * GroupArn

### BulkDeploymentResults
* BulkDeploymentResults `array`
  * items [BulkDeploymentResult](#bulkdeploymentresult)

### BulkDeploymentStatus
* BulkDeploymentStatus `string` (values: Initializing, Running, Completed, Stopping, Stopped, Failed): The current status of the bulk deployment.

### BulkDeployments
* BulkDeployments `array`
  * items [BulkDeployment](#bulkdeployment)

### ConfigurationSyncStatus
* ConfigurationSyncStatus `string` (values: InSync, OutOfSync)

### ConnectivityInfo
* ConnectivityInfo `object`: Information about a Greengrass core's connectivity.
  * HostAddress
  * Id
  * Metadata
  * PortNumber

### Connector
* Connector `object`: Information about a connector. Connectors run on the Greengrass core and contain built-in integration with local infrastructure, device protocols, AWS, and other cloud services.
  * ConnectorArn **required**
  * Id **required**
  * Parameters

### ConnectorDefinitionVersion
* ConnectorDefinitionVersion `object`: Information about the connector definition version, which is a container for connectors.
  * Connectors
    * items [Connector](#connector)

### Core
* Core `object`: Information about a core.
  * CertificateArn **required**
  * Id **required**
  * SyncShadow
  * ThingArn **required**

### CoreDefinitionVersion
* CoreDefinitionVersion `object`: Information about a core definition version.
  * Cores
    * items [Core](#core)

### CreateConnectorDefinitionRequest
* CreateConnectorDefinitionRequest `object`
  * tags
  * InitialVersion
    * Connectors
      * items [Connector](#connector)
  * Name

### CreateConnectorDefinitionResponse
* CreateConnectorDefinitionResponse `object`
  * Arn
  * CreationTimestamp
  * Id
  * LastUpdatedTimestamp
  * LatestVersion
  * LatestVersionArn
  * Name

### CreateConnectorDefinitionVersionRequest
* CreateConnectorDefinitionVersionRequest `object`
  * Connectors
    * items [Connector](#connector)

### CreateConnectorDefinitionVersionResponse
* CreateConnectorDefinitionVersionResponse `object`
  * Arn
  * CreationTimestamp
  * Id
  * Version

### CreateCoreDefinitionRequest
* CreateCoreDefinitionRequest `object`: Information needed to create a core definition.
  * tags
  * InitialVersion
    * Cores
      * items [Core](#core)
  * Name

### CreateCoreDefinitionResponse
* CreateCoreDefinitionResponse `object`
  * Arn
  * CreationTimestamp
  * Id
  * LastUpdatedTimestamp
  * LatestVersion
  * LatestVersionArn
  * Name

### CreateCoreDefinitionVersionRequest
* CreateCoreDefinitionVersionRequest `object`
  * Cores
    * items [Core](#core)

### CreateCoreDefinitionVersionResponse
* CreateCoreDefinitionVersionResponse `object`
  * Arn
  * CreationTimestamp
  * Id
  * Version

### CreateDeploymentRequest
* CreateDeploymentRequest `object`
  * DeploymentId
  * DeploymentType **required**
  * GroupVersionId

### CreateDeploymentResponse
* CreateDeploymentResponse `object`
  * DeploymentArn
  * DeploymentId

### CreateDeviceDefinitionRequest
* CreateDeviceDefinitionRequest `object`
  * tags
  * InitialVersion
    * Devices
      * items [Device](#device)
  * Name

### CreateDeviceDefinitionResponse
* CreateDeviceDefinitionResponse `object`
  * Arn
  * CreationTimestamp
  * Id
  * LastUpdatedTimestamp
  * LatestVersion
  * LatestVersionArn
  * Name

### CreateDeviceDefinitionVersionRequest
* CreateDeviceDefinitionVersionRequest `object`
  * Devices
    * items [Device](#device)

### CreateDeviceDefinitionVersionResponse
* CreateDeviceDefinitionVersionResponse `object`
  * Arn
  * CreationTimestamp
  * Id
  * Version

### CreateFunctionDefinitionRequest
* CreateFunctionDefinitionRequest `object`
  * tags
  * InitialVersion
    * DefaultConfig
      * Execution [FunctionDefaultExecutionConfig](#functiondefaultexecutionconfig)
    * Functions
      * items [Function](#function)
  * Name

### CreateFunctionDefinitionResponse
* CreateFunctionDefinitionResponse `object`
  * Arn
  * CreationTimestamp
  * Id
  * LastUpdatedTimestamp
  * LatestVersion
  * LatestVersionArn
  * Name

### CreateFunctionDefinitionVersionRequest
* CreateFunctionDefinitionVersionRequest `object`: Information needed to create a function definition version.
  * DefaultConfig
    * Execution [FunctionDefaultExecutionConfig](#functiondefaultexecutionconfig)
  * Functions
    * items [Function](#function)

### CreateFunctionDefinitionVersionResponse
* CreateFunctionDefinitionVersionResponse `object`
  * Arn
  * CreationTimestamp
  * Id
  * Version

### CreateGroupCertificateAuthorityRequest
* CreateGroupCertificateAuthorityRequest `object`

### CreateGroupCertificateAuthorityResponse
* CreateGroupCertificateAuthorityResponse `object`
  * GroupCertificateAuthorityArn

### CreateGroupRequest
* CreateGroupRequest `object`
  * tags
  * InitialVersion
    * ConnectorDefinitionVersionArn
    * CoreDefinitionVersionArn
    * DeviceDefinitionVersionArn
    * FunctionDefinitionVersionArn
    * LoggerDefinitionVersionArn
    * ResourceDefinitionVersionArn
    * SubscriptionDefinitionVersionArn
  * Name

### CreateGroupResponse
* CreateGroupResponse `object`
  * Arn
  * CreationTimestamp
  * Id
  * LastUpdatedTimestamp
  * LatestVersion
  * LatestVersionArn
  * Name

### CreateGroupVersionRequest
* CreateGroupVersionRequest `object`
  * ConnectorDefinitionVersionArn
  * CoreDefinitionVersionArn
  * DeviceDefinitionVersionArn
  * FunctionDefinitionVersionArn
  * LoggerDefinitionVersionArn
  * ResourceDefinitionVersionArn
  * SubscriptionDefinitionVersionArn

### CreateGroupVersionResponse
* CreateGroupVersionResponse `object`
  * Arn
  * CreationTimestamp
  * Id
  * Version

### CreateLoggerDefinitionRequest
* CreateLoggerDefinitionRequest `object`
  * tags
  * InitialVersion
    * Loggers
      * items [Logger](#logger)
  * Name

### CreateLoggerDefinitionResponse
* CreateLoggerDefinitionResponse `object`
  * Arn
  * CreationTimestamp
  * Id
  * LastUpdatedTimestamp
  * LatestVersion
  * LatestVersionArn
  * Name

### CreateLoggerDefinitionVersionRequest
* CreateLoggerDefinitionVersionRequest `object`
  * Loggers
    * items [Logger](#logger)

### CreateLoggerDefinitionVersionResponse
* CreateLoggerDefinitionVersionResponse `object`
  * Arn
  * CreationTimestamp
  * Id
  * Version

### CreateResourceDefinitionRequest
* CreateResourceDefinitionRequest `object`
  * tags
  * InitialVersion
    * Resources
      * items [Resource](#resource)
  * Name

### CreateResourceDefinitionResponse
* CreateResourceDefinitionResponse `object`
  * Arn
  * CreationTimestamp
  * Id
  * LastUpdatedTimestamp
  * LatestVersion
  * LatestVersionArn
  * Name

### CreateResourceDefinitionVersionRequest
* CreateResourceDefinitionVersionRequest `object`
  * Resources
    * items [Resource](#resource)

### CreateResourceDefinitionVersionResponse
* CreateResourceDefinitionVersionResponse `object`
  * Arn
  * CreationTimestamp
  * Id
  * Version

### CreateSoftwareUpdateJobRequest
* CreateSoftwareUpdateJobRequest `object`
  * S3UrlSignerRole **required** [S3UrlSignerRole](#s3urlsignerrole)
  * SoftwareToUpdate **required** [SoftwareToUpdate](#softwaretoupdate)
  * UpdateAgentLogLevel [UpdateAgentLogLevel](#updateagentloglevel)
  * UpdateTargets **required** [UpdateTargets](#updatetargets)
  * UpdateTargetsArchitecture **required** [UpdateTargetsArchitecture](#updatetargetsarchitecture)
  * UpdateTargetsOperatingSystem **required** [UpdateTargetsOperatingSystem](#updatetargetsoperatingsystem)

### CreateSoftwareUpdateJobResponse
* CreateSoftwareUpdateJobResponse `object`
  * IotJobArn
  * IotJobId
  * PlatformSoftwareVersion

### CreateSubscriptionDefinitionRequest
* CreateSubscriptionDefinitionRequest `object`
  * tags
  * InitialVersion
    * Subscriptions
      * items [Subscription](#subscription)
  * Name

### CreateSubscriptionDefinitionResponse
* CreateSubscriptionDefinitionResponse `object`
  * Arn
  * CreationTimestamp
  * Id
  * LastUpdatedTimestamp
  * LatestVersion
  * LatestVersionArn
  * Name

### CreateSubscriptionDefinitionVersionRequest
* CreateSubscriptionDefinitionVersionRequest `object`
  * Subscriptions
    * items [Subscription](#subscription)

### CreateSubscriptionDefinitionVersionResponse
* CreateSubscriptionDefinitionVersionResponse `object`
  * Arn
  * CreationTimestamp
  * Id
  * Version

### DefinitionInformation
* DefinitionInformation `object`: Information about a definition.
  * Arn
  * CreationTimestamp
  * Id
  * LastUpdatedTimestamp
  * LatestVersion
  * LatestVersionArn
  * Name
  * Tags

### DeleteConnectorDefinitionRequest
* DeleteConnectorDefinitionRequest `object`

### DeleteConnectorDefinitionResponse
* DeleteConnectorDefinitionResponse `object`

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
  * CreatedAt
  * DeploymentArn
  * DeploymentId
  * DeploymentType
  * GroupArn

### DeploymentType
* DeploymentType `string` (values: NewDeployment, Redeployment, ResetDeployment, ForceResetDeployment): The type of deployment. When used for ''CreateDeployment'', only ''NewDeployment'' and ''Redeployment'' are valid.

### Deployments
* Deployments `array`
  * items [Deployment](#deployment)

### Device
* Device `object`: Information about a device.
  * CertificateArn **required**
  * Id **required**
  * SyncShadow
  * ThingArn **required**

### DeviceDefinitionVersion
* DeviceDefinitionVersion `object`: Information about a device definition version.
  * Devices
    * items [Device](#device)

### DisassociateRoleFromGroupRequest
* DisassociateRoleFromGroupRequest `object`

### DisassociateRoleFromGroupResponse
* DisassociateRoleFromGroupResponse `object`
  * DisassociatedAt

### DisassociateServiceRoleFromAccountRequest
* DisassociateServiceRoleFromAccountRequest `object`

### DisassociateServiceRoleFromAccountResponse
* DisassociateServiceRoleFromAccountResponse `object`
  * DisassociatedAt

### EncodingType
* EncodingType `string` (values: binary, json)

### ErrorDetail
* ErrorDetail `object`: Details about the error.
  * DetailedErrorCode
  * DetailedErrorMessage

### ErrorDetails
* ErrorDetails `array`: A list of error details.
  * items [ErrorDetail](#errordetail)

### Function
* Function `object`: Information about a Lambda function.
  * FunctionArn
  * FunctionConfiguration
    * EncodingType
    * Environment
      * AccessSysfs
      * Execution
        * IsolationMode [FunctionIsolationMode](#functionisolationmode)
        * RunAs [FunctionRunAsConfig](#functionrunasconfig)
      * ResourceAccessPolicies
        * items [ResourceAccessPolicy](#resourceaccesspolicy)
      * Variables
    * ExecArgs
    * Executable
    * MemorySize
    * Pinned
    * Timeout
  * Id **required**

### FunctionConfiguration
* FunctionConfiguration `object`: The configuration of the Lambda function.
  * EncodingType
  * Environment
    * AccessSysfs
    * Execution
      * IsolationMode [FunctionIsolationMode](#functionisolationmode)
      * RunAs [FunctionRunAsConfig](#functionrunasconfig)
    * ResourceAccessPolicies
      * items [ResourceAccessPolicy](#resourceaccesspolicy)
    * Variables
  * ExecArgs
  * Executable
  * MemorySize
  * Pinned
  * Timeout

### FunctionConfigurationEnvironment
* FunctionConfigurationEnvironment `object`: The environment configuration of the function.
  * AccessSysfs
  * Execution
    * IsolationMode [FunctionIsolationMode](#functionisolationmode)
    * RunAs [FunctionRunAsConfig](#functionrunasconfig)
  * ResourceAccessPolicies
    * items [ResourceAccessPolicy](#resourceaccesspolicy)
  * Variables

### FunctionDefaultConfig
* FunctionDefaultConfig `object`: The default configuration that applies to all Lambda functions in the group. Individual Lambda functions can override these settings.
  * Execution [FunctionDefaultExecutionConfig](#functiondefaultexecutionconfig)

### FunctionDefaultExecutionConfig
* FunctionDefaultExecutionConfig `object`: Configuration information that specifies how a Lambda function runs. 
  * IsolationMode [FunctionIsolationMode](#functionisolationmode)
  * RunAs [FunctionRunAsConfig](#functionrunasconfig)

### FunctionDefinitionVersion
* FunctionDefinitionVersion `object`: Information about a function definition version.
  * DefaultConfig
    * Execution [FunctionDefaultExecutionConfig](#functiondefaultexecutionconfig)
  * Functions
    * items [Function](#function)

### FunctionExecutionConfig
* FunctionExecutionConfig `object`: Configuration information that specifies how a Lambda function runs. 
  * IsolationMode [FunctionIsolationMode](#functionisolationmode)
  * RunAs [FunctionRunAsConfig](#functionrunasconfig)

### FunctionIsolationMode
* FunctionIsolationMode `string` (values: GreengrassContainer, NoContainer): Specifies whether the Lambda function runs in a Greengrass container (default) or without containerization. Unless your scenario requires that you run without containerization, we recommend that you run in a Greengrass container. Omit this value to run the Lambda function with the default containerization for the group.

### FunctionRunAsConfig
* FunctionRunAsConfig `object`: Specifies the user and group whose permissions are used when running the Lambda function. You can specify one or both values to override the default values. We recommend that you avoid running as root unless absolutely necessary to minimize the risk of unintended changes or malicious attacks. To run as root, you must set ''IsolationMode'' to ''NoContainer'' and update config.json in ''greengrass-root/config'' to set ''allowFunctionsToRunAsRoot'' to ''yes''.
  * Gid
  * Uid

### GetAssociatedRoleRequest
* GetAssociatedRoleRequest `object`

### GetAssociatedRoleResponse
* GetAssociatedRoleResponse `object`
  * AssociatedAt
  * RoleArn

### GetBulkDeploymentStatusRequest
* GetBulkDeploymentStatusRequest `object`

### GetBulkDeploymentStatusResponse
* GetBulkDeploymentStatusResponse `object`
  * tags
  * BulkDeploymentMetrics
    * InvalidInputRecords
    * RecordsProcessed
    * RetryAttempts
  * BulkDeploymentStatus
  * CreatedAt
  * ErrorDetails
    * items [ErrorDetail](#errordetail)
  * ErrorMessage

### GetConnectivityInfoRequest
* GetConnectivityInfoRequest `object`

### GetConnectivityInfoResponse
* GetConnectivityInfoResponse `object`
  * ConnectivityInfo
    * items [ConnectivityInfo](#connectivityinfo)
  * Message

### GetConnectorDefinitionRequest
* GetConnectorDefinitionRequest `object`

### GetConnectorDefinitionResponse
* GetConnectorDefinitionResponse `object`
  * tags
  * Arn
  * CreationTimestamp
  * Id
  * LastUpdatedTimestamp
  * LatestVersion
  * LatestVersionArn
  * Name

### GetConnectorDefinitionVersionRequest
* GetConnectorDefinitionVersionRequest `object`

### GetConnectorDefinitionVersionResponse
* GetConnectorDefinitionVersionResponse `object`
  * Arn
  * CreationTimestamp
  * Definition
    * Connectors
      * items [Connector](#connector)
  * Id
  * NextToken
  * Version

### GetCoreDefinitionRequest
* GetCoreDefinitionRequest `object`

### GetCoreDefinitionResponse
* GetCoreDefinitionResponse `object`
  * tags
  * Arn
  * CreationTimestamp
  * Id
  * LastUpdatedTimestamp
  * LatestVersion
  * LatestVersionArn
  * Name

### GetCoreDefinitionVersionRequest
* GetCoreDefinitionVersionRequest `object`

### GetCoreDefinitionVersionResponse
* GetCoreDefinitionVersionResponse `object`
  * Arn
  * CreationTimestamp
  * Definition
    * Cores
      * items [Core](#core)
  * Id
  * NextToken
  * Version

### GetDeploymentStatusRequest
* GetDeploymentStatusRequest `object`

### GetDeploymentStatusResponse
* GetDeploymentStatusResponse `object`
  * DeploymentStatus
  * DeploymentType
  * ErrorDetails
    * items [ErrorDetail](#errordetail)
  * ErrorMessage
  * UpdatedAt

### GetDeviceDefinitionRequest
* GetDeviceDefinitionRequest `object`

### GetDeviceDefinitionResponse
* GetDeviceDefinitionResponse `object`
  * tags
  * Arn
  * CreationTimestamp
  * Id
  * LastUpdatedTimestamp
  * LatestVersion
  * LatestVersionArn
  * Name

### GetDeviceDefinitionVersionRequest
* GetDeviceDefinitionVersionRequest `object`

### GetDeviceDefinitionVersionResponse
* GetDeviceDefinitionVersionResponse `object`
  * Arn
  * CreationTimestamp
  * Definition
    * Devices
      * items [Device](#device)
  * Id
  * NextToken
  * Version

### GetFunctionDefinitionRequest
* GetFunctionDefinitionRequest `object`

### GetFunctionDefinitionResponse
* GetFunctionDefinitionResponse `object`
  * tags
  * Arn
  * CreationTimestamp
  * Id
  * LastUpdatedTimestamp
  * LatestVersion
  * LatestVersionArn
  * Name

### GetFunctionDefinitionVersionRequest
* GetFunctionDefinitionVersionRequest `object`

### GetFunctionDefinitionVersionResponse
* GetFunctionDefinitionVersionResponse `object`
  * Arn
  * CreationTimestamp
  * Definition
    * DefaultConfig
      * Execution [FunctionDefaultExecutionConfig](#functiondefaultexecutionconfig)
    * Functions
      * items [Function](#function)
  * Id
  * NextToken
  * Version

### GetGroupCertificateAuthorityRequest
* GetGroupCertificateAuthorityRequest `object`

### GetGroupCertificateAuthorityResponse
* GetGroupCertificateAuthorityResponse `object`
  * GroupCertificateAuthorityArn
  * GroupCertificateAuthorityId
  * PemEncodedCertificate

### GetGroupCertificateConfigurationRequest
* GetGroupCertificateConfigurationRequest `object`

### GetGroupCertificateConfigurationResponse
* GetGroupCertificateConfigurationResponse `object`
  * CertificateAuthorityExpiryInMilliseconds
  * CertificateExpiryInMilliseconds
  * GroupId

### GetGroupRequest
* GetGroupRequest `object`

### GetGroupResponse
* GetGroupResponse `object`
  * tags
  * Arn
  * CreationTimestamp
  * Id
  * LastUpdatedTimestamp
  * LatestVersion
  * LatestVersionArn
  * Name

### GetGroupVersionRequest
* GetGroupVersionRequest `object`

### GetGroupVersionResponse
* GetGroupVersionResponse `object`
  * Arn
  * CreationTimestamp
  * Definition
    * ConnectorDefinitionVersionArn
    * CoreDefinitionVersionArn
    * DeviceDefinitionVersionArn
    * FunctionDefinitionVersionArn
    * LoggerDefinitionVersionArn
    * ResourceDefinitionVersionArn
    * SubscriptionDefinitionVersionArn
  * Id
  * Version

### GetLoggerDefinitionRequest
* GetLoggerDefinitionRequest `object`

### GetLoggerDefinitionResponse
* GetLoggerDefinitionResponse `object`
  * tags
  * Arn
  * CreationTimestamp
  * Id
  * LastUpdatedTimestamp
  * LatestVersion
  * LatestVersionArn
  * Name

### GetLoggerDefinitionVersionRequest
* GetLoggerDefinitionVersionRequest `object`

### GetLoggerDefinitionVersionResponse
* GetLoggerDefinitionVersionResponse `object`
  * Arn
  * CreationTimestamp
  * Definition
    * Loggers
      * items [Logger](#logger)
  * Id
  * Version

### GetResourceDefinitionRequest
* GetResourceDefinitionRequest `object`

### GetResourceDefinitionResponse
* GetResourceDefinitionResponse `object`
  * tags
  * Arn
  * CreationTimestamp
  * Id
  * LastUpdatedTimestamp
  * LatestVersion
  * LatestVersionArn
  * Name

### GetResourceDefinitionVersionRequest
* GetResourceDefinitionVersionRequest `object`

### GetResourceDefinitionVersionResponse
* GetResourceDefinitionVersionResponse `object`
  * Arn
  * CreationTimestamp
  * Definition
    * Resources
      * items [Resource](#resource)
  * Id
  * Version

### GetServiceRoleForAccountRequest
* GetServiceRoleForAccountRequest `object`

### GetServiceRoleForAccountResponse
* GetServiceRoleForAccountResponse `object`
  * AssociatedAt
  * RoleArn

### GetSubscriptionDefinitionRequest
* GetSubscriptionDefinitionRequest `object`

### GetSubscriptionDefinitionResponse
* GetSubscriptionDefinitionResponse `object`
  * tags
  * Arn
  * CreationTimestamp
  * Id
  * LastUpdatedTimestamp
  * LatestVersion
  * LatestVersionArn
  * Name

### GetSubscriptionDefinitionVersionRequest
* GetSubscriptionDefinitionVersionRequest `object`

### GetSubscriptionDefinitionVersionResponse
* GetSubscriptionDefinitionVersionResponse `object`
  * Arn
  * CreationTimestamp
  * Definition
    * Subscriptions
      * items [Subscription](#subscription)
  * Id
  * NextToken
  * Version

### GetThingRuntimeConfigurationRequest
* GetThingRuntimeConfigurationRequest `object`

### GetThingRuntimeConfigurationResponse
* GetThingRuntimeConfigurationResponse `object`
  * RuntimeConfiguration
    * TelemetryConfiguration
      * ConfigurationSyncStatus
      * Telemetry **required**

### GroupCertificateAuthorityProperties
* GroupCertificateAuthorityProperties `object`: Information about a certificate authority for a group.
  * GroupCertificateAuthorityArn
  * GroupCertificateAuthorityId

### GroupInformation
* GroupInformation `object`: Information about a group.
  * Arn
  * CreationTimestamp
  * Id
  * LastUpdatedTimestamp
  * LatestVersion
  * LatestVersionArn
  * Name

### GroupOwnerSetting
* GroupOwnerSetting `object`: Group owner related settings for local resources.
  * AutoAddGroupOwner
  * GroupOwner

### GroupVersion
* GroupVersion `object`: Information about a group version.
  * ConnectorDefinitionVersionArn
  * CoreDefinitionVersionArn
  * DeviceDefinitionVersionArn
  * FunctionDefinitionVersionArn
  * LoggerDefinitionVersionArn
  * ResourceDefinitionVersionArn
  * SubscriptionDefinitionVersionArn

### InternalServerErrorException


### ListBulkDeploymentDetailedReportsRequest
* ListBulkDeploymentDetailedReportsRequest `object`

### ListBulkDeploymentDetailedReportsResponse
* ListBulkDeploymentDetailedReportsResponse `object`
  * Deployments
    * items [BulkDeploymentResult](#bulkdeploymentresult)
  * NextToken

### ListBulkDeploymentsRequest
* ListBulkDeploymentsRequest `object`

### ListBulkDeploymentsResponse
* ListBulkDeploymentsResponse `object`
  * BulkDeployments
    * items [BulkDeployment](#bulkdeployment)
  * NextToken

### ListConnectorDefinitionVersionsRequest
* ListConnectorDefinitionVersionsRequest `object`

### ListConnectorDefinitionVersionsResponse
* ListConnectorDefinitionVersionsResponse `object`
  * NextToken
  * Versions
    * items [VersionInformation](#versioninformation)

### ListConnectorDefinitionsRequest
* ListConnectorDefinitionsRequest `object`

### ListConnectorDefinitionsResponse
* ListConnectorDefinitionsResponse `object`
  * Definitions
    * items [DefinitionInformation](#definitioninformation)
  * NextToken

### ListCoreDefinitionVersionsRequest
* ListCoreDefinitionVersionsRequest `object`

### ListCoreDefinitionVersionsResponse
* ListCoreDefinitionVersionsResponse `object`
  * NextToken
  * Versions
    * items [VersionInformation](#versioninformation)

### ListCoreDefinitionsRequest
* ListCoreDefinitionsRequest `object`

### ListCoreDefinitionsResponse
* ListCoreDefinitionsResponse `object`
  * Definitions
    * items [DefinitionInformation](#definitioninformation)
  * NextToken

### ListDeploymentsRequest
* ListDeploymentsRequest `object`

### ListDeploymentsResponse
* ListDeploymentsResponse `object`
  * Deployments
    * items [Deployment](#deployment)
  * NextToken

### ListDeviceDefinitionVersionsRequest
* ListDeviceDefinitionVersionsRequest `object`

### ListDeviceDefinitionVersionsResponse
* ListDeviceDefinitionVersionsResponse `object`
  * NextToken
  * Versions
    * items [VersionInformation](#versioninformation)

### ListDeviceDefinitionsRequest
* ListDeviceDefinitionsRequest `object`

### ListDeviceDefinitionsResponse
* ListDeviceDefinitionsResponse `object`
  * Definitions
    * items [DefinitionInformation](#definitioninformation)
  * NextToken

### ListFunctionDefinitionVersionsRequest
* ListFunctionDefinitionVersionsRequest `object`

### ListFunctionDefinitionVersionsResponse
* ListFunctionDefinitionVersionsResponse `object`
  * NextToken
  * Versions
    * items [VersionInformation](#versioninformation)

### ListFunctionDefinitionsRequest
* ListFunctionDefinitionsRequest `object`

### ListFunctionDefinitionsResponse
* ListFunctionDefinitionsResponse `object`
  * Definitions
    * items [DefinitionInformation](#definitioninformation)
  * NextToken

### ListGroupCertificateAuthoritiesRequest
* ListGroupCertificateAuthoritiesRequest `object`

### ListGroupCertificateAuthoritiesResponse
* ListGroupCertificateAuthoritiesResponse `object`
  * GroupCertificateAuthorities
    * items [GroupCertificateAuthorityProperties](#groupcertificateauthorityproperties)

### ListGroupVersionsRequest
* ListGroupVersionsRequest `object`

### ListGroupVersionsResponse
* ListGroupVersionsResponse `object`
  * NextToken
  * Versions
    * items [VersionInformation](#versioninformation)

### ListGroupsRequest
* ListGroupsRequest `object`

### ListGroupsResponse
* ListGroupsResponse `object`
  * Groups
    * items [GroupInformation](#groupinformation)
  * NextToken

### ListLoggerDefinitionVersionsRequest
* ListLoggerDefinitionVersionsRequest `object`

### ListLoggerDefinitionVersionsResponse
* ListLoggerDefinitionVersionsResponse `object`
  * NextToken
  * Versions
    * items [VersionInformation](#versioninformation)

### ListLoggerDefinitionsRequest
* ListLoggerDefinitionsRequest `object`

### ListLoggerDefinitionsResponse
* ListLoggerDefinitionsResponse `object`
  * Definitions
    * items [DefinitionInformation](#definitioninformation)
  * NextToken

### ListResourceDefinitionVersionsRequest
* ListResourceDefinitionVersionsRequest `object`

### ListResourceDefinitionVersionsResponse
* ListResourceDefinitionVersionsResponse `object`
  * NextToken
  * Versions
    * items [VersionInformation](#versioninformation)

### ListResourceDefinitionsRequest
* ListResourceDefinitionsRequest `object`

### ListResourceDefinitionsResponse
* ListResourceDefinitionsResponse `object`
  * Definitions
    * items [DefinitionInformation](#definitioninformation)
  * NextToken

### ListSubscriptionDefinitionVersionsRequest
* ListSubscriptionDefinitionVersionsRequest `object`

### ListSubscriptionDefinitionVersionsResponse
* ListSubscriptionDefinitionVersionsResponse `object`
  * NextToken
  * Versions
    * items [VersionInformation](#versioninformation)

### ListSubscriptionDefinitionsRequest
* ListSubscriptionDefinitionsRequest `object`

### ListSubscriptionDefinitionsResponse
* ListSubscriptionDefinitionsResponse `object`
  * Definitions
    * items [DefinitionInformation](#definitioninformation)
  * NextToken

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`
  * tags [Tags](#tags)

### LocalDeviceResourceData
* LocalDeviceResourceData `object`: Attributes that define a local device resource.
  * GroupOwnerSetting
    * AutoAddGroupOwner
    * GroupOwner
  * SourcePath

### LocalVolumeResourceData
* LocalVolumeResourceData `object`: Attributes that define a local volume resource.
  * DestinationPath
  * GroupOwnerSetting
    * AutoAddGroupOwner
    * GroupOwner
  * SourcePath

### Logger
* Logger `object`: Information about a logger
  * Component **required**
  * Id **required**
  * Level **required**
  * Space
  * Type **required**

### LoggerComponent
* LoggerComponent `string` (values: GreengrassSystem, Lambda)

### LoggerDefinitionVersion
* LoggerDefinitionVersion `object`: Information about a logger definition version.
  * Loggers
    * items [Logger](#logger)

### LoggerLevel
* LoggerLevel `string` (values: DEBUG, INFO, WARN, ERROR, FATAL)

### LoggerType
* LoggerType `string` (values: FileSystem, AWSCloudWatch)

### Permission
* Permission `string` (values: ro, rw): The type of permission a function has to access a resource.

### ResetDeploymentsRequest
* ResetDeploymentsRequest `object`: Information needed to reset deployments.
  * Force

### ResetDeploymentsResponse
* ResetDeploymentsResponse `object`
  * DeploymentArn
  * DeploymentId

### Resource
* Resource `object`: Information about a resource.
  * Id **required**
  * Name **required**
  * ResourceDataContainer **required**
    * LocalDeviceResourceData
      * GroupOwnerSetting
        * AutoAddGroupOwner
        * GroupOwner
      * SourcePath
    * LocalVolumeResourceData
      * DestinationPath
      * GroupOwnerSetting
        * AutoAddGroupOwner
        * GroupOwner
      * SourcePath
    * S3MachineLearningModelResourceData
      * DestinationPath
      * OwnerSetting [ResourceDownloadOwnerSetting](#resourcedownloadownersetting)
      * S3Uri
    * SageMakerMachineLearningModelResourceData
      * DestinationPath
      * OwnerSetting [ResourceDownloadOwnerSetting](#resourcedownloadownersetting)
      * SageMakerJobArn
    * SecretsManagerSecretResourceData
      * ARN
      * AdditionalStagingLabelsToDownload
        * items [__string](#__string)

### ResourceAccessPolicy
* ResourceAccessPolicy `object`: A policy used by the function to access a resource.
  * Permission
  * ResourceId **required**

### ResourceDataContainer
* ResourceDataContainer `object`: A container for resource data. The container takes only one of the following supported resource data types: ''LocalDeviceResourceData'', ''LocalVolumeResourceData'', ''SageMakerMachineLearningModelResourceData'', ''S3MachineLearningModelResourceData'', ''SecretsManagerSecretResourceData''.
  * LocalDeviceResourceData
    * GroupOwnerSetting
      * AutoAddGroupOwner
      * GroupOwner
    * SourcePath
  * LocalVolumeResourceData
    * DestinationPath
    * GroupOwnerSetting
      * AutoAddGroupOwner
      * GroupOwner
    * SourcePath
  * S3MachineLearningModelResourceData
    * DestinationPath
    * OwnerSetting [ResourceDownloadOwnerSetting](#resourcedownloadownersetting)
    * S3Uri
  * SageMakerMachineLearningModelResourceData
    * DestinationPath
    * OwnerSetting [ResourceDownloadOwnerSetting](#resourcedownloadownersetting)
    * SageMakerJobArn
  * SecretsManagerSecretResourceData
    * ARN
    * AdditionalStagingLabelsToDownload
      * items [__string](#__string)

### ResourceDefinitionVersion
* ResourceDefinitionVersion `object`: Information about a resource definition version.
  * Resources
    * items [Resource](#resource)

### ResourceDownloadOwnerSetting
* ResourceDownloadOwnerSetting `object`: The owner setting for downloaded machine learning resources.
  * GroupOwner **required**
  * GroupPermission **required**

### RuntimeConfiguration
* RuntimeConfiguration `object`: Runtime configuration for a thing.
  * TelemetryConfiguration
    * ConfigurationSyncStatus
    * Telemetry **required**

### S3MachineLearningModelResourceData
* S3MachineLearningModelResourceData `object`: Attributes that define an Amazon S3 machine learning resource.
  * DestinationPath
  * OwnerSetting [ResourceDownloadOwnerSetting](#resourcedownloadownersetting)
  * S3Uri

### S3UrlSignerRole
* S3UrlSignerRole `string`: The IAM Role that Greengrass will use to create pre-signed URLs pointing towards the update artifact.

### SageMakerMachineLearningModelResourceData
* SageMakerMachineLearningModelResourceData `object`: Attributes that define an Amazon SageMaker machine learning resource.
  * DestinationPath
  * OwnerSetting [ResourceDownloadOwnerSetting](#resourcedownloadownersetting)
  * SageMakerJobArn

### SecretsManagerSecretResourceData
* SecretsManagerSecretResourceData `object`: Attributes that define a secret resource, which references a secret from AWS Secrets Manager. AWS IoT Greengrass stores a local, encrypted copy of the secret on the Greengrass core, where it can be securely accessed by connectors and Lambda functions.
  * ARN
  * AdditionalStagingLabelsToDownload
    * items [__string](#__string)

### SoftwareToUpdate
* SoftwareToUpdate `string` (values: core, ota_agent): The piece of software on the Greengrass core that will be updated.

### StartBulkDeploymentRequest
* StartBulkDeploymentRequest `object`
  * tags
  * ExecutionRoleArn **required**
  * InputFileUri **required**

### StartBulkDeploymentResponse
* StartBulkDeploymentResponse `object`
  * BulkDeploymentArn
  * BulkDeploymentId

### StopBulkDeploymentRequest
* StopBulkDeploymentRequest `object`

### StopBulkDeploymentResponse
* StopBulkDeploymentResponse `object`

### Subscription
* Subscription `object`: Information about a subscription.
  * Id **required**
  * Source **required**
  * Subject **required**
  * Target **required**

### SubscriptionDefinitionVersion
* SubscriptionDefinitionVersion `object`: Information about a subscription definition version.
  * Subscriptions
    * items [Subscription](#subscription)

### TagResourceRequest
* TagResourceRequest `object`: A map of the key-value pairs for the resource tag.
  * tags [Tags](#tags)

### Tags
* Tags `object`: The key-value pair for the resource tag.

### Telemetry
* Telemetry `string` (values: On, Off)

### TelemetryConfiguration
* TelemetryConfiguration `object`: Configuration settings for running telemetry.
  * ConfigurationSyncStatus
  * Telemetry **required**

### TelemetryConfigurationUpdate
* TelemetryConfigurationUpdate `object`: Configuration settings for running telemetry.
  * Telemetry **required**

### UntagResourceRequest
* UntagResourceRequest `object`

### UpdateAgentLogLevel
* UpdateAgentLogLevel `string` (values: NONE, TRACE, DEBUG, VERBOSE, INFO, WARN, ERROR, FATAL): The minimum level of log statements that should be logged by the OTA Agent during an update.

### UpdateConnectivityInfoRequest
* UpdateConnectivityInfoRequest `object`: Connectivity information.
  * ConnectivityInfo
    * items [ConnectivityInfo](#connectivityinfo)

### UpdateConnectivityInfoResponse
* UpdateConnectivityInfoResponse `object`
  * Message
  * Version

### UpdateConnectorDefinitionRequest
* UpdateConnectorDefinitionRequest `object`
  * Name

### UpdateConnectorDefinitionResponse
* UpdateConnectorDefinitionResponse `object`

### UpdateCoreDefinitionRequest
* UpdateCoreDefinitionRequest `object`
  * Name

### UpdateCoreDefinitionResponse
* UpdateCoreDefinitionResponse `object`

### UpdateDeviceDefinitionRequest
* UpdateDeviceDefinitionRequest `object`
  * Name

### UpdateDeviceDefinitionResponse
* UpdateDeviceDefinitionResponse `object`

### UpdateFunctionDefinitionRequest
* UpdateFunctionDefinitionRequest `object`
  * Name

### UpdateFunctionDefinitionResponse
* UpdateFunctionDefinitionResponse `object`

### UpdateGroupCertificateConfigurationRequest
* UpdateGroupCertificateConfigurationRequest `object`
  * CertificateExpiryInMilliseconds

### UpdateGroupCertificateConfigurationResponse
* UpdateGroupCertificateConfigurationResponse `object`
  * CertificateAuthorityExpiryInMilliseconds
  * CertificateExpiryInMilliseconds
  * GroupId

### UpdateGroupRequest
* UpdateGroupRequest `object`
  * Name

### UpdateGroupResponse
* UpdateGroupResponse `object`

### UpdateLoggerDefinitionRequest
* UpdateLoggerDefinitionRequest `object`
  * Name

### UpdateLoggerDefinitionResponse
* UpdateLoggerDefinitionResponse `object`

### UpdateResourceDefinitionRequest
* UpdateResourceDefinitionRequest `object`
  * Name

### UpdateResourceDefinitionResponse
* UpdateResourceDefinitionResponse `object`

### UpdateSubscriptionDefinitionRequest
* UpdateSubscriptionDefinitionRequest `object`
  * Name

### UpdateSubscriptionDefinitionResponse
* UpdateSubscriptionDefinitionResponse `object`

### UpdateTargets
* UpdateTargets `array`: The ARNs of the targets (IoT things or IoT thing groups) that this update will be applied to.
  * items [__string](#__string)

### UpdateTargetsArchitecture
* UpdateTargetsArchitecture `string` (values: armv6l, armv7l, x86_64, aarch64): The architecture of the cores which are the targets of an update.

### UpdateTargetsOperatingSystem
* UpdateTargetsOperatingSystem `string` (values: ubuntu, raspbian, amazon_linux, openwrt): The operating system of the cores which are the targets of an update.

### UpdateThingRuntimeConfigurationRequest
* UpdateThingRuntimeConfigurationRequest `object`
  * TelemetryConfiguration
    * Telemetry **required**

### UpdateThingRuntimeConfigurationResponse
* UpdateThingRuntimeConfigurationResponse `object`

### VersionInformation
* VersionInformation `object`: Information about a version.
  * Arn
  * CreationTimestamp
  * Id
  * Version

### __boolean
* __boolean `boolean`

### __integer
* __integer `integer`

### __listOfConnectivityInfo
* __listOfConnectivityInfo `array`
  * items [ConnectivityInfo](#connectivityinfo)

### __listOfConnector
* __listOfConnector `array`
  * items [Connector](#connector)

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

### __listOf__string
* __listOf__string `array`
  * items [__string](#__string)

### __mapOf__string
* __mapOf__string `object`

### __string
* __string `string`


