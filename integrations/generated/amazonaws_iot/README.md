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

amazonaws_iot.AcceptCertificateTransfer({}).then(data => {
  console.log(data);
})
```

## Description

<fullname>AWS IoT</fullname> <p>AWS IoT provides secure, bi-directional communication between Internet-connected things (such as sensors, actuators, embedded devices, or smart appliances) and the AWS cloud. You can discover your custom IoT-Data endpoint to communicate with, configure rules for data processing and integration with other services, organize resources associated with each thing (Thing Registry), configure logging, and create and manage policies and credentials to authenticate things.</p> <p>For more information about how AWS IoT works, see the <a href="http://docs.aws.amazon.com/iot/latest/developerguide/aws-iot-how-it-works.html">Developer Guide</a>.</p>

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
  * verificationCertificate **required** [CertificatePem](#certificatepem)

#### Output
* output [RegisterCACertificateResponse](#registercacertificateresponse)

### UpdateCACertificate



```js
amazonaws_iot.UpdateCACertificate({
  "caCertificateId": ""
}, context)
```

#### Input
* input `object`
  * caCertificateId **required** `string`

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

### DescribeEndpoint



```js
amazonaws_iot.DescribeEndpoint({}, context)
```

#### Input
* input `object`

#### Output
* output [DescribeEndpointResponse](#describeendpointresponse)

### CreateKeysAndCertificate



```js
amazonaws_iot.CreateKeysAndCertificate({}, context)
```

#### Input
* input `object`

#### Output
* output [CreateKeysAndCertificateResponse](#createkeysandcertificateresponse)

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

### ListPolicies



```js
amazonaws_iot.ListPolicies({}, context)
```

#### Input
* input `object`

#### Output
* output [ListPoliciesResponse](#listpoliciesresponse)

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

### ListPrincipalThings



```js
amazonaws_iot.ListPrincipalThings({}, context)
```

#### Input
* input `object`

#### Output
* output [ListPrincipalThingsResponse](#listprincipalthingsresponse)

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

### ListTopicRules



```js
amazonaws_iot.ListTopicRules({}, context)
```

#### Input
* input `object`

#### Output
* output [ListTopicRulesResponse](#listtopicrulesresponse)

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

### ListThingTypes



```js
amazonaws_iot.ListThingTypes({}, context)
```

#### Input
* input `object`

#### Output
* output [ListThingTypesResponse](#listthingtypesresponse)

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

### AlarmName
* AlarmName `string`

### AllowAutoRegistration
* AllowAutoRegistration `boolean`

### AscendingOrder
* AscendingOrder `boolean`

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
* AttributeValue `string`: An attribute value for an Thing. An empty or null value in Update means that existing value for that attribute should be deleted. Empty and null values in create are ignored.

### Attributes
* Attributes `array`
  * items `object`
    * key [AttributeName](#attributename)
    * value [AttributeValue](#attributevalue)

### AutoRegistrationStatus
* AutoRegistrationStatus `string` (values: ENABLE, DISABLE)

### AwsAccountId
* AwsAccountId `string`

### AwsArn
* AwsArn `string`

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
  * ownedBy [AwsAccountId](#awsaccountid)
  * status [CACertificateStatus](#cacertificatestatus)

### CACertificateStatus
* CACertificateStatus `string` (values: ACTIVE, INACTIVE)

### CACertificates
* CACertificates `array`
  * items [CACertificate](#cacertificate)

### CancelCertificateTransferRequest
* CancelCertificateTransferRequest `object`: The input for the CancelCertificateTransfer operation.

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
  * lastModifiedDate [DateType](#datetype)
  * ownedBy [AwsAccountId](#awsaccountid)
  * previousOwnedBy [AwsAccountId](#awsaccountid)
  * status [CertificateStatus](#certificatestatus)
  * transferData [TransferData](#transferdata)

### CertificateId
* CertificateId `string`

### CertificatePem
* CertificatePem `string`

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

### CreateCertificateFromCsrRequest
* CreateCertificateFromCsrRequest `object`: The input for the CreateCertificateFromCsr operation.
  * certificateSigningRequest **required** [CertificateSigningRequest](#certificatesigningrequest)

### CreateCertificateFromCsrResponse
* CreateCertificateFromCsrResponse `object`: The output from the CreateCertificateFromCsr operation.
  * certificateArn [CertificateArn](#certificatearn)
  * certificateId [CertificateId](#certificateid)
  * certificatePem [CertificatePem](#certificatepem)

### CreateKeysAndCertificateRequest
* CreateKeysAndCertificateRequest `object`: The input for the CreateKeysAndCertificate operation.

### CreateKeysAndCertificateResponse
* CreateKeysAndCertificateResponse `object`: The output of the CreateKeysAndCertificate operation.
  * certificateArn [CertificateArn](#certificatearn)
  * certificateId [CertificateId](#certificateid)
  * certificatePem [CertificatePem](#certificatepem)
  * keyPair [KeyPair](#keypair)

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

### CreateThingRequest
* CreateThingRequest `object`: The input for the CreateThing operation.
  * attributePayload [AttributePayload](#attributepayload)
  * thingTypeName [ThingTypeName](#thingtypename)

### CreateThingResponse
* CreateThingResponse `object`: The output of the CreateThing operation.
  * thingArn [ThingArn](#thingarn)
  * thingName [ThingName](#thingname)

### CreateThingTypeRequest
* CreateThingTypeRequest `object`: The input for the CreateThingType operation.
  * thingTypeProperties [ThingTypeProperties](#thingtypeproperties)

### CreateThingTypeResponse
* CreateThingTypeResponse `object`: The output of the CreateThingType operation.
  * thingTypeArn [ThingTypeArn](#thingtypearn)
  * thingTypeName [ThingTypeName](#thingtypename)

### CreateTopicRuleRequest
* CreateTopicRuleRequest `object`: The input for the CreateTopicRule operation.
  * topicRulePayload **required** [TopicRulePayload](#topicrulepayload)

### CreatedAtDate
* CreatedAtDate `string`

### CreationDate
* CreationDate `string`

### DateType
* DateType `string`

### DeleteCACertificateRequest
* DeleteCACertificateRequest `object`: Input for the DeleteCACertificate operation.

### DeleteCACertificateResponse
* DeleteCACertificateResponse `object`: The output for the DeleteCACertificate operation.

### DeleteCertificateRequest
* DeleteCertificateRequest `object`: The input for the DeleteCertificate operation.

### DeleteConflictException
* DeleteConflictException `object`: You can't delete the resource because it is attached to one or more resources.
  * message [errorMessage](#errormessage)

### DeletePolicyRequest
* DeletePolicyRequest `object`: The input for the DeletePolicy operation.

### DeletePolicyVersionRequest
* DeletePolicyVersionRequest `object`: The input for the DeletePolicyVersion operation.

### DeleteRegistrationCodeRequest
* DeleteRegistrationCodeRequest `object`: The input for the DeleteRegistrationCode operation.

### DeleteRegistrationCodeResponse
* DeleteRegistrationCodeResponse `object`: The output for the DeleteRegistrationCode operation.

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

### DeliveryStreamName
* DeliveryStreamName `string`

### DeprecateThingTypeRequest
* DeprecateThingTypeRequest `object`: The input for the DeprecateThingType operation.
  * undoDeprecate [UndoDeprecate](#undodeprecate)

### DeprecateThingTypeResponse
* DeprecateThingTypeResponse `object`: The output for the DeprecateThingType operation.

### DeprecationDate
* DeprecationDate `string`

### DescribeCACertificateRequest
* DescribeCACertificateRequest `object`: The input for the DescribeCACertificate operation.

### DescribeCACertificateResponse
* DescribeCACertificateResponse `object`: The output from the DescribeCACertificate operation.
  * certificateDescription [CACertificateDescription](#cacertificatedescription)

### DescribeCertificateRequest
* DescribeCertificateRequest `object`: The input for the DescribeCertificate operation.

### DescribeCertificateResponse
* DescribeCertificateResponse `object`: The output of the DescribeCertificate operation.
  * certificateDescription [CertificateDescription](#certificatedescription)

### DescribeEndpointRequest
* DescribeEndpointRequest `object`: The input for the DescribeEndpoint operation.

### DescribeEndpointResponse
* DescribeEndpointResponse `object`: The output from the DescribeEndpoint operation.
  * endpointAddress [EndpointAddress](#endpointaddress)

### DescribeThingRequest
* DescribeThingRequest `object`: The input for the DescribeThing operation.

### DescribeThingResponse
* DescribeThingResponse `object`: The output from the DescribeThing operation.
  * attributes [Attributes](#attributes)
  * defaultClientId [ClientId](#clientid)
  * thingName [ThingName](#thingname)
  * thingTypeName [ThingTypeName](#thingtypename)
  * version [Version](#version)

### DescribeThingTypeRequest
* DescribeThingTypeRequest `object`: The input for the DescribeThingType operation.

### DescribeThingTypeResponse
* DescribeThingTypeResponse `object`: The output for the DescribeThingType operation.
  * thingTypeMetadata [ThingTypeMetadata](#thingtypemetadata)
  * thingTypeName [ThingTypeName](#thingtypename)
  * thingTypeProperties [ThingTypeProperties](#thingtypeproperties)

### Description
* Description `string`

### DetachPrincipalPolicyRequest
* DetachPrincipalPolicyRequest `object`: The input for the DetachPrincipalPolicy operation.

### DetachThingPrincipalRequest
* DetachThingPrincipalRequest `object`: The input for the DetachThingPrincipal operation.

### DetachThingPrincipalResponse
* DetachThingPrincipalResponse `object`: The output from the DetachThingPrincipal operation.

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

### EndpointAddress
* EndpointAddress `string`

### FirehoseAction
* FirehoseAction `object`: Describes an action that writes data to an Amazon Kinesis Firehose stream.
  * deliveryStreamName **required** [DeliveryStreamName](#deliverystreamname)
  * roleArn **required** [AwsArn](#awsarn)
  * separator [FirehoseSeparator](#firehoseseparator)

### FirehoseSeparator
* FirehoseSeparator `string`

### Flag
* Flag `boolean`

### FunctionArn
* FunctionArn `string`

### GetLoggingOptionsRequest
* GetLoggingOptionsRequest `object`: The input for the GetLoggingOptions operation.

### GetLoggingOptionsResponse
* GetLoggingOptionsResponse `object`: The output from the GetLoggingOptions operation.
  * logLevel [LogLevel](#loglevel)
  * roleArn [AwsArn](#awsarn)

### GetPolicyRequest
* GetPolicyRequest `object`: The input for the GetPolicy operation.

### GetPolicyResponse
* GetPolicyResponse `object`: The output from the GetPolicy operation.
  * defaultVersionId [PolicyVersionId](#policyversionid)
  * policyArn [PolicyArn](#policyarn)
  * policyDocument [PolicyDocument](#policydocument)
  * policyName [PolicyName](#policyname)

### GetPolicyVersionRequest
* GetPolicyVersionRequest `object`: The input for the GetPolicyVersion operation.

### GetPolicyVersionResponse
* GetPolicyVersionResponse `object`: The output from the GetPolicyVersion operation.
  * isDefaultVersion [IsDefaultVersion](#isdefaultversion)
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

### HashKeyField
* HashKeyField `string`

### HashKeyValue
* HashKeyValue `string`

### InternalException
* InternalException `object`: An unexpected error has occurred.
  * message [errorMessage](#errormessage)

### InternalFailureException
* InternalFailureException `object`: An unexpected error has occurred.
  * message [errorMessage](#errormessage)

### InvalidRequestException
* InvalidRequestException `object`: The request is not valid.
  * message [errorMessage](#errormessage)

### IsDefaultVersion
* IsDefaultVersion `boolean`

### IsDisabled
* IsDisabled `boolean`

### Key
* Key `string`

### KeyPair
* KeyPair `object`: Describes a key pair.
  * PrivateKey [PrivateKey](#privatekey)
  * PublicKey [PublicKey](#publickey)

### KinesisAction
* KinesisAction `object`: Describes an action to write data to an Amazon Kinesis stream.
  * partitionKey [PartitionKey](#partitionkey)
  * roleArn **required** [AwsArn](#awsarn)
  * streamName **required** [StreamName](#streamname)

### LambdaAction
* LambdaAction `object`: Describes an action to invoke a Lambda function.
  * functionArn **required** [FunctionArn](#functionarn)

### LimitExceededException
* LimitExceededException `object`: The number of attached entities exceeds the limit.
  * message [errorMessage](#errormessage)

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

### ListThingPrincipalsRequest
* ListThingPrincipalsRequest `object`: The input for the ListThingPrincipal operation.

### ListThingPrincipalsResponse
* ListThingPrincipalsResponse `object`: The output from the ListThingPrincipals operation.
  * principals [Principals](#principals)

### ListThingTypesRequest
* ListThingTypesRequest `object`: The input for the ListThingTypes operation.

### ListThingTypesResponse
* ListThingTypesResponse `object`: The output for the ListThingTypes operation.
  * nextToken [NextToken](#nexttoken)
  * thingTypes [ThingTypeList](#thingtypelist)

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

### LogLevel
* LogLevel `string` (values: DEBUG, INFO, ERROR, WARN, DISABLED)

### LoggingOptionsPayload
* LoggingOptionsPayload `object`: Describes the logging options payload.
  * logLevel [LogLevel](#loglevel)
  * roleArn **required** [AwsArn](#awsarn)

### MalformedPolicyException
* MalformedPolicyException `object`: The policy documentation is not valid.
  * message [errorMessage](#errormessage)

### Marker
* Marker `string`

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

### NextToken
* NextToken `string`

### OptionalVersion
* OptionalVersion `integer`

### OutgoingCertificate
* OutgoingCertificate `object`: A certificate that has been transfered but not yet accepted.
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

### PartitionKey
* PartitionKey `string`

### PayloadField
* PayloadField `string`

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

### PolicyName
* PolicyName `string`

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

### Principal
* Principal `string`

### PrincipalArn
* PrincipalArn `string`

### Principals
* Principals `array`
  * items [PrincipalArn](#principalarn)

### PrivateKey
* PrivateKey `string`

### PublicKey
* PublicKey `string`

### PutItemInput
* PutItemInput `object`: The input for the DynamoActionVS action that specifies the DynamoDB table to which the message data will be written.
  * tableName **required** [TableName](#tablename)

### QueueUrl
* QueueUrl `string`

### RangeKeyField
* RangeKeyField `string`

### RangeKeyValue
* RangeKeyValue `string`

### RegisterCACertificateRequest
* RegisterCACertificateRequest `object`: The input to the RegisterCACertificate operation.
  * caCertificate **required** [CertificatePem](#certificatepem)
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

### RegistrationCode
* RegistrationCode `string`

### RegistrationCodeValidationException
* RegistrationCodeValidationException `object`: The registration code is invalid.
  * message [errorMessage](#errormessage)

### RegistryMaxResults
* RegistryMaxResults `integer`

### RejectCertificateTransferRequest
* RejectCertificateTransferRequest `object`: The input for the RejectCertificateTransfer operation.
  * rejectReason [Message](#message)

### RemoveThingType
* RemoveThingType `boolean`

### ReplaceTopicRuleRequest
* ReplaceTopicRuleRequest `object`: The input for the ReplaceTopicRule operation.
  * topicRulePayload **required** [TopicRulePayload](#topicrulepayload)

### RepublishAction
* RepublishAction `object`: Describes an action to republish to another topic.
  * roleArn **required** [AwsArn](#awsarn)
  * topic **required** [TopicPattern](#topicpattern)

### ResourceAlreadyExistsException
* ResourceAlreadyExistsException `object`: The resource already exists.
  * message [errorMessage](#errormessage)
  * resourceArn [resourceArn](#resourcearn)
  * resourceId [resourceId](#resourceid)

### ResourceNotFoundException
* ResourceNotFoundException `object`: The specified resource does not exist.
  * message [errorMessage](#errormessage)

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

### SearchableAttributes
* SearchableAttributes `array`
  * items [AttributeName](#attributename)

### ServiceUnavailableException
* ServiceUnavailableException `object`: The service is temporarily unavailable.
  * message [errorMessage](#errormessage)

### SetAsActive
* SetAsActive `boolean`

### SetAsActiveFlag
* SetAsActiveFlag `boolean`

### SetAsDefault
* SetAsDefault `boolean`

### SetDefaultPolicyVersionRequest
* SetDefaultPolicyVersionRequest `object`: The input for the SetDefaultPolicyVersion operation.

### SetLoggingOptionsRequest
* SetLoggingOptionsRequest `object`: The input for the SetLoggingOptions operation.
  * loggingOptionsPayload **required** [LoggingOptionsPayload](#loggingoptionspayload)

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

### StateReason
* StateReason `string`

### StateValue
* StateValue `string`

### StreamName
* StreamName `string`

### TableName
* TableName `string`

### ThingArn
* ThingArn `string`

### ThingAttribute
* ThingAttribute `object`: The properties of the thing, including thing name, thing type name, and a list of thing attributes.
  * attributes [Attributes](#attributes)
  * thingName [ThingName](#thingname)
  * thingTypeName [ThingTypeName](#thingtypename)
  * version [Version](#version)

### ThingAttributeList
* ThingAttributeList `array`
  * items [ThingAttribute](#thingattribute)

### ThingName
* ThingName `string`

### ThingNameList
* ThingNameList `array`
  * items [ThingName](#thingname)

### ThingTypeArn
* ThingTypeArn `string`

### ThingTypeDefinition
* ThingTypeDefinition `object`: The definition of the thing type, including thing type name and description.
  * thingTypeMetadata [ThingTypeMetadata](#thingtypemetadata)
  * thingTypeName [ThingTypeName](#thingtypename)
  * thingTypeProperties [ThingTypeProperties](#thingtypeproperties)

### ThingTypeDescription
* ThingTypeDescription `string`

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

### UpdateCACertificateRequest
* UpdateCACertificateRequest `object`: The input to the UpdateCACertificate operation.

### UpdateCertificateRequest
* UpdateCertificateRequest `object`: The input for the UpdateCertificate operation.

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

### Version
* Version `integer`

### VersionConflictException
* VersionConflictException `object`: An exception thrown when the version of a thing passed to a command is different than the version specified with the --version parameter.
  * message [errorMessage](#errormessage)

### VersionsLimitExceededException
* VersionsLimitExceededException `object`: The number of policy versions exceeds the limit.
  * message [errorMessage](#errormessage)

### errorMessage
* errorMessage `string`

### resourceArn
* resourceArn `string`

### resourceId
* resourceId `string`


