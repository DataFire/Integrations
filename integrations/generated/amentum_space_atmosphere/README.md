# @datafire/amentum_space_atmosphere

Client library for Atmosphere API - calculate composition and density of the atmosphere


## Installation and Usage
```bash
npm install --save @datafire/amentum_space_atmosphere
```
```js
let amentum_space_atmosphere = require('@datafire/amentum_space_atmosphere').create();

.then(data => {
  console.log(data);
});
```

## Description

Instantly access empirical models of atmospheric density and  composition that are recommended by the Committee on Space Research (COSPAR) for  satellite drag calculations. <br><br>
<a href='https://ccmc.gsfc.nasa.gov/modelweb/atmos/nrlmsise00.html'>NRLMSISE-00</a> is recommended for composition calculations and was developed  by the US Naval Research Laboratory. <br><br>
<a href='https://sol.spacenvironment.net/jb2008/'>JB2008</a> is a newer model and is
 recommended for density calculations at altitudes above 80 km. 
It was developed by Space Environment Technologies and the US Air Force  Space Command. <br><br>
We provide access to both models via an easy-to-use web API. <br><br>
The API also automatically updates: <br>  - the indices needed by the JB2008 model to account for global density variations due to geomagnetic storms and EUV heating.  <br> - the Ap and F10.7 cm radio flux indices for the NRLMSISE00 model (unless provided by the user). <br><br>
The API is rate limited to 10,000 calls per month for non commercial use.  Contact <a href="mailto:team@amentum.space">team@amentum.space</a> if you have  any questions or need to discuss commercial use and forecasting features. <br><br>
Help us improve the quality of our web APIs by completing our 2 minute survey <a href="https://www.surveymonkey.com/r/CTDTRBN">here</a>.<br><br>
Amentum Pty Ltd is not responsible nor liable for any loss or damage of any sort incurred as a result of using the API. <br><br>
Copyright <a href='https://amentum.space'>Amentum Pty Ltd</a> 2020.


## Actions

### app.api.endpoints.JB2008.sample_atmosphere
Computes<br><br>
Exospheric temperature above the input position (K)<br><br>
Temperature at the input position (K)<br><br>
Total mass density at the input position (kg/m3)<br><br>
Valid for altitudes in the interval [80, 40000] km



```js
amentum_space_atmosphere.app.api.endpoints.JB2008.sample_atmosphere({
  "year": 0,
  "month": 0,
  "day": 0,
  "altitude": 0,
  "geodetic_latitude": 0,
  "geodetic_longitude": 0,
  "utc": 0
}, context)
```

#### Input
* input `object`
  * year **required** `integer`: Year in YYYY format
  * month **required** `integer`: Month in MM format
  * day **required** `integer`: Day in DD format
  * altitude **required** `number`: Altitude in (km)
  * geodetic_latitude **required** `number`: GeodeticLatitude (deg) -90 to 90 deg
  * geodetic_longitude **required** `number`: GeodeticLongitude (deg) 0 to 360 deg
  * utc **required** `number`: Coordinated Universal Time (hrs)

#### Output
* output `object`
  * at_alt_temp `object`
    * units `string`
    * value `number`
  * exospheric_temp `object`
    * units `string`
    * value `number`
  * total_mass_density `object`
    * units `string`
    * value `number`

### app.api.endpoints.NRLMSISE00.sample_atmosphere
Computes <br>
Number densities (/m3) of He, O, N2, O2, Ar, H, N. <br><br>
Anomalous oxygen number density (/m3). <br><br>
Exospheric temperature (K). <br><br>
Temperature at altitude (K). <br><br>
Total mass density (kg/m3). <br><br>
Daily F10.7 cm radio flux (SFU) for previous day, obtained from the US National Oceanic and  Atmospheric Administration if not specified by the user. <br><br>
81 day average of F10.7 flux (SFU) centered on the specified date, obtained from the US National Oceanic and  Atmospheric Administration if not specified by the user. <br><br>
Average of ap values in the 24 hours preceding,  calculated from data provided by GFZ German Research Centre for Geosciences
 if not specified by the user. <br><br>








 
Total mass density is the sum of the masses of the species in  equilibrium at the thermospheric temperature T(z) and the mass  density of the anomalous oxygen component. <br>
Valid for altitudes in the interval [0, 1000] km.



```js
amentum_space_atmosphere.app.api.endpoints.NRLMSISE00.sample_atmosphere({
  "year": 0,
  "month": 0,
  "day": 0,
  "altitude": 0,
  "geodetic_latitude": 0,
  "geodetic_longitude": 0,
  "utc": 0
}, context)
```

#### Input
* input `object`
  * year **required** `integer`: Year in YYYY format
  * month **required** `integer`: Month in MM format
  * day **required** `integer`: Day in DD format
  * altitude **required** `number`: Altitude in (km)
  * geodetic_latitude **required** `number`: GeodeticLatitude (deg) -90 to 90 deg
  * geodetic_longitude **required** `number`: GeodeticLongitude (deg) 0 to 360 deg
  * utc **required** `number`: Coordinated Universal Time (hrs)
  * f107a `number`: (Optional) 81 day average of F10.7 flux (SFU) centered on the specified day. F107 and F107A values correspond to the 10.7 cm radio flux at the actual distance of Earth from Sun rather than radio flux at 1 AU. F107, F107A, AP effects can be neglected below 80 km. If unspecified, values provided by the US National Oceanic and  Atmospheric Administration are retrieved automatically.
  * f107 `number`: (Optional) Daily F10.7 cm radio flux for previous day (SFU). F107 and F107A values correspond to the 10.7 cm radio flux at the actual distance of Earth from Sun rather than radio flux at 1 AU. F107, F107A, AP effects can be neglected below 80 km. If unspecified, values provided by the US National Oceanic and  Atmospheric Administration are retrieved automatically.
  * ap `number`: (Optional) The Ap-index provides a daily average level for geomagnetic activity F107, F107A, AP effects can be neglected below 80 km. If unspecified, the average of values in the 24 hours preceding the date-time  are automatically calculated from data provided by GFZ German Research Centre  for Geosciences.

#### Output
* output `object`
  * Ar_density `object`
    * units `string`
    * value `number`
  * H_density `object`
    * units `string`
    * value `number`
  * He_density `object`
    * units `string`
    * value `number`
  * N2_density `object`
    * units `string`
    * value `number`
  * N_density `object`
    * units `string`
    * value `number`
  * O2_density `object`
    * units `string`
    * value `number`
  * O_density `object`
    * units `string`
    * value `number`
  * anomalous_O_density `object`
    * units `string`
    * value `number`
  * ap `object`
    * value `number`
  * at_alt_temp `object`
    * units `string`
    * value `number`
  * exospheric_temp `object`
    * units `string`
    * value `number`
  * f107 `object`
    * units `string`
    * value `number`
  * f107a `object`
    * units `string`
    * value `number`
  * total_mass_density `object`
    * units `string`
    * value `number`



## Definitions

*This integration has no definitions*
