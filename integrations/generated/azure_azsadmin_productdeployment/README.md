# @datafire/azure_azsadmin_productdeployment

Client library for DeploymentAdminClient

## Installation and Usage
```bash
npm install --save @datafire/azure_azsadmin_productdeployment
```
```js
let azure_azsadmin_productdeployment = require('@datafire/azure_azsadmin_productdeployment').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

.then(data => {
  console.log(data);
});
```

## Description

Deployment Admin Client.

## Actions

### ProductDeployments_List
Invokes bootstrap action on the product deployment


```js
azure_azsadmin_productdeployment.ProductDeployments_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API Version.

#### Output
* output [ProductDeploymentsList](#productdeploymentslist)

### ProductDeployments_Get
Invokes bootstrap action on the product deployment


```js
azure_azsadmin_productdeployment.ProductDeployments_Get({
  "subscriptionId": "",
  "api-version": "",
  "productId": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API Version.
  * productId **required** `string`: The product identifier.

#### Output
* output [ProductDeploymentResourceEntity](#productdeploymentresourceentity)

### ProductDeployments_BootStrap
Invokes bootstrap action on the product deployment


```js
azure_azsadmin_productdeployment.ProductDeployments_BootStrap({
  "subscriptionId": "",
  "productId": "",
  "bootstrapActionParameter": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * productId **required** `string`: The product identifier.
  * bootstrapActionParameter **required** `object`: Parameters for bootstrap action
    * version `string`: Generic Version object
  * api-version **required** `string`: Client API Version.

#### Output
*Output schema unknown*

### ProductDeployments_Deploy
Invokes deploy action on the product


```js
azure_azsadmin_productdeployment.ProductDeployments_Deploy({
  "subscriptionId": "",
  "productId": "",
  "deployActionParameter": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * productId **required** `string`: The product identifier.
  * deployActionParameter **required** `object`: Parameters for deploy action
    * parameters `string`: Deployment parameters, value in JToken
    * version `string`: Generic Version object
  * api-version **required** `string`: Client API Version.

#### Output
*Output schema unknown*

### ProductDeployments_Lock
locks the product subscription


```js
azure_azsadmin_productdeployment.ProductDeployments_Lock({
  "subscriptionId": "",
  "productId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * productId **required** `string`: The product identifier.
  * api-version **required** `string`: Client API Version.

#### Output
*Output schema unknown*

### ProductDeployments_Remove
Invokes remove action on the product deployment


```js
azure_azsadmin_productdeployment.ProductDeployments_Remove({
  "subscriptionId": "",
  "productId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * productId **required** `string`: The product identifier.
  * api-version **required** `string`: Client API Version.

#### Output
*Output schema unknown*

### ProductDeployments_RotateSecrets
Invokes rotate secrets action on the product deployment


```js
azure_azsadmin_productdeployment.ProductDeployments_RotateSecrets({
  "subscriptionId": "",
  "productId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * productId **required** `string`: The product identifier.
  * api-version **required** `string`: Client API Version.

#### Output
*Output schema unknown*

### ProductDeployments_Unlock
Unlocks the product subscription


```js
azure_azsadmin_productdeployment.ProductDeployments_Unlock({
  "subscriptionId": "",
  "productId": "",
  "unlockActionParameter": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * productId **required** `string`: The product identifier.
  * unlockActionParameter **required** `object`: Parameters for bootstrap action
    * duration `string`: Duration in TimeSpan format(Define which ISO format)
  * api-version **required** `string`: Client API Version.

#### Output
*Output schema unknown*



## Definitions

### BootStrapActionParameters
* BootStrapActionParameters `object`: Parameters for bootstrap action
  * version `string`: Generic Version object

### DeployActionParameters
* DeployActionParameters `object`: Parameters for deploy action
  * parameters `string`: Deployment parameters, value in JToken
  * version `string`: Generic Version object

### DeploymentInfo
* DeploymentInfo `object`: Resource provider deployment information
  * actionPlanInstanceResourceId `string`: The identifier of the latest action plan instance resource.
  * eTag `string`: entity tag
  * parameters `string`: The latest deployment parameters as JToken
  * version `string`: The product version

### DeploymentStatus
* DeploymentStatus `string` (values: None, Bootstrapping, BootstrapSucceeded, BootstrapFailed, Deploying, DeploymentSucceeded, DeploymentFailed, Updating, UpdateSucceeded, UpdateFailed, Removing, RemoveFailed, SecretRotationInProgress, SecretRotationSucceeded, SecretRotationFailed, Migrated): Status of an operation.

### ExtendedErrorInfo


### ExternalAccessInfo
* ExternalAccessInfo `object`: Resource provider deployment information
  * expirationTime `string`: The deployment start time
  * principalId `string`: The object identifier of the user, group or service principal that have access to resource provider subscription.

### ProductDeploymentResourceEntity
* ProductDeploymentResourceEntity `object`: Product deployment entity
  * eTag `string`: entity tag
  * properties [ProductDeploymentsProperties](#productdeploymentsproperties)
  * id `string`: ID of the resource.
  * location `string`: Location of the resource.
  * name `string`: Name of the resource.
  * type `string`: Type of Resource.

### ProductDeploymentsInternalState
* ProductDeploymentsInternalState `object`: Resource type internal state
  * externalAccessRoleAssignmentId `string`: The current external access role assignment identifier
  * intermediateVaultId `string`: The intermediate vault resource identifier
  * intermediateVaultUri `string`: The intermediate vault Uri.
  * jobId `string`: The latest deployment job identifier

### ProductDeploymentsList
* ProductDeploymentsList `object`: List of Product Deployments.
  * nextLink `string`: URI to the next page.
  * value `array`: List of Product Deployments.
    * items [ProductDeploymentResourceEntity](#productdeploymentresourceentity)

### ProductDeploymentsProperties
* ProductDeploymentsProperties `object`: Product deployment resource properties
  * deployment [DeploymentInfo](#deploymentinfo)
  * error `object`: Error information
    * code `string`: Error Code
    * details [ExtendedErrorInfo](#extendederrorinfo)
    * message `string`: Error Message
  * externalAccess [ExternalAccessInfo](#externalaccessinfo)
  * internalState [ProductDeploymentsInternalState](#productdeploymentsinternalstate)
  * lastSuccessfulDeployment [DeploymentInfo](#deploymentinfo)
  * productId `string`: The product identifier
  * provisioningState `string`: The provisioning state
  * secretRotation [SecretRotationInfo](#secretrotationinfo)
  * status [DeploymentStatus](#deploymentstatus)
  * subscriptionId `string`: The product subscription identifier

### SecretRotationInfo
* SecretRotationInfo `object`: Resource provider deployment information
  * secretRotationPlanInstanceResourceId `string`: The identifier of the latest secret rotation plan instance resource.

### UnlockActionParameters
* UnlockActionParameters `object`: Parameters for bootstrap action
  * duration `string`: Duration in TimeSpan format(Define which ISO format)


