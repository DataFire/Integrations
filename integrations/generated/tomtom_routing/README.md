# @datafire/tomtom_routing

Client library for Routing

## Installation and Usage
```bash
npm install --save @datafire/tomtom_routing
```
```js
let tomtom_routing = require('@datafire/tomtom_routing').create({
  api_key: ""
});

.then(data => {
  console.log(data);
});
```

## Description

Routing consists of the following service:
<b>Calculate Route</b>
Calculates a route between an origin and a destination, passing through waypoints (if specified). Additional routing parameters like traffic, avoidance conditions, departure/arrival time etc. can be taken into account.
<b>Calculate Reachable Range</b>
Calculates a set of locations that can be reached from the origin point, subject to the available fuel or energy budget that is specified in the request.

## Actions

### routing.versionNumber.calculateReachableRange.origin.contentType.get
Calculates a set of locations that can be reached from the origin point.


```js
tomtom_routing.routing.versionNumber.calculateReachableRange.origin.contentType.get({
  "versionNumber": 0,
  "origin": "",
  "contentType": ""
}, context)
```

#### Input
* input `object`
  * versionNumber **required** `integer` (values: 1): Service version number. The current value is 1.
  * origin **required** `string`: Point from which the range calculation should start.
  * contentType **required** `string` (values: xml, json, jsonp): The content type of the response structure. If the content type is jsonp, a callback method can be specified in the query parameters.
  * fuelBudgetInLiters `number`: Fuel budget in liters. Determines the maximum vehicle range using the specified Combustion Consumption Model.
  * energyBudgetInkWh `number`: Electric energy budget in kilowatt hours (kWh). Determines the maximum vehicle range using the specified Electric Consumption Model.
  * timeBudgetInSec `number`: Time budget in seconds. Determines the maximum vehicle range using the specified driving time. The consumption parameters in the request will only affect eco-routes, and thereby indirectly the driving time.
  * callback `string`: Specifies the jsonp callback method.
  * report `string` (values: effectiveSettings): Specifies which data should be reported for diagnosis purposes.
  * departAt `string`: The date and time of departure from the origin point. Departure times apart from <i>now</i> must be specified as a dateTime.
  * arriveAt `string`: The date and time of arrival at the destination point. It must be specified as a dateTime.
  * routeType `string` (values: fastest, shortest, eco, thrilling): The type of route requested.
  * traffic `boolean`: Determines whether current traffic is used in route calculations. Note that information on historic road speeds is always used.
  * avoid `string`: Specifies whether the routing engine should try to avoid specific types of road segment when calculating the route. Can be specified multiple times.
  * travelMode `string` (values: car, truck, taxi, bus, van, motorcycle, bicycle, pedestrian): The mode of travel for the requested route.
  * hilliness `string` (values: low, normal, high): Degree of hilliness for calculating a thrilling route.
  * windingness `string` (values: low, normal, high): Amount that a thrilling route should wind.
  * vehicleMaxSpeed `integer`: Maximum speed of the vehicle in km/hour.
  * vehicleWeight `integer`: Weight of the vehicle in kilograms.
  * vehicleAxleWeight `integer`: Weight per axle of the vehicle in kg.
  * vehicleLength `number`: Length of the vehicle in meters.
  * vehicleWidth `number`: Width of the vehicle in meters.
  * vehicleHeight `number`: Height of the vehicle in meters.
  * vehicleCommercial `boolean`: Indicates that the vehicle is used for commercial purposes. This means it may not be allowed on certain roads.
  * vehicleLoadType `string`: Indicates what kinds of hazardous materials the vehicle is carrying (if any). This means it may not be allowed on certain roads.
  * constantSpeedConsumptionInLitersPerHundredkm `string`: Specifies the speed-dependent component of consumption. Provided as an unordered list of speed/consumption-rate pairs.
  * currentFuelInLiters `number`: Specifies the current supply of fuel in liters.
  * auxiliaryPowerInLitersPerHour `number`: Specifies the amount of fuel consumed for sustaining auxiliary systems of the vehicle, in liters per hour.
  * fuelEnergyDensityInMJoulesPerLiter `number`: Specifies the amount of chemical energy stored in one liter of fuel in megajoules (MJ).
  * accelerationEfficiency `number`: Specifies the efficiency of converting chemical energy stored in fuel to kinetic energy when the vehicle accelerates (i.e. KineticEnergyGained/ChemicalEnergyConsumed).
  * decelerationEfficiency `number`: Specifies the efficiency of converting kinetic energy to saved (not consumed) fuel when the vehicle decelerates (i.e. ChemicalEnergySaved/KineticEnergyLost).
  * uphillEfficiency `number`: Specifies the efficiency of converting chemical energy stored in fuel to potential energy when the vehicle gains elevation (i.e. PotentialEnergyGained/ChemicalEnergyConsumed).
  * downhillEfficiency `number`: Specifies the efficiency of converting potential energy to saved (not consumed) fuel when the vehicle loses elevation (i.e. ChemicalEnergySaved/PotentialEnergyLost).
  * vehicleEngineType `string` (values: combustion, electric): Engine type of the vehicle.
  * constantSpeedConsumptionInkWhPerHundredkm `string`: Specifies the speed-dependent component of consumption. Provided as an unordered list of speed/consumption-rate pairs.

