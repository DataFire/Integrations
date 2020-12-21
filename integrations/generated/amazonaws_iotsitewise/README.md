# @datafire/amazonaws_iotsitewise

Client library for AWS IoT SiteWise

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_iotsitewise
```
```js
let amazonaws_iotsitewise = require('@datafire/amazonaws_iotsitewise').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

Welcome to the AWS IoT SiteWise API Reference. AWS IoT SiteWise is an AWS service that connects <a href="https://en.wikipedia.org/wiki/Internet_of_things#Industrial_applications">Industrial Internet of Things (IIoT)</a> devices to the power of the AWS Cloud. For more information, see the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/">AWS IoT SiteWise User Guide</a>. For information about AWS IoT SiteWise quotas, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>AWS IoT SiteWise User Guide</i>.

## Actions

### ListGateways



```js
amazonaws_iotsitewise.ListGateways({}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * maxResults `integer`

#### Output
* output [ListGatewaysResponse](#listgatewaysresponse)

### CreateGateway



```js
amazonaws_iotsitewise.CreateGateway({
  "gatewayName": "",
  "gatewayPlatform": {}
}, context)
```

#### Input
* input `object`
  * tags `object`: A list of key-value pairs that contain metadata for the gateway. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your AWS IoT SiteWise resources</a> in the <i>AWS IoT SiteWise User Guide</i>.
  * gatewayName **required** `string`: A unique, friendly name for the gateway.
  * gatewayPlatform **required** `object`: Contains a gateway's platform information.
    * greengrass
      * groupArn **required**

#### Output
*Output schema unknown*

### DeleteGateway



```js
amazonaws_iotsitewise.DeleteGateway({
  "gatewayId": ""
}, context)
```

#### Input
* input `object`
  * gatewayId **required** `string`

#### Output
*Output schema unknown*

### DescribeGateway



```js
amazonaws_iotsitewise.DescribeGateway({
  "gatewayId": ""
}, context)
```

#### Input
* input `object`
  * gatewayId **required** `string`

#### Output
* output [DescribeGatewayResponse](#describegatewayresponse)

### UpdateGateway



```js
amazonaws_iotsitewise.UpdateGateway({
  "gatewayId": "",
  "gatewayName": ""
}, context)
```

#### Input
* input `object`
  * gatewayId **required** `string`
  * gatewayName **required** `string`: A unique, friendly name for the gateway.

#### Output
*Output schema unknown*

### UpdateGatewayCapabilityConfiguration



```js
amazonaws_iotsitewise.UpdateGatewayCapabilityConfiguration({
  "gatewayId": "",
  "capabilityNamespace": "",
  "capabilityConfiguration": ""
}, context)
```

#### Input
* input `object`
  * gatewayId **required** `string`
  * capabilityConfiguration **required** `string`: The JSON document that defines the configuration for the gateway capability. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/configure-sources.html#configure-source-cli">Configuring data sources (CLI)</a> in the <i>AWS IoT SiteWise User Guide</i>.
  * capabilityNamespace **required** `string`: The namespace of the gateway capability configuration to be updated. For example, if you configure OPC-UA sources from the AWS IoT SiteWise console, your OPC-UA capability configuration has the namespace <code>iotsitewise:opcuacollector:version</code>, where <code>version</code> is a number such as <code>1</code>.

#### Output
*Output schema unknown*

### DescribeGatewayCapabilityConfiguration



```js
amazonaws_iotsitewise.DescribeGatewayCapabilityConfiguration({
  "gatewayId": "",
  "capabilityNamespace": ""
}, context)
```

#### Input
* input `object`
  * gatewayId **required** `string`
  * capabilityNamespace **required** `string`

#### Output
* output [DescribeGatewayCapabilityConfigurationResponse](#describegatewaycapabilityconfigurationresponse)

### ListAccessPolicies



```js
amazonaws_iotsitewise.ListAccessPolicies({}, context)
```

#### Input
* input `object`
  * identityType `string`
  * identityId `string`
  * resourceType `string`
  * resourceId `string`
  * iamArn `string`
  * nextToken `string`
  * maxResults `integer`

#### Output
* output [ListAccessPoliciesResponse](#listaccesspoliciesresponse)

### CreateAccessPolicy



```js
amazonaws_iotsitewise.CreateAccessPolicy({
  "accessPolicyIdentity": {},
  "accessPolicyResource": {},
  "accessPolicyPermission": ""
}, context)
```

#### Input
* input `object`
  * tags `object`: A list of key-value pairs that contain metadata for the access policy. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your AWS IoT SiteWise resources</a> in the <i>AWS IoT SiteWise User Guide</i>.
  * accessPolicyIdentity **required** `object`: <p>Contains an identity that can access an AWS IoT SiteWise Monitor resource.</p> <note> <p>Currently, you can't use AWS APIs to retrieve AWS SSO identity IDs. You can find the AWS SSO identity IDs in the URL of user and group pages in the <a href="https://console.aws.amazon.com/singlesignon">AWS SSO console</a>.</p> </note>
    * group
      * id **required**
    * iamUser
      * arn **required**
    * user
      * id **required**
  * accessPolicyPermission **required** `string` (values: ADMINISTRATOR, VIEWER): The permission level for this access policy. Note that a project <code>ADMINISTRATOR</code> is also known as a project owner.
  * accessPolicyResource **required** `object`: Contains an AWS IoT SiteWise Monitor resource ID for a portal or project.
    * portal
      * id **required**
    * project
      * id **required**
  * clientToken `string`: A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.

#### Output
*Output schema unknown*

### DeleteAccessPolicy



```js
amazonaws_iotsitewise.DeleteAccessPolicy({
  "accessPolicyId": ""
}, context)
```

#### Input
* input `object`
  * accessPolicyId **required** `string`
  * clientToken `string`

#### Output
*Output schema unknown*

### DescribeAccessPolicy



```js
amazonaws_iotsitewise.DescribeAccessPolicy({
  "accessPolicyId": ""
}, context)
```

#### Input
* input `object`
  * accessPolicyId **required** `string`

#### Output
* output [DescribeAccessPolicyResponse](#describeaccesspolicyresponse)

### UpdateAccessPolicy



```js
amazonaws_iotsitewise.UpdateAccessPolicy({
  "accessPolicyId": "",
  "accessPolicyIdentity": {},
  "accessPolicyResource": {},
  "accessPolicyPermission": ""
}, context)
```

#### Input
* input `object`
  * accessPolicyId **required** `string`
  * accessPolicyIdentity **required** `object`: <p>Contains an identity that can access an AWS IoT SiteWise Monitor resource.</p> <note> <p>Currently, you can't use AWS APIs to retrieve AWS SSO identity IDs. You can find the AWS SSO identity IDs in the URL of user and group pages in the <a href="https://console.aws.amazon.com/singlesignon">AWS SSO console</a>.</p> </note>
    * group
      * id **required**
    * iamUser
      * arn **required**
    * user
      * id **required**
  * accessPolicyPermission **required** `string` (values: ADMINISTRATOR, VIEWER): The permission level for this access policy. Note that a project <code>ADMINISTRATOR</code> is also known as a project owner.
  * accessPolicyResource **required** `object`: Contains an AWS IoT SiteWise Monitor resource ID for a portal or project.
    * portal
      * id **required**
    * project
      * id **required**
  * clientToken `string`: A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.

#### Output
* output [UpdateAccessPolicyResponse](#updateaccesspolicyresponse)

### ListAssetModels



```js
amazonaws_iotsitewise.ListAssetModels({}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * maxResults `integer`

#### Output
* output [ListAssetModelsResponse](#listassetmodelsresponse)

### CreateAssetModel



```js
amazonaws_iotsitewise.CreateAssetModel({
  "assetModelName": ""
}, context)
```

#### Input
* input `object`
  * tags `object`: A list of key-value pairs that contain metadata for the asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your AWS IoT SiteWise resources</a> in the <i>AWS IoT SiteWise User Guide</i>.
  * assetModelCompositeModels `array`: The composite asset models that are part of this asset model. Composite asset models are asset models that contain specific properties. Each composite model has a type that defines the properties that the composite model supports. Use composite asset models to define alarms on this asset model.
    * items [AssetModelCompositeModelDefinition](#assetmodelcompositemodeldefinition)
  * assetModelDescription `string`: A description for the asset model.
  * assetModelHierarchies `array`: <p>The hierarchy definitions of the asset model. Each hierarchy specifies an asset model whose assets can be children of any other assets created from this asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-hierarchies.html">Asset hierarchies</a> in the <i>AWS IoT SiteWise User Guide</i>.</p> <p>You can specify up to 10 hierarchies per asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>AWS IoT SiteWise User Guide</i>.</p>
    * items [AssetModelHierarchyDefinition](#assetmodelhierarchydefinition)
  * assetModelName **required** `string`: A unique, friendly name for the asset model.
  * assetModelProperties `array`: <p>The property definitions of the asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html">Asset properties</a> in the <i>AWS IoT SiteWise User Guide</i>.</p> <p>You can specify up to 200 properties per asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>AWS IoT SiteWise User Guide</i>.</p>
    * items [AssetModelPropertyDefinition](#assetmodelpropertydefinition)
  * clientToken `string`: A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.

#### Output
*Output schema unknown*

### DeleteAssetModel



```js
amazonaws_iotsitewise.DeleteAssetModel({
  "assetModelId": ""
}, context)
```

#### Input
* input `object`
  * assetModelId **required** `string`
  * clientToken `string`

#### Output
*Output schema unknown*

### DescribeAssetModel



```js
amazonaws_iotsitewise.DescribeAssetModel({
  "assetModelId": ""
}, context)
```

#### Input
* input `object`
  * assetModelId **required** `string`

#### Output
* output [DescribeAssetModelResponse](#describeassetmodelresponse)

### UpdateAssetModel



```js
amazonaws_iotsitewise.UpdateAssetModel({
  "assetModelId": "",
  "assetModelName": ""
}, context)
```

#### Input
* input `object`
  * assetModelId **required** `string`
  * assetModelCompositeModels `array`: The composite asset models that are part of this asset model. Composite asset models are asset models that contain specific properties. Each composite model has a type that defines the properties that the composite model supports. Use composite asset models to define alarms on this asset model.
    * items [AssetModelCompositeModel](#assetmodelcompositemodel)
  * assetModelDescription `string`: A description for the asset model.
  * assetModelHierarchies `array`: <p>The updated hierarchy definitions of the asset model. Each hierarchy specifies an asset model whose assets can be children of any other assets created from this asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-hierarchies.html">Asset hierarchies</a> in the <i>AWS IoT SiteWise User Guide</i>.</p> <p>You can specify up to 10 hierarchies per asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>AWS IoT SiteWise User Guide</i>.</p>
    * items [AssetModelHierarchy](#assetmodelhierarchy)
  * assetModelName **required** `string`: A unique, friendly name for the asset model.
  * assetModelProperties `array`: <p>The updated property definitions of the asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html">Asset properties</a> in the <i>AWS IoT SiteWise User Guide</i>.</p> <p>You can specify up to 200 properties per asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>AWS IoT SiteWise User Guide</i>.</p>
    * items [AssetModelProperty](#assetmodelproperty)
  * clientToken `string`: A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.

#### Output
*Output schema unknown*

### ListAssets



```js
amazonaws_iotsitewise.ListAssets({}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * maxResults `integer`
  * assetModelId `string`
  * filter `string`

#### Output
* output [ListAssetsResponse](#listassetsresponse)

### CreateAsset



```js
amazonaws_iotsitewise.CreateAsset({
  "assetName": "",
  "assetModelId": ""
}, context)
```

#### Input
* input `object`
  * tags `object`: A list of key-value pairs that contain metadata for the asset. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your AWS IoT SiteWise resources</a> in the <i>AWS IoT SiteWise User Guide</i>.
  * assetModelId **required** `string`: The ID of the asset model from which to create the asset.
  * assetName **required** `string`: A unique, friendly name for the asset.
  * clientToken `string`: A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.

#### Output
*Output schema unknown*

### DeleteAsset



```js
amazonaws_iotsitewise.DeleteAsset({
  "assetId": ""
}, context)
```

#### Input
* input `object`
  * assetId **required** `string`
  * clientToken `string`

#### Output
*Output schema unknown*

### DescribeAsset



```js
amazonaws_iotsitewise.DescribeAsset({
  "assetId": ""
}, context)
```

#### Input
* input `object`
  * assetId **required** `string`

#### Output
* output [DescribeAssetResponse](#describeassetresponse)

### UpdateAsset



```js
amazonaws_iotsitewise.UpdateAsset({
  "assetId": "",
  "assetName": ""
}, context)
```

#### Input
* input `object`
  * assetId **required** `string`
  * assetName **required** `string`: A unique, friendly name for the asset.
  * clientToken `string`: A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.

#### Output
*Output schema unknown*

### ListAssetRelationships



```js
amazonaws_iotsitewise.ListAssetRelationships({
  "assetId": "",
  "traversalType": ""
}, context)
```

#### Input
* input `object`
  * assetId **required** `string`
  * traversalType **required** `string`
  * nextToken `string`
  * maxResults `integer`

#### Output
* output [ListAssetRelationshipsResponse](#listassetrelationshipsresponse)

### AssociateAssets



```js
amazonaws_iotsitewise.AssociateAssets({
  "assetId": "",
  "hierarchyId": "",
  "childAssetId": ""
}, context)
```

#### Input
* input `object`
  * assetId **required** `string`
  * childAssetId **required** `string`: The ID of the child asset to be associated.
  * clientToken `string`: A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
  * hierarchyId **required** `string`: The ID of a hierarchy in the parent asset's model. Hierarchies allow different groupings of assets to be formed that all come from the same asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-hierarchies.html">Asset hierarchies</a> in the <i>AWS IoT SiteWise User Guide</i>.

#### Output
*Output schema unknown*

### DisassociateAssets



```js
amazonaws_iotsitewise.DisassociateAssets({
  "assetId": "",
  "hierarchyId": "",
  "childAssetId": ""
}, context)
```

#### Input
* input `object`
  * assetId **required** `string`
  * childAssetId **required** `string`: The ID of the child asset to disassociate.
  * clientToken `string`: A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
  * hierarchyId **required** `string`: The ID of a hierarchy in the parent asset's model. Hierarchies allow different groupings of assets to be formed that all come from the same asset model. You can use the hierarchy ID to identify the correct asset to disassociate. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-hierarchies.html">Asset hierarchies</a> in the <i>AWS IoT SiteWise User Guide</i>.

#### Output
*Output schema unknown*

### ListAssociatedAssets



```js
amazonaws_iotsitewise.ListAssociatedAssets({
  "assetId": ""
}, context)
```

#### Input
* input `object`
  * assetId **required** `string`
  * hierarchyId `string`
  * traversalDirection `string`
  * nextToken `string`
  * maxResults `integer`

#### Output
* output [ListAssociatedAssetsResponse](#listassociatedassetsresponse)

### DescribeAssetProperty



```js
amazonaws_iotsitewise.DescribeAssetProperty({
  "assetId": "",
  "propertyId": ""
}, context)
```

#### Input
* input `object`
  * assetId **required** `string`
  * propertyId **required** `string`

#### Output
* output [DescribeAssetPropertyResponse](#describeassetpropertyresponse)

### UpdateAssetProperty



```js
amazonaws_iotsitewise.UpdateAssetProperty({
  "assetId": "",
  "propertyId": ""
}, context)
```

#### Input
* input `object`
  * assetId **required** `string`
  * propertyId **required** `string`
  * clientToken `string`: A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
  * propertyAlias `string`: <p>The property alias that identifies the property, such as an OPC-UA server data stream path (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html">Mapping industrial data streams to asset properties</a> in the <i>AWS IoT SiteWise User Guide</i>.</p> <p>If you omit this parameter, the alias is removed from the property.</p>
  * propertyNotificationState `string` (values: ENABLED, DISABLED): <p>The MQTT notification state (enabled or disabled) for this asset property. When the notification state is enabled, AWS IoT SiteWise publishes property value updates to a unique MQTT topic. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/interact-with-other-services.html">Interacting with other services</a> in the <i>AWS IoT SiteWise User Guide</i>.</p> <p>If you omit this parameter, the notification state is set to <code>DISABLED</code>.</p>

#### Output
*Output schema unknown*

### DescribeDefaultEncryptionConfiguration



```js
amazonaws_iotsitewise.DescribeDefaultEncryptionConfiguration({}, context)
```

#### Input
* input `object`

#### Output
* output [DescribeDefaultEncryptionConfigurationResponse](#describedefaultencryptionconfigurationresponse)

### PutDefaultEncryptionConfiguration



```js
amazonaws_iotsitewise.PutDefaultEncryptionConfiguration({
  "encryptionType": ""
}, context)
```

#### Input
* input `object`
  * encryptionType **required** `string` (values: SITEWISE_DEFAULT_ENCRYPTION, KMS_BASED_ENCRYPTION): The type of encryption used for the encryption configuration.
  * kmsKeyId `string`: The Key ID of the customer managed customer master key (CMK) used for AWS KMS encryption. This is required if you use <code>KMS_BASED_ENCRYPTION</code>.

#### Output
* output [PutDefaultEncryptionConfigurationResponse](#putdefaultencryptionconfigurationresponse)

### CreateDashboard



```js
amazonaws_iotsitewise.CreateDashboard({
  "projectId": "",
  "dashboardName": "",
  "dashboardDefinition": ""
}, context)
```

#### Input
* input `object`
  * tags `object`: A list of key-value pairs that contain metadata for the dashboard. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your AWS IoT SiteWise resources</a> in the <i>AWS IoT SiteWise User Guide</i>.
  * clientToken `string`: A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
  * dashboardDefinition **required** `string`: The dashboard definition specified in a JSON literal. For detailed information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/create-dashboards-using-aws-cli.html">Creating dashboards (CLI)</a> in the <i>AWS IoT SiteWise User Guide</i>.
  * dashboardDescription `string`: A description for the dashboard.
  * dashboardName **required** `string`: A friendly name for the dashboard.
  * projectId **required** `string`: The ID of the project in which to create the dashboard.

#### Output
*Output schema unknown*

### ListDashboards



```js
amazonaws_iotsitewise.ListDashboards({
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`
  * nextToken `string`
  * maxResults `integer`

#### Output
* output [ListDashboardsResponse](#listdashboardsresponse)

### DeleteDashboard



```js
amazonaws_iotsitewise.DeleteDashboard({
  "dashboardId": ""
}, context)
```

#### Input
* input `object`
  * dashboardId **required** `string`
  * clientToken `string`

#### Output
*Output schema unknown*

### DescribeDashboard



```js
amazonaws_iotsitewise.DescribeDashboard({
  "dashboardId": ""
}, context)
```

#### Input
* input `object`
  * dashboardId **required** `string`

#### Output
* output [DescribeDashboardResponse](#describedashboardresponse)

### UpdateDashboard



```js
amazonaws_iotsitewise.UpdateDashboard({
  "dashboardId": "",
  "dashboardName": "",
  "dashboardDefinition": ""
}, context)
```

#### Input
* input `object`
  * dashboardId **required** `string`
  * clientToken `string`: A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
  * dashboardDefinition **required** `string`: The new dashboard definition, as specified in a JSON literal. For detailed information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/create-dashboards-using-aws-cli.html">Creating dashboards (CLI)</a> in the <i>AWS IoT SiteWise User Guide</i>.
  * dashboardDescription `string`: A new description for the dashboard.
  * dashboardName **required** `string`: A new friendly name for the dashboard.

#### Output
* output [UpdateDashboardResponse](#updatedashboardresponse)

### DescribeLoggingOptions



```js
amazonaws_iotsitewise.DescribeLoggingOptions({}, context)
```

#### Input
* input `object`

#### Output
* output [DescribeLoggingOptionsResponse](#describeloggingoptionsresponse)

### PutLoggingOptions



```js
amazonaws_iotsitewise.PutLoggingOptions({
  "loggingOptions": {}
}, context)
```

#### Input
* input `object`
  * loggingOptions **required** `object`: Contains logging options.
    * level

#### Output
* output [PutLoggingOptionsResponse](#putloggingoptionsresponse)

### ListPortals



```js
amazonaws_iotsitewise.ListPortals({}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * maxResults `integer`

#### Output
* output [ListPortalsResponse](#listportalsresponse)

### CreatePortal



```js
amazonaws_iotsitewise.CreatePortal({
  "portalName": "",
  "portalContactEmail": "",
  "roleArn": ""
}, context)
```

#### Input
* input `object`
  * tags `object`: A list of key-value pairs that contain metadata for the portal. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your AWS IoT SiteWise resources</a> in the <i>AWS IoT SiteWise User Guide</i>.
  * clientToken `string`: A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
  * portalAuthMode `string` (values: IAM, SSO): <p>The service to use to authenticate users to the portal. Choose from the following options:</p> <ul> <li> <p> <code>SSO</code> – The portal uses AWS Single Sign-On to authenticate users and manage user permissions. Before you can create a portal that uses AWS SSO, you must enable AWS SSO. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/monitor-get-started.html#mon-gs-sso">Enabling AWS SSO</a> in the <i>AWS IoT SiteWise User Guide</i>. This option is only available in AWS Regions other than the China Regions.</p> </li> <li> <p> <code>IAM</code> – The portal uses AWS Identity and Access Management (IAM) to authenticate users and manage user permissions. This option is only available in the China Regions.</p> </li> </ul> <p>You can't change this value after you create a portal.</p> <p>Default: <code>SSO</code> </p>
  * portalContactEmail **required** `string`: The AWS administrator's contact email address.
  * portalDescription `string`: A description for the portal.
  * portalLogoImageFile `object`: Contains an image file.
    * data
    * type
  * portalName **required** `string`: A friendly name for the portal.
  * roleArn **required** `string`: The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of a service role that allows the portal's users to access your AWS IoT SiteWise resources on your behalf. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/monitor-service-role.html">Using service roles for AWS IoT SiteWise Monitor</a> in the <i>AWS IoT SiteWise User Guide</i>.

#### Output
*Output schema unknown*

### DeletePortal



```js
amazonaws_iotsitewise.DeletePortal({
  "portalId": ""
}, context)
```

#### Input
* input `object`
  * portalId **required** `string`
  * clientToken `string`

#### Output
*Output schema unknown*

### DescribePortal



```js
amazonaws_iotsitewise.DescribePortal({
  "portalId": ""
}, context)
```

#### Input
* input `object`
  * portalId **required** `string`

#### Output
* output [DescribePortalResponse](#describeportalresponse)

### UpdatePortal



```js
amazonaws_iotsitewise.UpdatePortal({
  "portalId": "",
  "portalName": "",
  "portalContactEmail": "",
  "roleArn": ""
}, context)
```

#### Input
* input `object`
  * portalId **required** `string`
  * clientToken `string`: A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
  * portalContactEmail **required** `string`: The AWS administrator's contact email address.
  * portalDescription `string`: A new description for the portal.
  * portalLogoImage `object`: <p>Contains an image that is one of the following:</p> <ul> <li> <p>An image file. Choose this option to upload a new image.</p> </li> <li> <p>The ID of an existing image. Choose this option to keep an existing image.</p> </li> </ul>
    * file [ImageFile](#imagefile)
    * id
  * portalName **required** `string`: A new friendly name for the portal.
  * roleArn **required** `string`: The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of a service role that allows the portal's users to access your AWS IoT SiteWise resources on your behalf. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/monitor-service-role.html">Using service roles for AWS IoT SiteWise Monitor</a> in the <i>AWS IoT SiteWise User Guide</i>.

#### Output
*Output schema unknown*

### CreateProject



```js
amazonaws_iotsitewise.CreateProject({
  "portalId": "",
  "projectName": ""
}, context)
```

#### Input
* input `object`
  * tags `object`: A list of key-value pairs that contain metadata for the project. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your AWS IoT SiteWise resources</a> in the <i>AWS IoT SiteWise User Guide</i>.
  * clientToken `string`: A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
  * portalId **required** `string`: The ID of the portal in which to create the project.
  * projectDescription `string`: A description for the project.
  * projectName **required** `string`: A friendly name for the project.

#### Output
*Output schema unknown*

### ListProjects



```js
amazonaws_iotsitewise.ListProjects({
  "portalId": ""
}, context)
```

#### Input
* input `object`
  * portalId **required** `string`
  * nextToken `string`
  * maxResults `integer`

#### Output
* output [ListProjectsResponse](#listprojectsresponse)

### DeleteProject



```js
amazonaws_iotsitewise.DeleteProject({
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`
  * clientToken `string`

#### Output
*Output schema unknown*

### DescribeProject



```js
amazonaws_iotsitewise.DescribeProject({
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`

#### Output
* output [DescribeProjectResponse](#describeprojectresponse)

### UpdateProject



```js
amazonaws_iotsitewise.UpdateProject({
  "projectId": "",
  "projectName": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`
  * clientToken `string`: A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
  * projectDescription `string`: A new description for the project.
  * projectName **required** `string`: A new friendly name for the project.

#### Output
* output [UpdateProjectResponse](#updateprojectresponse)

### ListProjectAssets



```js
amazonaws_iotsitewise.ListProjectAssets({
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`
  * nextToken `string`
  * maxResults `integer`

#### Output
* output [ListProjectAssetsResponse](#listprojectassetsresponse)

### BatchAssociateProjectAssets



```js
amazonaws_iotsitewise.BatchAssociateProjectAssets({
  "projectId": "",
  "assetIds": []
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`
  * assetIds **required** `array`: The IDs of the assets to be associated to the project.
    * items [ID](#id)
  * clientToken `string`: A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.

#### Output
* output [BatchAssociateProjectAssetsResponse](#batchassociateprojectassetsresponse)

### BatchDisassociateProjectAssets



```js
amazonaws_iotsitewise.BatchDisassociateProjectAssets({
  "projectId": "",
  "assetIds": []
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`
  * assetIds **required** `array`: The IDs of the assets to be disassociated from the project.
    * items [ID](#id)
  * clientToken `string`: A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.

#### Output
* output [BatchDisassociateProjectAssetsResponse](#batchdisassociateprojectassetsresponse)

### BatchPutAssetPropertyValue



```js
amazonaws_iotsitewise.BatchPutAssetPropertyValue({
  "entries": []
}, context)
```

#### Input
* input `object`
  * entries **required** `array`: The list of asset property value entries for the batch put request. You can specify up to 10 entries per request.
    * items [PutAssetPropertyValueEntry](#putassetpropertyvalueentry)

#### Output
* output [BatchPutAssetPropertyValueResponse](#batchputassetpropertyvalueresponse)

### GetAssetPropertyAggregates



```js
amazonaws_iotsitewise.GetAssetPropertyAggregates({
  "aggregateTypes": [],
  "resolution": "",
  "startDate": "",
  "endDate": ""
}, context)
```

#### Input
* input `object`
  * assetId `string`
  * propertyId `string`
  * propertyAlias `string`
  * aggregateTypes **required** `array`
  * resolution **required** `string`
  * qualities `array`
  * startDate **required** `string`
  * endDate **required** `string`
  * timeOrdering `string`
  * nextToken `string`
  * maxResults `integer`

#### Output
* output [GetAssetPropertyAggregatesResponse](#getassetpropertyaggregatesresponse)

### GetAssetPropertyValueHistory



```js
amazonaws_iotsitewise.GetAssetPropertyValueHistory({}, context)
```

#### Input
* input `object`
  * assetId `string`
  * propertyId `string`
  * propertyAlias `string`
  * startDate `string`
  * endDate `string`
  * qualities `array`
  * timeOrdering `string`
  * nextToken `string`
  * maxResults `integer`

#### Output
* output [GetAssetPropertyValueHistoryResponse](#getassetpropertyvaluehistoryresponse)

### GetAssetPropertyValue



```js
amazonaws_iotsitewise.GetAssetPropertyValue({}, context)
```

#### Input
* input `object`
  * assetId `string`
  * propertyId `string`
  * propertyAlias `string`

#### Output
* output [GetAssetPropertyValueResponse](#getassetpropertyvalueresponse)

### ListTagsForResource



```js
amazonaws_iotsitewise.ListTagsForResource({
  "resourceArn": ""
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`

#### Output
* output [ListTagsForResourceResponse](#listtagsforresourceresponse)

### TagResource



```js
amazonaws_iotsitewise.TagResource({
  "resourceArn": "",
  "tags": {}
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`
  * tags **required** `object`: A list of key-value pairs that contain metadata for the resource. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your AWS IoT SiteWise resources</a> in the <i>AWS IoT SiteWise User Guide</i>.

#### Output
* output [TagResourceResponse](#tagresourceresponse)

### UntagResource



```js
amazonaws_iotsitewise.UntagResource({
  "resourceArn": "",
  "tagKeys": []
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`
  * tagKeys **required** `array`

#### Output
* output [UntagResourceResponse](#untagresourceresponse)



## Definitions

### ARN
* ARN `string`

### AccessPolicySummaries
* AccessPolicySummaries `array`
  * items [AccessPolicySummary](#accesspolicysummary)

### AccessPolicySummary
* AccessPolicySummary `object`: Contains an access policy that defines an identity's access to an AWS IoT SiteWise Monitor resource.
  * creationDate
  * id **required**
  * identity **required**
    * group
      * id **required**
    * iamUser
      * arn **required**
    * user
      * id **required**
  * lastUpdateDate
  * permission **required**
  * resource **required**
    * portal
      * id **required**
    * project
      * id **required**

### AggregateType
* AggregateType `string` (values: AVERAGE, COUNT, MAXIMUM, MINIMUM, SUM, STANDARD_DEVIATION)

### AggregateTypes
* AggregateTypes `array`
  * items [AggregateType](#aggregatetype)

### AggregatedDoubleValue
* AggregatedDoubleValue `number`

### AggregatedValue
* AggregatedValue `object`: Contains aggregated asset property values (for example, average, minimum, and maximum).
  * quality
  * timestamp **required**
  * value **required**
    * average
    * count
    * maximum
    * minimum
    * standardDeviation
    * sum

### AggregatedValues
* AggregatedValues `array`
  * items [AggregatedValue](#aggregatedvalue)

### Aggregates
* Aggregates `object`: Contains the (pre-calculated) aggregate values for an asset property.
  * average
  * count
  * maximum
  * minimum
  * standardDeviation
  * sum

### AmazonResourceName
* AmazonResourceName `string`

### AssetCompositeModel
* AssetCompositeModel `object`: Contains information about a composite model in an asset. This object contains the asset's properties that you define in the composite model.
  * description
  * name **required**
  * properties **required**
    * items [AssetProperty](#assetproperty)
  * type **required**

### AssetCompositeModels
* AssetCompositeModels `array`
  * items [AssetCompositeModel](#assetcompositemodel)

### AssetErrorCode
* AssetErrorCode `string` (values: INTERNAL_FAILURE)

### AssetErrorDetails
* AssetErrorDetails `object`: Contains error details for the requested associate project asset action.
  * assetId **required**
  * code **required**
  * message **required**

### AssetErrorMessage
* AssetErrorMessage `string`

### AssetHierarchies
* AssetHierarchies `array`
  * items [AssetHierarchy](#assethierarchy)

### AssetHierarchy
* AssetHierarchy `object`: Describes an asset hierarchy that contains a hierarchy's name and ID.
  * id
  * name **required**

### AssetHierarchyInfo
* AssetHierarchyInfo `object`: Contains information about a parent asset and a child asset that are related through an asset hierarchy.
  * childAssetId
  * parentAssetId

### AssetIDs
* AssetIDs `array`
  * items [ID](#id)

### AssetModelCompositeModel
* AssetModelCompositeModel `object`: Contains information about a composite model in an asset model. This object contains the asset property definitions that you define in the composite model.
  * description
  * name **required**
  * properties
    * items [AssetModelProperty](#assetmodelproperty)
  * type **required**

### AssetModelCompositeModelDefinition
* AssetModelCompositeModelDefinition `object`: Contains a composite model definition in an asset model. This composite model definition is applied to all assets created from the asset model.
  * description
  * name **required**
  * properties
    * items [AssetModelPropertyDefinition](#assetmodelpropertydefinition)
  * type **required**

### AssetModelCompositeModelDefinitions
* AssetModelCompositeModelDefinitions `array`
  * items [AssetModelCompositeModelDefinition](#assetmodelcompositemodeldefinition)

### AssetModelCompositeModels
* AssetModelCompositeModels `array`
  * items [AssetModelCompositeModel](#assetmodelcompositemodel)

### AssetModelHierarchies
* AssetModelHierarchies `array`
  * items [AssetModelHierarchy](#assetmodelhierarchy)

### AssetModelHierarchy
* AssetModelHierarchy `object`: Describes an asset hierarchy that contains a hierarchy's name, ID, and child asset model ID that specifies the type of asset that can be in this hierarchy.
  * childAssetModelId **required**
  * id
  * name **required**

### AssetModelHierarchyDefinition
* AssetModelHierarchyDefinition `object`: Contains an asset model hierarchy used in asset model creation. An asset model hierarchy determines the kind (or type) of asset that can belong to a hierarchy.
  * childAssetModelId **required**
  * name **required**

### AssetModelHierarchyDefinitions
* AssetModelHierarchyDefinitions `array`
  * items [AssetModelHierarchyDefinition](#assetmodelhierarchydefinition)

### AssetModelProperties
* AssetModelProperties `array`
  * items [AssetModelProperty](#assetmodelproperty)

### AssetModelProperty
* AssetModelProperty `object`: Contains information about an asset model property.
  * dataType **required**
  * dataTypeSpec
  * id
  * name **required**
  * type **required**
    * attribute
      * defaultValue
    * measurement
    * metric
      * expression **required**
      * variables **required**
        * items [ExpressionVariable](#expressionvariable)
      * window **required**
        * tumbling
          * interval **required**
    * transform
      * expression **required**
      * variables **required**
        * items [ExpressionVariable](#expressionvariable)
  * unit

### AssetModelPropertyDefinition
* AssetModelPropertyDefinition `object`: Contains an asset model property definition. This property definition is applied to all assets created from the asset model.
  * dataType **required**
  * dataTypeSpec
  * name **required**
  * type **required**
    * attribute
      * defaultValue
    * measurement
    * metric
      * expression **required**
      * variables **required**
        * items [ExpressionVariable](#expressionvariable)
      * window **required**
        * tumbling
          * interval **required**
    * transform
      * expression **required**
      * variables **required**
        * items [ExpressionVariable](#expressionvariable)
  * unit

### AssetModelPropertyDefinitions
* AssetModelPropertyDefinitions `array`
  * items [AssetModelPropertyDefinition](#assetmodelpropertydefinition)

### AssetModelState
* AssetModelState `string` (values: CREATING, ACTIVE, UPDATING, PROPAGATING, DELETING, FAILED)

### AssetModelStatus
* AssetModelStatus `object`: Contains current status information for an asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-and-model-states.html">Asset and model states</a> in the <i>AWS IoT SiteWise User Guide</i>.
  * error
    * code **required**
    * message **required**
  * state **required**

### AssetModelSummaries
* AssetModelSummaries `array`
  * items [AssetModelSummary](#assetmodelsummary)

### AssetModelSummary
* AssetModelSummary `object`: Contains a summary of an asset model.
  * arn **required**
  * creationDate **required**
  * description **required**
  * id **required**
  * lastUpdateDate **required**
  * name **required**
  * status **required**
    * error
      * code **required**
      * message **required**
    * state **required**

### AssetProperties
* AssetProperties `array`
  * items [AssetProperty](#assetproperty)

### AssetProperty
* AssetProperty `object`: Contains asset property information.
  * alias
  * dataType **required**
  * dataTypeSpec
  * id **required**
  * name **required**
  * notification
    * state **required**
    * topic **required**
  * unit

### AssetPropertyAlias
* AssetPropertyAlias `string`

### AssetPropertyValue
* AssetPropertyValue `object`: Contains asset property value information.
  * quality
  * timestamp **required**
    * offsetInNanos
    * timeInSeconds **required**
  * value **required**
    * booleanValue
    * doubleValue
    * integerValue
    * stringValue

### AssetPropertyValueHistory
* AssetPropertyValueHistory `array`
  * items [AssetPropertyValue](#assetpropertyvalue)

### AssetPropertyValues
* AssetPropertyValues `array`
  * items [AssetPropertyValue](#assetpropertyvalue)

### AssetRelationshipSummaries
* AssetRelationshipSummaries `array`
  * items [AssetRelationshipSummary](#assetrelationshipsummary)

### AssetRelationshipSummary
* AssetRelationshipSummary `object`: Contains information about assets that are related to one another.
  * hierarchyInfo
    * childAssetId
    * parentAssetId
  * relationshipType **required**

### AssetRelationshipType
* AssetRelationshipType `string` (values: HIERARCHY)

### AssetState
* AssetState `string` (values: CREATING, ACTIVE, UPDATING, DELETING, FAILED)

### AssetStatus
* AssetStatus `object`: Contains information about the current status of an asset. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-and-model-states.html">Asset and model states</a> in the <i>AWS IoT SiteWise User Guide</i>.
  * error
    * code **required**
    * message **required**
  * state **required**

### AssetSummaries
* AssetSummaries `array`
  * items [AssetSummary](#assetsummary)

### AssetSummary
* AssetSummary `object`: Contains a summary of an asset.
  * arn **required**
  * assetModelId **required**
  * creationDate **required**
  * hierarchies **required**
    * items [AssetHierarchy](#assethierarchy)
  * id **required**
  * lastUpdateDate **required**
  * name **required**
  * status **required**
    * error
      * code **required**
      * message **required**
    * state **required**

### AssociateAssetsRequest
* AssociateAssetsRequest `object`
  * childAssetId **required**
  * clientToken
  * hierarchyId **required**

### AssociatedAssetsSummaries
* AssociatedAssetsSummaries `array`
  * items [AssociatedAssetsSummary](#associatedassetssummary)

### AssociatedAssetsSummary
* AssociatedAssetsSummary `object`: Contains a summary of an associated asset.
  * arn **required**
  * assetModelId **required**
  * creationDate **required**
  * hierarchies **required**
    * items [AssetHierarchy](#assethierarchy)
  * id **required**
  * lastUpdateDate **required**
  * name **required**
  * status **required**
    * error
      * code **required**
      * message **required**
    * state **required**

### Attribute
* Attribute `object`: Contains an asset attribute property. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html#attributes">Attributes</a> in the <i>AWS IoT SiteWise User Guide</i>.
  * defaultValue

### AuthMode
* AuthMode `string` (values: IAM, SSO)

### BatchAssociateProjectAssetsErrors
* BatchAssociateProjectAssetsErrors `array`
  * items [AssetErrorDetails](#asseterrordetails)

### BatchAssociateProjectAssetsRequest
* BatchAssociateProjectAssetsRequest `object`
  * assetIds **required**
    * items [ID](#id)
  * clientToken

### BatchAssociateProjectAssetsResponse
* BatchAssociateProjectAssetsResponse `object`
  * errors
    * items [AssetErrorDetails](#asseterrordetails)

### BatchDisassociateProjectAssetsErrors
* BatchDisassociateProjectAssetsErrors `array`
  * items [AssetErrorDetails](#asseterrordetails)

### BatchDisassociateProjectAssetsRequest
* BatchDisassociateProjectAssetsRequest `object`
  * assetIds **required**
    * items [ID](#id)
  * clientToken

### BatchDisassociateProjectAssetsResponse
* BatchDisassociateProjectAssetsResponse `object`
  * errors
    * items [AssetErrorDetails](#asseterrordetails)

### BatchPutAssetPropertyError
* BatchPutAssetPropertyError `object`: Contains error information from updating a batch of asset property values.
  * errorCode **required**
  * errorMessage **required**
  * timestamps **required**
    * items [TimeInNanos](#timeinnanos)

### BatchPutAssetPropertyErrorEntries
* BatchPutAssetPropertyErrorEntries `array`
  * items [BatchPutAssetPropertyErrorEntry](#batchputassetpropertyerrorentry)

### BatchPutAssetPropertyErrorEntry
* BatchPutAssetPropertyErrorEntry `object`: Contains error information for asset property value entries that are associated with the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchPutAssetPropertyValue.html">BatchPutAssetPropertyValue</a> API.
  * entryId **required**
  * errors **required**
    * items [BatchPutAssetPropertyError](#batchputassetpropertyerror)

### BatchPutAssetPropertyErrors
* BatchPutAssetPropertyErrors `array`
  * items [BatchPutAssetPropertyError](#batchputassetpropertyerror)

### BatchPutAssetPropertyValueErrorCode
* BatchPutAssetPropertyValueErrorCode `string` (values: ResourceNotFoundException, InvalidRequestException, InternalFailureException, ServiceUnavailableException, ThrottlingException, LimitExceededException, ConflictingOperationException, TimestampOutOfRangeException, AccessDeniedException)

### BatchPutAssetPropertyValueRequest
* BatchPutAssetPropertyValueRequest `object`
  * entries **required**
    * items [PutAssetPropertyValueEntry](#putassetpropertyvalueentry)

### BatchPutAssetPropertyValueResponse
* BatchPutAssetPropertyValueResponse `object`
  * errorEntries **required**
    * items [BatchPutAssetPropertyErrorEntry](#batchputassetpropertyerrorentry)

### CapabilityConfiguration
* CapabilityConfiguration `string`

### CapabilityNamespace
* CapabilityNamespace `string`

### CapabilitySyncStatus
* CapabilitySyncStatus `string` (values: IN_SYNC, OUT_OF_SYNC, SYNC_FAILED)

### ClientToken
* ClientToken `string`

### CompositeModelProperty
* CompositeModelProperty `object`: Contains information about a composite model property on an asset.
  * assetProperty **required** [Property](#property)
  * name **required**
  * type **required**

### ConfigurationErrorDetails
* ConfigurationErrorDetails `object`: Contains the details of an AWS IoT SiteWise configuration error.
  * code **required**
  * message **required**

### ConfigurationState
* ConfigurationState `string` (values: ACTIVE, UPDATE_IN_PROGRESS, UPDATE_FAILED)

### ConfigurationStatus
* ConfigurationStatus `object`: Contains current status information for the configuration.
  * error
    * code **required**
    * message **required**
  * state **required**

### ConflictingOperationException


### CreateAccessPolicyRequest
* CreateAccessPolicyRequest `object`
  * tags
  * accessPolicyIdentity **required**
    * group
      * id **required**
    * iamUser
      * arn **required**
    * user
      * id **required**
  * accessPolicyPermission **required**
  * accessPolicyResource **required**
    * portal
      * id **required**
    * project
      * id **required**
  * clientToken

### CreateAccessPolicyResponse
* CreateAccessPolicyResponse `object`
  * accessPolicyArn **required**
  * accessPolicyId **required**

### CreateAssetModelRequest
* CreateAssetModelRequest `object`
  * tags
  * assetModelCompositeModels
    * items [AssetModelCompositeModelDefinition](#assetmodelcompositemodeldefinition)
  * assetModelDescription
  * assetModelHierarchies
    * items [AssetModelHierarchyDefinition](#assetmodelhierarchydefinition)
  * assetModelName **required**
  * assetModelProperties
    * items [AssetModelPropertyDefinition](#assetmodelpropertydefinition)
  * clientToken

### CreateAssetModelResponse
* CreateAssetModelResponse `object`
  * assetModelArn **required**
  * assetModelId **required**
  * assetModelStatus **required**
    * error
      * code **required**
      * message **required**
    * state **required**

### CreateAssetRequest
* CreateAssetRequest `object`
  * tags
  * assetModelId **required**
  * assetName **required**
  * clientToken

### CreateAssetResponse
* CreateAssetResponse `object`
  * assetArn **required**
  * assetId **required**
  * assetStatus **required**
    * error
      * code **required**
      * message **required**
    * state **required**

### CreateDashboardRequest
* CreateDashboardRequest `object`
  * tags
  * clientToken
  * dashboardDefinition **required**
  * dashboardDescription
  * dashboardName **required**
  * projectId **required**

### CreateDashboardResponse
* CreateDashboardResponse `object`
  * dashboardArn **required**
  * dashboardId **required**

### CreateGatewayRequest
* CreateGatewayRequest `object`
  * tags
  * gatewayName **required**
  * gatewayPlatform **required**
    * greengrass **required**
      * groupArn **required**

### CreateGatewayResponse
* CreateGatewayResponse `object`
  * gatewayArn **required**
  * gatewayId **required**

### CreatePortalRequest
* CreatePortalRequest `object`
  * tags
  * clientToken
  * portalAuthMode
  * portalContactEmail **required**
  * portalDescription
  * portalLogoImageFile
    * data **required**
    * type **required**
  * portalName **required**
  * roleArn **required**

### CreatePortalResponse
* CreatePortalResponse `object`
  * portalArn **required**
  * portalId **required**
  * portalStartUrl **required**
  * portalStatus **required**
    * error
      * code
      * message
    * state **required**
  * ssoApplicationId **required**

### CreateProjectRequest
* CreateProjectRequest `object`
  * tags
  * clientToken
  * portalId **required**
  * projectDescription
  * projectName **required**

### CreateProjectResponse
* CreateProjectResponse `object`
  * projectArn **required**
  * projectId **required**

### DashboardDefinition
* DashboardDefinition `string`

### DashboardSummaries
* DashboardSummaries `array`
  * items [DashboardSummary](#dashboardsummary)

### DashboardSummary
* DashboardSummary `object`: Contains a dashboard summary.
  * creationDate
  * description
  * id **required**
  * lastUpdateDate
  * name **required**

### DefaultValue
* DefaultValue `string`

### DeleteAccessPolicyRequest
* DeleteAccessPolicyRequest `object`

### DeleteAccessPolicyResponse
* DeleteAccessPolicyResponse `object`

### DeleteAssetModelRequest
* DeleteAssetModelRequest `object`

### DeleteAssetModelResponse
* DeleteAssetModelResponse `object`
  * assetModelStatus **required**
    * error
      * code **required**
      * message **required**
    * state **required**

### DeleteAssetRequest
* DeleteAssetRequest `object`

### DeleteAssetResponse
* DeleteAssetResponse `object`
  * assetStatus **required**
    * error
      * code **required**
      * message **required**
    * state **required**

### DeleteDashboardRequest
* DeleteDashboardRequest `object`

### DeleteDashboardResponse
* DeleteDashboardResponse `object`

### DeleteGatewayRequest
* DeleteGatewayRequest `object`

### DeletePortalRequest
* DeletePortalRequest `object`

### DeletePortalResponse
* DeletePortalResponse `object`
  * portalStatus **required**
    * error
      * code
      * message
    * state **required**

### DeleteProjectRequest
* DeleteProjectRequest `object`

### DeleteProjectResponse
* DeleteProjectResponse `object`

### DescribeAccessPolicyRequest
* DescribeAccessPolicyRequest `object`

### DescribeAccessPolicyResponse
* DescribeAccessPolicyResponse `object`
  * accessPolicyArn **required**
  * accessPolicyCreationDate **required**
  * accessPolicyId **required**
  * accessPolicyIdentity **required**
    * group
      * id **required**
    * iamUser
      * arn **required**
    * user
      * id **required**
  * accessPolicyLastUpdateDate **required**
  * accessPolicyPermission **required**
  * accessPolicyResource **required**
    * portal
      * id **required**
    * project
      * id **required**

### DescribeAssetModelRequest
* DescribeAssetModelRequest `object`

### DescribeAssetModelResponse
* DescribeAssetModelResponse `object`
  * assetModelArn **required**
  * assetModelCompositeModels
    * items [AssetModelCompositeModel](#assetmodelcompositemodel)
  * assetModelCreationDate **required**
  * assetModelDescription **required**
  * assetModelHierarchies **required**
    * items [AssetModelHierarchy](#assetmodelhierarchy)
  * assetModelId **required**
  * assetModelLastUpdateDate **required**
  * assetModelName **required**
  * assetModelProperties **required**
    * items [AssetModelProperty](#assetmodelproperty)
  * assetModelStatus **required**
    * error
      * code **required**
      * message **required**
    * state **required**

### DescribeAssetPropertyRequest
* DescribeAssetPropertyRequest `object`

### DescribeAssetPropertyResponse
* DescribeAssetPropertyResponse `object`
  * assetId **required**
  * assetModelId **required**
  * assetName **required**
  * assetProperty
    * alias
    * dataType **required**
    * id **required**
    * name **required**
    * notification
      * state **required**
      * topic **required**
    * type
      * attribute
        * defaultValue
      * measurement
      * metric
        * expression **required**
        * variables **required**
          * items [ExpressionVariable](#expressionvariable)
        * window **required**
          * tumbling
      * transform
        * expression **required**
        * variables **required**
          * items [ExpressionVariable](#expressionvariable)
    * unit
  * compositeModel
    * assetProperty **required** [Property](#property)
    * name **required**
    * type **required**

### DescribeAssetRequest
* DescribeAssetRequest `object`

### DescribeAssetResponse
* DescribeAssetResponse `object`
  * assetArn **required**
  * assetCompositeModels
    * items [AssetCompositeModel](#assetcompositemodel)
  * assetCreationDate **required**
  * assetHierarchies **required**
    * items [AssetHierarchy](#assethierarchy)
  * assetId **required**
  * assetLastUpdateDate **required**
  * assetModelId **required**
  * assetName **required**
  * assetProperties **required**
    * items [AssetProperty](#assetproperty)
  * assetStatus **required**
    * error
      * code **required**
      * message **required**
    * state **required**

### DescribeDashboardRequest
* DescribeDashboardRequest `object`

### DescribeDashboardResponse
* DescribeDashboardResponse `object`
  * dashboardArn **required**
  * dashboardCreationDate **required**
  * dashboardDefinition **required**
  * dashboardDescription
  * dashboardId **required**
  * dashboardLastUpdateDate **required**
  * dashboardName **required**
  * projectId **required**

### DescribeDefaultEncryptionConfigurationRequest
* DescribeDefaultEncryptionConfigurationRequest `object`

### DescribeDefaultEncryptionConfigurationResponse
* DescribeDefaultEncryptionConfigurationResponse `object`
  * configurationStatus **required**
    * error
      * code **required**
      * message **required**
    * state **required**
  * encryptionType **required**
  * kmsKeyArn

### DescribeGatewayCapabilityConfigurationRequest
* DescribeGatewayCapabilityConfigurationRequest `object`

### DescribeGatewayCapabilityConfigurationResponse
* DescribeGatewayCapabilityConfigurationResponse `object`
  * capabilityConfiguration **required**
  * capabilityNamespace **required**
  * capabilitySyncStatus **required**
  * gatewayId **required**

### DescribeGatewayRequest
* DescribeGatewayRequest `object`

### DescribeGatewayResponse
* DescribeGatewayResponse `object`
  * creationDate **required**
  * gatewayArn **required**
  * gatewayCapabilitySummaries **required**
    * items [GatewayCapabilitySummary](#gatewaycapabilitysummary)
  * gatewayId **required**
  * gatewayName **required**
  * gatewayPlatform
    * greengrass **required**
      * groupArn **required**
  * lastUpdateDate **required**

### DescribeLoggingOptionsRequest
* DescribeLoggingOptionsRequest `object`

### DescribeLoggingOptionsResponse
* DescribeLoggingOptionsResponse `object`
  * loggingOptions **required**
    * level **required**

### DescribePortalRequest
* DescribePortalRequest `object`

### DescribePortalResponse
* DescribePortalResponse `object`
  * portalArn **required**
  * portalAuthMode
  * portalClientId **required**
  * portalContactEmail **required**
  * portalCreationDate **required**
  * portalDescription
  * portalId **required**
  * portalLastUpdateDate **required**
  * portalLogoImageLocation
    * id **required**
    * url **required**
  * portalName **required**
  * portalStartUrl **required**
  * portalStatus **required**
    * error
      * code
      * message
    * state **required**
  * roleArn

### DescribeProjectRequest
* DescribeProjectRequest `object`

### DescribeProjectResponse
* DescribeProjectResponse `object`
  * portalId **required**
  * projectArn **required**
  * projectCreationDate **required**
  * projectDescription
  * projectId **required**
  * projectLastUpdateDate **required**
  * projectName **required**

### Description
* Description `string`

### DisassociateAssetsRequest
* DisassociateAssetsRequest `object`
  * childAssetId **required**
  * clientToken
  * hierarchyId **required**

### Email
* Email `string`

### EncryptionType
* EncryptionType `string` (values: SITEWISE_DEFAULT_ENCRYPTION, KMS_BASED_ENCRYPTION)

### EntryId
* EntryId `string`

### ErrorCode
* ErrorCode `string` (values: VALIDATION_ERROR, INTERNAL_FAILURE)

### ErrorDetails
* ErrorDetails `object`: Contains the details of an AWS IoT SiteWise error.
  * code **required**
  * message **required**

### ErrorMessage
* ErrorMessage `string`

### Expression
* Expression `string`

### ExpressionVariable
* ExpressionVariable `object`: Contains expression variable information.
  * name **required**
  * value **required**
    * hierarchyId
    * propertyId **required**

### ExpressionVariables
* ExpressionVariables `array`
  * items [ExpressionVariable](#expressionvariable)

### GatewayCapabilitySummaries
* GatewayCapabilitySummaries `array`
  * items [GatewayCapabilitySummary](#gatewaycapabilitysummary)

### GatewayCapabilitySummary
* GatewayCapabilitySummary `object`: Contains a summary of a gateway capability configuration.
  * capabilityNamespace **required**
  * capabilitySyncStatus **required**

### GatewayPlatform
* GatewayPlatform `object`: Contains a gateway's platform information.
  * greengrass **required**
    * groupArn **required**

### GatewaySummaries
* GatewaySummaries `array`
  * items [GatewaySummary](#gatewaysummary)

### GatewaySummary
* GatewaySummary `object`: Contains a summary of a gateway.
  * creationDate **required**
  * gatewayCapabilitySummaries
    * items [GatewayCapabilitySummary](#gatewaycapabilitysummary)
  * gatewayId **required**
  * gatewayName **required**
  * lastUpdateDate **required**

### GetAssetPropertyAggregatesRequest
* GetAssetPropertyAggregatesRequest `object`

### GetAssetPropertyAggregatesResponse
* GetAssetPropertyAggregatesResponse `object`
  * aggregatedValues **required**
    * items [AggregatedValue](#aggregatedvalue)
  * nextToken

### GetAssetPropertyValueHistoryRequest
* GetAssetPropertyValueHistoryRequest `object`

### GetAssetPropertyValueHistoryResponse
* GetAssetPropertyValueHistoryResponse `object`
  * assetPropertyValueHistory **required**
    * items [AssetPropertyValue](#assetpropertyvalue)
  * nextToken

### GetAssetPropertyValueRequest
* GetAssetPropertyValueRequest `object`

### GetAssetPropertyValueResponse
* GetAssetPropertyValueResponse `object`
  * propertyValue
    * quality
    * timestamp **required**
      * offsetInNanos
      * timeInSeconds **required**
    * value **required**
      * booleanValue
      * doubleValue
      * integerValue
      * stringValue

### Greengrass
* Greengrass `object`: Contains details for a gateway that runs on AWS IoT Greengrass. To create a gateway that runs on AWS IoT Greengrass, you must add the IoT SiteWise connector to a Greengrass group and deploy it. Your Greengrass group must also have permissions to upload data to AWS IoT SiteWise. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/gateway-connector.html">Ingesting data using a gateway</a> in the <i>AWS IoT SiteWise User Guide</i>.
  * groupArn **required**

### GroupIdentity
* GroupIdentity `object`: Contains information for a group identity in an access policy.
  * id **required**

### IAMUserIdentity
* IAMUserIdentity `object`: Contains information about an AWS Identity and Access Management (IAM) user.
  * arn **required**

### ID
* ID `string`

### IDs
* IDs `array`
  * items [ID](#id)

### Identity
* Identity `object`: <p>Contains an identity that can access an AWS IoT SiteWise Monitor resource.</p> <note> <p>Currently, you can't use AWS APIs to retrieve AWS SSO identity IDs. You can find the AWS SSO identity IDs in the URL of user and group pages in the <a href="https://console.aws.amazon.com/singlesignon">AWS SSO console</a>.</p> </note>
  * group
    * id **required**
  * iamUser
    * arn **required**
  * user
    * id **required**

### IdentityId
* IdentityId `string`

### IdentityType
* IdentityType `string` (values: USER, GROUP, IAM)

### Image
* Image `object`: <p>Contains an image that is one of the following:</p> <ul> <li> <p>An image file. Choose this option to upload a new image.</p> </li> <li> <p>The ID of an existing image. Choose this option to keep an existing image.</p> </li> </ul>
  * file [ImageFile](#imagefile)
  * id

### ImageFile
* ImageFile `object`: Contains an image file.
  * data **required**
  * type **required**

### ImageFileData
* ImageFileData `string`

### ImageFileType
* ImageFileType `string` (values: PNG)

### ImageLocation
* ImageLocation `object`: Contains an image that is uploaded to AWS IoT SiteWise and available at a URL.
  * id **required**
  * url **required**

### InternalFailureException


### Interval
* Interval `string`

### InvalidRequestException


### KmsKeyId
* KmsKeyId `string`

### LimitExceededException


### ListAccessPoliciesRequest
* ListAccessPoliciesRequest `object`

### ListAccessPoliciesResponse
* ListAccessPoliciesResponse `object`
  * accessPolicySummaries **required**
    * items [AccessPolicySummary](#accesspolicysummary)
  * nextToken

### ListAssetModelsRequest
* ListAssetModelsRequest `object`

### ListAssetModelsResponse
* ListAssetModelsResponse `object`
  * assetModelSummaries **required**
    * items [AssetModelSummary](#assetmodelsummary)
  * nextToken

### ListAssetRelationshipsRequest
* ListAssetRelationshipsRequest `object`

### ListAssetRelationshipsResponse
* ListAssetRelationshipsResponse `object`
  * assetRelationshipSummaries **required**
    * items [AssetRelationshipSummary](#assetrelationshipsummary)
  * nextToken

### ListAssetsFilter
* ListAssetsFilter `string` (values: ALL, TOP_LEVEL)

### ListAssetsRequest
* ListAssetsRequest `object`

### ListAssetsResponse
* ListAssetsResponse `object`
  * assetSummaries **required**
    * items [AssetSummary](#assetsummary)
  * nextToken

### ListAssociatedAssetsRequest
* ListAssociatedAssetsRequest `object`

### ListAssociatedAssetsResponse
* ListAssociatedAssetsResponse `object`
  * assetSummaries **required**
    * items [AssociatedAssetsSummary](#associatedassetssummary)
  * nextToken

### ListDashboardsRequest
* ListDashboardsRequest `object`

### ListDashboardsResponse
* ListDashboardsResponse `object`
  * dashboardSummaries **required**
    * items [DashboardSummary](#dashboardsummary)
  * nextToken

### ListGatewaysRequest
* ListGatewaysRequest `object`

### ListGatewaysResponse
* ListGatewaysResponse `object`
  * gatewaySummaries **required**
    * items [GatewaySummary](#gatewaysummary)
  * nextToken

### ListPortalsRequest
* ListPortalsRequest `object`

### ListPortalsResponse
* ListPortalsResponse `object`
  * nextToken
  * portalSummaries
    * items [PortalSummary](#portalsummary)

### ListProjectAssetsRequest
* ListProjectAssetsRequest `object`

### ListProjectAssetsResponse
* ListProjectAssetsResponse `object`
  * assetIds **required**
    * items [ID](#id)
  * nextToken

### ListProjectsRequest
* ListProjectsRequest `object`

### ListProjectsResponse
* ListProjectsResponse `object`
  * nextToken
  * projectSummaries **required**
    * items [ProjectSummary](#projectsummary)

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`
  * tags

### LoggingLevel
* LoggingLevel `string` (values: ERROR, INFO, OFF)

### LoggingOptions
* LoggingOptions `object`: Contains logging options.
  * level **required**

### Macro
* Macro `string`

### MaxResults
* MaxResults `integer`

### Measurement
* Measurement `object`: Contains an asset measurement property. This structure is empty. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html#measurements">Measurements</a> in the <i>AWS IoT SiteWise User Guide</i>.

### Metric
* Metric `object`: <p>Contains an asset metric property. With metrics, you can calculate aggregate functions, such as an average, maximum, or minimum, as specified through an expression. A metric maps several values to a single value (such as a sum).</p> <p>The maximum number of dependent/cascading variables used in any one metric calculation is 10. Therefore, a <i>root</i> metric can have up to 10 cascading metrics in its computational dependency tree. Additionally, a metric can only have a data type of <code>DOUBLE</code> and consume properties with data types of <code>INTEGER</code> or <code>DOUBLE</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html#metrics">Metrics</a> in the <i>AWS IoT SiteWise User Guide</i>.</p>
  * expression **required**
  * variables **required**
    * items [ExpressionVariable](#expressionvariable)
  * window **required**
    * tumbling
      * interval **required**

### MetricWindow
* MetricWindow `object`: Contains a time interval window used for data aggregate computations (for example, average, sum, count, and so on).
  * tumbling
    * interval **required**

### MonitorErrorCode
* MonitorErrorCode `string` (values: INTERNAL_FAILURE, VALIDATION_ERROR, LIMIT_EXCEEDED)

### MonitorErrorDetails
* MonitorErrorDetails `object`: Contains AWS IoT SiteWise Monitor error details.
  * code
  * message

### MonitorErrorMessage
* MonitorErrorMessage `string`

### Name
* Name `string`

### NextToken
* NextToken `string`

### OffsetInNanos
* OffsetInNanos `integer`

### Permission
* Permission `string` (values: ADMINISTRATOR, VIEWER)

### PortalClientId
* PortalClientId `string`

### PortalResource
* PortalResource `object`: Identifies an AWS IoT SiteWise Monitor portal.
  * id **required**

### PortalState
* PortalState `string` (values: CREATING, UPDATING, DELETING, ACTIVE, FAILED)

### PortalStatus
* PortalStatus `object`: Contains information about the current status of a portal.
  * error
    * code
    * message
  * state **required**

### PortalSummaries
* PortalSummaries `array`
  * items [PortalSummary](#portalsummary)

### PortalSummary
* PortalSummary `object`: Contains a portal summary.
  * creationDate
  * description
  * id **required**
  * lastUpdateDate
  * name **required**
  * roleArn
  * startUrl **required**
  * status **required** [PortalStatus](#portalstatus)

### ProjectResource
* ProjectResource `object`: Identifies a specific AWS IoT SiteWise Monitor project.
  * id **required**

### ProjectSummaries
* ProjectSummaries `array`
  * items [ProjectSummary](#projectsummary)

### ProjectSummary
* ProjectSummary `object`: Contains project summary information.
  * creationDate
  * description
  * id **required**
  * lastUpdateDate
  * name **required**

### Property
* Property `object`: Contains asset property information.
  * alias
  * dataType **required**
  * id **required**
  * name **required**
  * notification
    * state **required**
    * topic **required**
  * type
    * attribute
      * defaultValue
    * measurement
    * metric
      * expression **required**
      * variables **required**
        * items [ExpressionVariable](#expressionvariable)
      * window **required**
        * tumbling
          * interval **required**
    * transform
      * expression **required**
      * variables **required**
        * items [ExpressionVariable](#expressionvariable)
  * unit

### PropertyAlias
* PropertyAlias `string`

### PropertyDataType
* PropertyDataType `string` (values: STRING, INTEGER, DOUBLE, BOOLEAN, STRUCT)

### PropertyNotification
* PropertyNotification `object`: Contains asset property value notification information. When the notification state is enabled, AWS IoT SiteWise publishes property value updates to a unique MQTT topic. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/interact-with-other-services.html">Interacting with other services</a> in the <i>AWS IoT SiteWise User Guide</i>.
  * state **required**
  * topic **required**

### PropertyNotificationState
* PropertyNotificationState `string` (values: ENABLED, DISABLED)

### PropertyNotificationTopic
* PropertyNotificationTopic `string`

### PropertyType
* PropertyType `object`: Contains a property type, which can be one of <code>attribute</code>, <code>measurement</code>, <code>metric</code>, or <code>transform</code>.
  * attribute
    * defaultValue
  * measurement
  * metric
    * expression **required**
    * variables **required**
      * items [ExpressionVariable](#expressionvariable)
    * window **required**
      * tumbling
        * interval **required**
  * transform
    * expression **required**
    * variables **required**
      * items [ExpressionVariable](#expressionvariable)

### PropertyUnit
* PropertyUnit `string`

### PropertyValueBooleanValue
* PropertyValueBooleanValue `boolean`

### PropertyValueDoubleValue
* PropertyValueDoubleValue `number`

### PropertyValueIntegerValue
* PropertyValueIntegerValue `integer`

### PropertyValueStringValue
* PropertyValueStringValue `string`

### PutAssetPropertyValueEntries
* PutAssetPropertyValueEntries `array`
  * items [PutAssetPropertyValueEntry](#putassetpropertyvalueentry)

### PutAssetPropertyValueEntry
* PutAssetPropertyValueEntry `object`: Contains a list of value updates for an asset property in the list of asset entries consumed by the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchPutAssetPropertyValue.html">BatchPutAssetPropertyValue</a> API operation.
  * assetId
  * entryId **required**
  * propertyAlias
  * propertyId
  * propertyValues **required**
    * items [AssetPropertyValue](#assetpropertyvalue)

### PutDefaultEncryptionConfigurationRequest
* PutDefaultEncryptionConfigurationRequest `object`
  * encryptionType **required**
  * kmsKeyId

### PutDefaultEncryptionConfigurationResponse
* PutDefaultEncryptionConfigurationResponse `object`
  * configurationStatus **required**
    * error
      * code **required**
      * message **required**
    * state **required**
  * encryptionType **required**
  * kmsKeyArn

### PutLoggingOptionsRequest
* PutLoggingOptionsRequest `object`
  * loggingOptions **required**
    * level **required**

### PutLoggingOptionsResponse
* PutLoggingOptionsResponse `object`

### Qualities
* Qualities `array`
  * items [Quality](#quality)

### Quality
* Quality `string` (values: GOOD, BAD, UNCERTAIN)

### Resolution
* Resolution `string`

### Resource
* Resource `object`: Contains an AWS IoT SiteWise Monitor resource ID for a portal or project.
  * portal
    * id **required**
  * project
    * id **required**

### ResourceAlreadyExistsException


### ResourceNotFoundException


### ResourceType
* ResourceType `string` (values: PORTAL, PROJECT)

### SSOApplicationId
* SSOApplicationId `string`

### ServiceUnavailableException


### TagKey
* TagKey `string`

### TagKeyList
* TagKeyList `array`
  * items [TagKey](#tagkey)

### TagMap
* TagMap `object`

### TagResourceRequest
* TagResourceRequest `object`
  * tags **required**

### TagResourceResponse
* TagResourceResponse `object`

### TagValue
* TagValue `string`

### ThrottlingException


### TimeInNanos
* TimeInNanos `object`: Contains a timestamp with optional nanosecond granularity.
  * offsetInNanos
  * timeInSeconds **required**

### TimeInSeconds
* TimeInSeconds `integer`

### TimeOrdering
* TimeOrdering `string` (values: ASCENDING, DESCENDING)

### Timestamp
* Timestamp `string`

### Timestamps
* Timestamps `array`
  * items [TimeInNanos](#timeinnanos)

### TooManyTagsException


### Transform
* Transform `object`: <p>Contains an asset transform property. A transform is a one-to-one mapping of a property's data points from one form to another. For example, you can use a transform to convert a Celsius data stream to Fahrenheit by applying the transformation expression to each data point of the Celsius stream. A transform can only have a data type of <code>DOUBLE</code> and consume properties with data types of <code>INTEGER</code> or <code>DOUBLE</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html#transforms">Transforms</a> in the <i>AWS IoT SiteWise User Guide</i>.</p>
  * expression **required**
  * variables **required**
    * items [ExpressionVariable](#expressionvariable)

### TraversalDirection
* TraversalDirection `string` (values: PARENT, CHILD)

### TraversalType
* TraversalType `string` (values: PATH_TO_ROOT)

### TumblingWindow
* TumblingWindow `object`: Contains a tumbling window, which is a repeating fixed-sized, non-overlapping, and contiguous time interval. This window is used in metric and aggregation computations.
  * interval **required**

### UnauthorizedException


### UntagResourceRequest
* UntagResourceRequest `object`

### UntagResourceResponse
* UntagResourceResponse `object`

### UpdateAccessPolicyRequest
* UpdateAccessPolicyRequest `object`
  * accessPolicyIdentity **required**
    * group
      * id **required**
    * iamUser
      * arn **required**
    * user
      * id **required**
  * accessPolicyPermission **required**
  * accessPolicyResource **required**
    * portal
      * id **required**
    * project
      * id **required**
  * clientToken

### UpdateAccessPolicyResponse
* UpdateAccessPolicyResponse `object`

### UpdateAssetModelRequest
* UpdateAssetModelRequest `object`
  * assetModelCompositeModels
    * items [AssetModelCompositeModel](#assetmodelcompositemodel)
  * assetModelDescription
  * assetModelHierarchies
    * items [AssetModelHierarchy](#assetmodelhierarchy)
  * assetModelName **required**
  * assetModelProperties
    * items [AssetModelProperty](#assetmodelproperty)
  * clientToken

### UpdateAssetModelResponse
* UpdateAssetModelResponse `object`
  * assetModelStatus **required**
    * error
      * code **required**
      * message **required**
    * state **required**

### UpdateAssetPropertyRequest
* UpdateAssetPropertyRequest `object`
  * clientToken
  * propertyAlias
  * propertyNotificationState

### UpdateAssetRequest
* UpdateAssetRequest `object`
  * assetName **required**
  * clientToken

### UpdateAssetResponse
* UpdateAssetResponse `object`
  * assetStatus **required**
    * error
      * code **required**
      * message **required**
    * state **required**

### UpdateDashboardRequest
* UpdateDashboardRequest `object`
  * clientToken
  * dashboardDefinition **required**
  * dashboardDescription
  * dashboardName **required**

### UpdateDashboardResponse
* UpdateDashboardResponse `object`

### UpdateGatewayCapabilityConfigurationRequest
* UpdateGatewayCapabilityConfigurationRequest `object`
  * capabilityConfiguration **required**
  * capabilityNamespace **required**

### UpdateGatewayCapabilityConfigurationResponse
* UpdateGatewayCapabilityConfigurationResponse `object`
  * capabilityNamespace **required**
  * capabilitySyncStatus **required**

### UpdateGatewayRequest
* UpdateGatewayRequest `object`
  * gatewayName **required**

### UpdatePortalRequest
* UpdatePortalRequest `object`
  * clientToken
  * portalContactEmail **required**
  * portalDescription
  * portalLogoImage [Image](#image)
  * portalName **required**
  * roleArn **required**

### UpdatePortalResponse
* UpdatePortalResponse `object`
  * portalStatus **required**
    * error
      * code
      * message
    * state **required**

### UpdateProjectRequest
* UpdateProjectRequest `object`
  * clientToken
  * projectDescription
  * projectName **required**

### UpdateProjectResponse
* UpdateProjectResponse `object`

### Url
* Url `string`

### UserIdentity
* UserIdentity `object`: Contains information for a user identity in an access policy.
  * id **required**

### VariableName
* VariableName `string`

### VariableValue
* VariableValue `object`: Identifies a property value used in an expression.
  * hierarchyId
  * propertyId **required**

### Variant
* Variant `object`: Contains an asset property value (of a single type only).
  * booleanValue
  * doubleValue
  * integerValue
  * stringValue


