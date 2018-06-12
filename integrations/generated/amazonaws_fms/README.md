# @datafire/amazonaws_fms

Client library for Firewall Management Service

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_fms
```
```js
let amazonaws_fms = require('@datafire/amazonaws_fms').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

amazonaws_fms.AssociateAdminAccount({
  "AdminAccount": ""
}).then(data => {
  console.log(data);
});
```

## Description

<fullname>AWS Firewall Manager</fullname> <p>This is the <i>AWS Firewall Manager API Reference</i>. This guide is for developers who need detailed information about the AWS Firewall Manager API actions, data types, and errors. For detailed information about AWS Firewall Manager features, see the <a href="http://docs.aws.amazon.com/waf/latest/developerguide/fms-chapter.html">AWS Firewall Manager Developer Guide</a>.</p>

## Actions

### AssociateAdminAccount



```js
amazonaws_fms.AssociateAdminAccount({
  "AdminAccount": ""
}, context)
```

#### Input
* input `object`
  * AdminAccount **required** [AWSAccountId](#awsaccountid)

#### Output
*Output schema unknown*

### DeleteNotificationChannel



```js
amazonaws_fms.DeleteNotificationChannel({}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### DeletePolicy



```js
amazonaws_fms.DeletePolicy({
  "PolicyId": ""
}, context)
```

#### Input
* input `object`
  * PolicyId **required** [PolicyId](#policyid)

#### Output
*Output schema unknown*

### DisassociateAdminAccount



```js
amazonaws_fms.DisassociateAdminAccount({}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### GetAdminAccount



```js
amazonaws_fms.GetAdminAccount({}, context)
```

#### Input
* input `object`

#### Output
* output [GetAdminAccountResponse](#getadminaccountresponse)

### GetComplianceDetail



```js
amazonaws_fms.GetComplianceDetail({
  "PolicyId": "",
  "MemberAccount": ""
}, context)
```

#### Input
* input `object`
  * MemberAccount **required** [AWSAccountId](#awsaccountid)
  * PolicyId **required** [PolicyId](#policyid)

#### Output
* output [GetComplianceDetailResponse](#getcompliancedetailresponse)

### GetNotificationChannel



```js
amazonaws_fms.GetNotificationChannel({}, context)
```

#### Input
* input `object`

#### Output
* output [GetNotificationChannelResponse](#getnotificationchannelresponse)

### GetPolicy



```js
amazonaws_fms.GetPolicy({
  "PolicyId": ""
}, context)
```

#### Input
* input `object`
  * PolicyId **required** [PolicyId](#policyid)

#### Output
* output [GetPolicyResponse](#getpolicyresponse)

### ListComplianceStatus



```js
amazonaws_fms.ListComplianceStatus({
  "PolicyId": ""
}, context)
```

#### Input
* input `object`
  * MaxResults [PaginationMaxResults](#paginationmaxresults)
  * NextToken [PaginationToken](#paginationtoken)
  * PolicyId **required** [PolicyId](#policyid)

#### Output
* output [ListComplianceStatusResponse](#listcompliancestatusresponse)

### ListPolicies



```js
amazonaws_fms.ListPolicies({}, context)
```

#### Input
* input `object`
  * MaxResults [PaginationMaxResults](#paginationmaxresults)
  * NextToken [PaginationToken](#paginationtoken)

#### Output
* output [ListPoliciesResponse](#listpoliciesresponse)

### PutNotificationChannel



```js
amazonaws_fms.PutNotificationChannel({
  "SnsTopicArn": "",
  "SnsRoleName": ""
}, context)
```

#### Input
* input `object`
  * SnsRoleName **required** [ResourceArn](#resourcearn)
  * SnsTopicArn **required** [ResourceArn](#resourcearn)

#### Output
*Output schema unknown*

### PutPolicy



```js
amazonaws_fms.PutPolicy({
  "Policy": {
    "PolicyName": "",
    "SecurityServicePolicyData": {
      "Type": ""
    },
    "ResourceType": "",
    "ExcludeResourceTags": true,
    "RemediationEnabled": true
  }
}, context)
```

#### Input
* input `object`
  * Policy **required** [Policy](#policy)

#### Output
* output [PutPolicyResponse](#putpolicyresponse)



## Definitions

### AWSAccountId
* AWSAccountId `string`

### AssociateAdminAccountRequest
* AssociateAdminAccountRequest `object`
  * AdminAccount **required** [AWSAccountId](#awsaccountid)

### Boolean
* Boolean `boolean`

### ComplianceViolator
* ComplianceViolator `object`: Details of the resource that is not protected by the policy.
  * ResourceId [ResourceId](#resourceid)
  * ResourceType [ResourceType](#resourcetype)
  * ViolationReason [ViolationReason](#violationreason)

### ComplianceViolators
* ComplianceViolators `array`
  * items [ComplianceViolator](#complianceviolator)

### DeleteNotificationChannelRequest
* DeleteNotificationChannelRequest `object`

### DeletePolicyRequest
* DeletePolicyRequest `object`
  * PolicyId **required** [PolicyId](#policyid)

### DisassociateAdminAccountRequest
* DisassociateAdminAccountRequest `object`

### ErrorMessage
* ErrorMessage `string`

### EvaluationResult
* EvaluationResult `object`: Describes the compliance status for the account. An account is considered non-compliant if it includes resources that are not protected by the specified policy.
  * ComplianceStatus [PolicyComplianceStatusType](#policycompliancestatustype)
  * EvaluationLimitExceeded [Boolean](#boolean)
  * ViolatorCount [ResourceCount](#resourcecount)

### EvaluationResults
* EvaluationResults `array`
  * items [EvaluationResult](#evaluationresult)

### GetAdminAccountRequest
* GetAdminAccountRequest `object`

### GetAdminAccountResponse
* GetAdminAccountResponse `object`
  * AdminAccount [AWSAccountId](#awsaccountid)

### GetComplianceDetailRequest
* GetComplianceDetailRequest `object`
  * MemberAccount **required** [AWSAccountId](#awsaccountid)
  * PolicyId **required** [PolicyId](#policyid)

### GetComplianceDetailResponse
* GetComplianceDetailResponse `object`
  * PolicyComplianceDetail [PolicyComplianceDetail](#policycompliancedetail)

### GetNotificationChannelRequest
* GetNotificationChannelRequest `object`

### GetNotificationChannelResponse
* GetNotificationChannelResponse `object`
  * SnsRoleName [ResourceArn](#resourcearn)
  * SnsTopicArn [ResourceArn](#resourcearn)

### GetPolicyRequest
* GetPolicyRequest `object`
  * PolicyId **required** [PolicyId](#policyid)

### GetPolicyResponse
* GetPolicyResponse `object`
  * Policy [Policy](#policy)
  * PolicyArn [ResourceArn](#resourcearn)

### InternalErrorException
* InternalErrorException `object`: The operation failed because of a system problem, even though the request was valid. Retry your request.
  * Message [ErrorMessage](#errormessage)

### InvalidInputException
* InvalidInputException `object`: The parameters of the request were invalid.
  * Message [ErrorMessage](#errormessage)

### InvalidOperationException
* InvalidOperationException `object`: The operation failed because there was nothing to do. For example, you might have submitted an <code>AssociateAdminAccount</code> request, but the account ID that you submitted was already set as the AWS Firewall Manager administrator.
  * Message [ErrorMessage](#errormessage)

### LimitExceededException
* LimitExceededException `object`: The operation exceeds a resource limit, for example, the maximum number of <code>policy</code> objects that you can create for an AWS account. For more information, see <a href="http://docs.aws.amazon.com/waf/latest/developerguide/fms-limits.html">Firewall Manager Limits</a> in the <i>AWS WAF Developer Guide</i>.
  * Message [ErrorMessage](#errormessage)

### ListComplianceStatusRequest
* ListComplianceStatusRequest `object`
  * MaxResults [PaginationMaxResults](#paginationmaxresults)
  * NextToken [PaginationToken](#paginationtoken)
  * PolicyId **required** [PolicyId](#policyid)

### ListComplianceStatusResponse
* ListComplianceStatusResponse `object`
  * NextToken [PaginationToken](#paginationtoken)
  * PolicyComplianceStatusList [PolicyComplianceStatusList](#policycompliancestatuslist)

### ListPoliciesRequest
* ListPoliciesRequest `object`
  * MaxResults [PaginationMaxResults](#paginationmaxresults)
  * NextToken [PaginationToken](#paginationtoken)

### ListPoliciesResponse
* ListPoliciesResponse `object`
  * NextToken [PaginationToken](#paginationtoken)
  * PolicyList [PolicySummaryList](#policysummarylist)

### ManagedServiceData
* ManagedServiceData `string`

### PaginationMaxResults
* PaginationMaxResults `integer`

### PaginationToken
* PaginationToken `string`

### Policy
* Policy `object`: An AWS Firewall Manager policy.
  * ExcludeResourceTags **required** [Boolean](#boolean)
  * PolicyId [PolicyId](#policyid)
  * PolicyName **required** [ResourceName](#resourcename)
  * PolicyUpdateToken [PolicyUpdateToken](#policyupdatetoken)
  * RemediationEnabled **required** [Boolean](#boolean)
  * ResourceTags [ResourceTags](#resourcetags)
  * ResourceType **required** [ResourceType](#resourcetype)
  * SecurityServicePolicyData **required** [SecurityServicePolicyData](#securityservicepolicydata)

### PolicyComplianceDetail
* PolicyComplianceDetail `object`: Describes the non-compliant resources in a member account for a specific AWS Firewall Manager policy. A maximum of 100 entries are displayed. If more than 100 resources are non-compliant, <code>EvaluationLimitExceeded</code> is set to <code>True</code>.
  * EvaluationLimitExceeded [Boolean](#boolean)
  * ExpiredAt [TimeStamp](#timestamp)
  * MemberAccount [AWSAccountId](#awsaccountid)
  * PolicyId [PolicyId](#policyid)
  * PolicyOwner [AWSAccountId](#awsaccountid)
  * Violators [ComplianceViolators](#complianceviolators)

### PolicyComplianceStatus
* PolicyComplianceStatus `object`: Indicates whether the account is compliant with the specified policy. An account is considered non-compliant if it includes resources that are not protected by the policy.
  * EvaluationResults [EvaluationResults](#evaluationresults)
  * LastUpdated [TimeStamp](#timestamp)
  * MemberAccount [AWSAccountId](#awsaccountid)
  * PolicyId [PolicyId](#policyid)
  * PolicyName [ResourceName](#resourcename)
  * PolicyOwner [AWSAccountId](#awsaccountid)

### PolicyComplianceStatusList
* PolicyComplianceStatusList `array`
  * items [PolicyComplianceStatus](#policycompliancestatus)

### PolicyComplianceStatusType
* PolicyComplianceStatusType `string` (values: COMPLIANT, NON_COMPLIANT)

### PolicyId
* PolicyId `string`

### PolicySummary
* PolicySummary `object`: Details of the AWS Firewall Manager policy. 
  * PolicyArn [ResourceArn](#resourcearn)
  * PolicyId [PolicyId](#policyid)
  * PolicyName [ResourceName](#resourcename)
  * RemediationEnabled [Boolean](#boolean)
  * ResourceType [ResourceType](#resourcetype)
  * SecurityServiceType [SecurityServiceType](#securityservicetype)

### PolicySummaryList
* PolicySummaryList `array`
  * items [PolicySummary](#policysummary)

### PolicyUpdateToken
* PolicyUpdateToken `string`

### PutNotificationChannelRequest
* PutNotificationChannelRequest `object`
  * SnsRoleName **required** [ResourceArn](#resourcearn)
  * SnsTopicArn **required** [ResourceArn](#resourcearn)

### PutPolicyRequest
* PutPolicyRequest `object`
  * Policy **required** [Policy](#policy)

### PutPolicyResponse
* PutPolicyResponse `object`
  * Policy [Policy](#policy)
  * PolicyArn [ResourceArn](#resourcearn)

### ResourceArn
* ResourceArn `string`

### ResourceCount
* ResourceCount `integer`

### ResourceId
* ResourceId `string`

### ResourceName
* ResourceName `string`

### ResourceNotFoundException
* ResourceNotFoundException `object`: The specified resource was not found.
  * Message [ErrorMessage](#errormessage)

### ResourceTag
* ResourceTag `object`: The resource tags that AWS Firewall Manager uses to determine if a particular resource should be included or excluded from protection by the AWS Firewall Manager policy. Tags enable you to categorize your AWS resources in different ways, for example, by purpose, owner, or environment. Each tag consists of a key and an optional value, both of which you define. Tags are combined with an "OR." That is, if you add more than one tag, if any of the tags matches, the resource is considered a match for the include or exclude. <a href="https://docs.aws.amazon.com/awsconsolehelpdocs/latest/gsg/tag-editor.html">Working with Tag Editor</a>.
  * Key **required** [TagKey](#tagkey)
  * Value [TagValue](#tagvalue)

### ResourceTags
* ResourceTags `array`
  * items [ResourceTag](#resourcetag)

### ResourceType
* ResourceType `string`

### SecurityServicePolicyData
* SecurityServicePolicyData `object`: Details about the security service that is being used to protect the resources.
  * ManagedServiceData [ManagedServiceData](#managedservicedata)
  * Type **required** [SecurityServiceType](#securityservicetype)

### SecurityServiceType
* SecurityServiceType `string` (values: WAF)

### TagKey
* TagKey `string`

### TagValue
* TagValue `string`

### TimeStamp
* TimeStamp `string`

### ViolationReason
* ViolationReason `string` (values: WEB_ACL_MISSING_RULE_GROUP, RESOURCE_MISSING_WEB_ACL, RESOURCE_INCORRECT_WEB_ACL)


