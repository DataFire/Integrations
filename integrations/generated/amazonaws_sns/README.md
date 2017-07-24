# @datafire/amazonaws_sns

Client library for Amazon Simple Notification Service

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_sns
```

```js
let datafire = require('datafire');
let amazonaws_sns = require('@datafire/amazonaws_sns').actions;
let context = new datafire.Context();

amazonaws_sns.AddPermission({}, context).then(data => {
  console.log(data);
})
```

## Description
<fullname>Amazon Simple Notification Service</fullname> <p>Amazon Simple Notification Service (Amazon SNS) is a web service that enables you to build distributed web-enabled applications. Applications can use Amazon SNS to easily push real-time notification messages to interested subscribers over multiple delivery protocols. For more information about this product see <a href="http://aws.amazon.com/sns/">http://aws.amazon.com/sns</a>. For detailed information about Amazon SNS features and their associated API calls, see the <a href="http://docs.aws.amazon.com/sns/latest/dg/">Amazon SNS Developer Guide</a>. </p> <p>We also provide SDKs that enable you to access Amazon SNS from your preferred programming language. The SDKs contain functionality that automatically takes care of tasks such as: cryptographically signing your service requests, retrying requests, and handling error responses. For a list of available SDKs, go to <a href="http://aws.amazon.com/tools/">Tools for Amazon Web Services</a>. </p>

## Actions
### AddPermission



```js
amazonaws_sns.AddPermission({}, context)
```

#### Parameters

### CheckIfPhoneNumberIsOptedOut



```js
amazonaws_sns.CheckIfPhoneNumberIsOptedOut({}, context)
```

#### Parameters

### ConfirmSubscription



```js
amazonaws_sns.ConfirmSubscription({}, context)
```

#### Parameters

### CreatePlatformApplication



```js
amazonaws_sns.CreatePlatformApplication({}, context)
```

#### Parameters

### CreatePlatformEndpoint



```js
amazonaws_sns.CreatePlatformEndpoint({}, context)
```

#### Parameters

### CreateTopic



```js
amazonaws_sns.CreateTopic({}, context)
```

#### Parameters

### DeleteEndpoint



```js
amazonaws_sns.DeleteEndpoint({}, context)
```

#### Parameters

### DeletePlatformApplication



```js
amazonaws_sns.DeletePlatformApplication({}, context)
```

#### Parameters

### DeleteTopic



```js
amazonaws_sns.DeleteTopic({}, context)
```

#### Parameters

### GetEndpointAttributes



```js
amazonaws_sns.GetEndpointAttributes({}, context)
```

#### Parameters

### GetPlatformApplicationAttributes



```js
amazonaws_sns.GetPlatformApplicationAttributes({}, context)
```

#### Parameters

### GetSMSAttributes



```js
amazonaws_sns.GetSMSAttributes({}, context)
```

#### Parameters

### GetSubscriptionAttributes



```js
amazonaws_sns.GetSubscriptionAttributes({}, context)
```

#### Parameters

### GetTopicAttributes



```js
amazonaws_sns.GetTopicAttributes({}, context)
```

#### Parameters

### ListEndpointsByPlatformApplication



```js
amazonaws_sns.ListEndpointsByPlatformApplication({}, context)
```

#### Parameters
* NextToken (string)

### ListPhoneNumbersOptedOut



```js
amazonaws_sns.ListPhoneNumbersOptedOut({}, context)
```

#### Parameters

### ListPlatformApplications



```js
amazonaws_sns.ListPlatformApplications({}, context)
```

#### Parameters
* NextToken (string)

### ListSubscriptions



```js
amazonaws_sns.ListSubscriptions({}, context)
```

#### Parameters
* NextToken (string)

### ListSubscriptionsByTopic



```js
amazonaws_sns.ListSubscriptionsByTopic({}, context)
```

#### Parameters
* NextToken (string)

### ListTopics



```js
amazonaws_sns.ListTopics({}, context)
```

#### Parameters
* NextToken (string)

### OptInPhoneNumber



```js
amazonaws_sns.OptInPhoneNumber({}, context)
```

#### Parameters

### Publish



```js
amazonaws_sns.Publish({}, context)
```

#### Parameters

### RemovePermission



```js
amazonaws_sns.RemovePermission({}, context)
```

#### Parameters

### SetEndpointAttributes



```js
amazonaws_sns.SetEndpointAttributes({}, context)
```

#### Parameters

### SetPlatformApplicationAttributes



```js
amazonaws_sns.SetPlatformApplicationAttributes({}, context)
```

#### Parameters

### SetSMSAttributes



```js
amazonaws_sns.SetSMSAttributes({}, context)
```

#### Parameters

### SetSubscriptionAttributes



```js
amazonaws_sns.SetSubscriptionAttributes({}, context)
```

#### Parameters

### SetTopicAttributes



```js
amazonaws_sns.SetTopicAttributes({}, context)
```

#### Parameters

### Subscribe



```js
amazonaws_sns.Subscribe({}, context)
```

#### Parameters

### Unsubscribe



```js
amazonaws_sns.Unsubscribe({}, context)
```

#### Parameters

