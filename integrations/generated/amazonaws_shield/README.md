# @datafire/amazonaws_shield

Client library for AWS Shield

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_shield
```

```js
let datafire = require('datafire');
let amazonaws_shield = require('@datafire/amazonaws_shield').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: "",
});

amazonaws_shield.CreateProtection({}).then(data => {
  console.log(data);
})
```

## Description
<fullname>AWS Shield Advanced</fullname> <p>This is the <i>AWS Shield Advanced API Reference</i>. This guide is for developers who need detailed information about the AWS Shield Advanced API actions, data types, and errors. For detailed information about AWS WAF and AWS Shield Advanced features and an overview of how to use the AWS WAF and AWS Shield Advanced APIs, see the <a href="http://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF and AWS Shield Developer Guide</a>.</p>

## Actions
### CreateProtection



```js
amazonaws_shield.CreateProtection({
  "Name": "",
  "ResourceArn": ""
}, context)
```

#### Parameters
* Name (string) **required**
* ResourceArn (string) **required**

### CreateSubscription



```js
amazonaws_shield.CreateSubscription({}, context)
```

#### Parameters
*This action has no parameters*

### DeleteProtection



```js
amazonaws_shield.DeleteProtection({
  "ProtectionId": ""
}, context)
```

#### Parameters
* ProtectionId (string) **required**

### DeleteSubscription



```js
amazonaws_shield.DeleteSubscription({}, context)
```

#### Parameters
*This action has no parameters*

### DescribeAttack



```js
amazonaws_shield.DescribeAttack({
  "AttackId": ""
}, context)
```

#### Parameters
* AttackId (string) **required**

### DescribeProtection



```js
amazonaws_shield.DescribeProtection({
  "ProtectionId": ""
}, context)
```

#### Parameters
* ProtectionId (string) **required**

### DescribeSubscription



```js
amazonaws_shield.DescribeSubscription({}, context)
```

#### Parameters
*This action has no parameters*

### ListAttacks



```js
amazonaws_shield.ListAttacks({}, context)
```

#### Parameters
* EndTime (object) - The time range.
* MaxResults (integer)
* NextToken (string)
* ResourceArns (array)
* StartTime (object) - The time range.

### ListProtections



```js
amazonaws_shield.ListProtections({}, context)
```

#### Parameters
* MaxResults (integer)
* NextToken (string)

