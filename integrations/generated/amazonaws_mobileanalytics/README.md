# @datafire/amazonaws_mobileanalytics

Client library for Amazon Mobile Analytics

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_mobileanalytics
```

```js
let datafire = require('datafire');
let amazonaws_mobileanalytics = require('@datafire/amazonaws_mobileanalytics').actions;

let account = {
  hmac: "",
}
let context = new datafire.Context({
  accounts: {
    amazonaws_mobileanalytics: account,
  }
})


amazonaws_mobileanalytics.PutEvents({}, context).then(data => {
  console.log(data);
})
```

## Description
Amazon Mobile Analytics is a service for collecting, visualizing, and understanding app usage data at scale.

## Actions
### PutEvents
The PutEvents operation records one or more events. You can have up to 1,500 unique custom events per app, any combination of up to 40 attributes and metrics per custom event, and any number of attribute or metric values.


```js
amazonaws_mobileanalytics.PutEvents({
  "body": {
    "events": []
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - A container for the data needed for a PutEvent operation
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

