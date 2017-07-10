# @datafire/hetras_certification_booking


## Operation: Addons_Get
With the addons request you can get a list of offers for addon services available for a specific rate, room type
            and guest stay details.The channel code will define which rates will be returned based on the access control 
            configuration for related rates.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "App-Id": {
      "type": "string",
      "description": "Application identifier"
    },
    "App-Key": {
      "type": "string",
      "description": "Application key."
    },
    "hotelId": {
      "type": "integer",
      "format": "int32",
      "description": "Specifies the hotel id to request offers for."
    },
    "arrivalDate": {
      "type": "string",
      "format": "date-time",
      "description": "Date from when the addon service will be booked to the reservation in the ISO-8601 format \"YYYY-MM-DD\"."
    },
    "departureDate": {
      "type": "string",
      "format": "date-time",
      "description": "Date until when the addon service will be booked to the reservation in the ISO-8601 format \"YYYY-MM-DD\".\r\n            This is usually the departure date of the reservation."
    },
    "channelCode": {
      "type": "string",
      "description": "Channel Code the rate plan needs to be configured for."
    },
    "adults": {
      "type": "string",
      "format": "byte",
      "description": "Number of adults per room."
    },
    "rooms": {
      "type": "string",
      "format": "byte",
      "description": "Number of rooms."
    },
    "roomType": {
      "type": "string",
      "description": "Only return offers for the specified room type code."
    },
    "ratePlanCode": {
      "type": "string",
      "description": "Only return offers for the specified rate plan code."
    },
    "expand": {
      "type": "string",
      "description": "Expand the rates breakdown if required.",
      "enum": [
        "None",
        "Breakdown"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "App-Id",
    "App-Key",
    "hotelId",
    "arrivalDate",
    "departureDate",
    "channelCode",
    "adults",
    "rooms",
    "roomType",
    "ratePlanCode"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Addons"
}
```
## Operation: Availability_Get
Read past occupancy and future availability for a specific hotel. You can also request the breakdown per room type.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "App-Id": {
      "type": "string",
      "description": "Application identifier"
    },
    "App-Key": {
      "type": "string",
      "description": "Application key."
    },
    "hotelId": {
      "type": "integer",
      "format": "int32",
      "description": "Specifies the hotel id to request the availability for."
    },
    "from": {
      "type": "string",
      "format": "date-time",
      "description": "Defines the first business day you would like to get availability numbers for."
    },
    "to": {
      "type": "string",
      "format": "date-time",
      "description": "Defines the last business day you would like to get availability numbers for. The maximum time span between <i>from</i>´and <i>to</i>\r\n            is limited to 365 days."
    },
    "expand": {
      "type": "string",
      "description": "You can expand the room types breakdown per business day for the availibility numbers if need be.",
      "enum": [
        "RoomTypes"
      ]
    },
    "skip": {
      "type": "integer",
      "format": "int32",
      "description": "Amount of items to skip."
    },
    "top": {
      "type": "integer",
      "format": "int32",
      "description": "Amount of items to select."
    },
    "inlinecount": {
      "type": "string",
      "description": "Return total number of items for a given filter criteria.",
      "enum": [
        "None",
        "AllPages"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "App-Id",
    "App-Key",
    "hotelId",
    "from",
    "to"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AvailabilityResponse"
}
```
## Operation: Blocks_GetBlocks
With this endpoint you can request a list of blocks for the hotel chain. Currently we only support to optionally
            filter by the group code linked to the block. Additional filters will be available soon.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "App-Id": {
      "type": "string",
      "description": "Application identifier"
    },
    "App-Key": {
      "type": "string",
      "description": "Application key."
    },
    "hotelId": {
      "type": "integer",
      "format": "int32",
      "description": "Only return blocks for this specific hotel."
    },
    "groupCode": {
      "type": "string",
      "description": "Filter the blocks by the specified group code"
    },
    "from": {
      "type": "string",
      "format": "date-time",
      "description": "Return all blocks where the block's last_departure is greater than specified date."
    },
    "to": {
      "type": "string",
      "format": "date-time",
      "description": "Return all blocks where the block's last_departure is less than specified date."
    },
    "status": {
      "type": "string",
      "description": "Return all blocks where the block status is one of the specified values.",
      "enum": [
        "Cancelled",
        "Tentative",
        "Definite"
      ]
    },
    "ratePlanCodes": {
      "type": "array",
      "description": "Return all blocks that have related the specified comma-separated rate plans."
    },
    "skip": {
      "type": "integer",
      "format": "int32",
      "description": "Amount of items to skip."
    },
    "top": {
      "type": "integer",
      "format": "int32",
      "description": "Amount of items to select."
    },
    "inlinecount": {
      "type": "string",
      "description": "Return total number of items for a given filter criteria.",
      "enum": [
        "None",
        "AllPages"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "App-Id",
    "App-Key"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BlocksResponse"
}
```
## Operation: Blocks_GetBlocksCount
Get total blocks count that match the given filter criteria.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "App-Id": {
      "type": "string",
      "description": "Application identifier"
    },
    "App-Key": {
      "type": "string",
      "description": "Application key."
    },
    "hotelId": {
      "type": "integer",
      "format": "int32",
      "description": "Only return blocks for this specific hotel."
    },
    "groupCode": {
      "type": "string",
      "description": "Filter the blocks by the specified group code"
    },
    "from": {
      "type": "string",
      "format": "date-time",
      "description": "Return all blocks where the block's last_departure is greater than specified date."
    },
    "to": {
      "type": "string",
      "format": "date-time",
      "description": "Return all blocks where the block's last_departure is less than specified date."
    },
    "status": {
      "type": "string",
      "description": "Return all blocks where the block status is one of the specified values.",
      "enum": [
        "Cancelled",
        "Tentative",
        "Definite"
      ]
    },
    "ratePlanCodes": {
      "type": "array",
      "description": "Return all blocks that have related the specified comma-separated rate plans."
    }
  },
  "additionalProperties": false,
  "required": [
    "App-Id",
    "App-Key"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/TotalCountResponse"
}
```
## Operation: Blocks_GetSingleBlock
Read all informationen about a block including the numbers of blocked rooms per room type and business day.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "App-Id": {
      "type": "string",
      "description": "Application identifier"
    },
    "App-Key": {
      "type": "string",
      "description": "Application key."
    },
    "blockCode": {
      "type": "string",
      "description": "Specifies the block code. The block code is composed of the hotel code, a dash and the block code \r\n            as shown in the hetras UI."
    }
  },
  "additionalProperties": false,
  "required": [
    "App-Id",
    "App-Key",
    "blockCode"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BlockResponse"
}
```
## Operation: Bookings_GetBookings
Here you can easily find bookings matching various criteria. The booking you are looking for has to fullfill all the specified criteria
            at the same time. So if you specify a customer name and a channel code you will get all bookings where the firstname or lastname of a guest or a 
            contact contains the specified value and that have been done through the defined channel.
            A booking can consist of multiple reservations, so even if you are looking for a specific reservation which is part of a multi-room booking you will get
            all reservations for this booking returned.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "App-Id": {
      "type": "string",
      "description": "Application identifier"
    },
    "App-Key": {
      "type": "string",
      "description": "Application key."
    },
    "hotelId": {
      "type": "integer",
      "format": "int32",
      "description": "Only return bookings for this specific hotel."
    },
    "cancellationId": {
      "type": "string",
      "description": "Return bookings for this cancellation id."
    },
    "reservationNumber": {
      "type": "integer",
      "format": "int32",
      "description": "Return bookings matching this reservation number. Please note that reservation numbers are only unique within a hotel. If you\r\n            don´t specify a hotel filter at the same time you could get back multiple bookings from different hotels."
    },
    "customerName": {
      "type": "string",
      "description": "Return all bookings where the first or lastname of one of the guests or the contact contains the specified value. The search is executed case insensitive\r\n            and also stripping of any whitespaces."
    },
    "customerEmail": {
      "type": "string",
      "description": "Return all bookings where the primary email address of one of the guests or the contact contains the specified value. The search is executed case insensitive\r\n            and also stripping of any whitespaces."
    },
    "customerId": {
      "type": "string",
      "description": "Return all bookings the id of one of the guests or the contact matches the specified value."
    },
    "roomNumber": {
      "type": "string",
      "description": "Return all bookings having the specified room number assigned."
    },
    "externalId": {
      "type": "string",
      "description": "Return all bookings exactly matching the specified external id. This filter is case sensitive."
    },
    "companyName": {
      "type": "string",
      "description": "Return all bookings where the name of the linked company or travel agent profile contains the specified value. The search is executed case insensitive\r\n            and also stripping of any whitespaces."
    },
    "companyId": {
      "type": "string",
      "description": "Return all bookings the id of the company or travel agent profile matches the specified value."
    },
    "companyEmail": {
      "type": "string",
      "description": "Return all bookings where the primary email address of the company or the travel agent profile contains the specified value. The search is executed case insensitive\r\n            and also stripping of any whitespaces."
    },
    "blockCode": {
      "type": "string",
      "description": "Return all bookings where the block code matches the specified value."
    },
    "reservationStatuses": {
      "type": "array",
      "description": "Return all bookings where the reservation status is one of the specified values."
    },
    "marketCodes": {
      "type": "array",
      "description": "Return all bookings where the market code is one of the specified values."
    },
    "channelCodes": {
      "type": "array",
      "description": "Return all bookings where the channel code is one of the specified values."
    },
    "subChannelCodes": {
      "type": "array",
      "description": "Return all bookings where the subchannel code is one of the specified values."
    },
    "roomTypes": {
      "type": "array",
      "description": "Return all bookings where the room type is one of the specified values."
    },
    "ratePlanCodes": {
      "type": "array",
      "description": "Return all bookings where the rate plan code is one of the specified values."
    },
    "labels": {
      "type": "array",
      "description": "Return all reservations with at least one of the specified labels."
    },
    "from": {
      "type": "string",
      "format": "date-time",
      "description": "Start date for the selected date filter. If you select arrival date as date filter the bookings returned will have at least\r\n            one reservation arriving on the specified date or later."
    },
    "to": {
      "type": "string",
      "format": "date-time",
      "description": "End date for the selected date filter. If you select arrival date as date filter the bookings returned will have at least\r\n            one reservation arriving on the specified date or earlier."
    },
    "dateFilter": {
      "type": "string",
      "description": "Select a date field you want to filter bookings by. Only one filter at a time can be applied. The to and from dates\r\n            will then define the time range.",
      "enum": [
        "ArrivalDate",
        "DepartureDate",
        "StayDate",
        "CreationDate",
        "ModificationDate"
      ]
    },
    "skip": {
      "type": "integer",
      "format": "int32",
      "description": "Amount of items to skip."
    },
    "top": {
      "type": "integer",
      "format": "int32",
      "description": "Amount of items to select."
    },
    "inlinecount": {
      "type": "string",
      "description": "Return total number of items for a given filter criteria.",
      "enum": [
        "None",
        "AllPages"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "App-Id",
    "App-Key"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BookingListResponse"
}
```
## Operation: Bookings_CreateBooking
Create a new booking as defined in the requests payload. You can get more information about the payload if you check out the
            documentation for the reservation request model.<br />
            Please also have a look at the <a href="https://developer.hetras.com/docs/tutorials" onfocus="this.blur()">Tutorials</a>.<br />
            For more details on how the API responds to errors please check our documentation on 
            <a href="https://developer.hetras.com/docs/errors/" onfocus="this.blur()">Error Handling</a>.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "App-Id": {
      "type": "string",
      "description": "Application identifier"
    },
    "App-Key": {
      "type": "string",
      "description": "Application key."
    },
    "reservation": {
      "$ref": "#/definitions/Reservation"
    },
    "sendConfirmation": {
      "type": "boolean",
      "description": "Whether to send a confirmation email to the primary guest"
    }
  },
  "additionalProperties": false,
  "required": [
    "App-Id",
    "App-Key",
    "reservation"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BaseResponse"
}
```
## Operation: Bookings_GetBookingsCount
Get the count of all bookings matching your criteria. The bookings have to fullfill all the specified criteria
            at the same time. So if you specify a customer name and a channel code you will get the count for all bookings where the firstname or lastname 
            of a guest or a contact contains the specified value and that have been done through the defined channel.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "App-Id": {
      "type": "string",
      "description": "Application identifier"
    },
    "App-Key": {
      "type": "string",
      "description": "Application key."
    },
    "hotelId": {
      "type": "integer",
      "format": "int32",
      "description": "Only return bookings for this specific hotel."
    },
    "cancellationId": {
      "type": "string",
      "description": "Return bookings for this cancellation id."
    },
    "reservationNumber": {
      "type": "integer",
      "format": "int32",
      "description": "Return bookings matching this reservation number. Please note that reservation numbers are only unique within a hotel. If you\r\n            don´t specify a hotel filter at the same time you could get back multiple bookings from different hotels."
    },
    "customerName": {
      "type": "string",
      "description": "Return all bookings where the first or lastname of one of the guests or the contact contains the specified value. The search is executed case insensitive\r\n            and also stripping of any whitespaces."
    },
    "customerEmail": {
      "type": "string",
      "description": "Return all bookings where the primary email address of one of the guests or the contact contains the specified value. The search is executed case insensitive\r\n            and also stripping of any whitespaces."
    },
    "customerId": {
      "type": "string",
      "description": "Return all bookings the id of one of the guests or the contact matches the specified value."
    },
    "roomNumber": {
      "type": "string",
      "description": "Return all bookings having the specified room number assigned."
    },
    "externalId": {
      "type": "string",
      "description": "Return all bookings exactly matching the specified external id. This filter is case sensitive."
    },
    "companyName": {
      "type": "string",
      "description": "Return all bookings where the name of the linked company or travel agent profile contains the specified value. The search is executed case insensitive\r\n            and also stripping of any whitespaces."
    },
    "companyId": {
      "type": "string",
      "description": "Return all bookings the id of the company or travel agent profile matches the specified value."
    },
    "companyEmail": {
      "type": "string",
      "description": "Return all bookings where the primary email address of the company or the travel agent profile contains the specified value. The search is executed case insensitive\r\n            and also stripping of any whitespaces."
    },
    "blockCode": {
      "type": "string",
      "description": "Return all bookings where the block code matches the specified value."
    },
    "reservationStatuses": {
      "type": "array",
      "description": "Return all bookings where the reservation status is one of the specified values."
    },
    "marketCodes": {
      "type": "array",
      "description": "Return all bookings where the market code is one of the specified values."
    },
    "channelCodes": {
      "type": "array",
      "description": "Return all bookings where the channel code is one of the specified values."
    },
    "subChannelCodes": {
      "type": "array",
      "description": "Return all bookings where the subchannel code is one of the specified values."
    },
    "roomTypes": {
      "type": "array",
      "description": "Return all bookings where the room type is one of the specified values."
    },
    "ratePlanCodes": {
      "type": "array",
      "description": "Return all bookings where the rate plan code is one of the specified values."
    },
    "labels": {
      "type": "array",
      "description": "Return all reservations with at least one of the specified labels."
    },
    "from": {
      "type": "string",
      "format": "date-time",
      "description": "Start date for the selected date filter. If you select arrival date as date filter the bookings returned will have at least\r\n            one reservation arriving on the specified date or later."
    },
    "to": {
      "type": "string",
      "format": "date-time",
      "description": "End date for the selected date filter. If you select arrival date as date filter the bookings returned will have at least\r\n            one reservation arriving on the specified date or earlier."
    },
    "dateFilter": {
      "type": "string",
      "description": "Select a date field you want to filter bookings by. Only one filter at a time can be applied. The to and from dates\r\n            will then define the time range.",
      "enum": [
        "ArrivalDate",
        "DepartureDate",
        "StayDate",
        "CreationDate",
        "ModificationDate"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "App-Id",
    "App-Key"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/TotalCountResponse"
}
```
## Operation: Bookings_GetBooking
A booking groups all reservations done in one single request and can be identified by the confirmation id.
            Guests usually use the confirmation id to check in at the kiosk, on the website or mobile device. In hetras
            all reservations of one booking share the room type, rate plan and number of guests per room.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "App-Id": {
      "type": "string",
      "description": "Application identifier"
    },
    "App-Key": {
      "type": "string",
      "description": "Application key."
    },
    "confirmationId": {
      "type": "string",
      "description": "The confirmation id for the booking to load."
    },
    "expand": {
      "type": "string",
      "description": "Specifies the expand type.",
      "enum": [
        "None",
        "RoomRates"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "App-Id",
    "App-Key",
    "confirmationId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ReservationsResponse"
}
```
## Operation: Bookings_GetReservation
With this request you can load one specific reservation done with one booking request.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "App-Id": {
      "type": "string",
      "description": "Application identifier"
    },
    "App-Key": {
      "type": "string",
      "description": "Application key."
    },
    "confirmationId": {
      "type": "string",
      "description": "The confirmation id for the booking the reservation was made."
    },
    "reservationNumber": {
      "type": "integer",
      "format": "int32",
      "description": "Specifies the reservation number for the reservation to load."
    },
    "expand": {
      "type": "string",
      "description": "Specifies the expand type.",
      "enum": [
        "None",
        "RoomRates"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "App-Id",
    "App-Key",
    "confirmationId",
    "reservationNumber"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ReservationResponse"
}
```
## Operation: Bookings_Patch
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

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "App-Id": {
      "type": "string",
      "description": "Application identifier"
    },
    "App-Key": {
      "type": "string",
      "description": "Application key."
    },
    "confirmationId": {
      "type": "string",
      "description": "The confirmation id for the booking the reservation was made."
    },
    "reservationNumber": {
      "type": "integer",
      "format": "int32",
      "description": "Specifies the reservation number for the reservation that has to be updated."
    },
    "patchRequest": {
      "$ref": "#/definitions/JsonPatchDocument[ReservationPatchableModel]"
    }
  },
  "additionalProperties": false,
  "required": [
    "App-Id",
    "App-Key",
    "confirmationId",
    "reservationNumber",
    "patchRequest"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: Bookings_PostRoomAssignment
By default this API call assigns a random room, which has the proper room type, is not already assigned
            to another reservation or has any maintenance status set for the stay period of the underlying reservation. If the
            arrival date for the underlying reservation is the current business day dirty rooms are excluded by default. For reservation
            arriving on any latter day the room condition is not taken into account.<br />
            By specifiying the room selection criteria in the request body you can influence which room will be assigned. See the request model
            for further details.<br />
            For more details on how the API responds to errors please check our documentation on 
            <a href="https://developer.hetras.com/docs/errors/" onfocus="this.blur()">Error Handling</a>.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "App-Id": {
      "type": "string",
      "description": "Application identifier"
    },
    "App-Key": {
      "type": "string",
      "description": "Application key."
    },
    "confirmationId": {
      "type": "string",
      "description": "The confirmation id for the booking the reservation was made."
    },
    "reservationNumber": {
      "type": "integer",
      "format": "int32",
      "description": "Specifies the reservation number for the reservation the room should be assigned to."
    },
    "assigningCriteria": {
      "$ref": "#/definitions/AssignRoomCriteria"
    }
  },
  "additionalProperties": false,
  "required": [
    "App-Id",
    "App-Key",
    "confirmationId",
    "reservationNumber"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AssignRoomResponse"
}
```
## Operation: Bookings_CancelReservation
This request will cancel one specific reservation. It will show up in the hetras UI in the Cancellation and NoShow
            processing screen and it will be up to the hotel staff to either charge or waive the cancellation fee.<br />
            For more details on how the API responds to errors please check our documentation on 
            <a href="https://developer.hetras.com/docs/errors/" onfocus="this.blur()">Error Handling</a>.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "App-Id": {
      "type": "string",
      "description": "Application identifier"
    },
    "App-Key": {
      "type": "string",
      "description": "Application key."
    },
    "confirmationId": {
      "type": "string",
      "description": "The confirmation id for the booking the reservation was made."
    },
    "reservationNumber": {
      "type": "integer",
      "format": "int32",
      "description": "Specifies the reservation number for the reservation to cancel."
    }
  },
  "additionalProperties": false,
  "required": [
    "App-Id",
    "App-Key",
    "confirmationId",
    "reservationNumber"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CancellationResponse"
}
```
## Operation: DailyRates_GetDailyRates
With the rates request you can get a list of different daily rates. You will have to at least 
            specify the hotel, the channel code, and a calendar range. The channel code will define which rates will be 
            returned based on the access control configuration for the rates. Additionally rate plan codes may be specified in
            the request in order to limit only those rates of the given plans, if they are not specified, it will return all the public rate plans.
            If requested the caller may specify whether he wants policies or not.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "App-Id": {
      "type": "string",
      "description": "Application identifier"
    },
    "App-Key": {
      "type": "string",
      "description": "Application key."
    },
    "hotelId": {
      "type": "integer",
      "format": "int32",
      "description": "Define the hotel id to request the availability for."
    },
    "from": {
      "type": "string",
      "format": "date-time",
      "description": "Define the first business day you would like to get availability numbers for. The day should not be in the past."
    },
    "to": {
      "type": "string",
      "format": "date-time",
      "description": "Define the last business day you would like to get rates for (inclusive). The maximum time span between <i>'From'</i> and <i>'To'</i>\r\n            is limited to 365 days. This can't be less than the 'From' date."
    },
    "channelCode": {
      "type": "string",
      "description": "Define the channel code in order to look up the rates for."
    },
    "expand": {
      "type": "array",
      "description": "Define the sections you want to expand and get informed about rates for."
    },
    "ratePlanCodes": {
      "type": "array",
      "description": "Define the codes of rate plans to show in the response. A list of comma ',' separated rate plan codes."
    },
    "skip": {
      "type": "integer",
      "format": "int32",
      "description": "Amount of items to skip."
    },
    "top": {
      "type": "integer",
      "format": "int32",
      "description": "Amount of items to select."
    },
    "inlinecount": {
      "type": "string",
      "description": "Return total number of items for a given filter criteria.",
      "enum": [
        "None",
        "AllPages"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "App-Id",
    "App-Key",
    "hotelId",
    "from",
    "to",
    "channelCode"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/DailyRatesResponse"
}
```
## Operation: Rates_Get
With the rates request you can get a list of different rate offers per room type. You will have to at least 
            specify the hotel, the arrival and departure date, number of adults per room and the channel code. The channel code
            will define which rates will be returned based on the access control configuration for the rates.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "App-Id": {
      "type": "string",
      "description": "Application identifier"
    },
    "App-Key": {
      "type": "string",
      "description": "Application key."
    },
    "hotelId": {
      "type": "integer",
      "format": "int32",
      "description": "Specifies the hotel id to request offers for."
    },
    "arrivalDate": {
      "type": "string",
      "format": "date-time",
      "description": "Date of arrival for the guest in the ISO-8601 format \"YYYY-MM-DD\"."
    },
    "departureDate": {
      "type": "string",
      "format": "date-time",
      "description": "Date of departure for the guest in the ISO-8601 format \"YYYY-MM-DD\"."
    },
    "channelCode": {
      "type": "string",
      "description": "Channel Code the rate plan needs to be configured for."
    },
    "adults": {
      "type": "string",
      "format": "byte",
      "description": "Number of adults per room."
    },
    "rooms": {
      "type": "string",
      "format": "byte",
      "description": "Number of rooms (default is 1)."
    },
    "roomType": {
      "type": "string",
      "description": "Only return offers with rates for the specified room type code."
    },
    "ratePlanCode": {
      "type": "string",
      "description": "Only return offers for the specified room type code."
    },
    "groupCode": {
      "type": "string",
      "description": "Only return offers for the specified group code."
    },
    "expand": {
      "type": "string",
      "description": "Expand the rates breakdown if required.",
      "enum": [
        "None",
        "Breakdown"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "App-Id",
    "App-Key",
    "hotelId",
    "arrivalDate",
    "departureDate",
    "channelCode",
    "adults"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Rates"
}
```
