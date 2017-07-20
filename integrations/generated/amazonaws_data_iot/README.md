# @datafire/amazonaws_data_iot

Client library for AWS IoT Data Plane

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_data_iot
```

```js
let datafire = require('datafire');
let amazonaws_data_iot = require('@datafire/amazonaws_data_iot').actions;

let account = {
  hmac: "",
}
let context = new datafire.Context({
  accounts: {
    amazonaws_data_iot: account,
  }
})


amazonaws_data_iot.UpdateThingShadow({}, context).then(data => {
  console.log(data);
})
```

## Description
<fullname>AWS IoT</fullname> <p>AWS IoT-Data enables secure, bi-directional communication between Internet-connected things (such as sensors, actuators, embedded devices, or smart appliances) and the AWS cloud. It implements a broker for applications and things to publish messages over HTTP (Publish) and retrieve, update, and delete thing shadows. A thing shadow is a persistent representation of your things and their state in the AWS cloud.</p>

## Actions
### UpdateThingShadow
<p>Updates the thing shadow for the specified thing.</p> <p>For more information, see <a href="http://docs.aws.amazon.com/iot/latest/developerguide/API_UpdateThingShadow.html">UpdateThingShadow</a> in the <i>AWS IoT Developer Guide</i>.</p>


```js
amazonaws_data_iot.UpdateThingShadow({
  "body": {
    "payload": ""
  },
  "thingName": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - The input for the UpdateThingShadow operation.
* thingName (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### Publish
<p>Publishes state information.</p> <p>For more information, see <a href="http://docs.aws.amazon.com/iot/latest/developerguide/protocols.html#http">HTTP Protocol</a> in the <i>AWS IoT Developer Guide</i>.</p>


```js
amazonaws_data_iot.Publish({
  "body": {},
  "topic": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - The input for the Publish operation.
* topic (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

