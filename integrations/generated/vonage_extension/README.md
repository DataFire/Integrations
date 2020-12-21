# @datafire/vonage_extension

Client library for Extension API

## Installation and Usage
```bash
npm install --save @datafire/vonage_extension
```
```js
let vonage_extension = require('@datafire/vonage_extension').create({
  bearerAuth: ""
});

.then(data => {
  console.log(data);
});
```

## Description

The Vonage Business Cloud Extension API enables you to retrieve information about extensions.

Your application must subscribe to the Provisioning API suite to use this API.


## Actions

### ExtensionCtrl.getAccountExtensions
Get account extensions data by account ID


```js
vonage_extension.ExtensionCtrl.getAccountExtensions({
  "account_id": ""
}, context)
```

#### Input
* input `object`
  * account_id **required** `string`: The Vonage Business Cloud account ID
  * page_size `number`: Number of records per page
  * page `number`: Current page number
  * location_id `number`: Filter by location id
  * phone_number `string`: Filter by phone number
  * login_name `string`: Filter by login name
  * email `string`: Filter by email address

#### Output
* output [EndUserRouteHalResponse](#enduserroutehalresponse)

### ExtensionCtrl.getAccountExtensionByID
Get extension data by account ID and extension number


```js
vonage_extension.ExtensionCtrl.getAccountExtensionByID({
  "account_id": "",
  "extension_number": 0
}, context)
```

#### Input
* input `object`
  * account_id **required** `string`: The Vonage Business Cloud account ID
  * extension_number **required** `number`: The extension number

#### Output
* output [EndUserRouteHalResponse](#enduserroutehalresponse)



## Definitions

### BasicUser
* BasicUser `object`
  * email `string`: Email address of the user
  * first_name `string`: First name of the user
  * last_name `string`: Last name of the user
  * login_name `string`: Login name of the user

### DID
* DID `object`
  * custom_tag `string`: Custom tag associated with the phone number
  * phone_number `string`: Phone number

### DetailedInvalidParam
* DetailedInvalidParam `object`
  * name `string`: Invalid property name
  * reason `string`: Invalid property reason

### EndUserRoute
* EndUserRoute `object`
  * block_caller_id `boolean`: Block Caller ID status of the extension
  * caller_id `string`: Caller ID of the extension
  * dids `array`: Collection of phone numbers assigned to the extension
    * items [DID](#did)
  * dnd_enabled `boolean`: Do Not Disturb status of the extension
  * extension_handsets `array`: Collection of handsets assigned to the extension
    * items [Line](#line)
  * extension_number `string`: Extension number
  * location_id `number`: Unique identifier of the assigned location
  * user [BasicUser](#basicuser)
  * vtt_enabled `boolean`: Voicemail transcription status of the location

### EndUserRouteEmbeddedObject
* EndUserRouteEmbeddedObject `object`
  * data [EndUserRoute](#enduserroute)

### EndUserRouteHalResponse
* EndUserRouteHalResponse `object`
  * _embedded [EndUserRouteEmbeddedObject](#enduserrouteembeddedobject)
  * _links [Links](#links)
  * page `number`: Current page number
  * page_size `number`: Number of records per page
  * total_items `number`: Total number of records
  * total_pages `number`: Total number of pages

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

### Line
* Line `object`
  * handset_name `string`: Name of the handset
  * sip_id `string`: SIP identifier of the handset

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


