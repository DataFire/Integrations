# @datafire/amazonaws_iot

Client library for AWS IoT

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_iot
```
```js
let amazonaws_iot = require('@datafire/amazonaws_iot').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<fullname>AWS IoT</fullname> <p>AWS IoT provides secure, bi-directional communication between Internet-connected devices (such as sensors, actuators, embedded devices, or smart appliances) and the AWS cloud. You can discover your custom IoT-Data endpoint to communicate with, configure rules for data processing and integration with other services, organize resources associated with each device (Registry), configure logging, and create and manage policies and credentials to authenticate devices.</p> <p>The service endpoints that expose this API are listed in <a href="https://docs.aws.amazon.com/general/latest/gr/iot-core.html">AWS IoT Core Endpoints and Quotas</a>. You must use the endpoint for the region that has the resources you want to access.</p> <p>The service name used by <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">AWS Signature Version 4</a> to sign the request is: <i>execute-api</i>.</p> <p>For more information about how AWS IoT works, see the <a href="https://docs.aws.amazon.com/iot/latest/developerguide/aws-iot-how-it-works.html">Developer Guide</a>.</p> <p>For information about how to use the credentials provider for AWS IoT, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/authorizing-direct-aws.html">Authorizing Direct Calls to AWS Services</a>.</p>

## Actions

### AcceptCertificateTransfer



```js
amazonaws_iot.AcceptCertificateTransfer({
  "certificateId": ""
}, context)
```

#### Input
* input `object`
  * certificateId **required** `string`
  * setAsActive `boolean`

#### Output
*Output schema unknown*

### ListActiveViolations



```js
amazonaws_iot.ListActiveViolations({}, context)
```

#### Input
* input `object`
  * thingName `string`
  * securityProfileName `string`
  * behaviorCriteriaType `string`
  * listSuppressedAlerts `boolean`
  * nextToken `string`
  * maxResults `integer`

