# @datafire/azure_hdinsight_scriptactions

Client library for HDInsightManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_hdinsight_scriptactions
```
```js
let azure_hdinsight_scriptactions = require('@datafire/azure_hdinsight_scriptactions').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_hdinsight_scriptactions.Clusters_ExecuteScriptActions({
  "resourceGroupName": "",
  "clusterName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}).then(data => {
  console.log(data);
});
```

## Description

The HDInsight Management Client.

## Actions

### Clusters_ExecuteScriptActions
Executes script actions on the specified HDInsight cluster.


```js
azure_hdinsight_scriptactions.Clusters_ExecuteScriptActions({
  "resourceGroupName": "",
  "clusterName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * clusterName **required** `string`: The name of the cluster.
  * parameters **required** `object`: The parameters for the script actions to execute on a running cluster.
    * persistOnSuccess **required** `boolean`: Gets or sets if the scripts needs to be persisted.
    * scriptActions `array`: The list of run time script actions.
      * items `object`: Describes a script action on a running cluster.
        * applicationName `string`: The application name of the script action, if any.
        * name **required** `string`: The name of the script action.
        * parameters `string`: The parameters for the script
        * roles **required** `array`: The list of roles where script will be executed.
          * items `string`
        * uri **required** `string`: The URI to the script.
  * api-version **required** `string`: The HDInsight client API Version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### ScriptActions_ListPersistedScripts
Lists all the persisted script actions for the specified cluster.


```js
azure_hdinsight_scriptactions.ScriptActions_ListPersistedScripts({
  "resourceGroupName": "",
  "clusterName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * clusterName **required** `string`: The name of the cluster.
  * api-version **required** `string`: The HDInsight client API Version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ScriptActionsList](#scriptactionslist)

### ScriptActions_Delete
Deletes a specified persisted script action of the cluster.


```js
azure_hdinsight_scriptactions.ScriptActions_Delete({
  "resourceGroupName": "",
  "clusterName": "",
  "scriptName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * clusterName **required** `string`: The name of the cluster.
  * scriptName **required** `string`: The name of the script.
  * api-version **required** `string`: The HDInsight client API Version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### ScriptExecutionHistory_List
Lists all scripts' execution history for the specified cluster.


```js
azure_hdinsight_scriptactions.ScriptExecutionHistory_List({
  "resourceGroupName": "",
  "clusterName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * clusterName **required** `string`: The name of the cluster.
  * api-version **required** `string`: The HDInsight client API Version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ScriptActionExecutionHistoryList](#scriptactionexecutionhistorylist)

### ScriptActions_GetExecutionDetail
Gets the script execution detail for the given script execution ID.


```js
azure_hdinsight_scriptactions.ScriptActions_GetExecutionDetail({
  "resourceGroupName": "",
  "clusterName": "",
  "scriptExecutionId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * clusterName **required** `string`: The name of the cluster.
  * scriptExecutionId **required** `string`: The script execution Id
  * api-version **required** `string`: The HDInsight client API Version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output: The execution details of a script action.
  * applicationName `string`: The application name of the script action, if any.
  * name **required** `string`: The name of the script action.
  * parameters `string`: The parameters for the script
  * roles **required** `array`: The list of roles where script will be executed.
    * items `string`
  * uri **required** `string`: The URI to the script.
  * debugInformation `string`: The script action execution debug information.
  * endTime `string`: The end time of script action execution.
  * executionSummary `array`: The summary of script action execution result.
    * items `object`: The execution summary of a script action.
      * instanceCount `integer`: The instance count for a given script action execution status.
      * status `string`: The status of script action execution.
  * operation `string`: The reason why the script action was executed.
  * scriptExecutionId `integer`: The execution id of the script action.
  * startTime `string`: The start time of script action execution.
  * status `string`: The current execution status of the script action.

### ScriptExecutionHistory_Promote
Promotes the specified ad-hoc script execution to a persisted script.


```js
azure_hdinsight_scriptactions.ScriptExecutionHistory_Promote({
  "resourceGroupName": "",
  "clusterName": "",
  "scriptExecutionId": 0,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * clusterName **required** `string`: The name of the cluster.
  * scriptExecutionId **required** `integer`: The script execution ID.
  * api-version **required** `string`: The HDInsight client API Version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*



## Definitions

### ClusterListRuntimeScriptActionDetailResult
* ClusterListRuntimeScriptActionDetailResult `object`: The list runtime script action detail response.
  * nextLink `string`: The link (url) to the next page of results.
  * value `array`: The list of persisted script action details for the cluster.
    * items: The execution details of a script action.
      * applicationName `string`: The application name of the script action, if any.
      * name **required** `string`: The name of the script action.
      * parameters `string`: The parameters for the script
      * roles **required** `array`: The list of roles where script will be executed.
        * items `string`
      * uri **required** `string`: The URI to the script.
      * debugInformation `string`: The script action execution debug information.
      * endTime `string`: The end time of script action execution.
      * executionSummary `array`: The summary of script action execution result.
        * items `object`: The execution summary of a script action.
          * instanceCount `integer`: The instance count for a given script action execution status.
          * status `string`: The status of script action execution.
      * operation `string`: The reason why the script action was executed.
      * scriptExecutionId `integer`: The execution id of the script action.
      * startTime `string`: The start time of script action execution.
      * status `string`: The current execution status of the script action.

### ScriptAction
* ScriptAction `object`: Describes a script action on role on the cluster.
  * name **required** `string`: The name of the script action.
  * parameters **required** `string`: The parameters for the script provided.
  * uri **required** `string`: The URI to the script.

### ScriptActionExecutionHistoryList
* ScriptActionExecutionHistoryList `object`: The list script execution history response.
  * nextLink `string`: The link (url) to the next page of results.
  * value `array`: The list of persisted script action details for the cluster.
    * items: The execution details of a script action.
      * applicationName `string`: The application name of the script action, if any.
      * name **required** `string`: The name of the script action.
      * parameters `string`: The parameters for the script
      * roles **required** `array`: The list of roles where script will be executed.
        * items `string`
      * uri **required** `string`: The URI to the script.
      * debugInformation `string`: The script action execution debug information.
      * endTime `string`: The end time of script action execution.
      * executionSummary `array`: The summary of script action execution result.
        * items `object`: The execution summary of a script action.
          * instanceCount `integer`: The instance count for a given script action execution status.
          * status `string`: The status of script action execution.
      * operation `string`: The reason why the script action was executed.
      * scriptExecutionId `integer`: The execution id of the script action.
      * startTime `string`: The start time of script action execution.
      * status `string`: The current execution status of the script action.

### ScriptActionPersistedGetResponseSpec
* ScriptActionPersistedGetResponseSpec `object`: The persisted script action for cluster.
  * applicationName `string`: The application name for the script action.
  * name `string`: The name of script action.
  * parameters `string`: The parameters for the script provided.
  * roles `array`: The list of roles where script will be executed.
    * items `string`
  * uri `string`: The URI to the script.

### ScriptActionsList
* ScriptActionsList `object`: The persisted script action for the cluster.
  * nextLink `string`: The link (url) to the next page of results.
  * value `array`: The list of persisted script action details for the cluster.
    * items: The execution details of a script action.
      * applicationName `string`: The application name of the script action, if any.
      * name **required** `string`: The name of the script action.
      * parameters `string`: The parameters for the script
      * roles **required** `array`: The list of roles where script will be executed.
        * items `string`
      * uri **required** `string`: The URI to the script.
      * debugInformation `string`: The script action execution debug information.
      * endTime `string`: The end time of script action execution.
      * executionSummary `array`: The summary of script action execution result.
        * items `object`: The execution summary of a script action.
          * instanceCount `integer`: The instance count for a given script action execution status.
          * status `string`: The status of script action execution.
      * operation `string`: The reason why the script action was executed.
      * scriptExecutionId `integer`: The execution id of the script action.
      * startTime `string`: The start time of script action execution.
      * status `string`: The current execution status of the script action.


