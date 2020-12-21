# @datafire/edrv

Client library for eDRV API

## Installation and Usage
```bash
npm install --save @datafire/edrv
```
```js
let edrv = require('@datafire/edrv').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

.then(data => {
  console.log(data);
});
```

## Description

edrv.io API Documentation

## Actions

### getChargeStations
List all Chargestations


```js
edrv.getChargeStations({}, context)
```

#### Input
* input `object`
  * organization `string`: Filter by Org. Id
  * location `string`: Filter by Location Id
  * online `boolean`: Filter by Online Status
  * active `boolean`: Chargestations that have been activated/deactivated by the admin
  * public `boolean`: Chargestations that are public
  * paginate_limit `integer`: Number of results per page
  * paginate_page `string`: The queried page index
  * paginate_enabled `boolean`: Enable pagination
  * sort_by `string`: Sort data by this key
  * sort_order `string` (values: desc, asc): asc to sort ascending (default is desc - descending)
  * createdAt[$gte] `string`: Date as ISO String
  * createdAt[$lte] `string`: Date as ISO String
  * updatedAt[$gte] `string`: Date as ISO String
  * updatedAt[$lte] `string`: Date as ISO String
  * include_location `boolean`: Populate location
  * include_evses `boolean`: Populate evses
  * include_organization `boolean`: Populate organization

#### Output
*Output schema unknown*

### postChargeStations
Create a new charge station