#### Output
* output [ListActiveViolationsResponse](#listactiveviolationsresponse)

### ListAttachedPolicies



```js
amazonaws_iot.ListAttachedPolicies({
  "target": ""
}, context)
```

#### Input
* input `object`
  * target **required** `string`
  * recursive `boolean`
  * marker `string`
  * pageSize `integer`

#### Output
* output [ListAttachedPoliciesResponse](#listattachedpoliciesresponse)

### DeleteAccountAuditConfiguration



```js
amazonaws_iot.DeleteAccountAuditConfiguration({}, context)
```

#### Input
* input `object`
  * deleteScheduledAudits `boolean`

#### Output
* output [DeleteAccountAuditConfigurationResponse](#deleteaccountauditconfigurationresponse)

### DescribeAccountAuditConfiguration



```js
amazonaws_iot.DescribeAccountAuditConfiguration({}, context)
```

#### Input
* input `object`

#### Output
* output [DescribeAccountAuditConfigurationResponse](#describeaccountauditconfigurationresponse)

### UpdateAccountAuditConfiguration



```js
amazonaws_iot.UpdateAccountAuditConfiguration({}, context)
```

#### Input
* input `object`
  * auditCheckConfigurations `object`: <p>Specifies which audit checks are enabled and disabled for this account. Use <code>DescribeAccountAuditConfiguration</code> to see the list of all checks, including those that are currently enabled.</p> <p>Some data collection might start immediately when certain checks are enabled. When a check is disabled, any data collected so far in relation to the check is deleted.</p> <p>You cannot disable a check if it's used by any scheduled audit. You must first delete the check from the scheduled audit or delete the scheduled audit itself.</p> <p>On the first call to <code>UpdateAccountAuditConfiguration</code>, this parameter is required and must specify at least one enabled check.</p>
  * auditNotificationTargetConfigurations `object`: Information about the targets to which audit notifications are sent.
  * roleArn `string`: The Amazon Resource Name (ARN) of the role that grants permission to AWS IoT to access information about your devices, policies, certificates, and other items as required when performing an audit.

#### Output
* output [UpdateAccountAuditConfigurationResponse](#updateaccountauditconfigurationresponse)

### ListAuditFindings



```js
amazonaws_iot.ListAuditFindings({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * checkName `string`: An audit check name. Checks must be enabled for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code> to select which checks are enabled.)
  * endTime `string`: A filter to limit results to those found before the specified time. You must specify either the startTime and endTime or the taskId, but not both.
  * listSuppressedFindings `boolean`:  Boolean flag indicating whether only the suppressed findings or the unsuppressed findings should be listed. If this parameter isn't provided, the response will list both suppressed and unsuppressed findings. 
  * maxResults `integer`: The maximum number of results to return at one time. The default is 25.
  * nextToken `string`: The token for the next set of results.
  * resourceIdentifier `object`: Information that identifies the noncompliant resource.
    * account
    * caCertificateId
    * clientId
    * cognitoIdentityPoolId
    * deviceCertificateId
    * iamRoleArn
    * policyVersionIdentifier
      * policyName
      * policyVersionId
    * roleAliasArn
  * startTime `string`: A filter to limit results to those found after the specified time. You must specify either the startTime and endTime or the taskId, but not both.
  * taskId `string`: A filter to limit results to the audit with the specified ID. You must specify either the taskId or the startTime and endTime, but not both.

#### Output
* output [ListAuditFindingsResponse](#listauditfindingsresponse)

### DescribeAuditFinding



```js
amazonaws_iot.DescribeAuditFinding({
  "findingId": ""
}, context)
```

#### Input
* input `object`
  * findingId **required** `string`

#### Output
* output [DescribeAuditFindingResponse](#describeauditfindingresponse)

### ListAuditMitigationActionsExecutions



```js
amazonaws_iot.ListAuditMitigationActionsExecutions({
  "taskId": "",
  "findingId": ""
}, context)
```

#### Input
* input `object`
  * taskId **required** `string`
  * actionStatus `string`
  * findingId **required** `string`
  * maxResults `integer`
  * nextToken `string`

#### Output
* output [ListAuditMitigationActionsExecutionsResponse](#listauditmitigationactionsexecutionsresponse)

### ListAuditMitigationActionsTasks



```js
amazonaws_iot.ListAuditMitigationActionsTasks({
  "startTime": "",
  "endTime": ""
}, context)
```

#### Input
* input `object`
  * auditTaskId `string`
  * findingId `string`
  * taskStatus `string`
  * maxResults `integer`
  * nextToken `string`
  * startTime **required** `string`
  * endTime **required** `string`

#### Output
* output [ListAuditMitigationActionsTasksResponse](#listauditmitigationactionstasksresponse)

### DescribeAuditMitigationActionsTask



```js
amazonaws_iot.DescribeAuditMitigationActionsTask({
  "taskId": ""
}, context)
```

#### Input
* input `object`
  * taskId **required** `string`

#### Output
* output [DescribeAuditMitigationActionsTaskResponse](#describeauditmitigationactionstaskresponse)

### StartAuditMitigationActionsTask



```js
amazonaws_iot.StartAuditMitigationActionsTask({
  "taskId": "",
  "target": {},
  "auditCheckToActionsMapping": {},
  "clientRequestToken": ""
}, context)
```

#### Input
* input `object`
  * taskId **required** `string`
  * auditCheckToActionsMapping **required** `object`: For an audit check, specifies which mitigation actions to apply. Those actions must be defined in your AWS account.
  * clientRequestToken **required** `string`: Each audit mitigation task must have a unique client request token. If you try to start a new task with the same token as a task that already exists, an exception occurs. If you omit this value, a unique client request token is generated automatically.
  * target **required** `object`: Used in MitigationActionParams, this information identifies the target findings to which the mitigation actions are applied. Only one entry appears.
    * auditCheckToReasonCodeFilter
    * auditTaskId
    * findingIds
      * items [FindingId](#findingid)

#### Output
* output [StartAuditMitigationActionsTaskResponse](#startauditmitigationactionstaskresponse)

### CancelAuditMitigationActionsTask



```js
amazonaws_iot.CancelAuditMitigationActionsTask({
  "taskId": ""
}, context)
```

#### Input
* input `object`
  * taskId **required** `string`

#### Output
* output [CancelAuditMitigationActionsTaskResponse](#cancelauditmitigationactionstaskresponse)

### ListScheduledAudits



```js
amazonaws_iot.ListScheduledAudits({}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * maxResults `integer`

#### Output
* output [ListScheduledAuditsResponse](#listscheduledauditsresponse)

### DeleteScheduledAudit



```js
amazonaws_iot.DeleteScheduledAudit({
  "scheduledAuditName": ""
}, context)
```

#### Input
* input `object`
  * scheduledAuditName **required** `string`

#### Output
* output [DeleteScheduledAuditResponse](#deletescheduledauditresponse)

### DescribeScheduledAudit



```js
amazonaws_iot.DescribeScheduledAudit({
  "scheduledAuditName": ""
}, context)
```

#### Input
* input `object`
  * scheduledAuditName **required** `string`

#### Output
* output [DescribeScheduledAuditResponse](#describescheduledauditresponse)

### UpdateScheduledAudit



```js
amazonaws_iot.UpdateScheduledAudit({
  "scheduledAuditName": ""
}, context)
```

#### Input
* input `object`
  * scheduledAuditName **required** `string`
  * dayOfMonth `string`: The day of the month on which the scheduled audit takes place. This can be <code>1</code> through <code>31</code> or <code>LAST</code>. This field is required if the <code>frequency</code> parameter is set to <code>MONTHLY</code>. If days 29-31 are specified, and the month does not have that many days, the audit takes place on the "LAST" day of the month.
  * dayOfWeek `string` (values: SUN, MON, TUE, WED, THU, FRI, SAT): The day of the week on which the scheduled audit takes place. This can be one of <code>SUN</code>, <code>MON</code>, <code>TUE</code>, <code>WED</code>, <code>THU</code>, <code>FRI</code>, or <code>SAT</code>. This field is required if the "frequency" parameter is set to <code>WEEKLY</code> or <code>BIWEEKLY</code>.
  * frequency `string` (values: DAILY, WEEKLY, BIWEEKLY, MONTHLY): How often the scheduled audit takes place, either <code>DAILY</code>, <code>WEEKLY</code>, <code>BIWEEKLY</code>, or <code>MONTHLY</code>. The start time of each audit is determined by the system.
  * targetCheckNames `array`: Which checks are performed during the scheduled audit. Checks must be enabled for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code> to select which checks are enabled.)
    * items [AuditCheckName](#auditcheckname)

#### Output
* output [UpdateScheduledAuditResponse](#updatescheduledauditresponse)

### CreateScheduledAudit



```js
amazonaws_iot.CreateScheduledAudit({
  "scheduledAuditName": "",
  "frequency": "",
  "targetCheckNames": []
}, context)
```

#### Input
* input `object`
  * scheduledAuditName **required** `string`
  * tags `array`: Metadata that can be used to manage the scheduled audit.
    * items [Tag](#tag)
  * dayOfMonth `string`: The day of the month on which the scheduled audit takes place. This can be "1" through "31" or "LAST". This field is required if the "frequency" parameter is set to <code>MONTHLY</code>. If days 29 to 31 are specified, and the month doesn't have that many days, the audit takes place on the <code>LAST</code> day of the month.
  * dayOfWeek `string` (values: SUN, MON, TUE, WED, THU, FRI, SAT): The day of the week on which the scheduled audit takes place, either <code>SUN</code>, <code>MON</code>, <code>TUE</code>, <code>WED</code>, <code>THU</code>, <code>FRI</code>, or <code>SAT</code>. This field is required if the <code>frequency</code> parameter is set to <code>WEEKLY</code> or <code>BIWEEKLY</code>.
  * frequency **required** `string` (values: DAILY, WEEKLY, BIWEEKLY, MONTHLY): How often the scheduled audit takes place, either <code>DAILY</code>, <code>WEEKLY</code>, <code>BIWEEKLY</code> or <code>MONTHLY</code>. The start time of each audit is determined by the system.
  * targetCheckNames **required** `array`: Which checks are performed during the scheduled audit. Checks must be enabled for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code> to select which checks are enabled.)
    * items [AuditCheckName](#auditcheckname)

#### Output
* output [CreateScheduledAuditResponse](#createscheduledauditresponse)

### CreateAuditSuppression



```js
amazonaws_iot.CreateAuditSuppression({
  "checkName": "",
  "resourceIdentifier": {},
  "clientRequestToken": ""
}, context)
```

#### Input
* input `object`
  * checkName **required** `string`: An audit check name. Checks must be enabled for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code> to select which checks are enabled.)
  * clientRequestToken **required** `string`:  The epoch timestamp in seconds at which this suppression expires. 
  * description `string`:  The description of the audit suppression. 
  * expirationDate `string`:  The epoch timestamp in seconds at which this suppression expires. 
  * resourceIdentifier **required** `object`: Information that identifies the noncompliant resource.
    * account
    * caCertificateId
    * clientId
    * cognitoIdentityPoolId
    * deviceCertificateId
    * iamRoleArn
    * policyVersionIdentifier
      * policyName
      * policyVersionId
    * roleAliasArn
  * suppressIndefinitely `boolean`:  Indicates whether a suppression should exist indefinitely or not. 

#### Output
* output [CreateAuditSuppressionResponse](#createauditsuppressionresponse)

### DeleteAuditSuppression



```js
amazonaws_iot.DeleteAuditSuppression({
  "checkName": "",
  "resourceIdentifier": {}
}, context)
```

#### Input
* input `object`
  * checkName **required** `string`: An audit check name. Checks must be enabled for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code> to select which checks are enabled.)
  * resourceIdentifier **required** `object`: Information that identifies the noncompliant resource.
    * account
    * caCertificateId
    * clientId
    * cognitoIdentityPoolId
    * deviceCertificateId
    * iamRoleArn
    * policyVersionIdentifier
      * policyName
      * policyVersionId
    * roleAliasArn

#### Output
* output [DeleteAuditSuppressionResponse](#deleteauditsuppressionresponse)

### DescribeAuditSuppression



```js
amazonaws_iot.DescribeAuditSuppression({
  "checkName": "",
  "resourceIdentifier": {}
}, context)
```

#### Input
* input `object`
  * checkName **required** `string`: An audit check name. Checks must be enabled for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code> to select which checks are enabled.)
  * resourceIdentifier **required** `object`: Information that identifies the noncompliant resource.
    * account
    * caCertificateId
    * clientId
    * cognitoIdentityPoolId
    * deviceCertificateId
    * iamRoleArn
    * policyVersionIdentifier
      * policyName
      * policyVersionId
    * roleAliasArn

#### Output
* output [DescribeAuditSuppressionResponse](#describeauditsuppressionresponse)

### ListAuditSuppressions



```js
amazonaws_iot.ListAuditSuppressions({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * ascendingOrder `boolean`:  Determines whether suppressions are listed in ascending order by expiration date or not. If parameter isn't provided, <code>ascendingOrder=true</code>. 
  * checkName `string`: An audit check name. Checks must be enabled for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code> to select which checks are enabled.)
  * maxResults `integer`:  The maximum number of results to return at one time. The default is 25. 
  * nextToken `string`:  The token for the next set of results. 
  * resourceIdentifier `object`: Information that identifies the noncompliant resource.
    * account
    * caCertificateId
    * clientId
    * cognitoIdentityPoolId
    * deviceCertificateId
    * iamRoleArn
    * policyVersionIdentifier
      * policyName
      * policyVersionId
    * roleAliasArn

#### Output
* output [ListAuditSuppressionsResponse](#listauditsuppressionsresponse)

### UpdateAuditSuppression



```js
amazonaws_iot.UpdateAuditSuppression({
  "checkName": "",
  "resourceIdentifier": {}
}, context)
```

#### Input
* input `object`
  * checkName **required** `string`: An audit check name. Checks must be enabled for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code> to select which checks are enabled.)
  * description `string`:  The description of the audit suppression. 
  * expirationDate `string`:  The expiration date (epoch timestamp in seconds) that you want the suppression to adhere to. 
  * resourceIdentifier **required** `object`: Information that identifies the noncompliant resource.
    * account
    * caCertificateId
    * clientId
    * cognitoIdentityPoolId
    * deviceCertificateId
    * iamRoleArn
    * policyVersionIdentifier
      * policyName
      * policyVersionId
    * roleAliasArn
  * suppressIndefinitely `boolean`:  Indicates whether a suppression should exist indefinitely or not. 

#### Output
* output [UpdateAuditSuppressionResponse](#updateauditsuppressionresponse)

### StartOnDemandAuditTask



```js
amazonaws_iot.StartOnDemandAuditTask({
  "targetCheckNames": []
}, context)
```

#### Input
* input `object`
  * targetCheckNames **required** `array`: Which checks are performed during the audit. The checks you specify must be enabled for your account or an exception occurs. Use <code>DescribeAccountAuditConfiguration</code> to see the list of all checks, including those that are enabled or <code>UpdateAccountAuditConfiguration</code> to select which checks are enabled.
    * items [AuditCheckName](#auditcheckname)

#### Output
* output [StartOnDemandAuditTaskResponse](#startondemandaudittaskresponse)

### ListAuditTasks



```js
amazonaws_iot.ListAuditTasks({
  "startTime": "",
  "endTime": ""
}, context)
```

#### Input
* input `object`
  * startTime **required** `string`
  * endTime **required** `string`
  * taskType `string`
  * taskStatus `string`
  * nextToken `string`
  * maxResults `integer`

#### Output
* output [ListAuditTasksResponse](#listaudittasksresponse)

### DescribeAuditTask



```js
amazonaws_iot.DescribeAuditTask({
  "taskId": ""
}, context)
```

#### Input
* input `object`
  * taskId **required** `string`

#### Output
* output [DescribeAuditTaskResponse](#describeaudittaskresponse)

### CancelAuditTask



```js
amazonaws_iot.CancelAuditTask({
  "taskId": ""
}, context)
```

#### Input
* input `object`
  * taskId **required** `string`

#### Output
* output [CancelAuditTaskResponse](#cancelaudittaskresponse)

### DeleteAuthorizer



```js
amazonaws_iot.DeleteAuthorizer({
  "authorizerName": ""
}, context)
```

#### Input
* input `object`
  * authorizerName **required** `string`

#### Output
* output [DeleteAuthorizerResponse](#deleteauthorizerresponse)

### DescribeAuthorizer



```js
amazonaws_iot.DescribeAuthorizer({
  "authorizerName": ""
}, context)
```

#### Input
* input `object`
  * authorizerName **required** `string`

#### Output
* output [DescribeAuthorizerResponse](#describeauthorizerresponse)

### CreateAuthorizer



```js
amazonaws_iot.CreateAuthorizer({
  "authorizerName": "",
  "authorizerFunctionArn": ""
}, context)
```

#### Input
* input `object`
  * authorizerName **required** `string`
  * tags `array`: <p>Metadata which can be used to manage the custom authorizer.</p> <note> <p>For URI Request parameters use format: ...key1=value1&amp;key2=value2...</p> <p>For the CLI command-line parameter use format: &amp;&amp;tags "key1=value1&amp;key2=value2..."</p> <p>For the cli-input-json file use format: "tags": "key1=value1&amp;key2=value2..."</p> </note>
    * items [Tag](#tag)
  * authorizerFunctionArn **required** `string`: The ARN of the authorizer's Lambda function.
  * signingDisabled `boolean`: Specifies whether AWS IoT validates the token signature in an authorization request.
  * status `string` (values: ACTIVE, INACTIVE): The status of the create authorizer request.
  * tokenKeyName `string`: The name of the token key used to extract the token from the HTTP headers.
  * tokenSigningPublicKeys `object`: The public keys used to verify the digital signature returned by your custom authentication service.

#### Output
* output [CreateAuthorizerResponse](#createauthorizerresponse)

### UpdateAuthorizer



```js
amazonaws_iot.UpdateAuthorizer({
  "authorizerName": ""
}, context)
```

#### Input
* input `object`
  * authorizerName **required** `string`
  * authorizerFunctionArn `string`: The ARN of the authorizer's Lambda function.
  * status `string` (values: ACTIVE, INACTIVE): The status of the update authorizer request.
  * tokenKeyName `string`: The key used to extract the token from the HTTP headers. 
  * tokenSigningPublicKeys `object`: The public keys used to verify the token signature.

#### Output
* output [UpdateAuthorizerResponse](#updateauthorizerresponse)

### TestInvokeAuthorizer



```js
amazonaws_iot.TestInvokeAuthorizer({
  "authorizerName": ""
}, context)
```

#### Input
* input `object`
  * authorizerName **required** `string`
  * httpContext `object`: Specifies the HTTP context to use for the test authorizer request.
    * headers
    * queryString
  * mqttContext `object`: Specifies the MQTT context to use for the test authorizer request
    * clientId
    * password
    * username
  * tlsContext `object`: Specifies the TLS context to use for the test authorizer request.
    * serverName
  * token `string`: The token returned by your custom authentication service.
  * tokenSignature `string`: The signature made with the token and your custom authentication service's private key. This value must be Base-64-encoded.

#### Output
* output [TestInvokeAuthorizerResponse](#testinvokeauthorizerresponse)

### ListAuthorizers



```js
amazonaws_iot.ListAuthorizers({}, context)
```

#### Input
* input `object`
  * pageSize `integer`
  * marker `string`
  * isAscendingOrder `boolean`
  * status `string`

#### Output
* output [ListAuthorizersResponse](#listauthorizersresponse)

### GetBehaviorModelTrainingSummaries



```js
amazonaws_iot.GetBehaviorModelTrainingSummaries({}, context)
```

#### Input
* input `object`
  * securityProfileName `string`
  * maxResults `integer`
  * nextToken `string`

#### Output
* output [GetBehaviorModelTrainingSummariesResponse](#getbehaviormodeltrainingsummariesresponse)

### ListBillingGroups



```js
amazonaws_iot.ListBillingGroups({}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * maxResults `integer`
  * namePrefixFilter `string`

#### Output
* output [ListBillingGroupsResponse](#listbillinggroupsresponse)

### AddThingToBillingGroup



```js
amazonaws_iot.AddThingToBillingGroup({}, context)
```

#### Input
* input `object`
  * billingGroupArn `string`: The ARN of the billing group.
  * billingGroupName `string`: The name of the billing group.
  * thingArn `string`: The ARN of the thing to be added to the billing group.
  * thingName `string`: The name of the thing to be added to the billing group.

#### Output
* output [AddThingToBillingGroupResponse](#addthingtobillinggroupresponse)

### RemoveThingFromBillingGroup



```js
amazonaws_iot.RemoveThingFromBillingGroup({}, context)
```

#### Input
* input `object`
  * billingGroupArn `string`: The ARN of the billing group.
  * billingGroupName `string`: The name of the billing group.
  * thingArn `string`: The ARN of the thing to be removed from the billing group.
  * thingName `string`: The name of the thing to be removed from the billing group.

#### Output
* output [RemoveThingFromBillingGroupResponse](#removethingfrombillinggroupresponse)

### DeleteBillingGroup



```js
amazonaws_iot.DeleteBillingGroup({
  "billingGroupName": ""
}, context)
```

#### Input
* input `object`
  * billingGroupName **required** `string`
  * expectedVersion `integer`

#### Output
* output [DeleteBillingGroupResponse](#deletebillinggroupresponse)

### DescribeBillingGroup



```js
amazonaws_iot.DescribeBillingGroup({
  "billingGroupName": ""
}, context)
```

#### Input
* input `object`
  * billingGroupName **required** `string`

#### Output
* output [DescribeBillingGroupResponse](#describebillinggroupresponse)

### UpdateBillingGroup



```js
amazonaws_iot.UpdateBillingGroup({
  "billingGroupName": "",
  "billingGroupProperties": {}
}, context)
```

#### Input
* input `object`
  * billingGroupName **required** `string`
  * billingGroupProperties **required** `object`: The properties of a billing group.
    * billingGroupDescription
  * expectedVersion `integer`: The expected version of the billing group. If the version of the billing group does not match the expected version specified in the request, the <code>UpdateBillingGroup</code> request is rejected with a <code>VersionConflictException</code>.

#### Output
* output [UpdateBillingGroupResponse](#updatebillinggroupresponse)

### CreateBillingGroup



```js
amazonaws_iot.CreateBillingGroup({
  "billingGroupName": ""
}, context)
```

#### Input
* input `object`
  * billingGroupName **required** `string`
  * tags `array`: Metadata which can be used to manage the billing group.
    * items [Tag](#tag)
  * billingGroupProperties `object`: The properties of a billing group.
    * billingGroupDescription

#### Output
* output [CreateBillingGroupResponse](#createbillinggroupresponse)

### ListThingsInBillingGroup



```js
amazonaws_iot.ListThingsInBillingGroup({
  "billingGroupName": ""
}, context)
```

#### Input
* input `object`
  * billingGroupName **required** `string`
  * nextToken `string`
  * maxResults `integer`

#### Output
* output [ListThingsInBillingGroupResponse](#listthingsinbillinggroupresponse)

### RegisterCACertificate



```js
amazonaws_iot.RegisterCACertificate({
  "caCertificate": "",
  "verificationCertificate": ""
}, context)
```

#### Input
* input `object`
  * setAsActive `boolean`
  * allowAutoRegistration `boolean`
  * tags `array`: <p>Metadata which can be used to manage the CA certificate.</p> <note> <p>For URI Request parameters use format: ...key1=value1&amp;key2=value2...</p> <p>For the CLI command-line parameter use format: &amp;&amp;tags "key1=value1&amp;key2=value2..."</p> <p>For the cli-input-json file use format: "tags": "key1=value1&amp;key2=value2..."</p> </note>
    * items [Tag](#tag)
  * caCertificate **required** `string`: The PEM of a certificate.
  * registrationConfig `object`: The registration configuration.
    * roleArn
    * templateBody
  * verificationCertificate **required** `string`: The PEM of a certificate.

#### Output
* output [RegisterCACertificateResponse](#registercacertificateresponse)

### DeleteCACertificate



```js
amazonaws_iot.DeleteCACertificate({
  "caCertificateId": ""
}, context)
```

#### Input
* input `object`
  * caCertificateId **required** `string`

#### Output
* output [DeleteCACertificateResponse](#deletecacertificateresponse)

### DescribeCACertificate



```js
amazonaws_iot.DescribeCACertificate({
  "caCertificateId": ""
}, context)
```

#### Input
* input `object`
  * caCertificateId **required** `string`

#### Output
* output [DescribeCACertificateResponse](#describecacertificateresponse)

### UpdateCACertificate



```js
amazonaws_iot.UpdateCACertificate({
  "caCertificateId": ""
}, context)
```

#### Input
* input `object`
  * caCertificateId **required** `string`
  * newStatus `string`
  * newAutoRegistrationStatus `string`
  * registrationConfig `object`: The registration configuration.
    * roleArn
    * templateBody
  * removeAutoRegistration `boolean`: If true, removes auto registration.

#### Output
*Output schema unknown*

### ListCACertificates



```js
amazonaws_iot.ListCACertificates({}, context)
```

#### Input
* input `object`
  * pageSize `integer`
  * marker `string`
  * isAscendingOrder `boolean`

#### Output
* output [ListCACertificatesResponse](#listcacertificatesresponse)

### CancelCertificateTransfer



```js
amazonaws_iot.CancelCertificateTransfer({
  "certificateId": ""
}, context)
```

#### Input
* input `object`
  * certificateId **required** `string`

#### Output
*Output schema unknown*

### RegisterCertificate



```js
amazonaws_iot.RegisterCertificate({
  "certificatePem": ""
}, context)
```

#### Input
* input `object`
  * setAsActive `boolean`
  * caCertificatePem `string`: The PEM of a certificate.
  * certificatePem **required** `string`: The PEM of a certificate.
  * status `string` (values: ACTIVE, INACTIVE, REVOKED, PENDING_TRANSFER, REGISTER_INACTIVE, PENDING_ACTIVATION): The status of the register certificate request.

#### Output
* output [RegisterCertificateResponse](#registercertificateresponse)

### RegisterCertificateWithoutCA



```js
amazonaws_iot.RegisterCertificateWithoutCA({
  "certificatePem": ""
}, context)
```

#### Input
* input `object`
  * certificatePem **required** `string`: The PEM of a certificate.
  * status `string` (values: ACTIVE, INACTIVE, REVOKED, PENDING_TRANSFER, REGISTER_INACTIVE, PENDING_ACTIVATION): The status of the register certificate request.

#### Output
* output [RegisterCertificateWithoutCAResponse](#registercertificatewithoutcaresponse)

### ListCertificates



```js
amazonaws_iot.ListCertificates({}, context)
```

#### Input
* input `object`
  * pageSize `integer`
  * marker `string`
  * isAscendingOrder `boolean`

#### Output
* output [ListCertificatesResponse](#listcertificatesresponse)

### CreateCertificateFromCsr



```js
amazonaws_iot.CreateCertificateFromCsr({
  "certificateSigningRequest": ""
}, context)
```

#### Input
* input `object`
  * setAsActive `boolean`
  * certificateSigningRequest **required** `string`: The certificate signing request (CSR).

#### Output
* output [CreateCertificateFromCsrResponse](#createcertificatefromcsrresponse)

### ListCertificatesByCA



```js
amazonaws_iot.ListCertificatesByCA({
  "caCertificateId": ""
}, context)
```

#### Input
* input `object`
  * caCertificateId **required** `string`
  * pageSize `integer`
  * marker `string`
  * isAscendingOrder `boolean`

#### Output
* output [ListCertificatesByCAResponse](#listcertificatesbycaresponse)

### ListOutgoingCertificates



```js
amazonaws_iot.ListOutgoingCertificates({}, context)
```

#### Input
* input `object`
  * pageSize `integer`
  * marker `string`
  * isAscendingOrder `boolean`

#### Output
* output [ListOutgoingCertificatesResponse](#listoutgoingcertificatesresponse)

### DeleteCertificate



```js
amazonaws_iot.DeleteCertificate({
  "certificateId": ""
}, context)
```

#### Input
* input `object`
  * certificateId **required** `string`
  * forceDelete `boolean`

#### Output
*Output schema unknown*

### DescribeCertificate



```js
amazonaws_iot.DescribeCertificate({
  "certificateId": ""
}, context)
```

#### Input
* input `object`
  * certificateId **required** `string`

#### Output
* output [DescribeCertificateResponse](#describecertificateresponse)

### UpdateCertificate



```js
amazonaws_iot.UpdateCertificate({
  "certificateId": "",
  "newStatus": ""
}, context)
```

#### Input
* input `object`
  * certificateId **required** `string`
  * newStatus **required** `string`

#### Output
*Output schema unknown*

### ConfirmTopicRuleDestination



```js
amazonaws_iot.ConfirmTopicRuleDestination({
  "confirmationToken": ""
}, context)
```

#### Input
* input `object`
  * confirmationToken **required** `string`

#### Output
* output [ConfirmTopicRuleDestinationResponse](#confirmtopicruledestinationresponse)

### DeleteCustomMetric



```js
amazonaws_iot.DeleteCustomMetric({
  "metricName": ""
}, context)
```

#### Input
* input `object`
  * metricName **required** `string`

#### Output
* output [DeleteCustomMetricResponse](#deletecustommetricresponse)

### DescribeCustomMetric



```js
amazonaws_iot.DescribeCustomMetric({
  "metricName": ""
}, context)
```

#### Input
* input `object`
  * metricName **required** `string`

#### Output
* output [DescribeCustomMetricResponse](#describecustommetricresponse)

### UpdateCustomMetric



```js
amazonaws_iot.UpdateCustomMetric({
  "metricName": "",
  "displayName": ""
}, context)
```

#### Input
* input `object`
  * metricName **required** `string`
  * displayName **required** `string`:  Field represents a friendly name in the console for the custom metric, it doesn't have to be unique. Don't use this name as the metric identifier in the device metric report. Can be updated. 

#### Output
* output [UpdateCustomMetricResponse](#updatecustommetricresponse)

### CreateCustomMetric



```js
amazonaws_iot.CreateCustomMetric({
  "metricName": "",
  "metricType": "",
  "clientRequestToken": ""
}, context)
```

#### Input
* input `object`
  * metricName **required** `string`
  * tags `array`:  Metadata that can be used to manage the custom metric. 
    * items [Tag](#tag)
  * clientRequestToken **required** `string`: Each custom metric must have a unique client request token. If you try to create a new custom metric that already exists with a different token, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request. 
  * displayName `string`:  Field represents a friendly name in the console for the custom metric; it doesn't have to be unique. Don't use this name as the metric identifier in the device metric report. Can be updated once defined.
  * metricType **required** `string` (values: string-list, ip-address-list, number-list, number):  The type of the custom metric. Types include <code>string-list</code>, <code>ip-address-list</code>, <code>number-list</code>, and <code>number</code>. 

#### Output
* output [CreateCustomMetricResponse](#createcustommetricresponse)

### ListCustomMetrics



```js
amazonaws_iot.ListCustomMetrics({}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * maxResults `integer`

#### Output
* output [ListCustomMetricsResponse](#listcustommetricsresponse)

### ClearDefaultAuthorizer



```js
amazonaws_iot.ClearDefaultAuthorizer({}, context)
```

#### Input
* input `object`

#### Output
* output [ClearDefaultAuthorizerResponse](#cleardefaultauthorizerresponse)

### DescribeDefaultAuthorizer



```js
amazonaws_iot.DescribeDefaultAuthorizer({}, context)
```

#### Input
* input `object`

#### Output
* output [DescribeDefaultAuthorizerResponse](#describedefaultauthorizerresponse)

### SetDefaultAuthorizer



```js
amazonaws_iot.SetDefaultAuthorizer({
  "authorizerName": ""
}, context)
```

#### Input
* input `object`
  * authorizerName **required** `string`: The authorizer name.

#### Output
* output [SetDefaultAuthorizerResponse](#setdefaultauthorizerresponse)

### ListTopicRuleDestinations



```js
amazonaws_iot.ListTopicRuleDestinations({}, context)
```

#### Input
* input `object`
  * maxResults `integer`
  * nextToken `string`

#### Output
* output [ListTopicRuleDestinationsResponse](#listtopicruledestinationsresponse)

### UpdateTopicRuleDestination



```js
amazonaws_iot.UpdateTopicRuleDestination({
  "arn": "",
  "status": ""
}, context)
```

#### Input
* input `object`
  * arn **required** `string`: The ARN of the topic rule destination.
  * status **required** `string` (values: ENABLED, IN_PROGRESS, DISABLED, ERROR, DELETING): <p>The status of the topic rule destination. Valid values are:</p> <dl> <dt>IN_PROGRESS</dt> <dd> <p>A topic rule destination was created but has not been confirmed. You can set <code>status</code> to <code>IN_PROGRESS</code> by calling <code>UpdateTopicRuleDestination</code>. Calling <code>UpdateTopicRuleDestination</code> causes a new confirmation challenge to be sent to your confirmation endpoint.</p> </dd> <dt>ENABLED</dt> <dd> <p>Confirmation was completed, and traffic to this destination is allowed. You can set <code>status</code> to <code>DISABLED</code> by calling <code>UpdateTopicRuleDestination</code>.</p> </dd> <dt>DISABLED</dt> <dd> <p>Confirmation was completed, and traffic to this destination is not allowed. You can set <code>status</code> to <code>ENABLED</code> by calling <code>UpdateTopicRuleDestination</code>.</p> </dd> <dt>ERROR</dt> <dd> <p>Confirmation could not be completed, for example if the confirmation timed out. You can call <code>GetTopicRuleDestination</code> for details about the error. You can set <code>status</code> to <code>IN_PROGRESS</code> by calling <code>UpdateTopicRuleDestination</code>. Calling <code>UpdateTopicRuleDestination</code> causes a new confirmation challenge to be sent to your confirmation endpoint.</p> </dd> </dl>

#### Output
* output [UpdateTopicRuleDestinationResponse](#updatetopicruledestinationresponse)

### CreateTopicRuleDestination



```js
amazonaws_iot.CreateTopicRuleDestination({
  "destinationConfiguration": {}
}, context)
```

#### Input
* input `object`
  * destinationConfiguration **required** `object`: Configuration of the topic rule destination.
    * httpUrlConfiguration
      * confirmationUrl **required**
    * vpcConfiguration
      * roleArn **required**
      * securityGroups
        * items [SecurityGroupId](#securitygroupid)
      * subnetIds **required**
        * items [SubnetId](#subnetid)
      * vpcId **required**

#### Output
* output [CreateTopicRuleDestinationResponse](#createtopicruledestinationresponse)

### DeleteTopicRuleDestination



```js
amazonaws_iot.DeleteTopicRuleDestination({
  "arn": ""
}, context)
```

#### Input
* input `object`
  * arn **required** `string`

#### Output
* output [DeleteTopicRuleDestinationResponse](#deletetopicruledestinationresponse)

### GetTopicRuleDestination



```js
amazonaws_iot.GetTopicRuleDestination({
  "arn": ""
}, context)
```

#### Input
* input `object`
  * arn **required** `string`

#### Output
* output [GetTopicRuleDestinationResponse](#gettopicruledestinationresponse)

### ListDetectMitigationActionsExecutions



```js
amazonaws_iot.ListDetectMitigationActionsExecutions({}, context)
```

#### Input
* input `object`
  * taskId `string`
  * violationId `string`
  * thingName `string`
  * startTime `string`
  * endTime `string`
  * maxResults `integer`
  * nextToken `string`

#### Output
* output [ListDetectMitigationActionsExecutionsResponse](#listdetectmitigationactionsexecutionsresponse)

### ListDetectMitigationActionsTasks



```js
amazonaws_iot.ListDetectMitigationActionsTasks({
  "startTime": "",
  "endTime": ""
}, context)
```

#### Input
* input `object`
  * maxResults `integer`
  * nextToken `string`
  * startTime **required** `string`
  * endTime **required** `string`

#### Output
* output [ListDetectMitigationActionsTasksResponse](#listdetectmitigationactionstasksresponse)

### DescribeDetectMitigationActionsTask



```js
amazonaws_iot.DescribeDetectMitigationActionsTask({
  "taskId": ""
}, context)
```

#### Input
* input `object`
  * taskId **required** `string`

#### Output
* output [DescribeDetectMitigationActionsTaskResponse](#describedetectmitigationactionstaskresponse)

### StartDetectMitigationActionsTask



```js
amazonaws_iot.StartDetectMitigationActionsTask({
  "taskId": "",
  "target": {},
  "actions": [],
  "clientRequestToken": ""
}, context)
```

#### Input
* input `object`
  * taskId **required** `string`
  * actions **required** `array`:  The actions to be performed when a device has unexpected behavior. 
    * items [MitigationActionName](#mitigationactionname)
  * clientRequestToken **required** `string`:  Each mitigation action task must have a unique client request token. If you try to create a new task with the same token as a task that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request. 
  * includeOnlyActiveViolations `boolean`:  Specifies to list only active violations. 
  * includeSuppressedAlerts `boolean`:  Specifies to include suppressed alerts. 
  * target **required** `object`:  The target of a mitigation action task. 
    * behaviorName
    * securityProfileName
    * violationIds
      * items [ViolationId](#violationid)
  * violationEventOccurrenceRange `object`:  Specifies the time period of which violation events occurred between. 
    * endTime
    * startTime

#### Output
* output [StartDetectMitigationActionsTaskResponse](#startdetectmitigationactionstaskresponse)

### CancelDetectMitigationActionsTask



```js
amazonaws_iot.CancelDetectMitigationActionsTask({
  "taskId": ""
}, context)
```

#### Input
* input `object`
  * taskId **required** `string`

#### Output
* output [CancelDetectMitigationActionsTaskResponse](#canceldetectmitigationactionstaskresponse)

### ListDimensions



```js
amazonaws_iot.ListDimensions({}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * maxResults `integer`

#### Output
* output [ListDimensionsResponse](#listdimensionsresponse)

### DeleteDimension



```js
amazonaws_iot.DeleteDimension({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`

#### Output
* output [DeleteDimensionResponse](#deletedimensionresponse)

### DescribeDimension



```js
amazonaws_iot.DescribeDimension({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`

#### Output
* output [DescribeDimensionResponse](#describedimensionresponse)

### UpdateDimension



```js
amazonaws_iot.UpdateDimension({
  "name": "",
  "stringValues": []
}, context)
```

#### Input
* input `object`
  * name **required** `string`
  * stringValues **required** `array`: Specifies the value or list of values for the dimension. For <code>TOPIC_FILTER</code> dimensions, this is a pattern used to match the MQTT topic (for example, "admin/#").
    * items [DimensionStringValue](#dimensionstringvalue)

#### Output
* output [UpdateDimensionResponse](#updatedimensionresponse)

### CreateDimension



```js
amazonaws_iot.CreateDimension({
  "name": "",
  "type": "",
  "stringValues": [],
  "clientRequestToken": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`
  * tags `array`: Metadata that can be used to manage the dimension.
    * items [Tag](#tag)
  * clientRequestToken **required** `string`: Each dimension must have a unique client request token. If you try to create a new dimension with the same token as a dimension that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request.
  * stringValues **required** `array`: Specifies the value or list of values for the dimension. For <code>TOPIC_FILTER</code> dimensions, this is a pattern used to match the MQTT topic (for example, "admin/#").
    * items [DimensionStringValue](#dimensionstringvalue)
  * type **required** `string` (values: TOPIC_FILTER): Specifies the type of dimension. Supported types: <code>TOPIC_FILTER.</code> 

#### Output
* output [CreateDimensionResponse](#createdimensionresponse)

### ListDomainConfigurations



```js
amazonaws_iot.ListDomainConfigurations({}, context)
```

#### Input
* input `object`
  * marker `string`
  * pageSize `integer`
  * serviceType `string`

#### Output
* output [ListDomainConfigurationsResponse](#listdomainconfigurationsresponse)

### DeleteDomainConfiguration



```js
amazonaws_iot.DeleteDomainConfiguration({
  "domainConfigurationName": ""
}, context)
```

#### Input
* input `object`
  * domainConfigurationName **required** `string`

#### Output
* output [DeleteDomainConfigurationResponse](#deletedomainconfigurationresponse)

### DescribeDomainConfiguration



```js
amazonaws_iot.DescribeDomainConfiguration({
  "domainConfigurationName": ""
}, context)
```

#### Input
* input `object`
  * domainConfigurationName **required** `string`

#### Output
* output [DescribeDomainConfigurationResponse](#describedomainconfigurationresponse)

### CreateDomainConfiguration



```js
amazonaws_iot.CreateDomainConfiguration({
  "domainConfigurationName": ""
}, context)
```

#### Input
* input `object`
  * domainConfigurationName **required** `string`
  * tags `array`: <p>Metadata which can be used to manage the domain configuration.</p> <note> <p>For URI Request parameters use format: ...key1=value1&amp;key2=value2...</p> <p>For the CLI command-line parameter use format: &amp;&amp;tags "key1=value1&amp;key2=value2..."</p> <p>For the cli-input-json file use format: "tags": "key1=value1&amp;key2=value2..."</p> </note>
    * items [Tag](#tag)
  * authorizerConfig `object`: An object that specifies the authorization service for a domain.
    * allowAuthorizerOverride
    * defaultAuthorizerName
  * domainName `string`: The name of the domain.
  * serverCertificateArns `array`: The ARNs of the certificates that AWS IoT passes to the device during the TLS handshake. Currently you can specify only one certificate ARN. This value is not required for AWS-managed domains.
    * items [AcmCertificateArn](#acmcertificatearn)
  * serviceType `string` (values: DATA, CREDENTIAL_PROVIDER, JOBS): <p>The type of service delivered by the endpoint.</p> <note> <p>AWS IoT Core currently supports only the <code>DATA</code> service type.</p> </note>
  * validationCertificateArn `string`: The certificate used to validate the server certificate and prove domain name ownership. This certificate must be signed by a public certificate authority. This value is not required for AWS-managed domains.

#### Output
* output [CreateDomainConfigurationResponse](#createdomainconfigurationresponse)

### UpdateDomainConfiguration



```js
amazonaws_iot.UpdateDomainConfiguration({
  "domainConfigurationName": ""
}, context)
```

#### Input
* input `object`
  * domainConfigurationName **required** `string`
  * authorizerConfig `object`: An object that specifies the authorization service for a domain.
    * allowAuthorizerOverride
    * defaultAuthorizerName
  * domainConfigurationStatus `string` (values: ENABLED, DISABLED): The status to which the domain configuration should be updated.
  * removeAuthorizerConfig `boolean`: Removes the authorization configuration from a domain.

#### Output
* output [UpdateDomainConfigurationResponse](#updatedomainconfigurationresponse)

### DeleteDynamicThingGroup



```js
amazonaws_iot.DeleteDynamicThingGroup({
  "thingGroupName": ""
}, context)
```

#### Input
* input `object`
  * thingGroupName **required** `string`
  * expectedVersion `integer`

#### Output
* output [DeleteDynamicThingGroupResponse](#deletedynamicthinggroupresponse)

### UpdateDynamicThingGroup



```js
amazonaws_iot.UpdateDynamicThingGroup({
  "thingGroupName": "",
  "thingGroupProperties": {}
}, context)
```

#### Input
* input `object`
  * thingGroupName **required** `string`
  * expectedVersion `integer`: The expected version of the dynamic thing group to update.
  * indexName `string`: <p>The dynamic thing group index to update.</p> <note> <p>Currently one index is supported: 'AWS_Things'.</p> </note>
  * queryString `string`: The dynamic thing group search query string to update.
  * queryVersion `string`: <p>The dynamic thing group query version to update.</p> <note> <p>Currently one query version is supported: "2017-09-30". If not specified, the query version defaults to this value.</p> </note>
  * thingGroupProperties **required** `object`: Thing group properties.
    * attributePayload
      * attributes
      * merge
    * thingGroupDescription

#### Output
* output [UpdateDynamicThingGroupResponse](#updatedynamicthinggroupresponse)

### CreateDynamicThingGroup



```js
amazonaws_iot.CreateDynamicThingGroup({
  "thingGroupName": "",
  "queryString": ""
}, context)
```

#### Input
* input `object`
  * thingGroupName **required** `string`
  * tags `array`: Metadata which can be used to manage the dynamic thing group.
    * items [Tag](#tag)
  * indexName `string`: <p>The dynamic thing group index name.</p> <note> <p>Currently one index is supported: "AWS_Things".</p> </note>
  * queryString **required** `string`: <p>The dynamic thing group search query string.</p> <p>See <a href="https://docs.aws.amazon.com/iot/latest/developerguide/query-syntax.html">Query Syntax</a> for information about query string syntax.</p>
  * queryVersion `string`: <p>The dynamic thing group query version.</p> <note> <p>Currently one query version is supported: "2017-09-30". If not specified, the query version defaults to this value.</p> </note>
  * thingGroupProperties `object`: Thing group properties.
    * attributePayload
      * attributes
      * merge
    * thingGroupDescription

#### Output
* output [CreateDynamicThingGroupResponse](#createdynamicthinggroupresponse)

### GetEffectivePolicies



```js
amazonaws_iot.GetEffectivePolicies({}, context)
```

#### Input
* input `object`
  * thingName `string`
  * cognitoIdentityPoolId `string`: The Cognito identity pool ID.
  * principal `string`: The principal. Valid principals are CertificateArn (arn:aws:iot:<i>region</i>:<i>accountId</i>:cert/<i>certificateId</i>), thingGroupArn (arn:aws:iot:<i>region</i>:<i>accountId</i>:thinggroup/<i>groupName</i>) and CognitoId (<i>region</i>:<i>id</i>).

#### Output
* output [GetEffectivePoliciesResponse](#geteffectivepoliciesresponse)

### DescribeEndpoint



```js
amazonaws_iot.DescribeEndpoint({}, context)
```

#### Input
* input `object`
  * endpointType `string`

#### Output
* output [DescribeEndpointResponse](#describeendpointresponse)

### DescribeEventConfigurations



```js
amazonaws_iot.DescribeEventConfigurations({}, context)
```

#### Input
* input `object`

#### Output
* output [DescribeEventConfigurationsResponse](#describeeventconfigurationsresponse)

### UpdateEventConfigurations



```js
amazonaws_iot.UpdateEventConfigurations({}, context)
```

#### Input
* input `object`
  * eventConfigurations `object`: The new event configuration values.

#### Output
* output [UpdateEventConfigurationsResponse](#updateeventconfigurationsresponse)

### GetIndexingConfiguration



```js
amazonaws_iot.GetIndexingConfiguration({}, context)
```

#### Input
* input `object`

#### Output
* output [GetIndexingConfigurationResponse](#getindexingconfigurationresponse)

### UpdateIndexingConfiguration



```js
amazonaws_iot.UpdateIndexingConfiguration({}, context)
```

#### Input
* input `object`
  * thingGroupIndexingConfiguration `object`: Thing group indexing configuration.
    * customFields
      * items [Field](#field)
    * managedFields
      * items [Field](#field)
    * thingGroupIndexingMode
  * thingIndexingConfiguration `object`: The thing indexing configuration. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/managing-index.html">Managing Thing Indexing</a>.
    * customFields
      * items [Field](#field)
    * managedFields
      * items [Field](#field)
    * thingConnectivityIndexingMode
    * thingIndexingMode

#### Output
* output [UpdateIndexingConfigurationResponse](#updateindexingconfigurationresponse)

### ListIndices



```js
amazonaws_iot.ListIndices({}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * maxResults `integer`

#### Output
* output [ListIndicesResponse](#listindicesresponse)

### GetCardinality



```js
amazonaws_iot.GetCardinality({
  "queryString": ""
}, context)
```

#### Input
* input `object`
  * aggregationField `string`: The field to aggregate.
  * indexName `string`: The name of the index to search.
  * queryString **required** `string`: The search query.
  * queryVersion `string`: The query version.

#### Output
* output [GetCardinalityResponse](#getcardinalityresponse)

### GetPercentiles



```js
amazonaws_iot.GetPercentiles({
  "queryString": ""
}, context)
```

#### Input
* input `object`
  * aggregationField `string`: The field to aggregate.
  * indexName `string`: The name of the index to search.
  * percents `array`: The percentile groups returned.
    * items [Percent](#percent)
  * queryString **required** `string`: The query string.
  * queryVersion `string`: The query version.

#### Output
* output [GetPercentilesResponse](#getpercentilesresponse)

### SearchIndex



```js
amazonaws_iot.SearchIndex({
  "queryString": ""
}, context)
```

#### Input
* input `object`
  * indexName `string`: The search index name.
  * maxResults `integer`: The maximum number of results to return at one time.
  * nextToken `string`: The token used to get the next set of results, or <code>null</code> if there are no additional results.
  * queryString **required** `string`: The search query string.
  * queryVersion `string`: The query version.

#### Output
* output [SearchIndexResponse](#searchindexresponse)

### GetStatistics



```js
amazonaws_iot.GetStatistics({
  "queryString": ""
}, context)
```

#### Input
* input `object`
  * aggregationField `string`: The aggregation field name.
  * indexName `string`: The name of the index to search. The default value is <code>AWS_Things</code>.
  * queryString **required** `string`: The query used to search. You can specify "*" for the query string to get the count of all indexed things in your AWS account.
  * queryVersion `string`: The version of the query used to search.

#### Output
* output [GetStatisticsResponse](#getstatisticsresponse)

### DescribeIndex



```js
amazonaws_iot.DescribeIndex({
  "indexName": ""
}, context)
```

#### Input
* input `object`
  * indexName **required** `string`

#### Output
* output [DescribeIndexResponse](#describeindexresponse)

### ListJobs



```js
amazonaws_iot.ListJobs({}, context)
```

#### Input
* input `object`
  * status `string`
  * targetSelection `string`
  * maxResults `integer`
  * nextToken `string`
  * thingGroupName `string`
  * thingGroupId `string`
  * namespaceId `string`

#### Output
* output [ListJobsResponse](#listjobsresponse)

### DeleteJob



```js
amazonaws_iot.DeleteJob({
  "jobId": ""
}, context)
```

#### Input
* input `object`
  * jobId **required** `string`
  * force `boolean`
  * namespaceId `string`

#### Output
*Output schema unknown*

### DescribeJob



```js
amazonaws_iot.DescribeJob({
  "jobId": ""
}, context)
```

#### Input
* input `object`
  * jobId **required** `string`

#### Output
* output [DescribeJobResponse](#describejobresponse)

### UpdateJob



```js
amazonaws_iot.UpdateJob({
  "jobId": ""
}, context)
```

#### Input
* input `object`
  * jobId **required** `string`
  * namespaceId `string`
  * abortConfig `object`: The criteria that determine when and how a job abort takes place.
    * criteriaList
      * items [AbortCriteria](#abortcriteria)
  * description `string`: A short text description of the job.
  * jobExecutionsRolloutConfig `object`: Allows you to create a staged rollout of a job.
    * exponentialRate
      * baseRatePerMinute **required**
      * incrementFactor **required**
      * rateIncreaseCriteria **required**
        * numberOfNotifiedThings
        * numberOfSucceededThings
    * maximumPerMinute
  * presignedUrlConfig `object`: Configuration for pre-signed S3 URLs.
    * expiresInSec
    * roleArn
  * timeoutConfig `object`: Specifies the amount of time each device has to finish its execution of the job. A timer is started when the job execution status is set to <code>IN_PROGRESS</code>. If the job execution status is not set to another terminal state before the timer expires, it will be automatically set to <code>TIMED_OUT</code>.
    * inProgressTimeoutInMinutes

#### Output
*Output schema unknown*

### CreateJob



```js
amazonaws_iot.CreateJob({
  "jobId": "",
  "targets": []
}, context)
```

#### Input
* input `object`
  * jobId **required** `string`
  * tags `array`: Metadata which can be used to manage the job.
    * items [Tag](#tag)
  * abortConfig `object`: The criteria that determine when and how a job abort takes place.
    * criteriaList
      * items [AbortCriteria](#abortcriteria)
  * description `string`: A short text description of the job.
  * document `string`: <p>The job document.</p> <note> <p>If the job document resides in an S3 bucket, you must use a placeholder link when specifying the document.</p> <p>The placeholder link is of the following form:</p> <p> <code>${aws:iot:s3-presigned-url:https://s3.amazonaws.com/<i>bucket</i>/<i>key</i>}</code> </p> <p>where <i>bucket</i> is your bucket name and <i>key</i> is the object in the bucket to which you are linking.</p> </note>
  * documentSource `string`: An S3 link to the job document.
  * jobExecutionsRolloutConfig `object`: Allows you to create a staged rollout of a job.
    * exponentialRate
      * baseRatePerMinute **required**
      * incrementFactor **required**
      * rateIncreaseCriteria **required**
        * numberOfNotifiedThings
        * numberOfSucceededThings
    * maximumPerMinute
  * namespaceId `string`: <p>The namespace used to indicate that a job is a customer-managed job.</p> <p>When you specify a value for this parameter, AWS IoT Core sends jobs notifications to MQTT topics that contain the value in the following format.</p> <p> <code>$aws/things/<i>THING_NAME</i>/jobs/<i>JOB_ID</i>/notify-namespace-<i>NAMESPACE_ID</i>/</code> </p> <note> <p>The <code>namespaceId</code> feature is in public preview.</p> </note>
  * presignedUrlConfig `object`: Configuration for pre-signed S3 URLs.
    * expiresInSec
    * roleArn
  * targetSelection `string` (values: CONTINUOUS, SNAPSHOT): Specifies whether the job will continue to run (CONTINUOUS), or will be complete after all those things specified as targets have completed the job (SNAPSHOT). If continuous, the job may also be run on a thing when a change is detected in a target. For example, a job will run on a thing when the thing is added to a target group, even after the job was completed by all things originally in the group.
  * targets **required** `array`: A list of things and thing groups to which the job should be sent.
    * items [TargetArn](#targetarn)
  * timeoutConfig `object`: Specifies the amount of time each device has to finish its execution of the job. A timer is started when the job execution status is set to <code>IN_PROGRESS</code>. If the job execution status is not set to another terminal state before the timer expires, it will be automatically set to <code>TIMED_OUT</code>.
    * inProgressTimeoutInMinutes

#### Output
* output [CreateJobResponse](#createjobresponse)

### CancelJob



```js
amazonaws_iot.CancelJob({
  "jobId": ""
}, context)
```

#### Input
* input `object`
  * jobId **required** `string`
  * force `boolean`
  * comment `string`: An optional comment string describing why the job was canceled.
  * reasonCode `string`: (Optional)A reason code string that explains why the job was canceled.

#### Output
* output [CancelJobResponse](#canceljobresponse)

### GetJobDocument



```js
amazonaws_iot.GetJobDocument({
  "jobId": ""
}, context)
```

#### Input
* input `object`
  * jobId **required** `string`

#### Output
* output [GetJobDocumentResponse](#getjobdocumentresponse)

### AssociateTargetsWithJob



```js
amazonaws_iot.AssociateTargetsWithJob({
  "jobId": "",
  "targets": []
}, context)
```

#### Input
* input `object`
  * jobId **required** `string`
  * namespaceId `string`
  * comment `string`: An optional comment string describing why the job was associated with the targets.
  * targets **required** `array`: A list of thing group ARNs that define the targets of the job.
    * items [TargetArn](#targetarn)

#### Output
* output [AssociateTargetsWithJobResponse](#associatetargetswithjobresponse)

### ListJobExecutionsForJob



```js
amazonaws_iot.ListJobExecutionsForJob({
  "jobId": ""
}, context)
```

#### Input
* input `object`
  * jobId **required** `string`
  * status `string`
  * maxResults `integer`
  * nextToken `string`

#### Output
* output [ListJobExecutionsForJobResponse](#listjobexecutionsforjobresponse)

### CreateKeysAndCertificate



```js
amazonaws_iot.CreateKeysAndCertificate({}, context)
```

#### Input
* input `object`
  * setAsActive `boolean`

#### Output
* output [CreateKeysAndCertificateResponse](#createkeysandcertificateresponse)

### GetLoggingOptions



```js
amazonaws_iot.GetLoggingOptions({}, context)
```

#### Input
* input `object`

#### Output
* output [GetLoggingOptionsResponse](#getloggingoptionsresponse)

### SetLoggingOptions



```js
amazonaws_iot.SetLoggingOptions({
  "loggingOptionsPayload": {}
}, context)
```

#### Input
* input `object`
  * loggingOptionsPayload **required** `object`: Describes the logging options payload.
    * logLevel
    * roleArn

#### Output
*Output schema unknown*

### ListMitigationActions



```js
amazonaws_iot.ListMitigationActions({}, context)
```

#### Input
* input `object`
  * actionType `string`
  * maxResults `integer`
  * nextToken `string`

#### Output
* output [ListMitigationActionsResponse](#listmitigationactionsresponse)

### DeleteMitigationAction



```js
amazonaws_iot.DeleteMitigationAction({
  "actionName": ""
}, context)
```

#### Input
* input `object`
  * actionName **required** `string`

#### Output
* output [DeleteMitigationActionResponse](#deletemitigationactionresponse)

### DescribeMitigationAction



```js
amazonaws_iot.DescribeMitigationAction({
  "actionName": ""
}, context)
```

#### Input
* input `object`
  * actionName **required** `string`

#### Output
* output [DescribeMitigationActionResponse](#describemitigationactionresponse)

### UpdateMitigationAction



```js
amazonaws_iot.UpdateMitigationAction({
  "actionName": ""
}, context)
```

#### Input
* input `object`
  * actionName **required** `string`
  * actionParams `object`: The set of parameters for this mitigation action. You can specify only one type of parameter (in other words, you can apply only one action for each defined mitigation action).
    * addThingsToThingGroupParams
      * overrideDynamicGroups
      * thingGroupNames **required**
        * items [ThingGroupName](#thinggroupname)
    * enableIoTLoggingParams
      * logLevel **required**
      * roleArnForLogging **required**
    * publishFindingToSnsParams
      * topicArn **required**
    * replaceDefaultPolicyVersionParams
      * templateName **required**
    * updateCACertificateParams
      * action **required**
    * updateDeviceCertificateParams
      * action **required**
  * roleArn `string`: The ARN of the IAM role that is used to apply the mitigation action.

#### Output
* output [UpdateMitigationActionResponse](#updatemitigationactionresponse)

### CreateMitigationAction



```js
amazonaws_iot.CreateMitigationAction({
  "actionName": "",
  "roleArn": "",
  "actionParams": {}
}, context)
```

#### Input
* input `object`
  * actionName **required** `string`
  * tags `array`: Metadata that can be used to manage the mitigation action.
    * items [Tag](#tag)
  * actionParams **required** `object`: The set of parameters for this mitigation action. You can specify only one type of parameter (in other words, you can apply only one action for each defined mitigation action).
    * addThingsToThingGroupParams
      * overrideDynamicGroups
      * thingGroupNames **required**
        * items [ThingGroupName](#thinggroupname)
    * enableIoTLoggingParams
      * logLevel **required**
      * roleArnForLogging **required**
    * publishFindingToSnsParams
      * topicArn **required**
    * replaceDefaultPolicyVersionParams
      * templateName **required**
    * updateCACertificateParams
      * action **required**
    * updateDeviceCertificateParams
      * action **required**
  * roleArn **required** `string`: The ARN of the IAM role that is used to apply the mitigation action.

#### Output
* output [CreateMitigationActionResponse](#createmitigationactionresponse)

### ListOTAUpdates



```js
amazonaws_iot.ListOTAUpdates({}, context)
```

#### Input
* input `object`
  * maxResults `integer`
  * nextToken `string`
  * otaUpdateStatus `string`

#### Output
* output [ListOTAUpdatesResponse](#listotaupdatesresponse)

### DeleteOTAUpdate



```js
amazonaws_iot.DeleteOTAUpdate({
  "otaUpdateId": ""
}, context)
```

#### Input
* input `object`
  * otaUpdateId **required** `string`
  * deleteStream `boolean`
  * forceDeleteAWSJob `boolean`

#### Output
* output [DeleteOTAUpdateResponse](#deleteotaupdateresponse)

### GetOTAUpdate



```js
amazonaws_iot.GetOTAUpdate({
  "otaUpdateId": ""
}, context)
```

#### Input
* input `object`
  * otaUpdateId **required** `string`

#### Output
* output [GetOTAUpdateResponse](#getotaupdateresponse)

### CreateOTAUpdate



```js
amazonaws_iot.CreateOTAUpdate({
  "otaUpdateId": "",
  "targets": [],
  "files": [],
  "roleArn": ""
}, context)
```

#### Input
* input `object`
  * otaUpdateId **required** `string`
  * tags `array`: Metadata which can be used to manage updates.
    * items [Tag](#tag)
  * additionalParameters `object`: A list of additional OTA update parameters which are name-value pairs.
  * awsJobAbortConfig `object`: The criteria that determine when and how a job abort takes place.
    * abortCriteriaList
      * items [AwsJobAbortCriteria](#awsjobabortcriteria)
  * awsJobExecutionsRolloutConfig `object`: Configuration for the rollout of OTA updates.
    * exponentialRate
      * baseRatePerMinute **required**
      * incrementFactor **required**
      * rateIncreaseCriteria **required**
        * numberOfNotifiedThings
        * numberOfSucceededThings
    * maximumPerMinute
  * awsJobPresignedUrlConfig `object`: Configuration information for pre-signed URLs. Valid when <code>protocols</code> contains HTTP.
    * expiresInSec
  * awsJobTimeoutConfig `object`: Specifies the amount of time each device has to finish its execution of the job. A timer is started when the job execution status is set to <code>IN_PROGRESS</code>. If the job execution status is not set to another terminal state before the timer expires, it will be automatically set to <code>TIMED_OUT</code>.
    * inProgressTimeoutInMinutes
  * description `string`: The description of the OTA update.
  * files **required** `array`: The files to be streamed by the OTA update.
    * items [OTAUpdateFile](#otaupdatefile)
  * protocols `array`: The protocol used to transfer the OTA update image. Valid values are [HTTP], [MQTT], [HTTP, MQTT]. When both HTTP and MQTT are specified, the target device can choose the protocol.
    * items [Protocol](#protocol)
  * roleArn **required** `string`: The IAM role that grants AWS IoT access to the Amazon S3, AWS IoT jobs and AWS Code Signing resources to create an OTA update job.
  * targetSelection `string` (values: CONTINUOUS, SNAPSHOT): Specifies whether the update will continue to run (CONTINUOUS), or will be complete after all the things specified as targets have completed the update (SNAPSHOT). If continuous, the update may also be run on a thing when a change is detected in a target. For example, an update will run on a thing when the thing is added to a target group, even after the update was completed by all things originally in the group. Valid values: CONTINUOUS | SNAPSHOT.
  * targets **required** `array`: The devices targeted to receive OTA updates.
    * items [Target](#target)

#### Output
* output [CreateOTAUpdateResponse](#createotaupdateresponse)

### ListPolicies



```js
amazonaws_iot.ListPolicies({}, context)
```

#### Input
* input `object`
  * marker `string`
  * pageSize `integer`
  * isAscendingOrder `boolean`

#### Output
* output [ListPoliciesResponse](#listpoliciesresponse)

### DeletePolicy



```js
amazonaws_iot.DeletePolicy({
  "policyName": ""
}, context)
```

#### Input
* input `object`
  * policyName **required** `string`

#### Output
*Output schema unknown*

### GetPolicy



```js
amazonaws_iot.GetPolicy({
  "policyName": ""
}, context)
```

#### Input
* input `object`
  * policyName **required** `string`

#### Output
* output [GetPolicyResponse](#getpolicyresponse)

### CreatePolicy



```js
amazonaws_iot.CreatePolicy({
  "policyName": "",
  "policyDocument": ""
}, context)
```

#### Input
* input `object`
  * policyName **required** `string`
  * tags `array`: <p>Metadata which can be used to manage the policy.</p> <note> <p>For URI Request parameters use format: ...key1=value1&amp;key2=value2...</p> <p>For the CLI command-line parameter use format: &amp;&amp;tags "key1=value1&amp;key2=value2..."</p> <p>For the cli-input-json file use format: "tags": "key1=value1&amp;key2=value2..."</p> </note>
    * items [Tag](#tag)
  * policyDocument **required** `string`: The JSON document that describes the policy. <b>policyDocument</b> must have a minimum length of 1, with a maximum length of 2048, excluding whitespace.

#### Output
* output [CreatePolicyResponse](#createpolicyresponse)

### ListPolicyVersions



```js
amazonaws_iot.ListPolicyVersions({
  "policyName": ""
}, context)
```

#### Input
* input `object`
  * policyName **required** `string`

#### Output
* output [ListPolicyVersionsResponse](#listpolicyversionsresponse)

### CreatePolicyVersion



```js
amazonaws_iot.CreatePolicyVersion({
  "policyName": "",
  "policyDocument": ""
}, context)
```

#### Input
* input `object`
  * policyName **required** `string`
  * setAsDefault `boolean`
  * policyDocument **required** `string`: The JSON document that describes the policy. Minimum length of 1. Maximum length of 2048, excluding whitespace.

#### Output
* output [CreatePolicyVersionResponse](#createpolicyversionresponse)

### DeletePolicyVersion



```js
amazonaws_iot.DeletePolicyVersion({
  "policyName": "",
  "policyVersionId": ""
}, context)
```

#### Input
* input `object`
  * policyName **required** `string`
  * policyVersionId **required** `string`

#### Output
*Output schema unknown*

### GetPolicyVersion



```js
amazonaws_iot.GetPolicyVersion({
  "policyName": "",
  "policyVersionId": ""
}, context)
```

#### Input
* input `object`
  * policyName **required** `string`
  * policyVersionId **required** `string`

#### Output
* output [GetPolicyVersionResponse](#getpolicyversionresponse)

### SetDefaultPolicyVersion



```js
amazonaws_iot.SetDefaultPolicyVersion({
  "policyName": "",
  "policyVersionId": ""
}, context)
```

#### Input
* input `object`
  * policyName **required** `string`
  * policyVersionId **required** `string`

#### Output
*Output schema unknown*

### ListPolicyPrincipals



```js
amazonaws_iot.ListPolicyPrincipals({
  "x-amzn-iot-policy": ""
}, context)
```

#### Input
* input `object`
  * x-amzn-iot-policy **required** `string`
  * marker `string`
  * pageSize `integer`
  * isAscendingOrder `boolean`

#### Output
* output [ListPolicyPrincipalsResponse](#listpolicyprincipalsresponse)

### ListTargetsForPolicy



```js
amazonaws_iot.ListTargetsForPolicy({
  "policyName": ""
}, context)
```

#### Input
* input `object`
  * policyName **required** `string`
  * marker `string`
  * pageSize `integer`

#### Output
* output [ListTargetsForPolicyResponse](#listtargetsforpolicyresponse)

### ListPrincipalPolicies



```js
amazonaws_iot.ListPrincipalPolicies({
  "x-amzn-iot-principal": ""
}, context)
```

#### Input
* input `object`
  * x-amzn-iot-principal **required** `string`
  * marker `string`
  * pageSize `integer`
  * isAscendingOrder `boolean`

#### Output
* output [ListPrincipalPoliciesResponse](#listprincipalpoliciesresponse)

### DetachPrincipalPolicy



```js
amazonaws_iot.DetachPrincipalPolicy({
  "policyName": "",
  "x-amzn-iot-principal": ""
}, context)
```

#### Input
* input `object`
  * policyName **required** `string`
  * x-amzn-iot-principal **required** `string`

#### Output
*Output schema unknown*

### AttachPrincipalPolicy



```js
amazonaws_iot.AttachPrincipalPolicy({
  "policyName": "",
  "x-amzn-iot-principal": ""
}, context)
```

#### Input
* input `object`
  * policyName **required** `string`
  * x-amzn-iot-principal **required** `string`

#### Output
*Output schema unknown*

### ListPrincipalThings



```js
amazonaws_iot.ListPrincipalThings({
  "x-amzn-principal": ""
}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * maxResults `integer`
  * x-amzn-principal **required** `string`

#### Output
* output [ListPrincipalThingsResponse](#listprincipalthingsresponse)

### ListProvisioningTemplates



```js
amazonaws_iot.ListProvisioningTemplates({}, context)
```

#### Input
* input `object`
  * maxResults `integer`
  * nextToken `string`

#### Output
* output [ListProvisioningTemplatesResponse](#listprovisioningtemplatesresponse)

### CreateProvisioningTemplate



```js
amazonaws_iot.CreateProvisioningTemplate({
  "templateName": "",
  "templateBody": "",
  "provisioningRoleArn": ""
}, context)
```

#### Input
* input `object`
  * tags `array`: <p>Metadata which can be used to manage the fleet provisioning template.</p> <note> <p>For URI Request parameters use format: ...key1=value1&amp;key2=value2...</p> <p>For the CLI command-line parameter use format: &amp;&amp;tags "key1=value1&amp;key2=value2..."</p> <p>For the cli-input-json file use format: "tags": "key1=value1&amp;key2=value2..."</p> </note>
    * items [Tag](#tag)
  * description `string`: The description of the fleet provisioning template.
  * enabled `boolean`: True to enable the fleet provisioning template, otherwise false.
  * preProvisioningHook `object`: Structure that contains <code>payloadVersion</code> and <code>targetArn</code>.
    * payloadVersion
    * targetArn
  * provisioningRoleArn **required** `string`: The role ARN for the role associated with the fleet provisioning template. This IoT role grants permission to provision a device.
  * templateBody **required** `string`: The JSON formatted contents of the fleet provisioning template.
  * templateName **required** `string`: The name of the fleet provisioning template.

#### Output
* output [CreateProvisioningTemplateResponse](#createprovisioningtemplateresponse)

### DeleteProvisioningTemplate



```js
amazonaws_iot.DeleteProvisioningTemplate({
  "templateName": ""
}, context)
```

#### Input
* input `object`
  * templateName **required** `string`

#### Output
* output [DeleteProvisioningTemplateResponse](#deleteprovisioningtemplateresponse)

### DescribeProvisioningTemplate



```js
amazonaws_iot.DescribeProvisioningTemplate({
  "templateName": ""
}, context)
```

#### Input
* input `object`
  * templateName **required** `string`

#### Output
* output [DescribeProvisioningTemplateResponse](#describeprovisioningtemplateresponse)

### UpdateProvisioningTemplate



```js
amazonaws_iot.UpdateProvisioningTemplate({
  "templateName": ""
}, context)
```

#### Input
* input `object`
  * templateName **required** `string`
  * defaultVersionId `integer`: The ID of the default provisioning template version.
  * description `string`: The description of the fleet provisioning template.
  * enabled `boolean`: True to enable the fleet provisioning template, otherwise false.
  * preProvisioningHook `object`: Structure that contains <code>payloadVersion</code> and <code>targetArn</code>.
    * payloadVersion
    * targetArn
  * provisioningRoleArn `string`: The ARN of the role associated with the provisioning template. This IoT role grants permission to provision a device.
  * removePreProvisioningHook `boolean`: Removes pre-provisioning hook template.

#### Output
* output [UpdateProvisioningTemplateResponse](#updateprovisioningtemplateresponse)

### CreateProvisioningClaim



```js
amazonaws_iot.CreateProvisioningClaim({
  "templateName": ""
}, context)
```

#### Input
* input `object`
  * templateName **required** `string`

#### Output
* output [CreateProvisioningClaimResponse](#createprovisioningclaimresponse)

### ListProvisioningTemplateVersions



```js
amazonaws_iot.ListProvisioningTemplateVersions({
  "templateName": ""
}, context)
```

#### Input
* input `object`
  * templateName **required** `string`
  * maxResults `integer`
  * nextToken `string`

#### Output
* output [ListProvisioningTemplateVersionsResponse](#listprovisioningtemplateversionsresponse)

### CreateProvisioningTemplateVersion



```js
amazonaws_iot.CreateProvisioningTemplateVersion({
  "templateName": "",
  "templateBody": ""
}, context)
```

#### Input
* input `object`
  * templateName **required** `string`
  * setAsDefault `boolean`
  * templateBody **required** `string`: The JSON formatted contents of the fleet provisioning template.

#### Output
* output [CreateProvisioningTemplateVersionResponse](#createprovisioningtemplateversionresponse)

### DeleteProvisioningTemplateVersion



```js
amazonaws_iot.DeleteProvisioningTemplateVersion({
  "templateName": "",
  "versionId": 0
}, context)
```

#### Input
* input `object`
  * templateName **required** `string`
  * versionId **required** `integer`

#### Output
* output [DeleteProvisioningTemplateVersionResponse](#deleteprovisioningtemplateversionresponse)

### DescribeProvisioningTemplateVersion



```js
amazonaws_iot.DescribeProvisioningTemplateVersion({
  "templateName": "",
  "versionId": 0
}, context)
```

#### Input
* input `object`
  * templateName **required** `string`
  * versionId **required** `integer`

#### Output
* output [DescribeProvisioningTemplateVersionResponse](#describeprovisioningtemplateversionresponse)

### DeleteRegistrationCode



```js
amazonaws_iot.DeleteRegistrationCode({}, context)
```

#### Input
* input `object`

#### Output
* output [DeleteRegistrationCodeResponse](#deleteregistrationcoderesponse)

### GetRegistrationCode



```js
amazonaws_iot.GetRegistrationCode({}, context)
```

#### Input
* input `object`

#### Output
* output [GetRegistrationCodeResponse](#getregistrationcoderesponse)

### RejectCertificateTransfer



```js
amazonaws_iot.RejectCertificateTransfer({
  "certificateId": ""
}, context)
```

#### Input
* input `object`
  * certificateId **required** `string`
  * rejectReason `string`: The reason the certificate transfer was rejected.

#### Output
*Output schema unknown*

### ListRoleAliases



```js
amazonaws_iot.ListRoleAliases({}, context)
```

#### Input
* input `object`
  * pageSize `integer`
  * marker `string`
  * isAscendingOrder `boolean`

#### Output
* output [ListRoleAliasesResponse](#listrolealiasesresponse)

### DeleteRoleAlias



```js
amazonaws_iot.DeleteRoleAlias({
  "roleAlias": ""
}, context)
```

#### Input
* input `object`
  * roleAlias **required** `string`

#### Output
* output [DeleteRoleAliasResponse](#deleterolealiasresponse)

### DescribeRoleAlias



```js
amazonaws_iot.DescribeRoleAlias({
  "roleAlias": ""
}, context)
```

#### Input
* input `object`
  * roleAlias **required** `string`

#### Output
* output [DescribeRoleAliasResponse](#describerolealiasresponse)

### CreateRoleAlias



```js
amazonaws_iot.CreateRoleAlias({
  "roleAlias": "",
  "roleArn": ""
}, context)
```

#### Input
* input `object`
  * roleAlias **required** `string`
  * tags `array`: <p>Metadata which can be used to manage the role alias.</p> <note> <p>For URI Request parameters use format: ...key1=value1&amp;key2=value2...</p> <p>For the CLI command-line parameter use format: &amp;&amp;tags "key1=value1&amp;key2=value2..."</p> <p>For the cli-input-json file use format: "tags": "key1=value1&amp;key2=value2..."</p> </note>
    * items [Tag](#tag)
  * credentialDurationSeconds `integer`: How long (in seconds) the credentials will be valid.
  * roleArn **required** `string`: The role ARN.

#### Output
* output [CreateRoleAliasResponse](#createrolealiasresponse)

### UpdateRoleAlias



```js
amazonaws_iot.UpdateRoleAlias({
  "roleAlias": ""
}, context)
```

#### Input
* input `object`
  * roleAlias **required** `string`
  * credentialDurationSeconds `integer`: The number of seconds the credential will be valid.
  * roleArn `string`: The role ARN.

#### Output
* output [UpdateRoleAliasResponse](#updaterolealiasresponse)

### ListTopicRules



```js
amazonaws_iot.ListTopicRules({}, context)
```

#### Input
* input `object`
  * topic `string`
  * maxResults `integer`
  * nextToken `string`
  * ruleDisabled `boolean`

#### Output
* output [ListTopicRulesResponse](#listtopicrulesresponse)

### DeleteTopicRule



```js
amazonaws_iot.DeleteTopicRule({
  "ruleName": ""
}, context)
```

#### Input
* input `object`
  * ruleName **required** `string`

#### Output
*Output schema unknown*

### GetTopicRule



```js
amazonaws_iot.GetTopicRule({
  "ruleName": ""
}, context)
```

#### Input
* input `object`
  * ruleName **required** `string`

#### Output
* output [GetTopicRuleResponse](#gettopicruleresponse)

### ReplaceTopicRule



```js
amazonaws_iot.ReplaceTopicRule({
  "ruleName": "",
  "topicRulePayload": {}
}, context)
```

#### Input
* input `object`
  * ruleName **required** `string`
  * topicRulePayload **required** `object`: Describes a rule.
    * actions
      * items [Action](#action)
    * awsIotSqlVersion
    * description
    * errorAction
      * cloudwatchAlarm
        * alarmName **required**
        * roleArn **required**
        * stateReason **required**
        * stateValue **required**
      * cloudwatchLogs
        * logGroupName **required**
        * roleArn **required**
      * cloudwatchMetric
        * metricName **required**
        * metricNamespace **required**
        * metricTimestamp
        * metricUnit **required**
        * metricValue **required**
        * roleArn **required**
      * dynamoDB
        * hashKeyField **required**
        * hashKeyType
        * hashKeyValue **required**
        * operation
        * payloadField
        * rangeKeyField
        * rangeKeyType
        * rangeKeyValue
        * roleArn **required**
        * tableName **required**
      * dynamoDBv2
        * putItem **required**
          * tableName **required**
        * roleArn **required**
      * elasticsearch
        * endpoint **required**
        * id **required**
        * index **required**
        * roleArn **required**
        * type **required**
      * firehose
        * batchMode
        * deliveryStreamName **required**
        * roleArn **required**
        * separator
      * http
        * auth
          * sigv4
        * confirmationUrl
        * headers
          * items [HttpActionHeader](#httpactionheader)
        * url **required**
      * iotAnalytics
        * batchMode
        * channelArn
        * channelName
        * roleArn
      * iotEvents
        * batchMode
        * inputName **required**
        * messageId
        * roleArn **required**
      * iotSiteWise
        * putAssetPropertyValueEntries **required**
          * items [PutAssetPropertyValueEntry](#putassetpropertyvalueentry)
        * roleArn **required**
      * kafka
        * clientProperties **required**
        * destinationArn **required**
        * key
        * partition
        * topic **required**
      * kinesis
        * partitionKey
        * roleArn **required**
        * streamName **required**
      * lambda
        * functionArn **required**
      * republish
        * qos
        * roleArn **required**
        * topic **required**
      * s3
        * bucketName **required**
        * cannedAcl
        * key **required**
        * roleArn **required**
      * salesforce
        * token **required**
        * url **required**
      * sns
        * messageFormat
        * roleArn **required**
        * targetArn **required**
      * sqs
        * queueUrl **required**
        * roleArn **required**
        * useBase64
      * stepFunctions
        * executionNamePrefix
        * roleArn **required**
        * stateMachineName **required**
      * timestream
        * databaseName **required**
        * dimensions **required**
          * items [TimestreamDimension](#timestreamdimension)
        * roleArn **required**
        * tableName **required**
        * timestamp
          * unit **required**
          * value **required**
    * ruleDisabled
    * sql

#### Output
*Output schema unknown*

### CreateTopicRule



```js
amazonaws_iot.CreateTopicRule({
  "ruleName": "",
  "topicRulePayload": {}
}, context)
```

#### Input
* input `object`
  * ruleName **required** `string`
  * x-amz-tagging `string`
  * topicRulePayload **required** `object`: Describes a rule.
    * actions
      * items [Action](#action)
    * awsIotSqlVersion
    * description
    * errorAction
      * cloudwatchAlarm
        * alarmName **required**
        * roleArn **required**
        * stateReason **required**
        * stateValue **required**
      * cloudwatchLogs
        * logGroupName **required**
        * roleArn **required**
      * cloudwatchMetric
        * metricName **required**
        * metricNamespace **required**
        * metricTimestamp
        * metricUnit **required**
        * metricValue **required**
        * roleArn **required**
      * dynamoDB
        * hashKeyField **required**
        * hashKeyType
        * hashKeyValue **required**
        * operation
        * payloadField
        * rangeKeyField
        * rangeKeyType
        * rangeKeyValue
        * roleArn **required**
        * tableName **required**
      * dynamoDBv2
        * putItem **required**
          * tableName **required**
        * roleArn **required**
      * elasticsearch
        * endpoint **required**
        * id **required**
        * index **required**
        * roleArn **required**
        * type **required**
      * firehose
        * batchMode
        * deliveryStreamName **required**
        * roleArn **required**
        * separator
      * http
        * auth
          * sigv4
        * confirmationUrl
        * headers
          * items [HttpActionHeader](#httpactionheader)
        * url **required**
      * iotAnalytics
        * batchMode
        * channelArn
        * channelName
        * roleArn
      * iotEvents
        * batchMode
        * inputName **required**
        * messageId
        * roleArn **required**
      * iotSiteWise
        * putAssetPropertyValueEntries **required**
          * items [PutAssetPropertyValueEntry](#putassetpropertyvalueentry)
        * roleArn **required**
      * kafka
        * clientProperties **required**
        * destinationArn **required**
        * key
        * partition
        * topic **required**
      * kinesis
        * partitionKey
        * roleArn **required**
        * streamName **required**
      * lambda
        * functionArn **required**
      * republish
        * qos
        * roleArn **required**
        * topic **required**
      * s3
        * bucketName **required**
        * cannedAcl
        * key **required**
        * roleArn **required**
      * salesforce
        * token **required**
        * url **required**
      * sns
        * messageFormat
        * roleArn **required**
        * targetArn **required**
      * sqs
        * queueUrl **required**
        * roleArn **required**
        * useBase64
      * stepFunctions
        * executionNamePrefix
        * roleArn **required**
        * stateMachineName **required**
      * timestream
        * databaseName **required**
        * dimensions **required**
          * items [TimestreamDimension](#timestreamdimension)
        * roleArn **required**
        * tableName **required**
        * timestamp
          * unit **required**
          * value **required**
    * ruleDisabled
    * sql

#### Output
*Output schema unknown*

### DisableTopicRule



```js
amazonaws_iot.DisableTopicRule({
  "ruleName": ""
}, context)
```

#### Input
* input `object`
  * ruleName **required** `string`

#### Output
*Output schema unknown*

### EnableTopicRule



```js
amazonaws_iot.EnableTopicRule({
  "ruleName": ""
}, context)
```

#### Input
* input `object`
  * ruleName **required** `string`

#### Output
*Output schema unknown*

### ValidateSecurityProfileBehaviors



```js
amazonaws_iot.ValidateSecurityProfileBehaviors({
  "behaviors": []
}, context)
```

#### Input
* input `object`
  * behaviors **required** `array`: Specifies the behaviors that, when violated by a device (thing), cause an alert.
    * items [Behavior](#behavior)

#### Output
* output [ValidateSecurityProfileBehaviorsResponse](#validatesecurityprofilebehaviorsresponse)

### ListSecurityProfiles



```js
amazonaws_iot.ListSecurityProfiles({}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * maxResults `integer`
  * dimensionName `string`
  * metricName `string`

#### Output
* output [ListSecurityProfilesResponse](#listsecurityprofilesresponse)

### ListSecurityProfilesForTarget



```js
amazonaws_iot.ListSecurityProfilesForTarget({
  "securityProfileTargetArn": ""
}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * maxResults `integer`
  * recursive `boolean`
  * securityProfileTargetArn **required** `string`

#### Output
* output [ListSecurityProfilesForTargetResponse](#listsecurityprofilesfortargetresponse)

### DeleteSecurityProfile



```js
amazonaws_iot.DeleteSecurityProfile({
  "securityProfileName": ""
}, context)
```

#### Input
* input `object`
  * securityProfileName **required** `string`
  * expectedVersion `integer`

#### Output
* output [DeleteSecurityProfileResponse](#deletesecurityprofileresponse)

### DescribeSecurityProfile



```js
amazonaws_iot.DescribeSecurityProfile({
  "securityProfileName": ""
}, context)
```

#### Input
* input `object`
  * securityProfileName **required** `string`

#### Output
* output [DescribeSecurityProfileResponse](#describesecurityprofileresponse)

### UpdateSecurityProfile



```js
amazonaws_iot.UpdateSecurityProfile({
  "securityProfileName": ""
}, context)
```

#### Input
* input `object`
  * securityProfileName **required** `string`
  * expectedVersion `integer`
  * additionalMetricsToRetain `array`: <p> <i>Please use <a>UpdateSecurityProfileRequest$additionalMetricsToRetainV2</a> instead.</i> </p> <p>A list of metrics whose data is retained (stored). By default, data is retained for any metric used in the profile's <code>behaviors</code>, but it is also retained for any metric specified here. Can be used with custom metrics; cannot be used with dimensions.</p>
    * items [BehaviorMetric](#behaviormetric)
  * additionalMetricsToRetainV2 `array`: A list of metrics whose data is retained (stored). By default, data is retained for any metric used in the profile's behaviors, but it is also retained for any metric specified here. Can be used with custom metrics; cannot be used with dimensions.
    * items [MetricToRetain](#metrictoretain)
  * alertTargets `object`: Where the alerts are sent. (Alerts are always sent to the console.)
  * behaviors `array`: Specifies the behaviors that, when violated by a device (thing), cause an alert.
    * items [Behavior](#behavior)
  * deleteAdditionalMetricsToRetain `boolean`: If true, delete all <code>additionalMetricsToRetain</code> defined for this security profile. If any <code>additionalMetricsToRetain</code> are defined in the current invocation, an exception occurs.
  * deleteAlertTargets `boolean`: If true, delete all <code>alertTargets</code> defined for this security profile. If any <code>alertTargets</code> are defined in the current invocation, an exception occurs.
  * deleteBehaviors `boolean`: If true, delete all <code>behaviors</code> defined for this security profile. If any <code>behaviors</code> are defined in the current invocation, an exception occurs.
  * securityProfileDescription `string`: A description of the security profile.

#### Output
* output [UpdateSecurityProfileResponse](#updatesecurityprofileresponse)

### CreateSecurityProfile



```js
amazonaws_iot.CreateSecurityProfile({
  "securityProfileName": ""
}, context)
```

#### Input
* input `object`
  * securityProfileName **required** `string`
  * tags `array`: Metadata that can be used to manage the security profile.
    * items [Tag](#tag)
  * additionalMetricsToRetain `array`: <p> <i>Please use <a>CreateSecurityProfileRequest$additionalMetricsToRetainV2</a> instead.</i> </p> <p>A list of metrics whose data is retained (stored). By default, data is retained for any metric used in the profile's <code>behaviors</code>, but it is also retained for any metric specified here. Can be used with custom metrics; cannot be used with dimensions.</p>
    * items [BehaviorMetric](#behaviormetric)
  * additionalMetricsToRetainV2 `array`: A list of metrics whose data is retained (stored). By default, data is retained for any metric used in the profile's <code>behaviors</code>, but it is also retained for any metric specified here. Can be used with custom metrics; cannot be used with dimensions.
    * items [MetricToRetain](#metrictoretain)
  * alertTargets `object`: Specifies the destinations to which alerts are sent. (Alerts are always sent to the console.) Alerts are generated when a device (thing) violates a behavior.
  * behaviors `array`: Specifies the behaviors that, when violated by a device (thing), cause an alert.
    * items [Behavior](#behavior)
  * securityProfileDescription `string`: A description of the security profile.

#### Output
* output [CreateSecurityProfileResponse](#createsecurityprofileresponse)

### ListTargetsForSecurityProfile



```js
amazonaws_iot.ListTargetsForSecurityProfile({
  "securityProfileName": ""
}, context)
```

#### Input
* input `object`
  * securityProfileName **required** `string`
  * nextToken `string`
  * maxResults `integer`

#### Output
* output [ListTargetsForSecurityProfileResponse](#listtargetsforsecurityprofileresponse)

### DetachSecurityProfile



```js
amazonaws_iot.DetachSecurityProfile({
  "securityProfileName": "",
  "securityProfileTargetArn": ""
}, context)
```

#### Input
* input `object`
  * securityProfileName **required** `string`
  * securityProfileTargetArn **required** `string`

#### Output
* output [DetachSecurityProfileResponse](#detachsecurityprofileresponse)

### AttachSecurityProfile



```js
amazonaws_iot.AttachSecurityProfile({
  "securityProfileName": "",
  "securityProfileTargetArn": ""
}, context)
```

#### Input
* input `object`
  * securityProfileName **required** `string`
  * securityProfileTargetArn **required** `string`

#### Output
* output [AttachSecurityProfileResponse](#attachsecurityprofileresponse)

### ListStreams



```js
amazonaws_iot.ListStreams({}, context)
```

#### Input
* input `object`
  * maxResults `integer`
  * nextToken `string`
  * isAscendingOrder `boolean`

#### Output
* output [ListStreamsResponse](#liststreamsresponse)

### DeleteStream



```js
amazonaws_iot.DeleteStream({
  "streamId": ""
}, context)
```

#### Input
* input `object`
  * streamId **required** `string`

#### Output
* output [DeleteStreamResponse](#deletestreamresponse)

### DescribeStream



```js
amazonaws_iot.DescribeStream({
  "streamId": ""
}, context)
```

#### Input
* input `object`
  * streamId **required** `string`

#### Output
* output [DescribeStreamResponse](#describestreamresponse)

### CreateStream



```js
amazonaws_iot.CreateStream({
  "streamId": "",
  "files": [],
  "roleArn": ""
}, context)
```

#### Input
* input `object`
  * streamId **required** `string`
  * tags `array`: Metadata which can be used to manage streams.
    * items [Tag](#tag)
  * description `string`: A description of the stream.
  * files **required** `array`: The files to stream.
    * items [StreamFile](#streamfile)
  * roleArn **required** `string`: An IAM role that allows the IoT service principal assumes to access your S3 files.

#### Output
* output [CreateStreamResponse](#createstreamresponse)

### UpdateStream



```js
amazonaws_iot.UpdateStream({
  "streamId": ""
}, context)
```

#### Input
* input `object`
  * streamId **required** `string`
  * description `string`: The description of the stream.
  * files `array`: The files associated with the stream.
    * items [StreamFile](#streamfile)
  * roleArn `string`: An IAM role that allows the IoT service principal assumes to access your S3 files.

#### Output
* output [UpdateStreamResponse](#updatestreamresponse)

### TagResource



```js
amazonaws_iot.TagResource({
  "resourceArn": "",
  "tags": []
}, context)
```

#### Input
* input `object`
  * tags **required** `array`: The new or modified tags for the resource.
    * items [Tag](#tag)
  * resourceArn **required** `string`: The ARN of the resource.

#### Output
* output [TagResourceResponse](#tagresourceresponse)

### ListTagsForResource



```js
amazonaws_iot.ListTagsForResource({
  "resourceArn": ""
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`
  * nextToken `string`

#### Output
* output [ListTagsForResourceResponse](#listtagsforresourceresponse)

### DetachPolicy



```js
amazonaws_iot.DetachPolicy({
  "policyName": "",
  "target": ""
}, context)
```

#### Input
* input `object`
  * policyName **required** `string`
  * target **required** `string`: The target from which the policy will be detached.

#### Output
*Output schema unknown*

### AttachPolicy



```js
amazonaws_iot.AttachPolicy({
  "policyName": "",
  "target": ""
}, context)
```

#### Input
* input `object`
  * policyName **required** `string`
  * target **required** `string`: The <a href="https://docs.aws.amazon.com/iot/latest/developerguide/security-iam.html">identity</a> to which the policy is attached.

#### Output
*Output schema unknown*

### TestAuthorization



```js
amazonaws_iot.TestAuthorization({
  "authInfos": []
}, context)
```

#### Input
* input `object`
  * clientId `string`
  * authInfos **required** `array`: A list of authorization info objects. Simulating authorization will create a response for each <code>authInfo</code> object in the list.
    * items [AuthInfo](#authinfo)
  * cognitoIdentityPoolId `string`: The Cognito identity pool ID.
  * policyNamesToAdd `array`: When testing custom authorization, the policies specified here are treated as if they are attached to the principal being authorized.
    * items [PolicyName](#policyname)
  * policyNamesToSkip `array`: When testing custom authorization, the policies specified here are treated as if they are not attached to the principal being authorized.
    * items [PolicyName](#policyname)
  * principal `string`: The principal. Valid principals are CertificateArn (arn:aws:iot:<i>region</i>:<i>accountId</i>:cert/<i>certificateId</i>), thingGroupArn (arn:aws:iot:<i>region</i>:<i>accountId</i>:thinggroup/<i>groupName</i>) and CognitoId (<i>region</i>:<i>id</i>).

#### Output
* output [TestAuthorizationResponse](#testauthorizationresponse)

### ListThingGroups



```js
amazonaws_iot.ListThingGroups({}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * maxResults `integer`
  * parentGroup `string`
  * namePrefixFilter `string`
  * recursive `boolean`

#### Output
* output [ListThingGroupsResponse](#listthinggroupsresponse)

### AddThingToThingGroup



```js
amazonaws_iot.AddThingToThingGroup({}, context)
```

#### Input
* input `object`
  * overrideDynamicGroups `boolean`: Override dynamic thing groups with static thing groups when 10-group limit is reached. If a thing belongs to 10 thing groups, and one or more of those groups are dynamic thing groups, adding a thing to a static group removes the thing from the last dynamic group.
  * thingArn `string`: The ARN of the thing to add to a group.
  * thingGroupArn `string`: The ARN of the group to which you are adding a thing.
  * thingGroupName `string`: The name of the group to which you are adding a thing.
  * thingName `string`: The name of the thing to add to a group.

#### Output
* output [AddThingToThingGroupResponse](#addthingtothinggroupresponse)

### RemoveThingFromThingGroup



```js
amazonaws_iot.RemoveThingFromThingGroup({}, context)
```

#### Input
* input `object`
  * thingArn `string`: The ARN of the thing to remove from the group.
  * thingGroupArn `string`: The group ARN.
  * thingGroupName `string`: The group name.
  * thingName `string`: The name of the thing to remove from the group.

#### Output
* output [RemoveThingFromThingGroupResponse](#removethingfromthinggroupresponse)

### UpdateThingGroupsForThing



```js
amazonaws_iot.UpdateThingGroupsForThing({}, context)
```

#### Input
* input `object`
  * overrideDynamicGroups `boolean`: Override dynamic thing groups with static thing groups when 10-group limit is reached. If a thing belongs to 10 thing groups, and one or more of those groups are dynamic thing groups, adding a thing to a static group removes the thing from the last dynamic group.
  * thingGroupsToAdd `array`: The groups to which the thing will be added.
    * items [ThingGroupName](#thinggroupname)
  * thingGroupsToRemove `array`: The groups from which the thing will be removed.
    * items [ThingGroupName](#thinggroupname)
  * thingName `string`: The thing whose group memberships will be updated.

#### Output
* output [UpdateThingGroupsForThingResponse](#updatethinggroupsforthingresponse)

### DeleteThingGroup



```js
amazonaws_iot.DeleteThingGroup({
  "thingGroupName": ""
}, context)
```

#### Input
* input `object`
  * thingGroupName **required** `string`
  * expectedVersion `integer`

#### Output
* output [DeleteThingGroupResponse](#deletethinggroupresponse)

### DescribeThingGroup



```js
amazonaws_iot.DescribeThingGroup({
  "thingGroupName": ""
}, context)
```

#### Input
* input `object`
  * thingGroupName **required** `string`

#### Output
* output [DescribeThingGroupResponse](#describethinggroupresponse)

### UpdateThingGroup



```js
amazonaws_iot.UpdateThingGroup({
  "thingGroupName": "",
  "thingGroupProperties": {}
}, context)
```

#### Input
* input `object`
  * thingGroupName **required** `string`
  * expectedVersion `integer`: The expected version of the thing group. If this does not match the version of the thing group being updated, the update will fail.
  * thingGroupProperties **required** `object`: Thing group properties.
    * attributePayload
      * attributes
      * merge
    * thingGroupDescription

#### Output
* output [UpdateThingGroupResponse](#updatethinggroupresponse)

### CreateThingGroup



```js
amazonaws_iot.CreateThingGroup({
  "thingGroupName": ""
}, context)
```

#### Input
* input `object`
  * thingGroupName **required** `string`
  * tags `array`: Metadata which can be used to manage the thing group.
    * items [Tag](#tag)
  * parentGroupName `string`: The name of the parent thing group.
  * thingGroupProperties `object`: Thing group properties.
    * attributePayload
      * attributes
      * merge
    * thingGroupDescription

#### Output
* output [CreateThingGroupResponse](#createthinggroupresponse)

### ListThingsInThingGroup



```js
amazonaws_iot.ListThingsInThingGroup({
  "thingGroupName": ""
}, context)
```

#### Input
* input `object`
  * thingGroupName **required** `string`
  * recursive `boolean`
  * nextToken `string`
  * maxResults `integer`

#### Output
* output [ListThingsInThingGroupResponse](#listthingsinthinggroupresponse)

### ListThingRegistrationTasks



```js
amazonaws_iot.ListThingRegistrationTasks({}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * maxResults `integer`
  * status `string`

#### Output
* output [ListThingRegistrationTasksResponse](#listthingregistrationtasksresponse)

### StartThingRegistrationTask



```js
amazonaws_iot.StartThingRegistrationTask({
  "templateBody": "",
  "inputFileBucket": "",
  "inputFileKey": "",
  "roleArn": ""
}, context)
```

#### Input
* input `object`
  * inputFileBucket **required** `string`: The S3 bucket that contains the input file.
  * inputFileKey **required** `string`: The name of input file within the S3 bucket. This file contains a newline delimited JSON file. Each line contains the parameter values to provision one device (thing).
  * roleArn **required** `string`: The IAM role ARN that grants permission the input file.
  * templateBody **required** `string`: The provisioning template.

#### Output
* output [StartThingRegistrationTaskResponse](#startthingregistrationtaskresponse)

### DescribeThingRegistrationTask



```js
amazonaws_iot.DescribeThingRegistrationTask({
  "taskId": ""
}, context)
```

#### Input
* input `object`
  * taskId **required** `string`

#### Output
* output [DescribeThingRegistrationTaskResponse](#describethingregistrationtaskresponse)

### StopThingRegistrationTask



```js
amazonaws_iot.StopThingRegistrationTask({
  "taskId": ""
}, context)
```

#### Input
* input `object`
  * taskId **required** `string`

#### Output
* output [StopThingRegistrationTaskResponse](#stopthingregistrationtaskresponse)

### ListThingRegistrationTaskReports



```js
amazonaws_iot.ListThingRegistrationTaskReports({
  "taskId": "",
  "reportType": ""
}, context)
```

#### Input
* input `object`
  * taskId **required** `string`
  * reportType **required** `string`
  * nextToken `string`
  * maxResults `integer`

#### Output
* output [ListThingRegistrationTaskReportsResponse](#listthingregistrationtaskreportsresponse)

### ListThingTypes



```js
amazonaws_iot.ListThingTypes({}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * maxResults `integer`
  * thingTypeName `string`

#### Output
* output [ListThingTypesResponse](#listthingtypesresponse)

### DeleteThingType



```js
amazonaws_iot.DeleteThingType({
  "thingTypeName": ""
}, context)
```

#### Input
* input `object`
  * thingTypeName **required** `string`

#### Output
* output [DeleteThingTypeResponse](#deletethingtyperesponse)

### DescribeThingType



```js
amazonaws_iot.DescribeThingType({
  "thingTypeName": ""
}, context)
```

#### Input
* input `object`
  * thingTypeName **required** `string`

#### Output
* output [DescribeThingTypeResponse](#describethingtyperesponse)

### CreateThingType



```js
amazonaws_iot.CreateThingType({
  "thingTypeName": ""
}, context)
```

#### Input
* input `object`
  * thingTypeName **required** `string`
  * tags `array`: Metadata which can be used to manage the thing type.
    * items [Tag](#tag)
  * thingTypeProperties `object`: The ThingTypeProperties contains information about the thing type including: a thing type description, and a list of searchable thing attribute names.
    * searchableAttributes
      * items [AttributeName](#attributename)
    * thingTypeDescription

#### Output
* output [CreateThingTypeResponse](#createthingtyperesponse)

### DeprecateThingType



```js
amazonaws_iot.DeprecateThingType({
  "thingTypeName": ""
}, context)
```

#### Input
* input `object`
  * thingTypeName **required** `string`
  * undoDeprecate `boolean`: Whether to undeprecate a deprecated thing type. If <b>true</b>, the thing type will not be deprecated anymore and you can associate it with things.

#### Output
* output [DeprecateThingTypeResponse](#deprecatethingtyperesponse)

### ListThings



```js
amazonaws_iot.ListThings({}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * maxResults `integer`
  * attributeName `string`
  * attributeValue `string`
  * thingTypeName `string`

#### Output
* output [ListThingsResponse](#listthingsresponse)

### RegisterThing



```js
amazonaws_iot.RegisterThing({
  "templateBody": ""
}, context)
```

#### Input
* input `object`
  * parameters `object`: The parameters for provisioning a thing. See <a href="https://docs.aws.amazon.com/iot/latest/developerguide/provision-template.html">Provisioning Templates</a> for more information.
  * templateBody **required** `string`: The provisioning template. See <a href="https://docs.aws.amazon.com/iot/latest/developerguide/provision-w-cert.html">Provisioning Devices That Have Device Certificates</a> for more information.

#### Output
* output [RegisterThingResponse](#registerthingresponse)

### DeleteThing



```js
amazonaws_iot.DeleteThing({
  "thingName": ""
}, context)
```

#### Input
* input `object`
  * thingName **required** `string`
  * expectedVersion `integer`

#### Output
* output [DeleteThingResponse](#deletethingresponse)

### DescribeThing



```js
amazonaws_iot.DescribeThing({
  "thingName": ""
}, context)
```

#### Input
* input `object`
  * thingName **required** `string`

#### Output
* output [DescribeThingResponse](#describethingresponse)

### UpdateThing



```js
amazonaws_iot.UpdateThing({
  "thingName": ""
}, context)
```

#### Input
* input `object`
  * thingName **required** `string`
  * attributePayload `object`: The attribute payload.
    * attributes
    * merge
  * expectedVersion `integer`: The expected version of the thing record in the registry. If the version of the record in the registry does not match the expected version specified in the request, the <code>UpdateThing</code> request is rejected with a <code>VersionConflictException</code>.
  * removeThingType `boolean`: Remove a thing type association. If <b>true</b>, the association is removed.
  * thingTypeName `string`: The name of the thing type.

#### Output
* output [UpdateThingResponse](#updatethingresponse)

### CreateThing



```js
amazonaws_iot.CreateThing({
  "thingName": ""
}, context)
```

#### Input
* input `object`
  * thingName **required** `string`
  * attributePayload `object`: The attribute payload.
    * attributes
    * merge
  * billingGroupName `string`: The name of the billing group the thing will be added to.
  * thingTypeName `string`: The name of the thing type associated with the new thing.

#### Output
* output [CreateThingResponse](#createthingresponse)

### ListJobExecutionsForThing



```js
amazonaws_iot.ListJobExecutionsForThing({
  "thingName": ""
}, context)
```

#### Input
* input `object`
  * thingName **required** `string`
  * status `string`
  * namespaceId `string`
  * maxResults `integer`
  * nextToken `string`

#### Output
* output [ListJobExecutionsForThingResponse](#listjobexecutionsforthingresponse)

### DescribeJobExecution



```js
amazonaws_iot.DescribeJobExecution({
  "jobId": "",
  "thingName": ""
}, context)
```

#### Input
* input `object`
  * jobId **required** `string`
  * thingName **required** `string`
  * executionNumber `integer`

#### Output
* output [DescribeJobExecutionResponse](#describejobexecutionresponse)

### CancelJobExecution



```js
amazonaws_iot.CancelJobExecution({
  "jobId": "",
  "thingName": ""
}, context)
```

#### Input
* input `object`
  * jobId **required** `string`
  * thingName **required** `string`
  * force `boolean`
  * expectedVersion `integer`: (Optional) The expected current version of the job execution. Each time you update the job execution, its version is incremented. If the version of the job execution stored in Jobs does not match, the update is rejected with a VersionMismatch error, and an ErrorResponse that contains the current job execution status data is returned. (This makes it unnecessary to perform a separate DescribeJobExecution request in order to obtain the job execution status data.)
  * statusDetails `object`: A collection of name/value pairs that describe the status of the job execution. If not specified, the statusDetails are unchanged. You can specify at most 10 name/value pairs.

#### Output
*Output schema unknown*

### DeleteJobExecution



```js
amazonaws_iot.DeleteJobExecution({
  "jobId": "",
  "thingName": "",
  "executionNumber": 0
}, context)
```

#### Input
* input `object`
  * jobId **required** `string`
  * thingName **required** `string`
  * executionNumber **required** `integer`
  * force `boolean`
  * namespaceId `string`

#### Output
*Output schema unknown*

### ListThingPrincipals



```js
amazonaws_iot.ListThingPrincipals({
  "thingName": ""
}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * maxResults `integer`
  * thingName **required** `string`

#### Output
* output [ListThingPrincipalsResponse](#listthingprincipalsresponse)

### DetachThingPrincipal



```js
amazonaws_iot.DetachThingPrincipal({
  "thingName": "",
  "x-amzn-principal": ""
}, context)
```

#### Input
* input `object`
  * thingName **required** `string`
  * x-amzn-principal **required** `string`

#### Output
* output [DetachThingPrincipalResponse](#detachthingprincipalresponse)

### AttachThingPrincipal



```js
amazonaws_iot.AttachThingPrincipal({
  "thingName": "",
  "x-amzn-principal": ""
}, context)
```

#### Input
* input `object`
  * thingName **required** `string`
  * x-amzn-principal **required** `string`

#### Output
* output [AttachThingPrincipalResponse](#attachthingprincipalresponse)

### ListThingGroupsForThing



```js
amazonaws_iot.ListThingGroupsForThing({
  "thingName": ""
}, context)
```

#### Input
* input `object`
  * thingName **required** `string`
  * nextToken `string`
  * maxResults `integer`

#### Output
* output [ListThingGroupsForThingResponse](#listthinggroupsforthingresponse)

### TransferCertificate



```js
amazonaws_iot.TransferCertificate({
  "certificateId": "",
  "targetAwsAccount": ""
}, context)
```

#### Input
* input `object`
  * certificateId **required** `string`
  * targetAwsAccount **required** `string`
  * transferMessage `string`: The transfer message.

#### Output
* output [TransferCertificateResponse](#transfercertificateresponse)

### UntagResource



```js
amazonaws_iot.UntagResource({
  "resourceArn": "",
  "tagKeys": []
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`: The ARN of the resource.
  * tagKeys **required** `array`: A list of the keys of the tags to be removed from the resource.
    * items [TagKey](#tagkey)

#### Output
* output [UntagResourceResponse](#untagresourceresponse)

### ListV2LoggingLevels



```js
amazonaws_iot.ListV2LoggingLevels({}, context)
```

#### Input
* input `object`
  * targetType `string`
  * nextToken `string`
  * maxResults `integer`

#### Output
* output [ListV2LoggingLevelsResponse](#listv2logginglevelsresponse)

### SetV2LoggingLevel



```js
amazonaws_iot.SetV2LoggingLevel({
  "logTarget": {},
  "logLevel": ""
}, context)
```

#### Input
* input `object`
  * logLevel **required** `string` (values: DEBUG, INFO, ERROR, WARN, DISABLED): The log level.
  * logTarget **required** `object`: A log target.
    * targetName
    * targetType

#### Output
*Output schema unknown*

### DeleteV2LoggingLevel



```js
amazonaws_iot.DeleteV2LoggingLevel({
  "targetType": "",
  "targetName": ""
}, context)
```

#### Input
* input `object`
  * targetType **required** `string`
  * targetName **required** `string`

#### Output
*Output schema unknown*

### GetV2LoggingOptions



```js
amazonaws_iot.GetV2LoggingOptions({}, context)
```

#### Input
* input `object`

#### Output
* output [GetV2LoggingOptionsResponse](#getv2loggingoptionsresponse)

### SetV2LoggingOptions



```js
amazonaws_iot.SetV2LoggingOptions({}, context)
```

#### Input
* input `object`
  * defaultLogLevel `string` (values: DEBUG, INFO, ERROR, WARN, DISABLED): The default logging level.
  * disableAllLogs `boolean`: If true all logs are disabled. The default is false.
  * roleArn `string`: The ARN of the role that allows IoT to write to Cloudwatch logs.

#### Output
*Output schema unknown*

### ListViolationEvents



```js
amazonaws_iot.ListViolationEvents({
  "startTime": "",
  "endTime": ""
}, context)
```

#### Input
* input `object`
  * startTime **required** `string`
  * endTime **required** `string`
  * thingName `string`
  * securityProfileName `string`
  * behaviorCriteriaType `string`
  * listSuppressedAlerts `boolean`
  * nextToken `string`
  * maxResults `integer`

#### Output
* output [ListViolationEventsResponse](#listviolationeventsresponse)



## Definitions

### AbortAction
* AbortAction `string` (values: CANCEL)

### AbortConfig
* AbortConfig `object`: The criteria that determine when and how a job abort takes place.
  * criteriaList **required**
    * items [AbortCriteria](#abortcriteria)

### AbortCriteria
* AbortCriteria `object`: The criteria that determine when and how a job abort takes place.
  * action **required**
  * failureType **required**
  * minNumberOfExecutedThings **required**
  * thresholdPercentage **required**

### AbortCriteriaList
* AbortCriteriaList `array`
  * items [AbortCriteria](#abortcriteria)

### AbortThresholdPercentage
* AbortThresholdPercentage `number`

### AcceptCertificateTransferRequest
* AcceptCertificateTransferRequest `object`: The input for the AcceptCertificateTransfer operation.

### AcmCertificateArn
* AcmCertificateArn `string`

### Action
* Action `object`: Describes the actions associated with a rule.
  * cloudwatchAlarm
    * alarmName **required**
    * roleArn **required**
    * stateReason **required**
    * stateValue **required**
  * cloudwatchLogs
    * logGroupName **required**
    * roleArn **required**
  * cloudwatchMetric
    * metricName **required**
    * metricNamespace **required**
    * metricTimestamp
    * metricUnit **required**
    * metricValue **required**
    * roleArn **required**
  * dynamoDB
    * hashKeyField **required**
    * hashKeyType
    * hashKeyValue **required**
    * operation
    * payloadField
    * rangeKeyField
    * rangeKeyType
    * rangeKeyValue
    * roleArn **required**
    * tableName **required**
  * dynamoDBv2
    * putItem **required**
      * tableName **required**
    * roleArn **required**
  * elasticsearch
    * endpoint **required**
    * id **required**
    * index **required**
    * roleArn **required**
    * type **required**
  * firehose
    * batchMode
    * deliveryStreamName **required**
    * roleArn **required**
    * separator
  * http
    * auth
      * sigv4
        * roleArn **required**
        * serviceName **required**
        * signingRegion **required**
    * confirmationUrl
    * headers
      * items [HttpActionHeader](#httpactionheader)
    * url **required**
  * iotAnalytics
    * batchMode
    * channelArn
    * channelName
    * roleArn
  * iotEvents
    * batchMode
    * inputName **required**
    * messageId
    * roleArn **required**
  * iotSiteWise
    * putAssetPropertyValueEntries **required**
      * items [PutAssetPropertyValueEntry](#putassetpropertyvalueentry)
    * roleArn **required**
  * kafka
    * clientProperties **required**
    * destinationArn **required**
    * key
    * partition
    * topic **required**
  * kinesis
    * partitionKey
    * roleArn **required**
    * streamName **required**
  * lambda
    * functionArn **required**
  * republish
    * qos
    * roleArn **required**
    * topic **required**
  * s3
    * bucketName **required**
    * cannedAcl
    * key **required**
    * roleArn **required**
  * salesforce
    * token **required**
    * url **required**
  * sns
    * messageFormat
    * roleArn **required**
    * targetArn **required**
  * sqs
    * queueUrl **required**
    * roleArn **required**
    * useBase64
  * stepFunctions
    * executionNamePrefix
    * roleArn **required**
    * stateMachineName **required**
  * timestream
    * databaseName **required**
    * dimensions **required**
      * items [TimestreamDimension](#timestreamdimension)
    * roleArn **required**
    * tableName **required**
    * timestamp
      * unit **required**
      * value **required**

### ActionList
* ActionList `array`
  * items [Action](#action)

### ActionType
* ActionType `string` (values: PUBLISH, SUBSCRIBE, RECEIVE, CONNECT)

### ActiveViolation
* ActiveViolation `object`: Information about an active Device Defender security profile behavior violation.
  * behavior
    * criteria
      * comparisonOperator
      * consecutiveDatapointsToAlarm
      * consecutiveDatapointsToClear
      * durationSeconds
      * mlDetectionConfig
        * confidenceLevel **required**
      * statisticalThreshold
        * statistic
      * value
        * cidrs
          * items [Cidr](#cidr)
        * count
        * number
        * numbers
          * items [Number](#number)
        * ports
          * items [Port](#port)
        * strings
          * items [stringValue](#stringvalue)
    * metric
    * metricDimension
      * dimensionName **required**
      * operator
    * name **required**
    * suppressAlerts
  * lastViolationTime
  * lastViolationValue
    * cidrs
      * items [Cidr](#cidr)
    * count
    * number
    * numbers
      * items [Number](#number)
    * ports
      * items [Port](#port)
    * strings
      * items [stringValue](#stringvalue)
  * securityProfileName
  * thingName
  * violationEventAdditionalInfo
    * confidenceLevel
  * violationId
  * violationStartTime

### ActiveViolations
* ActiveViolations `array`
  * items [ActiveViolation](#activeviolation)

### AddThingToBillingGroupRequest
* AddThingToBillingGroupRequest `object`
  * billingGroupArn
  * billingGroupName
  * thingArn
  * thingName

### AddThingToBillingGroupResponse
* AddThingToBillingGroupResponse `object`

### AddThingToThingGroupRequest
* AddThingToThingGroupRequest `object`
  * overrideDynamicGroups
  * thingArn
  * thingGroupArn
  * thingGroupName
  * thingName

### AddThingToThingGroupResponse
* AddThingToThingGroupResponse `object`

### AddThingsToThingGroupParams
* AddThingsToThingGroupParams `object`: Parameters used when defining a mitigation action that move a set of things to a thing group.
  * overrideDynamicGroups
  * thingGroupNames **required**
    * items [ThingGroupName](#thinggroupname)

### AdditionalMetricsToRetainList
* AdditionalMetricsToRetainList `array`
  * items [BehaviorMetric](#behaviormetric)

### AdditionalMetricsToRetainV2List
* AdditionalMetricsToRetainV2List `array`
  * items [MetricToRetain](#metrictoretain)

### AdditionalParameterMap
* AdditionalParameterMap `object`

### AggregationField
* AggregationField `string`

### AlarmName
* AlarmName `string`

### AlertTarget
* AlertTarget `object`: A structure containing the alert target ARN and the role ARN.
  * alertTargetArn **required**
  * roleArn **required**

### AlertTargetArn
* AlertTargetArn `string`

### AlertTargetType
* AlertTargetType `string` (values: SNS): The type of alert target: one of "SNS".

### AlertTargets
* AlertTargets `object`

### AllowAuthorizerOverride
* AllowAuthorizerOverride `boolean`

### AllowAutoRegistration
* AllowAutoRegistration `boolean`

### Allowed
* Allowed `object`: Contains information that allowed the authorization.
  * policies
    * items [Policy](#policy)

### ApproximateSecondsBeforeTimedOut
* ApproximateSecondsBeforeTimedOut `integer`

### AscendingOrder
* AscendingOrder `boolean`

### AssetId
* AssetId `string`

### AssetPropertyAlias
* AssetPropertyAlias `string`

### AssetPropertyBooleanValue
* AssetPropertyBooleanValue `string`

### AssetPropertyDoubleValue
* AssetPropertyDoubleValue `string`

### AssetPropertyEntryId
* AssetPropertyEntryId `string`

### AssetPropertyId
* AssetPropertyId `string`

### AssetPropertyIntegerValue
* AssetPropertyIntegerValue `string`

### AssetPropertyOffsetInNanos
* AssetPropertyOffsetInNanos `string`

### AssetPropertyQuality
* AssetPropertyQuality `string`

### AssetPropertyStringValue
* AssetPropertyStringValue `string`

### AssetPropertyTimeInSeconds
* AssetPropertyTimeInSeconds `string`

### AssetPropertyTimestamp
* AssetPropertyTimestamp `object`: An asset property timestamp entry containing the following information.
  * offsetInNanos
  * timeInSeconds **required**

### AssetPropertyValue
* AssetPropertyValue `object`: An asset property value entry containing the following information.
  * quality
  * timestamp **required**
    * offsetInNanos
    * timeInSeconds **required**
  * value **required**
    * booleanValue
    * doubleValue
    * integerValue
    * stringValue

### AssetPropertyValueList
* AssetPropertyValueList `array`
  * items [AssetPropertyValue](#assetpropertyvalue)

### AssetPropertyVariant
* AssetPropertyVariant `object`: Contains an asset property value (of a single type).
  * booleanValue
  * doubleValue
  * integerValue
  * stringValue

### AssociateTargetsWithJobRequest
* AssociateTargetsWithJobRequest `object`
  * comment
  * targets **required**
    * items [TargetArn](#targetarn)

### AssociateTargetsWithJobResponse
* AssociateTargetsWithJobResponse `object`
  * description
  * jobArn
  * jobId

### AttachPolicyRequest
* AttachPolicyRequest `object`
  * target **required**

### AttachPrincipalPolicyRequest
* AttachPrincipalPolicyRequest `object`: The input for the AttachPrincipalPolicy operation.

### AttachSecurityProfileRequest
* AttachSecurityProfileRequest `object`

### AttachSecurityProfileResponse
* AttachSecurityProfileResponse `object`

### AttachThingPrincipalRequest
* AttachThingPrincipalRequest `object`: The input for the AttachThingPrincipal operation.

### AttachThingPrincipalResponse
* AttachThingPrincipalResponse `object`: The output from the AttachThingPrincipal operation.

### AttributeKey
* AttributeKey `string`

### AttributeName
* AttributeName `string`

### AttributePayload
* AttributePayload `object`: The attribute payload.
  * attributes
  * merge

### AttributeValue
* AttributeValue `string`

### Attributes
* Attributes `object`

### AttributesMap
* AttributesMap `object`

### AuditCheckConfiguration
* AuditCheckConfiguration `object`: Which audit checks are enabled and disabled for this account.
  * enabled

### AuditCheckConfigurations
* AuditCheckConfigurations `object`

### AuditCheckDetails
* AuditCheckDetails `object`: Information about the audit check.
  * checkCompliant
  * checkRunStatus
  * errorCode
  * message
  * nonCompliantResourcesCount
  * suppressedNonCompliantResourcesCount
  * totalResourcesCount

### AuditCheckName
* AuditCheckName `string`: An audit check name. Checks must be enabled for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code> to select which checks are enabled.)

### AuditCheckRunStatus
* AuditCheckRunStatus `string` (values: IN_PROGRESS, WAITING_FOR_DATA_COLLECTION, CANCELED, COMPLETED_COMPLIANT, COMPLETED_NON_COMPLIANT, FAILED)

### AuditCheckToActionsMapping
* AuditCheckToActionsMapping `object`

### AuditCheckToReasonCodeFilter
* AuditCheckToReasonCodeFilter `object`

### AuditDescription
* AuditDescription `string`

### AuditDetails
* AuditDetails `object`

### AuditFinding
* AuditFinding `object`: The findings (results) of the audit.
  * checkName
  * findingId
  * findingTime
  * isSuppressed
  * nonCompliantResource
    * additionalInfo
    * resourceIdentifier
      * account
      * caCertificateId
      * clientId
      * cognitoIdentityPoolId
      * deviceCertificateId
      * iamRoleArn
      * policyVersionIdentifier
        * policyName
        * policyVersionId
      * roleAliasArn
    * resourceType
  * reasonForNonCompliance
  * reasonForNonComplianceCode
  * relatedResources
    * items [RelatedResource](#relatedresource)
  * severity
  * taskId
  * taskStartTime

### AuditFindingSeverity
* AuditFindingSeverity `string` (values: CRITICAL, HIGH, MEDIUM, LOW)

### AuditFindings
* AuditFindings `array`
  * items [AuditFinding](#auditfinding)

### AuditFrequency
* AuditFrequency `string` (values: DAILY, WEEKLY, BIWEEKLY, MONTHLY)

### AuditMitigationActionExecutionMetadata
* AuditMitigationActionExecutionMetadata `object`: Returned by ListAuditMitigationActionsTask, this object contains information that describes a mitigation action that has been started.
  * actionId
  * actionName
  * endTime
  * errorCode
  * findingId
  * message
  * startTime
  * status
  * taskId

### AuditMitigationActionExecutionMetadataList
* AuditMitigationActionExecutionMetadataList `array`
  * items [AuditMitigationActionExecutionMetadata](#auditmitigationactionexecutionmetadata)

### AuditMitigationActionsExecutionStatus
* AuditMitigationActionsExecutionStatus `string` (values: IN_PROGRESS, COMPLETED, FAILED, CANCELED, SKIPPED, PENDING)

### AuditMitigationActionsTaskMetadata
* AuditMitigationActionsTaskMetadata `object`: Information about an audit mitigation actions task that is returned by <code>ListAuditMitigationActionsTasks</code>.
  * startTime
  * taskId
  * taskStatus

### AuditMitigationActionsTaskMetadataList
* AuditMitigationActionsTaskMetadataList `array`
  * items [AuditMitigationActionsTaskMetadata](#auditmitigationactionstaskmetadata)

### AuditMitigationActionsTaskStatistics
* AuditMitigationActionsTaskStatistics `object`

### AuditMitigationActionsTaskStatus
* AuditMitigationActionsTaskStatus `string` (values: IN_PROGRESS, COMPLETED, FAILED, CANCELED)

### AuditMitigationActionsTaskTarget
* AuditMitigationActionsTaskTarget `object`: Used in MitigationActionParams, this information identifies the target findings to which the mitigation actions are applied. Only one entry appears.
  * auditCheckToReasonCodeFilter
  * auditTaskId
  * findingIds
    * items [FindingId](#findingid)

### AuditNotificationTarget
* AuditNotificationTarget `object`: Information about the targets to which audit notifications are sent.
  * enabled
  * roleArn
  * targetArn

### AuditNotificationTargetConfigurations
* AuditNotificationTargetConfigurations `object`

### AuditNotificationType
* AuditNotificationType `string` (values: SNS)

### AuditSuppression
* AuditSuppression `object`:  Filters out specific findings of a Device Defender audit. 
  * checkName **required** [AuditCheckName](#auditcheckname)
  * description
  * expirationDate
  * resourceIdentifier **required** [ResourceIdentifier](#resourceidentifier)
  * suppressIndefinitely

### AuditSuppressionList
* AuditSuppressionList `array`
  * items [AuditSuppression](#auditsuppression)

### AuditTaskId
* AuditTaskId `string`

### AuditTaskMetadata
* AuditTaskMetadata `object`: The audits that were performed.
  * taskId
  * taskStatus
  * taskType

### AuditTaskMetadataList
* AuditTaskMetadataList `array`
  * items [AuditTaskMetadata](#audittaskmetadata)

### AuditTaskStatus
* AuditTaskStatus `string` (values: IN_PROGRESS, COMPLETED, FAILED, CANCELED)

### AuditTaskType
* AuditTaskType `string` (values: ON_DEMAND_AUDIT_TASK, SCHEDULED_AUDIT_TASK)

### AuthDecision
* AuthDecision `string` (values: ALLOWED, EXPLICIT_DENY, IMPLICIT_DENY)

### AuthInfo
* AuthInfo `object`: A collection of authorization information.
  * actionType
  * resources **required**
    * items [Resource](#resource)

### AuthInfos
* AuthInfos `array`
  * items [AuthInfo](#authinfo)

### AuthResult
* AuthResult `object`: The authorizer result.
  * allowed
    * policies
      * items [Policy](#policy)
  * authDecision
  * authInfo
    * actionType
    * resources **required**
      * items [Resource](#resource)
  * denied
    * explicitDeny
      * policies
        * items [Policy](#policy)
    * implicitDeny
      * policies
        * items [Policy](#policy)
  * missingContextValues
    * items [MissingContextValue](#missingcontextvalue)

### AuthResults
* AuthResults `array`
  * items [AuthResult](#authresult)

### AuthorizerArn
* AuthorizerArn `string`

### AuthorizerConfig
* AuthorizerConfig `object`: An object that specifies the authorization service for a domain.
  * allowAuthorizerOverride
  * defaultAuthorizerName

### AuthorizerDescription
* AuthorizerDescription `object`: The authorizer description.
  * authorizerArn
  * authorizerFunctionArn
  * authorizerName
  * creationDate
  * lastModifiedDate
  * signingDisabled
  * status
  * tokenKeyName
  * tokenSigningPublicKeys

### AuthorizerFunctionArn
* AuthorizerFunctionArn `string`

### AuthorizerName
* AuthorizerName `string`

### AuthorizerStatus
* AuthorizerStatus `string` (values: ACTIVE, INACTIVE)

### AuthorizerSummary
* AuthorizerSummary `object`: The authorizer summary.
  * authorizerArn
  * authorizerName

### Authorizers
* Authorizers `array`
  * items [AuthorizerSummary](#authorizersummary)

### AutoRegistrationStatus
* AutoRegistrationStatus `string` (values: ENABLE, DISABLE)

### Average
* Average `number`

### AwsAccountId
* AwsAccountId `string`

### AwsArn
* AwsArn `string`

### AwsIotJobArn
* AwsIotJobArn `string`

### AwsIotJobId
* AwsIotJobId `string`

### AwsIotSqlVersion
* AwsIotSqlVersion `string`

### AwsJobAbortConfig
* AwsJobAbortConfig `object`: The criteria that determine when and how a job abort takes place.
  * abortCriteriaList **required**
    * items [AwsJobAbortCriteria](#awsjobabortcriteria)

### AwsJobAbortCriteria
* AwsJobAbortCriteria `object`: The criteria that determine when and how a job abort takes place.
  * action **required**
  * failureType **required**
  * minNumberOfExecutedThings **required**
  * thresholdPercentage **required**

### AwsJobAbortCriteriaAbortAction
* AwsJobAbortCriteriaAbortAction `string` (values: CANCEL)

### AwsJobAbortCriteriaAbortThresholdPercentage
* AwsJobAbortCriteriaAbortThresholdPercentage `number`

### AwsJobAbortCriteriaFailureType
* AwsJobAbortCriteriaFailureType `string` (values: FAILED, REJECTED, TIMED_OUT, ALL)

### AwsJobAbortCriteriaList
* AwsJobAbortCriteriaList `array`
  * items [AwsJobAbortCriteria](#awsjobabortcriteria)

### AwsJobAbortCriteriaMinimumNumberOfExecutedThings
* AwsJobAbortCriteriaMinimumNumberOfExecutedThings `integer`

### AwsJobExecutionsRolloutConfig
* AwsJobExecutionsRolloutConfig `object`: Configuration for the rollout of OTA updates.
  * exponentialRate
    * baseRatePerMinute **required**
    * incrementFactor **required**
    * rateIncreaseCriteria **required**
      * numberOfNotifiedThings
      * numberOfSucceededThings
  * maximumPerMinute

### AwsJobExponentialRolloutRate
* AwsJobExponentialRolloutRate `object`: The rate of increase for a job rollout. This parameter allows you to define an exponential rate increase for a job rollout.
  * baseRatePerMinute **required**
  * incrementFactor **required**
  * rateIncreaseCriteria **required**
    * numberOfNotifiedThings
    * numberOfSucceededThings

### AwsJobPresignedUrlConfig
* AwsJobPresignedUrlConfig `object`: Configuration information for pre-signed URLs. Valid when <code>protocols</code> contains HTTP.
  * expiresInSec

### AwsJobRateIncreaseCriteria
* AwsJobRateIncreaseCriteria `object`: The criteria to initiate the increase in rate of rollout for a job.
  * numberOfNotifiedThings
  * numberOfSucceededThings

### AwsJobRateIncreaseCriteriaNumberOfThings
* AwsJobRateIncreaseCriteriaNumberOfThings `integer`

### AwsJobRolloutIncrementFactor
* AwsJobRolloutIncrementFactor `number`

### AwsJobRolloutRatePerMinute
* AwsJobRolloutRatePerMinute `integer`

### AwsJobTimeoutConfig
* AwsJobTimeoutConfig `object`: Specifies the amount of time each device has to finish its execution of the job. A timer is started when the job execution status is set to <code>IN_PROGRESS</code>. If the job execution status is not set to another terminal state before the timer expires, it will be automatically set to <code>TIMED_OUT</code>.
  * inProgressTimeoutInMinutes

### AwsJobTimeoutInProgressTimeoutInMinutes
* AwsJobTimeoutInProgressTimeoutInMinutes `integer`

### BatchMode
* BatchMode `boolean`

### Behavior
* Behavior `object`: A Device Defender security profile behavior.
  * criteria
    * comparisonOperator
    * consecutiveDatapointsToAlarm
    * consecutiveDatapointsToClear
    * durationSeconds
    * mlDetectionConfig
      * confidenceLevel **required**
    * statisticalThreshold
      * statistic
    * value
      * cidrs
        * items [Cidr](#cidr)
      * count
      * number
      * numbers
        * items [Number](#number)
      * ports
        * items [Port](#port)
      * strings
        * items [stringValue](#stringvalue)
  * metric
  * metricDimension
    * dimensionName **required**
    * operator
  * name **required**
  * suppressAlerts

### BehaviorCriteria
* BehaviorCriteria `object`: The criteria by which the behavior is determined to be normal.
  * comparisonOperator
  * consecutiveDatapointsToAlarm
  * consecutiveDatapointsToClear
  * durationSeconds
  * mlDetectionConfig
    * confidenceLevel **required**
  * statisticalThreshold
    * statistic
  * value
    * cidrs
      * items [Cidr](#cidr)
    * count
    * number
    * numbers
      * items [Number](#number)
    * ports
      * items [Port](#port)
    * strings
      * items [stringValue](#stringvalue)

### BehaviorCriteriaType
* BehaviorCriteriaType `string` (values: STATIC, STATISTICAL, MACHINE_LEARNING)

### BehaviorMetric
* BehaviorMetric `string`

### BehaviorModelTrainingSummaries
* BehaviorModelTrainingSummaries `array`
  * items [BehaviorModelTrainingSummary](#behaviormodeltrainingsummary)

### BehaviorModelTrainingSummary
* BehaviorModelTrainingSummary `object`:  The summary of an ML Detect behavior model. 
  * behaviorName
  * datapointsCollectionPercentage
  * lastModelRefreshDate
  * modelStatus
  * securityProfileName
  * trainingDataCollectionStartDate

### BehaviorName
* BehaviorName `string`

### Behaviors
* Behaviors `array`
  * items [Behavior](#behavior)

### BillingGroupArn
* BillingGroupArn `string`

### BillingGroupDescription
* BillingGroupDescription `string`

### BillingGroupId
* BillingGroupId `string`

### BillingGroupMetadata
* BillingGroupMetadata `object`: Additional information about the billing group.
  * creationDate

### BillingGroupName
* BillingGroupName `string`

### BillingGroupNameAndArnList
* BillingGroupNameAndArnList `array`
  * items [GroupNameAndArn](#groupnameandarn)

### BillingGroupProperties
* BillingGroupProperties `object`: The properties of a billing group.
  * billingGroupDescription

### Boolean
* Boolean `boolean`

### BooleanKey
* BooleanKey `boolean`

### BucketName
* BucketName `string`

### CACertificate
* CACertificate `object`: A CA certificate.
  * certificateArn
  * certificateId
  * creationDate
  * status

### CACertificateDescription
* CACertificateDescription `object`: Describes a CA certificate.
  * autoRegistrationStatus
  * certificateArn
  * certificateId
  * certificatePem
  * creationDate
  * customerVersion
  * generationId
  * lastModifiedDate
  * ownedBy
  * status
  * validity
    * notAfter
    * notBefore

### CACertificateStatus
* CACertificateStatus `string` (values: ACTIVE, INACTIVE)

### CACertificateUpdateAction
* CACertificateUpdateAction `string` (values: DEACTIVATE)

### CACertificates
* CACertificates `array`
  * items [CACertificate](#cacertificate)

### CancelAuditMitigationActionsTaskRequest
* CancelAuditMitigationActionsTaskRequest `object`

### CancelAuditMitigationActionsTaskResponse
* CancelAuditMitigationActionsTaskResponse `object`

### CancelAuditTaskRequest
* CancelAuditTaskRequest `object`

### CancelAuditTaskResponse
* CancelAuditTaskResponse `object`

### CancelCertificateTransferRequest
* CancelCertificateTransferRequest `object`: The input for the CancelCertificateTransfer operation.

### CancelDetectMitigationActionsTaskRequest
* CancelDetectMitigationActionsTaskRequest `object`

### CancelDetectMitigationActionsTaskResponse
* CancelDetectMitigationActionsTaskResponse `object`

### CancelJobExecutionRequest
* CancelJobExecutionRequest `object`
  * expectedVersion
  * statusDetails

### CancelJobRequest
* CancelJobRequest `object`
  * comment
  * reasonCode

### CancelJobResponse
* CancelJobResponse `object`
  * description
  * jobArn
  * jobId

### CanceledChecksCount
* CanceledChecksCount `integer`

### CanceledFindingsCount
* CanceledFindingsCount `integer`

### CanceledThings
* CanceledThings `integer`

### CannedAccessControlList
* CannedAccessControlList `string` (values: private, public-read, public-read-write, aws-exec-read, authenticated-read, bucket-owner-read, bucket-owner-full-control, log-delivery-write)

### Certificate
* Certificate `object`: Information about a certificate.
  * certificateArn
  * certificateId
  * certificateMode
  * creationDate
  * status

### CertificateArn
* CertificateArn `string`

### CertificateConflictException


### CertificateDescription
* CertificateDescription `object`: Describes a certificate.
  * caCertificateId
  * certificateArn
  * certificateId
  * certificateMode
  * certificatePem
  * creationDate
  * customerVersion
  * generationId
  * lastModifiedDate
  * ownedBy
  * previousOwnedBy
  * status
  * transferData
    * acceptDate
    * rejectDate
    * rejectReason
    * transferDate
    * transferMessage
  * validity
    * notAfter
    * notBefore

### CertificateId
* CertificateId `string`

### CertificateMode
* CertificateMode `string` (values: DEFAULT, SNI_ONLY)

### CertificateName
* CertificateName `string`

### CertificatePathOnDevice
* CertificatePathOnDevice `string`

### CertificatePem
* CertificatePem `string`: The PEM of a certificate.

### CertificateSigningRequest
* CertificateSigningRequest `string`

### CertificateStateException


### CertificateStatus
* CertificateStatus `string` (values: ACTIVE, INACTIVE, REVOKED, PENDING_TRANSFER, REGISTER_INACTIVE, PENDING_ACTIVATION)

### CertificateValidationException


### CertificateValidity
* CertificateValidity `object`: When the certificate is valid.
  * notAfter
  * notBefore

### Certificates
* Certificates `array`
  * items [Certificate](#certificate)

### ChannelName
* ChannelName `string`

### CheckCompliant
* CheckCompliant `boolean`

### Cidr
* Cidr `string`

### Cidrs
* Cidrs `array`
  * items [Cidr](#cidr)

### ClearDefaultAuthorizerRequest
* ClearDefaultAuthorizerRequest `object`

### ClearDefaultAuthorizerResponse
* ClearDefaultAuthorizerResponse `object`

### ClientId
* ClientId `string`

### ClientProperties
* ClientProperties `object`

### ClientRequestToken
* ClientRequestToken `string`

### CloudwatchAlarmAction
* CloudwatchAlarmAction `object`: Describes an action that updates a CloudWatch alarm.
  * alarmName **required**
  * roleArn **required**
  * stateReason **required**
  * stateValue **required**

### CloudwatchLogsAction
* CloudwatchLogsAction `object`: Describes an action that sends data to CloudWatch Logs.
  * logGroupName **required**
  * roleArn **required**

### CloudwatchMetricAction
* CloudwatchMetricAction `object`: Describes an action that captures a CloudWatch metric.
  * metricName **required**
  * metricNamespace **required**
  * metricTimestamp
  * metricUnit **required**
  * metricValue **required**
  * roleArn **required**

### Code
* Code `string`

### CodeSigning
* CodeSigning `object`: Describes the method to use when code signing a file.
  * awsSignerJobId
  * customCodeSigning
    * certificateChain
      * certificateName
      * inlineDocument
    * hashAlgorithm
    * signature
      * inlineDocument
    * signatureAlgorithm
  * startSigningJobParameter
    * destination
      * s3Destination
        * bucket
        * prefix
    * signingProfileName
    * signingProfileParameter
      * certificateArn
      * certificatePathOnDevice
      * platform

### CodeSigningCertificateChain
* CodeSigningCertificateChain `object`: Describes the certificate chain being used when code signing a file.
  * certificateName
  * inlineDocument

### CodeSigningSignature
* CodeSigningSignature `object`: Describes the signature for a file.
  * inlineDocument

### CognitoIdentityPoolId
* CognitoIdentityPoolId `string`

### Comment
* Comment `string`

### ComparisonOperator
* ComparisonOperator `string` (values: less-than, less-than-equals, greater-than, greater-than-equals, in-cidr-set, not-in-cidr-set, in-port-set, not-in-port-set, in-set, not-in-set)

### CompliantChecksCount
* CompliantChecksCount `integer`

### ConfidenceLevel
* ConfidenceLevel `string` (values: LOW, MEDIUM, HIGH)

### Configuration
* Configuration `object`: Configuration.
  * Enabled

### ConfirmTopicRuleDestinationRequest
* ConfirmTopicRuleDestinationRequest `object`

### ConfirmTopicRuleDestinationResponse
* ConfirmTopicRuleDestinationResponse `object`

### ConfirmationToken
* ConfirmationToken `string`

### ConflictingResourceUpdateException


### ConnectivityTimestamp
* ConnectivityTimestamp `integer`

### ConsecutiveDatapointsToAlarm
* ConsecutiveDatapointsToAlarm `integer`

### ConsecutiveDatapointsToClear
* ConsecutiveDatapointsToClear `integer`

### Count
* Count `integer`

### CreateAuditSuppressionRequest
* CreateAuditSuppressionRequest `object`
  * checkName **required** [AuditCheckName](#auditcheckname)
  * clientRequestToken **required**
  * description
  * expirationDate
  * resourceIdentifier **required** [ResourceIdentifier](#resourceidentifier)
  * suppressIndefinitely

### CreateAuditSuppressionResponse
* CreateAuditSuppressionResponse `object`

### CreateAuthorizerRequest
* CreateAuthorizerRequest `object`
  * tags
    * items [Tag](#tag)
  * authorizerFunctionArn **required**
  * signingDisabled
  * status
  * tokenKeyName
  * tokenSigningPublicKeys

### CreateAuthorizerResponse
* CreateAuthorizerResponse `object`
  * authorizerArn
  * authorizerName

### CreateBillingGroupRequest
* CreateBillingGroupRequest `object`
  * tags
    * items [Tag](#tag)
  * billingGroupProperties
    * billingGroupDescription

### CreateBillingGroupResponse
* CreateBillingGroupResponse `object`
  * billingGroupArn
  * billingGroupId
  * billingGroupName

### CreateCertificateFromCsrRequest
* CreateCertificateFromCsrRequest `object`: The input for the CreateCertificateFromCsr operation.
  * certificateSigningRequest **required**

### CreateCertificateFromCsrResponse
* CreateCertificateFromCsrResponse `object`: The output from the CreateCertificateFromCsr operation.
  * certificateArn
  * certificateId
  * certificatePem

### CreateCustomMetricRequest
* CreateCustomMetricRequest `object`
  * tags
    * items [Tag](#tag)
  * clientRequestToken **required**
  * displayName
  * metricType **required**

### CreateCustomMetricResponse
* CreateCustomMetricResponse `object`
  * metricArn
  * metricName

### CreateDimensionRequest
* CreateDimensionRequest `object`
  * tags
    * items [Tag](#tag)
  * clientRequestToken **required**
  * stringValues **required**
    * items [DimensionStringValue](#dimensionstringvalue)
  * type **required**

### CreateDimensionResponse
* CreateDimensionResponse `object`
  * arn
  * name

### CreateDomainConfigurationRequest
* CreateDomainConfigurationRequest `object`
  * tags
    * items [Tag](#tag)
  * authorizerConfig
    * allowAuthorizerOverride
    * defaultAuthorizerName
  * domainName
  * serverCertificateArns
    * items [AcmCertificateArn](#acmcertificatearn)
  * serviceType
  * validationCertificateArn

### CreateDomainConfigurationResponse
* CreateDomainConfigurationResponse `object`
  * domainConfigurationArn
  * domainConfigurationName

### CreateDynamicThingGroupRequest
* CreateDynamicThingGroupRequest `object`
  * tags
    * items [Tag](#tag)
  * indexName
  * queryString **required**
  * queryVersion
  * thingGroupProperties
    * attributePayload
      * attributes
      * merge
    * thingGroupDescription

### CreateDynamicThingGroupResponse
* CreateDynamicThingGroupResponse `object`
  * indexName
  * queryString
  * queryVersion
  * thingGroupArn
  * thingGroupId
  * thingGroupName

### CreateJobRequest
* CreateJobRequest `object`
  * tags
    * items [Tag](#tag)
  * abortConfig
    * criteriaList **required**
      * items [AbortCriteria](#abortcriteria)
  * description
  * document
  * documentSource
  * jobExecutionsRolloutConfig
    * exponentialRate
      * baseRatePerMinute **required**
      * incrementFactor **required**
      * rateIncreaseCriteria **required**
        * numberOfNotifiedThings
        * numberOfSucceededThings
    * maximumPerMinute
  * namespaceId
  * presignedUrlConfig
    * expiresInSec
    * roleArn
  * targetSelection
  * targets **required**
    * items [TargetArn](#targetarn)
  * timeoutConfig
    * inProgressTimeoutInMinutes

### CreateJobResponse
* CreateJobResponse `object`
  * description
  * jobArn
  * jobId

### CreateKeysAndCertificateRequest
* CreateKeysAndCertificateRequest `object`: The input for the CreateKeysAndCertificate operation.

### CreateKeysAndCertificateResponse
* CreateKeysAndCertificateResponse `object`: The output of the CreateKeysAndCertificate operation.
  * certificateArn
  * certificateId
  * certificatePem
  * keyPair
    * PrivateKey
    * PublicKey

### CreateMitigationActionRequest
* CreateMitigationActionRequest `object`
  * tags
    * items [Tag](#tag)
  * actionParams **required**
    * addThingsToThingGroupParams
      * overrideDynamicGroups
      * thingGroupNames **required**
        * items [ThingGroupName](#thinggroupname)
    * enableIoTLoggingParams
      * logLevel **required**
      * roleArnForLogging **required**
    * publishFindingToSnsParams
      * topicArn **required**
    * replaceDefaultPolicyVersionParams
      * templateName **required**
    * updateCACertificateParams
      * action **required**
    * updateDeviceCertificateParams
      * action **required**
  * roleArn **required**

### CreateMitigationActionResponse
* CreateMitigationActionResponse `object`
  * actionArn
  * actionId

### CreateOTAUpdateRequest
* CreateOTAUpdateRequest `object`
  * tags
    * items [Tag](#tag)
  * additionalParameters
  * awsJobAbortConfig
    * abortCriteriaList **required**
      * items [AwsJobAbortCriteria](#awsjobabortcriteria)
  * awsJobExecutionsRolloutConfig
    * exponentialRate
      * baseRatePerMinute **required**
      * incrementFactor **required**
      * rateIncreaseCriteria **required**
        * numberOfNotifiedThings
        * numberOfSucceededThings
    * maximumPerMinute
  * awsJobPresignedUrlConfig
    * expiresInSec
  * awsJobTimeoutConfig
    * inProgressTimeoutInMinutes
  * description
  * files **required**
    * items [OTAUpdateFile](#otaupdatefile)
  * protocols
    * items [Protocol](#protocol)
  * roleArn **required**
  * targetSelection
  * targets **required**
    * items [Target](#target)

### CreateOTAUpdateResponse
* CreateOTAUpdateResponse `object`
  * awsIotJobArn
  * awsIotJobId
  * otaUpdateArn
  * otaUpdateId
  * otaUpdateStatus

### CreatePolicyRequest
* CreatePolicyRequest `object`: The input for the CreatePolicy operation.
  * tags
    * items [Tag](#tag)
  * policyDocument **required**

### CreatePolicyResponse
* CreatePolicyResponse `object`: The output from the CreatePolicy operation.
  * policyArn
  * policyDocument
  * policyName
  * policyVersionId

### CreatePolicyVersionRequest
* CreatePolicyVersionRequest `object`: The input for the CreatePolicyVersion operation.
  * policyDocument **required**

### CreatePolicyVersionResponse
* CreatePolicyVersionResponse `object`: The output of the CreatePolicyVersion operation.
  * isDefaultVersion
  * policyArn
  * policyDocument
  * policyVersionId

### CreateProvisioningClaimRequest
* CreateProvisioningClaimRequest `object`

### CreateProvisioningClaimResponse
* CreateProvisioningClaimResponse `object`
  * certificateId
  * certificatePem
  * expiration
  * keyPair
    * PrivateKey
    * PublicKey

### CreateProvisioningTemplateRequest
* CreateProvisioningTemplateRequest `object`
  * tags
    * items [Tag](#tag)
  * description
  * enabled
  * preProvisioningHook
    * payloadVersion
    * targetArn **required**
  * provisioningRoleArn **required**
  * templateBody **required**
  * templateName **required**

### CreateProvisioningTemplateResponse
* CreateProvisioningTemplateResponse `object`
  * defaultVersionId
  * templateArn
  * templateName

### CreateProvisioningTemplateVersionRequest
* CreateProvisioningTemplateVersionRequest `object`
  * templateBody **required**

### CreateProvisioningTemplateVersionResponse
* CreateProvisioningTemplateVersionResponse `object`
  * isDefaultVersion
  * templateArn
  * templateName
  * versionId

### CreateRoleAliasRequest
* CreateRoleAliasRequest `object`
  * tags
    * items [Tag](#tag)
  * credentialDurationSeconds
  * roleArn **required**

### CreateRoleAliasResponse
* CreateRoleAliasResponse `object`
  * roleAlias
  * roleAliasArn

### CreateScheduledAuditRequest
* CreateScheduledAuditRequest `object`
  * tags
    * items [Tag](#tag)
  * dayOfMonth
  * dayOfWeek
  * frequency **required**
  * targetCheckNames **required**
    * items [AuditCheckName](#auditcheckname)

### CreateScheduledAuditResponse
* CreateScheduledAuditResponse `object`
  * scheduledAuditArn

### CreateSecurityProfileRequest
* CreateSecurityProfileRequest `object`
  * tags
    * items [Tag](#tag)
  * additionalMetricsToRetain
    * items [BehaviorMetric](#behaviormetric)
  * additionalMetricsToRetainV2
    * items [MetricToRetain](#metrictoretain)
  * alertTargets
  * behaviors
    * items [Behavior](#behavior)
  * securityProfileDescription

### CreateSecurityProfileResponse
* CreateSecurityProfileResponse `object`
  * securityProfileArn
  * securityProfileName

### CreateStreamRequest
* CreateStreamRequest `object`
  * tags
    * items [Tag](#tag)
  * description
  * files **required**
    * items [StreamFile](#streamfile)
  * roleArn **required**

### CreateStreamResponse
* CreateStreamResponse `object`
  * description
  * streamArn
  * streamId
  * streamVersion

### CreateThingGroupRequest
* CreateThingGroupRequest `object`
  * tags
    * items [Tag](#tag)
  * parentGroupName
  * thingGroupProperties
    * attributePayload
      * attributes
      * merge
    * thingGroupDescription

### CreateThingGroupResponse
* CreateThingGroupResponse `object`
  * thingGroupArn
  * thingGroupId
  * thingGroupName

### CreateThingRequest
* CreateThingRequest `object`: The input for the CreateThing operation.
  * attributePayload
    * attributes
    * merge
  * billingGroupName
  * thingTypeName

### CreateThingResponse
* CreateThingResponse `object`: The output of the CreateThing operation.
  * thingArn
  * thingId
  * thingName

### CreateThingTypeRequest
* CreateThingTypeRequest `object`: The input for the CreateThingType operation.
  * tags
    * items [Tag](#tag)
  * thingTypeProperties
    * searchableAttributes
      * items [AttributeName](#attributename)
    * thingTypeDescription

### CreateThingTypeResponse
* CreateThingTypeResponse `object`: The output of the CreateThingType operation.
  * thingTypeArn
  * thingTypeId
  * thingTypeName

### CreateTopicRuleDestinationRequest
* CreateTopicRuleDestinationRequest `object`
  * destinationConfiguration **required**
    * httpUrlConfiguration
      * confirmationUrl **required**
    * vpcConfiguration
      * roleArn **required**
      * securityGroups
        * items [SecurityGroupId](#securitygroupid)
      * subnetIds **required**
        * items [SubnetId](#subnetid)
      * vpcId **required**

### CreateTopicRuleDestinationResponse
* CreateTopicRuleDestinationResponse `object`
  * topicRuleDestination
    * arn
    * createdAt
    * httpUrlProperties
      * confirmationUrl
    * lastUpdatedAt
    * status
    * statusReason
    * vpcProperties
      * roleArn
      * securityGroups
        * items [SecurityGroupId](#securitygroupid)
      * subnetIds
        * items [SubnetId](#subnetid)
      * vpcId

### CreateTopicRuleRequest
* CreateTopicRuleRequest `object`: The input for the CreateTopicRule operation.
  * topicRulePayload **required**
    * actions **required**
      * items [Action](#action)
    * awsIotSqlVersion
    * description
    * errorAction
      * cloudwatchAlarm
        * alarmName **required**
        * roleArn **required**
        * stateReason **required**
        * stateValue **required**
      * cloudwatchLogs
        * logGroupName **required**
        * roleArn **required**
      * cloudwatchMetric
        * metricName **required**
        * metricNamespace **required**
        * metricTimestamp
        * metricUnit **required**
        * metricValue **required**
        * roleArn **required**
      * dynamoDB
        * hashKeyField **required**
        * hashKeyType
        * hashKeyValue **required**
        * operation
        * payloadField
        * rangeKeyField
        * rangeKeyType
        * rangeKeyValue
        * roleArn **required**
        * tableName **required**
      * dynamoDBv2
        * putItem **required**
          * tableName **required**
        * roleArn **required**
      * elasticsearch
        * endpoint **required**
        * id **required**
        * index **required**
        * roleArn **required**
        * type **required**
      * firehose
        * batchMode
        * deliveryStreamName **required**
        * roleArn **required**
        * separator
      * http
        * auth
          * sigv4
        * confirmationUrl
        * headers
          * items [HttpActionHeader](#httpactionheader)
        * url **required**
      * iotAnalytics
        * batchMode
        * channelArn
        * channelName
        * roleArn
      * iotEvents
        * batchMode
        * inputName **required**
        * messageId
        * roleArn **required**
      * iotSiteWise
        * putAssetPropertyValueEntries **required**
          * items [PutAssetPropertyValueEntry](#putassetpropertyvalueentry)
        * roleArn **required**
      * kafka
        * clientProperties **required**
        * destinationArn **required**
        * key
        * partition
        * topic **required**
      * kinesis
        * partitionKey
        * roleArn **required**
        * streamName **required**
      * lambda
        * functionArn **required**
      * republish
        * qos
        * roleArn **required**
        * topic **required**
      * s3
        * bucketName **required**
        * cannedAcl
        * key **required**
        * roleArn **required**
      * salesforce
        * token **required**
        * url **required**
      * sns
        * messageFormat
        * roleArn **required**
        * targetArn **required**
      * sqs
        * queueUrl **required**
        * roleArn **required**
        * useBase64
      * stepFunctions
        * executionNamePrefix
        * roleArn **required**
        * stateMachineName **required**
      * timestream
        * databaseName **required**
        * dimensions **required**
          * items [TimestreamDimension](#timestreamdimension)
        * roleArn **required**
        * tableName **required**
        * timestamp
          * unit **required**
          * value **required**
    * ruleDisabled
    * sql **required**

### CreatedAtDate
* CreatedAtDate `string`

### CreationDate
* CreationDate `string`

### CredentialDurationSeconds
* CredentialDurationSeconds `integer`

### CustomCodeSigning
* CustomCodeSigning `object`: Describes a custom method used to code sign a file.
  * certificateChain
    * certificateName
    * inlineDocument
  * hashAlgorithm
  * signature
    * inlineDocument
  * signatureAlgorithm

### CustomMetricArn
* CustomMetricArn `string`

### CustomMetricDisplayName
* CustomMetricDisplayName `string`

### CustomMetricType
* CustomMetricType `string` (values: string-list, ip-address-list, number-list, number)

### CustomerVersion
* CustomerVersion `integer`

### DataCollectionPercentage
* DataCollectionPercentage `number`

### DateType
* DateType `string`

### DayOfMonth
* DayOfMonth `string`

### DayOfWeek
* DayOfWeek `string` (values: SUN, MON, TUE, WED, THU, FRI, SAT)

### DeleteAccountAuditConfigurationRequest
* DeleteAccountAuditConfigurationRequest `object`

### DeleteAccountAuditConfigurationResponse
* DeleteAccountAuditConfigurationResponse `object`

### DeleteAdditionalMetricsToRetain
* DeleteAdditionalMetricsToRetain `boolean`

### DeleteAlertTargets
* DeleteAlertTargets `boolean`

### DeleteAuditSuppressionRequest
* DeleteAuditSuppressionRequest `object`
  * checkName **required** [AuditCheckName](#auditcheckname)
  * resourceIdentifier **required** [ResourceIdentifier](#resourceidentifier)

### DeleteAuditSuppressionResponse
* DeleteAuditSuppressionResponse `object`

### DeleteAuthorizerRequest
* DeleteAuthorizerRequest `object`

### DeleteAuthorizerResponse
* DeleteAuthorizerResponse `object`

### DeleteBehaviors
* DeleteBehaviors `boolean`

### DeleteBillingGroupRequest
* DeleteBillingGroupRequest `object`

### DeleteBillingGroupResponse
* DeleteBillingGroupResponse `object`

### DeleteCACertificateRequest
* DeleteCACertificateRequest `object`: Input for the DeleteCACertificate operation.

### DeleteCACertificateResponse
* DeleteCACertificateResponse `object`: The output for the DeleteCACertificate operation.

### DeleteCertificateRequest
* DeleteCertificateRequest `object`: The input for the DeleteCertificate operation.

### DeleteConflictException


### DeleteCustomMetricRequest
* DeleteCustomMetricRequest `object`

### DeleteCustomMetricResponse
* DeleteCustomMetricResponse `object`

### DeleteDimensionRequest
* DeleteDimensionRequest `object`

### DeleteDimensionResponse
* DeleteDimensionResponse `object`

### DeleteDomainConfigurationRequest
* DeleteDomainConfigurationRequest `object`

### DeleteDomainConfigurationResponse
* DeleteDomainConfigurationResponse `object`

### DeleteDynamicThingGroupRequest
* DeleteDynamicThingGroupRequest `object`

### DeleteDynamicThingGroupResponse
* DeleteDynamicThingGroupResponse `object`

### DeleteJobExecutionRequest
* DeleteJobExecutionRequest `object`

### DeleteJobRequest
* DeleteJobRequest `object`

### DeleteMitigationActionRequest
* DeleteMitigationActionRequest `object`

### DeleteMitigationActionResponse
* DeleteMitigationActionResponse `object`

### DeleteOTAUpdateRequest
* DeleteOTAUpdateRequest `object`

### DeleteOTAUpdateResponse
* DeleteOTAUpdateResponse `object`

### DeletePolicyRequest
* DeletePolicyRequest `object`: The input for the DeletePolicy operation.

### DeletePolicyVersionRequest
* DeletePolicyVersionRequest `object`: The input for the DeletePolicyVersion operation.

### DeleteProvisioningTemplateRequest
* DeleteProvisioningTemplateRequest `object`

### DeleteProvisioningTemplateResponse
* DeleteProvisioningTemplateResponse `object`

### DeleteProvisioningTemplateVersionRequest
* DeleteProvisioningTemplateVersionRequest `object`

### DeleteProvisioningTemplateVersionResponse
* DeleteProvisioningTemplateVersionResponse `object`

### DeleteRegistrationCodeRequest
* DeleteRegistrationCodeRequest `object`: The input for the DeleteRegistrationCode operation.

### DeleteRegistrationCodeResponse
* DeleteRegistrationCodeResponse `object`: The output for the DeleteRegistrationCode operation.

### DeleteRoleAliasRequest
* DeleteRoleAliasRequest `object`

### DeleteRoleAliasResponse
* DeleteRoleAliasResponse `object`

### DeleteScheduledAuditRequest
* DeleteScheduledAuditRequest `object`

### DeleteScheduledAuditResponse
* DeleteScheduledAuditResponse `object`

### DeleteScheduledAudits
* DeleteScheduledAudits `boolean`

### DeleteSecurityProfileRequest
* DeleteSecurityProfileRequest `object`

### DeleteSecurityProfileResponse
* DeleteSecurityProfileResponse `object`

### DeleteStream
* DeleteStream `boolean`

### DeleteStreamRequest
* DeleteStreamRequest `object`

### DeleteStreamResponse
* DeleteStreamResponse `object`

### DeleteThingGroupRequest
* DeleteThingGroupRequest `object`

### DeleteThingGroupResponse
* DeleteThingGroupResponse `object`

### DeleteThingRequest
* DeleteThingRequest `object`: The input for the DeleteThing operation.

### DeleteThingResponse
* DeleteThingResponse `object`: The output of the DeleteThing operation.

### DeleteThingTypeRequest
* DeleteThingTypeRequest `object`: The input for the DeleteThingType operation.

### DeleteThingTypeResponse
* DeleteThingTypeResponse `object`: The output for the DeleteThingType operation.

### DeleteTopicRuleDestinationRequest
* DeleteTopicRuleDestinationRequest `object`

### DeleteTopicRuleDestinationResponse
* DeleteTopicRuleDestinationResponse `object`

### DeleteTopicRuleRequest
* DeleteTopicRuleRequest `object`: The input for the DeleteTopicRule operation.

### DeleteV2LoggingLevelRequest
* DeleteV2LoggingLevelRequest `object`

### DeliveryStreamName
* DeliveryStreamName `string`

### Denied
* Denied `object`: Contains information that denied the authorization.
  * explicitDeny
    * policies
      * items [Policy](#policy)
  * implicitDeny
    * policies
      * items [Policy](#policy)

### DeprecateThingTypeRequest
* DeprecateThingTypeRequest `object`: The input for the DeprecateThingType operation.
  * undoDeprecate

### DeprecateThingTypeResponse
* DeprecateThingTypeResponse `object`: The output for the DeprecateThingType operation.

### DeprecationDate
* DeprecationDate `string`

### DescribeAccountAuditConfigurationRequest
* DescribeAccountAuditConfigurationRequest `object`

### DescribeAccountAuditConfigurationResponse
* DescribeAccountAuditConfigurationResponse `object`
  * auditCheckConfigurations
  * auditNotificationTargetConfigurations
  * roleArn

### DescribeAuditFindingRequest
* DescribeAuditFindingRequest `object`

### DescribeAuditFindingResponse
* DescribeAuditFindingResponse `object`
  * finding [AuditFinding](#auditfinding)

### DescribeAuditMitigationActionsTaskRequest
* DescribeAuditMitigationActionsTaskRequest `object`

### DescribeAuditMitigationActionsTaskResponse
* DescribeAuditMitigationActionsTaskResponse `object`
  * actionsDefinition
    * items [MitigationAction](#mitigationaction)
  * auditCheckToActionsMapping
  * endTime
  * startTime
  * target
    * auditCheckToReasonCodeFilter
    * auditTaskId
    * findingIds
      * items [FindingId](#findingid)
  * taskStatistics
  * taskStatus

### DescribeAuditSuppressionRequest
* DescribeAuditSuppressionRequest `object`
  * checkName **required** [AuditCheckName](#auditcheckname)
  * resourceIdentifier **required** [ResourceIdentifier](#resourceidentifier)

### DescribeAuditSuppressionResponse
* DescribeAuditSuppressionResponse `object`
  * checkName [AuditCheckName](#auditcheckname)
  * description
  * expirationDate
  * resourceIdentifier [ResourceIdentifier](#resourceidentifier)
  * suppressIndefinitely

### DescribeAuditTaskRequest
* DescribeAuditTaskRequest `object`

### DescribeAuditTaskResponse
* DescribeAuditTaskResponse `object`
  * auditDetails
  * scheduledAuditName
  * taskStartTime
  * taskStatistics
    * canceledChecks
    * compliantChecks
    * failedChecks
    * inProgressChecks
    * nonCompliantChecks
    * totalChecks
    * waitingForDataCollectionChecks
  * taskStatus
  * taskType

### DescribeAuthorizerRequest
* DescribeAuthorizerRequest `object`

### DescribeAuthorizerResponse
* DescribeAuthorizerResponse `object`
  * authorizerDescription
    * authorizerArn
    * authorizerFunctionArn
    * authorizerName
    * creationDate
    * lastModifiedDate
    * signingDisabled
    * status
    * tokenKeyName
    * tokenSigningPublicKeys

### DescribeBillingGroupRequest
* DescribeBillingGroupRequest `object`

### DescribeBillingGroupResponse
* DescribeBillingGroupResponse `object`
  * billingGroupArn
  * billingGroupId
  * billingGroupMetadata
    * creationDate
  * billingGroupName
  * billingGroupProperties
    * billingGroupDescription
  * version

### DescribeCACertificateRequest
* DescribeCACertificateRequest `object`: The input for the DescribeCACertificate operation.

### DescribeCACertificateResponse
* DescribeCACertificateResponse `object`: The output from the DescribeCACertificate operation.
  * certificateDescription
    * autoRegistrationStatus
    * certificateArn
    * certificateId
    * certificatePem
    * creationDate
    * customerVersion
    * generationId
    * lastModifiedDate
    * ownedBy
    * status
    * validity
      * notAfter
      * notBefore
  * registrationConfig
    * roleArn
    * templateBody

### DescribeCertificateRequest
* DescribeCertificateRequest `object`: The input for the DescribeCertificate operation.

### DescribeCertificateResponse
* DescribeCertificateResponse `object`: The output of the DescribeCertificate operation.
  * certificateDescription
    * caCertificateId
    * certificateArn
    * certificateId
    * certificateMode
    * certificatePem
    * creationDate
    * customerVersion
    * generationId
    * lastModifiedDate
    * ownedBy
    * previousOwnedBy
    * status
    * transferData
      * acceptDate
      * rejectDate
      * rejectReason
      * transferDate
      * transferMessage
    * validity
      * notAfter
      * notBefore

### DescribeCustomMetricRequest
* DescribeCustomMetricRequest `object`

### DescribeCustomMetricResponse
* DescribeCustomMetricResponse `object`
  * creationDate
  * displayName
  * lastModifiedDate
  * metricArn
  * metricName
  * metricType

### DescribeDefaultAuthorizerRequest
* DescribeDefaultAuthorizerRequest `object`

### DescribeDefaultAuthorizerResponse
* DescribeDefaultAuthorizerResponse `object`
  * authorizerDescription
    * authorizerArn
    * authorizerFunctionArn
    * authorizerName
    * creationDate
    * lastModifiedDate
    * signingDisabled
    * status
    * tokenKeyName
    * tokenSigningPublicKeys

### DescribeDetectMitigationActionsTaskRequest
* DescribeDetectMitigationActionsTaskRequest `object`

### DescribeDetectMitigationActionsTaskResponse
* DescribeDetectMitigationActionsTaskResponse `object`
  * taskSummary
    * actionsDefinition
      * items [MitigationAction](#mitigationaction)
    * onlyActiveViolationsIncluded
    * suppressedAlertsIncluded
    * target
      * behaviorName
      * securityProfileName
      * violationIds
        * items [ViolationId](#violationid)
    * taskEndTime
    * taskId
    * taskStartTime
    * taskStatistics
      * actionsExecuted
      * actionsFailed
      * actionsSkipped
    * taskStatus
    * violationEventOccurrenceRange
      * endTime **required**
      * startTime **required**

### DescribeDimensionRequest
* DescribeDimensionRequest `object`

### DescribeDimensionResponse
* DescribeDimensionResponse `object`
  * arn
  * creationDate
  * lastModifiedDate
  * name
  * stringValues
    * items [DimensionStringValue](#dimensionstringvalue)
  * type

### DescribeDomainConfigurationRequest
* DescribeDomainConfigurationRequest `object`

### DescribeDomainConfigurationResponse
* DescribeDomainConfigurationResponse `object`
  * authorizerConfig
    * allowAuthorizerOverride
    * defaultAuthorizerName
  * domainConfigurationArn
  * domainConfigurationName
  * domainConfigurationStatus
  * domainName
  * domainType
  * lastStatusChangeDate
  * serverCertificates
    * items [ServerCertificateSummary](#servercertificatesummary)
  * serviceType

### DescribeEndpointRequest
* DescribeEndpointRequest `object`: The input for the DescribeEndpoint operation.

### DescribeEndpointResponse
* DescribeEndpointResponse `object`: The output from the DescribeEndpoint operation.
  * endpointAddress

### DescribeEventConfigurationsRequest
* DescribeEventConfigurationsRequest `object`

### DescribeEventConfigurationsResponse
* DescribeEventConfigurationsResponse `object`
  * creationDate
  * eventConfigurations
  * lastModifiedDate

### DescribeIndexRequest
* DescribeIndexRequest `object`

### DescribeIndexResponse
* DescribeIndexResponse `object`
  * indexName
  * indexStatus
  * schema

### DescribeJobExecutionRequest
* DescribeJobExecutionRequest `object`

### DescribeJobExecutionResponse
* DescribeJobExecutionResponse `object`
  * execution
    * approximateSecondsBeforeTimedOut
    * executionNumber
    * forceCanceled
    * jobId
    * lastUpdatedAt
    * queuedAt
    * startedAt
    * status
    * statusDetails
      * detailsMap
    * thingArn
    * versionNumber

### DescribeJobRequest
* DescribeJobRequest `object`

### DescribeJobResponse
* DescribeJobResponse `object`
  * documentSource
  * job
    * abortConfig
      * criteriaList **required**
        * items [AbortCriteria](#abortcriteria)
    * comment
    * completedAt
    * createdAt
    * description
    * forceCanceled
    * jobArn
    * jobExecutionsRolloutConfig
      * exponentialRate
        * baseRatePerMinute **required**
        * incrementFactor **required**
        * rateIncreaseCriteria **required**
          * numberOfNotifiedThings
          * numberOfSucceededThings
      * maximumPerMinute
    * jobId
    * jobProcessDetails
      * numberOfCanceledThings
      * numberOfFailedThings
      * numberOfInProgressThings
      * numberOfQueuedThings
      * numberOfRejectedThings
      * numberOfRemovedThings
      * numberOfSucceededThings
      * numberOfTimedOutThings
      * processingTargets
        * items [ProcessingTargetName](#processingtargetname)
    * lastUpdatedAt
    * namespaceId
    * presignedUrlConfig
      * expiresInSec
      * roleArn
    * reasonCode
    * status
    * targetSelection
    * targets
      * items [TargetArn](#targetarn)
    * timeoutConfig
      * inProgressTimeoutInMinutes

### DescribeMitigationActionRequest
* DescribeMitigationActionRequest `object`

### DescribeMitigationActionResponse
* DescribeMitigationActionResponse `object`
  * actionArn
  * actionId
  * actionName
  * actionParams
    * addThingsToThingGroupParams
      * overrideDynamicGroups
      * thingGroupNames **required**
        * items [ThingGroupName](#thinggroupname)
    * enableIoTLoggingParams
      * logLevel **required**
      * roleArnForLogging **required**
    * publishFindingToSnsParams
      * topicArn **required**
    * replaceDefaultPolicyVersionParams
      * templateName **required**
    * updateCACertificateParams
      * action **required**
    * updateDeviceCertificateParams
      * action **required**
  * actionType
  * creationDate
  * lastModifiedDate
  * roleArn

### DescribeProvisioningTemplateRequest
* DescribeProvisioningTemplateRequest `object`

### DescribeProvisioningTemplateResponse
* DescribeProvisioningTemplateResponse `object`
  * creationDate
  * defaultVersionId
  * description
  * enabled
  * lastModifiedDate
  * preProvisioningHook
    * payloadVersion
    * targetArn **required**
  * provisioningRoleArn
  * templateArn
  * templateBody
  * templateName

### DescribeProvisioningTemplateVersionRequest
* DescribeProvisioningTemplateVersionRequest `object`

### DescribeProvisioningTemplateVersionResponse
* DescribeProvisioningTemplateVersionResponse `object`
  * creationDate
  * isDefaultVersion
  * templateBody
  * versionId

### DescribeRoleAliasRequest
* DescribeRoleAliasRequest `object`

### DescribeRoleAliasResponse
* DescribeRoleAliasResponse `object`
  * roleAliasDescription
    * creationDate
    * credentialDurationSeconds
    * lastModifiedDate
    * owner
    * roleAlias
    * roleAliasArn
    * roleArn

### DescribeScheduledAuditRequest
* DescribeScheduledAuditRequest `object`

### DescribeScheduledAuditResponse
* DescribeScheduledAuditResponse `object`
  * dayOfMonth
  * dayOfWeek
  * frequency
  * scheduledAuditArn
  * scheduledAuditName
  * targetCheckNames
    * items [AuditCheckName](#auditcheckname)

### DescribeSecurityProfileRequest
* DescribeSecurityProfileRequest `object`

### DescribeSecurityProfileResponse
* DescribeSecurityProfileResponse `object`
  * additionalMetricsToRetain
    * items [BehaviorMetric](#behaviormetric)
  * additionalMetricsToRetainV2
    * items [MetricToRetain](#metrictoretain)
  * alertTargets
  * behaviors
    * items [Behavior](#behavior)
  * creationDate
  * lastModifiedDate
  * securityProfileArn
  * securityProfileDescription
  * securityProfileName
  * version

### DescribeStreamRequest
* DescribeStreamRequest `object`

### DescribeStreamResponse
* DescribeStreamResponse `object`
  * streamInfo
    * createdAt
    * description
    * files
      * items [StreamFile](#streamfile)
    * lastUpdatedAt
    * roleArn
    * streamArn
    * streamId
    * streamVersion

### DescribeThingGroupRequest
* DescribeThingGroupRequest `object`

### DescribeThingGroupResponse
* DescribeThingGroupResponse `object`
  * indexName
  * queryString
  * queryVersion
  * status
  * thingGroupArn
  * thingGroupId
  * thingGroupMetadata
    * creationDate
    * parentGroupName
    * rootToParentThingGroups
      * items [GroupNameAndArn](#groupnameandarn)
  * thingGroupName
  * thingGroupProperties
    * attributePayload
      * attributes
      * merge
    * thingGroupDescription
  * version

### DescribeThingRegistrationTaskRequest
* DescribeThingRegistrationTaskRequest `object`

### DescribeThingRegistrationTaskResponse
* DescribeThingRegistrationTaskResponse `object`
  * creationDate
  * failureCount
  * inputFileBucket
  * inputFileKey
  * lastModifiedDate
  * message
  * percentageProgress
  * roleArn
  * status
  * successCount
  * taskId
  * templateBody

### DescribeThingRequest
* DescribeThingRequest `object`: The input for the DescribeThing operation.

### DescribeThingResponse
* DescribeThingResponse `object`: The output from the DescribeThing operation.
  * attributes
  * billingGroupName
  * defaultClientId
  * thingArn
  * thingId
  * thingName
  * thingTypeName
  * version

### DescribeThingTypeRequest
* DescribeThingTypeRequest `object`: The input for the DescribeThingType operation.

### DescribeThingTypeResponse
* DescribeThingTypeResponse `object`: The output for the DescribeThingType operation.
  * thingTypeArn
  * thingTypeId
  * thingTypeMetadata
    * creationDate
    * deprecated
    * deprecationDate
  * thingTypeName
  * thingTypeProperties
    * searchableAttributes
      * items [AttributeName](#attributename)
    * thingTypeDescription

### Description
* Description `string`

### Destination
* Destination `object`: Describes the location of the updated firmware.
  * s3Destination
    * bucket
    * prefix

### DetachPolicyRequest
* DetachPolicyRequest `object`
  * target **required**

### DetachPrincipalPolicyRequest
* DetachPrincipalPolicyRequest `object`: The input for the DetachPrincipalPolicy operation.

### DetachSecurityProfileRequest
* DetachSecurityProfileRequest `object`

### DetachSecurityProfileResponse
* DetachSecurityProfileResponse `object`

### DetachThingPrincipalRequest
* DetachThingPrincipalRequest `object`: The input for the DetachThingPrincipal operation.

### DetachThingPrincipalResponse
* DetachThingPrincipalResponse `object`: The output from the DetachThingPrincipal operation.

### DetailsKey
* DetailsKey `string`

### DetailsMap
* DetailsMap `object`

### DetailsValue
* DetailsValue `string`

### DetectMitigationActionExecution
* DetectMitigationActionExecution `object`:  Describes which mitigation actions should be executed. 
  * actionName
  * errorCode
  * executionEndDate
  * executionStartDate
  * message
  * status
  * taskId
  * thingName
  * violationId

### DetectMitigationActionExecutionErrorCode
* DetectMitigationActionExecutionErrorCode `string`

### DetectMitigationActionExecutionList
* DetectMitigationActionExecutionList `array`
  * items [DetectMitigationActionExecution](#detectmitigationactionexecution)

### DetectMitigationActionExecutionStatus
* DetectMitigationActionExecutionStatus `string` (values: IN_PROGRESS, SUCCESSFUL, FAILED, SKIPPED)

### DetectMitigationActionsTaskStatistics
* DetectMitigationActionsTaskStatistics `object`:  The statistics of a mitigation action task. 
  * actionsExecuted
  * actionsFailed
  * actionsSkipped

### DetectMitigationActionsTaskStatus
* DetectMitigationActionsTaskStatus `string` (values: IN_PROGRESS, SUCCESSFUL, FAILED, CANCELED)

### DetectMitigationActionsTaskSummary
* DetectMitigationActionsTaskSummary `object`:  The summary of the mitigation action tasks. 
  * actionsDefinition
    * items [MitigationAction](#mitigationaction)
  * onlyActiveViolationsIncluded
  * suppressedAlertsIncluded
  * target
    * behaviorName
    * securityProfileName
    * violationIds
      * items [ViolationId](#violationid)
  * taskEndTime
  * taskId
  * taskStartTime
  * taskStatistics
    * actionsExecuted
    * actionsFailed
    * actionsSkipped
  * taskStatus
  * violationEventOccurrenceRange
    * endTime **required**
    * startTime **required**

### DetectMitigationActionsTaskSummaryList
* DetectMitigationActionsTaskSummaryList `array`
  * items [DetectMitigationActionsTaskSummary](#detectmitigationactionstasksummary)

### DetectMitigationActionsTaskTarget
* DetectMitigationActionsTaskTarget `object`:  The target of a mitigation action task. 
  * behaviorName
  * securityProfileName
  * violationIds
    * items [ViolationId](#violationid)

### DetectMitigationActionsToExecuteList
* DetectMitigationActionsToExecuteList `array`
  * items [MitigationActionName](#mitigationactionname)

### DeviceCertificateUpdateAction
* DeviceCertificateUpdateAction `string` (values: DEACTIVATE)

### DeviceDefenderThingName
* DeviceDefenderThingName `string`

### DimensionArn
* DimensionArn `string`

### DimensionName
* DimensionName `string`

### DimensionNames
* DimensionNames `array`
  * items [DimensionName](#dimensionname)

### DimensionStringValue
* DimensionStringValue `string`

### DimensionStringValues
* DimensionStringValues `array`
  * items [DimensionStringValue](#dimensionstringvalue)

### DimensionType
* DimensionType `string` (values: TOPIC_FILTER)

### DimensionValueOperator
* DimensionValueOperator `string` (values: IN, NOT_IN)

### DisableAllLogs
* DisableAllLogs `boolean`

### DisableTopicRuleRequest
* DisableTopicRuleRequest `object`: The input for the DisableTopicRuleRequest operation.

### DomainConfigurationArn
* DomainConfigurationArn `string`

### DomainConfigurationName
* DomainConfigurationName `string`

### DomainConfigurationStatus
* DomainConfigurationStatus `string` (values: ENABLED, DISABLED)

### DomainConfigurationSummary
* DomainConfigurationSummary `object`: <p>The summary of a domain configuration. A domain configuration specifies custom IoT-specific information about a domain. A domain configuration can be associated with an AWS-managed domain (for example, dbc123defghijk.iot.us-west-2.amazonaws.com), a customer managed domain, or a default endpoint.</p> <ul> <li> <p>Data</p> </li> <li> <p>Jobs</p> </li> <li> <p>CredentialProvider</p> </li> </ul> <note> <p>The domain configuration feature is in public preview and is subject to change.</p> </note>
  * domainConfigurationArn
  * domainConfigurationName
  * serviceType

### DomainConfigurations
* DomainConfigurations `array`
  * items [DomainConfigurationSummary](#domainconfigurationsummary)

### DomainName
* DomainName `string`

### DomainType
* DomainType `string` (values: ENDPOINT, AWS_MANAGED, CUSTOMER_MANAGED)

### DurationSeconds
* DurationSeconds `integer`

### DynamicGroupStatus
* DynamicGroupStatus `string` (values: ACTIVE, BUILDING, REBUILDING)

### DynamoDBAction
* DynamoDBAction `object`: <p>Describes an action to write to a DynamoDB table.</p> <p>The <code>tableName</code>, <code>hashKeyField</code>, and <code>rangeKeyField</code> values must match the values used when you created the table.</p> <p>The <code>hashKeyValue</code> and <code>rangeKeyvalue</code> fields use a substitution template syntax. These templates provide data at runtime. The syntax is as follows: ${<i>sql-expression</i>}.</p> <p>You can specify any valid expression in a WHERE or SELECT clause, including JSON properties, comparisons, calculations, and functions. For example, the following field uses the third level of the topic:</p> <p> <code>"hashKeyValue": "${topic(3)}"</code> </p> <p>The following field uses the timestamp:</p> <p> <code>"rangeKeyValue": "${timestamp()}"</code> </p>
  * hashKeyField **required**
  * hashKeyType
  * hashKeyValue **required**
  * operation
  * payloadField
  * rangeKeyField
  * rangeKeyType
  * rangeKeyValue
  * roleArn **required**
  * tableName **required**

### DynamoDBv2Action
* DynamoDBv2Action `object`: <p>Describes an action to write to a DynamoDB table.</p> <p>This DynamoDB action writes each attribute in the message payload into it's own column in the DynamoDB table.</p>
  * putItem **required**
    * tableName **required**
  * roleArn **required**

### DynamoKeyType
* DynamoKeyType `string` (values: STRING, NUMBER)

### DynamoOperation
* DynamoOperation `string`

### EffectivePolicies
* EffectivePolicies `array`
  * items [EffectivePolicy](#effectivepolicy)

### EffectivePolicy
* EffectivePolicy `object`: The policy that has the effect on the authorization results.
  * policyArn
  * policyDocument
  * policyName

### ElasticsearchAction
* ElasticsearchAction `object`: Describes an action that writes data to an Amazon Elasticsearch Service domain.
  * endpoint **required**
  * id **required**
  * index **required**
  * roleArn **required**
  * type **required**

### ElasticsearchEndpoint
* ElasticsearchEndpoint `string`

### ElasticsearchId
* ElasticsearchId `string`

### ElasticsearchIndex
* ElasticsearchIndex `string`

### ElasticsearchType
* ElasticsearchType `string`

### EnableIoTLoggingParams
* EnableIoTLoggingParams `object`: Parameters used when defining a mitigation action that enable AWS IoT logging.
  * logLevel **required**
  * roleArnForLogging **required**

### EnableTopicRuleRequest
* EnableTopicRuleRequest `object`: The input for the EnableTopicRuleRequest operation.

### Enabled
* Enabled `boolean`

### EndpointAddress
* EndpointAddress `string`

### EndpointType
* EndpointType `string`

### ErrorCode
* ErrorCode `string`

### ErrorInfo
* ErrorInfo `object`: Error information.
  * code
  * message

### ErrorMessage
* ErrorMessage `string`

### EvaluationStatistic
* EvaluationStatistic `string`

### EventConfigurations
* EventConfigurations `object`

### EventType
* EventType `string` (values: THING, THING_GROUP, THING_TYPE, THING_GROUP_MEMBERSHIP, THING_GROUP_HIERARCHY, THING_TYPE_ASSOCIATION, JOB, JOB_EXECUTION, POLICY, CERTIFICATE, CA_CERTIFICATE)

### ExecutionNamePrefix
* ExecutionNamePrefix `string`

### ExecutionNumber
* ExecutionNumber `integer`

### ExpectedVersion
* ExpectedVersion `integer`

### ExpiresInSec
* ExpiresInSec `integer`

### ExpiresInSeconds
* ExpiresInSeconds `integer`

### ExplicitDeny
* ExplicitDeny `object`: Information that explicitly denies authorization.
  * policies
    * items [Policy](#policy)

### ExponentialRolloutRate
* ExponentialRolloutRate `object`: Allows you to create an exponential rate of rollout for a job.
  * baseRatePerMinute **required**
  * incrementFactor **required**
  * rateIncreaseCriteria **required**
    * numberOfNotifiedThings
    * numberOfSucceededThings

### FailedChecksCount
* FailedChecksCount `integer`

### FailedFindingsCount
* FailedFindingsCount `integer`

### FailedThings
* FailedThings `integer`

### Field
* Field `object`: Describes the name and data type at a field.
  * name
  * type

### FieldName
* FieldName `string`

### FieldType
* FieldType `string` (values: Number, String, Boolean)

### Fields
* Fields `array`
  * items [Field](#field)

### FileId
* FileId `integer`

### FileLocation
* FileLocation `object`: The location of the OTA update.
  * s3Location
    * bucket
    * key
    * version
  * stream
    * fileId
    * streamId

### FileName
* FileName `string`

### FileType
* FileType `integer`

### FindingId
* FindingId `string`

### FindingIds
* FindingIds `array`
  * items [FindingId](#findingid)

### FirehoseAction
* FirehoseAction `object`: Describes an action that writes data to an Amazon Kinesis Firehose stream.
  * batchMode
  * deliveryStreamName **required**
  * roleArn **required**
  * separator

### FirehoseSeparator
* FirehoseSeparator `string`

### Flag
* Flag `boolean`

### ForceDelete
* ForceDelete `boolean`

### ForceDeleteAWSJob
* ForceDeleteAWSJob `boolean`

### ForceFlag
* ForceFlag `boolean`

### Forced
* Forced `boolean`

### FunctionArn
* FunctionArn `string`

### GenerationId
* GenerationId `string`

### GenericLongValue
* GenericLongValue `integer`

### GetBehaviorModelTrainingSummariesRequest
* GetBehaviorModelTrainingSummariesRequest `object`

### GetBehaviorModelTrainingSummariesResponse
* GetBehaviorModelTrainingSummariesResponse `object`
  * nextToken
  * summaries
    * items [BehaviorModelTrainingSummary](#behaviormodeltrainingsummary)

### GetCardinalityRequest
* GetCardinalityRequest `object`
  * aggregationField
  * indexName
  * queryString **required**
  * queryVersion

### GetCardinalityResponse
* GetCardinalityResponse `object`
  * cardinality

### GetEffectivePoliciesRequest
* GetEffectivePoliciesRequest `object`
  * cognitoIdentityPoolId
  * principal

### GetEffectivePoliciesResponse
* GetEffectivePoliciesResponse `object`
  * effectivePolicies
    * items [EffectivePolicy](#effectivepolicy)

### GetIndexingConfigurationRequest
* GetIndexingConfigurationRequest `object`

### GetIndexingConfigurationResponse
* GetIndexingConfigurationResponse `object`
  * thingGroupIndexingConfiguration
    * customFields
      * items [Field](#field)
    * managedFields
      * items [Field](#field)
    * thingGroupIndexingMode **required**
  * thingIndexingConfiguration
    * customFields
      * items [Field](#field)
    * managedFields
      * items [Field](#field)
    * thingConnectivityIndexingMode
    * thingIndexingMode **required**

### GetJobDocumentRequest
* GetJobDocumentRequest `object`

### GetJobDocumentResponse
* GetJobDocumentResponse `object`
  * document

### GetLoggingOptionsRequest
* GetLoggingOptionsRequest `object`: The input for the GetLoggingOptions operation.

### GetLoggingOptionsResponse
* GetLoggingOptionsResponse `object`: The output from the GetLoggingOptions operation.
  * logLevel
  * roleArn

### GetOTAUpdateRequest
* GetOTAUpdateRequest `object`

### GetOTAUpdateResponse
* GetOTAUpdateResponse `object`
  * otaUpdateInfo
    * additionalParameters
    * awsIotJobArn
    * awsIotJobId
    * awsJobExecutionsRolloutConfig
      * exponentialRate
        * baseRatePerMinute **required**
        * incrementFactor **required**
        * rateIncreaseCriteria **required**
          * numberOfNotifiedThings
          * numberOfSucceededThings
      * maximumPerMinute
    * awsJobPresignedUrlConfig
      * expiresInSec
    * creationDate
    * description
    * errorInfo
      * code
      * message
    * lastModifiedDate
    * otaUpdateArn
    * otaUpdateFiles
      * items [OTAUpdateFile](#otaupdatefile)
    * otaUpdateId
    * otaUpdateStatus
    * protocols
      * items [Protocol](#protocol)
    * targetSelection
    * targets
      * items [Target](#target)

### GetPercentilesRequest
* GetPercentilesRequest `object`
  * aggregationField
  * indexName
  * percents
    * items [Percent](#percent)
  * queryString **required**
  * queryVersion

### GetPercentilesResponse
* GetPercentilesResponse `object`
  * percentiles
    * items [PercentPair](#percentpair)

### GetPolicyRequest
* GetPolicyRequest `object`: The input for the GetPolicy operation.

### GetPolicyResponse
* GetPolicyResponse `object`: The output from the GetPolicy operation.
  * creationDate
  * defaultVersionId
  * generationId
  * lastModifiedDate
  * policyArn
  * policyDocument
  * policyName

### GetPolicyVersionRequest
* GetPolicyVersionRequest `object`: The input for the GetPolicyVersion operation.

### GetPolicyVersionResponse
* GetPolicyVersionResponse `object`: The output from the GetPolicyVersion operation.
  * creationDate
  * generationId
  * isDefaultVersion
  * lastModifiedDate
  * policyArn
  * policyDocument
  * policyName
  * policyVersionId

### GetRegistrationCodeRequest
* GetRegistrationCodeRequest `object`: The input to the GetRegistrationCode operation.

### GetRegistrationCodeResponse
* GetRegistrationCodeResponse `object`: The output from the GetRegistrationCode operation.
  * registrationCode

### GetStatisticsRequest
* GetStatisticsRequest `object`
  * aggregationField
  * indexName
  * queryString **required**
  * queryVersion

### GetStatisticsResponse
* GetStatisticsResponse `object`
  * statistics
    * average
    * count
    * maximum
    * minimum
    * stdDeviation
    * sum
    * sumOfSquares
    * variance

### GetTopicRuleDestinationRequest
* GetTopicRuleDestinationRequest `object`

### GetTopicRuleDestinationResponse
* GetTopicRuleDestinationResponse `object`
  * topicRuleDestination
    * arn
    * createdAt
    * httpUrlProperties
      * confirmationUrl
    * lastUpdatedAt
    * status
    * statusReason
    * vpcProperties
      * roleArn
      * securityGroups
        * items [SecurityGroupId](#securitygroupid)
      * subnetIds
        * items [SubnetId](#subnetid)
      * vpcId

### GetTopicRuleRequest
* GetTopicRuleRequest `object`: The input for the GetTopicRule operation.

### GetTopicRuleResponse
* GetTopicRuleResponse `object`: The output from the GetTopicRule operation.
  * rule
    * actions
      * items [Action](#action)
    * awsIotSqlVersion
    * createdAt
    * description
    * errorAction
      * cloudwatchAlarm
        * alarmName **required**
        * roleArn **required**
        * stateReason **required**
        * stateValue **required**
      * cloudwatchLogs
        * logGroupName **required**
        * roleArn **required**
      * cloudwatchMetric
        * metricName **required**
        * metricNamespace **required**
        * metricTimestamp
        * metricUnit **required**
        * metricValue **required**
        * roleArn **required**
      * dynamoDB
        * hashKeyField **required**
        * hashKeyType
        * hashKeyValue **required**
        * operation
        * payloadField
        * rangeKeyField
        * rangeKeyType
        * rangeKeyValue
        * roleArn **required**
        * tableName **required**
      * dynamoDBv2
        * putItem **required**
          * tableName **required**
        * roleArn **required**
      * elasticsearch
        * endpoint **required**
        * id **required**
        * index **required**
        * roleArn **required**
        * type **required**
      * firehose
        * batchMode
        * deliveryStreamName **required**
        * roleArn **required**
        * separator
      * http
        * auth
          * sigv4
        * confirmationUrl
        * headers
          * items [HttpActionHeader](#httpactionheader)
        * url **required**
      * iotAnalytics
        * batchMode
        * channelArn
        * channelName
        * roleArn
      * iotEvents
        * batchMode
        * inputName **required**
        * messageId
        * roleArn **required**
      * iotSiteWise
        * putAssetPropertyValueEntries **required**
          * items [PutAssetPropertyValueEntry](#putassetpropertyvalueentry)
        * roleArn **required**
      * kafka
        * clientProperties **required**
        * destinationArn **required**
        * key
        * partition
        * topic **required**
      * kinesis
        * partitionKey
        * roleArn **required**
        * streamName **required**
      * lambda
        * functionArn **required**
      * republish
        * qos
        * roleArn **required**
        * topic **required**
      * s3
        * bucketName **required**
        * cannedAcl
        * key **required**
        * roleArn **required**
      * salesforce
        * token **required**
        * url **required**
      * sns
        * messageFormat
        * roleArn **required**
        * targetArn **required**
      * sqs
        * queueUrl **required**
        * roleArn **required**
        * useBase64
      * stepFunctions
        * executionNamePrefix
        * roleArn **required**
        * stateMachineName **required**
      * timestream
        * databaseName **required**
        * dimensions **required**
          * items [TimestreamDimension](#timestreamdimension)
        * roleArn **required**
        * tableName **required**
        * timestamp
          * unit **required**
          * value **required**
    * ruleDisabled
    * ruleName
    * sql
  * ruleArn

### GetV2LoggingOptionsRequest
* GetV2LoggingOptionsRequest `object`

### GetV2LoggingOptionsResponse
* GetV2LoggingOptionsResponse `object`
  * defaultLogLevel
  * disableAllLogs
  * roleArn

### GroupNameAndArn
* GroupNameAndArn `object`: The name and ARN of a group.
  * groupArn
  * groupName

### HashAlgorithm
* HashAlgorithm `string`

### HashKeyField
* HashKeyField `string`

### HashKeyValue
* HashKeyValue `string`

### HeaderKey
* HeaderKey `string`

### HeaderList
* HeaderList `array`
  * items [HttpActionHeader](#httpactionheader)

### HeaderValue
* HeaderValue `string`

### HttpAction
* HttpAction `object`: Send data to an HTTPS endpoint.
  * auth
    * sigv4
      * roleArn **required**
      * serviceName **required**
      * signingRegion **required**
  * confirmationUrl
  * headers
    * items [HttpActionHeader](#httpactionheader)
  * url **required**

### HttpActionHeader
* HttpActionHeader `object`: The HTTP action header.
  * key **required**
  * value **required**

### HttpAuthorization
* HttpAuthorization `object`: The authorization method used to send messages.
  * sigv4
    * roleArn **required**
    * serviceName **required**
    * signingRegion **required**

### HttpContext
* HttpContext `object`: Specifies the HTTP context to use for the test authorizer request.
  * headers
  * queryString

### HttpHeaderName
* HttpHeaderName `string`

### HttpHeaderValue
* HttpHeaderValue `string`

### HttpHeaders
* HttpHeaders `object`

### HttpQueryString
* HttpQueryString `string`

### HttpUrlDestinationConfiguration
* HttpUrlDestinationConfiguration `object`: HTTP URL destination configuration used by the topic rule's HTTP action.
  * confirmationUrl **required**

### HttpUrlDestinationProperties
* HttpUrlDestinationProperties `object`: HTTP URL destination properties.
  * confirmationUrl

### HttpUrlDestinationSummary
* HttpUrlDestinationSummary `object`: Information about an HTTP URL destination.
  * confirmationUrl

### ImplicitDeny
* ImplicitDeny `object`: Information that implicitly denies authorization. When policy doesn't explicitly deny or allow an action on a resource it is considered an implicit deny.
  * policies
    * items [Policy](#policy)

### InProgressChecksCount
* InProgressChecksCount `integer`

### InProgressThings
* InProgressThings `integer`

### InProgressTimeoutInMinutes
* InProgressTimeoutInMinutes `integer`

### IncrementFactor
* IncrementFactor `number`

### IndexName
* IndexName `string`

### IndexNamesList
* IndexNamesList `array`
  * items [IndexName](#indexname)

### IndexNotReadyException


### IndexSchema
* IndexSchema `string`

### IndexStatus
* IndexStatus `string` (values: ACTIVE, BUILDING, REBUILDING)

### InlineDocument
* InlineDocument `string`

### InputName
* InputName `string`

### InternalException


### InternalFailureException


### InvalidAggregationException


### InvalidQueryException


### InvalidRequestException


### InvalidResponseException


### InvalidStateTransitionException


### IotAnalyticsAction
* IotAnalyticsAction `object`: Sends message data to an AWS IoT Analytics channel.
  * batchMode
  * channelArn
  * channelName
  * roleArn

### IotEventsAction
* IotEventsAction `object`: Sends an input to an AWS IoT Events detector.
  * batchMode
  * inputName **required**
  * messageId
  * roleArn **required**

### IotSiteWiseAction
* IotSiteWiseAction `object`: Describes an action to send data from an MQTT message that triggered the rule to AWS IoT SiteWise asset properties.
  * putAssetPropertyValueEntries **required**
    * items [PutAssetPropertyValueEntry](#putassetpropertyvalueentry)
  * roleArn **required**

### IsAuthenticated
* IsAuthenticated `boolean`

### IsDefaultVersion
* IsDefaultVersion `boolean`

### IsDisabled
* IsDisabled `boolean`

### IsSuppressed
* IsSuppressed `boolean`

### Job
* Job `object`: The <code>Job</code> object contains details about a job.
  * abortConfig
    * criteriaList **required**
      * items [AbortCriteria](#abortcriteria)
  * comment
  * completedAt
  * createdAt
  * description
  * forceCanceled
  * jobArn
  * jobExecutionsRolloutConfig
    * exponentialRate
      * baseRatePerMinute **required**
      * incrementFactor **required**
      * rateIncreaseCriteria **required**
        * numberOfNotifiedThings
        * numberOfSucceededThings
    * maximumPerMinute
  * jobId
  * jobProcessDetails
    * numberOfCanceledThings
    * numberOfFailedThings
    * numberOfInProgressThings
    * numberOfQueuedThings
    * numberOfRejectedThings
    * numberOfRemovedThings
    * numberOfSucceededThings
    * numberOfTimedOutThings
    * processingTargets
      * items [ProcessingTargetName](#processingtargetname)
  * lastUpdatedAt
  * namespaceId
  * presignedUrlConfig
    * expiresInSec
    * roleArn
  * reasonCode
  * status
  * targetSelection
  * targets
    * items [TargetArn](#targetarn)
  * timeoutConfig
    * inProgressTimeoutInMinutes

### JobArn
* JobArn `string`

### JobDescription
* JobDescription `string`

### JobDocument
* JobDocument `string`

### JobDocumentSource
* JobDocumentSource `string`

### JobExecution
* JobExecution `object`: The job execution object represents the execution of a job on a particular device.
  * approximateSecondsBeforeTimedOut
  * executionNumber
  * forceCanceled
  * jobId
  * lastUpdatedAt
  * queuedAt
  * startedAt
  * status
  * statusDetails
    * detailsMap
  * thingArn
  * versionNumber

### JobExecutionFailureType
* JobExecutionFailureType `string` (values: FAILED, REJECTED, TIMED_OUT, ALL)

### JobExecutionStatus
* JobExecutionStatus `string` (values: QUEUED, IN_PROGRESS, SUCCEEDED, FAILED, TIMED_OUT, REJECTED, REMOVED, CANCELED)

### JobExecutionStatusDetails
* JobExecutionStatusDetails `object`: Details of the job execution status.
  * detailsMap

### JobExecutionSummary
* JobExecutionSummary `object`: The job execution summary.
  * executionNumber
  * lastUpdatedAt
  * queuedAt
  * startedAt
  * status

### JobExecutionSummaryForJob
* JobExecutionSummaryForJob `object`: Contains a summary of information about job executions for a specific job.
  * jobExecutionSummary
    * executionNumber
    * lastUpdatedAt
    * queuedAt
    * startedAt
    * status
  * thingArn

### JobExecutionSummaryForJobList
* JobExecutionSummaryForJobList `array`
  * items [JobExecutionSummaryForJob](#jobexecutionsummaryforjob)

### JobExecutionSummaryForThing
* JobExecutionSummaryForThing `object`: The job execution summary for a thing.
  * jobExecutionSummary
    * executionNumber
    * lastUpdatedAt
    * queuedAt
    * startedAt
    * status
  * jobId

### JobExecutionSummaryForThingList
* JobExecutionSummaryForThingList `array`
  * items [JobExecutionSummaryForThing](#jobexecutionsummaryforthing)

### JobExecutionsRolloutConfig
* JobExecutionsRolloutConfig `object`: Allows you to create a staged rollout of a job.
  * exponentialRate
    * baseRatePerMinute **required**
    * incrementFactor **required**
    * rateIncreaseCriteria **required**
      * numberOfNotifiedThings
      * numberOfSucceededThings
  * maximumPerMinute

### JobId
* JobId `string`

### JobProcessDetails
* JobProcessDetails `object`: The job process details.
  * numberOfCanceledThings
  * numberOfFailedThings
  * numberOfInProgressThings
  * numberOfQueuedThings
  * numberOfRejectedThings
  * numberOfRemovedThings
  * numberOfSucceededThings
  * numberOfTimedOutThings
  * processingTargets
    * items [ProcessingTargetName](#processingtargetname)

### JobStatus
* JobStatus `string` (values: IN_PROGRESS, CANCELED, COMPLETED, DELETION_IN_PROGRESS)

### JobSummary
* JobSummary `object`: The job summary.
  * completedAt
  * createdAt
  * jobArn
  * jobId
  * lastUpdatedAt
  * status
  * targetSelection
  * thingGroupId

### JobSummaryList
* JobSummaryList `array`
  * items [JobSummary](#jobsummary)

### JobTargets
* JobTargets `array`
  * items [TargetArn](#targetarn)

### JsonDocument
* JsonDocument `string`

### KafkaAction
* KafkaAction `object`: Send messages to an Amazon Managed Streaming for Apache Kafka (Amazon MSK) or self-managed Apache Kafka cluster.
  * clientProperties **required**
  * destinationArn **required**
  * key
  * partition
  * topic **required**

### Key
* Key `string`

### KeyName
* KeyName `string`

### KeyPair
* KeyPair `object`: Describes a key pair.
  * PrivateKey
  * PublicKey

### KeyValue
* KeyValue `string`

### KinesisAction
* KinesisAction `object`: Describes an action to write data to an Amazon Kinesis stream.
  * partitionKey
  * roleArn **required**
  * streamName **required**

### LambdaAction
* LambdaAction `object`: Describes an action to invoke a Lambda function.
  * functionArn **required**

### LaserMaxResults
* LaserMaxResults `integer`

### LastModifiedDate
* LastModifiedDate `string`

### LastUpdatedAtDate
* LastUpdatedAtDate `string`

### LimitExceededException


### ListActiveViolationsRequest
* ListActiveViolationsRequest `object`

### ListActiveViolationsResponse
* ListActiveViolationsResponse `object`
  * activeViolations
    * items [ActiveViolation](#activeviolation)
  * nextToken

### ListAttachedPoliciesRequest
* ListAttachedPoliciesRequest `object`

### ListAttachedPoliciesResponse
* ListAttachedPoliciesResponse `object`
  * nextMarker
  * policies
    * items [Policy](#policy)

### ListAuditFindingsRequest
* ListAuditFindingsRequest `object`
  * checkName
  * endTime
  * listSuppressedFindings
  * maxResults
  * nextToken
  * resourceIdentifier
    * account
    * caCertificateId
    * clientId
    * cognitoIdentityPoolId
    * deviceCertificateId
    * iamRoleArn
    * policyVersionIdentifier
      * policyName
      * policyVersionId
    * roleAliasArn
  * startTime
  * taskId

### ListAuditFindingsResponse
* ListAuditFindingsResponse `object`
  * findings
    * items [AuditFinding](#auditfinding)
  * nextToken

### ListAuditMitigationActionsExecutionsRequest
* ListAuditMitigationActionsExecutionsRequest `object`

### ListAuditMitigationActionsExecutionsResponse
* ListAuditMitigationActionsExecutionsResponse `object`
  * actionsExecutions
    * items [AuditMitigationActionExecutionMetadata](#auditmitigationactionexecutionmetadata)
  * nextToken

### ListAuditMitigationActionsTasksRequest
* ListAuditMitigationActionsTasksRequest `object`

### ListAuditMitigationActionsTasksResponse
* ListAuditMitigationActionsTasksResponse `object`
  * nextToken
  * tasks
    * items [AuditMitigationActionsTaskMetadata](#auditmitigationactionstaskmetadata)

### ListAuditSuppressionsRequest
* ListAuditSuppressionsRequest `object`
  * ascendingOrder
  * checkName [AuditCheckName](#auditcheckname)
  * maxResults
  * nextToken
  * resourceIdentifier [ResourceIdentifier](#resourceidentifier)

### ListAuditSuppressionsResponse
* ListAuditSuppressionsResponse `object`
  * nextToken
  * suppressions
    * items [AuditSuppression](#auditsuppression)

### ListAuditTasksRequest
* ListAuditTasksRequest `object`

### ListAuditTasksResponse
* ListAuditTasksResponse `object`
  * nextToken
  * tasks
    * items [AuditTaskMetadata](#audittaskmetadata)

### ListAuthorizersRequest
* ListAuthorizersRequest `object`

### ListAuthorizersResponse
* ListAuthorizersResponse `object`
  * authorizers
    * items [AuthorizerSummary](#authorizersummary)
  * nextMarker

### ListBillingGroupsRequest
* ListBillingGroupsRequest `object`

### ListBillingGroupsResponse
* ListBillingGroupsResponse `object`
  * billingGroups
    * items [GroupNameAndArn](#groupnameandarn)
  * nextToken

### ListCACertificatesRequest
* ListCACertificatesRequest `object`: Input for the ListCACertificates operation.

### ListCACertificatesResponse
* ListCACertificatesResponse `object`: The output from the ListCACertificates operation.
  * certificates
    * items [CACertificate](#cacertificate)
  * nextMarker

### ListCertificatesByCARequest
* ListCertificatesByCARequest `object`: The input to the ListCertificatesByCA operation.

### ListCertificatesByCAResponse
* ListCertificatesByCAResponse `object`: The output of the ListCertificatesByCA operation.
  * certificates
    * items [Certificate](#certificate)
  * nextMarker

### ListCertificatesRequest
* ListCertificatesRequest `object`: The input for the ListCertificates operation.

### ListCertificatesResponse
* ListCertificatesResponse `object`: The output of the ListCertificates operation.
  * certificates
    * items [Certificate](#certificate)
  * nextMarker

### ListCustomMetricsRequest
* ListCustomMetricsRequest `object`

### ListCustomMetricsResponse
* ListCustomMetricsResponse `object`
  * metricNames
    * items [MetricName](#metricname)
  * nextToken

### ListDetectMitigationActionsExecutionsRequest
* ListDetectMitigationActionsExecutionsRequest `object`

### ListDetectMitigationActionsExecutionsResponse
* ListDetectMitigationActionsExecutionsResponse `object`
  * actionsExecutions
    * items [DetectMitigationActionExecution](#detectmitigationactionexecution)
  * nextToken

### ListDetectMitigationActionsTasksRequest
* ListDetectMitigationActionsTasksRequest `object`

### ListDetectMitigationActionsTasksResponse
* ListDetectMitigationActionsTasksResponse `object`
  * nextToken
  * tasks
    * items [DetectMitigationActionsTaskSummary](#detectmitigationactionstasksummary)

### ListDimensionsRequest
* ListDimensionsRequest `object`

### ListDimensionsResponse
* ListDimensionsResponse `object`
  * dimensionNames
    * items [DimensionName](#dimensionname)
  * nextToken

### ListDomainConfigurationsRequest
* ListDomainConfigurationsRequest `object`

### ListDomainConfigurationsResponse
* ListDomainConfigurationsResponse `object`
  * domainConfigurations
    * items [DomainConfigurationSummary](#domainconfigurationsummary)
  * nextMarker

### ListIndicesRequest
* ListIndicesRequest `object`

### ListIndicesResponse
* ListIndicesResponse `object`
  * indexNames
    * items [IndexName](#indexname)
  * nextToken

### ListJobExecutionsForJobRequest
* ListJobExecutionsForJobRequest `object`

### ListJobExecutionsForJobResponse
* ListJobExecutionsForJobResponse `object`
  * executionSummaries
    * items [JobExecutionSummaryForJob](#jobexecutionsummaryforjob)
  * nextToken

### ListJobExecutionsForThingRequest
* ListJobExecutionsForThingRequest `object`

### ListJobExecutionsForThingResponse
* ListJobExecutionsForThingResponse `object`
  * executionSummaries
    * items [JobExecutionSummaryForThing](#jobexecutionsummaryforthing)
  * nextToken

### ListJobsRequest
* ListJobsRequest `object`

### ListJobsResponse
* ListJobsResponse `object`
  * jobs
    * items [JobSummary](#jobsummary)
  * nextToken

### ListMitigationActionsRequest
* ListMitigationActionsRequest `object`

### ListMitigationActionsResponse
* ListMitigationActionsResponse `object`
  * actionIdentifiers
    * items [MitigationActionIdentifier](#mitigationactionidentifier)
  * nextToken

### ListOTAUpdatesRequest
* ListOTAUpdatesRequest `object`

### ListOTAUpdatesResponse
* ListOTAUpdatesResponse `object`
  * nextToken
  * otaUpdates
    * items [OTAUpdateSummary](#otaupdatesummary)

### ListOutgoingCertificatesRequest
* ListOutgoingCertificatesRequest `object`: The input to the ListOutgoingCertificates operation.

### ListOutgoingCertificatesResponse
* ListOutgoingCertificatesResponse `object`: The output from the ListOutgoingCertificates operation.
  * nextMarker
  * outgoingCertificates
    * items [OutgoingCertificate](#outgoingcertificate)

### ListPoliciesRequest
* ListPoliciesRequest `object`: The input for the ListPolicies operation.

### ListPoliciesResponse
* ListPoliciesResponse `object`: The output from the ListPolicies operation.
  * nextMarker
  * policies
    * items [Policy](#policy)

### ListPolicyPrincipalsRequest
* ListPolicyPrincipalsRequest `object`: The input for the ListPolicyPrincipals operation.

### ListPolicyPrincipalsResponse
* ListPolicyPrincipalsResponse `object`: The output from the ListPolicyPrincipals operation.
  * nextMarker
  * principals
    * items [PrincipalArn](#principalarn)

### ListPolicyVersionsRequest
* ListPolicyVersionsRequest `object`: The input for the ListPolicyVersions operation.

### ListPolicyVersionsResponse
* ListPolicyVersionsResponse `object`: The output from the ListPolicyVersions operation.
  * policyVersions
    * items [PolicyVersion](#policyversion)

### ListPrincipalPoliciesRequest
* ListPrincipalPoliciesRequest `object`: The input for the ListPrincipalPolicies operation.

### ListPrincipalPoliciesResponse
* ListPrincipalPoliciesResponse `object`: The output from the ListPrincipalPolicies operation.
  * nextMarker
  * policies
    * items [Policy](#policy)

### ListPrincipalThingsRequest
* ListPrincipalThingsRequest `object`: The input for the ListPrincipalThings operation.

### ListPrincipalThingsResponse
* ListPrincipalThingsResponse `object`: The output from the ListPrincipalThings operation.
  * nextToken
  * things
    * items [ThingName](#thingname)

### ListProvisioningTemplateVersionsRequest
* ListProvisioningTemplateVersionsRequest `object`

### ListProvisioningTemplateVersionsResponse
* ListProvisioningTemplateVersionsResponse `object`
  * nextToken
  * versions
    * items [ProvisioningTemplateVersionSummary](#provisioningtemplateversionsummary)

### ListProvisioningTemplatesRequest
* ListProvisioningTemplatesRequest `object`

### ListProvisioningTemplatesResponse
* ListProvisioningTemplatesResponse `object`
  * nextToken
  * templates
    * items [ProvisioningTemplateSummary](#provisioningtemplatesummary)

### ListRoleAliasesRequest
* ListRoleAliasesRequest `object`

### ListRoleAliasesResponse
* ListRoleAliasesResponse `object`
  * nextMarker
  * roleAliases
    * items [RoleAlias](#rolealias)

### ListScheduledAuditsRequest
* ListScheduledAuditsRequest `object`

### ListScheduledAuditsResponse
* ListScheduledAuditsResponse `object`
  * nextToken
  * scheduledAudits
    * items [ScheduledAuditMetadata](#scheduledauditmetadata)

### ListSecurityProfilesForTargetRequest
* ListSecurityProfilesForTargetRequest `object`

### ListSecurityProfilesForTargetResponse
* ListSecurityProfilesForTargetResponse `object`
  * nextToken
  * securityProfileTargetMappings
    * items [SecurityProfileTargetMapping](#securityprofiletargetmapping)

### ListSecurityProfilesRequest
* ListSecurityProfilesRequest `object`

### ListSecurityProfilesResponse
* ListSecurityProfilesResponse `object`
  * nextToken
  * securityProfileIdentifiers
    * items [SecurityProfileIdentifier](#securityprofileidentifier)

### ListStreamsRequest
* ListStreamsRequest `object`

### ListStreamsResponse
* ListStreamsResponse `object`
  * nextToken
  * streams
    * items [StreamSummary](#streamsummary)

### ListSuppressedAlerts
* ListSuppressedAlerts `boolean`

### ListSuppressedFindings
* ListSuppressedFindings `boolean`

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`
  * tags
    * items [Tag](#tag)
  * nextToken

### ListTargetsForPolicyRequest
* ListTargetsForPolicyRequest `object`

### ListTargetsForPolicyResponse
* ListTargetsForPolicyResponse `object`
  * nextMarker
  * targets
    * items [PolicyTarget](#policytarget)

### ListTargetsForSecurityProfileRequest
* ListTargetsForSecurityProfileRequest `object`

### ListTargetsForSecurityProfileResponse
* ListTargetsForSecurityProfileResponse `object`
  * nextToken
  * securityProfileTargets
    * items [SecurityProfileTarget](#securityprofiletarget)

### ListThingGroupsForThingRequest
* ListThingGroupsForThingRequest `object`

### ListThingGroupsForThingResponse
* ListThingGroupsForThingResponse `object`
  * nextToken
  * thingGroups
    * items [GroupNameAndArn](#groupnameandarn)

### ListThingGroupsRequest
* ListThingGroupsRequest `object`

### ListThingGroupsResponse
* ListThingGroupsResponse `object`
  * nextToken
  * thingGroups
    * items [GroupNameAndArn](#groupnameandarn)

### ListThingPrincipalsRequest
* ListThingPrincipalsRequest `object`: The input for the ListThingPrincipal operation.

### ListThingPrincipalsResponse
* ListThingPrincipalsResponse `object`: The output from the ListThingPrincipals operation.
  * nextToken
  * principals
    * items [PrincipalArn](#principalarn)

### ListThingRegistrationTaskReportsRequest
* ListThingRegistrationTaskReportsRequest `object`

### ListThingRegistrationTaskReportsResponse
* ListThingRegistrationTaskReportsResponse `object`
  * nextToken
  * reportType
  * resourceLinks
    * items [S3FileUrl](#s3fileurl)

### ListThingRegistrationTasksRequest
* ListThingRegistrationTasksRequest `object`

### ListThingRegistrationTasksResponse
* ListThingRegistrationTasksResponse `object`
  * nextToken
  * taskIds
    * items [TaskId](#taskid)

### ListThingTypesRequest
* ListThingTypesRequest `object`: The input for the ListThingTypes operation.

### ListThingTypesResponse
* ListThingTypesResponse `object`: The output for the ListThingTypes operation.
  * nextToken
  * thingTypes
    * items [ThingTypeDefinition](#thingtypedefinition)

### ListThingsInBillingGroupRequest
* ListThingsInBillingGroupRequest `object`

### ListThingsInBillingGroupResponse
* ListThingsInBillingGroupResponse `object`
  * nextToken
  * things
    * items [ThingName](#thingname)

### ListThingsInThingGroupRequest
* ListThingsInThingGroupRequest `object`

### ListThingsInThingGroupResponse
* ListThingsInThingGroupResponse `object`
  * nextToken
  * things
    * items [ThingName](#thingname)

### ListThingsRequest
* ListThingsRequest `object`: The input for the ListThings operation.

### ListThingsResponse
* ListThingsResponse `object`: The output from the ListThings operation.
  * nextToken
  * things
    * items [ThingAttribute](#thingattribute)

### ListTopicRuleDestinationsRequest
* ListTopicRuleDestinationsRequest `object`

### ListTopicRuleDestinationsResponse
* ListTopicRuleDestinationsResponse `object`
  * destinationSummaries
    * items [TopicRuleDestinationSummary](#topicruledestinationsummary)
  * nextToken

### ListTopicRulesRequest
* ListTopicRulesRequest `object`: The input for the ListTopicRules operation.

### ListTopicRulesResponse
* ListTopicRulesResponse `object`: The output from the ListTopicRules operation.
  * nextToken
  * rules
    * items [TopicRuleListItem](#topicrulelistitem)

### ListV2LoggingLevelsRequest
* ListV2LoggingLevelsRequest `object`

### ListV2LoggingLevelsResponse
* ListV2LoggingLevelsResponse `object`
  * logTargetConfigurations
    * items [LogTargetConfiguration](#logtargetconfiguration)
  * nextToken

### ListViolationEventsRequest
* ListViolationEventsRequest `object`

### ListViolationEventsResponse
* ListViolationEventsResponse `object`
  * nextToken
  * violationEvents
    * items [ViolationEvent](#violationevent)

### LogGroupName
* LogGroupName `string`

### LogLevel
* LogLevel `string` (values: DEBUG, INFO, ERROR, WARN, DISABLED)

### LogTarget
* LogTarget `object`: A log target.
  * targetName
  * targetType **required**

### LogTargetConfiguration
* LogTargetConfiguration `object`: The target configuration.
  * logLevel
  * logTarget
    * targetName
    * targetType **required**

### LogTargetConfigurations
* LogTargetConfigurations `array`
  * items [LogTargetConfiguration](#logtargetconfiguration)

### LogTargetName
* LogTargetName `string`

### LogTargetType
* LogTargetType `string` (values: DEFAULT, THING_GROUP)

### LoggingOptionsPayload
* LoggingOptionsPayload `object`: Describes the logging options payload.
  * logLevel
  * roleArn **required**

### MachineLearningDetectionConfig
* MachineLearningDetectionConfig `object`:  The configuration of an ML Detect Security Profile. 
  * confidenceLevel **required**

### MalformedPolicyException


### Marker
* Marker `string`

### MaxJobExecutionsPerMin
* MaxJobExecutionsPerMin `integer`

### MaxResults
* MaxResults `integer`

### Maximum
* Maximum `number`

### MaximumPerMinute
* MaximumPerMinute `integer`

### Message
* Message `string`

### MessageFormat
* MessageFormat `string` (values: RAW, JSON)

### MessageId
* MessageId `string`

### MetricDimension
* MetricDimension `object`: The dimension of a metric.
  * dimensionName **required**
  * operator

### MetricName
* MetricName `string`

### MetricNames
* MetricNames `array`
  * items [MetricName](#metricname)

### MetricToRetain
* MetricToRetain `object`: The metric you want to retain. Dimensions are optional.
  * metric **required**
  * metricDimension
    * dimensionName **required**
    * operator

### MetricValue
* MetricValue `object`: The value to be compared with the <code>metric</code>.
  * cidrs
    * items [Cidr](#cidr)
  * count
  * number
  * numbers
    * items [Number](#number)
  * ports
    * items [Port](#port)
  * strings
    * items [stringValue](#stringvalue)

### Minimum
* Minimum `number`

### MinimumNumberOfExecutedThings
* MinimumNumberOfExecutedThings `integer`

### MissingContextValue
* MissingContextValue `string`

### MissingContextValues
* MissingContextValues `array`
  * items [MissingContextValue](#missingcontextvalue)

### MitigationAction
* MitigationAction `object`: Describes which changes should be applied as part of a mitigation action.
  * actionParams
    * addThingsToThingGroupParams
      * overrideDynamicGroups
      * thingGroupNames **required**
        * items [ThingGroupName](#thinggroupname)
    * enableIoTLoggingParams
      * logLevel **required**
      * roleArnForLogging **required**
    * publishFindingToSnsParams
      * topicArn **required**
    * replaceDefaultPolicyVersionParams
      * templateName **required**
    * updateCACertificateParams
      * action **required**
    * updateDeviceCertificateParams
      * action **required**
  * id
  * name
  * roleArn

### MitigationActionArn
* MitigationActionArn `string`

### MitigationActionId
* MitigationActionId `string`

### MitigationActionIdentifier
* MitigationActionIdentifier `object`: Information that identifies a mitigation action. This information is returned by ListMitigationActions.
  * actionArn
  * actionName
  * creationDate

### MitigationActionIdentifierList
* MitigationActionIdentifierList `array`
  * items [MitigationActionIdentifier](#mitigationactionidentifier)

### MitigationActionList
* MitigationActionList `array`
  * items [MitigationAction](#mitigationaction)

### MitigationActionName
* MitigationActionName `string`

### MitigationActionNameList
* MitigationActionNameList `array`
  * items [MitigationActionName](#mitigationactionname)

### MitigationActionParams
* MitigationActionParams `object`: The set of parameters for this mitigation action. You can specify only one type of parameter (in other words, you can apply only one action for each defined mitigation action).
  * addThingsToThingGroupParams
    * overrideDynamicGroups
    * thingGroupNames **required**
      * items [ThingGroupName](#thinggroupname)
  * enableIoTLoggingParams
    * logLevel **required**
    * roleArnForLogging **required**
  * publishFindingToSnsParams
    * topicArn **required**
  * replaceDefaultPolicyVersionParams
    * templateName **required**
  * updateCACertificateParams
    * action **required**
  * updateDeviceCertificateParams
    * action **required**

### MitigationActionType
* MitigationActionType `string` (values: UPDATE_DEVICE_CERTIFICATE, UPDATE_CA_CERTIFICATE, ADD_THINGS_TO_THING_GROUP, REPLACE_DEFAULT_POLICY_VERSION, ENABLE_IOT_LOGGING, PUBLISH_FINDING_TO_SNS)

### MitigationActionsTaskId
* MitigationActionsTaskId `string`

### ModelStatus
* ModelStatus `string` (values: PENDING_BUILD, ACTIVE, EXPIRED)

### MqttClientId
* MqttClientId `string`

### MqttContext
* MqttContext `object`: Specifies the MQTT context to use for the test authorizer request
  * clientId
  * password
  * username

### MqttPassword
* MqttPassword `string`

### MqttUsername
* MqttUsername `string`

### NamespaceId
* NamespaceId `string`

### NextToken
* NextToken `string`

### NonCompliantChecksCount
* NonCompliantChecksCount `integer`

### NonCompliantResource
* NonCompliantResource `object`: Information about the resource that was noncompliant with the audit check.
  * additionalInfo
  * resourceIdentifier
    * account
    * caCertificateId
    * clientId
    * cognitoIdentityPoolId
    * deviceCertificateId
    * iamRoleArn
    * policyVersionIdentifier
      * policyName
      * policyVersionId
    * roleAliasArn
  * resourceType

### NonCompliantResourcesCount
* NonCompliantResourcesCount `integer`

### NotConfiguredException


### NullableBoolean
* NullableBoolean `boolean`

### Number
* Number `number`

### NumberList
* NumberList `array`
  * items [Number](#number)

### NumberOfThings
* NumberOfThings `integer`

### OTAUpdateArn
* OTAUpdateArn `string`

### OTAUpdateDescription
* OTAUpdateDescription `string`

### OTAUpdateErrorMessage
* OTAUpdateErrorMessage `string`

### OTAUpdateFile
* OTAUpdateFile `object`: Describes a file to be associated with an OTA update.
  * attributes
  * codeSigning
    * awsSignerJobId
    * customCodeSigning
      * certificateChain
        * certificateName
        * inlineDocument
      * hashAlgorithm
      * signature
        * inlineDocument
      * signatureAlgorithm
    * startSigningJobParameter
      * destination
        * s3Destination
          * bucket
          * prefix
      * signingProfileName
      * signingProfileParameter
        * certificateArn
        * certificatePathOnDevice
        * platform
  * fileLocation
    * s3Location
      * bucket
      * key
      * version
    * stream
      * fileId
      * streamId
  * fileName
  * fileType
  * fileVersion

### OTAUpdateFileVersion
* OTAUpdateFileVersion `string`

### OTAUpdateFiles
* OTAUpdateFiles `array`
  * items [OTAUpdateFile](#otaupdatefile)

### OTAUpdateId
* OTAUpdateId `string`

### OTAUpdateInfo
* OTAUpdateInfo `object`: Information about an OTA update.
  * additionalParameters
  * awsIotJobArn
  * awsIotJobId
  * awsJobExecutionsRolloutConfig
    * exponentialRate
      * baseRatePerMinute **required**
      * incrementFactor **required**
      * rateIncreaseCriteria **required**
        * numberOfNotifiedThings
        * numberOfSucceededThings
    * maximumPerMinute
  * awsJobPresignedUrlConfig
    * expiresInSec
  * creationDate
  * description
  * errorInfo
    * code
    * message
  * lastModifiedDate
  * otaUpdateArn
  * otaUpdateFiles
    * items [OTAUpdateFile](#otaupdatefile)
  * otaUpdateId
  * otaUpdateStatus
  * protocols
    * items [Protocol](#protocol)
  * targetSelection
  * targets
    * items [Target](#target)

### OTAUpdateStatus
* OTAUpdateStatus `string` (values: CREATE_PENDING, CREATE_IN_PROGRESS, CREATE_COMPLETE, CREATE_FAILED)

### OTAUpdateSummary
* OTAUpdateSummary `object`: An OTA update summary.
  * creationDate
  * otaUpdateArn
  * otaUpdateId

### OTAUpdatesSummary
* OTAUpdatesSummary `array`
  * items [OTAUpdateSummary](#otaupdatesummary)

### OptionalVersion
* OptionalVersion `integer`

### OutgoingCertificate
* OutgoingCertificate `object`: A certificate that has been transferred but not yet accepted.
  * certificateArn
  * certificateId
  * creationDate
  * transferDate
  * transferMessage
  * transferredTo

### OutgoingCertificates
* OutgoingCertificates `array`
  * items [OutgoingCertificate](#outgoingcertificate)

### OverrideDynamicGroups
* OverrideDynamicGroups `boolean`

### PageSize
* PageSize `integer`

### Parameter
* Parameter `string`

### Parameters
* Parameters `object`

### PartitionKey
* PartitionKey `string`

### PayloadField
* PayloadField `string`

### PayloadVersion
* PayloadVersion `string`

### Percent
* Percent `number`

### PercentList
* PercentList `array`
  * items [Percent](#percent)

### PercentPair
* PercentPair `object`: Describes the percentile and percentile value.
  * percent
  * value

### PercentValue
* PercentValue `number`

### Percentage
* Percentage `integer`

### Percentiles
* Percentiles `array`
  * items [PercentPair](#percentpair)

### Platform
* Platform `string`

### Policies
* Policies `array`
  * items [Policy](#policy)

### Policy
* Policy `object`: Describes an AWS IoT policy.
  * policyArn
  * policyName

### PolicyArn
* PolicyArn `string`

### PolicyDocument
* PolicyDocument `string`

### PolicyDocuments
* PolicyDocuments `array`
  * items [PolicyDocument](#policydocument)

### PolicyName
* PolicyName `string`

### PolicyNames
* PolicyNames `array`
  * items [PolicyName](#policyname)

### PolicyTarget
* PolicyTarget `string`

### PolicyTargets
* PolicyTargets `array`
  * items [PolicyTarget](#policytarget)

### PolicyTemplateName
* PolicyTemplateName `string` (values: BLANK_POLICY)

### PolicyVersion
* PolicyVersion `object`: Describes a policy version.
  * createDate
  * isDefaultVersion
  * versionId

### PolicyVersionId
* PolicyVersionId `string`

### PolicyVersionIdentifier
* PolicyVersionIdentifier `object`: Information about the version of the policy associated with the resource.
  * policyName
  * policyVersionId

### PolicyVersions
* PolicyVersions `array`
  * items [PolicyVersion](#policyversion)

### Port
* Port `integer`

### Ports
* Ports `array`
  * items [Port](#port)

### Prefix
* Prefix `string`

### PresignedUrlConfig
* PresignedUrlConfig `object`: Configuration for pre-signed S3 URLs.
  * expiresInSec
  * roleArn

### PrimitiveBoolean
* PrimitiveBoolean `boolean`

### Principal
* Principal `string`

### PrincipalArn
* PrincipalArn `string`

### PrincipalId
* PrincipalId `string`

### Principals
* Principals `array`
  * items [PrincipalArn](#principalarn)

### PrivateKey
* PrivateKey `string`

### ProcessingTargetName
* ProcessingTargetName `string`

### ProcessingTargetNameList
* ProcessingTargetNameList `array`
  * items [ProcessingTargetName](#processingtargetname)

### Protocol
* Protocol `string` (values: MQTT, HTTP)

### Protocols
* Protocols `array`
  * items [Protocol](#protocol)

### ProvisioningHook
* ProvisioningHook `object`: Structure that contains <code>payloadVersion</code> and <code>targetArn</code>.
  * payloadVersion
  * targetArn **required**

### ProvisioningTemplateListing
* ProvisioningTemplateListing `array`
  * items [ProvisioningTemplateSummary](#provisioningtemplatesummary)

### ProvisioningTemplateSummary
* ProvisioningTemplateSummary `object`: A summary of information about a fleet provisioning template.
  * creationDate
  * description
  * enabled
  * lastModifiedDate
  * templateArn
  * templateName

### ProvisioningTemplateVersionListing
* ProvisioningTemplateVersionListing `array`
  * items [ProvisioningTemplateVersionSummary](#provisioningtemplateversionsummary)

### ProvisioningTemplateVersionSummary
* ProvisioningTemplateVersionSummary `object`: A summary of information about a fleet provision template version.
  * creationDate
  * isDefaultVersion
  * versionId

### PublicKey
* PublicKey `string`

### PublicKeyMap
* PublicKeyMap `object`

### PublishFindingToSnsParams
* PublishFindingToSnsParams `object`: Parameters to define a mitigation action that publishes findings to Amazon SNS. You can implement your own custom actions in response to the Amazon SNS messages.
  * topicArn **required**

### PutAssetPropertyValueEntry
* PutAssetPropertyValueEntry `object`: An asset property value entry containing the following information.
  * assetId
  * entryId
  * propertyAlias
  * propertyId
  * propertyValues **required**
    * items [AssetPropertyValue](#assetpropertyvalue)

### PutAssetPropertyValueEntryList
* PutAssetPropertyValueEntryList `array`
  * items [PutAssetPropertyValueEntry](#putassetpropertyvalueentry)

### PutItemInput
* PutItemInput `object`: The input for the DynamoActionVS action that specifies the DynamoDB table to which the message data will be written.
  * tableName **required**

### Qos
* Qos `integer`

### QueryMaxResults
* QueryMaxResults `integer`

### QueryString
* QueryString `string`

### QueryVersion
* QueryVersion `string`

### QueueUrl
* QueueUrl `string`

### QueuedThings
* QueuedThings `integer`

### RangeKeyField
* RangeKeyField `string`

### RangeKeyValue
* RangeKeyValue `string`

### RateIncreaseCriteria
* RateIncreaseCriteria `object`: Allows you to define a criteria to initiate the increase in rate of rollout for a job.
  * numberOfNotifiedThings
  * numberOfSucceededThings

### ReasonCode
* ReasonCode `string`

### ReasonForNonCompliance
* ReasonForNonCompliance `string`

### ReasonForNonComplianceCode
* ReasonForNonComplianceCode `string`

### ReasonForNonComplianceCodes
* ReasonForNonComplianceCodes `array`
  * items [ReasonForNonComplianceCode](#reasonfornoncompliancecode)

### Recursive
* Recursive `boolean`

### RecursiveWithoutDefault
* RecursiveWithoutDefault `boolean`

### RegisterCACertificateRequest
* RegisterCACertificateRequest `object`: The input to the RegisterCACertificate operation.
  * tags
    * items [Tag](#tag)
  * caCertificate **required**
  * registrationConfig
    * roleArn
    * templateBody
  * verificationCertificate **required**

### RegisterCACertificateResponse
* RegisterCACertificateResponse `object`: The output from the RegisterCACertificateResponse operation.
  * certificateArn
  * certificateId

### RegisterCertificateRequest
* RegisterCertificateRequest `object`: The input to the RegisterCertificate operation.
  * caCertificatePem
  * certificatePem **required**
  * status

### RegisterCertificateResponse
* RegisterCertificateResponse `object`: The output from the RegisterCertificate operation.
  * certificateArn
  * certificateId

### RegisterCertificateWithoutCARequest
* RegisterCertificateWithoutCARequest `object`
  * certificatePem **required**
  * status

### RegisterCertificateWithoutCAResponse
* RegisterCertificateWithoutCAResponse `object`
  * certificateArn
  * certificateId

### RegisterThingRequest
* RegisterThingRequest `object`
  * parameters
  * templateBody **required**

### RegisterThingResponse
* RegisterThingResponse `object`
  * certificatePem
  * resourceArns

### RegistrationCode
* RegistrationCode `string`

### RegistrationCodeValidationException


### RegistrationConfig
* RegistrationConfig `object`: The registration configuration.
  * roleArn
  * templateBody

### RegistryMaxResults
* RegistryMaxResults `integer`

### RegistryS3BucketName
* RegistryS3BucketName `string`

### RegistryS3KeyName
* RegistryS3KeyName `string`

### RejectCertificateTransferRequest
* RejectCertificateTransferRequest `object`: The input for the RejectCertificateTransfer operation.
  * rejectReason

### RejectedThings
* RejectedThings `integer`

### RelatedResource
* RelatedResource `object`: Information about a related resource.
  * additionalInfo
  * resourceIdentifier
    * account
    * caCertificateId
    * clientId
    * cognitoIdentityPoolId
    * deviceCertificateId
    * iamRoleArn
    * policyVersionIdentifier
      * policyName
      * policyVersionId
    * roleAliasArn
  * resourceType

### RelatedResources
* RelatedResources `array`
  * items [RelatedResource](#relatedresource)

### RemoveAuthorizerConfig
* RemoveAuthorizerConfig `boolean`

### RemoveAutoRegistration
* RemoveAutoRegistration `boolean`

### RemoveHook
* RemoveHook `boolean`

### RemoveThingFromBillingGroupRequest
* RemoveThingFromBillingGroupRequest `object`
  * billingGroupArn
  * billingGroupName
  * thingArn
  * thingName

### RemoveThingFromBillingGroupResponse
* RemoveThingFromBillingGroupResponse `object`

### RemoveThingFromThingGroupRequest
* RemoveThingFromThingGroupRequest `object`
  * thingArn
  * thingGroupArn
  * thingGroupName
  * thingName

### RemoveThingFromThingGroupResponse
* RemoveThingFromThingGroupResponse `object`

### RemoveThingType
* RemoveThingType `boolean`

### RemovedThings
* RemovedThings `integer`

### ReplaceDefaultPolicyVersionParams
* ReplaceDefaultPolicyVersionParams `object`: Parameters to define a mitigation action that adds a blank policy to restrict permissions.
  * templateName **required**

### ReplaceTopicRuleRequest
* ReplaceTopicRuleRequest `object`: The input for the ReplaceTopicRule operation.
  * topicRulePayload **required**
    * actions **required**
      * items [Action](#action)
    * awsIotSqlVersion
    * description
    * errorAction
      * cloudwatchAlarm
        * alarmName **required**
        * roleArn **required**
        * stateReason **required**
        * stateValue **required**
      * cloudwatchLogs
        * logGroupName **required**
        * roleArn **required**
      * cloudwatchMetric
        * metricName **required**
        * metricNamespace **required**
        * metricTimestamp
        * metricUnit **required**
        * metricValue **required**
        * roleArn **required**
      * dynamoDB
        * hashKeyField **required**
        * hashKeyType
        * hashKeyValue **required**
        * operation
        * payloadField
        * rangeKeyField
        * rangeKeyType
        * rangeKeyValue
        * roleArn **required**
        * tableName **required**
      * dynamoDBv2
        * putItem **required**
          * tableName **required**
        * roleArn **required**
      * elasticsearch
        * endpoint **required**
        * id **required**
        * index **required**
        * roleArn **required**
        * type **required**
      * firehose
        * batchMode
        * deliveryStreamName **required**
        * roleArn **required**
        * separator
      * http
        * auth
          * sigv4
        * confirmationUrl
        * headers
          * items [HttpActionHeader](#httpactionheader)
        * url **required**
      * iotAnalytics
        * batchMode
        * channelArn
        * channelName
        * roleArn
      * iotEvents
        * batchMode
        * inputName **required**
        * messageId
        * roleArn **required**
      * iotSiteWise
        * putAssetPropertyValueEntries **required**
          * items [PutAssetPropertyValueEntry](#putassetpropertyvalueentry)
        * roleArn **required**
      * kafka
        * clientProperties **required**
        * destinationArn **required**
        * key
        * partition
        * topic **required**
      * kinesis
        * partitionKey
        * roleArn **required**
        * streamName **required**
      * lambda
        * functionArn **required**
      * republish
        * qos
        * roleArn **required**
        * topic **required**
      * s3
        * bucketName **required**
        * cannedAcl
        * key **required**
        * roleArn **required**
      * salesforce
        * token **required**
        * url **required**
      * sns
        * messageFormat
        * roleArn **required**
        * targetArn **required**
      * sqs
        * queueUrl **required**
        * roleArn **required**
        * useBase64
      * stepFunctions
        * executionNamePrefix
        * roleArn **required**
        * stateMachineName **required**
      * timestream
        * databaseName **required**
        * dimensions **required**
          * items [TimestreamDimension](#timestreamdimension)
        * roleArn **required**
        * tableName **required**
        * timestamp
          * unit **required**
          * value **required**
    * ruleDisabled
    * sql **required**

### ReportType
* ReportType `string` (values: ERRORS, RESULTS)

### RepublishAction
* RepublishAction `object`: Describes an action to republish to another topic.
  * qos
  * roleArn **required**
  * topic **required**

### ReservedDomainConfigurationName
* ReservedDomainConfigurationName `string`

### Resource
* Resource `string`

### ResourceAlreadyExistsException


### ResourceArn
* ResourceArn `string`

### ResourceArns
* ResourceArns `object`

### ResourceIdentifier
* ResourceIdentifier `object`: Information that identifies the noncompliant resource.
  * account
  * caCertificateId
  * clientId
  * cognitoIdentityPoolId
  * deviceCertificateId
  * iamRoleArn
  * policyVersionIdentifier
    * policyName
    * policyVersionId
  * roleAliasArn

### ResourceLogicalId
* ResourceLogicalId `string`

### ResourceNotFoundException


### ResourceRegistrationFailureException


### ResourceType
* ResourceType `string` (values: DEVICE_CERTIFICATE, CA_CERTIFICATE, IOT_POLICY, COGNITO_IDENTITY_POOL, CLIENT_ID, ACCOUNT_SETTINGS, ROLE_ALIAS, IAM_ROLE)

### Resources
* Resources `array`
  * items [Resource](#resource)

### RoleAlias
* RoleAlias `string`

### RoleAliasArn
* RoleAliasArn `string`

### RoleAliasDescription
* RoleAliasDescription `object`: Role alias description.
  * creationDate
  * credentialDurationSeconds
  * lastModifiedDate
  * owner
  * roleAlias
  * roleAliasArn
  * roleArn

### RoleAliases
* RoleAliases `array`
  * items [RoleAlias](#rolealias)

### RoleArn
* RoleArn `string`

### RolloutRatePerMinute
* RolloutRatePerMinute `integer`

### RuleArn
* RuleArn `string`

### RuleName
* RuleName `string`

### S3Action
* S3Action `object`: Describes an action to write data to an Amazon S3 bucket.
  * bucketName **required**
  * cannedAcl
  * key **required**
  * roleArn **required**

### S3Bucket
* S3Bucket `string`

### S3Destination
* S3Destination `object`: Describes the location of updated firmware in S3.
  * bucket
  * prefix

### S3FileUrl
* S3FileUrl `string`

### S3FileUrlList
* S3FileUrlList `array`
  * items [S3FileUrl](#s3fileurl)

### S3Key
* S3Key `string`

### S3Location
* S3Location `object`: The S3 location.
  * bucket
  * key
  * version

### S3Version
* S3Version `string`

### SQL
* SQL `string`

### SalesforceAction
* SalesforceAction `object`: Describes an action to write a message to a Salesforce IoT Cloud Input Stream.
  * token **required**
  * url **required**

### SalesforceEndpoint
* SalesforceEndpoint `string`

### SalesforceToken
* SalesforceToken `string`

### ScheduledAuditArn
* ScheduledAuditArn `string`

### ScheduledAuditMetadata
* ScheduledAuditMetadata `object`: Information about the scheduled audit.
  * dayOfMonth
  * dayOfWeek
  * frequency
  * scheduledAuditArn
  * scheduledAuditName

### ScheduledAuditMetadataList
* ScheduledAuditMetadataList `array`
  * items [ScheduledAuditMetadata](#scheduledauditmetadata)

### ScheduledAuditName
* ScheduledAuditName `string`

### SearchIndexRequest
* SearchIndexRequest `object`
  * indexName
  * maxResults
  * nextToken
  * queryString **required**
  * queryVersion

### SearchIndexResponse
* SearchIndexResponse `object`
  * nextToken
  * thingGroups
    * items [ThingGroupDocument](#thinggroupdocument)
  * things
    * items [ThingDocument](#thingdocument)

### SearchableAttributes
* SearchableAttributes `array`
  * items [AttributeName](#attributename)

### Seconds
* Seconds `integer`

### SecurityGroupId
* SecurityGroupId `string`

### SecurityGroupList
* SecurityGroupList `array`
  * items [SecurityGroupId](#securitygroupid)

### SecurityProfileArn
* SecurityProfileArn `string`

### SecurityProfileDescription
* SecurityProfileDescription `string`

### SecurityProfileIdentifier
* SecurityProfileIdentifier `object`: Identifying information for a Device Defender security profile.
  * arn **required**
  * name **required**

### SecurityProfileIdentifiers
* SecurityProfileIdentifiers `array`
  * items [SecurityProfileIdentifier](#securityprofileidentifier)

### SecurityProfileName
* SecurityProfileName `string`

### SecurityProfileTarget
* SecurityProfileTarget `object`: A target to which an alert is sent when a security profile behavior is violated.
  * arn **required**

### SecurityProfileTargetArn
* SecurityProfileTargetArn `string`

### SecurityProfileTargetMapping
* SecurityProfileTargetMapping `object`: Information about a security profile and the target associated with it.
  * securityProfileIdentifier
    * arn **required**
    * name **required**
  * target
    * arn **required**

### SecurityProfileTargetMappings
* SecurityProfileTargetMappings `array`
  * items [SecurityProfileTargetMapping](#securityprofiletargetmapping)

### SecurityProfileTargets
* SecurityProfileTargets `array`
  * items [SecurityProfileTarget](#securityprofiletarget)

### ServerCertificateArns
* ServerCertificateArns `array`
  * items [AcmCertificateArn](#acmcertificatearn)

### ServerCertificateStatus
* ServerCertificateStatus `string` (values: INVALID, VALID)

### ServerCertificateStatusDetail
* ServerCertificateStatusDetail `string`

### ServerCertificateSummary
* ServerCertificateSummary `object`: An object that contains information about a server certificate.
  * serverCertificateArn
  * serverCertificateStatus
  * serverCertificateStatusDetail

### ServerCertificates
* ServerCertificates `array`
  * items [ServerCertificateSummary](#servercertificatesummary)

### ServerName
* ServerName `string`

### ServiceName
* ServiceName `string`

### ServiceType
* ServiceType `string` (values: DATA, CREDENTIAL_PROVIDER, JOBS)

### ServiceUnavailableException


### SetAsActive
* SetAsActive `boolean`

### SetAsActiveFlag
* SetAsActiveFlag `boolean`

### SetAsDefault
* SetAsDefault `boolean`

### SetDefaultAuthorizerRequest
* SetDefaultAuthorizerRequest `object`
  * authorizerName **required**

### SetDefaultAuthorizerResponse
* SetDefaultAuthorizerResponse `object`
  * authorizerArn
  * authorizerName

### SetDefaultPolicyVersionRequest
* SetDefaultPolicyVersionRequest `object`: The input for the SetDefaultPolicyVersion operation.

### SetLoggingOptionsRequest
* SetLoggingOptionsRequest `object`: The input for the SetLoggingOptions operation.
  * loggingOptionsPayload **required**
    * logLevel
    * roleArn **required**

### SetV2LoggingLevelRequest
* SetV2LoggingLevelRequest `object`
  * logLevel **required**
  * logTarget **required**
    * targetName
    * targetType **required**

### SetV2LoggingOptionsRequest
* SetV2LoggingOptionsRequest `object`
  * defaultLogLevel
  * disableAllLogs
  * roleArn

### SigV4Authorization
* SigV4Authorization `object`: For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 signing process</a>.
  * roleArn **required**
  * serviceName **required**
  * signingRegion **required**

### Signature
* Signature `string`

### SignatureAlgorithm
* SignatureAlgorithm `string`

### SigningJobId
* SigningJobId `string`

### SigningProfileName
* SigningProfileName `string`

### SigningProfileParameter
* SigningProfileParameter `object`: Describes the code-signing profile.
  * certificateArn
  * certificatePathOnDevice
  * platform

### SigningRegion
* SigningRegion `string`

### SkippedFindingsCount
* SkippedFindingsCount `integer`

### SkyfallMaxResults
* SkyfallMaxResults `integer`

### SnsAction
* SnsAction `object`: Describes an action to publish to an Amazon SNS topic.
  * messageFormat
  * roleArn **required**
  * targetArn **required**

### SnsTopicArn
* SnsTopicArn `string`

### SqlParseException


### SqsAction
* SqsAction `object`: Describes an action to publish data to an Amazon SQS queue.
  * queueUrl **required**
  * roleArn **required**
  * useBase64

### StartAuditMitigationActionsTaskRequest
* StartAuditMitigationActionsTaskRequest `object`
  * auditCheckToActionsMapping **required**
  * clientRequestToken **required**
  * target **required**
    * auditCheckToReasonCodeFilter
    * auditTaskId
    * findingIds
      * items [FindingId](#findingid)

### StartAuditMitigationActionsTaskResponse
* StartAuditMitigationActionsTaskResponse `object`
  * taskId

### StartDetectMitigationActionsTaskRequest
* StartDetectMitigationActionsTaskRequest `object`
  * actions **required**
    * items [MitigationActionName](#mitigationactionname)
  * clientRequestToken **required**
  * includeOnlyActiveViolations
  * includeSuppressedAlerts
  * target **required**
    * behaviorName
    * securityProfileName
    * violationIds
      * items [ViolationId](#violationid)
  * violationEventOccurrenceRange
    * endTime **required**
    * startTime **required**

### StartDetectMitigationActionsTaskResponse
* StartDetectMitigationActionsTaskResponse `object`
  * taskId

### StartOnDemandAuditTaskRequest
* StartOnDemandAuditTaskRequest `object`
  * targetCheckNames **required**
    * items [AuditCheckName](#auditcheckname)

### StartOnDemandAuditTaskResponse
* StartOnDemandAuditTaskResponse `object`
  * taskId

### StartSigningJobParameter
* StartSigningJobParameter `object`: Information required to start a signing job.
  * destination
    * s3Destination
      * bucket
      * prefix
  * signingProfileName
  * signingProfileParameter
    * certificateArn
    * certificatePathOnDevice
    * platform

### StartThingRegistrationTaskRequest
* StartThingRegistrationTaskRequest `object`
  * inputFileBucket **required**
  * inputFileKey **required**
  * roleArn **required**
  * templateBody **required**

### StartThingRegistrationTaskResponse
* StartThingRegistrationTaskResponse `object`
  * taskId

### StateMachineName
* StateMachineName `string`

### StateReason
* StateReason `string`

### StateValue
* StateValue `string`

### StatisticalThreshold
* StatisticalThreshold `object`: A statistical ranking (percentile) that indicates a threshold value by which a behavior is determined to be in compliance or in violation of the behavior.
  * statistic

### Statistics
* Statistics `object`: A map of key-value pairs for all supported statistics. Currently, only count is supported.
  * average
  * count
  * maximum
  * minimum
  * stdDeviation
  * sum
  * sumOfSquares
  * variance

### Status
* Status `string` (values: InProgress, Completed, Failed, Cancelled, Cancelling)

### StdDeviation
* StdDeviation `number`

### StepFunctionsAction
* StepFunctionsAction `object`: Starts execution of a Step Functions state machine.
  * executionNamePrefix
  * roleArn **required**
  * stateMachineName **required**

### StopThingRegistrationTaskRequest
* StopThingRegistrationTaskRequest `object`

### StopThingRegistrationTaskResponse
* StopThingRegistrationTaskResponse `object`

### Stream
* Stream `object`: Describes a group of files that can be streamed.
  * fileId
  * streamId

### StreamArn
* StreamArn `string`

### StreamDescription
* StreamDescription `string`

### StreamFile
* StreamFile `object`: Represents a file to stream.
  * fileId
  * s3Location
    * bucket
    * key
    * version

### StreamFiles
* StreamFiles `array`
  * items [StreamFile](#streamfile)

### StreamId
* StreamId `string`

### StreamInfo
* StreamInfo `object`: Information about a stream.
  * createdAt
  * description
  * files
    * items [StreamFile](#streamfile)
  * lastUpdatedAt
  * roleArn
  * streamArn
  * streamId
  * streamVersion

### StreamName
* StreamName `string`

### StreamSummary
* StreamSummary `object`: A summary of a stream.
  * description
  * streamArn
  * streamId
  * streamVersion

### StreamVersion
* StreamVersion `integer`

### StreamsSummary
* StreamsSummary `array`
  * items [StreamSummary](#streamsummary)

### String
* String `string`

### StringList
* StringList `array`
  * items [stringValue](#stringvalue)

### StringMap
* StringMap `object`

### SubnetId
* SubnetId `string`

### SubnetIdList
* SubnetIdList `array`
  * items [SubnetId](#subnetid)

### SucceededFindingsCount
* SucceededFindingsCount `integer`

### SucceededThings
* SucceededThings `integer`

### Sum
* Sum `number`

### SumOfSquares
* SumOfSquares `number`

### SuppressAlerts
* SuppressAlerts `boolean`

### SuppressIndefinitely
* SuppressIndefinitely `boolean`

### SuppressedNonCompliantResourcesCount
* SuppressedNonCompliantResourcesCount `integer`

### TableName
* TableName `string`

### Tag
* Tag `object`: A set of key/value pairs that are used to manage the resource.
  * Key **required**
  * Value

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
  * tags **required**
    * items [Tag](#tag)
  * resourceArn **required**

### TagResourceResponse
* TagResourceResponse `object`

### TagValue
* TagValue `string`

### Target
* Target `string`

### TargetArn
* TargetArn `string`

### TargetAuditCheckNames
* TargetAuditCheckNames `array`
  * items [AuditCheckName](#auditcheckname)

### TargetSelection
* TargetSelection `string` (values: CONTINUOUS, SNAPSHOT)

### TargetViolationIdsForDetectMitigationActions
* TargetViolationIdsForDetectMitigationActions `array`
  * items [ViolationId](#violationid)

### Targets
* Targets `array`
  * items [Target](#target)

### TaskAlreadyExistsException


### TaskId
* TaskId `string`

### TaskIdList
* TaskIdList `array`
  * items [TaskId](#taskid)

### TaskStatistics
* TaskStatistics `object`: Statistics for the checks performed during the audit.
  * canceledChecks
  * compliantChecks
  * failedChecks
  * inProgressChecks
  * nonCompliantChecks
  * totalChecks
  * waitingForDataCollectionChecks

### TaskStatisticsForAuditCheck
* TaskStatisticsForAuditCheck `object`: Provides summary counts of how many tasks for findings are in a particular state. This information is included in the response from DescribeAuditMitigationActionsTask.
  * canceledFindingsCount
  * failedFindingsCount
  * skippedFindingsCount
  * succeededFindingsCount
  * totalFindingsCount

### TemplateArn
* TemplateArn `string`

### TemplateBody
* TemplateBody `string`

### TemplateDescription
* TemplateDescription `string`

### TemplateName
* TemplateName `string`

### TemplateVersionId
* TemplateVersionId `integer`

### TestAuthorizationRequest
* TestAuthorizationRequest `object`
  * authInfos **required**
    * items [AuthInfo](#authinfo)
  * cognitoIdentityPoolId
  * policyNamesToAdd
    * items [PolicyName](#policyname)
  * policyNamesToSkip
    * items [PolicyName](#policyname)
  * principal

### TestAuthorizationResponse
* TestAuthorizationResponse `object`
  * authResults
    * items [AuthResult](#authresult)

### TestInvokeAuthorizerRequest
* TestInvokeAuthorizerRequest `object`
  * httpContext
    * headers
    * queryString
  * mqttContext
    * clientId
    * password
    * username
  * tlsContext
    * serverName
  * token
  * tokenSignature

### TestInvokeAuthorizerResponse
* TestInvokeAuthorizerResponse `object`
  * disconnectAfterInSeconds
  * isAuthenticated
  * policyDocuments
    * items [PolicyDocument](#policydocument)
  * principalId
  * refreshAfterInSeconds

### ThingArn
* ThingArn `string`

### ThingAttribute
* ThingAttribute `object`: The properties of the thing, including thing name, thing type name, and a list of thing attributes.
  * attributes
  * thingArn
  * thingName
  * thingTypeName
  * version

### ThingAttributeList
* ThingAttributeList `array`
  * items [ThingAttribute](#thingattribute)

### ThingConnectivity
* ThingConnectivity `object`: The connectivity status of the thing.
  * connected
  * timestamp

### ThingConnectivityIndexingMode
* ThingConnectivityIndexingMode `string` (values: OFF, STATUS)

### ThingDocument
* ThingDocument `object`: The thing search index document.
  * attributes
  * connectivity
    * connected
    * timestamp
  * shadow
  * thingGroupNames
    * items [ThingGroupName](#thinggroupname)
  * thingId
  * thingName
  * thingTypeName

### ThingDocumentList
* ThingDocumentList `array`
  * items [ThingDocument](#thingdocument)

### ThingGroupArn
* ThingGroupArn `string`

### ThingGroupDescription
* ThingGroupDescription `string`

### ThingGroupDocument
* ThingGroupDocument `object`: The thing group search index document.
  * attributes
  * parentGroupNames
    * items [ThingGroupName](#thinggroupname)
  * thingGroupDescription
  * thingGroupId
  * thingGroupName

### ThingGroupDocumentList
* ThingGroupDocumentList `array`
  * items [ThingGroupDocument](#thinggroupdocument)

### ThingGroupId
* ThingGroupId `string`

### ThingGroupIndexingConfiguration
* ThingGroupIndexingConfiguration `object`: Thing group indexing configuration.
  * customFields
    * items [Field](#field)
  * managedFields
    * items [Field](#field)
  * thingGroupIndexingMode **required**

### ThingGroupIndexingMode
* ThingGroupIndexingMode `string` (values: OFF, ON)

### ThingGroupList
* ThingGroupList `array`
  * items [ThingGroupName](#thinggroupname)

### ThingGroupMetadata
* ThingGroupMetadata `object`: Thing group metadata.
  * creationDate
  * parentGroupName
  * rootToParentThingGroups
    * items [GroupNameAndArn](#groupnameandarn)

### ThingGroupName
* ThingGroupName `string`

### ThingGroupNameAndArnList
* ThingGroupNameAndArnList `array`
  * items [GroupNameAndArn](#groupnameandarn)

### ThingGroupNameList
* ThingGroupNameList `array`
  * items [ThingGroupName](#thinggroupname)

### ThingGroupNames
* ThingGroupNames `array`
  * items [ThingGroupName](#thinggroupname)

### ThingGroupProperties
* ThingGroupProperties `object`: Thing group properties.
  * attributePayload
    * attributes
    * merge
  * thingGroupDescription

### ThingId
* ThingId `string`

### ThingIndexingConfiguration
* ThingIndexingConfiguration `object`: The thing indexing configuration. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/managing-index.html">Managing Thing Indexing</a>.
  * customFields
    * items [Field](#field)
  * managedFields
    * items [Field](#field)
  * thingConnectivityIndexingMode
  * thingIndexingMode **required**

### ThingIndexingMode
* ThingIndexingMode `string` (values: OFF, REGISTRY, REGISTRY_AND_SHADOW)

### ThingName
* ThingName `string`

### ThingNameList
* ThingNameList `array`
  * items [ThingName](#thingname)

### ThingTypeArn
* ThingTypeArn `string`

### ThingTypeDefinition
* ThingTypeDefinition `object`: The definition of the thing type, including thing type name and description.
  * thingTypeArn
  * thingTypeMetadata
    * creationDate
    * deprecated
    * deprecationDate
  * thingTypeName
  * thingTypeProperties
    * searchableAttributes
      * items [AttributeName](#attributename)
    * thingTypeDescription

### ThingTypeDescription
* ThingTypeDescription `string`

### ThingTypeId
* ThingTypeId `string`

### ThingTypeList
* ThingTypeList `array`
  * items [ThingTypeDefinition](#thingtypedefinition)

### ThingTypeMetadata
* ThingTypeMetadata `object`: The ThingTypeMetadata contains additional information about the thing type including: creation date and time, a value indicating whether the thing type is deprecated, and a date and time when time was deprecated.
  * creationDate
  * deprecated
  * deprecationDate

### ThingTypeName
* ThingTypeName `string`

### ThingTypeProperties
* ThingTypeProperties `object`: The ThingTypeProperties contains information about the thing type including: a thing type description, and a list of searchable thing attribute names.
  * searchableAttributes
    * items [AttributeName](#attributename)
  * thingTypeDescription

### ThrottlingException


### TimedOutThings
* TimedOutThings `integer`

### TimeoutConfig
* TimeoutConfig `object`: Specifies the amount of time each device has to finish its execution of the job. A timer is started when the job execution status is set to <code>IN_PROGRESS</code>. If the job execution status is not set to another terminal state before the timer expires, it will be automatically set to <code>TIMED_OUT</code>.
  * inProgressTimeoutInMinutes

### Timestamp
* Timestamp `string`

### TimestreamAction
* TimestreamAction `object`: The Timestream rule action writes attributes (measures) from an MQTT message into an Amazon Timestream table. For more information, see the <a href="https://docs.aws.amazon.com/iot/latest/developerguide/timestream-rule-action.html">Timestream</a> topic rule action documentation.
  * databaseName **required**
  * dimensions **required**
    * items [TimestreamDimension](#timestreamdimension)
  * roleArn **required**
  * tableName **required**
  * timestamp
    * unit **required**
    * value **required**

### TimestreamDatabaseName
* TimestreamDatabaseName `string`

### TimestreamDimension
* TimestreamDimension `object`: Metadata attributes of the time series that are written in each measure record.
  * name **required**
  * value **required**

### TimestreamDimensionList
* TimestreamDimensionList `array`
  * items [TimestreamDimension](#timestreamdimension)

### TimestreamDimensionName
* TimestreamDimensionName `string`

### TimestreamDimensionValue
* TimestreamDimensionValue `string`

### TimestreamTableName
* TimestreamTableName `string`

### TimestreamTimestamp
* TimestreamTimestamp `object`: Describes how to interpret an application-defined timestamp value from an MQTT message payload and the precision of that value.
  * unit **required**
  * value **required**

### TimestreamTimestampUnit
* TimestreamTimestampUnit `string`

### TimestreamTimestampValue
* TimestreamTimestampValue `string`

### TinyMaxResults
* TinyMaxResults `integer`

### TlsContext
* TlsContext `object`: Specifies the TLS context to use for the test authorizer request.
  * serverName

### Token
* Token `string`

### TokenKeyName
* TokenKeyName `string`

### TokenSignature
* TokenSignature `string`

### Topic
* Topic `string`

### TopicPattern
* TopicPattern `string`

### TopicRule
* TopicRule `object`: Describes a rule.
  * actions
    * items [Action](#action)
  * awsIotSqlVersion
  * createdAt
  * description
  * errorAction
    * cloudwatchAlarm
      * alarmName **required**
      * roleArn **required**
      * stateReason **required**
      * stateValue **required**
    * cloudwatchLogs
      * logGroupName **required**
      * roleArn **required**
    * cloudwatchMetric
      * metricName **required**
      * metricNamespace **required**
      * metricTimestamp
      * metricUnit **required**
      * metricValue **required**
      * roleArn **required**
    * dynamoDB
      * hashKeyField **required**
      * hashKeyType
      * hashKeyValue **required**
      * operation
      * payloadField
      * rangeKeyField
      * rangeKeyType
      * rangeKeyValue
      * roleArn **required**
      * tableName **required**
    * dynamoDBv2
      * putItem **required**
        * tableName **required**
      * roleArn **required**
    * elasticsearch
      * endpoint **required**
      * id **required**
      * index **required**
      * roleArn **required**
      * type **required**
    * firehose
      * batchMode
      * deliveryStreamName **required**
      * roleArn **required**
      * separator
    * http
      * auth
        * sigv4
          * roleArn **required**
          * serviceName **required**
          * signingRegion **required**
      * confirmationUrl
      * headers
        * items [HttpActionHeader](#httpactionheader)
      * url **required**
    * iotAnalytics
      * batchMode
      * channelArn
      * channelName
      * roleArn
    * iotEvents
      * batchMode
      * inputName **required**
      * messageId
      * roleArn **required**
    * iotSiteWise
      * putAssetPropertyValueEntries **required**
        * items [PutAssetPropertyValueEntry](#putassetpropertyvalueentry)
      * roleArn **required**
    * kafka
      * clientProperties **required**
      * destinationArn **required**
      * key
      * partition
      * topic **required**
    * kinesis
      * partitionKey
      * roleArn **required**
      * streamName **required**
    * lambda
      * functionArn **required**
    * republish
      * qos
      * roleArn **required**
      * topic **required**
    * s3
      * bucketName **required**
      * cannedAcl
      * key **required**
      * roleArn **required**
    * salesforce
      * token **required**
      * url **required**
    * sns
      * messageFormat
      * roleArn **required**
      * targetArn **required**
    * sqs
      * queueUrl **required**
      * roleArn **required**
      * useBase64
    * stepFunctions
      * executionNamePrefix
      * roleArn **required**
      * stateMachineName **required**
    * timestream
      * databaseName **required**
      * dimensions **required**
        * items [TimestreamDimension](#timestreamdimension)
      * roleArn **required**
      * tableName **required**
      * timestamp
        * unit **required**
        * value **required**
  * ruleDisabled
  * ruleName
  * sql

### TopicRuleDestination
* TopicRuleDestination `object`: A topic rule destination.
  * arn
  * createdAt
  * httpUrlProperties
    * confirmationUrl
  * lastUpdatedAt
  * status
  * statusReason
  * vpcProperties
    * roleArn
    * securityGroups
      * items [SecurityGroupId](#securitygroupid)
    * subnetIds
      * items [SubnetId](#subnetid)
    * vpcId

### TopicRuleDestinationConfiguration
* TopicRuleDestinationConfiguration `object`: Configuration of the topic rule destination.
  * httpUrlConfiguration
    * confirmationUrl **required**
  * vpcConfiguration
    * roleArn **required**
    * securityGroups
      * items [SecurityGroupId](#securitygroupid)
    * subnetIds **required**
      * items [SubnetId](#subnetid)
    * vpcId **required**

### TopicRuleDestinationMaxResults
* TopicRuleDestinationMaxResults `integer`

### TopicRuleDestinationStatus
* TopicRuleDestinationStatus `string` (values: ENABLED, IN_PROGRESS, DISABLED, ERROR, DELETING)

### TopicRuleDestinationSummaries
* TopicRuleDestinationSummaries `array`
  * items [TopicRuleDestinationSummary](#topicruledestinationsummary)

### TopicRuleDestinationSummary
* TopicRuleDestinationSummary `object`: Information about the topic rule destination.
  * arn
  * createdAt
  * httpUrlSummary
    * confirmationUrl
  * lastUpdatedAt
  * status
  * statusReason
  * vpcDestinationSummary
    * roleArn
    * securityGroups
      * items [SecurityGroupId](#securitygroupid)
    * subnetIds
      * items [SubnetId](#subnetid)
    * vpcId

### TopicRuleList
* TopicRuleList `array`
  * items [TopicRuleListItem](#topicrulelistitem)

### TopicRuleListItem
* TopicRuleListItem `object`: Describes a rule.
  * createdAt
  * ruleArn
  * ruleDisabled
  * ruleName
  * topicPattern

### TopicRuleMaxResults
* TopicRuleMaxResults `integer`

### TopicRulePayload
* TopicRulePayload `object`: Describes a rule.
  * actions **required**
    * items [Action](#action)
  * awsIotSqlVersion
  * description
  * errorAction
    * cloudwatchAlarm
      * alarmName **required**
      * roleArn **required**
      * stateReason **required**
      * stateValue **required**
    * cloudwatchLogs
      * logGroupName **required**
      * roleArn **required**
    * cloudwatchMetric
      * metricName **required**
      * metricNamespace **required**
      * metricTimestamp
      * metricUnit **required**
      * metricValue **required**
      * roleArn **required**
    * dynamoDB
      * hashKeyField **required**
      * hashKeyType
      * hashKeyValue **required**
      * operation
      * payloadField
      * rangeKeyField
      * rangeKeyType
      * rangeKeyValue
      * roleArn **required**
      * tableName **required**
    * dynamoDBv2
      * putItem **required**
        * tableName **required**
      * roleArn **required**
    * elasticsearch
      * endpoint **required**
      * id **required**
      * index **required**
      * roleArn **required**
      * type **required**
    * firehose
      * batchMode
      * deliveryStreamName **required**
      * roleArn **required**
      * separator
    * http
      * auth
        * sigv4
          * roleArn **required**
          * serviceName **required**
          * signingRegion **required**
      * confirmationUrl
      * headers
        * items [HttpActionHeader](#httpactionheader)
      * url **required**
    * iotAnalytics
      * batchMode
      * channelArn
      * channelName
      * roleArn
    * iotEvents
      * batchMode
      * inputName **required**
      * messageId
      * roleArn **required**
    * iotSiteWise
      * putAssetPropertyValueEntries **required**
        * items [PutAssetPropertyValueEntry](#putassetpropertyvalueentry)
      * roleArn **required**
    * kafka
      * clientProperties **required**
      * destinationArn **required**
      * key
      * partition
      * topic **required**
    * kinesis
      * partitionKey
      * roleArn **required**
      * streamName **required**
    * lambda
      * functionArn **required**
    * republish
      * qos
      * roleArn **required**
      * topic **required**
    * s3
      * bucketName **required**
      * cannedAcl
      * key **required**
      * roleArn **required**
    * salesforce
      * token **required**
      * url **required**
    * sns
      * messageFormat
      * roleArn **required**
      * targetArn **required**
    * sqs
      * queueUrl **required**
      * roleArn **required**
      * useBase64
    * stepFunctions
      * executionNamePrefix
      * roleArn **required**
      * stateMachineName **required**
    * timestream
      * databaseName **required**
      * dimensions **required**
        * items [TimestreamDimension](#timestreamdimension)
      * roleArn **required**
      * tableName **required**
      * timestamp
        * unit **required**
        * value **required**
  * ruleDisabled
  * sql **required**

### TotalChecksCount
* TotalChecksCount `integer`

### TotalFindingsCount
* TotalFindingsCount `integer`

### TotalResourcesCount
* TotalResourcesCount `integer`

### TransferAlreadyCompletedException


### TransferCertificateRequest
* TransferCertificateRequest `object`: The input for the TransferCertificate operation.
  * transferMessage

### TransferCertificateResponse
* TransferCertificateResponse `object`: The output from the TransferCertificate operation.
  * transferredCertificateArn

### TransferConflictException


### TransferData
* TransferData `object`: Data used to transfer a certificate to an AWS account.
  * acceptDate
  * rejectDate
  * rejectReason
  * transferDate
  * transferMessage

### UnauthorizedException


### UndoDeprecate
* UndoDeprecate `boolean`

### UnsignedLong
* UnsignedLong `integer`

### UntagResourceRequest
* UntagResourceRequest `object`
  * resourceArn **required**
  * tagKeys **required**
    * items [TagKey](#tagkey)

### UntagResourceResponse
* UntagResourceResponse `object`

### UpdateAccountAuditConfigurationRequest
* UpdateAccountAuditConfigurationRequest `object`
  * auditCheckConfigurations
  * auditNotificationTargetConfigurations
  * roleArn

### UpdateAccountAuditConfigurationResponse
* UpdateAccountAuditConfigurationResponse `object`

### UpdateAuditSuppressionRequest
* UpdateAuditSuppressionRequest `object`
  * checkName **required** [AuditCheckName](#auditcheckname)
  * description
  * expirationDate
  * resourceIdentifier **required** [ResourceIdentifier](#resourceidentifier)
  * suppressIndefinitely

### UpdateAuditSuppressionResponse
* UpdateAuditSuppressionResponse `object`

### UpdateAuthorizerRequest
* UpdateAuthorizerRequest `object`
  * authorizerFunctionArn
  * status
  * tokenKeyName
  * tokenSigningPublicKeys

### UpdateAuthorizerResponse
* UpdateAuthorizerResponse `object`
  * authorizerArn
  * authorizerName

### UpdateBillingGroupRequest
* UpdateBillingGroupRequest `object`
  * billingGroupProperties **required**
    * billingGroupDescription
  * expectedVersion

### UpdateBillingGroupResponse
* UpdateBillingGroupResponse `object`
  * version

### UpdateCACertificateParams
* UpdateCACertificateParams `object`: Parameters to define a mitigation action that changes the state of the CA certificate to inactive.
  * action **required**

### UpdateCACertificateRequest
* UpdateCACertificateRequest `object`: The input to the UpdateCACertificate operation.
  * registrationConfig
    * roleArn
    * templateBody
  * removeAutoRegistration

### UpdateCertificateRequest
* UpdateCertificateRequest `object`: The input for the UpdateCertificate operation.

### UpdateCustomMetricRequest
* UpdateCustomMetricRequest `object`
  * displayName **required**

### UpdateCustomMetricResponse
* UpdateCustomMetricResponse `object`
  * creationDate
  * displayName
  * lastModifiedDate
  * metricArn
  * metricName
  * metricType

### UpdateDeviceCertificateParams
* UpdateDeviceCertificateParams `object`: Parameters to define a mitigation action that changes the state of the device certificate to inactive.
  * action **required**

### UpdateDimensionRequest
* UpdateDimensionRequest `object`
  * stringValues **required**
    * items [DimensionStringValue](#dimensionstringvalue)

### UpdateDimensionResponse
* UpdateDimensionResponse `object`
  * arn
  * creationDate
  * lastModifiedDate
  * name
  * stringValues
    * items [DimensionStringValue](#dimensionstringvalue)
  * type

### UpdateDomainConfigurationRequest
* UpdateDomainConfigurationRequest `object`
  * authorizerConfig
    * allowAuthorizerOverride
    * defaultAuthorizerName
  * domainConfigurationStatus
  * removeAuthorizerConfig

### UpdateDomainConfigurationResponse
* UpdateDomainConfigurationResponse `object`
  * domainConfigurationArn
  * domainConfigurationName

### UpdateDynamicThingGroupRequest
* UpdateDynamicThingGroupRequest `object`
  * expectedVersion
  * indexName
  * queryString
  * queryVersion
  * thingGroupProperties **required**
    * attributePayload
      * attributes
      * merge
    * thingGroupDescription

### UpdateDynamicThingGroupResponse
* UpdateDynamicThingGroupResponse `object`
  * version

### UpdateEventConfigurationsRequest
* UpdateEventConfigurationsRequest `object`
  * eventConfigurations

### UpdateEventConfigurationsResponse
* UpdateEventConfigurationsResponse `object`

### UpdateIndexingConfigurationRequest
* UpdateIndexingConfigurationRequest `object`
  * thingGroupIndexingConfiguration
    * customFields
      * items [Field](#field)
    * managedFields
      * items [Field](#field)
    * thingGroupIndexingMode **required**
  * thingIndexingConfiguration
    * customFields
      * items [Field](#field)
    * managedFields
      * items [Field](#field)
    * thingConnectivityIndexingMode
    * thingIndexingMode **required**

### UpdateIndexingConfigurationResponse
* UpdateIndexingConfigurationResponse `object`

### UpdateJobRequest
* UpdateJobRequest `object`
  * abortConfig
    * criteriaList **required**
      * items [AbortCriteria](#abortcriteria)
  * description
  * jobExecutionsRolloutConfig
    * exponentialRate
      * baseRatePerMinute **required**
      * incrementFactor **required**
      * rateIncreaseCriteria **required**
        * numberOfNotifiedThings
        * numberOfSucceededThings
    * maximumPerMinute
  * presignedUrlConfig
    * expiresInSec
    * roleArn
  * timeoutConfig
    * inProgressTimeoutInMinutes

### UpdateMitigationActionRequest
* UpdateMitigationActionRequest `object`
  * actionParams
    * addThingsToThingGroupParams
      * overrideDynamicGroups
      * thingGroupNames **required**
        * items [ThingGroupName](#thinggroupname)
    * enableIoTLoggingParams
      * logLevel **required**
      * roleArnForLogging **required**
    * publishFindingToSnsParams
      * topicArn **required**
    * replaceDefaultPolicyVersionParams
      * templateName **required**
    * updateCACertificateParams
      * action **required**
    * updateDeviceCertificateParams
      * action **required**
  * roleArn

### UpdateMitigationActionResponse
* UpdateMitigationActionResponse `object`
  * actionArn
  * actionId

### UpdateProvisioningTemplateRequest
* UpdateProvisioningTemplateRequest `object`
  * defaultVersionId
  * description
  * enabled
  * preProvisioningHook
    * payloadVersion
    * targetArn **required**
  * provisioningRoleArn
  * removePreProvisioningHook

### UpdateProvisioningTemplateResponse
* UpdateProvisioningTemplateResponse `object`

### UpdateRoleAliasRequest
* UpdateRoleAliasRequest `object`
  * credentialDurationSeconds
  * roleArn

### UpdateRoleAliasResponse
* UpdateRoleAliasResponse `object`
  * roleAlias
  * roleAliasArn

### UpdateScheduledAuditRequest
* UpdateScheduledAuditRequest `object`
  * dayOfMonth
  * dayOfWeek
  * frequency
  * targetCheckNames
    * items [AuditCheckName](#auditcheckname)

### UpdateScheduledAuditResponse
* UpdateScheduledAuditResponse `object`
  * scheduledAuditArn

### UpdateSecurityProfileRequest
* UpdateSecurityProfileRequest `object`
  * additionalMetricsToRetain
    * items [BehaviorMetric](#behaviormetric)
  * additionalMetricsToRetainV2
    * items [MetricToRetain](#metrictoretain)
  * alertTargets
  * behaviors
    * items [Behavior](#behavior)
  * deleteAdditionalMetricsToRetain
  * deleteAlertTargets
  * deleteBehaviors
  * securityProfileDescription

### UpdateSecurityProfileResponse
* UpdateSecurityProfileResponse `object`
  * additionalMetricsToRetain
    * items [BehaviorMetric](#behaviormetric)
  * additionalMetricsToRetainV2
    * items [MetricToRetain](#metrictoretain)
  * alertTargets
  * behaviors
    * items [Behavior](#behavior)
  * creationDate
  * lastModifiedDate
  * securityProfileArn
  * securityProfileDescription
  * securityProfileName
  * version

### UpdateStreamRequest
* UpdateStreamRequest `object`
  * description
  * files
    * items [StreamFile](#streamfile)
  * roleArn

### UpdateStreamResponse
* UpdateStreamResponse `object`
  * description
  * streamArn
  * streamId
  * streamVersion

### UpdateThingGroupRequest
* UpdateThingGroupRequest `object`
  * expectedVersion
  * thingGroupProperties **required**
    * attributePayload
      * attributes
      * merge
    * thingGroupDescription

### UpdateThingGroupResponse
* UpdateThingGroupResponse `object`
  * version

### UpdateThingGroupsForThingRequest
* UpdateThingGroupsForThingRequest `object`
  * overrideDynamicGroups
  * thingGroupsToAdd
    * items [ThingGroupName](#thinggroupname)
  * thingGroupsToRemove
    * items [ThingGroupName](#thinggroupname)
  * thingName

### UpdateThingGroupsForThingResponse
* UpdateThingGroupsForThingResponse `object`

### UpdateThingRequest
* UpdateThingRequest `object`: The input for the UpdateThing operation.
  * attributePayload
    * attributes
    * merge
  * expectedVersion
  * removeThingType
  * thingTypeName

### UpdateThingResponse
* UpdateThingResponse `object`: The output from the UpdateThing operation.

### UpdateTopicRuleDestinationRequest
* UpdateTopicRuleDestinationRequest `object`
  * arn **required**
  * status **required**

### UpdateTopicRuleDestinationResponse
* UpdateTopicRuleDestinationResponse `object`

### Url
* Url `string`

### UseBase64
* UseBase64 `boolean`

### Valid
* Valid `boolean`

### ValidateSecurityProfileBehaviorsRequest
* ValidateSecurityProfileBehaviorsRequest `object`
  * behaviors **required**
    * items [Behavior](#behavior)

### ValidateSecurityProfileBehaviorsResponse
* ValidateSecurityProfileBehaviorsResponse `object`
  * valid
  * validationErrors
    * items [ValidationError](#validationerror)

### ValidationError
* ValidationError `object`: Information about an error found in a behavior specification.
  * errorMessage

### ValidationErrors
* ValidationErrors `array`
  * items [ValidationError](#validationerror)

### Value
* Value `string`

### Variance
* Variance `number`

### Version
* Version `integer`

### VersionConflictException


### VersionNumber
* VersionNumber `integer`

### VersionsLimitExceededException


### ViolationEvent
* ViolationEvent `object`: Information about a Device Defender security profile behavior violation.
  * behavior
    * criteria
      * comparisonOperator
      * consecutiveDatapointsToAlarm
      * consecutiveDatapointsToClear
      * durationSeconds
      * mlDetectionConfig
        * confidenceLevel **required**
      * statisticalThreshold
        * statistic
      * value
        * cidrs
          * items [Cidr](#cidr)
        * count
        * number
        * numbers
          * items [Number](#number)
        * ports
          * items [Port](#port)
        * strings
          * items [stringValue](#stringvalue)
    * metric
    * metricDimension
      * dimensionName **required**
      * operator
    * name **required**
    * suppressAlerts
  * metricValue
    * cidrs
      * items [Cidr](#cidr)
    * count
    * number
    * numbers
      * items [Number](#number)
    * ports
      * items [Port](#port)
    * strings
      * items [stringValue](#stringvalue)
  * securityProfileName
  * thingName
  * violationEventAdditionalInfo
    * confidenceLevel
  * violationEventTime
  * violationEventType
  * violationId

### ViolationEventAdditionalInfo
* ViolationEventAdditionalInfo `object`:  The details of a violation event. 
  * confidenceLevel

### ViolationEventOccurrenceRange
* ViolationEventOccurrenceRange `object`:  Specifies the time period of which violation events occurred between. 
  * endTime **required**
  * startTime **required**

### ViolationEventType
* ViolationEventType `string` (values: in-alarm, alarm-cleared, alarm-invalidated)

### ViolationEvents
* ViolationEvents `array`
  * items [ViolationEvent](#violationevent)

### ViolationId
* ViolationId `string`

### VpcDestinationConfiguration
* VpcDestinationConfiguration `object`: The configuration information for a virtual private cloud (VPC) destination.
  * roleArn **required**
  * securityGroups
    * items [SecurityGroupId](#securitygroupid)
  * subnetIds **required**
    * items [SubnetId](#subnetid)
  * vpcId **required**

### VpcDestinationProperties
* VpcDestinationProperties `object`: The properties of a virtual private cloud (VPC) destination.
  * roleArn
  * securityGroups
    * items [SecurityGroupId](#securitygroupid)
  * subnetIds
    * items [SubnetId](#subnetid)
  * vpcId

### VpcDestinationSummary
* VpcDestinationSummary `object`: The summary of a virtual private cloud (VPC) destination.
  * roleArn
  * securityGroups
    * items [SecurityGroupId](#securitygroupid)
  * subnetIds
    * items [SubnetId](#subnetid)
  * vpcId

### VpcId
* VpcId `string`

### WaitingForDataCollectionChecksCount
* WaitingForDataCollectionChecksCount `integer`

### stringValue
* stringValue `string`


