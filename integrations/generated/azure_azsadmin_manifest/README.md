# @datafire/azure_azsadmin_manifest

Client library for SubscriptionsManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_azsadmin_manifest
```
```js
let azure_azsadmin_manifest = require('@datafire/azure_azsadmin_manifest').create({
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

The Admin Subscriptions Management Client.

## Actions

### Manifests_List
Get a list of all manifests.


```js
azure_azsadmin_manifest.Manifests_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [ManifestList](#manifestlist)

### Manifests_Get
Get the specified manifest.


```js
azure_azsadmin_manifest.Manifests_Get({
  "subscriptionId": "",
  "api-version": "",
  "manifestName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.
  * manifestName **required** `string`: The manifest name.

#### Output
* output [Manifest](#manifest)



## Definitions

### ApiProfile
* ApiProfile `object`: Represents the API profile.
  * apiVersion `string`: The API version.
  * profileVersion `string`: The profile version.

### ApiProfileList
* ApiProfileList `object`: List of the API profiles.
  * nextLink `string`: URI to next page.
  * value `array`: List of the API profiles.
    * items [ApiProfile](#apiprofile)

### AuthorizationActionMapping
* AuthorizationActionMapping `object`: The linked resource access checks.
  * desired `string`: The desired action name.
  * original `string`: The original action name.

### AuthorizationActionMappingList
* AuthorizationActionMappingList `object`: List of the read-only actions.
  * nextLink `string`: URI to next page.
  * value `array`: List of the read-only actions.
    * items [AuthorizationActionMapping](#authorizationactionmapping)

### AzureResourceHydrationAccount
* AzureResourceHydrationAccount `object`: The API versions supported by the endpoint.
  * accountName `string`: The account name.
  * encryptedKey `string`: The encrypted key.
  * maxChildResourceConsistencyJobLimit `integer`: The next child resource consistency job limit.
  * subscriptionId `string`: The subscription identifier.

### AzureResourceHydrationAccountList
* AzureResourceHydrationAccountList `object`: List of the resource hydration accounts.
  * nextLink `string`: URI to next page.
  * value `array`: List of the resource hydration accounts.
    * items [AzureResourceHydrationAccount](#azureresourcehydrationaccount)

### ExtensionCollectionDefinition
* ExtensionCollectionDefinition `object`: The manifest extension collection definition.
  * extensions [ExtensionList](#extensionlist)
  * version `string`: The version of the format a.b[.c[.d]]. see System.Version documentation for more details.

### ExtensionDefinition
* ExtensionDefinition `object`: The data contract for specifying extensions in resource provider manifests.
  * name `string`: The name.
  * obsoleteBundlesBitmask `integer`: The obsolete bundles bitmask.
  * properties [ExtensionPropertiesDefinition](#extensionpropertiesdefinition)
  * resourceAccess [ResourceAccessList](#resourceaccesslist)
  * uri `string`: The Uri

### ExtensionList
* ExtensionList `object`: List of the extensions.
  * nextLink `string`: URI to next page.
  * value `array`: List of the extensions.
    * items [ExtensionDefinition](#extensiondefinition)

### ExtensionPropertiesDefinition
* ExtensionPropertiesDefinition `object`: The extension properties definition.
  * quotaCreateBladeName `string`: The quota create blade.
  * resourceProviderDashboardBladeName `string`: The resource provider dashboard blade.

### FanoutLinkedNotificationRule
* FanoutLinkedNotificationRule `object`: The fan-out linked notification rule.
  * actions `array`: The list of actions.
    * items `string`
  * endpoints [ResourceProviderEndpointList](#resourceproviderendpointlist)

### FanoutLinkedNotificationRuleList
* FanoutLinkedNotificationRuleList `object`: List of the linked notification rules.
  * nextLink `string`: URI to next page.
  * value `array`: List of the linked notification rules.
    * items [FanoutLinkedNotificationRule](#fanoutlinkednotificationrule)

### LinkedAccessCheck
* LinkedAccessCheck `object`: The linked resource access checks.
  * actionName `string`: The action name.
  * linkedAction `string`: The linked action.
  * linkedActionVerb `string`: The linked action verb.
  * linkedProperty `string`: The linked property.
  * linkedType `string`: The linked type.

### LinkedAccessCheckList
* LinkedAccessCheckList `object`: List of the linked access checks.
  * nextLink `string`: URI to next page.
  * value `array`: List of the linked access checks.
    * items [LinkedAccessCheck](#linkedaccesscheck)

### LinkedAction
* LinkedAction `string` (values: NotSpecified, Blocked, Validate, Enabled): The resource type linked action.

### LinkedNotificationRule
* LinkedNotificationRule `object`: The linked notification rule.
  * actions `array`: List of actions.
    * items `string`

### LinkedNotificationRuleList
* LinkedNotificationRuleList `object`: List of the linked notification rules.
  * nextLink `string`: URI to next page.
  * value `array`: List of the linked notification rules.
    * items [LinkedNotificationRule](#linkednotificationrule)

### LinkedOperation
* LinkedOperation `string` (values: None, CrossResourceGroupResourceMove, CrossSubscriptionResourceMove): The linked operation.

### LinkedOperationRule
* LinkedOperationRule `object`: The linked resource access checks.
  * dependsOnTypes `array`: The list of resource types this rule depends on.
    * items `string`
  * linkedAction [LinkedAction](#linkedaction)
  * linkedOperation [LinkedOperation](#linkedoperation)

### LinkedOperationRuleList
* LinkedOperationRuleList `object`: List of the linked operation rules.
  * nextLink `string`: URI to next page.
  * value `array`: List of the linked operation rules.
    * items [LinkedOperationRule](#linkedoperationrule)

### Manifest
* Manifest `object`: The manifest.
  * alwaysRoutable `boolean`: A value indicating whether the manifest is always routable by all subscriptions.
  * displayName `string`: The display name.
  * enabled `boolean`: A value indicating whether this resource provider is enabled.
  * extensionCollection [ExtensionCollectionDefinition](#extensioncollectiondefinition)
  * linkedNotificationRules [FanoutLinkedNotificationRuleList](#fanoutlinkednotificationrulelist)
  * metadata `object`: The metadata.
  * name `string`: The unique identifier of the registration.
  * namespace `string`: The namespace.
  * providerAuthorization [ResourceProviderAuthorization](#resourceproviderauthorization)
  * providerLocation `string`: The location of the provider.
  * providerType [ResourceProviderType](#resourceprovidertype)
  * provisioningState [ManifestProvisioningState](#manifestprovisioningstate)
  * resourceGroupName `string`: The name of the resource group.
  * resourceHydrationAccounts [AzureResourceHydrationAccountList](#azureresourcehydrationaccountlist)
  * resourceLocation `string`: The location of the resource.
  * resourceTags `object`: The resource tags.
  * resourceTypes [ResourceTypeList](#resourcetypelist)
  * routingResourceManagerType `string` (values: Default, Admin): Resource manager type.
  * subscriptionId `string`: The subscription ID under which RP is registered.

### ManifestList
* ManifestList `object`: List of manifests.
  * nextLink `string`: URI to next page.
  * value `array`: List of manifests.
    * items [Manifest](#manifest)

### ManifestProvisioningState
* ManifestProvisioningState `string` (values: Accepted, Creating, Deleting, Moving, Failed, Succeeded): The provisioning state.

### MarketplaceType
* MarketplaceType `string` (values: NotSpecified, AddOn): The type of marketplace behavior for the resource type.

### ResourceAccess
* ResourceAccess `object`: Extension Client Access Section.
  * name `string`: The name.
  * resource `string`: The resource.

### ResourceAccessList
* ResourceAccessList `object`: List of the resource access.
  * nextLink `string`: URI to next page.
  * value `array`: List of the resource access.
    * items [ResourceAccess](#resourceaccess)

### ResourceDeletionPolicy
* ResourceDeletionPolicy `string` (values: NotSpecified, Cascade): The resource deletion policy.

### ResourceProviderAuthorization
* ResourceProviderAuthorization `object`: The resource provider authorization information.
  * applicationId `string`: The application id of resource provider in AAD.
  * roleDefinitionId `string`: The role definition identifier against which a role assignment is created.

### ResourceProviderEndpoint
* ResourceProviderEndpoint `object`: The API versions supported by the endpoint.
  * apiVersions `array`: The API versions supported by the endpoint.
    * items `string`
  * enabled `boolean`: The enabled.
  * endpointUri `string`: The endpoint uri.
  * timeout `string`: The timeout.

### ResourceProviderEndpointList
* ResourceProviderEndpointList `object`: List of the resource provider endpoints.
  * nextLink `string`: URI to next page.
  * value `array`: List of the resource provider endpoints.
    * items [ResourceProviderEndpoint](#resourceproviderendpoint)

### ResourceProviderType
* ResourceProviderType `string` (values: NotSpecified, Internal, External, RegistrationFree, TenantOnly, AlwaysRoutable): The resource provider type.

### ResourceType
* ResourceType `object`: The resource type definition.
  * allowedUnauthorizedActions `array`: The allowed unauthorized actions.
    * items `string`
  * apiProfiles [ApiProfileList](#apiprofilelist)
  * authorizationActionMappings [AuthorizationActionMappingList](#authorizationactionmappinglist)
  * endpoints [ResourceProviderEndpointList](#resourceproviderendpointlist)
  * inGlobalLocation `boolean`: A value indicating whether the resource type is in global location.
  * linkedAccessChecks [LinkedAccessCheckList](#linkedaccesschecklist)
  * linkedNotificationRules [LinkedNotificationRuleList](#linkednotificationrulelist)
  * linkedOperationRules [LinkedOperationRuleList](#linkedoperationrulelist)
  * marketplaceType [MarketplaceType](#marketplacetype)
  * meteredResourceIds `array`: The metered resource ids.
    * items `string`
  * name `string`: The name.
  * resourceDeletionPolicy [ResourceDeletionPolicy](#resourcedeletionpolicy)
  * routingType [RoutingType](#routingtype)

### ResourceTypeList
* ResourceTypeList `object`: List of the resource types.
  * nextLink `string`: URI to next page.
  * value `array`: List of the resource types.
    * items [ResourceType](#resourcetype)

### RoutingType
* RoutingType `string` (values: Default, ProxyOnly, HostBased, Extension, Tenant, Fanout, LocationBased): The resource routing type.


