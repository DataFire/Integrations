# @datafire/mandrillapp

Client library for Mandrill

## Installation and Usage
```bash
npm install --save datafire @datafire/mandrillapp
```

```js
let datafire = require('datafire');
let mandrillapp = require('@datafire/mandrillapp').actions;
let context = new datafire.Context();

mandrillapp.exports.activity.json.post({}, context).then(data => {
  console.log(data);
})
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

#### Parameters
* body (object) **required**

### exports.info.json.post
Returns information about an export job. If the export job's state is 'complete', the returned data will include a URL you can use to fetch the results. Every export job produces a zip archive, but the format of the archive is distinct for each job type. The api calls that initiate exports include more details about the output format for that job type.


```js
mandrillapp.exports.info.json.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### exports.list.json.post
Returns a list of your exports.


```js
mandrillapp.exports.list.json.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### exports.rejects.json.post
Begins an export of your rejection blacklist. The blacklist will be exported to a zip archive containing a single file named rejects.csv that includes the following fields: email, reason, detail, created_at, expires_at, last_event_at, expires_at.


```js
mandrillapp.exports.rejects.json.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### exports.whitelist.json.post
Begins an export of your rejection whitelist. The whitelist will be exported to a zip archive containing a single file named whitelist.csv that includes the following fields: email, detail, created_at.


```js
mandrillapp.exports.whitelist.json.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### inbound.add_domain.json.post
Add an inbound domain to your account


```js
mandrillapp.inbound.add_domain.json.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### inbound.add_route.json.post
Add a new mailbox route to an inbound domain


```js
mandrillapp.inbound.add_route.json.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### inbound.check_domain.json.post
Check the MX settings for an inbound domain. The domain must have already been added with the add-domain call


```js
mandrillapp.inbound.check_domain.json.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### inbound.delete_domain.json.post
Delete an inbound domain from the account. All mail will stop routing for this domain immediately.


```js
mandrillapp.inbound.delete_domain.json.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### inbound.delete_route.json.post
Delete an existing inbound mailbox route


```js
mandrillapp.inbound.delete_route.json.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### inbound.domains.json.post
List the domains that have been configured for inbound delivery


```js
mandrillapp.inbound.domains.json.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### inbound.routes.json.post
List the mailbox routes defined for an inbound domain


```js
mandrillapp.inbound.routes.json.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### inbound.send_raw.json.post
Take a raw MIME document destined for a domain with inbound domains set up, and send it to the inbound hook exactly as if it had been sent over SMTP


```js
mandrillapp.inbound.send_raw.json.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### inbound.update_route.json.post
Update the pattern or webhook of an existing inbound mailbox route. If null is provided for any fields, the values will remain unchanged.


```js
mandrillapp.inbound.update_route.json.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### ips.cancel_warmup.json.post
Cancels the warmup process for a dedicated IP.


```js
mandrillapp.ips.cancel_warmup.json.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### ips.check_custom_dns.json.post
Tests whether a domain name is valid for use as the custom reverse DNS for a dedicated IP.


```js
mandrillapp.ips.check_custom_dns.json.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### ips.create_pool.json.post
Creates a pool and returns it. If a pool already exists with this name, no action will be performed.


```js
mandrillapp.ips.create_pool.json.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### ips.delete_pool.json.post
Deletes a pool. A pool must be empty before you can delete it, and you cannot delete your default pool.


```js
mandrillapp.ips.delete_pool.json.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### ips.delete.json.post
Deletes a dedicated IP. This is permanent and cannot be undone.


```js
mandrillapp.ips.delete.json.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### ips.info.json.post
Retrieves information about a single dedicated ip.


```js
mandrillapp.ips.info.json.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### ips.list_pools.json.post
Lists your dedicated IP pools.


```js
mandrillapp.ips.list_pools.json.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### ips.list.json.post
Lists your dedicated IPs.


```js
mandrillapp.ips.list.json.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### ips.pool_info.json.post
Describes a single dedicated IP pool.


```js
mandrillapp.ips.pool_info.json.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### ips.provision.json.post
Requests an additional dedicated IP for your account. Accounts may have one outstanding request at any time, and provisioning requests are processed within 24 hours.


```js
mandrillapp.ips.provision.json.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### ips.set_custom_dns.json.post
Configures the custom DNS name for a dedicated IP.


```js
mandrillapp.ips.set_custom_dns.json.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### ips.set_pool.json.post
Moves a dedicated IP to a different pool.


```js
mandrillapp.ips.set_pool.json.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### ips.start_warmup.json.post
Begins the warmup process for a dedicated IP. During the warmup process, Mandrill will gradually increase the percentage of your mail that is sent over the warming-up IP, over a period of roughly 30 days. The rest of your mail will be sent over shared IPs or other dedicated IPs in the same pool.


