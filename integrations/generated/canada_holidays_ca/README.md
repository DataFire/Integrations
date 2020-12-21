# @datafire/canada_holidays_ca

Client library for Canada Holidays API

## Installation and Usage
```bash
npm install --save @datafire/canada_holidays_ca
```
```js
let canada_holidays_ca = require('@datafire/canada_holidays_ca').create();

.then(data => {
  console.log(data);
});
```

## Description

This API that lists all 28 public holidays for all 13 provinces and territories in Canada, including federal holidays.

## Actions

### api.v1.get
Returns a welcome message.


```js
canada_holidays_ca.api.v1.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * _links `object`
    * holidays `object`
      * href `string`: Domain to get all holidays
    * provinces `object`
      * href `string`: Domain to get all provinces
    * self `object`
      * href `string`: Root domain
  * message `string`: A welcome message

### api.v1.holidays.get
Returns Canadian public holidays. Each holiday lists the regions that observe it.


```js
canada_holidays_ca.api.v1.holidays.get({}, context)
```

#### Input
* input `object`
  * year `string`: A calendar year
  * federal `string` (values: 1, 0, true, false): A boolean parameter. If true, will return only federal holidays. If false, will return no federal holidays.

#### Output
* output `object`
  * holidays `array`
    * items [Holiday](#holiday)

### api.v1.holidays.holidayId.get
Returns one Canadian statutory holiday by integer id. Returns a 404 response for invalid ids.


```js
canada_holidays_ca.api.v1.holidays.holidayId.get({
  "holidayId": 0
}, context)
```

#### Input
* input `object`
  * year `string`: A calendar year
  * holidayId **required** `integer`: Primary key for a holiday

#### Output
* output `object`
  * holiday [Holiday](#holiday)

### api.v1.provinces.get
Returns provinces and territories in Canada. Each province or territory lists its associated holidays.


```js
canada_holidays_ca.api.v1.provinces.get({}, context)
```

#### Input
* input `object`
  * year `string`: A calendar year

#### Output
* output `object`
  * provinces `array`
    * items [Province](#province)

### api.v1.provinces.provinceId.get
Returns a Canadian province or territory with its associated holidays.


```js
canada_holidays_ca.api.v1.provinces.provinceId.get({
  "provinceId": ""
}, context)
```

#### Input
* input `object`
  * year `string`: A calendar year
  * provinceId **required** `string` (values: AB, BC, MB, NB, NL, NS, NT, NU, ON, PE, QC, SK, YT): A Canadian province abbreviation

#### Output
* output `object`
  * province [Province](#province)



## Definitions

### Error
* Error `object`
  * message `string`: An error message
  * status `integer`: An HTTP status code
  * timestamp `string`: A UTC ISO timestamp

### Holiday
* Holiday `object`: A Canadian holiday. Includes a name, date, and a list of regions that observe this holiday.
  * date `string`: ISO date
  * federal `string` (values: 0, 1, true, false): Whether this holiday is observed by federally-regulated industries.
  * id `integer`: Primary key for a holiday
  * name Fr `string`: French name
  * nameEn `string`: English name
  * provinces `array`
    * items [Province](#province)

### Province
* Province `object`: A Canadian province or territory 
  * id `string` (values: AB, BC, MB, NB, NL, NS, NT, NU, ON, PE, QC, SK, YT): Canadian province abbreviations
  * nameEn `string`: English name
  * nameFr `string`: French name
  * nextHoliday [Holiday](#holiday)
  * provinces `array`
    * items [Holiday](#holiday)


