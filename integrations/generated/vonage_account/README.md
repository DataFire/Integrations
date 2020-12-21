# @datafire/vonage_account

Client library for Account API

## Installation and Usage
```bash
npm install --save @datafire/vonage_account
```
```js
let vonage_account = require('@datafire/vonage_account').create({
  bearerAuth: ""
});

.then(data => {
  console.log(data);
});
```

## Description

The Vonage Business Cloud Account API enables you to retrieve information about accounts.

Your application must subscribe to the Provisioning API suite to use this API.


## Actions

### AccountCtrl.getAccountServicesByAccountID
Get account data by ID


```js
vonage_account.AccountCtrl.getAccountServicesByAccountID({
  "account_id": 0
}, context)
```

#### Input
* input `object`
  * account_id **required** `number`: The Vonage Business Cloud account ID

#### Output
* output [AccountHalResponse](#accounthalresponse)

### AccountCtrl.getLocationsByAccountID
Get account locations data by account ID


```js
vonage_account.AccountCtrl.getLocationsByAccountID({
  "account_id": 0
}, context)
```

#### Input
* input `object`
  * account_id **required** `number`: The Vonage Business Cloud account ID

#### Output
* output [LocationsHalResponse](#locationshalresponse)

### AccountCtrl.getLocationByID
Get location data by account ID and location ID


```js
vonage_account.AccountCtrl.getLocationByID({
  "account_id": 0,
  "location_id": 0
}, context)
```

#### Input
* input `object`
  * account_id **required** `number`: The Vonage Business Cloud account ID
  * location_id **required** `number`: The Vonage Business Cloud location ID

#### Output
* output [LocationHalResponse](#locationhalresponse)



## Definitions

### Account
* Account `object`
  * address [Address](#address)
  * id `number`: Unique identifier of the account
  * name `string`: Name of the account
  * status `string`: Status of the account

### AccountEmbeddedObject
* AccountEmbeddedObject `object`: Account object
  * data [Account](#account)

### AccountHalResponse
* AccountHalResponse `object`
  * _embedded [AccountEmbeddedObject](#accountembeddedobject)
  * _links [Links](#links)
  * page `number`: Current page number
  * page_size `number`: Number of records per page
  * total_items `number`: Total number of records
  * total_pages `number`: Total number of pages

### Address
* Address `object`
  * address_1 `string`: Street portion of the address
  * address_2 `string`: Additional address information
  * city `string`: City name
  * country `string`: Country code
  * postal_code `string`: Postal code
  * state `string`: State/Province code

### AddressWithTimeZone
* AddressWithTimeZone `object`
  * address_1 `string`: Street portion of the address
  * address_2 `string`: Additional address information
  * city `string`: City name
  * country `string`: Country code
  * postal_code `string`: Postal code
  * state `string`: State/Province code
  * time_zone `string`: Time zone

### FirstHref
* FirstHref `object`: URL to the first page of records
  * href `string`

### LastHref
* LastHref `object`: URL to the last page of records
  * href `string`

### Links
* Links `object`
  * first [FirstHref](#firsthref)
  * last [LastHref](#lasthref)
  * next [NextHref](#nexthref)
  * prev [PrevHref](#prevhref)
  * self [SelfHref](#selfhref)

### Location
* Location `object`
  * address [AddressWithTimeZone](#addresswithtimezone)
  * id `number`: Unique identifier of the location
  * name `string`: Name of the location

### LocationEmbeddedObject
* LocationEmbeddedObject `object`: Location object
  * data [Location](#location)

### LocationHalResponse
* LocationHalResponse `object`
  * _embedded [LocationEmbeddedObject](#locationembeddedobject)
  * _links [Links](#links)
  * page `number`: Current page number
  * page_size `number`: Number of records per page
  * total_items `number`: Total number of records
  * total_pages `number`: Total number of pages

### LocationsEmbeddedObject
* LocationsEmbeddedObject `object`: Collection of location objects
  * data `array`
    * items [Location](#location)

### LocationsHalResponse
* LocationsHalResponse `object`
  * _embedded [LocationsEmbeddedObject](#locationsembeddedobject)
  * _links [Links](#links)
  * page `number`
  * page_size `number`
  * total_items `number`
  * total_pages `number`

### NextHref
* NextHref `object`: URL to the next page of records
  * href `string`

### PrevHref
* PrevHref `object`: URL to the previous page of records
  * href `string`

### SelfHref
* SelfHref `object`: URL to the current page of records
  * href `string`


