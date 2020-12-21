# @datafire/amazonaws_sesv2

Client library for Amazon Simple Email Service

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_sesv2
```
```js
let amazonaws_sesv2 = require('@datafire/amazonaws_sesv2').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<fullname>Amazon SES API v2</fullname> <p>Welcome to the Amazon SES API v2 Reference. This guide provides information about the Amazon SES API v2, including supported operations, data types, parameters, and schemas.</p> <p> <a href="https://aws.amazon.com/pinpoint">Amazon SES</a> is an AWS service that you can use to send email messages to your customers.</p> <p>If you're new to Amazon SES API v2, you might find it helpful to also review the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/">Amazon Simple Email Service Developer Guide</a>. The <i>Amazon SES Developer Guide</i> provides information and code samples that demonstrate how to use Amazon SES API v2 features programmatically.</p> <p>The Amazon SES API v2 is available in several AWS Regions and it provides an endpoint for each of these Regions. For a list of all the Regions and endpoints where the API is currently available, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#ses_region">AWS Service Endpoints</a> in the <i>Amazon Web Services General Reference</i>. To learn more about AWS Regions, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande-manage.html">Managing AWS Regions</a> in the <i>Amazon Web Services General Reference</i>.</p> <p>In each Region, AWS maintains multiple Availability Zones. These Availability Zones are physically isolated from each other, but are united by private, low-latency, high-throughput, and highly redundant network connections. These Availability Zones enable us to provide very high levels of availability and redundancy, while also minimizing latency. To learn more about the number of Availability Zones that are available in each Region, see <a href="http://aws.amazon.com/about-aws/global-infrastructure/">AWS Global Infrastructure</a>.</p>

## Actions

### PutEmailIdentityDkimSigningAttributes



```js
amazonaws_sesv2.PutEmailIdentityDkimSigningAttributes({
  "EmailIdentity": "",
  "SigningAttributesOrigin": ""
}, context)
```

#### Input
* input `object`
  * EmailIdentity **required** `string`
  * SigningAttributes `object`: An object that contains information about the tokens used for setting up Bring Your Own DKIM (BYODKIM).
    * DomainSigningPrivateKey
    * DomainSigningSelector
  * SigningAttributesOrigin **required** `string` (values: AWS_SES, EXTERNAL): <p>The method that you want to use to configure DKIM for the identity. There are two possible values:</p> <ul> <li> <p> <code>AWS_SES</code> – Configure DKIM for the identity by using <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Easy DKIM</a>.</p> </li> <li> <p> <code>EXTERNAL</code> – Configure DKIM for the identity by using Bring Your Own DKIM (BYODKIM).</p> </li> </ul>

