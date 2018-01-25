# @datafire/hetras_certification_booking

Client library for hetras Booking API Version 0

## Installation and Usage
```bash
npm install --save @datafire/hetras_certification_booking
```
```js
let hetras_certification_booking = require('@datafire/hetras_certification_booking').create();

hetras_certification_booking.Addons_Get({
  "App-Id": "",
  "App-Key": "",
  "hotelId": 0,
  "arrivalDate": "",
  "departureDate": "",
  "channelCode": "",
  "adults": "",
  "rooms": "",
  "roomType": "",
  "ratePlanCode": ""
}).then(data => {
  console.log(data);
});
```

## Description



## Actions

### Addons_Get
With the addons request you can get a list of offers for addon services available for a specific rate, room type
            and guest stay details.The channel code will define which rates will be returned based on the access control 
            configuration for related rates.


```js
hetras_certification_booking.Addons_Get({
  "App-Id": "",
  "App-Key": "",
  "hotelId": 0,
  "arrivalDate": "",
  "departureDate": "",
  "channelCode": "",
  "adults": "",
  "rooms": "",
  "roomType": "",
  "ratePlanCode": ""
}, context)
```

#### Input
* input `object`
  * App-Id **required** `string`: Application identifier
  * App-Key **required** `string`: Application key.
  * hotelId **required** `integer`: Specifies the hotel id to request offers for.
  * arrivalDate **required** `string`: Date from when the addon service will be booked to the reservation in the ISO-8601 format "YYYY-MM-DD".
  * departureDate **required** `string`: Date until when the addon service will be booked to the reservation in the ISO-8601 format "YYYY-MM-DD".
  * channelCode **required** `string`: Channel Code the rate plan needs to be configured for.
  * adults **required** `string`: Number of adults per room.
  * rooms **required** `string`: Number of rooms.
  * roomType **required** `string`: Only return offers for the specified room type code.
  * ratePlanCode **required** `string`: Only return offers for the specified rate plan code.
  * expand `string` (values: None, Breakdown): Expand the rates breakdown if required.

