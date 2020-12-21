# @datafire/azure_signalr

Client library for SignalRManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_signalr
```
```js
let azure_signalr = require('@datafire/azure_signalr').create({
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

REST API for Azure SignalR Service

## Actions

### Operations_List
Lists all of the available REST API operations of the Microsoft.SignalRService provider.


```js
azure_signalr.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.

#### Output
* output [OperationList](#operationlist)

### SignalR_ListBySubscription
Handles requests to list all resources in a subscription.


```js
azure_signalr.SignalR_ListBySubscription({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription Id which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [SignalRResourceList](#signalrresourcelist)

### SignalR_CheckNameAvailability
Checks that the SignalR name is valid and is not already in use.


```js
azure_signalr.SignalR_CheckNameAvailability({
  "location": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * location **required** `string`: the region
  * parameters [NameAvailabilityParameters](#nameavailabilityparameters)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription Id which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [NameAvailability](#nameavailability)

### Usages_List
List usage quotas for Azure SignalR service by location.


```js
azure_signalr.Usages_List({
  "location": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * location **required** `string`: the location like "eastus"
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription Id which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [SignalRUsageList](#signalrusagelist)

### SignalR_ListByResourceGroup
Handles requests to list all resources in a resource group.


```js
azure_signalr.SignalR_ListByResourceGroup({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription Id which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.

#### Output
* output [SignalRResourceList](#signalrresourcelist)

### SignalR_ListKeys
Get the access keys of the SignalR resource.


```js
azure_signalr.SignalR_ListKeys({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription Id which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * resourceName **required** `string`: The name of the SignalR resource.

#### Output
* output [SignalRKeys](#signalrkeys)

### SignalR_RegenerateKey
Regenerate SignalR service access key. PrimaryKey and SecondaryKey cannot be regenerated at the same time.


```js
azure_signalr.SignalR_RegenerateKey({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceName": ""
}, context)
```

#### Input
* input `object`
  * parameters [RegenerateKeyParameters](#regeneratekeyparameters)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription Id which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * resourceName **required** `string`: The name of the SignalR resource.

#### Output
* output [SignalRKeys](#signalrkeys)

### SignalR_Delete
Operation to delete a SignalR service.


```js
azure_signalr.SignalR_Delete({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription Id which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * resourceName **required** `string`: The name of the SignalR resource.

#### Output
*Output schema unknown*

### SignalR_Get
Get the SignalR service and its properties.


```js
azure_signalr.SignalR_Get({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription Id which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * resourceName **required** `string`: The name of the SignalR resource.

#### Output
* output [SignalRResource](#signalrresource)

### SignalR_Update
Operation to update an exiting SignalR service.


```js
azure_signalr.SignalR_Update({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceName": ""
}, context)
```

#### Input
* input `object`
  * parameters [SignalRUpdateParameters](#signalrupdateparameters)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription Id which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * resourceName **required** `string`: The name of the SignalR resource.

#### Output
* output [SignalRResource](#signalrresource)

### SignalR_CreateOrUpdate
Create a new SignalR service and update an exiting SignalR service.


```js
azure_signalr.SignalR_CreateOrUpdate({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceName": ""
}, context)
```

#### Input
* input `object`
  * parameters [SignalRCreateParameters](#signalrcreateparameters)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription Id which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * resourceName **required** `string`: The name of the SignalR resource.

#### Output
* output [SignalRResource](#signalrresource)

### SignalR_Restart
Operation to restart a SignalR service.


```js
azure_signalr.SignalR_Restart({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription Id which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * resourceName **required** `string`: The name of the SignalR resource.

#### Output
*Output schema unknown*



## Definitions

### Dimension
* Dimension `object`: Specifications of the Dimension of metrics.
  * displayName `string`: Localized friendly display name of the dimension.
  * internalName `string`: Name of the dimension as it appears in MDM.
  * name `string`: The public facing name of the dimension.
  * toBeExportedForShoebox `boolean`: A Boolean flag indicating whether this dimension should be included for the shoebox export scenario.

### ErrorResponse
* ErrorResponse `object`: Contains information about an API error.
  * error [ErrorResponseBody](#errorresponsebody)

### ErrorResponseBody
* ErrorResponseBody `object`: Describes a particular API error with an error code and a message.
  * code **required** `string`: An error code that describes the error condition more precisely than an HTTP status code. 
  * details `array`: Contains nested errors that are related to this error.
    * items [ErrorResponseBody](#errorresponsebody)
  * message **required** `string`: A message that describes the error in detail and provides debugging information.
  * target `string`: The target of the particular error (for example, the name of the property in error).

### LogSpecification
* LogSpecification `object`: Specifications of the Logs for Azure Monitoring.
  * displayName `string`: Localized friendly display name of the log.
  * name `string`: Name of the log.

### MetricSpecification
* MetricSpecification `object`: Specifications of the Metrics for Azure Monitoring.
  * aggregationType `string`: Only provide one value for this field. Valid values: Average, Minimum, Maximum, Total, Count.
  * category `string`: The name of the metric category that the metric belongs to. A metric can only belong to a single category.
  * dimensions `array`: The dimensions of the metrics.
    * items [Dimension](#dimension)
  * displayDescription `string`: Localized friendly description of the metric.
  * displayName `string`: Localized friendly display name of the metric.
  * fillGapWithZero `string`: Optional. If set to true, then zero will be returned for time duration where no metric is emitted/published. 
  * name `string`: Name of the metric.
  * unit `string`: The unit that makes sense for the metric.

### NameAvailability
* NameAvailability `object`: Result of the request to check name availability. It contains a flag and possible reason of failure.
  * message `string`: The message of the operation.
  * nameAvailable `boolean`: Indicates whether the name is available or not.
  * reason `string`: The reason of the availability. Required if name is not available.

### NameAvailabilityParameters
* NameAvailabilityParameters `object`: Data POST-ed to the nameAvailability action
  * name **required** `string`: The SignalR service name to validate. e.g."my-signalR-name-here"
  * type **required** `string`: The resource type. Should be always "Microsoft.SignalRService/SignalR".

### Operation
* Operation `object`: REST API operation supported by SignalR resource provider.
  * display [OperationDisplay](#operationdisplay)
  * name `string`: Name of the operation with format: {provider}/{resource}/{operation}
  * origin `string`: Optional. The intended executor of the operation; governs the display of the operation in the RBAC UX and the audit logs UX.
  * properties [OperationProperties](#operationproperties)

### OperationDisplay
* OperationDisplay `object`: The object that describes a operation.
  * description `string`: The localized friendly description for the operation
  * operation `string`: The localized friendly name for the operation.
  * provider `string`: Friendly name of the resource provider
  * resource `string`: Resource type on which the operation is performed.

### OperationList
* OperationList `object`: Result of the request to list REST API operations. It contains a list of operations.
  * nextLink `string`: The URL the client should use to fetch the next page (per server side paging).
  * value `array`: List of operations supported by the resource provider.
    * items [Operation](#operation)

### OperationProperties
* OperationProperties `object`: Extra Operation properties.
  * serviceSpecification [ServiceSpecification](#servicespecification)

### RegenerateKeyParameters
* RegenerateKeyParameters `object`: Parameters describes the request to regenerate access keys
  * keyType `string` (values: Primary, Secondary): The keyType to regenerate. Must be either 'primary' or 'secondary'(case-insensitive).

### Resource
* Resource `object`: The core properties of ARM resources.
  * id `string`: Fully qualified resource Id for the resource.
  * name `string`: The name of the resource.
  * type `string`: The type of the service - e.g. "Microsoft.SignalRService/SignalR"

### ResourceSku
* ResourceSku `object`: The billing information of the SignalR resource.
  * capacity `integer`: Optional, integer. The unit count of SignalR resource. 1 by default.
  * family `string`: Optional string. For future use.
  * name **required** `string`: The name of the SKU. Required.
  * size `string`: Optional string. For future use.
  * tier `string` (values: Free, Basic, Standard, Premium): Optional tier of this particular SKU. 'Standard' or 'Free'. 

### ServiceSpecification
* ServiceSpecification `object`: An object that describes a specification.
  * logSpecifications `array`: Specifications of the Logs for Azure Monitoring.
    * items [LogSpecification](#logspecification)
  * metricSpecifications `array`: Specifications of the Metrics for Azure Monitoring.
    * items [MetricSpecification](#metricspecification)

### SignalRCorsSettings
* SignalRCorsSettings `object`: Cross-Origin Resource Sharing (CORS) settings.
  * allowedOrigins `array`: Gets or sets the list of origins that should be allowed to make cross-origin calls (for example: http://example.com:12345). Use "*" to allow all. If omitted, allow all by default.
    * items `string`

### SignalRCreateOrUpdateProperties
* SignalRCreateOrUpdateProperties `object`: Settings used to provision or configure the resource.
  * cors [SignalRCorsSettings](#signalrcorssettings)
  * features `array`: List of SignalR featureFlags. e.g. ServiceMode.
    * items [SignalRFeature](#signalrfeature)
  * hostNamePrefix `string`: Prefix for the hostName of the SignalR service. Retained for future use.

### SignalRCreateParameters
* SignalRCreateParameters `object`: Parameters for SignalR service create/update operation.
  * location **required** `string`: Azure GEO region: e.g. West US | East US | North Central US | South Central US | West Europe | North Europe | East Asia | Southeast Asia | etc. 
  * properties [SignalRCreateOrUpdateProperties](#signalrcreateorupdateproperties)
  * sku [ResourceSku](#resourcesku)
  * tags `object`: A list of key value pairs that describe the resource.

### SignalRFeature
* SignalRFeature `object`: Feature of a SignalR resource, which controls the SignalR runtime behavior.
  * flag **required** `string` (values: ServiceMode, EnableConnectivityLogs): FeatureFlags is the supported features of Azure SignalR service.
  * properties `object`: Optional properties related to this feature.
  * value **required** `string`: Value of the feature flag. See Azure SignalR service document https://docs.microsoft.com/azure/azure-signalr/ for allowed values.

### SignalRKeys
* SignalRKeys `object`: A class represents the access keys of SignalR service.
  * primaryConnectionString `string`: SignalR connection string constructed via the primaryKey
  * primaryKey `string`: The primary access key.
  * secondaryConnectionString `string`: SignalR connection string constructed via the secondaryKey
  * secondaryKey `string`: The secondary access key.

### SignalRProperties
* SignalRProperties `object`: A class that describes the properties of the SignalR service that should contain more read-only properties than AzSignalR.Models.SignalRCreateOrUpdateProperties
  * externalIP `string`: The publicly accessible IP of the SignalR service.
  * hostName `string`: FQDN of the SignalR service instance. Format: xxx.service.signalr.net
  * provisioningState `string` (values: Unknown, Succeeded, Failed, Canceled, Running, Creating, Updating, Deleting, Moving): Provisioning state of the resource.
  * publicPort `integer`: The publicly accessible port of the SignalR service which is designed for browser/client side usage.
  * serverPort `integer`: The publicly accessible port of the SignalR service which is designed for customer server side usage.
  * version `string`: Version of the SignalR resource. Probably you need the same or higher version of client SDKs.
  * cors [SignalRCorsSettings](#signalrcorssettings)
  * features `array`: List of SignalR featureFlags. e.g. ServiceMode.
    * items [SignalRFeature](#signalrfeature)
  * hostNamePrefix `string`: Prefix for the hostName of the SignalR service. Retained for future use.

### SignalRResource
* SignalRResource `object`: A class represent a SignalR service resource.
  * id `string`: Fully qualified resource Id for the resource.
  * name `string`: The name of the resource.
  * properties [SignalRProperties](#signalrproperties)
  * sku [ResourceSku](#resourcesku)
  * type `string`: The type of the service - e.g. "Microsoft.SignalRService/SignalR"
  * location `string`: The GEO location of the SignalR service. e.g. West US | East US | North Central US | South Central US.
  * tags `object`: Tags of the service which is a list of key value pairs that describe the resource.
  * id `string`: Fully qualified resource Id for the resource.
  * name `string`: The name of the resource.
  * type `string`: The type of the service - e.g. "Microsoft.SignalRService/SignalR"

### SignalRResourceList
* SignalRResourceList `object`: Object that includes an array of SignalR services and a possible link for next set.
  * nextLink `string`: The URL the client should use to fetch the next page (per server side paging).
  * value `array`: List of SignalR services
    * items [SignalRResource](#signalrresource)

### SignalRUpdateParameters
* SignalRUpdateParameters `object`: Parameters for SignalR service update operation
  * properties [SignalRCreateOrUpdateProperties](#signalrcreateorupdateproperties)
  * sku [ResourceSku](#resourcesku)
  * tags `object`: A list of key value pairs that describe the resource.

### SignalRUsage
* SignalRUsage `object`: Object that describes a specific usage of SignalR resources.
  * currentValue `integer`: Current value for the usage quota.
  * id `string`: Fully qualified ARM resource id
  * limit `integer`: The maximum permitted value for the usage quota. If there is no limit, this value will be -1.
  * name [SignalRUsageName](#signalrusagename)
  * unit `string`: Representing the units of the usage quota. Possible values are: Count, Bytes, Seconds, Percent, CountPerSecond, BytesPerSecond.

### SignalRUsageList
* SignalRUsageList `object`: Object that includes an array of SignalR resource usages and a possible link for next set.
  * nextLink `string`: The URL the client should use to fetch the next page (per server side paging).
  * value `array`: List of SignalR usages
    * items [SignalRUsage](#signalrusage)

### SignalRUsageName
* SignalRUsageName `object`: Localizable String object containing the name and a localized value.
  * localizedValue `string`: Localized name of the usage.
  * value `string`: The identifier of the usage.

### TrackedResource
* TrackedResource `object`: The resource model definition for a ARM tracked top level resource.
  * location `string`: The GEO location of the SignalR service. e.g. West US | East US | North Central US | South Central US.
  * tags `object`: Tags of the service which is a list of key value pairs that describe the resource.
  * id `string`: Fully qualified resource Id for the resource.
  * name `string`: The name of the resource.
  * type `string`: The type of the service - e.g. "Microsoft.SignalRService/SignalR"


