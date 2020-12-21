# @datafire/amentum_space_cosmic_ray

Client library for Cosmic Ray API - atmospheric radiation doses and intensities using the PARMA model

## Installation and Usage
```bash
npm install --save @datafire/amentum_space_cosmic_ray
```
```js
let amentum_space_cosmic_ray = require('@datafire/amentum_space_cosmic_ray').create();

.then(data => {
  console.log(data);
});
```

## Description

High energy galactic cosmic rays (GCR) and bursts of solar energetic particles (SEP)  collide with gases in the atmosphere, leading to a cascade of nuclear and electromagnetic reactions.  The result is a complex mix of ionising radiation, the intensity  and composition of which varies spatially and temporally. Understanding this mix is important for a variety of applications, including estimating  the radiation exposure of aircrew, pilots, and frequent flyers during air travel. <br><br>
The PARMA model, developed by the Japan Atomic Energy Agency (JAEA), can instantaneously estimate cosmic ray fluxes of neutrons, protons, ions, muons, electrons, positrons, and photons for a given date, latitude, longitude, and altitude. A comprehensive description of PARMA can be found in the publications <a href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0160390">here</a> and <a href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0144679">here</a>.<br><br>
The Terms and Conditions of PARMA are described  <a href="http://phits.jaea.go.jp/expacs/index.html">here</a>. Use of the API  acknowledges you have read and agreed to those Terms and Conditions.<br><br>
We provide access to the PARMA model via an easy-to-use web API. Solar energetic particle effects  are not modelled by PARMA.
The API is rate limited to 10,000 calls per month and for non commercial use.  Contact <a href="mailto:team@amentum.space">team@amentum.space</a> to  discuss commercial use.<br><br>
Help us improve the quality of our web APIs by completing our 2 minute survey <a href="https://www.surveymonkey.com/r/CTDTRBN">here</a>.<br><br>
Amentum Pty Ltd is not responsible nor liable for any loss or damage of any sort incurred as a result of using the API. <br><br>
Copyright <a href='https://amentum.space'>Amentum Pty Ltd</a> 2020.


## Actions

### app.api_parma.endpoints.PARMA.ambient_dose
The ambient dose equivalent, H*(10), is an operational quantity that simulates the  human body by measuring the dose equivalent at a depth of 10 mm within a tissue  equivalent sphere of 300 mm diameter. It is a measurable quantity that is  used to calibrate area monitors (radiation detectors) for mixed radiation fields. 
Use this endpoint if you are comparing model predictions to measurements.  



```js
amentum_space_cosmic_ray.app.api_parma.endpoints.PARMA.ambient_dose({
  "latitude": 0,
  "longitude": 0,
  "year": 0,
  "month": 0,
  "day": 0,
  "particle": ""
}, context)
```

#### Input
* input `object`
  * altitude `number`: Altitude (in km). The minimum is 0 m, the maximum is 47 km (the upper limit of the stratosphere).
  * atmospheric_depth `number`: Atmospheric depth from the top of the atmosphere (in units of g/cm2). The minimum is 0.913 g/cm2, the maximum is 1032.66 g/cm2. WARNING: you can specify either altitude OR atmospheric depth, not both.
  * latitude **required** `number`: Latitude. -90 (S) to 90 (N).
  * longitude **required** `number`: Longitude. -180 (W) to 180 (E).
  * year **required** `integer`: Year in YYYY.
  * month **required** `integer`: Month in MM.
  * day **required** `integer`: Day in DD.
  * particle **required** `string` (values: total, e-, e+, mu+, mu-, gamma, neutron, proton, alpha): The particle type as a string. Specifying 'total', only used for the dose calculation, returns the dose for all particle types.

#### Output
* output `object`
  * units `string`
  * value `string`

### app.api_parma.endpoints.PARMA.differential_intensity
The differential intensity of a particle is a directional quantity that describes the number of particles per unit area, per unit solid angle, per unit energy, and per unit time. The API leverages the functionality of PARMA to calculate differential intensity distributions with energies in units of MeV and Intensity in units of /cm2/sr/MeV/s.



```js
amentum_space_cosmic_ray.app.api_parma.endpoints.PARMA.differential_intensity({
  "latitude": 0,
  "longitude": 0,
  "year": 0,
  "month": 0,
  "day": 0,
  "particle": "",
  "angle": 0
}, context)
```

#### Input
* input `object`
  * altitude `number`: Altitude (in km). The minimum is 0 m, the maximum is 47 km (the upper limit of the stratosphere).
  * atmospheric_depth `number`: Atmospheric depth from the top of the atmosphere (in units of g/cm2). The minimum is 0.913 g/cm2, the maximum is 1032.66 g/cm2. WARNING: you can specify either altitude OR atmospheric depth, not both.
  * latitude **required** `number`: Latitude. -90 (S) to 90 (N).
  * longitude **required** `number`: Longitude. -180 (W) to 180 (E).
  * year **required** `integer`: Year in YYYY.
  * month **required** `integer`: Month in MM.
  * day **required** `integer`: Day in DD.
  * particle **required** `string` (values: total, e-, e+, mu+, mu-, gamma, neutron, proton, alpha): The particle type as a string. Specifying 'total', only used for the dose calculation, returns the dose for all particle types.
  * angle **required** `number`: Direction cosine. 1.0 is in the downward direction.

#### Output
* output `object`
  * energies `object`
    * data `array`
      * items `number`
    * units `string`
  * intensities `object`
    * data `array`
      * items `number`
    * units `string`

### app.api_parma.endpoints.PARMA.effective_dose
Effective dose is a radiation protection quantity defined by the International Commission on Radiological Protection (ICRP) and represents the stochastic health risk to the human body at low levels of radiation. It accounts for the different sensitivities of organs to ionising radiation, as well as the different effectiveness of various types of radiation.
Use this endpoint if you need to estimate radiation exposures of personnel.



```js
amentum_space_cosmic_ray.app.api_parma.endpoints.PARMA.effective_dose({
  "latitude": 0,
  "longitude": 0,
  "year": 0,
  "month": 0,
  "day": 0,
  "particle": ""
}, context)
```

#### Input
* input `object`
  * altitude `number`: Altitude (in km). The minimum is 0 m, the maximum is 47 km (the upper limit of the stratosphere).
  * atmospheric_depth `number`: Atmospheric depth from the top of the atmosphere (in units of g/cm2). The minimum is 0.913 g/cm2, the maximum is 1032.66 g/cm2. WARNING: you can specify either altitude OR atmospheric depth, not both.
  * latitude **required** `number`: Latitude. -90 (S) to 90 (N).
  * longitude **required** `number`: Longitude. -180 (W) to 180 (E).
  * year **required** `integer`: Year in YYYY.
  * month **required** `integer`: Month in MM.
  * day **required** `integer`: Day in DD.
  * particle **required** `string` (values: total, e-, e+, mu+, mu-, gamma, neutron, proton, alpha): The particle type as a string. Specifying 'total', only used for the dose calculation, returns the dose for all particle types.

#### Output
* output `object`
  * units `string`
  * value `string`



## Definitions

*This integration has no definitions*
