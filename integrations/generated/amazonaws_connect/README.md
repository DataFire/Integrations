# @datafire/amazonaws_connect

Client library for Amazon Connect Service

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_connect
```
```js
let amazonaws_connect = require('@datafire/amazonaws_connect').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<p>Amazon Connect is a cloud-based contact center solution that makes it easy to set up and manage a customer contact center and provide reliable customer engagement at any scale.</p> <p>Amazon Connect provides rich metrics and real-time reporting that allow you to optimize contact routing. You can also resolve customer issues more efficiently by putting customers in touch with the right agents.</p> <p>There are limits to the number of Amazon Connect resources that you can create and limits to the number of requests that you can make per second. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html">Amazon Connect Service Quotas</a> in the <i>Amazon Connect Administrator Guide</i>.</p> <p>To connect programmatically to an AWS service, you use an endpoint. For a list of Amazon Connect endpoints, see <a href="https://docs.aws.amazon.com/general/latest/gr/connect_region.html">Amazon Connect Endpoints</a>.</p> <note> <p>Working with contact flows? Check out the <a href="https://docs.aws.amazon.com/connect/latest/adminguide/flow-language.html">Amazon Connect Flow language</a>.</p> </note>

## Actions

### ListContactFlows



```js
amazonaws_connect.ListContactFlows({
  "InstanceId": ""
}, context)
```

