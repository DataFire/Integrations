# @datafire/azure_arm_notificationhubs

Client library for NotificationHubsManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_arm_notificationhubs
```
```js
let azure_arm_notificationhubs = require('@datafire/azure_arm_notificationhubs').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_arm_notificationhubs.Namespaces_CheckAvailability({
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}).then(data => {
  console.log(data);
});
```

## Description

Azure NotificationHub client

## Actions

### Namespaces_CheckAvailability
Checks the availability of the given service namespace across all Azure subscriptions. This is useful because the domain name is created based on the service namespace name.


```js
azure_arm_notificationhubs.Namespaces_CheckAvailability({
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * parameters **required** [CheckAvailabilityParameters](#checkavailabilityparameters)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [CheckAvailabilityResult](#checkavailabilityresult)

### Namespaces_ListAll
Lists all the available namespaces within the subscription irrespective of the resourceGroups.


```js
azure_arm_notificationhubs.Namespaces_ListAll({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [NamespaceListResult](#namespacelistresult)

### Namespaces_List
Lists the available namespaces within a resourceGroup.


```js
azure_arm_notificationhubs.Namespaces_List({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group. If resourceGroupName value is null the method lists all the namespaces within subscription
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [NamespaceListResult](#namespacelistresult)

### Namespaces_Delete
Deletes an existing namespace. This operation also removes all associated notificationHubs under the namespace.


```js
azure_arm_notificationhubs.Namespaces_Delete({
  "resourceGroupName": "",
  "namespaceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * namespaceName **required** `string`: The namespace name.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Namespaces_Get
Returns the description for the specified namespace.


```js
azure_arm_notificationhubs.Namespaces_Get({
  "resourceGroupName": "",
  "namespaceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * namespaceName **required** `string`: The namespace name.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [NamespaceResource](#namespaceresource)

### Namespaces_Patch
Patches the existing namespace


```js
azure_arm_notificationhubs.Namespaces_Patch({
  "resourceGroupName": "",
  "namespaceName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * namespaceName **required** `string`: The namespace name.
  * parameters **required** [NamespacePatchParameters](#namespacepatchparameters)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [NamespaceResource](#namespaceresource)

### Namespaces_CreateOrUpdate
Creates/Updates a service namespace. Once created, this namespace's resource manifest is immutable. This operation is idempotent.


```js
azure_arm_notificationhubs.Namespaces_CreateOrUpdate({
  "resourceGroupName": "",
  "namespaceName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * namespaceName **required** `string`: The namespace name.
  * parameters **required** [NamespaceCreateOrUpdateParameters](#namespacecreateorupdateparameters)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [NamespaceResource](#namespaceresource)

### Namespaces_ListAuthorizationRules
Gets the authorization rules for a namespace.


```js
azure_arm_notificationhubs.Namespaces_ListAuthorizationRules({
  "resourceGroupName": "",
  "namespaceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * namespaceName **required** `string`: The namespace name
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [SharedAccessAuthorizationRuleListResult](#sharedaccessauthorizationrulelistresult)

### Namespaces_DeleteAuthorizationRule
Deletes a namespace authorization rule


```js
azure_arm_notificationhubs.Namespaces_DeleteAuthorizationRule({
  "resourceGroupName": "",
  "namespaceName": "",
  "authorizationRuleName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * namespaceName **required** `string`: The namespace name.
  * authorizationRuleName **required** `string`: Authorization Rule Name.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Namespaces_GetAuthorizationRule
Gets an authorization rule for a namespace by name.


```js
azure_arm_notificationhubs.Namespaces_GetAuthorizationRule({
  "resourceGroupName": "",
  "namespaceName": "",
  "authorizationRuleName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * namespaceName **required** `string`: The namespace name
  * authorizationRuleName **required** `string`: Authorization rule name.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [SharedAccessAuthorizationRuleResource](#sharedaccessauthorizationruleresource)

### Namespaces_CreateOrUpdateAuthorizationRule
Creates an authorization rule for a namespace


```js
azure_arm_notificationhubs.Namespaces_CreateOrUpdateAuthorizationRule({
  "resourceGroupName": "",
  "namespaceName": "",
  "authorizationRuleName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * namespaceName **required** `string`: The namespace name.
  * authorizationRuleName **required** `string`: Aauthorization Rule Name.
  * parameters **required** [SharedAccessAuthorizationRuleCreateOrUpdateParameters](#sharedaccessauthorizationrulecreateorupdateparameters)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [SharedAccessAuthorizationRuleResource](#sharedaccessauthorizationruleresource)

### Namespaces_ListKeys
Gets the Primary and Secondary ConnectionStrings to the namespace 


```js
azure_arm_notificationhubs.Namespaces_ListKeys({
  "resourceGroupName": "",
  "namespaceName": "",
  "authorizationRuleName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * namespaceName **required** `string`: The namespace name.
  * authorizationRuleName **required** `string`: The connection string of the namespace for the specified authorizationRule.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ResourceListKeys](#resourcelistkeys)

### Namespaces_RegenerateKeys
Regenerates the Primary/Secondary Keys to the Namespace Authorization Rule


```js
azure_arm_notificationhubs.Namespaces_RegenerateKeys({
  "resourceGroupName": "",
  "namespaceName": "",
  "authorizationRuleName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * namespaceName **required** `string`: The namespace name.
  * authorizationRuleName **required** `string`: The connection string of the namespace for the specified authorizationRule.
  * parameters **required** [PolicykeyResource](#policykeyresource)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ResourceListKeys](#resourcelistkeys)

### NotificationHubs_CheckAvailability
Checks the availability of the given notificationHub in a namespace.


```js
azure_arm_notificationhubs.NotificationHubs_CheckAvailability({
  "resourceGroupName": "",
  "namespaceName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * namespaceName **required** `string`: The namespace name.
  * parameters **required** [CheckAvailabilityParameters](#checkavailabilityparameters)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [CheckAvailabilityResult](#checkavailabilityresult)

### NotificationHubs_List
Lists the notification hubs associated with a namespace.


```js
azure_arm_notificationhubs.NotificationHubs_List({
  "resourceGroupName": "",
  "namespaceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * namespaceName **required** `string`: The namespace name.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [NotificationHubListResult](#notificationhublistresult)

### NotificationHubs_Delete
Deletes a notification hub associated with a namespace.


```js
azure_arm_notificationhubs.NotificationHubs_Delete({
  "resourceGroupName": "",
  "namespaceName": "",
  "notificationHubName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * namespaceName **required** `string`: The namespace name.
  * notificationHubName **required** `string`: The notification hub name.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### NotificationHubs_Get
Lists the notification hubs associated with a namespace.


```js
azure_arm_notificationhubs.NotificationHubs_Get({
  "resourceGroupName": "",
  "namespaceName": "",
  "notificationHubName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * namespaceName **required** `string`: The namespace name.
  * notificationHubName **required** `string`: The notification hub name.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [NotificationHubResource](#notificationhubresource)

### NotificationHubs_CreateOrUpdate
Creates/Update a NotificationHub in a namespace.


```js
azure_arm_notificationhubs.NotificationHubs_CreateOrUpdate({
  "resourceGroupName": "",
  "namespaceName": "",
  "notificationHubName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * namespaceName **required** `string`: The namespace name.
  * notificationHubName **required** `string`: The notification hub name.
  * parameters **required** [NotificationHubCreateOrUpdateParameters](#notificationhubcreateorupdateparameters)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [NotificationHubResource](#notificationhubresource)

### NotificationHubs_ListAuthorizationRules
Gets the authorization rules for a NotificationHub.


```js
azure_arm_notificationhubs.NotificationHubs_ListAuthorizationRules({
  "resourceGroupName": "",
  "namespaceName": "",
  "notificationHubName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * namespaceName **required** `string`: The namespace name
  * notificationHubName **required** `string`: The notification hub name.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [SharedAccessAuthorizationRuleListResult](#sharedaccessauthorizationrulelistresult)

### NotificationHubs_DeleteAuthorizationRule
Deletes a notificationHub authorization rule


```js
azure_arm_notificationhubs.NotificationHubs_DeleteAuthorizationRule({
  "resourceGroupName": "",
  "namespaceName": "",
  "notificationHubName": "",
  "authorizationRuleName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * namespaceName **required** `string`: The namespace name.
  * notificationHubName **required** `string`: The notification hub name.
  * authorizationRuleName **required** `string`: Authorization Rule Name.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### NotificationHubs_GetAuthorizationRule
Gets an authorization rule for a NotificationHub by name.


```js
azure_arm_notificationhubs.NotificationHubs_GetAuthorizationRule({
  "resourceGroupName": "",
  "namespaceName": "",
  "notificationHubName": "",
  "authorizationRuleName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * namespaceName **required** `string`: The namespace name
  * notificationHubName **required** `string`: The notification hub name.
  * authorizationRuleName **required** `string`: authorization rule name.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [SharedAccessAuthorizationRuleResource](#sharedaccessauthorizationruleresource)

### NotificationHubs_CreateOrUpdateAuthorizationRule
Creates/Updates an authorization rule for a NotificationHub


```js
azure_arm_notificationhubs.NotificationHubs_CreateOrUpdateAuthorizationRule({
  "resourceGroupName": "",
  "namespaceName": "",
  "notificationHubName": "",
  "authorizationRuleName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * namespaceName **required** `string`: The namespace name.
  * notificationHubName **required** `string`: The notification hub name.
  * authorizationRuleName **required** `string`: Authorization Rule Name.
  * parameters **required** [SharedAccessAuthorizationRuleCreateOrUpdateParameters](#sharedaccessauthorizationrulecreateorupdateparameters)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [SharedAccessAuthorizationRuleResource](#sharedaccessauthorizationruleresource)

### NotificationHubs_ListKeys
Gets the Primary and Secondary ConnectionStrings to the NotificationHub 


```js
azure_arm_notificationhubs.NotificationHubs_ListKeys({
  "resourceGroupName": "",
  "namespaceName": "",
  "notificationHubName": "",
  "authorizationRuleName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * namespaceName **required** `string`: The namespace name.
  * notificationHubName **required** `string`: The notification hub name.
  * authorizationRuleName **required** `string`: The connection string of the NotificationHub for the specified authorizationRule.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ResourceListKeys](#resourcelistkeys)

### NotificationHubs_RegenerateKeys
Regenerates the Primary/Secondary Keys to the NotificationHub Authorization Rule


```js
azure_arm_notificationhubs.NotificationHubs_RegenerateKeys({
  "resourceGroupName": "",
  "namespaceName": "",
  "notificationHubName": "",
  "authorizationRuleName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * namespaceName **required** `string`: The namespace name.
  * notificationHubName **required** `string`: The notification hub name.
  * authorizationRuleName **required** `string`: The connection string of the NotificationHub for the specified authorizationRule.
  * parameters **required** [PolicykeyResource](#policykeyresource)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ResourceListKeys](#resourcelistkeys)

### NotificationHubs_GetPnsCredentials
Lists the PNS Credentials associated with a notification hub .


```js
azure_arm_notificationhubs.NotificationHubs_GetPnsCredentials({
  "resourceGroupName": "",
  "namespaceName": "",
  "notificationHubName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * namespaceName **required** `string`: The namespace name.
  * notificationHubName **required** `string`: The notification hub name.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [PnsCredentialsResource](#pnscredentialsresource)



## Definitions

### AdmCredential
* AdmCredential `object`: Description of a NotificationHub AdmCredential.
  * properties [AdmCredentialProperties](#admcredentialproperties)

### AdmCredentialProperties
* AdmCredentialProperties `object`: Description of a NotificationHub AdmCredential.
  * authTokenUrl `string`: The URL of the authorization token.
  * clientId `string`: The client identifier.
  * clientSecret `string`: The credential secret access key.

### ApnsCredential
* ApnsCredential `object`: Description of a NotificationHub ApnsCredential.
  * properties [ApnsCredentialProperties](#apnscredentialproperties)

### ApnsCredentialProperties
* ApnsCredentialProperties `object`: Description of a NotificationHub ApnsCredential.
  * apnsCertificate `string`: The APNS certificate.
  * certificateKey `string`: The certificate key.
  * endpoint `string`: The endpoint of this credential.
  * thumbprint `string`: The Apns certificate Thumbprint

### BaiduCredential
* BaiduCredential `object`: Description of a NotificationHub BaiduCredential.
  * properties [BaiduCredentialProperties](#baiducredentialproperties)

### BaiduCredentialProperties
* BaiduCredentialProperties `object`: Description of a NotificationHub BaiduCredential.
  * baiduApiKey `string`: Baidu Api Key.
  * baiduEndPoint `string`: Baidu Endpoint.
  * baiduSecretKey `string`: Baidu Secret Key

### CheckAvailabilityParameters
* CheckAvailabilityParameters `object`: Parameters supplied to the Check Name Availability for Namespace and NotificationHubs.
  * id `string`: Resource Id
  * isAvailiable `boolean`: True if the name is available and can be used to create new Namespace/NotificationHub. Otherwise false.
  * location **required** `string`: Resource location
  * name **required** `string`: Resource name
  * sku [Sku](#sku)
  * tags `object`: Resource tags
  * type `string`: Resource type

### CheckAvailabilityResult
* CheckAvailabilityResult `object`: Description of a CheckAvailibility resource.
  * isAvailiable `boolean`: True if the name is available and can be used to create new Namespace/NotificationHub. Otherwise false.
  * id `string`: Resource Id
  * location **required** `string`: Resource location
  * name `string`: Resource name
  * sku [Sku](#sku)
  * tags `object`: Resource tags
  * type `string`: Resource type

### GcmCredential
* GcmCredential `object`: Description of a NotificationHub GcmCredential.
  * properties [GcmCredentialProperties](#gcmcredentialproperties)

### GcmCredentialProperties
* GcmCredentialProperties `object`: Description of a NotificationHub GcmCredential.
  * gcmEndpoint `string`: The GCM endpoint.
  * googleApiKey `string`: The Google API key.

### MpnsCredential
* MpnsCredential `object`: Description of a NotificationHub MpnsCredential.
  * properties [MpnsCredentialProperties](#mpnscredentialproperties)

### MpnsCredentialProperties
* MpnsCredentialProperties `object`: Description of a NotificationHub MpnsCredential.
  * certificateKey `string`: The certificate key for this credential.
  * mpnsCertificate `string`: The MPNS certificate.
  * thumbprint `string`: The Mpns certificate Thumbprint

### NamespaceCreateOrUpdateParameters
* NamespaceCreateOrUpdateParameters `object`: Parameters supplied to the CreateOrUpdate Namespace operation.
  * properties [NamespaceProperties](#namespaceproperties)
  * id `string`: Resource Id
  * location **required** `string`: Resource location
  * name `string`: Resource name
  * sku [Sku](#sku)
  * tags `object`: Resource tags
  * type `string`: Resource type

### NamespaceListResult
* NamespaceListResult `object`: The response of the List Namespace operation.
  * nextLink `string`: Link to the next set of results. Not empty if Value contains incomplete list of Namespaces
  * value `array`: Result of the List Namespace operation.
    * items [NamespaceResource](#namespaceresource)

### NamespacePatchParameters
* NamespacePatchParameters `object`: Parameters supplied to the Patch Namespace operation.
  * sku [Sku](#sku)
  * tags `object`: Resource tags

### NamespaceProperties
* NamespaceProperties `object`: Namespace properties.
  * createdAt `string`: The time the namespace was created.
  * critical `boolean`: Whether or not the namespace is set as Critical.
  * enabled `boolean`: Whether or not the namespace is currently enabled.
  * name `string`: The name of the namespace.
  * namespaceType `string` (values: Messaging, NotificationHub): The namespace type.
  * provisioningState `string`: Provisioning state of the Namespace.
  * region `string`: Specifies the targeted region in which the namespace should be created. It can be any of the following values: Australia EastAustralia SoutheastCentral USEast USEast US 2West USNorth Central USSouth Central USEast AsiaSoutheast AsiaBrazil SouthJapan EastJapan WestNorth EuropeWest Europe
  * scaleUnit `string`: ScaleUnit where the namespace gets created
  * serviceBusEndpoint `string`: Endpoint you can use to perform NotificationHub operations.
  * status `string`: Status of the namespace. It can be any of these values:1 = Created/Active2 = Creating3 = Suspended4 = Deleting
  * subscriptionId `string`: The Id of the Azure subscription associated with the namespace.

### NamespaceResource
* NamespaceResource `object`: Description of a Namespace resource.
  * properties [NamespaceProperties](#namespaceproperties)
  * id `string`: Resource Id
  * location **required** `string`: Resource location
  * name `string`: Resource name
  * sku [Sku](#sku)
  * tags `object`: Resource tags
  * type `string`: Resource type

### NotificationHubCreateOrUpdateParameters
* NotificationHubCreateOrUpdateParameters `object`: Parameters supplied to the CreateOrUpdate NotificationHub operation.
  * properties **required** [NotificationHubProperties](#notificationhubproperties)
  * id `string`: Resource Id
  * location **required** `string`: Resource location
  * name `string`: Resource name
  * sku [Sku](#sku)
  * tags `object`: Resource tags
  * type `string`: Resource type

### NotificationHubListResult
* NotificationHubListResult `object`: The response of the List NotificationHub operation.
  * nextLink `string`: Link to the next set of results. Not empty if Value contains incomplete list of NotificationHub
  * value `array`: Result of the List NotificationHub operation.
    * items [NotificationHubResource](#notificationhubresource)

### NotificationHubProperties
* NotificationHubProperties `object`: NotificationHub properties.
  * admCredential [AdmCredential](#admcredential)
  * apnsCredential [ApnsCredential](#apnscredential)
  * authorizationRules `array`: The AuthorizationRules of the created NotificationHub
    * items [SharedAccessAuthorizationRuleProperties](#sharedaccessauthorizationruleproperties)
  * baiduCredential [BaiduCredential](#baiducredential)
  * gcmCredential [GcmCredential](#gcmcredential)
  * mpnsCredential [MpnsCredential](#mpnscredential)
  * name `string`: The NotificationHub name.
  * registrationTtl `string`: The RegistrationTtl of the created NotificationHub
  * wnsCredential [WnsCredential](#wnscredential)

### NotificationHubResource
* NotificationHubResource `object`: Description of a NotificationHub Resource.
  * properties [NotificationHubProperties](#notificationhubproperties)
  * id `string`: Resource Id
  * location **required** `string`: Resource location
  * name `string`: Resource name
  * sku [Sku](#sku)
  * tags `object`: Resource tags
  * type `string`: Resource type

### PnsCredentialsProperties
* PnsCredentialsProperties `object`: Description of a NotificationHub PNS Credentials.
  * admCredential [AdmCredential](#admcredential)
  * apnsCredential [ApnsCredential](#apnscredential)
  * baiduCredential [BaiduCredential](#baiducredential)
  * gcmCredential [GcmCredential](#gcmcredential)
  * mpnsCredential [MpnsCredential](#mpnscredential)
  * wnsCredential [WnsCredential](#wnscredential)

### PnsCredentialsResource
* PnsCredentialsResource `object`: Description of a NotificationHub PNS Credentials.
  * properties [PnsCredentialsProperties](#pnscredentialsproperties)
  * id `string`: Resource Id
  * location **required** `string`: Resource location
  * name `string`: Resource name
  * sku [Sku](#sku)
  * tags `object`: Resource tags
  * type `string`: Resource type

### PolicykeyResource
* PolicykeyResource `object`: Namespace/NotificationHub Regenerate Keys
  * policyKey `string`: Name of the key that has to be regenerated for the Namespace/Notification Hub Authorization Rule. The value can be Primary Key/Secondary Key.

### Resource
* Resource `object`
  * id `string`: Resource Id
  * location **required** `string`: Resource location
  * name `string`: Resource name
  * sku [Sku](#sku)
  * tags `object`: Resource tags
  * type `string`: Resource type

### ResourceListKeys
* ResourceListKeys `object`: Namespace/NotificationHub Connection String
  * keyName `string`: KeyName of the created AuthorizationRule
  * primaryConnectionString `string`: PrimaryConnectionString of the AuthorizationRule.
  * primaryKey `string`: PrimaryKey of the created AuthorizationRule.
  * secondaryConnectionString `string`: SecondaryConnectionString of the created AuthorizationRule
  * secondaryKey `string`: SecondaryKey of the created AuthorizationRule

### SharedAccessAuthorizationRuleCreateOrUpdateParameters
* SharedAccessAuthorizationRuleCreateOrUpdateParameters `object`: Parameters supplied to the CreateOrUpdate Namespace AuthorizationRules.
  * properties **required** [SharedAccessAuthorizationRuleProperties](#sharedaccessauthorizationruleproperties)
  * id `string`: Resource Id
  * location **required** `string`: Resource location
  * name `string`: Resource name
  * sku [Sku](#sku)
  * tags `object`: Resource tags
  * type `string`: Resource type

### SharedAccessAuthorizationRuleListResult
* SharedAccessAuthorizationRuleListResult `object`: The response of the List Namespace operation.
  * nextLink `string`: Link to the next set of results. Not empty if Value contains incomplete list of AuthorizationRules
  * value `array`: Result of the List AuthorizationRules operation.
    * items [SharedAccessAuthorizationRuleResource](#sharedaccessauthorizationruleresource)

### SharedAccessAuthorizationRuleProperties
* SharedAccessAuthorizationRuleProperties `object`: SharedAccessAuthorizationRule properties.
  * rights `array`: The rights associated with the rule.
    * items `string` (values: Manage, Send, Listen)

### SharedAccessAuthorizationRuleResource
* SharedAccessAuthorizationRuleResource `object`: Description of a Namespace AuthorizationRules.
  * properties [SharedAccessAuthorizationRuleProperties](#sharedaccessauthorizationruleproperties)
  * id `string`: Resource Id
  * location **required** `string`: Resource location
  * name `string`: Resource name
  * sku [Sku](#sku)
  * tags `object`: Resource tags
  * type `string`: Resource type

### Sku
* Sku `object`: The Sku description for a namespace
  * capacity `integer`: The capacity of the resource
  * family `string`: The Sku Family
  * name **required** `string` (values: Free, Basic, Standard): Name of the notification hub sku
  * size `string`: The Sku size
  * tier `string`: The tier of particular sku

### SubResource
* SubResource `object`
  * id `string`: Resource Id

### WnsCredential
* WnsCredential `object`: Description of a NotificationHub WnsCredential.
  * properties [WnsCredentialProperties](#wnscredentialproperties)

### WnsCredentialProperties
* WnsCredentialProperties `object`: Description of a NotificationHub WnsCredential.
  * packageSid `string`: The package ID for this credential.
  * secretKey `string`: The secret key.
  * windowsLiveEndpoint `string`: The Windows Live endpoint.


