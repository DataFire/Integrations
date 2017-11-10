# @datafire/postmarkapp_server

Client library for Postmark

## Installation and Usage
```bash
npm install --save datafire @datafire/postmarkapp_server
```

```js
let datafire = require('datafire');
let postmarkapp_server = require('@datafire/postmarkapp_server').create();

postmarkapp_server.getBounces({}).then(data => {
  console.log(data);
})
```

## Description
Postmark makes sending and receiving email
incredibly easy.


## Actions
### getBounces
Get bounces


```js
postmarkapp_server.getBounces({
  "X-Postmark-Server-Token": "",
  "count": 0,
  "offset": 0
}, context)
```

#### Parameters
* X-Postmark-Server-Token (string) **required** - The token associated with the Server on which this request will operate.
* count (integer) **required** - Number of bounces to return per request. Max 500.
* offset (integer) **required** - Number of bounces to skip.
* type (string) - Filter by type of bounce
* inactive (boolean) - Filter by emails that were deactivated by Postmark due to the bounce. Set to true or false. If this isn't specified it will return both active and inactive.
* emailFilter (string) - Filter by email address
* messageID (string) - Filter by messageID
* tag (string) - Filter by tag
* todate (string) - Filter messages up to the date specified. e.g. `2014-02-01`
* fromdate (string) - Filter messages starting from the date specified. e.g. `2014-02-01`

### getBouncedTags
Get bounced tags


```js
postmarkapp_server.getBouncedTags({
  "X-Postmark-Server-Token": ""
}, context)
```

#### Parameters
* X-Postmark-Server-Token (string) **required** - The token associated with the Server on which this request will operate.

### getSingleBounce
Get a single bounce


```js
postmarkapp_server.getSingleBounce({
  "X-Postmark-Server-Token": "",
  "bounceid": 0
}, context)
```

#### Parameters
* X-Postmark-Server-Token (string) **required** - The token associated with the Server on which this request will operate.
* bounceid (integer) **required** - The ID of the bounce to retrieve.

### activateBounce
Activate a bounce


```js
postmarkapp_server.activateBounce({
  "X-Postmark-Server-Token": "",
  "bounceid": 0
}, context)
```

#### Parameters
* X-Postmark-Server-Token (string) **required** - The token associated with the Server on which this request will operate.
* bounceid (integer) **required** - The ID of the Bounce to activate.

### bounces.bounceid.dump.get
Get bounce dump


```js
postmarkapp_server.bounces.bounceid.dump.get({
  "X-Postmark-Server-Token": "",
  "bounceid": 0
}, context)
```

#### Parameters
* X-Postmark-Server-Token (string) **required** - The token associated with the Server on which this request will operate.
* bounceid (integer) **required** - The ID for the bounce dump to retrieve.

### getDeliveryStats
Get delivery stats


```js
postmarkapp_server.getDeliveryStats({
  "X-Postmark-Server-Token": ""
}, context)
```

#### Parameters
* X-Postmark-Server-Token (string) **required** - The token associated with the Server on which this request will operate.

### sendEmail
Send a single email


```js
postmarkapp_server.sendEmail({
  "X-Postmark-Server-Token": ""
}, context)
```

#### Parameters
* X-Postmark-Server-Token (string) **required** - The token associated with the Server on which this request will operate.
* body (undefined)

### sendEmailBatch
Send a batch of emails


```js
postmarkapp_server.sendEmailBatch({
  "X-Postmark-Server-Token": ""
}, context)
```

#### Parameters
* X-Postmark-Server-Token (string) **required** - The token associated with the Server on which this request will operate.
* body (array)

### sendEmailWithTemplate
Send an email using a Template


```js
postmarkapp_server.sendEmailWithTemplate({
  "X-Postmark-Server-Token": "",
  "body": null
}, context)
```

#### Parameters
* X-Postmark-Server-Token (string) **required** - The token associated with the Server on which this request will operate.
* body (undefined) **required**

### searchInboundMessages
Inbound message search


