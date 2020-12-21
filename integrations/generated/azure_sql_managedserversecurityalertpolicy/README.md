# @datafire/azure_sql_managedserversecurityalertpolicy

Client library for SqlManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_sql_managedserversecurityalertpolicy
```
```js
let azure_sql_managedserversecurityalertpolicy = require('@datafire/azure_sql_managedserversecurityalertpolicy').create({
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

### ManagedServerSecurityAlertPolicies_ListByInstance
Get the managed server's threat detection policies.


```js
azure_sql_managedserversecurityalertpolicy.ManagedServerSecurityAlertPolicies_ListByInstance({
  "resourceGroupName": "",
  "managedInstanceName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * managedInstanceName **required** `string`: The name of the managed instance.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [ManagedServerSecurityAlertPolicyListResult](#managedserversecurityalertpolicylistresult)

### ManagedServerSecurityAlertPolicies_Get
Get a managed server's threat detection policy.


```js
azure_sql_managedserversecurityalertpolicy.ManagedServerSecurityAlertPolicies_Get({
  "resourceGroupName": "",
  "managedInstanceName": "",
  "securityAlertPolicyName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * managedInstanceName **required** `string`: The name of the managed instance.
  * securityAlertPolicyName **required** `string` (values: Default): The name of the security alert policy.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [ManagedServerSecurityAlertPolicy](#managedserversecurityalertpolicy)

### ManagedServerSecurityAlertPolicies_CreateOrUpdate
Creates or updates a threat detection policy.


```js
azure_sql_managedserversecurityalertpolicy.ManagedServerSecurityAlertPolicies_CreateOrUpdate({
  "resourceGroupName": "",
  "managedInstanceName": "",
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
  * securityAlertPolicyName **required** `string` (values: Default): The name of the security alert policy.
  * parameters **required** [ManagedServerSecurityAlertPolicy](#managedserversecurityalertpolicy)
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [ManagedServerSecurityAlertPolicy](#managedserversecurityalertpolicy)



## Definitions

### ManagedServerSecurityAlertPolicy
* ManagedServerSecurityAlertPolicy `object`: A managed server security alert policy.
  * properties [SecurityAlertPolicyProperties](#securityalertpolicyproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### ManagedServerSecurityAlertPolicyListResult
* ManagedServerSecurityAlertPolicyListResult `object`: A list of the managed Server's security alert policies.
  * nextLink `string`: Link to retrieve next page of results.
  * value `array`: Array of results.
    * items [ManagedServerSecurityAlertPolicy](#managedserversecurityalertpolicy)

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


