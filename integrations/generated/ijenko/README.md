# @datafire/ijenko


## Operation: Account.changePassword
Set a new password for the account.

**Note**: requires full access to the *Account*.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "changePasswordInfo": {
      "$ref": "#/definitions/AuthChangePassword"
    }
  },
  "additionalProperties": false,
  "required": [
    "changePasswordInfo"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Account.places
List the *Places* of the account.

**Note:** requires full access to the *Account*.


### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/PlaceItem"
  },
  "type": "array",
  "uniqueItems": true
}
```
## Operation: Account.newPlace
Create a new *Place*.

**Note:** requires full access to the *Account*.


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "place": {
      "$ref": "#/definitions/PlaceNew"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PlaceCreated"
}
```
## Operation: Account.tokens
List the active *Tokens* on the account.

**Note:** requires full access to the *Account*.


### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/UserTokenItem"
  },
  "type": "array",
  "uniqueItems": true
}
```
## Operation: Account.revokeToken
Revoke the given *Token*.

**Note:** requires full access to the *Account*.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "tokenId": {
      "type": "string",
      "description": "Identifier of the token"
    }
  },
  "additionalProperties": false,
  "required": [
    "tokenId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Account.users
Get the list of *Users* of this *Account*.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "embed-metadata": {
      "type": "array",
      "description": "Request to include the given keys of metadata in the response. If a key doesn't exist on the resource it is ignored.\n**Note:** This only applies to the top level resources.\n"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/UserItem"
  },
  "type": "array",
  "uniqueItems": true
}
```
## Operation: Account.newUser
Add a *User*.

**Note**: requires full access to the *Account*.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userInfo": {
      "$ref": "#/definitions/UserNew"
    }
  },
  "additionalProperties": false,
  "required": [
    "userInfo"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UserCreated"
}
```
## Operation: Account.deleteUser
Delete a *User* from this *Account*, and revoke all his/her *Tokens*.

**Note**: requires full access to the *Account*.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "string",
      "description": "Unique identifier of a *User*."
    }
  },
  "additionalProperties": false,
  "required": [
    "userId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Account.getUser
Get information about a *User* in the same *Account*.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "string",
      "description": "Unique identifier of a *User*."
    }
  },
  "additionalProperties": false,
  "required": [
    "userId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/User"
}
```
## Operation: Account.patchUser
Modify a *User*.

**Note**: requires full access to the *Account*.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "string",
      "description": "Unique identifier of a *User*."
    },
    "userPatch": {
      "$ref": "#/definitions/UserPatch"
    }
  },
  "additionalProperties": false,
  "required": [
    "userId",
    "userPatch"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: User.getMetadata
Get the metadata.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "string",
      "description": "Unique identifier of a *User*."
    }
  },
  "additionalProperties": false,
  "required": [
    "userId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Metadata"
}
```
## Operation: User.patchMetadata
Modify the metadata.
Keys are limited to the same format as tags (up to 21 characters, [a-z0-9], starting with [a-z]). Values can be any JSON value.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "string",
      "description": "Unique identifier of a *User*."
    },
    "metadataPatch": {
      "$ref": "#/definitions/MetadataPatch"
    }
  },
  "additionalProperties": false,
  "required": [
    "userId",
    "metadataPatch"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Metadata"
}
```
## Operation: AuthAccountLogin
Get an access+refresh tokens pair from login and password information.

The *access token* obtained with this request can then be used in
an `Access-Token` HTTP header or in a `token` URL query parameter
in requests that require authentication.

The *refresh token* can be used with `/auth/refresh` when the *access
token* expires to retrieve a new *access token*. The lifetime of the
refresh token is the maximum lifetime of this authentication request.

The default lifetime of the *refresh token* is defined by the `appId`
used. The `ttl` input parameter allows to request a *refresh token*
with a shorter lifetime.

To implement *logout*, use `/auth/revoke`.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "loginInfo": {
      "$ref": "#/definitions/AuthLogin"
    }
  },
  "additionalProperties": false,
  "required": [
    "loginInfo"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AuthTokens"
}
```
## Operation: AuthRefreshToken
Get a new *access token* using a valid *refresh token*.

This is a **replacement** of the *access token*: if an existing *access
token* was still not expired, it is invalidated.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "refreshInfo": {
      "$ref": "#/definitions/AuthRefresh"
    }
  },
  "additionalProperties": false,
  "required": [
    "refreshInfo"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AuthTokens"
}
```
## Operation: AuthResetPassword
Trigger the request of a new password.

