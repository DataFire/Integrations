# @datafire/amentum_space_global_magnet

Client library for Global Magnet API - calculate main components of the geomagnetic field at or near Earth's surface

## Installation and Usage
```bash
npm install --save @datafire/amentum_space_global_magnet
```
```js
let amentum_space_global_magnet = require('@datafire/amentum_space_global_magnet').create();

.then(data => {
  console.log(data);
});
```

## Description


The World Magnetic Model calculates the intensity and direction of the Earth's magnetic field on a specific date-time, geodetic altitude, latitude, and longitude. It is relied upon throughout the world for navigation, mineral exploration, atmospheric and space science, and is installed on billions of devices.  <br><br>
A comprehensive description of the World Magnetic Model, including its  limitations, can be found <a href='https://www.ngdc.noaa.gov/geomag/WMM/'>here</a>.  <br><br>
We provide a RESTful API to access the out-of-cycle  World Magnetic Model (WMM2015v2) valid for years 2015.0 - 2020.0 and WMM2020 valid for years 2020.0 - 2025.0<br><br>
The Global Magnet API wraps the original WMM code which is available  <a href='https://www.ngdc.noaa.gov/geomag/WMM/soft.shtml'>here</a>.  <br><br>
Amentum Pty Ltd is not responsible nor liable for any loss or damage of any sort incurred as the result of the use of the API. <br><br>
The API is rate limited to 10,000 calls per month for non commercial use.  Contact <a href="mailto:team@amentum.space">team@amentum.space</a> to  discuss paid plans and commercial use. <br><br>
Copyright <a href='https://amentum.space'>Amentum Pty Ltd</a> 2020.


## Actions

### app.api_wmm.endpoints.WMM.magnetic_field
<b>Declination (degrees)</b> - angle in the horizontal plane between magnetic north and true north. Declination is positive when magnetic north is east of true north. <br> <b>Inclination, or dip (degrees)</b>  - angle made between the horizontal plane and the magnetic field vector at some position. Positive inclination corresponds to a downward pointing  magnetic field. <br> <b>Total Intensity (nano Teslas)</b>  <br> <b>Grid Variation (deg)</b>  referenced to grid north. Grid  north reference to 0 deg meridian of a polar stereographic projection. Only defined for latitudes greater than 55 degrees  and less than -55 degrees (arctic and antarctic). <br>



```js
amentum_space_global_magnet.app.api_wmm.endpoints.WMM.magnetic_field({
  "altitude": 0,
  "latitude": 0,
  "longitude": 0,
  "year": 0
}, context)
```

#### Input
* input `object`
  * altitude **required** `number`: Geodetic Altitude 0 to 600 (km).
  * latitude **required** `number`: Geodetic Latitude. -90 (S) to 90 (N).
  * longitude **required** `number`: Geodetic Longitude. -180 (W) to 180 (E).
  * year **required** `number`: Year as a decimal in the range 2015-2025 (2017.5 would be half way through 2017)

#### Output
* output `object`
  * declination `object`
    * data `number`
    * units `string`
  * grid_variation `object`
    * data `number`
    * units `string`
  * inclination `object`
    * data `number`
    * units `string`
  * total_intensity `object`
    * data `number`
    * units `string`



## Definitions

*This integration has no definitions*
