# @datafire/google_spectrum

Client library for Google Spectrum Database

## Installation and Usage
```bash
npm install --save datafire @datafire/google_spectrum
```

```js
let datafire = require('datafire');
let google_spectrum = require('@datafire/google_spectrum').actions;
let context = new datafire.Context();

google_spectrum.paws.verifyDevice({}, context).then(data => {
  console.log(data);
})
```

## Description
API for spectrum-management functions.

## Actions
### paws.getSpectrum
Requests information about the available spectrum for a device at a location. Requests from a fixed-mode device must include owner information so the device can be registered with the database.


```js
google_spectrum.paws.getSpectrum({}, context)
```


### paws.getSpectrumBatch
The Google Spectrum Database does not support batch requests, so this method always yields an UNIMPLEMENTED error.


```js
google_spectrum.paws.getSpectrumBatch({}, context)
```


### paws.init
Initializes the connection between a white space device and the database.


```js
google_spectrum.paws.init({}, context)
```


### paws.notifySpectrumUse
Notifies the database that the device has selected certain frequency ranges for transmission. Only to be invoked when required by the regulator. The Google Spectrum Database does not operate in domains that require notification, so this always yields an UNIMPLEMENTED error.


```js
google_spectrum.paws.notifySpectrumUse({}, context)
```


### paws.register
The Google Spectrum Database implements registration in the getSpectrum method. As such this always returns an UNIMPLEMENTED error.


```js
google_spectrum.paws.register({}, context)
```


### paws.verifyDevice
Validates a device for white space use in accordance with regulatory rules. The Google Spectrum Database does not support master/slave configurations, so this always yields an UNIMPLEMENTED error.


```js
google_spectrum.paws.verifyDevice({}, context)
```


