# @datafire/azure_security

Client library for Security Center

## Installation and Usage
```bash
npm install --save @datafire/azure_security
```
```js
let azure_security = require('@datafire/azure_security').create({
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

API spec for Microsoft.Security (Azure Security Center) resource provider

## Actions

### AutoProvisioningSettings_List
Exposes the auto provisioning settings of the subscriptions


```js
azure_security.AutoProvisioningSettings_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2017-08-01-preview): API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID

#### Output
* output [AutoProvisioningSettingList](#autoprovisioningsettinglist)

### AutoProvisioningSettings_Get
Details of a specific setting


```js
azure_security.AutoProvisioningSettings_Get({
  "api-version": "",
  "subscriptionId": "",
  "settingName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2017-08-01-preview): API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID
  * settingName **required** `string`: Auto provisioning setting key

#### Output
* output [AutoProvisioningSetting](#autoprovisioningsetting)

### AutoProvisioningSettings_Create
Details of a specific setting


```js
azure_security.AutoProvisioningSettings_Create({
  "api-version": "",
  "subscriptionId": "",
  "settingName": "",
  "setting": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2017-08-01-preview): API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID
  * settingName **required** `string`: Auto provisioning setting key
  * setting **required** [AutoProvisioningSetting](#autoprovisioningsetting)

#### Output
* output [AutoProvisioningSetting](#autoprovisioningsetting)

### Pricings_List
Security pricing configurations in the subscription


```js
azure_security.Pricings_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2017-08-01-preview): API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID

#### Output
* output [PricingList](#pricinglist)

### Pricings_GetSubscriptionPricing
Security pricing configuration in the subscriptionSecurity pricing configuration in the subscription


```js
azure_security.Pricings_GetSubscriptionPricing({
  "api-version": "",
  "subscriptionId": "",
  "pricingName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2017-08-01-preview): API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID
  * pricingName **required** `string`: name of the pricing configuration

#### Output
* output [Pricing](#pricing)

### Pricings_UpdateSubscriptionPricing
Security pricing configuration in the subscription


```js
azure_security.Pricings_UpdateSubscriptionPricing({
  "api-version": "",
  "subscriptionId": "",
  "pricingName": "",
  "pricing": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2017-08-01-preview): API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID
  * pricingName **required** `string`: name of the pricing configuration
  * pricing **required** [Pricing](#pricing)

#### Output
* output [Pricing](#pricing)

### SecurityContacts_List
Security contact configurations for the subscription


```js
azure_security.SecurityContacts_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2017-08-01-preview): API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID

#### Output
* output [SecurityContactList](#securitycontactlist)

### SecurityContacts_Delete
Security contact configurations for the subscription


```js
azure_security.SecurityContacts_Delete({
  "api-version": "",
  "subscriptionId": "",
  "securityContactName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2017-08-01-preview): API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID
  * securityContactName **required** `string`: Name of the security contact object

#### Output
*Output schema unknown*

### SecurityContacts_Get
Security contact configurations for the subscription


```js
azure_security.SecurityContacts_Get({
  "api-version": "",
  "subscriptionId": "",
  "securityContactName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2017-08-01-preview): API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID
  * securityContactName **required** `string`: Name of the security contact object

#### Output
* output [SecurityContact](#securitycontact)

### SecurityContacts_Update
Security contact configurations for the subscription


```js
azure_security.SecurityContacts_Update({
  "api-version": "",
  "subscriptionId": "",
  "securityContactName": "",
  "securityContact": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2017-08-01-preview): API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID
  * securityContactName **required** `string`: Name of the security contact object
  * securityContact **required** [SecurityContact](#securitycontact)

#### Output
* output [SecurityContact](#securitycontact)

### SecurityContacts_Create
Security contact configurations for the subscription


```js
azure_security.SecurityContacts_Create({
  "api-version": "",
  "subscriptionId": "",
  "securityContactName": "",
  "securityContact": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2017-08-01-preview): API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID
  * securityContactName **required** `string`: Name of the security contact object
  * securityContact **required** [SecurityContact](#securitycontact)

#### Output
* output [SecurityContact](#securitycontact)

### Settings_List
Settings about different configurations in security center


```js
azure_security.Settings_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2017-08-01-preview): API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID

#### Output
* output [SettingsList](#settingslist)

### Settings_Get
Settings of different configurations in security center


```js
azure_security.Settings_Get({
  "api-version": "",
  "subscriptionId": "",
  "settingName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2017-08-01-preview): API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID
  * settingName **required** `string` (values: MCAS, WDATP): Name of setting: (MCAS/WDATP)

#### Output
* output [Setting](#setting)

### Settings_Update
updating settings about different configurations in security center


```js
azure_security.Settings_Update({
  "api-version": "",
  "subscriptionId": "",
  "settingName": "",
  "setting": {
    "kind": ""
  }
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2017-08-01-preview): API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID
  * settingName **required** `string` (values: MCAS, WDATP): Name of setting: (MCAS/WDATP)
  * setting **required** [Setting](#setting)

#### Output
* output [Setting](#setting)

### WorkspaceSettings_List
Settings about where we should store your security data and logs. If the result is empty, it means that no custom-workspace configuration was set


```js
azure_security.WorkspaceSettings_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2017-08-01-preview): API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID

#### Output
* output [WorkspaceSettingList](#workspacesettinglist)

### WorkspaceSettings_Delete
Deletes the custom workspace settings for this subscription. new VMs will report to the default workspace


```js
azure_security.WorkspaceSettings_Delete({
  "api-version": "",
  "subscriptionId": "",
  "workspaceSettingName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2017-08-01-preview): API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID
  * workspaceSettingName **required** `string`: Name of the security setting

#### Output
*Output schema unknown*

### WorkspaceSettings_Get
Settings about where we should store your security data and logs. If the result is empty, it means that no custom-workspace configuration was set


```js
azure_security.WorkspaceSettings_Get({
  "api-version": "",
  "subscriptionId": "",
  "workspaceSettingName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2017-08-01-preview): API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID
  * workspaceSettingName **required** `string`: Name of the security setting

#### Output
* output [WorkspaceSetting](#workspacesetting)

### WorkspaceSettings_Update
Settings about where we should store your security data and logs


```js
azure_security.WorkspaceSettings_Update({
  "api-version": "",
  "subscriptionId": "",
  "workspaceSettingName": "",
  "workspaceSetting": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2017-08-01-preview): API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID
  * workspaceSettingName **required** `string`: Name of the security setting
  * workspaceSetting **required** [WorkspaceSetting](#workspacesetting)

#### Output
* output [WorkspaceSetting](#workspacesetting)

### WorkspaceSettings_Create
creating settings about where we should store your security data and logs


```js
azure_security.WorkspaceSettings_Create({
  "api-version": "",
  "subscriptionId": "",
  "workspaceSettingName": "",
  "workspaceSetting": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2017-08-01-preview): API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID
  * workspaceSettingName **required** `string`: Name of the security setting
  * workspaceSetting **required** [WorkspaceSetting](#workspacesetting)

#### Output
* output [WorkspaceSetting](#workspacesetting)

### Pricings_ListByResourceGroup
Security pricing configurations in the resource group


```js
azure_security.Pricings_ListByResourceGroup({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2017-08-01-preview): API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.

#### Output
* output [PricingList](#pricinglist)

### Pricings_GetResourceGroupPricing
Security pricing configuration in the resource group


```js
azure_security.Pricings_GetResourceGroupPricing({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "pricingName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2017-08-01-preview): API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.
  * pricingName **required** `string`: name of the pricing configuration

#### Output
* output [Pricing](#pricing)

### Pricings_CreateOrUpdateResourceGroupPricing
Security pricing configuration in the resource group


```js
azure_security.Pricings_CreateOrUpdateResourceGroupPricing({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "pricingName": "",
  "pricing": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2017-08-01-preview): API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.
  * pricingName **required** `string`: name of the pricing configuration
  * pricing **required** [Pricing](#pricing)

#### Output
* output [Pricing](#pricing)

### AdvancedThreatProtection_Get
Gets the Advanced Threat Protection settings for the specified resource.


```js
azure_security.AdvancedThreatProtection_Get({
  "api-version": "",
  "resourceId": "",
  "settingName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2017-08-01-preview): API version for the operation
  * resourceId **required** `string`: The identifier of the resource.
  * settingName **required** `string` (values: current): Advanced Threat Protection setting name.

#### Output
* output [AdvancedThreatProtectionSetting](#advancedthreatprotectionsetting)

### AdvancedThreatProtection_Create
Creates or updates the Advanced Threat Protection settings on a specified resource.


```js
azure_security.AdvancedThreatProtection_Create({
  "api-version": "",
  "resourceId": "",
  "settingName": "",
  "advancedThreatProtectionSetting": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2017-08-01-preview): API version for the operation
  * resourceId **required** `string`: The identifier of the resource.
  * settingName **required** `string` (values: current): Advanced Threat Protection setting name.
  * advancedThreatProtectionSetting **required** [AdvancedThreatProtectionSetting](#advancedthreatprotectionsetting)

#### Output
* output [AdvancedThreatProtectionSetting](#advancedthreatprotectionsetting)

### Compliances_List
The Compliance scores of the specific management group.


```js
azure_security.Compliances_List({
  "api-version": "",
  "scope": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2017-08-01-preview): API version for the operation
  * scope **required** `string`: Scope of the query, can be subscription (/subscriptions/0b06d9ea-afe6-4779-bd59-30e5c2d9d13f) or management group (/providers/Microsoft.Management/managementGroups/mgName).

#### Output
* output [ComplianceList](#compliancelist)

### Compliances_Get
Details of a specific Compliance.


```js
azure_security.Compliances_Get({
  "api-version": "",
  "scope": "",
  "complianceName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2017-08-01-preview): API version for the operation
  * scope **required** `string`: Scope of the query, can be subscription (/subscriptions/0b06d9ea-afe6-4779-bd59-30e5c2d9d13f) or management group (/providers/Microsoft.Management/managementGroups/mgName).
  * complianceName **required** `string`: name of the Compliance

#### Output
* output [Compliance](#compliance)

### InformationProtectionPolicies_List
Information protection policies of a specific management group.


```js
azure_security.InformationProtectionPolicies_List({
  "api-version": "",
  "scope": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2017-08-01-preview): API version for the operation
  * scope **required** `string`: Scope of the query, can be subscription (/subscriptions/0b06d9ea-afe6-4779-bd59-30e5c2d9d13f) or management group (/providers/Microsoft.Management/managementGroups/mgName).

#### Output
* output [InformationProtectionPolicyList](#informationprotectionpolicylist)

### InformationProtectionPolicies_Get
Details of the information protection policy.


```js
azure_security.InformationProtectionPolicies_Get({
  "api-version": "",
  "scope": "",
  "informationProtectionPolicyName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2017-08-01-preview): API version for the operation
  * scope **required** `string`: Scope of the query, can be subscription (/subscriptions/0b06d9ea-afe6-4779-bd59-30e5c2d9d13f) or management group (/providers/Microsoft.Management/managementGroups/mgName).
  * informationProtectionPolicyName **required** `string` (values: effective, custom): Name of the information protection policy.

#### Output
* output [InformationProtectionPolicy](#informationprotectionpolicy)

### InformationProtectionPolicies_CreateOrUpdate
Details of the information protection policy.


```js
azure_security.InformationProtectionPolicies_CreateOrUpdate({
  "api-version": "",
  "scope": "",
  "informationProtectionPolicyName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2017-08-01-preview): API version for the operation
  * scope **required** `string`: Scope of the query, can be subscription (/subscriptions/0b06d9ea-afe6-4779-bd59-30e5c2d9d13f) or management group (/providers/Microsoft.Management/managementGroups/mgName).
  * informationProtectionPolicyName **required** `string` (values: effective, custom): Name of the information protection policy.

#### Output
* output [InformationProtectionPolicy](#informationprotectionpolicy)



## Definitions

### AdvancedThreatProtectionProperties
* AdvancedThreatProtectionProperties `object`: The Advanced Threat Protection settings.
  * isEnabled `boolean`: Indicates whether Advanced Threat Protection is enabled.

### AdvancedThreatProtectionSetting
* AdvancedThreatProtectionSetting `object`: The Advanced Threat Protection resource.
  * properties [AdvancedThreatProtectionProperties](#advancedthreatprotectionproperties)
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type

### AutoProvisioningSetting
* AutoProvisioningSetting `object`: Auto provisioning setting
  * properties [AutoProvisioningSettingProperties](#autoprovisioningsettingproperties)
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type

### AutoProvisioningSettingList
* AutoProvisioningSettingList `object`: List of all the auto provisioning settings response
  * nextLink `string`: The URI to fetch the next page.
  * value `array`: List of all the auto provisioning settings
    * items [AutoProvisioningSetting](#autoprovisioningsetting)

### AutoProvisioningSettingProperties
* AutoProvisioningSettingProperties `object`: describes properties of an auto provisioning setting
  * autoProvision **required** `string` (values: On, Off): Describes what kind of security agent provisioning action to take

### CloudError
* CloudError `object`: Error response structure.
  * error [CloudErrorBody](#clouderrorbody)

### CloudErrorBody
* CloudErrorBody `object`: Error details.
  * code `string`: An identifier for the error. Codes are invariant and are intended to be consumed programmatically.
  * message `string`: A message describing the error, intended to be suitable for display in a user interface.

### Compliance
* Compliance `object`: Compliance of a scope
  * properties [ComplianceProperties](#complianceproperties)
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type

### ComplianceList
* ComplianceList `object`: List of Compliance objects response
  * nextLink `string`: The URI to fetch the next page.
  * value `array`: List of Compliance objects
    * items [Compliance](#compliance)

### ComplianceProperties
* ComplianceProperties `object`: The Compliance score (percentage) of a Subscription is a sum of all Resources' Compliances under the given Subscription. A Resource Compliance is defined as the compliant ('healthy') Policy Definitions out of all Policy Definitions applicable to a given resource.
  * assessmentResult `array`: An array of segment, which is the actually the compliance assessment.
    * items [ComplianceSegment](#compliancesegment)
  * assessmentTimestampUtcDate `string`: The timestamp when the Compliance calculation was conducted.
  * resourceCount `integer`: The resource count of the given subscription for which the Compliance calculation was conducted (needed for Management Group Compliance calculation).

### ComplianceSegment
* ComplianceSegment `object`: A segment of a compliance assessment.
  * percentage `number`: The size (%) of the segment.
  * segmentType `string`: The segment type, e.g. compliant, non-compliance, insufficient coverage, N/A, etc.

### DataExportSetting
* DataExportSetting `object`: Represents a data export setting
  * properties [DataExportSettingProperties](#dataexportsettingproperties)
  * kind **required** `string` (values: DataExportSetting, AlertSuppressionSetting): the kind of the settings string (DataExportSetting)
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type

### DataExportSettingProperties
* DataExportSettingProperties `object`: The data export setting properties
  * enabled **required** `boolean`: Is the data export setting is enabled

### InformationProtectionKeyword
* InformationProtectionKeyword `object`: The information type keyword.
  * canBeNumeric `boolean`: Indicates whether the keyword can be applied on numeric types or not.
  * custom `boolean`: Indicates whether the keyword is custom or not.
  * excluded `boolean`: Indicates whether the keyword is excluded or not.
  * pattern `string`: The keyword pattern.

### InformationProtectionPolicy
* InformationProtectionPolicy `object`: Information protection policy.
  * properties [InformationProtectionPolicyProperties](#informationprotectionpolicyproperties)
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type

### InformationProtectionPolicyList
* InformationProtectionPolicyList `object`: Information protection policies response.
  * nextLink `string`: The URI to fetch the next page.
  * value `array`: List of information protection policies.
    * items [InformationProtectionPolicy](#informationprotectionpolicy)

### InformationProtectionPolicyProperties
* InformationProtectionPolicyProperties `object`: describes properties of an information protection policy.
  * informationTypes `object`: The sensitivity information types.
  * labels `object`: Dictionary of sensitivity labels.
  * lastModifiedUtc `string`: Describes the last UTC time the policy was modified.

### InformationType
* InformationType `object`: The information type.
  * custom `boolean`: Indicates whether the information type is custom or not.
  * displayName `string`: The name of the information type.
  * enabled `boolean`: Indicates whether the information type is enabled or not.
  * keywords `array`: The information type keywords.
    * items [InformationProtectionKeyword](#informationprotectionkeyword)
  * order `number`: The order of the information type.
  * recommendedLabelId `string`: The recommended label id to be associated with this information type.

### Kind
* Kind `object`: Describes an Azure resource with kind
  * kind `string`: Kind of the resource

### Pricing
* Pricing `object`: Pricing tier will be applied for the scope based on the resource ID
  * properties [PricingProperties](#pricingproperties)
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type

### PricingList
* PricingList `object`: List of pricing configurations response
  * nextLink `string`: The URI to fetch the next page.
  * value **required** `array`: List of pricing configurations
    * items [Pricing](#pricing)

### PricingProperties
* PricingProperties `object`: Pricing data
  * pricingTier **required** `string` (values: Free, Standard): Pricing tier type

### Resource
* Resource `object`: Describes an Azure resource.
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type

### SecurityContact
* SecurityContact `object`: Contact details for security issues
  * properties [SecurityContactProperties](#securitycontactproperties)
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type

### SecurityContactList
* SecurityContactList `object`: List of security contacts response
  * nextLink `string`: The URI to fetch the next page.
  * value `array`: List of security contacts
    * items [SecurityContact](#securitycontact)

### SecurityContactProperties
* SecurityContactProperties `object`: describes security contact properties
  * alertNotifications **required** `string` (values: On, Off): Whether to send security alerts notifications to the security contact
  * alertsToAdmins **required** `string` (values: On, Off): Whether to send security alerts notifications to subscription admins
  * email **required** `string`: The email of this security contact
  * phone `string`: The phone number of this security contact

### SensitivityLabel
* SensitivityLabel `object`: The sensitivity label.
  * displayName `string`: The name of the sensitivity label.
  * enabled `boolean`: Indicates whether the label is enabled or not.
  * order `number`: The order of the sensitivity label.

### Setting
* Setting `object`: Represents a security setting in Azure Security Center.
  * kind **required** `string` (values: DataExportSetting, AlertSuppressionSetting): the kind of the settings string (DataExportSetting)
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type

### SettingResource
* SettingResource `object`: The kind of the security setting
  * kind **required** `string` (values: DataExportSetting, AlertSuppressionSetting): the kind of the settings string (DataExportSetting)
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type

### SettingsList
* SettingsList `object`: Subscription settings list.
  * nextLink `string`: The URI to fetch the next page.
  * value `array`: The settings list.
    * items [Setting](#setting)

### WorkspaceSetting
* WorkspaceSetting `object`: Configures where to store the OMS agent data for workspaces under a scope
  * properties [WorkspaceSettingProperties](#workspacesettingproperties)
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type

### WorkspaceSettingList
* WorkspaceSettingList `object`: List of workspace settings response
  * nextLink `string`: The URI to fetch the next page.
  * value **required** `array`: List of workspace settings
    * items [WorkspaceSetting](#workspacesetting)

### WorkspaceSettingProperties
* WorkspaceSettingProperties `object`: Workspace setting data
  * scope **required** `string`: All the VMs in this scope will send their security data to the mentioned workspace unless overridden by a setting with more specific scope
  * workspaceId **required** `string`: The full Azure ID of the workspace to save the data in


