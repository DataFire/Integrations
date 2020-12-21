# @datafire/azure_security_automations

Client library for Security Center

## Installation and Usage
```bash
npm install --save @datafire/azure_security_automations
```
```js
let azure_security_automations = require('@datafire/azure_security_automations').create({
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

API spec for Microsoft.Security (Azure Security Center) resource provider

## Actions

### Automations_List
Lists all the security automations in the specified subscription. Use the 'nextLink' property in the response to get the next page of security automations for the specified subscription.


```js
azure_security_automations.Automations_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID

#### Output
* output [AutomationList](#automationlist)

### Automations_ListByResourceGroup
Lists all the security automations in the specified resource group. Use the 'nextLink' property in the response to get the next page of security automations for the specified resource group.


```js
azure_security_automations.Automations_ListByResourceGroup({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.

#### Output
* output [AutomationList](#automationlist)

### Automations_Delete
Deletes a security automation.


```js
azure_security_automations.Automations_Delete({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "automationName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.
  * automationName **required** `string`: The security automation name.

#### Output
*Output schema unknown*

### Automations_Get
Retrieves information about the model of a security automation.


```js
azure_security_automations.Automations_Get({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "automationName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.
  * automationName **required** `string`: The security automation name.

#### Output
* output [Automation](#automation)

### Automations_CreateOrUpdate
Creates or updates a security automation. If a security automation is already created and a subsequent request is issued for the same automation id, then it will be updated.


```js
azure_security_automations.Automations_CreateOrUpdate({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "automationName": "",
  "Automation": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.
  * automationName **required** `string`: The security automation name.
  * Automation **required** [Automation](#automation)

#### Output
* output [Automation](#automation)

### Automations_Validate
Validates the security automation model before create or update. Any validation errors are returned to the client.


```js
azure_security_automations.Automations_Validate({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "automationName": "",
  "Automation": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.
  * automationName **required** `string`: The security automation name.
  * Automation **required** [Automation](#automation)

#### Output
* output [AutomationValidationStatus](#automationvalidationstatus)



## Definitions

### Automation
* Automation `object`: The security automation resource.
  * properties [AutomationProperties](#automationproperties)
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type
  * location `string`: Location where the resource is stored
  * kind `string`: Kind of the resource
  * etag `string`: Entity tag is used for comparing two or more entities from the same requested resource.
  * tags `object`: A list of key value pairs that describe the resource.

### AutomationAction
* AutomationAction `object`: The action that should be triggered.
  * actionType **required** `string` (values: LogicApp, EventHub, Workspace): The type of the action that will be triggered by the Automation

### AutomationActionEventHub
* AutomationActionEventHub `object`: The target Event Hub to which event data will be exported. To learn more about Security Center continuous export capabilities, visit https://aka.ms/ASCExportLearnMore
  * connectionString `string`: The target Event Hub connection string (it will not be included in any response).
  * eventHubResourceId `string`: The target Event Hub Azure Resource ID.
  * sasPolicyName `string`: The target Event Hub SAS policy name.
  * actionType **required** `string` (values: LogicApp, EventHub, Workspace): The type of the action that will be triggered by the Automation

### AutomationActionLogicApp
* AutomationActionLogicApp `object`: The logic app action that should be triggered. To learn more about Security Center's Workflow Automation capabilities, visit https://aka.ms/ASCWorkflowAutomationLearnMore
  * logicAppResourceId `string`: The triggered Logic App Azure Resource ID. This can also reside on other subscriptions, given that you have permissions to trigger the Logic App
  * uri `string`: The Logic App trigger URI endpoint (it will not be included in any response).
  * actionType **required** `string` (values: LogicApp, EventHub, Workspace): The type of the action that will be triggered by the Automation

### AutomationActionWorkspace
* AutomationActionWorkspace `object`: The Log Analytics Workspace to which event data will be exported. Security alerts data will reside in the 'SecurityAlert' table and the assessments data will reside in the 'SecurityRecommendation' table (under the 'Security'/'SecurityCenterFree' solutions). Note that in order to view the data in the workspace, the Security Center Log Analytics free/standard solution needs to be enabled on that workspace. To learn more about Security Center continuous export capabilities, visit https://aka.ms/ASCExportLearnMore
  * workspaceResourceId `string`: The fully qualified Log Analytics Workspace Azure Resource ID.
  * actionType **required** `string` (values: LogicApp, EventHub, Workspace): The type of the action that will be triggered by the Automation

### AutomationList
* AutomationList `object`: List of security automations response.
  * nextLink `string`: The URI to fetch the next page.
  * value **required** `array`: The list of security automations under the given scope.
    * items [Automation](#automation)

### AutomationProperties
* AutomationProperties `object`: A set of properties that defines the behavior of the automation configuration. To learn more about the supported security events data models schemas - please visit https://aka.ms/ASCAutomationSchemas.
  * actions `array`: A collection of the actions which are triggered if all the configured rules evaluations, within at least one rule set, are true.
    * items [AutomationAction](#automationaction)
  * description `string`: The security automation description.
  * isEnabled `boolean`: Indicates whether the security automation is enabled.
  * scopes `array`: A collection of scopes on which the security automations logic is applied. Supported scopes are the subscription itself or a resource group under that subscription. The automation will only apply on defined scopes.
    * items [AutomationScope](#automationscope)
  * sources `array`: A collection of the source event types which evaluate the security automation set of rules.
    * items [AutomationSource](#automationsource)

### AutomationRuleSet
* AutomationRuleSet `object`: A rule set which evaluates all its rules upon an event interception. Only when all the included rules in the rule set will be evaluated as 'true', will the event trigger the defined actions.
  * rules `array`
    * items [AutomationTriggeringRule](#automationtriggeringrule)

### AutomationScope
* AutomationScope `object`: A single automation scope.
  * description `string`: The resources scope description.
  * scopePath `string`: The resources scope path. Can be the subscription on which the automation is defined on or a resource group under that subscription (fully qualified Azure resource IDs).

### AutomationSource
* AutomationSource `object`: The source event types which evaluate the security automation set of rules. For example - security alerts and security assessments. To learn more about the supported security events data models schemas - please visit https://aka.ms/ASCAutomationSchemas.
  * eventSource `string` (values: Assessments, Alerts): A valid event source type.
  * ruleSets `array`: A set of rules which evaluate upon event interception. A logical disjunction is applied between defined rule sets (logical 'or').
    * items [AutomationRuleSet](#automationruleset)

### AutomationTriggeringRule
* AutomationTriggeringRule `object`: A rule which is evaluated upon event interception. The rule is configured by comparing a specific value from the event model to an expected value. This comparison is done by using one of the supported operators set.
  * expectedValue `string`: The expected value.
  * operator `string` (values: Equals, GreaterThan, GreaterThanOrEqualTo, LesserThan, LesserThanOrEqualTo, NotEquals, Contains, StartsWith, EndsWith): A valid comparer operator to use. A case-insensitive comparison will be applied for String PropertyType.
  * propertyJPath `string`: The JPath of the entity model property that should be checked.
  * propertyType `string` (values: String, Integer, Number, Boolean): The data type of the compared operands (string, integer, floating point number or a boolean [true/false]]

### AutomationValidationStatus
* AutomationValidationStatus `object`: The security automation model state property bag.
  * isValid `boolean`: Indicates whether the model is valid or not.
  * message `string`: The validation message.