```js
postmarkapp_server.searchInboundMessages({
  "X-Postmark-Server-Token": "",
  "count": 0,
  "offset": 0
}, context)
```

#### Parameters
* X-Postmark-Server-Token (string) **required** - The token associated with the Server on which this request will operate.
* count (integer) **required** - Number of messages to return per request. Max 500.
* offset (integer) **required** - Number of messages to skip
* recipient (string) - Filter by the user who was receiving the email
* fromemail (string) - Filter by the sender email address
* subject (string) - Filter by email subject
* mailboxhash (string) - Filter by mailboxhash
* tag (string) - Filter by tag
* status (string) - Filter by status (`blocked`, `processed`, `queued`, `failed`, `scheduled`)
* todate (string) - Filter messages up to the date specified. e.g. `2014-02-01`
* fromdate (string) - Filter messages starting from the date specified. e.g. `2014-02-01`

### bypassRulesForInboundMessage
Bypass rules for a blocked inbound message


```js
postmarkapp_server.bypassRulesForInboundMessage({
  "X-Postmark-Server-Token": "",
  "messageid": ""
}, context)
```

#### Parameters
* X-Postmark-Server-Token (string) **required** - The token associated with the Server on which this request will operate.
* messageid (string) **required** - The ID of the message which should bypass inbound rules.

### getInboundMessageDetails
Inbound message details


```js
postmarkapp_server.getInboundMessageDetails({
  "X-Postmark-Server-Token": "",
  "messageid": ""
}, context)
```

#### Parameters
* X-Postmark-Server-Token (string) **required** - The token associated with the Server on which this request will operate.
* messageid (string) **required** - The ID of the message for which to details will be retrieved.

### retryInboundMessageProcessing
Retry a failed inbound message for processing


```js
postmarkapp_server.retryInboundMessageProcessing({
  "X-Postmark-Server-Token": "",
  "messageid": ""
}, context)
```

#### Parameters
* X-Postmark-Server-Token (string) **required** - The token associated with the Server on which this request will operate.
* messageid (string) **required** - The ID of the inbound message on which we should retry processing.

### searchOutboundMessages
Outbound message search


```js
postmarkapp_server.searchOutboundMessages({
  "X-Postmark-Server-Token": "",
  "count": 0,
  "offset": 0
}, context)
```

#### Parameters
* X-Postmark-Server-Token (string) **required** - The token associated with the Server on which this request will operate.
* count (integer) **required** - Number of messages to return per request. Max 500.
* offset (integer) **required** - Number of messages to skip
* recipient (string) - Filter by the user who was receiving the email
* fromemail (string) - Filter by the sender email address
* tag (string) - Filter by tag
* status (string) - Filter by status (`queued` or `sent`)
* todate (string) - Filter messages up to the date specified. e.g. `2014-02-01`
* fromdate (string) - Filter messages starting from the date specified. e.g. `2014-02-01`

### searchClicksForOutboundMessages
Clicks for a all messages


```js
postmarkapp_server.searchClicksForOutboundMessages({
  "X-Postmark-Server-Token": "",
  "count": 0,
  "offset": 0
}, context)
```

#### Parameters
* X-Postmark-Server-Token (string) **required** - The token associated with the Server on which this request will operate.
* count (integer) **required** - Number of message clicks to return per request. Max 500.
* offset (integer) **required** - Number of messages to skip
* recipient (string) - Filter by To, Cc, Bcc
* tag (string) - Filter by tag
* client_name (string) - Filter by client name, i.e. Outlook, Gmail
* client_company (string) - Filter by company, i.e. Microsoft, Apple, Google
* client_family (string) - Filter by client family, i.e. OS X, Chrome
* os_name (string) - Filter by full OS name and specific version, i.e. OS X 10.9 Mavericks, Windows 7
* os_family (string) - Filter by kind of OS used without specific version, i.e. OS X, Windows
* os_company (string) - Filter by company which produced the OS, i.e. Apple Computer, Inc., Microsoft Corporation
* platform (string) - Filter by platform, i.e. webmail, desktop, mobile
* country (string) - Filter by country messages were opened in, i.e. Denmark, Russia
* region (string) - Filter by full name of region messages were opened in, i.e. Moscow, New York
* city (string) - Filter by full name of region messages were opened in, i.e. Moscow, New York

