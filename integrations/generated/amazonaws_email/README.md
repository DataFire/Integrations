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
amazonaws_email.CloneReceiptRuleSet({}, context)
```


### CreateConfigurationSet



```js
amazonaws_email.CreateConfigurationSet({}, context)
```


### CreateConfigurationSetEventDestination



```js
amazonaws_email.CreateConfigurationSetEventDestination({}, context)
```


### CreateReceiptFilter



```js
amazonaws_email.CreateReceiptFilter({}, context)
```


### CreateReceiptRule



```js
amazonaws_email.CreateReceiptRule({}, context)
```


### CreateReceiptRuleSet



```js
amazonaws_email.CreateReceiptRuleSet({}, context)
```


### DeleteConfigurationSet



```js
amazonaws_email.DeleteConfigurationSet({}, context)
```


### DeleteConfigurationSetEventDestination



```js
amazonaws_email.DeleteConfigurationSetEventDestination({}, context)
```


### DeleteIdentity



```js
amazonaws_email.DeleteIdentity({}, context)
```


### DeleteIdentityPolicy



```js
amazonaws_email.DeleteIdentityPolicy({}, context)
```


### DeleteReceiptFilter



```js
amazonaws_email.DeleteReceiptFilter({}, context)
```


### DeleteReceiptRule



```js
amazonaws_email.DeleteReceiptRule({}, context)
```


### DeleteReceiptRuleSet



```js
amazonaws_email.DeleteReceiptRuleSet({}, context)
```


### DeleteVerifiedEmailAddress



```js
amazonaws_email.DeleteVerifiedEmailAddress({}, context)
```


### DescribeActiveReceiptRuleSet



```js
amazonaws_email.DescribeActiveReceiptRuleSet({}, context)
```


### DescribeConfigurationSet



```js
amazonaws_email.DescribeConfigurationSet({}, context)
```


### DescribeReceiptRule



```js
amazonaws_email.DescribeReceiptRule({}, context)
```


### DescribeReceiptRuleSet



```js
amazonaws_email.DescribeReceiptRuleSet({}, context)
```


### GetIdentityDkimAttributes



```js
amazonaws_email.GetIdentityDkimAttributes({}, context)
```


### GetIdentityMailFromDomainAttributes



```js
amazonaws_email.GetIdentityMailFromDomainAttributes({}, context)
```


### GetIdentityNotificationAttributes



```js
amazonaws_email.GetIdentityNotificationAttributes({}, context)
```


### GetIdentityPolicies



```js
amazonaws_email.GetIdentityPolicies({}, context)
```


### GetIdentityVerificationAttributes



```js
amazonaws_email.GetIdentityVerificationAttributes({}, context)
```


### GetSendQuota



```js
amazonaws_email.GetSendQuota({}, context)
```


### GetSendStatistics



```js
amazonaws_email.GetSendStatistics({}, context)
```


### ListConfigurationSets



```js
amazonaws_email.ListConfigurationSets({}, context)
```


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


### ListReceiptFilters



```js
amazonaws_email.ListReceiptFilters({}, context)
```


### ListReceiptRuleSets



```js
amazonaws_email.ListReceiptRuleSets({}, context)
```


### ListVerifiedEmailAddresses



```js
amazonaws_email.ListVerifiedEmailAddresses({}, context)
```


### PutIdentityPolicy



```js
amazonaws_email.PutIdentityPolicy({}, context)
```


### ReorderReceiptRuleSet



```js
amazonaws_email.ReorderReceiptRuleSet({}, context)
```


### SendBounce



```js
amazonaws_email.SendBounce({}, context)
```


### SendEmail



```js
amazonaws_email.SendEmail({}, context)
```


### SendRawEmail



```js
amazonaws_email.SendRawEmail({}, context)
```


### SetActiveReceiptRuleSet



```js
amazonaws_email.SetActiveReceiptRuleSet({}, context)
```


### SetIdentityDkimEnabled



```js
amazonaws_email.SetIdentityDkimEnabled({}, context)
```


### SetIdentityFeedbackForwardingEnabled



```js
amazonaws_email.SetIdentityFeedbackForwardingEnabled({}, context)
```


### SetIdentityHeadersInNotificationsEnabled



```js
amazonaws_email.SetIdentityHeadersInNotificationsEnabled({}, context)
```


### SetIdentityMailFromDomain



```js
amazonaws_email.SetIdentityMailFromDomain({}, context)
```


### SetIdentityNotificationTopic



```js
amazonaws_email.SetIdentityNotificationTopic({}, context)
```


### SetReceiptRulePosition



```js
amazonaws_email.SetReceiptRulePosition({}, context)
```


### UpdateConfigurationSetEventDestination



```js
amazonaws_email.UpdateConfigurationSetEventDestination({}, context)
```


### UpdateReceiptRule



```js
amazonaws_email.UpdateReceiptRule({}, context)
```


### VerifyDomainDkim



```js
amazonaws_email.VerifyDomainDkim({}, context)
```


### VerifyDomainIdentity



```js
amazonaws_email.VerifyDomainIdentity({}, context)
```


### VerifyEmailAddress



```js
amazonaws_email.VerifyEmailAddress({}, context)
```


### VerifyEmailIdentity



```js
amazonaws_email.VerifyEmailIdentity({}, context)
```