```js
mandrillapp.ips.start_warmup.json.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### messages.cancel_scheduled.json.post
Cancels a scheduled email.


```js
mandrillapp.messages.cancel_scheduled.json.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### messages.content.json.post
Get the full content of a recently sent message


```js
mandrillapp.messages.content.json.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### messages.info.json.post
Get the information for a single recently sent message


```js
mandrillapp.messages.info.json.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### messages.list_scheduled.json.post
Queries your scheduled emails by sender or recipient, or both.


```js
mandrillapp.messages.list_scheduled.json.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### messages.parse.json.post
Parse the full MIME document for an email message, returning the content of the message broken into its constituent pieces


```js
mandrillapp.messages.parse.json.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### messages.reschedule.json.post
Reschedules a scheduled email.


```js
mandrillapp.messages.reschedule.json.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### messages.search_time_series.json.post
Search the content of recently sent messages and return the aggregated hourly stats for matching messages


```js
mandrillapp.messages.search_time_series.json.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### messages.search.json.post
Search the content of recently sent messages and optionally narrow by date range, tags and senders. This method may be called up to 20 times per minute. If you need the data more often, you can use /messages/info.json to get the information for a single message, or webhooks to push activity to your own application for querying.


```js
mandrillapp.messages.search.json.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### messages.send_raw.json.post
Take a raw MIME document for a message, and send it exactly as if it were sent through Mandrill's SMTP servers


```js
mandrillapp.messages.send_raw.json.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### messages.send_template.json.post
Send a new transactional message through Mandrill using a template


```js
mandrillapp.messages.send_template.json.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### messages.send.json.post
Send a new transactional message through Mandrill


```js
mandrillapp.messages.send.json.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### metadata.add.json.post
Add a new custom metadata field to be indexed for the account.


```js
mandrillapp.metadata.add.json.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### metadata.delete.json.post
Delete an existing custom metadata field. Deletion isn't instataneous, and /metadata/list will continue to return the field until the asynchronous deletion process is complete.


```js
mandrillapp.metadata.delete.json.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### metadata.list.json.post
Get the list of custom metadata fields indexed for the account.


```js
mandrillapp.metadata.list.json.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### metadata.update.json.post
Update an existing custom metadata field.


```js
mandrillapp.metadata.update.json.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### rejects.add.json.post
Adds an email to your email rejection blacklist. Addresses that you add manually will never expire and there is no reputation penalty for removing them from your blacklist. Attempting to blacklist an address that has been whitelisted will have no effect.


```js
mandrillapp.rejects.add.json.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### rejects.delete.json.post
Deletes an email rejection. There is no limit to how many rejections you can remove from your blacklist, but keep in mind that each deletion has an affect on your reputation.


```js
mandrillapp.rejects.delete.json.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### rejects.list.json.post
Retrieves your email rejection blacklist. You can provide an email address to limit the results. Returns up to 1000 results. By default, entries that have expired are excluded from the results; set include_expired to true to include them.


```js
mandrillapp.rejects.list.json.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### senders.add_domain.json.post
Adds a sender domain to your account. Sender domains are added automatically as you send, but you can use this call to add them ahead of time.


```js
mandrillapp.senders.add_domain.json.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### senders.check_domain.json.post
Checks the SPF and DKIM settings for a domain. If you haven't already added this domain to your account, it will be added automatically.


```js
mandrillapp.senders.check_domain.json.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### senders.domains.json.post
Returns the sender domains that have been added to this account.


```js
mandrillapp.senders.domains.json.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### senders.info.json.post
Return more detailed information about a single sender, including aggregates of recent stats


```js
mandrillapp.senders.info.json.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### senders.list.json.post
Return the senders that have tried to use this account.


```js
mandrillapp.senders.list.json.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### senders.time_series.json.post
Return the recent history (hourly stats for the last 30 days) for a sender


```js
mandrillapp.senders.time_series.json.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### senders.verify_domain.json.post
Sends a verification email in order to verify ownership of a domain. Domain verification is an optional step to confirm ownership of a domain. Once a domain has been verified in a Mandrill account, other accounts may not have their messages signed by that domain unless they also verify the domain. This prevents other Mandrill accounts from sending mail signed by your domain.


```js
mandrillapp.senders.verify_domain.json.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### subaccounts.add.json.post
Add a new subaccount


```js
mandrillapp.subaccounts.add.json.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### subaccounts.delete.json.post
Delete an existing subaccount. Any email related to the subaccount will be saved, but stats will be removed and any future sending calls to this subaccount will fail.


```js
mandrillapp.subaccounts.delete.json.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### subaccounts.info.json.post
Given the ID of an existing subaccount, return the data about it


