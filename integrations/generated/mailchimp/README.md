# @datafire/mailchimp

Client library for MailChimp

## Installation and Usage
```bash
npm install --save datafire @datafire/mailchimp
```

```js
let datafire = require('datafire');
let mailchimp = require('@datafire/mailchimp').actions;

let account = {
  apiKey: "",
}
let context = new datafire.Context({
  accounts: {
    mailchimp: account,
  }
})


mailchimp._method_templates.get({}, context).then(data => {
  console.log(data);
})
```

## Description
Create plugins that connect MailChimp to your CMS, your blog, your e-commerce shopping cart, and more.

## Actions
### _method_templates.get
Retrieve various templates available in the system, allowing some thing similar to our template gallery to be created.


```js
mailchimp._method_templates.get({
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* types (string) - The types of templates to return. See options: "http://apidocs.mailchimp.com/api/1.3/templates.func.php"
* category (string) - For Gallery templates only, limit to a specific template category.
* inactives (string) - Options to control how inactive templates are returned, if at all. See options: "http://apidocs.mailchimp.com/api/1.3/templates.func.php"
* dc (string) **required** - the portion after the dash in your api key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - a valid api key for your user account.
* method (string) **required** - is the method name from our api you are calling.
* output (string) - output formats for serialized calls.

### _method_templateUpdate.get
Replace the content of a user template, NOT campaign content.


```js
mailchimp._method_templateUpdate.get({
  "id": "",
  "values": "",
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* id (string) **required** - The id of the user template to update.
* values (string) **required** - The values to updates. See options: "http://apidocs.mailchimp.com/api/1.3/templateupdate.func.php"
* dc (string) **required** - the portion after the dash in your api key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - a valid api key for your user account.
* method (string) **required** - is the method name from our api you are calling.
* output (string) - output formats for serialized calls.

### _method_templateUndel.get
Undelete (reactivate) a user template.


```js
mailchimp._method_templateUndel.get({
  "id": "",
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* id (string) **required** - The id of the user template to reactivate.
* dc (string) **required** - the portion after the dash in your api key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - a valid api key for your user account.
* method (string) **required** - is the method name from our api you are calling.
* output (string) - output formats for serialized calls.

### _method_templateInfo.get
Pull details for a specific template to help support editing.


```js
mailchimp._method_templateInfo.get({
  "tid": "",
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* tid (string) **required** - The template id.
* type (string) - the template type to load.
* dc (string) **required** - the portion after the dash in your api key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - a valid api key for your user account.
* method (string) **required** - is the method name from our api you are calling.
* output (string) - output formats for serialized calls.

### _method_templateDel.get
Delete (deactivate) a user template.


```js
mailchimp._method_templateDel.get({
  "id": "",
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* id (string) **required** - The id of the user template to delete.
* dc (string) **required** - the portion after the dash in your api key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - a valid api key for your user account.
* method (string) **required** - is the method name from our api you are calling.
* output (string) - output formats for serialized calls.

### _method_templateAdd.get
Create a new user template, NOT campaign content. These templates can then be applied while creating campaigns.


```js
mailchimp._method_templateAdd.get({
  "name": "",
  "html": "",
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* name (string) **required** - The name for the template - names must be unique and a max of 50 bytes.
* html (string) **required** - A string specifying the entire template to be created. This is NOT campaign content.
* dc (string) **required** - the portion after the dash in your api key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - a valid api key for your user account.
* method (string) **required** - is the method name from our api you are calling.
* output (string) - output formats for serialized calls.

### _method_apikeys.get
Retrieve a list of all MailChimp API Keys for this User.


```js
mailchimp._method_apikeys.get({
  "username": "",
  "password": "",
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* username (string) **required** - Your MailChimp user name.
* password (string) **required** - Your MailChimp password.
* expired (boolean) - Whether or not to include expired keys.
* dc (string) **required** - the portion after the dash in your api key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - a valid api key for your user account.
* method (string) **required** - is the method name from our api you are calling.
* output (string) - output formats for serialized calls.

### _method_apikeyExpire.get
Expire a Specific API Key.


```js
mailchimp._method_apikeyExpire.get({
  "username": "",
  "password": "",
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* username (string) **required** - Your MailChimp user name.
* password (string) **required** - Your MailChimp password.
* dc (string) **required** - the portion after the dash in your api key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - a valid api key for your user account.
* method (string) **required** - is the method name from our api you are calling.
* output (string) - output formats for serialized calls.

### _method_apikeyAdd.get
Add an API Key to your account. We will generate a new key for you and return it.


```js
mailchimp._method_apikeyAdd.get({
  "username": "",
  "password": "",
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* username (string) **required** - Your MailChimp user name.
* password (string) **required** - Your MailChimp password.
* dc (string) **required** - the portion after the dash in your api key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - a valid api key for your user account.
* method (string) **required** - is the method name from our api you are calling.
* output (string) - output formats for serialized calls.

### _method_lists.get
Retrieve all of the lists defined for your user account.


```js
mailchimp._method_lists.get({
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* filters (string) - A hash of filters to apply to this query. See options: "http://apidocs.mailchimp.com/api/1.3/lists.func.php"
* start (integer) - Control paging of lists, start results at this list #, defaults to 1st page of data (page 0).
* limit (integer) - Control paging of lists, number of lists to return with each call, defaults to 25 (max=100).
* dc (string) **required** - the portion after the dash in your api key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - a valid api key for your user account.
* method (string) **required** - is the method name from our api you are calling.
* output (string) - output formats for serialized calls.

### _method_listWebhooks.get
Return the Webhooks configured for the given list.


```js
mailchimp._method_listWebhooks.get({
  "id": "",
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* id (string) **required** - The list id to connect.
* dc (string) **required** - the portion after the dash in your api key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - a valid api key for your user account.
* method (string) **required** - is the method name from our api you are calling.
* output (string) - output formats for serialized calls.

### _method_listWebhookDel.get
Delete an existing Webhook URL from a given list.


```js
mailchimp._method_listWebhookDel.get({
  "id": "",
  "url": "",
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* id (string) **required** - The list id to connect.
* url (string) **required** - The URL of a Webhook on this list.
* dc (string) **required** - the portion after the dash in your api key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - a valid api key for your user account.
* method (string) **required** - is the method name from our api you are calling.
* output (string) - output formats for serialized calls.

### _method_listWebhookAdd.get
Add a new Webhook URL for the given list.


```js
mailchimp._method_listWebhookAdd.get({
  "id": "",
  "url": "",
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* id (string) **required** - The list id to connect.
* url (string) **required** - A valid URL for the Webhook - it will be validated. note that a url may only exist on a list once.
* actions (string) - A hash of actions to fire this Webhook. See options: "http://apidocs.mailchimp.com/api/1.3/listwebhookadd.func.php"
* sources (string) - A hash of sources to fire this Webhook. See options: "http://apidocs.mailchimp.com/api/1.3/listwebhookadd.func.php"
* dc (string) **required** - the portion after the dash in your api key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - a valid api key for your user account.
* method (string) **required** - is the method name from our api you are calling.
* output (string) - output formats for serialized calls.

### _method_listUpdateMember.get
Edit the email address, merge fields, and interest groups for a list member.


```js
mailchimp._method_listUpdateMember.get({
  "id": "",
  "email_address": "",
  "merge_vars": "",
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* id (string) **required** - The list id to connect.
* email_address (string) **required** - The current email address of the member to update OR the "id" for the member returned from listMemberInfo, Webhooks, and Campaigns.
* merge_vars (string) **required** - Array of new field values to update the member with. See options: "http://apidocs.mailchimp.com/api/1.3/listsubscribe.func.php"
* email_type (string) - Change the email type preference for the member. Leave blank to keep the existing preference (optional).
* replace_interests (boolean) - Flag to determine whether we replace the interest groups with the updated groups provided, or we add the provided groups to the member's interest groups.
* dc (string) **required** - the portion after the dash in your api key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - a valid api key for your user account.
* method (string) **required** - is the method name from our api you are calling.
* output (string) - output formats for serialized calls.

### _method_listUnsubscribe.get
Unsubscribe the given email address from the list.


```js
mailchimp._method_listUnsubscribe.get({
  "id": "",
  "email_address": "",
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* id (string) **required** - The list id to connect.
* email_address (string) **required** - The email address to unsubscribe OR the email "id" returned from listMemberInfo, Webhooks, and Campaigns.
* delete_member (boolean) - Flag to completely delete the member from your list instead of just unsubscribing.
* send_goodbye (boolean) - Flag to send the goodbye email to the email address.
* send_notify (boolean) - Flag to send the unsubscribe notification email to the address defined in the list email notification settings.
* dc (string) **required** - the portion after the dash in your api key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - a valid api key for your user account.
* method (string) **required** - is the method name from our api you are calling.
* output (string) - output formats for serialized calls.

### _method_listSubscribe.get
Subscribe the provided email to a list. By default this sends a confirmation email.


```js
mailchimp._method_listSubscribe.get({
  "id": "",
  "email_address": "",
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* id (string) **required** - The list id to connect.
* email_address (string) **required** - The email address to subscribe.
* merge_vars (string) - Merges for the email (FNAME, LNAME, etc.). See options: "http://apidocs.mailchimp.com/api/1.3/listsubscribe.func.php"
* email_type (string) - Email type preference for the email.
* double_optin (boolean) - Flag to control whether a double opt-in confirmation message is sent, defaults to true. Abusing this may cause your account to be suspended.
* update_existing (boolean) - Flag to control whether existing subscribers should be updated instead of throwing an error.
* replace_interests (boolean) - Flag to determine whether we replace the interest groups with the groups provided or we add the provided groups to the member's interest groups.
* send_welcome (boolean) - If your double_optin is false and this is true, we will send your lists Welcome Email if this subscribe succeeds - this will *not* fire if we end up updating an existing subscriber. If double_optin is true, this has no effect.
* dc (string) **required** - the portion after the dash in your api key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - a valid api key for your user account.
* method (string) **required** - is the method name from our api you are calling.
* output (string) - output formats for serialized calls.

### _method_listStaticSegments.get
Retrieve all of the Static Segments for a list.


```js
mailchimp._method_listStaticSegments.get({
  "id": "",
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* id (string) **required** - The list id to connect.
* dc (string) **required** - the portion after the dash in your api key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - a valid api key for your user account.
* method (string) **required** - is the method name from our api you are calling.
* output (string) - output formats for serialized calls.

### _method_listStaticSegmentReset.get
Resets a static segment - removes all members from the static segment. Note: does not actually affect list member data.


```js
mailchimp._method_listStaticSegmentReset.get({
  "id": "",
  "seg_id": "",
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* id (string) **required** - The list id to connect.
* seg_id (string) **required** - The id of the static segment to reset.
* dc (string) **required** - the portion after the dash in your api key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - a valid api key for your user account.
* method (string) **required** - is the method name from our api you are calling.
* output (string) - output formats for serialized calls.

### _method_listStaticSegmentMembersDel.get
Remove list members from a static segment.


```js
mailchimp._method_listStaticSegmentMembersDel.get({
  "id": "",
  "seg_id": "",
  "batch": "",
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* id (string) **required** - The list id to connect.
* seg_id (string) **required** - The id of the static segment to delete.
* batch (string) **required** - An array of email addresses and/or unique_ids to remove from the segment.
* dc (string) **required** - the portion after the dash in your api key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - a valid api key for your user account.
* method (string) **required** - is the method name from our api you are calling.
* output (string) - output formats for serialized calls.

### _method_listStaticSegmentMembersAdd.get
Add list members to a static segment. It is suggested that you limit batch size to no more than 10,000 addresses per call.


```js
mailchimp._method_listStaticSegmentMembersAdd.get({
  "id": "",
  "seg_id": "",
  "batch": "",
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* id (string) **required** - The list id to connect.
* seg_id (string) **required** - The id of the static segment to modify.
* batch (string) **required** - An array of email addresses and/or unique_ids to add to the segment.
* dc (string) **required** - the portion after the dash in your api key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - a valid api key for your user account.
* method (string) **required** - is the method name from our api you are calling.
* output (string) - output formats for serialized calls.

### _method_listStaticSegmentDel.get
Delete a static segment. Note that this will, of course, remove any member affiliations with the segment.


```js
mailchimp._method_listStaticSegmentDel.get({
  "id": "",
  "seg_id": "",
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* id (string) **required** - The list id to connect.
* seg_id (string) **required** - The id of the static segment to delete.
* dc (string) **required** - the portion after the dash in your api key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - a valid api key for your user account.
* method (string) **required** - is the method name from our api you are calling.
* output (string) - output formats for serialized calls.

### _method_listStaticSegmentAdd.get
Save a segment against a list for later use. There is no limit to the number of segments which can be saved.


```js
mailchimp._method_listStaticSegmentAdd.get({
  "id": "",
  "name": "",
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* id (string) **required** - The list id to connect.
* name (string) **required** - A unique name per list for the segment - 50 byte maximum length, anything longer will throw an error.
* dc (string) **required** - the portion after the dash in your api key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - a valid api key for your user account.
* method (string) **required** - is the method name from our api you are calling.
* output (string) - output formats for serialized calls.

### _method_listMergeVars.get
Get the list of merge tags for a given list, including their name, tag, and required setting.


```js
mailchimp._method_listMergeVars.get({
  "id": "",
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* id (string) **required** - The list id to connect.
* dc (string) **required** - the portion after the dash in your api key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - a valid api key for your user account.
* method (string) **required** - is the method name from our api you are calling.
* output (string) - output formats for serialized calls.

### _method_listMergeVarUpdate.get
Update most parameters for a merge tag on a given list. You cannot currently change the merge type.


```js
mailchimp._method_listMergeVarUpdate.get({
  "id": "",
  "tag": "",
  "options": "",
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* id (string) **required** - The list id to connect.
* tag (string) **required** - The merge tag to update.
* options (string) **required** - The options to change for a merge var. See options: http://apidocs.mailchimp.com/api/1.3/listmergevaradd.func.php
* dc (string) **required** - the portion after the dash in your api key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - a valid api key for your user account.
* method (string) **required** - is the method name from our api you are calling.
* output (string) - output formats for serialized calls.

### _method_listMergeVarDel.get
Delete a merge tag from a given list and all its members.


```js
mailchimp._method_listMergeVarDel.get({
  "id": "",
  "tag": "",
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* id (string) **required** - The list id to connect.
* tag (string) **required** - The merge tag to delete.
* dc (string) **required** - the portion after the dash in your api key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - a valid api key for your user account.
* method (string) **required** - is the method name from our api you are calling.
* output (string) - output formats for serialized calls.

### _method_listMergeVarAdd.get
Add a new merge tag to a given list.


```js
mailchimp._method_listMergeVarAdd.get({
  "id": "",
  "tag": "",
  "name": "",
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* id (string) **required** - The list id to connect.
* tag (string) **required** - The merge tag to add, e.g. FNAME. 10 bytes max, valid characters: "A-Z 0-9 _" no spaces, dashes, etc.
* name (string) **required** - The long description of the tag being added, used for user displays.
* options (string) - Various options for this merge var. See options: http://apidocs.mailchimp.com/api/1.3/listmergevaradd.func.php
* dc (string) **required** - the portion after the dash in your api key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - a valid api key for your user account.
* method (string) **required** - is the method name from our api you are calling.
* output (string) - output formats for serialized calls.

### _method_listMembers.get
Get all of the list members for a list that are of a particular status.


```js
mailchimp._method_listMembers.get({
  "id": "",
  "status": "",
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* id (string) **required** - The list id to connect.
* status (string) **required** - The status to get members.
* since (string) - Pull all members whose status (subscribed/unsubscribed/cleaned) has changed or whose profile (updated) has changed since this date/time (in GMT) - format is YYYY-MM-DD HH:mm:ss (24hr).
* start (integer) - For large data sets, the page number to start at - defaults to 1st page of data (page 0).
* limit (integer) - For large data sets, the number of results to return - defaults to 100, upper limit set at 15000.
* dc (string) **required** - the portion after the dash in your api key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - a valid api key for your user account.
* method (string) **required** - is the method name from our api you are calling.
* output (string) - output formats for serialized calls.

### _method_listMemberInfo.get
Get all the information for particular members of a list.


```js
mailchimp._method_listMemberInfo.get({
  "id": "",
  "email_address": "",
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* id (string) **required** - The list id to connect.
* email_address (string) **required** - An array of up to 50 email addresses to get information for OR the "id"(s) for the member returned from listMembers, Webhooks, and Campaigns. For backwards compatibility, if a string is passed, it will be treated as an array with a single element (will not work with XML-RPC).
* dc (string) **required** - the portion after the dash in your api key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - a valid api key for your user account.
* method (string) **required** - is the method name from our api you are calling.
* output (string) - output formats for serialized calls.

### _method_listMemberActivity.get
Get the most recent 100 activities for particular list members (open, click, bounce, unsub, abuse, sent to).


```js
mailchimp._method_listMemberActivity.get({
  "id": "",
  "email_address": "",
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* id (string) **required** - The list id to connect.
* email_address (string) **required** - An array of up to 50 email addresses to get information for OR the "id"(s) for the member returned from listMembers, Webhooks, and Campaigns.
* dc (string) **required** - the portion after the dash in your api key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - a valid api key for your user account.
* method (string) **required** - is the method name from our api you are calling.
* output (string) - output formats for serialized calls.

### _method_listLocations.get
Retrieve the locations (countries) that the list's subscribers have been tagged to based on geocoding their IP address.


```js
mailchimp._method_listLocations.get({
  "id": "",
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* id (string) **required** - The list id to connect.
* dc (string) **required** - the portion after the dash in your api key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - a valid api key for your user account.
* method (string) **required** - is the method name from our api you are calling.
* output (string) - output formats for serialized calls.

### _method_listInterestGroupings.get
Get the list of interest groupings for a given list, including the label, form information, and included groups for each.


```js
mailchimp._method_listInterestGroupings.get({
  "id": "",
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* id (string) **required** - The list id to connect.
* dc (string) **required** - the portion after the dash in your api key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - a valid api key for your user account.
* method (string) **required** - is the method name from our api you are calling.
* output (string) - output formats for serialized calls.

### _method_listInterestGroupingUpdate.get
Update an existing Interest Grouping.


```js
mailchimp._method_listInterestGroupingUpdate.get({
  "grouping_id": "",
  "name": "",
  "value": "",
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* grouping_id (string) **required** - The interest grouping id.
* name (string) **required** - The name of the field to update - either "name" or "type". Groups with in the grouping should be manipulated using the standard listInterestGroup methods.
* value (string) **required** - The new value of the field. Grouping names must be unique - only "hidden" and "checkboxes" grouping types can be converted between each other.
* dc (string) **required** - the portion after the dash in your api key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - a valid api key for your user account.
* method (string) **required** - is the method name from our api you are calling.
* output (string) - output formats for serialized calls.

### _method_listInterestGroupingDel.get
Delete an existing Interest Grouping - this will permanently delete all contained interest groups and will remove those selections from all list members.


```js
mailchimp._method_listInterestGroupingDel.get({
  "grouping_id": "",
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* grouping_id (string) **required** - The interest grouping id.
* dc (string) **required** - the portion after the dash in your api key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - a valid api key for your user account.
* method (string) **required** - is the method name from our api you are calling.
* output (string) - output formats for serialized calls.

### _method_listInterestGroupingAdd.get
Add a new Interest Grouping - if interest groups for the List are not yet enabled, adding the first grouping will automatically turn them on.


```js
mailchimp._method_listInterestGroupingAdd.get({
  "id": "",
  "name": "",
  "type": "",
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* id (string) **required** - The list id to connect.
* name (string) **required** - The interest grouping to add - grouping names must be unique.
* type (string) **required** - The type of the grouping to add.
* groups (integer) - The lists of initial group names to be added - at least 1 is required and the names must be unique within a grouping. If the number takes you over the 60 group limit, an error will be thrown.
* dc (string) **required** - the portion after the dash in your api key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - a valid api key for your user account.
* method (string) **required** - is the method name from our api you are calling.
* output (string) - output formats for serialized calls.

### _method_listInterestGroupUpdate.get
Change the name of an Interest Group.


```js
mailchimp._method_listInterestGroupUpdate.get({
  "id": "",
  "old_name": "",
  "new_name": "",
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* id (string) **required** - The list id to connect.
* old_name (string) **required** - The interest group name to be changed.
* new_name (string) **required** - The new interest group name to be set.
* optional (integer) - The grouping to delete the group from. If not supplied, the first grouping on the list is used.
* dc (string) **required** - the portion after the dash in your api key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - a valid api key for your user account.
* method (string) **required** - is the method name from our api you are calling.
* output (string) - output formats for serialized calls.

### _method_listInterestGroupDel.get
Delete a single Interest Group - if the last group for a list is deleted, this will also turn groups for the list off.


```js
mailchimp._method_listInterestGroupDel.get({
  "id": "",
  "group_name": "",
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* id (string) **required** - The list id to connect.
* group_name (string) **required** - The interest group to delete.
* grouping_id (integer) - The grouping to delete the group from - get using listInterestGrouping() . If not supplied, the first grouping on the list is used.
* dc (string) **required** - the portion after the dash in your api key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - a valid api key for your user account.
* method (string) **required** - is the method name from our api you are calling.
* output (string) - output formats for serialized calls.

### _method_listInterestGroupAdd.get
Add a single Interest Group - if interest groups for the List are not yet enabled, adding the first group will automatically turn them on.


```js
mailchimp._method_listInterestGroupAdd.get({
  "id": "",
  "group_name": "",
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* id (string) **required** - The list id to connect.
* group_name (string) **required** - The interest group to add - group names must be unique within a grouping.
* grouping_id (integer) - The grouping to add the new group to - get using listInterestGrouping(). If not supplied, the first grouping on the list is used.
* dc (string) **required** - the portion after the dash in your api key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - a valid api key for your user account.
* method (string) **required** - is the method name from our api you are calling.
* output (string) - output formats for serialized calls.

### _method_listGrowthHistory.get
Access the Growth History by Month for a given list.


```js
mailchimp._method_listGrowthHistory.get({
  "id": "",
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* id (string) **required** - The list id to connect.
* dc (string) **required** - the portion after the dash in your api key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - a valid api key for your user account.
* method (string) **required** - is the method name from our api you are calling.
* output (string) - output formats for serialized calls.

### _method_listClients.get
Retrieve the clients that the list's subscribers have been tagged as being used based on user agents seen.


```js
mailchimp._method_listClients.get({
  "id": "",
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* id (string) **required** - The list id to connect.
* dc (string) **required** - the portion after the dash in your api key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - a valid api key for your user account.
* method (string) **required** - is the method name from our api you are calling.
* output (string) - output formats for serialized calls.

### _method_listBatchUnsubscribe.get
Unsubscribe a batch of email addresses to a list.


```js
mailchimp._method_listBatchUnsubscribe.get({
  "id": "",
  "emails": "",
  "delete_member": true,
  "send_goodbye": true,
  "send_notify": true,
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* id (string) **required** - The list id to connect.
* emails (string) **required** - Array of email addresses to unsubscribe.
* delete_member (boolean) **required** - Flag to completely delete the member from your list instead of just unsubscribing.
* send_goodbye (boolean) **required** - Flag to send the goodbye email to the email addresses.
* send_notify (boolean) **required** - Flag to send the unsubscribe notification email to the address defined in the list email notification settings.
* dc (string) **required** - the portion after the dash in your api key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - a valid api key for your user account.
* method (string) **required** - is the method name from our api you are calling.
* output (string) - output formats for serialized calls.

### _method_listBatchSubscribe.get
Subscribe a batch of email addresses to a list at once.


```js
mailchimp._method_listBatchSubscribe.get({
  "id": "",
  "batch": "",
  "double_optin": true,
  "update_existing": true,
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* id (string) **required** - The list id to connect.
* batch (string) **required** - An array of structs for each address to import with two special keys: "EMAIL" for the email address, and "EMAIL_TYPE" for the email type option (html, text, or mobile).
* double_optin (boolean) **required** - Flag to control whether to send an opt-in confirmation email.
* update_existing (boolean) **required** - Flag to control whether to update members that are already subscribed to the list or to return an error.
* replace_interests (boolean) - Flag to determine whether we replace the interest groups with the updated groups provided, or we add the provided groups to the member's interest groups.
* dc (string) **required** - the portion after the dash in your api key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - a valid api key for your user account.
* method (string) **required** - is the method name from our api you are calling.
* output (string) - output formats for serialized calls.

### _method_listActivity.get
Access up to the previous 180 days of daily detailed aggregated activity stats for a given list.


```js
mailchimp._method_listActivity.get({
  "id": "",
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* id (string) **required** - The list id to connect.
* dc (string) **required** - the portion after the dash in your api key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - a valid api key for your user account.
* method (string) **required** - is the method name from our api you are calling.
* output (string) - output formats for serialized calls.

### _method_listAbuseReports.get
Get all email addresses that complained about a given campaign.


```js
mailchimp._method_listAbuseReports.get({
  "id": "",
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* id (string) **required** - The list id to pull abuse reports.
* start (integer) - For large data sets, the page number to start at - defaults to 1st page of data (page 0).
* limit (integer) - For large data sets, the number of results to return - defaults to 500, upper limit set at 1000.
* since (string) - Pull only messages since this time - use YYYY-MM-DD HH:II:SS format in GMT.
* dc (string) **required** - the portion after the dash in your api key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - a valid api key for your user account.
* method (string) **required** - is the method name from our api you are calling.
* output (string) - output formats for serialized calls.

### _method_ping.get
A simple method you can call that will return a constant value as long as everything is good.


```js
mailchimp._method_ping.get({
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* dc (string) **required** - the portion after the dash in your api key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - a valid api key for your user account.
* method (string) **required** - is the method name from our api you are calling.
* output (string) - output formats for serialized calls.

### _method_listsForEmail.get
Retrieve all List Ids a member is subscribed to.


```js
mailchimp._method_listsForEmail.get({
  "email_address": "",
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* email_address (string) **required** - The email address to check OR the email "id" returned from listMemberInfo, Webhooks, and Campaigns.
* dc (string) **required** - the portion after the dash in your api key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - a valid api key for your user account.
* method (string) **required** - is the method name from our api you are calling.
* output (string) - output formats for serialized calls.

### _method_inlineCss.get
Send your HTML content to have the CSS inlined and optionally remove the original styles.


```js
mailchimp._method_inlineCss.get({
  "html": "",
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* html (string) **required** - Your HTML content.
* strip_css (boolean) - Whether you want the CSS style tags stripped from the returned document.
* dc (string) **required** - the portion after the dash in your api key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - a valid api key for your user account.
* method (string) **required** - is the method name from our api you are calling.
* output (string) - output formats for serialized calls.

### _method_getAccountDetails.get
Retrieve lots of account information including payments made, plan info, some account stats, installed modules, contact info, and more.


```js
mailchimp._method_getAccountDetails.get({
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* dc (string) **required** - the portion after the dash in your api key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - a valid api key for your user account.
* method (string) **required** - is the method name from our api you are calling.
* output (string) - output formats for serialized calls.

### _method_generateText.get
Have HTML content auto-converted to a text-only format. You can send: plain HTML, an array of Template content, an existing Campaign Id, or an existing Template Id. Note that this will not save anything to or update any of your lists, campaigns, or templates.


```js
mailchimp._method_generateText.get({
  "type": "",
  "content": "",
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* type (string) **required** - The type of content to parse.
* content (string) **required** - The content to use. For "html" expects a single string value, "template" expects an array like you send to campaignCreate, "url" expects a valid and public URL to pull from, "cid" expects a valid Campaign Id, and "tid" expects a valid Template Id on your account.
* dc (string) **required** - the portion after the dash in your api key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - a valid api key for your user account.
* method (string) **required** - is the method name from our api you are calling.
* output (string) - output formats for serialized calls.

### _method_chimpChatter.get
Return the current Chimp Chatter messages for an account.


```js
mailchimp._method_chimpChatter.get({
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* dc (string) **required** - the portion after the dash in your api key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - a valid api key for your user account.
* method (string) **required** - is the method name from our api you are calling.
* output (string) - output formats for serialized calls.

### _method_campaignsForEmail.get
Retrieve all Campaigns Ids a member was sent.


```js
mailchimp._method_campaignsForEmail.get({
  "email_address": "",
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* email_address (string) **required** - The email address to unsubscribe OR the email "id" returned from listMemberInfo, Webhooks, and Campaigns.
* options (string) - Extra options to modify the returned data. See options: "http://apidocs.mailchimp.com/api/1.3/campaignsforemail.func.php"
* dc (string) **required** - the portion after the dash in your api key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - a valid api key for your user account.
* method (string) **required** - is the method name from our api you are calling.
* output (string) - output formats for serialized calls.

### _method_gmonkeyMembers.get
Retrieve all Golden Monkey(s) for an account.


```js
mailchimp._method_gmonkeyMembers.get({
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* dc (string) **required** - the portion after the dash in your api key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - a valid api key for your user account.
* method (string) **required** - is the method name from our api you are calling.
* output (string) - output formats for serialized calls.

### _method_gmonkeyDel.get
Remove Golden Monkey(s).


```js
mailchimp._method_gmonkeyDel.get({
  "id": "",
  "email_address": "",
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* id (string) **required** - The list id to connect.
* email_address (string) **required** - An array of email addresses (max 50) to attempt to remove Golden Monkey status from.
* dc (string) **required** - the portion after the dash in your api key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - a valid api key for your user account.
* method (string) **required** - is the method name from our api you are calling.
* output (string) - output formats for serialized calls.

### _method_gmonkeyAdd.get
Add Golden Monkey(s).


```js
mailchimp._method_gmonkeyAdd.get({
  "id": "",
  "email_address": "",
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* id (string) **required** - The list id to connect.
* email_address (string) **required** - An array of email addresses (max 50) to attempt to flag as Golden Monkeys.
* dc (string) **required** - the portion after the dash in your api key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - a valid api key for your user account.
* method (string) **required** - is the method name from our api you are calling.
* output (string) - output formats for serialized calls.

### _method_gmonkeyActivity.get
Retrieve all Activity (opens/clicks) for Golden Monkeys over the past 10 days.


```js
mailchimp._method_gmonkeyActivity.get({
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* dc (string) **required** - the portion after the dash in your api key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - a valid api key for your user account.
* method (string) **required** - is the method name from our api you are calling.
* output (string) - output formats for serialized calls.

### _method_folders.get
List all the folders for a user account.


```js
mailchimp._method_folders.get({
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* type (string) - The type of folder to create.
* dc (string) **required** - the portion after the dash in your api key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - a valid api key for your user account.
* method (string) **required** - is the method name from our api you are calling.
* output (string) - output formats for serialized calls.

### _method_folderUpdate.get
Update the name of a folder for campaigns or autoresponders.


```js
mailchimp._method_folderUpdate.get({
  "fid": 0,
  "name": "",
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* fid (integer) **required** - The folder id to update.
* name (string) **required** - A new, unique name for a folder (max 100 bytes).
* type (string) - The type of folder to create.
* dc (string) **required** - the portion after the dash in your api key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - a valid api key for your user account.
* method (string) **required** - is the method name from our api you are calling.
* output (string) - output formats for serialized calls.

### _method_folderDel.get
Delete a campaign or autoresponder folder. Note that this will simply make campaigns in the folder appear unfiled, they are not removed.


```js
mailchimp._method_folderDel.get({
  "fid": 0,
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* fid (integer) **required** - The folder id to update.
* type (string) - The type of folder to create.
* dc (string) **required** - the portion after the dash in your api key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - a valid api key for your user account.
* method (string) **required** - is the method name from our api you are calling.
* output (string) - output formats for serialized calls.

### _method_folderAdd.get
Add a new folder to file campaigns or autoresponders.


```js
mailchimp._method_folderAdd.get({
  "name": "",
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* name (string) **required** - A unique name for a folder (max 100 bytes).
* type (string) - The type of folder to create.
* dc (string) **required** - the portion after the dash in your api key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - a valid api key for your user account.
* method (string) **required** - is the method name from our api you are calling.
* output (string) - output formats for serialized calls.

### _method_ecommOrders.get
Retrieve the Ecommerce Orders for an account.


```js
mailchimp._method_ecommOrders.get({
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* start (integer) - For large data sets, the page number to start at - defaults to 1st page of data (page 0).
* limit (integer) - For large data sets, the number of results to return - defaults to 100, upper limit set at 500.
* since (string) - Pull only messages since this time - use YYYY-MM-DD HH:II:SS format in GMT.
* dc (string) **required** - the portion after the dash in your api key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - a valid api key for your user account.
* method (string) **required** - is the method name from our api you are calling.
* output (string) - output formats for serialized calls.

### _method_ecommOrderDel.get
Delete Ecommerce Order Information used for segmentation.


```js
mailchimp._method_ecommOrderDel.get({
  "store_id": "",
  "order_id": "",
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* store_id (string) **required** - The store id the order belongs.
* order_id (string) **required** - The order id (generated by the store) to delete.
* dc (string) **required** - the portion after the dash in your api key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - a valid api key for your user account.
* method (string) **required** - is the method name from our api you are calling.
* output (string) - output formats for serialized calls.

### _method_ecommOrderAdd.get
Import Ecommerce Order Information to be used for Segmentation.


```js
mailchimp._method_ecommOrderAdd.get({
  "order": "",
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* order (string) **required** - An array of information pertaining to the order that has completed. See options: "http://apidocs.mailchimp.com/api/1.3/ecommorderadd.func.php"
* dc (string) **required** - the portion after the dash in your api key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - a valid api key for your user account.
* method (string) **required** - is the method name from our api you are calling.
* output (string) - output formats for serialized calls.

### _method_campaignOpenedAIM.get
Retrieve the list of email addresses that opened a given campaign with how many times they opened.


```js
mailchimp._method_campaignOpenedAIM.get({
  "cid": "",
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* cid (string) **required** - The campaign id to get opens.
* start (integer) - For large data sets, the page number to start at - defaults to 1st page of data (page 0).
* limit (integer) - For large data sets, the number of results to return - defaults to 1000, upper limit set at 15000.
* dc (string) **required** - the portion after the dash in your api key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - a valid api key for your user account.
* method (string) **required** - is the method name from our api you are calling.
* output (string) - output formats for serialized calls.

### _method_campaignNotOpenedAIM.get
Retrieve the list of email addresses that did not open a given campaign.


```js
mailchimp._method_campaignNotOpenedAIM.get({
  "cid": "",
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* cid (string) **required** - The campaign id to get no opens.
* start (integer) - For large data sets, the page number to start at - defaults to 1st page of data (page 0).
* limit (integer) - For large data sets, the number of results to return - defaults to 1000, upper limit set at 15000.
* dc (string) **required** - the portion after the dash in your api key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - a valid api key for your user account.
* method (string) **required** - is the method name from our api you are calling.
* output (string) - output formats for serialized calls.

### _method_campaignEmailStatsAIMAll.get
Given a campaign and correct paging limits, return the entire click and open history with timestamps, ordered by time, for every user a campaign was delivered to.


```js
mailchimp._method_campaignEmailStatsAIMAll.get({
  "cid": "",
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* cid (string) **required** - The campaign id to get stats.
* start (integer) - For large data sets, the page number to start at - defaults to 1st page of data (page 0).
* limit (integer) - For large data sets, the number of results to return - defaults to 100, upper limit set at 1000.
* dc (string) **required** - the portion after the dash in your api key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - a valid api key for your user account.
* method (string) **required** - is the method name from our api you are calling.
* output (string) - output formats for serialized calls.

### _method_campaignEmailStatsAIM.get
Given a campaign and email address, return the entire click and open history with timestamps, ordered by time.


```js
mailchimp._method_campaignEmailStatsAIM.get({
  "cid": "",
  "email_address": "",
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* cid (string) **required** - The campaign id to get stats.
* email_address (string) **required** - An array of up to 50 email addresses to check OR the email "id" returned from listMemberInfo, Webhooks, and Campaigns. For backwards compatibility, if a string is passed, it will be treated as an array with a single element (will not work with XML-RPC).
* dc (string) **required** - the portion after the dash in your api key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - a valid api key for your user account.
* method (string) **required** - is the method name from our api you are calling.
* output (string) - output formats for serialized calls.

### _method_campaignClickDetailAIM.get
Return the list of email addresses that clicked on a given url, and how many times they clicked.


```js
mailchimp._method_campaignClickDetailAIM.get({
  "cid": "",
  "url": "",
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* cid (string) **required** - The campaign id to get stats
* url (string) **required** - The URL of the link that was clicked on.
* start (integer) - For large data sets, the page number to start at - defaults to 1st page of data (page 0).
* limit (integer) - For large data sets, the number of results to return - defaults to 1000, upper limit set at 15000.
* dc (string) **required** - the portion after the dash in your api key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - a valid api key for your user account.
* method (string) **required** - is the method name from our api you are calling.
* output (string) - output formats for serialized calls.

### _method_campaignUnsubscribes.get
Get all unsubscribed email addresses for a given campaign.


```js
mailchimp._method_campaignUnsubscribes.get({
  "cid": "",
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* cid (string) **required** - The campaign id to pull bounces.
* start (integer) - For large data sets, the page number to start at - defaults to 1st page of data (page 0).
* limit (integer) - For large data sets, the number of results to return - defaults to 1000, upper limit set at 15000.
* dc (string) **required** - the portion after the dash in your api key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - a valid api key for your user account.
* method (string) **required** - is the method name from our api you are calling.
* output (string) - output formats for serialized calls.

### _method_campaignStats.get
Given a list and a campaign, get all the relevant campaign statistics (opens, bounces, clicks, etc.)


```js
mailchimp._method_campaignStats.get({
  "cid": "",
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* cid (string) **required** - The campaign id to pull stats.
* dc (string) **required** - the portion after the dash in your api key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - a valid api key for your user account.
* method (string) **required** - is the method name from our api you are calling.
* output (string) - output formats for serialized calls.

### _method_campaignMembers.get
Get all email addresses the campaign was successfully sent to (ie, no bounces)


```js
mailchimp._method_campaignMembers.get({
  "cid": "",
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* cid (string) **required** - The campaign id to pull members.
* status (string) - The status to pull. By default, all records are returned
* start (integer) - For large data sets, the page number to start at - defaults to 1st page of data (page 0).
* limit (integer) - For large data sets, the number of results to return - defaults to 1000, upper limit set at 15000.
* dc (string) **required** - the portion after the dash in your api key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - a valid api key for your user account.
* method (string) **required** - is the method name from our api you are calling.
* output (string) - output formats for serialized calls.

### _method_campaignGeoOpensForCountry.get
Retrieve the regions and number of opens tracked for a certain country.


```js
mailchimp._method_campaignGeoOpensForCountry.get({
  "cid": "",
  "code": "",
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* cid (string) **required** - The campaign id to pull bounces.
* code (string) **required** - An ISO3166 2 digit country code.
* dc (string) **required** - the portion after the dash in your api key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - a valid api key for your user account.
* method (string) **required** - is the method name from our api you are calling.
* output (string) - output formats for serialized calls.

### _method_campaignGeoOpens.get
Retrieve the countries and number of opens tracked for each.


```js
mailchimp._method_campaignGeoOpens.get({
  "cid": "",
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* cid (string) **required** - The campaign id to pull bounces.
* dc (string) **required** - the portion after the dash in your api key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - a valid api key for your user account.
* method (string) **required** - is the method name from our api you are calling.
* output (string) - output formats for serialized calls.

### _method_campaignEmailDomainPerformance.get
Get the top 5 performing email domains for this campaign.


```js
mailchimp._method_campaignEmailDomainPerformance.get({
  "cid": "",
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* cid (string) **required** - The campaign id to pull email domain performance.
* dc (string) **required** - the portion after the dash in your api key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - a valid api key for your user account.
* method (string) **required** - is the method name from our api you are calling.
* output (string) - output formats for serialized calls.

### _method_campaignEepUrlStats.get
Retrieve the tracked eepurl mentions on Twitter.


```js
mailchimp._method_campaignEepUrlStats.get({
  "cid": "",
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* cid (string) **required** - The campaign id to pull stats.
* dc (string) **required** - the portion after the dash in your api key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - a valid api key for your user account.
* method (string) **required** - is the method name from our api you are calling.
* output (string) - output formats for serialized calls.

### _method_campaignEcommOrders.get
Retrieve the Ecommerce Orders.


```js
mailchimp._method_campaignEcommOrders.get({
  "cid": "",
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* cid (string) **required** - The campaign id to pull bounces.
* start (integer) - For large data sets, the page number to start at - defaults to 1st page of data (page 0).
* limit (integer) - For large data sets, the number of results to return - defaults to 100, upper limit set at 500.
* since (string) - Pull only messages since this time - use YYYY-MM-DD HH:II:SS format in GMT.
* dc (string) **required** - the portion after the dash in your api key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - a valid api key for your user account.
* method (string) **required** - is the method name from our api you are calling.
* output (string) - output formats for serialized calls.

### _method_campaignClickStats.get
Get an array of the urls being tracked, and their click counts for a given campaign.


```js
mailchimp._method_campaignClickStats.get({
  "cid": "",
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* cid (string) **required** - The campaign id to pull stats.
* dc (string) **required** - the portion after the dash in your api key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - a valid api key for your user account.
* method (string) **required** - is the method name from our api you are calling.
* output (string) - output formats for serialized calls.

### _method_campaignBounceMessages.get
Retrieve the full bounce messages for the given campaign.


```js
mailchimp._method_campaignBounceMessages.get({
  "cid": "",
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* cid (string) **required** - The campaign id to pull bounces.
* start (integer) - For large data sets, the page number to start at - defaults to 1st page of data (page 0).
* limit (integer) - For large data sets, the number of results to return - defaults to 25, upper limit set at 50.
* since (string) - Pull only messages since this time - use YYYY-MM-DD format in GMT (we only store the date, not the time).
* dc (string) **required** - the portion after the dash in your api key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - a valid api key for your user account.
* method (string) **required** - is the method name from our api you are calling.
* output (string) - output formats for serialized calls.

### _method_campaignBounceMessage.get
Retrieve the most recent full bounce message for a specific email address on the given campaign.


```js
mailchimp._method_campaignBounceMessage.get({
  "cid": "",
  "email": "",
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* cid (string) **required** - The campaign id to pull bounces.
* email (string) **required** - The email address or unique id of the member to pull a bounce message.
* dc (string) **required** - the portion after the dash in your api key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - a valid api key for your user account.
* method (string) **required** - is the method name from our api you are calling.
* output (string) - output formats for serialized calls.

### _method_campaignAnalytics.get
Retrieve the Google Analytics data we've collected for this campaign. Note, requires Google Analytics Add-on to be installed and configured.


```js
mailchimp._method_campaignAnalytics.get({
  "cid": "",
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* cid (string) **required** - The campaign id to pull bounces.
* dc (string) **required** - the portion after the dash in your api key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - a valid api key for your user account.
* method (string) **required** - is the method name from our api you are calling.
* output (string) - output formats for serialized calls.

### _method_campaignAdvice.get
Retrieve the text presented in our app for how a campaign performed and any advice we may have for you - best suited for display in customized reports pages.


```js
mailchimp._method_campaignAdvice.get({
  "cid": "",
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* cid (string) **required** - The campaign id to pull advice text.
* dc (string) **required** - the portion after the dash in your api key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - a valid api key for your user account.
* method (string) **required** - is the method name from our api you are calling.
* output (string) - output formats for serialized calls.

### _method_campaignAbuseReports.get
Get all email addresses that complained about a given campaign.


```js
mailchimp._method_campaignAbuseReports.get({
  "cid": "",
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* cid (string) **required** - The campaign id to pull abuse reports.
* start (integer) - For large data sets, the page number to start at - defaults to 1st page of data (page 0).
* limit (integer) - For large data sets, the number of results to return - defaults to 500, upper limit set at 1000.
* since (string) - Pull only messages since this time - use YYYY-MM-DD HH:II:SS format in GMT.
* dc (string) **required** - the portion after the dash in your api key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - a valid api key for your user account.
* method (string) **required** - is the method name from our api you are calling.
* output (string) - output formats for serialized calls.

### _method_campaigns.get
Get the list of campaigns and their details matching the specified filters.


```js
mailchimp._method_campaigns.get({
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* filters (string) - A hash of filters to apply to this query. See options: "http://apidocs.mailchimp.com/api/1.3/campaigns.func.php"
* start (integer) - Control paging of campaigns, start results at this campaign #, defaults to 1st page of data (page 0).
* limit (integer) - Control paging of campaigns, number of campaigns to return with each call, defaults to 25 (max=1000).
* dc (string) **required** - the portion after the dash in your api key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - a valid api key for your user account.
* method (string) **required** - is the method name from our api you are calling.
* output (string) - output formats for serialized calls.

### _method_campaignUpdate.get
Update just about any setting for a campaign that has not been sent.


```js
mailchimp._method_campaignUpdate.get({
  "cid": "",
  "name": "",
  "value": "",
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* cid (string) **required** - The Campaign Id to update.
* name (string) **required** - For items in the options array, this will be that parameter's name (subject, from_email, etc.). Additional parameters will be that option name (content, segment_opts). "type_opts" will be the name of the type - rss, auto, trans, etc.
* value (string) **required** - For items in the options array, this will be that parameter's value. For additional parameters, this is the same value passed to them.
* dc (string) **required** - the portion after the dash in your api key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - a valid api key for your user account.
* method (string) **required** - is the method name from our api you are calling.
* output (string) - output formats for serialized calls.

### _method_campaignUnschedule.get
Unschedule a campaign that is scheduled to be sent in the future.


```js
mailchimp._method_campaignUnschedule.get({
  "cid": "",
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* cid (string) **required** - The id of the campaign to unschedule.
* dc (string) **required** - the portion after the dash in your api key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - a valid api key for your user account.
* method (string) **required** - is the method name from our api you are calling.
* output (string) - output formats for serialized calls.

### _method_campaignTemplateContent.get
Get the HTML template content sections for a campaign. Note that this will return very jagged, non-standard results based on the template a campaign is using.


```js
mailchimp._method_campaignTemplateContent.get({
  "cid": "",
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* cid (string) **required** - The campaign id to get content.
* dc (string) **required** - the portion after the dash in your api key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - a valid api key for your user account.
* method (string) **required** - is the method name from our api you are calling.
* output (string) - output formats for serialized calls.

### _method_campaignShareReport.get
Get the URL to a customized VIP Report for the specified campaign and optionally send an email to someone with links to it.


```js
mailchimp._method_campaignShareReport.get({
  "cid": "",
  "opts": "",
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* cid (string) **required** - The campaign id to share a report.
* opts (string) **required** - Various parameters which can be used to configure the shared report. See options: "http://apidocs.mailchimp.com/api/1.3/campaignsharereport.func.php"
* dc (string) **required** - The portion after the dash in your API Key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - A valid API Key for your user account.
* method (string) **required** - Is the method name from our API you are calling.
* output (string) - Output Formats for Serialized calls.

### _method_campaignSendTest.get
Send a test of this campaign to the provided email address.


```js
mailchimp._method_campaignSendTest.get({
  "cid": "",
  "test_emails": "",
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* cid (string) **required** - The id of the campaign to test.
* test_emails (string) **required** - An array of email address to receive the test message.
* send_type (string) - By default (null) both formats are sent - "html" or "text" send just that format.
* dc (string) **required** - The portion after the dash in your API Key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - A valid API Key for your user account.
* method (string) **required** - Is the method name from our API you are calling.
* output (string) - Output Formats for Serialized calls.

### _method_campaignSendNow.get
Send a given campaign immediately. For RSS campaigns, this will "start" them.


```js
mailchimp._method_campaignSendNow.get({
  "cid": "",
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* cid (string) **required** - The id of the campaign to send.
* dc (string) **required** - The portion after the dash in your API Key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - A valid API Key for your user account.
* method (string) **required** - Is the method name from our API you are calling.
* output (string) - Output Formats for Serialized calls.

### _method_campaignSegmentTest.get
Allows one to test their segmentation rules before creating a campaign using them.


```js
mailchimp._method_campaignSegmentTest.get({
  "list_id": "",
  "options": "",
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* list_id (string) **required** - The list to test segmentation on.
* options (string) **required** - Options for test segmentation. See options: "http://apidocs.mailchimp.com/api/1.3/campaignsegmenttest.func.php"
* dc (string) **required** - The portion after the dash in your API Key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - A valid API Key for your user account.
* method (string) **required** - Is the method name from our API you are calling.
* output (string) - Output Formats for Serialized calls.

### _method_campaignSchedule.get
Schedule a campaign to be sent in the future.


```js
mailchimp._method_campaignSchedule.get({
  "cid": "",
  "schedule_time": "",
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* cid (string) **required** - The id of the campaign to schedule.
* schedule_time (string) **required** - The time to schedule the campaign. For A/B Split "schedule" campaigns, the time for Group A - in YYYY-MM-DD HH:II:SS format in GMT.
* schedule_time_b (string) - The time to schedule Group B of an A/B Split "schedule" campaign - in YYYY-MM-DD HH:II:SS format in GMT.
* dc (string) **required** - The portion after the dash in your API Key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - A valid API Key for your user account.
* method (string) **required** - Is the method name from our API you are calling.
* output (string) - Output Formats for Serialized calls.

### _method_campaignResume.get
Resume sending an AutoResponder or RSS campaign.


```js
mailchimp._method_campaignResume.get({
  "cid": "",
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* cid (string) **required** - The id of the campaign to resume.
* dc (string) **required** - The portion after the dash in your API Key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - A valid API Key for your user account.
* method (string) **required** - Is the method name from our API you are calling.
* output (string) - Output Formats for Serialized calls.

### _method_campaignReplicate.get
Replicate a campaign.


```js
mailchimp._method_campaignReplicate.get({
  "cid": "",
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* cid (string) **required** - The Campaign Id to replicate.
* dc (string) **required** - The portion after the dash in your API Key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - A valid API Key for your user account.
* method (string) **required** - Is the method name from our API you are calling.
* output (string) - Output Formats for Serialized calls.

### _method_campaignPause.get
Pause an AutoResponder or RSS campaign from sending.


```js
mailchimp._method_campaignPause.get({
  "cid": "",
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* cid (string) **required** - The id of the campaign to pause.
* dc (string) **required** - The portion after the dash in your API Key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - A valid API Key for your user account.
* method (string) **required** - Is the method name from our API you are calling.
* output (string) - Output Formats for Serialized calls.

### _method_campaignEcommOrderAdd.get
Attach Ecommerce Order Information to a Campaign.


```js
mailchimp._method_campaignEcommOrderAdd.get({
  "order": "",
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* order (string) **required** - An array of information pertaining to the order that has completed. See options: "http://apidocs.mailchimp.com/api/1.3/campaignecommorderadd.func.php"
* dc (string) **required** - The portion after the dash in your API Key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - A valid API Key for your user account.
* method (string) **required** - Is the method name from our API you are calling.
* output (string) - Output Formats for Serialized calls.

### _method_campaignDelete.get
Delete a campaign.


```js
mailchimp._method_campaignDelete.get({
  "cid": "",
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* cid (string) **required** - The Campaign Id to delete.
* dc (string) **required** - The portion after the dash in your API Key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - A valid API Key for your user account.
* method (string) **required** - Is the method name from our API you are calling.
* output (string) - Output Formats for Serialized calls.

### _method_campaignCreate.get
Create a new draft campaign to send.


```js
mailchimp._method_campaignCreate.get({
  "type": "",
  "options": "",
  "content": "",
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* type (string) **required** - The Campaign Type to create.
* options (string) **required** - A hash of the standard options for this campaign. See options: "http://apidocs.mailchimp.com/api/1.3/campaigncreate.func.php"
* content (string) **required** - The content for this campaign. See options: "http://apidocs.mailchimp.com/api/1.3/campaigncreate.func.php"
* segment_opts (string) - If you wish to do Segmentation with this campaign this array should contain: see campaignSegmentTest(). It's suggested that you test your options against campaignSegmentTest(). Also, "trans" campaigns do not support segmentation.
* type_opts (string) - Array for RSS, A/B Split or AutoResponder campaigns. See options: "http://apidocs.mailchimp.com/api/1.3/campaigncreate.func.php"
* dc (string) **required** - The portion after the dash in your API Key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - A valid API Key for your user account.
* method (string) **required** - Is the method name from our API you are calling.
* output (string) - Output Formats for Serialized calls.

### _method_campaignContent.get
Get the content (both html and text) for a campaign either as it would appear in the campaign archive or as the raw, original content.


```js
mailchimp._method_campaignContent.get({
  "cid": "",
  "dc": "",
  "apikey": "",
  "method": ""
}, context)
```

#### Parameters
* cid (string) **required** - The campaign id to get content for (can be gathered using campaigns()).
* for_archive (boolean) - Controls whether we return the Archive version (true) or the Raw version (false), defaults to true.
* dc (string) **required** - The portion after the dash in your API Key. e.g. "us1", "us2", "uk1", etc.
* apikey (string) **required** - A valid API Key for your user account.
* method (string) **required** - Is the method name from our API you are calling.
* output (string) - Output Formats for Serialized calls.

