# @datafire/lyft

Client library for Lyft

## Installation and Usage
```bash
npm install --save datafire @datafire/lyft
```

```js
let datafire = require('datafire');
let lyft = require('@datafire/lyft').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
});

lyft.GetCost({}).then(data => {
  console.log(data);
})
```

## Description
Drive your app to success with Lyft's API

## Actions
### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
lyft.oauthCallback({
  "code": ""
}, context)
```

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
lyft.oauthRefresh(null, context)
```

#### Parameters
*This action has no parameters*

### GetCost
Estimate the cost of taking a Lyft between two points.



```js
lyft.GetCost({
  "start_lat": 0,
  "start_lng": 0
}, context)
```

#### Parameters
* ride_type (string) - ID of a ride type
* start_lat (number) **required** - Latitude of the starting location
* start_lng (number) **required** - Longitude of the starting location
* end_lat (number) - Latitude of the ending location
* end_lng (number) - Longitude of the ending location

### GetDrivers
The drivers endpoint returns a list of nearby drivers' lat and lng at a given location.



```js
lyft.GetDrivers({
  "lat": 0,
  "lng": 0
}, context)
```

#### Parameters
* lat (number) **required** - Latitude of a location
* lng (number) **required** - Longitude of a location

### GetETA
The ETA endpoint lets you know how quickly a Lyft driver can come get you



```js
lyft.GetETA({
  "lat": 0,
  "lng": 0
}, context)
```

#### Parameters
* lat (number) **required** - Latitude of a location
* lng (number) **required** - Longitude of a location
* destination_lat (number) - Latitude of destination location
* destination_lng (number) - Longitude of destination location
* ride_type (string) - ID of a ride type

### GetProfile
The v1 of this endpoint returns the user's ID, v2 will return more general info about the user. We require authentication for this endpoint, so we extract the user ID from the access token.



```js
lyft.GetProfile(null, context)
```

#### Parameters
*This action has no parameters*

### GetRides
Get a list of past & current rides for this passenger.



```js
lyft.GetRides({
  "start_time": ""
}, context)
```

#### Parameters
* start_time (string) **required** - Restrict to rides starting after this point in time. The earliest supported date is 2015-01-01T00:00:00+00:00
* end_time (string) - Restrict to rides starting before this point in time. The earliest supported date is 2015-01-01T00:00:00+00:00
* limit (integer) - The maximum number of rides to return. The default limit is 10 if not specified. The maximum allowed value is 50, an integer greater that 50 will return at most 50 results.

### NewRide
Request a Lyft come pick you up at the given location.



```js
lyft.NewRide({
  "request": {
    "ride_type": "",
    "origin": {}
  }
}, context)
```

#### Parameters
* request (object) **required** - Represents a requested, ongoing, or finished Lyft ride

### GetRide
Get the status of a ride along with information about the driver, vehicle and price of a given ride ID



```js
lyft.GetRide({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of the ride

### CancelRide
Cancel a ongoing ride which was requested earlier by providing the ride id.



```js
lyft.CancelRide({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of the ride
* request (undefined)

### SetRideDestination
Add or update the ride's destination. Note that the ride must still be active (not droppedOff or canceled), and that destinations on Lyft Line rides can not be changed.



```js
lyft.SetRideDestination({
  "id": "",
  "request": {}
}, context)
```

#### Parameters
* id (string) **required** - The ID of the ride
* request (object) **required**

### SetRideRating
Add the passenger's 1 to 5 star rating of the ride, optional written feedback, and optional tip amount in minor units and currency. The ride must already be dropped off, and ratings must be given within 24 hours of drop off. For purposes of display, 5 is considered the default rating. When this endpoint is successfully called, payment processing will begin.



```js
lyft.SetRideRating({
  "id": "",
  "request": null
}, context)
```

#### Parameters
* id (string) **required** - The ID of the ride
* request (undefined) **required** - Rating and optional feedback and tip

### GetRideReceipt
Get the receipt information of a processed ride by providing the ride id. Receipts will only be available to view once the payment has been processed. In the case of canceled ride, cancellation penalty is included if applicable.



```js
lyft.GetRideReceipt({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of the ride

### GetRideTypes
The ride types endpoint returns information about what kinds of Lyft rides you can request at a given location.



```js
lyft.GetRideTypes({
  "lat": 0,
  "lng": 0
}, context)
```

#### Parameters
* lat (number) **required** - Latitude of a location
* lng (number) **required** - Longitude of a location
* ride_type (string) - ID of a ride type

### SetPrimeTime
Preset a Prime Time percentage in the region surrounding the specified location. This Prime Time percentage will be applied when requesting cost, or when requesting a ride in sandbox mode.



```js
lyft.SetPrimeTime({
  "request": null
}, context)
```

#### Parameters
* request (undefined) **required**

### SetRideStatus
Propagate a sandbox-ride through various ride status



```js
lyft.SetRideStatus({
  "id": "",
  "request": null
}, context)
```

#### Parameters
* id (string) **required** - The ID of the ride
* request (undefined) **required**

### SetRideTypes
The sandbox-ridetypes endpoint allows you to preset the ridetypes in the region surrounding the specified latitude and longitude to allow testing different scenarios



```js
lyft.SetRideTypes({
  "request": null
}, context)
```

#### Parameters
* request (undefined) **required**

### SetRideTypeAvailability
Set driver availability for the provided ride_type in the city/region surrounding the specified location



```js
lyft.SetRideTypeAvailability({
  "ride_type": "",
  "request": null
}, context)
```

#### Parameters
* ride_type (string) **required**
* request (undefined) **required**

