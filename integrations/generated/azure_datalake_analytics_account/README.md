# @datafire/azure_datalake_analytics_account

Client library for DataLakeAnalyticsAccountManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_datalake_analytics_account
```
```js
let azure_datalake_analytics_account = require('@datafire/azure_datalake_analytics_account').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_datalake_analytics_account.Operations_List({
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description

Creates an Azure Data Lake Analytics account management client.

## Actions

### Operations_List
Lists all of the available Data Lake Analytics REST API operations.


```js
azure_datalake_analytics_account.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.

#### Output
* output [OperationListResult](#operationlistresult)

### Accounts_List
Gets the first page of Data Lake Analytics accounts, if any, within the current subscription. This includes a link to the next page, if any.


```js
azure_datalake_analytics_account.Accounts_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * $filter `string`: OData filter. Optional.
  * $top `integer`: The number of items to return. Optional.
  * $skip `integer`: The number of items to skip over before returning elements. Optional.
  * $select `string`: OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional.
  * $orderby `string`: OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional.
  * $count `boolean`: The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [DataLakeAnalyticsAccountListResult](#datalakeanalyticsaccountlistresult)

### Locations_GetCapability
Gets subscription-level properties and limits for Data Lake Analytics specified by resource location.


```js
azure_datalake_analytics_account.Locations_GetCapability({
  "subscriptionId": "",
  "location": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * location **required** `string`: The resource location without whitespace.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [CapabilityInformation](#capabilityinformation)

### Accounts_CheckNameAvailability
Checks whether the specified account name is available or taken.


```js
azure_datalake_analytics_account.Accounts_CheckNameAvailability({
  "subscriptionId": "",
  "location": "",
  "parameters": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * location **required** `string`: The resource location without whitespace.
  * parameters **required** [CheckNameAvailabilityParameters](#checknameavailabilityparameters)
  * api-version **required** `string`: Client Api Version.

#### Output
* output [NameAvailabilityInformation](#nameavailabilityinformation)

### Accounts_ListByResourceGroup
Gets the first page of Data Lake Analytics accounts, if any, within a specific resource group. This includes a link to the next page, if any.


```js
azure_datalake_analytics_account.Accounts_ListByResourceGroup({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the Azure resource group.
  * $filter `string`: OData filter. Optional.
  * $top `integer`: The number of items to return. Optional.
  * $skip `integer`: The number of items to skip over before returning elements. Optional.
  * $select `string`: OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional.
  * $orderby `string`: OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional.
  * $count `boolean`: The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [DataLakeAnalyticsAccountListResult](#datalakeanalyticsaccountlistresult)

### Accounts_Delete
Begins the delete process for the Data Lake Analytics account object specified by the account name.


```js
azure_datalake_analytics_account.Accounts_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the Azure resource group.
  * accountName **required** `string`: The name of the Data Lake Analytics account.
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*

### Accounts_Get
Gets details of the specified Data Lake Analytics account.


```js
azure_datalake_analytics_account.Accounts_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the Azure resource group.
  * accountName **required** `string`: The name of the Data Lake Analytics account.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [DataLakeAnalyticsAccount](#datalakeanalyticsaccount)

### Accounts_Update
Updates the Data Lake Analytics account object specified by the accountName with the contents of the account object.


```js
azure_datalake_analytics_account.Accounts_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the Azure resource group.
  * accountName **required** `string`: The name of the Data Lake Analytics account.
  * parameters [UpdateDataLakeAnalyticsAccountParameters](#updatedatalakeanalyticsaccountparameters)
  * api-version **required** `string`: Client Api Version.

#### Output
* output [DataLakeAnalyticsAccount](#datalakeanalyticsaccount)

### Accounts_Create
Creates the specified Data Lake Analytics account. This supplies the user with computation services for Data Lake Analytics workloads.


```js
azure_datalake_analytics_account.Accounts_Create({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "parameters": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the Azure resource group.
  * accountName **required** `string`: The name of the Data Lake Analytics account.
  * parameters **required** [CreateDataLakeAnalyticsAccountParameters](#createdatalakeanalyticsaccountparameters)
  * api-version **required** `string`: Client Api Version.

#### Output
* output [DataLakeAnalyticsAccount](#datalakeanalyticsaccount)

### ComputePolicies_ListByAccount
Lists the Data Lake Analytics compute policies within the specified Data Lake Analytics account. An account supports, at most, 50 policies


```js
azure_datalake_analytics_account.ComputePolicies_ListByAccount({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the Azure resource group.
  * accountName **required** `string`: The name of the Data Lake Analytics account.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [ComputePolicyListResult](#computepolicylistresult)

### ComputePolicies_Delete
Deletes the specified compute policy from the specified Data Lake Analytics account


```js
azure_datalake_analytics_account.ComputePolicies_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "computePolicyName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the Azure resource group.
  * accountName **required** `string`: The name of the Data Lake Analytics account.
  * computePolicyName **required** `string`: The name of the compute policy to delete.
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*

### ComputePolicies_Get
Gets the specified Data Lake Analytics compute policy.


```js
azure_datalake_analytics_account.ComputePolicies_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "computePolicyName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the Azure resource group.
  * accountName **required** `string`: The name of the Data Lake Analytics account.
  * computePolicyName **required** `string`: The name of the compute policy to retrieve.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [ComputePolicy](#computepolicy)

### ComputePolicies_Update
Updates the specified compute policy.


```js
azure_datalake_analytics_account.ComputePolicies_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "computePolicyName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the Azure resource group.
  * accountName **required** `string`: The name of the Data Lake Analytics account.
  * computePolicyName **required** `string`: The name of the compute policy to update.
  * parameters [UpdateComputePolicyParameters](#updatecomputepolicyparameters)
  * api-version **required** `string`: Client Api Version.

#### Output
* output [ComputePolicy](#computepolicy)

### ComputePolicies_CreateOrUpdate
Creates or updates the specified compute policy. During update, the compute policy with the specified name will be replaced with this new compute policy. An account supports, at most, 50 policies


```js
azure_datalake_analytics_account.ComputePolicies_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "computePolicyName": "",
  "parameters": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the Azure resource group.
  * accountName **required** `string`: The name of the Data Lake Analytics account.
  * computePolicyName **required** `string`: The name of the compute policy to create or update.
  * parameters **required** [CreateOrUpdateComputePolicyParameters](#createorupdatecomputepolicyparameters)
  * api-version **required** `string`: Client Api Version.

#### Output
* output [ComputePolicy](#computepolicy)

### DataLakeStoreAccounts_ListByAccount
Gets the first page of Data Lake Store accounts linked to the specified Data Lake Analytics account. The response includes a link to the next page, if any.


```js
azure_datalake_analytics_account.DataLakeStoreAccounts_ListByAccount({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the Azure resource group.
  * accountName **required** `string`: The name of the Data Lake Analytics account.
  * $filter `string`: OData filter. Optional.
  * $top `integer`: The number of items to return. Optional.
  * $skip `integer`: The number of items to skip over before returning elements. Optional.
  * $select `string`: OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional.
  * $orderby `string`: OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional.
  * $count `boolean`: The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [DataLakeStoreAccountInformationListResult](#datalakestoreaccountinformationlistresult)

### DataLakeStoreAccounts_Delete
Updates the Data Lake Analytics account specified to remove the specified Data Lake Store account.


```js
azure_datalake_analytics_account.DataLakeStoreAccounts_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "dataLakeStoreAccountName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the Azure resource group.
  * accountName **required** `string`: The name of the Data Lake Analytics account.
  * dataLakeStoreAccountName **required** `string`: The name of the Data Lake Store account to remove
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*

### DataLakeStoreAccounts_Get
Gets the specified Data Lake Store account details in the specified Data Lake Analytics account.


```js
azure_datalake_analytics_account.DataLakeStoreAccounts_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "dataLakeStoreAccountName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the Azure resource group.
  * accountName **required** `string`: The name of the Data Lake Analytics account.
  * dataLakeStoreAccountName **required** `string`: The name of the Data Lake Store account to retrieve
  * api-version **required** `string`: Client Api Version.

#### Output
* output [DataLakeStoreAccountInformation](#datalakestoreaccountinformation)

### DataLakeStoreAccounts_Add
Updates the specified Data Lake Analytics account to include the additional Data Lake Store account.


```js
azure_datalake_analytics_account.DataLakeStoreAccounts_Add({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "dataLakeStoreAccountName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the Azure resource group.
  * accountName **required** `string`: The name of the Data Lake Analytics account.
  * dataLakeStoreAccountName **required** `string`: The name of the Data Lake Store account to add.
  * parameters [AddDataLakeStoreParameters](#adddatalakestoreparameters)
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*

### FirewallRules_ListByAccount
Lists the Data Lake Analytics firewall rules within the specified Data Lake Analytics account.


```js
azure_datalake_analytics_account.FirewallRules_ListByAccount({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the Azure resource group.
  * accountName **required** `string`: The name of the Data Lake Analytics account.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [FirewallRuleListResult](#firewallrulelistresult)

### FirewallRules_Delete
Deletes the specified firewall rule from the specified Data Lake Analytics account


```js
azure_datalake_analytics_account.FirewallRules_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "firewallRuleName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the Azure resource group.
  * accountName **required** `string`: The name of the Data Lake Analytics account.
  * firewallRuleName **required** `string`: The name of the firewall rule to delete.
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*

### FirewallRules_Get
Gets the specified Data Lake Analytics firewall rule.


```js
azure_datalake_analytics_account.FirewallRules_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "firewallRuleName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the Azure resource group.
  * accountName **required** `string`: The name of the Data Lake Analytics account.
  * firewallRuleName **required** `string`: The name of the firewall rule to retrieve.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [FirewallRule](#firewallrule)

### FirewallRules_Update
Updates the specified firewall rule.


```js
azure_datalake_analytics_account.FirewallRules_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "firewallRuleName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the Azure resource group.
  * accountName **required** `string`: The name of the Data Lake Analytics account.
  * firewallRuleName **required** `string`: The name of the firewall rule to update.
  * parameters [UpdateFirewallRuleParameters](#updatefirewallruleparameters)
  * api-version **required** `string`: Client Api Version.

#### Output
* output [FirewallRule](#firewallrule)

### FirewallRules_CreateOrUpdate
Creates or updates the specified firewall rule. During update, the firewall rule with the specified name will be replaced with this new firewall rule.


```js
azure_datalake_analytics_account.FirewallRules_CreateOrUpdate({
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
  * subscriptionId **required** `string`: Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the Azure resource group.
  * accountName **required** `string`: The name of the Data Lake Analytics account.
  * firewallRuleName **required** `string`: The name of the firewall rule to create or update.
  * parameters **required** [CreateOrUpdateFirewallRuleParameters](#createorupdatefirewallruleparameters)
  * api-version **required** `string`: Client Api Version.

#### Output
* output [FirewallRule](#firewallrule)

### StorageAccounts_ListByAccount
Gets the first page of Azure Storage accounts, if any, linked to the specified Data Lake Analytics account. The response includes a link to the next page, if any.


```js
azure_datalake_analytics_account.StorageAccounts_ListByAccount({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the Azure resource group.
  * accountName **required** `string`: The name of the Data Lake Analytics account.
  * $filter `string`: The OData filter. Optional.
  * $top `integer`: The number of items to return. Optional.
  * $skip `integer`: The number of items to skip over before returning elements. Optional.
  * $select `string`: OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional.
  * $orderby `string`: OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional.
  * $count `boolean`: The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [StorageAccountInformationListResult](#storageaccountinformationlistresult)

### StorageAccounts_Delete
Updates the specified Data Lake Analytics account to remove an Azure Storage account.


```js
azure_datalake_analytics_account.StorageAccounts_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "storageAccountName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the Azure resource group.
  * accountName **required** `string`: The name of the Data Lake Analytics account.
  * storageAccountName **required** `string`: The name of the Azure Storage account to remove
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*

### StorageAccounts_Get
Gets the specified Azure Storage account linked to the given Data Lake Analytics account.


```js
azure_datalake_analytics_account.StorageAccounts_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "storageAccountName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the Azure resource group.
  * accountName **required** `string`: The name of the Data Lake Analytics account.
  * storageAccountName **required** `string`: The name of the Azure Storage account for which to retrieve the details.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [StorageAccountInformation](#storageaccountinformation)

### StorageAccounts_Update
Updates the Data Lake Analytics account to replace Azure Storage blob account details, such as the access key and/or suffix.


```js
azure_datalake_analytics_account.StorageAccounts_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "storageAccountName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the Azure resource group.
  * accountName **required** `string`: The name of the Data Lake Analytics account.
  * storageAccountName **required** `string`: The Azure Storage account to modify
  * parameters [UpdateStorageAccountParameters](#updatestorageaccountparameters)
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*

### StorageAccounts_Add
Updates the specified Data Lake Analytics account to add an Azure Storage account.


```js
azure_datalake_analytics_account.StorageAccounts_Add({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "storageAccountName": "",
  "parameters": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the Azure resource group.
  * accountName **required** `string`: The name of the Data Lake Analytics account.
  * storageAccountName **required** `string`: The name of the Azure Storage account to add
  * parameters **required** [AddStorageAccountParameters](#addstorageaccountparameters)
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*

### StorageAccounts_ListStorageContainers
Lists the Azure Storage containers, if any, associated with the specified Data Lake Analytics and Azure Storage account combination. The response includes a link to the next page of results, if any.


```js
azure_datalake_analytics_account.StorageAccounts_ListStorageContainers({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "storageAccountName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the Azure resource group.
  * accountName **required** `string`: The name of the Data Lake Analytics account.
  * storageAccountName **required** `string`: The name of the Azure storage account from which to list blob containers.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [StorageContainerListResult](#storagecontainerlistresult)

### StorageAccounts_GetStorageContainer
Gets the specified Azure Storage container associated with the given Data Lake Analytics and Azure Storage accounts.


```js
azure_datalake_analytics_account.StorageAccounts_GetStorageContainer({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "storageAccountName": "",
  "containerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the Azure resource group.
  * accountName **required** `string`: The name of the Data Lake Analytics account.
  * storageAccountName **required** `string`: The name of the Azure storage account from which to retrieve the blob container.
  * containerName **required** `string`: The name of the Azure storage container to retrieve
  * api-version **required** `string`: Client Api Version.

#### Output
* output [StorageContainer](#storagecontainer)

### StorageAccounts_ListSasTokens
Gets the SAS token associated with the specified Data Lake Analytics and Azure Storage account and container combination.


```js
azure_datalake_analytics_account.StorageAccounts_ListSasTokens({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "storageAccountName": "",
  "containerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the Azure resource group.
  * accountName **required** `string`: The name of the Data Lake Analytics account.
  * storageAccountName **required** `string`: The name of the Azure storage account for which the SAS token is being requested.
  * containerName **required** `string`: The name of the Azure storage container for which the SAS token is being requested.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [SasTokenInformationListResult](#sastokeninformationlistresult)



## Definitions

### AddDataLakeStoreParameters
* AddDataLakeStoreParameters `object`: The parameters used to add a new Data Lake Store account.
  * properties [AddDataLakeStoreProperties](#adddatalakestoreproperties)

### AddDataLakeStoreProperties
* AddDataLakeStoreProperties `object`: The Data Lake Store account properties to use when adding a new Data Lake Store account.
  * suffix `string`: The optional suffix for the Data Lake Store account.

### AddDataLakeStoreWithAccountParameters
* AddDataLakeStoreWithAccountParameters `object`: The parameters used to add a new Data Lake Store account while creating a new Data Lake Analytics account.
  * name **required** `string`: The unique name of the Data Lake Store account to add.
  * properties [AddDataLakeStoreProperties](#adddatalakestoreproperties)

### AddStorageAccountParameters
* AddStorageAccountParameters `object`: The parameters used to add a new Azure Storage account.
  * properties **required** [AddStorageAccountProperties](#addstorageaccountproperties)

### AddStorageAccountProperties
* AddStorageAccountProperties `object`: The Azure Storage account properties to use when adding a new Azure Storage account.
  * accessKey **required** `string`: The access key associated with this Azure Storage account that will be used to connect to it.
  * suffix `string`: The optional suffix for the storage account.

### AddStorageAccountWithAccountParameters
* AddStorageAccountWithAccountParameters `object`: The parameters used to add a new Azure Storage account while creating a new Data Lake Analytics account.
  * name **required** `string`: The unique name of the Azure Storage account to add.
  * properties **required** [AddStorageAccountProperties](#addstorageaccountproperties)

### CapabilityInformation
* CapabilityInformation `object`: Subscription-level properties and limits for Data Lake Analytics.
  * accountCount `integer`: The current number of accounts under this subscription.
  * maxAccountCount `integer`: The maximum supported number of accounts under this subscription.
  * migrationState `boolean`: The Boolean value of true or false to indicate the maintenance state.
  * state `string` (values: Registered, Suspended, Deleted, Unregistered, Warned): The subscription state.
  * subscriptionId `string`: The subscription credentials that uniquely identifies the subscription.

### CheckNameAvailabilityParameters
* CheckNameAvailabilityParameters `object`: Data Lake Analytics account name availability check parameters.
  * name **required** `string`: The Data Lake Analytics name to check availability for.
  * type **required** `string` (values: Microsoft.DataLakeAnalytics/accounts): The resource type. Note: This should not be set by the user, as the constant value is Microsoft.DataLakeAnalytics/accounts

### ComputePolicy
* ComputePolicy `object`: Data Lake Analytics compute policy information.
  * properties [ComputePolicyProperties](#computepolicyproperties)
  * id `string`: The resource identifier.
  * name `string`: The resource name.
  * type `string`: The resource type.

### ComputePolicyListResult
* ComputePolicyListResult `object`: The list of compute policies in the account.
  * nextLink `string`: The link (url) to the next page of results.
  * value `array`: The results of the list operation.
    * items [ComputePolicy](#computepolicy)

### ComputePolicyProperties
* ComputePolicyProperties `object`: The compute policy properties.
  * maxDegreeOfParallelismPerJob `integer`: The maximum degree of parallelism per job this user can use to submit jobs.
  * minPriorityPerJob `integer`: The minimum priority per job this user can use to submit jobs.
  * objectId `string`: The AAD object identifier for the entity to create a policy for.
  * objectType `string` (values: User, Group, ServicePrincipal): The type of AAD object the object identifier refers to.

### CreateComputePolicyWithAccountParameters
* CreateComputePolicyWithAccountParameters `object`: The parameters used to create a new compute policy while creating a new Data Lake Analytics account.
  * name **required** `string`: The unique name of the compute policy to create.
  * properties **required** [CreateOrUpdateComputePolicyProperties](#createorupdatecomputepolicyproperties)

### CreateDataLakeAnalyticsAccountParameters
* CreateDataLakeAnalyticsAccountParameters `object`: The parameters to use for creating a Data Lake Analytics account.
  * location **required** `string`: The resource location.
  * properties **required** [CreateDataLakeAnalyticsAccountProperties](#createdatalakeanalyticsaccountproperties)
  * tags `object`: The resource tags.

### CreateDataLakeAnalyticsAccountProperties
* CreateDataLakeAnalyticsAccountProperties `object`
  * computePolicies `array`: The list of compute policies associated with this account.
    * items [CreateComputePolicyWithAccountParameters](#createcomputepolicywithaccountparameters)
  * dataLakeStoreAccounts **required** `array`: The list of Data Lake Store accounts associated with this account.
    * items [AddDataLakeStoreWithAccountParameters](#adddatalakestorewithaccountparameters)
  * defaultDataLakeStoreAccount **required** `string`: The default Data Lake Store account associated with this account.
  * firewallAllowAzureIps `string` (values: Enabled, Disabled): The current state of allowing or disallowing IPs originating within Azure through the firewall. If the firewall is disabled, this is not enforced.
  * firewallRules `array`: The list of firewall rules associated with this account.
    * items [CreateFirewallRuleWithAccountParameters](#createfirewallrulewithaccountparameters)
  * firewallState `string` (values: Enabled, Disabled): The current state of the IP address firewall for this account.
  * maxDegreeOfParallelism `integer`: The maximum supported degree of parallelism for this account.
  * maxDegreeOfParallelismPerJob `integer`: The maximum supported degree of parallelism per job for this account.
  * maxJobCount `integer`: The maximum supported jobs running under the account at the same time.
  * minPriorityPerJob `integer`: The minimum supported priority per job for this account.
  * newTier `string` (values: Consumption, Commitment_100AUHours, Commitment_500AUHours, Commitment_1000AUHours, Commitment_5000AUHours, Commitment_10000AUHours, Commitment_50000AUHours, Commitment_100000AUHours, Commitment_500000AUHours): The commitment tier for the next month.
  * queryStoreRetention `integer`: The number of days that job metadata is retained.
  * storageAccounts `array`: The list of Azure Blob Storage accounts associated with this account.
    * items [AddStorageAccountWithAccountParameters](#addstorageaccountwithaccountparameters)

### CreateFirewallRuleWithAccountParameters
* CreateFirewallRuleWithAccountParameters `object`: The parameters used to create a new firewall rule while creating a new Data Lake Analytics account.
  * name **required** `string`: The unique name of the firewall rule to create.
  * properties **required** [CreateOrUpdateFirewallRuleProperties](#createorupdatefirewallruleproperties)

### CreateOrUpdateComputePolicyParameters
* CreateOrUpdateComputePolicyParameters `object`: The parameters used to create a new compute policy.
  * properties **required** [CreateOrUpdateComputePolicyProperties](#createorupdatecomputepolicyproperties)

### CreateOrUpdateComputePolicyProperties
* CreateOrUpdateComputePolicyProperties `object`: The compute policy properties to use when creating a new compute policy.
  * maxDegreeOfParallelismPerJob `integer`: The maximum degree of parallelism per job this user can use to submit jobs. This property, the min priority per job property, or both must be passed.
  * minPriorityPerJob `integer`: The minimum priority per job this user can use to submit jobs. This property, the max degree of parallelism per job property, or both must be passed.
  * objectId **required** `string`: The AAD object identifier for the entity to create a policy for.
  * objectType **required** `string` (values: User, Group, ServicePrincipal): The type of AAD object the object identifier refers to.

### CreateOrUpdateFirewallRuleParameters
* CreateOrUpdateFirewallRuleParameters `object`: The parameters used to create a new firewall rule.
  * properties **required** [CreateOrUpdateFirewallRuleProperties](#createorupdatefirewallruleproperties)

### CreateOrUpdateFirewallRuleProperties
* CreateOrUpdateFirewallRuleProperties `object`: The firewall rule properties to use when creating a new firewall rule.
  * endIpAddress **required** `string`: The end IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End should be in the same protocol.
  * startIpAddress **required** `string`: The start IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End should be in the same protocol.

### DataLakeAnalyticsAccount
* DataLakeAnalyticsAccount `object`: A Data Lake Analytics account object, containing all information associated with the named Data Lake Analytics account.
  * properties [DataLakeAnalyticsAccountProperties](#datalakeanalyticsaccountproperties)
  * id `string`: The resource identifer.
  * location `string`: The resource location.
  * name `string`: The resource name.
  * tags `object`: The resource tags.
  * type `string`: The resource type.

### DataLakeAnalyticsAccountBasic
* DataLakeAnalyticsAccountBasic `object`: A Data Lake Analytics account object, containing all information associated with the named Data Lake Analytics account.
  * properties [DataLakeAnalyticsAccountPropertiesBasic](#datalakeanalyticsaccountpropertiesbasic)
  * id `string`: The resource identifer.
  * location `string`: The resource location.
  * name `string`: The resource name.
  * tags `object`: The resource tags.
  * type `string`: The resource type.

### DataLakeAnalyticsAccountListResult
* DataLakeAnalyticsAccountListResult `object`: Data Lake Analytics account list information.
  * nextLink `string`: The link (url) to the next page of results.
  * value `array`: The results of the list operation.
    * items [DataLakeAnalyticsAccountBasic](#datalakeanalyticsaccountbasic)

### DataLakeAnalyticsAccountProperties
* DataLakeAnalyticsAccountProperties `object`: The account specific properties that are associated with an underlying Data Lake Analytics account. Returned only when retrieving a specific account.
  * computePolicies `array`: The list of compute policies associated with this account.
    * items [ComputePolicy](#computepolicy)
  * currentTier `string` (values: Consumption, Commitment_100AUHours, Commitment_500AUHours, Commitment_1000AUHours, Commitment_5000AUHours, Commitment_10000AUHours, Commitment_50000AUHours, Commitment_100000AUHours, Commitment_500000AUHours): The commitment tier in use for the current month.
  * dataLakeStoreAccounts `array`: The list of Data Lake Store accounts associated with this account.
    * items [DataLakeStoreAccountInformation](#datalakestoreaccountinformation)
  * defaultDataLakeStoreAccount `string`: The default Data Lake Store account associated with this account.
  * firewallAllowAzureIps `string` (values: Enabled, Disabled): The current state of allowing or disallowing IPs originating within Azure through the firewall. If the firewall is disabled, this is not enforced.
  * firewallRules `array`: The list of firewall rules associated with this account.
    * items [FirewallRule](#firewallrule)
  * firewallState `string` (values: Enabled, Disabled): The current state of the IP address firewall for this account.
  * maxDegreeOfParallelism `integer`: The maximum supported degree of parallelism for this account.
  * maxDegreeOfParallelismPerJob `integer`: The maximum supported degree of parallelism per job for this account.
  * maxJobCount `integer`: The maximum supported jobs running under the account at the same time.
  * minPriorityPerJob `integer`: The minimum supported priority per job for this account.
  * newTier `string` (values: Consumption, Commitment_100AUHours, Commitment_500AUHours, Commitment_1000AUHours, Commitment_5000AUHours, Commitment_10000AUHours, Commitment_50000AUHours, Commitment_100000AUHours, Commitment_500000AUHours): The commitment tier for the next month.
  * queryStoreRetention `integer`: The number of days that job metadata is retained.
  * storageAccounts `array`: The list of Azure Blob Storage accounts associated with this account.
    * items [StorageAccountInformation](#storageaccountinformation)
  * systemMaxDegreeOfParallelism `integer`: The system defined maximum supported degree of parallelism for this account, which restricts the maximum value of parallelism the user can set for the account.
  * systemMaxJobCount `integer`: The system defined maximum supported jobs running under the account at the same time, which restricts the maximum number of running jobs the user can set for the account.
  * accountId `string`: The unique identifier associated with this Data Lake Analytics account.
  * creationTime `string`: The account creation time.
  * endpoint `string`: The full CName endpoint for this account.
  * lastModifiedTime `string`: The account last modified time.
  * provisioningState `string` (values: Failed, Creating, Running, Succeeded, Patching, Suspending, Resuming, Deleting, Deleted, Undeleting, Canceled): The provisioning status of the Data Lake Analytics account.
  * state `string` (values: Active, Suspended): The state of the Data Lake Analytics account.

### DataLakeAnalyticsAccountPropertiesBasic
* DataLakeAnalyticsAccountPropertiesBasic `object`: The basic account specific properties that are associated with an underlying Data Lake Analytics account.
  * accountId `string`: The unique identifier associated with this Data Lake Analytics account.
  * creationTime `string`: The account creation time.
  * endpoint `string`: The full CName endpoint for this account.
  * lastModifiedTime `string`: The account last modified time.
  * provisioningState `string` (values: Failed, Creating, Running, Succeeded, Patching, Suspending, Resuming, Deleting, Deleted, Undeleting, Canceled): The provisioning status of the Data Lake Analytics account.
  * state `string` (values: Active, Suspended): The state of the Data Lake Analytics account.

### DataLakeStoreAccountInformation
* DataLakeStoreAccountInformation `object`: Data Lake Store account information.
  * properties [DataLakeStoreAccountInformationProperties](#datalakestoreaccountinformationproperties)
  * id `string`: The resource identifier.
  * name `string`: The resource name.
  * type `string`: The resource type.

### DataLakeStoreAccountInformationListResult
* DataLakeStoreAccountInformationListResult `object`: Data Lake Store account list information.
  * nextLink `string`: The link (url) to the next page of results.
  * value `array`: The results of the list operation.
    * items [DataLakeStoreAccountInformation](#datalakestoreaccountinformation)

### DataLakeStoreAccountInformationProperties
* DataLakeStoreAccountInformationProperties `object`: The Data Lake Store account properties.
  * suffix `string`: The optional suffix for the Data Lake Store account.

### FirewallRule
* FirewallRule `object`: Data Lake Analytics firewall rule information.
  * properties [FirewallRuleProperties](#firewallruleproperties)
  * id `string`: The resource identifier.
  * name `string`: The resource name.
  * type `string`: The resource type.

### FirewallRuleListResult
* FirewallRuleListResult `object`: Data Lake Analytics firewall rule list information.
  * nextLink `string`: The link (url) to the next page of results.
  * value `array`: The results of the list operation.
    * items [FirewallRule](#firewallrule)

### FirewallRuleProperties
* FirewallRuleProperties `object`: The firewall rule properties.
  * endIpAddress `string`: The end IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End should be in the same protocol.
  * startIpAddress `string`: The start IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End should be in the same protocol.

### NameAvailabilityInformation
* NameAvailabilityInformation `object`: Data Lake Analytics account name availability result information.
  * message `string`: The message describing why the Data Lake Analytics account name is not available, if nameAvailable is false.
  * nameAvailable `boolean`: The Boolean value of true or false to indicate whether the Data Lake Analytics account name is available or not.
  * reason `string`: The reason why the Data Lake Analytics account name is not available, if nameAvailable is false.

### Operation
* Operation `object`: An available operation for Data Lake Analytics.
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
* OperationListResult `object`: The list of available operations for Data Lake Analytics.
  * nextLink `string`: The link (url) to the next page of results.
  * value `array`: The results of the list operation.
    * items [Operation](#operation)

### Resource
* Resource `object`: The resource model definition.
  * id `string`: The resource identifer.
  * location `string`: The resource location.
  * name `string`: The resource name.
  * tags `object`: The resource tags.
  * type `string`: The resource type.

### SasTokenInformation
* SasTokenInformation `object`: SAS token information.
  * accessToken `string`: The access token for the associated Azure Storage Container.

### SasTokenInformationListResult
* SasTokenInformationListResult `object`: The SAS response that contains the storage account, container and associated SAS token for connection use.
  * nextLink `string`: The link (url) to the next page of results.
  * value `array`: The results of the list operation.
    * items [SasTokenInformation](#sastokeninformation)

### StorageAccountInformation
* StorageAccountInformation `object`: Azure Storage account information.
  * properties [StorageAccountInformationProperties](#storageaccountinformationproperties)
  * id `string`: The resource identifier.
  * name `string`: The resource name.
  * type `string`: The resource type.

### StorageAccountInformationListResult
* StorageAccountInformationListResult `object`: Azure Storage account list information.
  * nextLink `string`: The link (url) to the next page of results.
  * value `array`: The results of the list operation.
    * items [StorageAccountInformation](#storageaccountinformation)

### StorageAccountInformationProperties
* StorageAccountInformationProperties `object`: The Azure Storage account properties.
  * suffix `string`: The optional suffix for the storage account.

### StorageContainer
* StorageContainer `object`: Azure Storage blob container information.
  * properties [StorageContainerProperties](#storagecontainerproperties)
  * id `string`: The resource identifier.
  * name `string`: The resource name.
  * type `string`: The resource type.

### StorageContainerListResult
* StorageContainerListResult `object`: The list of blob containers associated with the storage account attached to the Data Lake Analytics account.
  * nextLink `string`: The link (url) to the next page of results.
  * value `array`: The results of the list operation.
    * items [StorageContainer](#storagecontainer)

### StorageContainerProperties
* StorageContainerProperties `object`: Azure Storage blob container properties information.
  * lastModifiedTime `string`: The last modified time of the blob container.

### SubResource
* SubResource `object`: The resource model definition for a nested resource.
  * id `string`: The resource identifier.
  * name `string`: The resource name.
  * type `string`: The resource type.

### UpdateComputePolicyParameters
* UpdateComputePolicyParameters `object`: The parameters used to update a compute policy.
  * properties [UpdateComputePolicyProperties](#updatecomputepolicyproperties)

### UpdateComputePolicyProperties
* UpdateComputePolicyProperties `object`: The compute policy properties to use when updating a compute policy.
  * maxDegreeOfParallelismPerJob `integer`: The maximum degree of parallelism per job this user can use to submit jobs. This property, the min priority per job property, or both must be passed.
  * minPriorityPerJob `integer`: The minimum priority per job this user can use to submit jobs. This property, the max degree of parallelism per job property, or both must be passed.
  * objectId `string`: The AAD object identifier for the entity to create a policy for.
  * objectType `string` (values: User, Group, ServicePrincipal): The type of AAD object the object identifier refers to.

### UpdateComputePolicyWithAccountParameters
* UpdateComputePolicyWithAccountParameters `object`: The parameters used to update a compute policy while updating a Data Lake Analytics account.
  * name **required** `string`: The unique name of the compute policy to update.
  * properties [UpdateComputePolicyProperties](#updatecomputepolicyproperties)

### UpdateDataLakeAnalyticsAccountParameters
* UpdateDataLakeAnalyticsAccountParameters `object`: The parameters that can be used to update an existing Data Lake Analytics account.
  * properties [UpdateDataLakeAnalyticsAccountProperties](#updatedatalakeanalyticsaccountproperties)
  * tags `object`: The resource tags.

### UpdateDataLakeAnalyticsAccountProperties
* UpdateDataLakeAnalyticsAccountProperties `object`: The properties to update that are associated with an underlying Data Lake Analytics account.
  * computePolicies `array`: The list of compute policies associated with this account.
    * items [UpdateComputePolicyWithAccountParameters](#updatecomputepolicywithaccountparameters)
  * dataLakeStoreAccounts `array`: The list of Data Lake Store accounts associated with this account.
    * items [UpdateDataLakeStoreWithAccountParameters](#updatedatalakestorewithaccountparameters)
  * firewallAllowAzureIps `string` (values: Enabled, Disabled): The current state of allowing or disallowing IPs originating within Azure through the firewall. If the firewall is disabled, this is not enforced.
  * firewallRules `array`: The list of firewall rules associated with this account.
    * items [UpdateFirewallRuleWithAccountParameters](#updatefirewallrulewithaccountparameters)
  * firewallState `string` (values: Enabled, Disabled): The current state of the IP address firewall for this account. Disabling the firewall does not remove existing rules, they will just be ignored until the firewall is re-enabled.
  * maxDegreeOfParallelism `integer`: The maximum supported degree of parallelism for this account.
  * maxDegreeOfParallelismPerJob `integer`: The maximum supported degree of parallelism per job for this account.
  * maxJobCount `integer`: The maximum supported jobs running under the account at the same time.
  * minPriorityPerJob `integer`: The minimum supported priority per job for this account.
  * newTier `string` (values: Consumption, Commitment_100AUHours, Commitment_500AUHours, Commitment_1000AUHours, Commitment_5000AUHours, Commitment_10000AUHours, Commitment_50000AUHours, Commitment_100000AUHours, Commitment_500000AUHours): The commitment tier to use for next month.
  * queryStoreRetention `integer`: The number of days that job metadata is retained.
  * storageAccounts `array`: The list of Azure Blob storage accounts associated with this account.
    * items [UpdateStorageAccountWithAccountParameters](#updatestorageaccountwithaccountparameters)

### UpdateDataLakeStoreProperties
* UpdateDataLakeStoreProperties `object`: The Data Lake Store account properties to use when updating a Data Lake Store account.
  * suffix `string`: The optional suffix for the Data Lake Store account.

### UpdateDataLakeStoreWithAccountParameters
* UpdateDataLakeStoreWithAccountParameters `object`: The parameters used to update a Data Lake Store account while updating a Data Lake Analytics account.
  * name **required** `string`: The unique name of the Data Lake Store account to update.
  * properties [UpdateDataLakeStoreProperties](#updatedatalakestoreproperties)

### UpdateFirewallRuleParameters
* UpdateFirewallRuleParameters `object`: The parameters used to update a firewall rule.
  * properties [UpdateFirewallRuleProperties](#updatefirewallruleproperties)

### UpdateFirewallRuleProperties
* UpdateFirewallRuleProperties `object`: The firewall rule properties to use when updating a firewall rule.
  * endIpAddress `string`: The end IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End should be in the same protocol.
  * startIpAddress `string`: The start IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End should be in the same protocol.

### UpdateFirewallRuleWithAccountParameters
* UpdateFirewallRuleWithAccountParameters `object`: The parameters used to update a firewall rule while updating a Data Lake Analytics account.
  * name **required** `string`: The unique name of the firewall rule to update.
  * properties [UpdateFirewallRuleProperties](#updatefirewallruleproperties)

### UpdateStorageAccountParameters
* UpdateStorageAccountParameters `object`: The parameters used to update an Azure Storage account.
  * properties [UpdateStorageAccountProperties](#updatestorageaccountproperties)

### UpdateStorageAccountProperties
* UpdateStorageAccountProperties `object`: The Azure Storage account properties to use when updating an Azure Storage account.
  * accessKey `string`: The updated access key associated with this Azure Storage account that will be used to connect to it.
  * suffix `string`: The optional suffix for the storage account.

### UpdateStorageAccountWithAccountParameters
* UpdateStorageAccountWithAccountParameters `object`: The parameters used to update an Azure Storage account while updating a Data Lake Analytics account.
  * name **required** `string`: The unique name of the Azure Storage account to update.
  * properties [UpdateStorageAccountProperties](#updatestorageaccountproperties)


