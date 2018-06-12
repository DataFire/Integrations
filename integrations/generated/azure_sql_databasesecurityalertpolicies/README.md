# @datafire/azure_sql_databasesecurityalertpolicies

Client library for Database Threat Detection Policy APIs

## Installation and Usage
```bash
npm install --save @datafire/azure_sql_databasesecurityalertpolicies
```
```js
let azure_sql_databasesecurityalertpolicies = require('@datafire/azure_sql_databasesecurityalertpolicies').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_sql_databasesecurityalertpolicies.DatabaseThreatDetectionPolicies_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": "",
  "securityAlertPolicyName": "",
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description

Provides create, read and update functionality for database Threat Detection policies.

## Actions

### DatabaseThreatDetectionPolicies_Get
Gets a database's threat detection policy.


```js
azure_sql_databasesecurityalertpolicies.DatabaseThreatDetectionPolicies_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": "",
  "securityAlertPolicyName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * databaseName **required** `string`: The name of the database for which database Threat Detection policy is defined.
  * securityAlertPolicyName **required** `string` (values: default): The name of the security alert policy.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [DatabaseSecurityAlertPolicy](#databasesecurityalertpolicy)

### DatabaseThreatDetectionPolicies_CreateOrUpdate
Creates or updates a database's threat detection policy.


```js
azure_sql_databasesecurityalertpolicies.DatabaseThreatDetectionPolicies_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": "",
  "securityAlertPolicyName": "",
  "parameters": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * databaseName **required** `string`: The name of the database for which database Threat Detection policy is defined.
  * securityAlertPolicyName **required** `string` (values: default): The name of the security alert policy.
  * parameters **required** [DatabaseSecurityAlertPolicy](#databasesecurityalertpolicy)
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [DatabaseSecurityAlertPolicy](#databasesecurityalertpolicy)



## Definitions

### DatabaseSecurityAlertPolicy
* DatabaseSecurityAlertPolicy `object`: Contains information about a database Threat Detection policy.
  * kind `string`: Resource kind.
  * location `string`: The geo-location where the resource lives
  * properties [DatabaseSecurityAlertPolicyProperties](#databasesecurityalertpolicyproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### DatabaseSecurityAlertPolicyProperties
* DatabaseSecurityAlertPolicyProperties `object`: Properties for a database Threat Detection policy.
  * disabledAlerts `string`: Specifies the semicolon-separated list of alerts that are disabled, or empty string to disable no alerts. Possible values: Sql_Injection; Sql_Injection_Vulnerability; Access_Anomaly; Usage_Anomaly.
  * emailAccountAdmins `string` (values: Enabled, Disabled): Specifies that the alert is sent to the account administrators.
  * emailAddresses `string`: Specifies the semicolon-separated list of e-mail addresses to which the alert is sent.
  * retentionDays `integer`: Specifies the number of days to keep in the Threat Detection audit logs.
  * state **required** `string` (values: New, Enabled, Disabled): Specifies the state of the policy. If state is Enabled, storageEndpoint and storageAccountAccessKey are required.
  * storageAccountAccessKey `string`: Specifies the identifier key of the Threat Detection audit storage account. If state is Enabled, storageAccountAccessKey is required.
  * storageEndpoint `string`: Specifies the blob storage endpoint (e.g. https://MyAccount.blob.core.windows.net). This blob storage will hold all Threat Detection audit logs. If state is Enabled, storageEndpoint is required.
  * useServerDefault `string` (values: Enabled, Disabled): Specifies whether to use the default server policy.


