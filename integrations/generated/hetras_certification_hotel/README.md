# @datafire/hetras_certification_hotel

Client library for hetras Hotel API Version 0

## Installation and Usage
```bash
npm install --save datafire @datafire/hetras_certification_hotel
```

```js
let datafire = require('datafire');
let hetras_certification_hotel = require('@datafire/hetras_certification_hotel').create();

hetras_certification_hotel.Hotels_GetHotels({}).then(data => {
  console.log(data);
})
```

## Description


## Actions
### Hotels_GetHotels
Load the details about all the hotels your application has access to.


```js
hetras_certification_hotel.Hotels_GetHotels({
  "App-Id": "",
  "App-Key": ""
}, context)
```

#### Parameters
* App-Id (string) **required** - Application identifier
* App-Key (string) **required** - Application key.

### Hotels_GetHotel
Load the details about the specified hotel.


```js
hetras_certification_hotel.Hotels_GetHotel({
  "App-Id": "",
  "App-Key": "",
  "hotelId": 0
}, context)
```

#### Parameters
* App-Id (string) **required** - Application identifier
* App-Key (string) **required** - Application key.
* hotelId (integer) **required**

### Codes_GetCodes
With this call you can find codes for a hotel by type or code. By default and without any filter criteria
            defined it will return you all available codes.


```js
hetras_certification_hotel.Codes_GetCodes({
  "App-Id": "",
  "App-Key": "",
  "hotelId": 0
}, context)
```

#### Parameters
* App-Id (string) **required** - Application identifier
* App-Key (string) **required** - Application key.
* hotelId (integer) **required** - The hotel id you are trying to find codes for.
* code (string) - Return all results matching the specified code. A code is unique in combination with the type
* type (string) - Return all codes for the specified type

### Codes_GetCode
Read the details about a specific code available for the defined hotel.


```js
hetras_certification_hotel.Codes_GetCode({
  "App-Id": "",
  "App-Key": "",
  "hotelId": 0,
  "id": ""
}, context)
```

#### Parameters
* App-Id (string) **required** - Application identifier
* App-Key (string) **required** - Application key.
* hotelId (integer) **required** - The hotel id the code available for.
* id (string) **required** - The code identifier you want to see details for.

### RatePlans_GetRateplans
With this call you can find rateplans for a hotel by different filters. By default and without any filter criteria
            defined it will return you all active rateplans.


```js
hetras_certification_hotel.RatePlans_GetRateplans({
  "App-Id": "",
  "App-Key": "",
  "hotelId": 0
}, context)
```

#### Parameters
* App-Id (string) **required** - Application identifier
* App-Key (string) **required** - Application key.
* hotelId (integer) **required** - The hotel id you are trying to find rateplans for.
* sellingStatus (string) - Specify which rateplans to return. If you do not specify a value you will by default get active
* commissionable (boolean) - Return all rateplans having commisionable status
* group (string) - Return all rateplans belonging to the specified rateplan group
* baseRateplan (string) - Return all rateplans having the specified rateplan as base rateplan
* channelGroup (string) - Return all rateplans that are sold through at least one channel out of the specified channel group
* channelCode (string) - Return all rateplans sold through the specified channel
* marketCodes (array) - Return all rateplans having one of the specified values as a market code
* roomTypes (array) - Return all rateplans by which at least one of the specified room types are sold
* includedServices (array) - Return all rateplans having at least one of the specified services included
* skip (integer) - Amount of items to skip.
* top (integer) - Amount of items to select.
* inlinecount (string) - Return total number of items for a given filter criteria.

### RatePlans_GetRateplansCount
Get the count of all rateplans in the hotel matching the given filter criteria.


```js
hetras_certification_hotel.RatePlans_GetRateplansCount({
  "App-Id": "",
  "App-Key": "",
  "hotelId": 0
}, context)
```