The account administrator will receive an e-mail with an URL pointing to a form
to allow him/her to enter a new password.
The old password is still functional until a new one is submitted.

Either the login or e-mail of the account must be given.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resetPasswordInfo": {
      "$ref": "#/definitions/AuthResetPassword"
    }
  },
  "additionalProperties": false,
  "required": [
    "resetPasswordInfo"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: AuthRevokeToken
Invalidate the authentication used for the request. The access token and the refresh token will be invalid after this request.
This request is typically called to implement logout.


### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: Devices.get
Get information about a *Device*.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "deviceId": {
      "type": "string",
      "description": "Unique identifier of a *Device*."
    }
  },
  "additionalProperties": false,
  "required": [
    "deviceId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Device"
}
```
## Operation: Devices.patch
Modify information about a *Device*: its name.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "deviceId": {
      "type": "string",
      "description": "Unique identifier of a *Device*."
    },
    "devicePatch": {
      "$ref": "#/definitions/DevicePatch"
    }
  },
  "additionalProperties": false,
  "required": [
    "deviceId",
    "devicePatch"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Device.addFunctionality
Add a *Functionality* to the device.

Required parameters are :
- functionality class
- endpoint

Each device class has its own restrictions on which Functionality classes can be added and on which endpoints.
Only a few devices allow to add Functionalities.

|Device class|Functionality class|Endpoints|
|------------|-------------------|---------|
|MINT        |CurrentPeriod      |1,2,3    |
|MINT        |ElectricityRates   |1,2,3    |
|MINT        |GenericRate        |1,2,3    |

**Note**: requires full access to the *Account*.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "deviceId": {
      "type": "string",
      "description": "Unique identifier of a *Device*."
    },
    "functionalityInfo": {
      "$ref": "#/definitions/FunctionalityNew"
    }
  },
  "additionalProperties": false,
  "required": [
    "deviceId",
    "functionalityInfo"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/FunctionalityCreated"
}
```
## Operation: Device.getMetadata
Get the metadata.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "deviceId": {
      "type": "string",
      "description": "Unique identifier of a *Device*."
    }
  },
  "additionalProperties": false,
  "required": [
    "deviceId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Metadata"
}
```
## Operation: Device.patchMetadata
Modify the metadata.
Keys are limited to the same format as tags (up to 21 characters, [a-z0-9], starting with [a-z]). Values can be any JSON value.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "deviceId": {
      "type": "string",
      "description": "Unique identifier of a *Device*."
    },
    "metadataPatch": {
      "$ref": "#/definitions/MetadataPatch"
    }
  },
  "additionalProperties": false,
  "required": [
    "deviceId",
    "metadataPatch"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Metadata"
}
```
## Operation: Device.run
Run an *Action* on zero, one or multiple Functionalities selected with tags.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "deviceId": {
      "type": "string",
      "description": "Unique identifier of a *Device*."
    },
    "action": {
      "type": "string",
      "description": "Identifier of an *Action* inside a *Functionality*."
    },
    "functionalities": {
      "type": "string",
      "description": "Functionality selector: Functionality tags or functionality class (optionally, '@' followed by a endpoint in decimal) or '*' for all. Multiple values are separated by '|' and are interpreted as « OR ».\n",
      "pattern": "^(?:\\\\*|(?:[A-Z][A-Za-z0-9]+(?:@(?:0|1[0-9]{,2}|[3-9][0-9]?|2(?:[0-4][0-9]?|5[0-5]?|[6-9])?))?|[a-z][a-z0-9_:]{0,20}|[A-Za-z0-9-_]{22})(?:\\\\|(?:[A-Z][A-Za-z0-9]+(?:@(?:0|1[0-9]{,2}|[3-9][0-9]?|2(?:[0-4][0-9]?|5[0-5]?|[6-9])?))?|[a-z][a-z0-9_:]{0,20}|[A-Za-z0-9-_]{22}))*)$"
    },
    "arguments": {
      "$ref": "#/definitions/ActionArgs"
    }
  },
  "additionalProperties": false,
  "required": [
    "deviceId",
    "action",
    "functionalities",
    "arguments"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ActionMultiResult"
}
```
## Operation: Device.getTags
Get the tags of a *Device*.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "deviceId": {
      "type": "string",
      "description": "Unique identifier of a *Device*."
    }
  },
  "additionalProperties": false,
  "required": [
    "deviceId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Tags"
}
```
## Operation: Device.patchTags
Modify the tags of a *Device*.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "deviceId": {
      "type": "string",
      "description": "Unique identifier of a *Device*."
    },
    "tagsPatch": {
      "$ref": "#/definitions/TagsPatch"
    }
  },
  "additionalProperties": false,
  "required": [
    "deviceId",
    "tagsPatch"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Tags"
}
```
## Operation: Functionalities.get
Get the *Functionality*.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "functionalityId": {
      "type": "string",
      "description": "Unique identifier of a *Functionality*."
    }
  },
  "additionalProperties": false,
  "required": [
    "functionalityId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Functionality"
}
```
## Operation: Functionality.patch
Modify information about a *Functionality*: its name.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "functionalityId": {
      "type": "string",
      "description": "Unique identifier of a *Functionality*."
    },
    "functionalityPatch": {
      "$ref": "#/definitions/FunctionalityPatch"
    }
  },
  "additionalProperties": false,
  "required": [
    "functionalityId",
    "functionalityPatch"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Functionality.values
Get the values of multiple *Attributes* and their history.

If the `names` parameter is not given, all the attributes of the *Functionality*
are returned. As the list may be huge, this must be avoided.

If the `to` parameter is set, `from` must also be set.

If `from` is not set, only the last value is returned.

The request may fail if too many values are asked.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "functionalityId": {
      "type": "string",
      "description": "Unique identifier of a *Functionality*."
    },
    "names": {
      "type": "array",
      "description": "One or multiple *Attribute* names separated by commas"
    },
    "from": {
      "type": "string",
      "format": "date-time",
      "description": "Beginning of the time interval."
    },
    "to": {
      "type": "string",
      "format": "date-time",
      "description": "End of the interval. Default: now.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "functionalityId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AttributesValues"
}
```
## Operation: Functionality.value
Get the *Attribute* value and the last time when it changed.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "functionalityId": {
      "type": "string",
      "description": "Unique identifier of a *Functionality*."
    },
    "attributeName": {
      "type": "string",
      "description": "Identifier of an *Attribute* inside a *Functionality*."
    }
  },
  "additionalProperties": false,
  "required": [
    "functionalityId",
    "attributeName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AttributeValue"
}
```
## Operation: Functionality.set
Modify the value of the *Attribute*.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "functionalityId": {
      "type": "string",
      "description": "Unique identifier of a *Functionality*."
    },
    "attributeName": {
      "type": "string",
      "description": "Identifier of an *Attribute* inside a *Functionality*."
    },
    "value": {
      "$ref": "#/definitions/AnyJSON"
    }
  },
  "additionalProperties": false,
  "required": [
    "functionalityId",
    "attributeName",
    "value"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Functionality.getMetadata
Get the metadata.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "functionalityId": {
      "type": "string",
      "description": "Unique identifier of a *Functionality*."
    }
  },
  "additionalProperties": false,
  "required": [
    "functionalityId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Metadata"
}
```
## Operation: Functionality.patchMetadata
Modify the metadata.
Keys are limited to the same format as tags (up to 21 characters, [a-z0-9], starting with [a-z]). Values can be any JSON value.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "functionalityId": {
      "type": "string",
      "description": "Unique identifier of a *Functionality*."
    },
    "metadataPatch": {
      "$ref": "#/definitions/MetadataPatch"
    }
  },
  "additionalProperties": false,
  "required": [
    "functionalityId",
    "metadataPatch"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Metadata"
}
```
## Operation: Functionality.run
Run an action on the Functionality.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "functionalityId": {
      "type": "string",
      "description": "Unique identifier of a *Functionality*."
    },
    "action": {
      "type": "string",
      "description": "Identifier of an *Action* inside a *Functionality*."
    },
    "arguments": {
      "$ref": "#/definitions/ActionArgs"
    }
  },
  "additionalProperties": false,
  "required": [
    "functionalityId",
    "action",
    "arguments"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ActionResult"
}
```
## Operation: Functionality.getTags
Get the tags of a *Functionality*.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "functionalityId": {
      "type": "string",
      "description": "Unique identifier of a *Functionality*."
    }
  },
  "additionalProperties": false,
  "required": [
    "functionalityId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Tags"
}
```
## Operation: Functionality.patchTags
Modify the tags of a *Functionality*.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "functionalityId": {
      "type": "string",
      "description": "Unique identifier of a *Functionality*."
    },
    "tagsPatch": {
      "$ref": "#/definitions/TagsPatch"
    }
  },
  "additionalProperties": false,
  "required": [
    "functionalityId",
    "tagsPatch"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Tags"
}
```
## Operation: Me.get
Get information on the authenticated *User* who does the request.

The *login* property is returned only if the *User* is the administrator of
the *Account*.


### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UserMe"
}
```
## Operation: Me.patch
Update *User* information (locale).


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userPatch": {
      "$ref": "#/definitions/UserMePatch"
    }
  },
  "additionalProperties": false,
  "required": [
    "userPatch"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Notification.delete
Delete a *Notification*.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "notificationId": {
      "type": "string",
      "description": "Unique identifier of a *Notification*."
    }
  },
  "additionalProperties": false,
  "required": [
    "notificationId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Notifications.get
Get information about a *Notification*.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "notificationId": {
      "type": "string",
      "description": "Unique identifier of a *Notification*."
    }
  },
  "additionalProperties": false,
  "required": [
    "notificationId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Notification"
}
```
## Operation: Notification.patch
Modify a *Notification*.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "notificationId": {
      "type": "string",
      "description": "Unique identifier of a *Notification*."
    },
    "notificationPatch": {
      "$ref": "#/definitions/NotificationPatch"
    }
  },
  "additionalProperties": false,
  "required": [
    "notificationId",
    "notificationPatch"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Notification.getMetadata
Get the metadata of the *Notification*.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "notificationId": {
      "type": "string",
      "description": "Unique identifier of a *Notification*."
    }
  },
  "additionalProperties": false,
  "required": [
    "notificationId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Metadata"
}
```
## Operation: Notification.patchMetadata
Modify the metadata of a *Notification*.
Keys are limited to the same format as tags (up to 21 characters, [a-z0-9], starting with [a-z]). Values can be any JSON value.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "notificationId": {
      "type": "string",
      "description": "Unique identifier of a *Notification*."
    },
    "metadataPatch": {
      "$ref": "#/definitions/MetadataPatch"
    }
  },
  "additionalProperties": false,
  "required": [
    "notificationId",
    "metadataPatch"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Metadata"
}
```
## Operation: Me.places
List the *Places* to which the *Token* has access.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "embed-metadata": {
      "type": "array",
      "description": "Request to include the given keys of metadata in the response. If a key doesn't exist on the resource it is ignored.\n**Note:** This only applies to the top level resources.\n"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/PlaceItem"
  },
  "type": "array",
  "uniqueItems": true
}
```
## Operation: Places.get
Get information about a *Place*.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "placeId": {
      "type": "string",
      "description": "Unique identifier of a *Place*."
    }
  },
  "additionalProperties": false,
  "required": [
    "placeId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Place"
}
```
## Operation: Place.patch
Change information about a *Place*.

**Note**: requires full access to the *Account*.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "placeId": {
      "type": "string",
      "description": "Unique identifier of a *Place*."
    },
    "placePatch": {
      "$ref": "#/definitions/PlacePatch"
    }
  },
  "additionalProperties": false,
  "required": [
    "placeId",
    "placePatch"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Place.buses
Get the list of *Buses* available on the gateway of this *Place*.
If `withPairing` is `true`, return only buses that allow device pairing (see `/places/{placeId}/buses/{busId}/pairing`).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "placeId": {
      "type": "string",
      "description": "Unique identifier of a *Place*."
    },
    "withPairing": {
      "type": "boolean",
      "description": "Filter out buses that have no pairing window"
    }
  },
  "additionalProperties": false,
  "required": [
    "placeId"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/BusItem"
  },
  "type": "array",
  "uniqueItems": true
}
```
## Operation: Place.pairing
Get the state of the pairing window of the *Bus*.

