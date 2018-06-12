# @datafire/just_eat

Client library for Just Eat UK

## Installation and Usage
```bash
npm install --save @datafire/just_eat
```
```js
let just_eat = require('@datafire/just_eat').create();

just_eat.Delivery_DeliverableRestaurants({
  "Authorization": ""
}).then(data => {
  console.log(data);
});
```

## Description

<h2>Delivery Service API</h2><p>Some calls require HTTPS and an Authorization Key which will be provided by Just Eat.<p><p>The key needs to be provided in the header as follows: <b>Authorization: JE-API-KEY {Your-Key-Here}</b></p>

## Actions

### Delivery_DeliverableRestaurants
- This method requires the use of an Authorization Key.



```js
just_eat.Delivery_DeliverableRestaurants({
  "Authorization": ""
}, context)
```

#### Input
* input `object`
  * toLat `number`
  * toLon `number`
  * toPostcode `string`
  * Authorization **required** `string`: access token

#### Output
* output [DeliverableRestaurants](#deliverablerestaurants)

### Delivery_Estimate
- This method requires the use of an Authorization Key.



```js
just_eat.Delivery_Estimate({
  "restaurantReference": "",
  "Authorization": ""
}, context)
```

#### Input
* input `object`
  * restaurantReference **required** `string`
  * toLat `string`
  * toLon `string`
  * toPostcode `string`
  * Authorization **required** `string`: access token

#### Output
* output [EstimatedDeliveryTime](#estimateddeliverytime)

### health.check.get



```js
just_eat.health.check.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [HealthState](#healthstate)

### health.validate.get



```js
just_eat.health.validate.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [HealthState](#healthstate)

### healthcheck.get



```js
just_eat.healthcheck.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [HealthState](#healthstate)

### Delivery_BulkDriverLocations
- This method requires the use of an Authorization Key.



```js
just_eat.Delivery_BulkDriverLocations({
  "items": [],
  "Authorization": ""
}, context)
```

#### Input
* input `object`
  * items **required** `array`
    * items [BulkDeliveryDetails](#bulkdeliverydetails)
  * Authorization **required** `string`: access token

#### Output
* output [Object](#object)

### Delivery_AtDeliveryAddress
- This method requires the use of an Authorization Key.



```js
just_eat.Delivery_AtDeliveryAddress({
  "id": "",
  "deliveryDetails": {},
  "Authorization": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * deliveryDetails **required** [DeliveryDetails](#deliverydetails)
  * Authorization **required** `string`: access token

#### Output
* output [Object](#object)

### Delivery_AtRestaurant
- This method requires the use of an Authorization Key.



```js
just_eat.Delivery_AtRestaurant({
  "id": "",
  "deliveryDetails": {},
  "Authorization": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * deliveryDetails **required** [DeliveryDetails](#deliverydetails)
  * Authorization **required** `string`: access token

#### Output
* output [Object](#object)

### Delivery_Delivered
- This method requires the use of an Authorization Key.



```js
just_eat.Delivery_Delivered({
  "id": "",
  "deliveryDetails": {},
  "Authorization": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * deliveryDetails **required** [DeliveryDetails](#deliverydetails)
  * Authorization **required** `string`: access token

#### Output
* output [Object](#object)

### Delivery_DriverAssigned
- This method requires the use of an Authorization Key.



```js
just_eat.Delivery_DriverAssigned({
  "id": "",
  "deliveryDriverAssignedDetails": {},
  "Authorization": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * deliveryDriverAssignedDetails **required** [DeliveryDriverAssignedDetails](#deliverydriverassigneddetails)
  * Authorization **required** `string`: access token

#### Output
* output [Object](#object)

### Delivery_DriverLocation
- This method requires the use of an Authorization Key.



```js
just_eat.Delivery_DriverLocation({
  "id": "",
  "deliveryDetails": {},
  "Authorization": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * deliveryDetails **required** [DeliveryDetails](#deliverydetails)
  * Authorization **required** `string`: access token

#### Output
* output [Object](#object)

### Delivery_OnItsWay
- This method requires the use of an Authorization Key.



```js
just_eat.Delivery_OnItsWay({
  "id": "",
  "onItsWayDetails": {},
  "Authorization": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * onItsWayDetails **required** [OnItsWayDetails](#onitswaydetails)
  * Authorization **required** `string`: access token

#### Output
* output [Object](#object)



## Definitions

### BulkDeliveryDetails
* BulkDeliveryDetails `object`
  * Location [Location](#location)
  * OrderId `string`
  * TimeStampWithUtcOffset `string`

### DeliverableRestaurant
* DeliverableRestaurant `object`
  * DeliveryDistanceInMetres `integer`
  * DeliveryDurationInSeconds `integer`
  * EstimatedWaitForDeliveryPickupInSeconds `integer`
  * Restaurant [DeliveryableRestaurantLocationInfo](#deliveryablerestaurantlocationinfo)

### DeliverableRestaurants
* DeliverableRestaurants `object`
  * DeliveryLocation [DeliveryLocation](#deliverylocation)
  * Restaurants `array`
    * items [DeliverableRestaurant](#deliverablerestaurant)

### DeliveryDetails
* DeliveryDetails `object`
  * Location [Location](#location)
  * TimeStampWithUtcOffset `string`

### DeliveryDriverAssignedDetails
* DeliveryDriverAssignedDetails `object`
  * DriverContactNumber `string`
  * DriverName `string`
  * EstimatedArrivalTime `string`
  * Location [Location](#location)
  * TimeStampWithUtcOffset `string`
  * VehicleDetails [VehicleDetails](#vehicledetails)

### DeliveryEstimatePosition
* DeliveryEstimatePosition `object`
  * RestaurantReference **required** `string`
  * ToLat `string`
  * ToLon `string`
  * ToPostcode `string`

### DeliveryLocation
* DeliveryLocation `object`
  * Latitude `number`
  * Longitude `number`

### DeliveryPosition
* DeliveryPosition `object`
  * ToLat `number`
  * ToLon `number`
  * ToPostcode `string`

### DeliveryableRestaurantLocationInfo
* DeliveryableRestaurantLocationInfo `object`
  * Latitude `number`
  * Longitude `number`
  * RestaurantId `string`
  * RestaurantReference `string`

### EstimatedDeliveryTime
* EstimatedDeliveryTime `object`
  * DurationInMinutes `string`
  * RestaurantReference `string`

### HealthState
* HealthState `object`
  * Healthy `boolean`
  * Information `string`

### Location
* Location `object`
  * Accuracy `number`
  * Heading `number`
  * Latitude `number`
  * Longitude `number`
  * Speed `number`

### Object
* Object `object`

### OnItsWayDetails
* OnItsWayDetails `object`
  * EstimatedArrivalTime `string`
  * Location [Location](#location)
  * TimeStampWithUtcOffset `string`

### VehicleDetails
* VehicleDetails `object`
  * Vehicle `string`
  * VehicleRegistration `string`


