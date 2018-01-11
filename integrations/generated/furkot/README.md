# @datafire/furkot

Client library for Furkot Trips

## Installation and Usage
```bash
npm install --save @datafire/furkot
```
```js
let furkot = require('@datafire/furkot').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

furkot.trip.get({}).then(data => {
  console.log(data);
})
```

## Description

Furkot provides Rest API to access user trip data.
Using Furkot API an application can list user trips and display stops for a specific trip.
Furkot API uses OAuth2 protocol to authorize applications to access data on behalf of users.


## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
furkot.oauthCallback({
  "code": ""
}, context)
```

#### Input
* input `object`
  * code **required** `string`

#### Output
* output `object`
  * access_token `string`
  * refresh_token `string`
  * token_type `string`
  * scope `string`
  * expiration `string`

### oauthRefresh
Exchange a refresh_token for an access_token


```js
furkot.oauthRefresh(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * access_token `string`
  * refresh_token `string`
  * token_type `string`
  * scope `string`
  * expiration `string`

### trip.get
list user's trips


```js
furkot.trip.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Trip](#trip)

### trip.trip_id.stop.get
list stops for a trip identified by {trip_id}


```js
furkot.trip.trip_id.stop.get({
  "trip_id": ""
}, context)
```

#### Input
* input `object`
  * trip_id **required** `string`: id of the trip

#### Output
* output `array`
  * items [Step](#step)



## Definitions

### Step
* Step `object`
  * address `string`: address of the stop
  * arrival `string`: arrival at the stop in its local timezone as YYYY-MM-DDThh:mm
  * coordinates `object`: geographical coordinates of the stop
    * lat `number`: latitude
    * lon `number`: longitude
  * departure `string`: departure from the stop in its local timezone as YYYY-MM-DDThh:mm
  * name `string`: name of the stop
  * nights `integer`: number of nights
  * route `object`: route leading to the stop
    * distance `integer`: route distance in meters
    * duration `integer`: route duration in seconds
    * mode `string` (values: car, motorcycle, bicycle, walk, other): travel mode
    * polyline `string`: route path compatible with Google polyline encoding algorithm
  * url `string`: url of the page with more information about the stop

### Trip
* Trip `object`
  * begin `string`: begin of the trip in its local timezone as YYYY-MM-DDThh:mm
  * description `string`: description of the trip (truncated to 200 characters)
  * end `string`: end of the trip in its local timezone as YYYY-MM-DDThh:mm
  * id `string`: Unique ID of the trip
  * name `string`: name of the trip