#### Parameters
* App-Id (string) **required** - Application identifier
* App-Key (string) **required** - Application key.
* hotelId (integer) **required** - The hotel you are counting the rateplans for.
* sellingStatus (string) - Specify which rateplans to return. If you do not specify a value you will by default get active
* commissionable (boolean) - Return all rateplans having commisionable status
* group (string) - Return all rateplans belonging to the specified rateplan group
* baseRateplan (string) - Return all rateplans having the specified rateplan as base rateplan
* channelGroup (string) - Return all rateplans that are sold through at least one channel out of the specified channel group
* channelCode (string) - Return all rateplans sold through the specified channel
* marketCodes (array) - Return all rateplans having one of the specified values as a market code
* roomTypes (array) - Return all rateplans by which at least one of the specified room types are sold
* includedServices (array) - Return all rateplans having at least one of the specified services included

### RatePlans_GetRateplan
Read the details about a specific rateplan for the defined hotel.


```js
hetras_certification_hotel.RatePlans_GetRateplan({
  "App-Id": "",
  "App-Key": "",
  "hotelId": 0,
  "rateplanCode": ""
}, context)
```

#### Parameters
* App-Id (string) **required** - Application identifier
* App-Key (string) **required** - Application key.
* hotelId (integer) **required** - The hotel id the rateplan belongs to.
* rateplanCode (string) **required** - The code of the rateplan you want to see details for.

### RatePlans_GetRates
With this call you can read the daily rates setup including the cancellation policy and minimum guarantee per day for the
            specified rateplan. You can specify a timeperiod to read the daily rates for. The rateplan needs to be active for at least
            one business day in the defined time period and have rates loaded.


```js
hetras_certification_hotel.RatePlans_GetRates({
  "App-Id": "",
  "App-Key": "",
  "hotelId": 0,
  "rateplanCode": "",
  "from": "",
  "to": ""
}, context)
```

#### Parameters
* App-Id (string) **required** - Application identifier
* App-Key (string) **required** - Application key.
* hotelId (integer) **required** - The hotel id the rateplan belongs to.
* rateplanCode (string) **required** - The code of the rateplan you want to see details for.
* expand (string) - You can expand the supplements per room type on demand. By default they are not shown.
* from (string) **required** - Defines the last business day you would like to get rates for. The maximum time span between <i>from</i>´and <i>to</i>
* to (string) **required** - Defines the first business day you would like to get rates for.
* skip (integer) - Amount of items to skip.
* top (integer) - Amount of items to select.
* inlinecount (string) - Return total number of items for a given filter criteria.

### RatePlans_PatchRates
The hetras API is using this <a href="https://developer.hetras.com/docs/patch" onfocus="this.blur()" target="_blank">Patch Specification</a>
            to partially update an existing resource. Currently this call only allows to set the base price for non-derived rateplans if the rateplan
            is active and already loaded for the specified time period.
            <br /><br />
            A request example:<br /><pre>
            [
              {
                "op": "replace", "path": "/base_price", "value": 120.00
              }
            ]
            </pre><br />
            For more details on how the API responds to errors please check our documentation on 
            <a href="https://developer.hetras.com/docs/errors/" onfocus="this.blur()">Error Handling</a>.<br />


```js
hetras_certification_hotel.RatePlans_PatchRates({
  "App-Id": "",
  "App-Key": "",
  "hotelId": 0,
  "rateplanCode": "",
  "patchRequest": [],
  "from": "",
  "to": ""
}, context)
```

#### Parameters
* App-Id (string) **required** - Application identifier
* App-Key (string) **required** - Application key.
* hotelId (integer) **required** - The hotel id the rateplan belongs to.
* rateplanCode (string) **required** - The code of the rateplan you want to update the daily rate details for.
* patchRequest (array) **required**
* from (string) **required** - Defines the last business day you would like to get rates for. The maximum time span between <i>from</i>´and <i>to</i>
* to (string) **required** - Defines the first business day you would like to get rates for.

### RatePlans_GetRatesCount
Get the count of all active and loaded daily rates for the defined rateplan in a specified time period.


```js
hetras_certification_hotel.RatePlans_GetRatesCount({
  "App-Id": "",
  "App-Key": "",
  "hotelId": 0,
  "rateplanCode": "",
  "from": "",
  "to": ""
}, context)
```

#### Parameters
* App-Id (string) **required** - Application identifier
* App-Key (string) **required** - Application key.
* hotelId (integer) **required** - The hotel id the rateplan belongs to.
* rateplanCode (string) **required** - The code of the rateplan you want to count daily rates for.
* from (string) **required** - Defines the last business day you would like to get rates for. The maximum time span between <i>from</i>´and <i>to</i>
* to (string) **required** - Defines the first business day you would like to get rates for.

