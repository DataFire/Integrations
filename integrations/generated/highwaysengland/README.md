# @datafire/highwaysengland

Client library for Highways England API

## Installation and Usage
```bash
npm install --save @datafire/highwaysengland
```
```js
let highwaysengland = require('@datafire/highwaysengland').create();

.then(data => {
  console.log(data);
});
```

## Description



## Actions

### vversion.areas.get
Returns list of areas


```js
highwaysengland.vversion.areas.get({
  "version": ""
}, context)
```

#### Input
* input `object`
  * version **required** `string`

#### Output
* output [AreaResponse](#arearesponse)

### vversion.areas.area_Ids.get
Returns details of selected area


```js
highwaysengland.vversion.areas.area_Ids.get({
  "area_Ids": "",
  "version": ""
}, context)
```

#### Input
* input `object`
  * area_Ids **required** `string`
  * version **required** `string`

#### Output
* output [AreaResponse](#arearesponse)

### Quality_GetDailyDataQualityForSite
Get Site DailyQuality


```js
highwaysengland.Quality_GetDailyDataQualityForSite({
  "siteId": "",
  "start_date": "",
  "end_date": "",
  "version": ""
}, context)
```

#### Input
* input `object`
  * siteId **required** `string`
  * start_date **required** `string`: The start date of the report in the format ddmmyyyy (i.e 31012016)
  * end_date **required** `string`: The end date of the report in the format ddmmyyyy (i.e 31012016)
  * version **required** `string`

#### Output
* output [DailyQualityResponse](#dailyqualityresponse)

### Quality_GetOverallDataQualityForSites
Get Site OverallQuality


```js
highwaysengland.Quality_GetOverallDataQualityForSites({
  "sites": "",
  "start_date": "",
  "end_date": "",
  "version": ""
}, context)
```

#### Input
* input `object`
  * sites **required** `string`: Get site quality by site id delimited by ,
  * start_date **required** `string`: The start date of the report in the format ddmmyyyy (i.e 31012016)
  * end_date **required** `string`: The end date of the report in the format ddmmyyyy (i.e 31012016)
  * version **required** `string`

#### Output
* output [OverallQualityResponse](#overallqualityresponse)

### vversion.reports.report_type.get
Get's the report.


```js
highwaysengland.vversion.reports.report_type.get({
  "report_type": "",
  "sites": "",
  "start_date": "",
  "end_date": "",
  "page": 0,
  "page_size": 0,
  "version": ""
}, context)
```

#### Input
* input `object`
  * report_type **required** `string`: Report Type Id (i.e Daily, Monthly, Annual)
  * sites **required** `string`: Comma separated list of site Ids.
  * start_date **required** `string`: The start date of the report in the format ddmmyyyy (i.e 31012016)
  * end_date **required** `string`: The end date of the report in the format ddmmyyyy (i.e 31012016)
  * page **required** `integer`: The page offset to return.
  * page_size **required** `integer`: The number of rows to return.
  * reportSubTypeId `integer`
  * version **required** `string`

#### Output
* output [Object](#object)

### vversion.reports.start_date.to.end_date.report_type.get
Get's the report.


```js
highwaysengland.vversion.reports.start_date.to.end_date.report_type.get({
  "report_type": "",
  "sites": "",
  "start_date": "",
  "end_date": "",
  "page": 0,
  "page_size": 0,
  "version": ""
}, context)
```

#### Input
* input `object`
  * report_type **required** `string`: Report Type Id (i.e Daily, Monthly, Annual)
  * sites **required** `string`: Comma separated list of site Ids.
  * start_date **required** `string`: The start date of the report in the format ddmmyyyy (i.e 31012016)
  * end_date **required** `string`: The end date of the report in the format ddmmyyyy (i.e 31012016)
  * page **required** `integer`: The page offset to return.
  * page_size **required** `integer`: The number of rows to return.
  * reportSubTypeId `integer`
  * version **required** `string`

#### Output
* output [Object](#object)

### vversion.sites.get
Get a list of sites


```js
highwaysengland.vversion.sites.get({
  "version": ""
}, context)
```

#### Input
* input `object`
  * version **required** `string`

#### Output
* output [SiteResponse](#siteresponse)

### vversion.sites.site_Ids.get
Get selected sites


```js
highwaysengland.vversion.sites.site_Ids.get({
  "site_Ids": "",
  "version": ""
}, context)
```

#### Input
* input `object`
  * site_Ids **required** `string`: site id
  * version **required** `string`

#### Output
* output [SiteResponse](#siteresponse)

### SiteTypes_Index
Return list of site types


```js
highwaysengland.SiteTypes_Index({
  "version": ""
}, context)
```

#### Input
* input `object`
  * version **required** `string`

#### Output
* output [SiteTypeResponse](#sitetyperesponse)

### SiteTypes_GetSitesForPublicFacingAPI
Returns the layer metadata for the LayerId specified.


```js
highwaysengland.SiteTypes_GetSitesForPublicFacingAPI({
  "siteType_Id": 0,
  "version": ""
}, context)
```

#### Input
* input `object`
  * siteType_Id **required** `integer`: 1 = MIDAS, 2 = TAME, 3 = TMU, 4 = TRADS Legacy
  * version **required** `string`

#### Output
* output [SiteTypeLayer](#sitetypelayer)



## Definitions

### Area
* Area `object`
  * Description **required** `string`
  * Id `string`
  * Name **required** `string`
  * XLatitude **required** `string`
  * XLongitude **required** `string`
  * YLatitude **required** `string`
  * YLongitude **required** `string`

### AreaResponse
* AreaResponse `object`
  * areas `array`
    * items [Area](#area)
  * row_count `integer`

### DailyQualityResponse
* DailyQualityResponse `object`
  * Qualities `array`
    * items [Qualities](#qualities)
  * row_count `integer`

### Object
* Object `object`

### OverallQualityResponse
* OverallQualityResponse `object`
  * data_quality `integer`
  * end_date `string`
  * row_count `integer`
  * sites `string`
  * start_date `string`

### Qualities
* Qualities `object`
  * Date `string`
  * Quality `integer`

### SiteResponse
* SiteResponse `object`
  * row_count `integer`
  * sites `array`
    * items [SiteResult](#siteresult)

### SiteResult
* SiteResult `object`
  * Description `string`
  * Id `string`
  * Latitude `number`
  * Longitude `number`
  * Name `string`
  * Status `string`

### SiteType
* SiteType `object`
  * Description `string`
  * Id `string`

### SiteTypeLayer
* SiteTypeLayer `object`
  * Sites `array`
    * items [Sites](#sites)

### SiteTypeResponse
* SiteTypeResponse `object`
  * row_count `integer`
  * sitetypes `array`
    * items [SiteType](#sitetype)

### Sites
* Sites `object`
  * Active `array`
    * items `boolean`
  * Description `array`
    * items `string`
  * Id `array`
    * items `string`
  * Lattitude `array`
    * items `number`
  * Longitude `array`
    * items `number`
  * SiteId `array`
    * items `string`


