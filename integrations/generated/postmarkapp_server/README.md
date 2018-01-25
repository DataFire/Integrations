# @datafire/postmarkapp_server

Client library for Postmark

## Installation and Usage
```bash
npm install --save @datafire/postmarkapp_server
```
```js
let postmarkapp_server = require('@datafire/postmarkapp_server').create();

postmarkapp_server.getBounces({
  "X-Postmark-Server-Token": "",
  "count": 0,
  "offset": 0
}).then(data => {
  console.log(data);
});
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

#### Input
* input `object`
  * X-Postmark-Server-Token **required** `string`: The token associated with the Server on which this request will operate.
  * count **required** `integer`: Number of bounces to return per request. Max 500.
  * offset **required** `integer`: Number of bounces to skip.
  * type `string` (values: HardBounce, Transient, Unsubscribe, Subscribe, AutoResponder, AddressChange, DnsError, SpamNotification, OpenRelayTest, Unknown, SoftBounce, VirusNotification, MailFrontier Matador., BadEmailAddress, SpamComplaint, ManuallyDeactivated, Unconfirmed, Blocked, SMTPApiError, InboundError, DMARCPolicy, TemplateRenderingFailed): Filter by type of bounce
  * inactive `boolean`: Filter by emails that were deactivated by Postmark due to the bounce. Set to true or false. If this isn't specified it will return both active and inactive.
  * emailFilter `string`: Filter by email address
  * messageID `string`: Filter by messageID
  * tag `string`: Filter by tag
  * todate `string`: Filter messages up to the date specified. e.g. `2014-02-01`
  * fromdate `string`: Filter messages starting from the date specified. e.g. `2014-02-01`

#### Output
* output [BounceSearchResponse](#bouncesearchresponse)

### getBouncedTags
Get bounced tags


```js
postmarkapp_server.getBouncedTags({
  "X-Postmark-Server-Token": ""
}, context)
```

#### Input
* input `object`
  * X-Postmark-Server-Token **required** `string`: The token associated with the Server on which this request will operate.

#### Output
* output `array`
  * items `string`

### getSingleBounce
Get a single bounce


```js
postmarkapp_server.getSingleBounce({
  "X-Postmark-Server-Token": "",
  "bounceid": 0
}, context)
```

#### Input
* input `object`
  * X-Postmark-Server-Token **required** `string`: The token associated with the Server on which this request will operate.
  * bounceid **required** `integer`: The ID of the bounce to retrieve.

#### Output
* output [BounceInfoResponse](#bounceinforesponse)

### activateBounce
Activate a bounce


```js
postmarkapp_server.activateBounce({
  "X-Postmark-Server-Token": "",
  "bounceid": 0
}, context)
```

#### Input
* input `object`
  * X-Postmark-Server-Token **required** `string`: The token associated with the Server on which this request will operate.
  * bounceid **required** `integer`: The ID of the Bounce to activate.

#### Output
* output [BounceActivationResponse](#bounceactivationresponse)

### bounces.bounceid.dump.get
Get bounce dump


```js
postmarkapp_server.bounces.bounceid.dump.get({
  "X-Postmark-Server-Token": "",
  "bounceid": 0
}, context)
```

#### Input
* input `object`
  * X-Postmark-Server-Token **required** `string`: The token associated with the Server on which this request will operate.
  * bounceid **required** `integer`: The ID for the bounce dump to retrieve.

#### Output
* output [BounceDumpResponse](#bouncedumpresponse)

### getDeliveryStats
Get delivery stats


```js
postmarkapp_server.getDeliveryStats({
  "X-Postmark-Server-Token": ""
}, context)
```

#### Input
* input `object`
  * X-Postmark-Server-Token **required** `string`: The token associated with the Server on which this request will operate.

#### Output
* output [DeliveryStatsResponse](#deliverystatsresponse)

### sendEmail
Send a single email


```js
postmarkapp_server.sendEmail({
  "X-Postmark-Server-Token": ""
}, context)
```

#### Input
* input `object`
  * X-Postmark-Server-Token **required** `string`: The token associated with the Server on which this request will operate.
  * body [SendEmailRequest](#sendemailrequest)

#### Output
* output [SendEmailResponse](#sendemailresponse)

### sendEmailBatch
Send a batch of emails


```js
postmarkapp_server.sendEmailBatch({
  "X-Postmark-Server-Token": ""
}, context)
```

#### Input
* input `object`
  * X-Postmark-Server-Token **required** `string`: The token associated with the Server on which this request will operate.
  * body [SendEmailBatchRequest](#sendemailbatchrequest)

#### Output
* output [SendEmailBatchResponse](#sendemailbatchresponse)

### sendEmailWithTemplate
Send an email using a Template


```js
postmarkapp_server.sendEmailWithTemplate({
  "X-Postmark-Server-Token": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * X-Postmark-Server-Token **required** `string`: The token associated with the Server on which this request will operate.
  * body **required** [EmailWithTemplateRequest](#emailwithtemplaterequest)

#### Output
* output [SendEmailResponse](#sendemailresponse)

### searchInboundMessages
Inbound message search


```js
postmarkapp_server.searchInboundMessages({
  "X-Postmark-Server-Token": "",
  "count": 0,
  "offset": 0
}, context)
```

#### Input
* input `object`
  * X-Postmark-Server-Token **required** `string`: The token associated with the Server on which this request will operate.
  * count **required** `integer`: Number of messages to return per request. Max 500.
  * offset **required** `integer`: Number of messages to skip
  * recipient `string`: Filter by the user who was receiving the email
  * fromemail `string`: Filter by the sender email address
  * subject `string`: Filter by email subject
  * mailboxhash `string`: Filter by mailboxhash
  * tag `string`: Filter by tag
  * status `string` (values: blocked, processed, queued, failed, scheduled): Filter by status (`blocked`, `processed`, `queued`, `failed`, `scheduled`)
  * todate `string`: Filter messages up to the date specified. e.g. `2014-02-01`
  * fromdate `string`: Filter messages starting from the date specified. e.g. `2014-02-01`

#### Output
* output [InboundSearchResponse](#inboundsearchresponse)

### bypassRulesForInboundMessage
Bypass rules for a blocked inbound message


```js
postmarkapp_server.bypassRulesForInboundMessage({
  "X-Postmark-Server-Token": "",
  "messageid": ""
}, context)
```

#### Input
* input `object`
  * X-Postmark-Server-Token **required** `string`: The token associated with the Server on which this request will operate.
  * messageid **required** `string`: The ID of the message which should bypass inbound rules.

#### Output
* output [StandardPostmarkResponse](#standardpostmarkresponse)

### getInboundMessageDetails
Inbound message details


```js
postmarkapp_server.getInboundMessageDetails({
  "X-Postmark-Server-Token": "",
  "messageid": ""
}, context)
```

#### Input
* input `object`
  * X-Postmark-Server-Token **required** `string`: The token associated with the Server on which this request will operate.
  * messageid **required** `string`: The ID of the message for which to details will be retrieved.

#### Output
* output [InboundMessageFullDetailsResponse](#inboundmessagefulldetailsresponse)

### retryInboundMessageProcessing
Retry a failed inbound message for processing


```js
postmarkapp_server.retryInboundMessageProcessing({
  "X-Postmark-Server-Token": "",
  "messageid": ""
}, context)
```

#### Input
* input `object`
  * X-Postmark-Server-Token **required** `string`: The token associated with the Server on which this request will operate.
  * messageid **required** `string`: The ID of the inbound message on which we should retry processing.

#### Output
* output [StandardPostmarkResponse](#standardpostmarkresponse)

### searchOutboundMessages
Outbound message search


```js
postmarkapp_server.searchOutboundMessages({
  "X-Postmark-Server-Token": "",
  "count": 0,
  "offset": 0
}, context)
```

#### Input
* input `object`
  * X-Postmark-Server-Token **required** `string`: The token associated with the Server on which this request will operate.
  * count **required** `integer`: Number of messages to return per request. Max 500.
  * offset **required** `integer`: Number of messages to skip
  * recipient `string`: Filter by the user who was receiving the email
  * fromemail `string`: Filter by the sender email address
  * tag `string`: Filter by tag
  * status `string` (values: queued, sent): Filter by status (`queued` or `sent`)
  * todate `string`: Filter messages up to the date specified. e.g. `2014-02-01`
  * fromdate `string`: Filter messages starting from the date specified. e.g. `2014-02-01`

#### Output
* output [OutboundSearchResponse](#outboundsearchresponse)

### searchClicksForOutboundMessages
Clicks for a all messages


```js
postmarkapp_server.searchClicksForOutboundMessages({
  "X-Postmark-Server-Token": "",
  "count": 0,
  "offset": 0
}, context)
```

#### Input
* input `object`
  * X-Postmark-Server-Token **required** `string`: The token associated with the Server on which this request will operate.
  * count **required** `integer`: Number of message clicks to return per request. Max 500.
  * offset **required** `integer`: Number of messages to skip
  * recipient `string`: Filter by To, Cc, Bcc
  * tag `string`: Filter by tag
  * client_name `string`: Filter by client name, i.e. Outlook, Gmail
  * client_company `string`: Filter by company, i.e. Microsoft, Apple, Google
  * client_family `string`: Filter by client family, i.e. OS X, Chrome
  * os_name `string`: Filter by full OS name and specific version, i.e. OS X 10.9 Mavericks, Windows 7
  * os_family `string`: Filter by kind of OS used without specific version, i.e. OS X, Windows
  * os_company `string`: Filter by company which produced the OS, i.e. Apple Computer, Inc., Microsoft Corporation
  * platform `string`: Filter by platform, i.e. webmail, desktop, mobile
  * country `string`: Filter by country messages were opened in, i.e. Denmark, Russia
  * region `string`: Filter by full name of region messages were opened in, i.e. Moscow, New York
  * city `string`: Filter by full name of region messages were opened in, i.e. Moscow, New York

#### Output
* output [MessageClickSearchResponse](#messageclicksearchresponse)

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

#### Input
* input `object`
  * X-Postmark-Server-Token **required** `string`: The token associated with the Server on which this request will operate.
  * messageid **required** `string`: The ID of the Outbound Message for which click statistics should be retrieved.
  * count **required** `integer`: Number of message clicks to return per request. Max 500.
  * offset **required** `integer`: Number of messages to skip.

#### Output
* output [MessageClickSearchResponse](#messageclicksearchresponse)

### searchOpensForOutboundMessages
Opens for all messages


```js
postmarkapp_server.searchOpensForOutboundMessages({
  "X-Postmark-Server-Token": "",
  "count": 0,
  "offset": 0
}, context)
```

#### Input
* input `object`
  * X-Postmark-Server-Token **required** `string`: The token associated with the Server on which this request will operate.
  * count **required** `integer`: Number of message opens to return per request. Max 500.
  * offset **required** `integer`: Number of messages to skip
  * recipient `string`: Filter by To, Cc, Bcc
  * tag `string`: Filter by tag
  * client_name `string`: Filter by client name, i.e. Outlook, Gmail
  * client_company `string`: Filter by company, i.e. Microsoft, Apple, Google
  * client_family `string`: Filter by client family, i.e. OS X, Chrome
  * os_name `string`: Filter by full OS name and specific version, i.e. OS X 10.9 Mavericks, Windows 7
  * os_family `string`: Filter by kind of OS used without specific version, i.e. OS X, Windows
  * os_company `string`: Filter by company which produced the OS, i.e. Apple Computer, Inc., Microsoft Corporation
  * platform `string`: Filter by platform, i.e. webmail, desktop, mobile
  * country `string`: Filter by country messages were opened in, i.e. Denmark, Russia
  * region `string`: Filter by full name of region messages were opened in, i.e. Moscow, New York
  * city `string`: Filter by full name of region messages were opened in, i.e. Moscow, New York

#### Output
* output [MessageOpenSearchResponse](#messageopensearchresponse)

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

#### Input
* input `object`
  * X-Postmark-Server-Token **required** `string`: The token associated with the Server on which this request will operate.
  * messageid **required** `string`: The ID of the Outbound Message for which open statistics should be retrieved.
  * count **required** `integer`: Number of message opens to return per request. Max 500.
  * offset **required** `integer`: Number of messages to skip.

#### Output
* output [MessageOpenSearchResponse](#messageopensearchresponse)

### getOutboundMessageDetails
Outbound message details


```js
postmarkapp_server.getOutboundMessageDetails({
  "X-Postmark-Server-Token": "",
  "messageid": ""
}, context)
```

#### Input
* input `object`
  * X-Postmark-Server-Token **required** `string`: The token associated with the Server on which this request will operate.
  * messageid **required** `string`: The ID of the message for which to retrieve details.

#### Output
* output [OutboundMessageDetailsResponse](#outboundmessagedetailsresponse)

### getOutboundMessageDump
Outbound message dump


```js
postmarkapp_server.getOutboundMessageDump({
  "X-Postmark-Server-Token": "",
  "messageid": ""
}, context)
```

#### Input
* input `object`
  * X-Postmark-Server-Token **required** `string`: The token associated with the Server on which this request will operate.
  * messageid **required** `string`: The ID of the message for which to retrieve a dump.

#### Output
* output [OutboundMessageDumpResponse](#outboundmessagedumpresponse)

### getCurrentServerConfiguration
Get Server Configuration


```js
postmarkapp_server.getCurrentServerConfiguration({
  "X-Postmark-Server-Token": ""
}, context)
```

#### Input
* input `object`
  * X-Postmark-Server-Token **required** `string`: The token associated with the Server on which this request will operate.

#### Output
* output [ServerConfigurationResponse](#serverconfigurationresponse)

### editCurrentServerConfiguration
Edit Server Configuration


```js
postmarkapp_server.editCurrentServerConfiguration({
  "X-Postmark-Server-Token": ""
}, context)
```

#### Input
* input `object`
  * X-Postmark-Server-Token **required** `string`: The token associated with the Server on which this request will operate.
  * body [EditServerConfigurationRequest](#editserverconfigurationrequest)

#### Output
* output [ServerConfigurationResponse](#serverconfigurationresponse)

### getOutboundOverviewStatistics
Get outbound overview


```js
postmarkapp_server.getOutboundOverviewStatistics({
  "X-Postmark-Server-Token": ""
}, context)
```

#### Input
* input `object`
  * X-Postmark-Server-Token **required** `string`: The token associated with the Server on which this request will operate.
  * tag `string`: Filter by tag
  * fromdate `string`: Filter stats starting from the date specified. e.g. `2014-01-01`
  * todate `string`: Filter stats up to the date specified. e.g. `2014-02-01`

#### Output
* output [OutboundOverviewStatsResponse](#outboundoverviewstatsresponse)

### getBounceCounts
Get bounce counts


```js
postmarkapp_server.getBounceCounts({
  "X-Postmark-Server-Token": ""
}, context)
```

#### Input
* input `object`
  * X-Postmark-Server-Token **required** `string`: The token associated with the Server on which this request will operate.
  * tag `string`: Filter by tag
  * fromdate `string`: Filter stats starting from the date specified. e.g. `2014-01-01`
  * todate `string`: Filter stats up to the date specified. e.g. `2014-02-01`

#### Output
* output `object`
  * Days `array`
    * items `object`
      * Date `string`
      * HardBounce `integer`
      * SMTPApiError `integer`
      * SoftBounce `integer`
      * Transient `integer`
  * HardBounce `integer`
  * SMTPApiError `integer`
  * SoftBounce `integer`
  * Transient `integer`

### getOutboundClickCounts
Get click counts


```js
postmarkapp_server.getOutboundClickCounts({
  "X-Postmark-Server-Token": ""
}, context)
```

#### Input
* input `object`
  * X-Postmark-Server-Token **required** `string`: The token associated with the Server on which this request will operate.
  * tag `string`: Filter by tag
  * fromdate `string`: Filter stats starting from the date specified. e.g. `2014-01-01`
  * todate `string`: Filter stats up to the date specified. e.g. `2014-02-01`

#### Output
* output [DynamicResponse](#dynamicresponse)

### getOutboundClickCountsByBrowserFamily
Get browser usage by family


```js
postmarkapp_server.getOutboundClickCountsByBrowserFamily({
  "X-Postmark-Server-Token": ""
}, context)
```

#### Input
* input `object`
  * X-Postmark-Server-Token **required** `string`: The token associated with the Server on which this request will operate.
  * tag `string`: Filter by tag
  * fromdate `string`: Filter stats starting from the date specified. e.g. `2014-01-01`
  * todate `string`: Filter stats up to the date specified. e.g. `2014-02-01`

#### Output
* output `object`

### getOutboundClickCountsByLocation
Get clicks by body location


```js
postmarkapp_server.getOutboundClickCountsByLocation({
  "X-Postmark-Server-Token": ""
}, context)
```

#### Input
* input `object`
  * X-Postmark-Server-Token **required** `string`: The token associated with the Server on which this request will operate.
  * tag `string`: Filter by tag
  * fromdate `string`: Filter stats starting from the date specified. e.g. `2014-01-01`
  * todate `string`: Filter stats up to the date specified. e.g. `2014-02-01`

#### Output
* output [DynamicResponse](#dynamicresponse)

### getOutboundClickCountsByPlatform
Get browser plaform usage


```js
postmarkapp_server.getOutboundClickCountsByPlatform({
  "X-Postmark-Server-Token": ""
}, context)
```

#### Input
* input `object`
  * X-Postmark-Server-Token **required** `string`: The token associated with the Server on which this request will operate.
  * tag `string`: Filter by tag
  * fromdate `string`: Filter stats starting from the date specified. e.g. `2014-01-01`
  * todate `string`: Filter stats up to the date specified. e.g. `2014-02-01`

#### Output
* output [DynamicResponse](#dynamicresponse)

### getOutboundOpenCounts
Get email open counts


```js
postmarkapp_server.getOutboundOpenCounts({
  "X-Postmark-Server-Token": ""
}, context)
```

#### Input
* input `object`
  * X-Postmark-Server-Token **required** `string`: The token associated with the Server on which this request will operate.
  * tag `string`: Filter by tag
  * fromdate `string`: Filter stats starting from the date specified. e.g. `2014-01-01`
  * todate `string`: Filter stats up to the date specified. e.g. `2014-02-01`

#### Output
* output `object`
  * Days `array`
    * items `object`
      * Date `string`
      * Opens `integer`
      * Unique `integer`
  * Opens `integer`
  * Unique `integer`

### getOutboundOpenCountsByEmailClient
Get email client usage


```js
postmarkapp_server.getOutboundOpenCountsByEmailClient({
  "X-Postmark-Server-Token": ""
}, context)
```

#### Input
* input `object`
  * X-Postmark-Server-Token **required** `string`: The token associated with the Server on which this request will operate.
  * tag `string`: Filter by tag
  * fromdate `string`: Filter stats starting from the date specified. e.g. `2014-01-01`
  * todate `string`: Filter stats up to the date specified. e.g. `2014-02-01`

#### Output
* output `object`
  * Days `array`
    * items [DynamicResponse](#dynamicresponse)
  * Desktop `integer`
  * Mobile `integer`
  * Unknown `integer`
  * WebMail `integer`

### getOutboundOpenCountsByPlatform
Get email platform usage


```js
postmarkapp_server.getOutboundOpenCountsByPlatform({
  "X-Postmark-Server-Token": ""
}, context)
```

#### Input
* input `object`
  * X-Postmark-Server-Token **required** `string`: The token associated with the Server on which this request will operate.
  * tag `string`: Filter by tag
  * fromdate `string`: Filter stats starting from the date specified. e.g. `2014-01-01`
  * todate `string`: Filter stats up to the date specified. e.g. `2014-02-01`

#### Output
* output `object`
  * Days `array`
    * items `object`
      * Date `string`
      * Desktop `integer`
      * Mobile `integer`
      * Unknown `integer`
      * WebMail `integer`
  * Desktop `integer`
  * Mobile `integer`
  * Unknown `integer`
  * WebMail `integer`

### getOutboundOpenCountsByReadingTime
Get email read times


```js
postmarkapp_server.getOutboundOpenCountsByReadingTime({
  "X-Postmark-Server-Token": ""
}, context)
```

#### Input
* input `object`
  * X-Postmark-Server-Token **required** `string`: The token associated with the Server on which this request will operate.
  * tag `string`: Filter by tag
  * fromdate `string`: Filter stats starting from the date specified. e.g. `2014-01-01`
  * todate `string`: Filter stats up to the date specified. e.g. `2014-02-01`

#### Output
* output [DynamicResponse](#dynamicresponse)

### getSentCounts
Get sent counts


```js
postmarkapp_server.getSentCounts({
  "X-Postmark-Server-Token": ""
}, context)
```

#### Input
* input `object`
  * X-Postmark-Server-Token **required** `string`: The token associated with the Server on which this request will operate.
  * tag `string`: Filter by tag
  * fromdate `string`: Filter stats starting from the date specified. e.g. `2014-01-01`
  * todate `string`: Filter stats up to the date specified. e.g. `2014-02-01`

#### Output
* output [SentCountsResponse](#sentcountsresponse)

### getSpamComplaints
Get spam complaints


```js
postmarkapp_server.getSpamComplaints({
  "X-Postmark-Server-Token": ""
}, context)
```

#### Input
* input `object`
  * X-Postmark-Server-Token **required** `string`: The token associated with the Server on which this request will operate.
  * tag `string`: Filter by tag
  * fromdate `string`: Filter stats starting from the date specified. e.g. `2014-01-01`
  * todate `string`: Filter stats up to the date specified. e.g. `2014-02-01`

#### Output
* output `object`
  * Days `array`
    * items `object`
      * Date `string`
      * SpamComplaint `integer`
  * SpamComplaint `integer`

### getTrackedEmailCounts
Get tracked email counts


```js
postmarkapp_server.getTrackedEmailCounts({
  "X-Postmark-Server-Token": ""
}, context)
```

#### Input
* input `object`
  * X-Postmark-Server-Token **required** `string`: The token associated with the Server on which this request will operate.
  * tag `string`: Filter by tag
  * fromdate `string`: Filter stats starting from the date specified. e.g. `2014-01-01`
  * todate `string`: Filter stats starting from the date specified. e.g. `2014-01-01`

#### Output
* output `object`
  * Days `array`
    * items `object`
      * Date `string`
      * Tracked `integer`
  * Tracked `integer`

### listTemplates
Get the Templates associated with this Server


```js
postmarkapp_server.listTemplates({
  "X-Postmark-Server-Token": "",
  "Count": 0,
  "Offset": 0
}, context)
```

#### Input
* input `object`
  * X-Postmark-Server-Token **required** `string`: The token associated with the Server on which this request will operate.
  * Count **required** `number`: The number of Templates to return
  * Offset **required** `number`: The number of Templates to "skip" before returning results.

#### Output
* output [TemplateListingResponse](#templatelistingresponse)

### templates.post
Create a Template


```js
postmarkapp_server.templates.post({
  "X-Postmark-Server-Token": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * X-Postmark-Server-Token **required** `string`: The token associated with the Server on which this request will operate.
  * body **required** [CreateTemplateRequest](#createtemplaterequest)

#### Output
* output [TemplateRecordResponse](#templaterecordresponse)

### testTemplateContent
Test Template Content


```js
postmarkapp_server.testTemplateContent({
  "X-Postmark-Server-Token": ""
}, context)
```

#### Input
* input `object`
  * X-Postmark-Server-Token **required** `string`: The token associated with the Server on which this request will operate.
  * body [TemplateValidationRequest](#templatevalidationrequest)

#### Output
* output [TemplateValidationResponse](#templatevalidationresponse)

### deleteTemplate
Delete a Template


```js
postmarkapp_server.deleteTemplate({
  "X-Postmark-Server-Token": "",
  "templateid": 0
}, context)
```

#### Input
* input `object`
  * X-Postmark-Server-Token **required** `string`: The token associated with the Server on which this request will operate.
  * templateid **required** `integer`: The ID for the Template you wish to delete.

#### Output
* output [TemplateDetailResponse](#templatedetailresponse)

### getSingleTemplate
Get a Template


```js
postmarkapp_server.getSingleTemplate({
  "X-Postmark-Server-Token": "",
  "templateid": 0
}, context)
```

#### Input
* input `object`
  * X-Postmark-Server-Token **required** `string`: The token associated with the Server on which this request will operate.
  * templateid **required** `integer`: The ID for the Template you wish to retrieve.

#### Output
* output [TemplateDetailResponse](#templatedetailresponse)

### updateTemplate
Update a Template


```js
postmarkapp_server.updateTemplate({
  "X-Postmark-Server-Token": "",
  "templateid": 0,
  "body": null
}, context)
```

#### Input
* input `object`
  * X-Postmark-Server-Token **required** `string`: The token associated with the Server on which this request will operate.
  * templateid **required** `integer`: The ID for the Template you wish to update.
  * body **required** [EditTemplateRequest](#edittemplaterequest)

#### Output
* output [TemplateRecordResponse](#templaterecordresponse)

### listInboundRules
List inbound rule triggers


```js
postmarkapp_server.listInboundRules({
  "X-Postmark-Server-Token": "",
  "count": 0,
  "offset": 0
}, context)
```

#### Input
* input `object`
  * X-Postmark-Server-Token **required** `string`: The token associated with the Server on which this request will operate.
  * count **required** `integer`: Number of records to return per request.
  * offset **required** `integer`: Number of records to skip.

#### Output
* output `object`
  * InboundRules `array`
    * items `object`
      * ID `integer`
      * Rule `string`
  * TotalCount `integer`

### createInboundRule
Create an inbound rule trigger


```js
postmarkapp_server.createInboundRule({
  "X-Postmark-Server-Token": ""
}, context)
```

#### Input
* input `object`
  * X-Postmark-Server-Token **required** `string`: The token associated with the Server on which this request will operate.
  * body [CreateInboundRuleRequest](#createinboundrulerequest)

#### Output
* output `object`
  * ID `integer`
  * Rule `string`

### deleteInboundRule
Delete a single trigger


```js
postmarkapp_server.deleteInboundRule({
  "X-Postmark-Server-Token": "",
  "triggerid": 0
}, context)
```

#### Input
* input `object`
  * X-Postmark-Server-Token **required** `string`: The token associated with the Server on which this request will operate.
  * triggerid **required** `integer`: The ID of the Inbound Rule that should be deleted.

#### Output
* output [StandardPostmarkResponse](#standardpostmarkresponse)

### searcgTagTriggers
Search triggers


```js
postmarkapp_server.searcgTagTriggers({
  "X-Postmark-Server-Token": "",
  "count": 0,
  "offset": 0
}, context)
```

#### Input
* input `object`
  * X-Postmark-Server-Token **required** `string`: The token associated with the Server on which this request will operate.
  * count **required** `integer`: Number of records to return per request.
  * offset **required** `integer`: Number of records to skip.
  * match_name `string`: Filter by delivery tag

#### Output
* output `object`
  * Tags `array`
    * items `object`
      * ID `integer`
      * MatchName `string`
      * TrackOpens `boolean`
  * TotalCount `integer`

### createTagTrigger
Create a trigger for a tag


```js
postmarkapp_server.createTagTrigger({
  "X-Postmark-Server-Token": ""
}, context)
```

#### Input
* input `object`
  * X-Postmark-Server-Token **required** `string`: The token associated with the Server on which this request will operate.
  * body [EditTagTriggerRequest](#edittagtriggerrequest)

#### Output
* output `object`
  * ID `integer`
  * MatchName `string`
  * TrackOpens `boolean`

### deleteTagTrigger
Delete a single trigger


```js
postmarkapp_server.deleteTagTrigger({
  "X-Postmark-Server-Token": "",
  "triggerid": 0
}, context)
```

#### Input
* input `object`
  * X-Postmark-Server-Token **required** `string`: The token associated with the Server on which this request will operate.
  * triggerid **required** `integer`: The ID for the Tag Trigger that should be deleted.

#### Output
* output [StandardPostmarkResponse](#standardpostmarkresponse)

### getSingleTagTrigger
Get a single trigger


```js
postmarkapp_server.getSingleTagTrigger({
  "X-Postmark-Server-Token": "",
  "triggerid": 0
}, context)
```

#### Input
* input `object`
  * X-Postmark-Server-Token **required** `string`: The token associated with the Server on which this request will operate.
  * triggerid **required** `integer`: The ID for the Tag Trigger for which data should be retrieved.

#### Output
* output `object`
  * ID `integer`
  * MatchName `string`
  * TrackOpens `boolean`

### editTagTrigger
Edit a single trigger


```js
postmarkapp_server.editTagTrigger({
  "X-Postmark-Server-Token": "",
  "triggerid": 0
}, context)
```

#### Input
* input `object`
  * X-Postmark-Server-Token **required** `string`: The token associated with the Server on which this request will operate.
  * triggerid **required** `integer`: The ID of the Tag Trigger that should be modified by this request.
  * body [EditTagTriggerRequest](#edittagtriggerrequest)

#### Output
* output `object`
  * ID `integer`
  * MatchName `string`
  * TrackOpens `boolean`



## Definitions

### Attachment
* Attachment `object`: An attachment for an email message.
  * Content `string`
  * ContentID `string`
  * ContentType `string`
  * Name `string`

### AttachmentCollection
* AttachmentCollection `array`
  * items [Attachment](#attachment)

### BounceActivationResponse
* BounceActivationResponse `object`
  * Bounce [BounceInfoResponse](#bounceinforesponse)
  * Message `string`

### BounceCountElement
* BounceCountElement `object`
  * Count `integer`
  * Name `string`
  * Type `string`

### BounceDumpResponse
* BounceDumpResponse `object`
  * Body `string`: Raw source of bounce. If no dump is available this will return an empty string.

### BounceInfoResponse
* BounceInfoResponse `object`
  * BouncedAt `string`
  * CanActivate `boolean`
  * Content `string`
  * Description `string`
  * Details `string`
  * DumpAvailable `boolean`
  * Email `string`
  * ID `string`
  * Inactive `boolean`
  * MessageID `string`
  * Name `string`
  * Subject `string`
  * Tag `string`
  * Type `string`
  * TypeCode `integer`

### BounceSearchResponse
* BounceSearchResponse `object`
  * Bounces `array`
    * items [BounceInfoResponse](#bounceinforesponse)
  * TotalCount `integer`

### CreateInboundRuleRequest
* CreateInboundRuleRequest `object`
  * Rule `string`

### CreateTemplateRequest
* CreateTemplateRequest `object`: The contents required for creating a new template.
  * HtmlBody `string`: The HTML template definition for this Template.
  * Name **required** `string`: The friendly display name for the template.
  * Subject **required** `string`: The Subject template definition for this Template.
  * TextBody `string`: The Text template definition for this Template.

### DeliveryStatsResponse
* DeliveryStatsResponse `object`
  * Bounces `array`
    * items [BounceCountElement](#bouncecountelement)
  * InactiveMails `integer`

### DynamicResponse


### EditServerConfigurationRequest
* EditServerConfigurationRequest `object`
  * BounceHookUrl `string`
  * ClickHookUrl `string`: Webhook url allowing real-time notification when tracked links are clicked.
  * Color `string` (values: purple, blue, turqoise, green, red, yellow, grey)
  * DeliveryHookUrl `string`
  * InboundDomain `string`
  * InboundHookUrl `string`
  * InboundSpamThreshold `integer`
  * Name `string`
  * OpenHookUrl `string`
  * PostFirstOpenOnly `boolean`
  * RawEmailEnabled `boolean`
  * SmtpApiActivated `boolean`
  * TrackLinks `string` (values: None, HtmlAndText, HtmlOnly, TextOnly)
  * TrackOpens `boolean`

### EditTagTriggerRequest
* EditTagTriggerRequest `object`
  * MatchName `string`
  * TrackOpens `boolean`

### EditTemplateRequest
* EditTemplateRequest `object`: The contents required for creating a new template.
  * HtmlBody `string`: The HTML template definition for this Template.
  * Name `string`: The friendly display name for the template.
  * Subject `string`: The Subject template definition for this Template.
  * TemplateId **required** `integer`: The ID for the template you wish to modify.
  * TextBody `string`: The Text template definition for this Template.

### EmailNameAddressPair
* EmailNameAddressPair `object`
  * Email `string`
  * Name `string`

### EmailWithTemplateRequest
* EmailWithTemplateRequest `object`
  * Bcc `string`
  * ClickHookUrl `string`: Webhook url allowing real-time notification when tracked links are clicked.
  * From `string`
  * InlineCss `boolean`
  * ReplyTo `string`
  * TemplateId `integer`
  * TemplateModel `object`
  * To `string`
  * TrackLinks `string` (values: None, HtmlAndText, HtmlOnly, TextOnly): Replace links in content to enable "click tracking" stats. Default is 'null', which uses the server's LinkTracking setting'.
  * TrackOpens `boolean`: Activate open tracking for this email.

### ExtendedMessageClickEventInformation
* ExtendedMessageClickEventInformation `object`
  * ClickLocation `string`
  * Client `object`
    * Company `string`
    * Family `string`
    * Name `string`
  * Geo `object`
    * City `string`
    * Coords `string`
    * Country `string`
    * CountryISOCode `string`
    * IP `string`
    * Region `string`
    * RegionISOCode `string`
    * Zip `string`
  * MessageID `string`
  * OS `object`
    * Company `string`
    * Family `string`
    * Name `string`
  * OriginalLink `string`
  * Platform `string`
  * ReceivedAt `string`
  * Recipient `string`
  * Tag `string`
  * UserAgent `string`

### ExtendedMessageOpenEventInformation
* ExtendedMessageOpenEventInformation `object`
  * Client `object`
    * Company `string`
    * Family `string`
    * Name `string`
  * FirstOpen `boolean`
  * Geo `object`
    * City `string`
    * Coords `string`
    * Country `string`
    * CountryISOCode `string`
    * IP `string`
    * Region `string`
    * RegionISOCode `string`
    * Zip `string`
  * MessageID `string`
  * OS `object`
    * Company `string`
    * Family `string`
    * Name `string`
  * Platform `string`
  * ReadSeconds `string`
  * ReceivedAt `string`
  * Recipient `string`
  * Tag `string`
  * UserAgent `string`

### HeaderCollection
* HeaderCollection `array`
  * items [MessageHeader](#messageheader)

### InboundMessageDetail
* InboundMessageDetail `object`
  * Attachments [AttachmentCollection](#attachmentcollection)
  * Cc `string`
  * CcFull `array`
    * items [EmailNameAddressPair](#emailnameaddresspair)
  * Date `string`
  * From `string`
  * FromFull `object`
    * Email `string`
    * Name `string`
  * FromName `string`
  * MailboxHash `string`
  * MessageID `string`
  * OriginalRecipient `string`
  * ReplyTo `string`
  * Status `string`
  * Subject `string`
  * Tag `string`
  * To `string`
  * ToFull `array`
    * items [EmailNameAddressPair](#emailnameaddresspair)

### InboundMessageFullDetailsResponse
* InboundMessageFullDetailsResponse `object`
  * Attachments [AttachmentCollection](#attachmentcollection)
  * BlockedReason `string`
  * Cc `string`
  * CcFull `array`
    * items [EmailNameAddressPair](#emailnameaddresspair)
  * Date `string`
  * From `string`
  * FromFull `object`
    * Email `string`
    * Name `string`
  * FromName `string`
  * Headers [HeaderCollection](#headercollection)
  * HtmlBody `string`
  * MailboxHash `string`
  * MessageID `string`
  * OriginalRecipient `string`
  * ReplyTo `string`
  * Status `string`
  * Subject `string`
  * Tag `string`
  * TextBody `string`
  * To `string`
  * ToFull `array`
    * items [EmailNameAddressPair](#emailnameaddresspair)

### InboundSearchResponse
* InboundSearchResponse `object`
  * InboundMessages `array`
    * items [InboundMessageDetail](#inboundmessagedetail)
  * TotalCount `integer`

### MessageClickSearchResponse
* MessageClickSearchResponse `object`
  * Clicks `array`
    * items [ExtendedMessageClickEventInformation](#extendedmessageclickeventinformation)
  * TotalCount `integer`

### MessageEventDetails
* MessageEventDetails `object`
  * Details `object`
    * BounceID `string`
    * DeliveryMessage `string`
    * DestinationIP `string`
    * DestinationServer `string`
    * Summary `string`
  * ReceivedAt `string`
  * Recipient `string`
  * Type `string`

### MessageHeader
* MessageHeader `object`: A single header for an email message.
  * Name `string`: The header's name.
  * Value `string`: The header's value.

### MessageOpenSearchResponse
* MessageOpenSearchResponse `object`
  * Opens `array`
    * items [ExtendedMessageOpenEventInformation](#extendedmessageopeneventinformation)
  * TotalCount `integer`

### OutboundMessageDetail
* OutboundMessageDetail `object`
  * Attachments [AttachmentCollection](#attachmentcollection)
  * Bcc `array`
    * items [EmailNameAddressPair](#emailnameaddresspair)
  * Cc `array`
    * items [EmailNameAddressPair](#emailnameaddresspair)
  * ClickHookUrl `string`
  * From `string`
  * MessageID `string`
  * ReceivedAt `string`
  * Recipients `array`
    * items `string`
  * Status `string`
  * Subject `string`
  * Tag `string`
  * To `array`
    * items [EmailNameAddressPair](#emailnameaddresspair)
  * TrackLinks `string` (values: None, HtmlAndText, HtmlOnly, TextOnly)
  * TrackOpens `boolean`

### OutboundMessageDetailsResponse
* OutboundMessageDetailsResponse `object`
  * Attachments [AttachmentCollection](#attachmentcollection)
  * Bcc `array`
    * items [EmailNameAddressPair](#emailnameaddresspair)
  * Body `string`
  * Cc `array`
    * items [EmailNameAddressPair](#emailnameaddresspair)
  * ClickHookUrl `string`
  * From `string`
  * HtmlBody `string`
  * MessageEvents `array`
    * items [MessageEventDetails](#messageeventdetails)
  * MessageID `string`
  * ReceivedAt `string`
  * Recipients `array`
    * items `string`
  * Status `string`
  * Subject `string`
  * Tag `string`
  * TextBody `string`
  * To `array`
    * items [EmailNameAddressPair](#emailnameaddresspair)
  * TrackLinks `string` (values: None, HtmlAndText, HtmlOnly, TextOnly)
  * TrackOpens `boolean`

### OutboundMessageDumpResponse
* OutboundMessageDumpResponse `object`
  * Body `string`: Raw source of message. If no dump is available this will return an empty string.

### OutboundOverviewStatsResponse
* OutboundOverviewStatsResponse `object`
  * BounceRate `integer`
  * Bounced `integer`
  * Opens `integer`
  * SMTPAPIErrors `integer`
  * Sent `integer`
  * SpamComplaints `integer`
  * SpamComplaintsRate `integer`
  * TotalClicks `integer`
  * TotalTrackedLinksSent `integer`
  * Tracked `integer`
  * UniqueLinksClicked `integer`
  * UniqueOpens `integer`
  * WithClientRecorded `integer`
  * WithLinkTracking `integer`
  * WithOpenTracking `integer`
  * WithPlatformRecorded `integer`
  * WithReadTimeRecorded `integer`

### OutboundSearchResponse
* OutboundSearchResponse `object`
  * Messages `array`
    * items [OutboundMessageDetail](#outboundmessagedetail)
  * TotalCount `integer`

### SendEmailBatchRequest
* SendEmailBatchRequest `array`
  * items [SendEmailRequest](#sendemailrequest)

### SendEmailBatchResponse
* SendEmailBatchResponse `array`
  * items [SendEmailResponse](#sendemailresponse)

### SendEmailRequest
* SendEmailRequest `object`
  * Attachments [AttachmentCollection](#attachmentcollection)
  * Bcc `string`: Bcc recipient email address. Multiple addresses are comma seperated. Max 50.
  * Cc `string`: Recipient email address. Multiple addresses are comma seperated. Max 50.
  * ClickHookUrl `string`: Webhook url allowing real-time notification when tracked links are clicked.
  * From `string`: The sender email address. Must have a registered and confirmed Sender Signature.
  * Headers [HeaderCollection](#headercollection)
  * HtmlBody `string`: If no TextBody specified HTML email message
  * ReplyTo `string`: Reply To override email address. Defaults to the Reply To set in the sender signature.
  * Subject `string`: Email Subject
  * Tag `string`: Email tag that allows you to categorize outgoing emails and get detailed statistics.
  * TextBody `string`: If no HtmlBody specified Plain text email message
  * To `string`: Recipient email address. Multiple addresses are comma seperated. Max 50.
  * TrackLinks `string` (values: None, HtmlAndText, HtmlOnly, TextOnly): Replace links in content to enable "click tracking" stats. Default is 'null', which uses the server's LinkTracking setting'.
  * TrackOpens `boolean`: Activate open tracking for this email.

### SendEmailResponse
* SendEmailResponse `object`: The standard response when a postmark message is sent
  * ErrorCode `integer`
  * Message `string`
  * MessageID `string`
  * SubmittedAt `string`
  * To `string`

### SentCountsResponse
* SentCountsResponse `object`: The result of a get sent counts operation.
  * Days `array`
    * items `object`
      * Date `string`
      * Sent `integer`
  * Sent `integer`

### ServerConfigurationResponse
* ServerConfigurationResponse `object`
  * ApiTokens `array`
    * items `string`
  * BounceHookUrl `string`
  * ClickHookUrl `string`
  * Color `string` (values: purple, blue, turqoise, green, red, yellow, grey)
  * DeliveryHookUrl `string`
  * ID `integer`
  * InboundAddress `string`
  * InboundDomain `string`
  * InboundHash `string`
  * InboundHookUrl `string`
  * InboundSpamThreshold `integer`
  * Name `string`
  * OpenHookUrl `string`
  * PostFirstOpenOnly `boolean`
  * RawEmailEnabled `boolean`
  * ServerLink `string`
  * SmtpApiActivated `boolean`
  * TrackLinks `string` (values: None, HtmlAndText, HtmlOnly, TextOnly)
  * TrackOpens `boolean`

### StandardPostmarkResponse
* StandardPostmarkResponse `object`: A Postmark API error.
  * ErrorCode `integer`
  * Message `string`

### TemplateDetailResponse
* TemplateDetailResponse `object`
  * Active `boolean`: Indicates that this template may be used for sending email.
  * AssociatedServerId `integer`: The ID of the Server with which this template is associated.
  * HtmlBody `string`: The content to use for the HtmlBody when this template is used to send email.
  * Name `string`: The display name for the template.
  * Subject `string`: The content to use for the Subject when this template is used to send email.
  * TemplateID `integer`: The ID associated with the template.
  * TextBody `string`: The content to use for the TextBody when this template is used to send email.

### TemplateListingResponse
* TemplateListingResponse `object`
  * Templates API `array`: Basic information for each Template returned from the query.
    * items [TemplateRecordResponse](#templaterecordresponse)
  * TotalCount `number`: The total number of Templates API associated with this server.

### TemplateRecordResponse
* TemplateRecordResponse `object`
  * Active `boolean`: True if this template is currently available for use.
  * Name `string`: The display name for this template.
  * TemplateId `number`: The associated ID for this template.

### TemplateValidationError
* TemplateValidationError `object`
  * CharacterPosition `integer`
  * Line `integer`
  * Message `string`

### TemplateValidationRequest
* TemplateValidationRequest `object`
  * HtmlBody `string`: The html body content to validate. Must be specified if Subject or
  * InlineCssForHtmlTestRender `boolean`: When HtmlBody is specified, the test render will have style blocks
  * Subject `string`: The subject content to validate. Must be specified if HtmlBody or
  * TextBody `string`: The text body content to validate. Must be specified if HtmlBody or
  * TextRenderModel `object`: The model to be used when rendering test content.

### TemplateValidationResponse
* TemplateValidationResponse `object`
  * AllContentIsValid `boolean`
  * HtmlBody [TemplateValidationResult](#templatevalidationresult)
  * Subject [TemplateValidationResult](#templatevalidationresult)
  * SuggestedTemplateModel `object`
  * TextBody [TemplateValidationResult](#templatevalidationresult)

### TemplateValidationResult
* TemplateValidationResult `object`
  * ContentIsValid `boolean`
  * RenderedContent `string`
  * ValidationErrors `array`
    * items [TemplateValidationError](#templatevalidationerror)


