# @datafire/rapidapi_idealspot_geodata

Client library for IdealSpot GeoData

## Installation and Usage
```bash
npm install --save @datafire/rapidapi_idealspot_geodata
```
```js
let rapidapi_idealspot_geodata = require('@datafire/rapidapi_idealspot_geodata').create();

.then(data => {
  console.log(data);
});
```

## Description

Hyperlocal Demographics, Vehicle Traffic, Economic, Market Signals, and More. Use this API to request IdealSpot hyperlocal geospatial market insight and geometry data. 

## Detailed Description

Use this API as your **local economy microscope** by querying [IdealSpot](https://www.idealspot.com) hyperlocal market insight and geometry data. We offer the most precise, extensive, and frequently-updated local market data in the US. Our data is available across the entire US and can be queried at geographic scales ranging from the micro (Census block) through the macro (nation).

Better data and analysis leads to a better understanding of local market opportunities and risks. Integrate with your commercial real estate and marketing applications, machine learning workflows, and other investment analytics.

Our goal is to offer the most complete snapshot of the geographically distributed consumer and retail economy. We start with the fundamentals of consumers and business establishments. To connect retailers with consumers, we provide mobility data like vehicle traffic and mobile device data. To describe consumer intent, we provide geolocated digital marketing data. 

We believe that accurate capital allocation through reliable local market data is foundational to creating robust, healthy, and livable communities for all. We hope you and your clients find tremendous value in this service.

## Features

Query data and GeoJSON geometries at these scales for any US latitude and longitude:

* Rings (0.5 km+)
* Drive time (1-60 minutes)
* Bike time (3-60 minutes)
* Walk time (5-60 minutes)
* Public transit time (5-60 minutes)
* Administrative region (US, states, core-based statistical areas, counties, Census-designated places, Census tracts, zipcodes, Census block groups, opportunity zones)

| Data Feature | Description |
| ------- | ------------------------------|
| Demographics, Housing, Spending | *Updated Quarterly*.  Current and historical market data including population, spending, and housing. Vendor (PopStats) is relied upon by Walgreens, Ulta Beauty, Blackstone, etc |
| Labor, Business Establishments, Economic Conditions | *Updated Quarterly*.  Traditional market data including workforce, business establishment counts, and economic conditions like local GDP, unemployment rates. Vendor (PopStats) is relied upon by Walgreens, Ulta Beauty, Blackstone, etc |
| Consumer segmentation	| *Updated Annually*. Demographics grouped into narrative-oriented segments. |
| Vehicle Traffic |	*Updated semi-annually*. Gold standard in vehicle traffic data from INRIX. Counts by day of week, time of day and side of street. |
| Rings and Travel time polygons | *Estimate in Real-time*. Rings alongside drive time, walk time, bike time, and public transit time polygons. Request as GeoJSON geometries for mapping or use with data queries |
| Administrative region polygons | *Updated Annually*. GeoJSON administrative regions from US Census Bureau: block groups, tracts, counties, CBSAs, states, opportunity zones, USPS zipcodes |
| Internet Search Volumes | 30 day rolling averages for geolocated advertising potential across 450 business categories from major search engines |
| Social Media Interest	| 30 day rolling average for geolocated advertising potential across 450 business categories from major social networks |

### Coming Soon!

This API powers our local market research platform at [IdealSpot.com](https://www.idealspot.com). The functionality exposed so far is only a portion of our current capabilities. We will be exposing additional API features in time so watch this space!

| Data Feature | Description |
| ------- | ------------------------------|
Mobile device visit counts, points of interest, brands | Fresh point of interest data across 3000+ brands, millions of POI, and historical foot traffic counts using mobile data for those points of interest
Origin/destination trips from mobile devices | Map origins and destinations of devices visiting an arbitrary catchment area
Competition search | Search all major point-of-interest aggregators in one query
Environment/climate | Expected weather patterns like temperature and precipitation
Filter search API | Query data for all counties in state, all tracts in MSA, etc
Road segment tiles | Plot road segments on maps in interactive applications

## Developer Website

For more detail see https://developer.idealspot.com/

## Actions

### FetchAvailableInsights
List all insights that the user has access to. This includes population, household income, crime statistics, walking traffic, vehicle traffic counts, employment, and much more,


```js
rapidapi_idealspot_geodata.FetchAvailableInsights({
  "X-RapidAPI-Key": "",
  "X-RapidAPI-Host": ""
}, context)
```

#### Input
* input `object`
  * X-RapidAPI-Key **required** `string`: (Required) Rapid API Key. See https://rapidapi.com/idealspot-inc-idealspot-inc-default/api/idealspot-geodata
  * X-RapidAPI-Host **required** `string`

#### Output
* output [ListAllLocalInsights](#listalllocalinsights)

### FetchInsightQueryParameters
Fetch request/response structure metadata for a given Insight. This provides you the periods of data available as well as any other parameters you may want to query the Insight by. Example Insights include population and market data such as: age, daytime population, avg. home value, crime indexes, foot traffic, employment, income, occupation, etc.  For the full-list see the developer documentation.


```js
rapidapi_idealspot_geodata.FetchInsightQueryParameters({
  "insight_id:": "",
  "X-RapidAPI-Key": "",
  "X-RapidAPI-Host": ""
}, context)
```

#### Input
* input `object`
  * insight_id: **required** `string`: Insight ID. See developer documentation for full list.
  * X-RapidAPI-Key **required** `string`: (Required) Rapid API Key. See https://rapidapi.com/idealspot-inc-idealspot-inc-default/api/idealspot-geodata
  * X-RapidAPI-Host **required** `string`

#### Output
* output [Describe_occupation_Insight](#describe_occupation_insight)

### QueryInsightatLocation
Execute a query for a given insight and location(s). Some Insights may require you to provide required options. ie., when querying `occupation` for White-Collar Workers, you can filter by opt=`{"data":{"category":[2469]}}`

For examples of `locations`, please see [Location API Documentation](https://idealspot.gitlab.io/developer-docs/#location)


```js
rapidapi_idealspot_geodata.QueryInsightatLocation({
  "version": "",
  "location[]": "",
  "insight_id:": "",
  "X-RapidAPI-Key": "",
  "X-RapidAPI-Host": ""
}, context)
```

#### Input
* input `object`
  * version **required** `string`: (Required) Insight version. Insight versions are incremented when a response format changes in any way, including the addition of new groups. Old versions are retained, unmodified, for backwards compatibility.
  * location[] **required** `string`: (Required) Represents a buffer, region, or custom polygon specification. Accepts the `Location` model (as a `Buffer`, `Region`, or `Custom Polygon`) formatted as a JSON string. Multiple `location` query parameters are allowed. NOTE: When requesting multiple locations, you must include brackets(i.e. `?location[]=...&location[]=...`). If not included, only the last location will be used. For more detail, see https://idealspot.gitlab.io/developer-docs/#location
  * insight_id: **required** `string`: Insight ID. See https://developer.idealspot.com/data for full list.
  * X-RapidAPI-Key **required** `string`: (Required) Rapid API Key. See https://rapidapi.com/idealspot-inc-idealspot-inc-default/api/idealspot-geodata
  * X-RapidAPI-Host **required** `string`

#### Output
* output [Homevalueswithin1mi.radiusofLocation](#homevalueswithin1mi.radiusoflocation)

### FetchGeometries
Fetch location GeoJSON


```js
rapidapi_idealspot_geodata.FetchGeometries({
  "location[]": "",
  "X-RapidAPI-Key": "",
  "X-RapidAPI-Host": ""
}, context)
```

#### Input
* input `object`
  * location[] **required** `string`: (Required) Represents a buffer, region, or custom polygon specification. Accepts the `Location` model (as a `Buffer`, `Region`, or `Custom Polygon`) formatted as a JSON string. Multiple `location` query parameters are allowed. NOTE: When requesting multiple locations, you must include brackets(i.e. `?location[]=...&location[]=...`). If not included, only the last location will be used.
  * X-RapidAPI-Key **required** `string`: (Required) Rapid API Key. See https://rapidapi.com/idealspot-inc-idealspot-inc-default/api/idealspot-geodata
  * X-RapidAPI-Host **required** `string`

#### Output
* output [Describetheregionwithin5minutedrive-timeofageographicpoint](#describetheregionwithin5minutedrive-timeofageographicpoint)

### geometries.regions.intersecting.latitude.longitude.get
For given latitude and longitude, find intersecting administrative regions. Region polygons are simplified for web mapping.


```js
rapidapi_idealspot_geodata.geometries.regions.intersecting.latitude.longitude.get({
  "latitude": 0,
  "longitude": 0,
  "X-RapidAPI-Key": "",
  "X-RapidAPI-Host": ""
}, context)
```

#### Input
* input `object`
  * latitude **required** `number`: (Required) Search coordinate latitude
  * longitude **required** `number`: (Required) Search coordinate longitude
  * X-RapidAPI-Key **required** `string`: (Required) Rapid API Key. See https://rapidapi.com/idealspot-inc-idealspot-inc-default/api/idealspot-geodata
  * X-RapidAPI-Host **required** `string`

#### Output
* output [FetchAdministrativeRegionsusingLat_Lng](#fetchadministrativeregionsusinglat_lng)

### VehicleTrafficCountsforRoadSegment
Time of day, day of week, and side of street vehicle traffic counts.


```js
rapidapi_idealspot_geodata.VehicleTrafficCountsforRoadSegment({
  "segment_id": 0,
  "X-RapidAPI-Key": "",
  "X-RapidAPI-Host": ""
}, context)
```

#### Input
* input `object`
  * segment_id **required** `integer`: (Required) Road segment ID. Fetched from Search Road Segments
  * X-RapidAPI-Key **required** `string`: (Required) Rapid API Key. See https://rapidapi.com/idealspot-inc-idealspot-inc-default/api/idealspot-geodata
  * X-RapidAPI-Host **required** `string`

#### Output
* output [VehicleTrafficCountsforRoadSegment](#vehicletrafficcountsforroadsegment)

### FetchNearestRoadSegments
For given latitude and longitude, find `n` nearest road segments


```js
rapidapi_idealspot_geodata.FetchNearestRoadSegments({
  "n": 0,
  "latitude": 0,
  "longitude": 0,
  "X-RapidAPI-Key": "",
  "X-RapidAPI-Host": ""
}, context)
```

#### Input
* input `object`
  * n **required** `integer`: Number of road segments to return (between 1 and 20)
  * latitude **required** `number`: (Required) Search coordinate latitude
  * longitude **required** `number`: (Required) Search coordinate longitude
  * X-RapidAPI-Key **required** `string`: (Required) Rapid API Key. See https://rapidapi.com/idealspot-inc-idealspot-inc-default/api/idealspot-geodata
  * X-RapidAPI-Host **required** `string`

#### Output
* output [SearchRoadSegments](#searchroadsegments)



## Definitions

### Autocomplete
* Autocomplete `object`
  * input **required** `array`
    * items `string`

### Category
* Category `object`
  * description **required** `string`
  * id **required** `integer`
  * label **required** `string`
  * parent_id **required** `string`

### Crs
* Crs `object`
  * properties **required** [Properties4](#properties4)
  * type **required** `string`

### Data
* Data `object`
  * parameters **required** [Parameters](#parameters)
  * description **required** `string`
  * groups **required** `array`
    * items `string`
  * id **required** `string`
  * name **required** `string`
  * periods **required** `array`
    * items `string`
  * slug **required** `string`
  * version **required** `string`

### Data1
* Data1 `object`
  * data **required** `array`
    * items `array`
      * items `string`
  * location **required** [Location1](#location1)
  * location_index **required** `integer`
  * metadata **required** [Metadata](#metadata)

### Data2
* Data2 `object`
  * geometry **required** [Geometry](#geometry)
  * properties **required** [Properties](#properties)
  * type **required** `string`

### Data3
* Data3 `object`
  * features **required** `array`
    * items [Feature](#feature)
  * type **required** `string`

### Data4
* Data4 `object`
  * crs **required** [Crs](#crs)
  * features **required** `array`
    * items [Feature1](#feature1)
  * type **required** `string`

### Data5
* Data5 `object`
  * data **required** `array`
    * items `array`
      * items `integer`
  * metadata **required** [Metadata1](#metadata1)
  * roadsegment **required** [Roadsegment](#roadsegment)
  * stats **required** [Stats](#stats)

### Datum
* Datum `object`
  * description **required** `string`
  * id **required** `string`
  * name **required** `string`
  * version **required** `string`

### Describe_occupation_Insight
* Describe`occupation`Insight `object`
  * data **required** [Data](#data)

### Describetheregionwithin5minutedrive-timeofageographicpoint
* Describetheregionwithin5minutedrive-timeofageographicpoint `object`
  * data **required** [Data3](#data3)

### Feature
* Feature `object`
  * geometry **required** [Geometry](#geometry)
  * properties **required** [Properties2](#properties2)
  * type **required** `string`

### Feature1
* Feature1 `object`
  * geometry **required** [Geometry](#geometry)
  * properties **required** [Properties3](#properties3)
  * type **required** `string`

### FetchAdministrativeRegionsusingLat_Lng
* FetchAdministrativeRegionsusingLat/Lng `object`
  * data **required** `array`
    * items [Data2](#data2)

### Geometry
* Geometry `object`
  * coordinates **required** `array`
    * items `array`
      * items `number`
  * type **required** `string`

### Homevalueswithin1mi.radiusofLocation
* Homevalueswithin1mi.radiusofLocation `object`
  * data **required** `array`
    * items [Data1](#data1)

### ListAllLocalInsights
* ListAllLocalInsights `object`
  * data **required** `array`
    * items [Datum](#datum)

### Location1
* Location1 `object`
  * areatype **required** `string`
  * latitude **required** `number`
  * longitude **required** `number`
  * radius **required** `integer`
  * type **required** `string`
  * units **required** `string`

### Location3
* Location3 `object`
  * areatype **required** `string`
  * latitude **required** `number`
  * longitude **required** `number`
  * radius **required** `string`
  * type **required** `string`
  * units **required** `string`

### Metadata
* Metadata `object`
  * datetime **required** `array`
    * items `array`
      * items `string`
  * display_groups **required** `array`
    * items `array`
      * items `string`
  * units **required** [Units](#units)

### Metadata1
* Metadata1 `object`
  * bearing **required** `string`
  * columns **required** `array`
    * items `string`
  * name **required** `string`
  * rows **required** `array`
    * items `string`
  * segment_id **required** `string`
  * state **required** `string`

### Parameters
* Parameters `object`
  * category **required** `array`
    * items [Category](#category)

### Properties
* Properties `object`
  * _properties **required** [Properties1](#properties1)
  * altname **required** `string`
  * autocomplete **required** [Autocomplete](#autocomplete)
  * calculated_area_sq_meters **required** `number`
  * name **required** `string`
  * region_id **required** `string`
  * regiontype **required** `string`
  * state_code **required** `string`
  * timestamp **required** `string`

### Properties1
* Properties1 `object`
  * AFFGEOID `string`
  * ALAND **required** `integer`
  * AWATER `integer`
  * BLKGRPCE `string`
  * CBSAFP `string`
  * CLASSFP `string`
  * COUNTYFP `string`
  * COUNTYNS `string`
  * CSAFP `string`
  * DIVISION `string`
  * FUNCSTAT `string`
  * GEOID `string`
  * INTPTLAT `string`
  * INTPTLON `string`
  * LSAD `string`
  * MEMI `string`
  * METDIVFP `string`
  * MTFCC `string`
  * NAME `string`
  * NAMELSAD `string`
  * PCICBSA `string`
  * PCINECTA `string`
  * PLACEFP `string`
  * PLACENS `string`
  * POPULATION `integer`
  * POP_SQMI `number`
  * PO_NAME `string`
  * REGION `string`
  * SQMI `number`
  * STATE `string`
  * STATEFP `string`
  * STATENS `string`
  * STUSPS `string`
  * Shape_Area `number`
  * Shape_Leng `number`
  * TRACTCE `string`
  * ZIP_CODE `string`

### Properties2
* Properties2 `object`
  * calculated_area_sq_meters **required** `number`
  * location **required** [Location3](#location3)
  * status **required** `integer`

### Properties3
* Properties3 `object`
  * bearing **required** `string`
  * roadname **required** `string`
  * segment_id **required** `string`
  * state **required** `string`

### Properties4
* Properties4 `object`
  * name **required** `string`

### Roadsegment
* Roadsegment `object`
  * coordinates **required** `array`
    * items `array`
      * items `number`
  * type **required** `string`

### SearchRoadSegments
* SearchRoadSegments `object`
  * data **required** [Data4](#data4)

### Stats
* Stats `object`
  * aadt **required** `integer`

### Units
* Units `object`
  * $100k-125k **required** `string`
  * $10k-15k **required** `string`
  * $125k-150k **required** `string`
  * $150k-175k **required** `string`
  * $15k-20k **required** `string`
  * $175k-200k **required** `string`
  * $200k-250k **required** `string`
  * $20k-25k **required** `string`
  * $250k-300k **required** `string`
  * $25k-30k **required** `string`
  * $300k-400k **required** `string`
  * $30k-35k **required** `string`
  * $35k-40k **required** `string`
  * $400k-500k **required** `string`
  * $40k-50k **required** `string`
  * $500k-750k **required** `string`
  * $50k-60k **required** `string`
  * $60k-70k **required** `string`
  * $70k-80k **required** `string`
  * $750k-1M **required** `string`
  * $80k-90k **required** `string`
  * $90k-100k **required** `string`
  * Median Home Value **required** `string`
  * Over $1M **required** `string`
  * Owner Occupied Households **required** `string`
  * Under $10k **required** `string`
  * context.households **required** `string`
  * context.landarea **required** `string`

### VehicleTrafficCountsforRoadSegment
* VehicleTrafficCountsforRoadSegment `object`
  * data **required** `array`
    * items [Data5](#data5)

### locationArray
* location[] `object`
  * areatype **required** `string`
  * latitude **required** `number`
  * longitude **required** `number`
  * radius **required** `string`
  * type **required** `string`
  * units **required** `string`

### locationArray2
* location[]2 `object`
  * region_id **required** `string`
  * regiontype **required** `string`
  * type **required** `string`