#### Input
* input `object`
  * InstanceId **required** `string`
  * contactFlowTypes `array`
  * nextToken `string`
  * maxResults `integer`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListContactFlowsResponse](#listcontactflowsresponse)

### CreateContactFlow



```js
amazonaws_connect.CreateContactFlow({
  "InstanceId": "",
  "Name": "",
  "Type": "",
  "Content": ""
}, context)
```

#### Input
* input `object`
  * InstanceId **required** `string`
  * Content **required** `string`: The content of the contact flow. 
  * Description `string`: The description of the contact flow. 
  * Name **required** `string`: The name of the contact flow.
  * Tags `object`: One or more tags.
  * Type **required** `string` (values: CONTACT_FLOW, CUSTOMER_QUEUE, CUSTOMER_HOLD, CUSTOMER_WHISPER, AGENT_HOLD, AGENT_WHISPER, OUTBOUND_WHISPER, AGENT_TRANSFER, QUEUE_TRANSFER): The type of the contact flow. For descriptions of the available types, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/create-contact-flow.html#contact-flow-types">Choose a Contact Flow Type</a> in the <i>Amazon Connect Administrator Guide</i>.

#### Output
* output [CreateContactFlowResponse](#createcontactflowresponse)

### DescribeContactFlow



```js
amazonaws_connect.DescribeContactFlow({
  "InstanceId": "",
  "ContactFlowId": ""
}, context)
```

#### Input
* input `object`
  * InstanceId **required** `string`
  * ContactFlowId **required** `string`

#### Output
* output [DescribeContactFlowResponse](#describecontactflowresponse)

### UpdateContactFlowContent



```js
amazonaws_connect.UpdateContactFlowContent({
  "InstanceId": "",
  "ContactFlowId": "",
  "Content": ""
}, context)
```

#### Input
* input `object`
  * InstanceId **required** `string`
  * ContactFlowId **required** `string`
  * Content **required** `string`: The JSON string that represents contact flow’s content. For an example, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/flow-language-example.html">Example contact flow in Amazon Connect Flow language</a> in the <i>Amazon Connect Administrator Guide</i>. 

#### Output
*Output schema unknown*

### UpdateContactFlowName



```js
amazonaws_connect.UpdateContactFlowName({
  "InstanceId": "",
  "ContactFlowId": ""
}, context)
```

#### Input
* input `object`
  * InstanceId **required** `string`
  * ContactFlowId **required** `string`
  * Description `string`: The description of the contact flow.
  * Name `string`: The name of the contact flow.

#### Output
*Output schema unknown*

### UpdateContactAttributes



```js
amazonaws_connect.UpdateContactAttributes({
  "InitialContactId": "",
  "InstanceId": "",
  "Attributes": {}
}, context)
```

#### Input
* input `object`
  * Attributes **required** `object`: <p>The Amazon Connect attributes. These attributes can be accessed in contact flows just like any other contact attributes.</p> <p>You can have up to 32,768 UTF-8 bytes across all attributes for a contact. Attribute keys can include only alphanumeric, dash, and underscore characters.</p>
  * InitialContactId **required** `string`: The identifier of the contact. This is the identifier of the contact associated with the first interaction with the contact center.
  * InstanceId **required** `string`: The identifier of the Amazon Connect instance.

#### Output
* output [UpdateContactAttributesResponse](#updatecontactattributesresponse)

### GetContactAttributes



```js
amazonaws_connect.GetContactAttributes({
  "InstanceId": "",
  "InitialContactId": ""
}, context)
```

#### Input
* input `object`
  * InstanceId **required** `string`
  * InitialContactId **required** `string`

#### Output
* output [GetContactAttributesResponse](#getcontactattributesresponse)

### StartChatContact



```js
amazonaws_connect.StartChatContact({
  "InstanceId": "",
  "ContactFlowId": "",
  "ParticipantDetails": {}
}, context)
```

#### Input
* input `object`
  * Attributes `object`: <p>A custom key-value pair using an attribute map. The attributes are standard Amazon Connect attributes, and can be accessed in contact flows just like any other contact attributes. </p> <p>There can be up to 32,768 UTF-8 bytes across all key-value pairs per contact. Attribute keys can include only alphanumeric, dash, and underscore characters.</p>
  * ClientToken `string`: A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
  * ContactFlowId **required** `string`: <p>The identifier of the contact flow for initiating the chat. To see the ContactFlowId in the Amazon Connect console user interface, on the navigation menu go to <b>Routing</b>, <b>Contact Flows</b>. Choose the contact flow. On the contact flow page, under the name of the contact flow, choose <b>Show additional flow information</b>. The ContactFlowId is the last part of the ARN, shown here in bold: </p> <p>arn:aws:connect:us-west-2:xxxxxxxxxxxx:instance/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/contact-flow/<b>846ec553-a005-41c0-8341-xxxxxxxxxxxx</b> </p>
  * InitialMessage `object`: A chat message.
    * Content
    * ContentType
  * InstanceId **required** `string`: The identifier of the Amazon Connect instance.
  * ParticipantDetails **required** `object`: The customer's details.
    * DisplayName

#### Output
* output [StartChatContactResponse](#startchatcontactresponse)

### StartOutboundVoiceContact



```js
amazonaws_connect.StartOutboundVoiceContact({
  "DestinationPhoneNumber": "",
  "ContactFlowId": "",
  "InstanceId": ""
}, context)
```

#### Input
* input `object`
  * Attributes `object`: <p>A custom key-value pair using an attribute map. The attributes are standard Amazon Connect attributes, and can be accessed in contact flows just like any other contact attributes.</p> <p>There can be up to 32,768 UTF-8 bytes across all key-value pairs per contact. Attribute keys can include only alphanumeric, dash, and underscore characters.</p>
  * ClientToken `string`: A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. The token is valid for 7 days after creation. If a contact is already started, the contact ID is returned. If the contact is disconnected, a new contact is started.
  * ContactFlowId **required** `string`: <p>The identifier of the contact flow for the outbound call. To see the ContactFlowId in the Amazon Connect console user interface, on the navigation menu go to <b>Routing</b>, <b>Contact Flows</b>. Choose the contact flow. On the contact flow page, under the name of the contact flow, choose <b>Show additional flow information</b>. The ContactFlowId is the last part of the ARN, shown here in bold: </p> <p>arn:aws:connect:us-west-2:xxxxxxxxxxxx:instance/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/contact-flow/<b>846ec553-a005-41c0-8341-xxxxxxxxxxxx</b> </p>
  * DestinationPhoneNumber **required** `string`: The phone number of the customer, in E.164 format.
  * InstanceId **required** `string`: The identifier of the Amazon Connect instance.
  * QueueId `string`: The queue for the call. If you specify a queue, the phone displayed for caller ID is the phone number specified in the queue. If you do not specify a queue, the queue defined in the contact flow is used. If you do not specify a queue, you must specify a source phone number.
  * SourcePhoneNumber `string`: The phone number associated with the Amazon Connect instance, in E.164 format. If you do not specify a source phone number, you must specify a queue.

#### Output
* output [StartOutboundVoiceContactResponse](#startoutboundvoicecontactresponse)

### ResumeContactRecording



```js
amazonaws_connect.ResumeContactRecording({
  "InstanceId": "",
  "ContactId": "",
  "InitialContactId": ""
}, context)
```

#### Input
* input `object`
  * ContactId **required** `string`: The identifier of the contact.
  * InitialContactId **required** `string`: The identifier of the contact. This is the identifier of the contact associated with the first interaction with the contact center.
  * InstanceId **required** `string`: The identifier of the Amazon Connect instance.

#### Output
* output [ResumeContactRecordingResponse](#resumecontactrecordingresponse)

### StartContactRecording



```js
amazonaws_connect.StartContactRecording({
  "InstanceId": "",
  "ContactId": "",
  "InitialContactId": "",
  "VoiceRecordingConfiguration": {}
}, context)
```

#### Input
* input `object`
  * ContactId **required** `string`: The identifier of the contact.
  * InitialContactId **required** `string`: The identifier of the contact. This is the identifier of the contact associated with the first interaction with the contact center.
  * InstanceId **required** `string`: The identifier of the Amazon Connect instance.
  * VoiceRecordingConfiguration **required** `object`: Contains information about the recording configuration settings.
    * VoiceRecordingTrack

#### Output
* output [StartContactRecordingResponse](#startcontactrecordingresponse)

### StopContact



```js
amazonaws_connect.StopContact({
  "ContactId": "",
  "InstanceId": ""
}, context)
```

#### Input
* input `object`
  * ContactId **required** `string`: The ID of the contact.
  * InstanceId **required** `string`: The identifier of the Amazon Connect instance.

#### Output
* output [StopContactResponse](#stopcontactresponse)

### StopContactRecording



```js
amazonaws_connect.StopContactRecording({
  "InstanceId": "",
  "ContactId": "",
  "InitialContactId": ""
}, context)
```

#### Input
* input `object`
  * ContactId **required** `string`: The identifier of the contact.
  * InitialContactId **required** `string`: The identifier of the contact. This is the identifier of the contact associated with the first interaction with the contact center.
  * InstanceId **required** `string`: The identifier of the Amazon Connect instance.

#### Output
* output [StopContactRecordingResponse](#stopcontactrecordingresponse)

### SuspendContactRecording



```js
amazonaws_connect.SuspendContactRecording({
  "InstanceId": "",
  "ContactId": "",
  "InitialContactId": ""
}, context)
```

#### Input
* input `object`
  * ContactId **required** `string`: The identifier of the contact.
  * InitialContactId **required** `string`: The identifier of the contact. This is the identifier of the contact associated with the first interaction with the contact center.
  * InstanceId **required** `string`: The identifier of the Amazon Connect instance.

#### Output
* output [SuspendContactRecordingResponse](#suspendcontactrecordingresponse)

### StartTaskContact



```js
amazonaws_connect.StartTaskContact({
  "InstanceId": "",
  "ContactFlowId": "",
  "Name": ""
}, context)
```

#### Input
* input `object`
  * Attributes `object`: <p>A custom key-value pair using an attribute map. The attributes are standard Amazon Connect attributes, and can be accessed in contact flows just like any other contact attributes.</p> <p>There can be up to 32,768 UTF-8 bytes across all key-value pairs per contact. Attribute keys can include only alphanumeric, dash, and underscore characters.</p>
  * ClientToken `string`: A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
  * ContactFlowId **required** `string`: <p>The identifier of the contact flow for initiating the tasks. To see the ContactFlowId in the Amazon Connect console user interface, on the navigation menu go to <b>Routing</b>, <b>Contact Flows</b>. Choose the contact flow. On the contact flow page, under the name of the contact flow, choose <b>Show additional flow information</b>. The ContactFlowId is the last part of the ARN, shown here in bold: </p> <p>arn:aws:connect:us-west-2:xxxxxxxxxxxx:instance/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/contact-flow/<b>846ec553-a005-41c0-8341-xxxxxxxxxxxx</b> </p>
  * Description `string`: A description of the task that is shown to an agent in the Contact Control Panel (CCP).
  * InstanceId **required** `string`: The identifier of the Amazon Connect instance.
  * Name **required** `string`: The name of a task that is shown to an agent in the Contact Control Panel (CCP).
  * PreviousContactId `string`: The identifier of the previous chat, voice, or task contact. 
  * References `object`: A formatted URL that is shown to an agent in the Contact Control Panel (CCP).

#### Output
* output [StartTaskContactResponse](#starttaskcontactresponse)

### ListHoursOfOperations



```js
amazonaws_connect.ListHoursOfOperations({
  "InstanceId": ""
}, context)
```

#### Input
* input `object`
  * InstanceId **required** `string`
  * nextToken `string`
  * maxResults `integer`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListHoursOfOperationsResponse](#listhoursofoperationsresponse)

### ListInstances



```js
amazonaws_connect.ListInstances({}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * maxResults `integer`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListInstancesResponse](#listinstancesresponse)

### CreateInstance



```js
amazonaws_connect.CreateInstance({
  "IdentityManagementType": "",
  "InboundCallsEnabled": true,
  "OutboundCallsEnabled": true
}, context)
```

#### Input
* input `object`
  * ClientToken `string`: The idempotency token.
  * DirectoryId `string`: The identifier for the directory.
  * IdentityManagementType **required** `string` (values: SAML, CONNECT_MANAGED, EXISTING_DIRECTORY): The type of identity management for your Amazon Connect users.
  * InboundCallsEnabled **required** `boolean`: Whether your contact center handles incoming contacts.
  * InstanceAlias `string`: The name for your instance.
  * OutboundCallsEnabled **required** `boolean`: Whether your contact center allows outbound calls.

#### Output
* output [CreateInstanceResponse](#createinstanceresponse)

### DeleteInstance



```js
amazonaws_connect.DeleteInstance({
  "InstanceId": ""
}, context)
```

#### Input
* input `object`
  * InstanceId **required** `string`

#### Output
*Output schema unknown*

### DescribeInstance



```js
amazonaws_connect.DescribeInstance({
  "InstanceId": ""
}, context)
```

#### Input
* input `object`
  * InstanceId **required** `string`

#### Output
* output [DescribeInstanceResponse](#describeinstanceresponse)

### AssociateApprovedOrigin



```js
amazonaws_connect.AssociateApprovedOrigin({
  "InstanceId": "",
  "Origin": ""
}, context)
```

#### Input
* input `object`
  * InstanceId **required** `string`
  * Origin **required** `string`: The domain to add to your allow list.

#### Output
*Output schema unknown*

### DisassociateApprovedOrigin



```js
amazonaws_connect.DisassociateApprovedOrigin({
  "InstanceId": "",
  "origin": ""
}, context)
```

#### Input
* input `object`
  * InstanceId **required** `string`
  * origin **required** `string`

#### Output
*Output schema unknown*

### ListApprovedOrigins



```js
amazonaws_connect.ListApprovedOrigins({
  "InstanceId": ""
}, context)
```

#### Input
* input `object`
  * InstanceId **required** `string`
  * nextToken `string`
  * maxResults `integer`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListApprovedOriginsResponse](#listapprovedoriginsresponse)

### DescribeInstanceAttribute



```js
amazonaws_connect.DescribeInstanceAttribute({
  "InstanceId": "",
  "AttributeType": ""
}, context)
```

#### Input
* input `object`
  * InstanceId **required** `string`
  * AttributeType **required** `string`

#### Output
* output [DescribeInstanceAttributeResponse](#describeinstanceattributeresponse)

### UpdateInstanceAttribute



```js
amazonaws_connect.UpdateInstanceAttribute({
  "InstanceId": "",
  "AttributeType": "",
  "Value": ""
}, context)
```

#### Input
* input `object`
  * InstanceId **required** `string`
  * AttributeType **required** `string`
  * Value **required** `string`: The value for the attribute. Maximum character limit is 100. 

#### Output
*Output schema unknown*

### ListInstanceAttributes



```js
amazonaws_connect.ListInstanceAttributes({
  "InstanceId": ""
}, context)
```

#### Input
* input `object`
  * InstanceId **required** `string`
  * nextToken `string`
  * maxResults `integer`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListInstanceAttributesResponse](#listinstanceattributesresponse)

### ListIntegrationAssociations



```js
amazonaws_connect.ListIntegrationAssociations({
  "InstanceId": ""
}, context)
```

#### Input
* input `object`
  * InstanceId **required** `string`
  * nextToken `string`
  * maxResults `integer`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListIntegrationAssociationsResponse](#listintegrationassociationsresponse)

### CreateIntegrationAssociation



```js
amazonaws_connect.CreateIntegrationAssociation({
  "InstanceId": "",
  "IntegrationType": "",
  "IntegrationArn": "",
  "SourceApplicationUrl": "",
  "SourceApplicationName": "",
  "SourceType": ""
}, context)
```

#### Input
* input `object`
  * InstanceId **required** `string`
  * IntegrationArn **required** `string`: The Amazon Resource Name (ARN) of the integration.
  * IntegrationType **required** `string` (values: EVENT): The type of information to be ingested.
  * SourceApplicationName **required** `string`: The name of the external application.
  * SourceApplicationUrl **required** `string`: The URL for the external application.
  * SourceType **required** `string` (values: SALESFORCE, ZENDESK): The type of the data source.

#### Output
* output [CreateIntegrationAssociationResponse](#createintegrationassociationresponse)

### DeleteIntegrationAssociation



```js
amazonaws_connect.DeleteIntegrationAssociation({
  "InstanceId": "",
  "IntegrationAssociationId": ""
}, context)
```

#### Input
* input `object`
  * InstanceId **required** `string`
  * IntegrationAssociationId **required** `string`

#### Output
*Output schema unknown*

### ListUseCases



```js
amazonaws_connect.ListUseCases({
  "InstanceId": "",
  "IntegrationAssociationId": ""
}, context)
```

#### Input
* input `object`
  * InstanceId **required** `string`
  * IntegrationAssociationId **required** `string`
  * nextToken `string`
  * maxResults `integer`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListUseCasesResponse](#listusecasesresponse)

### CreateUseCase



```js
amazonaws_connect.CreateUseCase({
  "InstanceId": "",
  "IntegrationAssociationId": "",
  "UseCaseType": ""
}, context)
```

#### Input
* input `object`
  * InstanceId **required** `string`
  * IntegrationAssociationId **required** `string`
  * UseCaseType **required** `string` (values: RULES_EVALUATION): The type of use case to associate to the AppIntegration association. Each AppIntegration association can have only one of each use case type.

#### Output
* output [CreateUseCaseResponse](#createusecaseresponse)

### DeleteUseCase



```js
amazonaws_connect.DeleteUseCase({
  "InstanceId": "",
  "IntegrationAssociationId": "",
  "UseCaseId": ""
}, context)
```

#### Input
* input `object`
  * InstanceId **required** `string`
  * IntegrationAssociationId **required** `string`
  * UseCaseId **required** `string`

#### Output
*Output schema unknown*

### AssociateLambdaFunction



```js
amazonaws_connect.AssociateLambdaFunction({
  "InstanceId": "",
  "FunctionArn": ""
}, context)
```

#### Input
* input `object`
  * InstanceId **required** `string`
  * FunctionArn **required** `string`: The Amazon Resource Name (ARN) for the Lambda function being associated. Maximum number of characters allowed is 140.

#### Output
*Output schema unknown*

### DisassociateLambdaFunction



```js
amazonaws_connect.DisassociateLambdaFunction({
  "InstanceId": "",
  "functionArn": ""
}, context)
```

#### Input
* input `object`
  * InstanceId **required** `string`
  * functionArn **required** `string`

#### Output
*Output schema unknown*

### ListLambdaFunctions



```js
amazonaws_connect.ListLambdaFunctions({
  "InstanceId": ""
}, context)
```

#### Input
* input `object`
  * InstanceId **required** `string`
  * nextToken `string`
  * maxResults `integer`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListLambdaFunctionsResponse](#listlambdafunctionsresponse)

### AssociateLexBot



```js
amazonaws_connect.AssociateLexBot({
  "InstanceId": "",
  "LexBot": {}
}, context)
```

#### Input
* input `object`
  * InstanceId **required** `string`
  * LexBot **required** `object`: Configuration information of an Amazon Lex bot.
    * LexRegion
    * Name

#### Output
*Output schema unknown*

### DisassociateLexBot



```js
amazonaws_connect.DisassociateLexBot({
  "InstanceId": "",
  "botName": "",
  "lexRegion": ""
}, context)
```

#### Input
* input `object`
  * InstanceId **required** `string`
  * botName **required** `string`
  * lexRegion **required** `string`

#### Output
*Output schema unknown*

### ListLexBots



```js
amazonaws_connect.ListLexBots({
  "InstanceId": ""
}, context)
```

#### Input
* input `object`
  * InstanceId **required** `string`
  * nextToken `string`
  * maxResults `integer`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListLexBotsResponse](#listlexbotsresponse)

### AssociateSecurityKey



```js
amazonaws_connect.AssociateSecurityKey({
  "InstanceId": "",
  "Key": ""
}, context)
```

#### Input
* input `object`
  * InstanceId **required** `string`
  * Key **required** `string`: A valid security key in PEM format.

#### Output
* output [AssociateSecurityKeyResponse](#associatesecuritykeyresponse)

### DisassociateSecurityKey



```js
amazonaws_connect.DisassociateSecurityKey({
  "InstanceId": "",
  "AssociationId": ""
}, context)
```

#### Input
* input `object`
  * InstanceId **required** `string`
  * AssociationId **required** `string`

#### Output
*Output schema unknown*

### ListSecurityKeys



```js
amazonaws_connect.ListSecurityKeys({
  "InstanceId": ""
}, context)
```

#### Input
* input `object`
  * InstanceId **required** `string`
  * nextToken `string`
  * maxResults `integer`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListSecurityKeysResponse](#listsecuritykeysresponse)

### AssociateInstanceStorageConfig



```js
amazonaws_connect.AssociateInstanceStorageConfig({
  "InstanceId": "",
  "ResourceType": "",
  "StorageConfig": {}
}, context)
```

#### Input
* input `object`
  * InstanceId **required** `string`
  * ResourceType **required** `string` (values: CHAT_TRANSCRIPTS, CALL_RECORDINGS, SCHEDULED_REPORTS, MEDIA_STREAMS, CONTACT_TRACE_RECORDS, AGENT_EVENTS): A valid resource type.
  * StorageConfig **required** `object`: The storage configuration for the instance.
    * AssociationId
    * KinesisFirehoseConfig
      * FirehoseArn **required**
    * KinesisStreamConfig
      * StreamArn **required**
    * KinesisVideoStreamConfig
      * EncryptionConfig **required**
        * EncryptionType **required**
        * KeyId **required**
      * Prefix **required**
      * RetentionPeriodHours **required**
    * S3Config
      * BucketName **required**
      * BucketPrefix **required**
      * EncryptionConfig
        * EncryptionType **required**
        * KeyId **required**
    * StorageType

#### Output
* output [AssociateInstanceStorageConfigResponse](#associateinstancestorageconfigresponse)

### DisassociateInstanceStorageConfig



```js
amazonaws_connect.DisassociateInstanceStorageConfig({
  "InstanceId": "",
  "AssociationId": "",
  "resourceType": ""
}, context)
```

#### Input
* input `object`
  * InstanceId **required** `string`
  * AssociationId **required** `string`
  * resourceType **required** `string`

#### Output
*Output schema unknown*

### DescribeInstanceStorageConfig



```js
amazonaws_connect.DescribeInstanceStorageConfig({
  "InstanceId": "",
  "AssociationId": "",
  "resourceType": ""
}, context)
```

#### Input
* input `object`
  * InstanceId **required** `string`
  * AssociationId **required** `string`
  * resourceType **required** `string`

#### Output
* output [DescribeInstanceStorageConfigResponse](#describeinstancestorageconfigresponse)

### UpdateInstanceStorageConfig



```js
amazonaws_connect.UpdateInstanceStorageConfig({
  "InstanceId": "",
  "AssociationId": "",
  "resourceType": "",
  "StorageConfig": {}
}, context)
```

#### Input
* input `object`
  * InstanceId **required** `string`
  * AssociationId **required** `string`
  * resourceType **required** `string`
  * StorageConfig **required** `object`: The storage configuration for the instance.
    * AssociationId
    * KinesisFirehoseConfig
      * FirehoseArn **required**
    * KinesisStreamConfig
      * StreamArn **required**
    * KinesisVideoStreamConfig
      * EncryptionConfig **required**
        * EncryptionType **required**
        * KeyId **required**
      * Prefix **required**
      * RetentionPeriodHours **required**
    * S3Config
      * BucketName **required**
      * BucketPrefix **required**
      * EncryptionConfig
        * EncryptionType **required**
        * KeyId **required**
    * StorageType

#### Output
*Output schema unknown*

### ListInstanceStorageConfigs



```js
amazonaws_connect.ListInstanceStorageConfigs({
  "InstanceId": "",
  "resourceType": ""
}, context)
```

#### Input
* input `object`
  * InstanceId **required** `string`
  * resourceType **required** `string`
  * nextToken `string`
  * maxResults `integer`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListInstanceStorageConfigsResponse](#listinstancestorageconfigsresponse)

### GetCurrentMetricData



```js
amazonaws_connect.GetCurrentMetricData({
  "InstanceId": "",
  "Filters": {},
  "CurrentMetrics": []
}, context)
```

#### Input
* input `object`
  * InstanceId **required** `string`
  * MaxResults `string`
  * NextToken `string`
  * CurrentMetrics **required** `array`: <p>The metrics to retrieve. Specify the name and unit for each metric. The following metrics are available. For a description of all the metrics, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html">Real-time Metrics Definitions</a> in the <i>Amazon Connect Administrator Guide</i>.</p> <dl> <dt>AGENTS_AFTER_CONTACT_WORK</dt> <dd> <p>Unit: COUNT</p> <p>Name in real-time metrics report: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html#aftercallwork-real-time">ACW</a> </p> </dd> <dt>AGENTS_AVAILABLE</dt> <dd> <p>Unit: COUNT</p> <p>Name in real-time metrics report: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html#available-real-time">Available</a> </p> </dd> <dt>AGENTS_ERROR</dt> <dd> <p>Unit: COUNT</p> <p>Name in real-time metrics report: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html#error-real-time">Error</a> </p> </dd> <dt>AGENTS_NON_PRODUCTIVE</dt> <dd> <p>Unit: COUNT</p> <p>Name in real-time metrics report: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html#non-productive-time-real-time">NPT (Non-Productive Time)</a> </p> </dd> <dt>AGENTS_ON_CALL</dt> <dd> <p>Unit: COUNT</p> <p>Name in real-time metrics report: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html#on-call-real-time">On contact</a> </p> </dd> <dt>AGENTS_ON_CONTACT</dt> <dd> <p>Unit: COUNT</p> <p>Name in real-time metrics report: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html#on-call-real-time">On contact</a> </p> </dd> <dt>AGENTS_ONLINE</dt> <dd> <p>Unit: COUNT</p> <p>Name in real-time metrics report: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html#online-real-time">Online</a> </p> </dd> <dt>AGENTS_STAFFED</dt> <dd> <p>Unit: COUNT</p> <p>Name in real-time metrics report: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html#staffed-real-time">Staffed</a> </p> </dd> <dt>CONTACTS_IN_QUEUE</dt> <dd> <p>Unit: COUNT</p> <p>Name in real-time metrics report: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html#in-queue-real-time">In queue</a> </p> </dd> <dt>CONTACTS_SCHEDULED</dt> <dd> <p>Unit: COUNT</p> <p>Name in real-time metrics report: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html#scheduled-real-time">Scheduled</a> </p> </dd> <dt>OLDEST_CONTACT_AGE</dt> <dd> <p>Unit: SECONDS</p> <p>When you use groupings, Unit says SECONDS but the Value is returned in MILLISECONDS. For example, if you get a response like this:</p> <p> <code>{ "Metric": { "Name": "OLDEST_CONTACT_AGE", "Unit": "SECONDS" }, "Value": 24113.0 </code>}</p> <p>The actual OLDEST_CONTACT_AGE is 24 seconds.</p> <p>Name in real-time metrics report: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html#oldest-real-time">Oldest</a> </p> </dd> <dt>SLOTS_ACTIVE</dt> <dd> <p>Unit: COUNT</p> <p>Name in real-time metrics report: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html#active-real-time">Active</a> </p> </dd> <dt>SLOTS_AVAILABLE</dt> <dd> <p>Unit: COUNT</p> <p>Name in real-time metrics report: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html#availability-real-time">Availability</a> </p> </dd> </dl>
    * items [CurrentMetric](#currentmetric)
  * Filters **required** `object`: Contains the filter to apply when retrieving metrics.
    * Channels
      * items [Channel](#channel)
    * Queues
      * items [QueueId](#queueid)
  * Groupings `array`: <p>The grouping applied to the metrics returned. For example, when grouped by <code>QUEUE</code>, the metrics returned apply to each queue rather than aggregated for all queues. If you group by <code>CHANNEL</code>, you should include a Channels filter. VOICE, CHAT, and TASK channels are supported.</p> <p>If no <code>Grouping</code> is included in the request, a summary of metrics is returned.</p>
    * items [Grouping](#grouping)
  * MaxResults `integer`: The maximimum number of results to return per page.
  * NextToken `string`: <p>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</p> <p>The token expires after 5 minutes from the time it is created. Subsequent requests that use the token must use the same request parameters as the request that generated the token.</p>

#### Output
* output [GetCurrentMetricDataResponse](#getcurrentmetricdataresponse)

### GetMetricData



```js
amazonaws_connect.GetMetricData({
  "InstanceId": "",
  "StartTime": "",
  "EndTime": "",
  "Filters": {},
  "HistoricalMetrics": []
}, context)
```

#### Input
* input `object`
  * InstanceId **required** `string`
  * MaxResults `string`
  * NextToken `string`
  * EndTime **required** `string`: <p>The timestamp, in UNIX Epoch time format, at which to end the reporting interval for the retrieval of historical metrics data. The time must be specified using an interval of 5 minutes, such as 11:00, 11:05, 11:10, and must be later than the start time timestamp.</p> <p>The time range between the start and end time must be less than 24 hours.</p>
  * Filters **required** `object`: Contains the filter to apply when retrieving metrics.
    * Channels
      * items [Channel](#channel)
    * Queues
      * items [QueueId](#queueid)
  * Groupings `array`: <p>The grouping applied to the metrics returned. For example, when results are grouped by queue, the metrics returned are grouped by queue. The values returned apply to the metrics for each queue rather than aggregated for all queues.</p> <p>The only supported grouping is <code>QUEUE</code>.</p> <p>If no grouping is specified, a summary of metrics for all queues is returned.</p>
    * items [Grouping](#grouping)
  * HistoricalMetrics **required** `array`: <p>The metrics to retrieve. Specify the name, unit, and statistic for each metric. The following historical metrics are available. For a description of each metric, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html">Historical Metrics Definitions</a> in the <i>Amazon Connect Administrator Guide</i>.</p> <dl> <dt>ABANDON_TIME</dt> <dd> <p>Unit: SECONDS</p> <p>Statistic: AVG</p> </dd> <dt>AFTER_CONTACT_WORK_TIME</dt> <dd> <p>Unit: SECONDS</p> <p>Statistic: AVG</p> </dd> <dt>API_CONTACTS_HANDLED</dt> <dd> <p>Unit: COUNT</p> <p>Statistic: SUM</p> </dd> <dt>CALLBACK_CONTACTS_HANDLED</dt> <dd> <p>Unit: COUNT</p> <p>Statistic: SUM</p> </dd> <dt>CONTACTS_ABANDONED</dt> <dd> <p>Unit: COUNT</p> <p>Statistic: SUM</p> </dd> <dt>CONTACTS_AGENT_HUNG_UP_FIRST</dt> <dd> <p>Unit: COUNT</p> <p>Statistic: SUM</p> </dd> <dt>CONTACTS_CONSULTED</dt> <dd> <p>Unit: COUNT</p> <p>Statistic: SUM</p> </dd> <dt>CONTACTS_HANDLED</dt> <dd> <p>Unit: COUNT</p> <p>Statistic: SUM</p> </dd> <dt>CONTACTS_HANDLED_INCOMING</dt> <dd> <p>Unit: COUNT</p> <p>Statistic: SUM</p> </dd> <dt>CONTACTS_HANDLED_OUTBOUND</dt> <dd> <p>Unit: COUNT</p> <p>Statistic: SUM</p> </dd> <dt>CONTACTS_HOLD_ABANDONS</dt> <dd> <p>Unit: COUNT</p> <p>Statistic: SUM</p> </dd> <dt>CONTACTS_MISSED</dt> <dd> <p>Unit: COUNT</p> <p>Statistic: SUM</p> </dd> <dt>CONTACTS_QUEUED</dt> <dd> <p>Unit: COUNT</p> <p>Statistic: SUM</p> </dd> <dt>CONTACTS_TRANSFERRED_IN</dt> <dd> <p>Unit: COUNT</p> <p>Statistic: SUM</p> </dd> <dt>CONTACTS_TRANSFERRED_IN_FROM_QUEUE</dt> <dd> <p>Unit: COUNT</p> <p>Statistic: SUM</p> </dd> <dt>CONTACTS_TRANSFERRED_OUT</dt> <dd> <p>Unit: COUNT</p> <p>Statistic: SUM</p> </dd> <dt>CONTACTS_TRANSFERRED_OUT_FROM_QUEUE</dt> <dd> <p>Unit: COUNT</p> <p>Statistic: SUM</p> </dd> <dt>HANDLE_TIME</dt> <dd> <p>Unit: SECONDS</p> <p>Statistic: AVG</p> </dd> <dt>HOLD_TIME</dt> <dd> <p>Unit: SECONDS</p> <p>Statistic: AVG</p> </dd> <dt>INTERACTION_AND_HOLD_TIME</dt> <dd> <p>Unit: SECONDS</p> <p>Statistic: AVG</p> </dd> <dt>INTERACTION_TIME</dt> <dd> <p>Unit: SECONDS</p> <p>Statistic: AVG</p> </dd> <dt>OCCUPANCY</dt> <dd> <p>Unit: PERCENT</p> <p>Statistic: AVG</p> </dd> <dt>QUEUE_ANSWER_TIME</dt> <dd> <p>Unit: SECONDS</p> <p>Statistic: AVG</p> </dd> <dt>QUEUED_TIME</dt> <dd> <p>Unit: SECONDS</p> <p>Statistic: MAX</p> </dd> <dt>SERVICE_LEVEL</dt> <dd> <p>Unit: PERCENT</p> <p>Statistic: AVG</p> <p>Threshold: Only "Less than" comparisons are supported, with the following service level thresholds: 15, 20, 25, 30, 45, 60, 90, 120, 180, 240, 300, 600</p> </dd> </dl>
    * items [HistoricalMetric](#historicalmetric)
  * MaxResults `integer`: The maximimum number of results to return per page.
  * NextToken `string`: The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
  * StartTime **required** `string`: <p>The timestamp, in UNIX Epoch time format, at which to start the reporting interval for the retrieval of historical metrics data. The time must be specified using a multiple of 5 minutes, such as 10:05, 10:10, 10:15.</p> <p>The start time cannot be earlier than 24 hours before the time of the request. Historical metrics are available only for 24 hours.</p>

#### Output
* output [GetMetricDataResponse](#getmetricdataresponse)

### ListPhoneNumbers



```js
amazonaws_connect.ListPhoneNumbers({
  "InstanceId": ""
}, context)
```

#### Input
* input `object`
  * InstanceId **required** `string`
  * phoneNumberTypes `array`
  * phoneNumberCountryCodes `array`
  * nextToken `string`
  * maxResults `integer`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListPhoneNumbersResponse](#listphonenumbersresponse)

### ListPrompts



```js
amazonaws_connect.ListPrompts({
  "InstanceId": ""
}, context)
```

#### Input
* input `object`
  * InstanceId **required** `string`
  * nextToken `string`
  * maxResults `integer`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListPromptsResponse](#listpromptsresponse)

### ListQueues



```js
amazonaws_connect.ListQueues({
  "InstanceId": ""
}, context)
```

#### Input
* input `object`
  * InstanceId **required** `string`
  * queueTypes `array`
  * nextToken `string`
  * maxResults `integer`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListQueuesResponse](#listqueuesresponse)

### ListRoutingProfiles



```js
amazonaws_connect.ListRoutingProfiles({
  "InstanceId": ""
}, context)
```

#### Input
* input `object`
  * InstanceId **required** `string`
  * nextToken `string`
  * maxResults `integer`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListRoutingProfilesResponse](#listroutingprofilesresponse)

### CreateRoutingProfile



```js
amazonaws_connect.CreateRoutingProfile({
  "InstanceId": "",
  "Name": "",
  "Description": "",
  "DefaultOutboundQueueId": "",
  "MediaConcurrencies": []
}, context)
```

#### Input
* input `object`
  * InstanceId **required** `string`
  * DefaultOutboundQueueId **required** `string`: The default outbound queue for the routing profile.
  * Description **required** `string`: Description of the routing profile. Must not be more than 250 characters.
  * MediaConcurrencies **required** `array`: The channels agents can handle in the Contact Control Panel (CCP) for this routing profile.
    * items [MediaConcurrency](#mediaconcurrency)
  * Name **required** `string`: The name of the routing profile. Must not be more than 127 characters.
  * QueueConfigs `array`: The inbound queues associated with the routing profile. If no queue is added, the agent can only make outbound calls.
    * items [RoutingProfileQueueConfig](#routingprofilequeueconfig)
  * Tags `object`: One or more tags.

#### Output
* output [CreateRoutingProfileResponse](#createroutingprofileresponse)

### DescribeRoutingProfile



```js
amazonaws_connect.DescribeRoutingProfile({
  "InstanceId": "",
  "RoutingProfileId": ""
}, context)
```

#### Input
* input `object`
  * InstanceId **required** `string`
  * RoutingProfileId **required** `string`

#### Output
* output [DescribeRoutingProfileResponse](#describeroutingprofileresponse)

### AssociateRoutingProfileQueues



```js
amazonaws_connect.AssociateRoutingProfileQueues({
  "InstanceId": "",
  "RoutingProfileId": "",
  "QueueConfigs": []
}, context)
```

#### Input
* input `object`
  * InstanceId **required** `string`
  * RoutingProfileId **required** `string`
  * QueueConfigs **required** `array`: The queues to associate with this routing profile.
    * items [RoutingProfileQueueConfig](#routingprofilequeueconfig)

#### Output
*Output schema unknown*

### UpdateRoutingProfileConcurrency



```js
amazonaws_connect.UpdateRoutingProfileConcurrency({
  "InstanceId": "",
  "RoutingProfileId": "",
  "MediaConcurrencies": []
}, context)
```

#### Input
* input `object`
  * InstanceId **required** `string`
  * RoutingProfileId **required** `string`
  * MediaConcurrencies **required** `array`: The channels agents can handle in the Contact Control Panel (CCP).
    * items [MediaConcurrency](#mediaconcurrency)

#### Output
*Output schema unknown*

### UpdateRoutingProfileDefaultOutboundQueue



```js
amazonaws_connect.UpdateRoutingProfileDefaultOutboundQueue({
  "InstanceId": "",
  "RoutingProfileId": "",
  "DefaultOutboundQueueId": ""
}, context)
```

#### Input
* input `object`
  * InstanceId **required** `string`
  * RoutingProfileId **required** `string`
  * DefaultOutboundQueueId **required** `string`: The identifier for the default outbound queue.

#### Output
*Output schema unknown*

### DisassociateRoutingProfileQueues



```js
amazonaws_connect.DisassociateRoutingProfileQueues({
  "InstanceId": "",
  "RoutingProfileId": "",
  "QueueReferences": []
}, context)
```

#### Input
* input `object`
  * InstanceId **required** `string`
  * RoutingProfileId **required** `string`
  * QueueReferences **required** `array`: The queues to disassociate from this routing profile.
    * items [RoutingProfileQueueReference](#routingprofilequeuereference)

#### Output
*Output schema unknown*

### UpdateRoutingProfileName



```js
amazonaws_connect.UpdateRoutingProfileName({
  "InstanceId": "",
  "RoutingProfileId": ""
}, context)
```

#### Input
* input `object`
  * InstanceId **required** `string`
  * RoutingProfileId **required** `string`
  * Description `string`: The description of the routing profile. Must not be more than 250 characters.
  * Name `string`: The name of the routing profile. Must not be more than 127 characters.

#### Output
*Output schema unknown*

### ListRoutingProfileQueues



```js
amazonaws_connect.ListRoutingProfileQueues({
  "InstanceId": "",
  "RoutingProfileId": ""
}, context)
```

#### Input
* input `object`
  * InstanceId **required** `string`
  * RoutingProfileId **required** `string`
  * nextToken `string`
  * maxResults `integer`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListRoutingProfileQueuesResponse](#listroutingprofilequeuesresponse)

### UpdateRoutingProfileQueues



```js
amazonaws_connect.UpdateRoutingProfileQueues({
  "InstanceId": "",
  "RoutingProfileId": "",
  "QueueConfigs": []
}, context)
```

#### Input
* input `object`
  * InstanceId **required** `string`
  * RoutingProfileId **required** `string`
  * QueueConfigs **required** `array`: The queues to be updated for this routing profile. Queues must first be associated to the routing profile. You can do this using AssociateRoutingProfileQueues.
    * items [RoutingProfileQueueConfig](#routingprofilequeueconfig)

#### Output
*Output schema unknown*

### ListSecurityProfiles



```js
amazonaws_connect.ListSecurityProfiles({
  "InstanceId": ""
}, context)
```

#### Input
* input `object`
  * InstanceId **required** `string`
  * nextToken `string`
  * maxResults `integer`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListSecurityProfilesResponse](#listsecurityprofilesresponse)

### ListTagsForResource



```js
amazonaws_connect.ListTagsForResource({
  "resourceArn": ""
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`

#### Output
* output [ListTagsForResourceResponse](#listtagsforresourceresponse)

### TagResource



```js
amazonaws_connect.TagResource({
  "resourceArn": "",
  "tags": {}
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`
  * tags **required** `object`: One or more tags. For example, { "tags": {"key1":"value1", "key2":"value2"} }.

#### Output
*Output schema unknown*

### UntagResource



```js
amazonaws_connect.UntagResource({
  "resourceArn": "",
  "tagKeys": []
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`
  * tagKeys **required** `array`

#### Output
*Output schema unknown*

### ListUserHierarchyGroups



```js
amazonaws_connect.ListUserHierarchyGroups({
  "InstanceId": ""
}, context)
```

#### Input
* input `object`
  * InstanceId **required** `string`
  * nextToken `string`
  * maxResults `integer`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListUserHierarchyGroupsResponse](#listuserhierarchygroupsresponse)

### CreateUserHierarchyGroup



```js
amazonaws_connect.CreateUserHierarchyGroup({
  "InstanceId": "",
  "Name": ""
}, context)
```

#### Input
* input `object`
  * InstanceId **required** `string`
  * Name **required** `string`: The name of the user hierarchy group. Must not be more than 100 characters.
  * ParentGroupId `string`: The identifier for the parent hierarchy group. The user hierarchy is created at level one if the parent group ID is null.

#### Output
* output [CreateUserHierarchyGroupResponse](#createuserhierarchygroupresponse)

### DeleteUserHierarchyGroup



```js
amazonaws_connect.DeleteUserHierarchyGroup({
  "HierarchyGroupId": "",
  "InstanceId": ""
}, context)
```

#### Input
* input `object`
  * HierarchyGroupId **required** `string`
  * InstanceId **required** `string`

#### Output
*Output schema unknown*

### DescribeUserHierarchyGroup



```js
amazonaws_connect.DescribeUserHierarchyGroup({
  "HierarchyGroupId": "",
  "InstanceId": ""
}, context)
```

#### Input
* input `object`
  * HierarchyGroupId **required** `string`
  * InstanceId **required** `string`

#### Output
* output [DescribeUserHierarchyGroupResponse](#describeuserhierarchygroupresponse)

### UpdateUserHierarchyGroupName



```js
amazonaws_connect.UpdateUserHierarchyGroupName({
  "HierarchyGroupId": "",
  "InstanceId": "",
  "Name": ""
}, context)
```

#### Input
* input `object`
  * HierarchyGroupId **required** `string`
  * InstanceId **required** `string`
  * Name **required** `string`: The name of the hierarchy group. Must not be more than 100 characters.

#### Output
*Output schema unknown*

### DescribeUserHierarchyStructure



```js
amazonaws_connect.DescribeUserHierarchyStructure({
  "InstanceId": ""
}, context)
```

#### Input
* input `object`
  * InstanceId **required** `string`

#### Output
* output [DescribeUserHierarchyStructureResponse](#describeuserhierarchystructureresponse)

### UpdateUserHierarchyStructure



```js
amazonaws_connect.UpdateUserHierarchyStructure({
  "InstanceId": "",
  "HierarchyStructure": {}
}, context)
```

#### Input
* input `object`
  * InstanceId **required** `string`
  * HierarchyStructure **required** `object`: Contains information about the level hierarchy to update.
    * LevelFive
      * Name **required**
    * LevelFour
      * Name **required**
    * LevelOne
      * Name **required**
    * LevelThree
      * Name **required**
    * LevelTwo
      * Name **required**

#### Output
*Output schema unknown*

### GetFederationToken



```js
amazonaws_connect.GetFederationToken({
  "InstanceId": ""
}, context)
```

#### Input
* input `object`
  * InstanceId **required** `string`

#### Output
* output [GetFederationTokenResponse](#getfederationtokenresponse)

### ListUsers



```js
amazonaws_connect.ListUsers({
  "InstanceId": ""
}, context)
```

#### Input
* input `object`
  * InstanceId **required** `string`
  * nextToken `string`
  * maxResults `integer`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListUsersResponse](#listusersresponse)

### CreateUser



```js
amazonaws_connect.CreateUser({
  "InstanceId": "",
  "Username": "",
  "PhoneConfig": {},
  "SecurityProfileIds": [],
  "RoutingProfileId": ""
}, context)
```

#### Input
* input `object`
  * InstanceId **required** `string`
  * DirectoryUserId `string`: <p>The identifier of the user account in the directory used for identity management. If Amazon Connect cannot access the directory, you can specify this identifier to authenticate users. If you include the identifier, we assume that Amazon Connect cannot access the directory. Otherwise, the identity information is used to authenticate users from your directory.</p> <p>This parameter is required if you are using an existing directory for identity management in Amazon Connect when Amazon Connect cannot access your directory to authenticate users. If you are using SAML for identity management and include this parameter, an error is returned.</p>
  * HierarchyGroupId `string`: The identifier of the hierarchy group for the user.
  * IdentityInfo `object`: Contains information about the identity of a user.
    * Email
    * FirstName
    * LastName
  * Password `string`: The password for the user account. A password is required if you are using Amazon Connect for identity management. Otherwise, it is an error to include a password.
  * PhoneConfig **required** `object`: Contains information about the phone configuration settings for a user.
    * AfterContactWorkTimeLimit
    * AutoAccept
    * DeskPhoneNumber
    * PhoneType
  * RoutingProfileId **required** `string`: The identifier of the routing profile for the user.
  * SecurityProfileIds **required** `array`: The identifier of the security profile for the user.
    * items [SecurityProfileId](#securityprofileid)
  * Tags `object`: One or more tags.
  * Username **required** `string`: The user name for the account. For instances not using SAML for identity management, the user name can include up to 20 characters. If you are using SAML for identity management, the user name can include up to 64 characters from [a-zA-Z0-9_-.\@]+.

#### Output
* output [CreateUserResponse](#createuserresponse)

### DeleteUser



```js
amazonaws_connect.DeleteUser({
  "InstanceId": "",
  "UserId": ""
}, context)
```

#### Input
* input `object`
  * InstanceId **required** `string`
  * UserId **required** `string`

#### Output
*Output schema unknown*

### DescribeUser



```js
amazonaws_connect.DescribeUser({
  "UserId": "",
  "InstanceId": ""
}, context)
```

#### Input
* input `object`
  * UserId **required** `string`
  * InstanceId **required** `string`

#### Output
* output [DescribeUserResponse](#describeuserresponse)

### UpdateUserHierarchy



```js
amazonaws_connect.UpdateUserHierarchy({
  "UserId": "",
  "InstanceId": ""
}, context)
```

#### Input
* input `object`
  * UserId **required** `string`
  * InstanceId **required** `string`
  * HierarchyGroupId `string`: The identifier of the hierarchy group.

#### Output
*Output schema unknown*

### UpdateUserIdentityInfo



```js
amazonaws_connect.UpdateUserIdentityInfo({
  "UserId": "",
  "InstanceId": "",
  "IdentityInfo": {}
}, context)
```

#### Input
* input `object`
  * UserId **required** `string`
  * InstanceId **required** `string`
  * IdentityInfo **required** `object`: Contains information about the identity of a user.
    * Email
    * FirstName
    * LastName

#### Output
*Output schema unknown*

### UpdateUserPhoneConfig



```js
amazonaws_connect.UpdateUserPhoneConfig({
  "UserId": "",
  "InstanceId": "",
  "PhoneConfig": {}
}, context)
```

#### Input
* input `object`
  * UserId **required** `string`
  * InstanceId **required** `string`
  * PhoneConfig **required** `object`: Contains information about the phone configuration settings for a user.
    * AfterContactWorkTimeLimit
    * AutoAccept
    * DeskPhoneNumber
    * PhoneType

#### Output
*Output schema unknown*

### UpdateUserRoutingProfile



```js
amazonaws_connect.UpdateUserRoutingProfile({
  "UserId": "",
  "InstanceId": "",
  "RoutingProfileId": ""
}, context)
```

#### Input
* input `object`
  * UserId **required** `string`
  * InstanceId **required** `string`
  * RoutingProfileId **required** `string`: The identifier of the routing profile for the user.

#### Output
*Output schema unknown*

### UpdateUserSecurityProfiles



```js
amazonaws_connect.UpdateUserSecurityProfiles({
  "UserId": "",
  "InstanceId": "",
  "SecurityProfileIds": []
}, context)
```

#### Input
* input `object`
  * UserId **required** `string`
  * InstanceId **required** `string`
  * SecurityProfileIds **required** `array`: The identifiers of the security profiles for the user.
    * items [SecurityProfileId](#securityprofileid)

#### Output
*Output schema unknown*



## Definitions

### ARN
* ARN `string`

### AfterContactWorkTimeLimit
* AfterContactWorkTimeLimit `integer`

### AgentFirstName
* AgentFirstName `string`

### AgentLastName
* AgentLastName `string`

### AgentUsername
* AgentUsername `string`

### AssociateApprovedOriginRequest
* AssociateApprovedOriginRequest `object`
  * Origin **required**

### AssociateInstanceStorageConfigRequest
* AssociateInstanceStorageConfigRequest `object`
  * ResourceType **required**
  * StorageConfig **required**
    * AssociationId
    * KinesisFirehoseConfig
      * FirehoseArn **required**
    * KinesisStreamConfig
      * StreamArn **required**
    * KinesisVideoStreamConfig
      * EncryptionConfig **required**
        * EncryptionType **required**
        * KeyId **required**
      * Prefix **required**
      * RetentionPeriodHours **required**
    * S3Config
      * BucketName **required**
      * BucketPrefix **required**
      * EncryptionConfig
        * EncryptionType **required**
        * KeyId **required**
    * StorageType **required**

### AssociateInstanceStorageConfigResponse
* AssociateInstanceStorageConfigResponse `object`
  * AssociationId

### AssociateLambdaFunctionRequest
* AssociateLambdaFunctionRequest `object`
  * FunctionArn **required**

### AssociateLexBotRequest
* AssociateLexBotRequest `object`
  * LexBot **required**
    * LexRegion
    * Name

### AssociateRoutingProfileQueuesRequest
* AssociateRoutingProfileQueuesRequest `object`
  * QueueConfigs **required**
    * items [RoutingProfileQueueConfig](#routingprofilequeueconfig)

### AssociateSecurityKeyRequest
* AssociateSecurityKeyRequest `object`
  * Key **required**

### AssociateSecurityKeyResponse
* AssociateSecurityKeyResponse `object`
  * AssociationId

### AssociationId
* AssociationId `string`

### Attribute
* Attribute `object`: A toggle for an individual feature at the instance level.
  * AttributeType
  * Value

### AttributeName
* AttributeName `string`

### AttributeValue
* AttributeValue `string`

### Attributes
* Attributes `object`

### AttributesList
* AttributesList `array`
  * items [Attribute](#attribute)

### AutoAccept
* AutoAccept `boolean`

### BotName
* BotName `string`

### BucketName
* BucketName `string`

### Channel
* Channel `string` (values: VOICE, CHAT, TASK)

### Channels
* Channels `array`
  * items [Channel](#channel)

### ChatContent
* ChatContent `string`

### ChatContentType
* ChatContentType `string`

### ChatMessage
* ChatMessage `object`: A chat message.
  * Content **required**
  * ContentType **required**

### ClientToken
* ClientToken `string`

### Comparison
* Comparison `string` (values: LT)

### Concurrency
* Concurrency `integer`

### ContactFlow
* ContactFlow `object`: Contains information about a contact flow.
  * Arn
  * Content
  * Description
  * Id
  * Name
  * Tags
  * Type

### ContactFlowContent
* ContactFlowContent `string`

### ContactFlowDescription
* ContactFlowDescription `string`

### ContactFlowId
* ContactFlowId `string`

### ContactFlowName
* ContactFlowName `string`

### ContactFlowNotPublishedException


### ContactFlowSummary
* ContactFlowSummary `object`: <p>Contains summary information about a contact flow.</p> <p>You can also create and update contact flows using the <a href="https://docs.aws.amazon.com/connect/latest/adminguide/flow-language.html">Amazon Connect Flow language</a>.</p>
  * Arn
  * ContactFlowType
  * Id
  * Name

### ContactFlowSummaryList
* ContactFlowSummaryList `array`
  * items [ContactFlowSummary](#contactflowsummary)

### ContactFlowType
* ContactFlowType `string` (values: CONTACT_FLOW, CUSTOMER_QUEUE, CUSTOMER_HOLD, CUSTOMER_WHISPER, AGENT_HOLD, AGENT_WHISPER, OUTBOUND_WHISPER, AGENT_TRANSFER, QUEUE_TRANSFER)

### ContactFlowTypes
* ContactFlowTypes `array`
  * items [ContactFlowType](#contactflowtype)

### ContactId
* ContactId `string`

### ContactNotFoundException


### ContactReferences
* ContactReferences `object`

### CreateContactFlowRequest
* CreateContactFlowRequest `object`
  * Content **required**
  * Description
  * Name **required**
  * Tags
  * Type **required**

### CreateContactFlowResponse
* CreateContactFlowResponse `object`
  * ContactFlowArn
  * ContactFlowId

### CreateInstanceRequest
* CreateInstanceRequest `object`
  * ClientToken
  * DirectoryId
  * IdentityManagementType **required**
  * InboundCallsEnabled **required**
  * InstanceAlias
  * OutboundCallsEnabled **required**

### CreateInstanceResponse
* CreateInstanceResponse `object`
  * Arn
  * Id

### CreateIntegrationAssociationRequest
* CreateIntegrationAssociationRequest `object`
  * IntegrationArn **required**
  * IntegrationType **required**
  * SourceApplicationName **required**
  * SourceApplicationUrl **required**
  * SourceType **required**

### CreateIntegrationAssociationResponse
* CreateIntegrationAssociationResponse `object`
  * IntegrationAssociationArn
  * IntegrationAssociationId

### CreateRoutingProfileRequest
* CreateRoutingProfileRequest `object`
  * DefaultOutboundQueueId **required**
  * Description **required**
  * MediaConcurrencies **required**
    * items [MediaConcurrency](#mediaconcurrency)
  * Name **required**
  * QueueConfigs
    * items [RoutingProfileQueueConfig](#routingprofilequeueconfig)
  * Tags

### CreateRoutingProfileResponse
* CreateRoutingProfileResponse `object`
  * RoutingProfileArn
  * RoutingProfileId

### CreateUseCaseRequest
* CreateUseCaseRequest `object`
  * UseCaseType **required**

### CreateUseCaseResponse
* CreateUseCaseResponse `object`
  * UseCaseArn
  * UseCaseId

### CreateUserHierarchyGroupRequest
* CreateUserHierarchyGroupRequest `object`
  * Name **required**
  * ParentGroupId

### CreateUserHierarchyGroupResponse
* CreateUserHierarchyGroupResponse `object`
  * HierarchyGroupArn
  * HierarchyGroupId

### CreateUserRequest
* CreateUserRequest `object`
  * DirectoryUserId
  * HierarchyGroupId
  * IdentityInfo
    * Email
    * FirstName
    * LastName
  * Password
  * PhoneConfig **required**
    * AfterContactWorkTimeLimit
    * AutoAccept
    * DeskPhoneNumber
    * PhoneType **required**
  * RoutingProfileId **required**
  * SecurityProfileIds **required**
    * items [SecurityProfileId](#securityprofileid)
  * Tags
  * Username **required**

### CreateUserResponse
* CreateUserResponse `object`
  * UserArn
  * UserId

### Credentials
* Credentials `object`: Contains credentials to use for federation.
  * AccessToken
  * AccessTokenExpiration
  * RefreshToken
  * RefreshTokenExpiration

### CurrentMetric
* CurrentMetric `object`: Contains information about a real-time metric. For a description of each metric, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html">Real-time Metrics Definitions</a> in the <i>Amazon Connect Administrator Guide</i>.
  * Name
  * Unit

### CurrentMetricData
* CurrentMetricData `object`: Contains the data for a real-time metric.
  * Metric
    * Name
    * Unit
  * Value

### CurrentMetricDataCollections
* CurrentMetricDataCollections `array`
  * items [CurrentMetricData](#currentmetricdata)

### CurrentMetricName
* CurrentMetricName `string` (values: AGENTS_ONLINE, AGENTS_AVAILABLE, AGENTS_ON_CALL, AGENTS_NON_PRODUCTIVE, AGENTS_AFTER_CONTACT_WORK, AGENTS_ERROR, AGENTS_STAFFED, CONTACTS_IN_QUEUE, OLDEST_CONTACT_AGE, CONTACTS_SCHEDULED, AGENTS_ON_CONTACT, SLOTS_ACTIVE, SLOTS_AVAILABLE): The current metric names.

### CurrentMetricResult
* CurrentMetricResult `object`: Contains information about a set of real-time metrics.
  * Collections
    * items [CurrentMetricData](#currentmetricdata)
  * Dimensions
    * Channel
    * Queue
      * Arn
      * Id

### CurrentMetricResults
* CurrentMetricResults `array`
  * items [CurrentMetricResult](#currentmetricresult)

### CurrentMetrics
* CurrentMetrics `array`
  * items [CurrentMetric](#currentmetric)

### Delay
* Delay `integer`

### DeleteInstanceRequest
* DeleteInstanceRequest `object`

### DeleteIntegrationAssociationRequest
* DeleteIntegrationAssociationRequest `object`

### DeleteUseCaseRequest
* DeleteUseCaseRequest `object`

### DeleteUserHierarchyGroupRequest
* DeleteUserHierarchyGroupRequest `object`

### DeleteUserRequest
* DeleteUserRequest `object`

### DescribeContactFlowRequest
* DescribeContactFlowRequest `object`

### DescribeContactFlowResponse
* DescribeContactFlowResponse `object`
  * ContactFlow
    * Arn
    * Content
    * Description
    * Id
    * Name
    * Tags
    * Type

### DescribeInstanceAttributeRequest
* DescribeInstanceAttributeRequest `object`

### DescribeInstanceAttributeResponse
* DescribeInstanceAttributeResponse `object`
  * Attribute
    * AttributeType
    * Value

### DescribeInstanceRequest
* DescribeInstanceRequest `object`

### DescribeInstanceResponse
* DescribeInstanceResponse `object`
  * Instance
    * Arn
    * CreatedTime
    * Id
    * IdentityManagementType
    * InboundCallsEnabled
    * InstanceAlias
    * InstanceStatus
    * OutboundCallsEnabled
    * ServiceRole
    * StatusReason
      * Message

### DescribeInstanceStorageConfigRequest
* DescribeInstanceStorageConfigRequest `object`

### DescribeInstanceStorageConfigResponse
* DescribeInstanceStorageConfigResponse `object`
  * StorageConfig
    * AssociationId
    * KinesisFirehoseConfig
      * FirehoseArn **required**
    * KinesisStreamConfig
      * StreamArn **required**
    * KinesisVideoStreamConfig
      * EncryptionConfig **required**
        * EncryptionType **required**
        * KeyId **required**
      * Prefix **required**
      * RetentionPeriodHours **required**
    * S3Config
      * BucketName **required**
      * BucketPrefix **required**
      * EncryptionConfig
        * EncryptionType **required**
        * KeyId **required**
    * StorageType **required**

### DescribeRoutingProfileRequest
* DescribeRoutingProfileRequest `object`

### DescribeRoutingProfileResponse
* DescribeRoutingProfileResponse `object`
  * RoutingProfile
    * DefaultOutboundQueueId
    * Description
    * InstanceId
    * MediaConcurrencies
      * items [MediaConcurrency](#mediaconcurrency)
    * Name
    * RoutingProfileArn
    * RoutingProfileId
    * Tags

### DescribeUserHierarchyGroupRequest
* DescribeUserHierarchyGroupRequest `object`

### DescribeUserHierarchyGroupResponse
* DescribeUserHierarchyGroupResponse `object`
  * HierarchyGroup
    * Arn
    * HierarchyPath
      * LevelFive
        * Arn
        * Id
        * Name
      * LevelFour
        * Arn
        * Id
        * Name
      * LevelOne
        * Arn
        * Id
        * Name
      * LevelThree
        * Arn
        * Id
        * Name
      * LevelTwo
        * Arn
        * Id
        * Name
    * Id
    * LevelId
    * Name

### DescribeUserHierarchyStructureRequest
* DescribeUserHierarchyStructureRequest `object`

### DescribeUserHierarchyStructureResponse
* DescribeUserHierarchyStructureResponse `object`
  * HierarchyStructure
    * LevelFive
      * Arn
      * Id
      * Name
    * LevelFour
      * Arn
      * Id
      * Name
    * LevelOne
      * Arn
      * Id
      * Name
    * LevelThree
      * Arn
      * Id
      * Name
    * LevelTwo
      * Arn
      * Id
      * Name

### DescribeUserRequest
* DescribeUserRequest `object`

### DescribeUserResponse
* DescribeUserResponse `object`
  * User
    * Arn
    * DirectoryUserId
    * HierarchyGroupId
    * Id
    * IdentityInfo
      * Email
      * FirstName
      * LastName
    * PhoneConfig
      * AfterContactWorkTimeLimit
      * AutoAccept
      * DeskPhoneNumber
      * PhoneType **required**
    * RoutingProfileId
    * SecurityProfileIds
      * items [SecurityProfileId](#securityprofileid)
    * Tags
    * Username

### Description
* Description `string`

### DestinationNotAllowedException


### Dimensions
* Dimensions `object`: Contains information about the dimensions for a set of metrics.
  * Channel
  * Queue
    * Arn
    * Id

### DirectoryAlias
* DirectoryAlias `string`

### DirectoryId
* DirectoryId `string`

### DirectoryType
* DirectoryType `string` (values: SAML, CONNECT_MANAGED, EXISTING_DIRECTORY)

### DirectoryUserId
* DirectoryUserId `string`

### DisassociateApprovedOriginRequest
* DisassociateApprovedOriginRequest `object`

### DisassociateInstanceStorageConfigRequest
* DisassociateInstanceStorageConfigRequest `object`

### DisassociateLambdaFunctionRequest
* DisassociateLambdaFunctionRequest `object`

### DisassociateLexBotRequest
* DisassociateLexBotRequest `object`

### DisassociateRoutingProfileQueuesRequest
* DisassociateRoutingProfileQueuesRequest `object`
  * QueueReferences **required**
    * items [RoutingProfileQueueReference](#routingprofilequeuereference)

### DisassociateSecurityKeyRequest
* DisassociateSecurityKeyRequest `object`

### DisplayName
* DisplayName `string`

### DuplicateResourceException


### Email
* Email `string`

### EncryptionConfig
* EncryptionConfig `object`: The encryption configuration.
  * EncryptionType **required**
  * KeyId **required**

### EncryptionType
* EncryptionType `string` (values: KMS)

### Filters
* Filters `object`: Contains the filter to apply when retrieving metrics.
  * Channels
    * items [Channel](#channel)
  * Queues
    * items [QueueId](#queueid)

### FunctionArn
* FunctionArn `string`

### FunctionArnsList
* FunctionArnsList `array`
  * items [FunctionArn](#functionarn)

### GetContactAttributesRequest
* GetContactAttributesRequest `object`

### GetContactAttributesResponse
* GetContactAttributesResponse `object`
  * Attributes

### GetCurrentMetricDataRequest
* GetCurrentMetricDataRequest `object`
  * CurrentMetrics **required**
    * items [CurrentMetric](#currentmetric)
  * Filters **required**
    * Channels
      * items [Channel](#channel)
    * Queues
      * items [QueueId](#queueid)
  * Groupings
    * items [Grouping](#grouping)
  * MaxResults
  * NextToken

### GetCurrentMetricDataResponse
* GetCurrentMetricDataResponse `object`
  * DataSnapshotTime
  * MetricResults
    * items [CurrentMetricResult](#currentmetricresult)
  * NextToken

### GetFederationTokenRequest
* GetFederationTokenRequest `object`

### GetFederationTokenResponse
* GetFederationTokenResponse `object`
  * Credentials
    * AccessToken
    * AccessTokenExpiration
    * RefreshToken
    * RefreshTokenExpiration

### GetMetricDataRequest
* GetMetricDataRequest `object`
  * EndTime **required**
  * Filters **required**
    * Channels
      * items [Channel](#channel)
    * Queues
      * items [QueueId](#queueid)
  * Groupings
    * items [Grouping](#grouping)
  * HistoricalMetrics **required**
    * items [HistoricalMetric](#historicalmetric)
  * MaxResults
  * NextToken
  * StartTime **required**

### GetMetricDataResponse
* GetMetricDataResponse `object`
  * MetricResults
    * items [HistoricalMetricResult](#historicalmetricresult)
  * NextToken

### Grouping
* Grouping `string` (values: QUEUE, CHANNEL)

### Groupings
* Groupings `array`
  * items [Grouping](#grouping)

### HierarchyGroup
* HierarchyGroup `object`: Contains information about a hierarchy group.
  * Arn
  * HierarchyPath
    * LevelFive
      * Arn
      * Id
      * Name
    * LevelFour
      * Arn
      * Id
      * Name
    * LevelOne
      * Arn
      * Id
      * Name
    * LevelThree
      * Arn
      * Id
      * Name
    * LevelTwo
      * Arn
      * Id
      * Name
  * Id
  * LevelId
  * Name

### HierarchyGroupId
* HierarchyGroupId `string`

### HierarchyGroupName
* HierarchyGroupName `string`

### HierarchyGroupSummary
* HierarchyGroupSummary `object`: Contains summary information about a hierarchy group.
  * Arn
  * Id
  * Name

### HierarchyGroupSummaryList
* HierarchyGroupSummaryList `array`
  * items [HierarchyGroupSummary](#hierarchygroupsummary)

### HierarchyLevel
* HierarchyLevel `object`: Contains information about a hierarchy level.
  * Arn
  * Id
  * Name

### HierarchyLevelId
* HierarchyLevelId `string`

### HierarchyLevelName
* HierarchyLevelName `string`

### HierarchyLevelUpdate
* HierarchyLevelUpdate `object`: Contains information about the hierarchy level to update.
  * Name **required**

### HierarchyPath
* HierarchyPath `object`: Contains information about the levels of a hierarchy group.
  * LevelFive
    * Arn
    * Id
    * Name
  * LevelFour
    * Arn
    * Id
    * Name
  * LevelOne
    * Arn
    * Id
    * Name
  * LevelThree
    * Arn
    * Id
    * Name
  * LevelTwo
    * Arn
    * Id
    * Name

### HierarchyStructure
* HierarchyStructure `object`: Contains information about a hierarchy structure.
  * LevelFive
    * Arn
    * Id
    * Name
  * LevelFour
    * Arn
    * Id
    * Name
  * LevelOne
    * Arn
    * Id
    * Name
  * LevelThree
    * Arn
    * Id
    * Name
  * LevelTwo
    * Arn
    * Id
    * Name

### HierarchyStructureUpdate
* HierarchyStructureUpdate `object`: Contains information about the level hierarchy to update.
  * LevelFive
    * Name **required**
  * LevelFour
    * Name **required**
  * LevelOne
    * Name **required**
  * LevelThree
    * Name **required**
  * LevelTwo
    * Name **required**

### HistoricalMetric
* HistoricalMetric `object`: Contains information about a historical metric. For a description of each metric, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html">Historical Metrics Definitions</a> in the <i>Amazon Connect Administrator Guide</i>.
  * Name
  * Statistic
  * Threshold
    * Comparison
    * ThresholdValue
  * Unit

### HistoricalMetricData
* HistoricalMetricData `object`: Contains the data for a historical metric.
  * Metric
    * Name
    * Statistic
    * Threshold
      * Comparison
      * ThresholdValue
    * Unit
  * Value

### HistoricalMetricDataCollections
* HistoricalMetricDataCollections `array`
  * items [HistoricalMetricData](#historicalmetricdata)

### HistoricalMetricName
* HistoricalMetricName `string` (values: CONTACTS_QUEUED, CONTACTS_HANDLED, CONTACTS_ABANDONED, CONTACTS_CONSULTED, CONTACTS_AGENT_HUNG_UP_FIRST, CONTACTS_HANDLED_INCOMING, CONTACTS_HANDLED_OUTBOUND, CONTACTS_HOLD_ABANDONS, CONTACTS_TRANSFERRED_IN, CONTACTS_TRANSFERRED_OUT, CONTACTS_TRANSFERRED_IN_FROM_QUEUE, CONTACTS_TRANSFERRED_OUT_FROM_QUEUE, CONTACTS_MISSED, CALLBACK_CONTACTS_HANDLED, API_CONTACTS_HANDLED, OCCUPANCY, HANDLE_TIME, AFTER_CONTACT_WORK_TIME, QUEUED_TIME, ABANDON_TIME, QUEUE_ANSWER_TIME, HOLD_TIME, INTERACTION_TIME, INTERACTION_AND_HOLD_TIME, SERVICE_LEVEL): The historical metric names.

### HistoricalMetricResult
* HistoricalMetricResult `object`: Contains information about the historical metrics retrieved.
  * Collections
    * items [HistoricalMetricData](#historicalmetricdata)
  * Dimensions
    * Channel
    * Queue
      * Arn
      * Id

### HistoricalMetricResults
* HistoricalMetricResults `array`
  * items [HistoricalMetricResult](#historicalmetricresult)

### HistoricalMetrics
* HistoricalMetrics `array`
  * items [HistoricalMetric](#historicalmetric)

### Hours
* Hours `integer`

### HoursOfOperationId
* HoursOfOperationId `string`

### HoursOfOperationName
* HoursOfOperationName `string`

### HoursOfOperationSummary
* HoursOfOperationSummary `object`: Contains summary information about hours of operation for a contact center.
  * Arn
  * Id
  * Name

### HoursOfOperationSummaryList
* HoursOfOperationSummaryList `array`
  * items [HoursOfOperationSummary](#hoursofoperationsummary)

### InboundCallsEnabled
* InboundCallsEnabled `boolean`

### Instance
* Instance `object`: The Amazon Connect instance.
  * Arn
  * CreatedTime
  * Id
  * IdentityManagementType
  * InboundCallsEnabled
  * InstanceAlias
  * InstanceStatus
  * OutboundCallsEnabled
  * ServiceRole
  * StatusReason
    * Message

### InstanceAttributeType
* InstanceAttributeType `string` (values: INBOUND_CALLS, OUTBOUND_CALLS, CONTACTFLOW_LOGS, CONTACT_LENS, AUTO_RESOLVE_BEST_VOICES, USE_CUSTOM_TTS_VOICES, EARLY_MEDIA)

### InstanceAttributeValue
* InstanceAttributeValue `string`

### InstanceId
* InstanceId `string`

### InstanceStatus
* InstanceStatus `string` (values: CREATION_IN_PROGRESS, ACTIVE, CREATION_FAILED)

### InstanceStatusReason
* InstanceStatusReason `object`: Relevant details why the instance was not successfully created.
  * Message

### InstanceStorageConfig
* InstanceStorageConfig `object`: The storage configuration for the instance.
  * AssociationId
  * KinesisFirehoseConfig
    * FirehoseArn **required**
  * KinesisStreamConfig
    * StreamArn **required**
  * KinesisVideoStreamConfig
    * EncryptionConfig **required**
      * EncryptionType **required**
      * KeyId **required**
    * Prefix **required**
    * RetentionPeriodHours **required**
  * S3Config
    * BucketName **required**
    * BucketPrefix **required**
    * EncryptionConfig
      * EncryptionType **required**
      * KeyId **required**
  * StorageType **required**

### InstanceStorageConfigs
* InstanceStorageConfigs `array`
  * items [InstanceStorageConfig](#instancestorageconfig)

### InstanceStorageResourceType
* InstanceStorageResourceType `string` (values: CHAT_TRANSCRIPTS, CALL_RECORDINGS, SCHEDULED_REPORTS, MEDIA_STREAMS, CONTACT_TRACE_RECORDS, AGENT_EVENTS)

### InstanceSummary
* InstanceSummary `object`: Information about the instance.
  * Arn
  * CreatedTime
  * Id
  * IdentityManagementType
  * InboundCallsEnabled
  * InstanceAlias
  * InstanceStatus
  * OutboundCallsEnabled
  * ServiceRole

### InstanceSummaryList
* InstanceSummaryList `array`
  * items [InstanceSummary](#instancesummary)

### IntegrationAssociationId
* IntegrationAssociationId `string`

### IntegrationAssociationSummary
* IntegrationAssociationSummary `object`: Contains summary information about the associated AppIntegrations.
  * InstanceId
  * IntegrationArn
  * IntegrationAssociationArn
  * IntegrationAssociationId
  * IntegrationType
  * SourceApplicationName
  * SourceApplicationUrl
  * SourceType

### IntegrationAssociationSummaryList
* IntegrationAssociationSummaryList `array`
  * items [IntegrationAssociationSummary](#integrationassociationsummary)

### IntegrationType
* IntegrationType `string` (values: EVENT)

### InternalServiceException


### InvalidContactFlowException


### InvalidParameterException


### InvalidRequestException


### KeyId
* KeyId `string`

### KinesisFirehoseConfig
* KinesisFirehoseConfig `object`: Configuration information of a Kinesis Firehose delivery stream.
  * FirehoseArn **required**

### KinesisStreamConfig
* KinesisStreamConfig `object`: Configuration information of a Kinesis data stream.
  * StreamArn **required**

### KinesisVideoStreamConfig
* KinesisVideoStreamConfig `object`: Configuration information of a Kinesis video stream.
  * EncryptionConfig **required**
    * EncryptionType **required**
    * KeyId **required**
  * Prefix **required**
  * RetentionPeriodHours **required**

### LexBot
* LexBot `object`: Configuration information of an Amazon Lex bot.
  * LexRegion
  * Name

### LexBotsList
* LexBotsList `array`
  * items [LexBot](#lexbot)

### LexRegion
* LexRegion `string`

### LimitExceededException


### ListApprovedOriginsRequest
* ListApprovedOriginsRequest `object`

### ListApprovedOriginsResponse
* ListApprovedOriginsResponse `object`
  * NextToken
  * Origins
    * items [Origin](#origin)

### ListContactFlowsRequest
* ListContactFlowsRequest `object`

### ListContactFlowsResponse
* ListContactFlowsResponse `object`
  * ContactFlowSummaryList
    * items [ContactFlowSummary](#contactflowsummary)
  * NextToken

### ListHoursOfOperationsRequest
* ListHoursOfOperationsRequest `object`

### ListHoursOfOperationsResponse
* ListHoursOfOperationsResponse `object`
  * HoursOfOperationSummaryList
    * items [HoursOfOperationSummary](#hoursofoperationsummary)
  * NextToken

### ListInstanceAttributesRequest
* ListInstanceAttributesRequest `object`

### ListInstanceAttributesResponse
* ListInstanceAttributesResponse `object`
  * Attributes
    * items [Attribute](#attribute)
  * NextToken

### ListInstanceStorageConfigsRequest
* ListInstanceStorageConfigsRequest `object`

### ListInstanceStorageConfigsResponse
* ListInstanceStorageConfigsResponse `object`
  * NextToken
  * StorageConfigs
    * items [InstanceStorageConfig](#instancestorageconfig)

### ListInstancesRequest
* ListInstancesRequest `object`

### ListInstancesResponse
* ListInstancesResponse `object`
  * InstanceSummaryList
    * items [InstanceSummary](#instancesummary)
  * NextToken

### ListIntegrationAssociationsRequest
* ListIntegrationAssociationsRequest `object`

### ListIntegrationAssociationsResponse
* ListIntegrationAssociationsResponse `object`
  * IntegrationAssociationSummaryList
    * items [IntegrationAssociationSummary](#integrationassociationsummary)
  * NextToken

### ListLambdaFunctionsRequest
* ListLambdaFunctionsRequest `object`

### ListLambdaFunctionsResponse
* ListLambdaFunctionsResponse `object`
  * LambdaFunctions
    * items [FunctionArn](#functionarn)
  * NextToken

### ListLexBotsRequest
* ListLexBotsRequest `object`

### ListLexBotsResponse
* ListLexBotsResponse `object`
  * LexBots
    * items [LexBot](#lexbot)
  * NextToken

### ListPhoneNumbersRequest
* ListPhoneNumbersRequest `object`

### ListPhoneNumbersResponse
* ListPhoneNumbersResponse `object`
  * NextToken
  * PhoneNumberSummaryList
    * items [PhoneNumberSummary](#phonenumbersummary)

### ListPromptsRequest
* ListPromptsRequest `object`

### ListPromptsResponse
* ListPromptsResponse `object`
  * NextToken
  * PromptSummaryList
    * items [PromptSummary](#promptsummary)

### ListQueuesRequest
* ListQueuesRequest `object`

### ListQueuesResponse
* ListQueuesResponse `object`
  * NextToken
  * QueueSummaryList
    * items [QueueSummary](#queuesummary)

### ListRoutingProfileQueuesRequest
* ListRoutingProfileQueuesRequest `object`

### ListRoutingProfileQueuesResponse
* ListRoutingProfileQueuesResponse `object`
  * NextToken
  * RoutingProfileQueueConfigSummaryList
    * items [RoutingProfileQueueConfigSummary](#routingprofilequeueconfigsummary)

### ListRoutingProfilesRequest
* ListRoutingProfilesRequest `object`

### ListRoutingProfilesResponse
* ListRoutingProfilesResponse `object`
  * NextToken
  * RoutingProfileSummaryList
    * items [RoutingProfileSummary](#routingprofilesummary)

### ListSecurityKeysRequest
* ListSecurityKeysRequest `object`

### ListSecurityKeysResponse
* ListSecurityKeysResponse `object`
  * NextToken
  * SecurityKeys
    * items [SecurityKey](#securitykey)

### ListSecurityProfilesRequest
* ListSecurityProfilesRequest `object`

### ListSecurityProfilesResponse
* ListSecurityProfilesResponse `object`
  * NextToken
  * SecurityProfileSummaryList
    * items [SecurityProfileSummary](#securityprofilesummary)

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`
  * tags

### ListUseCasesRequest
* ListUseCasesRequest `object`: Provides summary information about the use cases for the specified Amazon Connect AppIntegration association.

### ListUseCasesResponse
* ListUseCasesResponse `object`
  * NextToken
  * UseCaseSummaryList
    * items [UseCase](#usecase)

### ListUserHierarchyGroupsRequest
* ListUserHierarchyGroupsRequest `object`

### ListUserHierarchyGroupsResponse
* ListUserHierarchyGroupsResponse `object`
  * NextToken
  * UserHierarchyGroupSummaryList
    * items [HierarchyGroupSummary](#hierarchygroupsummary)

### ListUsersRequest
* ListUsersRequest `object`

### ListUsersResponse
* ListUsersResponse `object`
  * NextToken
  * UserSummaryList
    * items [UserSummary](#usersummary)

### MaxResult10
* MaxResult10 `integer`

### MaxResult100
* MaxResult100 `integer`

### MaxResult1000
* MaxResult1000 `integer`

### MaxResult2
* MaxResult2 `integer`

### MaxResult25
* MaxResult25 `integer`

### MaxResult7
* MaxResult7 `integer`

### MediaConcurrencies
* MediaConcurrencies `array`
  * items [MediaConcurrency](#mediaconcurrency)

### MediaConcurrency
* MediaConcurrency `object`: Contains information about which channels are supported, and how many contacts an agent can have on a channel simultaneously.
  * Channel **required**
  * Concurrency **required**

### Name
* Name `string`

### NextToken
* NextToken `string`

### Origin
* Origin `string`

### OriginsList
* OriginsList `array`
  * items [Origin](#origin)

### OutboundCallsEnabled
* OutboundCallsEnabled `boolean`

### OutboundContactNotPermittedException


### PEM
* PEM `string`

### ParticipantDetails
* ParticipantDetails `object`: The customer's details.
  * DisplayName **required**

### ParticipantId
* ParticipantId `string`

### ParticipantToken
* ParticipantToken `string`

### Password
* Password `string`

### PhoneNumber
* PhoneNumber `string`

### PhoneNumberCountryCode
* PhoneNumberCountryCode `string` (values: AF, AL, DZ, AS, AD, AO, AI, AQ, AG, AR, AM, AW, AU, AT, AZ, BS, BH, BD, BB, BY, BE, BZ, BJ, BM, BT, BO, BA, BW, BR, IO, VG, BN, BG, BF, BI, KH, CM, CA, CV, KY, CF, TD, CL, CN, CX, CC, CO, KM, CK, CR, HR, CU, CW, CY, CZ, CD, DK, DJ, DM, DO, TL, EC, EG, SV, GQ, ER, EE, ET, FK, FO, FJ, FI, FR, PF, GA, GM, GE, DE, GH, GI, GR, GL, GD, GU, GT, GG, GN, GW, GY, HT, HN, HK, HU, IS, IN, ID, IR, IQ, IE, IM, IL, IT, CI, JM, JP, JE, JO, KZ, KE, KI, KW, KG, LA, LV, LB, LS, LR, LY, LI, LT, LU, MO, MK, MG, MW, MY, MV, ML, MT, MH, MR, MU, YT, MX, FM, MD, MC, MN, ME, MS, MA, MZ, MM, NA, NR, NP, NL, AN, NC, NZ, NI, NE, NG, NU, KP, MP, NO, OM, PK, PW, PA, PG, PY, PE, PH, PN, PL, PT, PR, QA, CG, RE, RO, RU, RW, BL, SH, KN, LC, MF, PM, VC, WS, SM, ST, SA, SN, RS, SC, SL, SG, SX, SK, SI, SB, SO, ZA, KR, ES, LK, SD, SR, SJ, SZ, SE, CH, SY, TW, TJ, TZ, TH, TG, TK, TO, TT, TN, TR, TM, TC, TV, VI, UG, UA, AE, GB, US, UY, UZ, VU, VA, VE, VN, WF, EH, YE, ZM, ZW)

### PhoneNumberCountryCodes
* PhoneNumberCountryCodes `array`
  * items [PhoneNumberCountryCode](#phonenumbercountrycode)

### PhoneNumberId
* PhoneNumberId `string`

### PhoneNumberSummary
* PhoneNumberSummary `object`: Contains summary information about a phone number for a contact center.
  * Arn
  * Id
  * PhoneNumber
  * PhoneNumberCountryCode
  * PhoneNumberType

### PhoneNumberSummaryList
* PhoneNumberSummaryList `array`
  * items [PhoneNumberSummary](#phonenumbersummary)

### PhoneNumberType
* PhoneNumberType `string` (values: TOLL_FREE, DID)

### PhoneNumberTypes
* PhoneNumberTypes `array`
  * items [PhoneNumberType](#phonenumbertype)

### PhoneType
* PhoneType `string` (values: SOFT_PHONE, DESK_PHONE)

### Prefix
* Prefix `string`

### Priority
* Priority `integer`

### PromptId
* PromptId `string`

### PromptName
* PromptName `string`

### PromptSummary
* PromptSummary `object`: Contains information about the prompt.
  * Arn
  * Id
  * Name

### PromptSummaryList
* PromptSummaryList `array`
  * items [PromptSummary](#promptsummary)

### QueueId
* QueueId `string`

### QueueName
* QueueName `string`

### QueueReference
* QueueReference `object`: Contains information about a queue resource for which metrics are returned.
  * Arn
  * Id

### QueueSummary
* QueueSummary `object`: Contains summary information about a queue.
  * Arn
  * Id
  * Name
  * QueueType

### QueueSummaryList
* QueueSummaryList `array`
  * items [QueueSummary](#queuesummary)

### QueueType
* QueueType `string` (values: STANDARD, AGENT)

### QueueTypes
* QueueTypes `array`
  * items [QueueType](#queuetype)

### Queues
* Queues `array`
  * items [QueueId](#queueid)

### Reference
* Reference `object`: A link that an agent selects to complete a given task. You can have up to 4,096 UTF-8 bytes across all references for a contact.
  * Type **required**
  * Value **required**

### ReferenceKey
* ReferenceKey `string`

### ReferenceType
* ReferenceType `string` (values: URL)

### ReferenceValue
* ReferenceValue `string`

### ResourceConflictException


### ResourceInUseException


### ResourceNotFoundException


### ResumeContactRecordingRequest
* ResumeContactRecordingRequest `object`
  * ContactId **required**
  * InitialContactId **required**
  * InstanceId **required**

### ResumeContactRecordingResponse
* ResumeContactRecordingResponse `object`

### RoutingProfile
* RoutingProfile `object`: Contains information about a routing profile.
  * DefaultOutboundQueueId
  * Description
  * InstanceId
  * MediaConcurrencies
    * items [MediaConcurrency](#mediaconcurrency)
  * Name
  * RoutingProfileArn
  * RoutingProfileId
  * Tags

### RoutingProfileDescription
* RoutingProfileDescription `string`

### RoutingProfileId
* RoutingProfileId `string`

### RoutingProfileName
* RoutingProfileName `string`

### RoutingProfileQueueConfig
* RoutingProfileQueueConfig `object`: Contains information about the queue and channel for which priority and delay can be set.
  * Delay **required**
  * Priority **required**
  * QueueReference **required**
    * Channel **required**
    * QueueId **required**

### RoutingProfileQueueConfigList
* RoutingProfileQueueConfigList `array`
  * items [RoutingProfileQueueConfig](#routingprofilequeueconfig)

### RoutingProfileQueueConfigSummary
* RoutingProfileQueueConfigSummary `object`: Contains summary information about a routing profile queue.
  * Channel **required**
  * Delay **required**
  * Priority **required**
  * QueueArn **required**
  * QueueId **required**
  * QueueName **required**

### RoutingProfileQueueConfigSummaryList
* RoutingProfileQueueConfigSummaryList `array`
  * items [RoutingProfileQueueConfigSummary](#routingprofilequeueconfigsummary)

### RoutingProfileQueueReference
* RoutingProfileQueueReference `object`: Contains the channel and queue identifier for a routing profile.
  * Channel **required**
  * QueueId **required**

### RoutingProfileQueueReferenceList
* RoutingProfileQueueReferenceList `array`
  * items [RoutingProfileQueueReference](#routingprofilequeuereference)

### RoutingProfileSummary
* RoutingProfileSummary `object`: Contains summary information about a routing profile.
  * Arn
  * Id
  * Name

### RoutingProfileSummaryList
* RoutingProfileSummaryList `array`
  * items [RoutingProfileSummary](#routingprofilesummary)

### S3Config
* S3Config `object`: Information about the S3 storage type.
  * BucketName **required**
  * BucketPrefix **required**
  * EncryptionConfig
    * EncryptionType **required**
    * KeyId **required**

### SecurityKey
* SecurityKey `object`: Configuration information of the security key.
  * AssociationId
  * CreationTime
  * Key

### SecurityKeysList
* SecurityKeysList `array`
  * items [SecurityKey](#securitykey)

### SecurityProfileId
* SecurityProfileId `string`

### SecurityProfileIds
* SecurityProfileIds `array`
  * items [SecurityProfileId](#securityprofileid)

### SecurityProfileName
* SecurityProfileName `string`

### SecurityProfileSummary
* SecurityProfileSummary `object`: Contains information about a security profile.
  * Arn
  * Id
  * Name

### SecurityProfileSummaryList
* SecurityProfileSummaryList `array`
  * items [SecurityProfileSummary](#securityprofilesummary)

### SecurityToken
* SecurityToken `string`

### ServiceQuotaExceededException


### SourceApplicationName
* SourceApplicationName `string`

### SourceType
* SourceType `string` (values: SALESFORCE, ZENDESK)

### StartChatContactRequest
* StartChatContactRequest `object`
  * Attributes
  * ClientToken
  * ContactFlowId **required**
  * InitialMessage
    * Content **required**
    * ContentType **required**
  * InstanceId **required**
  * ParticipantDetails **required**
    * DisplayName **required**

### StartChatContactResponse
* StartChatContactResponse `object`
  * ContactId
  * ParticipantId
  * ParticipantToken

### StartContactRecordingRequest
* StartContactRecordingRequest `object`
  * ContactId **required**
  * InitialContactId **required**
  * InstanceId **required**
  * VoiceRecordingConfiguration **required**
    * VoiceRecordingTrack

### StartContactRecordingResponse
* StartContactRecordingResponse `object`

### StartOutboundVoiceContactRequest
* StartOutboundVoiceContactRequest `object`
  * Attributes
  * ClientToken
  * ContactFlowId **required**
  * DestinationPhoneNumber **required**
  * InstanceId **required**
  * QueueId
  * SourcePhoneNumber

### StartOutboundVoiceContactResponse
* StartOutboundVoiceContactResponse `object`
  * ContactId

### StartTaskContactRequest
* StartTaskContactRequest `object`
  * Attributes
  * ClientToken
  * ContactFlowId **required**
  * Description
  * InstanceId **required**
  * Name **required**
  * PreviousContactId
  * References

### StartTaskContactResponse
* StartTaskContactResponse `object`
  * ContactId

### Statistic
* Statistic `string` (values: SUM, MAX, AVG)

### StopContactRecordingRequest
* StopContactRecordingRequest `object`
  * ContactId **required**
  * InitialContactId **required**
  * InstanceId **required**

### StopContactRecordingResponse
* StopContactRecordingResponse `object`

### StopContactRequest
* StopContactRequest `object`
  * ContactId **required**
  * InstanceId **required**

### StopContactResponse
* StopContactResponse `object`

### StorageType
* StorageType `string` (values: S3, KINESIS_VIDEO_STREAM, KINESIS_STREAM, KINESIS_FIREHOSE)

### String
* String `string`

### SuspendContactRecordingRequest
* SuspendContactRecordingRequest `object`
  * ContactId **required**
  * InitialContactId **required**
  * InstanceId **required**

### SuspendContactRecordingResponse
* SuspendContactRecordingResponse `object`

### TagKey
* TagKey `string`

### TagKeyList
* TagKeyList `array`
  * items [TagKey](#tagkey)

### TagMap
* TagMap `object`

### TagResourceRequest
* TagResourceRequest `object`
  * tags **required**

### TagValue
* TagValue `string`

### Threshold
* Threshold `object`: Contains information about the threshold for service level metrics.
  * Comparison
  * ThresholdValue

### ThresholdValue
* ThresholdValue `number`

### ThrottlingException


### Timestamp
* Timestamp `string`

### URI
* URI `string`

### Unit
* Unit `string` (values: SECONDS, COUNT, PERCENT)

### UntagResourceRequest
* UntagResourceRequest `object`

### UpdateContactAttributesRequest
* UpdateContactAttributesRequest `object`
  * Attributes **required**
  * InitialContactId **required**
  * InstanceId **required**

### UpdateContactAttributesResponse
* UpdateContactAttributesResponse `object`

### UpdateContactFlowContentRequest
* UpdateContactFlowContentRequest `object`
  * Content **required**

### UpdateContactFlowNameRequest
* UpdateContactFlowNameRequest `object`
  * Description
  * Name

### UpdateInstanceAttributeRequest
* UpdateInstanceAttributeRequest `object`
  * Value **required**

### UpdateInstanceStorageConfigRequest
* UpdateInstanceStorageConfigRequest `object`
  * StorageConfig **required** [InstanceStorageConfig](#instancestorageconfig)

### UpdateRoutingProfileConcurrencyRequest
* UpdateRoutingProfileConcurrencyRequest `object`
  * MediaConcurrencies **required**
    * items [MediaConcurrency](#mediaconcurrency)

### UpdateRoutingProfileDefaultOutboundQueueRequest
* UpdateRoutingProfileDefaultOutboundQueueRequest `object`
  * DefaultOutboundQueueId **required**

### UpdateRoutingProfileNameRequest
* UpdateRoutingProfileNameRequest `object`
  * Description
  * Name

### UpdateRoutingProfileQueuesRequest
* UpdateRoutingProfileQueuesRequest `object`
  * QueueConfigs **required**
    * items [RoutingProfileQueueConfig](#routingprofilequeueconfig)

### UpdateUserHierarchyGroupNameRequest
* UpdateUserHierarchyGroupNameRequest `object`
  * Name **required**

### UpdateUserHierarchyRequest
* UpdateUserHierarchyRequest `object`
  * HierarchyGroupId

### UpdateUserHierarchyStructureRequest
* UpdateUserHierarchyStructureRequest `object`
  * HierarchyStructure **required**
    * LevelFive
      * Name **required**
    * LevelFour
      * Name **required**
    * LevelOne
      * Name **required**
    * LevelThree
      * Name **required**
    * LevelTwo
      * Name **required**

### UpdateUserIdentityInfoRequest
* UpdateUserIdentityInfoRequest `object`
  * IdentityInfo **required**
    * Email
    * FirstName
    * LastName

### UpdateUserPhoneConfigRequest
* UpdateUserPhoneConfigRequest `object`
  * PhoneConfig **required**
    * AfterContactWorkTimeLimit
    * AutoAccept
    * DeskPhoneNumber
    * PhoneType **required**

### UpdateUserRoutingProfileRequest
* UpdateUserRoutingProfileRequest `object`
  * RoutingProfileId **required**

### UpdateUserSecurityProfilesRequest
* UpdateUserSecurityProfilesRequest `object`
  * SecurityProfileIds **required**
    * items [SecurityProfileId](#securityprofileid)

### UseCase
* UseCase `object`: Contains the use case.
  * UseCaseArn
  * UseCaseId
  * UseCaseType

### UseCaseId
* UseCaseId `string`

### UseCaseSummaryList
* UseCaseSummaryList `array`
  * items [UseCase](#usecase)

### UseCaseType
* UseCaseType `string` (values: RULES_EVALUATION)

### User
* User `object`: Contains information about a user account for a Amazon Connect instance.
  * Arn
  * DirectoryUserId
  * HierarchyGroupId
  * Id
  * IdentityInfo
    * Email
    * FirstName
    * LastName
  * PhoneConfig
    * AfterContactWorkTimeLimit
    * AutoAccept
    * DeskPhoneNumber
    * PhoneType **required**
  * RoutingProfileId
  * SecurityProfileIds
    * items [SecurityProfileId](#securityprofileid)
  * Tags
  * Username

### UserId
* UserId `string`

### UserIdentityInfo
* UserIdentityInfo `object`: Contains information about the identity of a user.
  * Email
  * FirstName
  * LastName

### UserNotFoundException


### UserPhoneConfig
* UserPhoneConfig `object`: Contains information about the phone configuration settings for a user.
  * AfterContactWorkTimeLimit
  * AutoAccept
  * DeskPhoneNumber
  * PhoneType **required**

### UserSummary
* UserSummary `object`: Contains summary information about a user.
  * Arn
  * Id
  * Username

### UserSummaryList
* UserSummaryList `array`
  * items [UserSummary](#usersummary)

### Value
* Value `number`

### VoiceRecordingConfiguration
* VoiceRecordingConfiguration `object`: Contains information about the recording configuration settings.
  * VoiceRecordingTrack

### VoiceRecordingTrack
* VoiceRecordingTrack `string` (values: FROM_AGENT, TO_AGENT, ALL)

### timestamp
* timestamp `string`


