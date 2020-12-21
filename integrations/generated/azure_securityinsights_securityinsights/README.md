# @datafire/azure_securityinsights_securityinsights

Client library for Security Insights

## Installation and Usage
```bash
npm install --save @datafire/azure_securityinsights_securityinsights
```
```js
let azure_securityinsights_securityinsights = require('@datafire/azure_securityinsights_securityinsights').create({
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

API spec for Microsoft.SecurityInsights (Azure Security Insights) resource provider

## Actions

### Operations_List
Lists all operations available Azure Security Insights Resource Provider.


```js
azure_securityinsights_securityinsights.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2020-01-01): API version for the operation

#### Output
* output [OperationsList](#operationslist)

### AlertRules_List
Gets all alert rules.


```js
azure_securityinsights_securityinsights.AlertRules_List({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2020-01-01): API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.
  * workspaceName **required** `string`: The name of the workspace.

#### Output
* output [AlertRulesList](#alertruleslist)

### AlertRules_Delete
Delete the alert rule.


```js
azure_securityinsights_securityinsights.AlertRules_Delete({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "ruleId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2020-01-01): API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.
  * workspaceName **required** `string`: The name of the workspace.
  * ruleId **required** `string`: Alert rule ID

#### Output
*Output schema unknown*

### AlertRules_Get
Gets the alert rule.


```js
azure_securityinsights_securityinsights.AlertRules_Get({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "ruleId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2020-01-01): API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.
  * workspaceName **required** `string`: The name of the workspace.
  * ruleId **required** `string`: Alert rule ID

#### Output
* output [AlertRule](#alertrule)

### AlertRules_CreateOrUpdate
Creates or updates the alert rule.


```js
azure_securityinsights_securityinsights.AlertRules_CreateOrUpdate({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "ruleId": "",
  "alertRule": {
    "kind": ""
  }
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2020-01-01): API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.
  * workspaceName **required** `string`: The name of the workspace.
  * ruleId **required** `string`: Alert rule ID
  * alertRule **required** [AlertRule](#alertrule)

#### Output
* output [AlertRule](#alertrule)

### Actions_ListByAlertRule
Gets all actions of alert rule.


```js
azure_securityinsights_securityinsights.Actions_ListByAlertRule({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "ruleId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2020-01-01): API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.
  * workspaceName **required** `string`: The name of the workspace.
  * ruleId **required** `string`: Alert rule ID

#### Output
* output [ActionsList](#actionslist)

### AlertRules_DeleteAction
Delete the action of alert rule.


```js
azure_securityinsights_securityinsights.AlertRules_DeleteAction({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "ruleId": "",
  "actionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2020-01-01): API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.
  * workspaceName **required** `string`: The name of the workspace.
  * ruleId **required** `string`: Alert rule ID
  * actionId **required** `string`: Action ID

#### Output
*Output schema unknown*

### AlertRules_GetAction
Gets the action of alert rule.


```js
azure_securityinsights_securityinsights.AlertRules_GetAction({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "ruleId": "",
  "actionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2020-01-01): API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.
  * workspaceName **required** `string`: The name of the workspace.
  * ruleId **required** `string`: Alert rule ID
  * actionId **required** `string`: Action ID

#### Output
* output [ActionResponse](#actionresponse)

### AlertRules_CreateOrUpdateAction
Creates or updates the action of alert rule.


```js
azure_securityinsights_securityinsights.AlertRules_CreateOrUpdateAction({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "ruleId": "",
  "actionId": "",
  "action": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2020-01-01): API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.
  * workspaceName **required** `string`: The name of the workspace.
  * ruleId **required** `string`: Alert rule ID
  * actionId **required** `string`: Action ID
  * action **required** [ActionRequest](#actionrequest)

#### Output
* output [ActionResponse](#actionresponse)

### DataConnectors_List
Gets all data connectors.


```js
azure_securityinsights_securityinsights.DataConnectors_List({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2020-01-01): API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.
  * workspaceName **required** `string`: The name of the workspace.

#### Output
* output [DataConnectorList](#dataconnectorlist)

### DataConnectors_Delete
Delete the data connector.


```js
azure_securityinsights_securityinsights.DataConnectors_Delete({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "dataConnectorId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2020-01-01): API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.
  * workspaceName **required** `string`: The name of the workspace.
  * dataConnectorId **required** `string`: Connector ID

#### Output
*Output schema unknown*

### DataConnectors_Get
Gets a data connector.


```js
azure_securityinsights_securityinsights.DataConnectors_Get({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "dataConnectorId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2020-01-01): API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.
  * workspaceName **required** `string`: The name of the workspace.
  * dataConnectorId **required** `string`: Connector ID

#### Output
* output [DataConnector](#dataconnector)

### DataConnectors_CreateOrUpdate
Creates or updates the data connector.


```js
azure_securityinsights_securityinsights.DataConnectors_CreateOrUpdate({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "dataConnectorId": "",
  "dataConnector": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2020-01-01): API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.
  * workspaceName **required** `string`: The name of the workspace.
  * dataConnectorId **required** `string`: Connector ID
  * dataConnector **required** [DataConnector](#dataconnector)

#### Output
* output [DataConnector](#dataconnector)



## Definitions

### AADDataConnector
* AADDataConnector `object`: Represents AAD (Azure Active Directory) data connector.
  * properties [AADDataConnectorProperties](#aaddataconnectorproperties)
  * etag `string`: Etag of the azure resource
  * id `string`: Azure resource Id
  * name `string`: Azure resource name
  * type `string`: Azure resource type
  * kind `string` (values: AzureActiveDirectory, AzureSecurityCenter, MicrosoftCloudAppSecurity, ThreatIntelligence, Office365, AmazonWebServicesCloudTrail, AzureAdvancedThreatProtection, MicrosoftDefenderAdvancedThreatProtection): The kind of the data connector

### AADDataConnectorProperties
* AADDataConnectorProperties `object`: AAD (Azure Active Directory) data connector properties.
  * tenantId `string`: The tenant id to connect to, and get the data from.
  * dataTypes [AlertsDataTypeOfDataConnector](#alertsdatatypeofdataconnector)

### AATPDataConnector
* AATPDataConnector `object`: Represents AATP (Azure Advanced Threat Protection) data connector.
  * properties [AATPDataConnectorProperties](#aatpdataconnectorproperties)
  * etag `string`: Etag of the azure resource
  * id `string`: Azure resource Id
  * name `string`: Azure resource name
  * type `string`: Azure resource type
  * kind `string` (values: AzureActiveDirectory, AzureSecurityCenter, MicrosoftCloudAppSecurity, ThreatIntelligence, Office365, AmazonWebServicesCloudTrail, AzureAdvancedThreatProtection, MicrosoftDefenderAdvancedThreatProtection): The kind of the data connector

### AATPDataConnectorProperties
* AATPDataConnectorProperties `object`: AATP (Azure Advanced Threat Protection) data connector properties.
  * tenantId `string`: The tenant id to connect to, and get the data from.
  * dataTypes [AlertsDataTypeOfDataConnector](#alertsdatatypeofdataconnector)

### ASCDataConnector
* ASCDataConnector `object`: Represents ASC (Azure Security Center) data connector.
  * properties [ASCDataConnectorProperties](#ascdataconnectorproperties)
  * etag `string`: Etag of the azure resource
  * id `string`: Azure resource Id
  * name `string`: Azure resource name
  * type `string`: Azure resource type
  * kind `string` (values: AzureActiveDirectory, AzureSecurityCenter, MicrosoftCloudAppSecurity, ThreatIntelligence, Office365, AmazonWebServicesCloudTrail, AzureAdvancedThreatProtection, MicrosoftDefenderAdvancedThreatProtection): The kind of the data connector

### ASCDataConnectorProperties
* ASCDataConnectorProperties `object`: ASC (Azure Security Center) data connector properties.
  * subscriptionId `string`: The subscription id to connect to, and get the data from.
  * dataTypes [AlertsDataTypeOfDataConnector](#alertsdatatypeofdataconnector)

### ActionPropertiesBase
* ActionPropertiesBase `object`: Action property bag base.
  * logicAppResourceId **required** `string`: Logic App Resource Id, providers/Microsoft.Logic/workflows/{WorkflowID}.

### ActionRequest
* ActionRequest `object`: Action for alert rule.
  * properties [ActionRequestProperties](#actionrequestproperties)
  * etag `string`: Etag of the azure resource
  * id `string`: Azure resource Id
  * name `string`: Azure resource name
  * type `string`: Azure resource type

### ActionRequestProperties
* ActionRequestProperties `object`: Action property bag.
  * triggerUri `string`: Logic App Callback URL for this specific workflow.
  * logicAppResourceId **required** `string`: Logic App Resource Id, providers/Microsoft.Logic/workflows/{WorkflowID}.

### ActionResponse
* ActionResponse `object`: Action for alert rule.
  * etag `string`: Etag of the action.
  * properties [ActionResponseProperties](#actionresponseproperties)
  * id `string`: Azure resource Id
  * name `string`: Azure resource name
  * type `string`: Azure resource type

### ActionResponseProperties
* ActionResponseProperties `object`: Action property bag.
  * workflowId `string`: The name of the logic app's workflow.
  * logicAppResourceId **required** `string`: Logic App Resource Id, providers/Microsoft.Logic/workflows/{WorkflowID}.

### ActionsList
* ActionsList `object`: List all the actions.
  * nextLink `string`: URL to fetch the next set of actions.
  * value **required** `array`: Array of actions.
    * items [ActionResponse](#actionresponse)

### AlertRule
* AlertRule `object`: Alert rule.
  * etag `string`: Etag of the azure resource
  * id `string`: Azure resource Id
  * name `string`: Azure resource name
  * type `string`: Azure resource type
  * kind **required** `string` (values: Scheduled, MicrosoftSecurityIncidentCreation, Fusion): The kind of the alert rule

### AlertRuleKind
* AlertRuleKind `object`: Describes an Azure resource with kind.
  * kind **required** `string` (values: Scheduled, MicrosoftSecurityIncidentCreation, Fusion): The kind of the alert rule

### AlertRuleTemplate
* AlertRuleTemplate `object`: Alert rule template.
  * id `string`: Azure resource Id
  * name `string`: Azure resource name
  * type `string`: Azure resource type
  * kind **required** `string` (values: Scheduled, MicrosoftSecurityIncidentCreation, Fusion): The kind of the alert rule

### AlertRuleTemplateDataSource
* AlertRuleTemplateDataSource `object`: alert rule template data sources
  * connectorId `string`: The connector id that provides the following data types
  * dataTypes `array`: The data types used by the alert rule template
    * items `string`

### AlertRuleTemplatePropertiesBase
* AlertRuleTemplatePropertiesBase `object`: Base alert rule template property bag.
  * alertRulesCreatedByTemplateCount `integer`: the number of alert rules that were created by this template
  * createdDateUTC `string`: The time that this alert rule template has been added.
  * description `string`: The description of the alert rule template.
  * displayName `string`: The display name for alert rule template.
  * requiredDataConnectors `array`: The required data connectors for this template
    * items [AlertRuleTemplateDataSource](#alertruletemplatedatasource)
  * status `string` (values: Installed, Available, NotAvailable): The alert rule template status.

### AlertRuleTriggerOperator
* AlertRuleTriggerOperator `string` (values: GreaterThan, LessThan, Equal, NotEqual): The operation against the threshold that triggers alert rule.

### AlertRulesList
* AlertRulesList `object`: List all the alert rules.
  * nextLink `string`: URL to fetch the next set of alert rules.
  * value **required** `array`: Array of alert rules.
    * items [AlertRule](#alertrule)

### AlertSeverity
* AlertSeverity `string` (values: High, Medium, Low, Informational): The severity of the alert

### AlertsDataTypeOfDataConnector
* AlertsDataTypeOfDataConnector `object`: Alerts data type for data connectors.
  * alerts `object`: Alerts data type connection.
    * state `string` (values: Enabled, Disabled): Describe whether this data type connection is enabled or not.

### AttackTactic
* AttackTactic `string` (values: InitialAccess, Execution, Persistence, PrivilegeEscalation, DefenseEvasion, CredentialAccess, Discovery, LateralMovement, Collection, Exfiltration, CommandAndControl, Impact): The severity for alerts created by this alert rule.

### AwsCloudTrailDataConnector
* AwsCloudTrailDataConnector `object`: Represents Amazon Web Services CloudTrail data connector.
  * properties [AwsCloudTrailDataConnectorProperties](#awscloudtraildataconnectorproperties)
  * etag `string`: Etag of the azure resource
  * id `string`: Azure resource Id
  * name `string`: Azure resource name
  * type `string`: Azure resource type
  * kind `string` (values: AzureActiveDirectory, AzureSecurityCenter, MicrosoftCloudAppSecurity, ThreatIntelligence, Office365, AmazonWebServicesCloudTrail, AzureAdvancedThreatProtection, MicrosoftDefenderAdvancedThreatProtection): The kind of the data connector

### AwsCloudTrailDataConnectorDataTypes
* AwsCloudTrailDataConnectorDataTypes `object`: The available data types for Amazon Web Services CloudTrail data connector.
  * logs `object`: Logs data type.
    * state `string` (values: Enabled, Disabled): Describe whether this data type connection is enabled or not.

### AwsCloudTrailDataConnectorProperties
* AwsCloudTrailDataConnectorProperties `object`: Amazon Web Services CloudTrail data connector properties.
  * awsRoleArn `string`: The Aws Role Arn (with CloudTrailReadOnly policy) that is used to access the Aws account.
  * dataTypes [AwsCloudTrailDataConnectorDataTypes](#awscloudtraildataconnectordatatypes)

### CloudError
* CloudError `object`: Error response structure.
  * error [CloudErrorBody](#clouderrorbody)

### CloudErrorBody
* CloudErrorBody `object`: Error details.
  * code `string`: An identifier for the error. Codes are invariant and are intended to be consumed programmatically.
  * message `string`: A message describing the error, intended to be suitable for display in a user interface.

### DataConnector
* DataConnector `object`: Data connector.
  * etag `string`: Etag of the azure resource
  * id `string`: Azure resource Id
  * name `string`: Azure resource name
  * type `string`: Azure resource type
  * kind `string` (values: AzureActiveDirectory, AzureSecurityCenter, MicrosoftCloudAppSecurity, ThreatIntelligence, Office365, AmazonWebServicesCloudTrail, AzureAdvancedThreatProtection, MicrosoftDefenderAdvancedThreatProtection): The kind of the data connector

### DataConnectorDataTypeCommon
* DataConnectorDataTypeCommon `object`: Common field for data type in data connectors.
  * state `string` (values: Enabled, Disabled): Describe whether this data type connection is enabled or not.

### DataConnectorKind
* DataConnectorKind `object`: Describes an Azure resource with kind.
  * kind `string` (values: AzureActiveDirectory, AzureSecurityCenter, MicrosoftCloudAppSecurity, ThreatIntelligence, Office365, AmazonWebServicesCloudTrail, AzureAdvancedThreatProtection, MicrosoftDefenderAdvancedThreatProtection): The kind of the data connector

### DataConnectorList
* DataConnectorList `object`: List all the data connectors.
  * nextLink `string`: URL to fetch the next set of data connectors.
  * value **required** `array`: Array of data connectors.
    * items [DataConnector](#dataconnector)

### DataConnectorTenantId
* DataConnectorTenantId `object`: Properties data connector on tenant level.
  * tenantId `string`: The tenant id to connect to, and get the data from.

### DataConnectorWithAlertsProperties
* DataConnectorWithAlertsProperties `object`: Data connector properties.
  * dataTypes [AlertsDataTypeOfDataConnector](#alertsdatatypeofdataconnector)

### FusionAlertRule
* FusionAlertRule `object`: Represents Fusion alert rule.
  * properties [FusionAlertRuleProperties](#fusionalertruleproperties)
  * etag `string`: Etag of the azure resource
  * id `string`: Azure resource Id
  * name `string`: Azure resource name
  * type `string`: Azure resource type
  * kind **required** `string` (values: Scheduled, MicrosoftSecurityIncidentCreation, Fusion): The kind of the alert rule

### FusionAlertRuleProperties
* FusionAlertRuleProperties `object`: Fusion alert rule base property bag.
  * alertRuleTemplateName **required** `string`: The Name of the alert rule template used to create this rule.
  * description `string`: The description of the alert rule.
  * displayName `string`: The display name for alerts created by this alert rule.
  * enabled **required** `boolean`: Determines whether this alert rule is enabled or disabled.
  * lastModifiedUtc `string`: The last time that this alert has been modified.
  * severity [AlertSeverity](#alertseverity)
  * tactics `array`: The tactics of the alert rule
    * items [AttackTactic](#attacktactic)

### FusionAlertRuleTemplate
* FusionAlertRuleTemplate `object`: Represents Fusion alert rule template.
  * properties `object`: Fusion alert rule template properties
    * severity **required** [AlertSeverity](#alertseverity)
    * tactics `array`: The tactics of the alert rule template
      * items [AttackTactic](#attacktactic)
    * alertRulesCreatedByTemplateCount `integer`: the number of alert rules that were created by this template
    * createdDateUTC `string`: The time that this alert rule template has been added.
    * description `string`: The description of the alert rule template.
    * displayName `string`: The display name for alert rule template.
    * requiredDataConnectors `array`: The required data connectors for this template
      * items [AlertRuleTemplateDataSource](#alertruletemplatedatasource)
    * status `string` (values: Installed, Available, NotAvailable): The alert rule template status.
  * id `string`: Azure resource Id
  * name `string`: Azure resource name
  * type `string`: Azure resource type
  * kind **required** `string` (values: Scheduled, MicrosoftSecurityIncidentCreation, Fusion): The kind of the alert rule

### IncidentInfo
* IncidentInfo `object`: Describes related incident information for the bookmark
  * incidentId **required** `string`: Incident Id
  * relationName **required** `string`: Relation Name
  * severity **required** `string` (values: Critical, High, Medium, Low, Informational): The severity of the incident
  * title **required** `string`: The title of the incident

### Label
* Label `string`: Label that will be used to tag and filter on.

### MCASDataConnector
* MCASDataConnector `object`: Represents MCAS (Microsoft Cloud App Security) data connector.
  * properties [MCASDataConnectorProperties](#mcasdataconnectorproperties)
  * etag `string`: Etag of the azure resource
  * id `string`: Azure resource Id
  * name `string`: Azure resource name
  * type `string`: Azure resource type
  * kind `string` (values: AzureActiveDirectory, AzureSecurityCenter, MicrosoftCloudAppSecurity, ThreatIntelligence, Office365, AmazonWebServicesCloudTrail, AzureAdvancedThreatProtection, MicrosoftDefenderAdvancedThreatProtection): The kind of the data connector

### MCASDataConnectorDataTypes
* MCASDataConnectorDataTypes `object`: The available data types for MCAS (Microsoft Cloud App Security) data connector.
  * discoveryLogs `object`: Discovery log data type connection.
    * state `string` (values: Enabled, Disabled): Describe whether this data type connection is enabled or not.
  * alerts `object`: Alerts data type connection.
    * state `string` (values: Enabled, Disabled): Describe whether this data type connection is enabled or not.

### MCASDataConnectorProperties
* MCASDataConnectorProperties `object`: MCAS (Microsoft Cloud App Security) data connector properties.
  * dataTypes [MCASDataConnectorDataTypes](#mcasdataconnectordatatypes)
  * tenantId `string`: The tenant id to connect to, and get the data from.

### MDATPDataConnector
* MDATPDataConnector `object`: Represents MDATP (Microsoft Defender Advanced Threat Protection) data connector.
  * properties [MDATPDataConnectorProperties](#mdatpdataconnectorproperties)
  * etag `string`: Etag of the azure resource
  * id `string`: Azure resource Id
  * name `string`: Azure resource name
  * type `string`: Azure resource type
  * kind `string` (values: AzureActiveDirectory, AzureSecurityCenter, MicrosoftCloudAppSecurity, ThreatIntelligence, Office365, AmazonWebServicesCloudTrail, AzureAdvancedThreatProtection, MicrosoftDefenderAdvancedThreatProtection): The kind of the data connector

### MDATPDataConnectorProperties
* MDATPDataConnectorProperties `object`: MDATP (Microsoft Defender Advanced Threat Protection) data connector properties.
  * tenantId `string`: The tenant id to connect to, and get the data from.
  * dataTypes [AlertsDataTypeOfDataConnector](#alertsdatatypeofdataconnector)

### MicrosoftSecurityIncidentCreationAlertRule
* MicrosoftSecurityIncidentCreationAlertRule `object`: Represents MicrosoftSecurityIncidentCreation rule.
  * properties [MicrosoftSecurityIncidentCreationAlertRuleProperties](#microsoftsecurityincidentcreationalertruleproperties)
  * etag `string`: Etag of the azure resource
  * id `string`: Azure resource Id
  * name `string`: Azure resource name
  * type `string`: Azure resource type
  * kind **required** `string` (values: Scheduled, MicrosoftSecurityIncidentCreation, Fusion): The kind of the alert rule

### MicrosoftSecurityIncidentCreationAlertRuleCommonProperties
* MicrosoftSecurityIncidentCreationAlertRuleCommonProperties `object`: MicrosoftSecurityIncidentCreation rule common property bag.
  * displayNamesFilter `array`: the alerts' displayNames on which the cases will be generated
    * items `string`
  * productFilter **required** `string` (values: Microsoft Cloud App Security, Azure Security Center, Azure Advanced Threat Protection, Azure Active Directory Identity Protection, Azure Security Center for IoT): The alerts' productName on which the cases will be generated
  * severitiesFilter `array`: the alerts' severities on which the cases will be generated
    * items [AlertSeverity](#alertseverity)

### MicrosoftSecurityIncidentCreationAlertRuleProperties
* MicrosoftSecurityIncidentCreationAlertRuleProperties `object`: MicrosoftSecurityIncidentCreation rule property bag.
  * alertRuleTemplateName `string`: The Name of the alert rule template used to create this rule.
  * description `string`: The description of the alert rule.
  * displayName **required** `string`: The display name for alerts created by this alert rule.
  * enabled **required** `boolean`: Determines whether this alert rule is enabled or disabled.
  * lastModifiedUtc `string`: The last time that this alert has been modified.
  * displayNamesFilter `array`: the alerts' displayNames on which the cases will be generated
    * items `string`
  * productFilter **required** `string` (values: Microsoft Cloud App Security, Azure Security Center, Azure Advanced Threat Protection, Azure Active Directory Identity Protection, Azure Security Center for IoT): The alerts' productName on which the cases will be generated
  * severitiesFilter `array`: the alerts' severities on which the cases will be generated
    * items [AlertSeverity](#alertseverity)

### MicrosoftSecurityIncidentCreationAlertRuleTemplate
* MicrosoftSecurityIncidentCreationAlertRuleTemplate `object`: Represents MicrosoftSecurityIncidentCreation rule template.
  * properties: MicrosoftSecurityIncidentCreation rule template properties
    * alertRulesCreatedByTemplateCount `integer`: the number of alert rules that were created by this template
    * createdDateUTC `string`: The time that this alert rule template has been added.
    * description `string`: The description of the alert rule template.
    * displayName `string`: The display name for alert rule template.
    * requiredDataConnectors `array`: The required data connectors for this template
      * items [AlertRuleTemplateDataSource](#alertruletemplatedatasource)
    * status `string` (values: Installed, Available, NotAvailable): The alert rule template status.
    * displayNamesFilter `array`: the alerts' displayNames on which the cases will be generated
      * items `string`
    * productFilter **required** `string` (values: Microsoft Cloud App Security, Azure Security Center, Azure Advanced Threat Protection, Azure Active Directory Identity Protection, Azure Security Center for IoT): The alerts' productName on which the cases will be generated
    * severitiesFilter `array`: the alerts' severities on which the cases will be generated
      * items [AlertSeverity](#alertseverity)
  * id `string`: Azure resource Id
  * name `string`: Azure resource name
  * type `string`: Azure resource type
  * kind **required** `string` (values: Scheduled, MicrosoftSecurityIncidentCreation, Fusion): The kind of the alert rule

### OfficeConsent
* OfficeConsent `object`: Consent for Office365 tenant that already made.
  * properties [OfficeConsentProperties](#officeconsentproperties)
  * id `string`: Azure resource Id
  * name `string`: Azure resource name
  * type `string`: Azure resource type

### OfficeConsentList
* OfficeConsentList `object`: List of all the office365 consents.
  * nextLink `string`: URL to fetch the next set of office consents.
  * value **required** `array`: Array of the consents.
    * items [OfficeConsent](#officeconsent)

### OfficeConsentProperties
* OfficeConsentProperties `object`: Consent property bag.
  * tenantId `string`: The tenantId of the Office365 with the consent.
  * tenantName `string`: The tenant name of the Office365 with the consent.

### OfficeDataConnector
* OfficeDataConnector `object`: Represents office data connector.
  * properties [OfficeDataConnectorProperties](#officedataconnectorproperties)
  * etag `string`: Etag of the azure resource
  * id `string`: Azure resource Id
  * name `string`: Azure resource name
  * type `string`: Azure resource type
  * kind `string` (values: AzureActiveDirectory, AzureSecurityCenter, MicrosoftCloudAppSecurity, ThreatIntelligence, Office365, AmazonWebServicesCloudTrail, AzureAdvancedThreatProtection, MicrosoftDefenderAdvancedThreatProtection): The kind of the data connector

### OfficeDataConnectorDataTypes
* OfficeDataConnectorDataTypes `object`: The available data types for office data connector.
  * exchange `object`: Exchange data type connection.
    * state `string` (values: Enabled, Disabled): Describe whether this data type connection is enabled or not.
  * sharePoint `object`: SharePoint data type connection.
    * state `string` (values: Enabled, Disabled): Describe whether this data type connection is enabled or not.

### OfficeDataConnectorProperties
* OfficeDataConnectorProperties `object`: Office data connector properties.
  * dataTypes [OfficeDataConnectorDataTypes](#officedataconnectordatatypes)
  * tenantId `string`: The tenant id to connect to, and get the data from.

### Operation
* Operation `object`: Operation provided by provider
  * display `object`: Properties of the operation
    * description `string`: Description of the operation
    * operation `string`: Operation name
    * provider `string`: Provider name
    * resource `string`: Resource name
  * name `string`: Name of the operation

### OperationsList
* OperationsList `object`: Lists the operations available in the SecurityInsights RP.
  * nextLink `string`: URL to fetch the next set of operations.
  * value **required** `array`: Array of operations
    * items [Operation](#operation)

### Resource
* Resource `object`: An azure resource object
  * id `string`: Azure resource Id
  * name `string`: Azure resource name
  * type `string`: Azure resource type

### ResourceWithEtag
* ResourceWithEtag `object`: An azure resource object with an Etag property
  * etag `string`: Etag of the azure resource
  * id `string`: Azure resource Id
  * name `string`: Azure resource name
  * type `string`: Azure resource type

### ScheduledAlertRule
* ScheduledAlertRule `object`: Represents scheduled alert rule.
  * properties [ScheduledAlertRuleProperties](#scheduledalertruleproperties)
  * etag `string`: Etag of the azure resource
  * id `string`: Azure resource Id
  * name `string`: Azure resource name
  * type `string`: Azure resource type
  * kind **required** `string` (values: Scheduled, MicrosoftSecurityIncidentCreation, Fusion): The kind of the alert rule

### ScheduledAlertRuleCommonProperties
* ScheduledAlertRuleCommonProperties `object`: Schedule alert rule template property bag.
  * query `string`: The query that creates alerts for this rule.
  * queryFrequency `string`: The frequency (in ISO 8601 duration format) for this alert rule to run.
  * queryPeriod `string`: The period (in ISO 8601 duration format) that this alert rule looks at.
  * severity [AlertSeverity](#alertseverity)
  * triggerOperator [AlertRuleTriggerOperator](#alertruletriggeroperator)
  * triggerThreshold `integer`: The threshold triggers this alert rule.

### ScheduledAlertRuleProperties
* ScheduledAlertRuleProperties `object`: Scheduled alert rule base property bag.
  * alertRuleTemplateName `string`: The Name of the alert rule template used to create this rule.
  * description `string`: The description of the alert rule.
  * displayName **required** `string`: The display name for alerts created by this alert rule.
  * enabled **required** `boolean`: Determines whether this alert rule is enabled or disabled.
  * lastModifiedUtc `string`: The last time that this alert rule has been modified.
  * suppressionDuration **required** `string`: The suppression (in ISO 8601 duration format) to wait since last time this alert rule been triggered.
  * suppressionEnabled **required** `boolean`: Determines whether the suppression for this alert rule is enabled or disabled.
  * tactics `array`: The tactics of the alert rule
    * items [AttackTactic](#attacktactic)
  * query `string`: The query that creates alerts for this rule.
  * queryFrequency `string`: The frequency (in ISO 8601 duration format) for this alert rule to run.
  * queryPeriod `string`: The period (in ISO 8601 duration format) that this alert rule looks at.
  * severity [AlertSeverity](#alertseverity)
  * triggerOperator [AlertRuleTriggerOperator](#alertruletriggeroperator)
  * triggerThreshold `integer`: The threshold triggers this alert rule.

### ScheduledAlertRuleTemplate
* ScheduledAlertRuleTemplate `object`: Represents scheduled alert rule template.
  * properties `object`: Scheduled alert rule template properties
    * tactics `array`: The tactics of the alert rule template
      * items [AttackTactic](#attacktactic)
    * alertRulesCreatedByTemplateCount `integer`: the number of alert rules that were created by this template
    * createdDateUTC `string`: The time that this alert rule template has been added.
    * description `string`: The description of the alert rule template.
    * displayName `string`: The display name for alert rule template.
    * requiredDataConnectors `array`: The required data connectors for this template
      * items [AlertRuleTemplateDataSource](#alertruletemplatedatasource)
    * status `string` (values: Installed, Available, NotAvailable): The alert rule template status.
    * query `string`: The query that creates alerts for this rule.
    * queryFrequency `string`: The frequency (in ISO 8601 duration format) for this alert rule to run.
    * queryPeriod `string`: The period (in ISO 8601 duration format) that this alert rule looks at.
    * severity [AlertSeverity](#alertseverity)
    * triggerOperator [AlertRuleTriggerOperator](#alertruletriggeroperator)
    * triggerThreshold `integer`: The threshold triggers this alert rule.
  * id `string`: Azure resource Id
  * name `string`: Azure resource name
  * type `string`: Azure resource type
  * kind **required** `string` (values: Scheduled, MicrosoftSecurityIncidentCreation, Fusion): The kind of the alert rule

### Settings
* Settings `object`: The Setting.
  * etag `string`: Etag of the azure resource
  * id `string`: Azure resource Id
  * name `string`: Azure resource name
  * type `string`: Azure resource type
  * kind `string` (values: UebaSettings, ToggleSettings): The kind of the setting

### SettingsKind
* SettingsKind `object`: Describes an Azure resource with kind.
  * kind `string` (values: UebaSettings, ToggleSettings): The kind of the setting

### TIDataConnector
* TIDataConnector `object`: Represents threat intelligence data connector.
  * properties [TIDataConnectorProperties](#tidataconnectorproperties)
  * etag `string`: Etag of the azure resource
  * id `string`: Azure resource Id
  * name `string`: Azure resource name
  * type `string`: Azure resource type
  * kind `string` (values: AzureActiveDirectory, AzureSecurityCenter, MicrosoftCloudAppSecurity, ThreatIntelligence, Office365, AmazonWebServicesCloudTrail, AzureAdvancedThreatProtection, MicrosoftDefenderAdvancedThreatProtection): The kind of the data connector

### TIDataConnectorDataTypes
* TIDataConnectorDataTypes `object`: The available data types for TI (Threat Intelligence) data connector.
  * indicators `object`: Data type for indicators connection.
    * state `string` (values: Enabled, Disabled): Describe whether this data type connection is enabled or not.

### TIDataConnectorProperties
* TIDataConnectorProperties `object`: TI (Threat Intelligence) data connector properties.
  * dataTypes [TIDataConnectorDataTypes](#tidataconnectordatatypes)
  * tenantId `string`: The tenant id to connect to, and get the data from.

### ThreatIntelligence
* ThreatIntelligence `object`: ThreatIntelligence property bag.
  * confidence `number`: Confidence (must be between 0 and 1)
  * providerName `string`: Name of the provider from whom this Threat Intelligence information was received
  * reportLink `string`: Report link
  * threatDescription `string`: Threat description (free text)
  * threatName `string`: Threat name (e.g. "Jedobot malware")
  * threatType `string`: Threat type (e.g. "Botnet")

### ToggleSettings
* ToggleSettings `object`: Settings with single toggle.
  * properties [ToggleSettingsProperties](#togglesettingsproperties)
  * etag `string`: Etag of the azure resource
  * id `string`: Azure resource Id
  * name `string`: Azure resource name
  * type `string`: Azure resource type
  * kind `string` (values: UebaSettings, ToggleSettings): The kind of the setting

### ToggleSettingsProperties
* ToggleSettingsProperties `object`: toggle property bag.
  * isEnabled `boolean`: Determines whether the setting is enable or disabled.

### UebaSettings
* UebaSettings `object`: Represents settings for User and Entity Behavior Analytics enablement.
  * properties [UebaSettingsProperties](#uebasettingsproperties)
  * etag `string`: Etag of the azure resource
  * id `string`: Azure resource Id
  * name `string`: Azure resource name
  * type `string`: Azure resource type
  * kind `string` (values: UebaSettings, ToggleSettings): The kind of the setting

### UebaSettingsProperties
* UebaSettingsProperties `object`: User and Entity Behavior Analytics settings property bag.
  * atpLicenseStatus `string` (values: Enabled, Disabled): Determines whether the tenant has ATP (Advanced Threat Protection) license.
  * isEnabled `boolean`: Determines whether User and Entity Behavior Analytics is enabled for this workspace.
  * statusInMcas `string` (values: Enabled, Disabled): Determines whether User and Entity Behavior Analytics is enabled from MCAS (Microsoft Cloud App Security).

### UserInfo
* UserInfo `object`: User information that made some action
  * email `string`: The email of the user.
  * name `string`: The name of the user.
  * objectId **required** `string`: The object id of the user.


