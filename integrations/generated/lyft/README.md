# @datafire/lyft
Drive your app to success with Lyft's API

## Operation: oauthCallback


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "code": {
      "title": "code",
      "type": "string"
    }
  },
  "required": [
    "code"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "access_token": {
      "type": "string"
    },
    "refresh_token": {
      "type": "string"
    },
    "token_type": {
      "type": "string"
    },
    "scope": {
      "type": "string"
    },
    "expiration": {
      "type": "string"
    }
  }
}
```
## Operation: oauthRefresh


### Input Schema
```json
{}
```
### Output Schema
```json
{
  "properties": {
    "access_token": {
      "type": "string"
    },
    "refresh_token": {
      "type": "string"
    },
    "token_type": {
      "type": "string"
    },
    "scope": {
      "type": "string"
    },
    "expiration": {
      "type": "string"
    }
  }
}
```
## Operation: GetCost
Estimate the cost of taking a Lyft between two points.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "ride_type": {
      "type": "string",
      "description": "ID of a ride type",
      "enum": [
        "lyft",
        "lyft_line",
        "lyft_plus"
      ]
    },
    "start_lat": {
      "type": "number",
      "format": "double",
      "description": "Latitude of the starting location"
    },
    "start_lng": {
      "type": "number",
      "format": "double",
      "description": "Longitude of the starting location"
    },
    "end_lat": {
      "type": "number",
      "format": "double",
      "description": "Latitude of the ending location"
    },
    "end_lng": {
      "type": "number",
      "format": "double",
      "description": "Longitude of the ending location"
    }
  },
  "additionalProperties": false,
  "required": [
    "start_lat",
    "start_lng"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "cost_estimates": {
      "items": {
        "$ref": "#/definitions/CostEstimate"
      },
      "type": "array"
    }
  },
  "title": "CostEstimateResponse",
  "type": "object"
}
```
## Operation: GetDrivers
The drivers endpoint returns a list of nearby drivers' lat and lng at a given location.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "lat": {
      "type": "number",
      "format": "double",
      "description": "Latitude of a location"
    },
    "lng": {
      "type": "number",
      "format": "double",
      "description": "Longitude of a location"
    }
  },
  "additionalProperties": false,
  "required": [
    "lat",
    "lng"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "nearby_drivers": {
      "items": {
        "$ref": "#/definitions/NearbyDriversByRideType"
      },
      "type": "array"
    }
  },
  "title": "NearbyDriversResponse",
  "type": "object"
}
```
## Operation: GetETA
The ETA endpoint lets you know how quickly a Lyft driver can come get you


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "lat": {
      "type": "number",
      "format": "double",
      "description": "Latitude of a location"
    },
    "lng": {
      "type": "number",
      "format": "double",
      "description": "Longitude of a location"
    },
    "destination_lat": {
      "type": "number",
      "format": "double",
      "description": "Latitude of destination location"
    },
    "destination_lng": {
      "type": "number",
      "format": "double",
      "description": "Longitude of destination location"
    },
    "ride_type": {
      "type": "string",
      "description": "ID of a ride type",
      "enum": [
        "lyft",
        "lyft_line",
        "lyft_plus"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "lat",
    "lng"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "eta_estimates": {
      "items": {
        "$ref": "#/definitions/Eta"
      },
      "type": "array"
    }
  },
  "title": "EtaEstimateResponse",
  "type": "object"
}
```
## Operation: GetProfile
The v1 of this endpoint returns the user's ID, v2 will return more general info about the user. We require authentication for this endpoint, so we extract the user ID from the access token.


### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Profile"
}
```
## Operation: GetRides
Get a list of past & current rides for this passenger.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "start_time": {
      "type": "string",
      "format": "date-time",
      "description": "Restrict to rides starting after this point in time. The earliest supported date is 2015-01-01T00:00:00+00:00\n"
    },
    "end_time": {
      "type": "string",
      "format": "date-time",
      "description": "Restrict to rides starting before this point in time. The earliest supported date is 2015-01-01T00:00:00+00:00\n"
    },
    "limit": {
      "type": "integer",
      "format": "int32",
      "description": "The maximum number of rides to return. The default limit is 10 if not specified. The maximum allowed value is 50, an integer greater that 50 will return at most 50 results.\n",
      "maximum": 50,
      "minimum": 0,
      "exclusiveMaximum": false,
      "exclusiveMinimum": true
    }
  },
  "additionalProperties": false,
  "required": [
    "start_time"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "ride_history": {
      "items": {
        "$ref": "#/definitions/RideDetail"
      },
      "type": "array"
    }
  },
  "title": "RidesResponse",
  "type": "object"
}
```
## Operation: NewRide
Request a Lyft come pick you up at the given location.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "request": {
      "$ref": "#/definitions/Ride"
    }
  },
  "additionalProperties": false,
  "required": [
    "request"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RideRequest"
}
```
## Operation: GetRide
Get the status of a ride along with information about the driver, vehicle and price of a given ride ID


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of the ride"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RideDetail"
}
```
## Operation: CancelRide
Cancel a ongoing ride which was requested earlier by providing the ride id.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of the ride"
    },
    "request": {
      "$ref": "#/definitions/CancellationRequest"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: SetRideDestination
Add or update the ride's destination. Note that the ride must still be active (not droppedOff or canceled), and that destinations on Lyft Line rides can not be changed.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of the ride"
    },
    "request": {
      "$ref": "#/definitions/Location"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "request"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Location"
}
```
## Operation: SetRideRating
Add the passenger's 1 to 5 star rating of the ride, optional written feedback, and optional tip amount in minor units and currency. The ride must already be dropped off, and ratings must be given within 24 hours of drop off. For purposes of display, 5 is considered the default rating. When this endpoint is successfully called, payment processing will begin.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of the ride"
    },
    "request": {
      "$ref": "#/definitions/RatingRequest"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "request"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: GetRideReceipt
Get the receipt information of a processed ride by providing the ride id. Receipts will only be available to view once the payment has been processed. In the case of canceled ride, cancellation penalty is included if applicable.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of the ride"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RideReceipt"
}
```
## Operation: GetRideTypes
The ride types endpoint returns information about what kinds of Lyft rides you can request at a given location.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "lat": {
      "type": "number",
      "format": "double",
      "description": "Latitude of a location"
    },
    "lng": {
      "type": "number",
      "format": "double",
      "description": "Longitude of a location"
    },
    "ride_type": {
      "type": "string",
      "description": "ID of a ride type",
      "enum": [
        "lyft",
        "lyft_line",
        "lyft_plus"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "lat",
    "lng"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "ride_types": {
      "items": {
        "$ref": "#/definitions/RideType"
      },
      "type": "array"
    }
  },
  "title": "RideTypesResponse",
  "type": "object"
}
```
## Operation: SetPrimeTime
Preset a Prime Time percentage in the region surrounding the specified location. This Prime Time percentage will be applied when requesting cost, or when requesting a ride in sandbox mode.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "request": {
      "$ref": "#/definitions/SandboxPrimetime"
    }
  },
  "additionalProperties": false,
  "required": [
    "request"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: SetRideStatus
Propagate a sandbox-ride through various ride status


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of the ride"
    },
    "request": {
      "$ref": "#/definitions/SandboxRideStatus"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "request"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SandboxRideUpdate"
}
```
## Operation: SetRideTypes
The sandbox-ridetypes endpoint allows you to preset the ridetypes in the region surrounding the specified latitude and longitude to allow testing different scenarios


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "request": {
      "$ref": "#/definitions/SandboxRideType"
    }
  },
  "additionalProperties": false,
  "required": [
    "request"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SandboxRideType"
}
```
## Operation: SetRideTypeAvailability
Set driver availability for the provided ride_type in the city/region surrounding the specified location


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "ride_type": {
      "type": "string",
      "enum": [
        "lyft",
        "lyft_line",
        "lyft_plus"
      ]
    },
    "request": {
      "$ref": "#/definitions/SandboxDriverAvailability"
    }
  },
  "additionalProperties": false,
  "required": [
    "ride_type",
    "request"
  ]
}
```
### Output Schema
```json
{}
```
