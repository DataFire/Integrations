# @datafire/wavecell

Client library for Wavecell.Sms.Api

## Installation and Usage
```bash
npm install --save datafire @datafire/wavecell
```

```js
let datafire = require('datafire');
let wavecell = require('@datafire/wavecell').create({
  username: "",
  password: "",
});

wavecell.SmsV1StatusGet({}).then(data => {
  console.log(data);
})
```

## Description
This API allows Wavecell customers to originate request to send SMS messages anywhere in the World. The messages can be send individually or as a bulk request.

## Actions
### SmsV1StatusGet



```js
wavecell.SmsV1StatusGet(null, context)
```


### SendManyMessages



```js
wavecell.SendManyMessages({
  "subAccountId": ""
}, context)
```

#### Parameters
* subAccountId (string) **required**
* body (object)

### SendManyMessagesInCompactForm



```js
wavecell.SendManyMessagesInCompactForm({
  "subAccountId": ""
}, context)
```

#### Parameters
* subAccountId (string) **required**
* body (object)

### SendSingleMessage



```js
wavecell.SendSingleMessage({
  "subAccountId": ""
}, context)
```

#### Parameters
* subAccountId (string) **required**
* body (object)

