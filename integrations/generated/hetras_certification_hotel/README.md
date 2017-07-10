# @datafire/hetras_certification_hotel


## Operation: Hotels_GetHotels
Load the details about all the hotels your application has access to.

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
  "items": {
    "$ref": "#/definitions/Hotel"
  },
  "type": "array"
}
```
## Operation: Hotels_GetHotel
Load the details about the specified hotel.

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
      "format": "int32"
    }
  },
  "additionalProperties": false,
  "required": [
    "App-Id",
    "App-Key",
    "hotelId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Hotel"
}
```
## Operation: Codes_GetCodes
With this call you can find codes for a hotel by type or code. By default and without any filter criteria
            defined it will return you all available codes.

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
      "description": "The hotel id you are trying to find codes for."
    },
    "code": {
      "type": "string",
      "description": "Return all codes matching the code. Only the combinication of code and type\r\n            make a code unique, so it can happen that you get multiple codes with the same\r\n            value for different types"
    },
    "type": {
      "type": "string",
      "description": "Return all codes available for the specified type",
      "enum": [
        "GuestRequest",
        "RequestDietary",
        "VIPStatus",
        "ReasonForRateChange",
        "Regrets",
        "MarketSegments",
        "SourceOfBusiness",
        "LoyaltyProgram",
        "CancellationReason",
        "AccountType",
        "AccountRank",
        "VIPLevel",
        "Title",
        "ContactFunction",
        "Territory",
        "CorrespondenceType",
        "ExternalProgramType",
        "RevenueBucket",
        "AdditionalRevenueBucket",
        "AdditionalStatisticsBuckets",
        "MealPeriod",
        "BillingCycle",
        "ReminderCycle",
        "MajorMarketSegments",
        "DocumentType",
        "ActivityType",
        "ReservationLabels"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "App-Id",
    "App-Key",
    "hotelId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CodesListResponse"
}
```
## Operation: Codes_GetCode
Read the details about a specific code available for the defined hotel.

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
      "description": "The hotel id the code available for."
    },
    "id": {
      "type": "string",
      "description": "The code identifier you want to see details for."
    }
  },
  "additionalProperties": false,
  "required": [
    "App-Id",
    "App-Key",
    "hotelId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CodeFullEntry"
}
```
## Operation: RatePlans_GetRateplans
With this call you can find rateplans for a hotel by different filters. By default and without any filter criteria
            defined it will return you all active rateplans.

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
      "description": "The hotel id you are trying to find rateplans for."
    },
    "sellingStatus": {
      "type": "string",
      "description": "Specify which rateplans to return. If you do not specify a value you will by default get active\r\n            rateplans.",
      "enum": [
        "Active",
        "Inactive",
        "All"
      ]
    },
    "commissionable": {
      "type": "boolean",
      "description": "Return all rateplans having commisionable status"
    },
    "group": {
      "type": "string",
      "description": "Return all rateplans belonging to the specified rateplan group"
    },
    "baseRateplan": {
      "type": "string",
      "description": "Return all rateplans having the specified rateplan as base rateplan"
    },
    "channelGroup": {
      "type": "string",
      "description": "Return all rateplans that are sold through at least one channel out of the specified channel group"
    },
    "channelCode": {
      "type": "string",
      "description": "Return all rateplans sold through the specified channel"
    },
    "marketCodes": {
      "type": "array",
      "description": "Return all rateplans having one of the specified values as a market code"
    },
    "roomTypes": {
      "type": "array",
      "description": "Return all rateplans by which at least one of the specified room types are sold"
    },
    "includedServices": {
      "type": "array",
      "description": "Return all rateplans having at least one of the specified services included"
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
    "hotelId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RateplansListResponse"
}
```
## Operation: RatePlans_GetRateplansCount
Get the count of all rateplans in the hotel matching the given filter criteria.

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
      "description": "The hotel you are counting the rateplans for."
    },
    "sellingStatus": {
      "type": "string",
      "description": "Specify which rateplans to return. If you do not specify a value you will by default get active\r\n            rateplans.",
      "enum": [
        "Active",
        "Inactive",
        "All"
      ]
    },
    "commissionable": {
      "type": "boolean",
      "description": "Return all rateplans having commisionable status"
    },
    "group": {
      "type": "string",
      "description": "Return all rateplans belonging to the specified rateplan group"
    },
    "baseRateplan": {
      "type": "string",
      "description": "Return all rateplans having the specified rateplan as base rateplan"
    },
    "channelGroup": {
      "type": "string",
      "description": "Return all rateplans that are sold through at least one channel out of the specified channel group"
    },
    "channelCode": {
      "type": "string",
      "description": "Return all rateplans sold through the specified channel"
    },
    "marketCodes": {
      "type": "array",
      "description": "Return all rateplans having one of the specified values as a market code"
    },
    "roomTypes": {
      "type": "array",
      "description": "Return all rateplans by which at least one of the specified room types are sold"
    },
    "includedServices": {
      "type": "array",
      "description": "Return all rateplans having at least one of the specified services included"
    }
  },
  "additionalProperties": false,
  "required": [
    "App-Id",
    "App-Key",
    "hotelId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/TotalCountResponse"
}
```
## Operation: RatePlans_GetRateplan
Read the details about a specific rateplan for the defined hotel.

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
      "description": "The hotel id the rateplan belongs to."
    },
    "rateplanCode": {
      "type": "string",
      "description": "The code of the rateplan you want to see details for."
    }
  },
  "additionalProperties": false,
  "required": [
    "App-Id",
    "App-Key",
    "hotelId",
    "rateplanCode"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ExtendedRateplanEntry"
}
```
## Operation: RatePlans_GetRates
With this call you can read the daily rates setup including the cancellation policy and minimum guarantee per day for the
            specified rateplan. You can specify a timeperiod to read the daily rates for. The rateplan needs to be active for at least
            one business day in the defined time period and have rates loaded.

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
      "description": "The hotel id the rateplan belongs to."
    },
    "rateplanCode": {
      "type": "string",
      "description": "The code of the rateplan you want to see details for."
    },
    "expand": {
      "type": "string",
      "description": "You can expand the supplements per room type on demand. By default they are not shown.",
      "enum": [
        "RoomTypeSupplements"
      ]
    },
    "from": {
      "type": "string",
      "format": "date-time",
      "description": "Defines the last business day you would like to get rates for. The maximum time span between <i>from</i>´and <i>to</i>\r\n            is limited to 365 days."
    },
    "to": {
      "type": "string",
      "format": "date-time",
      "description": "Defines the first business day you would like to get rates for."
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
    "rateplanCode",
    "from",
    "to"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RatesResponse"
}
```
## Operation: RatePlans_PatchRates
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
      "description": "The hotel id the rateplan belongs to."
    },
    "rateplanCode": {
      "type": "string",
      "description": "The code of the rateplan you want to update the daily rate details for."
    },
    "patchRequest": {
      "$ref": "#/definitions/JsonPatchDocument[RatePatchRequest]"
    },
    "from": {
      "type": "string",
      "format": "date-time",
      "description": "Defines the last business day you would like to get rates for. The maximum time span between <i>from</i>´and <i>to</i>\r\n            is limited to 365 days."
    },
    "to": {
      "type": "string",
      "format": "date-time",
      "description": "Defines the first business day you would like to get rates for."
    }
  },
  "additionalProperties": false,
  "required": [
    "App-Id",
    "App-Key",
    "hotelId",
    "rateplanCode",
    "patchRequest",
    "from",
    "to"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: RatePlans_GetRatesCount
Get the count of all active and loaded daily rates for the defined rateplan in a specified time period.

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
      "description": "The hotel id the rateplan belongs to."
    },
    "rateplanCode": {
      "type": "string",
      "description": "The code of the rateplan you want to count daily rates for."
    },
    "from": {
      "type": "string",
      "format": "date-time",
      "description": "Defines the last business day you would like to get rates for. The maximum time span between <i>from</i>´and <i>to</i>\r\n            is limited to 365 days."
    },
    "to": {
      "type": "string",
      "format": "date-time",
      "description": "Defines the first business day you would like to get rates for."
    }
  },
  "additionalProperties": false,
  "required": [
    "App-Id",
    "App-Key",
    "hotelId",
    "rateplanCode",
    "from",
    "to"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/TotalCountResponse"
}
```
## Operation: RatePlans_GetRate
Read the setup of the daily rate for the defined rateplan for that specific business day.

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
      "description": "The hotel id the rateplan belongs to."
    },
    "rateplanCode": {
      "type": "string",
      "description": "The code of the rateplan you want to see details for."
    },
    "businessDay": {
      "type": "string",
      "format": "date-time",
      "description": "The business day you want to get the rate setup for."
    }
  },
  "additionalProperties": false,
  "required": [
    "App-Id",
    "App-Key",
    "hotelId",
    "rateplanCode",
    "businessDay"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RateResponse"
}
```
## Operation: RatePlans_PatchRate
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
      "description": "The hotel id the rateplan belongs to."
    },
    "rateplanCode": {
      "type": "string",
      "description": "The code of the rateplan you want to update the daily rate details for."
    },
    "businessDay": {
      "type": "string",
      "format": "date-time",
      "description": "The business day of the daily rate you want to update."
    },
    "patchRequest": {
      "$ref": "#/definitions/JsonPatchDocument[RatePatchRequest]"
    }
  },
  "additionalProperties": false,
  "required": [
    "App-Id",
    "App-Key",
    "hotelId",
    "rateplanCode",
    "businessDay",
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
## Operation: RoomTypes_GetRoomTypes
With this call you can load the details about a all available room types for the specified hotel.

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
      "description": "The hotel id the room type belongs to."
    }
  },
  "additionalProperties": false,
  "required": [
    "App-Id",
    "App-Key",
    "hotelId"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/RoomType"
  },
  "type": "array"
}
```
## Operation: RoomTypes_GetRoomType
With this call you can load the details about a specific room type in the hotel.

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
      "description": "The hotel id the room type belongs to."
    },
    "code": {
      "type": "string",
      "description": "The code of the room type you want to see details for."
    }
  },
  "additionalProperties": false,
  "required": [
    "App-Id",
    "App-Key",
    "hotelId",
    "code"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RoomType"
}
```
## Operation: Rooms_GetRooms
Find all rooms for the hotel that match the specified filter criteria. The filtering will be done based on the current state of
            the rooms.

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
      "description": "The hotel you are trying to find rooms for."
    },
    "occupancy": {
      "type": "string",
      "description": "Return results only for rooms that have the given frontdesk ocuppancy status.",
      "enum": [
        "Occupied",
        "Vacant"
      ]
    },
    "conditions": {
      "type": "array",
      "description": "Return results only for rooms that have the given room condition status."
    },
    "maintenances": {
      "type": "array",
      "description": "Return results only for rooms that have the given maintenance status."
    },
    "roomTypes": {
      "type": "array",
      "description": "Return result only for rooms for the given room types. Allows to pass a comma-separated list of room types."
    },
    "amenities": {
      "type": "array",
      "description": "Return result only for rooms having all of the given amenities. You can provide a comma seperated list of \r\n            amenity codes."
    },
    "views": {
      "type": "array",
      "description": "Return result only for rooms having at least one of the specified views. You can provide a comma seperated list of \r\n            view codes."
    },
    "locations": {
      "type": "array",
      "description": "Return result only for rooms having at least one of the specified locations. You can provide a comma seperated list of \r\n            location codes."
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
    "hotelId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RoomListResponse"
}
```
## Operation: Rooms_GetRoomsCount
Get the count of all rooms in the hotel matching the given filter criteria.

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
      "description": "The hotel you are counting the rooms for."
    },
    "occupancy": {
      "type": "string",
      "description": "Return results only for rooms that have the given frontdesk ocuppancy status.",
      "enum": [
        "Occupied",
        "Vacant"
      ]
    },
    "conditions": {
      "type": "array",
      "description": "Return results only for rooms that have the given room condition status."
    },
    "maintenances": {
      "type": "array",
      "description": "Return results only for rooms that have the given maintenance status."
    },
    "roomTypes": {
      "type": "array",
      "description": "Return result only for rooms for the given room types. Allows to pass a comma-separated list of room types."
    },
    "amenities": {
      "type": "array",
      "description": "Return result only for rooms having all of the given amenities. You can provide a comma seperated list of \r\n            amenity codes."
    },
    "views": {
      "type": "array",
      "description": "Return result only for rooms having at least one of the specified views. You can provide a comma seperated list of \r\n            view codes."
    },
    "locations": {
      "type": "array",
      "description": "Return result only for rooms having at least one of the specified locations. You can provide a comma seperated list of \r\n            location codes."
    }
  },
  "additionalProperties": false,
  "required": [
    "App-Id",
    "App-Key",
    "hotelId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/TotalCountResponse"
}
```
## Operation: Rooms_GetAvailableRooms
Request available rooms using a given criteria.

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
      "description": "The hotel you are looking for available rooms."
    },
    "from": {
      "type": "string",
      "format": "date-time",
      "description": "Rooms returned will not be assigned to a reservation or be under maintenance between this date\r\n            and the specified to date. Still there could be departing reservations or ending maintenances\r\n            for this date."
    },
    "to": {
      "type": "string",
      "format": "date-time",
      "description": "Rooms returned will not be assigned to a reservation or be under maintenance between the specified\r\n            from date and this date. Still there could be arriving reservations or beginning maintenances\r\n            for this date."
    },
    "adults": {
      "type": "string",
      "format": "byte",
      "description": "Specifies number of adults the returned rooms will have to be able to house. The default value is 1."
    },
    "includeOutOfService": {
      "type": "boolean",
      "description": "Should rooms that are set OutOfService in the defined time period be returned as available. By default\r\n            they are not."
    },
    "roomTypes": {
      "type": "array",
      "description": "Return result only for rooms for the given room types. Allows to pass a comma-separated list of room types."
    },
    "amenities": {
      "type": "array",
      "description": "Return result only for rooms having all of the given amenities. You can provide a comma seperated list of \r\n            amenity codes."
    },
    "views": {
      "type": "array",
      "description": "Return result only for rooms having at least one of the specified views. You can provide a comma seperated list of \r\n            view codes."
    },
    "locations": {
      "type": "array",
      "description": "Return result only for rooms having at least one of the specified locations. You can provide a comma seperated list of \r\n            location codes."
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
  "$ref": "#/definitions/RoomListResponse"
}
```
## Operation: Rooms_GetRoom
With this call you can load the details about a specific room in the hotel. It will show you the current status of the room.

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
      "description": "The hotel id the room belongs to."
    },
    "roomNumber": {
      "type": "string",
      "description": "The room number you want to see details for."
    }
  },
  "additionalProperties": false,
  "required": [
    "App-Id",
    "App-Key",
    "hotelId",
    "roomNumber"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Room"
}
```
## Operation: Rooms_PatchRoom
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
      "description": "The hotel id the room belongs to."
    },
    "roomNumber": {
      "type": "string",
      "description": "The room number of the room you would like to update."
    },
    "patchRequest": {
      "$ref": "#/definitions/JsonPatchDocument[RoomPatchRequest]"
    }
  },
  "additionalProperties": false,
  "required": [
    "App-Id",
    "App-Key",
    "hotelId",
    "roomNumber",
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
