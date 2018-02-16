# @datafire/azure_arm_documentdb

Client library for DocumentDB

## Installation and Usage
```bash
npm install --save @datafire/azure_arm_documentdb
```
```js
let azure_arm_documentdb = require('@datafire/azure_arm_documentdb').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_arm_documentdb.DatabaseAccounts_CheckNameExists({
  "accountName": "",
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description

Azure DocumentDB Database Service Resource Provider REST API

## Actions

### DatabaseAccounts_CheckNameExists
Checks that the Azure DocumentDB account name already exists. A valid account name may contain only lowercase letters, numbers, and the '-' character, and must be between 3 and 50 characters.


```js
azure_arm_documentdb.DatabaseAccounts_CheckNameExists({
  "accountName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * accountName **required** `string`: DocumentDB database account name.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2015-04-08.

#### Output
*Output schema unknown*

### DatabaseAccounts_List
Lists all the Azure DocumentDB database accounts available under the subscription.


```js
azure_arm_documentdb.DatabaseAccounts_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2015-04-08.
  * subscriptionId **required** `string`: Azure subscription ID.

#### Output
* output [DatabaseAccountsListResult](#databaseaccountslistresult)

### DatabaseAccounts_ListByResourceGroup
Lists all the Azure DocumentDB database accounts available under the given resource group.


```js
azure_arm_documentdb.DatabaseAccounts_ListByResourceGroup({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2015-04-08.
  * subscriptionId **required** `string`: Azure subscription ID.

#### Output
* output [DatabaseAccountsListResult](#databaseaccountslistresult)

### DatabaseAccounts_Delete
Deletes an existing Azure DocumentDB database account.


```js
azure_arm_documentdb.DatabaseAccounts_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: DocumentDB database account name.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2015-04-08.

#### Output
*Output schema unknown*

### DatabaseAccounts_Get
Retrieves the properties of an existing Azure DocumentDB database account.


```js
azure_arm_documentdb.DatabaseAccounts_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: DocumentDB database account name.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2015-04-08.

#### Output
* output [DatabaseAccount](#databaseaccount)

### DatabaseAccounts_Patch
Patches the properties of an existing Azure DocumentDB database account.


```js
azure_arm_documentdb.DatabaseAccounts_Patch({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "api-version": "",
  "updateParameters": {
    "tags": {}
  }
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: DocumentDB database account name.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2015-04-08.
  * updateParameters **required** [DatabaseAccountPatchParameters](#databaseaccountpatchparameters)

#### Output
* output [DatabaseAccount](#databaseaccount)

### DatabaseAccounts_CreateOrUpdate
Creates or updates an Azure DocumentDB database account.


```js
azure_arm_documentdb.DatabaseAccounts_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "api-version": "",
  "createUpdateParameters": {
    "properties": {
      "locations": [],
      "databaseAccountOfferType": ""
    },
    "location": ""
  }
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: DocumentDB database account name.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2015-04-08.
  * createUpdateParameters **required** [DatabaseAccountCreateUpdateParameters](#databaseaccountcreateupdateparameters)

#### Output
* output [DatabaseAccount](#databaseaccount)

### DatabaseAccounts_FailoverPriorityChange
Changes the failover priority for the Azure DocumentDB database account. A failover priority of 0 indicates a write region. The maximum value for a failover priority = (total number of regions - 1). Failover priority values must be unique for each of the regions in which the database account exists.


```js
azure_arm_documentdb.DatabaseAccounts_FailoverPriorityChange({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "api-version": "",
  "failoverParameters": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: DocumentDB database account name.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2015-04-08.
  * failoverParameters **required** [FailoverPolicies](#failoverpolicies)

#### Output
*Output schema unknown*

### DatabaseAccounts_ListConnectionStrings
Lists the connection strings for the specified Azure DocumentDB database account.


```js
azure_arm_documentdb.DatabaseAccounts_ListConnectionStrings({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: DocumentDB database account name.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2015-04-08.

#### Output
* output [DatabaseAccountListConnectionStringsResult](#databaseaccountlistconnectionstringsresult)

### DatabaseAccounts_ListKeys
Lists the access keys for the specified Azure DocumentDB database account.


```js
azure_arm_documentdb.DatabaseAccounts_ListKeys({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: DocumentDB database account name.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2015-04-08.

#### Output
* output [DatabaseAccountListKeysResult](#databaseaccountlistkeysresult)

### DatabaseAccounts_ListReadOnlyKeys
Lists the read-only access keys for the specified Azure DocumentDB database account.


```js
azure_arm_documentdb.DatabaseAccounts_ListReadOnlyKeys({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: DocumentDB database account name.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2015-04-08.

#### Output
* output [DatabaseAccountListReadOnlyKeysResult](#databaseaccountlistreadonlykeysresult)

### DatabaseAccounts_RegenerateKey
Regenerates an access key for the specified Azure DocumentDB database account.


```js
azure_arm_documentdb.DatabaseAccounts_RegenerateKey({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "api-version": "",
  "keyToRegenerate": {
    "keyKind": ""
  }
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure resource group.
  * accountName **required** `string`: DocumentDB database account name.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2015-04-08.
  * keyToRegenerate **required** [DatabaseAccountRegenerateKeyParameters](#databaseaccountregeneratekeyparameters)

#### Output
*Output schema unknown*



## Definitions

### ConsistencyPolicy
* ConsistencyPolicy `object`: The consistency policy for the DocumentDB database account.
  * defaultConsistencyLevel **required** `string` (values: Eventual, Session, BoundedStaleness, Strong): The default consistency level and configuration settings of the DocumentDB account.
  * maxIntervalInSeconds `integer`: When used with the Bounded Staleness consistency level, this value represents the time amount of staleness (in seconds) tolerated. Accepted range for this value is 1 - 100. Required when defaultConsistencyPolicy is set to 'BoundedStaleness'.
  * maxStalenessPrefix `integer`: When used with the Bounded Staleness consistency level, this value represents the number of stale requests tolerated. Accepted range for this value is 1 – 2,147,483,647. Required when defaultConsistencyPolicy is set to 'BoundedStaleness'.

### DatabaseAccount
* DatabaseAccount `object`: A DocumentDB database account.
  * kind `string` (values: GlobalDocumentDB, MongoDB, Parse): Indicates the type of database account. This can only be set at database account creation.
  * properties [DatabaseAccountProperties](#databaseaccountproperties)
  * id `string`: The unique resource identifier of the database account.
  * location **required** `string`: The location of the resource group to which the resource belongs.
  * name `string`: The name of the database account.
  * tags [Tags](#tags)
  * type `string`: The type of Azure resource.

### DatabaseAccountConnectionString
* DatabaseAccountConnectionString `object`: Connection string for the DocumentDB account
  * connectionString `string`: Value of the connection string
  * description `string`: Description of the connection string

### DatabaseAccountCreateUpdateParameters
* DatabaseAccountCreateUpdateParameters `object`: Parameters to create and update DocumentDB database accounts.
  * kind `string` (values: GlobalDocumentDB, MongoDB, Parse): Indicates the type of database account. This can only be set at database account creation.
  * properties **required** [DatabaseAccountCreateUpdateProperties](#databaseaccountcreateupdateproperties)
  * id `string`: The unique resource identifier of the database account.
  * location **required** `string`: The location of the resource group to which the resource belongs.
  * name `string`: The name of the database account.
  * tags [Tags](#tags)
  * type `string`: The type of Azure resource.

### DatabaseAccountCreateUpdateProperties
* DatabaseAccountCreateUpdateProperties `object`: Properties to create and update Azure DocumentDB database accounts.
  * consistencyPolicy [ConsistencyPolicy](#consistencypolicy)
  * databaseAccountOfferType **required** [DatabaseAccountOfferType](#databaseaccountoffertype)
  * ipRangeFilter [IPRangeFilter](#iprangefilter)
  * locations **required** `array`: An array that contains the georeplication locations enabled for the DocumentDB account.
    * items [Location](#location)

### DatabaseAccountListConnectionStringsResult
* DatabaseAccountListConnectionStringsResult `object`: The connection strings for the given database account.
  * connectionStrings `array`: An array that contains the connection strings for the DocumentDB account.
    * items [DatabaseAccountConnectionString](#databaseaccountconnectionstring)

### DatabaseAccountListKeysResult
* DatabaseAccountListKeysResult `object`: The access keys for the given database account.
  * primaryMasterKey `string`: Base 64 encoded value of the primary read-write key.
  * properties [DatabaseAccountListReadOnlyKeysResult](#databaseaccountlistreadonlykeysresult)
  * secondaryMasterKey `string`: Base 64 encoded value of the secondary read-write key.

### DatabaseAccountListReadOnlyKeysResult
* DatabaseAccountListReadOnlyKeysResult `object`: The read-only access keys for the given database account.
  * primaryReadonlyMasterKey `string`: Base 64 encoded value of the primary read-only key.
  * secondaryReadonlyMasterKey `string`: Base 64 encoded value of the secondary read-only key.

### DatabaseAccountOfferType
* DatabaseAccountOfferType `string` (values: Standard): The offer type for the DocumentDB database account.

### DatabaseAccountPatchParameters
* DatabaseAccountPatchParameters `object`: Parameters for patching Azure DocumentDB database account properties.
  * tags **required** [Tags](#tags)

### DatabaseAccountProperties
* DatabaseAccountProperties `object`: Properties for the database account.
  * consistencyPolicy [ConsistencyPolicy](#consistencypolicy)
  * databaseAccountOfferType [DatabaseAccountOfferType](#databaseaccountoffertype)
  * documentEndpoint `string`: The connection endpoint for the DocumentDB database account.
  * failoverPolicies `array`: An array that contains the regions ordered by their failover priorities.
    * items [FailoverPolicy](#failoverpolicy)
  * ipRangeFilter [IPRangeFilter](#iprangefilter)
  * provisioningState [ProvisioningState](#provisioningstate)
  * readLocations `array`: An array that contains of the read locations enabled for the DocumentDB account.
    * items [Location](#location)
  * writeLocations `array`: An array that contains the write location for the DocumentDB account.
    * items [Location](#location)

### DatabaseAccountRegenerateKeyParameters
* DatabaseAccountRegenerateKeyParameters `object`: Parameters to regenerate the keys within the database account.
  * keyKind **required** `string` (values: primary, secondary, primaryReadonly, secondaryReadonly): The access key to regenerate.

### DatabaseAccountsListResult
* DatabaseAccountsListResult `object`: The List operation response, that contains the database accounts and their properties.
  * value `array`: List of database account and their properties.
    * items [DatabaseAccount](#databaseaccount)

### FailoverPolicies
* FailoverPolicies `object`: The list of new failover policies for the failover priority change.
  * failoverPolicies `array`: List of failover policies.
    * items [FailoverPolicy](#failoverpolicy)

### FailoverPolicy
* FailoverPolicy `object`: The failover policy for a given region of a database account.
  * failoverPriority `integer`: The failover priority of the region. A failover priority of 0 indicates a write region. The maximum value for a failover priority = (total number of regions - 1). Failover priority values must be unique for each of the regions in which the database account exists.
  * id `string`: The unique identifier of the region in which the database account replicates to. Example: &lt;accountName&gt;-&lt;locationName&gt;.
  * locationName `string`: The name of the region in which the database account exists.

### IPRangeFilter
* IPRangeFilter `string`: DocumentDB Firewall Support: This value specifies the set of IP addresses or IP address ranges in CIDR form to be included as the allowed list of client IPs for a given database account. IP addresses/ranges must be comma separated and must not contain any spaces.

### Location
* Location `object`: A region in which the Azure DocumentDB database account is deployed.
  * documentEndpoint `string`: The connection endpoint for the specific region. Example: https://&lt;accountName&gt;-&lt;locationName&gt;.documents.azure.com:443/
  * failoverPriority `integer`: The failover priority of the region. A failover priority of 0 indicates a write region. The maximum value for a failover priority = (total number of regions - 1). Failover priority values must be unique for each of the regions in which the database account exists.
  * id `string`: The unique identifier of the region within the database account. Example: &lt;accountName&gt;-&lt;locationName&gt;.
  * locationName `string`: The name of the region.
  * provisioningState [ProvisioningState](#provisioningstate)

### ProvisioningState
* ProvisioningState `string`: The status of the DocumentDB account at the time the operation was called. The status can be one of following. 'Creating' – the DocumentDB account is being created. When an account is in Creating state, only properties that are specified as input for the Create DocumentDB account operation are returned. 'Succeeded' – the DocumentDB account is active for use. 'Updating' – the DocumentDB account is being updated. 'Deleting' – the DocumentDB account is being deleted. 'Failed' – the DocumentDB account failed creation.

### Resource
* Resource `object`: A database account resource.
  * id `string`: The unique resource identifier of the database account.
  * location **required** `string`: The location of the resource group to which the resource belongs.
  * name `string`: The name of the database account.
  * tags [Tags](#tags)
  * type `string`: The type of Azure resource.

### Tags
* Tags `object`: Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters.


