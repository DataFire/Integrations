# @datafire/azure_web_resourceprovider

Client library for  API Client

## Installation and Usage
```bash
npm install --save @datafire/azure_web_resourceprovider
```
```js
let azure_web_resourceprovider = require('@datafire/azure_web_resourceprovider').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_web_resourceprovider.GetPublishingUser({
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description



## Actions

### GetPublishingUser
Gets publishing user


```js
azure_web_resourceprovider.GetPublishingUser({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API Version

#### Output
* output `object`: User crendentials used for publishing activity.
  * properties `object`: User resource specific properties
    * name `string`: Username
    * publishingPassword `string`: Password used for publishing.
    * publishingPasswordHash `string`: Password hash used for publishing.
    * publishingPasswordHashSalt `string`: Password hash salt used for publishing.
    * publishingUserName **required** `string`: Username used for publishing.
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### UpdatePublishingUser
Updates publishing user


```js
azure_web_resourceprovider.UpdatePublishingUser({
  "userDetails": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * userDetails **required** `object`: User crendentials used for publishing activity.
    * properties `object`: User resource specific properties
      * name `string`: Username
      * publishingPassword `string`: Password used for publishing.
      * publishingPasswordHash `string`: Password hash used for publishing.
      * publishingPasswordHashSalt `string`: Password hash salt used for publishing.
      * publishingUserName **required** `string`: Username used for publishing.
    * id `string`: Resource Id.
    * kind `string`: Kind of resource.
    * name `string`: Resource Name.
    * type `string`: Resource type.
  * api-version **required** `string`: API Version

#### Output
* output `object`: User crendentials used for publishing activity.
  * properties `object`: User resource specific properties
    * name `string`: Username
    * publishingPassword `string`: Password used for publishing.
    * publishingPasswordHash `string`: Password hash used for publishing.
    * publishingPasswordHashSalt `string`: Password hash salt used for publishing.
    * publishingUserName **required** `string`: Username used for publishing.
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### ListSourceControls
Gets the source controls available for Azure websites.


```js
azure_web_resourceprovider.ListSourceControls({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API Version

#### Output
* output [SourceControlCollection](#sourcecontrolcollection)

### GetSourceControl
Gets source control token


```js
azure_web_resourceprovider.GetSourceControl({
  "sourceControlType": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * sourceControlType **required** `string`: Type of source control
  * api-version **required** `string`: API Version

#### Output
* output [SourceControl](#sourcecontrol)

### UpdateSourceControl
Updates source control token


```js
azure_web_resourceprovider.UpdateSourceControl({
  "sourceControlType": "",
  "requestMessage": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * sourceControlType **required** `string`: Type of source control
  * requestMessage **required** [SourceControl](#sourcecontrol)
  * api-version **required** `string`: API Version

#### Output
* output [SourceControl](#sourcecontrol)

### BillingMeters_List
Gets a list of meters for a given location.


```js
azure_web_resourceprovider.BillingMeters_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * billingLocation `string`: Azure Location of billable resource
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [BillingMeterCollection](#billingmetercollection)

### CheckNameAvailability
Check if a resource name is available.


```js
azure_web_resourceprovider.CheckNameAvailability({
  "request": {
    "name": "",
    "type": ""
  },
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * request **required** [ResourceNameAvailabilityRequest](#resourcenameavailabilityrequest)
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [ResourceNameAvailability](#resourcenameavailability)

### GetSubscriptionDeploymentLocations
Gets list of available geo regions plus ministamps


```js
azure_web_resourceprovider.GetSubscriptionDeploymentLocations({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [DeploymentLocations](#deploymentlocations)

### ListGeoRegions
Get a list of available geographical regions.


```js
azure_web_resourceprovider.ListGeoRegions({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * sku `string` (values: Free, Shared, Basic, Standard, Premium, PremiumV2, Dynamic, Isolated): Name of SKU used to filter the regions.
  * linuxWorkersEnabled `boolean`: Specify <code>true</code> if you want to filter to only regions that support Linux workers.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [GeoRegionCollection](#georegioncollection)

### ListSiteIdentifiersAssignedToHostName
List all apps that are assigned to a hostname.


```js
azure_web_resourceprovider.ListSiteIdentifiersAssignedToHostName({
  "nameIdentifier": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * nameIdentifier **required** `object`: Identifies an object.
    * name `string`: Name of the object.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `object`: Collection of identifiers.
  * nextLink `string`: Link to next page of resources.
  * value **required** `array`: Collection of resources.
    * items `object`: A domain specific resource identifier.
      * properties `object`: Identifier resource specific properties
        * id `string`: String representation of the identity.
      * id `string`: Resource Id.
      * kind `string`: Kind of resource.
      * name `string`: Resource Name.
      * type `string`: Resource type.

### ListPremierAddOnOffers
List all premier add-on offers.


```js
azure_web_resourceprovider.ListPremierAddOnOffers({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [PremierAddOnOfferCollection](#premieraddonoffercollection)

### ListSkus
List all SKUs.


```js
azure_web_resourceprovider.ListSkus({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [SkuInfos](#skuinfos)

### VerifyHostingEnvironmentVnet
Verifies if this VNET is compatible with an App Service Environment by analyzing the Network Security Group rules.


```js
azure_web_resourceprovider.VerifyHostingEnvironmentVnet({
  "parameters": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * parameters **required** [VnetParameters](#vnetparameters)
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [VnetValidationFailureDetails](#vnetvalidationfailuredetails)

### Move
Move resources between resource groups.


```js
azure_web_resourceprovider.Move({
  "resourceGroupName": "",
  "moveResourceEnvelope": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * moveResourceEnvelope **required** [CsmMoveResourceEnvelope](#csmmoveresourceenvelope)
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### Validate
Validate if a resource can be created.


```js
azure_web_resourceprovider.Validate({
  "resourceGroupName": "",
  "validateRequest": {
    "name": "",
    "type": "",
    "location": "",
    "properties": {}
  },
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * validateRequest **required** [ValidateRequest](#validaterequest)
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [ValidateResponse](#validateresponse)

### ValidateMove
Validate whether a resource can be moved.


```js
azure_web_resourceprovider.ValidateMove({
  "resourceGroupName": "",
  "moveResourceEnvelope": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * moveResourceEnvelope **required** [CsmMoveResourceEnvelope](#csmmoveresourceenvelope)
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*



## Definitions

### BillingMeter
* BillingMeter `object`: App Service billing entity that contains information about meter which the Azure billing system utilizes to charge users for services.
  * properties `object`: BillingMeter resource specific properties
    * billingLocation `string`: Azure Location of billable resource
    * friendlyName `string`: Friendly name of the meter
    * meterId `string`: Meter GUID onboarded in Commerce
    * resourceType `string`: App Service resource type meter used for
    * shortName `string`: Short Name from App Service Azure pricing Page
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### BillingMeterCollection
* BillingMeterCollection `object`: Collection of Billing Meters
  * nextLink `string`: Link to next page of resources.
  * value **required** `array`: Collection of Billing Meters.
    * items [BillingMeter](#billingmeter)

### CsmMoveResourceEnvelope
* CsmMoveResourceEnvelope `object`: Object with a list of the resources that need to be moved and the resource group they should be moved to.
  * resources `array`
    * items `string`
  * targetResourceGroup `string`

### DeploymentLocations
* DeploymentLocations `object`: List of available locations (regions or App Service Environments) for
  * hostingEnvironmentDeploymentInfos `array`: Available App Service Environments with basic information.
    * items [HostingEnvironmentDeploymentInfo](#hostingenvironmentdeploymentinfo)
  * hostingEnvironments `array`: Available App Service Environments with full descriptions of the environments.
    * items `object`: Description of an App Service Environment.
      * allowedMultiSizes `string`: List of comma separated strings describing which VM sizes are allowed for front-ends.
      * allowedWorkerSizes `string`: List of comma separated strings describing which VM sizes are allowed for workers.
      * apiManagementAccountId `string`: API Management Account associated with the App Service Environment.
      * clusterSettings `array`: Custom settings for changing the behavior of the App Service Environment.
        * items `object`: Name value pair.
          * name `string`: Pair name.
          * value `string`: Pair value.
      * databaseEdition `string`: Edition of the metadata database for the App Service Environment, e.g. "Standard".
      * databaseServiceObjective `string`: Service objective of the metadata database for the App Service Environment, e.g. "S0".
      * defaultFrontEndScaleFactor `integer`: Default Scale Factor for FrontEnds.
      * dnsSuffix `string`: DNS suffix of the App Service Environment.
      * dynamicCacheEnabled `boolean`: True/false indicating whether the App Service Environment is suspended. The environment can be suspended e.g. when the management endpoint is no longer available
      * environmentCapacities `array`: Current total, used, and available worker capacities.
        * items `object`: Stamp capacity information.
          * availableCapacity `integer`: Available capacity (# of machines, bytes of storage etc...).
          * computeMode `string` (values: Shared, Dedicated, Dynamic): Shared/dedicated workers.
          * excludeFromCapacityAllocation `boolean`: If <code>true</code>, it includes basic apps.
          * isApplicableForAllComputeModes `boolean`: <code>true</code> if capacity is applicable for all apps; otherwise, <code>false</code>.
          * name `string`: Name of the stamp.
          * siteMode `string`: Shared or Dedicated.
          * totalCapacity `integer`: Total capacity (# of machines, bytes of storage etc...).
          * unit `string`: Name of the unit.
          * workerSize `string` (values: Default, Small, Medium, Large, D1, D2, D3): Size of the machines.
          * workerSizeId `integer`: Size ID of machines: 
      * environmentIsHealthy `boolean`: True/false indicating whether the App Service Environment is healthy.
      * environmentStatus `string`: Detailed message about with results of the last check of the App Service Environment.
      * frontEndScaleFactor `integer`: Scale factor for front-ends.
      * internalLoadBalancingMode `string` (values: None, Web, Publishing): Specifies which endpoints to serve internally in the Virtual Network for the App Service Environment.
      * ipsslAddressCount `integer`: Number of IP SSL addresses reserved for the App Service Environment.
      * lastAction `string`: Last deployment action on the App Service Environment.
      * lastActionResult `string`: Result of the last deployment action on the App Service Environment.
      * location **required** `string`: Location of the App Service Environment, e.g. "West US".
      * maximumNumberOfMachines `integer`: Maximum number of VMs in the App Service Environment.
      * multiRoleCount `integer`: Number of front-end instances.
      * multiSize `string`: Front-end VM size, e.g. "Medium", "Large".
      * name **required** `string`: Name of the App Service Environment.
      * networkAccessControlList `array`: Access control list for controlling traffic to the App Service Environment.
        * items `object`: Network access control entry.
          * action `string` (values: Permit, Deny): Action object.
          * description `string`: Description of network access control entry.
          * order `integer`: Order of precedence.
          * remoteSubnet `string`: Remote subnet.
      * provisioningState `string` (values: Succeeded, Failed, Canceled, InProgress, Deleting): Provisioning state of the App Service Environment.
      * resourceGroup `string`: Resource group of the App Service Environment.
      * status `string` (values: Preparing, Ready, Scaling, Deleting): Current status of the App Service Environment.
      * subscriptionId `string`: Subscription of the App Service Environment.
      * suspended `boolean`: <code>true</code> if the App Service Environment is suspended; otherwise, <code>false</code>. The environment can be suspended, e.g. when the management endpoint is no longer available
      * upgradeDomains `integer`: Number of upgrade domains of the App Service Environment.
      * userWhitelistedIpRanges `array`: User added ip ranges to whitelist on ASE db
        * items `string`
      * vipMappings `array`: Description of IP SSL mapping for the App Service Environment.
        * items `object`: Virtual IP mapping.
          * inUse `boolean`: Is virtual IP mapping in use.
          * internalHttpPort `integer`: Internal HTTP port.
          * internalHttpsPort `integer`: Internal HTTPS port.
          * virtualIP `string`: Virtual IP address.
      * virtualNetwork **required** `object`: Specification for using a Virtual Network.
        * id `string`: Resource id of the Virtual Network.
        * name `string`: Name of the Virtual Network (read-only).
        * subnet `string`: Subnet within the Virtual Network.
        * type `string`: Resource type of the Virtual Network (read-only).
      * vnetName `string`: Name of the Virtual Network for the App Service Environment.
      * vnetResourceGroupName `string`: Resource group of the Virtual Network.
      * vnetSubnetName `string`: Subnet of the Virtual Network.
      * workerPools **required** `array`: Description of worker pools with worker size IDs, VM sizes, and number of workers in each pool.
        * items `object`: Worker pool of an App Service Environment.
          * computeMode `string` (values: Shared, Dedicated, Dynamic): Shared or dedicated app hosting.
          * instanceNames `array`: Names of all instances in the worker pool (read only).
            * items `string`
          * workerCount `integer`: Number of instances in the worker pool.
          * workerSize `string`: VM size of the worker pool instances.
          * workerSizeId `integer`: Worker size ID for referencing this worker pool.
  * locations `array`: Available regions.
    * items [GeoRegion](#georegion)

### GeoRegion
* GeoRegion `object`: Geographical region.
  * properties `object`: GeoRegion resource specific properties
    * description `string`: Region description.
    * displayName `string`: Display name for region.
    * name `string`: Region name.
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### GeoRegionCollection
* GeoRegionCollection `object`: Collection of geographical regions.
  * nextLink `string`: Link to next page of resources.
  * value **required** `array`: Collection of resources.
    * items [GeoRegion](#georegion)

### GlobalCsmSkuDescription
* GlobalCsmSkuDescription `object`: A Global SKU Description.
  * capabilities `array`: Capabilities of the SKU, e.g., is traffic manager enabled?
    * items `object`: Describes the capabilities/features allowed for a specific SKU.
      * name `string`: Name of the SKU capability.
      * reason `string`: Reason of the SKU capability.
      * value `string`: Value of the SKU capability.
  * capacity `object`: Description of the App Service plan scale options.
    * default `integer`: Default number of workers for this App Service plan SKU.
    * maximum `integer`: Maximum number of workers for this App Service plan SKU.
    * minimum `integer`: Minimum number of workers for this App Service plan SKU.
    * scaleType `string`: Available scale configurations for an App Service plan.
  * family `string`: Family code of the resource SKU.
  * locations `array`: Locations of the SKU.
    * items `string`
  * name `string`: Name of the resource SKU.
  * size `string`: Size specifier of the resource SKU.
  * tier `string`: Service Tier of the resource SKU.

### HostingEnvironmentDeploymentInfo
* HostingEnvironmentDeploymentInfo `object`: Information needed to create resources on an App Service Environment.
  * location `string`: Location of the App Service Environment.
  * name `string`: Name of the App Service Environment.

### PremierAddOnOffer
* PremierAddOnOffer `object`: Premier add-on offer.
  * properties `object`: PremierAddOnOffer resource specific properties
    * legalTermsUrl `string`: Legal terms URL.
    * marketplaceOffer `string`: Marketplace offer.
    * marketplacePublisher `string`: Marketplace publisher.
    * name `string`: Premier add on offer Name.
    * privacyPolicyUrl `string`: Privacy policy URL.
    * product `string`: Premier add on offer Product.
    * promoCodeRequired `boolean`: <code>true</code> if promotion code is required; otherwise, <code>false</code>.
    * quota `integer`: Premier add on offer Quota.
    * sku `string`: Premier add on SKU.
    * vendor `string`: Premier add on offer Vendor.
    * webHostingPlanRestrictions `string` (values: None, Free, Shared, Basic, Standard, Premium): App Service plans this offer is restricted to.
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### PremierAddOnOfferCollection
* PremierAddOnOfferCollection `object`: Collection of premier add-on offers.
  * nextLink `string`: Link to next page of resources.
  * value **required** `array`: Collection of resources.
    * items [PremierAddOnOffer](#premieraddonoffer)

### ResourceNameAvailability
* ResourceNameAvailability `object`: Information regarding availbility of a resource name.
  * message `string`: If reason == invalid, provide the user with the reason why the given name is invalid, and provide the resource naming requirements so that the user can select a valid name. If reason == AlreadyExists, explain that resource name is already in use, and direct them to select a different name.
  * nameAvailable `boolean`: <code>true</code> indicates name is valid and available. <code>false</code> indicates the name is invalid, unavailable, or both.
  * reason `string` (values: Invalid, AlreadyExists): <code>Invalid</code> indicates the name provided does not match Azure App Service naming requirements. <code>AlreadyExists</code> indicates that the name is already in use and is therefore unavailable.

### ResourceNameAvailabilityRequest
* ResourceNameAvailabilityRequest `object`: Resource name availability request content.
  * isFqdn `boolean`: Is fully qualified domain name.
  * name **required** `string`: Resource name to verify.
  * type **required** `string` (values: Site, Slot, HostingEnvironment, PublishingUser, Microsoft.Web/sites, Microsoft.Web/sites/slots, Microsoft.Web/hostingEnvironments, Microsoft.Web/publishingUsers): Resource type used for verification.

### SkuInfos
* SkuInfos `object`: Collection of SKU information.
  * resourceType `string`: Resource type that this SKU applies to.
  * skus `array`: List of SKUs the subscription is able to use.
    * items [GlobalCsmSkuDescription](#globalcsmskudescription)

### SourceControl
* SourceControl `object`: The source control OAuth token.
  * properties `object`: SourceControl resource specific properties
    * expirationTime `string`: OAuth token expiration.
    * name `string`: Name or source control type.
    * refreshToken `string`: OAuth refresh token.
    * token `string`: OAuth access token.
    * tokenSecret `string`: OAuth access token secret.
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### SourceControlCollection
* SourceControlCollection `object`: Collection of source controls.
  * nextLink `string`: Link to next page of resources.
  * value **required** `array`: Collection of resources.
    * items [SourceControl](#sourcecontrol)

### ValidateProperties
* ValidateProperties `object`: App properties used for validation.
  * capacity `integer`: Target capacity of the App Service plan (number of VM's).
  * hostingEnvironment `string`: Name of App Service Environment where app or App Service plan should be created.
  * isSpot `boolean`: <code>true</code> if App Service plan is for Spot instances; otherwise, <code>false</code>.
  * needLinuxWorkers `boolean`: <code>true</code> if App Service plan is for Linux workers; otherwise, <code>false</code>.
  * serverFarmId `string`: ARM resource ID of an App Service plan that would host the app.
  * skuName `string`: Name of the target SKU for the App Service plan.

### ValidateRequest
* ValidateRequest `object`: Resource validation request content.
  * location **required** `string`: Expected location of the resource.
  * name **required** `string`: Resource name to verify.
  * properties **required** [ValidateProperties](#validateproperties)
  * type **required** `string` (values: ServerFarm, Site): Resource type used for verification.

### ValidateResponse
* ValidateResponse `object`: Describes the result of resource validation.
  * error [ValidateResponseError](#validateresponseerror)
  * status `string`: Result of validation.

### ValidateResponseError
* ValidateResponseError `object`: Error details for when validation fails.
  * code `string`: Validation error code.
  * message `string`: Validation error message.

### VnetParameters
* VnetParameters `object`: The required set of inputs to validate a VNET
  * properties `object`: VnetParameters resource specific properties
    * vnetName `string`: The name of the VNET to be validated
    * vnetResourceGroup `string`: The Resource Group of the VNET to be validated
    * vnetSubnetName `string`: The subnet name to be validated
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### VnetValidationFailureDetails
* VnetValidationFailureDetails `object`: A class that describes the reason for a validation failure.
  * properties `object`: VnetValidationFailureDetails resource specific properties
    * failed `boolean`: A flag describing whether or not validation failed.
    * failedTests `array`: A list of tests that failed in the validation.
      * items [VnetValidationTestFailure](#vnetvalidationtestfailure)
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### VnetValidationTestFailure
* VnetValidationTestFailure `object`: A class that describes a test that failed during NSG and UDR validation.
  * properties `object`: VnetValidationTestFailure resource specific properties
    * details `string`: The details of what caused the failure, e.g. the blocking rule name, etc.
    * testName `string`: The name of the test that failed.
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.


