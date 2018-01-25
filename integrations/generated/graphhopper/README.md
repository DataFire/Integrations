# @datafire/graphhopper

Client library for Route Optimization

## Installation and Usage
```bash
npm install --save @datafire/graphhopper
```
```js
let graphhopper = require('@datafire/graphhopper').create({
  api_key: ""
});

graphhopper.postVrp({
  "key": "",
  "body": {}
}).then(data => {
  console.log(data);
});
```

## Description

Our Route Optimization API solves the so called vehicle routing problem fast. It calculates an optimal tour for a set of vehicles, services and constraints

## Actions

### postVrp
This endpoint for solving vehicle routing problems, i.e. traveling salesman or vehicle routing problems, and returns the solution.



```js
graphhopper.postVrp({
  "key": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * key **required** `string`: your API key
  * body **required** [Request](#request)

#### Output
* output [JobId](#jobid)

### getSolution
This endpoint returns the solution of a large problems. You can fetch it with the job_id, you have been sent.



```js
graphhopper.getSolution({
  "key": "",
  "jobId": ""
}, context)
```

#### Input
* input `object`
  * key **required** `string`: your API key
  * jobId **required** `string`: Request solution with jobId

#### Output
* output [Response](#response)



## Definitions

### Activity
* Activity `object`
  * arr_time `integer`: arrival time at this activity in ms
  * distance `integer`: cumulated distance from start to this activity in m
  * driving_time `integer`: driving time of driver in ms
  * end_time `integer`: end time of and thus departure time at this activity
  * id `string`: id referring to the underlying service or shipment, i.e. the shipment or service this activity belongs to
  * load_after `array`: Array with size/capacity dimensions after this activity
    * items `integer`: dimension value
  * load_before `array`: Array with size/capacity dimensions before this activity
    * items `integer`: dimension value
  * location_id `string`: id that refers to address
  * type `string` (values: start, end, service, pickupShipment, deliverShipment, pickup, delivery): type of activity
  * waiting_time `integer`: waiting time at this activity in ms

### Address
* Address `object`
  * lat `number`: latitude
  * location_id `string`: Unique identifier of location
  * lon `number`: longitude

### Algorithm
* Algorithm `object`
  * objective `string` (values: transport_time, completion_time)
  * problem_type `string` (values: min, min-max)

### Break
* Break `object`
  * duration `integer`: duration of break
  * earliest `integer`: earliest start of break
  * initial_driving_time `integer`: initial driving time, i.e. the time your driver has already spent for driving
  * latest `integer`: latest start of break
  * max_driving_time `integer`: max driving time without break
  * possible_split `array`: array of splits
    * items `integer`

### CostMatrix
* CostMatrix `object`
  * profile `string`: vehicle profile or empty if catch all fallback
  * type `string` (values: default, google): type of cost matrix, currently default or google are supported
  * url `string`: URL of matrix service

### JobId
* JobId `object`
  * job_id `string`: unique id for your job/request with which you can fetch your solution

### Objective
* Objective `object`
  * type `string` (values: min, min-max): type of objective function, i.e. min or min-max 
  * value `string` (values: completion_time, transport_time, vehicles): objective function value

### Relation
* Relation `object`
  * ids `array`: An array of ids that should be related
    * items `string`: id of services or special ids of shipments
  * type `string`: identifier of relation
  * vehicle_id `string`: vehicle id

### Request
* Request `object`
  * algorithm [Algorithm](#algorithm)
  * cost_matrices `array`: An array of cost matrices
    * items [CostMatrix](#costmatrix)
  * objectives `array`: An array of objectives
    * items [Objective](#objective)
  * relations `array`: An array of relations
    * items [Relation](#relation)
  * services `array`: An array of services
    * items [Service](#service)
  * shipments `array`: An array of shipments
    * items [Shipment](#shipment)
  * vehicle_types `array`: An array of vehicle types
    * items [VehicleType](#vehicletype)
  * vehicles `array`: An array of vehicles that can be employed
    * items [Vehicle](#vehicle)

### Response
* Response `object`
  * copyrights `array`
    * items `string`: attribution
  * job_id `string`: unique identify of job - which you get when posting your request to the large problem solver
  * processing_time `integer`: processing time in ms. if job is still waiting in queue, processing_time is 0
  * solution [Solution](#solution)
  * status `string` (values: waiting_in_queue, processing, finished): indicates the current status of the job
  * waiting_in_queue `integer`: waiting time in ms

### Route
* Route `object`
  * activities `array`: array of activities
    * items [Activity](#activity)
  * completion_time `integer`: completion time of route in ms
  * distance `integer`: distance of route in meter
  * transport_time `integer`: transport time of route in ms
  * vehicle_id `string`: id of vehicle that operates route
  * waiting_time `integer`: waiting time of route in ms

### Service
* Service `object`
  * address [Address](#address)
  * allowed_vehicles `array`: array of allowed vehicle ids
    * items `string`
  * duration `integer`: duration of service, i.e. time in ms the corresponding activity takes
  * id `string`: Unique identifier of service
  * name `string`: name of service
  * priority `integer`: priority of service, i.e. 1 = high, 2 = normal, 3 = low. default is 2.
  * required_skills `array`: array of required skills
    * items `string`
  * size `array`: array of capacity dimensions
    * items `integer`
  * time_windows `array`: array of time windows. currently, only a single time window is allowed
    * items [TimeWindow](#timewindow)
  * type `string` (values: service, pickup, delivery): type of service

### Shipment
* Shipment `object`
  * allowed_vehicles `array`: array of allowed vehicle ids
    * items `string`
  * delivery [Stop](#stop)
  * id `string`: Unique identifier of service
  * name `string`: name of shipment
  * pickup [Stop](#stop)
  * priority `integer`: priority of service, i.e. 1 = high, 2 = normal, 3 = low. default is 2.
  * required_skills `array`: array of required skills
    * items `string`
  * size `array`: array of capacity dimensions
    * items `integer`

### Solution
* Solution `object`
  * costs `integer`: overall costs of solution
  * distance `integer`: overall travel distance in meters
  * max_operation_time `integer`: operation time of the longest route in ms
  * no_unassigned `integer`: number of jobs that could not be assigned to final solution
  * no_vehicles `integer`: number of employed vehicles
  * routes `array`: An array of routes
    * items [Route](#route)
  * time `integer`: overall transport time in ms
  * transport_time `integer`: overall transport time in ms
  * unassigned `object`
    * services `array`: An array of ids of unassigned services
      * items `string`: id of unassigned service
    * shipments `array`: An array of ids of unassigned shipments
      * items `string`: id of unassigned shipments
  * waiting_time `integer`: total waiting time in ms

### Stop
* Stop `object`
  * address [Address](#address)
  * duration `integer`: duration of stop, i.e. time in ms the corresponding activity takes
  * time_windows `array`: array of time windows. currently, only a single time window is allowed
    * items [TimeWindow](#timewindow)

### TimeWindow
* TimeWindow `object`
  * earliest `integer`: earliest start time of corresponding activity
  * latest `integer`: latest start time of corresponding activity

### Vehicle
* Vehicle `object`
  * break [Break](#break)
  * earliest_start `integer`: earliest start of vehicle at its start location
  * end_address [Address](#address)
  * latest_end `integer`: latest end of vehicle at its end location
  * return_to_depot `boolean`: Indicates whether vehicle should return to start address or not. If not, it can end at any service activity.
  * skills `array`: array of skills
    * items `string`
  * start_address [Address](#address)
  * type_id `string`: Unique identifier referring to the available vehicle types
  * vehicle_id `string`: Unique identifier of vehicle

### VehicleType
* VehicleType `object`
  * capacity `array`: array of capacity dimensions
    * items `integer`
  * profile `string` (values: car, bike, foot, mtb, motorcycle, racingbike, truck, small_truck, bus): Profile of vehicle type
  * service_time_factor `number`: service time factor of vehicle type
  * speed_factor `number`: speed_factor of vehicle type
  * type_id `string`: Unique identifier for the vehicle type