### getClicksForSingleOutboundMessage
Retrieve Message Clicks


```js
postmarkapp_server.getClicksForSingleOutboundMessage({
  "X-Postmark-Server-Token": "",
  "messageid": "",
  "count": 0,
  "offset": 0
}, context)
```

#### Parameters
* X-Postmark-Server-Token (string) **required** - The token associated with the Server on which this request will operate.
* messageid (string) **required** - The ID of the Outbound Message for which click statistics should be retrieved.
* count (integer) **required** - Number of message clicks to return per request. Max 500.
* offset (integer) **required** - Number of messages to skip.

### searchOpensForOutboundMessages
Opens for all messages


```js
postmarkapp_server.searchOpensForOutboundMessages({
  "X-Postmark-Server-Token": "",
  "count": 0,
  "offset": 0
}, context)
```

#### Parameters
* X-Postmark-Server-Token (string) **required** - The token associated with the Server on which this request will operate.
* count (integer) **required** - Number of message opens to return per request. Max 500.
* offset (integer) **required** - Number of messages to skip
* recipient (string) - Filter by To, Cc, Bcc
* tag (string) - Filter by tag
* client_name (string) - Filter by client name, i.e. Outlook, Gmail
* client_company (string) - Filter by company, i.e. Microsoft, Apple, Google
* client_family (string) - Filter by client family, i.e. OS X, Chrome
* os_name (string) - Filter by full OS name and specific version, i.e. OS X 10.9 Mavericks, Windows 7
* os_family (string) - Filter by kind of OS used without specific version, i.e. OS X, Windows
* os_company (string) - Filter by company which produced the OS, i.e. Apple Computer, Inc., Microsoft Corporation
* platform (string) - Filter by platform, i.e. webmail, desktop, mobile
* country (string) - Filter by country messages were opened in, i.e. Denmark, Russia
* region (string) - Filter by full name of region messages were opened in, i.e. Moscow, New York
* city (string) - Filter by full name of region messages were opened in, i.e. Moscow, New York

### getOpensForSingleOutboundMessage
Retrieve Message Opens


```js
postmarkapp_server.getOpensForSingleOutboundMessage({
  "X-Postmark-Server-Token": "",
  "messageid": "",
  "count": 0,
  "offset": 0
}, context)
```

#### Parameters
* X-Postmark-Server-Token (string) **required** - The token associated with the Server on which this request will operate.
* messageid (string) **required** - The ID of the Outbound Message for which open statistics should be retrieved.
* count (integer) **required** - Number of message opens to return per request. Max 500.
* offset (integer) **required** - Number of messages to skip.

### getOutboundMessageDetails
Outbound message details


```js
postmarkapp_server.getOutboundMessageDetails({
  "X-Postmark-Server-Token": "",
  "messageid": ""
}, context)
```

#### Parameters
* X-Postmark-Server-Token (string) **required** - The token associated with the Server on which this request will operate.
* messageid (string) **required** - The ID of the message for which to retrieve details.

### getOutboundMessageDump
Outbound message dump


```js
postmarkapp_server.getOutboundMessageDump({
  "X-Postmark-Server-Token": "",
  "messageid": ""
}, context)
```

#### Parameters
* X-Postmark-Server-Token (string) **required** - The token associated with the Server on which this request will operate.
* messageid (string) **required** - The ID of the message for which to retrieve a dump.

### getCurrentServerConfiguration
Get Server Configuration


```js
postmarkapp_server.getCurrentServerConfiguration({
  "X-Postmark-Server-Token": ""
}, context)
```

#### Parameters
* X-Postmark-Server-Token (string) **required** - The token associated with the Server on which this request will operate.

### editCurrentServerConfiguration
Edit Server Configuration


