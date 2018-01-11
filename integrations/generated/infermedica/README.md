# @datafire/infermedica

Client library for Infermedica

## Installation and Usage
```bash
npm install --save @datafire/infermedica
```
```js
let infermedica = require('@datafire/infermedica').create();

infermedica.getAllConditions({}).then(data => {
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

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Condition](#condition)

### getCondition
Returns details of a single condition specified by id parameter.


```js
infermedica.getCondition({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: condition id

#### Output
* output [Condition](#condition)

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

#### Input
* input `object`
  * body **required** [DiagnosisRequest](#diagnosisrequest)

#### Output
* output [DiagnosisResponse](#diagnosisresponse)

### getDatabaseInfo
Returns information about data used by diagnostic engine.


```js
infermedica.getDatabaseInfo(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [DatabaseInfo](#databaseinfo)

### getMatchingObservation
Returns details of a single observation if matched by the given phrase.


```js
infermedica.getMatchingObservation({
  "phrase": ""
}, context)
```

#### Input
* input `object`
  * phrase **required** `string`: phrase to match
  * sex `string` (values: female, male): sex filter

#### Output
* output [Observation](#observation)

### getAllObservations
Returns a list of all available observations.


```js
infermedica.getAllObservations(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Observation](#observation)

### getObservation
Returns details of a single observation specified by id parameter.


```js
infermedica.getObservation({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: observation id

#### Output
* output [Observation](#observation)

### getAllRiskFactors
Returns a list of all available risk factors.


```js
infermedica.getAllRiskFactors(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [RiskFactor](#riskfactor)

### getRiskFactor
Returns details of a single risk factor specified by id parameter.


```js
infermedica.getRiskFactor({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: risk factor id

#### Output
* output [RiskFactor](#riskfactor)



## Definitions

### Choice
* Choice `object`
  * id **required** `string` (values: present, absent, unknown)
  * label **required** `string`

### Condition
* Condition `object`
  * acuteness `string` (values: chronic, chronic_with_exacerbations, acute_potentially_chronic, acute)
  * categories **required** `array`
    * items `string`
  * id **required** `string`
  * name **required** `string`
  * prevalence `string` (values: very_rare, rare, moderate, common)
  * severity `string` (values: mild, moderate, severe)
  * sex_filter **required** `string` (values: female, male, both)

### ConditionProbability
* ConditionProbability `object`
  * id **required** `string`: condition id
  * name **required** `string`: condition name
  * probability **required** `number`

### DatabaseInfo
* DatabaseInfo `object`
  * conditions_count **required** `integer`
  * observations_count **required** `integer`
  * updated_at **required** `string`: time of last database update in ISO 8601 format

### DiagnosisRequest
* DiagnosisRequest `object`
  * age **required** `integer`
  * evaluated_at `string`: time when diagnosis was evaluated in ISO 8601 format
  * evidence `array`
    * items [Evidence](#evidence)
  * extras `object`
  * pursued `array`: list of ids of pursued conditions
    * items `string`
  * sex **required** `string` (values: female, male)

### DiagnosisResponse
* DiagnosisResponse `object`
  * conditions `array`
    * items [ConditionProbability](#conditionprobability)
  * extras `object`
  * question [Question](#question)

### Evidence
* Evidence `object`
  * choice_id **required** `string` (values: present, absent, unknown)
  * id **required** `string`: id of observation, risk factor or condition
  * observed_at `string`: time when evidence was observed in ISO 8601 format

### Observation
* Observation `object`
  * category `string`
  * children `object`: ids of child observations grouped by their relation with this observation
  * id **required** `string`
  * name **required** `string`
  * parent_id `string`: id of parent observation
  * parent_relation_type `string` (values: base, duration, severity, character, exacerbating_factor, diminishing_factor, location, radiation): type of relation with parent observation
  * sex_filter **required** `string` (values: female, male, both)
  * valid_for `integer`: number of days that this observation remains valid

### Question
* Question `object`
  * items **required** `array`: one or more observations to evaluate
    * items [QuestionItem](#questionitem)
  * text **required** `string`: question text
  * type `string` (values: single, group_single, group_multiple)

### QuestionItem
* QuestionItem `object`
  * choices **required** `array`: list of available answer choices
    * items [Choice](#choice)
  * id **required** `string`: observation id
  * name **required** `string`: name or alias of observation

### RiskFactor
* RiskFactor `object`
  * id **required** `string`
  * name **required** `string`


