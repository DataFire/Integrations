# @datafire/mailchimp

Client library for MailChimp Marketing API

## Installation and Usage
```bash
npm install --save @datafire/mailchimp
```
```js
let mailchimp = require('@datafire/mailchimp').create({
  apiKey: ""
});

mailchimp.getPing({}).then(data => {
  console.log(data);
});
```

## Description



## Actions

### getRoot
Get links to all other resources available in the API.


```js
mailchimp.getRoot({}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output [AccountDetails](#accountdetails)

### getAuthorizedApps
Get a list of an account's registered, connected applications.


```js
mailchimp.getAuthorizedApps({}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * count `integer`: The number of records to return. [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **10**.
  * offset `integer`: The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **0**.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`
  * apps `array`: An array of objects, each representing an authorized application.
    * items `object`
      * id `integer`: The ID for the application.
      * name `string`: The name of the application.
      * description `string`: A short description of the application.
      * users `array`: An array of usernames for users who have linked the app.
        * items `string`
      * _links [HATEOASLinks](#hateoaslinks)
  * total_items [CollectionTotal](#collectiontotal)
  * _links [HATEOASLinks](#hateoaslinks)

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

#### Input
* input `object`
  * Client Details **required** `object`
    * client_id **required** `string`: The client's unique id/username for authorization.
    * client_secret **required** `string`: The client password for authorization.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`
  * access_token `string`: The access token issued by the auth server.
  * viewer_token `string`: The viewer token issued by the auth server.
  * _links [HATEOASLinks](#hateoaslinks)

### getAuthorizedAppsId
Get information about a specific authorized application.


```js
mailchimp.getAuthorizedAppsId({
  "app_id": ""
}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * app_id **required** `string`: The unique id for the connected authorized application.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`
  * id `integer`: The ID for the application.
  * name `string`: The name of the application.
  * description `string`: A short description of the application.
  * users `array`: An array of usernames for users who have linked the app.
    * items `string`
  * _links [HATEOASLinks](#hateoaslinks)

### getAutomations
Get a summary of an account's Automations.


```js
mailchimp.getAutomations({}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * before_create_time `string`: Restrict the response to automations created before the set time. We recommend [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time format: 2015-10-21T15:41:36+00:00.
  * since_create_time `string`: Restrict the response to automations created after the set time. We recommend [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time format: 2015-10-21T15:41:36+00:00.
  * before_send_time `string`: Restrict the response to automations sent before the set time. We recommend [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time format: 2015-10-21T15:41:36+00:00.
  * since_send_time `string`: Restrict the response to automations sent after the set time. We recommend [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time format: 2015-10-21T15:41:36+00:00.
  * status `string` (values: save, paused, sending): Restrict the results to automations with the specified status.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`
  * automations `array`: An array of objects, each representing an Automation workflow.
    * items `object`: A summary of an individual Automation workflow's settings and content.
      * id `string`: A string that identifies the Automation.
      * create_time `string`: The date and time the Automation was created.
      * start_time `string`: The date and time the Automation was started.
      * status `string` (values: save, paused, sending): The current status of the Automation.
      * emails_sent `integer`: The total number of emails sent for the Automation.
      * recipients `object`: List settings for the Automation.
        * list_id `string`: The unique list id.
        * list_name `string`: List Name.
        * segment_opts `object`: An object representing all segmentation options.
          * saved_segment_id `integer`: The id for an existing saved segment.
          * match `string` (values: any, all): Segment match type.
          * conditions `array`: An array of segment conditions.
            * items [SegmentCondition](#segmentcondition)
      * settings `object`: The settings for the Automation workflow.
        * title `string`: The title of the Automation.
        * from_name `string`: The 'from' name for the Automation (not an email address).
        * reply_to `string`: The reply-to email address for the Automation.
        * use_conversation `boolean`: Whether to use MailChimp's [Conversations](http://kb.mailchimp.com/lists/managing-subscribers/set-up-and-use-conversations?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) feature to manage out-of-office replies.
        * to_name `string`: The Automation's custom 'To' name, typically the first name [merge field](http://kb.mailchimp.com/merge-tags/using/getting-started-with-merge-tags?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
        * authenticate `boolean`: Whether MailChimp [authenticated](http://kb.mailchimp.com/delivery/deliverability-research/set-up-mailchimp-authentication?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) the Automation. Defaults to `true`.
        * auto_footer `boolean`: Whether to automatically append MailChimp's [default footer](http://kb.mailchimp.com/campaigns/design/theres-a-gray-footer-added-to-my-campaign?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) to the Automation.
        * inline_css `boolean`: Whether to automatically inline the CSS included with the Automation content.
      * tracking `object`: The tracking options for the Automation.
        * opens `boolean`: Whether to [track opens](http://kb.mailchimp.com/reports/about-open-tracking?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs). Defaults to `true`.
        * html_clicks `boolean`: Whether to [track clicks](http://kb.mailchimp.com/reports/about-click-tracking?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) in the HTML version of the Automation. Defaults to `true`.
        * text_clicks `boolean`: Whether to [track clicks](http://kb.mailchimp.com/reports/about-click-tracking?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) in the plain-text version of the Automation. Defaults to `true`.
        * goal_tracking `boolean`: Whether to enable [Goal](http://kb.mailchimp.com/integrations/other-integrations/integrate-goal-with-mailchimp?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) tracking.
        * ecomm360 `boolean`: Whether to enable [eCommerce360](http://kb.mailchimp.com/integrations/other-integrations/about-ecommerce360?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) tracking.
        * google_analytics `string`: The custom slug for [Google Analytics](http://kb.mailchimp.com/integrations/other-integrations/integrate-google-analytics-with-mailchimp?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) tracking (max of 50 bytes).
        * clicktale `string`: The custom slug for [ClickTale](http://kb.mailchimp.com/integrations/other-integrations/additional-tracking-options-for-campaigns?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs#Click-Tale) tracking (max of 50 bytes).
        * salesforce `object`: Salesforce tracking options for an Automation. Must be using MailChimp's built-in [Salesforce integration](http://kb.mailchimp.com/integrations/other-integrations/about-mailchimp-for-salesforce?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
          * campaign `boolean`: Create a campaign in a connected Salesforce account.
          * notes `boolean`: Update contact notes for a campaign based on a subscriber's email address.
        * capsule `object`: Capsule tracking options for an Automation. Must be using MailChimp's built-in [Capsule integration](https://connect.mailchimp.com/integrations/capsule-crm-integration?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
          * notes `boolean`: Update contact notes for a campaign based on a subscriber's email addresses.
      * trigger_settings [AutomationTrigger](#automationtrigger)
      * report_summary `object`: A summary of opens, clicks, and unsubscribes for sent campaigns.
        * opens `integer`: The total number of opens for a campaign.
        * unique_opens `integer`: The number of unique opens.
        * open_rate `number`: The number of unique opens divided by the total number of successful deliveries.
        * clicks `integer`: The total number of clicks for an campaign.
        * subscriber_clicks `integer`: The number of unique clicks.
        * click_rate `number`: The number of unique clicks, divided by the total number of successful deliveries.
      * _links [HATEOASLinks](#hateoaslinks)
  * total_items [CollectionTotal](#collectiontotal)
  * _links [HATEOASLinks](#hateoaslinks)

### getAutomationsId
Get a summary of an individual Automation workflow's settings and content. The `trigger_settings` object returns information for the first email in the workflow.


```js
mailchimp.getAutomationsId({
  "workflow_id": ""
}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * workflow_id **required** `string`: The unique id for the Automation workflow.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: A summary of an individual Automation workflow's settings and content.
  * id `string`: A string that identifies the Automation.
  * create_time `string`: The date and time the Automation was created.
  * start_time `string`: The date and time the Automation was started.
  * status `string` (values: save, paused, sending): The current status of the Automation.
  * emails_sent `integer`: The total number of emails sent for the Automation.
  * recipients `object`: List settings for the Automation.
    * list_id `string`: The unique list id.
    * list_name `string`: List Name.
    * segment_opts `object`: An object representing all segmentation options.
      * saved_segment_id `integer`: The id for an existing saved segment.
      * match `string` (values: any, all): Segment match type.
      * conditions `array`: An array of segment conditions.
        * items [SegmentCondition](#segmentcondition)
  * settings `object`: The settings for the Automation workflow.
    * title `string`: The title of the Automation.
    * from_name `string`: The 'from' name for the Automation (not an email address).
    * reply_to `string`: The reply-to email address for the Automation.
    * use_conversation `boolean`: Whether to use MailChimp's [Conversations](http://kb.mailchimp.com/lists/managing-subscribers/set-up-and-use-conversations?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) feature to manage out-of-office replies.
    * to_name `string`: The Automation's custom 'To' name, typically the first name [merge field](http://kb.mailchimp.com/merge-tags/using/getting-started-with-merge-tags?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
    * authenticate `boolean`: Whether MailChimp [authenticated](http://kb.mailchimp.com/delivery/deliverability-research/set-up-mailchimp-authentication?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) the Automation. Defaults to `true`.
    * auto_footer `boolean`: Whether to automatically append MailChimp's [default footer](http://kb.mailchimp.com/campaigns/design/theres-a-gray-footer-added-to-my-campaign?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) to the Automation.
    * inline_css `boolean`: Whether to automatically inline the CSS included with the Automation content.
  * tracking `object`: The tracking options for the Automation.
    * opens `boolean`: Whether to [track opens](http://kb.mailchimp.com/reports/about-open-tracking?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs). Defaults to `true`.
    * html_clicks `boolean`: Whether to [track clicks](http://kb.mailchimp.com/reports/about-click-tracking?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) in the HTML version of the Automation. Defaults to `true`.
    * text_clicks `boolean`: Whether to [track clicks](http://kb.mailchimp.com/reports/about-click-tracking?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) in the plain-text version of the Automation. Defaults to `true`.
    * goal_tracking `boolean`: Whether to enable [Goal](http://kb.mailchimp.com/integrations/other-integrations/integrate-goal-with-mailchimp?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) tracking.
    * ecomm360 `boolean`: Whether to enable [eCommerce360](http://kb.mailchimp.com/integrations/other-integrations/about-ecommerce360?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) tracking.
    * google_analytics `string`: The custom slug for [Google Analytics](http://kb.mailchimp.com/integrations/other-integrations/integrate-google-analytics-with-mailchimp?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) tracking (max of 50 bytes).
    * clicktale `string`: The custom slug for [ClickTale](http://kb.mailchimp.com/integrations/other-integrations/additional-tracking-options-for-campaigns?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs#Click-Tale) tracking (max of 50 bytes).
    * salesforce `object`: Salesforce tracking options for an Automation. Must be using MailChimp's built-in [Salesforce integration](http://kb.mailchimp.com/integrations/other-integrations/about-mailchimp-for-salesforce?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
      * campaign `boolean`: Create a campaign in a connected Salesforce account.
      * notes `boolean`: Update contact notes for a campaign based on a subscriber's email address.
    * capsule `object`: Capsule tracking options for an Automation. Must be using MailChimp's built-in [Capsule integration](https://connect.mailchimp.com/integrations/capsule-crm-integration?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
      * notes `boolean`: Update contact notes for a campaign based on a subscriber's email addresses.
  * trigger_settings [AutomationTrigger](#automationtrigger)
  * report_summary `object`: A summary of opens, clicks, and unsubscribes for sent campaigns.
    * opens `integer`: The total number of opens for a campaign.
    * unique_opens `integer`: The number of unique opens.
    * open_rate `number`: The number of unique opens divided by the total number of successful deliveries.
    * clicks `integer`: The total number of clicks for an campaign.
    * subscriber_clicks `integer`: The number of unique clicks.
    * click_rate `number`: The number of unique clicks, divided by the total number of successful deliveries.
  * _links [HATEOASLinks](#hateoaslinks)

### postAutomationsIdActionsPauseAllEmails
Pause all emails in a specific Automation workflow.


```js
mailchimp.postAutomationsIdActionsPauseAllEmails({
  "workflow_id": ""
}, context)
```

#### Input
* input `object`
  * workflow_id **required** `string`: The unique id for the Automation workflow.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
*Output schema unknown*

### postAutomationsIdActionsStartAllEmails
Start all emails in an Automation workflow.


```js
mailchimp.postAutomationsIdActionsStartAllEmails({
  "workflow_id": ""
}, context)
```

#### Input
* input `object`
  * workflow_id **required** `string`: The unique id for the Automation workflow.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
*Output schema unknown*

### getAutomationsIdEmails
Get a summary of the emails in an Automation workflow.


```js
mailchimp.getAutomationsIdEmails({
  "workflow_id": ""
}, context)
```

#### Input
* input `object`
  * workflow_id **required** `string`: The unique id for the Automation workflow.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: A summary of the emails in an Automation workflow.
  * emails `array`: An array of objects, each representing an email in an Automation workflow.
    * items `object`: A summary of an individual Automation workflow email.
      * id `string`: A string that uniquely identifies the Automation email.
      * web_id `integer`: The ID used in the MailChimp web application. View this automation in your MailChimp account at `https://{dc}.admin.mailchimp.com/campaigns/show/?id={web_id}`.
      * workflow_id `string`: A string that uniquely identifies an Automation workflow.
      * position `integer`: The position of an Automation email in a workflow.
      * delay `object`: The delay settings for an Automation email.
        * amount `integer`: The delay amount for an Automation email.
        * type `string` (values: now, day, hour, week): The type of delay for an Automation email.
        * direction `string` (values: before, after): Whether the delay settings describe before or after the delay action of an Automation email.
        * action `string` (values: previous_campaign_sent, previous_campaign_opened, previous_campaign_not_opened, previous_campaign_clicked_any, previous_campaign_not_clicked_any, previous_campaign_specific_clicked, ecomm_bought_any, ecomm_bought_product, ecomm_bought_category, ecomm_not_bought_any, ecomm_abandoned_cart, campaign_sent, opened_email, not_opened_email, clicked_email, not_clicked_email, campaign_specific_clicked, manual, signup, merge_changed, group_add, group_remove, mandrill_sent, mandrill_opened, mandrill_clicked, mandrill_any, api, goal, annual, birthday, date, date_added): The action that triggers the delay of an Automation email.
        * action_description `string`: The user-friendly description of the action that triggers an Automation email.
        * full_description `string`: The user-friendly description of the delay and trigger action settings for an Automation email.
      * create_time `string`: The date and time the campaign was created.
      * start_time `string`: The date and time the campaign was started.
      * archive_url `string`: The link to the campaign's archive version.
      * status `string` (values: save, paused, sending): The current status of the campaign.
      * emails_sent `integer`: The total number of emails sent for this campaign.
      * send_time `string`:  The date and time a campaign was sent.
      * content_type `string`: How the campaign's content is put together ('template', 'drag_and_drop', 'html', 'url').
      * recipients `object`: List settings for the campaign.
        * list_id `string`: The unique list id.
        * segment_opts [SegmentationOptions](#segmentationoptions)
      * settings `object`: Settings for the campaign including the email subject, from name, and from email address.
        * subject_line `string`: The subject line for the campaign.
        * preview_text `string`: The preview text for the campaign.
        * title `string`: The title of the campaign.
        * from_name `string`: The 'from' name on the campaign (not an email address).
        * reply_to `string`: The reply-to email address for the campaign.
        * authenticate `boolean`: Whether MailChimp [authenticated](http://kb.mailchimp.com/delivery/deliverability-research/set-up-mailchimp-authentication?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) the campaign. Defaults to `true`.
        * auto_footer `boolean`: Automatically append MailChimp's [default footer](http://kb.mailchimp.com/campaigns/design/theres-a-gray-footer-added-to-my-campaign?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) to the campaign.
        * inline_css `boolean`: Automatically inline the CSS included with the campaign content.
        * auto_tweet `boolean`: Automatically tweet a link to the [campaign archive](http://kb.mailchimp.com/campaigns/archives/set-up-your-campaign-archive?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) page when the campaign is sent.
        * auto_fb_post `array`: An array of [Facebook](http://kb.mailchimp.com/integrations/facebook/integrate-facebook-with-mailchimp?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) page ids to auto-post to.
        * fb_comments `boolean`: Allows Facebook comments on the campaign (also force-enables the Campaign Archive toolbar). Defaults to `true`.
        * template_id `integer`: The id for the template used in this campaign.
        * drag_and_drop `boolean`: Whether the campaign uses the drag-and-drop editor.
      * tracking `object`: The tracking options for a campaign.
        * opens `boolean`: Whether to [track opens](http://kb.mailchimp.com/reports/about-open-tracking?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs). Defaults to `true`.
        * html_clicks `boolean`: Whether to [track clicks](http://kb.mailchimp.com/reports/about-click-tracking?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) in the HTML version of the campaign. Defaults to `true`.
        * text_clicks `boolean`: Whether to [track clicks](http://kb.mailchimp.com/reports/about-click-tracking?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) in the plain-text version of the campaign. Defaults to `true`.
        * goal_tracking `boolean`: Whether to enable [Goal](http://kb.mailchimp.com/integrations/other-integrations/integrate-goal-with-mailchimp?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) tracking.
        * ecomm360 `boolean`: Whether to enable [eCommerce360](http://kb.mailchimp.com/integrations/other-integrations/about-ecommerce360?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) tracking.
        * google_analytics `string`: The custom slug for [Google Analytics](http://kb.mailchimp.com/integrations/other-integrations/integrate-google-analytics-with-mailchimp?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) tracking (max of 50 bytes).
        * clicktale `string`: The custom slug for [Click Tale](http://kb.mailchimp.com/integrations/other-integrations/additional-tracking-options-for-campaigns?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs#Click-Tale) tracking (max of 50 bytes).
        * salesforce `object`: Salesforce tracking options for a campaign. Must be using MailChimp's built-in [Salesforce integration](http://kb.mailchimp.com/integrations/other-integrations/integrate-salesforce-with-mailchimp?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
          * campaign `boolean`: Create a campaign in a connected Salesforce account.
          * notes `boolean`: Update contact notes for a campaign based on a subscriber's email address.
        * capsule `object`: Capsule tracking option for a campaign. Must be using MailChimp's built-in [Capsule integration](https://connect.mailchimp.com/integrations/capsule-crm-integration?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
          * notes `boolean`: Update contact notes for a campaign based on a subscriber's email address.
      * social_card `object`: The preview for the campaign, rendered by social networks like Facebook and Twitter. [Learn more](http://kb.mailchimp.com/campaigns/previews-and-tests/set-up-social-cards?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
        * image_url `string`: The url for the header image for the card.
        * description `string`: A short summary of the campaign to display.
        * title `string`: The title for the card. Typically the subject line of the campaign.
      * trigger_settings [AutomationTrigger](#automationtrigger)
      * report_summary `object`: For sent campaigns, a summary of opens, clicks, and unsubscribes.
        * opens `integer`: The total number of opens for a campaign.
        * unique_opens `integer`: The number of unique opens.
        * open_rate `number`: The number of unique opens divided by the total number of successful deliveries.
        * clicks `integer`: The total number of clicks for an campaign.
        * subscriber_clicks `integer`: The number of unique clicks.
        * click_rate `number`: The number of unique clicks divided by the total number of successful deliveries.
      * _links [HATEOASLinks](#hateoaslinks)
  * total_items [CollectionTotal](#collectiontotal)
  * _links [HATEOASLinks](#hateoaslinks)

### getAutomationsIdEmailsId
Get information about an individual Automation workflow email.


```js
mailchimp.getAutomationsIdEmailsId({
  "workflow_id": "",
  "workflow_email_id": ""
}, context)
```

#### Input
* input `object`
  * workflow_id **required** `string`: The unique id for the Automation workflow.
  * workflow_email_id **required** `string`: The unique id for the Automation workflow email.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: A summary of an individual Automation workflow email.
  * id `string`: A string that uniquely identifies the Automation email.
  * web_id `integer`: The ID used in the MailChimp web application. View this automation in your MailChimp account at `https://{dc}.admin.mailchimp.com/campaigns/show/?id={web_id}`.
  * workflow_id `string`: A string that uniquely identifies an Automation workflow.
  * position `integer`: The position of an Automation email in a workflow.
  * delay `object`: The delay settings for an Automation email.
    * amount `integer`: The delay amount for an Automation email.
    * type `string` (values: now, day, hour, week): The type of delay for an Automation email.
    * direction `string` (values: before, after): Whether the delay settings describe before or after the delay action of an Automation email.
    * action `string` (values: previous_campaign_sent, previous_campaign_opened, previous_campaign_not_opened, previous_campaign_clicked_any, previous_campaign_not_clicked_any, previous_campaign_specific_clicked, ecomm_bought_any, ecomm_bought_product, ecomm_bought_category, ecomm_not_bought_any, ecomm_abandoned_cart, campaign_sent, opened_email, not_opened_email, clicked_email, not_clicked_email, campaign_specific_clicked, manual, signup, merge_changed, group_add, group_remove, mandrill_sent, mandrill_opened, mandrill_clicked, mandrill_any, api, goal, annual, birthday, date, date_added): The action that triggers the delay of an Automation email.
    * action_description `string`: The user-friendly description of the action that triggers an Automation email.
    * full_description `string`: The user-friendly description of the delay and trigger action settings for an Automation email.
  * create_time `string`: The date and time the campaign was created.
  * start_time `string`: The date and time the campaign was started.
  * archive_url `string`: The link to the campaign's archive version.
  * status `string` (values: save, paused, sending): The current status of the campaign.
  * emails_sent `integer`: The total number of emails sent for this campaign.
  * send_time `string`:  The date and time a campaign was sent.
  * content_type `string`: How the campaign's content is put together ('template', 'drag_and_drop', 'html', 'url').
  * recipients `object`: List settings for the campaign.
    * list_id `string`: The unique list id.
    * segment_opts [SegmentationOptions](#segmentationoptions)
  * settings `object`: Settings for the campaign including the email subject, from name, and from email address.
    * subject_line `string`: The subject line for the campaign.
    * preview_text `string`: The preview text for the campaign.
    * title `string`: The title of the campaign.
    * from_name `string`: The 'from' name on the campaign (not an email address).
    * reply_to `string`: The reply-to email address for the campaign.
    * authenticate `boolean`: Whether MailChimp [authenticated](http://kb.mailchimp.com/delivery/deliverability-research/set-up-mailchimp-authentication?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) the campaign. Defaults to `true`.
    * auto_footer `boolean`: Automatically append MailChimp's [default footer](http://kb.mailchimp.com/campaigns/design/theres-a-gray-footer-added-to-my-campaign?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) to the campaign.
    * inline_css `boolean`: Automatically inline the CSS included with the campaign content.
    * auto_tweet `boolean`: Automatically tweet a link to the [campaign archive](http://kb.mailchimp.com/campaigns/archives/set-up-your-campaign-archive?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) page when the campaign is sent.
    * auto_fb_post `array`: An array of [Facebook](http://kb.mailchimp.com/integrations/facebook/integrate-facebook-with-mailchimp?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) page ids to auto-post to.
    * fb_comments `boolean`: Allows Facebook comments on the campaign (also force-enables the Campaign Archive toolbar). Defaults to `true`.
    * template_id `integer`: The id for the template used in this campaign.
    * drag_and_drop `boolean`: Whether the campaign uses the drag-and-drop editor.
  * tracking `object`: The tracking options for a campaign.
    * opens `boolean`: Whether to [track opens](http://kb.mailchimp.com/reports/about-open-tracking?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs). Defaults to `true`.
    * html_clicks `boolean`: Whether to [track clicks](http://kb.mailchimp.com/reports/about-click-tracking?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) in the HTML version of the campaign. Defaults to `true`.
    * text_clicks `boolean`: Whether to [track clicks](http://kb.mailchimp.com/reports/about-click-tracking?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) in the plain-text version of the campaign. Defaults to `true`.
    * goal_tracking `boolean`: Whether to enable [Goal](http://kb.mailchimp.com/integrations/other-integrations/integrate-goal-with-mailchimp?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) tracking.
    * ecomm360 `boolean`: Whether to enable [eCommerce360](http://kb.mailchimp.com/integrations/other-integrations/about-ecommerce360?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) tracking.
    * google_analytics `string`: The custom slug for [Google Analytics](http://kb.mailchimp.com/integrations/other-integrations/integrate-google-analytics-with-mailchimp?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) tracking (max of 50 bytes).
    * clicktale `string`: The custom slug for [Click Tale](http://kb.mailchimp.com/integrations/other-integrations/additional-tracking-options-for-campaigns?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs#Click-Tale) tracking (max of 50 bytes).
    * salesforce `object`: Salesforce tracking options for a campaign. Must be using MailChimp's built-in [Salesforce integration](http://kb.mailchimp.com/integrations/other-integrations/integrate-salesforce-with-mailchimp?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
      * campaign `boolean`: Create a campaign in a connected Salesforce account.
      * notes `boolean`: Update contact notes for a campaign based on a subscriber's email address.
    * capsule `object`: Capsule tracking option for a campaign. Must be using MailChimp's built-in [Capsule integration](https://connect.mailchimp.com/integrations/capsule-crm-integration?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
      * notes `boolean`: Update contact notes for a campaign based on a subscriber's email address.
  * social_card `object`: The preview for the campaign, rendered by social networks like Facebook and Twitter. [Learn more](http://kb.mailchimp.com/campaigns/previews-and-tests/set-up-social-cards?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
    * image_url `string`: The url for the header image for the card.
    * description `string`: A short summary of the campaign to display.
    * title `string`: The title for the card. Typically the subject line of the campaign.
  * trigger_settings [AutomationTrigger](#automationtrigger)
  * report_summary `object`: For sent campaigns, a summary of opens, clicks, and unsubscribes.
    * opens `integer`: The total number of opens for a campaign.
    * unique_opens `integer`: The number of unique opens.
    * open_rate `number`: The number of unique opens divided by the total number of successful deliveries.
    * clicks `integer`: The total number of clicks for an campaign.
    * subscriber_clicks `integer`: The number of unique clicks.
    * click_rate `number`: The number of unique clicks divided by the total number of successful deliveries.
  * _links [HATEOASLinks](#hateoaslinks)

### deleteAutomationsIdEmailsId
Removes an individual Automation workflow email. Emails from certain workflow types, including the Abandoned Cart Email (abandonedCart) and Product Retargeting Email (abandonedBrowse) Workflows, cannot be deleted.


```js
mailchimp.deleteAutomationsIdEmailsId({
  "workflow_id": "",
  "workflow_email_id": ""
}, context)
```

#### Input
* input `object`
  * workflow_id **required** `string`: The unique id for the Automation workflow.
  * workflow_email_id **required** `string`: The unique id for the Automation workflow email.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
*Output schema unknown*

### getAutomationsIdEmailsIdQueue
Get information about an Automation email queue.


```js
mailchimp.getAutomationsIdEmailsIdQueue({
  "workflow_id": "",
  "workflow_email_id": ""
}, context)
```

#### Input
* input `object`
  * workflow_id **required** `string`: The unique id for the Automation workflow.
  * workflow_email_id **required** `string`: The unique id for the Automation workflow email.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`
  * workflow_id `string`: A string that uniquely identifies an Automation workflow.
  * email_id `string`: A string that uniquely identifies an email in an Automation workflow.
  * queue `array`: An array of objects, each representing a subscriber queue for an email in an Automation workflow.
    * items [AutomationWorkflowQueuedSubscriber](#automationworkflowqueuedsubscriber)
  * total_items [CollectionTotal](#collectiontotal)
  * _links [HATEOASLinks](#hateoaslinks)

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

#### Input
* input `object`
  * workflow_id **required** `string`: The unique id for the Automation workflow.
  * workflow_email_id **required** `string`: The unique id for the Automation workflow email.
  * body **required** `object`: Information about subscribers in an Automation email queue.
    * email_address **required** `string`: The list member's email address.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: Information about subscribers in an Automation email queue.
  * id `string`: The MD5 hash of the lowercase version of the list member's email address.
  * workflow_id `string`: A string that uniquely identifies an Automation workflow.
  * email_id `string`: A string that uniquely identifies an email in an Automation workflow.
  * list_id `string`: A string that uniquely identifies a list.
  * email_address `string`: The list member's email address.
  * next_send `string`: The date and time of the next send for the workflow email.
  * _links [HATEOASLinks](#hateoaslinks)

### getAutomationsIdEmailsIdQueueId
Get information about a specific subscriber in an Automation email queue.


```js
mailchimp.getAutomationsIdEmailsIdQueueId({
  "workflow_id": "",
  "workflow_email_id": "",
  "subscriber_hash": ""
}, context)
```

#### Input
* input `object`
  * workflow_id **required** `string`: The unique id for the Automation workflow.
  * workflow_email_id **required** `string`: The unique id for the Automation workflow email.
  * subscriber_hash **required** `string`: The MD5 hash of the lowercase version of the list member's email address.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: Information about subscribers in an Automation email queue.
  * id `string`: The MD5 hash of the lowercase version of the list member's email address.
  * workflow_id `string`: A string that uniquely identifies an Automation workflow.
  * email_id `string`: A string that uniquely identifies an email in an Automation workflow.
  * list_id `string`: A string that uniquely identifies a list.
  * email_address `string`: The list member's email address.
  * next_send `string`: The date and time of the next send for the workflow email.
  * _links [HATEOASLinks](#hateoaslinks)

### postAutomationsIdEmailsIdActionsPause
Pause an automated email.


```js
mailchimp.postAutomationsIdEmailsIdActionsPause({
  "workflow_id": "",
  "workflow_email_id": ""
}, context)
```

#### Input
* input `object`
  * workflow_id **required** `string`: The unique id for the Automation workflow.
  * workflow_email_id **required** `string`: The unique id for the Automation workflow email.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
*Output schema unknown*

### postAutomationsIdEmailsIdActionsStart
Start an automated email.


```js
mailchimp.postAutomationsIdEmailsIdActionsStart({
  "workflow_id": "",
  "workflow_email_id": ""
}, context)
```

#### Input
* input `object`
  * workflow_id **required** `string`: The unique id for the Automation workflow.
  * workflow_email_id **required** `string`: The unique id for the Automation workflow email.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
*Output schema unknown*

### getAutomationsIdRemovedSubscribers
Get information about subscribers who were [removed from an Automation workflow](http://kb.mailchimp.com/automation/add-or-remove-subscribers-from-automation-workflow?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).


```js
mailchimp.getAutomationsIdRemovedSubscribers({
  "workflow_id": ""
}, context)
```

#### Input
* input `object`
  * workflow_id **required** `string`: The unique id for the Automation workflow.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: A summary of the subscribers who were removed from an Automation workflow.
  * workflow_id `string`: A string that uniquely identifies an Automation workflow.
  * subscribers `array`: An array of objects, each representing a subscriber who was removed from an Automation workflow.
    * items `object`: A summary of a subscriber removed from an Automation workflow.
      * id `string`: The MD5 hash of the lowercase version of the list member's email address.
      * workflow_id `string`: A string that uniquely identifies an Automation workflow.
      * list_id `string`: A string that uniquely identifies a list.
      * email_address `string`: The list member's email address.
      * _links [HATEOASLinks](#hateoaslinks)
  * total_items [CollectionTotal](#collectiontotal)
  * _links [HATEOASLinks](#hateoaslinks)

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

#### Input
* input `object`
  * workflow_id **required** `string`: The unique id for the Automation workflow.
  * body **required** `object`: Information about subscribers in an Automation email queue.
    * email_address **required** `string`: The list member's email address.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: A summary of a subscriber removed from an Automation workflow.
  * id `string`: The MD5 hash of the lowercase version of the list member's email address.
  * workflow_id `string`: A string that uniquely identifies an Automation workflow.
  * list_id `string`: A string that uniquely identifies a list.
  * email_address `string`: The list member's email address.
  * _links [HATEOASLinks](#hateoaslinks)

### getAutomationsIdRemovedSubscribersId
Get information about a specific subscriber who was [removed from an Automation workflow](http://kb.mailchimp.com/automation/add-or-remove-subscribers-from-automation-workflow?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).


```js
mailchimp.getAutomationsIdRemovedSubscribersId({
  "workflow_id": "",
  "subscriber_hash": ""
}, context)
```

#### Input
* input `object`
  * workflow_id **required** `string`: The unique id for the Automation workflow.
  * subscriber_hash **required** `string`: The MD5 hash of the lowercase version of the list member's email address.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: A summary of a subscriber removed from an Automation workflow.
  * id `string`: The MD5 hash of the lowercase version of the list member's email address.
  * workflow_id `string`: A string that uniquely identifies an Automation workflow.
  * list_id `string`: A string that uniquely identifies a list.
  * email_address `string`: The list member's email address.
  * _links [HATEOASLinks](#hateoaslinks)

### getBatches
Get a summary of batch requests that have been made.


```js
mailchimp.getBatches({}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * count `integer`: The number of records to return. [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **10**.
  * offset `integer`: The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **0**.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: A summary of batch requests that have been made.
  * batches `array`: An array of objects representing batch calls.
    * items `object`: The status of a batch request
      * id `string`: A string that uniquely identifies this batch request.
      * status `string` (values: pending, preprocessing, started, finalizing, finished): The status of the batch call. [Learn more](http://developer.mailchimp.com/documentation/mailchimp/guides/how-to-use-batch-operations/) about how batch operations are processed.
      * total_operations `integer`: The total number of operations to complete as part of this batch request. For GET requests requiring pagination, each page counts as a separate operation.
      * finished_operations `integer`: The number of completed operations. This includes operations that returned an error.
      * errored_operations `integer`: The number of completed operations that returned an error.
      * submitted_at `string`: The date and time when the server received the batch request.
      * completed_at `string`: The date and time when all operations in the batch request completed.
      * response_body_url `string`: The URL of the gzipped archive of the results of all the operations.
      * _links [HATEOASLinks](#hateoaslinks)
  * total_items [CollectionTotal](#collectiontotal)
  * _links [HATEOASLinks](#hateoaslinks)

### postBatches
Begin processing a batch operations request.


```js
mailchimp.postBatches({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * operations `array`: An array of objects that describes operations to perform.
      * items `object`
        * method **required** `string`: The HTTP method to use for the operation.
        * path **required** `string`: The relative path to use for the operation.
        * params `object`: Any URL params to use, only applies to GET operations.
        * body `string`: A string containing the JSON body to use with the request.
        * operation_id `string`: An optional client-supplied id returned with the operation results.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: The status of a batch request
  * id `string`: A string that uniquely identifies this batch request.
  * status `string` (values: pending, preprocessing, started, finalizing, finished): The status of the batch call. [Learn more](http://developer.mailchimp.com/documentation/mailchimp/guides/how-to-use-batch-operations/) about how batch operations are processed.
  * total_operations `integer`: The total number of operations to complete as part of this batch request. For GET requests requiring pagination, each page counts as a separate operation.
  * finished_operations `integer`: The number of completed operations. This includes operations that returned an error.
  * errored_operations `integer`: The number of completed operations that returned an error.
  * submitted_at `string`: The date and time when the server received the batch request.
  * completed_at `string`: The date and time when all operations in the batch request completed.
  * response_body_url `string`: The URL of the gzipped archive of the results of all the operations.
  * _links [HATEOASLinks](#hateoaslinks)

### getBatchesId
Get the status of a batch request.


```js
mailchimp.getBatchesId({
  "batch_id": ""
}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * batch_id **required** `string`: The unique id for the batch operation.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: The status of a batch request
  * id `string`: A string that uniquely identifies this batch request.
  * status `string` (values: pending, preprocessing, started, finalizing, finished): The status of the batch call. [Learn more](http://developer.mailchimp.com/documentation/mailchimp/guides/how-to-use-batch-operations/) about how batch operations are processed.
  * total_operations `integer`: The total number of operations to complete as part of this batch request. For GET requests requiring pagination, each page counts as a separate operation.
  * finished_operations `integer`: The number of completed operations. This includes operations that returned an error.
  * errored_operations `integer`: The number of completed operations that returned an error.
  * submitted_at `string`: The date and time when the server received the batch request.
  * completed_at `string`: The date and time when all operations in the batch request completed.
  * response_body_url `string`: The URL of the gzipped archive of the results of all the operations.
  * _links [HATEOASLinks](#hateoaslinks)

### deleteBatchesId
Stops a batch request from running. Since only one batch request is run at a time, this can be used to cancel a long running request. The results of any completed operations will not be available after this call.


```js
mailchimp.deleteBatchesId({
  "batch_id": ""
}, context)
```

#### Input
* input `object`
  * batch_id **required** `string`: The unique id for the batch operation.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
*Output schema unknown*

### getBatchWebhooks
Get all webhooks that have been configured for batches.


```js
mailchimp.getBatchWebhooks({}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * count `integer`: The number of records to return. [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **10**.
  * offset `integer`: The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **0**.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: Manage webhooks for batch requests.
  * webhooks `array`: An array of objects, each representing a Batch Webhook.
    * items `object`: A webook configured for batch status updates.
      * id `string`: A string that uniquely identifies this Batch Webhook.
      * url `string`: A valid URL for the Webhook.
      * _links [HATEOASLinks](#hateoaslinks)
  * total_items [CollectionTotal](#collectiontotal)
  * _links [HATEOASLinks](#hateoaslinks)

### postBatchWebhooks
Configure a webhook that will fire whenever any batch request completes processing.


```js
mailchimp.postBatchWebhooks({
  "body": {
    "url": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** `object`: Add a new Batch Webook.
    * url **required** `string`: A valid URL for the Webhook.
    * _links [HATEOASLinks](#hateoaslinks)
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: A webook configured for batch status updates.
  * id `string`: A string that uniquely identifies this Batch Webhook.
  * url `string`: A valid URL for the Webhook.
  * _links [HATEOASLinks](#hateoaslinks)

### getBatchWebhook
Get information about a specific batch webhook.


```js
mailchimp.getBatchWebhook({
  "batch_webhook_id": ""
}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * batch_webhook_id **required** `string`: The unique id for the batch webhook.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: A webook configured for batch status updates.
  * id `string`: A string that uniquely identifies this Batch Webhook.
  * url `string`: A valid URL for the Webhook.
  * _links [HATEOASLinks](#hateoaslinks)

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

#### Input
* input `object`
  * batch_webhook_id **required** `string`: The unique id for the batch webhook.
  * body **required** `object`: Update an existing Batch Webook.
    * url **required** `string`: A valid URL for the Webhook.
    * _links [HATEOASLinks](#hateoaslinks)
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: A webook configured for batch status updates.
  * id `string`: A string that uniquely identifies this Batch Webhook.
  * url `string`: A valid URL for the Webhook.
  * _links [HATEOASLinks](#hateoaslinks)

### deleteBatchWebhookId
Remove a batch webhook. Webhooks will no longer be sent to the given URL.


```js
mailchimp.deleteBatchWebhookId({
  "batch_webhook_id": ""
}, context)
```

#### Input
* input `object`
  * batch_webhook_id **required** `string`: The unique id for the batch webhook.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
*Output schema unknown*

### getTemplateFolders
Get all folders used to organize templates.


```js
mailchimp.getTemplateFolders({}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * count `integer`: The number of records to return. [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **10**.
  * offset `integer`: The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **0**.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: A list of template folders
  * folders `array`: An array of objects representing template folders.
    * items `object`: A folder used to organize templates.
      * name `string`: The name of the folder.
      * id `string`: A string that uniquely identifies this template folder.
      * count `integer`: The number of templates in the folder.
      * _links [HATEOASLinks](#hateoaslinks)
  * total_items [CollectionTotal](#collectiontotal)
  * _links [HATEOASLinks](#hateoaslinks)

### postTemplateFolders
Create a new template folder.


```js
mailchimp.postTemplateFolders({
  "body": {
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** `object`: A folder used to organize templates.
    * name **required** `string`: The name of the folder.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: A folder used to organize templates.
  * name `string`: The name of the folder.
  * id `string`: A string that uniquely identifies this template folder.
  * count `integer`: The number of templates in the folder.
  * _links [HATEOASLinks](#hateoaslinks)

### getTemplateFoldersId
Get information about a specific folder used to organize templates.


```js
mailchimp.getTemplateFoldersId({
  "folder_id": ""
}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * folder_id **required** `string`: The unique id for the template folder.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: A folder used to organize templates.
  * name `string`: The name of the folder.
  * id `string`: A string that uniquely identifies this template folder.
  * count `integer`: The number of templates in the folder.
  * _links [HATEOASLinks](#hateoaslinks)

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

#### Input
* input `object`
  * folder_id **required** `string`: The unique id for the template folder.
  * body **required** `object`: A folder used to organize templates.
    * name **required** `string`: The name of the folder.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: A folder used to organize templates.
  * name `string`: The name of the folder.
  * id `string`: A string that uniquely identifies this template folder.
  * count `integer`: The number of templates in the folder.
  * _links [HATEOASLinks](#hateoaslinks)

### deleteTemplateFoldersId
Delete a specific template folder, and mark all the templates in the folder as 'unfiled'.


```js
mailchimp.deleteTemplateFoldersId({
  "folder_id": ""
}, context)
```

#### Input
* input `object`
  * folder_id **required** `string`: The unique id for the template folder.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
*Output schema unknown*

### getCampaignFolders
Get all folders used to organize campaigns.


```js
mailchimp.getCampaignFolders({}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * count `integer`: The number of records to return. [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **10**.
  * offset `integer`: The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **0**.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: A list of campaign folders
  * folders `array`: An array of objects representing campaign folders.
    * items `object`: A folder used to organize campaigns.
      * name `string`: The name of the folder.
      * id `string`: A string that uniquely identifies this campaign folder.
      * count `integer`: The number of campaigns in the folder.
      * _links [HATEOASLinks](#hateoaslinks)
  * total_items [CollectionTotal](#collectiontotal)
  * _links [HATEOASLinks](#hateoaslinks)

### postCampaignFolders
Create a new campaign folder.


```js
mailchimp.postCampaignFolders({
  "body": {
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** `object`: A folder used to organize campaigns.
    * name **required** `string`: Name to associate with the folder.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: A folder used to organize campaigns.
  * name `string`: The name of the folder.
  * id `string`: A string that uniquely identifies this campaign folder.
  * count `integer`: The number of campaigns in the folder.
  * _links [HATEOASLinks](#hateoaslinks)

### getCampaignFoldersId
Get information about a specific folder used to organize campaigns.


```js
mailchimp.getCampaignFoldersId({
  "folder_id": ""
}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * folder_id **required** `string`: The unique id for the campaign folder.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: A folder used to organize campaigns.
  * name `string`: The name of the folder.
  * id `string`: A string that uniquely identifies this campaign folder.
  * count `integer`: The number of campaigns in the folder.
  * _links [HATEOASLinks](#hateoaslinks)

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

#### Input
* input `object`
  * folder_id **required** `string`: The unique id for the campaign folder.
  * body **required** `object`: A folder used to organize campaigns.
    * name **required** `string`: Name to associate with the folder.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: A folder used to organize campaigns.
  * name `string`: The name of the folder.
  * id `string`: A string that uniquely identifies this campaign folder.
  * count `integer`: The number of campaigns in the folder.
  * _links [HATEOASLinks](#hateoaslinks)

### deleteCampaignFoldersId
Delete a specific campaign folder, and mark all the campaigns in the folder as 'unfiled'.


```js
mailchimp.deleteCampaignFoldersId({
  "folder_id": ""
}, context)
```

#### Input
* input `object`
  * folder_id **required** `string`: The unique id for the campaign folder.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
*Output schema unknown*

### getCampaigns
Get all campaigns in an account.


```js
mailchimp.getCampaigns({}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * count `integer`: The number of records to return. [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **10**.
  * offset `integer`: The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **0**.
  * type `string` (values: regular, plaintext, absplit, rss, variate): The campaign type.
  * status `string`: The status of the campaign.
  * before_send_time `string`: Restrict the response to campaigns sent before the set time. We recommend [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time format: 2015-10-21T15:41:36+00:00.
  * since_send_time `string`: Restrict the response to campaigns sent after the set time. We recommend [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time format: 2015-10-21T15:41:36+00:00.
  * before_create_time `string`: Restrict the response to campaigns created before the set time. We recommend [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time format: 2015-10-21T15:41:36+00:00.
  * since_create_time `string`: Restrict the response to campaigns created after the set time. We recommend [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time format: 2015-10-21T15:41:36+00:00.
  * list_id `string`: The unique id for the list.
  * folder_id `string`: The unique folder id.
  * sort_field `string` (values: create_time, send_time): Returns files sorted by the specified field.
  * sort_dir `string` (values: ASC, DESC): Determines the order direction for sorted results.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`
  * campaigns `array`: An array of campaigns.
    * items `object`: A summary of an individual campaign's settings and content.
      * id `string`: A string that uniquely identifies this campaign.
      * web_id `integer`: The ID used in the MailChimp web application. View this campaign in your MailChimp account at `https://{dc}.admin.mailchimp.com/campaigns/show/?id={web_id}`.
      * type [CampaignType](#campaigntype)
      * create_time `string`: The date and time the campaign was created.
      * archive_url `string`: The link to the campaign's archive version.
      * long_archive_url `string`: The original link to the campaign's archive version.
      * status [CampaignStatus](#campaignstatus)
      * emails_sent `integer`: The total number of emails sent for this campaign.
      * send_time `string`: The date and time a campaign was sent.
      * content_type `string`: How the campaign's content is put together ('template', 'drag_and_drop', 'html', 'url').
      * needs_block_refresh `boolean`: Determines if the campaign needs its blocks refreshed by opening the web-based campaign editor.
      * recipients `object`: List settings for the campaign.
        * list_id `string`: The unique list id.
        * list_name `string`: The name of the list.
        * segment_text `string`: A description of the [segment](http://kb.mailchimp.com/segments/how-to-use-groups-and-segments?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) used for the campaign. Formatted as a string marked up with HTML.
        * recipient_count `integer`: Count of the recipients on the associated list. Formatted as an integer.
        * segment_opts [SegmentationOptions](#segmentationoptions)
      * settings `object`: The settings for your campaign, including subject, from name, reply-to address, and more.
        * subject_line `string`: The subject line for the campaign.
        * preview_text `string`: The preview text for the campaign.
        * title `string`: The title of the campaign.
        * from_name `string`: The 'from' name on the campaign (not an email address).
        * reply_to `string`: The reply-to email address for the campaign.
        * use_conversation `boolean`: Use MailChimp Conversation feature to manage out-of-office replies.
        * to_name `string`: The campaign's custom 'To' name. Typically the first name [merge field](http://kb.mailchimp.com/merge-tags/using/getting-started-with-merge-tags?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
        * folder_id `string`: If the campaign is listed in a folder, the id for that folder.
        * authenticate `boolean`: Whether MailChimp [authenticated](http://kb.mailchimp.com/delivery/deliverability-research/set-up-mailchimp-authentication?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) the campaign. Defaults to `true`.
        * auto_footer `boolean`: Automatically append MailChimp's [default footer](http://kb.mailchimp.com/campaigns/design/theres-a-gray-footer-added-to-my-campaign?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) to the campaign.
        * inline_css `boolean`: Automatically inline the CSS included with the campaign content.
        * auto_tweet `boolean`: Automatically tweet a link to the [campaign archive](http://kb.mailchimp.com/campaigns/archives/set-up-your-campaign-archive?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) page when the campaign is sent.
        * auto_fb_post `array`: An array of [Facebook](http://kb.mailchimp.com/integrations/facebook/integrate-facebook-with-mailchimp?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) page ids to auto-post to.
          * items `string`
        * fb_comments `boolean`: Allows Facebook comments on the campaign (also force-enables the Campaign Archive toolbar). Defaults to `true`.
        * timewarp `boolean`: Send this campaign using [Timewarp](http://kb.mailchimp.com/campaigns/confirmation-and-sending/use-timewarp-to-optimize-sending-by-time-zone?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
        * template_id `integer`: The id for the template used in this campaign.
        * drag_and_drop `boolean`: Whether the campaign uses the drag-and-drop editor.
      * variate_settings `object`: The settings specific to A/B test campaigns.
        * winning_combination_id `string`: ID for the winning combination.
        * winning_campaign_id `string`: ID of the campaign that was sent to the remaining recipients based on the winning combination.
        * winner_criteria `string` (values: opens, clicks, manual, total_revenue): The combination that performs the best. This may be determined automatically by click rate, open rate, or total revenue—or you may choose manually based on the reporting data you find the most valuable. For Multivariate Campaigns testing send_time, winner_criteria is ignored. For Multivariate Campaigns with 'manual' as the winner_criteria, the winner must be chosen in the MailChimp web application.
        * wait_time `integer`: The number of minutes to wait before choosing the winning campaign. The value of wait_time must be greater than 0 and in whole hours, specified in minutes.
        * test_size `integer`: The percentage of recipients to send the test combinations to, must be a value between 10 and 100.
        * subject_lines `array`: The possible subject lines to test. If no subject lines are provided, settings.subject_line will be used.
          * items `string`
        * send_times `array`: The possible send times to test. The times provided should be in the format YYYY-MM-DD HH:MM:SS. If send_times are provided to test, the test_size will be set to 100% and winner_criteria will be ignored.
          * items `string`
        * from_names `array`: The possible from names. The number of from_names provided must match the number of reply_to_addresses. If no from_names are provided, settings.from_name will be used.
          * items `string`
        * reply_to_addresses `array`: The possible reply-to addresses. The number of reply_to_addresses provided must match the number of from_names. If no reply_to_addresses are provided, settings.reply_to will be used.
          * items `string`
        * contents `array`: Descriptions of possible email contents. To set campaign contents, make a PUT request to /campaigns/{campaign_id}/content with the field 'variate_contents'.
          * items `string`
        * combinations `array`: Combinations of possible variables used to build emails.
          * items `object`
            * id `string`: Unique ID for the combination.
            * subject_line `integer`: The index of `variate_settings.subject_lines` used.
            * send_time `integer`: The index of `variate_settings.send_times` used.
            * from_name `integer`: The index of `variate_settings.from_names` used.
            * reply_to `integer`: The index of `variate_settings.reply_to_addresses` used.
            * content_description `integer`: The index of `variate_settings.contents` used.
            * recipients `integer`: The number of recipients for this combination.
      * tracking `object`: The tracking options for a campaign.
        * opens `boolean`: Whether to [track opens](http://kb.mailchimp.com/reports/about-open-tracking?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs). Defaults to `true`. Cannot be set to false for variate campaigns.
        * html_clicks `boolean`: Whether to [track clicks](http://kb.mailchimp.com/reports/about-click-tracking?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) in the HTML version of the campaign. Defaults to `true`. Cannot be set to false for variate campaigns.
        * text_clicks `boolean`: Whether to [track clicks](http://kb.mailchimp.com/reports/about-click-tracking?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) in the plain-text version of the campaign. Defaults to `true`. Cannot be set to false for variate campaigns.
        * goal_tracking `boolean`: Whether to enable [Goal](http://kb.mailchimp.com/integrations/other-integrations/integrate-goal-with-mailchimp?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) tracking.
        * ecomm360 `boolean`: Whether to enable [eCommerce360](http://kb.mailchimp.com/integrations/other-integrations/about-ecommerce360?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) tracking.
        * google_analytics `string`: The custom slug for [Google Analytics](http://kb.mailchimp.com/integrations/other-integrations/integrate-google-analytics-with-mailchimp?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) tracking (max of 50 bytes).
        * clicktale `string`: The custom slug for [ClickTale](http://kb.mailchimp.com/integrations/other-integrations/additional-tracking-options-for-campaigns?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs#Click-Tale) tracking (max of 50 bytes).
        * salesforce `object`: Salesforce tracking options for a campaign. Must be using MailChimp's built-in [Salesforce integration](http://kb.mailchimp.com/integrations/other-integrations/integrate-salesforce-with-mailchimp?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
          * campaign `boolean`: Create a campaign in a connected Salesforce account.
          * notes `boolean`: Update contact notes for a campaign based on subscriber email addresses.
        * capsule `object`: Capsule tracking options for a campaign. Must be using MailChimp's built-in Capsule integration.
          * notes `boolean`: Update contact notes for a campaign based on subscriber email addresses.
      * rss_opts `object`: [RSS](http://kb.mailchimp.com/campaigns/rss-in-campaigns/create-an-rss-campaign?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) options for a campaign.
        * feed_url `string`: The URL for the RSS feed.
        * frequency `string` (values: daily, weekly, monthly): The frequency of the RSS Campaign.
        * schedule `object`: The schedule for sending the RSS Campaign.
          * hour `integer`: The hour to send the campaign in local time. Acceptable hours are 0-23. For example, '4' would be 4am in [your account's default time zone](http://kb.mailchimp.com/accounts/account-setup/how-to-set-account-defaults?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
          * daily_send `object`: The days of the week to send a daily RSS Campaign.
            * sunday `boolean`: Sends the daily RSS Campaign on Sundays.
            * monday `boolean`: Sends the daily RSS Campaign on Mondays.
            * tuesday `boolean`: Sends the daily RSS Campaign on Tuesdays.
            * wednesday `boolean`: Sends the daily RSS Campaign on Wednesdays.
            * thursday `boolean`: Sends the daily RSS Campaign on Thursdays.
            * friday `boolean`: Sends the daily RSS Campaign on Fridays.
            * saturday `boolean`: Sends the daily RSS Campaign on Saturdays.
          * weekly_send_day `string` (values: sunday, monday, tuesday, wednesday, thursday, friday, saturday): The day of the week to send a weekly RSS Campaign.
          * monthly_send_date `number`: The day of the month to send a monthly RSS Campaign. Acceptable days are 0-31, where '0' is always the last day of a month. Months with fewer than the selected number of days will not have an RSS campaign sent out that day. For example, RSS Campaigns set to send on the 30th will not go out in February.
        * last_sent `string`: The date the campaign was last sent.
        * constrain_rss_img `boolean`: Whether to add CSS to images in the RSS feed to constrain their width in campaigns.
      * ab_split_opts `object`: [A/B Testing](http://kb.mailchimp.com/campaigns/ab/about-ab-testing-campaigns?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) options for a campaign.
        * split_test `string` (values: subject, from_name, schedule): The type of AB split to run.
        * pick_winner `string` (values: opens, clicks, manual): How we should evaluate a winner. Based on 'opens', 'clicks', or 'manual'.
        * wait_units `string` (values: hours, days): How unit of time for measuring the winner ('hours' or 'days'). This cannot be changed after a campaign is sent.
        * wait_time `integer`: The amount of time to wait before picking a winner. This cannot be changed after a campaign is sent.
        * split_size `integer`: The size of the split groups. Campaigns split based on 'schedule' are forced to have a 50/50 split. Valid split integers are between 1-50.
        * from_name_a `string`: For campaigns split on 'From Name', the name for Group A.
        * from_name_b `string`: For campaigns split on 'From Name', the name for Group B.
        * reply_email_a `string`: For campaigns split on 'From Name', the reply-to address for Group A.
        * reply_email_b `string`: For campaigns split on 'From Name', the reply-to address for Group B.
        * subject_a `string`: For campaigns split on 'Subject Line', the subject line for Group A.
        * subject_b `string`: For campaigns split on 'Subject Line', the subject line for Group B.
        * send_time_a `string`: The send time for Group A.
        * send_time_b `string`: The send time for Group B.
        * send_time_winner `string`: The send time for the winning version.
      * social_card `object`: The preview for the campaign, rendered by social networks like Facebook and Twitter. [Learn more](http://kb.mailchimp.com/campaigns/previews-and-tests/set-up-social-cards?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
        * image_url `string`: The url for the header image for the card.
        * description `string`: A short summary of the campaign to display.
        * title `string`: The title for the card. Typically the subject line of the campaign.
      * report_summary `object`: For sent campaigns, a summary of opens, clicks, and e-commerce data.
        * opens `integer`: The total number of opens for a campaign.
        * unique_opens `integer`: The number of unique opens.
        * open_rate `number`: The number of unique opens divided by the total number of successful deliveries.
        * clicks `integer`: The total number of clicks for an campaign.
        * subscriber_clicks `integer`: The number of unique clicks.
        * click_rate `number`: The number of unique clicks divided by the total number of successful deliveries.
        * ecommerce `object`: E-Commerce stats for a campaign.
          * total_orders `integer`: The total orders for a campaign.
          * total_spent `number`: The total spent for a campaign. Calculated as the sum of all order totals with no deductions.
          * total_revenue `number`: The total revenue for a campaign. Calculated as the sum of all order totals minus shipping and tax totals.
      * delivery_status [DeliveryStatus](#deliverystatus)
      * _links [HATEOASLinks](#hateoaslinks)
  * total_items [CollectionTotal](#collectiontotal)
  * _links [HATEOASLinks](#hateoaslinks)

### postCampaigns
Create a new MailChimp campaign.


```js
mailchimp.postCampaigns({
  "body": {
    "type": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** `object`: A summary of an individual campaign's settings and content.
    * type **required** `string` (values: regular, plaintext, absplit, rss, variate): There are four types of [campaigns](http://kb.mailchimp.com/campaigns?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) you can create in MailChimp. A/B Split campaigns have been deprecated and variate campaigns should be used instead.
    * recipients `object`: List settings for the campaign.
      * list_id **required** `string`: The unique list id.
      * segment_opts [SegmentationOptions](#segmentationoptions)
    * settings `object`: The settings for your campaign, including subject, from name, reply-to address, and more.
      * subject_line `string`: The subject line for the campaign.
      * preview_text `string`: The preview text for the campaign.
      * title `string`: The title of the campaign.
      * from_name `string`: The 'from' name on the campaign (not an email address).
      * reply_to `string`: The reply-to email address for the campaign.
      * use_conversation `boolean`: Use MailChimp Conversation feature to manage out-of-office replies.
      * to_name `string`: The campaign's custom 'To' name. Typically the first name [merge field](http://kb.mailchimp.com/merge-tags/using/getting-started-with-merge-tags?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
      * folder_id `string`: If the campaign is listed in a folder, the id for that folder.
      * authenticate `boolean`: Whether MailChimp [authenticated](http://kb.mailchimp.com/delivery/deliverability-research/set-up-mailchimp-authentication?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) the campaign. Defaults to `true`.
      * auto_footer `boolean`: Automatically append MailChimp's [default footer](http://kb.mailchimp.com/campaigns/design/theres-a-gray-footer-added-to-my-campaign?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) to the campaign.
      * inline_css `boolean`: Automatically inline the CSS included with the campaign content.
      * auto_tweet `boolean`: Automatically tweet a link to the [campaign archive](http://kb.mailchimp.com/campaigns/archives/set-up-your-campaign-archive?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) page when the campaign is sent.
      * auto_fb_post `array`: An array of [Facebook](http://kb.mailchimp.com/integrations/facebook/integrate-facebook-with-mailchimp?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) page ids to auto-post to.
        * items `string`
      * fb_comments `boolean`: Allows Facebook comments on the campaign (also force-enables the Campaign Archive toolbar). Defaults to `true`.
      * template_id `integer`: The id of the template to use.
    * variate_settings `object`: The settings specific to A/B test campaigns.
      * winner_criteria **required** `string` (values: opens, clicks, manual, total_revenue): The combination that performs the best. This may be determined automatically by click rate, open rate, or total revenue—or you may choose manually based on the reporting data you find the most valuable. For Multivariate Campaigns testing send_time, winner_criteria is ignored. For Multivariate Campaigns with 'manual' as the winner_criteria, the winner must be chosen in the MailChimp web application.
      * wait_time `integer`: The number of minutes to wait before choosing the winning campaign. The value of wait_time must be greater than 0 and in whole hours, specified in minutes.
      * test_size `integer`: The percentage of recipients to send the test combinations to, must be a value between 10 and 100.
      * subject_lines `array`: The possible subject lines to test. If no subject lines are provided, settings.subject_line will be used.
        * items `string`
      * send_times `array`: The possible send times to test. The times provided should be in the format YYYY-MM-DD HH:MM:SS. If send_times are provided to test, the test_size will be set to 100% and winner_criteria will be ignored.
        * items `string`
      * from_names `array`: The possible from names. The number of from_names provided must match the number of reply_to_addresses. If no from_names are provided, settings.from_name will be used.
        * items `string`
      * reply_to_addresses `array`: The possible reply-to addresses. The number of reply_to_addresses provided must match the number of from_names. If no reply_to_addresses are provided, settings.reply_to will be used.
        * items `string`
    * tracking `object`: The tracking options for a campaign.
      * opens `boolean`: Whether to [track opens](http://kb.mailchimp.com/reports/about-open-tracking?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs). Defaults to `true`. Cannot be set to false for variate campaigns.
      * html_clicks `boolean`: Whether to [track clicks](http://kb.mailchimp.com/reports/about-click-tracking?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) in the HTML version of the campaign. Defaults to `true`. Cannot be set to false for variate campaigns.
      * text_clicks `boolean`: Whether to [track clicks](http://kb.mailchimp.com/reports/about-click-tracking?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) in the plain-text version of the campaign. Defaults to `true`. Cannot be set to false for variate campaigns.
      * goal_tracking `boolean`: Whether to enable [Goal](http://kb.mailchimp.com/integrations/other-integrations/integrate-goal-with-mailchimp?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) tracking.
      * ecomm360 `boolean`: Whether to enable [eCommerce360](http://kb.mailchimp.com/integrations/other-integrations/about-ecommerce360?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) tracking.
      * google_analytics `string`: The custom slug for [Google Analytics](http://kb.mailchimp.com/integrations/other-integrations/integrate-google-analytics-with-mailchimp?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) tracking (max of 50 bytes).
      * clicktale `string`: The custom slug for [ClickTale](http://kb.mailchimp.com/integrations/other-integrations/additional-tracking-options-for-campaigns?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs#Click-Tale) tracking (max of 50 bytes).
      * salesforce `object`: Salesforce tracking options for a campaign. Must be using MailChimp's built-in [Salesforce integration](http://kb.mailchimp.com/integrations/other-integrations/integrate-salesforce-with-mailchimp?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
        * campaign `boolean`: Create a campaign in a connected Salesforce account.
        * notes `boolean`: Update contact notes for a campaign based on subscriber email addresses.
      * capsule `object`: Capsule tracking options for a campaign. Must be using MailChimp's built-in Capsule integration.
        * notes `boolean`: Update contact notes for a campaign based on subscriber email addresses.
    * rss_opts `object`: [RSS](http://kb.mailchimp.com/campaigns/rss-in-campaigns/create-an-rss-campaign?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) options for a campaign.
      * feed_url **required** `string`: The URL for the RSS feed.
      * frequency **required** `string` (values: daily, weekly, monthly): The frequency of the RSS Campaign.
      * schedule `object`: The schedule for sending the RSS Campaign.
        * hour `integer`: The hour to send the campaign in local time. Acceptable hours are 0-23. For example, '4' would be 4am in [your account's default time zone](http://kb.mailchimp.com/accounts/account-setup/how-to-set-account-defaults?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
        * daily_send `object`: The days of the week to send a daily RSS Campaign.
          * sunday `boolean`: Sends the daily RSS Campaign on Sundays.
          * monday `boolean`: Sends the daily RSS Campaign on Mondays.
          * tuesday `boolean`: Sends the daily RSS Campaign on Tuesdays.
          * wednesday `boolean`: Sends the daily RSS Campaign on Wednesdays.
          * thursday `boolean`: Sends the daily RSS Campaign on Thursdays.
          * friday `boolean`: Sends the daily RSS Campaign on Fridays.
          * saturday `boolean`: Sends the daily RSS Campaign on Saturdays.
        * weekly_send_day `string` (values: sunday, monday, tuesday, wednesday, thursday, friday, saturday): The day of the week to send a weekly RSS Campaign.
        * monthly_send_date `number`: The day of the month to send a monthly RSS Campaign. Acceptable days are 0-31, where '0' is always the last day of a month. Months with fewer than the selected number of days will not have an RSS campaign sent out that day. For example, RSS Campaigns set to send on the 30th will not go out in February.
      * constrain_rss_img `boolean`: Whether to add CSS to images in the RSS feed to constrain their width in campaigns.
    * ab_split_opts `object`: [A/B Testing](http://kb.mailchimp.com/campaigns/ab/about-ab-testing-campaigns?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) options for a campaign.
      * split_test `string` (values: subject, from_name, schedule): The type of AB split to run.
      * pick_winner `string` (values: opens, clicks, manual): How we should evaluate a winner. Based on 'opens', 'clicks', or 'manual'.
      * wait_units `string` (values: hours, days): How unit of time for measuring the winner ('hours' or 'days'). This cannot be changed after a campaign is sent.
      * wait_time `integer`: The amount of time to wait before picking a winner. This cannot be changed after a campaign is sent.
      * split_size `integer`: The size of the split groups. Campaigns split based on 'schedule' are forced to have a 50/50 split. Valid split integers are between 1-50.
      * from_name_a `string`: For campaigns split on 'From Name', the name for Group A.
      * from_name_b `string`: For campaigns split on 'From Name', the name for Group B.
      * reply_email_a `string`: For campaigns split on 'From Name', the reply-to address for Group A.
      * reply_email_b `string`: For campaigns split on 'From Name', the reply-to address for Group B.
      * subject_a `string`: For campaigns split on 'Subject Line', the subject line for Group A.
      * subject_b `string`: For campaigns split on 'Subject Line', the subject line for Group B.
      * send_time_a `string`: The send time for Group A.
      * send_time_b `string`: The send time for Group B.
      * send_time_winner `string`: The send time for the winning version.
    * social_card `object`: The preview for the campaign, rendered by social networks like Facebook and Twitter. [Learn more](http://kb.mailchimp.com/campaigns/previews-and-tests/set-up-social-cards?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
      * image_url `string`: The url for the header image for the card.
      * description `string`: A short summary of the campaign to display.
      * title `string`: The title for the card. Typically the subject line of the campaign.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: A summary of an individual campaign's settings and content.
  * id `string`: A string that uniquely identifies this campaign.
  * web_id `integer`: The ID used in the MailChimp web application. View this campaign in your MailChimp account at `https://{dc}.admin.mailchimp.com/campaigns/show/?id={web_id}`.
  * type [CampaignType](#campaigntype)
  * create_time `string`: The date and time the campaign was created.
  * archive_url `string`: The link to the campaign's archive version.
  * long_archive_url `string`: The original link to the campaign's archive version.
  * status [CampaignStatus](#campaignstatus)
  * emails_sent `integer`: The total number of emails sent for this campaign.
  * send_time `string`: The date and time a campaign was sent.
  * content_type `string`: How the campaign's content is put together ('template', 'drag_and_drop', 'html', 'url').
  * needs_block_refresh `boolean`: Determines if the campaign needs its blocks refreshed by opening the web-based campaign editor.
  * recipients `object`: List settings for the campaign.
    * list_id `string`: The unique list id.
    * list_name `string`: The name of the list.
    * segment_text `string`: A description of the [segment](http://kb.mailchimp.com/segments/how-to-use-groups-and-segments?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) used for the campaign. Formatted as a string marked up with HTML.
    * recipient_count `integer`: Count of the recipients on the associated list. Formatted as an integer.
    * segment_opts [SegmentationOptions](#segmentationoptions)
  * settings `object`: The settings for your campaign, including subject, from name, reply-to address, and more.
    * subject_line `string`: The subject line for the campaign.
    * preview_text `string`: The preview text for the campaign.
    * title `string`: The title of the campaign.
    * from_name `string`: The 'from' name on the campaign (not an email address).
    * reply_to `string`: The reply-to email address for the campaign.
    * use_conversation `boolean`: Use MailChimp Conversation feature to manage out-of-office replies.
    * to_name `string`: The campaign's custom 'To' name. Typically the first name [merge field](http://kb.mailchimp.com/merge-tags/using/getting-started-with-merge-tags?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
    * folder_id `string`: If the campaign is listed in a folder, the id for that folder.
    * authenticate `boolean`: Whether MailChimp [authenticated](http://kb.mailchimp.com/delivery/deliverability-research/set-up-mailchimp-authentication?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) the campaign. Defaults to `true`.
    * auto_footer `boolean`: Automatically append MailChimp's [default footer](http://kb.mailchimp.com/campaigns/design/theres-a-gray-footer-added-to-my-campaign?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) to the campaign.
    * inline_css `boolean`: Automatically inline the CSS included with the campaign content.
    * auto_tweet `boolean`: Automatically tweet a link to the [campaign archive](http://kb.mailchimp.com/campaigns/archives/set-up-your-campaign-archive?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) page when the campaign is sent.
    * auto_fb_post `array`: An array of [Facebook](http://kb.mailchimp.com/integrations/facebook/integrate-facebook-with-mailchimp?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) page ids to auto-post to.
      * items `string`
    * fb_comments `boolean`: Allows Facebook comments on the campaign (also force-enables the Campaign Archive toolbar). Defaults to `true`.
    * timewarp `boolean`: Send this campaign using [Timewarp](http://kb.mailchimp.com/campaigns/confirmation-and-sending/use-timewarp-to-optimize-sending-by-time-zone?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
    * template_id `integer`: The id for the template used in this campaign.
    * drag_and_drop `boolean`: Whether the campaign uses the drag-and-drop editor.
  * variate_settings `object`: The settings specific to A/B test campaigns.
    * winning_combination_id `string`: ID for the winning combination.
    * winning_campaign_id `string`: ID of the campaign that was sent to the remaining recipients based on the winning combination.
    * winner_criteria `string` (values: opens, clicks, manual, total_revenue): The combination that performs the best. This may be determined automatically by click rate, open rate, or total revenue—or you may choose manually based on the reporting data you find the most valuable. For Multivariate Campaigns testing send_time, winner_criteria is ignored. For Multivariate Campaigns with 'manual' as the winner_criteria, the winner must be chosen in the MailChimp web application.
    * wait_time `integer`: The number of minutes to wait before choosing the winning campaign. The value of wait_time must be greater than 0 and in whole hours, specified in minutes.
    * test_size `integer`: The percentage of recipients to send the test combinations to, must be a value between 10 and 100.
    * subject_lines `array`: The possible subject lines to test. If no subject lines are provided, settings.subject_line will be used.
      * items `string`
    * send_times `array`: The possible send times to test. The times provided should be in the format YYYY-MM-DD HH:MM:SS. If send_times are provided to test, the test_size will be set to 100% and winner_criteria will be ignored.
      * items `string`
    * from_names `array`: The possible from names. The number of from_names provided must match the number of reply_to_addresses. If no from_names are provided, settings.from_name will be used.
      * items `string`
    * reply_to_addresses `array`: The possible reply-to addresses. The number of reply_to_addresses provided must match the number of from_names. If no reply_to_addresses are provided, settings.reply_to will be used.
      * items `string`
    * contents `array`: Descriptions of possible email contents. To set campaign contents, make a PUT request to /campaigns/{campaign_id}/content with the field 'variate_contents'.
      * items `string`
    * combinations `array`: Combinations of possible variables used to build emails.
      * items `object`
        * id `string`: Unique ID for the combination.
        * subject_line `integer`: The index of `variate_settings.subject_lines` used.
        * send_time `integer`: The index of `variate_settings.send_times` used.
        * from_name `integer`: The index of `variate_settings.from_names` used.
        * reply_to `integer`: The index of `variate_settings.reply_to_addresses` used.
        * content_description `integer`: The index of `variate_settings.contents` used.
        * recipients `integer`: The number of recipients for this combination.
  * tracking `object`: The tracking options for a campaign.
    * opens `boolean`: Whether to [track opens](http://kb.mailchimp.com/reports/about-open-tracking?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs). Defaults to `true`. Cannot be set to false for variate campaigns.
    * html_clicks `boolean`: Whether to [track clicks](http://kb.mailchimp.com/reports/about-click-tracking?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) in the HTML version of the campaign. Defaults to `true`. Cannot be set to false for variate campaigns.
    * text_clicks `boolean`: Whether to [track clicks](http://kb.mailchimp.com/reports/about-click-tracking?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) in the plain-text version of the campaign. Defaults to `true`. Cannot be set to false for variate campaigns.
    * goal_tracking `boolean`: Whether to enable [Goal](http://kb.mailchimp.com/integrations/other-integrations/integrate-goal-with-mailchimp?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) tracking.
    * ecomm360 `boolean`: Whether to enable [eCommerce360](http://kb.mailchimp.com/integrations/other-integrations/about-ecommerce360?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) tracking.
    * google_analytics `string`: The custom slug for [Google Analytics](http://kb.mailchimp.com/integrations/other-integrations/integrate-google-analytics-with-mailchimp?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) tracking (max of 50 bytes).
    * clicktale `string`: The custom slug for [ClickTale](http://kb.mailchimp.com/integrations/other-integrations/additional-tracking-options-for-campaigns?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs#Click-Tale) tracking (max of 50 bytes).
    * salesforce `object`: Salesforce tracking options for a campaign. Must be using MailChimp's built-in [Salesforce integration](http://kb.mailchimp.com/integrations/other-integrations/integrate-salesforce-with-mailchimp?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
      * campaign `boolean`: Create a campaign in a connected Salesforce account.
      * notes `boolean`: Update contact notes for a campaign based on subscriber email addresses.
    * capsule `object`: Capsule tracking options for a campaign. Must be using MailChimp's built-in Capsule integration.
      * notes `boolean`: Update contact notes for a campaign based on subscriber email addresses.
  * rss_opts `object`: [RSS](http://kb.mailchimp.com/campaigns/rss-in-campaigns/create-an-rss-campaign?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) options for a campaign.
    * feed_url `string`: The URL for the RSS feed.
    * frequency `string` (values: daily, weekly, monthly): The frequency of the RSS Campaign.
    * schedule `object`: The schedule for sending the RSS Campaign.
      * hour `integer`: The hour to send the campaign in local time. Acceptable hours are 0-23. For example, '4' would be 4am in [your account's default time zone](http://kb.mailchimp.com/accounts/account-setup/how-to-set-account-defaults?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
      * daily_send `object`: The days of the week to send a daily RSS Campaign.
        * sunday `boolean`: Sends the daily RSS Campaign on Sundays.
        * monday `boolean`: Sends the daily RSS Campaign on Mondays.
        * tuesday `boolean`: Sends the daily RSS Campaign on Tuesdays.
        * wednesday `boolean`: Sends the daily RSS Campaign on Wednesdays.
        * thursday `boolean`: Sends the daily RSS Campaign on Thursdays.
        * friday `boolean`: Sends the daily RSS Campaign on Fridays.
        * saturday `boolean`: Sends the daily RSS Campaign on Saturdays.
      * weekly_send_day `string` (values: sunday, monday, tuesday, wednesday, thursday, friday, saturday): The day of the week to send a weekly RSS Campaign.
      * monthly_send_date `number`: The day of the month to send a monthly RSS Campaign. Acceptable days are 0-31, where '0' is always the last day of a month. Months with fewer than the selected number of days will not have an RSS campaign sent out that day. For example, RSS Campaigns set to send on the 30th will not go out in February.
    * last_sent `string`: The date the campaign was last sent.
    * constrain_rss_img `boolean`: Whether to add CSS to images in the RSS feed to constrain their width in campaigns.
  * ab_split_opts `object`: [A/B Testing](http://kb.mailchimp.com/campaigns/ab/about-ab-testing-campaigns?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) options for a campaign.
    * split_test `string` (values: subject, from_name, schedule): The type of AB split to run.
    * pick_winner `string` (values: opens, clicks, manual): How we should evaluate a winner. Based on 'opens', 'clicks', or 'manual'.
    * wait_units `string` (values: hours, days): How unit of time for measuring the winner ('hours' or 'days'). This cannot be changed after a campaign is sent.
    * wait_time `integer`: The amount of time to wait before picking a winner. This cannot be changed after a campaign is sent.
    * split_size `integer`: The size of the split groups. Campaigns split based on 'schedule' are forced to have a 50/50 split. Valid split integers are between 1-50.
    * from_name_a `string`: For campaigns split on 'From Name', the name for Group A.
    * from_name_b `string`: For campaigns split on 'From Name', the name for Group B.
    * reply_email_a `string`: For campaigns split on 'From Name', the reply-to address for Group A.
    * reply_email_b `string`: For campaigns split on 'From Name', the reply-to address for Group B.
    * subject_a `string`: For campaigns split on 'Subject Line', the subject line for Group A.
    * subject_b `string`: For campaigns split on 'Subject Line', the subject line for Group B.
    * send_time_a `string`: The send time for Group A.
    * send_time_b `string`: The send time for Group B.
    * send_time_winner `string`: The send time for the winning version.
  * social_card `object`: The preview for the campaign, rendered by social networks like Facebook and Twitter. [Learn more](http://kb.mailchimp.com/campaigns/previews-and-tests/set-up-social-cards?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
    * image_url `string`: The url for the header image for the card.
    * description `string`: A short summary of the campaign to display.
    * title `string`: The title for the card. Typically the subject line of the campaign.
  * report_summary `object`: For sent campaigns, a summary of opens, clicks, and e-commerce data.
    * opens `integer`: The total number of opens for a campaign.
    * unique_opens `integer`: The number of unique opens.
    * open_rate `number`: The number of unique opens divided by the total number of successful deliveries.
    * clicks `integer`: The total number of clicks for an campaign.
    * subscriber_clicks `integer`: The number of unique clicks.
    * click_rate `number`: The number of unique clicks divided by the total number of successful deliveries.
    * ecommerce `object`: E-Commerce stats for a campaign.
      * total_orders `integer`: The total orders for a campaign.
      * total_spent `number`: The total spent for a campaign. Calculated as the sum of all order totals with no deductions.
      * total_revenue `number`: The total revenue for a campaign. Calculated as the sum of all order totals minus shipping and tax totals.
  * delivery_status [DeliveryStatus](#deliverystatus)
  * _links [HATEOASLinks](#hateoaslinks)

### getCampaignsId
Get information about a specific campaign.


```js
mailchimp.getCampaignsId({
  "campaign_id": ""
}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * campaign_id **required** `string`: The unique id for the campaign.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: A summary of an individual campaign's settings and content.
  * id `string`: A string that uniquely identifies this campaign.
  * web_id `integer`: The ID used in the MailChimp web application. View this campaign in your MailChimp account at `https://{dc}.admin.mailchimp.com/campaigns/show/?id={web_id}`.
  * type [CampaignType](#campaigntype)
  * create_time `string`: The date and time the campaign was created.
  * archive_url `string`: The link to the campaign's archive version.
  * long_archive_url `string`: The original link to the campaign's archive version.
  * status [CampaignStatus](#campaignstatus)
  * emails_sent `integer`: The total number of emails sent for this campaign.
  * send_time `string`: The date and time a campaign was sent.
  * content_type `string`: How the campaign's content is put together ('template', 'drag_and_drop', 'html', 'url').
  * needs_block_refresh `boolean`: Determines if the campaign needs its blocks refreshed by opening the web-based campaign editor.
  * recipients `object`: List settings for the campaign.
    * list_id `string`: The unique list id.
    * list_name `string`: The name of the list.
    * segment_text `string`: A description of the [segment](http://kb.mailchimp.com/segments/how-to-use-groups-and-segments?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) used for the campaign. Formatted as a string marked up with HTML.
    * recipient_count `integer`: Count of the recipients on the associated list. Formatted as an integer.
    * segment_opts [SegmentationOptions](#segmentationoptions)
  * settings `object`: The settings for your campaign, including subject, from name, reply-to address, and more.
    * subject_line `string`: The subject line for the campaign.
    * preview_text `string`: The preview text for the campaign.
    * title `string`: The title of the campaign.
    * from_name `string`: The 'from' name on the campaign (not an email address).
    * reply_to `string`: The reply-to email address for the campaign.
    * use_conversation `boolean`: Use MailChimp Conversation feature to manage out-of-office replies.
    * to_name `string`: The campaign's custom 'To' name. Typically the first name [merge field](http://kb.mailchimp.com/merge-tags/using/getting-started-with-merge-tags?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
    * folder_id `string`: If the campaign is listed in a folder, the id for that folder.
    * authenticate `boolean`: Whether MailChimp [authenticated](http://kb.mailchimp.com/delivery/deliverability-research/set-up-mailchimp-authentication?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) the campaign. Defaults to `true`.
    * auto_footer `boolean`: Automatically append MailChimp's [default footer](http://kb.mailchimp.com/campaigns/design/theres-a-gray-footer-added-to-my-campaign?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) to the campaign.
    * inline_css `boolean`: Automatically inline the CSS included with the campaign content.
    * auto_tweet `boolean`: Automatically tweet a link to the [campaign archive](http://kb.mailchimp.com/campaigns/archives/set-up-your-campaign-archive?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) page when the campaign is sent.
    * auto_fb_post `array`: An array of [Facebook](http://kb.mailchimp.com/integrations/facebook/integrate-facebook-with-mailchimp?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) page ids to auto-post to.
      * items `string`
    * fb_comments `boolean`: Allows Facebook comments on the campaign (also force-enables the Campaign Archive toolbar). Defaults to `true`.
    * timewarp `boolean`: Send this campaign using [Timewarp](http://kb.mailchimp.com/campaigns/confirmation-and-sending/use-timewarp-to-optimize-sending-by-time-zone?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
    * template_id `integer`: The id for the template used in this campaign.
    * drag_and_drop `boolean`: Whether the campaign uses the drag-and-drop editor.
  * variate_settings `object`: The settings specific to A/B test campaigns.
    * winning_combination_id `string`: ID for the winning combination.
    * winning_campaign_id `string`: ID of the campaign that was sent to the remaining recipients based on the winning combination.
    * winner_criteria `string` (values: opens, clicks, manual, total_revenue): The combination that performs the best. This may be determined automatically by click rate, open rate, or total revenue—or you may choose manually based on the reporting data you find the most valuable. For Multivariate Campaigns testing send_time, winner_criteria is ignored. For Multivariate Campaigns with 'manual' as the winner_criteria, the winner must be chosen in the MailChimp web application.
    * wait_time `integer`: The number of minutes to wait before choosing the winning campaign. The value of wait_time must be greater than 0 and in whole hours, specified in minutes.
    * test_size `integer`: The percentage of recipients to send the test combinations to, must be a value between 10 and 100.
    * subject_lines `array`: The possible subject lines to test. If no subject lines are provided, settings.subject_line will be used.
      * items `string`
    * send_times `array`: The possible send times to test. The times provided should be in the format YYYY-MM-DD HH:MM:SS. If send_times are provided to test, the test_size will be set to 100% and winner_criteria will be ignored.
      * items `string`
    * from_names `array`: The possible from names. The number of from_names provided must match the number of reply_to_addresses. If no from_names are provided, settings.from_name will be used.
      * items `string`
    * reply_to_addresses `array`: The possible reply-to addresses. The number of reply_to_addresses provided must match the number of from_names. If no reply_to_addresses are provided, settings.reply_to will be used.
      * items `string`
    * contents `array`: Descriptions of possible email contents. To set campaign contents, make a PUT request to /campaigns/{campaign_id}/content with the field 'variate_contents'.
      * items `string`
    * combinations `array`: Combinations of possible variables used to build emails.
      * items `object`
        * id `string`: Unique ID for the combination.
        * subject_line `integer`: The index of `variate_settings.subject_lines` used.
        * send_time `integer`: The index of `variate_settings.send_times` used.
        * from_name `integer`: The index of `variate_settings.from_names` used.
        * reply_to `integer`: The index of `variate_settings.reply_to_addresses` used.
        * content_description `integer`: The index of `variate_settings.contents` used.
        * recipients `integer`: The number of recipients for this combination.
  * tracking `object`: The tracking options for a campaign.
    * opens `boolean`: Whether to [track opens](http://kb.mailchimp.com/reports/about-open-tracking?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs). Defaults to `true`. Cannot be set to false for variate campaigns.
    * html_clicks `boolean`: Whether to [track clicks](http://kb.mailchimp.com/reports/about-click-tracking?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) in the HTML version of the campaign. Defaults to `true`. Cannot be set to false for variate campaigns.
    * text_clicks `boolean`: Whether to [track clicks](http://kb.mailchimp.com/reports/about-click-tracking?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) in the plain-text version of the campaign. Defaults to `true`. Cannot be set to false for variate campaigns.
    * goal_tracking `boolean`: Whether to enable [Goal](http://kb.mailchimp.com/integrations/other-integrations/integrate-goal-with-mailchimp?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) tracking.
    * ecomm360 `boolean`: Whether to enable [eCommerce360](http://kb.mailchimp.com/integrations/other-integrations/about-ecommerce360?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) tracking.
    * google_analytics `string`: The custom slug for [Google Analytics](http://kb.mailchimp.com/integrations/other-integrations/integrate-google-analytics-with-mailchimp?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) tracking (max of 50 bytes).
    * clicktale `string`: The custom slug for [ClickTale](http://kb.mailchimp.com/integrations/other-integrations/additional-tracking-options-for-campaigns?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs#Click-Tale) tracking (max of 50 bytes).
    * salesforce `object`: Salesforce tracking options for a campaign. Must be using MailChimp's built-in [Salesforce integration](http://kb.mailchimp.com/integrations/other-integrations/integrate-salesforce-with-mailchimp?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
      * campaign `boolean`: Create a campaign in a connected Salesforce account.
      * notes `boolean`: Update contact notes for a campaign based on subscriber email addresses.
    * capsule `object`: Capsule tracking options for a campaign. Must be using MailChimp's built-in Capsule integration.
      * notes `boolean`: Update contact notes for a campaign based on subscriber email addresses.
  * rss_opts `object`: [RSS](http://kb.mailchimp.com/campaigns/rss-in-campaigns/create-an-rss-campaign?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) options for a campaign.
    * feed_url `string`: The URL for the RSS feed.
    * frequency `string` (values: daily, weekly, monthly): The frequency of the RSS Campaign.
    * schedule `object`: The schedule for sending the RSS Campaign.
      * hour `integer`: The hour to send the campaign in local time. Acceptable hours are 0-23. For example, '4' would be 4am in [your account's default time zone](http://kb.mailchimp.com/accounts/account-setup/how-to-set-account-defaults?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
      * daily_send `object`: The days of the week to send a daily RSS Campaign.
        * sunday `boolean`: Sends the daily RSS Campaign on Sundays.
        * monday `boolean`: Sends the daily RSS Campaign on Mondays.
        * tuesday `boolean`: Sends the daily RSS Campaign on Tuesdays.
        * wednesday `boolean`: Sends the daily RSS Campaign on Wednesdays.
        * thursday `boolean`: Sends the daily RSS Campaign on Thursdays.
        * friday `boolean`: Sends the daily RSS Campaign on Fridays.
        * saturday `boolean`: Sends the daily RSS Campaign on Saturdays.
      * weekly_send_day `string` (values: sunday, monday, tuesday, wednesday, thursday, friday, saturday): The day of the week to send a weekly RSS Campaign.
      * monthly_send_date `number`: The day of the month to send a monthly RSS Campaign. Acceptable days are 0-31, where '0' is always the last day of a month. Months with fewer than the selected number of days will not have an RSS campaign sent out that day. For example, RSS Campaigns set to send on the 30th will not go out in February.
    * last_sent `string`: The date the campaign was last sent.
    * constrain_rss_img `boolean`: Whether to add CSS to images in the RSS feed to constrain their width in campaigns.
  * ab_split_opts `object`: [A/B Testing](http://kb.mailchimp.com/campaigns/ab/about-ab-testing-campaigns?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) options for a campaign.
    * split_test `string` (values: subject, from_name, schedule): The type of AB split to run.
    * pick_winner `string` (values: opens, clicks, manual): How we should evaluate a winner. Based on 'opens', 'clicks', or 'manual'.
    * wait_units `string` (values: hours, days): How unit of time for measuring the winner ('hours' or 'days'). This cannot be changed after a campaign is sent.
    * wait_time `integer`: The amount of time to wait before picking a winner. This cannot be changed after a campaign is sent.
    * split_size `integer`: The size of the split groups. Campaigns split based on 'schedule' are forced to have a 50/50 split. Valid split integers are between 1-50.
    * from_name_a `string`: For campaigns split on 'From Name', the name for Group A.
    * from_name_b `string`: For campaigns split on 'From Name', the name for Group B.
    * reply_email_a `string`: For campaigns split on 'From Name', the reply-to address for Group A.
    * reply_email_b `string`: For campaigns split on 'From Name', the reply-to address for Group B.
    * subject_a `string`: For campaigns split on 'Subject Line', the subject line for Group A.
    * subject_b `string`: For campaigns split on 'Subject Line', the subject line for Group B.
    * send_time_a `string`: The send time for Group A.
    * send_time_b `string`: The send time for Group B.
    * send_time_winner `string`: The send time for the winning version.
  * social_card `object`: The preview for the campaign, rendered by social networks like Facebook and Twitter. [Learn more](http://kb.mailchimp.com/campaigns/previews-and-tests/set-up-social-cards?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
    * image_url `string`: The url for the header image for the card.
    * description `string`: A short summary of the campaign to display.
    * title `string`: The title for the card. Typically the subject line of the campaign.
  * report_summary `object`: For sent campaigns, a summary of opens, clicks, and e-commerce data.
    * opens `integer`: The total number of opens for a campaign.
    * unique_opens `integer`: The number of unique opens.
    * open_rate `number`: The number of unique opens divided by the total number of successful deliveries.
    * clicks `integer`: The total number of clicks for an campaign.
    * subscriber_clicks `integer`: The number of unique clicks.
    * click_rate `number`: The number of unique clicks divided by the total number of successful deliveries.
    * ecommerce `object`: E-Commerce stats for a campaign.
      * total_orders `integer`: The total orders for a campaign.
      * total_spent `number`: The total spent for a campaign. Calculated as the sum of all order totals with no deductions.
      * total_revenue `number`: The total revenue for a campaign. Calculated as the sum of all order totals minus shipping and tax totals.
  * delivery_status [DeliveryStatus](#deliverystatus)
  * _links [HATEOASLinks](#hateoaslinks)

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

#### Input
* input `object`
  * campaign_id **required** `string`: The unique id for the campaign.
  * body **required** `object`: A summary of an individual campaign's settings and content.
    * recipients `object`: List settings for the campaign.
      * list_id **required** `string`: The unique list id.
      * segment_opts `object`: An object representing all segmentation options. Update an existing campaign with an empty `segment_opts` object to remove any segments from that campaign's recipient settings.
        * saved_segment_id `integer`: The id for an existing saved segment. To remove a saved segment from the campaign, you can set this to 0 and/or change the match and conditions. If given a non-zero number, the campaign will be updated to use the given saved segment, ignoring the provided match and conditions.
        * match `string` (values: any, all): Segment match type.
        * conditions `array`: Segment match conditions.
          * items [SegmentCondition](#segmentcondition)
    * settings **required** `object`: The settings for your campaign, including subject, from name, reply-to address, and more.
      * subject_line **required** `string`: The subject line for the campaign.
      * preview_text `string`: The preview text for the campaign.
      * title `string`: The title of the campaign.
      * from_name **required** `string`: The 'from' name on the campaign (not an email address).
      * reply_to **required** `string`: The reply-to email address for the campaign.
      * use_conversation `boolean`: Use MailChimp Conversation feature to manage out-of-office replies.
      * to_name `string`: The campaign's custom 'To' name. Typically the first name [merge field](http://kb.mailchimp.com/merge-tags/using/getting-started-with-merge-tags?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
      * folder_id `string`: If the campaign is listed in a folder, the id for that folder.
      * authenticate `boolean`: Whether MailChimp [authenticated](http://kb.mailchimp.com/delivery/deliverability-research/set-up-mailchimp-authentication?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) the campaign. Defaults to `true`.
      * auto_footer `boolean`: Automatically append MailChimp's [default footer](http://kb.mailchimp.com/campaigns/design/theres-a-gray-footer-added-to-my-campaign?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) to the campaign.
      * inline_css `boolean`: Automatically inline the CSS included with the campaign content.
      * auto_tweet `boolean`: Automatically tweet a link to the [campaign archive](http://kb.mailchimp.com/campaigns/archives/set-up-your-campaign-archive?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) page when the campaign is sent.
      * auto_fb_post `array`: An array of [Facebook](http://kb.mailchimp.com/integrations/facebook/integrate-facebook-with-mailchimp?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) page ids to auto-post to.
        * items `string`
      * fb_comments `boolean`: Allows Facebook comments on the campaign (also force-enables the Campaign Archive toolbar). Defaults to `true`.
      * template_id `integer`: The id of the template to use.
    * variate_settings `object`: The settings specific to A/B test campaigns.
      * winner_criteria **required** `string` (values: opens, clicks, manual, total_revenue): The combination that performs the best. This may be determined automatically by click rate, open rate, or total revenue—or you may choose manually based on the reporting data you find the most valuable. For Multivariate Campaigns testing send_time, winner_criteria is ignored. For Multivariate Campaigns with 'manual' as the winner_criteria, the winner must be chosen in the MailChimp web application.
      * wait_time `integer`: The number of minutes to wait before choosing the winning campaign. The value of wait_time must be greater than 0 and in whole hours, specified in minutes.
      * test_size `integer`: The percentage of recipients to send the test combinations to, must be a value between 10 and 100.
      * subject_lines `array`: The possible subject lines to test. If no subject lines are provided, settings.subject_line will be used.
        * items `string`
      * send_times `array`: The possible send times to test. The times provided should be in the format YYYY-MM-DD HH:MM:SS. If send_times are provided to test, the test_size will be set to 100% and winner_criteria will be ignored.
        * items `string`
      * from_names `array`: The possible from names. The number of from_names provided must match the number of reply_to_addresses. If no from_names are provided, settings.from_name will be used.
        * items `string`
      * reply_to_addresses `array`: The possible reply-to addresses. The number of reply_to_addresses provided must match the number of from_names. If no reply_to_addresses are provided, settings.reply_to will be used.
        * items `string`
      * combinations `array`: Combinations of possible variables used to build emails.
        * items `object`
          * id `string`: Unique ID for the combination.
          * subject_line `integer`: The index of `variate_settings.subject_lines` used.
          * send_time `integer`: The index of `variate_settings.send_times` used.
          * from_name `integer`: The index of `variate_settings.from_names` used.
          * reply_to `integer`: The index of `variate_settings.reply_to_addresses` used.
          * content_description `integer`: The index of `variate_settings.contents` used.
          * recipients `integer`: The number of recipients for this combination.
    * tracking `object`: The tracking options for a campaign.
      * opens `boolean`: Whether to [track opens](http://kb.mailchimp.com/reports/about-open-tracking?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs). Defaults to `true`. Cannot be set to false for variate campaigns.
      * html_clicks `boolean`: Whether to [track clicks](http://kb.mailchimp.com/reports/about-click-tracking?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) in the HTML version of the campaign. Defaults to `true`. Cannot be set to false for variate campaigns.
      * text_clicks `boolean`: Whether to [track clicks](http://kb.mailchimp.com/reports/about-click-tracking?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) in the plain-text version of the campaign. Defaults to `true`. Cannot be set to false for variate campaigns.
      * goal_tracking `boolean`: Whether to enable [Goal](http://kb.mailchimp.com/integrations/other-integrations/integrate-goal-with-mailchimp?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) tracking.
      * ecomm360 `boolean`: Whether to enable [eCommerce360](http://kb.mailchimp.com/integrations/other-integrations/about-ecommerce360?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) tracking.
      * google_analytics `string`: The custom slug for [Google Analytics](http://kb.mailchimp.com/integrations/other-integrations/integrate-google-analytics-with-mailchimp?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) tracking (max of 50 bytes).
      * clicktale `string`: The custom slug for [ClickTale](http://kb.mailchimp.com/integrations/other-integrations/additional-tracking-options-for-campaigns?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs#Click-Tale) tracking (max of 50 bytes).
      * salesforce `object`: Salesforce tracking options for a campaign. Must be using MailChimp's built-in [Salesforce integration](http://kb.mailchimp.com/integrations/other-integrations/integrate-salesforce-with-mailchimp?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
        * campaign `boolean`: Create a campaign in a connected Salesforce account.
        * notes `boolean`: Update contact notes for a campaign based on subscriber email addresses.
      * capsule `object`: Capsule tracking options for a campaign. Must be using MailChimp's built-in Capsule integration.
        * notes `boolean`: Update contact notes for a campaign based on subscriber email addresses.
    * rss_opts `object`: [RSS](http://kb.mailchimp.com/campaigns/rss-in-campaigns/create-an-rss-campaign?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) options for a campaign.
      * feed_url **required** `string`: The URL for the RSS feed.
      * frequency **required** `string` (values: daily, weekly, monthly): The frequency of the RSS Campaign.
      * schedule `object`: The schedule for sending the RSS Campaign.
        * hour `integer`: The hour to send the campaign in local time. Acceptable hours are 0-23. For example, '4' would be 4am in [your account's default time zone](http://kb.mailchimp.com/accounts/account-setup/how-to-set-account-defaults?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
        * daily_send `object`: The days of the week to send a daily RSS Campaign.
          * sunday `boolean`: Sends the daily RSS Campaign on Sundays.
          * monday `boolean`: Sends the daily RSS Campaign on Mondays.
          * tuesday `boolean`: Sends the daily RSS Campaign on Tuesdays.
          * wednesday `boolean`: Sends the daily RSS Campaign on Wednesdays.
          * thursday `boolean`: Sends the daily RSS Campaign on Thursdays.
          * friday `boolean`: Sends the daily RSS Campaign on Fridays.
          * saturday `boolean`: Sends the daily RSS Campaign on Saturdays.
        * weekly_send_day `string` (values: sunday, monday, tuesday, wednesday, thursday, friday, saturday): The day of the week to send a weekly RSS Campaign.
        * monthly_send_date `number`: The day of the month to send a monthly RSS Campaign. Acceptable days are 0-31, where '0' is always the last day of a month. Months with fewer than the selected number of days will not have an RSS campaign sent out that day. For example, RSS Campaigns set to send on the 30th will not go out in February.
      * constrain_rss_img `boolean`: Whether to add CSS to images in the RSS feed to constrain their width in campaigns.
    * ab_split_opts `object`: [A/B Testing](http://kb.mailchimp.com/campaigns/ab/about-ab-testing-campaigns?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) options for a campaign.
      * split_test `string` (values: subject, from_name, schedule): The type of AB split to run.
      * pick_winner `string` (values: opens, clicks, manual): How we should evaluate a winner. Based on 'opens', 'clicks', or 'manual'.
      * wait_units `string` (values: hours, days): How unit of time for measuring the winner ('hours' or 'days'). This cannot be changed after a campaign is sent.
      * wait_time `integer`: The amount of time to wait before picking a winner. This cannot be changed after a campaign is sent.
      * split_size `integer`: The size of the split groups. Campaigns split based on 'schedule' are forced to have a 50/50 split. Valid split integers are between 1-50.
      * from_name_a `string`: For campaigns split on 'From Name', the name for Group A.
      * from_name_b `string`: For campaigns split on 'From Name', the name for Group B.
      * reply_email_a `string`: For campaigns split on 'From Name', the reply-to address for Group A.
      * reply_email_b `string`: For campaigns split on 'From Name', the reply-to address for Group B.
      * subject_a `string`: For campaigns split on 'Subject Line', the subject line for Group A.
      * subject_b `string`: For campaigns split on 'Subject Line', the subject line for Group B.
      * send_time_a `string`: The send time for Group A.
      * send_time_b `string`: The send time for Group B.
      * send_time_winner `string`: The send time for the winning version.
    * social_card `object`: The preview for the campaign, rendered by social networks like Facebook and Twitter. [Learn more](http://kb.mailchimp.com/campaigns/previews-and-tests/set-up-social-cards?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
      * image_url `string`: The url for the header image for the card.
      * description `string`: A short summary of the campaign to display.
      * title `string`: The title for the card. Typically the subject line of the campaign.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: A summary of an individual campaign's settings and content.
  * id `string`: A string that uniquely identifies this campaign.
  * web_id `integer`: The ID used in the MailChimp web application. View this campaign in your MailChimp account at `https://{dc}.admin.mailchimp.com/campaigns/show/?id={web_id}`.
  * type [CampaignType](#campaigntype)
  * create_time `string`: The date and time the campaign was created.
  * archive_url `string`: The link to the campaign's archive version.
  * long_archive_url `string`: The original link to the campaign's archive version.
  * status [CampaignStatus](#campaignstatus)
  * emails_sent `integer`: The total number of emails sent for this campaign.
  * send_time `string`: The date and time a campaign was sent.
  * content_type `string`: How the campaign's content is put together ('template', 'drag_and_drop', 'html', 'url').
  * needs_block_refresh `boolean`: Determines if the campaign needs its blocks refreshed by opening the web-based campaign editor.
  * recipients `object`: List settings for the campaign.
    * list_id `string`: The unique list id.
    * list_name `string`: The name of the list.
    * segment_text `string`: A description of the [segment](http://kb.mailchimp.com/segments/how-to-use-groups-and-segments?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) used for the campaign. Formatted as a string marked up with HTML.
    * recipient_count `integer`: Count of the recipients on the associated list. Formatted as an integer.
    * segment_opts [SegmentationOptions](#segmentationoptions)
  * settings `object`: The settings for your campaign, including subject, from name, reply-to address, and more.
    * subject_line `string`: The subject line for the campaign.
    * preview_text `string`: The preview text for the campaign.
    * title `string`: The title of the campaign.
    * from_name `string`: The 'from' name on the campaign (not an email address).
    * reply_to `string`: The reply-to email address for the campaign.
    * use_conversation `boolean`: Use MailChimp Conversation feature to manage out-of-office replies.
    * to_name `string`: The campaign's custom 'To' name. Typically the first name [merge field](http://kb.mailchimp.com/merge-tags/using/getting-started-with-merge-tags?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
    * folder_id `string`: If the campaign is listed in a folder, the id for that folder.
    * authenticate `boolean`: Whether MailChimp [authenticated](http://kb.mailchimp.com/delivery/deliverability-research/set-up-mailchimp-authentication?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) the campaign. Defaults to `true`.
    * auto_footer `boolean`: Automatically append MailChimp's [default footer](http://kb.mailchimp.com/campaigns/design/theres-a-gray-footer-added-to-my-campaign?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) to the campaign.
    * inline_css `boolean`: Automatically inline the CSS included with the campaign content.
    * auto_tweet `boolean`: Automatically tweet a link to the [campaign archive](http://kb.mailchimp.com/campaigns/archives/set-up-your-campaign-archive?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) page when the campaign is sent.
    * auto_fb_post `array`: An array of [Facebook](http://kb.mailchimp.com/integrations/facebook/integrate-facebook-with-mailchimp?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) page ids to auto-post to.
      * items `string`
    * fb_comments `boolean`: Allows Facebook comments on the campaign (also force-enables the Campaign Archive toolbar). Defaults to `true`.
    * timewarp `boolean`: Send this campaign using [Timewarp](http://kb.mailchimp.com/campaigns/confirmation-and-sending/use-timewarp-to-optimize-sending-by-time-zone?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
    * template_id `integer`: The id for the template used in this campaign.
    * drag_and_drop `boolean`: Whether the campaign uses the drag-and-drop editor.
  * variate_settings `object`: The settings specific to A/B test campaigns.
    * winning_combination_id `string`: ID for the winning combination.
    * winning_campaign_id `string`: ID of the campaign that was sent to the remaining recipients based on the winning combination.
    * winner_criteria `string` (values: opens, clicks, manual, total_revenue): The combination that performs the best. This may be determined automatically by click rate, open rate, or total revenue—or you may choose manually based on the reporting data you find the most valuable. For Multivariate Campaigns testing send_time, winner_criteria is ignored. For Multivariate Campaigns with 'manual' as the winner_criteria, the winner must be chosen in the MailChimp web application.
    * wait_time `integer`: The number of minutes to wait before choosing the winning campaign. The value of wait_time must be greater than 0 and in whole hours, specified in minutes.
    * test_size `integer`: The percentage of recipients to send the test combinations to, must be a value between 10 and 100.
    * subject_lines `array`: The possible subject lines to test. If no subject lines are provided, settings.subject_line will be used.
      * items `string`
    * send_times `array`: The possible send times to test. The times provided should be in the format YYYY-MM-DD HH:MM:SS. If send_times are provided to test, the test_size will be set to 100% and winner_criteria will be ignored.
      * items `string`
    * from_names `array`: The possible from names. The number of from_names provided must match the number of reply_to_addresses. If no from_names are provided, settings.from_name will be used.
      * items `string`
    * reply_to_addresses `array`: The possible reply-to addresses. The number of reply_to_addresses provided must match the number of from_names. If no reply_to_addresses are provided, settings.reply_to will be used.
      * items `string`
    * contents `array`: Descriptions of possible email contents. To set campaign contents, make a PUT request to /campaigns/{campaign_id}/content with the field 'variate_contents'.
      * items `string`
    * combinations `array`: Combinations of possible variables used to build emails.
      * items `object`
        * id `string`: Unique ID for the combination.
        * subject_line `integer`: The index of `variate_settings.subject_lines` used.
        * send_time `integer`: The index of `variate_settings.send_times` used.
        * from_name `integer`: The index of `variate_settings.from_names` used.
        * reply_to `integer`: The index of `variate_settings.reply_to_addresses` used.
        * content_description `integer`: The index of `variate_settings.contents` used.
        * recipients `integer`: The number of recipients for this combination.
  * tracking `object`: The tracking options for a campaign.
    * opens `boolean`: Whether to [track opens](http://kb.mailchimp.com/reports/about-open-tracking?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs). Defaults to `true`. Cannot be set to false for variate campaigns.
    * html_clicks `boolean`: Whether to [track clicks](http://kb.mailchimp.com/reports/about-click-tracking?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) in the HTML version of the campaign. Defaults to `true`. Cannot be set to false for variate campaigns.
    * text_clicks `boolean`: Whether to [track clicks](http://kb.mailchimp.com/reports/about-click-tracking?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) in the plain-text version of the campaign. Defaults to `true`. Cannot be set to false for variate campaigns.
    * goal_tracking `boolean`: Whether to enable [Goal](http://kb.mailchimp.com/integrations/other-integrations/integrate-goal-with-mailchimp?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) tracking.
    * ecomm360 `boolean`: Whether to enable [eCommerce360](http://kb.mailchimp.com/integrations/other-integrations/about-ecommerce360?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) tracking.
    * google_analytics `string`: The custom slug for [Google Analytics](http://kb.mailchimp.com/integrations/other-integrations/integrate-google-analytics-with-mailchimp?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) tracking (max of 50 bytes).
    * clicktale `string`: The custom slug for [ClickTale](http://kb.mailchimp.com/integrations/other-integrations/additional-tracking-options-for-campaigns?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs#Click-Tale) tracking (max of 50 bytes).
    * salesforce `object`: Salesforce tracking options for a campaign. Must be using MailChimp's built-in [Salesforce integration](http://kb.mailchimp.com/integrations/other-integrations/integrate-salesforce-with-mailchimp?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
      * campaign `boolean`: Create a campaign in a connected Salesforce account.
      * notes `boolean`: Update contact notes for a campaign based on subscriber email addresses.
    * capsule `object`: Capsule tracking options for a campaign. Must be using MailChimp's built-in Capsule integration.
      * notes `boolean`: Update contact notes for a campaign based on subscriber email addresses.
  * rss_opts `object`: [RSS](http://kb.mailchimp.com/campaigns/rss-in-campaigns/create-an-rss-campaign?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) options for a campaign.
    * feed_url `string`: The URL for the RSS feed.
    * frequency `string` (values: daily, weekly, monthly): The frequency of the RSS Campaign.
    * schedule `object`: The schedule for sending the RSS Campaign.
      * hour `integer`: The hour to send the campaign in local time. Acceptable hours are 0-23. For example, '4' would be 4am in [your account's default time zone](http://kb.mailchimp.com/accounts/account-setup/how-to-set-account-defaults?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
      * daily_send `object`: The days of the week to send a daily RSS Campaign.
        * sunday `boolean`: Sends the daily RSS Campaign on Sundays.
        * monday `boolean`: Sends the daily RSS Campaign on Mondays.
        * tuesday `boolean`: Sends the daily RSS Campaign on Tuesdays.
        * wednesday `boolean`: Sends the daily RSS Campaign on Wednesdays.
        * thursday `boolean`: Sends the daily RSS Campaign on Thursdays.
        * friday `boolean`: Sends the daily RSS Campaign on Fridays.
        * saturday `boolean`: Sends the daily RSS Campaign on Saturdays.
      * weekly_send_day `string` (values: sunday, monday, tuesday, wednesday, thursday, friday, saturday): The day of the week to send a weekly RSS Campaign.
      * monthly_send_date `number`: The day of the month to send a monthly RSS Campaign. Acceptable days are 0-31, where '0' is always the last day of a month. Months with fewer than the selected number of days will not have an RSS campaign sent out that day. For example, RSS Campaigns set to send on the 30th will not go out in February.
    * last_sent `string`: The date the campaign was last sent.
    * constrain_rss_img `boolean`: Whether to add CSS to images in the RSS feed to constrain their width in campaigns.
  * ab_split_opts `object`: [A/B Testing](http://kb.mailchimp.com/campaigns/ab/about-ab-testing-campaigns?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) options for a campaign.
    * split_test `string` (values: subject, from_name, schedule): The type of AB split to run.
    * pick_winner `string` (values: opens, clicks, manual): How we should evaluate a winner. Based on 'opens', 'clicks', or 'manual'.
    * wait_units `string` (values: hours, days): How unit of time for measuring the winner ('hours' or 'days'). This cannot be changed after a campaign is sent.
    * wait_time `integer`: The amount of time to wait before picking a winner. This cannot be changed after a campaign is sent.
    * split_size `integer`: The size of the split groups. Campaigns split based on 'schedule' are forced to have a 50/50 split. Valid split integers are between 1-50.
    * from_name_a `string`: For campaigns split on 'From Name', the name for Group A.
    * from_name_b `string`: For campaigns split on 'From Name', the name for Group B.
    * reply_email_a `string`: For campaigns split on 'From Name', the reply-to address for Group A.
    * reply_email_b `string`: For campaigns split on 'From Name', the reply-to address for Group B.
    * subject_a `string`: For campaigns split on 'Subject Line', the subject line for Group A.
    * subject_b `string`: For campaigns split on 'Subject Line', the subject line for Group B.
    * send_time_a `string`: The send time for Group A.
    * send_time_b `string`: The send time for Group B.
    * send_time_winner `string`: The send time for the winning version.
  * social_card `object`: The preview for the campaign, rendered by social networks like Facebook and Twitter. [Learn more](http://kb.mailchimp.com/campaigns/previews-and-tests/set-up-social-cards?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
    * image_url `string`: The url for the header image for the card.
    * description `string`: A short summary of the campaign to display.
    * title `string`: The title for the card. Typically the subject line of the campaign.
  * report_summary `object`: For sent campaigns, a summary of opens, clicks, and e-commerce data.
    * opens `integer`: The total number of opens for a campaign.
    * unique_opens `integer`: The number of unique opens.
    * open_rate `number`: The number of unique opens divided by the total number of successful deliveries.
    * clicks `integer`: The total number of clicks for an campaign.
    * subscriber_clicks `integer`: The number of unique clicks.
    * click_rate `number`: The number of unique clicks divided by the total number of successful deliveries.
    * ecommerce `object`: E-Commerce stats for a campaign.
      * total_orders `integer`: The total orders for a campaign.
      * total_spent `number`: The total spent for a campaign. Calculated as the sum of all order totals with no deductions.
      * total_revenue `number`: The total revenue for a campaign. Calculated as the sum of all order totals minus shipping and tax totals.
  * delivery_status [DeliveryStatus](#deliverystatus)
  * _links [HATEOASLinks](#hateoaslinks)

### deleteCampaignsId
Remove a campaign from your MailChimp account.


```js
mailchimp.deleteCampaignsId({
  "campaign_id": ""
}, context)
```

#### Input
* input `object`
  * campaign_id **required** `string`: The unique id for the campaign.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
*Output schema unknown*

### postCampaignsIdActionsCancelSend
Cancel a Regular or Plain-Text Campaign after you send, before all of your recipients receive it. This feature is included with [MailChimp Pro](http://mailchimp.com/pro?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).


```js
mailchimp.postCampaignsIdActionsCancelSend({
  "campaign_id": ""
}, context)
```

#### Input
* input `object`
  * campaign_id **required** `string`: The unique id for the campaign.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
*Output schema unknown*

### postCampaignsIdActionsReplicate
[Replicate a campaign](http://kb.mailchimp.com/campaigns/ways-to-build/replicate-a-campaign-or-automation-workflow?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) in saved or send status.


```js
mailchimp.postCampaignsIdActionsReplicate({
  "campaign_id": ""
}, context)
```

#### Input
* input `object`
  * campaign_id **required** `string`: The unique id for the campaign.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output [Campaign](#campaign)

### postCampaignsIdActionsSend
Send a MailChimp campaign. For [RSS Campaigns](http://kb.mailchimp.com/campaigns/rss-in-campaigns/create-an-rss-campaign?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs), the campaign will send according to its schedule. All other campaigns will send immediately.


```js
mailchimp.postCampaignsIdActionsSend({
  "campaign_id": ""
}, context)
```

#### Input
* input `object`
  * campaign_id **required** `string`: The unique id for the campaign.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
*Output schema unknown*

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

#### Input
* input `object`
  * campaign_id **required** `string`: The unique id for the campaign.
  * body **required** `object`
    * schedule_time **required** `string`: The date and time in UTC to schedule the campaign for delivery. Campaigns may only be scheduled to send on the quarter-hour (:00, :15, :30, :45).
    * timewarp `boolean`: Choose whether the campaign should use [Timewarp](http://kb.mailchimp.com/campaigns/confirmation-and-sending/use-timewarp-to-optimize-sending-by-time-zone?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) when sending. Campaigns scheduled with Timewarp are localized based on the recipients' time zones. For example, a Timewarp campaign with a `schedule_time` of 13:00 will be sent to each recipient at 1:00pm in their local time. Cannot be set to `true` for campaigns using [Batch Delivery](http://kb.mailchimp.com/campaigns/confirmation-and-sending/schedule-batch-delivery?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
    * batch_delivery `object`: Choose whether the campaign should use [Batch Delivery](http://kb.mailchimp.com/campaigns/confirmation-and-sending/schedule-batch-delivery?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs). Cannot be set to `true` for campaigns using [Timewarp](http://kb.mailchimp.com/campaigns/confirmation-and-sending/use-timewarp-to-optimize-sending-by-time-zone?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
      * batch_delay **required** `integer`: The delay, in minutes, between batches.
      * batch_count **required** `integer`: The number of batches for the campaign send.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
*Output schema unknown*

### postCampaignsIdActionsUnschedule
[Unschedule](http://kb.mailchimp.com/campaigns/confirmation-and-sending/schedule-pause-or-send-a-campaign?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs#Pause-a-Scheduled-Campaign) a scheduled campaign that hasn't started sending.


```js
mailchimp.postCampaignsIdActionsUnschedule({
  "campaign_id": ""
}, context)
```

#### Input
* input `object`
  * campaign_id **required** `string`: The unique id for the campaign.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
*Output schema unknown*

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

#### Input
* input `object`
  * campaign_id **required** `string`: The unique id for the campaign.
  * body **required** `object`
    * test_emails **required** `array`: An array of email addresses to send the test email to.
    * send_type **required** `string` (values: html, plaintext): Choose the type of test email to send.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
*Output schema unknown*

### postCampaignsIdActionsPause
[Pause an RSS-Driven campaign](http://kb.mailchimp.com/campaigns/rss-in-campaigns/pause-or-reactivate-an-rss-driven-campaign?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).


```js
mailchimp.postCampaignsIdActionsPause({
  "campaign_id": ""
}, context)
```

#### Input
* input `object`
  * campaign_id **required** `string`: The unique id for the campaign.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
*Output schema unknown*

### postCampaignsIdActionsResume
[Resume an RSS-Driven campaign](http://kb.mailchimp.com/campaigns/rss-in-campaigns/pause-or-reactivate-an-rss-driven-campaign?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).


```js
mailchimp.postCampaignsIdActionsResume({
  "campaign_id": ""
}, context)
```

#### Input
* input `object`
  * campaign_id **required** `string`: The unique id for the campaign.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
*Output schema unknown*

### getCampaignsIdContent
Get the the HTML and plain-text content for a campaign.


```js
mailchimp.getCampaignsIdContent({
  "campaign_id": ""
}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * campaign_id **required** `string`: The unique id for the campaign.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: The HTML and plain-text content for a campaign.
  * variate_contents `array`: Content options for multivariate campaigns.
    * items `object`
      * content_label `string`: Label used to identify the content option.
      * plain_text `string`: The plain-text portion of the campaign. If left unspecified, we'll generate this automatically.
      * html `string`: The raw HTML for the campaign.
  * plain_text `string`: The plain-text portion of the campaign. If left unspecified, we'll generate this automatically.
  * html `string`: The raw HTML for the campaign.
  * archive_html `string`: The Archive HTML for the campaign.
  * _links [HATEOASLinks](#hateoaslinks)

### putCampaignsIdContent
Set the content for a campaign.


```js
mailchimp.putCampaignsIdContent({
  "campaign_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * campaign_id **required** `string`: The unique id for the campaign.
  * body **required** `object`: The HTML and plain-text content for a campaign
    * plain_text `string`: The plain-text portion of the campaign. If left unspecified, we'll generate this automatically.
    * html `string`: The raw HTML for the campaign.
    * url `string`: When importing a campaign, the URL where the HTML lives.
    * template `object`: Use this template to generate the HTML content of the campaign
      * id **required** `integer`: The id of the template to use.
      * sections `object`: Content for the sections of the template. Each key should be the unique [mc:edit area](http://kb.mailchimp.com/templates/code/create-editable-content-areas-with-mailchimps-template-language?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) name from the template.
    * archive `object`: Available when uploading an archive to create campaign content. The archive should include all campaign content and images. [Learn more](http://kb.mailchimp.com/campaigns/ways-to-build/import-a-zip-file-to-create-a-campaign?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
      * archive_content **required** `string`: The base64-encoded representation of the archive file.
      * archive_type `string` (values: zip, tar.gz, tar.bz2, tar, tgz, tbz): The type of encoded file. Defaults to zip.
    * variate_contents `array`: Content options for [Multivariate Campaigns](http://kb.mailchimp.com/campaigns/multivariate/about-multivariate-campaigns?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs). Each content option must provide HTML content and may optionally provide plain text. For campaigns not testing content, only one object should be provided.
      * items `object`
        * content_label **required** `string`: The label used to identify the content option.
        * plain_text `string`: The plain-text portion of the campaign. If left unspecified, we'll generate this automatically.
        * html `string`: The raw HTML for the campaign.
        * url `string`: When importing a campaign, the URL for the HTML.
        * template `object`: Use this template to generate the HTML content for the campaign.
          * id **required** `integer`: The id of the template to use.
          * sections `object`: Content for the sections of the template. Each key should be the unique [mc:edit area](http://kb.mailchimp.com/templates/code/create-editable-content-areas-with-mailchimps-template-language?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) name from the template.
        * archive `object`: Available when uploading an archive to create campaign content. The archive should include all campaign content and images. [Learn more](http://kb.mailchimp.com/campaigns/ways-to-build/import-a-zip-file-to-create-a-campaign?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
          * archive_content **required** `string`: The base64-encoded representation of the archive file.
          * archive_type `string` (values: zip, tar.gz, tar.bz2, tar, tgz, tbz): The type of encoded file. Defaults to zip.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: The HTML and plain-text content for a campaign.
  * variate_contents `array`: Content options for multivariate campaigns.
    * items `object`
      * content_label `string`: Label used to identify the content option.
      * plain_text `string`: The plain-text portion of the campaign. If left unspecified, we'll generate this automatically.
      * html `string`: The raw HTML for the campaign.
  * plain_text `string`: The plain-text portion of the campaign. If left unspecified, we'll generate this automatically.
  * html `string`: The raw HTML for the campaign.
  * archive_html `string`: The Archive HTML for the campaign.
  * _links [HATEOASLinks](#hateoaslinks)

### getCampaignsIdFeedback
Get team feedback while you're [working together on a MailChimp campaign](http://kb.mailchimp.com/campaigns/design/collaborate-on-campaigns?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).


```js
mailchimp.getCampaignsIdFeedback({
  "campaign_id": ""
}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * campaign_id **required** `string`: The unique id for the campaign.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: A summary of the comment feedback for a specific campaign.
  * feedback `array`: A collection of feedback items for a campaign.
    * items [CampaignFeedback](#campaignfeedback)
  * campaign_id `string`: The unique id for the campaign.
  * total_items [CollectionTotal](#collectiontotal)
  * _links [HATEOASLinks](#hateoaslinks)

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

#### Input
* input `object`
  * campaign_id **required** `string`: The unique id for the campaign.
  * body **required** `object`: A specific feedback message from a specific campaign.
    * block_id `integer`: The block id for the editable block that the feedback addresses.
    * message **required** `string`: The content of the feedback.
    * is_complete `boolean`: The status of feedback.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: A specific feedback message from a specific campaign.
  * feedback_id `integer`: The individual id for the feedback item.
  * parent_id `integer`: If a reply, the id of the parent feedback item.
  * block_id `integer`: The block id for the editable block that the feedback addresses.
  * message `string`: The content of the feedback.
  * is_complete `boolean`: The status of feedback.
  * created_by `string`: The login name of the user who created the feedback.
  * created_at `string`: The date and time the feedback item was created.
  * updated_at `string`: The date and time the feedback was last updated.
  * source `string` (values: api, email, sms, web, ios, android): The source of the feedback.
  * campaign_id `string`: The unique id for the campaign.
  * _links [HATEOASLinks](#hateoaslinks)

### getCampaignsIdFeedbackId
Get a specific feedback message from a campaign.


```js
mailchimp.getCampaignsIdFeedbackId({
  "campaign_id": "",
  "feedback_id": ""
}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * campaign_id **required** `string`: The unique id for the campaign.
  * feedback_id **required** `string`: The unique id for the feedback message.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: A specific feedback message from a specific campaign.
  * feedback_id `integer`: The individual id for the feedback item.
  * parent_id `integer`: If a reply, the id of the parent feedback item.
  * block_id `integer`: The block id for the editable block that the feedback addresses.
  * message `string`: The content of the feedback.
  * is_complete `boolean`: The status of feedback.
  * created_by `string`: The login name of the user who created the feedback.
  * created_at `string`: The date and time the feedback item was created.
  * updated_at `string`: The date and time the feedback was last updated.
  * source `string` (values: api, email, sms, web, ios, android): The source of the feedback.
  * campaign_id `string`: The unique id for the campaign.
  * _links [HATEOASLinks](#hateoaslinks)

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

#### Input
* input `object`
  * campaign_id **required** `string`: The unique id for the campaign.
  * feedback_id **required** `string`: The unique id for the feedback message.
  * body **required** `object`: A specific feedback message from a specific campaign.
    * block_id `integer`: The block id for the editable block that the feedback addresses.
    * message **required** `string`: The content of the feedback.
    * is_complete `boolean`: The status of feedback.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: A specific feedback message from a specific campaign.
  * feedback_id `integer`: The individual id for the feedback item.
  * parent_id `integer`: If a reply, the id of the parent feedback item.
  * block_id `integer`: The block id for the editable block that the feedback addresses.
  * message `string`: The content of the feedback.
  * is_complete `boolean`: The status of feedback.
  * created_by `string`: The login name of the user who created the feedback.
  * created_at `string`: The date and time the feedback item was created.
  * updated_at `string`: The date and time the feedback was last updated.
  * source `string` (values: api, email, sms, web, ios, android): The source of the feedback.
  * campaign_id `string`: The unique id for the campaign.
  * _links [HATEOASLinks](#hateoaslinks)

### deleteCampaignsIdFeedbackId
Remove a specific feedback message for a campaign.


```js
mailchimp.deleteCampaignsIdFeedbackId({}, context)
```

#### Input
* input `object`
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
*Output schema unknown*

### getCampaignsIdSendChecklist
Review the send checklist for a campaign, and resolve any issues before sending.


```js
mailchimp.getCampaignsIdSendChecklist({
  "campaign_id": ""
}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * campaign_id **required** `string`: The unique id for the campaign.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: The send checklist for the campaign.
  * is_ready `boolean`: Whether the campaign is ready to send.
  * items `array`: A list of feedback items to review before sending your campaign.
    * items `object`
      * type `string` (values: success, warning, error): The item type.
      * id `integer`: The ID for the specific item.
      * heading `string`: The heading for the specific item.
      * details `string`: Details about the specific feedback item.
  * _links [HATEOASLinks](#hateoaslinks)

### getConnectedSites
Get all connected sites in an account.


```js
mailchimp.getConnectedSites({}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * count `integer`: The number of records to return. [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **10**.
  * offset `integer`: The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **0**.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: A collection of connected sites in the account.
  * sites `array`: An array of objects, each representing a connected site.
    * items `object`: Information about a specific connected site.
      * foreign_id `string`: The unique identifier for the site.
      * store_id `string`: The unique identifier for the ecommerce store that's associated with the connected site (if any). The store_id for a specific connected site can't change.
      * platform `string`: The platform of the connected site.
      * domain `string`: The connected site domain.
      * site_script `object`: The script used to connect your site with MailChimp.
        * url `string`: The URL used for any integrations that offer built-in support for connected sites.
        * fragment `string`: A pre-built script that you can copy-and-paste into your site to integrate it with MailChimp.
      * created_at `string`: The date and time the connected site was created.
      * updated_at `string`: The date and time the connected site was last updated.
      * _links [HATEOASLinks](#hateoaslinks)
  * total_items [CollectionTotal](#collectiontotal)
  * _links [HATEOASLinks](#hateoaslinks)

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

#### Input
* input `object`
  * body **required** `object`: Information about a specific connected site.
    * foreign_id **required** `string`: The unique identifier for the site.
    * platform **required** `string`: The platform of the connected site.
    * domain **required** `string`: The connected site domain.
    * store_id `string`: The unique identifier for the ecommerce store to be associated with the connected site (if any).
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: Information about a specific connected site.
  * foreign_id `string`: The unique identifier for the site.
  * store_id `string`: The unique identifier for the ecommerce store that's associated with the connected site (if any). The store_id for a specific connected site can't change.
  * platform `string`: The platform of the connected site.
  * domain `string`: The connected site domain.
  * site_script `object`: The script used to connect your site with MailChimp.
    * url `string`: The URL used for any integrations that offer built-in support for connected sites.
    * fragment `string`: A pre-built script that you can copy-and-paste into your site to integrate it with MailChimp.
  * created_at `string`: The date and time the connected site was created.
  * updated_at `string`: The date and time the connected site was last updated.
  * _links [HATEOASLinks](#hateoaslinks)

### getConnectedSitesId
Get information about a specific connected site.


```js
mailchimp.getConnectedSitesId({
  "connected_site_id": ""
}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * connected_site_id **required** `string`: The unique identifier for the site.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: Information about a specific connected site.
  * foreign_id `string`: The unique identifier for the site.
  * store_id `string`: The unique identifier for the ecommerce store that's associated with the connected site (if any). The store_id for a specific connected site can't change.
  * platform `string`: The platform of the connected site.
  * domain `string`: The connected site domain.
  * site_script `object`: The script used to connect your site with MailChimp.
    * url `string`: The URL used for any integrations that offer built-in support for connected sites.
    * fragment `string`: A pre-built script that you can copy-and-paste into your site to integrate it with MailChimp.
  * created_at `string`: The date and time the connected site was created.
  * updated_at `string`: The date and time the connected site was last updated.
  * _links [HATEOASLinks](#hateoaslinks)

### deleteConnectedSitesId
Remove a connected site from your MailChimp account.


```js
mailchimp.deleteConnectedSitesId({
  "connected_site_id": ""
}, context)
```

#### Input
* input `object`
  * connected_site_id **required** `string`: The unique identifier for the site.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
*Output schema unknown*

### postConnectedSitesIdActionsVerifyScriptInstallation
Verify that the connected sites script has been installed, either via the script URL or fragment.


```js
mailchimp.postConnectedSitesIdActionsVerifyScriptInstallation({
  "connected_site_id": ""
}, context)
```

#### Input
* input `object`
  * connected_site_id **required** `string`: The unique identifier for the site.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
*Output schema unknown*

### getConversations
Get a list of conversations for the account.


```js
mailchimp.getConversations({}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * count `integer`: The number of records to return. [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **10**.
  * offset `integer`: The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **0**.
  * has_unread_messages `string` (values: true, false): Whether the conversation has any unread messages.
  * list_id `string`: The unique id for the list.
  * campaign_id `string`: The unique id for the campaign.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: A collection of this account's tracked conversations.
  * conversations `array`: A list of conversations.
    * items `object`: Details about an individual conversation. Conversation tracking is a feature available to paid accounts that lets you view replies to your campaigns in your MailChimp account.
      * id `string`: A string that uniquely identifies this conversation.
      * message_count `integer`: The total number of messages in this conversation.
      * campaign_id `string`: The unique identifier of the campaign for this conversation.
      * list_id `string`: The unique identifier of the list for this conversation.
      * unread_messages `integer`: The number of unread messages in this conversation.
      * from_label `string`: A label representing the sender of this message.
      * from_email `string`: A label representing the email of the sender of this message.
      * subject `string`: The subject of the message.
      * last_message `object`: The most recent message in the conversation.
        * from_label `string`: A label representing the sender of this message.
        * from_email `string`: A label representing the email of the sender of this message.
        * subject `string`: The subject of this message.
        * message `string`: The plain-text content of the message.
        * read `boolean`: Whether this message has been marked as read.
        * timestamp `string`: The date and time the message was either sent or received.
      * _links [HATEOASLinks](#hateoaslinks)
  * total_items [CollectionTotal](#collectiontotal)
  * _links [HATEOASLinks](#hateoaslinks)

### getConversationsId
Get details about an individual conversation.


```js
mailchimp.getConversationsId({
  "conversation_id": ""
}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * conversation_id **required** `string`: The unique id for the conversation.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: Details about an individual conversation. Conversation tracking is a feature available to paid accounts that lets you view replies to your campaigns in your MailChimp account.
  * id `string`: A string that uniquely identifies this conversation.
  * message_count `integer`: The total number of messages in this conversation.
  * campaign_id `string`: The unique identifier of the campaign for this conversation.
  * list_id `string`: The unique identifier of the list for this conversation.
  * unread_messages `integer`: The number of unread messages in this conversation.
  * from_label `string`: A label representing the sender of this message.
  * from_email `string`: A label representing the email of the sender of this message.
  * subject `string`: The subject of the message.
  * last_message `object`: The most recent message in the conversation.
    * from_label `string`: A label representing the sender of this message.
    * from_email `string`: A label representing the email of the sender of this message.
    * subject `string`: The subject of this message.
    * message `string`: The plain-text content of the message.
    * read `boolean`: Whether this message has been marked as read.
    * timestamp `string`: The date and time the message was either sent or received.
  * _links [HATEOASLinks](#hateoaslinks)

### getConversationsIdMessages
Get messages from a specific conversation.


```js
mailchimp.getConversationsIdMessages({
  "conversation_id": ""
}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * conversation_id **required** `string`: The unique id for the conversation.
  * is_read `string` (values: true, false): Whether a conversation message has been marked as read.
  * before_timestamp `string`: Restrict the response to messages created before the set time. We recommend [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time format: 2015-10-21T15:41:36+00:00.
  * since_timestamp `string`: Restrict the response to messages created after the set time. We recommend [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time format: 2015-10-21T15:41:36+00:00.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: Messages from a specific conversation.
  * conversation_messages `array`: An array of objects, each representing a conversation messages resources.
    * items `object`: An individual message in a conversation. Conversation tracking is a feature available to paid accounts that lets you view replies to your campaigns in your MailChimp account.
      * id `string`: A string that uniquely identifies this message
      * conversation_id `string`: A string that identifies this message's conversation
      * list_id `integer`: The unique identifier of the list for this conversation.
      * from_label `string`: A label representing the sender of this message
      * from_email `string`: A label representing the email of the sender of this message
      * subject `string`: The subject of this message
      * message `string`: The plain-text content of the message
      * read `boolean`: Whether this message has been marked as read
      * timestamp `string`: The date and time the message was either sent or received.
      * _links [HATEOASLinks](#hateoaslinks)
  * conversation_id `string`: A string that identifies this conversation.
  * total_items [CollectionTotal](#collectiontotal)
  * _links [HATEOASLinks](#hateoaslinks)

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

#### Input
* input `object`
  * conversation_id **required** `string`: The unique id for the conversation.
  * body **required** `object`: An individual message in a conversation. Conversation tracking is a feature available to paid accounts that lets you view replies to your campaigns in your MailChimp account.
    * from_email **required** `string`: A label representing the email of the sender of this message
    * subject `string`: The subject of this message
    * message `string`: The plain-text content of the message
    * read **required** `boolean`: Whether this message has been marked as read
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: An individual message in a conversation. Conversation tracking is a feature available to paid accounts that lets you view replies to your campaigns in your MailChimp account.
  * id `string`: A string that uniquely identifies this message
  * conversation_id `string`: A string that identifies this message's conversation
  * list_id `integer`: The unique identifier of the list for this conversation.
  * from_label `string`: A label representing the sender of this message
  * from_email `string`: A label representing the email of the sender of this message
  * subject `string`: The subject of this message
  * message `string`: The plain-text content of the message
  * read `boolean`: Whether this message has been marked as read
  * timestamp `string`: The date and time the message was either sent or received.
  * _links [HATEOASLinks](#hateoaslinks)

### getConversationsIdMessagesId
Get an individual message in a conversation.


```js
mailchimp.getConversationsIdMessagesId({
  "conversation_id": "",
  "message_id": ""
}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * conversation_id **required** `string`: The unique id for the conversation.
  * message_id **required** `string`: The unique id for the conversation message.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: An individual message in a conversation. Conversation tracking is a feature available to paid accounts that lets you view replies to your campaigns in your MailChimp account.
  * id `string`: A string that uniquely identifies this message
  * conversation_id `string`: A string that identifies this message's conversation
  * list_id `integer`: The unique identifier of the list for this conversation.
  * from_label `string`: A label representing the sender of this message
  * from_email `string`: A label representing the email of the sender of this message
  * subject `string`: The subject of this message
  * message `string`: The plain-text content of the message
  * read `boolean`: Whether this message has been marked as read
  * timestamp `string`: The date and time the message was either sent or received.
  * _links [HATEOASLinks](#hateoaslinks)

### getDashboardAds
Get all the onboarding ads info for the mobile dashboard


```js
mailchimp.getDashboardAds({}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * platform `string`: Restrict results to ads compatible with the given platform. Default is ios
  * num `integer`: Restrict results to this number of ads (if we have that many. Default is 3.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`
  * ads `array`
    * items `object`
      * id `integer`
      * category `string`
      * mobile_title `string`
      * mobile_description `string`
      * mobile_action `string`
      * action_url `string`
      * image_url `string`
      * image_target `string`
      * pro_feature `boolean`
      * paid_feature `boolean`

### getDashboardAudiences
Get all the audiences info for the mobile dashboard


```js
mailchimp.getDashboardAudiences({}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`
  * growth `object`
    * seven_days `object`
      * meta_data `object`
        * first_day `string`
        * last_day `string`
        * subscribers `object`
          * total_by_series `object`
            * active `integer`
            * net_growth `integer`
            * unsubscribes `integer`
      * data `object`
        * subscribers `object`
          * active `array`
            * items `object`
              * date `string`
              * val `string`
          * unsubscribes `array`
            * items `object`
              * date `string`
              * val `string`
          * net_growth `array`
            * items `object`
              * date `string`
              * val `string`
    * thirty_days `object`
      * meta_data `object`
        * first_day `string`
        * last_day `string`
        * subscribers `object`
          * total_by_series `object`
            * active `integer`
            * net_growth `integer`
            * unsubscribes `integer`
      * data `object`
        * subscribers `object`
          * active `array`
            * items `object`
              * date `string`
              * val `string`
          * unsubscribes `array`
            * items `object`
              * date `string`
              * val `string`
          * net_growth `array`
            * items `object`
              * date `string`
              * val `string`
    * ninety_days `object`
      * meta_data `object`
        * first_day `string`
        * last_day `string`
        * subscribers `object`
          * total_by_series `object`
            * active `integer`
            * net_growth `integer`
            * unsubscribes `integer`
      * data `object`
        * subscribers `object`
          * active `array`
            * items `object`
              * date `string`
              * val `string`
          * unsubscribes `array`
            * items `object`
              * date `string`
              * val `string`
          * net_growth `array`
            * items `object`
              * date `string`
              * val `string`
    * one_year `object`
      * meta_data `object`
        * first_day `string`
        * last_day `string`
        * subscribers `object`
          * total_by_series `object`
            * active `integer`
            * net_growth `integer`
            * unsubscribes `integer`
      * data `object`
        * subscribers `object`
          * active `array`
            * items `object`
              * date `string`
              * val `string`
          * unsubscribes `array`
            * items `object`
              * date `string`
              * val `string`
          * net_growth `array`
            * items `object`
              * date `string`
              * val `string`
  * sources `object`
    * seven_days `object`
      * meta_data `object`
        * first_day `string`
        * last_day `string`
        * distribution `object`
          * totals `object`
            * current `integer`
            * previous `integer`
          * total_by_series `object`
            * sources `integer`
      * data `object`
        * distribution `object`
          * sources `array`
            * items `object`
              * source `string`
              * val `string`
    * thirty_days `object`
      * meta_data `object`
        * first_day `string`
        * last_day `string`
        * distribution `object`
          * totals `object`
            * current `integer`
            * previous `integer`
          * total_by_series `object`
            * sources `integer`
      * data `object`
        * distribution `object`
          * sources `array`
            * items `object`
              * source `string`
              * val `string`
    * ninety_days `object`
      * meta_data `object`
        * first_day `string`
        * last_day `string`
        * distribution `object`
          * totals `object`
            * current `integer`
            * previous `integer`
          * total_by_series `object`
            * sources `integer`
      * data `object`
        * distribution `object`
          * sources `array`
            * items `object`
              * source `string`
              * val `string`
    * one_year `object`
      * meta_data `object`
        * first_day `string`
        * last_day `string`
        * distribution `object`
          * totals `object`
            * current `integer`
            * previous `integer`
          * total_by_series `object`
            * sources `integer`
      * data `object`
        * distribution `object`
          * sources `array`
            * items `object`
              * source `string`
              * val `string`

### getDashboardCharts
Get info about which dashboard charts to show for this user


```js
mailchimp.getDashboardCharts({}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`
  * charts `object`
    * ecommerce `boolean`
    * audiences `boolean`
    * engagement `boolean`

### getDashboardEcommerce
Get all the ecommerce info for the mobile dashboard


```js
mailchimp.getDashboardEcommerce({}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`
  * orders `object`
    * seven_days `object`
      * meta_data `object`
        * first_day `string`
        * last_day `string`
        * orders `object`
          * totals `object`
            * current `integer`
            * previous `integer`
          * mailchimp `object`
            * current `integer`
            * previous `integer`
          * total_by_series `object`
            * completed_orders `integer`
        * carts `object`
          * totals `object`
            * current `integer`
            * previous `integer`
          * mailchimp `object`
            * current `integer`
            * previous `integer`
          * total_by_series `object`
            * recovered_carts `integer`
        * section_title `string`
        * store_count `integer`
      * data `object`
        * orders `object`
          * completed_orders `array`
            * items `object`
              * date `string`
              * val `string`
        * carts `object`
          * recovered_carts `array`
            * items `object`
              * date `string`
              * val `string`
    * thirty_days `object`
      * meta_data `object`
        * first_day `string`
        * last_day `string`
        * orders `object`
          * totals `object`
            * current `integer`
            * previous `integer`
          * mailchimp `object`
            * current `integer`
            * previous `integer`
          * total_by_series `object`
            * completed_orders `integer`
        * carts `object`
          * totals `object`
            * current `integer`
            * previous `integer`
          * mailchimp `object`
            * current `integer`
            * previous `integer`
          * total_by_series `object`
            * recovered_carts `integer`
        * section_title `string`
        * store_count `integer`
      * data `object`
        * orders `object`
          * completed_orders `array`
            * items `object`
              * date `string`
              * val `string`
        * carts `object`
          * recovered_carts `array`
            * items `object`
              * date `string`
              * val `string`
    * ninety_days `object`
      * meta_data `object`
        * first_day `string`
        * last_day `string`
        * orders `object`
          * totals `object`
            * current `integer`
            * previous `integer`
          * mailchimp `object`
            * current `integer`
            * previous `integer`
          * total_by_series `object`
            * completed_orders `integer`
        * carts `object`
          * totals `object`
            * current `integer`
            * previous `integer`
          * mailchimp `object`
            * current `integer`
            * previous `integer`
          * total_by_series `object`
            * recovered_carts `integer`
        * section_title `string`
        * store_count `integer`
      * data `object`
        * orders `object`
          * completed_orders `array`
            * items `object`
              * date `string`
              * val `string`
        * carts `object`
          * recovered_carts `array`
            * items `object`
              * date `string`
              * val `string`
    * one_year `object`
      * meta_data `object`
        * first_day `string`
        * last_day `string`
        * orders `object`
          * totals `object`
            * current `integer`
            * previous `integer`
          * mailchimp `object`
            * current `integer`
            * previous `integer`
          * total_by_series `object`
            * completed_orders `integer`
        * carts `object`
          * totals `object`
            * current `integer`
            * previous `integer`
          * mailchimp `object`
            * current `integer`
            * previous `integer`
          * total_by_series `object`
            * recovered_carts `integer`
        * section_title `string`
        * store_count `integer`
      * data `object`
        * orders `object`
          * completed_orders `array`
            * items `object`
              * date `string`
              * val `string`
        * carts `object`
          * recovered_carts `array`
            * items `object`
              * date `string`
              * val `string`
  * revenue `object`
    * seven_days `object`
      * meta_data `object`
        * first_day `string`
        * last_day `string`
        * orders `object`
          * totals `object`
            * current `number`
            * previous `number`
          * mailchimp `object`
            * current `number`
            * previous `number`
          * total_by_series `object`
            * email_campaigns `number`
            * automations `number`
            * elsewhere `number`
        * carts `object`
          * totals `object`
            * current `number`
            * previous `number`
          * mailchimp `object`
            * current `number`
            * previous `number`
          * total_by_series `object`
            * recovered_carts `number`
        * section_title `string`
        * store_count `integer`
      * data `object`
        * orders `object`
          * email_campaigns `array`
            * items `object`
              * date `string`
              * val `number`
          * automations `array`
            * items `object`
              * date `string`
              * val `number`
          * elsewhere `array`
            * items `object`
              * date `string`
              * val `number`
        * carts `object`
          * recovered_carts `array`
            * items `object`
              * date `string`
              * val `number`
    * thirty_days `object`
      * meta_data `object`
        * first_day `string`
        * last_day `string`
        * orders `object`
          * totals `object`
            * current `number`
            * previous `number`
          * mailchimp `object`
            * current `number`
            * previous `number`
          * total_by_series `object`
            * email_campaigns `number`
            * automations `number`
            * elsewhere `number`
        * carts `object`
          * totals `object`
            * current `number`
            * previous `number`
          * mailchimp `object`
            * current `number`
            * previous `number`
          * total_by_series `object`
            * recovered_carts `number`
        * section_title `string`
        * store_count `integer`
      * data `object`
        * orders `object`
          * email_campaigns `array`
            * items `object`
              * date `string`
              * val `number`
          * automations `array`
            * items `object`
              * date `string`
              * val `number`
          * elsewhere `array`
            * items `object`
              * date `string`
              * val `number`
        * carts `object`
          * recovered_carts `array`
            * items `object`
              * date `string`
              * val `number`
    * ninety_days `object`
      * meta_data `object`
        * first_day `string`
        * last_day `string`
        * orders `object`
          * totals `object`
            * current `number`
            * previous `number`
          * mailchimp `object`
            * current `number`
            * previous `number`
          * total_by_series `object`
            * email_campaigns `number`
            * automations `number`
            * elsewhere `number`
        * carts `object`
          * totals `object`
            * current `number`
            * previous `number`
          * mailchimp `object`
            * current `number`
            * previous `number`
          * total_by_series `object`
            * recovered_carts `number`
        * section_title `string`
        * store_count `integer`
      * data `object`
        * orders `object`
          * email_campaigns `array`
            * items `object`
              * date `string`
              * val `number`
          * automations `array`
            * items `object`
              * date `string`
              * val `number`
          * elsewhere `array`
            * items `object`
              * date `string`
              * val `number`
        * carts `object`
          * recovered_carts `array`
            * items `object`
              * date `string`
              * val `number`
    * one_year `object`
      * meta_data `object`
        * first_day `string`
        * last_day `string`
        * orders `object`
          * totals `object`
            * current `number`
            * previous `number`
          * mailchimp `object`
            * current `number`
            * previous `number`
          * total_by_series `object`
            * email_campaigns `number`
            * automations `number`
            * elsewhere `number`
        * carts `object`
          * totals `object`
            * current `number`
            * previous `number`
          * mailchimp `object`
            * current `number`
            * previous `number`
          * total_by_series `object`
            * recovered_carts `number`
        * section_title `string`
        * store_count `integer`
      * data `object`
        * orders `object`
          * email_campaigns `array`
            * items `object`
              * date `string`
              * val `number`
          * automations `array`
            * items `object`
              * date `string`
              * val `number`
          * elsewhere `array`
            * items `object`
              * date `string`
              * val `number`
        * carts `object`
          * recovered_carts `array`
            * items `object`
              * date `string`
              * val `number`

### getDashboardEngagement
Get all the engagement info for the mobile dashboard


```js
mailchimp.getDashboardEngagement({}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`
  * engagement `object`
    * seven_days `object`
      * meta_data `object`
        * first_day `string`
        * last_day `string`
        * stats `object`
          * total_by_series `object`
            * sent `integer`
            * delivered `integer`
            * opened `integer`
            * clicked `integer`
            * added_to_cart `integer`
            * purchased `integer`
            * abuse_reports `integer`
            * unsubscribed `integer`
            * bounced `integer`
        * rates `object`
          * total_by_series `object`
            * delivery_rate `number`
            * open_rate `number`
            * click_rate `number`
            * add_to_cart_rate `number`
            * purchase_rate `number`
            * abuse_rate `number`
            * unsubscribe_rate `number`
            * bounce_rate `number`
      * data `object`
        * stats `object`
          * sent `array`
          * delivered `array`
          * opened `array`
          * clicked `array`
          * added_to_cart `array`
          * purchased `array`
          * abuse_reports `array`
          * unsubscribed `array`
          * bounced `array`
        * rates `object`
          * delivery_rate `array`
          * open_rate `array`
          * click_rate `array`
          * add_to_cart_rate `array`
          * purchase_rate `array`
          * abuse_rate `array`
          * unsubscribe_rate `array`
          * bounce_rate `array`
    * thirty_days `object`
      * meta_data `object`
        * first_day `string`
        * last_day `string`
        * stats `object`
          * total_by_series `object`
            * sent `integer`
            * delivered `integer`
            * opened `integer`
            * clicked `integer`
            * added_to_cart `integer`
            * purchased `integer`
            * abuse_reports `integer`
            * unsubscribed `integer`
            * bounced `integer`
        * rates `object`
          * total_by_series `object`
            * delivery_rate `number`
            * open_rate `number`
            * click_rate `number`
            * add_to_cart_rate `number`
            * purchase_rate `number`
            * abuse_rate `number`
            * unsubscribe_rate `number`
            * bounce_rate `number`
      * data `object`
        * stats `object`
          * sent `array`
          * delivered `array`
          * opened `array`
          * clicked `array`
          * added_to_cart `array`
          * purchased `array`
          * abuse_reports `array`
          * unsubscribed `array`
          * bounced `array`
        * rates `object`
          * delivery_rate `array`
          * open_rate `array`
          * click_rate `array`
          * add_to_cart_rate `array`
          * purchase_rate `array`
          * abuse_rate `array`
          * unsubscribe_rate `array`
          * bounce_rate `array`
    * ninety_days `object`
      * meta_data `object`
        * first_day `string`
        * last_day `string`
        * stats `object`
          * total_by_series `object`
            * sent `integer`
            * delivered `integer`
            * opened `integer`
            * clicked `integer`
            * added_to_cart `integer`
            * purchased `integer`
            * abuse_reports `integer`
            * unsubscribed `integer`
            * bounced `integer`
        * rates `object`
          * total_by_series `object`
            * delivery_rate `number`
            * open_rate `number`
            * click_rate `number`
            * add_to_cart_rate `number`
            * purchase_rate `number`
            * abuse_rate `number`
            * unsubscribe_rate `number`
            * bounce_rate `number`
      * data `object`
        * stats `object`
          * sent `array`
          * delivered `array`
          * opened `array`
          * clicked `array`
          * added_to_cart `array`
          * purchased `array`
          * abuse_reports `array`
          * unsubscribed `array`
          * bounced `array`
        * rates `object`
          * delivery_rate `array`
          * open_rate `array`
          * click_rate `array`
          * add_to_cart_rate `array`
          * purchase_rate `array`
          * abuse_rate `array`
          * unsubscribe_rate `array`
          * bounce_rate `array`
    * one_year `object`
      * meta_data `object`
        * first_day `string`
        * last_day `string`
        * stats `object`
          * total_by_series `object`
            * sent `integer`
            * delivered `integer`
            * opened `integer`
            * clicked `integer`
            * added_to_cart `integer`
            * purchased `integer`
            * abuse_reports `integer`
            * unsubscribed `integer`
            * bounced `integer`
        * rates `object`
          * total_by_series `object`
            * delivery_rate `number`
            * open_rate `number`
            * click_rate `number`
            * add_to_cart_rate `number`
            * purchase_rate `number`
            * abuse_rate `number`
            * unsubscribe_rate `number`
            * bounce_rate `number`
      * data `object`
        * stats `object`
          * sent `array`
          * delivered `array`
          * opened `array`
          * clicked `array`
          * added_to_cart `array`
          * purchased `array`
          * abuse_reports `array`
          * unsubscribed `array`
          * bounced `array`
        * rates `object`
          * delivery_rate `array`
          * open_rate `array`
          * click_rate `array`
          * add_to_cart_rate `array`
          * purchase_rate `array`
          * abuse_rate `array`
          * unsubscribe_rate `array`
          * bounce_rate `array`

### getFileManager
Get information about the file-manager endpoint's resources


```js
mailchimp.getFileManager({}, context)
```

#### Input
* input `object`
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: This resource serves as a namespace for file-manager-related resources.
  * _links [HATEOASLinks](#hateoaslinks)

### getFileManagerFiles
Get a list of available images and files stored in the File Manager for the account.


```js
mailchimp.getFileManagerFiles({}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * count `integer`: The number of records to return. [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **10**.
  * offset `integer`: The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **0**.
  * type `string`: The file type for the File Manager file.
  * created_by `string`: The MailChimp account user who created the File Manager file.
  * before_created_at `string`: Restrict the response to files created before the set date.
  * since_created_at `string`: Restrict the response to files created after the set date.
  * sort_field `string` (values: added_date): Returns files sorted by the specified field.
  * sort_dir `string` (values: ASC, DESC): Determines the order direction for sorted results.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: A list of available images and files stored in the File Manager for the account.
  * files `array`:  A list of files and images in an account.
    * items `object`: An individual file listed in the File Manager.
      * id `integer`: The unique id of the file.
      * folder_id `integer`: The id of the folder.
      * type `string` (values: image, file): The type of file in the File Manager.
      * name `string`: The name of the file.
      * full_size_url `string`: The url of the full-size file.
      * thumbnail_url `string`: The url of the thumbnail preview.
      * size `integer`: The size of the file in bytes.
      * created_at `string`: The date and time a file was added to the File Manager.
      * created_by `string`: The username of the profile that uploaded the file.
      * width `integer`: The width of the image.
      * height `integer`: The height of an image.
      * _links [HATEOASLinks](#hateoaslinks)
  * total_file_size `number`: The total size of all File Manager files in bytes.
  * total_items [CollectionTotal](#collectiontotal)
  * _links [HATEOASLinks](#hateoaslinks)

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

#### Input
* input `object`
  * body **required** `object`: An individual file listed in the File Manager.
    * folder_id `integer`: The id of the folder.
    * name **required** `string`: The name of the file.
    * file_data **required** `string`: The base64-encoded contents of the file.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: An individual file listed in the File Manager.
  * id `integer`: The unique id of the file.
  * folder_id `integer`: The id of the folder.
  * type `string` (values: image, file): The type of file in the File Manager.
  * name `string`: The name of the file.
  * full_size_url `string`: The url of the full-size file.
  * thumbnail_url `string`: The url of the thumbnail preview.
  * size `integer`: The size of the file in bytes.
  * created_at `string`: The date and time a file was added to the File Manager.
  * created_by `string`: The username of the profile that uploaded the file.
  * width `integer`: The width of the image.
  * height `integer`: The height of an image.
  * _links [HATEOASLinks](#hateoaslinks)

### getFileManagerFilesId
Get information about a specific file in the File Manager.


```js
mailchimp.getFileManagerFilesId({
  "file_id": ""
}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * file_id **required** `string`: The unique id for the File Manager file.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: An individual file listed in the File Manager.
  * id `integer`: The unique id of the file.
  * folder_id `integer`: The id of the folder.
  * type `string` (values: image, file): The type of file in the File Manager.
  * name `string`: The name of the file.
  * full_size_url `string`: The url of the full-size file.
  * thumbnail_url `string`: The url of the thumbnail preview.
  * size `integer`: The size of the file in bytes.
  * created_at `string`: The date and time a file was added to the File Manager.
  * created_by `string`: The username of the profile that uploaded the file.
  * width `integer`: The width of the image.
  * height `integer`: The height of an image.
  * _links [HATEOASLinks](#hateoaslinks)

### patchFileManagerFilesId
Update a file in the File Manager.


```js
mailchimp.patchFileManagerFilesId({
  "file_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * file_id **required** `string`: The unique id for the File Manager file.
  * body **required** `object`: An individual file listed in the File Manager.
    * folder_id `integer`: The id of the folder. Setting `folder_id` to `0` will remove a file from its current folder.
    * name `string`: The name of the file.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: An individual file listed in the File Manager.
  * id `integer`: The unique id of the file.
  * folder_id `integer`: The id of the folder.
  * type `string` (values: image, file): The type of file in the File Manager.
  * name `string`: The name of the file.
  * full_size_url `string`: The url of the full-size file.
  * thumbnail_url `string`: The url of the thumbnail preview.
  * size `integer`: The size of the file in bytes.
  * created_at `string`: The date and time a file was added to the File Manager.
  * created_by `string`: The username of the profile that uploaded the file.
  * width `integer`: The width of the image.
  * height `integer`: The height of an image.
  * _links [HATEOASLinks](#hateoaslinks)

### deleteFileManagerFilesId
Remove a specific file from the File Manager.


```js
mailchimp.deleteFileManagerFilesId({
  "file_id": ""
}, context)
```

#### Input
* input `object`
  * file_id **required** `string`: The unique id for the File Manager file.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
*Output schema unknown*

### getFileManagerFolders
Get a list of all folders in the File Manager.


```js
mailchimp.getFileManagerFolders({}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * count `integer`: The number of records to return. [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **10**.
  * offset `integer`: The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **0**.
  * created_by `string`: The MailChimp account user who created the File Manager file.
  * before_created_at `string`: Restrict the response to files created before the set date.
  * since_created_at `string`: Restrict the response to files created after the set date.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: A list of all folders in the File Manager.
  * folders `array`: A list of all folders in the File Manager.
    * items `object`: An individual folder listed in the File Manager.
      * id `integer`: The unique id for the folder.
      * name `string`: The name of the folder.
      * file_count `integer`: The number of files in the folder.
      * created_at `string`: The date and time a file was added to the File Manager.
      * created_by `string`: The username of the profile that created the folder.
      * _links [HATEOASLinks](#hateoaslinks)
  * total_items [CollectionTotal](#collectiontotal)
  * _links [HATEOASLinks](#hateoaslinks)

### postFileManagerFolders
Create a new folder in the File Manager.


```js
mailchimp.postFileManagerFolders({
  "body": {
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** `object`: An individual folder listed in the File Manager.
    * name **required** `string`: The name of the folder.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: An individual folder listed in the File Manager.
  * id `integer`: The unique id for the folder.
  * name `string`: The name of the folder.
  * file_count `integer`: The number of files in the folder.
  * created_at `string`: The date and time a file was added to the File Manager.
  * created_by `string`: The username of the profile that created the folder.
  * _links [HATEOASLinks](#hateoaslinks)

### getFileManagerFoldersId
Get information about a specific folder in the File Manager.


```js
mailchimp.getFileManagerFoldersId({
  "folder_id": ""
}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * folder_id **required** `string`: The unique id for the File Manager folder.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: An individual folder listed in the File Manager.
  * id `integer`: The unique id for the folder.
  * name `string`: The name of the folder.
  * file_count `integer`: The number of files in the folder.
  * created_at `string`: The date and time a file was added to the File Manager.
  * created_by `string`: The username of the profile that created the folder.
  * _links [HATEOASLinks](#hateoaslinks)

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

#### Input
* input `object`
  * folder_id **required** `string`: The unique id for the File Manager folder.
  * body **required** `object`: An individual folder listed in the File Manager.
    * name **required** `string`: The name of the folder.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: An individual folder listed in the File Manager.
  * id `integer`: The unique id for the folder.
  * name `string`: The name of the folder.
  * file_count `integer`: The number of files in the folder.
  * created_at `string`: The date and time a file was added to the File Manager.
  * created_by `string`: The username of the profile that created the folder.
  * _links [HATEOASLinks](#hateoaslinks)

### deleteFileManagerFoldersId
Delete a specific folder in the File Manager.


```js
mailchimp.deleteFileManagerFoldersId({}, context)
```

#### Input
* input `object`
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
*Output schema unknown*

### getLists
Get information about all lists in the account.


```js
mailchimp.getLists({}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * count `integer`: The number of records to return. [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **10**.
  * offset `integer`: The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **0**.
  * before_date_created `string`: Restrict response to lists created before the set date.
  * since_date_created `string`: Restrict results to lists created after the set date.
  * before_campaign_last_sent `string`: Restrict results to lists created before the last campaign send date.
  * since_campaign_last_sent `string`: Restrict results to lists created after the last campaign send date.
  * email `string`: Restrict results to lists that include a specific subscriber's email address.
  * sort_field `string` (values: date_created): Returns files sorted by the specified field.
  * sort_dir `string` (values: ASC, DESC): Determines the order direction for sorted results.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: A collection of subscriber lists for this account. Lists contain subscribers who have opted-in to receive correspondence from you or your organization.
  * lists `array`: An array of objects, each representing a list.
    * items `object`: Information about a specific list.
      * id `string`: A string that uniquely identifies this list.
      * web_id `integer`: The ID used in the MailChimp web application. View this list in your MailChimp account at `https://{dc}.admin.mailchimp.com/lists/members/?id={web_id}`.
      * name `string`: The name of the list.
      * contact `object`: [Contact information displayed in campaign footers](http://kb.mailchimp.com/lists/growth/about-the-required-email-footer-content?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) to comply with international spam laws.
        * company `string`: The company name for the list.
        * address1 `string`: The street address for the list contact.
        * address2 `string`: The street address for the list contact.
        * city `string`: The city for the list contact.
        * state `string`: The state for the list contact.
        * zip `string`: The postal or zip code for the list contact.
        * country `string`: A two-character ISO3166 country code. Defaults to US if invalid.
        * phone `string`: The phone number for the list contact.
      * permission_reminder `string`: The [permission reminder](http://kb.mailchimp.com/accounts/compliance-tips/edit-the-permission-reminder?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) for the list.
      * use_archive_bar `boolean`: Whether campaigns for this list use the [Archive Bar](http://kb.mailchimp.com/campaigns/archives/about-the-archive-bar?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) in archives by default.
      * campaign_defaults `object`: [Default values for campaigns](http://kb.mailchimp.com/campaigns/design/set-up-email-subject-from-name-and-from-email-address-on-a-campaign?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) created for this list.
        * from_name `string`: The default from name for campaigns sent to this list.
        * from_email `string`: The default from email for campaigns sent to this list.
        * subject `string`: The default subject line for campaigns sent to this list.
        * language `string`: The default language for this lists's forms.
      * notify_on_subscribe `string`: The email address to send [subscribe notifications](http://kb.mailchimp.com/lists/managing-subscribers/change-subscribe-and-unsubscribe-notifications?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) to.
      * notify_on_unsubscribe `string`: The email address to send [unsubscribe notifications](http://kb.mailchimp.com/lists/managing-subscribers/change-subscribe-and-unsubscribe-notifications?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) to.
      * date_created `string`: The date and time that this list was created.
      * list_rating `integer`: An auto-generated activity score for the list (0-5).
      * email_type_option `boolean`: Whether the list supports [multiple formats for emails](http://kb.mailchimp.com/lists/growth/how-to-change-list-name-and-defaults?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs#Change-Subscription-Settings). When set to `true`, subscribers can choose whether they want to receive HTML or plain-text emails. When set to `false`, subscribers will receive HTML emails, with a plain-text alternative backup.
      * subscribe_url_short `string`: Our [EepURL shortened](http://kb.mailchimp.com/lists/signup-forms/share-your-signup-form?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs#Signup-Form-URL) version of this list's subscribe form.
      * subscribe_url_long `string`: The full version of this list's subscribe form (host will vary).
      * beamer_address `string`: The list's [Email Beamer](http://kb.mailchimp.com/campaigns/ways-to-build/use-email-beamer-to-create-a-campaign?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) address.
      * visibility `string` (values: pub, prv): Whether this list is [public or private](http://kb.mailchimp.com/lists/growth/about-publicity-settings?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
      * modules `array`: Any list-specific modules installed for this list.
      * stats `object`: Stats for the list. Many of these are cached for at least five minutes.
        * member_count `integer`: The number of active members in the list.
        * unsubscribe_count `integer`: The number of members who have unsubscribed from the list.
        * cleaned_count `integer`: The number of members cleaned from the list.
        * member_count_since_send `integer`: The number of active members in the list since the last campaign was sent.
        * unsubscribe_count_since_send `integer`: The number of members who have unsubscribed since the last campaign was sent.
        * cleaned_count_since_send `integer`: The number of members cleaned from the list since the last campaign was sent.
        * campaign_count `integer`: The number of campaigns in any status that use this list.
        * campaign_last_sent `string`: The date and time the last campaign was sent to this list. This is updated when a campaign is sent to 10 or more recipients.
        * merge_field_count `integer`: The number of merge vars for this list (not EMAIL, which is required).
        * avg_sub_rate `number`: The average number of subscriptions per month for the list (not returned if we haven't calculated it yet).
        * avg_unsub_rate `number`: The average number of unsubscriptions per month for the list (not returned if we haven't calculated it yet).
        * target_sub_rate `number`: The target number of subscriptions per month for the list to keep it growing (not returned if we haven't calculated it yet).
        * open_rate `number`: The average open rate (a percentage represented as a number between 0 and 100) per campaign for the list (not returned if we haven't calculated it yet).
        * click_rate `number`: The average click rate (a percentage represented as a number between 0 and 100) per campaign for the list (not returned if we haven't calculated it yet).
        * last_sub_date `string`: The date and time of the last time someone subscribed to this list.
        * last_unsub_date `string`: The date and time of the last time someone unsubscribed from this list.
      * _links [HATEOASLinks](#hateoaslinks)
  * total_items [CollectionTotal](#collectiontotal)
  * _links [HATEOASLinks](#hateoaslinks)

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

#### Input
* input `object`
  * body **required** `object`: Information about a specific list.
    * name **required** `string`: The name of the list.
    * contact **required** `object`: [Contact information displayed in campaign footers](http://kb.mailchimp.com/lists/growth/about-the-required-email-footer-content?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) to comply with international spam laws.
      * company **required** `string`: The company name for the list.
      * address1 **required** `string`: The street address for the list contact.
      * address2 `string`: The street address for the list contact.
      * city **required** `string`: The city for the list contact.
      * state **required** `string`: The state for the list contact.
      * zip **required** `string`: The postal or zip code for the list contact.
      * country **required** `string`: A two-character ISO3166 country code. Defaults to US if invalid.
      * phone `string`: The phone number for the list contact.
    * permission_reminder **required** `string`: The [permission reminder](http://kb.mailchimp.com/accounts/compliance-tips/edit-the-permission-reminder?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) for the list.
    * use_archive_bar `boolean`: Whether campaigns for this list use the [Archive Bar](http://kb.mailchimp.com/campaigns/archives/about-the-archive-bar?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) in archives by default.
    * campaign_defaults **required** `object`: [Default values for campaigns](http://kb.mailchimp.com/campaigns/design/set-up-email-subject-from-name-and-from-email-address-on-a-campaign?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) created for this list.
      * from_name **required** `string`: The default from name for campaigns sent to this list.
      * from_email **required** `string`: The default from email for campaigns sent to this list.
      * subject **required** `string`: The default subject line for campaigns sent to this list.
      * language **required** `string`: The default language for this lists's forms.
    * notify_on_subscribe `string`: The email address to send [subscribe notifications](http://kb.mailchimp.com/lists/managing-subscribers/change-subscribe-and-unsubscribe-notifications?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) to.
    * notify_on_unsubscribe `string`: The email address to send [unsubscribe notifications](http://kb.mailchimp.com/lists/managing-subscribers/change-subscribe-and-unsubscribe-notifications?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) to.
    * email_type_option **required** `boolean`: Whether the list supports [multiple formats for emails](http://kb.mailchimp.com/lists/growth/how-to-change-list-name-and-defaults?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs#Change-Subscription-Settings). When set to `true`, subscribers can choose whether they want to receive HTML or plain-text emails. When set to `false`, subscribers will receive HTML emails, with a plain-text alternative backup.
    * visibility `string` (values: pub, prv): Whether this list is [public or private](http://kb.mailchimp.com/lists/growth/about-publicity-settings?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: Information about a specific list.
  * id `string`: A string that uniquely identifies this list.
  * web_id `integer`: The ID used in the MailChimp web application. View this list in your MailChimp account at `https://{dc}.admin.mailchimp.com/lists/members/?id={web_id}`.
  * name `string`: The name of the list.
  * contact `object`: [Contact information displayed in campaign footers](http://kb.mailchimp.com/lists/growth/about-the-required-email-footer-content?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) to comply with international spam laws.
    * company `string`: The company name for the list.
    * address1 `string`: The street address for the list contact.
    * address2 `string`: The street address for the list contact.
    * city `string`: The city for the list contact.
    * state `string`: The state for the list contact.
    * zip `string`: The postal or zip code for the list contact.
    * country `string`: A two-character ISO3166 country code. Defaults to US if invalid.
    * phone `string`: The phone number for the list contact.
  * permission_reminder `string`: The [permission reminder](http://kb.mailchimp.com/accounts/compliance-tips/edit-the-permission-reminder?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) for the list.
  * use_archive_bar `boolean`: Whether campaigns for this list use the [Archive Bar](http://kb.mailchimp.com/campaigns/archives/about-the-archive-bar?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) in archives by default.
  * campaign_defaults `object`: [Default values for campaigns](http://kb.mailchimp.com/campaigns/design/set-up-email-subject-from-name-and-from-email-address-on-a-campaign?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) created for this list.
    * from_name `string`: The default from name for campaigns sent to this list.
    * from_email `string`: The default from email for campaigns sent to this list.
    * subject `string`: The default subject line for campaigns sent to this list.
    * language `string`: The default language for this lists's forms.
  * notify_on_subscribe `string`: The email address to send [subscribe notifications](http://kb.mailchimp.com/lists/managing-subscribers/change-subscribe-and-unsubscribe-notifications?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) to.
  * notify_on_unsubscribe `string`: The email address to send [unsubscribe notifications](http://kb.mailchimp.com/lists/managing-subscribers/change-subscribe-and-unsubscribe-notifications?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) to.
  * date_created `string`: The date and time that this list was created.
  * list_rating `integer`: An auto-generated activity score for the list (0-5).
  * email_type_option `boolean`: Whether the list supports [multiple formats for emails](http://kb.mailchimp.com/lists/growth/how-to-change-list-name-and-defaults?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs#Change-Subscription-Settings). When set to `true`, subscribers can choose whether they want to receive HTML or plain-text emails. When set to `false`, subscribers will receive HTML emails, with a plain-text alternative backup.
  * subscribe_url_short `string`: Our [EepURL shortened](http://kb.mailchimp.com/lists/signup-forms/share-your-signup-form?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs#Signup-Form-URL) version of this list's subscribe form.
  * subscribe_url_long `string`: The full version of this list's subscribe form (host will vary).
  * beamer_address `string`: The list's [Email Beamer](http://kb.mailchimp.com/campaigns/ways-to-build/use-email-beamer-to-create-a-campaign?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) address.
  * visibility `string` (values: pub, prv): Whether this list is [public or private](http://kb.mailchimp.com/lists/growth/about-publicity-settings?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
  * modules `array`: Any list-specific modules installed for this list.
  * stats `object`: Stats for the list. Many of these are cached for at least five minutes.
    * member_count `integer`: The number of active members in the list.
    * unsubscribe_count `integer`: The number of members who have unsubscribed from the list.
    * cleaned_count `integer`: The number of members cleaned from the list.
    * member_count_since_send `integer`: The number of active members in the list since the last campaign was sent.
    * unsubscribe_count_since_send `integer`: The number of members who have unsubscribed since the last campaign was sent.
    * cleaned_count_since_send `integer`: The number of members cleaned from the list since the last campaign was sent.
    * campaign_count `integer`: The number of campaigns in any status that use this list.
    * campaign_last_sent `string`: The date and time the last campaign was sent to this list. This is updated when a campaign is sent to 10 or more recipients.
    * merge_field_count `integer`: The number of merge vars for this list (not EMAIL, which is required).
    * avg_sub_rate `number`: The average number of subscriptions per month for the list (not returned if we haven't calculated it yet).
    * avg_unsub_rate `number`: The average number of unsubscriptions per month for the list (not returned if we haven't calculated it yet).
    * target_sub_rate `number`: The target number of subscriptions per month for the list to keep it growing (not returned if we haven't calculated it yet).
    * open_rate `number`: The average open rate (a percentage represented as a number between 0 and 100) per campaign for the list (not returned if we haven't calculated it yet).
    * click_rate `number`: The average click rate (a percentage represented as a number between 0 and 100) per campaign for the list (not returned if we haven't calculated it yet).
    * last_sub_date `string`: The date and time of the last time someone subscribed to this list.
    * last_unsub_date `string`: The date and time of the last time someone unsubscribed from this list.
  * _links [HATEOASLinks](#hateoaslinks)

### getListsId
Get information about a specific list in your MailChimp account. Results include list members who have signed up but haven't confirmed their subscription yet and [unsubscribed or cleaned](http://kb.mailchimp.com/lists/managing-subscribers/view-unsubscribed-and-cleaned-addresses?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).


```js
mailchimp.getListsId({
  "list_id": ""
}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * list_id **required** `string`: The unique id for the list.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: Information about a specific list.
  * id `string`: A string that uniquely identifies this list.
  * web_id `integer`: The ID used in the MailChimp web application. View this list in your MailChimp account at `https://{dc}.admin.mailchimp.com/lists/members/?id={web_id}`.
  * name `string`: The name of the list.
  * contact `object`: [Contact information displayed in campaign footers](http://kb.mailchimp.com/lists/growth/about-the-required-email-footer-content?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) to comply with international spam laws.
    * company `string`: The company name for the list.
    * address1 `string`: The street address for the list contact.
    * address2 `string`: The street address for the list contact.
    * city `string`: The city for the list contact.
    * state `string`: The state for the list contact.
    * zip `string`: The postal or zip code for the list contact.
    * country `string`: A two-character ISO3166 country code. Defaults to US if invalid.
    * phone `string`: The phone number for the list contact.
  * permission_reminder `string`: The [permission reminder](http://kb.mailchimp.com/accounts/compliance-tips/edit-the-permission-reminder?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) for the list.
  * use_archive_bar `boolean`: Whether campaigns for this list use the [Archive Bar](http://kb.mailchimp.com/campaigns/archives/about-the-archive-bar?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) in archives by default.
  * campaign_defaults `object`: [Default values for campaigns](http://kb.mailchimp.com/campaigns/design/set-up-email-subject-from-name-and-from-email-address-on-a-campaign?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) created for this list.
    * from_name `string`: The default from name for campaigns sent to this list.
    * from_email `string`: The default from email for campaigns sent to this list.
    * subject `string`: The default subject line for campaigns sent to this list.
    * language `string`: The default language for this lists's forms.
  * notify_on_subscribe `string`: The email address to send [subscribe notifications](http://kb.mailchimp.com/lists/managing-subscribers/change-subscribe-and-unsubscribe-notifications?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) to.
  * notify_on_unsubscribe `string`: The email address to send [unsubscribe notifications](http://kb.mailchimp.com/lists/managing-subscribers/change-subscribe-and-unsubscribe-notifications?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) to.
  * date_created `string`: The date and time that this list was created.
  * list_rating `integer`: An auto-generated activity score for the list (0-5).
  * email_type_option `boolean`: Whether the list supports [multiple formats for emails](http://kb.mailchimp.com/lists/growth/how-to-change-list-name-and-defaults?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs#Change-Subscription-Settings). When set to `true`, subscribers can choose whether they want to receive HTML or plain-text emails. When set to `false`, subscribers will receive HTML emails, with a plain-text alternative backup.
  * subscribe_url_short `string`: Our [EepURL shortened](http://kb.mailchimp.com/lists/signup-forms/share-your-signup-form?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs#Signup-Form-URL) version of this list's subscribe form.
  * subscribe_url_long `string`: The full version of this list's subscribe form (host will vary).
  * beamer_address `string`: The list's [Email Beamer](http://kb.mailchimp.com/campaigns/ways-to-build/use-email-beamer-to-create-a-campaign?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) address.
  * visibility `string` (values: pub, prv): Whether this list is [public or private](http://kb.mailchimp.com/lists/growth/about-publicity-settings?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
  * modules `array`: Any list-specific modules installed for this list.
  * stats `object`: Stats for the list. Many of these are cached for at least five minutes.
    * member_count `integer`: The number of active members in the list.
    * unsubscribe_count `integer`: The number of members who have unsubscribed from the list.
    * cleaned_count `integer`: The number of members cleaned from the list.
    * member_count_since_send `integer`: The number of active members in the list since the last campaign was sent.
    * unsubscribe_count_since_send `integer`: The number of members who have unsubscribed since the last campaign was sent.
    * cleaned_count_since_send `integer`: The number of members cleaned from the list since the last campaign was sent.
    * campaign_count `integer`: The number of campaigns in any status that use this list.
    * campaign_last_sent `string`: The date and time the last campaign was sent to this list. This is updated when a campaign is sent to 10 or more recipients.
    * merge_field_count `integer`: The number of merge vars for this list (not EMAIL, which is required).
    * avg_sub_rate `number`: The average number of subscriptions per month for the list (not returned if we haven't calculated it yet).
    * avg_unsub_rate `number`: The average number of unsubscriptions per month for the list (not returned if we haven't calculated it yet).
    * target_sub_rate `number`: The target number of subscriptions per month for the list to keep it growing (not returned if we haven't calculated it yet).
    * open_rate `number`: The average open rate (a percentage represented as a number between 0 and 100) per campaign for the list (not returned if we haven't calculated it yet).
    * click_rate `number`: The average click rate (a percentage represented as a number between 0 and 100) per campaign for the list (not returned if we haven't calculated it yet).
    * last_sub_date `string`: The date and time of the last time someone subscribed to this list.
    * last_unsub_date `string`: The date and time of the last time someone unsubscribed from this list.
  * _links [HATEOASLinks](#hateoaslinks)

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

#### Input
* input `object`
  * list_id **required** `string`: The unique id for the list.
  * body **required** `object`: Information about a specific list.
    * name **required** `string`: The name of the list.
    * contact **required** `object`: [Contact information displayed in campaign footers](http://kb.mailchimp.com/lists/growth/about-the-required-email-footer-content?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) to comply with international spam laws.
      * company **required** `string`: The company name for the list.
      * address1 **required** `string`: The street address for the list contact.
      * address2 `string`: The street address for the list contact.
      * city **required** `string`: The city for the list contact.
      * state **required** `string`: The state for the list contact.
      * zip **required** `string`: The postal or zip code for the list contact.
      * country **required** `string`: A two-character ISO3166 country code. Defaults to US if invalid.
      * phone `string`: The phone number for the list contact.
    * permission_reminder **required** `string`: The [permission reminder](http://kb.mailchimp.com/accounts/compliance-tips/edit-the-permission-reminder?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) for the list.
    * use_archive_bar `boolean`: Whether campaigns for this list use the [Archive Bar](http://kb.mailchimp.com/campaigns/archives/about-the-archive-bar?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) in archives by default.
    * campaign_defaults **required** `object`: [Default values for campaigns](http://kb.mailchimp.com/campaigns/design/set-up-email-subject-from-name-and-from-email-address-on-a-campaign?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) created for this list.
      * from_name **required** `string`: The default from name for campaigns sent to this list.
      * from_email **required** `string`: The default from email for campaigns sent to this list.
      * subject **required** `string`: The default subject line for campaigns sent to this list.
      * language **required** `string`: The default language for this lists's forms.
    * notify_on_subscribe `string`: The email address to send [subscribe notifications](http://kb.mailchimp.com/lists/managing-subscribers/change-subscribe-and-unsubscribe-notifications?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) to.
    * notify_on_unsubscribe `string`: The email address to send [unsubscribe notifications](http://kb.mailchimp.com/lists/managing-subscribers/change-subscribe-and-unsubscribe-notifications?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) to.
    * email_type_option **required** `boolean`: Whether the list supports [multiple formats for emails](http://kb.mailchimp.com/lists/growth/how-to-change-list-name-and-defaults?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs#Change-Subscription-Settings). When set to `true`, subscribers can choose whether they want to receive HTML or plain-text emails. When set to `false`, subscribers will receive HTML emails, with a plain-text alternative backup.
    * visibility `string` (values: pub, prv): Whether this list is [public or private](http://kb.mailchimp.com/lists/growth/about-publicity-settings?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: Information about a specific list.
  * id `string`: A string that uniquely identifies this list.
  * web_id `integer`: The ID used in the MailChimp web application. View this list in your MailChimp account at `https://{dc}.admin.mailchimp.com/lists/members/?id={web_id}`.
  * name `string`: The name of the list.
  * contact `object`: [Contact information displayed in campaign footers](http://kb.mailchimp.com/lists/growth/about-the-required-email-footer-content?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) to comply with international spam laws.
    * company `string`: The company name for the list.
    * address1 `string`: The street address for the list contact.
    * address2 `string`: The street address for the list contact.
    * city `string`: The city for the list contact.
    * state `string`: The state for the list contact.
    * zip `string`: The postal or zip code for the list contact.
    * country `string`: A two-character ISO3166 country code. Defaults to US if invalid.
    * phone `string`: The phone number for the list contact.
  * permission_reminder `string`: The [permission reminder](http://kb.mailchimp.com/accounts/compliance-tips/edit-the-permission-reminder?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) for the list.
  * use_archive_bar `boolean`: Whether campaigns for this list use the [Archive Bar](http://kb.mailchimp.com/campaigns/archives/about-the-archive-bar?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) in archives by default.
  * campaign_defaults `object`: [Default values for campaigns](http://kb.mailchimp.com/campaigns/design/set-up-email-subject-from-name-and-from-email-address-on-a-campaign?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) created for this list.
    * from_name `string`: The default from name for campaigns sent to this list.
    * from_email `string`: The default from email for campaigns sent to this list.
    * subject `string`: The default subject line for campaigns sent to this list.
    * language `string`: The default language for this lists's forms.
  * notify_on_subscribe `string`: The email address to send [subscribe notifications](http://kb.mailchimp.com/lists/managing-subscribers/change-subscribe-and-unsubscribe-notifications?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) to.
  * notify_on_unsubscribe `string`: The email address to send [unsubscribe notifications](http://kb.mailchimp.com/lists/managing-subscribers/change-subscribe-and-unsubscribe-notifications?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) to.
  * date_created `string`: The date and time that this list was created.
  * list_rating `integer`: An auto-generated activity score for the list (0-5).
  * email_type_option `boolean`: Whether the list supports [multiple formats for emails](http://kb.mailchimp.com/lists/growth/how-to-change-list-name-and-defaults?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs#Change-Subscription-Settings). When set to `true`, subscribers can choose whether they want to receive HTML or plain-text emails. When set to `false`, subscribers will receive HTML emails, with a plain-text alternative backup.
  * subscribe_url_short `string`: Our [EepURL shortened](http://kb.mailchimp.com/lists/signup-forms/share-your-signup-form?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs#Signup-Form-URL) version of this list's subscribe form.
  * subscribe_url_long `string`: The full version of this list's subscribe form (host will vary).
  * beamer_address `string`: The list's [Email Beamer](http://kb.mailchimp.com/campaigns/ways-to-build/use-email-beamer-to-create-a-campaign?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) address.
  * visibility `string` (values: pub, prv): Whether this list is [public or private](http://kb.mailchimp.com/lists/growth/about-publicity-settings?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
  * modules `array`: Any list-specific modules installed for this list.
  * stats `object`: Stats for the list. Many of these are cached for at least five minutes.
    * member_count `integer`: The number of active members in the list.
    * unsubscribe_count `integer`: The number of members who have unsubscribed from the list.
    * cleaned_count `integer`: The number of members cleaned from the list.
    * member_count_since_send `integer`: The number of active members in the list since the last campaign was sent.
    * unsubscribe_count_since_send `integer`: The number of members who have unsubscribed since the last campaign was sent.
    * cleaned_count_since_send `integer`: The number of members cleaned from the list since the last campaign was sent.
    * campaign_count `integer`: The number of campaigns in any status that use this list.
    * campaign_last_sent `string`: The date and time the last campaign was sent to this list. This is updated when a campaign is sent to 10 or more recipients.
    * merge_field_count `integer`: The number of merge vars for this list (not EMAIL, which is required).
    * avg_sub_rate `number`: The average number of subscriptions per month for the list (not returned if we haven't calculated it yet).
    * avg_unsub_rate `number`: The average number of unsubscriptions per month for the list (not returned if we haven't calculated it yet).
    * target_sub_rate `number`: The target number of subscriptions per month for the list to keep it growing (not returned if we haven't calculated it yet).
    * open_rate `number`: The average open rate (a percentage represented as a number between 0 and 100) per campaign for the list (not returned if we haven't calculated it yet).
    * click_rate `number`: The average click rate (a percentage represented as a number between 0 and 100) per campaign for the list (not returned if we haven't calculated it yet).
    * last_sub_date `string`: The date and time of the last time someone subscribed to this list.
    * last_unsub_date `string`: The date and time of the last time someone unsubscribed from this list.
  * _links [HATEOASLinks](#hateoaslinks)

### deleteListsId
Delete a list from your MailChimp account. If you delete a list, you'll lose the list history—including subscriber activity, unsubscribes, complaints, and bounces. You’ll also lose subscribers’ email addresses, unless you [exported and backed up your list](http://kb.mailchimp.com/lists/managing-subscribers/view-or-export-a-list?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs#View-or-Export-a-List).


```js
mailchimp.deleteListsId({
  "list_id": ""
}, context)
```

#### Input
* input `object`
  * list_id **required** `string`: The unique id for the list.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
*Output schema unknown*

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

#### Input
* input `object`
  * list_id **required** `string`: The unique id for the list.
  * body **required** `object`: Members to subscribe to or unsubscribe from a list.
    * members **required** `array`: An array of objects, each representing an email address and the subscription status for a specific list. Up to 500 members may be added or updated with each API call.
      * items `object`: Individuals who are currently or have been previously subscribed to this list, including members who have bounced or unsubscribed.
        * email_address `string`: Email address for a subscriber.
        * email_type `string`: Type of email this member asked to get ('html' or 'text').
        * status `string` (values: subscribed, unsubscribed, cleaned, pending): Subscriber's current status.
        * merge_fields `object`: An individual merge var and value for a member.
        * interests `object`: The key of this object's properties is the ID of the interest in question.
        * language `string`: If set/detected, the [subscriber's language](http://kb.mailchimp.com/lists/managing-subscribers/view-and-edit-subscriber-languages?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
        * vip `boolean`: [VIP status](http://kb.mailchimp.com/lists/managing-subscribers/designate-and-send-to-vip-subscribers?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) for subscriber.
        * location `object`: Subscriber location information.
          * latitude `number`: The location latitude.
          * longitude `number`: The location longitude.
          * gmtoff `integer`: The time difference in hours from GMT.
          * dstoff `integer`: The offset for timezones where daylight saving time is observed.
          * country_code `string`: The unique code for the location country.
          * timezone `string`: The timezone for the location.
        * ip_signup `string`: IP address the subscriber signed up from.
        * timestamp_signup `string`: The date and time the subscriber signed up for the list.
        * ip_opt `string`: The IP address the subscriber used to confirm their opt-in status.
        * timestamp_opt `string`: The date and time the subscribe confirmed their opt-in status.
    * update_existing `boolean`: Whether this batch operation will change existing members' subscription status.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: Batch update list members.
  * new_members `array`: An array of objects, each representing a new member that was added to the list.
    * items [ListMember](#listmember)
  * updated_members `array`: An array of objects, each representing an existing list member whose subscription status was updated.
    * items [ListMember](#listmember)
  * errors `array`: An array of objects, each representing an email address that could not be added to the list or updated and an error message providing more details.
    * items `object`
      * email_address `string`: The email address that could not be added or updated.
      * error `string`: The error message indicating why the email address could not be added or updated.
  * total_created `integer`: The total number of items matching the query, irrespective of pagination.
  * total_updated `integer`: The total number of items matching the query, irrespective of pagination.
  * error_count `integer`: The total number of items matching the query, irrespective of pagination.
  * _links [HATEOASLinks](#hateoaslinks)

### getListsIdAbuseReports
Get all abuse reports for a specific list.


```js
mailchimp.getListsIdAbuseReports({
  "list_id": ""
}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * count `integer`: The number of records to return. [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **10**.
  * offset `integer`: The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **0**.
  * list_id **required** `string`: The unique id for the list.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: A collection of abuse complaints for a specific list. An abuse complaint occurs when your recipient clicks to 'report spam' in their email program.
  * abuse_reports `array`: An array of objects, each representing an abuse report resource.
    * items `object`: Details of abuse complaints for a specific list. An abuse complaint occurs when your recipient clicks to 'report spam' in their email program.
      * id `integer`: The id for the abuse report
      * campaign_id `string`: The campaign id for the abuse report
      * list_id `string`: The list id for the abuse report.
      * email_id `string`: The MD5 hash of the lowercase version of the list member's email address.
      * email_address `string`: Email address for a subscriber.
      * merge_fields `object`: An individual merge var and value for a member.
      * vip `boolean`: [VIP status](http://kb.mailchimp.com/lists/managing-subscribers/designate-and-send-to-vip-subscribers?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) for subscriber.
      * date `string`: Date for the abuse report
      * _links [HATEOASLinks](#hateoaslinks)
  * list_id `string`: The list id for the abuse report.
  * total_items [CollectionTotal](#collectiontotal)
  * _links [HATEOASLinks](#hateoaslinks)

### getListsIdAbuseReportsId
Get details about a specific abuse report.


```js
mailchimp.getListsIdAbuseReportsId({
  "list_id": "",
  "report_id": null
}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * count `integer`: The number of records to return. [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **10**.
  * offset `integer`: The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **0**.
  * list_id **required** `string`: The unique id for the list.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: Details of abuse complaints for a specific list. An abuse complaint occurs when your recipient clicks to 'report spam' in their email program.
  * id `integer`: The id for the abuse report
  * campaign_id `string`: The campaign id for the abuse report
  * list_id `string`: The list id for the abuse report.
  * email_id `string`: The MD5 hash of the lowercase version of the list member's email address.
  * email_address `string`: Email address for a subscriber.
  * merge_fields `object`: An individual merge var and value for a member.
  * vip `boolean`: [VIP status](http://kb.mailchimp.com/lists/managing-subscribers/designate-and-send-to-vip-subscribers?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) for subscriber.
  * date `string`: Date for the abuse report
  * _links [HATEOASLinks](#hateoaslinks)

### getListsIdActivity
Get up to the previous 180 days of daily detailed aggregated activity stats for a list, not including Automation activity.


```js
mailchimp.getListsIdActivity({
  "list_id": ""
}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * list_id **required** `string`: The unique id for the list.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: Up to the previous 180 days of daily detailed aggregated activity stats for a specific list. Does not include AutoResponder or Automation activity.
  * activity `array`: Recent list activity.
    * items `object`: One day's worth of list activity. Doesn't include Automation activity.
      * day `string`: The date for the activity summary.
      * emails_sent `integer`: The total number of emails sent on the date for the activity summary.
      * unique_opens `integer`: The number of unique opens.
      * recipient_clicks `integer`: The number of clicks.
      * hard_bounce `integer`: The number of hard bounces.
      * soft_bounce `integer`: The number of soft bounces
      * subs `integer`: The number of subscribes.
      * unsubs `integer`: The number of unsubscribes.
      * other_adds `integer`: The number of subscribers who may have been added outside of the [double opt-in process](http://kb.mailchimp.com/lists/signup-forms/the-double-opt-in-process?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs), such as imports or API activity.
      * other_removes `integer`: The number of subscribers who may have been removed outside of unsubscribing or reporting an email as spam (for example, deleted subscribers).
      * _links [HATEOASLinks](#hateoaslinks)
  * list_id `string`: The unique id for the list.
  * total_items [CollectionTotal](#collectiontotal)
  * _links [HATEOASLinks](#hateoaslinks)

### getListsIdClients
Get a list of the top email clients based on user-agent strings.


```js
mailchimp.getListsIdClients({
  "list_id": ""
}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * list_id **required** `string`: The unique id for the list.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: The top email clients based on user-agent strings.
  * clients `array`: An array of top email clients.
    * items `object`: The email client.
      * client `string`: The name of the email client.
      * members `integer`: The number of subscribed members who used this email client.
  * list_id `string`: The list id.
  * total_items [CollectionTotal](#collectiontotal)
  * _links [HATEOASLinks](#hateoaslinks)

### getListsIdGrowthHistory
Get a month-by-month summary of a specific list's growth activity.


```js
mailchimp.getListsIdGrowthHistory({
  "list_id": ""
}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * count `integer`: The number of records to return. [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **10**.
  * offset `integer`: The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **0**.
  * list_id **required** `string`: The unique id for the list.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: A month-by-month summary of a specific list's growth activity.
  * history `array`: An array of objects, each representing a monthly growth report for a list.
    * items `object`: A summary of a specific list's growth activity for a specific month and year.
      * list_id `string`: The list id for the growth activity report.
      * month `string`: The month that the growth history is describing.
      * existing `integer`: Existing members on the list for a specific month.
      * imports `integer`: Imported members on the list for a specific month.
      * optins `integer`: Newly opted-in members on the list for a specific month.
      * _links [HATEOASLinks](#hateoaslinks)
  * list_id `string`: The list id.
  * total_items [CollectionTotal](#collectiontotal)
  * _links [HATEOASLinks](#hateoaslinks)

### getListsIdGrowthHistoryId
Get a summary of a specific list's growth activity for a specific month and year.


```js
mailchimp.getListsIdGrowthHistoryId({
  "list_id": "",
  "month": null
}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * list_id **required** `string`: The unique id for the list.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: A summary of a specific list's growth activity for a specific month and year.
  * list_id `string`: The list id for the growth activity report.
  * month `string`: The month that the growth history is describing.
  * existing `integer`: Existing members on the list for a specific month.
  * imports `integer`: Imported members on the list for a specific month.
  * optins `integer`: Newly opted-in members on the list for a specific month.
  * _links [HATEOASLinks](#hateoaslinks)

### getListsIdInterestCategories
Get information about a list's interest categories.


```js
mailchimp.getListsIdInterestCategories({
  "list_id": ""
}, context)
```

#### Input
* input `object`
  * list_id **required** `string`: The unique id for the list.
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * count `integer`: The number of records to return. [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **10**.
  * offset `integer`: The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **0**.
  * type `string`: Restrict results a type of interest group
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: Information about this list's interest categories.
  * list_id `string`: The ID for the list that this category belongs to.
  * categories `array`: This array contains individual interest categories.
    * items `object`: Interest categories organize interests, which are used to group subscribers based on their preferences. These correspond to Group Titles the application.
      * list_id `string`: The unique list id for the category.
      * id `string`: The id for the interest category.
      * title `string`: The text description of this category. This field appears on signup forms and is often phrased as a question.
      * display_order `integer`: The order that the categories are displayed in the list. Lower numbers display first.
      * type `string` (values: checkboxes, dropdown, radio, hidden): Determines how this category’s interests appear on signup forms.
      * _links [HATEOASLinks](#hateoaslinks)
  * total_items [CollectionTotal](#collectiontotal)
  * _links [HATEOASLinks](#hateoaslinks)

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

#### Input
* input `object`
  * list_id **required** `string`: The unique id for the list.
  * body **required** `object`: Interest categories organize interests, which are used to group subscribers based on their preferences. These correspond to Group Titles the application.
    * title **required** `string`: The text description of this category. This field appears on signup forms and is often phrased as a question.
    * display_order `integer`: The order that the categories are displayed in the list. Lower numbers display first.
    * type **required** `string` (values: checkboxes, dropdown, radio, hidden): Determines how this category’s interests appear on signup forms.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: Interest categories organize interests, which are used to group subscribers based on their preferences. These correspond to Group Titles the application.
  * list_id `string`: The unique list id for the category.
  * id `string`: The id for the interest category.
  * title `string`: The text description of this category. This field appears on signup forms and is often phrased as a question.
  * display_order `integer`: The order that the categories are displayed in the list. Lower numbers display first.
  * type `string` (values: checkboxes, dropdown, radio, hidden): Determines how this category’s interests appear on signup forms.
  * _links [HATEOASLinks](#hateoaslinks)

### getListsIdInterestCategoriesId
Get information about a specific interest category.


```js
mailchimp.getListsIdInterestCategoriesId({
  "list_id": "",
  "interest_category_id": ""
}, context)
```

#### Input
* input `object`
  * list_id **required** `string`: The unique id for the list.
  * interest_category_id **required** `string`: The unique id for the interest category.
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: Interest categories organize interests, which are used to group subscribers based on their preferences. These correspond to Group Titles the application.
  * list_id `string`: The unique list id for the category.
  * id `string`: The id for the interest category.
  * title `string`: The text description of this category. This field appears on signup forms and is often phrased as a question.
  * display_order `integer`: The order that the categories are displayed in the list. Lower numbers display first.
  * type `string` (values: checkboxes, dropdown, radio, hidden): Determines how this category’s interests appear on signup forms.
  * _links [HATEOASLinks](#hateoaslinks)

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

#### Input
* input `object`
  * list_id **required** `string`: The unique id for the list.
  * interest_category_id **required** `string`: The unique id for the interest category.
  * body **required** `object`: Interest categories organize interests, which are used to group subscribers based on their preferences. These correspond to Group Titles the application.
    * title **required** `string`: The text description of this category. This field appears on signup forms and is often phrased as a question.
    * display_order `integer`: The order that the categories are displayed in the list. Lower numbers display first.
    * type **required** `string` (values: checkboxes, dropdown, radio, hidden): Determines how this category’s interests appear on signup forms.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: Interest categories organize interests, which are used to group subscribers based on their preferences. These correspond to Group Titles the application.
  * list_id `string`: The unique list id for the category.
  * id `string`: The id for the interest category.
  * title `string`: The text description of this category. This field appears on signup forms and is often phrased as a question.
  * display_order `integer`: The order that the categories are displayed in the list. Lower numbers display first.
  * type `string` (values: checkboxes, dropdown, radio, hidden): Determines how this category’s interests appear on signup forms.
  * _links [HATEOASLinks](#hateoaslinks)

### deleteListsIdInterestCategoriesId
Delete a specific interest category.


```js
mailchimp.deleteListsIdInterestCategoriesId({
  "list_id": "",
  "interest_category_id": ""
}, context)
```

#### Input
* input `object`
  * list_id **required** `string`: The unique id for the list.
  * interest_category_id **required** `string`: The unique id for the interest category.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
*Output schema unknown*

### getListsIdInterestCategoriesIdInterests
Get a list of this category's interests.


```js
mailchimp.getListsIdInterestCategoriesIdInterests({
  "list_id": "",
  "interest_category_id": ""
}, context)
```

#### Input
* input `object`
  * list_id **required** `string`: The unique id for the list.
  * interest_category_id **required** `string`: The unique id for the interest category.
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * count `integer`: The number of records to return. [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **10**.
  * offset `integer`: The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **0**.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: A list of this category's interests
  * interests `array`: An array of this category's interests
    * items `object`: Assign subscribers to interests to group them together. Interests are referred to as 'group names' in the MailChimp application.
      * category_id `string`: The id for the interest category.
      * list_id `string`: The ID for the list that this interest belongs to.
      * id `string`: The ID for the interest.
      * name `string`: The name of the interest. This can be shown publicly on a subscription form.
      * subscriber_count `string`: The number of subscribers associated with this interest.
      * display_order `integer`: The display order for interests.
      * _links [HATEOASLinks](#hateoaslinks)
  * list_id `string`: The unique list id that the interests belong to.
  * category_id `string`: The id for the interest category.
  * total_items [CollectionTotal](#collectiontotal)
  * _links [HATEOASLinks](#hateoaslinks)

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

#### Input
* input `object`
  * list_id **required** `string`: The unique id for the list.
  * interest_category_id **required** `string`: The unique id for the interest category.
  * body **required** `object`: Assign subscribers to interests to group them together. Interests are referred to as 'group names' in the MailChimp application.
    * name **required** `string`: The name of the interest. This can be shown publicly on a subscription form.
    * display_order `integer`: The display order for interests.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: Assign subscribers to interests to group them together. Interests are referred to as 'group names' in the MailChimp application.
  * category_id `string`: The id for the interest category.
  * list_id `string`: The ID for the list that this interest belongs to.
  * id `string`: The ID for the interest.
  * name `string`: The name of the interest. This can be shown publicly on a subscription form.
  * subscriber_count `string`: The number of subscribers associated with this interest.
  * display_order `integer`: The display order for interests.
  * _links [HATEOASLinks](#hateoaslinks)

### getListsIdInterestCategoriesIdInterestsId
Get interests or 'group names' for a specific category.


```js
mailchimp.getListsIdInterestCategoriesIdInterestsId({
  "list_id": "",
  "interest_category_id": "",
  "interest_id": ""
}, context)
```

#### Input
* input `object`
  * list_id **required** `string`: The unique id for the list.
  * interest_category_id **required** `string`: The unique id for the interest category.
  * interest_id **required** `string`: The specific interest or 'group name'.
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: Assign subscribers to interests to group them together. Interests are referred to as 'group names' in the MailChimp application.
  * category_id `string`: The id for the interest category.
  * list_id `string`: The ID for the list that this interest belongs to.
  * id `string`: The ID for the interest.
  * name `string`: The name of the interest. This can be shown publicly on a subscription form.
  * subscriber_count `string`: The number of subscribers associated with this interest.
  * display_order `integer`: The display order for interests.
  * _links [HATEOASLinks](#hateoaslinks)

### patchListsIdInterestCategoriesIdInterestsId
Update interests or 'group names' for a specific category.


```js
mailchimp.patchListsIdInterestCategoriesIdInterestsId({
  "list_id": "",
  "interest_category_id": "",
  "interest_id": ""
}, context)
```

#### Input
* input `object`
  * list_id **required** `string`: The unique id for the list.
  * interest_category_id **required** `string`: The unique id for the interest category.
  * interest_id **required** `string`: The specific interest or 'group name'.
  * body `object`: Assign subscribers to interests to group them together. Interests are referred to as 'group names' in the MailChimp application.
    * name **required** `string`: The name of the interest. This can be shown publicly on a subscription form.
    * display_order `integer`: The display order for interests.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: Assign subscribers to interests to group them together. Interests are referred to as 'group names' in the MailChimp application.
  * category_id `string`: The id for the interest category.
  * list_id `string`: The ID for the list that this interest belongs to.
  * id `string`: The ID for the interest.
  * name `string`: The name of the interest. This can be shown publicly on a subscription form.
  * subscriber_count `string`: The number of subscribers associated with this interest.
  * display_order `integer`: The display order for interests.
  * _links [HATEOASLinks](#hateoaslinks)

### deleteListsIdInterestCategoriesIdInterestsId
Delete interests or group names in a specific category.


```js
mailchimp.deleteListsIdInterestCategoriesIdInterestsId({
  "list_id": "",
  "interest_category_id": "",
  "interest_id": ""
}, context)
```

#### Input
* input `object`
  * list_id **required** `string`: The unique id for the list.
  * interest_category_id **required** `string`: The unique id for the interest category.
  * interest_id **required** `string`: The specific interest or 'group name'.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
*Output schema unknown*

### getListsIdSegments
Get information about all available segments for a specific list.


```js
mailchimp.getListsIdSegments({
  "list_id": ""
}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * count `integer`: The number of records to return. [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **10**.
  * offset `integer`: The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **0**.
  * list_id **required** `string`: The unique id for the list.
  * type `string`: Limit results based on segment type.
  * since_created_at `string`: Restrict results to segments created after the set time.
  * before_created_at `string`: Restrict results to segments created before the set time.
  * since_updated_at `string`: Restrict results to segments update after the set time.
  * before_updated_at `string`: Restrict results to segments update before the set time.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: A list of available segments.
  * segments `array`: An array of objects, each representing a list segment.
    * items `object`: Information about a specific segment.
      * id `integer`: The unique id for the segment.
      * name `string`: The name of the segment.
      * member_count `integer`: The number of active subscribers currently included in the segment.
      * type `string` (values: saved, static, fuzzy): The type of segment.
      * created_at `string`: The date and time the segment was created.
      * updated_at `string`: The date and time the segment was last updated.
      * options `object`: The conditions of the segment. Static and fuzzy segments don't have conditions.
        * match `string` (values: any, all): Match type.
        * conditions `array`: An array of segment conditions.
          * items [SegmentCondition](#segmentcondition)
      * list_id `string`: The list id.
      * _links [HATEOASLinks](#hateoaslinks)
  * list_id `string`: The list id.
  * total_items [CollectionTotal](#collectiontotal)
  * _links [HATEOASLinks](#hateoaslinks)

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

#### Input
* input `object`
  * list_id **required** `string`: The unique id for the list.
  * body **required** `object`: Information about a specific list segment.
    * name **required** `string`: The name of the segment.
    * static_segment `array`: An array of emails to be used for a static segment. Any emails provided that are not present on the list will be ignored. Passing an empty array will create a static segment without any subscribers. This field cannot be provided with the options field.
    * options `object`: The [conditions of the segment](http://kb.mailchimp.com/segments/how-to-use-saved-segments?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs). Static and fuzzy segments don't have conditions.
      * match `string` (values: any, all): Match type.
      * conditions `array`: An array of segment conditions.
        * items [SegmentCondition](#segmentcondition)
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: Information about a specific segment.
  * id `integer`: The unique id for the segment.
  * name `string`: The name of the segment.
  * member_count `integer`: The number of active subscribers currently included in the segment.
  * type `string` (values: saved, static, fuzzy): The type of segment.
  * created_at `string`: The date and time the segment was created.
  * updated_at `string`: The date and time the segment was last updated.
  * options `object`: The conditions of the segment. Static and fuzzy segments don't have conditions.
    * match `string` (values: any, all): Match type.
    * conditions `array`: An array of segment conditions.
      * items [SegmentCondition](#segmentcondition)
  * list_id `string`: The list id.
  * _links [HATEOASLinks](#hateoaslinks)

### getListsIdSegmentsId
Get information about a specific segment.


```js
mailchimp.getListsIdSegmentsId({
  "list_id": "",
  "segment_id": ""
}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * list_id **required** `string`: The unique id for the list.
  * segment_id **required** `string`: The unique id for the segment.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: Information about a specific segment.
  * id `integer`: The unique id for the segment.
  * name `string`: The name of the segment.
  * member_count `integer`: The number of active subscribers currently included in the segment.
  * type `string` (values: saved, static, fuzzy): The type of segment.
  * created_at `string`: The date and time the segment was created.
  * updated_at `string`: The date and time the segment was last updated.
  * options `object`: The conditions of the segment. Static and fuzzy segments don't have conditions.
    * match `string` (values: any, all): Match type.
    * conditions `array`: An array of segment conditions.
      * items [SegmentCondition](#segmentcondition)
  * list_id `string`: The list id.
  * _links [HATEOASLinks](#hateoaslinks)

### deleteListsIdSegmentsId
Delete a specific segment in a list.


```js
mailchimp.deleteListsIdSegmentsId({
  "list_id": "",
  "segment_id": ""
}, context)
```

#### Input
* input `object`
  * list_id **required** `string`: The unique id for the list.
  * segment_id **required** `string`: The unique id for the segment.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
*Output schema unknown*

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

#### Input
* input `object`
  * list_id **required** `string`: The unique id for the list.
  * segment_id **required** `string`: The unique id for the segment.
  * body **required** `object`: Information about a specific list segment.
    * name **required** `string`: The name of the segment.
    * static_segment `array`: An array of emails to be used for a static segment. Any emails provided that are not present on the list will be ignored. Passing an empty array for an existing static segment will reset that segment and remove all members. This field cannot be provided with the `options` field.
    * options `object`: The [conditions of the segment](http://kb.mailchimp.com/segments/how-to-use-saved-segments?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs). Static and fuzzy segments don't have conditions.
      * match `string` (values: any, all): Match type.
      * conditions `array`: An array of segment conditions.
        * items [SegmentCondition](#segmentcondition)
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: Information about a specific segment.
  * id `integer`: The unique id for the segment.
  * name `string`: The name of the segment.
  * member_count `integer`: The number of active subscribers currently included in the segment.
  * type `string` (values: saved, static, fuzzy): The type of segment.
  * created_at `string`: The date and time the segment was created.
  * updated_at `string`: The date and time the segment was last updated.
  * options `object`: The conditions of the segment. Static and fuzzy segments don't have conditions.
    * match `string` (values: any, all): Match type.
    * conditions `array`: An array of segment conditions.
      * items [SegmentCondition](#segmentcondition)
  * list_id `string`: The list id.
  * _links [HATEOASLinks](#hateoaslinks)

### postListsIdSegmentsId
Batch add/remove list members to static segment


```js
mailchimp.postListsIdSegmentsId({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** `object`: Members to add/remove to/from a static segment
    * members_to_add `array`: An array of emails to be used for a static segment. Any emails provided that are not present on the list will be ignored.
      * items `string`
    * members_to_remove `array`: An array of emails to be used for a static segment. Any emails provided that are not present on the list will be ignored.
      * items `string`
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: Batch add/remove List members to/from static segment
  * members_added `array`: An array of objects, each representing a new member that was added to the static segment.
    * items [ListMember](#listmember)
  * members_removed `array`: An array of objects, each representing an existing list member that got deleted from the static segment.
    * items [ListMember](#listmember)
  * errors `array`: An array of objects, each representing an array of email addresses that could not be added to the segment or removed and an error message providing more details.
    * items `object`
      * email_addresses `array`: Email addresses added to the static segment or removed
      * error `string`: The error message indicating why the email addresses could not be added or updated.
  * total_added `integer`: The total number of items matching the query, irrespective of pagination.
  * total_removed `integer`: The total number of items matching the query, irrespective of pagination.
  * error_count `integer`: The total number of items matching the query, irrespective of pagination.
  * _links [HATEOASLinks](#hateoaslinks)

### getListsIdSegmentsIdMembers
Get information about members in a [saved segment](http://kb.mailchimp.com/segments/how-to-use-saved-segments?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).


```js
mailchimp.getListsIdSegmentsIdMembers({
  "list_id": "",
  "segment_id": ""
}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * count `integer`: The number of records to return. [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **10**.
  * offset `integer`: The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **0**.
  * list_id **required** `string`: The unique id for the list.
  * segment_id **required** `string`: The unique id for the segment.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: View members in a specific list segment.
  * members `array`: An array of objects, each representing a specific list member.
    * items `object`: Individuals who are currently or have been previously subscribed to this list, including members who have bounced or unsubscribed.
      * id `string`: The MD5 hash of the lowercase version of the list member's email address.
      * email_address `string`: Email address for a subscriber.
      * unique_email_id `string`: An identifier for the address across all of MailChimp.
      * email_type `string`: Type of email this member asked to get ('html' or 'text').
      * status `string` (values: subscribed, unsubscribed, cleaned, pending, transactional): Subscriber's current status.
      * merge_fields `object`: An individual merge var and value for a member.
      * interests `object`: The key of this object's properties is the ID of the interest in question.
      * stats `object`: Open and click rates for this subscriber.
        * avg_open_rate `number`: A subscriber's average open rate.
        * avg_click_rate `number`: A subscriber's average clickthrough rate.
      * ip_signup `string`: IP address the subscriber signed up from.
      * timestamp_signup `string`: The date and time the subscriber signed up for the list.
      * ip_opt `string`: The IP address the subscriber used to confirm their opt-in status.
      * timestamp_opt `string`: The date and time the subscribe confirmed their opt-in status.
      * member_rating `integer`: Star rating for this member, between 1 and 5.
      * last_changed `string`: The date and time the member's info was last changed.
      * language `string`: If set/detected, the [subscriber's language](http://kb.mailchimp.com/lists/managing-subscribers/view-and-edit-subscriber-languages?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
      * vip `boolean`: [VIP status](http://kb.mailchimp.com/lists/managing-subscribers/designate-and-send-to-vip-subscribers?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) for subscriber.
      * email_client `string`: The list member's email client.
      * location `object`: Subscriber location information.
        * latitude `number`: The location latitude.
        * longitude `number`: The location longitude.
        * gmtoff `integer`: The time difference in hours from GMT.
        * dstoff `integer`: The offset for timezones where daylight saving time is observed.
        * country_code `string`: The unique code for the location country.
        * timezone `string`: The timezone for the location.
      * last_note `object`: The most recent Note added about this member.
        * note_id `integer`: The note id.
        * created_at `string`: The date and time the note was created.
        * created_by `string`: The author of the note.
        * note `string`: The content of the note.
      * list_id `string`: The list id.
      * _links [HATEOASLinks](#hateoaslinks)
  * total_items [CollectionTotal](#collectiontotal)
  * _links [HATEOASLinks](#hateoaslinks)

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

#### Input
* input `object`
  * list_id **required** `string`: The unique id for the list.
  * segment_id **required** `string`: The unique id for the segment.
  * body **required** `object`
    * email_address **required** `string`: Email address for a subscriber.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: Individuals who are currently or have been previously subscribed to this list, including members who have bounced or unsubscribed.
  * id `string`: The MD5 hash of the lowercase version of the list member's email address.
  * email_address `string`: Email address for a subscriber.
  * unique_email_id `string`: An identifier for the address across all of MailChimp.
  * email_type `string`: Type of email this member asked to get ('html' or 'text').
  * status `string` (values: subscribed, unsubscribed, cleaned, pending, transactional): Subscriber's current status.
  * merge_fields `object`: An individual merge var and value for a member.
  * interests `object`: The key of this object's properties is the ID of the interest in question.
  * stats `object`: Open and click rates for this subscriber.
    * avg_open_rate `number`: A subscriber's average open rate.
    * avg_click_rate `number`: A subscriber's average clickthrough rate.
  * ip_signup `string`: IP address the subscriber signed up from.
  * timestamp_signup `string`: The date and time the subscriber signed up for the list.
  * ip_opt `string`: The IP address the subscriber used to confirm their opt-in status.
  * timestamp_opt `string`: The date and time the subscribe confirmed their opt-in status.
  * member_rating `integer`: Star rating for this member, between 1 and 5.
  * last_changed `string`: The date and time the member's info was last changed.
  * language `string`: If set/detected, the [subscriber's language](http://kb.mailchimp.com/lists/managing-subscribers/view-and-edit-subscriber-languages?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
  * vip `boolean`: [VIP status](http://kb.mailchimp.com/lists/managing-subscribers/designate-and-send-to-vip-subscribers?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) for subscriber.
  * email_client `string`: The list member's email client.
  * location `object`: Subscriber location information.
    * latitude `number`: The location latitude.
    * longitude `number`: The location longitude.
    * gmtoff `integer`: The time difference in hours from GMT.
    * dstoff `integer`: The offset for timezones where daylight saving time is observed.
    * country_code `string`: The unique code for the location country.
    * timezone `string`: The timezone for the location.
  * last_note `object`: The most recent Note added about this member.
    * note_id `integer`: The note id.
    * created_at `string`: The date and time the note was created.
    * created_by `string`: The author of the note.
    * note `string`: The content of the note.
  * list_id `string`: The list id.
  * _links [HATEOASLinks](#hateoaslinks)

### deleteListsIdSegmentsIdMembersId
Remove a member from the specified static segment.


```js
mailchimp.deleteListsIdSegmentsIdMembersId({
  "list_id": "",
  "segment_id": "",
  "subscriber_hash": ""
}, context)
```

#### Input
* input `object`
  * list_id **required** `string`: The unique id for the list.
  * segment_id **required** `string`: The unique id for the segment.
  * subscriber_hash **required** `string`: The MD5 hash of the lowercase version of the list member's email address.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
*Output schema unknown*

### getListsIdMembers
Get information about members in a specific MailChimp list.


```js
mailchimp.getListsIdMembers({
  "list_id": ""
}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * count `integer`: The number of records to return. [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **10**.
  * offset `integer`: The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **0**.
  * list_id **required** `string`: The unique id for the list.
  * email_type `string`: The email type.
  * status `string`: The subscriber's status.
  * since_timestamp_opt `string`: Restrict results to subscribers who opted-in after the set timeframe. We recommend [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time format: 2015-10-21T15:41:36+00:00.
  * before_timestamp_opt `string`: Restrict results to subscribers who opted-in before the set timeframe. We recommend [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time format: 2015-10-21T15:41:36+00:00.
  * since_last_changed `string`: Restrict results to subscribers whose information changed after the set timeframe.
  * before_last_changed `string`: Restrict results to subscribers whose information changed before the set timeframe.
  * unique_email_id `string`: A unique identifier for the email address across all MailChimp lists. This parameter can be found in any links with [Ecommerce Tracking](http://kb.mailchimp.com/integrations/e-commerce/how-to-use-mailchimp-for-e-commerce?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) enabled.
  * vip_only `boolean`: A filter to return only the list's VIP members. Passing `true` will restrict results to VIP list members, passing `false` will return all list members.
  * interest_category_id `string`: The unique id for the interest category.
  * interest_ids `string`: Used to filter list members by interests. Must be accompanied by interest_category_id and interest_match. The value must be a comma separated list of interest ids present for the given interest category.
  * interest_match `string` (values: any, all, none): Used to filter list members by interests. Must be accompanied by interest_category_id and interest_ids. "any" will match a member with any of the interest supplied, "all" will only match members with every interest supplied, and "none" will match members without any of the interest supplied.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: Manage members of a specific MailChimp list, including currently subscribed, unsubscribed, and bounced members.
  * members `array`: An array of objects, each representing a specific list member.
    * items `object`: Individuals who are currently or have been previously subscribed to this list, including members who have bounced or unsubscribed.
      * id `string`: The MD5 hash of the lowercase version of the list member's email address.
      * email_address `string`: Email address for a subscriber.
      * unique_email_id `string`: An identifier for the address across all of MailChimp.
      * email_type `string`: Type of email this member asked to get ('html' or 'text').
      * status `string` (values: subscribed, unsubscribed, cleaned, pending, transactional): Subscriber's current status.
      * unsubscribe_reason `string`: A subscriber's reason for unsubscribing.
      * merge_fields `object`: An individual merge var and value for a member.
      * interests `object`: The key of this object's properties is the ID of the interest in question.
      * stats `object`: Open and click rates for this subscriber.
        * avg_open_rate `number`: A subscriber's average open rate.
        * avg_click_rate `number`: A subscriber's average clickthrough rate.
      * ip_signup `string`: IP address the subscriber signed up from.
      * timestamp_signup `string`: The date and time the subscriber signed up for the list.
      * ip_opt `string`: The IP address the subscriber used to confirm their opt-in status.
      * timestamp_opt `string`: The date and time the subscribe confirmed their opt-in status.
      * member_rating `integer`: Star rating for this member, between 1 and 5.
      * last_changed `string`: The date and time the member's info was last changed.
      * language `string`: If set/detected, the [subscriber's language](http://kb.mailchimp.com/lists/managing-subscribers/view-and-edit-subscriber-languages?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
      * vip `boolean`: [VIP status](http://kb.mailchimp.com/lists/managing-subscribers/designate-and-send-to-vip-subscribers?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) for subscriber.
      * email_client `string`: The list member's email client.
      * location `object`: Subscriber location information.
        * latitude `number`: The location latitude.
        * longitude `number`: The location longitude.
        * gmtoff `integer`: The time difference in hours from GMT.
        * dstoff `integer`: The offset for timezones where daylight saving time is observed.
        * country_code `string`: The unique code for the location country.
        * timezone `string`: The timezone for the location.
      * last_note `object`: The most recent Note added about this member.
        * note_id `integer`: The note id.
        * created_at `string`: The date and time the note was created.
        * created_by `string`: The author of the note.
        * note `string`: The content of the note.
      * list_id `string`: The list id.
      * _links [HATEOASLinks](#hateoaslinks)
  * list_id `string`: The list id.
  * total_items [CollectionTotal](#collectiontotal)
  * _links [HATEOASLinks](#hateoaslinks)

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

#### Input
* input `object`
  * list_id **required** `string`: The unique id for the list.
  * body **required** `object`: Individuals who are currently or have been previously subscribed to this list, including members who have bounced or unsubscribed.
    * email_address **required** `string`: Email address for a subscriber.
    * email_type `string`: Type of email this member asked to get ('html' or 'text').
    * status **required** `string` (values: subscribed, unsubscribed, cleaned, pending): Subscriber's current status.
    * merge_fields `object`: An individual merge var and value for a member.
    * interests `object`: The key of this object's properties is the ID of the interest in question.
    * language `string`: If set/detected, the [subscriber's language](http://kb.mailchimp.com/lists/managing-subscribers/view-and-edit-subscriber-languages?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
    * vip `boolean`: [VIP status](http://kb.mailchimp.com/lists/managing-subscribers/designate-and-send-to-vip-subscribers?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) for subscriber.
    * location `object`: Subscriber location information.
      * latitude `number`: The location latitude.
      * longitude `number`: The location longitude.
    * ip_signup `string`: IP address the subscriber signed up from.
    * timestamp_signup `string`: The date and time the subscriber signed up for the list.
    * ip_opt `string`: The IP address the subscriber used to confirm their opt-in status.
    * timestamp_opt `string`: The date and time the subscribe confirmed their opt-in status.
    * _links [HATEOASLinks](#hateoaslinks)
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: Individuals who are currently or have been previously subscribed to this list, including members who have bounced or unsubscribed.
  * id `string`: The MD5 hash of the lowercase version of the list member's email address.
  * email_address `string`: Email address for a subscriber.
  * unique_email_id `string`: An identifier for the address across all of MailChimp.
  * email_type `string`: Type of email this member asked to get ('html' or 'text').
  * status `string` (values: subscribed, unsubscribed, cleaned, pending, transactional): Subscriber's current status.
  * unsubscribe_reason `string`: A subscriber's reason for unsubscribing.
  * merge_fields `object`: An individual merge var and value for a member.
  * interests `object`: The key of this object's properties is the ID of the interest in question.
  * stats `object`: Open and click rates for this subscriber.
    * avg_open_rate `number`: A subscriber's average open rate.
    * avg_click_rate `number`: A subscriber's average clickthrough rate.
  * ip_signup `string`: IP address the subscriber signed up from.
  * timestamp_signup `string`: The date and time the subscriber signed up for the list.
  * ip_opt `string`: The IP address the subscriber used to confirm their opt-in status.
  * timestamp_opt `string`: The date and time the subscribe confirmed their opt-in status.
  * member_rating `integer`: Star rating for this member, between 1 and 5.
  * last_changed `string`: The date and time the member's info was last changed.
  * language `string`: If set/detected, the [subscriber's language](http://kb.mailchimp.com/lists/managing-subscribers/view-and-edit-subscriber-languages?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
  * vip `boolean`: [VIP status](http://kb.mailchimp.com/lists/managing-subscribers/designate-and-send-to-vip-subscribers?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) for subscriber.
  * email_client `string`: The list member's email client.
  * location `object`: Subscriber location information.
    * latitude `number`: The location latitude.
    * longitude `number`: The location longitude.
    * gmtoff `integer`: The time difference in hours from GMT.
    * dstoff `integer`: The offset for timezones where daylight saving time is observed.
    * country_code `string`: The unique code for the location country.
    * timezone `string`: The timezone for the location.
  * last_note `object`: The most recent Note added about this member.
    * note_id `integer`: The note id.
    * created_at `string`: The date and time the note was created.
    * created_by `string`: The author of the note.
    * note `string`: The content of the note.
  * list_id `string`: The list id.
  * _links [HATEOASLinks](#hateoaslinks)

### getListsIdMembersId
Get information about a specific list member, including a currently subscribed, unsubscribed, or bounced member.


```js
mailchimp.getListsIdMembersId({
  "list_id": "",
  "subscriber_hash": ""
}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * list_id **required** `string`: The unique id for the list.
  * subscriber_hash **required** `string`: The MD5 hash of the lowercase version of the list member's email address.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: Individuals who are currently or have been previously subscribed to this list, including members who have bounced or unsubscribed.
  * id `string`: The MD5 hash of the lowercase version of the list member's email address.
  * email_address `string`: Email address for a subscriber.
  * unique_email_id `string`: An identifier for the address across all of MailChimp.
  * email_type `string`: Type of email this member asked to get ('html' or 'text').
  * status `string` (values: subscribed, unsubscribed, cleaned, pending, transactional): Subscriber's current status.
  * unsubscribe_reason `string`: A subscriber's reason for unsubscribing.
  * merge_fields `object`: An individual merge var and value for a member.
  * interests `object`: The key of this object's properties is the ID of the interest in question.
  * stats `object`: Open and click rates for this subscriber.
    * avg_open_rate `number`: A subscriber's average open rate.
    * avg_click_rate `number`: A subscriber's average clickthrough rate.
  * ip_signup `string`: IP address the subscriber signed up from.
  * timestamp_signup `string`: The date and time the subscriber signed up for the list.
  * ip_opt `string`: The IP address the subscriber used to confirm their opt-in status.
  * timestamp_opt `string`: The date and time the subscribe confirmed their opt-in status.
  * member_rating `integer`: Star rating for this member, between 1 and 5.
  * last_changed `string`: The date and time the member's info was last changed.
  * language `string`: If set/detected, the [subscriber's language](http://kb.mailchimp.com/lists/managing-subscribers/view-and-edit-subscriber-languages?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
  * vip `boolean`: [VIP status](http://kb.mailchimp.com/lists/managing-subscribers/designate-and-send-to-vip-subscribers?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) for subscriber.
  * email_client `string`: The list member's email client.
  * location `object`: Subscriber location information.
    * latitude `number`: The location latitude.
    * longitude `number`: The location longitude.
    * gmtoff `integer`: The time difference in hours from GMT.
    * dstoff `integer`: The offset for timezones where daylight saving time is observed.
    * country_code `string`: The unique code for the location country.
    * timezone `string`: The timezone for the location.
  * last_note `object`: The most recent Note added about this member.
    * note_id `integer`: The note id.
    * created_at `string`: The date and time the note was created.
    * created_by `string`: The author of the note.
    * note `string`: The content of the note.
  * list_id `string`: The list id.
  * _links [HATEOASLinks](#hateoaslinks)

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

#### Input
* input `object`
  * list_id **required** `string`: The unique id for the list.
  * subscriber_hash **required** `string`: The MD5 hash of the lowercase version of the list member's email address.
  * body **required** `object`: Individuals who are currently or have been previously subscribed to this list, including members who have bounced or unsubscribed.
    * email_address **required** `string`: Email address for a subscriber. This value is required only if the email address is not already present on the list.
    * status_if_new **required** `string` (values: subscribed, unsubscribed, cleaned, pending, transactional): Subscriber's status. This value is required only if the email address is not already present on the list.
    * email_type `string`: Type of email this member asked to get ('html' or 'text').
    * status `string` (values: subscribed, unsubscribed, cleaned, pending): Subscriber's current status.
    * merge_fields `object`: An individual merge var and value for a member.
    * interests `object`: The key of this object's properties is the ID of the interest in question.
    * language `string`: If set/detected, the [subscriber's language](http://kb.mailchimp.com/lists/managing-subscribers/view-and-edit-subscriber-languages?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
    * vip `boolean`: [VIP status](http://kb.mailchimp.com/lists/managing-subscribers/designate-and-send-to-vip-subscribers?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) for subscriber.
    * location `object`: Subscriber location information.
      * latitude `number`: The location latitude.
      * longitude `number`: The location longitude.
    * ip_signup `string`: IP address the subscriber signed up from.
    * timestamp_signup `string`: The date and time the subscriber signed up for the list.
    * ip_opt `string`: The IP address the subscriber used to confirm their opt-in status.
    * timestamp_opt `string`: The date and time the subscribe confirmed their opt-in status.
    * _links [HATEOASLinks](#hateoaslinks)
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: Individuals who are currently or have been previously subscribed to this list, including members who have bounced or unsubscribed.
  * id `string`: The MD5 hash of the lowercase version of the list member's email address.
  * email_address `string`: Email address for a subscriber.
  * unique_email_id `string`: An identifier for the address across all of MailChimp.
  * email_type `string`: Type of email this member asked to get ('html' or 'text').
  * status `string` (values: subscribed, unsubscribed, cleaned, pending, transactional): Subscriber's current status.
  * unsubscribe_reason `string`: A subscriber's reason for unsubscribing.
  * merge_fields `object`: An individual merge var and value for a member.
  * interests `object`: The key of this object's properties is the ID of the interest in question.
  * stats `object`: Open and click rates for this subscriber.
    * avg_open_rate `number`: A subscriber's average open rate.
    * avg_click_rate `number`: A subscriber's average clickthrough rate.
  * ip_signup `string`: IP address the subscriber signed up from.
  * timestamp_signup `string`: The date and time the subscriber signed up for the list.
  * ip_opt `string`: The IP address the subscriber used to confirm their opt-in status.
  * timestamp_opt `string`: The date and time the subscribe confirmed their opt-in status.
  * member_rating `integer`: Star rating for this member, between 1 and 5.
  * last_changed `string`: The date and time the member's info was last changed.
  * language `string`: If set/detected, the [subscriber's language](http://kb.mailchimp.com/lists/managing-subscribers/view-and-edit-subscriber-languages?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
  * vip `boolean`: [VIP status](http://kb.mailchimp.com/lists/managing-subscribers/designate-and-send-to-vip-subscribers?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) for subscriber.
  * email_client `string`: The list member's email client.
  * location `object`: Subscriber location information.
    * latitude `number`: The location latitude.
    * longitude `number`: The location longitude.
    * gmtoff `integer`: The time difference in hours from GMT.
    * dstoff `integer`: The offset for timezones where daylight saving time is observed.
    * country_code `string`: The unique code for the location country.
    * timezone `string`: The timezone for the location.
  * last_note `object`: The most recent Note added about this member.
    * note_id `integer`: The note id.
    * created_at `string`: The date and time the note was created.
    * created_by `string`: The author of the note.
    * note `string`: The content of the note.
  * list_id `string`: The list id.
  * _links [HATEOASLinks](#hateoaslinks)

### patchListsIdMembersId
Update information for a specific list member.


```js
mailchimp.patchListsIdMembersId({
  "list_id": "",
  "subscriber_hash": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * list_id **required** `string`: The unique id for the list.
  * subscriber_hash **required** `string`: The MD5 hash of the lowercase version of the list member's email address.
  * body **required** `object`: Individuals who are currently or have been previously subscribed to this list, including members who have bounced or unsubscribed.
    * email_address `string`: Email address for a subscriber.
    * email_type `string`: Type of email this member asked to get ('html' or 'text').
    * status `string` (values: subscribed, unsubscribed, cleaned, pending): Subscriber's current status.
    * merge_fields `object`: An individual merge var and value for a member.
    * interests `object`: The key of this object's properties is the ID of the interest in question.
    * language `string`: If set/detected, the [subscriber's language](http://kb.mailchimp.com/lists/managing-subscribers/view-and-edit-subscriber-languages?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
    * vip `boolean`: [VIP status](http://kb.mailchimp.com/lists/managing-subscribers/designate-and-send-to-vip-subscribers?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) for subscriber.
    * location `object`: Subscriber location information.
      * latitude `number`: The location latitude.
      * longitude `number`: The location longitude.
    * ip_signup `string`: IP address the subscriber signed up from.
    * timestamp_signup `string`: The date and time the subscriber signed up for the list.
    * ip_opt `string`: The IP address the subscriber used to confirm their opt-in status.
    * timestamp_opt `string`: The date and time the subscribe confirmed their opt-in status.
    * _links [HATEOASLinks](#hateoaslinks)
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: Individuals who are currently or have been previously subscribed to this list, including members who have bounced or unsubscribed.
  * id `string`: The MD5 hash of the lowercase version of the list member's email address.
  * email_address `string`: Email address for a subscriber.
  * unique_email_id `string`: An identifier for the address across all of MailChimp.
  * email_type `string`: Type of email this member asked to get ('html' or 'text').
  * status `string` (values: subscribed, unsubscribed, cleaned, pending, transactional): Subscriber's current status.
  * unsubscribe_reason `string`: A subscriber's reason for unsubscribing.
  * merge_fields `object`: An individual merge var and value for a member.
  * interests `object`: The key of this object's properties is the ID of the interest in question.
  * stats `object`: Open and click rates for this subscriber.
    * avg_open_rate `number`: A subscriber's average open rate.
    * avg_click_rate `number`: A subscriber's average clickthrough rate.
  * ip_signup `string`: IP address the subscriber signed up from.
  * timestamp_signup `string`: The date and time the subscriber signed up for the list.
  * ip_opt `string`: The IP address the subscriber used to confirm their opt-in status.
  * timestamp_opt `string`: The date and time the subscribe confirmed their opt-in status.
  * member_rating `integer`: Star rating for this member, between 1 and 5.
  * last_changed `string`: The date and time the member's info was last changed.
  * language `string`: If set/detected, the [subscriber's language](http://kb.mailchimp.com/lists/managing-subscribers/view-and-edit-subscriber-languages?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
  * vip `boolean`: [VIP status](http://kb.mailchimp.com/lists/managing-subscribers/designate-and-send-to-vip-subscribers?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) for subscriber.
  * email_client `string`: The list member's email client.
  * location `object`: Subscriber location information.
    * latitude `number`: The location latitude.
    * longitude `number`: The location longitude.
    * gmtoff `integer`: The time difference in hours from GMT.
    * dstoff `integer`: The offset for timezones where daylight saving time is observed.
    * country_code `string`: The unique code for the location country.
    * timezone `string`: The timezone for the location.
  * last_note `object`: The most recent Note added about this member.
    * note_id `integer`: The note id.
    * created_at `string`: The date and time the note was created.
    * created_by `string`: The author of the note.
    * note `string`: The content of the note.
  * list_id `string`: The list id.
  * _links [HATEOASLinks](#hateoaslinks)

### deleteListsIdMembersId
Delete a member from a list.


```js
mailchimp.deleteListsIdMembersId({
  "list_id": "",
  "subscriber_hash": ""
}, context)
```

#### Input
* input `object`
  * list_id **required** `string`: The unique id for the list.
  * subscriber_hash **required** `string`: The MD5 hash of the lowercase version of the list member's email address.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
*Output schema unknown*

### getListsIdMembersIdActivity
Get the last 50 events of a member's activity on a specific list, including opens, clicks, and unsubscribes.


```js
mailchimp.getListsIdMembersIdActivity({
  "list_id": "",
  "subscriber_hash": ""
}, context)
```

#### Input
* input `object`
  * list_id **required** `string`: The unique id for the list.
  * subscriber_hash **required** `string`: The MD5 hash of the lowercase version of the list member's email address.
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: The last 50 member events for a list.
  * activity `array`: An array of objects, each representing a member event.
    * items `object`: Member activity events.
      * action `string`: The type of action recorded for the subscriber.
      * timestamp `string`: The date and time recorded for the action.
      * url `string`: For clicks, the URL the subscriber clicked on.
      * type `string`: The type of campaign that was sent.
      * campaign_id `string`: The web-based ID for the campaign.
      * title `string`: If set, the campaign's title.
      * parent_campaign `string`: The ID of the parent campaign.
  * email_id `string`: The MD5 hash of the lowercase version of the list member's email address.
  * list_id `string`: The list id.
  * total_items [CollectionTotal](#collectiontotal)
  * _links [HATEOASLinks](#hateoaslinks)

### getListsIdMembersIdGoals
Get the last 50 Goal events for a member on a specific list.


```js
mailchimp.getListsIdMembersIdGoals({
  "list_id": "",
  "subscriber_hash": ""
}, context)
```

#### Input
* input `object`
  * list_id **required** `string`: The unique id for the list.
  * subscriber_hash **required** `string`: The MD5 hash of the lowercase version of the list member's email address.
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: The last 50 Goal events for a member on a specific list.
  * goals `array`: The last 50 Goal events triggered by a member.
    * items `object`: A single instance of a goal activity.
      * goal_id `integer`: The id for a Goal event.
      * event `string`: The name/type of Goal event triggered.
      * last_visited_at `string`: The date and time the user last triggered the Goal event.
      * data `string`: Any extra data passed with the Goal event.
  * list_id `string`: The list id.
  * email_id `string`: The MD5 hash of the lowercase version of the list member's email address.
  * total_items [CollectionTotal](#collectiontotal)
  * _links [HATEOASLinks](#hateoaslinks)

### getListsIdMembersIdNotes
Get recent notes for a specific list member.


```js
mailchimp.getListsIdMembersIdNotes({
  "list_id": "",
  "subscriber_hash": ""
}, context)
```

#### Input
* input `object`
  * list_id **required** `string`: The unique id for the list.
  * subscriber_hash **required** `string`: The MD5 hash of the lowercase version of the list member's email address.
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * count `integer`: The number of records to return. [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **10**.
  * offset `integer`: The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **0**.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: The last 10 notes for a specific list member, based on date created.
  * notes `array`: An array of objects, each representing a note resource.
    * items `object`: A specific note for a specific member.
      * id `integer`: The note id.
      * created_at `string`: The date and time the note was created.
      * created_by `string`: The author of the note.
      * updated_at `string`: The date and time the note was last updated.
      * note `string`: The content of the note.
      * list_id `string`: The unique id for the list.
      * email_id `string`: The MD5 hash of the lowercase version of the list member's email address.
      * _links [HATEOASLinks](#hateoaslinks)
  * email_id `string`: The MD5 hash of the lowercase version of the list member's email address.
  * list_id `string`: The list id.
  * total_items [CollectionTotal](#collectiontotal)
  * _links [HATEOASLinks](#hateoaslinks)

### postListsIdMembersIdNotes
Add a new note for a specific subscriber.


```js
mailchimp.postListsIdMembersIdNotes({
  "list_id": "",
  "subscriber_hash": ""
}, context)
```

#### Input
* input `object`
  * list_id **required** `string`: The unique id for the list.
  * subscriber_hash **required** `string`: The MD5 hash of the lowercase version of the list member's email address.
  * body `object`: A specific note for a specific member.
    * id `integer`: The note id.
    * created_at `string`: The date and time the note was created.
    * created_by `string`: The author of the note.
    * updated_at `string`: The date and time the note was last updated.
    * note `string`: The content of the note. Note length is limited to 1,000 characters.
    * list_id `string`: The unique id for the list.
    * email_id `string`: The MD5 hash of the lowercase version of the list member's email address.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: A specific note for a specific member.
  * id `integer`: The note id.
  * created_at `string`: The date and time the note was created.
  * created_by `string`: The author of the note.
  * updated_at `string`: The date and time the note was last updated.
  * note `string`: The content of the note.
  * list_id `string`: The unique id for the list.
  * email_id `string`: The MD5 hash of the lowercase version of the list member's email address.
  * _links [HATEOASLinks](#hateoaslinks)

### getListsIdMembersIdNotesId
Get a specific note for a specific list member.


```js
mailchimp.getListsIdMembersIdNotesId({
  "list_id": "",
  "subscriber_hash": "",
  "note_id": ""
}, context)
```

#### Input
* input `object`
  * list_id **required** `string`: The unique id for the list.
  * subscriber_hash **required** `string`: The MD5 hash of the lowercase version of the list member's email address.
  * note_id **required** `string`: The id for the note.
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: A specific note for a specific member.
  * id `integer`: The note id.
  * created_at `string`: The date and time the note was created.
  * created_by `string`: The author of the note.
  * updated_at `string`: The date and time the note was last updated.
  * note `string`: The content of the note.
  * list_id `string`: The unique id for the list.
  * email_id `string`: The MD5 hash of the lowercase version of the list member's email address.
  * _links [HATEOASLinks](#hateoaslinks)

### patchListsIdMembersIdNotesId
Update a specific note for a specific list member.


```js
mailchimp.patchListsIdMembersIdNotesId({
  "list_id": "",
  "subscriber_hash": "",
  "note_id": ""
}, context)
```

#### Input
* input `object`
  * list_id **required** `string`: The unique id for the list.
  * subscriber_hash **required** `string`: The MD5 hash of the lowercase version of the list member's email address.
  * note_id **required** `string`: The id for the note.
  * body `object`: A specific note for a specific member.
    * id `integer`: The note id.
    * created_at `string`: The date and time the note was created.
    * created_by `string`: The author of the note.
    * updated_at `string`: The date and time the note was last updated.
    * note `string`: The content of the note. Note length is limited to 1,000 characters.
    * list_id `string`: The unique id for the list.
    * email_id `string`: The MD5 hash of the lowercase version of the list member's email address.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: A specific note for a specific member.
  * id `integer`: The note id.
  * created_at `string`: The date and time the note was created.
  * created_by `string`: The author of the note.
  * updated_at `string`: The date and time the note was last updated.
  * note `string`: The content of the note.
  * list_id `string`: The unique id for the list.
  * email_id `string`: The MD5 hash of the lowercase version of the list member's email address.
  * _links [HATEOASLinks](#hateoaslinks)

### deleteListsIdMembersIdNotesId
Delete a specific note for a specific list member.


```js
mailchimp.deleteListsIdMembersIdNotesId({
  "list_id": "",
  "subscriber_hash": "",
  "note_id": ""
}, context)
```

#### Input
* input `object`
  * list_id **required** `string`: The unique id for the list.
  * subscriber_hash **required** `string`: The MD5 hash of the lowercase version of the list member's email address.
  * note_id **required** `string`: The id for the note.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
*Output schema unknown*

### getListsIdMergeFields
Get a list of all merge fields (formerly merge vars) for a list.


```js
mailchimp.getListsIdMergeFields({
  "list_id": ""
}, context)
```

#### Input
* input `object`
  * list_id **required** `string`: The unique id for the list.
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * count `integer`: The number of records to return. [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **10**.
  * offset `integer`: The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **0**.
  * type `string`: The merge field type.
  * required `boolean`: The boolean value if the merge field is required.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: The merge field (formerly merge vars) for a list. These correspond to merge fields in MailChimp's lists and subscriber profiles.
  * merge_fields `array`: An array of objects, each representing a merge field resource.
    * items `object`: A merge field (formerly merge vars) for a specific list. These correspond to merge fields in MailChimp's lists and subscriber profiles.
      * merge_id `integer`: An unchanging id for the merge field.
      * tag `string`: The tag used in MailChimp campaigns and for the /members endpoint.
      * name `string`: The name of the merge field.
      * type `string`: The type for the merge field.
      * required `boolean`: The boolean value if the merge field is required.
      * default_value `string`: The default value for the merge field if `null`.
      * public `boolean`: Whether the merge field is displayed on the signup form.
      * display_order `integer`: The order that the merge field displays on the list signup form.
      * options `object`: Extra options for some merge field types.
        * default_country `integer`: In an address field, the default country code if none supplied.
        * phone_format `string`: In a phone field, the phone number type: US or International.
        * date_format `string`: In a date or birthday field, the format of the date.
        * choices `array`: In a radio or dropdown non-group field, the available options for members to pick from.
        * size `integer`: In a text field, the default length of the text field.
      * help_text `string`: Extra text to help the subscriber fill out the form.
      * list_id `string`: A string that identifies this merge field collections' list.
      * _links [HATEOASLinks](#hateoaslinks)
  * list_id `string`: The list id.
  * total_items [CollectionTotal](#collectiontotal)
  * _links [HATEOASLinks](#hateoaslinks)

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

#### Input
* input `object`
  * list_id **required** `string`: The unique id for the list.
  * body **required** `object`: A merge field (formerly merge vars) for a specific list. These correspond to merge fields in MailChimp's lists and subscriber profiles.
    * tag `string`: The tag used in MailChimp campaigns and for the /members endpoint.
    * name **required** `string`: The name of the merge field.
    * type **required** `string` (values: text, number, address, phone, date, url, imageurl, radio, dropdown, birthday, zip): The type for the merge field.
    * required `boolean`: The boolean value if the merge field is required.
    * default_value `string`: The default value for the merge field if `null`.
    * public `boolean`: Whether the merge field is displayed on the signup form.
    * display_order `integer`: The order that the merge field displays on the list signup form.
    * options `object`: Extra options for some merge field types.
      * default_country `integer`: In an address field, the default country code if none supplied.
      * phone_format `string`: In a phone field, the phone number type: US or International.
      * date_format `string`: In a date or birthday field, the format of the date.
      * choices `array`: In a radio or dropdown non-group field, the available options for members to pick from.
      * size `integer`: In a text field, the default length of the text field.
    * help_text `string`: Extra text to help the subscriber fill out the form.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: A merge field (formerly merge vars) for a specific list. These correspond to merge fields in MailChimp's lists and subscriber profiles.
  * merge_id `integer`: An unchanging id for the merge field.
  * tag `string`: The tag used in MailChimp campaigns and for the /members endpoint.
  * name `string`: The name of the merge field.
  * type `string`: The type for the merge field.
  * required `boolean`: The boolean value if the merge field is required.
  * default_value `string`: The default value for the merge field if `null`.
  * public `boolean`: Whether the merge field is displayed on the signup form.
  * display_order `integer`: The order that the merge field displays on the list signup form.
  * options `object`: Extra options for some merge field types.
    * default_country `integer`: In an address field, the default country code if none supplied.
    * phone_format `string`: In a phone field, the phone number type: US or International.
    * date_format `string`: In a date or birthday field, the format of the date.
    * choices `array`: In a radio or dropdown non-group field, the available options for members to pick from.
    * size `integer`: In a text field, the default length of the text field.
  * help_text `string`: Extra text to help the subscriber fill out the form.
  * list_id `string`: A string that identifies this merge field collections' list.
  * _links [HATEOASLinks](#hateoaslinks)

### getListsIdMergeFieldsId
Get information about a specific merge field in a list.


```js
mailchimp.getListsIdMergeFieldsId({
  "list_id": "",
  "merge_id": ""
}, context)
```

#### Input
* input `object`
  * list_id **required** `string`: The unique id for the list.
  * merge_id **required** `string`: The id for the merge field.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: A merge field (formerly merge vars) for a specific list. These correspond to merge fields in MailChimp's lists and subscriber profiles.
  * merge_id `integer`: An unchanging id for the merge field.
  * tag `string`: The tag used in MailChimp campaigns and for the /members endpoint.
  * name `string`: The name of the merge field.
  * type `string`: The type for the merge field.
  * required `boolean`: The boolean value if the merge field is required.
  * default_value `string`: The default value for the merge field if `null`.
  * public `boolean`: Whether the merge field is displayed on the signup form.
  * display_order `integer`: The order that the merge field displays on the list signup form.
  * options `object`: Extra options for some merge field types.
    * default_country `integer`: In an address field, the default country code if none supplied.
    * phone_format `string`: In a phone field, the phone number type: US or International.
    * date_format `string`: In a date or birthday field, the format of the date.
    * choices `array`: In a radio or dropdown non-group field, the available options for members to pick from.
    * size `integer`: In a text field, the default length of the text field.
  * help_text `string`: Extra text to help the subscriber fill out the form.
  * list_id `string`: A string that identifies this merge field collections' list.
  * _links [HATEOASLinks](#hateoaslinks)

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

#### Input
* input `object`
  * list_id **required** `string`: The unique id for the list.
  * merge_id **required** `string`: The id for the merge field.
  * body **required** `object`: A merge field (formerly merge vars) for a specific list. These correspond to merge fields in MailChimp's lists and subscriber profiles.
    * tag `string`: The tag used in MailChimp campaigns and for the /members endpoint.
    * name **required** `string`: The name of the merge field.
    * required `boolean`: The boolean value if the merge field is required.
    * default_value `string`: The default value for the merge field if `null`.
    * public `boolean`: Whether the merge field is displayed on the signup form.
    * display_order `integer`: The order that the merge field displays on the list signup form.
    * options `object`: Extra options for some merge field types.
      * default_country `integer`: In an address field, the default country code if none supplied.
      * phone_format `string`: In a phone field, the phone number type: US or International.
      * date_format `string`: In a date or birthday field, the format of the date.
      * choices `array`: In a radio or dropdown non-group field, the available options for members to pick from.
    * help_text `string`: Extra text to help the subscriber fill out the form.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: A merge field (formerly merge vars) for a specific list. These correspond to merge fields in MailChimp's lists and subscriber profiles.
  * merge_id `integer`: An unchanging id for the merge field.
  * tag `string`: The tag used in MailChimp campaigns and for the /members endpoint.
  * name `string`: The name of the merge field.
  * type `string`: The type for the merge field.
  * required `boolean`: The boolean value if the merge field is required.
  * default_value `string`: The default value for the merge field if `null`.
  * public `boolean`: Whether the merge field is displayed on the signup form.
  * display_order `integer`: The order that the merge field displays on the list signup form.
  * options `object`: Extra options for some merge field types.
    * default_country `integer`: In an address field, the default country code if none supplied.
    * phone_format `string`: In a phone field, the phone number type: US or International.
    * date_format `string`: In a date or birthday field, the format of the date.
    * choices `array`: In a radio or dropdown non-group field, the available options for members to pick from.
    * size `integer`: In a text field, the default length of the text field.
  * help_text `string`: Extra text to help the subscriber fill out the form.
  * list_id `string`: A string that identifies this merge field collections' list.
  * _links [HATEOASLinks](#hateoaslinks)

### deleteListsIdMergeFieldsId
Delete a specific merge field in a list.


```js
mailchimp.deleteListsIdMergeFieldsId({
  "list_id": "",
  "merge_id": ""
}, context)
```

#### Input
* input `object`
  * list_id **required** `string`: The unique id for the list.
  * merge_id **required** `string`: The id for the merge field.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
*Output schema unknown*

### getListsIdWebhooks
Get information about all webhooks for a specific list.


```js
mailchimp.getListsIdWebhooks({}, context)
```

#### Input
* input `object`
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: Manage webhooks for a specific list.
  * webhooks `array`: An array of objects, each representing a specific list member.
    * items `object`: Webhook configured for the given list.
      * id `string`: An string that uniquely identifies this webhook.
      * url `string`: A valid URL for the Webhook.
      * events `object`: The events that can trigger the webhook and whether they are enabled.
        * subscribe `boolean`: Whether the webhook is triggered when a list subscriber is added.
        * unsubscribe `boolean`: Whether the webhook is triggered when a list member unsubscribes.
        * profile `boolean`: Whether the webhook is triggered when a subscriber's profile is updated.
        * cleaned `boolean`: Whether the webhook is triggered when a subscriber's email address is cleaned from the list.
        * upemail `boolean`: Whether the webhook is triggered when a subscriber's email address is changed.
        * campaign `boolean`: Whether the webhook is triggered when a campaign is sent or cancelled.
      * sources `object`: The possible sources of any events that can trigger the webhook and whether they are enabled.
        * user `boolean`: Whether the webhook is triggered by subscriber-initiated actions.
        * admin `boolean`: Whether the webhook is triggered by admin-initiated actions in the web interface.
        * api `boolean`: Whether the webhook is triggered by actions initiated via the API.
      * list_id `string`: The unique id for the list.
      * _links [HATEOASLinks](#hateoaslinks)
  * list_id `string`: The list id.
  * total_items [CollectionTotal](#collectiontotal)
  * _links [HATEOASLinks](#hateoaslinks)

### postListsIdWebhooks
Create a new webhook for a specific list.


```js
mailchimp.postListsIdWebhooks({
  "list_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * list_id **required** `string`: The unique id for the list.
  * body **required** `object`: Configure a webhook for the given list.
    * url `string`: A valid URL for the Webhook.
    * events `object`: The events that can trigger the webhook and whether they are enabled.
      * subscribe `boolean`: Whether the webhook is triggered when a list subscriber is added.
      * unsubscribe `boolean`: Whether the webhook is triggered when a list member unsubscribes.
      * profile `boolean`: Whether the webhook is triggered when a subscriber's profile is updated.
      * cleaned `boolean`: Whether the webhook is triggered when a subscriber's email address is cleaned from the list.
      * upemail `boolean`: Whether the webhook is triggered when a subscriber's email address is changed.
      * campaign `boolean`: Whether the webhook is triggered when a campaign is sent or cancelled.
    * sources `object`: The possible sources of any events that can trigger the webhook and whether they are enabled.
      * user `boolean`: Whether the webhook is triggered by subscriber-initiated actions.
      * admin `boolean`: Whether the webhook is triggered by admin-initiated actions in the web interface.
      * api `boolean`: Whether the webhook is triggered by actions initiated via the API.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: Webhook configured for the given list.
  * id `string`: An string that uniquely identifies this webhook.
  * url `string`: A valid URL for the Webhook.
  * events `object`: The events that can trigger the webhook and whether they are enabled.
    * subscribe `boolean`: Whether the webhook is triggered when a list subscriber is added.
    * unsubscribe `boolean`: Whether the webhook is triggered when a list member unsubscribes.
    * profile `boolean`: Whether the webhook is triggered when a subscriber's profile is updated.
    * cleaned `boolean`: Whether the webhook is triggered when a subscriber's email address is cleaned from the list.
    * upemail `boolean`: Whether the webhook is triggered when a subscriber's email address is changed.
    * campaign `boolean`: Whether the webhook is triggered when a campaign is sent or cancelled.
  * sources `object`: The possible sources of any events that can trigger the webhook and whether they are enabled.
    * user `boolean`: Whether the webhook is triggered by subscriber-initiated actions.
    * admin `boolean`: Whether the webhook is triggered by admin-initiated actions in the web interface.
    * api `boolean`: Whether the webhook is triggered by actions initiated via the API.
  * list_id `string`: The unique id for the list.
  * _links [HATEOASLinks](#hateoaslinks)

### getListsIdWebhooksId
Get information about a specific webhook.


```js
mailchimp.getListsIdWebhooksId({}, context)
```

#### Input
* input `object`
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: Webhook configured for the given list.
  * id `string`: An string that uniquely identifies this webhook.
  * url `string`: A valid URL for the Webhook.
  * events `object`: The events that can trigger the webhook and whether they are enabled.
    * subscribe `boolean`: Whether the webhook is triggered when a list subscriber is added.
    * unsubscribe `boolean`: Whether the webhook is triggered when a list member unsubscribes.
    * profile `boolean`: Whether the webhook is triggered when a subscriber's profile is updated.
    * cleaned `boolean`: Whether the webhook is triggered when a subscriber's email address is cleaned from the list.
    * upemail `boolean`: Whether the webhook is triggered when a subscriber's email address is changed.
    * campaign `boolean`: Whether the webhook is triggered when a campaign is sent or cancelled.
  * sources `object`: The possible sources of any events that can trigger the webhook and whether they are enabled.
    * user `boolean`: Whether the webhook is triggered by subscriber-initiated actions.
    * admin `boolean`: Whether the webhook is triggered by admin-initiated actions in the web interface.
    * api `boolean`: Whether the webhook is triggered by actions initiated via the API.
  * list_id `string`: The unique id for the list.
  * _links [HATEOASLinks](#hateoaslinks)

### deleteListsIdWebhooksId
Delete a specific webhook in a list.


```js
mailchimp.deleteListsIdWebhooksId({}, context)
```

#### Input
* input `object`
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
*Output schema unknown*

### patchListsIdWebhooksId
Update the settings for an existing webhook.


```js
mailchimp.patchListsIdWebhooksId({
  "list_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * list_id **required** `string`: The unique id for the list.
  * body **required** `object`: Configure a webhook for the given list.
    * url `string`: A valid URL for the Webhook.
    * events `object`: The events that can trigger the webhook and whether they are enabled.
      * subscribe `boolean`: Whether the webhook is triggered when a list subscriber is added.
      * unsubscribe `boolean`: Whether the webhook is triggered when a list member unsubscribes.
      * profile `boolean`: Whether the webhook is triggered when a subscriber's profile is updated.
      * cleaned `boolean`: Whether the webhook is triggered when a subscriber's email address is cleaned from the list.
      * upemail `boolean`: Whether the webhook is triggered when a subscriber's email address is changed.
      * campaign `boolean`: Whether the webhook is triggered when a campaign is sent or cancelled.
    * sources `object`: The possible sources of any events that can trigger the webhook and whether they are enabled.
      * user `boolean`: Whether the webhook is triggered by subscriber-initiated actions.
      * admin `boolean`: Whether the webhook is triggered by admin-initiated actions in the web interface.
      * api `boolean`: Whether the webhook is triggered by actions initiated via the API.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: Webhook configured for the given list.
  * id `string`: An string that uniquely identifies this webhook.
  * url `string`: A valid URL for the Webhook.
  * events `object`: The events that can trigger the webhook and whether they are enabled.
    * subscribe `boolean`: Whether the webhook is triggered when a list subscriber is added.
    * unsubscribe `boolean`: Whether the webhook is triggered when a list member unsubscribes.
    * profile `boolean`: Whether the webhook is triggered when a subscriber's profile is updated.
    * cleaned `boolean`: Whether the webhook is triggered when a subscriber's email address is cleaned from the list.
    * upemail `boolean`: Whether the webhook is triggered when a subscriber's email address is changed.
    * campaign `boolean`: Whether the webhook is triggered when a campaign is sent or cancelled.
  * sources `object`: The possible sources of any events that can trigger the webhook and whether they are enabled.
    * user `boolean`: Whether the webhook is triggered by subscriber-initiated actions.
    * admin `boolean`: Whether the webhook is triggered by admin-initiated actions in the web interface.
    * api `boolean`: Whether the webhook is triggered by actions initiated via the API.
  * list_id `string`: The unique id for the list.
  * _links [HATEOASLinks](#hateoaslinks)

### getListsIdSignupForms
Get signup forms for a specific list.


```js
mailchimp.getListsIdSignupForms({
  "list_id": ""
}, context)
```

#### Input
* input `object`
  * list_id **required** `string`: The unique id for the list.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: List Signup Forms.
  * signup_forms `array`: List signup form.
    * items `object`: List signup form.
      * header `object`: Options for customizing your signup form header.
        * image_url `string`: Header image URL.
        * text `string`: Header text.
        * image_width `string`: Image width, in pixels.
        * image_height `string`: Image height, in pixels.
        * image_alt `string`: Alt text for the image.
        * image_link `string`: The URL that the header image will link to.
        * image_align `string` (values: none, left, center, right): Image alignment.
        * image_border_width `string`: Image border width.
        * image_border_style `string` (values: none, solid, dotted, dashed, double, groove, outset, inset, ridge): Image border style.
        * image_border_color `string`: Image border color.
        * image_target `string` (values: _blank, null): Image link target.
      * contents `array`: The signup form body content.
        * items [SignupFormContent](#signupformcontent)
      * styles `array`: An array of objects, each representing an element style for the signup form.
        * items [SignupFormStyleOptions](#signupformstyleoptions)
      * signup_form_url `string`: Signup form URL.
      * list_id `string`: The signup form's list id.
      * _links [HATEOASLinks](#hateoaslinks)
  * list_id `string`: The list id.
  * total_items [CollectionTotal](#collectiontotal)
  * _links [HATEOASLinks](#hateoaslinks)

### postListsIdSignupForms
Customize a list's default signup form.


```js
mailchimp.postListsIdSignupForms({
  "list_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * list_id **required** `string`: The unique id for the list.
  * body **required** `object`: List signup form.
    * header `object`: Options for customizing your signup form header.
      * image_url `string`: Header image URL.
      * text `string`: Header text.
      * image_width `string`: Image width, in pixels.
      * image_height `string`: Image height, in pixels.
      * image_alt `string`: Alt text for the image.
      * image_link `string`: The URL that the header image will link to.
      * image_align `string` (values: none, left, center, right): Image alignment.
      * image_border_width `string`: Image border width.
      * image_border_style `string` (values: none, solid, dotted, dashed, double, groove, outset, inset, ridge): Image border style.
      * image_border_color `string`: Image border color.
      * image_target `string` (values: _blank, null): Image link target.
    * contents `array`: The signup form body content.
      * items [SignupFormContent](#signupformcontent)
    * styles `array`: An array of objects, each representing an element style for the signup form.
      * items [SignupFormStyleOptions](#signupformstyleoptions)
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: List signup form.
  * header `object`: Options for customizing your signup form header.
    * image_url `string`: Header image URL.
    * text `string`: Header text.
    * image_width `string`: Image width, in pixels.
    * image_height `string`: Image height, in pixels.
    * image_alt `string`: Alt text for the image.
    * image_link `string`: The URL that the header image will link to.
    * image_align `string` (values: none, left, center, right): Image alignment.
    * image_border_width `string`: Image border width.
    * image_border_style `string` (values: none, solid, dotted, dashed, double, groove, outset, inset, ridge): Image border style.
    * image_border_color `string`: Image border color.
    * image_target `string` (values: _blank, null): Image link target.
  * contents `array`: The signup form body content.
    * items [SignupFormContent](#signupformcontent)
  * styles `array`: An array of objects, each representing an element style for the signup form.
    * items [SignupFormStyleOptions](#signupformstyleoptions)
  * signup_form_url `string`: Signup form URL.
  * list_id `string`: The signup form's list id.
  * _links [HATEOASLinks](#hateoaslinks)

### getListsIdLocations
Get the locations (countries) that the list's subscribers have been tagged to based on geocoding their IP address.


```js
mailchimp.getListsIdLocations({
  "list_id": ""
}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * list_id **required** `string`: The unique id for the list.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: A summary of List's locations.
  * locations `array`: An array of objects, each representing a list's top subscriber locations.
    * items `object`
      * country `string`: The name of the country.
      * cc `string`: The ISO 3166 2 digit country code.
      * percent `number`: The percent of subscribers in the country.
      * total `integer`: The total number of subscribers in the country.
  * list_id `string`: The unique id for the list.
  * total_items [CollectionTotal](#collectiontotal)
  * _links [HATEOASLinks](#hateoaslinks)

### getMobileNotificationPreferences
All of a user's mobile push notification preferences by device.


```js
mailchimp.getMobileNotificationPreferences({}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * count `integer`: The number of records to return. [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **10**.
  * offset `integer`: The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **0**.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: All of a user's mobile push notification preferences.
  * mobile_notification_preferences `array`: An array of objects, each representing preferences by device.
    * items `object`: Information about a specific device's preferences for push notifications.
      * id `string`: MD5 hash of the lower case device ID.
      * device_id `string`: A unique identifier for the device.
      * type_campaign_sent `boolean`: Whether this device has Campaign Sent notifications turned on.
      * _links [HATEOASLinks](#hateoaslinks)
  * total_items [CollectionTotal](#collectiontotal)
  * _links [HATEOASLinks](#hateoaslinks)

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

#### Input
* input `object`
  * body **required** `object`: Add mobile push notification preferences for a device.
    * device_id **required** `string`: A unique, case-insensitive identifier for the device.
    * type_campaign_sent **required** `boolean`: Whether this device has Campaign Sent notifications turned on.
    * _links [HATEOASLinks](#hateoaslinks)
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: Information about a specific device's preferences for push notifications.
  * id `string`: MD5 hash of the lower case device ID.
  * device_id `string`: A unique identifier for the device.
  * type_campaign_sent `boolean`: Whether this device has Campaign Sent notifications turned on.
  * _links [HATEOASLinks](#hateoaslinks)

### getMobileNotificationPreferencesId
Get information about a specific device's mobile push notification preferences.


```js
mailchimp.getMobileNotificationPreferencesId({
  "device_hash": ""
}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * device_hash **required** `string`: The MD5 hash of the lowercase version of the device ID.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: Information about a specific device's preferences for push notifications.
  * id `string`: MD5 hash of the lower case device ID.
  * device_id `string`: A unique identifier for the device.
  * type_campaign_sent `boolean`: Whether this device has Campaign Sent notifications turned on.
  * _links [HATEOASLinks](#hateoaslinks)

### patchMobileNotificationPreferencesId
Update mobile push notification preferences for a device.


```js
mailchimp.patchMobileNotificationPreferencesId({
  "device_hash": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * device_hash **required** `string`: The MD5 hash of the lowercase version of the device ID.
  * body **required** `object`: Update mobile push notification preferences for a device.
    * type_campaign_sent `boolean`: Whether this device has Campaign Sent notifications turned on.
    * _links [HATEOASLinks](#hateoaslinks)
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: Information about a specific device's preferences for push notifications.
  * id `string`: MD5 hash of the lower case device ID.
  * device_id `string`: A unique identifier for the device.
  * type_campaign_sent `boolean`: Whether this device has Campaign Sent notifications turned on.
  * _links [HATEOASLinks](#hateoaslinks)

### deleteMobileNotificationPreferencesId
Delete mobile push notification preferences for a device.


```js
mailchimp.deleteMobileNotificationPreferencesId({
  "device_hash": ""
}, context)
```

#### Input
* input `object`
  * device_hash **required** `string`: The MD5 hash of the lowercase version of the device ID.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
*Output schema unknown*

### postMobileNotificationPreferencesIdActionsCreateIfNeeded
Create default mobile notification preferences if user has not specified any.


```js
mailchimp.postMobileNotificationPreferencesIdActionsCreateIfNeeded({
  "device_hash": "",
  "device_id": ""
}, context)
```

#### Input
* input `object`
  * device_hash **required** `string`: The MD5 hash of the lowercase version of the device ID.
  * device_id **required** `string`: A unique identifier for the device.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
*Output schema unknown*

### getMobileNotificationPreferencesIdStores
All of a device's push notifications preferences for each store.


```js
mailchimp.getMobileNotificationPreferencesIdStores({
  "device_hash": ""
}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * count `integer`: The number of records to return. [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **10**.
  * offset `integer`: The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **0**.
  * device_hash **required** `string`: The MD5 hash of the lowercase version of the device ID.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: All of a device's preferences for e-commerce related push notifications.
  * store_preferences `array`: An array of objects, each representing preferences by store for this device.
    * items `object`: Information about a device's preferences for push notifications regarding an e-commerce store.
      * store `object`: The store these notification preferences are for.
        * id `string`: The foreign ID of the store.
        * name `string`: The name of the store.
      * type_instant_order `boolean`: Whether this device and store has Instant Order notifications turned on. These notifications tell you when an order was made from a MailChimp outreach.
      * type_daily_order_summary `boolean`: Whether this device and store has Daily Order Summary notifications turned on. These notifications tell you a summary the previous day's revenue from your MailChimp outreaches.
      * device_hash `string`: MD5 hash of the lower case device ID.
      * device_id `string`: The ID of the device.
      * _links [HATEOASLinks](#hateoaslinks)
  * total_items [CollectionTotal](#collectiontotal)
  * _links [HATEOASLinks](#hateoaslinks)

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

#### Input
* input `object`
  * device_hash **required** `string`: The MD5 hash of the lowercase version of the device ID.
  * body **required** `object`: Add mobile push notification preferences for an e-commerce store.
    * store **required** `object`: The store these notification preferences are for.
      * id **required** `string`: The foreign ID of the store.
    * type_instant_order **required** `boolean`: Whether this device and store has Instant Order notifications turned on. These notifications tell you when an order was made from a MailChimp outreach.
    * type_daily_order_summary **required** `boolean`: Whether this device and store has Daily Order Summary notifications turned on. These notifications tell you a summary the previous day's revenue from your MailChimp outreaches.
    * _links [HATEOASLinks](#hateoaslinks)
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: Information about a device's preferences for push notifications regarding an e-commerce store.
  * store `object`: The store these notification preferences are for.
    * id `string`: The foreign ID of the store.
    * name `string`: The name of the store.
  * type_instant_order `boolean`: Whether this device and store has Instant Order notifications turned on. These notifications tell you when an order was made from a MailChimp outreach.
  * type_daily_order_summary `boolean`: Whether this device and store has Daily Order Summary notifications turned on. These notifications tell you a summary the previous day's revenue from your MailChimp outreaches.
  * device_hash `string`: MD5 hash of the lower case device ID.
  * device_id `string`: The ID of the device.
  * _links [HATEOASLinks](#hateoaslinks)

### getMobileNotificationPreferencesIdStoresId
Get information about a device's preferences for push notifications regarding an e-commerce store.


```js
mailchimp.getMobileNotificationPreferencesIdStoresId({
  "device_hash": "",
  "store_id": ""
}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * device_hash **required** `string`: The MD5 hash of the lowercase version of the device ID.
  * store_id **required** `string`: The store id.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: Information about a device's preferences for push notifications regarding an e-commerce store.
  * store `object`: The store these notification preferences are for.
    * id `string`: The foreign ID of the store.
    * name `string`: The name of the store.
  * type_instant_order `boolean`: Whether this device and store has Instant Order notifications turned on. These notifications tell you when an order was made from a MailChimp outreach.
  * type_daily_order_summary `boolean`: Whether this device and store has Daily Order Summary notifications turned on. These notifications tell you a summary the previous day's revenue from your MailChimp outreaches.
  * device_hash `string`: MD5 hash of the lower case device ID.
  * device_id `string`: The ID of the device.
  * _links [HATEOASLinks](#hateoaslinks)

### patchMobileNotificationPreferencesIdStoresId
Update mobile push notification preferences for an e-commerce store.


```js
mailchimp.patchMobileNotificationPreferencesIdStoresId({
  "device_hash": "",
  "store_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * device_hash **required** `string`: The MD5 hash of the lowercase version of the device ID.
  * store_id **required** `string`: The store id.
  * body **required** `object`: Update mobile push notification preferences for an e-commerce store.
    * type_instant_order `boolean`: Whether this device and store has Instant Order notifications turned on. These notifications tell you when an order was made from a MailChimp outreach.
    * type_daily_order_summary `boolean`: Whether this device and store has Daily Order Summary notifications turned on. These notifications tell you a summary the previous day's revenue from your MailChimp outreaches.
    * _links [HATEOASLinks](#hateoaslinks)
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: Information about a device's preferences for push notifications regarding an e-commerce store.
  * store `object`: The store these notification preferences are for.
    * id `string`: The foreign ID of the store.
    * name `string`: The name of the store.
  * type_instant_order `boolean`: Whether this device and store has Instant Order notifications turned on. These notifications tell you when an order was made from a MailChimp outreach.
  * type_daily_order_summary `boolean`: Whether this device and store has Daily Order Summary notifications turned on. These notifications tell you a summary the previous day's revenue from your MailChimp outreaches.
  * device_hash `string`: MD5 hash of the lower case device ID.
  * device_id `string`: The ID of the device.
  * _links [HATEOASLinks](#hateoaslinks)

### deleteMobileNotificationPreferencesIdStoresId
Delete mobile push notification preferences for an e-commerce store.


```js
mailchimp.deleteMobileNotificationPreferencesIdStoresId({
  "device_hash": "",
  "store_id": ""
}, context)
```

#### Input
* input `object`
  * device_hash **required** `string`: The MD5 hash of the lowercase version of the device ID.
  * store_id **required** `string`: The store id.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
*Output schema unknown*

### getReports
Get campaign reports.


```js
mailchimp.getReports({}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * count `integer`: The number of records to return. [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **10**.
  * offset `integer`: The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **0**.
  * type `string` (values: regular, plaintext, absplit, rss, variate): The campaign type.
  * before_send_time `string`: Restrict the response to campaigns sent before the set time. We recommend [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time format: 2015-10-21T15:41:36+00:00.
  * since_send_time `string`: Restrict the response to campaigns sent after the set time. We recommend [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time format: 2015-10-21T15:41:36+00:00.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: A list of reports containing campaigns marked as Sent.
  * reports `array`: An array of objects, each representing a report resource.
    * items `object`: Report details about a sent campaign.
      * id `string`: A string that uniquely identifies this campaign.
      * campaign_title `string`: The title of the campaign.
      * type `string`: The type of campaign (regular, plain-text, ab_split, rss, automation, variate, or auto).
      * list_id `string`: The unique list id.
      * list_name `string`: The name of the list.
      * subject_line `string`: The subject line for the campaign.
      * preview_text `string`: The preview text for the campaign.
      * emails_sent `integer`: The total number of emails sent for this campaign.
      * abuse_reports `integer`: The number of abuse reports generated for this campaign.
      * unsubscribed `integer`: The total number of unsubscribed members for this campaign.
      * send_time `string`: The date and time a campaign was sent.
      * rss_last_send `string`: For RSS campaigns, the date and time of the last send
      * bounces `object`: An object describing the bounce summary for the campaign.
        * hard_bounces `integer`: The total number of hard bounced email addresses.
        * soft_bounces `integer`: The total number of soft bounced email addresses.
        * syntax_errors `integer`: The total number of addresses that were syntax-related bounces.
      * forwards `object`: An object describing the forwards and forward activity for the campaign.
        * forwards_count `integer`: How many times the campaign has been forwarded.
        * forwards_opens `integer`: How many times the forwarded campaign has been opened.
      * opens `object`: An object describing the open activity for the campaign.
        * opens_total `integer`: The total number of opens for a campaign.
        * unique_opens `integer`: The total number of unique opens.
        * open_rate `number`: The number of unique opens divided by the total number of successful deliveries.
        * last_open `string`: The date and time of the last recorded open.
      * clicks `object`: An object describing the click activity for the campaign.
        * clicks_total `integer`: The total number of clicks for the campaign.
        * unique_clicks `integer`: The total number of unique clicks for links across a campaign.
        * unique_subscriber_clicks `integer`: The total number of subscribers who clicked on a campaign.
        * click_rate `number`: The number of unique clicks divided by the total number of successful deliveries.
        * last_click `string`: The date and time of the last recorded click for the campaign.
      * facebook_likes `object`: An object describing campaign engagement on Facebook.
        * recipient_likes `integer`: The number of recipients who liked the campaign on Facebook.
        * unique_likes `integer`: The number of unique likes.
        * facebook_likes `integer`: The number of Facebook likes for the campaign.
      * industry_stats `object`: The average campaign statistics for your industry.
        * type `string`: The type of business industry associated with your account. For example: retail, education, etc.
        * open_rate `number`: The industry open rate.
        * click_rate `number`: The industry click rate.
        * bounce_rate `number`: The industry bounce rate.
        * unopen_rate `number`: The industry unopened rate.
        * unsub_rate `number`: The industry unsubscribe rate.
        * abuse_rate `number`: The industry abuse rate.
      * list_stats `object`: The average campaign statistics for your industry. This won't be present if we haven't calculated it yet for this list.
        * sub_rate `number`: The average number of subscriptions per month for the list.
        * unsub_rate `number`: The average number of unsubscriptions per month for the list.
        * open_rate `number`: The average open rate (a percentage represented as a number between 0 and 100) per campaign for the list.
        * click_rate `number`: The average click rate (a percentage represented as a number between 0 and 100) per campaign for the list.
      * ab_split `object`: General stats about different groups of an A/B Split campaign. Does not return information about [MailChimp Pro's Multivariate Campaigns](http://kb.mailchimp.com/campaigns/multivariate/about-multivariate-campaigns?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
        * a `object`: Stats for Campaign A.
          * bounces `integer`: Bounces for Campaign A.
          * abuse_reports `integer`: Abuse reports for Campaign A.
          * unsubs `integer`: Unsubscribes for Campaign A.
          * recipient_clicks `integer`: Recipient Clicks for Campaign A.
          * forwards `integer`: Forwards for Campaign A.
          * forwards_opens `integer`: Opens from forwards for Campaign A.
          * opens `integer`: Opens for Campaign A.
          * last_open `string`: The last open for Campaign A.
          * unique_opens `integer`: Unique opens for Campaign A.
        * b `object`: Stats for Campaign B.
          * bounces `integer`: Bounces for Campaign B.
          * abuse_reports `integer`: Abuse reports for Campaign B.
          * unsubs `integer`: Unsubscribes for Campaign B.
          * recipient_clicks `integer`: Recipients clicks for Campaign B.
          * forwards `integer`: Forwards for Campaign B.
          * forwards_opens `integer`: Opens for forwards from Campaign B.
          * opens `integer`: Opens for Campaign B.
          * last_open `string`: The last open for Campaign B.
          * unique_opens `integer`: Unique opens for Campaign B.
      * timewarp `array`: An hourly breakdown of sends, opens, and clicks if a campaign is sent using timewarp.
        * items `object`
          * gmt_offset `integer`: For campaigns sent with timewarp, the time zone group the member is apart of.
          * opens `integer`: The number of opens.
          * last_open `string`: The date and time of the last open.
          * unique_opens `integer`: The number of unique opens.
          * clicks `integer`: The number of clicks.
          * last_click `string`: The date and time of the last click.
          * unique_clicks `integer`: The number of unique clicks.
          * bounces `integer`: The number of bounces.
      * timeseries `array`: An hourly breakdown of the performance of the campaign over the first 24 hours.
        * items `object`
          * timestamp `string`: The date and time for the series.
          * emails_sent `integer`: The number of emails sent in the timeseries.
          * unique_opens `integer`: The number of unique opens in the timeseries.
          * recipients_clicks `integer`: The number of clicks in the timeseries.
      * share_report `object`: The url and password for the [VIP report](http://kb.mailchimp.com/reports/email-a-report-to-a-client?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
        * share_url `string`: The URL for the VIP report.
        * share_password `string`: If password protected, the password for the VIP report.
      * ecommerce `object`: E-Commerce stats for a campaign.
        * total_orders `integer`: The total orders for a campaign.
        * total_spent `number`: The total spent for a campaign. Calculated as the sum of all order totals with no deductions.
        * total_revenue `number`: The total revenue for a campaign. Calculated as the sum of all order totals minus shipping and tax totals.
      * delivery_status [DeliveryStatus](#deliverystatus)
      * _links [HATEOASLinks](#hateoaslinks)
  * total_items [CollectionTotal](#collectiontotal)
  * _links [HATEOASLinks](#hateoaslinks)

### getReportsId
Get report details for a specific sent campaign.


```js
mailchimp.getReportsId({
  "campaign_id": ""
}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * campaign_id **required** `string`: The unique id for the campaign.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: Report details about a sent campaign.
  * id `string`: A string that uniquely identifies this campaign.
  * campaign_title `string`: The title of the campaign.
  * type `string`: The type of campaign (regular, plain-text, ab_split, rss, automation, variate, or auto).
  * list_id `string`: The unique list id.
  * list_name `string`: The name of the list.
  * subject_line `string`: The subject line for the campaign.
  * preview_text `string`: The preview text for the campaign.
  * emails_sent `integer`: The total number of emails sent for this campaign.
  * abuse_reports `integer`: The number of abuse reports generated for this campaign.
  * unsubscribed `integer`: The total number of unsubscribed members for this campaign.
  * send_time `string`: The date and time a campaign was sent.
  * rss_last_send `string`: For RSS campaigns, the date and time of the last send
  * bounces `object`: An object describing the bounce summary for the campaign.
    * hard_bounces `integer`: The total number of hard bounced email addresses.
    * soft_bounces `integer`: The total number of soft bounced email addresses.
    * syntax_errors `integer`: The total number of addresses that were syntax-related bounces.
  * forwards `object`: An object describing the forwards and forward activity for the campaign.
    * forwards_count `integer`: How many times the campaign has been forwarded.
    * forwards_opens `integer`: How many times the forwarded campaign has been opened.
  * opens `object`: An object describing the open activity for the campaign.
    * opens_total `integer`: The total number of opens for a campaign.
    * unique_opens `integer`: The total number of unique opens.
    * open_rate `number`: The number of unique opens divided by the total number of successful deliveries.
    * last_open `string`: The date and time of the last recorded open.
  * clicks `object`: An object describing the click activity for the campaign.
    * clicks_total `integer`: The total number of clicks for the campaign.
    * unique_clicks `integer`: The total number of unique clicks for links across a campaign.
    * unique_subscriber_clicks `integer`: The total number of subscribers who clicked on a campaign.
    * click_rate `number`: The number of unique clicks divided by the total number of successful deliveries.
    * last_click `string`: The date and time of the last recorded click for the campaign.
  * facebook_likes `object`: An object describing campaign engagement on Facebook.
    * recipient_likes `integer`: The number of recipients who liked the campaign on Facebook.
    * unique_likes `integer`: The number of unique likes.
    * facebook_likes `integer`: The number of Facebook likes for the campaign.
  * industry_stats `object`: The average campaign statistics for your industry.
    * type `string`: The type of business industry associated with your account. For example: retail, education, etc.
    * open_rate `number`: The industry open rate.
    * click_rate `number`: The industry click rate.
    * bounce_rate `number`: The industry bounce rate.
    * unopen_rate `number`: The industry unopened rate.
    * unsub_rate `number`: The industry unsubscribe rate.
    * abuse_rate `number`: The industry abuse rate.
  * list_stats `object`: The average campaign statistics for your industry. This won't be present if we haven't calculated it yet for this list.
    * sub_rate `number`: The average number of subscriptions per month for the list.
    * unsub_rate `number`: The average number of unsubscriptions per month for the list.
    * open_rate `number`: The average open rate (a percentage represented as a number between 0 and 100) per campaign for the list.
    * click_rate `number`: The average click rate (a percentage represented as a number between 0 and 100) per campaign for the list.
  * ab_split `object`: General stats about different groups of an A/B Split campaign. Does not return information about [MailChimp Pro's Multivariate Campaigns](http://kb.mailchimp.com/campaigns/multivariate/about-multivariate-campaigns?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
    * a `object`: Stats for Campaign A.
      * bounces `integer`: Bounces for Campaign A.
      * abuse_reports `integer`: Abuse reports for Campaign A.
      * unsubs `integer`: Unsubscribes for Campaign A.
      * recipient_clicks `integer`: Recipient Clicks for Campaign A.
      * forwards `integer`: Forwards for Campaign A.
      * forwards_opens `integer`: Opens from forwards for Campaign A.
      * opens `integer`: Opens for Campaign A.
      * last_open `string`: The last open for Campaign A.
      * unique_opens `integer`: Unique opens for Campaign A.
    * b `object`: Stats for Campaign B.
      * bounces `integer`: Bounces for Campaign B.
      * abuse_reports `integer`: Abuse reports for Campaign B.
      * unsubs `integer`: Unsubscribes for Campaign B.
      * recipient_clicks `integer`: Recipients clicks for Campaign B.
      * forwards `integer`: Forwards for Campaign B.
      * forwards_opens `integer`: Opens for forwards from Campaign B.
      * opens `integer`: Opens for Campaign B.
      * last_open `string`: The last open for Campaign B.
      * unique_opens `integer`: Unique opens for Campaign B.
  * timewarp `array`: An hourly breakdown of sends, opens, and clicks if a campaign is sent using timewarp.
    * items `object`
      * gmt_offset `integer`: For campaigns sent with timewarp, the time zone group the member is apart of.
      * opens `integer`: The number of opens.
      * last_open `string`: The date and time of the last open.
      * unique_opens `integer`: The number of unique opens.
      * clicks `integer`: The number of clicks.
      * last_click `string`: The date and time of the last click.
      * unique_clicks `integer`: The number of unique clicks.
      * bounces `integer`: The number of bounces.
  * timeseries `array`: An hourly breakdown of the performance of the campaign over the first 24 hours.
    * items `object`
      * timestamp `string`: The date and time for the series.
      * emails_sent `integer`: The number of emails sent in the timeseries.
      * unique_opens `integer`: The number of unique opens in the timeseries.
      * recipients_clicks `integer`: The number of clicks in the timeseries.
  * share_report `object`: The url and password for the [VIP report](http://kb.mailchimp.com/reports/email-a-report-to-a-client?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
    * share_url `string`: The URL for the VIP report.
    * share_password `string`: If password protected, the password for the VIP report.
  * ecommerce `object`: E-Commerce stats for a campaign.
    * total_orders `integer`: The total orders for a campaign.
    * total_spent `number`: The total spent for a campaign. Calculated as the sum of all order totals with no deductions.
    * total_revenue `number`: The total revenue for a campaign. Calculated as the sum of all order totals minus shipping and tax totals.
  * delivery_status [DeliveryStatus](#deliverystatus)
  * _links [HATEOASLinks](#hateoaslinks)

### getReportsIdAbuseReportsId
Get a list of [abuse complaints](http://kb.mailchimp.com/accounts/compliance-tips/about-abuse-complaints?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) for a specific campaign.


```js
mailchimp.getReportsIdAbuseReportsId({
  "campaign_id": ""
}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * campaign_id **required** `string`: The unique id for the campaign.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: A list of abuse complaints for a specific list.
  * abuse_reports `array`: An array of objects, each representing an abuse report resource.
    * items `object`: Details of abuse complaints for a specific list. An abuse complaint occurs when your recipient clicks to 'report spam' in their email program.
      * id `integer`: The id for the abuse report
      * campaign_id `string`: The campaign id for the abuse report
      * list_id `string`: The list id for the abuse report.
      * email_id `string`: The MD5 hash of the lowercase version of the list member's email address.
      * email_address `string`: Email address for a subscriber.
      * merge_fields `object`: An individual merge var and value for a member.
      * vip `boolean`: [VIP status](http://kb.mailchimp.com/lists/managing-subscribers/designate-and-send-to-vip-subscribers?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) for subscriber.
      * date `string`: Date for the abuse report
      * _links [HATEOASLinks](#hateoaslinks)
  * campaign_id `string`: The campaign id.
  * total_items [CollectionTotal](#collectiontotal)
  * _links [HATEOASLinks](#hateoaslinks)

### getReportsIdAbuseReportsIdId
Get information about a specific abuse report for a campaign.


```js
mailchimp.getReportsIdAbuseReportsIdId({
  "campaign_id": "",
  "report_id": null
}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * campaign_id **required** `string`: The unique id for the campaign.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: Details of abuse complaints for a specific list. An abuse complaint occurs when your recipient clicks to 'report spam' in their email program.
  * id `integer`: The id for the abuse report
  * campaign_id `string`: The campaign id for the abuse report
  * list_id `string`: The list id for the abuse report.
  * email_id `string`: The MD5 hash of the lowercase version of the list member's email address.
  * email_address `string`: Email address for a subscriber.
  * merge_fields `object`: An individual merge var and value for a member.
  * vip `boolean`: [VIP status](http://kb.mailchimp.com/lists/managing-subscribers/designate-and-send-to-vip-subscribers?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) for subscriber.
  * date `string`: Date for the abuse report
  * _links [HATEOASLinks](#hateoaslinks)

### getReportsIdAdvice
Get feedback based on a campaign's statistics. Advice feedback is based on campaign stats like opens, clicks, unsubscribes, bounces, and more.


```js
mailchimp.getReportsIdAdvice({
  "campaign_id": ""
}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * campaign_id **required** `string`: The unique id for the campaign.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: A list of feedback based on a campaign's statistics.
  * advice `array`: An array of objects, each representing a point of campaign feedback.
    * items `object`: Campaign feedback details.
      * type `string` (values: negative, positive, neutral): The sentiment type for a feedback message.
      * message `string`: The advice message.
      * _links [HATEOASLinks](#hateoaslinks)
  * campaign_id `string`: The campaign id.
  * total_items [CollectionTotal](#collectiontotal)
  * _links [HATEOASLinks](#hateoaslinks)

### getReportsIdClickDetails
Get information about [clicks](http://kb.mailchimp.com/reports/about-click-tracking?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) on specific links in your MailChimp campaigns.


```js
mailchimp.getReportsIdClickDetails({
  "campaign_id": ""
}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * count `integer`: The number of records to return. [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **10**.
  * offset `integer`: The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **0**.
  * campaign_id **required** `string`: The unique id for the campaign.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: A list of URLs and unique IDs included in HTML and plain-text versions of a campaign.
  * urls_clicked `array`: An array of objects, each representing a specific URL contained in the campaign.
    * items `object`: A report of links clicked in a specific campaign.
      * id `string`: The unique id for the link.
      * url `string`: The URL for the link in the campaign.
      * total_clicks `integer`: The number of total clicks for a link.
      * click_percentage `number`: The percentage of total clicks a link generated for a campaign.
      * unique_clicks `integer`: Number of unique clicks for a link.
      * unique_click_percentage `number`: The percentage of unique clicks a link generated for a campaign.
      * last_click `string`: The date and time for the last recorded click for a link.
      * ab_split `object`: A breakdown of clicks by different groups of an A/B Split campaign. Does not return information about [MailChimp Pro's Multivariate Campaigns](http://kb.mailchimp.com/campaigns/multivariate/about-multivariate-campaigns?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
        * a `object`: Stats for Group A.
          * total_clicks_a `integer`: The total number of clicks for Group A.
          * click_percentage_a `number`: The percentage of total clicks for Group A.
          * unique_clicks_a `integer`: The number of unique clicks for Group A.
          * unique_click_percentage_a `number`: The percentage of unique clicks for Group A.
        * b `object`: Stats for Group B.
          * total_clicks_b `integer`: The total number of clicks for Group B.
          * click_percentage_b `number`: The percentage of total clicks for Group B.
          * unique_clicks_b `integer`: The number of unique clicks for Group B.
          * unique_click_percentage_b `number`: The percentage of unique clicks for Group B.
      * campaign_id `string`: The campaign id.
      * _links [HATEOASLinks](#hateoaslinks)
  * campaign_id `string`: The campaign id.
  * total_items [CollectionTotal](#collectiontotal)
  * _links [HATEOASLinks](#hateoaslinks)

### getReportsIdClickDetailsId
Get click details for a specific link in a campaign.


```js
mailchimp.getReportsIdClickDetailsId({
  "campaign_id": "",
  "link_id": ""
}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * campaign_id **required** `string`: The unique id for the campaign.
  * link_id **required** `string`: The id for the link.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: A report of links clicked in a specific campaign.
  * id `string`: The unique id for the link.
  * url `string`: The URL for the link in the campaign.
  * total_clicks `integer`: The number of total clicks for a link.
  * click_percentage `number`: The percentage of total clicks a link generated for a campaign.
  * unique_clicks `integer`: Number of unique clicks for a link.
  * unique_click_percentage `number`: The percentage of unique clicks a link generated for a campaign.
  * last_click `string`: The date and time for the last recorded click for a link.
  * ab_split `object`: A breakdown of clicks by different groups of an A/B Split campaign. Does not return information about [MailChimp Pro's Multivariate Campaigns](http://kb.mailchimp.com/campaigns/multivariate/about-multivariate-campaigns?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
    * a `object`: Stats for Group A.
      * total_clicks_a `integer`: The total number of clicks for Group A.
      * click_percentage_a `number`: The percentage of total clicks for Group A.
      * unique_clicks_a `integer`: The number of unique clicks for Group A.
      * unique_click_percentage_a `number`: The percentage of unique clicks for Group A.
    * b `object`: Stats for Group B.
      * total_clicks_b `integer`: The total number of clicks for Group B.
      * click_percentage_b `number`: The percentage of total clicks for Group B.
      * unique_clicks_b `integer`: The number of unique clicks for Group B.
      * unique_click_percentage_b `number`: The percentage of unique clicks for Group B.
  * campaign_id `string`: The campaign id.
  * _links [HATEOASLinks](#hateoaslinks)

### getReportsIdClickDetailsIdMembers
Get information about list members who clicked on a specific link in a campaign.


```js
mailchimp.getReportsIdClickDetailsIdMembers({
  "campaign_id": "",
  "link_id": ""
}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * count `integer`: The number of records to return. [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **10**.
  * offset `integer`: The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **0**.
  * campaign_id **required** `string`: The unique id for the campaign.
  * link_id **required** `string`: The id for the link.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: A collection of members who clicked on a specific link within a campaign.
  * members `array`: An array of objects, each representing a member who clicked a specific link within a campaign.
    * items `object`: A subscriber who clicked a specific URL in a specific campaign.
      * email_id `string`: The MD5 hash of the lowercase version of the list member's email address.
      * email_address `string`: Email address for a subscriber.
      * merge_fields `object`: An individual merge var and value for a member.
      * vip `boolean`: [VIP status](http://kb.mailchimp.com/lists/managing-subscribers/designate-and-send-to-vip-subscribers?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) for subscriber.
      * clicks `integer`: The total number of times the subscriber clicked on the link.
      * campaign_id `string`: The campaign id.
      * url_id `string`: The id for the tracked URL in the campaign.
      * list_id `string`: The list id.
      * _links [HATEOASLinks](#hateoaslinks)
  * campaign_id `string`: The campaign id.
  * total_items [CollectionTotal](#collectiontotal)
  * _links [HATEOASLinks](#hateoaslinks)

### getReportsIdClickDetailsIdMembersId
Get information about a specific subscriber who clicked a link in a specific campaign.


```js
mailchimp.getReportsIdClickDetailsIdMembersId({
  "campaign_id": "",
  "link_id": "",
  "subscriber_hash": ""
}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * campaign_id **required** `string`: The unique id for the campaign.
  * link_id **required** `string`: The id for the link.
  * subscriber_hash **required** `string`: The MD5 hash of the lowercase version of the list member's email address.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: A subscriber who clicked a specific URL in a specific campaign.
  * email_id `string`: The MD5 hash of the lowercase version of the list member's email address.
  * email_address `string`: Email address for a subscriber.
  * merge_fields `object`: An individual merge var and value for a member.
  * vip `boolean`: [VIP status](http://kb.mailchimp.com/lists/managing-subscribers/designate-and-send-to-vip-subscribers?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) for subscriber.
  * clicks `integer`: The total number of times the subscriber clicked on the link.
  * campaign_id `string`: The campaign id.
  * url_id `string`: The id for the tracked URL in the campaign.
  * list_id `string`: The list id.
  * _links [HATEOASLinks](#hateoaslinks)

### getReportsIdOpenDetails
Get detailed information about any campaign emails that were opened by a list member.


```js
mailchimp.getReportsIdOpenDetails({
  "campaign_id": ""
}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * count `integer`: The number of records to return. [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **10**.
  * offset `integer`: The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **0**.
  * campaign_id **required** `string`: The unique id for the campaign.
  * since `string`: Restrict results to campaign open events that occur after a specific time.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: A detailed report of any campaign emails that were opened by a list member.
  * members `array`: An array of objects, each representing a list member who opened a campaign email. Each members object will contain information about the number of total opens by a single member, as well as timestamps for each open event.
    * items `object`: A list of a member's opens activity in a specific campaign.
      * campaign_id `string`: The unique id for the campaign.
      * list_id `string`: The unique id for the list.
      * email_id `string`: The MD5 hash of the lowercase version of the list member's email address.
      * email_address `string`: Email address for a subscriber.
      * merge_fields `object`: An individual merge var and value for a member.
      * vip `boolean`: [VIP status](http://kb.mailchimp.com/lists/managing-subscribers/designate-and-send-to-vip-subscribers?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) for subscriber.
      * opens_count `integer`: The total number of times the this campaign was opened by the list member.
      * opens `array`: An array of timestamps for each time a list member opened the campaign. If a list member opens an email multiple times, this will return a separate timestamp for each open event.
        * items `object`: A summary of the interaction with the campaign.
          * timestamp `string`: The date and time recorded for the action.
      * _links [HATEOASLinks](#hateoaslinks)
  * campaign_id `string`: The campaign id.
  * total_opens `integer`: The total number of opens matching the query regardless of pagination.
  * total_items [CollectionTotal](#collectiontotal)
  * _links [HATEOASLinks](#hateoaslinks)

### getReportsIdOpenDetailsIdMembersId
Get information about a specific subscriber who opened a campaign.


```js
mailchimp.getReportsIdOpenDetailsIdMembersId({
  "campaign_id": "",
  "subscriber_hash": ""
}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * campaign_id **required** `string`: The unique id for the campaign.
  * subscriber_hash **required** `string`: The MD5 hash of the lowercase version of the list member's email address.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: A list of a member's opens activity in a specific campaign.
  * campaign_id `string`: The unique id for the campaign.
  * list_id `string`: The unique id for the list.
  * email_id `string`: The MD5 hash of the lowercase version of the list member's email address.
  * email_address `string`: Email address for a subscriber.
  * merge_fields `object`: An individual merge var and value for a member.
  * vip `boolean`: [VIP status](http://kb.mailchimp.com/lists/managing-subscribers/designate-and-send-to-vip-subscribers?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) for subscriber.
  * opens_count `integer`: The total number of times the this campaign was opened by the list member.
  * opens `array`: An array of timestamps for each time a list member opened the campaign. If a list member opens an email multiple times, this will return a separate timestamp for each open event.
    * items `object`: A summary of the interaction with the campaign.
      * timestamp `string`: The date and time recorded for the action.
  * _links [HATEOASLinks](#hateoaslinks)

### getReportsIdDomainPerformance
Get statistics for the top-performing email domains in a campaign.


```js
mailchimp.getReportsIdDomainPerformance({
  "campaign_id": ""
}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * campaign_id **required** `string`: The unique id for the campaign.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: Statistics for the top-performing email domains in a campaign.
  * domains `array`: The top 5 email domains based on total delivered emails.
    * items `object`: A single email domain's performance
      * domain `string`: The name of the domain (gmail.com, hotmail.com, yahoo.com).
      * emails_sent `integer`: The number of emails sent to that specific domain.
      * bounces `integer`: The number of bounces at a domain.
      * opens `integer`: The number of opens for a domain.
      * clicks `integer`: The number of clicks for a domain.
      * unsubs `integer`: The total number of unsubscribes for a domain.
      * delivered `integer`: The number of successful deliveries for a domain.
      * emails_pct `number`: The percentage of total emails that went to this domain.
      * bounces_pct `number`: The percentage of total bounces from this domain.
      * opens_pct `number`: The percentage of total opens from this domain.
      * clicks_pct `number`: The percentage of total clicks from this domain.
      * unsubs_pct `number`: The percentage of total unsubscribes from this domain.
  * total_sent `integer`: The total number of emails sent for the campaign.
  * campaign_id `string`: The unique id for the campaign.
  * total_items [CollectionTotal](#collectiontotal)
  * _links [HATEOASLinks](#hateoaslinks)

### getReportsIdEepurl
Get a summary of social activity for the campaign, tracked by EepURL.


```js
mailchimp.getReportsIdEepurl({
  "campaign_id": ""
}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * campaign_id **required** `string`: The unique id for the campaign.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: A summary of social activity for the campaign, tracked by EepURL.
  * twitter `object`: A summary of Twitter activity for a campaign.
    * tweets `integer`: The number of tweets including a link to the campaign.
    * first_tweet `string`: The day and time of the first recorded tweet with a link to the campaign.
    * last_tweet `string`: The day and time of the last recorded tweet with a link to the campaign.
    * retweets `integer`: The number of retweets that include a link to the campaign.
    * statuses `array`: A summary of tweets that include a link to the campaign.
      * items `object`: An individual tweet.
        * status `string`: The body of the tweet.
        * screen_name `string`: The Twitter handle for the author of the tweet.
        * status_id `string`: The individual id for the tweet.
        * datetime `string`: A timestamp for the tweet.
        * is_retweet `boolean`: A 'true' or 'false' status of whether the tweet is a retweet.
  * clicks `object`: A summary of the click-throughs on the campaign's URL.
    * clicks `integer`: The total number of clicks to the campaign's URL.
    * first_click `string`: The timestamp for the first click to the URL.
    * last_click `string`: The timestamp for the last click to the URL.
    * locations `array`: A summary of the top click locations.
      * items `object`: An individual click location.
        * country `string`: The two-digit country code for a recorded click.
        * region `string`: If available, a specific region where the click was recorded.
  * referrers `array`: A summary of the top referrers for the campaign.
    * items `object`: A single instance of a campaign referral.
      * referrer `string`: A referrer (truncated to 100 bytes).
      * clicks `integer`: The number of clicks a single referrer generated.
      * first_click `string`: The timestamp for the first click from this referrer.
      * last_click `string`: The timestamp for the last click from this referrer.
  * eepurl `string`: The shortened link used for tracking.
  * campaign_id `string`: The unique id for the campaign.
  * total_items [CollectionTotal](#collectiontotal)
  * _links [HATEOASLinks](#hateoaslinks)

### getReportsIdEmailActivity
Get a list of member's subscriber activity in a specific campaign.


```js
mailchimp.getReportsIdEmailActivity({
  "campaign_id": ""
}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * count `integer`: The number of records to return. [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **10**.
  * offset `integer`: The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **0**.
  * campaign_id **required** `string`: The unique id for the campaign.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: A list of member's subscriber activity in a specific campaign.
  * emails `array`: An array of objects, each representing a member who opened a campaign.
    * items `object`: A list of a member's subscriber activity in a specific campaign, including opens, clicks, and bounces.
      * campaign_id `string`: The unique id for the campaign.
      * list_id `string`: The unique id for the list.
      * email_id `string`: The MD5 hash of the lowercase version of the list member's email address.
      * email_address `string`: Email address for a subscriber.
      * activity `array`: An array of objects, each showing an interaction with the email.
        * items `object`: A summary of the interaction with the campaign.
          * action `string`: One of the following actions: 'open', 'click', or 'bounce'
          * type `string`: If the action is a 'bounce', the type of bounce received: 'hard', 'soft'.
          * timestamp `string`: The date and time recorded for the action.
          * url `string`: If the action is a 'click', the URL on which the member clicked.
          * ip `string`: The IP address recorded for the action.
      * _links [HATEOASLinks](#hateoaslinks)
  * campaign_id `string`: The unique id for the sent campaign.
  * total_items [CollectionTotal](#collectiontotal)
  * _links [HATEOASLinks](#hateoaslinks)

### getReportsIdEmailActivityId
Get a specific list member's activity in a campaign including opens, clicks, and bounces.


```js
mailchimp.getReportsIdEmailActivityId({
  "campaign_id": "",
  "subscriber_hash": ""
}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * campaign_id **required** `string`: The unique id for the campaign.
  * subscriber_hash **required** `string`: The MD5 hash of the lowercase version of the list member's email address.
  * since `string`: Restrict results to email activity events that occur after a specific time.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: A list of a member's subscriber activity in a specific campaign, including opens, clicks, and bounces.
  * campaign_id `string`: The unique id for the campaign.
  * list_id `string`: The unique id for the list.
  * email_id `string`: The MD5 hash of the lowercase version of the list member's email address.
  * email_address `string`: Email address for a subscriber.
  * activity `array`: An array of objects, each showing an interaction with the email.
    * items `object`: A summary of the interaction with the campaign.
      * action `string`: One of the following actions: 'open', 'click', or 'bounce'
      * type `string`: If the action is a 'bounce', the type of bounce received: 'hard', 'soft'.
      * timestamp `string`: The date and time recorded for the action.
      * url `string`: If the action is a 'click', the URL on which the member clicked.
      * ip `string`: The IP address recorded for the action.
  * _links [HATEOASLinks](#hateoaslinks)

### getReportsIdGoogleAnalytics
Get information about any [Google Analytics reporting](http://kb.mailchimp.com/integrations/e-commerce/integrate-google-analytics-with-mailchimp?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) for a specific campaign.


```js
mailchimp.getReportsIdGoogleAnalytics({
  "campaign_id": ""
}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * campaign_id **required** `string`: The unique id for the campaign.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: A summary of the Google Analytics data for a campaign.  Google Analytics will need to be enabled for both the MailChimp account and as an additional tracking parameter in the campaign.  Some stats may take up to 24 hours to fully populate.
  * analytics `array`: An array of objects, each representing a Google Analytics view for the campaign.
    * items `object`: A summary of Google Analytics data for a campaign.
      * analytics_profileId `string`: The Google Analytics View ID.
      * analytics_webPropertyId `string`: The Google Analytics Web Property ID.
      * analytics_accountId `string`: The Google Analytics Account ID.
      * analytics_profileName `string`: The Google Analytics Profile Name.
      * analytics_title `string`: The Google Analytics Title.
      * campaign_id `string`: The unique id for the campaign.
      * visits `integer`: The number of visits generated by the campaign.
      * page_views `integer`: The number of page views generated by the campaign.
      * new_visits `integer`: New visitors to your site generated by the campaign.
      * bounces `integer`: Visitors who 'bounced' (in the Google Analytics definition) from the site.
      * time_on_site `number`: The total amount of time visitors from the campaign spent on the site.
      * goal_conversions `integer`: The number of Google Analytics goal conversions.
      * goal_value `number`: The value of Google Analytics goal conversions in dollars.
      * revenue `number`: Revenue generated by the campaign.
      * transactions `integer`: The number of transactions tracked by Google.
      * ecomm_conversions `integer`: The number of e-commerce conversions tracked by Google.
      * goals `array`: A summary of Goals as defined in Google Analytics.
        * items `object`: A single Google Analytics goal.
          * name `string`: The name of a Google Analytics goal.
          * conversions `integer`: The number of conversions for a single Google Analytics goal.
      * _links [HATEOASLinks](#hateoaslinks)
  * campaign_id `string`: The id for the campaign.
  * total_items [CollectionTotal](#collectiontotal)
  * _links [HATEOASLinks](#hateoaslinks)

### getReportsIdGoogleAnalyticsId
Get information about a specific [Google Analytics report](http://kb.mailchimp.com/integrations/e-commerce/integrate-google-analytics-with-mailchimp?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) for a campaign.


```js
mailchimp.getReportsIdGoogleAnalyticsId({
  "campaign_id": "",
  "profile_id": null
}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * campaign_id **required** `string`: The unique id for the campaign.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: A summary of Google Analytics data for a campaign.
  * analytics_profileId `string`: The Google Analytics View ID.
  * analytics_webPropertyId `string`: The Google Analytics Web Property ID.
  * analytics_accountId `string`: The Google Analytics Account ID.
  * analytics_profileName `string`: The Google Analytics Profile Name.
  * analytics_title `string`: The Google Analytics Title.
  * campaign_id `string`: The unique id for the campaign.
  * visits `integer`: The number of visits generated by the campaign.
  * page_views `integer`: The number of page views generated by the campaign.
  * new_visits `integer`: New visitors to your site generated by the campaign.
  * bounces `integer`: Visitors who 'bounced' (in the Google Analytics definition) from the site.
  * time_on_site `number`: The total amount of time visitors from the campaign spent on the site.
  * goal_conversions `integer`: The number of Google Analytics goal conversions.
  * goal_value `number`: The value of Google Analytics goal conversions in dollars.
  * revenue `number`: Revenue generated by the campaign.
  * transactions `integer`: The number of transactions tracked by Google.
  * ecomm_conversions `integer`: The number of e-commerce conversions tracked by Google.
  * goals `array`: A summary of Goals as defined in Google Analytics.
    * items `object`: A single Google Analytics goal.
      * name `string`: The name of a Google Analytics goal.
      * conversions `integer`: The number of conversions for a single Google Analytics goal.
  * _links [HATEOASLinks](#hateoaslinks)

### getReportsIdLocations
Get top open locations for a specific campaign.


```js
mailchimp.getReportsIdLocations({
  "campaign_id": ""
}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * campaign_id **required** `string`: The unique id for the campaign.
  * count `integer`: The number of records to return. [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **10**.
  * offset `integer`: The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **0**.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: Top open locations for a specific campaign.
  * locations `array`: An array of objects, each representing a top location for opens.
    * items `object`
      * country_code `string`: The ISO 3166 2 digit country code.
      * region `string`: An internal code for the region representing the more specific location area such as city or state. When this is blank, it indicates we know the country, but not the region.
      * region_name `string`: The name of the region, if we have one. For blank "region" values, this will be "Rest of Country".
      * opens `integer`: The number of unique campaign opens for a region.
  * campaign_id `string`: The campaign id.
  * total_items [CollectionTotal](#collectiontotal)
  * _links [HATEOASLinks](#hateoaslinks)

### getReportsIdSentTo
Get information about campaign recipients.


```js
mailchimp.getReportsIdSentTo({
  "campaign_id": ""
}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * count `integer`: The number of records to return. [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **10**.
  * offset `integer`: The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **0**.
  * campaign_id **required** `string`: The unique id for the campaign.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: A list of subscribers who were sent a specific campaign.
  * sent_to `array`: An array of objects, each representing a campaign recipient.
    * items `object`: A subscriber's status for a specific campaign.
      * email_id `string`: The MD5 hash of the lowercase version of the list member's email address.
      * email_address `string`: Email address for a subscriber.
      * merge_fields `object`: An individual merge var and value for a member.
      * vip `boolean`: [VIP status](http://kb.mailchimp.com/lists/managing-subscribers/designate-and-send-to-vip-subscribers?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) for subscriber.
      * status `string`: The status of the member ('sent', 'hard' for hard bounce, or 'soft' for soft bounce).
      * open_count `integer`: The number of times a campaign was opened by this member.
      * last_open `string`: The date and time of the last open for this member.
      * absplit_group `string`: For A/B Split Campaigns, the group the member was apart of ('a', 'b', or 'winner').
      * gmt_offset `integer`: For campaigns sent with timewarp, the time zone group the member is apart of.
      * campaign_id `string`: The campaign id.
      * list_id `string`: The list id.
      * _links [HATEOASLinks](#hateoaslinks)
  * campaign_id `string`: The campaign id.
  * total_items [CollectionTotal](#collectiontotal)
  * _links [HATEOASLinks](#hateoaslinks)

### getReportsIdSentToId
Get information about a specific campaign recipient.


```js
mailchimp.getReportsIdSentToId({
  "campaign_id": "",
  "subscriber_hash": ""
}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * campaign_id **required** `string`: The unique id for the campaign.
  * subscriber_hash **required** `string`: The MD5 hash of the lowercase version of the list member's email address.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: A subscriber's status for a specific campaign.
  * email_id `string`: The MD5 hash of the lowercase version of the list member's email address.
  * email_address `string`: Email address for a subscriber.
  * merge_fields `object`: An individual merge var and value for a member.
  * vip `boolean`: [VIP status](http://kb.mailchimp.com/lists/managing-subscribers/designate-and-send-to-vip-subscribers?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) for subscriber.
  * status `string`: The status of the member ('sent', 'hard' for hard bounce, or 'soft' for soft bounce).
  * open_count `integer`: The number of times a campaign was opened by this member.
  * last_open `string`: The date and time of the last open for this member.
  * absplit_group `string`: For A/B Split Campaigns, the group the member was apart of ('a', 'b', or 'winner').
  * gmt_offset `integer`: For campaigns sent with timewarp, the time zone group the member is apart of.
  * campaign_id `string`: The campaign id.
  * list_id `string`: The list id.
  * _links [HATEOASLinks](#hateoaslinks)

### getReportsIdSubReportsId
Get a list of reports with child campaigns for a specific parent campaign.


```js
mailchimp.getReportsIdSubReportsId({
  "campaign_id": ""
}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * campaign_id **required** `string`: The unique id for the campaign.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: A list of reports containing child campaigns for a specific campaign.
  * reports `array`: An array of objects, each representing a report resource.
    * items `object`: Report details about a sent campaign.
      * id `string`: A string that uniquely identifies this campaign.
      * campaign_title `string`: The title of the campaign.
      * type `string`: The type of campaign (regular, plain-text, ab_split, rss, automation, variate, or auto).
      * list_id `string`: The unique list id.
      * list_name `string`: The name of the list.
      * subject_line `string`: The subject line for the campaign.
      * preview_text `string`: The preview text for the campaign.
      * emails_sent `integer`: The total number of emails sent for this campaign.
      * abuse_reports `integer`: The number of abuse reports generated for this campaign.
      * unsubscribed `integer`: The total number of unsubscribed members for this campaign.
      * send_time `string`: The date and time a campaign was sent.
      * rss_last_send `string`: For RSS campaigns, the date and time of the last send
      * bounces `object`: An object describing the bounce summary for the campaign.
        * hard_bounces `integer`: The total number of hard bounced email addresses.
        * soft_bounces `integer`: The total number of soft bounced email addresses.
        * syntax_errors `integer`: The total number of addresses that were syntax-related bounces.
      * forwards `object`: An object describing the forwards and forward activity for the campaign.
        * forwards_count `integer`: How many times the campaign has been forwarded.
        * forwards_opens `integer`: How many times the forwarded campaign has been opened.
      * opens `object`: An object describing the open activity for the campaign.
        * opens_total `integer`: The total number of opens for a campaign.
        * unique_opens `integer`: The total number of unique opens.
        * open_rate `number`: The number of unique opens divided by the total number of successful deliveries.
        * last_open `string`: The date and time of the last recorded open.
      * clicks `object`: An object describing the click activity for the campaign.
        * clicks_total `integer`: The total number of clicks for the campaign.
        * unique_clicks `integer`: The total number of unique clicks for links across a campaign.
        * unique_subscriber_clicks `integer`: The total number of subscribers who clicked on a campaign.
        * click_rate `number`: The number of unique clicks divided by the total number of successful deliveries.
        * last_click `string`: The date and time of the last recorded click for the campaign.
      * facebook_likes `object`: An object describing campaign engagement on Facebook.
        * recipient_likes `integer`: The number of recipients who liked the campaign on Facebook.
        * unique_likes `integer`: The number of unique likes.
        * facebook_likes `integer`: The number of Facebook likes for the campaign.
      * industry_stats `object`: The average campaign statistics for your industry.
        * type `string`: The type of business industry associated with your account. For example: retail, education, etc.
        * open_rate `number`: The industry open rate.
        * click_rate `number`: The industry click rate.
        * bounce_rate `number`: The industry bounce rate.
        * unopen_rate `number`: The industry unopened rate.
        * unsub_rate `number`: The industry unsubscribe rate.
        * abuse_rate `number`: The industry abuse rate.
      * list_stats `object`: The average campaign statistics for your industry. This won't be present if we haven't calculated it yet for this list.
        * sub_rate `number`: The average number of subscriptions per month for the list.
        * unsub_rate `number`: The average number of unsubscriptions per month for the list.
        * open_rate `number`: The average open rate (a percentage represented as a number between 0 and 100) per campaign for the list.
        * click_rate `number`: The average click rate (a percentage represented as a number between 0 and 100) per campaign for the list.
      * ab_split `object`: General stats about different groups of an A/B Split campaign. Does not return information about [MailChimp Pro's Multivariate Campaigns](http://kb.mailchimp.com/campaigns/multivariate/about-multivariate-campaigns?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
        * a `object`: Stats for Campaign A.
          * bounces `integer`: Bounces for Campaign A.
          * abuse_reports `integer`: Abuse reports for Campaign A.
          * unsubs `integer`: Unsubscribes for Campaign A.
          * recipient_clicks `integer`: Recipient Clicks for Campaign A.
          * forwards `integer`: Forwards for Campaign A.
          * forwards_opens `integer`: Opens from forwards for Campaign A.
          * opens `integer`: Opens for Campaign A.
          * last_open `string`: The last open for Campaign A.
          * unique_opens `integer`: Unique opens for Campaign A.
        * b `object`: Stats for Campaign B.
          * bounces `integer`: Bounces for Campaign B.
          * abuse_reports `integer`: Abuse reports for Campaign B.
          * unsubs `integer`: Unsubscribes for Campaign B.
          * recipient_clicks `integer`: Recipients clicks for Campaign B.
          * forwards `integer`: Forwards for Campaign B.
          * forwards_opens `integer`: Opens for forwards from Campaign B.
          * opens `integer`: Opens for Campaign B.
          * last_open `string`: The last open for Campaign B.
          * unique_opens `integer`: Unique opens for Campaign B.
      * timewarp `array`: An hourly breakdown of sends, opens, and clicks if a campaign is sent using timewarp.
        * items `object`
          * gmt_offset `integer`: For campaigns sent with timewarp, the time zone group the member is apart of.
          * opens `integer`: The number of opens.
          * last_open `string`: The date and time of the last open.
          * unique_opens `integer`: The number of unique opens.
          * clicks `integer`: The number of clicks.
          * last_click `string`: The date and time of the last click.
          * unique_clicks `integer`: The number of unique clicks.
          * bounces `integer`: The number of bounces.
      * timeseries `array`: An hourly breakdown of the performance of the campaign over the first 24 hours.
        * items `object`
          * timestamp `string`: The date and time for the series.
          * emails_sent `integer`: The number of emails sent in the timeseries.
          * unique_opens `integer`: The number of unique opens in the timeseries.
          * recipients_clicks `integer`: The number of clicks in the timeseries.
      * share_report `object`: The url and password for the [VIP report](http://kb.mailchimp.com/reports/email-a-report-to-a-client?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
        * share_url `string`: The URL for the VIP report.
        * share_password `string`: If password protected, the password for the VIP report.
      * ecommerce `object`: E-Commerce stats for a campaign.
        * total_orders `integer`: The total orders for a campaign.
        * total_spent `number`: The total spent for a campaign. Calculated as the sum of all order totals with no deductions.
        * total_revenue `number`: The total revenue for a campaign. Calculated as the sum of all order totals minus shipping and tax totals.
      * delivery_status [DeliveryStatus](#deliverystatus)
      * _links [HATEOASLinks](#hateoaslinks)
  * campaign_id `string`: Unique identifier of the parent campaign
  * total_items [CollectionTotal](#collectiontotal)
  * _links [HATEOASLinks](#hateoaslinks)

### getReportsIdUnsubscribed
Get information about members who have unsubscribed from a specific campaign.


```js
mailchimp.getReportsIdUnsubscribed({
  "campaign_id": ""
}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * count `integer`: The number of records to return. [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **10**.
  * offset `integer`: The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **0**.
  * campaign_id **required** `string`: The unique id for the campaign.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: A list of members who have unsubscribed from a specific campaign.
  * unsubscribes `array`: An array of objects, each representing a member who unsubscribed from a campaign.
    * items `object`: A member who unsubscribed from a specific campaign.
      * email_id `string`: The MD5 hash of the lowercase version of the list member's email address.
      * email_address `string`: Email address for a subscriber.
      * merge_fields `object`: An individual merge var and value for a member.
      * vip `boolean`: [VIP status](http://kb.mailchimp.com/lists/managing-subscribers/designate-and-send-to-vip-subscribers?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) for subscriber.
      * timestamp `string`: The date and time the member opted-out.
      * reason `string`: If available, the reason listed by the member for unsubscribing.
      * campaign_id `string`: The campaign id.
      * list_id `string`: The list id.
      * _links [HATEOASLinks](#hateoaslinks)
  * campaign_id `string`: The campaign id.
  * total_items [CollectionTotal](#collectiontotal)
  * _links [HATEOASLinks](#hateoaslinks)

### getReportsIdUnsubscribedId
Get information about a specific list member who unsubscribed from a campaign.


```js
mailchimp.getReportsIdUnsubscribedId({
  "campaign_id": "",
  "subscriber_hash": ""
}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * campaign_id **required** `string`: The unique id for the campaign.
  * subscriber_hash **required** `string`: The MD5 hash of the lowercase version of the list member's email address.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: A member who unsubscribed from a specific campaign.
  * email_id `string`: The MD5 hash of the lowercase version of the list member's email address.
  * email_address `string`: Email address for a subscriber.
  * merge_fields `object`: An individual merge var and value for a member.
  * vip `boolean`: [VIP status](http://kb.mailchimp.com/lists/managing-subscribers/designate-and-send-to-vip-subscribers?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) for subscriber.
  * timestamp `string`: The date and time the member opted-out.
  * reason `string`: If available, the reason listed by the member for unsubscribing.
  * campaign_id `string`: The campaign id.
  * list_id `string`: The list id.
  * _links [HATEOASLinks](#hateoaslinks)

### getTemplates
Get a list of an account's available templates.


```js
mailchimp.getTemplates({}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * count `integer`: The number of records to return. [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **10**.
  * offset `integer`: The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **0**.
  * created_by `string`: The MailChimp account user who created the template.
  * since_created_at `string`: Restrict the response to templates created after the set date.
  * before_created_at `string`: Restrict the response to templates created before the set date.
  * type `string`: Limit results based on template type.
  * category `string`: Limit results based on category.
  * folder_id `string`: The unique folder id.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: A list an account's available templates.
  * templates `array`: All of an account's saved or custom templates.
    * items `object`: Information about a specific template.
      * id `integer`: The individual id for the template.
      * type `string`: The type of template (user, base, or gallery).
      * name `string`: The name of the template.
      * drag_and_drop `boolean`: Whether the template uses the drag and drop editor.
      * responsive `boolean`: Whether the template contains media queries to make it responsive.
      * category `string`: If available, the category the template is listed in.
      * date_created `string`: The date and time the template was created.
      * created_by `string`: The login name for template's creator.
      * active `boolean`: User templates are not 'deleted,' but rather marked as 'inactive.' Returns whether the template is still active.
      * folder_id `string`: The id of the folder the template is currently in.
      * thumbnail `string`: If available, the URL for a thumbnail of the template.
      * share_url `string`: The URL used for [template sharing](http://kb.mailchimp.com/templates/basic-and-themes/how-to-share-a-template?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
      * _links [HATEOASLinks](#hateoaslinks)
  * total_items [CollectionTotal](#collectiontotal)
  * _links [HATEOASLinks](#hateoaslinks)

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

#### Input
* input `object`
  * body **required** `object`: Information about a specific template.
    * name **required** `string`: The name of the template.
    * folder_id `string`: The id of the folder the template is currently in.
    * html **required** `string`: The raw HTML for the template. We  support the MailChimp [Template Language](http://kb.mailchimp.com/templates/code/getting-started-with-mailchimps-template-language?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) in any HTML code passed via the API.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: Information about a specific template.
  * id `integer`: The individual id for the template.
  * type `string`: The type of template (user, base, or gallery).
  * name `string`: The name of the template.
  * drag_and_drop `boolean`: Whether the template uses the drag and drop editor.
  * responsive `boolean`: Whether the template contains media queries to make it responsive.
  * category `string`: If available, the category the template is listed in.
  * date_created `string`: The date and time the template was created.
  * created_by `string`: The login name for template's creator.
  * active `boolean`: User templates are not 'deleted,' but rather marked as 'inactive.' Returns whether the template is still active.
  * folder_id `string`: The id of the folder the template is currently in.
  * thumbnail `string`: If available, the URL for a thumbnail of the template.
  * share_url `string`: The URL used for [template sharing](http://kb.mailchimp.com/templates/basic-and-themes/how-to-share-a-template?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
  * _links [HATEOASLinks](#hateoaslinks)

### getTemplatesId
Get information about a specific template.


```js
mailchimp.getTemplatesId({
  "template_id": ""
}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * template_id **required** `string`: The unique id for the template.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: Information about a specific template.
  * id `integer`: The individual id for the template.
  * type `string`: The type of template (user, base, or gallery).
  * name `string`: The name of the template.
  * drag_and_drop `boolean`: Whether the template uses the drag and drop editor.
  * responsive `boolean`: Whether the template contains media queries to make it responsive.
  * category `string`: If available, the category the template is listed in.
  * date_created `string`: The date and time the template was created.
  * created_by `string`: The login name for template's creator.
  * active `boolean`: User templates are not 'deleted,' but rather marked as 'inactive.' Returns whether the template is still active.
  * folder_id `string`: The id of the folder the template is currently in.
  * thumbnail `string`: If available, the URL for a thumbnail of the template.
  * share_url `string`: The URL used for [template sharing](http://kb.mailchimp.com/templates/basic-and-themes/how-to-share-a-template?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
  * _links [HATEOASLinks](#hateoaslinks)

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

#### Input
* input `object`
  * template_id **required** `string`: The unique id for the template.
  * body **required** `object`: Information about a specific template.
    * name **required** `string`: The name of the template.
    * folder_id `string`: The id of the folder the template is currently in.
    * html **required** `string`: The raw HTML for the template. We  support the MailChimp [Template Language](http://kb.mailchimp.com/templates/code/getting-started-with-mailchimps-template-language?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) in any HTML code passed via the API.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: Information about a specific template.
  * id `integer`: The individual id for the template.
  * type `string`: The type of template (user, base, or gallery).
  * name `string`: The name of the template.
  * drag_and_drop `boolean`: Whether the template uses the drag and drop editor.
  * responsive `boolean`: Whether the template contains media queries to make it responsive.
  * category `string`: If available, the category the template is listed in.
  * date_created `string`: The date and time the template was created.
  * created_by `string`: The login name for template's creator.
  * active `boolean`: User templates are not 'deleted,' but rather marked as 'inactive.' Returns whether the template is still active.
  * folder_id `string`: The id of the folder the template is currently in.
  * thumbnail `string`: If available, the URL for a thumbnail of the template.
  * share_url `string`: The URL used for [template sharing](http://kb.mailchimp.com/templates/basic-and-themes/how-to-share-a-template?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
  * _links [HATEOASLinks](#hateoaslinks)

### deleteTemplatesId
Delete a specific template.


```js
mailchimp.deleteTemplatesId({
  "template_id": ""
}, context)
```

#### Input
* input `object`
  * template_id **required** `string`: The unique id for the template.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
*Output schema unknown*

### getTemplatesIdDefaultContent
Get the sections that you can edit in a template, including each section's default content.


```js
mailchimp.getTemplatesIdDefaultContent({
  "template_id": ""
}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * template_id **required** `string`: The unique id for the template.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: Default content for a template.
  * sections `object`: The sections that you can edit in the template, including each section's default content.
  * _links [HATEOASLinks](#hateoaslinks)

### getEcommerce
Get information about the e-commerce endpoint's resources.


```js
mailchimp.getEcommerce({}, context)
```

#### Input
* input `object`
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: This resource serves as a namespace for e-commerce-related resources.
  * _links [HATEOASLinks](#hateoaslinks)

### getEcommerceOrders
Get information about an account's orders.


```js
mailchimp.getEcommerceOrders({}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * count `integer`: The number of records to return. [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **10**.
  * offset `integer`: The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **0**.
  * campaign_id `string`: Restrict results to orders with a specific `campaign_id` value.
  * outreach_id `string`: Restrict results to orders with a specific `outreach_id` value.
  * customer_id `string`: Restrict results to orders made by a specific customer.
  * has_outreach `boolean`: Restrict results to orders that have an outreach attached. For example, an email campaign or Facebook ad.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: A collection of orders in an account.
  * orders `array`: An array of objects, each representing an order resource.
    * items `object`: Information about a specific order.
      * id `string`: A unique identifier for the order.
      * customer `object`: Information about a specific customer. Orders for existing customers should include only the `id` parameter in the `customer` object body.
        * id `string`: A unique identifier for the customer.
        * email_address `string`: The customer's email address.
        * opt_in_status `boolean`: The customer's opt-in status. This value will never overwrite the opt-in status of a pre-existing MailChimp list member, but will apply to list members that are added through the e-commerce API endpoints. Customers who don't opt in to your MailChimp list [will be added as `Transactional` members](http://developer.mailchimp.com/documentation/mailchimp/guides/getting-started-with-ecommerce/#about-subscribers-and-customers).
        * company `string`: The customer's company.
        * first_name `string`: The customer's first name.
        * last_name `string`: The customer's last name.
        * orders_count `integer`: The customer's total order count. [Learn More](http://developer.mailchimp.com/documentation/mailchimp/guides/getting-started-with-ecommerce/#orders-count-and-total-spent) about using this data.
        * total_spent `number`: The total amount the customer has spent. [Learn More](http://developer.mailchimp.com/documentation/mailchimp/guides/getting-started-with-ecommerce/#orders-count-and-total-spent) about using this data.
        * address `object`: The customer's address.
          * address1 `string`: The mailing address of the customer.
          * address2 `string`: An additional field for the customer's mailing address.
          * city `string`: The city the customer is located in.
          * province `string`: The customer's state name or normalized province.
          * province_code `string`: The two-letter code for the customer's province or state.
          * postal_code `string`: The customer's postal or zip code.
          * country `string`: The customer's country.
          * country_code `string`: The two-letter code for the customer's country.
        * created_at `string`: The date and time the customer was created.
        * updated_at `string`: The date and time the customer was last updated.
        * _links [HATEOASLinks](#hateoaslinks)
      * store_id `string`: The unique identifier for the store.
      * campaign_id `string`: A string that uniquely identifies the campaign associated with an order.
      * landing_site `string`: The URL for the page where the buyer landed when entering the shop.
      * financial_status `string`: The order status. Use this parameter to trigger [Order Notifications](http://developer.mailchimp.com/documentation/mailchimp/guides/getting-started-with-ecommerce/#order-status-notifications).
      * fulfillment_status `string`: The fulfillment status for the order. Use this parameter to trigger [Order Notifications](http://developer.mailchimp.com/documentation/mailchimp/guides/getting-started-with-ecommerce/#order-status-notifications).
      * currency_code `string`: The three-letter [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217#Active_codes) code for the currency that the store accepts.
      * order_total `number`: The order total associated with an order.
      * order_url `string`: The URL for the order.
      * discount_total `number`: The total amount of the discounts to be applied to the price of the order.
      * tax_total `number`: The tax total associated with an order.
      * shipping_total `number`: The shipping total for the order.
      * tracking_code `string` (values: prec): The MailChimp tracking code for the order. Uses the 'mc_tc' parameter in E-Commerce tracking URLs.
      * processed_at_foreign `string`: The date and time the order was processed.
      * cancelled_at_foreign `string`: The date and time the order was cancelled.
      * updated_at_foreign `string`: The date and time the order was updated.
      * shipping_address `object`: The shipping address for the order.
        * name `string`: The name associated with an order's shipping address.
        * address1 `string`: The shipping address for the order.
        * address2 `string`: An additional field for the shipping address.
        * city `string`: The city in the order's shipping address.
        * province `string`: The state or normalized province in the order's shipping address.
        * province_code `string`: The two-letter code for the province or state the order's shipping address is located in.
        * postal_code `string`: The postal or zip code in the order's shipping address.
        * country `string`: The country in the order's shipping address.
        * country_code `string`: The two-letter code for the country in the shipping address.
        * longitude `number`: The longitude for the shipping address location.
        * latitude `number`: The latitude for the shipping address location.
        * phone `string`: The phone number for the order's shipping address
        * company `string`: The company associated with an order's shipping address.
      * billing_address `object`: The billing address for the order.
        * name `string`: The name associated with an order's billing address.
        * address1 `string`: The billing address for the order.
        * address2 `string`: An additional field for the billing address.
        * city `string`: The city in the billing address.
        * province `string`: The state or normalized province in the billing address.
        * province_code `string`: The two-letter code for the province or state in the billing address.
        * postal_code `string`: The postal or zip code in the billing address.
        * country `string`: The country in the billing address.
        * country_code `string`: The two-letter code for the country in the billing address.
        * longitude `number`: The longitude for the billing address location.
        * latitude `number`: The latitude for the billing address location.
        * phone `string`: The phone number for the billing address.
        * company `string`: The company associated with the billing address.
      * lines `array`: An array of the order's line items.
        * items `object`: Information about a specific order line.
          * id `string`: A unique identifier for the order line item.
          * product_id `string`: A unique identifier for the product associated with the order line item.
          * product_title `string`: The name of the product for the order line item.
          * product_variant_id `string`: A unique identifier for the product variant associated with the order line item.
          * product_variant_title `string`: The name of the product variant for the order line item.
          * image_url `string`: The image URL for a product.
          * quantity `integer`: The quantity of an order line item.
          * price `number`: The price of an order line item.
          * discount `number`: The total discount amount applied to this line item.
          * _links [HATEOASLinks](#hateoaslinks)
      * outreach `object`: The outreach associated with this order. For example, an email campaign or Facebook ad.
        * id `string`: A unique identifier for the outreach. Can be an email campaign ID.
        * name `string`: The name for the outreach.
        * published_time `string`: The date and time the Outreach was published
      * _links [HATEOASLinks](#hateoaslinks)
  * total_items [CollectionTotal](#collectiontotal)
  * _links [HATEOASLinks](#hateoaslinks)

### getEcommerceStores
Get information about all stores in the account.


```js
mailchimp.getEcommerceStores({}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * count `integer`: The number of records to return. [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **10**.
  * offset `integer`: The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **0**.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: A collection of stores in the account.
  * stores `array`: An array of objects, each representing a store.
    * items `object`: An individual store in an account.
      * id `string`: The unique identifier for the store.
      * list_id `string`: The unique identifier for the [MailChimp List](http://developer.mailchimp.com/documentation/mailchimp/reference/lists/) that's associated with the store. The `list_id` for a specific store can't change.
      * name `string`: The name of the store.
      * platform `string`: The e-commerce platform of the store.
      * domain `string`: The store domain.
      * is_syncing `boolean`: Whether the e-commerce store is currently [syncing](http://developer.mailchimp.com/documentation/mailchimp/guides/getting-started-with-ecommerce/#syncing-an-e-commerce-store).
      * email_address `string`: The email address for the store.
      * currency_code `string`: The three-letter [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217#Active_codes) code for the currency that the store accepts.
      * money_format `string`: The currency format for the store. For example: `$`, `£`, etc.
      * primary_locale `string`: The primary locale for the store. For example: `en`, `de`, etc.
      * timezone `string`: The timezone for the store.
      * phone `string`: The store phone number.
      * address `object`: The store address.
        * address1 `string`: The store's mailing address.
        * address2 `string`: An additional field for the store's mailing address.
        * city `string`: The city the store is located in.
        * province `string`: The store's state name or normalized province.
        * province_code `string`: The two-letter code for the store's province or state.
        * postal_code `string`: The store's postal or zip code.
        * country `string`: The store's country.
        * country_code `string`: The two-letter code for to the store's country.
        * longitude `number`: The longitude of the store location.
        * latitude `number`: The latitude of the store location.
      * connected_site `object`: The Connected Site associated with the store.
        * site_foreign_id `string`: The unique identifier for the connected site.
        * site_script `object`: The script used to connect your site with MailChimp.
          * url `string`: The URL used for any integrations that offer built-in support for connected sites.
          * fragment `string`: A pre-built script that you can copy-and-paste into your site to integrate it with MailChimp.
      * created_at `string`: The date and time the store was created.
      * updated_at `string`: The date and time the store was last updated.
      * _links [HATEOASLinks](#hateoaslinks)
  * total_items [CollectionTotal](#collectiontotal)
  * _links [HATEOASLinks](#hateoaslinks)

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

#### Input
* input `object`
  * body **required** `object`: An individual store in an account.
    * id **required** `string`: The unique identifier for the store.
    * list_id **required** `string`: The unique identifier for the [MailChimp List](http://developer.mailchimp.com/documentation/mailchimp/reference/lists/) associated with the store. The `list_id` for a specific store cannot change.
    * name **required** `string`: The name of the store.
    * platform `string`: The e-commerce platform of the store.
    * domain `string`: The store domain.
    * is_syncing `boolean`: Whether the e-commerce store is currently [syncing](http://developer.mailchimp.com/documentation/mailchimp/guides/getting-started-with-ecommerce/#syncing-an-e-commerce-store).
    * email_address `string`: The email address for the store.
    * currency_code **required** `string`: The three-letter [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217#Active_codes) code for the currency that the store accepts.
    * money_format `string`: The currency format for the store. For example: `$`, `£`, etc.
    * primary_locale `string`: The primary locale for the store. For example: `en`, `de`, etc.
    * timezone `string`: The timezone for the store.
    * phone `string`: The store phone number.
    * address `object`: The store address.
      * address1 `string`: The store's mailing address.
      * address2 `string`: An additional field for the store's mailing address.
      * city `string`: The city the store is located in.
      * province `string`: The store's state name or normalized province.
      * province_code `string`: The two-letter code for the store's province or state.
      * postal_code `string`: The store's postal or zip code.
      * country `string`: The store's country.
      * country_code `string`: The two-letter code for to the store's country.
      * longitude `number`: The longitude of the store location.
      * latitude `number`: The latitude of the store location.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: An individual store in an account.
  * id `string`: The unique identifier for the store.
  * list_id `string`: The unique identifier for the [MailChimp List](http://developer.mailchimp.com/documentation/mailchimp/reference/lists/) that's associated with the store. The `list_id` for a specific store can't change.
  * name `string`: The name of the store.
  * platform `string`: The e-commerce platform of the store.
  * domain `string`: The store domain.
  * is_syncing `boolean`: Whether the e-commerce store is currently [syncing](http://developer.mailchimp.com/documentation/mailchimp/guides/getting-started-with-ecommerce/#syncing-an-e-commerce-store).
  * email_address `string`: The email address for the store.
  * currency_code `string`: The three-letter [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217#Active_codes) code for the currency that the store accepts.
  * money_format `string`: The currency format for the store. For example: `$`, `£`, etc.
  * primary_locale `string`: The primary locale for the store. For example: `en`, `de`, etc.
  * timezone `string`: The timezone for the store.
  * phone `string`: The store phone number.
  * address `object`: The store address.
    * address1 `string`: The store's mailing address.
    * address2 `string`: An additional field for the store's mailing address.
    * city `string`: The city the store is located in.
    * province `string`: The store's state name or normalized province.
    * province_code `string`: The two-letter code for the store's province or state.
    * postal_code `string`: The store's postal or zip code.
    * country `string`: The store's country.
    * country_code `string`: The two-letter code for to the store's country.
    * longitude `number`: The longitude of the store location.
    * latitude `number`: The latitude of the store location.
  * connected_site `object`: The Connected Site associated with the store.
    * site_foreign_id `string`: The unique identifier for the connected site.
    * site_script `object`: The script used to connect your site with MailChimp.
      * url `string`: The URL used for any integrations that offer built-in support for connected sites.
      * fragment `string`: A pre-built script that you can copy-and-paste into your site to integrate it with MailChimp.
  * created_at `string`: The date and time the store was created.
  * updated_at `string`: The date and time the store was last updated.
  * _links [HATEOASLinks](#hateoaslinks)

### getEcommerceStoresId
Get information about a specific store.


```js
mailchimp.getEcommerceStoresId({
  "store_id": ""
}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * store_id **required** `string`: The store id.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: An individual store in an account.
  * id `string`: The unique identifier for the store.
  * list_id `string`: The unique identifier for the [MailChimp List](http://developer.mailchimp.com/documentation/mailchimp/reference/lists/) that's associated with the store. The `list_id` for a specific store can't change.
  * name `string`: The name of the store.
  * platform `string`: The e-commerce platform of the store.
  * domain `string`: The store domain.
  * is_syncing `boolean`: Whether the e-commerce store is currently [syncing](http://developer.mailchimp.com/documentation/mailchimp/guides/getting-started-with-ecommerce/#syncing-an-e-commerce-store).
  * email_address `string`: The email address for the store.
  * currency_code `string`: The three-letter [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217#Active_codes) code for the currency that the store accepts.
  * money_format `string`: The currency format for the store. For example: `$`, `£`, etc.
  * primary_locale `string`: The primary locale for the store. For example: `en`, `de`, etc.
  * timezone `string`: The timezone for the store.
  * phone `string`: The store phone number.
  * address `object`: The store address.
    * address1 `string`: The store's mailing address.
    * address2 `string`: An additional field for the store's mailing address.
    * city `string`: The city the store is located in.
    * province `string`: The store's state name or normalized province.
    * province_code `string`: The two-letter code for the store's province or state.
    * postal_code `string`: The store's postal or zip code.
    * country `string`: The store's country.
    * country_code `string`: The two-letter code for to the store's country.
    * longitude `number`: The longitude of the store location.
    * latitude `number`: The latitude of the store location.
  * connected_site `object`: The Connected Site associated with the store.
    * site_foreign_id `string`: The unique identifier for the connected site.
    * site_script `object`: The script used to connect your site with MailChimp.
      * url `string`: The URL used for any integrations that offer built-in support for connected sites.
      * fragment `string`: A pre-built script that you can copy-and-paste into your site to integrate it with MailChimp.
  * created_at `string`: The date and time the store was created.
  * updated_at `string`: The date and time the store was last updated.
  * _links [HATEOASLinks](#hateoaslinks)

### patchEcommerceStoresId
Update a store.


```js
mailchimp.patchEcommerceStoresId({
  "store_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * store_id **required** `string`: The store id.
  * body **required** `object`: An individual store in an account.
    * id `string`: The unique identifier for the store.
    * list_id `string`: The unique identifier for the [MailChimp List](http://developer.mailchimp.com/documentation/mailchimp/reference/lists/) that's associated with the store. The `list_id` for a specific store can't change.
    * name `string`: The name of the store.
    * platform `string`: The e-commerce platform of the store.
    * domain `string`: The store domain.
    * is_syncing `boolean`: Whether the e-commerce store is currently [syncing](http://developer.mailchimp.com/documentation/mailchimp/guides/getting-started-with-ecommerce/#syncing-an-e-commerce-store).
    * email_address `string`: The email address for the store.
    * currency_code `string`: The three-letter [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217#Active_codes) code for the currency that the store accepts.
    * money_format `string`: The currency format for the store. For example: `$`, `£`, etc.
    * primary_locale `string`: The primary locale for the store. For example: `en`, `de`, etc.
    * timezone `string`: The timezone for the store.
    * phone `string`: The store phone number.
    * address `object`: The store address.
      * address1 `string`: The store's mailing address.
      * address2 `string`: An additional field for the store's mailing address.
      * city `string`: The city the store is located in.
      * province `string`: The store's state name or normalized province.
      * province_code `string`: The two-letter code for the store's province or state.
      * postal_code `string`: The store's postal or zip code.
      * country `string`: The store's country.
      * country_code `string`: The two-letter code for to the store's country.
      * longitude `number`: The longitude of the store location.
      * latitude `number`: The latitude of the store location.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: An individual store in an account.
  * id `string`: The unique identifier for the store.
  * list_id `string`: The unique identifier for the [MailChimp List](http://developer.mailchimp.com/documentation/mailchimp/reference/lists/) that's associated with the store. The `list_id` for a specific store can't change.
  * name `string`: The name of the store.
  * platform `string`: The e-commerce platform of the store.
  * domain `string`: The store domain.
  * is_syncing `boolean`: Whether the e-commerce store is currently [syncing](http://developer.mailchimp.com/documentation/mailchimp/guides/getting-started-with-ecommerce/#syncing-an-e-commerce-store).
  * email_address `string`: The email address for the store.
  * currency_code `string`: The three-letter [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217#Active_codes) code for the currency that the store accepts.
  * money_format `string`: The currency format for the store. For example: `$`, `£`, etc.
  * primary_locale `string`: The primary locale for the store. For example: `en`, `de`, etc.
  * timezone `string`: The timezone for the store.
  * phone `string`: The store phone number.
  * address `object`: The store address.
    * address1 `string`: The store's mailing address.
    * address2 `string`: An additional field for the store's mailing address.
    * city `string`: The city the store is located in.
    * province `string`: The store's state name or normalized province.
    * province_code `string`: The two-letter code for the store's province or state.
    * postal_code `string`: The store's postal or zip code.
    * country `string`: The store's country.
    * country_code `string`: The two-letter code for to the store's country.
    * longitude `number`: The longitude of the store location.
    * latitude `number`: The latitude of the store location.
  * connected_site `object`: The Connected Site associated with the store.
    * site_foreign_id `string`: The unique identifier for the connected site.
    * site_script `object`: The script used to connect your site with MailChimp.
      * url `string`: The URL used for any integrations that offer built-in support for connected sites.
      * fragment `string`: A pre-built script that you can copy-and-paste into your site to integrate it with MailChimp.
  * created_at `string`: The date and time the store was created.
  * updated_at `string`: The date and time the store was last updated.
  * _links [HATEOASLinks](#hateoaslinks)

### deleteEcommerceStoresId
Delete a store. Deleting a store will also delete any associated subresources, including Customers, Orders, Products, and Carts.


```js
mailchimp.deleteEcommerceStoresId({
  "store_id": ""
}, context)
```

#### Input
* input `object`
  * store_id **required** `string`: The store id.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
*Output schema unknown*

### getEcommerceStoresIdCarts
Get information about a store's carts.


```js
mailchimp.getEcommerceStoresIdCarts({
  "store_id": ""
}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * count `integer`: The number of records to return. [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **10**.
  * offset `integer`: The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **0**.
  * store_id **required** `string`: The store id.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: A collection of a store's carts.
  * store_id `string`: The store id.
  * carts `array`: An array of objects, each representing a cart.
    * items `object`: Information about a specific cart.
      * id `string`: A unique identifier for the cart.
      * customer `object`: Information about a specific customer. Orders for existing customers should include only the `id` parameter in the `customer` object body.
        * id `string`: A unique identifier for the customer.
        * email_address `string`: The customer's email address.
        * opt_in_status `boolean`: The customer's opt-in status. This value will never overwrite the opt-in status of a pre-existing MailChimp list member, but will apply to list members that are added through the e-commerce API endpoints. Customers who don't opt in to your MailChimp list [will be added as `Transactional` members](http://developer.mailchimp.com/documentation/mailchimp/guides/getting-started-with-ecommerce/#about-subscribers-and-customers).
        * company `string`: The customer's company.
        * first_name `string`: The customer's first name.
        * last_name `string`: The customer's last name.
        * orders_count `integer`: The customer's total order count. [Learn More](http://developer.mailchimp.com/documentation/mailchimp/guides/getting-started-with-ecommerce/#orders-count-and-total-spent) about using this data.
        * total_spent `number`: The total amount the customer has spent. [Learn More](http://developer.mailchimp.com/documentation/mailchimp/guides/getting-started-with-ecommerce/#orders-count-and-total-spent) about using this data.
        * address `object`: The customer's address.
          * address1 `string`: The mailing address of the customer.
          * address2 `string`: An additional field for the customer's mailing address.
          * city `string`: The city the customer is located in.
          * province `string`: The customer's state name or normalized province.
          * province_code `string`: The two-letter code for the customer's province or state.
          * postal_code `string`: The customer's postal or zip code.
          * country `string`: The customer's country.
          * country_code `string`: The two-letter code for the customer's country.
        * created_at `string`: The date and time the customer was created.
        * updated_at `string`: The date and time the customer was last updated.
        * _links [HATEOASLinks](#hateoaslinks)
      * campaign_id `string`: A string that uniquely identifies the campaign associated with a cart.
      * checkout_url `string`: The URL for the cart. This parameter is required for [Abandoned Cart](http://kb.mailchimp.com/automation/create-an-abandoned-cart-email) automations.
      * currency_code `string`: The three-letter [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217#Active_codes) code for the currency that the cart uses.
      * order_total `number`: The order total for the cart.
      * tax_total `number`: The total tax for the cart.
      * lines `array`: An array of the cart's line items.
        * items `object`: Information about a specific cart line item.
          * id `string`: A unique identifier for the cart line item.
          * product_id `string`: A unique identifier for the product associated with the cart line item.
          * product_title `string`: The name of the product for the cart line item.
          * product_variant_id `string`: A unique identifier for the product variant associated with the cart line item.
          * product_variant_title `string`: The name of the product variant for the cart line item.
          * quantity `integer`: The quantity of a cart line item.
          * price `number`: The price of a cart line item.
          * _links [HATEOASLinks](#hateoaslinks)
      * created_at `string`: The date and time the cart was created.
      * updated_at `string`: The date and time the cart was last updated.
      * _links [HATEOASLinks](#hateoaslinks)
  * total_items [CollectionTotal](#collectiontotal)
  * _links [HATEOASLinks](#hateoaslinks)

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

#### Input
* input `object`
  * store_id **required** `string`: The store id.
  * body **required** `object`: Information about a specific cart.
    * id **required** `string`: A unique identifier for the cart.
    * customer **required** `object`: Information about a specific customer. Carts for existing customers should include only the `id` parameter in the `customer` object body.
      * id **required** `string`: A unique identifier for the customer.
      * email_address **required** `string`: The customer's email address.
      * opt_in_status **required** `boolean`: The customer's opt-in status. This value will never overwrite the opt-in status of a pre-existing MailChimp list member, but will apply to list members that are added through the e-commerce API endpoints. Customers who don't opt in to your MailChimp list [will be added as `Transactional` members](http://developer.mailchimp.com/documentation/mailchimp/guides/getting-started-with-ecommerce/#about-subscribers-and-customers).
      * company `string`: The customer's company.
      * first_name `string`: The customer's first name.
      * last_name `string`: The customer's last name.
      * orders_count `integer`: The customer's total order count. [Learn More](http://developer.mailchimp.com/documentation/mailchimp/guides/getting-started-with-ecommerce/#orders-count-and-total-spent) about using this data.
      * total_spent `number`: The total amount the customer has spent. [Learn More](http://developer.mailchimp.com/documentation/mailchimp/guides/getting-started-with-ecommerce/#orders-count-and-total-spent) about using this data.
      * address `object`: The customer's address.
        * address1 `string`: The mailing address of the customer.
        * address2 `string`: An additional field for the customer's mailing address.
        * city `string`: The city the customer is located in.
        * province `string`: The customer's state name or normalized province.
        * province_code `string`: The two-letter code for the customer's province or state.
        * postal_code `string`: The customer's postal or zip code.
        * country `string`: The customer's country.
        * country_code `string`: The two-letter code for the customer's country.
    * campaign_id `string`: A string that uniquely identifies the campaign for a cart.
    * checkout_url `string`: The URL for the cart. This parameter is required for [Abandoned Cart](http://kb.mailchimp.com/automation/create-an-abandoned-cart-email) automations.
    * currency_code **required** `string`: The three-letter [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217#Active_codes) code for the currency that the cart uses.
    * order_total **required** `number`: The order total for the cart.
    * tax_total `number`: The total tax for the cart.
    * lines **required** `array`: An array of the cart's line items.
      * items `object`: Information about a specific cart line item.
        * id **required** `string`: A unique identifier for the cart line item.
        * product_id **required** `string`: A unique identifier for the product associated with the cart line item.
        * product_variant_id **required** `string`: A unique identifier for the product variant associated with the cart line item.
        * quantity **required** `integer`: The quantity of a cart line item.
        * price **required** `number`: The price of a cart line item.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: Information about a specific cart.
  * id `string`: A unique identifier for the cart.
  * customer `object`: Information about a specific customer. Orders for existing customers should include only the `id` parameter in the `customer` object body.
    * id `string`: A unique identifier for the customer.
    * email_address `string`: The customer's email address.
    * opt_in_status `boolean`: The customer's opt-in status. This value will never overwrite the opt-in status of a pre-existing MailChimp list member, but will apply to list members that are added through the e-commerce API endpoints. Customers who don't opt in to your MailChimp list [will be added as `Transactional` members](http://developer.mailchimp.com/documentation/mailchimp/guides/getting-started-with-ecommerce/#about-subscribers-and-customers).
    * company `string`: The customer's company.
    * first_name `string`: The customer's first name.
    * last_name `string`: The customer's last name.
    * orders_count `integer`: The customer's total order count. [Learn More](http://developer.mailchimp.com/documentation/mailchimp/guides/getting-started-with-ecommerce/#orders-count-and-total-spent) about using this data.
    * total_spent `number`: The total amount the customer has spent. [Learn More](http://developer.mailchimp.com/documentation/mailchimp/guides/getting-started-with-ecommerce/#orders-count-and-total-spent) about using this data.
    * address `object`: The customer's address.
      * address1 `string`: The mailing address of the customer.
      * address2 `string`: An additional field for the customer's mailing address.
      * city `string`: The city the customer is located in.
      * province `string`: The customer's state name or normalized province.
      * province_code `string`: The two-letter code for the customer's province or state.
      * postal_code `string`: The customer's postal or zip code.
      * country `string`: The customer's country.
      * country_code `string`: The two-letter code for the customer's country.
    * created_at `string`: The date and time the customer was created.
    * updated_at `string`: The date and time the customer was last updated.
    * _links [HATEOASLinks](#hateoaslinks)
  * campaign_id `string`: A string that uniquely identifies the campaign associated with a cart.
  * checkout_url `string`: The URL for the cart. This parameter is required for [Abandoned Cart](http://kb.mailchimp.com/automation/create-an-abandoned-cart-email) automations.
  * currency_code `string`: The three-letter [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217#Active_codes) code for the currency that the cart uses.
  * order_total `number`: The order total for the cart.
  * tax_total `number`: The total tax for the cart.
  * lines `array`: An array of the cart's line items.
    * items `object`: Information about a specific cart line item.
      * id `string`: A unique identifier for the cart line item.
      * product_id `string`: A unique identifier for the product associated with the cart line item.
      * product_title `string`: The name of the product for the cart line item.
      * product_variant_id `string`: A unique identifier for the product variant associated with the cart line item.
      * product_variant_title `string`: The name of the product variant for the cart line item.
      * quantity `integer`: The quantity of a cart line item.
      * price `number`: The price of a cart line item.
      * _links [HATEOASLinks](#hateoaslinks)
  * created_at `string`: The date and time the cart was created.
  * updated_at `string`: The date and time the cart was last updated.
  * _links [HATEOASLinks](#hateoaslinks)

### getEcommerceStoresIdCartsId
Get information about a specific cart.


```js
mailchimp.getEcommerceStoresIdCartsId({
  "store_id": "",
  "cart_id": ""
}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * store_id **required** `string`: The store id.
  * cart_id **required** `string`: The id for the cart.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: Information about a specific cart.
  * id `string`: A unique identifier for the cart.
  * customer `object`: Information about a specific customer. Orders for existing customers should include only the `id` parameter in the `customer` object body.
    * id `string`: A unique identifier for the customer.
    * email_address `string`: The customer's email address.
    * opt_in_status `boolean`: The customer's opt-in status. This value will never overwrite the opt-in status of a pre-existing MailChimp list member, but will apply to list members that are added through the e-commerce API endpoints. Customers who don't opt in to your MailChimp list [will be added as `Transactional` members](http://developer.mailchimp.com/documentation/mailchimp/guides/getting-started-with-ecommerce/#about-subscribers-and-customers).
    * company `string`: The customer's company.
    * first_name `string`: The customer's first name.
    * last_name `string`: The customer's last name.
    * orders_count `integer`: The customer's total order count. [Learn More](http://developer.mailchimp.com/documentation/mailchimp/guides/getting-started-with-ecommerce/#orders-count-and-total-spent) about using this data.
    * total_spent `number`: The total amount the customer has spent. [Learn More](http://developer.mailchimp.com/documentation/mailchimp/guides/getting-started-with-ecommerce/#orders-count-and-total-spent) about using this data.
    * address `object`: The customer's address.
      * address1 `string`: The mailing address of the customer.
      * address2 `string`: An additional field for the customer's mailing address.
      * city `string`: The city the customer is located in.
      * province `string`: The customer's state name or normalized province.
      * province_code `string`: The two-letter code for the customer's province or state.
      * postal_code `string`: The customer's postal or zip code.
      * country `string`: The customer's country.
      * country_code `string`: The two-letter code for the customer's country.
    * created_at `string`: The date and time the customer was created.
    * updated_at `string`: The date and time the customer was last updated.
    * _links [HATEOASLinks](#hateoaslinks)
  * campaign_id `string`: A string that uniquely identifies the campaign associated with a cart.
  * checkout_url `string`: The URL for the cart. This parameter is required for [Abandoned Cart](http://kb.mailchimp.com/automation/create-an-abandoned-cart-email) automations.
  * currency_code `string`: The three-letter [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217#Active_codes) code for the currency that the cart uses.
  * order_total `number`: The order total for the cart.
  * tax_total `number`: The total tax for the cart.
  * lines `array`: An array of the cart's line items.
    * items `object`: Information about a specific cart line item.
      * id `string`: A unique identifier for the cart line item.
      * product_id `string`: A unique identifier for the product associated with the cart line item.
      * product_title `string`: The name of the product for the cart line item.
      * product_variant_id `string`: A unique identifier for the product variant associated with the cart line item.
      * product_variant_title `string`: The name of the product variant for the cart line item.
      * quantity `integer`: The quantity of a cart line item.
      * price `number`: The price of a cart line item.
      * _links [HATEOASLinks](#hateoaslinks)
  * created_at `string`: The date and time the cart was created.
  * updated_at `string`: The date and time the cart was last updated.
  * _links [HATEOASLinks](#hateoaslinks)

### patchEcommerceStoresIdCartsId
Update a specific cart.


```js
mailchimp.patchEcommerceStoresIdCartsId({
  "store_id": "",
  "cart_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * store_id **required** `string`: The store id.
  * cart_id **required** `string`: The id for the cart.
  * body **required** `object`: Information about a specific cart.
    * customer `object`: Information about a specific customer. Orders for existing customers should include only the `id` parameter in the `customer` object body.
      * email_address `string`: The customer's email address.
      * opt_in_status `boolean`: The customer's opt-in status. This value will never overwrite the opt-in status of a pre-existing MailChimp list member, but will apply to list members that are added through the e-commerce API endpoints. Customers who don't opt in to your MailChimp list [will be added as `Transactional` members](http://developer.mailchimp.com/documentation/mailchimp/guides/getting-started-with-ecommerce/#about-subscribers-and-customers).
      * company `string`: The customer's company.
      * first_name `string`: The customer's first name.
      * last_name `string`: The customer's last name.
      * orders_count `integer`: The customer's total order count. [Learn More](http://developer.mailchimp.com/documentation/mailchimp/guides/getting-started-with-ecommerce/#orders-count-and-total-spent) about using this data.
      * total_spent `number`: The total amount the customer has spent. [Learn More](http://developer.mailchimp.com/documentation/mailchimp/guides/getting-started-with-ecommerce/#orders-count-and-total-spent) about using this data.
      * address `object`: The customer's address.
        * address1 `string`: The mailing address of the customer.
        * address2 `string`: An additional field for the customer's mailing address.
        * city `string`: The city the customer is located in.
        * province `string`: The customer's state name or normalized province.
        * province_code `string`: The two-letter code for the customer's province or state.
        * postal_code `string`: The customer's postal or zip code.
        * country `string`: The customer's country.
        * country_code `string`: The two-letter code for the customer's country.
    * campaign_id `string`: A string that uniquely identifies the campaign associated with a cart.
    * checkout_url `string`: The URL for the cart. This parameter is required for [Abandoned Cart](http://kb.mailchimp.com/automation/create-an-abandoned-cart-email) automations.
    * currency_code `string`: The three-letter [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217#Active_codes) code for the currency that the cart uses.
    * order_total `number`: The order total for the cart.
    * tax_total `number`: The total tax for the cart.
    * lines `array`: An array of the cart's line items.
      * items `object`: Information about a specific cart line item.
        * product_id `string`: A unique identifier for the product associated with the cart line item.
        * product_variant_id `string`: A unique identifier for the product variant associated with the cart line item.
        * quantity `integer`: The quantity of a cart line item.
        * price `number`: The price of a cart line item.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: Information about a specific cart.
  * id `string`: A unique identifier for the cart.
  * customer `object`: Information about a specific customer. Orders for existing customers should include only the `id` parameter in the `customer` object body.
    * id `string`: A unique identifier for the customer.
    * email_address `string`: The customer's email address.
    * opt_in_status `boolean`: The customer's opt-in status. This value will never overwrite the opt-in status of a pre-existing MailChimp list member, but will apply to list members that are added through the e-commerce API endpoints. Customers who don't opt in to your MailChimp list [will be added as `Transactional` members](http://developer.mailchimp.com/documentation/mailchimp/guides/getting-started-with-ecommerce/#about-subscribers-and-customers).
    * company `string`: The customer's company.
    * first_name `string`: The customer's first name.
    * last_name `string`: The customer's last name.
    * orders_count `integer`: The customer's total order count. [Learn More](http://developer.mailchimp.com/documentation/mailchimp/guides/getting-started-with-ecommerce/#orders-count-and-total-spent) about using this data.
    * total_spent `number`: The total amount the customer has spent. [Learn More](http://developer.mailchimp.com/documentation/mailchimp/guides/getting-started-with-ecommerce/#orders-count-and-total-spent) about using this data.
    * address `object`: The customer's address.
      * address1 `string`: The mailing address of the customer.
      * address2 `string`: An additional field for the customer's mailing address.
      * city `string`: The city the customer is located in.
      * province `string`: The customer's state name or normalized province.
      * province_code `string`: The two-letter code for the customer's province or state.
      * postal_code `string`: The customer's postal or zip code.
      * country `string`: The customer's country.
      * country_code `string`: The two-letter code for the customer's country.
    * created_at `string`: The date and time the customer was created.
    * updated_at `string`: The date and time the customer was last updated.
    * _links [HATEOASLinks](#hateoaslinks)
  * campaign_id `string`: A string that uniquely identifies the campaign associated with a cart.
  * checkout_url `string`: The URL for the cart. This parameter is required for [Abandoned Cart](http://kb.mailchimp.com/automation/create-an-abandoned-cart-email) automations.
  * currency_code `string`: The three-letter [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217#Active_codes) code for the currency that the cart uses.
  * order_total `number`: The order total for the cart.
  * tax_total `number`: The total tax for the cart.
  * lines `array`: An array of the cart's line items.
    * items `object`: Information about a specific cart line item.
      * id `string`: A unique identifier for the cart line item.
      * product_id `string`: A unique identifier for the product associated with the cart line item.
      * product_title `string`: The name of the product for the cart line item.
      * product_variant_id `string`: A unique identifier for the product variant associated with the cart line item.
      * product_variant_title `string`: The name of the product variant for the cart line item.
      * quantity `integer`: The quantity of a cart line item.
      * price `number`: The price of a cart line item.
      * _links [HATEOASLinks](#hateoaslinks)
  * created_at `string`: The date and time the cart was created.
  * updated_at `string`: The date and time the cart was last updated.
  * _links [HATEOASLinks](#hateoaslinks)

### deleteEcommerceStoresIdCartsId
Delete a cart.


```js
mailchimp.deleteEcommerceStoresIdCartsId({
  "store_id": "",
  "cart_id": ""
}, context)
```

#### Input
* input `object`
  * store_id **required** `string`: The store id.
  * cart_id **required** `string`: The id for the cart.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
*Output schema unknown*

### getEcommerceStoresIdCartsIdLines
Get information about a cart's line items.


```js
mailchimp.getEcommerceStoresIdCartsIdLines({
  "store_id": "",
  "cart_id": ""
}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * count `integer`: The number of records to return. [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **10**.
  * offset `integer`: The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **0**.
  * store_id **required** `string`: The store id.
  * cart_id **required** `string`: The id for the cart.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: A collection of a cart's line items.
  * store_id `string`: The store id.
  * cart_id `string`: The cart id.
  * lines `array`: An array of objects, each representing a cart's line item.
    * items `object`: Information about a specific cart line item.
      * id `string`: A unique identifier for the cart line item.
      * product_id `string`: A unique identifier for the product associated with the cart line item.
      * product_title `string`: The name of the product for the cart line item.
      * product_variant_id `string`: A unique identifier for the product variant associated with the cart line item.
      * product_variant_title `string`: The name of the product variant for the cart line item.
      * quantity `integer`: The quantity of a cart line item.
      * price `number`: The price of a cart line item.
      * _links [HATEOASLinks](#hateoaslinks)
  * total_items [CollectionTotal](#collectiontotal)
  * _links [HATEOASLinks](#hateoaslinks)

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

#### Input
* input `object`
  * store_id **required** `string`: The store id.
  * cart_id **required** `string`: The id for the cart.
  * body **required** `object`: Information about a specific cart line item.
    * id **required** `string`: A unique identifier for the cart line item.
    * product_id **required** `string`: A unique identifier for the product associated with the cart line item.
    * product_variant_id **required** `string`: A unique identifier for the product variant associated with the cart line item.
    * quantity **required** `integer`: The quantity of a cart line item.
    * price **required** `number`: The price of a cart line item.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: Information about a specific cart line item.
  * id `string`: A unique identifier for the cart line item.
  * product_id `string`: A unique identifier for the product associated with the cart line item.
  * product_title `string`: The name of the product for the cart line item.
  * product_variant_id `string`: A unique identifier for the product variant associated with the cart line item.
  * product_variant_title `string`: The name of the product variant for the cart line item.
  * quantity `integer`: The quantity of a cart line item.
  * price `number`: The price of a cart line item.
  * _links [HATEOASLinks](#hateoaslinks)

### getEcommerceStoresIdCartsIdLinesId
Get information about a specific cart line item.


```js
mailchimp.getEcommerceStoresIdCartsIdLinesId({
  "store_id": "",
  "cart_id": "",
  "line_id": ""
}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * store_id **required** `string`: The store id.
  * cart_id **required** `string`: The id for the cart.
  * line_id **required** `string`: The id for the line item of a cart.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: Information about a specific cart line item.
  * id `string`: A unique identifier for the cart line item.
  * product_id `string`: A unique identifier for the product associated with the cart line item.
  * product_title `string`: The name of the product for the cart line item.
  * product_variant_id `string`: A unique identifier for the product variant associated with the cart line item.
  * product_variant_title `string`: The name of the product variant for the cart line item.
  * quantity `integer`: The quantity of a cart line item.
  * price `number`: The price of a cart line item.
  * _links [HATEOASLinks](#hateoaslinks)

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

#### Input
* input `object`
  * store_id **required** `string`: The store id.
  * cart_id **required** `string`: The id for the cart.
  * line_id **required** `string`: The id for the line item of a cart.
  * body **required** `object`: Information about a specific cart line item.
    * product_id `string`: A unique identifier for the product associated with the cart line item.
    * product_variant_id `string`: A unique identifier for the product variant associated with the cart line item.
    * quantity `integer`: The quantity of a cart line item.
    * price `number`: The price of a cart line item.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: Information about a specific cart line item.
  * id `string`: A unique identifier for the cart line item.
  * product_id `string`: A unique identifier for the product associated with the cart line item.
  * product_title `string`: The name of the product for the cart line item.
  * product_variant_id `string`: A unique identifier for the product variant associated with the cart line item.
  * product_variant_title `string`: The name of the product variant for the cart line item.
  * quantity `integer`: The quantity of a cart line item.
  * price `number`: The price of a cart line item.
  * _links [HATEOASLinks](#hateoaslinks)

### deleteEcommerceStoresIdCartsLinesId
Delete a specific cart line item.


```js
mailchimp.deleteEcommerceStoresIdCartsLinesId({
  "store_id": "",
  "cart_id": "",
  "line_id": ""
}, context)
```

#### Input
* input `object`
  * store_id **required** `string`: The store id.
  * cart_id **required** `string`: The id for the cart.
  * line_id **required** `string`: The id for the line item of a cart.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
*Output schema unknown*

### getEcommerceStoresIdCustomers
Get information about a store's customers.


```js
mailchimp.getEcommerceStoresIdCustomers({
  "store_id": ""
}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * count `integer`: The number of records to return. [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **10**.
  * offset `integer`: The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **0**.
  * store_id **required** `string`: The store id.
  * email_address `string`: Restrict the response to customers with the email address.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: A collection of the store's customers.
  * store_id `string`: The store id.
  * customers `array`: An array of objects, each representing a customer of a store.
    * items `object`: Information about a specific customer. Orders for existing customers should include only the `id` parameter in the `customer` object body.
      * id `string`: A unique identifier for the customer.
      * email_address `string`: The customer's email address.
      * opt_in_status `boolean`: The customer's opt-in status. This value will never overwrite the opt-in status of a pre-existing MailChimp list member, but will apply to list members that are added through the e-commerce API endpoints. Customers who don't opt in to your MailChimp list [will be added as `Transactional` members](http://developer.mailchimp.com/documentation/mailchimp/guides/getting-started-with-ecommerce/#about-subscribers-and-customers).
      * company `string`: The customer's company.
      * first_name `string`: The customer's first name.
      * last_name `string`: The customer's last name.
      * orders_count `integer`: The customer's total order count. [Learn More](http://developer.mailchimp.com/documentation/mailchimp/guides/getting-started-with-ecommerce/#orders-count-and-total-spent) about using this data.
      * total_spent `number`: The total amount the customer has spent. [Learn More](http://developer.mailchimp.com/documentation/mailchimp/guides/getting-started-with-ecommerce/#orders-count-and-total-spent) about using this data.
      * address `object`: The customer's address.
        * address1 `string`: The mailing address of the customer.
        * address2 `string`: An additional field for the customer's mailing address.
        * city `string`: The city the customer is located in.
        * province `string`: The customer's state name or normalized province.
        * province_code `string`: The two-letter code for the customer's province or state.
        * postal_code `string`: The customer's postal or zip code.
        * country `string`: The customer's country.
        * country_code `string`: The two-letter code for the customer's country.
      * created_at `string`: The date and time the customer was created.
      * updated_at `string`: The date and time the customer was last updated.
      * _links [HATEOASLinks](#hateoaslinks)
  * total_items [CollectionTotal](#collectiontotal)
  * _links [HATEOASLinks](#hateoaslinks)

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

#### Input
* input `object`
  * store_id **required** `string`: The store id.
  * body **required** `object`: Information about a specific customer. Orders for existing customers should include only the `id` parameter in the `customer` object body.
    * id **required** `string`: A unique identifier for the customer.
    * email_address **required** `string`: The customer's email address.
    * opt_in_status **required** `boolean`: The customer's opt-in status. This value will never overwrite the opt-in status of a pre-existing MailChimp list member, but will apply to list members that are added through the e-commerce API endpoints. Customers who don't opt in to your MailChimp list [will be added as `Transactional` members](http://developer.mailchimp.com/documentation/mailchimp/guides/getting-started-with-ecommerce/#about-subscribers-and-customers).
    * company `string`: The customer's company.
    * first_name `string`: The customer's first name.
    * last_name `string`: The customer's last name.
    * orders_count `integer`: The customer's total order count. [Learn More](http://developer.mailchimp.com/documentation/mailchimp/guides/getting-started-with-ecommerce/#orders-count-and-total-spent) about using this data.
    * total_spent `number`: The total amount the customer has spent. [Learn More](http://developer.mailchimp.com/documentation/mailchimp/guides/getting-started-with-ecommerce/#orders-count-and-total-spent) about using this data.
    * address `object`: The customer's address.
      * address1 `string`: The mailing address of the customer.
      * address2 `string`: An additional field for the customer's mailing address.
      * city `string`: The city the customer is located in.
      * province `string`: The customer's state name or normalized province.
      * province_code `string`: The two-letter code for the customer's province or state.
      * postal_code `string`: The customer's postal or zip code.
      * country `string`: The customer's country.
      * country_code `string`: The two-letter code for the customer's country.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: Information about a specific customer. Orders for existing customers should include only the `id` parameter in the `customer` object body.
  * id `string`: A unique identifier for the customer.
  * email_address `string`: The customer's email address.
  * opt_in_status `boolean`: The customer's opt-in status. This value will never overwrite the opt-in status of a pre-existing MailChimp list member, but will apply to list members that are added through the e-commerce API endpoints. Customers who don't opt in to your MailChimp list [will be added as `Transactional` members](http://developer.mailchimp.com/documentation/mailchimp/guides/getting-started-with-ecommerce/#about-subscribers-and-customers).
  * company `string`: The customer's company.
  * first_name `string`: The customer's first name.
  * last_name `string`: The customer's last name.
  * orders_count `integer`: The customer's total order count. [Learn More](http://developer.mailchimp.com/documentation/mailchimp/guides/getting-started-with-ecommerce/#orders-count-and-total-spent) about using this data.
  * total_spent `number`: The total amount the customer has spent. [Learn More](http://developer.mailchimp.com/documentation/mailchimp/guides/getting-started-with-ecommerce/#orders-count-and-total-spent) about using this data.
  * address `object`: The customer's address.
    * address1 `string`: The mailing address of the customer.
    * address2 `string`: An additional field for the customer's mailing address.
    * city `string`: The city the customer is located in.
    * province `string`: The customer's state name or normalized province.
    * province_code `string`: The two-letter code for the customer's province or state.
    * postal_code `string`: The customer's postal or zip code.
    * country `string`: The customer's country.
    * country_code `string`: The two-letter code for the customer's country.
  * created_at `string`: The date and time the customer was created.
  * updated_at `string`: The date and time the customer was last updated.
  * _links [HATEOASLinks](#hateoaslinks)

### getEcommerceStoresIdCustomersId
Get information about a specific customer.


```js
mailchimp.getEcommerceStoresIdCustomersId({
  "store_id": "",
  "customer_id": ""
}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * store_id **required** `string`: The store id.
  * customer_id **required** `string`: The id for the customer of a store.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: Information about a specific customer. Orders for existing customers should include only the `id` parameter in the `customer` object body.
  * id `string`: A unique identifier for the customer.
  * email_address `string`: The customer's email address.
  * opt_in_status `boolean`: The customer's opt-in status. This value will never overwrite the opt-in status of a pre-existing MailChimp list member, but will apply to list members that are added through the e-commerce API endpoints. Customers who don't opt in to your MailChimp list [will be added as `Transactional` members](http://developer.mailchimp.com/documentation/mailchimp/guides/getting-started-with-ecommerce/#about-subscribers-and-customers).
  * company `string`: The customer's company.
  * first_name `string`: The customer's first name.
  * last_name `string`: The customer's last name.
  * orders_count `integer`: The customer's total order count. [Learn More](http://developer.mailchimp.com/documentation/mailchimp/guides/getting-started-with-ecommerce/#orders-count-and-total-spent) about using this data.
  * total_spent `number`: The total amount the customer has spent. [Learn More](http://developer.mailchimp.com/documentation/mailchimp/guides/getting-started-with-ecommerce/#orders-count-and-total-spent) about using this data.
  * address `object`: The customer's address.
    * address1 `string`: The mailing address of the customer.
    * address2 `string`: An additional field for the customer's mailing address.
    * city `string`: The city the customer is located in.
    * province `string`: The customer's state name or normalized province.
    * province_code `string`: The two-letter code for the customer's province or state.
    * postal_code `string`: The customer's postal or zip code.
    * country `string`: The customer's country.
    * country_code `string`: The two-letter code for the customer's country.
  * created_at `string`: The date and time the customer was created.
  * updated_at `string`: The date and time the customer was last updated.
  * _links [HATEOASLinks](#hateoaslinks)

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

#### Input
* input `object`
  * store_id **required** `string`: The store id.
  * customer_id **required** `string`: The id for the customer of a store.
  * body **required** `object`: Information about a specific customer. Orders for existing customers should include only the `id` parameter in the `customer` object body.
    * id **required** `string`: A unique identifier for the customer.
    * email_address **required** `string`: The customer's email address.
    * opt_in_status **required** `boolean`: The customer's opt-in status. This value will never overwrite the opt-in status of a pre-existing MailChimp list member, but will apply to list members that are added through the e-commerce API endpoints. Customers who don't opt in to your MailChimp list [will be added as `Transactional` members](http://developer.mailchimp.com/documentation/mailchimp/guides/getting-started-with-ecommerce/#about-subscribers-and-customers).
    * company `string`: The customer's company.
    * first_name `string`: The customer's first name.
    * last_name `string`: The customer's last name.
    * orders_count `integer`: The customer's total order count. [Learn More](http://developer.mailchimp.com/documentation/mailchimp/guides/getting-started-with-ecommerce/#orders-count-and-total-spent) about using this data.
    * total_spent `number`: The total amount the customer has spent. [Learn More](http://developer.mailchimp.com/documentation/mailchimp/guides/getting-started-with-ecommerce/#orders-count-and-total-spent) about using this data.
    * address `object`: The customer's address.
      * address1 `string`: The mailing address of the customer.
      * address2 `string`: An additional field for the customer's mailing address.
      * city `string`: The city the customer is located in.
      * province `string`: The customer's state name or normalized province.
      * province_code `string`: The two-letter code for the customer's province or state.
      * postal_code `string`: The customer's postal or zip code.
      * country `string`: The customer's country.
      * country_code `string`: The two-letter code for the customer's country.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: Information about a specific customer. Orders for existing customers should include only the `id` parameter in the `customer` object body.
  * id `string`: A unique identifier for the customer.
  * email_address `string`: The customer's email address.
  * opt_in_status `boolean`: The customer's opt-in status. This value will never overwrite the opt-in status of a pre-existing MailChimp list member, but will apply to list members that are added through the e-commerce API endpoints. Customers who don't opt in to your MailChimp list [will be added as `Transactional` members](http://developer.mailchimp.com/documentation/mailchimp/guides/getting-started-with-ecommerce/#about-subscribers-and-customers).
  * company `string`: The customer's company.
  * first_name `string`: The customer's first name.
  * last_name `string`: The customer's last name.
  * orders_count `integer`: The customer's total order count. [Learn More](http://developer.mailchimp.com/documentation/mailchimp/guides/getting-started-with-ecommerce/#orders-count-and-total-spent) about using this data.
  * total_spent `number`: The total amount the customer has spent. [Learn More](http://developer.mailchimp.com/documentation/mailchimp/guides/getting-started-with-ecommerce/#orders-count-and-total-spent) about using this data.
  * address `object`: The customer's address.
    * address1 `string`: The mailing address of the customer.
    * address2 `string`: An additional field for the customer's mailing address.
    * city `string`: The city the customer is located in.
    * province `string`: The customer's state name or normalized province.
    * province_code `string`: The two-letter code for the customer's province or state.
    * postal_code `string`: The customer's postal or zip code.
    * country `string`: The customer's country.
    * country_code `string`: The two-letter code for the customer's country.
  * created_at `string`: The date and time the customer was created.
  * updated_at `string`: The date and time the customer was last updated.
  * _links [HATEOASLinks](#hateoaslinks)

### patchEcommerceStoresIdCustomersId
Update a customer.


```js
mailchimp.patchEcommerceStoresIdCustomersId({
  "store_id": "",
  "customer_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * store_id **required** `string`: The store id.
  * customer_id **required** `string`: The id for the customer of a store.
  * body **required** `object`: Information about a specific customer. Orders for existing customers should include only the `id` parameter in the `customer` object body.
    * email_address `string`: The customer's email address.
    * opt_in_status `boolean`: The customer's opt-in status. This value will never overwrite the opt-in status of a pre-existing MailChimp list member, but will apply to list members that are added through the e-commerce API endpoints. Customers who don't opt in to your MailChimp list [will be added as `Transactional` members](http://developer.mailchimp.com/documentation/mailchimp/guides/getting-started-with-ecommerce/#about-subscribers-and-customers).
    * company `string`: The customer's company.
    * first_name `string`: The customer's first name.
    * last_name `string`: The customer's last name.
    * orders_count `integer`: The customer's total order count. [Learn More](http://developer.mailchimp.com/documentation/mailchimp/guides/getting-started-with-ecommerce/#orders-count-and-total-spent) about using this data.
    * total_spent `number`: The total amount the customer has spent. [Learn More](http://developer.mailchimp.com/documentation/mailchimp/guides/getting-started-with-ecommerce/#orders-count-and-total-spent) about using this data.
    * address `object`: The customer's address.
      * address1 `string`: The mailing address of the customer.
      * address2 `string`: An additional field for the customer's mailing address.
      * city `string`: The city the customer is located in.
      * province `string`: The customer's state name or normalized province.
      * province_code `string`: The two-letter code for the customer's province or state.
      * postal_code `string`: The customer's postal or zip code.
      * country `string`: The customer's country.
      * country_code `string`: The two-letter code for the customer's country.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: Information about a specific customer. Orders for existing customers should include only the `id` parameter in the `customer` object body.
  * id `string`: A unique identifier for the customer.
  * email_address `string`: The customer's email address.
  * opt_in_status `boolean`: The customer's opt-in status. This value will never overwrite the opt-in status of a pre-existing MailChimp list member, but will apply to list members that are added through the e-commerce API endpoints. Customers who don't opt in to your MailChimp list [will be added as `Transactional` members](http://developer.mailchimp.com/documentation/mailchimp/guides/getting-started-with-ecommerce/#about-subscribers-and-customers).
  * company `string`: The customer's company.
  * first_name `string`: The customer's first name.
  * last_name `string`: The customer's last name.
  * orders_count `integer`: The customer's total order count. [Learn More](http://developer.mailchimp.com/documentation/mailchimp/guides/getting-started-with-ecommerce/#orders-count-and-total-spent) about using this data.
  * total_spent `number`: The total amount the customer has spent. [Learn More](http://developer.mailchimp.com/documentation/mailchimp/guides/getting-started-with-ecommerce/#orders-count-and-total-spent) about using this data.
  * address `object`: The customer's address.
    * address1 `string`: The mailing address of the customer.
    * address2 `string`: An additional field for the customer's mailing address.
    * city `string`: The city the customer is located in.
    * province `string`: The customer's state name or normalized province.
    * province_code `string`: The two-letter code for the customer's province or state.
    * postal_code `string`: The customer's postal or zip code.
    * country `string`: The customer's country.
    * country_code `string`: The two-letter code for the customer's country.
  * created_at `string`: The date and time the customer was created.
  * updated_at `string`: The date and time the customer was last updated.
  * _links [HATEOASLinks](#hateoaslinks)

### deleteEcommerceStoresIdCustomersId
Delete a customer from a store.


```js
mailchimp.deleteEcommerceStoresIdCustomersId({
  "store_id": "",
  "customer_id": ""
}, context)
```

#### Input
* input `object`
  * store_id **required** `string`: The store id.
  * customer_id **required** `string`: The id for the customer of a store.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
*Output schema unknown*

### getEcommerceStoresIdPromorules
Get information about a store's promo rules.


```js
mailchimp.getEcommerceStoresIdPromorules({
  "store_id": ""
}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * count `integer`: The number of records to return. [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **10**.
  * offset `integer`: The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **0**.
  * store_id **required** `string`: The store id.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: A collection of the store's promo rules.
  * store_id `string`: The store id.
  * promo_rules `array`: An array of objects, each representing promo rules defined for a store.
    * items `object`: Information about an Ecommerce Store's specific Promo Rule
      * id `string`: A unique identifier for the promo rule. If Ecommerce platform does not support promo rule, use promo code id as promo rule id. Restricted to UTF-8 characters with max length 50.
      * title `string`: The title that will show up in promotion campaign. Restricted to UTF-8 characters with max length 100.
      * description `string`: The description of a promotion restricted to UTF-8 characters with max length 255.
      * starts_at `string`: The date and time when the promotion is in effect in ISO 8601 format.
      * ends_at `string`: The date and time when the promotion ends. Must be after starts_at and in ISO 8601 format.
      * amount `number`: The amount of the promo code discount. If 'type' is 'fixed', the amount is treated as a monetary value. If 'type' is 'percentage', amount must be a decimal value between 0.0 and 1.0, inclusive.
      * type `string` (values: fixed, percentage): Type of discount. For free shipping set type to fixed.
      * target `string` (values: per_item, total, shipping): The target that the discount applies to.
      * enabled `boolean`: Whether the promo rule is currently enabled.
      * created_at_foreign `string`: The date and time the promotion was created in ISO 8601 format.
      * updated_at_foreign `string`: The date and time the promotion was updated in ISO 8601 format.
      * _links [HATEOASLinks](#hateoaslinks)
  * total_items [CollectionTotal](#collectiontotal)
  * _links [HATEOASLinks](#hateoaslinks)

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

#### Input
* input `object`
  * store_id **required** `string`: The store id.
  * body **required** `object`: Information about an Ecommerce Store's specific Promo Rule.
    * id **required** `string`: A unique identifier for the promo rule. If Ecommerce platform does not support promo rule, use promo code id as promo rule id. Restricted to UTF-8 characters with max length 50.
    * title `string`: The title that will show up in promotion campaign. Restricted to UTF-8 characters with max length 100.
    * description **required** `string`: The description of a promotion restricted to UTF-8 characters with max length 255.
    * starts_at `string`: The date and time when the promotion is in effect in ISO 8601 format.
    * ends_at `string`: The date and time when the promotion ends. Must be after starts_at and in ISO 8601 format.
    * amount **required** `number`: The amount of the promo code discount. If 'type' is 'fixed', the amount is treated as a monetary value. If 'type' is 'percentage', amount must be a decimal value between 0.0 and 1.0, inclusive.
    * type **required** `string` (values: fixed, percentage): Type of discount. For free shipping set type to fixed.
    * target **required** `string` (values: per_item, total, shipping): The target that the discount applies to.
    * enabled `boolean`: Whether the promo rule is currently enabled.
    * created_at_foreign `string`: The date and time the promotion was created in ISO 8601 format.
    * updated_at_foreign `string`: The date and time the promotion was updated in ISO 8601 format.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: Information about an Ecommerce Store's specific Promo Rule
  * id `string`: A unique identifier for the promo rule. If Ecommerce platform does not support promo rule, use promo code id as promo rule id. Restricted to UTF-8 characters with max length 50.
  * title `string`: The title that will show up in promotion campaign. Restricted to UTF-8 characters with max length 100.
  * description `string`: The description of a promotion restricted to UTF-8 characters with max length 255.
  * starts_at `string`: The date and time when the promotion is in effect in ISO 8601 format.
  * ends_at `string`: The date and time when the promotion ends. Must be after starts_at and in ISO 8601 format.
  * amount `number`: The amount of the promo code discount. If 'type' is 'fixed', the amount is treated as a monetary value. If 'type' is 'percentage', amount must be a decimal value between 0.0 and 1.0, inclusive.
  * type `string` (values: fixed, percentage): Type of discount. For free shipping set type to fixed.
  * target `string` (values: per_item, total, shipping): The target that the discount applies to.
  * enabled `boolean`: Whether the promo rule is currently enabled.
  * created_at_foreign `string`: The date and time the promotion was created in ISO 8601 format.
  * updated_at_foreign `string`: The date and time the promotion was updated in ISO 8601 format.
  * _links [HATEOASLinks](#hateoaslinks)

### getEcommerceStoresIdPromorulesId
Get information about a specific promo rule.


```js
mailchimp.getEcommerceStoresIdPromorulesId({
  "store_id": "",
  "promo_rule_id": ""
}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * store_id **required** `string`: The store id.
  * promo_rule_id **required** `string`: The id for the promo rule of a store.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: Information about an Ecommerce Store's specific Promo Rule
  * id `string`: A unique identifier for the promo rule. If Ecommerce platform does not support promo rule, use promo code id as promo rule id. Restricted to UTF-8 characters with max length 50.
  * title `string`: The title that will show up in promotion campaign. Restricted to UTF-8 characters with max length 100.
  * description `string`: The description of a promotion restricted to UTF-8 characters with max length 255.
  * starts_at `string`: The date and time when the promotion is in effect in ISO 8601 format.
  * ends_at `string`: The date and time when the promotion ends. Must be after starts_at and in ISO 8601 format.
  * amount `number`: The amount of the promo code discount. If 'type' is 'fixed', the amount is treated as a monetary value. If 'type' is 'percentage', amount must be a decimal value between 0.0 and 1.0, inclusive.
  * type `string` (values: fixed, percentage): Type of discount. For free shipping set type to fixed.
  * target `string` (values: per_item, total, shipping): The target that the discount applies to.
  * enabled `boolean`: Whether the promo rule is currently enabled.
  * created_at_foreign `string`: The date and time the promotion was created in ISO 8601 format.
  * updated_at_foreign `string`: The date and time the promotion was updated in ISO 8601 format.
  * _links [HATEOASLinks](#hateoaslinks)

### patchEcommerceStoresIdPromorulesId
Update a promo rule.


```js
mailchimp.patchEcommerceStoresIdPromorulesId({
  "store_id": "",
  "promo_rule_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * store_id **required** `string`: The store id.
  * promo_rule_id **required** `string`: The id for the promo rule of a store.
  * body **required** `object`: Information about an Ecommerce Store's specific Promo Rule.
    * title `string`: The title that will show up in promotion campaign. Restricted to UTF-8 characters with max length 100.
    * description `string`: The description of a promotion restricted to UTF-8 characters with max length 255.
    * starts_at `string`: The date and time when the promotion is in effect in ISO 8601 format.
    * ends_at `string`: The date and time when the promotion ends. Must be after starts_at and in ISO 8601 format.
    * amount `number`: The amount of the promo code discount. If 'type' is 'fixed', the amount is treated as a monetary value. If 'type' is 'percentage', amount must be a decimal value between 0.0 and 1.0, inclusive.
    * type `string` (values: fixed, percentage): Type of discount. For free shipping set type to fixed.
    * target `string` (values: per_item, total, shipping): The target that the discount applies to.
    * enabled `boolean`: Whether the promo rule is currently enabled.
    * created_at_foreign `string`: The date and time the promotion was created in ISO 8601 format.
    * updated_at_foreign `string`: The date and time the promotion was updated in ISO 8601 format.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: Information about an Ecommerce Store's specific Promo Rule
  * id `string`: A unique identifier for the promo rule. If Ecommerce platform does not support promo rule, use promo code id as promo rule id. Restricted to UTF-8 characters with max length 50.
  * title `string`: The title that will show up in promotion campaign. Restricted to UTF-8 characters with max length 100.
  * description `string`: The description of a promotion restricted to UTF-8 characters with max length 255.
  * starts_at `string`: The date and time when the promotion is in effect in ISO 8601 format.
  * ends_at `string`: The date and time when the promotion ends. Must be after starts_at and in ISO 8601 format.
  * amount `number`: The amount of the promo code discount. If 'type' is 'fixed', the amount is treated as a monetary value. If 'type' is 'percentage', amount must be a decimal value between 0.0 and 1.0, inclusive.
  * type `string` (values: fixed, percentage): Type of discount. For free shipping set type to fixed.
  * target `string` (values: per_item, total, shipping): The target that the discount applies to.
  * enabled `boolean`: Whether the promo rule is currently enabled.
  * created_at_foreign `string`: The date and time the promotion was created in ISO 8601 format.
  * updated_at_foreign `string`: The date and time the promotion was updated in ISO 8601 format.
  * _links [HATEOASLinks](#hateoaslinks)

### deleteEcommerceStoresIdPromorulesId
Delete a promo rule from a store.


```js
mailchimp.deleteEcommerceStoresIdPromorulesId({
  "store_id": "",
  "promo_rule_id": ""
}, context)
```

#### Input
* input `object`
  * store_id **required** `string`: The store id.
  * promo_rule_id **required** `string`: The id for the promo rule of a store.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
*Output schema unknown*

### getEcommerceStoresIdOrders
Get information about a store's orders.


```js
mailchimp.getEcommerceStoresIdOrders({
  "store_id": ""
}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * count `integer`: The number of records to return. [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **10**.
  * offset `integer`: The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **0**.
  * store_id **required** `string`: The store id.
  * customer_id `string`: Restrict results to orders made by a specific customer.
  * has_outreach `boolean`: Restrict results to orders that have an outreach attached. For example, an email campaign or Facebook ad.
  * campaign_id `string`: Restrict results to orders with a specific `campaign_id` value.
  * outreach_id `string`: Restrict results to orders with a specific `outreach_id` value.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: A collection of orders in a store.
  * store_id `string`: The unique identifier for the store.
  * orders `array`: An array of objects, each representing an order in a store.
    * items `object`: Information about a specific order.
      * id `string`: A unique identifier for the order.
      * customer `object`: Information about a specific customer. Orders for existing customers should include only the `id` parameter in the `customer` object body.
        * id `string`: A unique identifier for the customer.
        * email_address `string`: The customer's email address.
        * opt_in_status `boolean`: The customer's opt-in status. This value will never overwrite the opt-in status of a pre-existing MailChimp list member, but will apply to list members that are added through the e-commerce API endpoints. Customers who don't opt in to your MailChimp list [will be added as `Transactional` members](http://developer.mailchimp.com/documentation/mailchimp/guides/getting-started-with-ecommerce/#about-subscribers-and-customers).
        * company `string`: The customer's company.
        * first_name `string`: The customer's first name.
        * last_name `string`: The customer's last name.
        * orders_count `integer`: The customer's total order count. [Learn More](http://developer.mailchimp.com/documentation/mailchimp/guides/getting-started-with-ecommerce/#orders-count-and-total-spent) about using this data.
        * total_spent `number`: The total amount the customer has spent. [Learn More](http://developer.mailchimp.com/documentation/mailchimp/guides/getting-started-with-ecommerce/#orders-count-and-total-spent) about using this data.
        * address `object`: The customer's address.
          * address1 `string`: The mailing address of the customer.
          * address2 `string`: An additional field for the customer's mailing address.
          * city `string`: The city the customer is located in.
          * province `string`: The customer's state name or normalized province.
          * province_code `string`: The two-letter code for the customer's province or state.
          * postal_code `string`: The customer's postal or zip code.
          * country `string`: The customer's country.
          * country_code `string`: The two-letter code for the customer's country.
        * created_at `string`: The date and time the customer was created.
        * updated_at `string`: The date and time the customer was last updated.
        * _links [HATEOASLinks](#hateoaslinks)
      * store_id `string`: The unique identifier for the store.
      * campaign_id `string`: A string that uniquely identifies the campaign associated with an order.
      * landing_site `string`: The URL for the page where the buyer landed when entering the shop.
      * financial_status `string`: The order status. Use this parameter to trigger [Order Notifications](http://developer.mailchimp.com/documentation/mailchimp/guides/getting-started-with-ecommerce/#order-status-notifications).
      * fulfillment_status `string`: The fulfillment status for the order. Use this parameter to trigger [Order Notifications](http://developer.mailchimp.com/documentation/mailchimp/guides/getting-started-with-ecommerce/#order-status-notifications).
      * currency_code `string`: The three-letter [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217#Active_codes) code for the currency that the store accepts.
      * order_total `number`: The order total associated with an order.
      * order_url `string`: The URL for the order.
      * discount_total `number`: The total amount of the discounts to be applied to the price of the order.
      * tax_total `number`: The tax total associated with an order.
      * shipping_total `number`: The shipping total for the order.
      * tracking_code `string` (values: prec): The MailChimp tracking code for the order. Uses the 'mc_tc' parameter in E-Commerce tracking URLs.
      * processed_at_foreign `string`: The date and time the order was processed.
      * cancelled_at_foreign `string`: The date and time the order was cancelled.
      * updated_at_foreign `string`: The date and time the order was updated.
      * shipping_address `object`: The shipping address for the order.
        * name `string`: The name associated with an order's shipping address.
        * address1 `string`: The shipping address for the order.
        * address2 `string`: An additional field for the shipping address.
        * city `string`: The city in the order's shipping address.
        * province `string`: The state or normalized province in the order's shipping address.
        * province_code `string`: The two-letter code for the province or state the order's shipping address is located in.
        * postal_code `string`: The postal or zip code in the order's shipping address.
        * country `string`: The country in the order's shipping address.
        * country_code `string`: The two-letter code for the country in the shipping address.
        * longitude `number`: The longitude for the shipping address location.
        * latitude `number`: The latitude for the shipping address location.
        * phone `string`: The phone number for the order's shipping address
        * company `string`: The company associated with an order's shipping address.
      * billing_address `object`: The billing address for the order.
        * name `string`: The name associated with an order's billing address.
        * address1 `string`: The billing address for the order.
        * address2 `string`: An additional field for the billing address.
        * city `string`: The city in the billing address.
        * province `string`: The state or normalized province in the billing address.
        * province_code `string`: The two-letter code for the province or state in the billing address.
        * postal_code `string`: The postal or zip code in the billing address.
        * country `string`: The country in the billing address.
        * country_code `string`: The two-letter code for the country in the billing address.
        * longitude `number`: The longitude for the billing address location.
        * latitude `number`: The latitude for the billing address location.
        * phone `string`: The phone number for the billing address.
        * company `string`: The company associated with the billing address.
      * lines `array`: An array of the order's line items.
        * items `object`: Information about a specific order line.
          * id `string`: A unique identifier for the order line item.
          * product_id `string`: A unique identifier for the product associated with the order line item.
          * product_title `string`: The name of the product for the order line item.
          * product_variant_id `string`: A unique identifier for the product variant associated with the order line item.
          * product_variant_title `string`: The name of the product variant for the order line item.
          * image_url `string`: The image URL for a product.
          * quantity `integer`: The quantity of an order line item.
          * price `number`: The price of an order line item.
          * discount `number`: The total discount amount applied to this line item.
          * _links [HATEOASLinks](#hateoaslinks)
      * outreach `object`: The outreach associated with this order. For example, an email campaign or Facebook ad.
        * id `string`: A unique identifier for the outreach. Can be an email campaign ID.
        * name `string`: The name for the outreach.
        * published_time `string`: The date and time the Outreach was published
      * _links [HATEOASLinks](#hateoaslinks)
  * total_items [CollectionTotal](#collectiontotal)
  * _links [HATEOASLinks](#hateoaslinks)

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

#### Input
* input `object`
  * store_id **required** `string`: The store id.
  * body **required** `object`: Information about a specific order.
    * id **required** `string`: A unique identifier for the order.
    * customer **required** `object`: Information about a specific customer. This information will update any existing customer. If the customer doesn't exist in the store, a new customer will be created.
      * id **required** `string`: A unique identifier for the customer.
      * email_address **required** `string`: The customer's email address.
      * opt_in_status **required** `boolean`: The customer's opt-in status. This value will never overwrite the opt-in status of a pre-existing MailChimp list member, but will apply to list members that are added through the e-commerce API endpoints. Customers who don't opt in to your MailChimp list [will be added as `Transactional` members](http://developer.mailchimp.com/documentation/mailchimp/guides/getting-started-with-ecommerce/#about-subscribers-and-customers).
      * company `string`: The customer's company.
      * first_name `string`: The customer's first name.
      * last_name `string`: The customer's last name.
      * orders_count `integer`: The customer's total order count. [Learn More](http://developer.mailchimp.com/documentation/mailchimp/guides/getting-started-with-ecommerce/#orders-count-and-total-spent) about using this data.
      * total_spent `number`: The total amount the customer has spent. [Learn More](http://developer.mailchimp.com/documentation/mailchimp/guides/getting-started-with-ecommerce/#orders-count-and-total-spent) about using this data.
      * address `object`: The customer's address.
        * address1 `string`: The mailing address of the customer.
        * address2 `string`: An additional field for the customer's mailing address.
        * city `string`: The city the customer is located in.
        * province `string`: The customer's state name or normalized province.
        * province_code `string`: The two-letter code for the customer's province or state.
        * postal_code `string`: The customer's postal or zip code.
        * country `string`: The customer's country.
        * country_code `string`: The two-letter code for the customer's country.
    * campaign_id `string`: A string that uniquely identifies the campaign for an order.
    * landing_site `string`: The URL for the page where the buyer landed when entering the shop.
    * financial_status `string`: The order status. Use this parameter to trigger [Order Notifications](http://developer.mailchimp.com/documentation/mailchimp/guides/getting-started-with-ecommerce/#order-status-notifications).
    * fulfillment_status `string`: The fulfillment status for the order. Use this parameter to trigger [Order Notifications](http://developer.mailchimp.com/documentation/mailchimp/guides/getting-started-with-ecommerce/#order-status-notifications).
    * currency_code **required** `string`: The three-letter [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217#Active_codes) code for the currency that the store accepts.
    * order_total **required** `number`: The total for the order.
    * order_url `string`: The URL for the order.
    * discount_total `number`: The total amount of the discounts to be applied to the price of the order.
    * tax_total `number`: The tax total for the order.
    * shipping_total `number`: The shipping total for the order.
    * tracking_code `string` (values: prec): The MailChimp tracking code for the order. Uses the 'mc_tc' parameter in E-Commerce tracking URLs.
    * processed_at_foreign `string`: The date and time the order was processed.
    * cancelled_at_foreign `string`: The date and time the order was cancelled.
    * updated_at_foreign `string`: The date and time the order was updated.
    * shipping_address `object`: The shipping address for the order.
      * name `string`: The name associated with an order's shipping address.
      * address1 `string`: The shipping address for the order.
      * address2 `string`: An additional field for the shipping address.
      * city `string`: The city in the order's shipping address.
      * province `string`: The state or normalized province in the order's shipping address.
      * province_code `string`: The two-letter code for the province or state in the shipping address.
      * postal_code `string`: The postal or zip code in the shipping address.
      * country `string`: The country in the shipping address.
      * country_code `string`: The two-letter code for the country in the shipping address.
      * longitude `number`: The longitude for the shipping address location.
      * latitude `number`: The latitude for the shipping address location.
      * phone `string`: The phone number for the order's shipping address.
      * company `string`: The company associated with the shipping address.
    * billing_address `object`: The billing address for the order.
      * name `string`: The name associated with the billing address.
      * address1 `string`: The billing address for the order.
      * address2 `string`: An additional field for the billing address.
      * city `string`: The city in the billing address.
      * province `string`: The state or normalized province in the billing address.
      * province_code `string`: The two-letter code for the province in the billing address.
      * postal_code `string`: The postal or zip code in the billing address.
      * country `string`: The country in the billing address.
      * country_code `string`: The two-letter code for the country in the billing address.
      * longitude `number`: The longitude for the billing address location.
      * latitude `number`: The latitude for the billing address location.
      * phone `string`: The phone number for the billing address
      * company `string`: The company associated with the billing address.
    * lines **required** `array`: An array of the order's line items.
      * items `object`: Information about a specific order line.
        * id **required** `string`: A unique identifier for the order line item.
        * product_id **required** `string`: A unique identifier for the product associated with the order line item.
        * product_variant_id **required** `string`: A unique identifier for the product variant associated with the order line item.
        * quantity **required** `integer`: The quantity of an order line item.
        * price **required** `number`: The price of an order line item.
        * discount `number`: The total discount amount applied to this line item.
    * outreach `object`: The outreach associated with this order. For example, an email campaign or Facebook ad.
      * id `string`: A unique identifier for the outreach. Can be an email campaign ID.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: Information about a specific order.
  * id `string`: A unique identifier for the order.
  * customer `object`: Information about a specific customer. Orders for existing customers should include only the `id` parameter in the `customer` object body.
    * id `string`: A unique identifier for the customer.
    * email_address `string`: The customer's email address.
    * opt_in_status `boolean`: The customer's opt-in status. This value will never overwrite the opt-in status of a pre-existing MailChimp list member, but will apply to list members that are added through the e-commerce API endpoints. Customers who don't opt in to your MailChimp list [will be added as `Transactional` members](http://developer.mailchimp.com/documentation/mailchimp/guides/getting-started-with-ecommerce/#about-subscribers-and-customers).
    * company `string`: The customer's company.
    * first_name `string`: The customer's first name.
    * last_name `string`: The customer's last name.
    * orders_count `integer`: The customer's total order count. [Learn More](http://developer.mailchimp.com/documentation/mailchimp/guides/getting-started-with-ecommerce/#orders-count-and-total-spent) about using this data.
    * total_spent `number`: The total amount the customer has spent. [Learn More](http://developer.mailchimp.com/documentation/mailchimp/guides/getting-started-with-ecommerce/#orders-count-and-total-spent) about using this data.
    * address `object`: The customer's address.
      * address1 `string`: The mailing address of the customer.
      * address2 `string`: An additional field for the customer's mailing address.
      * city `string`: The city the customer is located in.
      * province `string`: The customer's state name or normalized province.
      * province_code `string`: The two-letter code for the customer's province or state.
      * postal_code `string`: The customer's postal or zip code.
      * country `string`: The customer's country.
      * country_code `string`: The two-letter code for the customer's country.
    * created_at `string`: The date and time the customer was created.
    * updated_at `string`: The date and time the customer was last updated.
    * _links [HATEOASLinks](#hateoaslinks)
  * store_id `string`: The unique identifier for the store.
  * campaign_id `string`: A string that uniquely identifies the campaign associated with an order.
  * landing_site `string`: The URL for the page where the buyer landed when entering the shop.
  * financial_status `string`: The order status. Use this parameter to trigger [Order Notifications](http://developer.mailchimp.com/documentation/mailchimp/guides/getting-started-with-ecommerce/#order-status-notifications).
  * fulfillment_status `string`: The fulfillment status for the order. Use this parameter to trigger [Order Notifications](http://developer.mailchimp.com/documentation/mailchimp/guides/getting-started-with-ecommerce/#order-status-notifications).
  * currency_code `string`: The three-letter [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217#Active_codes) code for the currency that the store accepts.
  * order_total `number`: The order total associated with an order.
  * order_url `string`: The URL for the order.
  * discount_total `number`: The total amount of the discounts to be applied to the price of the order.
  * tax_total `number`: The tax total associated with an order.
  * shipping_total `number`: The shipping total for the order.
  * tracking_code `string` (values: prec): The MailChimp tracking code for the order. Uses the 'mc_tc' parameter in E-Commerce tracking URLs.
  * processed_at_foreign `string`: The date and time the order was processed.
  * cancelled_at_foreign `string`: The date and time the order was cancelled.
  * updated_at_foreign `string`: The date and time the order was updated.
  * shipping_address `object`: The shipping address for the order.
    * name `string`: The name associated with an order's shipping address.
    * address1 `string`: The shipping address for the order.
    * address2 `string`: An additional field for the shipping address.
    * city `string`: The city in the order's shipping address.
    * province `string`: The state or normalized province in the order's shipping address.
    * province_code `string`: The two-letter code for the province or state the order's shipping address is located in.
    * postal_code `string`: The postal or zip code in the order's shipping address.
    * country `string`: The country in the order's shipping address.
    * country_code `string`: The two-letter code for the country in the shipping address.
    * longitude `number`: The longitude for the shipping address location.
    * latitude `number`: The latitude for the shipping address location.
    * phone `string`: The phone number for the order's shipping address
    * company `string`: The company associated with an order's shipping address.
  * billing_address `object`: The billing address for the order.
    * name `string`: The name associated with an order's billing address.
    * address1 `string`: The billing address for the order.
    * address2 `string`: An additional field for the billing address.
    * city `string`: The city in the billing address.
    * province `string`: The state or normalized province in the billing address.
    * province_code `string`: The two-letter code for the province or state in the billing address.
    * postal_code `string`: The postal or zip code in the billing address.
    * country `string`: The country in the billing address.
    * country_code `string`: The two-letter code for the country in the billing address.
    * longitude `number`: The longitude for the billing address location.
    * latitude `number`: The latitude for the billing address location.
    * phone `string`: The phone number for the billing address.
    * company `string`: The company associated with the billing address.
  * lines `array`: An array of the order's line items.
    * items `object`: Information about a specific order line.
      * id `string`: A unique identifier for the order line item.
      * product_id `string`: A unique identifier for the product associated with the order line item.
      * product_title `string`: The name of the product for the order line item.
      * product_variant_id `string`: A unique identifier for the product variant associated with the order line item.
      * product_variant_title `string`: The name of the product variant for the order line item.
      * image_url `string`: The image URL for a product.
      * quantity `integer`: The quantity of an order line item.
      * price `number`: The price of an order line item.
      * discount `number`: The total discount amount applied to this line item.
      * _links [HATEOASLinks](#hateoaslinks)
  * outreach `object`: The outreach associated with this order. For example, an email campaign or Facebook ad.
    * id `string`: A unique identifier for the outreach. Can be an email campaign ID.
    * name `string`: The name for the outreach.
    * published_time `string`: The date and time the Outreach was published
  * _links [HATEOASLinks](#hateoaslinks)

### getEcommerceStoresIdOrdersId
Get information about a specific order.


```js
mailchimp.getEcommerceStoresIdOrdersId({
  "store_id": "",
  "order_id": ""
}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * store_id **required** `string`: The store id.
  * order_id **required** `string`: The id for the order in a store.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: Information about a specific order.
  * id `string`: A unique identifier for the order.
  * customer `object`: Information about a specific customer. Orders for existing customers should include only the `id` parameter in the `customer` object body.
    * id `string`: A unique identifier for the customer.
    * email_address `string`: The customer's email address.
    * opt_in_status `boolean`: The customer's opt-in status. This value will never overwrite the opt-in status of a pre-existing MailChimp list member, but will apply to list members that are added through the e-commerce API endpoints. Customers who don't opt in to your MailChimp list [will be added as `Transactional` members](http://developer.mailchimp.com/documentation/mailchimp/guides/getting-started-with-ecommerce/#about-subscribers-and-customers).
    * company `string`: The customer's company.
    * first_name `string`: The customer's first name.
    * last_name `string`: The customer's last name.
    * orders_count `integer`: The customer's total order count. [Learn More](http://developer.mailchimp.com/documentation/mailchimp/guides/getting-started-with-ecommerce/#orders-count-and-total-spent) about using this data.
    * total_spent `number`: The total amount the customer has spent. [Learn More](http://developer.mailchimp.com/documentation/mailchimp/guides/getting-started-with-ecommerce/#orders-count-and-total-spent) about using this data.
    * address `object`: The customer's address.
      * address1 `string`: The mailing address of the customer.
      * address2 `string`: An additional field for the customer's mailing address.
      * city `string`: The city the customer is located in.
      * province `string`: The customer's state name or normalized province.
      * province_code `string`: The two-letter code for the customer's province or state.
      * postal_code `string`: The customer's postal or zip code.
      * country `string`: The customer's country.
      * country_code `string`: The two-letter code for the customer's country.
    * created_at `string`: The date and time the customer was created.
    * updated_at `string`: The date and time the customer was last updated.
    * _links [HATEOASLinks](#hateoaslinks)
  * store_id `string`: The unique identifier for the store.
  * campaign_id `string`: A string that uniquely identifies the campaign associated with an order.
  * landing_site `string`: The URL for the page where the buyer landed when entering the shop.
  * financial_status `string`: The order status. Use this parameter to trigger [Order Notifications](http://developer.mailchimp.com/documentation/mailchimp/guides/getting-started-with-ecommerce/#order-status-notifications).
  * fulfillment_status `string`: The fulfillment status for the order. Use this parameter to trigger [Order Notifications](http://developer.mailchimp.com/documentation/mailchimp/guides/getting-started-with-ecommerce/#order-status-notifications).
  * currency_code `string`: The three-letter [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217#Active_codes) code for the currency that the store accepts.
  * order_total `number`: The order total associated with an order.
  * order_url `string`: The URL for the order.
  * discount_total `number`: The total amount of the discounts to be applied to the price of the order.
  * tax_total `number`: The tax total associated with an order.
  * shipping_total `number`: The shipping total for the order.
  * tracking_code `string` (values: prec): The MailChimp tracking code for the order. Uses the 'mc_tc' parameter in E-Commerce tracking URLs.
  * processed_at_foreign `string`: The date and time the order was processed.
  * cancelled_at_foreign `string`: The date and time the order was cancelled.
  * updated_at_foreign `string`: The date and time the order was updated.
  * shipping_address `object`: The shipping address for the order.
    * name `string`: The name associated with an order's shipping address.
    * address1 `string`: The shipping address for the order.
    * address2 `string`: An additional field for the shipping address.
    * city `string`: The city in the order's shipping address.
    * province `string`: The state or normalized province in the order's shipping address.
    * province_code `string`: The two-letter code for the province or state the order's shipping address is located in.
    * postal_code `string`: The postal or zip code in the order's shipping address.
    * country `string`: The country in the order's shipping address.
    * country_code `string`: The two-letter code for the country in the shipping address.
    * longitude `number`: The longitude for the shipping address location.
    * latitude `number`: The latitude for the shipping address location.
    * phone `string`: The phone number for the order's shipping address
    * company `string`: The company associated with an order's shipping address.
  * billing_address `object`: The billing address for the order.
    * name `string`: The name associated with an order's billing address.
    * address1 `string`: The billing address for the order.
    * address2 `string`: An additional field for the billing address.
    * city `string`: The city in the billing address.
    * province `string`: The state or normalized province in the billing address.
    * province_code `string`: The two-letter code for the province or state in the billing address.
    * postal_code `string`: The postal or zip code in the billing address.
    * country `string`: The country in the billing address.
    * country_code `string`: The two-letter code for the country in the billing address.
    * longitude `number`: The longitude for the billing address location.
    * latitude `number`: The latitude for the billing address location.
    * phone `string`: The phone number for the billing address.
    * company `string`: The company associated with the billing address.
  * lines `array`: An array of the order's line items.
    * items `object`: Information about a specific order line.
      * id `string`: A unique identifier for the order line item.
      * product_id `string`: A unique identifier for the product associated with the order line item.
      * product_title `string`: The name of the product for the order line item.
      * product_variant_id `string`: A unique identifier for the product variant associated with the order line item.
      * product_variant_title `string`: The name of the product variant for the order line item.
      * image_url `string`: The image URL for a product.
      * quantity `integer`: The quantity of an order line item.
      * price `number`: The price of an order line item.
      * discount `number`: The total discount amount applied to this line item.
      * _links [HATEOASLinks](#hateoaslinks)
  * outreach `object`: The outreach associated with this order. For example, an email campaign or Facebook ad.
    * id `string`: A unique identifier for the outreach. Can be an email campaign ID.
    * name `string`: The name for the outreach.
    * published_time `string`: The date and time the Outreach was published
  * _links [HATEOASLinks](#hateoaslinks)

### patchEcommerceStoresIdOrdersId
Update a specific order.


```js
mailchimp.patchEcommerceStoresIdOrdersId({
  "store_id": "",
  "order_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * store_id **required** `string`: The store id.
  * order_id **required** `string`: The id for the order in a store.
  * body **required** `object`: Information about a specific order.
    * id `string`: A unique identifier for the order.
    * customer `object`: Information about a specific customer. Orders for existing customers should include only the `id` parameter in the `customer` object body.
      * email_address `string`: The customer's email address.
      * opt_in_status `boolean`: The customer's opt-in status. This value will never overwrite the opt-in status of a pre-existing MailChimp list member, but will apply to list members that are added through the e-commerce API endpoints. Customers who don't opt in to your MailChimp list [will be added as `Transactional` members](http://developer.mailchimp.com/documentation/mailchimp/guides/getting-started-with-ecommerce/#about-subscribers-and-customers).
      * company `string`: The customer's company.
      * first_name `string`: The customer's first name.
      * last_name `string`: The customer's last name.
      * orders_count `integer`: The customer's total order count. [Learn More](http://developer.mailchimp.com/documentation/mailchimp/guides/getting-started-with-ecommerce/#orders-count-and-total-spent) about using this data.
      * total_spent `number`: The total amount the customer has spent. [Learn More](http://developer.mailchimp.com/documentation/mailchimp/guides/getting-started-with-ecommerce/#orders-count-and-total-spent) about using this data.
      * address `object`: The customer's address.
        * address1 `string`: The mailing address of the customer.
        * address2 `string`: An additional field for the customer's mailing address.
        * city `string`: The city the customer is located in.
        * province `string`: The customer's state name or normalized province.
        * province_code `string`: The two-letter code for the customer's province or state.
        * postal_code `string`: The customer's postal or zip code.
        * country `string`: The customer's country.
        * country_code `string`: The two-letter code for the customer's country.
    * campaign_id `string`: A string that uniquely identifies the campaign associated with an order.
    * landing_site `string`: The URL for the page where the buyer landed when entering the shop.
    * financial_status `string`: The order status. Use this parameter to trigger [Order Notifications](http://developer.mailchimp.com/documentation/mailchimp/guides/getting-started-with-ecommerce/#order-status-notifications).
    * fulfillment_status `string`: The fulfillment status for the order. Use this parameter to trigger [Order Notifications](http://developer.mailchimp.com/documentation/mailchimp/guides/getting-started-with-ecommerce/#order-status-notifications).
    * currency_code `string`: The three-letter [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217#Active_codes) code for the currency that the store accepts.
    * order_total `number`: The order total associated with an order.
    * order_url `string`: The URL for the order.
    * discount_total `number`: The total amount of the discounts to be applied to the price of the order.
    * tax_total `number`: The tax total associated with an order.
    * shipping_total `number`: The shipping total for the order.
    * tracking_code `string` (values: prec): The MailChimp tracking code for the order. Uses the 'mc_tc' parameter in E-Commerce tracking URLs.
    * processed_at_foreign `string`: The date and time the order was processed.
    * cancelled_at_foreign `string`: The date and time the order was cancelled.
    * updated_at_foreign `string`: The date and time the order was updated.
    * shipping_address `object`: The shipping address for the order.
      * name `string`: The name associated with an order's shipping address.
      * address1 `string`: The shipping address for the order.
      * address2 `string`: An additional field for the shipping address.
      * city `string`: The city in the order's shipping address.
      * province `string`: The state or normalized province in the order's shipping address.
      * province_code `string`: The two-letter code for the province or state the order's shipping address is located in.
      * postal_code `string`: The postal or zip code in the order's shipping address.
      * country `string`: The country in the order's shipping address.
      * country_code `string`: The two-letter code for the country in the shipping address.
      * longitude `number`: The longitude for the shipping address location.
      * latitude `number`: The latitude for the shipping address location.
      * phone `string`: The phone number for the order's shipping address
      * company `string`: The company associated with an order's shipping address.
    * billing_address `object`: The billing address for the order.
      * name `string`: The name associated with an order's billing address.
      * address1 `string`: The billing address for the order.
      * address2 `string`: An additional field for the billing address.
      * city `string`: The city in the billing address.
      * province `string`: The state or normalized province in the billing address.
      * province_code `string`: The two-letter code for the province or state in the billing address.
      * postal_code `string`: The postal or zip code in the billing address.
      * country `string`: The country in the billing address.
      * country_code `string`: The two-letter code for the country in the billing address.
      * longitude `number`: The longitude for the billing address location.
      * latitude `number`: The latitude for the billing address location.
      * phone `string`: The phone number for the billing address.
      * company `string`: The company associated with the billing address.
    * lines `array`: An array of the order's line items.
      * items `object`: Information about a specific order line.
        * product_id `string`: A unique identifier for the product associated with the order line item.
        * product_variant_id `string`: A unique identifier for the product variant associated with the order line item.
        * quantity `integer`: The quantity of an order line item.
        * price `number`: The price of an order line item.
        * discount `number`: The total discount amount applied to this line item.
    * outreach `object`: The outreach associated with this order. For example, an email campaign or Facebook ad.
      * id `string`: A unique identifier for the outreach. Can be an email campaign ID.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: Information about a specific order.
  * id `string`: A unique identifier for the order.
  * customer `object`: Information about a specific customer. Orders for existing customers should include only the `id` parameter in the `customer` object body.
    * id `string`: A unique identifier for the customer.
    * email_address `string`: The customer's email address.
    * opt_in_status `boolean`: The customer's opt-in status. This value will never overwrite the opt-in status of a pre-existing MailChimp list member, but will apply to list members that are added through the e-commerce API endpoints. Customers who don't opt in to your MailChimp list [will be added as `Transactional` members](http://developer.mailchimp.com/documentation/mailchimp/guides/getting-started-with-ecommerce/#about-subscribers-and-customers).
    * company `string`: The customer's company.
    * first_name `string`: The customer's first name.
    * last_name `string`: The customer's last name.
    * orders_count `integer`: The customer's total order count. [Learn More](http://developer.mailchimp.com/documentation/mailchimp/guides/getting-started-with-ecommerce/#orders-count-and-total-spent) about using this data.
    * total_spent `number`: The total amount the customer has spent. [Learn More](http://developer.mailchimp.com/documentation/mailchimp/guides/getting-started-with-ecommerce/#orders-count-and-total-spent) about using this data.
    * address `object`: The customer's address.
      * address1 `string`: The mailing address of the customer.
      * address2 `string`: An additional field for the customer's mailing address.
      * city `string`: The city the customer is located in.
      * province `string`: The customer's state name or normalized province.
      * province_code `string`: The two-letter code for the customer's province or state.
      * postal_code `string`: The customer's postal or zip code.
      * country `string`: The customer's country.
      * country_code `string`: The two-letter code for the customer's country.
    * created_at `string`: The date and time the customer was created.
    * updated_at `string`: The date and time the customer was last updated.
    * _links [HATEOASLinks](#hateoaslinks)
  * store_id `string`: The unique identifier for the store.
  * campaign_id `string`: A string that uniquely identifies the campaign associated with an order.
  * landing_site `string`: The URL for the page where the buyer landed when entering the shop.
  * financial_status `string`: The order status. Use this parameter to trigger [Order Notifications](http://developer.mailchimp.com/documentation/mailchimp/guides/getting-started-with-ecommerce/#order-status-notifications).
  * fulfillment_status `string`: The fulfillment status for the order. Use this parameter to trigger [Order Notifications](http://developer.mailchimp.com/documentation/mailchimp/guides/getting-started-with-ecommerce/#order-status-notifications).
  * currency_code `string`: The three-letter [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217#Active_codes) code for the currency that the store accepts.
  * order_total `number`: The order total associated with an order.
  * order_url `string`: The URL for the order.
  * discount_total `number`: The total amount of the discounts to be applied to the price of the order.
  * tax_total `number`: The tax total associated with an order.
  * shipping_total `number`: The shipping total for the order.
  * tracking_code `string` (values: prec): The MailChimp tracking code for the order. Uses the 'mc_tc' parameter in E-Commerce tracking URLs.
  * processed_at_foreign `string`: The date and time the order was processed.
  * cancelled_at_foreign `string`: The date and time the order was cancelled.
  * updated_at_foreign `string`: The date and time the order was updated.
  * shipping_address `object`: The shipping address for the order.
    * name `string`: The name associated with an order's shipping address.
    * address1 `string`: The shipping address for the order.
    * address2 `string`: An additional field for the shipping address.
    * city `string`: The city in the order's shipping address.
    * province `string`: The state or normalized province in the order's shipping address.
    * province_code `string`: The two-letter code for the province or state the order's shipping address is located in.
    * postal_code `string`: The postal or zip code in the order's shipping address.
    * country `string`: The country in the order's shipping address.
    * country_code `string`: The two-letter code for the country in the shipping address.
    * longitude `number`: The longitude for the shipping address location.
    * latitude `number`: The latitude for the shipping address location.
    * phone `string`: The phone number for the order's shipping address
    * company `string`: The company associated with an order's shipping address.
  * billing_address `object`: The billing address for the order.
    * name `string`: The name associated with an order's billing address.
    * address1 `string`: The billing address for the order.
    * address2 `string`: An additional field for the billing address.
    * city `string`: The city in the billing address.
    * province `string`: The state or normalized province in the billing address.
    * province_code `string`: The two-letter code for the province or state in the billing address.
    * postal_code `string`: The postal or zip code in the billing address.
    * country `string`: The country in the billing address.
    * country_code `string`: The two-letter code for the country in the billing address.
    * longitude `number`: The longitude for the billing address location.
    * latitude `number`: The latitude for the billing address location.
    * phone `string`: The phone number for the billing address.
    * company `string`: The company associated with the billing address.
  * lines `array`: An array of the order's line items.
    * items `object`: Information about a specific order line.
      * id `string`: A unique identifier for the order line item.
      * product_id `string`: A unique identifier for the product associated with the order line item.
      * product_title `string`: The name of the product for the order line item.
      * product_variant_id `string`: A unique identifier for the product variant associated with the order line item.
      * product_variant_title `string`: The name of the product variant for the order line item.
      * image_url `string`: The image URL for a product.
      * quantity `integer`: The quantity of an order line item.
      * price `number`: The price of an order line item.
      * discount `number`: The total discount amount applied to this line item.
      * _links [HATEOASLinks](#hateoaslinks)
  * outreach `object`: The outreach associated with this order. For example, an email campaign or Facebook ad.
    * id `string`: A unique identifier for the outreach. Can be an email campaign ID.
    * name `string`: The name for the outreach.
    * published_time `string`: The date and time the Outreach was published
  * _links [HATEOASLinks](#hateoaslinks)

### deleteEcommerceStoresIdOrdersId
Delete an order.


```js
mailchimp.deleteEcommerceStoresIdOrdersId({
  "store_id": "",
  "order_id": ""
}, context)
```

#### Input
* input `object`
  * store_id **required** `string`: The store id.
  * order_id **required** `string`: The id for the order in a store.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
*Output schema unknown*

### getEcommerceStoresIdOrdersIdLines
Get information about an order's line items.


```js
mailchimp.getEcommerceStoresIdOrdersIdLines({
  "store_id": "",
  "order_id": ""
}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * count `integer`: The number of records to return. [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **10**.
  * offset `integer`: The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **0**.
  * store_id **required** `string`: The store id.
  * order_id **required** `string`: The id for the order in a store.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: A collection of an order's line items.
  * store_id `string`: The store id.
  * order_id `string`: The order id.
  * lines `array`: An array of objects, each representing an order's line item.
    * items `object`: Information about a specific order line.
      * id `string`: A unique identifier for the order line item.
      * product_id `string`: A unique identifier for the product associated with the order line item.
      * product_title `string`: The name of the product for the order line item.
      * product_variant_id `string`: A unique identifier for the product variant associated with the order line item.
      * product_variant_title `string`: The name of the product variant for the order line item.
      * image_url `string`: The image URL for a product.
      * quantity `integer`: The quantity of an order line item.
      * price `number`: The price of an order line item.
      * discount `number`: The total discount amount applied to this line item.
      * _links [HATEOASLinks](#hateoaslinks)
  * total_items [CollectionTotal](#collectiontotal)
  * _links [HATEOASLinks](#hateoaslinks)

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

#### Input
* input `object`
  * store_id **required** `string`: The store id.
  * order_id **required** `string`: The id for the order in a store.
  * body **required** `object`: Information about a specific order line.
    * id **required** `string`: A unique identifier for the order line item.
    * product_id **required** `string`: A unique identifier for the product associated with the order line item.
    * product_variant_id **required** `string`: A unique identifier for the product variant associated with the order line item.
    * quantity **required** `integer`: The quantity of an order line item.
    * price **required** `number`: The price of an order line item.
    * discount `number`: The total discount amount applied to this line item.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: Information about a specific order line.
  * id `string`: A unique identifier for the order line item.
  * product_id `string`: A unique identifier for the product associated with the order line item.
  * product_title `string`: The name of the product for the order line item.
  * product_variant_id `string`: A unique identifier for the product variant associated with the order line item.
  * product_variant_title `string`: The name of the product variant for the order line item.
  * image_url `string`: The image URL for a product.
  * quantity `integer`: The quantity of an order line item.
  * price `number`: The price of an order line item.
  * discount `number`: The total discount amount applied to this line item.
  * _links [HATEOASLinks](#hateoaslinks)

### getEcommerceStoresIdOrdersIdLinesId
Get information about a specific order line item.


```js
mailchimp.getEcommerceStoresIdOrdersIdLinesId({
  "store_id": "",
  "order_id": "",
  "line_id": ""
}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * store_id **required** `string`: The store id.
  * order_id **required** `string`: The id for the order in a store.
  * line_id **required** `string`: The id for the line item of an order.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: Information about a specific order line.
  * id `string`: A unique identifier for the order line item.
  * product_id `string`: A unique identifier for the product associated with the order line item.
  * product_title `string`: The name of the product for the order line item.
  * product_variant_id `string`: A unique identifier for the product variant associated with the order line item.
  * product_variant_title `string`: The name of the product variant for the order line item.
  * image_url `string`: The image URL for a product.
  * quantity `integer`: The quantity of an order line item.
  * price `number`: The price of an order line item.
  * discount `number`: The total discount amount applied to this line item.
  * _links [HATEOASLinks](#hateoaslinks)

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

#### Input
* input `object`
  * store_id **required** `string`: The store id.
  * order_id **required** `string`: The id for the order in a store.
  * line_id **required** `string`: The id for the line item of an order.
  * body **required** `object`: Information about a specific order line.
    * product_id `string`: A unique identifier for the product associated with the order line item.
    * product_variant_id `string`: A unique identifier for the product variant associated with the order line item.
    * quantity `integer`: The quantity of an order line item.
    * price `number`: The price of an order line item.
    * discount `number`: The total discount amount applied to this line item.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: Information about a specific order line.
  * id `string`: A unique identifier for the order line item.
  * product_id `string`: A unique identifier for the product associated with the order line item.
  * product_title `string`: The name of the product for the order line item.
  * product_variant_id `string`: A unique identifier for the product variant associated with the order line item.
  * product_variant_title `string`: The name of the product variant for the order line item.
  * image_url `string`: The image URL for a product.
  * quantity `integer`: The quantity of an order line item.
  * price `number`: The price of an order line item.
  * discount `number`: The total discount amount applied to this line item.
  * _links [HATEOASLinks](#hateoaslinks)

### deleteEcommerceStoresIdOrdersIdLinesId
Delete a specific order line item.


```js
mailchimp.deleteEcommerceStoresIdOrdersIdLinesId({
  "store_id": "",
  "order_id": "",
  "line_id": ""
}, context)
```

#### Input
* input `object`
  * store_id **required** `string`: The store id.
  * order_id **required** `string`: The id for the order in a store.
  * line_id **required** `string`: The id for the line item of an order.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
*Output schema unknown*

### getEcommerceStoresIdProducts
Get information about a store's products.


```js
mailchimp.getEcommerceStoresIdProducts({
  "store_id": ""
}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * count `integer`: The number of records to return. [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **10**.
  * offset `integer`: The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **0**.
  * store_id **required** `string`: The store id.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: A collection of a store's products.
  * store_id `string`: The store id.
  * products `array`: An array of objects, each representing a store product.
    * items `object`: Information about a specific product.
      * id `string`: A unique identifier for the product.
      * title `string`: The title of a product.
      * handle `string`: The handle of a product.
      * url `string`: The URL for a product.
      * description `string`: The description of a product.
      * type `string`: The type of product.
      * vendor `string`: The vendor for a product.
      * image_url `string`: The image URL for a product.
      * variants `array`: An array of the product's variants.
        * items `object`: Information about a specific product variant.
          * id `string`: A unique identifier for the product variant.
          * title `string`: The title of a product variant.
          * url `string`: The URL for a product variant.
          * sku `string`: The stock keeping unit (SKU) of a product variant.
          * price `number`: The price of a product variant.
          * inventory_quantity `integer`: The inventory quantity of a product variant.
          * image_url `string`: The image URL for a product variant.
          * backorders `string`: The backorders of a product variant.
          * visibility `string`: The visibility of a product variant.
          * created_at `string`: The date and time the product was created.
          * updated_at `string`: The date and time the product was last updated.
          * _links [HATEOASLinks](#hateoaslinks)
      * images `array`: An array of the product's images.
        * items `object`: Information about a specific product image.
          * id `string`: A unique identifier for the product image.
          * url `string`: The URL for a product image.
          * variant_ids `array`: The list of product variants using the image.
          * _links [HATEOASLinks](#hateoaslinks)
      * published_at_foreign `string`: The date and time the product was published.
      * _links [HATEOASLinks](#hateoaslinks)
  * total_items [CollectionTotal](#collectiontotal)
  * _links [HATEOASLinks](#hateoaslinks)

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

#### Input
* input `object`
  * store_id **required** `string`: The store id.
  * body **required** `object`: Information about a specific product.
    * id **required** `string`: A unique identifier for the product.
    * title **required** `string`: The title of a product.
    * handle `string`: The handle of a product.
    * url `string`: The URL for a product.
    * description `string`: The description of a product.
    * type `string`: The type of product.
    * vendor `string`: The vendor for a product.
    * image_url `string`: The image URL for a product.
    * variants **required** `array`: An array of the product's variants. At least one variant is required for each product. A variant can use the same `id` and `title` as the parent product.
      * items `object`: Information about a specific product variant.
        * id **required** `string`: A unique identifier for the product variant.
        * title **required** `string`: The title of a product variant.
        * url `string`: The URL for a product variant.
        * sku `string`: The stock keeping unit (SKU) of a product variant.
        * price `number`: The price of a product variant.
        * inventory_quantity `integer`: The inventory quantity of a product variant.
        * image_url `string`: The image URL for a product variant.
        * backorders `string`: The backorders of a product variant.
        * visibility `string`: The visibility of a product variant.
    * images `array`: An array of the product's images.
      * items `object`: Information about a specific product image.
        * id **required** `string`: A unique identifier for the product image.
        * url **required** `string`: The URL for a product image.
        * variant_ids `array`: The list of product variants using the image.
    * published_at_foreign `string`: The date and time the product was published.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: Information about a specific product.
  * id `string`: A unique identifier for the product.
  * title `string`: The title of a product.
  * handle `string`: The handle of a product.
  * url `string`: The URL for a product.
  * description `string`: The description of a product.
  * type `string`: The type of product.
  * vendor `string`: The vendor for a product.
  * image_url `string`: The image URL for a product.
  * variants `array`: An array of the product's variants.
    * items `object`: Information about a specific product variant.
      * id `string`: A unique identifier for the product variant.
      * title `string`: The title of a product variant.
      * url `string`: The URL for a product variant.
      * sku `string`: The stock keeping unit (SKU) of a product variant.
      * price `number`: The price of a product variant.
      * inventory_quantity `integer`: The inventory quantity of a product variant.
      * image_url `string`: The image URL for a product variant.
      * backorders `string`: The backorders of a product variant.
      * visibility `string`: The visibility of a product variant.
      * created_at `string`: The date and time the product was created.
      * updated_at `string`: The date and time the product was last updated.
      * _links [HATEOASLinks](#hateoaslinks)
  * images `array`: An array of the product's images.
    * items `object`: Information about a specific product image.
      * id `string`: A unique identifier for the product image.
      * url `string`: The URL for a product image.
      * variant_ids `array`: The list of product variants using the image.
      * _links [HATEOASLinks](#hateoaslinks)
  * published_at_foreign `string`: The date and time the product was published.
  * _links [HATEOASLinks](#hateoaslinks)

### getEcommerceStoresIdProductsId
Get information about a specific product.


```js
mailchimp.getEcommerceStoresIdProductsId({
  "store_id": "",
  "product_id": ""
}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * store_id **required** `string`: The store id.
  * product_id **required** `string`: The id for the product of a store.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: Information about a specific product.
  * id `string`: A unique identifier for the product.
  * title `string`: The title of a product.
  * handle `string`: The handle of a product.
  * url `string`: The URL for a product.
  * description `string`: The description of a product.
  * type `string`: The type of product.
  * vendor `string`: The vendor for a product.
  * image_url `string`: The image URL for a product.
  * variants `array`: An array of the product's variants.
    * items `object`: Information about a specific product variant.
      * id `string`: A unique identifier for the product variant.
      * title `string`: The title of a product variant.
      * url `string`: The URL for a product variant.
      * sku `string`: The stock keeping unit (SKU) of a product variant.
      * price `number`: The price of a product variant.
      * inventory_quantity `integer`: The inventory quantity of a product variant.
      * image_url `string`: The image URL for a product variant.
      * backorders `string`: The backorders of a product variant.
      * visibility `string`: The visibility of a product variant.
      * created_at `string`: The date and time the product was created.
      * updated_at `string`: The date and time the product was last updated.
      * _links [HATEOASLinks](#hateoaslinks)
  * images `array`: An array of the product's images.
    * items `object`: Information about a specific product image.
      * id `string`: A unique identifier for the product image.
      * url `string`: The URL for a product image.
      * variant_ids `array`: The list of product variants using the image.
      * _links [HATEOASLinks](#hateoaslinks)
  * published_at_foreign `string`: The date and time the product was published.
  * _links [HATEOASLinks](#hateoaslinks)

### patchEcommerceStoresIdProductsId
Update a specific product.


```js
mailchimp.patchEcommerceStoresIdProductsId({
  "store_id": "",
  "product_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * store_id **required** `string`: The store id.
  * product_id **required** `string`: The id for the product of a store.
  * body **required** `object`: Information about a specific product.
    * title `string`: The title of a product.
    * handle `string`: The handle of a product.
    * url `string`: The URL for a product.
    * description `string`: The description of a product.
    * type `string`: The type of product.
    * vendor `string`: The vendor for a product.
    * image_url `string`: The image URL for a product.
    * variants `array`: An array of the product's variants. At least one variant is required for each product. A variant can use the same `id` and `title` as the parent product.
      * items `object`: Information about a specific product variant.
        * title `string`: The title of a product variant.
        * url `string`: The URL for a product variant.
        * sku `string`: The stock keeping unit (SKU) of a product variant.
        * price `number`: The price of a product variant.
        * inventory_quantity `integer`: The inventory quantity of a product variant.
        * image_url `string`: The image URL for a product variant.
        * backorders `string`: The backorders of a product variant.
        * visibility `string`: The visibility of a product variant.
    * images `array`: An array of the product's images.
      * items `object`: Information about a specific product image.
        * id `string`: A unique identifier for the product image.
        * url `string`: The URL for a product image.
        * variant_ids `array`: The list of product variants using the image.
    * published_at_foreign `string`: The date and time the product was published.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: Information about a specific product.
  * id `string`: A unique identifier for the product.
  * title `string`: The title of a product.
  * handle `string`: The handle of a product.
  * url `string`: The URL for a product.
  * description `string`: The description of a product.
  * type `string`: The type of product.
  * vendor `string`: The vendor for a product.
  * image_url `string`: The image URL for a product.
  * variants `array`: An array of the product's variants.
    * items `object`: Information about a specific product variant.
      * id `string`: A unique identifier for the product variant.
      * title `string`: The title of a product variant.
      * url `string`: The URL for a product variant.
      * sku `string`: The stock keeping unit (SKU) of a product variant.
      * price `number`: The price of a product variant.
      * inventory_quantity `integer`: The inventory quantity of a product variant.
      * image_url `string`: The image URL for a product variant.
      * backorders `string`: The backorders of a product variant.
      * visibility `string`: The visibility of a product variant.
      * created_at `string`: The date and time the product was created.
      * updated_at `string`: The date and time the product was last updated.
      * _links [HATEOASLinks](#hateoaslinks)
  * images `array`: An array of the product's images.
    * items `object`: Information about a specific product image.
      * id `string`: A unique identifier for the product image.
      * url `string`: The URL for a product image.
      * variant_ids `array`: The list of product variants using the image.
      * _links [HATEOASLinks](#hateoaslinks)
  * published_at_foreign `string`: The date and time the product was published.
  * _links [HATEOASLinks](#hateoaslinks)

### deleteEcommerceStoresIdProductsId
Delete a product.


```js
mailchimp.deleteEcommerceStoresIdProductsId({
  "store_id": "",
  "product_id": ""
}, context)
```

#### Input
* input `object`
  * store_id **required** `string`: The store id.
  * product_id **required** `string`: The id for the product of a store.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
*Output schema unknown*

### getEcommerceStoresIdProductsIdVariants
Get information about a product's variants.


```js
mailchimp.getEcommerceStoresIdProductsIdVariants({
  "store_id": "",
  "product_id": ""
}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * count `integer`: The number of records to return. [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **10**.
  * offset `integer`: The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **0**.
  * store_id **required** `string`: The store id.
  * product_id **required** `string`: The id for the product of a store.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: A collection of a product's variants.
  * store_id `string`: The store id.
  * product_id `string`: The product id.
  * variants `array`: An array of objects, each representing a product's variants.
    * items `object`: Information about a specific product variant.
      * id `string`: A unique identifier for the product variant.
      * title `string`: The title of a product variant.
      * url `string`: The URL for a product variant.
      * sku `string`: The stock keeping unit (SKU) of a product variant.
      * price `number`: The price of a product variant.
      * inventory_quantity `integer`: The inventory quantity of a product variant.
      * image_url `string`: The image URL for a product variant.
      * backorders `string`: The backorders of a product variant.
      * visibility `string`: The visibility of a product variant.
      * created_at `string`: The date and time the product was created.
      * updated_at `string`: The date and time the product was last updated.
      * _links [HATEOASLinks](#hateoaslinks)
  * total_items [CollectionTotal](#collectiontotal)
  * _links [HATEOASLinks](#hateoaslinks)

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

#### Input
* input `object`
  * store_id **required** `string`: The store id.
  * product_id **required** `string`: The id for the product of a store.
  * body **required** `object`: Information about a specific product variant.
    * id **required** `string`: A unique identifier for the product variant.
    * title **required** `string`: The title of a product variant.
    * url `string`: The URL for a product variant.
    * sku `string`: The stock keeping unit (SKU) of a product variant.
    * price `number`: The price of a product variant.
    * inventory_quantity `integer`: The inventory quantity of a product variant.
    * image_url `string`: The image URL for a product variant.
    * backorders `string`: The backorders of a product variant.
    * visibility `string`: The visibility of a product variant.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: Information about a specific product variant.
  * id `string`: A unique identifier for the product variant.
  * title `string`: The title of a product variant.
  * url `string`: The URL for a product variant.
  * sku `string`: The stock keeping unit (SKU) of a product variant.
  * price `number`: The price of a product variant.
  * inventory_quantity `integer`: The inventory quantity of a product variant.
  * image_url `string`: The image URL for a product variant.
  * backorders `string`: The backorders of a product variant.
  * visibility `string`: The visibility of a product variant.
  * created_at `string`: The date and time the product was created.
  * updated_at `string`: The date and time the product was last updated.
  * _links [HATEOASLinks](#hateoaslinks)

### getEcommerceStoresIdProductsIdVariantsId
Get information about a specific product variant.


```js
mailchimp.getEcommerceStoresIdProductsIdVariantsId({
  "store_id": "",
  "product_id": "",
  "variant_id": ""
}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * store_id **required** `string`: The store id.
  * product_id **required** `string`: The id for the product of a store.
  * variant_id **required** `string`: The id for the product variant.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: Information about a specific product variant.
  * id `string`: A unique identifier for the product variant.
  * title `string`: The title of a product variant.
  * url `string`: The URL for a product variant.
  * sku `string`: The stock keeping unit (SKU) of a product variant.
  * price `number`: The price of a product variant.
  * inventory_quantity `integer`: The inventory quantity of a product variant.
  * image_url `string`: The image URL for a product variant.
  * backorders `string`: The backorders of a product variant.
  * visibility `string`: The visibility of a product variant.
  * created_at `string`: The date and time the product was created.
  * updated_at `string`: The date and time the product was last updated.
  * _links [HATEOASLinks](#hateoaslinks)

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

#### Input
* input `object`
  * store_id **required** `string`: The store id.
  * product_id **required** `string`: The id for the product of a store.
  * variant_id **required** `string`: The id for the product variant.
  * body **required** `object`: Information about a specific product variant.
    * id **required** `string`: A unique identifier for the product variant.
    * title **required** `string`: The title of a product variant.
    * url `string`: The URL for a product variant.
    * sku `string`: The stock keeping unit (SKU) of a product variant.
    * price `number`: The price of a product variant.
    * inventory_quantity `integer`: The inventory quantity of a product variant.
    * image_url `string`: The image URL for a product variant.
    * backorders `string`: The backorders of a product variant.
    * visibility `string`: The visibility of a product variant.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: Information about a specific product variant.
  * id `string`: A unique identifier for the product variant.
  * title `string`: The title of a product variant.
  * url `string`: The URL for a product variant.
  * sku `string`: The stock keeping unit (SKU) of a product variant.
  * price `number`: The price of a product variant.
  * inventory_quantity `integer`: The inventory quantity of a product variant.
  * image_url `string`: The image URL for a product variant.
  * backorders `string`: The backorders of a product variant.
  * visibility `string`: The visibility of a product variant.
  * created_at `string`: The date and time the product was created.
  * updated_at `string`: The date and time the product was last updated.
  * _links [HATEOASLinks](#hateoaslinks)

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

#### Input
* input `object`
  * store_id **required** `string`: The store id.
  * product_id **required** `string`: The id for the product of a store.
  * variant_id **required** `string`: The id for the product variant.
  * body **required** `object`: Information about a specific product variant.
    * title `string`: The title of a product variant.
    * url `string`: The URL for a product variant.
    * sku `string`: The stock keeping unit (SKU) of a product variant.
    * price `number`: The price of a product variant.
    * inventory_quantity `integer`: The inventory quantity of a product variant.
    * image_url `string`: The image URL for a product variant.
    * backorders `string`: The backorders of a product variant.
    * visibility `string`: The visibility of a product variant.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: Information about a specific product variant.
  * id `string`: A unique identifier for the product variant.
  * title `string`: The title of a product variant.
  * url `string`: The URL for a product variant.
  * sku `string`: The stock keeping unit (SKU) of a product variant.
  * price `number`: The price of a product variant.
  * inventory_quantity `integer`: The inventory quantity of a product variant.
  * image_url `string`: The image URL for a product variant.
  * backorders `string`: The backorders of a product variant.
  * visibility `string`: The visibility of a product variant.
  * created_at `string`: The date and time the product was created.
  * updated_at `string`: The date and time the product was last updated.
  * _links [HATEOASLinks](#hateoaslinks)

### deleteEcommerceStoresIdProductsIdVariantsId
Delete a product variant.


```js
mailchimp.deleteEcommerceStoresIdProductsIdVariantsId({
  "store_id": "",
  "product_id": "",
  "variant_id": ""
}, context)
```

#### Input
* input `object`
  * store_id **required** `string`: The store id.
  * product_id **required** `string`: The id for the product of a store.
  * variant_id **required** `string`: The id for the product variant.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
*Output schema unknown*

### getEcommerceStoresIdProductsIdImages
Get information about a product's images.


```js
mailchimp.getEcommerceStoresIdProductsIdImages({
  "store_id": "",
  "product_id": ""
}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * count `integer`: The number of records to return. [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **10**.
  * offset `integer`: The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **0**.
  * store_id **required** `string`: The store id.
  * product_id **required** `string`: The id for the product of a store.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: A collection of a product's images.
  * store_id `string`: The store id.
  * product_id `string`: The product id.
  * images `array`: An array of objects, each representing a product image resource.
    * items `object`: Information about a specific product image.
      * id `string`: A unique identifier for the product image.
      * url `string`: The URL for a product image.
      * variant_ids `array`: The list of product variants using the image.
      * _links [HATEOASLinks](#hateoaslinks)
  * total_items [CollectionTotal](#collectiontotal)
  * _links [HATEOASLinks](#hateoaslinks)

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

#### Input
* input `object`
  * store_id **required** `string`: The store id.
  * product_id **required** `string`: The id for the product of a store.
  * body **required** `object`: Information about a specific product image.
    * id **required** `string`: A unique identifier for the product image.
    * url **required** `string`: The URL for a product image.
    * variant_ids `array`: The list of product variants using the image.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: Information about a specific product image.
  * id `string`: A unique identifier for the product image.
  * url `string`: The URL for a product image.
  * variant_ids `array`: The list of product variants using the image.
  * _links [HATEOASLinks](#hateoaslinks)

### getEcommerceStoresIdProductsIdImagesId
Get information about a specific product image.


```js
mailchimp.getEcommerceStoresIdProductsIdImagesId({
  "store_id": "",
  "product_id": "",
  "image_id": ""
}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * store_id **required** `string`: The store id.
  * product_id **required** `string`: The id for the product of a store.
  * image_id **required** `string`: The id for the product image.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: Information about a specific product image.
  * id `string`: A unique identifier for the product image.
  * url `string`: The URL for a product image.
  * variant_ids `array`: The list of product variants using the image.
  * _links [HATEOASLinks](#hateoaslinks)

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

#### Input
* input `object`
  * store_id **required** `string`: The store id.
  * product_id **required** `string`: The id for the product of a store.
  * image_id **required** `string`: The id for the product image.
  * body **required** `object`: Information about a specific product image.
    * id `string`: A unique identifier for the product image.
    * url `string`: The URL for a product image.
    * variant_ids `array`: The list of product variants using the image.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: Information about a specific product image.
  * id `string`: A unique identifier for the product image.
  * url `string`: The URL for a product image.
  * variant_ids `array`: The list of product variants using the image.
  * _links [HATEOASLinks](#hateoaslinks)

### deleteEcommerceStoresIdProductsIdImagesId
Delete a product image.


```js
mailchimp.deleteEcommerceStoresIdProductsIdImagesId({
  "store_id": "",
  "product_id": "",
  "image_id": ""
}, context)
```

#### Input
* input `object`
  * store_id **required** `string`: The store id.
  * product_id **required** `string`: The id for the product of a store.
  * image_id **required** `string`: The id for the product image.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
*Output schema unknown*

### getSearchMembers
Search for list members. This search can be restricted to a specific list, or can be used to search across all lists in an account.


```js
mailchimp.getSearchMembers({
  "query": ""
}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * query **required** `string`: The search query used to filter results.
  * list_id `string`: The unique id for the list.
  * offset `integer`: The number of instances to skip from the beginning of the collection. [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **0**.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: Members found for given search term
  * exact_matches `object`: Exact matches of the provided search query.
    * members `array`: An array of objects, each representing a specific list member.
      * items `object`: Individuals who are currently or have been previously subscribed to this list, including members who have bounced or unsubscribed.
        * id `string`: The MD5 hash of the lowercase version of the list member's email address.
        * email_address `string`: Email address for a subscriber.
        * unique_email_id `string`: An identifier for the address across all of MailChimp.
        * email_type `string`: Type of email this member asked to get ('html' or 'text').
        * status `string` (values: subscribed, unsubscribed, cleaned, pending, transactional): Subscriber's current status.
        * unsubscribe_reason `string`: A subscriber's reason for unsubscribing.
        * merge_fields `object`: An individual merge var and value for a member.
        * interests `object`: The key of this object's properties is the ID of the interest in question.
        * stats `object`: Open and click rates for this subscriber.
          * avg_open_rate `number`: A subscriber's average open rate.
          * avg_click_rate `number`: A subscriber's average clickthrough rate.
        * ip_signup `string`: IP address the subscriber signed up from.
        * timestamp_signup `string`: The date and time the subscriber signed up for the list.
        * ip_opt `string`: The IP address the subscriber used to confirm their opt-in status.
        * timestamp_opt `string`: The date and time the subscribe confirmed their opt-in status.
        * member_rating `integer`: Star rating for this member, between 1 and 5.
        * last_changed `string`: The date and time the member's info was last changed.
        * language `string`: If set/detected, the [subscriber's language](http://kb.mailchimp.com/lists/managing-subscribers/view-and-edit-subscriber-languages?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
        * vip `boolean`: [VIP status](http://kb.mailchimp.com/lists/managing-subscribers/designate-and-send-to-vip-subscribers?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) for subscriber.
        * email_client `string`: The list member's email client.
        * location `object`: Subscriber location information.
          * latitude `number`: The location latitude.
          * longitude `number`: The location longitude.
          * gmtoff `integer`: The time difference in hours from GMT.
          * dstoff `integer`: The offset for timezones where daylight saving time is observed.
          * country_code `string`: The unique code for the location country.
          * timezone `string`: The timezone for the location.
        * last_note `object`: The most recent Note added about this member.
          * note_id `integer`: The note id.
          * created_at `string`: The date and time the note was created.
          * created_by `string`: The author of the note.
          * note `string`: The content of the note.
        * list_id `string`: The list id.
        * _links [HATEOASLinks](#hateoaslinks)
    * total_items [CollectionTotal](#collectiontotal)
  * full_search `object`: Partial matches of the provided search query.
    * members `array`: An array of objects, each representing a specific list member.
      * items `object`: Individuals who are currently or have been previously subscribed to this list, including members who have bounced or unsubscribed.
        * id `string`: The MD5 hash of the lowercase version of the list member's email address.
        * email_address `string`: Email address for a subscriber.
        * unique_email_id `string`: An identifier for the address across all of MailChimp.
        * email_type `string`: Type of email this member asked to get ('html' or 'text').
        * status `string` (values: subscribed, unsubscribed, cleaned, pending, transactional): Subscriber's current status.
        * unsubscribe_reason `string`: A subscriber's reason for unsubscribing.
        * merge_fields `object`: An individual merge var and value for a member.
        * interests `object`: The key of this object's properties is the ID of the interest in question.
        * stats `object`: Open and click rates for this subscriber.
          * avg_open_rate `number`: A subscriber's average open rate.
          * avg_click_rate `number`: A subscriber's average clickthrough rate.
        * ip_signup `string`: IP address the subscriber signed up from.
        * timestamp_signup `string`: The date and time the subscriber signed up for the list.
        * ip_opt `string`: The IP address the subscriber used to confirm their opt-in status.
        * timestamp_opt `string`: The date and time the subscribe confirmed their opt-in status.
        * member_rating `integer`: Star rating for this member, between 1 and 5.
        * last_changed `string`: The date and time the member's info was last changed.
        * language `string`: If set/detected, the [subscriber's language](http://kb.mailchimp.com/lists/managing-subscribers/view-and-edit-subscriber-languages?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
        * vip `boolean`: [VIP status](http://kb.mailchimp.com/lists/managing-subscribers/designate-and-send-to-vip-subscribers?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) for subscriber.
        * email_client `string`: The list member's email client.
        * location `object`: Subscriber location information.
          * latitude `number`: The location latitude.
          * longitude `number`: The location longitude.
          * gmtoff `integer`: The time difference in hours from GMT.
          * dstoff `integer`: The offset for timezones where daylight saving time is observed.
          * country_code `string`: The unique code for the location country.
          * timezone `string`: The timezone for the location.
        * last_note `object`: The most recent Note added about this member.
          * note_id `integer`: The note id.
          * created_at `string`: The date and time the note was created.
          * created_by `string`: The author of the note.
          * note `string`: The content of the note.
        * list_id `string`: The list id.
        * _links [HATEOASLinks](#hateoaslinks)
    * total_items [CollectionTotal](#collectiontotal)
  * _links [HATEOASLinks](#hateoaslinks)

### getSearchCampaigns
Search all campaigns for the specified query terms.


```js
mailchimp.getSearchCampaigns({
  "query": ""
}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
  * exclude_fields `array`: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
  * query **required** `string`: The search query used to filter results.
  * snip_start `string`: To have the match highlighted with something (like a strong HTML tag), both this and `snip_end` must be passed. This parameter has a 25-character limit.
  * snip_end `string`: To have the match highlighted with something (like a strong HTML tag), both this and `snip_start` must be passed. This parameter has a 25-character limit.
  * offset `integer`: The number of instances to skip from the beginning of the collection. [Default value](http://developer.mailchimp.com/documentation/mailchimp/guides/get-started-with-mailchimp-api-3/#pagination) is **0**.
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: Campaigns and Snippets found for given search term.
  * results `array`: An array of matching campaigns and snippets.
    * items `object`
      * campaign `object`: A summary of an individual campaign's settings and content.
        * id `string`: A string that uniquely identifies this campaign.
        * web_id `integer`: The ID used in the MailChimp web application. View this campaign in your MailChimp account at `https://{dc}.admin.mailchimp.com/campaigns/show/?id={web_id}`.
        * type [CampaignType](#campaigntype)
        * create_time `string`: The date and time the campaign was created.
        * archive_url `string`: The link to the campaign's archive version.
        * long_archive_url `string`: The original link to the campaign's archive version.
        * status [CampaignStatus](#campaignstatus)
        * emails_sent `integer`: The total number of emails sent for this campaign.
        * send_time `string`: The date and time a campaign was sent.
        * content_type `string`: How the campaign's content is put together ('template', 'drag_and_drop', 'html', 'url').
        * needs_block_refresh `boolean`: Determines if the campaign needs its blocks refreshed by opening the web-based campaign editor.
        * recipients `object`: List settings for the campaign.
          * list_id `string`: The unique list id.
          * list_name `string`: The name of the list.
          * segment_text `string`: A description of the [segment](http://kb.mailchimp.com/segments/how-to-use-groups-and-segments?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) used for the campaign. Formatted as a string marked up with HTML.
          * recipient_count `integer`: Count of the recipients on the associated list. Formatted as an integer.
          * segment_opts [SegmentationOptions](#segmentationoptions)
        * settings `object`: The settings for your campaign, including subject, from name, reply-to address, and more.
          * subject_line `string`: The subject line for the campaign.
          * preview_text `string`: The preview text for the campaign.
          * title `string`: The title of the campaign.
          * from_name `string`: The 'from' name on the campaign (not an email address).
          * reply_to `string`: The reply-to email address for the campaign.
          * use_conversation `boolean`: Use MailChimp Conversation feature to manage out-of-office replies.
          * to_name `string`: The campaign's custom 'To' name. Typically the first name [merge field](http://kb.mailchimp.com/merge-tags/using/getting-started-with-merge-tags?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
          * folder_id `string`: If the campaign is listed in a folder, the id for that folder.
          * authenticate `boolean`: Whether MailChimp [authenticated](http://kb.mailchimp.com/delivery/deliverability-research/set-up-mailchimp-authentication?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) the campaign. Defaults to `true`.
          * auto_footer `boolean`: Automatically append MailChimp's [default footer](http://kb.mailchimp.com/campaigns/design/theres-a-gray-footer-added-to-my-campaign?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) to the campaign.
          * inline_css `boolean`: Automatically inline the CSS included with the campaign content.
          * auto_tweet `boolean`: Automatically tweet a link to the [campaign archive](http://kb.mailchimp.com/campaigns/archives/set-up-your-campaign-archive?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) page when the campaign is sent.
          * auto_fb_post `array`: An array of [Facebook](http://kb.mailchimp.com/integrations/facebook/integrate-facebook-with-mailchimp?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) page ids to auto-post to.
            * items `string`
          * fb_comments `boolean`: Allows Facebook comments on the campaign (also force-enables the Campaign Archive toolbar). Defaults to `true`.
          * timewarp `boolean`: Send this campaign using [Timewarp](http://kb.mailchimp.com/campaigns/confirmation-and-sending/use-timewarp-to-optimize-sending-by-time-zone?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
          * template_id `integer`: The id for the template used in this campaign.
          * drag_and_drop `boolean`: Whether the campaign uses the drag-and-drop editor.
        * variate_settings `object`: The settings specific to A/B test campaigns.
          * winning_combination_id `string`: ID for the winning combination.
          * winning_campaign_id `string`: ID of the campaign that was sent to the remaining recipients based on the winning combination.
          * winner_criteria `string` (values: opens, clicks, manual, total_revenue): The combination that performs the best. This may be determined automatically by click rate, open rate, or total revenue—or you may choose manually based on the reporting data you find the most valuable. For Multivariate Campaigns testing send_time, winner_criteria is ignored. For Multivariate Campaigns with 'manual' as the winner_criteria, the winner must be chosen in the MailChimp web application.
          * wait_time `integer`: The number of minutes to wait before choosing the winning campaign. The value of wait_time must be greater than 0 and in whole hours, specified in minutes.
          * test_size `integer`: The percentage of recipients to send the test combinations to, must be a value between 10 and 100.
          * subject_lines `array`: The possible subject lines to test. If no subject lines are provided, settings.subject_line will be used.
            * items `string`
          * send_times `array`: The possible send times to test. The times provided should be in the format YYYY-MM-DD HH:MM:SS. If send_times are provided to test, the test_size will be set to 100% and winner_criteria will be ignored.
            * items `string`
          * from_names `array`: The possible from names. The number of from_names provided must match the number of reply_to_addresses. If no from_names are provided, settings.from_name will be used.
            * items `string`
          * reply_to_addresses `array`: The possible reply-to addresses. The number of reply_to_addresses provided must match the number of from_names. If no reply_to_addresses are provided, settings.reply_to will be used.
            * items `string`
          * contents `array`: Descriptions of possible email contents. To set campaign contents, make a PUT request to /campaigns/{campaign_id}/content with the field 'variate_contents'.
            * items `string`
          * combinations `array`: Combinations of possible variables used to build emails.
            * items `object`
              * id `string`: Unique ID for the combination.
              * subject_line `integer`: The index of `variate_settings.subject_lines` used.
              * send_time `integer`: The index of `variate_settings.send_times` used.
              * from_name `integer`: The index of `variate_settings.from_names` used.
              * reply_to `integer`: The index of `variate_settings.reply_to_addresses` used.
              * content_description `integer`: The index of `variate_settings.contents` used.
              * recipients `integer`: The number of recipients for this combination.
        * tracking `object`: The tracking options for a campaign.
          * opens `boolean`: Whether to [track opens](http://kb.mailchimp.com/reports/about-open-tracking?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs). Defaults to `true`. Cannot be set to false for variate campaigns.
          * html_clicks `boolean`: Whether to [track clicks](http://kb.mailchimp.com/reports/about-click-tracking?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) in the HTML version of the campaign. Defaults to `true`. Cannot be set to false for variate campaigns.
          * text_clicks `boolean`: Whether to [track clicks](http://kb.mailchimp.com/reports/about-click-tracking?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) in the plain-text version of the campaign. Defaults to `true`. Cannot be set to false for variate campaigns.
          * goal_tracking `boolean`: Whether to enable [Goal](http://kb.mailchimp.com/integrations/other-integrations/integrate-goal-with-mailchimp?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) tracking.
          * ecomm360 `boolean`: Whether to enable [eCommerce360](http://kb.mailchimp.com/integrations/other-integrations/about-ecommerce360?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) tracking.
          * google_analytics `string`: The custom slug for [Google Analytics](http://kb.mailchimp.com/integrations/other-integrations/integrate-google-analytics-with-mailchimp?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) tracking (max of 50 bytes).
          * clicktale `string`: The custom slug for [ClickTale](http://kb.mailchimp.com/integrations/other-integrations/additional-tracking-options-for-campaigns?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs#Click-Tale) tracking (max of 50 bytes).
          * salesforce `object`: Salesforce tracking options for a campaign. Must be using MailChimp's built-in [Salesforce integration](http://kb.mailchimp.com/integrations/other-integrations/integrate-salesforce-with-mailchimp?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
            * campaign `boolean`: Create a campaign in a connected Salesforce account.
            * notes `boolean`: Update contact notes for a campaign based on subscriber email addresses.
          * capsule `object`: Capsule tracking options for a campaign. Must be using MailChimp's built-in Capsule integration.
            * notes `boolean`: Update contact notes for a campaign based on subscriber email addresses.
        * rss_opts `object`: [RSS](http://kb.mailchimp.com/campaigns/rss-in-campaigns/create-an-rss-campaign?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) options for a campaign.
          * feed_url `string`: The URL for the RSS feed.
          * frequency `string` (values: daily, weekly, monthly): The frequency of the RSS Campaign.
          * schedule `object`: The schedule for sending the RSS Campaign.
            * hour `integer`: The hour to send the campaign in local time. Acceptable hours are 0-23. For example, '4' would be 4am in [your account's default time zone](http://kb.mailchimp.com/accounts/account-setup/how-to-set-account-defaults?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
            * daily_send `object`: The days of the week to send a daily RSS Campaign.
              * sunday `boolean`: Sends the daily RSS Campaign on Sundays.
              * monday `boolean`: Sends the daily RSS Campaign on Mondays.
              * tuesday `boolean`: Sends the daily RSS Campaign on Tuesdays.
              * wednesday `boolean`: Sends the daily RSS Campaign on Wednesdays.
              * thursday `boolean`: Sends the daily RSS Campaign on Thursdays.
              * friday `boolean`: Sends the daily RSS Campaign on Fridays.
              * saturday `boolean`: Sends the daily RSS Campaign on Saturdays.
            * weekly_send_day `string` (values: sunday, monday, tuesday, wednesday, thursday, friday, saturday): The day of the week to send a weekly RSS Campaign.
            * monthly_send_date `number`: The day of the month to send a monthly RSS Campaign. Acceptable days are 0-31, where '0' is always the last day of a month. Months with fewer than the selected number of days will not have an RSS campaign sent out that day. For example, RSS Campaigns set to send on the 30th will not go out in February.
          * last_sent `string`: The date the campaign was last sent.
          * constrain_rss_img `boolean`: Whether to add CSS to images in the RSS feed to constrain their width in campaigns.
        * ab_split_opts `object`: [A/B Testing](http://kb.mailchimp.com/campaigns/ab/about-ab-testing-campaigns?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) options for a campaign.
          * split_test `string` (values: subject, from_name, schedule): The type of AB split to run.
          * pick_winner `string` (values: opens, clicks, manual): How we should evaluate a winner. Based on 'opens', 'clicks', or 'manual'.
          * wait_units `string` (values: hours, days): How unit of time for measuring the winner ('hours' or 'days'). This cannot be changed after a campaign is sent.
          * wait_time `integer`: The amount of time to wait before picking a winner. This cannot be changed after a campaign is sent.
          * split_size `integer`: The size of the split groups. Campaigns split based on 'schedule' are forced to have a 50/50 split. Valid split integers are between 1-50.
          * from_name_a `string`: For campaigns split on 'From Name', the name for Group A.
          * from_name_b `string`: For campaigns split on 'From Name', the name for Group B.
          * reply_email_a `string`: For campaigns split on 'From Name', the reply-to address for Group A.
          * reply_email_b `string`: For campaigns split on 'From Name', the reply-to address for Group B.
          * subject_a `string`: For campaigns split on 'Subject Line', the subject line for Group A.
          * subject_b `string`: For campaigns split on 'Subject Line', the subject line for Group B.
          * send_time_a `string`: The send time for Group A.
          * send_time_b `string`: The send time for Group B.
          * send_time_winner `string`: The send time for the winning version.
        * social_card `object`: The preview for the campaign, rendered by social networks like Facebook and Twitter. [Learn more](http://kb.mailchimp.com/campaigns/previews-and-tests/set-up-social-cards?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
          * image_url `string`: The url for the header image for the card.
          * description `string`: A short summary of the campaign to display.
          * title `string`: The title for the card. Typically the subject line of the campaign.
        * report_summary `object`: For sent campaigns, a summary of opens, clicks, and e-commerce data.
          * opens `integer`: The total number of opens for a campaign.
          * unique_opens `integer`: The number of unique opens.
          * open_rate `number`: The number of unique opens divided by the total number of successful deliveries.
          * clicks `integer`: The total number of clicks for an campaign.
          * subscriber_clicks `integer`: The number of unique clicks.
          * click_rate `number`: The number of unique clicks divided by the total number of successful deliveries.
          * ecommerce `object`: E-Commerce stats for a campaign.
            * total_orders `integer`: The total orders for a campaign.
            * total_spent `number`: The total spent for a campaign. Calculated as the sum of all order totals with no deductions.
            * total_revenue `number`: The total revenue for a campaign. Calculated as the sum of all order totals minus shipping and tax totals.
        * delivery_status [DeliveryStatus](#deliverystatus)
        * _links [HATEOASLinks](#hateoaslinks)
      * snippet `string`
  * total_items [CollectionTotal](#collectiontotal)
  * _links [HATEOASLinks](#hateoaslinks)

### getPing
A health check for the API that won't return any account-specific information.


```js
mailchimp.getPing({}, context)
```

#### Input
* input `object`
  * dc `string`: `dc` corresponds to the data center for your account. For example, if the last part of your MailChimp API key is us6, set `dc` to `"us6"`

#### Output
* output `object`: API health status.
  * health_status `string`: This will return a constant string value if the request is successful. Ex. "Everything's Chimpy!"



## Definitions

### SegmentCondition
* Segment Condition `object`: A summary of segmenting conditions.
  * condition_type **required** `string` (values: Aim, Automation, CampaignPoll, Conversation, Date, EmailClient, Language, Mandrill, MemberRating, SignupSource, SurveyMonkey, VIP, Interests, EcommCategory, EcommNumber, EcommPurchased, EcommSpent, EcommStore, GoalActivity, GoalTimestamp, FuzzySegment, StaticSegment, IPGeoCountryState, IPGeoIn, IPGeoInZip, IPGeoUnknown, IPGeoZip, SocialAge, SocialGender, SocialInfluence, SocialNetworkMember, SocialNetworkFollow, AddressMerge, ZipMerge, BirthdayMerge, DateMerge, TextMerge, SelectMerge, EmailAddress): The type of segment, for example: date, language, Mandrill, static, and more.
  * field **required** `string`: The field to segment on.
  * op **required** `string`: The segment operator.

### AddressMergeSegment
* Address/Zip Merge Field Segment `object`: An individual segment condition.
  * condition_type **required** `string` (values: Aim, Automation, CampaignPoll, Conversation, Date, EmailClient, Language, Mandrill, MemberRating, SignupSource, SurveyMonkey, VIP, Interests, EcommCategory, EcommNumber, EcommPurchased, EcommSpent, EcommStore, GoalActivity, GoalTimestamp, FuzzySegment, StaticSegment, IPGeoCountryState, IPGeoIn, IPGeoInZip, IPGeoUnknown, IPGeoZip, SocialAge, SocialGender, SocialInfluence, SocialNetworkMember, SocialNetworkFollow, AddressMerge, ZipMerge, BirthdayMerge, DateMerge, TextMerge, SelectMerge, EmailAddress): The type of segment, for example: date, language, Mandrill, static, and more.
  * field **required** `string`: The field to segment on.
  * op **required** `string`: The segment operator.
  * field `string`: The address merge segment field.
  * op `string` (values: contains, notcontain, blank, blank_not): Whether the segment value contains, doesn't contain, is blank, or isn't blank.
  * value `string`: The value to compare.

### AimSegment
* Automation Segment `object`: An individual segment condition.
  * condition_type **required** `string` (values: Aim, Automation, CampaignPoll, Conversation, Date, EmailClient, Language, Mandrill, MemberRating, SignupSource, SurveyMonkey, VIP, Interests, EcommCategory, EcommNumber, EcommPurchased, EcommSpent, EcommStore, GoalActivity, GoalTimestamp, FuzzySegment, StaticSegment, IPGeoCountryState, IPGeoIn, IPGeoInZip, IPGeoUnknown, IPGeoZip, SocialAge, SocialGender, SocialInfluence, SocialNetworkMember, SocialNetworkFollow, AddressMerge, ZipMerge, BirthdayMerge, DateMerge, TextMerge, SelectMerge, EmailAddress): The type of segment, for example: date, language, Mandrill, static, and more.
  * field **required** `string`: The field to segment on.
  * op **required** `string`: The segment operator.
  * field `string` (values: aim): The segment field, 'aim'.
  * op `string` (values: open, click, sent, noopen, noclick, nosent): The member's status, based on their campaign interaction.
  * value `string`: Either the web id value for a specific campaign or 'any' to account for subscribers who have or have not interacted with any campaigns.

### AutomationSegment
* Automation Segment `object`: An individual segment condition.
  * condition_type **required** `string` (values: Aim, Automation, CampaignPoll, Conversation, Date, EmailClient, Language, Mandrill, MemberRating, SignupSource, SurveyMonkey, VIP, Interests, EcommCategory, EcommNumber, EcommPurchased, EcommSpent, EcommStore, GoalActivity, GoalTimestamp, FuzzySegment, StaticSegment, IPGeoCountryState, IPGeoIn, IPGeoInZip, IPGeoUnknown, IPGeoZip, SocialAge, SocialGender, SocialInfluence, SocialNetworkMember, SocialNetworkFollow, AddressMerge, ZipMerge, BirthdayMerge, DateMerge, TextMerge, SelectMerge, EmailAddress): The type of segment, for example: date, language, Mandrill, static, and more.
  * field **required** `string`: The field to segment on.
  * op **required** `string`: The segment operator.
  * field `string` (values: automation): The field to segment on.
  * op `string` (values: started, completed, not_started, not_completed): The member's status, based on where they are in an Automation workflow.
  * value `string`: The web id for the Automation workflow to segment on.

### BirthdayMergeSegment
* Birthday Merge Field Segment `object`: An individual segment condition.
  * condition_type **required** `string` (values: Aim, Automation, CampaignPoll, Conversation, Date, EmailClient, Language, Mandrill, MemberRating, SignupSource, SurveyMonkey, VIP, Interests, EcommCategory, EcommNumber, EcommPurchased, EcommSpent, EcommStore, GoalActivity, GoalTimestamp, FuzzySegment, StaticSegment, IPGeoCountryState, IPGeoIn, IPGeoInZip, IPGeoUnknown, IPGeoZip, SocialAge, SocialGender, SocialInfluence, SocialNetworkMember, SocialNetworkFollow, AddressMerge, ZipMerge, BirthdayMerge, DateMerge, TextMerge, SelectMerge, EmailAddress): The type of segment, for example: date, language, Mandrill, static, and more.
  * field **required** `string`: The field to segment on.
  * op **required** `string`: The segment operator.
  * field `string`: The birthday merge segment field.
  * op `string` (values: is, not, blank, blank_not): Whether the segment value matches exactly, doesn't match, is blank, or isn't blank.
  * value `string`: The value to compare.

### CampaignPollSegment
* Poll Activity Segment `object`: An individual segment condition.
  * condition_type **required** `string` (values: Aim, Automation, CampaignPoll, Conversation, Date, EmailClient, Language, Mandrill, MemberRating, SignupSource, SurveyMonkey, VIP, Interests, EcommCategory, EcommNumber, EcommPurchased, EcommSpent, EcommStore, GoalActivity, GoalTimestamp, FuzzySegment, StaticSegment, IPGeoCountryState, IPGeoIn, IPGeoInZip, IPGeoUnknown, IPGeoZip, SocialAge, SocialGender, SocialInfluence, SocialNetworkMember, SocialNetworkFollow, AddressMerge, ZipMerge, BirthdayMerge, DateMerge, TextMerge, SelectMerge, EmailAddress): The type of segment, for example: date, language, Mandrill, static, and more.
  * field **required** `string`: The field to segment on.
  * op **required** `string`: The segment operator.
  * field `string` (values: poll): The field to segment on.
  * op `string` (values: member, notmember): Members who have or have not interacted with a specific poll in a MailChimp email.
  * value `number`: The id for the poll.

### ConversationSegment
* Automation Segment `object`: An individual segment condition.
  * condition_type **required** `string` (values: Aim, Automation, CampaignPoll, Conversation, Date, EmailClient, Language, Mandrill, MemberRating, SignupSource, SurveyMonkey, VIP, Interests, EcommCategory, EcommNumber, EcommPurchased, EcommSpent, EcommStore, GoalActivity, GoalTimestamp, FuzzySegment, StaticSegment, IPGeoCountryState, IPGeoIn, IPGeoInZip, IPGeoUnknown, IPGeoZip, SocialAge, SocialGender, SocialInfluence, SocialNetworkMember, SocialNetworkFollow, AddressMerge, ZipMerge, BirthdayMerge, DateMerge, TextMerge, SelectMerge, EmailAddress): The type of segment, for example: date, language, Mandrill, static, and more.
  * field **required** `string`: The field to segment on.
  * op **required** `string`: The segment operator.
  * field `string` (values: conversation): The field to segment on.
  * op `string` (values: member, notmember): The status of a member's interaction with a conversation.
  * value `string`: The web id value for a specific campaign, or 'any' to account for subscribers who have or have not interacted with any campaigns.

### CountryStateSegment
* Location-Based Segment `object`: An individual segment condition.
  * condition_type **required** `string` (values: Aim, Automation, CampaignPoll, Conversation, Date, EmailClient, Language, Mandrill, MemberRating, SignupSource, SurveyMonkey, VIP, Interests, EcommCategory, EcommNumber, EcommPurchased, EcommSpent, EcommStore, GoalActivity, GoalTimestamp, FuzzySegment, StaticSegment, IPGeoCountryState, IPGeoIn, IPGeoInZip, IPGeoUnknown, IPGeoZip, SocialAge, SocialGender, SocialInfluence, SocialNetworkMember, SocialNetworkFollow, AddressMerge, ZipMerge, BirthdayMerge, DateMerge, TextMerge, SelectMerge, EmailAddress): The type of segment, for example: date, language, Mandrill, static, and more.
  * field **required** `string`: The field to segment on.
  * op **required** `string`: The segment operator.
  * field `string` (values: ipgeo): The field to segment on.
  * op `string` (values: ipgeocountry, ipgeonotcountry, ipgeostate, ipgeonotstate): Segment members who are in a specific country or US state.
  * value `string`: The two-letter country code or US state abbreviation.

### DateMergeSegment
* Date Merge Field Segment `object`: An individual segment condition.
  * condition_type **required** `string` (values: Aim, Automation, CampaignPoll, Conversation, Date, EmailClient, Language, Mandrill, MemberRating, SignupSource, SurveyMonkey, VIP, Interests, EcommCategory, EcommNumber, EcommPurchased, EcommSpent, EcommStore, GoalActivity, GoalTimestamp, FuzzySegment, StaticSegment, IPGeoCountryState, IPGeoIn, IPGeoInZip, IPGeoUnknown, IPGeoZip, SocialAge, SocialGender, SocialInfluence, SocialNetworkMember, SocialNetworkFollow, AddressMerge, ZipMerge, BirthdayMerge, DateMerge, TextMerge, SelectMerge, EmailAddress): The type of segment, for example: date, language, Mandrill, static, and more.
  * field **required** `string`: The field to segment on.
  * op **required** `string`: The segment operator.
  * field `string`: The date merge segment field.
  * op `string` (values: is, not, less, blank, blank_not): Whether the segment value matches exactly, doesn't match, is blank, or isn't blank.
  * value `string`: The value to compare.

### DateSegment
* Date Segment `object`: An individual segment condition.
  * condition_type **required** `string` (values: Aim, Automation, CampaignPoll, Conversation, Date, EmailClient, Language, Mandrill, MemberRating, SignupSource, SurveyMonkey, VIP, Interests, EcommCategory, EcommNumber, EcommPurchased, EcommSpent, EcommStore, GoalActivity, GoalTimestamp, FuzzySegment, StaticSegment, IPGeoCountryState, IPGeoIn, IPGeoInZip, IPGeoUnknown, IPGeoZip, SocialAge, SocialGender, SocialInfluence, SocialNetworkMember, SocialNetworkFollow, AddressMerge, ZipMerge, BirthdayMerge, DateMerge, TextMerge, SelectMerge, EmailAddress): The type of segment, for example: date, language, Mandrill, static, and more.
  * field **required** `string`: The field to segment on.
  * op **required** `string`: The segment operator.
  * field `string` (values: timestamp_opt, info_changed, ecomm_date): The date segment field.
  * op `string` (values: greater, less, is, not, blank, blank_not): When the event took place.
  * value `string` (values: date, campaign, last): What type of data to segment on: a specific date, a specific campaign, or the last campaign sent.
  * extra `string`: When segmenting on 'date' or 'campaign', the date for the segment formatted as YYYY-MM-DD or the web id for the campaign.

### EcommCategorySegment
* Ecomm Category Segment `object`: An individual segment condition.
  * condition_type **required** `string` (values: Aim, Automation, CampaignPoll, Conversation, Date, EmailClient, Language, Mandrill, MemberRating, SignupSource, SurveyMonkey, VIP, Interests, EcommCategory, EcommNumber, EcommPurchased, EcommSpent, EcommStore, GoalActivity, GoalTimestamp, FuzzySegment, StaticSegment, IPGeoCountryState, IPGeoIn, IPGeoInZip, IPGeoUnknown, IPGeoZip, SocialAge, SocialGender, SocialInfluence, SocialNetworkMember, SocialNetworkFollow, AddressMerge, ZipMerge, BirthdayMerge, DateMerge, TextMerge, SelectMerge, EmailAddress): The type of segment, for example: date, language, Mandrill, static, and more.
  * field **required** `string`: The field to segment on.
  * op **required** `string`: The segment operator.
  * op `string` (values: is, not, contains, notcontain, starts, ends): A member who has purchased from a category or purchased a specific item.
  * field `string` (values: ecomm_cat, ecomm_prod): The e-commerce category or product segment field.
  * value `string`: The e-commerce category or item information.

### EcommNumberSegment
* Ecomm Purchased Segment `object`: An individual segment condition.
  * condition_type **required** `string` (values: Aim, Automation, CampaignPoll, Conversation, Date, EmailClient, Language, Mandrill, MemberRating, SignupSource, SurveyMonkey, VIP, Interests, EcommCategory, EcommNumber, EcommPurchased, EcommSpent, EcommStore, GoalActivity, GoalTimestamp, FuzzySegment, StaticSegment, IPGeoCountryState, IPGeoIn, IPGeoInZip, IPGeoUnknown, IPGeoZip, SocialAge, SocialGender, SocialInfluence, SocialNetworkMember, SocialNetworkFollow, AddressMerge, ZipMerge, BirthdayMerge, DateMerge, TextMerge, SelectMerge, EmailAddress): The type of segment, for example: date, language, Mandrill, static, and more.
  * field **required** `string`: The field to segment on.
  * op **required** `string`: The segment operator.
  * field `string` (values: ecomm_spent_avg, ecomm_orders, ecomm_prod_all, ecomm_avg_ord): The e-commerce number field to segment on.
  * op `string` (values: is, not, greater, less): Members who have spent exactly, have not spent exactly, spent more, or spent less than the segment value.
  * value `number`: Members who have spent exactly, have not spent exactly, spent more, or spent less than this amount.

### EcommPurchasedSegment
* Ecomm Purchased Segment `object`: An individual segment condition.
  * condition_type **required** `string` (values: Aim, Automation, CampaignPoll, Conversation, Date, EmailClient, Language, Mandrill, MemberRating, SignupSource, SurveyMonkey, VIP, Interests, EcommCategory, EcommNumber, EcommPurchased, EcommSpent, EcommStore, GoalActivity, GoalTimestamp, FuzzySegment, StaticSegment, IPGeoCountryState, IPGeoIn, IPGeoInZip, IPGeoUnknown, IPGeoZip, SocialAge, SocialGender, SocialInfluence, SocialNetworkMember, SocialNetworkFollow, AddressMerge, ZipMerge, BirthdayMerge, DateMerge, TextMerge, SelectMerge, EmailAddress): The type of segment, for example: date, language, Mandrill, static, and more.
  * field **required** `string`: The field to segment on.
  * op **required** `string`: The segment operator.
  * field `string` (values: ecomm_purchased): The e-commerce purchased field to segment on.
  * op `string` (values: member, notmember): Members who have have ('member') or have not ('notmember') purchased.

### EcommSpentSegment
* Ecomm Purchase Segment `object`: An individual segment condition.
  * condition_type **required** `string` (values: Aim, Automation, CampaignPoll, Conversation, Date, EmailClient, Language, Mandrill, MemberRating, SignupSource, SurveyMonkey, VIP, Interests, EcommCategory, EcommNumber, EcommPurchased, EcommSpent, EcommStore, GoalActivity, GoalTimestamp, FuzzySegment, StaticSegment, IPGeoCountryState, IPGeoIn, IPGeoInZip, IPGeoUnknown, IPGeoZip, SocialAge, SocialGender, SocialInfluence, SocialNetworkMember, SocialNetworkFollow, AddressMerge, ZipMerge, BirthdayMerge, DateMerge, TextMerge, SelectMerge, EmailAddress): The type of segment, for example: date, language, Mandrill, static, and more.
  * field **required** `string`: The field to segment on.
  * op **required** `string`: The segment operator.
  * field `string` (values: ecomm_spent_one, ecomm_spent_all): The e-commerce spent field to segment on.
  * op `string` (values: greater, less): Members who have spent more or less than the set value.
  * value `integer`: The total amount a member spent.

### EcommStoreSegment
* Ecomm Purchased Store Segment `object`: An individual segment condition.
  * condition_type **required** `string` (values: Aim, Automation, CampaignPoll, Conversation, Date, EmailClient, Language, Mandrill, MemberRating, SignupSource, SurveyMonkey, VIP, Interests, EcommCategory, EcommNumber, EcommPurchased, EcommSpent, EcommStore, GoalActivity, GoalTimestamp, FuzzySegment, StaticSegment, IPGeoCountryState, IPGeoIn, IPGeoInZip, IPGeoUnknown, IPGeoZip, SocialAge, SocialGender, SocialInfluence, SocialNetworkMember, SocialNetworkFollow, AddressMerge, ZipMerge, BirthdayMerge, DateMerge, TextMerge, SelectMerge, EmailAddress): The type of segment, for example: date, language, Mandrill, static, and more.
  * field **required** `string`: The field to segment on.
  * op **required** `string`: The segment operator.
  * field `string` (values: ecomm_store): The e-commerce store field to segment on.
  * op `string` (values: is, not): Members who have or have not purchased from a specific store.
  * value `string`: The store id to segment on.

### EmailClientSegment
* Automation Segment `object`: An individual segment condition.
  * condition_type **required** `string` (values: Aim, Automation, CampaignPoll, Conversation, Date, EmailClient, Language, Mandrill, MemberRating, SignupSource, SurveyMonkey, VIP, Interests, EcommCategory, EcommNumber, EcommPurchased, EcommSpent, EcommStore, GoalActivity, GoalTimestamp, FuzzySegment, StaticSegment, IPGeoCountryState, IPGeoIn, IPGeoInZip, IPGeoUnknown, IPGeoZip, SocialAge, SocialGender, SocialInfluence, SocialNetworkMember, SocialNetworkFollow, AddressMerge, ZipMerge, BirthdayMerge, DateMerge, TextMerge, SelectMerge, EmailAddress): The type of segment, for example: date, language, Mandrill, static, and more.
  * field **required** `string`: The field to segment on.
  * op **required** `string`: The segment operator.
  * field `string` (values: email_client): The field to segment on.
  * op `string` (values: client_is, client_not): A member's status, based on their campaign interactions.
  * value `string`: The name of the email client.

### EmailSegment
* Email Segment `object`: An individual segment condition.
  * condition_type **required** `string` (values: Aim, Automation, CampaignPoll, Conversation, Date, EmailClient, Language, Mandrill, MemberRating, SignupSource, SurveyMonkey, VIP, Interests, EcommCategory, EcommNumber, EcommPurchased, EcommSpent, EcommStore, GoalActivity, GoalTimestamp, FuzzySegment, StaticSegment, IPGeoCountryState, IPGeoIn, IPGeoInZip, IPGeoUnknown, IPGeoZip, SocialAge, SocialGender, SocialInfluence, SocialNetworkMember, SocialNetworkFollow, AddressMerge, ZipMerge, BirthdayMerge, DateMerge, TextMerge, SelectMerge, EmailAddress): The type of segment, for example: date, language, Mandrill, static, and more.
  * field **required** `string`: The field to segment on.
  * op **required** `string`: The segment operator.
  * field `string` (values: merge0, EMAIL): The segment field, one of 'merge0' or 'EMAIL'.
  * op `string` (values: is, not, contains, notcontain, starts, ends, greater, less): Whether the email address is/not exactly, contains/doesn't contain, starts/ends with a string.
  * value `string`: The value to compare the email against.

### FuzzySegment
* Similar Subscribers Segment Member Segment `object`: An individual segment condition.
  * condition_type **required** `string` (values: Aim, Automation, CampaignPoll, Conversation, Date, EmailClient, Language, Mandrill, MemberRating, SignupSource, SurveyMonkey, VIP, Interests, EcommCategory, EcommNumber, EcommPurchased, EcommSpent, EcommStore, GoalActivity, GoalTimestamp, FuzzySegment, StaticSegment, IPGeoCountryState, IPGeoIn, IPGeoInZip, IPGeoUnknown, IPGeoZip, SocialAge, SocialGender, SocialInfluence, SocialNetworkMember, SocialNetworkFollow, AddressMerge, ZipMerge, BirthdayMerge, DateMerge, TextMerge, SelectMerge, EmailAddress): The type of segment, for example: date, language, Mandrill, static, and more.
  * field **required** `string`: The field to segment on.
  * op **required** `string`: The segment operator.
  * field `string` (values: fuzzy_segment): The fuzzy segment field.
  * op `string` (values: fuzzy_is, fuzzy_not): Members who are/are not apart of a 'similar subscribers' segment.
  * value `number`: The id for the 'similar subscribers' segment.

### GeoInSegment
* Geolocation Segment `object`: An individual segment condition.
  * condition_type **required** `string` (values: Aim, Automation, CampaignPoll, Conversation, Date, EmailClient, Language, Mandrill, MemberRating, SignupSource, SurveyMonkey, VIP, Interests, EcommCategory, EcommNumber, EcommPurchased, EcommSpent, EcommStore, GoalActivity, GoalTimestamp, FuzzySegment, StaticSegment, IPGeoCountryState, IPGeoIn, IPGeoInZip, IPGeoUnknown, IPGeoZip, SocialAge, SocialGender, SocialInfluence, SocialNetworkMember, SocialNetworkFollow, AddressMerge, ZipMerge, BirthdayMerge, DateMerge, TextMerge, SelectMerge, EmailAddress): The type of segment, for example: date, language, Mandrill, static, and more.
  * field **required** `string`: The field to segment on.
  * op **required** `string`: The segment operator.
  * field `string` (values: ipgeo): The field to segment on.
  * op `string` (values: ipgeoin, ipgeonotin): Segment members who are in a specific geographic region.
  * value `integer`: The radius of the target location.
  * addr `string`: The address of the target location.
  * lat `string`: The latitude of the target location.
  * lng `string`: The longitude of the target location.

### GoalActivitySegment
* Goal Activity Segment `object`: An individual segment condition.
  * condition_type **required** `string` (values: Aim, Automation, CampaignPoll, Conversation, Date, EmailClient, Language, Mandrill, MemberRating, SignupSource, SurveyMonkey, VIP, Interests, EcommCategory, EcommNumber, EcommPurchased, EcommSpent, EcommStore, GoalActivity, GoalTimestamp, FuzzySegment, StaticSegment, IPGeoCountryState, IPGeoIn, IPGeoInZip, IPGeoUnknown, IPGeoZip, SocialAge, SocialGender, SocialInfluence, SocialNetworkMember, SocialNetworkFollow, AddressMerge, ZipMerge, BirthdayMerge, DateMerge, TextMerge, SelectMerge, EmailAddress): The type of segment, for example: date, language, Mandrill, static, and more.
  * field **required** `string`: The field to segment on.
  * op **required** `string`: The segment operator.
  * field `string` (values: goal): The goal activity field to segment on.
  * op `string` (values: is, goal_not, contains, goal_notcontain, starts, ends): Whether the website URL is/not exactly, contains/doesn't contain, starts with/ends with a string.
  * value `string`: The URL to check Goal activity against.

### GoalTimeStampSegment
* Goal Timestamp Segment `object`: An individual segment condition.
  * condition_type **required** `string` (values: Aim, Automation, CampaignPoll, Conversation, Date, EmailClient, Language, Mandrill, MemberRating, SignupSource, SurveyMonkey, VIP, Interests, EcommCategory, EcommNumber, EcommPurchased, EcommSpent, EcommStore, GoalActivity, GoalTimestamp, FuzzySegment, StaticSegment, IPGeoCountryState, IPGeoIn, IPGeoInZip, IPGeoUnknown, IPGeoZip, SocialAge, SocialGender, SocialInfluence, SocialNetworkMember, SocialNetworkFollow, AddressMerge, ZipMerge, BirthdayMerge, DateMerge, TextMerge, SelectMerge, EmailAddress): The type of segment, for example: date, language, Mandrill, static, and more.
  * field **required** `string`: The field to segment on.
  * op **required** `string`: The segment operator.
  * field `string` (values: goal_last_visited): The goal time field to segment on.
  * op `string` (values: greater, less, is): Whether the website activity happened at, after, or before a specific date.
  * value `string` (values: date): What type of data to segment on.
  * extra `string`: The date for the segment, formatted as YYYY-MM-DD.

### InterestsSegment
* Interests Segment `object`: An individual segment condition.
  * condition_type **required** `string` (values: Aim, Automation, CampaignPoll, Conversation, Date, EmailClient, Language, Mandrill, MemberRating, SignupSource, SurveyMonkey, VIP, Interests, EcommCategory, EcommNumber, EcommPurchased, EcommSpent, EcommStore, GoalActivity, GoalTimestamp, FuzzySegment, StaticSegment, IPGeoCountryState, IPGeoIn, IPGeoInZip, IPGeoUnknown, IPGeoZip, SocialAge, SocialGender, SocialInfluence, SocialNetworkMember, SocialNetworkFollow, AddressMerge, ZipMerge, BirthdayMerge, DateMerge, TextMerge, SelectMerge, EmailAddress): The type of segment, for example: date, language, Mandrill, static, and more.
  * field **required** `string`: The field to segment on.
  * op **required** `string`: The segment operator.
  * field `string`: The interest group, like "interests-123"
  * op `string` (values: interestcontains, interestcontainsall, interestnotcontains): Whether the member is a part of one, all, or none of the groups.
  * value `array`: An array containing integers, each representing a group id.
    * items `string`

### IpGeoInZipSegment
* US Zip Code Segment `object`: An individual segment condition.
  * condition_type **required** `string` (values: Aim, Automation, CampaignPoll, Conversation, Date, EmailClient, Language, Mandrill, MemberRating, SignupSource, SurveyMonkey, VIP, Interests, EcommCategory, EcommNumber, EcommPurchased, EcommSpent, EcommStore, GoalActivity, GoalTimestamp, FuzzySegment, StaticSegment, IPGeoCountryState, IPGeoIn, IPGeoInZip, IPGeoUnknown, IPGeoZip, SocialAge, SocialGender, SocialInfluence, SocialNetworkMember, SocialNetworkFollow, AddressMerge, ZipMerge, BirthdayMerge, DateMerge, TextMerge, SelectMerge, EmailAddress): The type of segment, for example: date, language, Mandrill, static, and more.
  * field **required** `string`: The field to segment on.
  * op **required** `string`: The segment operator.
  * field `string` (values: ipgeo): The field to segment on.
  * op `string` (values: ipgeoinzip): Segment members who are in a specific US zip code.
  * value `integer`: The radius of the target location.
  * extra `integer`: The zip code to segment on.

### IpGeoUnknownSegment
* Location-Based Segment `object`: An individual segment condition.
  * condition_type **required** `string` (values: Aim, Automation, CampaignPoll, Conversation, Date, EmailClient, Language, Mandrill, MemberRating, SignupSource, SurveyMonkey, VIP, Interests, EcommCategory, EcommNumber, EcommPurchased, EcommSpent, EcommStore, GoalActivity, GoalTimestamp, FuzzySegment, StaticSegment, IPGeoCountryState, IPGeoIn, IPGeoInZip, IPGeoUnknown, IPGeoZip, SocialAge, SocialGender, SocialInfluence, SocialNetworkMember, SocialNetworkFollow, AddressMerge, ZipMerge, BirthdayMerge, DateMerge, TextMerge, SelectMerge, EmailAddress): The type of segment, for example: date, language, Mandrill, static, and more.
  * field **required** `string`: The field to segment on.
  * op **required** `string`: The segment operator.
  * field `string` (values: ipgeo): The field to segment on.
  * op `string` (values: ipgeounknown): Segment members with unknown location information.

### LanguageSegment
* Automation Segment `object`: An individual segment condition.
  * condition_type **required** `string` (values: Aim, Automation, CampaignPoll, Conversation, Date, EmailClient, Language, Mandrill, MemberRating, SignupSource, SurveyMonkey, VIP, Interests, EcommCategory, EcommNumber, EcommPurchased, EcommSpent, EcommStore, GoalActivity, GoalTimestamp, FuzzySegment, StaticSegment, IPGeoCountryState, IPGeoIn, IPGeoInZip, IPGeoUnknown, IPGeoZip, SocialAge, SocialGender, SocialInfluence, SocialNetworkMember, SocialNetworkFollow, AddressMerge, ZipMerge, BirthdayMerge, DateMerge, TextMerge, SelectMerge, EmailAddress): The type of segment, for example: date, language, Mandrill, static, and more.
  * field **required** `string`: The field to segment on.
  * op **required** `string`: The segment operator.
  * field `string` (values: language): The field to segment on.
  * op `string` (values: is, not): Whether the member's language is or isn't set to a specific language.
  * value `string`: A two-letter language identifier.

### MemberRatingSegment
* Member Rating Segment `object`: An individual segment condition.
  * condition_type **required** `string` (values: Aim, Automation, CampaignPoll, Conversation, Date, EmailClient, Language, Mandrill, MemberRating, SignupSource, SurveyMonkey, VIP, Interests, EcommCategory, EcommNumber, EcommPurchased, EcommSpent, EcommStore, GoalActivity, GoalTimestamp, FuzzySegment, StaticSegment, IPGeoCountryState, IPGeoIn, IPGeoInZip, IPGeoUnknown, IPGeoZip, SocialAge, SocialGender, SocialInfluence, SocialNetworkMember, SocialNetworkFollow, AddressMerge, ZipMerge, BirthdayMerge, DateMerge, TextMerge, SelectMerge, EmailAddress): The type of segment, for example: date, language, Mandrill, static, and more.
  * field **required** `string`: The field to segment on.
  * op **required** `string`: The segment operator.
  * field `string` (values: rating): The field to segment on.
  * op `string` (values: is, not, greater, less): Members who have have a rating that is/not exactly a specific number or members who have a rating greater/less than a specific number.
  * value `number`: The star rating number to segment on.

### SelectMergeSegment
* Dropdown/Radio Merge Field Segment `object`: An individual segment condition.
  * condition_type **required** `string` (values: Aim, Automation, CampaignPoll, Conversation, Date, EmailClient, Language, Mandrill, MemberRating, SignupSource, SurveyMonkey, VIP, Interests, EcommCategory, EcommNumber, EcommPurchased, EcommSpent, EcommStore, GoalActivity, GoalTimestamp, FuzzySegment, StaticSegment, IPGeoCountryState, IPGeoIn, IPGeoInZip, IPGeoUnknown, IPGeoZip, SocialAge, SocialGender, SocialInfluence, SocialNetworkMember, SocialNetworkFollow, AddressMerge, ZipMerge, BirthdayMerge, DateMerge, TextMerge, SelectMerge, EmailAddress): The type of segment, for example: date, language, Mandrill, static, and more.
  * field **required** `string`: The field to segment on.
  * op **required** `string`: The segment operator.
  * field `string`: The select merge segment field.
  * op `string` (values: is, not, blank, blank_not): Whether the segment value matches exactly, doesn't match, is blank, or isn't blank.
  * value `string`: The value to compare.

### SignupSourceSegment
* Signup Source Segment `object`: An individual segment condition.
  * condition_type **required** `string` (values: Aim, Automation, CampaignPoll, Conversation, Date, EmailClient, Language, Mandrill, MemberRating, SignupSource, SurveyMonkey, VIP, Interests, EcommCategory, EcommNumber, EcommPurchased, EcommSpent, EcommStore, GoalActivity, GoalTimestamp, FuzzySegment, StaticSegment, IPGeoCountryState, IPGeoIn, IPGeoInZip, IPGeoUnknown, IPGeoZip, SocialAge, SocialGender, SocialInfluence, SocialNetworkMember, SocialNetworkFollow, AddressMerge, ZipMerge, BirthdayMerge, DateMerge, TextMerge, SelectMerge, EmailAddress): The type of segment, for example: date, language, Mandrill, static, and more.
  * field **required** `string`: The field to segment on.
  * op **required** `string`: The segment operator.
  * field `string` (values: source): The field to segment on.
  * op `string` (values: source_is, source_not): Whether the member's signup source was/was not a particular value.
  * value `string`: The signup source.

### SocialAgeSegment
* Social Profiles Age Segment `object`: An individual segment condition.
  * condition_type **required** `string` (values: Aim, Automation, CampaignPoll, Conversation, Date, EmailClient, Language, Mandrill, MemberRating, SignupSource, SurveyMonkey, VIP, Interests, EcommCategory, EcommNumber, EcommPurchased, EcommSpent, EcommStore, GoalActivity, GoalTimestamp, FuzzySegment, StaticSegment, IPGeoCountryState, IPGeoIn, IPGeoInZip, IPGeoUnknown, IPGeoZip, SocialAge, SocialGender, SocialInfluence, SocialNetworkMember, SocialNetworkFollow, AddressMerge, ZipMerge, BirthdayMerge, DateMerge, TextMerge, SelectMerge, EmailAddress): The type of segment, for example: date, language, Mandrill, static, and more.
  * field **required** `string`: The field to segment on.
  * op **required** `string`: The segment operator.
  * field `string` (values: social_age): The social age field to segment on.
  * op `string` (values: is, not): Members who do or don't match the exact criteria listed.
  * value `string` (values: 18-24, 25-34, 35-54, 55+): The age range to segment.

### SocialGenderSegment
* Social Profiles Gender Segment `object`: An individual segment condition.
  * condition_type **required** `string` (values: Aim, Automation, CampaignPoll, Conversation, Date, EmailClient, Language, Mandrill, MemberRating, SignupSource, SurveyMonkey, VIP, Interests, EcommCategory, EcommNumber, EcommPurchased, EcommSpent, EcommStore, GoalActivity, GoalTimestamp, FuzzySegment, StaticSegment, IPGeoCountryState, IPGeoIn, IPGeoInZip, IPGeoUnknown, IPGeoZip, SocialAge, SocialGender, SocialInfluence, SocialNetworkMember, SocialNetworkFollow, AddressMerge, ZipMerge, BirthdayMerge, DateMerge, TextMerge, SelectMerge, EmailAddress): The type of segment, for example: date, language, Mandrill, static, and more.
  * field **required** `string`: The field to segment on.
  * op **required** `string`: The segment operator.
  * field `string` (values: social_gender): The social gender field to segment on.
  * op `string` (values: is, not): Members who do or don't match the exact criteria listed.
  * value `string` (values: male, female): The Social Profiles gender to segment.

### SocialInfluenceSegment
* Social Profiles Influence Segment `object`: An individual segment condition.
  * condition_type **required** `string` (values: Aim, Automation, CampaignPoll, Conversation, Date, EmailClient, Language, Mandrill, MemberRating, SignupSource, SurveyMonkey, VIP, Interests, EcommCategory, EcommNumber, EcommPurchased, EcommSpent, EcommStore, GoalActivity, GoalTimestamp, FuzzySegment, StaticSegment, IPGeoCountryState, IPGeoIn, IPGeoInZip, IPGeoUnknown, IPGeoZip, SocialAge, SocialGender, SocialInfluence, SocialNetworkMember, SocialNetworkFollow, AddressMerge, ZipMerge, BirthdayMerge, DateMerge, TextMerge, SelectMerge, EmailAddress): The type of segment, for example: date, language, Mandrill, static, and more.
  * field **required** `string`: The field to segment on.
  * op **required** `string`: The segment operator.
  * field `string` (values: social_influence): The social influence field to segment on.
  * op `string` (values: is, not, greater, less): Members who have a rating that is/not or greater/less than the rating provided.
  * value `number`: The Social Profiles influence rating to segment on.

### SocialNetworkFollowSegment
* Social Profiles Social Network Follow Segment `object`: An individual segment condition.
  * condition_type **required** `string` (values: Aim, Automation, CampaignPoll, Conversation, Date, EmailClient, Language, Mandrill, MemberRating, SignupSource, SurveyMonkey, VIP, Interests, EcommCategory, EcommNumber, EcommPurchased, EcommSpent, EcommStore, GoalActivity, GoalTimestamp, FuzzySegment, StaticSegment, IPGeoCountryState, IPGeoIn, IPGeoInZip, IPGeoUnknown, IPGeoZip, SocialAge, SocialGender, SocialInfluence, SocialNetworkMember, SocialNetworkFollow, AddressMerge, ZipMerge, BirthdayMerge, DateMerge, TextMerge, SelectMerge, EmailAddress): The type of segment, for example: date, language, Mandrill, static, and more.
  * field **required** `string`: The field to segment on.
  * op **required** `string`: The segment operator.
  * field `string` (values: social_network): The field to segment on.
  * op `string` (values: follow, notfollow): Members who are or are not following a linked account on a specific social network.
  * value `string` (values: twitter_follow): The social network to segment on.

### SocialNetworkSegment
* Social Profiles Social Network Segment `object`: An individual segment condition.
  * condition_type **required** `string` (values: Aim, Automation, CampaignPoll, Conversation, Date, EmailClient, Language, Mandrill, MemberRating, SignupSource, SurveyMonkey, VIP, Interests, EcommCategory, EcommNumber, EcommPurchased, EcommSpent, EcommStore, GoalActivity, GoalTimestamp, FuzzySegment, StaticSegment, IPGeoCountryState, IPGeoIn, IPGeoInZip, IPGeoUnknown, IPGeoZip, SocialAge, SocialGender, SocialInfluence, SocialNetworkMember, SocialNetworkFollow, AddressMerge, ZipMerge, BirthdayMerge, DateMerge, TextMerge, SelectMerge, EmailAddress): The type of segment, for example: date, language, Mandrill, static, and more.
  * field **required** `string`: The field to segment on.
  * op **required** `string`: The segment operator.
  * field `string` (values: social_network): The social_network segment field.
  * op `string` (values: member, notmember): Members who are or are not on a specific social network.
  * value `string` (values: twitter, facebook, linkedin, flickr, foursquare, lastfm, myspace, quora, vimeo, yelp, youtube): The social network to segment on.

### StaticSegment
* Static Segment Member Segment `object`: An individual segment condition.
  * condition_type **required** `string` (values: Aim, Automation, CampaignPoll, Conversation, Date, EmailClient, Language, Mandrill, MemberRating, SignupSource, SurveyMonkey, VIP, Interests, EcommCategory, EcommNumber, EcommPurchased, EcommSpent, EcommStore, GoalActivity, GoalTimestamp, FuzzySegment, StaticSegment, IPGeoCountryState, IPGeoIn, IPGeoInZip, IPGeoUnknown, IPGeoZip, SocialAge, SocialGender, SocialInfluence, SocialNetworkMember, SocialNetworkFollow, AddressMerge, ZipMerge, BirthdayMerge, DateMerge, TextMerge, SelectMerge, EmailAddress): The type of segment, for example: date, language, Mandrill, static, and more.
  * field **required** `string`: The field to segment on.
  * op **required** `string`: The segment operator.
  * field `string` (values: static_segment): The static segment field.
  * op `string` (values: static_is, static_not): Members who are/are not apart of a static segment.
  * value `number`: The id for the static segment.

### SurveyMonkeySegment
* Survey Monkey Segment `object`: An individual segment condition.
  * condition_type **required** `string` (values: Aim, Automation, CampaignPoll, Conversation, Date, EmailClient, Language, Mandrill, MemberRating, SignupSource, SurveyMonkey, VIP, Interests, EcommCategory, EcommNumber, EcommPurchased, EcommSpent, EcommStore, GoalActivity, GoalTimestamp, FuzzySegment, StaticSegment, IPGeoCountryState, IPGeoIn, IPGeoInZip, IPGeoUnknown, IPGeoZip, SocialAge, SocialGender, SocialInfluence, SocialNetworkMember, SocialNetworkFollow, AddressMerge, ZipMerge, BirthdayMerge, DateMerge, TextMerge, SelectMerge, EmailAddress): The type of segment, for example: date, language, Mandrill, static, and more.
  * field **required** `string`: The field to segment on.
  * op **required** `string`: The segment operator.
  * field `string` (values: survey_monkey): The field to segment on.
  * op `string` (values: started, completed, not_started, not_completed): A member's status based on whether they have started, completed, not started, or not completed a specific survey.
  * value `string`: The unique ID of the [SurveyMonkey](http://kb.mailchimp.com/integrations/other-integrations/integrate-surveymonkey-with-mailchimp?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) survey.

### TextMergeSegment
* Text or Number Merge Field Segment `object`: An individual segment condition.
  * condition_type **required** `string` (values: Aim, Automation, CampaignPoll, Conversation, Date, EmailClient, Language, Mandrill, MemberRating, SignupSource, SurveyMonkey, VIP, Interests, EcommCategory, EcommNumber, EcommPurchased, EcommSpent, EcommStore, GoalActivity, GoalTimestamp, FuzzySegment, StaticSegment, IPGeoCountryState, IPGeoIn, IPGeoInZip, IPGeoUnknown, IPGeoZip, SocialAge, SocialGender, SocialInfluence, SocialNetworkMember, SocialNetworkFollow, AddressMerge, ZipMerge, BirthdayMerge, DateMerge, TextMerge, SelectMerge, EmailAddress): The type of segment, for example: date, language, Mandrill, static, and more.
  * field **required** `string`: The field to segment on.
  * op **required** `string`: The segment operator.
  * field `string`: The segment field, one of 'merge0' or 'EMAIL'.
  * op `string` (values: is, not, contains, notcontain, starts, ends, greater, less, blank, blank_not): Whether the email address is/not exactly, contains/doesn't contain, starts/ends with a string.
  * value `string`: The value to compare.

### VIPSegment
* VIP Segment `object`: An individual segment condition.
  * condition_type **required** `string` (values: Aim, Automation, CampaignPoll, Conversation, Date, EmailClient, Language, Mandrill, MemberRating, SignupSource, SurveyMonkey, VIP, Interests, EcommCategory, EcommNumber, EcommPurchased, EcommSpent, EcommStore, GoalActivity, GoalTimestamp, FuzzySegment, StaticSegment, IPGeoCountryState, IPGeoIn, IPGeoInZip, IPGeoUnknown, IPGeoZip, SocialAge, SocialGender, SocialInfluence, SocialNetworkMember, SocialNetworkFollow, AddressMerge, ZipMerge, BirthdayMerge, DateMerge, TextMerge, SelectMerge, EmailAddress): The type of segment, for example: date, language, Mandrill, static, and more.
  * field **required** `string`: The field to segment on.
  * op **required** `string`: The segment operator.
  * field `string` (values: gmonkey): The field to segment on.
  * op `string` (values: member, notmember): Whether the member is or isn't a [VIP](http://kb.mailchimp.com/lists/managing-subscribers/designate-and-send-to-vip-subscribers?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).

### ZipMergeSegment
* Address/Zip Merge Field Segment `object`: An individual segment condition.
  * condition_type **required** `string` (values: Aim, Automation, CampaignPoll, Conversation, Date, EmailClient, Language, Mandrill, MemberRating, SignupSource, SurveyMonkey, VIP, Interests, EcommCategory, EcommNumber, EcommPurchased, EcommSpent, EcommStore, GoalActivity, GoalTimestamp, FuzzySegment, StaticSegment, IPGeoCountryState, IPGeoIn, IPGeoInZip, IPGeoUnknown, IPGeoZip, SocialAge, SocialGender, SocialInfluence, SocialNetworkMember, SocialNetworkFollow, AddressMerge, ZipMerge, BirthdayMerge, DateMerge, TextMerge, SelectMerge, EmailAddress): The type of segment, for example: date, language, Mandrill, static, and more.
  * field **required** `string`: The field to segment on.
  * op **required** `string`: The segment operator.
  * field `string`: The zip merge segment field.
  * op `string` (values: geoin): Whether the zip value is in a specific location.
  * value `string`: The value to compare.
  * extra `string`: The city or the zip being used to segment on.

### ZipSegment
* Location-Based Segment `object`: An individual segment condition.
  * condition_type **required** `string` (values: Aim, Automation, CampaignPoll, Conversation, Date, EmailClient, Language, Mandrill, MemberRating, SignupSource, SurveyMonkey, VIP, Interests, EcommCategory, EcommNumber, EcommPurchased, EcommSpent, EcommStore, GoalActivity, GoalTimestamp, FuzzySegment, StaticSegment, IPGeoCountryState, IPGeoIn, IPGeoInZip, IPGeoUnknown, IPGeoZip, SocialAge, SocialGender, SocialInfluence, SocialNetworkMember, SocialNetworkFollow, AddressMerge, ZipMerge, BirthdayMerge, DateMerge, TextMerge, SelectMerge, EmailAddress): The type of segment, for example: date, language, Mandrill, static, and more.
  * field **required** `string`: The field to segment on.
  * op **required** `string`: The segment operator.
  * field `string` (values: ipgeo): The field to segment on.
  * op `string` (values: ipgeoiszip, ipgeonotzip): Segment members who are or are not in a specific US zip code.
  * value `integer`: The 5-digit zip code.

### AutomationTrigger
* Automation Trigger `object`: Available triggers for Automation workflows.
  * workflow_type **required** `string` (values: recurringEvent, specialEvent, dateAdded, emailFollowup, emailSeries, welcomeSeries, mandrill, visitUrl, bestCustomers, productFollowup, categoryFollowup, purchaseFollowup, api, groupAdd, groupRemove): The type of Automation workflow.
  * workflow_title `string`: The title of the workflow type.
  * runtime [AutomationRuntime](#automationruntime)
  * workflow_emails_count `integer`: The number of emails in the Automation workflow.

### Event_BestCustomers
* Best Customers Workflow Trigger Settings `object`: Settings for a Best Customers workflow.
  * workflow_type **required** `string` (values: recurringEvent, specialEvent, dateAdded, emailFollowup, emailSeries, welcomeSeries, mandrill, visitUrl, bestCustomers, productFollowup, categoryFollowup, purchaseFollowup, api, groupAdd, groupRemove): The type of Automation workflow.
  * workflow_title `string`: The title of the workflow type.
  * runtime [AutomationRuntime](#automationruntime)
  * workflow_emails_count `integer`: The number of emails in the Automation workflow.
  * send_immediately `boolean`: Send first email immediately to existing subscribers who meet conditions.
  * purchase_orders `integer`: The number of purchase orders needed to trigger a workflow. The workflow will trigger when purchases exceed this amount.
  * lifetime_purchase_value `number`: The lifetime total purchase value needed to trigger a workflow. The workflow will trigger when a lifetime purchase value exceeds this amount.

### Event_CategoryFollowup
* Purchase Product From Category Workflow Trigger Settings `object`: Settings for a Purchase Product From Category workflow.
  * workflow_type **required** `string` (values: recurringEvent, specialEvent, dateAdded, emailFollowup, emailSeries, welcomeSeries, mandrill, visitUrl, bestCustomers, productFollowup, categoryFollowup, purchaseFollowup, api, groupAdd, groupRemove): The type of Automation workflow.
  * workflow_title `string`: The title of the workflow type.
  * runtime [AutomationRuntime](#automationruntime)
  * workflow_emails_count `integer`: The number of emails in the Automation workflow.
  * send_immediately `boolean`: Send first email immediately to existing subscribers who meet conditions.
  * category_name `string`: The name of the product category a workflow is triggered on.

### Event_EmailFollowup
* Event-Based Trigger Settings `object`: Settings for an event-based workflow.
  * workflow_type **required** `string` (values: recurringEvent, specialEvent, dateAdded, emailFollowup, emailSeries, welcomeSeries, mandrill, visitUrl, bestCustomers, productFollowup, categoryFollowup, purchaseFollowup, api, groupAdd, groupRemove): The type of Automation workflow.
  * workflow_title `string`: The title of the workflow type.
  * runtime [AutomationRuntime](#automationruntime)
  * workflow_emails_count `integer`: The number of emails in the Automation workflow.
  * send_immediately `boolean`: Send first email immediately to existing subscribers who meet conditions.
  * trigger_on_import `boolean`: Trigger workflow when subscribers are imported.

### Event_EmailSeries
* Event-Based Trigger Settings `object`: Settings for an event-based workflow.
  * workflow_type **required** `string` (values: recurringEvent, specialEvent, dateAdded, emailFollowup, emailSeries, welcomeSeries, mandrill, visitUrl, bestCustomers, productFollowup, categoryFollowup, purchaseFollowup, api, groupAdd, groupRemove): The type of Automation workflow.
  * workflow_title `string`: The title of the workflow type.
  * runtime [AutomationRuntime](#automationruntime)
  * workflow_emails_count `integer`: The number of emails in the Automation workflow.
  * send_immediately `boolean`: Send first email immediately to existing subscribers who meet conditions.
  * trigger_on_import `boolean`: Trigger workflow when subscribers are imported.

### Event_GroupAdd
* Event-Based Trigger Settings `object`: Settings for an event-based workflow.
  * workflow_type **required** `string` (values: recurringEvent, specialEvent, dateAdded, emailFollowup, emailSeries, welcomeSeries, mandrill, visitUrl, bestCustomers, productFollowup, categoryFollowup, purchaseFollowup, api, groupAdd, groupRemove): The type of Automation workflow.
  * workflow_title `string`: The title of the workflow type.
  * runtime [AutomationRuntime](#automationruntime)
  * workflow_emails_count `integer`: The number of emails in the Automation workflow.
  * send_immediately `boolean`: Send first email immediately to existing subscribers who meet conditions.
  * group_id `integer`: Group ID used by the workflow.

### Event_GroupRemove
* Event-Based Trigger Settings `object`: Settings for an event-based workflow.
  * workflow_type **required** `string` (values: recurringEvent, specialEvent, dateAdded, emailFollowup, emailSeries, welcomeSeries, mandrill, visitUrl, bestCustomers, productFollowup, categoryFollowup, purchaseFollowup, api, groupAdd, groupRemove): The type of Automation workflow.
  * workflow_title `string`: The title of the workflow type.
  * runtime [AutomationRuntime](#automationruntime)
  * workflow_emails_count `integer`: The number of emails in the Automation workflow.
  * send_immediately `boolean`: Send first email immediately to existing subscribers who meet conditions.
  * group_id `integer`: Group ID used by the workflow.

### Event_Mandrill
* Mandrill-Based Trigger Settings `object`: Settings for a Mandrill-based workflow.
  * workflow_type **required** `string` (values: recurringEvent, specialEvent, dateAdded, emailFollowup, emailSeries, welcomeSeries, mandrill, visitUrl, bestCustomers, productFollowup, categoryFollowup, purchaseFollowup, api, groupAdd, groupRemove): The type of Automation workflow.
  * workflow_title `string`: The title of the workflow type.
  * runtime [AutomationRuntime](#automationruntime)
  * workflow_emails_count `integer`: The number of emails in the Automation workflow.
  * send_immediately `boolean`: Send first email immediately to existing subscribers who meet conditions.
  * mandrill_tags `array`: The Mandrill tags that a workflow will be triggered on.

### Event_ProductFollowup
* Specific Product Purchased Workflow Trigger Settings `object`: Settings for a Specific Product Purchased workflow.
  * workflow_type **required** `string` (values: recurringEvent, specialEvent, dateAdded, emailFollowup, emailSeries, welcomeSeries, mandrill, visitUrl, bestCustomers, productFollowup, categoryFollowup, purchaseFollowup, api, groupAdd, groupRemove): The type of Automation workflow.
  * workflow_title `string`: The title of the workflow type.
  * runtime [AutomationRuntime](#automationruntime)
  * workflow_emails_count `integer`: The number of emails in the Automation workflow.
  * send_immediately `boolean`: Send first email immediately to existing subscribers who meet conditions.
  * product_name `string`: The name of the product a workflow is triggered on.

### Event_PurchaseFollowup
* Any Product Purchased Workflow Trigger Settings `object`: Settings for an Any Product Purchased workflow.
  * workflow_type **required** `string` (values: recurringEvent, specialEvent, dateAdded, emailFollowup, emailSeries, welcomeSeries, mandrill, visitUrl, bestCustomers, productFollowup, categoryFollowup, purchaseFollowup, api, groupAdd, groupRemove): The type of Automation workflow.
  * workflow_title `string`: The title of the workflow type.
  * runtime [AutomationRuntime](#automationruntime)
  * workflow_emails_count `integer`: The number of emails in the Automation workflow.
  * send_immediately `boolean`: Send first email immediately to existing subscribers who meet conditions.

### Event_VisitUrl
* Goal-Based Trigger Settings `object`: Settings for an Goal-based workflow.
  * workflow_type **required** `string` (values: recurringEvent, specialEvent, dateAdded, emailFollowup, emailSeries, welcomeSeries, mandrill, visitUrl, bestCustomers, productFollowup, categoryFollowup, purchaseFollowup, api, groupAdd, groupRemove): The type of Automation workflow.
  * workflow_title `string`: The title of the workflow type.
  * runtime [AutomationRuntime](#automationruntime)
  * workflow_emails_count `integer`: The number of emails in the Automation workflow.
  * send_immediately `boolean`: Send first email immediately to existing subscribers who meet conditions.
  * goal_url `string`: The URL subscribers navigate to in order to trigger the workflow.

### Event_WelcomeSeries
* Event-Based Trigger Settings `object`: Settings for an event-based workflow.
  * workflow_type **required** `string` (values: recurringEvent, specialEvent, dateAdded, emailFollowup, emailSeries, welcomeSeries, mandrill, visitUrl, bestCustomers, productFollowup, categoryFollowup, purchaseFollowup, api, groupAdd, groupRemove): The type of Automation workflow.
  * workflow_title `string`: The title of the workflow type.
  * runtime [AutomationRuntime](#automationruntime)
  * workflow_emails_count `integer`: The number of emails in the Automation workflow.
  * send_immediately `boolean`: Send first email immediately to existing subscribers who meet conditions.
  * trigger_on_import `boolean`: Trigger workflow when subscribers are imported.

### Merge_RecurringEvent
* Date Merge Field-Based Trigger Settings `object`: Settings for a date merge field-based workflow.
  * workflow_type **required** `string` (values: recurringEvent, specialEvent, dateAdded, emailFollowup, emailSeries, welcomeSeries, mandrill, visitUrl, bestCustomers, productFollowup, categoryFollowup, purchaseFollowup, api, groupAdd, groupRemove): The type of Automation workflow.
  * workflow_title `string`: The title of the workflow type.
  * runtime [AutomationRuntime](#automationruntime)
  * workflow_emails_count `integer`: The number of emails in the Automation workflow.
  * merge_field_trigger `string`: The data used to trigger the Automation workflow. For 'specialEvent' type workflows, a date merge field is required. For 'recurringEvent', a birthday or date merge field are required.

### Merge_SpecialEvent
* Date Merge Field-Based Trigger Settings `object`: Settings for a date merge field-based workflow.
  * workflow_type **required** `string` (values: recurringEvent, specialEvent, dateAdded, emailFollowup, emailSeries, welcomeSeries, mandrill, visitUrl, bestCustomers, productFollowup, categoryFollowup, purchaseFollowup, api, groupAdd, groupRemove): The type of Automation workflow.
  * workflow_title `string`: The title of the workflow type.
  * runtime [AutomationRuntime](#automationruntime)
  * workflow_emails_count `integer`: The number of emails in the Automation workflow.
  * merge_field_trigger `string`: The data used to trigger the Automation workflow. For 'specialEvent' type workflows, a date merge field is required. For 'recurringEvent', a birthday or date merge field are required.

### AutomationRuntimeHours
* Hours `object`: The hours an Automation workflow can send.
  * type **required** `string` (values: send_asap, send_between, send_at): When to send the Automation email.

### RuntimeASAP
* Send Hours `object`: Send hours for Automation Workflows.
  * type **required** `string` (values: send_asap, send_between, send_at): When to send the Automation email.
  * send_asap `boolean`: Send the workflow emails as soon as a subscriber meets the appropriate criteria.

### RuntimeAt
* Send Hours `object`: Send hours for Automation Workflows.
  * type **required** `string` (values: send_asap, send_between, send_at): When to send the Automation email.
  * send_at `string`: The exact time to send the emails.

### RuntimeBetween
* Send Hours `object`: Send hours for Automation Workflows.
  * type **required** `string` (values: send_asap, send_between, send_at): When to send the Automation email.
  * start `string`: The start of the sending window.
  * end `string`: The end of the sending window.

### HATEOASLinks
* Links `array`: A list of link types and descriptions for the API schema documents.
  * items `object`: This object represents a link from the resource where it is found to another resource or action that may be performed.
    * rel `string`: As with an HTML 'rel' attribute, this describes the type of link.
    * href `string`: This property contains a fully-qualified URL that can be called to retrieve the linked resource or perform the linked action.
    * method `string` (values: GET, POST, PUT, PATCH, DELETE, OPTIONS, HEAD): The HTTP method that should be used when accessing the URL defined in 'href'.
    * targetSchema `string`: For GETs, this is a URL representing the schema that the response should conform to.
    * schema `string`: For HTTP methods that can receive bodies (POST and PUT), this is a URL representing the schema that the body should conform to.

### AccountDetails
* API Root `object`: The API root resource links to all other resources available in the API.
  * account_id `string`: The MailChimp account ID, used for features like list [subscribe forms](http://kb.mailchimp.com/lists/signup-forms/create-signup-forms-and-response-emails?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
  * login_id `string`: The ID associated with the user who owns this API key. If you can login to multiple accounts, this ID will be the same for each account.
  * account_name `string`: The name of the account.
  * email `string`: The account email address.
  * first_name `string`: The first name tied to the account.
  * last_name `string`: The last name tied to the account.
  * username `string`: The username tied to the account.
  * avatar_url `string`: URL of the avatar for the user.
  * role `string`: The [user role](http://kb.mailchimp.com/accounts/multi-user/manage-user-levels-in-your-account?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) for the account.
  * member_since `string`: The date and time that the account was created.
  * pricing_plan_type `string` (values: monthly, pay_as_you_go, forever_free): The type of pricing plan the account is on.
  * first_payment `string`: Date of first payment for monthly plans.
  * account_timezone `string`: The timezone currently set for the account.
  * account_industry `string`: The user-specified industry associated with the account.
  * contact `object`: Information about the account contact.
    * company `string`: The company name for the account.
    * addr1 `string`: The street address for the account contact.
    * addr2 `string`: The street address for the account contact.
    * city `string`: The city for the account contact.
    * state `string`: The state for the account contact.
    * zip `string`: The zip code for the account contact.
    * country `string`: The country for the account contact.
  * pro_enabled `boolean`: Whether the account includes [MailChimp Pro](http://mailchimp.com/pro?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
  * last_login `string`: The date and time of the last login for this account.
  * total_subscribers `integer`: The total number of subscribers across all lists in the account.
  * industry_stats `object`: The [average campaign statistics](http://mailchimp.com/resources/research/email-marketing-benchmarks/?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) for all campaigns in the account's specified industry.
    * open_rate `number`: The average unique open rate for all campaigns in the account's specified industry.
    * bounce_rate `number`: The average bounce rate for all campaigns in the account's specified industry.
    * click_rate `number`: The average unique click rate for all campaigns in the account's specified industry.
  * _links [HATEOASLinks](#hateoaslinks)

### CollectionTotal
* Item Count `integer`: The total number of items matching the query regardless of pagination.

### AutomationRuntime
* Automation Workflow Runtime Settings `object`: A workflow's runtime settings for an Automation.
  * days `array`: The days an Automation workflow can send.
    * items `string` (values: sunday, monday, tuesday, wednesday, thursday, friday, saturday)
  * hours [AutomationRuntimeHours](#automationruntimehours)

### SegmentationOptions
* Segment Options `object`: An object representing all segmentation options. This object should contain a `saved_segment_id` to use an existing segment, or you can create a new segment by including both `match` and `conditions` options.
  * saved_segment_id `integer`: The id for an existing saved segment.
  * match `string` (values: any, all): Segment match type.
  * conditions `array`: Segment match conditions.
    * items [SegmentCondition](#segmentcondition)

### AutomationWorkflowQueuedSubscriber
* Subscriber in Automation Queue `object`: Information about subscribers in an Automation email queue.
  * id `string`: The MD5 hash of the lowercase version of the list member's email address.
  * workflow_id `string`: A string that uniquely identifies an Automation workflow.
  * email_id `string`: A string that uniquely identifies an email in an Automation workflow.
  * list_id `string`: A string that uniquely identifies a list.
  * email_address **required** `string`: The list member's email address.
  * next_send `string`: The date and time of the next send for the workflow email.
  * _links [HATEOASLinks](#hateoaslinks)

### CampaignType
* Campaign Type `string` (values: regular, plaintext, absplit, rss, variate): There are four types of [campaigns](http://kb.mailchimp.com/campaigns?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) you can create in MailChimp. A/B Split campaigns have been deprecated and variate campaigns should be used instead.

### CampaignStatus
* Campaign Status `string`: The current status of the campaign.

### DeliveryStatus
* Campaign Delivery Status `object`: Updates on campaigns in the process of sending.
  * enabled `boolean`: Whether Campaign Delivery Status is enabled for this account and campaign.
  * can_cancel `boolean`: Whether a campaign send can be canceled.
  * status `string`: The current state of a campaign delivery.
  * emails_sent `integer`: The total number of emails confirmed sent for this campaign so far.
  * emails_canceled `integer`: The total number of emails canceled for this campaign.

### Campaign
* Campaign `object`: A summary of an individual campaign's settings and content.
  * id `string`: A string that uniquely identifies this campaign.
  * web_id `integer`: The ID used in the MailChimp web application. View this campaign in your MailChimp account at `https://{dc}.admin.mailchimp.com/campaigns/show/?id={web_id}`.
  * type **required** [CampaignType](#campaigntype)
  * create_time `string`: The date and time the campaign was created.
  * archive_url `string`: The link to the campaign's archive version.
  * long_archive_url `string`: The original link to the campaign's archive version.
  * status [CampaignStatus](#campaignstatus)
  * emails_sent `integer`: The total number of emails sent for this campaign.
  * send_time `string`: The date and time a campaign was sent.
  * content_type `string`: How the campaign's content is put together ('template', 'drag_and_drop', 'html', 'url').
  * needs_block_refresh `boolean`: Determines if the campaign needs its blocks refreshed by opening the web-based campaign editor.
  * recipients `object`: List settings for the campaign.
    * list_id **required** `string`: The unique list id.
    * list_name `string`: The name of the list.
    * segment_text `string`: A description of the [segment](http://kb.mailchimp.com/segments/how-to-use-groups-and-segments?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) used for the campaign. Formatted as a string marked up with HTML.
    * recipient_count `integer`: Count of the recipients on the associated list. Formatted as an integer.
    * segment_opts [SegmentationOptions](#segmentationoptions)
  * settings `object`: The settings for your campaign, including subject, from name, reply-to address, and more.
    * subject_line `string`: The subject line for the campaign.
    * preview_text `string`: The preview text for the campaign.
    * title `string`: The title of the campaign.
    * from_name `string`: The 'from' name on the campaign (not an email address).
    * reply_to `string`: The reply-to email address for the campaign.
    * use_conversation `boolean`: Use MailChimp Conversation feature to manage out-of-office replies.
    * to_name `string`: The campaign's custom 'To' name. Typically the first name [merge field](http://kb.mailchimp.com/merge-tags/using/getting-started-with-merge-tags?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
    * folder_id `string`: If the campaign is listed in a folder, the id for that folder.
    * authenticate `boolean`: Whether MailChimp [authenticated](http://kb.mailchimp.com/delivery/deliverability-research/set-up-mailchimp-authentication?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) the campaign. Defaults to `true`.
    * auto_footer `boolean`: Automatically append MailChimp's [default footer](http://kb.mailchimp.com/campaigns/design/theres-a-gray-footer-added-to-my-campaign?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) to the campaign.
    * inline_css `boolean`: Automatically inline the CSS included with the campaign content.
    * auto_tweet `boolean`: Automatically tweet a link to the [campaign archive](http://kb.mailchimp.com/campaigns/archives/set-up-your-campaign-archive?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) page when the campaign is sent.
    * auto_fb_post `array`: An array of [Facebook](http://kb.mailchimp.com/integrations/facebook/integrate-facebook-with-mailchimp?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) page ids to auto-post to.
      * items `string`
    * fb_comments `boolean`: Allows Facebook comments on the campaign (also force-enables the Campaign Archive toolbar). Defaults to `true`.
    * timewarp `boolean`: Send this campaign using [Timewarp](http://kb.mailchimp.com/campaigns/confirmation-and-sending/use-timewarp-to-optimize-sending-by-time-zone?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
    * template_id `integer`: The id for the template used in this campaign.
    * drag_and_drop `boolean`: Whether the campaign uses the drag-and-drop editor.
  * variate_settings `object`: The settings specific to A/B test campaigns.
    * winning_combination_id `string`: ID for the winning combination.
    * winning_campaign_id `string`: ID of the campaign that was sent to the remaining recipients based on the winning combination.
    * winner_criteria **required** `string` (values: opens, clicks, manual, total_revenue): The combination that performs the best. This may be determined automatically by click rate, open rate, or total revenue—or you may choose manually based on the reporting data you find the most valuable. For Multivariate Campaigns testing send_time, winner_criteria is ignored. For Multivariate Campaigns with 'manual' as the winner_criteria, the winner must be chosen in the MailChimp web application.
    * wait_time `integer`: The number of minutes to wait before choosing the winning campaign. The value of wait_time must be greater than 0 and in whole hours, specified in minutes.
    * test_size `integer`: The percentage of recipients to send the test combinations to, must be a value between 10 and 100.
    * subject_lines `array`: The possible subject lines to test. If no subject lines are provided, settings.subject_line will be used.
      * items `string`
    * send_times `array`: The possible send times to test. The times provided should be in the format YYYY-MM-DD HH:MM:SS. If send_times are provided to test, the test_size will be set to 100% and winner_criteria will be ignored.
      * items `string`
    * from_names `array`: The possible from names. The number of from_names provided must match the number of reply_to_addresses. If no from_names are provided, settings.from_name will be used.
      * items `string`
    * reply_to_addresses `array`: The possible reply-to addresses. The number of reply_to_addresses provided must match the number of from_names. If no reply_to_addresses are provided, settings.reply_to will be used.
      * items `string`
    * contents `array`: Descriptions of possible email contents. To set campaign contents, make a PUT request to /campaigns/{campaign_id}/content with the field 'variate_contents'.
      * items `string`
    * combinations `array`: Combinations of possible variables used to build emails.
      * items `object`
        * id `string`: Unique ID for the combination.
        * subject_line `integer`: The index of `variate_settings.subject_lines` used.
        * send_time `integer`: The index of `variate_settings.send_times` used.
        * from_name `integer`: The index of `variate_settings.from_names` used.
        * reply_to `integer`: The index of `variate_settings.reply_to_addresses` used.
        * content_description `integer`: The index of `variate_settings.contents` used.
        * recipients `integer`: The number of recipients for this combination.
  * tracking `object`: The tracking options for a campaign.
    * opens `boolean`: Whether to [track opens](http://kb.mailchimp.com/reports/about-open-tracking?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs). Defaults to `true`. Cannot be set to false for variate campaigns.
    * html_clicks `boolean`: Whether to [track clicks](http://kb.mailchimp.com/reports/about-click-tracking?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) in the HTML version of the campaign. Defaults to `true`. Cannot be set to false for variate campaigns.
    * text_clicks `boolean`: Whether to [track clicks](http://kb.mailchimp.com/reports/about-click-tracking?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) in the plain-text version of the campaign. Defaults to `true`. Cannot be set to false for variate campaigns.
    * goal_tracking `boolean`: Whether to enable [Goal](http://kb.mailchimp.com/integrations/other-integrations/integrate-goal-with-mailchimp?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) tracking.
    * ecomm360 `boolean`: Whether to enable [eCommerce360](http://kb.mailchimp.com/integrations/other-integrations/about-ecommerce360?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) tracking.
    * google_analytics `string`: The custom slug for [Google Analytics](http://kb.mailchimp.com/integrations/other-integrations/integrate-google-analytics-with-mailchimp?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) tracking (max of 50 bytes).
    * clicktale `string`: The custom slug for [ClickTale](http://kb.mailchimp.com/integrations/other-integrations/additional-tracking-options-for-campaigns?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs#Click-Tale) tracking (max of 50 bytes).
    * salesforce `object`: Salesforce tracking options for a campaign. Must be using MailChimp's built-in [Salesforce integration](http://kb.mailchimp.com/integrations/other-integrations/integrate-salesforce-with-mailchimp?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
      * campaign `boolean`: Create a campaign in a connected Salesforce account.
      * notes `boolean`: Update contact notes for a campaign based on subscriber email addresses.
    * capsule `object`: Capsule tracking options for a campaign. Must be using MailChimp's built-in Capsule integration.
      * notes `boolean`: Update contact notes for a campaign based on subscriber email addresses.
  * rss_opts `object`: [RSS](http://kb.mailchimp.com/campaigns/rss-in-campaigns/create-an-rss-campaign?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) options for a campaign.
    * feed_url **required** `string`: The URL for the RSS feed.
    * frequency **required** `string` (values: daily, weekly, monthly): The frequency of the RSS Campaign.
    * schedule `object`: The schedule for sending the RSS Campaign.
      * hour `integer`: The hour to send the campaign in local time. Acceptable hours are 0-23. For example, '4' would be 4am in [your account's default time zone](http://kb.mailchimp.com/accounts/account-setup/how-to-set-account-defaults?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
      * daily_send `object`: The days of the week to send a daily RSS Campaign.
        * sunday `boolean`: Sends the daily RSS Campaign on Sundays.
        * monday `boolean`: Sends the daily RSS Campaign on Mondays.
        * tuesday `boolean`: Sends the daily RSS Campaign on Tuesdays.
        * wednesday `boolean`: Sends the daily RSS Campaign on Wednesdays.
        * thursday `boolean`: Sends the daily RSS Campaign on Thursdays.
        * friday `boolean`: Sends the daily RSS Campaign on Fridays.
        * saturday `boolean`: Sends the daily RSS Campaign on Saturdays.
      * weekly_send_day `string` (values: sunday, monday, tuesday, wednesday, thursday, friday, saturday): The day of the week to send a weekly RSS Campaign.
      * monthly_send_date `number`: The day of the month to send a monthly RSS Campaign. Acceptable days are 0-31, where '0' is always the last day of a month. Months with fewer than the selected number of days will not have an RSS campaign sent out that day. For example, RSS Campaigns set to send on the 30th will not go out in February.
    * last_sent `string`: The date the campaign was last sent.
    * constrain_rss_img `boolean`: Whether to add CSS to images in the RSS feed to constrain their width in campaigns.
  * ab_split_opts `object`: [A/B Testing](http://kb.mailchimp.com/campaigns/ab/about-ab-testing-campaigns?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) options for a campaign.
    * split_test `string` (values: subject, from_name, schedule): The type of AB split to run.
    * pick_winner `string` (values: opens, clicks, manual): How we should evaluate a winner. Based on 'opens', 'clicks', or 'manual'.
    * wait_units `string` (values: hours, days): How unit of time for measuring the winner ('hours' or 'days'). This cannot be changed after a campaign is sent.
    * wait_time `integer`: The amount of time to wait before picking a winner. This cannot be changed after a campaign is sent.
    * split_size `integer`: The size of the split groups. Campaigns split based on 'schedule' are forced to have a 50/50 split. Valid split integers are between 1-50.
    * from_name_a `string`: For campaigns split on 'From Name', the name for Group A.
    * from_name_b `string`: For campaigns split on 'From Name', the name for Group B.
    * reply_email_a `string`: For campaigns split on 'From Name', the reply-to address for Group A.
    * reply_email_b `string`: For campaigns split on 'From Name', the reply-to address for Group B.
    * subject_a `string`: For campaigns split on 'Subject Line', the subject line for Group A.
    * subject_b `string`: For campaigns split on 'Subject Line', the subject line for Group B.
    * send_time_a `string`: The send time for Group A.
    * send_time_b `string`: The send time for Group B.
    * send_time_winner `string`: The send time for the winning version.
  * social_card `object`: The preview for the campaign, rendered by social networks like Facebook and Twitter. [Learn more](http://kb.mailchimp.com/campaigns/previews-and-tests/set-up-social-cards?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
    * image_url `string`: The url for the header image for the card.
    * description `string`: A short summary of the campaign to display.
    * title `string`: The title for the card. Typically the subject line of the campaign.
  * report_summary `object`: For sent campaigns, a summary of opens, clicks, and unsubscribes.
    * opens `integer`: The total number of opens for a campaign.
    * unique_opens `integer`: The number of unique opens.
    * open_rate `number`: The number of unique opens divided by the total number of successful deliveries.
    * clicks `integer`: The total number of clicks for an campaign.
    * subscriber_clicks `integer`: The number of unique clicks.
    * click_rate `number`: The number of unique clicks divided by the total number of successful deliveries.
    * ecommerce `object`: E-Commerce stats for a campaign.
      * total_orders `integer`: The total orders for a campaign.
      * total_spent `number`: The total spent for a campaign. Calculated as the sum of all order totals with no deductions.
      * total_revenue `number`: The total revenue for a campaign. Calculated as the sum of all order totals minus shipping and tax totals.
  * delivery_status [DeliveryStatus](#deliverystatus)
  * _links [HATEOASLinks](#hateoaslinks)

### CampaignFeedback
* Campaign Feedback `object`: A specific feedback message from a specific campaign.
  * feedback_id `integer`: The individual id for the feedback item.
  * parent_id `integer`: If a reply, the id of the parent feedback item.
  * block_id `integer`: The block id for the editable block that the feedback addresses.
  * message **required** `string`: The content of the feedback.
  * is_complete `boolean`: The status of feedback.
  * created_by `string`: The login name of the user who created the feedback.
  * created_at `string`: The date and time the feedback item was created.
  * updated_at `string`: The date and time the feedback was last updated.
  * source `string` (values: api, email, sms, web, ios, android): The source of the feedback.
  * campaign_id `string`: The unique id for the campaign.
  * _links [HATEOASLinks](#hateoaslinks)

### ListMember
* List Members `object`: Individuals who are currently or have been previously subscribed to this list, including members who have bounced or unsubscribed.
  * id `string`: The MD5 hash of the lowercase version of the list member's email address.
  * email_address `string`: Email address for a subscriber.
  * unique_email_id `string`: An identifier for the address across all of MailChimp.
  * email_type `string`: Type of email this member asked to get ('html' or 'text').
  * status `string` (values: subscribed, unsubscribed, cleaned, pending, transactional): Subscriber's current status.
  * merge_fields `object`: An individual merge var and value for a member.
  * interests `object`: The key of this object's properties is the ID of the interest in question.
  * stats `object`: Open and click rates for this subscriber.
    * avg_open_rate `number`: A subscriber's average open rate.
    * avg_click_rate `number`: A subscriber's average clickthrough rate.
  * ip_signup `string`: IP address the subscriber signed up from.
  * timestamp_signup `string`: The date and time the subscriber signed up for the list.
  * ip_opt `string`: The IP address the subscriber used to confirm their opt-in status.
  * timestamp_opt `string`: The date and time the subscribe confirmed their opt-in status.
  * member_rating `integer`: Star rating for this member, between 1 and 5.
  * last_changed `string`: The date and time the member's info was last changed.
  * language `string`: If set/detected, the [subscriber's language](http://kb.mailchimp.com/lists/managing-subscribers/view-and-edit-subscriber-languages?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
  * vip `boolean`: [VIP status](http://kb.mailchimp.com/lists/managing-subscribers/designate-and-send-to-vip-subscribers?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) for subscriber.
  * email_client `string`: The list member's email client.
  * location `object`: Subscriber location information.
    * latitude `number`: The location latitude.
    * longitude `number`: The location longitude.
    * gmtoff `integer`: The time difference in hours from GMT.
    * dstoff `integer`: The offset for timezones where daylight saving time is observed.
    * country_code `string`: The unique code for the location country.
    * timezone `string`: The timezone for the location.
  * last_note `object`: The most recent Note added about this member.
    * note_id `integer`: The note id.
    * created_at `string`: The date and time the note was created.
    * created_by `string`: The author of the note.
    * note `string`: The content of the note.
  * list_id `string`: The list id.
  * _links [HATEOASLinks](#hateoaslinks)

### SignupFormContent
* Collection of Content for List Signup Forms `object`: Collection of Content for List Signup Forms.
  * section `string` (values: signup_message, unsub_message, signup_thank_you_title): The content section name.
  * value `string`: The content section text.

### SignupFormStyleOption
* An option for Signup Form Styles `object`: An option for Signup Form Styles.
  * property `string`: A string that identifies the property.
  * value `string`: A string that identifies value of the property.

### SignupFormStyleOptions
* Collection of Element style for List Signup Forms `object`: Collection of Element style for List Signup Forms.
  * selector `string` (values: page_background, page_header, page_outer_wrapper, body_background, body_link_style, forms_buttons, forms_buttons_hovered, forms_field_label, forms_field_text, forms_required, forms_required_legend, forms_help_text, forms_errors, monkey_rewards_badge): A string that identifies the element selector.
  * options `array`: A collection of options for a selector.
    * items [SignupFormStyleOption](#signupformstyleoption)

### QuarterHourTimes
* QuarterHourTimes `string` (values: 12:00am, 12:15am, 12:30am, 12:45am, 1:00am, 1:15am, 1:30am, 1:45am, 2:00am, 2:15am, 2:30am, 2:45am, 3:00am, 3:15am, 3:30am, 3:45am, 4:00am, 4:15am, 4:30am, 4:45am, 5:00am, 5:15am, 5:30am, 5:45am, 6:00am, 6:15am, 6:30am, 6:45am, 7:00am, 7:15am, 7:30am, 7:45am, 8:00am, 8:15am, 8:30am, 8:45am, 9:00am, 9:15am, 9:30am, 9:45am, 10:00am, 10:15am, 10:30am, 10:45am, 11:00am, 11:15am, 11:30am, 11:45am, 12:00pm, 12:15pm, 12:30pm, 12:45pm, 1:00pm, 1:15pm, 1:30pm, 1:45pm, 2:00pm, 2:15pm, 2:30pm, 2:45pm, 3:00pm, 3:15pm, 3:30pm, 3:45pm, 4:00pm, 4:15pm, 4:30pm, 4:45pm, 5:00pm, 5:15pm, 5:30pm, 5:45pm, 6:00pm, 6:15pm, 6:30pm, 6:45pm, 7:00pm, 7:15pm, 7:30pm, 7:45pm, 8:00pm, 8:15pm, 8:30pm, 8:45pm, 9:00pm, 9:15pm, 9:30pm, 9:45pm, 10:00pm, 10:15pm, 10:30pm, 10:45pm, 11:00pm, 11:15pm, 11:30pm, 11:45pm)


