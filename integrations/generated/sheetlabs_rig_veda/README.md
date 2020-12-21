# @datafire/sheetlabs_rig_veda

Client library for rv API

## Installation and Usage
```bash
npm install --save @datafire/sheetlabs_rig_veda
```
```js
let sheetlabs_rig_veda = require('@datafire/sheetlabs_rig_veda').create();

.then(data => {
  console.log(data);
});
```

## Description

# Introduction
This API returns information about all of the verses in Rig Veda. The results are JSON objects that contain the name of the god, poet, and meter of the verses in Rig Veda, the category of the god and the poet, and the _mandal_ and _sukta_ number.

The API uses the Swagger 2.0 specification.

# Authentication
This is an open API.

# Rate limits
Total monthly calls are limited to 10,000.


## Actions

### .get
Fetch all entries in this API


```js
sheetlabs_rig_veda..get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### mandal.get
Fetch all verses in a specific book (mandal)


```js
sheetlabs_rig_veda.mandal.get({
  "mandal": 0
}, context)
```

#### Input
* input `object`
  * mandal **required** `integer` (values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10): Click to select the mandal number from the list.

#### Output
*Output schema unknown*

### meter.get
Fetch all verses composed in a specific meter


```js
sheetlabs_rig_veda.meter.get({
  "meter": ""
}, context)
```

#### Input
* input `object`
  * meter **required** `string`: The name of the meter. Wildcard characters allowed, for example \*tri*

#### Output
*Output schema unknown*

### sungby.get
Fetch all verses composed by a specific rishi (poet)


```js
sheetlabs_rig_veda.sungby.get({
  "sungby": ""
}, context)
```

#### Input
* input `object`
  * sungby **required** `string`: The name of the rishi. Wildcard characters allowed, for example \*mitra*

#### Output
*Output schema unknown*

### sungbycategory.get
Fetch all verses composed by a specific category of poets


```js
sheetlabs_rig_veda.sungbycategory.get({
  "sungbycategory": ""
}, context)
```

#### Input
* input `object`
  * sungbycategory **required** `string` (values: animal, demon male, divine female, divine male, human female, human male): Click to select from the list.

#### Output
*Output schema unknown*

### sungfor.get
Fetch all verses addressed to a specific god, human, or thing


```js
sheetlabs_rig_veda.sungfor.get({
  "sungfor": ""
}, context)
```

#### Input
* input `object`
  * sungfor **required** `string`: The name of the god, goddess, or object. Wildcard characters allowed, for example \*dra*

#### Output
*Output schema unknown*

### sungforcategory.get
Fetch all verses composed for a specific category of god, human, or thing


```js
sheetlabs_rig_veda.sungforcategory.get({
  "sungforcategory": ""
}, context)
```

#### Input
* input `object`
  * sungforcategory **required** `string` (values: abstract, animal, demon male, divine female, divine human, divine male, human couple, human female, human male, human unborn, object, plant): Click to select from the list.

#### Output
*Output schema unknown*



## Definitions

*This integration has no definitions*
