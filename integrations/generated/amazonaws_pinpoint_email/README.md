# @datafire/amazonaws_pinpoint_email

Client library for Amazon Pinpoint Email Service

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_pinpoint_email
```
```js
let amazonaws_pinpoint_email = require('@datafire/amazonaws_pinpoint_email').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<fullname>Amazon Pinpoint Email Service</fullname> <p>Welcome to the <i>Amazon Pinpoint Email API Reference</i>. This guide provides information about the Amazon Pinpoint Email API (version 1.0), including supported operations, data types, parameters, and schemas.</p> <p> <a href="https://aws.amazon.com/pinpoint">Amazon Pinpoint</a> is an AWS service that you can use to engage with your customers across multiple messaging channels. You can use Amazon Pinpoint to send email, SMS text messages, voice messages, and push notifications. The Amazon Pinpoint Email API provides programmatic access to options that are unique to the email channel and supplement the options provided by the Amazon Pinpoint API.</p> <p>If you're new to Amazon Pinpoint, you might find it helpful to also review the <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/welcome.html">Amazon Pinpoint Developer Guide</a>. The <i>Amazon Pinpoint Developer Guide</i> provides tutorials, code samples, and procedures that demonstrate how to use Amazon Pinpoint features programmatically and how to integrate Amazon Pinpoint functionality into mobile apps and other types of applications. The guide also provides information about key topics such as Amazon Pinpoint integration with other AWS services and the limits that apply to using the service.</p> <p>The Amazon Pinpoint Email API is available in several AWS Regions and it provides an endpoint for each of these Regions. For a list of all the Regions and endpoints where the API is currently available, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#pinpoint_region">AWS Service Endpoints</a> in the <i>Amazon Web Services General Reference</i>. To learn more about AWS Regions, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande-manage.html">Managing AWS Regions</a> in the <i>Amazon Web Services General Reference</i>.</p> <p>In each Region, AWS maintains multiple Availability Zones. These Availability Zones are physically isolated from each other, but are united by private, low-latency, high-throughput, and highly redundant network connections. These Availability Zones enable us to provide very high levels of availability and redundancy, while also minimizing latency. To learn more about the number of Availability Zones that are available in each Region, see <a href="http://aws.amazon.com/about-aws/global-infrastructure/">AWS Global Infrastructure</a>.</p>

## Actions

### GetAccount



```js
amazonaws_pinpoint_email.GetAccount({}, context)
```

#### Input
* input `object`

