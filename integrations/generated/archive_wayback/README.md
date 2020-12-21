# @datafire/archive_wayback

Client library for Wayback API

## Installation and Usage
```bash
npm install --save @datafire/archive_wayback
```
```js
let archive_wayback = require('@datafire/archive_wayback').create();

.then(data => {
  console.log(data);
});
```

## Description

API for Internet Archive's Wayback Machine

## Actions

### wayback.v1.available.get



```js
archive_wayback.wayback.v1.available.get({
  "url": ""
}, context)
```

#### Input
* input `object`
  * url **required** `string`: A single URL to query.
  * timestamp `string`: Timestamp requested in ISO 8601 format. The following formats are acceptable:
  * callback `string`: Specifies a JavaScript function func, for a JSON-P response. When provided, results are wrapped as `callback(data)`, and the returned MIME type is application/javascript. This causes the caller to automatically run the func with the JSON results as its argument.
  * timeout `number`: Timeout is the maximum number of seconds to wait for the availability API to get its underlying results from the CDX server. The default value is 5.0.
  * closest `string` (values: either, before, after): The direction specifies whether to match archived timestamps that are before the provided one, after, or the default either (closest in either direction). Must be before, after, or either. May be overidden by individual requests.
  * status_code `integer` (values: 200, 201, 202, 203, 204, 205, 206, 300, 301, 302, 303, 304, 305, 306, 307, 308, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 421, 426, 428, 429, 431, 500, 501, 502, 503, 504, 505, 506, 507, 511): HTTP status codes to filter by. Only results with these codes will be returned
  * tag `string`: The optional tag can have any value, and is returned with the results; it can be used to help collate input and output values.

#### Output
* output [AvailabilityResults](#availabilityresults)

### wayback.v1.available.post



```js
archive_wayback.wayback.v1.available.post({
  "url": ""
}, context)
```

#### Input
* input `object`
  * url **required** `string`: A single URL to query.
  * timestamp `string`: Timestamp requested in ISO 8601 format. The following formats are acceptable:
  * callback `string`: Specifies a JavaScript function func, for a JSON-P response. When provided, results are wrapped as `callback(data)`, and the returned MIME type is application/javascript. This causes the caller to automatically run the func with the JSON results as its argument.
  * timeout `number`: Timeout is the maximum number of seconds to wait for the availability API to get its underlying results from the CDX server. The default value is 5.0.
  * closest `string` (values: either, before, after): The direction specifies whether to match archived timestamps that are before the provided one, after, or the default either (closest in either direction). Must be before, after, or either. May be overidden by individual requests.
  * status_code `integer` (values: 200, 201, 202, 203, 204, 205, 206, 300, 301, 302, 303, 304, 305, 306, 307, 308, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 421, 426, 428, 429, 431, 500, 501, 502, 503, 504, 505, 506, 507, 511): HTTP status codes to filter by. Only results with these codes will be returned
  * tag `string`: The optional tag can have any value, and is returned with the results; it can be used to help collate input and output values.
  * body [AvailabilityRequests](#availabilityrequests)

#### Output
* output [AvailabilityResults](#availabilityresults)



## Definitions

### ArchivedResult
* ArchivedResult `object`
  * snapshot **required** [Snapshot](#snapshot)
  * tag `string`: The user-supplied tag for use in collation
  * timestamp **required** `string`: The _intepreted_ timestamp requested, in [RFC 3339](http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html) format
  * url **required** `string`: The URL requested

### AvailabilityRequest
* AvailabilityRequest `object`
  * closest `string` (values: either, after, before): The direction to find the closest snapshot to the requested timestamp
  * tag `string`: A user-supplied tag, used for collation
  * timestamp `string`: Timestamp requested in ISO 8601 format. The following formats are acceptable: - YYYY - YYYY-MM - YYYY-MM-DD - YYYY-MM-DDTHH:mm:SSz - YYYY-MM-DD:HH:mm+00:00
  * url **required** `string`: The URL requested

### AvailabilityRequests
* AvailabilityRequests `array`
  * items [AvailabilityRequest](#availabilityrequest)

### AvailabilityResults
* AvailabilityResults `object`
  * results **required** `array`: A list of results
    * items [ArchivedResult](#archivedresult)

### Error
* Error `object`
  * code `integer`
  * message `string`

### Snapshot
* Snapshot `object`
  * status `integer`: The HTTP status of the URL requested
  * timestamp `string`: The timestamp of the snapshot in [RFC 3339](http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html) format
  * url `string`: The URL requested


