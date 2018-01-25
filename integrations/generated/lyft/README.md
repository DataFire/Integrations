# @datafire/lyft

Client library for Lyft

## Installation and Usage
```bash
npm install --save @datafire/lyft
```
```js
let lyft = require('@datafire/lyft').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

lyft.GetCost({
  "start_lat": 0,
  "start_lng": 0
}).then(data => {
  console.log(data);
});
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
lyft.oauthRefresh(null, context)
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

### GetCost
Estimate the cost of taking a Lyft between two points.



```js
lyft.GetCost({
  "start_lat": 0,
  "start_lng": 0
}, context)
```

#### Input
* input `object`
  * ride_type `string` (values: lyft, lyft_line, lyft_plus, lyft_premier, lyft_lux, lyft_luxsuv): ID of a ride type
  * start_lat **required** `number`: Latitude of the starting location
  * start_lng **required** `number`: Longitude of the starting location
  * end_lat `number`: Latitude of the ending location
  * end_lng `number`: Longitude of the ending location

#### Output
* output `object`
  * cost_estimates `array`
    * items [CostEstimate](#costestimate)

### GetDrivers
The drivers endpoint returns a list of nearby drivers' lat and lng at a given location.



```js
lyft.GetDrivers({
  "lat": 0,
  "lng": 0
}, context)
```

#### Input
* input `object`
  * lat **required** `number`: Latitude of a location
  * lng **required** `number`: Longitude of a location

#### Output
* output `object`
  * nearby_drivers `array`
    * items [NearbyDriversByRideType](#nearbydriversbyridetype)

### GetETA
The ETA endpoint lets you know how quickly a Lyft driver can come get you



```js
lyft.GetETA({
  "lat": 0,
  "lng": 0
}, context)
```

#### Input
* input `object`
  * lat **required** `number`: Latitude of a location
  * lng **required** `number`: Longitude of a location
  * destination_lat `number`: Latitude of destination location
  * destination_lng `number`: Longitude of destination location
  * ride_type `string` (values: lyft, lyft_line, lyft_plus, lyft_premier, lyft_lux, lyft_luxsuv): ID of a ride type

#### Output
* output `object`
  * eta_estimates `array`
    * items [Eta](#eta)

### GetProfile
The v1 of this endpoint returns the user's ID, v2 will return more general info about the user. We require authentication for this endpoint, so we extract the user ID from the access token.



```js
lyft.GetProfile(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Profile](#profile)

### GetRides
Get a list of past & current rides for this passenger.



```js
lyft.GetRides({
  "start_time": ""
}, context)
```

#### Input
* input `object`
  * start_time **required** `string`: Restrict to rides starting after this point in time. The earliest supported date is 2015-01-01T00:00:00+00:00
  * end_time `string`: Restrict to rides starting before this point in time. The earliest supported date is 2015-01-01T00:00:00+00:00
  * limit `integer`: The maximum number of rides to return. The default limit is 10 if not specified. The maximum allowed value is 50, an integer greater that 50 will return at most 50 results.

#### Output
* output `object`
  * ride_history `array`
    * items [RideDetail](#ridedetail)

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

#### Input
* input `object`
  * request **required** [Ride](#ride)

#### Output
* output [RideRequest](#riderequest)

### GetRide
Get the status of a ride along with information about the driver, vehicle and price of a given ride ID



```js
lyft.GetRide({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the ride

#### Output
* output [RideDetail](#ridedetail)

### CancelRide
Cancel a ongoing ride which was requested earlier by providing the ride id.



```js
lyft.CancelRide({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the ride
  * request [CancellationRequest](#cancellationrequest)

#### Output
*Output schema unknown*

### SetRideDestination
Add or update the ride's destination. Note that the ride must still be active (not droppedOff or canceled), and that destinations on Lyft Line rides can not be changed.



```js
lyft.SetRideDestination({
  "id": "",
  "request": {}
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the ride
  * request **required** [Location](#location)

#### Output
* output [Location](#location)

### SetRideRating
Add the passenger's 1 to 5 star rating of the ride, optional written feedback, and optional tip amount in minor units and currency. The ride must already be dropped off, and ratings must be given within 24 hours of drop off. For purposes of display, 5 is considered the default rating. When this endpoint is successfully called, payment processing will begin.



```js
lyft.SetRideRating({
  "id": "",
  "request": null
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the ride
  * request **required** [RatingRequest](#ratingrequest)

#### Output
*Output schema unknown*

### GetRideReceipt
Get the receipt information of a processed ride by providing the ride id. Receipts will only be available to view once the payment has been processed. In the case of canceled ride, cancellation penalty is included if applicable.



```js
lyft.GetRideReceipt({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the ride

#### Output
* output [RideReceipt](#ridereceipt)

### GetRideTypes
The ride types endpoint returns information about what kinds of Lyft rides you can request at a given location.



```js
lyft.GetRideTypes({
  "lat": 0,
  "lng": 0
}, context)
```

#### Input
* input `object`
  * lat **required** `number`: Latitude of a location
  * lng **required** `number`: Longitude of a location
  * ride_type `string` (values: lyft, lyft_line, lyft_plus, lyft_premier, lyft_lux, lyft_luxsuv): ID of a ride type

#### Output
* output `object`
  * ride_types `array`
    * items [RideType](#ridetype)

### SetPrimeTime
Preset a Prime Time percentage in the region surrounding the specified location. This Prime Time percentage will be applied when requesting cost, or when requesting a ride in sandbox mode.



```js
lyft.SetPrimeTime({
  "request": null
}, context)
```

#### Input
* input `object`
  * request **required** [SandboxPrimetime](#sandboxprimetime)

#### Output
*Output schema unknown*

### SetRideStatus
Propagate a sandbox-ride through various ride status



```js
lyft.SetRideStatus({
  "id": "",
  "request": null
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the ride
  * request **required** [SandboxRideStatus](#sandboxridestatus)

#### Output
* output [SandboxRideUpdate](#sandboxrideupdate)

### SetRideTypes
The sandbox-ridetypes endpoint allows you to preset the ridetypes in the region surrounding the specified latitude and longitude to allow testing different scenarios



```js
lyft.SetRideTypes({
  "request": null
}, context)
```

#### Input
* input `object`
  * request **required** [SandboxRideType](#sandboxridetype)

#### Output
* output [SandboxRideType](#sandboxridetype)

### SetRideTypeAvailability
Set driver availability for the provided ride_type in the city/region surrounding the specified location



```js
lyft.SetRideTypeAvailability({
  "ride_type": "",
  "request": null
}, context)
```

#### Input
* input `object`
  * ride_type **required** `string` (values: lyft, lyft_line, lyft_plus, lyft_premier, lyft_lux, lyft_luxsuv)
  * request **required** [SandboxDriverAvailability](#sandboxdriveravailability)

#### Output
*Output schema unknown*



## Definitions

### ApiError
* ApiError `object`: Details about why a request failed, such as missing or invalid parameters
  * error `string`: A "slug" that serves as the error code (eg. "bad_parameter")
  * error_description `string`: A user-friendly description of the error (appropriate to show to an end-user)
  * error_detail `array`
    * items [ErrorDetail](#errordetail)

### CancellationCost
* CancellationCost `object`
  * amount **required** `integer`: Total price of the ride
  * currency **required** `string`: The ISO 4217 currency code for the amount (e.g. USD)
  * description **required** `string`: The description for the cost
  * token `string`: Token used to confirm the fee when cancelling a request
  * token_duration `integer`: How long, in seconds, before the token expires

### CancellationCostError
* CancellationCostError `object`
  * amount **required** `integer`: Total price of the ride
  * currency **required** `string`: The ISO 4217 currency code for the amount (e.g. USD)
  * description **required** `string`: The description for the cost
  * token `string`: Token used to confirm the fee when cancelling a request
  * token_duration `integer`: How long, in seconds, before the token expires
  * error `string`: A "slug" that serves as the error code (eg. "bad_parameter")
  * error_description `string`: A user-friendly description of the error (appropriate to show to an end-user)
  * error_detail `array`
    * items [ErrorDetail](#errordetail)

### CancellationRequest
* CancellationRequest `object`
  * cancel_confirmation_token `string`: Token affirming the user accepts the cancellation fee. Required if a cancellation fee is in effect.

### Charge
* Charge `object`
  * amount **required** `integer`: The line item amount
  * currency **required** `string`: The currency for the amount
  * payment_method **required** `string`: The payment method display name.

### Cost
* Cost `object`
  * amount **required** `integer`: Total price of the ride
  * currency **required** `string`: The ISO 4217 currency code for the amount (e.g. USD)
  * description **required** `string`: The description for the cost

### CostEstimate
* CostEstimate `object`: A non-guaranteed estimate of price
  * cost_token `string`: A token that confirms the user has accepted current Prime Time and/or fixed price charges. See 'Request a Lyft' for more details
  * currency `string`: The ISO 4217 currency code for the amount (e.g. 'USD')
  * display_name `string`: A human readable description of the ride type
  * estimated_cost_cents_max `integer`: Estimated upper bound for trip cost, in minor units (cents). Estimates are not guaranteed, and only provide a reasonable range based on current conditions.
  * estimated_cost_cents_min `integer`: Estimated lower bound for trip cost, in minor units (cents). Estimates are not guaranteed, and only provide a reasonable range based on current conditions.
  * estimated_distance_miles `number`: Estimated distance for this trip
  * estimated_duration_seconds `integer`: Estimated time to get from the start location to the end.
  * is_valid_estimate `boolean`: The validity of the cost estimate returned
  * primetime_confirmation_token `string`: This token is needed when requesting rides. (Deprecated)
  * primetime_percentage `string`: Current Prime Time Percentage. Prime Time adds a percentage to ride costs, prior to other applicable fees. When ride requests greatly outnumber available drivers, our system will automatically turn on Prime Time.
  * ride_type [RideTypeEnum](#ridetypeenum)

### CurrentRideLocation
* CurrentRideLocation `object`
  * lat **required** `number`: The latitude component of a location
  * lng **required** `number`: The longitude component of a location
  * bearing `number`: Bearing of the driver's car in degrees

### DriverDetail
* DriverDetail `object`
  * first_name **required** `string`: The driver's first name
  * image_url **required** `string`: The driver's image url
  * phone_number **required** `string`: The driver's contact phone number. Must be E.164 formatted.
  * rating **required** `string`: The driver's rating based in 0-5 scale
  * user_id **required** `string`: The driver's id

### ErrorDetail
* ErrorDetail `object`: An object with a single key-value pair, where the key is the name of the invalid parameter, and the value is a description of the error.
  * field_name `string`: description of the error

### Eta
* Eta `object`: Estimated Time of Arrival
  * display_name `string`: A human readable description of the ride type
  * eta_seconds `integer`: Estimated seconds for a driver to arrive
  * eta_seconds_max `integer`: Estimated upper bound of seconds for a driver to arrive
  * is_valid_estimate `boolean`: The validity of the ETA estimate returned
  * ride_type [RideTypeEnum](#ridetypeenum)

### LatLng
* LatLng `object`
  * lat **required** `number`: The latitude component of a location
  * lng **required** `number`: The longitude component of a location

### LineItem
* LineItem `object`
  * amount **required** `integer`: The line item amount
  * currency **required** `string`: The currency for the amount
  * type **required** `string`: The line item display name for a charge item

### Location
* Location `object`
  * lat **required** `number`: The latitude component of a location
  * lng **required** `number`: The longitude component of a location
  * address `string`: A human readable address at/near the given location

### NearbyDriver
* NearbyDriver `object`
  * locations `array`: the lastest recorded driver locations up to 5 sorted in chronological order.
    * items [LatLng](#latlng)

### NearbyDriversByRideType
* NearbyDriversByRideType `object`
  * drivers `array`: list of nearby drivers group by ride type sorted by eta
    * items [NearbyDriver](#nearbydriver)
  * ride_type `string`: driver's ride type. if driver is eligable for several ride types, he will be duplicated.

### PassengerDetail
* PassengerDetail `object`
  * first_name **required** `string`: The passenger's first name
  * image_url **required** `string`: The passenger's profile image
  * rating **required** `string`: The passenger's rating
  * last_name `string`: The passenger's last name
  * user_id `string`: The passenger's lyft user id

### PickupDropoffLocation
* PickupDropoffLocation `object`
  * lat **required** `number`: The latitude component of a location
  * lng **required** `number`: The longitude component of a location
  * address `string`: A human readable address at/near the given location
  * time `string`: Server time when the location object is created

### PricingDetails
* PricingDetails `object`
  * base_charge `integer`: The base charge of the trip
  * cancel_penalty_amount `integer`: The charge amount if cancel penalty is involved
  * cost_minimum `integer`: The minimum charge for the trip
  * cost_per_mile `integer`: The cost per mile
  * cost_per_minute `integer`: The cost per minute
  * currency `string`: The ISO 4217 currency code for the amount (e.g. USD)
  * trust_and_service `integer`: Service fee

### Profile
* Profile `object`: Represents the general information about a user.
  * first_name **required** `string`: The first name of this user
  * has_taken_a_ride **required** `boolean`: Indicates whether this user has taken at least one Lyft ride
  * id **required** `string`: The unique ID of this user
  * last_name **required** `string`: The last name of this user

### RatingRequest
* RatingRequest `object`: Rating and optional feedback and tip
  * feedback `string`: The passenger's written feedback about this ride
  * rating **required** `integer`: The passenger's rating of this ride from 1 to 5
  * tip `object`: Tip amount in minor units and tip currency
    * amount `integer`: A tip for the driver in cents. To be charged to the user's default charge account.
    * currency `string`: The currency in which you want to tip. e.g. USD

### Ride
* Ride `object`: Represents a requested, ongoing, or finished Lyft ride
  * cost_token `string`: A token that confirms the user has accepted current Prime Time and/or fixed price charges
  * destination `object`: The *requested* location for passenger drop off
    * lat **required** `number`: The latitude component of a location
    * lng **required** `number`: The longitude component of a location
    * address `string`: A human readable address at/near the given location
  * origin **required** `object`: The *requested* location for passenger pickup
    * lat **required** `number`: The latitude component of a location
    * lng **required** `number`: The longitude component of a location
    * address `string`: A human readable address at/near the given location
  * primetime_confirmation_token `string`: A token that confirms the user has accepted current primetime charges (Deprecated)
  * ride_type **required** [RideTypeEnum](#ridetypeenum)

### RideDetail
* RideDetail `object`: Detail information about a ride
  * beacon_color `string`: Hex color code of the driver AMP device.
  * can_cancel `array`
    * items `string` (values: driver, passenger, dispatcher): The array of actors who may cancel the ride at this point
  * canceled_by `string`: The role of user who canceled the ride (if applicable)
  * cancellation_price `object`: The cost of cancellation if there would be a penalty
    * amount **required** `integer`: Total price of the ride
    * currency **required** `string`: The ISO 4217 currency code for the amount (e.g. USD)
    * description **required** `string`: The description for the cost
    * token `string`: Token used to confirm the fee when cancelling a request
    * token_duration `integer`: How long, in seconds, before the token expires
  * destination `object`: The *requested* location for passenger drop off
    * lat **required** `number`: The latitude component of a location
    * lng **required** `number`: The longitude component of a location
    * address `string`: A human readable address at/near the given location
    * eta_seconds `integer`: Estimated seconds for a driver to pickup or reach destination based on ride status
  * distance_miles `number`: The distance, in miles, that this ride traveled. This field is only present after drop-off
  * driver [DriverDetail](#driverdetail)
  * dropoff `object`: The *actual* location of passenger drop off
    * lat **required** `number`: The latitude component of a location
    * lng **required** `number`: The longitude component of a location
    * address `string`: A human readable address at/near the given location
    * time `string`: Server time when the location object is created
  * duration_seconds `integer`: Duration of the ride in seconds from pickup to drop-off. This field is only present after drop-off.
  * feedback `string`: The written feedback the user left for this ride
  * generated_at `string`: The request timestamp in date and time
  * line_items `array`: The break down of cost
    * items [LineItem](#lineitem)
  * location `object`: The *current* location info of the ride
    * lat **required** `number`: The latitude component of a location
    * lng **required** `number`: The longitude component of a location
    * bearing `number`: Bearing of the driver's car in degrees
  * origin `object`: The *requested* location for passenger pickup
    * lat **required** `number`: The latitude component of a location
    * lng **required** `number`: The longitude component of a location
    * address `string`: A human readable address at/near the given location
    * eta_seconds `integer`: Estimated seconds for a driver to pickup or reach destination based on ride status
  * passenger [PassengerDetail](#passengerdetail)
  * pickup `object`: The *actual* location of passenger pickup
    * lat **required** `number`: The latitude component of a location
    * lng **required** `number`: The longitude component of a location
    * address `string`: A human readable address at/near the given location
    * time `string`: Server time when the location object is created
  * price `object`: The total price for the current ride
    * amount **required** `integer`: Total price of the ride
    * currency **required** `string`: The ISO 4217 currency code for the amount (e.g. USD)
    * description **required** `string`: The description for the cost
  * pricing_details_url `string`: The web view showing the pricing structure for the geographic area where the ride was taken
  * primetime_percentage `string`: The Prime Time percentage applied to the base price
  * rating `integer`: The rating the user left for this ride, from 1 to 5
  * requested_at `string`: The ride requested timestamp in date and time
  * ride_id `string`: The unique ID of this ride
  * ride_profile `object`: Indicates whether the ride was requested from the business profile or personal profile of the user.
  * ride_type [RideTypeEnumWithOther](#ridetypeenumwithother)
  * route_url `string`: The web view showing the passenger, driver, and route for this ride. This field will only be present for rides created through this API, or that have been shared through the "Share my Route" feature
  * status [RideStatusEnum](#ridestatusenum)
  * vehicle [VehicleDetail](#vehicledetail)

### RideLocation
* RideLocation `object`
  * lat **required** `number`: The latitude component of a location
  * lng **required** `number`: The longitude component of a location
  * address `string`: A human readable address at/near the given location
  * eta_seconds `integer`: Estimated seconds for a driver to pickup or reach destination based on ride status

### RideProfileEnum
* RideProfileEnum `string` (values: personal, business): The payment profile which the user has picked for the ride

### RideReceipt
* RideReceipt `object`: Receipt information of a processed ride.
  * charges `array`: The break down of charge method
    * items [Charge](#charge)
  * line_items `array`: The break down of line items
    * items [LineItem](#lineitem)
  * price `object`: The total price for the current ride
    * amount **required** `integer`: Total price of the ride
    * currency **required** `string`: The ISO 4217 currency code for the amount (e.g. USD)
    * description **required** `string`: The description for the cost
  * requested_at `string`: The ride requested timestamp in date and time
  * ride_id `string`: The unique ID of this ride
  * ride_profile `object`: Indicates whether the ride was requested from the business profile or personal profile of the user.

### RideRequest
* RideRequest `object`: Minimal set of ride details
  * destination `object`: The *requested* location for passenger drop off
    * lat **required** `number`: The latitude component of a location
    * lng **required** `number`: The longitude component of a location
    * address `string`: A human readable address at/near the given location
  * origin `object`: The *requested* location for passenger pickup
    * lat **required** `number`: The latitude component of a location
    * lng **required** `number`: The longitude component of a location
    * address `string`: A human readable address at/near the given location
  * passenger [PassengerDetail](#passengerdetail)
  * ride_id `string`: The ID of the requested ride
  * status [RideStatusEnum](#ridestatusenum)

### RideRequestError
* RideRequestError `object`: Details about why a request failed, such as missing or invalid parameters
  * cost_token `string`: A token that confirms the user has accepted current Prime Time and/or fixed price charges
  * error **required** `string`: A "slug" that serves as the error code (eg. "bad_parameter")
  * error_description `string`: A user-friendly description of the error (appropriate to show to an end-user)
  * error_detail `array`
    * items [ErrorDetail](#errordetail)
  * error_uri `string`: When a user must go through another flow before requesting a ride, this URI specifies which flow to use (e.g. an account challenge flow in a web view)
  * primetime_confirmation_token `string`: A token that confirms the user has accepted current Prime Time charges (Deprecated)
  * primetime_multiplier `number`: Current Prime Time multiplier (eg. if primetime_percentage is 100%, primetime_multiplier will be 2.0)
  * primetime_percentage `string`: Current Prime Time percentage
  * token_duration `string`: Validity of the token in seconds

### RideStatusEnum
* RideStatusEnum `string` (values: pending, accepted, arrived, pickedUp, droppedOff, canceled, scheduled, unknown): The status of the ride

### RideType
* RideType `object`
  * display_name `string`: A human readable description of the ride type
  * image_url `string`: The URL of an image representing this ride type
  * pricing_details [PricingDetails](#pricingdetails)
  * ride_type [RideTypeEnum](#ridetypeenum)
  * scheduled_pricing_details [PricingDetails](#pricingdetails)
  * seats `integer`: The maximum number of seats available for rides requested with this ride type

### RideTypeEnum
* RideTypeEnum `string` (values: lyft, lyft_line, lyft_plus, lyft_premier, lyft_lux, lyft_luxsuv): The ID of the ride type

### RideTypeEnumWithOther
* RideTypeEnumWithOther `string` (values: lyft, lyft_line, lyft_plus, lyft_premier, lyft_lux, lyft_luxsuv, other): The ID of the ride type

### SandboxDriverAvailability
* SandboxDriverAvailability `object`
  * driver_availability **required** `boolean`: The availability of driver in a region
  * lat **required** `number`: The latitude component of a location
  * lng **required** `number`: The longitude component of a location

### SandboxPrimetime
* SandboxPrimetime `object`
  * lat **required** `number`: The latitude component of a location
  * lng **required** `number`: The longitude component of a location
  * primetime_percentage **required** `string`: The Prime Time to be applied as a string, e.g., '25%'

### SandboxRideStatus
* SandboxRideStatus `object`
  * status **required** [RideStatusEnum](#ridestatusenum)

### SandboxRideType
* SandboxRideType `object`
  * lat **required** `number`: The latitude component of a location
  * lng **required** `number`: The longitude component of a location
  * ride_types **required** `array`
    * items [RideTypeEnum](#ridetypeenum)

### SandboxRideUpdate
* SandboxRideUpdate `object`: Response when a sandbox ride is propagated through ride status
  * ride_id `string`: The ID of the ride
  * status [RideStatusEnum](#ridestatusenum)

### Tip
* Tip `object`
  * amount `integer`: A tip for the driver in cents. To be charged to the user's default charge account.
  * currency `string`: The currency in which you want to tip. e.g. USD

### TipParams
* TipParams `object`
  * amount `integer`: A tip for the driver in cents. To be charged to the user's default charge account.
  * currency `string`: The currency in which you want to tip. e.g. USD

### UserDetail
* UserDetail `object`
  * first_name **required** `string`: The passenger's first name
  * image_url **required** `string`: The passenger's profile image
  * rating **required** `string`: The passenger's rating

### VehicleDetail
* VehicleDetail `object`
  * color **required** `string`: The vehicle's color
  * image_url **required** `string`: The vehicle's image url
  * license_plate **required** `string`: The vehicle's license plate
  * license_plate_state **required** `string`: The vehicle's license plate state
  * make **required** `string`: The vehicle's maker
  * model **required** `string`: The vehicle's model
  * year **required** `integer`: The vehicle's model year


