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

.then(data => {
  console.log(data);
});
```

## Description

<fullname>Amazon Simple Notification Service</fullname> <p>Amazon Simple Notification Service (Amazon SNS) is a web service that enables you to build distributed web-enabled applications. Applications can use Amazon SNS to easily push real-time notification messages to interested subscribers over multiple delivery protocols. For more information about this product see <a href="http://aws.amazon.com/sns/">https://aws.amazon.com/sns</a>. For detailed information about Amazon SNS features and their associated API calls, see the <a href="https://docs.aws.amazon.com/sns/latest/dg/">Amazon SNS Developer Guide</a>. </p> <p>For information on the permissions you need to use this API, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-authentication-and-access-control.html">Identity and access management in Amazon SNS</a> in the <i>Amazon SNS Developer Guide.</i> </p> <p>We also provide SDKs that enable you to access Amazon SNS from your preferred programming language. The SDKs contain functionality that automatically takes care of tasks such as: cryptographically signing your service requests, retrying requests, and handling error responses. For a list of available SDKs, go to <a href="http://aws.amazon.com/tools/">Tools for Amazon Web Services</a>. </p>

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
  * TopicArn **required** `string`
  * Label **required** `string`
  * AWSAccountId **required** `array`
  * ActionName **required** `array`

#### Output
*Output schema unknown*

### AddPermission



```js
amazonaws_sns.AddPermission({
  "TopicArn": null,
  "Label": null,
  "AWSAccountId": null,
  "ActionName": null
}, context)
```

#### Input
* input `object`
  * AWSAccountId **required**
    * items [delegate](#delegate)
  * ActionName **required**
    * items [action](#action)
  * Label **required**
  * TopicArn **required**

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
  * phoneNumber **required** `string`

#### Output
* output [CheckIfPhoneNumberIsOptedOutResponse](#checkifphonenumberisoptedoutresponse)

### CheckIfPhoneNumberIsOptedOut



```js
amazonaws_sns.CheckIfPhoneNumberIsOptedOut({
  "phoneNumber": null
}, context)
```

#### Input
* input `object`
  * phoneNumber **required**

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
  * TopicArn **required** `string`
  * Token **required** `string`
  * AuthenticateOnUnsubscribe `string`

#### Output
* output [ConfirmSubscriptionResponse](#confirmsubscriptionresponse)

### ConfirmSubscription



```js
amazonaws_sns.ConfirmSubscription({
  "TopicArn": null,
  "Token": null
}, context)
```

#### Input
* input `object`
  * AuthenticateOnUnsubscribe
  * Token **required**
  * TopicArn **required**

#### Output
* output [ConfirmSubscriptionResponse](#confirmsubscriptionresponse)

### CreatePlatformApplication



```js
amazonaws_sns.CreatePlatformApplication({
  "Name": "",
  "Platform": "",
  "Attributes": {}
}, context)
```

#### Input
* input `object`
  * Name **required** `string`
  * Platform **required** `string`
  * Attributes **required** `object`

#### Output
* output [CreatePlatformApplicationResponse](#createplatformapplicationresponse)

### CreatePlatformApplication



```js
amazonaws_sns.CreatePlatformApplication({
  "Name": null,
  "Platform": null,
  "Attributes": null
}, context)
```

#### Input
* input `object`
  * Attributes **required**
  * Name **required**
  * Platform **required**

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
  * PlatformApplicationArn **required** `string`
  * Token **required** `string`
  * CustomUserData `string`
  * Attributes `object`

#### Output
* output [CreateEndpointResponse](#createendpointresponse)

### CreatePlatformEndpoint



```js
amazonaws_sns.CreatePlatformEndpoint({
  "PlatformApplicationArn": null,
  "Token": null
}, context)
```

#### Input
* input `object`
  * Attributes
  * CustomUserData
  * PlatformApplicationArn **required**
  * Token **required**

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
  * Name **required** `string`
  * Attributes `object`
  * Tags `array`

#### Output
* output [CreateTopicResponse](#createtopicresponse)

### CreateTopic



```js
amazonaws_sns.CreateTopic({
  "Name": null
}, context)
```

#### Input
* input `object`
  * Attributes
  * Name **required**
  * Tags
    * items [Tag](#tag)

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
  * EndpointArn **required** `string`

#### Output
*Output schema unknown*

### DeleteEndpoint



```js
amazonaws_sns.DeleteEndpoint({
  "EndpointArn": null
}, context)
```

#### Input
* input `object`
  * EndpointArn **required**

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
  * PlatformApplicationArn **required** `string`

#### Output
*Output schema unknown*

### DeletePlatformApplication



```js
amazonaws_sns.DeletePlatformApplication({
  "PlatformApplicationArn": null
}, context)
```

#### Input
* input `object`
  * PlatformApplicationArn **required**

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
  * TopicArn **required** `string`

#### Output
*Output schema unknown*

### DeleteTopic



```js
amazonaws_sns.DeleteTopic({
  "TopicArn": null
}, context)
```

#### Input
* input `object`
  * TopicArn **required**

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
  * EndpointArn **required** `string`

#### Output
* output [GetEndpointAttributesResponse](#getendpointattributesresponse)

### GetEndpointAttributes



```js
amazonaws_sns.GetEndpointAttributes({
  "EndpointArn": null
}, context)
```

#### Input
* input `object`
  * EndpointArn **required**

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
  * PlatformApplicationArn **required** `string`

#### Output
* output [GetPlatformApplicationAttributesResponse](#getplatformapplicationattributesresponse)

### GetPlatformApplicationAttributes



```js
amazonaws_sns.GetPlatformApplicationAttributes({
  "PlatformApplicationArn": null
}, context)
```

#### Input
* input `object`
  * PlatformApplicationArn **required**

#### Output
* output [GetPlatformApplicationAttributesResponse](#getplatformapplicationattributesresponse)

### GetSMSAttributes



```js
amazonaws_sns.GetSMSAttributes({}, context)
```

#### Input
* input `object`
  * attributes `array`

#### Output
* output [GetSMSAttributesResponse](#getsmsattributesresponse)

### GetSMSAttributes



```js
amazonaws_sns.GetSMSAttributes({}, context)
```

#### Input
* input `object`
  * attributes
    * items [String](#string)

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
  * SubscriptionArn **required** `string`

#### Output
* output [GetSubscriptionAttributesResponse](#getsubscriptionattributesresponse)

### GetSubscriptionAttributes



```js
amazonaws_sns.GetSubscriptionAttributes({
  "SubscriptionArn": null
}, context)
```

#### Input
* input `object`
  * SubscriptionArn **required**

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
  * TopicArn **required** `string`

#### Output
* output [GetTopicAttributesResponse](#gettopicattributesresponse)

### GetTopicAttributes



```js
amazonaws_sns.GetTopicAttributes({
  "TopicArn": null
}, context)
```

#### Input
* input `object`
  * TopicArn **required**

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
  * PlatformApplicationArn **required** `string`
  * NextToken `string`

#### Output
* output [ListEndpointsByPlatformApplicationResponse](#listendpointsbyplatformapplicationresponse)

### ListEndpointsByPlatformApplication



```js
amazonaws_sns.ListEndpointsByPlatformApplication({
  "PlatformApplicationArn": null
}, context)
```

#### Input
* input `object`
  * NextToken `string`
  * NextToken
  * PlatformApplicationArn **required**

#### Output
* output [ListEndpointsByPlatformApplicationResponse](#listendpointsbyplatformapplicationresponse)

### ListPhoneNumbersOptedOut



```js
amazonaws_sns.ListPhoneNumbersOptedOut({}, context)
```

#### Input
* input `object`
  * nextToken `string`

#### Output
* output [ListPhoneNumbersOptedOutResponse](#listphonenumbersoptedoutresponse)

### ListPhoneNumbersOptedOut



```js
amazonaws_sns.ListPhoneNumbersOptedOut({}, context)
```

#### Input
* input `object`
  * nextToken

#### Output
* output [ListPhoneNumbersOptedOutResponse](#listphonenumbersoptedoutresponse)

### ListPlatformApplications



```js
amazonaws_sns.ListPlatformApplications({}, context)
```

#### Input
* input `object`
  * NextToken `string`

#### Output
* output [ListPlatformApplicationsResponse](#listplatformapplicationsresponse)

### ListPlatformApplications



```js
amazonaws_sns.ListPlatformApplications({}, context)
```

#### Input
* input `object`
  * NextToken `string`
  * NextToken

#### Output
* output [ListPlatformApplicationsResponse](#listplatformapplicationsresponse)

### ListSubscriptions



```js
amazonaws_sns.ListSubscriptions({}, context)
```

#### Input
* input `object`
  * NextToken `string`

#### Output
* output [ListSubscriptionsResponse](#listsubscriptionsresponse)

### ListSubscriptions



```js
amazonaws_sns.ListSubscriptions({}, context)
```

#### Input
* input `object`
  * NextToken `string`
  * NextToken

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
  * TopicArn **required** `string`
  * NextToken `string`

#### Output
* output [ListSubscriptionsByTopicResponse](#listsubscriptionsbytopicresponse)

### ListSubscriptionsByTopic



```js
amazonaws_sns.ListSubscriptionsByTopic({
  "TopicArn": null
}, context)
```

#### Input
* input `object`
  * NextToken `string`
  * NextToken
  * TopicArn **required**

#### Output
* output [ListSubscriptionsByTopicResponse](#listsubscriptionsbytopicresponse)

### ListTagsForResource



```js
amazonaws_sns.ListTagsForResource({
  "ResourceArn": ""
}, context)
```

#### Input
* input `object`
  * ResourceArn **required** `string`

#### Output
* output [ListTagsForResourceResponse](#listtagsforresourceresponse)

### ListTagsForResource



```js
amazonaws_sns.ListTagsForResource({
  "ResourceArn": null
}, context)
```

#### Input
* input `object`
  * ResourceArn **required**

#### Output
* output [ListTagsForResourceResponse](#listtagsforresourceresponse)

### ListTopics



```js
amazonaws_sns.ListTopics({}, context)
```

#### Input
* input `object`
  * NextToken `string`

#### Output
* output [ListTopicsResponse](#listtopicsresponse)

### ListTopics



```js
amazonaws_sns.ListTopics({}, context)
```

#### Input
* input `object`
  * NextToken `string`
  * NextToken

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
  * phoneNumber **required** `string`

#### Output
* output [OptInPhoneNumberResponse](#optinphonenumberresponse)

### OptInPhoneNumber



```js
amazonaws_sns.OptInPhoneNumber({
  "phoneNumber": null
}, context)
```

#### Input
* input `object`
  * phoneNumber **required**

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
  * TopicArn `string`
  * TargetArn `string`
  * PhoneNumber `string`
  * Message **required** `string`
  * Subject `string`
  * MessageStructure `string`
  * MessageAttributes `object`
  * MessageDeduplicationId `string`
  * MessageGroupId `string`

#### Output
* output [PublishResponse](#publishresponse)

### Publish



```js
amazonaws_sns.Publish({
  "Message": null
}, context)
```

#### Input
* input `object`
  * Message **required**
  * MessageAttributes
  * MessageDeduplicationId
  * MessageGroupId
  * MessageStructure
  * PhoneNumber
  * Subject
  * TargetArn
  * TopicArn

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
  * TopicArn **required** `string`
  * Label **required** `string`

#### Output
*Output schema unknown*

### RemovePermission



```js
amazonaws_sns.RemovePermission({
  "TopicArn": null,
  "Label": null
}, context)
```

#### Input
* input `object`
  * Label **required**
  * TopicArn **required**

#### Output
*Output schema unknown*

### SetEndpointAttributes



```js
amazonaws_sns.SetEndpointAttributes({
  "EndpointArn": "",
  "Attributes": {}
}, context)
```

#### Input
* input `object`
  * EndpointArn **required** `string`
  * Attributes **required** `object`

#### Output
*Output schema unknown*

### SetEndpointAttributes



```js
amazonaws_sns.SetEndpointAttributes({
  "EndpointArn": null,
  "Attributes": null
}, context)
```

#### Input
* input `object`
  * Attributes **required**
  * EndpointArn **required**

#### Output
*Output schema unknown*

### SetPlatformApplicationAttributes



```js
amazonaws_sns.SetPlatformApplicationAttributes({
  "PlatformApplicationArn": "",
  "Attributes": {}
}, context)
```

#### Input
* input `object`
  * PlatformApplicationArn **required** `string`
  * Attributes **required** `object`

#### Output
*Output schema unknown*

### SetPlatformApplicationAttributes



```js
amazonaws_sns.SetPlatformApplicationAttributes({
  "PlatformApplicationArn": null,
  "Attributes": null
}, context)
```

#### Input
* input `object`
  * Attributes **required**
  * PlatformApplicationArn **required**

#### Output
*Output schema unknown*

### SetSMSAttributes



```js
amazonaws_sns.SetSMSAttributes({
  "attributes": {}
}, context)
```

#### Input
* input `object`
  * attributes **required** `object`

#### Output
* output [SetSMSAttributesResponse](#setsmsattributesresponse)

### SetSMSAttributes



```js
amazonaws_sns.SetSMSAttributes({
  "attributes": null
}, context)
```

#### Input
* input `object`
  * attributes **required**

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
  * SubscriptionArn **required** `string`
  * AttributeName **required** `string`
  * AttributeValue `string`

#### Output
*Output schema unknown*

### SetSubscriptionAttributes



```js
amazonaws_sns.SetSubscriptionAttributes({
  "SubscriptionArn": null,
  "AttributeName": null
}, context)
```

#### Input
* input `object`
  * AttributeName **required**
  * AttributeValue
  * SubscriptionArn **required**

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
  * TopicArn **required** `string`
  * AttributeName **required** `string`
  * AttributeValue `string`

#### Output
*Output schema unknown*

### SetTopicAttributes



```js
amazonaws_sns.SetTopicAttributes({
  "TopicArn": null,
  "AttributeName": null
}, context)
```

#### Input
* input `object`
  * AttributeName **required**
  * AttributeValue
  * TopicArn **required**

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
  * TopicArn **required** `string`
  * Protocol **required** `string`
  * Endpoint `string`
  * Attributes `object`
  * ReturnSubscriptionArn `boolean`

#### Output
* output [SubscribeResponse](#subscriberesponse)

### Subscribe



```js
amazonaws_sns.Subscribe({
  "TopicArn": null,
  "Protocol": null
}, context)
```

#### Input
* input `object`
  * Attributes
  * Endpoint
  * Protocol **required**
  * ReturnSubscriptionArn
  * TopicArn **required**

#### Output
* output [SubscribeResponse](#subscriberesponse)

### TagResource



```js
amazonaws_sns.TagResource({
  "ResourceArn": "",
  "Tags": []
}, context)
```

#### Input
* input `object`
  * ResourceArn **required** `string`
  * Tags **required** `array`

#### Output
* output [TagResourceResponse](#tagresourceresponse)

### TagResource



```js
amazonaws_sns.TagResource({
  "ResourceArn": null,
  "Tags": null
}, context)
```

#### Input
* input `object`
  * ResourceArn **required**
  * Tags **required**
    * items [Tag](#tag)

#### Output
* output [TagResourceResponse](#tagresourceresponse)

### Unsubscribe



```js
amazonaws_sns.Unsubscribe({
  "SubscriptionArn": ""
}, context)
```

#### Input
* input `object`
  * SubscriptionArn **required** `string`

#### Output
*Output schema unknown*

### Unsubscribe



```js
amazonaws_sns.Unsubscribe({
  "SubscriptionArn": null
}, context)
```

#### Input
* input `object`
  * SubscriptionArn **required**

#### Output
*Output schema unknown*

### UntagResource



```js
amazonaws_sns.UntagResource({
  "ResourceArn": "",
  "TagKeys": []
}, context)
```

#### Input
* input `object`
  * ResourceArn **required** `string`
  * TagKeys **required** `array`

#### Output
* output [UntagResourceResponse](#untagresourceresponse)

### UntagResource



```js
amazonaws_sns.UntagResource({
  "ResourceArn": null,
  "TagKeys": null
}, context)
```

#### Input
* input `object`
  * ResourceArn **required**
  * TagKeys **required**
    * items [TagKey](#tagkey)

#### Output
* output [UntagResourceResponse](#untagresourceresponse)



## Definitions

### ActionsList
* ActionsList `array`
  * items [action](#action)

### AddPermissionInput
* AddPermissionInput `object`
  * AWSAccountId **required**
    * items [delegate](#delegate)
  * ActionName **required**
    * items [action](#action)
  * Label **required**
  * TopicArn **required**

### AmazonResourceName
* AmazonResourceName `string`

### AuthorizationErrorException


### Binary
* Binary `string`

### CheckIfPhoneNumberIsOptedOutInput
* CheckIfPhoneNumberIsOptedOutInput `object`: The input for the <code>CheckIfPhoneNumberIsOptedOut</code> action.
  * phoneNumber **required**

### CheckIfPhoneNumberIsOptedOutResponse
* CheckIfPhoneNumberIsOptedOutResponse `object`: The response from the <code>CheckIfPhoneNumberIsOptedOut</code> action.
  * isOptedOut

### ConcurrentAccessException


### ConfirmSubscriptionInput
* ConfirmSubscriptionInput `object`: Input for ConfirmSubscription action.
  * AuthenticateOnUnsubscribe
  * Token **required**
  * TopicArn **required**

### ConfirmSubscriptionResponse
* ConfirmSubscriptionResponse `object`: Response for ConfirmSubscriptions action.
  * SubscriptionArn

### CreateEndpointResponse
* CreateEndpointResponse `object`: Response from CreateEndpoint action.
  * EndpointArn

### CreatePlatformApplicationInput
* CreatePlatformApplicationInput `object`: Input for CreatePlatformApplication action.
  * Attributes **required**
  * Name **required**
  * Platform **required**

### CreatePlatformApplicationResponse
* CreatePlatformApplicationResponse `object`: Response from CreatePlatformApplication action.
  * PlatformApplicationArn

### CreatePlatformEndpointInput
* CreatePlatformEndpointInput `object`: Input for CreatePlatformEndpoint action.
  * Attributes
  * CustomUserData
  * PlatformApplicationArn **required**
  * Token **required**

### CreateTopicInput
* CreateTopicInput `object`: Input for CreateTopic action.
  * Attributes
  * Name **required**
  * Tags
    * items [Tag](#tag)

### CreateTopicResponse
* CreateTopicResponse `object`: Response from CreateTopic action.
  * TopicArn

### DelegatesList
* DelegatesList `array`
  * items [delegate](#delegate)

### DeleteEndpointInput
* DeleteEndpointInput `object`: Input for DeleteEndpoint action.
  * EndpointArn **required**

### DeletePlatformApplicationInput
* DeletePlatformApplicationInput `object`: Input for DeletePlatformApplication action.
  * PlatformApplicationArn **required**

### DeleteTopicInput
* DeleteTopicInput `object`
  * TopicArn **required**

### Endpoint
* Endpoint `object`: Endpoint for mobile app and device.
  * Attributes
  * EndpointArn

### EndpointDisabledException


### FilterPolicyLimitExceededException


### GetEndpointAttributesInput
* GetEndpointAttributesInput `object`: Input for GetEndpointAttributes action.
  * EndpointArn **required**

### GetEndpointAttributesResponse
* GetEndpointAttributesResponse `object`: Response from GetEndpointAttributes of the EndpointArn.
  * Attributes

### GetPlatformApplicationAttributesInput
* GetPlatformApplicationAttributesInput `object`: Input for GetPlatformApplicationAttributes action.
  * PlatformApplicationArn **required**

### GetPlatformApplicationAttributesResponse
* GetPlatformApplicationAttributesResponse `object`: Response for GetPlatformApplicationAttributes action.
  * Attributes

### GetSMSAttributesInput
* GetSMSAttributesInput `object`: The input for the <code>GetSMSAttributes</code> request.
  * attributes
    * items [String](#string)

### GetSMSAttributesResponse
* GetSMSAttributesResponse `object`: The response from the <code>GetSMSAttributes</code> request.
  * attributes

### GetSubscriptionAttributesInput
* GetSubscriptionAttributesInput `object`: Input for GetSubscriptionAttributes.
  * SubscriptionArn **required**

### GetSubscriptionAttributesResponse
* GetSubscriptionAttributesResponse `object`: Response for GetSubscriptionAttributes action.
  * Attributes

### GetTopicAttributesInput
* GetTopicAttributesInput `object`: Input for GetTopicAttributes action.
  * TopicArn **required**

### GetTopicAttributesResponse
* GetTopicAttributesResponse `object`: Response for GetTopicAttributes action.
  * Attributes

### InternalErrorException


### InvalidParameterException


### InvalidParameterValueException


### InvalidSecurityException


### KMSAccessDeniedException


### KMSDisabledException


### KMSInvalidStateException


### KMSNotFoundException


### KMSOptInRequired


### KMSThrottlingException


### ListEndpointsByPlatformApplicationInput
* ListEndpointsByPlatformApplicationInput `object`: Input for ListEndpointsByPlatformApplication action.
  * NextToken
  * PlatformApplicationArn **required**

### ListEndpointsByPlatformApplicationResponse
* ListEndpointsByPlatformApplicationResponse `object`: Response for ListEndpointsByPlatformApplication action.
  * Endpoints
    * items [Endpoint](#endpoint)
  * NextToken

### ListOfEndpoints
* ListOfEndpoints `array`
  * items [Endpoint](#endpoint)

### ListOfPlatformApplications
* ListOfPlatformApplications `array`
  * items [PlatformApplication](#platformapplication)

### ListPhoneNumbersOptedOutInput
* ListPhoneNumbersOptedOutInput `object`: The input for the <code>ListPhoneNumbersOptedOut</code> action.
  * nextToken

### ListPhoneNumbersOptedOutResponse
* ListPhoneNumbersOptedOutResponse `object`: The response from the <code>ListPhoneNumbersOptedOut</code> action.
  * nextToken
  * phoneNumbers
    * items [PhoneNumber](#phonenumber)

### ListPlatformApplicationsInput
* ListPlatformApplicationsInput `object`: Input for ListPlatformApplications action.
  * NextToken

### ListPlatformApplicationsResponse
* ListPlatformApplicationsResponse `object`: Response for ListPlatformApplications action.
  * NextToken
  * PlatformApplications
    * items [PlatformApplication](#platformapplication)

### ListString
* ListString `array`
  * items [String](#string)

### ListSubscriptionsByTopicInput
* ListSubscriptionsByTopicInput `object`: Input for ListSubscriptionsByTopic action.
  * NextToken
  * TopicArn **required**

### ListSubscriptionsByTopicResponse
* ListSubscriptionsByTopicResponse `object`: Response for ListSubscriptionsByTopic action.
  * NextToken
  * Subscriptions
    * items [Subscription](#subscription)

### ListSubscriptionsInput
* ListSubscriptionsInput `object`: Input for ListSubscriptions action.
  * NextToken

### ListSubscriptionsResponse
* ListSubscriptionsResponse `object`: Response for ListSubscriptions action
  * NextToken
  * Subscriptions
    * items [Subscription](#subscription)

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`
  * ResourceArn **required**

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`
  * Tags
    * items [Tag](#tag)

### ListTopicsInput
* ListTopicsInput `object`
  * NextToken

### ListTopicsResponse
* ListTopicsResponse `object`: Response for ListTopics action.
  * NextToken
  * Topics
    * items [Topic](#topic)

### MapStringToString
* MapStringToString `object`

### MessageAttributeMap
* MessageAttributeMap `object`

### MessageAttributeValue
* MessageAttributeValue `object`: <p>The user-specified message attribute value. For string data types, the value attribute has the same restrictions on the content as the message body. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/api/API_Publish.html">Publish</a>.</p> <p>Name, type, and value must not be empty or null. In addition, the message body should not be empty or null. All parts of the message attribute, including name, type, and value, are included in the message size restriction, which is currently 256 KB (262,144 bytes). For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMessageAttributes.html">Amazon SNS message attributes</a> and <a href="https://docs.aws.amazon.com/sns/latest/dg/sms_publish-to-phone.html">Publishing to a mobile phone</a> in the <i>Amazon SNS Developer Guide.</i> </p>
  * BinaryValue
  * DataType **required**
  * StringValue

### NotFoundException


### OptInPhoneNumberInput
* OptInPhoneNumberInput `object`: Input for the OptInPhoneNumber action.
  * phoneNumber **required**

### OptInPhoneNumberResponse
* OptInPhoneNumberResponse `object`: The response for the OptInPhoneNumber action.

### PhoneNumber
* PhoneNumber `string`

### PhoneNumberList
* PhoneNumberList `array`
  * items [PhoneNumber](#phonenumber)

### PlatformApplication
* PlatformApplication `object`: Platform application object.
  * Attributes
  * PlatformApplicationArn

### PlatformApplicationDisabledException


### PublishInput
* PublishInput `object`: Input for Publish action.
  * Message **required**
  * MessageAttributes
  * MessageDeduplicationId
  * MessageGroupId
  * MessageStructure
  * PhoneNumber
  * Subject
  * TargetArn
  * TopicArn

### PublishResponse
* PublishResponse `object`: Response for Publish action.
  * MessageId
  * SequenceNumber

### RemovePermissionInput
* RemovePermissionInput `object`: Input for RemovePermission action.
  * Label **required**
  * TopicArn **required**

### ResourceNotFoundException


### SetEndpointAttributesInput
* SetEndpointAttributesInput `object`: Input for SetEndpointAttributes action.
  * Attributes **required**
  * EndpointArn **required**

### SetPlatformApplicationAttributesInput
* SetPlatformApplicationAttributesInput `object`: Input for SetPlatformApplicationAttributes action.
  * Attributes **required**
  * PlatformApplicationArn **required**

### SetSMSAttributesInput
* SetSMSAttributesInput `object`: The input for the SetSMSAttributes action.
  * attributes **required**

### SetSMSAttributesResponse
* SetSMSAttributesResponse `object`: The response for the SetSMSAttributes action.

### SetSubscriptionAttributesInput
* SetSubscriptionAttributesInput `object`: Input for SetSubscriptionAttributes action.
  * AttributeName **required**
  * AttributeValue
  * SubscriptionArn **required**

### SetTopicAttributesInput
* SetTopicAttributesInput `object`: Input for SetTopicAttributes action.
  * AttributeName **required**
  * AttributeValue
  * TopicArn **required**

### StaleTagException


### String
* String `string`

### SubscribeInput
* SubscribeInput `object`: Input for Subscribe action.
  * Attributes
  * Endpoint
  * Protocol **required**
  * ReturnSubscriptionArn
  * TopicArn **required**

### SubscribeResponse
* SubscribeResponse `object`: Response for Subscribe action.
  * SubscriptionArn

### Subscription
* Subscription `object`: A wrapper type for the attributes of an Amazon SNS subscription.
  * Endpoint
  * Owner
  * Protocol
  * SubscriptionArn
  * TopicArn

### SubscriptionAttributesMap
* SubscriptionAttributesMap `object`

### SubscriptionLimitExceededException


### SubscriptionsList
* SubscriptionsList `array`
  * items [Subscription](#subscription)

### Tag
* Tag `object`: The list of tags to be added to the specified topic.
  * Key **required**
  * Value **required**

### TagKey
* TagKey `string`

### TagKeyList
* TagKeyList `array`
  * items [TagKey](#tagkey)

### TagLimitExceededException


### TagList
* TagList `array`
  * items [Tag](#tag)

### TagPolicyException


### TagResourceRequest
* TagResourceRequest `object`
  * ResourceArn **required**
  * Tags **required**
    * items [Tag](#tag)

### TagResourceResponse
* TagResourceResponse `object`

### TagValue
* TagValue `string`

### ThrottledException


### Topic
* Topic `object`: A wrapper type for the topic's Amazon Resource Name (ARN). To retrieve a topic's attributes, use <code>GetTopicAttributes</code>.
  * TopicArn

### TopicAttributesMap
* TopicAttributesMap `object`

### TopicLimitExceededException


### TopicsList
* TopicsList `array`
  * items [Topic](#topic)

### UnsubscribeInput
* UnsubscribeInput `object`: Input for Unsubscribe action.
  * SubscriptionArn **required**

### UntagResourceRequest
* UntagResourceRequest `object`
  * ResourceArn **required**
  * TagKeys **required**
    * items [TagKey](#tagkey)

### UntagResourceResponse
* UntagResourceResponse `object`

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


