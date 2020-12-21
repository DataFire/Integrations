# @datafire/carbondoomsday

Client library for CarbonDoomsDay

## Installation and Usage
```bash
npm install --save @datafire/carbondoomsday
```
```js
let carbondoomsday = require('@datafire/carbondoomsday').create({
  username: "",
  password: ""
});

.then(data => {
  console.log(data);
});
```

## Description

A real-time RESTish web API for worldwide carbon dioxide levels.

## Actions

### co2_list
CO2 measurements from the Mauna Loa observatory.

This data is made available through the good work of the people at the
Mauna Loa observatory. Their release notes say:

    These data are made freely available to the public and the scientific
    community in the belief that their wide dissemination will lead to greater
    understanding and new scientific insights.

We currently scrape the following sources:

  * [co2_mlo_weekly.csv]
  * [co2_mlo_surface-insitu_1_ccgg_DailyData.txt]
  * [weekly_mlo.csv]

We have daily CO2 measurements as far back as 1958.

Learn about using pagination via [the 3rd party documentation].

[co2_mlo_weekly.csv]: https://www.esrl.noaa.gov/gmd/webdata/ccgg/trends/co2_mlo_weekly.csv
[co2_mlo_surface-insitu_1_ccgg_DailyData.txt]: ftp://aftp.cmdl.noaa.gov/data/trace_gases/co2/in-situ/surface/mlo/co2_mlo_surface-insitu_1_ccgg_DailyData.txt
[weekly_mlo.csv]: http://scrippsco2.ucsd.edu/sites/default/files/data/in_situ_co2/weekly_mlo.csv
[the 3rd party documentation]: http://www.django-rest-framework.org/api-guide/pagination/#pagenumberpagination


```js
carbondoomsday.co2_list({}, context)
```

#### Input
* input `object`
  * ppm `number`
  * date `string`
  * date__range `string`: Multiple values may be separated by commas.
  * ordering `string`: Which field to use when ordering the results.
  * page `integer`: A page number within the paginated result set.
  * limit `integer`: Number of results to return per page.

#### Output
* output `object`
  * count **required** `integer`
  * next `string`
  * previous `string`
  * results **required** `array`
    * items [CO2](#co2)

### co2_read
CO2 measurements from the Mauna Loa observatory.

This data is made available through the good work of the people at the
Mauna Loa observatory. Their release notes say:

    These data are made freely available to the public and the scientific
    community in the belief that their wide dissemination will lead to greater
    understanding and new scientific insights.

We currently scrape the following sources:

  * [co2_mlo_weekly.csv]
  * [co2_mlo_surface-insitu_1_ccgg_DailyData.txt]
  * [weekly_mlo.csv]

We have daily CO2 measurements as far back as 1958.

Learn about using pagination via [the 3rd party documentation].

[co2_mlo_weekly.csv]: https://www.esrl.noaa.gov/gmd/webdata/ccgg/trends/co2_mlo_weekly.csv
[co2_mlo_surface-insitu_1_ccgg_DailyData.txt]: ftp://aftp.cmdl.noaa.gov/data/trace_gases/co2/in-situ/surface/mlo/co2_mlo_surface-insitu_1_ccgg_DailyData.txt
[weekly_mlo.csv]: http://scrippsco2.ucsd.edu/sites/default/files/data/in_situ_co2/weekly_mlo.csv
[the 3rd party documentation]: http://www.django-rest-framework.org/api-guide/pagination/#pagenumberpagination


```js
carbondoomsday.co2_read({
  "date": ""
}, context)
```

#### Input
* input `object`
  * date **required** `string`

#### Output
* output [CO2](#co2)



## Definitions

### CO2
* CO2 `object`
  * date **required** `string`
  * ppm **required** `string`