```js
mandrillapp.subaccounts.info.json.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### subaccounts.list.json.post
Get the list of subaccounts defined for the account, optionally filtered by a prefix


```js
mandrillapp.subaccounts.list.json.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### subaccounts.pause.json.post
Pause a subaccount's sending. Any future emails delivered to this subaccount will be queued for a maximum of 3 days until the subaccount is resumed.


```js
mandrillapp.subaccounts.pause.json.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### subaccounts.resume.json.post
Resume a paused subaccount's sending


```js
mandrillapp.subaccounts.resume.json.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### subaccounts.update.json.post
Update an existing subaccount


```js
mandrillapp.subaccounts.update.json.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### tags.all_time_series.json.post
Return the recent history (hourly stats for the last 30 days) for all tags


```js
mandrillapp.tags.all_time_series.json.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### tags.delete.json.post
Deletes a tag permanently. Deleting a tag removes the tag from any messages that have been sent, and also deletes the tag's stats. There is no way to undo this operation, so use it carefully.


```js
mandrillapp.tags.delete.json.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### tags.info.json.post
Return more detailed information about a single tag, including aggregates of recent stats


```js
mandrillapp.tags.info.json.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### tags.list.json.post
Return all of the user-defined tag information


```js
mandrillapp.tags.list.json.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### tags.time_series.json.post
Return the recent history (hourly stats for the last 30 days) for a tag


```js
mandrillapp.tags.time_series.json.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### templates.add.json.post
Add a new template


```js
mandrillapp.templates.add.json.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### templates.delete.json.post
Delete a template


```js
mandrillapp.templates.delete.json.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### templates.info.json.post
Get the information for an existing template


```js
mandrillapp.templates.info.json.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### templates.list.json.post
Return a list of all the templates available to this user


```js
mandrillapp.templates.list.json.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### templates.publish.json.post
Publish the content for the template. Any new messages sent using this template will start using the content that was previously in draft.


```js
mandrillapp.templates.publish.json.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### templates.render.json.post
Inject content and optionally merge fields into a template, returning the HTML that results


```js
mandrillapp.templates.render.json.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### templates.time_series.json.post
Return the recent history (hourly stats for the last 30 days) for a template


```js
mandrillapp.templates.time_series.json.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### templates.update.json.post
Update the code for an existing template. If null is provided for any fields, the values will remain unchanged.


```js
mandrillapp.templates.update.json.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### urls.add_tracking_domain.json.post
Add a tracking domain to your account


```js
mandrillapp.urls.add_tracking_domain.json.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### urls.check_tracking_domain.json.post
Checks the CNAME settings for a tracking domain. The domain must have been added already with the add-tracking-domain call


```js
mandrillapp.urls.check_tracking_domain.json.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### urls.list.json.post
Get the 100 most clicked URLs


```js
mandrillapp.urls.list.json.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### urls.search.json.post
Return the 100 most clicked URLs that match the search query given


```js
mandrillapp.urls.search.json.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### urls.time_series.json.post
Return the recent history (hourly stats for the last 30 days) for a url


```js
mandrillapp.urls.time_series.json.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### urls.tracking_domains.json.post
Get the list of tracking domains set up for this account


```js
mandrillapp.urls.tracking_domains.json.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### users.info.json.post
Return the information about the API-connected user


```js
mandrillapp.users.info.json.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### users.ping.json.post
Validate an API key and respond to a ping


```js
mandrillapp.users.ping.json.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### users.ping2.json.post
Validate an API key and respond to a ping (anal JSON parser version)


```js
mandrillapp.users.ping2.json.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### users.senders.json.post
Return the senders that have tried to use this account, both verified and unverified


```js
mandrillapp.users.senders.json.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### webhooks.add.json.post
Add a new webhook


```js
mandrillapp.webhooks.add.json.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### webhooks.delete.json.post
Delete an existing webhook


```js
mandrillapp.webhooks.delete.json.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### webhooks.info.json.post
Given the ID of an existing webhook, return the data about it


```js
mandrillapp.webhooks.info.json.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### webhooks.list.json.post
Get the list of all webhooks defined on the account


```js
mandrillapp.webhooks.list.json.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### webhooks.update.json.post
Update an existing webhook


```js
mandrillapp.webhooks.update.json.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### whitelists.add.json.post
Adds an email to your email rejection whitelist. If the address is currently on your blacklist, that blacklist entry will be removed automatically.


```js
mandrillapp.whitelists.add.json.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### whitelists.delete.json.post
Removes an email address from the whitelist.


```js
mandrillapp.whitelists.delete.json.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### whitelists.list.json.post
Retrieves your email rejection whitelist. You can provide an email address or search prefix to limit the results. Returns up to 1000 results.


```js
mandrillapp.whitelists.list.json.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

