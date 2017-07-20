# @datafire/hetras_certification_booking

Client library for hetras Booking API Version 0

## Installation and Usage
```bash
npm install --save datafire @datafire/hetras_certification_booking
```

```js
let datafire = require('datafire');
let hetras_certification_booking = require('@datafire/hetras_certification_booking').actions;
let context = new datafire.Context();

hetras_certification_booking.Addons_Get({}, context).then(data => {
  console.log(data);
})
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

#### Parameters
* App-Id (string) **required** - Application identifier
* App-Key (string) **required** - Application key.
* hotelId (integer) **required** - Specifies the hotel id to request offers for.
* arrivalDate (string) **required** - Date from when the addon service will be booked to the reservation in the ISO-8601 format "YYYY-MM-DD".
* departureDate (string) **required** - Date until when the addon service will be booked to the reservation in the ISO-8601 format "YYYY-MM-DD".
* channelCode (string) **required** - Channel Code the rate plan needs to be configured for.
* adults (string) **required** - Number of adults per room.
* rooms (string) **required** - Number of rooms.
* roomType (string) **required** - Only return offers for the specified room type code.
* ratePlanCode (string) **required** - Only return offers for the specified rate plan code.
* expand (string) - Expand the rates breakdown if required.

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

#### Parameters
* App-Id (string) **required** - Application identifier
* App-Key (string) **required** - Application key.
* hotelId (integer) **required** - Specifies the hotel id to request the availability for.
* from (string) **required** - Defines the first business day you would like to get availability numbers for.
* to (string) **required** - Defines the last business day you would like to get availability numbers for. The maximum time span between <i>from</i>´and <i>to</i>
* expand (string) - You can expand the room types breakdown per business day for the availibility numbers if need be.
* skip (integer) - Amount of items to skip.
* top (integer) - Amount of items to select.
* inlinecount (string) - Return total number of items for a given filter criteria.

### Blocks_GetBlocks
With this endpoint you can request a list of blocks for the hotel chain. Currently we only support to optionally
            filter by the group code linked to the block. Additional filters will be available soon.


```js
hetras_certification_booking.Blocks_GetBlocks({
  "App-Id": "",
  "App-Key": ""
}, context)
```

#### Parameters
* App-Id (string) **required** - Application identifier
* App-Key (string) **required** - Application key.
* hotelId (integer) - Only return blocks for this specific hotel.
* groupCode (string) - Filter the blocks by the specified group code
* from (string) - Return all blocks where the block's last_departure is greater than specified date.
* to (string) - Return all blocks where the block's last_departure is less than specified date.
* status (string) - Return all blocks where the block status is one of the specified values.
* ratePlanCodes (array) - Return all blocks that have related the specified comma-separated rate plans.
* skip (integer) - Amount of items to skip.
* top (integer) - Amount of items to select.
* inlinecount (string) - Return total number of items for a given filter criteria.

### Blocks_GetBlocksCount
Get total blocks count that match the given filter criteria.


```js
hetras_certification_booking.Blocks_GetBlocksCount({
  "App-Id": "",
  "App-Key": ""
}, context)
```

#### Parameters
* App-Id (string) **required** - Application identifier
* App-Key (string) **required** - Application key.
* hotelId (integer) - Only return blocks for this specific hotel.
* groupCode (string) - Filter the blocks by the specified group code
* from (string) - Return all blocks where the block's last_departure is greater than specified date.
* to (string) - Return all blocks where the block's last_departure is less than specified date.
* status (string) - Return all blocks where the block status is one of the specified values.
* ratePlanCodes (array) - Return all blocks that have related the specified comma-separated rate plans.

### Blocks_GetSingleBlock
Read all informationen about a block including the numbers of blocked rooms per room type and business day.


```js
hetras_certification_booking.Blocks_GetSingleBlock({
  "App-Id": "",
  "App-Key": "",
  "blockCode": ""
}, context)
```

#### Parameters
* App-Id (string) **required** - Application identifier
* App-Key (string) **required** - Application key.
* blockCode (string) **required** - Specifies the block code. The block code is composed of the hotel code, a dash and the block code 

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

#### Parameters
* App-Id (string) **required** - Application identifier
* App-Key (string) **required** - Application key.
* hotelId (integer) - Only return bookings for this specific hotel.
* cancellationId (string) - Return bookings for this cancellation id.
* reservationNumber (integer) - Return bookings matching this reservation number. Please note that reservation numbers are only unique within a hotel. If you
* customerName (string) - Return all bookings where the first or lastname of one of the guests or the contact contains the specified value. The search is executed case insensitive
* customerEmail (string) - Return all bookings where the primary email address of one of the guests or the contact contains the specified value. The search is executed case insensitive
* customerId (string) - Return all bookings the id of one of the guests or the contact matches the specified value.
* roomNumber (string) - Return all bookings having the specified room number assigned.
* externalId (string) - Return all bookings exactly matching the specified external id. This filter is case sensitive.
* companyName (string) - Return all bookings where the name of the linked company or travel agent profile contains the specified value. The search is executed case insensitive
* companyId (string) - Return all bookings the id of the company or travel agent profile matches the specified value.
* companyEmail (string) - Return all bookings where the primary email address of the company or the travel agent profile contains the specified value. The search is executed case insensitive
* blockCode (string) - Return all bookings where the block code matches the specified value.
* reservationStatuses (array) - Return all bookings where the reservation status is one of the specified values.
* marketCodes (array) - Return all bookings where the market code is one of the specified values.
* channelCodes (array) - Return all bookings where the channel code is one of the specified values.
* subChannelCodes (array) - Return all bookings where the subchannel code is one of the specified values.
* roomTypes (array) - Return all bookings where the room type is one of the specified values.
* ratePlanCodes (array) - Return all bookings where the rate plan code is one of the specified values.
* labels (array) - Return all reservations with at least one of the specified labels.
* from (string) - Start date for the selected date filter. If you select arrival date as date filter the bookings returned will have at least
* to (string) - End date for the selected date filter. If you select arrival date as date filter the bookings returned will have at least
* dateFilter (string) - Select a date field you want to filter bookings by. Only one filter at a time can be applied. The to and from dates
* skip (integer) - Amount of items to skip.
* top (integer) - Amount of items to select.
* inlinecount (string) - Return total number of items for a given filter criteria.

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

#### Parameters
* App-Id (string) **required** - Application identifier
* App-Key (string) **required** - Application key.
* reservation (object) **required**
* sendConfirmation (boolean) - Whether to send a confirmation email to the primary guest

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

#### Parameters
* App-Id (string) **required** - Application identifier
* App-Key (string) **required** - Application key.
* hotelId (integer) - Only return bookings for this specific hotel.
* cancellationId (string) - Return bookings for this cancellation id.
* reservationNumber (integer) - Return bookings matching this reservation number. Please note that reservation numbers are only unique within a hotel. If you
* customerName (string) - Return all bookings where the first or lastname of one of the guests or the contact contains the specified value. The search is executed case insensitive
* customerEmail (string) - Return all bookings where the primary email address of one of the guests or the contact contains the specified value. The search is executed case insensitive
* customerId (string) - Return all bookings the id of one of the guests or the contact matches the specified value.
* roomNumber (string) - Return all bookings having the specified room number assigned.
* externalId (string) - Return all bookings exactly matching the specified external id. This filter is case sensitive.
* companyName (string) - Return all bookings where the name of the linked company or travel agent profile contains the specified value. The search is executed case insensitive
* companyId (string) - Return all bookings the id of the company or travel agent profile matches the specified value.
* companyEmail (string) - Return all bookings where the primary email address of the company or the travel agent profile contains the specified value. The search is executed case insensitive
* blockCode (string) - Return all bookings where the block code matches the specified value.
* reservationStatuses (array) - Return all bookings where the reservation status is one of the specified values.
* marketCodes (array) - Return all bookings where the market code is one of the specified values.
* channelCodes (array) - Return all bookings where the channel code is one of the specified values.
* subChannelCodes (array) - Return all bookings where the subchannel code is one of the specified values.
* roomTypes (array) - Return all bookings where the room type is one of the specified values.
* ratePlanCodes (array) - Return all bookings where the rate plan code is one of the specified values.
* labels (array) - Return all reservations with at least one of the specified labels.
* from (string) - Start date for the selected date filter. If you select arrival date as date filter the bookings returned will have at least
* to (string) - End date for the selected date filter. If you select arrival date as date filter the bookings returned will have at least
* dateFilter (string) - Select a date field you want to filter bookings by. Only one filter at a time can be applied. The to and from dates

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

#### Parameters
* App-Id (string) **required** - Application identifier
* App-Key (string) **required** - Application key.
* confirmationId (string) **required** - The confirmation id for the booking to load.
* expand (string) - Specifies the expand type.

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

#### Parameters
* App-Id (string) **required** - Application identifier
* App-Key (string) **required** - Application key.
* confirmationId (string) **required** - The confirmation id for the booking the reservation was made.
* reservationNumber (integer) **required** - Specifies the reservation number for the reservation to load.
* expand (string) - Specifies the expand type.

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

#### Parameters
* App-Id (string) **required** - Application identifier
* App-Key (string) **required** - Application key.
* confirmationId (string) **required** - The confirmation id for the booking the reservation was made.
* reservationNumber (integer) **required** - Specifies the reservation number for the reservation that has to be updated.
* patchRequest (array) **required**

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

#### Parameters
* App-Id (string) **required** - Application identifier
* App-Key (string) **required** - Application key.
* confirmationId (string) **required** - The confirmation id for the booking the reservation was made.
* reservationNumber (integer) **required** - Specifies the reservation number for the reservation the room should be assigned to.
* assigningCriteria (object) - Represents a set of criteria for assigning a room

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

#### Parameters
* App-Id (string) **required** - Application identifier
* App-Key (string) **required** - Application key.
* confirmationId (string) **required** - The confirmation id for the booking the reservation was made.
* reservationNumber (integer) **required** - Specifies the reservation number for the reservation to cancel.

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

#### Parameters
* App-Id (string) **required** - Application identifier
* App-Key (string) **required** - Application key.
* hotelId (integer) **required** - Define the hotel id to request the availability for.
* from (string) **required** - Define the first business day you would like to get availability numbers for. The day should not be in the past.
* to (string) **required** - Define the last business day you would like to get rates for (inclusive). The maximum time span between <i>'From'</i> and <i>'To'</i>
* channelCode (string) **required** - Define the channel code in order to look up the rates for.
* expand (array) - Define the sections you want to expand and get informed about rates for.
* ratePlanCodes (array) - Define the codes of rate plans to show in the response. A list of comma ',' separated rate plan codes.
* skip (integer) - Amount of items to skip.
* top (integer) - Amount of items to select.
* inlinecount (string) - Return total number of items for a given filter criteria.

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

#### Parameters
* App-Id (string) **required** - Application identifier
* App-Key (string) **required** - Application key.
* hotelId (integer) **required** - Specifies the hotel id to request offers for.
* arrivalDate (string) **required** - Date of arrival for the guest in the ISO-8601 format "YYYY-MM-DD".
* departureDate (string) **required** - Date of departure for the guest in the ISO-8601 format "YYYY-MM-DD".
* channelCode (string) **required** - Channel Code the rate plan needs to be configured for.
* adults (string) **required** - Number of adults per room.
* rooms (string) - Number of rooms (default is 1).
* roomType (string) - Only return offers with rates for the specified room type code.
* ratePlanCode (string) - Only return offers for the specified room type code.
* groupCode (string) - Only return offers for the specified group code.
* expand (string) - Expand the rates breakdown if required.

