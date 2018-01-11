# @datafire/amazonaws_sns

Client library for Amazon Simple Notification Service

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_sns
```
```js
let amazonaws_sns = require('@datafire/amazonaws_sns').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

amazonaws_sns.AddPermission({}).then(data => {
  console.log(data);
})
```

## Description

<fullname>Amazon Simple Notification Service</fullname> <p>Amazon Simple Notification Service (Amazon SNS) is a web service that enables you to build distributed web-enabled applications. Applications can use Amazon SNS to easily push real-time notification messages to interested subscribers over multiple delivery protocols. For more information about this product see <a href="http://aws.amazon.com/sns/">http://aws.amazon.com/sns</a>. For detailed information about Amazon SNS features and their associated API calls, see the <a href="http://docs.aws.amazon.com/sns/latest/dg/">Amazon SNS Developer Guide</a>. </p> <p>We also provide SDKs that enable you to access Amazon SNS from your preferred programming language. The SDKs contain functionality that automatically takes care of tasks such as: cryptographically signing your service requests, retrying requests, and handling error responses. For a list of available SDKs, go to <a href="http://aws.amazon.com/tools/">Tools for Amazon Web Services</a>. </p>

## Actions

### AddPermission



```js
amazonaws_sns.AddPermission({
  "TopicArn": "",
  "Label": "",
  "AWSAccountId": [],
  "ActionName": []
}, context)
```

#### Input
* input `object`
  * AWSAccountId **required** [DelegatesList](#delegateslist)
  * ActionName **required** [ActionsList](#actionslist)
  * Label **required** [label](#label)
  * TopicArn **required** [topicARN](#topicarn)

#### Output
*Output schema unknown*

### CheckIfPhoneNumberIsOptedOut



```js
amazonaws_sns.CheckIfPhoneNumberIsOptedOut({
  "phoneNumber": ""
}, context)
```

#### Input
* input `object`
  * phoneNumber **required** [PhoneNumber](#phonenumber)

#### Output
* output [CheckIfPhoneNumberIsOptedOutResponse](#checkifphonenumberisoptedoutresponse)

### ConfirmSubscription



```js
amazonaws_sns.ConfirmSubscription({
  "TopicArn": "",
  "Token": ""
}, context)
```

#### Input
* input `object`
  * AuthenticateOnUnsubscribe [authenticateOnUnsubscribe](#authenticateonunsubscribe)
  * Token **required** [token](#token)
  * TopicArn **required** [topicARN](#topicarn)

#### Output
* output [ConfirmSubscriptionResponse](#confirmsubscriptionresponse)

### CreatePlatformApplication



```js
amazonaws_sns.CreatePlatformApplication({
  "Name": "",
  "Platform": "",
  "Attributes": []
}, context)
```

#### Input
* input `object`
  * Attributes **required** [MapStringToString](#mapstringtostring)
  * Name **required** [String](#string)
  * Platform **required** [String](#string)

#### Output
* output [CreatePlatformApplicationResponse](#createplatformapplicationresponse)

### CreatePlatformEndpoint



```js
amazonaws_sns.CreatePlatformEndpoint({
  "PlatformApplicationArn": "",
  "Token": ""
}, context)
```

#### Input
* input `object`
  * Attributes [MapStringToString](#mapstringtostring)
  * CustomUserData [String](#string)
  * PlatformApplicationArn **required** [String](#string)
  * Token **required** [String](#string)

#### Output
* output [CreateEndpointResponse](#createendpointresponse)

### CreateTopic



```js
amazonaws_sns.CreateTopic({
  "Name": ""
}, context)
```

#### Input
* input `object`
  * Name **required** [topicName](#topicname)

#### Output
* output [CreateTopicResponse](#createtopicresponse)

### DeleteEndpoint



```js
amazonaws_sns.DeleteEndpoint({
  "EndpointArn": ""
}, context)
```

#### Input
* input `object`
  * EndpointArn **required** [String](#string)

#### Output
*Output schema unknown*

### DeletePlatformApplication



```js
amazonaws_sns.DeletePlatformApplication({
  "PlatformApplicationArn": ""
}, context)
```

#### Input
* input `object`
  * PlatformApplicationArn **required** [String](#string)

#### Output
*Output schema unknown*

### DeleteTopic



```js
amazonaws_sns.DeleteTopic({
  "TopicArn": ""
}, context)
```

#### Input
* input `object`
  * TopicArn **required** [topicARN](#topicarn)

#### Output
*Output schema unknown*

### GetEndpointAttributes



```js
amazonaws_sns.GetEndpointAttributes({
  "EndpointArn": ""
}, context)
```

#### Input
* input `object`
  * EndpointArn **required** [String](#string)

#### Output
* output [GetEndpointAttributesResponse](#getendpointattributesresponse)

### GetPlatformApplicationAttributes



```js
amazonaws_sns.GetPlatformApplicationAttributes({
  "PlatformApplicationArn": ""
}, context)
```

#### Input
* input `object`
  * PlatformApplicationArn **required** [String](#string)

#### Output
* output [GetPlatformApplicationAttributesResponse](#getplatformapplicationattributesresponse)

### GetSMSAttributes



```js
amazonaws_sns.GetSMSAttributes({}, context)
```

#### Input
* input `object`
  * attributes [ListString](#liststring)

#### Output
* output [GetSMSAttributesResponse](#getsmsattributesresponse)

### GetSubscriptionAttributes



```js
amazonaws_sns.GetSubscriptionAttributes({
  "SubscriptionArn": ""
}, context)
```

#### Input
* input `object`
  * SubscriptionArn **required** [subscriptionARN](#subscriptionarn)

#### Output
* output [GetSubscriptionAttributesResponse](#getsubscriptionattributesresponse)

### GetTopicAttributes



```js
amazonaws_sns.GetTopicAttributes({
  "TopicArn": ""
}, context)
```

#### Input
* input `object`
  * TopicArn **required** [topicARN](#topicarn)

#### Output
* output [GetTopicAttributesResponse](#gettopicattributesresponse)

### ListEndpointsByPlatformApplication



```js
amazonaws_sns.ListEndpointsByPlatformApplication({
  "PlatformApplicationArn": ""
}, context)
```

#### Input
* input `object`
  * NextToken `string`
  * NextToken [String](#string)
  * PlatformApplicationArn **required** [String](#string)

#### Output
* output [ListEndpointsByPlatformApplicationResponse](#listendpointsbyplatformapplicationresponse)

### ListPhoneNumbersOptedOut



```js
amazonaws_sns.ListPhoneNumbersOptedOut({}, context)
```

#### Input
* input `object`
  * nextToken [string](#string)

#### Output
* output [ListPhoneNumbersOptedOutResponse](#listphonenumbersoptedoutresponse)

### ListPlatformApplications



```js
amazonaws_sns.ListPlatformApplications({}, context)
```

#### Input
* input `object`
  * NextToken `string`
  * NextToken [String](#string)

#### Output
* output [ListPlatformApplicationsResponse](#listplatformapplicationsresponse)

### ListSubscriptions



```js
amazonaws_sns.ListSubscriptions({}, context)
```

#### Input
* input `object`
  * NextToken `string`
  * NextToken [nextToken](#nexttoken)

#### Output
* output [ListSubscriptionsResponse](#listsubscriptionsresponse)

### ListSubscriptionsByTopic



```js
amazonaws_sns.ListSubscriptionsByTopic({
  "TopicArn": ""
}, context)
```

#### Input
* input `object`
  * NextToken `string`
  * NextToken [nextToken](#nexttoken)
  * TopicArn **required** [topicARN](#topicarn)

#### Output
* output [ListSubscriptionsByTopicResponse](#listsubscriptionsbytopicresponse)

### ListTopics



```js
amazonaws_sns.ListTopics({}, context)
```

#### Input
* input `object`
  * NextToken `string`
  * NextToken [nextToken](#nexttoken)

#### Output
* output [ListTopicsResponse](#listtopicsresponse)

### OptInPhoneNumber



```js
amazonaws_sns.OptInPhoneNumber({
  "phoneNumber": ""
}, context)
```

#### Input
* input `object`
  * phoneNumber **required** [PhoneNumber](#phonenumber)

#### Output
* output [OptInPhoneNumberResponse](#optinphonenumberresponse)

### Publish



```js
amazonaws_sns.Publish({
  "Message": ""
}, context)
```

#### Input
* input `object`
  * Message **required** [message](#message)
  * MessageAttributes [MessageAttributeMap](#messageattributemap)
  * MessageStructure [messageStructure](#messagestructure)
  * PhoneNumber [String](#string)
  * Subject [subject](#subject)
  * TargetArn [String](#string)
  * TopicArn [topicARN](#topicarn)

#### Output
* output [PublishResponse](#publishresponse)

### RemovePermission



```js
amazonaws_sns.RemovePermission({
  "TopicArn": "",
  "Label": ""
}, context)
```

#### Input
* input `object`
  * Label **required** [label](#label)
  * TopicArn **required** [topicARN](#topicarn)

#### Output
*Output schema unknown*

### SetEndpointAttributes



```js
amazonaws_sns.SetEndpointAttributes({
  "EndpointArn": "",
  "Attributes": []
}, context)
```

#### Input
* input `object`
  * Attributes **required** [MapStringToString](#mapstringtostring)
  * EndpointArn **required** [String](#string)

#### Output
*Output schema unknown*

### SetPlatformApplicationAttributes



```js
amazonaws_sns.SetPlatformApplicationAttributes({
  "PlatformApplicationArn": "",
  "Attributes": []
}, context)
```

#### Input
* input `object`
  * Attributes **required** [MapStringToString](#mapstringtostring)
  * PlatformApplicationArn **required** [String](#string)

#### Output
*Output schema unknown*

### SetSMSAttributes



```js
amazonaws_sns.SetSMSAttributes({
  "attributes": []
}, context)
```

#### Input
* input `object`
  * attributes **required** [MapStringToString](#mapstringtostring)

#### Output
* output [SetSMSAttributesResponse](#setsmsattributesresponse)

### SetSubscriptionAttributes



```js
amazonaws_sns.SetSubscriptionAttributes({
  "SubscriptionArn": "",
  "AttributeName": ""
}, context)
```

#### Input
* input `object`
  * AttributeName **required** [attributeName](#attributename)
  * AttributeValue [attributeValue](#attributevalue)
  * SubscriptionArn **required** [subscriptionARN](#subscriptionarn)

#### Output
*Output schema unknown*

### SetTopicAttributes



```js
amazonaws_sns.SetTopicAttributes({
  "TopicArn": "",
  "AttributeName": ""
}, context)
```

#### Input
* input `object`
  * AttributeName **required** [attributeName](#attributename)
  * AttributeValue [attributeValue](#attributevalue)
  * TopicArn **required** [topicARN](#topicarn)

#### Output
*Output schema unknown*

### Subscribe



```js
amazonaws_sns.Subscribe({
  "TopicArn": "",
  "Protocol": ""
}, context)
```

#### Input
* input `object`
  * Endpoint [endpoint](#endpoint)
  * Protocol **required** [protocol](#protocol)
  * TopicArn **required** [topicARN](#topicarn)

#### Output
* output [SubscribeResponse](#subscriberesponse)

### Unsubscribe



```js
amazonaws_sns.Unsubscribe({
  "SubscriptionArn": ""
}, context)
```

#### Input
* input `object`
  * SubscriptionArn **required** [subscriptionARN](#subscriptionarn)

#### Output
*Output schema unknown*



## Definitions

### ActionsList
* ActionsList `array`
  * items [action](#action)

### AddPermissionInput
* AddPermissionInput `object`
  * AWSAccountId **required** [DelegatesList](#delegateslist)
  * ActionName **required** [ActionsList](#actionslist)
  * Label **required** [label](#label)
  * TopicArn **required** [topicARN](#topicarn)

### AuthorizationErrorException
* AuthorizationErrorException `object`: Indicates that the user has been denied access to the requested resource.
  * message [string](#string)

### Binary
* Binary `string`

### CheckIfPhoneNumberIsOptedOutInput
* CheckIfPhoneNumberIsOptedOutInput `object`: The input for the <code>CheckIfPhoneNumberIsOptedOut</code> action.
  * phoneNumber **required** [PhoneNumber](#phonenumber)

### CheckIfPhoneNumberIsOptedOutResponse
* CheckIfPhoneNumberIsOptedOutResponse `object`: The response from the <code>CheckIfPhoneNumberIsOptedOut</code> action.
  * isOptedOut [boolean](#boolean)

### ConfirmSubscriptionInput
* ConfirmSubscriptionInput `object`: Input for ConfirmSubscription action.
  * AuthenticateOnUnsubscribe [authenticateOnUnsubscribe](#authenticateonunsubscribe)
  * Token **required** [token](#token)
  * TopicArn **required** [topicARN](#topicarn)

### ConfirmSubscriptionResponse
* ConfirmSubscriptionResponse `object`: Response for ConfirmSubscriptions action.
  * SubscriptionArn [subscriptionARN](#subscriptionarn)

### CreateEndpointResponse
* CreateEndpointResponse `object`: Response from CreateEndpoint action.
  * EndpointArn [String](#string)

### CreatePlatformApplicationInput
* CreatePlatformApplicationInput `object`: Input for CreatePlatformApplication action.
  * Attributes **required** [MapStringToString](#mapstringtostring)
  * Name **required** [String](#string)
  * Platform **required** [String](#string)

### CreatePlatformApplicationResponse
* CreatePlatformApplicationResponse `object`: Response from CreatePlatformApplication action.
  * PlatformApplicationArn [String](#string)

### CreatePlatformEndpointInput
* CreatePlatformEndpointInput `object`: Input for CreatePlatformEndpoint action.
  * Attributes [MapStringToString](#mapstringtostring)
  * CustomUserData [String](#string)
  * PlatformApplicationArn **required** [String](#string)
  * Token **required** [String](#string)

### CreateTopicInput
* CreateTopicInput `object`: Input for CreateTopic action.
  * Name **required** [topicName](#topicname)

### CreateTopicResponse
* CreateTopicResponse `object`: Response from CreateTopic action.
  * TopicArn [topicARN](#topicarn)

### DelegatesList
* DelegatesList `array`
  * items [delegate](#delegate)

### DeleteEndpointInput
* DeleteEndpointInput `object`: Input for DeleteEndpoint action.
  * EndpointArn **required** [String](#string)

### DeletePlatformApplicationInput
* DeletePlatformApplicationInput `object`: Input for DeletePlatformApplication action.
  * PlatformApplicationArn **required** [String](#string)

### DeleteTopicInput
* DeleteTopicInput `object`
  * TopicArn **required** [topicARN](#topicarn)

### Endpoint
* Endpoint `object`: Endpoint for mobile app and device.
  * Attributes [MapStringToString](#mapstringtostring)
  * EndpointArn [String](#string)

### EndpointDisabledException
* EndpointDisabledException `object`: Exception error indicating endpoint disabled.
  * message [string](#string)

### GetEndpointAttributesInput
* GetEndpointAttributesInput `object`: Input for GetEndpointAttributes action.
  * EndpointArn **required** [String](#string)

### GetEndpointAttributesResponse
* GetEndpointAttributesResponse `object`: Response from GetEndpointAttributes of the EndpointArn.
  * Attributes [MapStringToString](#mapstringtostring)

### GetPlatformApplicationAttributesInput
* GetPlatformApplicationAttributesInput `object`: Input for GetPlatformApplicationAttributes action.
  * PlatformApplicationArn **required** [String](#string)

### GetPlatformApplicationAttributesResponse
* GetPlatformApplicationAttributesResponse `object`: Response for GetPlatformApplicationAttributes action.
  * Attributes [MapStringToString](#mapstringtostring)

### GetSMSAttributesInput
* GetSMSAttributesInput `object`: The input for the <code>GetSMSAttributes</code> request.
  * attributes [ListString](#liststring)

### GetSMSAttributesResponse
* GetSMSAttributesResponse `object`: The response from the <code>GetSMSAttributes</code> request.
  * attributes [MapStringToString](#mapstringtostring)

### GetSubscriptionAttributesInput
* GetSubscriptionAttributesInput `object`: Input for GetSubscriptionAttributes.
  * SubscriptionArn **required** [subscriptionARN](#subscriptionarn)

### GetSubscriptionAttributesResponse
* GetSubscriptionAttributesResponse `object`: Response for GetSubscriptionAttributes action.
  * Attributes [SubscriptionAttributesMap](#subscriptionattributesmap)

### GetTopicAttributesInput
* GetTopicAttributesInput `object`: Input for GetTopicAttributes action.
  * TopicArn **required** [topicARN](#topicarn)

### GetTopicAttributesResponse
* GetTopicAttributesResponse `object`: Response for GetTopicAttributes action.
  * Attributes [TopicAttributesMap](#topicattributesmap)

### InternalErrorException
* InternalErrorException `object`: Indicates an internal service error.
  * message [string](#string)

### InvalidParameterException
* InvalidParameterException `object`: Indicates that a request parameter does not comply with the associated constraints.
  * message [string](#string)

### InvalidParameterValueException
* InvalidParameterValueException `object`: Indicates that a request parameter does not comply with the associated constraints.
  * message [string](#string)

### ListEndpointsByPlatformApplicationInput
* ListEndpointsByPlatformApplicationInput `object`: Input for ListEndpointsByPlatformApplication action.
  * NextToken [String](#string)
  * PlatformApplicationArn **required** [String](#string)

### ListEndpointsByPlatformApplicationResponse
* ListEndpointsByPlatformApplicationResponse `object`: Response for ListEndpointsByPlatformApplication action.
  * Endpoints [ListOfEndpoints](#listofendpoints)
  * NextToken [String](#string)

### ListOfEndpoints
* ListOfEndpoints `array`
  * items [Endpoint](#endpoint)

### ListOfPlatformApplications
* ListOfPlatformApplications `array`
  * items [PlatformApplication](#platformapplication)

### ListPhoneNumbersOptedOutInput
* ListPhoneNumbersOptedOutInput `object`: The input for the <code>ListPhoneNumbersOptedOut</code> action.
  * nextToken [string](#string)

### ListPhoneNumbersOptedOutResponse
* ListPhoneNumbersOptedOutResponse `object`: The response from the <code>ListPhoneNumbersOptedOut</code> action.
  * nextToken [string](#string)
  * phoneNumbers [PhoneNumberList](#phonenumberlist)

### ListPlatformApplicationsInput
* ListPlatformApplicationsInput `object`: Input for ListPlatformApplications action.
  * NextToken [String](#string)

### ListPlatformApplicationsResponse
* ListPlatformApplicationsResponse `object`: Response for ListPlatformApplications action.
  * NextToken [String](#string)
  * PlatformApplications [ListOfPlatformApplications](#listofplatformapplications)

### ListString
* ListString `array`
  * items [String](#string)

### ListSubscriptionsByTopicInput
* ListSubscriptionsByTopicInput `object`: Input for ListSubscriptionsByTopic action.
  * NextToken [nextToken](#nexttoken)
  * TopicArn **required** [topicARN](#topicarn)

### ListSubscriptionsByTopicResponse
* ListSubscriptionsByTopicResponse `object`: Response for ListSubscriptionsByTopic action.
  * NextToken [nextToken](#nexttoken)
  * Subscriptions [SubscriptionsList](#subscriptionslist)

### ListSubscriptionsInput
* ListSubscriptionsInput `object`: Input for ListSubscriptions action.
  * NextToken [nextToken](#nexttoken)

### ListSubscriptionsResponse
* ListSubscriptionsResponse `object`: Response for ListSubscriptions action
  * NextToken [nextToken](#nexttoken)
  * Subscriptions [SubscriptionsList](#subscriptionslist)

### ListTopicsInput
* ListTopicsInput `object`
  * NextToken [nextToken](#nexttoken)

### ListTopicsResponse
* ListTopicsResponse `object`: Response for ListTopics action.
  * NextToken [nextToken](#nexttoken)
  * Topics [TopicsList](#topicslist)

### MapStringToString
* MapStringToString `array`
  * items `object`
    * key [String](#string)
    * value [String](#string)

### MessageAttributeMap
* MessageAttributeMap `array`
  * items `object`
    * key [String](#string)
    * value [MessageAttributeValue](#messageattributevalue)

### MessageAttributeValue
* MessageAttributeValue `object`: <p>The user-specified message attribute value. For string data types, the value attribute has the same restrictions on the content as the message body. For more information, see <a href="http://docs.aws.amazon.com/sns/latest/api/API_Publish.html">Publish</a>.</p> <p>Name, type, and value must not be empty or null. In addition, the message body should not be empty or null. All parts of the message attribute, including name, type, and value, are included in the message size restriction, which is currently 256 KB (262,144 bytes). For more information, see <a href="http://docs.aws.amazon.com/sns/latest/dg/SNSMessageAttributes.html">Using Amazon SNS Message Attributes</a>.</p>
  * BinaryValue [Binary](#binary)
  * DataType **required** [String](#string)
  * StringValue [String](#string)

### NotFoundException
* NotFoundException `object`: Indicates that the requested resource does not exist.
  * message [string](#string)

### OptInPhoneNumberInput
* OptInPhoneNumberInput `object`: Input for the OptInPhoneNumber action.
  * phoneNumber **required** [PhoneNumber](#phonenumber)

### OptInPhoneNumberResponse
* OptInPhoneNumberResponse `object`: The response for the OptInPhoneNumber action.

### PhoneNumber
* PhoneNumber `string`

### PhoneNumberList
* PhoneNumberList `array`
  * items [PhoneNumber](#phonenumber)

### PlatformApplication
* PlatformApplication `object`: Platform application object.
  * Attributes [MapStringToString](#mapstringtostring)
  * PlatformApplicationArn [String](#string)

### PlatformApplicationDisabledException
* PlatformApplicationDisabledException `object`: Exception error indicating platform application disabled.
  * message [string](#string)

### PublishInput
* PublishInput `object`: Input for Publish action.
  * Message **required** [message](#message)
  * MessageAttributes [MessageAttributeMap](#messageattributemap)
  * MessageStructure [messageStructure](#messagestructure)
  * PhoneNumber [String](#string)
  * Subject [subject](#subject)
  * TargetArn [String](#string)
  * TopicArn [topicARN](#topicarn)

### PublishResponse
* PublishResponse `object`: Response for Publish action.
  * MessageId [messageId](#messageid)

### RemovePermissionInput
* RemovePermissionInput `object`: Input for RemovePermission action.
  * Label **required** [label](#label)
  * TopicArn **required** [topicARN](#topicarn)

### SetEndpointAttributesInput
* SetEndpointAttributesInput `object`: Input for SetEndpointAttributes action.
  * Attributes **required** [MapStringToString](#mapstringtostring)
  * EndpointArn **required** [String](#string)

### SetPlatformApplicationAttributesInput
* SetPlatformApplicationAttributesInput `object`: Input for SetPlatformApplicationAttributes action.
  * Attributes **required** [MapStringToString](#mapstringtostring)
  * PlatformApplicationArn **required** [String](#string)

### SetSMSAttributesInput
* SetSMSAttributesInput `object`: The input for the SetSMSAttributes action.
  * attributes **required** [MapStringToString](#mapstringtostring)

### SetSMSAttributesResponse
* SetSMSAttributesResponse `object`: The response for the SetSMSAttributes action.

### SetSubscriptionAttributesInput
* SetSubscriptionAttributesInput `object`: Input for SetSubscriptionAttributes action.
  * AttributeName **required** [attributeName](#attributename)
  * AttributeValue [attributeValue](#attributevalue)
  * SubscriptionArn **required** [subscriptionARN](#subscriptionarn)

### SetTopicAttributesInput
* SetTopicAttributesInput `object`: Input for SetTopicAttributes action.
  * AttributeName **required** [attributeName](#attributename)
  * AttributeValue [attributeValue](#attributevalue)
  * TopicArn **required** [topicARN](#topicarn)

### String
* String `string`

### SubscribeInput
* SubscribeInput `object`: Input for Subscribe action.
  * Endpoint [endpoint](#endpoint)
  * Protocol **required** [protocol](#protocol)
  * TopicArn **required** [topicARN](#topicarn)

### SubscribeResponse
* SubscribeResponse `object`: Response for Subscribe action.
  * SubscriptionArn [subscriptionARN](#subscriptionarn)

### Subscription
* Subscription `object`: A wrapper type for the attributes of an Amazon SNS subscription.
  * Endpoint [endpoint](#endpoint)
  * Owner [account](#account)
  * Protocol [protocol](#protocol)
  * SubscriptionArn [subscriptionARN](#subscriptionarn)
  * TopicArn [topicARN](#topicarn)

### SubscriptionAttributesMap
* SubscriptionAttributesMap `array`
  * items `object`
    * key [attributeName](#attributename)
    * value [attributeValue](#attributevalue)

### SubscriptionLimitExceededException
* SubscriptionLimitExceededException `object`: Indicates that the customer already owns the maximum allowed number of subscriptions.
  * message [string](#string)

### SubscriptionsList
* SubscriptionsList `array`
  * items [Subscription](#subscription)

### ThrottledException
* ThrottledException `object`: Indicates that the rate at which requests have been submitted for this action exceeds the limit for your account.
  * message [string](#string)

### Topic
* Topic `object`: A wrapper type for the topic's Amazon Resource Name (ARN). To retrieve a topic's attributes, use <code>GetTopicAttributes</code>.
  * TopicArn [topicARN](#topicarn)

### TopicAttributesMap
* TopicAttributesMap `array`
  * items `object`
    * key [attributeName](#attributename)
    * value [attributeValue](#attributevalue)

### TopicLimitExceededException
* TopicLimitExceededException `object`: Indicates that the customer already owns the maximum allowed number of topics.
  * message [string](#string)

### TopicsList
* TopicsList `array`
  * items [Topic](#topic)

### UnsubscribeInput
* UnsubscribeInput `object`: Input for Unsubscribe action.
  * SubscriptionArn **required** [subscriptionARN](#subscriptionarn)

### account
* account `string`

### action
* action `string`

### attributeName
* attributeName `string`

### attributeValue
* attributeValue `string`

### authenticateOnUnsubscribe
* authenticateOnUnsubscribe `string`

### boolean
* boolean `boolean`

### delegate
* delegate `string`

### endpoint
* endpoint `string`

### label
* label `string`

### message
* message `string`

### messageId
* messageId `string`

### messageStructure
* messageStructure `string`

### nextToken
* nextToken `string`

### protocol
* protocol `string`

### string
* string `string`

### subject
* subject `string`

### subscriptionARN
* subscriptionARN `string`

### token
* token `string`

### topicARN
* topicARN `string`

### topicName
* topicName `string`