```js
postmarkapp_server.editCurrentServerConfiguration({
  "X-Postmark-Server-Token": ""
}, context)
```

#### Parameters
* X-Postmark-Server-Token (string) **required** - The token associated with the Server on which this request will operate.
* body (undefined)

### getOutboundOverviewStatistics
Get outbound overview


```js
postmarkapp_server.getOutboundOverviewStatistics({
  "X-Postmark-Server-Token": ""
}, context)
```

#### Parameters
* X-Postmark-Server-Token (string) **required** - The token associated with the Server on which this request will operate.
* tag (string) - Filter by tag
* fromdate (string) - Filter stats starting from the date specified. e.g. `2014-01-01`
* todate (string) - Filter stats up to the date specified. e.g. `2014-02-01`

### getBounceCounts
Get bounce counts


```js
postmarkapp_server.getBounceCounts({
  "X-Postmark-Server-Token": ""
}, context)
```

#### Parameters
* X-Postmark-Server-Token (string) **required** - The token associated with the Server on which this request will operate.
* tag (string) - Filter by tag
* fromdate (string) - Filter stats starting from the date specified. e.g. `2014-01-01`
* todate (string) - Filter stats up to the date specified. e.g. `2014-02-01`

### getOutboundClickCounts
Get click counts


```js
postmarkapp_server.getOutboundClickCounts({
  "X-Postmark-Server-Token": ""
}, context)
```

#### Parameters
* X-Postmark-Server-Token (string) **required** - The token associated with the Server on which this request will operate.
* tag (string) - Filter by tag
* fromdate (string) - Filter stats starting from the date specified. e.g. `2014-01-01`
* todate (string) - Filter stats up to the date specified. e.g. `2014-02-01`

### getOutboundClickCountsByBrowserFamily
Get browser usage by family


```js
postmarkapp_server.getOutboundClickCountsByBrowserFamily({
  "X-Postmark-Server-Token": ""
}, context)
```

#### Parameters
* X-Postmark-Server-Token (string) **required** - The token associated with the Server on which this request will operate.
* tag (string) - Filter by tag
* fromdate (string) - Filter stats starting from the date specified. e.g. `2014-01-01`
* todate (string) - Filter stats up to the date specified. e.g. `2014-02-01`

### getOutboundClickCountsByLocation
Get clicks by body location


```js
postmarkapp_server.getOutboundClickCountsByLocation({
  "X-Postmark-Server-Token": ""
}, context)
```

#### Parameters
* X-Postmark-Server-Token (string) **required** - The token associated with the Server on which this request will operate.
* tag (string) - Filter by tag
* fromdate (string) - Filter stats starting from the date specified. e.g. `2014-01-01`
* todate (string) - Filter stats up to the date specified. e.g. `2014-02-01`

### getOutboundClickCountsByPlatform
Get browser plaform usage


```js
postmarkapp_server.getOutboundClickCountsByPlatform({
  "X-Postmark-Server-Token": ""
}, context)
```

#### Parameters
* X-Postmark-Server-Token (string) **required** - The token associated with the Server on which this request will operate.
* tag (string) - Filter by tag
* fromdate (string) - Filter stats starting from the date specified. e.g. `2014-01-01`
* todate (string) - Filter stats up to the date specified. e.g. `2014-02-01`

### getOutboundOpenCounts
Get email open counts


```js
postmarkapp_server.getOutboundOpenCounts({
  "X-Postmark-Server-Token": ""
}, context)
```

#### Parameters
* X-Postmark-Server-Token (string) **required** - The token associated with the Server on which this request will operate.
* tag (string) - Filter by tag
* fromdate (string) - Filter stats starting from the date specified. e.g. `2014-01-01`
* todate (string) - Filter stats up to the date specified. e.g. `2014-02-01`

### getOutboundOpenCountsByEmailClient
Get email client usage


```js
postmarkapp_server.getOutboundOpenCountsByEmailClient({
  "X-Postmark-Server-Token": ""
}, context)
```

