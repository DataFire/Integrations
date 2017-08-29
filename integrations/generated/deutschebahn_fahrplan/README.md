# @datafire/deutschebahn_fahrplan

Client library for Fahrplan-Free

## Installation and Usage
```bash
npm install --save datafire @datafire/deutschebahn_fahrplan
```

```js
let datafire = require('datafire');
let deutschebahn_fahrplan = require('@datafire/deutschebahn_fahrplan').create();

deutschebahn_fahrplan.arrivalBoard.id.get({}).then(data => {
  console.log(data);
})
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

#### Parameters
* id (string) **required** - Id of location. Use attribute 'id' from the result of 'location'
* date (string) **required** - Date and time in ISO-8601 format, yyyy-mm-ddThh:mm:ss, example: 2017-04-01 or 2017-04-01T10:30

### departureBoard.id.get
Get departure board at a given location at a given daten and time.


```js
deutschebahn_fahrplan.departureBoard.id.get({
  "id": "",
  "date": ""
}, context)
```

#### Parameters
* id (string) **required** - Id of a location. Use attribute 'id' from the result of 'location'
* date (string) **required** - Date and time in ISO-8601 format, yyyy-mm-ddThh:mm:ss, example: 2017-04-01 or 2017-04-01T10:30

### journeyDetails.id.get
Retrieve details of a journey. The id of journey should come from an arrival board or a departure board.


```js
deutschebahn_fahrplan.journeyDetails.id.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - Id of a journey. Use attribute 'detailsId' from the result of  'arrivalBoard' or 'departureBoard'

### location.name.get
Get information about locations matching the given name or name fragment


```js
deutschebahn_fahrplan.location.name.get({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required** - Name or name fragment of a location

