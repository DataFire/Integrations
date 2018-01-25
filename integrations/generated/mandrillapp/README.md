# @datafire/mandrillapp

Client library for Mandrill

## Installation and Usage
```bash
npm install --save @datafire/mandrillapp
```
```js
let mandrillapp = require('@datafire/mandrillapp').create();

mandrillapp.exports.activity.json.post({
  "body": {}
}).then(data => {
  console.log(data);
});
```

## Description

Mandrill is a reliable, scalable, and secure delivery API for transactional emails from websites and applications. It's ideal for sending data-driven transactional emails, including targeted e-commerce and personalized one-to-one messages.


## Actions

### exports.activity.json.post
Begins an export of your activity history. The activity will be exported to a zip archive containing a single file named activity.csv in the same format as you would be able to export from your account's activity view. It includes the following fields: Date, Email Address, Sender, Subject, Status, Tags, Opens, Clicks, Bounce Detail. If you have configured any custom metadata fields, they will be included in the exported data.


```js
mandrillapp.exports.activity.json.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [exports_activity](#exports_activity)

#### Output
* output [exports_satus](#exports_satus)

### exports.info.json.post
Returns information about an export job. If the export job's state is 'complete', the returned data will include a URL you can use to fetch the results. Every export job produces a zip archive, but the format of the archive is distinct for each job type. The api calls that initiate exports include more details about the output format for that job type.


```js
mandrillapp.exports.info.json.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [id](#id)

#### Output
* output [exports_info-response](#exports_info-response)

### exports.list.json.post
Returns a list of your exports.


```js
mandrillapp.exports.list.json.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [api_key](#api_key)

#### Output
* output [exports_list-response](#exports_list-response)

### exports.rejects.json.post
Begins an export of your rejection blacklist. The blacklist will be exported to a zip archive containing a single file named rejects.csv that includes the following fields: email, reason, detail, created_at, expires_at, last_event_at, expires_at.


```js
mandrillapp.exports.rejects.json.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [notify_email](#notify_email)

#### Output
* output [exports_satus](#exports_satus)

### exports.whitelist.json.post
Begins an export of your rejection whitelist. The whitelist will be exported to a zip archive containing a single file named whitelist.csv that includes the following fields: email, detail, created_at.


```js
mandrillapp.exports.whitelist.json.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [notify_email](#notify_email)

#### Output
* output [exports_satus](#exports_satus)

### inbound.add_domain.json.post
Add an inbound domain to your account


```js
mandrillapp.inbound.add_domain.json.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [domain](#domain)

#### Output
* output [inbound_info](#inbound_info)

### inbound.add_route.json.post
Add a new mailbox route to an inbound domain


```js
mandrillapp.inbound.add_route.json.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [inbound_add-route](#inbound_add-route)

#### Output
* output [route](#route)

### inbound.check_domain.json.post
Check the MX settings for an inbound domain. The domain must have already been added with the add-domain call


```js
mandrillapp.inbound.check_domain.json.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [domain](#domain)

#### Output
* output [inbound_info](#inbound_info)

### inbound.delete_domain.json.post
Delete an inbound domain from the account. All mail will stop routing for this domain immediately.


```js
mandrillapp.inbound.delete_domain.json.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [domain](#domain)

#### Output
* output [inbound_info](#inbound_info)

### inbound.delete_route.json.post
Delete an existing inbound mailbox route


```js
mandrillapp.inbound.delete_route.json.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [id](#id)

#### Output
* output [route](#route)

### inbound.domains.json.post
List the domains that have been configured for inbound delivery


```js
mandrillapp.inbound.domains.json.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [api_key](#api_key)

#### Output
* output [inbound_domains-response](#inbound_domains-response)

### inbound.routes.json.post
List the mailbox routes defined for an inbound domain


```js
mandrillapp.inbound.routes.json.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [domain](#domain)

#### Output
* output [inbound_routes-response](#inbound_routes-response)

### inbound.send_raw.json.post
Take a raw MIME document destined for a domain with inbound domains set up, and send it to the inbound hook exactly as if it had been sent over SMTP


```js
mandrillapp.inbound.send_raw.json.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [inbound_send-raw](#inbound_send-raw)

#### Output
* output [inbound_send-raw-response](#inbound_send-raw-response)

### inbound.update_route.json.post
Update the pattern or webhook of an existing inbound mailbox route. If null is provided for any fields, the values will remain unchanged.


```js
mandrillapp.inbound.update_route.json.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [inbound_update-route](#inbound_update-route)

#### Output
* output [route](#route)

### ips.cancel_warmup.json.post
Cancels the warmup process for a dedicated IP.


```js
mandrillapp.ips.cancel_warmup.json.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [ip](#ip)

#### Output
* output [ip_info](#ip_info)

### ips.check_custom_dns.json.post
Tests whether a domain name is valid for use as the custom reverse DNS for a dedicated IP.


```js
mandrillapp.ips.check_custom_dns.json.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [ip_domain](#ip_domain)

#### Output
* output [ips_check-custom-dns-response](#ips_check-custom-dns-response)

### ips.create_pool.json.post
Creates a pool and returns it. If a pool already exists with this name, no action will be performed.


```js
mandrillapp.ips.create_pool.json.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [ips_pool-key](#ips_pool-key)

#### Output
* output [ips_pool](#ips_pool)

### ips.delete_pool.json.post
Deletes a pool. A pool must be empty before you can delete it, and you cannot delete your default pool.


```js
mandrillapp.ips.delete_pool.json.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [ips_pool-key](#ips_pool-key)

#### Output
* output [ips_delete-pool-response](#ips_delete-pool-response)

### ips.delete.json.post
Deletes a dedicated IP. This is permanent and cannot be undone.


```js
mandrillapp.ips.delete.json.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [ip](#ip)

#### Output
* output [ips_delete-response](#ips_delete-response)

### ips.info.json.post
Retrieves information about a single dedicated ip.


```js
mandrillapp.ips.info.json.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [ip](#ip)

#### Output
* output [ip_info](#ip_info)

### ips.list_pools.json.post
Lists your dedicated IP pools.


```js
mandrillapp.ips.list_pools.json.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [api_key](#api_key)

#### Output
* output [ips_list-pools-response](#ips_list-pools-response)

### ips.list.json.post
Lists your dedicated IPs.


```js
mandrillapp.ips.list.json.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [api_key](#api_key)

#### Output
* output [ips_list-response](#ips_list-response)

### ips.pool_info.json.post
Describes a single dedicated IP pool.


```js
mandrillapp.ips.pool_info.json.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [ips_pool-key](#ips_pool-key)

#### Output
* output [ips_pool](#ips_pool)

### ips.provision.json.post
Requests an additional dedicated IP for your account. Accounts may have one outstanding request at any time, and provisioning requests are processed within 24 hours.


```js
mandrillapp.ips.provision.json.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [ips_provision](#ips_provision)

#### Output
* output [ips_provision-response](#ips_provision-response)

### ips.set_custom_dns.json.post
Configures the custom DNS name for a dedicated IP.


```js
mandrillapp.ips.set_custom_dns.json.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [ip_domain](#ip_domain)

#### Output
* output [ip_info](#ip_info)

### ips.set_pool.json.post
Moves a dedicated IP to a different pool.


```js
mandrillapp.ips.set_pool.json.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [ips_set-pool](#ips_set-pool)

#### Output
* output [ip_info](#ip_info)

### ips.start_warmup.json.post
Begins the warmup process for a dedicated IP. During the warmup process, Mandrill will gradually increase the percentage of your mail that is sent over the warming-up IP, over a period of roughly 30 days. The rest of your mail will be sent over shared IPs or other dedicated IPs in the same pool.


```js
mandrillapp.ips.start_warmup.json.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [ip](#ip)

#### Output
* output [ip_info](#ip_info)

### messages.cancel_scheduled.json.post
Cancels a scheduled email.


```js
mandrillapp.messages.cancel_scheduled.json.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [messages_cancel-scheduled](#messages_cancel-scheduled)

#### Output
* output [schedulingchange_info](#schedulingchange_info)

### messages.content.json.post
Get the full content of a recently sent message


```js
mandrillapp.messages.content.json.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [id](#id)

#### Output
* output [messages_content-response](#messages_content-response)

### messages.info.json.post
Get the information for a single recently sent message


```js
mandrillapp.messages.info.json.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [id](#id)

#### Output
* output [messages_info-response](#messages_info-response)

### messages.list_scheduled.json.post
Queries your scheduled emails by sender or recipient, or both.


```js
mandrillapp.messages.list_scheduled.json.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [messages_list-scheduled](#messages_list-scheduled)

#### Output
* output [messages_list-scheduled-response](#messages_list-scheduled-response)

### messages.parse.json.post
Parse the full MIME document for an email message, returning the content of the message broken into its constituent pieces


```js
mandrillapp.messages.parse.json.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [messages_parse](#messages_parse)

#### Output
* output [messages_parse-response](#messages_parse-response)

### messages.reschedule.json.post
Reschedules a scheduled email.


```js
mandrillapp.messages.reschedule.json.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [messages_reschedule](#messages_reschedule)

#### Output
* output [schedulingchange_info](#schedulingchange_info)

### messages.search_time_series.json.post
Search the content of recently sent messages and return the aggregated hourly stats for matching messages


```js
mandrillapp.messages.search_time_series.json.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [messages_search-time-series](#messages_search-time-series)

#### Output
* output [timeseries](#timeseries)

### messages.search.json.post
Search the content of recently sent messages and optionally narrow by date range, tags and senders. This method may be called up to 20 times per minute. If you need the data more often, you can use /messages/info.json to get the information for a single message, or webhooks to push activity to your own application for querying.


```js
mandrillapp.messages.search.json.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [messages_search](#messages_search)

#### Output
* output [messages_search-response](#messages_search-response)

### messages.send_raw.json.post
Take a raw MIME document for a message, and send it exactly as if it were sent through Mandrill's SMTP servers


```js
mandrillapp.messages.send_raw.json.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [messages_send-raw](#messages_send-raw)

#### Output
* output [message_send-status](#message_send-status)

### messages.send_template.json.post
Send a new transactional message through Mandrill using a template


```js
mandrillapp.messages.send_template.json.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [messages_send-template](#messages_send-template)

#### Output
* output [message_send-status](#message_send-status)

### messages.send.json.post
Send a new transactional message through Mandrill


```js
mandrillapp.messages.send.json.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [messages_send](#messages_send)

#### Output
* output [message_send-status](#message_send-status)

### metadata.add.json.post
Add a new custom metadata field to be indexed for the account.


```js
mandrillapp.metadata.add.json.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [metadata_template](#metadata_template)

#### Output
* output [metadata_info](#metadata_info)

### metadata.delete.json.post
Delete an existing custom metadata field. Deletion isn't instataneous, and /metadata/list will continue to return the field until the asynchronous deletion process is complete.


```js
mandrillapp.metadata.delete.json.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [name](#name)

#### Output
* output [metadata_info](#metadata_info)

### metadata.list.json.post
Get the list of custom metadata fields indexed for the account.


```js
mandrillapp.metadata.list.json.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [api_key](#api_key)

#### Output
* output [metadata_list-response](#metadata_list-response)

### metadata.update.json.post
Update an existing custom metadata field.


```js
mandrillapp.metadata.update.json.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [metadata_template](#metadata_template)

#### Output
* output [metadata_info](#metadata_info)

### rejects.add.json.post
Adds an email to your email rejection blacklist. Addresses that you add manually will never expire and there is no reputation penalty for removing them from your blacklist. Attempting to blacklist an address that has been whitelisted will have no effect.


```js
mandrillapp.rejects.add.json.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [rejects_add](#rejects_add)

#### Output
* output [rejects_add-response](#rejects_add-response)

### rejects.delete.json.post
Deletes an email rejection. There is no limit to how many rejections you can remove from your blacklist, but keep in mind that each deletion has an affect on your reputation.


```js
mandrillapp.rejects.delete.json.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [rejects_delete](#rejects_delete)

#### Output
* output [rejects_delete-response](#rejects_delete-response)

### rejects.list.json.post
Retrieves your email rejection blacklist. You can provide an email address to limit the results. Returns up to 1000 results. By default, entries that have expired are excluded from the results; set include_expired to true to include them.


```js
mandrillapp.rejects.list.json.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [rejects_list](#rejects_list)

#### Output
* output [rejects_list-response](#rejects_list-response)

### senders.add_domain.json.post
Adds a sender domain to your account. Sender domains are added automatically as you send, but you can use this call to add them ahead of time.


```js
mandrillapp.senders.add_domain.json.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [domain](#domain)

#### Output
* output [sender_domain_info](#sender_domain_info)

### senders.check_domain.json.post
Checks the SPF and DKIM settings for a domain. If you haven't already added this domain to your account, it will be added automatically.


```js
mandrillapp.senders.check_domain.json.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [domain](#domain)

#### Output
* output [sender_domain_info](#sender_domain_info)

### senders.domains.json.post
Returns the sender domains that have been added to this account.


```js
mandrillapp.senders.domains.json.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [api_key](#api_key)

#### Output
* output [senders_domains-response](#senders_domains-response)

### senders.info.json.post
Return more detailed information about a single sender, including aggregates of recent stats


```js
mandrillapp.senders.info.json.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [sender_address](#sender_address)

#### Output
* output [senders_info-response](#senders_info-response)

### senders.list.json.post
Return the senders that have tried to use this account.


```js
mandrillapp.senders.list.json.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [api_key](#api_key)

#### Output
* output [senders](#senders)

### senders.time_series.json.post
Return the recent history (hourly stats for the last 30 days) for a sender


```js
mandrillapp.senders.time_series.json.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [sender_address](#sender_address)

#### Output
* output [time-series](#time-series)

### senders.verify_domain.json.post
Sends a verification email in order to verify ownership of a domain. Domain verification is an optional step to confirm ownership of a domain. Once a domain has been verified in a Mandrill account, other accounts may not have their messages signed by that domain unless they also verify the domain. This prevents other Mandrill accounts from sending mail signed by your domain.


```js
mandrillapp.senders.verify_domain.json.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [senders_verify-domain](#senders_verify-domain)

#### Output
* output [senders_verify-domain-response](#senders_verify-domain-response)

### subaccounts.add.json.post
Add a new subaccount


```js
mandrillapp.subaccounts.add.json.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [subaccount_info](#subaccount_info)

#### Output
* output [subaccount_info2](#subaccount_info2)

### subaccounts.delete.json.post
Delete an existing subaccount. Any email related to the subaccount will be saved, but stats will be removed and any future sending calls to this subaccount will fail.


```js
mandrillapp.subaccounts.delete.json.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [id](#id)

#### Output
* output [subaccount_info2](#subaccount_info2)

### subaccounts.info.json.post
Given the ID of an existing subaccount, return the data about it


```js
mandrillapp.subaccounts.info.json.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [id](#id)

#### Output
* output [subaccounts_info-response](#subaccounts_info-response)

### subaccounts.list.json.post
Get the list of subaccounts defined for the account, optionally filtered by a prefix


```js
mandrillapp.subaccounts.list.json.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [url_key](#url_key)

#### Output
* output [subaccounts_list-response](#subaccounts_list-response)

### subaccounts.pause.json.post
Pause a subaccount's sending. Any future emails delivered to this subaccount will be queued for a maximum of 3 days until the subaccount is resumed.


```js
mandrillapp.subaccounts.pause.json.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [id](#id)

#### Output
* output [subaccount_info2](#subaccount_info2)

### subaccounts.resume.json.post
Resume a paused subaccount's sending


```js
mandrillapp.subaccounts.resume.json.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [id](#id)

#### Output
* output [subaccount_info2](#subaccount_info2)

### subaccounts.update.json.post
Update an existing subaccount


```js
mandrillapp.subaccounts.update.json.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [subaccount_info](#subaccount_info)

#### Output
* output [subaccount_info2](#subaccount_info2)

### tags.all_time_series.json.post
Return the recent history (hourly stats for the last 30 days) for all tags


```js
mandrillapp.tags.all_time_series.json.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [api_key](#api_key)

#### Output
* output [timeseries](#timeseries)

### tags.delete.json.post
Deletes a tag permanently. Deleting a tag removes the tag from any messages that have been sent, and also deletes the tag's stats. There is no way to undo this operation, so use it carefully.


```js
mandrillapp.tags.delete.json.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [tag_key](#tag_key)

#### Output
* output [tags_delete-response](#tags_delete-response)

### tags.info.json.post
Return more detailed information about a single tag, including aggregates of recent stats


```js
mandrillapp.tags.info.json.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [tag_key](#tag_key)

#### Output
* output [tags_info-response](#tags_info-response)

### tags.list.json.post
Return all of the user-defined tag information


```js
mandrillapp.tags.list.json.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [api_key](#api_key)

#### Output
* output [tags_list-response](#tags_list-response)

### tags.time_series.json.post
Return the recent history (hourly stats for the last 30 days) for a tag


```js
mandrillapp.tags.time_series.json.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [tag_key](#tag_key)

#### Output
* output [timeseries](#timeseries)

### templates.add.json.post
Add a new template


```js
mandrillapp.templates.add.json.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [template](#template)

#### Output
* output [template_detailed](#template_detailed)

### templates.delete.json.post
Delete a template


```js
mandrillapp.templates.delete.json.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [name](#name)

#### Output
* output [template_detailed](#template_detailed)

### templates.info.json.post
Get the information for an existing template


```js
mandrillapp.templates.info.json.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [name](#name)

#### Output
* output [template_detailed](#template_detailed)

### templates.list.json.post
Return a list of all the templates available to this user


```js
mandrillapp.templates.list.json.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [templates_list](#templates_list)

#### Output
* output [templates_list-response](#templates_list-response)

### templates.publish.json.post
Publish the content for the template. Any new messages sent using this template will start using the content that was previously in draft.


```js
mandrillapp.templates.publish.json.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [name](#name)

#### Output
* output [template_detailed](#template_detailed)

### templates.render.json.post
Inject content and optionally merge fields into a template, returning the HTML that results


```js
mandrillapp.templates.render.json.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [templates_render](#templates_render)

#### Output
* output [templates_render-response](#templates_render-response)

### templates.time_series.json.post
Return the recent history (hourly stats for the last 30 days) for a template


```js
mandrillapp.templates.time_series.json.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [name](#name)

#### Output
* output [time-series](#time-series)

### templates.update.json.post
Update the code for an existing template. If null is provided for any fields, the values will remain unchanged.


```js
mandrillapp.templates.update.json.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [template](#template)

#### Output
* output [template_detailed](#template_detailed)

### urls.add_tracking_domain.json.post
Add a tracking domain to your account


```js
mandrillapp.urls.add_tracking_domain.json.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [domain](#domain)

#### Output
* output [tracking-domain-status](#tracking-domain-status)

### urls.check_tracking_domain.json.post
Checks the CNAME settings for a tracking domain. The domain must have been added already with the add-tracking-domain call


```js
mandrillapp.urls.check_tracking_domain.json.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [domain](#domain)

#### Output
* output [tracking-domain-status](#tracking-domain-status)

### urls.list.json.post
Get the 100 most clicked URLs


```js
mandrillapp.urls.list.json.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [api_key](#api_key)

#### Output
* output [url_infos](#url_infos)

### urls.search.json.post
Return the 100 most clicked URLs that match the search query given


```js
mandrillapp.urls.search.json.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [url_key](#url_key)

#### Output
* output [url_infos](#url_infos)

### urls.time_series.json.post
Return the recent history (hourly stats for the last 30 days) for a url


```js
mandrillapp.urls.time_series.json.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [urls_time-series](#urls_time-series)

#### Output
* output [urls_time-series-response](#urls_time-series-response)

### urls.tracking_domains.json.post
Get the list of tracking domains set up for this account


```js
mandrillapp.urls.tracking_domains.json.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [api_key](#api_key)

#### Output
* output [urls_tracking-domains-response](#urls_tracking-domains-response)

### users.info.json.post
Return the information about the API-connected user


```js
mandrillapp.users.info.json.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [api_key](#api_key)

#### Output
* output [users_info-response](#users_info-response)

### users.ping.json.post
Validate an API key and respond to a ping


```js
mandrillapp.users.ping.json.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [api_key](#api_key)

#### Output
*Output schema unknown*

### users.ping2.json.post
Validate an API key and respond to a ping (anal JSON parser version)


```js
mandrillapp.users.ping2.json.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [api_key](#api_key)

#### Output
* output [users_ping2-response](#users_ping2-response)

### users.senders.json.post
Return the senders that have tried to use this account, both verified and unverified


```js
mandrillapp.users.senders.json.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [api_key](#api_key)

#### Output
* output [senders](#senders)

### webhooks.add.json.post
Add a new webhook


```js
mandrillapp.webhooks.add.json.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [webhooks_add](#webhooks_add)

#### Output
* output [webhook](#webhook)

### webhooks.delete.json.post
Delete an existing webhook


```js
mandrillapp.webhooks.delete.json.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [webhook_key](#webhook_key)

#### Output
* output [webhook](#webhook)

### webhooks.info.json.post
Given the ID of an existing webhook, return the data about it


```js
mandrillapp.webhooks.info.json.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [webhook_key](#webhook_key)

#### Output
* output [webhook](#webhook)

### webhooks.list.json.post
Get the list of all webhooks defined on the account


```js
mandrillapp.webhooks.list.json.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [api_key](#api_key)

#### Output
* output [webhooks_list-response](#webhooks_list-response)

### webhooks.update.json.post
Update an existing webhook


```js
mandrillapp.webhooks.update.json.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [webhooks_update](#webhooks_update)

#### Output
* output [webhook](#webhook)

### whitelists.add.json.post
Adds an email to your email rejection whitelist. If the address is currently on your blacklist, that blacklist entry will be removed automatically.


```js
mandrillapp.whitelists.add.json.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [email](#email)

#### Output
* output [whitelists_add-response](#whitelists_add-response)

### whitelists.delete.json.post
Removes an email address from the whitelist.


```js
mandrillapp.whitelists.delete.json.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [email](#email)

#### Output
* output [whitelists_delete-response](#whitelists_delete-response)

### whitelists.list.json.post
Retrieves your email rejection whitelist. You can provide an email address or search prefix to limit the results. Returns up to 1000 results.


```js
mandrillapp.whitelists.list.json.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [email](#email)

#### Output
* output [whitelists_list-response](#whitelists_list-response)



## Definitions

### api_key
* api_key `object`
  * key `string`

### domain
* domain `object`
  * domain `string`
  * key `string`

### email
* email `object`
  * email `string`
  * key `string`

### exports_activity
* exports_activity `object`
  * api_keys `array`
    * items `string`
  * date_from `string`
  * date_to `string`
  * key `string`
  * notify_email `string`
  * senders `array`
    * items `string`
  * states `array`
    * items `string`
  * tags `array`
    * items `string`

### exports_info-response
* exports_info-response `object`
  * created_at `string`
  * finished_at `string`
  * id `string`
  * result_url `string`
  * state `string`
  * type `string`

### exports_list-response
* exports_list-response `array`
  * items `object`
    * created_at `string`
    * finished_at `string`
    * id `string`
    * result_url `string`
    * state `string`
    * type `string`

### exports_satus
* exports_satus `object`
  * created_at `string`
  * finished_at `null`
  * id `string`
  * result_url `null`
  * state `string`
  * type `string`

### id
* id `object`
  * id `string`
  * key `string`

### inbound_add-route
* inbound_add-route `object`
  * domain `string`
  * key `string`
  * pattern `string`
  * url `string`

### inbound_domains-response
* inbound_domains-response `array`
  * items `object`
    * created_at `string`
    * domain `string`
    * valid_mx `boolean`

### inbound_info
* inbound_info `object`
  * created_at `string`
  * domain `string`
  * valid_mx `boolean`

### inbound_routes-response
* inbound_routes-response `array`
  * items `object`
    * id `string`
    * pattern `string`
    * url `string`

### inbound_send-raw
* inbound_send-raw `object`
  * client_address `string`
  * helo `string`
  * key `string`
  * mail_from `string`
  * raw_message `string`
  * to `array`
    * items `string`

### inbound_send-raw-response
* inbound_send-raw-response `array`
  * items `object`
    * email `string`
    * pattern `string`
    * url `string`

### inbound_update-route
* inbound_update-route `object`
  * id `string`
  * key `string`
  * pattern `string`
  * url `string`

### ip
* ip `object`
  * ip `string`
  * key `string`

### ip_domain
* ip_domain `object`
  * domain `string`
  * ip `string`
  * key `string`

### ip_info
* ip_info `object`
  * created_at `string`
  * custom_dns `object`
    * enabled `boolean`
    * error `string`
    * valid `boolean`
  * domain `string`
  * ip `string`
  * pool `string`
  * warmup `object`
    * end_at `string`
    * start_at `string`
    * warming_up `boolean`

### ips_check-custom-dns-response
* ips_check-custom-dns-response `object`
  * error `string`
  * valid `boolean`

### ips_delete-pool-response
* ips_delete-pool-response `object`
  * deleted `boolean`
  * pool `string`

### ips_delete-response
* ips_delete-response `object`
  * deleted `boolean`
  * ip `string`

### ips_list-pools-response
* ips_list-pools-response `array`
  * items `object`
    * created_at `string`
    * ips `array`
      * items `object`
        * created_at `string`
        * custom_dns `object`
          * enabled `boolean`
          * error `string`
          * valid `boolean`
        * domain `string`
        * ip `string`
        * pool `string`
        * warmup `object`
          * end_at `string`
          * start_at `string`
          * warming_up `boolean`
    * name `string`

### ips_list-response
* ips_list-response `array`
  * items `object`
    * created_at `string`
    * custom_dns `object`
      * enabled `boolean`
      * error `string`
      * valid `boolean`
    * domain `string`
    * ip `string`
    * pool `string`
    * warmup `object`
      * end_at `string`
      * start_at `string`
      * warming_up `boolean`

### ips_pool
* ips_pool `object`
  * created_at `string`
  * ips `array`
    * items `object`
      * created_at `string`
      * custom_dns `object`
        * enabled `boolean`
        * error `string`
        * valid `boolean`
      * domain `string`
      * ip `string`
      * pool `string`
      * warmup `object`
        * end_at `string`
        * start_at `string`
        * warming_up `boolean`
  * name `string`

### ips_pool-key
* ips_pool-key `object`
  * key `string`
  * pool `string`

### ips_provision
* ips_provision `object`
  * key `string`
  * pool `string`
  * warmup `boolean`

### ips_provision-response
* ips_provision-response `object`
  * requested_at `string`

### ips_set-pool
* ips_set-pool `object`
  * create_pool `boolean`
  * ip `string`
  * key `string`
  * pool `string`

### message_send-status
* message_send-status `array`
  * items `object`
    * _id `string`
    * email `string`
    * reject_reason `string`
    * status `string`

### messages_cancel-scheduled
* messages_cancel-scheduled `object`
  * id `null`
  * key `string`

### messages_content-response
* messages_content-response `object`
  * _id `string`
  * attachments `array`
    * items `object`
      * content `string`
      * name `string`
      * type `string`
  * from_email `string`
  * from_name `string`
  * headers `object`
    * Reply-To `string`
  * html `string`
  * subject `string`
  * tags `array`
    * items `string`
  * text `string`
  * to `object`
    * email `string`
    * name `string`
  * ts `integer`

### messages_info-response
* messages_info-response `object`
  * _id `string`
  * clicks `integer`
  * clicks_detail `array`
    * items `object`
      * ip `string`
      * location `string`
      * ts `integer`
      * ua `string`
      * url `string`
  * email `string`
  * metadata `object`
    * user_id `string`
    * website `string`
  * opens `integer`
  * opens_detail `array`
    * items `object`
      * ip `string`
      * location `string`
      * ts `integer`
      * ua `string`
  * sender `string`
  * smtp_events `array`
    * items `object`
      * diag `string`
      * ts `integer`
      * type `string`
  * state `string`
  * subject `string`
  * tags `array`
    * items `string`
  * template `string`
  * ts `integer`

### messages_list-scheduled
* messages_list-scheduled `object`
  * key `string`
  * to `string`

### messages_list-scheduled-response
* messages_list-scheduled-response `array`
  * items `object`
    * _id `string`
    * created_at `string`
    * from_email `string`
    * send_at `string`
    * subject `string`
    * to `string`

### messages_parse
* messages_parse `object`
  * key `string`
  * raw_message `string`

### messages_parse-response
* messages_parse-response `object`
  * attachments `array`
    * items `object`
      * binary `boolean`
      * content `string`
      * name `string`
      * type `string`
  * from_email `string`
  * from_name `string`
  * headers `object`
    * Reply-To `string`
  * html `string`
  * images `array`
    * items `object`
      * content `string`
      * name `string`
      * type `string`
  * subject `string`
  * text `string`
  * to `array`
    * items `object`
      * email `string`
      * name `string`

### messages_reschedule
* messages_reschedule `object`
  * id `string`
  * key `string`
  * send_at `string`

### messages_search
* messages_search `object`
  * api_keys `array`
    * items `string`
  * date_from `string`
  * date_to `string`
  * key `string`
  * limit `integer`
  * query `string`
  * senders `array`
    * items `string`
  * tags `array`
    * items `string`

### messages_search-response
* messages_search-response `array`
  * items `object`
    * _id `string`
    * clicks `integer`
    * clicks_detail `array`
      * items `object`
        * ip `string`
        * location `string`
        * ts `integer`
        * ua `string`
        * url `string`
    * email `string`
    * metadata `object`
      * user_id `string`
      * website `string`
    * opens `integer`
    * opens_detail `array`
      * items `object`
        * ip `string`
        * location `string`
        * ts `integer`
        * ua `string`
    * sender `string`
    * state `string`
    * subject `string`
    * tags `array`
      * items `string`
    * template `string`
    * ts `integer`

### messages_search-time-series
* messages_search-time-series `object`
  * date_from `string`
  * date_to `string`
  * key `string`
  * query `string`
  * senders `array`
    * items `string`
  * tags `array`
    * items `string`

### messages_send
* messages_send `object`
  * async `boolean`
  * ip_pool `string`
  * key `string`
  * message `object`
    * attachments `array`
      * items `object`
        * content `string`
        * name `string`
        * type `string`
    * auto_html `null`
    * auto_text `null`
    * bcc_address `string`
    * from_email `string`
    * from_name `string`
    * global_merge_vars `array`
      * items `object`
        * content `string`
        * name `string`
    * google_analytics_campaign `string`
    * google_analytics_domains `array`
      * items `string`
    * headers `object`
      * Reply-To `string`
    * html `string`
    * images `array`
      * items `object`
        * content `string`
        * name `string`
        * type `string`
    * important `boolean`
    * inline_css `null`
    * merge `boolean`
    * merge_vars `array`
      * items `object`
        * rcpt `string`
        * vars `array`
          * items `object`
            * content `string`
            * name `string`
    * metadata `object`
      * website `string`
    * preserve_recipients `null`
    * recipient_metadata `array`
      * items `object`
        * rcpt `string`
        * values `object`
          * user_id `integer`
    * return_path_domain `null`
    * signing_domain `null`
    * subaccount `string`
    * subject `string`
    * tags `array`
      * items `string`
    * text `string`
    * to `array`
      * items `object`
        * email `string`
        * name `string`
        * type `string`
    * track_clicks `null`
    * track_opens `null`
    * tracking_domain `null`
    * url_strip_qs `null`
    * view_content_link `null`
  * send_at `string`

### messages_send-raw
* messages_send-raw `object`
  * async `boolean`
  * from_email `string`
  * from_name `string`
  * ip_pool `string`
  * key `string`
  * raw_message `string`
  * return_path_domain `null`
  * send_at `string`
  * to `array`
    * items `string`

### messages_send-template
* messages_send-template `object`
  * async `boolean`
  * ip_pool `string`
  * key `string`
  * message `object`
    * attachments `array`
      * items `object`
        * content `string`
        * name `string`
        * type `string`
    * auto_html `null`
    * auto_text `null`
    * bcc_address `string`
    * from_email `string`
    * from_name `string`
    * global_merge_vars `array`
      * items `object`
        * content `string`
        * name `string`
    * google_analytics_campaign `string`
    * google_analytics_domains `array`
      * items `string`
    * headers `object`
      * Reply-To `string`
    * html `string`
    * images `array`
      * items `object`
        * content `string`
        * name `string`
        * type `string`
    * important `boolean`
    * inline_css `null`
    * merge `boolean`
    * merge_vars `array`
      * items `object`
        * rcpt `string`
        * vars `array`
          * items `object`
            * content `string`
            * name `string`
    * metadata `object`
      * website `string`
    * preserve_recipients `null`
    * recipient_metadata `array`
      * items `object`
        * rcpt `string`
        * values `object`
          * user_id `integer`
    * return_path_domain `null`
    * signing_domain `null`
    * subaccount `string`
    * subject `string`
    * tags `array`
      * items `string`
    * text `string`
    * to `array`
      * items `object`
        * email `string`
        * name `string`
        * type `string`
    * track_clicks `null`
    * track_opens `null`
    * tracking_domain `null`
    * url_strip_qs `null`
    * view_content_link `null`
  * send_at `string`
  * template_content `array`
    * items `object`
      * content `string`
      * name `string`
  * template_name `string`

### metadata_info
* metadata_info `object`
  * name `string`
  * state `string`
  * view_template `string`

### metadata_list-response
* metadata_list-response `array`
  * items `object`
    * name `string`
    * state `string`
    * view_template `string`

### metadata_template
* metadata_template `object`
  * key `string`
  * name `string`
  * view_template `string`

### name
* name `object`
  * key `string`
  * name `string`

### notify_email
* notify_email `object`
  * key `string`
  * notify_email `string`

### rejects_add
* rejects_add `object`
  * comment `string`
  * email `string`
  * key `string`
  * subaccount `string`

### rejects_add-response
* rejects_add-response `object`
  * added `boolean`
  * email `string`

### rejects_delete
* rejects_delete `object`
  * email `string`
  * key `string`
  * subaccount `string`

### rejects_delete-response
* rejects_delete-response `object`
  * deleted `boolean`
  * email `string`
  * subaccount `string`

### rejects_list
* rejects_list `object`
  * email `string`
  * include_expired `boolean`
  * key `string`
  * subaccount `string`

### rejects_list-response
* rejects_list-response `array`
  * items `object`
    * created_at `string`
    * detail `string`
    * email `string`
    * expired `boolean`
    * expires_at `string`
    * last_event_at `string`
    * reason `string`
    * sender `object`
      * address `string`
      * clicks `integer`
      * complaints `integer`
      * created_at `string`
      * hard_bounces `integer`
      * opens `integer`
      * rejects `integer`
      * sent `integer`
      * soft_bounces `integer`
      * unique_clicks `integer`
      * unique_opens `integer`
      * unsubs `integer`
    * subaccount `string`

### route
* route `object`
  * id `string`
  * pattern `string`
  * url `string`

### schedulingchange_info
* schedulingchange_info `object`
  * _id `string`
  * created_at `string`
  * from_email `string`
  * send_at `string`
  * subject `string`
  * to `string`

### sender_address
* sender_address `object`
  * address `string`
  * key `string`

### sender_domain_info
* sender_domain_info `object`
  * created_at `string`
  * dkim `object`
    * error `string`
    * valid `boolean`
    * valid_after `string`
  * domain `string`
  * last_tested_at `string`
  * spf `object`
    * error `string`
    * valid `boolean`
    * valid_after `string`
  * valid_signing `boolean`
  * verified_at `string`

### senders
* senders `array`
  * items `object`
    * address `string`
    * clicks `integer`
    * complaints `integer`
    * created_at `string`
    * hard_bounces `integer`
    * opens `integer`
    * rejects `integer`
    * sent `integer`
    * soft_bounces `integer`
    * unique_clicks `integer`
    * unique_opens `integer`
    * unsubs `integer`

### senders_domains-response
* senders_domains-response `array`
  * items `object`
    * created_at `string`
    * dkim `object`
      * error `string`
      * valid `boolean`
      * valid_after `string`
    * domain `string`
    * last_tested_at `string`
    * spf `object`
      * error `string`
      * valid `boolean`
      * valid_after `string`
    * valid_signing `boolean`
    * verified_at `string`

### senders_info-response
* senders_info-response `object`
  * address `string`
  * clicks `integer`
  * complaints `integer`
  * created_at `string`
  * hard_bounces `integer`
  * opens `integer`
  * rejects `integer`
  * sent `integer`
  * soft_bounces `integer`
  * stats `object`
    * last_30_days `object`
      * clicks `integer`
      * complaints `integer`
      * hard_bounces `integer`
      * opens `integer`
      * rejects `integer`
      * sent `integer`
      * soft_bounces `integer`
      * unique_clicks `integer`
      * unique_opens `integer`
      * unsubs `integer`
    * last_60_days `object`
      * clicks `integer`
      * complaints `integer`
      * hard_bounces `integer`
      * opens `integer`
      * rejects `integer`
      * sent `integer`
      * soft_bounces `integer`
      * unique_clicks `integer`
      * unique_opens `integer`
      * unsubs `integer`
    * last_7_days `object`
      * clicks `integer`
      * complaints `integer`
      * hard_bounces `integer`
      * opens `integer`
      * rejects `integer`
      * sent `integer`
      * soft_bounces `integer`
      * unique_clicks `integer`
      * unique_opens `integer`
      * unsubs `integer`
    * last_90_days `object`
      * clicks `integer`
      * complaints `integer`
      * hard_bounces `integer`
      * opens `integer`
      * rejects `integer`
      * sent `integer`
      * soft_bounces `integer`
      * unique_clicks `integer`
      * unique_opens `integer`
      * unsubs `integer`
    * today `object`
      * clicks `integer`
      * complaints `integer`
      * hard_bounces `integer`
      * opens `integer`
      * rejects `integer`
      * sent `integer`
      * soft_bounces `integer`
      * unique_clicks `integer`
      * unique_opens `integer`
      * unsubs `integer`
  * unsubs `integer`

### senders_verify-domain
* senders_verify-domain `object`
  * domain `string`
  * key `string`
  * mailbox `string`

### senders_verify-domain-response
* senders_verify-domain-response `object`
  * domain `string`
  * email `string`
  * status `string`

### subaccount_info
* subaccount_info `object`
  * custom_quota `integer`
  * id `string`
  * key `string`
  * name `string`
  * notes `string`

### subaccount_info2
* subaccount_info2 `object`
  * created_at `string`
  * custom_quota `integer`
  * first_sent_at `string`
  * id `string`
  * name `string`
  * reputation `integer`
  * sent_monthly `integer`
  * sent_total `integer`
  * sent_weekly `integer`
  * status `string`

### subaccounts_info-response
* subaccounts_info-response `object`
  * created_at `string`
  * custom_quota `integer`
  * first_sent_at `string`
  * hourly_quota `integer`
  * id `string`
  * last_30_days `object`
    * clicks `integer`
    * complaints `integer`
    * hard_bounces `integer`
    * opens `integer`
    * rejects `integer`
    * sent `integer`
    * soft_bounces `integer`
    * unique_clicks `integer`
    * unique_opens `integer`
    * unsubs `integer`
  * name `string`
  * notes `string`
  * reputation `integer`
  * sent_hourly `integer`
  * sent_monthly `integer`
  * sent_total `integer`
  * sent_weekly `integer`
  * status `string`

### subaccounts_list-response
* subaccounts_list-response `array`
  * items `object`
    * created_at `string`
    * custom_quota `integer`
    * first_sent_at `string`
    * id `string`
    * name `string`
    * reputation `integer`
    * sent_monthly `integer`
    * sent_total `integer`
    * sent_weekly `integer`
    * status `string`

### tag_key
* tag_key `object`
  * key `string`
  * tag `string`

### tags_delete-response
* tags_delete-response `object`
  * clicks `integer`
  * complaints `integer`
  * hard_bounces `integer`
  * opens `integer`
  * rejects `integer`
  * reputation `integer`
  * sent `integer`
  * soft_bounces `integer`
  * tag `string`
  * unique_clicks `integer`
  * unique_opens `integer`
  * unsubs `integer`

### tags_info-response
* tags_info-response `object`
  * clicks `integer`
  * complaints `integer`
  * hard_bounces `integer`
  * opens `integer`
  * rejects `integer`
  * sent `integer`
  * soft_bounces `integer`
  * stats `object`
    * last_30_days `object`
      * clicks `integer`
      * complaints `integer`
      * hard_bounces `integer`
      * opens `integer`
      * rejects `integer`
      * sent `integer`
      * soft_bounces `integer`
      * unique_clicks `integer`
      * unique_opens `integer`
      * unsubs `integer`
    * last_60_days `object`
      * clicks `integer`
      * complaints `integer`
      * hard_bounces `integer`
      * opens `integer`
      * rejects `integer`
      * sent `integer`
      * soft_bounces `integer`
      * unique_clicks `integer`
      * unique_opens `integer`
      * unsubs `integer`
    * last_7_days `object`
      * clicks `integer`
      * complaints `integer`
      * hard_bounces `integer`
      * opens `integer`
      * rejects `integer`
      * sent `integer`
      * soft_bounces `integer`
      * unique_clicks `integer`
      * unique_opens `integer`
      * unsubs `integer`
    * last_90_days `object`
      * clicks `integer`
      * complaints `integer`
      * hard_bounces `integer`
      * opens `integer`
      * rejects `integer`
      * sent `integer`
      * soft_bounces `integer`
      * unique_clicks `integer`
      * unique_opens `integer`
      * unsubs `integer`
    * today `object`
      * clicks `integer`
      * complaints `integer`
      * hard_bounces `integer`
      * opens `integer`
      * rejects `integer`
      * sent `integer`
      * soft_bounces `integer`
      * unique_clicks `integer`
      * unique_opens `integer`
      * unsubs `integer`
  * tag `string`
  * unsubs `integer`

### tags_list-response
* tags_list-response `array`
  * items `object`
    * clicks `integer`
    * complaints `integer`
    * hard_bounces `integer`
    * opens `integer`
    * rejects `integer`
    * reputation `integer`
    * sent `integer`
    * soft_bounces `integer`
    * tag `string`
    * unique_clicks `integer`
    * unique_opens `integer`
    * unsubs `integer`

### template
* template `object`
  * code `string`
  * from_email `string`
  * from_name `string`
  * key `string`
  * labels `array`
    * items `string`
  * name `string`
  * publish `boolean`
  * subject `string`
  * text `string`

### template_detailed
* template_detailed `object`
  * code `string`
  * created_at `string`
  * from_email `string`
  * from_name `string`
  * labels `array`
    * items `string`
  * name `string`
  * publish_code `string`
  * publish_from_email `string`
  * publish_from_name `string`
  * publish_name `string`
  * publish_subject `string`
  * publish_text `string`
  * published_at `string`
  * slug `string`
  * subject `string`
  * text `string`
  * updated_at `string`

### templates_list
* templates_list `object`
  * key `string`
  * label `string`

### templates_list-response
* templates_list-response `array`
  * items `object`
    * code `string`
    * created_at `string`
    * from_email `string`
    * from_name `string`
    * labels `array`
      * items `string`
    * name `string`
    * publish_code `string`
    * publish_from_email `string`
    * publish_from_name `string`
    * publish_name `string`
    * publish_subject `string`
    * publish_text `string`
    * published_at `string`
    * slug `string`
    * subject `string`
    * text `string`
    * updated_at `string`

### templates_render
* templates_render `object`
  * key `string`
  * merge_vars `array`
    * items `object`
      * content `string`
      * name `string`
  * template_content `array`
    * items `object`
      * content `string`
      * name `string`
  * template_name `string`

### templates_render-response
* templates_render-response `object`
  * html `string`

### time-series
* time-series `array`
  * items `object`
    * clicks `integer`
    * complaints `integer`
    * hard_bounces `integer`
    * opens `integer`
    * rejects `integer`
    * sent `integer`
    * soft_bounces `integer`
    * time `string`
    * unique_clicks `integer`
    * unique_opens `integer`

### timeseries
* timeseries `array`
  * items `object`
    * clicks `integer`
    * complaints `integer`
    * hard_bounces `integer`
    * opens `integer`
    * rejects `integer`
    * sent `integer`
    * soft_bounces `integer`
    * time `string`
    * unique_clicks `integer`
    * unique_opens `integer`
    * unsubs `integer`

### tracking-domain-status
* tracking-domain-status `object`
  * cname `object`
    * error `string`
    * valid `boolean`
    * valid_after `string`
  * created_at `string`
  * domain `string`
  * last_tested_at `string`
  * valid_tracking `boolean`

### url_infos
* url_infos `array`
  * items `object`
    * clicks `integer`
    * sent `integer`
    * unique_clicks `integer`
    * url `string`

### url_key
* url_key `object`
  * key `string`
  * q `string`

### urls_time-series
* urls_time-series `object`
  * key `string`
  * url `string`

### urls_time-series-response
* urls_time-series-response `array`
  * items `object`
    * clicks `integer`
    * sent `integer`
    * time `string`
    * unique_clicks `integer`

### urls_tracking-domains-response
* urls_tracking-domains-response `array`
  * items `object`
    * cname `object`
      * error `string`
      * valid `boolean`
      * valid_after `string`
    * created_at `string`
    * domain `string`
    * last_tested_at `string`
    * valid_tracking `boolean`

### users_info-response
* users_info-response `object`
  * backlog `integer`
  * created_at `string`
  * hourly_quota `integer`
  * public_id `string`
  * reputation `integer`
  * stats `object`
    * all_time `object`
      * clicks `integer`
      * complaints `integer`
      * hard_bounces `integer`
      * opens `integer`
      * rejects `integer`
      * sent `integer`
      * soft_bounces `integer`
      * unique_clicks `integer`
      * unique_opens `integer`
      * unsubs `integer`
    * last_30_days `object`
      * clicks `integer`
      * complaints `integer`
      * hard_bounces `integer`
      * opens `integer`
      * rejects `integer`
      * sent `integer`
      * soft_bounces `integer`
      * unique_clicks `integer`
      * unique_opens `integer`
      * unsubs `integer`
    * last_60_days `object`
      * clicks `integer`
      * complaints `integer`
      * hard_bounces `integer`
      * opens `integer`
      * rejects `integer`
      * sent `integer`
      * soft_bounces `integer`
      * unique_clicks `integer`
      * unique_opens `integer`
      * unsubs `integer`
    * last_7_days `object`
      * clicks `integer`
      * complaints `integer`
      * hard_bounces `integer`
      * opens `integer`
      * rejects `integer`
      * sent `integer`
      * soft_bounces `integer`
      * unique_clicks `integer`
      * unique_opens `integer`
      * unsubs `integer`
    * last_90_days `object`
      * clicks `integer`
      * complaints `integer`
      * hard_bounces `integer`
      * opens `integer`
      * rejects `integer`
      * sent `integer`
      * soft_bounces `integer`
      * unique_clicks `integer`
      * unique_opens `integer`
      * unsubs `integer`
    * today `object`
      * clicks `integer`
      * complaints `integer`
      * hard_bounces `integer`
      * opens `integer`
      * rejects `integer`
      * sent `integer`
      * soft_bounces `integer`
      * unique_clicks `integer`
      * unique_opens `integer`
      * unsubs `integer`
  * username `string`

### users_ping2-response
* users_ping2-response `object`
  * PING `string`

### webhook
* webhook `object`
  * auth_key `string`
  * batches_sent `integer`
  * created_at `string`
  * description `string`
  * events `array`
    * items `string`
  * events_sent `integer`
  * id `integer`
  * last_error `string`
  * last_sent_at `string`
  * url `string`

### webhook_key
* webhook_key `object`
  * id `integer`
  * key `string`

### webhooks_add
* webhooks_add `object`
  * description `string`
  * events `array`
    * items `string`
  * key `string`
  * url `string`

### webhooks_list-response
* webhooks_list-response `array`
  * items `object`
    * auth_key `string`
    * batches_sent `integer`
    * created_at `string`
    * description `string`
    * events `array`
      * items `string`
    * events_sent `integer`
    * id `integer`
    * last_error `string`
    * last_sent_at `string`
    * url `string`

### webhooks_update
* webhooks_update `object`
  * description `string`
  * events `array`
    * items `string`
  * id `integer`
  * key `string`
  * url `string`

### whitelists_add-response
* whitelists_add-response `object`
  * email `string`
  * whether `boolean`

### whitelists_delete-response
* whitelists_delete-response `object`
  * deleted `boolean`
  * email `string`

### whitelists_list-response
* whitelists_list-response `array`
  * items `object`
    * created_at `string`
    * detail `string`
    * email `string`