#### Parameters
* X-Postmark-Server-Token (string) **required** - The token associated with the Server on which this request will operate.
* tag (string) - Filter by tag
* fromdate (string) - Filter stats starting from the date specified. e.g. `2014-01-01`
* todate (string) - Filter stats up to the date specified. e.g. `2014-02-01`

### getOutboundOpenCountsByPlatform
Get email platform usage


```js
postmarkapp_server.getOutboundOpenCountsByPlatform({
  "X-Postmark-Server-Token": ""
}, context)
```

#### Parameters
* X-Postmark-Server-Token (string) **required** - The token associated with the Server on which this request will operate.
* tag (string) - Filter by tag
* fromdate (string) - Filter stats starting from the date specified. e.g. `2014-01-01`
* todate (string) - Filter stats up to the date specified. e.g. `2014-02-01`

### getOutboundOpenCountsByReadingTime
Get email read times


```js
postmarkapp_server.getOutboundOpenCountsByReadingTime({
  "X-Postmark-Server-Token": ""
}, context)
```

#### Parameters
* X-Postmark-Server-Token (string) **required** - The token associated with the Server on which this request will operate.
* tag (string) - Filter by tag
* fromdate (string) - Filter stats starting from the date specified. e.g. `2014-01-01`
* todate (string) - Filter stats up to the date specified. e.g. `2014-02-01`

### getSentCounts
Get sent counts


```js
postmarkapp_server.getSentCounts({
  "X-Postmark-Server-Token": ""
}, context)
```

#### Parameters
* X-Postmark-Server-Token (string) **required** - The token associated with the Server on which this request will operate.
* tag (string) - Filter by tag
* fromdate (string) - Filter stats starting from the date specified. e.g. `2014-01-01`
* todate (string) - Filter stats up to the date specified. e.g. `2014-02-01`

### getSpamComplaints
Get spam complaints


```js
postmarkapp_server.getSpamComplaints({
  "X-Postmark-Server-Token": ""
}, context)
```

#### Parameters
* X-Postmark-Server-Token (string) **required** - The token associated with the Server on which this request will operate.
* tag (string) - Filter by tag
* fromdate (string) - Filter stats starting from the date specified. e.g. `2014-01-01`
* todate (string) - Filter stats up to the date specified. e.g. `2014-02-01`

### getTrackedEmailCounts
Get tracked email counts


```js
postmarkapp_server.getTrackedEmailCounts({
  "X-Postmark-Server-Token": ""
}, context)
```

#### Parameters
* X-Postmark-Server-Token (string) **required** - The token associated with the Server on which this request will operate.
* tag (string) - Filter by tag
* fromdate (string) - Filter stats starting from the date specified. e.g. `2014-01-01`
* todate (string) - Filter stats starting from the date specified. e.g. `2014-01-01`

### listTemplates
Get the Templates associated with this Server


```js
postmarkapp_server.listTemplates({
  "X-Postmark-Server-Token": "",
  "Count": 0,
  "Offset": 0
}, context)
```

#### Parameters
* X-Postmark-Server-Token (string) **required** - The token associated with the Server on which this request will operate.
* Count (number) **required** - The number of Templates to return
* Offset (number) **required** - The number of Templates to "skip" before returning results.

### templates.post
Create a Template


```js
postmarkapp_server.templates.post({
  "X-Postmark-Server-Token": "",
  "body": null
}, context)
```

#### Parameters
* X-Postmark-Server-Token (string) **required** - The token associated with the Server on which this request will operate.
* body (undefined) **required** - The contents required for creating a new template.

### testTemplateContent
Test Template Content


```js
postmarkapp_server.testTemplateContent({
  "X-Postmark-Server-Token": ""
}, context)
```

#### Parameters
* X-Postmark-Server-Token (string) **required** - The token associated with the Server on which this request will operate.
* body (undefined)

### deleteTemplate
Delete a Template


```js
postmarkapp_server.deleteTemplate({
  "X-Postmark-Server-Token": "",
  "templateid": 0
}, context)
```

