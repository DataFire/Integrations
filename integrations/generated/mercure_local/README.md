# @datafire/mercure_local

Client library for The Mercure protocol

## Installation and Usage
```bash
npm install --save @datafire/mercure_local
```
```js
let mercure_local = require('@datafire/mercure_local').create({
  Bearer: "",
  Cookie: ""
});

.then(data => {
  console.log(data);
});
```

## Description

[Mercure](https://mercure.rocks) is a protocol allowing to push data updates to web browsers and other HTTP clients in a convenient, fast, reliable and battery-efficient way.

## Actions

### .well_known.mercure.get
Subscribe to updates


```js
mercure_local..well_known.mercure.get({
  "topic": []
}, context)
```

#### Input
* input `object`
  * topic **required** `array`: The topic to get updates from, can be a URI template (RFC6570).
  * Last-Event-ID_query `string`: The last received event id, to retrieve missed events.
  * Last-Event-ID `string`: The last received event id, to retrieve missed events, takes precedence over the query parameter.

#### Output
*Output schema unknown*

### .well_known.mercure.post
Publish an update


```js
mercure_local..well_known.mercure.post({}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### .well_known.mercure.subscriptions.get
Active subscriptions


```js
mercure_local..well_known.mercure.subscriptions.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Subscriptions](#subscriptions)

### .well_known.mercure.subscriptions.topic.get
Active subscriptions for the given topic


```js
mercure_local..well_known.mercure.subscriptions.topic.get({
  "topic": ""
}, context)
```

#### Input
* input `object`
  * topic **required** `string`

#### Output
* output [Subscriptions](#subscriptions)

### .well_known.mercure.subscriptions.topic.subscriber.get
Active subscription for the given topic and subscriber


```js
mercure_local..well_known.mercure.subscriptions.topic.subscriber.get({
  "topic": "",
  "subscriber": ""
}, context)
```

#### Input
* input `object`
  * topic **required** `string`
  * subscriber **required** `string`

#### Output
* output [Subscriptions](#subscriptions)



## Definitions

### Subscription
* Subscription `object`
  * @context `string`
  * active **required** `boolean`
  * id **required** `string`
  * lastEventID `string`
  * payload `object`
  * subscriber **required** `string`
  * topic **required** `string`
  * type **required** `string`

### Subscriptions
* Subscriptions `object`
  * @context **required** `string`
  * id **required** `string`
  * lastEventID **required** `string`
  * subscriptions **required** `array`
    * items [Subscription](#subscription)
  * type **required** `string`


