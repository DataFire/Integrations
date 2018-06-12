# @datafire/azure_monitor_actiongroups_api

Client library for Azure Action Groups

## Installation and Usage
```bash
npm install --save @datafire/azure_monitor_actiongroups_api
```
```js
let azure_monitor_actiongroups_api = require('@datafire/azure_monitor_actiongroups_api').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_monitor_actiongroups_api.ActionGroups_ListBySubscriptionId({
  "subscriptionId": "",
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description



## Actions

### ActionGroups_ListBySubscriptionId
Get a list of all action groups in a subscription.


```js
azure_monitor_actiongroups_api.ActionGroups_ListBySubscriptionId({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure subscription Id.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [ActionGroupList](#actiongrouplist)

### ActionGroups_ListByResourceGroup
Get a list of all action groups in a resource group.


```js
azure_monitor_actiongroups_api.ActionGroups_ListByResourceGroup({
  "resourceGroupName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * subscriptionId **required** `string`: The Azure subscription Id.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [ActionGroupList](#actiongrouplist)

### ActionGroups_Delete
Delete an action group.


```js
azure_monitor_actiongroups_api.ActionGroups_Delete({
  "resourceGroupName": "",
  "actionGroupName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * actionGroupName **required** `string`: The name of the action group.
  * subscriptionId **required** `string`: The Azure subscription Id.
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*

### ActionGroups_Get
Get an action group.


```js
azure_monitor_actiongroups_api.ActionGroups_Get({
  "resourceGroupName": "",
  "actionGroupName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * actionGroupName **required** `string`: The name of the action group.
  * subscriptionId **required** `string`: The Azure subscription Id.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [ActionGroupResource](#actiongroupresource)

### ActionGroups_Update
Updates an existing action group's tags. To update other fields use the CreateOrUpdate method.


```js
azure_monitor_actiongroups_api.ActionGroups_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "actionGroupName": "",
  "api-version": "",
  "actionGroupPatch": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure subscription Id.
  * resourceGroupName **required** `string`: The name of the resource group.
  * actionGroupName **required** `string`: The name of the action group.
  * api-version **required** `string`: Client Api Version.
  * actionGroupPatch **required** [ActionGroupPatchBody](#actiongrouppatchbody)

#### Output
* output [ActionGroupResource](#actiongroupresource)

### ActionGroups_CreateOrUpdate
Create a new action group or update an existing one.


```js
azure_monitor_actiongroups_api.ActionGroups_CreateOrUpdate({
  "resourceGroupName": "",
  "actionGroupName": "",
  "actionGroup": null,
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * actionGroupName **required** `string`: The name of the action group.
  * actionGroup **required** [ActionGroupResource](#actiongroupresource)
  * subscriptionId **required** `string`: The Azure subscription Id.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [ActionGroupResource](#actiongroupresource)

### ActionGroups_EnableReceiver
Enable a receiver in an action group. This changes the receiver's status from Disabled to Enabled. This operation is only supported for Email or SMS receivers.


```js
azure_monitor_actiongroups_api.ActionGroups_EnableReceiver({
  "resourceGroupName": "",
  "actionGroupName": "",
  "enableRequest": null,
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * actionGroupName **required** `string`: The name of the action group.
  * enableRequest **required** [EnableRequest](#enablerequest)
  * subscriptionId **required** `string`: The Azure subscription Id.
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*



## Definitions

### ActionGroup
* ActionGroup `object`: An Azure action group.
  * automationRunbookReceivers `array`: The list of AutomationRunbook receivers that are part of this action group.
    * items [AutomationRunbookReceiver](#automationrunbookreceiver)
  * azureAppPushReceivers `array`: The list of AzureAppPush receivers that are part of this action group.
    * items [AzureAppPushReceiver](#azureapppushreceiver)
  * azureFunctionReceivers `array`: The list of azure function receivers that are part of this action group.
    * items [AzureFunctionReceiver](#azurefunctionreceiver)
  * emailReceivers `array`: The list of email receivers that are part of this action group.
    * items [EmailReceiver](#emailreceiver)
  * enabled **required** `boolean`: Indicates whether this action group is enabled. If an action group is not enabled, then none of its receivers will receive communications.
  * groupShortName **required** `string`: The short name of the action group. This will be used in SMS messages.
  * itsmReceivers `array`: The list of ITSM receivers that are part of this action group.
    * items [ItsmReceiver](#itsmreceiver)
  * logicAppReceivers `array`: The list of logic app receivers that are part of this action group.
    * items [LogicAppReceiver](#logicappreceiver)
  * smsReceivers `array`: The list of SMS receivers that are part of this action group.
    * items [SmsReceiver](#smsreceiver)
  * voiceReceivers `array`: The list of voice receivers that are part of this action group.
    * items [VoiceReceiver](#voicereceiver)
  * webhookReceivers `array`: The list of webhook receivers that are part of this action group.
    * items [WebhookReceiver](#webhookreceiver)

### ActionGroupList
* ActionGroupList `object`: A list of action groups.
  * nextLink `string`: Provides the link to retrieve the next set of elements.
  * value `array`: The list of action groups.
    * items [ActionGroupResource](#actiongroupresource)

### ActionGroupPatch
* ActionGroupPatch `object`: An Azure action group for patch operations.
  * enabled `boolean`: Indicates whether this action group is enabled. If an action group is not enabled, then none of its actions will be activated.

### ActionGroupPatchBody
* ActionGroupPatchBody `object`: An action group object for the body of patch operations.
  * properties [ActionGroupPatch](#actiongrouppatch)

### ActionGroupResource
* ActionGroupResource `object`: An action group resource.
  * properties [ActionGroup](#actiongroup)
  * id `string`: Azure resource Id
  * location **required** `string`: Resource location
  * name `string`: Azure resource name
  * type `string`: Azure resource type

### AutomationRunbookReceiver
* AutomationRunbookReceiver `object`: The Azure Automation Runbook notification receiver.
  * automationAccountId **required** `string`: The Azure automation account Id which holds this runbook and authenticate to Azure resource.
  * isGlobalRunbook **required** `boolean`: Indicates whether this instance is global runbook.
  * name `string`: Indicates name of the webhook.
  * runbookName **required** `string`: The name for this runbook.
  * serviceUri `string`: The URI where webhooks should be sent.
  * webhookResourceId **required** `string`: The resource id for webhook linked to this runbook.

### AzureAppPushReceiver
* AzureAppPushReceiver `object`: The Azure mobile App push notification receiver.
  * emailAddress **required** `string`: The email address registered for the Azure mobile app.
  * name **required** `string`: The name of the Azure mobile app push receiver. Names must be unique across all receivers within an action group.

### AzureFunctionReceiver
* AzureFunctionReceiver `object`: An azure function receiver.
  * functionAppResourceId **required** `string`: The azure resource id of the function app.
  * functionName **required** `string`: The function name in the function app.
  * httpTriggerUrl **required** `string`: The http trigger url where http request sent to.
  * name **required** `string`: The name of the azure function receiver. Names must be unique across all receivers within an action group.

### EmailReceiver
* EmailReceiver `object`: An email receiver.
  * emailAddress **required** `string`: The email address of this receiver.
  * name **required** `string`: The name of the email receiver. Names must be unique across all receivers within an action group.
  * status [ReceiverStatus](#receiverstatus)

### EnableRequest
* EnableRequest `object`: Describes a receiver that should be resubscribed.
  * receiverName **required** `string`: The name of the receiver to resubscribe.

### ErrorResponse
* ErrorResponse `object`: Describes the format of Error response.
  * code `string`: Error code
  * message `string`: Error message indicating why the operation failed.

### ItsmReceiver
* ItsmReceiver `object`: An Itsm receiver.
  * connectionId **required** `string`: Unique identification of ITSM connection among multiple defined in above workspace.
  * name **required** `string`: The name of the Itsm receiver. Names must be unique across all receivers within an action group.
  * region **required** `string`: Region in which workspace resides. Supported values:'centralindia','japaneast','southeastasia','australiasoutheast','uksouth','westcentralus','canadacentral','eastus','westeurope'
  * ticketConfiguration **required** `string`: JSON blob for the configurations of the ITSM action. CreateMultipleWorkItems option will be part of this blob as well.
  * workspaceId **required** `string`: OMS LA instance identifier.

### LogicAppReceiver
* LogicAppReceiver `object`: A logic app receiver.
  * callbackUrl **required** `string`: The callback url where http request sent to.
  * name **required** `string`: The name of the logic app receiver. Names must be unique across all receivers within an action group.
  * resourceId **required** `string`: The azure resource id of the logic app receiver.

### ReceiverStatus
* ReceiverStatus `string` (values: NotSpecified, Enabled, Disabled): Indicates the status of the receiver. Receivers that are not Enabled will not receive any communications.

### Resource
* Resource `object`: An azure resource object
  * id `string`: Azure resource Id
  * location **required** `string`: Resource location
  * name `string`: Azure resource name
  * type `string`: Azure resource type

### SmsReceiver
* SmsReceiver `object`: An SMS receiver.
  * countryCode **required** `string`: The country code of the SMS receiver.
  * name **required** `string`: The name of the SMS receiver. Names must be unique across all receivers within an action group.
  * phoneNumber **required** `string`: The phone number of the SMS receiver.
  * status [ReceiverStatus](#receiverstatus)

### VoiceReceiver
* VoiceReceiver `object`: A voice receiver.
  * countryCode **required** `string`: The country code of the voice receiver.
  * name **required** `string`: The name of the voice receiver. Names must be unique across all receivers within an action group.
  * phoneNumber **required** `string`: The phone number of the voice receiver.

### WebhookReceiver
* WebhookReceiver `object`: A webhook receiver.
  * name **required** `string`: The name of the webhook receiver. Names must be unique across all receivers within an action group.
  * serviceUri **required** `string`: The URI where webhooks should be sent.


