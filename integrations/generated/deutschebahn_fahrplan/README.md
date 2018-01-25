# @datafire/deutschebahn_fahrplan

Client library for Fahrplan-Free

## Installation and Usage
```bash
npm install --save @datafire/deutschebahn_fahrplan
```
```js
let deutschebahn_fahrplan = require('@datafire/deutschebahn_fahrplan').create();

deutschebahn_fahrplan.arrivalBoard.id.get({
  "id": "",
  "date": ""
}).then(data => {
  console.log(data);
});
```

## Description

A RESTful webservice to request a railway journey - FREE plan with restricted access (max. 10 requests per minute). Please ignore the message in the API Console about the access token.

Register to use an less restricted version, which requires an access token.

## Actions

### arrivalBoard.id.get
Get arrival board at a given location at a given daten and time.


```js
deutschebahn_fahrplan.arrivalBoard.id.get({
  "id": "",
  "date": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Id of location. Use attribute 'id' from the result of 'location'
  * date **required** `string`: Date and time in ISO-8601 format, yyyy-mm-ddThh:mm:ss, example: 2017-04-01 or 2017-04-01T10:30

#### Output
* output [BoardResponse](#boardresponse)

### departureBoard.id.get
Get departure board at a given location at a given daten and time.


```js
deutschebahn_fahrplan.departureBoard.id.get({
  "id": "",
  "date": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Id of a location. Use attribute 'id' from the result of 'location'
  * date **required** `string`: Date and time in ISO-8601 format, yyyy-mm-ddThh:mm:ss, example: 2017-04-01 or 2017-04-01T10:30

#### Output
* output [BoardResponse](#boardresponse)

### journeyDetails.id.get
Retrieve details of a journey. The id of journey should come from an arrival board or a departure board.


```js
deutschebahn_fahrplan.journeyDetails.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Id of a journey. Use attribute 'detailsId' from the result of  'arrivalBoard' or 'departureBoard'

#### Output
* output [JourneyResponse](#journeyresponse)

### location.name.get
Get information about locations matching the given name or name fragment


```js
deutschebahn_fahrplan.location.name.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Name or name fragment of a location

#### Output
* output [LocationResponse](#locationresponse)



## Definitions

### Board
* Board `object`
  * boardId **required** `string`
  * dateTime **required** `string`
  * detailsId **required** `string`
  * name **required** `string`: Name of train
  * origin **required** `string`
  * stopId **required** `string`
  * stopName **required** `string`
  * track **required** `string`
  * type **required** `string`

### BoardResponse
* BoardResponse `object`
  * boards **required** `array`
    * items [Board](#board)

### ErrorModel
* ErrorModel `object`
  * code **required** `integer`
  * internal_code `integer`
  * internal_message `string`
  * message **required** `string`

### JourneyResponse
* JourneyResponse `object`
  * train_locs **required** `array`
    * items [TrainLocation](#trainlocation)

### Location
* Location `object`
  * id **required** `string`: id of location (eva-number), example: 8000105
  * lat **required** `number`: latitude, example: 50.107149
  * lon **required** `number`: longitude, example: 8.663785
  * name **required** `string`: Name of location, example: Frankfurt(Main)Hbf

### LocationResponse
* LocationResponse `object`
  * locations **required** `array`
    * items [Location](#location)

### TrainLocation
* TrainLocation `object`
  * arrTime **required** `string`
  * depTime **required** `string`
  * lat **required** `number`
  * lon **required** `number`
  * operator **required** `string`
  * stopId **required** `string`
  * stopName **required** `string`
  * train **required** `string`
  * type **required** `string`


