# @datafire/azure_datalake_store_account

Client library for DataLakeStoreAccountManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_datalake_store_account
```
```js
let azure_datalake_store_account = require('@datafire/azure_datalake_store_account').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_datalake_store_account.Operations_List({
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description

Creates an Azure Data Lake Store account management client.

## Actions

### Operations_List
Lists all of the available Data Lake Store REST API operations.


```js
azure_datalake_store_account.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.

#### Output
* output [OperationListResult](#operationlistresult)

### Accounts_List
Lists the Data Lake Store accounts within the subscription. The response includes a link to the next page of results, if any.


```js
azure_datalake_store_account.Accounts_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * $filter `string`: OData filter. Optional.
  * $top `integer`: The number of items to return. Optional.
  * $skip `integer`: The number of items to skip over before returning elements. Optional.
  * $select `string`: OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional.
  * $orderby `string`: OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional.
  * $count `boolean`: The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [DataLakeStoreAccountListResult](#datalakestoreaccountlistresult)

### Locations_GetCapability
Gets subscription-level properties and limits for Data Lake Store specified by resource location.


```js
azure_datalake_store_account.Locations_GetCapability({
  "subscriptionId": "",
  "location": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * location **required** `string`: The resource location without whitespace.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [CapabilityInformation](#capabilityinformation)

### Accounts_CheckNameAvailability
Checks whether the specified account name is available or taken.


```js
azure_datalake_store_account.Accounts_CheckNameAvailability({
  "subscriptionId": "",
  "location": "",
  "parameters": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * location **required** `string`: The resource location without whitespace.
  * parameters **required** [CheckNameAvailabilityParameters](#checknameavailabilityparameters)
  * api-version **required** `string`: Client Api Version.

#### Output
* output [NameAvailabilityInformation](#nameavailabilityinformation)

### Accounts_ListByResourceGroup
Lists the Data Lake Store accounts within a specific resource group. The response includes a link to the next page of results, if any.


```js
azure_datalake_store_account.Accounts_ListByResourceGroup({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the Azure resource group.
  * $filter `string`: OData filter. Optional.
  * $top `integer`: The number of items to return. Optional.
  * $skip `integer`: The number of items to skip over before returning elements. Optional.
  * $select `string`: OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional.
  * $orderby `string`: OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional.
  * $count `boolean`: A Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [DataLakeStoreAccountListResult](#datalakestoreaccountlistresult)

### Accounts_Delete
Deletes the specified Data Lake Store account.


```js
azure_datalake_store_account.Accounts_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the Azure resource group.
  * accountName **required** `string`: The name of the Data Lake Store account.
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*

### Accounts_Get
Gets the specified Data Lake Store account.


```js
azure_datalake_store_account.Accounts_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the Azure resource group.
  * accountName **required** `string`: The name of the Data Lake Store account.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [DataLakeStoreAccount](#datalakestoreaccount)

### Accounts_Update
Updates the specified Data Lake Store account information.


```js
azure_datalake_store_account.Accounts_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "parameters": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the Azure resource group.
  * accountName **required** `string`: The name of the Data Lake Store account.
  * parameters **required** [UpdateDataLakeStoreAccountParameters](#updatedatalakestoreaccountparameters)
  * api-version **required** `string`: Client Api Version.

#### Output
* output [DataLakeStoreAccount](#datalakestoreaccount)

### Accounts_Create
Creates the specified Data Lake Store account.


```js
azure_datalake_store_account.Accounts_Create({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "parameters": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the Azure resource group.
  * accountName **required** `string`: The name of the Data Lake Store account.
  * parameters **required** [CreateDataLakeStoreAccountParameters](#createdatalakestoreaccountparameters)
  * api-version **required** `string`: Client Api Version.

#### Output
* output [DataLakeStoreAccount](#datalakestoreaccount)

### Accounts_EnableKeyVault
Attempts to enable a user managed Key Vault for encryption of the specified Data Lake Store account.


```js
azure_datalake_store_account.Accounts_EnableKeyVault({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the Azure resource group.
  * accountName **required** `string`: The name of the Data Lake Store account.
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*

### FirewallRules_ListByAccount
Lists the Data Lake Store firewall rules within the specified Data Lake Store account.


```js
azure_datalake_store_account.FirewallRules_ListByAccount({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the Azure resource group.
  * accountName **required** `string`: The name of the Data Lake Store account.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [FirewallRuleListResult](#firewallrulelistresult)

### FirewallRules_Delete
Deletes the specified firewall rule from the specified Data Lake Store account


```js
azure_datalake_store_account.FirewallRules_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "firewallRuleName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the Azure resource group.
  * accountName **required** `string`: The name of the Data Lake Store account.
  * firewallRuleName **required** `string`: The name of the firewall rule to delete.
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*

### FirewallRules_Get
Gets the specified Data Lake Store firewall rule.


```js
azure_datalake_store_account.FirewallRules_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "firewallRuleName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the Azure resource group.
  * accountName **required** `string`: The name of the Data Lake Store account.
  * firewallRuleName **required** `string`: The name of the firewall rule to retrieve.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [FirewallRule](#firewallrule)

### FirewallRules_Update
Updates the specified firewall rule.


```js
azure_datalake_store_account.FirewallRules_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "firewallRuleName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the Azure resource group.
  * accountName **required** `string`: The name of the Data Lake Store account.
  * firewallRuleName **required** `string`: The name of the firewall rule to update.
  * parameters [UpdateFirewallRuleParameters](#updatefirewallruleparameters)
  * api-version **required** `string`: Client Api Version.

#### Output
* output [FirewallRule](#firewallrule)

### FirewallRules_CreateOrUpdate
Creates or updates the specified firewall rule. During update, the firewall rule with the specified name will be replaced with this new firewall rule.


```js
azure_datalake_store_account.FirewallRules_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "firewallRuleName": "",
  "parameters": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the Azure resource group.
  * accountName **required** `string`: The name of the Data Lake Store account.
  * firewallRuleName **required** `string`: The name of the firewall rule to create or update.
  * parameters **required** [CreateOrUpdateFirewallRuleParameters](#createorupdatefirewallruleparameters)
  * api-version **required** `string`: Client Api Version.

#### Output
* output [FirewallRule](#firewallrule)

### TrustedIdProviders_ListByAccount
Lists the Data Lake Store trusted identity providers within the specified Data Lake Store account.


```js
azure_datalake_store_account.TrustedIdProviders_ListByAccount({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the Azure resource group.
  * accountName **required** `string`: The name of the Data Lake Store account.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [TrustedIdProviderListResult](#trustedidproviderlistresult)

### TrustedIdProviders_Delete
Deletes the specified trusted identity provider from the specified Data Lake Store account


```js
azure_datalake_store_account.TrustedIdProviders_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "trustedIdProviderName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the Azure resource group.
  * accountName **required** `string`: The name of the Data Lake Store account.
  * trustedIdProviderName **required** `string`: The name of the trusted identity provider to delete.
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*

### TrustedIdProviders_Get
Gets the specified Data Lake Store trusted identity provider.


```js
azure_datalake_store_account.TrustedIdProviders_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "trustedIdProviderName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the Azure resource group.
  * accountName **required** `string`: The name of the Data Lake Store account.
  * trustedIdProviderName **required** `string`: The name of the trusted identity provider to retrieve.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [TrustedIdProvider](#trustedidprovider)

### TrustedIdProviders_Update
Updates the specified trusted identity provider.


```js
azure_datalake_store_account.TrustedIdProviders_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "trustedIdProviderName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the Azure resource group.
  * accountName **required** `string`: The name of the Data Lake Store account.
  * trustedIdProviderName **required** `string`: The name of the trusted identity provider. This is used for differentiation of providers in the account.
  * parameters [UpdateTrustedIdProviderParameters](#updatetrustedidproviderparameters)
  * api-version **required** `string`: Client Api Version.

#### Output
* output [TrustedIdProvider](#trustedidprovider)

### TrustedIdProviders_CreateOrUpdate
Creates or updates the specified trusted identity provider. During update, the trusted identity provider with the specified name will be replaced with this new provider


```js
azure_datalake_store_account.TrustedIdProviders_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "trustedIdProviderName": "",
  "parameters": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the Azure resource group.
  * accountName **required** `string`: The name of the Data Lake Store account.
  * trustedIdProviderName **required** `string`: The name of the trusted identity provider. This is used for differentiation of providers in the account.
  * parameters **required** [CreateOrUpdateTrustedIdProviderParameters](#createorupdatetrustedidproviderparameters)
  * api-version **required** `string`: Client Api Version.

#### Output
* output [TrustedIdProvider](#trustedidprovider)



## Definitions

### CapabilityInformation
* CapabilityInformation `object`: Subscription-level properties and limits for Data Lake Store.
  * accountCount `integer`: The current number of accounts under this subscription.
  * maxAccountCount `integer`: The maximum supported number of accounts under this subscription.
  * migrationState `boolean`: The Boolean value of true or false to indicate the maintenance state.
  * state `string` (values: Registered, Suspended, Deleted, Unregistered, Warned): The subscription state.
  * subscriptionId `string`: The subscription credentials that uniquely identifies the subscription.

### CheckNameAvailabilityParameters
* CheckNameAvailabilityParameters `object`: Data Lake Store account name availability check parameters.
  * name **required** `string`: The Data Lake Store name to check availability for.
  * type **required** `string` (values: Microsoft.DataLakeStore/accounts): The resource type. Note: This should not be set by the user, as the constant value is Microsoft.DataLakeStore/accounts

### CreateDataLakeStoreAccountParameters
* CreateDataLakeStoreAccountParameters `object`
  * identity [EncryptionIdentity](#encryptionidentity)
  * location **required** `string`: The resource location.
  * properties [CreateDataLakeStoreAccountProperties](#createdatalakestoreaccountproperties)
  * tags `object`: The resource tags.

### CreateDataLakeStoreAccountProperties
* CreateDataLakeStoreAccountProperties `object`
  * defaultGroup `string`: The default owner group for all new folders and files created in the Data Lake Store account.
  * encryptionConfig [EncryptionConfig](#encryptionconfig)
  * encryptionState `string` (values: Enabled, Disabled): The current state of encryption for this Data Lake Store account.
  * firewallAllowAzureIps `string` (values: Enabled, Disabled): The current state of allowing or disallowing IPs originating within Azure through the firewall. If the firewall is disabled, this is not enforced.
  * firewallRules `array`: The list of firewall rules associated with this Data Lake Store account.
    * items [CreateFirewallRuleWithAccountParameters](#createfirewallrulewithaccountparameters)
  * firewallState `string` (values: Enabled, Disabled): The current state of the IP address firewall for this Data Lake Store account.
  * newTier `string` (values: Consumption, Commitment_1TB, Commitment_10TB, Commitment_100TB, Commitment_500TB, Commitment_1PB, Commitment_5PB): The commitment tier to use for next month.
  * trustedIdProviderState `string` (values: Enabled, Disabled): The current state of the trusted identity provider feature for this Data Lake Store account.
  * trustedIdProviders `array`: The list of trusted identity providers associated with this Data Lake Store account.
    * items [CreateTrustedIdProviderWithAccountParameters](#createtrustedidproviderwithaccountparameters)

### CreateFirewallRuleWithAccountParameters
* CreateFirewallRuleWithAccountParameters `object`: The parameters used to create a new firewall rule while creating a new Data Lake Store account.
  * name **required** `string`: The unique name of the firewall rule to create.
  * properties **required** [CreateOrUpdateFirewallRuleProperties](#createorupdatefirewallruleproperties)

### CreateOrUpdateFirewallRuleParameters
* CreateOrUpdateFirewallRuleParameters `object`: The parameters used to create a new firewall rule.
  * properties **required** [CreateOrUpdateFirewallRuleProperties](#createorupdatefirewallruleproperties)

### CreateOrUpdateFirewallRuleProperties
* CreateOrUpdateFirewallRuleProperties `object`: The firewall rule properties to use when creating a new firewall rule.
  * endIpAddress **required** `string`: The end IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End should be in the same protocol.
  * startIpAddress **required** `string`: The start IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End should be in the same protocol.

### CreateOrUpdateTrustedIdProviderParameters
* CreateOrUpdateTrustedIdProviderParameters `object`: The parameters used to create a new trusted identity provider.
  * properties **required** [CreateOrUpdateTrustedIdProviderProperties](#createorupdatetrustedidproviderproperties)

### CreateOrUpdateTrustedIdProviderProperties
* CreateOrUpdateTrustedIdProviderProperties `object`: The trusted identity provider properties to use when creating a new trusted identity provider.
  * idProvider **required** `string`: The URL of this trusted identity provider.

### CreateTrustedIdProviderWithAccountParameters
* CreateTrustedIdProviderWithAccountParameters `object`: The parameters used to create a new trusted identity provider while creating a new Data Lake Store account.
  * name **required** `string`: The unique name of the trusted identity provider to create.
  * properties **required** [CreateOrUpdateTrustedIdProviderProperties](#createorupdatetrustedidproviderproperties)

### DataLakeStoreAccount
* DataLakeStoreAccount `object`: Data Lake Store account information.
  * identity [EncryptionIdentity](#encryptionidentity)
  * properties [DataLakeStoreAccountProperties](#datalakestoreaccountproperties)
  * id `string`: The resource identifier.
  * location `string`: The resource location.
  * name `string`: The resource name.
  * tags `object`: The resource tags.
  * type `string`: The resource type.

### DataLakeStoreAccountBasic
* DataLakeStoreAccountBasic `object`: Basic Data Lake Store account information, returned on list calls.
  * properties [DataLakeStoreAccountPropertiesBasic](#datalakestoreaccountpropertiesbasic)
  * id `string`: The resource identifier.
  * location `string`: The resource location.
  * name `string`: The resource name.
  * tags `object`: The resource tags.
  * type `string`: The resource type.

### DataLakeStoreAccountListResult
* DataLakeStoreAccountListResult `object`: Data Lake Store account list information response.
  * nextLink `string`: The link (url) to the next page of results.
  * value `array`: The results of the list operation.
    * items [DataLakeStoreAccountBasic](#datalakestoreaccountbasic)

### DataLakeStoreAccountProperties
* DataLakeStoreAccountProperties `object`: Data Lake Store account properties information.
  * currentTier `string` (values: Consumption, Commitment_1TB, Commitment_10TB, Commitment_100TB, Commitment_500TB, Commitment_1PB, Commitment_5PB): The commitment tier in use for the current month.
  * defaultGroup `string`: The default owner group for all new folders and files created in the Data Lake Store account.
  * encryptionConfig [EncryptionConfig](#encryptionconfig)
  * encryptionProvisioningState `string` (values: Creating, Succeeded): The current state of encryption provisioning for this Data Lake Store account.
  * encryptionState `string` (values: Enabled, Disabled): The current state of encryption for this Data Lake Store account.
  * firewallAllowAzureIps `string` (values: Enabled, Disabled): The current state of allowing or disallowing IPs originating within Azure through the firewall. If the firewall is disabled, this is not enforced.
  * firewallRules `array`: The list of firewall rules associated with this Data Lake Store account.
    * items [FirewallRule](#firewallrule)
  * firewallState `string` (values: Enabled, Disabled): The current state of the IP address firewall for this Data Lake Store account.
  * newTier `string` (values: Consumption, Commitment_1TB, Commitment_10TB, Commitment_100TB, Commitment_500TB, Commitment_1PB, Commitment_5PB): The commitment tier to use for next month.
  * trustedIdProviderState `string` (values: Enabled, Disabled): The current state of the trusted identity provider feature for this Data Lake Store account.
  * trustedIdProviders `array`: The list of trusted identity providers associated with this Data Lake Store account.
    * items [TrustedIdProvider](#trustedidprovider)
  * accountId `string`: The unique identifier associated with this Data Lake Store account.
  * creationTime `string`: The account creation time.
  * endpoint `string`: The full CName endpoint for this account.
  * lastModifiedTime `string`: The account last modified time.
  * provisioningState `string` (values: Failed, Creating, Running, Succeeded, Patching, Suspending, Resuming, Deleting, Deleted, Undeleting, Canceled): The provisioning status of the Data Lake Store account.
  * state `string` (values: Active, Suspended): The state of the Data Lake Store account.

### DataLakeStoreAccountPropertiesBasic
* DataLakeStoreAccountPropertiesBasic `object`: The basic account specific properties that are associated with an underlying Data Lake Store account.
  * accountId `string`: The unique identifier associated with this Data Lake Store account.
  * creationTime `string`: The account creation time.
  * endpoint `string`: The full CName endpoint for this account.
  * lastModifiedTime `string`: The account last modified time.
  * provisioningState `string` (values: Failed, Creating, Running, Succeeded, Patching, Suspending, Resuming, Deleting, Deleted, Undeleting, Canceled): The provisioning status of the Data Lake Store account.
  * state `string` (values: Active, Suspended): The state of the Data Lake Store account.

### EncryptionConfig
* EncryptionConfig `object`: The encryption configuration for the account.
  * keyVaultMetaInfo [KeyVaultMetaInfo](#keyvaultmetainfo)
  * type **required** `string` (values: UserManaged, ServiceManaged): The type of encryption configuration being used. Currently the only supported types are 'UserManaged' and 'ServiceManaged'.

### EncryptionIdentity
* EncryptionIdentity `object`: The encryption identity properties.
  * principalId `string`: The principal identifier associated with the encryption.
  * tenantId `string`: The tenant identifier associated with the encryption.
  * type **required** `string` (values: SystemAssigned): The type of encryption being used. Currently the only supported type is 'SystemAssigned'.

### FirewallRule
* FirewallRule `object`: Data Lake Store firewall rule information.
  * properties [FirewallRuleProperties](#firewallruleproperties)
  * id `string`: The resource identifier.
  * name `string`: The resource name.
  * type `string`: The resource type.

### FirewallRuleListResult
* FirewallRuleListResult `object`: Data Lake Store firewall rule list information.
  * nextLink `string`: The link (url) to the next page of results.
  * value `array`: The results of the list operation.
    * items [FirewallRule](#firewallrule)

### FirewallRuleProperties
* FirewallRuleProperties `object`: The firewall rule properties.
  * endIpAddress `string`: The end IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End should be in the same protocol.
  * startIpAddress `string`: The start IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End should be in the same protocol.

### KeyVaultMetaInfo
* KeyVaultMetaInfo `object`: Metadata information used by account encryption.
  * encryptionKeyName **required** `string`: The name of the user managed encryption key.
  * encryptionKeyVersion **required** `string`: The version of the user managed encryption key.
  * keyVaultResourceId **required** `string`: The resource identifier for the user managed Key Vault being used to encrypt.

### NameAvailabilityInformation
* NameAvailabilityInformation `object`: Data Lake Store account name availability result information.
  * message `string`: The message describing why the Data Lake Store account name is not available, if nameAvailable is false.
  * nameAvailable `boolean`: The Boolean value of true or false to indicate whether the Data Lake Store account name is available or not.
  * reason `string`: The reason why the Data Lake Store account name is not available, if nameAvailable is false.

### Operation
* Operation `object`: An available operation for Data Lake Store.
  * display [OperationDisplay](#operationdisplay)
  * name `string`: The name of the operation.
  * origin `string` (values: user, system, user,system): The intended executor of the operation.

### OperationDisplay
* OperationDisplay `object`: The display information for a particular operation.
  * description `string`: A friendly description of the operation.
  * operation `string`: A friendly name of the operation.
  * provider `string`: The resource provider of the operation.
  * resource `string`: The resource type of the operation.

### OperationListResult
* OperationListResult `object`: The list of available operations for Data Lake Store.
  * nextLink `string`: The link (url) to the next page of results.
  * value `array`: The results of the list operation.
    * items [Operation](#operation)

### Resource
* Resource `object`: The resource model definition.
  * id `string`: The resource identifier.
  * location `string`: The resource location.
  * name `string`: The resource name.
  * tags `object`: The resource tags.
  * type `string`: The resource type.

### SubResource
* SubResource `object`: The resource model definition for a nested resource.
  * id `string`: The resource identifier.
  * name `string`: The resource name.
  * type `string`: The resource type.

### TrustedIdProvider
* TrustedIdProvider `object`: Data Lake Store trusted identity provider information.
  * properties [TrustedIdProviderProperties](#trustedidproviderproperties)
  * id `string`: The resource identifier.
  * name `string`: The resource name.
  * type `string`: The resource type.

### TrustedIdProviderListResult
* TrustedIdProviderListResult `object`: Data Lake Store trusted identity provider list information.
  * nextLink `string`: The link (url) to the next page of results.
  * value `array`: The results of the list operation.
    * items [TrustedIdProvider](#trustedidprovider)

### TrustedIdProviderProperties
* TrustedIdProviderProperties `object`: The trusted identity provider properties.
  * idProvider `string`: The URL of this trusted identity provider.

### UpdateDataLakeStoreAccountParameters
* UpdateDataLakeStoreAccountParameters `object`: Data Lake Store account information to update.
  * properties [UpdateDataLakeStoreAccountProperties](#updatedatalakestoreaccountproperties)
  * tags `object`: Resource tags

### UpdateDataLakeStoreAccountProperties
* UpdateDataLakeStoreAccountProperties `object`: Data Lake Store account properties information to be updated.
  * defaultGroup `string`: The default owner group for all new folders and files created in the Data Lake Store account.
  * encryptionConfig [UpdateEncryptionConfig](#updateencryptionconfig)
  * firewallAllowAzureIps `string` (values: Enabled, Disabled): The current state of allowing or disallowing IPs originating within Azure through the firewall. If the firewall is disabled, this is not enforced.
  * firewallRules `array`: The list of firewall rules associated with this Data Lake Store account.
    * items [UpdateFirewallRuleWithAccountParameters](#updatefirewallrulewithaccountparameters)
  * firewallState `string` (values: Enabled, Disabled): The current state of the IP address firewall for this Data Lake Store account. Disabling the firewall does not remove existing rules, they will just be ignored until the firewall is re-enabled.
  * newTier `string` (values: Consumption, Commitment_1TB, Commitment_10TB, Commitment_100TB, Commitment_500TB, Commitment_1PB, Commitment_5PB): The commitment tier to use for next month.
  * trustedIdProviderState `string` (values: Enabled, Disabled): The current state of the trusted identity provider feature for this Data Lake Store account. Disabling trusted identity provider functionality does not remove the providers, they will just be ignored until this feature is re-enabled.
  * trustedIdProviders `array`: The list of trusted identity providers associated with this Data Lake Store account.
    * items [UpdateTrustedIdProviderWithAccountParameters](#updatetrustedidproviderwithaccountparameters)

### UpdateEncryptionConfig
* UpdateEncryptionConfig `object`: The encryption configuration used to update a user managed Key Vault key.
  * keyVaultMetaInfo [UpdateKeyVaultMetaInfo](#updatekeyvaultmetainfo)

### UpdateFirewallRuleParameters
* UpdateFirewallRuleParameters `object`: The parameters used to update a firewall rule.
  * properties [UpdateFirewallRuleProperties](#updatefirewallruleproperties)

### UpdateFirewallRuleProperties
* UpdateFirewallRuleProperties `object`: The firewall rule properties to use when updating a firewall rule.
  * endIpAddress `string`: The end IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End should be in the same protocol.
  * startIpAddress `string`: The start IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End should be in the same protocol.

### UpdateFirewallRuleWithAccountParameters
* UpdateFirewallRuleWithAccountParameters `object`: The parameters used to update a firewall rule while updating a Data Lake Store account.
  * name **required** `string`: The unique name of the firewall rule to update.
  * properties [UpdateFirewallRuleProperties](#updatefirewallruleproperties)

### UpdateKeyVaultMetaInfo
* UpdateKeyVaultMetaInfo `object`: The Key Vault update information used for user managed key rotation.
  * encryptionKeyVersion `string`: The version of the user managed encryption key to update through a key rotation.

### UpdateTrustedIdProviderParameters
* UpdateTrustedIdProviderParameters `object`: The parameters used to update a trusted identity provider.
  * properties [UpdateTrustedIdProviderProperties](#updatetrustedidproviderproperties)

### UpdateTrustedIdProviderProperties
* UpdateTrustedIdProviderProperties `object`: The trusted identity provider properties to use when updating a trusted identity provider.
  * idProvider `string`: The URL of this trusted identity provider.

### UpdateTrustedIdProviderWithAccountParameters
* UpdateTrustedIdProviderWithAccountParameters `object`: The parameters used to update a trusted identity provider while updating a Data Lake Store account.
  * name **required** `string`: The unique name of the trusted identity provider to update.
  * properties [UpdateTrustedIdProviderProperties](#updatetrustedidproviderproperties)


