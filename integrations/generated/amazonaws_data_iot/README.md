# @datafire/amazonaws_data_iot

Client library for AWS IoT Data Plane

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_data_iot
```

```js
let datafire = require('datafire');
let amazonaws_data_iot = require('@datafire/amazonaws_data_iot').create();

amazonaws_data_iot.UpdateThingShadow({}).then(data => {
  console.log(data);
})
```

## Description
<fullname>AWS IoT</fullname> <p>AWS IoT-Data enables secure, bi-directional communication between Internet-connected things (such as sensors, actuators, embedded devices, or smart appliances) and the AWS cloud. It implements a broker for applications and things to publish messages over HTTP (Publish) and retrieve, update, and delete thing shadows. A thing shadow is a persistent representation of your things and their state in the AWS cloud.</p>

## Actions
### UpdateThingShadow



```js
amazonaws_data_iot.UpdateThingShadow({
  "thingName": "",
  "payload": ""
}, context)
```

#### Parameters
* thingName (string) **required**
* payload (string) **required**

### Publish



```js
amazonaws_data_iot.Publish({
  "topic": ""
}, context)
```

#### Parameters
* topic (string) **required**
* payload (string)

