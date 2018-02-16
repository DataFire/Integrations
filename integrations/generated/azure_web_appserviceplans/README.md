# @datafire/azure_web_appserviceplans

Client library for AppServicePlans API Client

## Installation and Usage
```bash
npm install --save @datafire/azure_web_appserviceplans
```
```js
let azure_web_appserviceplans = require('@datafire/azure_web_appserviceplans').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_web_appserviceplans.AppServicePlans_List({
  "subscriptionId": "",
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description



## Actions

### AppServicePlans_List
Get all App Service plans for a subcription.


```js
azure_web_appserviceplans.AppServicePlans_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * detailed `boolean`: Specify <code>true</code> to return all App Service plan properties. The default is <code>false</code>, which returns a subset of the properties.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `object`: Collection of App Service plans.
  * nextLink `string`: Link to next page of resources.
  * value **required** `array`: Collection of resources.
    * items `object`: App Service plan.
      * properties `object`: AppServicePlan resource specific properties
        * adminSiteName `string`: App Service plan administration site.
        * geoRegion `string`: Geographical location for the App Service plan.
        * hostingEnvironmentProfile `object`: Specification for an App Service Environment to use for this resource.
          * id `string`: Resource ID of the App Service Environment.
          * name `string`: Name of the App Service Environment.
          * type `string`: Resource type of the App Service Environment.
        * isSpot `boolean`: If <code>true</code>, this App Service Plan owns spot instances.
        * maximumNumberOfWorkers `integer`: Maximum number of instances that can be assigned to this App Service plan.
        * name **required** `string`: Name for the App Service plan.
        * numberOfSites `integer`: Number of apps assigned to this App Service plan.
        * perSiteScaling `boolean`: If <code>true</code>, apps assigned to this App Service plan can be scaled independently.
        * provisioningState `string` (values: Succeeded, Failed, Canceled, InProgress, Deleting): Provisioning state of the App Service Environment.
        * reserved `boolean`: If Linux app service plan <code>true</code>, <code>false</code> otherwise.
        * resourceGroup `string`: Resource group of the App Service plan.
        * spotExpirationTime `string`: The time when the server farm expires. Valid only if it is a spot server farm.
        * status `string` (values: Ready, Pending, Creating): App Service plan status.
        * subscription `string`: App Service plan subscription.
        * targetWorkerCount `integer`: Scaling worker count.
        * targetWorkerSizeId `integer`: Scaling worker size ID.
        * workerTierName `string`: Target worker tier assigned to the App Service plan.
      * sku `object`: Description of a SKU for a scalable resource.
        * capabilities `array`: Capabilities of the SKU, e.g., is traffic manager enabled?
          * items `object`: Describes the capabilities/features allowed for a specific SKU.
            * name `string`: Name of the SKU capability.
            * reason `string`: Reason of the SKU capability.
            * value `string`: Value of the SKU capability.
        * capacity `integer`: Current number of instances assigned to the resource.
        * family `string`: Family code of the resource SKU.
        * locations `array`: Locations of the SKU.
          * items `string`
        * name `string`: Name of the resource SKU.
        * size `string`: Size specifier of the resource SKU.
        * skuCapacity `object`: Description of the App Service plan scale options.
          * default `integer`: Default number of workers for this App Service plan SKU.
          * maximum `integer`: Maximum number of workers for this App Service plan SKU.
          * minimum `integer`: Minimum number of workers for this App Service plan SKU.
          * scaleType `string`: Available scale configurations for an App Service plan.
        * tier `string`: Service tier of the resource SKU.
      * id `string`: Resource Id.
      * kind `string`: Kind of resource.
      * location **required** `string`: Resource Location.
      * name `string`: Resource Name.
      * tags `object`: Resource tags.
      * type `string`: Resource type.

### AppServicePlans_ListByResourceGroup
Get all App Service plans in a resource group.