### RatePlans_GetRate
Read the setup of the daily rate for the defined rateplan for that specific business day.


```js
hetras_certification_hotel.RatePlans_GetRate({
  "App-Id": "",
  "App-Key": "",
  "hotelId": 0,
  "rateplanCode": "",
  "businessDay": ""
}, context)
```

#### Parameters
* App-Id (string) **required** - Application identifier
* App-Key (string) **required** - Application key.
* hotelId (integer) **required** - The hotel id the rateplan belongs to.
* rateplanCode (string) **required** - The code of the rateplan you want to see details for.
* businessDay (string) **required** - The business day you want to get the rate setup for.

### RatePlans_PatchRate
The hetras API is using this <a href="https://developer.hetras.com/docs/patch" onfocus="this.blur()" target="_blank">Patch Specification</a>
            to partially update an existing resource. Currently this call only allows to set the base price for non-derived rateplans if the rateplan
            is active and already loaded for the specified business day.
            <br /><br />
            A request example:<br /><pre>
            [
              {
                "op": "replace", "path": "/base_price", "value": 120.00
              }
            ]
            </pre><br />
            For more details on how the API responds to errors please check our documentation on 
            <a href="https://developer.hetras.com/docs/errors/" onfocus="this.blur()">Error Handling</a>.<br />


```js
hetras_certification_hotel.RatePlans_PatchRate({
  "App-Id": "",
  "App-Key": "",
  "hotelId": 0,
  "rateplanCode": "",
  "businessDay": "",
  "patchRequest": []
}, context)
```

#### Parameters
* App-Id (string) **required** - Application identifier
* App-Key (string) **required** - Application key.
* hotelId (integer) **required** - The hotel id the rateplan belongs to.
* rateplanCode (string) **required** - The code of the rateplan you want to update the daily rate details for.
* businessDay (string) **required** - The business day of the daily rate you want to update.
* patchRequest (array) **required**

### RoomTypes_GetRoomTypes
With this call you can load the details about a all available room types for the specified hotel.


```js
hetras_certification_hotel.RoomTypes_GetRoomTypes({
  "App-Id": "",
  "App-Key": "",
  "hotelId": 0
}, context)
```

#### Parameters
* App-Id (string) **required** - Application identifier
* App-Key (string) **required** - Application key.
* hotelId (integer) **required** - The hotel id the room type belongs to.

### RoomTypes_GetRoomType
With this call you can load the details about a specific room type in the hotel.


```js
hetras_certification_hotel.RoomTypes_GetRoomType({
  "App-Id": "",
  "App-Key": "",
  "hotelId": 0,
  "code": ""
}, context)
```

#### Parameters
* App-Id (string) **required** - Application identifier
* App-Key (string) **required** - Application key.
* hotelId (integer) **required** - The hotel id the room type belongs to.
* code (string) **required** - The code of the room type you want to see details for.

### Rooms_GetRooms
Find all rooms for the hotel that match the specified filter criteria. The filtering will be done based on the current state of
            the rooms.


```js
hetras_certification_hotel.Rooms_GetRooms({
  "App-Id": "",
  "App-Key": "",
  "hotelId": 0
}, context)
```

#### Parameters
* App-Id (string) **required** - Application identifier
* App-Key (string) **required** - Application key.
* hotelId (integer) **required** - The hotel you are trying to find rooms for.
* occupancy (string) - Return results only for rooms that have the given frontdesk ocuppancy status.
* conditions (array) - Return results only for rooms that have the given room condition status.
* maintenances (array) - Return results only for rooms that have the given maintenance status.
* roomTypes (array) - Return result only for rooms for the given room types. Allows to pass a comma-separated list of room types.
* amenities (array) - Return result only for rooms having all of the given amenities. You can provide a comma seperated list of 
* views (array) - Return result only for rooms having at least one of the specified views. You can provide a comma seperated list of 
* locations (array) - Return result only for rooms having at least one of the specified locations. You can provide a comma seperated list of 
* skip (integer) - Amount of items to skip.
* top (integer) - Amount of items to select.
* inlinecount (string) - Return total number of items for a given filter criteria.

