# @datafire/hetras_certification_hotel

Client library for hetras Hotel API Version 0

## Installation and Usage
```bash
npm install --save @datafire/hetras_certification_hotel
```
```js
let hetras_certification_hotel = require('@datafire/hetras_certification_hotel').create();

hetras_certification_hotel.Hotels_GetHotels({
  "App-Id": "",
  "App-Key": ""
}).then(data => {
  console.log(data);
});
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

#### Input
* input `object`
  * App-Id **required** `string`: Application identifier
  * App-Key **required** `string`: Application key.

#### Output
* output `array`
  * items [Hotel](#hotel)

### Hotels_GetHotel
Load the details about the specified hotel.


```js
hetras_certification_hotel.Hotels_GetHotel({
  "App-Id": "",
  "App-Key": "",
  "hotelId": 0
}, context)
```

#### Input
* input `object`
  * App-Id **required** `string`: Application identifier
  * App-Key **required** `string`: Application key.
  * hotelId **required** `integer`

#### Output
* output [Hotel](#hotel)

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

#### Input
* input `object`
  * App-Id **required** `string`: Application identifier
  * App-Key **required** `string`: Application key.
  * hotelId **required** `integer`: The hotel id you are trying to find codes for.
  * code `string`: Return all results matching the specified code. A code is unique in combination with the type
  * type `string` (values: GuestRequest, RequestDietary, VIPStatus, ReasonForRateChange, Regrets, MarketSegments, SourceOfBusiness, LoyaltyProgram, CancellationReason, AccountType, AccountRank, VIPLevel, Title, ContactFunction, Territory, CorrespondenceType, ExternalProgramType, RevenueBucket, AdditionalRevenueBucket, AdditionalStatisticsBuckets, MealPeriod, BillingCycle, ReminderCycle, MajorMarketSegments, DocumentType, ActivityType, ReservationLabels): Return all codes for the specified type

#### Output
* output [CodesListResponse](#codeslistresponse)

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

#### Input
* input `object`
  * App-Id **required** `string`: Application identifier
  * App-Key **required** `string`: Application key.
  * hotelId **required** `integer`: The hotel id the code available for.
  * id **required** `string`: The code identifier you want to see details for.

#### Output
* output [CodeFullEntry](#codefullentry)

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

#### Input
* input `object`
  * App-Id **required** `string`: Application identifier
  * App-Key **required** `string`: Application key.
  * hotelId **required** `integer`: The hotel id you are trying to find rateplans for.
  * sellingStatus `string` (values: Active, Inactive, All): Specify which rateplans to return. If you do not specify a value you will by default get active
  * commissionable `boolean`: Return all rateplans having commisionable status
  * group `string`: Return all rateplans belonging to the specified rateplan group
  * baseRateplan `string`: Return all rateplans having the specified rateplan as base rateplan
  * channelGroup `string`: Return all rateplans that are sold through at least one channel out of the specified channel group
  * channelCode `string`: Return all rateplans sold through the specified channel
  * marketCodes `array`: Return all rateplans having one of the specified values as a market code
  * roomTypes `array`: Return all rateplans by which at least one of the specified room types are sold
  * includedServices `array`: Return all rateplans having at least one of the specified services included
  * skip `integer`: Amount of items to skip.
  * top `integer`: Amount of items to select.
  * inlinecount `string` (values: None, AllPages): Return total number of items for a given filter criteria.

#### Output
* output [RateplansListResponse](#rateplanslistresponse)

### RatePlans_GetRateplansCount
Get the count of all rateplans in the hotel matching the given filter criteria.


```js
hetras_certification_hotel.RatePlans_GetRateplansCount({
  "App-Id": "",
  "App-Key": "",
  "hotelId": 0
}, context)
```

#### Input
* input `object`
  * App-Id **required** `string`: Application identifier
  * App-Key **required** `string`: Application key.
  * hotelId **required** `integer`: The hotel you are counting the rateplans for.
  * sellingStatus `string` (values: Active, Inactive, All): Specify which rateplans to return. If you do not specify a value you will by default get active
  * commissionable `boolean`: Return all rateplans having commisionable status
  * group `string`: Return all rateplans belonging to the specified rateplan group
  * baseRateplan `string`: Return all rateplans having the specified rateplan as base rateplan
  * channelGroup `string`: Return all rateplans that are sold through at least one channel out of the specified channel group
  * channelCode `string`: Return all rateplans sold through the specified channel
  * marketCodes `array`: Return all rateplans having one of the specified values as a market code
  * roomTypes `array`: Return all rateplans by which at least one of the specified room types are sold
  * includedServices `array`: Return all rateplans having at least one of the specified services included

#### Output
* output [TotalCountResponse](#totalcountresponse)

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

#### Input
* input `object`
  * App-Id **required** `string`: Application identifier
  * App-Key **required** `string`: Application key.
  * hotelId **required** `integer`: The hotel id the rateplan belongs to.
  * rateplanCode **required** `string`: The code of the rateplan you want to see details for.

#### Output
* output [ExtendedRateplanEntry](#extendedrateplanentry)

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

#### Input
* input `object`
  * App-Id **required** `string`: Application identifier
  * App-Key **required** `string`: Application key.
  * hotelId **required** `integer`: The hotel id the rateplan belongs to.
  * rateplanCode **required** `string`: The code of the rateplan you want to see details for.
  * expand `string` (values: RoomTypeSupplements): You can expand the supplements per room type on demand. By default they are not shown.
  * from **required** `string`: Defines the last business day you would like to get rates for. The maximum time span between <i>from</i>´and <i>to</i>
  * to **required** `string`: Defines the first business day you would like to get rates for.
  * skip `integer`: Amount of items to skip.
  * top `integer`: Amount of items to select.
  * inlinecount `string` (values: None, AllPages): Return total number of items for a given filter criteria.

#### Output
* output [RatesResponse](#ratesresponse)

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

#### Input
* input `object`
  * App-Id **required** `string`: Application identifier
  * App-Key **required** `string`: Application key.
  * hotelId **required** `integer`: The hotel id the rateplan belongs to.
  * rateplanCode **required** `string`: The code of the rateplan you want to update the daily rate details for.
  * patchRequest **required** [JsonPatchDocument[RatePatchRequest]](#jsonpatchdocument[ratepatchrequest])
  * from **required** `string`: Defines the last business day you would like to get rates for. The maximum time span between <i>from</i>´and <i>to</i>
  * to **required** `string`: Defines the first business day you would like to get rates for.

#### Output
* output [Object](#object)

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

#### Input
* input `object`
  * App-Id **required** `string`: Application identifier
  * App-Key **required** `string`: Application key.
  * hotelId **required** `integer`: The hotel id the rateplan belongs to.
  * rateplanCode **required** `string`: The code of the rateplan you want to count daily rates for.
  * from **required** `string`: Defines the last business day you would like to get rates for. The maximum time span between <i>from</i>´and <i>to</i>
  * to **required** `string`: Defines the first business day you would like to get rates for.

#### Output
* output [TotalCountResponse](#totalcountresponse)

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

#### Input
* input `object`
  * App-Id **required** `string`: Application identifier
  * App-Key **required** `string`: Application key.
  * hotelId **required** `integer`: The hotel id the rateplan belongs to.
  * rateplanCode **required** `string`: The code of the rateplan you want to see details for.
  * businessDay **required** `string`: The business day you want to get the rate setup for.

#### Output
* output [RateResponse](#rateresponse)

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

#### Input
* input `object`
  * App-Id **required** `string`: Application identifier
  * App-Key **required** `string`: Application key.
  * hotelId **required** `integer`: The hotel id the rateplan belongs to.
  * rateplanCode **required** `string`: The code of the rateplan you want to update the daily rate details for.
  * businessDay **required** `string`: The business day of the daily rate you want to update.
  * patchRequest **required** [JsonPatchDocument[RatePatchRequest]](#jsonpatchdocument[ratepatchrequest])

#### Output
* output [Object](#object)

### RoomTypes_GetRoomTypes
With this call you can load the details about a all available room types for the specified hotel.


```js
hetras_certification_hotel.RoomTypes_GetRoomTypes({
  "App-Id": "",
  "App-Key": "",
  "hotelId": 0
}, context)
```

#### Input
* input `object`
  * App-Id **required** `string`: Application identifier
  * App-Key **required** `string`: Application key.
  * hotelId **required** `integer`: The hotel id the room type belongs to.

#### Output
* output `array`
  * items [RoomType](#roomtype)

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

#### Input
* input `object`
  * App-Id **required** `string`: Application identifier
  * App-Key **required** `string`: Application key.
  * hotelId **required** `integer`: The hotel id the room type belongs to.
  * code **required** `string`: The code of the room type you want to see details for.

#### Output
* output [RoomType](#roomtype)

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

#### Input
* input `object`
  * App-Id **required** `string`: Application identifier
  * App-Key **required** `string`: Application key.
  * hotelId **required** `integer`: The hotel you are trying to find rooms for.
  * occupancy `string` (values: Occupied, Vacant): Return results only for rooms that have the given frontdesk ocuppancy status.
  * conditions `array`: Return results only for rooms that have the given room condition status.
  * maintenances `array`: Return results only for rooms that have the given maintenance status.
  * roomTypes `array`: Return result only for rooms for the given room types. Allows to pass a comma-separated list of room types.
  * amenities `array`: Return result only for rooms having all of the given amenities. You can provide a comma seperated list of 
  * views `array`: Return result only for rooms having at least one of the specified views. You can provide a comma seperated list of 
  * locations `array`: Return result only for rooms having at least one of the specified locations. You can provide a comma seperated list of 
  * skip `integer`: Amount of items to skip.
  * top `integer`: Amount of items to select.
  * inlinecount `string` (values: None, AllPages): Return total number of items for a given filter criteria.

#### Output
* output [RoomListResponse](#roomlistresponse)

### Rooms_GetRoomsCount
Get the count of all rooms in the hotel matching the given filter criteria.


```js
hetras_certification_hotel.Rooms_GetRoomsCount({
  "App-Id": "",
  "App-Key": "",
  "hotelId": 0
}, context)
```

#### Input
* input `object`
  * App-Id **required** `string`: Application identifier
  * App-Key **required** `string`: Application key.
  * hotelId **required** `integer`: The hotel you are counting the rooms for.
  * occupancy `string` (values: Occupied, Vacant): Return results only for rooms that have the given frontdesk ocuppancy status.
  * conditions `array`: Return results only for rooms that have the given room condition status.
  * maintenances `array`: Return results only for rooms that have the given maintenance status.
  * roomTypes `array`: Return result only for rooms for the given room types. Allows to pass a comma-separated list of room types.
  * amenities `array`: Return result only for rooms having all of the given amenities. You can provide a comma seperated list of 
  * views `array`: Return result only for rooms having at least one of the specified views. You can provide a comma seperated list of 
  * locations `array`: Return result only for rooms having at least one of the specified locations. You can provide a comma seperated list of 

#### Output
* output [TotalCountResponse](#totalcountresponse)

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

#### Input
* input `object`
  * App-Id **required** `string`: Application identifier
  * App-Key **required** `string`: Application key.
  * hotelId **required** `integer`: The hotel you are looking for available rooms.
  * from **required** `string`: Rooms returned will not be assigned to a reservation or be under maintenance between this date
  * to **required** `string`: Rooms returned will not be assigned to a reservation or be under maintenance between the specified
  * adults `string`: Specifies number of adults the returned rooms will have to be able to house. The default value is 1.
  * includeOutOfService `boolean`: Should rooms that are set OutOfService in the defined time period be returned as available. By default
  * roomTypes `array`: Return result only for rooms for the given room types. Allows to pass a comma-separated list of room types.
  * amenities `array`: Return result only for rooms having all of the given amenities. You can provide a comma seperated list of 
  * views `array`: Return result only for rooms having at least one of the specified views. You can provide a comma seperated list of 
  * locations `array`: Return result only for rooms having at least one of the specified locations. You can provide a comma seperated list of 
  * skip `integer`: Amount of items to skip.
  * top `integer`: Amount of items to select.
  * inlinecount `string` (values: None, AllPages): Return total number of items for a given filter criteria.

#### Output
* output [RoomListResponse](#roomlistresponse)

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

#### Input
* input `object`
  * App-Id **required** `string`: Application identifier
  * App-Key **required** `string`: Application key.
  * hotelId **required** `integer`: The hotel id the room belongs to.
  * roomNumber **required** `string`: The room number you want to see details for.

#### Output
* output [Room](#room)

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

#### Input
* input `object`
  * App-Id **required** `string`: Application identifier
  * App-Key **required** `string`: Application key.
  * hotelId **required** `integer`: The hotel id the room belongs to.
  * roomNumber **required** `string`: The room number of the room you would like to update.
  * patchRequest **required** [JsonPatchDocument[RoomPatchRequest]](#jsonpatchdocument[roompatchrequest])

#### Output
* output [Object](#object)



## Definitions

### AccessControlInfo
* AccessControlInfo `object`
  * channel_codes `array`: List of codes of distribution channels
    * items `string`
  * channel_group `string`: Code of the distribution channel group

### CodeBaseEntry
* CodeBaseEntry `object`
  * _links `object`: Collection of links to related resources
  * code `string`: The code value. This value you will see in reservations as market code and in other
  * default `boolean`: This attribute tells you if this code is the default code for the specific type or not.
  * id `string`: The id of the code
  * name `string`: The name of the code that usually is more human readable
  * type `string` (values: GuestRequest, RequestDietary, VIPStatus, ReasonForRateChange, Regrets, MarketSegments, SourceOfBusiness, LoyaltyProgram, CancellationReason, AccountType, AccountRank, VIPLevel, Title, ContactFunction, Territory, CorrespondenceType, ExternalProgramType, RevenueBucket, AdditionalRevenueBucket, AdditionalStatisticsBuckets, MealPeriod, BillingCycle, ReminderCycle, MajorMarketSegments, DocumentType, ActivityType, ReservationLabels): The type or category of the code

### CodeFullEntry
* CodeFullEntry `object`
  * _links `object`: Collection of links to related resources
  * code `string`: The code value. This value you will see in reservations as market code and in other
  * comment `string`: The comment for this code
  * default `boolean`: This attribute tells you if this code is the default code for the specific type or not.
  * id `string`: The id of the code
  * name `string`: The name of the code that usually is more human readable
  * parent [CodeBaseEntry](#codebaseentry)
  * type `string` (values: GuestRequest, RequestDietary, VIPStatus, ReasonForRateChange, Regrets, MarketSegments, SourceOfBusiness, LoyaltyProgram, CancellationReason, AccountType, AccountRank, VIPLevel, Title, ContactFunction, Territory, CorrespondenceType, ExternalProgramType, RevenueBucket, AdditionalRevenueBucket, AdditionalStatisticsBuckets, MealPeriod, BillingCycle, ReminderCycle, MajorMarketSegments, DocumentType, ActivityType, ReservationLabels): The type or category of the code

### CodesListRequest
* CodesListRequest `object`
  * code `string`: Return all results matching the specified code. A code is unique in combination with the type
  * type `string` (values: GuestRequest, RequestDietary, VIPStatus, ReasonForRateChange, Regrets, MarketSegments, SourceOfBusiness, LoyaltyProgram, CancellationReason, AccountType, AccountRank, VIPLevel, Title, ContactFunction, Territory, CorrespondenceType, ExternalProgramType, RevenueBucket, AdditionalRevenueBucket, AdditionalStatisticsBuckets, MealPeriod, BillingCycle, ReminderCycle, MajorMarketSegments, DocumentType, ActivityType, ReservationLabels): Return all codes for the specified type

### CodesListResponse
* CodesListResponse `object`
  * codes `array`: The list of codes matching the defined filter criteria
    * items [CodeBaseEntry](#codebaseentry)

### DatePeriod
* DatePeriod `object`
  * from `string`: Start Date for this time period
  * to `string`: End Date for this time period

### Derivation
* Derivation `object`
  * adjustment `string` (values: Amount, Percentage): Mode for the calculation of the daily rates adjustment
  * base_rateplan [RelatedRateplan](#relatedrateplan)

### EmbeddedReservation
* EmbeddedReservation `object`: Basic data about a reservation
  * _links `object`: Collection of links to related resources
  * arrival_date **required** `string`: The arrival date of the guests
  * confirmation_id **required** `string`: he confirmation id for the booking which the guest can use to check in on the kiosk, add the 
  * departure_date **required** `string`: The departure date of the guests
  * reservation_number **required** `integer`: The reservation number of the reservation
  * reservation_status **required** `string` (values: Tentative, Waitlisted, OnRequest, NonGuaranteed, Guaranteed, InHouse, CheckedOut, NoShow, Denied, Cancelled, Released, Walked, Expired, WalkIn, Registered): The current status of this reservation

### EmbeddedRoomType
* EmbeddedRoomType `object`: Basic data for a room type. To get the full details please follow the self link
  * _links `object`: Collection of links to related resources
  * code `string`: Code of the room type
  * description `string`: Description of the room type
  * name `string`: Name of the room type

### EmbeddedRoomTypeSimple
* EmbeddedRoomTypeSimple `object`: Contains only a basic information about a room type. No cross-links available as well.
  * code `string`: Code of the room type
  * description `string`: Description of the room type
  * name `string`: Name of the room type

### EmbeddedRoomWithStatus
* EmbeddedRoomWithStatus `object`
  * _links `object`: Collection of links to related resources
  * created `string`: Timestamp the room was created
  * description `string`: Description of the room
  * name `string`: Name of the room
  * number `string`: Number of the room
  * room_type [EmbeddedRoomType](#embeddedroomtype)
  * status [RoomStatus](#roomstatus)
  * updated `string`: Timestamp of when the room was changed the last time

### ExtendedRateplanEntry
* ExtendedRateplanEntry `object`
  * _links `object`: Collection of links to related resources
  * access_control `array`: List of distribution channel groups and channels the rateplan is sold through
    * items [AccessControlInfo](#accesscontrolinfo)
  * active `boolean`: Defines if the rateplan has been ended and is expired
  * active_periods `array`: List of active periods. Arrival and departure day for reservations based on this rateplan need to
    * items [DatePeriod](#dateperiod)
  * booking_periods `array`: List of booking periods. During these time periods the rateplan is sold
    * items [DatePeriod](#dateperiod)
  * code `string`: Code of the rateplan
  * commissionable `boolean`: Defines if this rateplan is setup with a commission
  * created `string`: Timestamp the rateplan was created
  * day_use `boolean`: Defines if this rateplan is used for day use reservations
  * derivation [Derivation](#derivation)
  * derived_rateplans `array`: Details about all the derived rateplans if any
    * items [RelatedRateplan](#relatedrateplan)
  * description `string`: Description of the rateplan
  * folio_name `string`: Text defining how the room charges for this rateplan are shown on the folio and
  * group [RateplanGroup](#rateplangroup)
  * included_services `array`: List of codes for the included services sold with this rateplan
    * items `string`
  * market_code `string`: The code of the market segment the rate plan is linked to
  * name `string`: Name of the rateplan
  * noshow_policy `string`: The code of the noshow policy for this rateplan
  * restrictions [Restrictions](#restrictions)
  * room_types `array`: List of all room types sold through this rateplan
    * items [EmbeddedRoomType](#embeddedroomtype)
  * suspended `boolean`: Defines if a rateplan is suspended and no new reservations can be created for this
  * taxes_included `boolean`: Defines if the daily rates include VAT or not
  * updated `string`: Timestamp of when the rateplan was changed the last time
  * visibility `string` (values: Public, Negotiated): Defines if this rateplan is visible to the public or only for specific customers

### GetAvailableRoomsRequest
* GetAvailableRoomsRequest `object`
  * adults `string`: Specifies number of adults the returned rooms will have to be able to house. The default value is 1.
  * amenities `array`: Return result only for rooms having all of the given amenities. You can provide a comma seperated list of 
    * items `string`
  * from **required** `string`: Rooms returned will not be assigned to a reservation or be under maintenance between this date
  * includeOutOfService `boolean`: Should rooms that are set OutOfService in the defined time period be returned as available. By default
  * locations `array`: Return result only for rooms having at least one of the specified locations. You can provide a comma seperated list of 
    * items `string`
  * roomTypes `array`: Return result only for rooms for the given room types. Allows to pass a comma-separated list of room types.
    * items `string`
  * to **required** `string`: Rooms returned will not be assigned to a reservation or be under maintenance between the specified
  * views `array`: Return result only for rooms having at least one of the specified views. You can provide a comma seperated list of 
    * items `string`

### GetRatesRequest
* GetRatesRequest `object`
  * Expand `string` (values: RoomTypeSupplements): You can expand the supplements per room type on demand. By default they are not shown.
  * From **required** `string`: Defines the last business day you would like to get rates for. The maximum time span between <i>from</i>´and <i>to</i>
  * To **required** `string`: Defines the first business day you would like to get rates for.

### GetRoomListRequest
* GetRoomListRequest `object`
  * amenities `array`: Return result only for rooms having all of the given amenities. You can provide a comma seperated list of 
    * items `string`
  * conditions `array`: Return results only for rooms that have the given room condition status.
    * items `string` (values: CleanNotInspected, Clean, Dirty)
  * locations `array`: Return result only for rooms having at least one of the specified locations. You can provide a comma seperated list of 
    * items `string`
  * maintenances `array`: Return results only for rooms that have the given maintenance status.
    * items `string` (values: NotSet, None, OutOfInventory, OutOfOrder, OutOfService)
  * occupancy `string` (values: Occupied, Vacant): Return results only for rooms that have the given frontdesk ocuppancy status.
  * roomTypes `array`: Return result only for rooms for the given room types. Allows to pass a comma-separated list of room types.
    * items `string`
  * views `array`: Return result only for rooms having at least one of the specified views. You can provide a comma seperated list of 
    * items `string`

### Hotel
* Hotel `object`
  * city `string`: The city the hotel is located in
  * code `string`: The code of the hotel
  * country `string`: The country the hotel is located. The country code is in ISO 3166-1 alpha-2 format
  * created `string`: Timestamp the hotel was created
  * current_business_day `string`: Return the current business day of the hotel in the ISO-8601 format "YYYY-MM-DD"
  * desc `string`: The descriptive text for the the hotel
  * email `string`: The email address of the hotel
  * fax `string`: The fax number of the hotel
  * hotel_id `integer`: The id of the hotel
  * latitude `number`: The latitude for the geolocation of the hotel. This allows you to show the hotel on a map
  * longitude `number`: The longitude for the geolocation of the hotel. This allows you to show the hotel on a map
  * name `string`: The name of the hotel
  * phone `string`: The main phone number to call the hotel
  * postal_code `string`: The postal code of the hotel
  * state `string`: The state the hotel is located in
  * street `string`: The street address of the hotel
  * updated `string`: Timestamp of when the hotel was changed the last time
  * url `string`: The homepage URL of the hotel
  * utc_offset `string`: The current time offset of the hotel to UTC. This is taking into account daylight saving times and shows the offset for the time the request is handled. The response

### JsonPatchDocument[RatePatchRequest]
* JsonPatchDocument[RatePatchRequest] `array`
  * items [Operation[RatePatchRequest]](#operation[ratepatchrequest])

### JsonPatchDocument[RoomPatchRequest]
* JsonPatchDocument[RoomPatchRequest] `array`
  * items [Operation[RoomPatchRequest]](#operation[roompatchrequest])

### LinkObject
* LinkObject `object`: A Link Object represents a hyperlink from the containing resource to a URI.
  * deprecation `string`: <para>The "deprecation" property is OPTIONAL.</para>
  * href **required** `string`: <para>The "href" property is REQUIRED.</para>
  * hreflang `string`: <para>The "hreflang" property is OPTIONAL.</para>
  * name `string`: <para>The "name" property is OPTIONAL.</para>
  * profile `string`: <para>The "profile" property is OPTIONAL.</para>
  * templated `boolean`: <para>The "templated" property is OPTIONAL.</para>
  * title `string`: <para>The "title" property is OPTIONAL.</para>
  * type `string`: <para>The "type" property is OPTIONAL.</para>

### ListRateplanEntry
* ListRateplanEntry `object`
  * _links `object`: Collection of links to related resources
  * access_control `array`: List of distribution channel groups and channels the rateplan is sold through
    * items [AccessControlInfo](#accesscontrolinfo)
  * active `boolean`: Defines if the rateplan has been ended and is expired
  * active_periods `array`: List of active periods. Arrival and departure day for reservations based on this rateplan need to
    * items [DatePeriod](#dateperiod)
  * base_rateplan `string`: Code of the base rateplan if this rateplan is derived
  * booking_periods `array`: List of booking periods. During these time periods the rateplan is sold
    * items [DatePeriod](#dateperiod)
  * code `string`: Code of the rateplan
  * commissionable `boolean`: Defines if this rateplan is setup with a commission
  * created `string`: Timestamp the rateplan was created
  * day_use `boolean`: Defines if this rateplan is used for day use reservations
  * derived_rateplans `array`: List of codes for all derived rateplans if any
    * items `string`
  * description `string`: Description of the rateplan
  * group `string`: Code of the rateplan group
  * included_services `array`: List of codes for the included services sold with this rateplan
    * items `string`
  * market_code `string`: The code of the market segment the rate plan is linked to
  * name `string`: Name of the rateplan
  * room_types `array`: List of all room types sold through this rateplan
    * items [EmbeddedRoomTypeSimple](#embeddedroomtypesimple)
  * suspended `boolean`: Defines if a rateplan is suspended and no new reservations can be created for this
  * updated `string`: Timestamp of when the rateplan was changed the last time
  * visibility `string` (values: Public, Negotiated): Defines if this rateplan is visible to the public or only for specific customers

### Object
* Object `object`

### Operation[RatePatchRequest]
* Operation[RatePatchRequest] `object`
  * from `string`
  * op `string`
  * path `string`
  * value [Object](#object)

### Operation[RoomPatchRequest]
* Operation[RoomPatchRequest] `object`
  * from `string`
  * op `string`
  * path `string`
  * value [Object](#object)

### PagedDataRequest
* PagedDataRequest `object`
  * inlinecount `string` (values: None, AllPages): Return total number of items for a given filter criteria.
  * skip `integer`: Amount of items to skip.
  * top `integer`: Amount of items to select.

### Policy
* Policy `object`
  * description `string`: The description of the policy
  * name `string`: The name of the policy

### PriceDerivation
* PriceDerivation `object`
  * adjustment `string` (values: Amount, Percentage): Mode for the calculation of the daily rates adjustment
  * value `number`: The value the rate of the base rateplan is adjusted by based on the calculation mode

### RateResponse
* RateResponse `object`
  * _links `object`: Collection of links to related resources
  * base_price `number`: The price for this business day for the default room type and occupancy of one adult. The price is
  * business_day `string`: The business day
  * cancellation_policy [Policy](#policy)
  * derivation [PriceDerivation](#pricederivation)
  * minimum_guarantee_type `string` (values: PM4Hold, PM6Hold, GuaranteeToCreditCard, GuaranteeToGuestAccount, GuaranteeByTravelAgent, GuaranteeByCompany, Deposit, Voucher, Prepayment, NonGuaranteed, Tentative, Waitlist): The minimum guarantee
  * per_person_surcharge `number`: The surcharge per additional adult staying in the room. It is only available on base rateplans
  * room_type_supplements `array`: List of supplements added to the price per room type
    * items [RoomTypeSupplement](#roomtypesupplement)

### RateplanGroup
* RateplanGroup `object`
  * code `string`: Code of the rateplan group
  * name `string`: Name of the rateplan group

### RateplansListRequest
* RateplansListRequest `object`
  * baseRateplan `string`: Return all rateplans having the specified rateplan as base rateplan
  * channelCode `string`: Return all rateplans sold through the specified channel
  * channelGroup `string`: Return all rateplans that are sold through at least one channel out of the specified channel group
  * commissionable `boolean`: Return all rateplans having commisionable status
  * group `string`: Return all rateplans belonging to the specified rateplan group
  * includedServices `array`: Return all rateplans having at least one of the specified services included
    * items `string`
  * marketCodes `array`: Return all rateplans having one of the specified values as a market code
    * items `string`
  * roomTypes `array`: Return all rateplans by which at least one of the specified room types are sold
    * items `string`
  * sellingStatus `string` (values: Active, Inactive, All): Specify which rateplans to return. If you do not specify a value you will by default get active

### RateplansListResponse
* RateplansListResponse `object`
  * _count `integer`: The number of items matching your request in total for all pages.
  * _links `object`: Collection of links to related resources
  * rateplans `array`: List of rateplans
    * items [ListRateplanEntry](#listrateplanentry)

### RatesRequest
* RatesRequest `object`
  * From **required** `string`: Defines the last business day you would like to get rates for. The maximum time span between <i>from</i>´and <i>to</i>
  * To **required** `string`: Defines the first business day you would like to get rates for.

### RatesResponse
* RatesResponse `object`
  * _count `integer`: The number of items matching your request in total for all pages.
  * _links `object`: Collection of links to related resources
  * rates `array`: The list of rates, cancellation policy and minimum guarantee per business day.
    * items [RateResponse](#rateresponse)

### RelatedRateplan
* RelatedRateplan `object`
  * _links `object`: Collection of links to related resources
  * code `string`: Code of the rateplan
  * name `string`: Name of the rateplan

### Restrictions
* Restrictions `object`
  * leadtime_to_book `integer`: Days this rateplan needs to be booked in advance. This value is mutual exclusive to the
  * max_advance_booking `integer`: Days this rateplan can be booked in advance. This value is mutual exclusive to the

### Room
* Room `object`: Represents a room for a property.
  * amenities `array`: List of amenities for the room
    * items [SimpleAttribute](#simpleattribute)
  * beddings `array`: Provides information about available beds in the room
    * items [RoomBedding](#roombedding)
  * created `string`: Timestamp the room was created
  * description `string`: Description of the room
  * expected_occupancy **required** `integer`: The common amount of persons for the room
  * extra_bed_allowed `boolean`: Is there an extra bed allowed in the room
  * floor **required** `integer`: Floor of the room
  * locations `array`: List of locations for the room
    * items [SimpleAttribute](#simpleattribute)
  * max_persons **required** `integer`: Maximum number of allowed persons in the room
  * min_persons **required** `integer`: Minimum number of allowed persons in the room
  * name `string`: Name of the room
  * number **required** `string`: Number of the room
  * reservations `array`: Current reservation(s) for the room. It shows reservations due to arrive today and the one still inhouse.
    * items [EmbeddedReservation](#embeddedreservation)
  * room_type **required** [EmbeddedRoomType](#embeddedroomtype)
  * status **required** [RoomStatus](#roomstatus)
  * updated `string`: Timestamp of when the room was changed the last time
  * views `array`: List of views for the room
    * items [SimpleAttribute](#simpleattribute)

### RoomBedding
* RoomBedding `object`: Information about room bedding
  * count `integer`: Number of available beds of the specified type
  * type `string` (values: NotDefined, Double, Futon, King, MurphyBed, Queen, SofaBed, TatamiMats, Twin, Single): The type of bed

### RoomListResponse
* RoomListResponse `object`
  * _count `integer`: The number of items matching your request in total for all pages.
  * _links `object`: Collection of links to related resources
  * rooms `array`: List of rooms
    * items [EmbeddedRoomWithStatus](#embeddedroomwithstatus)

### RoomMaintenance
* RoomMaintenance `object`
  * from `string`: Start date of the current maintenance work
  * reason `string`: A description about the reason for the ongoing maintenance work
  * to `string`: End date of the current maintenance work
  * value `string` (values: NotSet, None, OutOfInventory, OutOfOrder, OutOfService): Maintenance Status

### RoomStatus
* RoomStatus `object`: Represents current room status data.
  * condition `string` (values: CleanNotInspected, Clean, Dirty): Room Condition status
  * frontdesk_occupancy `string` (values: Occupied, Vacant): The frontdesk occupancy is set by reservation checkin and checkout. It can differ from the
  * housekeeping_occupancy `string` (values: Occupied, Vacant): The housekeeping occupancy status is defined by the housekeeping staff. Usually it matches the
  * maintenance [RoomMaintenance](#roommaintenance)

### RoomType
* RoomType `object`: Represent a room type for a property
  * amenities `array`: List of amenities for the room type
    * items [SimpleAttribute](#simpleattribute)
  * bedding_type `string` (values: NotDefined, Double, Futon, King, MurphyBed, Queen, SofaBed, TatamiMats, Twin, Single): The type of bed for the room type
  * code `string`: Code of the room type
  * created `string`: Timestamp the room type was created
  * default `boolean`: Specifies if the room type is the default room type of the hotel
  * description `string`: Description of the room type
  * expected_occupancy `integer`: The common amount of persons for the room
  * facilities `array`: List of facilities for the room type
    * items [SimpleAttribute](#simpleattribute)
  * max_persons `integer`: Maximum number of allowed persons for that room type
  * min_persons `integer`: Minimum number of allowed persons for that room type
  * name `string`: Name of the room type
  * updated `string`: Timestamp of when the room type was changed the last time
  * views `array`: List of views for the room type
    * items [SimpleAttribute](#simpleattribute)

### RoomTypeSupplement
* RoomTypeSupplement `object`
  * _links `object`: Collection of links to related resources
  * code `string`: The code of the room type
  * default `boolean`: Specifies if the room type is the default room type of the hotel
  * supplements `array`: The supplements per adults in the room. The per person surcharge will be added on top
    * items [Supplement](#supplement)

### SimpleAttribute
* SimpleAttribute `object`: Represents a simple attribute
  * code `string`: The code of the attribute
  * name `string`: The name of the attribute

### Supplement
* Supplement `object`
  * adjustment `string` (values: Amount, Percentage): Mode for the calculation of the supplement value
  * adults `integer`: The number of adults per room
  * supplement `number`: The amount or percentage that will be added for this room type and number of adults per room

### TotalCountResponse
* TotalCountResponse `object`
  * _count **required** `integer`: Returns the total count for all items matching the query parameters. If none is matching it will return 0.


