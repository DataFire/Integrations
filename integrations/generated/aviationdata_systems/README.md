# @datafire/aviationdata_systems

Client library for AviationData.Systems Airports API V1

## Installation and Usage
```bash
npm install --save @datafire/aviationdata_systems
```
```js
let aviationdata_systems = require('@datafire/aviationdata_systems').create({
  username: "",
  password: ""
});

aviationdata_systems.AirportIATA_AirportIATASearch({
  "airport_iata": ""
}).then(data => {
  console.log(data);
});
```

## Description



## Actions

### AirportIATA_AirportIATASearch
Required parameters: airport_iata


```js
aviationdata_systems.AirportIATA_AirportIATASearch({
  "airport_iata": ""
}, context)
```

#### Input
* input `object`
  * airport_iata **required** `string`: Required: The airports IATA code

#### Output
* output [AirportsAPI.Controllers.AirportIATAController.Response](#airportsapi.controllers.airportiatacontroller.response)

### AirportDetails_AirportNameSearch
Required parameters: airport_name


```js
aviationdata_systems.AirportDetails_AirportNameSearch({
  "airport_name": ""
}, context)
```

#### Input
* input `object`
  * airport_name **required** `string`: Required: The airports name

#### Output
* output [AirportsAPI.Controllers.AirportDetailsController.Response](#airportsapi.controllers.airportdetailscontroller.response)

### AutoCompleteAirportName_AirportNameSearch
Required parameters: airport_name, airport_service_type. Optional parameter: country code (ISO 3166-1).


```js
aviationdata_systems.AutoCompleteAirportName_AirportNameSearch({
  "airport_name": "",
  "airport_service_type": ""
}, context)
```

#### Input
* input `object`
  * airport_name **required** `string`: Required: The airports name
  * airport_service_type **required** `string` (values: All, Scheduled, NonScheduled): Required: Needs to be: All, Scheduled or NonScheduled
  * optional_country_code `string`: Optional: Country code (ISO 3166-1). This can be found via /countries

#### Output
* output [AirportsAPI.Controllers.AutoCompleteAirportNameController.Response](#airportsapi.controllers.autocompleteairportnamecontroller.response)

### CountryList_CountryAirportList
Country list. Returns a list of countries where airport data is available


```js
aviationdata_systems.CountryList_CountryAirportList(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [AirportsAPI.Controllers.CountryListController.CountryListResponse](#airportsapi.controllers.countrylistcontroller.countrylistresponse)

### CountryAirportList_CountryAirportList
Required parameters: country code (ISO 3166-1), airport_service_type.


```js
aviationdata_systems.CountryAirportList_CountryAirportList({
  "country_code": "",
  "airport_service_type": ""
}, context)
```

#### Input
* input `object`
  * country_code **required** `string`: Country code (ISO 3166-1). This can be found via /countries
  * airport_service_type **required** `string` (values: All, Scheduled, NonScheduled): Required: Needs to be: All, Scheduled or NonScheduled

#### Output
* output [AirportsAPI.Controllers.CountryAirportListController.AirportListResponse](#airportsapi.controllers.countryairportlistcontroller.airportlistresponse)

### NearestAirports_NearestAirportList
Required parameters: result_count, latitude, longitude, airport_service_type


```js
aviationdata_systems.NearestAirports_NearestAirportList({
  "result_count": 0,
  "latitude": 0,
  "longitude": 0
}, context)
```

#### Input
* input `object`
  * result_count **required** `integer`: Required: Number of airports to return. Min: 1 Max: 20
  * latitude **required** `number`: Required: Latitude
  * longitude **required** `number`: Required: Longitude

#### Output
* output [AirportsAPI.Controllers.NearestAirportsController.Response](#airportsapi.controllers.nearestairportscontroller.response)



## Definitions

### AirportsAPI.Controllers.AirportDetailsController.Response
* AirportsAPI.Controllers.AirportDetailsController.Response `object`
  * airport_list `array`
    * items [AirportsAPI.Models.Airport](#airportsapi.models.airport)
  * disclaimer `string`
  * message `string`
  * status_code `string`

### AirportsAPI.Controllers.AirportIATAController.Response
* AirportsAPI.Controllers.AirportIATAController.Response `object`
  * airport_list `array`
    * items [AirportsAPI.Models.Airport](#airportsapi.models.airport)
  * disclaimer `string`
  * message `string`
  * status_code `string`

### AirportsAPI.Controllers.AutoCompleteAirportNameController.Response
* AirportsAPI.Controllers.AutoCompleteAirportNameController.Response `object`
  * airport_list `array`
    * items [AirportsAPI.Models.AirportListAutocomplete](#airportsapi.models.airportlistautocomplete)
  * disclaimer `string`
  * message `string`
  * status_code `string`

### AirportsAPI.Controllers.CountryAirportListController.AirportListResponse
* AirportsAPI.Controllers.CountryAirportListController.AirportListResponse `object`
  * airport_list `array`
    * items [AirportsAPI.Models.AirportList](#airportsapi.models.airportlist)
  * country [AirportsAPI.Models.Country](#airportsapi.models.country)
  * disclaimer `string`
  * message `string`
  * status_code `string`

### AirportsAPI.Controllers.CountryListController.CountryListResponse
* AirportsAPI.Controllers.CountryListController.CountryListResponse `object`
  * country `array`
    * items [AirportsAPI.Models.Country](#airportsapi.models.country)
  * disclaimer `string`
  * message `string`
  * status_code `string`

### AirportsAPI.Controllers.NearestAirportsController.Response
* AirportsAPI.Controllers.NearestAirportsController.Response `object`
  * airport_list `array`
    * items [AirportsAPI.Models.Airport](#airportsapi.models.airport)
  * disclaimer `string`
  * message `string`
  * status_code `string`

### AirportsAPI.Models.Airport
* AirportsAPI.Models.Airport `object`
  * Country [AirportsAPI.Models.Location.Country](#airportsapi.models.location.country)
  * Frequency `array`
    * items [AirportsAPI.Models.Frequency](#airportsapi.models.frequency)
  * Region [AirportsAPI.Models.Location.Region](#airportsapi.models.location.region)
  * Runway `array`
    * items [AirportsAPI.Models.Runway](#airportsapi.models.runway)
  * airport_name `string`
  * airport_type `string`
  * elevation_ft `string`
  * gps_code `string`
  * iata_code `string`
  * latitude `string`
  * local_code `string`
  * location `string`
  * longitude `string`
  * scheduled_service `boolean`
  * website `string`
  * wikipedia `string`

### AirportsAPI.Models.AirportList
* AirportsAPI.Models.AirportList `object`
  * airport_name `string`
  * airport_type `string`
  * iata_code `string`
  * latitude `string`
  * location `string`
  * longitude `string`

### AirportsAPI.Models.AirportListAutocomplete
* AirportsAPI.Models.AirportListAutocomplete `object`
  * label `string`
  * value `string`

### AirportsAPI.Models.Country
* AirportsAPI.Models.Country `object`
  * continent `string`
  * country_code `string`
  * flag_url `string`
  * name `string`

### AirportsAPI.Models.Frequency
* AirportsAPI.Models.Frequency `object`
  * desc `string`
  * frequency_mhz `string`
  * frequency_type `string`

### AirportsAPI.Models.Location.Country
* AirportsAPI.Models.Location.Country `object`
  * country_code `string`
  * flag_url `string`
  * name `string`

### AirportsAPI.Models.Location.Region
* AirportsAPI.Models.Location.Region `object`
  * local_code `string`
  * name `string`
  * region_code `string`

### AirportsAPI.Models.Runway
* AirportsAPI.Models.Runway `object`
  * closed `boolean`
  * hE_latitude `string`
  * hE_longitude `string`
  * he_displaced_threshold_ft `string`
  * he_elevation_ft `string`
  * he_heading_deg `string`
  * le_displaced_threshold_ft `string`
  * le_elevation_ft `string`
  * le_heading_deg `string`
  * le_latitude `string`
  * le_longitude `string`
  * length_ft `string`
  * lighted `boolean`
  * surface_type `string`
  * width_ft `string`


