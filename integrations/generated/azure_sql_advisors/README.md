# @datafire/azure_sql_advisors

Client library for SqlManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_sql_advisors
```
```js
let azure_sql_advisors = require('@datafire/azure_sql_advisors').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_sql_advisors.ServerAdvisors_ListByServer({
  "resourceGroupName": "",
  "serverName": "",
  "subscriptionId": "",
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description

The Azure SQL Database management API provides a RESTful set of web APIs that interact with Azure SQL Database services to manage your databases. The API enables users to create, retrieve, update, and delete databases, servers, and other entities.

## Actions

### ServerAdvisors_ListByServer
Gets a list of server advisors.


```js
azure_sql_advisors.ServerAdvisors_ListByServer({
  "resourceGroupName": "",
  "serverName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output `array`
  * items [Advisor](#advisor)

### ServerAdvisors_Get
Gets a server advisor.


```js
azure_sql_advisors.ServerAdvisors_Get({
  "resourceGroupName": "",
  "serverName": "",
  "advisorName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * advisorName **required** `string`: The name of the Server Advisor.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [Advisor](#advisor)

### ServerAdvisors_Update
Updates a server advisor.


```js
azure_sql_advisors.ServerAdvisors_Update({
  "resourceGroupName": "",
  "serverName": "",
  "advisorName": "",
  "parameters": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * advisorName **required** `string`: The name of the Server Advisor.
  * parameters **required** [Advisor](#advisor)
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [Advisor](#advisor)

### DatabaseAdvisors_ListByDatabase
Gets a list of database advisors.


```js
azure_sql_advisors.DatabaseAdvisors_ListByDatabase({
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * databaseName **required** `string`: The name of the database.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output `array`
  * items [Advisor](#advisor)

### DatabaseAdvisors_Get
Gets a database advisor.


```js
azure_sql_advisors.DatabaseAdvisors_Get({
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": "",
  "advisorName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * databaseName **required** `string`: The name of the database.
  * advisorName **required** `string`: The name of the Database Advisor.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [Advisor](#advisor)

### DatabaseAdvisors_Update
Updates a database advisor.


```js
azure_sql_advisors.DatabaseAdvisors_Update({
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": "",
  "advisorName": "",
  "parameters": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * databaseName **required** `string`: The name of the database.
  * advisorName **required** `string`: The name of the Database Advisor.
  * parameters **required** [Advisor](#advisor)
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [Advisor](#advisor)

### DatabaseRecommendedActions_ListByDatabaseAdvisor
Gets list of Database Recommended Actions.


```js
azure_sql_advisors.DatabaseRecommendedActions_ListByDatabaseAdvisor({
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": "",
  "advisorName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * databaseName **required** `string`: The name of the database.
  * advisorName **required** `string`: The name of the Database Advisor.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output `array`
  * items [RecommendedAction](#recommendedaction)

### DatabaseRecommendedActions_Get
Gets a database recommended action.


```js
azure_sql_advisors.DatabaseRecommendedActions_Get({
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": "",
  "advisorName": "",
  "recommendedActionName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * databaseName **required** `string`: The name of the database.
  * advisorName **required** `string`: The name of the Database Advisor.
  * recommendedActionName **required** `string`: The name of Database Recommended Action.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [RecommendedAction](#recommendedaction)

### DatabaseRecommendedActions_Update
Updates a database recommended action.


```js
azure_sql_advisors.DatabaseRecommendedActions_Update({
  "resourceGroupName": "",
  "serverName": "",
  "databaseName": "",
  "advisorName": "",
  "recommendedActionName": "",
  "parameters": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * databaseName **required** `string`: The name of the database.
  * advisorName **required** `string`: The name of the Database Advisor.
  * recommendedActionName **required** `string`: The name of Database Recommended Action.
  * parameters **required** [RecommendedAction](#recommendedaction)
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [RecommendedAction](#recommendedaction)



## Definitions

### Advisor
* Advisor `object`: Database, Server or Elatic Pool Advisor.
  * kind `string`: Resource kind.
  * location `string`: Resource location.
  * properties [AdvisorProperties](#advisorproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### AdvisorProperties
* AdvisorProperties `object`: Properties for a Database, Server or Elastic Pool Advisor.
  * advisorStatus `string` (values: GA, PublicPreview, LimitedPublicPreview, PrivatePreview): Gets the status of availability of this advisor to customers. Possible values are 'GA', 'PublicPreview', 'LimitedPublicPreview' and 'PrivatePreview'.
  * autoExecuteStatus **required** `string` (values: Enabled, Disabled, Default): Gets the auto-execute status (whether to let the system execute the recommendations) of this advisor. Possible values are 'Enabled' and 'Disabled'
  * autoExecuteStatusInheritedFrom `string` (values: Default, Subscription, Server, ElasticPool, Database): Gets the resource from which current value of auto-execute status is inherited. Auto-execute status can be set on (and inhertied from) different levels in the resource heirarchy. Possible values are 'Subscription', 'Server', 'ElasticPool', 'Database' and 'Default' (when status is not explicitly set on any level).
  * lastChecked `string`: Gets the time when the current resource was analyzed for recommendations by this advisor.
  * recommendationsStatus `string`: Gets that status of recommendations for this advisor and reason for not having any recommendations. Possible values include, but are not limited to, 'Ok' (Recommendations available),LowActivity (not enough workload to analyze), 'DbSeemsTuned' (Database is doing well), etc.
  * recommendedActions `array`: Gets the recommended actions for this advisor.
    * items [RecommendedAction](#recommendedaction)

### RecommendedAction
* RecommendedAction `object`: Database, Server or Elastic Pool Recommended Action.
  * kind `string`: Resource kind.
  * location `string`: Resource location.
  * properties [RecommendedActionProperties](#recommendedactionproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### RecommendedActionErrorInfo
* RecommendedActionErrorInfo `object`: Contains error information for an Azure SQL Database, Server or Elastic Pool Recommended Action.
  * errorCode `string`: Gets the reason why the recommended action was put to error state. e.g., DatabaseHasQdsOff, IndexAlreadyExists
  * isRetryable `string` (values: Yes, No): Gets whether the error could be ignored and recommended action could be retried. Possible values are: Yes/No

### RecommendedActionImpactRecord
* RecommendedActionImpactRecord `object`: Contains information of estimated or observed impact on various metrics for an Azure SQL Database, Server or Elastic Pool Recommended Action.
  * absoluteValue `number`: Gets the absolute value of this dimension if applicable. e.g., Number of Queries affected
  * changeValueAbsolute `number`: Gets the absolute change in the value of this dimension. e.g., Absolute Disk space change in Megabytes
  * changeValueRelative `number`: Gets the relative change in the value of this dimension. e.g., Relative Disk space change in Percentage
  * dimensionName `string`: Gets the name of the impact dimension. e.g., CPUChange, DiskSpaceChange, NumberOfQueriesAffected.
  * unit `string`: Gets the name of the impact dimension. e.g., CPUChange, DiskSpaceChange, NumberOfQueriesAffected.

### RecommendedActionImplementationInfo
* RecommendedActionImplementationInfo `object`: Contains information for manual implementation for an Azure SQL Database, Server or Elastic Pool Recommended Action.
  * method `string` (values: TSql, AzurePowerShell): Gets the method in which this recommended action can be manually implemented. e.g., TSql, AzurePowerShell.
  * script `string`: Gets the manual implementation script. e.g., T-SQL script that could be executed on the database.

### RecommendedActionMetricInfo
* RecommendedActionMetricInfo `object`: Contains time series of various impacted metrics for an Azure SQL Database, Server or Elastic Pool Recommended Action.
  * metricName `string`: Gets the name of the metric. e.g., CPU, Number of Queries.
  * startTime `string`: Gets the start time of time interval given by this MetricInfo.
  * timeGrain `string`: Gets the duration of time interval for the value given by this MetricInfo. e.g., PT1H (1 hour)
  * unit `string`: Gets the unit in which metric is measured. e.g., DTU, Frequency
  * value `number`: Gets the value of the metric in the time interval given by this MetricInfo.

### RecommendedActionProperties
* RecommendedActionProperties `object`: Properties for a Database, Server or Elastic Pool Recommended Action.
  * details `object`: Gets additional details specific to this recommended action.
  * errorDetails [RecommendedActionErrorInfo](#recommendedactionerrorinfo)
  * estimatedImpact `array`: Gets the estimated impact info for this recommended action e.g., Estimated CPU gain, Estimated Disk Space change
    * items [RecommendedActionImpactRecord](#recommendedactionimpactrecord)
  * executeActionDuration `string`: Gets the time taken for applying this recommended action on user resource. e.g., time taken for index creation
  * executeActionInitiatedBy `string` (values: User, System): Gets if approval for applying this recommended action was given by user/system.
  * executeActionInitiatedTime `string`: Gets the time when this recommended action was approved for execution.
  * executeActionStartTime `string`: Gets the time when system started applying this recommended action on the user resource. e.g., index creation start time
  * implementationDetails [RecommendedActionImplementationInfo](#recommendedactionimplementationinfo)
  * isArchivedAction `boolean`: Gets if this recommended action was suggested some time ago but user chose to ignore this and system added a new recommended action again.
  * isExecutableAction `boolean`: Gets if this recommended action is actionable by user
  * isRevertableAction `boolean`: Gets if changes applied by this recommended action can be reverted by user
  * lastRefresh `string`: Gets time when this recommended action was last refreshed.
  * linkedObjects `array`: Gets the linked objects, if any.
    * items `string`
  * observedImpact `array`: Gets the observed/actual impact info for this recommended action e.g., Actual CPU gain, Actual Disk Space change
    * items [RecommendedActionImpactRecord](#recommendedactionimpactrecord)
  * recommendationReason `string`: Gets the reason for recommending this action. e.g., DuplicateIndex
  * revertActionDuration `string`: Gets the time taken for reverting changes of this recommended action on user resource. e.g., time taken for dropping the created index.
  * revertActionInitiatedBy `string` (values: User, System): Gets if approval for reverting this recommended action was given by user/system.
  * revertActionInitiatedTime `string`: Gets the time when this recommended action was approved for revert.
  * revertActionStartTime `string`: Gets the time when system started reverting changes of this recommended action on user resource. e.g., time when index drop is executed.
  * score `integer`: Gets the impact of this recommended action. Possible values are 1 - Low impact, 2 - Medium Impact and 3 - High Impact
  * state **required** [RecommendedActionStateInfo](#recommendedactionstateinfo)
  * timeSeries `array`: Gets the time series info of metrics for this recommended action e.g., CPU consumption time series
    * items [RecommendedActionMetricInfo](#recommendedactionmetricinfo)
  * validSince `string`: Gets the time since when this recommended action is valid.

### RecommendedActionStateInfo
* RecommendedActionStateInfo `object`: Contains information of current state for an Azure SQL Database, Server or Elastic Pool Recommended Action.
  * actionInitiatedBy `string` (values: User, System): Gets who initiated the execution of this recommended action. Possible Value are: User    -> When user explicity notified system to apply the recommended action. System  -> When auto-execute status of this advisor was set to 'Enabled', in which case the system applied it.
  * currentValue **required** `string` (values: Active, Pending, Executing, Verifying, PendingRevert, RevertCancelled, Reverting, Reverted, Ignored, Expired, Monitoring, Resolved, Success, Error): Current state the recommended action is in. Some commonly used states are: Active      -> recommended action is active and no action has been taken yet. Pending     -> recommended action is approved for and is awaiting execution. Executing   -> recommended action is being applied on the user database. Verifying   -> recommended action was applied and is being verified of its usefulness by the system. Success     -> recommended action was applied and improvement found during verification. Pending Revert  -> verification found little or no improvement so recommended action is queued for revert or user has manually reverted. Reverting   -> changes made while applying recommended action are being reverted on the user database. Reverted    -> succesfully reverted the changes made by recommended action on user database. Ignored     -> user explicitly ignored/discarded the recommended action. 
  * lastModified `string`: Gets the time when the state was last modified


