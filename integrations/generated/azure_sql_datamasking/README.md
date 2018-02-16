# @datafire/azure_sql_datamasking

Client library for Azure SQL Database Datamasking Policies and Rules

## Installation and Usage
```bash
npm install --save @datafire/azure_sql_datamasking
```
```js
let azure_sql_datamasking = require('@datafire/azure_sql_datamasking').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_sql_datamasking.DataMaskingPolicies_Get({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": "",
  "dataMaskingPolicyName": ""
}).then(data => {
  console.log(data);
});
```

## Description

Provides create, read, update and delete functionality for Azure SQL Database datamasking policies and rules.

## Actions

### DataMaskingPolicies_Get
Gets a database data masking policy.


```js
azure_sql_datamasking.DataMaskingPolicies_Get({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": "",
  "dataMaskingPolicyName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the request.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * databaseName **required** `string`: The name of the database.
  * dataMaskingPolicyName **required** `string` (values: Default): The name of the database for which the data masking rule applies.

#### Output
* output [DataMaskingPolicy](#datamaskingpolicy)

### DataMaskingPolicies_CreateOrUpdate
Creates or updates a database data masking policy


```js
azure_sql_datamasking.DataMaskingPolicies_CreateOrUpdate({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": "",
  "dataMaskingPolicyName": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the request.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * databaseName **required** `string`: The name of the database.
  * dataMaskingPolicyName **required** `string` (values: Default): The name of the database for which the data masking rule applies.
  * parameters **required** [DataMaskingPolicy](#datamaskingpolicy)

#### Output
* output [DataMaskingPolicy](#datamaskingpolicy)

### DataMaskingRules_ListByDatabase
Gets a list of database data masking rules.


```js
azure_sql_datamasking.DataMaskingRules_ListByDatabase({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": "",
  "dataMaskingPolicyName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the request.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * databaseName **required** `string`: The name of the database.
  * dataMaskingPolicyName **required** `string` (values: Default): The name of the database for which the data masking rule applies.

#### Output
* output [DataMaskingRuleListResult](#datamaskingrulelistresult)

### DataMaskingRules_CreateOrUpdate
Creates or updates a database data masking rule.


```js
azure_sql_datamasking.DataMaskingRules_CreateOrUpdate({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": "",
  "dataMaskingPolicyName": "",
  "dataMaskingRuleName": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the request.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * databaseName **required** `string`: The name of the database.
  * dataMaskingPolicyName **required** `string` (values: Default): The name of the database for which the data masking rule applies.
  * dataMaskingRuleName **required** `string`: The name of the data masking rule.
  * parameters **required** [DataMaskingRule](#datamaskingrule)

#### Output
* output [DataMaskingRule](#datamaskingrule)



## Definitions

### DataMaskingPolicy
* DataMaskingPolicy `object`: Represents a database data masking policy.
  * kind `string`: The kind of data masking policy. Metadata, used for Azure portal.
  * location `string`: The location of the data masking policy.
  * properties [DataMaskingPolicyProperties](#datamaskingpolicyproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### DataMaskingPolicyProperties
* DataMaskingPolicyProperties `object`: The properties of a database data masking policy.
  * applicationPrincipals `string`: The list of the application principals. This is a legacy parameter and is no longer used.
  * dataMaskingState **required** `string` (values: Disabled, Enabled): The state of the data masking policy.
  * exemptPrincipals `string`: The list of the exempt principals. Specifies the semicolon-separated list of database users for which the data masking policy does not apply. The specified users receive data results without masking for all of the database queries.
  * maskingLevel `string`: The masking level. This is a legacy parameter and is no longer used.

### DataMaskingRule
* DataMaskingRule `object`: Represents a database data masking rule.
  * kind `string`: The kind of Data Masking Rule. Metadata, used for Azure portal.
  * location `string`: The location of the data masking rule.
  * properties [DataMaskingRuleProperties](#datamaskingruleproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### DataMaskingRuleListResult
* DataMaskingRuleListResult `object`: The response to a list data masking rules request.
  * value `array`: The list of database data masking rules.
    * items [DataMaskingRule](#datamaskingrule)

### DataMaskingRuleProperties
* DataMaskingRuleProperties `object`: The properties of a database data masking rule.
  * aliasName `string`: The alias name. This is a legacy parameter and is no longer used.
  * columnName **required** `string`: The column name on which the data masking rule is applied.
  * id `string`: The rule Id.
  * maskingFunction **required** `string` (values: Default, CCN, Email, Number, SSN, Text): The masking function that is used for the data masking rule.
  * numberFrom `string`: The numberFrom property of the masking rule. Required if maskingFunction is set to Number, otherwise this parameter will be ignored.
  * numberTo `string`: The numberTo property of the data masking rule. Required if maskingFunction is set to Number, otherwise this parameter will be ignored.
  * prefixSize `string`: If maskingFunction is set to Text, the number of characters to show unmasked in the beginning of the string. Otherwise, this parameter will be ignored.
  * replacementString `string`: If maskingFunction is set to Text, the character to use for masking the unexposed part of the string. Otherwise, this parameter will be ignored.
  * ruleState `string` (values: Disabled, Enabled): The rule state. Used to delete a rule. To delete an existing rule, specify the schemaName, tableName, columnName, maskingFunction, and specify ruleState as disabled. However, if the rule doesn't already exist, the rule will be created with ruleState set to enabled, regardless of the provided value of ruleState.
  * schemaName **required** `string`: The schema name on which the data masking rule is applied.
  * suffixSize `string`: If maskingFunction is set to Text, the number of characters to show unmasked at the end of the string. Otherwise, this parameter will be ignored.
  * tableName **required** `string`: The table name on which the data masking rule is applied.

### ProxyResource
* ProxyResource: ARM proxy resource.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### Resource
* Resource `object`: ARM resource.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.


