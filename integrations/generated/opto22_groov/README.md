# @datafire/opto22_groov

Client library for groov View Public API

## Installation and Usage
```bash
npm install --save @datafire/opto22_groov
```
```js
let opto22_groov = require('@datafire/opto22_groov').create({
  api_key: ""
});

.then(data => {
  console.log(data);
});
```

## Description

#### Revised: 2019-11-21

### Overview
groov View Public API revision 1.


## Actions

### groovInfo
Get information about groov View. No authorization required.


```js
opto22_groov.groovInfo(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [groovInfo](#groovinfo)

### listDevices
List devices available in the data store. Authorized for admins and editors.


```js
opto22_groov.listDevices(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [dataStoreDevice](#datastoredevice)

### listDeviceTags
List tags of the given device. Authorized for admins and editors.


```js
opto22_groov.listDeviceTags({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `number`: ID of the device to use.

#### Output
* output `array`
  * items [tagDefinition](#tagdefinition)

### batchReadTags
Read selected tags from the data store. Authorized for admins and editors.


```js
opto22_groov.batchReadTags({
  "tags": []
}, context)
```

#### Input
* input `object`
  * tags **required** `array`
    * items [tagReference](#tagreference)

#### Output
* output `array`
  * items [tagValue](#tagvalue)

### readTag
Read the current value of a single tag. Authorized for admins and editors.


```js
opto22_groov.readTag({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `number`: ID of the tag to read.
  * index `number`: Table index to start reading at.
  * count `number`: Number of elements to read from a table.

#### Output
* output [tagValue](#tagvalue)

### listAllTags
List all data store tags defined in the project. Authorized for admins and editors.


```js
opto22_groov.listAllTags(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [tagDefinition](#tagdefinition)

### writeTag
Writes a new value to the given tag. Authorized for admins and editors.


```js
opto22_groov.writeTag({
  "id": 0,
  "value": ""
}, context)
```

#### Input
* input `object`
  * id **required** `number`: ID of the tag to write.
  * value **required** `string`: Value to write to the tag. Must be a string, number, or boolean.
  * index `number`: For array tags, the index to write the value to.

#### Output
* output [tagValue](#tagvalue)

### downloadLogJson
Downloads the complete groov View log in JSON format. Added in groov View R4.2a.


```js
opto22_groov.downloadLogJson({}, context)
```

#### Input
* input `object`
  * minimum-log-level `string` (values: TRACE, DEBUG, INFO, WARN, ERROR, FATAL): How verbose the log should be.
  * last-timestamp `number`: The earliest time to include in the log. Value is milliseconds since January 1, 1970 UTC.
  * filter `string`: Optional string to search for in the log.

#### Output
* output `string`

### downloadLogText
Downloads the complete groov View log. Added in groov View R4.2a.


```js
opto22_groov.downloadLogText({}, context)
```

#### Input
* input `object`
  * minimum-log-level `string` (values: TRACE, DEBUG, INFO, WARN, ERROR, FATAL): How verbose the log should be.
  * last-timestamp `number`: The earliest time to include in the log. Value is milliseconds since January 1, 1970 UTC.
  * filter `string`: Optional string to search for in the log.

#### Output
* output `string`

### whoAmI
Get information about the user you are authenticated as. Authorized for admins, editors, operators, and kiosk.


```js
opto22_groov.whoAmI(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [User](#user)



## Definitions

### User
* User `object`
  * apiKey **required** `string`
  * email **required** `string`
  * groups **required** `array`
    * items `number`
  * id **required** `number`
  * needsPasswordChange **required** `boolean`: True if your password is expired
  * role **required** `string`
  * username **required** `string`

### booleanArrayValue
* booleanArrayValue
  * valueType **required** `string`
  * value **required** `array`
    * items `boolean`

### booleanValue
* booleanValue
  * valueType **required** `string`
  * value **required** `boolean`

### dataStoreDevice
* dataStoreDevice: A Data Store device within a groov View project
  * deviceType **required** `string`
  * id **required** `number`
  * name **required** `string`

### device
* device `object`: A generic device within a groov View project
  * deviceType **required** `string`

### errorValue
* errorValue
  * valueType **required** `string`
  * errorCode **required** `string`
  * errorMessage **required** `string`

### floatArrayValue
* floatArrayValue
  * valueType **required** `string`
  * value **required** `array`
    * items `number`

### floatValue
* floatValue
  * valueType **required** `string`
  * value **required** `number`

### groovInfo
* groovInfo `object`
  * currentApiVersion **required** `number`: The current API version number
  * groovAdminVersion **required** `string`: The groov Admin version number if running on a groov hardware box
  * groovBoxDescription **required** `string`: The groov box type (GROOV-AT1, GROOV-AR1, or GRV-EPIC-PR1)
  * groovNodeRedVersion **required** `string`: The node red version number if running on a GROOV-AR1 which has node red installed
  * isGroovBox **required** `boolean`: True if running on a groov hardware box
  * isGroovBoxSetup **required** `boolean`: True if running on a groov hardware box which has been setup or true if running on groov Server for Windows
  * isLicenseValid **required** `boolean`: True if a license is installed, valid, and not expired
  * licenseType **required** `string`: The license type (NONE, MAINTENANCE_EXPIRED, or VALID)
  * minimumApiVersion **required** `number`: The minimum supported API version number
  * shouldShowTrialDialog **required** `boolean`: True if the trial dialog pops up when logging into groov View
  * timezoneName **required** `string`: The server's timezone
  * timezoneOffset **required** `number`: The server's timezone offset from UTC in minutes
  * trialPeriodExpiration **required** `number`: Milliseconds until trial period is expired
  * warVersion **required** `string`: The version number of the war

### integerArrayValue
* integerArrayValue
  * valueType **required** `string`
  * value **required** `array`
    * items `number`

### integerValue
* integerValue
  * valueType **required** `string`
  * value **required** `number`

### stringArrayValue
* stringArrayValue
  * valueType **required** `string`
  * value **required** `array`
    * items `string`

### stringValue
* stringValue
  * valueType **required** `string`
  * value **required** `string`

### tagDefinition
* tagDefinition `object`
  * dataType **required** `string` (values: boolean, integer, float, string, booleanArray, integerArray, floatArray, stringArray)
  * deviceId **required** `number`
  * id **required** `number`
  * length `number`
  * name **required** `string`

### tagReference
* tagReference `object`
  * count `number`: For array tags, the number of elements to read, starting at index.
  * id **required** `number`: Unique id for the tag.
  * index `number`: For array tags, the index to start reading at.

### tagValue
* tagValue `object`
  * valueType **required** `string`