#### Output
*Output schema unknown*

### routing.versionNumber.calculateReachableRange.origin.contentType.post
Calculates a set of locations that can be reached from the origin point. POST method handles additionally parameters: <em>supportingPoints</em>, <em>allowVignette</em>, <em>avoidVignette</em>, <em>avoidAreas</em>.


```js
tomtom_routing.routing.versionNumber.calculateReachableRange.origin.contentType.post({
  "versionNumber": 0,
  "origin": "",
  "contentType": ""
}, context)
```

#### Input
* input `object`
  * versionNumber **required** `integer` (values: 1): Service version number. The current value is 1.
  * origin **required** `string`: Point from which the range calculation should start.
  * contentType **required** `string` (values: xml, json, jsonp): The content type of the response structure. If the content type is jsonp, a callback method can be specified in the query parameters.
  * fuelBudgetInLiters `number`: Fuel budget in liters. Determines the maximum vehicle range using the specified Combustion Consumption Model.
  * energyBudgetInkWh `number`: Electric energy budget in kilowatt hours (kWh). Determines the maximum vehicle range using the specified Electric Consumption Model.
  * timeBudgetInSec `number`: Time budget in seconds. Determines the maximum vehicle range using the specified driving time. The consumption parameters in the request will only affect eco-routes, and thereby indirectly the driving time.
  * callback `string`: Specifies the jsonp callback method.
  * report `string` (values: effectiveSettings): Specifies which data should be reported for diagnosis purposes.
  * departAt `string`: The date and time of departure from the origin point. Departure times apart from <i>now</i> must be specified as a dateTime.
  * arriveAt `string`: The date and time of arrival at the destination point. It must be specified as a dateTime.
  * routeType `string` (values: fastest, shortest, eco, thrilling): The type of route requested.
  * traffic `boolean`: Determines whether current traffic is used in route calculations. Note that information on historic road speeds is always used.
  * avoid `string`: Specifies whether the routing engine should try to avoid specific types of road segment when calculating the route. Can be specified multiple times.
  * travelMode `string` (values: car, truck, taxi, bus, van, motorcycle, bicycle, pedestrian): The mode of travel for the requested route.
  * hilliness `string` (values: low, normal, high): Degree of hilliness for calculating a thrilling route.
  * windingness `string` (values: low, normal, high): Amount that a thrilling route should wind.
  * vehicleMaxSpeed `integer`: Maximum speed of the vehicle in km/hour.
  * vehicleWeight `integer`: Weight of the vehicle in kilograms.
  * vehicleAxleWeight `integer`: Weight per axle of the vehicle in kg.
  * vehicleLength `number`: Length of the vehicle in meters.
  * vehicleWidth `number`: Width of the vehicle in meters.
  * vehicleHeight `number`: Height of the vehicle in meters.
  * vehicleCommercial `boolean`: Indicates that the vehicle is used for commercial purposes. This means it may not be allowed on certain roads.
  * vehicleLoadType `string`: Indicates what kinds of hazardous materials the vehicle is carrying (if any). This means it may not be allowed on certain roads.
  * constantSpeedConsumptionInLitersPerHundredkm `string`: Specifies the speed-dependent component of consumption. Provided as an unordered list of speed/consumption-rate pairs.
  * currentFuelInLiters `number`: Specifies the current supply of fuel in liters.
  * auxiliaryPowerInLitersPerHour `number`: Specifies the amount of fuel consumed for sustaining auxiliary systems of the vehicle, in liters per hour.
  * fuelEnergyDensityInMJoulesPerLiter `number`: Specifies the amount of chemical energy stored in one liter of fuel in megajoules (MJ).
  * accelerationEfficiency `number`: Specifies the efficiency of converting chemical energy stored in fuel to kinetic energy when the vehicle accelerates (i.e. KineticEnergyGained/ChemicalEnergyConsumed).
  * decelerationEfficiency `number`: Specifies the efficiency of converting kinetic energy to saved (not consumed) fuel when the vehicle decelerates (i.e. ChemicalEnergySaved/KineticEnergyLost).
  * uphillEfficiency `number`: Specifies the efficiency of converting chemical energy stored in fuel to potential energy when the vehicle gains elevation (i.e. PotentialEnergyGained/ChemicalEnergyConsumed).
  * downhillEfficiency `number`: Specifies the efficiency of converting potential energy to saved (not consumed) fuel when the vehicle loses elevation (i.e. ChemicalEnergySaved/PotentialEnergyLost).
  * vehicleEngineType `string` (values: combustion, electric): Engine type of the vehicle.
  * constantSpeedConsumptionInkWhPerHundredkm `string`: Specifies the speed-dependent component of consumption. Provided as an unordered list of speed/consumption-rate pairs.
  * body [calculateReachableRangePostDataParameters](#calculatereachablerangepostdataparameters)

#### Output
*Output schema unknown*

### routing.versionNumber.calculateRoute.locations.contentType.get
Calculates a route between an origin and a destination.


```js
tomtom_routing.routing.versionNumber.calculateRoute.locations.contentType.get({
  "versionNumber": 0,
  "locations": "",
  "contentType": ""
}, context)
```

#### Input
* input `object`
  * versionNumber **required** `integer` (values: 1): Service version number. The current value is 1.
  * locations **required** `string`: Locations through which the calculated route must pass.
  * contentType **required** `string` (values: xml, json, jsonp): The content type of the response structure. If the content type is jsonp, a callback method can be specified in the query parameters.
  * maxAlternatives `integer`: Number of alternative routes to be calculated.
  * alternativeType `string` (values: anyRoute, betterRoute): Determines whether the alternative routes to be calculated should be better with respect to the planning criteria provided than the reference route.
  * minDeviationDistance `integer`: All alternative routes will follow the reference route for the specified minimum number of meters starting from the origin point.
  * minDeviationTime `integer`: All alternative routes will follow the reference route for the specified minimum number of seconds starting from the origin point.
  * instructionsType `string` (values: coded, text, tagged): If specified, guidance instructions will be returned (if available).
  * language `string`: The language parameter determines the language of the guidance messages.
  * computeBestOrder `boolean`: Re-order the route waypoints to reduce the route length.
  * routeRepresentation `string` (values: polyline, none): Specifies the representation of the set of routes provided as a response.
  * computeTravelTimeFor `string` (values: none, all): Specifies whether to return additional travel times using different types of traffic information (none, historic, live) as well as the default best-estimate travel time.
  * vehicleHeading `integer`: The directional heading of the vehicle in degrees. Entered in degrees, measured clockwise from north (so north is 0, east is 90, etc.).
  * sectionType `string`: Specifies which section types are explicitly reported in the route response. Can be specified multiple times.
  * callback `string`: Specifies the jsonp callback method.
  * report `string` (values: effectiveSettings): Specifies which data should be reported for diagnosis purposes.
  * departAt `string`: The date and time of departure from the origin point. Departure times apart from <i>now</i> must be specified as a dateTime.
  * arriveAt `string`: The date and time of arrival at the destination point. It must be specified as a dateTime.
  * routeType `string` (values: fastest, shortest, eco, thrilling): The type of route requested.
  * traffic `boolean`: Determines whether current traffic is used in route calculations. Note that information on historic road speeds is always used.
  * avoid `string`: Specifies whether the routing engine should try to avoid specific types of road segment when calculating the route. Can be specified multiple times.
  * travelMode `string` (values: car, truck, taxi, bus, van, motorcycle, bicycle, pedestrian): The mode of travel for the requested route.
  * hilliness `string` (values: low, normal, high): Degree of hilliness for calculating a thrilling route.
  * windingness `string` (values: low, normal, high): Amount that a thrilling route should wind.
  * vehicleMaxSpeed `integer`: Maximum speed of the vehicle in km/hour.
  * vehicleWeight `integer`: Weight of the vehicle in kilograms.
  * vehicleAxleWeight `integer`: Weight per axle of the vehicle in kg.
  * vehicleLength `number`: Length of the vehicle in meters.
  * vehicleWidth `number`: Width of the vehicle in meters.
  * vehicleHeight `number`: Height of the vehicle in meters.
  * vehicleCommercial `boolean`: Indicates that the vehicle is used for commercial purposes. This means it may not be allowed on certain roads.
  * vehicleLoadType `string`: Indicates what kinds of hazardous materials the vehicle is carrying (if any). This means it may not be allowed on certain roads.
  * vehicleEngineType `string` (values: combustion, electric): Engine type of the vehicle.
  * constantSpeedConsumptionInLitersPerHundredkm `string`: Specifies the speed-dependent component of consumption. Provided as an unordered list of speed/consumption-rate pairs.
  * currentFuelInLiters `number`: Specifies the current supply of fuel in liters.
  * auxiliaryPowerInLitersPerHour `number`: Specifies the amount of fuel consumed for sustaining auxiliary systems of the vehicle, in liters per hour.
  * fuelEnergyDensityInMJoulesPerLiter `number`: Specifies the amount of chemical energy stored in one liter of fuel in megajoules (MJ).
  * accelerationEfficiency `number`: Specifies the efficiency of converting chemical energy stored in fuel to kinetic energy when the vehicle accelerates (i.e. KineticEnergyGained/ChemicalEnergyConsumed).
  * decelerationEfficiency `number`: Specifies the efficiency of converting kinetic energy to saved (not consumed) fuel when the vehicle decelerates (i.e. ChemicalEnergySaved/KineticEnergyLost).
  * uphillEfficiency `number`: Specifies the efficiency of converting chemical energy stored in fuel to potential energy when the vehicle gains elevation (i.e. PotentialEnergyGained/ChemicalEnergyConsumed).
  * downhillEfficiency `number`: Specifies the efficiency of converting potential energy to saved (not consumed) fuel when the vehicle loses elevation (i.e. ChemicalEnergySaved/PotentialEnergyLost).
  * constantSpeedConsumptionInkWhPerHundredkm `string`: Specifies the speed-dependent component of consumption. Provided as an unordered list of speed/consumption-rate pairs.

#### Output
*Output schema unknown*

### routing.versionNumber.calculateRoute.locations.contentType.post
Calculates a route between an origin and a destination. POST method handles additionally parameters: <em>supportingPoints</em>, <em>allowVignette</em>, <em>avoidVignette</em>, <em>avoidAreas</em>.


```js
tomtom_routing.routing.versionNumber.calculateRoute.locations.contentType.post({
  "versionNumber": 0,
  "locations": "",
  "contentType": ""
}, context)
```

#### Input
* input `object`
  * versionNumber **required** `integer` (values: 1): Service version number. The current value is 1.
  * locations **required** `string`: Locations through which the calculated route must pass.
  * contentType **required** `string` (values: xml, json, jsonp): The content type of the response structure. If the content type is jsonp, a callback method can be specified in the query parameters.
  * maxAlternatives `integer`: Number of alternative routes to be calculated.
  * alternativeType `string` (values: anyRoute, betterRoute): Determines whether the alternative routes to be calculated should be better with respect to the planning criteria provided than the reference route.
  * minDeviationDistance `integer`: All alternative routes will follow the reference route for the specified minimum number of meters starting from the origin point.
  * minDeviationTime `integer`: All alternative routes will follow the reference route for the specified minimum number of seconds starting from the origin point.
  * instructionsType `string` (values: coded, text, tagged): If specified, guidance instructions will be returned (if available).
  * language `string`: The language parameter determines the language of the guidance messages.
  * computeBestOrder `boolean`: Re-order the route waypoints to reduce the route length.
  * routeRepresentation `string` (values: polyline, none): Specifies the representation of the set of routes provided as a response.
  * computeTravelTimeFor `string` (values: none, all): Specifies whether to return additional travel times using different types of traffic information (none, historic, live) as well as the default best-estimate travel time.
  * vehicleHeading `integer`: The directional heading of the vehicle in degrees. Entered in degrees, measured clockwise from north (so north is 0, east is 90, etc.).
  * sectionType `string`: Specifies which section types are explicitly reported in the route response. Can be specified multiple times.
  * callback `string`: Specifies the jsonp callback method.
  * report `string` (values: effectiveSettings): Specifies which data should be reported for diagnosis purposes.
  * departAt `string`: The date and time of departure from the origin point. Departure times apart from <i>now</i> must be specified as a dateTime.
  * arriveAt `string`: The date and time of arrival at the destination point. It must be specified as a dateTime.
  * routeType `string` (values: fastest, shortest, eco, thrilling): The type of route requested.
  * traffic `boolean`: Determines whether current traffic is used in route calculations. Note that information on historic road speeds is always used.
  * avoid `string`: Specifies whether the routing engine should try to avoid specific types of road segment when calculating the route. Can be specified multiple times.
  * travelMode `string` (values: car, truck, taxi, bus, van, motorcycle, bicycle, pedestrian): The mode of travel for the requested route.
  * hilliness `string` (values: low, normal, high): Degree of hilliness for calculating a thrilling route.
  * windingness `string` (values: low, normal, high): Amount that a thrilling route should wind.
  * vehicleMaxSpeed `integer`: Maximum speed of the vehicle in km/hour.
  * vehicleWeight `integer`: Weight of the vehicle in kilograms.
  * vehicleAxleWeight `integer`: Weight per axle of the vehicle in kg.
  * vehicleLength `number`: Length of the vehicle in meters.
  * vehicleWidth `number`: Width of the vehicle in meters.
  * vehicleHeight `number`: Height of the vehicle in meters.
  * vehicleCommercial `boolean`: Indicates that the vehicle is used for commercial purposes. This means it may not be allowed on certain roads.
  * vehicleLoadType `string`: Indicates what kinds of hazardous materials the vehicle is carrying (if any). This means it may not be allowed on certain roads.
  * vehicleEngineType `string` (values: combustion, electric): Engine type of the vehicle.
  * constantSpeedConsumptionInLitersPerHundredkm `string`: Specifies the speed-dependent component of consumption. Provided as an unordered list of speed/consumption-rate pairs.
  * currentFuelInLiters `number`: Specifies the current supply of fuel in liters.
  * auxiliaryPowerInLitersPerHour `number`: Specifies the amount of fuel consumed for sustaining auxiliary systems of the vehicle, in liters per hour.
  * fuelEnergyDensityInMJoulesPerLiter `number`: Specifies the amount of chemical energy stored in one liter of fuel in megajoules (MJ).
  * accelerationEfficiency `number`: Specifies the efficiency of converting chemical energy stored in fuel to kinetic energy when the vehicle accelerates (i.e. KineticEnergyGained/ChemicalEnergyConsumed).
  * decelerationEfficiency `number`: Specifies the efficiency of converting kinetic energy to saved (not consumed) fuel when the vehicle decelerates (i.e. ChemicalEnergySaved/KineticEnergyLost).
  * uphillEfficiency `number`: Specifies the efficiency of converting chemical energy stored in fuel to potential energy when the vehicle gains elevation (i.e. PotentialEnergyGained/ChemicalEnergyConsumed).
  * downhillEfficiency `number`: Specifies the efficiency of converting potential energy to saved (not consumed) fuel when the vehicle loses elevation (i.e. ChemicalEnergySaved/PotentialEnergyLost).
  * constantSpeedConsumptionInkWhPerHundredkm `string`: Specifies the speed-dependent component of consumption. Provided as an unordered list of speed/consumption-rate pairs.
  * body [calculateRoutePostDataParameters](#calculateroutepostdataparameters)

#### Output
*Output schema unknown*



## Definitions

### calculateReachableRangePostDataParameters
* calculateReachableRangePostDataParameters `object`
  * allowVignette `array`
    * items `string`
  * avoidAreas `object`
    * rectangles `array`
      * items `object`
        * northEastCorner `object`
          * latitude `string`
          * longitude `string`
        * southWestCorner `object`
          * latitude `string`
          * longitude `string`
  * avoidVignette `array`
    * items `string`

### calculateRoutePostDataParameters
* calculateRoutePostDataParameters `object`
  * allowVignette `array`
    * items `string`
  * avoidAreas `object`
    * rectangles `array`
      * items `object`
        * northEastCorner `object`
          * latitude `string`
          * longitude `string`
        * southWestCorner `object`
          * latitude `string`
          * longitude `string`
  * avoidVignette `array`
    * items `string`
  * supportingPoints `array`
    * items `object`
      * latitude `string`
      * longitude `string`