#### Output
* output [Addons](#addons)

### Availability_Get
Read past occupancy and future availability for a specific hotel. You can also request the breakdown per room type.


```js
hetras_certification_booking.Availability_Get({
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
  * hotelId **required** `integer`: Specifies the hotel id to request the availability for.
  * from **required** `string`: Defines the first business day you would like to get availability numbers for.
  * to **required** `string`: Defines the last business day you would like to get availability numbers for. The maximum time span between <i>from</i>´and <i>to</i>
  * expand `string` (values: RoomTypes): You can expand the room types breakdown per business day for the availibility numbers if need be.
  * skip `integer`: Amount of items to skip.
  * top `integer`: Amount of items to select.
  * inlinecount `string` (values: None, AllPages): Return total number of items for a given filter criteria.

#### Output
* output [AvailabilityResponse](#availabilityresponse)

### Blocks_GetBlocks
With this endpoint you can request a list of blocks for the hotel chain. Currently we only support to optionally
            filter by the group code linked to the block. Additional filters will be available soon.


```js
hetras_certification_booking.Blocks_GetBlocks({
  "App-Id": "",
  "App-Key": ""
}, context)
```

#### Input
* input `object`
  * App-Id **required** `string`: Application identifier
  * App-Key **required** `string`: Application key.
  * hotelId `integer`: Only return blocks for this specific hotel.
  * groupCode `string`: Filter the blocks by the specified group code
  * from `string`: Return all blocks where the block's last_departure is greater than specified date.
  * to `string`: Return all blocks where the block's last_departure is less than specified date.
  * status `string` (values: Cancelled, Tentative, Definite): Return all blocks where the block status is one of the specified values.
  * ratePlanCodes `array`: Return all blocks that have related the specified comma-separated rate plans.
  * skip `integer`: Amount of items to skip.
  * top `integer`: Amount of items to select.
  * inlinecount `string` (values: None, AllPages): Return total number of items for a given filter criteria.

#### Output
* output [BlocksResponse](#blocksresponse)

### Blocks_GetBlocksCount
Get total blocks count that match the given filter criteria.


```js
hetras_certification_booking.Blocks_GetBlocksCount({
  "App-Id": "",
  "App-Key": ""
}, context)
```

#### Input
* input `object`
  * App-Id **required** `string`: Application identifier
  * App-Key **required** `string`: Application key.
  * hotelId `integer`: Only return blocks for this specific hotel.
  * groupCode `string`: Filter the blocks by the specified group code
  * from `string`: Return all blocks where the block's last_departure is greater than specified date.
  * to `string`: Return all blocks where the block's last_departure is less than specified date.
  * status `string` (values: Cancelled, Tentative, Definite): Return all blocks where the block status is one of the specified values.
  * ratePlanCodes `array`: Return all blocks that have related the specified comma-separated rate plans.

#### Output
* output [TotalCountResponse](#totalcountresponse)

### Blocks_GetSingleBlock
Read all informationen about a block including the numbers of blocked rooms per room type and business day.


```js
hetras_certification_booking.Blocks_GetSingleBlock({
  "App-Id": "",
  "App-Key": "",
  "blockCode": ""
}, context)
```

#### Input
* input `object`
  * App-Id **required** `string`: Application identifier
  * App-Key **required** `string`: Application key.
  * blockCode **required** `string`: Specifies the block code. The block code is composed of the hotel code, a dash and the block code 

#### Output
* output [BlockResponse](#blockresponse)

### Bookings_GetBookings
Here you can easily find bookings matching various criteria. The booking you are looking for has to fullfill all the specified criteria
            at the same time. So if you specify a customer name and a channel code you will get all bookings where the firstname or lastname of a guest or a 
            contact contains the specified value and that have been done through the defined channel.
            A booking can consist of multiple reservations, so even if you are looking for a specific reservation which is part of a multi-room booking you will get
            all reservations for this booking returned.


```js
hetras_certification_booking.Bookings_GetBookings({
  "App-Id": "",
  "App-Key": ""
}, context)
```

#### Input
* input `object`
  * App-Id **required** `string`: Application identifier
  * App-Key **required** `string`: Application key.
  * hotelId `integer`: Only return bookings for this specific hotel.
  * cancellationId `string`: Return bookings for this cancellation id.
  * reservationNumber `integer`: Return bookings matching this reservation number. Please note that reservation numbers are only unique within a hotel. If you
  * customerName `string`: Return all bookings where the first or lastname of one of the guests or the contact contains the specified value. The search is executed case insensitive
  * customerEmail `string`: Return all bookings where the primary email address of one of the guests or the contact contains the specified value. The search is executed case insensitive
  * customerId `string`: Return all bookings the id of one of the guests or the contact matches the specified value.
  * roomNumber `string`: Return all bookings having the specified room number assigned.
  * externalId `string`: Return all bookings exactly matching the specified external id. This filter is case sensitive.
  * companyName `string`: Return all bookings where the name of the linked company or travel agent profile contains the specified value. The search is executed case insensitive
  * companyId `string`: Return all bookings the id of the company or travel agent profile matches the specified value.
  * companyEmail `string`: Return all bookings where the primary email address of the company or the travel agent profile contains the specified value. The search is executed case insensitive
  * blockCode `string`: Return all bookings where the block code matches the specified value.
  * reservationStatuses `array`: Return all bookings where the reservation status is one of the specified values.
  * marketCodes `array`: Return all bookings where the market code is one of the specified values.
  * channelCodes `array`: Return all bookings where the channel code is one of the specified values.
  * subChannelCodes `array`: Return all bookings where the subchannel code is one of the specified values.
  * roomTypes `array`: Return all bookings where the room type is one of the specified values.
  * ratePlanCodes `array`: Return all bookings where the rate plan code is one of the specified values.
  * labels `array`: Return all reservations with at least one of the specified labels.
  * from `string`: Start date for the selected date filter. If you select arrival date as date filter the bookings returned will have at least
  * to `string`: End date for the selected date filter. If you select arrival date as date filter the bookings returned will have at least
  * dateFilter `string` (values: ArrivalDate, DepartureDate, StayDate, CreationDate, ModificationDate): Select a date field you want to filter bookings by. Only one filter at a time can be applied. The to and from dates
  * skip `integer`: Amount of items to skip.
  * top `integer`: Amount of items to select.
  * inlinecount `string` (values: None, AllPages): Return total number of items for a given filter criteria.

#### Output
* output [BookingListResponse](#bookinglistresponse)

### Bookings_CreateBooking
Create a new booking as defined in the requests payload. You can get more information about the payload if you check out the
            documentation for the reservation request model.<br />
            Please also have a look at the <a href="https://developer.hetras.com/docs/tutorials" onfocus="this.blur()">Tutorials</a>.<br />
            For more details on how the API responds to errors please check our documentation on 
            <a href="https://developer.hetras.com/docs/errors/" onfocus="this.blur()">Error Handling</a>.


```js
hetras_certification_booking.Bookings_CreateBooking({
  "App-Id": "",
  "App-Key": "",
  "reservation": {
    "hotel_id": 0
  }
}, context)
```

#### Input
* input `object`
  * App-Id **required** `string`: Application identifier
  * App-Key **required** `string`: Application key.
  * reservation **required** [Reservation](#reservation)
  * sendConfirmation `boolean`: Whether to send a confirmation email to the primary guest

#### Output
* output [ReservationConfirmation](#reservationconfirmation)

### Bookings_GetBookingsCount
Get the count of all bookings matching your criteria. The bookings have to fullfill all the specified criteria
            at the same time. So if you specify a customer name and a channel code you will get the count for all bookings where the firstname or lastname 
            of a guest or a contact contains the specified value and that have been done through the defined channel.


```js
hetras_certification_booking.Bookings_GetBookingsCount({
  "App-Id": "",
  "App-Key": ""
}, context)
```

#### Input
* input `object`
  * App-Id **required** `string`: Application identifier
  * App-Key **required** `string`: Application key.
  * hotelId `integer`: Only return bookings for this specific hotel.
  * cancellationId `string`: Return bookings for this cancellation id.
  * reservationNumber `integer`: Return bookings matching this reservation number. Please note that reservation numbers are only unique within a hotel. If you
  * customerName `string`: Return all bookings where the first or lastname of one of the guests or the contact contains the specified value. The search is executed case insensitive
  * customerEmail `string`: Return all bookings where the primary email address of one of the guests or the contact contains the specified value. The search is executed case insensitive
  * customerId `string`: Return all bookings the id of one of the guests or the contact matches the specified value.
  * roomNumber `string`: Return all bookings having the specified room number assigned.
  * externalId `string`: Return all bookings exactly matching the specified external id. This filter is case sensitive.
  * companyName `string`: Return all bookings where the name of the linked company or travel agent profile contains the specified value. The search is executed case insensitive
  * companyId `string`: Return all bookings the id of the company or travel agent profile matches the specified value.
  * companyEmail `string`: Return all bookings where the primary email address of the company or the travel agent profile contains the specified value. The search is executed case insensitive
  * blockCode `string`: Return all bookings where the block code matches the specified value.
  * reservationStatuses `array`: Return all bookings where the reservation status is one of the specified values.
  * marketCodes `array`: Return all bookings where the market code is one of the specified values.
  * channelCodes `array`: Return all bookings where the channel code is one of the specified values.
  * subChannelCodes `array`: Return all bookings where the subchannel code is one of the specified values.
  * roomTypes `array`: Return all bookings where the room type is one of the specified values.
  * ratePlanCodes `array`: Return all bookings where the rate plan code is one of the specified values.
  * labels `array`: Return all reservations with at least one of the specified labels.
  * from `string`: Start date for the selected date filter. If you select arrival date as date filter the bookings returned will have at least
  * to `string`: End date for the selected date filter. If you select arrival date as date filter the bookings returned will have at least
  * dateFilter `string` (values: ArrivalDate, DepartureDate, StayDate, CreationDate, ModificationDate): Select a date field you want to filter bookings by. Only one filter at a time can be applied. The to and from dates

#### Output
* output [TotalCountResponse](#totalcountresponse)

### Bookings_GetBooking
A booking groups all reservations done in one single request and can be identified by the confirmation id.
            Guests usually use the confirmation id to check in at the kiosk, on the website or mobile device. In hetras
            all reservations of one booking share the room type, rate plan and number of guests per room.


```js
hetras_certification_booking.Bookings_GetBooking({
  "App-Id": "",
  "App-Key": "",
  "confirmationId": ""
}, context)
```

#### Input
* input `object`
  * App-Id **required** `string`: Application identifier
  * App-Key **required** `string`: Application key.
  * confirmationId **required** `string`: The confirmation id for the booking to load.
  * expand `string` (values: None, RoomRates): Specifies the expand type.

#### Output
* output [ReservationsResponse](#reservationsresponse)

### Bookings_GetReservation
With this request you can load one specific reservation done with one booking request.


```js
hetras_certification_booking.Bookings_GetReservation({
  "App-Id": "",
  "App-Key": "",
  "confirmationId": "",
  "reservationNumber": 0
}, context)
```

#### Input
* input `object`
  * App-Id **required** `string`: Application identifier
  * App-Key **required** `string`: Application key.
  * confirmationId **required** `string`: The confirmation id for the booking the reservation was made.
  * reservationNumber **required** `integer`: Specifies the reservation number for the reservation to load.
  * expand `string` (values: None, RoomRates): Specifies the expand type.

#### Output
* output [ReservationResponse](#reservationresponse)

### Bookings_Patch
The hetras API is using this <a href="https://developer.hetras.com/docs/patch" onfocus="this.blur()" target="_blank">Patch Specification</a>
            to partially update an existing resource. Currently this call allows to update the following fields:
            external_id, market_code, channel_code, subchannel_code, guarantee_type, comment, addon_services, labels, guests, contact and company.
            <br /><br />
            A request example:<br /><pre>
            [
              {
                "op": "replace", "path": "/addon_services", "value": ["BREAKFAST", "PARKING"]
              },
              {
                "op": "add", "path": "/labels/-", "value": "MOBILE"
              },
              {
                "op": "replace", "path": "/guests/SHOW-1234", "value": { "customer_id": "SHOW-1234", "primary": false }
              },
              {
                "op": "add", "path": "/guests/-", "value": { "customer_id": "SHOW-5678", "primary": true }
              }
            ]
            </pre><br />
            For more details on how the API responds to errors please check our documentation on 
            <a href="https://developer.hetras.com/docs/errors/" onfocus="this.blur()">Error Handling</a>.


```js
hetras_certification_booking.Bookings_Patch({
  "App-Id": "",
  "App-Key": "",
  "confirmationId": "",
  "reservationNumber": 0,
  "patchRequest": []
}, context)
```

#### Input
* input `object`
  * App-Id **required** `string`: Application identifier
  * App-Key **required** `string`: Application key.
  * confirmationId **required** `string`: The confirmation id for the booking the reservation was made.
  * reservationNumber **required** `integer`: Specifies the reservation number for the reservation that has to be updated.
  * patchRequest **required** [JsonPatchDocument[ReservationPatchableModel]](#jsonpatchdocument[reservationpatchablemodel])

#### Output
* output [Object](#object)

### Bookings_PostRoomAssignment
By default this API call assigns a random room, which has the proper room type, is not already assigned
            to another reservation or has any maintenance status set for the stay period of the underlying reservation. If the
            arrival date for the underlying reservation is the current business day dirty rooms are excluded by default. For reservation
            arriving on any latter day the room condition is not taken into account.<br />
            By specifiying the room selection criteria in the request body you can influence which room will be assigned. See the request model
            for further details.<br />
            For more details on how the API responds to errors please check our documentation on 
            <a href="https://developer.hetras.com/docs/errors/" onfocus="this.blur()">Error Handling</a>.


```js
hetras_certification_booking.Bookings_PostRoomAssignment({
  "App-Id": "",
  "App-Key": "",
  "confirmationId": "",
  "reservationNumber": 0
}, context)
```

#### Input
* input `object`
  * App-Id **required** `string`: Application identifier
  * App-Key **required** `string`: Application key.
  * confirmationId **required** `string`: The confirmation id for the booking the reservation was made.
  * reservationNumber **required** `integer`: Specifies the reservation number for the reservation the room should be assigned to.
  * assigningCriteria [AssignRoomCriteria](#assignroomcriteria)

#### Output
* output [AssignRoomResponse](#assignroomresponse)

### Bookings_CancelReservation
This request will cancel one specific reservation. It will show up in the hetras UI in the Cancellation and NoShow
            processing screen and it will be up to the hotel staff to either charge or waive the cancellation fee.<br />
            For more details on how the API responds to errors please check our documentation on 
            <a href="https://developer.hetras.com/docs/errors/" onfocus="this.blur()">Error Handling</a>.


```js
hetras_certification_booking.Bookings_CancelReservation({
  "App-Id": "",
  "App-Key": "",
  "confirmationId": "",
  "reservationNumber": 0
}, context)
```

#### Input
* input `object`
  * App-Id **required** `string`: Application identifier
  * App-Key **required** `string`: Application key.
  * confirmationId **required** `string`: The confirmation id for the booking the reservation was made.
  * reservationNumber **required** `integer`: Specifies the reservation number for the reservation to cancel.

#### Output
* output [CancellationResponse](#cancellationresponse)

### Bookings_CheckIn
With this call you can set a reservation to the status inhouse. It allows only single room reservations to be checked in.
            The reservation must have assigned a vacant and clean room.<br />
            For more details on how the API responds to errors please check our documentation on 
            <a href="https://developer.hetras.com/docs/errors/" onfocus="this.blur()">Error Handling</a>.


```js
hetras_certification_booking.Bookings_CheckIn({
  "App-Id": "",
  "App-Key": "",
  "confirmationId": "",
  "reservationNumber": 0
}, context)
```

#### Input
* input `object`
  * App-Id **required** `string`: Application identifier
  * App-Key **required** `string`: Application key.
  * confirmationId **required** `string`: The confirmation id for the booking the reservation was made.
  * reservationNumber **required** `integer`: Specifies the reservation number for the reservation to be checked in.

#### Output
* output [BaseResponse](#baseresponse)

### DailyRates_GetDailyRates
With the rates request you can get a list of different daily rates. You will have to at least 
            specify the hotel, the channel code, and a calendar range. The channel code will define which rates will be 
            returned based on the access control configuration for the rates. Additionally rate plan codes may be specified in
            the request in order to limit only those rates of the given plans, if they are not specified, it will return all the public rate plans.
            If requested the caller may specify whether he wants policies or not.


```js
hetras_certification_booking.DailyRates_GetDailyRates({
  "App-Id": "",
  "App-Key": "",
  "hotelId": 0,
  "from": "",
  "to": "",
  "channelCode": ""
}, context)
```

#### Input
* input `object`
  * App-Id **required** `string`: Application identifier
  * App-Key **required** `string`: Application key.
  * hotelId **required** `integer`: Define the hotel id to request the availability for.
  * from **required** `string`: Define the first business day you would like to get availability numbers for. The day should not be in the past.
  * to **required** `string`: Define the last business day you would like to get rates for (inclusive). The maximum time span between <i>'From'</i> and <i>'To'</i>
  * channelCode **required** `string`: Define the channel code in order to look up the rates for.
  * expand `array`: Define the sections you want to expand and get informed about rates for.
  * ratePlanCodes `array`: Define the codes of rate plans to show in the response. A list of comma ',' separated rate plan codes.
  * skip `integer`: Amount of items to skip.
  * top `integer`: Amount of items to select.
  * inlinecount `string` (values: None, AllPages): Return total number of items for a given filter criteria.

#### Output
* output [DailyRatesResponse](#dailyratesresponse)

### Rates_Get
With the rates request you can get a list of different rate offers per room type. You will have to at least 
            specify the hotel, the arrival and departure date, number of adults per room and the channel code. The channel code
            will define which rates will be returned based on the access control configuration for the rates.


```js
hetras_certification_booking.Rates_Get({
  "App-Id": "",
  "App-Key": "",
  "hotelId": 0,
  "arrivalDate": "",
  "departureDate": "",
  "channelCode": "",
  "adults": ""
}, context)
```

#### Input
* input `object`
  * App-Id **required** `string`: Application identifier
  * App-Key **required** `string`: Application key.
  * hotelId **required** `integer`: Specifies the hotel id to request offers for.
  * arrivalDate **required** `string`: Date of arrival for the guest in the ISO-8601 format "YYYY-MM-DD".
  * departureDate **required** `string`: Date of departure for the guest in the ISO-8601 format "YYYY-MM-DD".
  * channelCode **required** `string`: Channel Code the rate plan needs to be configured for.
  * adults **required** `string`: Number of adults per room.
  * rooms `string`: Number of rooms (default is 1).
  * roomType `string`: Only return offers with rates for the specified room type code.
  * ratePlanCode `string`: Only return offers for the specified room type code.
  * groupCode `string`: Only return offers for the specified group code.
  * expand `string` (values: None, Breakdown): Expand the rates breakdown if required.

#### Output
* output [Rates](#rates)



## Definitions

### AcceptedGuaranteeTypes
* AcceptedGuaranteeTypes `object`
  * accepted `array`: In this list you find all the accepted guarantee types for this offer. They are sorted in ascending
    * items `string` (values: PM4Hold, PM6Hold, GuaranteeToCreditCard, GuaranteeToGuestAccount, GuaranteeByTravelAgent, GuaranteeByCompany, Deposit, Voucher, Prepayment, NonGuaranteed, Tentative, Waitlist)
  * minimum `string` (values: PM4Hold, PM6Hold, GuaranteeToCreditCard, GuaranteeToGuestAccount, GuaranteeByTravelAgent, GuaranteeByCompany, Deposit, Voucher, Prepayment, NonGuaranteed, Tentative, Waitlist): Based on the rateplan a reservation does need to have a minimum guarantee. When you create a new booking you

### AddonOffer
* AddonOffer `object`
  * breakdown `array`: In this collection you will get an entry with price information for every day the addon service will be charged
    * items [AddonOfferBreakdown](#addonofferbreakdown)
  * code `string`: The code of the addon service
  * description `string`: The description of the addon service
  * frequency `string`: The frequency this addon service will be charged to the reservation. This field is a string that can be displayed,
  * name `string`: The name of the addon service
  * rate_mode `string` (values: PerRoom, PerPerson): The price for an addon service can be per person or per room. All the prices in an offer are already calculated
  * total_stay [AddonOfferRate](#addonofferrate)

### AddonOfferBreakdown
* AddonOfferBreakdown `object`
  * business_day `string`: The business day the price for the addon service will be posted to the folio of the reservation
  * currency `string`: The currency the addon service will be charged in.
  * included_tax `number`: The amount of taxes already included in the gross rate of the addon service also calculated for all rooms and
  * rate `number`: The gross rate of the addon service. It is the price calculated for all rooms and all persons.

### AddonOfferRate
* AddonOfferRate `object`
  * currency `string`: The currency the addon service will be charged in.
  * included_tax `number`: The amount of taxes already included in the gross rate of the addon service also calculated for all rooms and
  * rate `number`: The gross rate of the addon service. It is the price calculated for all rooms and all persons.

### AddonRate
* AddonRate `object`
  * business_day `string`: The business day the addon service should be charged
  * code `string`: The code of the addon service to be booked
  * rate `number`: Total gross amount for the service

### Addons
* Addons `object`
  * addon_services `array`: A collection of offers for addon services.
    * items [AddonOffer](#addonoffer)
  * adults `integer`: The number of adults per room the addon offers are requested for. The rates will then already reflects this.
  * arrival_date `string`: The arrival date of the reservation the addon offers are supposed to be booked on.
  * departure_date `string`: The departure date of the reservation the addon offers are supposed to be booked on.
  * hotel_id `integer`: The id of the hotel the addon offers will be valid for
  * hotel_name `string`: The name of the hotel the addon offers will be valid for
  * rate_plan [RatePlan](#rateplan)
  * room [ReservationRoom](#reservationroom)
  * rooms `integer`: The number of rooms the addon offers are requested for. The rates will then already reflects this.

### AssignRoomCriteria
* AssignRoomCriteria `object`: Represents a set of criteria for assigning a room
  * amenities `array`: Ensure the assigned room will have all the amenities specified. You can provide a comma seperated list of amenity codes.
    * items `string`
  * condition `string` (values: CleanNotInspected, Clean, Dirty, Any): Here you can define to limit the list of assignable rooms based on their current condition. This is only applicable if the underlying reservation
  * include_out_of_service `boolean`: Sometimes you might want to assign rooms which are out of service (small repair needed) if no other rooms are available anymore. If you set
  * locations `array`: Ensure the assigned room will have at least one of the specified locations. You can provide a comma seperated list of location codes.
    * items `string`
  * respect_guest_preferences `boolean`: Defines if the preferences for locations, amenities and views of the primary guest should be taken into account. All defined preferences in the guest
  * room_number `string`: If you define a specific room number this room will be assigned if not assigned to another reservation, has proper room type and is not OutOfOrder 
  * views `array`: Ensure the assigned room will have at least one of the specified views. You can provide a comma seperated list of view codes.
    * items `string`

### AssignRoomResponse
* AssignRoomResponse `object`: Defines the response for room assignment operation
  * _warnings `array`: Warnings that came up when your request was processed. Your request will still be processed successfull when
    * items `string`
  * room_number `string`: The room number assigned

### AvailabilityDetail
* AvailabilityDetail `object`
  * _links `object`: Collection of links to related resources
  * available `integer`: The number of rooms that were originally available to sell. This is the the house count reduced by rooms set
  * blocked [Blocked](#blocked)
  * day_use `integer`: The number of day use reservations
  * house_count `integer`: The total count of physical rooms reduced by the number of rooms set to OutOfInventory
  * maintenance [Maintenance](#maintenance)
  * overbooking `integer`: The manually set overbooking
  * room_count `integer`: The total count of physical rooms
  * sold `integer`: The count of rooms sold. It sums up the rooms sold through individual reservations plus rooms blocked definitely
  * to_sell `integer`: The number of rooms still available to sell. It is available reduced by the already sold rooms

### AvailabilityResponse
* AvailabilityResponse `object`
  * _count `integer`: The number of items matching your request in total for all pages.
  * _links `object`: Collection of links to related resources
  * daily_availabilities `array`: The list of availability numbers per business day
    * items [DailyAvailability](#dailyavailability)
  * hotel [EmbeddedHotel](#embeddedhotel)

### BaseResponse
* BaseResponse `object`
  * _warnings `array`: Warnings that came up when your request was processed. Your request will still be processed successfull when
    * items `string`

### Block
* Block `object`
  * _links `object`: Collection of links to related resources
  * average_daily_rate `number`: Average daily rate for this block. You can multiply by the count of blocked room nights and get a forecast value for this block
  * code `string`: The code of a block. The code is composed of the hotel code a dash and the block code shown in the hetras UI. 
  * count `integer`: Total number of room nights blocked across all room types and days
  * created `string`: Timestamp the block was created
  * first_arrival `string`: (Earliest) arrival date for reservations split from this block
  * group [GroupMaster](#groupmaster)
  * hotel [HotelSummary](#hotelsummary)
  * last_departure `string`: (Latest) departure date for reservations split from this block
  * name `string`: The name of the block
  * picked `integer`: Total number of room nights picked up accross all room types and days
  * rate_plans `array`: The rateplans linked to this block
    * items [BlockRatePlan](#blockrateplan)
  * status `string` (values: Physical, Cancelled, Tentative, Definite): The current status of the block
  * updated `string`: Timestamp of when the block was changed the last time

### BlockInfo
* BlockInfo `object`
  * _links `object`: Collection of links to related resources
  * code `string`: The code is composed of the hotel code a dash and the block code shown in the hetras UI. An 
  * name `string`: The name of the block

### BlockListRequest
* BlockListRequest `object`
  * from `string`: Return all blocks where the block's last_departure is greater than specified date.
  * groupCode `string`: Filter the blocks by the specified group code
  * hotelId `integer`: Only return blocks for this specific hotel.
  * ratePlanCodes `array`: Return all blocks that have related the specified comma-separated rate plans.
    * items `string`
  * status `string` (values: Cancelled, Tentative, Definite): Return all blocks where the block status is one of the specified values.
  * to `string`: Return all blocks where the block's last_departure is less than specified date.

### BlockRatePlan
* BlockRatePlan `object`
  * code `string`: Code of the rate plan
  * description `string`: Description of the rate plan suitable for being displayed to customers
  * forecast `boolean`: Speficies if this is the rateplan that should be used for calculating the forecast
  * name `string`: Name of the rate plan

### BlockResponse
* BlockResponse `object`
  * _links `object`: Collection of links to related resources
  * average_daily_rate `number`: Average daily rate for this block. You can multiply by the count of blocked room nights and get a forecast value for this block
  * code `string`: The code of a block. The code is composed of the hotel code a dash and the block code shown in the hetras UI. 
  * count `integer`: Total number of room nights blocked across all room types and days
  * created `string`: Timestamp the block was created
  * first_arrival `string`: (Earliest) arrival date for reservations split from this block
  * group [GroupMaster](#groupmaster)
  * hotel [HotelSummary](#hotelsummary)
  * last_departure `string`: (Latest) departure date for reservations split from this block
  * name `string`: The name of the block
  * picked `integer`: Total number of room nights picked up accross all room types and days
  * rate_plans `array`: The rateplans linked to this block
    * items [BlockRatePlan](#blockrateplan)
  * room_type_counts `array`: Number of blocked and picked up rooms per room type and day.
    * items [RoomTypeCount](#roomtypecount)
  * status `string` (values: Physical, Cancelled, Tentative, Definite): The current status of the block
  * updated `string`: Timestamp of when the block was changed the last time

### BlockRoomType
* BlockRoomType `object`
  * _links `object`: Collection of links to related resources
  * code `string`: Code of the room type
  * name `string`: Name of the room type

### Blocked
* Blocked `object`
  * definite `integer`: Number of rooms blocked defintely
  * remaining `integer`: Number of definitely blocked rooms not picked up
  * tentative `integer`: Number of rooms blocked tentatively

### BlocksResponse
* BlocksResponse `object`
  * _count `integer`: The number of items matching your request in total for all pages.
  * _links `object`: Collection of links to related resources
  * blocks `array`: List of all blocks matching the given filter criteria.
    * items [Block](#block)

### BookingListItem
* BookingListItem `object`
  * _links `object`: Collection of links to related resources
  * confirmation_id `string`: The confirmation id for the booking which the guest can use to check in on the kiosk, add the
  * created `string`: Timestamp the booking was created
  * reservations `array`: Collection of reservations made with on booking request.
    * items [BookingListReservationItem](#bookinglistreservationitem)
  * updated `string`: Timestamp of when the booking was changed the last time

### BookingListRequest
* BookingListRequest `object`
  * blockCode `string`: Return all bookings where the block code matches the specified value.
  * cancellationId `string`: Return bookings for this cancellation id.
  * channelCodes `array`: Return all bookings where the channel code is one of the specified values.
    * items `string`
  * companyEmail `string`: Return all bookings where the primary email address of the company or the travel agent profile contains the specified value. The search is executed case insensitive
  * companyId `string`: Return all bookings the id of the company or travel agent profile matches the specified value.
  * companyName `string`: Return all bookings where the name of the linked company or travel agent profile contains the specified value. The search is executed case insensitive
  * customerEmail `string`: Return all bookings where the primary email address of one of the guests or the contact contains the specified value. The search is executed case insensitive
  * customerId `string`: Return all bookings the id of one of the guests or the contact matches the specified value.
  * customerName `string`: Return all bookings where the first or lastname of one of the guests or the contact contains the specified value. The search is executed case insensitive
  * dateFilter `string` (values: ArrivalDate, DepartureDate, StayDate, CreationDate, ModificationDate): Select a date field you want to filter bookings by. Only one filter at a time can be applied. The to and from dates
  * externalId `string`: Return all bookings exactly matching the specified external id. This filter is case sensitive.
  * from `string`: Start date for the selected date filter. If you select arrival date as date filter the bookings returned will have at least
  * hotelId `integer`: Only return bookings for this specific hotel.
  * labels `array`: Return all reservations with at least one of the specified labels.
    * items `string`
  * marketCodes `array`: Return all bookings where the market code is one of the specified values.
    * items `string`
  * ratePlanCodes `array`: Return all bookings where the rate plan code is one of the specified values.
    * items `string`
  * reservationNumber `integer`: Return bookings matching this reservation number. Please note that reservation numbers are only unique within a hotel. If you
  * reservationStatuses `array`: Return all bookings where the reservation status is one of the specified values.
    * items `string` (values: Tentative, Waitlisted, OnRequest, NonGuaranteed, Guaranteed, InHouse, CheckedOut, NoShow, Denied, Cancelled, Released, Walked, Expired, WalkIn, Registered)
  * roomNumber `string`: Return all bookings having the specified room number assigned.
  * roomTypes `array`: Return all bookings where the room type is one of the specified values.
    * items `string`
  * subChannelCodes `array`: Return all bookings where the subchannel code is one of the specified values.
    * items `string`
  * to `string`: End date for the selected date filter. If you select arrival date as date filter the bookings returned will have at least

### BookingListReservationItem
* BookingListReservationItem `object`
  * _links `object`: Collection of links to related resources
  * addon_services `array`: A list of addon service codes that are currently booked on the reservation. Services which are charged
    * items `string`
  * adults `integer`: The number of adults per room
  * arrival_date `string`: The arrival date of the guests
  * balance `number`: The balance for all folios of this reservartion. It is calculated by all already charged room and service rates plus manual charges 
  * block_code `string`: If this reservation is a pick-up from a block you will see the appropriate block code here
  * cancellation_id `string`: The cancellation id if the reservation has been cancelled
  * channel_code `string`: The code of the channel that was used when the booking has been created. It is also known as source. 
  * companies [CompaniesInfo](#companiesinfo)
  * created `string`: Timestamp the reservation was created
  * customers [CustomersInfo](#customersinfo)
  * departure_date `string`: The departure date of the guests
  * external_id `string`: The external id for this reservation is the unique identifier from the system that created the booking in hetras. It could be the id of an
  * hotel [HotelInfo](#hotelinfo)
  * labels `array`: The labels attached to this reservation.
    * items `string`
  * market_code `string`: The code of the market segment the rate plan for this reservation is linked to
  * rate_plan [RatePlan](#rateplan)
  * reservation_number `integer`: The reservation number of the reservation
  * reservation_status `string` (values: Tentative, Waitlisted, OnRequest, NonGuaranteed, Guaranteed, InHouse, CheckedOut, NoShow, Denied, Cancelled, Released, Walked, Expired, WalkIn, Registered): The current status of this reservation
  * room [RoomInfo](#roominfo)
  * rooms `integer`: The number of rooms this reservation is valid for. After a multi-room booking is done there will be 
  * services `array`: A list of details for all services included and addon service booked on this reservation
    * items [Service](#service)
  * subchannel_code `string`: The code of the subchannel that was used when the booking has been created. Possible values can be 
  * updated `string`: Timestamp of when the reservation was changed the last time

### BookingListResponse
* BookingListResponse `object`
  * _count `integer`: The number of items matching your request in total for all pages.
  * _links `object`: Collection of links to related resources
  * bookings `array`: Collection of bookings that match the defined filter criteria.
    * items [BookingListItem](#bookinglistitem)

### CancellationPolicy
* CancellationPolicy `object`
  * description `string`: Description of the cancellation policy suitable for displaying to customers
  * fee `number`: The fee a guest has to pay when cancelling the reservation
  * fee_date `string`: The date and time in UTC from when the fee has to be paid in case of cancellation

### CancellationResponse
* CancellationResponse `object`: Result of cancel operation
  * _warnings `array`: Warnings that came up when your request was processed. Your request will still be processed successfull when
    * items `string`
  * balance `number`: The current balance on the reservations folio without the cancellation fee
  * cancellation_fee `number`: The fee that might be charged to the folio of the reservation. The cancelled reservation will
  * cancellation_id `string`: The id of the successful cancellation. With this id the hotel staff will be able to find the reservation

### Card
* Card `object`
  * id `string`

### CompaniesInfo
* CompaniesInfo `object`
  * company [Company](#company)
  * travel_agent [Company](#company)

### Company
* Company `object`
  * company_id `string`: The id of a company profile. The id is build out of the Supplier Code a dash and the profile id

### Contact
* Contact `object`
  * customer_id `string`: The id of a customer profile. The id is build out of the Supplier Code a dash and the profile id

### ContactResponse
* ContactResponse `object`
  * _links `object`: Collection of links to related resources
  * customer_id `string`: The id of a customer profile. The id is build out of the Supplier Code a dash and the profile id

### CreateReservationRequest
* CreateReservationRequest `object`
  * sendConfirmation `boolean`: Whether to send a confirmation email to the primary guest

### CreditCard
* CreditCard `object`
  * card_holder_name `string`: name of the card holder
  * card_number `string`: Credit card number
  * card_type `string`: One of the allowed values for a credit card type. If omitted it will be set to Others
  * cvv_code `string`: credit card verification value
  * expiration_month `integer`: month of expiration
  * expiration_year `integer`: year of expiration

### CreditCardGuarantee
* CreditCardGuarantee `object`
  * credit_card [CreditCard](#creditcard)
  * guarantee_type `string` (values: PM4Hold, PM6Hold, GuaranteeToCreditCard, GuaranteeToGuestAccount, GuaranteeByTravelAgent, GuaranteeByCompany, Deposit, Voucher, Prepayment, NonGuaranteed, Tentative, Waitlist): One of the accepted guarantee types from the offer you selected out of the rates response
  * token [Token](#token)

### Customer
* Customer `object`
  * customer_id `string`: The id of a customer profile. The id is build out of the Supplier Code a dash and the profile id
  * email `string`: The primary email address of the guest
  * first_name `string`: First name of the guest
  * gender `string` (values: Unspecified, Male, Female): Gender
  * last_name `string`: Last name of the guest
  * mailing_address [MailingAddress](#mailingaddress)
  * nationality `string`: The nationality of the guest in ISO 3166-1 alpha-2 format
  * phone `string`: The primary phone number of the guest
  * primary `boolean`: Defines if the guest is the primary guest of the reservation
  * title `string`: Title of the guest. Needs to be taken from the available titles defined in the codes

### CustomerResponse
* CustomerResponse `object`
  * _links `object`: Collection of links to related resources
  * customer_id `string`: The id of a customer profile. The id is build out of the Supplier Code a dash and the profile id
  * email `string`: The primary email address of the guest
  * first_name `string`: First name of the guest
  * gender `string` (values: Unspecified, Male, Female): Gender
  * last_name `string`: Last name of the guest
  * mailing_address [MailingAddress](#mailingaddress)
  * nationality `string`: The nationality of the guest in ISO 3166-1 alpha-2 format
  * phone `string`: The primary phone number of the guest
  * primary `boolean`: Defines if the guest is the primary guest of the reservation
  * title `string`: Title of the guest. Needs to be taken from the available titles defined in the codes

### CustomersInfo
* CustomersInfo `object`
  * contact [CustomerResponse](#customerresponse)
  * guests `array`: A list of guest details for this reservation
    * items [CustomerResponse](#customerresponse)

### DailyAvailability
* DailyAvailability `object`
  * business_day `string`: The business day the following availability numbers are shown for
  * house_level [AvailabilityDetail](#availabilitydetail)
  * room_types `array`: The availability numbers for all room types if the expand parameter is set appropriately
    * items [RoomAvailabilityDetail](#roomavailabilitydetail)

### DailyCalendarRate
* DailyCalendarRate `object`
  * business_day `string`
  * offers `array`
    * items [DailyRateOffer](#dailyrateoffer)

### DailyRate
* DailyRate `object`
  * addon_services `array`: List of addon services with additional price information.
    * items [ServiceRate](#servicerate)
  * date `string`: Date the room rate will be charged to the folio
  * excluded_tax `number`: The amount of extra taxes also calculated for all rooms and all persons per room.
  * included_services `array`: List of codes for all services already included in the gross rate
    * items `string`
  * included_tax `number`: The amount of taxes already included in the gross rate also calculated for all rooms and
  * rate `number`: The gross rate. It is the price calculated for all rooms and all persons per room.
  * room_type `string`: Code of the room type which is booked for that day

### DailyRateCancellationPolicy
* DailyRateCancellationPolicy `object`
  * _links `object`: Collection of links to related resources
  * code `string`

### DailyRateHotel
* DailyRateHotel `object`
  * _links `object`: Collection of links to related resources
  * code `string`
  * id `integer`
  * name `string`

### DailyRateNoShowPolicy
* DailyRateNoShowPolicy `object`
  * _links `object`: Collection of links to related resources
  * code `string`

### DailyRateOffer
* DailyRateOffer `object`
  * cancellation_policy_code `string`
  * guarantee_type_code `string`
  * noshow_policy_code `string`
  * rateplan_code `string`
  * room_type_details `array`
    * items [DailyRateRoomOffer](#dailyrateroomoffer)

### DailyRatePlan
* DailyRatePlan `object`
  * _links `object`: Collection of links to related resources
  * code `string`
  * currency `string`: Three letter ISO code.
  * name `string`

### DailyRateRoomOffer
* DailyRateRoomOffer `object`
  * available_rooms_count `integer`
  * is_available `boolean`
  * rates `array`
    * items [DailyRoomRate](#dailyroomrate)
  * restrictions [Restrictions](#restrictions)
  * room_type_code `string`
  * unavailable_reason `string`: If there is an issue and this room offer is unavailable (IsAvailable=false) this message may be not empty.

### DailyRatesResponse
* DailyRatesResponse `object`
  * _count `integer`: The number of items matching your request in total for all pages.
  * _links `object`: Collection of links to related resources
  * daily_rates `array`
    * items [DailyCalendarRate](#dailycalendarrate)
  * hotel [DailyRateHotel](#dailyratehotel)
  * policies [Policies](#policies)
  * rateplans `array`
    * items [DailyRatePlan](#dailyrateplan)
  * room_types `array`
    * items [RoomType](#roomtype)

### DailyRoomRate
* DailyRoomRate `object`
  * adults `integer`
  * rate `number`

### DepositPolicy
* DepositPolicy `object`
  * amount `number`: Deposit amount that has to be paid
  * description `string`: Description of the deposit policy suitable for displaying to customers
  * due_date `string`: Date the deposit amount has to be paid latest

### EmbeddedHotel
* EmbeddedHotel `object`
  * code `string`: The code of the hotel
  * id `integer`: The id of the hotel
  * name `string`: The name of the hotel

### EmbeddedRoom
* EmbeddedRoom `object`: Represents a short version of room information. To get the full version
  * _links `object`: Collection of links to related resources
  * description `string`: Description of the room
  * name `string`: Name of the room
  * number `string`: Number of the room
  * room_type [EmbeddedRoomType](#embeddedroomtype)

### EmbeddedRoomType
* EmbeddedRoomType `object`: Basic data for a room type. To get the full details please follow the self link
  * _links `object`: Collection of links to related resources
  * code `string`: Code of the room type
  * description `string`: Description of the room type
  * name `string`: Name of the room type

### GeneralPolicy
* GeneralPolicy `object`
  * description `string`: Description of the general policy suitable for displaying to customers
  * name `string`: Name of the general policy

### GetAddonsRequest
* GetAddonsRequest `object`
  * adults **required** `string`: Number of adults per room.
  * arrivalDate **required** `string`: Date from when the addon service will be booked to the reservation in the ISO-8601 format "YYYY-MM-DD".
  * channelCode **required** `string`: Channel Code the rate plan needs to be configured for.
  * departureDate **required** `string`: Date until when the addon service will be booked to the reservation in the ISO-8601 format "YYYY-MM-DD".
  * expand `string` (values: None, Breakdown): Expand the rates breakdown if required.
  * hotelId **required** `integer`: Specifies the hotel id to request offers for.
  * ratePlanCode **required** `string`: Only return offers for the specified rate plan code.
  * roomType **required** `string`: Only return offers for the specified room type code.
  * rooms **required** `string`: Number of rooms.

### GetAvailabilityRequest
* GetAvailabilityRequest `object`
  * expand `string` (values: RoomTypes): You can expand the room types breakdown per business day for the availibility numbers if need be.
  * from **required** `string`: Defines the first business day you would like to get availability numbers for.
  * hotelId **required** `integer`: Specifies the hotel id to request the availability for.
  * to **required** `string`: Defines the last business day you would like to get availability numbers for. The maximum time span between <i>from</i>´and <i>to</i>

### GetCardsResponse
* GetCardsResponse `object`
  * cards `array`
    * items [Card](#card)

### GetDailyRatesRequest
* GetDailyRatesRequest `object`
  * channelCode **required** `string`: Define the channel code in order to look up the rates for.
  * expand `array`: Define the sections you want to expand and get informed about rates for.
    * items `string` (values: None, Policies, RatePlans)
  * from **required** `string`: Define the first business day you would like to get availability numbers for. The day should not be in the past.
  * hotelId **required** `integer`: Define the hotel id to request the availability for.
  * ratePlanCodes `array`: Define the codes of rate plans to show in the response. A list of comma ',' separated rate plan codes.
    * items `string`
  * to **required** `string`: Define the last business day you would like to get rates for (inclusive). The maximum time span between <i>'From'</i> and <i>'To'</i>

### GroupMaster
* GroupMaster `object`
  * code `string`: Code of the linked group master template
  * name `string`: Name of the linked group master template

### Guarantee
* Guarantee `object`
  * guarantee_type `string` (values: PM4Hold, PM6Hold, GuaranteeToCreditCard, GuaranteeToGuestAccount, GuaranteeByTravelAgent, GuaranteeByCompany, Deposit, Voucher, Prepayment, NonGuaranteed, Tentative, Waitlist): One of the accepted guarantee types from the offer you selected out of the rates response
  * token [Token](#token)

### GuaranteeResponse
* GuaranteeResponse `object`
  * guarantee_type `string` (values: PM4Hold, PM6Hold, GuaranteeToCreditCard, GuaranteeToGuestAccount, GuaranteeByTravelAgent, GuaranteeByCompany, Deposit, Voucher, Prepayment, NonGuaranteed, Tentative, Waitlist): The guarantee type of the reservation
  * valid_token `boolean`: Tells you if there is a token for a valid creadit card on the reservation that can be used to

### GuaranteeTypes
* GuaranteeTypes `object`
  * accepted `array`
    * items `string` (values: PM4Hold, PM6Hold, GuaranteeByCompany, GuaranteeByTravelAgent, GuaranteeToGuestAccount, GuaranteeToCreditCard, Deposit, Prepayment, NonGuaranteed)
  * code `string`

### HotelInfo
* HotelInfo `object`
  * code `string`: Hotel Code which is also called property or component code
  * id `integer`: Hotel Identifier

### HotelSummary
* HotelSummary `object`
  * _links `object`: Collection of links to related resources
  * code `string`: Hotel code
  * id `integer`: Hotel Identity
  * name `string`: Hotel name

### JsonPatchDocument[ReservationPatchableModel]
* JsonPatchDocument[ReservationPatchableModel] `array`
  * items [Operation[ReservationPatchableModel]](#operation[reservationpatchablemodel])

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

### MailingAddress
* MailingAddress `object`
  * address `string`: The address details like street, number, and other in free format
  * address_type `string` (values: Home, Business, Billing, Other): One of the values from the enumeration of allowed address types
  * city `string`: The city name for this address
  * country `string`: The country code for this address in ISO 3166-1 alpha-2 format
  * postal_code `string`: The postal code for this address

### Maintenance
* Maintenance `object`
  * out_of_inventory `integer`: Number of rooms set to OutOfInventory
  * out_of_order `integer`: Number of rooms set to OutOfOrder
  * out_of_service `integer`: Number of rooms set to OutOfService

### NoShowPolicy
* NoShowPolicy `object`
  * description `string`: Description of the noshow policy suitable for displaying to customers
  * fee `number`: The fee that will be charged to the reservations folio in case the guest does not show up

### Object
* Object `object`

### Offer
* Offer `object`
  * _links `object`: Link to request addon offers for this stay
  * adults `integer`: Number of adults the offer is calculated for
  * available_rooms `integer`: Number of currently available rooms for that specific offer
  * breakdown `array`: In this collection you will get an entry with price information for every day.
    * items [RoomOfferDailyRate](#roomofferdailyrate)
  * cancellation_policies `array`: List of cancellation policies defined for that rate
    * items [CancellationPolicy](#cancellationpolicy)
  * currency `string`: The amounts of this offer are always in this currency
  * deposit_policies `array`: List of Deposit policies defined for that rate
    * items [DepositPolicy](#depositpolicy)
  * general_policies `array`: List of general policies defined for that rate
    * items [GeneralPolicy](#generalpolicy)
  * guarantee_types [AcceptedGuaranteeTypes](#acceptedguaranteetypes)
  * included_services `array`: A list of  of services included already in the rate for this offer
    * items `string`
  * noshow_policy [NoShowPolicy](#noshowpolicy)
  * rate_plan_code `string`: The code of the rate plan for this offer
  * total_stay [Rate](#rate)

### Operation[ReservationPatchableModel]
* Operation[ReservationPatchableModel] `object`
  * from `string`
  * op `string`
  * path `string`
  * value [Object](#object)

### PagedDataRequest
* PagedDataRequest `object`
  * inlinecount `string` (values: None, AllPages): Return total number of items for a given filter criteria.
  * skip `integer`: Amount of items to skip.
  * top `integer`: Amount of items to select.

### Policies
* Policies `object`
  * cancellation_policies `array`
    * items [DailyRateCancellationPolicy](#dailyratecancellationpolicy)
  * guarantee_types `array`
    * items [GuaranteeTypes](#guaranteetypes)
  * noshow_policies `array`
    * items [DailyRateNoShowPolicy](#dailyratenoshowpolicy)

### PreCheckInRequest
* PreCheckInRequest `object`: With this request you can execute a precheckin on a reservation
  * device_id **required** `string`: The device id that will be put on the reservation

### Rate
* Rate `object`
  * addon_services `array`: List of addon services with additional price information.
    * items [ServiceRate](#servicerate)
  * excluded_tax `number`: The amount of extra taxes also calculated for all rooms and all persons per room.
  * included_services `array`: List of codes for all services already included in the gross rate
    * items `string`
  * included_tax `number`: The amount of taxes already included in the gross rate also calculated for all rooms and
  * rate `number`: The gross rate. It is the price calculated for all rooms and all persons per room.

### RatePlan
* RatePlan `object`
  * code `string`: Code of the rate plan
  * description `string`: Description of the rate plan suitable for being displayed to customers
  * name `string`: Name of the rate plan

### Rates
* Rates `object`
  * arrival_date `string`: The arrival date of the guest for this rate offer
  * departure_date `string`: The departure date of the guest for this rate offer
  * hotel_id `integer`: The id of the hotel the rate offers will be valid for
  * hotel_name `string`: The name of the hotel the rate offers will be valid for
  * rate_plans `array`: List of rate plans details for rates you can find offers in the room_offers
    * items [RatePlan](#rateplan)
  * room_offers `array`: List of room types with available rate offers ordered from ascending
    * items [RoomOffer](#roomoffer)
  * rooms `array`: List of room type details for room types you can find offers in the room_offers
    * items [ReservationRoom](#reservationroom)
  * services `array`: List of service details for included services in offers you can find in the room_offers
    * items [Service](#service)

### RatesRequest
* RatesRequest `object`
  * adults **required** `string`: Number of adults per room.
  * arrivalDate **required** `string`: Date of arrival for the guest in the ISO-8601 format "YYYY-MM-DD".
  * channelCode **required** `string`: Channel Code the rate plan needs to be configured for.
  * departureDate **required** `string`: Date of departure for the guest in the ISO-8601 format "YYYY-MM-DD".
  * expand `string` (values: None, Breakdown): Expand the rates breakdown if required.
  * groupCode `string`: Only return offers for the specified group code.
  * hotelId **required** `integer`: Specifies the hotel id to request offers for.
  * ratePlanCode `string`: Only return offers for the specified room type code.
  * roomType `string`: Only return offers with rates for the specified room type code.
  * rooms `string`: Number of rooms (default is 1).

### Reservation
* Reservation `object`
  * addons `array`: A list of addon service codes that should be booked for all reservations of this booking
    * items `string`
  * adults `integer`: The number of adults per room
  * arrival_date `string`: The arrival date of the guests
  * channel_code `string`: The channel code for this reservation. You can find available channels in the codes for the hotel.
  * comment `string`: The comment you want to add for this reservation
  * company [Company](#company)
  * contact [Contact](#contact)
  * departure_date `string`: The departure date of the guests
  * external_id `string`: The external id for this reservation. You can put here your own id used by you or the external system
  * group_code `string`: The group code based on which the reservation will be created.
  * guarantee [Guarantee](#guarantee)
  * guests `array`: A list of guests with some basic guest details
    * items [Customer](#customer)
  * hotel_id **required** `integer`: The id of the hotel this reservation is valid for
  * payment_method `string` (values: None, Cash, CreditCard, WireTransfer, ChargeToCompany, Check, Voucher, DebitCard, Token, Miscellaneous, DigitalPayment): The payment method for this reservation
  * prepay_discount `number`: If you create a booking for a rateplan requiring prepayment this amount will be deducted from the booking value before
  * rate_plan `string`: The rate plan code this reservation is related to
  * room_type `string`: The room type code this reservation is related to
  * rooms `integer`: The number of rooms this reservation is for. After a multi-room booking is done there will be 
  * travelAgent [Company](#company)

### ReservationConfirmation
* ReservationConfirmation `object`
  * _warnings `array`: Warnings that came up when your request was processed. Your request will still be processed successfull when
    * items `string`
  * confirmation_id `string`: The confirmation id for the newly created booking which the guest can use to check in on the kiosk, add the
  * reservation_id `integer`: The reservation number of the newly created reservation

### ReservationDetails
* ReservationDetails `object`
  * addon_rates `array`: A breakdown of addon services with their prices for every stay day
    * items [AddonRate](#addonrate)
  * adults `integer`: The number of adults per room
  * arrival_date `string`: The arrival date of the guests
  * channel_code `string`: The channel code for this reservation. You can find available channels in the codes for the hotel.
  * comment `string`: The comment you want to add for this reservation
  * company [Company](#company)
  * contact [Contact](#contact)
  * departure_date `string`: The departure date of the guests
  * external_id `string`: The external id for this reservation. You can put here your own id used by you or the external system
  * group_code `string`: The group code based on which the reservation will be created.
  * guarantee [CreditCardGuarantee](#creditcardguarantee)
  * guests `array`: A list of guests with some basic guest details
    * items [Customer](#customer)
  * hotel_id **required** `integer`: The id of the hotel this reservation is valid for
  * payment_method `string` (values: None, Cash, CreditCard, WireTransfer, ChargeToCompany, Check, Voucher, DebitCard, Token, Miscellaneous, DigitalPayment): The payment method for this reservation
  * prepay_discount `number`: If you create a booking for a rateplan requiring prepayment this amount will be deducted from the booking value before
  * room_rates `array`: A breakdown of room rates specified for every stay day
    * items [RoomRate](#roomrate)
  * rooms `integer`: The number of rooms this reservation is for. After a multi-room booking is done there will be 
  * travelAgent [Company](#company)

### ReservationResponse
* ReservationResponse `object`
  * _warnings `array`: Warnings that came up when your request was processed. Your request will still be processed successfull when
    * items `string`
  * addon_services `array`: A list of addon service codes that are currently booked on the reservation. Services which are charged
    * items `string`
  * adults `integer`: The number of adults per room
  * arrival_date `string`: The arrival date of the guests
  * balance `number`: The balance for all folios of this reservartion. It is calculated by all already charged room and service
  * block [BlockInfo](#blockinfo)
  * cancellation_id `string`: Given the reservation was cancelled, this field contains the cancellation id
  * cancellation_policies `array`: The cancellation policies that were applicable on the date the booking was done
    * items [CancellationPolicy](#cancellationpolicy)
  * channel_code `string`: The code of the channel that was used when the booking has been created. It is also known as source. 
  * checkin_time `string`: The real checkin time of the guests. It will be set after the checkin has been performed
  * checkout_time `string`: The real checkout time of the guests. It will be set after the checkout has been performed
  * comment `string`: The comment for this reservation
  * company [Company](#company)
  * confirmation_id `string`: The confirmation id for the booking which the guest can use to check in on the kiosk, add the
  * contact [ContactResponse](#contactresponse)
  * created `string`: Timestamp the reservation was created
  * currency `string`: The currency all amounts of this reservation will be shown in
  * departure_date `string`: The departure date of the guests
  * external_id `string`: The external id for this reservation is the unique identifier from the system that created the booking in hetras. It could be the id of an
  * general_policies `array`: The general policies that were applicable on the date the booking was done
    * items [GeneralPolicy](#generalpolicy)
  * guarantee [GuaranteeResponse](#guaranteeresponse)
  * guests `array`: A list of guest details for this reservation
    * items [CustomerResponse](#customerresponse)
  * hotel_id `integer`: The id of the hotel this reservation is valid for
  * labels `array`: A list of labels that are attached to the reservation.
    * items `string`
  * market_code `string`: The code of the market segment the rate plan for this reservation is linked to
  * noshow_policy [NoShowPolicy](#noshowpolicy)
  * payment_method `string` (values: None, Cash, CreditCard, WireTransfer, ChargeToCompany, Check, Voucher, DebitCard, Token, Miscellaneous, DigitalPayment): The payment method for this reservation
  * rate_plan [RatePlan](#rateplan)
  * reservation_number `integer`: The reservation number of the reservation
  * reservation_status `string` (values: Tentative, Waitlisted, OnRequest, NonGuaranteed, Guaranteed, InHouse, CheckedOut, NoShow, Denied, Cancelled, Released, Walked, Expired, WalkIn, Registered): The current status of this reservation
  * room [EmbeddedRoom](#embeddedroom)
  * room_rates `array`: The breakdown for all daily room rates and service charges for this reservation
    * items [DailyRate](#dailyrate)
  * rooms `integer`: The number of rooms this reservation is valid for. After a multi-room booking is done there will be 
  * services `array`: A list of details for all services included and addon service booked on this reservation
    * items [Service](#service)
  * subchannel_code `string`: The code of the subchannel that was used when the booking has been created. Possible values can be 
  * total_stay [Rate](#rate)
  * updated `string`: Timestamp of when the reservation was changed the last time

### ReservationRoom
* ReservationRoom `object`
  * description `string`: The description of the room type
  * name `string`: The name of the room type
  * room_number `integer`: The room number of the assigned room
  * type `string`: The code of the room type

### ReservationsResponse
* ReservationsResponse `object`: Reservation collection response model
  * reservations `array`: All reservations for the requested booking
    * items [ReservationResponse](#reservationresponse)

### Restrictions
* Restrictions `object`
  * closed `boolean`
  * closed_to_arrival `boolean`
  * closed_to_departure `boolean`
  * maximum_length_of_stay `integer`
  * minimum_length_of_stay `integer`
  * minimum_stay_through `integer`

### RoomAvailabilityDetail
* RoomAvailabilityDetail `object`
  * _links `object`: Collection of links to related resources
  * available `integer`: The number of rooms that were originally available to sell. This is the the house count reduced by rooms set
  * blocked [Blocked](#blocked)
  * code `string`: Code of the room type
  * day_use `integer`: The number of day use reservations
  * default `boolean`: Specifies if the room type is the default room type of the hotel
  * house_count `integer`: The total count of physical rooms reduced by the number of rooms set to OutOfInventory
  * maintenance [Maintenance](#maintenance)
  * overbooking `integer`: The manually set overbooking
  * room_count `integer`: The total count of physical rooms
  * sold `integer`: The count of rooms sold. It sums up the rooms sold through individual reservations plus rooms blocked definitely
  * to_sell `integer`: The number of rooms still available to sell. It is available reduced by the already sold rooms

### RoomInfo
* RoomInfo `object`
  * number `string`: Number of the room if one is assigned already
  * room_type [RoomTypeInfo](#roomtypeinfo)

### RoomNightCount
* RoomNightCount `object`
  * count `integer`: Number of rooms blocked
  * date `string`: Business day rooms are blocked for
  * picked `integer`: Number of rooms picked up

### RoomOffer
* RoomOffer `object`
  * offers `array`: A list of rate offers for the appropriate room type ordered by amount ascending
    * items [Offer](#offer)
  * room_type `string`: The room type all offers will be valid for

### RoomOfferDailyRate
* RoomOfferDailyRate `object`
  * business_day `string`: The business day the prize for the daily rate and all included services will be posted to the folio of the reservation
  * excluded_tax `number`: The amount of taxes that are not included in the gross rate of the room offer and will be charged separately for
  * included_tax `number`: The amount of taxes already included in the gross rate of the room and all included services for this business day.
  * rate `number`: The gross rate for this day for the room and all included services. The prize is calculated for all rooms and all 

### RoomRate
* RoomRate `object`
  * business_day `string`: The business day the room rate will be charged
  * rate `number`: Total gross amount to be charged for the rate including all services of a package. Only extra taxes might
  * rate_plan `string`: The rate plan code for the specified business day
  * room_type `string`: The room type code for the specified business day

### RoomType
* RoomType `object`
  * _links `object`: Collection of links to related resources
  * code `string`
  * name `string`

### RoomTypeCount
* RoomTypeCount `object`
  * counts `array`: Number of rooms blocked or picked up for this room type per day
    * items [RoomNightCount](#roomnightcount)
  * room_type [BlockRoomType](#blockroomtype)

### RoomTypeInfo
* RoomTypeInfo `object`
  * code `string`: Code of the room type
  * name `string`: Name of the room type

### Service
* Service `object`
  * code `string`: The code of the service
  * description `string`: The description of the service which is suitable for displaying to customers
  * frequency `string`: The frequency for charging the service to the guests folio. It is a free text and only suitable for 
  * is_addon `boolean`: This flag indicates if a service is an addon or is included already in the room rate
  * name `string`: The name of the service

### ServiceRate
* ServiceRate `object`
  * code `string`: The code of the service
  * included_tax `number`: The included taxes in the gross rate of the service calculated for all rooms and all persons
  * rate `number`: The gross rate of the service calculated for all rooms and all persons

### Token
* Token `object`
  * authorization_expiry_date `string`: The authorization expiry date you got back from the payment service provider
  * authorization_reference `string`: The authorization reference. This value is specific for different payment service providers. There will be
  * authorization_status `string` (values: Authorized, Refused, Error, Canceled, Consumed, AuthorizedWithZeroAmount): The authorization status you got back from the payment service provider
  * authorized_amount `number`: The authorized amount
  * merchant_reference `string`: The merchant reference you used when requesting the token from the payment service provider
  * shopper_email `string`: The shopper email you used when requesting the token from the payment service provider
  * shopper_reference `string`: The shopper reference you used when requesting the token from the payment service provider. It can
  * token_id `string`: The token id you get from the payment service provider

### TotalCountResponse
* TotalCountResponse `object`
  * _count **required** `integer`: Returns the total count for all items matching the query parameters. If none is matching it will return 0.


