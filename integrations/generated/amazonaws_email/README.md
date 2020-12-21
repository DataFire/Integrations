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

.then(data => {
  console.log(data);
});
```

## Description

<fullname>Amazon Simple Email Service</fullname> <p> This document contains reference information for the <a href="https://aws.amazon.com/ses/">Amazon Simple Email Service</a> (Amazon SES) API, version 2010-12-01. This document is best used in conjunction with the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/Welcome.html">Amazon SES Developer Guide</a>. </p> <note> <p> For a list of Amazon SES endpoints to use in service requests, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/regions.html">Regions and Amazon SES</a> in the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/Welcome.html">Amazon SES Developer Guide</a>.</p> </note>

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
  * RuleSetName **required** `string`
  * OriginalRuleSetName **required** `string`

#### Output
* output [CloneReceiptRuleSetResponse](#clonereceiptrulesetresponse)

### CloneReceiptRuleSet



```js
amazonaws_email.CloneReceiptRuleSet({
  "RuleSetName": null,
  "OriginalRuleSetName": null
}, context)
```

#### Input
* input `object`
  * OriginalRuleSetName **required**
  * RuleSetName **required**

#### Output
* output [CloneReceiptRuleSetResponse](#clonereceiptrulesetresponse)

### CreateConfigurationSet



```js
amazonaws_email.CreateConfigurationSet({
  "ConfigurationSet": {}
}, context)
```

#### Input
* input `object`
  * ConfigurationSet **required** `object`

#### Output
* output [CreateConfigurationSetResponse](#createconfigurationsetresponse)

### CreateConfigurationSet



```js
amazonaws_email.CreateConfigurationSet({
  "ConfigurationSet": null
}, context)
```

#### Input
* input `object`
  * ConfigurationSet **required**
    * Name **required**

#### Output
* output [CreateConfigurationSetResponse](#createconfigurationsetresponse)

### CreateConfigurationSetEventDestination



```js
amazonaws_email.CreateConfigurationSetEventDestination({
  "ConfigurationSetName": "",
  "EventDestination": {}
}, context)
```

#### Input
* input `object`
  * ConfigurationSetName **required** `string`
  * EventDestination **required** `object`

#### Output
* output [CreateConfigurationSetEventDestinationResponse](#createconfigurationseteventdestinationresponse)

### CreateConfigurationSetEventDestination



```js
amazonaws_email.CreateConfigurationSetEventDestination({
  "ConfigurationSetName": null,
  "EventDestination": null
}, context)
```

#### Input
* input `object`
  * ConfigurationSetName **required**
  * EventDestination **required**
    * CloudWatchDestination
      * DimensionConfigurations **required**
        * items [CloudWatchDimensionConfiguration](#cloudwatchdimensionconfiguration)
    * Enabled
    * KinesisFirehoseDestination
      * DeliveryStreamARN **required**
      * IAMRoleARN **required**
    * MatchingEventTypes **required**
      * items [EventType](#eventtype)
    * Name **required**
    * SNSDestination
      * TopicARN **required**

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
  * ConfigurationSetName **required** `string`
  * TrackingOptions **required** `object`

#### Output
* output [CreateConfigurationSetTrackingOptionsResponse](#createconfigurationsettrackingoptionsresponse)

### CreateConfigurationSetTrackingOptions



```js
amazonaws_email.CreateConfigurationSetTrackingOptions({
  "ConfigurationSetName": null,
  "TrackingOptions": {}
}, context)
```

#### Input
* input `object`
  * ConfigurationSetName **required**
  * TrackingOptions **required** [TrackingOptions](#trackingoptions)

#### Output
* output [CreateConfigurationSetTrackingOptionsResponse](#createconfigurationsettrackingoptionsresponse)

### CreateCustomVerificationEmailTemplate



```js
amazonaws_email.CreateCustomVerificationEmailTemplate({
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
  * FromEmailAddress **required** `string`
  * TemplateSubject **required** `string`
  * TemplateContent **required** `string`
  * SuccessRedirectionURL **required** `string`
  * FailureRedirectionURL **required** `string`

#### Output
*Output schema unknown*

### CreateCustomVerificationEmailTemplate



```js
amazonaws_email.CreateCustomVerificationEmailTemplate({
  "TemplateName": null,
  "FromEmailAddress": null,
  "TemplateSubject": null,
  "TemplateContent": null,
  "SuccessRedirectionURL": null,
  "FailureRedirectionURL": null
}, context)
```

#### Input
* input `object`
  * FailureRedirectionURL **required**
  * FromEmailAddress **required**
  * SuccessRedirectionURL **required**
  * TemplateContent **required**
  * TemplateName **required**
  * TemplateSubject **required**

#### Output
*Output schema unknown*

### CreateReceiptFilter



```js
amazonaws_email.CreateReceiptFilter({
  "Filter": {}
}, context)
```

#### Input
* input `object`
  * Filter **required** `object`

#### Output
* output [CreateReceiptFilterResponse](#createreceiptfilterresponse)

### CreateReceiptFilter



```js
amazonaws_email.CreateReceiptFilter({
  "Filter": null
}, context)
```

#### Input
* input `object`
  * Filter **required**
    * IpFilter **required**
      * Cidr **required**
      * Policy **required**
    * Name **required**

#### Output
* output [CreateReceiptFilterResponse](#createreceiptfilterresponse)

### CreateReceiptRule



```js
amazonaws_email.CreateReceiptRule({
  "RuleSetName": "",
  "Rule": {}
}, context)
```

#### Input
* input `object`
  * RuleSetName **required** `string`
  * After `string`
  * Rule **required** `object`

#### Output
* output [CreateReceiptRuleResponse](#createreceiptruleresponse)

### CreateReceiptRule



```js
amazonaws_email.CreateReceiptRule({
  "RuleSetName": null,
  "Rule": null
}, context)
```

#### Input
* input `object`
  * After
  * Rule **required**
    * Actions
      * items [ReceiptAction](#receiptaction)
    * Enabled
    * Name **required**
    * Recipients
      * items [Recipient](#recipient)
    * ScanEnabled
    * TlsPolicy
  * RuleSetName **required**

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
  * RuleSetName **required** `string`

#### Output
* output [CreateReceiptRuleSetResponse](#createreceiptrulesetresponse)

### CreateReceiptRuleSet



```js
amazonaws_email.CreateReceiptRuleSet({
  "RuleSetName": null
}, context)
```

#### Input
* input `object`
  * RuleSetName **required**

#### Output
* output [CreateReceiptRuleSetResponse](#createreceiptrulesetresponse)

### CreateTemplate



```js
amazonaws_email.CreateTemplate({
  "Template": {}
}, context)
```

#### Input
* input `object`
  * Template **required** `object`

#### Output
* output [CreateTemplateResponse](#createtemplateresponse)

### CreateTemplate



```js
amazonaws_email.CreateTemplate({
  "Template": null
}, context)
```

#### Input
* input `object`
  * Template **required**
    * HtmlPart
    * SubjectPart
    * TemplateName **required**
    * TextPart

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
  * ConfigurationSetName **required** `string`

#### Output
* output [DeleteConfigurationSetResponse](#deleteconfigurationsetresponse)

### DeleteConfigurationSet



```js
amazonaws_email.DeleteConfigurationSet({
  "ConfigurationSetName": null
}, context)
```

#### Input
* input `object`
  * ConfigurationSetName **required**

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
  * ConfigurationSetName **required** `string`
  * EventDestinationName **required** `string`

#### Output
* output [DeleteConfigurationSetEventDestinationResponse](#deleteconfigurationseteventdestinationresponse)

### DeleteConfigurationSetEventDestination



```js
amazonaws_email.DeleteConfigurationSetEventDestination({
  "ConfigurationSetName": null,
  "EventDestinationName": null
}, context)
```

#### Input
* input `object`
  * ConfigurationSetName **required**
  * EventDestinationName **required**

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
  * ConfigurationSetName **required** `string`

#### Output
* output [DeleteConfigurationSetTrackingOptionsResponse](#deleteconfigurationsettrackingoptionsresponse)

### DeleteConfigurationSetTrackingOptions



```js
amazonaws_email.DeleteConfigurationSetTrackingOptions({
  "ConfigurationSetName": null
}, context)
```

#### Input
* input `object`
  * ConfigurationSetName **required**

#### Output
* output [DeleteConfigurationSetTrackingOptionsResponse](#deleteconfigurationsettrackingoptionsresponse)

### DeleteCustomVerificationEmailTemplate



```js
amazonaws_email.DeleteCustomVerificationEmailTemplate({
  "TemplateName": ""
}, context)
```

#### Input
* input `object`
  * TemplateName **required** `string`

#### Output
*Output schema unknown*

### DeleteCustomVerificationEmailTemplate



```js
amazonaws_email.DeleteCustomVerificationEmailTemplate({
  "TemplateName": null
}, context)
```

#### Input
* input `object`
  * TemplateName **required**

#### Output
*Output schema unknown*

### DeleteIdentity



```js
amazonaws_email.DeleteIdentity({
  "Identity": ""
}, context)
```

#### Input
* input `object`
  * Identity **required** `string`

#### Output
* output [DeleteIdentityResponse](#deleteidentityresponse)

### DeleteIdentity



```js
amazonaws_email.DeleteIdentity({
  "Identity": null
}, context)
```

#### Input
* input `object`
  * Identity **required**

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
  * Identity **required** `string`
  * PolicyName **required** `string`

#### Output
* output [DeleteIdentityPolicyResponse](#deleteidentitypolicyresponse)

### DeleteIdentityPolicy



```js
amazonaws_email.DeleteIdentityPolicy({
  "Identity": null,
  "PolicyName": null
}, context)
```

#### Input
* input `object`
  * Identity **required**
  * PolicyName **required**

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
  * FilterName **required** `string`

#### Output
* output [DeleteReceiptFilterResponse](#deletereceiptfilterresponse)

### DeleteReceiptFilter



```js
amazonaws_email.DeleteReceiptFilter({
  "FilterName": null
}, context)
```

#### Input
* input `object`
  * FilterName **required**

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
  * RuleSetName **required** `string`
  * RuleName **required** `string`

#### Output
* output [DeleteReceiptRuleResponse](#deletereceiptruleresponse)

### DeleteReceiptRule



```js
amazonaws_email.DeleteReceiptRule({
  "RuleSetName": null,
  "RuleName": null
}, context)
```

#### Input
* input `object`
  * RuleName **required**
  * RuleSetName **required**

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
  * RuleSetName **required** `string`

#### Output
* output [DeleteReceiptRuleSetResponse](#deletereceiptrulesetresponse)

### DeleteReceiptRuleSet



```js
amazonaws_email.DeleteReceiptRuleSet({
  "RuleSetName": null
}, context)
```

#### Input
* input `object`
  * RuleSetName **required**

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
  * TemplateName **required** `string`

#### Output
* output [DeleteTemplateResponse](#deletetemplateresponse)

### DeleteTemplate



```js
amazonaws_email.DeleteTemplate({
  "TemplateName": null
}, context)
```

#### Input
* input `object`
  * TemplateName **required**

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
  * EmailAddress **required** `string`

#### Output
*Output schema unknown*

### DeleteVerifiedEmailAddress



```js
amazonaws_email.DeleteVerifiedEmailAddress({
  "EmailAddress": null
}, context)
```

#### Input
* input `object`
  * EmailAddress **required**

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
  * ConfigurationSetName **required** `string`
  * ConfigurationSetAttributeNames `array`

#### Output
* output [DescribeConfigurationSetResponse](#describeconfigurationsetresponse)

### DescribeConfigurationSet



```js
amazonaws_email.DescribeConfigurationSet({
  "ConfigurationSetName": null
}, context)
```

#### Input
* input `object`
  * ConfigurationSetAttributeNames
    * items [ConfigurationSetAttribute](#configurationsetattribute)
  * ConfigurationSetName **required**

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
  * RuleSetName **required** `string`
  * RuleName **required** `string`

#### Output
* output [DescribeReceiptRuleResponse](#describereceiptruleresponse)

### DescribeReceiptRule



```js
amazonaws_email.DescribeReceiptRule({
  "RuleSetName": null,
  "RuleName": null
}, context)
```

#### Input
* input `object`
  * RuleName **required**
  * RuleSetName **required**

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
  * RuleSetName **required** `string`

#### Output
* output [DescribeReceiptRuleSetResponse](#describereceiptrulesetresponse)

### DescribeReceiptRuleSet



```js
amazonaws_email.DescribeReceiptRuleSet({
  "RuleSetName": null
}, context)
```

#### Input
* input `object`
  * RuleSetName **required**

#### Output
* output [DescribeReceiptRuleSetResponse](#describereceiptrulesetresponse)

### GetAccountSendingEnabled



```js
amazonaws_email.GetAccountSendingEnabled({}, context)
```

#### Input
* input `object`

#### Output
* output [GetAccountSendingEnabledResponse](#getaccountsendingenabledresponse)

### GetAccountSendingEnabled



```js
amazonaws_email.GetAccountSendingEnabled({}, context)
```

#### Input
* input `object`

#### Output
* output [GetAccountSendingEnabledResponse](#getaccountsendingenabledresponse)

### GetCustomVerificationEmailTemplate



```js
amazonaws_email.GetCustomVerificationEmailTemplate({
  "TemplateName": ""
}, context)
```

#### Input
* input `object`
  * TemplateName **required** `string`

#### Output
* output [GetCustomVerificationEmailTemplateResponse](#getcustomverificationemailtemplateresponse)

### GetCustomVerificationEmailTemplate



```js
amazonaws_email.GetCustomVerificationEmailTemplate({
  "TemplateName": null
}, context)
```

#### Input
* input `object`
  * TemplateName **required**

#### Output
* output [GetCustomVerificationEmailTemplateResponse](#getcustomverificationemailtemplateresponse)

### GetIdentityDkimAttributes



```js
amazonaws_email.GetIdentityDkimAttributes({
  "Identities": []
}, context)
```

#### Input
* input `object`
  * Identities **required** `array`

#### Output
* output [GetIdentityDkimAttributesResponse](#getidentitydkimattributesresponse)

### GetIdentityDkimAttributes



```js
amazonaws_email.GetIdentityDkimAttributes({
  "Identities": null
}, context)
```

#### Input
* input `object`
  * Identities **required**
    * items [Identity](#identity)

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
  * Identities **required** `array`

#### Output
* output [GetIdentityMailFromDomainAttributesResponse](#getidentitymailfromdomainattributesresponse)

### GetIdentityMailFromDomainAttributes



```js
amazonaws_email.GetIdentityMailFromDomainAttributes({
  "Identities": null
}, context)
```

#### Input
* input `object`
  * Identities **required**
    * items [Identity](#identity)

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
  * Identities **required** `array`

#### Output
* output [GetIdentityNotificationAttributesResponse](#getidentitynotificationattributesresponse)

### GetIdentityNotificationAttributes



```js
amazonaws_email.GetIdentityNotificationAttributes({
  "Identities": null
}, context)
```

#### Input
* input `object`
  * Identities **required**
    * items [Identity](#identity)

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
  * Identity **required** `string`
  * PolicyNames **required** `array`

#### Output
* output [GetIdentityPoliciesResponse](#getidentitypoliciesresponse)

### GetIdentityPolicies



```js
amazonaws_email.GetIdentityPolicies({
  "Identity": null,
  "PolicyNames": null
}, context)
```

#### Input
* input `object`
  * Identity **required**
  * PolicyNames **required**
    * items [PolicyName](#policyname)

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
  * Identities **required** `array`

#### Output
* output [GetIdentityVerificationAttributesResponse](#getidentityverificationattributesresponse)

### GetIdentityVerificationAttributes



```js
amazonaws_email.GetIdentityVerificationAttributes({
  "Identities": null
}, context)
```

#### Input
* input `object`
  * Identities **required**
    * items [Identity](#identity)

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
  * TemplateName **required** `string`

#### Output
* output [GetTemplateResponse](#gettemplateresponse)

### GetTemplate



```js
amazonaws_email.GetTemplate({
  "TemplateName": null
}, context)
```

#### Input
* input `object`
  * TemplateName **required**

#### Output
* output [GetTemplateResponse](#gettemplateresponse)

### ListConfigurationSets



```js
amazonaws_email.ListConfigurationSets({}, context)
```

#### Input
* input `object`
  * NextToken `string`
  * MaxItems `integer`

#### Output
* output [ListConfigurationSetsResponse](#listconfigurationsetsresponse)

### ListConfigurationSets



```js
amazonaws_email.ListConfigurationSets({}, context)
```

#### Input
* input `object`
  * MaxItems
  * NextToken

#### Output
* output [ListConfigurationSetsResponse](#listconfigurationsetsresponse)

### ListCustomVerificationEmailTemplates



```js
amazonaws_email.ListCustomVerificationEmailTemplates({}, context)
```

#### Input
* input `object`
  * NextToken `string`
  * MaxResults `integer`

#### Output
* output [ListCustomVerificationEmailTemplatesResponse](#listcustomverificationemailtemplatesresponse)

### ListCustomVerificationEmailTemplates



```js
amazonaws_email.ListCustomVerificationEmailTemplates({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken

#### Output
* output [ListCustomVerificationEmailTemplatesResponse](#listcustomverificationemailtemplatesresponse)

### ListIdentities



```js
amazonaws_email.ListIdentities({}, context)
```

#### Input
* input `object`
  * IdentityType `string`
  * NextToken `string`
  * MaxItems `integer`

#### Output
* output [ListIdentitiesResponse](#listidentitiesresponse)

### ListIdentities



```js
amazonaws_email.ListIdentities({}, context)
```

#### Input
* input `object`
  * MaxItems `string`
  * NextToken `string`
  * IdentityType
  * MaxItems
  * NextToken

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
  * Identity **required** `string`

#### Output
* output [ListIdentityPoliciesResponse](#listidentitypoliciesresponse)

### ListIdentityPolicies



```js
amazonaws_email.ListIdentityPolicies({
  "Identity": null
}, context)
```

#### Input
* input `object`
  * Identity **required**

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
  * NextToken `string`

#### Output
* output [ListReceiptRuleSetsResponse](#listreceiptrulesetsresponse)

### ListReceiptRuleSets



```js
amazonaws_email.ListReceiptRuleSets({}, context)
```

#### Input
* input `object`
  * NextToken

#### Output
* output [ListReceiptRuleSetsResponse](#listreceiptrulesetsresponse)

### ListTemplates



```js
amazonaws_email.ListTemplates({}, context)
```

#### Input
* input `object`
  * NextToken `string`
  * MaxItems `integer`

#### Output
* output [ListTemplatesResponse](#listtemplatesresponse)

### ListTemplates



```js
amazonaws_email.ListTemplates({}, context)
```

#### Input
* input `object`
  * MaxItems
  * NextToken

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

### ListVerifiedEmailAddresses



```js
amazonaws_email.ListVerifiedEmailAddresses({}, context)
```

#### Input
* input `object`

#### Output
* output [ListVerifiedEmailAddressesResponse](#listverifiedemailaddressesresponse)

### PutConfigurationSetDeliveryOptions



```js
amazonaws_email.PutConfigurationSetDeliveryOptions({
  "ConfigurationSetName": ""
}, context)
```

#### Input
* input `object`
  * ConfigurationSetName **required** `string`
  * DeliveryOptions `object`

#### Output
* output [PutConfigurationSetDeliveryOptionsResponse](#putconfigurationsetdeliveryoptionsresponse)

### PutConfigurationSetDeliveryOptions



```js
amazonaws_email.PutConfigurationSetDeliveryOptions({
  "ConfigurationSetName": null
}, context)
```

#### Input
* input `object`
  * ConfigurationSetName **required**
  * DeliveryOptions
    * TlsPolicy

#### Output
* output [PutConfigurationSetDeliveryOptionsResponse](#putconfigurationsetdeliveryoptionsresponse)

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
  * Identity **required** `string`
  * PolicyName **required** `string`
  * Policy **required** `string`

#### Output
* output [PutIdentityPolicyResponse](#putidentitypolicyresponse)

### PutIdentityPolicy



```js
amazonaws_email.PutIdentityPolicy({
  "Identity": null,
  "PolicyName": null,
  "Policy": null
}, context)
```

#### Input
* input `object`
  * Identity **required**
  * Policy **required**
  * PolicyName **required**

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
  * RuleSetName **required** `string`
  * RuleNames **required** `array`

#### Output
* output [ReorderReceiptRuleSetResponse](#reorderreceiptrulesetresponse)

### ReorderReceiptRuleSet



```js
amazonaws_email.ReorderReceiptRuleSet({
  "RuleSetName": null,
  "RuleNames": null
}, context)
```

#### Input
* input `object`
  * RuleNames **required**
    * items [ReceiptRuleName](#receiptrulename)
  * RuleSetName **required**

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
  * OriginalMessageId **required** `string`
  * BounceSender **required** `string`
  * Explanation `string`
  * MessageDsn `object`
  * BouncedRecipientInfoList **required** `array`
  * BounceSenderArn `string`

#### Output
* output [SendBounceResponse](#sendbounceresponse)

### SendBounce



```js
amazonaws_email.SendBounce({
  "OriginalMessageId": null,
  "BounceSender": null,
  "BouncedRecipientInfoList": null
}, context)
```

#### Input
* input `object`
  * BounceSender **required**
  * BounceSenderArn
  * BouncedRecipientInfoList **required**
    * items [BouncedRecipientInfo](#bouncedrecipientinfo)
  * Explanation
  * MessageDsn
    * ArrivalDate
    * ExtensionFields
      * items [ExtensionField](#extensionfield)
    * ReportingMta **required**
  * OriginalMessageId **required**

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
  * Source **required** `string`
  * SourceArn `string`
  * ReplyToAddresses `array`
  * ReturnPath `string`
  * ReturnPathArn `string`
  * ConfigurationSetName `string`
  * DefaultTags `array`
  * Template **required** `string`
  * TemplateArn `string`
  * DefaultTemplateData `string`
  * Destinations **required** `array`

#### Output
* output [SendBulkTemplatedEmailResponse](#sendbulktemplatedemailresponse)

### SendBulkTemplatedEmail



```js
amazonaws_email.SendBulkTemplatedEmail({
  "Source": null,
  "Template": null,
  "Destinations": null
}, context)
```

#### Input
* input `object`
  * ConfigurationSetName
  * DefaultTags
    * items [MessageTag](#messagetag)
  * DefaultTemplateData
  * Destinations **required**
    * items [BulkEmailDestination](#bulkemaildestination)
  * ReplyToAddresses
    * items [Address](#address)
  * ReturnPath
  * ReturnPathArn
  * Source **required**
  * SourceArn
  * Template **required**
  * TemplateArn

#### Output
* output [SendBulkTemplatedEmailResponse](#sendbulktemplatedemailresponse)

### SendCustomVerificationEmail



```js
amazonaws_email.SendCustomVerificationEmail({
  "EmailAddress": "",
  "TemplateName": ""
}, context)
```

#### Input
* input `object`
  * EmailAddress **required** `string`
  * TemplateName **required** `string`
  * ConfigurationSetName `string`

#### Output
* output [SendCustomVerificationEmailResponse](#sendcustomverificationemailresponse)

### SendCustomVerificationEmail



```js
amazonaws_email.SendCustomVerificationEmail({
  "EmailAddress": null,
  "TemplateName": null
}, context)
```

#### Input
* input `object`
  * ConfigurationSetName
  * EmailAddress **required**
  * TemplateName **required**

#### Output
* output [SendCustomVerificationEmailResponse](#sendcustomverificationemailresponse)

### SendEmail



```js
amazonaws_email.SendEmail({
  "Source": "",
  "Destination": {},
  "Message": {}
}, context)
```

#### Input
* input `object`
  * Source **required** `string`
  * Destination **required** `object`
  * Message **required** `object`
  * ReplyToAddresses `array`
  * ReturnPath `string`
  * SourceArn `string`
  * ReturnPathArn `string`
  * Tags `array`
  * ConfigurationSetName `string`

#### Output
* output [SendEmailResponse](#sendemailresponse)

### SendEmail



```js
amazonaws_email.SendEmail({
  "Source": null,
  "Destination": null,
  "Message": null
}, context)
```

#### Input
* input `object`
  * ConfigurationSetName
  * Destination **required**
    * BccAddresses
      * items [Address](#address)
    * CcAddresses
      * items [Address](#address)
    * ToAddresses
      * items [Address](#address)
  * Message **required**
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
  * ReplyToAddresses
    * items [Address](#address)
  * ReturnPath
  * ReturnPathArn
  * Source **required**
  * SourceArn
  * Tags
    * items [MessageTag](#messagetag)

#### Output
* output [SendEmailResponse](#sendemailresponse)

### SendRawEmail



```js
amazonaws_email.SendRawEmail({
  "RawMessage": {}
}, context)
```

#### Input
* input `object`
  * Source `string`
  * Destinations `array`
  * RawMessage **required** `object`
  * FromArn `string`
  * SourceArn `string`
  * ReturnPathArn `string`
  * Tags `array`
  * ConfigurationSetName `string`

#### Output
* output [SendRawEmailResponse](#sendrawemailresponse)

### SendRawEmail



```js
amazonaws_email.SendRawEmail({
  "RawMessage": null
}, context)
```

#### Input
* input `object`
  * ConfigurationSetName
  * Destinations
    * items [Address](#address)
  * FromArn
  * RawMessage **required**
    * Data **required**
  * ReturnPathArn
  * Source
  * SourceArn
  * Tags
    * items [MessageTag](#messagetag)

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
  * Source **required** `string`
  * Destination **required** `object`
  * ReplyToAddresses `array`
  * ReturnPath `string`
  * SourceArn `string`
  * ReturnPathArn `string`
  * Tags `array`
  * ConfigurationSetName `string`
  * Template **required** `string`
  * TemplateArn `string`
  * TemplateData **required** `string`

#### Output
* output [SendTemplatedEmailResponse](#sendtemplatedemailresponse)

### SendTemplatedEmail



```js
amazonaws_email.SendTemplatedEmail({
  "Source": null,
  "Destination": null,
  "Template": null,
  "TemplateData": null
}, context)
```

#### Input
* input `object`
  * ConfigurationSetName
  * Destination **required**
    * BccAddresses
      * items [Address](#address)
    * CcAddresses
      * items [Address](#address)
    * ToAddresses
      * items [Address](#address)
  * ReplyToAddresses
    * items [Address](#address)
  * ReturnPath
  * ReturnPathArn
  * Source **required**
  * SourceArn
  * Tags
    * items [MessageTag](#messagetag)
  * Template **required**
  * TemplateArn
  * TemplateData **required**

#### Output
* output [SendTemplatedEmailResponse](#sendtemplatedemailresponse)

### SetActiveReceiptRuleSet



```js
amazonaws_email.SetActiveReceiptRuleSet({}, context)
```

#### Input
* input `object`
  * RuleSetName `string`

#### Output
* output [SetActiveReceiptRuleSetResponse](#setactivereceiptrulesetresponse)

### SetActiveReceiptRuleSet



```js
amazonaws_email.SetActiveReceiptRuleSet({}, context)
```

#### Input
* input `object`
  * RuleSetName

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
  * Identity **required** `string`
  * DkimEnabled **required** `boolean`

#### Output
* output [SetIdentityDkimEnabledResponse](#setidentitydkimenabledresponse)

### SetIdentityDkimEnabled



```js
amazonaws_email.SetIdentityDkimEnabled({
  "Identity": null,
  "DkimEnabled": null
}, context)
```

#### Input
* input `object`
  * DkimEnabled **required**
  * Identity **required**

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
  * Identity **required** `string`
  * ForwardingEnabled **required** `boolean`

#### Output
* output [SetIdentityFeedbackForwardingEnabledResponse](#setidentityfeedbackforwardingenabledresponse)

### SetIdentityFeedbackForwardingEnabled



```js
amazonaws_email.SetIdentityFeedbackForwardingEnabled({
  "Identity": null,
  "ForwardingEnabled": null
}, context)
```

#### Input
* input `object`
  * ForwardingEnabled **required**
  * Identity **required**

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
  * Identity **required** `string`
  * NotificationType **required** `string`
  * Enabled **required** `boolean`

#### Output
* output [SetIdentityHeadersInNotificationsEnabledResponse](#setidentityheadersinnotificationsenabledresponse)

### SetIdentityHeadersInNotificationsEnabled



```js
amazonaws_email.SetIdentityHeadersInNotificationsEnabled({
  "Identity": null,
  "NotificationType": null,
  "Enabled": null
}, context)
```

#### Input
* input `object`
  * Enabled **required**
  * Identity **required**
  * NotificationType **required**

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
  * Identity **required** `string`
  * MailFromDomain `string`
  * BehaviorOnMXFailure `string`

#### Output
* output [SetIdentityMailFromDomainResponse](#setidentitymailfromdomainresponse)

### SetIdentityMailFromDomain



```js
amazonaws_email.SetIdentityMailFromDomain({
  "Identity": null
}, context)
```

#### Input
* input `object`
  * BehaviorOnMXFailure
  * Identity **required**
  * MailFromDomain

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
  * Identity **required** `string`
  * NotificationType **required** `string`
  * SnsTopic `string`

#### Output
* output [SetIdentityNotificationTopicResponse](#setidentitynotificationtopicresponse)

### SetIdentityNotificationTopic



```js
amazonaws_email.SetIdentityNotificationTopic({
  "Identity": null,
  "NotificationType": null
}, context)
```

#### Input
* input `object`
  * Identity **required**
  * NotificationType **required**
  * SnsTopic

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
  * RuleSetName **required** `string`
  * RuleName **required** `string`
  * After `string`

#### Output
* output [SetReceiptRulePositionResponse](#setreceiptrulepositionresponse)

### SetReceiptRulePosition



```js
amazonaws_email.SetReceiptRulePosition({
  "RuleSetName": null,
  "RuleName": null
}, context)
```

#### Input
* input `object`
  * After
  * RuleName **required**
  * RuleSetName **required**

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
  * TemplateName **required** `string`
  * TemplateData **required** `string`

#### Output
* output [TestRenderTemplateResponse](#testrendertemplateresponse)

### TestRenderTemplate



```js
amazonaws_email.TestRenderTemplate({
  "TemplateName": null,
  "TemplateData": null
}, context)
```

#### Input
* input `object`
  * TemplateData **required**
  * TemplateName **required**

#### Output
* output [TestRenderTemplateResponse](#testrendertemplateresponse)

### UpdateAccountSendingEnabled



```js
amazonaws_email.UpdateAccountSendingEnabled({}, context)
```

#### Input
* input `object`
  * Enabled `boolean`

#### Output
*Output schema unknown*

### UpdateAccountSendingEnabled



```js
amazonaws_email.UpdateAccountSendingEnabled({}, context)
```

#### Input
* input `object`
  * Enabled

#### Output
*Output schema unknown*

### UpdateConfigurationSetEventDestination



```js
amazonaws_email.UpdateConfigurationSetEventDestination({
  "ConfigurationSetName": "",
  "EventDestination": {}
}, context)
```

#### Input
* input `object`
  * ConfigurationSetName **required** `string`
  * EventDestination **required** `object`

#### Output
* output [UpdateConfigurationSetEventDestinationResponse](#updateconfigurationseteventdestinationresponse)

### UpdateConfigurationSetEventDestination



```js
amazonaws_email.UpdateConfigurationSetEventDestination({
  "ConfigurationSetName": null,
  "EventDestination": null
}, context)
```

#### Input
* input `object`
  * ConfigurationSetName **required**
  * EventDestination **required**
    * CloudWatchDestination
      * DimensionConfigurations **required**
        * items [CloudWatchDimensionConfiguration](#cloudwatchdimensionconfiguration)
    * Enabled
    * KinesisFirehoseDestination
      * DeliveryStreamARN **required**
      * IAMRoleARN **required**
    * MatchingEventTypes **required**
      * items [EventType](#eventtype)
    * Name **required**
    * SNSDestination
      * TopicARN **required**

#### Output
* output [UpdateConfigurationSetEventDestinationResponse](#updateconfigurationseteventdestinationresponse)

### UpdateConfigurationSetReputationMetricsEnabled



```js
amazonaws_email.UpdateConfigurationSetReputationMetricsEnabled({
  "ConfigurationSetName": "",
  "Enabled": true
}, context)
```

#### Input
* input `object`
  * ConfigurationSetName **required** `string`
  * Enabled **required** `boolean`

#### Output
*Output schema unknown*

### UpdateConfigurationSetReputationMetricsEnabled



```js
amazonaws_email.UpdateConfigurationSetReputationMetricsEnabled({
  "ConfigurationSetName": null,
  "Enabled": null
}, context)
```

#### Input
* input `object`
  * ConfigurationSetName **required**
  * Enabled **required**

#### Output
*Output schema unknown*

### UpdateConfigurationSetSendingEnabled



```js
amazonaws_email.UpdateConfigurationSetSendingEnabled({
  "ConfigurationSetName": "",
  "Enabled": true
}, context)
```

#### Input
* input `object`
  * ConfigurationSetName **required** `string`
  * Enabled **required** `boolean`

#### Output
*Output schema unknown*

### UpdateConfigurationSetSendingEnabled



```js
amazonaws_email.UpdateConfigurationSetSendingEnabled({
  "ConfigurationSetName": null,
  "Enabled": null
}, context)
```

#### Input
* input `object`
  * ConfigurationSetName **required**
  * Enabled **required**

#### Output
*Output schema unknown*

### UpdateConfigurationSetTrackingOptions



```js
amazonaws_email.UpdateConfigurationSetTrackingOptions({
  "ConfigurationSetName": "",
  "TrackingOptions": {}
}, context)
```

#### Input
* input `object`
  * ConfigurationSetName **required** `string`
  * TrackingOptions **required** `object`

#### Output
* output [UpdateConfigurationSetTrackingOptionsResponse](#updateconfigurationsettrackingoptionsresponse)

### UpdateConfigurationSetTrackingOptions



```js
amazonaws_email.UpdateConfigurationSetTrackingOptions({
  "ConfigurationSetName": null,
  "TrackingOptions": {}
}, context)
```

#### Input
* input `object`
  * ConfigurationSetName **required**
  * TrackingOptions **required** [TrackingOptions](#trackingoptions)

#### Output
* output [UpdateConfigurationSetTrackingOptionsResponse](#updateconfigurationsettrackingoptionsresponse)

### UpdateCustomVerificationEmailTemplate



```js
amazonaws_email.UpdateCustomVerificationEmailTemplate({
  "TemplateName": ""
}, context)
```

#### Input
* input `object`
  * TemplateName **required** `string`
  * FromEmailAddress `string`
  * TemplateSubject `string`
  * TemplateContent `string`
  * SuccessRedirectionURL `string`
  * FailureRedirectionURL `string`

#### Output
*Output schema unknown*

### UpdateCustomVerificationEmailTemplate



```js
amazonaws_email.UpdateCustomVerificationEmailTemplate({
  "TemplateName": null
}, context)
```

#### Input
* input `object`
  * FailureRedirectionURL
  * FromEmailAddress
  * SuccessRedirectionURL
  * TemplateContent
  * TemplateName **required**
  * TemplateSubject

#### Output
*Output schema unknown*

### UpdateReceiptRule



```js
amazonaws_email.UpdateReceiptRule({
  "RuleSetName": "",
  "Rule": {}
}, context)
```

#### Input
* input `object`
  * RuleSetName **required** `string`
  * Rule **required** `object`

#### Output
* output [UpdateReceiptRuleResponse](#updatereceiptruleresponse)

### UpdateReceiptRule



```js
amazonaws_email.UpdateReceiptRule({
  "RuleSetName": null,
  "Rule": null
}, context)
```

#### Input
* input `object`
  * Rule **required**
    * Actions
      * items [ReceiptAction](#receiptaction)
    * Enabled
    * Name **required**
    * Recipients
      * items [Recipient](#recipient)
    * ScanEnabled
    * TlsPolicy
  * RuleSetName **required**

#### Output
* output [UpdateReceiptRuleResponse](#updatereceiptruleresponse)

### UpdateTemplate



```js
amazonaws_email.UpdateTemplate({
  "Template": {}
}, context)
```

#### Input
* input `object`
  * Template **required** `object`

#### Output
* output [UpdateTemplateResponse](#updatetemplateresponse)

### UpdateTemplate



```js
amazonaws_email.UpdateTemplate({
  "Template": {
    "TemplateName": null
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
  * Domain **required** `string`

#### Output
* output [VerifyDomainDkimResponse](#verifydomaindkimresponse)

### VerifyDomainDkim



```js
amazonaws_email.VerifyDomainDkim({
  "Domain": null
}, context)
```

#### Input
* input `object`
  * Domain **required**

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
  * Domain **required** `string`

#### Output
* output [VerifyDomainIdentityResponse](#verifydomainidentityresponse)

### VerifyDomainIdentity



```js
amazonaws_email.VerifyDomainIdentity({
  "Domain": null
}, context)
```

#### Input
* input `object`
  * Domain **required**

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
  * EmailAddress **required** `string`

#### Output
*Output schema unknown*

### VerifyEmailAddress



```js
amazonaws_email.VerifyEmailAddress({
  "EmailAddress": null
}, context)
```

#### Input
* input `object`
  * EmailAddress **required**

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
  * EmailAddress **required** `string`

#### Output
* output [VerifyEmailIdentityResponse](#verifyemailidentityresponse)

### VerifyEmailIdentity



```js
amazonaws_email.VerifyEmailIdentity({
  "EmailAddress": null
}, context)
```

#### Input
* input `object`
  * EmailAddress **required**

#### Output
* output [VerifyEmailIdentityResponse](#verifyemailidentityresponse)



## Definitions

### AccountSendingPausedException


### AddHeaderAction
* AddHeaderAction `object`: <p>When included in a receipt rule, this action adds a header to the received email.</p> <p>For information about adding a header using a receipt rule, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-action-add-header.html">Amazon SES Developer Guide</a>.</p>
  * HeaderName **required**
  * HeaderValue **required**

### Address
* Address `string`

### AddressList
* AddressList `array`
  * items [Address](#address)

### AlreadyExistsException


### AmazonResourceName
* AmazonResourceName `string`

### ArrivalDate
* ArrivalDate `string`

### BehaviorOnMXFailure
* BehaviorOnMXFailure `string` (values: UseDefaultValue, RejectMessage)

### Body
* Body `object`: Represents the body of the message. You can specify text, HTML, or both. If you use both, then the message should display correctly in the widest variety of email clients.
  * Html
    * Charset
    * Data **required**
  * Text
    * Charset
    * Data **required**

### BounceAction
* BounceAction `object`: <p>When included in a receipt rule, this action rejects the received email by returning a bounce response to the sender and, optionally, publishes a notification to Amazon Simple Notification Service (Amazon SNS).</p> <p>For information about sending a bounce message in response to a received email, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-action-bounce.html">Amazon SES Developer Guide</a>.</p>
  * Message **required**
  * Sender **required**
  * SmtpReplyCode **required**
  * StatusCode
  * TopicArn

### BounceMessage
* BounceMessage `string`

### BounceSmtpReplyCode
* BounceSmtpReplyCode `string`

### BounceStatusCode
* BounceStatusCode `string`

### BounceType
* BounceType `string` (values: DoesNotExist, MessageTooLarge, ExceededQuota, ContentRejected, Undefined, TemporaryFailure)

### BouncedRecipientInfo
* BouncedRecipientInfo `object`: <p>Recipient-related information to include in the Delivery Status Notification (DSN) when an email that Amazon SES receives on your behalf bounces.</p> <p>For information about receiving email through Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email.html">Amazon SES Developer Guide</a>.</p>
  * BounceType
  * Recipient **required**
  * RecipientArn
  * RecipientDsnFields
    * Action **required**
    * DiagnosticCode
    * ExtensionFields
      * items [ExtensionField](#extensionfield)
    * FinalRecipient
    * LastAttemptDate
    * RemoteMta
    * Status **required**

### BouncedRecipientInfoList
* BouncedRecipientInfoList `array`
  * items [BouncedRecipientInfo](#bouncedrecipientinfo)

### BulkEmailDestination
* BulkEmailDestination `object`: An array that contains one or more Destinations, as well as the tags and replacement data associated with each of those Destinations.
  * Destination **required** [Destination](#destination)
  * ReplacementTags
    * items [MessageTag](#messagetag)
  * ReplacementTemplateData

### BulkEmailDestinationList
* BulkEmailDestinationList `array`
  * items [BulkEmailDestination](#bulkemaildestination)

### BulkEmailDestinationStatus
* BulkEmailDestinationStatus `object`: An object that contains the response from the <code>SendBulkTemplatedEmail</code> operation.
  * Error
  * MessageId
  * Status

### BulkEmailDestinationStatusList
* BulkEmailDestinationStatusList `array`
  * items [BulkEmailDestinationStatus](#bulkemaildestinationstatus)

### BulkEmailStatus
* BulkEmailStatus `string` (values: Success, MessageRejected, MailFromDomainNotVerified, ConfigurationSetDoesNotExist, TemplateDoesNotExist, AccountSuspended, AccountThrottled, AccountDailyQuotaExceeded, InvalidSendingPoolName, AccountSendingPaused, ConfigurationSetSendingPaused, InvalidParameterValue, TransientFailure, Failed)

### CannotDeleteException


### Charset
* Charset `string`

### Cidr
* Cidr `string`

### CloneReceiptRuleSetRequest
* CloneReceiptRuleSetRequest `object`: Represents a request to create a receipt rule set by cloning an existing one. You use receipt rule sets to receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>.
  * OriginalRuleSetName **required**
  * RuleSetName **required**

### CloneReceiptRuleSetResponse
* CloneReceiptRuleSetResponse `object`: An empty element returned on a successful request.

### CloudWatchDestination
* CloudWatchDestination `object`: <p>Contains information associated with an Amazon CloudWatch event destination to which email sending events are published.</p> <p>Event destinations, such as Amazon CloudWatch, are associated with configuration sets, which enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p>
  * DimensionConfigurations **required**
    * items [CloudWatchDimensionConfiguration](#cloudwatchdimensionconfiguration)

### CloudWatchDimensionConfiguration
* CloudWatchDimensionConfiguration `object`: <p>Contains the dimension configuration to use when you publish email sending events to Amazon CloudWatch.</p> <p>For information about publishing email sending events to Amazon CloudWatch, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p>
  * DefaultDimensionValue **required**
  * DimensionName **required**
  * DimensionValueSource **required**

### CloudWatchDimensionConfigurations
* CloudWatchDimensionConfigurations `array`
  * items [CloudWatchDimensionConfiguration](#cloudwatchdimensionconfiguration)

### ConfigurationSet
* ConfigurationSet `object`: <p>The name of the configuration set.</p> <p>Configuration sets let you create groups of rules that you can apply to the emails you send using Amazon SES. For more information about using configuration sets, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/using-configuration-sets.html">Using Amazon SES Configuration Sets</a> in the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/">Amazon SES Developer Guide</a>.</p>
  * Name **required**

### ConfigurationSetAlreadyExistsException


### ConfigurationSetAttribute
* ConfigurationSetAttribute `string` (values: eventDestinations, trackingOptions, deliveryOptions, reputationOptions)

### ConfigurationSetAttributeList
* ConfigurationSetAttributeList `array`
  * items [ConfigurationSetAttribute](#configurationsetattribute)

### ConfigurationSetDoesNotExistException


### ConfigurationSetName
* ConfigurationSetName `string`

### ConfigurationSetSendingPausedException


### ConfigurationSets
* ConfigurationSets `array`
  * items [ConfigurationSet](#configurationset)

### Content
* Content `object`: <p>Represents textual data, plus an optional character set specification.</p> <p>By default, the text must be 7-bit ASCII, due to the constraints of the SMTP protocol. If the text must contain any other characters, then you must also specify a character set. Examples include UTF-8, ISO-8859-1, and Shift_JIS.</p>
  * Charset
  * Data **required**

### Counter
* Counter `integer`

### CreateConfigurationSetEventDestinationRequest
* CreateConfigurationSetEventDestinationRequest `object`: Represents a request to create a configuration set event destination. A configuration set event destination, which can be either Amazon CloudWatch or Amazon Kinesis Firehose, describes an AWS service in which Amazon SES publishes the email sending events associated with a configuration set. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.
  * ConfigurationSetName **required**
  * EventDestination **required**
    * CloudWatchDestination
      * DimensionConfigurations **required**
        * items [CloudWatchDimensionConfiguration](#cloudwatchdimensionconfiguration)
    * Enabled
    * KinesisFirehoseDestination
      * DeliveryStreamARN **required**
      * IAMRoleARN **required**
    * MatchingEventTypes **required**
      * items [EventType](#eventtype)
    * Name **required**
    * SNSDestination
      * TopicARN **required**

### CreateConfigurationSetEventDestinationResponse
* CreateConfigurationSetEventDestinationResponse `object`: An empty element returned on a successful request.

### CreateConfigurationSetRequest
* CreateConfigurationSetRequest `object`: Represents a request to create a configuration set. Configuration sets enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.
  * ConfigurationSet **required**
    * Name **required**

### CreateConfigurationSetResponse
* CreateConfigurationSetResponse `object`: An empty element returned on a successful request.

### CreateConfigurationSetTrackingOptionsRequest
* CreateConfigurationSetTrackingOptionsRequest `object`: Represents a request to create an open and click tracking option object in a configuration set. 
  * ConfigurationSetName **required**
  * TrackingOptions **required** [TrackingOptions](#trackingoptions)

### CreateConfigurationSetTrackingOptionsResponse
* CreateConfigurationSetTrackingOptionsResponse `object`: An empty element returned on a successful request.

### CreateCustomVerificationEmailTemplateRequest
* CreateCustomVerificationEmailTemplateRequest `object`: Represents a request to create a custom verification email template.
  * FailureRedirectionURL **required**
  * FromEmailAddress **required**
  * SuccessRedirectionURL **required**
  * TemplateContent **required**
  * TemplateName **required**
  * TemplateSubject **required**

### CreateReceiptFilterRequest
* CreateReceiptFilterRequest `object`: Represents a request to create a new IP address filter. You use IP address filters when you receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>.
  * Filter **required**
    * IpFilter **required**
      * Cidr **required**
      * Policy **required**
    * Name **required**

### CreateReceiptFilterResponse
* CreateReceiptFilterResponse `object`: An empty element returned on a successful request.

### CreateReceiptRuleRequest
* CreateReceiptRuleRequest `object`: Represents a request to create a receipt rule. You use receipt rules to receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>.
  * After
  * Rule **required**
    * Actions
      * items [ReceiptAction](#receiptaction)
    * Enabled
    * Name **required**
    * Recipients
      * items [Recipient](#recipient)
    * ScanEnabled
    * TlsPolicy
  * RuleSetName **required**

### CreateReceiptRuleResponse
* CreateReceiptRuleResponse `object`: An empty element returned on a successful request.

### CreateReceiptRuleSetRequest
* CreateReceiptRuleSetRequest `object`: Represents a request to create an empty receipt rule set. You use receipt rule sets to receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>.
  * RuleSetName **required**

### CreateReceiptRuleSetResponse
* CreateReceiptRuleSetResponse `object`: An empty element returned on a successful request.

### CreateTemplateRequest
* CreateTemplateRequest `object`: Represents a request to create an email template. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>.
  * Template **required**
    * HtmlPart
    * SubjectPart
    * TemplateName **required**
    * TextPart

### CreateTemplateResponse
* CreateTemplateResponse `object`

### CustomMailFromStatus
* CustomMailFromStatus `string` (values: Pending, Success, Failed, TemporaryFailure)

### CustomRedirectDomain
* CustomRedirectDomain `string`

### CustomVerificationEmailInvalidContentException


### CustomVerificationEmailTemplate
* CustomVerificationEmailTemplate `object`: Contains information about a custom verification email template.
  * FailureRedirectionURL
  * FromEmailAddress
  * SuccessRedirectionURL
  * TemplateName
  * TemplateSubject

### CustomVerificationEmailTemplateAlreadyExistsException


### CustomVerificationEmailTemplateDoesNotExistException


### CustomVerificationEmailTemplates
* CustomVerificationEmailTemplates `array`
  * items [CustomVerificationEmailTemplate](#customverificationemailtemplate)

### DefaultDimensionValue
* DefaultDimensionValue `string`

### DeleteConfigurationSetEventDestinationRequest
* DeleteConfigurationSetEventDestinationRequest `object`: Represents a request to delete a configuration set event destination. Configuration set event destinations are associated with configuration sets, which enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.
  * ConfigurationSetName **required**
  * EventDestinationName **required**

### DeleteConfigurationSetEventDestinationResponse
* DeleteConfigurationSetEventDestinationResponse `object`: An empty element returned on a successful request.

### DeleteConfigurationSetRequest
* DeleteConfigurationSetRequest `object`: Represents a request to delete a configuration set. Configuration sets enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.
  * ConfigurationSetName **required**

### DeleteConfigurationSetResponse
* DeleteConfigurationSetResponse `object`: An empty element returned on a successful request.

### DeleteConfigurationSetTrackingOptionsRequest
* DeleteConfigurationSetTrackingOptionsRequest `object`: Represents a request to delete open and click tracking options in a configuration set. 
  * ConfigurationSetName **required**

### DeleteConfigurationSetTrackingOptionsResponse
* DeleteConfigurationSetTrackingOptionsResponse `object`: An empty element returned on a successful request.

### DeleteCustomVerificationEmailTemplateRequest
* DeleteCustomVerificationEmailTemplateRequest `object`: Represents a request to delete an existing custom verification email template.
  * TemplateName **required**

### DeleteIdentityPolicyRequest
* DeleteIdentityPolicyRequest `object`: Represents a request to delete a sending authorization policy for an identity. Sending authorization is an Amazon SES feature that enables you to authorize other senders to use your identities. For information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.
  * Identity **required**
  * PolicyName **required**

### DeleteIdentityPolicyResponse
* DeleteIdentityPolicyResponse `object`: An empty element returned on a successful request.

### DeleteIdentityRequest
* DeleteIdentityRequest `object`: Represents a request to delete one of your Amazon SES identities (an email address or domain).
  * Identity **required**

### DeleteIdentityResponse
* DeleteIdentityResponse `object`: An empty element returned on a successful request.

### DeleteReceiptFilterRequest
* DeleteReceiptFilterRequest `object`: Represents a request to delete an IP address filter. You use IP address filters when you receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>.
  * FilterName **required**

### DeleteReceiptFilterResponse
* DeleteReceiptFilterResponse `object`: An empty element returned on a successful request.

### DeleteReceiptRuleRequest
* DeleteReceiptRuleRequest `object`: Represents a request to delete a receipt rule. You use receipt rules to receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>.
  * RuleName **required**
  * RuleSetName **required**

### DeleteReceiptRuleResponse
* DeleteReceiptRuleResponse `object`: An empty element returned on a successful request.

### DeleteReceiptRuleSetRequest
* DeleteReceiptRuleSetRequest `object`: Represents a request to delete a receipt rule set and all of the receipt rules it contains. You use receipt rule sets to receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>.
  * RuleSetName **required**

### DeleteReceiptRuleSetResponse
* DeleteReceiptRuleSetResponse `object`: An empty element returned on a successful request.

### DeleteTemplateRequest
* DeleteTemplateRequest `object`: Represents a request to delete an email template. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>.
  * TemplateName **required**

### DeleteTemplateResponse
* DeleteTemplateResponse `object`

### DeleteVerifiedEmailAddressRequest
* DeleteVerifiedEmailAddressRequest `object`: Represents a request to delete an email address from the list of email addresses you have attempted to verify under your AWS account.
  * EmailAddress **required**

### DeliveryOptions
* DeliveryOptions `object`: Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS).
  * TlsPolicy

### DescribeActiveReceiptRuleSetRequest
* DescribeActiveReceiptRuleSetRequest `object`: Represents a request to return the metadata and receipt rules for the receipt rule set that is currently active. You use receipt rule sets to receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>.

### DescribeActiveReceiptRuleSetResponse
* DescribeActiveReceiptRuleSetResponse `object`: Represents the metadata and receipt rules for the receipt rule set that is currently active.
  * Metadata
    * CreatedTimestamp
    * Name
  * Rules
    * items [ReceiptRule](#receiptrule)

### DescribeConfigurationSetRequest
* DescribeConfigurationSetRequest `object`: Represents a request to return the details of a configuration set. Configuration sets enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.
  * ConfigurationSetAttributeNames
    * items [ConfigurationSetAttribute](#configurationsetattribute)
  * ConfigurationSetName **required**

### DescribeConfigurationSetResponse
* DescribeConfigurationSetResponse `object`: Represents the details of a configuration set. Configuration sets enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.
  * ConfigurationSet
    * Name **required**
  * DeliveryOptions [DeliveryOptions](#deliveryoptions)
  * EventDestinations
    * items [EventDestination](#eventdestination)
  * ReputationOptions
    * LastFreshStart
    * ReputationMetricsEnabled
    * SendingEnabled
  * TrackingOptions
    * CustomRedirectDomain

### DescribeReceiptRuleRequest
* DescribeReceiptRuleRequest `object`: Represents a request to return the details of a receipt rule. You use receipt rules to receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>.
  * RuleName **required**
  * RuleSetName **required**

### DescribeReceiptRuleResponse
* DescribeReceiptRuleResponse `object`: Represents the details of a receipt rule.
  * Rule
    * Actions
      * items [ReceiptAction](#receiptaction)
    * Enabled
    * Name **required**
    * Recipients
      * items [Recipient](#recipient)
    * ScanEnabled
    * TlsPolicy

### DescribeReceiptRuleSetRequest
* DescribeReceiptRuleSetRequest `object`: Represents a request to return the details of a receipt rule set. You use receipt rule sets to receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>.
  * RuleSetName **required**

### DescribeReceiptRuleSetResponse
* DescribeReceiptRuleSetResponse `object`: Represents the details of the specified receipt rule set.
  * Metadata
    * CreatedTimestamp
    * Name
  * Rules
    * items [ReceiptRule](#receiptrule)

### Destination
* Destination `object`: <p>Represents the destination of the message, consisting of To:, CC:, and BCC: fields.</p> <note> <p>Amazon SES does not support the SMTPUTF8 extension, as described in <a href="https://tools.ietf.org/html/rfc6531">RFC6531</a>. For this reason, the <i>local part</i> of a destination email address (the part of the email address that precedes the @ sign) may only contain <a href="https://en.wikipedia.org/wiki/Email_address#Local-part">7-bit ASCII characters</a>. If the <i>domain part</i> of an address (the part after the @ sign) contains non-ASCII characters, they must be encoded using Punycode, as described in <a href="https://tools.ietf.org/html/rfc3492.html">RFC3492</a>.</p> </note>
  * BccAddresses
    * items [Address](#address)
  * CcAddresses
    * items [Address](#address)
  * ToAddresses
    * items [Address](#address)

### DiagnosticCode
* DiagnosticCode `string`

### DimensionName
* DimensionName `string`

### DimensionValueSource
* DimensionValueSource `string` (values: messageTag, emailHeader, linkTag)

### DkimAttributes
* DkimAttributes `object`

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
* EventDestination `object`: <p>Contains information about the event destination that the specified email sending events will be published to.</p> <note> <p>When you create or update an event destination, you must provide one, and only one, destination. The destination can be Amazon CloudWatch, Amazon Kinesis Firehose or Amazon Simple Notification Service (Amazon SNS).</p> </note> <p>Event destinations are associated with configuration sets, which enable you to publish email sending events to Amazon CloudWatch, Amazon Kinesis Firehose, or Amazon Simple Notification Service (Amazon SNS). For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p>
  * CloudWatchDestination
    * DimensionConfigurations **required**
      * items [CloudWatchDimensionConfiguration](#cloudwatchdimensionconfiguration)
  * Enabled
  * KinesisFirehoseDestination
    * DeliveryStreamARN **required**
    * IAMRoleARN **required**
  * MatchingEventTypes **required**
    * items [EventType](#eventtype)
  * Name **required**
  * SNSDestination
    * TopicARN **required**

### EventDestinationAlreadyExistsException


### EventDestinationDoesNotExistException


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
* ExtensionField `object`: <p>Additional X-headers to include in the Delivery Status Notification (DSN) when an email that Amazon SES receives on your behalf bounces.</p> <p>For information about receiving email through Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email.html">Amazon SES Developer Guide</a>.</p>
  * Name **required**
  * Value **required**

### ExtensionFieldList
* ExtensionFieldList `array`
  * items [ExtensionField](#extensionfield)

### ExtensionFieldName
* ExtensionFieldName `string`

### ExtensionFieldValue
* ExtensionFieldValue `string`

### FailureRedirectionURL
* FailureRedirectionURL `string`

### FromAddress
* FromAddress `string`

### FromEmailAddressNotVerifiedException


### GetAccountSendingEnabledResponse
* GetAccountSendingEnabledResponse `object`: Represents a request to return the email sending status for your Amazon SES account in the current AWS Region.
  * Enabled

### GetCustomVerificationEmailTemplateRequest
* GetCustomVerificationEmailTemplateRequest `object`: Represents a request to retrieve an existing custom verification email template.
  * TemplateName **required**

### GetCustomVerificationEmailTemplateResponse
* GetCustomVerificationEmailTemplateResponse `object`: The content of the custom verification email template.
  * FailureRedirectionURL
  * FromEmailAddress
  * SuccessRedirectionURL
  * TemplateContent
  * TemplateName
  * TemplateSubject

### GetIdentityDkimAttributesRequest
* GetIdentityDkimAttributesRequest `object`: Represents a request for the status of Amazon SES Easy DKIM signing for an identity. For domain identities, this request also returns the DKIM tokens that are required for Easy DKIM signing, and whether Amazon SES successfully verified that these tokens were published. For more information about Easy DKIM, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Amazon SES Developer Guide</a>.
  * Identities **required**
    * items [Identity](#identity)

### GetIdentityDkimAttributesResponse
* GetIdentityDkimAttributesResponse `object`: Represents the status of Amazon SES Easy DKIM signing for an identity. For domain identities, this response also contains the DKIM tokens that are required for Easy DKIM signing, and whether Amazon SES successfully verified that these tokens were published.
  * DkimAttributes **required**

### GetIdentityMailFromDomainAttributesRequest
* GetIdentityMailFromDomainAttributesRequest `object`: Represents a request to return the Amazon SES custom MAIL FROM attributes for a list of identities. For information about using a custom MAIL FROM domain, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/mail-from.html">Amazon SES Developer Guide</a>.
  * Identities **required**
    * items [Identity](#identity)

### GetIdentityMailFromDomainAttributesResponse
* GetIdentityMailFromDomainAttributesResponse `object`: Represents the custom MAIL FROM attributes for a list of identities.
  * MailFromDomainAttributes **required**

### GetIdentityNotificationAttributesRequest
* GetIdentityNotificationAttributesRequest `object`: Represents a request to return the notification attributes for a list of identities you verified with Amazon SES. For information about Amazon SES notifications, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications.html">Amazon SES Developer Guide</a>.
  * Identities **required**
    * items [Identity](#identity)

### GetIdentityNotificationAttributesResponse
* GetIdentityNotificationAttributesResponse `object`: Represents the notification attributes for a list of identities.
  * NotificationAttributes **required**

### GetIdentityPoliciesRequest
* GetIdentityPoliciesRequest `object`: Represents a request to return the requested sending authorization policies for an identity. Sending authorization is an Amazon SES feature that enables you to authorize other senders to use your identities. For information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.
  * Identity **required**
  * PolicyNames **required**
    * items [PolicyName](#policyname)

### GetIdentityPoliciesResponse
* GetIdentityPoliciesResponse `object`: Represents the requested sending authorization policies.
  * Policies **required**

### GetIdentityVerificationAttributesRequest
* GetIdentityVerificationAttributesRequest `object`: Represents a request to return the Amazon SES verification status of a list of identities. For domain identities, this request also returns the verification token. For information about verifying identities with Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-addresses-and-domains.html">Amazon SES Developer Guide</a>.
  * Identities **required**
    * items [Identity](#identity)

### GetIdentityVerificationAttributesResponse
* GetIdentityVerificationAttributesResponse `object`: The Amazon SES verification status of a list of identities. For domain identities, this response also contains the verification token.
  * VerificationAttributes **required**

### GetSendQuotaResponse
* GetSendQuotaResponse `object`: Represents your Amazon SES daily sending quota, maximum send rate, and the number of emails you have sent in the last 24 hours.
  * Max24HourSend
  * MaxSendRate
  * SentLast24Hours

### GetSendStatisticsResponse
* GetSendStatisticsResponse `object`: Represents a list of data points. This list contains aggregated data from the previous two weeks of your sending activity with Amazon SES.
  * SendDataPoints
    * items [SendDataPoint](#senddatapoint)

### GetTemplateRequest
* GetTemplateRequest `object`
  * TemplateName **required**

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
  * DkimEnabled **required**
  * DkimTokens
    * items [VerificationToken](#verificationtoken)
  * DkimVerificationStatus **required**

### IdentityList
* IdentityList `array`
  * items [Identity](#identity)

### IdentityMailFromDomainAttributes
* IdentityMailFromDomainAttributes `object`: Represents the custom MAIL FROM domain attributes of a verified identity (email address or domain).
  * BehaviorOnMXFailure **required**
  * MailFromDomain **required**
  * MailFromDomainStatus **required**

### IdentityNotificationAttributes
* IdentityNotificationAttributes `object`: Represents the notification attributes of an identity, including whether an identity has Amazon Simple Notification Service (Amazon SNS) topics set for bounce, complaint, and/or delivery notifications, and whether feedback forwarding is enabled for bounce and complaint notifications.
  * BounceTopic **required**
  * ComplaintTopic **required**
  * DeliveryTopic **required**
  * ForwardingEnabled **required**
  * HeadersInBounceNotificationsEnabled
  * HeadersInComplaintNotificationsEnabled
  * HeadersInDeliveryNotificationsEnabled

### IdentityType
* IdentityType `string` (values: EmailAddress, Domain)

### IdentityVerificationAttributes
* IdentityVerificationAttributes `object`: Represents the verification attributes of a single identity.
  * VerificationStatus **required**
  * VerificationToken

### InvalidCloudWatchDestinationException


### InvalidConfigurationSetException


### InvalidDeliveryOptionsException


### InvalidFirehoseDestinationException


### InvalidLambdaFunctionException


### InvalidPolicyException


### InvalidRenderingParameterException


### InvalidS3ConfigurationException


### InvalidSNSDestinationException


### InvalidSnsTopicException


### InvalidTemplateException


### InvalidTrackingOptionsException


### InvocationType
* InvocationType `string` (values: Event, RequestResponse)

### KinesisFirehoseDestination
* KinesisFirehoseDestination `object`: <p>Contains the delivery stream ARN and the IAM role ARN associated with an Amazon Kinesis Firehose event destination.</p> <p>Event destinations, such as Amazon Kinesis Firehose, are associated with configuration sets, which enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p>
  * DeliveryStreamARN **required**
  * IAMRoleARN **required**

### LambdaAction
* LambdaAction `object`: <p>When included in a receipt rule, this action calls an AWS Lambda function and, optionally, publishes a notification to Amazon Simple Notification Service (Amazon SNS).</p> <p>To enable Amazon SES to call your AWS Lambda function or to publish to an Amazon SNS topic of another account, Amazon SES must have permission to access those resources. For information about giving permissions, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-permissions.html">Amazon SES Developer Guide</a>.</p> <p>For information about using AWS Lambda actions in receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-action-lambda.html">Amazon SES Developer Guide</a>.</p>
  * FunctionArn **required**
  * InvocationType
  * TopicArn

### LastAttemptDate
* LastAttemptDate `string`

### LastFreshStart
* LastFreshStart `string`

### LimitExceededException


### ListConfigurationSetsRequest
* ListConfigurationSetsRequest `object`: Represents a request to list the configuration sets associated with your AWS account. Configuration sets enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.
  * MaxItems
  * NextToken

### ListConfigurationSetsResponse
* ListConfigurationSetsResponse `object`: A list of configuration sets associated with your AWS account. Configuration sets enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.
  * ConfigurationSets
    * items [ConfigurationSet](#configurationset)
  * NextToken

### ListCustomVerificationEmailTemplatesRequest
* ListCustomVerificationEmailTemplatesRequest `object`: <p>Represents a request to list the existing custom verification email templates for your account.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p>
  * MaxResults
  * NextToken

### ListCustomVerificationEmailTemplatesResponse
* ListCustomVerificationEmailTemplatesResponse `object`: A paginated list of custom verification email templates.
  * CustomVerificationEmailTemplates
    * items [CustomVerificationEmailTemplate](#customverificationemailtemplate)
  * NextToken

### ListIdentitiesRequest
* ListIdentitiesRequest `object`: Represents a request to return a list of all identities (email addresses and domains) that you have attempted to verify under your AWS account, regardless of verification status.
  * IdentityType
  * MaxItems
  * NextToken

### ListIdentitiesResponse
* ListIdentitiesResponse `object`: A list of all identities that you have attempted to verify under your AWS account, regardless of verification status.
  * Identities **required**
    * items [Identity](#identity)
  * NextToken

### ListIdentityPoliciesRequest
* ListIdentityPoliciesRequest `object`: Represents a request to return a list of sending authorization policies that are attached to an identity. Sending authorization is an Amazon SES feature that enables you to authorize other senders to use your identities. For information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.
  * Identity **required**

### ListIdentityPoliciesResponse
* ListIdentityPoliciesResponse `object`: A list of names of sending authorization policies that apply to an identity.
  * PolicyNames **required**
    * items [PolicyName](#policyname)

### ListReceiptFiltersRequest
* ListReceiptFiltersRequest `object`: Represents a request to list the IP address filters that exist under your AWS account. You use IP address filters when you receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>.

### ListReceiptFiltersResponse
* ListReceiptFiltersResponse `object`: A list of IP address filters that exist under your AWS account.
  * Filters
    * items [ReceiptFilter](#receiptfilter)

### ListReceiptRuleSetsRequest
* ListReceiptRuleSetsRequest `object`: Represents a request to list the receipt rule sets that exist under your AWS account. You use receipt rule sets to receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>.
  * NextToken

### ListReceiptRuleSetsResponse
* ListReceiptRuleSetsResponse `object`: A list of receipt rule sets that exist under your AWS account.
  * NextToken
  * RuleSets
    * items [ReceiptRuleSetMetadata](#receiptrulesetmetadata)

### ListTemplatesRequest
* ListTemplatesRequest `object`
  * MaxItems
  * NextToken

### ListTemplatesResponse
* ListTemplatesResponse `object`
  * NextToken
  * TemplatesMetadata
    * items [TemplateMetadata](#templatemetadata)

### ListVerifiedEmailAddressesResponse
* ListVerifiedEmailAddressesResponse `object`: A list of email addresses that you have verified with Amazon SES under your AWS account.
  * VerifiedEmailAddresses
    * items [Address](#address)

### MailFromDomainAttributes
* MailFromDomainAttributes `object`

### MailFromDomainName
* MailFromDomainName `string`

### MailFromDomainNotVerifiedException


### Max24HourSend
* Max24HourSend `number`

### MaxItems
* MaxItems `integer`

### MaxResults
* MaxResults `integer`

### MaxSendRate
* MaxSendRate `number`

### Message
* Message `object`: Represents the message to be sent, composed of a subject and a body.
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

### MessageData
* MessageData `string`

### MessageDsn
* MessageDsn `object`: <p>Message-related information to include in the Delivery Status Notification (DSN) when an email that Amazon SES receives on your behalf bounces.</p> <p>For information about receiving email through Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email.html">Amazon SES Developer Guide</a>.</p>
  * ArrivalDate
  * ExtensionFields
    * items [ExtensionField](#extensionfield)
  * ReportingMta **required**

### MessageId
* MessageId `string`

### MessageRejected


### MessageTag
* MessageTag `object`: <p>Contains the name and value of a tag that you can provide to <code>SendEmail</code> or <code>SendRawEmail</code> to apply to an email.</p> <p>Message tags, which you use with configuration sets, enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p>
  * Name **required**
  * Value **required**

### MessageTagList
* MessageTagList `array`
  * items [MessageTag](#messagetag)

### MessageTagName
* MessageTagName `string`

### MessageTagValue
* MessageTagValue `string`

### MissingRenderingAttributeException


### NextToken
* NextToken `string`

### NotificationAttributes
* NotificationAttributes `object`

### NotificationTopic
* NotificationTopic `string`

### NotificationType
* NotificationType `string` (values: Bounce, Complaint, Delivery)

### Policy
* Policy `string`

### PolicyMap
* PolicyMap `object`

### PolicyName
* PolicyName `string`

### PolicyNameList
* PolicyNameList `array`
  * items [PolicyName](#policyname)

### ProductionAccessNotGrantedException


### PutConfigurationSetDeliveryOptionsRequest
* PutConfigurationSetDeliveryOptionsRequest `object`: A request to modify the delivery options for a configuration set.
  * ConfigurationSetName **required**
  * DeliveryOptions
    * TlsPolicy

### PutConfigurationSetDeliveryOptionsResponse
* PutConfigurationSetDeliveryOptionsResponse `object`: An HTTP 200 response if the request succeeds, or an error message if the request fails.

### PutIdentityPolicyRequest
* PutIdentityPolicyRequest `object`: Represents a request to add or update a sending authorization policy for an identity. Sending authorization is an Amazon SES feature that enables you to authorize other senders to use your identities. For information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.
  * Identity **required**
  * Policy **required**
  * PolicyName **required**

### PutIdentityPolicyResponse
* PutIdentityPolicyResponse `object`: An empty element returned on a successful request.

### RawMessage
* RawMessage `object`: Represents the raw data of the message.
  * Data **required**

### RawMessageData
* RawMessageData `string`

### ReceiptAction
* ReceiptAction `object`: <p>An action that Amazon SES can take when it receives an email on behalf of one or more email addresses or domains that you own. An instance of this data type can represent only one action.</p> <p>For information about setting up receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rules.html">Amazon SES Developer Guide</a>.</p>
  * AddHeaderAction
    * HeaderName **required**
    * HeaderValue **required**
  * BounceAction
    * Message **required**
    * Sender **required**
    * SmtpReplyCode **required**
    * StatusCode
    * TopicArn
  * LambdaAction
    * FunctionArn **required**
    * InvocationType
    * TopicArn
  * S3Action
    * BucketName **required**
    * KmsKeyArn
    * ObjectKeyPrefix
    * TopicArn
  * SNSAction
    * Encoding
    * TopicArn **required**
  * StopAction
    * Scope **required**
    * TopicArn
  * WorkmailAction
    * OrganizationArn **required**
    * TopicArn

### ReceiptActionsList
* ReceiptActionsList `array`
  * items [ReceiptAction](#receiptaction)

### ReceiptFilter
* ReceiptFilter `object`: <p>A receipt IP address filter enables you to specify whether to accept or reject mail originating from an IP address or range of IP addresses.</p> <p>For information about setting up IP address filters, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-ip-filters.html">Amazon SES Developer Guide</a>.</p>
  * IpFilter **required**
    * Cidr **required**
    * Policy **required**
  * Name **required**

### ReceiptFilterList
* ReceiptFilterList `array`
  * items [ReceiptFilter](#receiptfilter)

### ReceiptFilterName
* ReceiptFilterName `string`

### ReceiptFilterPolicy
* ReceiptFilterPolicy `string` (values: Block, Allow)

### ReceiptIpFilter
* ReceiptIpFilter `object`: <p>A receipt IP address filter enables you to specify whether to accept or reject mail originating from an IP address or range of IP addresses.</p> <p>For information about setting up IP address filters, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-ip-filters.html">Amazon SES Developer Guide</a>.</p>
  * Cidr **required**
  * Policy **required**

### ReceiptRule
* ReceiptRule `object`: <p>Receipt rules enable you to specify which actions Amazon SES should take when it receives mail on behalf of one or more email addresses or domains that you own.</p> <p>Each receipt rule defines a set of email addresses or domains that it applies to. If the email addresses or domains match at least one recipient address of the message, Amazon SES executes all of the receipt rule's actions on the message.</p> <p>For information about setting up receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rules.html">Amazon SES Developer Guide</a>.</p>
  * Actions
    * items [ReceiptAction](#receiptaction)
  * Enabled
  * Name **required**
  * Recipients
    * items [Recipient](#recipient)
  * ScanEnabled
  * TlsPolicy

### ReceiptRuleName
* ReceiptRuleName `string`

### ReceiptRuleNamesList
* ReceiptRuleNamesList `array`
  * items [ReceiptRuleName](#receiptrulename)

### ReceiptRuleSetMetadata
* ReceiptRuleSetMetadata `object`: <p>Information about a receipt rule set.</p> <p>A receipt rule set is a collection of rules that specify what Amazon SES should do with mail it receives on behalf of your account's verified domains.</p> <p>For information about setting up receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rule-set.html">Amazon SES Developer Guide</a>.</p>
  * CreatedTimestamp
  * Name

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
* RecipientDsnFields `object`: <p>Recipient-related information to include in the Delivery Status Notification (DSN) when an email that Amazon SES receives on your behalf bounces.</p> <p>For information about receiving email through Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email.html">Amazon SES Developer Guide</a>.</p>
  * Action **required**
  * DiagnosticCode
  * ExtensionFields
    * items [ExtensionField](#extensionfield)
  * FinalRecipient
  * LastAttemptDate
  * RemoteMta
  * Status **required**

### RecipientsList
* RecipientsList `array`
  * items [Recipient](#recipient)

### RemoteMta
* RemoteMta `string`

### RenderedTemplate
* RenderedTemplate `string`

### ReorderReceiptRuleSetRequest
* ReorderReceiptRuleSetRequest `object`: Represents a request to reorder the receipt rules within a receipt rule set. You use receipt rule sets to receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>.
  * RuleNames **required**
    * items [ReceiptRuleName](#receiptrulename)
  * RuleSetName **required**

### ReorderReceiptRuleSetResponse
* ReorderReceiptRuleSetResponse `object`: An empty element returned on a successful request.

### ReportingMta
* ReportingMta `string`

### ReputationOptions
* ReputationOptions `object`: Contains information about the reputation settings for a configuration set.
  * LastFreshStart
  * ReputationMetricsEnabled
  * SendingEnabled

### RuleDoesNotExistException


### RuleSetDoesNotExistException


### S3Action
* S3Action `object`: <p>When included in a receipt rule, this action saves the received message to an Amazon Simple Storage Service (Amazon S3) bucket and, optionally, publishes a notification to Amazon Simple Notification Service (Amazon SNS).</p> <p>To enable Amazon SES to write emails to your Amazon S3 bucket, use an AWS KMS key to encrypt your emails, or publish to an Amazon SNS topic of another account, Amazon SES must have permission to access those resources. For information about giving permissions, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-permissions.html">Amazon SES Developer Guide</a>.</p> <note> <p>When you save your emails to an Amazon S3 bucket, the maximum email size (including headers) is 30 MB. Emails larger than that will bounce.</p> </note> <p>For information about specifying Amazon S3 actions in receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-action-s3.html">Amazon SES Developer Guide</a>.</p>
  * BucketName **required**
  * KmsKeyArn
  * ObjectKeyPrefix
  * TopicArn

### S3BucketName
* S3BucketName `string`

### S3KeyPrefix
* S3KeyPrefix `string`

### SNSAction
* SNSAction `object`: <p>When included in a receipt rule, this action publishes a notification to Amazon Simple Notification Service (Amazon SNS). This action includes a complete copy of the email content in the Amazon SNS notifications. Amazon SNS notifications for all other actions simply provide information about the email. They do not include the email content itself.</p> <p>If you own the Amazon SNS topic, you don't need to do anything to give Amazon SES permission to publish emails to it. However, if you don't own the Amazon SNS topic, you need to attach a policy to the topic to give Amazon SES permissions to access it. For information about giving permissions, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-permissions.html">Amazon SES Developer Guide</a>.</p> <important> <p>You can only publish emails that are 150 KB or less (including the header) to Amazon SNS. Larger emails will bounce. If you anticipate emails larger than 150 KB, use the S3 action instead.</p> </important> <p>For information about using a receipt rule to publish an Amazon SNS notification, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-action-sns.html">Amazon SES Developer Guide</a>.</p>
  * Encoding
  * TopicArn **required**

### SNSActionEncoding
* SNSActionEncoding `string` (values: UTF-8, Base64)

### SNSDestination
* SNSDestination `object`: <p>Contains the topic ARN associated with an Amazon Simple Notification Service (Amazon SNS) event destination.</p> <p>Event destinations, such as Amazon SNS, are associated with configuration sets, which enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p>
  * TopicARN **required**

### SendBounceRequest
* SendBounceRequest `object`: Represents a request to send a bounce message to the sender of an email you received through Amazon SES.
  * BounceSender **required**
  * BounceSenderArn
  * BouncedRecipientInfoList **required**
    * items [BouncedRecipientInfo](#bouncedrecipientinfo)
  * Explanation
  * MessageDsn
    * ArrivalDate
    * ExtensionFields
      * items [ExtensionField](#extensionfield)
    * ReportingMta **required**
  * OriginalMessageId **required**

### SendBounceResponse
* SendBounceResponse `object`: Represents a unique message ID.
  * MessageId

### SendBulkTemplatedEmailRequest
* SendBulkTemplatedEmailRequest `object`: Represents a request to send a templated email to multiple destinations using Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>.
  * ConfigurationSetName
  * DefaultTags
    * items [MessageTag](#messagetag)
  * DefaultTemplateData
  * Destinations **required**
    * items [BulkEmailDestination](#bulkemaildestination)
  * ReplyToAddresses
    * items [Address](#address)
  * ReturnPath
  * ReturnPathArn
  * Source **required**
  * SourceArn
  * Template **required**
  * TemplateArn

### SendBulkTemplatedEmailResponse
* SendBulkTemplatedEmailResponse `object`
  * Status **required**
    * items [BulkEmailDestinationStatus](#bulkemaildestinationstatus)

### SendCustomVerificationEmailRequest
* SendCustomVerificationEmailRequest `object`: Represents a request to send a custom verification email to a specified recipient.
  * ConfigurationSetName
  * EmailAddress **required**
  * TemplateName **required**

### SendCustomVerificationEmailResponse
* SendCustomVerificationEmailResponse `object`: The response received when attempting to send the custom verification email.
  * MessageId

### SendDataPoint
* SendDataPoint `object`: Represents sending statistics data. Each <code>SendDataPoint</code> contains statistics for a 15-minute period of sending activity. 
  * Bounces
  * Complaints
  * DeliveryAttempts
  * Rejects
  * Timestamp

### SendDataPointList
* SendDataPointList `array`
  * items [SendDataPoint](#senddatapoint)

### SendEmailRequest
* SendEmailRequest `object`: Represents a request to send a single formatted email using Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-email-formatted.html">Amazon SES Developer Guide</a>.
  * ConfigurationSetName
  * Destination **required**
    * BccAddresses
      * items [Address](#address)
    * CcAddresses
      * items [Address](#address)
    * ToAddresses
      * items [Address](#address)
  * Message **required**
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
  * ReplyToAddresses
    * items [Address](#address)
  * ReturnPath
  * ReturnPathArn
  * Source **required**
  * SourceArn
  * Tags
    * items [MessageTag](#messagetag)

### SendEmailResponse
* SendEmailResponse `object`: Represents a unique message ID.
  * MessageId **required**

### SendRawEmailRequest
* SendRawEmailRequest `object`: Represents a request to send a single raw email using Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-email-raw.html">Amazon SES Developer Guide</a>.
  * ConfigurationSetName
  * Destinations
    * items [Address](#address)
  * FromArn
  * RawMessage **required**
    * Data **required**
  * ReturnPathArn
  * Source
  * SourceArn
  * Tags
    * items [MessageTag](#messagetag)

### SendRawEmailResponse
* SendRawEmailResponse `object`: Represents a unique message ID.
  * MessageId **required**

### SendTemplatedEmailRequest
* SendTemplatedEmailRequest `object`: Represents a request to send a templated email using Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>.
  * ConfigurationSetName
  * Destination **required**
    * BccAddresses
      * items [Address](#address)
    * CcAddresses
      * items [Address](#address)
    * ToAddresses
      * items [Address](#address)
  * ReplyToAddresses
    * items [Address](#address)
  * ReturnPath
  * ReturnPathArn
  * Source **required**
  * SourceArn
  * Tags
    * items [MessageTag](#messagetag)
  * Template **required**
  * TemplateArn
  * TemplateData **required**

### SendTemplatedEmailResponse
* SendTemplatedEmailResponse `object`
  * MessageId **required**

### SentLast24Hours
* SentLast24Hours `number`

### SetActiveReceiptRuleSetRequest
* SetActiveReceiptRuleSetRequest `object`: Represents a request to set a receipt rule set as the active receipt rule set. You use receipt rule sets to receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>.
  * RuleSetName

### SetActiveReceiptRuleSetResponse
* SetActiveReceiptRuleSetResponse `object`: An empty element returned on a successful request.

### SetIdentityDkimEnabledRequest
* SetIdentityDkimEnabledRequest `object`: Represents a request to enable or disable Amazon SES Easy DKIM signing for an identity. For more information about setting up Easy DKIM, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Amazon SES Developer Guide</a>.
  * DkimEnabled **required**
  * Identity **required**

### SetIdentityDkimEnabledResponse
* SetIdentityDkimEnabledResponse `object`: An empty element returned on a successful request.

### SetIdentityFeedbackForwardingEnabledRequest
* SetIdentityFeedbackForwardingEnabledRequest `object`: Represents a request to enable or disable whether Amazon SES forwards you bounce and complaint notifications through email. For information about email feedback forwarding, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications-via-email.html">Amazon SES Developer Guide</a>.
  * ForwardingEnabled **required**
  * Identity **required**

### SetIdentityFeedbackForwardingEnabledResponse
* SetIdentityFeedbackForwardingEnabledResponse `object`: An empty element returned on a successful request.

### SetIdentityHeadersInNotificationsEnabledRequest
* SetIdentityHeadersInNotificationsEnabledRequest `object`: Represents a request to set whether Amazon SES includes the original email headers in the Amazon SNS notifications of a specified type. For information about notifications, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications-via-sns.html">Amazon SES Developer Guide</a>.
  * Enabled **required**
  * Identity **required**
  * NotificationType **required**

### SetIdentityHeadersInNotificationsEnabledResponse
* SetIdentityHeadersInNotificationsEnabledResponse `object`: An empty element returned on a successful request.

### SetIdentityMailFromDomainRequest
* SetIdentityMailFromDomainRequest `object`: Represents a request to enable or disable the Amazon SES custom MAIL FROM domain setup for a verified identity. For information about using a custom MAIL FROM domain, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/mail-from.html">Amazon SES Developer Guide</a>.
  * BehaviorOnMXFailure
  * Identity **required**
  * MailFromDomain

### SetIdentityMailFromDomainResponse
* SetIdentityMailFromDomainResponse `object`: An empty element returned on a successful request.

### SetIdentityNotificationTopicRequest
* SetIdentityNotificationTopicRequest `object`: Represents a request to specify the Amazon SNS topic to which Amazon SES will publish bounce, complaint, or delivery notifications for emails sent with that identity as the Source. For information about Amazon SES notifications, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications-via-sns.html">Amazon SES Developer Guide</a>.
  * Identity **required**
  * NotificationType **required**
  * SnsTopic

### SetIdentityNotificationTopicResponse
* SetIdentityNotificationTopicResponse `object`: An empty element returned on a successful request.

### SetReceiptRulePositionRequest
* SetReceiptRulePositionRequest `object`: Represents a request to set the position of a receipt rule in a receipt rule set. You use receipt rule sets to receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>.
  * After
  * RuleName **required**
  * RuleSetName **required**

### SetReceiptRulePositionResponse
* SetReceiptRulePositionResponse `object`: An empty element returned on a successful request.

### StopAction
* StopAction `object`: <p>When included in a receipt rule, this action terminates the evaluation of the receipt rule set and, optionally, publishes a notification to Amazon Simple Notification Service (Amazon SNS).</p> <p>For information about setting a stop action in a receipt rule, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-action-stop.html">Amazon SES Developer Guide</a>.</p>
  * Scope **required**
  * TopicArn

### StopScope
* StopScope `string` (values: RuleSet)

### Subject
* Subject `string`

### SubjectPart
* SubjectPart `string`

### SuccessRedirectionURL
* SuccessRedirectionURL `string`

### Template
* Template `object`: The content of the email, composed of a subject line, an HTML part, and a text-only part.
  * HtmlPart
  * SubjectPart
  * TemplateName **required**
  * TextPart

### TemplateContent
* TemplateContent `string`

### TemplateData
* TemplateData `string`

### TemplateDoesNotExistException


### TemplateMetadata
* TemplateMetadata `object`: Contains information about an email template.
  * CreatedTimestamp
  * Name

### TemplateMetadataList
* TemplateMetadataList `array`
  * items [TemplateMetadata](#templatemetadata)

### TemplateName
* TemplateName `string`

### TestRenderTemplateRequest
* TestRenderTemplateRequest `object`
  * TemplateData **required**
  * TemplateName **required**

### TestRenderTemplateResponse
* TestRenderTemplateResponse `object`
  * RenderedTemplate

### TextPart
* TextPart `string`

### Timestamp
* Timestamp `string`

### TlsPolicy
* TlsPolicy `string` (values: Require, Optional)

### TrackingOptions
* TrackingOptions `object`: <p>A domain that is used to redirect email recipients to an Amazon SES-operated domain. This domain captures open and click events generated by Amazon SES emails.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/configure-custom-open-click-domains.html">Configuring Custom Domains to Handle Open and Click Tracking</a> in the <i>Amazon SES Developer Guide</i>.</p>
  * CustomRedirectDomain

### TrackingOptionsAlreadyExistsException


### TrackingOptionsDoesNotExistException


### UpdateAccountSendingEnabledRequest
* UpdateAccountSendingEnabledRequest `object`: Represents a request to enable or disable the email sending capabilities for your entire Amazon SES account.
  * Enabled

### UpdateConfigurationSetEventDestinationRequest
* UpdateConfigurationSetEventDestinationRequest `object`: Represents a request to update the event destination of a configuration set. Configuration sets enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.
  * ConfigurationSetName **required**
  * EventDestination **required**
    * CloudWatchDestination
      * DimensionConfigurations **required**
        * items [CloudWatchDimensionConfiguration](#cloudwatchdimensionconfiguration)
    * Enabled
    * KinesisFirehoseDestination
      * DeliveryStreamARN **required**
      * IAMRoleARN **required**
    * MatchingEventTypes **required**
      * items [EventType](#eventtype)
    * Name **required**
    * SNSDestination
      * TopicARN **required**

### UpdateConfigurationSetEventDestinationResponse
* UpdateConfigurationSetEventDestinationResponse `object`: An empty element returned on a successful request.

### UpdateConfigurationSetReputationMetricsEnabledRequest
* UpdateConfigurationSetReputationMetricsEnabledRequest `object`: Represents a request to modify the reputation metric publishing settings for a configuration set.
  * ConfigurationSetName **required**
  * Enabled **required**

### UpdateConfigurationSetSendingEnabledRequest
* UpdateConfigurationSetSendingEnabledRequest `object`: Represents a request to enable or disable the email sending capabilities for a specific configuration set.
  * ConfigurationSetName **required**
  * Enabled **required**

### UpdateConfigurationSetTrackingOptionsRequest
* UpdateConfigurationSetTrackingOptionsRequest `object`: Represents a request to update the tracking options for a configuration set. 
  * ConfigurationSetName **required**
  * TrackingOptions **required** [TrackingOptions](#trackingoptions)

### UpdateConfigurationSetTrackingOptionsResponse
* UpdateConfigurationSetTrackingOptionsResponse `object`: An empty element returned on a successful request.

### UpdateCustomVerificationEmailTemplateRequest
* UpdateCustomVerificationEmailTemplateRequest `object`: Represents a request to update an existing custom verification email template.
  * FailureRedirectionURL
  * FromEmailAddress
  * SuccessRedirectionURL
  * TemplateContent
  * TemplateName **required**
  * TemplateSubject

### UpdateReceiptRuleRequest
* UpdateReceiptRuleRequest `object`: Represents a request to update a receipt rule. You use receipt rules to receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>.
  * Rule **required**
    * Actions
      * items [ReceiptAction](#receiptaction)
    * Enabled
    * Name **required**
    * Recipients
      * items [Recipient](#recipient)
    * ScanEnabled
    * TlsPolicy
  * RuleSetName **required**

### UpdateReceiptRuleResponse
* UpdateReceiptRuleResponse `object`: An empty element returned on a successful request.

### UpdateTemplateRequest
* UpdateTemplateRequest `object`
  * Template **required** [Template](#template)

### UpdateTemplateResponse
* UpdateTemplateResponse `object`

### VerificationAttributes
* VerificationAttributes `object`

### VerificationStatus
* VerificationStatus `string` (values: Pending, Success, Failed, TemporaryFailure, NotStarted)

### VerificationToken
* VerificationToken `string`

### VerificationTokenList
* VerificationTokenList `array`
  * items [VerificationToken](#verificationtoken)

### VerifyDomainDkimRequest
* VerifyDomainDkimRequest `object`: Represents a request to generate the CNAME records needed to set up Easy DKIM with Amazon SES. For more information about setting up Easy DKIM, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Amazon SES Developer Guide</a>.
  * Domain **required**

### VerifyDomainDkimResponse
* VerifyDomainDkimResponse `object`: Returns CNAME records that you must publish to the DNS server of your domain to set up Easy DKIM with Amazon SES.
  * DkimTokens **required**
    * items [VerificationToken](#verificationtoken)

### VerifyDomainIdentityRequest
* VerifyDomainIdentityRequest `object`: Represents a request to begin Amazon SES domain verification and to generate the TXT records that you must publish to the DNS server of your domain to complete the verification. For information about domain verification, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-domains.html">Amazon SES Developer Guide</a>.
  * Domain **required**

### VerifyDomainIdentityResponse
* VerifyDomainIdentityResponse `object`: Returns a TXT record that you must publish to the DNS server of your domain to complete domain verification with Amazon SES.
  * VerificationToken **required**

### VerifyEmailAddressRequest
* VerifyEmailAddressRequest `object`: Represents a request to begin email address verification with Amazon SES. For information about email address verification, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-email-addresses.html">Amazon SES Developer Guide</a>.
  * EmailAddress **required**

### VerifyEmailIdentityRequest
* VerifyEmailIdentityRequest `object`: Represents a request to begin email address verification with Amazon SES. For information about email address verification, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-email-addresses.html">Amazon SES Developer Guide</a>.
  * EmailAddress **required**

### VerifyEmailIdentityResponse
* VerifyEmailIdentityResponse `object`: An empty element returned on a successful request.

### WorkmailAction
* WorkmailAction `object`: <p>When included in a receipt rule, this action calls Amazon WorkMail and, optionally, publishes a notification to Amazon Simple Notification Service (Amazon SNS). You will typically not use this action directly because Amazon WorkMail adds the rule automatically during its setup procedure.</p> <p>For information using a receipt rule to call Amazon WorkMail, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-action-workmail.html">Amazon SES Developer Guide</a>.</p>
  * OrganizationArn **required**
  * TopicArn


