# @datafire/opto22_pac

Client library for PAC Control

## Installation and Usage
```bash
npm install --save @datafire/opto22_pac
```
```js
let opto22_pac = require('@datafire/opto22_pac').create({
  username: "",
  password: ""
});

.then(data => {
  console.log(data);
});
```

## Description

#### Revised: 6/15/2018

### Overview
This API provides secure access to a SNAP-PAC-R or -S series controller's variable and I/O tags. Confidentiality for API transactions is provided by HTTPS. Authentication uses HTTP Basic Authentication with an API key. An API key ID is submitted in the Basic Authentication userid field and API key value in the password field.

**For more information visit:** [developer.opto22.com](http://developer.opto22.com)

### Examples

**Read an array** of all the integer32 variables defined in the PAC's strategy.
For example, on your SNAP-PAC-R or -S series controller at IP address 1.2.3.4, you would use the URL: 

```
https://1.2.3.4/api/v1/device/strategy/vars/int32s
```
and provide appropriate authentication. The GET response will be a JSON array of name-value 
pairs such as: 
```json
[ { "nMyVeryFavoriteNumber": 22 },
  { "nWidgetsProducedToday": 22222 },
  { "DELAY_LOOP_TIME_IN_MSECS"  : 200 } ]
```
**Read the engineering units** (EU) of an analog input point configured in the PAC's strategy.
For an analog input (I/O point) named aiTemperatureInDegreesF, use 

`https://1.2.3.4/api/v1/device/strategy/ios/analogInputs/aiTemperatureInDegreesF/eu`

The GET response will be a single JSON name-value pair such as:
```json
{ "value": 72.22 }
```    

### Note on packet sizes:
When doing POSTs or GETs, the JSON payload in the body should not exceed 3k (3072 bytes).


## Actions

### readDeviceDetails
Returns controller's type; firmware version; both mac addresses; and uptime in seconds


```js
opto22_pac.readDeviceDetails(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [ControllerResponse](#controllerresponse)

### readStrategyDetails
Returns the name, date, time, and CRC of the strategy currently in the controller, and the number of charts currently running. Empty strings and a 0 will be returned when there is no strategy.


```js
opto22_pac.readStrategyDetails(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [StrategyResponse](#strategyresponse)

### readAnalogInputs
Returns the name and engineering units (EU) for all analog input points in the strategy


```js
opto22_pac.readAnalogInputs(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [FloatVar](#floatvar)

### readAnalogInputEu
Reads the value in engineering units (EU) of the specified analog input


```js
opto22_pac.readAnalogInputEu({
  "ioName": ""
}, context)
```

#### Input
* input `object`
  * ioName **required** `string`: Name of the analog input point to read

#### Output
* output [FloatValueObject](#floatvalueobject)

### readAnalogOutputs
Returns the name and engineering units (EU) for all analog output points in the strategy


```js
opto22_pac.readAnalogOutputs(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [FloatVar](#floatvar)

### readAnalogOutputEu
Reads the value in engineering units (EU) of the specified analog output


```js
opto22_pac.readAnalogOutputEu({
  "ioName": ""
}, context)
```

#### Input
* input `object`
  * ioName **required** `string`: Name of analog output point to read

#### Output
* output [FloatValueObject](#floatvalueobject)

### writeAnalogOutputEu
Sets the value of the specified analog output point


```js
opto22_pac.writeAnalogOutputEu({
  "ioName": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * ioName **required** `string`: Name of the analog output point to write
  * body **required** [FloatValueObject](#floatvalueobject)

#### Output
*Output schema unknown*

### readDigitalInputs
Returns the name and state (true = on, false = off) of all digital input points in the strategy. If there is no strategy in the controller, or the strategy includes no digital inputs, the returned array will be empty.


```js
opto22_pac.readDigitalInputs(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [DigitalPointStateVar](#digitalpointstatevar)

### readDigitalInputState
Returns the specified digital input point's state (true = on, false = off)


```js
opto22_pac.readDigitalInputState({
  "ioName": ""
}, context)
```

#### Input
* input `object`
  * ioName **required** `string`: Name of the digital input point to read

#### Output
* output [DigitalPointStateObject](#digitalpointstateobject)

### readDigitalOutputs
Returns the name and state (true = on, false = off) of all digital output points in the strategy


```js
opto22_pac.readDigitalOutputs(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [DigitalPointStateVar](#digitalpointstatevar)

### readDigitalOutputState
Returns the specified digital output point's state (true = on, false = off)


```js
opto22_pac.readDigitalOutputState({
  "ioName": ""
}, context)
```

#### Input
* input `object`
  * ioName **required** `string`: Name of the digit output point to read

#### Output
* output [DigitalPointStateObject](#digitalpointstateobject)

### writeDigitalOutputState
Sets the value of the specified digital output point


```js
opto22_pac.writeDigitalOutputState({
  "ioName": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * ioName **required** `string`: Name of the digital output point to write
  * body **required** [DigitalPointStateObject](#digitalpointstateobject)

#### Output
*Output schema unknown*

### readFloatTables
Returns an array of the name and length of all the float tables in the strategy


```js
opto22_pac.readFloatTables(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [TableDef](#tabledef)

### readFloatTable
Read table elements
#### Examples ####
* Read all elements in a table named ftable: https://1.2.3.4/api/v1/device/strategy/tables/floats/ftable
* Read elements 5 and up in a table named ftable starting with index 5: https://1.2.3.4/api/v1/device/strategy/tables/floats/ftable?startIndex=5
* Read 3 consecutive elements in a table named ftable starting with the element at index 10: https://1.2.3.4/api/v1/device/strategy/tables/floats/ftable?startIndex=10&numElements=3



```js
opto22_pac.readFloatTable({
  "tableName": ""
}, context)
```

#### Input
* input `object`
  * tableName **required** `string`: Name of float table to read; starting index and number of elements may be specified (defaults to all elements)
  * startIndex `integer`: Index of first element to read (default is 0)
  * numElements `integer`: Number of elements to read (default is number of elements in the table minus startIndex)

#### Output
* output `array`
  * items `number`: Value of the float variable

### writeFloatTable
Write table elements
#### Examples ####
* Write the values (1.5, 2.4, 3.5) to 3 consecutive elements in a table named ftable starting with the element at index 10:POST to https://1.2.3.4/api/v1/device/strategy/tables/floats/ftable?startIndex=10  with body of the POST request set to [ 1.5, 2.4, 3.5 ]



```js
opto22_pac.writeFloatTable({
  "tableName": "",
  "floatArray": []
}, context)
```

#### Input
* input `object`
  * tableName **required** `string`: Name of float table to write; starting index may be specified
  * startIndex `integer`: Index of first element to write (default is 0)
  * floatArray **required** `array`
    * items `number`: Value of the float variable

#### Output
*Output schema unknown*

### readFloatTableElement
Read specified table element


```js
opto22_pac.readFloatTableElement({
  "tableName": "",
  "index": 0
}, context)
```

#### Input
* input `object`
  * tableName **required** `string`: Name of float table to read
  * index **required** `integer`: Index of element to read

#### Output
* output [FloatValueObject](#floatvalueobject)

### writeFloatTableElement
Write specified table element


```js
opto22_pac.writeFloatTableElement({
  "tableName": "",
  "index": 0,
  "FloatElementObject": {}
}, context)
```

#### Input
* input `object`
  * tableName **required** `string`: Name of float table to write
  * index **required** `integer`: Index of element to write
  * FloatElementObject **required** [FloatValueObject](#floatvalueobject)

#### Output
*Output schema unknown*

### readInt32Tables
Returns an array of the name and length of all the integer32 tables in the strategy


```js
opto22_pac.readInt32Tables(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [TableDef](#tabledef)

### readInt32Table
"Read a range of table elements from the specified integer32 table"
 #### Examples ####
 * Read all elements in a table named itable: https://1.2.3.4/api/v1/device/strategy/tables/int32s/itable
 * Read elements 5 and up in a table named itable starting with index 5: https://1.2.3.4/api/v1/device/strategy/tables/int32s/itable?startIndex=5
 * Read 3 consecutive elements in a table named itable starting with the element at index 10: https://1.2.3.4/api/v1/device/strategy/tables/int32s/itable?startIndex=10&numElements=3



```js
opto22_pac.readInt32Table({
  "tableName": ""
}, context)
```

#### Input
* input `object`
  * tableName **required** `string`: Name of integer32 table to read; starting index and number of elements may be specified (defaults to all elements)
  * startIndex `integer`: Index of first element to read (default is 0)
  * numElements `integer`: Number of elements to read (default is number of elements in the table minus startIndex)

#### Output
* output `array`
  * items `integer`: Value of the integer32 variable

### writeInt32Table
"Write a range of table elements"
#### Examples ####
* Write the values (1, 2, 3) to 3 consecutive elements in a table named itable starting with the element at index 10:POST to https://1.2.3.4/api/v1/device/strategy/tables/int32s/itable?startIndex=10  with body of the POST request set to [ 1, 2, 3 ]      



```js
opto22_pac.writeInt32Table({
  "tableName": "",
  "int32Array": []
}, context)
```

#### Input
* input `object`
  * tableName **required** `string`: Name of integer32 table to write; starting index may be specified
  * startIndex `integer`: Index of first element to write (default is 0)
  * int32Array **required** `array`
    * items `integer`: Value of the integer32 variable

#### Output
*Output schema unknown*

### readInt32TableElement
Read specified integer32 table element


```js
opto22_pac.readInt32TableElement({
  "tableName": "",
  "index": 0
}, context)
```

#### Input
* input `object`
  * tableName **required** `string`: Name of the integer32 table to read
  * index **required** `integer`: Index of element to read

#### Output
* output [Int32ValueObject](#int32valueobject)

### writeInt32TableElement
Write specified integer32 table element


```js
opto22_pac.writeInt32TableElement({
  "tableName": "",
  "index": 0,
  "int32ElementObject": {}
}, context)
```

#### Input
* input `object`
  * tableName **required** `string`: Name of the integer32 table to write
  * index **required** `integer`: Index of element to write
  * int32ElementObject **required** [Int32ValueObject](#int32valueobject)

#### Output
*Output schema unknown*

### readInt64Tables
Returns an array of the name and length of all the integer64 tables in the strategy


```js
opto22_pac.readInt64Tables(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [TableDef](#tabledef)

### readInt64Table
"Read a range of table elements from the specified integer64 table"
 #### Examples ####
 * Read all elements in a table named i64table: https://1.2.3.4/api/v1/device/strategy/tables/int64s/i64table
 * Read elements 5 and up in a table named i64table starting with index 5: https://1.2.3.4/api/v1/device/strategy/tables/int64s/i64table?startIndex=5
 * Read 3 consecutive elements in a table named i64table starting with the element at index 10: https://1.2.3.4/api/v1/device/strategy/tables/int64s/i64table?startIndex=10&numElements=3



```js
opto22_pac.readInt64Table({
  "tableName": ""
}, context)
```

#### Input
* input `object`
  * tableName **required** `string`: Name of the integer64 table to read; starting index and number of elements may be specified (defaults to all elements)
  * startIndex `integer`: Index of first element to read (default is 0)
  * numElements `integer`: Number of elements to read (default is number of elements in the table minus startIndex)

#### Output
* output `array`
  * items `integer`: Value of the integer64 variable

### writeInt64Table
"Write a range of table elements"
#### Examples ####
* Write the values (1, 2, 3) to 3 consecutive elements in a table named i64table starting with the element at index 10:POST to https://1.2.3.4/api/v1/device/strategy/tables/int64s/i64table?startIndex=10  with body of the POST request set to [ 1, 2, 3 ]



```js
opto22_pac.writeInt64Table({
  "tableName": "",
  "int64Array": []
}, context)
```

#### Input
* input `object`
  * tableName **required** `string`: Name of integer64 table to write; starting index may be specified
  * startIndex `integer`: Index of first element to write; default is 0
  * int64Array **required** `array`
    * items `integer`: Value of the integer64 variable

#### Output
*Output schema unknown*

### readInt64TableAsString
"Read a range of table elements from the specified integer64 table"
 #### Examples ####
 * Read all elements in a table named i64table: https://1.2.3.4/api/v1/device/strategy/tables/int64s/i64table/_string
 * Read elements 5 and up in a table named i64table starting with index 5: https://1.2.3.4/api/v1/device/strategy/tables/int64s/i64table/_string?startIndex=5
 * Read 3 consecutive elements in a table named i64table starting with the element at index 10: https://1.2.3.4/api/v1/device/strategy/tables/int64s/i64table/_string?startIndex=10&numElements=3



```js
opto22_pac.readInt64TableAsString({
  "tableName": ""
}, context)
```

#### Input
* input `object`
  * tableName **required** `string`: Name of the integer64 table to read; starting index and number of elements may be specified (defaults to all elements)
  * startIndex `integer`: Index of first element to read (default is 0)
  * numElements `integer`: Number of elements to read (default is number of elements in the table minus startIndex)

#### Output
* output `array`
  * items `string`: Value of the integer64 variable expressed as a decimal string. E.g. "34359738367"

### writeInt64TableAsString
"Write a range of table elements"
#### Examples ####
* Write the values (1, 2, 3) to 3 consecutive elements in a table named i64table starting with the element at index 10:POST to https://1.2.3.4/api/v1/device/strategy/tables/int64s/i64table/_string?startIndex=10  with body of the POST request set to [ "1", "2", "3" ]



```js
opto22_pac.writeInt64TableAsString({
  "tableName": "",
  "int64AsStringArray": []
}, context)
```

#### Input
* input `object`
  * tableName **required** `string`: Name of integer64 table to write; starting index may be specified
  * startIndex `integer`: Index of first element to write; default is 0.
  * int64AsStringArray **required** `array`
    * items `string`: Value of the integer64 variable expressed as a decimal string. E.g. "34359738367"

#### Output
*Output schema unknown*

### readInt64TableElement
Read specified integer64 table element


```js
opto22_pac.readInt64TableElement({
  "tableName": "",
  "index": 0
}, context)
```

#### Input
* input `object`
  * tableName **required** `string`: Name of integer64 table to read
  * index **required** `integer`: Index of element to read

#### Output
* output [Int64ValueObject](#int64valueobject)

### writeInt64TableElement
Write specified integer64 table element


```js
opto22_pac.writeInt64TableElement({
  "tableName": "",
  "index": 0,
  "int64ElementObject": {}
}, context)
```

#### Input
* input `object`
  * tableName **required** `string`: Name of the integer64 table to write
  * index **required** `integer`: Index of element to write
  * int64ElementObject **required** [Int64ValueObject](#int64valueobject)

#### Output
*Output schema unknown*

### readInt64TableElementAsString
Read specified integer64 table element as string


```js
opto22_pac.readInt64TableElementAsString({
  "tableName": "",
  "index": 0
}, context)
```

#### Input
* input `object`
  * tableName **required** `string`: Name of integer64 table to read
  * index **required** `integer`: Index of element to read

#### Output
* output [Int64StringValueObject](#int64stringvalueobject)

### writeInt64TableElementAsString
Write specified integer64 table element as string


```js
opto22_pac.writeInt64TableElementAsString({
  "tableName": "",
  "index": 0,
  "int64ElementObject": {}
}, context)
```

#### Input
* input `object`
  * tableName **required** `string`: Name of the integer64 table to write
  * index **required** `integer`: Index of element to write
  * int64ElementObject **required** [Int64StringValueObject](#int64stringvalueobject)

#### Output
*Output schema unknown*

### readStringTables
Returns an array of the name and length of all the string tables in the strategy


```js
opto22_pac.readStringTables(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [TableDef](#tabledef)

### readStringTable
"Read a range of table elements from the specified string table"
 #### Examples ####
 * Read all elements in a table named strTable: https://1.2.3.4/api/v1/device/strategy/tables/strings/strTable
 * Read elements 5 and up in a table named i64table starting with index 5: https://1.2.3.4/api/v1/device/strategy/tables/strings/strTable?startIndex=5
 * Read 3 consecutive elements in a table named i64table starting with the element at index 10: https://1.2.3.4/api/v1/device/strategy/tables/strings/strTable?startIndex=10&numElements=3



```js
opto22_pac.readStringTable({
  "tableName": ""
}, context)
```

#### Input
* input `object`
  * tableName **required** `string`: Name of string table to read; starting index and number of elements may be specified (defaults to all elements)
  * startIndex `integer`: Index of first element to read (default is 0)
  * numElements `integer`: Number of elements to read (default is number of elements in the table minus startIndex)

#### Output
* output `array`
  * items `string`: The value of a string; string width (max length) for each string table is defined in the strategy

### writeStringTable
"Write a range of table elements"
#### Examples ####
* Write the values ("first", "second", "third") to 3 consecutive elements in a table named strTable starting with the element at index 10:POST to https://1.2.3.4/api/v1/device/strategy/tables/strings/strtable?startIndex=10  with body of the POST request set to [ "first", "second", "third" ]



```js
opto22_pac.writeStringTable({
  "tableName": "",
  "stringArray": []
}, context)
```

#### Input
* input `object`
  * tableName **required** `string`: Name of string table to write; starting index may be specified
  * startIndex `integer`: Index of first element to write (default is 0)
  * stringArray **required** `array`
    * items `string`: The value of a string; string width (max length) for each string variable is defined in the strategy

#### Output
* output [ErrorResponse200OKish](#errorresponse200okish)

### readStringTableElement
Read specified table element


```js
opto22_pac.readStringTableElement({
  "tableName": "",
  "index": 0
}, context)
```

#### Input
* input `object`
  * tableName **required** `string`: Name of string table to read
  * index **required** `integer`: Index of element to read

#### Output
* output [StringValueObject](#stringvalueobject)

### writeStringTableElement
Write specified table element


```js
opto22_pac.writeStringTableElement({
  "tableName": "",
  "index": 0,
  "stringElementObject": {}
}, context)
```

#### Input
* input `object`
  * tableName **required** `string`: Name of string table to write
  * index **required** `integer`: Index of element to write
  * stringElementObject **required** [StringValueObject](#stringvalueobject)

#### Output
*Output schema unknown*

### readDownTimerVars
Returns the name and current value of all down timers in the strategy


```js
opto22_pac.readDownTimerVars(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [FloatVar](#floatvar)

### readDownTimerValue
Returns current value of the specified down timer


```js
opto22_pac.readDownTimerValue({
  "downTimerName": ""
}, context)
```

#### Input
* input `object`
  * downTimerName **required** `string`: Name of the down timer variable to read

#### Output
* output [FloatValueObject](#floatvalueobject)

### readFloatVars
Returns the name and value of all (single-precision) float variables in the strategy


```js
opto22_pac.readFloatVars(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [FloatVar](#floatvar)

### readFloatVar
Returns value of the specified float variable


```js
opto22_pac.readFloatVar({
  "floatName": ""
}, context)
```

#### Input
* input `object`
  * floatName **required** `string`: Name of float variable to read

#### Output
* output [FloatValueObject](#floatvalueobject)

### writeFloatVar
Sets the value of a float variable


```js
opto22_pac.writeFloatVar({
  "floatName": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * floatName **required** `string`: Name of the float variable to write
  * body **required** [FloatValueObject](#floatvalueobject)

#### Output
*Output schema unknown*

### readInt32Vars
Returns the name and value of all integer32 variables in the strategy


```js
opto22_pac.readInt32Vars(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Int32Var](#int32var)

### readInt32Var
Returns value of the specified integer32 variable


```js
opto22_pac.readInt32Var({
  "int32Name": ""
}, context)
```

#### Input
* input `object`
  * int32Name **required** `string`: Name of integer32 variable to read

#### Output
* output [Int32ValueObject](#int32valueobject)

### writeInt32Var
Sets the value of an integer32 variable


```js
opto22_pac.writeInt32Var({
  "int32Name": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * int32Name **required** `string`: Name of integer32 variable to write
  * body **required** [Int32ValueObject](#int32valueobject)

#### Output
*Output schema unknown*

### readInt64Vars
Returns the name and value of all integer64 variables in the strategy


```js
opto22_pac.readInt64Vars(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Int64Var](#int64var)

### readInt64VarsAsStrings
Returns the name and value as a string of all integer64 variables in the strategy


```js
opto22_pac.readInt64VarsAsStrings(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Int64VarAsString](#int64varasstring)

### readInt64Var
Returns value of the specified integer64 variable


```js
opto22_pac.readInt64Var({
  "int64Name": ""
}, context)
```

#### Input
* input `object`
  * int64Name **required** `string`: Name of integer64 variable to read

#### Output
* output [Int64ValueObject](#int64valueobject)

### writeInt64Var
Sets the value of an integer64 variable


```js
opto22_pac.writeInt64Var({
  "int64Name": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * int64Name **required** `string`: Name of integer64 variable to write
  * body **required** [Int64ValueObject](#int64valueobject)

#### Output
*Output schema unknown*

### readInt64VarAsString
Returns value of the specified integer64 variable as a string


```js
opto22_pac.readInt64VarAsString({
  "int64Name": ""
}, context)
```

#### Input
* input `object`
  * int64Name **required** `string`: Name of integer64 variable to read

#### Output
* output [Int64StringValueObject](#int64stringvalueobject)

### writeInt64VarAsString
Sets the value of an integer64 variable as a string


```js
opto22_pac.writeInt64VarAsString({
  "int64Name": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * int64Name **required** `string`: Name of integer64 variable to write
  * body **required** [Int64StringValueObject](#int64stringvalueobject)

#### Output
*Output schema unknown*

### readStringVars
Returns the name and value of all string variables in the strategy


```js
opto22_pac.readStringVars(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [StringVar](#stringvar)

### readStringVar
Returns value of the specified string


```js
opto22_pac.readStringVar({
  "stringName": ""
}, context)
```

#### Input
* input `object`
  * stringName **required** `string`: Name of string variable to read

#### Output
* output [StringValueObject](#stringvalueobject)

### writeStringVar
Sets the value of a string variable


```js
opto22_pac.writeStringVar({
  "stringName": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * stringName **required** `string`: Name of string variable to write
  * body **required** [StringValueObject](#stringvalueobject)

#### Output
* output [ErrorResponse200OKish](#errorresponse200okish)

### readUpTimerVars
Returns the name and current value of all up timers in the strategy


```js
opto22_pac.readUpTimerVars(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [FloatVar](#floatvar)

### readUpTimerValue
Returns current value of the specified up timer


```js
opto22_pac.readUpTimerValue({
  "upTimerName": ""
}, context)
```

#### Input
* input `object`
  * upTimerName **required** `string`: Name of the up timer variable to read

#### Output
* output [FloatValueObject](#floatvalueobject)



## Definitions

### ControllerResponse
* ControllerResponse `object`
  * controllerType `string`
  * firmwareDate `string`
  * firmwareTime `string`
  * firmwareVersion `string`
  * mac1 `string`
  * mac2 `string`
  * upTimeSeconds `integer`

### DigitalPointStateObject
* DigitalPointStateObject `object`
  * value `boolean`: State of a digital point (true = on, false = off)

### DigitalPointStateVar
* DigitalPointStateVar `object`
  * name `string`: Name of the tag (strategy variable, i/o point, etc.)
  * value `boolean`: State of a digital point (true = on, false = off)

### ErrorResponse200OKish
* ErrorResponse200OKish `object`
  * errorCode **required** `integer`: Details: ** -23 ** The string you passed is longer than the width of PAC Control string variable or table element you are writing to.
  * message **required** `string`

### ErrorResponse400BadAdminOrValue
* ErrorResponse400BadAdminOrValue `object`
  * errorCode **required** `integer`: Details: ** -1 ** Invalid or no strategy. Use PAC Control to download strategy logic. ** -3 ** Buffer overrun or invalid length. The number or range of table indicies you specified exceeds elements in the PAC Control table. ** -8 ** Invalid data. Check format of data written. Compare to what's read for the same endpoint. ** -12 ** You've passed a table index that is less than zero or greater than the length of the table minus 1. ** -13 ** The value you passed to write is outside of the valid range for the PAC Control data type you're writing to. For example, if you specified the value 999999999999999 for an integer32 (since integer32 data types must be in the range: -2147483648 to 2147483647). ** -17 or -20 ** The controller is busy with another task, for example, downloading a new strategy. Try again later. ** -36 ** Endpoint is not defined. ** -109 ** Attempting to write without write permissions. Check /admin/keys settings. ** -13019 ** Invalid endpoint. Check syntax of the URL (e.g. did you use 'ev' instead of 'eu'). ** 400 ** Before using the API on this device, you must first change the default user name and password via the URL /admin/keys. Use the default User Name: 'admin' and Password: 'password' to log ininitially.
  * message **required** `string`

### ErrorResponse401BadKeyForBasicAuth
* ErrorResponse401BadKeyForBasicAuth `object`
  * errorCode **required** `integer`: Details: ** -104 ** Invalid key ID/value in HTTP header. Before using the API on this device, you must create at least one key ID/value via the URL /admin/keys. Then use one of those in your HTTP header for Basic Authentication.
  * message **required** `string`

### ErrorResponse404NotFound
* ErrorResponse404NotFound `object`
  * errorCode **required** `integer`: Details: ** -29 ** The tag (variable, table, timer, I/O point, etc.) you requested exists on the controller but does not match the data type for this endpoint.  ** -28 ** The tag (variable, table, timer, I/O point, etc.) does not currently exist on the controller. Check the tag name and the controller's status. ** 404 ** Endpoint does not exist. Check URL.
  * message **required** `string`

### FloatValueObject
* FloatValueObject `object`
  * value `number`: Value of the float variable

### FloatVar
* FloatVar `object`
  * name `string`: Name of the tag (strategy variable, i/o point, etc.)
  * value `number`: Value of the float variable

### Int32ValueObject
* Int32ValueObject `object`
  * value `integer`: Value of the integer32 variable

### Int32Var
* Int32Var `object`
  * name `string`: Name of the tag (strategy variable, i/o point, etc.)
  * value `integer`: Value of the integer32 variable

### Int64StringValueObject
* Int64StringValueObject `object`
  * value `string`: Value of the integer64 variable expressed as decimal string, e.g. "34359738367"

### Int64ValueObject
* Int64ValueObject `object`
  * value `integer`: Value of the integer64 variable

### Int64Var
* Int64Var `object`
  * name `string`: Name of the tag (strategy variable, i/o point, etc.)
  * value `integer`: Value of the integer64 variable

### Int64VarAsString
* Int64VarAsString `object`
  * name `string`: Name of the tag (strategy variable, i/o point, etc.)
  * value `string`: Value of the integer64 variable expressed as a decimal string, E.g. "34359738367"

### StrategyResponse
* StrategyResponse `object`
  * crc `string`
  * date `string`
  * runningCharts `integer`
  * strategyName `string`
  * time `string`

### StringValueObject
* StringValueObject `object`
  * value `string`: The value of a string; string width (max length) for each string variable is defined in the strategy

### StringVar
* StringVar `object`
  * name `string`: Name of the tag (strategy variable, i/o point, etc.)
  * value `string`: The value of a string; string width (max length) for each string variable is defined in the strategy

### TableDef
* TableDef `object`
  * length `integer`: Number of elements contained in this table
  * name `string`: Name of the tag (strategy variable, i/o point, etc.)