```js
edrv.postChargeStations({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [schema1](#schema1)

#### Output
* output `object`
  * chargestation `object`
  * message `string`
  * ok `boolean`

### deleteChargeStation
Use to delete a charge station


```js
edrv.deleteChargeStation({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The charge station id that needs to be deleted

#### Output
*Output schema unknown*

### getChargeStation
Get a single charge station's data


```js
edrv.getChargeStation({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The charge station id that needs to be fetched
  * include_location `boolean`: Populate location
  * include_evses `boolean`: Populate evses
  * include_organization `boolean`: Populate organization

#### Output
*Output schema unknown*

### patchChargeStation
Update a charge station's data


```js
edrv.patchChargeStation({
  "id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * id **required** `string`: ID of charge station that needs to be updated
  * body **required** [schema1](#schema1)

#### Output
* output `object`
  * message `string`
  * ok `boolean`
  * result `object`

### getChargeStationConnectors
List connectors for a chargestation


```js
edrv.getChargeStationConnectors({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: chargeStation id
  * include_evse `boolean`: Populate evse
  * include_organization `boolean`: Populate organization

#### Output
*Output schema unknown*

### getCommands
Get Commands data


```js
edrv.getCommands({}, context)
```

#### Input
* input `object`
  * paginate_limit `integer`: Number of results per page
  * paginate_page `string`: The queried page index
  * paginate_enabled `boolean`: Enable pagination
  * sort_by `string`: Sort data by this key
  * sort_order `string` (values: desc, asc): asc to sort ascending (default is desc - descending)
  * createdAt[$gte] `string`: Date as ISO String
  * createdAt[$lte] `string`: Date as ISO String
  * updatedAt[$gte] `string`: Date as ISO String
  * updatedAt[$lte] `string`: Date as ISO String
  * include_chargestation `boolean`: Populate chargestation
  * include_driver `boolean`: Populate driver
  * include_transaction `boolean`: Populate transaction
  * include_organization `boolean`: Populate organization

#### Output
*Output schema unknown*

### cancelreservation
Use to request a delete an existing reservation. The request will wait for the charge station to process the command. It will timeout after 60 seconds.


```js
edrv.cancelreservation({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * reservation `string`

#### Output
* output `object`
  * message `string`
  * ok `boolean`
  * result `object`

### deletechargingschedule
Delete a smart charging schedule


```js
edrv.deletechargingschedule({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * id `string`

#### Output
* output `object`
  * command `object`
  * message `string`
  * ok `boolean`

### setchargingschedule
Set one of charging power or current of a specific chargestation connector


```js
edrv.setchargingschedule({
  "body": null
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * connector `string`
    * schedule `array`
      * items `object`
        * endDate `string`
        * limit `number`
        * startDate `string`
        * unit `string`

#### Output
* output `object`
  * command `object`
  * message `string`
  * ok `boolean`

### remotestart
Use to request a remote start command. The request will wait for the charge station to process the command. It will timeout after 60 seconds.


```js
edrv.remotestart({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * chargestation `string`
    * connector `string`
    * driver `string`
    * token `string`

#### Output
* output `object`
  * command `object`
  * message `string`
  * ok `boolean`

### remotestop
Use to request a remote stop command. The request will wait for the charge station to process the command. It will timeout after 60 seconds.


```js
edrv.remotestop({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * chargestation `string`
    * driver `string`
    * transaction `string`

#### Output
*Output schema unknown*

### reserve
Use to request a reserve command. The request will wait for the charge station to process the command. It will timeout after 60 seconds.


```js
edrv.reserve({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * chargestation `string`
    * connector `string`
    * driver `string`
    * endDate `string`
    * token `string`

#### Output
* output `object`
  * command `object`
  * message `string`
  * ok `boolean`

### reset
Use to request a reset command. The request will wait for the charge station to process the command. It will timeout after 60 seconds.


```js
edrv.reset({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * chargestation `string`
    * type `string`

#### Output
* output `object`
  * message `string`
  * ok `boolean`
  * result `object`

### unlockconnector
Use to request an unlock command for a connector. The request will wait for the charge station to process the command. It will timeout after 60 seconds.


```js
edrv.unlockconnector({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * chargestation `string`
    * connector `string`

#### Output
* output `object`
  * command `object`
  * message `string`
  * ok `boolean`

### getVariables
Get a charge station's config variables


```js
edrv.getVariables({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The chargestation id

#### Output
*Output schema unknown*

### patchChargeStationVariable
Update config variables for a chargestation


```js
edrv.patchChargeStationVariable({
  "id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * id **required** `string`: ID of charge station
  * body **required** `object`
    * value `string`
    * variable `string` (values: MeterValueSampleInterval, HeartbeatInterval, ConnectionTimeOut, WebSocketPingInterval, TransactionMessageRetryInterval, TransactionMessageAttempts)

#### Output
* output `object`
  * message `string`
  * ok `boolean`
  * result `object`

### getConfigurations
Get Configurations data


```js
edrv.getConfigurations({}, context)
```

#### Input
* input `object`
  * paginate_limit `integer`: Number of results per page
  * paginate_page `string`: The queried page index
  * paginate_enabled `boolean`: Enable pagination
  * sort_by `string`: Sort data by this key
  * sort_order `string` (values: desc, asc): asc to sort ascending (default is desc - descending)
  * createdAt[$gte] `string`: Date as ISO String
  * createdAt[$lte] `string`: Date as ISO String
  * updatedAt[$gte] `string`: Date as ISO String
  * updatedAt[$lte] `string`: Date as ISO String

#### Output
*Output schema unknown*

### postConfigurations
Create connector with parameters


```js
edrv.postConfigurations({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * key `string`
    * value `string`

#### Output
* output `object`
  * message `string`
  * ok `boolean`
  * result `object`

### getConfiguration
Get one Configuration data


```js
edrv.getConfiguration({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: ID of Configuration that needs to be fetched

#### Output
*Output schema unknown*

### getConnectors
List connectors


```js
edrv.getConnectors({}, context)
```

#### Input
* input `object`
  * paginate_limit `integer`: Number of results per page
  * paginate_page `string`: The queried page index
  * paginate_enabled `boolean`: Enable pagination
  * sort_by `string`: Sort data by this key
  * sort_order `string` (values: desc, asc): asc to sort ascending (default is desc - descending)
  * createdAt[$gte] `string`: Date as ISO String
  * createdAt[$lte] `string`: Date as ISO String
  * updatedAt[$gte] `string`: Date as ISO String
  * updatedAt[$lte] `string`: Date as ISO String
  * include_evse `boolean`: Populate evse
  * include_organization `boolean`: Populate organization
  * include_rate `boolean`: Populate rate

#### Output
*Output schema unknown*

### postConnectors
Create a new connector


```js
edrv.postConnectors({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * chargestation `string`
    * format `string`
    * power `integer`
    * power_type `string`
    * rate `string`
    * type `string`

#### Output
* output `object`
  * message `string`
  * ok `boolean`
  * result `object`

### deleteConnector
Delete a connector


```js
edrv.deleteConnector({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The connector id that needs to be deleted

#### Output
*Output schema unknown*

### getConnector
Get a connector


```js
edrv.getConnector({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: ID of connector that needs to be fetched
  * include_evse `boolean`: Populate evse
  * include_organization `boolean`: Populate organization
  * include_rate `boolean`: Populate rate

#### Output
*Output schema unknown*

### patchConnector
Update a connector's data


```js
edrv.patchConnector({
  "id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * id **required** `string`: ID of connector that needs to be updated
  * body **required** `object`
    * chargestation `string`
    * format `string`
    * power `integer`
    * power_type `string`
    * rate `string`
    * type `string`

#### Output
* output `object`
  * message `string`
  * ok `boolean`
  * result `object`

### getDrivers
List all drivers


```js
edrv.getDrivers({}, context)
```

#### Input
* input `object`
  * active `boolean`: Get a list of active drivers
  * paginate_limit `integer`: Number of results per page
  * paginate_page `string`: The queried page index
  * paginate_enabled `boolean`: Enable pagination
  * sort_by `string`: Sort data by this key
  * sort_order `string` (values: desc, asc): asc to sort ascending (default is desc - descending)
  * createdAt[$gte] `string`: Date as ISO String
  * createdAt[$lte] `string`: Date as ISO String
  * updatedAt[$gte] `string`: Date as ISO String
  * updatedAt[$lte] `string`: Date as ISO String
  * include_tokens `boolean`: Populate tokens
  * include_group `boolean`: Populate group
  * include_organization `boolean`: Populate organization

#### Output
* output `object`
  * message `string`
  * ok `boolean`
  * result `array`

### postDrivers
Create a new driver


```js
edrv.postDrivers({
  "body": {
    "firstname": "",
    "lastname": "",
    "source": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * active `boolean`
    * address `object`
      * city `string`
      * country `string`
      * postalCode `string`
      * streetAndNumber `string`
    * email `string`
    * firstname **required** `string`
    * lastname **required** `string`
    * phone `object`
      * home `string`
      * mobile `string`
      * work `string`
    * source **required** `string` (values: physical, slack, telegram, sms)

#### Output
* output `object`
  * message `string`
  * ok `boolean`
  * result `object`

### deleteDriver
Delete a driver


```js
edrv.deleteDriver({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The driver id that needs to be deleted

#### Output
*Output schema unknown*

### getDriver
Get a driver's data


```js
edrv.getDriver({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The driver id that needs to be fetched
  * include_tokens `boolean`: Populate tokens
  * include_group `boolean`: Populate group
  * include_organization `boolean`: Populate organization

#### Output
*Output schema unknown*

### patchDriver
Update a driver's data


```js
edrv.patchDriver({
  "id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * id **required** `string`: ID of driver that needs to be updated
  * body **required** `object`
    * active `boolean`
    * address `object`
      * city `string`
      * country `string`
      * postalCode `string`
      * streetAndNumber `string`
    * email `string`
    * firstname `string`
    * lastname `string`
    * phone `object`
      * home `string`
      * mobile `string`
      * work `string`
    * source `string`
    * tokens `array`

#### Output
* output `object`
  * message `string`
  * ok `boolean`
  * result `array`

### deleteLocation
Delete a location


```js
edrv.deleteLocation({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The location id that needs to be deleted

#### Output
*Output schema unknown*

### getLocation
Get a location's data


```js
edrv.getLocation({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The location id that needs to be fetched
  * include_chargestations `boolean`: Populate chargestations
  * include_organization `boolean`: Populate organization

#### Output
*Output schema unknown*

### patchLocation
Update a location's data


```js
edrv.patchLocation({
  "id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * id **required** `string`: ID of location that needs to be updated
  * body **required** `object`
    * active `boolean`
    * address `object`
      * city `string`
      * country `string`
      * postalCode `string`
      * streetAndNumber `string`
    * chargestations `array`
    * coordinates `object`
      * latitude `number`
      * longitude `number`
    * operatorName `string`

#### Output
* output `object`
  * message `string`
  * ok `boolean`
  * result `array`

### getLocations
Get Locations data


```js
edrv.getLocations({}, context)
```

#### Input
* input `object`
  * paginate_limit `integer`: Number of results per page
  * paginate_page `string`: The queried page index
  * paginate_enabled `boolean`: Enable pagination
  * sort_by `string`: Sort data by this key
  * sort_order `string` (values: desc, asc): asc to sort ascending (default is desc - descending)
  * createdAt[$gte] `string`: Date as ISO String
  * createdAt[$lte] `string`: Date as ISO String
  * updatedAt[$gte] `string`: Date as ISO String
  * updatedAt[$lte] `string`: Date as ISO String
  * include_organization `boolean`: Populate organization

#### Output
*Output schema unknown*

### postLocations
Create a new location


```js
edrv.postLocations({
  "body": {
    "operatorName": "",
    "address": {},
    "coordinates": {}
  }
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * active `boolean`
    * address **required** `object`
      * city `string`
      * country `string`
      * postalCode `string`
      * streetAndNumber `string`
    * chargestations `array`
    * coordinates **required** `object`
      * latitude `number`
      * longitude `number`
    * operatorName **required** `string`

#### Output
* output `object`
  * message `string`
  * ok `boolean`
  * result `object`

### getOrganizations
Get an array of all Organizations


```js
edrv.getOrganizations({}, context)
```

#### Input
* input `object`
  * paginate_limit `integer`: Number of results per page
  * paginate_page `string`: The queried page index
  * paginate_enabled `boolean`: Enable pagination
  * sort_by `string`: Sort data by this key
  * sort_order `string` (values: desc, asc): asc to sort ascending (default is desc - descending)
  * createdAt[$gte] `string`: Date as ISO String
  * createdAt[$lte] `string`: Date as ISO String
  * updatedAt[$gte] `string`: Date as ISO String
  * updatedAt[$lte] `string`: Date as ISO String
  * include_locations `boolean`: Populate locations

#### Output
*Output schema unknown*

### getOrganization
Get one organization's data by id


```js
edrv.getOrganization({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: ID of organization that needs to be fetched
  * include_locations `boolean`: Populate locations

#### Output
*Output schema unknown*

### patchOrganization
Update an organization's data


```js
edrv.patchOrganization({
  "id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * id **required** `string`: ID of organization that needs to be updated
  * body **required** `object`
    * active `boolean`
    * address `object`
      * city `string`
      * country `string`
      * postalCode `string`
      * streetAndNumber `string`
    * channels `object`
      * slack `object`
      * telegram `object`
    * configurations `object`
      * basicAuthEnabled `boolean`
      * basicAuthPassword `boolean`
    * links `object`
      * about `string`
      * contact `string`
      * privacy `string`
      * support `string`
    * locations `array`
    * logo `string`
    * name `string`
    * otp `string`
    * stripe_connected_account_id `string`
    * stripe_country `string`
    * stripe_currency `string`
    * stripe_reserve_amount `integer`
    * support `object`
      * business_hours `string`
      * chat `object`
        * type `string`
        * value `string`
      * contact_number `string`
      * email `string`
    * supportChat `object`
      * id `string`
      * name `string`
    * theme `object`
      * colors `object`
        * primary `string`
        * secondary `string`

#### Output
*Output schema unknown*

### getRealtime
Use to request a Websockets handshake


```js
edrv.getRealtime({
  "sec-websocket-protocol": ""
}, context)
```

#### Input
* input `object`
  * sec-websocket-protocol **required** `string`: The JWT token to use for auth

#### Output
*Output schema unknown*

### getReservations
Get Reservations data


```js
edrv.getReservations({}, context)
```

#### Input
* input `object`
  * paginate_limit `integer`: Number of results per page
  * paginate_page `string`: The queried page index
  * paginate_enabled `boolean`: Enable pagination
  * sort_by `string`: Sort data by this key
  * sort_order `string` (values: desc, asc): asc to sort ascending (default is desc - descending)
  * createdAt[$gte] `string`: Date as ISO String
  * createdAt[$lte] `string`: Date as ISO String
  * updatedAt[$gte] `string`: Date as ISO String
  * updatedAt[$lte] `string`: Date as ISO String
  * include_chargestation `boolean`: Populate chargestation
  * include_organization `boolean`: Populate organization

#### Output
*Output schema unknown*

### getReservation
Get one reservation data


```js
edrv.getReservation({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: ID of the reservation that needs to be fetched
  * include_chargestation `boolean`: Populate chargestation
  * include_organization `boolean`: Populate organization

#### Output
*Output schema unknown*

### updatereservation
Use to request a update an existing reservation. The request will wait for the charge station to process the command. It will timeout after 60 seconds.


```js
edrv.updatereservation({
  "id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * id **required** `string`: ID of the reservation that needs to be fetched
  * body **required** `object`
    * connector `integer`
    * driver `string`
    * endDate `string`
    * evse `integer`

#### Output
* output `object`
  * message `string`
  * ok `boolean`
  * result `object`

### getTokens
List tokens


```js
edrv.getTokens({}, context)
```

#### Input
* input `object`
  * paginate_limit `integer`: Number of results per page
  * paginate_page `string`: The queried page index
  * paginate_enabled `boolean`: Enable pagination
  * sort_by `string`: Sort data by this key
  * sort_order `string` (values: desc, asc): asc to sort ascending (default is desc - descending)
  * createdAt[$gte] `string`: Date as ISO String
  * createdAt[$lte] `string`: Date as ISO String
  * updatedAt[$gte] `string`: Date as ISO String
  * updatedAt[$lte] `string`: Date as ISO String
  * include_driver `boolean`: Populate driver
  * include_organization `boolean`: Populate organization

#### Output
* output `object`
  * message `string`
  * ok `boolean`
  * result `array`

### postTokens
Create a new token


```js
edrv.postTokens({
  "body": {
    "active": true,
    "physicalId": "",
    "driver": "",
    "channel": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * active **required** `boolean`
    * channel **required** `string` (values: physical, slack, telegram, sms)
    * driver **required** `string`
    * physicalId **required** `string`
    * type `string`

#### Output
* output `object`
  * message `string`
  * ok `boolean`
  * result `array`

### deleteToken
Use to delete a token


```js
edrv.deleteToken({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The token id that needs to be deleted

#### Output
*Output schema unknown*

### getToken
Get a single token's data


```js
edrv.getToken({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The token id that needs to be fetched
  * include_driver `boolean`: Populate driver
  * include_organization `boolean`: Populate organization

#### Output
*Output schema unknown*

### patchToken
Update a token


```js
edrv.patchToken({
  "id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * id **required** `string`: ID of token that needs to be updated
  * body **required** `object`
    * active `boolean`
    * channel `string` (values: physical, slack, telegram, sms)
    * driver `string`
    * physicalId `string`
    * type `string`

#### Output
* output `object`
  * message `string`
  * ok `boolean`
  * result `array`

### getTransactions
Get a list of transactions


```js
edrv.getTransactions({}, context)
```

#### Input
* input `object`
  * status `string` (values: Started, Ended): Started to get only active transactions
  * paginate_limit `integer`: Number of results per page
  * paginate_page `string`: The queried page index
  * paginate_enabled `boolean`: Enable pagination
  * sort_by `string`: Sort data by this key
  * sort_order `string` (values: desc, asc): asc to sort ascending (default is desc - descending)
  * createdAt[$gte] `string`: Date as ISO String
  * createdAt[$lte] `string`: Date as ISO String
  * updatedAt[$gte] `string`: Date as ISO String
  * updatedAt[$lte] `string`: Date as ISO String
  * include_chargestation `boolean`: Populate chargestation
  * include_evse `boolean`: Populate evse
  * include_connector `boolean`: Populate connector
  * include_driver `boolean`: Populate driver
  * include_token `boolean`: Populate token
  * include_reservation `boolean`: Populate reservation
  * include_organization `boolean`: Populate organization
  * include_rate `boolean`: Populate rate

#### Output
* output `object`
  * hasNext `boolean`
  * hasPrevious `boolean`
  * message `string`
  * ok `boolean`
  * result `array`

### getTransaction
Get a specific transaction


```js
edrv.getTransaction({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The transaction id that needs to be fetched
  * include_chargestation `boolean`: Populate chargestation
  * include_evse `boolean`: Populate evse
  * include_connector `boolean`: Populate connector
  * include_driver `boolean`: Populate driver
  * include_token `boolean`: Populate token
  * include_reservation `boolean`: Populate reservation
  * include_organization `boolean`: Populate organization
  * include_rate `boolean`: Populate rate

#### Output
*Output schema unknown*

### getTransactionCost
Get a specific transaction's cost


```js
edrv.getTransactionCost({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The transaction id that needs to be fetched

#### Output
*Output schema unknown*

### getVehicles
List all vehicles


```js
edrv.getVehicles({}, context)
```

#### Input
* input `object`
  * active `boolean`: Get a list of active vehicles
  * paginate_limit `integer`: Number of results per page
  * paginate_page `string`: The queried page index
  * paginate_enabled `boolean`: Enable pagination
  * sort_by `string`: Sort data by this key
  * sort_order `string` (values: desc, asc): asc to sort ascending (default is desc - descending)
  * createdAt[$gte] `string`: Date as ISO String
  * createdAt[$lte] `string`: Date as ISO String
  * updatedAt[$gte] `string`: Date as ISO String
  * updatedAt[$lte] `string`: Date as ISO String
  * include_driver `boolean`: Populate driver
  * include_token `boolean`: Populate token
  * include_organization `boolean`: Populate organization

#### Output
* output `object`
  * message `string`
  * ok `boolean`
  * result `array`

### getVehicle
Get a vehicle's data


```js
edrv.getVehicle({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The vehicule id that needs to be fetched
  * include_driver `boolean`: Populate driver
  * include_token `boolean`: Populate token
  * include_organization `boolean`: Populate organization

#### Output
*Output schema unknown*

### getVehicleBattery
Get a vehicle's battery


```js
edrv.getVehicleBattery({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The vehicle id that needs to be fetched

#### Output
*Output schema unknown*

### getVehicleCharge
Get a vehicle's charge


```js
edrv.getVehicleCharge({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The vehicle id that needs to be fetched

#### Output
*Output schema unknown*

### postCharge
Change charge


```js
edrv.postCharge({
  "id": "",
  "body": {
    "action": ""
  }
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The vehicle id that needs to be fetched
  * body **required** `object`
    * action **required** `string` (values: START, STOP)

#### Output
* output `object`
  * message `string`
  * ok `boolean`
  * result `object`

### getVehicleLocation
Get a vehicle's location


```js
edrv.getVehicleLocation({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The vehicle id that needs to be fetched

#### Output
*Output schema unknown*

### getVehicleOdometer
Get a vehicle's odometer


```js
edrv.getVehicleOdometer({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The vehicle id that needs to be fetched

#### Output
*Output schema unknown*



## Definitions

### schema1
* schema1 `object`
  * location `string`
  * manufacturer `string`
  * model `string`
  * protocol `string`
  * public `boolean`


