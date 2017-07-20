# @datafire/sendgrid

Client library for SendGrid v3

## Installation and Usage
```bash
npm install --save datafire @datafire/sendgrid
```

```js
let datafire = require('datafire');
let sendgrid = require('@datafire/sendgrid').actions;

let account = {
  Authorization: "",
}
let context = new datafire.Context({
  accounts: {
    sendgrid: account,
  }
})

sendgrid.whitelabel.links.default.get({}, context).then(data => {
  console.log(data);
})
```

## Description
# The SendGrid Web API V3 Documentation

This is the entirety of the documented v3 endpoints. We have updated all the descriptions, parameters, requests, and responses.

## Authentication 

Every endpoint requires Authentication in the form of an Authorization Header:

Authorization: Bearer API_KEY

## Actions
### access_settings.activity.get
**This endpoint allows you to retrieve a list of all of the IP addresses that recently attempted to access your account either through the User Interface or the API.**

IP Access Management allows you to control which IP addresses can be used to access your account, either through the User Interface or the API. There is no limit to the number of IP addresses that you can add to your whitelist. It is possible to remove your own IP address from the whitelist, thus preventing yourself from accessing your account.

For more information, please see our [User Guide](http://sendgrid.com/docs/User_Guide/Settings/ip_access_management.html).


```js
sendgrid.access_settings.activity.get({}, context)
```

#### Parameters
* limit (integer) - Limits the number of IPs to return.

### access_settings.whitelist.delete
**This endpoint allows you to remove one or more IPs from your IP whitelist.**

You can remove one IP at a time, or you can remove multiple IP addresses.

IP Access Management allows you to control which IP addresses can be used to access your account, either through the User Interface or the API. There is no limit to the number of IP addresses that you can add to your whitelist. It is possible to remove your own IP address from the whitelist, thus preventing yourself from accessing your account.

For more information, please see our [User Guide](http://sendgrid.com/docs/User_Guide/Settings/ip_access_management.html).


```js
sendgrid.access_settings.whitelist.delete({}, context)
```

#### Parameters
* body (object)

### access_settings.whitelist.get
**This endpoint allows you to retrieve a list of IP addresses that are currently whitelisted.**

IP Access Management allows you to control which IP addresses can be used to access your account, either through the User Interface or the API. There is no limit to the number of IP addresses that you can add to your whitelist. It is possible to remove your own IP address from the whitelist, thus preventing yourself from accessing your account.

For more information, please see our [User Guide](http://sendgrid.com/docs/User_Guide/Settings/ip_access_management.html).


```js
sendgrid.access_settings.whitelist.get(null, context)
```


### access_settings.whitelist.post
**This endpoint allows you to add one or more IP addresses to your IP whitelist.**

When adding an IP to your whitelist, include the IP address in an array. You can whitelist one IP at a time, or you can whitelist multiple IPs at once.

IP Access Management allows you to control which IP addresses can be used to access your account, either through the User Interface or the API. There is no limit to the number of IP addresses that you can add to your whitelist. It is possible to remove your own IP address from the whitelist, thus preventing yourself from accessing your account.

For more information, please see our [User Guide](http://sendgrid.com/docs/User_Guide/Settings/ip_access_management.html).


```js
sendgrid.access_settings.whitelist.post({}, context)
```

#### Parameters
* body (object)

### access_settings.whitelist.rule_id.delete
**This endpoint allows you to remove a specific IP address from your IP whitelist.**

When removing a specific IP address from your whitelist, you must include the ID in your call.

IP Access Management allows you to control which IP addresses can be used to access your account, either through the User Interface or the API. There is no limit to the number of IP addresses that you can add to your whitelist. It is possible to remove your own IP address from the whitelist, thus preventing yourself from accessing your account.

For more information, please see our [User Guide](http://sendgrid.com/docs/User_Guide/Settings/ip_access_management.html).


```js
sendgrid.access_settings.whitelist.rule_id.delete({
  "rule_id": ""
}, context)
```

#### Parameters
* rule_id (string) **required** - The ID of the whitelisted IP address that you want to retrieve.

### access_settings.whitelist.rule_id.get
**This endpoint allows you to retreive a specific IP address that has been whitelisted.**

You must include the ID for the specific IP address you want to retrieve in your call.

IP Access Management allows you to control which IP addresses can be used to access your account, either through the User Interface or the API. There is no limit to the number of IP addresses that you can add to your whitelist. It is possible to remove your own IP address from the whitelist, thus preventing yourself from accessing your account.

For more information, please see our [User Guide](http://sendgrid.com/docs/User_Guide/Settings/ip_access_management.html).


```js
sendgrid.access_settings.whitelist.rule_id.get({
  "rule_id": ""
}, context)
```

#### Parameters
* rule_id (string) **required** - The ID of the whitelisted IP address that you want to retrieve.

### GET_alerts
**This endpoint allows you to retieve all of your alerts.**

Alerts allow you to specify an email address to receive notifications regarding your email usage or statistics. 
* Usage alerts allow you to set the threshold at which an alert will be sent.
* Stats notifications allow you to set how frequently you would like to receive email statistics reports. For example, "daily", "weekly", or "monthly".

For more information about alerts, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/alerts.html).


```js
sendgrid.GET_alerts({}, context)
```

#### Parameters
* Authorization (string)

### POST_alerts
**This endpoint allows you to create a new alert.**

Alerts allow you to specify an email address to receive notifications regarding your email usage or statistics. 
* Usage alerts allow you to set the threshold at which an alert will be sent.
* Stats notifications allow you to set how frequently you would like to receive email statistics reports. For example, "daily", "weekly", or "monthly".

For more information about alerts, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/alerts.html).


```js
sendgrid.POST_alerts({}, context)
```

#### Parameters
* body (object)
* Authorization (string)

### alerts.alert_id.delete
**This endpoint allows you to delete an alert.**

Alerts allow you to specify an email address to receive notifications regarding your email usage or statistics. 
* Usage alerts allow you to set the threshold at which an alert will be sent.
* Stats notifications allow you to set how frequently you would like to receive email statistics reports. For example, "daily", "weekly", or "monthly".

For more information about alerts, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/alerts.html).


```js
sendgrid.alerts.alert_id.delete({
  "alert_id": 0
}, context)
```

#### Parameters
* alert_id (integer) **required** - The ID of the alert you would like to retrieve.

### alerts.alert_id.get
**This endpoint allows you to retrieve a specific alert.**

Alerts allow you to specify an email address to receive notifications regarding your email usage or statistics. 
* Usage alerts allow you to set the threshold at which an alert will be sent.
* Stats notifications allow you to set how frequently you would like to receive email statistics reports. For example, "daily", "weekly", or "monthly".

For more information about alerts, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/alerts.html).


```js
sendgrid.alerts.alert_id.get({
  "alert_id": 0
}, context)
```

#### Parameters
* Authorization (string)
* alert_id (integer) **required** - The ID of the alert you would like to retrieve.

### alerts.alert_id.patch
**This endpoint allows you to update an alert.**

Alerts allow you to specify an email address to receive notifications regarding your email usage or statistics. 
* Usage alerts allow you to set the threshold at which an alert will be sent.
* Stats notifications allow you to set how frequently you would like to receive email statistics reports. For example, "daily", "weekly", or "monthly".

For more information about alerts, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/alerts.html).


```js
sendgrid.alerts.alert_id.patch({
  "alert_id": 0
}, context)
```

#### Parameters
* body (object)
* alert_id (integer) **required** - The ID of the alert you would like to retrieve.

### GET_api_keys
**This endpoint allows you to retrieve all API Keys that belong to the authenticated user.**

The API Keys feature allows customers to be able to generate an API Key credential which can be used for authentication with the SendGrid v3 Web API or the [Mail API Endpoint](https://sendgrid.com/docs/API_Reference/Web_API/mail.html).


```js
sendgrid.GET_api_keys({}, context)
```

#### Parameters
* limit (integer)

### api_keys.post
**This enpoint allows you to create a new random API Key for the user.**

A JSON request body containing a "name" property is required. If number of maximum keys is reached, HTTP 403 will be returned.

There is a limit of 100 API Keys on your account.

The API Keys feature allows customers to be able to generate an API Key credential which can be used for authentication with the SendGrid v3 Web API or the [Mail API Endpoint](https://sendgrid.com/docs/API_Reference/Web_API/mail.html).

See the [API Key Permissions List](https://sendgrid.com/docs/API_Reference/Web_API_v3/API_Keys/api_key_permissions_list.html) for a list of all available scopes.


```js
sendgrid.api_keys.post({}, context)
```

#### Parameters
* body (object)

### api_keys.api_key_id.delete
**This endpoint allows you to revoke an existing API Key**

Authentications using this API Key will fail after this request is made, with some small propogation delay.If the API Key ID does not exist an HTTP 404 will be returned.

The API Keys feature allows customers to be able to generate an API Key credential which can be used for authentication with the SendGrid v3 Web API or the [Mail API Endpoint](https://sendgrid.com/docs/API_Reference/Web_API/mail.html).

## URI Parameters

| URI Parameter   | Type  | Required?  | Description  |
|---|---|---|---|
|api_key_id |string | required | The ID of the API Key you are deleting.|


```js
sendgrid.api_keys.api_key_id.delete({
  "api_key_id": ""
}, context)
```

#### Parameters
* api_key_id (string) **required**

### api_keys.api_key_id.get
**This endpoint allows you to retrieve a single api key.**

If the API Key ID does not exist an HTTP 404 will be returned.


```js
sendgrid.api_keys.api_key_id.get({
  "api_key_id": ""
}, context)
```

#### Parameters
* api_key_id (string) **required**

### api_keys.api_key_id.patch
**This endpoint allows you to update the name of an existing API Key.**

A JSON request body with a "name" property is required.

The API Keys feature allows customers to be able to generate an API Key credential which can be used for authentication with the SendGrid v3 Web API or the [Mail API Endpoint](https://sendgrid.com/docs/API_Reference/Web_API/mail.html).

## URI Parameters

| URI Parameter   | Type  | Required?  | Description  |
|---|---|---|---|
|api_key_id |string | required | The ID of the API Key you are updating.|


```js
sendgrid.api_keys.api_key_id.patch({
  "api_key_id": ""
}, context)
```

#### Parameters
* body (object)
* api_key_id (string) **required**

### api_keys.api_key_id.put
**This endpoint allows you to update the name and scopes of a given API key.**

A JSON request body with a "name" property is required.
Most provide the list of all the scopes an api key should have.

The API Keys feature allows customers to be able to generate an API Key credential which can be used for authentication with the SendGrid v3 Web API or the [Mail API Endpoint](https://sendgrid.com/docs/API_Reference/Web_API/mail.html).



```js
sendgrid.api_keys.api_key_id.put({
  "api_key_id": ""
}, context)
```

#### Parameters
* body (object)
* api_key_id (string) **required**

### asm.groups.get
**This endpoint allows you to retrieve information about multiple suppression groups.**

This endpoint will return information for each group ID that you include in your request. To add a group ID to your request, simply append `&id=` followed by the group ID.

Suppressions are a list of email addresses that will not receive content sent under a given [group](https://sendgrid.com/docs/API_Reference/Web_API_v3/Suppression_Management/groups.html).

Suppression groups, or [unsubscribe groups](https://sendgrid.com/docs/API_Reference/Web_API_v3/Suppression_Management/groups.html), allow you to label a category of content that you regularly send. This gives your recipients the ability to opt out of a specific set of your email. For example, you might define a group for your transactional email, and one for your marketing email so that your users can continue recieving your transactional email witout having to receive your marketing content.


```js
sendgrid.asm.groups.get({}, context)
```

#### Parameters
* id (integer) - The ID of a suppression group that you want to retrieve information for.

### asm.groups.post
**This endpoint allows you to create a new suppression group.**

Suppression groups, or unsubscribe groups, are specific types or categories of email that you would like your recipients to be able to unsubscribe from. For example: Daily Newsletters, Invoices, System Alerts.

The **name** and **description** of the unsubscribe group will be visible by recipients when they are managing their subscriptions.

Each user can create up to 25 different suppression groups.


```js
sendgrid.asm.groups.post({}, context)
```

#### Parameters
* body (object)

### asm.groups.group_id.delete
**This endpoint allows you to delete a suppression group.**

You can only delete groups that have not been attached to sent mail in the last 60 days. If a recipient uses the "one-click unsubscribe" option on an email associated with a deleted group, that recipient will be added to the global suppression list.

Suppression groups, or unsubscribe groups, are specific types or categories of email that you would like your recipients to be able to unsubscribe from. For example: Daily Newsletters, Invoices, System Alerts.

The **name** and **description** of the unsubscribe group will be visible by recipients when they are managing their subscriptions.

Each user can create up to 25 different suppression groups.


```js
sendgrid.asm.groups.group_id.delete({
  "group_id": 0
}, context)
```

#### Parameters
* group_id (integer) **required** - The id of the suppression group you want to delete.

### asm.groups.group_id.get
**This endpoint allows you to retrieve a single suppression group.**

Suppression groups, or unsubscribe groups, are specific types or categories of email that you would like your recipients to be able to unsubscribe from. For example: Daily Newsletters, Invoices, System Alerts.

The **name** and **description** of the unsubscribe group will be visible by recipients when they are managing their subscriptions.

Each user can create up to 25 different suppression groups.


```js
sendgrid.asm.groups.group_id.get({
  "group_id": 0
}, context)
```

#### Parameters
* group_id (integer) **required** - The id of the suppression group you want to delete.

### asm.groups.group_id.patch
**This endpoint allows you to update or change a suppression group.**

Suppression groups, or unsubscribe groups, are specific types or categories of email that you would like your recipients to be able to unsubscribe from. For example: Daily Newsletters, Invoices, System Alerts.

The **name** and **description** of the unsubscribe group will be visible by recipients when they are managing their subscriptions.

Each user can create up to 25 different suppression groups.


```js
sendgrid.asm.groups.group_id.patch({
  "group_id": 0
}, context)
```

#### Parameters
* body (object)
* group_id (integer) **required** - The id of the suppression group you want to delete.

### asm.groups.group_id.suppressions.get
**This endpoint allows you to retrieve all suppressed email addresses belonging to the given group.**

Suppressions are recipient email addresses that are added to [unsubscribe groups](https://sendgrid.com/docs/API_Reference/Web_API_v3/Suppression_Management/groups.html). Once a recipient's address is on the suppressions list for an unsubscribe group, they will not receive any emails that are tagged with that unsubscribe group.


```js
sendgrid.asm.groups.group_id.suppressions.get({
  "group_id": ""
}, context)
```

#### Parameters
* group_id (string) **required** - The id of the unsubscribe group that you are adding suppressions to.

### asm.groups.group_id.suppressions.post
**This endpoint allows you to add email addresses to an unsubscribe group.**

If you attempt to add suppressions to a group that has been deleted or does not exist, the suppressions will be added to the global suppressions list.

Suppressions are recipient email addresses that are added to [unsubscribe groups](https://sendgrid.com/docs/API_Reference/Web_API_v3/Suppression_Management/groups.html). Once a recipient's address is on the suppressions list for an unsubscribe group, they will not receive any emails that are tagged with that unsubscribe group.


```js
sendgrid.asm.groups.group_id.suppressions.post({
  "group_id": ""
}, context)
```

#### Parameters
* body (object)
* group_id (string) **required** - The id of the unsubscribe group that you are adding suppressions to.

### asm.groups.group_id.suppressions.search.post
**This endpoint allows you to search a suppression group for multiple suppressions.**

When given a list of email addresses and a group ID, this endpoint will return only the email addresses that have been unsubscribed from the given group.

Suppressions are a list of email addresses that will not receive content sent under a given [group](https://sendgrid.com/docs/API_Reference/Web_API_v3/Suppression_Management/groups.html).


```js
sendgrid.asm.groups.group_id.suppressions.search.post({
  "group_id": ""
}, context)
```

#### Parameters
* body (object)
* group_id (string) **required** - The ID of the suppression group that you would like to search.

### asm.groups.group_id.suppressions.email.delete
**This endpoint allows you to remove a suppressed email address from the given suppression group.**

Suppressions are recipient email addresses that are added to [unsubscribe groups](https://sendgrid.com/docs/API_Reference/Web_API_v3/Suppression_Management/groups.html). Once a recipient's address is on the suppressions list for an unsubscribe group, they will not receive any emails that are tagged with that unsubscribe group.


```js
sendgrid.asm.groups.group_id.suppressions.email.delete({
  "group_id": "",
  "email": ""
}, context)
```

#### Parameters
* group_id (string) **required** - The id of the suppression group that you are removing an email address from.
* email (string) **required** - The email address that you want to remove from the suppression group.

### asm.suppressions.get
**This endpoint allows you to retrieve a list of all suppressions.**

Suppressions are a list of email addresses that will not receive content sent under a given [group](https://sendgrid.com/docs/API_Reference/Web_API_v3/Suppression_Management/groups.html).


```js
sendgrid.asm.suppressions.get(null, context)
```


### asm.suppressions.global.post
**This endpoint allows you to add one or more email addresses to the global suppressions group.**

A global suppression (or global unsubscribe) is an email address of a recipient who does not want to receive any of your messages. A globally suppressed recipient will be removed from any email you send. For more information, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Suppressions/global_unsubscribes.html).


```js
sendgrid.asm.suppressions.global.post({}, context)
```

#### Parameters
* body (object)

### asm.suppressions.global.email.delete
**This endpoint allows you to remove an email address from the global suppressions group.**

A global suppression (or global unsubscribe) is an email address of a recipient who does not want to receive any of your messages. A globally suppressed recipient will be removed from any email you send. For more information, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Suppressions/global_unsubscribes.html).


```js
sendgrid.asm.suppressions.global.email.delete({
  "email": ""
}, context)
```

#### Parameters
* email (string) **required** - The email address of the global suppression you want to retrieve. Or, if you want to check if an email address is on the global suppressions list, enter that email address here.

### asm.suppressions.global.email.get
**This endpoint allows you to retrieve a global suppression. You can also use this endpoint to confirm if an email address is already globally suppresed.**

If the email address you include in the URL path parameter `{email}` is alreayd globally suppressed, the response will include that email address. If the address you enter for `{email}` is not globally suppressed, an empty JSON object `{}` will be returned.

A global suppression (or global unsubscribe) is an email address of a recipient who does not want to receive any of your messages. A globally suppressed recipient will be removed from any email you send. For more information, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Suppressions/global_unsubscribes.html).


```js
sendgrid.asm.suppressions.global.email.get({
  "email": ""
}, context)
```

#### Parameters
* email (string) **required** - The email address of the global suppression you want to retrieve. Or, if you want to check if an email address is on the global suppressions list, enter that email address here.

### asm.suppressions.email.get
**This endpoint returns the list of all groups that the given email address has been unsubscribed from.**

Suppressions are a list of email addresses that will not receive content sent under a given [group](https://sendgrid.com/docs/API_Reference/Web_API_v3/Suppression_Management/groups.html).


```js
sendgrid.asm.suppressions.email.get({
  "email": ""
}, context)
```

#### Parameters
* email (string) **required** - The email address that you want to search suppression groups for.

### browsers.stats.get
**This endpoint allows you to retrieve your email statistics segmented by browser type.**

**We only store up to 7 days of email activity in our database.** By default, 500 items will be returned per request via the Advanced Stats API endpoints.

Advanced Stats provide a more in-depth view of your email statistics and the actions taken by your recipients. You can segment these statistics by geographic location, device type, client type, browser, and mailbox provider. For more information about statistics, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Statistics/index.html).


```js
sendgrid.browsers.stats.get({
  "start_date": ""
}, context)
```

#### Parameters
* start_date (string) **required** - The starting date of the statistics to retrieve. Must follow format YYYY-MM-DD.
* end_date (string) - The end date of the statistics to retrieve. Defaults to today.
* limit (string) - The number of results to include on each page.
* offset (string) - The number of results to exclude.
* aggregated_by (string) - How to group the stats. Must be either "day", "week", or "month".
* browsers (string) - The browsers to get statistics for. You can include up to 10 different browsers by including this parameter multiple times.

### GET_campaigns
**This endpoint allows you to retrieve a list of all of your campaigns.**

Returns campaigns in reverse order they were created (newest first).

Returns an empty array if no campaigns exist.

For more information:

* [User Guide > Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html)


```js
sendgrid.GET_campaigns({}, context)
```

#### Parameters
* limit (integer) - The number of results you would like to receive at a time.
* offset (integer) - The index of the first campaign to return, where 0 is the first campaign.

### POST_campaigns
**This endpoint allows you to create a campaign.**

Our Marketing Campaigns API lets you create, manage, send, and schedule campaigns.

Note: In order to send or schedule the campaign, you will be required to provide a subject, sender ID, content (we suggest both html and plain text), and at least one list or segment ID. This information is not required when you create a campaign.

For more information:

* [User Guide > Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html)


```js
sendgrid.POST_campaigns({}, context)
```

#### Parameters
* body (object)

### campaigns.campaign_id.delete
**This endpoint allows you to delete a specific campaign.**

Our Marketing Campaigns API lets you create, manage, send, and schedule campaigns.

For more information:

* [User Guide > Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html)


```js
sendgrid.campaigns.campaign_id.delete({
  "campaign_id": 0
}, context)
```

#### Parameters
* campaign_id (integer) **required** - The ID of the campaign that you would like to delete.

### campaigns.campaign_id.get
**This endpoint allows you to retrieve a specific campaign.**

Our Marketing Campaigns API lets you create, manage, send, and schedule campaigns.

For more information:

* [User Guide > Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html)


```js
sendgrid.campaigns.campaign_id.get({
  "campaign_id": 0
}, context)
```

#### Parameters
* campaign_id (integer) **required** - The ID of the campaign that you would like to delete.

### campaigns.campaign_id.patch
Update a campaign. This is especially useful if you only set up the campaign using POST /campaigns, but didn't set many of the parameters.

For more information:

* [User Guide > Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html)


```js
sendgrid.campaigns.campaign_id.patch({
  "campaign_id": 0
}, context)
```

#### Parameters
* body (object)
* campaign_id (integer) **required** - The ID of the campaign that you would like to delete.

### campaigns.campaign_id.schedules.delete
**This endpoint allows you to unschedule a campaign that has already been scheduled to be sent.**

A successful unschedule will return a 204.
If the specified campaign is in the process of being sent, the only option is to cancel (a different method).

For more information:

* [User Guide > Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html)


```js
sendgrid.campaigns.campaign_id.schedules.delete({
  "campaign_id": 0
}, context)
```

#### Parameters
* campaign_id (integer) **required**

### campaigns.campaign_id.schedules.get
**This endpoint allows you to retrieve the date and time that the given campaign has been scheduled to be sent.**

For more information:

* [User Guide > Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html)


```js
sendgrid.campaigns.campaign_id.schedules.get({
  "campaign_id": 0
}, context)
```

#### Parameters
* campaign_id (integer) **required**

### campaigns.campaign_id.schedules.patch
**This endpoint allows to you change the scheduled time and date for a campaign to be sent.**

For more information:

* [User Guide > Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html)


```js
sendgrid.campaigns.campaign_id.schedules.patch({
  "campaign_id": 0
}, context)
```

#### Parameters
* body (object)
* campaign_id (integer) **required**

### campaigns.campaign_id.schedules.post
**This endpoint allows you to schedule a specific date and time for your campaign to be sent.**

For more information:

* [User Guide > Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html)


```js
sendgrid.campaigns.campaign_id.schedules.post({
  "campaign_id": 0
}, context)
```

#### Parameters
* body (object)
* campaign_id (integer) **required**

### campaigns.campaign_id.schedules.now.post
**This endpoint allows you to immediately send a campaign at the time you make the API call.**

Normally a POST would have a request body, but since this endpoint is telling us to send a resource that is already created, a request body is not needed.

For more information:

* [User Guide > Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html)


```js
sendgrid.campaigns.campaign_id.schedules.now.post({
  "campaign_id": 0
}, context)
```

#### Parameters
* campaign_id (integer) **required**

### campaigns.campaign_id.schedules.test.post
**This endpoint allows you to send a test campaign.**

To send to multiple addresses, use an array for the JSON "to" value ["one@address","two@address"]

For more information:

* [User Guide > Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html)


```js
sendgrid.campaigns.campaign_id.schedules.test.post({
  "campaign_id": 0
}, context)
```

#### Parameters
* body (object)
* campaign_id (integer) **required**

### GET_categories
**This endpoint allows you to retrieve a list of all of your categories.**

Categories can help organize your email analytics by enabling you to “tag” emails by type or broad topic. You can define your own custom categories. For more information, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Statistics/categories.html).


```js
sendgrid.GET_categories({}, context)
```

#### Parameters
* limit (integer) - The number of categories to display per page.
* category (string) - Allows you to perform a prefix search on this particular category.
* offset (integer) - The point in the list that you would like to begin displaying results.

### categories.stats.get
**This endpoint allows you to retrieve all of your email statistics for each of your categories.**

If you do not define any query parameters, this endpoint will return a sum for each category in groups of 10.

Categories allow you to group your emails together according to broad topics that you define. For more information, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Statistics/categories.html). 


```js
sendgrid.categories.stats.get({
  "start_date": "",
  "categories": ""
}, context)
```

#### Parameters
* start_date (string) **required** - The starting date of the statistics to retrieve. Must follow format YYYY-MM-DD
* end_date (string) - The end date of the statistics to retrieve. Defaults to today. Must follow format YYYY-MM-DD.
* categories (string) **required** - The individual categories that you want to retrieve statistics for. You may include up to 10 different categories.
* limit (integer) - The number of results to include.
* offset (integer) - The number of results to skip.
* aggregated_by (string) - How to group the statistics. Must be either "day", "week", or "month".

### categories.stats.sums.get
**This endpoint allows you to retrieve the total sum of each email statistic for every category over the given date range.**

If you do not define any query parameters, this endpoint will return a sum for each category in groups of 10.

Categories allow you to group your emails together according to broad topics that you define. For more information, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Statistics/categories.html). 


```js
sendgrid.categories.stats.sums.get({
  "start_date": ""
}, context)
```

#### Parameters
* sort_by_metric (string) - The metric that you want to sort by.  Must be a single metric.
* sort_by_direction (string) - The direction you want to sort.
* start_date (string) **required** - The starting date of the statistics to retrieve. Must follow format YYYY-MM-DD.
* end_date (string) - The end date of the statistics to retrieve. Defaults to today. Must follow format YYYY-MM-DD.
* limit (integer) - Limits the number of results returned.
* offset (integer) - The point in the list to begin retrieving results.
* aggregated_by (string) - How to group the statistics. Must be either "day", "week", or "month".

### clients.stats.get
**This endpoint allows you to retrieve your email statistics segmented by client type.**

**We only store up to 7 days of email activity in our database.** By default, 500 items will be returned per request via the Advanced Stats API endpoints.

Advanced Stats provide a more in-depth view of your email statistics and the actions taken by your recipients. You can segment these statistics by geographic location, device type, client type, browser, and mailbox provider. For more information about statistics, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Statistics/index.html).


```js
sendgrid.clients.stats.get({
  "start_date": ""
}, context)
```

#### Parameters
* start_date (string) **required** - The starting date of the statistics to retrieve. Must follow format YYYY-MM-DD.
* end_date (string) - The end date of the statistics to retrieve. Defaults to today. Must follow format YYYY-MM-DD.
* aggregated_by (string) - How to group the statistics. Must be either "day", "week", or "month".

### clients.client_type.stats.get
**This endpoint allows you to retrieve your email statistics segmented by a specific client type.**

**We only store up to 7 days of email activity in our database.** By default, 500 items will be returned per request via the Advanced Stats API endpoints.

## Available Client Types
- phone
- tablet
- webmail
- desktop

Advanced Stats provide a more in-depth view of your email statistics and the actions taken by your recipients. You can segment these statistics by geographic location, device type, client type, browser, and mailbox provider. For more information about statistics, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Statistics/index.html).


```js
sendgrid.clients.client_type.stats.get({
  "start_date": "",
  "client_type": ""
}, context)
```

#### Parameters
* start_date (string) **required** - The starting date of the statistics to retrieve. Must follow format YYYY-MM-DD.
* end_date (string) - The end date of the statistics to retrieve. Defaults to today. Must follow format YYYY-MM-DD.
* aggregated_by (string) - How to group the statistics. Must be either "day", "week", or "month".
* client_type (string) **required** - Specifies the type of client to retrieve stats for. Must be either "phone", "tablet", "webmail", or "desktop".

### contactdb.custom_fields.get
**This endpoint allows you to retrieve all custom fields.** 

The contactdb is a database of your contacts for [SendGrid Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html).


```js
sendgrid.contactdb.custom_fields.get(null, context)
```


### contactdb.custom_fields.post
**This endpoint allows you to create a custom field.**

The contactdb is a database of your contacts for [SendGrid Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html).


```js
sendgrid.contactdb.custom_fields.post({}, context)
```

#### Parameters
* body (object)

### contactdb.custom_fields.custom_field_id.delete
**This endpoint allows you to delete a custom field by ID.**

The contactdb is a database of your contacts for [SendGrid Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html).


```js
sendgrid.contactdb.custom_fields.custom_field_id.delete({
  "custom_field_id": 0
}, context)
```

#### Parameters
* custom_field_id (integer) **required** - The ID of the custom field that you want to retrieve.

### contactdb.custom_fields.custom_field_id.get
**This endpoint allows you to retrieve a custom field by ID.**

The contactdb is a database of your contacts for [SendGrid Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html).


```js
sendgrid.contactdb.custom_fields.custom_field_id.get({
  "custom_field_id": 0
}, context)
```

#### Parameters
* custom_field_id (integer) **required** - The ID of the custom field that you want to retrieve.

### contactdb.lists.delete
**This endpoint allows you to delete multiple recipient lists.**

The Contacts API helps you manage your [Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html) recipients.


```js
sendgrid.contactdb.lists.delete({}, context)
```

#### Parameters
* body (array)

### contactdb.lists.get
**This endpoint allows you to retrieve all of your recipient lists. If you don't have any lists, an empty array will be returned.**

The Contacts API helps you manage your [Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html) recipients.


```js
sendgrid.contactdb.lists.get(null, context)
```


### contactdb.lists.post
**This endpoint allows you to create a list for your recipients.**

The Contacts API helps you manage your [Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html) recipients.


```js
sendgrid.contactdb.lists.post({}, context)
```

#### Parameters
* body (object)

### contactdb.lists.list_id.delete
**This endpoint allows you to delete a specific recipient list with the given ID.**

The Contacts API helps you manage your [Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html) recipients.


```js
sendgrid.contactdb.lists.list_id.delete({
  "list_id": ""
}, context)
```

#### Parameters
* delete_contacts (boolean) - Adds the ability to delete all contacts on the list in addition to deleting the list.
* list_id (string) **required**

### contactdb.lists.list_id.get
This endpoint allows you to retrieve a single recipient list.

The Contacts API helps you manage your [Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html) recipients.


```js
sendgrid.contactdb.lists.list_id.get({
  "list_id": ""
}, context)
```

#### Parameters
* list_id_query (integer) - The ID of the list to retrieve.
* list_id (string) **required**

### contactdb.lists.list_id.patch
**This endpoint allows you to update the name of one of your recipient lists.**


The Contacts API helps you manage your [Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html) recipients.


```js
sendgrid.contactdb.lists.list_id.patch({
  "list_id": 0,
  "list_id_path": ""
}, context)
```

#### Parameters
* list_id (integer) **required** - The ID of the list you are updating.
* body (object)
* list_id_path (string) **required**

### contactdb.lists.list_id.recipients.get
**This endpoint allows you to retrieve all recipients on the list with the given ID.** 

The Contacts API helps you manage your [Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html) recipients.


```js
sendgrid.contactdb.lists.list_id.recipients.get({
  "list_id": 0,
  "list_id_path": 0
}, context)
```

#### Parameters
* page (integer) - Page index of first recipient to return (must be a positive integer)
* page_size (integer) - Number of recipients to return at a time (must be a positive integer between 1 and 1000)
* list_id (integer) **required** - The ID of the list whose recipients you are requesting.
* list_id_path (integer) **required** - The id of the list of recipients you want to retrieve.

### contactdb.lists.list_id.recipients.post
**This endpoint allows you to add multiple recipients to a list.**

Adds existing recipients to a list, passing in the recipient IDs to add. Recipient IDs should be passed exactly as they are returned from recipient endpoints.

The Contacts API helps you manage your [Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html) recipients.


```js
sendgrid.contactdb.lists.list_id.recipients.post({
  "list_id": 0
}, context)
```

#### Parameters
* body (array)
* list_id (integer) **required** - The id of the list of recipients you want to retrieve.

### contactdb.lists.list_id.recipients.recipient_id.delete
**This endpoint allows you to delete a single recipient from a list.**

The Contacts API helps you manage your [Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html) recipients.


```js
sendgrid.contactdb.lists.list_id.recipients.recipient_id.delete({
  "list_id": 0,
  "recipient_id": 0,
  "list_id_path": 0,
  "recipient_id_path": ""
}, context)
```

#### Parameters
* list_id (integer) **required** - The ID of the list you are taking this recipient away from.
* recipient_id (integer) **required** - The ID of the recipient to take off the list.
* list_id_path (integer) **required** - The ID of the list that you want to add the recipient to.
* recipient_id_path (string) **required** - The ID of the recipient you are adding to the list.

### contactdb.lists.list_id.recipients.recipient_id.post
**This endpoint allows you to add a single recipient to a list.**

The Contacts API helps you manage your [Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html) recipients.


```js
sendgrid.contactdb.lists.list_id.recipients.recipient_id.post({
  "list_id": 0,
  "recipient_id": ""
}, context)
```

#### Parameters
* list_id (integer) **required** - The ID of the list that you want to add the recipient to.
* recipient_id (string) **required** - The ID of the recipient you are adding to the list.

### contactdb.recipients.delete
**This endpoint allows you to deletes one or more recipients.**

The body of an API call to this endpoint must include an array of recipient IDs of the recipients you want to delete.

The contactdb is a database of your contacts for [SendGrid Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html).


```js
sendgrid.contactdb.recipients.delete({}, context)
```

#### Parameters
* body (array)

### contactdb.recipients.get
**This endpoint allows you to retrieve all of your Marketing Campaigns recipients.**

Batch deletion of a page makes it possible to receive an empty page of recipients before reaching the end of
the list of recipients. To avoid this issue; iterate over pages until a 404 is retrieved.

The Contacts API helps you manage your [Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html) recipients.


```js
sendgrid.contactdb.recipients.get({}, context)
```

#### Parameters
* page (integer) - Page index of first recipients to return (must be a positive integer)
* page_size (integer) - Number of recipients to return at a time (must be a positive integer between 1 and 1000)

### contactdb.recipients.patch
**This endpoint allows you to update one or more recipients.**

The body of an API call to this endpoint must include an array of one or more recipient objects.

It is of note that you can add custom field data as parameters on recipient objects. We have provided an example using some of the default custom fields SendGrid provides.

The contactdb is a database of your contacts for [SendGrid Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html).


```js
sendgrid.contactdb.recipients.patch({}, context)
```

#### Parameters
* body (array)

### contactdb.recipients.post
**This endpoint allows you to add a Marketing Campaigns recipient.**

It is of note that you can add custom field data as a parameter on this endpoint. We have provided an example using some of the default custom fields SendGrid provides.

The Contacts API helps you manage your [Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html) recipients.


```js
sendgrid.contactdb.recipients.post({}, context)
```

#### Parameters
* body (array)

### contactdb.recipients.billable_count.get
**This endpoint allows you to retrieve the number of Marketing Campaigns recipients that you will be billed for.**

You are billed for marketing campaigns based on the highest number of recipients you have had in your account at one time. This endpoint will allow you to know the current billable count value.

The Contacts API helps you manage your [Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html) recipients.


```js
sendgrid.contactdb.recipients.billable_count.get(null, context)
```


### contactdb.recipients.count.get
**This endpoint allows you to retrieve the total number of Marketing Campaigns recipients.**

The contactdb is a database of your contacts for [SendGrid Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html).


```js
sendgrid.contactdb.recipients.count.get(null, context)
```


### contactdb.recipients.search.get
**This endpoint allows you to perform a search on all of your Marketing Campaigns recipients.**

field_name:

* is a variable that is substituted for your actual custom field name from your recipient.
* Text fields must be url-encoded. Date fields are searchable only by unix timestamp (e.g. 2/2/2015 becomes 1422835200)
* If field_name is a 'reserved' date field, such as created_at or updated_at, the system will internally convert
your epoch time to a date range encompassing the entire day. For example, an epoch time of 1422835600 converts to
Mon, 02 Feb 2015 00:06:40 GMT, but internally the system will search from Mon, 02 Feb 2015 00:00:00 GMT through
Mon, 02 Feb 2015 23:59:59 GMT.

The contactdb is a database of your contacts for [SendGrid Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html).


```js
sendgrid.contactdb.recipients.search.get({}, context)
```

#### Parameters
* {field_name} (string)

### contactdb.recipients.recipient_id.delete
**This endpoint allows you to delete a single recipient with the given ID from your contact database.**

The Contacts API helps you manage your [Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html) recipients.


```js
sendgrid.contactdb.recipients.recipient_id.delete({
  "recipient_id": ""
}, context)
```

#### Parameters
* recipient_id (string) **required** - The ID of the recipient that you want to retrieve.

### contactdb.recipients.recipient_id.get
**This endpoint allows you to retrieve a single recipient by ID from your contact database.**

The Contacts API helps you manage your [Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html) recipients.


```js
sendgrid.contactdb.recipients.recipient_id.get({
  "recipient_id": ""
}, context)
```

#### Parameters
* recipient_id (string) **required** - The ID of the recipient that you want to retrieve.

### contactdb.recipients.recipient_id.lists.get
**This endpoint allows you to retrieve the lists that a given recipient belongs to.**

Each recipient can be on many lists. This endpoint gives you all of the lists that any one recipient has been added to.

The Contacts API helps you manage your [Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html) recipients.


```js
sendgrid.contactdb.recipients.recipient_id.lists.get({
  "recipient_id": ""
}, context)
```

#### Parameters
* recipient_id (string) **required** - The ID of the recipient for whom you are retrieving lists.

### contactdb.reserved_fields.get
**This endpoint allows you to list all fields that are reserved and can't be used for custom field names.**

The contactdb is a database of your contacts for [SendGrid Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html).


```js
sendgrid.contactdb.reserved_fields.get(null, context)
```


### contactdb.segments.get
**This endpoint allows you to retrieve all of your segments.**

The Contacts API helps you manage your [Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html) recipients.

For more information about segments in Marketing Campaigns, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/lists.html#-Create-a-Segment).


```js
sendgrid.contactdb.segments.get(null, context)
```


### contactdb.segments.post
**This endpoint allows you to create a segment.**

All recipients in your contactdb will be added or removed automatically depending on whether they match the criteria for this segment.

List Id:

* Send this to segment from an existing list
* Don't send this in order to segment from your entire contactdb.

Valid operators for create and update depend on the type of the field you are segmenting: 

* **Dates:** "eq", "ne", "lt" (before), "gt" (after) 
* **Text:** "contains", "eq" (is - matches the full field), "ne" (is not - matches any field where the entire field is not the condition value) 
* **Numbers:** "eq", "lt", "gt" 
* **Email Clicks and Opens:** "eq" (opened), "ne" (not opened) 

Segment conditions using "eq" or "ne" for email clicks and opens should provide a "field" of either *clicks.campaign_identifier* or *opens.campaign_identifier*. The condition value should be a string containing the id of a completed campaign. 

Segments may contain multiple condtions, joined by an "and" or "or" in the "and_or" field. The first condition in the conditions list must have an empty "and_or", and subsequent conditions must all specify an "and_or".

The Contacts API helps you manage your [Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html) recipients.

For more information about segments in Marketing Campaigns, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/lists.html#-Create-a-Segment).


```js
sendgrid.contactdb.segments.post({}, context)
```

#### Parameters
* body (object)

### contactdb.segments.segment_id.delete
**This endpoint allows you to delete a segment from your recipients database.**

You also have the option to delete all the contacts from your Marketing Campaigns recipient database who were in this segment.

The Contacts API helps you manage your [Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html) recipients.

For more information about segments in Marketing Campaigns, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/lists.html#-Create-a-Segment).


```js
sendgrid.contactdb.segments.segment_id.delete({
  "segment_id": ""
}, context)
```

#### Parameters
* delete_contacts (boolean) - True to delete all contacts matching the segment in addition to deleting the segment
* segment_id (string) **required**

### contactdb.segments.segment_id.get
**This endpoint allows you to retrieve a single segment with the given ID.**

The Contacts API helps you manage your [Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html) recipients.

For more information about segments in Marketing Campaigns, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/lists.html#-Create-a-Segment).


```js
sendgrid.contactdb.segments.segment_id.get({
  "segment_id": 0,
  "segment_id_path": ""
}, context)
```

#### Parameters
* segment_id (integer) **required** - The ID of the segment you want to request.
* segment_id_path (string) **required**

### contactdb.segments.segment_id.patch
**This endpoint allows you to update a segment.**

The Contacts API helps you manage your [Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html) recipients.

For more information about segments in Marketing Campaigns, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/lists.html#-Create-a-Segment).


```js
sendgrid.contactdb.segments.segment_id.patch({
  "segment_id": ""
}, context)
```

#### Parameters
* segment_id_query (string) - The ID of the segment you are updating.
* body (object)
* segment_id (string) **required**

### contactdb.segments.segment_id.recipients.get
**This endpoint allows you to retrieve all of the recipients in a segment with the given ID.**

The Contacts API helps you manage your [Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html) recipients.

For more information about segments in Marketing Campaigns, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/lists.html#-Create-a-Segment).


```js
sendgrid.contactdb.segments.segment_id.recipients.get({
  "segment_id": 0
}, context)
```

#### Parameters
* page (integer)
* page_size (integer)
* segment_id (integer) **required** - The ID of the segment from which you want to retrieve recipients.

### devices.stats.get
**This endpoint allows you to retrieve your email statistics segmented by the device type.**

**We only store up to 7 days of email activity in our database.** By default, 500 items will be returned per request via the Advanced Stats API endpoints.

## Available Device Types
| **Device** | **Description** | **Example** |
|---|---|---|
| Desktop | Email software on desktop computer. | I.E., Outlook, Sparrow, or Apple Mail. |
| Webmail |	A web-based email client. | I.E., Yahoo, Google, AOL, or Outlook.com. |
| Phone | A smart phone. | iPhone, Android, Blackberry, etc.
| Tablet | A tablet computer. | iPad, android based tablet, etc. |
| Other | An unrecognized device. |

Advanced Stats provide a more in-depth view of your email statistics and the actions taken by your recipients. You can segment these statistics by geographic location, device type, client type, browser, and mailbox provider. For more information about statistics, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Statistics/index.html).


```js
sendgrid.devices.stats.get({
  "start_date": ""
}, context)
```

#### Parameters
* end_date (string) - The end date of the statistics to retrieve. Defaults to today.
* limit (integer) - How many results to include on each page.
* offset (integer) - How many results to exclude.
* aggregated_by (string) - How to group the statistics. Must be either "day", "week", or "month".
* start_date (string) **required** - The starting date of the statistics to retrieve.

### geo.stats.get
**This endpoint allows you to retrieve your email statistics segmented by country and state/province.**

**We only store up to 7 days of email activity in our database.** By default, 500 items will be returned per request via the Advanced Stats API endpoints.

Advanced Stats provide a more in-depth view of your email statistics and the actions taken by your recipients. You can segment these statistics by geographic location, device type, client type, browser, and mailbox provider. For more information about statistics, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Statistics/index.html).


```js
sendgrid.geo.stats.get({
  "start_date": ""
}, context)
```

#### Parameters
* limit (integer) - How many results to include on each page.
* offset (integer) - How many results to exclude.
* aggregated_by (string) - How you would like the statistics to be grouped. Must be either "day", "week", or "month".
* start_date (string) **required** - The starting date of the statistics to retrieve. Must be in format YYYY-MM-DD
* end_date (string) - The end date of the statistics to retrieve. 
* country (string) - The country you would like to see statistics for. Currently only supported for US and CA.

### GET_ips
**This endpoint allows you to retrieve a list of all assigned and unassigned IPs.**

Response includes warm up status, pools, assigned subusers, and whitelabel info. The start_date field corresponds to when warmup started for that IP.

A single IP address or a range of IP addresses may be dedicated to an account in order to send email for multiple domains. The reputation of this IP is based on the aggregate performance of all the senders who use it.


```js
sendgrid.GET_ips({}, context)
```

#### Parameters
* ip (string) - The IP address to get
* exclude_whitelabels (boolean) - Should we exclude whitelabels?
* subuser (string) - The subuser you are requesting for.
* limit (integer) - The number of IPs you want returned at the same time.
* offset (integer) - The offset for the number of IPs that you are requesting.

### ips.assigned.get
**This endpoint allows you to retrieve only assigned IP addresses.**

A single IP address or a range of IP addresses may be dedicated to an account in order to send email for multiple domains. The reputation of this IP is based on the aggregate performance of all the senders who use it.


```js
sendgrid.ips.assigned.get(null, context)
```


### ips.pools.get
**This endpoint allows you to retreive all of your IP pools.**

IP Pools allow you to group your dedicated SendGrid IP addresses together. For example, you could create separate pools for your transactional and marketing email. When sending marketing emails, specify that you want to use the marketing IP pool. This allows you to maintain separate reputations for your different email traffic.

IP pools can only be used with whitelabeled IP addresses.

If an IP pool is NOT specified for an email, it will use any IP available, including ones in pools.


```js
sendgrid.ips.pools.get(null, context)
```


### ips.pools.post
**This endpoint allows you to create an IP pool.**

**Each user can create up to 10 different IP pools.**

IP Pools allow you to group your dedicated SendGrid IP addresses together. For example, you could create separate pools for your transactional and marketing email. When sending marketing emails, specify that you want to use the marketing IP pool. This allows you to maintain separate reputations for your different email traffic.

IP pools can only be used with whitelabeled IP addresses.

If an IP pool is NOT specified for an email, it will use any IP available, including ones in pools.


```js
sendgrid.ips.pools.post({}, context)
```

#### Parameters
* body (object)

### ips.pools.pool_name.delete
**This endpoint allows you to delete an IP pool.**

IP Pools allow you to group your dedicated SendGrid IP addresses together. For example, you could create separate pools for your transactional and marketing email. When sending marketing emails, specify that you want to use the marketing IP pool. This allows you to maintain separate reputations for your different email traffic.

IP pools can only be used with whitelabeled IP addresses.

If an IP pool is NOT specified for an email, it will use any IP available, including ones in pools.


```js
sendgrid.ips.pools.pool_name.delete({
  "pool_name": ""
}, context)
```

#### Parameters
* pool_name (string) **required** - The name of the IP pool that you want to retrieve the IP addresses from.

### ips.pools.pool_name.get
**This endpoint allows you to list all of the IP addresses that are in a specific IP pool.**

IP Pools allow you to group your dedicated SendGrid IP addresses together. For example, you could create separate pools for your transactional and marketing email. When sending marketing emails, specify that you want to use the marketing IP pool. This allows you to maintain separate reputations for your different email traffic.

IP pools can only be used with whitelabeled IP addresses.

If an IP pool is NOT specified for an email, it will use any IP available, including ones in pools.


```js
sendgrid.ips.pools.pool_name.get({
  "pool_name": ""
}, context)
```

#### Parameters
* pool_name (string) **required** - The name of the IP pool that you want to retrieve the IP addresses from.

### ips.pools.pool_name.put
**This endpoint allows you to update the name of an IP pool.**

IP Pools allow you to group your dedicated SendGrid IP addresses together. For example, you could create separate pools for your transactional and marketing email. When sending marketing emails, specify that you want to use the marketing IP pool. This allows you to maintain separate reputations for your different email traffic.

IP pools can only be used with whitelabeled IP addresses.

If an IP pool is NOT specified for an email, it will use any IP available, including ones in pools.


```js
sendgrid.ips.pools.pool_name.put({
  "pool_name": ""
}, context)
```

#### Parameters
* body (object)
* pool_name (string) **required** - The name of the IP pool that you want to retrieve the IP addresses from.

### ips.pools.pool_name.ips.post
**This endpoint allows you to add an IP address to an IP pool.**

You can add the same IP address to multiple pools. It may take up to 60 seconds for your IP address to be added to a pool after your request is made.

A single IP address or a range of IP addresses may be dedicated to an account in order to send email for multiple domains. The reputation of this IP is based on the aggregate performance of all the senders who use it.


```js
sendgrid.ips.pools.pool_name.ips.post({
  "pool_name": ""
}, context)
```

#### Parameters
* body (object)
* pool_name (string) **required** - The name of the IP pool that you want to add an IP address to.

### ips.pools.pool_name.ips.ip.delete
**This endpoint allows you to remove an IP address from an IP pool.**

The same IP address can be added to multiple IP pools.

A single IP address or a range of IP addresses may be dedicated to an account in order to send email for multiple domains. The reputation of this IP is based on the aggregate performance of all the senders who use it.


```js
sendgrid.ips.pools.pool_name.ips.ip.delete({
  "pool_name": "",
  "ip": ""
}, context)
```

#### Parameters
* pool_name (string) **required** - The name of the IP pool that you are removing the IP address from.
* ip (string) **required** - The IP address that you are removing.

### ips.warmup.get
**This endpoint allows you to retrieve all of your IP addresses that are currently warming up.**

SendGrid can automatically warm up dedicated IP addresses by limiting the amount of mail that can be sent through them per hour, with the limit determined by how long the IP address has been in warmup. See the [warmup schedule](https://sendgrid.com/docs/API_Reference/Web_API_v3/IP_Management/ip_warmup_schedule.html) for more details on how SendGrid limits your email traffic for IPs in warmup.

For more general information about warming up IPs, please see our [Classroom](https://sendgrid.com/docs/Classroom/Deliver/Delivery_Introduction/warming_up_ips.html).


```js
sendgrid.ips.warmup.get(null, context)
```


### ips.warmup.post
**This endpoint allows you to enter an IP address into warmup mode.**

SendGrid can automatically warm up dedicated IP addresses by limiting the amount of mail that can be sent through them per hour, with the limit determined by how long the IP address has been in warmup. See the [warmup schedule](https://sendgrid.com/docs/API_Reference/Web_API_v3/IP_Management/ip_warmup_schedule.html) for more details on how SendGrid limits your email traffic for IPs in warmup.

For more general information about warming up IPs, please see our [Classroom](https://sendgrid.com/docs/Classroom/Deliver/Delivery_Introduction/warming_up_ips.html).


```js
sendgrid.ips.warmup.post({}, context)
```

#### Parameters
* body (object)

### ips.warmup.ip_address.delete
**This endpoint allows you to remove an IP address from warmup mode.**

SendGrid can automatically warm up dedicated IP addresses by limiting the amount of mail that can be sent through them per hour, with the limit determined by how long the IP address has been in warmup. See the [warmup schedule](https://sendgrid.com/docs/API_Reference/Web_API_v3/IP_Management/ip_warmup_schedule.html) for more details on how SendGrid limits your email traffic for IPs in warmup.

For more general information about warming up IPs, please see our [Classroom](https://sendgrid.com/docs/Classroom/Deliver/Delivery_Introduction/warming_up_ips.html).


```js
sendgrid.ips.warmup.ip_address.delete({
  "ip_address": ""
}, context)
```

#### Parameters
* ip_address (string) **required** - The IP address that you want to remove from warmup mode.

### ips.warmup.ip_address.get
**This endpoint allows you to retrieve the warmup status for a specific IP address.**

SendGrid can automatically warm up dedicated IP addresses by limiting the amount of mail that can be sent through them per hour, with the limit determined by how long the IP address has been in warmup. See the [warmup schedule](https://sendgrid.com/docs/API_Reference/Web_API_v3/IP_Management/ip_warmup_schedule.html) for more details on how SendGrid limits your email traffic for IPs in warmup.

For more general information about warming up IPs, please see our [Classroom](https://sendgrid.com/docs/Classroom/Deliver/Delivery_Introduction/warming_up_ips.html).


```js
sendgrid.ips.warmup.ip_address.get({
  "ip_address": ""
}, context)
```

#### Parameters
* ip_address (string) **required** - The IP address that you want to remove from warmup mode.

### ips.ip_address.get
**This endpoint allows you to see which IP pools a particular IP address has been added to.**

The same IP address can be added to multiple IP pools.

A single IP address or a range of IP addresses may be dedicated to an account in order to send email for multiple domains. The reputation of this IP is based on the aggregate performance of all the senders who use it.


```js
sendgrid.ips.ip_address.get({
  "ip_address": ""
}, context)
```

#### Parameters
* ip_address (string) **required** - The IP address you are retrieving the IP pools for.

### mail.batch.post
**This endpoint allows you to generate a new batch ID. This batch ID can be associated with scheduled sends via the mail/send endpoint.**

If you set the SMTPAPI header `batch_id`, it allows you to then associate multiple scheduled mail/send requests together with the same ID. Then at anytime up to 10 minutes before the schedule date, you can cancel all of the mail/send requests that have this batch ID by calling the Cancel Scheduled Send endpoint. 

More Information:

* [Scheduling Parameters > Batch ID](https://sendgrid.com/docs/API_Reference/SMTP_API/scheduling_parameters.html)


```js
sendgrid.mail.batch.post(null, context)
```


### mail.batch.batch_id.get
**This endpoint allows you to validate a batch ID.**

If you set the SMTPAPI header `batch_id`, it allows you to then associate multiple scheduled mail/send requests together with the same ID. Then at anytime up to 10 minutes before the schedule date, you can cancel all of the mail/send requests that have this batch ID by calling the Cancel Scheduled Send endpoint. 

More Information:

* [Scheduling Parameters > Batch ID](https://sendgrid.com/docs/API_Reference/SMTP_API/scheduling_parameters.html)


```js
sendgrid.mail.batch.batch_id.get({
  "batch_id": ""
}, context)
```

#### Parameters
* batch_id (string) **required**

### mail.send.post
This endpoint allows you to send email over SendGrid’s v3 Web API, the most recent version of our API. If you are looking for documentation about the v2 Mail Send endpoint, please see our [v2 API Reference](https://sendgrid.com/docs/API_Reference/Web_API/mail.html).

* Top level parameters are referred to as "global".
* Individual fields within the personalizations array will override any other global, or “message level”, parameters that are defined outside of personalizations.

For an overview of the v3 Mail Send endpoint, please visit our [v3 API Reference](https://sendgrid.com/docs/API_Reference/Web_API_v3/Mail/index.html)

For more detailed information about how to use the v3 Mail Send endpoint, please visit our [Classroom](https://sendgrid.com/docs/Classroom/Send/v3_Mail_Send/index.html).


```js
sendgrid.mail.send.post({}, context)
```

#### Parameters
* body (object)

### GET_mail_settings
**This endpoint allows you to retrieve a list of all mail settings.**

Mail settings allow you to tell SendGrid specific things to do to every email that you send to your recipients over SendGrid’s [Web API](https://sendgrid.com/docs/API_Reference/Web_API/mail.html) or [SMTP Relay](https://sendgrid.com/docs/API_Reference/SMTP_API/index.html).


```js
sendgrid.GET_mail_settings({}, context)
```

#### Parameters
* limit (integer) - The number of settings to return.
* offset (integer) - Where in the list of results to begin displaying settings.

### mail_settings.address_whitelist.get
**This endpoint allows you to retrieve your current email address whitelist settings.**

The address whitelist setting whitelists a specified email address or domain for which mail should never be suppressed. For example, you own the domain “example.com,” and one or more of your recipients use email@example.com addresses, by placing example.com in the address whitelist setting, all bounces, blocks, and unsubscribes logged for that domain will be ignored and sent as if under normal sending conditions.

Mail settings allow you to tell SendGrid specific things to do to every email that you send to your recipients over SendGrid’s [Web API](https://sendgrid.com/docs/API_Reference/Web_API/mail.html) or [SMTP Relay](https://sendgrid.com/docs/API_Reference/SMTP_API/index.html).


```js
sendgrid.mail_settings.address_whitelist.get(null, context)
```


### mail_settings.address_whitelist.patch
**This endpoint allows you to update your current email address whitelist settings.**

The address whitelist setting whitelists a specified email address or domain for which mail should never be suppressed. For example, you own the domain “example.com,” and one or more of your recipients use email@example.com addresses, by placing example.com in the address whitelist setting, all bounces, blocks, and unsubscribes logged for that domain will be ignored and sent as if under normal sending conditions.

Mail settings allow you to tell SendGrid specific things to do to every email that you send to your recipients over SendGrid’s [Web API](https://sendgrid.com/docs/API_Reference/Web_API/mail.html) or [SMTP Relay](https://sendgrid.com/docs/API_Reference/SMTP_API/index.html).


```js
sendgrid.mail_settings.address_whitelist.patch({}, context)
```

#### Parameters
* body (object)

### mail_settings.bcc.get
**This endpoint allows you to retrieve your current BCC mail settings.**

When the BCC mail setting is enabled, SendGrid will automatically send a blind carbon copy (BCC) to an address for every email sent without adding that address to the header. Please note that only one email address may be entered in this field, if you wish to distribute BCCs to multiple addresses you will need to create a distribution group or use forwarding rules.

Mail settings allow you to tell SendGrid specific things to do to every email that you send to your recipients over SendGrid’s [Web API](https://sendgrid.com/docs/API_Reference/Web_API/mail.html) or [SMTP Relay](https://sendgrid.com/docs/API_Reference/SMTP_API/index.html).


```js
sendgrid.mail_settings.bcc.get(null, context)
```


### mail_settings.bcc.patch
**This endpoint allows you to update your current BCC mail settings.**

When the BCC mail setting is enabled, SendGrid will automatically send a blind carbon copy (BCC) to an address for every email sent without adding that address to the header. Please note that only one email address may be entered in this field, if you wish to distribute BCCs to multiple addresses you will need to create a distribution group or use forwarding rules.

Mail settings allow you to tell SendGrid specific things to do to every email that you send to your recipients over SendGrid’s [Web API](https://sendgrid.com/docs/API_Reference/Web_API/mail.html) or [SMTP Relay](https://sendgrid.com/docs/API_Reference/SMTP_API/index.html).


```js
sendgrid.mail_settings.bcc.patch({}, context)
```

#### Parameters
* body (object)

### mail_settings.bounce_purge.get
**This endpoint allows you to retrieve your current bounce purge settings.**

This setting allows you to set a schedule for SendGrid to automatically delete contacts from your soft and hard bounce suppression lists.

Mail settings allow you to tell SendGrid specific things to do to every email that you send to your recipients over SendGrid’s [Web API](https://sendgrid.com/docs/API_Reference/Web_API/mail.html) or [SMTP Relay](https://sendgrid.com/docs/API_Reference/SMTP_API/index.html).


```js
sendgrid.mail_settings.bounce_purge.get(null, context)
```


### mail_settings.bounce_purge.patch
**This endpoint allows you to update your current bounce purge settings.**

This setting allows you to set a schedule for SendGrid to automatically delete contacts from your soft and hard bounce suppression lists.

Mail settings allow you to tell SendGrid specific things to do to every email that you send to your recipients over SendGrid’s [Web API](https://sendgrid.com/docs/API_Reference/Web_API/mail.html) or [SMTP Relay](https://sendgrid.com/docs/API_Reference/SMTP_API/index.html).


```js
sendgrid.mail_settings.bounce_purge.patch({}, context)
```

#### Parameters
* body (object)

### mail_settings.footer.get
**This endpoint allows you to retrieve your current Footer mail settings.**

The footer setting will insert a custom footer at the bottom of the text and HTML bodies. Use the embedded HTML editor and plain text entry fields to create the content of the footers to be inserted into your emails.

Mail settings allow you to tell SendGrid specific things to do to every email that you send to your recipients over SendGrid’s [Web API](https://sendgrid.com/docs/API_Reference/Web_API/mail.html) or [SMTP Relay](https://sendgrid.com/docs/API_Reference/SMTP_API/index.html).


```js
sendgrid.mail_settings.footer.get(null, context)
```


### mail_settings.footer.patch
**This endpoint allows you to update your current Footer mail settings.**

The footer setting will insert a custom footer at the bottom of the text and HTML bodies. Use the embedded HTML editor and plain text entry fields to create the content of the footers to be inserted into your emails.

Mail settings allow you to tell SendGrid specific things to do to every email that you send to your recipients over SendGrid’s [Web API](https://sendgrid.com/docs/API_Reference/Web_API/mail.html) or [SMTP Relay](https://sendgrid.com/docs/API_Reference/SMTP_API/index.html).


```js
sendgrid.mail_settings.footer.patch({}, context)
```

#### Parameters
* body (object)

### mail_settings.forward_bounce.get
**This endpoint allows you to retrieve your current bounce forwarding mail settings.**

Activating this setting allows you to specify an email address to which bounce reports are forwarded.

Mail settings allow you to tell SendGrid specific things to do to every email that you send to your recipients over SendGrid’s [Web API](https://sendgrid.com/docs/API_Reference/Web_API/mail.html) or [SMTP Relay](https://sendgrid.com/docs/API_Reference/SMTP_API/index.html).


```js
sendgrid.mail_settings.forward_bounce.get(null, context)
```


### mail_settings.forward_bounce.patch
**This endpoint allows you to update your current bounce forwarding mail settings.**

Activating this setting allows you to specify an email address to which bounce reports are forwarded.

Mail settings allow you to tell SendGrid specific things to do to every email that you send to your recipients over SendGrid’s [Web API](https://sendgrid.com/docs/API_Reference/Web_API/mail.html) or [SMTP Relay](https://sendgrid.com/docs/API_Reference/SMTP_API/index.html).


```js
sendgrid.mail_settings.forward_bounce.patch({}, context)
```

#### Parameters
* body (object)

### mail_settings.forward_spam.get
**This endpoint allows you to retrieve your current Forward Spam mail settings.**

Enabling the forward spam setting allows you to specify an email address to which spam reports will be forwarded.

Mail settings allow you to tell SendGrid specific things to do to every email that you send to your recipients over SendGrid’s [Web API](https://sendgrid.com/docs/API_Reference/Web_API/mail.html) or [SMTP Relay](https://sendgrid.com/docs/API_Reference/SMTP_API/index.html).


```js
sendgrid.mail_settings.forward_spam.get(null, context)
```


### mail_settings.forward_spam.patch
**This endpoint allows you to update your current Forward Spam mail settings.**

Enabling the forward spam setting allows you to specify an email address to which spam reports will be forwarded.

Mail settings allow you to tell SendGrid specific things to do to every email that you send to your recipients over SendGrid’s [Web API](https://sendgrid.com/docs/API_Reference/Web_API/mail.html) or [SMTP Relay](https://sendgrid.com/docs/API_Reference/SMTP_API/index.html).


```js
sendgrid.mail_settings.forward_spam.patch({}, context)
```

#### Parameters
* body (object)

### mail_settings.plain_content.get
**This endpoint allows you to retrieve your current Plain Content mail settings.**

The plain content setting will automatically convert any plain text emails that you send to HTML before sending.

Mail settings allow you to tell SendGrid specific things to do to every email that you send to your recipients over SendGrid’s [Web API](https://sendgrid.com/docs/API_Reference/Web_API/mail.html) or [SMTP Relay](https://sendgrid.com/docs/API_Reference/SMTP_API/index.html).


```js
sendgrid.mail_settings.plain_content.get(null, context)
```


### mail_settings.plain_content.patch
**This endpoint allows you to update your current Plain Content mail settings.**

The plain content setting will automatically convert any plain text emails that you send to HTML before sending.

Mail settings allow you to tell SendGrid specific things to do to every email that you send to your recipients over SendGrid’s [Web API](https://sendgrid.com/docs/API_Reference/Web_API/mail.html) or [SMTP Relay](https://sendgrid.com/docs/API_Reference/SMTP_API/index.html).


```js
sendgrid.mail_settings.plain_content.patch({}, context)
```

#### Parameters
* body (object)

### mail_settings.spam_check.get
**This endpoint allows you to retrieve your current Spam Checker mail settings.**

The spam checker filter notifies you when emails are detected that exceed a predefined spam threshold.

Mail settings allow you to tell SendGrid specific things to do to every email that you send to your recipients over SendGrid’s [Web API](https://sendgrid.com/docs/API_Reference/Web_API/mail.html) or [SMTP Relay](https://sendgrid.com/docs/API_Reference/SMTP_API/index.html).


```js
sendgrid.mail_settings.spam_check.get(null, context)
```


### mail_settings.spam_check.patch
**This endpoint allows you to update your current spam checker mail settings.**

The spam checker filter notifies you when emails are detected that exceed a predefined spam threshold.

Mail settings allow you to tell SendGrid specific things to do to every email that you send to your recipients over SendGrid’s [Web API](https://sendgrid.com/docs/API_Reference/Web_API/mail.html) or [SMTP Relay](https://sendgrid.com/docs/API_Reference/SMTP_API/index.html).


```js
sendgrid.mail_settings.spam_check.patch({}, context)
```

#### Parameters
* body (object)

### mail_settings.template.get
**This endpoint allows you to retrieve your current legacy email template settings.**

This setting refers to our original email templates. We currently support more fully featured [transactional templates](https://sendgrid.com/docs/User_Guide/Transactional_Templates/index.html). 

The legacy email template setting wraps an HTML template around your email content. This can be useful for sending out marketing email and/or other HTML formatted messages.

Mail settings allow you to tell SendGrid specific things to do to every email that you send to your recipients over SendGrid’s [Web API](https://sendgrid.com/docs/API_Reference/Web_API/mail.html) or [SMTP Relay](https://sendgrid.com/docs/API_Reference/SMTP_API/index.html).


```js
sendgrid.mail_settings.template.get(null, context)
```


### mail_settings.template.patch
**This endpoint allows you to update your current legacy email template settings.**

This setting refers to our original email templates. We currently support more fully featured [transactional templates](https://sendgrid.com/docs/User_Guide/Transactional_Templates/index.html). 

The legacy email template setting wraps an HTML template around your email content. This can be useful for sending out marketing email and/or other HTML formatted messages.

Mail settings allow you to tell SendGrid specific things to do to every email that you send to your recipients over SendGrid’s [Web API](https://sendgrid.com/docs/API_Reference/Web_API/mail.html) or [SMTP Relay](https://sendgrid.com/docs/API_Reference/SMTP_API/index.html).


```js
sendgrid.mail_settings.template.patch({}, context)
```

#### Parameters
* body (object)

### mailbox_providers.stats.get
**This endpoint allows you to retrieve your email statistics segmented by recipient mailbox provider.**

**We only store up to 7 days of email activity in our database.** By default, 500 items will be returned per request via the Advanced Stats API endpoints.

Advanced Stats provide a more in-depth view of your email statistics and the actions taken by your recipients. You can segment these statistics by geographic location, device type, client type, browser, and mailbox provider. For more information about statistics, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Statistics/index.html).


```js
sendgrid.mailbox_providers.stats.get({
  "start_date": ""
}, context)
```

#### Parameters
* limit (integer) - The number of results to include on each page.
* offset (integer) - The number of results to exclude.
* aggregated_by (string) - How to group the stats. Must be either "day", "wee", or "month".
* start_date (string) **required** - The starting date of the statistics to retrieve. Must follow format YYYY-MM-DD.
* end_date (string) - The end date of the statistics to retrieve. Defaults to today. Must follow format YYYY-MM-DD.
* mailbox_providers (string) - The mail box providers to get statistics for. You can include up to 10 by including this parameter multiple times.

### GET_partner_settings
**This endpoint allows you to retrieve a list of all partner settings that you can enable.**

Our partner settings allow you to integrate your SendGrid account with our partners to increase your SendGrid experience and functionality. For more information about our partners, and how you can begin integrating with them, please visit our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/partners.html).


```js
sendgrid.GET_partner_settings({}, context)
```

#### Parameters
* limit (integer) - The number of settings to return per page.
* offset (integer) - The paging offset.

### partner_settings.new_relic.get
**This endpoint allows you to retrieve your current New Relic partner settings.**

Our partner settings allow you to integrate your SendGrid account with our partners to increase your SendGrid experience and functionality. For more information about our partners, and how you can begin integrating with them, please visit our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/partners.html).

By integrating with New Relic, you can send your SendGrid email statistics to your New Relic Dashboard. If you enable this setting, your stats will be sent to New Relic every 5 minutes. You will need your New Relic License Key to enable this setting. For more information, please see our [Classroom](https://sendgrid.com/docs/Classroom/Track/Collecting_Data/new_relic.html).


```js
sendgrid.partner_settings.new_relic.get(null, context)
```


### partner_settings.new_relic.patch
**This endpoint allows you to update or change your New Relic partner settings.**

Our partner settings allow you to integrate your SendGrid account with our partners to increase your SendGrid experience and functionality. For more information about our partners, and how you can begin integrating with them, please visit our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/partners.html).

By integrating with New Relic, you can send your SendGrid email statistics to your New Relic Dashboard. If you enable this setting, your stats will be sent to New Relic every 5 minutes. You will need your New Relic License Key to enable this setting. For more information, please see our [Classroom](https://sendgrid.com/docs/Classroom/Track/Collecting_Data/new_relic.html).


```js
sendgrid.partner_settings.new_relic.patch({}, context)
```

#### Parameters
* body (object)

### GET_scopes
**This endpoint returns a list of all scopes that this user has access to.**

API Keys can be used to authenticate the use of [SendGrid’s v3 Web API](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html), or the [Mail API Endpoint](https://sendgrid.com/docs/API_Reference/Web_API/mail.html). API Keys may be assigned certain permissions, or scopes, that limit which API endpoints they are able to access. For a more detailed explanation of how you can use API Key permissios, please visit our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/api_keys.html#-API-Key-Permissions) or [Classroom](https://sendgrid.com/docs/Classroom/Basics/API/api_key_permissions.html). 


```js
sendgrid.GET_scopes(null, context)
```


### senders.get
**This endpoint allows you to retrieve a list of all sender identities that have been created for your account.**

Sender Identities are required to be verified before use. If your domain has been whitelabeled it will auto verify on creation. Otherwise an email will be sent to the `from.email`.


```js
sendgrid.senders.get(null, context)
```


### POST_senders
**This endpoint allows you to create a new sender identity.**

*You may create up to 100 unique sender identities.*

Sender Identities are required to be verified before use. If your domain has been whitelabeled it will auto verify on creation. Otherwise an email will be sent to the `from.email`.


```js
sendgrid.POST_senders({}, context)
```

#### Parameters
* body (object)

### senders.sender_id.delete
**This endoint allows you to delete one of your sender identities.**

Sender Identities are required to be verified before use. If your domain has been whitelabeled it will auto verify on creation. Otherwise an email will be sent to the `from.email`.


```js
sendgrid.senders.sender_id.delete({
  "sender_id": 0
}, context)
```

#### Parameters
* sender_id (integer) **required** - The ID of the sender identity that you want to update.

### senders.sender_id.get
**This endpoint allows you to retrieve a specific sender identity.**

Sender Identities are required to be verified before use. If your domain has been whitelabeled it will auto verify on creation. Otherwise an email will be sent to the `from.email`.


```js
sendgrid.senders.sender_id.get({
  "sender_id": 0
}, context)
```

#### Parameters
* sender_id (integer) **required** - The ID of the sender identity that you want to update.

### senders.sender_id.patch
**This endpoint allows you to update a sender identity.**

Updates to `from.email` require re-verification. If your domain has been whitelabeled it will auto verify on creation. Otherwise an email will be sent to the `from.email`.

Partial updates are allowed, but fields that are marked as "required" in the POST (create) endpoint must not be nil if that field is included in the PATCH request.


```js
sendgrid.senders.sender_id.patch({
  "sender_id": 0
}, context)
```

#### Parameters
* body (object)
* sender_id (integer) **required** - The ID of the sender identity that you want to update.

### senders.sender_id.resend_verification.post
**This enpdoint allows you to resend a sender identity verification email.**

Sender Identities are required to be verified before use. If your domain has been whitelabeled it will auto verify on creation. Otherwise an email will be sent to the `from.email`.


```js
sendgrid.senders.sender_id.resend_verification.post({
  "sender_id": 0
}, context)
```

#### Parameters
* sender_id (integer) **required** - The ID of the sender identity for which you would like to resend a verification email.

### GET_stats
**This endpoint allows you to retrieve all of your global email statistics between a given date range.**

Parent accounts will see aggregated stats for their account and all subuser accounts. Subuser accounts will only see their own stats.


```js
sendgrid.GET_stats({
  "start_date": ""
}, context)
```

#### Parameters
* limit (integer) - The number of results to return.
* offset (integer) - The point in the list to begin retrieving results.
* aggregated_by (string) - How to group the statistics. Must be either "day", "week", or "month".
* start_date (string) **required** - The starting date of the statistics to retrieve. Must follow format YYYY-MM-DD.
* end_date (string) - The end date of the statistics to retrieve. Defaults to today. Must follow format YYYY-MM-DD.

### GET_subusers
This endpoint allows you to retrieve a list of all of your subusers. You can choose to retrieve specific subusers as well as limit the results that come back from the API.

For more information about Subusers:

* [User Guide > Subusers](https://sendgrid.com/docs/User_Guide/Settings/Subusers/index.html)
* [Classroom > How do I add more subusers to my account?](https://sendgrid.com/docs/Classroom/Basics/Account/how_do_i_add_more_subusers_to_my_account.html)


```js
sendgrid.GET_subusers({}, context)
```

#### Parameters
* username (string) - The username of this subuser.
* limit (integer) - The number of results you would like to get in each request.
* offset (integer) - The number of subusers to skip.

### POST_subusers
This endpoint allows you to retrieve a list of all of your subusers. You can choose to retrieve specific subusers as well as limit the results that come back from the API.

For more information about Subusers:

* [User Guide > Subusers](https://sendgrid.com/docs/User_Guide/Settings/Subusers/index.html)
* [Classroom > How do I add more subusers to my account?](https://sendgrid.com/docs/Classroom/Basics/Account/how_do_i_add_more_subusers_to_my_account.html)


```js
sendgrid.POST_subusers({}, context)
```

#### Parameters
* body (object)

### subusers.reputations.get
Subuser sender reputations give a good idea how well a sender is doing with regards to how recipients and recipient servers react to the mail that is being received. When a bounce, spam report, or other negative action happens on a sent email, it will effect your sender rating.

This endpoint allows you to request the reputations for your subusers.


```js
sendgrid.subusers.reputations.get({}, context)
```

#### Parameters
* usernames (string)

### subusers.stats.get
**This endpoint allows you to retrieve the email statistics for the given subusers.**

You may retrieve statistics for up to 10 different subusers by including an additional _subusers_ parameter for each additional subuser.

While you can always view the statistics for all email activity on your account, subuser statistics enable you to view specific segments of your stats. Emails sent, bounces, and spam reports are always tracked for subusers. Unsubscribes, clicks, and opens are tracked if you have enabled the required settings.

For more information, see our [User Guide](https://sendgrid.com/docs/User_Guide/Statistics/subuser.html).


```js
sendgrid.subusers.stats.get({
  "subusers": "",
  "start_date": ""
}, context)
```

#### Parameters
* limit (integer) - Limits the number of results returned per page.
* offset (integer) - The point in the list to begin retrieving results from.
* aggregated_by (string) - How to group the statistics. Must be either "day", "week", or "month".
* subusers (string) **required** - The subuser you want to retrieve statistics for. You may include this parameter up to 10 times to retrieve statistics for multiple subusers.
* start_date (string) **required** - The starting date of the statistics to retrieve. Must follow format YYYY-MM-DD.
* end_date (string) - The end date of the statistics to retrieve. Defaults to today.

### subusers.stats.monthly.get
**This endpoint allows you to retrieve the monthly email statistics for all subusers over the given date range.**

While you can always view the statistics for all email activity on your account, subuser statistics enable you to view specific segments of your stats for your subusers. Emails sent, bounces, and spam reports are always tracked for subusers. Unsubscribes, clicks, and opens are tracked if you have enabled the required settings.

When using the `sort_by_metric` to sort your stats by a specific metric, you can not sort by the following metrics:
`bounce_drops`, `deferred`, `invalid_emails`, `processed`, `spam_report_drops`, `spam_reports`, or `unsubscribe_drops`.

For more information, see our [User Guide](https://sendgrid.com/docs/User_Guide/Statistics/subuser.html).


```js
sendgrid.subusers.stats.monthly.get({
  "date": ""
}, context)
```

#### Parameters
* date (string) **required** - The date of the month to retrieve statistics for. Must be formatted YYYY-MM-DD
* subuser (string) - A substring search of your subusers.
* sort_by_metric (string) - The metric that you want to sort by. Metrics that you can sort by are: `blocks`, `bounces`, `clicks`, `delivered`, `opens`, `requests`, `unique_clicks`, `unique_opens`, and `unsubscribes`.'
* sort_by_direction (string) - The direction you want to sort.
* limit (integer) - Optional field to limit the number of results returned.
* offset (integer) - Optional beginning point in the list to retrieve from.

### subusers.stats.sums.get
**This endpoint allows you to retrieve the total sums of each email statistic metric for all subusers over the given date range.**


While you can always view the statistics for all email activity on your account, subuser statistics enable you to view specific segments of your stats. Emails sent, bounces, and spam reports are always tracked for subusers. Unsubscribes, clicks, and opens are tracked if you have enabled the required settings.

For more information, see our [User Guide](https://sendgrid.com/docs/User_Guide/Statistics/subuser.html).


```js
sendgrid.subusers.stats.sums.get({
  "start_date": ""
}, context)
```

#### Parameters
* sort_by_direction (string) - The direction you want to sort. 
* start_date (string) **required** - The starting date of the statistics to retrieve. Must follow format YYYY-MM-DD.
* end_date (string) - The end date of the statistics to retrieve. Defaults to today. Must follow format YYYY-MM-DD.
* limit (integer) - Limits the number of results returned per page.
* offset (integer) - The point in the list to begin retrieving results from.
* aggregated_by (string) - How to group the statistics. Defaults to today. Must follow format YYYY-MM-DD.
* sort_by_metric (string) - The metric that you want to sort by.  Must be a single metric.

### subusers.subuser_name.delete
This endpoint allows you to delete a subuser. This is a permanent action, once deleted a subuser cannot be retrieved.

For more information about Subusers:

* [User Guide > Subusers](https://sendgrid.com/docs/User_Guide/Settings/Subusers/index.html)
* [Classroom > How do I add more subusers to my account?](https://sendgrid.com/docs/Classroom/Basics/Account/how_do_i_add_more_subusers_to_my_account.html)


```js
sendgrid.subusers.subuser_name.delete({
  "subuser_name": ""
}, context)
```

#### Parameters
* subuser_name (string) **required**

### subusers.subuser_name.patch
This endpoint allows you to enable or disable a subuser.

For more information about Subusers:

* [User Guide > Subusers](https://sendgrid.com/docs/User_Guide/Settings/Subusers/index.html)
* [Classroom > How do I add more subusers to my account?](https://sendgrid.com/docs/Classroom/Basics/Account/how_do_i_add_more_subusers_to_my_account.html)


```js
sendgrid.subusers.subuser_name.patch({
  "subuser_name": ""
}, context)
```

#### Parameters
* body (object)
* subuser_name (string) **required**

### subusers.subuser_name.ips.put
Each subuser should be assigned to an IP address, from which all of this subuser's mail will be sent. Often, this is the same IP as the parent account, but each subuser can have their own, or multiple, IP addresses as well. 

More information:

* [How to request more IPs](https://sendgrid.com/docs/Classroom/Basics/Account/adding_an_additional_dedicated_ip_to_your_account.html)
* [IPs can be whitelabeled](https://sendgrid.com/docs/User_Guide/Settings/Whitelabel/ips.html)


```js
sendgrid.subusers.subuser_name.ips.put({
  "subuser_name": ""
}, context)
```

#### Parameters
* body (array) - The IP addresses you would like to assign to the subuser.
* subuser_name (string) **required**

### subusers.subuser_name.monitor.delete
Subuser monitor settings allow you to receive a sample of an outgoing message by a specific customer at a specific frequency of emails.


```js
sendgrid.subusers.subuser_name.monitor.delete({
  "subuser_name": ""
}, context)
```

#### Parameters
* subuser_name (string) **required** - The name of the subuser for which to retrieve monitor settings.

### subusers.subuser_name.monitor.get
Subuser monitor settings allow you to receive a sample of an outgoing message by a specific customer at a specific frequency of emails.


```js
sendgrid.subusers.subuser_name.monitor.get({
  "subuser_name": ""
}, context)
```

#### Parameters
* subuser_name (string) **required** - The name of the subuser for which to retrieve monitor settings.

### subusers.subuser_name.monitor.post
Subuser monitor settings allow you to receive a sample of an outgoing message by a specific customer at a specific frequency of emails.


```js
sendgrid.subusers.subuser_name.monitor.post({
  "subuser_name": ""
}, context)
```

#### Parameters
* body (object)
* subuser_name (string) **required** - The name of the subuser for which to retrieve monitor settings.

### subusers.subuser_name.monitor.put
Subuser monitor settings allow you to receive a sample of an outgoing message by a specific customer at a specific frequency of emails.


```js
sendgrid.subusers.subuser_name.monitor.put({
  "subuser_name": ""
}, context)
```

#### Parameters
* body (object)
* subuser_name (string) **required** - The name of the subuser for which to retrieve monitor settings.

### subusers.subuser_name.stats.monthly.get
**This endpoint allows you to retrive the monthly email statistics for a specific subuser.**

While you can always view the statistics for all email activity on your account, subuser statistics enable you to view specific segments of your stats for your subusers. Emails sent, bounces, and spam reports are always tracked for subusers. Unsubscribes, clicks, and opens are tracked if you have enabled the required settings.

When using the `sort_by_metric` to sort your stats by a specific metric, you can not sort by the following metrics:
`bounce_drops`, `deferred`, `invalid_emails`, `processed`, `spam_report_drops`, `spam_reports`, or `unsubscribe_drops`.

For more information, see our [User Guide](https://sendgrid.com/docs/User_Guide/Statistics/subuser.html).


```js
sendgrid.subusers.subuser_name.stats.monthly.get({
  "date": "",
  "subuser_name": ""
}, context)
```

#### Parameters
* date (string) **required** - The date of the month to retrieve statistics for. Must be formatted YYYY-MM-DD
* sort_by_metric (string) - The metric that you want to sort by. Metrics that you can sort by are: `blocks`, `bounces`, `clicks`, `delivered`, `opens`, `requests`, `unique_clicks`, `unique_opens`, and `unsubscribes`.'
* sort_by_direction (string) - The direction you want to sort.
* limit (integer) - Optional field to limit the number of results returned.
* offset (integer) - Optional beginning point in the list to retrieve from.
* subuser_name (string) **required**

### suppression.blocks.delete
**This endpoint allows you to delete all email addresses on your blocks list.**

There are two options for deleting blocked emails: 

1. You can delete all blocked emails by setting `delete_all` to true in the request body. 
2. You can delete some blocked emails by specifying the email addresses in an array in the request body.

[Blocks](https://sendgrid.com/docs/Glossary/blocks.html) happen when your message was rejected for a reason related to the message, not the recipient address. This can happen when your mail server IP address has been added to a blacklist or blocked by an ISP, or if the message content is flagged by a filter on the receiving server.

For more information, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Suppressions/blocks.html).


```js
sendgrid.suppression.blocks.delete({}, context)
```

#### Parameters
* body (object)

### suppression.blocks.get
**This endpoint allows you to retrieve a list of all email addresses that are currently on your blocks list.**

[Blocks](https://sendgrid.com/docs/Glossary/blocks.html) happen when your message was rejected for a reason related to the message, not the recipient address. This can happen when your mail server IP address has been added to a blacklist or blocked by an ISP, or if the message content is flagged by a filter on the receiving server.

For more information, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Suppressions/blocks.html).


```js
sendgrid.suppression.blocks.get({}, context)
```

#### Parameters
* start_time (integer) - Refers start of the time range in unix timestamp when a blocked email was created (inclusive).
* end_time (integer) - Refers end of the time range in unix timestamp when a blocked email was created (inclusive).
* limit (integer) - Limit the number of results to be displayed per page.
* offset (integer) - The point in the list to begin displaying results.

### suppression.blocks.email.delete
**This endpoint allows you to delete a specific email address from your blocks list.**

[Blocks](https://sendgrid.com/docs/Glossary/blocks.html) happen when your message was rejected for a reason related to the message, not the recipient address. This can happen when your mail server IP address has been added to a blacklist or blocked by an ISP, or if the message content is flagged by a filter on the receiving server.

For more information, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Suppressions/blocks.html).


```js
sendgrid.suppression.blocks.email.delete({
  "email": ""
}, context)
```

#### Parameters
* email (string) **required** - The blocked email address that you want to delete.

### suppression.blocks.email.get
**This endpoint allows you to retrieve a specific email address from your blocks list.**

[Blocks](https://sendgrid.com/docs/Glossary/blocks.html) happen when your message was rejected for a reason related to the message, not the recipient address. This can happen when your mail server IP address has been added to a blacklist or blocked by an ISP, or if the message content is flagged by a filter on the receiving server.

For more information, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Suppressions/blocks.html).


```js
sendgrid.suppression.blocks.email.get({
  "email": ""
}, context)
```

#### Parameters
* email (string) **required** - The blocked email address that you want to delete.

### suppression.bounces.delete
**This endpoint allows you to delete all of your bounces. You can also use this endpoint to remove a specific email address from your bounce list.**

Bounces are messages that are returned to the server that sent it.

For more information see: 

* [User Guide > Bounces](https://sendgrid.com/docs/User_Guide/Suppressions/bounces.html) for more information
* [Glossary > Bounces](https://sendgrid.com/docs/Glossary/Bounces.html)
* [Classroom > List Scrubbing Guide](https://sendgrid.com/docs/Classroom/Deliver/list_scrubbing.html)

Note: the `delete_all` and `emails` parameters should be used independently of each other as they have different purposes.


```js
sendgrid.suppression.bounces.delete({}, context)
```

#### Parameters
* body (object)

### suppression.bounces.get
**This endpoint allows you to retrieve all of your bounces.**

Bounces are messages that are returned to the server that sent it. 

For more information see: 

* [User Guide > Bounces](https://sendgrid.com/docs/User_Guide/Suppressions/bounces.html) for more information
* [Glossary > Bounces](https://sendgrid.com/docs/Glossary/Bounces.html)


```js
sendgrid.suppression.bounces.get({
  "Accept": ""
}, context)
```

#### Parameters
* start_time (integer) - Refers start of the time range in unix timestamp when a bounce was created (inclusive).
* end_time (integer) - Refers end of the time range in unix timestamp when a bounce was created (inclusive).
* Accept (string) **required**

### suppression.bounces.email.delete
**This endpoint allows you to remove an email address from your bounce list.**

Bounces are messages that are returned to the server that sent it. This endpoint allows you to delete a single email addresses from your bounce list. 

For more information see: 

* [User Guide > Bounces](https://sendgrid.com/docs/User_Guide/Suppressions/bounces.html) for more information
* [Glossary > Bounces](https://sendgrid.com/docs/Glossary/Bounces.html)
* [Classroom > List Scrubbing Guide](https://sendgrid.com/docs/Classroom/Deliver/list_scrubbing.html)


```js
sendgrid.suppression.bounces.email.delete({
  "email_address": "",
  "email": ""
}, context)
```

#### Parameters
* email_address (string) **required** - The email address you would like to remove from the bounce list.
* email (string) **required**

### suppression.bounces.email.get
**This endpoint allows you to retrieve a specific bounce for a given email address.**

Bounces are messages that are returned to the server that sent it.

For more information see: 

* [User Guide > Bounces](https://sendgrid.com/docs/User_Guide/Suppressions/bounces.html) for more information
* [Glossary > Bounces](https://sendgrid.com/docs/Glossary/Bounces.html)
* [Classroom > List Scrubbing Guide](https://sendgrid.com/docs/Classroom/Deliver/list_scrubbing.html)


```js
sendgrid.suppression.bounces.email.get({
  "email": ""
}, context)
```

#### Parameters
* email (string) **required**

### suppression.invalid_emails.delete
**This endpoint allows you to remove email addresses from your invalid email address list.**

There are two options for deleting invalid email addresses: 

1) You can delete all invalid email addresses by setting `delete_all` to true in the request body.
2) You can delete some invalid email addresses by specifying certain addresses in an array in the request body.

An invalid email occurs when you attempt to send email to an address that is formatted in a manner that does not meet internet email format standards or the email does not exist at the recipient’s mail server.

Examples include addresses without the “@” sign or addresses that include certain special characters and/or spaces. This response can come from our own server or the recipient mail server.

For more information, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Suppressions/invalid_emails.html).


```js
sendgrid.suppression.invalid_emails.delete({}, context)
```

#### Parameters
* body (object)

### suppression.invalid_emails.get
**This endpoint allows you to retrieve a list of all invalid email addresses.**

An invalid email occurs when you attempt to send email to an address that is formatted in a manner that does not meet internet email format standards or the email does not exist at the recipient’s mail server.

Examples include addresses without the “@” sign or addresses that include certain special characters and/or spaces. This response can come from our own server or the recipient mail server.

For more information, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Suppressions/invalid_emails.html).


```js
sendgrid.suppression.invalid_emails.get({}, context)
```

#### Parameters
* start_time (integer) - Refers start of the time range in unix timestamp when an invalid email was created (inclusive).
* end_time (integer) - Refers end of the time range in unix timestamp when an invalid email was created (inclusive).
* limit (integer) - Limit the number of results to be displayed per page.
* offset (integer) - Paging offset. The point in the list to begin displaying results.

### suppression.invalid_emails.email.delete
**This endpoint allows you to remove a specific email address from the invalid email address list.**

An invalid email occurs when you attempt to send email to an address that is formatted in a manner that does not meet internet email format standards or the email does not exist at the recipient’s mail server.

Examples include addresses without the “@” sign or addresses that include certain special characters and/or spaces. This response can come from our own server or the recipient mail server.

For more information, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Suppressions/invalid_emails.html).


```js
sendgrid.suppression.invalid_emails.email.delete({
  "email": ""
}, context)
```

#### Parameters
* email (string) **required** - The specific email address of the invalid email entry that you want to retrieve.

### suppression.invalid_emails.email.get
**This endpoint allows you to retrieve a specific invalid email addresses.**

An invalid email occurs when you attempt to send email to an address that is formatted in a manner that does not meet internet email format standards or the email does not exist at the recipient’s mail server.

Examples include addresses without the “@” sign or addresses that include certain special characters and/or spaces. This response can come from our own server or the recipient mail server.

For more information, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Suppressions/invalid_emails.html).


```js
sendgrid.suppression.invalid_emails.email.get({
  "email": ""
}, context)
```

#### Parameters
* email (string) **required** - The specific email address of the invalid email entry that you want to retrieve.

### suppression.spam_report.email.delete
**This endpoint allows you to delete a specific spam report.**

[Spam reports](https://sendgrid.com/docs/Glossary/spam_reports.html) happen when a recipient indicates that they think your email is [spam](https://sendgrid.com/docs/Glossary/spam.html) and then their email provider reports this to SendGrid.

For more information, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Suppressions/spam_reports.html).


```js
sendgrid.suppression.spam_report.email.delete({
  "email": ""
}, context)
```

#### Parameters
* email (string) **required** - The email address of a specific spam report that you want to retrieve.

### suppression.spam_report.email.get
**This endpoint allows you to retrieve a specific spam report.**

[Spam reports](https://sendgrid.com/docs/Glossary/spam_reports.html) happen when a recipient indicates that they think your email is [spam](https://sendgrid.com/docs/Glossary/spam.html) and then their email provider reports this to SendGrid.

For more information, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Suppressions/spam_reports.html).


```js
sendgrid.suppression.spam_report.email.get({
  "email": ""
}, context)
```

#### Parameters
* email (string) **required** - The email address of a specific spam report that you want to retrieve.

### suppression.spam_reports.delete
**This endpoint allows you to delete your spam reports.**

There are two options for deleting spam reports: 

1) You can delete all spam reports by setting "delete_all" to true in the request body. 
2) You can delete some spam reports by specifying the email addresses in an array in the request body.

[Spam reports](https://sendgrid.com/docs/Glossary/spam_reports.html) happen when a recipient indicates that they think your email is [spam](https://sendgrid.com/docs/Glossary/spam.html) and then their email provider reports this to SendGrid.

For more information, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Suppressions/spam_reports.html).


```js
sendgrid.suppression.spam_reports.delete({}, context)
```

#### Parameters
* body (object)

### suppression.spam_reports.get
**This endpoint allows you to retrieve all spam reports.**

[Spam reports](https://sendgrid.com/docs/Glossary/spam_reports.html) happen when a recipient indicates that they think your email is [spam](https://sendgrid.com/docs/Glossary/spam.html) and then their email provider reports this to SendGrid.

For more information, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Suppressions/spam_reports.html).


```js
sendgrid.suppression.spam_reports.get({}, context)
```

#### Parameters
* start_time (integer) - Refers start of the time range in unix timestamp when a spam report was created (inclusive).
* end_time (integer) - Refers end of the time range in unix timestamp when a spam report was created (inclusive).
* limit (integer) - Limit the number of results to be displayed per page.
* offset (integer) - Paging offset. The point in the list to begin displaying results.

### suppression.unsubscribes.get
**This endpoint allows you to retrieve a list of all email address that are globally suppressed.**

A global suppression (or global unsubscribe) is an email address of a recipient who does not want to receive any of your messages. A globally suppressed recipient will be removed from any email you send. For more information, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Suppressions/global_unsubscribes.html).


```js
sendgrid.suppression.unsubscribes.get({}, context)
```

#### Parameters
* start_time (integer) - Refers start of the time range in unix timestamp when an unsubscribe email was created (inclusive).
* end_time (integer) - Refers end of the time range in unix timestamp when an unsubscribe email was created (inclusive).
* limit (integer) - The number of results to display on each page.
* offset (integer) - The point in the list of results to begin displaying global suppressions.

### GET_templates
**This endpoint allows you to retrieve all transactional templates.**

Each user can create up to 300 different transactional templates. Transactional templates are specific to accounts and subusers. Templates created on a parent account will not be accessible from the subuser accounts.

Transactional templates are templates created specifically for transactional email and are not to be confused with [Marketing Campaigns templates](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/templates.html). For more information about transactional templates, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Transactional_Templates/index.html).


```js
sendgrid.GET_templates(null, context)
```


### POST_templates
**This endpoint allows you to create a transactional template.**

Each user can create up to 300 different transactional templates. Transactional templates are specific to accounts and subusers. Templates created on a parent account will not be accessible from the subuser accounts.

Transactional templates are templates created specifically for transactional email and are not to be confused with [Marketing Campaigns templates](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/templates.html). For more information about transactional templates, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Transactional_Templates/index.html).


```js
sendgrid.POST_templates({}, context)
```

#### Parameters
* body (object)

### templates.template_id.delete
**This endpoint allows you to delete a transactional template.**

Each user can create up to 300 different transactional templates. Transactional templates are specific to accounts and subusers. Templates created on a parent account will not be accessible from the subuser accounts.

Transactional templates are templates created specifically for transactional email and are not to be confused with [Marketing Campaigns templates](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/templates.html). For more information about transactional templates, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Transactional_Templates/index.html).



```js
sendgrid.templates.template_id.delete({
  "template_id": ""
}, context)
```

#### Parameters
* template_id (string) **required** - The id of the transactional template you want to edit.

### templates.template_id.get
**This endpoint allows you to retrieve a single transactional template.**

Each user can create up to 300 different transactional templates. Transactional templates are specific to accounts and subusers. Templates created on a parent account will not be accessible from the subuser accounts.

Transactional templates are templates created specifically for transactional email and are not to be confused with [Marketing Campaigns templates](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/templates.html). For more information about transactional templates, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Transactional_Templates/index.html).



```js
sendgrid.templates.template_id.get({
  "template_id": ""
}, context)
```

#### Parameters
* template_id (string) **required** - The id of the transactional template you want to edit.

### templates.template_id.patch
**This endpoint allows you to edit a transactional template.**

Each user can create up to 300 different transactional templates. Transactional templates are specific to accounts and subusers. Templates created on a parent account will not be accessible from the subuser accounts.

Transactional templates are templates created specifically for transactional email and are not to be confused with [Marketing Campaigns templates](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/templates.html). For more information about transactional templates, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Transactional_Templates/index.html).



```js
sendgrid.templates.template_id.patch({
  "template_id": ""
}, context)
```

#### Parameters
* body (object)
* template_id (string) **required** - The id of the transactional template you want to edit.

### templates.template_id.versions.post
**This endpoint allows you to create a new version of a template.**

Each transactional template can have multiple versions, each version with its own subject and content. Each user can have up to 300 versions across across all templates.

For more information about transactional templates, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Transactional_Templates/index.html).



```js
sendgrid.templates.template_id.versions.post({
  "template_id": ""
}, context)
```

#### Parameters
* body (object)
* template_id (string) **required**

### templates.template_id.versions.version_id.delete
**This endpoint allows you to delete one of your transactional template versions.**

Each transactional template can have multiple versions, each version with its own subject and content. Each user can have up to 300 versions across across all templates.

For more information about transactional templates, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Transactional_Templates/index.html).

## URI Parameters
| URI Parameter | Type | Description |
|---|---|---|
| template_id | string | The ID of the original template |
| version_id | string | The ID of the template version |


```js
sendgrid.templates.template_id.versions.version_id.delete({
  "template_id": "",
  "version_id": ""
}, context)
```

#### Parameters
* template_id (string) **required**
* version_id (string) **required**

### templates.template_id.versions.version_id.get
**This endpoint allows you to retrieve a specific version of a template.**

Each transactional template can have multiple versions, each version with its own subject and content. Each user can have up to 300 versions across across all templates.

For more information about transactional templates, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Transactional_Templates/index.html).

## URI Parameters
| URI Parameter | Type | Description |
|---|---|---|
| template_id | string | The ID of the original template |
| version_id | string |  The ID of the template version |


```js
sendgrid.templates.template_id.versions.version_id.get({
  "template_id": "",
  "version_id": ""
}, context)
```

#### Parameters
* template_id (string) **required**
* version_id (string) **required**

### templates.template_id.versions.version_id.patch
**This endpoint allows you to edit a version of one of your transactional templates.**

Each transactional template can have multiple versions, each version with its own subject and content. Each user can have up to 300 versions across across all templates.

For more information about transactional templates, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Transactional_Templates/index.html).

## URI Parameters
| URI Parameter | Type | Description |
|---|---|---|
| template_id | string | The ID of the original template |
| version_id | string | The ID of the template version |


```js
sendgrid.templates.template_id.versions.version_id.patch({
  "template_id": "",
  "version_id": ""
}, context)
```

#### Parameters
* body (object)
* template_id (string) **required**
* version_id (string) **required**

### templates.template_id.versions.version_id.activate.post
**This endpoint allows you to activate a version of one of your templates.**

Each transactional template can have multiple versions, each version with its own subject and content. Each user can have up to 300 versions across across all templates.


For more information about transactional templates, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Transactional_Templates/index.html).

## URI Parameters
| URI Parameter | Type | Description |
|---|---|---|
| template_id | string | The ID of the original template |
| version_id | string |  The ID of the template version |


```js
sendgrid.templates.template_id.versions.version_id.activate.post({
  "template_id": "",
  "version_id": ""
}, context)
```

#### Parameters
* template_id (string) **required**
* version_id (string) **required**

### GET_tracking_settings
**This endpoint allows you to retrieve a list of all tracking settings that you can enable on your account.**

You can track a variety of the actions your recipients may take when interacting with your emails including opening your emails, clicking on links in your emails, and subscribing to (or unsubscribing from) your emails.

For more information about tracking, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/tracking.html).


```js
sendgrid.GET_tracking_settings({}, context)
```

#### Parameters
* limit (integer) - The number of settings to return.
* offset (integer) - Where in the list of results you want to begin retrieving settings.

### tracking_settings.click.get
**This endpoint allows you to retrieve your current click tracking setting.**

You can track a variety of the actions your recipients may take when interacting with your emails including opening your emails, clicking on links in your emails, and subscribing to (or unsubscribing from) your emails.

For more information about tracking, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/tracking.html).


```js
sendgrid.tracking_settings.click.get(null, context)
```


### tracking_settings.click.patch
**This endpoint allows you to change your current click tracking setting. You can enable, or disable, click tracking using this endpoint.**

You can track a variety of the actions your recipients may take when interacting with your emails including opening your emails, clicking on links in your emails, and subscribing to (or unsubscribing from) your emails.

For more information about tracking, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/tracking.html).


```js
sendgrid.tracking_settings.click.patch({}, context)
```

#### Parameters
* body (object)

### tracking_settings.google_analytics.get
**This endpoint allows you to retrieve your current setting for Google Analytics.**

For more information about using Google Analytics, please refer to [Google’s URL Builder](https://support.google.com/analytics/answer/1033867?hl=en) and their article on ["Best Practices for Campaign Building"](https://support.google.com/analytics/answer/1037445).

We default the settings to Google’s recommendations. For more information, see [Google Analytics Demystified](https://sendgrid.com/docs/Classroom/Track/Collecting_Data/google_analytics_demystified_ga_statistics_vs_sg_statistics.html).

You can track a variety of the actions your recipients may take when interacting with your emails including opening your emails, clicking on links in your emails, and subscribing to (or unsubscribing from) your emails.

For more information about tracking, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/tracking.html).


```js
sendgrid.tracking_settings.google_analytics.get(null, context)
```


### tracking_settings.google_analytics.patch
**This endpoint allows you to update your current setting for Google Analytics.**

For more information about using Google Analytics, please refer to [Google’s URL Builder](https://support.google.com/analytics/answer/1033867?hl=en) and their article on ["Best Practices for Campaign Building"](https://support.google.com/analytics/answer/1037445).

We default the settings to Google’s recommendations. For more information, see [Google Analytics Demystified](https://sendgrid.com/docs/Classroom/Track/Collecting_Data/google_analytics_demystified_ga_statistics_vs_sg_statistics.html).

You can track a variety of the actions your recipients may take when interacting with your emails including opening your emails, clicking on links in your emails, and subscribing to (or unsubscribing from) your emails.

For more information about tracking, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/tracking.html).


```js
sendgrid.tracking_settings.google_analytics.patch({}, context)
```

#### Parameters
* body (object)

### tracking_settings.open.get
**This endpoint allows you to retrieve your current settings for open tracking.**

Open Tracking adds an invisible image at the end of the email which can track email opens. If the email recipient has images enabled on their email client, a request to SendGrid’s server for the invisible image is executed and an open event is logged. These events are logged in the Statistics portal, Email Activity interface, and are reported by the Event Webhook.

You can track a variety of the actions your recipients may take when interacting with your emails including opening your emails, clicking on links in your emails, and subscribing to (or unsubscribing from) your emails.

For more information about tracking, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/tracking.html).


```js
sendgrid.tracking_settings.open.get(null, context)
```


### tracking_settings.open.patch
**This endpoint allows you to update your current settings for open tracking.**

Open Tracking adds an invisible image at the end of the email which can track email opens. If the email recipient has images enabled on their email client, a request to SendGrid’s server for the invisible image is executed and an open event is logged. These events are logged in the Statistics portal, Email Activity interface, and are reported by the Event Webhook.

You can track a variety of the actions your recipients may take when interacting with your emails including opening your emails, clicking on links in your emails, and subscribing to (or unsubscribing from) your emails.

For more information about tracking, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/tracking.html).


```js
sendgrid.tracking_settings.open.patch({}, context)
```

#### Parameters
* body (object)

### tracking_settings.subscription.get
**This endpoint allows you to retrieve your current settings for subscription tracking.**

Subscription tracking adds links to the bottom of your emails that allows your recipients to subscribe to, or unsubscribe from, your emails.

You can track a variety of the actions your recipients may take when interacting with your emails including opening your emails, clicking on links in your emails, and subscribing to (or unsubscribing from) your emails.

For more information about tracking, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/tracking.html).


```js
sendgrid.tracking_settings.subscription.get(null, context)
```


### tracking_settings.subscription.patch
**This endpoint allows you to update your current settings for subscription tracking.**

Subscription tracking adds links to the bottom of your emails that allows your recipients to subscribe to, or unsubscribe from, your emails.

You can track a variety of the actions your recipients may take when interacting with your emails including opening your emails, clicking on links in your emails, and subscribing to (or unsubscribing from) your emails.

For more information about tracking, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/tracking.html).


```js
sendgrid.tracking_settings.subscription.patch({}, context)
```

#### Parameters
* body (object)

### user.account.get
**This endpoint allows you to retrieve your user account details.**

Your user's account information includes the user's account type and reputation.

Keeping your user profile up to date is important. This will help SendGrid to verify who you are as well as contact you should we need to.

For more information about your user profile:

* [SendGrid Account Settings](https://sendgrid.com/docs/User_Guide/Settings/account.html)


```js
sendgrid.user.account.get(null, context)
```


### user.credits.get
**This endpoint allows you to retrieve the current credit balance for your account.**

Your monthly credit allotment limits the number of emails you may send before incurring overage charges. For more information about credits and billing, please visit our [Clssroom](https://sendgrid.com/docs/Classroom/Basics/Billing/billing_info_and_faqs.html).


```js
sendgrid.user.credits.get(null, context)
```


### user.email.get
**This endpoint allows you to retrieve the email address currently on file for your account.**

Keeping your user profile up to date is important. This will help SendGrid to verify who you are as well as contact you should we need to.

For more information about your user profile:

* [SendGrid Account Settings](https://sendgrid.com/docs/User_Guide/Settings/account.html)


```js
sendgrid.user.email.get(null, context)
```


### user.email.put
**This endpoint allows you to update the email address currently on file for your account.**

Keeping your user profile up to date is important. This will help SendGrid to verify who you are as well as contact you should we need to.

For more information about your user profile:

* [SendGrid Account Settings](https://sendgrid.com/docs/User_Guide/Settings/account.html)


```js
sendgrid.user.email.put({}, context)
```

#### Parameters
* body (object)

### user.password.put
**This endpoint allows you to update your password.**

Keeping your user profile up to date is important. This will help SendGrid to verify who you are as well as contact you should we need to.

For more information about your user profile:

* [SendGrid Account Settings](https://sendgrid.com/docs/User_Guide/Settings/account.html)


```js
sendgrid.user.password.put({}, context)
```

#### Parameters
* body (object)

### user.profile.get
Keeping your user profile up to date is important. This will help SendGrid to verify who you are as well as contact you should we need to.

For more information about your user profile:

* [SendGrid Account Settings](https://sendgrid.com/docs/User_Guide/Settings/account.html)


```js
sendgrid.user.profile.get(null, context)
```


### user.profile.patch
**This endpoint allows you to update your current profile details.**

Keeping your user profile up to date is important. This will help SendGrid to verify who you are as well as contact you should we need to.

For more information about your user profile:

* [SendGrid Account Settings](https://sendgrid.com/docs/User_Guide/Settings/account.html)

It should be noted that any one or more of the parameters can be updated via the PATCH /user/profile endpoint. The only requirement is that you include at least one when you PATCH.


```js
sendgrid.user.profile.patch({}, context)
```

#### Parameters
* body (object)

### user.scheduled_sends.get
**This endpoint allows you to retrieve all cancel/paused scheduled send information.**

The Cancel Scheduled Sends feature allows the customer to cancel a scheduled send based on a Batch ID included in the SMTPAPI header.Scheduled sends cancelled less than 10 minutes before the scheduled time are not guaranteed to be cancelled.


```js
sendgrid.user.scheduled_sends.get(null, context)
```


### user.scheduled_sends.post
**This endpoint allows you to cancel or pause an email that has been scheduled to be sent.**

If the maximum number of cancellations/pauses are added, HTTP 400 will
be returned.

The Cancel Scheduled Sends feature allows the customer to cancel a scheduled send based on a Batch ID included in the SMTPAPI header.Scheduled sends cancelled less than 10 minutes before the scheduled time are not guaranteed to be cancelled.


```js
sendgrid.user.scheduled_sends.post({}, context)
```

#### Parameters
* body (object)

### user.scheduled_sends.batch_id.delete
**This endpoint allows you to delete the cancellation/pause of a scheduled send.**

The Cancel Scheduled Sends feature allows the customer to cancel a scheduled send based on a Batch ID included in the SMTPAPI header.Scheduled sends cancelled less than 10 minutes before the scheduled time are not guaranteed to be cancelled.


```js
sendgrid.user.scheduled_sends.batch_id.delete({
  "batch_id": ""
}, context)
```

#### Parameters
* batch_id (string) **required**

### user.scheduled_sends.batch_id.get
**This endpoint allows you to retrieve the cancel/paused scheduled send information for a specific `batch_id`.**

The Cancel Scheduled Sends feature allows the customer to cancel a scheduled send based on a Batch ID included in the SMTPAPI header.Scheduled sends cancelled less than 10 minutes before the scheduled time are not guaranteed to be cancelled.


```js
sendgrid.user.scheduled_sends.batch_id.get({
  "batch_id": ""
}, context)
```

#### Parameters
* batch_id (string) **required**

### user.scheduled_sends.batch_id.patch
**This endpoint allows you to update the status of a scheduled send for the given `batch_id`.**

The Cancel Scheduled Sends feature allows the customer to cancel a scheduled send based on a Batch ID included in the SMTPAPI header.Scheduled sends cancelled less than 10 minutes before the scheduled time are not guaranteed to be cancelled.


```js
sendgrid.user.scheduled_sends.batch_id.patch({
  "batch_id": ""
}, context)
```

#### Parameters
* body (object)
* batch_id (string) **required**

### user.settings.enforced_tls.get
**This endpoint allows you to retrieve your current Enforced TLS settings.**

The Enforced TLS settings specify whether or not the recipient is required to support TLS or have a valid certificate. See the [SMTP Ports User Guide](https://sendgrid.com/docs/Classroom/Basics/Email_Infrastructure/smtp_ports.html) for more information on opportunistic TLS.

**Note:** If either setting is enabled and the recipient does not support TLS or have a valid certificate, we drop the message and send a block event with “TLS required but not supported” as the description.


```js
sendgrid.user.settings.enforced_tls.get(null, context)
```


### user.settings.enforced_tls.patch
**This endpoint allows you to update your current Enforced TLS settings.**

The Enforced TLS settings specify whether or not the recipient is required to support TLS or have a valid certificate. See the [SMTP Ports User Guide](https://sendgrid.com/docs/Classroom/Basics/Email_Infrastructure/smtp_ports.html) for more information on opportunistic TLS.

**Note:** If either setting is enabled and the recipient does not support TLS or have a valid certificate, we drop the message and send a block event with “TLS required but not supported” as the description.


```js
sendgrid.user.settings.enforced_tls.patch({}, context)
```

#### Parameters
* body (object)

### user.username.get
**This endpoint allows you to retrieve your current account username.**

Keeping your user profile up to date is important. This will help SendGrid to verify who you are as well as contact you should we need to.

For more information about your user profile:

* [SendGrid Account Settings](https://sendgrid.com/docs/User_Guide/Settings/account.html)


```js
sendgrid.user.username.get(null, context)
```


### user.username.put
**This endpoint allows you to update the username for your account.**

Keeping your user profile up to date is important. This will help SendGrid to verify who you are as well as contact you should we need to.

For more information about your user profile:

* [SendGrid Account Settings](https://sendgrid.com/docs/User_Guide/Settings/account.html)


```js
sendgrid.user.username.put({}, context)
```

#### Parameters
* body (object)

### user.webhooks.event.settings.get
**This endpoint allows you to retrieve your current event webhook settings.**

If an event type is marked as `true`, then the event webhook will include information about that event.

SendGrid’s Event Webhook will notify a URL of your choice via HTTP POST with information about events that occur as SendGrid processes your email.

Common uses of this data are to remove unsubscribes, react to spam reports, determine unengaged recipients, identify bounced email addresses, or create advanced analytics of your email program.


```js
sendgrid.user.webhooks.event.settings.get(null, context)
```


### user.webhooks.event.settings.patch
**This endpoint allows you to update your current event webhook settings.**

If an event type is marked as `true`, then the event webhook will include information about that event.

SendGrid’s Event Webhook will notify a URL of your choice via HTTP POST with information about events that occur as SendGrid processes your email.

Common uses of this data are to remove unsubscribes, react to spam reports, determine unengaged recipients, identify bounced email addresses, or create advanced analytics of your email program.


```js
sendgrid.user.webhooks.event.settings.patch({}, context)
```

#### Parameters
* body (object)

### user.webhooks.event.test.post
**This endpoint allows you to test your event webhook by sending a fake event notification post to the provided URL.**

SendGrid’s Event Webhook will notify a URL of your choice via HTTP POST with information about events that occur as SendGrid processes your email.

Common uses of this data are to remove unsubscribes, react to spam reports, determine unengaged recipients, identify bounced email addresses, or create advanced analytics of your email program.


```js
sendgrid.user.webhooks.event.test.post({}, context)
```

#### Parameters
* body (object)

### user.webhooks.parse.settings.get
**This endpoint allows you to retrieve all of your current inbound parse settings.**

The inbound parse webhook allows you to have incoming emails parsed, extracting some or all of the contnet, and then have that content POSTed by SendGrid to a URL of your choosing. For more information, please see our [User Guide](https://sendgrid.com/docs/API_Reference/Webhooks/parse.html).


```js
sendgrid.user.webhooks.parse.settings.get(null, context)
```


### user.webhooks.parse.settings.post
**This endpoint allows you to create a new inbound parse setting.**

The inbound parse webhook allows you to have incoming emails parsed, extracting some or all of the content, and then have that content POSTed by SendGrid to a URL of your choosing. For more information, please see our [User Guide](https://sendgrid.com/docs/API_Reference/Webhooks/parse.html).


```js
sendgrid.user.webhooks.parse.settings.post({}, context)
```

#### Parameters
* body (object)

### user.webhooks.parse.settings.hostname.delete
**This endpoint allows you to delete a specific inbound parse setting.**

The inbound parse webhook allows you to have incoming emails parsed, extracting some or all of the contnet, and then have that content POSTed by SendGrid to a URL of your choosing. For more information, please see our [User Guide](https://sendgrid.com/docs/API_Reference/Webhooks/parse.html).


```js
sendgrid.user.webhooks.parse.settings.hostname.delete({
  "hostname": ""
}, context)
```

#### Parameters
* hostname (string) **required** - The hostname associated with the specific inbound parse setting that you want to update.

### user.webhooks.parse.settings.hostname.get
**This endpoint allows you to retrieve a specific inbound parse setting.**

The inbound parse webhook allows you to have incoming emails parsed, extracting some or all of the contnet, and then have that content POSTed by SendGrid to a URL of your choosing. For more information, please see our [User Guide](https://sendgrid.com/docs/API_Reference/Webhooks/parse.html).


```js
sendgrid.user.webhooks.parse.settings.hostname.get({
  "hostname": ""
}, context)
```

#### Parameters
* hostname (string) **required** - The hostname associated with the specific inbound parse setting that you want to update.

### user.webhooks.parse.settings.hostname.patch
**This endpoint allows you to update a specific inbound parse setting.**

The inbound parse webhook allows you to have incoming emails parsed, extracting some or all of the contnet, and then have that content POSTed by SendGrid to a URL of your choosing. For more information, please see our [User Guide](https://sendgrid.com/docs/API_Reference/Webhooks/parse.html).


```js
sendgrid.user.webhooks.parse.settings.hostname.patch({
  "hostname": ""
}, context)
```

#### Parameters
* body (object)
* hostname (string) **required** - The hostname associated with the specific inbound parse setting that you want to update.

### user.webhooks.parse.stats.get
**This endpoint allows you to retrieve the statistics for your Parse Webhook useage.**

SendGrid's Inbound Parse Webhook allows you to parse the contents and attachments of incomming emails. The Parse API can then POST the parsed emails to a URL that you specify. The Inbound Parse Webhook cannot parse messages greater than 20MB in size, including all attachments.

There are a number of pre-made integrations for the SendGrid Parse Webhook which make processing events easy. You can find these integrations in the [Library Index](https://sendgrid.com/docs/Integrate/libraries.html#-Webhook-Libraries).


```js
sendgrid.user.webhooks.parse.stats.get({
  "start_date": ""
}, context)
```

#### Parameters
* limit (string) - The number of statistics to return on each page.
* offset (string) - The number of statistics to skip.
* aggregated_by (string) - How you would like the statistics to by grouped. 
* start_date (string) **required** - The starting date of the statistics you want to retrieve. Must be in the format YYYY-MM-DD
* end_date (string) - The end date of the statistics you want to retrieve. Must be in the format YYYY-MM-DD

### whitelabel.domains.get
**This endpoint allows you to retrieve a list of all domain whitelabels you have created.**

A domain whitelabel allows you to remove the “via” or “sent on behalf of” message that your recipients see when they read your emails. Whitelabeling a domain allows you to replace sendgrid.net with your personal sending domain. You will be required to create a subdomain so that SendGrid can generate the DNS records which you must give to your host provider. If you choose to use Automated Security, SendGrid will provide you with 3 CNAME records. If you turn Automated Security off, you will be given 2 TXT records and 1 MX record.

For more information on whitelabeling, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/Whitelabel/index.html)



```js
sendgrid.whitelabel.domains.get({}, context)
```

#### Parameters
* limit (integer) - Number of domains to return.
* offset (integer) - Paging offset.
* exclude_subusers (boolean) - Exclude subuser domains from the result.
* username (string) - The username associated with a whitelabel.
* domain (string) - Search for domain whitelabels that match the given domain.

### whitelabel.domains.post
**This endpoint allows you to create a whitelabel for one of your domains.**

If you are creating a domain whitelabel that you would like a subuser to use, you have two options:
1. Use the "username" parameter. This allows you to create a whitelabel on behalf of your subuser. This means the subuser is able to see and modify the created whitelabel.
2. Use the Association workflow (see Associate Domain section). This allows you to assign a whitelabel created by the parent to a subuser. This means the subuser will default to the assigned whitelabel, but will not be able to see or modify that whitelabel. However, if the subuser creates their own whitelabel it will overwrite the assigned whitelabel.

A domain whitelabel allows you to remove the “via” or “sent on behalf of” message that your recipients see when they read your emails. Whitelabeling a domain allows you to replace sendgrid.net with your personal sending domain. You will be required to create a subdomain so that SendGrid can generate the DNS records which you must give to your host provider. If you choose to use Automated Security, SendGrid will provide you with 3 CNAME records. If you turn Automated Security off, you will be given 2 TXT records and 1 MX record.

For more information on whitelabeling, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/Whitelabel/index.html)


```js
sendgrid.whitelabel.domains.post({}, context)
```

#### Parameters
* body (object)

### whitelabel.domains.default.get
**This endpoint allows you to retrieve the default whitelabel for a domain.**

A domain whitelabel allows you to remove the “via” or “sent on behalf of” message that your recipients see when they read your emails. Whitelabeling a domain allows you to replace sendgrid.net with your personal sending domain. You will be required to create a subdomain so that SendGrid can generate the DNS records which you must give to your host provider. If you choose to use Automated Security, SendGrid will provide you with 3 CNAME records. If you turn Automated Security off, you will be given 2 TXT records and 1 MX record.

For more information on whitelabeling, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/Whitelabel/index.html)

## URI Parameters
| URI Parameter   | Type   | Description  |
|---|---|---|
| domain | string  |The domain to find a default domain whitelabel for. |


```js
sendgrid.whitelabel.domains.default.get(null, context)
```


### whitelabel.domains.subuser.delete
**This endpoint allows you to disassociate a specific whitelabel from a subuser.**

A domain whitelabel allows you to remove the “via” or “sent on behalf of” message that your recipients see when they read your emails. Whitelabeling a domain allows you to replace sendgrid.net with your personal sending domain. You will be required to create a subdomain so that SendGrid can generate the DNS records which you must give to your host provider. If you choose to use Automated Security, SendGrid will provide you with 3 CNAME records. If you turn Automated Security off, you will be given 2 TXT records and 1 MX record.

Domain whitelabels can be associated with (i.e. assigned to) subusers from a parent account. This functionality allows subusers to send mail using their parent's whitelabels. To associate a whitelabel with a subuser, the parent account must first create the whitelabel and validate it. The the parent may then associate the whitelabel via the subuser management tools.

For more information on whitelabeling, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/Whitelabel/index.html)

## URI Parameters
| URI Parameter   | Type  | Required?  | Description  |
|---|---|---|---|
| username | string  | required  | Username for the subuser to find associated whitelabels for. |


```js
sendgrid.whitelabel.domains.subuser.delete(null, context)
```


### whitelabel.domains.subuser.get
**This endpoint allows you to retrieve all of the whitelabels that have been assigned to a specific subuser.**

A domain whitelabel allows you to remove the “via” or “sent on behalf of” message that your recipients see when they read your emails. Whitelabeling a domain allows you to replace sendgrid.net with your personal sending domain. You will be required to create a subdomain so that SendGrid can generate the DNS records which you must give to your host provider. If you choose to use Automated Security, SendGrid will provide you with 3 CNAME records. If you turn Automated Security off, you will be given 2 TXT records and 1 MX record.

Domain whitelabels can be associated with (i.e. assigned to) subusers from a parent account. This functionality allows subusers to send mail using their parent's whitelabels. To associate a whitelabel with a subuser, the parent account must first create the whitelabel and validate it. The the parent may then associate the whitelabel via the subuser management tools.

For more information on whitelabeling, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/Whitelabel/index.html)

## URI Parameters
| URI Parameter   | Type  | Description  |
|---|---|---|
| username | string  | Username of the subuser to find associated whitelabels for. |


```js
sendgrid.whitelabel.domains.subuser.get(null, context)
```


### whitelabel.domains.domain_id.delete
**This endpoint allows you to delete a domain whitelabel.**

A domain whitelabel allows you to remove the “via” or “sent on behalf of” message that your recipients see when they read your emails. Whitelabeling a domain allows you to replace sendgrid.net with your personal sending domain. You will be required to create a subdomain so that SendGrid can generate the DNS records which you must give to your host provider. If you choose to use Automated Security, SendGrid will provide you with 3 CNAME records. If you turn Automated Security off, you will be given 2 TXT records and 1 MX record.

For more information on whitelabeling, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/Whitelabel/index.html)


```js
sendgrid.whitelabel.domains.domain_id.delete({
  "domain_id": 0
}, context)
```

#### Parameters
* domain_id (number) **required** - The id of the domain whitelabel.

### whitelabel.domains.domain_id.get
**This endpoint allows you to retrieve a specific domain whitelabel.**

A domain whitelabel allows you to remove the “via” or “sent on behalf of” message that your recipients see when they read your emails. Whitelabeling a domain allows you to replace sendgrid.net with your personal sending domain. You will be required to create a subdomain so that SendGrid can generate the DNS records which you must give to your host provider. If you choose to use Automated Security, SendGrid will provide you with 3 CNAME records. If you turn Automated Security off, you will be given 2 TXT records and 1 MX record.

For more information on whitelabeling, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/Whitelabel/index.html)



```js
sendgrid.whitelabel.domains.domain_id.get({
  "domain_id": 0
}, context)
```

#### Parameters
* domain_id (number) **required** - The id of the domain whitelabel.

### whitelabel.domains.domain_id.patch
**This endpoint allows you to update the settings for a domain whitelabel.**

A domain whitelabel allows you to remove the “via” or “sent on behalf of” message that your recipients see when they read your emails. Whitelabeling a domain allows you to replace sendgrid.net with your personal sending domain. You will be required to create a subdomain so that SendGrid can generate the DNS records which you must give to your host provider. If you choose to use Automated Security, SendGrid will provide you with 3 CNAME records. If you turn Automated Security off, you will be given 2 TXT records and 1 MX record.

For more information on whitelabeling, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/Whitelabel/index.html)


```js
sendgrid.whitelabel.domains.domain_id.patch({
  "domain_id": 0
}, context)
```

#### Parameters
* body (object)
* domain_id (number) **required** - The id of the domain whitelabel.

### whitelabel.domains.domain_id.subuser.post
**This endpoint allows you to associate a specific domain whitelabel with a subuser.**

A domain whitelabel allows you to remove the “via” or “sent on behalf of” message that your recipients see when they read your emails. Whitelabeling a domain allows you to replace sendgrid.net with your personal sending domain. You will be required to create a subdomain so that SendGrid can generate the DNS records which you must give to your host provider. If you choose to use Automated Security, SendGrid will provide you with 3 CNAME records. If you turn Automated Security off, you will be given 2 TXT records and 1 MX record.

Domain whitelabels can be associated with (i.e. assigned to) subusers from a parent account. This functionality allows subusers to send mail using their parent's whitelabels. To associate a whitelabel with a subuser, the parent account must first create the whitelabel and validate it. The the parent may then associate the whitelabel via the subuser management tools.

For more information on whitelabeling, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/Whitelabel/index.html)

## URI Parameters
| URI Parameter   | Type   | Description  |
|---|---|---|
| domain_id | integer   | ID of the domain whitelabel to associate with the subuser. |


```js
sendgrid.whitelabel.domains.domain_id.subuser.post({
  "domain_id": ""
}, context)
```

#### Parameters
* body (object)
* domain_id (string) **required**

### whitelabel.domains.id.ips.post
**This endpoint allows you to add an IP address to a domain whitelabel.**

A domain whitelabel allows you to remove the “via” or “sent on behalf of” message that your recipients see when they read your emails. Whitelabeling a domain allows you to replace sendgrid.net with your personal sending domain. You will be required to create a subdomain so that SendGrid can generate the DNS records which you must give to your host provider. If you choose to use Automated Security, SendGrid will provide you with 3 CNAME records. If you turn Automated Security off, you will be given 2 TXT records and 1 MX record.

For more information on whitelabeling, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/Whitelabel/index.html)

## URI Parameters
| URI Parameter   | Type  |  Description  |
|---|---|---|
| id | integer  | ID of the domain to which you are adding an IP |


```js
sendgrid.whitelabel.domains.id.ips.post({
  "id": ""
}, context)
```

#### Parameters
* body (object)
* id (string) **required**

### whitelabel.domains.id.ips.ip.delete
**This endpoint allows you to remove a domain's IP address from that domain's whitelabel.**

A domain whitelabel allows you to remove the “via” or “sent on behalf of” message that your recipients see when they read your emails. Whitelabeling a domain allows you to replace sendgrid.net with your personal sending domain. You will be required to create a subdomain so that SendGrid can generate the DNS records which you must give to your host provider. If you choose to use Automated Security, SendGrid will provide you with 3 CNAME records. If you turn Automated Security off, you will be given 2 TXT records and 1 MX record.

For more information on whitelabeling, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/Whitelabel/index.html)

## URI Parameters
| URI Parameter   | Type  | Description  |
|---|---|---|
| id | integer  | ID of the domain whitelabel to delete the IP from. |
| ip | string | IP to remove from the domain whitelabel. |


```js
sendgrid.whitelabel.domains.id.ips.ip.delete({
  "id": "",
  "ip": ""
}, context)
```

#### Parameters
* id (string) **required**
* ip (string) **required**

### whitelabel.domains.id.validate.post
**This endpoint allows you to validate a domain whitelabel. If it fails, it will return an error message describing why the whitelabel could not be validated.**

A domain whitelabel allows you to remove the “via” or “sent on behalf of” message that your recipients see when they read your emails. Whitelabeling a domain allows you to replace sendgrid.net with your personal sending domain. You will be required to create a subdomain so that SendGrid can generate the DNS records which you must give to your host provider. If you choose to use Automated Security, SendGrid will provide you with 3 CNAME records. If you turn Automated Security off, you will be given 2 TXT records and 1 MX record.

For more information on whitelabeling, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/Whitelabel/index.html)

## URI Parameters
| URI Parameter   | Type   | Description  |
|---|---|---|
| id | integer  |ID of the domain whitelabel to validate. |


```js
sendgrid.whitelabel.domains.id.validate.post({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required**

### whitelabel.ips.get
**This endpoint allows you to retrieve all of the IP whitelabels that have been createdy by this account.**

You may include a search key by using the "ip" parameter. This enables you to perform a prefix search for a given IP segment (e.g. "192.").

A IP whitelabel consists of a subdomain and domain that will be used to generate a reverse DNS record for a given IP. Once SendGrid has verified that the appropriate A record for the IP has been created, the appropriate reverse DNS record for the IP is generated.

For more information, please see our [User Guide](https://sendgrid.com/docs/API_Reference/Web_API_v3/Whitelabel/ips.html).


```js
sendgrid.whitelabel.ips.get({}, context)
```

#### Parameters
* limit (integer) - The number of results to retrieve.
* offset (integer) - The point in the list of results to begin retrieving IPs from.
* ip (string) - The IP segment that you would like to use in a prefix search.

### whitelabel.ips.post
**This endpoint allows you to create an IP whitelabel.**

When creating an IP whitelable, you should use the same subdomain that you used when you created a domain whitelabel.

A IP whitelabel consists of a subdomain and domain that will be used to generate a reverse DNS record for a given IP. Once SendGrid has verified that the appropriate A record for the IP has been created, the appropriate reverse DNS record for the IP is generated.

For more information, please see our [User Guide](https://sendgrid.com/docs/API_Reference/Web_API_v3/Whitelabel/ips.html).


```js
sendgrid.whitelabel.ips.post({}, context)
```

#### Parameters
* body (object)

### whitelabel.ips.id.delete
**This endpoint allows you to delete an IP whitelabel.**

A IP whitelabel consists of a subdomain and domain that will be used to generate a reverse DNS record for a given IP. Once SendGrid has verified that the appropriate A record for the IP has been created, the appropriate reverse DNS record for the IP is generated.

For more information, please see our [User Guide](https://sendgrid.com/docs/API_Reference/Web_API_v3/Whitelabel/ips.html).


```js
sendgrid.whitelabel.ips.id.delete({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The id of the IP whitelabel that you want to delete.

### whitelabel.ips.id.get
**This endpoint allows you to retrieve an IP whitelabel.**

A IP whitelabel consists of a subdomain and domain that will be used to generate a reverse DNS record for a given IP. Once SendGrid has verified that the appropriate A record for the IP has been created, the appropriate reverse DNS record for the IP is generated.

For more information, please see our [User Guide](https://sendgrid.com/docs/API_Reference/Web_API_v3/Whitelabel/ips.html).


```js
sendgrid.whitelabel.ips.id.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The id of the IP whitelabel that you want to delete.

### whitelabel.ips.id.validate.post
**This endpoint allows you to validate an IP whitelabel.**

A IP whitelabel consists of a subdomain and domain that will be used to generate a reverse DNS record for a given IP. Once SendGrid has verified that the appropriate A record for the IP has been created, the appropriate reverse DNS record for the IP is generated.

For more information, please see our [User Guide](https://sendgrid.com/docs/API_Reference/Web_API_v3/Whitelabel/ips.html).


```js
sendgrid.whitelabel.ips.id.validate.post({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required**

### whitelabel.links.get
**This endpoint allows you to retrieve all link whitelabels.**

Email link whitelabels allow all of the click-tracked links you send in your emails to include the URL of your domain instead of sendgrid.net.

For more information, please see our [User Guide](https://sendgrid.com/docs/API_Reference/Web_API_v3/Whitelabel/links.html).


```js
sendgrid.whitelabel.links.get({}, context)
```

#### Parameters
* limit (integer) - Limits the number of results returned per page.

### whitelabel.links.post
**This endpoint allows you to create a new link whitelabel.**

Email link whitelabels allow all of the click-tracked links you send in your emails to include the URL of your domain instead of sendgrid.net.

For more information, please see our [User Guide](https://sendgrid.com/docs/API_Reference/Web_API_v3/Whitelabel/links.html).


```js
sendgrid.whitelabel.links.post({}, context)
```

#### Parameters
* limit (integer) - Number of domains to return.
* offset (integer) - Paging offset.
* body (object)

### whitelabel.links.default.get
**This endpoint allows you to retrieve the default link whitelabel.**

Default link whitelabel is the actual link whitelabel to be used when sending messages. If there are multiple link whitelabels, the default is determined by the following order:
<ul>
  <li>Validated link whitelabels marked as "default"</li>
  <li>Legacy link whitelabels (migrated from the whitelabel wizard)</li>
  <li>Default SendGrid link whitelabel (i.e. 100.ct.sendgrid.net)</li>
</ul>

Email link whitelabels allow all of the click-tracked links you send in your emails to include the URL of your domain instead of sendgrid.net.

For more information, please see our [User Guide](https://sendgrid.com/docs/API_Reference/Web_API_v3/Whitelabel/links.html).


```js
sendgrid.whitelabel.links.default.get({}, context)
```

#### Parameters
* domain (string) - The domain to match against when finding a corresponding link whitelabel.

### whitelabel.links.subuser.delete
**This endpoint allows you to disassociate a link whitelabel from a subuser.**

Link whitelables can be associated with subusers from the parent account. This functionality allows
subusers to send mail using their parent's linke whitelabels. To associate a link whitelabel, the parent account
must first create a whitelabel and validate it. The parent may then associate that whitelabel with a subuser via the API or the Subuser Management page in the user interface.

Email link whitelabels allow all of the click-tracked links you send in your emails to include the URL of your domain instead of sendgrid.net.

For more information, please see our [User Guide](https://sendgrid.com/docs/API_Reference/Web_API_v3/Whitelabel/links.html).


```js
sendgrid.whitelabel.links.subuser.delete({
  "username": ""
}, context)
```

#### Parameters
* username (string) **required** - The username of the subuser account that you want to disassociate a link whitelabel from.

### whitelabel.links.subuser.get
**This endpoint allows you to retrieve the associated link whitelabel for a subuser.**

Link whitelables can be associated with subusers from the parent account. This functionality allows
subusers to send mail using their parent's linke whitelabels. To associate a link whitelabel, the parent account
must first create a whitelabel and validate it. The parent may then associate that whitelabel with a subuser via the API or the Subuser Management page in the user interface.

Email link whitelabels allow all of the click-tracked links you send in your emails to include the URL of your domain instead of sendgrid.net.

For more information, please see our [User Guide](https://sendgrid.com/docs/API_Reference/Web_API_v3/Whitelabel/links.html).


```js
sendgrid.whitelabel.links.subuser.get({
  "username": ""
}, context)
```

#### Parameters
* username (string) **required** - The username of the subuser to retrieve associated link whitelabels for.

### whitelabel.links.id.delete
**This endpoint allows you to delete a link whitelabel.**

Email link whitelabels allow all of the click-tracked links you send in your emails to include the URL of your domain instead of sendgrid.net.

For more information, please see our [User Guide](https://sendgrid.com/docs/API_Reference/Web_API_v3/Whitelabel/links.html).


```js
sendgrid.whitelabel.links.id.delete({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - The id of the link whitelabel that you want to delete.

### whitelabel.links.id.get
**This endpoint allows you to retrieve a specific link whitelabel.**

Email link whitelabels allow all of the click-tracked links you send in your emails to include the URL of your domain instead of sendgrid.net.

For more information, please see our [User Guide](https://sendgrid.com/docs/API_Reference/Web_API_v3/Whitelabel/links.html).


```js
sendgrid.whitelabel.links.id.get({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - The id of the link whitelabel that you want to delete.

### whitelabel.links.id.patch
**This endpoint allows you to update a specific link whitelabel. You can use this endpoint to change a link whitelabel's default status.**

Email link whitelabels allow all of the click-tracked links you send in your emails to include the URL of your domain instead of sendgrid.net.

For more information, please see our [User Guide](https://sendgrid.com/docs/API_Reference/Web_API_v3/Whitelabel/links.html).


```js
sendgrid.whitelabel.links.id.patch({
  "id": 0
}, context)
```

#### Parameters
* body (object)
* id (integer) **required** - The id of the link whitelabel that you want to delete.

### whitelabel.links.id.validate.post
**This endpoint allows you to validate a link whitelabel.**

Email link whitelabels allow all of the click-tracked links you send in your emails to include the URL of your domain instead of sendgrid.net.

For more information, please see our [User Guide](https://sendgrid.com/docs/API_Reference/Web_API_v3/Whitelabel/links.html).


```js
sendgrid.whitelabel.links.id.validate.post({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - The id of the link whitelabel that you want to validate.

### whitelabel.links.link_id.subuser.post
**This endpoint allows you to associate a link whitelabel with a subuser account.**

Link whitelables can be associated with subusers from the parent account. This functionality allows
subusers to send mail using their parent's linke whitelabels. To associate a link whitelabel, the parent account
must first create a whitelabel and validate it. The parent may then associate that whitelabel with a subuser via the API or the Subuser Management page in the user interface.

Email link whitelabels allow all of the click-tracked links you send in your emails to include the URL of your domain instead of sendgrid.net.

For more information, please see our [User Guide](https://sendgrid.com/docs/API_Reference/Web_API_v3/Whitelabel/links.html).


```js
sendgrid.whitelabel.links.link_id.subuser.post({
  "link_id": 0
}, context)
```

#### Parameters
* body (object)
* link_id (integer) **required** - The id of the link whitelabel you want to associate.

