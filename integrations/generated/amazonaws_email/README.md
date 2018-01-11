# @datafire/amazonaws_email

Client library for Amazon Simple Email Service

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_email
```
```js
let amazonaws_email = require('@datafire/amazonaws_email').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

amazonaws_email.CloneReceiptRuleSet({}).then(data => {
  console.log(data);
})
```

## Description

<fullname>Amazon Simple Email Service</fullname> <p> This is the API Reference for <a href="https://aws.amazon.com/ses/">Amazon Simple Email Service</a> (Amazon SES). This documentation is intended to be used in conjunction with the <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/Welcome.html">Amazon SES Developer Guide</a>. </p> <note> <p> For a list of Amazon SES endpoints to use in service requests, see <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/regions.html">Regions and Amazon SES</a> in the <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/Welcome.html">Amazon SES Developer Guide</a>. </p> </note>

## Actions

### CloneReceiptRuleSet



```js
amazonaws_email.CloneReceiptRuleSet({
  "RuleSetName": "",
  "OriginalRuleSetName": ""
}, context)
```

#### Input
* input `object`
  * OriginalRuleSetName **required** [ReceiptRuleSetName](#receiptrulesetname)
  * RuleSetName **required** [ReceiptRuleSetName](#receiptrulesetname)

#### Output
* output [CloneReceiptRuleSetResponse](#clonereceiptrulesetresponse)

### CreateConfigurationSet



```js
amazonaws_email.CreateConfigurationSet({
  "ConfigurationSet": {
    "Name": ""
  }
}, context)
```

#### Input
* input `object`
  * ConfigurationSet **required** [ConfigurationSet](#configurationset)

#### Output
* output [CreateConfigurationSetResponse](#createconfigurationsetresponse)

### CreateConfigurationSetEventDestination



```js
amazonaws_email.CreateConfigurationSetEventDestination({
  "ConfigurationSetName": "",
  "EventDestination": {
    "Name": "",
    "MatchingEventTypes": []
  }
}, context)
```

#### Input
* input `object`
  * ConfigurationSetName **required** [ConfigurationSetName](#configurationsetname)
  * EventDestination **required** [EventDestination](#eventdestination)

#### Output
* output [CreateConfigurationSetEventDestinationResponse](#createconfigurationseteventdestinationresponse)

### CreateConfigurationSetTrackingOptions



```js
amazonaws_email.CreateConfigurationSetTrackingOptions({
  "ConfigurationSetName": "",
  "TrackingOptions": {}
}, context)
```

#### Input
* input `object`
  * ConfigurationSetName **required** [ConfigurationSetName](#configurationsetname)
  * TrackingOptions **required** [TrackingOptions](#trackingoptions)

#### Output
* output [CreateConfigurationSetTrackingOptionsResponse](#createconfigurationsettrackingoptionsresponse)

### CreateReceiptFilter



```js
amazonaws_email.CreateReceiptFilter({
  "Filter": {
    "Name": "",
    "IpFilter": {
      "Policy": "",
      "Cidr": ""
    }
  }
}, context)
```

#### Input
* input `object`
  * Filter **required** [ReceiptFilter](#receiptfilter)

#### Output
* output [CreateReceiptFilterResponse](#createreceiptfilterresponse)

### CreateReceiptRule



```js
amazonaws_email.CreateReceiptRule({
  "RuleSetName": "",
  "Rule": {
    "Name": ""
  }
}, context)
```

#### Input
* input `object`
  * After [ReceiptRuleName](#receiptrulename)
  * Rule **required** [ReceiptRule](#receiptrule)
  * RuleSetName **required** [ReceiptRuleSetName](#receiptrulesetname)

#### Output
* output [CreateReceiptRuleResponse](#createreceiptruleresponse)

### CreateReceiptRuleSet



```js
amazonaws_email.CreateReceiptRuleSet({
  "RuleSetName": ""
}, context)
```

#### Input
* input `object`
  * RuleSetName **required** [ReceiptRuleSetName](#receiptrulesetname)

#### Output
* output [CreateReceiptRuleSetResponse](#createreceiptrulesetresponse)

### CreateTemplate



```js
amazonaws_email.CreateTemplate({
  "Template": {
    "TemplateName": ""
  }
}, context)
```

#### Input
* input `object`
  * Template **required** [Template](#template)

#### Output
* output [CreateTemplateResponse](#createtemplateresponse)

### DeleteConfigurationSet



```js
amazonaws_email.DeleteConfigurationSet({
  "ConfigurationSetName": ""
}, context)
```

#### Input
* input `object`
  * ConfigurationSetName **required** [ConfigurationSetName](#configurationsetname)

#### Output
* output [DeleteConfigurationSetResponse](#deleteconfigurationsetresponse)

### DeleteConfigurationSetEventDestination



```js
amazonaws_email.DeleteConfigurationSetEventDestination({
  "ConfigurationSetName": "",
  "EventDestinationName": ""
}, context)
```

#### Input
* input `object`
  * ConfigurationSetName **required** [ConfigurationSetName](#configurationsetname)
  * EventDestinationName **required** [EventDestinationName](#eventdestinationname)

#### Output
* output [DeleteConfigurationSetEventDestinationResponse](#deleteconfigurationseteventdestinationresponse)

### DeleteConfigurationSetTrackingOptions



```js
amazonaws_email.DeleteConfigurationSetTrackingOptions({
  "ConfigurationSetName": ""
}, context)
```

#### Input
* input `object`
  * ConfigurationSetName **required** [ConfigurationSetName](#configurationsetname)

#### Output
* output [DeleteConfigurationSetTrackingOptionsResponse](#deleteconfigurationsettrackingoptionsresponse)

### DeleteIdentity



```js
amazonaws_email.DeleteIdentity({
  "Identity": ""
}, context)
```

#### Input
* input `object`
  * Identity **required** [Identity](#identity)

#### Output
* output [DeleteIdentityResponse](#deleteidentityresponse)

### DeleteIdentityPolicy



```js
amazonaws_email.DeleteIdentityPolicy({
  "Identity": "",
  "PolicyName": ""
}, context)
```

#### Input
* input `object`
  * Identity **required** [Identity](#identity)
  * PolicyName **required** [PolicyName](#policyname)

#### Output
* output [DeleteIdentityPolicyResponse](#deleteidentitypolicyresponse)

### DeleteReceiptFilter



```js
amazonaws_email.DeleteReceiptFilter({
  "FilterName": ""
}, context)
```

#### Input
* input `object`
  * FilterName **required** [ReceiptFilterName](#receiptfiltername)

#### Output
* output [DeleteReceiptFilterResponse](#deletereceiptfilterresponse)

### DeleteReceiptRule



```js
amazonaws_email.DeleteReceiptRule({
  "RuleSetName": "",
  "RuleName": ""
}, context)
```

#### Input
* input `object`
  * RuleName **required** [ReceiptRuleName](#receiptrulename)
  * RuleSetName **required** [ReceiptRuleSetName](#receiptrulesetname)

#### Output
* output [DeleteReceiptRuleResponse](#deletereceiptruleresponse)

### DeleteReceiptRuleSet



```js
amazonaws_email.DeleteReceiptRuleSet({
  "RuleSetName": ""
}, context)
```

#### Input
* input `object`
  * RuleSetName **required** [ReceiptRuleSetName](#receiptrulesetname)

#### Output
* output [DeleteReceiptRuleSetResponse](#deletereceiptrulesetresponse)

### DeleteTemplate



```js
amazonaws_email.DeleteTemplate({
  "TemplateName": ""
}, context)
```

#### Input
* input `object`
  * TemplateName **required** [TemplateName](#templatename)

#### Output
* output [DeleteTemplateResponse](#deletetemplateresponse)

### DeleteVerifiedEmailAddress



```js
amazonaws_email.DeleteVerifiedEmailAddress({
  "EmailAddress": ""
}, context)
```

#### Input
* input `object`
  * EmailAddress **required** [Address](#address)

#### Output
*Output schema unknown*

### DescribeActiveReceiptRuleSet



```js
amazonaws_email.DescribeActiveReceiptRuleSet({}, context)
```

#### Input
* input `object`

#### Output
* output [DescribeActiveReceiptRuleSetResponse](#describeactivereceiptrulesetresponse)

### DescribeConfigurationSet



```js
amazonaws_email.DescribeConfigurationSet({
  "ConfigurationSetName": ""
}, context)
```

#### Input
* input `object`
  * ConfigurationSetAttributeNames [ConfigurationSetAttributeList](#configurationsetattributelist)
  * ConfigurationSetName **required** [ConfigurationSetName](#configurationsetname)

#### Output
* output [DescribeConfigurationSetResponse](#describeconfigurationsetresponse)

### DescribeReceiptRule



```js
amazonaws_email.DescribeReceiptRule({
  "RuleSetName": "",
  "RuleName": ""
}, context)
```

#### Input
* input `object`
  * RuleName **required** [ReceiptRuleName](#receiptrulename)
  * RuleSetName **required** [ReceiptRuleSetName](#receiptrulesetname)

#### Output
* output [DescribeReceiptRuleResponse](#describereceiptruleresponse)

### DescribeReceiptRuleSet



```js
amazonaws_email.DescribeReceiptRuleSet({
  "RuleSetName": ""
}, context)
```

#### Input
* input `object`
  * RuleSetName **required** [ReceiptRuleSetName](#receiptrulesetname)

#### Output
* output [DescribeReceiptRuleSetResponse](#describereceiptrulesetresponse)

### GetIdentityDkimAttributes



```js
amazonaws_email.GetIdentityDkimAttributes({
  "Identities": []
}, context)
```

#### Input
* input `object`
  * Identities **required** [IdentityList](#identitylist)

#### Output
* output [GetIdentityDkimAttributesResponse](#getidentitydkimattributesresponse)

### GetIdentityMailFromDomainAttributes



```js
amazonaws_email.GetIdentityMailFromDomainAttributes({
  "Identities": []
}, context)
```

#### Input
* input `object`
  * Identities **required** [IdentityList](#identitylist)

#### Output
* output [GetIdentityMailFromDomainAttributesResponse](#getidentitymailfromdomainattributesresponse)

### GetIdentityNotificationAttributes



```js
amazonaws_email.GetIdentityNotificationAttributes({
  "Identities": []
}, context)
```

#### Input
* input `object`
  * Identities **required** [IdentityList](#identitylist)

#### Output
* output [GetIdentityNotificationAttributesResponse](#getidentitynotificationattributesresponse)

### GetIdentityPolicies



```js
amazonaws_email.GetIdentityPolicies({
  "Identity": "",
  "PolicyNames": []
}, context)
```

#### Input
* input `object`
  * Identity **required** [Identity](#identity)
  * PolicyNames **required** [PolicyNameList](#policynamelist)

#### Output
* output [GetIdentityPoliciesResponse](#getidentitypoliciesresponse)

### GetIdentityVerificationAttributes



```js
amazonaws_email.GetIdentityVerificationAttributes({
  "Identities": []
}, context)
```

#### Input
* input `object`
  * Identities **required** [IdentityList](#identitylist)

#### Output
* output [GetIdentityVerificationAttributesResponse](#getidentityverificationattributesresponse)

### GetSendQuota



```js
amazonaws_email.GetSendQuota({}, context)
```

#### Input
* input `object`

#### Output
* output [GetSendQuotaResponse](#getsendquotaresponse)

### GetSendStatistics



```js
amazonaws_email.GetSendStatistics({}, context)
```

#### Input
* input `object`

#### Output
* output [GetSendStatisticsResponse](#getsendstatisticsresponse)

### GetTemplate



```js
amazonaws_email.GetTemplate({
  "TemplateName": ""
}, context)
```

#### Input
* input `object`
  * TemplateName **required** [TemplateName](#templatename)

#### Output
* output [GetTemplateResponse](#gettemplateresponse)

### ListConfigurationSets



```js
amazonaws_email.ListConfigurationSets({}, context)
```

#### Input
* input `object`
  * MaxItems [MaxItems](#maxitems)
  * NextToken [NextToken](#nexttoken)

#### Output
* output [ListConfigurationSetsResponse](#listconfigurationsetsresponse)

### ListIdentities



```js
amazonaws_email.ListIdentities({}, context)
```

#### Input
* input `object`
  * MaxItems `string`
  * NextToken `string`
  * IdentityType [IdentityType](#identitytype)
  * MaxItems [MaxItems](#maxitems)
  * NextToken [NextToken](#nexttoken)

#### Output
* output [ListIdentitiesResponse](#listidentitiesresponse)

### ListIdentityPolicies



```js
amazonaws_email.ListIdentityPolicies({
  "Identity": ""
}, context)
```

#### Input
* input `object`
  * Identity **required** [Identity](#identity)

#### Output
* output [ListIdentityPoliciesResponse](#listidentitypoliciesresponse)

### ListReceiptFilters



```js
amazonaws_email.ListReceiptFilters({}, context)
```

#### Input
* input `object`

#### Output
* output [ListReceiptFiltersResponse](#listreceiptfiltersresponse)

### ListReceiptRuleSets



```js
amazonaws_email.ListReceiptRuleSets({}, context)
```

#### Input
* input `object`
  * NextToken [NextToken](#nexttoken)

#### Output
* output [ListReceiptRuleSetsResponse](#listreceiptrulesetsresponse)

### ListTemplates



```js
amazonaws_email.ListTemplates({}, context)
```

#### Input
* input `object`
  * MaxItems [MaxItems](#maxitems)
  * NextToken [NextToken](#nexttoken)

#### Output
* output [ListTemplatesResponse](#listtemplatesresponse)

### ListVerifiedEmailAddresses



```js
amazonaws_email.ListVerifiedEmailAddresses({}, context)
```

#### Input
* input `object`

#### Output
* output [ListVerifiedEmailAddressesResponse](#listverifiedemailaddressesresponse)

### PutIdentityPolicy



```js
amazonaws_email.PutIdentityPolicy({
  "Identity": "",
  "PolicyName": "",
  "Policy": ""
}, context)
```

#### Input
* input `object`
  * Identity **required** [Identity](#identity)
  * Policy **required** [Policy](#policy)
  * PolicyName **required** [PolicyName](#policyname)

#### Output
* output [PutIdentityPolicyResponse](#putidentitypolicyresponse)

### ReorderReceiptRuleSet



```js
amazonaws_email.ReorderReceiptRuleSet({
  "RuleSetName": "",
  "RuleNames": []
}, context)
```

#### Input
* input `object`
  * RuleNames **required** [ReceiptRuleNamesList](#receiptrulenameslist)
  * RuleSetName **required** [ReceiptRuleSetName](#receiptrulesetname)

#### Output
* output [ReorderReceiptRuleSetResponse](#reorderreceiptrulesetresponse)

### SendBounce



```js
amazonaws_email.SendBounce({
  "OriginalMessageId": "",
  "BounceSender": "",
  "BouncedRecipientInfoList": []
}, context)
```

#### Input
* input `object`
  * BounceSender **required** [Address](#address)
  * BounceSenderArn [AmazonResourceName](#amazonresourcename)
  * BouncedRecipientInfoList **required** [BouncedRecipientInfoList](#bouncedrecipientinfolist)
  * Explanation [Explanation](#explanation)
  * MessageDsn [MessageDsn](#messagedsn)
  * OriginalMessageId **required** [MessageId](#messageid)

#### Output
* output [SendBounceResponse](#sendbounceresponse)

### SendBulkTemplatedEmail



```js
amazonaws_email.SendBulkTemplatedEmail({
  "Source": "",
  "Template": "",
  "Destinations": []
}, context)
```

#### Input
* input `object`
  * ConfigurationSetName [ConfigurationSetName](#configurationsetname)
  * DefaultTags [MessageTagList](#messagetaglist)
  * DefaultTemplateData [TemplateData](#templatedata)
  * Destinations **required** [BulkEmailDestinationList](#bulkemaildestinationlist)
  * ReplyToAddresses [AddressList](#addresslist)
  * ReturnPath [Address](#address)
  * ReturnPathArn [AmazonResourceName](#amazonresourcename)
  * Source **required** [Address](#address)
  * SourceArn [AmazonResourceName](#amazonresourcename)
  * Template **required** [TemplateName](#templatename)
  * TemplateArn [AmazonResourceName](#amazonresourcename)

#### Output
* output [SendBulkTemplatedEmailResponse](#sendbulktemplatedemailresponse)

### SendEmail



```js
amazonaws_email.SendEmail({
  "Source": "",
  "Destination": {},
  "Message": {
    "Subject": {
      "Data": ""
    },
    "Body": {}
  }
}, context)
```

#### Input
* input `object`
  * ConfigurationSetName [ConfigurationSetName](#configurationsetname)
  * Destination **required** [Destination](#destination)
  * Message **required** [Message](#message)
  * ReplyToAddresses [AddressList](#addresslist)
  * ReturnPath [Address](#address)
  * ReturnPathArn [AmazonResourceName](#amazonresourcename)
  * Source **required** [Address](#address)
  * SourceArn [AmazonResourceName](#amazonresourcename)
  * Tags [MessageTagList](#messagetaglist)

#### Output
* output [SendEmailResponse](#sendemailresponse)

### SendRawEmail



```js
amazonaws_email.SendRawEmail({
  "RawMessage": {
    "Data": ""
  }
}, context)
```

#### Input
* input `object`
  * ConfigurationSetName [ConfigurationSetName](#configurationsetname)
  * Destinations [AddressList](#addresslist)
  * FromArn [AmazonResourceName](#amazonresourcename)
  * RawMessage **required** [RawMessage](#rawmessage)
  * ReturnPathArn [AmazonResourceName](#amazonresourcename)
  * Source [Address](#address)
  * SourceArn [AmazonResourceName](#amazonresourcename)
  * Tags [MessageTagList](#messagetaglist)

#### Output
* output [SendRawEmailResponse](#sendrawemailresponse)

### SendTemplatedEmail



```js
amazonaws_email.SendTemplatedEmail({
  "Source": "",
  "Destination": {},
  "Template": "",
  "TemplateData": ""
}, context)
```

#### Input
* input `object`
  * ConfigurationSetName [ConfigurationSetName](#configurationsetname)
  * Destination **required** [Destination](#destination)
  * ReplyToAddresses [AddressList](#addresslist)
  * ReturnPath [Address](#address)
  * ReturnPathArn [AmazonResourceName](#amazonresourcename)
  * Source **required** [Address](#address)
  * SourceArn [AmazonResourceName](#amazonresourcename)
  * Tags [MessageTagList](#messagetaglist)
  * Template **required** [TemplateName](#templatename)
  * TemplateArn [AmazonResourceName](#amazonresourcename)
  * TemplateData **required** [TemplateData](#templatedata)

#### Output
* output [SendTemplatedEmailResponse](#sendtemplatedemailresponse)

### SetActiveReceiptRuleSet



```js
amazonaws_email.SetActiveReceiptRuleSet({}, context)
```

#### Input
* input `object`
  * RuleSetName [ReceiptRuleSetName](#receiptrulesetname)

#### Output
* output [SetActiveReceiptRuleSetResponse](#setactivereceiptrulesetresponse)

### SetIdentityDkimEnabled



```js
amazonaws_email.SetIdentityDkimEnabled({
  "Identity": "",
  "DkimEnabled": true
}, context)
```

#### Input
* input `object`
  * DkimEnabled **required** [Enabled](#enabled)
  * Identity **required** [Identity](#identity)

#### Output
* output [SetIdentityDkimEnabledResponse](#setidentitydkimenabledresponse)

### SetIdentityFeedbackForwardingEnabled



```js
amazonaws_email.SetIdentityFeedbackForwardingEnabled({
  "Identity": "",
  "ForwardingEnabled": true
}, context)
```

#### Input
* input `object`
  * ForwardingEnabled **required** [Enabled](#enabled)
  * Identity **required** [Identity](#identity)

#### Output
* output [SetIdentityFeedbackForwardingEnabledResponse](#setidentityfeedbackforwardingenabledresponse)

### SetIdentityHeadersInNotificationsEnabled



```js
amazonaws_email.SetIdentityHeadersInNotificationsEnabled({
  "Identity": "",
  "NotificationType": "",
  "Enabled": true
}, context)
```

#### Input
* input `object`
  * Enabled **required** [Enabled](#enabled)
  * Identity **required** [Identity](#identity)
  * NotificationType **required** [NotificationType](#notificationtype)

#### Output
* output [SetIdentityHeadersInNotificationsEnabledResponse](#setidentityheadersinnotificationsenabledresponse)

### SetIdentityMailFromDomain



```js
amazonaws_email.SetIdentityMailFromDomain({
  "Identity": ""
}, context)
```

#### Input
* input `object`
  * BehaviorOnMXFailure [BehaviorOnMXFailure](#behavioronmxfailure)
  * Identity **required** [Identity](#identity)
  * MailFromDomain [MailFromDomainName](#mailfromdomainname)

#### Output
* output [SetIdentityMailFromDomainResponse](#setidentitymailfromdomainresponse)

### SetIdentityNotificationTopic



```js
amazonaws_email.SetIdentityNotificationTopic({
  "Identity": "",
  "NotificationType": ""
}, context)
```

#### Input
* input `object`
  * Identity **required** [Identity](#identity)
  * NotificationType **required** [NotificationType](#notificationtype)
  * SnsTopic [NotificationTopic](#notificationtopic)

#### Output
* output [SetIdentityNotificationTopicResponse](#setidentitynotificationtopicresponse)

### SetReceiptRulePosition



```js
amazonaws_email.SetReceiptRulePosition({
  "RuleSetName": "",
  "RuleName": ""
}, context)
```

#### Input
* input `object`
  * After [ReceiptRuleName](#receiptrulename)
  * RuleName **required** [ReceiptRuleName](#receiptrulename)
  * RuleSetName **required** [ReceiptRuleSetName](#receiptrulesetname)

#### Output
* output [SetReceiptRulePositionResponse](#setreceiptrulepositionresponse)

### TestRenderTemplate



```js
amazonaws_email.TestRenderTemplate({
  "TemplateName": "",
  "TemplateData": ""
}, context)
```

#### Input
* input `object`
  * TemplateData **required** [TemplateData](#templatedata)
  * TemplateName **required** [TemplateName](#templatename)

#### Output
* output [TestRenderTemplateResponse](#testrendertemplateresponse)

### UpdateConfigurationSetEventDestination



```js
amazonaws_email.UpdateConfigurationSetEventDestination({
  "ConfigurationSetName": "",
  "EventDestination": {
    "Name": "",
    "MatchingEventTypes": []
  }
}, context)
```

#### Input
* input `object`
  * ConfigurationSetName **required** [ConfigurationSetName](#configurationsetname)
  * EventDestination **required** [EventDestination](#eventdestination)

#### Output
* output [UpdateConfigurationSetEventDestinationResponse](#updateconfigurationseteventdestinationresponse)

### UpdateConfigurationSetTrackingOptions



```js
amazonaws_email.UpdateConfigurationSetTrackingOptions({
  "ConfigurationSetName": "",
  "TrackingOptions": {}
}, context)
```

#### Input
* input `object`
  * ConfigurationSetName **required** [ConfigurationSetName](#configurationsetname)
  * TrackingOptions **required** [TrackingOptions](#trackingoptions)

#### Output
* output [UpdateConfigurationSetTrackingOptionsResponse](#updateconfigurationsettrackingoptionsresponse)

### UpdateReceiptRule



```js
amazonaws_email.UpdateReceiptRule({
  "RuleSetName": "",
  "Rule": {
    "Name": ""
  }
}, context)
```

#### Input
* input `object`
  * Rule **required** [ReceiptRule](#receiptrule)
  * RuleSetName **required** [ReceiptRuleSetName](#receiptrulesetname)

#### Output
* output [UpdateReceiptRuleResponse](#updatereceiptruleresponse)

### UpdateTemplate



```js
amazonaws_email.UpdateTemplate({
  "Template": {
    "TemplateName": ""
  }
}, context)
```

#### Input
* input `object`
  * Template **required** [Template](#template)

#### Output
* output [UpdateTemplateResponse](#updatetemplateresponse)

### VerifyDomainDkim



```js
amazonaws_email.VerifyDomainDkim({
  "Domain": ""
}, context)
```

#### Input
* input `object`
  * Domain **required** [Domain](#domain)

#### Output
* output [VerifyDomainDkimResponse](#verifydomaindkimresponse)

### VerifyDomainIdentity



```js
amazonaws_email.VerifyDomainIdentity({
  "Domain": ""
}, context)
```

#### Input
* input `object`
  * Domain **required** [Domain](#domain)

#### Output
* output [VerifyDomainIdentityResponse](#verifydomainidentityresponse)

### VerifyEmailAddress



```js
amazonaws_email.VerifyEmailAddress({
  "EmailAddress": ""
}, context)
```

#### Input
* input `object`
  * EmailAddress **required** [Address](#address)

#### Output
*Output schema unknown*

### VerifyEmailIdentity



```js
amazonaws_email.VerifyEmailIdentity({
  "EmailAddress": ""
}, context)
```

#### Input
* input `object`
  * EmailAddress **required** [Address](#address)

#### Output
* output [VerifyEmailIdentityResponse](#verifyemailidentityresponse)



## Definitions

### AddHeaderAction
* AddHeaderAction `object`: <p>When included in a receipt rule, this action adds a header to the received email.</p> <p>For information about adding a header using a receipt rule, see the <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-action-add-header.html">Amazon SES Developer Guide</a>.</p>
  * HeaderName **required** [HeaderName](#headername)
  * HeaderValue **required** [HeaderValue](#headervalue)

### Address
* Address `string`

### AddressList
* AddressList `array`
  * items [Address](#address)

### AlreadyExistsException
* AlreadyExistsException `object`: Indicates that a resource could not be created because of a naming conflict.
  * Name [RuleOrRuleSetName](#ruleorrulesetname)

### AmazonResourceName
* AmazonResourceName `string`

### ArrivalDate
* ArrivalDate `string`

### BehaviorOnMXFailure
* BehaviorOnMXFailure `string` (values: UseDefaultValue, RejectMessage)

### Body
* Body `object`: Represents the body of the message. You can specify text, HTML, or both. If you use both, then the message should display correctly in the widest variety of email clients.
  * Html [Content](#content)
  * Text [Content](#content)

### BounceAction
* BounceAction `object`: <p>When included in a receipt rule, this action rejects the received email by returning a bounce response to the sender and, optionally, publishes a notification to Amazon Simple Notification Service (Amazon SNS).</p> <p>For information about sending a bounce message in response to a received email, see the <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-action-bounce.html">Amazon SES Developer Guide</a>.</p>
  * Message **required** [BounceMessage](#bouncemessage)
  * Sender **required** [Address](#address)
  * SmtpReplyCode **required** [BounceSmtpReplyCode](#bouncesmtpreplycode)
  * StatusCode [BounceStatusCode](#bouncestatuscode)
  * TopicArn [AmazonResourceName](#amazonresourcename)

### BounceMessage
* BounceMessage `string`

### BounceSmtpReplyCode
* BounceSmtpReplyCode `string`

### BounceStatusCode
* BounceStatusCode `string`

### BounceType
* BounceType `string` (values: DoesNotExist, MessageTooLarge, ExceededQuota, ContentRejected, Undefined, TemporaryFailure)

### BouncedRecipientInfo
* BouncedRecipientInfo `object`: <p>Recipient-related information to include in the Delivery Status Notification (DSN) when an email that Amazon SES receives on your behalf bounces.</p> <p>For information about receiving email through Amazon SES, see the <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email.html">Amazon SES Developer Guide</a>.</p>
  * BounceType [BounceType](#bouncetype)
  * Recipient **required** [Address](#address)
  * RecipientArn [AmazonResourceName](#amazonresourcename)
  * RecipientDsnFields [RecipientDsnFields](#recipientdsnfields)

### BouncedRecipientInfoList
* BouncedRecipientInfoList `array`
  * items [BouncedRecipientInfo](#bouncedrecipientinfo)

### BulkEmailDestination
* BulkEmailDestination `object`: An array that contains one or more Destinations, as well as the tags and replacement data associated with each of those Destinations.
  * Destination **required** [Destination](#destination)
  * ReplacementTags [MessageTagList](#messagetaglist)
  * ReplacementTemplateData [TemplateData](#templatedata)

### BulkEmailDestinationList
* BulkEmailDestinationList `array`
  * items [BulkEmailDestination](#bulkemaildestination)

### BulkEmailDestinationStatus
* BulkEmailDestinationStatus `object`: An object that contains the response from the <code>SendBulkTemplatedEmail</code> operation.
  * Error [Error](#error)
  * MessageId [MessageId](#messageid)
  * Status [BulkEmailStatus](#bulkemailstatus)

### BulkEmailDestinationStatusList
* BulkEmailDestinationStatusList `array`
  * items [BulkEmailDestinationStatus](#bulkemaildestinationstatus)

### BulkEmailStatus
* BulkEmailStatus `string` (values: Success, MessageRejected, MailFromDomainNotVerified, ConfigurationSetDoesNotExist, TemplateDoesNotExist, AccountSuspended, AccountThrottled, AccountDailyQuotaExceeded, InvalidSendingPoolName, InvalidParameterValue, TransientFailure, Failed)

### CannotDeleteException
* CannotDeleteException `object`: Indicates that the delete operation could not be completed.
  * Name [RuleOrRuleSetName](#ruleorrulesetname)

### Charset
* Charset `string`

### Cidr
* Cidr `string`

### CloneReceiptRuleSetRequest
* CloneReceiptRuleSetRequest `object`: Represents a request to create a receipt rule set by cloning an existing one. You use receipt rule sets to receive email with Amazon SES. For more information, see the <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>.
  * OriginalRuleSetName **required** [ReceiptRuleSetName](#receiptrulesetname)
  * RuleSetName **required** [ReceiptRuleSetName](#receiptrulesetname)

### CloneReceiptRuleSetResponse
* CloneReceiptRuleSetResponse `object`: An empty element returned on a successful request.

### CloudWatchDestination
* CloudWatchDestination `object`: <p>Contains information associated with an Amazon CloudWatch event destination to which email sending events are published.</p> <p>Event destinations, such as Amazon CloudWatch, are associated with configuration sets, which enable you to publish email sending events. For information about using configuration sets, see the <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p>
  * DimensionConfigurations **required** [CloudWatchDimensionConfigurations](#cloudwatchdimensionconfigurations)

### CloudWatchDimensionConfiguration
* CloudWatchDimensionConfiguration `object`: <p>Contains the dimension configuration to use when you publish email sending events to Amazon CloudWatch.</p> <p>For information about publishing email sending events to Amazon CloudWatch, see the <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p>
  * DefaultDimensionValue **required** [DefaultDimensionValue](#defaultdimensionvalue)
  * DimensionName **required** [DimensionName](#dimensionname)
  * DimensionValueSource **required** [DimensionValueSource](#dimensionvaluesource)

### CloudWatchDimensionConfigurations
* CloudWatchDimensionConfigurations `array`
  * items [CloudWatchDimensionConfiguration](#cloudwatchdimensionconfiguration)

### ConfigurationSet
* ConfigurationSet `object`: <p>The name of the configuration set.</p> <p>Configuration sets let you create groups of rules that you can apply to the emails you send using Amazon SES. For more information about using configuration sets, see <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/using-configuration-sets.html">Using Amazon SES Configuration Sets</a> in the <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/">Amazon SES Developer Guide</a>.</p>
  * Name **required** [ConfigurationSetName](#configurationsetname)

### ConfigurationSetAlreadyExistsException
* ConfigurationSetAlreadyExistsException `object`: Indicates that the configuration set could not be created because of a naming conflict.
  * ConfigurationSetName [ConfigurationSetName](#configurationsetname)

### ConfigurationSetAttribute
* ConfigurationSetAttribute `string` (values: eventDestinations, trackingOptions)

### ConfigurationSetAttributeList
* ConfigurationSetAttributeList `array`
  * items [ConfigurationSetAttribute](#configurationsetattribute)

### ConfigurationSetDoesNotExistException
* ConfigurationSetDoesNotExistException `object`: Indicates that the configuration set does not exist.
  * ConfigurationSetName [ConfigurationSetName](#configurationsetname)

### ConfigurationSetName
* ConfigurationSetName `string`

### ConfigurationSets
* ConfigurationSets `array`
  * items [ConfigurationSet](#configurationset)

### Content
* Content `object`: <p>Represents textual data, plus an optional character set specification.</p> <p>By default, the text must be 7-bit ASCII, due to the constraints of the SMTP protocol. If the text must contain any other characters, then you must also specify a character set. Examples include UTF-8, ISO-8859-1, and Shift_JIS.</p>
  * Charset [Charset](#charset)
  * Data **required** [MessageData](#messagedata)

### Counter
* Counter `integer`

### CreateConfigurationSetEventDestinationRequest
* CreateConfigurationSetEventDestinationRequest `object`: Represents a request to create a configuration set event destination. A configuration set event destination, which can be either Amazon CloudWatch or Amazon Kinesis Firehose, describes an AWS service in which Amazon SES publishes the email sending events associated with a configuration set. For information about using configuration sets, see the <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.
  * ConfigurationSetName **required** [ConfigurationSetName](#configurationsetname)
  * EventDestination **required** [EventDestination](#eventdestination)

### CreateConfigurationSetEventDestinationResponse
* CreateConfigurationSetEventDestinationResponse `object`: An empty element returned on a successful request.

### CreateConfigurationSetRequest
* CreateConfigurationSetRequest `object`: Represents a request to create a configuration set. Configuration sets enable you to publish email sending events. For information about using configuration sets, see the <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.
  * ConfigurationSet **required** [ConfigurationSet](#configurationset)

### CreateConfigurationSetResponse
* CreateConfigurationSetResponse `object`: An empty element returned on a successful request.

### CreateConfigurationSetTrackingOptionsRequest
* CreateConfigurationSetTrackingOptionsRequest `object`: Represents a request to create an open and click tracking option object in a configuration set. 
  * ConfigurationSetName **required** [ConfigurationSetName](#configurationsetname)
  * TrackingOptions **required** [TrackingOptions](#trackingoptions)

### CreateConfigurationSetTrackingOptionsResponse
* CreateConfigurationSetTrackingOptionsResponse `object`: An empty element returned on a successful request.

### CreateReceiptFilterRequest
* CreateReceiptFilterRequest `object`: Represents a request to create a new IP address filter. You use IP address filters when you receive email with Amazon SES. For more information, see the <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>.
  * Filter **required** [ReceiptFilter](#receiptfilter)

### CreateReceiptFilterResponse
* CreateReceiptFilterResponse `object`: An empty element returned on a successful request.

### CreateReceiptRuleRequest
* CreateReceiptRuleRequest `object`: Represents a request to create a receipt rule. You use receipt rules to receive email with Amazon SES. For more information, see the <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>.
  * After [ReceiptRuleName](#receiptrulename)
  * Rule **required** [ReceiptRule](#receiptrule)
  * RuleSetName **required** [ReceiptRuleSetName](#receiptrulesetname)

### CreateReceiptRuleResponse
* CreateReceiptRuleResponse `object`: An empty element returned on a successful request.

### CreateReceiptRuleSetRequest
* CreateReceiptRuleSetRequest `object`: Represents a request to create an empty receipt rule set. You use receipt rule sets to receive email with Amazon SES. For more information, see the <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>.
  * RuleSetName **required** [ReceiptRuleSetName](#receiptrulesetname)

### CreateReceiptRuleSetResponse
* CreateReceiptRuleSetResponse `object`: An empty element returned on a successful request.

### CreateTemplateRequest
* CreateTemplateRequest `object`: Represents a request to create an email template. For more information, see the <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>.
  * Template **required** [Template](#template)

### CreateTemplateResponse
* CreateTemplateResponse `object`

### CustomMailFromStatus
* CustomMailFromStatus `string` (values: Pending, Success, Failed, TemporaryFailure)

### CustomRedirectDomain
* CustomRedirectDomain `string`

### DefaultDimensionValue
* DefaultDimensionValue `string`

### DeleteConfigurationSetEventDestinationRequest
* DeleteConfigurationSetEventDestinationRequest `object`: Represents a request to delete a configuration set event destination. Configuration set event destinations are associated with configuration sets, which enable you to publish email sending events. For information about using configuration sets, see the <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.
  * ConfigurationSetName **required** [ConfigurationSetName](#configurationsetname)
  * EventDestinationName **required** [EventDestinationName](#eventdestinationname)

### DeleteConfigurationSetEventDestinationResponse
* DeleteConfigurationSetEventDestinationResponse `object`: An empty element returned on a successful request.

### DeleteConfigurationSetRequest
* DeleteConfigurationSetRequest `object`: Represents a request to delete a configuration set. Configuration sets enable you to publish email sending events. For information about using configuration sets, see the <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.
  * ConfigurationSetName **required** [ConfigurationSetName](#configurationsetname)

### DeleteConfigurationSetResponse
* DeleteConfigurationSetResponse `object`: An empty element returned on a successful request.

### DeleteConfigurationSetTrackingOptionsRequest
* DeleteConfigurationSetTrackingOptionsRequest `object`: Represents a request to delete open and click tracking options in a configuration set. 
  * ConfigurationSetName **required** [ConfigurationSetName](#configurationsetname)

### DeleteConfigurationSetTrackingOptionsResponse
* DeleteConfigurationSetTrackingOptionsResponse `object`: An empty element returned on a successful request.

### DeleteIdentityPolicyRequest
* DeleteIdentityPolicyRequest `object`: Represents a request to delete a sending authorization policy for an identity. Sending authorization is an Amazon SES feature that enables you to authorize other senders to use your identities. For information, see the <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.
  * Identity **required** [Identity](#identity)
  * PolicyName **required** [PolicyName](#policyname)

### DeleteIdentityPolicyResponse
* DeleteIdentityPolicyResponse `object`: An empty element returned on a successful request.

### DeleteIdentityRequest
* DeleteIdentityRequest `object`: Represents a request to delete one of your Amazon SES identities (an email address or domain).
  * Identity **required** [Identity](#identity)

### DeleteIdentityResponse
* DeleteIdentityResponse `object`: An empty element returned on a successful request.

### DeleteReceiptFilterRequest
* DeleteReceiptFilterRequest `object`: Represents a request to delete an IP address filter. You use IP address filters when you receive email with Amazon SES. For more information, see the <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>.
  * FilterName **required** [ReceiptFilterName](#receiptfiltername)

### DeleteReceiptFilterResponse
* DeleteReceiptFilterResponse `object`: An empty element returned on a successful request.

### DeleteReceiptRuleRequest
* DeleteReceiptRuleRequest `object`: Represents a request to delete a receipt rule. You use receipt rules to receive email with Amazon SES. For more information, see the <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>.
  * RuleName **required** [ReceiptRuleName](#receiptrulename)
  * RuleSetName **required** [ReceiptRuleSetName](#receiptrulesetname)

### DeleteReceiptRuleResponse
* DeleteReceiptRuleResponse `object`: An empty element returned on a successful request.

### DeleteReceiptRuleSetRequest
* DeleteReceiptRuleSetRequest `object`: Represents a request to delete a receipt rule set and all of the receipt rules it contains. You use receipt rule sets to receive email with Amazon SES. For more information, see the <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>.
  * RuleSetName **required** [ReceiptRuleSetName](#receiptrulesetname)

### DeleteReceiptRuleSetResponse
* DeleteReceiptRuleSetResponse `object`: An empty element returned on a successful request.

### DeleteTemplateRequest
* DeleteTemplateRequest `object`: Represents a request to delete an email template. For more information, see the <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>.
  * TemplateName **required** [TemplateName](#templatename)

### DeleteTemplateResponse
* DeleteTemplateResponse `object`

### DeleteVerifiedEmailAddressRequest
* DeleteVerifiedEmailAddressRequest `object`: Represents a request to delete an email address from the list of email addresses you have attempted to verify under your AWS account.
  * EmailAddress **required** [Address](#address)

### DescribeActiveReceiptRuleSetRequest
* DescribeActiveReceiptRuleSetRequest `object`: Represents a request to return the metadata and receipt rules for the receipt rule set that is currently active. You use receipt rule sets to receive email with Amazon SES. For more information, see the <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>.

### DescribeActiveReceiptRuleSetResponse
* DescribeActiveReceiptRuleSetResponse `object`: Represents the metadata and receipt rules for the receipt rule set that is currently active.
  * Metadata [ReceiptRuleSetMetadata](#receiptrulesetmetadata)
  * Rules [ReceiptRulesList](#receiptruleslist)

### DescribeConfigurationSetRequest
* DescribeConfigurationSetRequest `object`: Represents a request to return the details of a configuration set. Configuration sets enable you to publish email sending events. For information about using configuration sets, see the <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.
  * ConfigurationSetAttributeNames [ConfigurationSetAttributeList](#configurationsetattributelist)
  * ConfigurationSetName **required** [ConfigurationSetName](#configurationsetname)

### DescribeConfigurationSetResponse
* DescribeConfigurationSetResponse `object`: Represents the details of a configuration set. Configuration sets enable you to publish email sending events. For information about using configuration sets, see the <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.
  * ConfigurationSet [ConfigurationSet](#configurationset)
  * EventDestinations [EventDestinations](#eventdestinations)
  * TrackingOptions [TrackingOptions](#trackingoptions)

### DescribeReceiptRuleRequest
* DescribeReceiptRuleRequest `object`: Represents a request to return the details of a receipt rule. You use receipt rules to receive email with Amazon SES. For more information, see the <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>.
  * RuleName **required** [ReceiptRuleName](#receiptrulename)
  * RuleSetName **required** [ReceiptRuleSetName](#receiptrulesetname)

### DescribeReceiptRuleResponse
* DescribeReceiptRuleResponse `object`: Represents the details of a receipt rule.
  * Rule [ReceiptRule](#receiptrule)

### DescribeReceiptRuleSetRequest
* DescribeReceiptRuleSetRequest `object`: Represents a request to return the details of a receipt rule set. You use receipt rule sets to receive email with Amazon SES. For more information, see the <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>.
  * RuleSetName **required** [ReceiptRuleSetName](#receiptrulesetname)

### DescribeReceiptRuleSetResponse
* DescribeReceiptRuleSetResponse `object`: Represents the details of the specified receipt rule set.
  * Metadata [ReceiptRuleSetMetadata](#receiptrulesetmetadata)
  * Rules [ReceiptRulesList](#receiptruleslist)

### Destination
* Destination `object`: <p>Represents the destination of the message, consisting of To:, CC:, and BCC: fields.</p> <p> By default, the string must be 7-bit ASCII. If the text must contain any other characters, then you must use MIME encoded-word syntax (RFC 2047) instead of a literal string. MIME encoded-word syntax uses the following form: <code>=?charset?encoding?encoded-text?=</code>. For more information, see <a href="https://tools.ietf.org/html/rfc2047">RFC 2047</a>. </p>
  * BccAddresses [AddressList](#addresslist)
  * CcAddresses [AddressList](#addresslist)
  * ToAddresses [AddressList](#addresslist)

### DiagnosticCode
* DiagnosticCode `string`

### DimensionName
* DimensionName `string`

### DimensionValueSource
* DimensionValueSource `string` (values: messageTag, emailHeader, linkTag)

### DkimAttributes
* DkimAttributes `array`
  * items `object`
    * key [Identity](#identity)
    * value [IdentityDkimAttributes](#identitydkimattributes)

### Domain
* Domain `string`

### DsnAction
* DsnAction `string` (values: failed, delayed, delivered, relayed, expanded)

### DsnStatus
* DsnStatus `string`

### Enabled
* Enabled `boolean`

### Error
* Error `string`

### EventDestination
* EventDestination `object`: <p>Contains information about the event destination that the specified email sending events will be published to.</p> <note> <p>When you create or update an event destination, you must provide one, and only one, destination. The destination can be Amazon CloudWatch, Amazon Kinesis Firehose or Amazon Simple Notification Service (Amazon SNS).</p> </note> <p>Event destinations are associated with configuration sets, which enable you to publish email sending events to Amazon CloudWatch, Amazon Kinesis Firehose, or Amazon Simple Notification Service (Amazon SNS). For information about using configuration sets, see the <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p>
  * CloudWatchDestination [CloudWatchDestination](#cloudwatchdestination)
  * Enabled [Enabled](#enabled)
  * KinesisFirehoseDestination [KinesisFirehoseDestination](#kinesisfirehosedestination)
  * MatchingEventTypes **required** [EventTypes](#eventtypes)
  * Name **required** [EventDestinationName](#eventdestinationname)
  * SNSDestination [SNSDestination](#snsdestination)

### EventDestinationAlreadyExistsException
* EventDestinationAlreadyExistsException `object`: Indicates that the event destination could not be created because of a naming conflict.
  * ConfigurationSetName [ConfigurationSetName](#configurationsetname)
  * EventDestinationName [EventDestinationName](#eventdestinationname)

### EventDestinationDoesNotExistException
* EventDestinationDoesNotExistException `object`: Indicates that the event destination does not exist.
  * ConfigurationSetName [ConfigurationSetName](#configurationsetname)
  * EventDestinationName [EventDestinationName](#eventdestinationname)

### EventDestinationName
* EventDestinationName `string`

### EventDestinations
* EventDestinations `array`
  * items [EventDestination](#eventdestination)

### EventType
* EventType `string` (values: send, reject, bounce, complaint, delivery, open, click, renderingFailure)

### EventTypes
* EventTypes `array`
  * items [EventType](#eventtype)

### Explanation
* Explanation `string`

### ExtensionField
* ExtensionField `object`: <p>Additional X-headers to include in the Delivery Status Notification (DSN) when an email that Amazon SES receives on your behalf bounces.</p> <p>For information about receiving email through Amazon SES, see the <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email.html">Amazon SES Developer Guide</a>.</p>
  * Name **required** [ExtensionFieldName](#extensionfieldname)
  * Value **required** [ExtensionFieldValue](#extensionfieldvalue)

### ExtensionFieldList
* ExtensionFieldList `array`
  * items [ExtensionField](#extensionfield)

### ExtensionFieldName
* ExtensionFieldName `string`

### ExtensionFieldValue
* ExtensionFieldValue `string`

### GetIdentityDkimAttributesRequest
* GetIdentityDkimAttributesRequest `object`: Represents a request for the status of Amazon SES Easy DKIM signing for an identity. For domain identities, this request also returns the DKIM tokens that are required for Easy DKIM signing, and whether Amazon SES successfully verified that these tokens were published. For more information about Easy DKIM, see the <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Amazon SES Developer Guide</a>.
  * Identities **required** [IdentityList](#identitylist)

### GetIdentityDkimAttributesResponse
* GetIdentityDkimAttributesResponse `object`: Represents the status of Amazon SES Easy DKIM signing for an identity. For domain identities, this response also contains the DKIM tokens that are required for Easy DKIM signing, and whether Amazon SES successfully verified that these tokens were published.
  * DkimAttributes **required** [DkimAttributes](#dkimattributes)

### GetIdentityMailFromDomainAttributesRequest
* GetIdentityMailFromDomainAttributesRequest `object`: Represents a request to return the Amazon SES custom MAIL FROM attributes for a list of identities. For information about using a custom MAIL FROM domain, see the <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/mail-from.html">Amazon SES Developer Guide</a>.
  * Identities **required** [IdentityList](#identitylist)

### GetIdentityMailFromDomainAttributesResponse
* GetIdentityMailFromDomainAttributesResponse `object`: Represents the custom MAIL FROM attributes for a list of identities.
  * MailFromDomainAttributes **required** [MailFromDomainAttributes](#mailfromdomainattributes)

### GetIdentityNotificationAttributesRequest
* GetIdentityNotificationAttributesRequest `object`: Represents a request to return the notification attributes for a list of identities you verified with Amazon SES. For information about Amazon SES notifications, see the <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications.html">Amazon SES Developer Guide</a>.
  * Identities **required** [IdentityList](#identitylist)

### GetIdentityNotificationAttributesResponse
* GetIdentityNotificationAttributesResponse `object`: Represents the notification attributes for a list of identities.
  * NotificationAttributes **required** [NotificationAttributes](#notificationattributes)

### GetIdentityPoliciesRequest
* GetIdentityPoliciesRequest `object`: Represents a request to return the requested sending authorization policies for an identity. Sending authorization is an Amazon SES feature that enables you to authorize other senders to use your identities. For information, see the <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.
  * Identity **required** [Identity](#identity)
  * PolicyNames **required** [PolicyNameList](#policynamelist)

### GetIdentityPoliciesResponse
* GetIdentityPoliciesResponse `object`: Represents the requested sending authorization policies.
  * Policies **required** [PolicyMap](#policymap)

### GetIdentityVerificationAttributesRequest
* GetIdentityVerificationAttributesRequest `object`: Represents a request to return the Amazon SES verification status of a list of identities. For domain identities, this request also returns the verification token. For information about verifying identities with Amazon SES, see the <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-addresses-and-domains.html">Amazon SES Developer Guide</a>.
  * Identities **required** [IdentityList](#identitylist)

### GetIdentityVerificationAttributesResponse
* GetIdentityVerificationAttributesResponse `object`: The Amazon SES verification status of a list of identities. For domain identities, this response also contains the verification token.
  * VerificationAttributes **required** [VerificationAttributes](#verificationattributes)

### GetSendQuotaResponse
* GetSendQuotaResponse `object`: Represents your Amazon SES daily sending quota, maximum send rate, and the number of emails you have sent in the last 24 hours.
  * Max24HourSend [Max24HourSend](#max24hoursend)
  * MaxSendRate [MaxSendRate](#maxsendrate)
  * SentLast24Hours [SentLast24Hours](#sentlast24hours)

### GetSendStatisticsResponse
* GetSendStatisticsResponse `object`: Represents a list of data points. This list contains aggregated data from the previous two weeks of your sending activity with Amazon SES.
  * SendDataPoints [SendDataPointList](#senddatapointlist)

### GetTemplateRequest
* GetTemplateRequest `object`
  * TemplateName **required** [TemplateName](#templatename)

### GetTemplateResponse
* GetTemplateResponse `object`
  * Template [Template](#template)

### HeaderName
* HeaderName `string`

### HeaderValue
* HeaderValue `string`

### HtmlPart
* HtmlPart `string`

### Identity
* Identity `string`

### IdentityDkimAttributes
* IdentityDkimAttributes `object`: Represents the DKIM attributes of a verified email address or a domain.
  * DkimEnabled **required** [Enabled](#enabled)
  * DkimTokens [VerificationTokenList](#verificationtokenlist)
  * DkimVerificationStatus **required** [VerificationStatus](#verificationstatus)

### IdentityList
* IdentityList `array`
  * items [Identity](#identity)

### IdentityMailFromDomainAttributes
* IdentityMailFromDomainAttributes `object`: Represents the custom MAIL FROM domain attributes of a verified identity (email address or domain).
  * BehaviorOnMXFailure **required** [BehaviorOnMXFailure](#behavioronmxfailure)
  * MailFromDomain **required** [MailFromDomainName](#mailfromdomainname)
  * MailFromDomainStatus **required** [CustomMailFromStatus](#custommailfromstatus)

### IdentityNotificationAttributes
* IdentityNotificationAttributes `object`: Represents the notification attributes of an identity, including whether an identity has Amazon Simple Notification Service (Amazon SNS) topics set for bounce, complaint, and/or delivery notifications, and whether feedback forwarding is enabled for bounce and complaint notifications.
  * BounceTopic **required** [NotificationTopic](#notificationtopic)
  * ComplaintTopic **required** [NotificationTopic](#notificationtopic)
  * DeliveryTopic **required** [NotificationTopic](#notificationtopic)
  * ForwardingEnabled **required** [Enabled](#enabled)
  * HeadersInBounceNotificationsEnabled [Enabled](#enabled)
  * HeadersInComplaintNotificationsEnabled [Enabled](#enabled)
  * HeadersInDeliveryNotificationsEnabled [Enabled](#enabled)

### IdentityType
* IdentityType `string` (values: EmailAddress, Domain)

### IdentityVerificationAttributes
* IdentityVerificationAttributes `object`: Represents the verification attributes of a single identity.
  * VerificationStatus **required** [VerificationStatus](#verificationstatus)
  * VerificationToken [VerificationToken](#verificationtoken)

### InvalidCloudWatchDestinationException
* InvalidCloudWatchDestinationException `object`: Indicates that the Amazon CloudWatch destination is invalid. See the error message for details.
  * ConfigurationSetName [ConfigurationSetName](#configurationsetname)
  * EventDestinationName [EventDestinationName](#eventdestinationname)

### InvalidConfigurationSetException
* InvalidConfigurationSetException `object`: Indicates that the configuration set is invalid. See the error message for details.

### InvalidFirehoseDestinationException
* InvalidFirehoseDestinationException `object`: Indicates that the Amazon Kinesis Firehose destination is invalid. See the error message for details.
  * ConfigurationSetName [ConfigurationSetName](#configurationsetname)
  * EventDestinationName [EventDestinationName](#eventdestinationname)

### InvalidLambdaFunctionException
* InvalidLambdaFunctionException `object`: Indicates that the provided AWS Lambda function is invalid, or that Amazon SES could not execute the provided function, possibly due to permissions issues. For information about giving permissions, see the <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-permissions.html">Amazon SES Developer Guide</a>.
  * FunctionArn [AmazonResourceName](#amazonresourcename)

### InvalidPolicyException
* InvalidPolicyException `object`: Indicates that the provided policy is invalid. Check the error stack for more information about what caused the error.

### InvalidRenderingParameterException
* InvalidRenderingParameterException `object`: Indicates that one or more of the replacement values you provided is invalid. This error may occur when the TemplateData object contains invalid JSON.
  * TemplateName [TemplateName](#templatename)

### InvalidS3ConfigurationException
* InvalidS3ConfigurationException `object`: Indicates that the provided Amazon S3 bucket or AWS KMS encryption key is invalid, or that Amazon SES could not publish to the bucket, possibly due to permissions issues. For information about giving permissions, see the <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-permissions.html">Amazon SES Developer Guide</a>.
  * Bucket [S3BucketName](#s3bucketname)

### InvalidSNSDestinationException
* InvalidSNSDestinationException `object`: Indicates that the Amazon Simple Notification Service (Amazon SNS) destination is invalid. See the error message for details.
  * ConfigurationSetName [ConfigurationSetName](#configurationsetname)
  * EventDestinationName [EventDestinationName](#eventdestinationname)

### InvalidSnsTopicException
* InvalidSnsTopicException `object`: Indicates that the provided Amazon SNS topic is invalid, or that Amazon SES could not publish to the topic, possibly due to permissions issues. For information about giving permissions, see the <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-permissions.html">Amazon SES Developer Guide</a>.
  * Topic [AmazonResourceName](#amazonresourcename)

### InvalidTemplateException
* InvalidTemplateException `object`: Indicates that a template could not be created because it contained invalid JSON.
  * TemplateName [TemplateName](#templatename)

### InvalidTrackingOptionsException
* InvalidTrackingOptionsException `object`: <p>Indicates that the custom domain to be used for open and click tracking redirects is invalid. This error appears most often in the following situations:</p> <ul> <li> <p>When the tracking domain you specified is not verified in Amazon SES.</p> </li> <li> <p>When the tracking domain you specified is not a valid domain or subdomain.</p> </li> </ul>

### InvocationType
* InvocationType `string` (values: Event, RequestResponse)

### KinesisFirehoseDestination
* KinesisFirehoseDestination `object`: <p>Contains the delivery stream ARN and the IAM role ARN associated with an Amazon Kinesis Firehose event destination.</p> <p>Event destinations, such as Amazon Kinesis Firehose, are associated with configuration sets, which enable you to publish email sending events. For information about using configuration sets, see the <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p>
  * DeliveryStreamARN **required** [AmazonResourceName](#amazonresourcename)
  * IAMRoleARN **required** [AmazonResourceName](#amazonresourcename)

### LambdaAction
* LambdaAction `object`: <p>When included in a receipt rule, this action calls an AWS Lambda function and, optionally, publishes a notification to Amazon Simple Notification Service (Amazon SNS).</p> <p>To enable Amazon SES to call your AWS Lambda function or to publish to an Amazon SNS topic of another account, Amazon SES must have permission to access those resources. For information about giving permissions, see the <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-permissions.html">Amazon SES Developer Guide</a>.</p> <p>For information about using AWS Lambda actions in receipt rules, see the <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-action-lambda.html">Amazon SES Developer Guide</a>.</p>
  * FunctionArn **required** [AmazonResourceName](#amazonresourcename)
  * InvocationType [InvocationType](#invocationtype)
  * TopicArn [AmazonResourceName](#amazonresourcename)

### LastAttemptDate
* LastAttemptDate `string`

### LimitExceededException
* LimitExceededException `object`: Indicates that a resource could not be created because of service limits. For a list of Amazon SES limits, see the <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/limits.html">Amazon SES Developer Guide</a>.

### ListConfigurationSetsRequest
* ListConfigurationSetsRequest `object`: Represents a request to list the configuration sets associated with your AWS account. Configuration sets enable you to publish email sending events. For information about using configuration sets, see the <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.
  * MaxItems [MaxItems](#maxitems)
  * NextToken [NextToken](#nexttoken)

### ListConfigurationSetsResponse
* ListConfigurationSetsResponse `object`: A list of configuration sets associated with your AWS account. Configuration sets enable you to publish email sending events. For information about using configuration sets, see the <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.
  * ConfigurationSets [ConfigurationSets](#configurationsets)
  * NextToken [NextToken](#nexttoken)

### ListIdentitiesRequest
* ListIdentitiesRequest `object`: Represents a request to return a list of all identities (email addresses and domains) that you have attempted to verify under your AWS account, regardless of verification status.
  * IdentityType [IdentityType](#identitytype)
  * MaxItems [MaxItems](#maxitems)
  * NextToken [NextToken](#nexttoken)

### ListIdentitiesResponse
* ListIdentitiesResponse `object`: A list of all identities that you have attempted to verify under your AWS account, regardless of verification status.
  * Identities **required** [IdentityList](#identitylist)
  * NextToken [NextToken](#nexttoken)

### ListIdentityPoliciesRequest
* ListIdentityPoliciesRequest `object`: Represents a request to return a list of sending authorization policies that are attached to an identity. Sending authorization is an Amazon SES feature that enables you to authorize other senders to use your identities. For information, see the <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.
  * Identity **required** [Identity](#identity)

### ListIdentityPoliciesResponse
* ListIdentityPoliciesResponse `object`: A list of names of sending authorization policies that apply to an identity.
  * PolicyNames **required** [PolicyNameList](#policynamelist)

### ListReceiptFiltersRequest
* ListReceiptFiltersRequest `object`: Represents a request to list the IP address filters that exist under your AWS account. You use IP address filters when you receive email with Amazon SES. For more information, see the <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>.

### ListReceiptFiltersResponse
* ListReceiptFiltersResponse `object`: A list of IP address filters that exist under your AWS account.
  * Filters [ReceiptFilterList](#receiptfilterlist)

### ListReceiptRuleSetsRequest
* ListReceiptRuleSetsRequest `object`: Represents a request to list the receipt rule sets that exist under your AWS account. You use receipt rule sets to receive email with Amazon SES. For more information, see the <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>.
  * NextToken [NextToken](#nexttoken)

### ListReceiptRuleSetsResponse
* ListReceiptRuleSetsResponse `object`: A list of receipt rule sets that exist under your AWS account.
  * NextToken [NextToken](#nexttoken)
  * RuleSets [ReceiptRuleSetsLists](#receiptrulesetslists)

### ListTemplatesRequest
* ListTemplatesRequest `object`
  * MaxItems [MaxItems](#maxitems)
  * NextToken [NextToken](#nexttoken)

### ListTemplatesResponse
* ListTemplatesResponse `object`
  * NextToken [NextToken](#nexttoken)
  * TemplatesMetadata [TemplateMetadataList](#templatemetadatalist)

### ListVerifiedEmailAddressesResponse
* ListVerifiedEmailAddressesResponse `object`: A list of email addresses that you have verified with Amazon SES under your AWS account.
  * VerifiedEmailAddresses [AddressList](#addresslist)

### MailFromDomainAttributes
* MailFromDomainAttributes `array`
  * items `object`
    * key [Identity](#identity)
    * value [IdentityMailFromDomainAttributes](#identitymailfromdomainattributes)

### MailFromDomainName
* MailFromDomainName `string`

### MailFromDomainNotVerifiedException
* MailFromDomainNotVerifiedException `object`:  Indicates that the message could not be sent because Amazon SES could not read the MX record required to use the specified MAIL FROM domain. For information about editing the custom MAIL FROM domain settings for an identity, see the <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/mail-from-edit.html">Amazon SES Developer Guide</a>.

### Max24HourSend
* Max24HourSend `number`

### MaxItems
* MaxItems `integer`

### MaxSendRate
* MaxSendRate `number`

### Message
* Message `object`: Represents the message to be sent, composed of a subject and a body.
  * Body **required** [Body](#body)
  * Subject **required** [Content](#content)

### MessageData
* MessageData `string`

### MessageDsn
* MessageDsn `object`: <p>Message-related information to include in the Delivery Status Notification (DSN) when an email that Amazon SES receives on your behalf bounces.</p> <p>For information about receiving email through Amazon SES, see the <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email.html">Amazon SES Developer Guide</a>.</p>
  * ArrivalDate [ArrivalDate](#arrivaldate)
  * ExtensionFields [ExtensionFieldList](#extensionfieldlist)
  * ReportingMta **required** [ReportingMta](#reportingmta)

### MessageId
* MessageId `string`

### MessageRejected
* MessageRejected `object`: Indicates that the action failed, and the message could not be sent. Check the error stack for more information about what caused the error.

### MessageTag
* MessageTag `object`: <p>Contains the name and value of a tag that you can provide to <code>SendEmail</code> or <code>SendRawEmail</code> to apply to an email.</p> <p>Message tags, which you use with configuration sets, enable you to publish email sending events. For information about using configuration sets, see the <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p>
  * Name **required** [MessageTagName](#messagetagname)
  * Value **required** [MessageTagValue](#messagetagvalue)

### MessageTagList
* MessageTagList `array`
  * items [MessageTag](#messagetag)

### MessageTagName
* MessageTagName `string`

### MessageTagValue
* MessageTagValue `string`

### MissingRenderingAttributeException
* MissingRenderingAttributeException `object`: Indicates that one or more of the replacement values for the specified template was not specified. Ensure that the TemplateData object contains references to all of the replacement tags in the specified template.
  * TemplateName [TemplateName](#templatename)

### NextToken
* NextToken `string`

### NotificationAttributes
* NotificationAttributes `array`
  * items `object`
    * key [Identity](#identity)
    * value [IdentityNotificationAttributes](#identitynotificationattributes)

### NotificationTopic
* NotificationTopic `string`

### NotificationType
* NotificationType `string` (values: Bounce, Complaint, Delivery)

### Policy
* Policy `string`

### PolicyMap
* PolicyMap `array`
  * items `object`
    * key [PolicyName](#policyname)
    * value [Policy](#policy)

### PolicyName
* PolicyName `string`

### PolicyNameList
* PolicyNameList `array`
  * items [PolicyName](#policyname)

### PutIdentityPolicyRequest
* PutIdentityPolicyRequest `object`: Represents a request to add or update a sending authorization policy for an identity. Sending authorization is an Amazon SES feature that enables you to authorize other senders to use your identities. For information, see the <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.
  * Identity **required** [Identity](#identity)
  * Policy **required** [Policy](#policy)
  * PolicyName **required** [PolicyName](#policyname)

### PutIdentityPolicyResponse
* PutIdentityPolicyResponse `object`: An empty element returned on a successful request.

### RawMessage
* RawMessage `object`: Represents the raw data of the message.
  * Data **required** [RawMessageData](#rawmessagedata)

### RawMessageData
* RawMessageData `string`

### ReceiptAction
* ReceiptAction `object`: <p>An action that Amazon SES can take when it receives an email on behalf of one or more email addresses or domains that you own. An instance of this data type can represent only one action.</p> <p>For information about setting up receipt rules, see the <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rules.html">Amazon SES Developer Guide</a>.</p>
  * AddHeaderAction [AddHeaderAction](#addheaderaction)
  * BounceAction [BounceAction](#bounceaction)
  * LambdaAction [LambdaAction](#lambdaaction)
  * S3Action [S3Action](#s3action)
  * SNSAction [SNSAction](#snsaction)
  * StopAction [StopAction](#stopaction)
  * WorkmailAction [WorkmailAction](#workmailaction)

### ReceiptActionsList
* ReceiptActionsList `array`
  * items [ReceiptAction](#receiptaction)

### ReceiptFilter
* ReceiptFilter `object`: <p>A receipt IP address filter enables you to specify whether to accept or reject mail originating from an IP address or range of IP addresses.</p> <p>For information about setting up IP address filters, see the <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-ip-filters.html">Amazon SES Developer Guide</a>.</p>
  * IpFilter **required** [ReceiptIpFilter](#receiptipfilter)
  * Name **required** [ReceiptFilterName](#receiptfiltername)

### ReceiptFilterList
* ReceiptFilterList `array`
  * items [ReceiptFilter](#receiptfilter)

### ReceiptFilterName
* ReceiptFilterName `string`

### ReceiptFilterPolicy
* ReceiptFilterPolicy `string` (values: Block, Allow)

### ReceiptIpFilter
* ReceiptIpFilter `object`: <p>A receipt IP address filter enables you to specify whether to accept or reject mail originating from an IP address or range of IP addresses.</p> <p>For information about setting up IP address filters, see the <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-ip-filters.html">Amazon SES Developer Guide</a>.</p>
  * Cidr **required** [Cidr](#cidr)
  * Policy **required** [ReceiptFilterPolicy](#receiptfilterpolicy)

### ReceiptRule
* ReceiptRule `object`: <p>Receipt rules enable you to specify which actions Amazon SES should take when it receives mail on behalf of one or more email addresses or domains that you own.</p> <p>Each receipt rule defines a set of email addresses or domains that it applies to. If the email addresses or domains match at least one recipient address of the message, Amazon SES executes all of the receipt rule's actions on the message.</p> <p>For information about setting up receipt rules, see the <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rules.html">Amazon SES Developer Guide</a>.</p>
  * Actions [ReceiptActionsList](#receiptactionslist)
  * Enabled [Enabled](#enabled)
  * Name **required** [ReceiptRuleName](#receiptrulename)
  * Recipients [RecipientsList](#recipientslist)
  * ScanEnabled [Enabled](#enabled)
  * TlsPolicy [TlsPolicy](#tlspolicy)

### ReceiptRuleName
* ReceiptRuleName `string`

### ReceiptRuleNamesList
* ReceiptRuleNamesList `array`
  * items [ReceiptRuleName](#receiptrulename)

### ReceiptRuleSetMetadata
* ReceiptRuleSetMetadata `object`: <p>Information about a receipt rule set.</p> <p>A receipt rule set is a collection of rules that specify what Amazon SES should do with mail it receives on behalf of your account's verified domains.</p> <p>For information about setting up receipt rule sets, see the <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rule-set.html">Amazon SES Developer Guide</a>.</p>
  * CreatedTimestamp [Timestamp](#timestamp)
  * Name [ReceiptRuleSetName](#receiptrulesetname)

### ReceiptRuleSetName
* ReceiptRuleSetName `string`

### ReceiptRuleSetsLists
* ReceiptRuleSetsLists `array`
  * items [ReceiptRuleSetMetadata](#receiptrulesetmetadata)

### ReceiptRulesList
* ReceiptRulesList `array`
  * items [ReceiptRule](#receiptrule)

### Recipient
* Recipient `string`

### RecipientDsnFields
* RecipientDsnFields `object`: <p>Recipient-related information to include in the Delivery Status Notification (DSN) when an email that Amazon SES receives on your behalf bounces.</p> <p>For information about receiving email through Amazon SES, see the <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email.html">Amazon SES Developer Guide</a>.</p>
  * Action **required** [DsnAction](#dsnaction)
  * DiagnosticCode [DiagnosticCode](#diagnosticcode)
  * ExtensionFields [ExtensionFieldList](#extensionfieldlist)
  * FinalRecipient [Address](#address)
  * LastAttemptDate [LastAttemptDate](#lastattemptdate)
  * RemoteMta [RemoteMta](#remotemta)
  * Status **required** [DsnStatus](#dsnstatus)

### RecipientsList
* RecipientsList `array`
  * items [Recipient](#recipient)

### RemoteMta
* RemoteMta `string`

### RenderedTemplate
* RenderedTemplate `string`

### ReorderReceiptRuleSetRequest
* ReorderReceiptRuleSetRequest `object`: Represents a request to reorder the receipt rules within a receipt rule set. You use receipt rule sets to receive email with Amazon SES. For more information, see the <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>.
  * RuleNames **required** [ReceiptRuleNamesList](#receiptrulenameslist)
  * RuleSetName **required** [ReceiptRuleSetName](#receiptrulesetname)

### ReorderReceiptRuleSetResponse
* ReorderReceiptRuleSetResponse `object`: An empty element returned on a successful request.

### ReportingMta
* ReportingMta `string`

### RuleDoesNotExistException
* RuleDoesNotExistException `object`: Indicates that the provided receipt rule does not exist.
  * Name [RuleOrRuleSetName](#ruleorrulesetname)

### RuleOrRuleSetName
* RuleOrRuleSetName `string`

### RuleSetDoesNotExistException
* RuleSetDoesNotExistException `object`: Indicates that the provided receipt rule set does not exist.
  * Name [RuleOrRuleSetName](#ruleorrulesetname)

### S3Action
* S3Action `object`: <p>When included in a receipt rule, this action saves the received message to an Amazon Simple Storage Service (Amazon S3) bucket and, optionally, publishes a notification to Amazon Simple Notification Service (Amazon SNS).</p> <p>To enable Amazon SES to write emails to your Amazon S3 bucket, use an AWS KMS key to encrypt your emails, or publish to an Amazon SNS topic of another account, Amazon SES must have permission to access those resources. For information about giving permissions, see the <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-permissions.html">Amazon SES Developer Guide</a>.</p> <note> <p>When you save your emails to an Amazon S3 bucket, the maximum email size (including headers) is 30 MB. Emails larger than that will bounce.</p> </note> <p>For information about specifying Amazon S3 actions in receipt rules, see the <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-action-s3.html">Amazon SES Developer Guide</a>.</p>
  * BucketName **required** [S3BucketName](#s3bucketname)
  * KmsKeyArn [AmazonResourceName](#amazonresourcename)
  * ObjectKeyPrefix [S3KeyPrefix](#s3keyprefix)
  * TopicArn [AmazonResourceName](#amazonresourcename)

### S3BucketName
* S3BucketName `string`

### S3KeyPrefix
* S3KeyPrefix `string`

### SNSAction
* SNSAction `object`: <p>When included in a receipt rule, this action publishes a notification to Amazon Simple Notification Service (Amazon SNS). This action includes a complete copy of the email content in the Amazon SNS notifications. Amazon SNS notifications for all other actions simply provide information about the email. They do not include the email content itself.</p> <p>If you own the Amazon SNS topic, you don't need to do anything to give Amazon SES permission to publish emails to it. However, if you don't own the Amazon SNS topic, you need to attach a policy to the topic to give Amazon SES permissions to access it. For information about giving permissions, see the <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-permissions.html">Amazon SES Developer Guide</a>.</p> <important> <p>You can only publish emails that are 150 KB or less (including the header) to Amazon SNS. Larger emails will bounce. If you anticipate emails larger than 150 KB, use the S3 action instead.</p> </important> <p>For information about using a receipt rule to publish an Amazon SNS notification, see the <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-action-sns.html">Amazon SES Developer Guide</a>.</p>
  * Encoding [SNSActionEncoding](#snsactionencoding)
  * TopicArn **required** [AmazonResourceName](#amazonresourcename)

### SNSActionEncoding
* SNSActionEncoding `string` (values: UTF-8, Base64)

### SNSDestination
* SNSDestination `object`: <p>Contains the topic ARN associated with an Amazon Simple Notification Service (Amazon SNS) event destination.</p> <p>Event destinations, such as Amazon SNS, are associated with configuration sets, which enable you to publish email sending events. For information about using configuration sets, see the <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p>
  * TopicARN **required** [AmazonResourceName](#amazonresourcename)

### SendBounceRequest
* SendBounceRequest `object`: Represents a request to send a bounce message to the sender of an email you received through Amazon SES.
  * BounceSender **required** [Address](#address)
  * BounceSenderArn [AmazonResourceName](#amazonresourcename)
  * BouncedRecipientInfoList **required** [BouncedRecipientInfoList](#bouncedrecipientinfolist)
  * Explanation [Explanation](#explanation)
  * MessageDsn [MessageDsn](#messagedsn)
  * OriginalMessageId **required** [MessageId](#messageid)

### SendBounceResponse
* SendBounceResponse `object`: Represents a unique message ID.
  * MessageId [MessageId](#messageid)

### SendBulkTemplatedEmailRequest
* SendBulkTemplatedEmailRequest `object`: Represents a request to send a templated email to multiple destinations using Amazon SES. For more information, see the <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>.
  * ConfigurationSetName [ConfigurationSetName](#configurationsetname)
  * DefaultTags [MessageTagList](#messagetaglist)
  * DefaultTemplateData [TemplateData](#templatedata)
  * Destinations **required** [BulkEmailDestinationList](#bulkemaildestinationlist)
  * ReplyToAddresses [AddressList](#addresslist)
  * ReturnPath [Address](#address)
  * ReturnPathArn [AmazonResourceName](#amazonresourcename)
  * Source **required** [Address](#address)
  * SourceArn [AmazonResourceName](#amazonresourcename)
  * Template **required** [TemplateName](#templatename)
  * TemplateArn [AmazonResourceName](#amazonresourcename)

### SendBulkTemplatedEmailResponse
* SendBulkTemplatedEmailResponse `object`
  * Status **required** [BulkEmailDestinationStatusList](#bulkemaildestinationstatuslist)

### SendDataPoint
* SendDataPoint `object`: Represents sending statistics data. Each <code>SendDataPoint</code> contains statistics for a 15-minute period of sending activity. 
  * Bounces [Counter](#counter)
  * Complaints [Counter](#counter)
  * DeliveryAttempts [Counter](#counter)
  * Rejects [Counter](#counter)
  * Timestamp [Timestamp](#timestamp)

### SendDataPointList
* SendDataPointList `array`
  * items [SendDataPoint](#senddatapoint)

### SendEmailRequest
* SendEmailRequest `object`: Represents a request to send a single formatted email using Amazon SES. For more information, see the <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-email-formatted.html">Amazon SES Developer Guide</a>.
  * ConfigurationSetName [ConfigurationSetName](#configurationsetname)
  * Destination **required** [Destination](#destination)
  * Message **required** [Message](#message)
  * ReplyToAddresses [AddressList](#addresslist)
  * ReturnPath [Address](#address)
  * ReturnPathArn [AmazonResourceName](#amazonresourcename)
  * Source **required** [Address](#address)
  * SourceArn [AmazonResourceName](#amazonresourcename)
  * Tags [MessageTagList](#messagetaglist)

### SendEmailResponse
* SendEmailResponse `object`: Represents a unique message ID.
  * MessageId **required** [MessageId](#messageid)

### SendRawEmailRequest
* SendRawEmailRequest `object`: Represents a request to send a single raw email using Amazon SES. For more information, see the <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-email-raw.html">Amazon SES Developer Guide</a>.
  * ConfigurationSetName [ConfigurationSetName](#configurationsetname)
  * Destinations [AddressList](#addresslist)
  * FromArn [AmazonResourceName](#amazonresourcename)
  * RawMessage **required** [RawMessage](#rawmessage)
  * ReturnPathArn [AmazonResourceName](#amazonresourcename)
  * Source [Address](#address)
  * SourceArn [AmazonResourceName](#amazonresourcename)
  * Tags [MessageTagList](#messagetaglist)

### SendRawEmailResponse
* SendRawEmailResponse `object`: Represents a unique message ID.
  * MessageId **required** [MessageId](#messageid)

### SendTemplatedEmailRequest
* SendTemplatedEmailRequest `object`: Represents a request to send a templated email using Amazon SES. For more information, see the <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>.
  * ConfigurationSetName [ConfigurationSetName](#configurationsetname)
  * Destination **required** [Destination](#destination)
  * ReplyToAddresses [AddressList](#addresslist)
  * ReturnPath [Address](#address)
  * ReturnPathArn [AmazonResourceName](#amazonresourcename)
  * Source **required** [Address](#address)
  * SourceArn [AmazonResourceName](#amazonresourcename)
  * Tags [MessageTagList](#messagetaglist)
  * Template **required** [TemplateName](#templatename)
  * TemplateArn [AmazonResourceName](#amazonresourcename)
  * TemplateData **required** [TemplateData](#templatedata)

### SendTemplatedEmailResponse
* SendTemplatedEmailResponse `object`
  * MessageId **required** [MessageId](#messageid)

### SentLast24Hours
* SentLast24Hours `number`

### SetActiveReceiptRuleSetRequest
* SetActiveReceiptRuleSetRequest `object`: Represents a request to set a receipt rule set as the active receipt rule set. You use receipt rule sets to receive email with Amazon SES. For more information, see the <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>.
  * RuleSetName [ReceiptRuleSetName](#receiptrulesetname)

### SetActiveReceiptRuleSetResponse
* SetActiveReceiptRuleSetResponse `object`: An empty element returned on a successful request.

### SetIdentityDkimEnabledRequest
* SetIdentityDkimEnabledRequest `object`: Represents a request to enable or disable Amazon SES Easy DKIM signing for an identity. For more information about setting up Easy DKIM, see the <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Amazon SES Developer Guide</a>.
  * DkimEnabled **required** [Enabled](#enabled)
  * Identity **required** [Identity](#identity)

### SetIdentityDkimEnabledResponse
* SetIdentityDkimEnabledResponse `object`: An empty element returned on a successful request.

### SetIdentityFeedbackForwardingEnabledRequest
* SetIdentityFeedbackForwardingEnabledRequest `object`: Represents a request to enable or disable whether Amazon SES forwards you bounce and complaint notifications through email. For information about email feedback forwarding, see the <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications-via-email.html">Amazon SES Developer Guide</a>.
  * ForwardingEnabled **required** [Enabled](#enabled)
  * Identity **required** [Identity](#identity)

### SetIdentityFeedbackForwardingEnabledResponse
* SetIdentityFeedbackForwardingEnabledResponse `object`: An empty element returned on a successful request.

### SetIdentityHeadersInNotificationsEnabledRequest
* SetIdentityHeadersInNotificationsEnabledRequest `object`: Represents a request to set whether Amazon SES includes the original email headers in the Amazon SNS notifications of a specified type. For information about notifications, see the <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications-via-sns.html">Amazon SES Developer Guide</a>.
  * Enabled **required** [Enabled](#enabled)
  * Identity **required** [Identity](#identity)
  * NotificationType **required** [NotificationType](#notificationtype)

### SetIdentityHeadersInNotificationsEnabledResponse
* SetIdentityHeadersInNotificationsEnabledResponse `object`: An empty element returned on a successful request.

### SetIdentityMailFromDomainRequest
* SetIdentityMailFromDomainRequest `object`: Represents a request to enable or disable the Amazon SES custom MAIL FROM domain setup for a verified identity. For information about using a custom MAIL FROM domain, see the <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/mail-from.html">Amazon SES Developer Guide</a>.
  * BehaviorOnMXFailure [BehaviorOnMXFailure](#behavioronmxfailure)
  * Identity **required** [Identity](#identity)
  * MailFromDomain [MailFromDomainName](#mailfromdomainname)

### SetIdentityMailFromDomainResponse
* SetIdentityMailFromDomainResponse `object`: An empty element returned on a successful request.

### SetIdentityNotificationTopicRequest
* SetIdentityNotificationTopicRequest `object`: Represents a request to specify the Amazon SNS topic to which Amazon SES will publish bounce, complaint, or delivery notifications for emails sent with that identity as the Source. For information about Amazon SES notifications, see the <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications-via-sns.html">Amazon SES Developer Guide</a>.
  * Identity **required** [Identity](#identity)
  * NotificationType **required** [NotificationType](#notificationtype)
  * SnsTopic [NotificationTopic](#notificationtopic)

### SetIdentityNotificationTopicResponse
* SetIdentityNotificationTopicResponse `object`: An empty element returned on a successful request.

### SetReceiptRulePositionRequest
* SetReceiptRulePositionRequest `object`: Represents a request to set the position of a receipt rule in a receipt rule set. You use receipt rule sets to receive email with Amazon SES. For more information, see the <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>.
  * After [ReceiptRuleName](#receiptrulename)
  * RuleName **required** [ReceiptRuleName](#receiptrulename)
  * RuleSetName **required** [ReceiptRuleSetName](#receiptrulesetname)

### SetReceiptRulePositionResponse
* SetReceiptRulePositionResponse `object`: An empty element returned on a successful request.

### StopAction
* StopAction `object`: <p>When included in a receipt rule, this action terminates the evaluation of the receipt rule set and, optionally, publishes a notification to Amazon Simple Notification Service (Amazon SNS).</p> <p>For information about setting a stop action in a receipt rule, see the <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-action-stop.html">Amazon SES Developer Guide</a>.</p>
  * Scope **required** [StopScope](#stopscope)
  * TopicArn [AmazonResourceName](#amazonresourcename)

### StopScope
* StopScope `string` (values: RuleSet)

### SubjectPart
* SubjectPart `string`

### Template
* Template `object`: The content of the email, composed of a subject line, an HTML part, and a text-only part.
  * HtmlPart [HtmlPart](#htmlpart)
  * SubjectPart [SubjectPart](#subjectpart)
  * TemplateName **required** [TemplateName](#templatename)
  * TextPart [TextPart](#textpart)

### TemplateData
* TemplateData `string`

### TemplateDoesNotExistException
* TemplateDoesNotExistException `object`: Indicates that the Template object you specified does not exist in your Amazon SES account.
  * TemplateName [TemplateName](#templatename)

### TemplateMetadata
* TemplateMetadata `object`: Information about an email template.
  * CreatedTimestamp [Timestamp](#timestamp)
  * Name [TemplateName](#templatename)

### TemplateMetadataList
* TemplateMetadataList `array`
  * items [TemplateMetadata](#templatemetadata)

### TemplateName
* TemplateName `string`

### TestRenderTemplateRequest
* TestRenderTemplateRequest `object`
  * TemplateData **required** [TemplateData](#templatedata)
  * TemplateName **required** [TemplateName](#templatename)

### TestRenderTemplateResponse
* TestRenderTemplateResponse `object`
  * RenderedTemplate [RenderedTemplate](#renderedtemplate)

### TextPart
* TextPart `string`

### Timestamp
* Timestamp `string`

### TlsPolicy
* TlsPolicy `string` (values: Require, Optional)

### TrackingOptions
* TrackingOptions `object`: <p>A domain that is used to redirect email recipients to an Amazon SES-operated domain. This domain captures open and click events generated by Amazon SES emails.</p> <p>For more information, see <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/configure-custom-open-click-domains.html">Configuring Custom Domains to Handle Open and Click Tracking</a> in the <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/Welcome.html">Amazon SES Developer Guide</a>.</p>
  * CustomRedirectDomain [CustomRedirectDomain](#customredirectdomain)

### TrackingOptionsAlreadyExistsException
* TrackingOptionsAlreadyExistsException `object`: Indicates that the configuration set you specified already contains a TrackingOptions object.
  * ConfigurationSetName [ConfigurationSetName](#configurationsetname)

### TrackingOptionsDoesNotExistException
* TrackingOptionsDoesNotExistException `object`: Indicates that the TrackingOptions object you specified does not exist.
  * ConfigurationSetName [ConfigurationSetName](#configurationsetname)

### UpdateConfigurationSetEventDestinationRequest
* UpdateConfigurationSetEventDestinationRequest `object`: Represents a request to update the event destination of a configuration set. Configuration sets enable you to publish email sending events. For information about using configuration sets, see the <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.
  * ConfigurationSetName **required** [ConfigurationSetName](#configurationsetname)
  * EventDestination **required** [EventDestination](#eventdestination)

### UpdateConfigurationSetEventDestinationResponse
* UpdateConfigurationSetEventDestinationResponse `object`: An empty element returned on a successful request.

### UpdateConfigurationSetTrackingOptionsRequest
* UpdateConfigurationSetTrackingOptionsRequest `object`: Represents a request to update the tracking options for a configuration set. 
  * ConfigurationSetName **required** [ConfigurationSetName](#configurationsetname)
  * TrackingOptions **required** [TrackingOptions](#trackingoptions)

### UpdateConfigurationSetTrackingOptionsResponse
* UpdateConfigurationSetTrackingOptionsResponse `object`: An empty element returned on a successful request.

### UpdateReceiptRuleRequest
* UpdateReceiptRuleRequest `object`: Represents a request to update a receipt rule. You use receipt rules to receive email with Amazon SES. For more information, see the <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>.
  * Rule **required** [ReceiptRule](#receiptrule)
  * RuleSetName **required** [ReceiptRuleSetName](#receiptrulesetname)

### UpdateReceiptRuleResponse
* UpdateReceiptRuleResponse `object`: An empty element returned on a successful request.

### UpdateTemplateRequest
* UpdateTemplateRequest `object`
  * Template **required** [Template](#template)

### UpdateTemplateResponse
* UpdateTemplateResponse `object`

### VerificationAttributes
* VerificationAttributes `array`
  * items `object`
    * key [Identity](#identity)
    * value [IdentityVerificationAttributes](#identityverificationattributes)

### VerificationStatus
* VerificationStatus `string` (values: Pending, Success, Failed, TemporaryFailure, NotStarted)

### VerificationToken
* VerificationToken `string`

### VerificationTokenList
* VerificationTokenList `array`
  * items [VerificationToken](#verificationtoken)

### VerifyDomainDkimRequest
* VerifyDomainDkimRequest `object`: Represents a request to generate the CNAME records needed to set up Easy DKIM with Amazon SES. For more information about setting up Easy DKIM, see the <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Amazon SES Developer Guide</a>.
  * Domain **required** [Domain](#domain)

### VerifyDomainDkimResponse
* VerifyDomainDkimResponse `object`: Returns CNAME records that you must publish to the DNS server of your domain to set up Easy DKIM with Amazon SES.
  * DkimTokens **required** [VerificationTokenList](#verificationtokenlist)

### VerifyDomainIdentityRequest
* VerifyDomainIdentityRequest `object`: Represents a request to begin Amazon SES domain verification and to generate the TXT records that you must publish to the DNS server of your domain to complete the verification. For information about domain verification, see the <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-domains.html">Amazon SES Developer Guide</a>.
  * Domain **required** [Domain](#domain)

### VerifyDomainIdentityResponse
* VerifyDomainIdentityResponse `object`: Returns a TXT record that you must publish to the DNS server of your domain to complete domain verification with Amazon SES.
  * VerificationToken **required** [VerificationToken](#verificationtoken)

### VerifyEmailAddressRequest
* VerifyEmailAddressRequest `object`: Represents a request to begin email address verification with Amazon SES. For information about email address verification, see the <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-email-addresses.html">Amazon SES Developer Guide</a>.
  * EmailAddress **required** [Address](#address)

### VerifyEmailIdentityRequest
* VerifyEmailIdentityRequest `object`: Represents a request to begin email address verification with Amazon SES. For information about email address verification, see the <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-email-addresses.html">Amazon SES Developer Guide</a>.
  * EmailAddress **required** [Address](#address)

### VerifyEmailIdentityResponse
* VerifyEmailIdentityResponse `object`: An empty element returned on a successful request.

### WorkmailAction
* WorkmailAction `object`: <p>When included in a receipt rule, this action calls Amazon WorkMail and, optionally, publishes a notification to Amazon Simple Notification Service (Amazon SNS). You will typically not use this action directly because Amazon WorkMail adds the rule automatically during its setup procedure.</p> <p>For information using a receipt rule to call Amazon WorkMail, see the <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-action-workmail.html">Amazon SES Developer Guide</a>.</p>
  * OrganizationArn **required** [AmazonResourceName](#amazonresourcename)
  * TopicArn [AmazonResourceName](#amazonresourcename)


