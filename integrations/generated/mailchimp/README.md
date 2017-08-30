# @datafire/mailchimp

Client library for MailChimp Marketing API

## Installation and Usage
```bash
npm install --save datafire @datafire/mailchimp
```

```js
let datafire = require('datafire');
let mailchimp = require('@datafire/mailchimp').create({
  apiKey: "",
});

mailchimp.getPing({}).then(data => {
  console.log(data);
})
```

## Description


## Actions
### getRoot
Get links to all other resources available in the API.


```js
mailchimp.getRoot({}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getAuthorizedApps
Get a list of an account's registered, connected applications.


```js
mailchimp.getAuthorizedApps({}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* count (integer) - The number of records to return. [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **10**.
* offset (integer) - The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **0**.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### postAuthorizedApps
Retrieve OAuth2-based credentials to associate API calls with your application.


```js
mailchimp.postAuthorizedApps({
  "Client Details": {
    "client_id": "",
    "client_secret": ""
  }
}, context)
```

#### Parameters
* Client Details (object) **required**
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getAuthorizedAppsId
Get information about a specific authorized application.


```js
mailchimp.getAuthorizedAppsId({
  "app_id": ""
}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* app_id (string) **required** - The unique id for the connected authorized application.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getAutomations
Get a summary of an account's Automations.


```js
mailchimp.getAutomations({}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* before_create_time (string) - Restrict the response to automations created before the set time. We recommend [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time format: 2015-10-21T15:41:36+00:00.
* since_create_time (string) - Restrict the response to automations created after the set time. We recommend [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time format: 2015-10-21T15:41:36+00:00.
* before_send_time (string) - Restrict the response to automations sent before the set time. We recommend [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time format: 2015-10-21T15:41:36+00:00.
* since_send_time (string) - Restrict the response to automations sent after the set time. We recommend [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time format: 2015-10-21T15:41:36+00:00.
* status (string) - Restrict the results to automations with the specified status.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getAutomationsId
Get a summary of an individual Automation workflow's settings and content. The `trigger_settings` object returns information for the first email in the workflow.


```js
mailchimp.getAutomationsId({
  "workflow_id": ""
}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* workflow_id (string) **required** - The unique id for the Automation workflow.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### postAutomationsIdActionsPauseAllEmails
Pause all emails in a specific Automation workflow.


```js
mailchimp.postAutomationsIdActionsPauseAllEmails({
  "workflow_id": ""
}, context)
```

#### Parameters
* workflow_id (string) **required** - The unique id for the Automation workflow.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### postAutomationsIdActionsStartAllEmails
Start all emails in an Automation workflow.


```js
mailchimp.postAutomationsIdActionsStartAllEmails({
  "workflow_id": ""
}, context)
```

#### Parameters
* workflow_id (string) **required** - The unique id for the Automation workflow.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getAutomationsIdEmails
Get a summary of the emails in an Automation workflow.


```js
mailchimp.getAutomationsIdEmails({
  "workflow_id": ""
}, context)
```

#### Parameters
* workflow_id (string) **required** - The unique id for the Automation workflow.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getAutomationsIdEmailsId
Get information about an individual Automation workflow email.


```js
mailchimp.getAutomationsIdEmailsId({
  "workflow_id": "",
  "workflow_email_id": ""
}, context)
```

#### Parameters
* workflow_id (string) **required** - The unique id for the Automation workflow.
* workflow_email_id (string) **required** - The unique id for the Automation workflow email.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### deleteAutomationsIdEmailsId
Removes an individual Automation workflow email. Emails from certain workflow types, including the Abandoned Cart Email (abandonedCart) and Product Retargeting Email (abandonedBrowse) Workflows, cannot be deleted.


```js
mailchimp.deleteAutomationsIdEmailsId({
  "workflow_id": "",
  "workflow_email_id": ""
}, context)
```

#### Parameters
* workflow_id (string) **required** - The unique id for the Automation workflow.
* workflow_email_id (string) **required** - The unique id for the Automation workflow email.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getAutomationsIdEmailsIdQueue
Get information about an Automation email queue.


```js
mailchimp.getAutomationsIdEmailsIdQueue({
  "workflow_id": "",
  "workflow_email_id": ""
}, context)
```

#### Parameters
* workflow_id (string) **required** - The unique id for the Automation workflow.
* workflow_email_id (string) **required** - The unique id for the Automation workflow email.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### postAutomationsIdEmailsIdQueue
Manually add a subscriber to a workflow, bypassing the default trigger settings. You can also use this endpoint to trigger a series of automated emails in an [API 3.0 workflow type](http://kb.mailchimp.com/automation/about-automation-workflow-types?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs#Using-the-API) or add subscribers to an automated email queue that uses the [API request delay type](http://kb.mailchimp.com/automation/about-automation-workflow-types?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs#Using-the-API).


```js
mailchimp.postAutomationsIdEmailsIdQueue({
  "workflow_id": "",
  "workflow_email_id": "",
  "body": {
    "email_address": ""
  }
}, context)
```

#### Parameters
* workflow_id (string) **required** - The unique id for the Automation workflow.
* workflow_email_id (string) **required** - The unique id for the Automation workflow email.
* body (object) **required** - Information about subscribers in an Automation email queue.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getAutomationsIdEmailsIdQueueId
Get information about a specific subscriber in an Automation email queue.


```js
mailchimp.getAutomationsIdEmailsIdQueueId({
  "workflow_id": "",
  "workflow_email_id": "",
  "subscriber_hash": ""
}, context)
```

#### Parameters
* workflow_id (string) **required** - The unique id for the Automation workflow.
* workflow_email_id (string) **required** - The unique id for the Automation workflow email.
* subscriber_hash (string) **required** - The MD5 hash of the lowercase version of the list member's email address.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### postAutomationsIdEmailsIdActionsPause
Pause an automated email.


```js
mailchimp.postAutomationsIdEmailsIdActionsPause({
  "workflow_id": "",
  "workflow_email_id": ""
}, context)
```

#### Parameters
* workflow_id (string) **required** - The unique id for the Automation workflow.
* workflow_email_id (string) **required** - The unique id for the Automation workflow email.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### postAutomationsIdEmailsIdActionsStart
Start an automated email.


```js
mailchimp.postAutomationsIdEmailsIdActionsStart({
  "workflow_id": "",
  "workflow_email_id": ""
}, context)
```

#### Parameters
* workflow_id (string) **required** - The unique id for the Automation workflow.
* workflow_email_id (string) **required** - The unique id for the Automation workflow email.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getAutomationsIdRemovedSubscribers
Get information about subscribers who were [removed from an Automation workflow](http://kb.mailchimp.com/automation/add-or-remove-subscribers-from-automation-workflow?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).


```js
mailchimp.getAutomationsIdRemovedSubscribers({
  "workflow_id": ""
}, context)
```

#### Parameters
* workflow_id (string) **required** - The unique id for the Automation workflow.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### postAutomationsIdRemovedSubscribers
[Remove a subscriber](http://kb.mailchimp.com/automation/add-or-remove-subscribers-from-automation-workflow?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) from a specific Automation workflow. You can remove a subscriber at any point in an Automation workflow, regardless of how many emails they've been sent from that workflow. Once they're removed, they can never be added back to the same workflow.


```js
mailchimp.postAutomationsIdRemovedSubscribers({
  "workflow_id": "",
  "body": {
    "email_address": ""
  }
}, context)
```

#### Parameters
* workflow_id (string) **required** - The unique id for the Automation workflow.
* body (object) **required** - Information about subscribers in an Automation email queue.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getAutomationsIdRemovedSubscribersId
Get information about a specific subscriber who was [removed from an Automation workflow](http://kb.mailchimp.com/automation/add-or-remove-subscribers-from-automation-workflow?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).


```js
mailchimp.getAutomationsIdRemovedSubscribersId({
  "workflow_id": "",
  "subscriber_hash": ""
}, context)
```

#### Parameters
* workflow_id (string) **required** - The unique id for the Automation workflow.
* subscriber_hash (string) **required** - The MD5 hash of the lowercase version of the list member's email address.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getBatches
Get a summary of batch requests that have been made.


```js
mailchimp.getBatches({}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* count (integer) - The number of records to return. [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **10**.
* offset (integer) - The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **0**.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### postBatches
Begin processing a batch operations request.


```js
mailchimp.postBatches({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getBatchesId
Get the status of a batch request.


```js
mailchimp.getBatchesId({
  "batch_id": ""
}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* batch_id (string) **required** - The unique id for the batch operation.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### deleteBatchesId
Stops a batch request from running. Since only one batch request is run at a time, this can be used to cancel a long running request. The results of any completed operations will not be available after this call.


```js
mailchimp.deleteBatchesId({
  "batch_id": ""
}, context)
```

#### Parameters
* batch_id (string) **required** - The unique id for the batch operation.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getBatchWebhooks
Get all webhooks that have been configured for batches.


```js
mailchimp.getBatchWebhooks({}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* count (integer) - The number of records to return. [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **10**.
* offset (integer) - The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **0**.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### postBatchWebhooks
Configure a webhook that will fire whenever any batch request completes processing.


```js
mailchimp.postBatchWebhooks({
  "body": {
    "url": ""
  }
}, context)
```

#### Parameters
* body (object) **required** - Add a new Batch Webook.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getBatchWebhook
Get information about a specific batch webhook.


```js
mailchimp.getBatchWebhook({
  "batch_webhook_id": ""
}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* batch_webhook_id (string) **required** - The unique id for the batch webhook.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### patchBatchWebhooks
Update a webhook that will fire whenever any batch request completes processing.


```js
mailchimp.patchBatchWebhooks({
  "batch_webhook_id": "",
  "body": {
    "url": ""
  }
}, context)
```

#### Parameters
* batch_webhook_id (string) **required** - The unique id for the batch webhook.
* body (object) **required** - Update an existing Batch Webook.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### deleteBatchWebhookId
Remove a batch webhook. Webhooks will no longer be sent to the given URL.


```js
mailchimp.deleteBatchWebhookId({
  "batch_webhook_id": ""
}, context)
```

#### Parameters
* batch_webhook_id (string) **required** - The unique id for the batch webhook.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getTemplateFolders
Get all folders used to organize templates.


```js
mailchimp.getTemplateFolders({}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* count (integer) - The number of records to return. [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **10**.
* offset (integer) - The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **0**.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### postTemplateFolders
Create a new template folder.


```js
mailchimp.postTemplateFolders({
  "body": {
    "name": ""
  }
}, context)
```

#### Parameters
* body (object) **required** - A folder used to organize templates.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getTemplateFoldersId
Get information about a specific folder used to organize templates.


```js
mailchimp.getTemplateFoldersId({
  "folder_id": ""
}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* folder_id (string) **required** - The unique id for the template folder.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### patchTemplateFoldersId
Update a specific folder used to organize templates.


```js
mailchimp.patchTemplateFoldersId({
  "folder_id": "",
  "body": {
    "name": ""
  }
}, context)
```

#### Parameters
* folder_id (string) **required** - The unique id for the template folder.
* body (object) **required** - A folder used to organize templates.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### deleteTemplateFoldersId
Delete a specific template folder, and mark all the templates in the folder as 'unfiled'.


```js
mailchimp.deleteTemplateFoldersId({
  "folder_id": ""
}, context)
```

#### Parameters
* folder_id (string) **required** - The unique id for the template folder.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getCampaignFolders
Get all folders used to organize campaigns.


```js
mailchimp.getCampaignFolders({}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* count (integer) - The number of records to return. [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **10**.
* offset (integer) - The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **0**.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### postCampaignFolders
Create a new campaign folder.


```js
mailchimp.postCampaignFolders({
  "body": {
    "name": ""
  }
}, context)
```

#### Parameters
* body (object) **required** - A folder used to organize campaigns.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getCampaignFoldersId
Get information about a specific folder used to organize campaigns.


```js
mailchimp.getCampaignFoldersId({
  "folder_id": ""
}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* folder_id (string) **required** - The unique id for the campaign folder.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### patchCampaignFoldersId
Update a specific folder used to organize campaigns.


```js
mailchimp.patchCampaignFoldersId({
  "folder_id": "",
  "body": {
    "name": ""
  }
}, context)
```

#### Parameters
* folder_id (string) **required** - The unique id for the campaign folder.
* body (object) **required** - A folder used to organize campaigns.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### deleteCampaignFoldersId
Delete a specific campaign folder, and mark all the campaigns in the folder as 'unfiled'.


```js
mailchimp.deleteCampaignFoldersId({
  "folder_id": ""
}, context)
```

#### Parameters
* folder_id (string) **required** - The unique id for the campaign folder.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getCampaigns
Get all campaigns in an account.


```js
mailchimp.getCampaigns({}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* count (integer) - The number of records to return. [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **10**.
* offset (integer) - The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **0**.
* type (string) - The campaign type.
* status (string) - The status of the campaign.
* before_send_time (string) - Restrict the response to campaigns sent before the set time. We recommend [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time format: 2015-10-21T15:41:36+00:00.
* since_send_time (string) - Restrict the response to campaigns sent after the set time. We recommend [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time format: 2015-10-21T15:41:36+00:00.
* before_create_time (string) - Restrict the response to campaigns created before the set time. We recommend [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time format: 2015-10-21T15:41:36+00:00.
* since_create_time (string) - Restrict the response to campaigns created after the set time. We recommend [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time format: 2015-10-21T15:41:36+00:00.
* list_id (string) - The unique id for the list.
* folder_id (string) - The unique folder id.
* sort_field (string) - Returns files sorted by the specified field.
* sort_dir (string) - Determines the order direction for sorted results.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### postCampaigns
Create a new MailChimp campaign.


```js
mailchimp.postCampaigns({
  "body": {
    "type": ""
  }
}, context)
```

#### Parameters
* body (object) **required** - A summary of an individual campaign's settings and content.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getCampaignsId
Get information about a specific campaign.


```js
mailchimp.getCampaignsId({
  "campaign_id": ""
}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* campaign_id (string) **required** - The unique id for the campaign.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### patchCampaignsId
Update some or all of the settings for a specific campaign.


```js
mailchimp.patchCampaignsId({
  "campaign_id": "",
  "body": {
    "settings": {
      "subject_line": "",
      "from_name": "",
      "reply_to": ""
    }
  }
}, context)
```

#### Parameters
* campaign_id (string) **required** - The unique id for the campaign.
* body (object) **required** - A summary of an individual campaign's settings and content.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### deleteCampaignsId
Remove a campaign from your MailChimp account.


```js
mailchimp.deleteCampaignsId({
  "campaign_id": ""
}, context)
```

#### Parameters
* campaign_id (string) **required** - The unique id for the campaign.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### postCampaignsIdActionsCancelSend
Cancel a Regular or Plain-Text Campaign after you send, before all of your recipients receive it. This feature is included with [MailChimp Pro](http://mailchimp.com/pro?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).


```js
mailchimp.postCampaignsIdActionsCancelSend({
  "campaign_id": ""
}, context)
```

#### Parameters
* campaign_id (string) **required** - The unique id for the campaign.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### postCampaignsIdActionsReplicate
[Replicate a campaign](http://kb.mailchimp.com/campaigns/ways-to-build/replicate-a-campaign-or-automation-workflow?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) in saved or send status.


```js
mailchimp.postCampaignsIdActionsReplicate({
  "campaign_id": ""
}, context)
```

#### Parameters
* campaign_id (string) **required** - The unique id for the campaign.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### postCampaignsIdActionsSend
Send a MailChimp campaign. For [RSS Campaigns](http://kb.mailchimp.com/campaigns/rss-in-campaigns/create-an-rss-campaign?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs), the campaign will send according to its schedule. All other campaigns will send immediately.


```js
mailchimp.postCampaignsIdActionsSend({
  "campaign_id": ""
}, context)
```

#### Parameters
* campaign_id (string) **required** - The unique id for the campaign.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### postCampaignsIdActionsSchedule
[Schedule a campaign](http://kb.mailchimp.com/campaigns/confirmation-and-sending/schedule-pause-or-send-a-campaign?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) for delivery. If you're using [Multivariate Campaigns](http://kb.mailchimp.com/campaigns/multivariate/about-multivariate-campaigns?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) to test send times or sending [RSS Campaigns](http://kb.mailchimp.com/campaigns/rss-in-campaigns/create-an-rss-campaign?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs), use the [send](http://developer.mailchimp.com/documentation/mailchimp/reference/campaigns/#action-post_campaigns_campaign_id_actions_send) action instead.


```js
mailchimp.postCampaignsIdActionsSchedule({
  "campaign_id": "",
  "body": {
    "schedule_time": ""
  }
}, context)
```

#### Parameters
* campaign_id (string) **required** - The unique id for the campaign.
* body (object) **required**
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### postCampaignsIdActionsUnschedule
[Unschedule](http://kb.mailchimp.com/campaigns/confirmation-and-sending/schedule-pause-or-send-a-campaign?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs#Pause-a-Scheduled-Campaign) a scheduled campaign that hasn't started sending.


```js
mailchimp.postCampaignsIdActionsUnschedule({
  "campaign_id": ""
}, context)
```

#### Parameters
* campaign_id (string) **required** - The unique id for the campaign.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### postCampaignsIdActionsTest
Send a [test email](http://kb.mailchimp.com/campaigns/previews-and-tests/preview-and-test-your-campaign?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).


```js
mailchimp.postCampaignsIdActionsTest({
  "campaign_id": "",
  "body": {
    "test_emails": [],
    "send_type": ""
  }
}, context)
```

#### Parameters
* campaign_id (string) **required** - The unique id for the campaign.
* body (object) **required**
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### postCampaignsIdActionsPause
[Pause an RSS-Driven campaign](http://kb.mailchimp.com/campaigns/rss-in-campaigns/pause-or-reactivate-an-rss-driven-campaign?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).


```js
mailchimp.postCampaignsIdActionsPause({
  "campaign_id": ""
}, context)
```

#### Parameters
* campaign_id (string) **required** - The unique id for the campaign.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### postCampaignsIdActionsResume
[Resume an RSS-Driven campaign](http://kb.mailchimp.com/campaigns/rss-in-campaigns/pause-or-reactivate-an-rss-driven-campaign?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).


```js
mailchimp.postCampaignsIdActionsResume({
  "campaign_id": ""
}, context)
```

#### Parameters
* campaign_id (string) **required** - The unique id for the campaign.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getCampaignsIdContent
Get the the HTML and plain-text content for a campaign.


```js
mailchimp.getCampaignsIdContent({
  "campaign_id": ""
}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* campaign_id (string) **required** - The unique id for the campaign.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### putCampaignsIdContent
Set the content for a campaign.


```js
mailchimp.putCampaignsIdContent({
  "campaign_id": "",
  "body": {}
}, context)
```

#### Parameters
* campaign_id (string) **required** - The unique id for the campaign.
* body (object) **required** - The HTML and plain-text content for a campaign
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getCampaignsIdFeedback
Get team feedback while you're [working together on a MailChimp campaign](http://kb.mailchimp.com/campaigns/design/collaborate-on-campaigns?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).


```js
mailchimp.getCampaignsIdFeedback({
  "campaign_id": ""
}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* campaign_id (string) **required** - The unique id for the campaign.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### postCampaignsIdFeedback
Add feedback on a specific campaign.


```js
mailchimp.postCampaignsIdFeedback({
  "campaign_id": "",
  "body": {
    "message": ""
  }
}, context)
```

#### Parameters
* campaign_id (string) **required** - The unique id for the campaign.
* body (object) **required** - A specific feedback message from a specific campaign.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getCampaignsIdFeedbackId
Get a specific feedback message from a campaign.


```js
mailchimp.getCampaignsIdFeedbackId({
  "campaign_id": "",
  "feedback_id": ""
}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* campaign_id (string) **required** - The unique id for the campaign.
* feedback_id (string) **required** - The unique id for the feedback message.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### patchCampaignsIdFeedbackId
Update a specific feedback message for a campaign.


```js
mailchimp.patchCampaignsIdFeedbackId({
  "campaign_id": "",
  "feedback_id": "",
  "body": {
    "message": ""
  }
}, context)
```

#### Parameters
* campaign_id (string) **required** - The unique id for the campaign.
* feedback_id (string) **required** - The unique id for the feedback message.
* body (object) **required** - A specific feedback message from a specific campaign.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### deleteCampaignsIdFeedbackId
Remove a specific feedback message for a campaign.


```js
mailchimp.deleteCampaignsIdFeedbackId({}, context)
```

#### Parameters
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getCampaignsIdSendChecklist
Review the send checklist for a campaign, and resolve any issues before sending.


```js
mailchimp.getCampaignsIdSendChecklist({
  "campaign_id": ""
}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* campaign_id (string) **required** - The unique id for the campaign.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getConnectedSites
Get all connected sites in an account.


```js
mailchimp.getConnectedSites({}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* count (integer) - The number of records to return. [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **10**.
* offset (integer) - The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **0**.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### postConnectedSites
Create a new MailChimp connected site.


```js
mailchimp.postConnectedSites({
  "body": {
    "foreign_id": "",
    "platform": "",
    "domain": ""
  }
}, context)
```

#### Parameters
* body (object) **required** - Information about a specific connected site.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getConnectedSitesId
Get information about a specific connected site.


```js
mailchimp.getConnectedSitesId({
  "connected_site_id": ""
}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* connected_site_id (string) **required** - The unique identifier for the site.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### deleteConnectedSitesId
Remove a connected site from your MailChimp account.


```js
mailchimp.deleteConnectedSitesId({
  "connected_site_id": ""
}, context)
```

#### Parameters
* connected_site_id (string) **required** - The unique identifier for the site.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### postConnectedSitesIdActionsVerifyScriptInstallation
Verify that the connected sites script has been installed, either via the script URL or fragment.


```js
mailchimp.postConnectedSitesIdActionsVerifyScriptInstallation({
  "connected_site_id": ""
}, context)
```

#### Parameters
* connected_site_id (string) **required** - The unique identifier for the site.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getConversations
Get a list of conversations for the account.


```js
mailchimp.getConversations({}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* count (integer) - The number of records to return. [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **10**.
* offset (integer) - The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **0**.
* has_unread_messages (string) - Whether the conversation has any unread messages.
* list_id (string) - The unique id for the list.
* campaign_id (string) - The unique id for the campaign.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getConversationsId
Get details about an individual conversation.


```js
mailchimp.getConversationsId({
  "conversation_id": ""
}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* conversation_id (string) **required** - The unique id for the conversation.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getConversationsIdMessages
Get messages from a specific conversation.


```js
mailchimp.getConversationsIdMessages({
  "conversation_id": ""
}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* conversation_id (string) **required** - The unique id for the conversation.
* is_read (string) - Whether a conversation message has been marked as read.
* before_timestamp (string) - Restrict the response to messages created before the set time. We recommend [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time format: 2015-10-21T15:41:36+00:00.
* since_timestamp (string) - Restrict the response to messages created after the set time. We recommend [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time format: 2015-10-21T15:41:36+00:00.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### postConversationsIdMessages
Post a new message to a conversation.


```js
mailchimp.postConversationsIdMessages({
  "conversation_id": "",
  "body": {
    "from_email": "",
    "read": true
  }
}, context)
```

#### Parameters
* conversation_id (string) **required** - The unique id for the conversation.
* body (object) **required** - An individual message in a conversation. Conversation tracking is a feature available to paid accounts that lets you view replies to your campaigns in your MailChimp account.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getConversationsIdMessagesId
Get an individual message in a conversation.


```js
mailchimp.getConversationsIdMessagesId({
  "conversation_id": "",
  "message_id": ""
}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* conversation_id (string) **required** - The unique id for the conversation.
* message_id (string) **required** - The unique id for the conversation message.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getDashboardAds
Get all the onboarding ads info for the mobile dashboard


```js
mailchimp.getDashboardAds({}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* platform (string) - Restrict results to ads compatible with the given platform. Default is ios
* num (integer) - Restrict results to this number of ads (if we have that many. Default is 3.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getDashboardAudiences
Get all the audiences info for the mobile dashboard


```js
mailchimp.getDashboardAudiences({}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getDashboardCharts
Get info about which dashboard charts to show for this user


```js
mailchimp.getDashboardCharts({}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getDashboardEcommerce
Get all the ecommerce info for the mobile dashboard


```js
mailchimp.getDashboardEcommerce({}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getDashboardEngagement
Get all the engagement info for the mobile dashboard


```js
mailchimp.getDashboardEngagement({}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getFileManager
Get information about the file-manager endpoint's resources


```js
mailchimp.getFileManager({}, context)
```

#### Parameters
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getFileManagerFiles
Get a list of available images and files stored in the File Manager for the account.


```js
mailchimp.getFileManagerFiles({}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* count (integer) - The number of records to return. [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **10**.
* offset (integer) - The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **0**.
* type (string) - The file type for the File Manager file.
* created_by (string) - The MailChimp account user who created the File Manager file.
* before_created_at (string) - Restrict the response to files created before the set date.
* since_created_at (string) - Restrict the response to files created after the set date.
* sort_field (string) - Returns files sorted by the specified field.
* sort_dir (string) - Determines the order direction for sorted results.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### postFileManagerFiles
 Upload a new image or file to the File Manager.


```js
mailchimp.postFileManagerFiles({
  "body": {
    "name": "",
    "file_data": ""
  }
}, context)
```

#### Parameters
* body (object) **required** - An individual file listed in the File Manager.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getFileManagerFilesId
Get information about a specific file in the File Manager.


```js
mailchimp.getFileManagerFilesId({
  "file_id": ""
}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* file_id (string) **required** - The unique id for the File Manager file.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### patchFileManagerFilesId
Update a file in the File Manager.


```js
mailchimp.patchFileManagerFilesId({
  "file_id": "",
  "body": {}
}, context)
```

#### Parameters
* file_id (string) **required** - The unique id for the File Manager file.
* body (object) **required** - An individual file listed in the File Manager.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### deleteFileManagerFilesId
Remove a specific file from the File Manager.


```js
mailchimp.deleteFileManagerFilesId({
  "file_id": ""
}, context)
```

#### Parameters
* file_id (string) **required** - The unique id for the File Manager file.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getFileManagerFolders
Get a list of all folders in the File Manager.


```js
mailchimp.getFileManagerFolders({}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* count (integer) - The number of records to return. [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **10**.
* offset (integer) - The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **0**.
* created_by (string) - The MailChimp account user who created the File Manager file.
* before_created_at (string) - Restrict the response to files created before the set date.
* since_created_at (string) - Restrict the response to files created after the set date.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### postFileManagerFolders
Create a new folder in the File Manager.


```js
mailchimp.postFileManagerFolders({
  "body": {
    "name": ""
  }
}, context)
```

#### Parameters
* body (object) **required** - An individual folder listed in the File Manager.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getFileManagerFoldersId
Get information about a specific folder in the File Manager.


```js
mailchimp.getFileManagerFoldersId({
  "folder_id": ""
}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* folder_id (string) **required** - The unique id for the File Manager folder.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### patchFileManagerFoldersId
Update a specific File Manager folder.


```js
mailchimp.patchFileManagerFoldersId({
  "folder_id": "",
  "body": {
    "name": ""
  }
}, context)
```

#### Parameters
* folder_id (string) **required** - The unique id for the File Manager folder.
* body (object) **required** - An individual folder listed in the File Manager.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### deleteFileManagerFoldersId
Delete a specific folder in the File Manager.


```js
mailchimp.deleteFileManagerFoldersId({}, context)
```

#### Parameters
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getLists
Get information about all lists in the account.


```js
mailchimp.getLists({}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* count (integer) - The number of records to return. [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **10**.
* offset (integer) - The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **0**.
* before_date_created (string) - Restrict response to lists created before the set date.
* since_date_created (string) - Restrict results to lists created after the set date.
* before_campaign_last_sent (string) - Restrict results to lists created before the last campaign send date.
* since_campaign_last_sent (string) - Restrict results to lists created after the last campaign send date.
* email (string) - Restrict results to lists that include a specific subscriber's email address.
* sort_field (string) - Returns files sorted by the specified field.
* sort_dir (string) - Determines the order direction for sorted results.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### postLists
Create a new list in your MailChimp account.


```js
mailchimp.postLists({
  "body": {
    "name": "",
    "permission_reminder": "",
    "email_type_option": true,
    "contact": {
      "company": "",
      "address1": "",
      "city": "",
      "state": "",
      "zip": "",
      "country": ""
    },
    "campaign_defaults": {
      "from_name": "",
      "from_email": "",
      "subject": "",
      "language": ""
    }
  }
}, context)
```

#### Parameters
* body (object) **required** - Information about a specific list.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getListsId
Get information about a specific list in your MailChimp account. Results include list members who have signed up but haven't confirmed their subscription yet and [unsubscribed or cleaned](http://kb.mailchimp.com/lists/managing-subscribers/view-unsubscribed-and-cleaned-addresses?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).


```js
mailchimp.getListsId({
  "list_id": ""
}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* list_id (string) **required** - The unique id for the list.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### patchListsId
Update the settings for a specific list.


```js
mailchimp.patchListsId({
  "list_id": "",
  "body": {
    "name": "",
    "permission_reminder": "",
    "email_type_option": true,
    "contact": {
      "company": "",
      "address1": "",
      "city": "",
      "state": "",
      "zip": "",
      "country": ""
    },
    "campaign_defaults": {
      "from_name": "",
      "from_email": "",
      "subject": "",
      "language": ""
    }
  }
}, context)
```

#### Parameters
* list_id (string) **required** - The unique id for the list.
* body (object) **required** - Information about a specific list.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### deleteListsId
Delete a list from your MailChimp account. If you delete a list, you'll lose the list history—including subscriber activity, unsubscribes, complaints, and bounces. You’ll also lose subscribers’ email addresses, unless you [exported and backed up your list](http://kb.mailchimp.com/lists/managing-subscribers/view-or-export-a-list?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs#View-or-Export-a-List).


```js
mailchimp.deleteListsId({
  "list_id": ""
}, context)
```

#### Parameters
* list_id (string) **required** - The unique id for the list.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### postListsId
Batch subscribe or unsubscribe list members.


```js
mailchimp.postListsId({
  "list_id": "",
  "body": {
    "members": []
  }
}, context)
```

#### Parameters
* list_id (string) **required** - The unique id for the list.
* body (object) **required** - Members to subscribe to or unsubscribe from a list.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getListsIdAbuseReports
Get all abuse reports for a specific list.


```js
mailchimp.getListsIdAbuseReports({
  "list_id": ""
}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* count (integer) - The number of records to return. [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **10**.
* offset (integer) - The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **0**.
* list_id (string) **required** - The unique id for the list.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getListsIdAbuseReportsId
Get details about a specific abuse report.


```js
mailchimp.getListsIdAbuseReportsId({
  "list_id": "",
  "report_id": null
}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* count (integer) - The number of records to return. [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **10**.
* offset (integer) - The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **0**.
* list_id (string) **required** - The unique id for the list.
* report_id (undefined) **required** - The id for the abuse report.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getListsIdActivity
Get up to the previous 180 days of daily detailed aggregated activity stats for a list, not including Automation activity.


```js
mailchimp.getListsIdActivity({
  "list_id": ""
}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* list_id (string) **required** - The unique id for the list.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getListsIdClients
Get a list of the top email clients based on user-agent strings.


```js
mailchimp.getListsIdClients({
  "list_id": ""
}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* list_id (string) **required** - The unique id for the list.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getListsIdGrowthHistory
Get a month-by-month summary of a specific list's growth activity.


```js
mailchimp.getListsIdGrowthHistory({
  "list_id": ""
}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* count (integer) - The number of records to return. [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **10**.
* offset (integer) - The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **0**.
* list_id (string) **required** - The unique id for the list.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getListsIdGrowthHistoryId
Get a summary of a specific list's growth activity for a specific month and year.


```js
mailchimp.getListsIdGrowthHistoryId({
  "list_id": "",
  "month": null
}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* list_id (string) **required** - The unique id for the list.
* month (undefined) **required** - A specific month of list growth history.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getListsIdInterestCategories
Get information about a list's interest categories.


```js
mailchimp.getListsIdInterestCategories({
  "list_id": ""
}, context)
```

#### Parameters
* list_id (string) **required** - The unique id for the list.
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* count (integer) - The number of records to return. [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **10**.
* offset (integer) - The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **0**.
* type (string) - Restrict results a type of interest group
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### postListsIdInterestCategories
Create a new interest category.


```js
mailchimp.postListsIdInterestCategories({
  "list_id": "",
  "body": {
    "title": "",
    "type": ""
  }
}, context)
```

#### Parameters
* list_id (string) **required** - The unique id for the list.
* body (object) **required** - Interest categories organize interests, which are used to group subscribers based on their preferences. These correspond to Group Titles the application.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getListsIdInterestCategoriesId
Get information about a specific interest category.


```js
mailchimp.getListsIdInterestCategoriesId({
  "list_id": "",
  "interest_category_id": ""
}, context)
```

#### Parameters
* list_id (string) **required** - The unique id for the list.
* interest_category_id (string) **required** - The unique id for the interest category.
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### patchListsIdInterestCategoriesId
Update a specific interest category.


```js
mailchimp.patchListsIdInterestCategoriesId({
  "list_id": "",
  "interest_category_id": "",
  "body": {
    "title": "",
    "type": ""
  }
}, context)
```

#### Parameters
* list_id (string) **required** - The unique id for the list.
* interest_category_id (string) **required** - The unique id for the interest category.
* body (object) **required** - Interest categories organize interests, which are used to group subscribers based on their preferences. These correspond to Group Titles the application.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### deleteListsIdInterestCategoriesId
Delete a specific interest category.


```js
mailchimp.deleteListsIdInterestCategoriesId({
  "list_id": "",
  "interest_category_id": ""
}, context)
```

#### Parameters
* list_id (string) **required** - The unique id for the list.
* interest_category_id (string) **required** - The unique id for the interest category.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getListsIdInterestCategoriesIdInterests
Get a list of this category's interests.


```js
mailchimp.getListsIdInterestCategoriesIdInterests({
  "list_id": "",
  "interest_category_id": ""
}, context)
```

#### Parameters
* list_id (string) **required** - The unique id for the list.
* interest_category_id (string) **required** - The unique id for the interest category.
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* count (integer) - The number of records to return. [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **10**.
* offset (integer) - The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **0**.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### postListsIdInterestCategoriesIdInterests
Create a new interest or 'group name' for a specific category.


```js
mailchimp.postListsIdInterestCategoriesIdInterests({
  "list_id": "",
  "interest_category_id": "",
  "body": {
    "name": ""
  }
}, context)
```

#### Parameters
* list_id (string) **required** - The unique id for the list.
* interest_category_id (string) **required** - The unique id for the interest category.
* body (object) **required** - Assign subscribers to interests to group them together. Interests are referred to as 'group names' in the MailChimp application.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getListsIdInterestCategoriesIdInterestsId
Get interests or 'group names' for a specific category.


```js
mailchimp.getListsIdInterestCategoriesIdInterestsId({
  "list_id": "",
  "interest_category_id": "",
  "interest_id": ""
}, context)
```

#### Parameters
* list_id (string) **required** - The unique id for the list.
* interest_category_id (string) **required** - The unique id for the interest category.
* interest_id (string) **required** - The specific interest or 'group name'.
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### patchListsIdInterestCategoriesIdInterestsId
Update interests or 'group names' for a specific category.


```js
mailchimp.patchListsIdInterestCategoriesIdInterestsId({
  "list_id": "",
  "interest_category_id": "",
  "interest_id": ""
}, context)
```

#### Parameters
* list_id (string) **required** - The unique id for the list.
* interest_category_id (string) **required** - The unique id for the interest category.
* interest_id (string) **required** - The specific interest or 'group name'.
* body (object) - Assign subscribers to interests to group them together. Interests are referred to as 'group names' in the MailChimp application.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### deleteListsIdInterestCategoriesIdInterestsId
Delete interests or group names in a specific category.


```js
mailchimp.deleteListsIdInterestCategoriesIdInterestsId({
  "list_id": "",
  "interest_category_id": "",
  "interest_id": ""
}, context)
```

#### Parameters
* list_id (string) **required** - The unique id for the list.
* interest_category_id (string) **required** - The unique id for the interest category.
* interest_id (string) **required** - The specific interest or 'group name'.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getListsIdSegments
Get information about all available segments for a specific list.


```js
mailchimp.getListsIdSegments({
  "list_id": ""
}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* count (integer) - The number of records to return. [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **10**.
* offset (integer) - The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **0**.
* list_id (string) **required** - The unique id for the list.
* type (string) - Limit results based on segment type.
* since_created_at (string) - Restrict results to segments created after the set time.
* before_created_at (string) - Restrict results to segments created before the set time.
* since_updated_at (string) - Restrict results to segments update after the set time.
* before_updated_at (string) - Restrict results to segments update before the set time.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### postListsIdSegments
Create a new segment in a specific list.


```js
mailchimp.postListsIdSegments({
  "list_id": "",
  "body": {
    "name": ""
  }
}, context)
```

#### Parameters
* list_id (string) **required** - The unique id for the list.
* body (object) **required** - Information about a specific list segment.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getListsIdSegmentsId
Get information about a specific segment.


```js
mailchimp.getListsIdSegmentsId({
  "list_id": "",
  "segment_id": ""
}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* list_id (string) **required** - The unique id for the list.
* segment_id (string) **required** - The unique id for the segment.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### deleteListsIdSegmentsId
Delete a specific segment in a list.


```js
mailchimp.deleteListsIdSegmentsId({
  "list_id": "",
  "segment_id": ""
}, context)
```

#### Parameters
* list_id (string) **required** - The unique id for the list.
* segment_id (string) **required** - The unique id for the segment.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### patchListsIdSegmentsId
Update a specific segment in a list.


```js
mailchimp.patchListsIdSegmentsId({
  "list_id": "",
  "segment_id": "",
  "body": {
    "name": ""
  }
}, context)
```

#### Parameters
* list_id (string) **required** - The unique id for the list.
* segment_id (string) **required** - The unique id for the segment.
* body (object) **required** - Information about a specific list segment.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### postListsIdSegmentsId
Batch add/remove list members to static segment


```js
mailchimp.postListsIdSegmentsId({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required** - Members to add/remove to/from a static segment
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getListsIdSegmentsIdMembers
Get information about members in a [saved segment](http://kb.mailchimp.com/segments/how-to-use-saved-segments?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).


```js
mailchimp.getListsIdSegmentsIdMembers({
  "list_id": "",
  "segment_id": ""
}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* count (integer) - The number of records to return. [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **10**.
* offset (integer) - The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **0**.
* list_id (string) **required** - The unique id for the list.
* segment_id (string) **required** - The unique id for the segment.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### postListsIdSegmentsIdMembers
Add a member to a static segment.


```js
mailchimp.postListsIdSegmentsIdMembers({
  "list_id": "",
  "segment_id": "",
  "body": {
    "email_address": ""
  }
}, context)
```

#### Parameters
* list_id (string) **required** - The unique id for the list.
* segment_id (string) **required** - The unique id for the segment.
* body (object) **required**
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### deleteListsIdSegmentsIdMembersId
Remove a member from the specified static segment.


```js
mailchimp.deleteListsIdSegmentsIdMembersId({
  "list_id": "",
  "segment_id": "",
  "subscriber_hash": ""
}, context)
```

#### Parameters
* list_id (string) **required** - The unique id for the list.
* segment_id (string) **required** - The unique id for the segment.
* subscriber_hash (string) **required** - The MD5 hash of the lowercase version of the list member's email address.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getListsIdMembers
Get information about members in a specific MailChimp list.


```js
mailchimp.getListsIdMembers({
  "list_id": ""
}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* count (integer) - The number of records to return. [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **10**.
* offset (integer) - The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **0**.
* list_id (string) **required** - The unique id for the list.
* email_type (string) - The email type.
* status (string) - The subscriber's status.
* since_timestamp_opt (string) - Restrict results to subscribers who opted-in after the set timeframe. We recommend [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time format: 2015-10-21T15:41:36+00:00.
* before_timestamp_opt (string) - Restrict results to subscribers who opted-in before the set timeframe. We recommend [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time format: 2015-10-21T15:41:36+00:00.
* since_last_changed (string) - Restrict results to subscribers whose information changed after the set timeframe.
* before_last_changed (string) - Restrict results to subscribers whose information changed before the set timeframe.
* unique_email_id (string) - A unique identifier for the email address across all MailChimp lists. This parameter can be found in any links with [Ecommerce Tracking](http://kb.mailchimp.com/integrations/e-commerce/how-to-use-mailchimp-for-e-commerce?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) enabled.
* vip_only (boolean) - A filter to return only the list's VIP members. Passing `true` will restrict results to VIP list members, passing `false` will return all list members.
* interest_category_id (string) - The unique id for the interest category.
* interest_ids (string) - Used to filter list members by interests. Must be accompanied by interest_category_id and interest_match. The value must be a comma separated list of interest ids present for the given interest category.
* interest_match (string) - Used to filter list members by interests. Must be accompanied by interest_category_id and interest_ids. "any" will match a member with any of the interest supplied, "all" will only match members with every interest supplied, and "none" will match members without any of the interest supplied.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### postListsIdMembers
Add a new member to the list.


```js
mailchimp.postListsIdMembers({
  "list_id": "",
  "body": {
    "email_address": "",
    "status": ""
  }
}, context)
```

#### Parameters
* list_id (string) **required** - The unique id for the list.
* body (object) **required** - Individuals who are currently or have been previously subscribed to this list, including members who have bounced or unsubscribed.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getListsIdMembersId
Get information about a specific list member, including a currently subscribed, unsubscribed, or bounced member.


```js
mailchimp.getListsIdMembersId({
  "list_id": "",
  "subscriber_hash": ""
}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* list_id (string) **required** - The unique id for the list.
* subscriber_hash (string) **required** - The MD5 hash of the lowercase version of the list member's email address.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### putListsIdMembersId
Add or update a list member.


```js
mailchimp.putListsIdMembersId({
  "list_id": "",
  "subscriber_hash": "",
  "body": {
    "email_address": "",
    "status_if_new": ""
  }
}, context)
```

#### Parameters
* list_id (string) **required** - The unique id for the list.
* subscriber_hash (string) **required** - The MD5 hash of the lowercase version of the list member's email address.
* body (object) **required** - Individuals who are currently or have been previously subscribed to this list, including members who have bounced or unsubscribed.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### patchListsIdMembersId
Update information for a specific list member.


```js
mailchimp.patchListsIdMembersId({
  "list_id": "",
  "subscriber_hash": "",
  "body": {}
}, context)
```

#### Parameters
* list_id (string) **required** - The unique id for the list.
* subscriber_hash (string) **required** - The MD5 hash of the lowercase version of the list member's email address.
* body (object) **required** - Individuals who are currently or have been previously subscribed to this list, including members who have bounced or unsubscribed.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### deleteListsIdMembersId
Delete a member from a list.


```js
mailchimp.deleteListsIdMembersId({
  "list_id": "",
  "subscriber_hash": ""
}, context)
```

#### Parameters
* list_id (string) **required** - The unique id for the list.
* subscriber_hash (string) **required** - The MD5 hash of the lowercase version of the list member's email address.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getListsIdMembersIdActivity
Get the last 50 events of a member's activity on a specific list, including opens, clicks, and unsubscribes.


```js
mailchimp.getListsIdMembersIdActivity({
  "list_id": "",
  "subscriber_hash": ""
}, context)
```

#### Parameters
* list_id (string) **required** - The unique id for the list.
* subscriber_hash (string) **required** - The MD5 hash of the lowercase version of the list member's email address.
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getListsIdMembersIdGoals
Get the last 50 Goal events for a member on a specific list.


```js
mailchimp.getListsIdMembersIdGoals({
  "list_id": "",
  "subscriber_hash": ""
}, context)
```

#### Parameters
* list_id (string) **required** - The unique id for the list.
* subscriber_hash (string) **required** - The MD5 hash of the lowercase version of the list member's email address.
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getListsIdMembersIdNotes
Get recent notes for a specific list member.


```js
mailchimp.getListsIdMembersIdNotes({
  "list_id": "",
  "subscriber_hash": ""
}, context)
```

#### Parameters
* list_id (string) **required** - The unique id for the list.
* subscriber_hash (string) **required** - The MD5 hash of the lowercase version of the list member's email address.
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* count (integer) - The number of records to return. [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **10**.
* offset (integer) - The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **0**.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### postListsIdMembersIdNotes
Add a new note for a specific subscriber.


```js
mailchimp.postListsIdMembersIdNotes({
  "list_id": "",
  "subscriber_hash": ""
}, context)
```

#### Parameters
* list_id (string) **required** - The unique id for the list.
* subscriber_hash (string) **required** - The MD5 hash of the lowercase version of the list member's email address.
* body (object) - A specific note for a specific member.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getListsIdMembersIdNotesId
Get a specific note for a specific list member.


```js
mailchimp.getListsIdMembersIdNotesId({
  "list_id": "",
  "subscriber_hash": "",
  "note_id": ""
}, context)
```

#### Parameters
* list_id (string) **required** - The unique id for the list.
* subscriber_hash (string) **required** - The MD5 hash of the lowercase version of the list member's email address.
* note_id (string) **required** - The id for the note.
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### patchListsIdMembersIdNotesId
Update a specific note for a specific list member.


```js
mailchimp.patchListsIdMembersIdNotesId({
  "list_id": "",
  "subscriber_hash": "",
  "note_id": ""
}, context)
```

#### Parameters
* list_id (string) **required** - The unique id for the list.
* subscriber_hash (string) **required** - The MD5 hash of the lowercase version of the list member's email address.
* note_id (string) **required** - The id for the note.
* body (object) - A specific note for a specific member.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### deleteListsIdMembersIdNotesId
Delete a specific note for a specific list member.


```js
mailchimp.deleteListsIdMembersIdNotesId({
  "list_id": "",
  "subscriber_hash": "",
  "note_id": ""
}, context)
```

#### Parameters
* list_id (string) **required** - The unique id for the list.
* subscriber_hash (string) **required** - The MD5 hash of the lowercase version of the list member's email address.
* note_id (string) **required** - The id for the note.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getListsIdMergeFields
Get a list of all merge fields (formerly merge vars) for a list.


```js
mailchimp.getListsIdMergeFields({
  "list_id": ""
}, context)
```

#### Parameters
* list_id (string) **required** - The unique id for the list.
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* count (integer) - The number of records to return. [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **10**.
* offset (integer) - The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **0**.
* type (string) - The merge field type.
* required (boolean) - The boolean value if the merge field is required.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### postListsIdMergeFields
Add a new merge field for a specific list.


```js
mailchimp.postListsIdMergeFields({
  "list_id": "",
  "body": {
    "name": "",
    "type": ""
  }
}, context)
```

#### Parameters
* list_id (string) **required** - The unique id for the list.
* body (object) **required** - A merge field (formerly merge vars) for a specific list. These correspond to merge fields in MailChimp's lists and subscriber profiles.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getListsIdMergeFieldsId
Get information about a specific merge field in a list.


```js
mailchimp.getListsIdMergeFieldsId({
  "list_id": "",
  "merge_id": ""
}, context)
```

#### Parameters
* list_id (string) **required** - The unique id for the list.
* merge_id (string) **required** - The id for the merge field.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### patchListsIdMergeFieldsId
Update a specific merge field in a list.


```js
mailchimp.patchListsIdMergeFieldsId({
  "list_id": "",
  "merge_id": "",
  "body": {
    "name": ""
  }
}, context)
```

#### Parameters
* list_id (string) **required** - The unique id for the list.
* merge_id (string) **required** - The id for the merge field.
* body (object) **required** - A merge field (formerly merge vars) for a specific list. These correspond to merge fields in MailChimp's lists and subscriber profiles.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### deleteListsIdMergeFieldsId
Delete a specific merge field in a list.


```js
mailchimp.deleteListsIdMergeFieldsId({
  "list_id": "",
  "merge_id": ""
}, context)
```

#### Parameters
* list_id (string) **required** - The unique id for the list.
* merge_id (string) **required** - The id for the merge field.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getListsIdWebhooks
Get information about all webhooks for a specific list.


```js
mailchimp.getListsIdWebhooks({}, context)
```

#### Parameters
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### postListsIdWebhooks
Create a new webhook for a specific list.


```js
mailchimp.postListsIdWebhooks({
  "list_id": "",
  "body": {}
}, context)
```

#### Parameters
* list_id (string) **required** - The unique id for the list.
* body (object) **required** - Configure a webhook for the given list.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getListsIdWebhooksId
Get information about a specific webhook.


```js
mailchimp.getListsIdWebhooksId({}, context)
```

#### Parameters
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### deleteListsIdWebhooksId
Delete a specific webhook in a list.


```js
mailchimp.deleteListsIdWebhooksId({}, context)
```

#### Parameters
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### patchListsIdWebhooksId
Update the settings for an existing webhook.


```js
mailchimp.patchListsIdWebhooksId({
  "list_id": "",
  "body": {}
}, context)
```

#### Parameters
* list_id (string) **required** - The unique id for the list.
* body (object) **required** - Configure a webhook for the given list.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getListsIdSignupForms
Get signup forms for a specific list.


```js
mailchimp.getListsIdSignupForms({
  "list_id": ""
}, context)
```

#### Parameters
* list_id (string) **required** - The unique id for the list.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### postListsIdSignupForms
Customize a list's default signup form.


```js
mailchimp.postListsIdSignupForms({
  "list_id": "",
  "body": {}
}, context)
```

#### Parameters
* list_id (string) **required** - The unique id for the list.
* body (object) **required** - List signup form.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getListsIdLocations
Get the locations (countries) that the list's subscribers have been tagged to based on geocoding their IP address.


```js
mailchimp.getListsIdLocations({
  "list_id": ""
}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* list_id (string) **required** - The unique id for the list.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getMobileNotificationPreferences
All of a user's mobile push notification preferences by device.


```js
mailchimp.getMobileNotificationPreferences({}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* count (integer) - The number of records to return. [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **10**.
* offset (integer) - The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **0**.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### postMobileNotificationPreferences
Add mobile push notification preferences for a device.


```js
mailchimp.postMobileNotificationPreferences({
  "body": {
    "device_id": "",
    "type_campaign_sent": true
  }
}, context)
```

#### Parameters
* body (object) **required** - Add mobile push notification preferences for a device.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getMobileNotificationPreferencesId
Get information about a specific device's mobile push notification preferences.


```js
mailchimp.getMobileNotificationPreferencesId({
  "device_hash": ""
}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* device_hash (string) **required** - The MD5 hash of the lowercase version of the device ID.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### postMobileNotificationPreferencesIdActionsCreateIfNeeded
Create default mobile notification preferences if user has not specified any.


```js
mailchimp.postMobileNotificationPreferencesIdActionsCreateIfNeeded({
  "device_hash": "",
  "device_id": ""
}, context)
```

#### Parameters
* device_hash (string) **required** - The MD5 hash of the lowercase version of the device ID.
* device_id (string) **required** - A unique identifier for the device.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### patchMobileNotificationPreferencesId
Update mobile push notification preferences for a device.


```js
mailchimp.patchMobileNotificationPreferencesId({
  "device_hash": "",
  "body": {}
}, context)
```

#### Parameters
* device_hash (string) **required** - The MD5 hash of the lowercase version of the device ID.
* body (object) **required** - Update mobile push notification preferences for a device.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### deleteMobileNotificationPreferencesId
Delete mobile push notification preferences for a device.


```js
mailchimp.deleteMobileNotificationPreferencesId({
  "device_hash": ""
}, context)
```

#### Parameters
* device_hash (string) **required** - The MD5 hash of the lowercase version of the device ID.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### postMobileNotificationPreferencesIdActionsCreateIfNeeded
Create default mobile notification preferences if user has not specified any.


```js
mailchimp.postMobileNotificationPreferencesIdActionsCreateIfNeeded({
  "device_hash": "",
  "device_id": ""
}, context)
```

#### Parameters
* device_hash (string) **required** - The MD5 hash of the lowercase version of the device ID.
* device_id (string) **required** - A unique identifier for the device.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getMobileNotificationPreferencesIdStores
All of a device's push notifications preferences for each store.


```js
mailchimp.getMobileNotificationPreferencesIdStores({
  "device_hash": ""
}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* count (integer) - The number of records to return. [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **10**.
* offset (integer) - The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **0**.
* device_hash (string) **required** - The MD5 hash of the lowercase version of the device ID.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### postMobileNotificationPreferencesIdStores
Add mobile push notification preferences for an e-commerce store.


```js
mailchimp.postMobileNotificationPreferencesIdStores({
  "device_hash": "",
  "body": {
    "store": {
      "id": ""
    },
    "type_instant_order": true,
    "type_daily_order_summary": true
  }
}, context)
```

#### Parameters
* device_hash (string) **required** - The MD5 hash of the lowercase version of the device ID.
* body (object) **required** - Add mobile push notification preferences for an e-commerce store.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getMobileNotificationPreferencesIdStoresId
Get information about a device's preferences for push notifications regarding an e-commerce store.


```js
mailchimp.getMobileNotificationPreferencesIdStoresId({
  "device_hash": "",
  "store_id": ""
}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* device_hash (string) **required** - The MD5 hash of the lowercase version of the device ID.
* store_id (string) **required** - The store id.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### patchMobileNotificationPreferencesIdStoresId
Update mobile push notification preferences for an e-commerce store.


```js
mailchimp.patchMobileNotificationPreferencesIdStoresId({
  "device_hash": "",
  "store_id": "",
  "body": {}
}, context)
```

#### Parameters
* device_hash (string) **required** - The MD5 hash of the lowercase version of the device ID.
* store_id (string) **required** - The store id.
* body (object) **required** - Update mobile push notification preferences for an e-commerce store.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### deleteMobileNotificationPreferencesIdStoresId
Delete mobile push notification preferences for an e-commerce store.


```js
mailchimp.deleteMobileNotificationPreferencesIdStoresId({
  "device_hash": "",
  "store_id": ""
}, context)
```

#### Parameters
* device_hash (string) **required** - The MD5 hash of the lowercase version of the device ID.
* store_id (string) **required** - The store id.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getReports
Get campaign reports.


```js
mailchimp.getReports({}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* count (integer) - The number of records to return. [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **10**.
* offset (integer) - The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **0**.
* type (string) - The campaign type.
* before_send_time (string) - Restrict the response to campaigns sent before the set time. We recommend [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time format: 2015-10-21T15:41:36+00:00.
* since_send_time (string) - Restrict the response to campaigns sent after the set time. We recommend [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time format: 2015-10-21T15:41:36+00:00.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getReportsId
Get report details for a specific sent campaign.


```js
mailchimp.getReportsId({
  "campaign_id": ""
}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* campaign_id (string) **required** - The unique id for the campaign.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getReportsIdAbuseReportsId
Get a list of [abuse complaints](http://kb.mailchimp.com/accounts/compliance-tips/about-abuse-complaints?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) for a specific campaign.


```js
mailchimp.getReportsIdAbuseReportsId({
  "campaign_id": ""
}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* campaign_id (string) **required** - The unique id for the campaign.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getReportsIdAbuseReportsIdId
Get information about a specific abuse report for a campaign.


```js
mailchimp.getReportsIdAbuseReportsIdId({
  "campaign_id": "",
  "report_id": null
}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* campaign_id (string) **required** - The unique id for the campaign.
* report_id (undefined) **required** - The id for the abuse report.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getReportsIdAdvice
Get feedback based on a campaign's statistics. Advice feedback is based on campaign stats like opens, clicks, unsubscribes, bounces, and more.


```js
mailchimp.getReportsIdAdvice({
  "campaign_id": ""
}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* campaign_id (string) **required** - The unique id for the campaign.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getReportsIdClickDetails
Get information about [clicks](http://kb.mailchimp.com/reports/about-click-tracking?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) on specific links in your MailChimp campaigns.


```js
mailchimp.getReportsIdClickDetails({
  "campaign_id": ""
}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* count (integer) - The number of records to return. [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **10**.
* offset (integer) - The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **0**.
* campaign_id (string) **required** - The unique id for the campaign.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getReportsIdClickDetailsId
Get click details for a specific link in a campaign.


```js
mailchimp.getReportsIdClickDetailsId({
  "campaign_id": "",
  "link_id": ""
}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* campaign_id (string) **required** - The unique id for the campaign.
* link_id (string) **required** - The id for the link.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getReportsIdClickDetailsIdMembers
Get information about list members who clicked on a specific link in a campaign.


```js
mailchimp.getReportsIdClickDetailsIdMembers({
  "campaign_id": "",
  "link_id": ""
}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* count (integer) - The number of records to return. [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **10**.
* offset (integer) - The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **0**.
* campaign_id (string) **required** - The unique id for the campaign.
* link_id (string) **required** - The id for the link.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getReportsIdClickDetailsIdMembersId
Get information about a specific subscriber who clicked a link in a specific campaign.


```js
mailchimp.getReportsIdClickDetailsIdMembersId({
  "campaign_id": "",
  "link_id": "",
  "subscriber_hash": ""
}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* campaign_id (string) **required** - The unique id for the campaign.
* link_id (string) **required** - The id for the link.
* subscriber_hash (string) **required** - The MD5 hash of the lowercase version of the list member's email address.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getReportsIdOpenDetails
Get detailed information about any campaign emails that were opened by a list member.


```js
mailchimp.getReportsIdOpenDetails({
  "campaign_id": ""
}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* count (integer) - The number of records to return. [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **10**.
* offset (integer) - The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **0**.
* campaign_id (string) **required** - The unique id for the campaign.
* since (string) - Restrict results to campaign open events that occur after a specific time.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getReportsIdOpenDetailsIdMembersId
Get information about a specific subscriber who opened a campaign.


```js
mailchimp.getReportsIdOpenDetailsIdMembersId({
  "campaign_id": "",
  "subscriber_hash": ""
}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* campaign_id (string) **required** - The unique id for the campaign.
* subscriber_hash (string) **required** - The MD5 hash of the lowercase version of the list member's email address.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getReportsIdDomainPerformance
Get statistics for the top-performing email domains in a campaign.


```js
mailchimp.getReportsIdDomainPerformance({
  "campaign_id": ""
}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* campaign_id (string) **required** - The unique id for the campaign.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getReportsIdEepurl
Get a summary of social activity for the campaign, tracked by EepURL.


```js
mailchimp.getReportsIdEepurl({
  "campaign_id": ""
}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* campaign_id (string) **required** - The unique id for the campaign.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getReportsIdEmailActivity
Get a list of member's subscriber activity in a specific campaign.


```js
mailchimp.getReportsIdEmailActivity({
  "campaign_id": ""
}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* count (integer) - The number of records to return. [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **10**.
* offset (integer) - The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **0**.
* campaign_id (string) **required** - The unique id for the campaign.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getReportsIdEmailActivityId
Get a specific list member's activity in a campaign including opens, clicks, and bounces.


```js
mailchimp.getReportsIdEmailActivityId({
  "campaign_id": "",
  "subscriber_hash": ""
}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* campaign_id (string) **required** - The unique id for the campaign.
* subscriber_hash (string) **required** - The MD5 hash of the lowercase version of the list member's email address.
* since (string) - Restrict results to email activity events that occur after a specific time.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getReportsIdGoogleAnalytics
Get information about any [Google Analytics reporting](http://kb.mailchimp.com/integrations/e-commerce/integrate-google-analytics-with-mailchimp?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) for a specific campaign.


```js
mailchimp.getReportsIdGoogleAnalytics({
  "campaign_id": ""
}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* campaign_id (string) **required** - The unique id for the campaign.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getReportsIdGoogleAnalyticsId
Get information about a specific [Google Analytics report](http://kb.mailchimp.com/integrations/e-commerce/integrate-google-analytics-with-mailchimp?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) for a campaign.


```js
mailchimp.getReportsIdGoogleAnalyticsId({
  "campaign_id": "",
  "profile_id": null
}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* campaign_id (string) **required** - The unique id for the campaign.
* profile_id (undefined) **required** - The Google Analytics View ID.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getReportsIdLocations
Get top open locations for a specific campaign.


```js
mailchimp.getReportsIdLocations({
  "campaign_id": ""
}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* campaign_id (string) **required** - The unique id for the campaign.
* count (integer) - The number of records to return. [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **10**.
* offset (integer) - The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **0**.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getReportsIdSentTo
Get information about campaign recipients.


```js
mailchimp.getReportsIdSentTo({
  "campaign_id": ""
}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* count (integer) - The number of records to return. [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **10**.
* offset (integer) - The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **0**.
* campaign_id (string) **required** - The unique id for the campaign.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getReportsIdSentToId
Get information about a specific campaign recipient.


```js
mailchimp.getReportsIdSentToId({
  "campaign_id": "",
  "subscriber_hash": ""
}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* campaign_id (string) **required** - The unique id for the campaign.
* subscriber_hash (string) **required** - The MD5 hash of the lowercase version of the list member's email address.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getReportsIdSubReportsId
Get a list of reports with child campaigns for a specific parent campaign.


```js
mailchimp.getReportsIdSubReportsId({
  "campaign_id": ""
}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* campaign_id (string) **required** - The unique id for the campaign.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getReportsIdUnsubscribed
Get information about members who have unsubscribed from a specific campaign.


```js
mailchimp.getReportsIdUnsubscribed({
  "campaign_id": ""
}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* count (integer) - The number of records to return. [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **10**.
* offset (integer) - The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **0**.
* campaign_id (string) **required** - The unique id for the campaign.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getReportsIdUnsubscribedId
Get information about a specific list member who unsubscribed from a campaign.


```js
mailchimp.getReportsIdUnsubscribedId({
  "campaign_id": "",
  "subscriber_hash": ""
}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* campaign_id (string) **required** - The unique id for the campaign.
* subscriber_hash (string) **required** - The MD5 hash of the lowercase version of the list member's email address.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getTemplates
Get a list of an account's available templates.


```js
mailchimp.getTemplates({}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* count (integer) - The number of records to return. [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **10**.
* offset (integer) - The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **0**.
* created_by (string) - The MailChimp account user who created the template.
* since_created_at (string) - Restrict the response to templates created after the set date.
* before_created_at (string) - Restrict the response to templates created before the set date.
* type (string) - Limit results based on template type.
* category (string) - Limit results based on category.
* folder_id (string) - The unique folder id.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### postTemplates
Create a new template for the account. Only [Classic templates](http://kb.mailchimp.com/templates/basic-and-themes/types-of-templates?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) are supported.


```js
mailchimp.postTemplates({
  "body": {
    "name": "",
    "html": ""
  }
}, context)
```

#### Parameters
* body (object) **required** - Information about a specific template.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getTemplatesId
Get information about a specific template.


```js
mailchimp.getTemplatesId({
  "template_id": ""
}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* template_id (string) **required** - The unique id for the template.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### patchTemplatesId
Update the name, HTML, or `folder_id` of an existing template.


```js
mailchimp.patchTemplatesId({
  "template_id": "",
  "body": {
    "name": "",
    "html": ""
  }
}, context)
```

#### Parameters
* template_id (string) **required** - The unique id for the template.
* body (object) **required** - Information about a specific template.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### deleteTemplatesId
Delete a specific template.


```js
mailchimp.deleteTemplatesId({
  "template_id": ""
}, context)
```

#### Parameters
* template_id (string) **required** - The unique id for the template.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getTemplatesIdDefaultContent
Get the sections that you can edit in a template, including each section's default content.


```js
mailchimp.getTemplatesIdDefaultContent({
  "template_id": ""
}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* template_id (string) **required** - The unique id for the template.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getEcommerce
Get information about the e-commerce endpoint's resources.


```js
mailchimp.getEcommerce({}, context)
```

#### Parameters
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getEcommerceOrders
Get information about an account's orders.


```js
mailchimp.getEcommerceOrders({}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* count (integer) - The number of records to return. [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **10**.
* offset (integer) - The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **0**.
* campaign_id (string) - Restrict results to orders with a specific `campaign_id` value.
* outreach_id (string) - Restrict results to orders with a specific `outreach_id` value.
* customer_id (string) - Restrict results to orders made by a specific customer.
* has_outreach (boolean) - Restrict results to orders that have an outreach attached. For example, an email campaign or Facebook ad.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getEcommerceStores
Get information about all stores in the account.


```js
mailchimp.getEcommerceStores({}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* count (integer) - The number of records to return. [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **10**.
* offset (integer) - The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **0**.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### postEcommerceStores
Add a new store to your MailChimp account.


```js
mailchimp.postEcommerceStores({
  "body": {
    "id": "",
    "list_id": "",
    "name": "",
    "currency_code": ""
  }
}, context)
```

#### Parameters
* body (object) **required** - An individual store in an account.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getEcommerceStoresId
Get information about a specific store.


```js
mailchimp.getEcommerceStoresId({
  "store_id": ""
}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* store_id (string) **required** - The store id.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### patchEcommerceStoresId
Update a store.


```js
mailchimp.patchEcommerceStoresId({
  "store_id": "",
  "body": {}
}, context)
```

#### Parameters
* store_id (string) **required** - The store id.
* body (object) **required** - An individual store in an account.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### deleteEcommerceStoresId
Delete a store. Deleting a store will also delete any associated subresources, including Customers, Orders, Products, and Carts.


```js
mailchimp.deleteEcommerceStoresId({
  "store_id": ""
}, context)
```

#### Parameters
* store_id (string) **required** - The store id.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getEcommerceStoresIdCarts
Get information about a store's carts.


```js
mailchimp.getEcommerceStoresIdCarts({
  "store_id": ""
}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* count (integer) - The number of records to return. [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **10**.
* offset (integer) - The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **0**.
* store_id (string) **required** - The store id.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### postEcommerceStoresIdCarts
Add a new cart to a store.


```js
mailchimp.postEcommerceStoresIdCarts({
  "store_id": "",
  "body": {
    "id": "",
    "customer": {
      "id": "",
      "email_address": "",
      "opt_in_status": true
    },
    "currency_code": "",
    "order_total": 0,
    "lines": []
  }
}, context)
```

#### Parameters
* store_id (string) **required** - The store id.
* body (object) **required** - Information about a specific cart.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getEcommerceStoresIdCartsId
Get information about a specific cart.


```js
mailchimp.getEcommerceStoresIdCartsId({
  "store_id": "",
  "cart_id": ""
}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* store_id (string) **required** - The store id.
* cart_id (string) **required** - The id for the cart.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### patchEcommerceStoresIdCartsId
Update a specific cart.


```js
mailchimp.patchEcommerceStoresIdCartsId({
  "store_id": "",
  "cart_id": "",
  "body": {}
}, context)
```

#### Parameters
* store_id (string) **required** - The store id.
* cart_id (string) **required** - The id for the cart.
* body (object) **required** - Information about a specific cart.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### deleteEcommerceStoresIdCartsId
Delete a cart.


```js
mailchimp.deleteEcommerceStoresIdCartsId({
  "store_id": "",
  "cart_id": ""
}, context)
```

#### Parameters
* store_id (string) **required** - The store id.
* cart_id (string) **required** - The id for the cart.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getEcommerceStoresIdCartsIdLines
Get information about a cart's line items.


```js
mailchimp.getEcommerceStoresIdCartsIdLines({
  "store_id": "",
  "cart_id": ""
}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* count (integer) - The number of records to return. [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **10**.
* offset (integer) - The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **0**.
* store_id (string) **required** - The store id.
* cart_id (string) **required** - The id for the cart.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### postEcommerceStoresIdCartsIdLines
Add a new line item to an existing cart.


```js
mailchimp.postEcommerceStoresIdCartsIdLines({
  "store_id": "",
  "cart_id": "",
  "body": {
    "id": "",
    "product_id": "",
    "product_variant_id": "",
    "quantity": 0,
    "price": 0
  }
}, context)
```

#### Parameters
* store_id (string) **required** - The store id.
* cart_id (string) **required** - The id for the cart.
* body (object) **required** - Information about a specific cart line item.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getEcommerceStoresIdCartsIdLinesId
Get information about a specific cart line item.


```js
mailchimp.getEcommerceStoresIdCartsIdLinesId({
  "store_id": "",
  "cart_id": "",
  "line_id": ""
}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* store_id (string) **required** - The store id.
* cart_id (string) **required** - The id for the cart.
* line_id (string) **required** - The id for the line item of a cart.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### patchEcommerceStoresIdCartsIdLinesId
Update a specific cart line item.


```js
mailchimp.patchEcommerceStoresIdCartsIdLinesId({
  "store_id": "",
  "cart_id": "",
  "line_id": "",
  "body": {}
}, context)
```

#### Parameters
* store_id (string) **required** - The store id.
* cart_id (string) **required** - The id for the cart.
* line_id (string) **required** - The id for the line item of a cart.
* body (object) **required** - Information about a specific cart line item.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### deleteEcommerceStoresIdCartsLinesId
Delete a specific cart line item.


```js
mailchimp.deleteEcommerceStoresIdCartsLinesId({
  "store_id": "",
  "cart_id": "",
  "line_id": ""
}, context)
```

#### Parameters
* store_id (string) **required** - The store id.
* cart_id (string) **required** - The id for the cart.
* line_id (string) **required** - The id for the line item of a cart.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getEcommerceStoresIdCustomers
Get information about a store's customers.


```js
mailchimp.getEcommerceStoresIdCustomers({
  "store_id": ""
}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* count (integer) - The number of records to return. [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **10**.
* offset (integer) - The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **0**.
* store_id (string) **required** - The store id.
* email_address (string) - Restrict the response to customers with the email address.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### postEcommerceStoresIdCustomers
Add a new customer to a store.


```js
mailchimp.postEcommerceStoresIdCustomers({
  "store_id": "",
  "body": {
    "id": "",
    "email_address": "",
    "opt_in_status": true
  }
}, context)
```

#### Parameters
* store_id (string) **required** - The store id.
* body (object) **required** - Information about a specific customer. Orders for existing customers should include only the `id` parameter in the `customer` object body.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getEcommerceStoresIdCustomersId
Get information about a specific customer.


```js
mailchimp.getEcommerceStoresIdCustomersId({
  "store_id": "",
  "customer_id": ""
}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* store_id (string) **required** - The store id.
* customer_id (string) **required** - The id for the customer of a store.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### putEcommerceStoresIdCustomersId
Add or update a customer.


```js
mailchimp.putEcommerceStoresIdCustomersId({
  "store_id": "",
  "customer_id": "",
  "body": {
    "id": "",
    "email_address": "",
    "opt_in_status": true
  }
}, context)
```

#### Parameters
* store_id (string) **required** - The store id.
* customer_id (string) **required** - The id for the customer of a store.
* body (object) **required** - Information about a specific customer. Orders for existing customers should include only the `id` parameter in the `customer` object body.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### patchEcommerceStoresIdCustomersId
Update a customer.


```js
mailchimp.patchEcommerceStoresIdCustomersId({
  "store_id": "",
  "customer_id": "",
  "body": {}
}, context)
```

#### Parameters
* store_id (string) **required** - The store id.
* customer_id (string) **required** - The id for the customer of a store.
* body (object) **required** - Information about a specific customer. Orders for existing customers should include only the `id` parameter in the `customer` object body.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### deleteEcommerceStoresIdCustomersId
Delete a customer from a store.


```js
mailchimp.deleteEcommerceStoresIdCustomersId({
  "store_id": "",
  "customer_id": ""
}, context)
```

#### Parameters
* store_id (string) **required** - The store id.
* customer_id (string) **required** - The id for the customer of a store.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getEcommerceStoresIdPromorules
Get information about a store's promo rules.


```js
mailchimp.getEcommerceStoresIdPromorules({
  "store_id": ""
}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* count (integer) - The number of records to return. [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **10**.
* offset (integer) - The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **0**.
* store_id (string) **required** - The store id.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### postEcommerceStoresIdPromorules
Add a new promo rule to a store.


```js
mailchimp.postEcommerceStoresIdPromorules({
  "store_id": "",
  "body": {
    "id": "",
    "description": "",
    "amount": 0,
    "type": "",
    "target": ""
  }
}, context)
```

#### Parameters
* store_id (string) **required** - The store id.
* body (object) **required** - Information about an Ecommerce Store's specific Promo Rule.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getEcommerceStoresIdPromorulesId
Get information about a specific promo rule.


```js
mailchimp.getEcommerceStoresIdPromorulesId({
  "store_id": "",
  "promo_rule_id": ""
}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* store_id (string) **required** - The store id.
* promo_rule_id (string) **required** - The id for the promo rule of a store.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### patchEcommerceStoresIdPromorulesId
Update a promo rule.


```js
mailchimp.patchEcommerceStoresIdPromorulesId({
  "store_id": "",
  "promo_rule_id": "",
  "body": {}
}, context)
```

#### Parameters
* store_id (string) **required** - The store id.
* promo_rule_id (string) **required** - The id for the promo rule of a store.
* body (object) **required** - Information about an Ecommerce Store's specific Promo Rule.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### deleteEcommerceStoresIdPromorulesId
Delete a promo rule from a store.


```js
mailchimp.deleteEcommerceStoresIdPromorulesId({
  "store_id": "",
  "promo_rule_id": ""
}, context)
```

#### Parameters
* store_id (string) **required** - The store id.
* promo_rule_id (string) **required** - The id for the promo rule of a store.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getEcommerceStoresIdOrders
Get information about a store's orders.


```js
mailchimp.getEcommerceStoresIdOrders({
  "store_id": ""
}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* count (integer) - The number of records to return. [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **10**.
* offset (integer) - The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **0**.
* store_id (string) **required** - The store id.
* customer_id (string) - Restrict results to orders made by a specific customer.
* has_outreach (boolean) - Restrict results to orders that have an outreach attached. For example, an email campaign or Facebook ad.
* campaign_id (string) - Restrict results to orders with a specific `campaign_id` value.
* outreach_id (string) - Restrict results to orders with a specific `outreach_id` value.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### postEcommerceStoresIdOrders
Add a new order to a store.


```js
mailchimp.postEcommerceStoresIdOrders({
  "store_id": "",
  "body": {
    "id": "",
    "customer": {
      "id": "",
      "email_address": "",
      "opt_in_status": true
    },
    "currency_code": "",
    "order_total": 0,
    "lines": []
  }
}, context)
```

#### Parameters
* store_id (string) **required** - The store id.
* body (object) **required** - Information about a specific order.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getEcommerceStoresIdOrdersId
Get information about a specific order.


```js
mailchimp.getEcommerceStoresIdOrdersId({
  "store_id": "",
  "order_id": ""
}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* store_id (string) **required** - The store id.
* order_id (string) **required** - The id for the order in a store.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### patchEcommerceStoresIdOrdersId
Update a specific order.


```js
mailchimp.patchEcommerceStoresIdOrdersId({
  "store_id": "",
  "order_id": "",
  "body": {}
}, context)
```

#### Parameters
* store_id (string) **required** - The store id.
* order_id (string) **required** - The id for the order in a store.
* body (object) **required** - Information about a specific order.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### deleteEcommerceStoresIdOrdersId
Delete an order.


```js
mailchimp.deleteEcommerceStoresIdOrdersId({
  "store_id": "",
  "order_id": ""
}, context)
```

#### Parameters
* store_id (string) **required** - The store id.
* order_id (string) **required** - The id for the order in a store.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getEcommerceStoresIdOrdersIdLines
Get information about an order's line items.


```js
mailchimp.getEcommerceStoresIdOrdersIdLines({
  "store_id": "",
  "order_id": ""
}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* count (integer) - The number of records to return. [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **10**.
* offset (integer) - The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **0**.
* store_id (string) **required** - The store id.
* order_id (string) **required** - The id for the order in a store.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### postEcommerceStoresIdOrdersIdLines
Add a new line item to an existing order.


```js
mailchimp.postEcommerceStoresIdOrdersIdLines({
  "store_id": "",
  "order_id": "",
  "body": {
    "id": "",
    "product_id": "",
    "product_variant_id": "",
    "quantity": 0,
    "price": 0
  }
}, context)
```

#### Parameters
* store_id (string) **required** - The store id.
* order_id (string) **required** - The id for the order in a store.
* body (object) **required** - Information about a specific order line.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getEcommerceStoresIdOrdersIdLinesId
Get information about a specific order line item.


```js
mailchimp.getEcommerceStoresIdOrdersIdLinesId({
  "store_id": "",
  "order_id": "",
  "line_id": ""
}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* store_id (string) **required** - The store id.
* order_id (string) **required** - The id for the order in a store.
* line_id (string) **required** - The id for the line item of an order.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### patchEcommerceStoresIdOrdersIdLinesId
Update a specific order line item.


```js
mailchimp.patchEcommerceStoresIdOrdersIdLinesId({
  "store_id": "",
  "order_id": "",
  "line_id": "",
  "body": {}
}, context)
```

#### Parameters
* store_id (string) **required** - The store id.
* order_id (string) **required** - The id for the order in a store.
* line_id (string) **required** - The id for the line item of an order.
* body (object) **required** - Information about a specific order line.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### deleteEcommerceStoresIdOrdersIdLinesId
Delete a specific order line item.


```js
mailchimp.deleteEcommerceStoresIdOrdersIdLinesId({
  "store_id": "",
  "order_id": "",
  "line_id": ""
}, context)
```

#### Parameters
* store_id (string) **required** - The store id.
* order_id (string) **required** - The id for the order in a store.
* line_id (string) **required** - The id for the line item of an order.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getEcommerceStoresIdProducts
Get information about a store's products.


```js
mailchimp.getEcommerceStoresIdProducts({
  "store_id": ""
}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* count (integer) - The number of records to return. [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **10**.
* offset (integer) - The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **0**.
* store_id (string) **required** - The store id.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### postEcommerceStoresIdProducts
Add a new product to a store.


```js
mailchimp.postEcommerceStoresIdProducts({
  "store_id": "",
  "body": {
    "id": "",
    "title": "",
    "variants": []
  }
}, context)
```

#### Parameters
* store_id (string) **required** - The store id.
* body (object) **required** - Information about a specific product.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getEcommerceStoresIdProductsId
Get information about a specific product.


```js
mailchimp.getEcommerceStoresIdProductsId({
  "store_id": "",
  "product_id": ""
}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* store_id (string) **required** - The store id.
* product_id (string) **required** - The id for the product of a store.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### patchEcommerceStoresIdProductsId
Update a specific product.


```js
mailchimp.patchEcommerceStoresIdProductsId({
  "store_id": "",
  "product_id": "",
  "body": {}
}, context)
```

#### Parameters
* store_id (string) **required** - The store id.
* product_id (string) **required** - The id for the product of a store.
* body (object) **required** - Information about a specific product.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### deleteEcommerceStoresIdProductsId
Delete a product.


```js
mailchimp.deleteEcommerceStoresIdProductsId({
  "store_id": "",
  "product_id": ""
}, context)
```

#### Parameters
* store_id (string) **required** - The store id.
* product_id (string) **required** - The id for the product of a store.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getEcommerceStoresIdProductsIdVariants
Get information about a product's variants.


```js
mailchimp.getEcommerceStoresIdProductsIdVariants({
  "store_id": "",
  "product_id": ""
}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* count (integer) - The number of records to return. [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **10**.
* offset (integer) - The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **0**.
* store_id (string) **required** - The store id.
* product_id (string) **required** - The id for the product of a store.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### postEcommerceStoresIdProductsIdVariants
Add a new variant to the product.


```js
mailchimp.postEcommerceStoresIdProductsIdVariants({
  "store_id": "",
  "product_id": "",
  "body": {
    "id": "",
    "title": ""
  }
}, context)
```

#### Parameters
* store_id (string) **required** - The store id.
* product_id (string) **required** - The id for the product of a store.
* body (object) **required** - Information about a specific product variant.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getEcommerceStoresIdProductsIdVariantsId
Get information about a specific product variant.


```js
mailchimp.getEcommerceStoresIdProductsIdVariantsId({
  "store_id": "",
  "product_id": "",
  "variant_id": ""
}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* store_id (string) **required** - The store id.
* product_id (string) **required** - The id for the product of a store.
* variant_id (string) **required** - The id for the product variant.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### putEcommerceStoresIdProductsIdVariantsId
Add or update a product variant.


```js
mailchimp.putEcommerceStoresIdProductsIdVariantsId({
  "store_id": "",
  "product_id": "",
  "variant_id": "",
  "body": {
    "id": "",
    "title": ""
  }
}, context)
```

#### Parameters
* store_id (string) **required** - The store id.
* product_id (string) **required** - The id for the product of a store.
* variant_id (string) **required** - The id for the product variant.
* body (object) **required** - Information about a specific product variant.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### patchEcommerceStoresIdProductsIdVariantsId
Update a product variant.


```js
mailchimp.patchEcommerceStoresIdProductsIdVariantsId({
  "store_id": "",
  "product_id": "",
  "variant_id": "",
  "body": {}
}, context)
```

#### Parameters
* store_id (string) **required** - The store id.
* product_id (string) **required** - The id for the product of a store.
* variant_id (string) **required** - The id for the product variant.
* body (object) **required** - Information about a specific product variant.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### deleteEcommerceStoresIdProductsIdVariantsId
Delete a product variant.


```js
mailchimp.deleteEcommerceStoresIdProductsIdVariantsId({
  "store_id": "",
  "product_id": "",
  "variant_id": ""
}, context)
```

#### Parameters
* store_id (string) **required** - The store id.
* product_id (string) **required** - The id for the product of a store.
* variant_id (string) **required** - The id for the product variant.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getEcommerceStoresIdProductsIdImages
Get information about a product's images.


```js
mailchimp.getEcommerceStoresIdProductsIdImages({
  "store_id": "",
  "product_id": ""
}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* count (integer) - The number of records to return. [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **10**.
* offset (integer) - The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **0**.
* store_id (string) **required** - The store id.
* product_id (string) **required** - The id for the product of a store.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### postEcommerceStoresIdProductsIdImages
Add a new image to the product.


```js
mailchimp.postEcommerceStoresIdProductsIdImages({
  "store_id": "",
  "product_id": "",
  "body": {
    "id": "",
    "url": ""
  }
}, context)
```

#### Parameters
* store_id (string) **required** - The store id.
* product_id (string) **required** - The id for the product of a store.
* body (object) **required** - Information about a specific product image.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getEcommerceStoresIdProductsIdImagesId
Get information about a specific product image.


```js
mailchimp.getEcommerceStoresIdProductsIdImagesId({
  "store_id": "",
  "product_id": "",
  "image_id": ""
}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* store_id (string) **required** - The store id.
* product_id (string) **required** - The id for the product of a store.
* image_id (string) **required** - The id for the product image.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### patchEcommerceStoresIdProductsIdImagesId
Update a product image.


```js
mailchimp.patchEcommerceStoresIdProductsIdImagesId({
  "store_id": "",
  "product_id": "",
  "image_id": "",
  "body": {}
}, context)
```

#### Parameters
* store_id (string) **required** - The store id.
* product_id (string) **required** - The id for the product of a store.
* image_id (string) **required** - The id for the product image.
* body (object) **required** - Information about a specific product image.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### deleteEcommerceStoresIdProductsIdImagesId
Delete a product image.


```js
mailchimp.deleteEcommerceStoresIdProductsIdImagesId({
  "store_id": "",
  "product_id": "",
  "image_id": ""
}, context)
```

#### Parameters
* store_id (string) **required** - The store id.
* product_id (string) **required** - The id for the product of a store.
* image_id (string) **required** - The id for the product image.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getSearchMembers
Search for list members. This search can be restricted to a specific list, or can be used to search across all lists in an account.


```js
mailchimp.getSearchMembers({
  "query": ""
}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* query (string) **required** - The search query used to filter results.
* list_id (string) - The unique id for the list.
* offset (integer) - The number of instances to skip from the beginning of the collection. [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **0**.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getSearchCampaigns
Search all campaigns for the specified query terms.


```js
mailchimp.getSearchCampaigns({
  "query": ""
}, context)
```

#### Parameters
* fields (array) - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
* exclude_fields (array) - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
* query (string) **required** - The search query used to filter results.
* snip_start (string) - To have the match highlighted with something (like a strong HTML tag), both this and `snip_end` must be passed. This parameter has a 25-character limit.
* snip_end (string) - To have the match highlighted with something (like a strong HTML tag), both this and `snip_start` must be passed. This parameter has a 25-character limit.
* offset (integer) - The number of instances to skip from the beginning of the collection. [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **0**.
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

### getPing
A health check for the API that won't return any account-specific information.


```js
mailchimp.getPing({}, context)
```

#### Parameters
* dc (string) - `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