#### Output
* output [PutEmailIdentityDkimSigningAttributesResponse](#putemailidentitydkimsigningattributesresponse)

### GetAccount



```js
amazonaws_sesv2.GetAccount({}, context)
```

#### Input
* input `object`

#### Output
* output [GetAccountResponse](#getaccountresponse)

### PutAccountDedicatedIpWarmupAttributes



```js
amazonaws_sesv2.PutAccountDedicatedIpWarmupAttributes({}, context)
```

#### Input
* input `object`
  * AutoWarmupEnabled `boolean`: Enables or disables the automatic warm-up feature for dedicated IP addresses that are associated with your Amazon SES account in the current AWS Region. Set to <code>true</code> to enable the automatic warm-up feature, or set to <code>false</code> to disable it.

#### Output
* output [PutAccountDedicatedIpWarmupAttributesResponse](#putaccountdedicatedipwarmupattributesresponse)

### PutAccountDetails



```js
amazonaws_sesv2.PutAccountDetails({
  "MailType": "",
  "WebsiteURL": "",
  "UseCaseDescription": ""
}, context)
```

#### Input
* input `object`
  * AdditionalContactEmailAddresses `array`: Additional email addresses that you would like to be notified regarding Amazon SES matters.
    * items [AdditionalContactEmailAddress](#additionalcontactemailaddress)
  * ContactLanguage `string` (values: EN, JA): The language you would prefer to be contacted with.
  * MailType **required** `string` (values: MARKETING, TRANSACTIONAL): The type of email your account will send.
  * ProductionAccessEnabled `boolean`: <p>Indicates whether or not your account should have production access in the current AWS Region.</p> <p>If the value is <code>false</code>, then your account is in the <i>sandbox</i>. When your account is in the sandbox, you can only send email to verified identities. Additionally, the maximum number of emails you can send in a 24-hour period (your sending quota) is 200, and the maximum number of emails you can send per second (your maximum sending rate) is 1.</p> <p>If the value is <code>true</code>, then your account has production access. When your account has production access, you can send email to any address. The sending quota and maximum sending rate for your account vary based on your specific use case.</p>
  * UseCaseDescription **required** `string`: A description of the types of email that you plan to send.
  * WebsiteURL **required** `string`: The URL of your website. This information helps us better understand the type of content that you plan to send.

#### Output
* output [PutAccountDetailsResponse](#putaccountdetailsresponse)

### PutAccountSendingAttributes



```js
amazonaws_sesv2.PutAccountSendingAttributes({}, context)
```

#### Input
* input `object`
  * SendingEnabled `boolean`: <p>Enables or disables your account's ability to send email. Set to <code>true</code> to enable email sending, or set to <code>false</code> to disable email sending.</p> <note> <p>If AWS paused your account's ability to send email, you can't use this operation to resume your account's ability to send email.</p> </note>

#### Output
* output [PutAccountSendingAttributesResponse](#putaccountsendingattributesresponse)

### PutAccountSuppressionAttributes



```js
amazonaws_sesv2.PutAccountSuppressionAttributes({}, context)
```

#### Input
* input `object`
  * SuppressedReasons `array`: <p>A list that contains the reasons that email addresses will be automatically added to the suppression list for your account. This list can contain any or all of the following:</p> <ul> <li> <p> <code>COMPLAINT</code> – Amazon SES adds an email address to the suppression list for your account when a message sent to that address results in a complaint.</p> </li> <li> <p> <code>BOUNCE</code> – Amazon SES adds an email address to the suppression list for your account when a message sent to that address results in a hard bounce.</p> </li> </ul>
    * items [SuppressionListReason](#suppressionlistreason)

#### Output
* output [PutAccountSuppressionAttributesResponse](#putaccountsuppressionattributesresponse)

### ListConfigurationSets



```js
amazonaws_sesv2.ListConfigurationSets({}, context)
```

#### Input
* input `object`
  * NextToken `string`
  * PageSize `integer`

#### Output
* output [ListConfigurationSetsResponse](#listconfigurationsetsresponse)

### CreateConfigurationSet



```js
amazonaws_sesv2.CreateConfigurationSet({
  "ConfigurationSetName": ""
}, context)
```

#### Input
* input `object`
  * ConfigurationSetName **required** `string`: <p>The name of a configuration set.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>
  * DeliveryOptions `object`: Used to associate a configuration set with a dedicated IP pool.
    * SendingPoolName
    * TlsPolicy
  * ReputationOptions `object`: Enable or disable collection of reputation metrics for emails that you send using this configuration set in the current AWS Region. 
    * LastFreshStart
    * ReputationMetricsEnabled
  * SendingOptions `object`: Used to enable or disable email sending for messages that use this configuration set in the current AWS Region.
    * SendingEnabled
  * SuppressionOptions `object`: An object that contains information about the suppression list preferences for your account.
    * SuppressedReasons
      * items [SuppressionListReason](#suppressionlistreason)
  * Tags `array`: An array of objects that define the tags (keys and values) that you want to associate with the configuration set.
    * items [Tag](#tag)
  * TrackingOptions `object`: <p>An object that defines the tracking options for a configuration set. When you use the Amazon SES API v2 to send an email, it contains an invisible image that's used to track when recipients open your email. If your email contains links, those links are changed slightly in order to track when recipients click them.</p> <p>These images and links include references to a domain operated by AWS. You can optionally configure the Amazon SES to use a domain that you operate for these images and links.</p>
    * CustomRedirectDomain

#### Output
* output [CreateConfigurationSetResponse](#createconfigurationsetresponse)

### DeleteConfigurationSet



```js
amazonaws_sesv2.DeleteConfigurationSet({
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
amazonaws_sesv2.GetConfigurationSet({
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
amazonaws_sesv2.PutConfigurationSetDeliveryOptions({
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
amazonaws_sesv2.GetConfigurationSetEventDestinations({
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
amazonaws_sesv2.CreateConfigurationSetEventDestination({
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
  * EventDestinationName **required** `string`: <p>The name of an event destination.</p> <p> <i>Events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>

#### Output
* output [CreateConfigurationSetEventDestinationResponse](#createconfigurationseteventdestinationresponse)

### DeleteConfigurationSetEventDestination



```js
amazonaws_sesv2.DeleteConfigurationSetEventDestination({
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
amazonaws_sesv2.UpdateConfigurationSetEventDestination({
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
amazonaws_sesv2.PutConfigurationSetReputationOptions({
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
amazonaws_sesv2.PutConfigurationSetSendingOptions({
  "ConfigurationSetName": ""
}, context)
```

#### Input
* input `object`
  * ConfigurationSetName **required** `string`
  * SendingEnabled `boolean`: If <code>true</code>, email sending is enabled for the configuration set. If <code>false</code>, email sending is disabled for the configuration set.

#### Output
* output [PutConfigurationSetSendingOptionsResponse](#putconfigurationsetsendingoptionsresponse)

### PutConfigurationSetSuppressionOptions



```js
amazonaws_sesv2.PutConfigurationSetSuppressionOptions({
  "ConfigurationSetName": ""
}, context)
```

#### Input
* input `object`
  * ConfigurationSetName **required** `string`
  * SuppressedReasons `array`: <p>A list that contains the reasons that email addresses are automatically added to the suppression list for your account. This list can contain any or all of the following:</p> <ul> <li> <p> <code>COMPLAINT</code> – Amazon SES adds an email address to the suppression list for your account when a message sent to that address results in a complaint.</p> </li> <li> <p> <code>BOUNCE</code> – Amazon SES adds an email address to the suppression list for your account when a message sent to that address results in a hard bounce.</p> </li> </ul>
    * items [SuppressionListReason](#suppressionlistreason)

#### Output
* output [PutConfigurationSetSuppressionOptionsResponse](#putconfigurationsetsuppressionoptionsresponse)

### PutConfigurationSetTrackingOptions



```js
amazonaws_sesv2.PutConfigurationSetTrackingOptions({
  "ConfigurationSetName": ""
}, context)
```

#### Input
* input `object`
  * ConfigurationSetName **required** `string`
  * CustomRedirectDomain `string`: The domain that you want to use for tracking open and click events.

#### Output
* output [PutConfigurationSetTrackingOptionsResponse](#putconfigurationsettrackingoptionsresponse)

### ListContactLists



```js
amazonaws_sesv2.ListContactLists({}, context)
```

#### Input
* input `object`
  * PageSize `integer`
  * NextToken `string`

#### Output
* output [ListContactListsResponse](#listcontactlistsresponse)

### CreateContactList



```js
amazonaws_sesv2.CreateContactList({
  "ContactListName": ""
}, context)
```

#### Input
* input `object`
  * ContactListName **required** `string`: The name of the contact list.
  * Description `string`: A description of what the contact list is about.
  * Tags `array`: The tags associated with a contact list.
    * items [Tag](#tag)
  * Topics `array`: An interest group, theme, or label within a list. A contact list can have multiple topics.
    * items [Topic](#topic)

#### Output
* output [CreateContactListResponse](#createcontactlistresponse)

### DeleteContactList



```js
amazonaws_sesv2.DeleteContactList({
  "ContactListName": ""
}, context)
```

#### Input
* input `object`
  * ContactListName **required** `string`

#### Output
* output [DeleteContactListResponse](#deletecontactlistresponse)

### GetContactList



```js
amazonaws_sesv2.GetContactList({
  "ContactListName": ""
}, context)
```

#### Input
* input `object`
  * ContactListName **required** `string`

#### Output
* output [GetContactListResponse](#getcontactlistresponse)

### UpdateContactList



```js
amazonaws_sesv2.UpdateContactList({
  "ContactListName": ""
}, context)
```

#### Input
* input `object`
  * ContactListName **required** `string`
  * Description `string`: A description of what the contact list is about.
  * Topics `array`: An interest group, theme, or label within a list. A contact list can have multiple topics.
    * items [Topic](#topic)

#### Output
* output [UpdateContactListResponse](#updatecontactlistresponse)

### ListContacts



```js
amazonaws_sesv2.ListContacts({
  "ContactListName": ""
}, context)
```

#### Input
* input `object`
  * ContactListName **required** `string`
  * PageSize `integer`
  * NextToken `string`
  * Filter `object`: A filter that can be applied to a list of contacts.
    * FilteredStatus
    * TopicFilter
      * TopicName
      * UseDefaultIfPreferenceUnavailable

#### Output
* output [ListContactsResponse](#listcontactsresponse)

### CreateContact



```js
amazonaws_sesv2.CreateContact({
  "ContactListName": "",
  "EmailAddress": ""
}, context)
```

#### Input
* input `object`
  * ContactListName **required** `string`
  * AttributesData `string`: The attribute data attached to a contact.
  * EmailAddress **required** `string`: The contact's email address.
  * TopicPreferences `array`: The contact's preferences for being opted-in to or opted-out of topics.
    * items [TopicPreference](#topicpreference)
  * UnsubscribeAll `boolean`: A boolean value status noting if the contact is unsubscribed from all contact list topics.

#### Output
* output [CreateContactResponse](#createcontactresponse)

### DeleteContact



```js
amazonaws_sesv2.DeleteContact({
  "ContactListName": "",
  "EmailAddress": ""
}, context)
```

#### Input
* input `object`
  * ContactListName **required** `string`
  * EmailAddress **required** `string`

#### Output
* output [DeleteContactResponse](#deletecontactresponse)

### GetContact



```js
amazonaws_sesv2.GetContact({
  "ContactListName": "",
  "EmailAddress": ""
}, context)
```

#### Input
* input `object`
  * ContactListName **required** `string`
  * EmailAddress **required** `string`

#### Output
* output [GetContactResponse](#getcontactresponse)

### UpdateContact



```js
amazonaws_sesv2.UpdateContact({
  "ContactListName": "",
  "EmailAddress": ""
}, context)
```

#### Input
* input `object`
  * ContactListName **required** `string`
  * EmailAddress **required** `string`
  * AttributesData `string`: The attribute data attached to a contact.
  * TopicPreferences `array`: The contact's preference for being opted-in to or opted-out of a topic.
    * items [TopicPreference](#topicpreference)
  * UnsubscribeAll `boolean`: A boolean value status noting if the contact is unsubscribed from all contact list topics.

#### Output
* output [UpdateContactResponse](#updatecontactresponse)

### ListCustomVerificationEmailTemplates



```js
amazonaws_sesv2.ListCustomVerificationEmailTemplates({}, context)
```

#### Input
* input `object`
  * NextToken `string`
  * PageSize `integer`

#### Output
* output [ListCustomVerificationEmailTemplatesResponse](#listcustomverificationemailtemplatesresponse)

### CreateCustomVerificationEmailTemplate



```js
amazonaws_sesv2.CreateCustomVerificationEmailTemplate({
  "TemplateName": "",
  "FromEmailAddress": "",
  "TemplateSubject": "",
  "TemplateContent": "",
  "SuccessRedirectionURL": "",
  "FailureRedirectionURL": ""
}, context)
```

#### Input
* input `object`
  * FailureRedirectionURL **required** `string`: The URL that the recipient of the verification email is sent to if his or her address is not successfully verified.
  * FromEmailAddress **required** `string`: The email address that the custom verification email is sent from.
  * SuccessRedirectionURL **required** `string`: The URL that the recipient of the verification email is sent to if his or her address is successfully verified.
  * TemplateContent **required** `string`: The content of the custom verification email template.
  * TemplateName **required** `string`: The name of the template. You will refer to this name when you send email using the <code>SendTemplatedEmail</code> or <code>SendBulkTemplatedEmail</code> operations.
  * TemplateSubject **required** `string`: The subject line of the email.

#### Output
* output [CreateCustomVerificationEmailTemplateResponse](#createcustomverificationemailtemplateresponse)

### DeleteCustomVerificationEmailTemplate



```js
amazonaws_sesv2.DeleteCustomVerificationEmailTemplate({
  "TemplateName": ""
}, context)
```

#### Input
* input `object`
  * TemplateName **required** `string`

#### Output
* output [DeleteCustomVerificationEmailTemplateResponse](#deletecustomverificationemailtemplateresponse)

### GetCustomVerificationEmailTemplate



```js
amazonaws_sesv2.GetCustomVerificationEmailTemplate({
  "TemplateName": ""
}, context)
```

#### Input
* input `object`
  * TemplateName **required** `string`

#### Output
* output [GetCustomVerificationEmailTemplateResponse](#getcustomverificationemailtemplateresponse)

### UpdateCustomVerificationEmailTemplate



```js
amazonaws_sesv2.UpdateCustomVerificationEmailTemplate({
  "TemplateName": "",
  "FromEmailAddress": "",
  "TemplateSubject": "",
  "TemplateContent": "",
  "SuccessRedirectionURL": "",
  "FailureRedirectionURL": ""
}, context)
```

#### Input
* input `object`
  * TemplateName **required** `string`
  * FailureRedirectionURL **required** `string`: The URL that the recipient of the verification email is sent to if his or her address is not successfully verified.
  * FromEmailAddress **required** `string`: The email address that the custom verification email is sent from.
  * SuccessRedirectionURL **required** `string`: The URL that the recipient of the verification email is sent to if his or her address is successfully verified.
  * TemplateContent **required** `string`: The content of the custom verification email template.
  * TemplateSubject **required** `string`: The subject line of the email.

#### Output
* output [UpdateCustomVerificationEmailTemplateResponse](#updatecustomverificationemailtemplateresponse)

### ListDedicatedIpPools



```js
amazonaws_sesv2.ListDedicatedIpPools({}, context)
```

#### Input
* input `object`
  * NextToken `string`
  * PageSize `integer`

#### Output
* output [ListDedicatedIpPoolsResponse](#listdedicatedippoolsresponse)

### CreateDedicatedIpPool



```js
amazonaws_sesv2.CreateDedicatedIpPool({
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
amazonaws_sesv2.DeleteDedicatedIpPool({
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
amazonaws_sesv2.GetDedicatedIps({}, context)
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
amazonaws_sesv2.GetDedicatedIp({
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
amazonaws_sesv2.PutDedicatedIpInPool({
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
amazonaws_sesv2.PutDedicatedIpWarmupAttributes({
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
amazonaws_sesv2.GetDeliverabilityDashboardOptions({}, context)
```

#### Input
* input `object`

#### Output
* output [GetDeliverabilityDashboardOptionsResponse](#getdeliverabilitydashboardoptionsresponse)

### PutDeliverabilityDashboardOption



```js
amazonaws_sesv2.PutDeliverabilityDashboardOption({
  "DashboardEnabled": true
}, context)
```

#### Input
* input `object`
  * DashboardEnabled **required** `boolean`: Specifies whether to enable the Deliverability dashboard. To enable the dashboard, set this value to <code>true</code>.
  * SubscribedDomains `array`: An object that contains information about the Deliverability dashboard subscription for a verified domain that you use to send email and currently has an active Deliverability dashboard subscription. If a Deliverability dashboard subscription is active for a domain, you gain access to reputation, inbox placement, and other metrics for the domain.
    * items [DomainDeliverabilityTrackingOption](#domaindeliverabilitytrackingoption)

#### Output
* output [PutDeliverabilityDashboardOptionResponse](#putdeliverabilitydashboardoptionresponse)

### GetBlacklistReports



```js
amazonaws_sesv2.GetBlacklistReports({
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
amazonaws_sesv2.GetDomainDeliverabilityCampaign({
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
amazonaws_sesv2.ListDomainDeliverabilityCampaigns({
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
amazonaws_sesv2.GetDomainStatisticsReport({
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
amazonaws_sesv2.CreateDeliverabilityTestReport({
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
      * TemplateName
  * FromEmailAddress **required** `string`: The email address that the predictive inbox placement test email was sent from.
  * ReportName `string`: A name that helps you identify a report generated by the Deliverability dashboard.
  * Tags `array`: An array of objects that define the tags (keys and values) that you want to associate with the predictive inbox placement test.
    * items [Tag](#tag)

#### Output
* output [CreateDeliverabilityTestReportResponse](#createdeliverabilitytestreportresponse)

### ListDeliverabilityTestReports



```js
amazonaws_sesv2.ListDeliverabilityTestReports({}, context)
```

#### Input
* input `object`
  * NextToken `string`
  * PageSize `integer`

#### Output
* output [ListDeliverabilityTestReportsResponse](#listdeliverabilitytestreportsresponse)

### GetDeliverabilityTestReport



```js
amazonaws_sesv2.GetDeliverabilityTestReport({
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
amazonaws_sesv2.ListEmailIdentities({}, context)
```

#### Input
* input `object`
  * NextToken `string`
  * PageSize `integer`

#### Output
* output [ListEmailIdentitiesResponse](#listemailidentitiesresponse)

### CreateEmailIdentity



```js
amazonaws_sesv2.CreateEmailIdentity({
  "EmailIdentity": ""
}, context)
```

#### Input
* input `object`
  * DkimSigningAttributes `object`: An object that contains information about the tokens used for setting up Bring Your Own DKIM (BYODKIM).
    * DomainSigningPrivateKey
    * DomainSigningSelector
  * EmailIdentity **required** `string`: The email address or domain that you want to verify.
  * Tags `array`: An array of objects that define the tags (keys and values) that you want to associate with the email identity.
    * items [Tag](#tag)

#### Output
* output [CreateEmailIdentityResponse](#createemailidentityresponse)

### DeleteEmailIdentity



```js
amazonaws_sesv2.DeleteEmailIdentity({
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
amazonaws_sesv2.GetEmailIdentity({
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
amazonaws_sesv2.PutEmailIdentityDkimAttributes({
  "EmailIdentity": ""
}, context)
```

#### Input
* input `object`
  * EmailIdentity **required** `string`
  * SigningEnabled `boolean`: <p>Sets the DKIM signing configuration for the identity.</p> <p>When you set this value <code>true</code>, then the messages that are sent from the identity are signed using DKIM. If you set this value to <code>false</code>, your messages are sent without DKIM signing.</p>

#### Output
* output [PutEmailIdentityDkimAttributesResponse](#putemailidentitydkimattributesresponse)

### PutEmailIdentityFeedbackAttributes



```js
amazonaws_sesv2.PutEmailIdentityFeedbackAttributes({
  "EmailIdentity": ""
}, context)
```

#### Input
* input `object`
  * EmailIdentity **required** `string`
  * EmailForwardingEnabled `boolean`: <p>Sets the feedback forwarding configuration for the identity.</p> <p>If the value is <code>true</code>, you receive email notifications when bounce or complaint events occur. These notifications are sent to the address that you specified in the <code>Return-Path</code> header of the original email.</p> <p>You're required to have a method of tracking bounces and complaints. If you haven't set up another mechanism for receiving bounce or complaint notifications (for example, by setting up an event destination), you receive an email notification when these events occur (even if this setting is disabled).</p>

#### Output
* output [PutEmailIdentityFeedbackAttributesResponse](#putemailidentityfeedbackattributesresponse)

### PutEmailIdentityMailFromAttributes



```js
amazonaws_sesv2.PutEmailIdentityMailFromAttributes({
  "EmailIdentity": ""
}, context)
```

#### Input
* input `object`
  * EmailIdentity **required** `string`
  * BehaviorOnMxFailure `string` (values: USE_DEFAULT_VALUE, REJECT_MESSAGE): <p>The action that you want to take if the required MX record can't be found when you send an email. When you set this value to <code>UseDefaultValue</code>, the mail is sent using <i>amazonses.com</i> as the MAIL FROM domain. When you set this value to <code>RejectMessage</code>, the Amazon SES API v2 returns a <code>MailFromDomainNotVerified</code> error, and doesn't attempt to deliver the email.</p> <p>These behaviors are taken when the custom MAIL FROM domain configuration is in the <code>Pending</code>, <code>Failed</code>, and <code>TemporaryFailure</code> states.</p>
  * MailFromDomain `string`: The domain that you want to use as a MAIL FROM domain.

#### Output
* output [PutEmailIdentityMailFromAttributesResponse](#putemailidentitymailfromattributesresponse)

### GetEmailIdentityPolicies



```js
amazonaws_sesv2.GetEmailIdentityPolicies({
  "EmailIdentity": ""
}, context)
```

#### Input
* input `object`
  * EmailIdentity **required** `string`

#### Output
* output [GetEmailIdentityPoliciesResponse](#getemailidentitypoliciesresponse)

### DeleteEmailIdentityPolicy



```js
amazonaws_sesv2.DeleteEmailIdentityPolicy({
  "EmailIdentity": "",
  "PolicyName": ""
}, context)
```

#### Input
* input `object`
  * EmailIdentity **required** `string`
  * PolicyName **required** `string`

#### Output
* output [DeleteEmailIdentityPolicyResponse](#deleteemailidentitypolicyresponse)

### CreateEmailIdentityPolicy



```js
amazonaws_sesv2.CreateEmailIdentityPolicy({
  "EmailIdentity": "",
  "PolicyName": "",
  "Policy": ""
}, context)
```

#### Input
* input `object`
  * EmailIdentity **required** `string`
  * PolicyName **required** `string`
  * Policy **required** `string`: <p>The text of the policy in JSON format. The policy cannot exceed 4 KB.</p> <p>For information about the syntax of sending authorization policies, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p>

#### Output
* output [CreateEmailIdentityPolicyResponse](#createemailidentitypolicyresponse)

### UpdateEmailIdentityPolicy



```js
amazonaws_sesv2.UpdateEmailIdentityPolicy({
  "EmailIdentity": "",
  "PolicyName": "",
  "Policy": ""
}, context)
```

#### Input
* input `object`
  * EmailIdentity **required** `string`
  * PolicyName **required** `string`
  * Policy **required** `string`: <p>The text of the policy in JSON format. The policy cannot exceed 4 KB.</p> <p>For information about the syntax of sending authorization policies, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p>

#### Output
* output [UpdateEmailIdentityPolicyResponse](#updateemailidentitypolicyresponse)

### ListImportJobs



```js
amazonaws_sesv2.ListImportJobs({}, context)
```

#### Input
* input `object`
  * NextToken `string`
  * PageSize `integer`
  * ImportDestinationType `string` (values: SUPPRESSION_LIST, CONTACT_LIST): The destination of the import job, which can be used to list import jobs that have a certain <code>ImportDestinationType</code>.

#### Output
* output [ListImportJobsResponse](#listimportjobsresponse)

### CreateImportJob



```js
amazonaws_sesv2.CreateImportJob({
  "ImportDestination": {},
  "ImportDataSource": {}
}, context)
```

#### Input
* input `object`
  * ImportDataSource **required** `object`: An object that contains details about the data source of the import job.
    * DataFormat
    * S3Url
  * ImportDestination **required** `object`: An object that contains details about the resource destination the import job is going to target.
    * ContactListDestination
      * ContactListImportAction **required**
      * ContactListName **required**
    * SuppressionListDestination
      * SuppressionListImportAction **required**

#### Output
* output [CreateImportJobResponse](#createimportjobresponse)

### GetImportJob



```js
amazonaws_sesv2.GetImportJob({
  "JobId": ""
}, context)
```

#### Input
* input `object`
  * JobId **required** `string`

#### Output
* output [GetImportJobResponse](#getimportjobresponse)

### SendBulkEmail



```js
amazonaws_sesv2.SendBulkEmail({
  "DefaultContent": {},
  "BulkEmailEntries": []
}, context)
```

#### Input
* input `object`
  * BulkEmailEntries **required** `array`: A list of <code>BulkEmailEntry</code> objects.
    * items [BulkEmailEntry](#bulkemailentry)
  * ConfigurationSetName `string`: <p>The name of a configuration set.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>
  * DefaultContent **required** `object`: An object that contains the body of the message. You can specify a template message.
    * Template
      * TemplateArn
      * TemplateData
      * TemplateName
  * DefaultEmailTags `array`: A list of message tags.
    * items [MessageTag](#messagetag)
  * FeedbackForwardingEmailAddress `string`: The address that you want bounce and complaint notifications to be sent to.
  * FeedbackForwardingEmailAddressIdentityArn `string`: <p>This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to use the email address specified in the <code>FeedbackForwardingEmailAddress</code> parameter.</p> <p>For example, if the owner of example.com (which has ARN arn:aws:ses:us-east-1:123456789012:identity/example.com) attaches a policy to it that authorizes you to use feedback@example.com, then you would specify the <code>FeedbackForwardingEmailAddressIdentityArn</code> to be arn:aws:ses:us-east-1:123456789012:identity/example.com, and the <code>FeedbackForwardingEmailAddress</code> to be feedback@example.com.</p> <p>For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p>
  * FromEmailAddress `string`: The email address that you want to use as the "From" address for the email. The address that you specify has to be verified.
  * FromEmailAddressIdentityArn `string`: <p>This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to use the email address specified in the <code>FromEmailAddress</code> parameter.</p> <p>For example, if the owner of example.com (which has ARN arn:aws:ses:us-east-1:123456789012:identity/example.com) attaches a policy to it that authorizes you to use sender@example.com, then you would specify the <code>FromEmailAddressIdentityArn</code> to be arn:aws:ses:us-east-1:123456789012:identity/example.com, and the <code>FromEmailAddress</code> to be sender@example.com.</p> <p>For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p>
  * ReplyToAddresses `array`: The "Reply-to" email addresses for the message. When the recipient replies to the message, each Reply-to address receives the reply.
    * items [EmailAddress](#emailaddress)

#### Output
* output [SendBulkEmailResponse](#sendbulkemailresponse)

### SendCustomVerificationEmail



```js
amazonaws_sesv2.SendCustomVerificationEmail({
  "EmailAddress": "",
  "TemplateName": ""
}, context)
```

#### Input
* input `object`
  * ConfigurationSetName `string`: <p>The name of a configuration set.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>
  * EmailAddress **required** `string`: The email address to verify.
  * TemplateName **required** `string`: The name of the template. You will refer to this name when you send email using the <code>SendTemplatedEmail</code> or <code>SendBulkTemplatedEmail</code> operations.

#### Output
* output [SendCustomVerificationEmailResponse](#sendcustomverificationemailresponse)

### SendEmail



```js
amazonaws_sesv2.SendEmail({
  "Content": {}
}, context)
```

#### Input
* input `object`
  * ConfigurationSetName `string`: <p>The name of a configuration set.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>
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
      * TemplateName
  * Destination `object`: An object that describes the recipients for an email.
    * BccAddresses
      * items [EmailAddress](#emailaddress)
    * CcAddresses
      * items [EmailAddress](#emailaddress)
    * ToAddresses
      * items [EmailAddress](#emailaddress)
  * EmailTags `array`: A list of message tags.
    * items [MessageTag](#messagetag)
  * FeedbackForwardingEmailAddress `string`: The address that you want bounce and complaint notifications to be sent to.
  * FeedbackForwardingEmailAddressIdentityArn `string`: <p>This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to use the email address specified in the <code>FeedbackForwardingEmailAddress</code> parameter.</p> <p>For example, if the owner of example.com (which has ARN arn:aws:ses:us-east-1:123456789012:identity/example.com) attaches a policy to it that authorizes you to use feedback@example.com, then you would specify the <code>FeedbackForwardingEmailAddressIdentityArn</code> to be arn:aws:ses:us-east-1:123456789012:identity/example.com, and the <code>FeedbackForwardingEmailAddress</code> to be feedback@example.com.</p> <p>For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p>
  * FromEmailAddress `string`: The email address that you want to use as the "From" address for the email. The address that you specify has to be verified. 
  * FromEmailAddressIdentityArn `string`: <p>This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to use the email address specified in the <code>FromEmailAddress</code> parameter.</p> <p>For example, if the owner of example.com (which has ARN arn:aws:ses:us-east-1:123456789012:identity/example.com) attaches a policy to it that authorizes you to use sender@example.com, then you would specify the <code>FromEmailAddressIdentityArn</code> to be arn:aws:ses:us-east-1:123456789012:identity/example.com, and the <code>FromEmailAddress</code> to be sender@example.com.</p> <p>For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>For Raw emails, the <code>FromEmailAddressIdentityArn</code> value overrides the X-SES-SOURCE-ARN and X-SES-FROM-ARN headers specified in raw email message content.</p>
  * ListManagementOptions `object`: An object used to specify a list or topic to which an email belongs, which will be used when a contact chooses to unsubscribe.
    * ContactListName
    * TopicName
  * ReplyToAddresses `array`: The "Reply-to" email addresses for the message. When the recipient replies to the message, each Reply-to address receives the reply.
    * items [EmailAddress](#emailaddress)

#### Output
* output [SendEmailResponse](#sendemailresponse)

### ListSuppressedDestinations



```js
amazonaws_sesv2.ListSuppressedDestinations({}, context)
```

#### Input
* input `object`
  * Reason `array`
  * StartDate `string`
  * EndDate `string`
  * NextToken `string`
  * PageSize `integer`

#### Output
* output [ListSuppressedDestinationsResponse](#listsuppresseddestinationsresponse)

### PutSuppressedDestination



```js
amazonaws_sesv2.PutSuppressedDestination({
  "EmailAddress": "",
  "Reason": ""
}, context)
```

#### Input
* input `object`
  * EmailAddress **required** `string`: The email address that should be added to the suppression list for your account.
  * Reason **required** `string` (values: BOUNCE, COMPLAINT): <p>The reason that the address was added to the suppression list for your account. The value can be one of the following:</p> <ul> <li> <p> <code>COMPLAINT</code> – Amazon SES added an email address to the suppression list for your account because a message sent to that address results in a complaint.</p> </li> <li> <p> <code>BOUNCE</code> – Amazon SES added an email address to the suppression list for your account because a message sent to that address results in a hard bounce.</p> </li> </ul>

#### Output
* output [PutSuppressedDestinationResponse](#putsuppresseddestinationresponse)

### DeleteSuppressedDestination



```js
amazonaws_sesv2.DeleteSuppressedDestination({
  "EmailAddress": ""
}, context)
```

#### Input
* input `object`
  * EmailAddress **required** `string`

#### Output
* output [DeleteSuppressedDestinationResponse](#deletesuppresseddestinationresponse)

### GetSuppressedDestination



```js
amazonaws_sesv2.GetSuppressedDestination({
  "EmailAddress": ""
}, context)
```

#### Input
* input `object`
  * EmailAddress **required** `string`

#### Output
* output [GetSuppressedDestinationResponse](#getsuppresseddestinationresponse)

### TagResource



```js
amazonaws_sesv2.TagResource({
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
amazonaws_sesv2.ListTagsForResource({
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
amazonaws_sesv2.UntagResource({
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

### ListEmailTemplates



```js
amazonaws_sesv2.ListEmailTemplates({}, context)
```

#### Input
* input `object`
  * NextToken `string`
  * PageSize `integer`

#### Output
* output [ListEmailTemplatesResponse](#listemailtemplatesresponse)

### CreateEmailTemplate



```js
amazonaws_sesv2.CreateEmailTemplate({
  "TemplateName": "",
  "TemplateContent": {}
}, context)
```

#### Input
* input `object`
  * TemplateContent **required** `object`: The content of the email, composed of a subject line, an HTML part, and a text-only part.
    * Html
    * Subject
    * Text
  * TemplateName **required** `string`: The name of the template. You will refer to this name when you send email using the <code>SendTemplatedEmail</code> or <code>SendBulkTemplatedEmail</code> operations.

#### Output
* output [CreateEmailTemplateResponse](#createemailtemplateresponse)

### DeleteEmailTemplate



```js
amazonaws_sesv2.DeleteEmailTemplate({
  "TemplateName": ""
}, context)
```

#### Input
* input `object`
  * TemplateName **required** `string`

#### Output
* output [DeleteEmailTemplateResponse](#deleteemailtemplateresponse)

### GetEmailTemplate



```js
amazonaws_sesv2.GetEmailTemplate({
  "TemplateName": ""
}, context)
```

#### Input
* input `object`
  * TemplateName **required** `string`

#### Output
* output [GetEmailTemplateResponse](#getemailtemplateresponse)

### UpdateEmailTemplate



```js
amazonaws_sesv2.UpdateEmailTemplate({
  "TemplateName": "",
  "TemplateContent": {}
}, context)
```

#### Input
* input `object`
  * TemplateName **required** `string`
  * TemplateContent **required** `object`: The content of the email, composed of a subject line, an HTML part, and a text-only part.
    * Html
    * Subject
    * Text

#### Output
* output [UpdateEmailTemplateResponse](#updateemailtemplateresponse)

### TestRenderEmailTemplate



```js
amazonaws_sesv2.TestRenderEmailTemplate({
  "TemplateName": "",
  "TemplateData": ""
}, context)
```

#### Input
* input `object`
  * TemplateName **required** `string`
  * TemplateData **required** `string`: An object that defines the values to use for message variables in the template. This object is a set of key-value pairs. Each key defines a message variable in the template. The corresponding value defines the value to use for that variable.

#### Output
* output [TestRenderEmailTemplateResponse](#testrenderemailtemplateresponse)



## Definitions

### AccountDetails
* AccountDetails `object`: An object that contains information about your account details.
  * AdditionalContactEmailAddresses
    * items [AdditionalContactEmailAddress](#additionalcontactemailaddress)
  * ContactLanguage
  * MailType
  * ReviewDetails
    * CaseId
    * Status
  * UseCaseDescription
  * WebsiteURL

### AccountSuspendedException


### AdditionalContactEmailAddress
* AdditionalContactEmailAddress `string`

### AdditionalContactEmailAddresses
* AdditionalContactEmailAddresses `array`
  * items [AdditionalContactEmailAddress](#additionalcontactemailaddress)

### AlreadyExistsException


### AmazonResourceName
* AmazonResourceName `string`

### AttributesData
* AttributesData `string`

### BadRequestException


### BehaviorOnMxFailure
* BehaviorOnMxFailure `string` (values: USE_DEFAULT_VALUE, REJECT_MESSAGE): <p>The action that you want to take if the required MX record can't be found when you send an email. When you set this value to <code>UseDefaultValue</code>, the mail is sent using <i>amazonses.com</i> as the MAIL FROM domain. When you set this value to <code>RejectMessage</code>, the Amazon SES API v2 returns a <code>MailFromDomainNotVerified</code> error, and doesn't attempt to deliver the email.</p> <p>These behaviors are taken when the custom MAIL FROM domain configuration is in the <code>Pending</code>, <code>Failed</code>, and <code>TemporaryFailure</code> states.</p>

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

### BulkEmailContent
* BulkEmailContent `object`: An object that contains the body of the message. You can specify a template message.
  * Template
    * TemplateArn
    * TemplateData
    * TemplateName

### BulkEmailEntry
* BulkEmailEntry `object`
  * Destination **required**
    * BccAddresses
      * items [EmailAddress](#emailaddress)
    * CcAddresses
      * items [EmailAddress](#emailaddress)
    * ToAddresses
      * items [EmailAddress](#emailaddress)
  * ReplacementEmailContent
    * ReplacementTemplate
      * ReplacementTemplateData
  * ReplacementTags
    * items [MessageTag](#messagetag)

### BulkEmailEntryList
* BulkEmailEntryList `array`: A list of <code>BulkEmailEntry</code> objects.
  * items [BulkEmailEntry](#bulkemailentry)

### BulkEmailEntryResult
* BulkEmailEntryResult `object`: The result of the <code>SendBulkEmail</code> operation of each specified <code>BulkEmailEntry</code>.
  * Error
  * MessageId
  * Status

### BulkEmailEntryResultList
* BulkEmailEntryResultList `array`: A list of <code>BulkMailEntry</code> objects.
  * items [BulkEmailEntryResult](#bulkemailentryresult)

### BulkEmailStatus
* BulkEmailStatus `string` (values: SUCCESS, MESSAGE_REJECTED, MAIL_FROM_DOMAIN_NOT_VERIFIED, CONFIGURATION_SET_NOT_FOUND, TEMPLATE_NOT_FOUND, ACCOUNT_SUSPENDED, ACCOUNT_THROTTLED, ACCOUNT_DAILY_QUOTA_EXCEEDED, INVALID_SENDING_POOL_NAME, ACCOUNT_SENDING_PAUSED, CONFIGURATION_SET_SENDING_PAUSED, INVALID_PARAMETER, TRANSIENT_FAILURE, FAILED)

### CampaignId
* CampaignId `string`

### CaseId
* CaseId `string`

### Charset
* Charset `string`

### CloudWatchDestination
* CloudWatchDestination `object`: An object that defines an Amazon CloudWatch destination for email events. You can use Amazon CloudWatch to monitor and gain insights on your email sending metrics.
  * DimensionConfigurations **required**
    * items [CloudWatchDimensionConfiguration](#cloudwatchdimensionconfiguration)

### CloudWatchDimensionConfiguration
* CloudWatchDimensionConfiguration `object`: An object that defines the dimension configuration to use when you send email events to Amazon CloudWatch.
  * DefaultDimensionValue **required**
  * DimensionName **required**
  * DimensionValueSource **required**

### CloudWatchDimensionConfigurations
* CloudWatchDimensionConfigurations `array`
  * items [CloudWatchDimensionConfiguration](#cloudwatchdimensionconfiguration)

### ConcurrentModificationException


### ConfigurationSetName
* ConfigurationSetName `string`: <p>The name of a configuration set.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>

### ConfigurationSetNameList
* ConfigurationSetNameList `array`
  * items [ConfigurationSetName](#configurationsetname)

### ConflictException


### Contact
* Contact `object`: A contact is the end-user who is receiving the email.
  * EmailAddress
  * LastUpdatedTimestamp
  * TopicDefaultPreferences
    * items [TopicPreference](#topicpreference)
  * TopicPreferences
    * items [TopicPreference](#topicpreference)
  * UnsubscribeAll

### ContactLanguage
* ContactLanguage `string` (values: EN, JA)

### ContactList
* ContactList `object`: A list that contains contacts that have subscribed to a particular topic or topics.
  * ContactListName
  * LastUpdatedTimestamp

### ContactListDestination
* ContactListDestination `object`: An object that contains details about the action of a contact list.
  * ContactListImportAction **required**
  * ContactListName **required**

### ContactListImportAction
* ContactListImportAction `string` (values: DELETE, PUT)

### ContactListName
* ContactListName `string`

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
  * SuppressionOptions [SuppressionOptions](#suppressionoptions)
  * Tags
    * items [Tag](#tag)
  * TrackingOptions
    * CustomRedirectDomain **required**

### CreateConfigurationSetResponse
* CreateConfigurationSetResponse `object`: An HTTP 200 response if the request succeeds, or an error message if the request fails.

### CreateContactListRequest
* CreateContactListRequest `object`
  * ContactListName **required**
  * Description
  * Tags
    * items [Tag](#tag)
  * Topics
    * items [Topic](#topic)

### CreateContactListResponse
* CreateContactListResponse `object`

### CreateContactRequest
* CreateContactRequest `object`
  * AttributesData
  * EmailAddress **required**
  * TopicPreferences
    * items [TopicPreference](#topicpreference)
  * UnsubscribeAll

### CreateContactResponse
* CreateContactResponse `object`

### CreateCustomVerificationEmailTemplateRequest
* CreateCustomVerificationEmailTemplateRequest `object`: Represents a request to create a custom verification email template.
  * FailureRedirectionURL **required**
  * FromEmailAddress **required**
  * SuccessRedirectionURL **required**
  * TemplateContent **required**
  * TemplateName **required**
  * TemplateSubject **required**

### CreateCustomVerificationEmailTemplateResponse
* CreateCustomVerificationEmailTemplateResponse `object`: If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body.

### CreateDedicatedIpPoolRequest
* CreateDedicatedIpPoolRequest `object`: A request to create a new dedicated IP pool.
  * PoolName **required**
  * Tags
    * items [Tag](#tag)

### CreateDedicatedIpPoolResponse
* CreateDedicatedIpPoolResponse `object`: An HTTP 200 response if the request succeeds, or an error message if the request fails.

### CreateDeliverabilityTestReportRequest
* CreateDeliverabilityTestReportRequest `object`: A request to perform a predictive inbox placement test. Predictive inbox placement tests can help you predict how your messages will be handled by various email providers around the world. When you perform a predictive inbox placement test, you provide a sample message that contains the content that you plan to send to your customers. We send that message to special email addresses spread across several major email providers around the world. The test takes about 24 hours to complete. When the test is complete, you can use the <code>GetDeliverabilityTestReport</code> operation to view the results of the test.
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
      * TemplateName
  * FromEmailAddress **required**
  * ReportName
  * Tags
    * items [Tag](#tag)

### CreateDeliverabilityTestReportResponse
* CreateDeliverabilityTestReportResponse `object`: Information about the predictive inbox placement test that you created.
  * DeliverabilityTestStatus **required**
  * ReportId **required**

### CreateEmailIdentityPolicyRequest
* CreateEmailIdentityPolicyRequest `object`: Represents a request to create a sending authorization policy for an identity. Sending authorization is an Amazon SES feature that enables you to authorize other senders to use your identities. For information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization-identity-owner-tasks-management.html">Amazon SES Developer Guide</a>.
  * Policy **required**

### CreateEmailIdentityPolicyResponse
* CreateEmailIdentityPolicyResponse `object`: An HTTP 200 response if the request succeeds, or an error message if the request fails.

### CreateEmailIdentityRequest
* CreateEmailIdentityRequest `object`: A request to begin the verification process for an email identity (an email address or domain).
  * DkimSigningAttributes
    * DomainSigningPrivateKey **required**
    * DomainSigningSelector **required**
  * EmailIdentity **required**
  * Tags
    * items [Tag](#tag)

### CreateEmailIdentityResponse
* CreateEmailIdentityResponse `object`: <p>If the email identity is a domain, this object contains information about the DKIM verification status for the domain.</p> <p>If the email identity is an email address, this object is empty. </p>
  * DkimAttributes
    * SigningAttributesOrigin
    * SigningEnabled
    * Status
    * Tokens
      * items [DnsToken](#dnstoken)
  * IdentityType
  * VerifiedForSendingStatus

### CreateEmailTemplateRequest
* CreateEmailTemplateRequest `object`: Represents a request to create an email template. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>.
  * TemplateContent **required**
    * Html
    * Subject
    * Text
  * TemplateName **required**

### CreateEmailTemplateResponse
* CreateEmailTemplateResponse `object`: If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body.

### CreateImportJobRequest
* CreateImportJobRequest `object`: Represents a request to create an import job from a data source for a data destination.
  * ImportDataSource **required**
    * DataFormat **required**
    * S3Url **required**
  * ImportDestination **required**
    * ContactListDestination
      * ContactListImportAction **required**
      * ContactListName **required**
    * SuppressionListDestination
      * SuppressionListImportAction **required**

### CreateImportJobResponse
* CreateImportJobResponse `object`: An HTTP 200 response if the request succeeds, or an error message if the request fails.
  * JobId

### CustomRedirectDomain
* CustomRedirectDomain `string`: The domain that you want to use for tracking open and click events.

### CustomVerificationEmailTemplateMetadata
* CustomVerificationEmailTemplateMetadata `object`: Contains information about a custom verification email template.
  * FailureRedirectionURL
  * FromEmailAddress
  * SuccessRedirectionURL
  * TemplateName
  * TemplateSubject

### CustomVerificationEmailTemplatesList
* CustomVerificationEmailTemplatesList `array`: A list of the custom verification email templates that exist in your account.
  * items [CustomVerificationEmailTemplateMetadata](#customverificationemailtemplatemetadata)

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

### DataFormat
* DataFormat `string` (values: CSV, JSON): The data format of the import job's data source.

### DedicatedIp
* DedicatedIp `object`: <p>Contains information about a dedicated IP address that is associated with your Amazon SES account.</p> <p>To learn more about requesting dedicated IP addresses, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/dedicated-ip-case.html">Requesting and Relinquishing Dedicated IP Addresses</a> in the <i>Amazon SES Developer Guide</i>.</p>
  * Ip **required**
  * PoolName
  * WarmupPercentage **required**
  * WarmupStatus **required**

### DedicatedIpList
* DedicatedIpList `array`: A list of dedicated IP addresses that are associated with your AWS account.
  * items [DedicatedIp](#dedicatedip)

### DefaultDimensionValue
* DefaultDimensionValue `string`: <p>The default value of the dimension that is published to Amazon CloudWatch if you don't provide the value of the dimension when you send an email. This value has to meet the following criteria:</p> <ul> <li> <p>It can only contain ASCII letters (a–z, A–Z), numbers (0–9), underscores (_), or dashes (-).</p> </li> <li> <p>It can contain no more than 256 characters.</p> </li> </ul>

### DeleteConfigurationSetEventDestinationRequest
* DeleteConfigurationSetEventDestinationRequest `object`: A request to delete an event destination from a configuration set.

### DeleteConfigurationSetEventDestinationResponse
* DeleteConfigurationSetEventDestinationResponse `object`: An HTTP 200 response if the request succeeds, or an error message if the request fails.

### DeleteConfigurationSetRequest
* DeleteConfigurationSetRequest `object`: A request to delete a configuration set.

### DeleteConfigurationSetResponse
* DeleteConfigurationSetResponse `object`: An HTTP 200 response if the request succeeds, or an error message if the request fails.

### DeleteContactListRequest
* DeleteContactListRequest `object`

### DeleteContactListResponse
* DeleteContactListResponse `object`

### DeleteContactRequest
* DeleteContactRequest `object`

### DeleteContactResponse
* DeleteContactResponse `object`

### DeleteCustomVerificationEmailTemplateRequest
* DeleteCustomVerificationEmailTemplateRequest `object`: Represents a request to delete an existing custom verification email template.

### DeleteCustomVerificationEmailTemplateResponse
* DeleteCustomVerificationEmailTemplateResponse `object`: If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body.

### DeleteDedicatedIpPoolRequest
* DeleteDedicatedIpPoolRequest `object`: A request to delete a dedicated IP pool.

### DeleteDedicatedIpPoolResponse
* DeleteDedicatedIpPoolResponse `object`: An HTTP 200 response if the request succeeds, or an error message if the request fails.

### DeleteEmailIdentityPolicyRequest
* DeleteEmailIdentityPolicyRequest `object`: Represents a request to delete a sending authorization policy for an identity. Sending authorization is an Amazon SES feature that enables you to authorize other senders to use your identities. For information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization-identity-owner-tasks-management.html">Amazon SES Developer Guide</a>.

### DeleteEmailIdentityPolicyResponse
* DeleteEmailIdentityPolicyResponse `object`: An HTTP 200 response if the request succeeds, or an error message if the request fails.

### DeleteEmailIdentityRequest
* DeleteEmailIdentityRequest `object`: A request to delete an existing email identity. When you delete an identity, you lose the ability to send email from that identity. You can restore your ability to send email by completing the verification process for the identity again.

### DeleteEmailIdentityResponse
* DeleteEmailIdentityResponse `object`: An HTTP 200 response if the request succeeds, or an error message if the request fails.

### DeleteEmailTemplateRequest
* DeleteEmailTemplateRequest `object`: Represents a request to delete an email template. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>.

### DeleteEmailTemplateResponse
* DeleteEmailTemplateResponse `object`: If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body.

### DeleteSuppressedDestinationRequest
* DeleteSuppressedDestinationRequest `object`: A request to remove an email address from the suppression list for your account.

### DeleteSuppressedDestinationResponse
* DeleteSuppressedDestinationResponse `object`: An HTTP 200 response if the request succeeds, or an error message if the request fails.

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

### Description
* Description `string`

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
* DimensionValueSource `string` (values: MESSAGE_TAG, EMAIL_HEADER, LINK_TAG): The location where the Amazon SES API v2 finds the value of a dimension to publish to Amazon CloudWatch. If you want to use the message tags that you specify using an <code>X-SES-MESSAGE-TAGS</code> header or a parameter to the <code>SendEmail</code> or <code>SendRawEmail</code> API, choose <code>messageTag</code>. If you want to use your own email headers, choose <code>emailHeader</code>. If you want to use link tags, choose <code>linkTags</code>.

### DisplayName
* DisplayName `string`

### DkimAttributes
* DkimAttributes `object`: <p>An object that contains information about the DKIM authentication status for an email identity.</p> <p>Amazon SES determines the authentication status by searching for specific records in the DNS configuration for the domain. If you used <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Easy DKIM</a> to set up DKIM authentication, Amazon SES tries to find three unique CNAME records in the DNS configuration for your domain. If you provided a public key to perform DKIM authentication, Amazon SES tries to find a TXT record that uses the selector that you specified. The value of the TXT record must be a public key that's paired with the private key that you specified in the process of creating the identity</p>
  * SigningAttributesOrigin
  * SigningEnabled
  * Status
  * Tokens
    * items [DnsToken](#dnstoken)

### DkimSigningAttributes
* DkimSigningAttributes `object`: An object that contains information about the tokens used for setting up Bring Your Own DKIM (BYODKIM).
  * DomainSigningPrivateKey **required**
  * DomainSigningSelector **required**

### DkimSigningAttributesOrigin
* DkimSigningAttributesOrigin `string` (values: AWS_SES, EXTERNAL)

### DkimStatus
* DkimStatus `string` (values: PENDING, SUCCESS, FAILED, TEMPORARY_FAILURE, NOT_STARTED): <p>The DKIM authentication status of the identity. The status can be one of the following:</p> <ul> <li> <p> <code>PENDING</code> – The verification process was initiated, but Amazon SES hasn't yet detected the DKIM records in the DNS configuration for the domain.</p> </li> <li> <p> <code>SUCCESS</code> – The verification process completed successfully.</p> </li> <li> <p> <code>FAILED</code> – The verification process failed. This typically occurs when Amazon SES fails to find the DKIM records in the DNS configuration of the domain.</p> </li> <li> <p> <code>TEMPORARY_FAILURE</code> – A temporary issue is preventing Amazon SES from determining the DKIM authentication status of the domain.</p> </li> <li> <p> <code>NOT_STARTED</code> – The DKIM verification process hasn't been initiated for the domain.</p> </li> </ul>

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
    * TemplateName

### EmailTemplateContent
* EmailTemplateContent `object`: The content of the email, composed of a subject line, an HTML part, and a text-only part.
  * Html
  * Subject
  * Text

### EmailTemplateData
* EmailTemplateData `string`: An object that defines the values to use for message variables in the template. This object is a set of key-value pairs. Each key defines a message variable in the template. The corresponding value defines the value to use for that variable.

### EmailTemplateHtml
* EmailTemplateHtml `string`: The HTML body of the email.

### EmailTemplateMetadata
* EmailTemplateMetadata `object`: Contains information about an email template.
  * CreatedTimestamp
  * TemplateName

### EmailTemplateMetadataList
* EmailTemplateMetadataList `array`: A list of the EmailTemplateMetadata object.
  * items [EmailTemplateMetadata](#emailtemplatemetadata)

### EmailTemplateName
* EmailTemplateName `string`: The name of the template. You will refer to this name when you send email using the <code>SendTemplatedEmail</code> or <code>SendBulkTemplatedEmail</code> operations.

### EmailTemplateSubject
* EmailTemplateSubject `string`: The subject line of the email.

### EmailTemplateText
* EmailTemplateText `string`: The email body that will be visible to recipients whose email clients do not display HTML.

### Enabled
* Enabled `boolean`

### EnabledWrapper
* EnabledWrapper `boolean`

### ErrorMessage
* ErrorMessage `string`

### Esp
* Esp `string`

### Esps
* Esps `array`
  * items [Esp](#esp)

### EventDestination
* EventDestination `object`: In the Amazon SES API v2, <i>events</i> include message sends, deliveries, opens, clicks, bounces, complaints and delivery delays. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.
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
* EventDestinationName `string`: <p>The name of an event destination.</p> <p> <i>Events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>

### EventDestinations
* EventDestinations `array`
  * items [EventDestination](#eventdestination)

### EventType
* EventType `string` (values: SEND, REJECT, BOUNCE, COMPLAINT, DELIVERY, OPEN, CLICK, RENDERING_FAILURE, DELIVERY_DELAY, SUBSCRIPTION): An email sending event type. For example, email sends, opens, and bounces are all email events.

### EventTypes
* EventTypes `array`
  * items [EventType](#eventtype)

### FailedRecordsCount
* FailedRecordsCount `integer`

### FailedRecordsS3Url
* FailedRecordsS3Url `string`

### FailureInfo
* FailureInfo `object`: An object that contains the failure details about an import job.
  * ErrorMessage
  * FailedRecordsS3Url

### FailureRedirectionURL
* FailureRedirectionURL `string`: The URL that the recipient of the verification email is sent to if his or her address is not successfully verified.

### FeedbackId
* FeedbackId `string`

### GeneralEnforcementStatus
* GeneralEnforcementStatus `string`

### GetAccountRequest
* GetAccountRequest `object`: A request to obtain information about the email-sending capabilities of your Amazon SES account.

### GetAccountResponse
* GetAccountResponse `object`: A list of details about the email-sending capabilities of your Amazon SES account in the current AWS Region.
  * DedicatedIpAutoWarmupEnabled
  * Details
    * AdditionalContactEmailAddresses
      * items [AdditionalContactEmailAddress](#additionalcontactemailaddress)
    * ContactLanguage
    * MailType
    * ReviewDetails
      * CaseId
      * Status
    * UseCaseDescription
    * WebsiteURL
  * EnforcementStatus
  * ProductionAccessEnabled
  * SendQuota
    * Max24HourSend
    * MaxSendRate
    * SentLast24Hours
  * SendingEnabled
  * SuppressionAttributes
    * SuppressedReasons
      * items [SuppressionListReason](#suppressionlistreason)

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
  * SuppressionOptions
    * SuppressedReasons
      * items [SuppressionListReason](#suppressionlistreason)
  * Tags
    * items [Tag](#tag)
  * TrackingOptions
    * CustomRedirectDomain **required**

### GetContactListRequest
* GetContactListRequest `object`

### GetContactListResponse
* GetContactListResponse `object`
  * ContactListName
  * CreatedTimestamp
  * Description
  * LastUpdatedTimestamp
  * Tags
    * items [Tag](#tag)
  * Topics
    * items [Topic](#topic)

### GetContactRequest
* GetContactRequest `object`

### GetContactResponse
* GetContactResponse `object`
  * AttributesData
  * ContactListName
  * CreatedTimestamp
  * EmailAddress
  * LastUpdatedTimestamp
  * TopicDefaultPreferences
    * items [TopicPreference](#topicpreference)
  * TopicPreferences
    * items [TopicPreference](#topicpreference)
  * UnsubscribeAll

### GetCustomVerificationEmailTemplateRequest
* GetCustomVerificationEmailTemplateRequest `object`: Represents a request to retrieve an existing custom verification email template.

### GetCustomVerificationEmailTemplateResponse
* GetCustomVerificationEmailTemplateResponse `object`: The following elements are returned by the service.
  * FailureRedirectionURL
  * FromEmailAddress
  * SuccessRedirectionURL
  * TemplateContent
  * TemplateName
  * TemplateSubject

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
* GetDedicatedIpsResponse `object`: Information about the dedicated IP addresses that are associated with your AWS account.
  * DedicatedIps
    * items [DedicatedIp](#dedicatedip)
  * NextToken

### GetDeliverabilityDashboardOptionsRequest
* GetDeliverabilityDashboardOptionsRequest `object`: <p>Retrieve information about the status of the Deliverability dashboard for your AWS account. When the Deliverability dashboard is enabled, you gain access to reputation, deliverability, and other metrics for your domains. You also gain the ability to perform predictive inbox placement tests.</p> <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition to any other fees that you accrue by using Amazon SES and other AWS services. For more information about the features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/pinpoint/pricing/">Amazon Pinpoint Pricing</a>.</p>

### GetDeliverabilityDashboardOptionsResponse
* GetDeliverabilityDashboardOptionsResponse `object`: An object that shows the status of the Deliverability dashboard.
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
* GetDomainDeliverabilityCampaignResponse `object`: An object that contains all the deliverability data for a specific campaign. This data is available for a campaign only if the campaign sent email by using a domain that the Deliverability dashboard is enabled for.
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

### GetEmailIdentityPoliciesRequest
* GetEmailIdentityPoliciesRequest `object`: A request to return the policies of an email identity.

### GetEmailIdentityPoliciesResponse
* GetEmailIdentityPoliciesResponse `object`: Identity policies associated with email identity.
  * Policies

### GetEmailIdentityRequest
* GetEmailIdentityRequest `object`: A request to return details about an email identity.

### GetEmailIdentityResponse
* GetEmailIdentityResponse `object`: Details about an email identity.
  * DkimAttributes
    * SigningAttributesOrigin
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
  * Policies
  * Tags
    * items [Tag](#tag)
  * VerifiedForSendingStatus

### GetEmailTemplateRequest
* GetEmailTemplateRequest `object`: Represents a request to display the template object (which includes the subject line, HTML part and text part) for the template you specify.

### GetEmailTemplateResponse
* GetEmailTemplateResponse `object`: The following element is returned by the service.
  * TemplateContent **required**
    * Html
    * Subject
    * Text
  * TemplateName **required**

### GetImportJobRequest
* GetImportJobRequest `object`: Represents a request for information about an import job using the import job ID.

### GetImportJobResponse
* GetImportJobResponse `object`: An HTTP 200 response if the request succeeds, or an error message if the request fails.
  * CompletedTimestamp
  * CreatedTimestamp
  * FailedRecordsCount
  * FailureInfo
    * ErrorMessage
    * FailedRecordsS3Url
  * ImportDataSource
    * DataFormat **required**
    * S3Url **required**
  * ImportDestination
    * ContactListDestination
      * ContactListImportAction **required**
      * ContactListName **required**
    * SuppressionListDestination
      * SuppressionListImportAction **required**
  * JobId
  * JobStatus
  * ProcessedRecordsCount

### GetSuppressedDestinationRequest
* GetSuppressedDestinationRequest `object`: A request to retrieve information about an email address that's on the suppression list for your account.

### GetSuppressedDestinationResponse
* GetSuppressedDestinationResponse `object`: Information about the suppressed email address.
  * SuppressedDestination **required**
    * Attributes
      * FeedbackId
      * MessageId
    * EmailAddress **required**
    * LastUpdateTime **required**
    * Reason **required**

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

### ImportDataSource
* ImportDataSource `object`: An object that contains details about the data source of the import job.
  * DataFormat **required**
  * S3Url **required**

### ImportDestination
* ImportDestination `object`: An object that contains details about the resource destination the import job is going to target.
  * ContactListDestination
    * ContactListImportAction **required**
    * ContactListName **required**
  * SuppressionListDestination
    * SuppressionListImportAction **required**

### ImportDestinationType
* ImportDestinationType `string` (values: SUPPRESSION_LIST, CONTACT_LIST): The destination of the import job, which can be used to list import jobs that have a certain <code>ImportDestinationType</code>.

### ImportJobSummary
* ImportJobSummary `object`: A summary of the import job.
  * CreatedTimestamp
  * ImportDestination [ImportDestination](#importdestination)
  * JobId [JobId](#jobid)
  * JobStatus [JobStatus](#jobstatus)

### ImportJobSummaryList
* ImportJobSummaryList `array`: A list of the import job summaries.
  * items [ImportJobSummary](#importjobsummary)

### InboxPlacementTrackingOption
* InboxPlacementTrackingOption `object`: An object that contains information about the inbox placement data settings for a verified domain that’s associated with your AWS account. This data is available only if you enabled the Deliverability dashboard for the domain.
  * Global
  * TrackedIsps
    * items [IspName](#ispname)

### InvalidNextTokenException


### Ip
* Ip `string`: An IPv4 address.

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

### JobId
* JobId `string`: A string that represents the import job ID.

### JobStatus
* JobStatus `string` (values: CREATED, PROCESSING, COMPLETED, FAILED): The status of the import job.

### KinesisFirehoseDestination
* KinesisFirehoseDestination `object`: An object that defines an Amazon Kinesis Data Firehose destination for email events. You can use Amazon Kinesis Data Firehose to stream data to other services, such as Amazon S3 and Amazon Redshift.
  * DeliveryStreamArn **required**
  * IamRoleArn **required**

### LastFreshStart
* LastFreshStart `string`: The date and time (in Unix time) when the reputation metrics were last given a fresh start. When your account is given a fresh start, your reputation metrics are calculated starting from the date of the fresh start.

### LimitExceededException


### ListConfigurationSetsRequest
* ListConfigurationSetsRequest `object`: A request to obtain a list of configuration sets for your Amazon SES account in the current AWS Region.

### ListConfigurationSetsResponse
* ListConfigurationSetsResponse `object`: A list of configuration sets in your Amazon SES account in the current AWS Region.
  * ConfigurationSets
    * items [ConfigurationSetName](#configurationsetname)
  * NextToken

### ListContactListsRequest
* ListContactListsRequest `object`

### ListContactListsResponse
* ListContactListsResponse `object`
  * ContactLists
    * items [ContactList](#contactlist)
  * NextToken

### ListContactsFilter
* ListContactsFilter `object`: A filter that can be applied to a list of contacts.
  * FilteredStatus
  * TopicFilter
    * TopicName
    * UseDefaultIfPreferenceUnavailable

### ListContactsRequest
* ListContactsRequest `object`
  * Filter
    * FilteredStatus
    * TopicFilter
      * TopicName
      * UseDefaultIfPreferenceUnavailable

### ListContactsResponse
* ListContactsResponse `object`
  * Contacts
    * items [Contact](#contact)
  * NextToken

### ListCustomVerificationEmailTemplatesRequest
* ListCustomVerificationEmailTemplatesRequest `object`: Represents a request to list the existing custom verification email templates for your account.

### ListCustomVerificationEmailTemplatesResponse
* ListCustomVerificationEmailTemplatesResponse `object`: The following elements are returned by the service.
  * CustomVerificationEmailTemplates
    * items [CustomVerificationEmailTemplateMetadata](#customverificationemailtemplatemetadata)
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
* ListDomainDeliverabilityCampaignsRequest `object`: Retrieve deliverability data for all the campaigns that used a specific domain to send email during a specified time range. This data is available for a domain only if you enabled the Deliverability dashboard.

### ListDomainDeliverabilityCampaignsResponse
* ListDomainDeliverabilityCampaignsResponse `object`: An array of objects that provide deliverability data for all the campaigns that used a specific domain to send email during a specified time range. This data is available for a domain only if you enabled the Deliverability dashboard for the domain.
  * DomainDeliverabilityCampaigns **required**
    * items [DomainDeliverabilityCampaign](#domaindeliverabilitycampaign)
  * NextToken

### ListEmailIdentitiesRequest
* ListEmailIdentitiesRequest `object`: A request to list all of the email identities associated with your AWS account. This list includes identities that you've already verified, identities that are unverified, and identities that were verified in the past, but are no longer verified.

### ListEmailIdentitiesResponse
* ListEmailIdentitiesResponse `object`: A list of all of the identities that you've attempted to verify, regardless of whether or not those identities were successfully verified.
  * EmailIdentities
    * items [IdentityInfo](#identityinfo)
  * NextToken

### ListEmailTemplatesRequest
* ListEmailTemplatesRequest `object`: Represents a request to list the email templates present in your Amazon SES account in the current AWS Region. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>.

### ListEmailTemplatesResponse
* ListEmailTemplatesResponse `object`: The following elements are returned by the service.
  * NextToken
  * TemplatesMetadata
    * items [EmailTemplateMetadata](#emailtemplatemetadata)

### ListImportJobsRequest
* ListImportJobsRequest `object`: Represents a request to list all of the import jobs for a data destination within the specified maximum number of import jobs.
  * ImportDestinationType

### ListImportJobsResponse
* ListImportJobsResponse `object`: An HTTP 200 response if the request succeeds, or an error message if the request fails.
  * ImportJobs
    * items [ImportJobSummary](#importjobsummary)
  * NextToken

### ListManagementOptions
* ListManagementOptions `object`: An object used to specify a list or topic to which an email belongs, which will be used when a contact chooses to unsubscribe.
  * ContactListName **required**
  * TopicName

### ListOfContactLists
* ListOfContactLists `array`
  * items [ContactList](#contactlist)

### ListOfContacts
* ListOfContacts `array`
  * items [Contact](#contact)

### ListOfDedicatedIpPools
* ListOfDedicatedIpPools `array`: A list of dedicated IP pools that are associated with your AWS account.
  * items [PoolName](#poolname)

### ListSuppressedDestinationsRequest
* ListSuppressedDestinationsRequest `object`: A request to obtain a list of email destinations that are on the suppression list for your account.

### ListSuppressedDestinationsResponse
* ListSuppressedDestinationsResponse `object`: A list of suppressed email addresses.
  * NextToken
  * SuppressedDestinationSummaries
    * items [SuppressedDestinationSummary](#suppresseddestinationsummary)

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
* MailFromDomainStatus `string` (values: PENDING, SUCCESS, FAILED, TEMPORARY_FAILURE): <p>The status of the MAIL FROM domain. This status can have the following values:</p> <ul> <li> <p> <code>PENDING</code> – Amazon SES hasn't started searching for the MX record yet.</p> </li> <li> <p> <code>SUCCESS</code> – Amazon SES detected the required MX record for the MAIL FROM domain.</p> </li> <li> <p> <code>FAILED</code> – Amazon SES can't find the required MX record, or the record no longer exists.</p> </li> <li> <p> <code>TEMPORARY_FAILURE</code> – A temporary issue occurred, which prevented Amazon SES from determining the status of the MAIL FROM domain.</p> </li> </ul>

### MailType
* MailType `string` (values: MARKETING, TRANSACTIONAL)

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
* PinpointDestination `object`: An object that defines an Amazon Pinpoint project destination for email events. You can send email event data to a Amazon Pinpoint project to view metrics using the Transactional Messaging dashboards that are built in to Amazon Pinpoint. For more information, see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/analytics-transactional-messages.html">Transactional Messaging Charts</a> in the <i>Amazon Pinpoint User Guide</i>.
  * ApplicationArn

### PlacementStatistics
* PlacementStatistics `object`: An object that contains inbox placement data for an email provider.
  * DkimPercentage
  * InboxPercentage
  * MissingPercentage
  * SpamPercentage
  * SpfPercentage

### Policy
* Policy `string`: <p>The text of the policy in JSON format. The policy cannot exceed 4 KB.</p> <p>For information about the syntax of sending authorization policies, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p>

### PolicyMap
* PolicyMap `object`: An object that contains mapping between <code>PolicyName</code> and <code>Policy</code> text.

### PolicyName
* PolicyName `string`: <p>The name of the policy.</p> <p>The policy name cannot exceed 64 characters and can only include alphanumeric characters, dashes, and underscores.</p>

### PoolName
* PoolName `string`: The name of a dedicated IP pool.

### PrivateKey
* PrivateKey `string`

### ProcessedRecordsCount
* ProcessedRecordsCount `integer`

### PutAccountDedicatedIpWarmupAttributesRequest
* PutAccountDedicatedIpWarmupAttributesRequest `object`: A request to enable or disable the automatic IP address warm-up feature.
  * AutoWarmupEnabled

### PutAccountDedicatedIpWarmupAttributesResponse
* PutAccountDedicatedIpWarmupAttributesResponse `object`: An HTTP 200 response if the request succeeds, or an error message if the request fails.

### PutAccountDetailsRequest
* PutAccountDetailsRequest `object`: A request to submit new account details.
  * AdditionalContactEmailAddresses
    * items [AdditionalContactEmailAddress](#additionalcontactemailaddress)
  * ContactLanguage
  * MailType **required**
  * ProductionAccessEnabled
  * UseCaseDescription **required**
  * WebsiteURL **required**

### PutAccountDetailsResponse
* PutAccountDetailsResponse `object`: An HTTP 200 response if the request succeeds, or an error message if the request fails.

### PutAccountSendingAttributesRequest
* PutAccountSendingAttributesRequest `object`: A request to change the ability of your account to send email.
  * SendingEnabled

### PutAccountSendingAttributesResponse
* PutAccountSendingAttributesResponse `object`: An HTTP 200 response if the request succeeds, or an error message if the request fails.

### PutAccountSuppressionAttributesRequest
* PutAccountSuppressionAttributesRequest `object`: A request to change your account's suppression preferences.
  * SuppressedReasons
    * items [SuppressionListReason](#suppressionlistreason)

### PutAccountSuppressionAttributesResponse
* PutAccountSuppressionAttributesResponse `object`: An HTTP 200 response if the request succeeds, or an error message if the request fails.

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
* PutConfigurationSetSendingOptionsRequest `object`: A request to enable or disable the ability of Amazon SES to send emails that use a specific configuration set.
  * SendingEnabled

### PutConfigurationSetSendingOptionsResponse
* PutConfigurationSetSendingOptionsResponse `object`: An HTTP 200 response if the request succeeds, or an error message if the request fails.

### PutConfigurationSetSuppressionOptionsRequest
* PutConfigurationSetSuppressionOptionsRequest `object`: A request to change the account suppression list preferences for a specific configuration set.
  * SuppressedReasons
    * items [SuppressionListReason](#suppressionlistreason)

### PutConfigurationSetSuppressionOptionsResponse
* PutConfigurationSetSuppressionOptionsResponse `object`: An HTTP 200 response if the request succeeds, or an error message if the request fails.

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
* PutDeliverabilityDashboardOptionRequest `object`: <p>Enable or disable the Deliverability dashboard. When you enable the Deliverability dashboard, you gain access to reputation, deliverability, and other metrics for the domains that you use to send email using Amazon SES API v2. You also gain the ability to perform predictive inbox placement tests.</p> <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition to any other fees that you accrue by using Amazon SES and other AWS services. For more information about the features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/pinpoint/pricing/">Amazon Pinpoint Pricing</a>.</p>
  * DashboardEnabled **required**
  * SubscribedDomains
    * items [DomainDeliverabilityTrackingOption](#domaindeliverabilitytrackingoption)

### PutDeliverabilityDashboardOptionResponse
* PutDeliverabilityDashboardOptionResponse `object`: A response that indicates whether the Deliverability dashboard is enabled.

### PutEmailIdentityDkimAttributesRequest
* PutEmailIdentityDkimAttributesRequest `object`: A request to enable or disable DKIM signing of email that you send from an email identity.
  * SigningEnabled

### PutEmailIdentityDkimAttributesResponse
* PutEmailIdentityDkimAttributesResponse `object`: An HTTP 200 response if the request succeeds, or an error message if the request fails.

### PutEmailIdentityDkimSigningAttributesRequest
* PutEmailIdentityDkimSigningAttributesRequest `object`: A request to change the DKIM attributes for an email identity.
  * SigningAttributes
    * DomainSigningPrivateKey **required**
    * DomainSigningSelector **required**
  * SigningAttributesOrigin **required**

### PutEmailIdentityDkimSigningAttributesResponse
* PutEmailIdentityDkimSigningAttributesResponse `object`: <p>If the action is successful, the service sends back an HTTP 200 response.</p> <p>The following data is returned in JSON format by the service.</p>
  * DkimStatus
  * DkimTokens
    * items [DnsToken](#dnstoken)

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

### PutSuppressedDestinationRequest
* PutSuppressedDestinationRequest `object`: A request to add an email destination to the suppression list for your account.
  * EmailAddress **required**
  * Reason **required**

### PutSuppressedDestinationResponse
* PutSuppressedDestinationResponse `object`: An HTTP 200 response if the request succeeds, or an error message if the request fails.

### RawMessage
* RawMessage `object`: Represents the raw content of an email message.
  * Data **required**

### RawMessageData
* RawMessageData `string`: <p>The raw email message. The message has to meet the following criteria:</p> <ul> <li> <p>The message has to contain a header and a body, separated by one blank line.</p> </li> <li> <p>All of the required header fields must be present in the message.</p> </li> <li> <p>Each part of a multipart MIME message must be formatted properly.</p> </li> <li> <p>Attachments must be in a file format that the Amazon SES API v2 supports. </p> </li> <li> <p>The entire message must be Base64 encoded.</p> </li> <li> <p>If any of the MIME parts in your message contain content that is outside of the 7-bit ASCII character range, you should encode that content to ensure that recipients' email clients render the message properly.</p> </li> <li> <p>The length of any single line of text in the message can't exceed 1,000 characters. This restriction is defined in <a href="https://tools.ietf.org/html/rfc5321">RFC 5321</a>.</p> </li> </ul>

### RblName
* RblName `string`: The name of a blacklist that an IP address was found on.

### RenderedEmailTemplate
* RenderedEmailTemplate `string`: The complete MIME message rendered by applying the data in the TemplateData parameter to the template specified in the TemplateName parameter.

### ReplacementEmailContent
* ReplacementEmailContent `object`: The <code>ReplaceEmailContent</code> object to be used for a specific <code>BulkEmailEntry</code>. The <code>ReplacementTemplate</code> can be specified within this object.
  * ReplacementTemplate
    * ReplacementTemplateData

### ReplacementTemplate
* ReplacementTemplate `object`: An object which contains <code>ReplacementTemplateData</code> to be used for a specific <code>BulkEmailEntry</code>.
  * ReplacementTemplateData

### ReportId
* ReportId `string`: A unique string that identifies a Deliverability dashboard report.

### ReportName
* ReportName `string`: A name that helps you identify a report generated by the Deliverability dashboard.

### ReputationOptions
* ReputationOptions `object`: Enable or disable collection of reputation metrics for emails that you send using this configuration set in the current AWS Region. 
  * LastFreshStart
  * ReputationMetricsEnabled

### ReviewDetails
* ReviewDetails `object`: An object that contains information about your account details review.
  * CaseId
  * Status

### ReviewStatus
* ReviewStatus `string` (values: PENDING, FAILED, GRANTED, DENIED)

### S3Url
* S3Url `string`: An Amazon S3 URL in the format s3://<i>&lt;bucket_name&gt;</i>/<i>&lt;object&gt;</i>.

### Selector
* Selector `string`

### SendBulkEmailRequest
* SendBulkEmailRequest `object`: Represents a request to send email messages to multiple destinations using Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>.
  * BulkEmailEntries **required**
    * items [BulkEmailEntry](#bulkemailentry)
  * ConfigurationSetName
  * DefaultContent **required**
    * Template
      * TemplateArn
      * TemplateData
      * TemplateName
  * DefaultEmailTags
    * items [MessageTag](#messagetag)
  * FeedbackForwardingEmailAddress
  * FeedbackForwardingEmailAddressIdentityArn
  * FromEmailAddress
  * FromEmailAddressIdentityArn
  * ReplyToAddresses
    * items [EmailAddress](#emailaddress)

### SendBulkEmailResponse
* SendBulkEmailResponse `object`: The following data is returned in JSON format by the service.
  * BulkEmailEntryResults **required** [BulkEmailEntryResultList](#bulkemailentryresultlist)

### SendCustomVerificationEmailRequest
* SendCustomVerificationEmailRequest `object`: Represents a request to send a custom verification email to a specified recipient.
  * ConfigurationSetName
  * EmailAddress **required**
  * TemplateName **required**

### SendCustomVerificationEmailResponse
* SendCustomVerificationEmailResponse `object`: The following element is returned by the service.
  * MessageId

### SendEmailRequest
* SendEmailRequest `object`: Represents a request to send a single formatted email using Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-email-formatted.html">Amazon SES Developer Guide</a>.
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
      * TemplateName
  * Destination
    * BccAddresses
      * items [EmailAddress](#emailaddress)
    * CcAddresses
      * items [EmailAddress](#emailaddress)
    * ToAddresses
      * items [EmailAddress](#emailaddress)
  * EmailTags
    * items [MessageTag](#messagetag)
  * FeedbackForwardingEmailAddress
  * FeedbackForwardingEmailAddressIdentityArn
  * FromEmailAddress
  * FromEmailAddressIdentityArn
  * ListManagementOptions
    * ContactListName **required**
    * TopicName
  * ReplyToAddresses
    * items [EmailAddress](#emailaddress)

### SendEmailResponse
* SendEmailResponse `object`: A unique message ID that you receive when an email is accepted for sending.
  * MessageId

### SendQuota
* SendQuota `object`: An object that contains information about the per-day and per-second sending limits for your Amazon SES account in the current AWS Region.
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

### SubscriptionStatus
* SubscriptionStatus `string` (values: OPT_IN, OPT_OUT)

### SuccessRedirectionURL
* SuccessRedirectionURL `string`: The URL that the recipient of the verification email is sent to if his or her address is successfully verified.

### SuppressedDestination
* SuppressedDestination `object`: An object that contains information about an email address that is on the suppression list for your account.
  * Attributes
    * FeedbackId
    * MessageId
  * EmailAddress **required**
  * LastUpdateTime **required**
  * Reason **required**

### SuppressedDestinationAttributes
* SuppressedDestinationAttributes `object`: An object that contains additional attributes that are related an email address that is on the suppression list for your account.
  * FeedbackId
  * MessageId

### SuppressedDestinationSummaries
* SuppressedDestinationSummaries `array`
  * items [SuppressedDestinationSummary](#suppresseddestinationsummary)

### SuppressedDestinationSummary
* SuppressedDestinationSummary `object`: A summary that describes the suppressed email address.
  * EmailAddress **required**
  * LastUpdateTime **required**
  * Reason **required**

### SuppressionAttributes
* SuppressionAttributes `object`: An object that contains information about the email address suppression preferences for your account in the current AWS Region.
  * SuppressedReasons
    * items [SuppressionListReason](#suppressionlistreason)

### SuppressionListDestination
* SuppressionListDestination `object`: An object that contains details about the action of suppression list.
  * SuppressionListImportAction **required**

### SuppressionListImportAction
* SuppressionListImportAction `string` (values: DELETE, PUT): <p>The type of action that you want to perform on the address. Acceptable values:</p> <ul> <li> <p>PUT: add the addresses to the suppression list.</p> </li> <li> <p>DELETE: remove the address from the suppression list.</p> </li> </ul>

### SuppressionListReason
* SuppressionListReason `string` (values: BOUNCE, COMPLAINT): <p>The reason that the address was added to the suppression list for your account. The value can be one of the following:</p> <ul> <li> <p> <code>COMPLAINT</code> – Amazon SES added an email address to the suppression list for your account because a message sent to that address results in a complaint.</p> </li> <li> <p> <code>BOUNCE</code> – Amazon SES added an email address to the suppression list for your account because a message sent to that address results in a hard bounce.</p> </li> </ul>

### SuppressionListReasons
* SuppressionListReasons `array`
  * items [SuppressionListReason](#suppressionlistreason)

### SuppressionOptions
* SuppressionOptions `object`: An object that contains information about the suppression list preferences for your account.
  * SuppressedReasons
    * items [SuppressionListReason](#suppressionlistreason)

### Tag
* Tag `object`: <p>An object that defines the tags that are associated with a resource. A <i>tag</i> is a label that you optionally define and associate with a resource. Tags can help you categorize and manage resources in different ways, such as by purpose, owner, environment, or other criteria. A resource can have as many as 50 tags.</p> <p>Each tag consists of a required <i>tag key</i> and an associated <i>tag value</i>, both of which you define. A tag key is a general label that acts as a category for a more specific tag value. A tag value acts as a descriptor within a tag key. A tag key can contain as many as 128 characters. A tag value can contain as many as 256 characters. The characters can be Unicode letters, digits, white space, or one of the following symbols: _ . : / = + -. The following additional restrictions apply to tags:</p> <ul> <li> <p>Tag keys and values are case sensitive.</p> </li> <li> <p>For each associated resource, each tag key must be unique and it can have only one value.</p> </li> <li> <p>The <code>aws:</code> prefix is reserved for use by AWS; you can’t use it in any tag keys or values that you define. In addition, you can't edit or remove tag keys or values that use this prefix. Tags that use this prefix don’t count against the limit of 50 tags per resource.</p> </li> <li> <p>You can associate tags with public or shared resources, but the tags are available only for your AWS account, not any other accounts that share the resource. In addition, the tags are available only for resources that are located in the specified AWS Region for your AWS account.</p> </li> </ul>
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
* Template `object`: An object that defines the email template to use for an email message, and the values to use for any message variables in that template. An <i>email template</i> is a type of message template that contains content that you want to define, save, and reuse in email messages that you send.
  * TemplateArn
  * TemplateData
  * TemplateName

### TemplateContent
* TemplateContent `string`: The content of the custom verification email template.

### TestRenderEmailTemplateRequest
* TestRenderEmailTemplateRequest `object`: &gt;Represents a request to create a preview of the MIME content of an email when provided with a template and a set of replacement data.
  * TemplateData **required**

### TestRenderEmailTemplateResponse
* TestRenderEmailTemplateResponse `object`: The following element is returned by the service.
  * RenderedTemplate **required**

### Timestamp
* Timestamp `string`

### TlsPolicy
* TlsPolicy `string` (values: REQUIRE, OPTIONAL): Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS). If the value is <code>Require</code>, messages are only delivered if a TLS connection can be established. If the value is <code>Optional</code>, messages can be delivered in plain text if a TLS connection can't be established.

### TooManyRequestsException


### Topic
* Topic `object`: An interest group, theme, or label within a list. Lists can have multiple topics.
  * DefaultSubscriptionStatus **required**
  * Description
  * DisplayName **required**
  * TopicName **required**

### TopicFilter
* TopicFilter `object`: Used for filtering by a specific topic preference.
  * TopicName
  * UseDefaultIfPreferenceUnavailable

### TopicName
* TopicName `string`

### TopicPreference
* TopicPreference `object`: The contact's preference for being opted-in to or opted-out of a topic.
  * SubscriptionStatus **required**
  * TopicName **required**

### TopicPreferenceList
* TopicPreferenceList `array`
  * items [TopicPreference](#topicpreference)

### Topics
* Topics `array`
  * items [Topic](#topic)

### TrackingOptions
* TrackingOptions `object`: <p>An object that defines the tracking options for a configuration set. When you use the Amazon SES API v2 to send an email, it contains an invisible image that's used to track when recipients open your email. If your email contains links, those links are changed slightly in order to track when recipients click them.</p> <p>These images and links include references to a domain operated by AWS. You can optionally configure the Amazon SES to use a domain that you operate for these images and links.</p>
  * CustomRedirectDomain **required**

### UnsubscribeAll
* UnsubscribeAll `boolean`

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

### UpdateContactListRequest
* UpdateContactListRequest `object`
  * Description
  * Topics
    * items [Topic](#topic)

### UpdateContactListResponse
* UpdateContactListResponse `object`

### UpdateContactRequest
* UpdateContactRequest `object`
  * AttributesData
  * TopicPreferences
    * items [TopicPreference](#topicpreference)
  * UnsubscribeAll

### UpdateContactResponse
* UpdateContactResponse `object`

### UpdateCustomVerificationEmailTemplateRequest
* UpdateCustomVerificationEmailTemplateRequest `object`: Represents a request to update an existing custom verification email template.
  * FailureRedirectionURL **required**
  * FromEmailAddress **required**
  * SuccessRedirectionURL **required**
  * TemplateContent **required**
  * TemplateSubject **required**

### UpdateCustomVerificationEmailTemplateResponse
* UpdateCustomVerificationEmailTemplateResponse `object`: If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body.

### UpdateEmailIdentityPolicyRequest
* UpdateEmailIdentityPolicyRequest `object`: Represents a request to update a sending authorization policy for an identity. Sending authorization is an Amazon SES feature that enables you to authorize other senders to use your identities. For information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization-identity-owner-tasks-management.html">Amazon SES Developer Guide</a>.
  * Policy **required**

### UpdateEmailIdentityPolicyResponse
* UpdateEmailIdentityPolicyResponse `object`: An HTTP 200 response if the request succeeds, or an error message if the request fails.

### UpdateEmailTemplateRequest
* UpdateEmailTemplateRequest `object`: Represents a request to update an email template. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>.
  * TemplateContent **required**
    * Html
    * Subject
    * Text

### UpdateEmailTemplateResponse
* UpdateEmailTemplateResponse `object`: If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body.

### UseCaseDescription
* UseCaseDescription `string`

### UseDefaultIfPreferenceUnavailable
* UseDefaultIfPreferenceUnavailable `boolean`

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

### WebsiteURL
* WebsiteURL `string`


