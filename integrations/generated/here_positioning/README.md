# @datafire/here_positioning

Client library for Positioning API

## Installation and Usage
```bash
npm install --save @datafire/here_positioning
```
```js
let here_positioning = require('@datafire/here_positioning').create();

.then(data => {
  console.log(data);
});
```

## Description

Positioning API for making location requests.

## Actions

### locate.post
Request WGS-84 compliant geocoordinates for a location based on 2G/3G/4G cell and/or WLAN measurements.


```js
here_positioning.locate.post({
  "Content-Type": "",
  "observations_locate": null
}, context)
```

#### Input
* input `object`
  * fallback `string` (values: any, area, singleWifi): Acceptable fallback options for cell and WLAN positioning. Values 'area' and 'any' apply to cell based positioning, and value 'singleWifi' applies to WLAN based positioning. They may both be combined in the same request.
  * desired `string` (values: altitude): Comma-separated list of additional data fields that the service should include in the response if data is available. The query parameter supports the value 'altitude'.
  * required `string` (values: altitude): Comma-separated list of additional data fields that the service should include in the response. If the data is not available, the response contains an error message. The query parameter supports the value 'altitude'.
  * confidence `integer`: Confidence level in percent for the accuracy/uncertainty in the location estimate response. If not specified, the default is 68 (this corresponds to a 68% probability that the true position is within the accuracy/uncertainty radius of the location estimate: the higher the number, the greater the confidence level).
  * app_id `string`: A 20-byte Base64 URL-safe encoded string used for the authentication of the client application. If you use the app ID/app code option, you need to include an app_id and app_code with every request. For further details, see [Acquiring Credentials](https://dv.developer.here.com/documentation/positioning/dev_guide/topics/credentials-auth-options.html). Required unless authentication token or an API Key provided in Authorization header. Supported by host https://pos.api.here.com.
  * app_code `string`: A 20-byte Base64 URL-safe encoded string used for the authentication of the client application. If you use the app ID/app code option, you need to include an app_id and app_code with every request. For further details, see [Acquiring Credentials](https://dv.developer.here.com/documentation/positioning/dev_guide/topics/credentials-auth-options.html). Required unless authentication token or an API Key provided in Authorization header. Supported by host https://pos.api.here.com.
  * apiKey `string`: A 43-byte Base64 URL-safe encoded string used for the authentication of the client application. As a logged in user, you can generate it at your [Projects](https://developer.here.com/projects). API Keys never expire but you can invalidate your API Keys at any time. You cannot have more than two API Keys for one app at the same time. You must include an apikey with every request. Required unless authentication token provided in Authorization header. Supported by host https://pos.ls.hereapi.com.
  * authorization `string`: HERE Account bearer token. Required unless app_id and app_code, or an API Key provided in the query string parameters. Supported by hosts https://pos.api.here.com and https://pos.ls.hereapi.com.
  * Content-Encoding `string` (values: gzip): Indicates the data in the body is gzip encoded. Value must be 'gzip'.
  * Content-Type **required** `string` (values: application/json): Indicates the media-type of the request body. Value must be 'application/json'.
  * observations_locate **required** [observations_locate](#observations_locate)

#### Output
* output [response_success_locate](#response_success_locate)



## Definitions

### cell_cdma_locate
* cell_cdma_locate `object`: CDMA measurement
  * bsid **required** `integer`: Base Station ID, BID
  * channel `integer`: CDMA channel frequency (Optional, you must specify a value for this item when you specify a value for pnoffset)
  * nid **required** `integer`: Network Id, NID
  * nmr `array`: CDMA Network measurements (Optional)
    * items [cell_cdma_nmr](#cell_cdma_nmr)
  * pilotpower `integer`: Pilot Power (dBm) (Optional). If Pilot Power is not available directly, it needs to be calculated from Total Power in the band and Pilot Strength with respect to the Total Power. Pilot power less than -142dBm should be mapped to -142. Pilot power greater than -49dBm should be mapped to -49.
  * pnoffset `integer`: Pseudonoise offset (Optional, you must specify a value for this item when you specify a value for channel)
  * rz `integer`: Registration zone (Optional)
  * sid **required** `integer`: System Id, SID

### cell_cdma_nmr
* cell_cdma_nmr `object`: CDMA Network measurement
  * bsid `integer`: Base Station ID (Optional)
  * channel **required** `integer`: CDMA channel frequency
  * pilotpower `integer`: Pilot Power (dBm) (Optional). If Pilot Power is not available directly, it needs to be calculated from Total Power in the band and Pilot Strength with respect to the Total Power. Pilot power less than -142dBm should be mapped to -142. Pilot power greater than -49dBm should be mapped to -49.
  * pnoffset **required** `integer`: Pseudonoise offset

### cell_gsm_locate
* cell_gsm_locate `object`: GSM measurement
  * cid **required** `integer`: Cell Identifier, 16 bits. Mcc+mnc+lac+cid uniquely identifies the GSM cell.
  * lac **required** `integer`: Location Area Code
  * mcc **required** `integer`: Mobile Country Code
  * mnc **required** `integer`: Mobile Network Code
  * nmr `array`: Network measurements (Optional)
    * items [cell_gsm_nmr](#cell_gsm_nmr)
  * rxlevel `integer`: Received Signal power (dBm) (Optional). Power less than -110dBm should be mapped to -110. Power greater than -25dBm should be mapped to -25.
  * ta `integer`: Timing advance (Optional). Expressed in the units of GSM bits equaling to 48/13 μs ~ 1107 meters.

### cell_gsm_nmr
* cell_gsm_nmr `object`: GSM Network measurement
  * bcch **required** `integer`: Broadcast Control Channel (Synonymous to ARFCN = Absolute Radio Frequency Channel)
  * bsic **required** `integer`: Base Station Identity Code (for instance, color code)
  * cid `integer`: Cell Identifier (Optional)
  * lac `integer`: Location Area Code (Optional)
  * rxlevel `integer`: Received Signal power (dBm) (Optional). Power less than -110dBm should be mapped to -110. Power greater than -25dBm should be mapped to -25.

### cell_lte_locate
* cell_lte_locate `object`: LTE measurement
  * cid **required** `integer`: E-UTRA Cell Identifier, 28 bits (20 bits eNodeB and 8 bits Cell id). Mcc+mnc+cid uniquely identifies the LTE cell, tac is optional.
  * mcc **required** `integer`: Mobile Country Code
  * mnc **required** `integer`: Mobile Network Code
  * nmr `array`: LTE Network measurements (Optional)
    * items [cell_lte_nmr](#cell_lte_nmr)
  * rsrp `integer`: Reference Signal Received Power = RSRP (dBm) (Optional, you must specify a value for this item when you specify a value for rsrq). Power less than -140dBm should be mapped to -140. Power greater than -44dBm should be mapped to -44.
  * rsrq `number`: Reference Signal Received Quality = RSRQ (dB) (Optional). Values less than -19.5dB should be mapped to -19.5, and values greater than -3dB should be mapped to -3dB.
  * ta `integer`: Timing Advance (Optional). Expressed in the units of 16*Ts (16 Basic time units) = 16/(15000*2048) seconds ~ 156meters. For reference see TS 36.213 and 36.211.
  * tac `integer`: Tracking Area Code (Optional)

### cell_lte_nmr
* cell_lte_nmr `object`: LTE Network measurement
  * cid `integer`: E-UTRA Cell Identifier (Optional)
  * earfcn **required** `integer`: Evolved Absolute Radio Frequency Channel
  * pci **required** `integer`: Physical Cell Identity
  * rsrp `integer`: Reference Signal Received Power = RSRP (dBm) (Optional, you must specify a value for this item when you specify a value for rsrq). Power less than -140dBm should be mapped to -140. Power greater than -44dBm should be mapped to -44.
  * rsrq `number`: Reference Signal Received Quality = RSRQ (dB) (Optional). Values less than -19.5dB should be mapped to -19.5, and values greater than -3dB should be mapped to -3dB.

### cell_tdscdma_locate
* cell_tdscdma_locate `object`: TD-SCDMA measurement
  * cid **required** `integer`: UTRAN Cell Identifier, 28 bits (12 bits RNC and 16 bits Cell id). Mcc+mnc+cid uniquely identifies the TDSCDMA cell, lac is optional.
  * lac `integer`: Location Area Code (Optional)
  * mcc **required** `integer`: Mobile Country Code
  * mnc **required** `integer`: Mobile Network Code
  * nmr `array`: Network measurements (Optional). Maximum of 8 distinct uarfcn frequencies.
    * items [cell_tdscdma_nmr](#cell_tdscdma_nmr)
  * ta `integer`: Timing advance (Optional). Round-Trip distance presented in the units of 4*c/7.68e6 ~156 meters. That is, the scaling factor is 4 times the chip length at chip rate of 7.68 Mchips/s. Note that at chip rates 1.28 Mchips/s and 3.84 Mchips/s you need to scale according to chip length of 7.68 Mchips/s, that is, multiply by 6 or 2 if needed.

### cell_tdscdma_nmr
* cell_tdscdma_nmr `object`: TD-SCDMA Network measurement
  * cellparams **required** `integer`: Cell Parameters ID (CDMA Spreading Code ID)
  * cid `integer`: Cell Identifier (uc-id) (Optional)
  * pathloss `integer`: UTRAN path loss (dB) (Optional, you must specify a value for this item when you specify a value for rscp).
  * rscp `integer`: Received Signal Code Power = RSCP (dBm) (Optional, you must specify a value for this item when you specify a value for pathloss). Power less than -120dBm should be mapped to -120. Power greater than -25dBm should be mapped to -25.
  * uarfcn **required** `integer`: Carrier frequency of a UTRA-TDD Serving Cell

### cell_wcdma_locate
* cell_wcdma_locate `object`: WCDMA measurement
  * cid **required** `integer`: UTRAN Cell Identifier, 28 bits (12 bits RNC and 16 bits Cell id). Mcc+mnc+cid uniquely identifies the WCDMA cell, lac is optional.
  * lac `integer`: Location Area Code (Optional)
  * mcc **required** `integer`: Mobile Country Code
  * mnc **required** `integer`: Mobile Network Code
  * nmr `array`: Network measurements (Optional). Maximum of 8 distinct uarfcndl frequencies.
    * items [cell_wcdma_nmr](#cell_wcdma_nmr)

### cell_wcdma_nmr
* cell_wcdma_nmr `object`: WCDMA Network measurement
  * cid `integer`: UTRAN Cell Identifier (uc-id) (Optional)
  * pathloss `integer`: UTRAN path loss (dB) (Optional).
  * psc **required** `integer`: Primary Scrambling Code (Primary CPICH, Primary Control Pilot Channel)
  * rscp `integer`: Received Signal Code Power = RSCP (dBm) (Optional). Power less than -120dBm should be mapped to -120. Power greater than -25dBm should be mapped to -25.
  * uarfcndl **required** `integer`: Downlink frequency of a UTRA-FDD Serving Cell

### client_info
* client_info `object`: Information about the client
  * firmware `string`: Device firmware version information
  * manufacturer **required** `string`: Manufacturer of the device (hardware)
  * model **required** `string`: Model of the device (hardware)
  * name **required** `string`: Name of the client software accessing the HERE API
  * platform `string`: Software platform information of the device, for example operating system name and version.
  * version **required** `string`: Version of the client software in format X.Y.Z, where X [0..255] is a major, Y [0..255] is a minor, and Z [0..65535] is a build version number. Increase the version/build number for each release of the client.

### observations_locate
* observations_locate `object`: Object wrapping the location data submitted in a request for a position. At least one gsm, wcdma, tdscdma, lte, cdma, or wlan elements is required. The elements must be unique within the request.
  * cdma `array`: CDMA cells
    * items [cell_cdma_locate](#cell_cdma_locate)
  * client [client_info](#client_info)
  * gsm `array`: GSM cells (GERAN)
    * items [cell_gsm_locate](#cell_gsm_locate)
  * lte `array`: LTE cells (E-UTRA, 4G)
    * items [cell_lte_locate](#cell_lte_locate)
  * tdscdma `array`: TD-SCDMA cell (UTRA-TDD, 3G UMTS TDD)
    * items [cell_tdscdma_locate](#cell_tdscdma_locate)
  * wcdma `array`: WCDMA cells (UTRA-FDD, 3G UMTS)
    * items [cell_wcdma_locate](#cell_wcdma_locate)
  * wlan `array`: WLAN access points
    * items [wlan_locate](#wlan_locate)

### position_locate
* position_locate `object`: Object containing information on a location where a measurement was taken.
  * accuracy **required** `number`: Uncertainty circle radius in meters (degree of confidence according to the 'confidence' parameter).
  * alt `integer`: Altitude in meters (referenced to the WGS-84 ellipsoid) negative or positive.
  * altaccuracy `integer`: Uncertainty of the altitude estimate in meters (degree of confidence according to the 'confidence' parameter).
  * lat **required** `number`: Latitude in WGS-84 format, decimal representation ranging from -90 to 90.
  * lng **required** `number`: Longitude in WGS-84 format, decimal representation ranging from -180 to 180.

### response_error
* response_error `object`: Object wrapper for the error response to a request.
  * error **required** `object`: Object containing information about the error that happened
    * code **required** `integer`: Same as the HTTP response status code
    * description `string`: More detailed message
    * statusMessage **required** `string`: Same as the HTTP status message

### response_success_locate
* response_success_locate `object`: Object wrapper for the response to a location request.
  * location **required** [position_locate](#position_locate)

### wlan_locate
* wlan_locate `object`: WLAN measurement
  * mac **required** `string`: The MAC address of the WLAN access point. MAC-48 address with colon (:) or hyphen (-) separators, upper or lower case hex digits. Note that if the SSID contains postfix "_nomap", the AP should not be used for positioning. For privacy reasons positioning based on a single WLAN AP is not possible; there has to be at least one other matching wlan or cell. Alternative you can allow fallbacks to less accurate single WLAN AP location estimates by using the setting fallback=singleWifi.
  * powrx `integer`: Received signal level (dBm) at the terminal (Optional)


