# @datafire/dweet

Client library for dweet.io

## Installation and Usage
```bash
npm install --save datafire @datafire/dweet
```

```js
let datafire = require('datafire');
let dweet = require('@datafire/dweet').actions;
let context = new datafire.Context();

dweet.createAlertGET({}, context).then(data => {
  console.log(data);
})
```

## Description
Dweet.io allows users to share data from mobile, tablets, and pcs, and them to other devices and accounts across social media platforms. Dweet.io provides an API to access the different functionality of the Dweet.io service. Users can make REST calls to read and create dweets, lock and unlock things, and perform other calls. The API returns JSON and JSONP.

## Actions
### createAlertGET
Create an alert for a thing. A thing must be locked before an alert can be set.


```js
dweet.createAlertGET({
  "who": "",
  "thing": "",
  "condition": "",
  "key": ""
}, context)
```

#### Parameters
* who (string) **required** - A comma separated list of Email addresses to send the alert to.
* thing (string) **required** - A unique name of a thing. It is recommended that you use a GUID as to avoid name collisions.
* condition (string) **required** - A condition that returns a string or a true value if a condition is met.
* key (string) **required** - A valid key for a locked thing. If the thing is not locked, this can be ignored.

### dweet.for.thing.post
Create a dweet for a thing.


```js
dweet.dweet.for.thing.post({
  "thing": "",
  "content": ""
}, context)
```

#### Parameters
* thing (string) **required** - A unique name of a thing. It is recommended that you use a GUID as to avoid name collisions.
* key (string) - A valid key for a locked thing. If the thing is not locked, this can be ignored.
* content (string) **required**

### dweet.quietly.for.thing.post
Create a dweet for a thing.  This method differs from /dweet/for/{thing} only in that successful dweets result in an HTTP 204 response rather than the typical verbose response.


```js
dweet.dweet.quietly.for.thing.post({
  "thing": "",
  "content": ""
}, context)
```

#### Parameters
* thing (string) **required** - A unique name of a thing. It is recommended that you use a GUID as to avoid name collisions.
* key (string) - A valid key for a locked thing. If the thing is not locked, this can be ignored.
* content (string) **required**

### getAlert
Get the alert attached to a thing.


```js
dweet.getAlert({
  "thing": "",
  "key": ""
}, context)
```

#### Parameters
* thing (string) **required** - A unique name of a thing.
* key (string) **required** - A valid key for a locked thing. If the thing is not locked, this can be ignored.

### get.dweets.for.thing.get
Read the last 5 cached dweets for a thing.


```js
dweet.get.dweets.for.thing.get({
  "thing": ""
}, context)
```

#### Parameters
* thing (string) **required** - A unique name of a thing.
* key (string) - A valid key for a locked thing. If the thing is not locked, this can be ignored.

### getLatestDweet
Read the latest dweet for a thing.


```js
dweet.getLatestDweet({
  "thing": ""
}, context)
```

#### Parameters
* thing (string) **required** - A unique name of a thing.
* key (string) - A valid key for a locked thing. If the thing is not locked, this can be ignored.

### getStoredAlerts
Read all the saved alerts for a thing from long term storage.  You can query a maximum of 1 day per request and a granularly of 1 hour.


```js
dweet.getStoredAlerts({
  "thing": "",
  "key": "",
  "date": ""
}, context)
```

#### Parameters
* thing (string) **required** - A unique name of a thing.
* key (string) **required** - A valid key for a locked thing. If the thing is not locked, this can be ignored.
* date (string) **required** - The calendar date (YYYY-MM-DD) from which you'd like to start your query.  The response will be a maximum of one day.
* hour (string) - The hour of the day represented in the date parameter in 24-hour (00-23) format.  If this parameter is included, a maximum of 1 hour will be returned starting at this hour.
* responseType (string) - Current valid parameters for this are 'csv' and 'json'.  If this parameter is left blank, all responses default to hapi-json dweet-speak.

### get.stored.dweets.for.thing.get
Read all the saved dweets for a thing from long term storage.  You can query a maximum of 1 day per request and a granularly of 1 hour.


```js
dweet.get.stored.dweets.for.thing.get({
  "thing": "",
  "key": "",
  "date": ""
}, context)
```

#### Parameters
* thing (string) **required** - A unique name of a thing.
* key (string) **required** - A valid key for a locked thing. If the thing is not locked, this can be ignored.
* date (string) **required** - The calendar date (YYYY-MM-DD) from which you'd like to start your query.  The response will be a maximum of one day.
* hour (string) - The hour of the day represented in the date parameter in 24-hour (00-23) format.  If this parameter is included, a maximum of 1 hour will be returned starting at this hour.
* responseType (string) - Current valid parameters for this are 'csv' and 'json'.  If this parameter is left blank, all responses default to hapi-json dweet-speak.

### listenForDweets
Sorry, this function uses HTTP chunked responses and cannot be tested here. Try something like: <pre>curl --raw https://dweet.io/listen/for/dweets/from/{thing}</pre>


```js
dweet.listenForDweets({
  "thing": ""
}, context)
```

#### Parameters
* thing (string) **required**

### lockThing
Reserve and lock a thing.


```js
dweet.lockThing({
  "thing": "",
  "lock": "",
  "key": ""
}, context)
```

#### Parameters
* thing (string) **required** - A unique name of a thing.
* lock (string) **required** - A valid dweet.io lock.
* key (string) **required** - A valid dweet.io master key.

### removeAlert
Remove an alert for a thing.


```js
dweet.removeAlert({
  "thing": "",
  "key": ""
}, context)
```

#### Parameters
* thing (string) **required** - A unique name of a thing.
* key (string) **required** - A valid key for a locked thing. If the thing is not locked, this can be ignored.

### removeLock
Remove a lock from thing.


```js
dweet.removeLock({
  "lock": "",
  "key": ""
}, context)
```

#### Parameters
* lock (string) **required** - A valid dweet.io lock.
* key (string) **required** - A valid dweet.io master key.

### unlockThing
Unlock a thing.


```js
dweet.unlockThing({
  "thing": "",
  "key": ""
}, context)
```

#### Parameters
* thing (string) **required** - A unique name of a thing.
* key (string) **required** - A valid dweet.io master key.

