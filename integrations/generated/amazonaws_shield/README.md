# @datafire/amazonaws_shield

Client library for AWS Shield

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_shield
```

```js
let datafire = require('datafire');
let amazonaws_shield = require('@datafire/amazonaws_shield').create();

amazonaws_shield.CreateProtection({}).then(data => {
  console.log(data);
})
```

## Description
<fullname>AWS Shield Advanced</fullname> <p>This is the <i>AWS Shield Advanced API Reference</i>. This guide is for developers who need detailed information about the AWS Shield Advanced API actions, data types, and errors. For detailed information about AWS WAF and AWS Shield Advanced features and an overview of how to use the AWS WAF and AWS Shield Advanced APIs, see the <a href="http://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF and AWS Shield Developer Guide</a>.</p>

## Actions
### CreateProtection



```js
amazonaws_shield.CreateProtection({}, context)
```


### CreateSubscription



```js
amazonaws_shield.CreateSubscription({}, context)
```


### DeleteProtection



```js
amazonaws_shield.DeleteProtection({}, context)
```


### DeleteSubscription



```js
amazonaws_shield.DeleteSubscription({}, context)
```


### DescribeAttack



```js
amazonaws_shield.DescribeAttack({}, context)
```


### DescribeProtection



```js
amazonaws_shield.DescribeProtection({}, context)
```


### DescribeSubscription



```js
amazonaws_shield.DescribeSubscription({}, context)
```


### ListAttacks



```js
amazonaws_shield.ListAttacks({}, context)
```


### ListProtections



```js
amazonaws_shield.ListProtections({}, context)
```