**Note**: requires full access to the *Account*.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "placeId": {
      "type": "string",
      "description": "Unique identifier of a *Place*."
    },
    "busId": {
      "type": "string",
      "description": "Unique identifier of a *Bus*."
    }
  },
  "additionalProperties": false,
  "required": [
    "placeId",
    "busId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BusPairing"
}
```
## Operation: Place.openPairing
Open/Close the pairing window.

**Note**: requires full access to the *Account*.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "placeId": {
      "type": "string",
      "description": "Unique identifier of a *Place*."
    },
    "busId": {
      "type": "string",
      "description": "Unique identifier of a *Bus*."
    },
    "pairing": {
      "$ref": "#/definitions/BusPairing"
    }
  },
  "additionalProperties": false,
  "required": [
    "placeId",
    "busId",
    "pairing"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BusPairing"
}
```
## Operation: Place.devices
Get the list of *Devices* available in this *Place*.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "placeId": {
      "type": "string",
      "description": "Unique identifier of a *Place*."
    },
    "devices": {
      "type": "string",
      "description": "Devices selector. Device tags or device classes or device ids or '*' for any. Multiple values are separated by '|' and interpreted as « OR ».",
      "pattern": "^(?:\\\\*|(?:[A-Z][A-Z0-9]{3}|[a-z][a-z0-9_:]{0,20}|[A-Za-z0-9-_]{22})(?:\\\\|(?:[A-Z][A-Z0-9]{3}|[a-z][a-z0-9_:]{0,20}|[A-Za-z0-9-_]{22}))*)$"
    },
    "embed-metadata": {
      "type": "array",
      "description": "Request to include the given keys of metadata in the response. If a key doesn't exist on the resource it is ignored.\n**Note:** This only applies to the top level resources.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "placeId"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/DeviceItem"
  },
  "type": "array",
  "uniqueItems": true
}
```
## Operation: Place.Electricity.autonomy
Compute the autonomy rate of the *Place* on a time period.

`autonomy = 1 - (elec_drawn / elec_total_usage)`


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "placeId": {
      "type": "string",
      "description": "Unique identifier of a *Place*."
    },
    "when": {
      "type": "string",
      "format": "date-time",
      "description": "A time part of the time span."
    },
    "span": {
      "type": "string",
      "description": "Timespan: H (hour), D (day), Wmo (week starting on Monday), Wsu (week starting on Sunday), M (month), Y (year)",
      "enum": [
        "H",
        "D",
        "Wmo",
        "Wsu",
        "M",
        "Y"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "placeId",
    "when",
    "span"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ElectricityAutonomy"
}
```
## Operation: Place.Electricity.getFlows
Get the mapping of virtual electricity flows to functionalities.

