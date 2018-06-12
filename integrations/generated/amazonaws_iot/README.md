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

amazonaws_iot.AcceptCertificateTransfer({
  "certificateId": ""
}).then(data => {
  console.log(data);
});
```

## Description

<fullname>AWS IoT</fullname> <p>AWS IoT provides secure, bi-directional communication between Internet-connected devices (such as sensors, actuators, embedded devices, or smart appliances) and the AWS cloud. You can discover your custom IoT-Data endpoint to communicate with, configure rules for data processing and integration with other services, organize resources associated with each device (Registry), configure logging, and create and manage policies and credentials to authenticate devices.</p> <p>For more information about how AWS IoT works, see the <a href="http://docs.aws.amazon.com/iot/latest/developerguide/aws-iot-how-it-works.html">Developer Guide</a>.</p>

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

#### Output
*Output schema unknown*

### ListAttachedPolicies



```js
amazonaws_iot.ListAttachedPolicies({
  "target": ""
}, context)
```

#### Input
* input `object`
  * target **required** `string`

#### Output
* output [ListAttachedPoliciesResponse](#listattachedpoliciesresponse)

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
  "authorizerFunctionArn": "",
  "tokenKeyName": "",
  "tokenSigningPublicKeys": []
}, context)
```

#### Input
* input `object`
  * authorizerName **required** `string`
  * authorizerFunctionArn **required** [AuthorizerFunctionArn](#authorizerfunctionarn)
  * status [AuthorizerStatus](#authorizerstatus)
  * tokenKeyName **required** [TokenKeyName](#tokenkeyname)
  * tokenSigningPublicKeys **required** [PublicKeyMap](#publickeymap)

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
  * authorizerFunctionArn [AuthorizerFunctionArn](#authorizerfunctionarn)
  * status [AuthorizerStatus](#authorizerstatus)
  * tokenKeyName [TokenKeyName](#tokenkeyname)
  * tokenSigningPublicKeys [PublicKeyMap](#publickeymap)

#### Output
* output [UpdateAuthorizerResponse](#updateauthorizerresponse)

### TestInvokeAuthorizer



```js
amazonaws_iot.TestInvokeAuthorizer({
  "authorizerName": "",
  "token": "",
  "tokenSignature": ""
}, context)
```

#### Input
* input `object`
  * authorizerName **required** `string`
  * token **required** [Token](#token)
  * tokenSignature **required** [TokenSignature](#tokensignature)

#### Output
* output [TestInvokeAuthorizerResponse](#testinvokeauthorizerresponse)

### ListAuthorizers



```js
amazonaws_iot.ListAuthorizers({}, context)
```

#### Input
* input `object`

#### Output
* output [ListAuthorizersResponse](#listauthorizersresponse)

### RegisterCACertificate



```js
amazonaws_iot.RegisterCACertificate({
  "caCertificate": "",
  "verificationCertificate": ""
}, context)
```

#### Input
* input `object`
  * caCertificate **required** [CertificatePem](#certificatepem)
  * registrationConfig [RegistrationConfig](#registrationconfig)
  * verificationCertificate **required** [CertificatePem](#certificatepem)

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
  * registrationConfig [RegistrationConfig](#registrationconfig)
  * removeAutoRegistration [RemoveAutoRegistration](#removeautoregistration)

#### Output
*Output schema unknown*

### ListCACertificates



```js
amazonaws_iot.ListCACertificates({}, context)
```

#### Input
* input `object`

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
  * caCertificatePem [CertificatePem](#certificatepem)
  * certificatePem **required** [CertificatePem](#certificatepem)
  * status [CertificateStatus](#certificatestatus)

#### Output
* output [RegisterCertificateResponse](#registercertificateresponse)

### ListCertificates



```js
amazonaws_iot.ListCertificates({}, context)
```

#### Input
* input `object`

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
  * certificateSigningRequest **required** [CertificateSigningRequest](#certificatesigningrequest)

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

#### Output
* output [ListCertificatesByCAResponse](#listcertificatesbycaresponse)

### ListOutgoingCertificates



```js
amazonaws_iot.ListOutgoingCertificates({}, context)
```

#### Input
* input `object`

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
  "certificateId": ""
}, context)
```

#### Input
* input `object`
  * certificateId **required** `string`

#### Output
*Output schema unknown*

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
  * authorizerName **required** [AuthorizerName](#authorizername)

#### Output
* output [SetDefaultAuthorizerResponse](#setdefaultauthorizerresponse)

### GetEffectivePolicies



```js
amazonaws_iot.GetEffectivePolicies({}, context)
```

#### Input
* input `object`
  * cognitoIdentityPoolId [CognitoIdentityPoolId](#cognitoidentitypoolid)
  * principal [Principal](#principal)

#### Output
* output [GetEffectivePoliciesResponse](#geteffectivepoliciesresponse)

### DescribeEndpoint



```js
amazonaws_iot.DescribeEndpoint({}, context)
```

#### Input
* input `object`

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
  * eventConfigurations [EventConfigurations](#eventconfigurations)

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
  * thingIndexingConfiguration [ThingIndexingConfiguration](#thingindexingconfiguration)

#### Output
* output [UpdateIndexingConfigurationResponse](#updateindexingconfigurationresponse)

### ListIndices



```js
amazonaws_iot.ListIndices({}, context)
```

#### Input
* input `object`

#### Output
* output [ListIndicesResponse](#listindicesresponse)

### SearchIndex



```js
amazonaws_iot.SearchIndex({
  "queryString": ""
}, context)
```

#### Input
* input `object`
  * indexName [IndexName](#indexname)
  * maxResults [QueryMaxResults](#querymaxresults)
  * nextToken [NextToken](#nexttoken)
  * queryString **required** [QueryString](#querystring)
  * queryVersion [QueryVersion](#queryversion)

#### Output
* output [SearchIndexResponse](#searchindexresponse)

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
  * description [JobDescription](#jobdescription)
  * document [JobDocument](#jobdocument)
  * documentParameters [JobDocumentParameters](#jobdocumentparameters)
  * documentSource [JobDocumentSource](#jobdocumentsource)
  * jobExecutionsRolloutConfig [JobExecutionsRolloutConfig](#jobexecutionsrolloutconfig)
  * presignedUrlConfig [PresignedUrlConfig](#presignedurlconfig)
  * targetSelection [TargetSelection](#targetselection)
  * targets **required** [JobTargets](#jobtargets)

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
  * comment [Comment](#comment)

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
  * comment [Comment](#comment)
  * targets **required** [JobTargets](#jobtargets)

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

#### Output
* output [ListJobExecutionsForJobResponse](#listjobexecutionsforjobresponse)

### CreateKeysAndCertificate



```js
amazonaws_iot.CreateKeysAndCertificate({}, context)
```

#### Input
* input `object`

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
  "loggingOptionsPayload": {
    "roleArn": ""
  }
}, context)
```

#### Input
* input `object`
  * loggingOptionsPayload **required** [LoggingOptionsPayload](#loggingoptionspayload)

#### Output
*Output schema unknown*

### ListOTAUpdates



```js
amazonaws_iot.ListOTAUpdates({}, context)
```

#### Input
* input `object`

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
  * additionalParameters [AdditionalParameterMap](#additionalparametermap)
  * description [OTAUpdateDescription](#otaupdatedescription)
  * files **required** [OTAUpdateFiles](#otaupdatefiles)
  * roleArn **required** [RoleArn](#rolearn)
  * targetSelection [TargetSelection](#targetselection)
  * targets **required** [Targets](#targets)

#### Output
* output [CreateOTAUpdateResponse](#createotaupdateresponse)

### ListPolicies



```js
amazonaws_iot.ListPolicies({}, context)
```

#### Input
* input `object`

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
  * policyDocument **required** [PolicyDocument](#policydocument)

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
  * policyDocument **required** [PolicyDocument](#policydocument)

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
amazonaws_iot.ListPolicyPrincipals({}, context)
```

#### Input
* input `object`

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

#### Output
* output [ListTargetsForPolicyResponse](#listtargetsforpolicyresponse)

### ListPrincipalPolicies



```js
amazonaws_iot.ListPrincipalPolicies({}, context)
```

#### Input
* input `object`

#### Output
* output [ListPrincipalPoliciesResponse](#listprincipalpoliciesresponse)

### DetachPrincipalPolicy



```js
amazonaws_iot.DetachPrincipalPolicy({
  "policyName": ""
}, context)
```

#### Input
* input `object`
  * policyName **required** `string`

#### Output
*Output schema unknown*

### AttachPrincipalPolicy



```js
amazonaws_iot.AttachPrincipalPolicy({
  "policyName": ""
}, context)
```

#### Input
* input `object`
  * policyName **required** `string`

#### Output
*Output schema unknown*

### ListPrincipalThings



```js
amazonaws_iot.ListPrincipalThings({}, context)
```

#### Input
* input `object`

#### Output
* output [ListPrincipalThingsResponse](#listprincipalthingsresponse)

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
  * rejectReason [Message](#message)

#### Output
*Output schema unknown*

### ListRoleAliases



```js
amazonaws_iot.ListRoleAliases({}, context)
```

#### Input
* input `object`

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
  * credentialDurationSeconds [CredentialDurationSeconds](#credentialdurationseconds)
  * roleArn **required** [RoleArn](#rolearn)

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
  * credentialDurationSeconds [CredentialDurationSeconds](#credentialdurationseconds)
  * roleArn [RoleArn](#rolearn)

#### Output
* output [UpdateRoleAliasResponse](#updaterolealiasresponse)

### ListTopicRules



```js
amazonaws_iot.ListTopicRules({}, context)
```

#### Input
* input `object`

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
  "topicRulePayload": {
    "sql": "",
    "actions": []
  }
}, context)
```

#### Input
* input `object`
  * ruleName **required** `string`
  * topicRulePayload **required** [TopicRulePayload](#topicrulepayload)

#### Output
*Output schema unknown*

### CreateTopicRule



```js
amazonaws_iot.CreateTopicRule({
  "ruleName": "",
  "topicRulePayload": {
    "sql": "",
    "actions": []
  }
}, context)
```

#### Input
* input `object`
  * ruleName **required** `string`
  * topicRulePayload **required** [TopicRulePayload](#topicrulepayload)

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

### ListStreams



```js
amazonaws_iot.ListStreams({}, context)
```

#### Input
* input `object`

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
  * description [StreamDescription](#streamdescription)
  * files **required** [StreamFiles](#streamfiles)
  * roleArn **required** [RoleArn](#rolearn)

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
  * description [StreamDescription](#streamdescription)
  * files [StreamFiles](#streamfiles)
  * roleArn [RoleArn](#rolearn)

#### Output
* output [UpdateStreamResponse](#updatestreamresponse)

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
  * target **required** [PolicyTarget](#policytarget)

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
  * target **required** [PolicyTarget](#policytarget)

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
  * authInfos **required** [AuthInfos](#authinfos)
  * cognitoIdentityPoolId [CognitoIdentityPoolId](#cognitoidentitypoolid)
  * policyNamesToAdd [PolicyNames](#policynames)
  * policyNamesToSkip [PolicyNames](#policynames)
  * principal [Principal](#principal)

#### Output
* output [TestAuthorizationResponse](#testauthorizationresponse)

### ListThingGroups



```js
amazonaws_iot.ListThingGroups({}, context)
```

#### Input
* input `object`

#### Output
* output [ListThingGroupsResponse](#listthinggroupsresponse)

### AddThingToThingGroup



```js
amazonaws_iot.AddThingToThingGroup({}, context)
```

#### Input
* input `object`
  * thingArn [ThingArn](#thingarn)
  * thingGroupArn [ThingGroupArn](#thinggrouparn)
  * thingGroupName [ThingGroupName](#thinggroupname)
  * thingName [ThingName](#thingname)

#### Output
* output [AddThingToThingGroupResponse](#addthingtothinggroupresponse)

### RemoveThingFromThingGroup



```js
amazonaws_iot.RemoveThingFromThingGroup({}, context)
```

#### Input
* input `object`
  * thingArn [ThingArn](#thingarn)
  * thingGroupArn [ThingGroupArn](#thinggrouparn)
  * thingGroupName [ThingGroupName](#thinggroupname)
  * thingName [ThingName](#thingname)

#### Output
* output [RemoveThingFromThingGroupResponse](#removethingfromthinggroupresponse)

### UpdateThingGroupsForThing



```js
amazonaws_iot.UpdateThingGroupsForThing({}, context)
```

#### Input
* input `object`
  * thingGroupsToAdd [ThingGroupList](#thinggrouplist)
  * thingGroupsToRemove [ThingGroupList](#thinggrouplist)
  * thingName [ThingName](#thingname)

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
  * expectedVersion [OptionalVersion](#optionalversion)
  * thingGroupProperties **required** [ThingGroupProperties](#thinggroupproperties)

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
  * parentGroupName [ThingGroupName](#thinggroupname)
  * thingGroupProperties [ThingGroupProperties](#thinggroupproperties)

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

#### Output
* output [ListThingsInThingGroupResponse](#listthingsinthinggroupresponse)

### ListThingRegistrationTasks



```js
amazonaws_iot.ListThingRegistrationTasks({}, context)
```

#### Input
* input `object`

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
  * inputFileBucket **required** [RegistryS3BucketName](#registrys3bucketname)
  * inputFileKey **required** [RegistryS3KeyName](#registrys3keyname)
  * roleArn **required** [RoleArn](#rolearn)
  * templateBody **required** [TemplateBody](#templatebody)

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
  "taskId": ""
}, context)
```

#### Input
* input `object`
  * taskId **required** `string`

#### Output
* output [ListThingRegistrationTaskReportsResponse](#listthingregistrationtaskreportsresponse)

### ListThingTypes



```js
amazonaws_iot.ListThingTypes({}, context)
```

#### Input
* input `object`

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
  * thingTypeProperties [ThingTypeProperties](#thingtypeproperties)

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
  * undoDeprecate [UndoDeprecate](#undodeprecate)

#### Output
* output [DeprecateThingTypeResponse](#deprecatethingtyperesponse)

### ListThings



```js
amazonaws_iot.ListThings({}, context)
```

#### Input
* input `object`

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
  * parameters [Parameters](#parameters)
  * templateBody **required** [TemplateBody](#templatebody)

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
  * attributePayload [AttributePayload](#attributepayload)
  * expectedVersion [OptionalVersion](#optionalversion)
  * removeThingType [RemoveThingType](#removethingtype)
  * thingTypeName [ThingTypeName](#thingtypename)

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
  * attributePayload [AttributePayload](#attributepayload)
  * thingTypeName [ThingTypeName](#thingtypename)

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
  * expectedVersion [ExpectedVersion](#expectedversion)
  * statusDetails [DetailsMap](#detailsmap)

#### Output
*Output schema unknown*

### DeleteJobExecution



```js
amazonaws_iot.DeleteJobExecution({
  "jobId": "",
  "thingName": "",
  "executionNumber": ""
}, context)
```

#### Input
* input `object`
  * jobId **required** `string`
  * thingName **required** `string`
  * executionNumber **required** `string`

#### Output
*Output schema unknown*

### DetachThingPrincipal



```js
amazonaws_iot.DetachThingPrincipal({
  "thingName": ""
}, context)
```

#### Input
* input `object`
  * thingName **required** `string`

#### Output
* output [DetachThingPrincipalResponse](#detachthingprincipalresponse)

### ListThingPrincipals



```js
amazonaws_iot.ListThingPrincipals({
  "thingName": ""
}, context)
```

#### Input
* input `object`
  * thingName **required** `string`

#### Output
* output [ListThingPrincipalsResponse](#listthingprincipalsresponse)

### AttachThingPrincipal



```js
amazonaws_iot.AttachThingPrincipal({
  "thingName": ""
}, context)
```

#### Input
* input `object`
  * thingName **required** `string`

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

#### Output
* output [ListThingGroupsForThingResponse](#listthinggroupsforthingresponse)

### TransferCertificate



```js
amazonaws_iot.TransferCertificate({
  "certificateId": ""
}, context)
```

#### Input
* input `object`
  * certificateId **required** `string`
  * transferMessage [Message](#message)

#### Output
* output [TransferCertificateResponse](#transfercertificateresponse)

### DeleteV2LoggingLevel



```js
amazonaws_iot.DeleteV2LoggingLevel({}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### ListV2LoggingLevels



```js
amazonaws_iot.ListV2LoggingLevels({}, context)
```

#### Input
* input `object`

#### Output
* output [ListV2LoggingLevelsResponse](#listv2logginglevelsresponse)

### SetV2LoggingLevel



```js
amazonaws_iot.SetV2LoggingLevel({
  "logTarget": {
    "targetType": ""
  },
  "logLevel": ""
}, context)
```

#### Input
* input `object`
  * logLevel **required** [LogLevel](#loglevel)
  * logTarget **required** [LogTarget](#logtarget)

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
  * defaultLogLevel [LogLevel](#loglevel)
  * disableAllLogs [DisableAllLogs](#disablealllogs)
  * roleArn [AwsArn](#awsarn)

#### Output
*Output schema unknown*



## Definitions

### AcceptCertificateTransferRequest
* AcceptCertificateTransferRequest `object`: The input for the AcceptCertificateTransfer operation.

### Action
* Action `object`: Describes the actions associated with a rule.
  * cloudwatchAlarm [CloudwatchAlarmAction](#cloudwatchalarmaction)
  * cloudwatchMetric [CloudwatchMetricAction](#cloudwatchmetricaction)
  * dynamoDB [DynamoDBAction](#dynamodbaction)
  * dynamoDBv2 [DynamoDBv2Action](#dynamodbv2action)
  * elasticsearch [ElasticsearchAction](#elasticsearchaction)
  * firehose [FirehoseAction](#firehoseaction)
  * iotAnalytics [IotAnalyticsAction](#iotanalyticsaction)
  * kinesis [KinesisAction](#kinesisaction)
  * lambda [LambdaAction](#lambdaaction)
  * republish [RepublishAction](#republishaction)
  * s3 [S3Action](#s3action)
  * salesforce [SalesforceAction](#salesforceaction)
  * sns [SnsAction](#snsaction)
  * sqs [SqsAction](#sqsaction)

### ActionList
* ActionList `array`
  * items [Action](#action)

### ActionType
* ActionType `string` (values: PUBLISH, SUBSCRIBE, RECEIVE, CONNECT)

### AddThingToThingGroupRequest
* AddThingToThingGroupRequest `object`
  * thingArn [ThingArn](#thingarn)
  * thingGroupArn [ThingGroupArn](#thinggrouparn)
  * thingGroupName [ThingGroupName](#thinggroupname)
  * thingName [ThingName](#thingname)

### AddThingToThingGroupResponse
* AddThingToThingGroupResponse `object`

### AdditionalParameterMap
* AdditionalParameterMap `array`
  * items `object`
    * key [Key](#key)
    * value [Value](#value)

### AlarmName
* AlarmName `string`

### AllowAutoRegistration
* AllowAutoRegistration `boolean`

### Allowed
* Allowed `object`: Contains information that allowed the authorization.
  * policies [Policies](#policies)

### AscendingOrder
* AscendingOrder `boolean`

### AssociateTargetsWithJobRequest
* AssociateTargetsWithJobRequest `object`
  * comment [Comment](#comment)
  * targets **required** [JobTargets](#jobtargets)

### AssociateTargetsWithJobResponse
* AssociateTargetsWithJobResponse `object`
  * description [JobDescription](#jobdescription)
  * jobArn [JobArn](#jobarn)
  * jobId [JobId](#jobid)

### AttachPolicyRequest
* AttachPolicyRequest `object`
  * target **required** [PolicyTarget](#policytarget)

### AttachPrincipalPolicyRequest
* AttachPrincipalPolicyRequest `object`: The input for the AttachPrincipalPolicy operation.

### AttachThingPrincipalRequest
* AttachThingPrincipalRequest `object`: The input for the AttachThingPrincipal operation.

### AttachThingPrincipalResponse
* AttachThingPrincipalResponse `object`: The output from the AttachThingPrincipal operation.

### AttributeName
* AttributeName `string`

### AttributePayload
* AttributePayload `object`: The attribute payload.
  * attributes [Attributes](#attributes)
  * merge [Flag](#flag)

### AttributeValue
* AttributeValue `string`

### Attributes
* Attributes `array`
  * items `object`
    * key [AttributeName](#attributename)
    * value [AttributeValue](#attributevalue)

### AttributesMap
* AttributesMap `array`
  * items `object`
    * key [Key](#key)
    * value [Value](#value)

### AuthDecision
* AuthDecision `string` (values: ALLOWED, EXPLICIT_DENY, IMPLICIT_DENY)

### AuthInfo
* AuthInfo `object`: A collection of authorization information.
  * actionType [ActionType](#actiontype)
  * resources [Resources](#resources)

### AuthInfos
* AuthInfos `array`
  * items [AuthInfo](#authinfo)

### AuthResult
* AuthResult `object`: The authorizer result.
  * allowed [Allowed](#allowed)
  * authDecision [AuthDecision](#authdecision)
  * authInfo [AuthInfo](#authinfo)
  * denied [Denied](#denied)
  * missingContextValues [MissingContextValues](#missingcontextvalues)

### AuthResults
* AuthResults `array`
  * items [AuthResult](#authresult)

### AuthorizerArn
* AuthorizerArn `string`

### AuthorizerDescription
* AuthorizerDescription `object`: The authorizer description.
  * authorizerArn [AuthorizerArn](#authorizerarn)
  * authorizerFunctionArn [AuthorizerFunctionArn](#authorizerfunctionarn)
  * authorizerName [AuthorizerName](#authorizername)
  * creationDate [DateType](#datetype)
  * lastModifiedDate [DateType](#datetype)
  * status [AuthorizerStatus](#authorizerstatus)
  * tokenKeyName [TokenKeyName](#tokenkeyname)
  * tokenSigningPublicKeys [PublicKeyMap](#publickeymap)

### AuthorizerFunctionArn
* AuthorizerFunctionArn `string`

### AuthorizerName
* AuthorizerName `string`

### AuthorizerStatus
* AuthorizerStatus `string` (values: ACTIVE, INACTIVE)

### AuthorizerSummary
* AuthorizerSummary `object`: The authorizer summary.
  * authorizerArn [AuthorizerArn](#authorizerarn)
  * authorizerName [AuthorizerName](#authorizername)

### Authorizers
* Authorizers `array`
  * items [AuthorizerSummary](#authorizersummary)

### AutoRegistrationStatus
* AutoRegistrationStatus `string` (values: ENABLE, DISABLE)

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

### Boolean
* Boolean `boolean`

### BucketName
* BucketName `string`

### CACertificate
* CACertificate `object`: A CA certificate.
  * certificateArn [CertificateArn](#certificatearn)
  * certificateId [CertificateId](#certificateid)
  * creationDate [DateType](#datetype)
  * status [CACertificateStatus](#cacertificatestatus)

### CACertificateDescription
* CACertificateDescription `object`: Describes a CA certificate.
  * autoRegistrationStatus [AutoRegistrationStatus](#autoregistrationstatus)
  * certificateArn [CertificateArn](#certificatearn)
  * certificateId [CertificateId](#certificateid)
  * certificatePem [CertificatePem](#certificatepem)
  * creationDate [DateType](#datetype)
  * customerVersion [CustomerVersion](#customerversion)
  * generationId [GenerationId](#generationid)
  * lastModifiedDate [DateType](#datetype)
  * ownedBy [AwsAccountId](#awsaccountid)
  * status [CACertificateStatus](#cacertificatestatus)

### CACertificateStatus
* CACertificateStatus `string` (values: ACTIVE, INACTIVE)

### CACertificates
* CACertificates `array`
  * items [CACertificate](#cacertificate)

### CancelCertificateTransferRequest
* CancelCertificateTransferRequest `object`: The input for the CancelCertificateTransfer operation.

### CancelJobExecutionRequest
* CancelJobExecutionRequest `object`
  * expectedVersion [ExpectedVersion](#expectedversion)
  * statusDetails [DetailsMap](#detailsmap)

### CancelJobRequest
* CancelJobRequest `object`
  * comment [Comment](#comment)

### CancelJobResponse
* CancelJobResponse `object`
  * description [JobDescription](#jobdescription)
  * jobArn [JobArn](#jobarn)
  * jobId [JobId](#jobid)

### CanceledThings
* CanceledThings `integer`

### CannedAccessControlList
* CannedAccessControlList `string` (values: private, public-read, public-read-write, aws-exec-read, authenticated-read, bucket-owner-read, bucket-owner-full-control, log-delivery-write)

### Certificate
* Certificate `object`: Information about a certificate.
  * certificateArn [CertificateArn](#certificatearn)
  * certificateId [CertificateId](#certificateid)
  * creationDate [DateType](#datetype)
  * status [CertificateStatus](#certificatestatus)

### CertificateArn
* CertificateArn `string`

### CertificateConflictException
* CertificateConflictException `object`: Unable to verify the CA certificate used to sign the device certificate you are attempting to register. This is happens when you have registered more than one CA certificate that has the same subject field and public key.
  * message [errorMessage](#errormessage)

### CertificateDescription
* CertificateDescription `object`: Describes a certificate.
  * caCertificateId [CertificateId](#certificateid)
  * certificateArn [CertificateArn](#certificatearn)
  * certificateId [CertificateId](#certificateid)
  * certificatePem [CertificatePem](#certificatepem)
  * creationDate [DateType](#datetype)
  * customerVersion [CustomerVersion](#customerversion)
  * generationId [GenerationId](#generationid)
  * lastModifiedDate [DateType](#datetype)
  * ownedBy [AwsAccountId](#awsaccountid)
  * previousOwnedBy [AwsAccountId](#awsaccountid)
  * status [CertificateStatus](#certificatestatus)
  * transferData [TransferData](#transferdata)

### CertificateId
* CertificateId `string`

### CertificateName
* CertificateName `string`

### CertificatePem
* CertificatePem `string`: The PEM of a certificate.

### CertificateSigningRequest
* CertificateSigningRequest `string`

### CertificateStateException
* CertificateStateException `object`: The certificate operation is not allowed.
  * message [errorMessage](#errormessage)

### CertificateStatus
* CertificateStatus `string` (values: ACTIVE, INACTIVE, REVOKED, PENDING_TRANSFER, REGISTER_INACTIVE, PENDING_ACTIVATION)

### CertificateValidationException
* CertificateValidationException `object`: The certificate is invalid.
  * message [errorMessage](#errormessage)

### Certificates
* Certificates `array`
  * items [Certificate](#certificate)

### ChannelName
* ChannelName `string`

### ClearDefaultAuthorizerRequest
* ClearDefaultAuthorizerRequest `object`

### ClearDefaultAuthorizerResponse
* ClearDefaultAuthorizerResponse `object`

### ClientId
* ClientId `string`

### CloudwatchAlarmAction
* CloudwatchAlarmAction `object`: Describes an action that updates a CloudWatch alarm.
  * alarmName **required** [AlarmName](#alarmname)
  * roleArn **required** [AwsArn](#awsarn)
  * stateReason **required** [StateReason](#statereason)
  * stateValue **required** [StateValue](#statevalue)

### CloudwatchMetricAction
* CloudwatchMetricAction `object`: Describes an action that captures a CloudWatch metric.
  * metricName **required** [MetricName](#metricname)
  * metricNamespace **required** [MetricNamespace](#metricnamespace)
  * metricTimestamp [MetricTimestamp](#metrictimestamp)
  * metricUnit **required** [MetricUnit](#metricunit)
  * metricValue **required** [MetricValue](#metricvalue)
  * roleArn **required** [AwsArn](#awsarn)

### Code
* Code `string`

### CodeSigning
* CodeSigning `object`: Describes the method to use when code signing a file.
  * awsSignerJobId [SigningJobId](#signingjobid)
  * customCodeSigning [CustomCodeSigning](#customcodesigning)

### CodeSigningCertificateChain
* CodeSigningCertificateChain `object`: Describes the certificate chain being used when code signing a file.
  * certificateName [CertificateName](#certificatename)
  * inlineDocument [InlineDocument](#inlinedocument)
  * stream [Stream](#stream)

### CodeSigningSignature
* CodeSigningSignature `object`: Describes the signature for a file.
  * inlineDocument [Signature](#signature)
  * stream [Stream](#stream)

### CognitoIdentityPoolId
* CognitoIdentityPoolId `string`

### Comment
* Comment `string`

### Configuration
* Configuration `object`: Configuration.
  * Enabled [Enabled](#enabled)

### ConflictingResourceUpdateException
* ConflictingResourceUpdateException `object`: A conflicting resource update exception. This exception is thrown when two pending updates cause a conflict.
  * message [errorMessage](#errormessage)

### Count
* Count `integer`

### CreateAuthorizerRequest
* CreateAuthorizerRequest `object`
  * authorizerFunctionArn **required** [AuthorizerFunctionArn](#authorizerfunctionarn)
  * status [AuthorizerStatus](#authorizerstatus)
  * tokenKeyName **required** [TokenKeyName](#tokenkeyname)
  * tokenSigningPublicKeys **required** [PublicKeyMap](#publickeymap)

### CreateAuthorizerResponse
* CreateAuthorizerResponse `object`
  * authorizerArn [AuthorizerArn](#authorizerarn)
  * authorizerName [AuthorizerName](#authorizername)

### CreateCertificateFromCsrRequest
* CreateCertificateFromCsrRequest `object`: The input for the CreateCertificateFromCsr operation.
  * certificateSigningRequest **required** [CertificateSigningRequest](#certificatesigningrequest)

### CreateCertificateFromCsrResponse
* CreateCertificateFromCsrResponse `object`: The output from the CreateCertificateFromCsr operation.
  * certificateArn [CertificateArn](#certificatearn)
  * certificateId [CertificateId](#certificateid)
  * certificatePem [CertificatePem](#certificatepem)

### CreateJobRequest
* CreateJobRequest `object`
  * description [JobDescription](#jobdescription)
  * document [JobDocument](#jobdocument)
  * documentParameters [JobDocumentParameters](#jobdocumentparameters)
  * documentSource [JobDocumentSource](#jobdocumentsource)
  * jobExecutionsRolloutConfig [JobExecutionsRolloutConfig](#jobexecutionsrolloutconfig)
  * presignedUrlConfig [PresignedUrlConfig](#presignedurlconfig)
  * targetSelection [TargetSelection](#targetselection)
  * targets **required** [JobTargets](#jobtargets)

### CreateJobResponse
* CreateJobResponse `object`
  * description [JobDescription](#jobdescription)
  * jobArn [JobArn](#jobarn)
  * jobId [JobId](#jobid)

### CreateKeysAndCertificateRequest
* CreateKeysAndCertificateRequest `object`: The input for the CreateKeysAndCertificate operation.

### CreateKeysAndCertificateResponse
* CreateKeysAndCertificateResponse `object`: The output of the CreateKeysAndCertificate operation.
  * certificateArn [CertificateArn](#certificatearn)
  * certificateId [CertificateId](#certificateid)
  * certificatePem [CertificatePem](#certificatepem)
  * keyPair [KeyPair](#keypair)

### CreateOTAUpdateRequest
* CreateOTAUpdateRequest `object`
  * additionalParameters [AdditionalParameterMap](#additionalparametermap)
  * description [OTAUpdateDescription](#otaupdatedescription)
  * files **required** [OTAUpdateFiles](#otaupdatefiles)
  * roleArn **required** [RoleArn](#rolearn)
  * targetSelection [TargetSelection](#targetselection)
  * targets **required** [Targets](#targets)

### CreateOTAUpdateResponse
* CreateOTAUpdateResponse `object`
  * awsIotJobArn [AwsIotJobArn](#awsiotjobarn)
  * awsIotJobId [AwsIotJobId](#awsiotjobid)
  * otaUpdateArn [OTAUpdateArn](#otaupdatearn)
  * otaUpdateId [OTAUpdateId](#otaupdateid)
  * otaUpdateStatus [OTAUpdateStatus](#otaupdatestatus)

### CreatePolicyRequest
* CreatePolicyRequest `object`: The input for the CreatePolicy operation.
  * policyDocument **required** [PolicyDocument](#policydocument)

### CreatePolicyResponse
* CreatePolicyResponse `object`: The output from the CreatePolicy operation.
  * policyArn [PolicyArn](#policyarn)
  * policyDocument [PolicyDocument](#policydocument)
  * policyName [PolicyName](#policyname)
  * policyVersionId [PolicyVersionId](#policyversionid)

### CreatePolicyVersionRequest
* CreatePolicyVersionRequest `object`: The input for the CreatePolicyVersion operation.
  * policyDocument **required** [PolicyDocument](#policydocument)

### CreatePolicyVersionResponse
* CreatePolicyVersionResponse `object`: The output of the CreatePolicyVersion operation.
  * isDefaultVersion [IsDefaultVersion](#isdefaultversion)
  * policyArn [PolicyArn](#policyarn)
  * policyDocument [PolicyDocument](#policydocument)
  * policyVersionId [PolicyVersionId](#policyversionid)

### CreateRoleAliasRequest
* CreateRoleAliasRequest `object`
  * credentialDurationSeconds [CredentialDurationSeconds](#credentialdurationseconds)
  * roleArn **required** [RoleArn](#rolearn)

### CreateRoleAliasResponse
* CreateRoleAliasResponse `object`
  * roleAlias [RoleAlias](#rolealias)
  * roleAliasArn [RoleAliasArn](#rolealiasarn)

### CreateStreamRequest
* CreateStreamRequest `object`
  * description [StreamDescription](#streamdescription)
  * files **required** [StreamFiles](#streamfiles)
  * roleArn **required** [RoleArn](#rolearn)

### CreateStreamResponse
* CreateStreamResponse `object`
  * description [StreamDescription](#streamdescription)
  * streamArn [StreamArn](#streamarn)
  * streamId [StreamId](#streamid)
  * streamVersion [StreamVersion](#streamversion)

### CreateThingGroupRequest
* CreateThingGroupRequest `object`
  * parentGroupName [ThingGroupName](#thinggroupname)
  * thingGroupProperties [ThingGroupProperties](#thinggroupproperties)

### CreateThingGroupResponse
* CreateThingGroupResponse `object`
  * thingGroupArn [ThingGroupArn](#thinggrouparn)
  * thingGroupId [ThingGroupId](#thinggroupid)
  * thingGroupName [ThingGroupName](#thinggroupname)

### CreateThingRequest
* CreateThingRequest `object`: The input for the CreateThing operation.
  * attributePayload [AttributePayload](#attributepayload)
  * thingTypeName [ThingTypeName](#thingtypename)

### CreateThingResponse
* CreateThingResponse `object`: The output of the CreateThing operation.
  * thingArn [ThingArn](#thingarn)
  * thingId [ThingId](#thingid)
  * thingName [ThingName](#thingname)

### CreateThingTypeRequest
* CreateThingTypeRequest `object`: The input for the CreateThingType operation.
  * thingTypeProperties [ThingTypeProperties](#thingtypeproperties)

### CreateThingTypeResponse
* CreateThingTypeResponse `object`: The output of the CreateThingType operation.
  * thingTypeArn [ThingTypeArn](#thingtypearn)
  * thingTypeId [ThingTypeId](#thingtypeid)
  * thingTypeName [ThingTypeName](#thingtypename)

### CreateTopicRuleRequest
* CreateTopicRuleRequest `object`: The input for the CreateTopicRule operation.
  * topicRulePayload **required** [TopicRulePayload](#topicrulepayload)

### CreatedAtDate
* CreatedAtDate `string`

### CreationDate
* CreationDate `string`

### CredentialDurationSeconds
* CredentialDurationSeconds `integer`

### CustomCodeSigning
* CustomCodeSigning `object`: Describes a custom method used to code sign a file.
  * certificateChain [CodeSigningCertificateChain](#codesigningcertificatechain)
  * hashAlgorithm [HashAlgorithm](#hashalgorithm)
  * signature [CodeSigningSignature](#codesigningsignature)
  * signatureAlgorithm [SignatureAlgorithm](#signaturealgorithm)

### CustomerVersion
* CustomerVersion `integer`

### DateType
* DateType `string`

### DeleteAuthorizerRequest
* DeleteAuthorizerRequest `object`

### DeleteAuthorizerResponse
* DeleteAuthorizerResponse `object`

### DeleteCACertificateRequest
* DeleteCACertificateRequest `object`: Input for the DeleteCACertificate operation.

### DeleteCACertificateResponse
* DeleteCACertificateResponse `object`: The output for the DeleteCACertificate operation.

### DeleteCertificateRequest
* DeleteCertificateRequest `object`: The input for the DeleteCertificate operation.

### DeleteConflictException
* DeleteConflictException `object`: You can't delete the resource because it is attached to one or more resources.
  * message [errorMessage](#errormessage)

### DeleteJobExecutionRequest
* DeleteJobExecutionRequest `object`

### DeleteJobRequest
* DeleteJobRequest `object`

### DeleteOTAUpdateRequest
* DeleteOTAUpdateRequest `object`

### DeleteOTAUpdateResponse
* DeleteOTAUpdateResponse `object`

### DeletePolicyRequest
* DeletePolicyRequest `object`: The input for the DeletePolicy operation.

### DeletePolicyVersionRequest
* DeletePolicyVersionRequest `object`: The input for the DeletePolicyVersion operation.

### DeleteRegistrationCodeRequest
* DeleteRegistrationCodeRequest `object`: The input for the DeleteRegistrationCode operation.

### DeleteRegistrationCodeResponse
* DeleteRegistrationCodeResponse `object`: The output for the DeleteRegistrationCode operation.

### DeleteRoleAliasRequest
* DeleteRoleAliasRequest `object`

### DeleteRoleAliasResponse
* DeleteRoleAliasResponse `object`

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

### DeleteTopicRuleRequest
* DeleteTopicRuleRequest `object`: The input for the DeleteTopicRule operation.

### DeleteV2LoggingLevelRequest
* DeleteV2LoggingLevelRequest `object`

### DeliveryStreamName
* DeliveryStreamName `string`

### Denied
* Denied `object`: Contains information that denied the authorization.
  * explicitDeny [ExplicitDeny](#explicitdeny)
  * implicitDeny [ImplicitDeny](#implicitdeny)

### DeprecateThingTypeRequest
* DeprecateThingTypeRequest `object`: The input for the DeprecateThingType operation.
  * undoDeprecate [UndoDeprecate](#undodeprecate)

### DeprecateThingTypeResponse
* DeprecateThingTypeResponse `object`: The output for the DeprecateThingType operation.

### DeprecationDate
* DeprecationDate `string`

### DescribeAuthorizerRequest
* DescribeAuthorizerRequest `object`

### DescribeAuthorizerResponse
* DescribeAuthorizerResponse `object`
  * authorizerDescription [AuthorizerDescription](#authorizerdescription)

### DescribeCACertificateRequest
* DescribeCACertificateRequest `object`: The input for the DescribeCACertificate operation.

### DescribeCACertificateResponse
* DescribeCACertificateResponse `object`: The output from the DescribeCACertificate operation.
  * certificateDescription [CACertificateDescription](#cacertificatedescription)
  * registrationConfig [RegistrationConfig](#registrationconfig)

### DescribeCertificateRequest
* DescribeCertificateRequest `object`: The input for the DescribeCertificate operation.

### DescribeCertificateResponse
* DescribeCertificateResponse `object`: The output of the DescribeCertificate operation.
  * certificateDescription [CertificateDescription](#certificatedescription)

### DescribeDefaultAuthorizerRequest
* DescribeDefaultAuthorizerRequest `object`

### DescribeDefaultAuthorizerResponse
* DescribeDefaultAuthorizerResponse `object`
  * authorizerDescription [AuthorizerDescription](#authorizerdescription)

### DescribeEndpointRequest
* DescribeEndpointRequest `object`: The input for the DescribeEndpoint operation.

### DescribeEndpointResponse
* DescribeEndpointResponse `object`: The output from the DescribeEndpoint operation.
  * endpointAddress [EndpointAddress](#endpointaddress)

### DescribeEventConfigurationsRequest
* DescribeEventConfigurationsRequest `object`

### DescribeEventConfigurationsResponse
* DescribeEventConfigurationsResponse `object`
  * creationDate [CreationDate](#creationdate)
  * eventConfigurations [EventConfigurations](#eventconfigurations)
  * lastModifiedDate [LastModifiedDate](#lastmodifieddate)

### DescribeIndexRequest
* DescribeIndexRequest `object`

### DescribeIndexResponse
* DescribeIndexResponse `object`
  * indexName [IndexName](#indexname)
  * indexStatus [IndexStatus](#indexstatus)
  * schema [IndexSchema](#indexschema)

### DescribeJobExecutionRequest
* DescribeJobExecutionRequest `object`

### DescribeJobExecutionResponse
* DescribeJobExecutionResponse `object`
  * execution [JobExecution](#jobexecution)

### DescribeJobRequest
* DescribeJobRequest `object`

### DescribeJobResponse
* DescribeJobResponse `object`
  * documentSource [JobDocumentSource](#jobdocumentsource)
  * job [Job](#job)

### DescribeRoleAliasRequest
* DescribeRoleAliasRequest `object`

### DescribeRoleAliasResponse
* DescribeRoleAliasResponse `object`
  * roleAliasDescription [RoleAliasDescription](#rolealiasdescription)

### DescribeStreamRequest
* DescribeStreamRequest `object`

### DescribeStreamResponse
* DescribeStreamResponse `object`
  * streamInfo [StreamInfo](#streaminfo)

### DescribeThingGroupRequest
* DescribeThingGroupRequest `object`

### DescribeThingGroupResponse
* DescribeThingGroupResponse `object`
  * thingGroupArn [ThingGroupArn](#thinggrouparn)
  * thingGroupId [ThingGroupId](#thinggroupid)
  * thingGroupMetadata [ThingGroupMetadata](#thinggroupmetadata)
  * thingGroupName [ThingGroupName](#thinggroupname)
  * thingGroupProperties [ThingGroupProperties](#thinggroupproperties)
  * version [Version](#version)

### DescribeThingRegistrationTaskRequest
* DescribeThingRegistrationTaskRequest `object`

### DescribeThingRegistrationTaskResponse
* DescribeThingRegistrationTaskResponse `object`
  * creationDate [CreationDate](#creationdate)
  * failureCount [Count](#count)
  * inputFileBucket [RegistryS3BucketName](#registrys3bucketname)
  * inputFileKey [RegistryS3KeyName](#registrys3keyname)
  * lastModifiedDate [LastModifiedDate](#lastmodifieddate)
  * message [ErrorMessage](#errormessage)
  * percentageProgress [Percentage](#percentage)
  * roleArn [RoleArn](#rolearn)
  * status [Status](#status)
  * successCount [Count](#count)
  * taskId [TaskId](#taskid)
  * templateBody [TemplateBody](#templatebody)

### DescribeThingRequest
* DescribeThingRequest `object`: The input for the DescribeThing operation.

### DescribeThingResponse
* DescribeThingResponse `object`: The output from the DescribeThing operation.
  * attributes [Attributes](#attributes)
  * defaultClientId [ClientId](#clientid)
  * thingArn [ThingArn](#thingarn)
  * thingId [ThingId](#thingid)
  * thingName [ThingName](#thingname)
  * thingTypeName [ThingTypeName](#thingtypename)
  * version [Version](#version)

### DescribeThingTypeRequest
* DescribeThingTypeRequest `object`: The input for the DescribeThingType operation.

### DescribeThingTypeResponse
* DescribeThingTypeResponse `object`: The output for the DescribeThingType operation.
  * thingTypeArn [ThingTypeArn](#thingtypearn)
  * thingTypeId [ThingTypeId](#thingtypeid)
  * thingTypeMetadata [ThingTypeMetadata](#thingtypemetadata)
  * thingTypeName [ThingTypeName](#thingtypename)
  * thingTypeProperties [ThingTypeProperties](#thingtypeproperties)

### Description
* Description `string`

### DetachPolicyRequest
* DetachPolicyRequest `object`
  * target **required** [PolicyTarget](#policytarget)

### DetachPrincipalPolicyRequest
* DetachPrincipalPolicyRequest `object`: The input for the DetachPrincipalPolicy operation.

### DetachThingPrincipalRequest
* DetachThingPrincipalRequest `object`: The input for the DetachThingPrincipal operation.

### DetachThingPrincipalResponse
* DetachThingPrincipalResponse `object`: The output from the DetachThingPrincipal operation.

### DetailsKey
* DetailsKey `string`

### DetailsMap
* DetailsMap `array`
  * items `object`
    * key [DetailsKey](#detailskey)
    * value [DetailsValue](#detailsvalue)

### DetailsValue
* DetailsValue `string`

### DisableAllLogs
* DisableAllLogs `boolean`

### DisableTopicRuleRequest
* DisableTopicRuleRequest `object`: The input for the DisableTopicRuleRequest operation.

### DynamoDBAction
* DynamoDBAction `object`: <p>Describes an action to write to a DynamoDB table.</p> <p>The <code>tableName</code>, <code>hashKeyField</code>, and <code>rangeKeyField</code> values must match the values used when you created the table.</p> <p>The <code>hashKeyValue</code> and <code>rangeKeyvalue</code> fields use a substitution template syntax. These templates provide data at runtime. The syntax is as follows: ${<i>sql-expression</i>}.</p> <p>You can specify any valid expression in a WHERE or SELECT clause, including JSON properties, comparisons, calculations, and functions. For example, the following field uses the third level of the topic:</p> <p> <code>"hashKeyValue": "${topic(3)}"</code> </p> <p>The following field uses the timestamp:</p> <p> <code>"rangeKeyValue": "${timestamp()}"</code> </p>
  * hashKeyField **required** [HashKeyField](#hashkeyfield)
  * hashKeyType [DynamoKeyType](#dynamokeytype)
  * hashKeyValue **required** [HashKeyValue](#hashkeyvalue)
  * operation [DynamoOperation](#dynamooperation)
  * payloadField [PayloadField](#payloadfield)
  * rangeKeyField [RangeKeyField](#rangekeyfield)
  * rangeKeyType [DynamoKeyType](#dynamokeytype)
  * rangeKeyValue [RangeKeyValue](#rangekeyvalue)
  * roleArn **required** [AwsArn](#awsarn)
  * tableName **required** [TableName](#tablename)

### DynamoDBv2Action
* DynamoDBv2Action `object`: <p>Describes an action to write to a DynamoDB table.</p> <p>This DynamoDB action writes each attribute in the message payload into it's own column in the DynamoDB table.</p>
  * putItem [PutItemInput](#putiteminput)
  * roleArn [AwsArn](#awsarn)

### DynamoKeyType
* DynamoKeyType `string` (values: STRING, NUMBER)

### DynamoOperation
* DynamoOperation `string`

### EffectivePolicies
* EffectivePolicies `array`
  * items [EffectivePolicy](#effectivepolicy)

### EffectivePolicy
* EffectivePolicy `object`: The policy that has the effect on the authorization results.
  * policyArn [PolicyArn](#policyarn)
  * policyDocument [PolicyDocument](#policydocument)
  * policyName [PolicyName](#policyname)

### ElasticsearchAction
* ElasticsearchAction `object`: Describes an action that writes data to an Amazon Elasticsearch Service domain.
  * endpoint **required** [ElasticsearchEndpoint](#elasticsearchendpoint)
  * id **required** [ElasticsearchId](#elasticsearchid)
  * index **required** [ElasticsearchIndex](#elasticsearchindex)
  * roleArn **required** [AwsArn](#awsarn)
  * type **required** [ElasticsearchType](#elasticsearchtype)

### ElasticsearchEndpoint
* ElasticsearchEndpoint `string`

### ElasticsearchId
* ElasticsearchId `string`

### ElasticsearchIndex
* ElasticsearchIndex `string`

### ElasticsearchType
* ElasticsearchType `string`

### EnableTopicRuleRequest
* EnableTopicRuleRequest `object`: The input for the EnableTopicRuleRequest operation.

### Enabled
* Enabled `boolean`

### EndpointAddress
* EndpointAddress `string`

### EndpointType
* EndpointType `string`

### ErrorInfo
* ErrorInfo `object`: Error information.
  * code [Code](#code)
  * message [OTAUpdateErrorMessage](#otaupdateerrormessage)

### ErrorMessage
* ErrorMessage `string`

### EventConfigurations
* EventConfigurations `array`
  * items `object`
    * key [EventType](#eventtype)
    * value [Configuration](#configuration)

### EventType
* EventType `string` (values: THING, THING_GROUP, THING_TYPE, THING_GROUP_MEMBERSHIP, THING_GROUP_HIERARCHY, THING_TYPE_ASSOCIATION, JOB, JOB_EXECUTION)

### ExecutionNumber
* ExecutionNumber `integer`

### ExpectedVersion
* ExpectedVersion `integer`

### ExpiresInSec
* ExpiresInSec `integer`

### ExplicitDeny
* ExplicitDeny `object`: Information that explicitly denies authorization.
  * policies [Policies](#policies)

### FailedThings
* FailedThings `integer`

### FileId
* FileId `integer`

### FileName
* FileName `string`

### FirehoseAction
* FirehoseAction `object`: Describes an action that writes data to an Amazon Kinesis Firehose stream.
  * deliveryStreamName **required** [DeliveryStreamName](#deliverystreamname)
  * roleArn **required** [AwsArn](#awsarn)
  * separator [FirehoseSeparator](#firehoseseparator)

### FirehoseSeparator
* FirehoseSeparator `string`

### Flag
* Flag `boolean`

### ForceDelete
* ForceDelete `boolean`

### ForceFlag
* ForceFlag `boolean`

### Forced
* Forced `boolean`

### FunctionArn
* FunctionArn `string`

### GEMaxResults
* GEMaxResults `integer`

### GenerationId
* GenerationId `string`

### GetEffectivePoliciesRequest
* GetEffectivePoliciesRequest `object`
  * cognitoIdentityPoolId [CognitoIdentityPoolId](#cognitoidentitypoolid)
  * principal [Principal](#principal)

### GetEffectivePoliciesResponse
* GetEffectivePoliciesResponse `object`
  * effectivePolicies [EffectivePolicies](#effectivepolicies)

### GetIndexingConfigurationRequest
* GetIndexingConfigurationRequest `object`

### GetIndexingConfigurationResponse
* GetIndexingConfigurationResponse `object`
  * thingIndexingConfiguration [ThingIndexingConfiguration](#thingindexingconfiguration)

### GetJobDocumentRequest
* GetJobDocumentRequest `object`

### GetJobDocumentResponse
* GetJobDocumentResponse `object`
  * document [JobDocument](#jobdocument)

### GetLoggingOptionsRequest
* GetLoggingOptionsRequest `object`: The input for the GetLoggingOptions operation.

### GetLoggingOptionsResponse
* GetLoggingOptionsResponse `object`: The output from the GetLoggingOptions operation.
  * logLevel [LogLevel](#loglevel)
  * roleArn [AwsArn](#awsarn)

### GetOTAUpdateRequest
* GetOTAUpdateRequest `object`

### GetOTAUpdateResponse
* GetOTAUpdateResponse `object`
  * otaUpdateInfo [OTAUpdateInfo](#otaupdateinfo)

### GetPolicyRequest
* GetPolicyRequest `object`: The input for the GetPolicy operation.

### GetPolicyResponse
* GetPolicyResponse `object`: The output from the GetPolicy operation.
  * creationDate [DateType](#datetype)
  * defaultVersionId [PolicyVersionId](#policyversionid)
  * generationId [GenerationId](#generationid)
  * lastModifiedDate [DateType](#datetype)
  * policyArn [PolicyArn](#policyarn)
  * policyDocument [PolicyDocument](#policydocument)
  * policyName [PolicyName](#policyname)

### GetPolicyVersionRequest
* GetPolicyVersionRequest `object`: The input for the GetPolicyVersion operation.

### GetPolicyVersionResponse
* GetPolicyVersionResponse `object`: The output from the GetPolicyVersion operation.
  * creationDate [DateType](#datetype)
  * generationId [GenerationId](#generationid)
  * isDefaultVersion [IsDefaultVersion](#isdefaultversion)
  * lastModifiedDate [DateType](#datetype)
  * policyArn [PolicyArn](#policyarn)
  * policyDocument [PolicyDocument](#policydocument)
  * policyName [PolicyName](#policyname)
  * policyVersionId [PolicyVersionId](#policyversionid)

### GetRegistrationCodeRequest
* GetRegistrationCodeRequest `object`: The input to the GetRegistrationCode operation.

### GetRegistrationCodeResponse
* GetRegistrationCodeResponse `object`: The output from the GetRegistrationCode operation.
  * registrationCode [RegistrationCode](#registrationcode)

### GetTopicRuleRequest
* GetTopicRuleRequest `object`: The input for the GetTopicRule operation.

### GetTopicRuleResponse
* GetTopicRuleResponse `object`: The output from the GetTopicRule operation.
  * rule [TopicRule](#topicrule)
  * ruleArn [RuleArn](#rulearn)

### GetV2LoggingOptionsRequest
* GetV2LoggingOptionsRequest `object`

### GetV2LoggingOptionsResponse
* GetV2LoggingOptionsResponse `object`
  * defaultLogLevel [LogLevel](#loglevel)
  * disableAllLogs [DisableAllLogs](#disablealllogs)
  * roleArn [AwsArn](#awsarn)

### GroupNameAndArn
* GroupNameAndArn `object`: The name and ARN of a group.
  * groupArn [ThingGroupArn](#thinggrouparn)
  * groupName [ThingGroupName](#thinggroupname)

### HashAlgorithm
* HashAlgorithm `string`

### HashKeyField
* HashKeyField `string`

### HashKeyValue
* HashKeyValue `string`

### ImplicitDeny
* ImplicitDeny `object`: Information that implicitly denies authorization. When policy doesn't explicitly deny or allow an action on a resource it is considered an implicit deny.
  * policies [Policies](#policies)

### InProgressThings
* InProgressThings `integer`

### IndexName
* IndexName `string`

### IndexNamesList
* IndexNamesList `array`
  * items [IndexName](#indexname)

### IndexNotReadyException
* IndexNotReadyException `object`: The index is not ready.
  * message [errorMessage](#errormessage)

### IndexSchema
* IndexSchema `string`

### IndexStatus
* IndexStatus `string` (values: ACTIVE, BUILDING, REBUILDING)

### InlineDocument
* InlineDocument `string`

### InternalException
* InternalException `object`: An unexpected error has occurred.
  * message [errorMessage](#errormessage)

### InternalFailureException
* InternalFailureException `object`: An unexpected error has occurred.
  * message [errorMessage](#errormessage)

### InvalidQueryException
* InvalidQueryException `object`: The query is invalid.
  * message [errorMessage](#errormessage)

### InvalidRequestException
* InvalidRequestException `object`: The request is not valid.
  * message [errorMessage](#errormessage)

### InvalidResponseException
* InvalidResponseException `object`: The response is invalid.
  * message [errorMessage](#errormessage)

### InvalidStateTransitionException
* InvalidStateTransitionException `object`: An attempt was made to change to an invalid state, for example by deleting a job or a job execution which is "IN_PROGRESS" without setting the <code>force</code> parameter.
  * message [errorMessage](#errormessage)

### IotAnalyticsAction
* IotAnalyticsAction `object`: Sends messge data to an AWS IoT Analytics channel.
  * channelArn [AwsArn](#awsarn)
  * channelName [ChannelName](#channelname)
  * roleArn [AwsArn](#awsarn)

### IsAuthenticated
* IsAuthenticated `boolean`

### IsDefaultVersion
* IsDefaultVersion `boolean`

### IsDisabled
* IsDisabled `boolean`

### Job
* Job `object`: The <code>Job</code> object contains details about a job.
  * comment [Comment](#comment)
  * completedAt [DateType](#datetype)
  * createdAt [DateType](#datetype)
  * description [JobDescription](#jobdescription)
  * documentParameters [JobDocumentParameters](#jobdocumentparameters)
  * forceCanceled [Forced](#forced)
  * jobArn [JobArn](#jobarn)
  * jobExecutionsRolloutConfig [JobExecutionsRolloutConfig](#jobexecutionsrolloutconfig)
  * jobId [JobId](#jobid)
  * jobProcessDetails [JobProcessDetails](#jobprocessdetails)
  * lastUpdatedAt [DateType](#datetype)
  * presignedUrlConfig [PresignedUrlConfig](#presignedurlconfig)
  * status [JobStatus](#jobstatus)
  * targetSelection [TargetSelection](#targetselection)
  * targets [JobTargets](#jobtargets)

### JobArn
* JobArn `string`

### JobDescription
* JobDescription `string`

### JobDocument
* JobDocument `string`

### JobDocumentParameters
* JobDocumentParameters `array`
  * items `object`
    * key [ParameterKey](#parameterkey)
    * value [ParameterValue](#parametervalue)

### JobDocumentSource
* JobDocumentSource `string`

### JobExecution
* JobExecution `object`: The job execution object represents the execution of a job on a particular device.
  * executionNumber [ExecutionNumber](#executionnumber)
  * forceCanceled [Forced](#forced)
  * jobId [JobId](#jobid)
  * lastUpdatedAt [DateType](#datetype)
  * queuedAt [DateType](#datetype)
  * startedAt [DateType](#datetype)
  * status [JobExecutionStatus](#jobexecutionstatus)
  * statusDetails [JobExecutionStatusDetails](#jobexecutionstatusdetails)
  * thingArn [ThingArn](#thingarn)
  * versionNumber [VersionNumber](#versionnumber)

### JobExecutionStatus
* JobExecutionStatus `string` (values: QUEUED, IN_PROGRESS, SUCCEEDED, FAILED, REJECTED, REMOVED, CANCELED)

### JobExecutionStatusDetails
* JobExecutionStatusDetails `object`: Details of the job execution status.
  * detailsMap [DetailsMap](#detailsmap)

### JobExecutionSummary
* JobExecutionSummary `object`: The job execution summary.
  * executionNumber [ExecutionNumber](#executionnumber)
  * lastUpdatedAt [DateType](#datetype)
  * queuedAt [DateType](#datetype)
  * startedAt [DateType](#datetype)
  * status [JobExecutionStatus](#jobexecutionstatus)

### JobExecutionSummaryForJob
* JobExecutionSummaryForJob `object`: Contains a summary of information about job executions for a specific job.
  * jobExecutionSummary [JobExecutionSummary](#jobexecutionsummary)
  * thingArn [ThingArn](#thingarn)

### JobExecutionSummaryForJobList
* JobExecutionSummaryForJobList `array`
  * items [JobExecutionSummaryForJob](#jobexecutionsummaryforjob)

### JobExecutionSummaryForThing
* JobExecutionSummaryForThing `object`: The job execution summary for a thing.
  * jobExecutionSummary [JobExecutionSummary](#jobexecutionsummary)
  * jobId [JobId](#jobid)

### JobExecutionSummaryForThingList
* JobExecutionSummaryForThingList `array`
  * items [JobExecutionSummaryForThing](#jobexecutionsummaryforthing)

### JobExecutionsRolloutConfig
* JobExecutionsRolloutConfig `object`: Allows you to create a staged rollout of a job.
  * maximumPerMinute [MaxJobExecutionsPerMin](#maxjobexecutionspermin)

### JobId
* JobId `string`

### JobProcessDetails
* JobProcessDetails `object`: The job process details.
  * numberOfCanceledThings [CanceledThings](#canceledthings)
  * numberOfFailedThings [FailedThings](#failedthings)
  * numberOfInProgressThings [InProgressThings](#inprogressthings)
  * numberOfQueuedThings [QueuedThings](#queuedthings)
  * numberOfRejectedThings [RejectedThings](#rejectedthings)
  * numberOfRemovedThings [RemovedThings](#removedthings)
  * numberOfSucceededThings [SucceededThings](#succeededthings)
  * processingTargets [ProcessingTargetNameList](#processingtargetnamelist)

### JobStatus
* JobStatus `string` (values: IN_PROGRESS, CANCELED, COMPLETED, DELETION_IN_PROGRESS)

### JobSummary
* JobSummary `object`: The job summary.
  * completedAt [DateType](#datetype)
  * createdAt [DateType](#datetype)
  * jobArn [JobArn](#jobarn)
  * jobId [JobId](#jobid)
  * lastUpdatedAt [DateType](#datetype)
  * status [JobStatus](#jobstatus)
  * targetSelection [TargetSelection](#targetselection)
  * thingGroupId [ThingGroupId](#thinggroupid)

### JobSummaryList
* JobSummaryList `array`
  * items [JobSummary](#jobsummary)

### JobTargets
* JobTargets `array`
  * items [TargetArn](#targetarn)

### JsonDocument
* JsonDocument `string`

### Key
* Key `string`

### KeyName
* KeyName `string`

### KeyPair
* KeyPair `object`: Describes a key pair.
  * PrivateKey [PrivateKey](#privatekey)
  * PublicKey [PublicKey](#publickey)

### KeyValue
* KeyValue `string`

### KinesisAction
* KinesisAction `object`: Describes an action to write data to an Amazon Kinesis stream.
  * partitionKey [PartitionKey](#partitionkey)
  * roleArn **required** [AwsArn](#awsarn)
  * streamName **required** [StreamName](#streamname)

### LambdaAction
* LambdaAction `object`: Describes an action to invoke a Lambda function.
  * functionArn **required** [FunctionArn](#functionarn)

### LaserMaxResults
* LaserMaxResults `integer`

### LastModifiedDate
* LastModifiedDate `string`

### LimitExceededException
* LimitExceededException `object`: A limit has been exceeded.
  * message [errorMessage](#errormessage)

### ListAttachedPoliciesRequest
* ListAttachedPoliciesRequest `object`

### ListAttachedPoliciesResponse
* ListAttachedPoliciesResponse `object`
  * nextMarker [Marker](#marker)
  * policies [Policies](#policies)

### ListAuthorizersRequest
* ListAuthorizersRequest `object`

### ListAuthorizersResponse
* ListAuthorizersResponse `object`
  * authorizers [Authorizers](#authorizers)
  * nextMarker [Marker](#marker)

### ListCACertificatesRequest
* ListCACertificatesRequest `object`: Input for the ListCACertificates operation.

### ListCACertificatesResponse
* ListCACertificatesResponse `object`: The output from the ListCACertificates operation.
  * certificates [CACertificates](#cacertificates)
  * nextMarker [Marker](#marker)

### ListCertificatesByCARequest
* ListCertificatesByCARequest `object`: The input to the ListCertificatesByCA operation.

### ListCertificatesByCAResponse
* ListCertificatesByCAResponse `object`: The output of the ListCertificatesByCA operation.
  * certificates [Certificates](#certificates)
  * nextMarker [Marker](#marker)

### ListCertificatesRequest
* ListCertificatesRequest `object`: The input for the ListCertificates operation.

### ListCertificatesResponse
* ListCertificatesResponse `object`: The output of the ListCertificates operation.
  * certificates [Certificates](#certificates)
  * nextMarker [Marker](#marker)

### ListIndicesRequest
* ListIndicesRequest `object`

### ListIndicesResponse
* ListIndicesResponse `object`
  * indexNames [IndexNamesList](#indexnameslist)
  * nextToken [NextToken](#nexttoken)

### ListJobExecutionsForJobRequest
* ListJobExecutionsForJobRequest `object`

### ListJobExecutionsForJobResponse
* ListJobExecutionsForJobResponse `object`
  * executionSummaries [JobExecutionSummaryForJobList](#jobexecutionsummaryforjoblist)
  * nextToken [NextToken](#nexttoken)

### ListJobExecutionsForThingRequest
* ListJobExecutionsForThingRequest `object`

### ListJobExecutionsForThingResponse
* ListJobExecutionsForThingResponse `object`
  * executionSummaries [JobExecutionSummaryForThingList](#jobexecutionsummaryforthinglist)
  * nextToken [NextToken](#nexttoken)

### ListJobsRequest
* ListJobsRequest `object`

### ListJobsResponse
* ListJobsResponse `object`
  * jobs [JobSummaryList](#jobsummarylist)
  * nextToken [NextToken](#nexttoken)

### ListOTAUpdatesRequest
* ListOTAUpdatesRequest `object`

### ListOTAUpdatesResponse
* ListOTAUpdatesResponse `object`
  * nextToken [NextToken](#nexttoken)
  * otaUpdates [OTAUpdatesSummary](#otaupdatessummary)

### ListOutgoingCertificatesRequest
* ListOutgoingCertificatesRequest `object`: The input to the ListOutgoingCertificates operation.

### ListOutgoingCertificatesResponse
* ListOutgoingCertificatesResponse `object`: The output from the ListOutgoingCertificates operation.
  * nextMarker [Marker](#marker)
  * outgoingCertificates [OutgoingCertificates](#outgoingcertificates)

### ListPoliciesRequest
* ListPoliciesRequest `object`: The input for the ListPolicies operation.

### ListPoliciesResponse
* ListPoliciesResponse `object`: The output from the ListPolicies operation.
  * nextMarker [Marker](#marker)
  * policies [Policies](#policies)

### ListPolicyPrincipalsRequest
* ListPolicyPrincipalsRequest `object`: The input for the ListPolicyPrincipals operation.

### ListPolicyPrincipalsResponse
* ListPolicyPrincipalsResponse `object`: The output from the ListPolicyPrincipals operation.
  * nextMarker [Marker](#marker)
  * principals [Principals](#principals)

### ListPolicyVersionsRequest
* ListPolicyVersionsRequest `object`: The input for the ListPolicyVersions operation.

### ListPolicyVersionsResponse
* ListPolicyVersionsResponse `object`: The output from the ListPolicyVersions operation.
  * policyVersions [PolicyVersions](#policyversions)

### ListPrincipalPoliciesRequest
* ListPrincipalPoliciesRequest `object`: The input for the ListPrincipalPolicies operation.

### ListPrincipalPoliciesResponse
* ListPrincipalPoliciesResponse `object`: The output from the ListPrincipalPolicies operation.
  * nextMarker [Marker](#marker)
  * policies [Policies](#policies)

### ListPrincipalThingsRequest
* ListPrincipalThingsRequest `object`: The input for the ListPrincipalThings operation.

### ListPrincipalThingsResponse
* ListPrincipalThingsResponse `object`: The output from the ListPrincipalThings operation.
  * nextToken [NextToken](#nexttoken)
  * things [ThingNameList](#thingnamelist)

### ListRoleAliasesRequest
* ListRoleAliasesRequest `object`

### ListRoleAliasesResponse
* ListRoleAliasesResponse `object`
  * nextMarker [Marker](#marker)
  * roleAliases [RoleAliases](#rolealiases)

### ListStreamsRequest
* ListStreamsRequest `object`

### ListStreamsResponse
* ListStreamsResponse `object`
  * nextToken [NextToken](#nexttoken)
  * streams [StreamsSummary](#streamssummary)

### ListTargetsForPolicyRequest
* ListTargetsForPolicyRequest `object`

### ListTargetsForPolicyResponse
* ListTargetsForPolicyResponse `object`
  * nextMarker [Marker](#marker)
  * targets [PolicyTargets](#policytargets)

### ListThingGroupsForThingRequest
* ListThingGroupsForThingRequest `object`

### ListThingGroupsForThingResponse
* ListThingGroupsForThingResponse `object`
  * nextToken [NextToken](#nexttoken)
  * thingGroups [ThingGroupNameAndArnList](#thinggroupnameandarnlist)

### ListThingGroupsRequest
* ListThingGroupsRequest `object`

### ListThingGroupsResponse
* ListThingGroupsResponse `object`
  * nextToken [NextToken](#nexttoken)
  * thingGroups [ThingGroupNameAndArnList](#thinggroupnameandarnlist)

### ListThingPrincipalsRequest
* ListThingPrincipalsRequest `object`: The input for the ListThingPrincipal operation.

### ListThingPrincipalsResponse
* ListThingPrincipalsResponse `object`: The output from the ListThingPrincipals operation.
  * principals [Principals](#principals)

### ListThingRegistrationTaskReportsRequest
* ListThingRegistrationTaskReportsRequest `object`

### ListThingRegistrationTaskReportsResponse
* ListThingRegistrationTaskReportsResponse `object`
  * nextToken [NextToken](#nexttoken)
  * reportType [ReportType](#reporttype)
  * resourceLinks [S3FileUrlList](#s3fileurllist)

### ListThingRegistrationTasksRequest
* ListThingRegistrationTasksRequest `object`

### ListThingRegistrationTasksResponse
* ListThingRegistrationTasksResponse `object`
  * nextToken [NextToken](#nexttoken)
  * taskIds [TaskIdList](#taskidlist)

### ListThingTypesRequest
* ListThingTypesRequest `object`: The input for the ListThingTypes operation.

### ListThingTypesResponse
* ListThingTypesResponse `object`: The output for the ListThingTypes operation.
  * nextToken [NextToken](#nexttoken)
  * thingTypes [ThingTypeList](#thingtypelist)

### ListThingsInThingGroupRequest
* ListThingsInThingGroupRequest `object`

### ListThingsInThingGroupResponse
* ListThingsInThingGroupResponse `object`
  * nextToken [NextToken](#nexttoken)
  * things [ThingNameList](#thingnamelist)

### ListThingsRequest
* ListThingsRequest `object`: The input for the ListThings operation.

### ListThingsResponse
* ListThingsResponse `object`: The output from the ListThings operation.
  * nextToken [NextToken](#nexttoken)
  * things [ThingAttributeList](#thingattributelist)

### ListTopicRulesRequest
* ListTopicRulesRequest `object`: The input for the ListTopicRules operation.

### ListTopicRulesResponse
* ListTopicRulesResponse `object`: The output from the ListTopicRules operation.
  * nextToken [NextToken](#nexttoken)
  * rules [TopicRuleList](#topicrulelist)

### ListV2LoggingLevelsRequest
* ListV2LoggingLevelsRequest `object`

### ListV2LoggingLevelsResponse
* ListV2LoggingLevelsResponse `object`
  * logTargetConfigurations [LogTargetConfigurations](#logtargetconfigurations)
  * nextToken [NextToken](#nexttoken)

### LogLevel
* LogLevel `string` (values: DEBUG, INFO, ERROR, WARN, DISABLED)

### LogTarget
* LogTarget `object`: A log target.
  * targetName [LogTargetName](#logtargetname)
  * targetType **required** [LogTargetType](#logtargettype)

### LogTargetConfiguration
* LogTargetConfiguration `object`: The target configuration.
  * logLevel [LogLevel](#loglevel)
  * logTarget [LogTarget](#logtarget)

### LogTargetConfigurations
* LogTargetConfigurations `array`
  * items [LogTargetConfiguration](#logtargetconfiguration)

### LogTargetName
* LogTargetName `string`

### LogTargetType
* LogTargetType `string` (values: DEFAULT, THING_GROUP)

### LoggingOptionsPayload
* LoggingOptionsPayload `object`: Describes the logging options payload.
  * logLevel [LogLevel](#loglevel)
  * roleArn **required** [AwsArn](#awsarn)

### MalformedPolicyException
* MalformedPolicyException `object`: The policy documentation is not valid.
  * message [errorMessage](#errormessage)

### Marker
* Marker `string`

### MaxJobExecutionsPerMin
* MaxJobExecutionsPerMin `integer`

### MaxResults
* MaxResults `integer`

### Message
* Message `string`

### MessageFormat
* MessageFormat `string` (values: RAW, JSON)

### MetricName
* MetricName `string`

### MetricNamespace
* MetricNamespace `string`

### MetricTimestamp
* MetricTimestamp `string`

### MetricUnit
* MetricUnit `string`

### MetricValue
* MetricValue `string`

### MissingContextValue
* MissingContextValue `string`

### MissingContextValues
* MissingContextValues `array`
  * items [MissingContextValue](#missingcontextvalue)

### NextToken
* NextToken `string`

### NotConfiguredException
* NotConfiguredException `object`: The resource is not configured.
  * message [errorMessage](#errormessage)

### OTAUpdateArn
* OTAUpdateArn `string`

### OTAUpdateDescription
* OTAUpdateDescription `string`

### OTAUpdateErrorMessage
* OTAUpdateErrorMessage `string`

### OTAUpdateFile
* OTAUpdateFile `object`: Describes a file to be associated with an OTA update.
  * attributes [AttributesMap](#attributesmap)
  * codeSigning [CodeSigning](#codesigning)
  * fileName [FileName](#filename)
  * fileSource [Stream](#stream)
  * fileVersion [OTAUpdateFileVersion](#otaupdatefileversion)

### OTAUpdateFileVersion
* OTAUpdateFileVersion `string`

### OTAUpdateFiles
* OTAUpdateFiles `array`
  * items [OTAUpdateFile](#otaupdatefile)

### OTAUpdateId
* OTAUpdateId `string`

### OTAUpdateInfo
* OTAUpdateInfo `object`: Information about an OTA update.
  * additionalParameters [AdditionalParameterMap](#additionalparametermap)
  * awsIotJobArn [AwsIotJobArn](#awsiotjobarn)
  * awsIotJobId [AwsIotJobId](#awsiotjobid)
  * creationDate [DateType](#datetype)
  * description [OTAUpdateDescription](#otaupdatedescription)
  * errorInfo [ErrorInfo](#errorinfo)
  * lastModifiedDate [DateType](#datetype)
  * otaUpdateArn [OTAUpdateArn](#otaupdatearn)
  * otaUpdateFiles [OTAUpdateFiles](#otaupdatefiles)
  * otaUpdateId [OTAUpdateId](#otaupdateid)
  * otaUpdateStatus [OTAUpdateStatus](#otaupdatestatus)
  * targetSelection [TargetSelection](#targetselection)
  * targets [Targets](#targets)

### OTAUpdateStatus
* OTAUpdateStatus `string` (values: CREATE_PENDING, CREATE_IN_PROGRESS, CREATE_COMPLETE, CREATE_FAILED)

### OTAUpdateSummary
* OTAUpdateSummary `object`: An OTA update summary.
  * creationDate [DateType](#datetype)
  * otaUpdateArn [OTAUpdateArn](#otaupdatearn)
  * otaUpdateId [OTAUpdateId](#otaupdateid)

### OTAUpdatesSummary
* OTAUpdatesSummary `array`
  * items [OTAUpdateSummary](#otaupdatesummary)

### OptionalVersion
* OptionalVersion `integer`

### OutgoingCertificate
* OutgoingCertificate `object`: A certificate that has been transferred but not yet accepted.
  * certificateArn [CertificateArn](#certificatearn)
  * certificateId [CertificateId](#certificateid)
  * creationDate [DateType](#datetype)
  * transferDate [DateType](#datetype)
  * transferMessage [Message](#message)
  * transferredTo [AwsAccountId](#awsaccountid)

### OutgoingCertificates
* OutgoingCertificates `array`
  * items [OutgoingCertificate](#outgoingcertificate)

### PageSize
* PageSize `integer`

### Parameter
* Parameter `string`

### ParameterKey
* ParameterKey `string`

### ParameterValue
* ParameterValue `string`

### Parameters
* Parameters `array`
  * items `object`
    * key [Parameter](#parameter)
    * value [Value](#value)

### PartitionKey
* PartitionKey `string`

### PayloadField
* PayloadField `string`

### Percentage
* Percentage `integer`

### Policies
* Policies `array`
  * items [Policy](#policy)

### Policy
* Policy `object`: Describes an AWS IoT policy.
  * policyArn [PolicyArn](#policyarn)
  * policyName [PolicyName](#policyname)

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

### PolicyVersion
* PolicyVersion `object`: Describes a policy version.
  * createDate [DateType](#datetype)
  * isDefaultVersion [IsDefaultVersion](#isdefaultversion)
  * versionId [PolicyVersionId](#policyversionid)

### PolicyVersionId
* PolicyVersionId `string`

### PolicyVersions
* PolicyVersions `array`
  * items [PolicyVersion](#policyversion)

### PresignedUrlConfig
* PresignedUrlConfig `object`: Configuration for pre-signed S3 URLs.
  * expiresInSec [ExpiresInSec](#expiresinsec)
  * roleArn [RoleArn](#rolearn)

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

### PublicKey
* PublicKey `string`

### PublicKeyMap
* PublicKeyMap `array`
  * items `object`
    * key [KeyName](#keyname)
    * value [KeyValue](#keyvalue)

### PutItemInput
* PutItemInput `object`: The input for the DynamoActionVS action that specifies the DynamoDB table to which the message data will be written.
  * tableName **required** [TableName](#tablename)

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

### Recursive
* Recursive `boolean`

### RecursiveWithoutDefault
* RecursiveWithoutDefault `boolean`

### RegisterCACertificateRequest
* RegisterCACertificateRequest `object`: The input to the RegisterCACertificate operation.
  * caCertificate **required** [CertificatePem](#certificatepem)
  * registrationConfig [RegistrationConfig](#registrationconfig)
  * verificationCertificate **required** [CertificatePem](#certificatepem)

### RegisterCACertificateResponse
* RegisterCACertificateResponse `object`: The output from the RegisterCACertificateResponse operation.
  * certificateArn [CertificateArn](#certificatearn)
  * certificateId [CertificateId](#certificateid)

### RegisterCertificateRequest
* RegisterCertificateRequest `object`: The input to the RegisterCertificate operation.
  * caCertificatePem [CertificatePem](#certificatepem)
  * certificatePem **required** [CertificatePem](#certificatepem)
  * status [CertificateStatus](#certificatestatus)

### RegisterCertificateResponse
* RegisterCertificateResponse `object`: The output from the RegisterCertificate operation.
  * certificateArn [CertificateArn](#certificatearn)
  * certificateId [CertificateId](#certificateid)

### RegisterThingRequest
* RegisterThingRequest `object`
  * parameters [Parameters](#parameters)
  * templateBody **required** [TemplateBody](#templatebody)

### RegisterThingResponse
* RegisterThingResponse `object`
  * certificatePem [CertificatePem](#certificatepem)
  * resourceArns [ResourceArns](#resourcearns)

### RegistrationCode
* RegistrationCode `string`

### RegistrationCodeValidationException
* RegistrationCodeValidationException `object`: The registration code is invalid.
  * message [errorMessage](#errormessage)

### RegistrationConfig
* RegistrationConfig `object`: The registration configuration.
  * roleArn [RoleArn](#rolearn)
  * templateBody [TemplateBody](#templatebody)

### RegistryMaxResults
* RegistryMaxResults `integer`

### RegistryS3BucketName
* RegistryS3BucketName `string`

### RegistryS3KeyName
* RegistryS3KeyName `string`

### RejectCertificateTransferRequest
* RejectCertificateTransferRequest `object`: The input for the RejectCertificateTransfer operation.
  * rejectReason [Message](#message)

### RejectedThings
* RejectedThings `integer`

### RemoveAutoRegistration
* RemoveAutoRegistration `boolean`

### RemoveThingFromThingGroupRequest
* RemoveThingFromThingGroupRequest `object`
  * thingArn [ThingArn](#thingarn)
  * thingGroupArn [ThingGroupArn](#thinggrouparn)
  * thingGroupName [ThingGroupName](#thinggroupname)
  * thingName [ThingName](#thingname)

### RemoveThingFromThingGroupResponse
* RemoveThingFromThingGroupResponse `object`

### RemoveThingType
* RemoveThingType `boolean`

### RemovedThings
* RemovedThings `integer`

### ReplaceTopicRuleRequest
* ReplaceTopicRuleRequest `object`: The input for the ReplaceTopicRule operation.
  * topicRulePayload **required** [TopicRulePayload](#topicrulepayload)

### ReportType
* ReportType `string` (values: ERRORS, RESULTS)

### RepublishAction
* RepublishAction `object`: Describes an action to republish to another topic.
  * roleArn **required** [AwsArn](#awsarn)
  * topic **required** [TopicPattern](#topicpattern)

### Resource
* Resource `string`

### ResourceAlreadyExistsException
* ResourceAlreadyExistsException `object`: The resource already exists.
  * message [errorMessage](#errormessage)
  * resourceArn [resourceArn](#resourcearn)
  * resourceId [resourceId](#resourceid)

### ResourceArn
* ResourceArn `string`

### ResourceArns
* ResourceArns `array`
  * items `object`
    * key [ResourceLogicalId](#resourcelogicalid)
    * value [ResourceArn](#resourcearn)

### ResourceLogicalId
* ResourceLogicalId `string`

### ResourceNotFoundException
* ResourceNotFoundException `object`: The specified resource does not exist.
  * message [errorMessage](#errormessage)

### ResourceRegistrationFailureException
* ResourceRegistrationFailureException `object`: The resource registration failed.
  * message [errorMessage](#errormessage)

### Resources
* Resources `array`
  * items [Resource](#resource)

### RoleAlias
* RoleAlias `string`

### RoleAliasArn
* RoleAliasArn `string`

### RoleAliasDescription
* RoleAliasDescription `object`: Role alias description.
  * creationDate [DateType](#datetype)
  * credentialDurationSeconds [CredentialDurationSeconds](#credentialdurationseconds)
  * lastModifiedDate [DateType](#datetype)
  * owner [AwsAccountId](#awsaccountid)
  * roleAlias [RoleAlias](#rolealias)
  * roleAliasArn [RoleAliasArn](#rolealiasarn)
  * roleArn [RoleArn](#rolearn)

### RoleAliases
* RoleAliases `array`
  * items [RoleAlias](#rolealias)

### RoleArn
* RoleArn `string`

### RuleArn
* RuleArn `string`

### RuleName
* RuleName `string`

### S3Action
* S3Action `object`: Describes an action to write data to an Amazon S3 bucket.
  * bucketName **required** [BucketName](#bucketname)
  * cannedAcl [CannedAccessControlList](#cannedaccesscontrollist)
  * key **required** [Key](#key)
  * roleArn **required** [AwsArn](#awsarn)

### S3Bucket
* S3Bucket `string`

### S3FileUrl
* S3FileUrl `string`

### S3FileUrlList
* S3FileUrlList `array`
  * items [S3FileUrl](#s3fileurl)

### S3Key
* S3Key `string`

### S3Location
* S3Location `object`: The location in S3 the contains the files to stream.
  * bucket **required** [S3Bucket](#s3bucket)
  * key **required** [S3Key](#s3key)
  * version [S3Version](#s3version)

### S3Version
* S3Version `string`

### SQL
* SQL `string`

### SalesforceAction
* SalesforceAction `object`: Describes an action to write a message to a Salesforce IoT Cloud Input Stream.
  * token **required** [SalesforceToken](#salesforcetoken)
  * url **required** [SalesforceEndpoint](#salesforceendpoint)

### SalesforceEndpoint
* SalesforceEndpoint `string`

### SalesforceToken
* SalesforceToken `string`

### SearchIndexRequest
* SearchIndexRequest `object`
  * indexName [IndexName](#indexname)
  * maxResults [QueryMaxResults](#querymaxresults)
  * nextToken [NextToken](#nexttoken)
  * queryString **required** [QueryString](#querystring)
  * queryVersion [QueryVersion](#queryversion)

### SearchIndexResponse
* SearchIndexResponse `object`
  * nextToken [NextToken](#nexttoken)
  * things [ThingDocumentList](#thingdocumentlist)

### SearchableAttributes
* SearchableAttributes `array`
  * items [AttributeName](#attributename)

### Seconds
* Seconds `integer`

### ServiceUnavailableException
* ServiceUnavailableException `object`: The service is temporarily unavailable.
  * message [errorMessage](#errormessage)

### SetAsActive
* SetAsActive `boolean`

### SetAsActiveFlag
* SetAsActiveFlag `boolean`

### SetAsDefault
* SetAsDefault `boolean`

### SetDefaultAuthorizerRequest
* SetDefaultAuthorizerRequest `object`
  * authorizerName **required** [AuthorizerName](#authorizername)

### SetDefaultAuthorizerResponse
* SetDefaultAuthorizerResponse `object`
  * authorizerArn [AuthorizerArn](#authorizerarn)
  * authorizerName [AuthorizerName](#authorizername)

### SetDefaultPolicyVersionRequest
* SetDefaultPolicyVersionRequest `object`: The input for the SetDefaultPolicyVersion operation.

### SetLoggingOptionsRequest
* SetLoggingOptionsRequest `object`: The input for the SetLoggingOptions operation.
  * loggingOptionsPayload **required** [LoggingOptionsPayload](#loggingoptionspayload)

### SetV2LoggingLevelRequest
* SetV2LoggingLevelRequest `object`
  * logLevel **required** [LogLevel](#loglevel)
  * logTarget **required** [LogTarget](#logtarget)

### SetV2LoggingOptionsRequest
* SetV2LoggingOptionsRequest `object`
  * defaultLogLevel [LogLevel](#loglevel)
  * disableAllLogs [DisableAllLogs](#disablealllogs)
  * roleArn [AwsArn](#awsarn)

### Signature
* Signature `string`

### SignatureAlgorithm
* SignatureAlgorithm `string`

### SigningJobId
* SigningJobId `string`

### SkyfallMaxResults
* SkyfallMaxResults `integer`

### SnsAction
* SnsAction `object`: Describes an action to publish to an Amazon SNS topic.
  * messageFormat [MessageFormat](#messageformat)
  * roleArn **required** [AwsArn](#awsarn)
  * targetArn **required** [AwsArn](#awsarn)

### SqlParseException
* SqlParseException `object`: The Rule-SQL expression can't be parsed correctly.
  * message [errorMessage](#errormessage)

### SqsAction
* SqsAction `object`: Describes an action to publish data to an Amazon SQS queue.
  * queueUrl **required** [QueueUrl](#queueurl)
  * roleArn **required** [AwsArn](#awsarn)
  * useBase64 [UseBase64](#usebase64)

### StartThingRegistrationTaskRequest
* StartThingRegistrationTaskRequest `object`
  * inputFileBucket **required** [RegistryS3BucketName](#registrys3bucketname)
  * inputFileKey **required** [RegistryS3KeyName](#registrys3keyname)
  * roleArn **required** [RoleArn](#rolearn)
  * templateBody **required** [TemplateBody](#templatebody)

### StartThingRegistrationTaskResponse
* StartThingRegistrationTaskResponse `object`
  * taskId [TaskId](#taskid)

### StateReason
* StateReason `string`

### StateValue
* StateValue `string`

### Status
* Status `string` (values: InProgress, Completed, Failed, Cancelled, Cancelling)

### StopThingRegistrationTaskRequest
* StopThingRegistrationTaskRequest `object`

### StopThingRegistrationTaskResponse
* StopThingRegistrationTaskResponse `object`

### Stream
* Stream `object`: Describes a group of files that can be streamed.
  * fileId [FileId](#fileid)
  * streamId [StreamId](#streamid)

### StreamArn
* StreamArn `string`

### StreamDescription
* StreamDescription `string`

### StreamFile
* StreamFile `object`: Represents a file to stream.
  * fileId [FileId](#fileid)
  * s3Location [S3Location](#s3location)

### StreamFiles
* StreamFiles `array`
  * items [StreamFile](#streamfile)

### StreamId
* StreamId `string`

### StreamInfo
* StreamInfo `object`: Information about a stream.
  * createdAt [DateType](#datetype)
  * description [StreamDescription](#streamdescription)
  * files [StreamFiles](#streamfiles)
  * lastUpdatedAt [DateType](#datetype)
  * roleArn [RoleArn](#rolearn)
  * streamArn [StreamArn](#streamarn)
  * streamId [StreamId](#streamid)
  * streamVersion [StreamVersion](#streamversion)

### StreamName
* StreamName `string`

### StreamSummary
* StreamSummary `object`: A summary of a stream.
  * description [StreamDescription](#streamdescription)
  * streamArn [StreamArn](#streamarn)
  * streamId [StreamId](#streamid)
  * streamVersion [StreamVersion](#streamversion)

### StreamVersion
* StreamVersion `integer`

### StreamsSummary
* StreamsSummary `array`
  * items [StreamSummary](#streamsummary)

### SucceededThings
* SucceededThings `integer`

### TableName
* TableName `string`

### Target
* Target `string`

### TargetArn
* TargetArn `string`

### TargetSelection
* TargetSelection `string` (values: CONTINUOUS, SNAPSHOT)

### Targets
* Targets `array`
  * items [Target](#target)

### TaskId
* TaskId `string`

### TaskIdList
* TaskIdList `array`
  * items [TaskId](#taskid)

### TemplateBody
* TemplateBody `string`

### TestAuthorizationRequest
* TestAuthorizationRequest `object`
  * authInfos **required** [AuthInfos](#authinfos)
  * cognitoIdentityPoolId [CognitoIdentityPoolId](#cognitoidentitypoolid)
  * policyNamesToAdd [PolicyNames](#policynames)
  * policyNamesToSkip [PolicyNames](#policynames)
  * principal [Principal](#principal)

### TestAuthorizationResponse
* TestAuthorizationResponse `object`
  * authResults [AuthResults](#authresults)

### TestInvokeAuthorizerRequest
* TestInvokeAuthorizerRequest `object`
  * token **required** [Token](#token)
  * tokenSignature **required** [TokenSignature](#tokensignature)

### TestInvokeAuthorizerResponse
* TestInvokeAuthorizerResponse `object`
  * disconnectAfterInSeconds [Seconds](#seconds)
  * isAuthenticated [IsAuthenticated](#isauthenticated)
  * policyDocuments [PolicyDocuments](#policydocuments)
  * principalId [PrincipalId](#principalid)
  * refreshAfterInSeconds [Seconds](#seconds)

### ThingArn
* ThingArn `string`

### ThingAttribute
* ThingAttribute `object`: The properties of the thing, including thing name, thing type name, and a list of thing attributes.
  * attributes [Attributes](#attributes)
  * thingArn [ThingArn](#thingarn)
  * thingName [ThingName](#thingname)
  * thingTypeName [ThingTypeName](#thingtypename)
  * version [Version](#version)

### ThingAttributeList
* ThingAttributeList `array`
  * items [ThingAttribute](#thingattribute)

### ThingDocument
* ThingDocument `object`: The thing search index document.
  * attributes [Attributes](#attributes)
  * shadow [JsonDocument](#jsondocument)
  * thingGroupNames [ThingGroupNameList](#thinggroupnamelist)
  * thingId [ThingId](#thingid)
  * thingName [ThingName](#thingname)
  * thingTypeName [ThingTypeName](#thingtypename)

### ThingDocumentList
* ThingDocumentList `array`
  * items [ThingDocument](#thingdocument)

### ThingGroupArn
* ThingGroupArn `string`

### ThingGroupDescription
* ThingGroupDescription `string`

### ThingGroupId
* ThingGroupId `string`

### ThingGroupList
* ThingGroupList `array`
  * items [ThingGroupName](#thinggroupname)

### ThingGroupMetadata
* ThingGroupMetadata `object`: Thing group metadata.
  * creationDate [CreationDate](#creationdate)
  * parentGroupName [ThingGroupName](#thinggroupname)
  * rootToParentThingGroups [ThingGroupNameAndArnList](#thinggroupnameandarnlist)

### ThingGroupName
* ThingGroupName `string`

### ThingGroupNameAndArnList
* ThingGroupNameAndArnList `array`
  * items [GroupNameAndArn](#groupnameandarn)

### ThingGroupNameList
* ThingGroupNameList `array`
  * items [ThingGroupName](#thinggroupname)

### ThingGroupProperties
* ThingGroupProperties `object`: Thing group properties.
  * attributePayload [AttributePayload](#attributepayload)
  * thingGroupDescription [ThingGroupDescription](#thinggroupdescription)

### ThingId
* ThingId `string`

### ThingIndexingConfiguration
* ThingIndexingConfiguration `object`: Thing indexing configuration.
  * thingIndexingMode [ThingIndexingMode](#thingindexingmode)

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
  * thingTypeArn [ThingTypeArn](#thingtypearn)
  * thingTypeMetadata [ThingTypeMetadata](#thingtypemetadata)
  * thingTypeName [ThingTypeName](#thingtypename)
  * thingTypeProperties [ThingTypeProperties](#thingtypeproperties)

### ThingTypeDescription
* ThingTypeDescription `string`

### ThingTypeId
* ThingTypeId `string`

### ThingTypeList
* ThingTypeList `array`
  * items [ThingTypeDefinition](#thingtypedefinition)

### ThingTypeMetadata
* ThingTypeMetadata `object`: The ThingTypeMetadata contains additional information about the thing type including: creation date and time, a value indicating whether the thing type is deprecated, and a date and time when time was deprecated.
  * creationDate [CreationDate](#creationdate)
  * deprecationDate [DeprecationDate](#deprecationdate)

### ThingTypeName
* ThingTypeName `string`

### ThingTypeProperties
* ThingTypeProperties `object`: The ThingTypeProperties contains information about the thing type including: a thing type description, and a list of searchable thing attribute names.
  * searchableAttributes [SearchableAttributes](#searchableattributes)
  * thingTypeDescription [ThingTypeDescription](#thingtypedescription)

### ThrottlingException
* ThrottlingException `object`: The rate exceeds the limit.
  * message [errorMessage](#errormessage)

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
  * actions [ActionList](#actionlist)
  * awsIotSqlVersion [AwsIotSqlVersion](#awsiotsqlversion)
  * createdAt [CreatedAtDate](#createdatdate)
  * description [Description](#description)
  * errorAction [Action](#action)
  * ruleDisabled [IsDisabled](#isdisabled)
  * ruleName [RuleName](#rulename)
  * sql [SQL](#sql)

### TopicRuleList
* TopicRuleList `array`
  * items [TopicRuleListItem](#topicrulelistitem)

### TopicRuleListItem
* TopicRuleListItem `object`: Describes a rule.
  * createdAt [CreatedAtDate](#createdatdate)
  * ruleArn [RuleArn](#rulearn)
  * ruleDisabled [IsDisabled](#isdisabled)
  * ruleName [RuleName](#rulename)
  * topicPattern [TopicPattern](#topicpattern)

### TopicRulePayload
* TopicRulePayload `object`: Describes a rule.
  * actions **required** [ActionList](#actionlist)
  * awsIotSqlVersion [AwsIotSqlVersion](#awsiotsqlversion)
  * description [Description](#description)
  * errorAction [Action](#action)
  * ruleDisabled [IsDisabled](#isdisabled)
  * sql **required** [SQL](#sql)

### TransferAlreadyCompletedException
* TransferAlreadyCompletedException `object`: You can't revert the certificate transfer because the transfer is already complete.
  * message [errorMessage](#errormessage)

### TransferCertificateRequest
* TransferCertificateRequest `object`: The input for the TransferCertificate operation.
  * transferMessage [Message](#message)

### TransferCertificateResponse
* TransferCertificateResponse `object`: The output from the TransferCertificate operation.
  * transferredCertificateArn [CertificateArn](#certificatearn)

### TransferConflictException
* TransferConflictException `object`: You can't transfer the certificate because authorization policies are still attached.
  * message [errorMessage](#errormessage)

### TransferData
* TransferData `object`: Data used to transfer a certificate to an AWS account.
  * acceptDate [DateType](#datetype)
  * rejectDate [DateType](#datetype)
  * rejectReason [Message](#message)
  * transferDate [DateType](#datetype)
  * transferMessage [Message](#message)

### UnauthorizedException
* UnauthorizedException `object`: You are not authorized to perform this operation.
  * message [errorMessage](#errormessage)

### UndoDeprecate
* UndoDeprecate `boolean`

### UpdateAuthorizerRequest
* UpdateAuthorizerRequest `object`
  * authorizerFunctionArn [AuthorizerFunctionArn](#authorizerfunctionarn)
  * status [AuthorizerStatus](#authorizerstatus)
  * tokenKeyName [TokenKeyName](#tokenkeyname)
  * tokenSigningPublicKeys [PublicKeyMap](#publickeymap)

### UpdateAuthorizerResponse
* UpdateAuthorizerResponse `object`
  * authorizerArn [AuthorizerArn](#authorizerarn)
  * authorizerName [AuthorizerName](#authorizername)

### UpdateCACertificateRequest
* UpdateCACertificateRequest `object`: The input to the UpdateCACertificate operation.
  * registrationConfig [RegistrationConfig](#registrationconfig)
  * removeAutoRegistration [RemoveAutoRegistration](#removeautoregistration)

### UpdateCertificateRequest
* UpdateCertificateRequest `object`: The input for the UpdateCertificate operation.

### UpdateEventConfigurationsRequest
* UpdateEventConfigurationsRequest `object`
  * eventConfigurations [EventConfigurations](#eventconfigurations)

### UpdateEventConfigurationsResponse
* UpdateEventConfigurationsResponse `object`

### UpdateIndexingConfigurationRequest
* UpdateIndexingConfigurationRequest `object`
  * thingIndexingConfiguration [ThingIndexingConfiguration](#thingindexingconfiguration)

### UpdateIndexingConfigurationResponse
* UpdateIndexingConfigurationResponse `object`

### UpdateRoleAliasRequest
* UpdateRoleAliasRequest `object`
  * credentialDurationSeconds [CredentialDurationSeconds](#credentialdurationseconds)
  * roleArn [RoleArn](#rolearn)

### UpdateRoleAliasResponse
* UpdateRoleAliasResponse `object`
  * roleAlias [RoleAlias](#rolealias)
  * roleAliasArn [RoleAliasArn](#rolealiasarn)

### UpdateStreamRequest
* UpdateStreamRequest `object`
  * description [StreamDescription](#streamdescription)
  * files [StreamFiles](#streamfiles)
  * roleArn [RoleArn](#rolearn)

### UpdateStreamResponse
* UpdateStreamResponse `object`
  * description [StreamDescription](#streamdescription)
  * streamArn [StreamArn](#streamarn)
  * streamId [StreamId](#streamid)
  * streamVersion [StreamVersion](#streamversion)

### UpdateThingGroupRequest
* UpdateThingGroupRequest `object`
  * expectedVersion [OptionalVersion](#optionalversion)
  * thingGroupProperties **required** [ThingGroupProperties](#thinggroupproperties)

### UpdateThingGroupResponse
* UpdateThingGroupResponse `object`
  * version [Version](#version)

### UpdateThingGroupsForThingRequest
* UpdateThingGroupsForThingRequest `object`
  * thingGroupsToAdd [ThingGroupList](#thinggrouplist)
  * thingGroupsToRemove [ThingGroupList](#thinggrouplist)
  * thingName [ThingName](#thingname)

### UpdateThingGroupsForThingResponse
* UpdateThingGroupsForThingResponse `object`

### UpdateThingRequest
* UpdateThingRequest `object`: The input for the UpdateThing operation.
  * attributePayload [AttributePayload](#attributepayload)
  * expectedVersion [OptionalVersion](#optionalversion)
  * removeThingType [RemoveThingType](#removethingtype)
  * thingTypeName [ThingTypeName](#thingtypename)

### UpdateThingResponse
* UpdateThingResponse `object`: The output from the UpdateThing operation.

### UseBase64
* UseBase64 `boolean`

### Value
* Value `string`

### Version
* Version `integer`

### VersionConflictException
* VersionConflictException `object`: An exception thrown when the version of an entity specified with the <code>expectedVersion</code> parameter does not match the latest version in the system.
  * message [errorMessage](#errormessage)

### VersionNumber
* VersionNumber `integer`

### VersionsLimitExceededException
* VersionsLimitExceededException `object`: The number of policy versions exceeds the limit.
  * message [errorMessage](#errormessage)

### errorMessage
* errorMessage `string`

### resourceArn
* resourceArn `string`

### resourceId
* resourceId `string`


