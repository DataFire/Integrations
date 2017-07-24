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


### CheckIfPhoneNumberIsOptedOut



```js
amazonaws_sns.CheckIfPhoneNumberIsOptedOut({}, context)
```


### ConfirmSubscription



```js
amazonaws_sns.ConfirmSubscription({}, context)
```


### CreatePlatformApplication



```js
amazonaws_sns.CreatePlatformApplication({}, context)
```


### CreatePlatformEndpoint



```js
amazonaws_sns.CreatePlatformEndpoint({}, context)
```


### CreateTopic



```js
amazonaws_sns.CreateTopic({}, context)
```


### DeleteEndpoint



```js
amazonaws_sns.DeleteEndpoint({}, context)
```


### DeletePlatformApplication



```js
amazonaws_sns.DeletePlatformApplication({}, context)
```


### DeleteTopic



```js
amazonaws_sns.DeleteTopic({}, context)
```


### GetEndpointAttributes



```js
amazonaws_sns.GetEndpointAttributes({}, context)
```


### GetPlatformApplicationAttributes



```js
amazonaws_sns.GetPlatformApplicationAttributes({}, context)
```


### GetSMSAttributes



```js
amazonaws_sns.GetSMSAttributes({}, context)
```


### GetSubscriptionAttributes



```js
amazonaws_sns.GetSubscriptionAttributes({}, context)
```


### GetTopicAttributes



```js
amazonaws_sns.GetTopicAttributes({}, context)
```


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


### Publish



```js
amazonaws_sns.Publish({}, context)
```


### RemovePermission



```js
amazonaws_sns.RemovePermission({}, context)
```


### SetEndpointAttributes



```js
amazonaws_sns.SetEndpointAttributes({}, context)
```


### SetPlatformApplicationAttributes



```js
amazonaws_sns.SetPlatformApplicationAttributes({}, context)
```


### SetSMSAttributes



```js
amazonaws_sns.SetSMSAttributes({}, context)
```


### SetSubscriptionAttributes



```js
amazonaws_sns.SetSubscriptionAttributes({}, context)
```


### SetTopicAttributes



```js
amazonaws_sns.SetTopicAttributes({}, context)
```


### Subscribe



```js
amazonaws_sns.Subscribe({}, context)
```


### Unsubscribe



```js
amazonaws_sns.Unsubscribe({}, context)
```


