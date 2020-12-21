# @datafire/azure_sql_manageddatabasesecurityalertpolicies

Client library for SqlManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_sql_manageddatabasesecurityalertpolicies
```
```js
let azure_sql_manageddatabasesecurityalertpolicies = require('@datafire/azure_sql_manageddatabasesecurityalertpolicies').create({
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

The Azure SQL Database management API provides a RESTful set of web APIs that interact with Azure SQL Database services to manage your databases. The API enables users to create, retrieve, update, and delete databases, servers, and other entities.

## Actions

### ManagedDatabaseSecurityAlertPolicies_ListByDatabase
Gets a list of managed database's security alert policies.


```js
azure_sql_manageddatabasesecurityalertpolicies.ManagedDatabaseSecurityAlertPolicies_ListByDatabase({
  "resourceGroupName": "",
  "managedInstanceName": "",
  "databaseName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * managedInstanceName **required** `string`: The name of the managed instance.
  * databaseName **required** `string`: The name of the managed database for which the security alert policies are defined.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [ManagedDatabaseSecurityAlertPolicyListResult](#manageddatabasesecurityalertpolicylistresult)

### ManagedDatabaseSecurityAlertPolicies_Get
Gets a managed database's security alert policy.


```js
azure_sql_manageddatabasesecurityalertpolicies.ManagedDatabaseSecurityAlertPolicies_Get({
  "resourceGroupName": "",
  "managedInstanceName": "",
  "databaseName": "",
  "securityAlertPolicyName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * managedInstanceName **required** `string`: The name of the managed instance.
  * databaseName **required** `string`: The name of the managed database for which the security alert policy is defined.
  * securityAlertPolicyName **required** `string` (values: default): The name of the security alert policy.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [ManagedDatabaseSecurityAlertPolicy](#manageddatabasesecurityalertpolicy)

### ManagedDatabaseSecurityAlertPolicies_CreateOrUpdate
Creates or updates a database's security alert policy.


```js
azure_sql_manageddatabasesecurityalertpolicies.ManagedDatabaseSecurityAlertPolicies_CreateOrUpdate({
  "resourceGroupName": "",
  "managedInstanceName": "",
  "databaseName": "",
  "securityAlertPolicyName": "",
  "parameters": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * managedInstanceName **required** `string`: The name of the managed instance.
  * databaseName **required** `string`: The name of the managed database for which the security alert policy is defined.
  * securityAlertPolicyName **required** `string` (values: default): The name of the security alert policy.
  * parameters **required** [ManagedDatabaseSecurityAlertPolicy](#manageddatabasesecurityalertpolicy)
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [ManagedDatabaseSecurityAlertPolicy](#manageddatabasesecurityalertpolicy)



## Definitions

### ManagedDatabaseSecurityAlertPolicy
* ManagedDatabaseSecurityAlertPolicy `object`: A managed database security alert policy.
  * properties [SecurityAlertPolicyProperties](#securityalertpolicyproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### ManagedDatabaseSecurityAlertPolicyListResult
* ManagedDatabaseSecurityAlertPolicyListResult `object`: A list of the managed database's security alert policies.
  * nextLink `string`: Link to retrieve next page of results.
  * value `array`: Array of results.
    * items [ManagedDatabaseSecurityAlertPolicy](#manageddatabasesecurityalertpolicy)

### SecurityAlertPolicyProperties
* SecurityAlertPolicyProperties `object`: Properties of a security alert policy.
  * creationTime `string`: Specifies the UTC creation time of the policy.
  * disabledAlerts `array`: Specifies an array of alerts that are disabled. Allowed values are: Sql_Injection, Sql_Injection_Vulnerability, Access_Anomaly, Data_Exfiltration, Unsafe_Action
    * items `string`
  * emailAccountAdmins `boolean`: Specifies that the alert is sent to the account administrators.
  * emailAddresses `array`: Specifies an array of e-mail addresses to which the alert is sent.
    * items `string`
  * retentionDays `integer`: Specifies the number of days to keep in the Threat Detection audit logs.
  * state **required** `string` (values: New, Enabled, Disabled): Specifies the state of the policy, whether it is enabled or disabled or a policy has not been applied yet on the specific database.
  * storageAccountAccessKey `string`: Specifies the identifier key of the Threat Detection audit storage account.
  * storageEndpoint `string`: Specifies the blob storage endpoint (e.g. https://MyAccount.blob.core.windows.net). This blob storage will hold all Threat Detection audit logs.


