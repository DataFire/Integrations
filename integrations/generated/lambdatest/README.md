# @datafire/lambdatest

Client library for LambdaTest Screenshots API Documentation

## Installation and Usage
```bash
npm install --save @datafire/lambdatest
```
```js
let lambdatest = require('@datafire/lambdatest').create({
  username: "",
  password: ""
});

.then(data => {
  console.log(data);
});
```

## Description



## Actions

### .post
Start Screenshot Test


```js
lambdatest..post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [screenshot-payload](#screenshot-payload)

#### Output
* output [start-screenshot-success](#start-screenshot-success)

### devices
Fetch all os devices combinations available on lambdatest platform.


```js
lambdatest.devices({}, context)
```

#### Input
* input `object`
  * os `string`: Fetch details for a particular OS

#### Output
* output [os-devices](#os-devices)

### os_browsers.get
Fetch all os browsers combinations available on lambdatest platform.


```js
lambdatest.os_browsers.get({}, context)
```

#### Input
* input `object`
  * os `string`: Fetch details for a particular OS

#### Output
* output [os-browsers](#os-browsers)

### Profiles
Fetch login profiles


```js
lambdatest.Profiles(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [profiles](#profiles)

### Resolutions
Fetch all available resolution on different OS


```js
lambdatest.Resolutions(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [resolutions](#resolutions)

### stop.test_id.put
Stop specified screenshot test


```js
lambdatest.stop.test_id.put({
  "test_id": ""
}, context)
```

#### Input
* input `object`
  * test_id **required** `string`: Test ID that details you want to stop

#### Output
* output [stop-screenshot-success](#stop-screenshot-success)

### screenshots
To fetch specified screenshot details


```js
lambdatest.screenshots({
  "test_id": ""
}, context)
```

#### Input
* input `object`
  * test_id **required** `string`: Test ID that details you want to fetch

#### Output
* output [screenshot-details](#screenshot-details)

### ZippedScreenshots
Fetch Zipped Screenshots


```js
lambdatest.ZippedScreenshots({
  "test_id": ""
}, context)
```

#### Input
* input `object`
  * test_id **required** `string`: Test ID that Zipped Screenshots you want to fetch

#### Output
* output [zipped-screenshots-success](#zipped-screenshots-success)



## Definitions

### AccessDenied
* AccessDenied `object`
  * message `string`

### Forbidden
* Forbidden `object`
  * message `string`

### android-7.0
* android-7.0 `object`
  * devices `array`
    * items `string`

### android-9.0
* android-9.0 `object`
  * devices `array`
    * items `string`

### browsers
* browsers `object`
  * chrome `array`
    * items `string`
  * firefox `array`
    * items `string`
  * opera `array`
    * items `string`

### ios-12.0
* ios-12.0 `object`
  * devices `array`
    * items `string`

### os-browsers
* os-browsers `object`
  * macos mojave [browsers](#browsers)
  * windows 10 [browsers](#browsers)

### os-devices
* os-devices `object`
  * android 7.0 [android-7.0](#android-7.0)
  * ios 12.0 [ios-12.0](#ios-12.0)

### profiles
* profiles `object`
  * profiles `array`
    * items `object`
      * name `string`
      * profile_config `object`
        * credentials `object`
          * password `string`
          * username `string`
        * locators `object`
          * password `object`
          * submit `object`
          * username `object`
        * login_url `string`
        * profile_name `string`

### res_list
* res_list `array`
  * items `string`

### resolutions
* resolutions `object`
  * mac_res [res_list](#res_list)
  * win_res [res_list](#res_list)

### screenshot-details
* screenshot-details [screenshot-test-response](#screenshot-test-response)

### screenshot-not-found
* screenshot-not-found `object`
  * message `string`
  * reason `string`

### screenshot-payload
* screenshot-payload `object`
  * callback_url `string`
  * configs `object`
    * macos mojave [browsers](#browsers)
    * windows 10 [browsers](#browsers)
  * defer_time `number`
  * email `boolean`
  * mac_res `string`
  * password `string`
  * tunnel `boolean`
  * tunnel_identifier `string`
  * url `string`
  * username `string`
  * win_res `string`

### screenshot-test-response
* screenshot-test-response `object`
  * callback_url `string`
  * defer_time `number`
  * screenshots `array`
    * items [screenshot-type](#screenshot-type)
  * test_id `string`
  * test_status `string`
  * url `string`

### screenshot-type
* screenshot-type `object`
  * activity_id `string`
  * browser `string`
  * browser_version `string`
  * os `string`
  * resolution `string`
  * screenshot_url `string`
  * status `string`
  * thumbnail_url `string`

### start-screenshot-bad-request
* start-screenshot-bad-request `object`
  * message `string`

### start-screenshot-success
* start-screenshot-success `object`
  * test_id `string`

### stop-screenshot-not-found
* stop-screenshot-not-found `object`
  * message `string`

### stop-screenshot-success
* stop-screenshot-success `object`
  * message `string`

### zipped-screenshots-success
* zipped-screenshots-success `object`
  * url `string`