#### Parameters
* X-Postmark-Server-Token (string) **required** - The token associated with the Server on which this request will operate.
* templateid (integer) **required** - The ID for the Template you wish to delete.

### getSingleTemplate
Get a Template


```js
postmarkapp_server.getSingleTemplate({
  "X-Postmark-Server-Token": "",
  "templateid": 0
}, context)
```

#### Parameters
* X-Postmark-Server-Token (string) **required** - The token associated with the Server on which this request will operate.
* templateid (integer) **required** - The ID for the Template you wish to retrieve.

### updateTemplate
Update a Template


```js
postmarkapp_server.updateTemplate({
  "X-Postmark-Server-Token": "",
  "templateid": 0,
  "body": null
}, context)
```

#### Parameters
* X-Postmark-Server-Token (string) **required** - The token associated with the Server on which this request will operate.
* templateid (integer) **required** - The ID for the Template you wish to update.
* body (undefined) **required** - The contents required for creating a new template.

### listInboundRules
List inbound rule triggers


```js
postmarkapp_server.listInboundRules({
  "X-Postmark-Server-Token": "",
  "count": 0,
  "offset": 0
}, context)
```

#### Parameters
* X-Postmark-Server-Token (string) **required** - The token associated with the Server on which this request will operate.
* count (integer) **required** - Number of records to return per request.
* offset (integer) **required** - Number of records to skip.

### createInboundRule
Create an inbound rule trigger


```js
postmarkapp_server.createInboundRule({
  "X-Postmark-Server-Token": ""
}, context)
```

#### Parameters
* X-Postmark-Server-Token (string) **required** - The token associated with the Server on which this request will operate.
* body (undefined)

### deleteInboundRule
Delete a single trigger


```js
postmarkapp_server.deleteInboundRule({
  "X-Postmark-Server-Token": "",
  "triggerid": 0
}, context)
```

#### Parameters
* X-Postmark-Server-Token (string) **required** - The token associated with the Server on which this request will operate.
* triggerid (integer) **required** - The ID of the Inbound Rule that should be deleted.

### searcgTagTriggers
Search triggers


```js
postmarkapp_server.searcgTagTriggers({
  "X-Postmark-Server-Token": "",
  "count": 0,
  "offset": 0
}, context)
```

#### Parameters
* X-Postmark-Server-Token (string) **required** - The token associated with the Server on which this request will operate.
* count (integer) **required** - Number of records to return per request.
* offset (integer) **required** - Number of records to skip.
* match_name (string) - Filter by delivery tag

### createTagTrigger
Create a trigger for a tag


```js
postmarkapp_server.createTagTrigger({
  "X-Postmark-Server-Token": ""
}, context)
```

#### Parameters
* X-Postmark-Server-Token (string) **required** - The token associated with the Server on which this request will operate.
* body (undefined)

### deleteTagTrigger
Delete a single trigger


```js
postmarkapp_server.deleteTagTrigger({
  "X-Postmark-Server-Token": "",
  "triggerid": 0
}, context)
```

#### Parameters
* X-Postmark-Server-Token (string) **required** - The token associated with the Server on which this request will operate.
* triggerid (integer) **required** - The ID for the Tag Trigger that should be deleted.

### getSingleTagTrigger
Get a single trigger


```js
postmarkapp_server.getSingleTagTrigger({
  "X-Postmark-Server-Token": "",
  "triggerid": 0
}, context)
```

#### Parameters
* X-Postmark-Server-Token (string) **required** - The token associated with the Server on which this request will operate.
* triggerid (integer) **required** - The ID for the Tag Trigger for which data should be retrieved.

### editTagTrigger
Edit a single trigger


```js
postmarkapp_server.editTagTrigger({
  "X-Postmark-Server-Token": "",
  "triggerid": 0
}, context)
```

#### Parameters
* X-Postmark-Server-Token (string) **required** - The token associated with the Server on which this request will operate.
* triggerid (integer) **required** - The ID of the Tag Trigger that should be modified by this request.
* body (undefined)

