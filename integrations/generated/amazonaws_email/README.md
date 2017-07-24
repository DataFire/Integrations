# @datafire/amazonaws_email

Client library for Amazon Simple Email Service

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_email
```

```js
let datafire = require('datafire');
let amazonaws_email = require('@datafire/amazonaws_email').actions;
let context = new datafire.Context();

amazonaws_email.CloneReceiptRuleSet({}, context).then(data => {
  console.log(data);
})
```

## Description
<fullname>Amazon Simple Email Service</fullname> <p> This is the API Reference for Amazon Simple Email Service (Amazon SES). This documentation is intended to be used in conjunction with the <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/Welcome.html">Amazon SES Developer Guide</a>. </p> <note> <p> For a list of Amazon SES endpoints to use in service requests, see <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/regions.html">Regions and Amazon SES</a> in the Amazon SES Developer Guide. </p> </note>

## Actions
### CloneReceiptRuleSet



```js
amazonaws_email.CloneReceiptRuleSet({}, context)
```

#### Parameters

### CreateConfigurationSet



```js
amazonaws_email.CreateConfigurationSet({}, context)
```

#### Parameters

### CreateConfigurationSetEventDestination



```js
amazonaws_email.CreateConfigurationSetEventDestination({}, context)
```

#### Parameters

### CreateReceiptFilter



```js
amazonaws_email.CreateReceiptFilter({}, context)
```

#### Parameters

### CreateReceiptRule



```js
amazonaws_email.CreateReceiptRule({}, context)
```

#### Parameters

### CreateReceiptRuleSet



```js
amazonaws_email.CreateReceiptRuleSet({}, context)
```

#### Parameters

### DeleteConfigurationSet



```js
amazonaws_email.DeleteConfigurationSet({}, context)
```

#### Parameters

### DeleteConfigurationSetEventDestination



```js
amazonaws_email.DeleteConfigurationSetEventDestination({}, context)
```

#### Parameters

### DeleteIdentity



```js
amazonaws_email.DeleteIdentity({}, context)
```

#### Parameters

### DeleteIdentityPolicy



```js
amazonaws_email.DeleteIdentityPolicy({}, context)
```

#### Parameters

### DeleteReceiptFilter



```js
amazonaws_email.DeleteReceiptFilter({}, context)
```

#### Parameters

### DeleteReceiptRule



```js
amazonaws_email.DeleteReceiptRule({}, context)
```

#### Parameters

### DeleteReceiptRuleSet



```js
amazonaws_email.DeleteReceiptRuleSet({}, context)
```

#### Parameters

### DeleteVerifiedEmailAddress



```js
amazonaws_email.DeleteVerifiedEmailAddress({}, context)
```

#### Parameters

### DescribeActiveReceiptRuleSet



```js
amazonaws_email.DescribeActiveReceiptRuleSet({}, context)
```

#### Parameters

### DescribeConfigurationSet



```js
amazonaws_email.DescribeConfigurationSet({}, context)
```

#### Parameters

### DescribeReceiptRule



```js
amazonaws_email.DescribeReceiptRule({}, context)
```

#### Parameters

### DescribeReceiptRuleSet



```js
amazonaws_email.DescribeReceiptRuleSet({}, context)
```

#### Parameters

### GetIdentityDkimAttributes



```js
amazonaws_email.GetIdentityDkimAttributes({}, context)
```

#### Parameters

### GetIdentityMailFromDomainAttributes



```js
amazonaws_email.GetIdentityMailFromDomainAttributes({}, context)
```

#### Parameters

### GetIdentityNotificationAttributes



```js
amazonaws_email.GetIdentityNotificationAttributes({}, context)
```

#### Parameters

### GetIdentityPolicies



```js
amazonaws_email.GetIdentityPolicies({}, context)
```

#### Parameters

### GetIdentityVerificationAttributes



```js
amazonaws_email.GetIdentityVerificationAttributes({}, context)
```

#### Parameters

### GetSendQuota



```js
amazonaws_email.GetSendQuota({}, context)
```

#### Parameters

### GetSendStatistics



```js
amazonaws_email.GetSendStatistics({}, context)
```

#### Parameters

### ListConfigurationSets



```js
amazonaws_email.ListConfigurationSets({}, context)
```

#### Parameters

### ListIdentities



```js
amazonaws_email.ListIdentities({}, context)
```

#### Parameters
* MaxItems (string)
* NextToken (string)

### ListIdentityPolicies



```js
amazonaws_email.ListIdentityPolicies({}, context)
```

#### Parameters

### ListReceiptFilters



```js
amazonaws_email.ListReceiptFilters({}, context)
```

#### Parameters

### ListReceiptRuleSets



```js
amazonaws_email.ListReceiptRuleSets({}, context)
```

#### Parameters

### ListVerifiedEmailAddresses



```js
amazonaws_email.ListVerifiedEmailAddresses({}, context)
```

#### Parameters

### PutIdentityPolicy



```js
amazonaws_email.PutIdentityPolicy({}, context)
```

#### Parameters

### ReorderReceiptRuleSet



```js
amazonaws_email.ReorderReceiptRuleSet({}, context)
```

#### Parameters

### SendBounce



```js
amazonaws_email.SendBounce({}, context)
```

#### Parameters

### SendEmail



```js
amazonaws_email.SendEmail({}, context)
```

#### Parameters

### SendRawEmail



```js
amazonaws_email.SendRawEmail({}, context)
```

#### Parameters

### SetActiveReceiptRuleSet



```js
amazonaws_email.SetActiveReceiptRuleSet({}, context)
```

#### Parameters

### SetIdentityDkimEnabled



```js
amazonaws_email.SetIdentityDkimEnabled({}, context)
```

#### Parameters

### SetIdentityFeedbackForwardingEnabled



```js
amazonaws_email.SetIdentityFeedbackForwardingEnabled({}, context)
```

#### Parameters

### SetIdentityHeadersInNotificationsEnabled



```js
amazonaws_email.SetIdentityHeadersInNotificationsEnabled({}, context)
```

#### Parameters

### SetIdentityMailFromDomain



```js
amazonaws_email.SetIdentityMailFromDomain({}, context)
```

#### Parameters

### SetIdentityNotificationTopic



```js
amazonaws_email.SetIdentityNotificationTopic({}, context)
```

#### Parameters

### SetReceiptRulePosition



```js
amazonaws_email.SetReceiptRulePosition({}, context)
```

#### Parameters

### UpdateConfigurationSetEventDestination



```js
amazonaws_email.UpdateConfigurationSetEventDestination({}, context)
```

#### Parameters

### UpdateReceiptRule



```js
amazonaws_email.UpdateReceiptRule({}, context)
```

#### Parameters

### VerifyDomainDkim



```js
amazonaws_email.VerifyDomainDkim({}, context)
```

#### Parameters

### VerifyDomainIdentity



```js
amazonaws_email.VerifyDomainIdentity({}, context)
```

#### Parameters

### VerifyEmailAddress



```js
amazonaws_email.VerifyEmailAddress({}, context)
```

#### Parameters

### VerifyEmailIdentity



```js
amazonaws_email.VerifyEmailIdentity({}, context)
```

#### Parameters