```js
azure_web_appserviceplans.AppServicePlans_ListByResourceGroup({
  "resourceGroupName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `object`: Collection of App Service plans.
  * nextLink `string`: Link to next page of resources.
  * value **required** `array`: Collection of resources.
    * items `object`: App Service plan.
      * properties `object`: AppServicePlan resource specific properties
        * adminSiteName `string`: App Service plan administration site.
        * geoRegion `string`: Geographical location for the App Service plan.
        * hostingEnvironmentProfile `object`: Specification for an App Service Environment to use for this resource.
          * id `string`: Resource ID of the App Service Environment.
          * name `string`: Name of the App Service Environment.
          * type `string`: Resource type of the App Service Environment.
        * isSpot `boolean`: If <code>true</code>, this App Service Plan owns spot instances.
        * maximumNumberOfWorkers `integer`: Maximum number of instances that can be assigned to this App Service plan.
        * name **required** `string`: Name for the App Service plan.
        * numberOfSites `integer`: Number of apps assigned to this App Service plan.
        * perSiteScaling `boolean`: If <code>true</code>, apps assigned to this App Service plan can be scaled independently.
        * provisioningState `string` (values: Succeeded, Failed, Canceled, InProgress, Deleting): Provisioning state of the App Service Environment.
        * reserved `boolean`: If Linux app service plan <code>true</code>, <code>false</code> otherwise.
        * resourceGroup `string`: Resource group of the App Service plan.
        * spotExpirationTime `string`: The time when the server farm expires. Valid only if it is a spot server farm.
        * status `string` (values: Ready, Pending, Creating): App Service plan status.
        * subscription `string`: App Service plan subscription.
        * targetWorkerCount `integer`: Scaling worker count.
        * targetWorkerSizeId `integer`: Scaling worker size ID.
        * workerTierName `string`: Target worker tier assigned to the App Service plan.
      * sku `object`: Description of a SKU for a scalable resource.
        * capabilities `array`: Capabilities of the SKU, e.g., is traffic manager enabled?
          * items `object`: Describes the capabilities/features allowed for a specific SKU.
            * name `string`: Name of the SKU capability.
            * reason `string`: Reason of the SKU capability.
            * value `string`: Value of the SKU capability.
        * capacity `integer`: Current number of instances assigned to the resource.
        * family `string`: Family code of the resource SKU.
        * locations `array`: Locations of the SKU.
          * items `string`
        * name `string`: Name of the resource SKU.
        * size `string`: Size specifier of the resource SKU.
        * skuCapacity `object`: Description of the App Service plan scale options.
          * default `integer`: Default number of workers for this App Service plan SKU.
          * maximum `integer`: Maximum number of workers for this App Service plan SKU.
          * minimum `integer`: Minimum number of workers for this App Service plan SKU.
          * scaleType `string`: Available scale configurations for an App Service plan.
        * tier `string`: Service tier of the resource SKU.
      * id `string`: Resource Id.
      * kind `string`: Kind of resource.
      * location **required** `string`: Resource Location.
      * name `string`: Resource Name.
      * tags `object`: Resource tags.
      * type `string`: Resource type.

### AppServicePlans_Delete
Delete an App Service plan.


```js
azure_web_appserviceplans.AppServicePlans_Delete({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the App Service plan.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### AppServicePlans_Get
Get an App Service plan.


```js
azure_web_appserviceplans.AppServicePlans_Get({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the App Service plan.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `object`: App Service plan.
  * properties `object`: AppServicePlan resource specific properties
    * adminSiteName `string`: App Service plan administration site.
    * geoRegion `string`: Geographical location for the App Service plan.
    * hostingEnvironmentProfile `object`: Specification for an App Service Environment to use for this resource.
      * id `string`: Resource ID of the App Service Environment.
      * name `string`: Name of the App Service Environment.
      * type `string`: Resource type of the App Service Environment.
    * isSpot `boolean`: If <code>true</code>, this App Service Plan owns spot instances.
    * maximumNumberOfWorkers `integer`: Maximum number of instances that can be assigned to this App Service plan.
    * name **required** `string`: Name for the App Service plan.
    * numberOfSites `integer`: Number of apps assigned to this App Service plan.
    * perSiteScaling `boolean`: If <code>true</code>, apps assigned to this App Service plan can be scaled independently.
    * provisioningState `string` (values: Succeeded, Failed, Canceled, InProgress, Deleting): Provisioning state of the App Service Environment.
    * reserved `boolean`: If Linux app service plan <code>true</code>, <code>false</code> otherwise.
    * resourceGroup `string`: Resource group of the App Service plan.
    * spotExpirationTime `string`: The time when the server farm expires. Valid only if it is a spot server farm.
    * status `string` (values: Ready, Pending, Creating): App Service plan status.
    * subscription `string`: App Service plan subscription.
    * targetWorkerCount `integer`: Scaling worker count.
    * targetWorkerSizeId `integer`: Scaling worker size ID.
    * workerTierName `string`: Target worker tier assigned to the App Service plan.
  * sku `object`: Description of a SKU for a scalable resource.
    * capabilities `array`: Capabilities of the SKU, e.g., is traffic manager enabled?
      * items `object`: Describes the capabilities/features allowed for a specific SKU.
        * name `string`: Name of the SKU capability.
        * reason `string`: Reason of the SKU capability.
        * value `string`: Value of the SKU capability.
    * capacity `integer`: Current number of instances assigned to the resource.
    * family `string`: Family code of the resource SKU.
    * locations `array`: Locations of the SKU.
      * items `string`
    * name `string`: Name of the resource SKU.
    * size `string`: Size specifier of the resource SKU.
    * skuCapacity `object`: Description of the App Service plan scale options.
      * default `integer`: Default number of workers for this App Service plan SKU.
      * maximum `integer`: Maximum number of workers for this App Service plan SKU.
      * minimum `integer`: Minimum number of workers for this App Service plan SKU.
      * scaleType `string`: Available scale configurations for an App Service plan.
    * tier `string`: Service tier of the resource SKU.
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * location **required** `string`: Resource Location.
  * name `string`: Resource Name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### AppServicePlans_Update
Creates or updates an App Service Plan.


```js
azure_web_appserviceplans.AppServicePlans_Update({
  "resourceGroupName": "",
  "name": "",
  "appServicePlan": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the App Service plan.
  * appServicePlan **required** [AppServicePlanPatchResource](#appserviceplanpatchresource)
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `object`: App Service plan.
  * properties `object`: AppServicePlan resource specific properties
    * adminSiteName `string`: App Service plan administration site.
    * geoRegion `string`: Geographical location for the App Service plan.
    * hostingEnvironmentProfile `object`: Specification for an App Service Environment to use for this resource.
      * id `string`: Resource ID of the App Service Environment.
      * name `string`: Name of the App Service Environment.
      * type `string`: Resource type of the App Service Environment.
    * isSpot `boolean`: If <code>true</code>, this App Service Plan owns spot instances.
    * maximumNumberOfWorkers `integer`: Maximum number of instances that can be assigned to this App Service plan.
    * name **required** `string`: Name for the App Service plan.
    * numberOfSites `integer`: Number of apps assigned to this App Service plan.
    * perSiteScaling `boolean`: If <code>true</code>, apps assigned to this App Service plan can be scaled independently.
    * provisioningState `string` (values: Succeeded, Failed, Canceled, InProgress, Deleting): Provisioning state of the App Service Environment.
    * reserved `boolean`: If Linux app service plan <code>true</code>, <code>false</code> otherwise.
    * resourceGroup `string`: Resource group of the App Service plan.
    * spotExpirationTime `string`: The time when the server farm expires. Valid only if it is a spot server farm.
    * status `string` (values: Ready, Pending, Creating): App Service plan status.
    * subscription `string`: App Service plan subscription.
    * targetWorkerCount `integer`: Scaling worker count.
    * targetWorkerSizeId `integer`: Scaling worker size ID.
    * workerTierName `string`: Target worker tier assigned to the App Service plan.
  * sku `object`: Description of a SKU for a scalable resource.
    * capabilities `array`: Capabilities of the SKU, e.g., is traffic manager enabled?
      * items `object`: Describes the capabilities/features allowed for a specific SKU.
        * name `string`: Name of the SKU capability.
        * reason `string`: Reason of the SKU capability.
        * value `string`: Value of the SKU capability.
    * capacity `integer`: Current number of instances assigned to the resource.
    * family `string`: Family code of the resource SKU.
    * locations `array`: Locations of the SKU.
      * items `string`
    * name `string`: Name of the resource SKU.
    * size `string`: Size specifier of the resource SKU.
    * skuCapacity `object`: Description of the App Service plan scale options.
      * default `integer`: Default number of workers for this App Service plan SKU.
      * maximum `integer`: Maximum number of workers for this App Service plan SKU.
      * minimum `integer`: Minimum number of workers for this App Service plan SKU.
      * scaleType `string`: Available scale configurations for an App Service plan.
    * tier `string`: Service tier of the resource SKU.
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * location **required** `string`: Resource Location.
  * name `string`: Resource Name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### AppServicePlans_CreateOrUpdate
Creates or updates an App Service Plan.


```js
azure_web_appserviceplans.AppServicePlans_CreateOrUpdate({
  "resourceGroupName": "",
  "name": "",
  "appServicePlan": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the App Service plan.
  * appServicePlan **required** `object`: App Service plan.
    * properties `object`: AppServicePlan resource specific properties
      * adminSiteName `string`: App Service plan administration site.
      * geoRegion `string`: Geographical location for the App Service plan.
      * hostingEnvironmentProfile `object`: Specification for an App Service Environment to use for this resource.
        * id `string`: Resource ID of the App Service Environment.
        * name `string`: Name of the App Service Environment.
        * type `string`: Resource type of the App Service Environment.
      * isSpot `boolean`: If <code>true</code>, this App Service Plan owns spot instances.
      * maximumNumberOfWorkers `integer`: Maximum number of instances that can be assigned to this App Service plan.
      * name **required** `string`: Name for the App Service plan.
      * numberOfSites `integer`: Number of apps assigned to this App Service plan.
      * perSiteScaling `boolean`: If <code>true</code>, apps assigned to this App Service plan can be scaled independently.
      * provisioningState `string` (values: Succeeded, Failed, Canceled, InProgress, Deleting): Provisioning state of the App Service Environment.
      * reserved `boolean`: If Linux app service plan <code>true</code>, <code>false</code> otherwise.
      * resourceGroup `string`: Resource group of the App Service plan.
      * spotExpirationTime `string`: The time when the server farm expires. Valid only if it is a spot server farm.
      * status `string` (values: Ready, Pending, Creating): App Service plan status.
      * subscription `string`: App Service plan subscription.
      * targetWorkerCount `integer`: Scaling worker count.
      * targetWorkerSizeId `integer`: Scaling worker size ID.
      * workerTierName `string`: Target worker tier assigned to the App Service plan.
    * sku `object`: Description of a SKU for a scalable resource.
      * capabilities `array`: Capabilities of the SKU, e.g., is traffic manager enabled?
        * items `object`: Describes the capabilities/features allowed for a specific SKU.
          * name `string`: Name of the SKU capability.
          * reason `string`: Reason of the SKU capability.
          * value `string`: Value of the SKU capability.
      * capacity `integer`: Current number of instances assigned to the resource.
      * family `string`: Family code of the resource SKU.
      * locations `array`: Locations of the SKU.
        * items `string`
      * name `string`: Name of the resource SKU.
      * size `string`: Size specifier of the resource SKU.
      * skuCapacity `object`: Description of the App Service plan scale options.
        * default `integer`: Default number of workers for this App Service plan SKU.
        * maximum `integer`: Maximum number of workers for this App Service plan SKU.
        * minimum `integer`: Minimum number of workers for this App Service plan SKU.
        * scaleType `string`: Available scale configurations for an App Service plan.
      * tier `string`: Service tier of the resource SKU.
    * id `string`: Resource Id.
    * kind `string`: Kind of resource.
    * location **required** `string`: Resource Location.
    * name `string`: Resource Name.
    * tags `object`: Resource tags.
    * type `string`: Resource type.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `object`: App Service plan.
  * properties `object`: AppServicePlan resource specific properties
    * adminSiteName `string`: App Service plan administration site.
    * geoRegion `string`: Geographical location for the App Service plan.
    * hostingEnvironmentProfile `object`: Specification for an App Service Environment to use for this resource.
      * id `string`: Resource ID of the App Service Environment.
      * name `string`: Name of the App Service Environment.
      * type `string`: Resource type of the App Service Environment.
    * isSpot `boolean`: If <code>true</code>, this App Service Plan owns spot instances.
    * maximumNumberOfWorkers `integer`: Maximum number of instances that can be assigned to this App Service plan.
    * name **required** `string`: Name for the App Service plan.
    * numberOfSites `integer`: Number of apps assigned to this App Service plan.
    * perSiteScaling `boolean`: If <code>true</code>, apps assigned to this App Service plan can be scaled independently.
    * provisioningState `string` (values: Succeeded, Failed, Canceled, InProgress, Deleting): Provisioning state of the App Service Environment.
    * reserved `boolean`: If Linux app service plan <code>true</code>, <code>false</code> otherwise.
    * resourceGroup `string`: Resource group of the App Service plan.
    * spotExpirationTime `string`: The time when the server farm expires. Valid only if it is a spot server farm.
    * status `string` (values: Ready, Pending, Creating): App Service plan status.
    * subscription `string`: App Service plan subscription.
    * targetWorkerCount `integer`: Scaling worker count.
    * targetWorkerSizeId `integer`: Scaling worker size ID.
    * workerTierName `string`: Target worker tier assigned to the App Service plan.
  * sku `object`: Description of a SKU for a scalable resource.
    * capabilities `array`: Capabilities of the SKU, e.g., is traffic manager enabled?
      * items `object`: Describes the capabilities/features allowed for a specific SKU.
        * name `string`: Name of the SKU capability.
        * reason `string`: Reason of the SKU capability.
        * value `string`: Value of the SKU capability.
    * capacity `integer`: Current number of instances assigned to the resource.
    * family `string`: Family code of the resource SKU.
    * locations `array`: Locations of the SKU.
      * items `string`
    * name `string`: Name of the resource SKU.
    * size `string`: Size specifier of the resource SKU.
    * skuCapacity `object`: Description of the App Service plan scale options.
      * default `integer`: Default number of workers for this App Service plan SKU.
      * maximum `integer`: Maximum number of workers for this App Service plan SKU.
      * minimum `integer`: Minimum number of workers for this App Service plan SKU.
      * scaleType `string`: Available scale configurations for an App Service plan.
    * tier `string`: Service tier of the resource SKU.
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * location **required** `string`: Resource Location.
  * name `string`: Resource Name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### AppServicePlans_ListCapabilities
List all capabilities of an App Service plan.


```js
azure_web_appserviceplans.AppServicePlans_ListCapabilities({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the App Service plan.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `array`
  * items `object`: Describes the capabilities/features allowed for a specific SKU.
    * name `string`: Name of the SKU capability.
    * reason `string`: Reason of the SKU capability.
    * value `string`: Value of the SKU capability.

### AppServicePlans_DeleteHybridConnection
Delete a Hybrid Connection in use in an App Service plan.


```js
azure_web_appserviceplans.AppServicePlans_DeleteHybridConnection({
  "resourceGroupName": "",
  "name": "",
  "namespaceName": "",
  "relayName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the App Service plan.
  * namespaceName **required** `string`: Name of the Service Bus namespace.
  * relayName **required** `string`: Name of the Service Bus relay.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### AppServicePlans_GetHybridConnection
Retrieve a Hybrid Connection in use in an App Service plan.


```js
azure_web_appserviceplans.AppServicePlans_GetHybridConnection({
  "resourceGroupName": "",
  "name": "",
  "namespaceName": "",
  "relayName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the App Service plan.
  * namespaceName **required** `string`: Name of the Service Bus namespace.
  * relayName **required** `string`: Name of the Service Bus relay.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `object`: Hybrid Connection contract. This is used to configure a Hybrid Connection.
  * properties `object`: HybridConnection resource specific properties
    * hostname `string`: The hostname of the endpoint.
    * port `integer`: The port of the endpoint.
    * relayArmUri `string`: The ARM URI to the Service Bus relay.
    * relayName `string`: The name of the Service Bus relay.
    * sendKeyName `string`: The name of the Service Bus key which has Send permissions. This is used to authenticate to Service Bus.
    * sendKeyValue `string`: The value of the Service Bus key. This is used to authenticate to Service Bus. In ARM this key will not be returned
    * serviceBusNamespace `string`: The name of the Service Bus namespace.
    * serviceBusSuffix `string`: The suffix for the service bus endpoint. By default this is .servicebus.windows.net
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### AppServicePlans_ListHybridConnectionKeys
Get the send key name and value of a Hybrid Connection.


```js
azure_web_appserviceplans.AppServicePlans_ListHybridConnectionKeys({
  "resourceGroupName": "",
  "name": "",
  "namespaceName": "",
  "relayName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the App Service plan.
  * namespaceName **required** `string`: The name of the Service Bus namespace.
  * relayName **required** `string`: The name of the Service Bus relay.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `object`: Hybrid Connection key contract. This has the send key name and value for a Hybrid Connection.
  * properties `object`: HybridConnectionKey resource specific properties
    * sendKeyName `string`: The name of the send key.
    * sendKeyValue `string`: The value of the send key.
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### AppServicePlans_ListWebAppsByHybridConnection
Get all apps that use a Hybrid Connection in an App Service Plan.


```js
azure_web_appserviceplans.AppServicePlans_ListWebAppsByHybridConnection({
  "resourceGroupName": "",
  "name": "",
  "namespaceName": "",
  "relayName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the App Service plan.
  * namespaceName **required** `string`: Name of the Hybrid Connection namespace.
  * relayName **required** `string`: Name of the Hybrid Connection relay.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [ResourceCollection](#resourcecollection)

### AppServicePlans_GetHybridConnectionPlanLimit
Get the maximum number of Hybrid Connections allowed in an App Service plan.


```js
azure_web_appserviceplans.AppServicePlans_GetHybridConnectionPlanLimit({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the App Service plan.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [HybridConnectionLimits](#hybridconnectionlimits)

### AppServicePlans_ListHybridConnections
Retrieve all Hybrid Connections in use in an App Service plan.


```js
azure_web_appserviceplans.AppServicePlans_ListHybridConnections({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the App Service plan.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [HybridConnectionCollection](#hybridconnectioncollection)

### AppServicePlans_ListMetricDefintions
Get metrics that can be queried for an App Service plan, and their definitions.


```js
azure_web_appserviceplans.AppServicePlans_ListMetricDefintions({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the App Service plan.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `object`: Collection of metric definitions.
  * nextLink `string`: Link to next page of resources.
  * value **required** `array`: Collection of resources.
    * items `object`: Metadata for the metrics.
      * properties `object`: ResourceMetricDefinition resource specific properties
        * id `string`: Resource ID.
        * metricAvailabilities `array`: List of time grains supported for the metric together with retention period.
          * items `object`: Metrics availability and retention.
            * retention `string`: Retention period for the current time grain.
            * timeGrain `string`: Time grain .
        * name `object`: Name of a metric for any resource .
          * localizedValue `string`: Localized metric name value.
          * value `string`: metric name value.
        * primaryAggregationType `string`: Primary aggregation type.
        * properties `object`: Resource metric definition properties.
        * resourceUri `string`: Resource URI.
        * unit `string`: Unit of the metric.
      * id `string`: Resource Id.
      * kind `string`: Kind of resource.
      * name `string`: Resource Name.
      * type `string`: Resource type.

### AppServicePlans_ListMetrics
Get metrics for an App Serice plan.


```js
azure_web_appserviceplans.AppServicePlans_ListMetrics({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the App Service plan.
  * details `boolean`: Specify <code>true</code> to include instance details. The default is <code>false</code>.
  * $filter `string`: Return only usages/metrics specified in the filter. Filter conforms to odata syntax. Example: $filter=(name.value eq 'Metric1' or name.value eq 'Metric2') and startTime eq '2014-01-01T00:00:00Z' and endTime eq '2014-12-31T23:59:59Z' and timeGrain eq duration'[Hour|Minute|Day]'.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `object`: Collection of metric responses.
  * nextLink `string`: Link to next page of resources.
  * value **required** `array`: Collection of resources.
    * items `object`: Object representing a metric for any resource .
      * endTime `string`: Metric end time.
      * id `string`: Resource Id.
      * metricValues `array`: Metric values.
        * items `object`: Value of resource metric.
          * average `number`: Value average.
          * count `number`: Value count.
          * maximum `number`: Value maximum.
          * minimum `number`: Value minimum.
          * properties `array`: Resource metric properties collection.
            * items `object`: Resource metric property.
              * key `string`: Key for resource metric property.
              * value `string`: Value of pair.
          * timestamp `string`: Value timestamp.
          * total `number`: Value total.
      * name `object`: Name of a metric for any resource .
        * localizedValue `string`: Localized metric name value.
        * value `string`: metric name value.
      * properties `array`: Resource metric properties collection.
        * items `object`: Resource metric property.
          * key `string`: Key for resource metric property.
          * value `string`: Value of pair.
      * resourceId `string`: Metric resource Id.
      * startTime `string`: Metric start time.
      * timeGrain `string`: Metric granularity. E.g PT1H, PT5M, P1D
      * unit `string`: Metric unit.

### AppServicePlans_RestartWebApps
Restart all apps in an App Service plan.


```js
azure_web_appserviceplans.AppServicePlans_RestartWebApps({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the App Service plan.
  * softRestart `boolean`: Specify <code>true</code> to performa a soft restart, applies the configuration settings and restarts the apps if necessary. The default is <code>false</code>, which always restarts and reprovisions the apps
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### AppServicePlans_ListWebApps
Get all apps associated with an App Service plan.


```js
azure_web_appserviceplans.AppServicePlans_ListWebApps({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the App Service plan.
  * $skipToken `string`: Skip to a web app in the list of webapps associated with app service plan. If specified, the resulting list will contain web apps starting from (including) the skipToken. Otherwise, the resulting list contains web apps from the start of the list
  * $filter `string`: Supported filter: $filter=state eq running. Returns only web apps that are currently running
  * $top `string`: List page size. If specified, results are paged.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `object`: Collection of App Service apps.
  * nextLink `string`: Link to next page of resources.
  * value **required** `array`: Collection of resources.
    * items `object`: A web app, a mobile app backend, or an API app.
      * identity `object`: Managed service identity.
        * principalId `string`: Principal Id of managed service identity.
        * tenantId `string`: Tenant of managed service identity.
        * type `string` (values: SystemAssigned): Type of managed service identity.
      * properties `object`: Site resource specific properties
        * availabilityState `string` (values: Normal, Limited, DisasterRecoveryMode): Management information availability state for the app.
        * clientAffinityEnabled `boolean`: <code>true</code> to enable client affinity; <code>false</code> to stop sending session affinity cookies, which route client requests in the same session to the same instance. Default is <code>true</code>.
        * clientCertEnabled `boolean`: <code>true</code> to enable client certificate authentication (TLS mutual authentication); otherwise, <code>false</code>. Default is <code>false</code>.
        * cloningInfo `object`: Information needed for cloning operation.
          * appSettingsOverrides `object`: Application setting overrides for cloned app. If specified, these settings override the settings cloned 
          * cloneCustomHostNames `boolean`: <code>true</code> to clone custom hostnames from source app; otherwise, <code>false</code>.
          * cloneSourceControl `boolean`: <code>true</code> to clone source control from source app; otherwise, <code>false</code>.
          * configureLoadBalancing `boolean`: <code>true</code> to configure load balancing for source and destination app.
          * correlationId `string`: Correlation ID of cloning operation. This ID ties multiple cloning operations
          * hostingEnvironment `string`: App Service Environment.
          * ignoreQuotas `boolean`: <code>true</code> if quotas should be ignored; otherwise, <code>false</code>.
          * overwrite `boolean`: <code>true</code> to overwrite destination app; otherwise, <code>false</code>.
          * sourceWebAppId **required** `string`: ARM resource ID of the source app. App resource ID is of the form 
          * trafficManagerProfileId `string`: ARM resource ID of the Traffic Manager profile to use, if it exists. Traffic Manager resource ID is of the form 
          * trafficManagerProfileName `string`: Name of Traffic Manager profile to create. This is only needed if Traffic Manager profile does not already exist.
        * containerSize `integer`: Size of the function container.
        * dailyMemoryTimeQuota `integer`: Maximum allowed daily memory-time quota (applicable on dynamic apps only).
        * defaultHostName `string`: Default hostname of the app. Read-only.
        * enabled `boolean`: <code>true</code> if the app is enabled; otherwise, <code>false</code>. Setting this value to false disables the app (takes the app offline).
        * enabledHostNames `array`: Enabled hostnames for the app.Hostnames need to be assigned (see HostNames) AND enabled. Otherwise,
          * items `string`
        * hostNameSslStates `array`: Hostname SSL states are used to manage the SSL bindings for app's hostnames.
          * items `object`: SSL-enabled hostname.
            * hostType `string` (values: Standard, Repository): Indicates whether the hostname is a standard or repository hostname.
            * name `string`: Hostname.
            * sslState `string` (values: Disabled, SniEnabled, IpBasedEnabled): SSL type.
            * thumbprint `string`: SSL certificate thumbprint.
            * toUpdate `boolean`: Set to <code>true</code> to update existing hostname.
            * virtualIP `string`: Virtual IP address assigned to the hostname if IP based SSL is enabled.
        * hostNames `array`: Hostnames associated with the app.
          * items `string`
        * hostNamesDisabled `boolean`: <code>true</code> to disable the public hostnames of the app; otherwise, <code>false</code>.
        * hostingEnvironmentProfile `object`: Specification for an App Service Environment to use for this resource.
          * id `string`: Resource ID of the App Service Environment.
          * name `string`: Name of the App Service Environment.
          * type `string`: Resource type of the App Service Environment.
        * httpsOnly `boolean`: HttpsOnly: configures a web site to accept only https requests. Issues redirect for
        * isDefaultContainer `boolean`: <code>true</code> if the app is a default container; otherwise, <code>false</code>.
        * lastModifiedTimeUtc `string`: Last time the app was modified, in UTC. Read-only.
        * maxNumberOfWorkers `integer`: Maximum number of workers.
        * outboundIpAddresses `string`: List of IP addresses that the app uses for outbound connections (e.g. database access). Includes VIPs from tenants that site can be hosted with current settings. Read-only.
        * possibleOutboundIpAddresses `string`: List of IP addresses that the app uses for outbound connections (e.g. database access). Includes VIPs from all tenants. Read-only.
        * repositorySiteName `string`: Name of the repository site.
        * reserved `boolean`: <code>true</code> if reserved; otherwise, <code>false</code>.
        * resourceGroup `string`: Name of the resource group the app belongs to. Read-only.
        * scmSiteAlsoStopped `boolean`: <code>true</code> to stop SCM (KUDU) site when the app is stopped; otherwise, <code>false</code>. The default is <code>false</code>.
        * serverFarmId `string`: Resource ID of the associated App Service plan, formatted as: "/subscriptions/{subscriptionID}/resourceGroups/{groupName}/providers/Microsoft.Web/serverfarms/{appServicePlanName}".
        * siteConfig `object`: Configuration of an App Service app.
          * alwaysOn `boolean`: <code>true</code> if Always On is enabled; otherwise, <code>false</code>.
          * apiDefinition `object`: Information about the formal API definition for the app.
            * url `string`: The URL of the API definition.
          * appCommandLine `string`: App command line to launch.
          * appSettings `array`: Application settings.
            * items `object`: Name value pair.
              * name `string`: Pair name.
              * value `string`: Pair value.
          * autoHealEnabled `boolean`: <code>true</code> if Auto Heal is enabled; otherwise, <code>false</code>.
          * autoHealRules `object`: Rules that can be defined for auto-heal.
            * actions `object`: Actions which to take by the auto-heal module when a rule is triggered.
              * actionType `string` (values: Recycle, LogEvent, CustomAction): Predefined action to be taken.
              * customAction `object`: Custom action to be executed
                * exe `string`: Executable to be run.
                * parameters `string`: Parameters for the executable.
              * minProcessExecutionTime `string`: Minimum time the process must execute
            * triggers `object`: Triggers for auto-heal.
              * privateBytesInKB `integer`: A rule based on private bytes.
              * requests `object`: Trigger based on total requests.
                * count `integer`: Request Count.
                * timeInterval `string`: Time interval.
              * slowRequests `object`: Trigger based on request execution time.
                * count `integer`: Request Count.
                * timeInterval `string`: Time interval.
                * timeTaken `string`: Time taken.
              * statusCodes `array`: A rule based on status codes.
                * items `object`: Trigger based on status code.
                  * count `integer`: Request Count.
                  * status `integer`: HTTP status code.
                  * subStatus `integer`: Request Sub Status.
                  * timeInterval `string`: Time interval.
                  * win32Status `integer`: Win32 error code.
          * autoSwapSlotName `string`: Auto-swap slot name.
          * connectionStrings `array`: Connection strings.
            * items `object`: Database connection string information.
              * connectionString `string`: Connection string value.
              * name `string`: Name of connection string.
              * type `string` (values: MySql, SQLServer, SQLAzure, Custom, NotificationHub, ServiceBus, EventHub, ApiHub, DocDb, RedisCache, PostgreSQL): Type of database.
          * cors `object`: Cross-Origin Resource Sharing (CORS) settings for the app.
            * allowedOrigins `array`: Gets or sets the list of origins that should be allowed to make cross-origin
              * items `string`
          * defaultDocuments `array`: Default documents.
            * items `string`
          * detailedErrorLoggingEnabled `boolean`: <code>true</code> if detailed error logging is enabled; otherwise, <code>false</code>.
          * documentRoot `string`: Document root.
          * experiments `object`: Routing rules in production experiments.
            * rampUpRules `array`: List of ramp-up rules.
              * items `object`: Routing rules for ramp up testing. This rule allows to redirect static traffic % to a slot or to gradually change routing % based on performance.
                * actionHostName `string`: Hostname of a slot to which the traffic will be redirected if decided to. E.g. myapp-stage.azurewebsites.net.
                * changeDecisionCallbackUrl `string`: Custom decision algorithm can be provided in TiPCallback site extension which URL can be specified. See TiPCallback site extension for the scaffold and contracts.
                * changeIntervalInMinutes `integer`: Specifies interval in mimuntes to reevaluate ReroutePercentage.
                * changeStep `number`: In auto ramp up scenario this is the step to to add/remove from <code>ReroutePercentage</code> until it reaches 
                * maxReroutePercentage `number`: Specifies upper boundary below which ReroutePercentage will stay.
                * minReroutePercentage `number`: Specifies lower boundary above which ReroutePercentage will stay.
                * name `string`: Name of the routing rule. The recommended name would be to point to the slot which will receive the traffic in the experiment.
                * reroutePercentage `number`: Percentage of the traffic which will be redirected to <code>ActionHostName</code>.
          * handlerMappings `array`: Handler mappings.
            * items `object`: The IIS handler mappings used to define which handler processes HTTP requests with certain extension. 
              * arguments `string`: Command-line arguments to be passed to the script processor.
              * extension `string`: Requests with this extension will be handled using the specified FastCGI application.
              * scriptProcessor `string`: The absolute path to the FastCGI application.
          * httpLoggingEnabled `boolean`: <code>true</code> if HTTP logging is enabled; otherwise, <code>false</code>.
          * ipSecurityRestrictions `array`: IP security restrictions.
            * items `object`: IP security restriction on an app.
              * ipAddress **required** `string`: IP address the security restriction is valid for.
              * subnetMask `string`: Subnet mask for the range of IP addresses the restriction is valid for.
          * javaContainer `string`: Java container.
          * javaContainerVersion `string`: Java container version.
          * javaVersion `string`: Java version.
          * limits `object`: Metric limits set on an app.
            * maxDiskSizeInMb `integer`: Maximum allowed disk size usage in MB.
            * maxMemoryInMb `integer`: Maximum allowed memory usage in MB.
            * maxPercentageCpu `number`: Maximum allowed CPU usage percentage.
          * linuxFxVersion `string`: Linux App Framework and version
          * loadBalancing `string` (values: WeightedRoundRobin, LeastRequests, LeastResponseTime, WeightedTotalTraffic, RequestHash): Site load balancing.
          * localMySqlEnabled `boolean`: <code>true</code> to enable local MySQL; otherwise, <code>false</code>.
          * logsDirectorySizeLimit `integer`: HTTP logs directory size limit.
          * machineKey `object`: MachineKey of an app.
            * decryption `string`: Algorithm used for decryption.
            * decryptionKey `string`: Decryption key.
            * validation `string`: MachineKey validation.
            * validationKey `string`: Validation key.
          * managedPipelineMode `string` (values: Integrated, Classic): Managed pipeline mode.
          * netFrameworkVersion `string`: .NET Framework version.
          * nodeVersion `string`: Version of Node.js.
          * numberOfWorkers `integer`: Number of workers.
          * phpVersion `string`: Version of PHP.
          * publishingUsername `string`: Publishing user name.
          * push `object`: Push settings for the App.
            * properties `object`: PushSettings resource specific properties
              * dynamicTagsJson `string`: Gets or sets a JSON string containing a list of dynamic tags that will be evaluated from user claims in the push registration endpoint.
              * isPushEnabled **required** `boolean`: Gets or sets a flag indicating whether the Push endpoint is enabled.
              * tagWhitelistJson `string`: Gets or sets a JSON string containing a list of tags that are whitelisted for use by the push registration endpoint.
              * tagsRequiringAuth `string`: Gets or sets a JSON string containing a list of tags that require user authentication to be used in the push registration endpoint.
            * id `string`: Resource Id.
            * kind `string`: Kind of resource.
            * name `string`: Resource Name.
            * type `string`: Resource type.
          * pythonVersion `string`: Version of Python.
          * remoteDebuggingEnabled `boolean`: <code>true</code> if remote debugging is enabled; otherwise, <code>false</code>.
          * remoteDebuggingVersion `string`: Remote debugging version.
          * requestTracingEnabled `boolean`: <code>true</code> if request tracing is enabled; otherwise, <code>false</code>.
          * requestTracingExpirationTime `string`: Request tracing expiration time.
          * scmType `string` (values: None, Dropbox, Tfs, LocalGit, GitHub, CodePlexGit, CodePlexHg, BitbucketGit, BitbucketHg, ExternalGit, ExternalHg, OneDrive, VSO): SCM type.
          * tracingOptions `string`: Tracing options.
          * use32BitWorkerProcess `boolean`: <code>true</code> to use 32-bit worker process; otherwise, <code>false</code>.
          * virtualApplications `array`: Virtual applications.
            * items `object`: Virtual application in an app.
              * physicalPath `string`: Physical path.
              * preloadEnabled `boolean`: <code>true</code> if preloading is enabled; otherwise, <code>false</code>.
              * virtualDirectories `array`: Virtual directories for virtual application.
                * items `object`: Directory for virtual application.
                  * physicalPath `string`: Physical path.
                  * virtualPath `string`: Path to virtual application.
              * virtualPath `string`: Virtual path.
          * vnetName `string`: Virtual Network name.
          * webSocketsEnabled `boolean`: <code>true</code> if WebSocket is enabled; otherwise, <code>false</code>.
        * slotSwapStatus `object`: The status of the last successfull slot swap operation.
          * destinationSlotName `string`: The destination slot of the last swap operation.
          * sourceSlotName `string`: The source slot of the last swap operation.
          * timestampUtc `string`: The time the last successful slot swap completed.
        * snapshotInfo `object`: Details about app recovery operation.
          * properties `object`: SnapshotRecoveryRequest resource specific properties
            * ignoreConflictingHostNames `boolean`: If true, custom hostname conflicts will be ignored when recovering to a target web app.
            * overwrite **required** `boolean`: If <code>true</code> the recovery operation can overwrite source app; otherwise, <code>false</code>.
            * recoverConfiguration `boolean`: If true, site configuration, in addition to content, will be reverted.
            * recoveryTarget `object`: Specifies the web app that snapshot contents will be written to.
              * id `string`: ARM resource ID of the target app. 
              * location `string`: Geographical location of the target web app, e.g. SouthEastAsia, SouthCentralUS
            * snapshotTime `string`: Point in time in which the app recovery should be attempted, formatted as a DateTime string.
          * id `string`: Resource Id.
          * kind `string`: Kind of resource.
          * name `string`: Resource Name.
          * type `string`: Resource type.
        * state `string`: Current state of the app.
        * suspendedTill `string`: App suspended till in case memory-time quota is exceeded.
        * targetSwapSlot `string`: Specifies which deployment slot this app will swap into. Read-only.
        * trafficManagerHostNames `array`: Azure Traffic Manager hostnames associated with the app. Read-only.
          * items `string`
        * usageState `string` (values: Normal, Exceeded): State indicating whether the app has exceeded its quota usage. Read-only.
      * id `string`: Resource Id.
      * kind `string`: Kind of resource.
      * location **required** `string`: Resource Location.
      * name `string`: Resource Name.
      * tags `object`: Resource tags.
      * type `string`: Resource type.

### AppServicePlans_GetServerFarmSkus
Gets all selectable sku's for a given App Service Plan


```js
azure_web_appserviceplans.AppServicePlans_GetServerFarmSkus({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of App Service Plan
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `object`

### AppServicePlans_ListUsages
Gets server farm usage information


```js
azure_web_appserviceplans.AppServicePlans_ListUsages({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of App Service Plan
  * $filter `string`: Return only usages/metrics specified in the filter. Filter conforms to odata syntax. Example: $filter=(name.value eq 'Metric1' or name.value eq 'Metric2').
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `object`: Collection of CSM usage quotas.
  * nextLink `string`: Link to next page of resources.
  * value **required** `array`: Collection of resources.
    * items `object`: Usage of the quota resource.
      * currentValue `integer`: The current value of the resource counter.
      * limit `integer`: The resource limit.
      * name `object`: Localizable string object containing the name and a localized value.
        * localizedValue `string`: Localized name.
        * value `string`: Non-localized name.
      * nextResetTime `string`: Next reset time for the resource counter.
      * unit `string`: Units of measurement for the quota resourse.

### AppServicePlans_ListVnets
Get all Virtual Networks associated with an App Service plan.


```js
azure_web_appserviceplans.AppServicePlans_ListVnets({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the App Service plan.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `array`
  * items `object`: Virtual Network information contract.
    * properties `object`: VnetInfo resource specific properties
      * certBlob `string`: A certificate file (.cer) blob containing the public key of the private key used to authenticate a 
      * certThumbprint `string`: The client certificate thumbprint.
      * dnsServers `string`: DNS servers to be used by this Virtual Network. This should be a comma-separated list of IP addresses.
      * resyncRequired `boolean`: <code>true</code> if a resync is required; otherwise, <code>false</code>.
      * routes `array`: The routes that this Virtual Network connection uses.
        * items `object`: Virtual Network route contract used to pass routing information for a Virtual Network.
          * properties `object`: VnetRoute resource specific properties
            * endAddress `string`: The ending address for this route. If the start address is specified in CIDR notation, this must be omitted.
            * name `string`: The name of this route. This is only returned by the server and does not need to be set by the client.
            * routeType `string` (values: DEFAULT, INHERITED, STATIC): The type of route this is:
            * startAddress `string`: The starting address for this route. This may also include a CIDR notation, in which case the end address must not be specified.
          * id `string`: Resource Id.
          * kind `string`: Kind of resource.
          * name `string`: Resource Name.
          * type `string`: Resource type.
      * vnetResourceId `string`: The Virtual Network's resource ID.
    * id `string`: Resource Id.
    * kind `string`: Kind of resource.
    * name `string`: Resource Name.
    * type `string`: Resource type.

### AppServicePlans_GetVnetFromServerFarm
Get a Virtual Network associated with an App Service plan.


```js
azure_web_appserviceplans.AppServicePlans_GetVnetFromServerFarm({
  "resourceGroupName": "",
  "name": "",
  "vnetName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the App Service plan.
  * vnetName **required** `string`: Name of the Virtual Network.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `object`: Virtual Network information contract.
  * properties `object`: VnetInfo resource specific properties
    * certBlob `string`: A certificate file (.cer) blob containing the public key of the private key used to authenticate a 
    * certThumbprint `string`: The client certificate thumbprint.
    * dnsServers `string`: DNS servers to be used by this Virtual Network. This should be a comma-separated list of IP addresses.
    * resyncRequired `boolean`: <code>true</code> if a resync is required; otherwise, <code>false</code>.
    * routes `array`: The routes that this Virtual Network connection uses.
      * items `object`: Virtual Network route contract used to pass routing information for a Virtual Network.
        * properties `object`: VnetRoute resource specific properties
          * endAddress `string`: The ending address for this route. If the start address is specified in CIDR notation, this must be omitted.
          * name `string`: The name of this route. This is only returned by the server and does not need to be set by the client.
          * routeType `string` (values: DEFAULT, INHERITED, STATIC): The type of route this is:
          * startAddress `string`: The starting address for this route. This may also include a CIDR notation, in which case the end address must not be specified.
        * id `string`: Resource Id.
        * kind `string`: Kind of resource.
        * name `string`: Resource Name.
        * type `string`: Resource type.
    * vnetResourceId `string`: The Virtual Network's resource ID.
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### AppServicePlans_GetVnetGateway
Get a Virtual Network gateway.


```js
azure_web_appserviceplans.AppServicePlans_GetVnetGateway({
  "resourceGroupName": "",
  "name": "",
  "vnetName": "",
  "gatewayName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the App Service plan.
  * vnetName **required** `string`: Name of the Virtual Network.
  * gatewayName **required** `string`: Name of the gateway. Only the 'primary' gateway is supported.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `object`: The Virtual Network gateway contract. This is used to give the Virtual Network gateway access to the VPN package.
  * properties `object`: VnetGateway resource specific properties
    * vnetName `string`: The Virtual Network name.
    * vpnPackageUri **required** `string`: The URI where the VPN package can be downloaded.
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### AppServicePlans_UpdateVnetGateway
Update a Virtual Network gateway.


```js
azure_web_appserviceplans.AppServicePlans_UpdateVnetGateway({
  "resourceGroupName": "",
  "name": "",
  "vnetName": "",
  "gatewayName": "",
  "connectionEnvelope": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the App Service plan.
  * vnetName **required** `string`: Name of the Virtual Network.
  * gatewayName **required** `string`: Name of the gateway. Only the 'primary' gateway is supported.
  * connectionEnvelope **required** `object`: The Virtual Network gateway contract. This is used to give the Virtual Network gateway access to the VPN package.
    * properties `object`: VnetGateway resource specific properties
      * vnetName `string`: The Virtual Network name.
      * vpnPackageUri **required** `string`: The URI where the VPN package can be downloaded.
    * id `string`: Resource Id.
    * kind `string`: Kind of resource.
    * name `string`: Resource Name.
    * type `string`: Resource type.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `object`: The Virtual Network gateway contract. This is used to give the Virtual Network gateway access to the VPN package.
  * properties `object`: VnetGateway resource specific properties
    * vnetName `string`: The Virtual Network name.
    * vpnPackageUri **required** `string`: The URI where the VPN package can be downloaded.
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### AppServicePlans_ListRoutesForVnet
Get all routes that are associated with a Virtual Network in an App Service plan.


```js
azure_web_appserviceplans.AppServicePlans_ListRoutesForVnet({
  "resourceGroupName": "",
  "name": "",
  "vnetName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the App Service plan.
  * vnetName **required** `string`: Name of the Virtual Network.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `array`
  * items `object`: Virtual Network route contract used to pass routing information for a Virtual Network.
    * properties `object`: VnetRoute resource specific properties
      * endAddress `string`: The ending address for this route. If the start address is specified in CIDR notation, this must be omitted.
      * name `string`: The name of this route. This is only returned by the server and does not need to be set by the client.
      * routeType `string` (values: DEFAULT, INHERITED, STATIC): The type of route this is:
      * startAddress `string`: The starting address for this route. This may also include a CIDR notation, in which case the end address must not be specified.
    * id `string`: Resource Id.
    * kind `string`: Kind of resource.
    * name `string`: Resource Name.
    * type `string`: Resource type.

### AppServicePlans_DeleteVnetRoute
Delete a Virtual Network route in an App Service plan.


```js
azure_web_appserviceplans.AppServicePlans_DeleteVnetRoute({
  "resourceGroupName": "",
  "name": "",
  "vnetName": "",
  "routeName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the App Service plan.
  * vnetName **required** `string`: Name of the Virtual Network.
  * routeName **required** `string`: Name of the Virtual Network route.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### AppServicePlans_GetRouteForVnet
Get a Virtual Network route in an App Service plan.


```js
azure_web_appserviceplans.AppServicePlans_GetRouteForVnet({
  "resourceGroupName": "",
  "name": "",
  "vnetName": "",
  "routeName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the App Service plan.
  * vnetName **required** `string`: Name of the Virtual Network.
  * routeName **required** `string`: Name of the Virtual Network route.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `array`
  * items `object`: Virtual Network route contract used to pass routing information for a Virtual Network.
    * properties `object`: VnetRoute resource specific properties
      * endAddress `string`: The ending address for this route. If the start address is specified in CIDR notation, this must be omitted.
      * name `string`: The name of this route. This is only returned by the server and does not need to be set by the client.
      * routeType `string` (values: DEFAULT, INHERITED, STATIC): The type of route this is:
      * startAddress `string`: The starting address for this route. This may also include a CIDR notation, in which case the end address must not be specified.
    * id `string`: Resource Id.
    * kind `string`: Kind of resource.
    * name `string`: Resource Name.
    * type `string`: Resource type.

### AppServicePlans_UpdateVnetRoute
Create or update a Virtual Network route in an App Service plan.


```js
azure_web_appserviceplans.AppServicePlans_UpdateVnetRoute({
  "resourceGroupName": "",
  "name": "",
  "vnetName": "",
  "routeName": "",
  "route": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the App Service plan.
  * vnetName **required** `string`: Name of the Virtual Network.
  * routeName **required** `string`: Name of the Virtual Network route.
  * route **required** `object`: Virtual Network route contract used to pass routing information for a Virtual Network.
    * properties `object`: VnetRoute resource specific properties
      * endAddress `string`: The ending address for this route. If the start address is specified in CIDR notation, this must be omitted.
      * name `string`: The name of this route. This is only returned by the server and does not need to be set by the client.
      * routeType `string` (values: DEFAULT, INHERITED, STATIC): The type of route this is:
      * startAddress `string`: The starting address for this route. This may also include a CIDR notation, in which case the end address must not be specified.
    * id `string`: Resource Id.
    * kind `string`: Kind of resource.
    * name `string`: Resource Name.
    * type `string`: Resource type.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `object`: Virtual Network route contract used to pass routing information for a Virtual Network.
  * properties `object`: VnetRoute resource specific properties
    * endAddress `string`: The ending address for this route. If the start address is specified in CIDR notation, this must be omitted.
    * name `string`: The name of this route. This is only returned by the server and does not need to be set by the client.
    * routeType `string` (values: DEFAULT, INHERITED, STATIC): The type of route this is:
    * startAddress `string`: The starting address for this route. This may also include a CIDR notation, in which case the end address must not be specified.
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### AppServicePlans_CreateOrUpdateVnetRoute
Create or update a Virtual Network route in an App Service plan.


```js
azure_web_appserviceplans.AppServicePlans_CreateOrUpdateVnetRoute({
  "resourceGroupName": "",
  "name": "",
  "vnetName": "",
  "routeName": "",
  "route": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the App Service plan.
  * vnetName **required** `string`: Name of the Virtual Network.
  * routeName **required** `string`: Name of the Virtual Network route.
  * route **required** `object`: Virtual Network route contract used to pass routing information for a Virtual Network.
    * properties `object`: VnetRoute resource specific properties
      * endAddress `string`: The ending address for this route. If the start address is specified in CIDR notation, this must be omitted.
      * name `string`: The name of this route. This is only returned by the server and does not need to be set by the client.
      * routeType `string` (values: DEFAULT, INHERITED, STATIC): The type of route this is:
      * startAddress `string`: The starting address for this route. This may also include a CIDR notation, in which case the end address must not be specified.
    * id `string`: Resource Id.
    * kind `string`: Kind of resource.
    * name `string`: Resource Name.
    * type `string`: Resource type.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `object`: Virtual Network route contract used to pass routing information for a Virtual Network.
  * properties `object`: VnetRoute resource specific properties
    * endAddress `string`: The ending address for this route. If the start address is specified in CIDR notation, this must be omitted.
    * name `string`: The name of this route. This is only returned by the server and does not need to be set by the client.
    * routeType `string` (values: DEFAULT, INHERITED, STATIC): The type of route this is:
    * startAddress `string`: The starting address for this route. This may also include a CIDR notation, in which case the end address must not be specified.
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### AppServicePlans_RebootWorker
Reboot a worker machine in an App Service plan.


```js
azure_web_appserviceplans.AppServicePlans_RebootWorker({
  "resourceGroupName": "",
  "name": "",
  "workerName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the App Service plan.
  * workerName **required** `string`: Name of worker machine, which typically starts with RD.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*



## Definitions

### AppServicePlanPatchResource
* AppServicePlanPatchResource `object`: ARM resource for a app service plan.
  * properties `object`: AppServicePlanPatchResource resource specific properties
    * adminSiteName `string`: App Service plan administration site.
    * geoRegion `string`: Geographical location for the App Service plan.
    * hostingEnvironmentProfile `object`: Specification for an App Service Environment to use for this resource.
      * id `string`: Resource ID of the App Service Environment.
      * name `string`: Name of the App Service Environment.
      * type `string`: Resource type of the App Service Environment.
    * isSpot `boolean`: If <code>true</code>, this App Service Plan owns spot instances.
    * maximumNumberOfWorkers `integer`: Maximum number of instances that can be assigned to this App Service plan.
    * name **required** `string`: Name for the App Service plan.
    * numberOfSites `integer`: Number of apps assigned to this App Service plan.
    * perSiteScaling `boolean`: If <code>true</code>, apps assigned to this App Service plan can be scaled independently.
    * provisioningState `string` (values: Succeeded, Failed, Canceled, InProgress, Deleting): Provisioning state of the App Service Environment.
    * reserved `boolean`: If Linux app service plan <code>true</code>, <code>false</code> otherwise.
    * resourceGroup `string`: Resource group of the App Service plan.
    * spotExpirationTime `string`: The time when the server farm expires. Valid only if it is a spot server farm.
    * status `string` (values: Ready, Pending, Creating): App Service plan status.
    * subscription `string`: App Service plan subscription.
    * targetWorkerCount `integer`: Scaling worker count.
    * targetWorkerSizeId `integer`: Scaling worker size ID.
    * workerTierName `string`: Target worker tier assigned to the App Service plan.
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### HybridConnectionCollection
* HybridConnectionCollection `object`: Collection of hostname bindings.
  * nextLink `string`: Link to next page of resources.
  * value **required** `array`: Collection of resources.
    * items `object`: Hybrid Connection contract. This is used to configure a Hybrid Connection.
      * properties `object`: HybridConnection resource specific properties
        * hostname `string`: The hostname of the endpoint.
        * port `integer`: The port of the endpoint.
        * relayArmUri `string`: The ARM URI to the Service Bus relay.
        * relayName `string`: The name of the Service Bus relay.
        * sendKeyName `string`: The name of the Service Bus key which has Send permissions. This is used to authenticate to Service Bus.
        * sendKeyValue `string`: The value of the Service Bus key. This is used to authenticate to Service Bus. In ARM this key will not be returned
        * serviceBusNamespace `string`: The name of the Service Bus namespace.
        * serviceBusSuffix `string`: The suffix for the service bus endpoint. By default this is .servicebus.windows.net
      * id `string`: Resource Id.
      * kind `string`: Kind of resource.
      * name `string`: Resource Name.
      * type `string`: Resource type.

### HybridConnectionLimits
* HybridConnectionLimits `object`: Hybrid Connection limits contract. This is used to return the plan limits of Hybrid Connections.
  * properties `object`: HybridConnectionLimits resource specific properties
    * current `integer`: The current number of Hybrid Connections.
    * maximum `integer`: The maximum number of Hybrid Connections allowed.
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### ResourceCollection
* ResourceCollection `object`: Collection of resources.
  * nextLink `string`: Link to next page of resources.
  * value **required** `array`: Collection of resources.
    * items `string`


