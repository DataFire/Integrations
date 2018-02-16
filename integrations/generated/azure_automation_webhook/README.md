# @datafire/azure_automation_webhook

Client library for AutomationManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_automation_webhook
```
```js
let azure_automation_webhook = require('@datafire/azure_automation_webhook').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_automation_webhook.Webhook_ListByAutomationAccount({
  "resourceGroupName": "",
  "automationAccountName": "",
  "subscriptionId": "",
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description



## Actions

### Webhook_ListByAutomationAccount
Retrieve a list of webhooks.


```js
azure_automation_webhook.Webhook_ListByAutomationAccount({
  "resourceGroupName": "",
  "automationAccountName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name.
  * automationAccountName **required** `string`: The automation account name.
  * $filter `string`: The filter to apply on the operation.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output `object`: The response model for the list webhook operation.
  * nextLink `string`: Gets or sets the next link.
  * value `array`: Gets or sets a list of webhooks.
    * items `object`: Definition of the webhook type.
      * id `string`: Gets or sets the id of the resource.
      * name `string`: Gets or sets the name of the webhook.
      * properties `object`: Definition of the webhook properties
        * creationTime `string`: Gets or sets the creation time.
        * description `string`: Gets or sets the description.
        * expiryTime `string`: Gets or sets the expiry time.
        * isEnabled `boolean`: Gets or sets the value of the enabled flag of the webhook.
        * lastInvokedTime `string`: Gets or sets the last invoked time.
        * lastModifiedTime `string`: Gets or sets the last modified time.
        * parameters `object`: Gets or sets the parameters of the job that is created when the webhook calls the runbook it is associated with.
        * runOn `string`: Gets or sets the name of the hybrid worker group the webhook job will run on.
        * runbook `object`: The runbook property associated with the entity.
          * name `string`: Gets or sets the name of the runbook.
        * uri `string`: Gets or sets the webhook uri.

### Webhook_GenerateUri
Generates a Uri for use in creating a webhook.


```js
azure_automation_webhook.Webhook_GenerateUri({
  "resourceGroupName": "",
  "automationAccountName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name.
  * automationAccountName **required** `string`: The automation account name.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output `string`

### Webhook_Delete
Delete the webhook by name.


```js
azure_automation_webhook.Webhook_Delete({
  "resourceGroupName": "",
  "automationAccountName": "",
  "webhookName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name.
  * automationAccountName **required** `string`: The automation account name.
  * webhookName **required** `string`: The webhook name.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*

### Webhook_Get
Retrieve the webhook identified by webhook name.


```js
azure_automation_webhook.Webhook_Get({
  "resourceGroupName": "",
  "automationAccountName": "",
  "webhookName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name.
  * automationAccountName **required** `string`: The automation account name.
  * webhookName **required** `string`: The webhook name.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output `object`: Definition of the webhook type.
  * id `string`: Gets or sets the id of the resource.
  * name `string`: Gets or sets the name of the webhook.
  * properties `object`: Definition of the webhook properties
    * creationTime `string`: Gets or sets the creation time.
    * description `string`: Gets or sets the description.
    * expiryTime `string`: Gets or sets the expiry time.
    * isEnabled `boolean`: Gets or sets the value of the enabled flag of the webhook.
    * lastInvokedTime `string`: Gets or sets the last invoked time.
    * lastModifiedTime `string`: Gets or sets the last modified time.
    * parameters `object`: Gets or sets the parameters of the job that is created when the webhook calls the runbook it is associated with.
    * runOn `string`: Gets or sets the name of the hybrid worker group the webhook job will run on.
    * runbook `object`: The runbook property associated with the entity.
      * name `string`: Gets or sets the name of the runbook.
    * uri `string`: Gets or sets the webhook uri.

### Webhook_Update
Update the webhook identified by webhook name.


```js
azure_automation_webhook.Webhook_Update({
  "resourceGroupName": "",
  "automationAccountName": "",
  "webhookName": "",
  "parameters": null,
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name.
  * automationAccountName **required** `string`: The automation account name.
  * webhookName **required** `string`: The webhook name.
  * parameters **required** `object`: The parameters supplied to the update webhook operation.
    * name **required** `string`: Gets or sets the name of the webhook.
    * properties `object`: The properties of the update webhook.
      * description `string`: Gets or sets the description of the webhook.
      * isEnabled `boolean`: Gets or sets the value of the enabled flag of webhook.
      * parameters `object`: Gets or sets the parameters of the job.
      * runOn `string`: Gets or sets the name of the hybrid worker group the webhook job will run on.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output `object`: Definition of the webhook type.
  * id `string`: Gets or sets the id of the resource.
  * name `string`: Gets or sets the name of the webhook.
  * properties `object`: Definition of the webhook properties
    * creationTime `string`: Gets or sets the creation time.
    * description `string`: Gets or sets the description.
    * expiryTime `string`: Gets or sets the expiry time.
    * isEnabled `boolean`: Gets or sets the value of the enabled flag of the webhook.
    * lastInvokedTime `string`: Gets or sets the last invoked time.
    * lastModifiedTime `string`: Gets or sets the last modified time.
    * parameters `object`: Gets or sets the parameters of the job that is created when the webhook calls the runbook it is associated with.
    * runOn `string`: Gets or sets the name of the hybrid worker group the webhook job will run on.
    * runbook `object`: The runbook property associated with the entity.
      * name `string`: Gets or sets the name of the runbook.
    * uri `string`: Gets or sets the webhook uri.

### Webhook_CreateOrUpdate
Create the webhook identified by webhook name.


```js
azure_automation_webhook.Webhook_CreateOrUpdate({
  "resourceGroupName": "",
  "automationAccountName": "",
  "webhookName": "",
  "parameters": null,
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name.
  * automationAccountName **required** `string`: The automation account name.
  * webhookName **required** `string`: The webhook name.
  * parameters **required** `object`: The parameters supplied to the create or update webhook operation.
    * name **required** `string`: Gets or sets the name of the webhook.
    * properties **required** `object`: The properties of the create webhook operation.
      * expiryTime `string`: Gets or sets the expiry time.
      * isEnabled `boolean`: Gets or sets the value of the enabled flag of webhook.
      * parameters `object`: Gets or sets the parameters of the job.
      * runOn `string`: Gets or sets the name of the hybrid worker group the webhook job will run on.
      * runbook `object`: The runbook property associated with the entity.
        * name `string`: Gets or sets the name of the runbook.
      * uri `string`: Gets or sets the uri.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output `object`: Definition of the webhook type.
  * id `string`: Gets or sets the id of the resource.
  * name `string`: Gets or sets the name of the webhook.
  * properties `object`: Definition of the webhook properties
    * creationTime `string`: Gets or sets the creation time.
    * description `string`: Gets or sets the description.
    * expiryTime `string`: Gets or sets the expiry time.
    * isEnabled `boolean`: Gets or sets the value of the enabled flag of the webhook.
    * lastInvokedTime `string`: Gets or sets the last invoked time.
    * lastModifiedTime `string`: Gets or sets the last modified time.
    * parameters `object`: Gets or sets the parameters of the job that is created when the webhook calls the runbook it is associated with.
    * runOn `string`: Gets or sets the name of the hybrid worker group the webhook job will run on.
    * runbook `object`: The runbook property associated with the entity.
      * name `string`: Gets or sets the name of the runbook.
    * uri `string`: Gets or sets the webhook uri.



## Definitions

*This integration has no definitions*