Some rules are applied to expand the virtual flows using the concrete
flows available.

The `factor` tells how each energy value coming from a functionality
must be added with values from other functionality to compute the
energy of the virtual flow. Factors are usually `1` or `-1`.

The `code` property gives the result which may be partial:
- If all flows are available, `200000` is returned.
- If no flows are available (indicating that the place has no
  electricity functionality or that no functionality has been attached
  to a flow), the `code` is `200001`. The `missing` property contains
  all the requested flows.
- If some flows are missing, the `code` is `200002` and the `missing`
  property lists them.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "placeId": {
      "type": "string",
      "description": "Unique identifier of a *Place*."
    },
    "flows": {
      "type": "array",
      "description": "Names of the flows requested"
    }
  },
  "additionalProperties": false,
  "required": [
    "placeId",
    "flows"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ElectricityFlows"
}
```
## Operation: Place.Electricity.getFlowsSetup
Get the mapping of functionalities to electricity flows.

A functionality is attached to *at most* one flow.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "placeId": {
      "type": "string",
      "description": "Unique identifier of a *Place*."
    }
  },
  "additionalProperties": false,
  "required": [
    "placeId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ElectricityFlowsSetup"
}
```
## Operation: Place.Electricity.selfConsumption
Compute the self-consumption rate of the *Place* on a time period.