#### Output
* output [GetAccountResponse](#getaccountresponse)

### PutAccountDedicatedIpWarmupAttributes



```js
amazonaws_pinpoint_email.PutAccountDedicatedIpWarmupAttributes({}, context)
```

#### Input
* input `object`
  * AutoWarmupEnabled `boolean`: Enables or disables the automatic warm-up feature for dedicated IP addresses that are associated with your Amazon Pinpoint account in the current AWS Region. Set to <code>true</code> to enable the automatic warm-up feature, or set to <code>false</code> to disable it.

#### Output
* output [PutAccountDedicatedIpWarmupAttributesResponse](#putaccountdedicatedipwarmupattributesresponse)

### PutAccountSendingAttributes



```js
amazonaws_pinpoint_email.PutAccountSendingAttributes({}, context)
```

#### Input
* input `object`
  * SendingEnabled `boolean`: <p>Enables or disables your account's ability to send email. Set to <code>true</code> to enable email sending, or set to <code>false</code> to disable email sending.</p> <note> <p>If AWS paused your account's ability to send email, you can't use this operation to resume your account's ability to send email.</p> </note>

#### Output
* output [PutAccountSendingAttributesResponse](#putaccountsendingattributesresponse)

### ListConfigurationSets



```js
amazonaws_pinpoint_email.ListConfigurationSets({}, context)
```

#### Input
* input `object`
  * NextToken `string`
  * PageSize `integer`

#### Output
* output [ListConfigurationSetsResponse](#listconfigurationsetsresponse)

### CreateConfigurationSet



```js
amazonaws_pinpoint_email.CreateConfigurationSet({
  "ConfigurationSetName": ""
}, context)
```

#### Input
* input `object`
  * ConfigurationSetName **required** `string`: <p>The name of a configuration set.</p> <p>In Amazon Pinpoint, <i>configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>
  * DeliveryOptions `object`: Used to associate a configuration set with a dedicated IP pool.
    * SendingPoolName
    * TlsPolicy
  * ReputationOptions `object`: Enable or disable collection of reputation metrics for emails that you send using this configuration set in the current AWS Region. 
    * LastFreshStart
    * ReputationMetricsEnabled
  * SendingOptions `object`: Used to enable or disable email sending for messages that use this configuration set in the current AWS Region.
    * SendingEnabled
  * Tags `array`: An array of objects that define the tags (keys and values) that you want to associate with the configuration set.
    * items [Tag](#tag)
  * TrackingOptions `object`: <p>An object that defines the tracking options for a configuration set. When you use Amazon Pinpoint to send an email, it contains an invisible image that's used to track when recipients open your email. If your email contains links, those links are changed slightly in order to track when recipients click them.</p> <p>These images and links include references to a domain operated by AWS. You can optionally configure Amazon Pinpoint to use a domain that you operate for these images and links.</p>
    * CustomRedirectDomain

#### Output
* output [CreateConfigurationSetResponse](#createconfigurationsetresponse)

### DeleteConfigurationSet



```js
amazonaws_pinpoint_email.DeleteConfigurationSet({
  "ConfigurationSetName": ""
}, context)
```

#### Input
* input `object`
  * ConfigurationSetName **required** `string`

#### Output
* output [DeleteConfigurationSetResponse](#deleteconfigurationsetresponse)

### GetConfigurationSet



```js
amazonaws_pinpoint_email.GetConfigurationSet({
  "ConfigurationSetName": ""
}, context)
```

#### Input
* input `object`
  * ConfigurationSetName **required** `string`

#### Output
* output [GetConfigurationSetResponse](#getconfigurationsetresponse)

### PutConfigurationSetDeliveryOptions



```js
amazonaws_pinpoint_email.PutConfigurationSetDeliveryOptions({
  "ConfigurationSetName": ""
}, context)
```

#### Input
* input `object`
  * ConfigurationSetName **required** `string`
  * SendingPoolName `string`: The name of the dedicated IP pool that you want to associate with the configuration set.
  * TlsPolicy `string` (values: REQUIRE, OPTIONAL): Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS). If the value is <code>Require</code>, messages are only delivered if a TLS connection can be established. If the value is <code>Optional</code>, messages can be delivered in plain text if a TLS connection can't be established.

#### Output
* output [PutConfigurationSetDeliveryOptionsResponse](#putconfigurationsetdeliveryoptionsresponse)

### GetConfigurationSetEventDestinations



```js
amazonaws_pinpoint_email.GetConfigurationSetEventDestinations({
  "ConfigurationSetName": ""
}, context)
```

#### Input
* input `object`
  * ConfigurationSetName **required** `string`

#### Output
* output [GetConfigurationSetEventDestinationsResponse](#getconfigurationseteventdestinationsresponse)

### CreateConfigurationSetEventDestination



```js
amazonaws_pinpoint_email.CreateConfigurationSetEventDestination({
  "ConfigurationSetName": "",
  "EventDestinationName": "",
  "EventDestination": {}
}, context)
```

#### Input
* input `object`
  * ConfigurationSetName **required** `string`
  * EventDestination **required** `object`: An object that defines the event destination. Specifically, it defines which services receive events from emails sent using the configuration set that the event destination is associated with. Also defines the types of events that are sent to the event destination.
    * CloudWatchDestination
      * DimensionConfigurations **required**
        * items [CloudWatchDimensionConfiguration](#cloudwatchdimensionconfiguration)
    * Enabled
    * KinesisFirehoseDestination
      * DeliveryStreamArn **required**
      * IamRoleArn **required**
    * MatchingEventTypes
      * items [EventType](#eventtype)
    * PinpointDestination
      * ApplicationArn
    * SnsDestination
      * TopicArn **required**
  * EventDestinationName **required** `string`: <p>The name of an event destination.</p> <p>In Amazon Pinpoint, <i>events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>

#### Output
* output [CreateConfigurationSetEventDestinationResponse](#createconfigurationseteventdestinationresponse)

### DeleteConfigurationSetEventDestination



```js
amazonaws_pinpoint_email.DeleteConfigurationSetEventDestination({
  "ConfigurationSetName": "",
  "EventDestinationName": ""
}, context)
```

#### Input
* input `object`
  * ConfigurationSetName **required** `string`
  * EventDestinationName **required** `string`

#### Output
* output [DeleteConfigurationSetEventDestinationResponse](#deleteconfigurationseteventdestinationresponse)

### UpdateConfigurationSetEventDestination



```js
amazonaws_pinpoint_email.UpdateConfigurationSetEventDestination({
  "ConfigurationSetName": "",
  "EventDestinationName": "",
  "EventDestination": {}
}, context)
```

#### Input
* input `object`
  * ConfigurationSetName **required** `string`
  * EventDestinationName **required** `string`
  * EventDestination **required** `object`: An object that defines the event destination. Specifically, it defines which services receive events from emails sent using the configuration set that the event destination is associated with. Also defines the types of events that are sent to the event destination.
    * CloudWatchDestination
      * DimensionConfigurations **required**
        * items [CloudWatchDimensionConfiguration](#cloudwatchdimensionconfiguration)
    * Enabled
    * KinesisFirehoseDestination
      * DeliveryStreamArn **required**
      * IamRoleArn **required**
    * MatchingEventTypes
      * items [EventType](#eventtype)
    * PinpointDestination
      * ApplicationArn
    * SnsDestination
      * TopicArn **required**

#### Output
* output [UpdateConfigurationSetEventDestinationResponse](#updateconfigurationseteventdestinationresponse)

### PutConfigurationSetReputationOptions



```js
amazonaws_pinpoint_email.PutConfigurationSetReputationOptions({
  "ConfigurationSetName": ""
}, context)
```

#### Input
* input `object`
  * ConfigurationSetName **required** `string`
  * ReputationMetricsEnabled `boolean`: If <code>true</code>, tracking of reputation metrics is enabled for the configuration set. If <code>false</code>, tracking of reputation metrics is disabled for the configuration set.

#### Output
* output [PutConfigurationSetReputationOptionsResponse](#putconfigurationsetreputationoptionsresponse)

### PutConfigurationSetSendingOptions



```js
amazonaws_pinpoint_email.PutConfigurationSetSendingOptions({
  "ConfigurationSetName": ""
}, context)
```

#### Input
* input `object`
  * ConfigurationSetName **required** `string`
  * SendingEnabled `boolean`: If <code>true</code>, email sending is enabled for the configuration set. If <code>false</code>, email sending is disabled for the configuration set.

#### Output
* output [PutConfigurationSetSendingOptionsResponse](#putconfigurationsetsendingoptionsresponse)

### PutConfigurationSetTrackingOptions



```js
amazonaws_pinpoint_email.PutConfigurationSetTrackingOptions({
  "ConfigurationSetName": ""
}, context)
```

#### Input
* input `object`
  * ConfigurationSetName **required** `string`
  * CustomRedirectDomain `string`: The domain that you want to use for tracking open and click events.

#### Output
* output [PutConfigurationSetTrackingOptionsResponse](#putconfigurationsettrackingoptionsresponse)

### ListDedicatedIpPools



```js
amazonaws_pinpoint_email.ListDedicatedIpPools({}, context)
```

#### Input
* input `object`
  * NextToken `string`
  * PageSize `integer`

#### Output
* output [ListDedicatedIpPoolsResponse](#listdedicatedippoolsresponse)

### CreateDedicatedIpPool



```js
amazonaws_pinpoint_email.CreateDedicatedIpPool({
  "PoolName": ""
}, context)
```

#### Input
* input `object`
  * PoolName **required** `string`: The name of a dedicated IP pool.
  * Tags `array`: An object that defines the tags (keys and values) that you want to associate with the pool.
    * items [Tag](#tag)

#### Output
* output [CreateDedicatedIpPoolResponse](#creatededicatedippoolresponse)

### DeleteDedicatedIpPool



```js
amazonaws_pinpoint_email.DeleteDedicatedIpPool({
  "PoolName": ""
}, context)
```

#### Input
* input `object`
  * PoolName **required** `string`

#### Output
* output [DeleteDedicatedIpPoolResponse](#deletededicatedippoolresponse)

### GetDedicatedIps



```js
amazonaws_pinpoint_email.GetDedicatedIps({}, context)
```

#### Input
* input `object`
  * PoolName `string`
  * NextToken `string`
  * PageSize `integer`

#### Output
* output [GetDedicatedIpsResponse](#getdedicatedipsresponse)

### GetDedicatedIp



```js
amazonaws_pinpoint_email.GetDedicatedIp({
  "IP": ""
}, context)
```

#### Input
* input `object`
  * IP **required** `string`

#### Output
* output [GetDedicatedIpResponse](#getdedicatedipresponse)

### PutDedicatedIpInPool



```js
amazonaws_pinpoint_email.PutDedicatedIpInPool({
  "IP": "",
  "DestinationPoolName": ""
}, context)
```

#### Input
* input `object`
  * IP **required** `string`
  * DestinationPoolName **required** `string`: The name of a dedicated IP pool.

#### Output
* output [PutDedicatedIpInPoolResponse](#putdedicatedipinpoolresponse)

### PutDedicatedIpWarmupAttributes



```js
amazonaws_pinpoint_email.PutDedicatedIpWarmupAttributes({
  "IP": "",
  "WarmupPercentage": 0
}, context)
```

#### Input
* input `object`
  * IP **required** `string`
  * WarmupPercentage **required** `integer`: The warm-up percentage that you want to associate with the dedicated IP address.

#### Output
* output [PutDedicatedIpWarmupAttributesResponse](#putdedicatedipwarmupattributesresponse)

### GetDeliverabilityDashboardOptions



```js
amazonaws_pinpoint_email.GetDeliverabilityDashboardOptions({}, context)
```

#### Input
* input `object`

#### Output
* output [GetDeliverabilityDashboardOptionsResponse](#getdeliverabilitydashboardoptionsresponse)

### PutDeliverabilityDashboardOption



```js
amazonaws_pinpoint_email.PutDeliverabilityDashboardOption({
  "DashboardEnabled": true
}, context)
```

#### Input
* input `object`
  * DashboardEnabled **required** `boolean`: Specifies whether to enable the Deliverability dashboard for your Amazon Pinpoint account. To enable the dashboard, set this value to <code>true</code>.
  * SubscribedDomains `array`: An object that contains information about the Deliverability dashboard subscription for a verified domain that you use to send email and currently has an active Deliverability dashboard subscription. If a Deliverability dashboard subscription is active for a domain, you gain access to reputation, inbox placement, and other metrics for the domain.
    * items [DomainDeliverabilityTrackingOption](#domaindeliverabilitytrackingoption)

#### Output
* output [PutDeliverabilityDashboardOptionResponse](#putdeliverabilitydashboardoptionresponse)

### GetBlacklistReports



```js
amazonaws_pinpoint_email.GetBlacklistReports({
  "BlacklistItemNames": []
}, context)
```

#### Input
* input `object`
  * BlacklistItemNames **required** `array`

#### Output
* output [GetBlacklistReportsResponse](#getblacklistreportsresponse)

### GetDomainDeliverabilityCampaign



```js
amazonaws_pinpoint_email.GetDomainDeliverabilityCampaign({
  "CampaignId": ""
}, context)
```

#### Input
* input `object`
  * CampaignId **required** `string`

#### Output
* output [GetDomainDeliverabilityCampaignResponse](#getdomaindeliverabilitycampaignresponse)

### ListDomainDeliverabilityCampaigns



```js
amazonaws_pinpoint_email.ListDomainDeliverabilityCampaigns({
  "StartDate": "",
  "EndDate": "",
  "SubscribedDomain": ""
}, context)
```

#### Input
* input `object`
  * StartDate **required** `string`
  * EndDate **required** `string`
  * SubscribedDomain **required** `string`
  * NextToken `string`
  * PageSize `integer`

#### Output
* output [ListDomainDeliverabilityCampaignsResponse](#listdomaindeliverabilitycampaignsresponse)

### GetDomainStatisticsReport



```js
amazonaws_pinpoint_email.GetDomainStatisticsReport({
  "Domain": "",
  "StartDate": "",
  "EndDate": ""
}, context)
```

#### Input
* input `object`
  * Domain **required** `string`
  * StartDate **required** `string`
  * EndDate **required** `string`

#### Output
* output [GetDomainStatisticsReportResponse](#getdomainstatisticsreportresponse)

### CreateDeliverabilityTestReport



```js
amazonaws_pinpoint_email.CreateDeliverabilityTestReport({
  "FromEmailAddress": "",
  "Content": {}
}, context)
```

#### Input
* input `object`
  * Content **required** `object`: An object that defines the entire content of the email, including the message headers and the body content. You can create a simple email message, in which you specify the subject and the text and HTML versions of the message body. You can also create raw messages, in which you specify a complete MIME-formatted message. Raw messages can include attachments and custom headers.
    * Raw
      * Data **required**
    * Simple
      * Body **required**
        * Html
          * Charset
          * Data **required**
        * Text
          * Charset
          * Data **required**
      * Subject **required**
        * Charset
        * Data **required**
    * Template
      * TemplateArn
      * TemplateData
  * FromEmailAddress **required** `string`: The email address that the predictive inbox placement test email was sent from.
  * ReportName `string`: A name that helps you identify a report generated by the Deliverability dashboard.
  * Tags `array`: An array of objects that define the tags (keys and values) that you want to associate with the predictive inbox placement test.
    * items [Tag](#tag)

#### Output
* output [CreateDeliverabilityTestReportResponse](#createdeliverabilitytestreportresponse)

### ListDeliverabilityTestReports



```js
amazonaws_pinpoint_email.ListDeliverabilityTestReports({}, context)
```

#### Input
* input `object`
  * NextToken `string`
  * PageSize `integer`

#### Output
* output [ListDeliverabilityTestReportsResponse](#listdeliverabilitytestreportsresponse)

### GetDeliverabilityTestReport



```js
amazonaws_pinpoint_email.GetDeliverabilityTestReport({
  "ReportId": ""
}, context)
```

#### Input
* input `object`
  * ReportId **required** `string`

#### Output
* output [GetDeliverabilityTestReportResponse](#getdeliverabilitytestreportresponse)

### ListEmailIdentities



```js
amazonaws_pinpoint_email.ListEmailIdentities({}, context)
```

#### Input
* input `object`
  * NextToken `string`
  * PageSize `integer`

#### Output
* output [ListEmailIdentitiesResponse](#listemailidentitiesresponse)

### CreateEmailIdentity



```js
amazonaws_pinpoint_email.CreateEmailIdentity({
  "EmailIdentity": ""
}, context)
```

#### Input
* input `object`
  * EmailIdentity **required** `string`: The email address or domain that you want to verify.
  * Tags `array`: An array of objects that define the tags (keys and values) that you want to associate with the email identity.
    * items [Tag](#tag)

#### Output
* output [CreateEmailIdentityResponse](#createemailidentityresponse)

### DeleteEmailIdentity



```js
amazonaws_pinpoint_email.DeleteEmailIdentity({
  "EmailIdentity": ""
}, context)
```

#### Input
* input `object`
  * EmailIdentity **required** `string`

#### Output
* output [DeleteEmailIdentityResponse](#deleteemailidentityresponse)

### GetEmailIdentity



```js
amazonaws_pinpoint_email.GetEmailIdentity({
  "EmailIdentity": ""
}, context)
```

#### Input
* input `object`
  * EmailIdentity **required** `string`

#### Output
* output [GetEmailIdentityResponse](#getemailidentityresponse)

### PutEmailIdentityDkimAttributes



```js
amazonaws_pinpoint_email.PutEmailIdentityDkimAttributes({
  "EmailIdentity": ""
}, context)
```

#### Input
* input `object`
  * EmailIdentity **required** `string`
  * SigningEnabled `boolean`: <p>Sets the DKIM signing configuration for the identity.</p> <p>When you set this value <code>true</code>, then the messages that Amazon Pinpoint sends from the identity are DKIM-signed. When you set this value to <code>false</code>, then the messages that Amazon Pinpoint sends from the identity aren't DKIM-signed.</p>

#### Output
* output [PutEmailIdentityDkimAttributesResponse](#putemailidentitydkimattributesresponse)

### PutEmailIdentityFeedbackAttributes



```js
amazonaws_pinpoint_email.PutEmailIdentityFeedbackAttributes({
  "EmailIdentity": ""
}, context)
```

#### Input
* input `object`
  * EmailIdentity **required** `string`
  * EmailForwardingEnabled `boolean`: <p>Sets the feedback forwarding configuration for the identity.</p> <p>If the value is <code>true</code>, Amazon Pinpoint sends you email notifications when bounce or complaint events occur. Amazon Pinpoint sends this notification to the address that you specified in the Return-Path header of the original email.</p> <p>When you set this value to <code>false</code>, Amazon Pinpoint sends notifications through other mechanisms, such as by notifying an Amazon SNS topic or another event destination. You're required to have a method of tracking bounces and complaints. If you haven't set up another mechanism for receiving bounce or complaint notifications, Amazon Pinpoint sends an email notification when these events occur (even if this setting is disabled).</p>

#### Output
* output [PutEmailIdentityFeedbackAttributesResponse](#putemailidentityfeedbackattributesresponse)

### PutEmailIdentityMailFromAttributes



```js
amazonaws_pinpoint_email.PutEmailIdentityMailFromAttributes({
  "EmailIdentity": ""
}, context)
```

#### Input
* input `object`
  * EmailIdentity **required** `string`
  * BehaviorOnMxFailure `string` (values: USE_DEFAULT_VALUE, REJECT_MESSAGE): <p>The action that you want Amazon Pinpoint to take if it can't read the required MX record for a custom MAIL FROM domain. When you set this value to <code>UseDefaultValue</code>, Amazon Pinpoint uses <i>amazonses.com</i> as the MAIL FROM domain. When you set this value to <code>RejectMessage</code>, Amazon Pinpoint returns a <code>MailFromDomainNotVerified</code> error, and doesn't attempt to deliver the email.</p> <p>These behaviors are taken when the custom MAIL FROM domain configuration is in the <code>Pending</code>, <code>Failed</code>, and <code>TemporaryFailure</code> states.</p>
  * MailFromDomain `string`: The domain that you want to use as a MAIL FROM domain.

#### Output
* output [PutEmailIdentityMailFromAttributesResponse](#putemailidentitymailfromattributesresponse)

### SendEmail



```js
amazonaws_pinpoint_email.SendEmail({
  "Destination": {},
  "Content": {}
}, context)
```

#### Input
* input `object`
  * ConfigurationSetName `string`: <p>The name of a configuration set.</p> <p>In Amazon Pinpoint, <i>configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>
  * Content **required** `object`: An object that defines the entire content of the email, including the message headers and the body content. You can create a simple email message, in which you specify the subject and the text and HTML versions of the message body. You can also create raw messages, in which you specify a complete MIME-formatted message. Raw messages can include attachments and custom headers.
    * Raw
      * Data **required**
    * Simple
      * Body **required**
        * Html
          * Charset
          * Data **required**
        * Text
          * Charset
          * Data **required**
      * Subject **required**
        * Charset
        * Data **required**
    * Template
      * TemplateArn
      * TemplateData
  * Destination **required** `object`: An object that describes the recipients for an email.
    * BccAddresses
      * items [EmailAddress](#emailaddress)
    * CcAddresses
      * items [EmailAddress](#emailaddress)
    * ToAddresses
      * items [EmailAddress](#emailaddress)
  * EmailTags `array`: A list of message tags.
    * items [MessageTag](#messagetag)
  * FeedbackForwardingEmailAddress `string`: The address that Amazon Pinpoint should send bounce and complaint notifications to.
  * FromEmailAddress `string`: The email address that you want to use as the "From" address for the email. The address that you specify has to be verified. 
  * ReplyToAddresses `array`: The "Reply-to" email addresses for the message. When the recipient replies to the message, each Reply-to address receives the reply.
    * items [EmailAddress](#emailaddress)

#### Output
* output [SendEmailResponse](#sendemailresponse)

### TagResource



```js
amazonaws_pinpoint_email.TagResource({
  "ResourceArn": "",
  "Tags": []
}, context)
```

#### Input
* input `object`
  * ResourceArn **required** `string`: The Amazon Resource Name (ARN) of the resource that you want to add one or more tags to.
  * Tags **required** `array`: A list of the tags that you want to add to the resource. A tag consists of a required tag key (<code>Key</code>) and an associated tag value (<code>Value</code>). The maximum length of a tag key is 128 characters. The maximum length of a tag value is 256 characters.
    * items [Tag](#tag)

#### Output
* output [TagResourceResponse](#tagresourceresponse)

### ListTagsForResource



```js
amazonaws_pinpoint_email.ListTagsForResource({
  "ResourceArn": ""
}, context)
```

#### Input
* input `object`
  * ResourceArn **required** `string`

#### Output
* output [ListTagsForResourceResponse](#listtagsforresourceresponse)

### UntagResource



```js
amazonaws_pinpoint_email.UntagResource({
  "ResourceArn": "",
  "TagKeys": []
}, context)
```

#### Input
* input `object`
  * ResourceArn **required** `string`
  * TagKeys **required** `array`

#### Output
* output [UntagResourceResponse](#untagresourceresponse)



## Definitions

### AccountSuspendedException


### AlreadyExistsException


### AmazonResourceName
* AmazonResourceName `string`

### BadRequestException


### BehaviorOnMxFailure
* BehaviorOnMxFailure `string` (values: USE_DEFAULT_VALUE, REJECT_MESSAGE): <p>The action that you want Amazon Pinpoint to take if it can't read the required MX record for a custom MAIL FROM domain. When you set this value to <code>UseDefaultValue</code>, Amazon Pinpoint uses <i>amazonses.com</i> as the MAIL FROM domain. When you set this value to <code>RejectMessage</code>, Amazon Pinpoint returns a <code>MailFromDomainNotVerified</code> error, and doesn't attempt to deliver the email.</p> <p>These behaviors are taken when the custom MAIL FROM domain configuration is in the <code>Pending</code>, <code>Failed</code>, and <code>TemporaryFailure</code> states.</p>

### BlacklistEntries
* BlacklistEntries `array`
  * items [BlacklistEntry](#blacklistentry)

### BlacklistEntry
* BlacklistEntry `object`: An object that contains information about a blacklisting event that impacts one of the dedicated IP addresses that is associated with your account.
  * Description
  * ListingTime
  * RblName

### BlacklistItemName
* BlacklistItemName `string`: An IP address that you want to obtain blacklist information for.

### BlacklistItemNames
* BlacklistItemNames `array`
  * items [BlacklistItemName](#blacklistitemname)

### BlacklistReport
* BlacklistReport `object`

### BlacklistingDescription
* BlacklistingDescription `string`: A description of the blacklisting event.

### Body
* Body `object`: Represents the body of the email message.
  * Html
    * Charset
    * Data **required**
  * Text
    * Charset
    * Data **required**

### CampaignId
* CampaignId `string`

### Charset
* Charset `string`

### CloudWatchDestination
* CloudWatchDestination `object`: An object that defines an Amazon CloudWatch destination for email events. You can use Amazon CloudWatch to monitor and gain insights on your email sending metrics.
  * DimensionConfigurations **required**
    * items [CloudWatchDimensionConfiguration](#cloudwatchdimensionconfiguration)

### CloudWatchDimensionConfiguration
* CloudWatchDimensionConfiguration `object`: An object that defines the dimension configuration to use when you send Amazon Pinpoint email events to Amazon CloudWatch.
  * DefaultDimensionValue **required**
  * DimensionName **required**
  * DimensionValueSource **required**

### CloudWatchDimensionConfigurations
* CloudWatchDimensionConfigurations `array`
  * items [CloudWatchDimensionConfiguration](#cloudwatchdimensionconfiguration)

### ConcurrentModificationException


### ConfigurationSetName
* ConfigurationSetName `string`: <p>The name of a configuration set.</p> <p>In Amazon Pinpoint, <i>configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>

### ConfigurationSetNameList
* ConfigurationSetNameList `array`
  * items [ConfigurationSetName](#configurationsetname)

### Content
* Content `object`: An object that represents the content of the email, and optionally a character set specification.
  * Charset
  * Data **required**

### CreateConfigurationSetEventDestinationRequest
* CreateConfigurationSetEventDestinationRequest `object`: A request to add an event destination to a configuration set.
  * EventDestination **required**
    * CloudWatchDestination
      * DimensionConfigurations **required**
        * items [CloudWatchDimensionConfiguration](#cloudwatchdimensionconfiguration)
    * Enabled
    * KinesisFirehoseDestination
      * DeliveryStreamArn **required**
      * IamRoleArn **required**
    * MatchingEventTypes
      * items [EventType](#eventtype)
    * PinpointDestination
      * ApplicationArn
    * SnsDestination
      * TopicArn **required**
  * EventDestinationName **required**

### CreateConfigurationSetEventDestinationResponse
* CreateConfigurationSetEventDestinationResponse `object`: An HTTP 200 response if the request succeeds, or an error message if the request fails.

### CreateConfigurationSetRequest
* CreateConfigurationSetRequest `object`: A request to create a configuration set.
  * ConfigurationSetName **required**
  * DeliveryOptions
    * SendingPoolName
    * TlsPolicy
  * ReputationOptions
    * LastFreshStart
    * ReputationMetricsEnabled
  * SendingOptions
    * SendingEnabled
  * Tags
    * items [Tag](#tag)
  * TrackingOptions
    * CustomRedirectDomain **required**

### CreateConfigurationSetResponse
* CreateConfigurationSetResponse `object`: An HTTP 200 response if the request succeeds, or an error message if the request fails.

### CreateDedicatedIpPoolRequest
* CreateDedicatedIpPoolRequest `object`: A request to create a new dedicated IP pool.
  * PoolName **required**
  * Tags
    * items [Tag](#tag)

### CreateDedicatedIpPoolResponse
* CreateDedicatedIpPoolResponse `object`: An HTTP 200 response if the request succeeds, or an error message if the request fails.

### CreateDeliverabilityTestReportRequest
* CreateDeliverabilityTestReportRequest `object`: A request to perform a predictive inbox placement test. Predictive inbox placement tests can help you predict how your messages will be handled by various email providers around the world. When you perform a predictive inbox placement test, you provide a sample message that contains the content that you plan to send to your customers. Amazon Pinpoint then sends that message to special email addresses spread across several major email providers. After about 24 hours, the test is complete, and you can use the <code>GetDeliverabilityTestReport</code> operation to view the results of the test.
  * Content **required**
    * Raw
      * Data **required**
    * Simple
      * Body **required**
        * Html
          * Charset
          * Data **required**
        * Text
          * Charset
          * Data **required**
      * Subject **required**
        * Charset
        * Data **required**
    * Template
      * TemplateArn
      * TemplateData
  * FromEmailAddress **required**
  * ReportName
  * Tags
    * items [Tag](#tag)

### CreateDeliverabilityTestReportResponse
* CreateDeliverabilityTestReportResponse `object`: Information about the predictive inbox placement test that you created.
  * DeliverabilityTestStatus **required**
  * ReportId **required**

### CreateEmailIdentityRequest
* CreateEmailIdentityRequest `object`: A request to begin the verification process for an email identity (an email address or domain).
  * EmailIdentity **required**
  * Tags
    * items [Tag](#tag)

### CreateEmailIdentityResponse
* CreateEmailIdentityResponse `object`: <p>If the email identity is a domain, this object contains tokens that you can use to create a set of CNAME records. To sucessfully verify your domain, you have to add these records to the DNS configuration for your domain.</p> <p>If the email identity is an email address, this object is empty. </p>
  * DkimAttributes
    * SigningEnabled
    * Status
    * Tokens
      * items [DnsToken](#dnstoken)
  * IdentityType
  * VerifiedForSendingStatus

### CustomRedirectDomain
* CustomRedirectDomain `string`: The domain that you want to use for tracking open and click events.

### DailyVolume
* DailyVolume `object`: An object that contains information about the volume of email sent on each day of the analysis period.
  * DomainIspPlacements
    * items [DomainIspPlacement](#domainispplacement)
  * StartDate
  * VolumeStatistics
    * InboxRawCount
    * ProjectedInbox
    * ProjectedSpam
    * SpamRawCount

### DailyVolumes
* DailyVolumes `array`
  * items [DailyVolume](#dailyvolume)

### DedicatedIp
* DedicatedIp `object`: <p>Contains information about a dedicated IP address that is associated with your Amazon Pinpoint account.</p> <p/>
  * Ip **required**
  * PoolName
  * WarmupPercentage **required**
  * WarmupStatus **required**

### DedicatedIpList
* DedicatedIpList `array`: A list of dedicated IP addresses that are associated with your Amazon Pinpoint account.
  * items [DedicatedIp](#dedicatedip)

### DefaultDimensionValue
* DefaultDimensionValue `string`: <p>The default value of the dimension that is published to Amazon CloudWatch if you don't provide the value of the dimension when you send an email. This value has to meet the following criteria:</p> <ul> <li> <p>It can only contain ASCII letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-).</p> </li> <li> <p>It can contain no more than 256 characters.</p> </li> </ul>

### DeleteConfigurationSetEventDestinationRequest
* DeleteConfigurationSetEventDestinationRequest `object`: A request to delete an event destination from a configuration set.

### DeleteConfigurationSetEventDestinationResponse
* DeleteConfigurationSetEventDestinationResponse `object`: An HTTP 200 response if the request succeeds, or an error message if the request fails.

### DeleteConfigurationSetRequest
* DeleteConfigurationSetRequest `object`: A request to delete a configuration set.

### DeleteConfigurationSetResponse
* DeleteConfigurationSetResponse `object`: An HTTP 200 response if the request succeeds, or an error message if the request fails.

### DeleteDedicatedIpPoolRequest
* DeleteDedicatedIpPoolRequest `object`: A request to delete a dedicated IP pool.

### DeleteDedicatedIpPoolResponse
* DeleteDedicatedIpPoolResponse `object`: An HTTP 200 response if the request succeeds, or an error message if the request fails.

### DeleteEmailIdentityRequest
* DeleteEmailIdentityRequest `object`: A request to delete an existing email identity. When you delete an identity, you lose the ability to use Amazon Pinpoint to send email from that identity. You can restore your ability to send email by completing the verification process for the identity again.

### DeleteEmailIdentityResponse
* DeleteEmailIdentityResponse `object`: An HTTP 200 response if the request succeeds, or an error message if the request fails.

### DeliverabilityDashboardAccountStatus
* DeliverabilityDashboardAccountStatus `string` (values: ACTIVE, PENDING_EXPIRATION, DISABLED): The current status of your Deliverability dashboard subscription. If this value is <code>PENDING_EXPIRATION</code>, your subscription is scheduled to expire at the end of the current calendar month.

### DeliverabilityTestReport
* DeliverabilityTestReport `object`: An object that contains metadata related to a predictive inbox placement test.
  * CreateDate
  * DeliverabilityTestStatus
  * FromEmailAddress
  * ReportId
  * ReportName
  * Subject

### DeliverabilityTestReports
* DeliverabilityTestReports `array`
  * items [DeliverabilityTestReport](#deliverabilitytestreport)

### DeliverabilityTestStatus
* DeliverabilityTestStatus `string` (values: IN_PROGRESS, COMPLETED): The status of a predictive inbox placement test. If the status is <code>IN_PROGRESS</code>, then the predictive inbox placement test is currently running. Predictive inbox placement tests are usually complete within 24 hours of creating the test. If the status is <code>COMPLETE</code>, then the test is finished, and you can use the <code>GetDeliverabilityTestReport</code> operation to view the results of the test.

### DeliverabilityTestSubject
* DeliverabilityTestSubject `string`: The subject line for an email that you submitted in a predictive inbox placement test.

### DeliveryOptions
* DeliveryOptions `object`: Used to associate a configuration set with a dedicated IP pool.
  * SendingPoolName
  * TlsPolicy

### Destination
* Destination `object`: An object that describes the recipients for an email.
  * BccAddresses
    * items [EmailAddress](#emailaddress)
  * CcAddresses
    * items [EmailAddress](#emailaddress)
  * ToAddresses
    * items [EmailAddress](#emailaddress)

### DimensionName
* DimensionName `string`: <p>The name of an Amazon CloudWatch dimension associated with an email sending metric. The name has to meet the following criteria:</p> <ul> <li> <p>It can only contain ASCII letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-).</p> </li> <li> <p>It can contain no more than 256 characters.</p> </li> </ul>

### DimensionValueSource
* DimensionValueSource `string` (values: MESSAGE_TAG, EMAIL_HEADER, LINK_TAG): The location where Amazon Pinpoint finds the value of a dimension to publish to Amazon CloudWatch. If you want Amazon Pinpoint to use the message tags that you specify using an X-SES-MESSAGE-TAGS header or a parameter to the SendEmail/SendRawEmail API, choose <code>messageTag</code>. If you want Amazon Pinpoint to use your own email headers, choose <code>emailHeader</code>. If you want Amazon Pinpoint to use link tags, choose <code>linkTags</code>.

### DkimAttributes
* DkimAttributes `object`: An object that contains information about the DKIM configuration for an email identity.
  * SigningEnabled
  * Status
  * Tokens
    * items [DnsToken](#dnstoken)

### DkimStatus
* DkimStatus `string` (values: PENDING, SUCCESS, FAILED, TEMPORARY_FAILURE, NOT_STARTED): <p>The DKIM authentication status of the identity. The status can be one of the following:</p> <ul> <li> <p> <code>PENDING</code> – The DKIM verification process was initiated, and Amazon Pinpoint is still waiting for the required CNAME records to appear in the DNS configuration for the domain.</p> </li> <li> <p> <code>SUCCESS</code> – The DKIM authentication process completed successfully.</p> </li> <li> <p> <code>FAILED</code> – The DKIM authentication process failed. This can happen when Amazon Pinpoint fails to find the required CNAME records in the DNS configuration of the domain.</p> </li> <li> <p> <code>TEMPORARY_FAILURE</code> – A temporary issue is preventing Amazon Pinpoint from determining the DKIM authentication status of the domain.</p> </li> <li> <p> <code>NOT_STARTED</code> – The DKIM verification process hasn't been initiated for the domain.</p> </li> </ul>

### DnsToken
* DnsToken `string`

### DnsTokenList
* DnsTokenList `array`
  * items [DnsToken](#dnstoken)

### Domain
* Domain `string`

### DomainDeliverabilityCampaign
* DomainDeliverabilityCampaign `object`: An object that contains the deliverability data for a specific campaign. This data is available for a campaign only if the campaign sent email by using a domain that the Deliverability dashboard is enabled for (<code>PutDeliverabilityDashboardOption</code> operation).
  * CampaignId
  * DeleteRate
  * Esps
    * items [Esp](#esp)
  * FirstSeenDateTime
  * FromAddress
  * ImageUrl
  * InboxCount
  * LastSeenDateTime
  * ProjectedVolume
  * ReadDeleteRate
  * ReadRate
  * SendingIps
    * items [Ip](#ip)
  * SpamCount
  * Subject

### DomainDeliverabilityCampaignList
* DomainDeliverabilityCampaignList `array`: <p/>
  * items [DomainDeliverabilityCampaign](#domaindeliverabilitycampaign)

### DomainDeliverabilityTrackingOption
* DomainDeliverabilityTrackingOption `object`: An object that contains information about the Deliverability dashboard subscription for a verified domain that you use to send email and currently has an active Deliverability dashboard subscription. If a Deliverability dashboard subscription is active for a domain, you gain access to reputation, inbox placement, and other metrics for the domain.
  * Domain
  * InboxPlacementTrackingOption
    * Global
    * TrackedIsps
      * items [IspName](#ispname)
  * SubscriptionStartDate

### DomainDeliverabilityTrackingOptions
* DomainDeliverabilityTrackingOptions `array`: An object that contains information about the Deliverability dashboard subscription for a verified domain that you use to send email and currently has an active Deliverability dashboard subscription. If a Deliverability dashboard subscription is active for a domain, you gain access to reputation, inbox placement, and other metrics for the domain.
  * items [DomainDeliverabilityTrackingOption](#domaindeliverabilitytrackingoption)

### DomainIspPlacement
* DomainIspPlacement `object`: An object that contains inbox placement data for email sent from one of your email domains to a specific email provider.
  * InboxPercentage
  * InboxRawCount
  * IspName
  * SpamPercentage
  * SpamRawCount

### DomainIspPlacements
* DomainIspPlacements `array`
  * items [DomainIspPlacement](#domainispplacement)

### EmailAddress
* EmailAddress `string`

### EmailAddressList
* EmailAddressList `array`
  * items [EmailAddress](#emailaddress)

### EmailContent
* EmailContent `object`: An object that defines the entire content of the email, including the message headers and the body content. You can create a simple email message, in which you specify the subject and the text and HTML versions of the message body. You can also create raw messages, in which you specify a complete MIME-formatted message. Raw messages can include attachments and custom headers.
  * Raw
    * Data **required**
  * Simple
    * Body **required**
      * Html
        * Charset
        * Data **required**
      * Text
        * Charset
        * Data **required**
    * Subject **required**
      * Charset
      * Data **required**
  * Template
    * TemplateArn
    * TemplateData

### Enabled
* Enabled `boolean`

### Esp
* Esp `string`

### Esps
* Esps `array`
  * items [Esp](#esp)

### EventDestination
* EventDestination `object`: In Amazon Pinpoint, <i>events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.
  * CloudWatchDestination
    * DimensionConfigurations **required**
      * items [CloudWatchDimensionConfiguration](#cloudwatchdimensionconfiguration)
  * Enabled
  * KinesisFirehoseDestination
    * DeliveryStreamArn **required**
    * IamRoleArn **required**
  * MatchingEventTypes **required**
    * items [EventType](#eventtype)
  * Name **required**
  * PinpointDestination
    * ApplicationArn
  * SnsDestination
    * TopicArn **required**

### EventDestinationDefinition
* EventDestinationDefinition `object`: An object that defines the event destination. Specifically, it defines which services receive events from emails sent using the configuration set that the event destination is associated with. Also defines the types of events that are sent to the event destination.
  * CloudWatchDestination
    * DimensionConfigurations **required**
      * items [CloudWatchDimensionConfiguration](#cloudwatchdimensionconfiguration)
  * Enabled
  * KinesisFirehoseDestination
    * DeliveryStreamArn **required**
    * IamRoleArn **required**
  * MatchingEventTypes
    * items [EventType](#eventtype)
  * PinpointDestination
    * ApplicationArn
  * SnsDestination
    * TopicArn **required**

### EventDestinationName
* EventDestinationName `string`: <p>The name of an event destination.</p> <p>In Amazon Pinpoint, <i>events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>

### EventDestinations
* EventDestinations `array`
  * items [EventDestination](#eventdestination)

### EventType
* EventType `string` (values: SEND, REJECT, BOUNCE, COMPLAINT, DELIVERY, OPEN, CLICK, RENDERING_FAILURE): An email sending event type. For example, email sends, opens, and bounces are all email events.

### EventTypes
* EventTypes `array`
  * items [EventType](#eventtype)

### GeneralEnforcementStatus
* GeneralEnforcementStatus `string`

### GetAccountRequest
* GetAccountRequest `object`: A request to obtain information about the email-sending capabilities of your Amazon Pinpoint account.

### GetAccountResponse
* GetAccountResponse `object`: A list of details about the email-sending capabilities of your Amazon Pinpoint account in the current AWS Region.
  * DedicatedIpAutoWarmupEnabled
  * EnforcementStatus
  * ProductionAccessEnabled
  * SendQuota
    * Max24HourSend
    * MaxSendRate
    * SentLast24Hours
  * SendingEnabled

### GetBlacklistReportsRequest
* GetBlacklistReportsRequest `object`: A request to retrieve a list of the blacklists that your dedicated IP addresses appear on.

### GetBlacklistReportsResponse
* GetBlacklistReportsResponse `object`: An object that contains information about blacklist events.
  * BlacklistReport **required**

### GetConfigurationSetEventDestinationsRequest
* GetConfigurationSetEventDestinationsRequest `object`: A request to obtain information about the event destinations for a configuration set.

### GetConfigurationSetEventDestinationsResponse
* GetConfigurationSetEventDestinationsResponse `object`: Information about an event destination for a configuration set.
  * EventDestinations
    * items [EventDestination](#eventdestination)

### GetConfigurationSetRequest
* GetConfigurationSetRequest `object`: A request to obtain information about a configuration set.

### GetConfigurationSetResponse
* GetConfigurationSetResponse `object`: Information about a configuration set.
  * ConfigurationSetName
  * DeliveryOptions
    * SendingPoolName
    * TlsPolicy
  * ReputationOptions
    * LastFreshStart
    * ReputationMetricsEnabled
  * SendingOptions
    * SendingEnabled
  * Tags
    * items [Tag](#tag)
  * TrackingOptions
    * CustomRedirectDomain **required**

### GetDedicatedIpRequest
* GetDedicatedIpRequest `object`: A request to obtain more information about a dedicated IP address.

### GetDedicatedIpResponse
* GetDedicatedIpResponse `object`: Information about a dedicated IP address.
  * DedicatedIp
    * Ip **required**
    * PoolName
    * WarmupPercentage **required**
    * WarmupStatus **required**

### GetDedicatedIpsRequest
* GetDedicatedIpsRequest `object`: A request to obtain more information about dedicated IP pools.

### GetDedicatedIpsResponse
* GetDedicatedIpsResponse `object`: Information about the dedicated IP addresses that are associated with your Amazon Pinpoint account.
  * DedicatedIps
    * items [DedicatedIp](#dedicatedip)
  * NextToken

### GetDeliverabilityDashboardOptionsRequest
* GetDeliverabilityDashboardOptionsRequest `object`: <p>Retrieve information about the status of the Deliverability dashboard for your Amazon Pinpoint account. When the Deliverability dashboard is enabled, you gain access to reputation, deliverability, and other metrics for the domains that you use to send email using Amazon Pinpoint. You also gain the ability to perform predictive inbox placement tests.</p> <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition to any other fees that you accrue by using Amazon Pinpoint. For more information about the features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/pinpoint/pricing/">Amazon Pinpoint Pricing</a>.</p>

### GetDeliverabilityDashboardOptionsResponse
* GetDeliverabilityDashboardOptionsResponse `object`: An object that shows the status of the Deliverability dashboard for your Amazon Pinpoint account.
  * AccountStatus
  * ActiveSubscribedDomains
    * items [DomainDeliverabilityTrackingOption](#domaindeliverabilitytrackingoption)
  * DashboardEnabled **required**
  * PendingExpirationSubscribedDomains
    * items [DomainDeliverabilityTrackingOption](#domaindeliverabilitytrackingoption)
  * SubscriptionExpiryDate

### GetDeliverabilityTestReportRequest
* GetDeliverabilityTestReportRequest `object`: A request to retrieve the results of a predictive inbox placement test.

### GetDeliverabilityTestReportResponse
* GetDeliverabilityTestReportResponse `object`: The results of the predictive inbox placement test.
  * DeliverabilityTestReport **required**
    * CreateDate
    * DeliverabilityTestStatus
    * FromEmailAddress
    * ReportId
    * ReportName
    * Subject
  * IspPlacements **required**
    * items [IspPlacement](#ispplacement)
  * Message
  * OverallPlacement **required**
    * DkimPercentage
    * InboxPercentage
    * MissingPercentage
    * SpamPercentage
    * SpfPercentage
  * Tags
    * items [Tag](#tag)

### GetDomainDeliverabilityCampaignRequest
* GetDomainDeliverabilityCampaignRequest `object`: Retrieve all the deliverability data for a specific campaign. This data is available for a campaign only if the campaign sent email by using a domain that the Deliverability dashboard is enabled for (<code>PutDeliverabilityDashboardOption</code> operation).

### GetDomainDeliverabilityCampaignResponse
* GetDomainDeliverabilityCampaignResponse `object`: An object that contains all the deliverability data for a specific campaign. This data is available for a campaign only if the campaign sent email by using a domain that the Deliverability dashboard is enabled for (<code>PutDeliverabilityDashboardOption</code> operation).
  * DomainDeliverabilityCampaign **required**
    * CampaignId
    * DeleteRate
    * Esps
      * items [Esp](#esp)
    * FirstSeenDateTime
    * FromAddress
    * ImageUrl
    * InboxCount
    * LastSeenDateTime
    * ProjectedVolume
    * ReadDeleteRate
    * ReadRate
    * SendingIps
      * items [Ip](#ip)
    * SpamCount
    * Subject

### GetDomainStatisticsReportRequest
* GetDomainStatisticsReportRequest `object`: A request to obtain deliverability metrics for a domain.

### GetDomainStatisticsReportResponse
* GetDomainStatisticsReportResponse `object`: An object that includes statistics that are related to the domain that you specified.
  * DailyVolumes **required**
    * items [DailyVolume](#dailyvolume)
  * OverallVolume **required**
    * DomainIspPlacements
      * items [DomainIspPlacement](#domainispplacement)
    * ReadRatePercent
    * VolumeStatistics
      * InboxRawCount
      * ProjectedInbox
      * ProjectedSpam
      * SpamRawCount

### GetEmailIdentityRequest
* GetEmailIdentityRequest `object`: A request to return details about an email identity.

### GetEmailIdentityResponse
* GetEmailIdentityResponse `object`: Details about an email identity.
  * DkimAttributes
    * SigningEnabled
    * Status
    * Tokens
      * items [DnsToken](#dnstoken)
  * FeedbackForwardingStatus
  * IdentityType
  * MailFromAttributes
    * BehaviorOnMxFailure **required**
    * MailFromDomain **required**
    * MailFromDomainStatus **required**
  * Tags
    * items [Tag](#tag)
  * VerifiedForSendingStatus

### Identity
* Identity `string`

### IdentityInfo
* IdentityInfo `object`: Information about an email identity.
  * IdentityName
  * IdentityType
  * SendingEnabled

### IdentityInfoList
* IdentityInfoList `array`
  * items [IdentityInfo](#identityinfo)

### IdentityType
* IdentityType `string` (values: EMAIL_ADDRESS, DOMAIN, MANAGED_DOMAIN): <p>The email identity type. The identity type can be one of the following:</p> <ul> <li> <p> <code>EMAIL_ADDRESS</code> – The identity is an email address.</p> </li> <li> <p> <code>DOMAIN</code> – The identity is a domain.</p> </li> </ul>

### ImageUrl
* ImageUrl `string`

### InboxPlacementTrackingOption
* InboxPlacementTrackingOption `object`: An object that contains information about the inbox placement data settings for a verified domain that’s associated with your AWS account. This data is available only if you enabled the Deliverability dashboard for the domain (<code>PutDeliverabilityDashboardOption</code> operation).
  * Global
  * TrackedIsps
    * items [IspName](#ispname)

### Ip
* Ip `string`: A dedicated IP address that is associated with your Amazon Pinpoint account.

### IpList
* IpList `array`
  * items [Ip](#ip)

### IspName
* IspName `string`: The name of an email provider.

### IspNameList
* IspNameList `array`
  * items [IspName](#ispname)

### IspPlacement
* IspPlacement `object`: An object that describes how email sent during the predictive inbox placement test was handled by a certain email provider.
  * IspName
  * PlacementStatistics
    * DkimPercentage
    * InboxPercentage
    * MissingPercentage
    * SpamPercentage
    * SpfPercentage

### IspPlacements
* IspPlacements `array`
  * items [IspPlacement](#ispplacement)

### KinesisFirehoseDestination
* KinesisFirehoseDestination `object`: An object that defines an Amazon Kinesis Data Firehose destination for email events. You can use Amazon Kinesis Data Firehose to stream data to other services, such as Amazon S3 and Amazon Redshift.
  * DeliveryStreamArn **required**
  * IamRoleArn **required**

### LastFreshStart
* LastFreshStart `string`: The date and time (in Unix time) when the reputation metrics were last given a fresh start. When your account is given a fresh start, your reputation metrics are calculated starting from the date of the fresh start.

### LimitExceededException


### ListConfigurationSetsRequest
* ListConfigurationSetsRequest `object`: A request to obtain a list of configuration sets for your Amazon Pinpoint account in the current AWS Region.

### ListConfigurationSetsResponse
* ListConfigurationSetsResponse `object`: A list of configuration sets in your Amazon Pinpoint account in the current AWS Region.
  * ConfigurationSets
    * items [ConfigurationSetName](#configurationsetname)
  * NextToken

### ListDedicatedIpPoolsRequest
* ListDedicatedIpPoolsRequest `object`: A request to obtain a list of dedicated IP pools.

### ListDedicatedIpPoolsResponse
* ListDedicatedIpPoolsResponse `object`: A list of dedicated IP pools.
  * DedicatedIpPools
    * items [PoolName](#poolname)
  * NextToken

### ListDeliverabilityTestReportsRequest
* ListDeliverabilityTestReportsRequest `object`: A request to list all of the predictive inbox placement tests that you've performed.

### ListDeliverabilityTestReportsResponse
* ListDeliverabilityTestReportsResponse `object`: A list of the predictive inbox placement test reports that are available for your account, regardless of whether or not those tests are complete.
  * DeliverabilityTestReports **required**
    * items [DeliverabilityTestReport](#deliverabilitytestreport)
  * NextToken

### ListDomainDeliverabilityCampaignsRequest
* ListDomainDeliverabilityCampaignsRequest `object`: Retrieve deliverability data for all the campaigns that used a specific domain to send email during a specified time range. This data is available for a domain only if you enabled the Deliverability dashboard (<code>PutDeliverabilityDashboardOption</code> operation) for the domain.

### ListDomainDeliverabilityCampaignsResponse
* ListDomainDeliverabilityCampaignsResponse `object`: An array of objects that provide deliverability data for all the campaigns that used a specific domain to send email during a specified time range. This data is available for a domain only if you enabled the Deliverability dashboard (<code>PutDeliverabilityDashboardOption</code> operation) for the domain.
  * DomainDeliverabilityCampaigns **required**
    * items [DomainDeliverabilityCampaign](#domaindeliverabilitycampaign)
  * NextToken

### ListEmailIdentitiesRequest
* ListEmailIdentitiesRequest `object`: A request to list all of the email identities associated with your Amazon Pinpoint account. This list includes identities that you've already verified, identities that are unverified, and identities that were verified in the past, but are no longer verified.

### ListEmailIdentitiesResponse
* ListEmailIdentitiesResponse `object`: A list of all of the identities that you've attempted to verify for use with Amazon Pinpoint, regardless of whether or not those identities were successfully verified.
  * EmailIdentities
    * items [IdentityInfo](#identityinfo)
  * NextToken

### ListOfDedicatedIpPools
* ListOfDedicatedIpPools `array`: A list of dedicated IP pools that are associated with your Amazon Pinpoint account.
  * items [PoolName](#poolname)

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`
  * Tags **required**
    * items [Tag](#tag)

### MailFromAttributes
* MailFromAttributes `object`: A list of attributes that are associated with a MAIL FROM domain.
  * BehaviorOnMxFailure **required**
  * MailFromDomain **required**
  * MailFromDomainStatus **required**

### MailFromDomainName
* MailFromDomainName `string`: The domain that you want to use as a MAIL FROM domain.

### MailFromDomainNotVerifiedException


### MailFromDomainStatus
* MailFromDomainStatus `string` (values: PENDING, SUCCESS, FAILED, TEMPORARY_FAILURE): <p>The status of the MAIL FROM domain. This status can have the following values:</p> <ul> <li> <p> <code>PENDING</code> – Amazon Pinpoint hasn't started searching for the MX record yet.</p> </li> <li> <p> <code>SUCCESS</code> – Amazon Pinpoint detected the required MX record for the MAIL FROM domain.</p> </li> <li> <p> <code>FAILED</code> – Amazon Pinpoint can't find the required MX record, or the record no longer exists.</p> </li> <li> <p> <code>TEMPORARY_FAILURE</code> – A temporary issue occurred, which prevented Amazon Pinpoint from determining the status of the MAIL FROM domain.</p> </li> </ul>

### Max24HourSend
* Max24HourSend `number`

### MaxItems
* MaxItems `integer`

### MaxSendRate
* MaxSendRate `number`

### Message
* Message `object`: Represents the email message that you're sending. The <code>Message</code> object consists of a subject line and a message body.
  * Body **required**
    * Html
      * Charset
      * Data **required**
    * Text
      * Charset
      * Data **required**
  * Subject **required**
    * Charset
    * Data **required**

### MessageContent
* MessageContent `string`: The body of an email message.

### MessageData
* MessageData `string`

### MessageRejected


### MessageTag
* MessageTag `object`: Contains the name and value of a tag that you apply to an email. You can use message tags when you publish email sending events. 
  * Name **required**
  * Value **required**

### MessageTagList
* MessageTagList `array`: A list of message tags.
  * items [MessageTag](#messagetag)

### MessageTagName
* MessageTagName `string`: <p>The name of the message tag. The message tag name has to meet the following criteria:</p> <ul> <li> <p>It can only contain ASCII letters (a–z, A–Z), numbers (0–9), underscores (_), or dashes (-).</p> </li> <li> <p>It can contain no more than 256 characters.</p> </li> </ul>

### MessageTagValue
* MessageTagValue `string`: <p>The value of the message tag. The message tag value has to meet the following criteria:</p> <ul> <li> <p>It can only contain ASCII letters (a–z, A–Z), numbers (0–9), underscores (_), or dashes (-).</p> </li> <li> <p>It can contain no more than 256 characters.</p> </li> </ul>

### NextToken
* NextToken `string`

### NotFoundException


### OutboundMessageId
* OutboundMessageId `string`

### OverallVolume
* OverallVolume `object`: An object that contains information about email that was sent from the selected domain.
  * DomainIspPlacements
    * items [DomainIspPlacement](#domainispplacement)
  * ReadRatePercent
  * VolumeStatistics
    * InboxRawCount
    * ProjectedInbox
    * ProjectedSpam
    * SpamRawCount

### Percentage
* Percentage `number`: An object that contains information about inbox placement percentages.

### Percentage100Wrapper
* Percentage100Wrapper `integer`

### PinpointDestination
* PinpointDestination `object`: An object that defines a Amazon Pinpoint destination for email events. You can use Amazon Pinpoint events to create attributes in Amazon Pinpoint projects. You can use these attributes to create segments for your campaigns.
  * ApplicationArn

### PlacementStatistics
* PlacementStatistics `object`: An object that contains inbox placement data for an email provider.
  * DkimPercentage
  * InboxPercentage
  * MissingPercentage
  * SpamPercentage
  * SpfPercentage

### PoolName
* PoolName `string`: The name of a dedicated IP pool.

### PutAccountDedicatedIpWarmupAttributesRequest
* PutAccountDedicatedIpWarmupAttributesRequest `object`: A request to enable or disable the automatic IP address warm-up feature.
  * AutoWarmupEnabled

### PutAccountDedicatedIpWarmupAttributesResponse
* PutAccountDedicatedIpWarmupAttributesResponse `object`: An HTTP 200 response if the request succeeds, or an error message if the request fails.

### PutAccountSendingAttributesRequest
* PutAccountSendingAttributesRequest `object`: A request to change the ability of your account to send email.
  * SendingEnabled

### PutAccountSendingAttributesResponse
* PutAccountSendingAttributesResponse `object`: An HTTP 200 response if the request succeeds, or an error message if the request fails.

### PutConfigurationSetDeliveryOptionsRequest
* PutConfigurationSetDeliveryOptionsRequest `object`: A request to associate a configuration set with a dedicated IP pool.
  * SendingPoolName
  * TlsPolicy

### PutConfigurationSetDeliveryOptionsResponse
* PutConfigurationSetDeliveryOptionsResponse `object`: An HTTP 200 response if the request succeeds, or an error message if the request fails.

### PutConfigurationSetReputationOptionsRequest
* PutConfigurationSetReputationOptionsRequest `object`: A request to enable or disable tracking of reputation metrics for a configuration set.
  * ReputationMetricsEnabled

### PutConfigurationSetReputationOptionsResponse
* PutConfigurationSetReputationOptionsResponse `object`: An HTTP 200 response if the request succeeds, or an error message if the request fails.

### PutConfigurationSetSendingOptionsRequest
* PutConfigurationSetSendingOptionsRequest `object`: A request to enable or disable the ability of Amazon Pinpoint to send emails that use a specific configuration set.
  * SendingEnabled

### PutConfigurationSetSendingOptionsResponse
* PutConfigurationSetSendingOptionsResponse `object`: An HTTP 200 response if the request succeeds, or an error message if the request fails.

### PutConfigurationSetTrackingOptionsRequest
* PutConfigurationSetTrackingOptionsRequest `object`: A request to add a custom domain for tracking open and click events to a configuration set.
  * CustomRedirectDomain

### PutConfigurationSetTrackingOptionsResponse
* PutConfigurationSetTrackingOptionsResponse `object`: An HTTP 200 response if the request succeeds, or an error message if the request fails.

### PutDedicatedIpInPoolRequest
* PutDedicatedIpInPoolRequest `object`: A request to move a dedicated IP address to a dedicated IP pool.
  * DestinationPoolName **required**

### PutDedicatedIpInPoolResponse
* PutDedicatedIpInPoolResponse `object`: An HTTP 200 response if the request succeeds, or an error message if the request fails.

### PutDedicatedIpWarmupAttributesRequest
* PutDedicatedIpWarmupAttributesRequest `object`: A request to change the warm-up attributes for a dedicated IP address. This operation is useful when you want to resume the warm-up process for an existing IP address.
  * WarmupPercentage **required**

### PutDedicatedIpWarmupAttributesResponse
* PutDedicatedIpWarmupAttributesResponse `object`: An HTTP 200 response if the request succeeds, or an error message if the request fails.

### PutDeliverabilityDashboardOptionRequest
* PutDeliverabilityDashboardOptionRequest `object`: <p>Enable or disable the Deliverability dashboard for your Amazon Pinpoint account. When you enable the Deliverability dashboard, you gain access to reputation, deliverability, and other metrics for the domains that you use to send email using Amazon Pinpoint. You also gain the ability to perform predictive inbox placement tests.</p> <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition to any other fees that you accrue by using Amazon Pinpoint. For more information about the features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/pinpoint/pricing/">Amazon Pinpoint Pricing</a>.</p>
  * DashboardEnabled **required**
  * SubscribedDomains
    * items [DomainDeliverabilityTrackingOption](#domaindeliverabilitytrackingoption)

### PutDeliverabilityDashboardOptionResponse
* PutDeliverabilityDashboardOptionResponse `object`: A response that indicates whether the Deliverability dashboard is enabled for your Amazon Pinpoint account.

### PutEmailIdentityDkimAttributesRequest
* PutEmailIdentityDkimAttributesRequest `object`: A request to enable or disable DKIM signing of email that you send from an email identity.
  * SigningEnabled

### PutEmailIdentityDkimAttributesResponse
* PutEmailIdentityDkimAttributesResponse `object`: An HTTP 200 response if the request succeeds, or an error message if the request fails.

### PutEmailIdentityFeedbackAttributesRequest
* PutEmailIdentityFeedbackAttributesRequest `object`: A request to set the attributes that control how bounce and complaint events are processed.
  * EmailForwardingEnabled

### PutEmailIdentityFeedbackAttributesResponse
* PutEmailIdentityFeedbackAttributesResponse `object`: An HTTP 200 response if the request succeeds, or an error message if the request fails.

### PutEmailIdentityMailFromAttributesRequest
* PutEmailIdentityMailFromAttributesRequest `object`: A request to configure the custom MAIL FROM domain for a verified identity.
  * BehaviorOnMxFailure
  * MailFromDomain

### PutEmailIdentityMailFromAttributesResponse
* PutEmailIdentityMailFromAttributesResponse `object`: An HTTP 200 response if the request succeeds, or an error message if the request fails.

### RawMessage
* RawMessage `object`: The raw email message.
  * Data **required**

### RawMessageData
* RawMessageData `string`: <p>The raw email message. The message has to meet the following criteria:</p> <ul> <li> <p>The message has to contain a header and a body, separated by one blank line.</p> </li> <li> <p>All of the required header fields must be present in the message.</p> </li> <li> <p>Each part of a multipart MIME message must be formatted properly.</p> </li> <li> <p>Attachments must be in a file format that Amazon Pinpoint supports. </p> </li> <li> <p>The entire message must be Base64 encoded.</p> </li> <li> <p>If any of the MIME parts in your message contain content that is outside of the 7-bit ASCII character range, you should encode that content to ensure that recipients' email clients render the message properly.</p> </li> <li> <p>The length of any single line of text in the message can't exceed 1,000 characters. This restriction is defined in <a href="https://tools.ietf.org/html/rfc5321">RFC 5321</a>.</p> </li> </ul>

### RblName
* RblName `string`: The name of a blacklist that an IP address was found on.

### ReportId
* ReportId `string`: A unique string that identifies a Deliverability dashboard report.

### ReportName
* ReportName `string`: A name that helps you identify a report generated by the Deliverability dashboard.

### ReputationOptions
* ReputationOptions `object`: Enable or disable collection of reputation metrics for emails that you send using this configuration set in the current AWS Region. 
  * LastFreshStart
  * ReputationMetricsEnabled

### SendEmailRequest
* SendEmailRequest `object`: A request to send an email message.
  * ConfigurationSetName
  * Content **required**
    * Raw
      * Data **required**
    * Simple
      * Body **required**
        * Html
          * Charset
          * Data **required**
        * Text
          * Charset
          * Data **required**
      * Subject **required**
        * Charset
        * Data **required**
    * Template
      * TemplateArn
      * TemplateData
  * Destination **required**
    * BccAddresses
      * items [EmailAddress](#emailaddress)
    * CcAddresses
      * items [EmailAddress](#emailaddress)
    * ToAddresses
      * items [EmailAddress](#emailaddress)
  * EmailTags
    * items [MessageTag](#messagetag)
  * FeedbackForwardingEmailAddress
  * FromEmailAddress
  * ReplyToAddresses
    * items [EmailAddress](#emailaddress)

### SendEmailResponse
* SendEmailResponse `object`: A unique message ID that you receive when Amazon Pinpoint accepts an email for sending.
  * MessageId

### SendQuota
* SendQuota `object`: An object that contains information about the per-day and per-second sending limits for your Amazon Pinpoint account in the current AWS Region.
  * Max24HourSend
  * MaxSendRate
  * SentLast24Hours

### SendingOptions
* SendingOptions `object`: Used to enable or disable email sending for messages that use this configuration set in the current AWS Region.
  * SendingEnabled

### SendingPausedException


### SendingPoolName
* SendingPoolName `string`: The name of the dedicated IP pool that you want to associate with the configuration set.

### SentLast24Hours
* SentLast24Hours `number`

### SnsDestination
* SnsDestination `object`: An object that defines an Amazon SNS destination for email events. You can use Amazon SNS to send notification when certain email events occur.
  * TopicArn **required**

### Subject
* Subject `string`

### Tag
* Tag `object`: <p>An object that defines the tags that are associated with a resource. A <i>tag</i> is a label that you optionally define and associate with a resource in Amazon Pinpoint. Tags can help you categorize and manage resources in different ways, such as by purpose, owner, environment, or other criteria. A resource can have as many as 50 tags.</p> <p>Each tag consists of a required <i>tag key</i> and an associated <i>tag value</i>, both of which you define. A tag key is a general label that acts as a category for a more specific tag value. A tag value acts as a descriptor within a tag key. A tag key can contain as many as 128 characters. A tag value can contain as many as 256 characters. The characters can be Unicode letters, digits, white space, or one of the following symbols: _ . : / = + -. The following additional restrictions apply to tags:</p> <ul> <li> <p>Tag keys and values are case sensitive.</p> </li> <li> <p>For each associated resource, each tag key must be unique and it can have only one value.</p> </li> <li> <p>The <code>aws:</code> prefix is reserved for use by AWS; you can’t use it in any tag keys or values that you define. In addition, you can't edit or remove tag keys or values that use this prefix. Tags that use this prefix don’t count against the limit of 50 tags per resource.</p> </li> <li> <p>You can associate tags with public or shared resources, but the tags are available only for your AWS account, not any other accounts that share the resource. In addition, the tags are available only for resources that are located in the specified AWS Region for your AWS account.</p> </li> </ul>
  * Key **required**
  * Value **required**

### TagKey
* TagKey `string`

### TagKeyList
* TagKeyList `array`
  * items [TagKey](#tagkey)

### TagList
* TagList `array`
  * items [Tag](#tag)

### TagResourceRequest
* TagResourceRequest `object`
  * ResourceArn **required**
  * Tags **required**
    * items [Tag](#tag)

### TagResourceResponse
* TagResourceResponse `object`

### TagValue
* TagValue `string`

### Template
* Template `object`
  * TemplateArn
  * TemplateData

### TemplateArn
* TemplateArn `string`

### TemplateData
* TemplateData `string`

### Timestamp
* Timestamp `string`

### TlsPolicy
* TlsPolicy `string` (values: REQUIRE, OPTIONAL): Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS). If the value is <code>Require</code>, messages are only delivered if a TLS connection can be established. If the value is <code>Optional</code>, messages can be delivered in plain text if a TLS connection can't be established.

### TooManyRequestsException


### TrackingOptions
* TrackingOptions `object`: <p>An object that defines the tracking options for a configuration set. When you use Amazon Pinpoint to send an email, it contains an invisible image that's used to track when recipients open your email. If your email contains links, those links are changed slightly in order to track when recipients click them.</p> <p>These images and links include references to a domain operated by AWS. You can optionally configure Amazon Pinpoint to use a domain that you operate for these images and links.</p>
  * CustomRedirectDomain **required**

### UntagResourceRequest
* UntagResourceRequest `object`

### UntagResourceResponse
* UntagResourceResponse `object`

### UpdateConfigurationSetEventDestinationRequest
* UpdateConfigurationSetEventDestinationRequest `object`: A request to change the settings for an event destination for a configuration set.
  * EventDestination **required**
    * CloudWatchDestination
      * DimensionConfigurations **required**
        * items [CloudWatchDimensionConfiguration](#cloudwatchdimensionconfiguration)
    * Enabled
    * KinesisFirehoseDestination
      * DeliveryStreamArn **required**
      * IamRoleArn **required**
    * MatchingEventTypes
      * items [EventType](#eventtype)
    * PinpointDestination
      * ApplicationArn
    * SnsDestination
      * TopicArn **required**

### UpdateConfigurationSetEventDestinationResponse
* UpdateConfigurationSetEventDestinationResponse `object`: An HTTP 200 response if the request succeeds, or an error message if the request fails.

### Volume
* Volume `integer`: An object that contains information about inbox placement volume.

### VolumeStatistics
* VolumeStatistics `object`: An object that contains information about the amount of email that was delivered to recipients.
  * InboxRawCount
  * ProjectedInbox
  * ProjectedSpam
  * SpamRawCount

### WarmupStatus
* WarmupStatus `string` (values: IN_PROGRESS, DONE): The warmup status of a dedicated IP.


