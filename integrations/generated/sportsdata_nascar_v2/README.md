# @datafire/sportsdata_nascar_v2

Client library for NASCAR v2

## Installation and Usage
```bash
npm install --save @datafire/sportsdata_nascar_v2
```
```js
let sportsdata_nascar_v2 = require('@datafire/sportsdata_nascar_v2').create({
  apiKeyHeader: "",
  apiKeyQuery: ""
});

.then(data => {
  console.log(data);
});
```

## Description



## Actions

### DriverRaceProjectionsEntryList
Driver Race Projections (Entry List)


```js
sportsdata_nascar_v2.DriverRaceProjectionsEntryList({
  "format": "",
  "raceid": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: xml, json): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * raceid **required** `string`: Unique FantasyData Race ID.

#### Output
* output `array`
  * items [DriverRaceProjection](#driverraceprojection)

### DriverDetails
Driver Details


```js
sportsdata_nascar_v2.DriverDetails({
  "format": "",
  "driverid": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: xml, json): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * driverid **required** `string`: Unique FantasyData Driver ID.

#### Output
* output [Driver](#driver)

### Drivers
Drivers


```js
sportsdata_nascar_v2.Drivers({
  "format": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: xml, json): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.

#### Output
* output `array`
  * items [Driver](#driver)

### RaceResults
Race Results


```js
sportsdata_nascar_v2.RaceResults({
  "format": "",
  "raceid": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: xml, json): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * raceid **required** `string`: Unique FantasyData Race ID.

#### Output
* output [RaceResult](#raceresult)

### RacesSchedule
Races / Schedule


```js
sportsdata_nascar_v2.RacesSchedule({
  "format": "",
  "season": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: xml, json): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * season **required** `string`: Year of the season.

#### Output
* output `array`
  * items [Race](#race)

### Series
Series


```js
sportsdata_nascar_v2.Series({
  "format": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: xml, json): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.

#### Output
* output `array`
  * items [Series](#series)



## Definitions

### Driver
* Driver `object`
  * BirthDate `string`
  * BirthPlace `string`
  * Chassis `string`
  * Created `string`
  * CrewChief `string`
  * DriverID `integer`
  * Engine `string`
  * FirstName `string`
  * Gender `string`
  * Height `integer`
  * LastName `string`
  * Manufacturer `string`
  * Number `integer`
  * NumberDisplay `string`
  * PhotoUrl `string`
  * Sponsors `string`
  * Team `string`
  * Updated `string`
  * Weight `integer`

### DriverRace
* DriverRace `object`
  * Bonus `number`
  * Created `string`
  * DateTime `string`
  * Day `string`
  * DraftKingsSalary `integer`
  * DriverID `integer`
  * FantasyPoints `number`
  * FantasyPointsDraftKings `number`
  * FastestLaps `number`
  * FinalPosition `number`
  * Laps `number`
  * LapsLed `number`
  * Manufacturer `string`
  * Name `string`
  * Number `integer`
  * NumberDisplay `string`
  * Penalty `number`
  * Points `number`
  * PoleFinalPosition `number`
  * Poles `number`
  * PositionDifferential `number`
  * QualifyingSpeed `number`
  * RaceID `integer`
  * Season `integer`
  * StartPosition `number`
  * StatID `integer`
  * Updated `string`
  * Wins `number`

### DriverRaceProjection
* DriverRaceProjection `object`
  * Bonus `number`
  * Created `string`
  * DateTime `string`
  * Day `string`
  * DraftKingsSalary `integer`
  * DriverID `integer`
  * FantasyPoints `number`
  * FantasyPointsDraftKings `number`
  * FastestLaps `number`
  * FinalPosition `number`
  * Laps `number`
  * LapsLed `number`
  * Manufacturer `string`
  * Name `string`
  * Number `integer`
  * NumberDisplay `string`
  * Penalty `number`
  * Points `number`
  * PoleFinalPosition `number`
  * Poles `number`
  * PositionDifferential `number`
  * QualifyingSpeed `number`
  * RaceID `integer`
  * Season `integer`
  * StartPosition `number`
  * StatID `integer`
  * Updated `string`
  * Wins `number`

### Race
* Race `object`
  * Broadcast `string`
  * Canceled `boolean`
  * Created `string`
  * DateTime `string`
  * Day `string`
  * IsInProgress `boolean`
  * IsOver `boolean`
  * Name `string`
  * PoleWinnerID `integer`
  * RaceID `integer`
  * RescheduledDateTime `string`
  * RescheduledDay `string`
  * Season `integer`
  * SeriesID `integer`
  * SeriesName `string`
  * Track `string`
  * Updated `string`
  * WinnerID `integer`

### RaceResult
* RaceResult `object`
  * DriverRaces `array`
    * items [DriverRace](#driverrace)
  * Race [Race](#race)

### Series
* Series `object`
  * Name `string`
  * SeriesID `integer`


