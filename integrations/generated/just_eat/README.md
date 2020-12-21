# @datafire/just_eat

Client library for Just Eat UK

## Installation and Usage
```bash
npm install --save @datafire/just_eat
```
```js
let just_eat = require('@datafire/just_eat').create({
  Bearer: "",
  api_key: "",
  username: "",
  password: "",
  restaurantsignup_jwt: ""
});

.then(data => {
  console.log(data);
});
```

## Description

# Just Eat API
Just Eat offers services for our various business partners and our consumer applications.
How you interact with the API depends on the services you wish to interact with.
## Security
### HTTPS
All api calls and callbacks require HTTPS. Your service will need a valid SSL certificate and be accessible via the standard SSL port (port 443).
## Making an API request
Some API calls require an API key, to authenticate the partner calling the API.
```
PUT https://uk-partnerapi.just-eat.io/orders/abcd1234 HTTP/1.1
Authorization: JE-API-KEY abcd123456789
```
Other calls require a user token in the form of a JWT.
```
GET https://uk.api.just-eat.io/consumer/me/orders/uk HTTP/1.1
Authorization: Bearer abcd123456789
```

## Date Formats
### Date and time formats
All dates and times should use the [ISO 8601 standard for representation of dates and times](https://en.wikipedia.org/wiki/ISO_8601).

#### For instance:
* DueDateWithUtcOffset: `"2015-05-26T14:52:35.5444292+01:00"`
  - Local time: `14:52`
  - UTC time: `13:52`
  - UTC offset: `+1hr` (due to daylight time saving)
* DueDateWithUtcOffset: `"2015-02-03T11:10:00.0000000+00:00"`
  - Local time: `11:10`
  - UTC time: `11:10`
  - UTC offset: `0` (no daylight time saving, local time is equivalent to UTC)

Note that the offset may be for a timezone different to your own, so you should alway convert to your own local time for display purposes (e.g. on receipts and terminals).

### Callback timestamps
Timestamps sent to Just Eat should be recorded as the current local time (including any changes needed to account for daylight saving) with an accompanying offset that shows the difference between the recorded local time and the current UTC time.

If it is not possible to record timestamps in local time, timestamps may be recorded in UTC time with a 00:00 offset.
## Async Webhooks
Some of the webhooks on the platform are configured as being 'async' webhooks. These are for long-running operations, and work as follows:
  1. Your webhook is invoked with a `?callback={returnUrl}` query string parameter. The `returnUrl` is a unique URL that you will need to send the async response to.
  2. Return an immediate `202 Accepted` response from the webhook endpoint, to indicate that you have received the request.
  3. Perform the long-running operation. This can be deemed either a _success_; or a _failure_.
  4. If the result is a _**success**_, return the following:
  ```
  POST {returnUrl} HTTP/1.1

  {
        "status": "Success",
        "message": "{successMessage}",
        "data": {}   // webhook-specific response object
  }
  ```
  5. Otherwise, if the result is a _**failure**_, return the following:
  ```
  POST {returnUrl} HTTP/1.1

  {
        "status": "Failure",
        "message": "{failureMessage}",
        "data": {}   // webhook-specific response object
  }
  ```

## Actions

### acceptance_requested.post
This webhook will be invoked whenever acceptance has been requested for the order.


```js
just_eat.acceptance_requested.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [acceptance-requested](#acceptance-requested)

#### Output
*Output schema unknown*

### attempted_delivery_query_resolved.put
This webhook will be invoked whenever an attempted delivery query has been resolved.


```js
just_eat.attempted_delivery_query_resolved.put({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [attempted-delivery-resolved](#attempted-delivery-resolved)

#### Output
*Output schema unknown*

### consumers.tenant.post
Creates a consumer for the given tenant.


```js
just_eat.consumers.tenant.post({
  "tenant": "",
  "body": {
    "emailAddress": "",
    "firstName": "",
    "lastName": ""
  }
}, context)
```

#### Input
* input `object`
  * tenant **required** `string`: The identifier for the tenant. The only supported tenants are uk, au and nz
  * body **required** [ConsumerCreate](#consumercreate)

#### Output
* output [ConsumerCreateResponse](#consumercreateresponse)

### delivery_failed.put
This webhook will be invoked whenever an attempted delivery event is created from the device.


```js
just_eat.delivery_failed.put({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [attempted-delivery-created](#attempted-delivery-created)

#### Output
*Output schema unknown*

### delivery_fees.tenant.get
Retrieve delivery fees for many restaurants. Returns fees and minimum order values required for delivery orders.


```js
just_eat.delivery_fees.tenant.get({
  "tenant": "",
  "restaurantIds": [],
  "deliveryTime": ""
}, context)
```

#### Input
* input `object`
  * tenant **required** `string`: Tenant containing the restaurants.
  * restaurantIds **required** `array`: Restaurant IDs which fees are requested for. e.g. ?restaurantIds=1,2,3,4
  * deliveryTime **required** `string`: Delivery date/time when fees are required (ISO8601 format).
  * zone `string`: Postcode or other location name identifying the location to which delivery is required. For use when precise location is not available. This will be removed in future in favour of location.
  * latlong `array`: Point to which delivery is required (latitude, longitude). Supply this where possible as support for zone-only based lookups will be removed in future.

#### Output
* output `object`
  * restaurants `array`: Collection of restaurants for which delivery fees were found.
    * items [RestaurantDeliveryFees](#restaurantdeliveryfees)

### delivery.estimate.get
Get delivery estimate


```js
just_eat.delivery.estimate.get({
  "restaurantReference": ""
}, context)
```

#### Input
* input `object`
  * restaurantReference **required** `string`: The reference of the restaurant to estimate the delivery time from.
  * toLat `string`: The latitude of the position to estimate the delivery time to.
  * toLon `string`: The longitude of the position to estimate the delivery time to.
  * toPostcode `string`: The postcode to estimate the delivery time to.

#### Output
* output [estimated-delivery-time](#estimated-delivery-time)

### delivery.pools.get
A delivery pool is a named group of drivers which deliver food for a set of restaurants.


```js
just_eat.delivery.pools.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * delivery-pool-id `object`
    * name `string`: The name of the pool, used by operations teams, in reports, etc.
    * restaurants `array`: A list of Just Eat restaurant ids served by the delivery pool.
      * items `number`

### delivery.pools.post
A delivery pool is a named group of drivers which deliver food for a set of restaurants.


```js
just_eat.delivery.pools.post({
  "body": {
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [create-delivery-pool](#create-delivery-pool)

#### Output
*Output schema unknown*

### delivery.pools.deliveryPoolId.delete
The restaurants will no longer be associated with the pool.


```js
just_eat.delivery.pools.deliveryPoolId.delete({
  "deliveryPoolId": ""
}, context)
```

#### Input
* input `object`
  * deliveryPoolId **required** `string`: Identifier for the pool

#### Output
*Output schema unknown*

### delivery.pools.deliveryPoolId.get
A delivery pool is a named group of drivers which deliver food for a set of restaurants.


```js
just_eat.delivery.pools.deliveryPoolId.get({
  "deliveryPoolId": ""
}, context)
```

#### Input
* input `object`
  * deliveryPoolId **required** `string`: Identifier for the pool

#### Output
* output `object`
  * name `string`: The name of the pool, used by operations teams, in reports, etc.
  * restaurants `array`: A list of Just Eat restaurant ids served by the delivery pool.
    * items `number`

### delivery.pools.deliveryPoolId.patch
Modify a delivery pool, changing its name, restaurants or both


```js
just_eat.delivery.pools.deliveryPoolId.patch({
  "body": {},
  "deliveryPoolId": ""
}, context)
```

#### Input
* input `object`
  * body **required** [patch-delivery-pool](#patch-delivery-pool)
  * deliveryPoolId **required** `string`: Identifier for the pool

#### Output
* output `object`
  * name `string`: The name of the pool, used by operations teams, in reports, etc.
  * restaurants `array`: A list of Just Eat restaurant ids served by the delivery pool.
    * items `number`

### delivery.pools.deliveryPoolId.put
Replace an existing delivery pool changing all of its properties


```js
just_eat.delivery.pools.deliveryPoolId.put({
  "body": {
    "name": ""
  },
  "deliveryPoolId": ""
}, context)
```

#### Input
* input `object`
  * body **required** [create-delivery-pool](#create-delivery-pool)
  * deliveryPoolId **required** `string`: Identifier for the pool

#### Output
* output `object`
  * name `string`: The name of the pool, used by operations teams, in reports, etc.
  * restaurants `array`: A list of Just Eat restaurant ids served by the delivery pool.
    * items `number`

### delivery.pools.deliveryPoolId.availability.relative.get
Get the current amount of time it will take a driver to collect a new order from a restaurant in the pool.


```js
just_eat.delivery.pools.deliveryPoolId.availability.relative.get({
  "deliveryPoolId": ""
}, context)
```

#### Input
* input `object`
  * deliveryPoolId **required** `string`: Identifier for the pool

#### Output
* output `object`
  * bestGuess `string`: Your best estimation (hh:mm:ss)

### delivery.pools.deliveryPoolId.availability.relative.put
Set the average amount of time it will take a driver to collect a new order from a restaurant in the pool.


```js
just_eat.delivery.pools.deliveryPoolId.availability.relative.put({
  "body": {},
  "deliveryPoolId": ""
}, context)
```

#### Input
* input `object`
  * body **required** [estimated-time](#estimated-time)
  * deliveryPoolId **required** `string`: Identifier for the pool

#### Output
*Output schema unknown*

### delivery.pools.deliveryPoolId.hours.put
Set the daily start and end times for a pool or set closed flag if the pool does not operate on that day. Start and end times for all days must be provided. Though the API accepts array of start and end times for each day, multiple start and end time for a day are not accepted. If the end time for a day is equal to or before start time, end time will be considered as time for the next day.


```js
just_eat.delivery.pools.deliveryPoolId.hours.put({
  "body": {
    "monday": {
      "poolTimes": []
    },
    "tuesday": {
      "poolTimes": []
    },
    "wednesday": {
      "poolTimes": []
    },
    "thursday": {
      "poolTimes": []
    },
    "friday": {
      "poolTimes": []
    },
    "saturday": {
      "poolTimes": []
    },
    "sunday": {
      "poolTimes": []
    }
  },
  "deliveryPoolId": ""
}, context)
```

#### Input
* input `object`
  * body **required** [delivery-pool-hours](#delivery-pool-hours)
  * deliveryPoolId **required** `string`: Identifier for the pool

#### Output
*Output schema unknown*

### delivery.pools.deliveryPoolId.restaurants.delete
Remove restaurants from a delivery pool


```js
just_eat.delivery.pools.deliveryPoolId.restaurants.delete({
  "body": {},
  "deliveryPoolId": ""
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * restaurants `array`: A list of Just Eat restaurant ids served by the delivery pool.
      * items `number`
  * deliveryPoolId **required** `string`: Identifier for the pool

#### Output
*Output schema unknown*

### delivery.pools.deliveryPoolId.restaurants.put
Add additional restaurants to a delivery pool


```js
just_eat.delivery.pools.deliveryPoolId.restaurants.put({
  "deliveryPoolId": ""
}, context)
```

#### Input
* input `object`
  * deliveryPoolId **required** `string`: Identifier for the pool

#### Output
* output [delivery-restaurantslist](#delivery-restaurantslist)

### driver_assigned_to_delivery.put
Driver Assigned to Delivery


```js
just_eat.driver_assigned_to_delivery.put({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [driver-status](#driver-status)

#### Output
*Output schema unknown*

### driver_at_delivery_address.put
Driver at delivery address


```js
just_eat.driver_at_delivery_address.put({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [driver-status](#driver-status)

#### Output
*Output schema unknown*

### driver_at_restaurant.put
Driver at restaurant


```js
just_eat.driver_at_restaurant.put({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [driver-status](#driver-status)

#### Output
*Output schema unknown*

### driver_has_delivered_order.put
Driver has delivered order


```js
just_eat.driver_has_delivered_order.put({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [driver-status](#driver-status)

#### Output
*Output schema unknown*

### driver_location.put
Driver Location


```js
just_eat.driver_location.put({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [driver-location](#driver-location)

#### Output
*Output schema unknown*

### driver_on_their_way_to_delivery_address.put
Driver on their way to delivery address


```js
just_eat.driver_on_their_way_to_delivery_address.put({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [driver-status](#driver-status)

#### Output
*Output schema unknown*

### late_order_compensation_query.post
This webhook will be invoked when a late order compensation query has been raised and a restaurant response is required.


```js
just_eat.late_order_compensation_query.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [late-order-compensation-query](#late-order-compensation-query)

#### Output
*Output schema unknown*

### late_order_query.post
This webhook will be invoked when a late order query has been raised and a restaurant response is required.


```js
just_eat.late_order_query.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [late-order-query](#late-order-query)

#### Output
*Output schema unknown*

### menu_ingestion_complete.post
Callback to confirm that an attempt to ingest a menu has completed either successfully or unsuccessfully


```js
just_eat.menu_ingestion_complete.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [menu-ingestion-complete](#menu-ingestion-complete)

#### Output
*Output schema unknown*

### order_accepted.post
This webhook will be invoked whenever the order was accepted.


```js
just_eat.order_accepted.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [order-accepted](#order-accepted)

#### Output
*Output schema unknown*

### order_cancelled.post
This webhook will be invoked whenever the order was cancelled.


```js
just_eat.order_cancelled.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [order-cancelled](#order-cancelled)

#### Output
*Output schema unknown*

### order_eligible_for_restaurant_compensation.post
This webhook will be invoked for every cancelled order and it will inform if the order is eligible for compensation.



```js
just_eat.order_eligible_for_restaurant_compensation.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [OrderEligibleForRestaurantCompensation](#ordereligibleforrestaurantcompensation)

#### Output
*Output schema unknown*

### order_is_ready_for_pickup.put
<p>The "Ready for pickup" event lets the delivery partner know that the food has been cooked and is now ready for collection up from the restaurant.</p><p>When this event is received, it is important that you let your driver know that the order should now be collected from inside the restaurant. For example, this driver notification could take the form of an in-app notification or an SMS message.</p><p>This communication is needed to support restaurants who are unable to accommodate drivers inside their premises, as it allows restaurants to notify drivers waiting outside that they should come inside to collect their order.</p><p>NB&semi; This event can be sent by the restaurant at any point after the order is accepted by the restaurant (for instance, this event may be sent before the driver has arrived at the restaurant).</p>


```js
just_eat.order_is_ready_for_pickup.put({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [ready-for-pickup](#ready-for-pickup)

#### Output
*Output schema unknown*

### order_ready_for_preparation_async.post
This webhook will be invoked when we have determined that an order is ready for preparation. Upon receiving the request, you should perform any preparation-related activities, such as sending the order to the POS system / kitchen screen.
**NOTE:** This version of the webhook is asynchronous, and we expect a response in two parts:
  1. We expect an immediate `202` response from this webhook to denote that you have received the request;
  2. Following that, we expect an [async callback](#section/Async-Webhooks) - indicating either success or failure of the operation. The body for the async callbacks are as below:
  
  **Success callback**
  ```
  {
        "status": "Success",
        "message": "Order successfully sent to POS",
        "data": {}
  }
  ```
  **Failure callback**
  ```
  {
        "status": "Failure",
        "message": "{errorMessage}",   // e.g. "The POS is currently in use"
        "data": {}
  }
  ```



```js
just_eat.order_ready_for_preparation_async.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [order-ready-for-preparation](#order-ready-for-preparation)

#### Output
*Output schema unknown*

### order_ready_for_preparation_sync.post
This webhook will be invoked when we have determined that an order is ready for preparation. Upon receiving the request, you should perform any preparation-related activities, such as sending the order to the POS system / kitchen screen.



```js
just_eat.order_ready_for_preparation_sync.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [order-ready-for-preparation](#order-ready-for-preparation)

#### Output
*Output schema unknown*

### order_rejected.post
This webhook will be invoked whenever the order was rejected.


```js
just_eat.order_rejected.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [order-rejected](#order-rejected)

#### Output
*Output schema unknown*

### order_requires_delivery_acceptance.put
This webhook will be invoked when we have determined that an order is required acceptance for delivery. Upon receiving the request, the order should be scheduled for pickup by a courier/driver. We expect an immediate `201` response from this webhook to denote that you have received the request.


```js
just_eat.order_requires_delivery_acceptance.put({
  "body": []
}, context)
```

#### Input
* input `object`
  * body **required** [connectorder-list](#connectorder-list)

#### Output
*Output schema unknown*

### order_time_updated.post
Callback to notify recipients that there has been a change to the restaurant order times for a given day and service type


```js
just_eat.order_time_updated.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [order-time-updated](#order-time-updated)

#### Output
*Output schema unknown*

### orders.post
Create order


```js
just_eat.orders.post({
  "body": {
    "OrderReference": "",
    "TotalPrice": 0,
    "Restaurant": null,
    "Customer": {
      "Name": "",
      "PhoneNumber": "",
      "Address": {
        "Lines": [],
        "City": "",
        "PostalCode": ""
      }
    },
    "Fulfilment": {
      "Method": "",
      "DueDate": ""
    },
    "Payment": {
      "Lines": []
    },
    "Items": []
  }
}, context)
```

#### Input
* input `object`
  * x-je-api-version `number`: The api version to use. Version 2.0 is the only available version.
  * body **required** [order-request-v2](#order-request-v2)

#### Output
* output `object`
  * OrderId `string`

### orders.deliverystate.driverlocation.put
Current driver location (bulk upload)


```js
just_eat.orders.deliverystate.driverlocation.put({
  "body": []
}, context)
```

#### Input
* input `object`
  * body **required** [bulk-delivery-details-list](#bulk-delivery-details-list)

#### Output
*Output schema unknown*

### orders.orderId.accept.put
Call when an order has been accepted. An order can only be accepted if it hasn't previously been accepted, rejected, cancelled or ignored


```js
just_eat.orders.orderId.accept.put({
  "orderId": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * orderId **required** `string`
  * body **required** [order-accept-request](#order-accept-request)

#### Output
*Output schema unknown*

### orders.orderId.cancel.put
Call when an order has been cancelled by Ops. Cancelling an order overrides any previous accept/reject calls. This should not be used for restaurant rejection but only from Ops involvement


```js
just_eat.orders.orderId.cancel.put({
  "orderId": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * orderId **required** `string`
  * body **required** [order-cancel-request](#order-cancel-request)

#### Output
*Output schema unknown*

### orders.orderId.complete.post
Call when an order is complete. An order can only be marked as complete if it hasn't already been marked as cancelled or complete.


```js
just_eat.orders.orderId.complete.post({
  "orderId": ""
}, context)
```

#### Input
* input `object`
  * orderId **required** `string`: The ID of the order to mark as complete

#### Output
*Output schema unknown*

### orders.orderId.deliverystate.atdeliveryaddress.put
<p>The _at delivery address_ callback should be sent when the driver thinks that they have arrived at the specified delivery address.</p><p>NB&semi; This callback should be distinct from the delivered callback, as Just Eat use this callback to understand how much time is spent locating the customer's address.</p>


```js
just_eat.orders.orderId.deliverystate.atdeliveryaddress.put({
  "orderId": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * orderId **required** `string`: Just Eat order identifier
  * body **required** [delivery-details](#delivery-details)

#### Output
*Output schema unknown*

### orders.orderId.deliverystate.atrestaurant.put
The _at restaurant_ callback should be sent when the driver arrives at the restaurant and is ready to collect the order.


```js
just_eat.orders.orderId.deliverystate.atrestaurant.put({
  "orderId": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * orderId **required** `string`: Just Eat order identifier
  * body **required** [delivery-driver-details-with-eta](#delivery-driver-details-with-eta)

#### Output
*Output schema unknown*

### orders.orderId.deliverystate.atrestauranteta.put
<p>In the UK, this endpoint updates the estimated arrival time at the restaurant. This value can be overridden from other endpoints like <a href="https://uk.api.just-eat.io/docs#tag/Order-Delivery-API/paths/~1orders~1{orderId}~1deliverystate~1driverlocation/put">Driver Locations</a> </p> <p> This endpoint should be used to set initial at restaurant ETAs prior to driver assignment where available. The earlier a delivery partner is able to provide an estimate of when the driver will arrive at the restaurant the more likely it is that driver arrival and order preparation will be aligned. </p> <p> In other tenants (Not UK):Note that if set for a given order, this Eta will NOT be overridden by any other at restaurant Etas provided in DriverAssigned or DriverLocation requests</p> <p>This value is significant since it informs when a restaurant is instructed to start preparing food. When the time remaining between current time and the estimated time of arrival becomes less than the restaurant's configured preparation time, food preparation is initiated</p>


```js
just_eat.orders.orderId.deliverystate.atrestauranteta.put({
  "orderId": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * orderId **required** `string`: Just Eat order identifier
  * body **required** [eta-estimate](#eta-estimate)

#### Output
*Output schema unknown*

### orders.orderId.deliverystate.delivered.put
The _delivered_ callback should be sent when the driver has handed the food to the customer and completed the order.


```js
just_eat.orders.orderId.deliverystate.delivered.put({
  "orderId": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * orderId **required** `string`: Just Eat order identifier
  * body **required** [delivery-details](#delivery-details)

#### Output
*Output schema unknown*

### orders.orderId.deliverystate.driverassigned.put
The _driver assigned_ callback should be sent when a driver is assigned to the order. It should communicate important details about the driver - and also an estimated time for the driver to arrive at the restaurant and delivery address.


```js
just_eat.orders.orderId.deliverystate.driverassigned.put({
  "orderId": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * orderId **required** `string`: Just Eat order identifier
  * body **required** [delivery-driver-assigned-details](#delivery-driver-assigned-details)

#### Output
*Output schema unknown*

### orders.orderId.deliverystate.driverlocation.put
<p>Just Eat requires all delivery partners to send regular driverlocation callbacks, that record the GPS location of the drivers assigned to each order</p><p>Partners should aim to supply this callback approximately every 10 seconds.</p><p>Please provide an up-to-date ETA for when the driver will reach the restaurant in this request - this value is significant since it informs when a restaurant is instructed to start preparing food - when the time remaining between current time and the estimated time of arrival becomes less than the restaurant's configured preparation time, food preparation is initiated</p><p>Note that at restaurant Eta provided in this request will NOT override any ETA set in the Driver At Restaurant Eta request</p>


```js
just_eat.orders.orderId.deliverystate.driverlocation.put({
  "orderId": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * orderId **required** `string`: Just Eat order identifier
  * body **required** [delivery-driver-location](#delivery-driver-location)

#### Output
*Output schema unknown*

### orders.orderId.deliverystate.driverunassigned.put
The _driver unassigned_ callback should be sent when a driver is unassigned from the order. It may details about the reason for cancelling the assignment, the driver details, and any newer at restaurant and customer estimations.


```js
just_eat.orders.orderId.deliverystate.driverunassigned.put({
  "orderId": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * orderId **required** `string`: Just Eat order identifier
  * body **required** [delivery-driver-unassigned-details](#delivery-driver-unassigned-details)

#### Output
*Output schema unknown*

### orders.orderId.deliverystate.onitsway.put
The _on its way_ callback should be sent when the driver departs the restaurant with the customer's order. It should contain an ETA that records when the driver expects to arrive at the customer's address.


```js
just_eat.orders.orderId.deliverystate.onitsway.put({
  "orderId": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * orderId **required** `string`
  * body **required** [on-its-way-details](#on-its-way-details)

#### Output
*Output schema unknown*

### orders.orderId.duedate.put
Use this to update the estimated time of arrival for an order (i.e. when you expect the customer to receive the food). NOTE: An initial estimate is given [upon acceptance](#/paths/~1orders~1{orderId}~1accept/put). This endpoint can be used to update that estimate.



```js
just_eat.orders.orderId.duedate.put({
  "orderId": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * orderId **required** `string`
  * body **required** [order-due-date-request](#order-due-date-request)

#### Output
*Output schema unknown*

### orders.orderId.ignore.put
Call when an order has been ignored by restaurant. An order can only be ignored if it hasn't previously been accepted, rejected, cancelled or ignored


```js
just_eat.orders.orderId.ignore.put({
  "orderId": ""
}, context)
```

#### Input
* input `object`
  * orderId **required** `string`

#### Output
*Output schema unknown*

### orders.orderId.readyforcollection.post
Call when a collection order is ready to be collected by the customer. An order can only be marked as ready for collection if it is a collection order in the accepted state.


```js
just_eat.orders.orderId.readyforcollection.post({
  "orderId": ""
}, context)
```

#### Input
* input `object`
  * orderId **required** `string`: The ID of the order to mark as ready for collection

#### Output
*Output schema unknown*

### orders.orderId.reject.put
Call when an order has been rejected. An order can only be rejected if it hasn't previously been accepted, rejected, cancelled or ignored


```js
just_eat.orders.orderId.reject.put({
  "orderId": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * orderId **required** `string`
  * body **required** [order-reject-request](#order-reject-request)

#### Output
*Output schema unknown*

### orders.orderId.status.put
Set Order status


```js
just_eat.orders.orderId.status.put({
  "orderId": "",
  "partnerId": 0,
  "body": {
    "Status": "",
    "TimeStamp": ""
  }
}, context)
```

#### Input
* input `object`
  * orderId **required** `string`
  * partnerId **required** `integer`
  * body **required** [order-status-request](#order-status-request)

#### Output
*Output schema unknown*

### orders.tenant.orderId.consumerqueries.lateorder.restaurantresponse.post
If a customer has requested an update on the status of a late order, a response can be given by calling this endpoint.


```js
just_eat.orders.tenant.orderId.consumerqueries.lateorder.restaurantresponse.post({
  "tenant": "",
  "orderId": "",
  "Authorization": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * tenant **required** `string`: Request tenant.
  * orderId **required** `string`: Id for the order.
  * Authorization **required** `string`: Containing a partner issued API key e.g. JE-API-KEY ABCDE123456789
  * body **required** [LateOrderRestaurantResponse](#lateorderrestaurantresponse)

#### Output
*Output schema unknown*

### orders.tenant.orderId.consumerqueries.lateordercompensation.restaurantresponse.post
If a customer has requested compensation for a late order, a restaurant response is given by calling this endpoint.


```js
just_eat.orders.tenant.orderId.consumerqueries.lateordercompensation.restaurantresponse.post({
  "tenant": "",
  "orderId": "",
  "Authorization": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * tenant **required** `string`: Request tenant.
  * orderId **required** `string`: Id for the order.
  * Authorization **required** `string`: Containing a partner issued API key e.g. JE-API-KEY ABCDE123456789
  * body **required** [LateOrderCompensationRestaurantResolution](#lateordercompensationrestaurantresolution)

#### Output
*Output schema unknown*

### orders.tenant.orderId.restaurantqueries.compensation.post
When an order is cancelled the restaurant might be eligible for compensation, this endpoint allows a request for compensation to be created.


```js
just_eat.orders.tenant.orderId.restaurantqueries.compensation.post({
  "tenant": "",
  "orderId": "",
  "Authorization": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * tenant **required** `string`: Request tenant.
  * orderId **required** `string`: Id for the order.
  * Authorization **required** `string`: Containing a partner issued API key e.g. JE-API-KEY ABCDE123456789
  * body **required** [CreateRestaurantCompensationQuery](#createrestaurantcompensationquery)

#### Output
*Output schema unknown*

### redelivery_requested.put
This webhook will be invoked whenever the customer responds to the attempted delivery notification.


```js
just_eat.redelivery_requested.put({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [attempted-delivery-response-received](#attempted-delivery-response-received)

#### Output
*Output schema unknown*

### restaurant_offline_status.put
Callback to notify that a restaurant has been taken offline through an active Restaurant Event or there's been a change in whether the restaurant can override a previous offline status.


```js
just_eat.restaurant_offline_status.put({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [RestaurantOfflineStatus](#restaurantofflinestatus)

#### Output
*Output schema unknown*

### restaurant_online_status.put
Callback to notify that a restaurant is now able to come back online as there are no longer any active offline Restaurant Events


```js
just_eat.restaurant_online_status.put({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [RestaurantOfflineStatus](#restaurantofflinestatus)

#### Output
*Output schema unknown*

### SearchByLocation
Provides details of all restaurants that deliver to the specified location


```js
just_eat.SearchByLocation({
  "Authorization": "",
  "latitude": 0,
  "longitude": 0
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: OAuth2 token issued for logged in consumer or API key issued to partner
  * Accept-Tenant `string`: A valid country code, e.g. "uk". Filter search results to only include restaurants for the specified country. Required when using OAuth for authentication.
  * latitude **required** `number`: Filter search results to only include restaurants that deliver to the specified location
  * longitude **required** `number`: Filter search results to only include restaurants that deliver to the specified location
  * cuisine `string`: Filter search results to only include restaurants that offer the specified cuisine
  * restaurantName `string`: Filter search results to only include restaurants that have a name that matches the specified value
  * brandName `string`: Filter search results to only include restaurants of the specified brand

#### Output
*Output schema unknown*

### SearchByPostcode
Provides details of restaurants that deliver to the specified postcode


```js
just_eat.SearchByPostcode({
  "postcode": ""
}, context)
```

#### Input
* input `object`
  * Authorization `string`: OAuth2 token issued for logged in consumer or API key issued to partner
  * Accept-Tenant `string`: A valid country code, e.g. "uk". Filter search results to only include restaurants for the specified country. Required when using OAuth for authentication.
  * postcode **required** `string`: Filter search results to only include restaurants that deliver to the specified postcode
  * cuisine `string`: Filter search results to only include restaurants that offer the specified cuisine
  * restaurantName `string`: Filter search results to only include restaurants that have a name that matches the specified value
  * brandName `string`: Filter search results to only include restaurants of the specified brand

#### Output
*Output schema unknown*

### restaurants.driver.eta.put
Set the average amount of time it will take a driver to collect a new order from a restaurant.


```js
just_eat.restaurants.driver.eta.put({
  "body": []
}, context)
```

#### Input
* input `object`
  * body **required** [RestaurantETAs](#restaurantetas)

#### Output
* output [IgnoredRestaurantIds](#ignoredrestaurantids)

### restaurants.restaurantId.food_safety.addons.get
Get all addon's food safety information for a restaurant


```js
just_eat.restaurants.restaurantId.food_safety.addons.get({
  "restaurantId": ""
}, context)
```

#### Input
* input `object`
  * restaurantId **required** `string`: Restaurant Id (Encrypted)
  * select `string`: If not provided will bring all data.
  * limit `integer`: The maximum number of records to fetch.
  * after `string`: Value representing a cursor - position to use when retrieving the next page of data. If provided, the value of this parameter must be URL encoded.
  * Accept `string`: Indicates what type of response client understands and is also used for content type negotiation (if version is specified), otherwise tells the server to return the latest version

#### Output
* output [PagedFoodSafetyResponse](#pagedfoodsafetyresponse)

### restaurants.restaurantId.food_safety.addons.addonId.get
Get a single addon's food safety information for a restaurant


```js
just_eat.restaurants.restaurantId.food_safety.addons.addonId.get({
  "restaurantId": "",
  "addonId": ""
}, context)
```

#### Input
* input `object`
  * restaurantId **required** `string`: Restaurant Id (Encrypted)
  * addonId **required** `string`: Addon Id (Encrypted)
  * select `string`: If not provided will bring all data.
  * Accept `string`: Indicates what type of response client understands and is also used for content type negotiation (if version is specified), otherwise tells the server to return the latest version

#### Output
* output [ProductFoodSafety](#productfoodsafety)

### restaurants.restaurantId.food_safety.products.get
Get all product's food safety information for a restaurant


```js
just_eat.restaurants.restaurantId.food_safety.products.get({
  "restaurantId": ""
}, context)
```

#### Input
* input `object`
  * restaurantId **required** `string`: Restaurant Id (Encrypted)
  * select `string`: If not provided will bring all data.
  * limit `integer`: The maximum number of records to fetch.
  * after `string`: Value representing a cursor - position to use when retrieving the next page of data. If provided, the value of this parameter must be URL encoded.
  * Accept `string`: Indicates what type of response client understands and is also used for content type negotiation (if version is specified), otherwise tells the server to return the latest version

#### Output
* output [PagedFoodSafetyResponse](#pagedfoodsafetyresponse)

### restaurants.restaurantId.food_safety.products.productId.get
Get a single product's food safety information for a restaurant


```js
just_eat.restaurants.restaurantId.food_safety.products.productId.get({
  "restaurantId": "",
  "productId": ""
}, context)
```

#### Input
* input `object`
  * restaurantId **required** `string`: Restaurant Id (Encrypted)
  * productId **required** `string`: Product Id (Encrypted)
  * select `string`: If not provided will bring all data.
  * Accept `string`: Indicates what type of response client understands and is also used for content type negotiation (if version is specified), otherwise tells the server to return the latest version

#### Output
* output [ProductFoodSafety](#productfoodsafety)

### restaurants.tenant.restaurantId.catalogue.get
Get details of the restaurant's product catalogue


```js
just_eat.restaurants.tenant.restaurantId.catalogue.get({
  "tenant": "",
  "restaurantId": ""
}, context)
```

#### Input
* input `object`
  * tenant **required** `string`: Request tenant.
  * restaurantId **required** `string`: The restaurant Id.

#### Output
* output [MenuBase](#menubase)

### restaurants.tenant.restaurantId.catalogue.availabilities.get
Get all availabilities on the restaurant's menu


```js
just_eat.restaurants.tenant.restaurantId.catalogue.availabilities.get({
  "tenant": "",
  "restaurantId": "",
  "limit": 0
}, context)
```

#### Input
* input `object`
  * tenant **required** `string`: Request tenant.
  * restaurantId **required** `string`: The restaurant Id.
  * limit **required** `integer`: The maximum number of availabilities to fetch.
  * after `string`: Value representing a cursor - position to use when retrieving the next page of data. If provided, the value of this parameter must be URL encoded.

#### Output
* output [PagedAvailabilitiesResponse](#pagedavailabilitiesresponse)

### restaurants.tenant.restaurantId.catalogue.categories.get
Get all categories on the restaurant's menu


```js
just_eat.restaurants.tenant.restaurantId.catalogue.categories.get({
  "tenant": "",
  "restaurantId": "",
  "limit": 0
}, context)
```

#### Input
* input `object`
  * tenant **required** `string`: Request tenant.
  * restaurantId **required** `string`: The restaurant Id.
  * limit **required** `integer`: The maximum number of categories to fetch.
  * after `string`: Value representing a cursor - position to use when retrieving the next page of data. If provided, the value of this parameter must be URL encoded.

#### Output
* output [PagedCategoriesResponse](#pagedcategoriesresponse)

### restaurants.tenant.restaurantId.catalogue.categories.categoryId.items.get
Get all item IDs which are assigned to the specified category


```js
just_eat.restaurants.tenant.restaurantId.catalogue.categories.categoryId.items.get({
  "tenant": "",
  "restaurantId": "",
  "categoryId": "",
  "limit": 0
}, context)
```

#### Input
* input `object`
  * tenant **required** `string`: Request tenant.
  * restaurantId **required** `string`: The restaurant ID.
  * categoryId **required** `string`: The category ID.
  * limit **required** `integer`: The maximum number of item IDs to fetch.
  * after `string`: Value representing a cursor - position to use when retrieving the next page of data. If provided, the value of this parameter must be URL encoded.

#### Output
* output [PagedCategoryItemsResponse](#pagedcategoryitemsresponse)

### restaurants.tenant.restaurantId.catalogue.items.get
Get all menu items on the restaurant's menu


```js
just_eat.restaurants.tenant.restaurantId.catalogue.items.get({
  "tenant": "",
  "restaurantId": "",
  "limit": 0
}, context)
```

#### Input
* input `object`
  * tenant **required** `string`: Request tenant.
  * restaurantId **required** `string`: The restaurant Id.
  * limit **required** `integer`: The maximum number of menu items to fetch.
  * after `string`: Value representing a cursor - position to use when retrieving the next page of data. If provided, the value of this parameter must be URL encoded.

#### Output
* output [PagedMenuItemsResponse](#pagedmenuitemsresponse)

### restaurants.tenant.restaurantId.catalogue.items.itemId.dealgroups.get
Get all deal groups for the menu item with the provided ID


```js
just_eat.restaurants.tenant.restaurantId.catalogue.items.itemId.dealgroups.get({
  "tenant": "",
  "restaurantId": "",
  "itemId": "",
  "limit": 0
}, context)
```

#### Input
* input `object`
  * tenant **required** `string`: Request tenant
  * restaurantId **required** `string`: The restaurant ID
  * itemId **required** `string`: The menu item ID
  * limit **required** `integer`: The maximum number of menu items to fetch.
  * after `string`: Value representing a cursor - position to use when retrieving the next page of data. If provided, the value of this parameter must be URL encoded.

#### Output
* output [PagedMenuDealGroupsResponse](#pagedmenudealgroupsresponse)

### restaurants.tenant.restaurantId.catalogue.items.itemId.dealgroups.dealGroupId.dealitemvariations.get
Get all deal item variations for the deal group with the specified ID, in the menu item with the specified ID


```js
just_eat.restaurants.tenant.restaurantId.catalogue.items.itemId.dealgroups.dealGroupId.dealitemvariations.get({
  "tenant": "",
  "restaurantId": "",
  "itemId": "",
  "dealGroupId": "",
  "limit": 0
}, context)
```

#### Input
* input `object`
  * tenant **required** `string`: Request tenant
  * restaurantId **required** `string`: The restaurant ID
  * itemId **required** `string`: The menu item ID
  * dealGroupId **required** `string`: The menu item ID
  * limit **required** `integer`: The maximum number of menu items to fetch.
  * after `string`: Value representing a cursor - position to use when retrieving the next page of data. If provided, the value of this parameter must be URL encoded.

#### Output
* output [PagedDealItemVariationResponse](#pageddealitemvariationresponse)

### restaurants.tenant.restaurantId.catalogue.items.itemId.modifiergroups.get
Get all modifier groups for the menu item with the provided ID


```js
just_eat.restaurants.tenant.restaurantId.catalogue.items.itemId.modifiergroups.get({
  "tenant": "",
  "restaurantId": "",
  "itemId": "",
  "limit": 0
}, context)
```

#### Input
* input `object`
  * tenant **required** `string`: Request tenant
  * restaurantId **required** `string`: The restaurant ID
  * itemId **required** `string`: The menu item ID
  * limit **required** `integer`: The maximum number of menu items to fetch.
  * after `string`: Value representing a cursor - position to use when retrieving the next page of data. If provided, the value of this parameter must be URL encoded.

#### Output
* output [PagedMenuModifierGroupsResponse](#pagedmenumodifiergroupsresponse)

### restaurants.tenant.restaurantId.catalogue.items.itemId.variations.get
Get all variations for the menu item with the provided ID


```js
just_eat.restaurants.tenant.restaurantId.catalogue.items.itemId.variations.get({
  "tenant": "",
  "restaurantId": "",
  "itemId": "",
  "limit": 0
}, context)
```

#### Input
* input `object`
  * tenant **required** `string`: Request tenant
  * restaurantId **required** `string`: The restaurant ID
  * itemId **required** `string`: The menu item ID
  * limit **required** `integer`: The maximum number of menu items to fetch.
  * after `string`: Value representing a cursor - position to use when retrieving the next page of data. If provided, the value of this parameter must be URL encoded.

#### Output
* output [PagedVariationsResponse](#pagedvariationsresponse)

### restaurants.tenant.restaurantId.customerclaims.get
Provides claims for a given restaurant with optional filtering


```js
just_eat.restaurants.tenant.restaurantId.customerclaims.get({
  "tenant": "",
  "restaurantId": ""
}, context)
```

#### Input
* input `object`
  * tenant **required** `string`: Two letter code indicating the tenant
  * restaurantId **required** `string`: Just Eat restaurant identifier
  * fromDate `string`: Start date limiter
  * toDate `string`: End date limiter
  * limit `integer`: Pagination limit
  * offset `integer`: Pagination offset
  * Accept `string`: Indicates what type of response client understands and is also used for content type negotiation (if version is specified), otherwise tells the server to return the latest version

#### Output
* output [ClaimsResponse](#claimsresponse)

### restaurants.tenant.restaurantId.customerclaims.orderclaims.id.get
Get information about a order claim


```js
just_eat.restaurants.tenant.restaurantId.customerclaims.orderclaims.id.get({
  "tenant": "",
  "restaurantId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * tenant **required** `string`: Two letter code indicating the tenant
  * restaurantId **required** `string`: Just Eat restaurant identifier
  * id **required** `string`: Claim identifier
  * Accept `string`: Indicates what type of response client understands and is also used for content type negotiation (if version is specified), otherwise tells the server to return the latest version

#### Output
* output [OrderClaim](#orderclaim)

### restaurants.tenant.restaurantId.customerclaims.orderclaims.id.restaurantresponse.post
Submit a restaurant response for the claim, where the restaurant can tell us if they accept or reject the claim


```js
just_eat.restaurants.tenant.restaurantId.customerclaims.orderclaims.id.restaurantresponse.post({
  "tenant": "",
  "restaurantId": "",
  "id": "",
  "Content-Type": ""
}, context)
```

#### Input
* input `object`
  * tenant **required** `string`: Two letter code indicating the tenant
  * restaurantId **required** `string`: Just Eat restaurant identifier
  * id **required** `string`: Claim identifier
  * Content-Type **required** `string`: Indicates the representation of the request body the client is sending (including version)
  * body [OrderClaimRestaurantResponse](#orderclaimrestaurantresponse)

#### Output
*Output schema unknown*

### restaurants.tenant.restaurantId.customerclaims.orderclaims.id.restaurantresponse.justification.put
Add reason and optional comments in case of rejection of order claim


```js
just_eat.restaurants.tenant.restaurantId.customerclaims.orderclaims.id.restaurantresponse.justification.put({
  "tenant": "",
  "restaurantId": "",
  "id": "",
  "Content-Type": ""
}, context)
```

#### Input
* input `object`
  * tenant **required** `string`: Two letter code indicating the tenant
  * restaurantId **required** `string`: Just Eat restaurant identifier
  * id **required** `string`: Claim identifier
  * Content-Type **required** `string`: Indicates the representation of the request body the client is sending (including version)
  * body [Justification](#justification)

#### Output
*Output schema unknown*

### restaurants.tenant.restaurantId.customerclaims.orderitemsclaims.id.get
Get information about a order items claim


```js
just_eat.restaurants.tenant.restaurantId.customerclaims.orderitemsclaims.id.get({
  "tenant": "",
  "restaurantId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * tenant **required** `string`: Two letter code indicating the tenant
  * restaurantId **required** `string`: Just Eat restaurant identifier
  * id **required** `string`: Claim identifier
  * Accept `string`: Indicates what type of response client understands and is also used for content type negotiation (if version is specified), otherwise tells the server to return the latest version

#### Output
* output [OrderItemsClaim](#orderitemsclaim)

### restaurants.tenant.restaurantId.customerclaims.orderitemsclaims.id.restaurantresponse.post
Submit a restaurant response for the claim


```js
just_eat.restaurants.tenant.restaurantId.customerclaims.orderitemsclaims.id.restaurantresponse.post({
  "tenant": "",
  "restaurantId": "",
  "id": "",
  "Content-Type": ""
}, context)
```

#### Input
* input `object`
  * tenant **required** `string`: Two letter code indicating the tenant
  * restaurantId **required** `string`: Just Eat restaurant identifier
  * id **required** `string`: Claim identifier
  * Content-Type **required** `string`: Indicates the representation of the request body the client is sending (including version)
  * body [OrderItemsClaimRestaurantResponse](#orderitemsclaimrestaurantresponse)

#### Output
*Output schema unknown*

### restaurants.tenant.restaurantId.customerclaims.orderitemsclaims.id.restaurantresponse.justification.put
Add reason and comments to the response


```js
just_eat.restaurants.tenant.restaurantId.customerclaims.orderitemsclaims.id.restaurantresponse.justification.put({
  "tenant": "",
  "restaurantId": "",
  "id": "",
  "Content-Type": ""
}, context)
```

#### Input
* input `object`
  * tenant **required** `string`: Two letter code indicating the tenant
  * restaurantId **required** `string`: Just Eat restaurant identifier
  * id **required** `string`: Claim identifier
  * Content-Type **required** `string`: Indicates the representation of the request body the client is sending (including version)
  * body [Justification](#justification)

#### Output
*Output schema unknown*

### restaurants.tenant.restaurantId.menu.get
The endpoint will return a 301 redirect containing a URL that will grant access to the Menu file. The URL will only be available for a short period of time. The Menu file will be a single document containing the information that Just Eat has and uses to display the Menu on our customer clients. This will include a collection of items, a collection of Categories and a collection of Availabilities for when the items are available. Partners will be able to retrieve the Menu for any Restaurants that they currently manage.


```js
just_eat.restaurants.tenant.restaurantId.menu.get({
  "tenant": "",
  "restaurantId": "",
  "Authorization": ""
}, context)
```

#### Input
* input `object`
  * tenant **required** `string`: The tenant of the restaurant in which to put a menu
  * restaurantId **required** `string`: The restaurant identifier to associated with the menu
  * Authorization **required** `string`: Containing a partner issued API key e.g. Bearer ABCDE123456789

#### Output
* output [Menu](#menu)

### putMenuForIngestion
Ingest a menu and begin an asynchronous process that will lead to that menu becoming live on the Just Eat platform


```js
just_eat.putMenuForIngestion({
  "tenant": "",
  "restaurantId": "",
  "Authorization": ""
}, context)
```

#### Input
* input `object`
  * tenant **required** `string`: The tenant of the restaurant in which to put a menu
  * restaurantId **required** `string`: The restaurant identifier to associated with the menu
  * Authorization **required** `string`: Containing a partner issued API key e.g. JE-API-KEY ABCDE123456789
  * Content-Type `string`: Used to denote the version of the menu payload within the body, will default to latest if not supplied e.g. application/=1.0
  * body [Menu](#menu)

#### Output
* output [MenuIngestionResponse](#menuingestionresponse)

### GetCampaigns
Get Offer Campaigns available for the restaurant


```js
just_eat.GetCampaigns({
  "tenant": "",
  "restaurantId": "",
  "Authorization": ""
}, context)
```

#### Input
* input `object`
  * tenant **required** `string`: A valid country code, e.g. "uk".
  * restaurantId **required** `string`: The unique-per-tenant restaurantId.
  * Authorization **required** `string`: Containing a partner issued API key e.g. JE-API-KEY ABCDE123456789

#### Output
* output [OfferCampaignsResponse](#offercampaignsresponse)

### Subscribe
Subscribe restaurant to Campaign.


```js
just_eat.Subscribe({
  "tenant": "",
  "restaurantId": "",
  "campaignId": "",
  "Authorization": ""
}, context)
```

#### Input
* input `object`
  * tenant **required** `string`: A valid country code, e.g. "uk".
  * restaurantId **required** `string`: The unique-per-tenant restaurantId.
  * campaignId **required** `string`: Id of the campaign
  * Authorization **required** `string`: Containing a partner issued API key e.g. JE-API-KEY ABCDE123456789

#### Output
*Output schema unknown*

### Unsubscribe
Unsubscribe restaurant from Campaign.


```js
just_eat.Unsubscribe({
  "tenant": "",
  "restaurantId": "",
  "campaignId": "",
  "Authorization": ""
}, context)
```

#### Input
* input `object`
  * tenant **required** `string`: A valid country code, e.g. "uk".
  * restaurantId **required** `string`: The unique-per-tenant restaurantId.
  * campaignId **required** `string`: Id of the campaign
  * Authorization **required** `string`: Containing a partner issued API key e.g. JE-API-KEY ABCDE123456789

#### Output
*Output schema unknown*

### GetAllOfferTemplates
Get list of all available offer templates for the restaurant


```js
just_eat.GetAllOfferTemplates({
  "tenant": "",
  "restaurantId": "",
  "Authorization": ""
}, context)
```

#### Input
* input `object`
  * tenant **required** `string`: A valid country code, e.g. "uk".
  * restaurantId **required** `string`: The unique-per-tenant restaurantId.
  * Authorization **required** `string`: Containing a partner issued API key e.g. JE-API-KEY ABCDE123456789

#### Output
* output [OfferTemplatesResponse](#offertemplatesresponse)

### GetOffers
Get list of offers running for the restaurant


```js
just_eat.GetOffers({
  "tenant": "",
  "restaurantId": "",
  "Authorization": ""
}, context)
```

#### Input
* input `object`
  * tenant **required** `string`: A valid country code, e.g. "uk".
  * restaurantId **required** `string`: The unique-per-tenant restaurantId.
  * Authorization **required** `string`: Containing a partner issued API key e.g. JE-API-KEY ABCDE123456789

#### Output
* output [OffersResponse](#offersresponse)

### CreateOffers
Creates an offer for a restaurant. Each day represents an offer slot, and a restaurant has a maximum of 35 offer slots available. E.g. If I create an Offer for Monday and Tuesday, then that will use 2 offer slots. If all 35 offer slots have been used, then an offer will need to be deleted to free up offer slots.


```js
just_eat.CreateOffers({
  "tenant": "",
  "restaurantId": "",
  "Authorization": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * tenant **required** `string`: A valid country code, e.g. "uk".
  * restaurantId **required** `string`: The unique-per-tenant restaurantId.
  * Authorization **required** `string`: Containing a partner issued API key e.g. JE-API-KEY ABCDE123456789
  * body **required** [CreateOffersRequest](#createoffersrequest)

#### Output
* output [Offer](#offer)

### DeleteOfferGroup
Delete offer by id for the restaurant


```js
just_eat.DeleteOfferGroup({
  "tenant": "",
  "restaurantId": "",
  "id": "",
  "Authorization": ""
}, context)
```

#### Input
* input `object`
  * tenant **required** `string`: A valid country code, e.g. "uk".
  * restaurantId **required** `string`: The unique-per-tenant restaurantId.
  * id **required** `string`: Internal id of the offer
  * Authorization **required** `string`: Containing a partner issued API key e.g. JE-API-KEY ABCDE123456789

#### Output
*Output schema unknown*

### GetOrderTimes
Get list of the delivery and collection lead times supplied by the restaurant


```js
just_eat.GetOrderTimes({
  "tenant": "",
  "restaurantId": "",
  "Authorization": ""
}, context)
```

#### Input
* input `object`
  * tenant **required** `string`: A valid country code, e.g. "uk".
  * restaurantId **required** `string`: The restaurant Id.
  * Authorization **required** `string`: OAuth2 token issued for logged in restaurant

#### Output
* output `array`
  * items [orderTime](#ordertime)

### UpdateOrderTime
Update the restaurant's delivery and collection lead times


```js
just_eat.UpdateOrderTime({
  "tenant": "",
  "restaurantId": "",
  "dayOfWeek": "",
  "serviceType": "",
  "Authorization": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * tenant **required** `string`: A valid country code, e.g. "uk".
  * restaurantId **required** `string`: The restaurant Id.
  * dayOfWeek **required** `string` (values: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday): Day of week for order time
  * serviceType **required** `string` (values: Delivery, Collection): Service type of the order time
  * Authorization **required** `string`: OAuth2 token issued for logged in restaurant OR API token for third party, in the format Bearer {api_key}
  * body **required** [updateOrderTimeRequest](#updateordertimerequest)

#### Output
*Output schema unknown*

### getRestaurantServiceTimes
Gets the service times (the weekly times at which a restaurant is in service for delivery or collection) for a restaurant


```js
just_eat.getRestaurantServiceTimes({
  "tenant": "",
  "restaurantId": ""
}, context)
```

#### Input
* input `object`
  * tenant **required** `string`: Two letter code of restaurant's tenant
  * restaurantId **required** `string`: The restaurant identifier

#### Output
* output [ServiceTimes](#servicetimes)

### putRestaurantServiceTimes
Creates or updates the service times (the weekly times at which a restaurant is in service for delivery or collection) for a restaurant


```js
just_eat.putRestaurantServiceTimes({
  "tenant": "",
  "restaurantId": ""
}, context)
```

#### Input
* input `object`
  * tenant **required** `string`: Two letter code of restaurant's tenant
  * restaurantId **required** `string`: The restaurant identifier
  * body [ServiceTimes](#servicetimes)

#### Output
* output [ServiceTimes](#servicetimes)

### search.autocomplete.tenant.get
Provides auto-completed search terms for restaurants, cuisines and products available in a given location.


```js
just_eat.search.autocomplete.tenant.get({
  "tenant": "",
  "searchTerm": "",
  "latlong": []
}, context)
```

#### Input
* input `object`
  * tenant **required** `string`: A valid country code, e.g. "uk".
  * searchTerm **required** `string`: User's search term - at least one character required
  * latlong **required** `array`: The latitude and longitude coordinates of the location in which to search.
  * limit `number`: Limit the number of auto-completed terms returned by the API. Defaults to 7. Valid values 1 - 10

#### Output
* output [AutoCompleteSearchResponse](#autocompletesearchresponse)

### search.restaurants.tenant.get
Get restaurants available in a given lat-long which match a search term.
Matches can be found against the name, a cuisine or a product.


```js
just_eat.search.restaurants.tenant.get({
  "tenant": "",
  "searchTerm": "",
  "latlong": []
}, context)
```

#### Input
* input `object`
  * tenant **required** `string`: A valid country code, e.g. "uk".
  * searchTerm **required** `string`: User's search term.
  * latlong **required** `array`: The latitude and longitude coordinates of the location in which to search.
  * limit `number`: Limit the number of restaurants returned by the API.

#### Output
* output [RestaurantSearchResponse](#restaurantsearchresponse)

### send_to_pos_failed.post
This webhook will be invoked if we experience an error or timeout in sending an order to the underlying POS / kitchen screen. When notified via this webhook, typically you will perform some form of alerting or backup flow (e.g. ask the operator to enter the order manually into the POS). NOTE: This message contains the `OrderId`, but not the full order. It is assumed that you have stored/cached the full order details earlier in the flow - e.g. via the [/order-ready-for-preparation](#/paths/~1order-ready-for-preparation-sync/post) webhook.


```js
just_eat.send_to_pos_failed.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [send-to-pos-failed](#send-to-pos-failed)

#### Output
*Output schema unknown*

### v1.tenant.restaurants.event.offline.post
Creates an event for the specified restaurants that indicates a reason for those restaurants to be offline.


```js
just_eat.v1.tenant.restaurants.event.offline.post({
  "tenant": "",
  "X-JE-Requester": "",
  "X-JE-User-Role": "",
  "body": {
    "restaurantIds": "",
    "name": "",
    "reason": "",
    "startDate": "",
    "allowRestaurantOverride": true
  }
}, context)
```

#### Input
* input `object`
  * tenant **required** `string`: The identifier for the tenant
  * X-JE-Requester **required** `string`: Name of the user or system creating the event. Used for auditing purposes
  * X-JE-User-Role **required** `string` (values: System, Operations, Restaurant): 
  * body **required** [OfflineRestaurantsRequestModel](#offlinerestaurantsrequestmodel)

#### Output
* output `object`
  * restaurantEventId `string`: The ID of the offline event created
  * restaurantIds `string`: A CSV of the restaurant IDs added to the offline event

### v1.tenant.restaurants.id.event.offline.delete
Removes specified restaurant from offline events. If role header is `System` or `Operations` only events created by the specified role will be affected. If role header is `Restaurant` then all events that have `allowRestaurantOverride=true` will be affected.


```js
just_eat.v1.tenant.restaurants.id.event.offline.delete({
  "tenant": "",
  "id": "",
  "X-JE-Requester": "",
  "X-JE-User-Role": ""
}, context)
```

#### Input
* input `object`
  * tenant **required** `string`: The identifier for the tenant
  * id **required** `string`: The identifier for the restaurant
  * X-JE-Requester **required** `string`: Name of the user or system creating the event. Used for auditing purposes
  * X-JE-User-Role **required** `string` (values: System, Operations, Restaurant): The role the user or system creating the event has assumed.

#### Output
*Output schema unknown*

### tenant.orders.orderId.queries.attempteddelivery.post
If the customer hasn't answered the door to collect the order, then an attempted delivery event can be created using this endpoint.


```js
just_eat.tenant.orders.orderId.queries.attempteddelivery.post({
  "tenant": "",
  "orderId": "",
  "Authorization": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * tenant **required** `string`: Request tenant eg uk.
  * orderId **required** `string`: Id for the order.
  * Authorization **required** `string`: Containing a partner issued API key e.g. JE-API-KEY ABCDE123456789
  * body **required** [create-attempted-delivery](#create-attempted-delivery)

#### Output
*Output schema unknown*

### tenant.orders.orderId.queries.attempteddelivery.resolution.redeliverorder.post
If the customer responds, then you can trigger the redelivery of an order through this endpoint


```js
just_eat.tenant.orders.orderId.queries.attempteddelivery.resolution.redeliverorder.post({
  "tenant": "",
  "orderId": "",
  "Authorization": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * tenant **required** `string`: Request tenant eg uk.
  * orderId **required** `string`: Id for the order.
  * Authorization **required** `string`: Containing a partner issued API key e.g. JE-API-KEY ABCDE123456789
  * body **required** [resolve-attempted-delivery-redeliver](#resolve-attempted-delivery-redeliver)

#### Output
*Output schema unknown*



## Definitions

### 400CourierSyncErrorResponse
* 400CourierSyncErrorResponse `object`: The error object returned when an operation fails
  * error `string`: Error Title
  * message `string`: Error Message Text

### 400LiveMetricsErrorResponse
* 400LiveMetricsErrorResponse `object`: The error object returned when an operation fails
  * error `string`: Error Title
  * message `string`: Error Message Text

### 400MarketplaceRankingErrorResponse
* 400MarketplaceRankingErrorResponse `object`: The error object returned when an operation fails
  * error `string`: Error Title
  * message `string`: Error Message Text

### 400ZoneProfileErrorResponse
* 400ZoneProfileErrorResponse `object`: The error object returned when an operation fails
  * error `string`: Error Title
  * message `string`: Error Message Text

### 401CourierSyncErrorResponse
* 401CourierSyncErrorResponse `object`: The error object returned when an operation fails
  * error `string`: Error Title
  * message `string`: Error Message Text

### 401LiveMetricsErrorResponse
* 401LiveMetricsErrorResponse `object`: The error object returned when an operation fails
  * error `string`: Error Title
  * message `string`: Error Message Text

### 401MarketplaceRankingErrorResponse
* 401MarketplaceRankingErrorResponse `object`: The error object returned when an operation fails
  * error `string`: Error Title
  * message `string`: Error Message Text

### 401ZoneProfileErrorResponse
* 401ZoneProfileErrorResponse `object`: The error object returned when an operation fails
  * error `string`: Error Title
  * message `string`: Error Message Text

### 404CourierSyncErrorResponse
* 404CourierSyncErrorResponse `object`: The error object returned when an operation fails
  * error `string`: Error Title
  * message `string`: Error Message Text

### 404LiveMetricsErrorResponse
* 404LiveMetricsErrorResponse `object`: The error object returned when an operation fails
  * error `string`: Error Title
  * message `string`: Error Message Text

### 404MarketplaceRankingErrorResponse
* 404MarketplaceRankingErrorResponse `object`: The error object returned when an operation fails
  * error `string`: Error Title
  * message `string`: Error Message Text

### 404ZoneProfileErrorResponse
* 404ZoneProfileErrorResponse `object`: The error object returned when an operation fails
  * error `string`: Error Title
  * message `string`: Error Message Text

### 4XXErrorSchema
* 4XXErrorSchema `object`: A HTTP 4xx error response
  * fault `object`
    * errors `array`
      * items `object`
        * description `string`: Specific details about the error that may assist the you in resolving the issue
        * errorCode `string`: A code that identifies the problem type. It will be supported by human-readable documentation that identifies how to resolve the error
    * faultId **required** `string`: A value that helps identify this response back to logs, so we can easily find this specific fault
    * traceId `string`: A value that helps identify the trace back to logs, so that we can easily find what was happening on our system when the fault was generated

### 500CourierSyncErrorResponse
* 500CourierSyncErrorResponse `object`: The error object returned when an operation fails
  * error `string`: Error Title
  * message `string`: Error Message Text

### 500ErrorSchema
* 500ErrorSchema `object`: A HTTP 500 error response
  * fault `object`
    * errors `array`
      * items `object`
        * description `string` (values: Internal Server Error): If returned, the only value returned will be Internal Server Error"
    * faultId **required** `string`: A value that helps identify this response back to logs, so we can easily find this specific fault
    * traceId `string`: A value that helps identify the trace back to logs, so that we can easily find what was happening on our system when the fault was generated

### 500LiveMetricsErrorResponse
* 500LiveMetricsErrorResponse `object`: The error object returned when an operation fails
  * error `string`: Error Title
  * message `string`: Error Message Text

### 500MarketplaceRankingErrorResponse
* 500MarketplaceRankingErrorResponse `object`: The error object returned when an operation fails
  * error `string`: Error Title
  * message `string`: Error Message Text

### 500ZoneProfileErrorResponse
* 500ZoneProfileErrorResponse `object`: The error object returned when an operation fails
  * error `string`: Error Title
  * message `string`: Error Message Text

### AccountBalanceResponse
* AccountBalanceResponse `object`
  * value `integer`

### ActiveConsumerOffer
* ActiveConsumerOffer `object`
  * $type **required** `string`
  * offerId `string`: Unique Identifier for Offer

### ActiveConsumerOffersByRestaurant
* ActiveConsumerOffersByRestaurant `object`
  * offers `array`: A Collection of Active Offers for RestaurantId
    * items [ActiveConsumerOffer](#activeconsumeroffer)
  * restaurantId `string`: The RestaurantId applicable to the Offer

### ActiveConsumerOffersRequest
* ActiveConsumerOffersRequest `object`
  * applicableDateTimeUtc `string`: This is to support the basket use case, where
  * consumerId `string`: Global Consumer Id
  * restaurantIds **required** `array`: The identifiers of the restaurants. Allows offers to be returned for many restaurants.
    * items `string`

### ActiveConsumerOffersResponse
* ActiveConsumerOffersResponse `object`
  * activeConsumerOffersByRestaurants `array`: A Collection of Active Offers by Restaurant
    * items [ActiveConsumerOffersByRestaurant](#activeconsumeroffersbyrestaurant)

### AddCommentToTicketModel
* AddCommentToTicketModel `object`: Used when Scoober sends a reply about a support incident, to add to a Just Eat Zendesk ticket
  * description **required** `string`: Comment to add to the ticket.
  * externalId **required** `string`: Scoober job reference, or similar ID used by Scoober to identify this ticket.
  * requesterEmail `string`: E-Mail address of the ticket requester.
  * responseUrl **required** `string`: Where should we respond to with progress on this request?
  * status `string`: What status should we set the ticket to: Open, pending or solved.
  * ticketId **required** `integer`: The ticket ID to add the comment to.

### AddMenuView
* AddMenuView `object`
  * anonymousUserId `string`
  * app `string`
  * gaUserId `string`
  * globalUserId `string`
  * isSponsored `boolean`
  * latitude `number`
  * longitude `number`
  * menuDisplayedTimestampUtc `string`
  * outcode `string`
  * searchDisplayedTimestampUtc `string`

### AddReplyMessageModel
* AddReplyMessageModel `object`: Information sent when a Just Eat agent sends a follow up message about a Scoober support ticket to Scoober
  * city `string`: City this order is located in.
  * countryCode `string`: 2-letter ISO code this ticket is about.
  * description **required** `string`: Description, i.e.: main body, of the message.
  * externalId **required** `string`: External ID for this ticket, e.g. Scoober job ID (assigned by them).
  * reason **required** `string`: Scoober contact reason for this ticket.
  * scooberJobId `string`: Scoober job ID for this order.
  * status **required** `string`: Status of the ticket. Can be: New, pending, solved.
  * subject **required** `string`: Subject of the message.
  * ticketId **required** `integer`: Zendesk ticket ID this message is about.

### Additive
* Additive `object`: List of Additives
  * code `string`: Additive code of Takeaway Standard from TMS

### Address
* Address `object`: Address information.
  * address1 `string`: Site's complete street address
  * city `string`: City's name
  * latitude `number`: The address latitude coordinate.
  * longitude `number`: The address longitude coordinate.
  * name `string`: Site's institution name or commercial name.
  * phone `string`: Customer's phone number
  * postalCode `string`: Postal code.
  * province `string`: Province's name
  * specialInstructions `string`: Special instructions for delivery
  * useLatLongAddress `boolean`: When enabled use latitude and longitude address.

### AddressGeocodingRequest
* AddressGeocodingRequest `object`
  * addressLines **required** `array`: Lines of the consumers address, a minimum of 3 is preferred but only 1 is required.
    * items `string`

### Allergen
* Allergen `object`: List of  Allergens
  * code `string`: Allergen code of Takeaway Standard from TMS

### AttemptedDeliveryQuery
* AttemptedDeliveryQuery `object`
  * RequestType `string` (values: problem_with_address, no_answer): Type of attempted delivery request
  * Resolution [AttemptedDeliveryResolution](#attempteddeliveryresolution)
  * Response [AttemptedDeliveryResponse](#attempteddeliveryresponse)
  * TimeStamp `string`: DateTime that the query was created

### AttemptedDeliveryResolution
* AttemptedDeliveryResolution `object`
  * CancellationReason `string` (values: new_address_not_within_area, unable_to_reprepare, driver_not_available, area_unsafe, customer_doesnt_want_anymore): Reason for cancelling order
  * HasBeenMarkedAsOnItsWay `boolean`: Flag to indicate whether redelivery is on it's way
  * RedeliveryStatus `string` (values: driver_at_address, repreparing): Status of the redelivery request
  * RedeliveryTime `string`: Estimated redelivery time

### AttemptedDeliveryResponse
* AttemptedDeliveryResponse `object`
  * IsViewed `boolean`: Has the response been viewed
  * Message `string`: Response message from customer
  * ResponseType `string` (values: response, already_delivered): Response code from the customer for attempted delivery

### AuthorizeResponse
* AuthorizeResponse `object`: The response object for the `authorize` endpoint.

### AutoCompleteSearchResponse
* AutoCompleteSearchResponse `object`
  * terms `array`: Ordered list of suggested term completions
    * items [AutoCompleteSearchResponseItem](#autocompletesearchresponseitem)

### AutoCompleteSearchResponseItem
* AutoCompleteSearchResponseItem `object`
  * classification `string` (values: Restaurant, Cuisine, Dish): Grouping to which term belongs
  * term `string`: Auto-completed search term

### Availability
* Availability `object`
  * description `string`: The description of the availability.
  * id `string`: A unique identifier at menu level for a given availability.
  * name `string`: The name for the availability.
  * serviceTypes `array`: Values can be "collection" or "delivery" and are used to denote what types of service apply to the availability.
    * items `string` (values: collection, delivery)
  * times `array`: An array of times when the availability is active.
    * items [Time](#time)

### BadItem
* BadItem `object`
  * Name `string`: Name of the item
  * Quantity `integer`: Quantity of bad items
  * TotalCost `number`: Total cost of all bad items
  * UnitPrice `number`: Price of a single item in local currency

### BadItemClaim
* BadItemClaim `object`
  * Id `string`: Id of the claim
  * Issues `array`: Bad item issues
    * items [BadItemsGroupedByIssue](#baditemsgroupedbyissue)
  * RefundRefusedReasonCode `string`: If claim is refused, the reason for refusal
  * Status [BadItemClaimStatus](#baditemclaimstatus)
  * TotalCost `number`: Total cost of the claim in local currency

### BadItemClaimStatus
* BadItemClaimStatus `integer` (values: Pending, Viewed, RefundAccepted, RefundRefused): Current status of a bad item claim

### BadItemIssueSelectionStep
* BadItemIssueSelectionStep `object`: Flow step used for selecting the issue (e.g. missing / cold) when complaining about order items
  * closeButton [HelpAction](#helpaction)
  * screenEvent `object`
    * dataLayer `object`
      * screenName `string`
  * title `string`
  * actions `array`: Array of actions (i.e. buttons)
    * items [HelpAction](#helpaction)
  * body `array`: Array of paragraphs for body text
    * items `string`
  * foodSafetyAction [HelpAction](#helpaction)
  * header `string`: Display header
  * issueOptionActions `array`: Array of actions that select the issue
    * items [HelpAction](#helpaction)
  * leaveReviewAction [HelpAction](#helpaction)

### BadItemsGroupedByIssue
* BadItemsGroupedByIssue `object`
  * Issue `string` (values: Missing, Cold, Damaged): Bad item issue type
  * Items `array`: Group of items which have the same issue type
    * items [BadItem](#baditem)

### BadRequestMarketingResponse
* BadRequestMarketingResponse
  * errors `array`: Underlying errors associated with the error
    * items [MarketingError](#marketingerror)
  * faultId `string`: A value that helps identify this response back to logs, so we can easily find this specific fault
  * message `string`: Specific details about the error that may assist the you in resolving the issue

### BasketDiscountOfferEffect
* BasketDiscountOfferEffect
  * $type **required** [ConsumerOfferEffectType](#consumeroffereffecttype)
  * discountAmount `number`: The discount amount in smallest unit of relevant currency applied to order.

### BasketErrorResponse
* BasketErrorResponse `object`: The error object returned when an operation fails
  * ErrorType [BasketErrorType](#basketerrortype)
  * InnerErrors `array`
    * items `object`
      * ErrorType [BasketErrorType](#basketerrortype)
      * Message `string`
  * Message `string`

### BasketErrorType
* BasketErrorType `string` (values: Unknown, MenuNotFound, BasketNotRetrieved, BasketNotMapped, BasketNotDeserialised, BasketErrorsNotDeserialised, InvalidBasketItems, BasketNotCreated, InvalidBasketUpdateRequest, ProductNotFound, ProductNotUpdated, ZipcodeNotUpdated, ServiceTypeNotUpdated, ProductNotAdded, ProductsNotAdded, MaximumBasketSizeReached, MinimumBasketSizeReached, OrderItemNotRemoved, NoAvailableMenu, RestaurantDoesNotDeliverToLocation, InvalidLocation, OrderItemNotFound, PartialProductsUpdate, AllProductsUpdateFailed, ProductsNotRemoved, InvalidCreateBasketRequest, BasketNotFound)

### BasketGeoLocation
* BasketGeoLocation `object`
  * Latitude `number`
  * Longitude `number`

### BasketItemStateType
* BasketItemStateType `string` (values: JustAdded, Existing)

### BasketLocation
* BasketLocation `object`
  * GeoLocation: Not available across platform yet, but applied for future proofing.
    * Latitude `number`
    * Longitude `number`
  * ZipCode `string`

### BasketProductsRequest
* BasketProductsRequest `object`: Describes a request for product recommendations based on products in a user's basket.
  * productIds **required** `array`: An array of product ids that are in the user's basket.
    * items `string`
  * restaurantId **required** `string`: The id of the restaurant that the recommendations are for.
  * userExperimentValues **required** `array`: An array of experiment name/variant values that the user is part of.
    * items [ExperimentValue](#experimentvalue)

### BasketResponse
* BasketResponse `object`: The response object for all basket endpoints.
  * BasketId `string`
  * BasketSummary: Information for displaying the basket to the user.
    * BasketTotals `object`
      * items [BasketTotals](#baskettotals)
    * CategoryOffers `array`
      * items [CategoryOffer](#categoryoffer)
    * Deals `array`
      * items [Deal](#deal)
    * DeliveryCharge `number`
    * MaximumAdditionalOrderItems **required** `number`
    * Products `array`
      * items [Product](#product)
    * Prompts [Prompts](#prompts)
    * RestaurantOffers `array`
      * items [RestaurantOffer](#restaurantoffer)
  * CreateDate `string`: `YYYY-MM-DDThh:mm:ssZ (UTC)`
  * IsOrderable `boolean`
  * MenuGroupId `string`
  * RestaurantSeoName `string`: A unique per tenant identifier for a restaurant used for external operations.
  * ServiceType `string`

### BasketSummary
* BasketSummary `object`
  * BasketTotals `object`
    * items [BasketTotals](#baskettotals)
  * CategoryOffers `array`
    * items [CategoryOffer](#categoryoffer)
  * Deals `array`
    * items [Deal](#deal)
  * DeliveryCharge `number`
  * MaximumAdditionalOrderItems **required** `number`
  * Products `array`
    * items [Product](#product)
  * Prompts [Prompts](#prompts)
  * RestaurantOffers `array`
    * items [RestaurantOffer](#restaurantoffer)

### BasketTotals
* BasketTotals `object`
  * SubTotal `number`
  * Total `number`

### BenderErrorResponse
* BenderErrorResponse `object`: The error object returned when an operation fails
  * error `string`: Error Title
  * message `string`: Error Message Text

### BenderFlexStateType
* BenderFlexStateType `string` (values: CODE_RED, OPEN, SEEKING, CLOSED, Off): <p>The flex state type changes according to the exponential moving average and is used as a reference to bring more couriers to suffice the demand in a given delivery zone.</p> <p>If the flex state type is "Off", it means no shifts will be offered for the delivery zone.</p> <p>If the state is "CLOSED", only scheduled shifts will be allowed for the delivery zone.</p> <p>If the state is "SEEKING", the shift offers are going to be made across the courier network in order to suffice the current demand.</p> <p>If the state is "OPEN", it means demand is high and couriers from all over the courier network are allowed to create shifts for themselves to suffice the current demand.</p> <p>If the state is "CODE_RED", it means not only can everyone create shifts for themselves for the delivery zone but also couriers from other delivery zones might reallocate to help suffice the demand of that particular delivery zone.</p>

### BenderSettings
* BenderSettings `object`: The bender settings object for all endpoints.
  * benderStatus `boolean`: Bender On/Off Status
  * deliveryZoneId `string`: Bender Settings Delivery Zone Id
  * protectionThreshold `number`: Number of hours of Threshold protection
  * settingsFlexStates: Flex states information for given Delivery Zone Id
    * averageAssignableJobLoad `number`: Average assignable Job load for given state type
    * flexStateType [FlexStateType](#flexstatetype)
    * triggerUsage `number`: Usage percentage for given state type
  * targetUsage `number`: Minimum target Usage Percentage

### BenderSettingsList
* BenderSettingsList `object`: Bender Settings List
  * benderSettingsList `array`: List of Bender Settings
    * items [BenderSettings](#bendersettings)

### BonusSummary
* BonusSummary `object`: The zone profile object for a given delivery zone.
  * type [BonusType](#bonustype)
  * value `number`: Bonus value

### BonusType
* BonusType `string` (values: TOP_UP_PROMOTION): Types of bonuses that may be granted to the courier. <p>TOP_UP_PROMOTION - In order to calculate top up promotion skip has a database table containing required acceptance rate and top up value for each existing delivery zone, when the courier's order acceptance rate is greater than the required acceptance rate and the total value is lower than top up value for that given delivery zone, the courier will be granted the difference between the top up value and total order value, know as top up promotion.</p>

### BringOnlineRequest
* BringOnlineRequest `object`
  * Comment `string`: Any additional information

### CallReceivedOrUpdatedModel
* CallReceivedOrUpdatedModel `object`
  * tags `string`: Open-ended tag collection, for on-the-fly adjustment of data slicing; comma separated.
  * callSid `string`: UID used by Twilio, identifying a phone call
  * callStep `string`: CallStep
  * callerId `string`: Caller's phone number
  * orderId `string`: Legacy/friendly Order ID
  * queryType `string`: QueryType
  * resolution `string`: Resolution
  * status `string`: Contains the status of the order, if known

### CallerInformationCallRequest
* CallerInformationCallRequest `object`
  * accountSid `string`: The SID of the Twilio Account that created the Call resource
  * apiVersion `string`: The Twilio API version used to start a new TwiML session
  * callSid `string`: A unique identifier for the call, generated by Twilio
  * callStatus `string`: A descriptive status for the call
  * called `string`: The caller identifier
  * calledCountry `string`: The country of the called sender
  * calledState `string`: The state of the called sender
  * caller `string`: The name or phone number of the caller
  * callerCountry `string`: The country of the called sender
  * digits `string`: The digits that caller entered on their keypad
  * direction `string`: A string describing the direction of the call
  * finishedOnKey `string`: Gets or sets a value that caller pressed to submit their digits input
  * from `string`: The phone number or client identifier to use as the caller id
  * fromCountry `string`: The country of the called sender
  * to `string`: The phone number, SIP address, or client identifier to call
  * toCountry `string`: The country of the recipient

### CancelOrderResolution
* CancelOrderResolution `object`
  * ReasonCode `string` (values: NewAddressNotWithinDeliveryArea, UnableToReprepare, DriverNoLongerAvailable, AreaIsUnsafe, CustomerDoesnotWantOrderAnymore): The reason the order has been cancelled

### CancellationInfo
* CancellationInfo `object`
  * CanRequestCompensation `boolean`: Can the restaurant claim compenesation for this cancellation
  * HasRequestedCompensation `boolean`: Has the restaurant claimed compenesation for this cancellation
  * InitiatedBy [CancellationInitiatedBy](#cancellationinitiatedby)
  * Reason [CancellationReason](#cancellationreason)
  * RestaurantAware `boolean`: Is restaurant already aware of the cancellation
  * RestaurantTransaction [CancellationRestaurantTransaction](#cancellationrestauranttransaction)

### CancellationInitiatedBy
* CancellationInitiatedBy `integer` (values: Unknown, Restaurant, Customer, System): Who initiated the cancellation

### CancellationReason
* CancellationReason `object`
  * Code `string` (values: rest_cancelled_out_of_stock, rest_cancelled_drivers_unavailable, rest_cancelled_customer_requested, rest_cancelled_customer_absent, rest_cancelled_fake_order, rest_cancelled_other, cust_cancelled_delivery_too_long, cust_cancelled_made_mistake, cust_cancelled_other, cust_cancelled_changed_mind, deleted_system_error, deleted_test_order, deleted_rejected_by_restaurant): Reason for order cancellation
  * Description `string`: Any additional comments

### CancellationRestaurantTransaction
* CancellationRestaurantTransaction `object`
  * Amount `number`: The total amount of the transaction
  * Percentage `number`: The percentage of the order value of the transaction
  * Type [CancellationRestaurantTransactionType](#cancellationrestauranttransactiontype)

### CancellationRestaurantTransactionType
* CancellationRestaurantTransactionType `integer` (values: Unknown, Compensation, Fee): The transaction type

### CategoriesResponse
* CategoriesResponse `array`: Categories of products for given restaurant.
  * items `object`
    * Description `string`: Category description.
    * Id `string`: Category identifier.
    * Name `string`: Category name.

### Category
* Category
  * description `string`: The description of the category.
  * id `string`: A unique identifier at menu level for a given category.
  * name `string`: The name of the category.
  * itemIds `array`: The ids of the menu items that are within the category. Each id must be unique within the category.
    * items `string`

### CategoryBase
* CategoryBase `object`
  * description `string`: The description of the category.
  * id `string`: A unique identifier at menu level for a given category.
  * name `string`: The name of the category.

### CategoryOffer
* CategoryOffer `object`
  * CategoryId `string`
  * DiscountType `string`: The type of discount
  * DiscountValue `number`
  * OfferId `string`: The unique identifier of underlying consumer offers, if applicable
  * ProductId `string`: The unique identifier of product qualified for discount

### CategoryRequest
* CategoryRequest `object`
  * Id `string`: Id of the Category
  * Name `string`: Name of the Category

### CategoryResponse
* CategoryResponse `object`
  * Id `string`: Id of the Category
  * Name `string`: Name of the Category

### ChangeRestaurantContactsRequest
* ChangeRestaurantContactsRequest `object`: Request containing new restaurant and owner contact details
  * ownerMobileNumber `string`: Restaurant owner mobile phone number in E.164 format.
  * restaurantEmailAddress `string`: Restaurant email address
  * restaurantPhoneNumber `string`: Restaurant phone number in E.164 format.

### ChangeRestaurantLogoRequest
* ChangeRestaurantLogoRequest `object`: Request containing path to new logo file that was  uploaded to AWS S3 bucket
  * fileKey `string`: Path to the file that was uploaded to the AWS S3 bucket

### ChangeRestaurantMenuItemsRequest
* ChangeRestaurantMenuItemsRequest `object`: Request containing information about what to change in the restaurant menu (item/section/category)
  * containsAllergensInfomation `boolean`: The value indicating whether request has changes of allergen information
  * message `string`: The message with the details of what needs to be changed in the menu (item/section/category)

### ChangeRestaurantMenuPricesRequest
* ChangeRestaurantMenuPricesRequest `object`: Request containing information about restaurant menu price changes
  * fileKeys `array`: Array of paths to the updated menu files that Were uploaded to the AWS S3 bucket
    * items `string`: Path to the file that was uploaded to the certain AWS S3 bucket
  * message `string`: The message with the details of what prices need to be changed

### CheckedInState
* CheckedInState `string` (values: CHECKED_IN, NOT_CHECKED_IN): The state of a courier on a shift. A courier might be checked in or not.

### CheckoutAction
* CheckoutAction `object`: Action data needed to make payment for payment method in use. This data is dependant on the Payment Service Provider and payment method. When used for checkout where fraud-check is required, device-id, payer email and payer identifier should be provided.
  * data **required** `object`: Action data dictionary. Key value pairs required to make payment.
  * type **required** `string`: Identifier for the type of action data for the payment method dependant on paymentOptionType.

### CheckoutGetResponse
* CheckoutGetResponse `object`
  * customer **required** `object`: Details of the customer creating a checkout
    * firstName `string`: Customer's first name
    * lastName `string`: Customer's last name
    * phoneNumber `string`: Customer's phone number
  * fulfilment **required** `object`: Details required to for an order to be fulfilled
    * address **required** `object`: The address where the customer would like to receive the order
      * lines **required** `array`: Ordered list of address parts where the customer would like to receive the order
        * items `string`: Part of the address where the customer would like to receive the order
      * postalCode `string`: Postcode for where the customer would like to receive the order
    * time `object`: An individual time-band that can be chosen by the customer
      * from **required** `string`: Earliest time within time-band (ISO 8601 Date Time UTC)
      * to **required** `string`: Latest time within time-band (ISO 8601 Date Time UTC). This time is greater than or equal to the from time.
  * isFulfillable **required** `boolean`: Whether we are able to process the checkout
  * issues **required** `array`: Information about the current issues of a checkout
    * items [CheckoutIssue](#checkoutissue)
  * notes **required** `array`: Notes that the customer wants to submit as part of their order
    * items `object`: Note that the customer wants to submit as part of their order
      * note **required** `string`: The note previously submitted by the customer
      * type **required** `string` (values: delivery): The type of note
  * restaurant **required** `object`: The restaurant associated with the checkout
    * id **required** `string`: Unique identifier for a restaurant
  * serviceType **required** `string` (values: delivery, collection): The dispatch method for the order

### CheckoutIssue
* CheckoutIssue `object`
  * code **required** `string` (values: RESTAURANT_UNAVAILABLE, AVAILABILITY_UNAVAILABLE, ITEMS_UNORDERABLE, MINIMUM_ORDER_VALUE_NOT_MET, FULFILMENT_TIME_UNAVAILABLE, LOCATION_UNDELIVERABLE, AGE_VERIFICATION_FAILED, FIRST_NAME_REQUIRED, LAST_NAME_REQUIRED, PHONE_NUMBER_REQUIRED, DATE_OF_BIRTH_REQUIRED, FULFILMENT_TIME_REQUIRED, ADDRESS_LINES_REQUIRED, POSTAL_CODE_REQUIRED, GEOLOCATION_REQUIRED): The issue code

### CheckoutIssue_AddressLinesRequired
* CheckoutIssue_AddressLinesRequired
  * code **required** `string` (values: RESTAURANT_UNAVAILABLE, AVAILABILITY_UNAVAILABLE, ITEMS_UNORDERABLE, MINIMUM_ORDER_VALUE_NOT_MET, FULFILMENT_TIME_UNAVAILABLE, LOCATION_UNDELIVERABLE, AGE_VERIFICATION_FAILED, FIRST_NAME_REQUIRED, LAST_NAME_REQUIRED, PHONE_NUMBER_REQUIRED, DATE_OF_BIRTH_REQUIRED, FULFILMENT_TIME_REQUIRED, ADDRESS_LINES_REQUIRED, POSTAL_CODE_REQUIRED, GEOLOCATION_REQUIRED): The issue code

### CheckoutIssue_AgeVerificationFailed
* CheckoutIssue_AgeVerificationFailed
  * code **required** `string` (values: RESTAURANT_UNAVAILABLE, AVAILABILITY_UNAVAILABLE, ITEMS_UNORDERABLE, MINIMUM_ORDER_VALUE_NOT_MET, FULFILMENT_TIME_UNAVAILABLE, LOCATION_UNDELIVERABLE, AGE_VERIFICATION_FAILED, FIRST_NAME_REQUIRED, LAST_NAME_REQUIRED, PHONE_NUMBER_REQUIRED, DATE_OF_BIRTH_REQUIRED, FULFILMENT_TIME_REQUIRED, ADDRESS_LINES_REQUIRED, POSTAL_CODE_REQUIRED, GEOLOCATION_REQUIRED): The issue code

### CheckoutIssue_AvailabilityUnavailable
* CheckoutIssue_AvailabilityUnavailable
  * code **required** `string` (values: RESTAURANT_UNAVAILABLE, AVAILABILITY_UNAVAILABLE, ITEMS_UNORDERABLE, MINIMUM_ORDER_VALUE_NOT_MET, FULFILMENT_TIME_UNAVAILABLE, LOCATION_UNDELIVERABLE, AGE_VERIFICATION_FAILED, FIRST_NAME_REQUIRED, LAST_NAME_REQUIRED, PHONE_NUMBER_REQUIRED, DATE_OF_BIRTH_REQUIRED, FULFILMENT_TIME_REQUIRED, ADDRESS_LINES_REQUIRED, POSTAL_CODE_REQUIRED, GEOLOCATION_REQUIRED): The issue code

### CheckoutIssue_DateOfBirthRequired
* CheckoutIssue_DateOfBirthRequired
  * code **required** `string` (values: RESTAURANT_UNAVAILABLE, AVAILABILITY_UNAVAILABLE, ITEMS_UNORDERABLE, MINIMUM_ORDER_VALUE_NOT_MET, FULFILMENT_TIME_UNAVAILABLE, LOCATION_UNDELIVERABLE, AGE_VERIFICATION_FAILED, FIRST_NAME_REQUIRED, LAST_NAME_REQUIRED, PHONE_NUMBER_REQUIRED, DATE_OF_BIRTH_REQUIRED, FULFILMENT_TIME_REQUIRED, ADDRESS_LINES_REQUIRED, POSTAL_CODE_REQUIRED, GEOLOCATION_REQUIRED): The issue code

### CheckoutIssue_FirstNameRequired
* CheckoutIssue_FirstNameRequired
  * code **required** `string` (values: RESTAURANT_UNAVAILABLE, AVAILABILITY_UNAVAILABLE, ITEMS_UNORDERABLE, MINIMUM_ORDER_VALUE_NOT_MET, FULFILMENT_TIME_UNAVAILABLE, LOCATION_UNDELIVERABLE, AGE_VERIFICATION_FAILED, FIRST_NAME_REQUIRED, LAST_NAME_REQUIRED, PHONE_NUMBER_REQUIRED, DATE_OF_BIRTH_REQUIRED, FULFILMENT_TIME_REQUIRED, ADDRESS_LINES_REQUIRED, POSTAL_CODE_REQUIRED, GEOLOCATION_REQUIRED): The issue code

### CheckoutIssue_FulfilmentTimeRequired
* CheckoutIssue_FulfilmentTimeRequired
  * code **required** `string` (values: RESTAURANT_UNAVAILABLE, AVAILABILITY_UNAVAILABLE, ITEMS_UNORDERABLE, MINIMUM_ORDER_VALUE_NOT_MET, FULFILMENT_TIME_UNAVAILABLE, LOCATION_UNDELIVERABLE, AGE_VERIFICATION_FAILED, FIRST_NAME_REQUIRED, LAST_NAME_REQUIRED, PHONE_NUMBER_REQUIRED, DATE_OF_BIRTH_REQUIRED, FULFILMENT_TIME_REQUIRED, ADDRESS_LINES_REQUIRED, POSTAL_CODE_REQUIRED, GEOLOCATION_REQUIRED): The issue code

### CheckoutIssue_FulfilmentTimeUnavailable
* CheckoutIssue_FulfilmentTimeUnavailable
  * code **required** `string` (values: RESTAURANT_UNAVAILABLE, AVAILABILITY_UNAVAILABLE, ITEMS_UNORDERABLE, MINIMUM_ORDER_VALUE_NOT_MET, FULFILMENT_TIME_UNAVAILABLE, LOCATION_UNDELIVERABLE, AGE_VERIFICATION_FAILED, FIRST_NAME_REQUIRED, LAST_NAME_REQUIRED, PHONE_NUMBER_REQUIRED, DATE_OF_BIRTH_REQUIRED, FULFILMENT_TIME_REQUIRED, ADDRESS_LINES_REQUIRED, POSTAL_CODE_REQUIRED, GEOLOCATION_REQUIRED): The issue code

### CheckoutIssue_GeolocationRequired
* CheckoutIssue_GeolocationRequired
  * code **required** `string` (values: RESTAURANT_UNAVAILABLE, AVAILABILITY_UNAVAILABLE, ITEMS_UNORDERABLE, MINIMUM_ORDER_VALUE_NOT_MET, FULFILMENT_TIME_UNAVAILABLE, LOCATION_UNDELIVERABLE, AGE_VERIFICATION_FAILED, FIRST_NAME_REQUIRED, LAST_NAME_REQUIRED, PHONE_NUMBER_REQUIRED, DATE_OF_BIRTH_REQUIRED, FULFILMENT_TIME_REQUIRED, ADDRESS_LINES_REQUIRED, POSTAL_CODE_REQUIRED, GEOLOCATION_REQUIRED): The issue code

### CheckoutIssue_ItemsUnorderable
* CheckoutIssue_ItemsUnorderable
  * code **required** `string` (values: RESTAURANT_UNAVAILABLE, AVAILABILITY_UNAVAILABLE, ITEMS_UNORDERABLE, MINIMUM_ORDER_VALUE_NOT_MET, FULFILMENT_TIME_UNAVAILABLE, LOCATION_UNDELIVERABLE, AGE_VERIFICATION_FAILED, FIRST_NAME_REQUIRED, LAST_NAME_REQUIRED, PHONE_NUMBER_REQUIRED, DATE_OF_BIRTH_REQUIRED, FULFILMENT_TIME_REQUIRED, ADDRESS_LINES_REQUIRED, POSTAL_CODE_REQUIRED, GEOLOCATION_REQUIRED): The issue code

### CheckoutIssue_LastNameRequired
* CheckoutIssue_LastNameRequired
  * code **required** `string` (values: RESTAURANT_UNAVAILABLE, AVAILABILITY_UNAVAILABLE, ITEMS_UNORDERABLE, MINIMUM_ORDER_VALUE_NOT_MET, FULFILMENT_TIME_UNAVAILABLE, LOCATION_UNDELIVERABLE, AGE_VERIFICATION_FAILED, FIRST_NAME_REQUIRED, LAST_NAME_REQUIRED, PHONE_NUMBER_REQUIRED, DATE_OF_BIRTH_REQUIRED, FULFILMENT_TIME_REQUIRED, ADDRESS_LINES_REQUIRED, POSTAL_CODE_REQUIRED, GEOLOCATION_REQUIRED): The issue code

### CheckoutIssue_LocationUndeliverable
* CheckoutIssue_LocationUndeliverable
  * code **required** `string` (values: RESTAURANT_UNAVAILABLE, AVAILABILITY_UNAVAILABLE, ITEMS_UNORDERABLE, MINIMUM_ORDER_VALUE_NOT_MET, FULFILMENT_TIME_UNAVAILABLE, LOCATION_UNDELIVERABLE, AGE_VERIFICATION_FAILED, FIRST_NAME_REQUIRED, LAST_NAME_REQUIRED, PHONE_NUMBER_REQUIRED, DATE_OF_BIRTH_REQUIRED, FULFILMENT_TIME_REQUIRED, ADDRESS_LINES_REQUIRED, POSTAL_CODE_REQUIRED, GEOLOCATION_REQUIRED): The issue code

### CheckoutIssue_MinimumOrderValueNotMet
* CheckoutIssue_MinimumOrderValueNotMet
  * code **required** `string` (values: RESTAURANT_UNAVAILABLE, AVAILABILITY_UNAVAILABLE, ITEMS_UNORDERABLE, MINIMUM_ORDER_VALUE_NOT_MET, FULFILMENT_TIME_UNAVAILABLE, LOCATION_UNDELIVERABLE, AGE_VERIFICATION_FAILED, FIRST_NAME_REQUIRED, LAST_NAME_REQUIRED, PHONE_NUMBER_REQUIRED, DATE_OF_BIRTH_REQUIRED, FULFILMENT_TIME_REQUIRED, ADDRESS_LINES_REQUIRED, POSTAL_CODE_REQUIRED, GEOLOCATION_REQUIRED): The issue code
  * additionalSpendRequired `number`: The amount the customer needs to spend to meet minimum order value. This is in the smallest unit of local currency (e.g. pence).
  * currency `string`: The currency in which the value amounts are returned in (ISO-4217 format)
  * minimumOrderValue `number`: The minimum order value required to complete an order. This is in the smallest unit of local currency (e.g. pence).

### CheckoutIssue_PhoneNumberRequired
* CheckoutIssue_PhoneNumberRequired
  * code **required** `string` (values: RESTAURANT_UNAVAILABLE, AVAILABILITY_UNAVAILABLE, ITEMS_UNORDERABLE, MINIMUM_ORDER_VALUE_NOT_MET, FULFILMENT_TIME_UNAVAILABLE, LOCATION_UNDELIVERABLE, AGE_VERIFICATION_FAILED, FIRST_NAME_REQUIRED, LAST_NAME_REQUIRED, PHONE_NUMBER_REQUIRED, DATE_OF_BIRTH_REQUIRED, FULFILMENT_TIME_REQUIRED, ADDRESS_LINES_REQUIRED, POSTAL_CODE_REQUIRED, GEOLOCATION_REQUIRED): The issue code

### CheckoutIssue_PostalCodeRequired
* CheckoutIssue_PostalCodeRequired
  * code **required** `string` (values: RESTAURANT_UNAVAILABLE, AVAILABILITY_UNAVAILABLE, ITEMS_UNORDERABLE, MINIMUM_ORDER_VALUE_NOT_MET, FULFILMENT_TIME_UNAVAILABLE, LOCATION_UNDELIVERABLE, AGE_VERIFICATION_FAILED, FIRST_NAME_REQUIRED, LAST_NAME_REQUIRED, PHONE_NUMBER_REQUIRED, DATE_OF_BIRTH_REQUIRED, FULFILMENT_TIME_REQUIRED, ADDRESS_LINES_REQUIRED, POSTAL_CODE_REQUIRED, GEOLOCATION_REQUIRED): The issue code

### CheckoutIssue_RestaurantUnavailable
* CheckoutIssue_RestaurantUnavailable
  * code **required** `string` (values: RESTAURANT_UNAVAILABLE, AVAILABILITY_UNAVAILABLE, ITEMS_UNORDERABLE, MINIMUM_ORDER_VALUE_NOT_MET, FULFILMENT_TIME_UNAVAILABLE, LOCATION_UNDELIVERABLE, AGE_VERIFICATION_FAILED, FIRST_NAME_REQUIRED, LAST_NAME_REQUIRED, PHONE_NUMBER_REQUIRED, DATE_OF_BIRTH_REQUIRED, FULFILMENT_TIME_REQUIRED, ADDRESS_LINES_REQUIRED, POSTAL_CODE_REQUIRED, GEOLOCATION_REQUIRED): The issue code

### CheckoutRequest
* CheckoutRequest `object`: Details needed to make a payment.
  * action [CheckoutAction](#checkoutaction)
  * paymentOptionId `string`: Token to use for saved card payment. Tokens retrieved from order payment options or basket payment options calls on Public API.
  * paymentOptionType **required** `string` (values: AccountCredit, AndroidPay, ApplePay, Card, Cash, GooglePay, PayPal, SavedCard, VCO): Identifier used to determine method of payment.
  * voucherCode `string`: Voucher code to apply to order.

### CheckoutResponse
* CheckoutResponse `object`: The result of a payment attempt.
  * orderId `string`: The Id of the order.
  * result `string` (values: 20000, 40000, 50000): The result of payment attempt. 2xxxx = successful payment. 4xxxxx = validation error, 5xxxx = server error
  * tenant `string`: The tenant associated with the consumer.
  * timestamp `string`: The UTC timestamp of the date and time that the response was generated at.

### CheckoutUpdate400Error
* CheckoutUpdate400Error `object`: A HTTP 4xx error response
  * fault `object`: A list of values that helps identify this response back to logs, so we can easily find faults
    * errors `array`: List of errors that may assist you in resolving the issues
      * items `object`: Details about the error that may assist you in resolving the issue
        * description `string`: Specific details about the error that may assist you in resolving the issue
        * errorCode `string` (values: FIRST_NAME_INVALID, LAST_NAME_INVALID, PHONE_NUMBER_INVALID, DATE_OF_BIRTH_INVALID, FULFILMENT_TIME_INVALID, ADDRESS_LINES_INVALID, POSTAL_CODE_INVALID, GEOLOCATION_INVALID, DELIVERY_NOTE_INVALID): A code that identifies the problem type. It will be supported by human-readable documentation that identifies how to resolve the error
    * faultId **required** `string`: A value that helps identify this response back to logs, so we can easily find this specific fault
    * traceId `string`: A value that helps identify the trace back to logs, so that we can easily find what was happening on our system when the fault was generated

### CheckoutUpdateRequest
* CheckoutUpdateRequest `object`
  * customer `object`: Details of the customer creating a checkout
    * dateOfBirth `string`: Customer's date of birth (ISO 8601 Date)
    * firstName `string`: Customer's first name
    * lastName `string`: Customer's last name
    * phoneNumber `string`: Customer's phone number
  * fulfilment `object`: Details required to for an order to be fulfilled
    * location `object`: The destinaton for where the customer would like to receive the order
      * address `object`: The address where the customer would like to receive the order
        * lines **required** `array`: Ordered list of address parts where the customer would like to receive the order
          * items `string`: Part of the address where the customer would like to receive the order
        * postalCode `string`: Postcode for where the customer would like to receive the order
      * geolocation `object`: The coordinates for where the customer would like to receive the order
        * latitude **required** `number`: The latitude for where the customer would like to receive the order
        * longitude **required** `number`: The longitude for where the customer would like to receive the order
    * time `object`: Time-band for when the customer would like the order to be fulfilled (ready for collection/delivered)
      * from **required** `string`: Earliest time the customer wants the order to be fulfilled (ISO 8601 Date Time UTC)
      * to **required** `string`: Latest time the customer wants the order to be fulfilled (ISO 8601 Date Time UTC). This time must be greater than or equal to the from time.
  * notes `array`: Notes that the customer wants to submit as part of their order
    * items `object`: Note that the customer wants to submit as part of their order
      * note **required** `string`: The note the customer wants to submit as part of their order
      * type **required** `string` (values: delivery): The type of note that the customer wants to submit as part of their order

### CheckoutUpdateResponse
* CheckoutUpdateResponse `object`
  * isFulfillable **required** `boolean`: Whether we are able to process the checkout
  * issues **required** `array`: Information about the current issues of a checkout
    * items [CheckoutIssue](#checkoutissue)

### Claim
* Claim `object`: Claim representation

### ClaimResolution
* ClaimResolution `object`: Representation of the decision made about a claim
  * decision `string` (values: Accepted, PartiallyAccepted, Rejected): Indicates whether the claim is accepted, partially accepted or rejected - claim is partially accepted if at least one of the claimed items is accepted
  * resolvedChannel `string`: Channel which was used to resolved the claim
  * resolvedDate `string`: Date when decision on the claim was submitted
  * totalClaimedAccepted `number`: Total claimed money accepted by the restaurant in smallest unit of relevant currency

### ClaimResponse
* ClaimResponse `object`: Response containing a single claim

### ClaimsResponse
* ClaimsResponse `object`: Response containing claims for a restaurant which match the given filter
  * claims [Claim](#claim)

### ClientOrderState
* ClientOrderState `integer` (values: AtCounter, InKitchen, Ready, Collected, WithDriver, Delivered, RejectedTooBusy, RejectedTooFar, Cancelled, Received, RejectedNoDriverAvailable, RejectedMenuItemsOutOfStock, RejectedOther, TestOrderDelete, CancelledAcknowledged, CancelledUnacknowledged, CancelledDismissed, Complete): The state of the client order

### CodeType
* CodeType `integer` (values: 0, 1, 2)

### CollectionActionType
* CollectionActionType `string` (values: REPLACE, APPEND, PREPEND, REMOVE)

### ConflictMarketingResponse
* ConflictMarketingResponse
  * errors `array`: Underlying errors associated with the error
    * items [MarketingError](#marketingerror)
  * faultId `string`: A value that helps identify this response back to logs, so we can easily find this specific fault
  * message `string`: Specific details about the error that may assist the you in resolving the issue

### ConsumerCreate
* ConsumerCreate `object`
  * emailAddress **required** `string`: The consumer's email address
  * firstName **required** `string`: The consumer's first name
  * lastName **required** `string`: The consumer's last name
  * marketingPreferences [consumerMarketingPreference](#consumermarketingpreference)
  * password `string`: The consumer's password
  * registrationSource `string` (values: Native, Guest): The registration source of the consumer. Australia and New Zealand only support Guest

### ConsumerCreateResponse
* ConsumerCreateResponse `object`
  * token **required** `string`: The One Time Access Code (OTAC)
  * type **required** `string` (values: otac): The type of token. At the moment, this will only ever be a One Time Access Code (OTAC)

### ConsumerErrorResponse
* ConsumerErrorResponse `object`
  * code `integer`
  * codeText `string`

### ConsumerOffer
* ConsumerOffer `object`
  * campaignId `string`: The unique identifier of the offer campaign.
  * consumerSegment [ConsumerSegment](#consumersegment)
  * offerEffects `array`: A collection of offer effects
    * items [OfferEffect](#offereffect)
  * offerId `string`: The unique identifier of the offer.
  * offerType [ConsumerOfferType](#consumeroffertype)
  * restaurantId `string`: The unique identifier of the restaurant providing the offers.

### ConsumerOfferEffectType
* ConsumerOfferEffectType `string` (values: BasketDiscountOfferEffect, ItemDiscountOfferEffect, ShowNotificationOfferEffect, ShowPromptOfferEffect, SpendMoreOfferEffect)

### ConsumerOfferNotification
* ConsumerOfferNotification `object`
  * campaignId `string`: The unique identifier of the offer campaign.
  * consumerSegment [ConsumerSegment](#consumersegment)
  * description `string`: The description of the offer.
  * offerId `string`: The unique identifier of the offer.
  * offerType [ConsumerOfferType](#consumeroffertype)
  * restaurantId `string`: The unique identifier of the restaurant providing the offers.

### ConsumerOfferType
* ConsumerOfferType `string` (values: Percent, ItemDiscount, DeliveryDiscount)

### ConsumerOffersBasket
* ConsumerOffersBasket `object`
  * basketItems `array`: The collection of the basket items.
    * items [ConsumerOffersBasketItem](#consumeroffersbasketitem)

### ConsumerOffersBasketItem
* ConsumerOffersBasketItem `object`
  * id `string`: The Id of basket item.
  * itemState [BasketItemStateType](#basketitemstatetype)
  * name `string`: The name of basket item.
  * price `number`: The price of basket item in smallest unit of relevant currency.
  * productId `string`: The ProductId of basket item.
  * quantity `integer`: The quantity of basket item.

### ConsumerOffersNotificationsRequest
* ConsumerOffersNotificationsRequest `object`
  * applicableDateTimeUtc `string`: Overrides the current time for determining whether offers are active.
  * restaurantIds **required** `array`: The identifiers of the restaurants. Allows offers to be returned for many restaurants.
    * items `string`

### ConsumerOffersNotificationsResponse
* ConsumerOffersNotificationsResponse `object`: Holder of Consumer Offer Notifications
  * offerNotifications `array`: Provide consumer offer notifications for given restaurants, containing offer description but not exact details like discount etc.
    * items [ConsumerOfferNotification](#consumeroffernotification)

### ConsumerOffersRequest
* ConsumerOffersRequest `object`
  * applicableDateTimeUtc `string`: Overrides the current time for determining whether offers are active.
  * consumerId `string`: Global Consumer Id
  * restaurantId **required** `string`: The identifier of the restaurant.

### ConsumerOffersResponse
* ConsumerOffersResponse `object`: Holder of consumer offers
  * offers `array`: Provide consumer offers with exact effect (e.g. Discount) and discount amount, based on provided restaurantId and basket content.
    * items [ConsumerOffer](#consumeroffer)

### ConsumerOrderAddress
* ConsumerOrderAddress `object`: A postal address.
  * addressLines `array`: The lines of the address.
    * items `string`
  * city `string`: The city or town.
  * countryCode `string`: The ISO 3166-1 alpha-2 country code.
  * locality `string`: The locality, such as a district or suburb, if any.
  * location [ConsumerOrderGeoposition](#consumerordergeoposition)
  * postalCode `string`: The postal code.
  * region `string`: The region, such as a county, province or state.

### ConsumerOrderApplicationInfo
* ConsumerOrderApplicationInfo `object`: Information about an application used to place an order.
  * clientIdentifier `string`: The client identifier associated with the order, if any, such as a device Id or IP address.
  * feature `string`: The name of the Just Eat feature that placed the order.
  * name `string`: The name of the application that placed the order.
  * userAgent `string`: The User Agent of the client that placed the order.
  * version `string`: The version of the application that placed the order.

### ConsumerOrderBasketInfo
* ConsumerOrderBasketInfo `object`: Information about the items in the basket for an order.
  * currencyCode `string`: The ISO-4217 currency code associated with the basket.
  * discounts `object`: The discounts applied to the basket, if any.
  * fees `object`: The fees applied to the basket, if any.
  * items `array`: The items in the basket.
    * items [ConsumerOrderBasketItem](#consumerorderbasketitem)
  * metadata `object`: Arbitrary metadata about the basket.
  * offers `array`: The offer discounts applied to the basket.
    * items [ConsumerOrderOffer](#consumerorderoffer)
  * subtotal `number`: The subtotal for the basket before any discounts or fees.
  * summary [ConsumerOrderBasketSummary](#consumerorderbasketsummary)
  * tips `object`: The tips associated with the basket.
  * total `number`: The total value of the basket.

### ConsumerOrderBasketItem
* ConsumerOrderBasketItem `object`: An item in a basket.
  * bulkDiscounts `array`: The bulk discounts, if any.
    * items [ConsumerOrderBulkDiscount](#consumerorderbulkdiscount)
  * combinedPrice `number`: The combined price for the item, including any accessories and/or discounts.
  * description `string`: The description for the item.
  * discounts `array`: The discounts, if any.
    * items [ConsumerOrderDiscount](#consumerorderdiscount)
  * name `string`: The name of the item.
  * optionalAccessories `array`: The optional meal part accessories, if any.
    * items [ConsumerOrderMealAccessory](#consumerordermealaccessory)
  * parts `array`: The parts of the meal, if any.
    * items [ConsumerOrderMealPart](#consumerordermealpart)
  * productId `string`: The product Id.
  * requiredAccessories `array`: The required meal part accessories, if any.
    * items [ConsumerOrderMealAccessory](#consumerordermealaccessory)
  * synonym `string`: The synonym of the item.
  * unitPrice `number`: The unit price for the item.

### ConsumerOrderBasketSummary
* ConsumerOrderBasketSummary `object`: A summary of the items in the basket for an order.
  * items `array`: The items in the basket summary.
    * items [ConsumerOrderBasketSummaryItem](#consumerorderbasketsummaryitem)

### ConsumerOrderBasketSummaryItem
* ConsumerOrderBasketSummaryItem `object`: A summarised item in a basket.
  * accessories `array`: The accessories in the basket summary item.
    * items [ConsumerOrderMealAccessory](#consumerordermealaccessory)
  * id `string`: The Id of the item, such as a product Id or meal part Id.
  * items `array`: The items in the basket summary item.
    * items [ConsumerOrderBasketSummaryItem](#consumerorderbasketsummaryitem)
  * name `string`: The name of the item.
  * price `number`: The price of the item for the associated quantity.
  * quantity `integer`: The quantity of the item.
  * synonym `string`: The synonym of the item.
  * unitPrice `number`: The unit price of the item.

### ConsumerOrderBulkDiscount
* ConsumerOrderBulkDiscount `object`: A bulk discount.
  * amount `number`: The amount of the bulk discount.
  * name `string`: The name of the bulk discount.
  * productTypeId `string`: The Id of the product type the discount applies to.

### ConsumerOrderConsumerInfo
* ConsumerOrderConsumerInfo `object`: Information about a consumer.
  * contactNumber `string`: The consumer's contact number.
  * deliveryAddress [ConsumerOrderAddress](#consumerorderaddress)
  * email `string`: The consumer's email address.
  * id `string`: The consumer Id.
  * name `string`: The consumer's name.
  * timeZone `string`: The IANA time zone Id the consumer is located in.

### ConsumerOrderConsumerReview
* ConsumerOrderConsumerReview `object`: A consumer's review of an order.
  * comments `string`: Any comments left by the consumer in the review.
  * scores `object`: The scores given for the scored attributes of the review by the consumer.

### ConsumerOrderCuisineInfo
* ConsumerOrderCuisineInfo `object`: Information about a restaurant cuisine.
  * id `string`: The Id of the cuisine.
  * name `string`: The name of the cuisine.
  * rank `integer`: The ranking for the cuisine.

### ConsumerOrderDateTimeRange
* ConsumerOrderDateTimeRange `object`: A range of date and time values.
  * end `string`: The end of the range.
  * start `string`: The start of the range.

### ConsumerOrderDiscount
* ConsumerOrderDiscount `object`: A discount.
  * amount `number`: The amount of the discount.
  * name `string`: The name of the discount.

### ConsumerOrderErrorResponse
* ConsumerOrderErrorResponse `object`: An error response.
  * _links `object`: The links information, if any.
  * detail `object`: The optional error detail.
  * errorCode `string`: The API error code, if any.
  * errorId `string`: The error Id.
  * fingerprint `string`: The error fingerprint, if available.
  * message `string`: The error message.
  * requestId `string`: The request Id, if available.
  * statusCode `integer`: The HTTP status code.
  * timestamp `string`: The timestamp of the error.
  * version `string`: The version of the API that generated the error.

### ConsumerOrderGeoposition
* ConsumerOrderGeoposition `object`: A geoposition.
  * latitude `number`: The latitude.
  * longitude `number`: The longitude.

### ConsumerOrderImage
* ConsumerOrderImage `object`: An image.
  * height `integer`: The optional height of the image, in pixels.
  * imageType `string`: The type of the image, such as a logo.
  * uri `string`: The URI of the image.
  * width `integer`: The optional width of the image, in pixels.

### ConsumerOrderLink
* ConsumerOrderLink `object`: A link to an API resource.
  * href `string`: The URL of the link.
  * templated `boolean`: A value indicating whether the URL is templated.

### ConsumerOrderMealAccessory
* ConsumerOrderMealAccessory `object`: An accessory for a meal.
  * accessoryId `string`: The accessory Id.
  * name `string`: The name of the accessory.
  * quantity `integer`: The quantity of the accessory.
  * unitPrice `number`: The unit price of the accessory.

### ConsumerOrderMealPart
* ConsumerOrderMealPart `object`: A part of a meal.
  * groupId `string`: The group Id.
  * mealPartId `string`: The meal part Id.
  * name `string`: The name of the meal part.
  * optionalAccessories `array`: The optional meal part accessories, if any.
    * items [ConsumerOrderMealAccessory](#consumerordermealaccessory)
  * requiredAccessories `array`: The required meal part accessories, if any.
    * items [ConsumerOrderMealAccessory](#consumerordermealaccessory)
  * synonym `string`: The synonym of the meal part.

### ConsumerOrderOffer
* ConsumerOrderOffer `object`: An offer applied to a basket.
  * id `string`: The offer Id.
  * offerAmount `number`: The value of the offer.
  * offerType `string`: The type of the offer.
  * qualifyingValue `number`: The qualifying value for the offer.

### ConsumerOrderOrder
* ConsumerOrderOrder `object`: An order.
  * _links `object`: The links information, if any.
  * application [ConsumerOrderApplicationInfo](#consumerorderapplicationinfo)
  * basket [ConsumerOrderBasketInfo](#consumerorderbasketinfo)
  * consumer [ConsumerOrderConsumerInfo](#consumerorderconsumerinfo)
  * friendlyId `string`: The friendly order Id.
  * id `string`: The Id of the order.
  * information [ConsumerOrderOrderInfo](#consumerorderorderinfo)
  * metadata `object`: Arbitrary metadata about the order.
  * payment [ConsumerOrderPaymentInfo](#consumerorderpaymentinfo)
  * restaurant [ConsumerOrderRestaurantInfo](#consumerorderrestaurantinfo)
  * review [ConsumerOrderReviewInfo](#consumerorderreviewinfo)
  * status [ConsumerOrderStatusInfo](#consumerorderstatusinfo)
  * tenant `string`: The tenant associated with the order.
  * timestamp `string`: The UTC timestamp of the date and time that the response was generated at.

### ConsumerOrderOrderHistory
* ConsumerOrderOrderHistory `object`: The order history of a consumer.
  * _links `object`: The links information, if any.
  * _pagination [ConsumerOrderPaginationInfo](#consumerorderpaginationinfo)
  * consumerId `string`: The Id of the consumer.
  * orders `array`: The consumer's orders.
    * items [ConsumerOrderOrder](#consumerorderorder)
  * tenant `string`: The tenant associated with the consumer.
  * timestamp `string`: The UTC timestamp of the date and time that the response was generated at.

### ConsumerOrderOrderInfo
* ConsumerOrderOrderInfo `object`: Additional information about an order.
  * canReorder `boolean`: A value indicating whether the order can be re-ordered.
  * createdAt `string`: The date and time the order was created.
  * isAsap `boolean`: A value indicating whether the order should be fulfilled as soon as possible.
  * isForDelivery `boolean`: A value indicating whether the order is for delivery.
  * notes `object`: Any notes associated with the order given by the consumer.

### ConsumerOrderOrderStatus
* ConsumerOrderOrderStatus `object`: The status of an order.
  * consumerId `string`: The Id of consumer associated with the order.
  * id `string`: The Id of the order.
  * isForDelivery `boolean`: A value indicating whether the order is for delivery.
  * restaurantName `string`: The name of the restaurant associated with the order.
  * status [ConsumerOrderStatusInfo](#consumerorderstatusinfo)
  * tenant `string`: The tenant associated with the order.
  * timestamp `string`: The UTC timestamp of the date and time that the response was generated at.

### ConsumerOrderPaginationInfo
* ConsumerOrderPaginationInfo `object`: Pagination information for a request.
  * count `integer`: The current number of results.
  * links `object`: The pagination links.
  * token `string`: The pagination token for the next page of results, if any.
  * total `integer`: The total number of results, if known.

### ConsumerOrderPaymentInfo
* ConsumerOrderPaymentInfo `object`: Information about a payment.
  * currencyCode `string`: The ISO-4217 currency code associated with the payment.
  * fees `object`: The amount of fees applied to the order.
  * paidAt `string`: The date and time the order was paid for, if known.
  * payments `array`: The individual payment(s).
    * items [ConsumerOrderPaymentItem](#consumerorderpaymentitem)
  * taxes `object`: The taxes applied to the order.
  * totals [ConsumerOrderTotals](#consumerordertotals)

### ConsumerOrderPaymentItem
* ConsumerOrderPaymentItem `object`: An individual payment.
  * cardType `string`: The card type, such as VISA, if used.
  * deferredFee `number`: The deferred fee value, if any.
  * fee `number`: The payment fee, if any.
  * lastCardDigits `string`: The last digits of a payment card, if used.
  * paymentMethod `string` (values: None, Cash, Card, AccountCredit, Voucher, PayPal, Interac, ApplePay): The payment method, such as cash or card.
  * pspName `string`: The name of the Payment Service Provider, if any.
  * transactionReference `string`: The transaction reference, if any.
  * value `number`: The payment value.
  * voucherCode `string`: The voucher code used, if any.

### ConsumerOrderReorderResponse
* ConsumerOrderReorderResponse `object`: A reorder response.
  * basketId `string`: The basket Id.
  * menuId `string`: The menu Id.
  * restaurantId `string`: The restaurant Id.
  * restaurantSeoName `string`: The restaurant SEO name.
  * serviceType `string`: The service type, such as collection or delivery.
  * tenant `string`: The tenant.
  * unavailableProductIds `array`: The unavailable product Ids.
    * items `string`

### ConsumerOrderRestaurantCapability
* ConsumerOrderRestaurantCapability `object`: A capability of a restaurant.
  * isCapable `boolean`: A value indicating whether the restaurant is capable of fulfilling the capability.
  * metadata `object`: Arbitrary metadata about the capability.
  * name `string`: The name of the capability.

### ConsumerOrderRestaurantInfo
* ConsumerOrderRestaurantInfo `object`: Information about a restaurant.
  * capabilities `object`: The capabilities of the restaurant.
  * contactNumber `string`: The contact telephone number for the restaurant.
  * cuisines `array`: The cuisines associated with the restaurant.
    * items [ConsumerOrderCuisineInfo](#consumerordercuisineinfo)
  * displayName `string`: The display name of the restaurant.
  * id `string`: The Id of the restaurant.
  * images `object`: The images associated with the restaurant.
  * isClosed `boolean`: A value indicating whether the restaurant is currently closed.
  * isOffline `boolean`: A value indicating whether the restaurant is currently offline.
  * metadata `object`: Arbitrary metadata about the restaurant.
  * nextClosesAt `string`: The date and time the restaurant next closes, if open.
  * nextOpensAt `string`: The date and time the restaurant next opens, if closed.
  * postalAddress [ConsumerOrderAddress](#consumerorderaddress)
  * seoName `string`: The SEO name of the restaurant.
  * timeZone `string`: IANA time zone Id the restaurant is located in.

### ConsumerOrderReviewInfo
* ConsumerOrderReviewInfo `object`: Information about the review for an order.
  * averageScore `number`: The average score for the attributes of the review.
  * canReview `boolean`: A value indicating whether the order can be reviewed.
  * comments `string`: Any comments left by the consumer in the review.
  * isReviewed `boolean`: A value indicating whether the order has been reviewed.
  * maximumScore `number`: The maximum score that can be given to an attribute of the review.
  * ratingCode `string`: The rating code for the review.
  * scores `object`: The scores given for the scored attributes of the review.

### ConsumerOrderStatusHistoryItem
* ConsumerOrderStatusHistoryItem `object`: Information about the status of an order at a specific point in time.
  * confidence `string`: The confidence level of the status.
  * dueDate `string`: The due date at the date and time associated with the timestamp, if any.
  * reason `string`: The reason for the order's status, if known.
  * timestamp `string`: The timestamp associated with this order status.
  * value `string`: The order status at the date and time associated with the timestamp.

### ConsumerOrderStatusInfo
* ConsumerOrderStatusInfo `object`: Information about the status of an order.
  * confidence `string`: The confidence level of the order's status.
  * currentDueDate `string`: The current due date of the order, if any.
  * delay `string`: How delayed the order is.
  * estimatedCompletion [ConsumerOrderDateTimeRange](#consumerorderdatetimerange)
  * expectPreorderNotificationAt `string`: The date and time the restaurant is expected to accept a preorder, if any.
  * finishedAt `string`: The date and time the order was finished, if completed successfully.
  * history `array`: The history of the order's statuses, if available.
    * items [ConsumerOrderStatusHistoryItem](#consumerorderstatushistoryitem)
  * initialDueDate `string`: The initial due date of the order, if any.
  * isActive `boolean`: A value indicating whether the status of the order may change further.
  * isDelayed `boolean`: A value indicating whether the order is delayed.
  * isDueDateDynamic `boolean`: A value indicating whether the current due date was determined
  * isRecent `boolean`: A value indicating whether the order is a recent order.
  * notifications [ConsumerOrderStatusNotificationsInfo](#consumerorderstatusnotificationsinfo)
  * statusReason `string`: The reason for the status of the order, if known.
  * timeZone `string`: IANA time zone Id associated with the order.
  * tracking [ConsumerOrderTrackingInfo](#consumerordertrackinginfo)
  * upcoming `array`: The expected upcoming order statuses for the order, if known.
    * items [ConsumerOrderUpcomingStatusItem](#consumerorderupcomingstatusitem)
  * value `string`: The current status of the order.

### ConsumerOrderStatusNotificationsInfo
* ConsumerOrderStatusNotificationsInfo `object`: Status updates notification information for an order.
  * channelKey `string`: The key for the status updates notification channel, if any.
  * channelName `string`: The name of the status updates notification channel.
  * providerName `string`: The name of the status updates notification provider, such as PubNub.

### ConsumerOrderTaxItem
* ConsumerOrderTaxItem `object`: A tax item.
  * name `string`: The name of the tax.
  * rate `number`: The tax rate.
  * value `number`: The value of the tax due.

### ConsumerOrderTipItem
* ConsumerOrderTipItem `object`: A tip.
  * amount `number`: The cash value of the tip.
  * name `string`: The name of the type of the tip.
  * value `number`: The value of the tip relative to its type, such as the percentage.

### ConsumerOrderTotals
* ConsumerOrderTotals `object`: A class containing payment totals.
  * accountCredits `number`: The total amount of account credit(s) applied to the order.
  * complimentary `number`: The total amount of promotional credit(s) applied to the order.
  * discounts `number`: The total amount of discount(s) applied to the order.
  * fees `number`: The total amount of fees applied to the order.
  * subtotal `number`: The subtotal for the order.
  * taxes `number`: The total amount of taxes applied to the order.
  * tips `number`: The total amount of tips applied to the order.
  * totalPaid `number`: The total paid for the order, after taking into account credit, vouchers etc.
  * totalToPay `number`: The total to pay for the order.
  * vouchers `number`: The total amount of any voucher(s) applied to the order.

### ConsumerOrderTrackingInfo
* ConsumerOrderTrackingInfo `object`: Tracking information for an order.
  * channelKey `string`: The key for the tracking channel, if any.
  * channelName `string`: The name of the tracking channel.
  * providerName `string`: The name of the tracking provider, such as PubNub.

### ConsumerOrderUpcomingStatusItem
* ConsumerOrderUpcomingStatusItem `object`: Information about an upcoming status an order is expected to reach.
  * sortOrder `integer`: The sort order of the upcoming status.
  * value `string`: The upcoming status for the order.

### ConsumerOrdersPlacementErrorResponse
* ConsumerOrdersPlacementErrorResponse `object`: An error response.
  * _links `object`: The links information, if any.
  * detail `object`: The optional error detail.
  * errorCode `string`: The API error code.
  * errorId `string`: The API error Id.
  * fingerprint `string`: The error fingerprint, if available.
  * message `string`: The error message.
  * requestId `string`: The request Id, if available.
  * statusCode `integer`: The HTTP status code.
  * timestamp `string`: The timestamp of the error.
  * version `string`: The version of the API that generated the error.

### ConsumerOrdersPlacementLink
* ConsumerOrdersPlacementLink `object`: A link to an API resource.
  * href `string`: The URL of the link.
  * templated `boolean`: A value indicating whether the URL is templated.

### ConsumerOrdersPlacementReferralState
* ConsumerOrdersPlacementReferralState `string` (values: None, ReferredByWeb): Order referral source

### ConsumerOrdersPlacementRequest
* ConsumerOrdersPlacementRequest `object`: An object representing the request to place an order for a given basket Id.
  * applicationId **required** `integer`: The Id of application that is placing the order.
  * applicationName `string`: The name of application that is placing the order.
  * applicationVersion **required** `string`: The version of application that is placing the order.
  * basketId **required** `string`: The basket Id.
  * customerNotes `object`: Dictionary of the customer notes to add to the order. The keys of the dictionary are the notes capabilities that the restaurant has.
  * deviceId **required** `string`: The identifier/ip of the device that is placing the order.
  * deviceName **required** `string`: The name of the device that is placing the order.
  * referralState: Order referral source
  * removedIngredientsEnabled `boolean`: A value indicating whether the basket contains removed ingredients.

### ConsumerOrdersPlacementResponse
* ConsumerOrdersPlacementResponse `object`: An order placement response.
  * friendlyOrderId `string`: The friendly order Id.
  * orderId `string`: The id of the order.

### ConsumerSegment
* ConsumerSegment `string` (values: All, NewToRestaurant)

### ConsumerStatus
* ConsumerStatus `integer` (values: 0, 1, 2)

### CourierStatus
* CourierStatus `string` (values: ONBOARDING, STALLED, SURPLUS, ACTIVE, INACTIVE, RELIABILITY_ISSUES, VEHICLE_ISSUES, INCIDENT_ISSUES, OTHER_ACCOUNT_ISSUES, EXPIRED_DOCUMENTS, REJECTED, WITHDRAWN, BANNED, LEFT_NETWORK): The courier application status. A courier could have one of these status associated with their application, here is a brief example of each status. <p>ON-BOARDING - Courier is actively trying to be on-boarded and will progress through the courier on-boarding program</p><p>STALLED - Courier has not proceeded with a step inside the courier on-boarding program for 14 days and will not to proceed further</p><p>SURPLUS - Zone has been closed for On-boarding; courier cannot proceed until zone on-boarding re-opens</p><p>ACTIVE - Courier has interacted with the app within the last two weeks and will be automatically scheduled based on their availability, receive notifications and may complete orders</p><p>INACTIVE - Courier has not interacted with the app for at least two weeks, and will not be scheduled for shifts. May interact with the app to convert their status to active, and be eligible for shifts and deliveries</p><p>RELIABILITY_ISSUES - No longer in use, historically account was suspended due to frequent flakes or rejected orders</p><p>VEHICLE_ISSUES - Account suspended due to reported vehicle problems, but may reactivate by contacting courier support</p><p>INCIDENT_ISSUES - Account suspended indefinitely due to significant concern (used exclusively by Incidents team)</p><p>OTHER_ACCOUNT_ISSUES - General account suspension, usually in connection with problems not categorised under regular courier status</p><p>EXPIRED_DOCUMENTS - General account suspension, typically for expired right to work documentation</p><p>REJECTED - Applicant did not meet minimum requirements for access to the network</p><p>WITHDRAWN - Applicant decided not to proceed with onboarding</p><p>BANNED - Courier’s access to the network was revoked following escalation</p><p>LEFT_NETWORK - Courier voluntarily left the network</p>

### CourierSync
* CourierSync `object`: The courier sync payload holds the updated values for deliveries, personal information, location and shifts associated with a particular courier.
  * cancelledOrderSummaries `array`: List with a summary of all the cancelled orders associated with the courier.
    * items [OrderCancelled](#ordercancelled)
  * checkedInState [CheckedInState](#checkedinstate)
  * doNotUseStatus [DoNotUseStatus](#donotusestatus)
  * earlyCheckoutAvailable `boolean`: The possibility of an early checkout of the shift is available when true.
  * firstName `string`: First name of the courier in which the updated sync payload was requested for.
  * flexStateForAssignedZones `array`: List of flex state types for each delivery zone the courier is currently on a delivery process or have already delivered orders.
    * items [CourierZoneFlexState](#courierzoneflexstate)
  * isLiveFlexStatesAvailable `boolean`: The live flex states are enabled when true.
  * jobs `array`: The list of jobs assigned to the courier.
    * items [JobDetails](#jobdetails)
  * lastName `string`: Last name of the courier in which the updated sync payload was requested for.
  * localSaveSeconds `number`: Static value with the amount of seconds the application is supposed to save a fresh courier location. The logic implemented expects the application to save a new location when the elapsed seconds is greater equal than local send seconds.
  * name `string`: Name of the courier in which the updated sync payload was requested for.
  * orderAcceptanceTimes [OrderAcceptanceTimes](#orderacceptancetimes)
  * remainingJobs `number`: Amount of remaining jobs assignable to the courier.
  * serverGateMeters `number`: Static value with the distance in meters the application is supposed to send a fresh location to the server. The logic implemented expects the application to send a new location to the server when the distance to the previous location is greater equal than server gate meters.
  * serverSendSeconds `number`: Static value with the amount of seconds the application is supposed to send a fresh location to the server. The logic implemented expects the application to send a new location to the server when the elapsed seconds is greater equal than server send seconds.
  * shift [Shift](#shift)
  * status [CourierStatus](#courierstatus)
  * timestamp `number`: Current timestamp for the courier sync updated payload.
  * timezone `string`: Time zone in which the courier shift was started.
  * topUpPromotion [TopUpPromotion](#topuppromotion)
  * totalDeliveries `number`: Number of deliveries completed by the courier.

### CourierZoneFlexState
* CourierZoneFlexState `object`: The courier zone flex state object, contains the flex state type and the flex availability status for a given delivery zone.
  * deliveryZoneId `string`: Delivery zone identifier for flex state.
  * deliveryZoneName `string`: Delivery zone name for flex state.
  * flexAvailable `boolean`: Flex states are enabled when true
  * flexStateType [SyncFlexStateType](#syncflexstatetype)

### CreateAttemptedDeliveryQuery
* CreateAttemptedDeliveryQuery `object`
  * ReasonCode `string` (values: ProblemWithAddress, NoAnswer): The reason the attempted delivery event was created

### CreateDeal
* CreateDeal `object`
  * Date `string`: `YYYY-MM-DDThh:mm:ssZ (UTC)`
  * DealGroups `array`
    * items [CreateDealGroup](#createdealgroup)
  * ProductId `string`
  * Quantity `number`

### CreateDealGroup
* CreateDealGroup `object`
  * DealGroupId `string`
  * Products `array`
    * items [CreateProduct](#createproduct)

### CreateGeoLocation
* CreateGeoLocation `object`
  * Latitude `number`
  * Longitude `number`

### CreateLocation
* CreateLocation `object`
  * GeoLocation: Not available across platform yet, but applied for future proofing.
    * Latitude `number`
    * Longitude `number`
  * ZipCode `string`

### CreateMenuItemRequest
* CreateMenuItemRequest `object`
  * Category [CategoryRequest](#categoryrequest)
  * Description `string`: Description of the Menu Item
  * HasAllergens `boolean`: Whether the menu item has any allergens
  * Labels `array`: Lables of the Menu Item
    * items `string`
  * Name **required** `string`: Name of the Menu Item
  * OptionGroups `array`: A list of options groups of the Menu Item
    * items [UpdateModifierGroupRequest](#updatemodifiergrouprequest)
  * PreferenceGroups `array`: A list of preference groups of the Menu Item
    * items [UpdateModifierGroupRequest](#updatemodifiergrouprequest)
  * ReceiptNumber `string`: The Receipt number or kitchen number of the Menu Item
  * Variations `array`: Any variations of the Menu Item
    * items [UpdateMenuItemVariationRequest](#updatemenuitemvariationrequest)

### CreateMessageModel
* CreateMessageModel `object`: Information needed to create a message for the Scoober ops team
  * city `string`: City this order is located in.
  * countryCode `string`: 2-letter ISO code for the country this ticket is about.
  * description **required** `string`: Description, main body, of the message to send.
  * reason **required** `string`: Scoober contact reason for this ticket.
  * scooberJobId `string`: Scoober job ID, if known.
  * status **required** `string`: Status of the Zendesk ticket.
  * subject **required** `string`: Subject of the message to send.
  * ticketId **required** `integer`: Zendesk ticket ID this message is about.

### CreateModifier
* CreateModifier `object`
  * ModifierId `string`
  * Quantity `number`

### CreateModifierGroup
* CreateModifierGroup `object`
  * ModifierGroupId `string`
  * Modifiers `array`
    * items [CreateModifier](#createmodifier)

### CreateOffersRequest
* CreateOffersRequest `object`: The request object for creating of new offer group.
  * daysOfWeek `array`: Days of week to run the offer
    * items `string` (values: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday)
  * offerTemplateId `integer`: Internal id of offer template
  * qualifyingValue `object`: Minimum qualifying value for offer to be applied
    * currency `string`: Currency code in ISO 4217 format
    * value `integer`: Smallest unit of local currency

### CreateOrderDetails
* CreateOrderDetails `object`
  * Location [CreateLocation](#createlocation)

### CreateProduct
* CreateProduct `object`
  * Date `string`: `YYYY-MM-DDThh:mm:ssZ (UTC)`
  * ModifierGroups `array`
    * items [CreateModifierGroup](#createmodifiergroup)
  * ProductId `string`
  * Quantity `number`
  * RemovedIngredients `array`
    * items [CreateRemovedIngredient](#createremovedingredient)

### CreateRemovedIngredient
* CreateRemovedIngredient `object`
  * Details `string`

### CreateRequest
* CreateRequest `object`: The request object for creating a basket.
  * Deals `array`: All deals to added to new basket.
    * items: Individual deal to added to new basket.
      * Date `string`: `YYYY-MM-DDThh:mm:ssZ (UTC)`
      * DealGroups `array`
        * items [CreateDealGroup](#createdealgroup)
      * ProductId `string`
      * Quantity `number`
  * MenuGroupId `string`
  * OrderDetails: Information needed to allow an order to be placed on a basket.
    * Location [CreateLocation](#createlocation)
  * Products `array`: All products to added to new basket.
    * items: Individual product to added to new basket.
      * Date `string`: `YYYY-MM-DDThh:mm:ssZ (UTC)`
      * ModifierGroups `array`
        * items [CreateModifierGroup](#createmodifiergroup)
      * ProductId `string`
      * Quantity `number`
      * RemovedIngredients `array`
        * items [CreateRemovedIngredient](#createremovedingredient)
  * RestaurantSeoName `string`: A unique per tenant identifier for a restaurant used for external operations.

### CreateRestaurantCompensationQuery
* CreateRestaurantCompensationQuery `object`
  * Comments `string`: Any other comments to add to the request
  * ReasonCode `string` (values: NotSet, BeingPrepared, OnItsWay, Delivered, Unknown): The reason why compensation is due

### CreateSupportTicketRequest
* CreateSupportTicketRequest `object`: Request containing support ticket information
  * message `string`: The message with the support details
  * requestTypes `array`: List of types ticket belongs to
    * items `string`: Type the ticket belongs to

### CreateTicketModel
* CreateTicketModel `object`: Information needed to create a ticket on the Just Eat Zendesk instance for a Scoober delivery support incident
  * city `string`: City of the delivery in question of this ticket.
  * country `string`: 2-letter ISO code of the country this pertains to. Will be inferred from queried API.
  * courier `string`: Courier who created this query.
  * description **required** `string`: Description (main body) of the ticket.
  * externalId **required** `string`: We will note this as incident/ticket/query ID used by the calling party and include it for their future reference.
  * language `string`: 2-letter ISO code of the language for the ticket. Will be inferred from queried API.
  * reason **required** `string`: Scoober reason code for the creation of this ticket.
  * requesterEmail `string`: Ticket requester e-mail address.
  * requesterName `string`: Ticket requester name.
  * responseUrl **required** `string`: Where should we respond to with progress on this request?
  * scooberJobId `string`: Scoober job ID for this order.
  * senderType `array`: Scoober transmits a sender type value.
    * items `string`
  * status `string`: Ticket status to set on creation of this ticket. Possible values: New, pending, solved.
  * subject **required** `string`: Subject of the ticket.

### CurrentUserResponse
* CurrentUserResponse `object`
  * email `string`
  * firstName `string`
  * globalUserId `string`
  * lastName `string`

### CustomisationResponse
* CustomisationResponse `object`: Information about initial options to show to user
  * config `object`
    * liveChatEnabled `boolean`: Should we enable Live Chat
    * personalisedHelpEnabled `boolean`: Should we show Personalised Help
  * helpSessionId `string`: Unique id for this help session
  * personalisation `object`
    * callRestaurantAction [HelpAction](#helpaction)
    * dataLayer `object`: Key/values to be passed to analytics
    * orderActions `array`: Actions pertaining to the order
      * items [HelpAction](#helpaction)
    * topLevelActions `array`: Top-level actions not necessarily pertaining to the order
      * items [HelpAction](#helpaction)

### CustomisationResponseWeb
* CustomisationResponseWeb `object`: Information about initial options to show to user
  * config `object`: General config / feature toggles
    * liveChatEnabled `boolean`: Should we enable Live Chat
    * personalisedHelpEnabled `boolean`: Should we show Personalised Help
  * helpSessionId `string`: Unique id for this help session
  * order `object`: The customer's most recent or specified order
    * friendlyReference `string`: Friendly order id.  Usually numeric
    * id `string`: Alphanumeric order id
    * status `object`: Information related to the status of the order
      * dateText `string`: The date / time to display to the customer
      * isActive `boolean`: Is this an active order?
      * isFinishedWithNegativeOutcome `boolean`: Is this order in a final, unhappy (e.g. Cancelled) state?
      * isFinishedWithPositiveOutcome `boolean`: Is this order in a final, happy, state?
      * isForDelivery `boolean`: Is this a delivery order (as opposed to collection)?
      * preAcceptance `boolean`: Is this order still awaiting acceptance from a restaurant?
      * preamble `string`: Friendly 'preamble' text to display to the customer
      * statusText `string`: Friendly text to display to the customer
      * value `string`: The consumer status of the order
  * personalisation `object`: The actions that are relevant to this customer / order
    * callRestaurantAction [HelpAction](#helpaction)
    * dataLayer `object`: Key/values to be passed to analytics
    * orderActions `array`: Actions pertaining to the order
      * items [HelpAction](#helpaction)
    * topLevelActions `array`: Top-level actions not necessarily pertaining to the order
      * items [HelpAction](#helpaction)
  * restaurant `object`: The restaurant of the most recent or specified order
    * name `string`: Name of the restaurant
    * telephone `string`: Restaurant's telephone number
    * thumbnail `string`: URI for the restaurant's thumbnail image
  * user `object`: The current user
    * isLoggedIn `boolean`: Is the user currently logged in?
    * name `string`: The user's name

### DayOfWeek
* DayOfWeek `integer` (values: 0, 1, 2, 3, 4, 5, 6)

### Deal
* Deal `object`
  * BasketProductIds `array`
    * items `string`
  * CategoryId `string`
  * DealGroups `array`
    * items [DealGroup](#dealgroup)
  * Name `string`
  * ProductId `string`
  * Quantity `number`
  * TotalPrice `number`
  * Variation `string`

### DealGroup
* DealGroup `object`
  * DealGroupId `string`
  * Products `array`
    * items [DealProduct](#dealproduct)

### DealItemVariation
* DealItemVariation `object`
  * additionPrice `number`: Selecting this modifier will increase the base price of the variation by this amount in the minor unit of the currency.
  * dealItemVariationId `string`: A referenced variation id that can be a part of a deal group.
  * maxChoices `integer`: The maximum number of times this deal item variation can be chosen within a given deal group.
  * minChoices `integer`: The minimum number of times this deal item variation can be chosen within a given deal group.

### DealProduct
* DealProduct `object`
  * ModifierGroups `array`
    * items [ModifierGroup](#modifiergroup)
  * Name `string`
  * ProductId `string`
  * Quantity `number`
  * RemovedIngredients `array`
    * items [RemovedIngredient](#removedingredient)
  * TotalPrice `number`
  * Variation `string`

### DeliveryDriverInfo
* DeliveryDriverInfo `object`
  * ArrivalTimeAtRestaurant `string`: The ISO-8601 datetime arrival time of the driver
  * DeliveryState `string` (values: Accepted, TransmissionFailed): Current state of the delivery
  * DriverContactNumber `string`: The driver's contact telephone number
  * DriverName `string`: The driver's full name
  * DynamicArrivalEstimate `string`: The ISO-8601 datetime dynamic estimated arrival of the driver
  * EstimatedArrivalTime `string`: The ISO-8601 datetime estimated arrival of the driver

### DeliveryFee
* DeliveryFee `object`
  * deliveryCharge `object`: base delivery charge for a given zone
    * currency `string`: Currency code in ISO 4217 format
    * value `integer`: Smallest unit of local currency
  * freeDelivery `object`: Free delivery over order price
    * currency `string`: Currency code in ISO 4217 format
    * value `integer`: Smallest unit of local currency
  * minimumOrder `object`: Minimum order value
    * currency `string`: Currency code in ISO 4217 format
    * value `integer`: Smallest unit of local currency
  * smallOrderCharge `object`: delivery charge for orders that has order value less then minimumOrder
    * currency `string`: Currency code in ISO 4217 format
    * value `integer`: Smallest unit of local currency
  * zoneId `string`: Id of assigned zone

### DeliveryZone
* DeliveryZone `object`
  * deliveryMinutes `integer`: geographical zone generated by SKIP, based on delivery minutes.
  * unboundedZone `object`: geo json representation of delivery zone
    * coordinates `array`: geographical polygon https://tools.ietf.org/html/rfc7946#section-3.1.4. It might conist from multiple linear rings
      * items `object`
        * coordinates `array`: geographical coordinates of linear ring
          * items `object`
  * zoneId `string`: id of the zone

### Discount
* Discount `object`
  * Amount `number`: The amount of discount
  * VoucherType [VoucherType](#vouchertype)

### DiscountedItem
* DiscountedItem `object`
  * discountPercentage `number`: The discount percentage applied.
  * productId `string`: The unique identifier of the discounted product item.

### DiscoveryResponse
* DiscoveryResponse `object`
  * searchResults `array`: Restaurants serving the requested area
    * items [DiscoveryResponseItem](#discoveryresponseitem)

### DiscoveryResponseCuisine
* DiscoveryResponseCuisine `object`
  * name `string`: Display name of the cuisine
  * seoName `string`: Sanitized name of the cuisine, compatible with URLs

### DiscoveryResponseItem
* DiscoveryResponseItem `object`
  * cuisines `array`: Cuisines of the restaurant
    * items [DiscoveryResponseCuisine](#discoveryresponsecuisine)
  * name `string`: Display name of the restaurant
  * restaurantId `string`: Id of the restaurant

### DoNotUseStatus
* DoNotUseStatus `string` (values: IN_USE, NOT_IN_USE, UNRESPONSIVE, PAUSE_ORDERS, CANCELLATION): The usability status of a courier

### EposState
* EposState `integer` (values: None, Failed, FailedAcknowledged, FailedDismissed): Current state of sending Order to EPOS system

### ExperimentContext
* ExperimentContext `object`
  * Client `string` (values: Web, Android, iOS, Mobile, All, Test): Type of client making the request.
  * ClientVersion `string`: The version of the experiment client.
  * Culture `string`: Culture of the request.
  * IsBetaClient `boolean`: Client is a beta instance.
  * UserAgent `string`: Browser user agent.
  * UserBucket `string`: Representation of how the user has been partitioned into experiments.

### ExperimentErrorResponse
* ExperimentErrorResponse `object`: The error object returned when an operation fails
  * Message `string`

### ExperimentResultResponse
* ExperimentResultResponse `object`
  * AssociatedTicket `string`: Associated jira experiment ticket.
  * Name `string`: The experiment name.
  * ParentTicket `string`: Parent jira experiment ticket.
  * Partition `object`: Experiment partition.
  * Version `integer`: Version number of the experiment.

### ExperimentResultsResponse
* ExperimentResultsResponse `object`
  * Active `object`: The active (enabled) experiments.

### ExperimentValue
* ExperimentValue `object`: Defines data related to an experiment.
  * name **required** `string`: The name of the experiment.
  * variant **required** `string`: The value that the user has been bucketed into, also known as the variant. For

### ExternalSearchResponse
* ExternalSearchResponse `object`
  * Restaurants `array`
    * items `object`
      * Address `object`
        * City `string`
        * FirstLine `string`
        * Latitude `number`
        * Longitude `number`
        * Postcode `string`
      * DeliveryEtaMinutes `object`
        * Approximate `number`
        * RangeLower `number`
        * RangeUpper `number`
      * DriveDistance `number`
      * DriveInfoCalculated `boolean`
      * Id `number`
      * IsOpenNow `boolean`
      * IsOpenNowForDelivery `boolean`
      * Name `string`
      * UniqueName `string`
      * Url `string`

### Fees
* Fees `object`: The calculated courier payment components.
  * bonuses `array`: List of bonuses that may be granted to the courier under specific situations.
    * items [BonusSummary](#bonussummary)
  * deliveryFee `number`: Delivery fee paid by the customer
  * driveScoreSubsidy `number`: Drive score subsidy paid to courier
  * jobPay `number`: Job pay is the sum of the pay components subsidy, drive score subsidy and delivery fee.
  * reimbursements `number`: Reimbursements paid to courier. This might occur in the event of an order cancellation, order other refundable reasons.
  * subsidy `number`: Skip subsidy paid to courier
  * tip `number`: Tip the courier might get from customers when an order is placed

### FlexStateType
* FlexStateType `string` (values: CODE_RED, OPEN, SEEKING)

### FlowResponse
* FlowResponse `object`
  * modals `object`: Dictionary of strings to FlowStepResponses
  * stepResponse `object`
    * data [FlowStep](#flowstep)
    * type `string` (values: TextAndActions, ItemSelection, BadItemIssueSelection, RequestCsat, LateOrderUpdateReceived)

### FlowStep


### FlowStepBase
* FlowStepBase `object`: Abstract base schema for flow steps.
  * closeButton [HelpAction](#helpaction)
  * screenEvent `object`
    * dataLayer `object`
      * screenName `string`
  * title `string`

### GeneratePresignedFIleUploadUrlRequest
* GeneratePresignedFIleUploadUrlRequest `object`: Request that contains information about file that will be uploaded to an AWS S3 bucket
  * fileName `string`: The name of file that will be uploaded to the AWS S3 bucket
  * fileSizeInBytes `number`: The size of file that will be uploaded to the AWS S3 bucket, in bytes

### GeneratePresignedFIleUploadUrlResponse
* GeneratePresignedFIleUploadUrlResponse `object`: Response that provides all needed metadata to build signed request to upload file to AWS S3 bucket from a client application
  * fields `object`: Request metadata to make upload to S3 bucket
    * Content-Type `string`: Content-Type of uploaded file
    * Policy `string`: The Base64-encoded security policy that describes what is permitted in the request
    * X-Amz-Algorithm `string`: The signing algorithm that you used to calculate the signature.
    * X-Amz-Credential `string`: a string of the following form <aws-access-key-id>/<date>/<aws-region>/<aws-service>/aws4_request
    * X-Amz-Date `string`: The date value specified in the ISO8601 formatted string.
    * X-Amz-Security-Token `string`: AWS account token
    * X-Amz-Signature `string`: The HMACSHA256 hash of the security policy
    * bucket `string`: Name of the bucket in which file will be uploaded
    * key `string`: File name that will be obtained after uploading
  * url `string`: The URL of the bucket in which file will be uploaded

### GeoLocation
* GeoLocation `object`
  * Accuracy `number`: How accurate the location is
  * Heading `number`: The direction of travel
  * Latitude `number`: The latitude component of the location
  * Longitude `number`: The longitude component of the location
  * Speed `number`: The speed of travel

### Geometry
* Geometry `object`: Geometry information for consumers location
  * coordinates `array`: longitude and latitude
    * items `number`
  * type `string`: type of primitive

### GetAvailableFulfilmentTimesResponse
* GetAvailableFulfilmentTimesResponse `object`
  * asapAvailable **required** `boolean`: If the option to fulfil an order as soon as possible is available.
  * times **required** `array`: Collection of time bands for when an order can be fulfilled.
    * items `object`: A time band for when an order can be fulfilled.
      * from **required** `string`: Start time in time band (ISO-8601 Date Time UTC).
      * to **required** `string`: End time in time band (ISO-8601 Date Time UTC). This time is greater than or equal to the from time.

### GetDeliveryFeesResponse
* GetDeliveryFeesResponse `object`
  * deliveryFees `array`: restaurant delivery fees
    * items [DeliveryFee](#deliveryfee)

### GetDeliveryZonesResponse
* GetDeliveryZonesResponse `object`
  * deliveryZones `array`: restaurant delivery zones. Maximum deliveryZones response size should be less than 20KB
    * items [DeliveryZone](#deliveryzone)

### GetSettingsResponse
* GetSettingsResponse `object`
  * deliveryAreaFeatureState `string` (values: Unreleased, Disabled, Enabled): Delivery area feature state.
  * deliveryFeesFeatureState `string` (values: Unreleased, Disabled, Enabled): Delivery fees feature state.
  * isRestaurantWhiteListed `boolean`: We are going to use smooth 'delivery fees' feature rollout. So, in the first iteration feature will be available for a several restaurants.

### GetSupportRequestTypesResponse
* GetSupportRequestTypesResponse `array`: Array of types request belongs to
  * items [SupportRequestType](#supportrequesttype)

### GetSupportRequestsResponse
* GetSupportRequestsResponse `object`: Response representing support requests from restaurant
  * paging `object`: Consists of pagination information
    * cursors `object`: Consists of cursors markers used in pagination
      * after `string`: The value should be used in the query parameter named after. It is used as a cursor of the last returned record in the previous request, from which next offset going to be fetched. A missing or empty value indicates that the end of the result set has been reached
  * requests `array`: List of restaurant support requests
    * items [SupportRequest](#supportrequest)

### GiftCardsErrorResponse
* GiftCardsErrorResponse `object`
  * code `integer`
  * codeText `string`

### GroupType
* GroupType `integer` (values: 0, 1, 2)

### HelpAction
* HelpAction `object`: Represents a possible action (i.e. button) on personalised help home page or as part of a flow
  * action `string`: The specific action a button tap invokes.  Content depends on type.
  * buttonEvent `object`: The analytics event to send on tap
    * action `string`: Google Analytics action
    * category `string`: Google Analytics category
    * label `string`: Google Analytics label (if any)
    * value `number`: Google Analytics value (if any)
  * buttonType `string` (values: Primary, Secondary, TextOnly, CloseButton, Option, OptionExtra, FoodSafety): Display type of button
  * data `object`: Data to post back (for use with type: ChapiPost).
  * department `string`: LiveChat department (for use with type: LiveChat)
  * id `string`: Unique but meaningful id for the action
  * notes `string`: Notes to pass to LiveChat (for use with type: LiveChat)
  * postText `array`: Paragraphs to display after button
    * items `string`
  * preText `array`: Paragraphs to display before button
    * items `string`
  * title `string`: Caption for the button
  * type `string` (values: LogIn, Call, Chatbot, LiveChat, ChapiGet, ChapiPost, Link, HelpArticleLink, EndFlow, Email, Deferred, OpenModal, CloseModal, NoAction): The type of action a button tap invokes

### IgnoredRestaurantIds
* IgnoredRestaurantIds `object`
  * ignoredRestaurantIds `array`: A list of restaurant ids that were present in a request but were ignored.
    * items `string`

### Ingredients
* Ingredients `object`: List of ingredients
  * name `string`: Name of ingredient

### InternalServerErrorMarketingResponse
* InternalServerErrorMarketingResponse
  * errors `array`: Underlying errors associated with the error
    * items [MarketingError](#marketingerror)
  * faultId `string`: A value that helps identify this response back to logs, so we can easily find this specific fault
  * message `string`: Specific details about the error that may assist the you in resolving the issue

### InvalidProduct
* InvalidProduct `object`
  * Name `string`
  * ProductId `string`

### Item
* Item `object`: Information about an item in the claim
  * additionalContext `string`: Comment giving additional context
  * decision `string` (values: NotDecided, Accepted, Rejected): Indicates whether decision on the claimed item was made and what was that decision
  * id `string`: Item identifier
  * name `string`: Item name
  * quantity `number`: Quantity of items
  * totalClaimed `number`: Total claimed money in smallest unit of relevant currency
  * unitPrice `number`: Price of a single unit in smallest unit of relevant currency

### ItemDecision
* ItemDecision `object`: Decision on the item
  * decision `string` (values: Accepted, Rejected): Decision made about the item
  * id `string`: Item identifier

### ItemDiscount
* ItemDiscount `object`
  * discountPercentage `number`: The discount percentage applied.
  * modifierGroups `array`: The collection of preselected modifier groups for the item.
    * items [ModifierGroup](#modifiergroup)
  * productId `string`: The unique identifier of the discounted product item.

### ItemDiscountOfferEffect
* ItemDiscountOfferEffect
  * $type **required** [ConsumerOfferEffectType](#consumeroffereffecttype)
  * discountedItems `array`: A collection of discounted items to choose one
    * items [DiscountedItem](#discounteditem)

### ItemDiscountPrompt
* ItemDiscountPrompt `object`
  * description `string`: The description of offer to show in prompt for customer
  * header `string`: The header to show in prompt for customer
  * itemDiscounts `array`: The array of items with discounts
    * items [ItemDiscount](#itemdiscount)
  * title `string`: The title to show in prompt for customer

### ItemSelectionStep
* ItemSelectionStep `object`: Flow step used for selecting problematic items
  * closeButton [HelpAction](#helpaction)
  * screenEvent `object`
    * dataLayer `object`
      * screenName `string`
  * title `string`
  * actions `array`: Array of actions (i.e. buttons)
    * items [HelpAction](#helpaction)
  * body `array`: Array of paragraphs for body text
    * items `string`
  * header `string`: Display header
  * items `array`: Array of items in order to choose from
    * items `object`
      * id `string`: Unique id of item
      * name `string`: Name of item
      * price `string`: Formatted price of item

### JobDetails
* JobDetails `object`: The details of a job which may be assigned to a courier for delivery.
  * alcoholDelivery `boolean`: The order contains alcoholic products when true.
  * amount `number`: The courier's balance regarding the job. When cash orders happen usually the courier pays out of his pocket, that would add credit to him until he's paid in full.
  * courierId `string`: Courier identifier for the job details
  * deliveryId `string`: Delivery identifier for the job.
  * destination [Address](#address)
  * distance `number`: The distance between the courier location and the job destination.
  * fees [Fees](#fees)
  * groceryDelivery `boolean`: The order contains grocery delivery when true.
  * jobType [JobType](#jobtype)
  * orderNumber `string`: Incrementing number generated for each particular order.
  * paymentType [SyncPaymentType](#syncpaymenttype)
  * restaurantName `string`: Restaurant's name.
  * status [JobStatus](#jobstatus)
  * time `number`: Job creation time stamp.

### JobStatus
* JobStatus `string` (values: UNASSIGNED, ASSIGNED_PENDING_ACCEPTED, ASSIGNED, ACCEPTED, PARKING, ARRIVED, ENTERED, COMPLETED): All possible job status during a delivery process.

### JobType
* JobType `string` (values: COLLECT, DELIVER): The job type classifies the type of job assigned to the courier. When an order is placed by the customer, two jobs are created for the courier, a collect job and a deliver job, basically the courier have to complete both jobs, first the collect job, which is the one where the order is collected from the restaurant and the deliver job as the job of delivering the order to the customer.

### Justification
* Justification `object`: The reason of the claim rejection and optional comments from the restaurant
  * comments `string`: Comment from the restaurant owner in case they rejected at least one of the items and want to type their own rejection reason
  * reason `string` (values: AlreadyRefunded, ItemReplaced, PartialRefundRequired, WasNotMissing, WillRedeliver, OrderWasHot, OrderWasOnTime, OrderWasPacked, FoodWasIntact, AddExtraItem, Other): One of the predefined reasons

### LateOrderCompensationOption
* LateOrderCompensationOption `object`
  * Amount `number`: Cost of the option in local currency
  * IsRecommended `boolean`: Whether this option is the recommended option

### LateOrderCompensationQuery
* LateOrderCompensationQuery `object`
  * CompensationOptions `array`: List of possible options for compensation
    * items [LateOrderCompensationOption](#lateordercompensationoption)
  * IsViewed `boolean`: Has this compensation query been viewed
  * QueryId `string`: The ID of the late order compensation query
  * Response [LateOrderCompensationResponse](#lateordercompensationresponse)

### LateOrderCompensationResponse
* LateOrderCompensationResponse `object`
  * AcceptedAmount `number`: The amount of compensation if accepted
  * IsAccepted `boolean`: Has the late order compensation request been accepted
  * RejectedReasonCode `string` (values: ExtraItem, StuckInTraffic, BusierThanExpected, BadWeather, UnexpectedProblems): The rejection reason if not accepted

### LateOrderCompensationRestaurantResolution
* LateOrderCompensationRestaurantResolution `object`
  * acceptedAmount `integer`: The monetary amount of compensation granted, in cents/pence. Required when isAccepted = true.
  * isAccepted `boolean`: Flag to indicate whether a compensation request has been accepted or rejected.
  * orderId `string`: The ID of the late order compensation request that this response relates to.
  * rejectedReasonCode `string` (values: BadTraffic, BadWeather, BusierThanExpected, CompensatedWithItem, NoReason): 

### LateOrderInfo
* LateOrderInfo `object`
  * IsLateOrder `boolean`: Is there a late order request
  * LateOrderProcessed `boolean`: Has the late order request been processed by the restaurant

### LateOrderRestaurantResponse
* LateOrderRestaurantResponse `object`
  * additionalDeliveryTimeToAddMinutes `integer`: The amount of time to add to the current delivery estimate in minutes
  * lateOrderStatus `string` (values: Preparing, OnItsWay, Delivered): The updated later order query status

### LateOrderUpdateReceivedStep
* LateOrderUpdateReceivedStep `object`: Flow step used to display the restaurant's response to a customer's Late Order update request
  * closeButton [HelpAction](#helpaction)
  * screenEvent `object`
    * dataLayer `object`
      * screenName `string`
  * title `string`
  * actions `array`: Array of actions (i.e. buttons)
    * items [HelpAction](#helpaction)
  * header `string`: Display header
  * message `string`: Message from restaurant
  * messageHeader `string`: Header for the message from restaurant
  * newDueDate `string`: New expected due date

### LegacyTempOfflineStatus
* LegacyTempOfflineStatus `string` (values: Unset, None, TempOffline, ClosedToday, ClosedDueToEvent, FailedJctConnection, NoTrOverride, IgnoredOrders): 

### ListOfOfflineItemsResponse
* ListOfOfflineItemsResponse `object`
  * offlineItems `array`: List of offline items for a given restaurant.
    * items [OfflineItemsResponse](#offlineitemsresponse)
  * paging `object`: Consists of pagination information.
    * cursors `object`: Consists of cursors markers used in pagination.
      * after `string`: The value should be used in the query parameter named after. It is used as a cursor of the last returned record in the previous request, from which next offset going to be fetched. A missing or empty value indicates that the end of the result set has been reached.

### LiveMetrics
* LiveMetrics `object`: The live metrics object for a given delivery zone.
  * aajlTimestamp `number`: Timestamp for the average assignable job load retrieved for a given delivery zone.
  * currentAajl `number`: Average assignable job load retrieved for a given delivery zone.
  * marketplaceRank `number`: Current marketplace rank value retrieved for a given delivery zone.
  * marketplaceRankStatus `boolean`: Marketplace On/Off status
  * throttlingStatus `boolean`: Zone Throttling On/Off status
  * zoneThrottling `number`: Current zone throttling value retrieved for a given delivery zone.

### Manufacturer
* Manufacturer `object`
  * brand `string`: Brand name
  * city `string`: City
  * manufacturer `string`: Manufacturer name
  * origin `string`: Country
  * postalCode `string`: Postal Code
  * streetAddress `string`: Street Address

### MarketingContentResponse
* MarketingContentResponse `object`
  * selected `array`: The set of 'select' properties from the request that meet the following criteria: 
    * items `string`

### MarketingError
* MarketingError `object`
  * description `string`: Specific details about the error that may assist the you in resolving the issue
  * errorCode `string`: A value that helps identify this response back to logs, so we can easily find this specific fault

### MarketingErrorResponse
* MarketingErrorResponse `object`
  * errors `array`: Underlying errors associated with the error
    * items [MarketingError](#marketingerror)
  * faultId `string`: A value that helps identify this response back to logs, so we can easily find this specific fault
  * message `string`: Specific details about the error that may assist the you in resolving the issue

### MarketingReportResponse
* MarketingReportResponse `object`: The report data and the extraction date
  * dataExtractionDateUTC `string`: The UTC datetime that the report data was extracted from BigQuery

### MarketplaceRank
* MarketplaceRank `object`: The marketplace rank object used to build a Ranking for a given delivery zone.
  * aajl `number`: Average Assignable Job Load
  * enabled `boolean`: Status of the corresponding rank
  * rank `number`: Rank position of Average Assignable Job Load

### MarketplaceRankingSettings
* MarketplaceRankingSettings `object`: The marketplace ranking settings object for all endpoints.
  * id `string`: Delivery Zone Id
  * marketplaceRankingStatus `boolean`: Marketplace On/Off Status
  * ranks `array`: Array of marketplace rank objects used to build a Ranking for a given delivery zone.
    * items [MarketplaceRank](#marketplacerank)

### MarketplaceRankingSettingsList
* MarketplaceRankingSettingsList `object`: Marketplace Ranking Settings List
  * marketplaceRankSettingsList `array`: List of Marketplace Ranking Settings
    * items [MarketplaceRankingSettings](#marketplacerankingsettings)

### Menu
* Menu
  * currency `string`: The currency of the items on the menu in ISO 4217 format, ie GBP, EUR or AUD
  * description `string`: A top level description for the menu.
  * name `string`: The name of the restaurant.
  * restaurantId `string`: A unique identifier at tenant level for a given restaurant.
  * availabilities `array`: A set of availabilities that can later be referenced by individual menu items.
    * items [Availability](#availability)
  * categories `array`: A set of categories that appear on the menu.
    * items [Category](#category)
  * items `array`: All of the menu items within the menu.
    * items [MenuItem](#menuitem)

### MenuAllEditsResponse
* MenuAllEditsResponse `object`
  * Items `array`: All pending changes
    * items [MenuEditResponse](#menueditresponse)

### MenuBase
* MenuBase `object`
  * currency `string`: The currency of the items on the menu in ISO 4217 format, ie GBP, EUR or AUD
  * description `string`: A top level description for the menu.
  * name `string`: The name of the restaurant.
  * restaurantId `string`: A unique identifier at tenant level for a given restaurant.

### MenuDealGroup
* MenuDealGroup
  * id `string`: A unique identifier at menu level for a deal group.
  * name `string`: The name of the deal group.
  * numberOfChoices `integer`: How many deal item variations must be selected to satisfy this deal group.
  * dealItemVariations `array`: The ids of the variations that can be selected in order to satisfy this deal group.
    * items [DealItemVariation](#dealitemvariation)
  * id `string`: A unique identifier at menu level for a deal group.
  * name `string`: The name of the deal group.
  * numberOfChoices `integer`: How many deal item variations must be selected to satisfy this deal group.

### MenuDealGroupBase
* MenuDealGroupBase `object`
  * id `string`: A unique identifier at menu level for a deal group.
  * name `string`: The name of the deal group.
  * numberOfChoices `integer`: How many deal item variations must be selected to satisfy this deal group.

### MenuEditResponse
* MenuEditResponse `object`
  * CategoryId `string`: Id of the category of the menu item
  * CategoryName `string`: Name of the category of the menu item
  * Description `string`: Description of the menu item
  * EditType `integer` (values: Add, Edit, Delete, None): Action being applied to the menu item
  * Labels `array`: Lables for the menu item
    * items `string`
  * MenuItemId `string`: Id of the menu item
  * MenuItemName `string`: Name of the menu item
  * OptionGroups `array`: Option groups available for the menu item
    * items [ModifierGroupResponse](#modifiergroupresponse)
  * PreferenceGroups `array`: Preference groups available for the menu item
    * items [ModifierGroupResponse](#modifiergroupresponse)
  * ReceiptNumber `string`: Receipt or kitchen number of the menu item
  * Variations `array`: Variations applicable to the menu item
    * items [VariationResponse](#variationresponse)

### MenuIngestionResponse
* MenuIngestionResponse `object`
  * correlationId `string`: An ID for the asynchronous operation to ingest the menu

### MenuItem
* MenuItem
  * description `string`: The description of the menu item.
  * id `string`: A unique identifier at menu level for a menu item.
  * labels `array`: Used to toggle front end icons for the available labels.
    * items `string` (values: hot, vegetarian, alcohol)
  * name `string`: The name of the menu item.
  * requireOtherProducts `boolean`: Cannot be selected as a stand alone item, it has to be ordered with other items. Typically this will apply to menu items within drinks and dessert categories.
  * type `string` (values: menuItem, deal): Indicates whether this is a regular meal item or a deal item.
  * dealGroups `array`: A set of deal groups for this menu item.
    * items [MenuDealGroup](#menudealgroup)
  * imageUrl `string`: A menu item image URL.
  * modifierGroups `array`: A set of modifier groups for this menu item.
    * items [MenuModifierGroup](#menumodifiergroup)
  * variations `array`: A set of variations of this menu item.
    * items [Variation](#variation)

### MenuItemBase
* MenuItemBase `object`
  * description `string`: The description of the menu item.
  * id `string`: A unique identifier at menu level for a menu item.
  * labels `array`: Used to toggle front end icons for the available labels.
    * items `string` (values: hot, vegetarian, alcohol)
  * name `string`: The name of the menu item.
  * requireOtherProducts `boolean`: Cannot be selected as a stand alone item, it has to be ordered with other items. Typically this will apply to menu items within drinks and dessert categories.
  * type `string` (values: menuItem, deal): Indicates whether this is a regular meal item or a deal item.

### MenuItemDetailsResponse
* MenuItemDetailsResponse `object`
  * Category [CategoryResponse](#categoryresponse)
  * Description `string`: Description of the menu item
  * HasPendingChange `boolean`: Whether the item has pending changes
  * Id `string`: Id of the menu item
  * IsDeal `boolean`: Is a deal
  * Labels `array`: Labels of the menu item
    * items `string`
  * Name `string`: Name of the menu item
  * OptionGroups `array`: Option groups of the menu item
    * items [ModifierGroupResponse](#modifiergroupresponse)
  * PreferenceGroups `array`: Preference groups of the menu item
    * items [ModifierGroupResponse](#modifiergroupresponse)
  * ReceiptNumber `string`: The receipt or kitchen number of the menu item
  * Variations `array`: Variations applicable to the menu item
    * items [VariationResponse](#variationresponse)

### MenuItemResponse
* MenuItemResponse `object`
  * Description `string`: Description of the menu item
  * HasPendingChange `boolean`: Whether the item has pending changes
  * Id `string`: Id of the menu item
  * IsDeal `boolean`: Is a deal
  * Labels `array`: Labels of the menu item
    * items `string`
  * Name `string`: Name of the menu item
  * ReceiptNumber `string`: The receipt or kitchen number of the menu item
  * Variations `array`: Variations applicable to the menu item
    * items [VariationResponse](#variationresponse)

### MenuItemVariationResponse
* MenuItemVariationResponse `object`
  * MenuItemId `string`: Id of the menu item
  * PreferenceGroupsIds `array`: List of Preference Group Ids
    * items `integer`
  * UnitsOfferedInDealGroup `integer`: Units offered in deal group
  * VariationId `string`: Id of the variation

### MenuModifier
* MenuModifier `object`
  * additionPrice `number`: Selecting this modifier will increase the base price of the variation by this amount in the minor unit of the currency.
  * id `string`: A unique identifier relative to the menu for a modifier.
  * maxChoices `integer`: The maximum number of times this modifier can be chosen within a given modifier group.
  * minChoices `integer`: The minimum number of times this modifier can be chosen within a given modifier group.
  * name `string`: The name of the modifier.

### MenuModifierGroup
* MenuModifierGroup `object`
  * id `string`: A unique identifier relative to the menu for a modifier group.
  * maxChoices `integer`: The maximum number of modifiers that must be selected to satisfy this modifier group.
  * minChoices `integer`: The minimum number of modifiers that must be selected to satisfy this modifier group.
  * modifiers `array`: The modifiers that can be selected to satisfy this modifier group.
    * items [MenuModifier](#menumodifier)
  * name `string`: A name for the modifier group, usually phrased as a question, e.g. Would you like any extras?

### MenuRecommendationsRequest
* MenuRecommendationsRequest `object`: Describes a request for dish recommendations for a particular restaurant menu.
  * orderRequestDetails **required** `object`: Defines the time and service type for which the order is requested.
    * dayOfWeek `string` (values: sunday, monday, tuesday, wednesday, thursday, friday, saturday): The day of the week that the order is placed for.
    * orderedForTime `string`: The time, local to restaurant, in ISO 8601 format, that the order is requested for. If the ordered for time is not known at the point of this request then the time should be the current local time.
    * serviceType `string` (values: collection, delivery): The service type, "collection" or "delivery".
  * restaurantId **required** `string`: The id of the restaurant that the recommendations are for.

### MenuRecommendationsResponse
* MenuRecommendationsResponse `object`: Contains menu dish recommendations.
  * themes **required** `array`: List of the themes of the recommendations, i.e. personal favourites, most popular, etc.
    * items `object`
      * id `string`: Unique identifier for the theme.
      * recommendations `array`: List of dish recommendations for the theme.
        * items `object`
          * confidence `number`: Recommendation confidence score.
          * productId `string`: ID of a product/dish being recommended.
          * type `string`: Describes the type of recommendation, i.e. popular, healthy.

### MissingItem
* MissingItem `object`
  * ItemReference `string`: Product reference of missing item
  * Name `string`: Name of the missing item
  * Quantity `integer`: Number of items missing
  * RefundAmount `number`: Total cost of missing item

### MissingItemClaim
* MissingItemClaim `object`
  * Id `string`: Id of the missing item claim
  * MissingItems `array`: Items that are missing
    * items [MissingItem](#missingitem)
  * RefundRefusedReasonCode `string`: Reason for refusing if status is refused
  * Status [MissingItemClaimStatus](#missingitemclaimstatus)
  * TotalAmount `number`: Total cost of the claim
  * TotalNumberItems `integer`: Total quantity of items in the claim

### MissingItemClaimStatus
* MissingItemClaimStatus `integer` (values: Unknown, Pending, Viewed, RefundAccepted, RefundRefused): Status of missing item claim

### Modifier
* Modifier `object`
  * MaximumAdditionalModifiers **required** `number`
  * ModifierId `string`
  * Name `string`
  * Quantity `number`
  * TotalPrice `number`

### ModifierGroup
* ModifierGroup `object`
  * MinimumChoices **required** `number`
  * ModifierGroupId `string`
  * Modifiers `array`
    * items [Modifier](#modifier)

### ModifierGroupResponse
* ModifierGroupResponse `object`
  * Id `string`: Id of Modifier Group
  * MaxChoices `integer`: The maximum number of options allowed to be selected
  * MinChoices `integer`: The minimum number of options allowed to be selected
  * Modifiers `array`: A list of modifiers within the group
    * items [ModifierResponse](#modifierresponse)
  * Name `string`: Name of Modifier Group

### ModifierResponse
* ModifierResponse `object`
  * AdditionPrice `number`: The additional price
  * DefaultChoices `integer`: The default number of options allowed to be selected
  * Id `string`: Id of the modifier
  * MaxChoices `integer`: The maximum number of options allowed to be selected
  * MinChoices `integer`: The minimum number of options allowed to be selected
  * Name `string`: Name of the modifier
  * RemovePrice `number`: The cost to remove
  * Variations `array`: The variations to which this modifiers applies
    * items [VariationModifierResponse](#variationmodifierresponse)

### NextOrder
* NextOrder
  * $type **required** `string`
  * offerId `string`: Unique Identifier for Offer
  * amount `number`: The percentage value discount
  * earned `boolean`: Has the consumer Earned (become eligible to claim) the NextOrder Offer
  * maxQualifyingValue `number`: The maximum order value required to be eligible for the offer
  * qualifyingValue `number`: The minimum order value required to be eligible for the Offer

### NotFoundMarketingResponse
* NotFoundMarketingResponse
  * errors `array`: Underlying errors associated with the error
    * items [MarketingError](#marketingerror)
  * faultId `string`: A value that helps identify this response back to logs, so we can easily find this specific fault
  * message `string`: Specific details about the error that may assist the you in resolving the issue

### Nutritional
* Nutritional `object`
  * alcohol `object`: Alcohol by volume value for product
    * unit `string`: Unit of the item
    * value `number`: Value of the item
  * caffeine `object`: Caffeine milligram value for product
    * unit `string`: Unit of the item
    * value `number`: Value of the item
  * calories `object`: Calories value for product
    * unit `string`: Unit of the item
    * value `number`: Value of the item
  * carbohydrate `object`: Carbohydrate value for product
    * unit `string`: Unit of the item
    * value `number`: Value of the item
  * energy `object`: Energy value for product
    * unit `string`: Unit of the item
    * value `number`: Value of the item
  * fat `object`: Fat value for product
    * unit `string`: Unit of the item
    * value `number`: Value of the item
  * fattyAcidTotal `object`: Fatty Acid value for product
    * unit `string`: Unit of the item
    * value `number`: Value of the item
  * protein `object`: Protein value for product
    * unit `string`: Unit of the item
    * value `number`: Value of the item
  * salt `object`: Salt value for product
    * unit `string`: Unit of the item
    * value `number`: Value of the item
  * sodium `object`: Sodium value for product
    * unit `string`: Unit of the item
    * value `number`: Value of the item
  * sugar `object`: Sugar value for product
    * unit `string`: Unit of the item
    * value `number`: Value of the item

### Offer
* Offer `object`: The object representing offer entry
  * campaignId `string`: Campaign id
  * consumerSegment `string` (values: All, NewToRestaurant): Consumer Segment to which offer applies
  * dayOfWeek `string` (values: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday): Day of week to run the offer
  * discountAmount `number`: Amount of the discount
  * discountType `string` (values: Percent, FixedAmount): Type of the discount applied
  * endTime `string`: Timestamp when offer ends during the day
  * id `string`: Internal id of the offer
  * offerType `string` (values: Percent): Type of the offer
  * qualifyingValue `object`: Minimum qualifying value for offer to be applied
    * currency `string`: Currency code in ISO 4217 format
    * value `integer`: Smallest unit of local currency
  * startTime `string`: Timestamp when offer starts during the day
  * validFrom `string`: The date when offer starts
  * validTo `string`: The date when offer ends

### OfferCampaign
* OfferCampaign `object`
  * active `boolean`: Calculated, is the campaign enabled and within start and end date
  * daysOfWeek `array`: Days of week to run the campaign
    * items `string` (values: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday)
  * discountAmount `number`: Amount of the discount
  * discountType `string` (values: None, Percent, FixedAmount): Type of the discount applied
  * enabled `boolean`: Is the offer campaign allowed to be active
  * end `string`: The date when offer campaign ends
  * id `string`: Internal id of the offer campaign
  * qualifyingValue `object`: qualifying value for a given offer template
    * currency `string`: Currency code in ISO 4217 format
    * value `integer`: Smallest unit of local currency
  * start `string`: The date when offer campaign starts
  * type `string` (values: CheekyCampaign, DonationCampaign): Type of the offer campaign

### OfferCampaignsResponse
* OfferCampaignsResponse `object`
  * offerCampaigns `array`: A Collection of Offer Campaigns
    * items [OfferCampaign](#offercampaign)

### OfferEffect
* OfferEffect `object`
  * $type **required** [ConsumerOfferEffectType](#consumeroffereffecttype)

### OfferTemplate
* OfferTemplate `object`
  * consumerSegment `string` (values: All, NewToRestaurant): Consumer Segment that offer applies
  * discountAmount `number`: Amount of the discount
  * discountType `string` (values: Percent, FixedAmount): Type of the discount applied
  * id `integer`: Internal id of the offer template
  * maxQualifyingValue `object`: Maximum qualifying value for a given offer template
    * currency `string`: Currency code in ISO 4217 format
    * value `integer`: Smallest unit of local currency
  * offerType `string` (values: Percent): Type of the offer

### OfferTemplatesResponse
* OfferTemplatesResponse `object`
  * offerTemplates `array`: A Collection of Offer Templates
    * items [OfferTemplate](#offertemplate)

### OffersResponse
* OffersResponse `object`
  * offers `array`: A Collection of Offers
    * items [Offer](#offer)

### OfflineItemsRequest
* OfflineItemsRequest `object`
  * modifierIds `array`: Modifier identifiers. Maximum sum of 25 Variation and Modifier IDs.
    * items `string`
  * nextAvailableAt `string`: Time when items will be brought back online.
  * variationIds `array`: Variation identifiers. Maximum sum of 25 Variation and Modifier IDs.
    * items `string`

### OfflineItemsResponse
* OfflineItemsResponse `object`
  * id `string`: Item identifier.
    * items `string`
  * nextAvailableAt `string`: Time when item(s) will be brought back online.
  * type `string`: Item type identifier.
    * items `string`

### OfflineProduct
* OfflineProduct `object`
  * Name `string`
  * ProductId `string`

### OfflineRestaurantsRequestModel
* OfflineRestaurantsRequestModel `object`
  * allowRestaurantOverride **required** `boolean`: Whether a restaurant should be allowed to delete this event, regardless of who raised it.
  * category `string`: A free text category used to group multiple events. This field is not intended to be used by clients.
  * duration `string`: Either a timespan in the HH:mm format or 'untilTomorrow' (this will be the next day at 4:30am +/- 10 minutes local time). Note if both duration and endDate are specified duration takes precedence.
  * endDate `string`: ISO 8601 format of the end datetime of the offline event.
  * legacyTempOfflineType [LegacyTempOfflineStatus](#legacytempofflinestatus)
  * name **required** `string`: Name of the offline event to be created.
  * reason **required** `string`: The reason for creating the offline event.
  * restaurantIds **required** `string`: A comma separated list of the IDs of the restaurants to include in the offline event. No limit to the number acccepted by the endpoint, but unexpected behaviour mat occur at more than 500 IDs.
  * startDate **required** `string`: ISO 8601 format of the start datetime of the offline event.

### OnlineItemsRequest
* OnlineItemsRequest `object`
  * modifierIds `array`: Modifier identifiers. Maximum sum of 25 Variation and Modifier IDs.
    * items `string`
  * variationIds `array`: Variation identifiers. Maximum sum of 25 Variation and Modifier IDs.
    * items `string`

### OptimizelyData
* OptimizelyData `object`
  * CdnUrl `string`: Location of the Optimizely data file
  * DataFileRevision `integer`: The index of the Optimizely revision

### OrderAcceptanceTimes
* OrderAcceptanceTimes `object`: The acceptance times used to present the offer to the courier.
  * currentSystemTimestamp `number`: The time the delivery offer was made to the courier.
  * expirationTimestamp `number`: The time when the offer to the courier will expire. Usually the courier has 60 seconds to accept a new offer.
  * viewedTimestamp `number`: The time the delivery offer was viewed by the courier

### OrderAddressSuccessResponse
* OrderAddressSuccessResponse `object`: The response object after successfully updating an order address.
  * address `array`: An array of strings containing lines of the customer's order address.
    * items `string`
  * city `string`: String value containing the city name of the customer's order address.
  * email `string`: The customer's email address.
  * geoPosition: Geo Position object containing latitude and longitude values for the customer's order address
    * latitude `number`: The latitude value of the customer's Geo Position.
    * longitude `number`: The longitude value of the customer's Geo Position.
  * name `string`: The customer's name.
  * phoneNumber `string`: The customer's phone number.
  * polygonName `string`: String value containing the polygon name of customer's order address (in tenants with no polygon name, will be the same as postcode).
  * postCode `string`: String value containing the postcode of the customer's order address.

### OrderCancelled
* OrderCancelled `object`: The order cancelled object holds the details of a cancelled order.
  * cancellationTime `number`: Current timestamp for the cancelled order.
  * collectJobStatus [JobStatus](#jobstatus)
  * courierId `string`: Courier identifier for the cancelled order.
  * deliveryId `string`: Deliver identifier for the cancelled order.
  * isAlcoholDelivery `boolean`: The cancelled order contains alcoholic products when true.
  * isCashPayment `boolean`: The cancelled order was cash payment when true.
  * orderNumber `string`: Order number for the cancelled order.
  * restaurantName `string`: Restaurant name for the cancelled order.

### OrderClaim
* OrderClaim `object`: Claim information
  * claimType `string` (values: OrderClaim): Indicates that the claim concerns the order
  * currency `string`: Name of currency in ISO 4217 format
  * expirationDate `string`: Date when the claim will be accepted automatically in case the owner of the restaurant ignores it
  * friendlyOrderReference `string`: Just Eat friendly order reference
  * id `string`: Claim identifier
  * issueType `string` (values: LateOrder, FoodNotArrived): Type of claim
  * orderId `string`: Just Eat order identifier
  * resolution `object`: Representation of the claim resolution
    * decision `string` (values: Accepted, PartiallyAccepted, Rejected): Indicates whether the claim is accepted, partially accepted or rejected - claim is partially accepted if at least one of the claimed items is accepted
    * resolvedChannel `string`: Channel which was used to resolved the claim
    * resolvedDate `string`: Date when decision on the claim was submitted
    * totalClaimedAccepted `number`: Total claimed money accepted by the restaurant in smallest unit of relevant currency
  * restaurantResponse `object`: Restaurant response on the claim
    * decision `string` (values: Accepted, Rejected): Decision on the claim
    * justification [Justification](#justification)
  * state `string` (values: Open, Closed): Indicates whether a decision about the claim was made
  * submittedDate `string`: Date when the claim was submitted
  * totalClaimed `number`: Total claimed money in smallest unit of relevant currency

### OrderClaimRestaurantResponse
* OrderClaimRestaurantResponse `object`: Restaurant response for the claim
  * decision `string` (values: Accepted, Rejected): Decision on the claim
  * justification [Justification](#justification)

### OrderEligibleForRestaurantCompensation
* OrderEligibleForRestaurantCompensation `object`
  * IsEligible `boolean`: Flag that informs if the cancelled order is eligible for compensation
  * OrderId `string`: Id for the order

### OrderGeoPosition
* OrderGeoPosition `object`: Geo Position object containing latitude and longitude values.
  * latitude `number`: The latitude value of the customer's Geo Position.
  * longitude `number`: The longitude value of the customer's Geo Position.

### OrderHistoryItem
* OrderHistoryItem `object`
  * Detail `string`: Additional information about status update
  * OccurredAt `string`: ISO 8601 Date/Time of status update
  * OrderState [ClientOrderState](#clientorderstate)
  * UpdatedBy `string`: User who made the status update

### OrderItem
* OrderItem `object`
  * BasketIds `array`: Array of basket id's that make up the item. Can be multiple due to Zeus' grouping of items
    * items `string`
  * Comment `string`: Additional comments
  * Id `string`: Basket Id of the order item
  * ItemReference `string`: Item reference uniquely identifying a product on the menu but not basket instance of a product
  * MenuIdentifier `string`: Just Eat menu identifier
  * MenuNumber `string`: Just Eat menu number
  * Name `string`: Name of the item
  * OrderItemAccessories `array`: Array of accessories for this item
    * items [OrderItemAccessory](#orderitemaccessory)
  * OrderItems `array`: Array of sub items for this item
    * items [OrderItem](#orderitem)
  * ProductCategory `string`: Just Eat product category
  * ProductTypeId `integer`: Just Eat product type id
  * Quantity `integer`: Quantity of the item
  * TotalPrice `number`: Total price of this item

### OrderItemAccessory
* OrderItemAccessory `object`
  * AccessoryName `string`: Name of the accessory
  * GroupId `integer`: Group id of the accessory
  * Id `string`: Id of the accessory
  * ItemReference `string`: Item reference uniquely identifying a product on the menu but not basket instance of a product
  * Name `string`: Name of the accessory
  * Quantity `integer`: Quantity of accessories
  * TotalPrice `number`: Total price of the accessory

### OrderItemsClaim
* OrderItemsClaim `object`: Claim information
  * affectedItems `array`: Information about the claimed items
    * items [Item](#item)
  * claimType `string` (values: OrderItemsClaim): Indicates that the claim concerns the order items
  * currency `string`: Name of currency in ISO 4217 format
  * expirationDate `string`: Date when the claim will be accepted automatically in case the owner of the restaurant ignores it
  * friendlyOrderReference `string`: Just Eat friendly order reference
  * id `string`: Claim identifier
  * issueType `string` (values: Missing, Damaged, Cold): Type of claim
  * orderId `string`: Just Eat order identifier
  * resolution `object`: Representation of the claim resolution
    * decision `string` (values: Accepted, PartiallyAccepted, Rejected): Indicates whether the claim is accepted, partially accepted or rejected - claim is partially accepted if at least one of the claimed items is accepted
    * resolvedChannel `string`: Channel which was used to resolved the claim
    * resolvedDate `string`: Date when decision on the claim was submitted
    * totalClaimedAccepted `number`: Total claimed money accepted by the restaurant in smallest unit of relevant currency
  * restaurantResponse `object`: Restaurant response on the claim
    * items `array`: Decisions on the items of a claim
      * items [ItemDecision](#itemdecision)
    * justification [Justification](#justification)
  * state `string` (values: Open, Closed): Indicates whether a decision about the claim was made
  * submittedDate `string`: Date when the claim was submitted
  * totalClaimed `number`: Total claimed money in smallest unit of relevant currency

### OrderItemsClaimRestaurantResponse
* OrderItemsClaimRestaurantResponse `object`: Restaurant response for the claim
  * items `array`: Decisions on the items of a claim
    * items [ItemDecision](#itemdecision)
  * justification [Justification](#justification)

### OrderNumberValidity
* OrderNumberValidity `object`
  * ComparisonOperator `string`: The comparison operator (eg >, <, ==)
  * NumberOfOrders `integer`: The number of orders for the comparison

### OrderPadClientOrder
* OrderPadClientOrder `object`
  * AcceptedAt `string`: ISO 8601 Date/Time order was accepted by the restaurant
  * AcceptedFor `string`: ISO 8601 Date/Time time due at the point of acceptance
  * AddressLines `array`: Customer address
    * items `string`
  * AsSoonAsPossible `boolean`: Will be false if order was a preorder
  * AttemptedDeliveryQuery [AttemptedDeliveryQuery](#attempteddeliveryquery)
  * BadItemClaims `array`: A list of bad item claims attached to the order
    * items [BadItemClaim](#baditemclaim)
  * CancellationInfo [CancellationInfo](#cancellationinfo)
  * CancelledAt `string`: ISO 8601 Date/Time order was cancelled
  * City `string`: Customer city
  * CustomerId `string`: Platform customer id
  * CustomerNote `string`: Customer added notes
  * DeliveredAt `string`: ISO 8601 Date/Time order was delivered
  * DeliveryDriverInfo [DeliveryDriverInfo](#deliverydriverinfo)
  * DeliveryDriverUsername `string`: Delivery drivers user name (usually their phone number)
  * DeliveryNote `string`: Delivery specific notes
  * EposState [EposState](#eposstate)
  * EstimatedDeliveryTimeInSeconds `integer`: How long until order will be delivered in seconds (RDS only)
  * EstimatedHandoverTimeInSeconds `integer`: How long until order needs to be handed over to driver in seconds (RDS only)
  * ExternalCustomerId `string`: Customer id restaurants can use to identify customer
  * Id `string`: Id used to identify the order in Zeus
  * IsPreorder `boolean`: Whether order is a preorder
  * IsRdsOrder `boolean`: Will be true if delivery is being arranged by Just Eat
  * LateOrderCompensationQuery [LateOrderCompensationQuery](#lateordercompensationquery)
  * LateOrderInfo [LateOrderInfo](#lateorderinfo)
  * Location [GeoLocation](#geolocation)
  * MissingItemClaims `array`: A list of missing item claims attached to the order
    * items [MissingItemClaim](#missingitemclaim)
  * ModernId `string`: Just Eat modern order id
  * Name `string`: Customer name
  * Notes `string`: General order notes
  * OrderHistory `array`: Ordered history of status updates to the order and when they happened
    * items [OrderHistoryItem](#orderhistoryitem)
  * OrderItems `array`: A list of order items
    * items [OrderItem](#orderitem)
  * OrderState [ClientOrderState](#clientorderstate)
  * OrderType [OrderType](#ordertype)
  * PaymentInfo [PaymentInfo](#paymentinfo)
  * Phone `string`: Customer phone number (will be phone masking number in markets when enabled)
  * PhoneMaskingCode `string`: Code to use when calling customer phone masking number about this order
  * Postcode `string`: Customer postcode
  * PreferredTimeDue `string`: Current agreed delivery time of the order
  * PrepareOrderFor `string`: ISO 8601 Date/Time when order should be prepared for
  * PreviousOrders `string`: Number of previous Just Eat orders by the customer
  * PreviousOrdersToRestaurant `string`: Number of previous orders by the customer to this restaurant
  * RdsPickupTime `string`: ISO 8601 Date/Time when order will be picked up by RDS partner
  * ReceivedAt `string`: ISO 8601 Date/Time order was paid
  * RestaurantId `string`: Restaurant Id of the order
  * RestaurantInformation [RestaurantInfo](#restaurantinfo)
  * SourcePartner [PartnerInfo](#partnerinfo)
  * StartOrderPreparationAt `string`: ISO 8601 Date/Time for restaurant to start preparing the order
  * TimeDue `string`: Current agreed delivery time of the order
  * WithDriverAt `string`: ISO 8601 Date/Time order was handed over to driver

### OrderStateChange
* OrderStateChange `object`
  * NewState **required** [ClientOrderState](#clientorderstate)
  * TimeAcceptedFor `string`: If accepting order what date time (with offset) are you accepting it for

### OrderTimeSuccessResponse
* OrderTimeSuccessResponse `object`: The response object for successful updates to order time.
  * asap `boolean`: True if the user has selected as soon as possible on the order, else false
  * dateTime `string`: The time the customer has requested their order for.
  * orderable `boolean`: Boolean value indicating whether the current basket is orderable.
  * utcOrderTime `string`: The time (in UTC) the customer has requested their order for

### OrderType
* OrderType `integer` (values: Collection, Delivery, Unknown): Type of order

### OrdersData
* OrdersData `object`
  * UnreceivedOrders `array`: List of all changed orders for a restaurant
    * items `string`

### PagedAfterOnlyCursorResponse
* PagedAfterOnlyCursorResponse `object`
  * paging `object`: Consists of pagination information.
    * cursors `object`: Consists of cursors markers used in forward only pagination.
      * after `string`: Cursor parameter to use in the next request to the resource to fetch the next page of data.

### PagedAvailabilitiesResponse
* PagedAvailabilitiesResponse
  * paging `object`: Consists of pagination information.
    * cursors `object`: Consists of cursors markers used in forward only pagination.
      * after `string`: Cursor parameter to use in the next request to the resource to fetch the next page of data.
  * availabilities `array`: List of availabilities for a given restaurant's menu.
    * items [Availability](#availability)

### PagedCategoriesResponse
* PagedCategoriesResponse
  * paging `object`: Consists of pagination information.
    * cursors `object`: Consists of cursors markers used in forward only pagination.
      * after `string`: Cursor parameter to use in the next request to the resource to fetch the next page of data.
  * categories `array`: List of categories for a given restaurant's menu.
    * items [CategoryBase](#categorybase)

### PagedCategoryItemsResponse
* PagedCategoryItemsResponse
  * paging `object`: Consists of pagination information.
    * cursors `object`: Consists of cursors markers used in forward only pagination.
      * after `string`: Cursor parameter to use in the next request to the resource to fetch the next page of data.
  * itemIds `array`: List of item IDs which are assigned to the specified category
    * items `string`

### PagedDealItemVariationResponse
* PagedDealItemVariationResponse
  * paging `object`: Consists of pagination information.
    * cursors `object`: Consists of cursors markers used in forward only pagination.
      * after `string`: Cursor parameter to use in the next request to the resource to fetch the next page of data.
  * dealItemVariations `array`: List of deal item variations which form the specified deal group
    * items [DealItemVariation](#dealitemvariation)

### PagedFoodSafetyResponse
* PagedFoodSafetyResponse
  * paging `object`: Consists of pagination information.
    * cursors `object`: Consists of cursors markers used in forward only pagination.
      * after `string`: Cursor parameter to use in the next request to the resource to fetch the next page of data.
  * data `array`: List of Products with food safety data.
    * items [ProductFoodSafety](#productfoodsafety)

### PagedMenuDealGroupsResponse
* PagedMenuDealGroupsResponse
  * paging `object`: Consists of pagination information.
    * cursors `object`: Consists of cursors markers used in forward only pagination.
      * after `string`: Cursor parameter to use in the next request to the resource to fetch the next page of data.
  * dealGroups `array`: List of deal groups for the given menu item on the given restaurant's menu
    * items [MenuDealGroupBase](#menudealgroupbase)

### PagedMenuItemsResponse
* PagedMenuItemsResponse
  * paging `object`: Consists of pagination information.
    * cursors `object`: Consists of cursors markers used in forward only pagination.
      * after `string`: Cursor parameter to use in the next request to the resource to fetch the next page of data.
  * items `array`: List of menu items for a given restaurant's menu.
    * items [MenuItemBase](#menuitembase)

### PagedMenuModifierGroupsResponse
* PagedMenuModifierGroupsResponse
  * paging `object`: Consists of pagination information.
    * cursors `object`: Consists of cursors markers used in forward only pagination.
      * after `string`: Cursor parameter to use in the next request to the resource to fetch the next page of data.
  * modifierGroups `array`: List of modifier groups for the given menu item on the given restaurant's menu
    * items [MenuModifierGroup](#menumodifiergroup)

### PagedVariationsResponse
* PagedVariationsResponse
  * paging `object`: Consists of pagination information.
    * cursors `object`: Consists of cursors markers used in forward only pagination.
      * after `string`: Cursor parameter to use in the next request to the resource to fetch the next page of data.
  * variations `array`: List of variations for the given menu item on the given restaurant's menu
    * items [Variation](#variation)

### PartnerInfo
* PartnerInfo `object`
  * FriendlyOrderReference `string`: Friendly order reference
  * OrderReference `string`: Reference that partner uses to identify the order
  * PartnerId `string`: Partner id of the source
  * PartnerName `string`: Partner name of the source
  * Source `string`: Where did the order originate (Just Eat, third party etc.)

### PasswordResetFlowResponse
* PasswordResetFlowResponse `object`
  * email `string`: The consumer's email address.
  * globalUserId `string`: Global identifier for consumer and tenant.

### PaymentInfo
* PaymentInfo `object`
  * AccountCreditAmount `number`: Total amount paid for with account credit
  * CardAmount `number`: Amount paid by card
  * CardFee `number`: Card fee for the order
  * CardNumberLast4Digits `string`: Last 4 digits of the payment card
  * Currency `string`: Name of the currency used for the order
  * DeliveryCharge `number`: Amount of cost that comes from delivery
  * Discount `number`: Total amount of discount
  * DiscountSource `string`: Source of discount (i.e. Just Eat or restaurant funded)
  * FeeText `string`: Type of fee (spanner, card, servicecharge)
  * IsCashPayment `boolean`: Is it a cash order
  * LeftToPay `number`: Amount left for customer to pay in cash after all vouchers and discounts removed from total
  * Taxes `object`: Tax information for the order
  * TotalPrice `number`: Total price of the order
  * VoucherAmount `number`: Total amount paid for with a voucher

### Percent
* Percent
  * $type **required** `string`
  * offerId `string`: Unique Identifier for Offer
  * amount `number`: The percentage value discount
  * maxQualifyingValue `number`: The maximum order value required to be eligible for the offer
  * qualifyingValue `number`: The minimum order value required to be eligible for the Offer

### PredictiveSearchRequest
* PredictiveSearchRequest `object`
  * location `string`: User's location
  * restaurants **required** `array`: Restaurants that can be included in the search
    * items [RequestRestaurant](#requestrestaurant)
  * searchTerm **required** `string`: User's search term - at least one character required

### PredictiveSearchResponse
* PredictiveSearchResponse `object`
  * suggestions `array`: Ordered list of suggested term completions
    * items [PredictiveSearchResponseItem](#predictivesearchresponseitem)

### PredictiveSearchResponseItem
* PredictiveSearchResponseItem `object`
  * category `string` (values: Restaurant, Cuisine, Dish): Grouping to which term belongs
  * suggestedTerm `string`: Suggested search term

### ProblemDetails
* ProblemDetails `object`
  * detail `string`
  * instance `string`
  * status `integer`
  * title `string`
  * type `string`

### Product
* Product `object`
  * BasketProductIds `array`
    * items `string`
  * CategoryId `string`
  * ModifierGroups `array`
    * items [ModifierGroup](#modifiergroup)
  * Name `string`
  * ProductId `string`
  * Quantity `number`
  * RemovedIngredients `array`
    * items [RemovedIngredient](#removedingredient)
  * TotalPrice `number`
  * Variation `string`

### ProductFoodSafety
* ProductFoodSafety `object`
  * additives `array`: List of additives
    * items [Additive](#additive)
  * allergens `array`: List of allergens
    * items [Allergen](#allergen)
  * id `string`: Encrypted Product/Addon Id
  * ingredients `array`: List of ingredients
    * items [Ingredients](#ingredients)
  * manufacturer `object`: Object for manufacturer data
    * brand `string`: Brand name
    * city `string`: City
    * manufacturer `string`: Manufacturer name
    * origin `string`: Country
    * postalCode `string`: Postal Code
    * streetAddress `string`: Street Address
  * nutritional `object`: Object for nutritional data
    * alcohol `object`: Alcohol by volume value for product
      * unit `string`: Unit of the item
      * value `number`: Value of the item
    * caffeine `object`: Caffeine milligram value for product
      * unit `string`: Unit of the item
      * value `number`: Value of the item
    * calories `object`: Calories value for product
      * unit `string`: Unit of the item
      * value `number`: Value of the item
    * carbohydrate `object`: Carbohydrate value for product
      * unit `string`: Unit of the item
      * value `number`: Value of the item
    * energy `object`: Energy value for product
      * unit `string`: Unit of the item
      * value `number`: Value of the item
    * fat `object`: Fat value for product
      * unit `string`: Unit of the item
      * value `number`: Value of the item
    * fattyAcidTotal `object`: Fatty Acid value for product
      * unit `string`: Unit of the item
      * value `number`: Value of the item
    * protein `object`: Protein value for product
      * unit `string`: Unit of the item
      * value `number`: Value of the item
    * salt `object`: Salt value for product
      * unit `string`: Unit of the item
      * value `number`: Value of the item
    * sodium `object`: Sodium value for product
      * unit `string`: Unit of the item
      * value `number`: Value of the item
    * sugar `object`: Sugar value for product
      * unit `string`: Unit of the item
      * value `number`: Value of the item
  * storage `object`: Object for storage data
    * stgInstruction `string`: Storage/Usage instructions
  * type `string`: Product or Addon

### ProductRecommendationsResponse
* ProductRecommendationsResponse `object`: Contains all recommendations for a product.
  * recommendations `array`: Gets or sets an array of products that are recommended for the source product.
    * items `object`: Contains information for a single recommended product.
      * confidence `number`: Gets or sets the confidence level of this recommendation (between 0 and 1).
      * imageUrl `string`: The URL of the image, if available, to display with the view
      * productId `string`: Gets or sets the id of the product that is being recommended.
  * renderWithView `string`: Gets or sets the name of the UI component that the client should use to display the recommendations,
  * restaurantId `string`: Gets or sets the restaurant id

### ProductWithOfflineStatus
* ProductWithOfflineStatus `object`: Product.
  * CategoryIds `array`: List of Category IDs this product belongs to.
    * items `string`
  * Description `string`: Product description.
  * Id `string`: Product identifier.
  * IsOffline `boolean`: True if this Product is not available to purchase.
  * Name `string`: Product name.
  * NextAvailableAt `string`: Time when product will be brought back online.
  * Price `object`: The price of this Product.
    * CurrencyCode `string`: The currency of this Price in ISO 4217 format.
    * Value `number`: The value of this Price in the minor unit of the currency.

### ProductsResponse
* ProductsResponse `object`
  * Paging `object`: Consists of pagination information.
    * Cursors `object`: Consists of cursors markers used in pagination.
      * After `string`: The value should be used in the query parameter named after. It is used as a cursor of the last returned record in the previous request, from which next offset going to be fetched. A missing or empty value indicates that the end of the result set has been reached.
  * Products `array`: List of products for a given restaurant.
    * items [ProductWithOfflineStatus](#productwithofflinestatus)

### PromotedPlacementCandidateRestaurant
* PromotedPlacementCandidateRestaurant `object`
  * rank `number`: The relative rank of this candidate restaurant in relation to others in the response. A smaller number indicates that this restaurant should be shown closer to the beginning of the list.
  * restaurantId `string`: The unique identifier of the candidate restaurant.

### PromotedPlacementCandidateRestaurantsResponse
* PromotedPlacementCandidateRestaurantsResponse `object`
  * candidateRestaurants `array`: An array of candidate restaurants that are available for Promoted Placement.
    * items [PromotedPlacementCandidateRestaurant](#promotedplacementcandidaterestaurant)
  * metadata `object`: Contains additional metadata that may affect the rendering of Promoted Placement candidate restaurants.
    * availableFilteredPositions `number`: The number of Promoted Placement positions available in this location when displaying a filtered list of restaurants.
    * availableUnfilteredPositions `number`: The number of Promoted Placement positions available in this location when displaying the full list of restaurants.

### Prompts
* Prompts `object`
  * DiscountApplied `object`
    * Amount `number`
  * InvalidProducts `array`
    * items [InvalidProduct](#invalidproduct)
  * ItemDiscounts `array`: Collection of item discount prompts to be shown customer
    * items [ItemDiscountPrompt](#itemdiscountprompt)
  * Offers `array`
    * items `object`
      * DiscountValue `number`
      * OfferType `string`
      * QualifyingValue `number`
      * ToSpendValue `number`
  * OfflineProducts `array`
    * items [OfflineProduct](#offlineproduct)
  * RequiresOther `boolean`
  * SpendMore `object`
    * MinimumOrderAmount `number`
    * ToSpend `number`

### Properties
* Properties `object`: Geometry information for consumers location
  * errorMessage `string`: Any error returned by the geocoding provider.
  * geocodingProvider `string`: the geocoding provider

### RedeemCommand
* RedeemCommand `object`
  * pin `string`

### RedeemCommandResponse
* RedeemCommandResponse `object`
  * value `integer`

### RedeemPaycodeCommand
* RedeemPaycodeCommand `object`
  * paycode `string`

### RedeemPaycodeResponse
* RedeemPaycodeResponse `object`
  * value `integer`

### RedeliverOrderResolution
* RedeliverOrderResolution `object`
  * NewDueDate `string`: Updated due date for delivery of the order
  * Status `string` (values: DriverAtAddress, Repreparing): The current status of the order

### RemovedIngredient
* RemovedIngredient `object`
  * Details `string`

### ReplaceRestaurantMenuRequest
* ReplaceRestaurantMenuRequest `object`: request containing links in s3 to new menu files
  * fileKeys `array`: Array of paths to the new menu files that were uploaded to the certain AWS s3 bucket
    * items `string`: path to the new menu file that Was uploaded to the certain AWS s3 bucket

### RequestCsatStep
* RequestCsatStep `object`: Flow step used for asking if customer was satisfied with flow
  * closeButton [HelpAction](#helpaction)
  * screenEvent `object`
    * dataLayer `object`
      * screenName `string`
  * title `string`
  * quitFlowAction [HelpAction](#helpaction)

### RequestRestaurant
* RequestRestaurant `object`
  * menuId `string`: Id of the restaurant's menu
  * restaurantId **required** `string`: Id of the restaurant

### RestaurantCommentsOnReview
* RestaurantCommentsOnReview `object`
  * restaurantComments `string`: Restaurant comments in response on the customer review

### RestaurantDeliveryFees
* RestaurantDeliveryFees `object`
  * bands `array`: Collection of delivery fee bands
    * items `object`
      * fee `number`: The delivery fee, in the smallest unit of local currency (e.g. pence).
      * minimumAmount `number`: The minimum order value (excluding fees) when this fee band applies. The fee with the highest minimumAmount that is less than or equal to order value applies. This is in the smallest unit of local currency (e.g. pence).
  * minimumOrderValue `number`: The minimum order value (excluding fees) required, in the smallest unit of local currency (e.g. pence).
  * restaurantId `string`: The identifier of the restaurant

### RestaurantDetailsLocation
* RestaurantDetailsLocation `object`: Location of the restaurant
  * city `string`: City of the restaurant
  * country `string`: Country of the restaurant
  * geoPosition [RestaurantDetailsLocationPosition](#restaurantdetailslocationposition)
  * postalCode `string`: Post code of the restaurant
  * region `string`: Region of the restaurant
  * streetAddress `string`: Street address of the restaurant

### RestaurantDetailsLocationPosition
* RestaurantDetailsLocationPosition `object`: Geo position of the restaurant in GeoJSON format
  * coordinates `array`: longitude and latitude
    * items `number`
  * type `string` (values: Point): type of primitive

### RestaurantDetailsResponse
* RestaurantDetailsResponse `object`: response containing details of the restaurant
  * allergenInformation `object`: Allergen details of the restaurant
    * phoneNumber `string`: Phone number to contact restaurant about allergens
    * url `string`: Page with information about allergens
  * contactOptions `object`: Contact details of the restaurant
    * emails `array`: Array containing an email with label items
      * items `object`: An item in emails array containing an email with label
        * email `string`: Email contact
        * usedFor `array`: Type of email contacts
          * items `string` (values: Default, Invoice): Array containing labels specifieing email
    * phoneNumbers `array`: Array containing a phone number with label items
      * items `object`: An item in emails array containing an email with label
        * phoneNumber `string`: Phone number
        * usedFor `array`: Type of phone number contacts
          * items `string` (values: Default, Owner, Alternative): Array containing labels specifieing phone number
  * cuisines `array`: Array of cuisines of restaurant
    * items `string`: Cuisine name
  * id `string`: A unique identifier at tenant level for a given restaurant
  * legalInformation `object`: Legal information of the restaurant
    * companyNumber `string`: Company number of the restaurant
    * registeredName `string`: Legal company name of the restaurant
  * location [RestaurantDetailsLocation](#restaurantdetailslocation)
  * name `string`: The name of the restaurant.

### RestaurantETAs
* RestaurantETAs `array`
  * items `object`
    * etaAtRestaurant `number`: Your best estimation in minutes
    * restaurantId `string`: The unique identifier of the restaurant.

### RestaurantErrorResponse
* RestaurantErrorResponse `object`
  * errorCode `string`: A code that identifies the problem type. It will be supported by human-readable documentation that identifies how to resolve the error
  * errorId `string`: A value that helps identify this response back to logs, so we can easily find this specific fault
  * message `string`: Specific details about the error that may assist the you in resolving the issue
  * requestId `string`: A value that helps identify the trace back to logs, so that we can easily find what was happening on our system when the fault was generated
  * statusCode `string`: Http response status code
  * timestamp `string`: Date-time when this request was processed

### RestaurantInfo
* RestaurantInfo `object`
  * AddressCity `string`: Restaurant address city
  * AddressLine1 `string`: Restaurant address line 1
  * Name `string`: Restaurant name
  * PhoneNumber `string`: Restaurant phone number
  * PostalCode `string`: Restaurant name
  * VatRegistrationNumber `string`: Restaurant VAT registration number
  * Website `string`: Restaurant website

### RestaurantInvoiceDownloadInformation
* RestaurantInvoiceDownloadInformation `object`: An information to download invoice content
  * downloadUrl `string`: The URL to download invoice content
  * expires `string`: The time when the download URL expires and becomes invalid to download invoice content

### RestaurantInvoiceSummary
* RestaurantInvoiceSummary `object`: An invoice summary for the invoice period
  * accountBalance `number`: Restaurant account balance at the end of the invoice period in smallest unit of relevant currency
  * createdDate `string`: The invoice created date
  * currencyCode `string`: The ISO-4217 currency code associated with the invoice
  * endDate `string`: The end date of the invoice period
  * id `string`: The Id of the invoice
  * invoiceAmount `number`: Invoice amount for the invoice period in smallest unit of relevant currency
  * startDate `string`: The start date of the invoice period

### RestaurantInvoices
* RestaurantInvoices `object`
  * invoices `array`: List of restaurant invoice summaries
    * items [RestaurantInvoiceSummary](#restaurantinvoicesummary)
  * paging `object`: Consists of pagination information
    * cursors `object`: Consists of cursor markers used in pagination
      * after `string`: The value should be used in the query parameter named after. It is used as a cursor of the last returned record in the previous request, from which next offset going to be fetched. A missing or empty value indicates that the end of the result set has been reached

### RestaurantOffer
* RestaurantOffer `object`
  * DiscountApplied `number`
  * DiscountValue `number`
  * OfferType `string`

### RestaurantOfflineStatus
* RestaurantOfflineStatus `object`
  * AllowRestaurantOverride `boolean`: Whether a restaurant should be allowed to reverse this offline status change through calls to the Resturant Events endpoints.
  * IsOffline `boolean`: Represents the current offline status of the restaurant.
  * RestaurantId `string`: The unique identifier of the restaurant that has their offline status changed.
  * Tenant `string` (values: au, dk, es, ie, it, no, uk, nz): The two letter country code for the market in which the restaurant operates.

### RestaurantOrderDetails
* RestaurantOrderDetails `object`: An order details
  * currencyCode `string`: The ISO-4217 currency code associated with the all prices and money amounts in order details
  * friendlyId `string`: The friendly order Id
  * id `string`: The Id of the order
  * orderItems `array`: List of restaurant order items
    * items [RestaurantOrderItem](#restaurantorderitem)
  * orderPrice `number`: The order price in smallest unit of relevant currency
  * orderPriceBreakdown [RestaurantOrderPriceBreakdown](#restaurantorderpricebreakdown)
  * orderStatus `string` (values: Accepted, Cancelled, Declined): Status of completed order
  * orderType `string` (values: Delivery, Collection): Type of order (collection or delivery)
  * paymentInfo [RestaurantOrderPaymentInfo](#restaurantorderpaymentinfo)
  * placedDate `string`: The order placed date

### RestaurantOrderHistory
* RestaurantOrderHistory `object`
  * orders `array`: List of restaurant order summaries
    * items [RestaurantOrderSummary](#restaurantordersummary)
  * paging `object`: Consists of pagination information
    * cursors `object`: Consists of cursors markers used in pagination
      * after `string`: The value should be used in the query parameter named after. It is used as a cursor of the last returned record in the previous request, from which next offset going to be fetched. A missing or empty value indicates that the end of the result set has been reached

### RestaurantOrderItem
* RestaurantOrderItem `object`: An item in an order
  * description `string`: The description for the item
  * itemId `string`: The Id of the item
  * itemType `string` (values: Product, MealPart, Accessory): The type of item
  * name `string`: The name of the item
  * quantity `integer`: The quantity of the item
  * subItems `array`: The sub items of item, such as meal parts of the meal or accessories
    * items [RestaurantOrderItem](#restaurantorderitem)
  * synonym `string`: The synonym of the item
  * unitPrice `number`: The unit price for the item

### RestaurantOrderPaymentInfo
* RestaurantOrderPaymentInfo `object`: Information about a payment
  * fees `array`: The fees applied to the order
    * items `object`
      * type `string`: The type of fee, such as delivery or card
      * value `number`: The fee value in smallest unit of relevant currency
  * paidDate `string`: The date and time the order was paid for, if known
  * paymentLines `array`: The payment lines
    * items `object`: An individual payment line
      * fee `number`: The payment fee in smallest unit of relevant currency
      * paymentMethod `string`: The payment method, such as cash or card
      * value `number`: The payment value in smallest unit of relevant currency

### RestaurantOrderPriceBreakdown
* RestaurantOrderPriceBreakdown `object`: The order price breakdown (all amounts in smallest unit of relevant currency)
  * accountCredits `number`: The total amount of account credit(s) applied to the order
  * discounts `number`: The total amount of discount(s) applied to the order
  * fees `number`: The total amount of fees applied to the order
  * items `number`: The total amount of order items
  * taxes `number`: The total amount of taxes applied to the order
  * tips `number`: The total amount of tips applied to the order
  * vouchers `number`: The total amount of voucher(s) applied to the order

### RestaurantOrderSummary
* RestaurantOrderSummary `object`: An order summary
  * currencyCode `string`: The ISO-4217 currency code associated with the order price
  * friendlyId `string`: The friendly order Id
  * id `string`: The Id of the order
  * orderPrice `number`: The order price in smallest unit of relevant currency
  * orderStatus `string` (values: Accepted, Cancelled, Declined): Status of completed order
  * orderType `string` (values: Delivery, Collection): Type of order (collection or delivery)
  * placedDate `string`: The order placed date
  * usedPaymentMethods `array`: The list of payment methods used for order payment
    * items `string`: The payment method, such as cash or card

### RestaurantPromotedPlacementInfo
* RestaurantPromotedPlacementInfo `object`
  * defaultPromoted `boolean`: Should be promoted by default
  * restaurantId `string`: Id of the restaurant

### RestaurantReviews
* RestaurantReviews `object`
  * reviews `array`: List of restaurant reviews
    * items `object`
      * approvedRestaurantComments `string`: Any comments left by the restaurant in response to the review approved by a moderator
      * customerComments `string`: Any comments left by the customer in their review
      * customerName `string`: The (first) name of the customer who left the review
      * friendlyOrderId `string`: The friendly order Id the review is associated with
      * id `string`: The Id of the review
      * rateDate `string`: The date and time on which the order was made
      * ratingAverage `number`: The average score left by the customer
      * restaurantComments `string`: Any comments left by the restaurant in response to the review

### RestaurantReviewsRatingBreakdown
* RestaurantReviewsRatingBreakdown `object`
  * badRatingsCount `integer`: The count of bad (1,2 stars) ratings across all reviews
  * goodRatingsCount `integer`: The count of good (5,6 stars) ratings across all reviews
  * neutralRatingsCount `integer`: The count of neutral (3,4 stars) ratings across all reviews

### RestaurantReviewsSummary
* RestaurantReviewsSummary `object`
  * ratingAverage `number`: The average score of all reviews
  * ratingsBreakdown `object`: The breakdown of good/neutral/bad reviews for different types of ratings
    * delivery [RestaurantReviewsRatingBreakdown](#restaurantreviewsratingbreakdown)
    * overall [RestaurantReviewsRatingBreakdown](#restaurantreviewsratingbreakdown)
    * quality [RestaurantReviewsRatingBreakdown](#restaurantreviewsratingbreakdown)
    * service [RestaurantReviewsRatingBreakdown](#restaurantreviewsratingbreakdown)
  * reviewsCount `integer`: The count of all reviews

### RestaurantSearchProduct
* RestaurantSearchProduct `object`
  * fullName `string`: The full name of the product
  * price `number`: The price of the product
  * productId `string`: The id of the product

### RestaurantSearchResponse
* RestaurantSearchResponse `object`
  * restaurants `array`: Ordered list of restaurants
    * items [RestaurantSearchResponseItem](#restaurantsearchresponseitem)

### RestaurantSearchResponseItem
* RestaurantSearchResponseItem `object`
  * isSponsored `boolean`: Flag to indicate if the restaurant is sponsored, so has been promoted to the top of the results
  * products `array`: Ordered list of products available from the restaurant which matched the search term
    * items [RestaurantSearchProduct](#restaurantsearchproduct)
  * restaurantId `string`: The id of the restaurant

### RestaurantSettingsResponse
* RestaurantSettingsResponse `object`: response containing settings of the restaurant in partner centre
  * isMenuManagementTeaserVisible `boolean`: A value indicated whether menu management teaser should be shown on restaurant edit menu page

### RestaurantUpdateResponse
* RestaurantUpdateResponse `object`

### SearchByConsumerResponse
* SearchByConsumerResponse `object`
  * cards `array`
    * items `object`
      * amount `integer`
      * pan `string`

### SearchByPanResponse
* SearchByPanResponse `object`
  * amount `integer`
  * pan `string`
  * redemptionHistory `array`
    * items `object`
      * consumerId `string`
      * redeemedOn `string`
      * status `string` (values: Redeemed, Failed)
      * statusDetails `string`
      * transactionId `string`

### SearchResponse
* SearchResponse `object`
  * CuisineSets `array`
    * items `object`
      * Cuisines `object`
        * Name `string`
        * SeoName `string`
      * Id `string`
      * Name `string`
      * Type `string`
  * Dishes `array`
    * items `object`
      * Best `array`
        * items `object`
          * FullName `string`: The full name of the product
          * Price `number`: The price of the product
          * ProductId `number`: Deprecated field no longer populated, but retained for backwards compatibility with clients
          * StrProductId `string`: The id of the product
      * RestaurantId `number`
      * Similar `array`
        * items `object`
          * FullName `string`
          * Price `number`
          * ProductId `number`
  * MetaData `object`
    * Area `string`
    * CanonicalName `string`
    * CuisineDetails `array`
      * items `object`
        * Name `string`
        * SeoName `string`
        * Total `number`
    * District `string`
    * Latitude `number`: The latitude of the search location
    * Longitude `number`: The longitude of the search location
    * Postcode `string`
    * ResultCount `number`
    * SearchedTerms `object`
    * TagDetails `array`
      * items `object`
        * BackgroundColour `string`
        * Colour `string`
        * DisplayName `string`
        * Key `string`
        * Priority `number`
  * RestaurantSets `array`
    * items `object`
      * Id `string`
      * Name `string`
      * Restaurants `array`
        * items `object`
          * Id `number`
          * Metadata `array`
      * Type `string`
  * Restaurants `array`
    * items [SearchRestaurant](#searchrestaurant)
  * ShortResultText `string`
  * Views `array`
    * items `object`
      * Components `object`
        * Id `string`
        * TemplateName `string`
        * TrackingId `string`
        * Type `string`
        * ViewData `object`
      * Target `string`
  * area `string`
  * deliveryFees `object`: Information related to delivery fees.
    * restaurants `object`: Dictionary of restaurantIds to delivery fees.
  * promotedPlacement `object`: Information related to promoted placement restaurants.
    * filteredSearchPromotedLimit `number`: How many restaurants to promote when search is filtered
    * rankedIds `array`: Restaurants that can be promoted, in preferred order
      * items `number`
    * restaurants `object`: Dictionary of restaurantIds to promoted placement info.

### SearchRestaurant
* SearchRestaurant `object`
  * Address `object`
    * City `string`
    * FirstLine `string`
    * Latitude `number`
    * Longitude `number`
    * Postcode `string`
  * Badges `array`
    * items `object`
  * BrandName `string`
  * City `string`
  * CollectionMenuId `number`
  * CuisineTypes `array`
    * items `object`
      * Id `number`
      * IsTopCuisine `boolean`
  * Cuisines `array`
    * items `object`
      * Name `string`
      * SeoName `string`
  * Deals `array`
    * items `object`
      * Description `string`
      * DiscountPercent `number`
      * OfferType `string`
      * QualifyingPrice `number`
  * DefaultDisplayRank `number`
  * DeliveryChargeBands `array`
    * items `object`
      * BasketThresholdPrice `number`
      * DeliveryChargeBelowThreshold `number`
  * DeliveryCost `number`
  * DeliveryEtaMinutes `object`
    * Approximate `number`
    * RangeLower `number`
    * RangeUpper `number`
  * DeliveryMenuId `number`
  * DeliveryOpeningTime `string`
  * DeliveryOpeningTimeLocal `string`
  * DeliveryOpeningTimeUtc `string`
  * DeliveryStartTime `string`
  * DeliveryTime `number`
  * DeliveryTimeMinutes `number`
  * DeliveryWorkingTimeMinutes `number`
  * DeliveryZipcode `string`
  * Description `string`
  * DriveDistance `number`
  * DriveInfoCalculated `boolean`
  * HygieneRating `number`
  * Id `number`
  * IsBrand `boolean`
  * IsCloseBy `string`
  * IsCollection `boolean`
  * IsDelivery `boolean`
  * IsFreeDelivery `boolean`
  * IsHalal `boolean`
  * IsNew `boolean`
  * IsOpenNow `boolean`
  * IsOpenNowForCollection `boolean`
  * IsOpenNowForDelivery `boolean`
  * IsOpenNowForPreorder `boolean`
  * IsPremier `boolean`
  * IsSponsored `boolean`
  * IsTemporarilyOffline `boolean`
  * IsTemporaryBoost `boolean`
  * IsTestRestaurant `boolean`
  * LastUpdated `string`
  * Latitude `number`
  * Logo `array`
    * items `object`
      * StandardResolutionURL `string`
  * LogoUrl `string`
  * Longitude `number`
  * MinimumDeliveryValue `number`
  * Name `string`
  * NewnessDate `string`
  * NumberOfRatings `number`
  * OfferPercent `number`
  * Offers `object`
  * OpeningTime `string`
  * OpeningTimeIso `string`
  * OpeningTimeLocal `string`
  * OpeningTimeUtc `string`
  * OpeningTimes `array`
    * items `object`
  * Postcode `string`
  * Rating `object`
    * Average `number`
    * Count `number`
    * StarRating `number`
  * RatingAverage `number`
  * RatingStars `number`
  * ReasonWhyTemporarilyOffline `string`
  * Score `number`
  * ScoreMetaData `array`
    * items `object`
      * Key `string`
      * Value `string`
  * SecondDateRank `number`
  * SecondDateRanking `number`
  * SendsOnItsWayNotifications `boolean`
  * ServiceableAreas `array`
    * items `object`
  * ShowSmiley `boolean`
  * SmileyDate `object`
  * SmileyElite `boolean`
  * SmileyResult `object`
  * SmileyUrl `object`
  * SponsoredPosition `number`
  * Tags `array`
    * items `string`
  * UniqueName `string`
  * Url `string`

### SearchWebResponse
* SearchWebResponse `object`
  * Closed `array`
    * items [SearchRestaurant](#searchrestaurant)
  * Offline `array`
    * items [SearchRestaurant](#searchrestaurant)
  * Open `array`
    * items [SearchRestaurant](#searchrestaurant)

### ServiceTimes
* ServiceTimes `object`
  * serviceTimes `object`: The desired times at which a restaurant is in service
    * friday: Service times for Fridays
      * collection [ServiceTimesCollection](#servicetimescollection)
      * delivery [ServiceTimesCollection](#servicetimescollection)
    * monday: Service times for Mondays
      * collection [ServiceTimesCollection](#servicetimescollection)
      * delivery [ServiceTimesCollection](#servicetimescollection)
    * saturday: Service times for Saturdays
      * collection [ServiceTimesCollection](#servicetimescollection)
      * delivery [ServiceTimesCollection](#servicetimescollection)
    * sunday: Service times for Sundays
      * collection [ServiceTimesCollection](#servicetimescollection)
      * delivery [ServiceTimesCollection](#servicetimescollection)
    * thursday: Service times for Thursdays
      * collection [ServiceTimesCollection](#servicetimescollection)
      * delivery [ServiceTimesCollection](#servicetimescollection)
    * tuesday: Service times for Tuesdays
      * collection [ServiceTimesCollection](#servicetimescollection)
      * delivery [ServiceTimesCollection](#servicetimescollection)
    * wednesday: Service times for Wednesdays
      * collection [ServiceTimesCollection](#servicetimescollection)
      * delivery [ServiceTimesCollection](#servicetimescollection)

### ServiceTimesCollection
* ServiceTimesCollection `array`
  * items `object`
    * end `string`: Local end time of the slot in hh:mm:ss format. The end time occurs on the next day if less than or equal to the start time. Times are in the restaurant's time zone which can be obtained by converting `location.geoPosition` value from [the restaurant's details](#operation/GetRestaurantDetails) using a lookup API such as  timezonedb.com.
    * start `string`: Start time of the slot in hh:mm:ss format. Times are in the restaurant's time zone which can be obtained by converting `location.geoPosition` value from [the restaurant's details](#operation/GetRestaurantDetails) using a lookup API such as  timezonedb.com.

### ServiceTimesDays
* ServiceTimesDays `object`: The desired times at which a restaurant is in service
  * friday: Service times for Fridays
    * collection [ServiceTimesCollection](#servicetimescollection)
    * delivery [ServiceTimesCollection](#servicetimescollection)
  * monday: Service times for Mondays
    * collection [ServiceTimesCollection](#servicetimescollection)
    * delivery [ServiceTimesCollection](#servicetimescollection)
  * saturday: Service times for Saturdays
    * collection [ServiceTimesCollection](#servicetimescollection)
    * delivery [ServiceTimesCollection](#servicetimescollection)
  * sunday: Service times for Sundays
    * collection [ServiceTimesCollection](#servicetimescollection)
    * delivery [ServiceTimesCollection](#servicetimescollection)
  * thursday: Service times for Thursdays
    * collection [ServiceTimesCollection](#servicetimescollection)
    * delivery [ServiceTimesCollection](#servicetimescollection)
  * tuesday: Service times for Tuesdays
    * collection [ServiceTimesCollection](#servicetimescollection)
    * delivery [ServiceTimesCollection](#servicetimescollection)
  * wednesday: Service times for Wednesdays
    * collection [ServiceTimesCollection](#servicetimescollection)
    * delivery [ServiceTimesCollection](#servicetimescollection)

### ServiceTimesServices
* ServiceTimesServices `object`
  * collection [ServiceTimesCollection](#servicetimescollection)
  * delivery [ServiceTimesCollection](#servicetimescollection)

### ServiceType
* ServiceType `integer` (values: 1, 2)

### SetProductsOfflineRequest
* SetProductsOfflineRequest `object`
  * NextAvailableAt **required** `string`: The time when products should be brought back online. This may be delayed by up to 5 minutes. There is no upper time limit.
  * ProductIds **required** `array`: Product ids to set offline.
    * items `string`
  * RequestedBy **required** `string`: Consists of information about who requested changes.

### SetProductsOnlineRequest
* SetProductsOnlineRequest `object`
  * ProductIds **required** `array`: Product IDs to set online.
    * items `string`
  * RequestedBy **required** `string`: Consists of information about who requested changes.

### SettingsFlexStates
* SettingsFlexStates `object`
  * averageAssignableJobLoad `number`: Average assignable Job load for given state type
  * flexStateType [FlexStateType](#flexstatetype)
  * triggerUsage `number`: Usage percentage for given state type

### Shift
* Shift `object`: The shift object associated with a courier on a courier sync payload update.
  * deliveryZoneId `string`: Delivery zone id the shift was created for.
  * endDate `number`: Timestamp for when the shift was ended.
  * id `string`: Shift identifier.
  * shiftType [ShiftType](#shifttype)
  * startDate `number`: Timestamp for when the shift was started.
  * vehicle [Vehicle](#vehicle)

### ShiftType
* ShiftType `string` (values: REGULAR, ON_CALL, OVERFLOW, ALCOHOL_ELIGIBLE, UNKNOWN): The types of shifts available for the couriers.

### ShowNotificationOfferEffect
* ShowNotificationOfferEffect
  * $type **required** [ConsumerOfferEffectType](#consumeroffereffecttype)
  * description `string`: Description of the offer effect

### ShowPromptOfferEffect
* ShowPromptOfferEffect
  * $type **required** [ConsumerOfferEffectType](#consumeroffereffecttype)
  * description `string`: The description of offer to show in prompt for customer
  * header `string`: The header to show in prompt for customer
  * offerEffect [OfferEffect](#offereffect)
  * title `string`: The title to show in prompt for customer

### SpendMoreOfferEffect
* SpendMoreOfferEffect
  * $type **required** [ConsumerOfferEffectType](#consumeroffereffecttype)
  * description `string`: Description of the offer effect
  * amountToSpend `number`: The amount of money, in the smallest unit of relevant currency applied to order,
  * discountPercentage `number`: The discount percentage applied.

### Storage
* Storage `object`
  * stgInstruction `string`: Storage/Usage instructions

### SuggestedSearchResponse
* SuggestedSearchResponse `object`
  * suggestions `array`: Suggested term completions, grouped by category
    * items [SuggestedSearchResponseItem](#suggestedsearchresponseitem)

### SuggestedSearchResponseItem
* SuggestedSearchResponseItem `object`
  * category `string` (values: Popular, Recent, Recommended): String value of the category enum - grouping to which the suggestions belong
  * categoryId `number`: Integer value of the category enum - grouping to which the suggestions belong
  * contents `array`: Suggested search terms
    * items `string`

### SupportRequest
* SupportRequest `object`: Object that represents support request
  * id `string`: The Id of the request
  * status `string` (values: new, open, closed, pending, solved, hold): Request status
  * submittedDate `string`: Request placed date
  * type `string`: Request type

### SupportRequestType
* SupportRequestType `object`: Object that represents type/sub-type of request
  * name `string`: Human readable name
  * subTypes `array`: Possible sub-types of request
    * items [SupportRequestType](#supportrequesttype)
  * value `string`: Type value which will be used for Zendesk ticket as a tag

### SyncFlexStateType
* SyncFlexStateType `string` (values: CODE_RED, OPEN, SEEKING, CLOSED): <p>The flex state type changes according to the exponential moving average and is used as a reference to bring more couriers to suffice the demand in a given delivery zone.</p> <p>If the flex state type is "Off", it means no shifts will be offered for the delivery zone.</p> <p>If the state is "CLOSED", only scheduled shifts will be allowed for the delivery zone.</p> <p>If the state is "SEEKING", the shift offers are going to be made across the courier network in order to suffice the current demand.</p> <p>If the state is "OPEN", it means demand is high and couriers from all over the courier network are allowed to create shifts for themselves to suffice the current demand.</p> <p>If the state is "CODE_RED", it means not only can everyone create shifts for themselves for the delivery zone but also couriers from other delivery zones might reallocate to help suffice the demand of that particular delivery zone.</p>

### SyncPaymentType
* SyncPaymentType `string` (values: PAID, UNPAID): The order payment status.

### TakeOfflineRequest
* TakeOfflineRequest `object`
  * Comment `string`: Any additional information
  * TempOfflineType `string` (values: TempOffline, ClosedToday): Identifier of the reason for taking the restaurant offline

### TextAndActionsStep
* TextAndActionsStep `object`: 'Default' flow step, consisting of text and next-step actions
  * closeButton [HelpAction](#helpaction)
  * screenEvent `object`
    * dataLayer `object`
      * screenName `string`
  * title `string`
  * actions `array`: Array of actions (i.e. buttons)
    * items [HelpAction](#helpaction)
  * body `array`: Array of paragraphs for body text
    * items `string`
  * header `string`: Display header

### Time
* Time `object`
  * daysOfTheWeek `array`: The days of the week.
    * items `string` (values: monday, tuesday, wednesday, thursday, friday, saturday, sunday)
  * fromDateTime `string`: Time of day the availability begins, in local time, format is ISO 8601 hh:mm:ss
  * toDateTime `string`: Time of day the availability begins, in local time, format is ISO 8601 hh:mm:ss

### TokenRequest
* TokenRequest `object`: The request object for retrieving an access token.
  * client_id `string`: Only required if the client is not authenticating with the same authorisation server.
  * code `string`: The authorisation code received from the authorisation server.
  * code_verifier `string`: High-entropy cryptographic random string with a minimum length of 43 characters and a maximum length of 128 characters.
  * grant_type `string`: OAuth grant type. Value MUST be set to `authorization_code`.
  * redirect_uri `string`: URI to form the path for a redirect response.

### TokenRequestErrorResponse
* TokenRequestErrorResponse `object`: The error response object for token request endpoint.
  * error `string`: Error code. Can be one of: `invalid_request`, `invalid_client`, `invalid_grant`, `unauthorized_client`, `unsupported_grant_type`, `invalid_scope`.

### TokenRequestSuccessResponse
* TokenRequestSuccessResponse `object`: The success response object for token request endpoint.
  * access_token `string`: The JWT access token.

### TopUpPromotion
* TopUpPromotion `object`: The zone profile object for a given delivery zone.
  * currentAcceptanceRate `number`: The current order acceptance rate calculated for the courier.
  * requiredAcceptanceRate `number`: The required acceptance rate the courier should have to be eligible for top up bonus subsidy.
  * showAcceptanceRate `boolean`: Enables showing the courier acceptance rate when true

### TwiMLResult
* TwiMLResult `object`
  * data `string`: set of special TwiML instructions defined by Twilio that will be executed

### TwilioDebuggingEventRequest
* TwilioDebuggingEventRequest `object`: Information about errors and warnings which could occur on Twilio account
  * accountSid `string`: Unique identifier of the account that generated the Debugger event
  * level `string`: Severity of the Debugger event. Possible values are Error and Warning
  * parentAccountSid `string`: Unique identifier of the Parent Account. This parameter only exists if the above account is a sub account
  * payload `string`: JSON data specific to the Debugging Event. More details - https://www.twilio.com/docs/usage/troubleshooting/debugging-event-webhooks#payload
  * payloadType `string`: Type of the payload
  * sid `string`: Unique identifier of the Debugger event
  * timestamp `string`: Time of occurrence of the Debugger event

### TwilioIncomingMessageCallbackRequest
* TwilioIncomingMessageCallbackRequest `object`
  * body `string`: The body of the text message being sent
  * from `string`: The number of the sender in E.164 format

### TwilioIncomingVoiceCallbackRequest
* TwilioIncomingVoiceCallbackRequest `object`
  * digits `string`: Any digits the caller has entered on their phone
  * from `string`: The number of the caller in E.164 format

### TwilioInteractionCallbackRequest
* TwilioInteractionCallbackRequest `object`
  * inboundParticipantSid `string`: The SID of the inbound Participant resource
  * inboundResourceSid `string`: The SID of the inbound resource
  * inboundResourceStatus `string`: The inbound resource status of the Interaction
  * inboundResourceType `string`: The inbound resource type
  * inboundResourceUrl `string`: The URL of the Twilio inbound resource
  * interactionAccountSid `string`: The SID of the Account that created the Interaction resource
  * interactionData `string`: A JSON string that includes the message body of message interactions
  * interactionDateCreated `string`: The date and time when the resource was created
  * interactionDateUpdated `string`: The date and time when the resource was last updated
  * interactionServiceSid `string`: The SID of the parent Service resource
  * interactionSessionSid `string`: The SID of the parent Session resource
  * interactionSid `string`: The unique string to identify the Interaction resource
  * interactionType `string`: The Type of the Interaction
  * outboundParticipantSid `string`: The SID of the outbound Participant
  * outboundResourceSid `string`: The SID of the outbound resource
  * outboundResourceStatus `string`: The outbound resource status of the Interaction
  * outboundResourceType `string`: The outbound resource type
  * outboundResourceUrl `string`: The URL of the Twilio outbound resource

### TwilioProxyOutOfSessionCallbackRequest
* TwilioProxyOutOfSessionCallbackRequest `object`
  * callSid `string`: A unique identifier for the call, generated by Twilio
  * from `string`: The number the call or text message is from in E.164 format
  * sessionDateEnded `string`: The date and time in which the proxy session ended
  * sessionSid `string`: A unique identifier for the proxy session, generated by Twilio
  * smsSid `string`: A unique identifier for the sms, generated by Twilio

### UnauthorisedMarketingResponse
* UnauthorisedMarketingResponse
  * errors `array`: Underlying errors associated with the error
    * items [MarketingError](#marketingerror)
  * faultId `string`: A value that helps identify this response back to logs, so we can easily find this specific fault
  * message `string`: Specific details about the error that may assist the you in resolving the issue

### UpdateAddedDeal
* UpdateAddedDeal `object`
  * Date `string`: `YYYY-MM-DDThh:mm:ssZ (UTC)`
  * DealGroups `array`
    * items [UpdateDealGroup](#updatedealgroup)
  * ProductId `string`
  * Quantity `number`

### UpdateAddedProduct
* UpdateAddedProduct `object`
  * Date `string`: `YYYY-MM-DDThh:mm:ssZ (UTC)`
  * ModifierGroups `array`
    * items [UpdateModifierGroup](#updatemodifiergroup)
  * ProductId `string`
  * Quantity `number`
  * RemovedIngredients `array`
    * items [UpdateRemovedIngredient](#updateremovedingredient)

### UpdateDeal
* UpdateDeal `object`
  * Added `array`
    * items [UpdateAddedDeal](#updateaddeddeal)
  * Removed `array`
    * items [UpdateRemoved](#updateremoved)
  * Updated `array`
    * items [UpdateUpdatedDeal](#updateupdateddeal)

### UpdateDealGroup
* UpdateDealGroup `object`
  * DealGroupId `string`
  * Products `array`
    * items [UpdateAddedProduct](#updateaddedproduct)

### UpdateLocation
* UpdateLocation `object`
  * GeoLocation `object`
    * Date `string`
    * Value: Not available across platform yet, but applied for future proofing.
      * Latitude `number`
      * Longitude `number`
  * ZipCode `object`
    * Date `string`
    * Value `string`

### UpdateMenuItemRequest
* UpdateMenuItemRequest `object`
  * Category [CategoryRequest](#categoryrequest)
  * Description `string`: Description
  * HasAllergens `boolean`: Whether this item has allergens
  * Id `string`: Id
  * Labels `array`: Lables
    * items `string`
  * Name `string`: Name
  * OptionGroups `array`: Option Groups
    * items [UpdateModifierGroupRequest](#updatemodifiergrouprequest)
  * PreferenceGroups `array`: Preference Groups
    * items [UpdateModifierGroupRequest](#updatemodifiergrouprequest)
  * ReceiptNumber `string`: The receipt or kitchen number
  * Variations `array`: Variations
    * items [UpdateMenuItemVariationRequest](#updatemenuitemvariationrequest)

### UpdateMenuItemVariationRequest
* UpdateMenuItemVariationRequest `object`
  * Id `string`: Id
  * Name `string`: Name
  * Price `number`: Price

### UpdateModifier
* UpdateModifier `object`
  * ModifierId `string`
  * Quantity `number`

### UpdateModifierGroup
* UpdateModifierGroup `object`
  * ModifierGroupId `string`
  * Modifiers `array`
    * items [UpdateModifier](#updatemodifier)

### UpdateModifierGroupRequest
* UpdateModifierGroupRequest `object`
  * Id `string`: Id
  * Modifiers `array`: Modifiers within this group
    * items [UpdateModifierRequest](#updatemodifierrequest)
  * Name `string`: Name

### UpdateModifierRequest
* UpdateModifierRequest `object`
  * AdditionPrice `number`: Additional price
  * Id `string`: Id
  * Name `string`: Name
  * Variations `array`: Variations permitted
    * items [VariationModifierResponse](#variationmodifierresponse)

### UpdateOrderAddressRequest
* UpdateOrderAddressRequest `object`: The request object for setting the order address of a basket.
  * address **required** `array`: An array of strings containing lines of the customer's order address.
    * items `string`
  * city **required** `string`: String value containing the city name of the customer's order address.
  * email **required** `string`: The customer's email address.
  * geoPosition **required**: Geo Position object containing latitude and longitude values for the customer's order address
    * latitude `number`: The latitude value of the customer's Geo Position.
    * longitude `number`: The longitude value of the customer's Geo Position.
  * name `string`: The customer's name.
  * phoneNumber **required** `string`: The customer's phone number.
  * polygonName **required** `string`: String value containing the polygon name of customer's order address (in tenants with no polygon name, will be the same as postcode).
  * postCode **required** `string`: String value containing the postcode of the customer's order address.

### UpdateOrderDetails
* UpdateOrderDetails `object`
  * Location
    * GeoLocation `object`
      * Date `string`
      * Value: Not available across platform yet, but applied for future proofing.
        * Latitude `number`
        * Longitude `number`
    * ZipCode `object`
      * Date `string`
      * Value `string`

### UpdateOrderTimeRequest
* UpdateOrderTimeRequest `object`: The request object for setting the order time for a basket.
  * asap **required** `boolean`: True if the user has selected as soon as possible on the order, else false
  * dateTime **required** `string`: The order time to set for the basket.
  * menuId **required** `string`: The menu id that orderability of a basket is calculated against

### UpdateProduct
* UpdateProduct `object`
  * Added `array`
    * items [UpdateAddedProduct](#updateaddedproduct)
  * Removed `array`
    * items [UpdateRemoved](#updateremoved)
  * Updated `array`
    * items [UpdateUpdatedProduct](#updateupdatedproduct)

### UpdateQuantity
* UpdateQuantity `object`
  * Change `number`: Value to apply to existing quantity.
  * Total `number`: Value that replaces the current quantity.

### UpdateRemoved
* UpdateRemoved `object`
  * BasketProductId `string`: A unique identifier for a product in the basket. This is needed to support complex products to make sure remove/update is applied to the correct product.
  * Date `string`: `YYYY-MM-DDThh:mm:ssZ (UTC)`

### UpdateRemovedIngredient
* UpdateRemovedIngredient `object`
  * Details `string`

### UpdateRequest
* UpdateRequest `object`: The request object for updating a basket.
  * BasketId `string`
  * Deal
    * Added `array`
      * items [UpdateAddedDeal](#updateaddeddeal)
    * Removed `array`
      * items [UpdateRemoved](#updateremoved)
    * Updated `array`
      * items [UpdateUpdatedDeal](#updateupdateddeal)
  * OrderDetails: Information needed to allow an order to be placed on a basket.
    * Location
      * GeoLocation `object`
        * Date `string`
        * Value: Not available across platform yet, but applied for future proofing.
          * Latitude `number`
          * Longitude `number`
      * ZipCode `object`
        * Date `string`
        * Value `string`
  * Product
    * Added `array`
      * items [UpdateAddedProduct](#updateaddedproduct)
    * Removed `array`
      * items [UpdateRemoved](#updateremoved)
    * Updated `array`
      * items [UpdateUpdatedProduct](#updateupdatedproduct)
  * SelectedServiceType `object`
    * Date `string`
    * Value `string`

### UpdateUpdatedDeal
* UpdateUpdatedDeal `object`
  * BasketProductId `string`
  * Date `string`: `YYYY-MM-DDThh:mm:ssZ (UTC)`
  * DealGroups `array`
    * items [UpdateDealGroup](#updatedealgroup)
  * Quantity `object`
    * items [UpdateQuantity](#updatequantity)

### UpdateUpdatedProduct
* UpdateUpdatedProduct `object`
  * BasketProductId `string`
  * Date `string`: `YYYY-MM-DDThh:mm:ssZ (UTC)`
  * ModifierGroups `array`
    * items [UpdateModifierGroup](#updatemodifiergroup)
  * Quantity `object`
    * items [UpdateQuantity](#updatequantity)
  * RemovedIngredients `array`
    * items [UpdateRemovedIngredient](#updateremovedingredient)

### UserRole
* UserRole `string` (values: System, Operations, Restaurant): 

### ValidationError
* ValidationError `object`
  * attemptedValue `string`: The property value that caused the failure
  * customState `string`: Custom state associated with the failure
  * errorCode `string`: The error code
  * errorMessage `string`: The error message
  * formattedMessageArguments `array`: Custom formatted validator messages with placeholders
    * items `string`
  * formattedMessagePlaceHolderValues `object`: The values for placeholders in the formatted messages
  * propertyName `string`: The name of the property causing the failure
  * resourceName `string`: The resource name used for building the message
  * severity `number`: Severity of a validation rule. Will always be 0 (Error).

### ValidationProblemDetails
* ValidationProblemDetails
  * detail `string`
  * instance `string`
  * status `integer`
  * title `string`
  * type `string`
  * errors `object`

### Validity
* Validity `object`
  * CuisineIds `array`: The cuisine ids the voucher is valid for
    * items `string`
  * EndDate `string`: The end date of the voucher
  * MinimumSpend `number`: The minimum spend to use the voucher
  * PaymentOptionTypes `array`: The payment options the voucher is restricted to
    * items `string`
  * Platform `string`: The order platform using the voucher
  * PostCode `string`: The post code applicable to the order
  * RestaurantIds `string`: A comma separate list of restaurant ids
  * StartDate `string`: The start date of the voucher
  * ValidFromHour `string`: Whether time the voucher is valid from
  * ValidOnDays `array`: The days of the week the voucher is valid on
    * items [DayOfWeek](#dayofweek)
  * ValidToHour `string`: Whether time the voucher is valid to

### Variation
* Variation `object`
  * availabilityIds `array`: Maps to an availability item, availabilities determines which days and times the item can be sold.
    * items `string`
  * basePrice `number`: The base price of this variation in the minor unit of the currency.
  * dealGroupsIds `array`: Maps to the deal groups that are applicable to this variation.
    * items `string`
  * dealOnly `boolean`: This flag indicates the variation is only available as part of a deal, the item will not be displayed as a stand alone menu item.
  * id `string`: A unique identifier at menu level for a variation, can be shared with parent menu item id.
  * kitchenNumber `string`: Identifies the item with a number on the physical menu that the kitchen understand e.g. on a Chinese menu number 16 could correspond to "BBQ ribs"
  * modifierGroupsIds `array`: Maps to the modifier groups that are applicable to this variation.
    * items `string`
  * name `string`: The name of the variation.
  * type `string` (values: noVariation, variation): Denotes the type of variation, "Variation" if there's multiple variations of the parent menuitem, "NoVariation" if there's only one

### VariationModifierResponse
* VariationModifierResponse `object`
  * AdditionalPrice `number`: The additional price
  * ModifierGroupId `string`: Id of the modifier group
  * Selected `boolean`: Whether this modifier is permitted on this variation
  * VariationId `string`: Id of the variation
  * VariationName `string`: Name of the variation

### VariationReorderDeal
* VariationReorderDeal `object`
  * Attributes `object`: An object containing all the attributes of a Deal
    * DealGroups `array`: A list of all the deal groups attached to a deal. 20 items maximum.
      * items [VariationReorderDealGroup](#variationreorderdealgroup)
    * Quantity `integer`: How many of the deal were previously ordered. When re-adding to basket this is the number that should be added.
    * Rank `integer`: The position in the deal in the list. The data list is ordered by this ascending.
  * Id `string`: The unique identifier for the deal.
  * Type `string`: The type of the object. This will always be 'deal'.

### VariationReorderDealGroup
* VariationReorderDealGroup `object`
  * Id `string`: The unique identifier for a deal group.
  * Variations `array`: A list of variations in the deal group. 20 items maximum.
    * items [VariationReorderVariation](#variationreordervariation)

### VariationReorderModifier
* VariationReorderModifier `object`
  * Id `string`: A unique identifier for the variation modifier.
  * Quantity `integer`: How many of the modifier were previously added to the variation.

### VariationReorderModifierGroup
* VariationReorderModifierGroup `object`
  * Id `string`: The unique identifier for a modifier group.
  * Modifiers `array`: A list of modifiers applied in this modifier group. 20 items maximum.
    * items [VariationReorderModifier](#variationreordermodifier)

### VariationReorderRankedVariation
* VariationReorderRankedVariation `object`
  * Attributes `object`: An object containing all the attributes of a Deal
    * ModifierGroups `array`: A list of all the modifiers previously applied to the variation. 20 items maximum.
      * items [VariationReorderModifierGroup](#variationreordermodifiergroup)
    * Quantity `integer`: How many of the variation were previously ordered. When re-adding to basket, this is the number that should be added.
    * Rank `integer`: The position in the variation in the array. The data array is ordered by this ascending.
  * Id `string`: The unique identifier for the variation.
  * Type `string`: The type of the object. This will always be 'variation'.

### VariationReorderVariation
* VariationReorderVariation `object`
  * Id `string`: The unique identifier for the variation.
  * ModifierGroups `array`: A list of all the modifiers previously applied to the variation. 20 items maximum.
    * items [VariationReorderModifierGroup](#variationreordermodifiergroup)
  * Quantity `integer`: How many of the variation were previously ordered.

### VariationResponse
* VariationResponse `object`
  * Id `string`: Id
  * Name `string`: Name
  * OptionGroupIds `array`: List of option group ids applicable to this variation
    * items `string`
  * PreferenceGroupIds `array`: List of preference group ids applicable to this variation
    * items `string`
  * Price `number`: Price
  * Type `string`: Type

### Vehicle
* Vehicle `string` (values: CAR, BICYCLE, TRICYCLE, VAN, TRUCK): All The types of vehicle available.

### Voucher
* Voucher `object`
  * Code `string`: The voucher code
  * CodeType [CodeType](#codetype)
  * Created `string`: The created time (UTC) of the voucher
  * CreatedBy `string`: The creator of the voucher
  * Id `integer`: The voucher id
  * PaymentOptionTypes `array`: The payment options the voucher is restricted to
    * items `string`

### VoucherGroup
* VoucherGroup `object`
  * Archived `boolean`: Whether the voucher group is flagged as archived
  * Created `string`: The created time (UTC) of the voucher group
  * CreatedBy `string`: The creator of the voucher group
  * GroupType [GroupType](#grouptype)
  * Hidden `boolean`: Whether the voucher group is flagged as hidden
  * Id `integer`: The Id of the voucher group
  * Name `string`: The name of the voucher group
  * Source `string`: The source system creating the voucher group
  * StaticCode `string`: The static code of the voucher group (will be normalised as part of the creation)
  * Updated `string`: The updated time (UTC) of the voucher group

### VoucherLock
* VoucherLock `object`
  * Consumed `string`: The UTC date it was consumed
  * CuisinesIds `array`: The number of orders
    * items `string`
  * CustomerId `string`: The Customer Id the voucher is locked to
  * DeliveryFee `number`: The delivery fee
  * DiscountApplied `number`: The Discount Applied
  * Locked `string`: The UTC date it was locked
  * NumberOfOrders `integer`: The number of orders
  * OrderAmount `number`: The order amount
  * OrderId `string`: The Order Id the voucher is locked to
  * OrderPlacedDateWithUtcOffset `string`: The order placed date
  * PaymentOptionType `string`: The payment option
  * Platform `string`: The order platform
  * PostCode `string`: The post code
  * RestaurantId `integer`: The restaurant id
  * State [VoucherStates](#voucherstates)
  * VoucherId `integer`: The voucher id

### VoucherStates
* VoucherStates `integer` (values: 0, 1, 2)

### VoucherType
* VoucherType `integer` (values: 0, 1, 2): Type of voucher

### WellKnownConfigurationResponse
* WellKnownConfigurationResponse `object`: The success response object for the well-known endpoint.
  * authorization_endpoint `string`: URL of the authorisation endpoint.
  * issuer `string`: URL used to identify the issuer.
  * jwks_uri `string`: URL of the JSON Web Key Set. This contains the signing keys used to validate signatures.
  * response_types_supported `array`: List containing the OAuth 2.0 `response_type` values which are supported.
    * items `string`
  * scopes_supported `array`: List containing the scope values that the server supports.
    * items `string`
  * token_endpoint `string`: URL of the token endpoint.
  * token_endpoint_auth_methods_supported `array`: List containing the Client Authentication methods supported by this Token Endpoint.
    * items `string`
  * userinfo_endpoint `string`: URL of the user info endpoint.

### ZoneProfile
* ZoneProfile `object`: The zone profile object for a given delivery zone.
  * averageAssignableJobLoad `number`: The burden over the couriers in a delivery zone. The average assignable job load is calculated by the sum of all jobs assigned to the couriers divided by the delivery zone's total assignable courier count.
  * bender `object`: Bender On/Off object
    * enabled `boolean`: Bender Enabled/Disabled status
  * ema `number`: The simple moving average is the usage for a given delivery zone, which is calculated by using the sum of all on-shift utilisation ( percentage of time a courier spends working on orders during their shift ) at the time, divided by the number of time periods gathered from all data points. Differently from simple moving average, exponential moving average also represents the usage however its equation places a greater weight on the most recent data points.
  * flexStateType [BenderFlexStateType](#benderflexstatetype)
  * zoneId `string`: Zone profile delivery zone id.

### acceptance-requested
* acceptance-requested `object`
  * Currency `string`
  * Customer `object`
    * Id `number`
    * Name `string`
    * PreviousRestaurantOrderCount `number`: The customer's previous total number of orders made to this restaurant
    * PreviousTotalOrderCount `number`: The customer's previous total number of orders made to all restaurants
  * CustomerNotes `object`
  * FriendlyOrderReference `string`
  * Fulfilment `object`
    * Address [order-address](#order-address)
    * CustomerDueAsap `boolean`
    * CustomerDueDate `string`
    * Method `string` (values: Delivery, Collection)
    * PhoneMaskingCode `string`: Code to use when calling customer phone masking number about this order. null if phone masking not enabled
    * PhoneNumber `string`: Customer phone number (will be phone masking number if enabled)
    * PreparationTime `string`
  * IsTest `boolean`
  * Items [order-item](#order-item)
  * OrderId `string`
  * Payment `object`
    * Lines `array`
      * items `object`
        * Paid `boolean`
        * Type `string`
        * Value `number`
  * PlacedDate `string`
  * PriceBreakdown `object`
    * Discount `number`
    * Fees `object`
      * Delivery `number`
      * Other `number`
      * ServiceCharge `number`
    * Items `number`
    * Taxes `number`
    * Tips `number`
  * Restaurant `object`
    * Address [order-address](#order-address)
    * Id `string`: Restaurant Id
    * Name `string`
    * PhoneNumber `string`
    * Reference `string`
    * TimeZone `string`
  * Restrictions `array`: This is a list of types of restricted items contained in the order.
    * items [order-item-restriction](#order-item-restriction)
  * TotalPrice `number`

### address
* address `object`
  * AddressLines `array`
    * items `string`
  * City `string`
  * Postcode `string`

### address-v2
* address-v2 `object`
  * City **required** `string`
  * GeoLocation [location-v2](#location-v2)
  * Lines **required** `array`
    * items `string`
  * PostalCode **required** `string`

### applicationState
* applicationState `string` (values: OpenApplication, ManualInterventionRequired, ReadyForInitialReview, InitialReviewRejected, ReadyForFinalReview, FinalReviewRejected, Approved): The application state i.e. Open, Approved etc.

### applicationSubmitResponse
* applicationSubmitResponse `object`
  * applicationState [applicationState](#applicationstate)

### assessmentStatusTypes
* assessmentStatusTypes `integer` (values: 0, 1, 2, 3, 4): Denotes the type of segmentation status that restaurant can have

### attempted-delivery-created
* attempted-delivery-created `object`
  * OrderId `string`: The id of the order
  * Reason `string`: The reason for creating the attempted delivery
  * RestaurantId `number`: The id of the restaurant
  * Tenant `string`: The tenant associated with the order

### attempted-delivery-resolved
* attempted-delivery-resolved `object`
  * OrderId `string`: The ID of the order for which an attempted delivery query has been resolved
  * Resolution `object`: Details of the resolution to the query
    * Cancellation `object`: The cancellation properties. Only required if the order has been cancelled, otherwise null
      * Reason `string` (values: new_address_not_within_area, unable_to_reprepare, driver_not_available, area_unsafe, customer_doesnt_want_anymore): The reason for cancelling the order
    * Redelivery `object`: The redelivery properties. Only required if the order is being redelivered, otherwise null
      * CustomerTimeZone `string`: The IANA TZ database name of the time zone the customer that placed the order is in
      * NewDueDate `string`: Updated due date for delivery of the order in ISO 8601 format
      * Status `string` (values: driver_at_address, repreparing): The current status of the order
    * Type `string` (values: order_cancelled, redeliver_order): The type of resolution to the query, either cancellation or redelivery
  * Tenant `string` (values: uk, dk, es, ie, it, no, au, nz): The tenant of the restaurant the order was placed at

### attempted-delivery-response-received
* attempted-delivery-response-received `object`
  * Notes `string`
  * OrderId `string`
  * Tenant `string`
  * Update `string`

### availability-result
* availability-result `object`
  * message `string`: Error description when something went wrong or `unprocessedPartnerProductIds` any
  * processedPartnerProductIds `array`: Array of partner product identifiers that have been successfully processed
    * items `string`
  * unprocessedPartnerProductIds `array`: Array of partner product identifiers that have not been processed
    * items `string`

### availability-result-error
* availability-result-error `object`
  * message `string`: Short error description

### binary-object
* binary-object `string`

### bulk-delivery-details
* bulk-delivery-details `object`
  * EtaAtDeliveryAddress `string`: This should represent the delivery partner's best guess at when the driver will arrive at the delivery address.
  * EtaAtRestaurant `string`: This should represent the delivery partner's best guess at when the driver will arrive at the restaurant.
  * Location [location](#location)
  * OrderId `string`: Just Eat order identifier
  * TimeStampWithUtcOffset `string`: This should represent the bulk delivery updated timestamp.

### bulk-delivery-details-list
* bulk-delivery-details-list `array`
  * items [bulk-delivery-details](#bulk-delivery-details)

### campaignId
* campaignId `object`
  * campaignId `string`: Id of the campaign

### connectorder
* connectorder `object`
  * BasketInfo `object`: Basket data
    * BasketId `string`: Unique Basket Id for the Order.
    * DeliveryCharge `number`: Amount of cost that comes from delivery.
    * Discount `number`: The discount amount, used in conjunction with DiscountType.
    * Discounts `array`: Any Discounts applied to the Order.
      * items `object`: Discount data
        * Discount `number`: The discount amount, used in conjunction with DiscountType.
        * DiscountType `string`: The type of discount, e.g. a percentage or the order or fixed amount.
        * Id `number`: Basket item id.
        * QualifyingValue `number`: The minimum order amount in order for this discount to be applicable.
    * GroupedBasketItems `array`: Groupped basket items
      * items `object`: An item in the Basket.
        * BasketItem `object`: An item in the Basket.
          * CombinedPrice `number`: Unit Price plus individual Meal Part item cost.
          * Discounts `array`: Any discounts applied to this specfic item.
          * MealParts `array`: Represents sub-parts of a meal.
          * MenuCardNumber `string`: Menu card number.
          * MultiBuyDiscounts `array`: Any multi-purchase discounts appled to this item.
          * Name `string`: The Item name, e.g. Chicken Tikka Masala or Family Meal Deal 3.
          * OptionalAccessories `array`: An option item added to the Basket Item, this may be options such as Garlic Bread or a bottle of Coke.
          * ProductId `number`: Id of the Product.
          * ProductTypeId `number`: Id of the Product.
          * RequiredAccessories `array`: Items required as part of the Item, for example, Pizza base sauce.
          * Synonym `string`: Legacy - ignore.
          * UnitPrice `number`: The price of the item.
        * CombinedPrice `number`: The total price of the Basket Item (including discounts).
        * MenuCardNumber `string`: Menu card number.
        * OrderSubId `number`: Order SubId
        * Quantity `number`: The quanity of Basket Items requested.
    * MenuId `number`: Id of the Restaurant's menu.
    * MultiBuyDiscount `number`: MultiBuy discount.
    * SubTotal `number`: The Basket total cost, excluding any discounts.
    * ToSpend `number`: Amount to spend.
    * Total `number`: Total price of the Order.
  * CustomerInfo `object`: Customer data
    * Address `string`: Customer Address. Note that Address is comma delimited.
    * City `string`: The name of the city where the Customer is located.
    * DisplayPhoneNumber `string`: The customer's masked phone number.
    * Email `string`: Email address for the Customer.
    * Id `string`: The JUST EAT Customer Id.
    * Latitude `number`: Customer address latitude. Will be 0 if not provided.
    * LocationAccuracyDescription `string`: Location accuracy description
    * LocationAccuracyInMeters `number`: Accuracy of the location data in meters.
    * LocationSource `string`: Provider of the location data.
    * Longitude `number`: Customer address longitude. Will be 0 if not provided.
    * Name `string`: The name of the Customer.
    * PhoneMaskingCode `string`: Code to use when calling customer phone masked number (DisplayPhoneNumber) about this order. Null if phone masking not enabled
    * PhoneNumber `string`: The customer's unmasked phone number. Please don't expose this to drivers, instead use this number to provide your own phone masking number or use the JustEat masked number 'DisplayPhoneNumber' below
    * Postcode `string`: The post code where Customer is located.
    * PreviousRestuarantOrderCount `number`: The number of Orders the Customer has placed at this Restaurant via JUST EAT
    * TimeZone `string`: Customer timezone, e.g. 'Central European Standard Time'.
  * CustomerOrderId `number`: This is a deprecated customer-facing ID that we maintain to support existing implementations.
  * FriendlyOrderReference `string`: The customer facing identifier for the order, which should be used in any UI or receipts to identify the order to the customer, driver or restaurant. This identifier is not guaranteed to be globally unique.
  * Id `string`: The unique identifier for an order within the country. You can provide this ID whenever sending requests related to the order. Note that further messages from Just Eat relating to this order may not use this same identifier, use OrderId for a more consistent identifier.
  * IsAMiniFistPumpOrder `boolean`: Legacy Promotion - Ignore.
  * Order `object`: Order data
    * DueDate `string`: Ignore - use DueDateWithUtcOffset.
    * DueDateWithUtcOffset `string`: The DateTime when the Customer has been told they will receive the Order.
    * InitialDueDate `string`: Ignore - use IntialDueDateWithUtcOffset.
    * InitialDueDateWithUtcOffset `string`: When the Customer was originally told the order would be delivered (prior to Restaurant adjustment)
    * NoteToRestaurant `string`: Notes from the customer about their order. In addition to notes for the restaurant, this field can also delivery instructions - and should be displayed to the delivery driver.
    * PickupNoticePeriod `string`: Desired minimum amount of notice needed before the driver arrives to pickup the order at the restaurant. This is to allow restaurant enough time to prepare the order. If less notice is given the driver may have to wait for the order to be prepared. Field is in the format "hh:mm:ss"
    * PlacedDate `string`: Date Customer placed the order. Note that JUST EAT accepts pre-orders therefore there may be a significant difference between Placed Date and Due Date This Date/Time is set as UTC without an offset, regardless of Country.
    * PromptAsap `boolean`: Did the Customer request the Order to ready ASAP
    * RdsPickupTimeWithUtcOffset `string`: When the Delivery Partner needs to be at the Restaurant to pickup the Order.
    * ServiceType `string` (values: Collection, Delivery): Type of the Order.
  * OrderId `string`: Globally unique Identifier for the order. Please use this whenever sending requests related to this order. Just Eat will provide this same identifier on any further messages relating to this order.
  * OrderReference `string`: This field is used to store external references to the order. This is defined by either Just Eat or the partner that created the order.
  * PaymentInfo `object`: Payment data
    * CashOnDelivery `boolean`: Is the Customer paying on Delivery.
    * DriverTipValue `number`: The value of the tip given to the Driver.
    * PaidDate `string`: DateTime when the Order was Paid (excludes UTC offset).
    * PaymentLines `array`: How the Customer has paid for the Order.
      * items `object`: Payment line data
        * CardFee `number`: Was there a fee for the payment mechanism.
        * Type `string` (values: Card): How was the order Paid.
        * Value `number`: The value of the payment.
    * Total `number`: The total order value.
    * TotalComplementary `number`: Order amount covered by JUST EAT.
  * RestaurantInfo `object`: Restaurant data
    * AddressLines `array`: Restaurant address.
      * items `string`: Address line
    * City `string`: The name of the city where the Restaurant is located
    * DispatchMethod `string`: DispatchMethod to use.
    * EmailAddress `string`: Email address for the Restaurant.
    * Id `string`: Unique ID of the Restaurant.
    * Latitude `number`: Restaurant address latitude. Will be 0 if not provided.
    * Longitude `number`: Restaurant address longitude. Will be 0 if not provided.
    * Name `string`: The name of the Restaurant.
    * PhoneNumber `string`: The Restaurant phone number.
    * PickupNotes `string`: Order pickup instructions for the Delivery Partner.
    * Postcode `string`: The post code where Restaurant is located
  * Restrictions `array`: This is a list of types of restricted items contained in the order.
    * items [order-item-restriction](#order-item-restriction)

### connectorder-list
* connectorder-list `array`
  * items [connectorder](#connectorder)

### consumerMarketingPreference
* consumerMarketingPreference `array`
  * items `object`
    * channelName `string` (values: Email, Push, Sms): The channel name.
    * dateUpdated `string`: The date of the marketing preference change
    * isSubscribed `boolean`: Should the channel be subscribed to?

### consumerMarketingPreferencev2
* consumerMarketingPreferencev2 `object`
  * emailAddress `string`: The email address of the consumer
  * updates `array`: Collection of marketing channel subscription updates
    * items [consumerMarketingPreference](#consumermarketingpreference)

### create-attempted-delivery
* create-attempted-delivery `object`
  * ReasonCode `string` (values: problem_with_address, no_answer): The reason the attempted delivery event was created

### create-delivery-pool
* create-delivery-pool `object`
  * name **required** `string`: The name of the pool, used by operations teams, in reports, etc.
  * restaurants `array`: A list of Just Eat restaurant ids served by the delivery pool.
    * items `number`

### customer
* customer `object`
  * Address [address](#address)
  * CustomerReference `string`
  * Email `string`
  * Location [location](#location)
  * Name `string`
  * PhoneNumber `string`

### customer-v2
* customer-v2 `object`
  * Address **required** [address-v2](#address-v2)
  * DisplayPhoneNumber `string`: If you implement phone masking provide a masked number here
  * Email `string`
  * Name **required** `string`
  * PhoneNumber **required** `string`: The customer's real phone number

### customerExperienceScoreDetail
* customerExperienceScoreDetail `object`: Details of how customer experience score has contributed to get the segmentation status
  * hasPassed `boolean`: Represent if the restaurant has passed the customer experience score criteria
  * maximumScore `number`: Represent the maximum customer experience score that can be achieved by the restaurant
  * requiredScore `number`: Represent the customer experience score required to pass the customer experience score criteria
  * score `number`: Represent the customer experience score achieved by the restaurant
  * scoreType [scoreTypes](#scoretypes)

### delivery-abort-with-reason
* delivery-abort-with-reason `object`
  * deliveryPartnerReasonCode `string`: The original reason code from the delivery partner
  * reason `string` (values: cancelled_by_requester, package_not_available, restaurant_closed, package_damaged, address_error, driver_problem, could_not_reach_customer, technical_problem, incorrect_package, other): The detailed Just Eat delivery partner cancellation reason code

### delivery-details
* delivery-details `object`
  * Location [location](#location)
  * TimeStampWithUtcOffset `string`: This should represent the delivery detailed updated timestamp.

### delivery-driver-assigned-details
* delivery-driver-assigned-details `object`
  * DriverContactNumber `string`: This should represent the driver's contact number.
  * DriverName `string`: This should represent the driver's name.
  * EtaAtDeliveryAddress `string`: This should represent the delivery partner's best guess at when the driver will arrive at the delivery address.
  * EtaAtRestaurant `string`: This should represent the delivery partner's best guess at when the driver will arrive at the restaurant. In other words, it should not just contain the pick-up time initially requested by Just Eat.
  * Location [location](#location)
  * TimeStampWithUtcOffset `string`: This should represent the driver assigned timestamp.
  * VehicleDetails [vehicle-details](#vehicle-details)

### delivery-driver-details-with-eta
* delivery-driver-details-with-eta `object`
  * EtaAtDeliveryAddress `string`: This should represent the delivery partner's best guess at when the driver will arrive at the delivery address.
  * Location [location](#location)
  * TimeStampWithUtcOffset `string`: This should represent the Eta calculated timestamp.

### delivery-driver-location
* delivery-driver-location `object`
  * EtaAtDeliveryAddress `string`: This should represent the delivery partner's best guess at when the driver will arrive at the delivery address.
  * EtaAtRestaurant `string`: This should represent the delivery partner's best guess at when the driver will arrive at the restaurant.
  * Location [location](#location)
  * TimeStampWithUtcOffset `string`: This should represent the location updated timestamp.

### delivery-driver-unassigned-details
* delivery-driver-unassigned-details `object`
  * Comment `string`: This should represent the comment on the unassignment.
  * DriverContactNumber `string`: This should represent the driver's contact number.
  * DriverName `string`: This should represent the driver's name.
  * EtaAtDeliveryAddress `string`: This should represent the delivery partner's best guess at when the driver will arrive at the delivery address.
  * EtaAtRestaurant `string`: This should represent the delivery partner's best guess at when the driver will arrive at the restaurant. In other words, it should not just contain the pick-up time initially requested by Just Eat.
  * Location: [location](#location)
  * Reason `string`: This should represent the delivery partner's reason for unassigning themselves from the order.
  * TimeStampWithUtcOffset `string`: This should represent the driver unassigned timestamp.
  * UnassignedBy `string`: This should represent the actor who triggered unassignment.

### delivery-eta-minutes
* delivery-eta-minutes `object`
  * Approximate `integer`: Approximate delivery eta in minutes
  * RangeLower `integer`: Lower bound of delivery eta in minutes
  * RangeUpper `integer`: Upper bound of delivery eta in minutes

### delivery-pool
* delivery-pool `object`
  * name `string`: The name of the pool, used by operations teams, in reports, etc.
  * restaurants `array`: A list of Just Eat restaurant ids served by the delivery pool.
    * items `number`

### delivery-pool-hours
* delivery-pool-hours `object`
  * friday **required** `object`
    * closed `boolean`: true if the pool is closed for the day
    * poolTimes **required** `array`: pool start and end times for the day
      * items `object`
        * endTime **required** `string`: pool end time for Friday (HH:mm)
        * startTime **required** `string`: pool start time for Friday (HH:mm)
  * monday **required** `object`
    * closed `boolean`: true if the pool is closed for the day
    * poolTimes **required** `array`: pool start and end times for the day
      * items `object`
        * endTime **required** `string`: pool end time for Monday (HH:mm)
        * startTime **required** `string`: pool start time for Monday (HH:mm)
  * saturday **required** `object`
    * closed `boolean`: true if the pool is closed for the day
    * poolTimes **required** `array`: pool start and end times for the day
      * items `object`
        * endTime **required** `string`: pool end time for Saturday (HH:mm)
        * startTime **required** `string`: pool start time for Saturday (HH:mm)
  * sunday **required** `object`
    * closed `boolean`: true if the pool is closed for the day
    * poolTimes **required** `array`: pool start and end times for the day
      * items `object`
        * endTime **required** `string`: pool end time for Sunday (HH:mm)
        * startTime **required** `string`: pool start time for Sunday (HH:mm)
  * thursday **required** `object`
    * closed `boolean`: true if the pool is closed for the day
    * poolTimes **required** `array`: pool start and end times for the day
      * items `object`
        * endTime **required** `string`: pool end time for Thursday (HH:mm)
        * startTime **required** `string`: pool start time for Thursday (HH:mm)
  * tuesday **required** `object`
    * closed `boolean`: true if the pool is closed for the day
    * poolTimes **required** `array`: pool start and end times for the day
      * items `object`
        * endTime **required** `string`: pool end time for Tuesday (HH:mm)
        * startTime **required** `string`: pool start time for Tuesday (HH:mm)
  * wednesday **required** `object`
    * closed `boolean`: true if the pool is closed for the day
    * poolTimes **required** `array`: pool start and end times for the day
      * items `object`
        * endTime **required** `string`: pool end time for Wednesday (HH:mm)
        * startTime **required** `string`: pool start time for Wednesday (HH:mm)

### delivery-restaurantslist
* delivery-restaurantslist `object`
  * restaurants `array`: A list of Just Eat restaurant ids served by the pool.
    * items `number`

### document
* document `object`
  * documentMetadata [documentMetadata](#documentmetadata)
  * documentType [documentType](#documenttype)

### documentContentType
* documentContentType `string` (values: image/jpeg, image/png, application/pdf, application/msword): The content type of this document. Can be used by the client to display the file correctly

### documentLinkResponse
* documentLinkResponse `object`
  * documentKey `string`: The name of the document
  * headers `object`: Headers that will be passed when calling S3
  * href `string`: The signed URL for S3. It includes the random generated file name which is usually a GUID.
  * method `string` (values: GET, PUT, DELETE): The method the client should use when calling S3

### documentMetadata
* documentMetadata `object`
  * contentType [documentContentType](#documentcontenttype)
  * dateAdded `string`: When the document is added [YYYY-MM-DDThh:mm:ssZ (UTC)]
  * documentKey `string`: Key of document being added. This is the s3 object key that you have already added

### documentRejectionType
* documentRejectionType `string` (values: Other, IncorrectDocument, NotClearEnough, Outdated, NoOwnersName, NoOwnersPhoto, NoBusinessAddress, NoBusinessName, MissingPages, Handwritten, MissingInformation, NoAllergenKey, LogoNameDoesNotMatch, CopyrightInfringement, PhotoFromInternet): The rejection reason of a document

### documentReviews
* documentReviews `object`
  * rejectionReasons `array`: An array of rejection reasons
    * items `object`
      * comment `string`: Any other review comments
      * type [documentRejectionType](#documentrejectiontype)

### documentState
* documentState `string` (values: NotAvailable, Received, ReadyForInitialReview, InitialToBeRejected, InitialNoIssuesFound, InitialReviewRejected, ReadyForFinalReview, FinalReviewNoIssuesFound, FinalReviewToBeRejected, FinalReviewRejected, Approved): The state of a document

### documentStateUpdate
* documentStateUpdate `object`
  * documentState [documentState](#documentstate)

### documentType
* documentType `string` (values: Menu, PhotoId, AddressProof, FsaCertificate, Logo, OwnershipInfo, Shopfront): The type of the document

### driver-location
* driver-location `object`
  * Location [location-v2](#location-v2)
  * OrderId `string`
  * TimeStamp `string`

### driver-status
* driver-status `object`
  * DriverContactNumber `string`
  * DriverName `string`
  * EstimatedDeliveryTime `string`
  * EstimatedPickupTime `string`
  * Event `string` (values: DriverAssigned, DriverAtRestaurant, OnItsWay, AtDeliveryAddress, Delivered)
  * OrderId `string`
  * TimeStamp `string`

### emailaddress
* emailaddress `object`
  * EmailAddress `string`: An email address for an account.

### estimated-delivery-time
* estimated-delivery-time `object`
  * DurationInMinutes `string`
  * RestaurantReference `string`

### estimated-time
* estimated-time `object`
  * bestGuess `string`: Your best estimation (hh:mm:ss)

### eta-estimate
* eta-estimate `object`
  * bestGuess `string`: This should represent the delivery partner's best guess at when the driver will arrive at the restaurant.
  * estimatedAt `string`: This is the time at which you are doing the estimation

### extensibleObject
* extensibleObject `object`

### fee
* fee `object`
  * Type `string`
  * Value `number`

### fulfillment
* fulfillment `object`
  * Method `string`
  * PickupTime `string`
  * Table `string`

### fulfilment-v2
* fulfilment-v2 `object`
  * DueAsap `boolean`: If food should be delivered ASAP
  * DueDate **required** `string`: The time the customer expects the food. Time must be in the future
  * Method **required** `string` (values: Delivery, Collection)

### hygieneScheme
* hygieneScheme `integer` (values: 0, 1, 2): Denotes the type of hygiene scheme supported

### hygieneScoreDetail
* hygieneScoreDetail `object`: Details of hygiene rating experience score has contributed to get the segmentation status
  * hasPassed `boolean`: Represent if the restaurant has passed the hygiene score criteria
  * scheme [hygieneScheme](#hygienescheme)
  * scoreType [scoreTypes](#scoretypes)

### initialRestaurantRequest
* initialRestaurantRequest `object`
  * address **required** `object`: The address of the restaurant
    * city `string`: The name of the city the restaurant is located
    * lines `array`: The address lines the restaurant is located
      * items `string`
    * postalCode `string`: The post code the restaurant is located
  * name **required** `string`: The name of the restaurant
  * owner **required** `object`: The owner of the restaurant
    * emailAddress `string`: The email address of the restaurant owner
    * familyName `string`: The last name of the restaurant owner
    * givenName `string`: The first name of the restaurant owner
    * phoneNumber `string`: The phone number of the restaurant owner

### item
* item `object`
  * Description `string`
  * Items `array`
    * items [item](#item)
  * OptionReference `string`
  * Quantity `number`
  * Reference `string`

### item-v2
* item-v2 `object`
  * Items `array`
    * items [item-v2](#item-v2)
  * Name `string`
  * Quantity `integer`
  * Reference `string`
  * UnitPrice `integer`

### items-v2
* items-v2 `object`
  * Items `array`
    * items [item-v2](#item-v2)
  * Name **required** `string`
  * Quantity **required** `integer`
  * Reference **required** `string`: The item's ID that you hold
  * TotalPrice **required** `number`: Price of this item x quantity and all sub items
  * UnitPrice `integer`

### late-order-compensation-options
* late-order-compensation-options `array`
  * items [LateOrderCompensationOption](#lateordercompensationoption)

### late-order-compensation-query
* late-order-compensation-query `object`
  * compensationOptions [late-order-compensation-options](#late-order-compensation-options)
  * orderId `string`: Just Eat order identifier
  * restaurantId `string`: Just Eat restaurant identifier
  * tenant `string`: Tenant (Country) of order restaurant.

### late-order-query
* late-order-query `object`
  * orderId `string`: Just Eat order identifier
  * restaurantId `string`: Just Eat restaurant identifier
  * tenant `string`: Tenant (Country) of order restaurant.

### lines-v2
* lines-v2 `object`
  * LastCardDigits `string`
  * Paid `boolean`
  * ServiceFee `number`
  * Type **required** `string` (values: Cash, Card, AccountCredit, Voucher)
  * Value `number`

### location
* location `object`: GeoLocation object containing latitude and longitude values.
  * Accuracy `number`: This should represent the accuracy of driver's location.
  * Heading `number`: This should represent the degree of heading direction, for example, 0 is north, 90 is east.
  * Latitude **required** `number`: This should represent the latitude of the driver's location.
  * Longitude **required** `number`: This should represent the longitude of the driver's location.
  * Speed `number`: This should represent the travel speed of the driver.

### location-v2
* location-v2 `object`
  * Latitude **required** `number`
  * Longitude **required** `number`

### menu-ingestion-complete
* menu-ingestion-complete `object`
  * correlationId `string`: The ID of the execution which has been completed
  * fault `object`: Details of the fault which caused the menu ingestion to fail. This is only present if menu ingestion did not complete successfully
    * errors `array`: Details of errors which caused the fault
      * items `object`
        * code `string`: An alphanumeric code for the error
        * description `string`: A description of the error to help you resolve the issue
    * id `string`: A unique ID for the fault
  * restaurantId `string`: The Just Eat restaurant ID
  * result `string` (values: success, fail): The result of the menu ingestion process
  * tenant `string` (values: au, dk, es, ie, it, no, uk, nz): Country code for the market the restaurant is in
  * timestamp `string`: The ISO-8601 datetime at which the menu ingestion completed

### object
* object `object`

### on-its-way-details
* on-its-way-details `object`
  * EstimatedArrivalTime `string`: This should represent the delivery partner's best guess at when the driver will arrive at the customer's address. In other words, it should not just contain the delivery time initially requested by Just Eat.
  * Location [location](#location)
  * TimeStampWithUtcOffset `string`: This should represent the driver on its ways timestamp.

### onItsWayPercentage
* onItsWayPercentage `object`: Details of how on its way experience score has contributed to get the segmentation status
  * hasPassed `boolean`: Represent if the restaurant has passed the on-its-way threshold
  * requiredScore `number`: Represent the on its way percentage required to pass the on-its-way threshold
  * score `number`: Represent the on-its-way percentage of restaurant
  * scoreType [scoreTypes](#scoretypes)

### order-accept-request
* order-accept-request `object`
  * TimeAcceptedFor `string`

### order-accepted
* order-accepted `object`
  * AcceptedFor `string`
  * Event `string`
  * OrderId `string`

### order-address
* order-address `object`
  * City `string`
  * Geolocation `object`
    * Latitude `number`
    * Longitude `number`
  * Lines `array`
    * items `string`
  * PostalCode `string`

### order-cancel-request
* order-cancel-request `object`
  * Message `string`: Reason why this order is being cancelled.

### order-cancelled
* order-cancelled `object`
  * Event `string`
  * OrderId `string`
  * Reason `string` (values: cust_cancelled_changed_mind, cust_cancelled_delivery_too_long, cust_cancelled_made_mistake, cust_cancelled_other, delivery_partner_cancelled, rest_cancelled_customer_absent, rest_cancelled_customer_requested, rest_cancelled_declined, rest_cancelled_drivers_unavailable, rest_cancelled_fake_order, rest_cancelled_other, rest_cancelled_out_of_stock, rest_cancelled_too_busy, system_cancelled_other, system_cancelled_test_order): The reason the order was cancelled.

### order-due-date-request
* order-due-date-request `object`
  * DueDate `string`: The updated ETA for the order

### order-item
* order-item `array`
  * items `object`
    * Items [order-item](#order-item)
    * Name `string`
    * Quantity `number`
    * Reference `string`
    * TotalPrice `number`
    * UnitPrice `number`

### order-item-restriction
* order-item-restriction `object`
  * Type `string` (values: Alcohol): The type of restricted item contained in the order. The only supported value is 'Alcohol'.

### order-ready-for-preparation
* order-ready-for-preparation `object`
  * Currency `string`
  * Customer `object`
    * Id `string`
    * Name `string`
  * CustomerNotes `object`
  * Fulfilment `object`
    * Address `object`
      * City `string`
      * Geolocation [location](#location)
      * Lines `array`
        * items `string`
      * PostalCode `string`
    * CustomerDueAsap `boolean`
    * CustomerDueDate `string`
    * Method `string` (values: Delivery, Collection)
    * PhoneNumber `string`
    * PreparationTime `string`
    * PrepareFor `string`
  * IsTest `boolean`
  * Items `array`
    * items [item-v2](#item-v2)
  * OrderId `string`
  * Payment `object`
    * Lines `array`
      * items `object`
        * Paid `boolean`
        * Type `string` (values: card, cash, credit, other)
        * Value `number`
  * PlacedDate `string`
  * PriceBreakdown `object`
    * Discount `number`
    * Fees `object`
      * Delivery `number`
      * Other `number`
      * ServiceCharge `number`
    * Items `number`
    * Taxes `number`
    * Tips `number`
  * Restaurant `object`
    * Address `object`
      * City `string`
      * Geolocation [location](#location)
      * Lines `array`
        * items `string`
      * PostalCode `string`
    * Id `string`
    * Name `string`
    * PhoneNumber `string`
    * Reference `string`
  * TotalPrice `number`

### order-reject-request
* order-reject-request `object`
  * Message `string`: Reason why this order is being rejected.

### order-rejected
* order-rejected `object`
  * Event `string`
  * RejectedAt `string`
  * RejectedBy `string`
  * RejectedReason `string`

### order-request
* order-request `object`
  * Basket **required** `string`
  * Customer **required** [customer](#customer)
  * CustomerNote `string`
  * DueDate **required** `string`
  * EventUpdateUri `string`
  * FriendlyOrderReference `string`
  * Fulfillment [fulfillment](#fulfillment)
  * IsRds `boolean`
  * OrderReference **required** `string`
  * PartnerName `string`
  * PartnerSubscriptionId **required** `integer`
  * Payment **required** [payment](#payment)
  * PlacedDate **required** `string`
  * RestaurantDetails **required** [restaurant-details](#restaurant-details)
  * RestaurantReference `string`
  * TimeStampAccepted `string`

### order-request-v2
* order-request-v2 `object`
  * Customer **required** [customer-v2](#customer-v2)
  * CustomerNotes `object`
    * NoteForDelivery `string`
    * NoteForRestaurant `string`
  * FriendlyOrderReference `string`
  * Fulfilment **required** [fulfilment-v2](#fulfilment-v2)
  * IsTest `boolean`
  * Items **required** `array`
    * items [items-v2](#items-v2)
  * OrderReference **required** `string`
  * Payment **required** [payment-v2](#payment-v2)
  * Restaurant **required** [restaurant-v2](#restaurant-v2)
  * TotalPrice **required** `number`

### order-status-request
* order-status-request `object`
  * Data `object`
  * Message `string`
  * Status **required** `string` (values: InKitchen, FailedToSendToKitchen, Accepted, Rejected): The requested new state of the order
  * TimeAcceptedFor `string`
  * TimeStamp **required** `string`

### order-time-updated
* order-time-updated `object`
  * dayOfWeek `string` (values: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday): The day of the week that has been updated.
  * lowerBoundMinutes `integer`: Order time lower bound value, in minutes.
  * restaurantId `string`: The Just Eat restaurant ID
  * serviceType `string` (values: Delivery, Collection): Service type of the order time.
  * upperBoundMinutes `integer`: Order time upper bound value, in minutes.

### orderScoreDetail
* orderScoreDetail `object`: Details of how order score has contributed to get the segmentation status
  * hasPassed `boolean`: Represent if the restaurant has passed the order score criteria
  * maximumScore `number`: Represent the maximum order score that can be achieved by the restaurant
  * requiredScore `number`: Represent the order score required to pass the order score criteria
  * score `number`: Represent the order score achieved by the restaurant
  * scoreType [scoreTypes](#scoretypes)

### orderTime
* orderTime `object`: The object representing order time entry
  * dayOfWeek `string` (values: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday): Day of week for order time
  * lowerBoundMinutes `integer`: Order time lower bound value, in minutes.
  * serviceType `string` (values: Delivery, Collection): Service type of the order time
  * upperBoundMinutes `integer`: Order time upper bound value, in minutes.

### partner-restaurant-temporary-offline-status
* partner-restaurant-temporary-offline-status `object`
  * Message `string`
  * Status `string` (values: TempOffline, ClosedToday, None)

### password
* password `object`
  * Password `string`: A password for a consumers account.

### patch-delivery-pool
* patch-delivery-pool `object`
  * name `string`: The name of the pool, used by operations teams, in reports, etc.
  * restaurants `array`: A list of Just Eat restaurant ids served by the delivery pool.
    * items `number`

### payment
* payment `object`
  * CardCharges `number`
  * CashOnDelivery `boolean`
  * DeliveryCharge `number`
  * DriverTipValue `number`
  * Fees `array`
    * items [fee](#fee)
  * RestaurantTipValue `number`
  * Total `number`

### payment-v2
* payment-v2 `object`
  * Fees `array`
    * items [fee](#fee)
  * Lines **required** `array`
    * items [lines-v2](#lines-v2)
  * PaidDate `string`
  * Taxes `array`
    * items [tax-v2](#tax-v2)
  * Tips `array`
    * items [fee](#fee)

### product-id-list
* product-id-list `array`
  * items `string`: Array of partner product identifiers

### ready-for-pickup
* ready-for-pickup `object`
  * Event `string` (values: Ready for pickup)
  * Timestamp `string`

### resolve-attempted-delivery-cancel
* resolve-attempted-delivery-cancel `object`
  * ReasonCode `string` (values: new_address_not_within_area, unable_to_reprepare, driver_not_available, area_unsafe, customer_doesnt_want_anymore): The reason the order has been cancelled

### resolve-attempted-delivery-redeliver
* resolve-attempted-delivery-redeliver `object`
  * NewDueDate `string`: Updated due date for delivery of the order
  * Status `string` (values: driver_at_address, repreparing): The current status of the order

### restaurant
* restaurant `object`
  * address `object`: The address of the restaurant
    * city `string`: The name of the city the restaurant is located
    * lines `array`: The address lines the restaurant is located
      * items `string`
    * postalCode `string`: The post code the restaurant is located
  * applicationState [applicationState](#applicationstate)
  * bankDetails `object`: Account holder information for the restaurant
    * accountHolderName `string`: The name on the bank account
    * bankAccountNumber `string`: The bank account number
    * bankName `string`: The name of the bank
    * bankSortCode `string`: The sort code
  * createdDate `string`: When the restaurant was created [YYYY-MM-DDThh:mm:ssZ (UTC)]
  * fulfilment `object`: The delivery type of the restaurant
    * type `string` (values: DeliveryAndCollection, CollectionOnly, JustEatDelivery): The delivery type of the restaurant
  * hygiene `object`: The food hygiene rating for the restaurant
    * rating `string`: The rating score
  * lastUpdatedDate `string`: When the restaurant was last updated [YYYY-MM-DDThh:mm:ssZ (UTC)]
  * menu `object`: The restaurant menu
    * requestedCuisines `array`: The restaurant cuisines
      * items `string`
  * name `string`: The name of the restaurant
  * owner `object`: The restaurant owner
    * emailAddress `string`: The email address of the restaurant owner
    * familyName `string`: The last name of the restaurant owner
    * givenName `string`: The first name of the restaurant owner
    * phoneNumber `string`: The phone number of the restaurant owner

### restaurant-details
* restaurant-details `object`
  * Address **required** `string`
  * City `string`
  * Email **required** `string`
  * Id **required** `integer`
  * Location **required** [location](#location)
  * Name **required** `string`
  * PhoneNumber `string`
  * Postcode `string`

### restaurant-details-updated
* restaurant-details-updated `object`
  * event `string` (values: RestaurantUpdated)
  * restaurants `array`
    * items `object`
      * city `string`
      * firstLine `string`
      * id `number`: The JUST EAT restaurant id
      * latitude `number`
      * longitude `number`
      * name `string`
      * postcode `string`
  * tenant `string`: The country the restaurant(s) exists in

### restaurant-hours-changed
* restaurant-hours-changed `object`
  * Event `string` (values: OpenHoursForRestaurantChanged)
  * OpenHours `array`
    * items `object`
      * CloseTime `string`: The close time (HH:mm) (Wide clock, ie, if before start it is following day)
      * Closed `boolean`: The restaurant is closed for the day
      * DayOfWeek `string` (values: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday): The day of the week the times are for.
      * OpenTime `string`: The open time (HH:mm)
  * RestaurantReference `string`: The JUST EAT Restaurant Id
  * Tenant `string`: The country the restaurant exists in

### restaurant-information-updated
* restaurant-information-updated `object`
  * RestaurantInformationUpdated `object`
    * RestaurantId `string`: The JUST EAT Restaurant Id
    * RestaurantInfo `object`
      * address `object`
        * city `string`
        * firstLine `string`
        * location `object`
          * lat `number`
          * lng `number`
        * postcode `string`
      * allergenPhoneNumber `string`
      * allergenUrl `string`
      * alternativeOwnerName `string`
      * alternativeOwnerNumber `string`
      * brandName `string`
      * companyNo `string`
      * email `string`
      * id `integer`
      * legalName `string`
      * logoUrl `string`
      * mobileNumber `string`
      * name `string`
      * openingClosingTimes `object`
        * fridayClosed `boolean`
        * fridayClosingTimeOfDay `string`
        * fridayOpeningTimeOfDay `string`
        * mondayClosed `boolean`
        * mondayClosingTimeOfDay `string`
        * mondayOpeningTimeOfDay `string`
        * saturdayClosed `boolean`
        * saturdayClosingTimeOfDay `string`
        * saturdayOpeningTimeOfDay `string`
        * sundayClosed `boolean`
        * sundayClosingTimeOfDay `string`
        * sundayOpeningTimeOfDay `string`
        * thursdayClosed `boolean`
        * thursdayClosingTimeOfDay `string`
        * thursdayOpeningTimeOfDay `string`
        * tuesdayClosed `boolean`
        * tuesdayClosingTimeOfDay `string`
        * tuesdayOpeningTimeOfDay `string`
        * wednesdayClosed `boolean`
        * wednesdayClosingTimeOfDay `string`
        * wednesdayOpeningTimeOfDay `string`
      * ownerName `string`
      * phoneNumber `string`
      * seoName `string`
      * signupReference `string`
    * Tenant `string`: The country the restaurant exists in
  * event `string` (values: RestaurantInformationUpdated)

### restaurant-offline-status
* restaurant-offline-status `object`
  * Event `string` (values: RestaurantOfflineStatus)
  * RestaurantOfflineStatus [RestaurantOfflineStatus](#restaurantofflinestatus)
  * RestaurantReference `string`: The JUST EAT Restaurant Id

### restaurant-status
* restaurant-status `object`
  * Event `string` (values: RestaurantStatusChange)
  * Message `string`: This field should not be used but has been left in the callback for backwards compatability purposes
  * RestaurantReference `string`: The JUST EAT Restaurant Id
  * Status `string` (values: online, offline)

### restaurant-v2


### restaurantEmailAddress
* restaurantEmailAddress `object`
  * emailAddress `string`: The email address of the restaurant that the login link will be sent to

### scoreTypes
* scoreTypes `integer` (values: 0, 1, 2): Represent the type of score data. Value of this field will depend on the category.

### search-address
* search-address `object`: The address of the restaurant
  * City `string`: City the restaurant is in
  * FirstLine `string`: First line of the restaurant's address
  * Latitude `number`: Latitude of the restaurant
  * Longitude `number`: Longitude of the restaurant
  * Postcode `string`: Postcode of the restaurant

### search-restaurant
* search-restaurant `object`
  * Address [search-address](#search-address)
  * DeliveryEtaMinutes [delivery-eta-minutes](#delivery-eta-minutes)
  * DriveDistance `number`: The distance to drive from restaurant to delivery location in miles
  * DriveInfoCalculated `boolean`: Flag indicating that the driving information has been calculated
  * Id `number`: The id of the restaurant
  * IsOpenNowForDelivery `boolean`: Indicates the restaurant is now open for delivery
  * Name `string`: The name of the restaurant
  * UniqueName `string`: The unique name of the restaurant on Just Eat
  * Url `string`: The URL of the restaurant's menu page

### search-restaurants
* search-restaurants `object`
  * Restaurants `array`: A list of restaurants matching the search criteria
    * items [search-restaurant](#search-restaurant)

### segmentationHistory
* segmentationHistory `object`: Represents list of last four segmentation statuses, sorted reverse chronologically by assessment date.
  * dateAssessed `string`: Date and time when the segmentation assessment was made
  * hasLocalLegendCriteriaBeenMet `boolean`: Represents if the restaurant achieved local legend status at that point or not
  * status [assessmentStatusTypes](#assessmentstatustypes)

### segmentationHistoryList
* segmentationHistoryList `array`: Represents list of last four segmentation statuses, sorted reverse chronologically by assessment date.
  * items [segmentationHistory](#segmentationhistory)

### segmentationStatus
* segmentationStatus `object`
  * details [segmentationStatusDetail](#segmentationstatusdetail)
  * id `number`: The JUST EAT restaurant id
  * lastUpdated `string`: Timestamp of last status change
  * status [assessmentStatusTypes](#assessmentstatustypes)

### segmentationStatusDetail
* segmentationStatusDetail `object`: Represent the details of segmentation status sub-scores
  * customerExperienceScore [customerExperienceScoreDetail](#customerexperiencescoredetail)
  * hygiene [hygieneScoreDetail](#hygienescoredetail)
  * onItsWayPercentage [onItsWayPercentage](#onitswaypercentage)
  * orderScore [orderScoreDetail](#orderscoredetail)

### send-to-pos-failed
* send-to-pos-failed `object`
  * OrderId `string`

### supportRequest
* supportRequest `object`
  * body `string`: Detail of the request
  * orderid `string`: The id of the order this request relates to
  * subject `string`: What is this request about?

### tax-v2
* tax-v2 `object`
  * Percentage **required** `number`
  * Type **required** `string`
  * Value **required** `number`

### tenants
* tenants `string` (values: au, ca, dk, es, ie, it, nz, uk)

### updateOrderTimeRequest
* updateOrderTimeRequest `object`: Request object for order time update
  * lowerBoundMinutes `integer`: Order time lower bound value, in minutes.
  * upperBoundMinutes `integer`: Order time upper bound value, in minutes.

### vehicle-details
* vehicle-details `object`
  * Vehicle `string`
  * VehicleRegistration `string`


