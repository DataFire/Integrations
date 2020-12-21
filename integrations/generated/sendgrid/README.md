# @datafire/sendgrid

Client library for SendGrid v3 API Documentation

## Installation and Usage
```bash
npm install --save @datafire/sendgrid
```
```js
let sendgrid = require('@datafire/sendgrid').create({
  Authorization: ""
});

.then(data => {
  console.log(data);
});
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

#### Input
* input `object`
  * limit `integer`: Limits the number of IPs to return.
  * on-behalf-of `string`

#### Output
* output `object`
  * result `array`
    * items `object`
      * allowed `boolean`
      * auth_method `string`
      * first_at `integer`
      * ip `string`
      * last_at `integer`
      * location `string`

### access_settings.whitelist.delete
**This endpoint allows you to remove one or more IPs from your IP whitelist.**

You can remove one IP at a time, or you can remove multiple IP addresses.

IP Access Management allows you to control which IP addresses can be used to access your account, either through the User Interface or the API. There is no limit to the number of IP addresses that you can add to your whitelist. It is possible to remove your own IP address from the whitelist, thus preventing yourself from accessing your account.

For more information, please see our [User Guide](http://sendgrid.com/docs/User_Guide/Settings/ip_access_management.html).


```js
sendgrid.access_settings.whitelist.delete({}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`
  * body `object`
    * ids `array`: An array of the IDs of the IP address that you want to remove from your whitelist.
      * items `integer`

#### Output
* output `object`

### access_settings.whitelist.get
**This endpoint allows you to retrieve a list of IP addresses that are currently whitelisted.**

IP Access Management allows you to control which IP addresses can be used to access your account, either through the User Interface or the API. There is no limit to the number of IP addresses that you can add to your whitelist. It is possible to remove your own IP address from the whitelist, thus preventing yourself from accessing your account.

For more information, please see our [User Guide](http://sendgrid.com/docs/User_Guide/Settings/ip_access_management.html).


```js
sendgrid.access_settings.whitelist.get({}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`

#### Output
* output `object`
  * result **required** `array`: An array listing all of your whitelisted IPs.
    * items `object`
      * created_at **required** `integer`: A Unix timestamp indicating when the IP was whitelisted.
      * id **required** `integer`: The ID of the whitelisted IP.
      * ip **required** `string`: The whitelisted IP.
      * updated_at **required** `integer`: A Unix timestamp indicating when the IPs whitelisting status was most recently updated.

### access_settings.whitelist.post
**This endpoint allows you to add one or more IP addresses to your IP whitelist.**

When adding an IP to your whitelist, include the IP address in an array. You can whitelist one IP at a time, or you can whitelist multiple IPs at once.

IP Access Management allows you to control which IP addresses can be used to access your account, either through the User Interface or the API. There is no limit to the number of IP addresses that you can add to your whitelist. It is possible to remove your own IP address from the whitelist, thus preventing yourself from accessing your account.

For more information, please see our [User Guide](http://sendgrid.com/docs/User_Guide/Settings/ip_access_management.html).


```js
sendgrid.access_settings.whitelist.post({}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`
  * body `object`
    * ips **required** `array`: An array containing the IP(s) you want to whitelist.
      * items `object`
        * ip **required** `string`: An IP address that you want to whitelist.

#### Output
* output `object`
  * result **required** `array`: An array listing all of your whitelisted IPs.
    * items `object`
      * created_at **required** `integer`: A Unix timestamp indicating when the IP was whitelisted.
      * id **required** `integer`: The ID of the whitelisted IP.
      * ip **required** `string`: The whitelisted IP.
      * updated_at **required** `integer`: A Unix timestamp indicating when the IPs whitelisting status was most recently updated.

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

#### Input
* input `object`
  * on-behalf-of `string`
  * rule_id **required** `string`: The ID of the whitelisted IP address that you want to retrieve.

#### Output
* output `object`

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

#### Input
* input `object`
  * on-behalf-of `string`
  * rule_id **required** `string`: The ID of the whitelisted IP address that you want to retrieve.

#### Output
* output `object`
  * created_at **required** `integer`: A Unix timestamp indicating when the IP was whitelisted.
  * id **required** `integer`: The ID of the IP address.
  * ip **required** `string`: The IP address.
  * updated_at **required** `integer`: A Unix timestamp indicating when the IP address was last updated.

### GET_alerts
**This endpoint allows you to retieve all of your alerts.**

Alerts allow you to specify an email address to receive notifications regarding your email usage or statistics. 
* Usage alerts allow you to set the threshold at which an alert will be sent.
* Stats notifications allow you to set how frequently you would like to receive email statistics reports. For example, "daily", "weekly", or "monthly".

For more information about alerts, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/alerts.html).


```js
sendgrid.GET_alerts({}, context)
```

#### Input
* input `object`
  * Authorization `string`
  * on-behalf-of `string`

#### Output
* output `array`: The list of alerts.
  * items `object`
    * created_at **required** `integer`: A Unix timestamp indicating when the alert was created.
    * email_to **required** `string`: The email address that the alert will be sent to.
    * frequency `string`: If the alert is of type stats_notification, this indicates how frequently the stats notifications will be sent. For example, "daily", "weekly", or "monthly".
    * id **required** `integer`: The ID of the alert.
    * percentage `integer`: If the alert is of type usage_limit, this indicates the percentage of email usage that must be reached before the alert will be sent.
    * type **required** `string` (values: usage_limit, stats_notification): The type of alert.
    * updated_at `integer`: A Unix timestamp indicating when the alert was last modified.

### POST_alerts
**This endpoint allows you to create a new alert.**

Alerts allow you to specify an email address to receive notifications regarding your email usage or statistics. There are two types of alerts that can be created with this endpoint:

* `usage_limit` allows you to set the threshold at which an alert will be sent.
* `stats_notification` allows you to set how frequently you would like to receive email statistics reports. For example, "daily", "weekly", or "monthly".

For more information about alerts, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/alerts.html).


```js
sendgrid.POST_alerts({}, context)
```

#### Input
* input `object`
  * Authorization `string`
  * on-behalf-of `string`
  * body `object`
    * email_to **required** `string`: The email address the alert will be sent to.
    * frequency `string`: Required for stats_notification. How frequently the alert will be sent.
    * percentage `integer`: Required for usage_alert. When this usage threshold is reached, the alert will be sent.
    * type **required** `string` (values: stats_notification, usage_limit): The type of alert you want to create. Can be either usage_limit or stats_notification.

#### Output
* output `object`
  * created_at **required** `integer`: A Unix timestamp indicating when the alert was created.
  * email_to **required** `string`: The email address that the alert will be sent to.
  * frequency `string`: If the alert is of type stats_notification, this indicates how frequently the stats notifications will be sent. For example, "daily", "weekly", or "monthly".
  * id **required** `integer`: The ID of the alert.
  * percentage `integer`: "If the alert is of type usage_limit, this indicates the percentage of email usage that must be reached before the alert will be sent.
  * type **required** `string`: The type of alert.
  * updated_at **required** `integer`: A Unix timestamp indicating when the alert was last modified.

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

#### Input
* input `object`
  * on-behalf-of `string`
  * alert_id **required** `integer`: The ID of the alert you would like to retrieve.

#### Output
* output `object`

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

#### Input
* input `object`
  * Authorization `string`
  * on-behalf-of `string`
  * alert_id **required** `integer`: The ID of the alert you would like to retrieve.

#### Output
* output `object`
  * created_at **required** `integer`: A Unix timestamp indicating when the alert was created.
  * email_to **required** `string`: The email address that the alert will be sent to.
  * frequency `string`: If the alert is of type stats_notification, this indicates how frequently the stats notifications will be sent. For example: "daily", "weekly", or "monthly".
  * id **required** `integer`: The ID of the alert.
  * percentage `integer`: If the alert is of type usage_limit, this indicates the percentage of email usage that must be reached before the alert will be sent.
  * type **required** `string` (values: usage_alert, stats_notification): The type of alert.
  * updated_at **required** `integer`: A Unix timestamp indicating when the alert was last modified.

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

#### Input
* input `object`
  * on-behalf-of `string`
  * body `object`
    * email_to `string`: The new email address you want your alert to be sent to.
    * frequency `string`: The new frequency at which to send the stats_notification alert.
    * percentage `integer`: The new percentage threshold at which the usage_limit alert will be sent.
  * alert_id **required** `integer`: The ID of the alert you would like to retrieve.

#### Output
* output `object`
  * created_at **required** `integer`: A Unix timestamp indicating when the alert was created.
  * email_to **required** `string`: The email address that the alert will be sent to.
  * frequency `string`: If the alert is of type stats_notification, this indicates how frequently the stats notifications will be sent. For example: "daily", "weekly", or "monthly".
  * id **required** `integer`: The ID of the alert.
  * percentage `integer`: If the alert is of type usage_limit, this indicates the percentage of email usage that must be reached before the alert will be sent.
  * type **required** `string` (values: usage_alert, stats_notification): The type of alert.
  * updated_at **required** `integer`: A Unix timestamp indicating when the alert was last modified.

### GET_api_keys
**This endpoint allows you to retrieve all API Keys that belong to the authenticated user.**

The API Keys feature allows customers to be able to generate an API Key credential which can be used for authentication with the SendGrid v3 Web API or the [Mail API Endpoint](https://sendgrid.com/docs/API_Reference/Web_API/mail.html).


```js
sendgrid.GET_api_keys({}, context)
```

#### Input
* input `object`
  * limit `integer`
  * on-behalf-of `string`

#### Output
* output `object`
  * result `array`
    * items [api_key_name_id](#api_key_name_id)

### api_keys.post
**This endpoint allows you to create a new random API Key for the user.**

A JSON request body containing a "name" property is required. If number of maximum keys is reached, HTTP 403 will be returned.

There is a limit of 100 API Keys on your account.

The API Keys feature allows customers to be able to generate an API Key credential which can be used for authentication with the SendGrid v3 Web API or the [Mail API Endpoint](https://sendgrid.com/docs/API_Reference/Web_API/mail.html).

See the [API Key Permissions List](https://sendgrid.com/docs/API_Reference/Web_API_v3/API_Keys/api_key_permissions_list.html) for a list of all available scopes.


```js
sendgrid.api_keys.post({}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`
  * body `object`
    * name **required** `string`: The name you will use to describe this API Key.
    * sample `string`
    * scopes `array`: The individual permissions that you are giving to this API Key.
      * items `string`

#### Output
* output `object`
  * api_key `string`
  * api_key_id `string`
  * name `string`
  * scopes `array`
    * items `string`

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

#### Input
* input `object`
  * on-behalf-of `string`
  * api_key_id **required** `string`: The ID of the API Key for which you are requesting information.

#### Output
*Output schema unknown*

### api_keys.api_key_id.get
**This endpoint allows you to retrieve a single api key.**

If the API Key ID does not exist an HTTP 404 will be returned.


```js
sendgrid.api_keys.api_key_id.get({
  "api_key_id": ""
}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`
  * api_key_id **required** `string`: The ID of the API Key for which you are requesting information.

#### Output
* output `object`
  * result `array`
    * items [api_key_name_id_scopes](#api_key_name_id_scopes)

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

#### Input
* input `object`
  * on-behalf-of `string`
  * body `object`
    * name `string`: The new name of the API Key.
  * api_key_id **required** `string`: The ID of the API Key for which you are requesting information.

#### Output
* output [api_key_name_id](#api_key_name_id)

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

#### Input
* input `object`
  * on-behalf-of `string`
  * body `object`
    * name `string`
    * scopes `array`
      * items `string`
  * api_key_id **required** `string`: The ID of the API Key for which you are requesting information.

#### Output
* output [api_key_name_id_scopes](#api_key_name_id_scopes)

### asm.groups.get
**This endpoint allows you to retrieve information about multiple suppression groups.**

This endpoint will return information for each group ID that you include in your request. To add a group ID to your request, simply append `&id=` followed by the group ID.

Suppressions are a list of email addresses that will not receive content sent under a given [group](https://sendgrid.com/docs/API_Reference/Web_API_v3/Suppression_Management/groups.html).

Suppression groups, or [unsubscribe groups](https://sendgrid.com/docs/API_Reference/Web_API_v3/Suppression_Management/groups.html), allow you to label a category of content that you regularly send. This gives your recipients the ability to opt out of a specific set of your email. For example, you might define a group for your transactional email, and one for your marketing email so that your users can continue recieving your transactional email witout having to receive your marketing content.


```js
sendgrid.asm.groups.get({}, context)
```

#### Input
* input `object`
  * id `integer`: The ID of a suppression group that you want to retrieve information for.
  * on-behalf-of `string`

#### Output
* output `array`
  * items [suppression_group](#suppression_group)

### asm.groups.post
**This endpoint allows you to create a new suppression group.**

Suppression groups, or unsubscribe groups, are specific types or categories of email that you would like your recipients to be able to unsubscribe from. For example: Daily Newsletters, Invoices, System Alerts.

The **name** and **description** of the unsubscribe group will be visible by recipients when they are managing their subscriptions.

Each user can create up to 25 different suppression groups.


```js
sendgrid.asm.groups.post({}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`
  * body `object`
    * description **required** `string`: A brief description of your new suppression group.
    * is_default `boolean`: Indicates if you would like this to be your default suppression group.
    * name **required** `string`: The name that you would like to use for your new suppression group.

#### Output
* output `object`
  * description **required** `string`: A brief description of the suppression group.
  * id **required** `integer`: The ID of the suppression group.
  * is_default **required** `boolean`: Indicates if this is the default suppression group.
  * name **required** `string`: The name of the suppression group.

### asm.groups.group_id.delete
**This endpoint allows you to delete a suppression group.**

You can only delete groups that have not been attached to sent mail in the last 60 days. If a recipient uses the "one-click unsubscribe" option on an email associated with a deleted group, that recipient will be added to the global suppression list.

Suppression groups, or unsubscribe groups, are specific types or categories of email that you would like your recipients to be able to unsubscribe from. For example: Daily Newsletters, Invoices, System Alerts.

The **name** and **description** of the unsubscribe group will be visible by recipients when they are managing their subscriptions.

Each user can create up to 25 different suppression groups.


```js
sendgrid.asm.groups.group_id.delete({
  "group_id": ""
}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`
  * group_id **required** `string`: The ID of the suppression group you would like to retrieve.

#### Output
* output `object`

### asm.groups.group_id.get
**This endpoint allows you to retrieve a single suppression group.**

Suppression groups, or unsubscribe groups, are specific types or categories of email that you would like your recipients to be able to unsubscribe from. For example: Daily Newsletters, Invoices, System Alerts.

The **name** and **description** of the unsubscribe group will be visible by recipients when they are managing their subscriptions.

Each user can create up to 25 different suppression groups.


```js
sendgrid.asm.groups.group_id.get({
  "group_id": ""
}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`
  * group_id **required** `string`: The ID of the suppression group you would like to retrieve.

#### Output
* output `object`
  * description `string`: The description of the suppression group.
  * id `integer`: The ID of the suppression group.
  * is_default `boolean`: Indicates if this is the default suppression group.
  * name `string`: The name of the suppression group.
  * unsubscribes `integer`: The number of unsubscribes, or suppressions, in this group.

### asm.groups.group_id.patch
**This endpoint allows you to update or change a suppression group.**

Suppression groups, or unsubscribe groups, are specific types or categories of email that you would like your recipients to be able to unsubscribe from. For example: Daily Newsletters, Invoices, System Alerts.

The **name** and **description** of the unsubscribe group will be visible by recipients when they are managing their subscriptions.

Each user can create up to 25 different suppression groups.


```js
sendgrid.asm.groups.group_id.patch({
  "Authorization": "",
  "group_id": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`
  * on-behalf-of `string`
  * body `object`
    * description `string`: The description of the suppression group.
    * id `integer`: The id of the suppression group.
    * is_default `boolean`: Indicates if the suppression group is set as the default group.
    * name **required** `string`: The name of the suppression group. Each group created by a user must have a unique name.
  * group_id **required** `string`: The ID of the suppression group you would like to retrieve.

#### Output
* output [suppression_group](#suppression_group)

### asm.groups.group_id.suppressions.get
**This endpoint allows you to retrieve all suppressed email addresses belonging to the given group.**

Suppressions are recipient email addresses that are added to [unsubscribe groups](https://sendgrid.com/docs/API_Reference/Web_API_v3/Suppression_Management/groups.html). Once a recipient's address is on the suppressions list for an unsubscribe group, they will not receive any emails that are tagged with that unsubscribe group.


```js
sendgrid.asm.groups.group_id.suppressions.get({
  "group_id": ""
}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`
  * group_id **required** `string`: The id of the unsubscribe group that you are adding suppressions to.

#### Output
* output `array`: The list of email addresses belonging to the given suppression group.
  * items `string`

### asm.groups.group_id.suppressions.post
**This endpoint allows you to add email addresses to an unsubscribe group.**

If you attempt to add suppressions to a group that has been deleted or does not exist, the suppressions will be added to the global suppressions list.

Suppressions are recipient email addresses that are added to [unsubscribe groups](https://sendgrid.com/docs/API_Reference/Web_API_v3/Suppression_Management/groups.html). Once a recipient's address is on the suppressions list for an unsubscribe group, they will not receive any emails that are tagged with that unsubscribe group.


```js
sendgrid.asm.groups.group_id.suppressions.post({
  "group_id": ""
}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`
  * body `object`
    * recipient_emails **required** `array`: The email address that you want to add to the unsubscribe group.
      * items `string`
  * group_id **required** `string`: The id of the unsubscribe group that you are adding suppressions to.

#### Output
* output `object`
  * recipient_emails **required** `array`: The email address that were added to the suppressions list.
    * items `string`

### asm.groups.group_id.suppressions.search.post
**This endpoint allows you to search a suppression group for multiple suppressions.**

When given a list of email addresses and a group ID, this endpoint will return only the email addresses that have been unsubscribed from the given group.

Suppressions are a list of email addresses that will not receive content sent under a given [group](https://sendgrid.com/docs/API_Reference/Web_API_v3/Suppression_Management/groups.html).


```js
sendgrid.asm.groups.group_id.suppressions.search.post({
  "group_id": ""
}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`
  * body `object`
    * recipient_emails **required** `array`: The list of email address that you want to search the suppression group for.
      * items `string`
  * group_id **required** `string`: The ID of the suppression group that you would like to search.

#### Output
* output `object`
  * recipient_emails **required** `array`: The email address from your search that do exist in the suppression group.
    * items `string`

### asm.groups.group_id.suppressions.email.delete
**This endpoint allows you to remove a suppressed email address from the given suppression group.**

Suppressions are recipient email addresses that are added to [unsubscribe groups](https://sendgrid.com/docs/API_Reference/Web_API_v3/Suppression_Management/groups.html). Once a recipient's address is on the suppressions list for an unsubscribe group, they will not receive any emails that are tagged with that unsubscribe group.


```js
sendgrid.asm.groups.group_id.suppressions.email.delete({
  "group_id": "",
  "email": ""
}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`
  * group_id **required** `string`: The id of the suppression group that you are removing an email address from.
  * email **required** `string`: The email address that you want to remove from the suppression group.

#### Output
*Output schema unknown*

### asm.suppressions.get
**This endpoint allows you to retrieve a list of all suppressions.**

Suppressions are a list of email addresses that will not receive content sent under a given [group](https://sendgrid.com/docs/API_Reference/Web_API_v3/Suppression_Management/groups.html).


```js
sendgrid.asm.suppressions.get({}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`

#### Output
* output `array`
  * items `object`
    * created_at **required** `integer`: A UNIX timestamp indicating when the suppression was created.
    * email **required** `string`: The email address that was suppressed.
    * group_id **required** `integer`: The id of the suppression group that this email address belongs to.
    * group_name **required** `string`: The name of the suppression group that this email address belongs to.

### asm.suppressions.global.post
**This endpoint allows you to add one or more email addresses to the global suppressions group.**

A global suppression (or global unsubscribe) is an email address of a recipient who does not want to receive any of your messages. A globally suppressed recipient will be removed from any email you send. For more information, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Suppressions/global_unsubscribes.html).


```js
sendgrid.asm.suppressions.global.post({}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`
  * body `object`
    * recipient_emails `array`: The email address, or addresses, that you want to add to the global suppressions group.
      * items `string`

#### Output
* output `object`
  * recipient_emails **required** `array`: The email addresses that are globally suppressed
    * items `string`

### asm.suppressions.global.email.delete
**This endpoint allows you to remove an email address from the global suppressions group.**

A global suppression (or global unsubscribe) is an email address of a recipient who does not want to receive any of your messages. A globally suppressed recipient will be removed from any email you send. For more information, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Suppressions/global_unsubscribes.html).


```js
sendgrid.asm.suppressions.global.email.delete({
  "email": ""
}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`
  * email **required** `string`: The email address of the global suppression you want to retrieve. Or, if you want to check if an email address is on the global suppressions list, enter that email address here.

#### Output
* output `object`

### asm.suppressions.global.email.get
**This endpoint allows you to retrieve a global suppression. You can also use this endpoint to confirm if an email address is already globally suppresed.**

If the email address you include in the URL path parameter `{email}` is alreayd globally suppressed, the response will include that email address. If the address you enter for `{email}` is not globally suppressed, an empty JSON object `{}` will be returned.

A global suppression (or global unsubscribe) is an email address of a recipient who does not want to receive any of your messages. A globally suppressed recipient will be removed from any email you send. For more information, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Suppressions/global_unsubscribes.html).


```js
sendgrid.asm.suppressions.global.email.get({
  "email": ""
}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`
  * email **required** `string`: The email address of the global suppression you want to retrieve. Or, if you want to check if an email address is on the global suppressions list, enter that email address here.

#### Output
* output `object`
  * recipient_email **required** `string`: The email address that is globally suppressed. This will be an empty object if the email address you included in your call is not globally suppressed.

### asm.suppressions.email.get
**This endpoint returns the list of all groups that the given email address has been unsubscribed from.**

Suppressions are a list of email addresses that will not receive content sent under a given [group](https://sendgrid.com/docs/API_Reference/Web_API_v3/Suppression_Management/groups.html).


```js
sendgrid.asm.suppressions.email.get({
  "email": ""
}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`
  * email **required** `string`: The email address that you want to search suppression groups for.

#### Output
* output `object`
  * suppressions **required** `array`: The array of suppression groups.
    * items `object`
      * description **required** `string`: The description of the suppression group.
      * id **required** `integer`: The id of the suppression group.
      * is_default **required** `boolean`: Indicates if the suppression group  is set as the default.
      * name **required** `string`: The name of the suppression group.
      * suppressed **required** `boolean`: Indicates if the given email address is suppressed for this group.

### browsers.stats.get
**This endpoint allows you to retrieve your email statistics segmented by browser type.**

**We only store up to 7 days of email activity in our database.** By default, 500 items will be returned per request via the Advanced Stats API endpoints.

Advanced Stats provide a more in-depth view of your email statistics and the actions taken by your recipients. You can segment these statistics by geographic location, device type, client type, browser, and mailbox provider. For more information about statistics, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Statistics/index.html).


```js
sendgrid.browsers.stats.get({
  "start_date": ""
}, context)
```

#### Input
* input `object`
  * start_date **required** `string`: The starting date of the statistics to retrieve. Must follow format YYYY-MM-DD.
  * end_date `string`: The end date of the statistics to retrieve. Defaults to today.
  * limit `string`: The number of results to include on each page.
  * offset `string`: The number of results to exclude.
  * aggregated_by `string` (values: day, week, month): How to group the stats. Must be either "day", "week", or "month".
  * browsers `string`: The browsers to get statistics for. You can include up to 10 different browsers by including this parameter multiple times.
  * on-behalf-of `string`

#### Output
* output `array`
  * items [advanced_stats_clicks](#advanced_stats_clicks)

### GET_campaigns
**This endpoint allows you to retrieve a list of all of your campaigns.**

Returns campaigns in reverse order they were created (newest first).

Returns an empty array if no campaigns exist.

For more information:

* [User Guide > Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html)


```js
sendgrid.GET_campaigns({}, context)
```

#### Input
* input `object`
  * limit `integer`: The number of results you would like to receive at a time.
  * offset `integer`: The index of the first campaign to return, where 0 is the first campaign.

#### Output
* output `object`
  * result `array`
    * items `object`
      * categories `array`
        * items `string`
      * custom_unsubscribe_url `string`
      * html_content `string`
      * id `integer`
      * ip_pool `string`
      * list_ids `array`
        * items `integer`
      * plain_content `string`
      * segment_ids `array`
        * items `integer`
      * sender_id `integer`
      * status `string`
      * subject `string`
      * suppression_group_id `integer`
      * title `string`

### POST_campaigns
**This endpoint allows you to create a campaign.**

Our Marketing Campaigns API lets you create, manage, send, and schedule campaigns.

Note: In order to send or schedule the campaign, you will be required to provide a subject, sender ID, content (we suggest both html and plain text), and at least one list or segment ID. This information is not required when you create a campaign.

For more information:

* [User Guide > Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html)


```js
sendgrid.POST_campaigns({}, context)
```

#### Input
* input `object`
  * body [campaign_request](#campaign_request)

#### Output
* output [campaign_response](#campaign_response)

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

#### Input
* input `object`
  * campaign_id **required** `integer`: The id of the campaign you would like to retrieve.

#### Output
*Output schema unknown*

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

#### Input
* input `object`
  * campaign_id **required** `integer`: The id of the campaign you would like to retrieve.

#### Output
* output `object`
  * categories `array`
    * items `string`
  * custom_unsubscribe_url `string`
  * html_content `string`
  * id `integer`
  * ip_pool `string`
  * list_ids `array`
    * items `integer`
  * plain_content `string`
  * segment_ids `array`
    * items `integer`
  * sender_id `integer`
  * status `string`
  * subject `string`
  * suppression_group_id `integer`
  * title `string`

### campaigns.campaign_id.patch
Update a campaign. This is especially useful if you only set up the campaign using POST /campaigns, but didn't set many of the parameters.

For more information:

* [User Guide > Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html)


```js
sendgrid.campaigns.campaign_id.patch({
  "campaign_id": 0
}, context)
```

#### Input
* input `object`
  * body `object`
    * categories **required** `array`: The categories you want to tag on this campaign.
      * items `string`
    * html_content **required** `string`: The HTML content of this campaign.
    * plain_content **required** `string`: The plain content of this campaign.
    * subject **required** `string`: The subject line for your campaign.
    * title **required** `string`: The title of the campaign.
  * campaign_id **required** `integer`: The id of the campaign you would like to retrieve.

#### Output
* output [campaign_response](#campaign_response)

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

#### Input
* input `object`
  * campaign_id **required** `integer`

#### Output
*Output schema unknown*

### campaigns.campaign_id.schedules.get
**This endpoint allows you to retrieve the date and time that the given campaign has been scheduled to be sent.**

For more information:

* [User Guide > Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html)


```js
sendgrid.campaigns.campaign_id.schedules.get({
  "campaign_id": 0
}, context)
```

#### Input
* input `object`
  * campaign_id **required** `integer`

#### Output
* output `object`
  * send_at **required** `integer`

### campaigns.campaign_id.schedules.patch
**This endpoint allows to you change the scheduled time and date for a campaign to be sent.**

For more information:

* [User Guide > Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html)


```js
sendgrid.campaigns.campaign_id.schedules.patch({
  "campaign_id": 0
}, context)
```

#### Input
* input `object`
  * body `object`
    * send_at **required** `integer`
  * campaign_id **required** `integer`

#### Output
* output `object`
  * id **required** `integer`: The campaign ID
  * send_at **required** `integer`: The unix timestamp to send the campaign.
  * status **required** `string`: The status of the schedule.

### campaigns.campaign_id.schedules.post
**This endpoint allows you to schedule a specific date and time for your campaign to be sent.**

For more information:

* [User Guide > Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html)


```js
sendgrid.campaigns.campaign_id.schedules.post({
  "campaign_id": 0
}, context)
```

#### Input
* input `object`
  * body `object`
    * send_at **required** `integer`: The unix timestamp for the date and time you would like your campaign to be sent out.
  * campaign_id **required** `integer`

#### Output
* output `object`
  * id **required** `integer`: The campaign ID.
  * send_at **required** `integer`: The date time you scheduled your campaign to be sent.
  * status **required** `string` (values: Scheduled): The status of your campaign.

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

#### Input
* input `object`
  * campaign_id **required** `integer`

#### Output
* output `object`
  * id **required** `integer`
  * status **required** `string`

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

#### Input
* input `object`
  * body `object`
    * to **required** `string`: The email address that should receive the test campaign.
  * campaign_id **required** `integer`

#### Output
* output `object`
  * to **required** `string`

### GET_categories
**This endpoint allows you to retrieve a list of all of your categories.**

Categories can help organize your email analytics by enabling you to “tag” emails by type or broad topic. You can define your own custom categories. For more information, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Statistics/categories.html).


```js
sendgrid.GET_categories({}, context)
```

#### Input
* input `object`
  * limit `integer`: The number of categories to display per page.
  * category `string`: Allows you to perform a prefix search on this particular category.
  * offset `integer`: The point in the list that you would like to begin displaying results.
  * on-behalf-of `string`

#### Output
* output `array`
  * items `object`
    * category **required** `string`: A category used to group emails by broad topic.

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

#### Input
* input `object`
  * start_date **required** `string`: The starting date of the statistics to retrieve. Must follow format YYYY-MM-DD
  * end_date `string`: The end date of the statistics to retrieve. Defaults to today. Must follow format YYYY-MM-DD.
  * categories **required** `string`: The individual categories that you want to retrieve statistics for. You may include up to 10 different categories.
  * limit `integer`: The number of results to include.
  * offset `integer`: The number of results to skip.
  * aggregated_by `string` (values: day, week, month): How to group the statistics. Must be either "day", "week", or "month".
  * on-behalf-of `string`

#### Output
* output `array`
  * items [category_stats](#category_stats)

### categories.stats.sums.get
**This endpoint allows you to retrieve the total sum of each email statistic for every category over the given date range.**

If you do not define any query parameters, this endpoint will return a sum for each category in groups of 10.

Categories allow you to group your emails together according to broad topics that you define. For more information, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Statistics/categories.html).


```js
sendgrid.categories.stats.sums.get({
  "start_date": ""
}, context)
```

#### Input
* input `object`
  * sort_by_metric `string`: The metric that you want to sort by.  Must be a single metric.
  * sort_by_direction `string` (values: desc, asc): The direction you want to sort.
  * start_date **required** `string`: The starting date of the statistics to retrieve. Must follow format YYYY-MM-DD.
  * end_date `string`: The end date of the statistics to retrieve. Defaults to today. Must follow format YYYY-MM-DD.
  * limit `integer`: Limits the number of results returned.
  * offset `integer`: The point in the list to begin retrieving results.
  * aggregated_by `string` (values: day, week, month): How to group the statistics. Must be either "day", "week", or "month".
  * on-behalf-of `string`

#### Output
* output [category_stats](#category_stats)

### clients.stats.get
**This endpoint allows you to retrieve your email statistics segmented by client type.**

**We only store up to 7 days of email activity in our database.** By default, 500 items will be returned per request via the Advanced Stats API endpoints.

Advanced Stats provide a more in-depth view of your email statistics and the actions taken by your recipients. You can segment these statistics by geographic location, device type, client type, browser, and mailbox provider. For more information about statistics, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Statistics/index.html).


```js
sendgrid.clients.stats.get({
  "start_date": ""
}, context)
```

#### Input
* input `object`
  * start_date **required** `string`: The starting date of the statistics to retrieve. Must follow format YYYY-MM-DD.
  * end_date `string`: The end date of the statistics to retrieve. Defaults to today. Must follow format YYYY-MM-DD.
  * aggregated_by `string` (values: day, week, month): How to group the statistics. Must be either "day", "week", or "month".
  * on-behalf-of `string`

#### Output
* output `array`
  * items [advanced_stats_opens](#advanced_stats_opens)

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

#### Input
* input `object`
  * start_date **required** `string`: The starting date of the statistics to retrieve. Must follow format YYYY-MM-DD.
  * end_date `string`: The end date of the statistics to retrieve. Defaults to today. Must follow format YYYY-MM-DD.
  * aggregated_by `string` (values: day, week, month): How to group the statistics. Must be either "day", "week", or "month".
  * on-behalf-of `string`
  * client_type **required** `string` (values: phone, tablet, webmail, desktop): Specifies the type of client to retrieve stats for. Must be either "phone", "tablet", "webmail", or "desktop".

#### Output
* output `array`
  * items [advanced_stats_opens](#advanced_stats_opens)

### contactdb.custom_fields.get
**This endpoint allows you to retrieve all custom fields.** 

The contactdb is a database of your contacts for [SendGrid Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html).


```js
sendgrid.contactdb.custom_fields.get({}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`

#### Output
* output `object`
  * custom_fields **required** `array`
    * items [contactdb_custom_field_with_id](#contactdb_custom_field_with_id)

### contactdb.custom_fields.post
**This endpoint allows you to create a custom field.**

The contactdb is a database of your contacts for [SendGrid Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html).


```js
sendgrid.contactdb.custom_fields.post({}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`
  * body `object`
    * name `string`
    * type `string`

#### Output
* output `object`
  * id `integer`
  * name `string`
  * type `string`

### contactdb.custom_fields.custom_field_id.delete
**This endpoint allows you to delete a custom field by ID.**

The contactdb is a database of your contacts for [SendGrid Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html).


```js
sendgrid.contactdb.custom_fields.custom_field_id.delete({
  "custom_field_id": 0
}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`
  * custom_field_id **required** `integer`: The ID of the custom field that you want to retrieve.

#### Output
* output [global_ErrorResponse](#global_errorresponse)

### contactdb.custom_fields.custom_field_id.get
**This endpoint allows you to retrieve a custom field by ID.**

The contactdb is a database of your contacts for [SendGrid Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html).


```js
sendgrid.contactdb.custom_fields.custom_field_id.get({
  "custom_field_id": 0
}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`
  * custom_field_id **required** `integer`: The ID of the custom field that you want to retrieve.

#### Output
* output [contactdb_custom_field_with_id](#contactdb_custom_field_with_id)

### contactdb.lists.delete
**This endpoint allows you to delete multiple recipient lists.**

The Contacts API helps you manage your [Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html) recipients.


```js
sendgrid.contactdb.lists.delete({}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`
  * body `array`
    * items `integer`

#### Output
*Output schema unknown*

### contactdb.lists.get
**This endpoint allows you to retrieve all of your recipient lists. If you don't have any lists, an empty array will be returned.**

The Contacts API helps you manage your [Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html) recipients.


```js
sendgrid.contactdb.lists.get({}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`

#### Output
* output `object`
  * lists **required** `array`
    * items [contactdb_list](#contactdb_list)

### contactdb.lists.post
**This endpoint allows you to create a list for your recipients.**

The Contacts API helps you manage your [Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html) recipients.


```js
sendgrid.contactdb.lists.post({}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`
  * body `object`
    * name **required** `string`

#### Output
* output [contactdb_list](#contactdb_list)

### contactdb.lists.list_id.delete
**This endpoint allows you to delete a specific recipient list with the given ID.**

The Contacts API helps you manage your [Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html) recipients.


```js
sendgrid.contactdb.lists.list_id.delete({
  "list_id": ""
}, context)
```

#### Input
* input `object`
  * delete_contacts `boolean` (values: true, false): Adds the ability to delete all contacts on the list in addition to deleting the list.
  * on-behalf-of `string`
  * list_id **required** `string`

#### Output
*Output schema unknown*

### contactdb.lists.list_id.get
This endpoint allows you to retrieve a single recipient list.

The Contacts API helps you manage your [Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html) recipients.


```js
sendgrid.contactdb.lists.list_id.get({
  "list_id": ""
}, context)
```

#### Input
* input `object`
  * list_id_query `integer`: The ID of the list to retrieve.
  * on-behalf-of `string`
  * list_id **required** `string`

#### Output
* output [contactdb_list](#contactdb_list)

### contactdb.lists.list_id.patch
**This endpoint allows you to update the name of one of your recipient lists.**


The Contacts API helps you manage your [Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html) recipients.


```js
sendgrid.contactdb.lists.list_id.patch({
  "list_id": 0,
  "list_id_path": ""
}, context)
```

#### Input
* input `object`
  * list_id **required** `integer`: The ID of the list you are updating.
  * on-behalf-of `string`
  * body `object`
    * name **required** `string`: The new name for your list. 
  * list_id_path **required** `string`

#### Output
* output `object`
  * id `integer`: The ID of the list
  * name `string`: The new name for the list
  * recipient_count `integer`: The number of recipients on the list

### contactdb.lists.list_id.recipients.get
**This endpoint allows you to retrieve all recipients on the list with the given ID.** 

The Contacts API helps you manage your [Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html) recipients.


```js
sendgrid.contactdb.lists.list_id.recipients.get({
  "list_id": 0,
  "list_id_path": 0
}, context)
```

#### Input
* input `object`
  * page `integer`: Page index of first recipient to return (must be a positive integer)
  * page_size `integer`: Number of recipients to return at a time (must be a positive integer between 1 and 1000)
  * list_id **required** `integer`: The ID of the list whose recipients you are requesting.
  * on-behalf-of `string`
  * list_id_path **required** `integer`: The id of the list of recipients you want to retrieve.

#### Output
* output `object`
  * recipients `array`
    * items [contactdb_recipient](#contactdb_recipient)

### contactdb.lists.list_id.recipients.post
**This endpoint allows you to add multiple recipients to a list.**

Adds existing recipients to a list, passing in the recipient IDs to add. Recipient IDs should be passed exactly as they are returned from recipient endpoints.

The Contacts API helps you manage your [Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html) recipients.


```js
sendgrid.contactdb.lists.list_id.recipients.post({
  "list_id": 0
}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`
  * body `array`
    * items `string`
  * list_id **required** `integer`: The id of the list of recipients you want to retrieve.

#### Output
*Output schema unknown*

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

#### Input
* input `object`
  * list_id **required** `integer`: The ID of the list you are taking this recipient away from.
  * recipient_id **required** `integer`: The ID of the recipient to take off the list.
  * on-behalf-of `string`
  * list_id_path **required** `integer`: The ID of the list that you want to add the recipient to.
  * recipient_id_path **required** `string`: The ID of the recipient you are adding to the list.

#### Output
*Output schema unknown*

### contactdb.lists.list_id.recipients.recipient_id.post
**This endpoint allows you to add a single recipient to a list.**

The Contacts API helps you manage your [Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html) recipients.


```js
sendgrid.contactdb.lists.list_id.recipients.recipient_id.post({
  "list_id": 0,
  "recipient_id": ""
}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`
  * list_id **required** `integer`: The ID of the list that you want to add the recipient to.
  * recipient_id **required** `string`: The ID of the recipient you are adding to the list.

#### Output
*Output schema unknown*

### contactdb.recipients.delete
**This endpoint allows you to deletes one or more recipients.**

The body of an API call to this endpoint must include an array of recipient IDs of the recipients you want to delete.

The contactdb is a database of your contacts for [SendGrid Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html).


```js
sendgrid.contactdb.recipients.delete({}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`
  * body `array`
    * items `string`

#### Output
* output `object`

### contactdb.recipients.get
**This endpoint allows you to retrieve all of your Marketing Campaigns recipients.**

Batch deletion of a page makes it possible to receive an empty page of recipients before reaching the end of
the list of recipients. To avoid this issue; iterate over pages until a 404 is retrieved.

The Contacts API helps you manage your [Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html) recipients.


```js
sendgrid.contactdb.recipients.get({}, context)
```

#### Input
* input `object`
  * page `integer`: Page index of first recipients to return (must be a positive integer)
  * page_size `integer`: Number of recipients to return at a time (must be a positive integer between 1 and 1000)
  * on-behalf-of `string`

#### Output
* output `object`
  * recipients **required** `array`
    * items `object`

### contactdb.recipients.patch
**This endpoint allows you to update one or more recipients.**

The body of an API call to this endpoint must include an array of one or more recipient objects.

It is of note that you can add custom field data as parameters on recipient objects. We have provided an example using some of the default custom fields SendGrid provides.

The contactdb is a database of your contacts for [SendGrid Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html).


```js
sendgrid.contactdb.recipients.patch({}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`
  * body `array`
    * items `object`
      * email **required** `string`
      * first_name `string`: The first name of the recipient. This is one of the default custom fields.
      * last_name `string`: The last name of the recipient. This is one of the default custom fields.

#### Output
* output [contactdb_recipient_response](#contactdb_recipient_response)

### contactdb.recipients.post
**This endpoint allows you to add a Marketing Campaigns recipient.**

You can add custom field data as a parameter on this endpoint. We have provided an example using some of the default custom fields SendGrid provides.

The Contacts API helps you manage your [Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html) recipients.


```js
sendgrid.contactdb.recipients.post({}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`
  * body `array`
    * items `object`
      * age `integer`
      * email **required** `string`: The email address of the recipient.
      * first_name `string`: The first name of the recipient.
      * last_name `string`: The last name of the recipient.

#### Output
* output [contactdb_recipient_response](#contactdb_recipient_response)

### contactdb.recipients.billable_count.get
**This endpoint allows you to retrieve the number of Marketing Campaigns recipients that you will be billed for.**

You are billed for marketing campaigns based on the highest number of recipients you have had in your account at one time. This endpoint will allow you to know the current billable count value.

The Contacts API helps you manage your [Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html) recipients.


```js
sendgrid.contactdb.recipients.billable_count.get({}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`

#### Output
* output [contactdb_recipient_count](#contactdb_recipient_count)

### contactdb.recipients.count.get
**This endpoint allows you to retrieve the total number of Marketing Campaigns recipients.**

The contactdb is a database of your contacts for [SendGrid Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html).


```js
sendgrid.contactdb.recipients.count.get({}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`

#### Output
* output [contactdb_recipient_count](#contactdb_recipient_count)

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

#### Input
* input `object`
  * {field_name} `string`
  * on-behalf-of `string`

#### Output
* output `object`
  * recipients `array`
    * items [contactdb_recipient](#contactdb_recipient)

### contactdb.recipients.recipient_id.delete
**This endpoint allows you to delete a single recipient with the given ID from your contact database.**

The Contacts API helps you manage your [Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html) recipients.


```js
sendgrid.contactdb.recipients.recipient_id.delete({
  "recipient_id": ""
}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`
  * recipient_id **required** `string`: The ID of the recipient that you want to retrieve.

#### Output
* output `object`

### contactdb.recipients.recipient_id.get
**This endpoint allows you to retrieve a single recipient by ID from your contact database.**

The Contacts API helps you manage your [Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html) recipients.


```js
sendgrid.contactdb.recipients.recipient_id.get({
  "recipient_id": ""
}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`
  * recipient_id **required** `string`: The ID of the recipient that you want to retrieve.

#### Output
* output [contactdb_recipient](#contactdb_recipient)

### contactdb.recipients.recipient_id.lists.get
**This endpoint allows you to retrieve the lists that a given recipient belongs to.**

Each recipient can be on many lists. This endpoint gives you all of the lists that any one recipient has been added to.

The Contacts API helps you manage your [Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html) recipients.


```js
sendgrid.contactdb.recipients.recipient_id.lists.get({
  "recipient_id": ""
}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`
  * recipient_id **required** `string`: The ID of the recipient for whom you are retrieving lists.

#### Output
* output `object`
  * lists `array`
    * items [contactdb_list](#contactdb_list)

### contactdb.reserved_fields.get
**This endpoint allows you to list all fields that are reserved and can't be used for custom field names.**

The contactdb is a database of your contacts for [SendGrid Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html).


```js
sendgrid.contactdb.reserved_fields.get({}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`

#### Output
* output `object`
  * reserved_fields **required** `array`: The reserved fields that are already set up within custom fields.
    * items [contactdb_custom_field](#contactdb_custom_field)

### contactdb.segments.get
**This endpoint allows you to retrieve all of your segments.**

The Contacts API helps you manage your [Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html) recipients.

For more information about segments in Marketing Campaigns, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/lists.html#-Create-a-Segment).


```js
sendgrid.contactdb.segments.get({}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`

#### Output
* output `object`
  * segments **required** `array`
    * items [contactdb_segments](#contactdb_segments)

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

#### Input
* input `object`
  * on-behalf-of `string`
  * body [contactdb_segments](#contactdb_segments)

#### Output
* output [contactdb_segments_with_id](#contactdb_segments_with_id)

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

#### Input
* input `object`
  * delete_contacts `boolean`: True to delete all contacts matching the segment in addition to deleting the segment
  * on-behalf-of `string`
  * segment_id **required** `string`

#### Output
*Output schema unknown*

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

#### Input
* input `object`
  * segment_id **required** `integer`: The ID of the segment you want to request.
  * on-behalf-of `string`
  * segment_id_path **required** `string`

#### Output
* output [contactdb_segments](#contactdb_segments)

### contactdb.segments.segment_id.patch
**This endpoint allows you to update a segment.**

The Contacts API helps you manage your [Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html) recipients.

For more information about segments in Marketing Campaigns, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/lists.html#-Create-a-Segment).


```js
sendgrid.contactdb.segments.segment_id.patch({
  "segment_id": ""
}, context)
```

#### Input
* input `object`
  * segment_id_query `string`: The ID of the segment you are updating.
  * on-behalf-of `string`
  * body `object`
    * conditions `array`: The conditions by which this segment should be created.
      * items [contactdb_segments_conditions](#contactdb_segments_conditions)
    * list_id `number`: The list ID you would like this segment to be built from.
    * name **required** `string`
  * segment_id **required** `string`

#### Output
* output [contactdb_segments](#contactdb_segments)

### contactdb.segments.segment_id.recipients.get
**This endpoint allows you to retrieve all of the recipients in a segment with the given ID.**

The Contacts API helps you manage your [Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html) recipients.

For more information about segments in Marketing Campaigns, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/lists.html#-Create-a-Segment).


```js
sendgrid.contactdb.segments.segment_id.recipients.get({
  "segment_id": 0
}, context)
```

#### Input
* input `object`
  * page `integer`
  * page_size `integer`
  * on-behalf-of `string`
  * segment_id **required** `integer`: The ID of the segment from which you want to retrieve recipients.

#### Output
* output `object`
  * recipients **required** `array`
    * items [contactdb_recipient](#contactdb_recipient)

### contactdb.status.get
Get Contact Upload Status


```js
sendgrid.contactdb.status.get({
  "Authorization": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`
  * on-behalf-of `string`

#### Output
* output `object`
  * status `array`
    * items `object`
      * id `string`
      * value `string`

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

#### Input
* input `object`
  * end_date `string`: The end date of the statistics to retrieve. Defaults to today.
  * limit `integer`: How many results to include on each page.
  * offset `integer`: How many results to exclude.
  * aggregated_by `string`: How to group the statistics. Must be either "day", "week", or "month".
  * start_date **required** `string`: The starting date of the statistics to retrieve.
  * on-behalf-of `string`

#### Output
* output `array`
  * items [advanced_stats_opens](#advanced_stats_opens)

### geo.stats.get
**This endpoint allows you to retrieve your email statistics segmented by country and state/province.**

**We only store up to 7 days of email activity in our database.** By default, 500 items will be returned per request via the Advanced Stats API endpoints.

Advanced Stats provide a more in-depth view of your email statistics and the actions taken by your recipients. You can segment these statistics by geographic location, device type, client type, browser, and mailbox provider. For more information about statistics, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Statistics/index.html).


```js
sendgrid.geo.stats.get({
  "start_date": "",
  "Authorization": ""
}, context)
```

#### Input
* input `object`
  * limit `integer`: How many results to include on each page.
  * offset `integer`: How many results to exclude.
  * aggregated_by `string` (values: day, week, month): How you would like the statistics to be grouped. Must be either "day", "week", or "month".
  * start_date **required** `string`: The starting date of the statistics to retrieve. Must be in format YYYY-MM-DD
  * end_date `string`: The end date of the statistics to retrieve. 
  * country `string` (values: US, CA): The country you would like to see statistics for. Currently only supported for US and CA.
  * Authorization **required** `string`
  * on-behalf-of `string`

#### Output
* output `array`
  * items [advanced_stats_country](#advanced_stats_country)

### GET_ips
**This endpoint allows you to retrieve a list of all assigned and unassigned IPs.**

Response includes warm up status, pools, assigned subusers, and whitelabel info. The start_date field corresponds to when warmup started for that IP.

A single IP address or a range of IP addresses may be dedicated to an account in order to send email for multiple domains. The reputation of this IP is based on the aggregate performance of all the senders who use it.


```js
sendgrid.GET_ips({}, context)
```

#### Input
* input `object`
  * ip `string`: The IP address to get
  * exclude_whitelabels `boolean`: Should we exclude whitelabels?
  * limit `integer`: The number of IPs you want returned at the same time.
  * offset `integer`: The offset for the number of IPs that you are requesting.
  * subuser `string`: The subuser you are requesting for.
  * sort_by_direction `string` (values: desc, asc): The direction to sort the results.

#### Output
* output `array`
  * items `object`
    * assigned_at **required** `integer`: The date that the IP address was assigned to the user.
    * ip **required** `string`: An IP address.
    * pools **required** `array`: The IP pools that this IP has been added to.
      * items `string`
    * rdns `string`: The reverse DNS record for this IP address.
    * start_date **required** `number`: The date that the IP address was entered into warmup.
    * subusers **required** `array`: The subusers that are able to send email from this IP.
      * items `string`
    * warmup **required** `boolean`: Indicates if this IP address is currently warming up.
    * whitelabeled **required** `boolean`: Indicates if this IP address has been whitelabeled.

### POST_ips
This endpoint is for adding a(n) IP Address(es) to your account.


```js
sendgrid.POST_ips({}, context)
```

#### Input
* input `object`
  * body `object`
    * count **required** `integer`: The amount of IPs to add to the account.
    * subusers `array`: Array of usernames to be assigned a send IP.
      * items `string`
    * warmup `boolean`: Whether or not to warmup the IPs being added.

#### Output
* output `object`
  * ips **required** `array`: List of IP objects.
    * items `object`
      * ip **required** `string`: IP added to account.
      * subusers **required** `array`: Array of usernames assigned a send IP.
        * items `string`
  * remaining_ips **required** `integer`: The number of IPs that can still be added to the user.
  * warmup **required** `boolean`: Whether or not the IPs are being warmed up.

### ips.assigned.get
**This endpoint allows you to retrieve only assigned IP addresses.**

A single IP address or a range of IP addresses may be dedicated to an account in order to send email for multiple domains. The reputation of this IP is based on the aggregate performance of all the senders who use it.


```js
sendgrid.ips.assigned.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items `object`
    * ip **required** `string`: The IP address.
    * pools **required** `array`: The IP pools that this IP address has been added to.
      * items `string`
    * start_date **required** `integer`: The start date that this IP address was entered into warmup.
    * warmup **required** `boolean`: Indicates if this IP address is currently warming up.

### ips.pools.get
**This endpoint allows you to retreive all of your IP pools.**

IP Pools allow you to group your dedicated SendGrid IP addresses together. For example, you could create separate pools for your transactional and marketing email. When sending marketing emails, specify that you want to use the marketing IP pool. This allows you to maintain separate reputations for your different email traffic.

IP pools can only be used with whitelabeled IP addresses.

If an IP pool is NOT specified for an email, it will use any IP available, including ones in pools.


```js
sendgrid.ips.pools.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [ip_pool](#ip_pool)

### ips.pools.post
**This endpoint allows you to create an IP pool.**

**Each user can create up to 10 different IP pools.**

IP Pools allow you to group your dedicated SendGrid IP addresses together. For example, you could create separate pools for your transactional and marketing email. When sending marketing emails, specify that you want to use the marketing IP pool. This allows you to maintain separate reputations for your different email traffic.

IP pools can only be used with whitelabeled IP addresses.

If an IP pool is NOT specified for an email, it will use any IP available, including ones in pools.


```js
sendgrid.ips.pools.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * name **required** `string`: The name of your new IP pool.

#### Output
* output [ip_pool](#ip_pool)

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

#### Input
* input `object`
  * pool_name **required** `string`: The name of the IP pool that you want to retrieve the IP addresses from.

#### Output
* output `object`

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

#### Input
* input `object`
  * pool_name **required** `string`: The name of the IP pool that you want to retrieve the IP addresses from.

#### Output
* output `object`
  * ips `array`: The list of IP addresses that belong to this IP pool.
    * items `string`
  * pool_name **required** `string`: The name of the IP pool.

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

#### Input
* input `object`
  * body `object`
    * name `string`: The new name for your IP pool.
  * pool_name **required** `string`: The name of the IP pool that you want to retrieve the IP addresses from.

#### Output
* output [ip_pool](#ip_pool)

### ips.pools.pool_name.ips.post
**This endpoint allows you to add an IP address to an IP pool.**

You can add the same IP address to multiple pools. It may take up to 60 seconds for your IP address to be added to a pool after your request is made.

A single IP address or a range of IP addresses may be dedicated to an account in order to send email for multiple domains. The reputation of this IP is based on the aggregate performance of all the senders who use it.


```js
sendgrid.ips.pools.pool_name.ips.post({
  "pool_name": ""
}, context)
```

#### Input
* input `object`
  * body `object`
    * ip `string`: The IP address that you want to add to an IP pool.
  * pool_name **required** `string`: The name of the IP pool that you want to add an IP address to.

#### Output
* output `object`
  * ip **required** `string`: The IP address.
  * pools **required** `array`: The list of IP pools that this IP address has been added to.
    * items `string`
  * start_date **required** `integer`: A unix timestamp indicating when the warmup process began for the IP address.
  * warmup **required** `boolean`: Indicates if the IP address is in warmup.

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

#### Input
* input `object`
  * pool_name **required** `string`: The name of the IP pool that you are removing the IP address from.
  * ip **required** `string`: The IP address that you are removing.

#### Output
* output `object`

### ips.remaining.get
This endpoint gets amount of IP Addresses that can still be created during a given period and the price of those IPs.


```js
sendgrid.ips.remaining.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * results **required** `array`
    * items `object`
      * period **required** `string`: The length of time until user can add more IPs.
      * price_per_ip **required** `number`: The current cost to add an IP.
      * remaining **required** `integer`: The number of IPs that can still be added to the user.

### ips.warmup.get
**This endpoint allows you to retrieve all of your IP addresses that are currently warming up.**

SendGrid can automatically warm up dedicated IP addresses by limiting the amount of mail that can be sent through them per hour, with the limit determined by how long the IP address has been in warmup. See the [warmup schedule](https://sendgrid.com/docs/API_Reference/Web_API_v3/IP_Management/ip_warmup_schedule.html) for more details on how SendGrid limits your email traffic for IPs in warmup.

For more general information about warming up IPs, please see our [Classroom](https://sendgrid.com/docs/Classroom/Deliver/Delivery_Introduction/warming_up_ips.html).


```js
sendgrid.ips.warmup.get({}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`

#### Output
* output [ip_warmup_response](#ip_warmup_response)

### ips.warmup.post
**This endpoint allows you to enter an IP address into warmup mode.**

SendGrid can automatically warm up dedicated IP addresses by limiting the amount of mail that can be sent through them per hour, with the limit determined by how long the IP address has been in warmup. See the [warmup schedule](https://sendgrid.com/docs/API_Reference/Web_API_v3/IP_Management/ip_warmup_schedule.html) for more details on how SendGrid limits your email traffic for IPs in warmup.

For more general information about warming up IPs, please see our [Classroom](https://sendgrid.com/docs/Classroom/Deliver/Delivery_Introduction/warming_up_ips.html).


```js
sendgrid.ips.warmup.post({}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`
  * body `object`
    * ip `string`: The IP address that you want to begin warming up.

#### Output
* output [ip_warmup_response](#ip_warmup_response)

### ips.warmup.ip_address.delete
**This endpoint allows you to remove an IP address from warmup mode.**

SendGrid can automatically warm up dedicated IP addresses by limiting the amount of mail that can be sent through them per hour, with the limit determined by how long the IP address has been in warmup. See the [warmup schedule](https://sendgrid.com/docs/API_Reference/Web_API_v3/IP_Management/ip_warmup_schedule.html) for more details on how SendGrid limits your email traffic for IPs in warmup.

For more general information about warming up IPs, please see our [Classroom](https://sendgrid.com/docs/Classroom/Deliver/Delivery_Introduction/warming_up_ips.html).


```js
sendgrid.ips.warmup.ip_address.delete({
  "ip_address": ""
}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`
  * ip_address **required** `string`: The IP address that you want to retrieve the warmup status for.

#### Output
* output `object`

### ips.warmup.ip_address.get
**This endpoint allows you to retrieve the warmup status for a specific IP address.**

SendGrid can automatically warm up dedicated IP addresses by limiting the amount of mail that can be sent through them per hour, with the limit determined by how long the IP address has been in warmup. See the [warmup schedule](https://sendgrid.com/docs/API_Reference/Web_API_v3/IP_Management/ip_warmup_schedule.html) for more details on how SendGrid limits your email traffic for IPs in warmup.

For more general information about warming up IPs, please see our [Classroom](https://sendgrid.com/docs/Classroom/Deliver/Delivery_Introduction/warming_up_ips.html).


```js
sendgrid.ips.warmup.ip_address.get({
  "ip_address": ""
}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`
  * ip_address **required** `string`: The IP address that you want to retrieve the warmup status for.

#### Output
* output [ip_warmup_response](#ip_warmup_response)

### ips.ip_address.get
**This endpoint allows you to see which IP pools a particular IP address has been added to.**

The same IP address can be added to multiple IP pools.

A single IP address or a range of IP addresses may be dedicated to an account in order to send email for multiple domains. The reputation of this IP is based on the aggregate performance of all the senders who use it.


```js
sendgrid.ips.ip_address.get({
  "ip_address": ""
}, context)
```

#### Input
* input `object`
  * ip_address **required** `string`: The IP address you are retrieving the IP pools for.

#### Output
* output `object`
  * ip **required** `string`: The IP address.
  * pools **required** `array`: The list of IP pools that this IP address belongs to.
    * items `string`
  * rdns **required** `string`: The reverse DNS record for this IP address.
  * start_date **required** `integer`: The date that the IP address was entered into warmup.
  * subusers **required** `array`: The subusers that can send email using this IP address.
    * items `string`
  * warmup **required** `boolean`: Indicates if this IP address is currently warming up.
  * whitelabeled **required** `boolean`: Indicates if this IP address has been whitelabeled.

### mail.batch.post
**This endpoint allows you to generate a new batch ID. This batch ID can be associated with scheduled sends via the mail/send endpoint.**

If you set the SMTPAPI header `batch_id`, it allows you to then associate multiple scheduled mail/send requests together with the same ID. Then at anytime up to 10 minutes before the schedule date, you can cancel all of the mail/send requests that have this batch ID by calling the Cancel Scheduled Send endpoint. 

More Information:

* [Scheduling Parameters > Batch ID](https://sendgrid.com/docs/API_Reference/SMTP_API/scheduling_parameters.html)


```js
sendgrid.mail.batch.post({}, context)
```

#### Input
* input `object`

#### Output
* output [mail_batch_id](#mail_batch_id)

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

#### Input
* input `object`
  * batch_id **required** `string`

#### Output
* output [mail_batch_id](#mail_batch_id)

### mail.send.post
This endpoint allows you to send email over SendGrid’s v3 Web API, the most recent version of our API. If you are looking for documentation about the v2 Mail Send endpoint, please see our [v2 API Reference](https://sendgrid.com/docs/API_Reference/Web_API/mail.html).

* Top level parameters are referred to as "global".
* Individual fields within the personalizations array will override any other global, or “message level”, parameters that are defined outside of personalizations.
 
**SendGrid provides libraries to help you quickly and easily integrate with the v3 Web API in 7 different languages: [C#](https://github.com/sendgrid/sendgrid-csharp), [Go](https://github.com/sendgrid/sendgrid-go), [Java](https://github.com/sendgrid/sendgrid-java), [Node JS](https://github.com/sendgrid/sendgrid-nodejs), [PHP](https://github.com/sendgrid/sendgrid-php), [Python](https://github.com/sendgrid/sendgrid-python), and [Ruby](https://github.com/sendgrid/sendgrid-ruby).**


For more detailed information about how to use the v3 Mail Send endpoint, please visit our [Classroom](https://sendgrid.com/docs/Classroom/Send/v3_Mail_Send/index.html).


```js
sendgrid.mail.send.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * asm `object`: An object allowing you to specify how to handle unsubscribes.
      * group_id **required** `integer`: The unsubscribe group to associate with this email.
      * groups_to_display `array`: An array containing the unsubscribe groups that you would like to be displayed on the unsubscribe preferences page.
        * items `integer`
    * attachments `array`: An array of objects in which you can specify any attachments you want to include.
      * items `object`
        * content **required** `string`: The Base64 encoded content of the attachment.
        * content_id `string`: The content id for the attachment. This is used when the disposition is set to “inline” and the attachment is an image, allowing the file to be displayed within the body of your email.
        * disposition `string` (values: inline, attachment): The content-disposition of the attachment specifying how you would like the attachment to be displayed. For example, “inline” results in the attached file being displayed automatically within the message while “attachment” results in the attached file requiring some action to be taken before it is displayed (e.g. opening or downloading the file).
        * filename **required** `string`: The filename of the attachment.
        * type `string`: The mime type of the content you are attaching. For example, “text/plain” or “text/html”.
    * batch_id `string`: This ID represents a batch of emails to be sent at the same time. Including a batch_id in your request allows you include this email in that batch, and also enables you to cancel or pause the delivery of that batch. For more information, see https://sendgrid.com/docs/API_Reference/Web_API_v3/cancel_schedule_send.html 
    * categories `array`: An array of category names for this message. Each category name may not exceed 255 characters. 
      * items `string`
    * content **required** `array`: An array in which you may specify the content of your email. You can include multiple mime types of content, but you must specify at least one mime type. To include more than one mime type, simply add another object to the array containing the `type` and `value` parameters.
      * items `object`
        * type **required** `string`: The mime type of the content you are including in your email. For example, “text/plain” or “text/html”.
        * value **required** `string`: The actual content of the specified mime type that you are including in your email.
    * custom_args `object`: Values that are specific to the entire send that will be carried along with the email and its activity data. Substitutions will not be made on custom arguments, so any string that is entered into this parameter will be assumed to be the custom argument that you would like to be used. This parameter is overridden by personalizations[x].custom_args if that parameter has been defined. Total custom args size may not exceed 10,000 bytes.
    * from **required** [email_object](#email_object)
    * headers `object`: An object containing key/value pairs of header names and the value to substitute for them. You must ensure these are properly encoded if they contain unicode characters. Must not be one of the reserved headers.
    * ip_pool_name `string`: The IP Pool that you would like to send this email from.
    * mail_settings `object`: A collection of different mail settings that you can use to specify how you would like this email to be handled.
      * bcc `object`: This allows you to have a blind carbon copy automatically sent to the specified email address for every email that is sent.
        * email `string`: The email address that you would like to receive the BCC.
        * enable `boolean`: Indicates if this setting is enabled.
      * bypass_list_management `object`: Allows you to bypass all unsubscribe groups and suppressions to ensure that the email is delivered to every single recipient. This should only be used in emergencies when it is absolutely necessary that every recipient receives your email.
        * enable `boolean`: Indicates if this setting is enabled.
      * footer `object`: The default footer that you would like included on every email.
        * enable `boolean`: Indicates if this setting is enabled.
        * html `string`: The HTML content of your footer.
        * text `string`: The plain text content of your footer.
      * sandbox_mode `object`: This allows you to send a test email to ensure that your request body is valid and formatted correctly.
        * enable `boolean`: Indicates if this setting is enabled.
      * spam_check `object`: This allows you to test the content of your email for spam.
        * enable `boolean`: Indicates if this setting is enabled.
        * post_to_url `string`: An Inbound Parse URL that you would like a copy of your email along with the spam report to be sent to.
        * threshold `integer`: The threshold used to determine if your content qualifies as spam on a scale from 1 to 10, with 10 being most strict, or most likely to be considered as spam.
    * personalizations **required** `array`: An array of messages and their metadata. Each object within personalizations can be thought of as an envelope - it defines who should receive an individual message and how that message should be handled.
      * items `object`
        * bcc `array`: An array of recipients who will receive a blind carbon copy of your email. Each object within this array may contain the name, but must always contain the email, of a recipient.
          * items [email_object](#email_object)
        * cc `array`: An array of recipients who will receive a copy of your email. Each object within this array may contain the name, but must always contain the email, of a recipient.
          * items [email_object](#email_object)
        * custom_args `object`: Values that are specific to this personalization that will be carried along with the email and its activity data. Substitutions will not be made on custom arguments, so any string that is entered into this parameter will be assumed to be the custom argument that you would like to be used. May not exceed 10,000 bytes.
        * headers `object`: A collection of JSON key/value pairs allowing you to specify specific handling instructions for your email. You may not overwrite the following headers: x-sg-id, x-sg-eid, received, dkim-signature, Content-Type, Content-Transfer-Encoding, To, From, Subject, Reply-To, CC, BCC
        * send_at `integer`: A unix timestamp allowing you to specify when you want your email to be delivered. Scheduling more than 72 hours in advance is forbidden.
        * subject `string`: The subject of your email. Char length requirements, according to the RFC - http://stackoverflow.com/questions/1592291/what-is-the-email-subject-length-limit#answer-1592310
        * substitutions `object`: A collection of key/value pairs following the pattern "substitution_tag":"value to substitute". All are assumed to be strings. These substitutions will apply to the text and html content of the body of your email, in addition to the `subject` and `reply-to` parameters.
        * to **required** `array`: An array of recipients. Each object within this array may contain the name, but must always contain the email, of a recipient.
          * items [email_object](#email_object)
    * reply_to [email_object](#email_object)
    * sections `object`: An object of key/value pairs that define block sections of code to be used as substitutions.
    * send_at `integer`: A unix timestamp allowing you to specify when you want your email to be delivered. This may be overridden by the personalizations[x].send_at parameter. Scheduling more ta 72 hours in advance is forbidden.
    * subject **required** `string`: The global, or “message level”, subject of your email. This may be overridden by personalizations[x].subject.
    * template_id `string`: The id of a template that you would like to use. If you use a template that contains a subject and content (either text or html), you do not need to specify those at the personalizations nor message level. 
    * tracking_settings `object`: Settings to determine how you would like to track the metrics of how your recipients interact with your email.
      * click_tracking `object`: Allows you to track whether a recipient clicked a link in your email.
        * enable `boolean`: Indicates if this setting is enabled.
        * enable_text `boolean`: Indicates if this setting should be included in the text/plain portion of your email.
      * ganalytics `object`: Allows you to enable tracking provided by Google Analytics.
        * enable `boolean`: Indicates if this setting is enabled.
        * utm_campaign `string`: The name of the campaign.	
        * utm_content `string`: Used to differentiate your campaign from advertisements.	
        * utm_medium `string`: Name of the marketing medium. (e.g. Email)
        * utm_source `string`: Name of the referrer source. (e.g. Google, SomeDomain.com, or Marketing Email)
        * utm_term `string`: Used to identify any paid keywords.	
      * open_tracking `object`: Allows you to track whether the email was opened or not, but including a single pixel image in the body of the content. When the pixel is loaded, we can log that the email was opened.
        * enable `boolean`: Indicates if this setting is enabled.
        * substitution_tag `string`: Allows you to specify a substitution tag that you can insert in the body of your email at a location that you desire. This tag will be replaced by the open tracking pixel.
      * subscription_tracking `object`: Allows you to insert a subscription management link at the bottom of the text and html bodies of your email. If you would like to specify the location of the link within your email, you may use the substitution_tag.
        * enable `boolean`: Indicates if this setting is enabled.
        * html `string`: HTML to be appended to the email, with the subscription tracking link. You may control where the link is by using the tag <% %>
        * substitution_tag `string`: A tag that will be replaced with the unsubscribe URL. for example: [unsubscribe_url]. If this parameter is used, it will override both the `text` and `html` parameters. The URL of the link will be placed at the substitution tag’s location, with no additional formatting.
        * text `string`: Text to be appended to the email, with the subscription tracking link. You may control where the link is by using the tag <% %>

#### Output
*Output schema unknown*

### GET_mail_settings
**This endpoint allows you to retrieve a list of all mail settings.**

Mail settings allow you to tell SendGrid specific things to do to every email that you send to your recipients over SendGrid’s [Web API](https://sendgrid.com/docs/API_Reference/Web_API/mail.html) or [SMTP Relay](https://sendgrid.com/docs/API_Reference/SMTP_API/index.html).


```js
sendgrid.GET_mail_settings({}, context)
```

#### Input
* input `object`
  * limit `integer`: The number of settings to return.
  * offset `integer`: Where in the list of results to begin displaying settings.
  * on-behalf-of `string`

#### Output
* output `object`
  * result **required** `array`: The list of all mail settings.
    * items `object`
      * description **required** `string`: A description of the mail setting.
      * enabled **required** `boolean`: Indicates if this mail setting is currently enabled.
      * name **required** `string`: The name of the mail setting.
      * title **required** `string`: The title of the mail setting.

### mail_settings.address_whitelist.get
**This endpoint allows you to retrieve your current email address whitelist settings.**

The address whitelist setting whitelists a specified email address or domain for which mail should never be suppressed. For example, you own the domain “example.com,” and one or more of your recipients use email@example.com addresses, by placing example.com in the address whitelist setting, all bounces, blocks, and unsubscribes logged for that domain will be ignored and sent as if under normal sending conditions.

Mail settings allow you to tell SendGrid specific things to do to every email that you send to your recipients over SendGrid’s [Web API](https://sendgrid.com/docs/API_Reference/Web_API/mail.html) or [SMTP Relay](https://sendgrid.com/docs/API_Reference/SMTP_API/index.html).


```js
sendgrid.mail_settings.address_whitelist.get({}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`

#### Output
* output [mail_settings_address_whitelabel](#mail_settings_address_whitelabel)

### mail_settings.address_whitelist.patch
**This endpoint allows you to update your current email address whitelist settings.**

The address whitelist setting whitelists a specified email address or domain for which mail should never be suppressed. For example, you own the domain “example.com,” and one or more of your recipients use email@example.com addresses, by placing example.com in the address whitelist setting, all bounces, blocks, and unsubscribes logged for that domain will be ignored and sent as if under normal sending conditions.

Mail settings allow you to tell SendGrid specific things to do to every email that you send to your recipients over SendGrid’s [Web API](https://sendgrid.com/docs/API_Reference/Web_API/mail.html) or [SMTP Relay](https://sendgrid.com/docs/API_Reference/SMTP_API/index.html).


```js
sendgrid.mail_settings.address_whitelist.patch({}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`
  * body `object`
    * enabled `boolean`: Indicates if your email address whitelist is enabled.
    * list `array`: Either a single email address that you want whitelisted or a domain, for which all email addresses belonging to this domain will be whitelisted.
      * items `string`

#### Output
* output [mail_settings_address_whitelabel](#mail_settings_address_whitelabel)

### mail_settings.bcc.get
**This endpoint allows you to retrieve your current BCC mail settings.**

When the BCC mail setting is enabled, SendGrid will automatically send a blind carbon copy (BCC) to an address for every email sent without adding that address to the header. Please note that only one email address may be entered in this field, if you wish to distribute BCCs to multiple addresses you will need to create a distribution group or use forwarding rules.

Mail settings allow you to tell SendGrid specific things to do to every email that you send to your recipients over SendGrid’s [Web API](https://sendgrid.com/docs/API_Reference/Web_API/mail.html) or [SMTP Relay](https://sendgrid.com/docs/API_Reference/SMTP_API/index.html).


```js
sendgrid.mail_settings.bcc.get({}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`

#### Output
* output [mail_settings_bcc](#mail_settings_bcc)

### mail_settings.bcc.patch
**This endpoint allows you to update your current BCC mail settings.**

When the BCC mail setting is enabled, SendGrid will automatically send a blind carbon copy (BCC) to an address for every email sent without adding that address to the header. Please note that only one email address may be entered in this field, if you wish to distribute BCCs to multiple addresses you will need to create a distribution group or use forwarding rules.

Mail settings allow you to tell SendGrid specific things to do to every email that you send to your recipients over SendGrid’s [Web API](https://sendgrid.com/docs/API_Reference/Web_API/mail.html) or [SMTP Relay](https://sendgrid.com/docs/API_Reference/SMTP_API/index.html).


```js
sendgrid.mail_settings.bcc.patch({}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`
  * body [mail_settings_patch](#mail_settings_patch)

#### Output
* output [mail_settings_patch](#mail_settings_patch)

### mail_settings.bounce_purge.get
**This endpoint allows you to retrieve your current bounce purge settings.**

This setting allows you to set a schedule for SendGrid to automatically delete contacts from your soft and hard bounce suppression lists.

Mail settings allow you to tell SendGrid specific things to do to every email that you send to your recipients over SendGrid’s [Web API](https://sendgrid.com/docs/API_Reference/Web_API/mail.html) or [SMTP Relay](https://sendgrid.com/docs/API_Reference/SMTP_API/index.html).


```js
sendgrid.mail_settings.bounce_purge.get({}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`

#### Output
* output [mail_settings_bounce_purge](#mail_settings_bounce_purge)

### mail_settings.bounce_purge.patch
**This endpoint allows you to update your current bounce purge settings.**

This setting allows you to set a schedule for SendGrid to automatically delete contacts from your soft and hard bounce suppression lists.

Mail settings allow you to tell SendGrid specific things to do to every email that you send to your recipients over SendGrid’s [Web API](https://sendgrid.com/docs/API_Reference/Web_API/mail.html) or [SMTP Relay](https://sendgrid.com/docs/API_Reference/SMTP_API/index.html).


```js
sendgrid.mail_settings.bounce_purge.patch({}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`
  * body [mail_settings_bounce_purge](#mail_settings_bounce_purge)

#### Output
* output [mail_settings_bounce_purge](#mail_settings_bounce_purge)

### mail_settings.footer.get
**This endpoint allows you to retrieve your current Footer mail settings.**

The footer setting will insert a custom footer at the bottom of the text and HTML bodies. Use the embedded HTML editor and plain text entry fields to create the content of the footers to be inserted into your emails.

Mail settings allow you to tell SendGrid specific things to do to every email that you send to your recipients over SendGrid’s [Web API](https://sendgrid.com/docs/API_Reference/Web_API/mail.html) or [SMTP Relay](https://sendgrid.com/docs/API_Reference/SMTP_API/index.html).


```js
sendgrid.mail_settings.footer.get({}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`

#### Output
* output [mail_settings_footer](#mail_settings_footer)

### mail_settings.footer.patch
**This endpoint allows you to update your current Footer mail settings.**

The footer setting will insert a custom footer at the bottom of the text and HTML bodies. Use the embedded HTML editor and plain text entry fields to create the content of the footers to be inserted into your emails.

Mail settings allow you to tell SendGrid specific things to do to every email that you send to your recipients over SendGrid’s [Web API](https://sendgrid.com/docs/API_Reference/Web_API/mail.html) or [SMTP Relay](https://sendgrid.com/docs/API_Reference/SMTP_API/index.html).


```js
sendgrid.mail_settings.footer.patch({}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`
  * body [mail_settings_footer](#mail_settings_footer)

#### Output
* output [mail_settings_footer](#mail_settings_footer)

### mail_settings.forward_bounce.get
**This endpoint allows you to retrieve your current bounce forwarding mail settings.**

Activating this setting allows you to specify an email address to which bounce reports are forwarded.

Mail settings allow you to tell SendGrid specific things to do to every email that you send to your recipients over SendGrid’s [Web API](https://sendgrid.com/docs/API_Reference/Web_API/mail.html) or [SMTP Relay](https://sendgrid.com/docs/API_Reference/SMTP_API/index.html).


```js
sendgrid.mail_settings.forward_bounce.get({}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`

#### Output
* output [mail_settings_forward_bounce](#mail_settings_forward_bounce)

### mail_settings.forward_bounce.patch
**This endpoint allows you to update your current bounce forwarding mail settings.**

Activating this setting allows you to specify an email address to which bounce reports are forwarded.

Mail settings allow you to tell SendGrid specific things to do to every email that you send to your recipients over SendGrid’s [Web API](https://sendgrid.com/docs/API_Reference/Web_API/mail.html) or [SMTP Relay](https://sendgrid.com/docs/API_Reference/SMTP_API/index.html).


```js
sendgrid.mail_settings.forward_bounce.patch({}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`
  * body [mail_settings_forward_bounce](#mail_settings_forward_bounce)

#### Output
* output [mail_settings_forward_bounce](#mail_settings_forward_bounce)

### mail_settings.forward_spam.get
**This endpoint allows you to retrieve your current Forward Spam mail settings.**

Enabling the forward spam setting allows you to specify an email address to which spam reports will be forwarded.

Mail settings allow you to tell SendGrid specific things to do to every email that you send to your recipients over SendGrid’s [Web API](https://sendgrid.com/docs/API_Reference/Web_API/mail.html) or [SMTP Relay](https://sendgrid.com/docs/API_Reference/SMTP_API/index.html).


```js
sendgrid.mail_settings.forward_spam.get({}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`

#### Output
* output [mail_settings_forward_spam](#mail_settings_forward_spam)

### mail_settings.forward_spam.patch
**This endpoint allows you to update your current Forward Spam mail settings.**

Enabling the forward spam setting allows you to specify an email address to which spam reports will be forwarded.

Mail settings allow you to tell SendGrid specific things to do to every email that you send to your recipients over SendGrid’s [Web API](https://sendgrid.com/docs/API_Reference/Web_API/mail.html) or [SMTP Relay](https://sendgrid.com/docs/API_Reference/SMTP_API/index.html).


```js
sendgrid.mail_settings.forward_spam.patch({}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`
  * body [mail_settings_forward_spam](#mail_settings_forward_spam)

#### Output
* output [mail_settings_forward_spam](#mail_settings_forward_spam)

### mail_settings.plain_content.get
**This endpoint allows you to retrieve your current Plain Content mail settings.**

The plain content setting will automatically convert any plain text emails that you send to HTML before sending.

Mail settings allow you to tell SendGrid specific things to do to every email that you send to your recipients over SendGrid’s [Web API](https://sendgrid.com/docs/API_Reference/Web_API/mail.html) or [SMTP Relay](https://sendgrid.com/docs/API_Reference/SMTP_API/index.html).


```js
sendgrid.mail_settings.plain_content.get({}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`

#### Output
* output `object`
  * enabled `boolean`: Indicates if the Plain Content mail setting is enabled.

### mail_settings.plain_content.patch
**This endpoint allows you to update your current Plain Content mail settings.**

The plain content setting will automatically convert any plain text emails that you send to HTML before sending.

Mail settings allow you to tell SendGrid specific things to do to every email that you send to your recipients over SendGrid’s [Web API](https://sendgrid.com/docs/API_Reference/Web_API/mail.html) or [SMTP Relay](https://sendgrid.com/docs/API_Reference/SMTP_API/index.html).


```js
sendgrid.mail_settings.plain_content.patch({}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`
  * body `object`
    * enabled `boolean`: The new setting you would like to use for your Plain Content mail setting.

#### Output
* output `object`
  * enabled `boolean`: Indicates if your Plain Content mail setting is enabled.

### mail_settings.spam_check.get
**This endpoint allows you to retrieve your current Spam Checker mail settings.**

The spam checker filter notifies you when emails are detected that exceed a predefined spam threshold.

Mail settings allow you to tell SendGrid specific things to do to every email that you send to your recipients over SendGrid’s [Web API](https://sendgrid.com/docs/API_Reference/Web_API/mail.html) or [SMTP Relay](https://sendgrid.com/docs/API_Reference/SMTP_API/index.html).


```js
sendgrid.mail_settings.spam_check.get({}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`

#### Output
* output [mail_settings_spam_check](#mail_settings_spam_check)

### mail_settings.spam_check.patch
**This endpoint allows you to update your current spam checker mail settings.**

The spam checker filter notifies you when emails are detected that exceed a predefined spam threshold.

Mail settings allow you to tell SendGrid specific things to do to every email that you send to your recipients over SendGrid’s [Web API](https://sendgrid.com/docs/API_Reference/Web_API/mail.html) or [SMTP Relay](https://sendgrid.com/docs/API_Reference/SMTP_API/index.html).


```js
sendgrid.mail_settings.spam_check.patch({}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`
  * body `object`
    * enabled `boolean`: Indicates if you want the spam check mail setting to be enabled or not.
    * max_score `integer`: The new max score, or spam threshold that you would like to set for the spam checker.
    * url `string`: The Inbound Parse URL where you would like your spam reports to be sent to.

#### Output
* output [mail_settings_spam_check](#mail_settings_spam_check)

### mail_settings.template.get
**This endpoint allows you to retrieve your current legacy email template settings.**

This setting refers to our original email templates. We currently support more fully featured [transactional templates](https://sendgrid.com/docs/User_Guide/Transactional_Templates/index.html). 

The legacy email template setting wraps an HTML template around your email content. This can be useful for sending out marketing email and/or other HTML formatted messages.

Mail settings allow you to tell SendGrid specific things to do to every email that you send to your recipients over SendGrid’s [Web API](https://sendgrid.com/docs/API_Reference/Web_API/mail.html) or [SMTP Relay](https://sendgrid.com/docs/API_Reference/SMTP_API/index.html).


```js
sendgrid.mail_settings.template.get({}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`

#### Output
* output [mail_settings_template](#mail_settings_template)

### mail_settings.template.patch
**This endpoint allows you to update your current legacy email template settings.**

This setting refers to our original email templates. We currently support more fully featured [transactional templates](https://sendgrid.com/docs/User_Guide/Transactional_Templates/index.html). 

The legacy email template setting wraps an HTML template around your email content. This can be useful for sending out marketing email and/or other HTML formatted messages.

Mail settings allow you to tell SendGrid specific things to do to every email that you send to your recipients over SendGrid’s [Web API](https://sendgrid.com/docs/API_Reference/Web_API/mail.html) or [SMTP Relay](https://sendgrid.com/docs/API_Reference/SMTP_API/index.html).


```js
sendgrid.mail_settings.template.patch({}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`
  * body `object`
    * enabled `boolean`: Indicates if you want to enable the legacy email template mail setting.
    * html_content `string`: The new HTML content for your legacy email template.

#### Output
* output `object`
  * enabled **required** `boolean`: Indicates if the legacy email template mail setting is enabled.
  * html_content **required** `string`: The HTML content of your legacy email template.

### mailbox_providers.stats.get
**This endpoint allows you to retrieve your email statistics segmented by recipient mailbox provider.**

**We only store up to 7 days of email activity in our database.** By default, 500 items will be returned per request via the Advanced Stats API endpoints.

Advanced Stats provide a more in-depth view of your email statistics and the actions taken by your recipients. You can segment these statistics by geographic location, device type, client type, browser, and mailbox provider. For more information about statistics, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Statistics/index.html).


```js
sendgrid.mailbox_providers.stats.get({
  "start_date": ""
}, context)
```

#### Input
* input `object`
  * limit `integer`: The number of results to include on each page.
  * offset `integer`: The number of results to exclude.
  * aggregated_by `string` (values: day, week, month): How to group the stats. Must be either "day", "wee", or "month".
  * start_date **required** `string`: The starting date of the statistics to retrieve. Must follow format YYYY-MM-DD.
  * end_date `string`: The end date of the statistics to retrieve. Defaults to today. Must follow format YYYY-MM-DD.
  * mailbox_providers `string`: The mail box providers to get statistics for. You can include up to 10 by including this parameter multiple times.
  * on-behalf-of `string`

#### Output
* output `array`
  * items [advanced_stats_mailbox_provider](#advanced_stats_mailbox_provider)

### GET_partner_settings
**This endpoint allows you to retrieve a list of all partner settings that you can enable.**

Our partner settings allow you to integrate your SendGrid account with our partners to increase your SendGrid experience and functionality. For more information about our partners, and how you can begin integrating with them, please visit our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/partners.html).


```js
sendgrid.GET_partner_settings({}, context)
```

#### Input
* input `object`
  * limit `integer`: The number of settings to return per page.
  * offset `integer`: The paging offset.

#### Output
* output `object`
  * result `array`
    * items `object`
      * description **required** `string`: A description of this partner setting.
      * enabled **required** `boolean`: Indicates if this partner setting has been enabled.
      * name **required** `string`: The name of the partner setting.
      * title **required** `string`: The title of the partner.

### partner_settings.new_relic.get
**This endpoint allows you to retrieve your current New Relic partner settings.**

Our partner settings allow you to integrate your SendGrid account with our partners to increase your SendGrid experience and functionality. For more information about our partners, and how you can begin integrating with them, please visit our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/partners.html).

By integrating with New Relic, you can send your SendGrid email statistics to your New Relic Dashboard. If you enable this setting, your stats will be sent to New Relic every 5 minutes. You will need your New Relic License Key to enable this setting. For more information, please see our [Classroom](https://sendgrid.com/docs/Classroom/Track/Collecting_Data/new_relic.html).


```js
sendgrid.partner_settings.new_relic.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [partner_settings_new_relic](#partner_settings_new_relic)

### partner_settings.new_relic.patch
**This endpoint allows you to update or change your New Relic partner settings.**

Our partner settings allow you to integrate your SendGrid account with our partners to increase your SendGrid experience and functionality. For more information about our partners, and how you can begin integrating with them, please visit our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/partners.html).

By integrating with New Relic, you can send your SendGrid email statistics to your New Relic Dashboard. If you enable this setting, your stats will be sent to New Relic every 5 minutes. You will need your New Relic License Key to enable this setting. For more information, please see our [Classroom](https://sendgrid.com/docs/Classroom/Track/Collecting_Data/new_relic.html).


```js
sendgrid.partner_settings.new_relic.patch({}, context)
```

#### Input
* input `object`
  * body `object`
    * enable_subuser_statistics `boolean`: Indicates if your subuser statistics will be sent to your New Relic Dashboard.
    * enabled `boolean`: Indicates if this partner setting is enabled.
    * license_key `string`: The license key for your New Relic account.

#### Output
* output [partner_settings_new_relic](#partner_settings_new_relic)

### GET_scopes
**This endpoint returns a list of all scopes that this user has access to.**

API Keys can be used to authenticate the use of [SendGrid’s v3 Web API](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html), or the [Mail API Endpoint](https://sendgrid.com/docs/API_Reference/Web_API/mail.html). API Keys may be assigned certain permissions, or scopes, that limit which API endpoints they are able to access. For a more detailed explanation of how you can use API Key permissios, please visit our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/api_keys.html#-API-Key-Permissions) or [Classroom](https://sendgrid.com/docs/Classroom/Basics/API/api_key_permissions.html).


```js
sendgrid.GET_scopes({}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`

#### Output
* output `object`
  * scopes **required** `array`: The list of scopes for which this user has access.
    * items `string`

### scopes.requests.get
This endpoint allows you to retrieve a list of all recent access requests.

**Note:** The Response Header's 'link' parameter will include pagination info. For example:

link: ```<https://api.sendgrid.com/v3/scopes/requests?limit=10&offset=0>; rel="first"; title="1", <https://api.sendgrid.com/v3/scopes/requests?limit=10&offset=10>; rel="last"; title="2", <https://api.sendgrid.com/v3/scopes/requests?limit=10&offset=0>; rel="prev"; title="1"```


```js
sendgrid.scopes.requests.get({}, context)
```

#### Input
* input `object`
  * limit `integer`: Optional field to limit the number of results returned.
  * offset `integer`: Optional beginning point in the list to retrieve from.

#### Output
* output `array`
  * items `object`
    * email `string`: Teammate's email
    * first_name `string`: Teammate's first name
    * id `integer`: Request ID
    * last_name `string`: Teammate's last name
    * scope_group_name `string`: Name of group of scopes associated to page teammate is requesting access to
    * username `string`: Teammate's username

### scopes.requests.request_id.delete
This endpoint allows you to deny an attempt to access your account.

**Note:** Only teammate admins may delete a teammate's access request.


```js
sendgrid.scopes.requests.request_id.delete({
  "request_id": ""
}, context)
```

#### Input
* input `object`
  * request_id **required** `string`: The ID of the request that you want to deny.

#### Output
*Output schema unknown*

### scopes.requests.request_id.approve.patch
This endpoint allows you to approve an access attempt.

**Note:** Only teammate admins may approve another teammate’s access request.


```js
sendgrid.scopes.requests.request_id.approve.patch({
  "request_id": ""
}, context)
```

#### Input
* input `object`
  * request_id **required** `string`: The ID of the request that you want to approve.

#### Output
* output `object`
  * scope_group_name `string`: name of feature teammate will be given access to

### senders.get
**This endpoint allows you to retrieve a list of all sender identities that have been created for your account.**

Sender Identities are required to be verified before use. If your domain has been whitelabeled it will auto verify on creation. Otherwise an email will be sent to the `from.email`.


```js
sendgrid.senders.get({}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`

#### Output
* output `object`
  * result `array`
    * items [senderID](#senderid)

### POST_senders
**This endpoint allows you to create a new sender identity.**

*You may create up to 100 unique sender identities.*

Sender Identities are required to be verified before use. If your domain has been whitelabeled it will auto verify on creation. Otherwise an email will be sent to the `from.email`.


```js
sendgrid.POST_senders({}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`
  * body `object`
    * address **required** `string`: The physical address of the sender identity.
    * address_2 `string`: Additional sender identity address information.
    * city **required** `string`: The city of the sender identity.
    * country **required** `string`: The country of the sender identity.
    * from `object`
      * email **required** `string`: This is where the email will appear to originate from for your recipient
      * name `string`: This is the name appended to the from email field. IE - Your name or company name.
    * nickname **required** `string`: A nickname for the sender identity. Not used for sending.
    * reply_to `object`
      * email **required** `string`: This is the email that your recipient will reply to.
      * name `string`: This is the name appended to the reply to email field. IE - Your name or company name.
    * state `string`: The state of the sender identity.
    * zip `string`: The zipcode of the sender identity.

#### Output
* output [senderID](#senderid)

### senders.sender_id.delete
**This endoint allows you to delete one of your sender identities.**

Sender Identities are required to be verified before use. If your domain has been whitelabeled it will auto verify on creation. Otherwise an email will be sent to the `from.email`.


```js
sendgrid.senders.sender_id.delete({
  "sender_id": 0
}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`
  * sender_id **required** `integer`: The ID of the sender identity that you want to update.

#### Output
* output `object`

### senders.sender_id.get
**This endpoint allows you to retrieve a specific sender identity.**

Sender Identities are required to be verified before use. If your domain has been whitelabeled it will auto verify on creation. Otherwise an email will be sent to the `from.email`.


```js
sendgrid.senders.sender_id.get({
  "sender_id": 0
}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`
  * sender_id **required** `integer`: The ID of the sender identity that you want to update.

#### Output
* output [senderID](#senderid)

### senders.sender_id.patch
**This endpoint allows you to update a sender identity.**

Updates to `from.email` require re-verification. If your domain has been whitelabeled it will auto verify on creation. Otherwise an email will be sent to the `from.email`.

Partial updates are allowed, but fields that are marked as "required" in the POST (create) endpoint must not be nil if that field is included in the PATCH request.


```js
sendgrid.senders.sender_id.patch({
  "sender_id": 0
}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`
  * body `object`
    * address `string`: The physical address of the sender identity.
    * address_2 `string`: Additional sender identity address information.
    * city `string`: The city of the sender identity.
    * country `string`: The country of the sender identity.
    * from `object`
      * email `string`: This is where the email will appear to originate from for your recipient
      * name `string`: This is the name appended to the from email field. IE - Your name or company name.
    * nickname `string`: A nickname for the sender identity. Not used for sending.
    * reply_to `object`
      * email `string`: This is the email that your recipient will reply to.
      * name `string`: This is the name appended to the reply to email field. IE - Your name or company name.
    * state `string`: The state of the sender identity.
    * zip `string`: The zipcode of the sender identity.
  * sender_id **required** `integer`: The ID of the sender identity that you want to update.

#### Output
* output [senderID](#senderid)

### senders.sender_id.resend_verification.post
**This enpdoint allows you to resend a sender identity verification email.**

Sender Identities are required to be verified before use. If your domain has been whitelabeled it will auto verify on creation. Otherwise an email will be sent to the `from.email`.


```js
sendgrid.senders.sender_id.resend_verification.post({
  "sender_id": 0
}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`
  * sender_id **required** `integer`: The ID of the sender identity for which you would like to resend a verification email.

#### Output
* output `object`

### GET_stats
**This endpoint allows you to retrieve all of your global email statistics between a given date range.**

Parent accounts will see aggregated stats for their account and all subuser accounts. Subuser accounts will only see their own stats.


```js
sendgrid.GET_stats({
  "start_date": ""
}, context)
```

#### Input
* input `object`
  * limit `integer`: The number of results to return.
  * offset `integer`: The point in the list to begin retrieving results.
  * aggregated_by `string` (values: day, week, month): How to group the statistics. Must be either "day", "week", or "month".
  * start_date **required** `string`: The starting date of the statistics to retrieve. Must follow format YYYY-MM-DD.
  * end_date `string`: The end date of the statistics to retrieve. Defaults to today. Must follow format YYYY-MM-DD.
  * on-behalf-of `string`

#### Output
* output `array`
  * items `object`
    * date **required** `string`: The date the stats were gathered.
    * stats **required** `array`: The individual email activity stats.
      * items `object`
        * metrics `object`
          * blocks `integer`: The number of emails that were not allowed to be delivered by ISPs.
          * bounce_drops `integer`: The number of emails that were dropped because of a bounce.
          * bounces `integer`: The number of emails that bounced instead of being delivered.
          * clicks `integer`: The number of links that were clicked in your emails.
          * deferred `integer`: The number of emails that temporarily could not be delivered. 
          * delivered `integer`: The number of emails SendGrid was able to confirm were actually delivered to a recipient.
          * invalid_emails `integer`: The number of recipients who had malformed email addresses or whose mail provider reported the address as invalid.
          * opens `integer`: The total number of times your emails were opened by recipients.
          * processed `integer`: Requests from your website, application, or mail client via SMTP Relay or the API that SendGrid processed.
          * requests `integer`: The number of emails that were requested to be delivered.
          * spam_report_drops `integer`: The number of emails that were dropped due to a recipient previously marking your emails as spam.
          * spam_reports `integer`: The number of recipients who marked your email as spam.
          * unique_clicks `integer`: The number of unique recipients who clicked links in your emails.
          * unique_opens `integer`: The number of unique recipients who opened your emails.
          * unsubscribe_drops `integer`: The number of emails dropped due to a recipient unsubscribing from your emails.
          * unsubscribes `integer`: The number of recipients who unsubscribed from your emails.

### GET_subusers
This endpoint allows you to retrieve a list of all of your subusers. You can choose to retrieve specific subusers as well as limit the results that come back from the API.

For more information about Subusers:

* [User Guide > Subusers](https://sendgrid.com/docs/User_Guide/Settings/Subusers/index.html)
* [Classroom > How do I add more subusers to my account?](https://sendgrid.com/docs/Classroom/Basics/Account/how_do_i_add_more_subusers_to_my_account.html)


```js
sendgrid.GET_subusers({}, context)
```

#### Input
* input `object`
  * username `string`: The username of this subuser.
  * limit `integer`: The number of results you would like to get in each request.
  * offset `integer`: The number of subusers to skip.

#### Output
* output `array`
  * items [subuser](#subuser)

### POST_subusers
This endpoint allows you to retrieve a list of all of your subusers. You can choose to retrieve specific subusers as well as limit the results that come back from the API.

For more information about Subusers:

* [User Guide > Subusers](https://sendgrid.com/docs/User_Guide/Settings/Subusers/index.html)
* [Classroom > How do I add more subusers to my account?](https://sendgrid.com/docs/Classroom/Basics/Account/how_do_i_add_more_subusers_to_my_account.html)


```js
sendgrid.POST_subusers({}, context)
```

#### Input
* input `object`
  * body `object`
    * email **required** `string`: The email address of the subuser.
    * ips **required** `array`: The IP addresses that should be assigned to this subuser.
      * items `string`
    * password **required** `string`: The password this subuser will use when logging into SendGrid.
    * username **required** `string`: The username for this subuser.

#### Output
* output [subuser_post](#subuser_post)

### subusers.reputations.get
Subuser sender reputations give a good idea how well a sender is doing with regards to how recipients and recipient servers react to the mail that is being received. When a bounce, spam report, or other negative action happens on a sent email, it will effect your sender rating.

This endpoint allows you to request the reputations for your subusers.


```js
sendgrid.subusers.reputations.get({}, context)
```

#### Input
* input `object`
  * usernames `string`

#### Output
* output `array`
  * items `object`
    * reputation **required** `number`: The sender reputation this subuser has attained.
    * username **required** `string`: The subuser that has this reputation.f

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

#### Input
* input `object`
  * limit `integer`: Limits the number of results returned per page.
  * offset `integer`: The point in the list to begin retrieving results from.
  * aggregated_by `string` (values: day, week, month): How to group the statistics. Must be either "day", "week", or "month".
  * subusers **required** `string`: The subuser you want to retrieve statistics for. You may include this parameter up to 10 times to retrieve statistics for multiple subusers.
  * start_date **required** `string`: The starting date of the statistics to retrieve. Must follow format YYYY-MM-DD.
  * end_date `string`: The end date of the statistics to retrieve. Defaults to today.

#### Output
* output [stats](#stats)

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

#### Input
* input `object`
  * date **required** `string`: The date of the month to retrieve statistics for. Must be formatted YYYY-MM-DD
  * subuser `string`: A substring search of your subusers.
  * sort_by_metric `string`: The metric that you want to sort by. Metrics that you can sort by are: `blocks`, `bounces`, `clicks`, `delivered`, `opens`, `requests`, `unique_clicks`, `unique_opens`, and `unsubscribes`.'
  * sort_by_direction `string` (values: desc, asc): The direction you want to sort.
  * limit `integer`: Optional field to limit the number of results returned.
  * offset `integer`: Optional beginning point in the list to retrieve from.

#### Output
* output [subuser_stats](#subuser_stats)

### subusers.stats.sums.get
**This endpoint allows you to retrieve the total sums of each email statistic metric for all subusers over the given date range.**


While you can always view the statistics for all email activity on your account, subuser statistics enable you to view specific segments of your stats. Emails sent, bounces, and spam reports are always tracked for subusers. Unsubscribes, clicks, and opens are tracked if you have enabled the required settings.

For more information, see our [User Guide](https://sendgrid.com/docs/User_Guide/Statistics/subuser.html).


```js
sendgrid.subusers.stats.sums.get({
  "start_date": ""
}, context)
```

#### Input
* input `object`
  * sort_by_direction `string` (values: desc, asc): The direction you want to sort. 
  * start_date **required** `string`: The starting date of the statistics to retrieve. Must follow format YYYY-MM-DD.
  * end_date `string`: The end date of the statistics to retrieve. Defaults to today. Must follow format YYYY-MM-DD.
  * limit `integer`: Limits the number of results returned per page.
  * offset `integer`: The point in the list to begin retrieving results from.
  * aggregated_by `string`: How to group the statistics. Defaults to today. Must follow format YYYY-MM-DD.
  * sort_by_metric `string`: The metric that you want to sort by.  Must be a single metric.

#### Output
* output [category_stats](#category_stats)

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

#### Input
* input `object`
  * subuser_name **required** `string`

#### Output
* output `object`

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

#### Input
* input `object`
  * body `object`
    * disabled `boolean`: Whether or not this subuser is disabled. True means disabled, False means enabled.
  * subuser_name **required** `string`

#### Output
* output `object`

### subusers.subuser_name.ips.put
Each subuser should be assigned to an IP address, from which all of this subuser's mail will be sent. Often, this is the same IP as the parent account, but each subuser can have their own, or multiple, IP addresses as well. 

More information:

* [How to request more IPs](https://sendgrid.com/docs/Classroom/Basics/Account/adding_an_additional_dedicated_ip_to_your_account.html)
* [IPs can be whitelabeled](https://sendgrid.com/docs/User_Guide/Settings/Whitelabel/ips.html)


```js
sendgrid.subusers.subuser_name.ips.put({
  "Authorization": "",
  "subuser_name": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`
  * body `array`: The IP addresses you would like to assign to the subuser.
    * items `string`
  * subuser_name **required** `string`

#### Output
* output `object`
  * ips `array`: The IP addresses that are assigned to the subuser.
    * items `string`

### subusers.subuser_name.monitor.delete
Subuser monitor settings allow you to receive a sample of an outgoing message by a specific customer at a specific frequency of emails.


```js
sendgrid.subusers.subuser_name.monitor.delete({
  "Authorization": "",
  "subuser_name": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`
  * subuser_name **required** `string`: The name of the subuser for which to retrieve monitor settings.

#### Output
* output `object`

### subusers.subuser_name.monitor.get
Subuser monitor settings allow you to receive a sample of an outgoing message by a specific customer at a specific frequency of emails.


```js
sendgrid.subusers.subuser_name.monitor.get({
  "subuser_name": ""
}, context)
```

#### Input
* input `object`
  * subuser_name **required** `string`: The name of the subuser for which to retrieve monitor settings.

#### Output
* output [monitor](#monitor)

### subusers.subuser_name.monitor.post
Subuser monitor settings allow you to receive a sample of an outgoing message by a specific customer at a specific frequency of emails.


```js
sendgrid.subusers.subuser_name.monitor.post({
  "subuser_name": ""
}, context)
```

#### Input
* input `object`
  * body [monitor](#monitor)
  * subuser_name **required** `string`: The name of the subuser for which to retrieve monitor settings.

#### Output
* output [monitor](#monitor)

### subusers.subuser_name.monitor.put
Subuser monitor settings allow you to receive a sample of an outgoing message by a specific customer at a specific frequency of emails.


```js
sendgrid.subusers.subuser_name.monitor.put({
  "subuser_name": ""
}, context)
```

#### Input
* input `object`
  * body [monitor](#monitor)
  * subuser_name **required** `string`: The name of the subuser for which to retrieve monitor settings.

#### Output
* output [monitor](#monitor)

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

#### Input
* input `object`
  * date **required** `string`: The date of the month to retrieve statistics for. Must be formatted YYYY-MM-DD
  * sort_by_metric `string`: The metric that you want to sort by. Metrics that you can sort by are: `blocks`, `bounces`, `clicks`, `delivered`, `opens`, `requests`, `unique_clicks`, `unique_opens`, and `unsubscribes`.'
  * sort_by_direction `string` (values: desc, asc): The direction you want to sort.
  * limit `integer`: Optional field to limit the number of results returned.
  * offset `integer`: Optional beginning point in the list to retrieve from.
  * subuser_name **required** `string`

#### Output
* output [subuser_stats](#subuser_stats)

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

#### Input
* input `object`
  * on-behalf-of `string`
  * body `object`
    * delete_all `boolean`: Indicates if you want to delete all blocked email addresses.
    * emails `array`: The specific blocked email addresses that you want to delete.
      * items `string`

#### Output
* output `object`

### suppression.blocks.get
**This endpoint allows you to retrieve a list of all email addresses that are currently on your blocks list.**

There are several causes for [blocked](https://sendgrid.com/docs/Glossary/blocks.html) emails: for example, your mail server IP address is on an ISP blacklist, or blocked by an ISP, or if the receiving server flags the message content.

For more information, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Suppressions/blocks.html).


```js
sendgrid.suppression.blocks.get({}, context)
```

#### Input
* input `object`
  * start_time `integer`: Refers start of the time range in unix timestamp when a blocked email was created (inclusive).
  * end_time `integer`: Refers end of the time range in unix timestamp when a blocked email was created (inclusive).
  * limit `integer`: Limit the number of results to be displayed per page.
  * offset `integer`: The point in the list to begin displaying results.
  * on-behalf-of `string`

#### Output
* output `array`
  * items `object`
    * created **required** `integer`: A Unix timestamp indicating when the email address was added to the blocks list.
    * email **required** `string`: The email address that was added to the block list.
    * reason **required** `string`: An explanation for the reason of the block.
    * status **required** `string`: The status of the block.

### suppression.blocks.email.delete
**This endpoint allows you to delete a specific email address from your blocks list.**

[Blocks](https://sendgrid.com/docs/Glossary/blocks.html) happen when your message was rejected for a reason related to the message, not the recipient address. This can happen when your mail server IP address has been added to a blacklist or blocked by an ISP, or if the message content is flagged by a filter on the receiving server.

For more information, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Suppressions/blocks.html).


```js
sendgrid.suppression.blocks.email.delete({
  "Authorization": "",
  "email": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`
  * on-behalf-of `string`
  * email **required** `string`: The email address of the specific block.

#### Output
* output `object`

### suppression.blocks.email.get
**This endpoint allows you to retrieve a specific email address from your blocks list.**

[Blocks](https://sendgrid.com/docs/Glossary/blocks.html) happen when your message was rejected for a reason related to the message, not the recipient address. This can happen when your mail server IP address has been added to a blacklist or blocked by an ISP, or if the message content is flagged by a filter on the receiving server.

For more information, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Suppressions/blocks.html).


```js
sendgrid.suppression.blocks.email.get({
  "email": ""
}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`
  * email **required** `string`: The email address of the specific block.

#### Output
* output `array`
  * items `object`
    * created **required** `integer`: A Unix timestamp indicating when the block was created.
    * email **required** `string`: The email address of the recipient that was blocked.
    * reason **required** `string`: The reason why the email was blocked.
    * status `string`: The status of the block.

### suppression.bounces.delete
**This endpoint allows you to delete all of your bounces. You can also use this endpoint to remove a specific email address from your bounce list.**

A bounced email is when the message is undeliverable and then returned to the server that sent it.

For more information see: 

* [User Guide > Bounces](https://sendgrid.com/docs/User_Guide/Suppressions/bounces.html) for more information
* [Glossary > Bounces](https://sendgrid.com/docs/Glossary/Bounces.html)
* [Classroom > List Scrubbing Guide](https://sendgrid.com/docs/Classroom/Deliver/list_scrubbing.html)

Note: the `delete_all` and `emails` parameters should be used independently of each other as they have different purposes.


```js
sendgrid.suppression.bounces.delete({}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`
  * body `object`
    * delete_all `boolean`: This parameter allows you to delete **every** email in your bounce list. This should not be used with the emails parameter.
    * emails `array`: Delete multiple emails from your bounce list at the same time. This should not be used with the delete_all parameter.
      * items `string`

#### Output
*Output schema unknown*

### suppression.bounces.get
**This endpoint allows you to retrieve all of your bounces.**

A bounced email is when the message is undeliverable and then returned to the server that sent it.  

For more information see: 

* [User Guide > Bounces](https://sendgrid.com/docs/User_Guide/Suppressions/bounces.html) for more information
* [Glossary > Bounces](https://sendgrid.com/docs/Glossary/Bounces.html)


```js
sendgrid.suppression.bounces.get({
  "Accept": ""
}, context)
```

#### Input
* input `object`
  * start_time `integer`: Refers start of the time range in unix timestamp when a bounce was created (inclusive).
  * end_time `integer`: Refers end of the time range in unix timestamp when a bounce was created (inclusive).
  * Accept **required** `string`
  * on-behalf-of `string`

#### Output
* output `array`
  * items `object`
    * created `number`
    * email `string`
    * reason `string`
    * status `string`

### suppression.bounces.email.delete
**This endpoint allows you to remove an email address from your bounce list.**

A bounced email is when the message is undeliverable and then returned to the server that sent it. This endpoint allows you to delete a single email addresses from your bounce list. 

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

#### Input
* input `object`
  * email_address **required** `string`: The email address you would like to remove from the bounce list.
  * on-behalf-of `string`
  * email **required** `string`

#### Output
* output `object`

### suppression.bounces.email.get
**This endpoint allows you to retrieve a specific bounce for a given email address.**

A bounced email is when the message is undeliverable and then returned to the server that sent it.

For more information see: 

* [User Guide > Bounces](https://sendgrid.com/docs/User_Guide/Suppressions/bounces.html) for more information
* [Glossary > Bounces](https://sendgrid.com/docs/Glossary/Bounces.html)
* [Classroom > List Scrubbing Guide](https://sendgrid.com/docs/Classroom/Deliver/list_scrubbing.html)


```js
sendgrid.suppression.bounces.email.get({
  "email": ""
}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`
  * email **required** `string`

#### Output
* output `array`
  * items `object`
    * created `integer`
    * email `string`
    * reason `string`
    * status `string`

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

#### Input
* input `object`
  * on-behalf-of `string`
  * body `object`
    * delete_all `boolean`: Indicates if you want to remove all email address from the invalid emails list.
    * emails `array`: The list of specific email addresses that you want to remove.
      * items `string`

#### Output
* output `object`

### suppression.invalid_emails.get
**This endpoint allows you to retrieve a list of all invalid email addresses.**

An invalid email occurs when you attempt to send email to an address that is formatted in a manner that does not meet internet email format standards or the email does not exist at the recipient’s mail server.

Examples include addresses without the “@” sign or addresses that include certain special characters and/or spaces. This response can come from our own server or the recipient mail server.

For more information, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Suppressions/invalid_emails.html).


```js
sendgrid.suppression.invalid_emails.get({}, context)
```

#### Input
* input `object`
  * start_time `integer`: Refers start of the time range in unix timestamp when an invalid email was created (inclusive).
  * end_time `integer`: Refers end of the time range in unix timestamp when an invalid email was created (inclusive).
  * limit `integer`: Limit the number of results to be displayed per page.
  * offset `integer`: Paging offset. The point in the list to begin displaying results.
  * on-behalf-of `string`

#### Output
* output `array`: The list of invalid email addresses.
  * items `object`
    * created **required** `integer`: A Unix timestamp indicating when the email address was added to the invalid emails list.
    * email **required** `string`: The email address that was marked as invalid.
    * reason **required** `string`: The reason that the email address was marked as invalid.

### suppression.invalid_emails.email.delete
**This endpoint allows you to remove a specific email address from the invalid email address list.**

An invalid email occurs when you attempt to send email to an address that is formatted in a manner that does not meet internet email format standards or the email does not exist at the recipient’s mail server.

Examples include addresses without the “@” sign or addresses that include certain special characters and/or spaces. This response can come from our own server or the recipient mail server.

For more information, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Suppressions/invalid_emails.html).


```js
sendgrid.suppression.invalid_emails.email.delete({
  "Authorization": "",
  "email": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`
  * on-behalf-of `string`
  * email **required** `string`: The specific email address of the invalid email entry that you want to retrieve.

#### Output
* output `object`

### suppression.invalid_emails.email.get
**This endpoint allows you to retrieve a specific invalid email addresses.**

An invalid email occurs when you attempt to send email to an address that is formatted in a manner that does not meet internet email format standards or the email does not exist at the recipient’s mail server.

Examples include addresses without the “@” sign or addresses that include certain special characters and/or spaces. This response can come from our own server or the recipient mail server.

For more information, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Suppressions/invalid_emails.html).


```js
sendgrid.suppression.invalid_emails.email.get({
  "Authorization": "",
  "email": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`
  * on-behalf-of `string`
  * email **required** `string`: The specific email address of the invalid email entry that you want to retrieve.

#### Output
* output `array`
  * items `object`
    * created **required** `integer`: A Unix timestamp indicating when the email address was added to the invalid emails list.
    * email **required** `string`: The email address that was marked as invalid.
    * reason **required** `string`: A reason explaining why the email address was marked as invalid.

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

#### Input
* input `object`
  * on-behalf-of `string`
  * body `object`
    * delete_all `boolean`: Indicates if you want to delete all email addresses on the spam report list.
    * emails `array`: A list of specific email addresses that you want to remove from the spam report list.
      * items `string`

#### Output
* output `object`

### suppression.spam_reports.get
**This endpoint allows you to retrieve all spam reports.**

[Spam reports](https://sendgrid.com/docs/Glossary/spam_reports.html) happen when a recipient indicates that they think your email is [spam](https://sendgrid.com/docs/Glossary/spam.html) and then their email provider reports this to SendGrid.

For more information, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Suppressions/spam_reports.html).


```js
sendgrid.suppression.spam_reports.get({}, context)
```

#### Input
* input `object`
  * start_time `integer`: Refers start of the time range in unix timestamp when a spam report was created (inclusive).
  * end_time `integer`: Refers end of the time range in unix timestamp when a spam report was created (inclusive).
  * limit `integer`: Limit the number of results to be displayed per page.
  * offset `integer`: Paging offset. The point in the list to begin displaying results.
  * on-behalf-of `string`

#### Output
* output `array`
  * items `object`
    * created **required** `integer`: A Unix timestamp indicating when the spam report was made.
    * email **required** `string`: The email address of the recipient who marked your message as spam.
    * ip **required** `string`: The IP address that the message was sent on.

### suppression.spam_reports.email.delete
**This endpoint allows you to delete a specific spam report.**

[Spam reports](https://sendgrid.com/docs/Glossary/spam_reports.html) happen when a recipient indicates that they think your email is [spam](https://sendgrid.com/docs/Glossary/spam.html) and then their email provider reports this to SendGrid.

For more information, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Suppressions/spam_reports.html).


```js
sendgrid.suppression.spam_reports.email.delete({
  "email": ""
}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`
  * email **required** `string`: The email address of a specific spam report that you want to retrieve.

#### Output
* output `object`

### suppression.spam_reports.email.get
**This endpoint allows you to retrieve a specific spam report.**

[Spam reports](https://sendgrid.com/docs/Glossary/spam_reports.html) happen when a recipient indicates that they think your email is [spam](https://sendgrid.com/docs/Glossary/spam.html) and then their email provider reports this to SendGrid.

For more information, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Suppressions/spam_reports.html).


```js
sendgrid.suppression.spam_reports.email.get({
  "email": ""
}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`
  * email **required** `string`: The email address of a specific spam report that you want to retrieve.

#### Output
* output `array`
  * items `object`
    * created **required** `integer`: A Unix timestamp that indicates when the recipient marked your message as spam.
    * email **required** `string`: The email address of the recipient that marked your message as spam.
    * ip **required** `string`: The IP address that the message was sent from.

### suppression.unsubscribes.get
**This endpoint allows you to retrieve a list of all email address that are globally suppressed.**

A global suppression (or global unsubscribe) is an email address of a recipient who does not want to receive any of your messages. A globally suppressed recipient will be removed from any email you send. For more information, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Suppressions/global_unsubscribes.html).


```js
sendgrid.suppression.unsubscribes.get({}, context)
```

#### Input
* input `object`
  * start_time `integer`: Refers start of the time range in unix timestamp when an unsubscribe email was created (inclusive).
  * end_time `integer`: Refers end of the time range in unix timestamp when an unsubscribe email was created (inclusive).
  * limit `integer`: The number of results to display on each page.
  * offset `integer`: The point in the list of results to begin displaying global suppressions.
  * on-behalf-of `string`

#### Output
* output `array`
  * items `object`
    * created **required** `integer`: A Unix timestamp indicating when the recipient was added to the global suppression list.
    * email **required** `string`: The email address of the recipient who is globally suppressed.

### teammates.get
This endpoint allows you to retrieve a list of all current teammates.

**Note:** The Response Header will include pagination info. For example:

link: ```<https://api.sendgrid.com/v3/teammates?limit=10&offset=0>; rel="first"; title="1", <https://api.sendgrid.com/v3/teammates?limit=10&offset=10>; rel="last"; title="2", <https://api.sendgrid.com/v3/teammates?limit=10&offset=0>; rel="prev"; title="1"```


```js
sendgrid.teammates.get({}, context)
```

#### Input
* input `object`
  * limit `integer`: Number of items to return
  * offset `integer`: Paging offset

#### Output
* output `object`
  * result `array`
    * items `object`
      * address `string`: (optional) Teammate's address
      * address2 `string`: (optional) Teammate's address
      * city `string`: (optional) Teammate's city
      * country `string`: (optional) Teammate's country
      * email `string`: Teammate's email
      * first_name `string`: Teammate's first name
      * is_admin `boolean`: Set to true if teammate has admin privileges
      * last_name `string`: Teammate's last name
      * phone `string`: (optional) Teammate's phone number
      * state `string`: (optional) Teammate's state
      * user_type `string` (values: admin, owner, teammate): Indicate the type of user: owner user, teammate admin user, or normal teammate
      * username `string`: Teammate's username
      * website `string`: (optional) Teammate's website
      * zip `string`: (optional) Teammate's zip

### teammates.post
This endpoint allows you to send a teammate invitation via email with a predefined set of scopes, or permissions.

**Note:** A teammate invite will expire after 7 days, but you may resend the invite at any time to reset the expiration date.

Essentials, [Legacy Lite](https://sendgrid.com/docs/Classroom/Basics/Billing/legacy_lite_plan.html), and Free Trial users may create up to one teammate per account. There are no limits for how many teammates a Pro or higher account may create.


```js
sendgrid.teammates.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * email **required** `string`: New teammate's email
    * is_admin **required** `boolean`: Set to true if teammate should be an admin user
    * scopes **required** `array`: Set to specify list of scopes that teammate should have. Should be empty if teammate is an admin.
      * items `string`

#### Output
* output `object`
  * email `string`: Teammate's email address
  * is_admin `boolean`: Set to true if teammate should have admin privileges
  * scopes `array`: Initial set of permissions to give to teammate if they accept the invite
  * token `string`: Token to identify invite

### teammates.pending.get
This endpoint allows you to retrieve a list of all pending teammate invitations.

**Note:** Each teammate invitation is valid for 7 days. Users may resend the invite to refresh the expiration date.


```js
sendgrid.teammates.pending.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * result `array`
    * items `object`
      * email `string`: Email address teammate invite will be sent to
      * expiration_date `integer`: timestamp indicates when invite will expire. Expiration is 7 days after invite creation
      * is_admin `boolean`: Set to true to indicate teammate should have the same set of permissions as parent user
      * scopes `array`: List of permissions to give teammate if they accept
        * items `string`
      * token `string`: Invitation token used to identify user

### teammates.pending.token.delete
This endpoint allows you to delete a pending teammate invite.


```js
sendgrid.teammates.pending.token.delete({
  "token": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: The token for the invite you want to delete.

#### Output
*Output schema unknown*

### teammates.pending.token.resend.post
This endpoint allows you to resend a teammate invite.

**Note:** Teammate invitations will expire after 7 days. Resending an invite will reset the expiration date.


```js
sendgrid.teammates.pending.token.resend.post({
  "token": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: The token for the invite that you want to resend.

#### Output
* output `object`
  * email `string`: Teammate's email address
  * is_admin `boolean`: Set to true if teammate should have admin privileges
  * scopes `array`: Initial set of permissions to give to teammate if they accept the invite
    * items `string`
  * token `string`: ID to identify invite

### teammates.username.delete
This endpoint allows you to delete a teammate.

**Only the parent user or an admin teammate can delete another teammate.**


```js
sendgrid.teammates.username.delete({
  "username": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: The username of the teammate that you want to retrieve.

#### Output
* output `object`
  * errors `array`
    * items `object`
      * field `string`
      * message `string`

### teammates.username.get
This endpoint allows you to retrieve a specific teammate by username.


```js
sendgrid.teammates.username.get({
  "username": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: The username of the teammate that you want to retrieve.

#### Output
* output `object`
  * address `string`: (optional) Teammate's address
  * address2 `string`: (optional) Teammate's address
  * city `string`: (optional) Teammate's city
  * country `string`: (optional) Teammate's country
  * email `string`: Teammate's email
  * first_name `string`: Teammate's first name
  * is_admin `boolean`: Set to true if teammate has admin privileges
  * last_name `string`: Teammate's last name
  * phone `string`: (optional) Teammate's phone number
  * scopes `array`: Scopes associated to teammate
  * state `string`: (optional) Teammate's state
  * user_type `string` (values: admin, owner, teammate): Indicate the type of user: account owner, teammate admin user, or normal teammate
  * username `string`: Teammate's username
  * website `string`: (optional) Teammate's website
  * zip `string`: (optional) Teammate's zip

### teammates.username.patch
This endpoint allows you to update a teammate’s permissions.

To turn a teammate into an admin, the request body should contain an `is_admin` set to `true`. Otherwise, set `is_admin` to `false` and pass in all the scopes that a teammate should have.

**Only the parent user or other admin teammates can update another teammate’s permissions.**

**Admin users can only update permissions.**


```js
sendgrid.teammates.username.patch({
  "username": ""
}, context)
```

#### Input
* input `object`
  * body `object`
    * is_admin **required** `boolean`: Set to True if this teammate should be promoted to an admin user. If True, scopes should be an empty array.
    * scopes **required** `array`: Provide list of scopes that should be given to teammate. If specifying list of scopes, is_admin should be set to False.
      * items `string`
  * username **required** `string`: The username of the teammate that you want to retrieve.

#### Output
* output `object`
  * address `string`: (optional) Teammate's address
  * address2 `string`: (optional) Teammate's address
  * city `string`: (optional) Teammate's city
  * country `string`: (optional) Teammate's country
  * email `string`: Teammate's email address
  * first_name `string`: Teammate's first name
  * is_admin `boolean`: Set to true if teammate has admin priveleges
  * last_name `string`: Teammate's last name
  * phone `string`: (optional) Teammate's phone number
  * scopes `array`: Scopes given to teammate
    * items `string`
  * state `string`: (optional) Teammate's state
  * user_type `string` (values: admin, owner, teammate): Indicate the type of user: owner user, teammate admin user, or normal teammate
  * username `string`: Teammate's username
  * website `string`: (optional) Teammate's website
  * zip `string`: (optional) Teammate's zip

### GET_templates
**This endpoint allows you to retrieve all transactional templates.**

Each user can create up to 300 different transactional templates. Transactional templates are specific to accounts and subusers. Templates created on a parent account will not be accessible from the subuser accounts.

Transactional templates are templates created specifically for transactional email and are not to be confused with [Marketing Campaigns templates](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/templates.html). For more information about transactional templates, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Transactional_Templates/index.html).


```js
sendgrid.GET_templates({}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`

#### Output
* output `array`
  * items [transactional_template](#transactional_template)

### POST_templates
**This endpoint allows you to create a transactional template.**

Each user can create up to 300 different transactional templates. Transactional templates are specific to accounts and subusers. Templates created on a parent account will not be accessible from the subuser accounts.

Transactional templates are templates created specifically for transactional email and are not to be confused with [Marketing Campaigns templates](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/templates.html). For more information about transactional templates, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Transactional_Templates/index.html).


```js
sendgrid.POST_templates({}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`
  * body `object`
    * name **required** `string`: The name for the new transactional template.

#### Output
* output [transactional_template](#transactional_template)

### templates.template_id.delete
**This endpoint allows you to delete a transactional template.**

Each user can create up to 300 different transactional templates. Transactional templates are specific to accounts and subusers. Templates created on a parent account will not be accessible from the subuser accounts.

Transactional templates are templates created specifically for transactional email and are not to be confused with [Marketing Campaigns templates](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/templates.html). For more information about transactional templates, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Transactional_Templates/index.html).


```js
sendgrid.templates.template_id.delete({
  "template_id": ""
}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`
  * template_id **required** `string`: The id of the transactional template you want to retrieve.

#### Output
* output `object`

### templates.template_id.get
**This endpoint allows you to retrieve a single transactional template.**

Each user can create up to 300 different transactional templates. Transactional templates are specific to accounts and subusers. Templates created on a parent account will not be accessible from the subuser accounts.

Transactional templates are templates created specifically for transactional email and are not to be confused with [Marketing Campaigns templates](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/templates.html). For more information about transactional templates, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Transactional_Templates/index.html).


```js
sendgrid.templates.template_id.get({
  "template_id": ""
}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`
  * template_id **required** `string`: The id of the transactional template you want to retrieve.

#### Output
* output [transactional_template](#transactional_template)

### templates.template_id.patch
**This endpoint allows you to edit a transactional template.**

Each user can create up to 300 different transactional templates. Transactional templates are specific to accounts and subusers. Templates created on a parent account will not be accessible from the subuser accounts.

Transactional templates are templates created specifically for transactional email and are not to be confused with [Marketing Campaigns templates](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/templates.html). For more information about transactional templates, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Transactional_Templates/index.html).


```js
sendgrid.templates.template_id.patch({
  "template_id": ""
}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`
  * body `object`
    * name `string`: The name of the transactional template.
  * template_id **required** `string`: The id of the transactional template you want to retrieve.

#### Output
* output [transactional_template](#transactional_template)

### templates.template_id.versions.post
**This endpoint allows you to create a new version of a template.**

Each transactional template can have multiple versions, each version with its own subject and content. Each user can have up to 300 versions across across all templates.

For more information about transactional templates, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Transactional_Templates/index.html).


```js
sendgrid.templates.template_id.versions.post({
  "template_id": ""
}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`
  * body [transactional_template_version](#transactional_template_version)
  * template_id **required** `string`

#### Output
* output `object`
  * Transactional Template Version [transactional_template_version](#transactional_template_version)
  * id **required** `string`: The id of the new transactional template version.
  * updated_at **required** `string`: The date and time that this transactional template version was updated.

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

#### Input
* input `object`
  * on-behalf-of `string`
  * template_id **required** `string`
  * version_id **required** `string`

#### Output
*Output schema unknown*

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

#### Input
* input `object`
  * on-behalf-of `string`
  * template_id **required** `string`
  * version_id **required** `string`

#### Output
* output `object`
  * Transactional Template Version [transactional_template_version](#transactional_template_version)
  * id **required** `string`: The ID of the template version.
  * updated_at **required** `string`: The date and time that the template version was last updated.

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

#### Input
* input `object`
  * on-behalf-of `string`
  * body `object`
    * active `integer`: Indicates if the template version is active.
    * html_content `string`: The HTML content of the template version.
    * name `string`: The name of the template version.
    * plain_content `string`: The text/plain content of the template version.
    * subject `string`: The subject of the template version.
  * template_id **required** `string`
  * version_id **required** `string`

#### Output
* output `object`
  * Transactional Template Version [transactional_template_version](#transactional_template_version)
  * id **required** `string`: The ID of the template version.
  * updated_at **required** `string`: The date and time that the template version was last updated.

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

#### Input
* input `object`
  * on-behalf-of `string`
  * template_id **required** `string`
  * version_id **required** `string`

#### Output
* output `object`
  * Transactional Template Version [transactional_template_version](#transactional_template_version)
  * id **required** `string`: The ID of the template version.
  * updated_at **required** `string`: The date and time that the version was last updated.

### GET_tracking_settings
**This endpoint allows you to retrieve a list of all tracking settings that you can enable on your account.**

You can track a variety of the actions your recipients may take when interacting with your emails including opening your emails, clicking on links in your emails, and subscribing to (or unsubscribing from) your emails.

For more information about tracking, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/tracking.html).


```js
sendgrid.GET_tracking_settings({}, context)
```

#### Input
* input `object`
  * limit `integer`: The number of settings to return.
  * offset `integer`: Where in the list of results you want to begin retrieving settings.
  * on-behalf-of `string`

#### Output
* output `object`
  * result `array`: The list of all tracking settings.
    * items `object`
      * description `string`: A description about the event that is being tracked.
      * enabled `boolean`: Indicates if this tracking setting is currently enabled.
      * name `string`: The name of the event being tracked.
      * title `string`: The title of the tracking setting.

### tracking_settings.click.get
**This endpoint allows you to retrieve your current click tracking setting.**

You can track a variety of the actions your recipients may take when interacting with your emails including opening your emails, clicking on links in your emails, and subscribing to (or unsubscribing from) your emails.

For more information about tracking, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/tracking.html).


```js
sendgrid.tracking_settings.click.get({}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`

#### Output
* output `object`
  * enable_text **required** `boolean`: Indicates if click tracking is enabled for plain text emails.
  * enabled **required** `boolean`: Indicates if click tracking is enabled or disabled.

### tracking_settings.click.patch
**This endpoint allows you to change your current click tracking setting. You can enable, or disable, click tracking using this endpoint.**

You can track a variety of the actions your recipients may take when interacting with your emails including opening your emails, clicking on links in your emails, and subscribing to (or unsubscribing from) your emails.

For more information about tracking, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/tracking.html).


```js
sendgrid.tracking_settings.click.patch({}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`
  * body `object`
    * enabled `boolean`: The setting you want to use for click tracking.

#### Output
* output `object`
  * enable_text **required** `boolean`: Indicates if click tracking is enabled for plain text emails
  * enabled **required** `boolean`: The new setting new setting for click tracking.

### tracking_settings.google_analytics.get
**This endpoint allows you to retrieve your current setting for Google Analytics.**

For more information about using Google Analytics, please refer to [Google’s URL Builder](https://support.google.com/analytics/answer/1033867?hl=en) and their article on ["Best Practices for Campaign Building"](https://support.google.com/analytics/answer/1037445).

We default the settings to Google’s recommendations. For more information, see [Google Analytics Demystified](https://sendgrid.com/docs/Classroom/Track/Collecting_Data/google_analytics_demystified_ga_statistics_vs_sg_statistics.html).

You can track a variety of the actions your recipients may take when interacting with your emails including opening your emails, clicking on links in your emails, and subscribing to (or unsubscribing from) your emails.

For more information about tracking, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/tracking.html).


```js
sendgrid.tracking_settings.google_analytics.get({}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`

#### Output
* output [google_analytics_settings](#google_analytics_settings)

### tracking_settings.google_analytics.patch
**This endpoint allows you to update your current setting for Google Analytics.**

For more information about using Google Analytics, please refer to [Google’s URL Builder](https://support.google.com/analytics/answer/1033867?hl=en) and their article on ["Best Practices for Campaign Building"](https://support.google.com/analytics/answer/1037445).

We default the settings to Google’s recommendations. For more information, see [Google Analytics Demystified](https://sendgrid.com/docs/Classroom/Track/Collecting_Data/google_analytics_demystified_ga_statistics_vs_sg_statistics.html).

You can track a variety of the actions your recipients may take when interacting with your emails including opening your emails, clicking on links in your emails, and subscribing to (or unsubscribing from) your emails.

For more information about tracking, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/tracking.html).


```js
sendgrid.tracking_settings.google_analytics.patch({}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`
  * body [google_analytics_settings](#google_analytics_settings)

#### Output
* output [google_analytics_settings](#google_analytics_settings)

### tracking_settings.open.get
**This endpoint allows you to retrieve your current settings for open tracking.**

Open Tracking adds an invisible image at the end of the email which can track email opens. If the email recipient has images enabled on their email client, a request to SendGrid’s server for the invisible image is executed and an open event is logged. These events are logged in the Statistics portal, Email Activity interface, and are reported by the Event Webhook.

You can track a variety of the actions your recipients may take when interacting with your emails including opening your emails, clicking on links in your emails, and subscribing to (or unsubscribing from) your emails.

For more information about tracking, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/tracking.html).


```js
sendgrid.tracking_settings.open.get({}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`

#### Output
* output `object`
  * enabled **required** `boolean`: Indicates if open tracking is enabled.

### tracking_settings.open.patch
**This endpoint allows you to update your current settings for open tracking.**

Open Tracking adds an invisible image at the end of the email which can track email opens. If the email recipient has images enabled on their email client, a request to SendGrid’s server for the invisible image is executed and an open event is logged. These events are logged in the Statistics portal, Email Activity interface, and are reported by the Event Webhook.

You can track a variety of the actions your recipients may take when interacting with your emails including opening your emails, clicking on links in your emails, and subscribing to (or unsubscribing from) your emails.

For more information about tracking, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/tracking.html).


```js
sendgrid.tracking_settings.open.patch({}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`
  * body `object`
    * enabled `boolean`: The new status that you want to set for open tracking.

#### Output
* output `object`
  * enabled **required** `boolean`: Indicates if open tracking is enabled.

### tracking_settings.subscription.get
**This endpoint allows you to retrieve your current settings for subscription tracking.**

Subscription tracking adds links to the bottom of your emails that allows your recipients to subscribe to, or unsubscribe from, your emails.

You can track a variety of the actions your recipients may take when interacting with your emails including opening your emails, clicking on links in your emails, and subscribing to (or unsubscribing from) your emails.

For more information about tracking, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/tracking.html).


```js
sendgrid.tracking_settings.subscription.get({}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`

#### Output
* output [subscription_tracking_settings](#subscription_tracking_settings)

### tracking_settings.subscription.patch
**This endpoint allows you to update your current settings for subscription tracking.**

Subscription tracking adds links to the bottom of your emails that allows your recipients to subscribe to, or unsubscribe from, your emails.

You can track a variety of the actions your recipients may take when interacting with your emails including opening your emails, clicking on links in your emails, and subscribing to (or unsubscribing from) your emails.

For more information about tracking, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/tracking.html).


```js
sendgrid.tracking_settings.subscription.patch({}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`
  * body [subscription_tracking_settings](#subscription_tracking_settings)

#### Output
* output [subscription_tracking_settings](#subscription_tracking_settings)

### user.account.get
**This endpoint allows you to retrieve your user account details.**

Your user's account information includes the user's account type and reputation.

Keeping your user profile up to date is important. This will help SendGrid to verify who you are as well as contact you should we need to.

For more information about your user profile:

* [SendGrid Account Settings](https://sendgrid.com/docs/User_Guide/Settings/account.html)


```js
sendgrid.user.account.get({}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`

#### Output
* output `object`
  * reputation **required** `number`: The sender reputation for this user.
  * type **required** `string` (values: free, paid): The type of account for this user.

### user.credits.get
**This endpoint allows you to retrieve the current credit balance for your account.**

Your monthly credit allotment limits the number of emails you may send before incurring overage charges. For more information about credits and billing, please visit our [Clssroom](https://sendgrid.com/docs/Classroom/Basics/Billing/billing_info_and_faqs.html).


```js
sendgrid.user.credits.get({}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`

#### Output
* output `object`
  * last_reset **required** `string`: The date that your credit balance was last reset.
  * next_reset **required** `string`: The next date that your credit balance will be reset.
  * overage **required** `integer`: The number of overdrawn credits for your account.
  * remain **required** `integer`: The remaining number of credits available on your account.
  * reset_frequency **required** `string`: The frequency at which your credit balance will be reset.
  * total **required** `integer`: The total number of credits assigned to your account.
  * used **required** `integer`: The number of credits that you have used.

### user.email.get
**This endpoint allows you to retrieve the email address currently on file for your account.**

Keeping your user profile up to date is important. This will help SendGrid to verify who you are as well as contact you should we need to.

For more information about your user profile:

* [SendGrid Account Settings](https://sendgrid.com/docs/User_Guide/Settings/account.html)


```js
sendgrid.user.email.get({}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`

#### Output
* output `object`
  * email **required** `string`: The email address currently on file for your account.

### user.email.put
**This endpoint allows you to update the email address currently on file for your account.**

Keeping your user profile up to date is important. This will help SendGrid to verify who you are as well as contact you should we need to.

For more information about your user profile:

* [SendGrid Account Settings](https://sendgrid.com/docs/User_Guide/Settings/account.html)


```js
sendgrid.user.email.put({}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`
  * body `object`
    * email `string`: The new email address that you would like to use for your account.

#### Output
* output `object`
  * email **required** `string`: The current email address on file for your account.

### user.password.put
**This endpoint allows you to update your password.**

Keeping your user profile up to date is important. This will help SendGrid to verify who you are as well as contact you should we need to.

For more information about your user profile:

* [SendGrid Account Settings](https://sendgrid.com/docs/User_Guide/Settings/account.html)


```js
sendgrid.user.password.put({}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`
  * body `object`
    * new_password **required** `string`: The new password you would like to use for your account.
    * old_password **required** `string`: The old password for your account.

#### Output
* output `object`

### user.profile.get
Keeping your user profile up to date is important. This will help SendGrid to verify who you are as well as contact you should we need to.

For more information about your user profile:

* [SendGrid Account Settings](https://sendgrid.com/docs/User_Guide/Settings/account.html)


```js
sendgrid.user.profile.get({}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`

#### Output
* output `object`
  * address **required** `string`: The user's address.
  * address2 `string`: The second line of the user's address.
  * city **required** `string`: The user's city.
  * company **required** `string`: The name of the user's company.
  * country **required** `string`: The user's country.
  * first_name **required** `string`: The user's first name.
  * last_name **required** `string`: The user's last name.
  * phone **required** `string`: The user's phone number.
  * state **required** `string`: The user's state.
  * website **required** `string`: The user's website URL.
  * zip **required** `string`: The user's zip code.

### user.profile.patch
**This endpoint allows you to update your current profile details.**

Keeping your user profile up to date is important. This will help SendGrid to verify who you are as well as contact you should we need to.

For more information about your user profile:

* [SendGrid Account Settings](https://sendgrid.com/docs/User_Guide/Settings/account.html)

It should be noted that any one or more of the parameters can be updated via the PATCH /user/profile endpoint. The only requirement is that you include at least one when you PATCH.


```js
sendgrid.user.profile.patch({}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`
  * body [user_profile](#user_profile)

#### Output
* output [user_profile](#user_profile)

### user.scheduled_sends.get
**This endpoint allows you to retrieve all cancel/paused scheduled send information.**

The Cancel Scheduled Sends feature allows the customer to cancel a scheduled send based on a Batch ID included in the SMTPAPI header. Scheduled sends cancelled less than 10 minutes before the scheduled time are not guaranteed to be cancelled.


```js
sendgrid.user.scheduled_sends.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [user_scheduled_send_status](#user_scheduled_send_status)

### user.scheduled_sends.post
**This endpoint allows you to cancel or pause an email that has been scheduled to be sent.**

If the maximum number of cancellations/pauses are added, HTTP 400 will
be returned.

The Cancel Scheduled Sends feature allows the customer to cancel a scheduled send based on a Batch ID included in the SMTPAPI header. Scheduled sends cancelled less than 10 minutes before the scheduled time are not guaranteed to be cancelled.


```js
sendgrid.user.scheduled_sends.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * batch_id **required** `string`: The batch ID is the identifier that your scheduled mail sends share.
    * status **required** `string` (values: pause, cancel): The status of the send you would like to implement. This can be pause or cancel. To delete a pause or cancel status see DELETE /v3/user/scheduled_sends/{batch_id}

#### Output
* output [user_scheduled_send_status](#user_scheduled_send_status)

### user.scheduled_sends.batch_id.delete
**This endpoint allows you to delete the cancellation/pause of a scheduled send.**

The Cancel Scheduled Sends feature allows the customer to cancel a scheduled send based on a Batch ID included in the SMTPAPI header. Scheduled sends cancelled less than 10 minutes before the scheduled time are not guaranteed to be cancelled.


```js
sendgrid.user.scheduled_sends.batch_id.delete({
  "batch_id": ""
}, context)
```

#### Input
* input `object`
  * batch_id **required** `string`

#### Output
*Output schema unknown*

### user.scheduled_sends.batch_id.get
**This endpoint allows you to retrieve the cancel/paused scheduled send information for a specific `batch_id`.**

The Cancel Scheduled Sends feature allows the customer to cancel a scheduled send based on a Batch ID included in the SMTPAPI header. Scheduled sends cancelled less than 10 minutes before the scheduled time are not guaranteed to be cancelled.


```js
sendgrid.user.scheduled_sends.batch_id.get({
  "batch_id": ""
}, context)
```

#### Input
* input `object`
  * batch_id **required** `string`

#### Output
* output `array`
  * items [user_scheduled_send_status](#user_scheduled_send_status)

### user.scheduled_sends.batch_id.patch
**This endpoint allows you to update the status of a scheduled send for the given `batch_id`.**

The Cancel Scheduled Sends feature allows the customer to cancel a scheduled send based on a Batch ID included in the SMTPAPI header. Scheduled sends cancelled less than 10 minutes before the scheduled time are not guaranteed to be cancelled.


```js
sendgrid.user.scheduled_sends.batch_id.patch({
  "batch_id": ""
}, context)
```

#### Input
* input `object`
  * body `object`
    * status **required** `string` (values: cancel, pause): The status you would like the scheduled send to have.
  * batch_id **required** `string`

#### Output
*Output schema unknown*

### user.settings.enforced_tls.get
**This endpoint allows you to retrieve your current Enforced TLS settings.**

The Enforced TLS settings specify whether or not the recipient is required to support TLS or have a valid certificate. See the [SMTP Ports User Guide](https://sendgrid.com/docs/Classroom/Basics/Email_Infrastructure/smtp_ports.html) for more information on opportunistic TLS.

**Note:** If either setting is enabled and the recipient does not support TLS or have a valid certificate, we drop the message and send a block event with “TLS required but not supported” as the description.


```js
sendgrid.user.settings.enforced_tls.get({}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`

#### Output
* output `object`
  * require_tls **required** `boolean`: Indicates if the recipient is required to support TLS.
  * require_valid_cert **required** `boolean`: Indicates if the recipient is required to have a valid certificate.

### user.settings.enforced_tls.patch
**This endpoint allows you to update your current Enforced TLS settings.**

The Enforced TLS settings specify whether or not the recipient is required to support TLS or have a valid certificate. See the [SMTP Ports User Guide](https://sendgrid.com/docs/Classroom/Basics/Email_Infrastructure/smtp_ports.html) for more information on opportunistic TLS.

**Note:** If either setting is enabled and the recipient does not support TLS or have a valid certificate, we drop the message and send a block event with “TLS required but not supported” as the description.


```js
sendgrid.user.settings.enforced_tls.patch({}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`
  * body `object`
    * require_tls `boolean`: Indicates if you want to require your recipients to support TLS. 
    * require_valid_cert `boolean`: Indicates if you want to require your recipients to have a valid certificate.

#### Output
* output `object`
  * require_tls **required** `boolean`: Indicates if your recipients are required to support TLS.
  * require_valid_cert **required** `boolean`: Indicates if your recipients are required to have a valid certificate.

### user.username.get
**This endpoint allows you to retrieve your current account username.**

Keeping your user profile up to date is important. This will help SendGrid to verify who you are as well as contact you should we need to.

For more information about your user profile:

* [SendGrid Account Settings](https://sendgrid.com/docs/User_Guide/Settings/account.html)


```js
sendgrid.user.username.get({}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`

#### Output
* output `object`
  * user_id **required** `integer`: The user ID for your account.
  * username **required** `string`: Your account username.

### user.username.put
**This endpoint allows you to update the username for your account.**

Keeping your user profile up to date is important. This will help SendGrid to verify who you are as well as contact you should we need to.

For more information about your user profile:

* [SendGrid Account Settings](https://sendgrid.com/docs/User_Guide/Settings/account.html)


```js
sendgrid.user.username.put({}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`
  * body `object`
    * username `string`: The new username you would like to use for your account.

#### Output
* output `object`
  * username **required** `string`: The current username on file for your account.

### user.webhooks.event.settings.get
**This endpoint allows you to retrieve your current event webhook settings.**

If an event type is marked as `true`, then the event webhook will include information about that event.

SendGrid’s Event Webhook will notify a URL of your choice via HTTP POST with information about events that occur as SendGrid processes your email.

Common uses of this data are to remove unsubscribes, react to spam reports, determine unengaged recipients, identify bounced email addresses, or create advanced analytics of your email program.


```js
sendgrid.user.webhooks.event.settings.get({}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`

#### Output
* output [event_webhook_settings](#event_webhook_settings)

### user.webhooks.event.settings.patch
**This endpoint allows you to update your current event webhook settings.**

If an event type is marked as `true`, then the event webhook will include information about that event.

SendGrid’s Event Webhook will notify a URL of your choice via HTTP POST with information about events that occur as SendGrid processes your email.

Common uses of this data are to remove unsubscribes, react to spam reports, determine unengaged recipients, identify bounced email addresses, or create advanced analytics of your email program.


```js
sendgrid.user.webhooks.event.settings.patch({}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`
  * body [event_webhook_settings](#event_webhook_settings)

#### Output
* output [event_webhook_settings](#event_webhook_settings)

### user.webhooks.event.test.post
**This endpoint allows you to test your event webhook by sending a fake event notification post to the provided URL.**

SendGrid’s Event Webhook will notify a URL of your choice via HTTP POST with information about events that occur as SendGrid processes your email.

Common uses of this data are to remove unsubscribes, react to spam reports, determine unengaged recipients, identify bounced email addresses, or create advanced analytics of your email program.


```js
sendgrid.user.webhooks.event.test.post({}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`
  * body `object`
    * url `string`: The URL where you would like the test notification to be sent.

#### Output
* output `object`

### user.webhooks.parse.settings.get
**This endpoint allows you to retrieve all of your current inbound parse settings.**

The inbound parse webhook allows you to have incoming emails parsed, extracting some or all of the contnet, and then have that content POSTed by SendGrid to a URL of your choosing. For more information, please see our [User Guide](https://sendgrid.com/docs/API_Reference/Webhooks/parse.html).


```js
sendgrid.user.webhooks.parse.settings.get({}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`

#### Output
* output `object`
  * result `array`: The list of your current inbound parse settings.
    * items [parse-setting](#parse-setting)

### user.webhooks.parse.settings.post
**This endpoint allows you to create a new inbound parse setting.**

The inbound parse webhook allows you to have incoming emails parsed, extracting some or all of the content, and then have that content POSTed by SendGrid to a URL of your choosing. For more information, please see our [User Guide](https://sendgrid.com/docs/API_Reference/Webhooks/parse.html).


```js
sendgrid.user.webhooks.parse.settings.post({}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`
  * body [parse-setting](#parse-setting)

#### Output
* output [parse-setting](#parse-setting)

### user.webhooks.parse.settings.hostname.delete
**This endpoint allows you to delete a specific inbound parse setting.**

The inbound parse webhook allows you to have incoming emails parsed, extracting some or all of the contnet, and then have that content POSTed by SendGrid to a URL of your choosing. For more information, please see our [User Guide](https://sendgrid.com/docs/API_Reference/Webhooks/parse.html).


```js
sendgrid.user.webhooks.parse.settings.hostname.delete({
  "hostname": ""
}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`
  * hostname **required** `string`: The hostname associated with the inbound parse setting that you would like to retrieve.

#### Output
* output `object`

### user.webhooks.parse.settings.hostname.get
**This endpoint allows you to retrieve a specific inbound parse setting.**

The inbound parse webhook allows you to have incoming emails parsed, extracting some or all of the contnet, and then have that content POSTed by SendGrid to a URL of your choosing. For more information, please see our [User Guide](https://sendgrid.com/docs/API_Reference/Webhooks/parse.html).


```js
sendgrid.user.webhooks.parse.settings.hostname.get({
  "hostname": ""
}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`
  * hostname **required** `string`: The hostname associated with the inbound parse setting that you would like to retrieve.

#### Output
* output [parse-setting](#parse-setting)

### user.webhooks.parse.settings.hostname.patch
**This endpoint allows you to update a specific inbound parse setting.**

The inbound parse webhook allows you to have incoming emails parsed, extracting some or all of the contnet, and then have that content POSTed by SendGrid to a URL of your choosing. For more information, please see our [User Guide](https://sendgrid.com/docs/API_Reference/Webhooks/parse.html).


```js
sendgrid.user.webhooks.parse.settings.hostname.patch({
  "hostname": ""
}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`
  * body [parse-setting](#parse-setting)
  * hostname **required** `string`: The hostname associated with the inbound parse setting that you would like to retrieve.

#### Output
* output [parse-setting](#parse-setting)

### user.webhooks.parse.stats.get
**This endpoint allows you to retrieve the statistics for your Parse Webhook useage.**

SendGrid's Inbound Parse Webhook allows you to parse the contents and attachments of incomming emails. The Parse API can then POST the parsed emails to a URL that you specify. The Inbound Parse Webhook cannot parse messages greater than 20MB in size, including all attachments.

There are a number of pre-made integrations for the SendGrid Parse Webhook which make processing events easy. You can find these integrations in the [Library Index](https://sendgrid.com/docs/Integrate/libraries.html#-Webhook-Libraries).


```js
sendgrid.user.webhooks.parse.stats.get({
  "start_date": ""
}, context)
```

#### Input
* input `object`
  * limit `string`: The number of statistics to return on each page.
  * offset `string`: The number of statistics to skip.
  * aggregated_by `string` (values: day, week, month): How you would like the statistics to by grouped. 
  * start_date **required** `string`: The starting date of the statistics you want to retrieve. Must be in the format YYYY-MM-DD
  * end_date `string`: The end date of the statistics you want to retrieve. Must be in the format YYYY-MM-DD
  * on-behalf-of `string`

#### Output
* output `array`
  * items `object`
    * date **required** `string`: The date that the stats were collected.
    * stats **required** `array`: The Parse Webhook usage statistics.
      * items `object`
        * metrics `object`
          * received **required** `number`: The number of emails received and parsed by the Parse Webhook.

### whitelabel.domains.get
**This endpoint allows you to retrieve a list of all domain whitelabels you have created.**

A domain whitelabel allows you to remove the “via” or “sent on behalf of” message that your recipients see when they read your emails. Whitelabeling a domain allows you to replace sendgrid.net with your personal sending domain. You will be required to create a subdomain so that SendGrid can generate the DNS records which you must give to your host provider. If you choose to use Automated Security, SendGrid will provide you with 3 CNAME records. If you turn Automated Security off, you will be given 2 TXT records and 1 MX record.

For more information on whitelabeling, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/Whitelabel/index.html)


```js
sendgrid.whitelabel.domains.get({}, context)
```

#### Input
* input `object`
  * limit `integer`: Number of domains to return.
  * offset `integer`: Paging offset.
  * exclude_subusers `boolean`: Exclude subuser domains from the result.
  * username `string`: The username associated with a whitelabel.
  * domain `string`: Search for domain whitelabels that match the given domain.
  * on-behalf-of `string`

#### Output
* output `array`
  * items `object`
    * automatic_security **required** `boolean`: Indicates if this whitelabel uses automated security.
    * custom_spf **required** `boolean`: Indicates if this whitelabel has custom SPF.
    * default **required** `boolean`: Indicates if this whitelabel has been set as the default whitelabel.
    * dns **required** `object`: The DNS records for this whitelabel that are used for authenticating the sending domain.
      * dkim `object`: The DNS record used when creating the DKIM signature.
        * host `string`: The domain that these DNS records will be applied to.
        * data `string`: The DNS record.
        * type `string` (values: cname, mx, txt): The type of DNS record.
        * valid `boolean`: Indicates if this DNS record is valid.
      * mail_server `object`: Designates which mail server is responsible for accepting messages from a domain.
        * host `string`: The domain sending the messages.
        * data `string`: The mail server responsible for accepting messages.
        * type `string`: The type of DNS record.
        * valid `boolean`: Indicates if this is a valid DNS record with no conflicts.
      * subdomain_spf `object`: The SPF record for the subdomain used to create this whitelabel.
        * host `string`: The domain that this SPF record will be used to authenticate.
        * data `string`: The SPF record.
        * type `string`: The type of data in the SPF record.
        * valid `boolean`: Indicates if the SPF record is valid.
    * domain **required** `string`: The domain that this whitelabel was created for.
    * id **required** `number`: The ID of the domain whitelabel.
    * ips **required** `array`: The IPs that will be included in the custom SPF record.
      * items `string`
    * legacy **required** `boolean`: Indicates if this is whitelabel was created with the legacy whitelabel tool.
    * subdomain **required** `string`: The subdomain created for this domain whitelabel.
    * user_id **required** `number`: The ID of the user that this whitelabel will be associated with.
    * username **required** `string`: The username that this whitelabel is associated with.
    * valid **required** `boolean`: Indicates if this is a valid whitelabel or not.

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

#### Input
* input `object`
  * on-behalf-of `string`
  * body `object`
    * automatic_security `boolean`: Whether to allow SendGrid to manage your SPF records, DKIM keys, and DKIM key rotation.
    * custom_spf `boolean`: Specify whether to use a custom SPF or allow SendGrid to manage your SPF. This option is only available to domain whitelabels setup for manual security.
    * default `boolean`: Whether to use this whitelabel as the fallback if no domain whitelabels match the sender's domain.
    * domain **required** `string`: Domain being whitelabeled.
    * ips `array`: The IP addresses that will be included in the custom SPF record for this whitelabel.
      * items `string`
    * subdomain **required** `string`: The subdomain to use for this domain whitelabel.
    * username `string`: The username that this whitelabel will be associated with.

#### Output
* output [whitelabel_domain](#whitelabel_domain)

### whitelabel.domains.default.get
**This endpoint allows you to retrieve the default whitelabel for a domain.**

A domain whitelabel allows you to remove the “via” or “sent on behalf of” message that your recipients see when they read your emails. Whitelabeling a domain allows you to replace sendgrid.net with your personal sending domain. You will be required to create a subdomain so that SendGrid can generate the DNS records which you must give to your host provider. If you choose to use Automated Security, SendGrid will provide you with 3 CNAME records. If you turn Automated Security off, you will be given 2 TXT records and 1 MX record.

For more information on whitelabeling, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/Whitelabel/index.html)

## URI Parameters
| URI Parameter   | Type   | Description  |
|---|---|---|
| domain | string  |The domain to find a default domain whitelabel for. |


```js
sendgrid.whitelabel.domains.default.get({}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`

#### Output
* output [whitelabel_domain_spf](#whitelabel_domain_spf)

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
sendgrid.whitelabel.domains.subuser.delete({}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`

#### Output
* output `object`

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
sendgrid.whitelabel.domains.subuser.get({}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`

#### Output
* output [whitelabel_domain_spf](#whitelabel_domain_spf)

### whitelabel.domains.domain_id.delete
**This endpoint allows you to delete a domain whitelabel.**

A domain whitelabel allows you to remove the “via” or “sent on behalf of” message that your recipients see when they read your emails. Whitelabeling a domain allows you to replace sendgrid.net with your personal sending domain. You will be required to create a subdomain so that SendGrid can generate the DNS records which you must give to your host provider. If you choose to use Automated Security, SendGrid will provide you with 3 CNAME records. If you turn Automated Security off, you will be given 2 TXT records and 1 MX record.

For more information on whitelabeling, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/Whitelabel/index.html)


```js
sendgrid.whitelabel.domains.domain_id.delete({
  "domain_id": ""
}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`
  * domain_id **required** `string`

#### Output
* output `object`

### whitelabel.domains.domain_id.get
**This endpoint allows you to retrieve a specific domain whitelabel.**

A domain whitelabel allows you to remove the “via” or “sent on behalf of” message that your recipients see when they read your emails. Whitelabeling a domain allows you to replace sendgrid.net with your personal sending domain. You will be required to create a subdomain so that SendGrid can generate the DNS records which you must give to your host provider. If you choose to use Automated Security, SendGrid will provide you with 3 CNAME records. If you turn Automated Security off, you will be given 2 TXT records and 1 MX record.

For more information on whitelabeling, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/Whitelabel/index.html)


```js
sendgrid.whitelabel.domains.domain_id.get({
  "domain_id": ""
}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`
  * domain_id **required** `string`

#### Output
* output [whitelabel_domain](#whitelabel_domain)

### whitelabel.domains.domain_id.patch
**This endpoint allows you to update the settings for a domain whitelabel.**

A domain whitelabel allows you to remove the “via” or “sent on behalf of” message that your recipients see when they read your emails. Whitelabeling a domain allows you to replace sendgrid.net with your personal sending domain. You will be required to create a subdomain so that SendGrid can generate the DNS records which you must give to your host provider. If you choose to use Automated Security, SendGrid will provide you with 3 CNAME records. If you turn Automated Security off, you will be given 2 TXT records and 1 MX record.

For more information on whitelabeling, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/Whitelabel/index.html)


```js
sendgrid.whitelabel.domains.domain_id.patch({
  "domain_id": ""
}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`
  * body `object`
    * custom_spf `boolean`: Indicates whether to generate a custom SPF record for manual security.
    * default `boolean`: Indicates whether this domain whitelabel should be considered the default.
  * domain_id **required** `string`

#### Output
* output `object`
  * custom_spf false `boolean`: Indicates whether to generate a custom SPF record for manual security.  Defaults to false.
  * default false `boolean`: Inidcates whether this domain whitelabel should be considered the default.  Defaults to false.

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

#### Input
* input `object`
  * on-behalf-of `string`
  * body `object`
    * username **required** `string`: Username to associate with the domain whitelabel.
  * domain_id **required** `string`

#### Output
* output [whitelabel_domain_spf](#whitelabel_domain_spf)

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

#### Input
* input `object`
  * on-behalf-of `string`
  * body `object`
    * ip **required** `string`: IP to associate with the domain. Used for manually specifying IPs for custom SPF.
  * id **required** `string`

#### Output
* output [whitelabel_domain_spf](#whitelabel_domain_spf)

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

#### Input
* input `object`
  * on-behalf-of `string`
  * id **required** `string`
  * ip **required** `string`

#### Output
* output [whitelabel_domain_spf](#whitelabel_domain_spf)

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

#### Input
* input `object`
  * on-behalf-of `string`
  * id **required** `string`

#### Output
* output `object`
  * id `integer`: The ID of the domain whitelabel.
  * valid `boolean`: Indicates if this is a valid whitelabel.
  * validation_results `object`: The individual DNS records that are checked when validating, including the reason for any invalid DNS records.
    * dkim1 `object`: A DNS record for this domain whitelabel.
      * valid `boolean`: Indicates if the DNS record is valid.
    * dkim2 `object`: A DNS record for this whitelabel.
      * valid `boolean`: Indicates if the DNS record is valid.
    * mail_cname `object`: The CNAME record for the domain whitelabel.
      * reason `string`: The reason this record is invalid.
      * valid `boolean`: Indicates if this DNS record is valid.
    * spf `object`: The SPF record for the whitelabel.
      * valid `boolean`: Indicates if the SPF record is valid.

### whitelabel.ips.get
**This endpoint allows you to retrieve all of the IP whitelabels that have been createdy by this account.**

You may include a search key by using the "ip" parameter. This enables you to perform a prefix search for a given IP segment (e.g. "192.").

A IP whitelabel consists of a subdomain and domain that will be used to generate a reverse DNS record for a given IP. Once SendGrid has verified that the appropriate A record for the IP has been created, the appropriate reverse DNS record for the IP is generated.

For more information, please see our [User Guide](https://sendgrid.com/docs/API_Reference/Web_API_v3/Whitelabel/ips.html).


```js
sendgrid.whitelabel.ips.get({}, context)
```

#### Input
* input `object`
  * limit `integer`: The number of results to retrieve.
  * offset `integer`: The point in the list of results to begin retrieving IPs from.
  * ip `string`: The IP segment that you would like to use in a prefix search.
  * on-behalf-of `string`

#### Output
* output `array`
  * items [ip_whitelabel](#ip_whitelabel)

### whitelabel.ips.post
**This endpoint allows you to create an IP whitelabel.**

When creating an IP whitelable, you should use the same subdomain that you used when you created a domain whitelabel.

A IP whitelabel consists of a subdomain and domain that will be used to generate a reverse DNS record for a given IP. Once SendGrid has verified that the appropriate A record for the IP has been created, the appropriate reverse DNS record for the IP is generated.

For more information, please see our [User Guide](https://sendgrid.com/docs/API_Reference/Web_API_v3/Whitelabel/ips.html).


```js
sendgrid.whitelabel.ips.post({}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`
  * body `object`
    * domain **required** `string`: The root, or sending, domain that will be used to send message from the IP.
    * ip **required** `string`: The IP address that you want to whitelabel.
    * subdomain **required** `string`: The subdomain that will be used to send emails from the IP. Should be the same as the subdomain used for your domain whitelabel.

#### Output
* output [ip_whitelabel](#ip_whitelabel)

### whitelabel.ips.id.delete
**This endpoint allows you to delete an IP whitelabel.**

A IP whitelabel consists of a subdomain and domain that will be used to generate a reverse DNS record for a given IP. Once SendGrid has verified that the appropriate A record for the IP has been created, the appropriate reverse DNS record for the IP is generated.

For more information, please see our [User Guide](https://sendgrid.com/docs/API_Reference/Web_API_v3/Whitelabel/ips.html).


```js
sendgrid.whitelabel.ips.id.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`
  * id **required** `string`: The id of the IP whitelabel that you would like to retrieve.

#### Output
* output `object`

### whitelabel.ips.id.get
**This endpoint allows you to retrieve an IP whitelabel.**

A IP whitelabel consists of a subdomain and domain that will be used to generate a reverse DNS record for a given IP. Once SendGrid has verified that the appropriate A record for the IP has been created, the appropriate reverse DNS record for the IP is generated.

For more information, please see our [User Guide](https://sendgrid.com/docs/API_Reference/Web_API_v3/Whitelabel/ips.html).


```js
sendgrid.whitelabel.ips.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`
  * id **required** `string`: The id of the IP whitelabel that you would like to retrieve.

#### Output
* output [ip_whitelabel](#ip_whitelabel)

### whitelabel.ips.id.validate.post
**This endpoint allows you to validate an IP whitelabel.**

A IP whitelabel consists of a subdomain and domain that will be used to generate a reverse DNS record for a given IP. Once SendGrid has verified that the appropriate A record for the IP has been created, the appropriate reverse DNS record for the IP is generated.

For more information, please see our [User Guide](https://sendgrid.com/docs/API_Reference/Web_API_v3/Whitelabel/ips.html).


```js
sendgrid.whitelabel.ips.id.validate.post({
  "id": 0
}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`
  * id **required** `integer`

#### Output
* output `object`
  * id **required** `integer`: The id of the IP whitelabel.
  * valid **required** `boolean` (values: true, false): Indicates if the IP whitelabel is valid.
  * validation_results **required** `object`: The specific results of the validation.
    * a_record `object`
      * reason **required** `string`: The reason the IP whitelabel could not be validated. Is null if the whitelabel was validated.
      * valid **required** `boolean` (values: true, false): Indicates if the IP whitelabel could be validated.

### whitelabel.links.get
**This endpoint allows you to retrieve all link whitelabels.**

Email link whitelabels allow all of the click-tracked links you send in your emails to include the URL of your domain instead of sendgrid.net.

For more information, please see our [User Guide](https://sendgrid.com/docs/API_Reference/Web_API_v3/Whitelabel/links.html).


```js
sendgrid.whitelabel.links.get({}, context)
```

#### Input
* input `object`
  * limit `integer`: Limits the number of results returned per page.
  * on-behalf-of `string`

#### Output
* output `array`
  * items [link_whitelabel](#link_whitelabel)

### whitelabel.links.post
**This endpoint allows you to create a new link whitelabel.**

Email link whitelabels allow all of the click-tracked links you send in your emails to include the URL of your domain instead of sendgrid.net.

For more information, please see our [User Guide](https://sendgrid.com/docs/API_Reference/Web_API_v3/Whitelabel/links.html).


```js
sendgrid.whitelabel.links.post({}, context)
```

#### Input
* input `object`
  * limit `integer`: Number of domains to return.
  * offset `integer`: Paging offset.
  * on-behalf-of `string`
  * body `object`
    * default `boolean` (values: true, false): Indicates if you want to use this link whitelabel as the fallback, or default, whitelabel.
    * domain **required** `string`: The root domain for your subdomain that you are creating the whitelabel for. This should match your FROM email address.
    * subdomain **required** `string`: The subdomain to create the link whitelabel for. Must be different from the subdomain you used for a domain whitelabel.

#### Output
* output [link_whitelabel](#link_whitelabel)

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

#### Input
* input `object`
  * domain `string`: The domain to match against when finding a corresponding link whitelabel.
  * on-behalf-of `string`

#### Output
* output [link_whitelabel](#link_whitelabel)

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

#### Input
* input `object`
  * username **required** `string`: The username of the subuser account that you want to disassociate a link whitelabel from.
  * on-behalf-of `string`

#### Output
* output `object`

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

#### Input
* input `object`
  * username **required** `string`: The username of the subuser to retrieve associated link whitelabels for.
  * on-behalf-of `string`

#### Output
* output [link_whitelabel](#link_whitelabel)

### whitelabel.links.id.delete
**This endpoint allows you to delete a link whitelabel.**

Email link whitelabels allow all of the click-tracked links you send in your emails to include the URL of your domain instead of sendgrid.net.

For more information, please see our [User Guide](https://sendgrid.com/docs/API_Reference/Web_API_v3/Whitelabel/links.html).


```js
sendgrid.whitelabel.links.id.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`
  * id **required** `integer`: The id of the link whitelabel you want to retrieve.

#### Output
* output `object`

### whitelabel.links.id.get
**This endpoint allows you to retrieve a specific link whitelabel.**

Email link whitelabels allow all of the click-tracked links you send in your emails to include the URL of your domain instead of sendgrid.net.

For more information, please see our [User Guide](https://sendgrid.com/docs/API_Reference/Web_API_v3/Whitelabel/links.html).


```js
sendgrid.whitelabel.links.id.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`
  * id **required** `integer`: The id of the link whitelabel you want to retrieve.

#### Output
* output [link_whitelabel](#link_whitelabel)

### whitelabel.links.id.patch
**This endpoint allows you to update a specific link whitelabel. You can use this endpoint to change a link whitelabel's default status.**

Email link whitelabels allow all of the click-tracked links you send in your emails to include the URL of your domain instead of sendgrid.net.

For more information, please see our [User Guide](https://sendgrid.com/docs/API_Reference/Web_API_v3/Whitelabel/links.html).


```js
sendgrid.whitelabel.links.id.patch({
  "id": 0
}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`
  * body `object`
    * default `boolean` (values: true, false): Indicates if the link whitelabel is set as the default, or fallback, whitelabel.
  * id **required** `integer`: The id of the link whitelabel you want to retrieve.

#### Output
* output [link_whitelabel](#link_whitelabel)

### whitelabel.links.id.validate.post
**This endpoint allows you to validate a link whitelabel.**

Email link whitelabels allow all of the click-tracked links you send in your emails to include the URL of your domain instead of sendgrid.net.

For more information, please see our [User Guide](https://sendgrid.com/docs/API_Reference/Web_API_v3/Whitelabel/links.html).


```js
sendgrid.whitelabel.links.id.validate.post({
  "id": 0
}, context)
```

#### Input
* input `object`
  * on-behalf-of `string`
  * id **required** `integer`: The id of the link whitelabel that you want to validate.

#### Output
* output `object`
  * id **required** `integer`: The id of the link whitelabel.
  * valid **required** `boolean` (values: true, false): Indicates if the link whitelabel is valid.
  * validation_results **required** `object`: The individual validations results for each of the DNS records associated with this link whitelabel.
    * domain_cname **required** `object`: The DNS record generated for the sending domain used for this link whitelabel.
      * reason **required** `string`: Null if the DNS record is valid. If the DNS record is invalid, this will explain why.
      * valid **required** `boolean` (values: true, false): Indicates if this DNS record is valid.
    * owner_cname `object`: The DNS record created to verify the link whitelabel.
      * reason **required** `string`: Null if valid. If the DNS record is invalid, this will explain why.
      * valid **required** `boolean` (values: true, false): Indicates if the DNS record is valid.

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

#### Input
* input `object`
  * on-behalf-of `string`
  * body `object`
    * username `string`: The username of the subuser account that you want to associate the link whitelabel with.
  * link_id **required** `integer`: The id of the link whitelabel you want to associate.

#### Output
* output [link_whitelabel](#link_whitelabel)



## Definitions

### advanced_stats_clicks
* Stats: Advanced Stats with Clicks `object`
  * date **required** `string`: The date that the events occurred.
  * stats **required** `array`: The statistics of the email events.
    * items `object`
      * metrics **required** `object`: The individual events and their stats.
        * clicks **required** `integer`: The number of links that were clicked in your emails.
        * unique_clicks **required** `integer`: The number of unique recipients who clicked links in your emails.
      * name **required** `string`: The name of the specific segmentation.
      * type **required** `string`: The type of segmentation.

### advanced_stats_country
* Stats: Advanced Stats with Clicks and Opens `object`
  * date **required** `string`: The date that the events occurred.
  * stats **required** `array`: The statistics of the email events.
    * items `object`
      * metrics **required** `object`: The individual events and their stats.
        * clicks **required** `integer`: The number of links that were clicked in your emails.
        * opens **required** `integer`: The total number of times your emails were opened by recipients.
        * unique_clicks **required** `integer`: The number of unique recipients who clicked links in your emails.
        * unique_opens **required** `integer`: The number of unique recipients who opened your emails.
      * name **required** `string`: The name of the specific segmentation.
      * type **required** `string`: The type of segmentation.

### advanced_stats_mailbox_provider
* Stats: Advanced Stats for Mailbox Provider `object`
  * date **required** `string`: The date that the events occurred.
  * stats **required** `array`: The statistics of the email events.
    * items `object`
      * metrics **required** `object`: The individual events and their stats.
        * blocks **required** `integer`: The number of emails that were not allowed to be delivered by ISPs.
        * bounces **required** `integer`: The number of emails that bounced instead of being delivered.
        * clicks **required** `integer`: The number of links that were clicked in your emails.
        * deferred **required** `integer`: The number of emails that temporarily could not be delivered.
        * delivered **required** `integer`: The number of emails SendGrid was able to confirm were actually delivered to a recipient.
        * drops **required** `integer`: The number of emails that were not delivered due to the recipient email address being on a suppression list.
        * opens **required** `integer`: The total number of times your emails were opened by recipients.
        * spam_reports **required** `integer`: The number of recipients who marked your email as spam.
        * unique_clicks **required** `integer`: The number of unique recipients who clicked links in your emails.
        * unique_opens **required** `integer`: The number of unique recipients who opened your emails.
      * name **required** `string`: The name of the specific segmentation.
      * type **required** `string`: The type of segmentation.

### advanced_stats_opens
* Stats: Advanced Stats with Opens `object`
  * date **required** `string`: The date that the events occurred.
  * stats **required** `array`: The statistics of the email events.
    * items `object`
      * metrics **required** `object`: The individual events and their stats.
        * opens **required** `integer`: The total number of times your emails were opened by recipients.
        * unique_opens **required** `integer`: The number of unique recipients who opened your emails.
      * name **required** `string`: The name of the specific segmentation.
      * type **required** `string`: The type of segmentation.

### api_key_name_id
* API Key Name and ID `object`
  * api_key_id `string`: The ID of your API Key. 
  * name `string`: The name of your API Key.

### api_key_name_id_scopes
* API Key Name, ID, and Scopes
  * scopes `array`: The permissions this API Key has access to.
    * items `string`
  * api_key_id `string`: The ID of your API Key. 
  * name `string`: The name of your API Key.

### campaign_request
* Campaigns Request `object`
  * categories `array`: The categories you would like associated to this campaign.
    * items `string`
  * custom_unsubscribe_url `string`: This is the url of the custom unsubscribe page that you provide for customers to unsubscribe from your suppression groups.
  * html_content `string`: The HTML of your marketing email.
  * ip_pool `string`: The pool of IPs that you would like to send this email from.
  * list_ids `array`: The IDs of the lists you are sending this campaign to. You can have both segment IDs and list IDs
    * items `integer`
  * plain_content `string`: The plain text content of your emails.
  * segment_ids `array`: The segment IDs that you are sending this list to. You can have both segment IDs and list IDs.
    * items `integer`
  * sender_id `integer`: The ID of the "sender" identity that you have created. Your recipients will see this as the "from" on your marketing emails.
  * subject `string`: The subject of your campaign that your recipients will see.
  * suppression_group_id `integer`: The suppression group that this marketing email belongs to, allowing recipients to opt-out of emails of this type.
  * title **required** `string`: The display title of your campaign. This will be viewable by you in the Marketing Campaigns UI.

### campaign_response
* Campaigns Response
  * categories `array`: The categories you would like associated to this campaign.
    * items `string`
  * custom_unsubscribe_url `string`: This is the url of the custom unsubscribe page that you provide for customers to unsubscribe from your suppression groups.
  * html_content `string`: The HTML of your marketing email.
  * ip_pool `string`: The pool of IPs that you would like to send this email from.
  * list_ids `array`: The IDs of the lists you are sending this campaign to. You can have both segment IDs and list IDs
    * items `integer`
  * plain_content `string`: The plain text content of your emails.
  * segment_ids `array`: The segment IDs that you are sending this list to. You can have both segment IDs and list IDs.
    * items `integer`
  * sender_id `integer`: The ID of the "sender" identity that you have created. Your recipients will see this as the "from" on your marketing emails.
  * subject `string`: The subject of your campaign that your recipients will see.
  * suppression_group_id `integer`: The suppression group that this marketing email belongs to, allowing recipients to opt-out of emails of this type.
  * title **required** `string`: The display title of your campaign. This will be viewable by you in the Marketing Campaigns UI.
  * id `integer`
  * status **required** `string`: The status of your campaign.

### category_stats
* Stats: Category Stats `object`
  * date **required** `string`: The date the statistics were gathered.
  * stats `array`
    * items `object`
      * metrics `object`
        * blocks **required** `integer`: The number of emails that were not allowed to be delivered by ISPs.
        * bounce_drops **required** `integer`: The number of emails that were dropped because of a bounce.
        * bounces **required** `integer`: The number of emails that bounced instead of being delivered.
        * clicks **required** `integer`: The number of links that were clicked.
        * deferred **required** `integer`: The number of emails that temporarily could not be delivered.
        * delivered **required** `integer`: The number of emails SendGrid was able to confirm were actually delivered to a recipient.
        * invalid_emails **required** `integer`: The number of recipients who had malformed email addresses or whose mail provider reported the address as invalid.
        * opens **required** `integer`: The total number of times your emails were opened by recipients.
        * processed **required** `integer`: Requests from your website, application, or mail client via SMTP Relay or the API that SendGrid processed.
        * requests **required** `integer`: The number of emails that were requested to be delivered.
        * spam_report_drops **required** `integer`: The number of emails that were dropped due to a recipient previously marking your emails as spam.
        * spam_reports **required** `integer`: The number of recipients who marked your email as spam.
        * unique_clicks **required** `integer`: The number of unique recipients who clicked links in your emails.
        * unique_opens **required** `integer`: The number of unique recipients who opened your emails.
        * unsubscribe_drops **required** `integer`: The number of emails dropped due to a recipient unsubscribing from your emails.
        * unsubscribes **required** `integer`: The number of recipients who unsubscribed from your emails.
      * name `string`: The name of the category.
      * type **required** `string`: How you are segmenting your statistics.

### contactdb_custom_field
* ContactDB Custom field schema. `object`
  * name `string`: The name of the field
  * type `string` (values: date, text, number): The type of the field.

### contactdb_custom_field_with_id
* ContactDB Custom field schema with ID.
  * name `string`: The name of the field
  * type `string` (values: date, text, number): The type of the field.
  * id `number`: The ID of the custom field.

### contactdb_custom_field_with_id_value
* ContactDB Custom field schema.
  * name `string`: The name of the field
  * type `string` (values: date, text, number): The type of the field.
  * id `number`: The ID of the custom field.
  * value `string`: The value of this recipient's custom field

### contactdb_list
* ContactDB lists `object`
  * id **required** `integer`: The reference ID of your list.
  * name **required** `string`: The name of your list.
  * recipient_count **required** `integer`: The count of recipients currently in the list.

### contactdb_recipient
* ContactDB: Recipient `object`
  * recipients `array`
    * items `object`
      * created_at `number`: The time this record was created in your contactdb, in unixtime.
      * custom_fields `array`: The custom fields assigned to this recipient and their values.
        * items [contactdb_custom_field_with_id_value](#contactdb_custom_field_with_id_value)
      * email **required** `string`: The email address of this recipient. This is a default custom field that SendGrid provides.
      * first_name `string`: The first name of this recipient. This is a default custom field that SendGrid provides.
      * id `string`: The ID of this recipient.
      * last_clicked `number`: The last time this recipient clicked a link from one of your campaigns, in unixtime.
      * last_emailed `number`: The last time this user was emailed by one of your campaigns, in unixtime.
      * last_name `string`: The last name of the recipient.
      * last_opened `number`: The last time this recipient opened an email from you, in unixtime.
      * updated_at `number`: The last update date for this recipient's record.

### contactdb_recipient_count
* ContactDB: Recipient Count `object`
  * recipient_count **required** `number`: The count of recipients.

### contactdb_recipient_response
* ContactDB: Recipient response `object`
  * error_count **required** `number`: The number of errors found while adding recipients.
  * error_indices `array`: The indices of the recipient(s) sent that caused the error. 
    * items `number`
  * errors `array`
    * items `object`
      * error_indices `array`
        * items `number`
      * message `string`
  * new_count **required** `number`: The count of new recipients added to the contactdb.
  * persisted_recipients **required** `array`: The recipient IDs of the recipients that already existed from this request.
    * items `string`
  * updated_count **required** `number`: The recipients who were updated from this request.

### contactdb_segments
* Create a Segment request `object`
  * conditions **required** `array`: The conditions for a recipient to be included in this segment.
    * items [contactdb_segments_conditions](#contactdb_segments_conditions)
  * list_id `integer`: The list id from which to make this segment. Not including this ID will mean your segment is created from the main contactdb rather than a list.
  * name **required** `string`: The name of this segment.
  * recipient_count `number`: The count of recipients in this list. This is not included on creation of segments.

### contactdb_segments_conditions
* ContactDB: Segments: Conditions `object`
  * and_or `string` (values: and, or, )
  * field **required** `string`
  * operator **required** `string` (values: eq, ne, lt, gt, contains)
  * value **required** `string`

### contactdb_segments_with_id
* ContactDB:: Segments with ID
  * id **required** `number`: The ID of the segment.
  * conditions **required** `array`: The conditions for a recipient to be included in this segment.
    * items [contactdb_segments_conditions](#contactdb_segments_conditions)
  * list_id `integer`: The list id from which to make this segment. Not including this ID will mean your segment is created from the main contactdb rather than a list.
  * name **required** `string`: The name of this segment.
  * recipient_count `number`: The count of recipients in this list. This is not included on creation of segments.

### contacts
* Contacts `object`
  * address `string`
  * address2 `object`
  * city `string`
  * company `string`
  * country `string`
  * email `string`
  * first_name `string`
  * last_name `string`
  * phone `string`
  * state `string`
  * zip `string`

### credentials
* Credentials `object`
  * permissions `object`
    * api `string`
    * mail `string`
    * web `string`
  * username `string`

### email_object
* Email Object `object`
  * email **required** `string`
  * name `string`: The name of the person to whom you are sending an email.

### errors
* Error Schema `object`
  * errors `array`
    * items `object`
      * field `string`: The field that has the error.
      * message `string`: The message the API caller will receive.

### event_webhook_settings
* Webhooks: Event Webhook Settings `object`
  * bounce **required** `boolean`: Receiving server could not or would not accept message.
  * click **required** `boolean`: Recipient clicked on a link within the message. You need to enable Click Tracking for getting this type of event.
  * deferred **required** `boolean`: Recipient's email server temporarily rejected message.
  * delivered **required** `boolean`: Message has been successfully delivered to the receiving server.
  * dropped **required** `boolean`: You may see the following drop reasons: Invalid SMTPAPI header, Spam Content (if spam checker app enabled), Unsubscribed Address, Bounced Address, Spam Reporting Address, Invalid, Recipient List over Package Quota
  * enabled **required** `boolean`: Indicates if the event webhook is enabled.
  * group_resubscribe **required** `boolean`: Recipient resubscribes to specific group by updating preferences. You need to enable Subscription Tracking for getting this type of event.
  * group_unsubscribe **required** `boolean`: Recipient unsubscribe from specific group, by either direct link or updating preferences. You need to enable Subscription Tracking for getting this type of event.
  * open **required** `boolean`: Recipient has opened the HTML message. You need to enable Open Tracking for getting this type of event.
  * processed **required** `boolean`: Message has been received and is ready to be delivered.
  * spam_report **required** `boolean`: Recipient marked a message as spam.
  * unsubscribe **required** `boolean`: Recipient clicked on message's subscription management link. You need to enable Subscription Tracking for getting this type of event.
  * url **required** `string`: The URL that you want the event webhook to POST to.

### global_ErrorResponse
* Global: Error Response `object`
  * errors `array`
    * items `object`
      * field `string`: The field that generated the error.
      * message **required** `string`: The error message.

### global_empty_request


### global_id
* Global: ID `integer`

### google_analytics_settings
* Settings: Google Analytics `object`
  * enabled `boolean`: Indicates if Google Analytics is enabled.
  * utm_campaign `string`: The name of the campaign.
  * utm_content `string`: Used to differentiate ads
  * utm_medium `string`: Name of the marketing medium (e.g. "Email").
  * utm_source `string`: Name of the referrer source. 
  * utm_term `string`: Any paid keywords.

### ip_pool
* IP Pools: Pool `object`
  * name **required** `string`: The name of the IP pool.

### ip_warmup_response
* IP Warmup: IP `array`
  * items `object`
    * ip **required** `string`: The IP address.
    * start_date **required** `integer`: A Unix timestamp indicating when the IP address was entered into warmup mode.

### ip_whitelabel
* Whitelabel - IPs `object`
  * a_record **required** `object`
    * host **required** `string`: This is the web address that will be mapped to the IP address.
    * data **required** `string`: The IP address being whitelabeled.
    * type **required** `string`: The type of DNS record.
    * valid **required** `boolean`: Indicates if the a_record is valid.
  * domain **required** `string`: The root, or sending, domain.
  * id **required** `integer`: The id of the IP whitelabel.
  * ip **required** `string`: The IP address that this whitelabel was created for.
  * legacy **required** `boolean`: Indicates if this whitelabel was created using the legacy whitelabel tool.
  * rdns **required** `string`: The reverse DNS record for the IP address. This points to the IP whitelabel subdomain.
  * subdomain **required** `string`: The subdomain created for this IP whitelabel. This is where the rDNS record points.
  * users **required** `array`: The users who are able to send mail from the IP.
    * items `object`
      * user_id **required** `integer`: The ID of the user who can send mail from this IP.
      * username **required** `string`: The username of the user who can send mail from this IP.
  * valid **required** `boolean`: Indicates if this is a valid whitelabel.

### link_whitelabel
* Whitelabel - Links `object`
  * default **required** `boolean` (values: true, false): Indicates if this is the default link whitelabel.
  * dns **required** `object`: The DNS records generated for this link whitelabel.
    * domain_cname **required** `object`: The DNS record generated to point to your link whitelabel subdomain.
      * host **required** `string`: The domain that this whitelabel will use when whitelabeling the links in your email.
      * data **required** `string`: The domain that the DNS record points to.
      * type **required** `string` (values: cname, txt, mx): The type of DNS record that was generate.
      * valid **required** `boolean` (values: true, false): Indicates if the DNS record is valid.
    * owner_cname `object`: The DNS record generated to verify who created the link whitelabel.
      * host **required** `string`: Used to verify the link whitelabel. The subdomain of this domain is the user id of the user who created the link whitelabel.
      * data **required** `string`: The domain that the DNS record points to.
      * type `string` (values: cname, txt, mx): The type of DNS record generated.
      * valid **required** `boolean` (values: true, false): Indicates if the DNS record is valid.
  * domain **required** `string`: The root domain for this link whitelabel.
  * id **required** `integer`: The id of the link whitelabel.
  * legacy **required** `boolean` (values: true, false): Indicates if this link whitelabel was created using the legacy whitelabel tool.
  * subdomain **required** `string`: The subdomain used to generate the DNS records for this link whitelabel. This subdomain must be different from the subdomain used for your domain whitelabel.
  * user_id **required** `integer`: The id of the user that this whitelabel is associated with.
  * username **required** `string`: The username of the account that this link whitelabel is associated with.
  * valid **required** `boolean` (values: true, false): Indicates if this link whitelabel is valid.

### mail_batch_id
* Mail: Batch ID `object`
  * batch_id **required** `string`

### mail_settings_address_whitelabel
* Mail Settings: Address Whitelabel `object`
  * enabled `boolean`: Indicates if you have an email address whitelist enabled. 
  * list `array`: All email address that are currently on the whitelist.
    * items `string`

### mail_settings_bcc
* Mail Settings: BCC `object`
  * email `string`: The email address that will be sent a blind carbon copy.
  * enabled `boolean`: Indicates if the BCC setting is enabled.

### mail_settings_bounce_purge
* Mail Settings: Bounce Purge `object`
  * enabled `boolean`: Indicates if the bounce purge mail setting is enabled.
  * hard_bounces `integer`: The number of days, after which SendGrid will purge all contacts from your hard bounces suppression lists.
  * soft_bounces `integer`: The number of days, after which SendGrid will purge all contacts from your soft bounces suppression lists.

### mail_settings_footer
* Mail Settings: Footer `object`
  * enabled `boolean`: Indicates if the Footer mail setting is currently enabled.
  * html_content `string`: The custom HTML content of your email footer.
  * plain_content `string`: The plain text content of your email footer.

### mail_settings_forward_bounce
* Mail Settings: Forward Bounce `object`
  * email `string`: The email address that you would like your bounce reports forwarded to.
  * enabled `boolean`: Indicates if the bounce forwarding mail setting is enabled.

### mail_settings_forward_spam
* Mail Settings: Forward Spam `object`
  * email `string`: The email address where you would like the spam reports to be forwarded.
  * enabled `boolean`: Indicates if the Forward Spam setting is enabled.

### mail_settings_patch
* Mail Settings: Patch `object`
  * email `string`: The email address of the recipient.
  * enabled `boolean`: Indicates if the mail setting is enabled.

### mail_settings_spam_check
* Mail Settings: Spam Check `object`
  * enabled **required** `boolean`: Indicates if your Spam Checker mail setting is enabled.
  * max_score `integer`: The spam threshold. Can range from 1 to 10. The lower the number, the more strict the filtering.
  * url `string`: The inbound parse URL where you would like the spam messages to be sent to.

### mail_settings_template
* Mail Settings: Template `object`
  * enabled `boolean`: Indicates if the legacy email template setting is enabled.
  * html_content `string`: The HTML content that you want to use for your legacy email template.

### monitor
* Create monitor settings request `object`
  * email **required** `string`: The email address to send emails at the frequency specified for monitoring.
  * frequency **required** `number`: The frequency by which to send the emails. An email will be sent, every time your subuser sends this {frequency} emails. 

### parse-setting
* Parse Setting `object`
  * hostname `string`: A specific and unique domain or subdomain that you have created to use exclusively to parse your incoming email. For example, parse.yourdomain.com.
  * send_raw `boolean`: Indicates if you would like SendGrid to post the original MIME-type content of your parsed email. When this parameter is set to "false", SendGrid will send a JSON payload of the content of your email. 
  * spam_check `boolean`: Indicates if you would like SendGrid to check the content parsed from your emails for spam before POSTing them to your domain.
  * url `string`: The public URL where you would like SendGrid to POST the data parsed from your email. Any emails sent with the given hostname provided (whose MX records have been updated to point to SendGrid) will be parsed and POSTed to this URL.

### partner_settings_new_relic
* Partner Settings: New Relic `object`
  * enable_subuser_statistics `boolean`: Indicates if your subuser statistics will be sent to your New Relic Dashboard.
  * enabled **required** `boolean`: Indicates if this setting is enabled. 
  * license_key **required** `string`: The license key provided with your New Relic account.

### senderID
* Sender ID `object`
  * address **required** `string`: The physical address of the sender identity.
  * address_2 `string`: Additional sender identity address information.
  * city **required** `string`: The city of the sender identity.
  * country **required** `string`: The country of the sender identity.
  * created_at `integer`: The time the sender identity was created.
  * from `object`
    * email **required** `string`: This is where the email will appear to originate from for your recipient
    * name `string`: This is the name appended to the from email field. IE - Your name or company name.
  * id `integer`: The unique identifier of the sender identity.
  * locked `boolean`: A sender identity is locked when it is associated to a campaign in the Draft, Scheduled, or In Progress status. You cannot update or delete a locked sender identity.
  * nickname **required** `string`: A nickname for the sender identity. Not used for sending.
  * reply_to `object`
    * email `string`: This is the email that your recipient will reply to.
    * name `string`: This is the name appended to the reply to email field. IE - Your name or company name.
  * state `string`: The state of the sender identity.
  * updated_at `integer`: The time the sender identity was last updated.
  * verified `boolean`: If the sender identity is verified or not. Only verified sender identities can be used to send email.
  * zip `string`: The zipcode of the sender identity.

### stats
* Stats `array`
  * items `object`
    * date `string`: The date that the statistics were gathered.
    * stats `array`: The list of statistics.
      * items `object`
        * metrics `object`: The individual events and their statistics.
          * blocks `integer`: The number of emails that were not allowed to be delivered by ISPs.
          * bounce_drops `integer`: The number of emails that were dropped because of a bounce.
          * bounces `integer`: The number of emails that bounced instead of being delivered.
          * clicks `integer`: The number of links that were clicked in your emails.
          * deferred `integer`: The number of emails that temporarily could not be delivered. 
          * delivered `integer`: The number of emails SendGrid was able to confirm were actually delivered to a recipient.
          * invalid_emails `integer`: The number of recipients who had malformed email addresses or whose mail provider reported the address as invalid.
          * opens `integer`: The total number of times your emails were opened by recipients.
          * processed `integer`: Requests from your website, application, or mail client via SMTP Relay or the API that SendGrid processed.
          * requests `integer`: The number of emails that were requested to be delivered.
          * spam_report_drops `integer`: The number of emails that were dropped due to a recipient previously marking your emails as spam.
          * spam_reports `integer`: The number of recipients who marked your email as spam.
          * unique_clicks `integer`: The number of unique recipients who clicked links in your emails.
          * unique_opens `integer`: The number of unique recipients who opened your emails.
          * unsubscribe_drops `integer`: The number of emails dropped due to a recipient unsubscribing from your emails.
          * unsubscribes `integer`: The number of recipients who unsubscribed from your emails.
        * name `string`: The name of the specific segmentation.
        * type `string`: The type of segmentation.

### subscription_tracking_settings
* Settings: Subscription Tracking `object`
  * enabled `boolean`: Indicates if subscription tracking is enabled.
  * html_content `string`: The information and HTML for your unsubscribe link. 
  * landing `string`: The HTML that will be displayed on the page that your customers will see after clicking unsubscribe, hosted on SendGrid’s server.
  * plain_content `string`: The information in plain text for your unsubscribe link. You should have the “<% %>” tag in your content, otherwise the user will have no URL for unsubscribing.
  * replace `string`: Your custom defined replacement tag for your templates. Use this tag to place your unsubscribe content anywhere in your emailtemplate.
  * url `string`: The URL where you would like your users sent to unsubscribe.

### subuser
* List all Subusers for a parent response `object`
  * disabled **required** `boolean`: Whether or not the user is enabled or disabled.
  * email **required** `string`: The email address to contact this subuser.
  * id **required** `number`: The ID of this subuser.
  * username **required** `string`: The name by which this subuser will be referred.

### subuser_post
* Subuser::POST `object`
  * authorization_token `string`
  * credit_allocation `object`
    * type `string`
  * email **required** `string`: The email address for this subuser.
  * signup_session_token `string`
  * user_id **required** `number`: The user ID for this subuser.
  * username **required** `string`: The username of the subuser.

### subuser_stats
* subuser_stats `object`
  * date `string`: The date the statistics were gathered.
  * stats `array`: The list of statistics.
    * items `object`
      * first_name `string`: The first name of the subuser.
      * last_name `string`: The last name of the subuser.
      * metrics `object`
        * blocks `integer`: The number of emails that were not allowed to be delivered by ISPs.
        * bounce_drops `integer`: The number of emails that were dropped because of a bounce.
        * bounces `integer`: The number of emails that bounced instead of being delivered.
        * clicks `integer`: The number of links that were clicked in your emails.
        * deferred `integer`: The number of emails that temporarily could not be delivered.
        * delivered `integer`: The number of emails SendGrid was able to confirm were actually delivered to a recipient.
        * invalid_emails `integer`: The number of recipients who had malformed email addresses or whose mail provider reported the address as invalid.
        * opens `integer`: The total number of times your emails were opened by recipients.
        * processed `integer`: Requests from your website, application, or mail client via SMTP Relay or the API that SendGrid processed.
        * requests `integer`: The number of emails that were requested to be delivered.
        * spam_report_drops `integer`: The number of emails that were dropped due to a recipient previously marking your emails as spam.
        * spam_reports `integer`: The number of recipients who marked your email as spam.
        * unique_clicks `integer`: The number of unique recipients who clicked links in your emails.
        * unique_opens `integer`: The number of unique recipients who opened your emails.
        * unsubscribe_drops `integer`: The number of emails dropped due to a recipient unsubscribing from your emails.
        * unsubscribes `integer`: The number of recipients who unsubscribed from your emails.
      * name `string`: The username of the subuser.
      * type `string`: The type of account.

### suppression_bounce
* Suppression: Bounce `object`
  * created `number`: The unix timestamp for when the bounce record was created at SendGrid.
  * email `string`
  * reason `string`: The reason for the bounce. This typically will be a bounce code, an enhanced code, and a description.
  * status `string`: Enhanced SMTP bounce response

### suppression_group
* Suppressions: Suppression Group `object`
  * description **required** `string`: A description of the suppression group.
  * id **required** `number`: The id of the suppression group.
  * is_default `boolean`: Indicates if this is the default suppression group.
  * name **required** `string`: The name of the suppression group. Each group created by a user must have a unique name.

### suppression_group_unsubscribes
* Suppressions: Suppression Group with Unsubscribes `object`
  * description **required** `string`: A description of the suppression group.
  * id **required** `number`: The id of the suppression group.
  * is_default `boolean`: Indicates if this is the default suppression group.
  * name **required** `string`: The name of the suppression group. Each group created by a user must have a unique name.
  * unsubscribes **required** `integer`: The unsubscribes associated with this group.

### transactional_template
* Transactional Templates: Template `object`
  * id **required** `string`: The ID of the transactional template.
  * name **required** `string`: The name for the transactional template.
  * versions `array`: The different versions of this transactional template.
    * items [transactional_template_version](#transactional_template_version)

### transactional_template_version
* Transactional Templates: Version `object`
  * active **required** `integer` (values: 0, 1): Set the new version as the active version associated with the template. Only one version of a template can be active. The first version created for a template will automatically be set to Active.
  * html_content **required** `string`: The HTML content of the new version. Must include <%body%> tag. Maximum of 1048576 bytes allowed for plain content.
  * name **required** `string`: Name of the new transactional template version.
  * plain_content **required** `string`: Text/plain content of the new transactional template version. Must include <%body%> tag. Maximum of 1048576 bytes allowed for plain content.
  * subject **required** `string`: Subject of the new transactional template version. Must include <%subject%> tag.
  * template_id **required** `string`: The name of the original transactional template.

### user_profile
* User: Profile `object`
  * address `string`: The street address for this user profile.
  * address2 `string`: An optional second line for the street address of this user profile.
  * city `string`: The city for the user profile.
  * company `string`: That company that this user profile is associated with.
  * country `string`: Th country of this user profile.
  * first_name `string`: The first name of the user.
  * last_name `string`: The last name of the user.
  * phone `string`: The phone number for the user.
  * state `string`: The state for this user.
  * website `string`: The website associated with this user.
  * zip `string`: The zip code for this user.

### user_scheduled_send_status
* User: Scheduled Send status
  * batch_id **required** `string`
  * status **required** `string` (values: cancel, pause): The status of the scheduled send.

### whitelabel_domain
* Whitelabel - Domain `object`
  * automatic_security **required** `boolean`: Indicates if this domain whitelabel uses automated security.
  * custom_spf **required** `boolean`: Indicates whether this domain whitelabel will use custom SPF.
  * default **required** `boolean`: Indicates if this domain whitelabel is the default whitelabel.
  * dns **required** `object`: The DNS records for this whitelabel that are used to authenticate the sending domain.
    * dkim1 **required** `object`: A DNS record.
      * host **required** `string`: The domain that this DNS record was created for.
      * data **required** `string`: The DNS record.
      * type **required** `string`: The type of DNS record.
      * valid **required** `boolean`: Indicates if this is a valid DNS record.
    * dkim2 **required** `object`: A DNS record.
      * host **required** `string`: The domain that this DNS record was created for.
      * data **required** `string`: The DNS record.
      * type **required** `string`: The type of DNS record.
      * valid **required** `boolean`: Indicates if this is a valid DNS record.
    * mail_cname **required** `object`: The CNAME for your sending domain that points to sendgrid.net.
      * host **required** `string`: The domain that this CNAME is created for.
      * data **required** `string`: The CNAME record.
      * type **required** `string`: The type of DNS record.
      * valid **required** `boolean`: Indicates if this is a valid CNAME.
  * domain **required** `string`: The domain that this whitelabel is being created for.
  * id **required** `number`: The ID of the domain whitelabel.
  * ips **required** `array`: The IPs to be included in the custom SPF record for this domain whitelabel.
    * items `object`
  * legacy **required** `boolean`: Indicates if this domain whitelabel was created using the legacy whitelabel tool.
  * subdomain **required** `string`: The subdomain to use for this domain whitelabel.
  * user_id **required** `number`: The ID of the user that this whitelabel will be associated with.
  * username **required** `string`: The username that this whitelabel will be associated with.
  * valid **required** `boolean`: Indicates if this is a valid whitelabel.

### whitelabel_domain_spf
* Whitelabel - Domain `object`
  * automatic_security **required** `boolean`: Indicates if this whitelabel uses automated security.
  * custom_spf **required** `boolean`: Indicates if this whitelabel uses custom SPF.
  * default **required** `boolean`: Indicates if this is the default whitelabel.
  * dns **required** `object`: The DNS records for this whitelabel.
    * dkim **required** `object`: The DKIM record for messages sent using this whitelabel.
      * host **required** `string`: The DNS labels for the DKIM signature.
      * data **required** `string`: The DKIM record.
      * type **required** `string`: The type of data in the DKIM record.
      * valid **required** `boolean`: Indicates if the DKIM record is valid.
    * domain_spf **required** `object`: The SPF record for the root domain.
      * host **required** `string`: The root domain that this SPF record will be used to authenticate.
      * data **required** `string`: The SPF record.
      * type **required** `string`: The type of data in the SPF record.
      * valid **required** `boolean`: Indicates if the SPF record is valid.
    * mail_server **required** `object`: Designates which mail server is responsible for accepting messages from a domain.
      * host **required** `string`: The domain sending the messages.
      * data **required** `string`: The mail server responsible for accepting messages from the sending domain.
      * type **required** `string`: They type of DNS record.
      * valid **required** `boolean`: Indicates if this is a valid DNS record.
    * subdomain_spf **required** `object`: The SPF record for the subdomain used to create this whitelabel.
      * host **required** `string`: The domain that this SPF record will be used to authenticate.
      * data **required** `string`: The SPF record.
      * type **required** `string`: The type of data in the SPF record.
      * valid **required** `boolean`: Indicates if this is a valid SPF record.
  * domain **required** `string`: The domain that this whitelabel was created for.
  * id **required** `integer`: The ID of the domain whitelabel.
  * ips **required** `array`: The IP addresses that are included in the SPF record for this whitelabel.
  * legacy **required** `boolean`: Indicates if this whitelabel was created using the legacy whitelabel tool.
  * subdomain **required** `string`: The subdomain that was used to create this whitelabel.
  * user_id **required** `integer`: The user_id of the account that this whitelabel is associated with.
  * username **required** `string`: The username of the account that this whitelabel is associated with.
  * valid **required** `boolean`: Indicates if this is a valid whitelabel.


