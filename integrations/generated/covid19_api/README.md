# @datafire/covid19_api

Client library for COVID-19 data API

## Installation and Usage
```bash
npm install --save @datafire/covid19_api
```
```js
let covid19_api = require('@datafire/covid19_api').create();

.then(data => {
  console.log(data);
});
```

## Description



## Actions

### getLatestCountryDataByName
Get latest data for specific country. Country name and format are in parametars.


```js
covid19_api.getLatestCountryDataByName({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Name of the country
  * format `string` (values: json, xml): Format of the response

#### Output
* output `array`
  * items `object`
    * confirmed `integer`
    * country `string`
    * critical `integer`
    * deaths `integer`
    * lastChange `string`
    * lastUpdate `string`
    * latitude `number`
    * longitude `number`
    * recovered `integer`

### getLatestAllCountries
Get latest data from all countries.


```js
covid19_api.getLatestAllCountries({}, context)
```

#### Input
* input `object`
  * format `string` (values: json, xml): Format of the response

#### Output
* output `array`
  * items `object`
    * confirmed `integer`
    * country `string`
    * critical `integer`
    * deaths `integer`
    * lastChange `string`
    * lastUpdate `string`
    * latitude `number`
    * longitude `number`
    * recovered `integer`

### getLatestCountryDataByCode
Get latest data for specific country. Country code and format are in parametars. Country code is in ISO 3166-1 standard. It can be 2 chars (Alpha-2) or 3 chars (Alpha-3) type.


```js
covid19_api.getLatestCountryDataByCode({
  "code": ""
}, context)
```

#### Input
* input `object`
  * code **required** `string`: Country code
  * format `string` (values: json, xml): Format of the response

#### Output
* output `array`
  * items `object`
    * confirmed `integer`
    * country `string`
    * critical `integer`
    * deaths `integer`
    * lastChange `string`
    * lastUpdate `string`
    * latitude `number`
    * longitude `number`
    * recovered `integer`

### getListOfCountries
Get name name, alpha-2, alpha-3 code, latitude and longitude for every country.


```js
covid19_api.getListOfCountries({}, context)
```

#### Input
* input `object`
  * format `string` (values: json, xml): Format of the response

#### Output
* output `array`
  * items `object`
    * alpha-2-code `string`
    * alpha-3-code `string`
    * latitude `number`
    * longitude `number`
    * name `string`

### getDailyReportAllCountries
Get daily report for all countries. Date is mandatory parametar. Date format is by ISO 8601 standard, but you can provide different format with date-format parameter.


```js
covid19_api.getDailyReportAllCountries({
  "date": ""
}, context)
```

#### Input
* input `object`
  * date **required** `string`: Date of the report.
  * date-format `string` (values: YYYY-MM-DD, YYYY-DD-MM, DD-MM-YYYY, MM-DD-YYYY): Date format. If you dont want to use ISO 8601 standard (YYYY-MM-DD), you can provide different format.
  * format `string` (values: json, xml): Format of the response

#### Output
* output `array`
  * items `object`
    * country `string`
    * date `string`
    * latitude `number`
    * longitude `number`
    * province `array`
      * items `object`
        * active `integer`
        * confirmed `integer`
        * deaths `integer`
        * recovered `integer`

### getDailyReportByCountryCode
Get daily report for specific country. Country code and date are mandatory in parametars. Country code is in ISO 3166-1 standard. It can be 2 chars (Alpha-2) or 3 chars (Alpha-3) type. Date format is by ISO 8601 standard, but you can provide different format with date-format parameter


```js
covid19_api.getDailyReportByCountryCode({
  "code": "",
  "date": ""
}, context)
```

#### Input
* input `object`
  * code **required** `string`: Country code. Country code is by ISO 3166-1 standard. It can be 2 chars (Alpha-2) or 3 chars (Alpha-3) type.
  * date **required** `string`: Date of the report.
  * date-format `string` (values: YYYY-MM-DD, YYYY-DD-MM, DD-MM-YYYY, MM-DD-YYYY): Date format. If you dont want to use ISO 8601 standard (YYYY-MM-DD), you can provide different format.
  * format `string` (values: json, xml): Format of the response

#### Output
* output `array`
  * items `object`
    * country `string`
    * date `string`
    * latitude `number`
    * longitude `number`
    * province `array`
      * items `object`
        * active `integer`
        * confirmed `integer`
        * deaths `integer`
        * recovered `integer`

### getDailyReportByCountryName
Get daily report for specific country. Country name and date are mandatory in parametars. Date format is by ISO 8601 standard, but you can provide different format with date-format parameter


```js
covid19_api.getDailyReportByCountryName({
  "name": "",
  "date": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Country name.
  * date **required** `string`: Date of the report.
  * date-format `string` (values: YYYY-MM-DD, YYYY-DD-MM, DD-MM-YYYY, MM-DD-YYYY): Date format. If you dont want to use ISO 8601 standard (YYYY-MM-DD), you can provide different format.
  * format `string` (values: json, xml): Format of the response

#### Output
* output `array`
  * items `object`
    * country `string`
    * date `string`
    * latitude `number`
    * longitude `number`
    * province `array`
      * items `object`
        * active `integer`
        * confirmed `integer`
        * deaths `integer`
        * recovered `integer`

### getDailyReportTotals
Get daily report data for whole world.


```js
covid19_api.getDailyReportTotals({}, context)
```

#### Input
* input `object`
  * date `string`: Date of the report. If you don't put this field all dates will be returned.
  * date-format `string` (values: YYYY-MM-DD, YYYY-DD-MM, DD-MM-YYYY, MM-DD-YYYY): Date format. If you dont want to use ISO 8601 standard (YYYY-MM-DD), you can provide different format.
  * format `string` (values: json, xml): Format of the response. If you don't put this field JSON will be response format.

#### Output
* output `array`
  * items `object`
    * active `integer`
    * confirmed `integer`
    * critical `integer`
    * date `string`
    * deaths `integer`
    * recovered `integer`

### getLatestTotals
Get latest data for whole world.


```js
covid19_api.getLatestTotals({}, context)
```

#### Input
* input `object`
  * format `string` (values: json, xml): Format of the response

#### Output
* output `array`
  * items `object`
    * confirmed `integer`
    * critical `integer`
    * deaths `integer`
    * lastChange `string`
    * lastUpdate `string`
    * recovered `integer`



## Definitions

### Country-read
* Country-read `object`
  * confirmed `integer`
  * critical `integer`
  * deaths `integer`
  * lastChange `string`
  * lastUpdate `string`
  * latitude `number`
  * longitude `number`
  * name `string`
  * recovered `integer`

### DailyReport-read
* DailyReport-read `object`


