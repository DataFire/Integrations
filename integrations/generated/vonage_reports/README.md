# @datafire/vonage_reports

Client library for Reports API

## Installation and Usage
```bash
npm install --save @datafire/vonage_reports
```
```js
let vonage_reports = require('@datafire/vonage_reports').create({
  bearerAuth: ""
});

.then(data => {
  console.log(data);
});
```

## Description

The Vonage Business Cloud Reports API enables you to retrieve call logs for your account.

Your application must subscribe to the Reports API suite to use this API.


## Actions

### getCallLogs
Retrieve call logs for your account


```js
vonage_reports.getCallLogs({
  "account_id": "",
  "start:gte": "",
  "start:lte": "",
  "page_size": 0,
  "page": 0
}, context)
```

#### Input
* input `object`
  * account_id **required** `string`: The Vonage Business Cloud account ID
  * start:gte **required** `string`: Filter records by start date (greater equal or equal to)
  * start:lte **required** `string`: Filter records by start date (less equal or equal to)
  * end:gte `string`: Filter records by end date (greater equal or equal to)
  * end:lte `string`: Filter records by end date (less equal or equal to)
  * page_size **required** `number`: Number of records per page
  * page **required** `number`: Current page number
  * to `string`: Filter by called number
  * from `string`: Filter by source number
  * source_user `string`: Filter by source user
  * destination_user `string`: Filter by destination user
  * direction `string` (values: Inbound, Outbound): Filter by call direction.

#### Output
* output [CallLogsHalResponse](#calllogshalresponse)



## Definitions

### CallLog
* CallLog `object`
  * charge `number`: Amount charged for the call
  * destination_device_name `string`: Name of the destination device of the call
  * destination_extension `number`: Destination extension of the call
  * destination_sip_id `string`: SIP ID of the destination device of the call
  * destination_user `string`: Destination user of the call
  * destination_user_full_name `string`: Full name of the destination user of the call
  * direction `string`: Direction of the call
  * end `string`: End time of the call
  * from `string`: Source number of the call
  * id `string`: Unique identifier of the call
  * in_network `boolean`: Indicates if call was on/off network
  * international `boolean`: Indicates if call was international
  * length `number`: Duration of the call in seconds
  * rate `number`: Rate charged for the call
  * recorded `boolean`: Indicates if call was recorded
  * result `string`: Result of the call
  * source_device_name `string`: Name of the source device of the call
  * source_extension `number`: Source extension of the call
  * source_sip_id `string`: SIP ID of the source device of the call
  * source_user `string`: Source user of the call
  * source_user_full_name `string`: Full name of the source user of the call
  * start `string`: Start time of the call
  * to `string`: Destination number of the call

### CallLogsEmbeddedObject
* CallLogsEmbeddedObject `object`
  * call_logs `array`
    * items [CallLog](#calllog)

### CallLogsHalResponse
* CallLogsHalResponse `object`
  * _embedded [CallLogsEmbeddedObject](#calllogsembeddedobject)
  * _links [Links](#links)
  * page `number`: Current page number
  * page_size `number`: Number of records per page
  * total_items `number`: Total number of records
  * total_page `number`: Total number of pages

### DetailedInvalidParam
* DetailedInvalidParam `object`
  * name `string`: Invalid property name
  * reason `string`: Invalid property reason

### ErrorResponse
* ErrorResponse `object`
  * msg `string`: Error message
  * status `number`: Http Response Code

### FirstHref
* FirstHref `object`: URL to the first page of records
  * href `string`

### LastHref
* LastHref `object`: URL to the last page of records
  * href `string`

### Links
* Links `object`
  * first [FirstHref](#firsthref)
  * next [NextHref](#nexthref)
  * prev [PrevHref](#prevhref)
  * self [SelfHref](#selfhref)

### NextHref
* NextHref `object`: URL to the next page of records
  * href `string`

### PrevHref
* PrevHref `object`: URL to the previous page of records
  * href `string`

### SelfHref
* SelfHref `object`: URL to the current page of records
  * href `string`

### ValidationErrorsResponse
* ValidationErrorsResponse `object`
  * instance `string`: Error Track ID
  * invalid_parameters `array`: Invalid parameters and their reason for failing
    * items [DetailedInvalidParam](#detailedinvalidparam)
  * status `number`: Error status code
  * title `string`: Error title