`selfConsumption = 1 - (elec_feed_in / elec_total_usage)`


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "placeId": {
      "type": "string",
      "description": "Unique identifier of a *Place*."
    },
    "when": {
      "type": "string",
      "format": "date-time",
      "description": "A time part of the time span."
    },
    "span": {
      "type": "string",
      "description": "Timespan: H (hour), D (day), Wmo (week starting on Monday), Wsu (week starting on Sunday), M (month), Y (year)",
      "enum": [
        "H",
        "D",
        "Wmo",
        "Wsu",
        "M",
        "Y"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "placeId",
    "when",
    "span"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ElectricitySelfConsumption"
}
```
## Operation: Place.functionalities
Get the list of *Functionalities* available in this *Place*.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "placeId": {
      "type": "string",
      "description": "Unique identifier of a *Place*."
    },
    "devices": {
      "type": "string",
      "description": "Devices selector. Device tags or device classes or device ids or '*' for any. Multiple values are separated by '|' and interpreted as « OR ».",
      "pattern": "^(?:\\\\*|(?:[A-Z][A-Z0-9]{3}|[a-z][a-z0-9_:]{0,20}|[A-Za-z0-9-_]{22})(?:\\\\|(?:[A-Z][A-Z0-9]{3}|[a-z][a-z0-9_:]{0,20}|[A-Za-z0-9-_]{22}))*)$"
    },
    "functionalities": {
      "type": "string",
      "description": "Functionality selector: Functionality tags or functionality class (optionally, '@' followed by a endpoint in decimal) or '*' for all. Multiple values are separated by '|' and are interpreted as « OR ».\n",
      "pattern": "^(?:\\\\*|(?:[A-Z][A-Za-z0-9]+(?:@(?:0|1[0-9]{,2}|[3-9][0-9]?|2(?:[0-4][0-9]?|5[0-5]?|[6-9])?))?|[a-z][a-z0-9_:]{0,20}|[A-Za-z0-9-_]{22})(?:\\\\|(?:[A-Z][A-Za-z0-9]+(?:@(?:0|1[0-9]{,2}|[3-9][0-9]?|2(?:[0-4][0-9]?|5[0-5]?|[6-9])?))?|[a-z][a-z0-9_:]{0,20}|[A-Za-z0-9-_]{22}))*)$"
    },
    "embed-metadata": {
      "type": "array",
      "description": "Request to include the given keys of metadata in the response. If a key doesn't exist on the resource it is ignored.\n**Note:** This only applies to the top level resources.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "placeId"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/FunctionalityItem"
  },
  "type": "array",
  "uniqueItems": true
}
```
## Operation: Place.getMetadata
Get the metadata.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "placeId": {
      "type": "string",
      "description": "Unique identifier of a *Place*."
    }
  },
  "additionalProperties": false,
  "required": [
    "placeId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Metadata"
}
```
## Operation: Place.patchMetadata
Modify the metadata.
Keys are limited to the same format as tags (up to 21 characters, [a-z0-9], starting with [a-z]). Values can be any JSON value.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "placeId": {
      "type": "string",
      "description": "Unique identifier of a *Place*."
    },
    "metadataPatch": {
      "$ref": "#/definitions/MetadataPatch"
    }
  },
  "additionalProperties": false,
  "required": [
    "placeId",
    "metadataPatch"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Metadata"
}
```
## Operation: Place.notifications
Get the list of *Notifications* available in this *Place*.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "placeId": {
      "type": "string",
      "description": "Unique identifier of a *Place*."
    },
    "embed-metadata": {
      "type": "array",
      "description": "Request to include the given keys of metadata in the response. If a key doesn't exist on the resource it is ignored.\n**Note:** This only applies to the top level resources.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "placeId"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/NotificationItem"
  },
  "type": "array",
  "uniqueItems": true
}
```
## Operation: Place.newNotification
Create a new *Notification*.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "placeId": {
      "type": "string",
      "description": "Unique identifier of a *Place*."
    },
    "notification": {
      "$ref": "#/definitions/NotificationNew"
    }
  },
  "additionalProperties": false,
  "required": [
    "placeId",
    "notification"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/NotificationCreated"
}
```
## Operation: Place.programs
Get the list of *Programs* available in this *Place*.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "placeId": {
      "type": "string",
      "description": "Unique identifier of a *Place*."
    },
    "embed-metadata": {
      "type": "array",
      "description": "Request to include the given keys of metadata in the response. If a key doesn't exist on the resource it is ignored.\n**Note:** This only applies to the top level resources.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "placeId"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/ProgramItem"
  },
  "type": "array",
  "uniqueItems": true
}
```
## Operation: Place.newProgram
Create a new *Program*.

**Note**: requires full access to the *Account*.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "placeId": {
      "type": "string",
      "description": "Unique identifier of a *Place*."
    },
    "programInfo": {
      "$ref": "#/definitions/ProgramNew"
    }
  },
  "additionalProperties": false,
  "required": [
    "placeId",
    "programInfo"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ProgramCreated"
}
```
## Operation: Place.run
Run an *Action* on zero, one or multiple *Functionalities* selected with tags.

