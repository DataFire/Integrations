# @datafire/google_spectrum

Client library for Google Spectrum Database

## Installation and Usage
```bash
npm install --save @datafire/google_spectrum
```
```js
let google_spectrum = require('@datafire/google_spectrum').create();

google_spectrum.paws.verifyDevice({}).then(data => {
  console.log(data);
});
```

## Description

API for spectrum-management functions.

## Actions

### paws.getSpectrum
Requests information about the available spectrum for a device at a location. Requests from a fixed-mode device must include owner information so the device can be registered with the database.


```js
google_spectrum.paws.getSpectrum({}, context)
```

#### Input
* input `object`
  * body [PawsGetSpectrumRequest](#pawsgetspectrumrequest)
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [PawsGetSpectrumResponse](#pawsgetspectrumresponse)

### paws.getSpectrumBatch
The Google Spectrum Database does not support batch requests, so this method always yields an UNIMPLEMENTED error.


```js
google_spectrum.paws.getSpectrumBatch({}, context)
```

#### Input
* input `object`
  * body [PawsGetSpectrumBatchRequest](#pawsgetspectrumbatchrequest)
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [PawsGetSpectrumBatchResponse](#pawsgetspectrumbatchresponse)

### paws.init
Initializes the connection between a white space device and the database.


```js
google_spectrum.paws.init({}, context)
```

#### Input
* input `object`
  * body [PawsInitRequest](#pawsinitrequest)
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [PawsInitResponse](#pawsinitresponse)

### paws.notifySpectrumUse
Notifies the database that the device has selected certain frequency ranges for transmission. Only to be invoked when required by the regulator. The Google Spectrum Database does not operate in domains that require notification, so this always yields an UNIMPLEMENTED error.


```js
google_spectrum.paws.notifySpectrumUse({}, context)
```

#### Input
* input `object`
  * body [PawsNotifySpectrumUseRequest](#pawsnotifyspectrumuserequest)
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [PawsNotifySpectrumUseResponse](#pawsnotifyspectrumuseresponse)

### paws.register
The Google Spectrum Database implements registration in the getSpectrum method. As such this always returns an UNIMPLEMENTED error.


```js
google_spectrum.paws.register({}, context)
```

#### Input
* input `object`
  * body [PawsRegisterRequest](#pawsregisterrequest)
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [PawsRegisterResponse](#pawsregisterresponse)

### paws.verifyDevice
Validates a device for white space use in accordance with regulatory rules. The Google Spectrum Database does not support master/slave configurations, so this always yields an UNIMPLEMENTED error.


```js
google_spectrum.paws.verifyDevice({}, context)
```

#### Input
* input `object`
  * body [PawsVerifyDeviceRequest](#pawsverifydevicerequest)
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [PawsVerifyDeviceResponse](#pawsverifydeviceresponse)



## Definitions

### AntennaCharacteristics
* AntennaCharacteristics `object`: Antenna characteristics provide additional information, such as the antenna height, antenna type, etc. Whether antenna characteristics must be provided in a request depends on the device type and regulatory domain.
  * height `number`: The antenna height in meters. Whether the antenna height is required depends on the device type and the regulatory domain. Note that the height may be negative.
  * heightType `string`: If the height is required, then the height type (AGL for above ground level or AMSL for above mean sea level) is also required. The default is AGL.
  * heightUncertainty `number`: The height uncertainty in meters. Whether this is required depends on the regulatory domain.

### DatabaseSpec
* DatabaseSpec `object`: This message contains the name and URI of a database.
  * name `string`: The display name for a database.
  * uri `string`: The corresponding URI of the database.

### DbUpdateSpec
* DbUpdateSpec `object`: This message is provided by the database to notify devices of an upcoming change to the database URI.
  * databases `array`: A required list of one or more databases. A device should update its preconfigured list of databases to replace (only) the database that provided the response with the specified entries.
    * items [DatabaseSpec](#databasespec)

### DeviceCapabilities
* DeviceCapabilities `object`: Device capabilities provide additional information that may be used by a device to provide additional information to the database that may help it to determine available spectrum. If the database does not support device capabilities it will ignore the parameter altogether.
  * frequencyRanges `array`: An optional list of frequency ranges supported by the device. Each element must contain start and stop frequencies in which the device can operate. Channel identifiers are optional. When specified, the database should not return available spectrum that falls outside these ranges or channel IDs.
    * items [FrequencyRange](#frequencyrange)

### DeviceDescriptor
* DeviceDescriptor `object`: The device descriptor contains parameters that identify the specific device, such as its manufacturer serial number, regulatory-specific identifier (e.g., FCC ID), and any other device characteristics required by regulatory domains.
  * etsiEnDeviceCategory `string`: Specifies the ETSI white space device category. Valid values are the strings master and slave. This field is case-insensitive. Consult the ETSI documentation for details about the device types.
  * etsiEnDeviceEmissionsClass `string`: Specifies the ETSI white space device emissions class. The values are represented by numeric strings, such as 1, 2, etc. Consult the ETSI documentation for details about the device types.
  * etsiEnDeviceType `string`: Specifies the ETSI white space device type. Valid values are single-letter strings, such as A, B, etc. Consult the ETSI documentation for details about the device types.
  * etsiEnTechnologyId `string`: Specifies the ETSI white space device technology identifier. The string value must not exceed 64 characters in length. Consult the ETSI documentation for details about the device types.
  * fccId `string`: Specifies the device's FCC certification identifier. The value is an identifier string whose length should not exceed 32 characters. Note that, in practice, a valid FCC ID may be limited to 19 characters.
  * fccTvbdDeviceType `string`: Specifies the TV Band White Space device type, as defined by the FCC. Valid values are FIXED, MODE_1, MODE_2.
  * manufacturerId `string`: The manufacturer's ID may be required by the regulatory domain. This should represent the name of the device manufacturer, should be consistent across all devices from the same manufacturer, and should be distinct from that of other manufacturers. The string value must not exceed 64 characters in length.
  * modelId `string`: The device's model ID may be required by the regulatory domain. The string value must not exceed 64 characters in length.
  * rulesetIds `array`: The list of identifiers for rulesets supported by the device. A database may require that the device provide this list before servicing the device requests. If the database does not support any of the rulesets specified in the list, the database may refuse to service the device requests. If present, the list must contain at least one entry.
    * items `string`
  * serialNumber `string`: The manufacturer's device serial number; required by the applicable regulatory domain. The length of the value must not exceed 64 characters.

### DeviceOwner
* DeviceOwner `object`: This parameter contains device-owner information required as part of device registration. The regulatory domains may require additional parameters.
  * operator [Vcard](#vcard)
  * owner [Vcard](#vcard)

### DeviceValidity
* DeviceValidity `object`: The device validity element describes whether a particular device is valid to operate in the regulatory domain.
  * deviceDesc [DeviceDescriptor](#devicedescriptor)
  * isValid `boolean`: The validity status: true if the device is valid for operation, false otherwise. It will always be present.
  * reason `string`: If the device identifier is not valid, the database may include a reason. The reason may be in any language. The length of the value should not exceed 128 characters.

### EventTime
* EventTime `object`: The start and stop times of an event. This is used to indicate the time period for which a spectrum profile is valid.
  * startTime `string`: The inclusive start of the event. It will be present.
  * stopTime `string`: The exclusive end of the event. It will be present.

### FrequencyRange
* FrequencyRange `object`: A specific range of frequencies together with the associated maximum power level and channel identifier.
  * channelId `string`: The database may include a channel identifier, when applicable. When it is included, the device should treat it as informative. The length of the identifier should not exceed 16 characters.
  * maxPowerDBm `number`: The maximum total power level (EIRP)—computed over the corresponding operating bandwidth—that is permitted within the frequency range. Depending on the context in which the frequency-range element appears, this value may be required. For example, it is required in the available-spectrum response, available-spectrum-batch response, and spectrum-use notification message, but it should not be present (it is not applicable) when the frequency range appears inside a device-capabilities message.
  * startHz `number`: The required inclusive start of the frequency range (in Hertz).
  * stopHz `number`: The required exclusive end of the frequency range (in Hertz).

### GeoLocation
* GeoLocation `object`: This parameter is used to specify the geolocation of the device.
  * confidence `integer`: The location confidence level, as an integer percentage, may be required, depending on the regulatory domain. When the parameter is optional and not provided, its value is assumed to be 95. Valid values range from 0 to 99, since, in practice, 100-percent confidence is not achievable. The confidence value is meaningful only when geolocation refers to a point with uncertainty.
  * point [GeoLocationEllipse](#geolocationellipse)
  * region [GeoLocationPolygon](#geolocationpolygon)

### GeoLocationEllipse
* GeoLocationEllipse `object`: A "point" with uncertainty is represented using the Ellipse shape.
  * center [GeoLocationPoint](#geolocationpoint)
  * orientation `number`: A floating-point number that expresses the orientation of the ellipse, representing the rotation, in degrees, of the semi-major axis from North towards the East. For example, when the uncertainty is greatest along the North-South direction, orientation is 0 degrees; conversely, if the uncertainty is greatest along the East-West direction, orientation is 90 degrees. When orientation is not present, the orientation is assumed to be 0.
  * semiMajorAxis `number`: A floating-point number that expresses the location uncertainty along the major axis of the ellipse. May be required by the regulatory domain. When the uncertainty is optional, the default value is 0.
  * semiMinorAxis `number`: A floating-point number that expresses the location uncertainty along the minor axis of the ellipse. May be required by the regulatory domain. When the uncertainty is optional, the default value is 0.

### GeoLocationPoint
* GeoLocationPoint `object`: A single geolocation on the globe.
  * latitude `number`: A required floating-point number that expresses the latitude in degrees using the WGS84 datum. For details on this encoding, see the National Imagery and Mapping Agency's Technical Report TR8350.2.
  * longitude `number`: A required floating-point number that expresses the longitude in degrees using the WGS84 datum. For details on this encoding, see the National Imagery and Mapping Agency's Technical Report TR8350.2.

### GeoLocationPolygon
* GeoLocationPolygon `object`: A region is represented using the polygonal shape.
  * exterior `array`: When the geolocation describes a region, the exterior field refers to a list of latitude/longitude points that represent the vertices of a polygon. The first and last points must be the same. Thus, a minimum of four points is required. The following polygon restrictions from RFC5491 apply:  
    * items [GeoLocationPoint](#geolocationpoint)

### GeoSpectrumSchedule
* GeoSpectrumSchedule `object`: The schedule of spectrum profiles available at a particular geolocation.
  * location [GeoLocation](#geolocation)
  * spectrumSchedules `array`: A list of available spectrum profiles and associated times. It will always be present, and at least one schedule must be included (though it may be empty if there is no available spectrum). More than one schedule may be included to represent future changes to the available spectrum.
    * items [SpectrumSchedule](#spectrumschedule)

### PawsGetSpectrumBatchRequest
* PawsGetSpectrumBatchRequest `object`: The request message for a batch available spectrum query protocol.
  * antenna [AntennaCharacteristics](#antennacharacteristics)
  * capabilities [DeviceCapabilities](#devicecapabilities)
  * deviceDesc [DeviceDescriptor](#devicedescriptor)
  * locations `array`: A geolocation list is required. This allows a device to specify its current location plus additional anticipated locations when allowed by the regulatory domain. At least one location must be included. Geolocation must be given as the location of the radiation center of the device's antenna. If a location specifies a region, rather than a point, the database may return an UNIMPLEMENTED error if it does not support query by region.
    * items [GeoLocation](#geolocation)
  * masterDeviceDesc [DeviceDescriptor](#devicedescriptor)
  * owner [DeviceOwner](#deviceowner)
  * requestType `string`: The request type parameter is an optional parameter that can be used to modify an available spectrum batch request, but its use depends on applicable regulatory rules. For example, It may be used to request generic slave device parameters without having to specify the device descriptor for a specific device. When the requestType parameter is missing, the request is for a specific device (master or slave), and the device descriptor parameter for the device on whose behalf the batch request is made is required.
  * type `string`: The message type (e.g., INIT_REQ, AVAIL_SPECTRUM_REQ, ...).
  * version `string`: The PAWS version. Must be exactly 1.0.

### PawsGetSpectrumBatchResponse
* PawsGetSpectrumBatchResponse `object`: The response message for the batch available spectrum query contains a schedule of available spectrum for the device at multiple locations.
  * databaseChange [DbUpdateSpec](#dbupdatespec)
  * deviceDesc [DeviceDescriptor](#devicedescriptor)
  * geoSpectrumSchedules `array`: The available spectrum batch response must contain a geo-spectrum schedule list, The list may be empty if spectrum is not available. The database may return more than one geo-spectrum schedule to represent future changes to the available spectrum. How far in advance a schedule may be provided depends upon the applicable regulatory domain. The database may return available spectrum for fewer geolocations than requested. The device must not make assumptions about the order of the entries in the list, and must use the geolocation value in each geo-spectrum schedule entry to match available spectrum to a location.
    * items [GeoSpectrumSchedule](#geospectrumschedule)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "spectrum#pawsGetSpectrumBatchResponse".
  * maxContiguousBwHz `number`: The database may return a constraint on the allowed maximum contiguous bandwidth (in Hertz). A regulatory domain may require the database to return this parameter. When this parameter is present in the response, the device must apply this constraint to its spectrum-selection logic to ensure that no single block of spectrum has bandwidth that exceeds this value.
  * maxTotalBwHz `number`: The database may return a constraint on the allowed maximum total bandwidth (in Hertz), which does not need to be contiguous. A regulatory domain may require the database to return this parameter. When this parameter is present in the available spectrum batch response, the device must apply this constraint to its spectrum-selection logic to ensure that total bandwidth does not exceed this value.
  * needsSpectrumReport `boolean`: For regulatory domains that require a spectrum-usage report from devices, the database must return true for this parameter if the geo-spectrum schedules list is not empty; otherwise, the database should either return false or omit this parameter. If this parameter is present and its value is true, the device must send a spectrum use notify message to the database; otherwise, the device should not send the notification.
  * rulesetInfo [RulesetInfo](#rulesetinfo)
  * timestamp `string`: The database includes a timestamp of the form, YYYY-MM-DDThh:mm:ssZ (Internet timestamp format per RFC3339), in its available spectrum batch response. The timestamp should be used by the device as a reference for the start and stop times specified in the response spectrum schedules.
  * type `string`: The message type (e.g., INIT_REQ, AVAIL_SPECTRUM_REQ, ...).
  * version `string`: The PAWS version. Must be exactly 1.0.

### PawsGetSpectrumRequest
* PawsGetSpectrumRequest `object`: The request message for the available spectrum query protocol which must include the device's geolocation.
  * antenna [AntennaCharacteristics](#antennacharacteristics)
  * capabilities [DeviceCapabilities](#devicecapabilities)
  * deviceDesc [DeviceDescriptor](#devicedescriptor)
  * location [GeoLocation](#geolocation)
  * masterDeviceDesc [DeviceDescriptor](#devicedescriptor)
  * owner [DeviceOwner](#deviceowner)
  * requestType `string`: The request type parameter is an optional parameter that can be used to modify an available spectrum request, but its use depends on applicable regulatory rules. It may be used, for example, to request generic slave device parameters without having to specify the device descriptor for a specific device. When the requestType parameter is missing, the request is for a specific device (master or slave), and the deviceDesc parameter for the device on whose behalf the request is made is required.
  * type `string`: The message type (e.g., INIT_REQ, AVAIL_SPECTRUM_REQ, ...).
  * version `string`: The PAWS version. Must be exactly 1.0.

### PawsGetSpectrumResponse
* PawsGetSpectrumResponse `object`: The response message for the available spectrum query which contains a schedule of available spectrum for the device.
  * databaseChange [DbUpdateSpec](#dbupdatespec)
  * deviceDesc [DeviceDescriptor](#devicedescriptor)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "spectrum#pawsGetSpectrumResponse".
  * maxContiguousBwHz `number`: The database may return a constraint on the allowed maximum contiguous bandwidth (in Hertz). A regulatory domain may require the database to return this parameter. When this parameter is present in the response, the device must apply this constraint to its spectrum-selection logic to ensure that no single block of spectrum has bandwidth that exceeds this value.
  * maxTotalBwHz `number`: The database may return a constraint on the allowed maximum total bandwidth (in Hertz), which need not be contiguous. A regulatory domain may require the database to return this parameter. When this parameter is present in the available spectrum response, the device must apply this constraint to its spectrum-selection logic to ensure that total bandwidth does not exceed this value.
  * needsSpectrumReport `boolean`: For regulatory domains that require a spectrum-usage report from devices, the database must return true for this parameter if the spectrum schedule list is not empty; otherwise, the database will either return false or omit this parameter. If this parameter is present and its value is true, the device must send a spectrum use notify message to the database; otherwise, the device must not send the notification.
  * rulesetInfo [RulesetInfo](#rulesetinfo)
  * spectrumSchedules `array`: The available spectrum response must contain a spectrum schedule list. The list may be empty if spectrum is not available. The database may return more than one spectrum schedule to represent future changes to the available spectrum. How far in advance a schedule may be provided depends on the applicable regulatory domain.
    * items [SpectrumSchedule](#spectrumschedule)
  * timestamp `string`: The database includes a timestamp of the form YYYY-MM-DDThh:mm:ssZ (Internet timestamp format per RFC3339) in its available spectrum response. The timestamp should be used by the device as a reference for the start and stop times specified in the response spectrum schedules.
  * type `string`: The message type (e.g., INIT_REQ, AVAIL_SPECTRUM_REQ, ...).
  * version `string`: The PAWS version. Must be exactly 1.0.

### PawsInitRequest
* PawsInitRequest `object`: The initialization request message allows the master device to initiate exchange of capabilities with the database.
  * deviceDesc [DeviceDescriptor](#devicedescriptor)
  * location [GeoLocation](#geolocation)
  * type `string`: The message type (e.g., INIT_REQ, AVAIL_SPECTRUM_REQ, ...).
  * version `string`: The PAWS version. Must be exactly 1.0.

### PawsInitResponse
* PawsInitResponse `object`: The initialization response message communicates database parameters to the requesting device.
  * databaseChange [DbUpdateSpec](#dbupdatespec)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "spectrum#pawsInitResponse".
  * rulesetInfo [RulesetInfo](#rulesetinfo)
  * type `string`: The message type (e.g., INIT_REQ, AVAIL_SPECTRUM_REQ, ...).
  * version `string`: The PAWS version. Must be exactly 1.0.

### PawsNotifySpectrumUseRequest
* PawsNotifySpectrumUseRequest `object`: The spectrum-use notification message which must contain the geolocation of the Device and parameters required by the regulatory domain.
  * deviceDesc [DeviceDescriptor](#devicedescriptor)
  * location [GeoLocation](#geolocation)
  * spectra `array`: A spectrum list is required in the spectrum-use notification. The list specifies the spectrum that the device expects to use, which includes frequency ranges and maximum power levels. The list may be empty if the device decides not to use any of spectrum. For consistency, the psdBandwidthHz value should match that from one of the spectrum elements in the corresponding available spectrum response previously sent to the device by the database. Note that maximum power levels in the spectrum element must be expressed as power spectral density over the specified psdBandwidthHz value. The actual bandwidth to be used (as computed from the start and stop frequencies) may be different from the psdBandwidthHz value. As an example, when regulatory rules express maximum power spectral density in terms of maximum power over any 100 kHz band, then the psdBandwidthHz value should be set to 100 kHz, even though the actual bandwidth used can be 20 kHz.
    * items [SpectrumMessage](#spectrummessage)
  * type `string`: The message type (e.g., INIT_REQ, AVAIL_SPECTRUM_REQ, ...).
  * version `string`: The PAWS version. Must be exactly 1.0.

### PawsNotifySpectrumUseResponse
* PawsNotifySpectrumUseResponse `object`: An empty response to the notification.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "spectrum#pawsNotifySpectrumUseResponse".
  * type `string`: The message type (e.g., INIT_REQ, AVAIL_SPECTRUM_REQ, ...).
  * version `string`: The PAWS version. Must be exactly 1.0.

### PawsRegisterRequest
* PawsRegisterRequest `object`: The registration request message contains the required registration parameters.
  * antenna [AntennaCharacteristics](#antennacharacteristics)
  * deviceDesc [DeviceDescriptor](#devicedescriptor)
  * deviceOwner [DeviceOwner](#deviceowner)
  * location [GeoLocation](#geolocation)
  * type `string`: The message type (e.g., INIT_REQ, AVAIL_SPECTRUM_REQ, ...).
  * version `string`: The PAWS version. Must be exactly 1.0.

### PawsRegisterResponse
* PawsRegisterResponse `object`: The registration response message simply acknowledges receipt of the request and is otherwise empty.
  * databaseChange [DbUpdateSpec](#dbupdatespec)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "spectrum#pawsRegisterResponse".
  * type `string`: The message type (e.g., INIT_REQ, AVAIL_SPECTRUM_REQ, ...).
  * version `string`: The PAWS version. Must be exactly 1.0.

### PawsVerifyDeviceRequest
* PawsVerifyDeviceRequest `object`: The device validation request message.
  * deviceDescs `array`: A list of device descriptors, which specifies the slave devices to be validated, is required.
    * items [DeviceDescriptor](#devicedescriptor)
  * type `string`: The message type (e.g., INIT_REQ, AVAIL_SPECTRUM_REQ, ...).
  * version `string`: The PAWS version. Must be exactly 1.0.

### PawsVerifyDeviceResponse
* PawsVerifyDeviceResponse `object`: The device validation response message.
  * databaseChange [DbUpdateSpec](#dbupdatespec)
  * deviceValidities `array`: A device validities list is required in the device validation response to report whether each slave device listed in a previous device validation request is valid. The number of entries must match the number of device descriptors listed in the previous device validation request.
    * items [DeviceValidity](#devicevalidity)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "spectrum#pawsVerifyDeviceResponse".
  * type `string`: The message type (e.g., INIT_REQ, AVAIL_SPECTRUM_REQ, ...).
  * version `string`: The PAWS version. Must be exactly 1.0.

### RulesetInfo
* RulesetInfo `object`: This contains parameters for the ruleset of a regulatory domain that is communicated using the initialization and available-spectrum processes.
  * authority `string`: The regulatory domain to which the ruleset belongs is required. It must be a 2-letter country code. The device should use this to determine additional device behavior required by the associated regulatory domain.
  * maxLocationChange `number`: The maximum location change in meters is required in the initialization response, but optional otherwise. When the device changes location by more than this specified distance, it must contact the database to get the available spectrum for the new location. If the device is using spectrum that is no longer available, it must immediately cease use of the spectrum under rules for database-managed spectrum. If this value is provided within the context of an available-spectrum response, it takes precedence over the value within the initialization response.
  * maxPollingSecs `integer`: The maximum duration, in seconds, between requests for available spectrum. It is required in the initialization response, but optional otherwise. The device must contact the database to get available spectrum no less frequently than this duration. If the new spectrum information indicates that the device is using spectrum that is no longer available, it must immediately cease use of those frequencies under rules for database-managed spectrum. If this value is provided within the context of an available-spectrum response, it takes precedence over the value within the initialization response.
  * rulesetIds `array`: The identifiers of the rulesets supported for the device's location. The database should include at least one applicable ruleset in the initialization response. The device may use the ruleset identifiers to determine parameters to include in subsequent requests. Within the context of the available-spectrum responses, the database should include the identifier of the ruleset that it used to determine the available-spectrum response. If included, the device must use the specified ruleset to interpret the response. If the device does not support the indicated ruleset, it must not operate in the spectrum governed by the ruleset.
    * items `string`

### SpectrumMessage
* SpectrumMessage `object`: Available spectrum can be logically characterized by a list of frequency ranges and permissible power levels for each range.
  * bandwidth `number`: The bandwidth (in Hertz) for which permissible power levels are specified. For example, FCC regulation would require only one spectrum specification at 6MHz bandwidth, but Ofcom regulation would require two specifications, at 0.1MHz and 8MHz. This parameter may be empty if there is no available spectrum. It will be present otherwise.
  * frequencyRanges `array`: The list of frequency ranges and permissible power levels. The list may be empty if there is no available spectrum, otherwise it will be present.
    * items [FrequencyRange](#frequencyrange)

### SpectrumSchedule
* SpectrumSchedule `object`: The spectrum schedule element combines an event time with spectrum profile to define a time period in which the profile is valid.
  * eventTime [EventTime](#eventtime)
  * spectra `array`: A list of spectrum messages representing the usable profile. It will always be present, but may be empty when there is no available spectrum.
    * items [SpectrumMessage](#spectrummessage)

### Vcard
* Vcard `object`: A vCard-in-JSON message that contains only the fields needed for PAWS:  
  * adr [VcardAddress](#vcardaddress)
  * email [VcardTypedText](#vcardtypedtext)
  * fn `string`: The full name of the contact person. For example: John A. Smith.
  * org [VcardTypedText](#vcardtypedtext)
  * tel [VcardTelephone](#vcardtelephone)

### VcardAddress
* VcardAddress `object`: The structure used to represent a street address.
  * code `string`: The postal code associated with the address. For example: 94423.
  * country `string`: The country name. For example: US.
  * locality `string`: The city or local equivalent portion of the address. For example: San Jose.
  * pobox `string`: An optional post office box number.
  * region `string`: The state or local equivalent portion of the address. For example: CA.
  * street `string`: The street number and name. For example: 123 Any St.

### VcardTelephone
* VcardTelephone `object`: The structure used to represent a telephone number.
  * uri `string`: A nested telephone URI of the form: tel:+1-123-456-7890.

### VcardTypedText
* VcardTypedText `object`: The structure used to represent an organization and an email address.
  * text `string`: The text string associated with this item. For example, for an org field: ACME, inc. For an email field: smith@example.com.


