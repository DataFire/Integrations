# @datafire/amazonaws_sns

Client library for Amazon Simple Notification Service

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_sns
```

```js
let datafire = require('datafire');
let amazonaws_sns = require('@datafire/amazonaws_sns').create();

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

#### Parameters
* AWSAccountId (array) **required**
* ActionName (array) **required**
* Label (string) **required**
* TopicArn (string) **required**

### CheckIfPhoneNumberIsOptedOut



```js
amazonaws_sns.CheckIfPhoneNumberIsOptedOut({
  "phoneNumber": ""
}, context)
```

#### Parameters
* phoneNumber (string) **required**

### ConfirmSubscription



```js
amazonaws_sns.ConfirmSubscription({
  "TopicArn": "",
  "Token": ""
}, context)
```

#### Parameters
* AuthenticateOnUnsubscribe (string)
* Token (string) **required**
* TopicArn (string) **required**

### CreatePlatformApplication



```js
amazonaws_sns.CreatePlatformApplication({
  "Name": "",
  "Platform": "",
  "Attributes": []
}, context)
```

#### Parameters
* Attributes (array) **required**
* Name (string) **required**
* Platform (string) **required**

### CreatePlatformEndpoint



```js
amazonaws_sns.CreatePlatformEndpoint({
  "PlatformApplicationArn": "",
  "Token": ""
}, context)
```

#### Parameters
* Attributes (array)
* CustomUserData (string)
* PlatformApplicationArn (string) **required**
* Token (string) **required**

### CreateTopic



```js
amazonaws_sns.CreateTopic({
  "Name": ""
}, context)
```

#### Parameters
* Name (string) **required**

### DeleteEndpoint



```js
amazonaws_sns.DeleteEndpoint({
  "EndpointArn": ""
}, context)
```

#### Parameters
* EndpointArn (string) **required**

### DeletePlatformApplication



```js
amazonaws_sns.DeletePlatformApplication({
  "PlatformApplicationArn": ""
}, context)
```

#### Parameters
* PlatformApplicationArn (string) **required**

### DeleteTopic



```js
amazonaws_sns.DeleteTopic({
  "TopicArn": ""
}, context)
```

#### Parameters
* TopicArn (string) **required**

### GetEndpointAttributes



```js
amazonaws_sns.GetEndpointAttributes({
  "EndpointArn": ""
}, context)
```

#### Parameters
* EndpointArn (string) **required**

### GetPlatformApplicationAttributes



```js
amazonaws_sns.GetPlatformApplicationAttributes({
  "PlatformApplicationArn": ""
}, context)
```

#### Parameters
* PlatformApplicationArn (string) **required**

### GetSMSAttributes



```js
amazonaws_sns.GetSMSAttributes({}, context)
```

#### Parameters
* attributes (array)

### GetSubscriptionAttributes



```js
amazonaws_sns.GetSubscriptionAttributes({
  "SubscriptionArn": ""
}, context)
```

#### Parameters
* SubscriptionArn (string) **required**

### GetTopicAttributes



```js
amazonaws_sns.GetTopicAttributes({
  "TopicArn": ""
}, context)
```

#### Parameters
* TopicArn (string) **required**

### ListEndpointsByPlatformApplication



```js
amazonaws_sns.ListEndpointsByPlatformApplication({
  "PlatformApplicationArn": ""
}, context)
```

#### Parameters
* NextToken (string)
* NextToken (string)
* PlatformApplicationArn (string) **required**

### ListPhoneNumbersOptedOut



```js
amazonaws_sns.ListPhoneNumbersOptedOut({}, context)
```

#### Parameters
* nextToken (string)

### ListPlatformApplications



```js
amazonaws_sns.ListPlatformApplications({}, context)
```

#### Parameters
* NextToken (string)
* NextToken (string)

### ListSubscriptions



```js
amazonaws_sns.ListSubscriptions({}, context)
```

#### Parameters
* NextToken (string)
* NextToken (string)

### ListSubscriptionsByTopic



```js
amazonaws_sns.ListSubscriptionsByTopic({
  "TopicArn": ""
}, context)
```

#### Parameters
* NextToken (string)
* NextToken (string)
* TopicArn (string) **required**

### ListTopics



```js
amazonaws_sns.ListTopics({}, context)
```

#### Parameters
* NextToken (string)
* NextToken (string)

### OptInPhoneNumber



```js
amazonaws_sns.OptInPhoneNumber({
  "phoneNumber": ""
}, context)
```

#### Parameters
* phoneNumber (string) **required**

### Publish



```js
amazonaws_sns.Publish({
  "Message": ""
}, context)
```

#### Parameters
* Message (string) **required**
* MessageAttributes (array)
* MessageStructure (string)
* PhoneNumber (string)
* Subject (string)
* TargetArn (string)
* TopicArn (string)

### RemovePermission



```js
amazonaws_sns.RemovePermission({
  "TopicArn": "",
  "Label": ""
}, context)
```

#### Parameters
* Label (string) **required**
* TopicArn (string) **required**

### SetEndpointAttributes



```js
amazonaws_sns.SetEndpointAttributes({
  "EndpointArn": "",
  "Attributes": []
}, context)
```

#### Parameters
* Attributes (array) **required**
* EndpointArn (string) **required**

### SetPlatformApplicationAttributes



```js
amazonaws_sns.SetPlatformApplicationAttributes({
  "PlatformApplicationArn": "",
  "Attributes": []
}, context)
```

#### Parameters
* Attributes (array) **required**
* PlatformApplicationArn (string) **required**

### SetSMSAttributes



```js
amazonaws_sns.SetSMSAttributes({
  "attributes": []
}, context)
```

#### Parameters
* attributes (array) **required**

### SetSubscriptionAttributes



```js
amazonaws_sns.SetSubscriptionAttributes({
  "SubscriptionArn": "",
  "AttributeName": ""
}, context)
```

#### Parameters
* AttributeName (string) **required**
* AttributeValue (string)
* SubscriptionArn (string) **required**

### SetTopicAttributes



```js
amazonaws_sns.SetTopicAttributes({
  "TopicArn": "",
  "AttributeName": ""
}, context)
```

#### Parameters
* AttributeName (string) **required**
* AttributeValue (string)
* TopicArn (string) **required**

### Subscribe



```js
amazonaws_sns.Subscribe({
  "TopicArn": "",
  "Protocol": ""
}, context)
```

#### Parameters
* Endpoint (string)
* Protocol (string) **required**
* TopicArn (string) **required**

### Unsubscribe



```js
amazonaws_sns.Unsubscribe({
  "SubscriptionArn": ""
}, context)
```

#### Parameters
* SubscriptionArn (string) **required**