*Device* and *Functionality* selection are combined with « AND ».

If no functionality is matched by the device/functionality selection, an empty array is returned.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "placeId": {
      "type": "string",
      "description": "Unique identifier of a *Place*."
    },
    "action": {
      "type": "string",
      "description": "Identifier of an *Action* inside a *Functionality*."
    },
    "devices": {
      "type": "string",
      "description": "Devices selector. Device tags or device classes or device ids or '*' for any. Multiple values are separated by '|' and interpreted as « OR ».",
      "pattern": "^(?:\\\\*|(?:[A-Z][A-Z0-9]{3}|[a-z][a-z0-9_:]{0,20}|[A-Za-z0-9-_]{22})(?:\\\\|(?:[A-Z][A-Z0-9]{3}|[a-z][a-z0-9_:]{0,20}|[A-Za-z0-9-_]{22}))*)$"
    },
    "functionalities": {
      "type": "string",
      "description": "Functionality selector: Functionality tags or functionality class (optionally, '@' followed by a endpoint in decimal) or '*' for all. Multiple values are separated by '|' and are interpreted as « OR ».\n",
      "pattern": "^(?:\\\\*|(?:[A-Z][A-Za-z0-9]+(?:@(?:0|1[0-9]{,2}|[3-9][0-9]?|2(?:[0-4][0-9]?|5[0-5]?|[6-9])?))?|[a-z][a-z0-9_:]{0,20}|[A-Za-z0-9-_]{22})(?:\\\\|(?:[A-Z][A-Za-z0-9]+(?:@(?:0|1[0-9]{,2}|[3-9][0-9]?|2(?:[0-4][0-9]?|5[0-5]?|[6-9])?))?|[a-z][a-z0-9_:]{0,20}|[A-Za-z0-9-_]{22}))*)$"
    },
    "arguments": {
      "$ref": "#/definitions/ActionArgs"
    }
  },
  "additionalProperties": false,
  "required": [
    "placeId",
    "action",
    "devices",
    "functionalities",
    "arguments"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ActionMultiResult"
}
```
## Operation: Program.delete
Delete a *Program*.

**Note**: requires full access to the *Account*.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "programId": {
      "type": "string",
      "description": "Unique identifier of a *Program*."
    }
  },
  "additionalProperties": false,
  "required": [
    "programId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Programs.get
Get information about a *Program*.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "programId": {
      "type": "string",
      "description": "Unique identifier of a *Program*."
    }
  },
  "additionalProperties": false,
  "required": [
    "programId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Program"
}
```
## Operation: Program.patch
Modify a *Program*:
- name
- status (enabled/disabled)
- code

