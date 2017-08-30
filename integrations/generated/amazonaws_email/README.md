# @datafire/amazonaws_email

Client library for Amazon Simple Email Service

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_email
```

```js
let datafire = require('datafire');
let amazonaws_email = require('@datafire/amazonaws_email').create();

amazonaws_email.CloneReceiptRuleSet({}).then(data => {
  console.log(data);
})
```

## Description
<fullname>Amazon Simple Email Service</fullname> <p> This is the API Reference for Amazon Simple Email Service (Amazon SES). This documentation is intended to be used in conjunction with the <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/Welcome.html">Amazon SES Developer Guide</a>. </p> <note> <p> For a list of Amazon SES endpoints to use in service requests, see <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/regions.html">Regions and Amazon SES</a> in the Amazon SES Developer Guide. </p> </note>

## Actions
### CloneReceiptRuleSet



```js
amazonaws_email.CloneReceiptRuleSet({
  "RuleSetName": "",
  "OriginalRuleSetName": ""
}, context)
```

#### Parameters
* OriginalRuleSetName (string) **required**
* RuleSetName (string) **required**

### CreateConfigurationSet



```js
amazonaws_email.CreateConfigurationSet({
  "ConfigurationSet": {
    "Name": ""
  }
}, context)
```

#### Parameters
* ConfigurationSet (object) **required** - <p>The name of the configuration set.</p> <p>Configuration sets enable you to publish email sending events. For information about using configuration sets, see the <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p>

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

#### Parameters
* ConfigurationSetName (string) **required**
* EventDestination (object) **required** - <p>Contains information about the event destination to which the specified email sending events are published.</p> <note> <p>When you create or update an event destination, you must provide one, and only one, destination. The destination can be either Amazon CloudWatch or Amazon Kinesis Firehose.</p> </note> <p>Event destinations are associated with configuration sets, which enable you to publish email sending events to Amazon CloudWatch or Amazon Kinesis Firehose. For information about using configuration sets, see the <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p>

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

#### Parameters
* Filter (object) **required** - <p>A receipt IP address filter enables you to specify whether to accept or reject mail originating from an IP address or range of IP addresses.</p> <p>For information about setting up IP address filters, see the <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-ip-filters.html">Amazon SES Developer Guide</a>.</p>

### CreateReceiptRule



```js
amazonaws_email.CreateReceiptRule({
  "RuleSetName": "",
  "Rule": {
    "Name": ""
  }
}, context)
```

#### Parameters
* After (string)
* Rule (object) **required** - <p>Receipt rules enable you to specify which actions Amazon SES should take when it receives mail on behalf of one or more email addresses or domains that you own.</p> <p>Each receipt rule defines a set of email addresses or domains to which it applies. If the email addresses or domains match at least one recipient address of the message, Amazon SES executes all of the receipt rule's actions on the message.</p> <p>For information about setting up receipt rules, see the <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rules.html">Amazon SES Developer Guide</a>.</p>
* RuleSetName (string) **required**

### CreateReceiptRuleSet



```js
amazonaws_email.CreateReceiptRuleSet({
  "RuleSetName": ""
}, context)
```

#### Parameters
* RuleSetName (string) **required**

### DeleteConfigurationSet



```js
amazonaws_email.DeleteConfigurationSet({
  "ConfigurationSetName": ""
}, context)
```

#### Parameters
* ConfigurationSetName (string) **required**

### DeleteConfigurationSetEventDestination



```js
amazonaws_email.DeleteConfigurationSetEventDestination({
  "ConfigurationSetName": "",
  "EventDestinationName": ""
}, context)
```

#### Parameters
* ConfigurationSetName (string) **required**
* EventDestinationName (string) **required**

### DeleteIdentity



```js
amazonaws_email.DeleteIdentity({
  "Identity": ""
}, context)
```

#### Parameters
* Identity (string) **required**

### DeleteIdentityPolicy



```js
amazonaws_email.DeleteIdentityPolicy({
  "Identity": "",
  "PolicyName": ""
}, context)
```

#### Parameters
* Identity (string) **required**
* PolicyName (string) **required**

### DeleteReceiptFilter



```js
amazonaws_email.DeleteReceiptFilter({
  "FilterName": ""
}, context)
```

#### Parameters
* FilterName (string) **required**

### DeleteReceiptRule



```js
amazonaws_email.DeleteReceiptRule({
  "RuleSetName": "",
  "RuleName": ""
}, context)
```

#### Parameters
* RuleName (string) **required**
* RuleSetName (string) **required**

### DeleteReceiptRuleSet



```js
amazonaws_email.DeleteReceiptRuleSet({
  "RuleSetName": ""
}, context)
```

#### Parameters
* RuleSetName (string) **required**

### DeleteVerifiedEmailAddress



```js
amazonaws_email.DeleteVerifiedEmailAddress({
  "EmailAddress": ""
}, context)
```

#### Parameters
* EmailAddress (string) **required**

### DescribeActiveReceiptRuleSet



```js
amazonaws_email.DescribeActiveReceiptRuleSet({}, context)
```

#### Parameters
*This action has no parameters*

### DescribeConfigurationSet



```js
amazonaws_email.DescribeConfigurationSet({
  "ConfigurationSetName": ""
}, context)
```

#### Parameters
* ConfigurationSetAttributeNames (array)
* ConfigurationSetName (string) **required**

### DescribeReceiptRule



```js
amazonaws_email.DescribeReceiptRule({
  "RuleSetName": "",
  "RuleName": ""
}, context)
```

#### Parameters
* RuleName (string) **required**
* RuleSetName (string) **required**

### DescribeReceiptRuleSet



```js
amazonaws_email.DescribeReceiptRuleSet({
  "RuleSetName": ""
}, context)
```

#### Parameters
* RuleSetName (string) **required**

### GetIdentityDkimAttributes



```js
amazonaws_email.GetIdentityDkimAttributes({
  "Identities": []
}, context)
```

#### Parameters
* Identities (array) **required**

### GetIdentityMailFromDomainAttributes



```js
amazonaws_email.GetIdentityMailFromDomainAttributes({
  "Identities": []
}, context)
```

#### Parameters
* Identities (array) **required**

### GetIdentityNotificationAttributes



```js
amazonaws_email.GetIdentityNotificationAttributes({
  "Identities": []
}, context)
```

#### Parameters
* Identities (array) **required**

### GetIdentityPolicies



```js
amazonaws_email.GetIdentityPolicies({
  "Identity": "",
  "PolicyNames": []
}, context)
```

#### Parameters
* Identity (string) **required**
* PolicyNames (array) **required**

### GetIdentityVerificationAttributes



```js
amazonaws_email.GetIdentityVerificationAttributes({
  "Identities": []
}, context)
```

#### Parameters
* Identities (array) **required**

### GetSendQuota



```js
amazonaws_email.GetSendQuota({}, context)
```

#### Parameters
*This action has no parameters*

### GetSendStatistics



```js
amazonaws_email.GetSendStatistics({}, context)
```

#### Parameters
*This action has no parameters*

### ListConfigurationSets



```js
amazonaws_email.ListConfigurationSets({}, context)
```

#### Parameters
* MaxItems (integer)
* NextToken (string)

### ListIdentities



```js
amazonaws_email.ListIdentities({}, context)
```

#### Parameters
* MaxItems (string)
* NextToken (string)
* IdentityType (string)
* MaxItems (integer)
* NextToken (string)

### ListIdentityPolicies



```js
amazonaws_email.ListIdentityPolicies({
  "Identity": ""
}, context)
```

#### Parameters
* Identity (string) **required**

### ListReceiptFilters



```js
amazonaws_email.ListReceiptFilters({}, context)
```

#### Parameters
*This action has no parameters*

### ListReceiptRuleSets



```js
amazonaws_email.ListReceiptRuleSets({}, context)
```

#### Parameters
* NextToken (string)

### ListVerifiedEmailAddresses



```js
amazonaws_email.ListVerifiedEmailAddresses({}, context)
```

#### Parameters
*This action has no parameters*

### PutIdentityPolicy



```js
amazonaws_email.PutIdentityPolicy({
  "Identity": "",
  "PolicyName": "",
  "Policy": ""
}, context)
```

#### Parameters
* Identity (string) **required**
* Policy (string) **required**
* PolicyName (string) **required**

### ReorderReceiptRuleSet



```js
amazonaws_email.ReorderReceiptRuleSet({
  "RuleSetName": "",
  "RuleNames": []
}, context)
```

#### Parameters
* RuleNames (array) **required**
* RuleSetName (string) **required**

### SendBounce



```js
amazonaws_email.SendBounce({
  "OriginalMessageId": "",
  "BounceSender": "",
  "BouncedRecipientInfoList": []
}, context)
```

#### Parameters
* BounceSender (string) **required**
* BounceSenderArn (string)
* BouncedRecipientInfoList (array) **required**
* Explanation (string)
* MessageDsn (object) - <p>Message-related information to include in the Delivery Status Notification (DSN) when an email that Amazon SES receives on your behalf bounces.</p> <p>For information about receiving email through Amazon SES, see the <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email.html">Amazon SES Developer Guide</a>.</p>
* OriginalMessageId (string) **required**

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

#### Parameters
* ConfigurationSetName (string)
* Destination (object) **required** - <p>Represents the destination of the message, consisting of To:, CC:, and BCC: fields.</p> <p> By default, the string must be 7-bit ASCII. If the text must contain any other characters, then you must use MIME encoded-word syntax (RFC 2047) instead of a literal string. MIME encoded-word syntax uses the following form: <code>=?charset?encoding?encoded-text?=</code>. For more information, see <a href="http://tools.ietf.org/html/rfc2047">RFC 2047</a>. </p>
* Message (object) **required** - Represents the message to be sent, composed of a subject and a body.
* ReplyToAddresses (array)
* ReturnPath (string)
* ReturnPathArn (string)
* Source (string) **required**
* SourceArn (string)
* Tags (array)

### SendRawEmail



```js
amazonaws_email.SendRawEmail({
  "RawMessage": {
    "Data": ""
  }
}, context)
```

#### Parameters
* ConfigurationSetName (string)
* Destinations (array)
* FromArn (string)
* RawMessage (object) **required** - Represents the raw data of the message.
* ReturnPathArn (string)
* Source (string)
* SourceArn (string)
* Tags (array)

### SetActiveReceiptRuleSet



```js
amazonaws_email.SetActiveReceiptRuleSet({}, context)
```

#### Parameters
* RuleSetName (string)

### SetIdentityDkimEnabled



```js
amazonaws_email.SetIdentityDkimEnabled({
  "Identity": "",
  "DkimEnabled": true
}, context)
```

#### Parameters
* DkimEnabled (boolean) **required**
* Identity (string) **required**

### SetIdentityFeedbackForwardingEnabled



```js
amazonaws_email.SetIdentityFeedbackForwardingEnabled({
  "Identity": "",
  "ForwardingEnabled": true
}, context)
```

#### Parameters
* ForwardingEnabled (boolean) **required**
* Identity (string) **required**

### SetIdentityHeadersInNotificationsEnabled



```js
amazonaws_email.SetIdentityHeadersInNotificationsEnabled({
  "Identity": "",
  "NotificationType": "",
  "Enabled": true
}, context)
```

#### Parameters
* Enabled (boolean) **required**
* Identity (string) **required**
* NotificationType (string) **required**

### SetIdentityMailFromDomain



```js
amazonaws_email.SetIdentityMailFromDomain({
  "Identity": ""
}, context)
```

#### Parameters
* BehaviorOnMXFailure (string)
* Identity (string) **required**
* MailFromDomain (string)

### SetIdentityNotificationTopic



```js
amazonaws_email.SetIdentityNotificationTopic({
  "Identity": "",
  "NotificationType": ""
}, context)
```

#### Parameters
* Identity (string) **required**
* NotificationType (string) **required**
* SnsTopic (string)

### SetReceiptRulePosition



```js
amazonaws_email.SetReceiptRulePosition({
  "RuleSetName": "",
  "RuleName": ""
}, context)
```

#### Parameters
* After (string)
* RuleName (string) **required**
* RuleSetName (string) **required**

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

#### Parameters
* ConfigurationSetName (string) **required**
* EventDestination (object) **required** - <p>Contains information about the event destination to which the specified email sending events are published.</p> <note> <p>When you create or update an event destination, you must provide one, and only one, destination. The destination can be either Amazon CloudWatch or Amazon Kinesis Firehose.</p> </note> <p>Event destinations are associated with configuration sets, which enable you to publish email sending events to Amazon CloudWatch or Amazon Kinesis Firehose. For information about using configuration sets, see the <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p>

### UpdateReceiptRule



```js
amazonaws_email.UpdateReceiptRule({
  "RuleSetName": "",
  "Rule": {
    "Name": ""
  }
}, context)
```

#### Parameters
* Rule (object) **required** - <p>Receipt rules enable you to specify which actions Amazon SES should take when it receives mail on behalf of one or more email addresses or domains that you own.</p> <p>Each receipt rule defines a set of email addresses or domains to which it applies. If the email addresses or domains match at least one recipient address of the message, Amazon SES executes all of the receipt rule's actions on the message.</p> <p>For information about setting up receipt rules, see the <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rules.html">Amazon SES Developer Guide</a>.</p>
* RuleSetName (string) **required**

### VerifyDomainDkim



```js
amazonaws_email.VerifyDomainDkim({
  "Domain": ""
}, context)
```

#### Parameters
* Domain (string) **required**

### VerifyDomainIdentity



```js
amazonaws_email.VerifyDomainIdentity({
  "Domain": ""
}, context)
```

#### Parameters
* Domain (string) **required**

### VerifyEmailAddress



```js
amazonaws_email.VerifyEmailAddress({
  "EmailAddress": ""
}, context)
```

#### Parameters
* EmailAddress (string) **required**

### VerifyEmailIdentity



```js
amazonaws_email.VerifyEmailIdentity({
  "EmailAddress": ""
}, context)
```

#### Parameters
* EmailAddress (string) **required**

