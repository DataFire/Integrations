# @datafire/wheretocredit

Client library for Where to Credit API

## Installation and Usage
```bash
npm install --save @datafire/wheretocredit
```
```js
let wheretocredit = require('@datafire/wheretocredit').create({
  "api-key": ""
});

.then(data => {
  console.log(data);
});
```

## Description

The Where to Credit API provides mileage earning calculations for frequent flyer programs around the world.

## Actions

### api.1.0.calculate.post
Calculates the number of miles earned for every frequent flyer program.


```js
wheretocredit.api.1.0.calculate.post({}, context)
```

#### Input
* input `object`
  * body `array`: Collection of <code>Itinerary</code> to allow multiple frequent flyer mile or point calculations at once.
    * items [Itinerary](#itinerary)

#### Output
* output `array`
  * items [CalculateResult](#calculateresult)

### api.1.0.programs.get
Lists all supported frequent flyer programs.


```js
wheretocredit.api.1.0.programs.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Program](#program)



## Definitions

### CalculateItineraryProgramResult
* CalculateItineraryProgramResult `object`
  * airlines `array`: Two-letter IATA carrier codes that are associated with the frequent flyer program.
    * items `string`
  * id `string`: Unique identifier for the frequent flyer program. See <code>Programs</code> API.
  * name `string`: Frequent flyer program name. See <code>Programs</code> API.
  * revenueBased `boolean`: Indicates that the itinerary includes revenue-based miles earnings.
  * unpublished `boolean`: Indicates that the itinerary may be missing miles due to unpublished earning rates from the program.
  * value `integer`: Total redeemable miles or points earned for the frequent flyer program.

### CalculateItineraryResult
* CalculateItineraryResult `object`
  * id `string`: Unique identifier provided for this itinerary.
  * totals `array`: Total miles earned for each frequent flyer program.
    * items [CalculateItineraryProgramResult](#calculateitineraryprogramresult)

### CalculateResult
* CalculateResult `object`
  * errorMessage `string`: Error message if the API call was not successful.
  * success `boolean`: Indicates whether the API call was successful.
  * value [CalculateItineraryResult](#calculateitineraryresult)

### Itinerary
* Itinerary `object`
  * baseFareUSD `number`: Amount in USD that will be used to calculate revenue program mileage earning.  This amount should generally include carrier imposed surcharges but exclude other taxes. Default is 0.
  * id `string`: Unique identifier for this itinerary that will be passed back to help correlate a result.
  * segments **required** `array`: Every flight transfer or stopover should be considered a separate segment.
    * items [Segment](#segment)
  * ticketingCarrier `string`: Two-letter IATA carrier code for the ticketing or plating airline.  This is used for revenue programs (i.e. UA, DL, B6).  Leaving this value blank will exclude revenue programs.

### Program
* Program `object`
  * airlines `array`: Two-letter IATA carrier codes that are associated with the frequent flyer program.
    * items `string`
  * denomination `string`: Name of the unit of a mile or point.
  * fullName `string`: Full name of the frequent flyer program including the airline, if applicable.
  * id `string`: Unique identifier for the frequent flyer program.
  * programName `string`: Name of the frequent flyer program.
  * tierNames `array`: Name of each tier level for the frequent flyer program.
    * items `string`

### Segment
* Segment `object`
  * bookingClass **required** `string`: Single-letter booking class used to determine the earning rate for the flight segment.
  * carrier **required** `string`: Two-letter IATA carrier code for the marketing airline.  This is used to determine which earnings chart will be applied for this segment.
  * departure `string`: The date on the flight will depart from the origin to go to the destination.  This is used to determine which earnings chart will be in effect at time of departure.
  * destination **required** `string`: Three-letter IATA airport code to which the flight is going.
  * distance `number`: The number of miles for this flight segment.  Otherwise, distance is calculated using the great-circle distance between the origin and destination and may not match other data sources exactly.
  * flightNumber `integer`: The airline identifier for the flight segment, most commonly (but not always) a number and is used for earning charts that are restricted to specific flight numbers.
  * operatingCarrier `string`: Two-letter IATA carrier code for the operating airline.  This value is only used when earning is based on marketing carrier but restricted to a specific operating carrier.  Leaving this value blank will assume the flight is operated by the marketing carrier.
  * origin **required** `string`: Three-letter IATA airport code from which the flight will depart.


