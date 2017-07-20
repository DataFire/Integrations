# @datafire/infermedica

Client library for Infermedica

## Installation and Usage
```bash
npm install --save datafire @datafire/infermedica
```

```js
let datafire = require('datafire');
let infermedica = require('@datafire/infermedica').actions;
let context = new datafire.Context();

infermedica.getAllConditions({}, context).then(data => {
  console.log(data);
})
```

## Description
Empower your healthcare services with intelligent diagnostic insights of Infermedica API.

## Actions
### getAllConditions
Returns a list of all available conditions.


```js
infermedica.getAllConditions(null, context)
```


### getCondition
Returns details of a single condition specified by id parameter.


```js
infermedica.getCondition({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - condition id

### computeDiagnosis
Computes possible diagnoses and relevant observations based on provided patient information.


```js
infermedica.computeDiagnosis({
  "body": {
    "age": 0,
    "sex": ""
  }
}, context)
```

#### Parameters
* body (object) **required**

### getDatabaseInfo
Returns information about data used by diagnostic engine.


```js
infermedica.getDatabaseInfo(null, context)
```


### getMatchingObservation
Returns details of a single observation if matched by the given phrase.


```js
infermedica.getMatchingObservation({
  "phrase": ""
}, context)
```

#### Parameters
* phrase (string) **required** - phrase to match
* sex (string) - sex filter

### getAllObservations
Returns a list of all available observations.


```js
infermedica.getAllObservations(null, context)
```


### getObservation
Returns details of a single observation specified by id parameter.


```js
infermedica.getObservation({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - observation id

### getAllRiskFactors
Returns a list of all available risk factors.


```js
infermedica.getAllRiskFactors(null, context)
```


### getRiskFactor
Returns details of a single risk factor specified by id parameter.


```js
infermedica.getRiskFactor({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - risk factor id