### Rooms_GetRoomsCount
Get the count of all rooms in the hotel matching the given filter criteria.


```js
hetras_certification_hotel.Rooms_GetRoomsCount({
  "App-Id": "",
  "App-Key": "",
  "hotelId": 0
}, context)
```

#### Parameters
* App-Id (string) **required** - Application identifier
* App-Key (string) **required** - Application key.
* hotelId (integer) **required** - The hotel you are counting the rooms for.
* occupancy (string) - Return results only for rooms that have the given frontdesk ocuppancy status.
* conditions (array) - Return results only for rooms that have the given room condition status.
* maintenances (array) - Return results only for rooms that have the given maintenance status.
* roomTypes (array) - Return result only for rooms for the given room types. Allows to pass a comma-separated list of room types.
* amenities (array) - Return result only for rooms having all of the given amenities. You can provide a comma seperated list of 
* views (array) - Return result only for rooms having at least one of the specified views. You can provide a comma seperated list of 
* locations (array) - Return result only for rooms having at least one of the specified locations. You can provide a comma seperated list of 

### Rooms_GetAvailableRooms
Request available rooms using a given criteria.


```js
hetras_certification_hotel.Rooms_GetAvailableRooms({
  "App-Id": "",
  "App-Key": "",
  "hotelId": 0,
  "from": "",
  "to": ""
}, context)
```

#### Parameters
* App-Id (string) **required** - Application identifier
* App-Key (string) **required** - Application key.
* hotelId (integer) **required** - The hotel you are looking for available rooms.
* from (string) **required** - Rooms returned will not be assigned to a reservation or be under maintenance between this date
* to (string) **required** - Rooms returned will not be assigned to a reservation or be under maintenance between the specified
* adults (string) - Specifies number of adults the returned rooms will have to be able to house. The default value is 1.
* includeOutOfService (boolean) - Should rooms that are set OutOfService in the defined time period be returned as available. By default
* roomTypes (array) - Return result only for rooms for the given room types. Allows to pass a comma-separated list of room types.
* amenities (array) - Return result only for rooms having all of the given amenities. You can provide a comma seperated list of 
* views (array) - Return result only for rooms having at least one of the specified views. You can provide a comma seperated list of 
* locations (array) - Return result only for rooms having at least one of the specified locations. You can provide a comma seperated list of 
* skip (integer) - Amount of items to skip.
* top (integer) - Amount of items to select.
* inlinecount (string) - Return total number of items for a given filter criteria.

### Rooms_GetRoom
With this call you can load the details about a specific room in the hotel. It will show you the current status of the room.


```js
hetras_certification_hotel.Rooms_GetRoom({
  "App-Id": "",
  "App-Key": "",
  "hotelId": 0,
  "roomNumber": ""
}, context)
```

#### Parameters
* App-Id (string) **required** - Application identifier
* App-Key (string) **required** - Application key.
* hotelId (integer) **required** - The hotel id the room belongs to.
* roomNumber (string) **required** - The room number you want to see details for.

### Rooms_PatchRoom
The hetras API is using this <a href="https://developer.hetras.com/docs/patch" onfocus="this.blur()" target="_blank">Patch Specification</a>
            to partially update an existing resource. Currently this call only allows to modify condition and housekeeping occupancy status of the room.
            <br /><br />
            A request example:<br /><pre>
            [
              {
                "op": "replace", "path": "/status/condition", "value": "CleanNotInspected"
              }, {
                "op": "replace", "path": "/status/housekeeping_occupancy", "value": "Vacant"
              }
            ]
            </pre><br />
            For more details on how the API responds to errors please check our documentation on 
            <a href="https://developer.hetras.com/docs/errors/" onfocus="this.blur()">Error Handling</a>.<br />


```js
hetras_certification_hotel.Rooms_PatchRoom({
  "App-Id": "",
  "App-Key": "",
  "hotelId": 0,
  "roomNumber": "",
  "patchRequest": []
}, context)
```

#### Parameters
* App-Id (string) **required** - Application identifier
* App-Key (string) **required** - Application key.
* hotelId (integer) **required** - The hotel id the room belongs to.
* roomNumber (string) **required** - The room number of the room you would like to update.
* patchRequest (array) **required**