**Note**: requires full access to the *Account*.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "programId": {
      "type": "string",
      "description": "Unique identifier of a *Program*."
    },
    "programPatch": {
      "$ref": "#/definitions/ProgramPatch"
    }
  },
  "additionalProperties": false,
  "required": [
    "programId",
    "programPatch"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Program.log
Get the execution history list of this *Program*.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "programId": {
      "type": "string",
      "description": "Unique identifier of a *Program*."
    },
    "from": {
      "type": "string",
      "format": "date-time",
      "description": "Beginning of the time interval."
    },
    "to": {
      "type": "string",
      "format": "date-time",
      "description": "End of the interval. Default: now.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "programId",
    "from"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/ProgramLog"
  },
  "type": "array",
  "uniqueItems": true
}
```
## Operation: Program.getMetadata
Get the metadata of the *Program*.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "programId": {
      "type": "string",
      "description": "Unique identifier of a *Program*."
    }
  },
  "additionalProperties": false,
  "required": [
    "programId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Metadata"
}
```
## Operation: Program.patchMetadata
Modify the metadata of a *Program*.
Keys are limited to the same format as tags (up to 21 characters, [a-z0-9], starting with [a-z]). Values can be any JSON value.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "programId": {
      "type": "string",
      "description": "Unique identifier of a *Program*."
    },
    "metadataPatch": {
      "$ref": "#/definitions/MetadataPatch"
    }
  },
  "additionalProperties": false,
  "required": [
    "programId",
    "metadataPatch"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Metadata"
}
```
## Operation: Program.run
Launch the *Program*.
The result will be available later in the run history.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "programId": {
      "type": "string",
      "description": "Unique identifier of a *Program*."
    }
  },
  "additionalProperties": false,
  "required": [
    "programId"
  ]
}
```
### Output Schema
```json
{}
```
