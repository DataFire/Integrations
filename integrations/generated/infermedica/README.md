# @datafire/infermedica

Client library for Infermedica

## Installation and Usage
```bash
npm install --save @datafire/infermedica
```
```js
let infermedica = require('@datafire/infermedica').create();

infermedica.getAllConditions(null).then(data => {
  console.log(data);
});
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

### diagnosis.post
Suggests possible diagnoses and relevant observations based on provided patient information.


```js
infermedica.diagnosis.post({
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

### getExplanation
Explains which evidence impact probability of selected condition.


```js
infermedica.getExplanation({
  "body": {
    "age": 0,
    "sex": "",
    "target": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [ExplanationRequest](#explanationrequest)

#### Output
* output [ExplanationResponse](#explanationresponse)

### getDatabaseInfo
Returns information about data used by diagnostic engine.


```js
infermedica.getDatabaseInfo(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Info](#info)

### getAllLabTests
Returns a list of all available lab tests.


```js
infermedica.getAllLabTests(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [LabTest](#labtest)

### getLabTest
Returns details of a single lab test specified by id parameter.


```js
infermedica.getLabTest({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: lab test id

#### Output
* output [LabTest](#labtest)

### getMatchingObservation
Returns a single observation matching given phrase.


```js
infermedica.getMatchingObservation({
  "phrase": ""
}, context)
```

#### Input
* input `object`
  * phrase **required** `string`: phrase to match
  * sex `string` (values: male, female): sex filter

#### Output
* output [SearchResult](#searchresult)

### getMentions
Returns list of mentions of observation found in given text.


```js
infermedica.getMentions({
  "body": {
    "text": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [ParseRequest](#parserequest)

#### Output
* output [ParseResponse](#parseresponse)

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

### getMatchingObservations
Returns list of observations matching the given phrase.


```js
infermedica.getMatchingObservations({
  "phrase": ""
}, context)
```

#### Input
* input `object`
  * phrase **required** `string`: phrase to match
  * sex `string` (values: male, female): sex filter
  * max_results `integer`: maximum number of results
  * type `array`: type of results

#### Output
* output `array`
  * items [SearchResult](#searchresult)

### getSuggestions
Suggests possible symptoms based on provided patient information.


```js
infermedica.getSuggestions({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [SuggestRequest](#suggestrequest)
  * max_results `integer`: maximum number of results

#### Output
* output `array`
  * items [SuggestResult](#suggestresult)

### getAllSymptoms
Returns a list of all available symptoms.


```js
infermedica.getAllSymptoms(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Symptom](#symptom)

### getSymptom
Returns details of a single symptom specified by id parameter.


```js
infermedica.getSymptom({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: symptoms id

#### Output
* output [Symptom](#symptom)

### triage.post
Estimates triage level based on provided patient information.


```js
infermedica.triage.post({
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
* output [TriageResponse](#triageresponse)



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
  * common_name `string`
  * extras `object`: additional content, like custom properties or images
  * id **required** `string`
  * name **required** `string`
  * prevalence `string` (values: very_rare, rare, moderate, common)
  * severity `string` (values: mild, moderate, severe)
  * sex_filter **required** `string` (values: both, male, female)
  * triage_level `string` (values: emergency, consultation, self_care)

### ConditionProbability
* ConditionProbability `object`
  * common_name `string`: condition common name
  * id **required** `string`: condition id
  * name **required** `string`: condition name
  * probability **required** `number`

### DiagnosisRequest
* DiagnosisRequest `object`
  * age **required** `integer`
  * evaluated_at `string`: time when diagnosis was evaluated in ISO 8601 format
  * evidence `array`
    * items [Evidence](#evidence)
  * extras `object`
  * sex **required** `string` (values: male, female)

### DiagnosisResponse
* DiagnosisResponse `object`
  * conditions `array`
    * items [ConditionProbability](#conditionprobability)
  * extras `object`
  * question [Question](#question)
  * should_stop `boolean`

### Evidence
* Evidence `object`
  * choice_id **required** `string` (values: present, absent, unknown)
  * id **required** `string`: id of observation or condition
  * initial `boolean`: true for initial evidence, false for evidence reported during interview
  * observed_at `string`: time when evidence was observed in ISO 8601 format
  * related `boolean`: true for related evidence, false for evidence reported during interview

### ExplanationEvidence
* ExplanationEvidence `object`
  * common_name `string`: observation common name
  * id **required** `string`: observation id
  * name **required** `string`: observation name

### ExplanationRequest
* ExplanationRequest `object`
  * age **required** `integer`
  * evaluated_at `string`: time when diagnosis was evaluated in ISO 8601 format
  * evidence `array`
    * items [Evidence](#evidence)
  * extras `object`
  * sex **required** `string` (values: male, female)
  * target **required** `string`: target condition id

### ExplanationResponse
* ExplanationResponse `object`
  * conflicting_evidence **required** `array`: conflicting evidence
    * items [ExplanationEvidence](#explanationevidence)
  * supporting_evidence **required** `array`: supporting evidence
    * items [ExplanationEvidence](#explanationevidence)
  * unconfirmed_evidence **required** `array`: unconfirmed evidence
    * items [ExplanationEvidence](#explanationevidence)

### Info
* Info `object`
  * conditions_count **required** `integer`
  * lab_tests_count **required** `integer`
  * risk_factors_count **required** `integer`
  * symptoms_count **required** `integer`
  * updated_at **required** `string`: time of last model update in ISO 8601 format

### LabTest
* LabTest `object`
  * category `string`
  * common_name `string`
  * id **required** `string`
  * name **required** `string`
  * results `array`
    * items [LabTestResult](#labtestresult)

### LabTestResult
* LabTestResult `object`
  * id **required** `string`
  * type **required** `string` (values: very_low, low, normal, high, very_high, absent, present)

### ObservationMention
* ObservationMention `object`
  * choice_id **required** `string` (values: present, absent, unknown)
  * common_name `string`: observation common name
  * head_position **required** `integer`
  * id **required** `string`: observation id
  * name **required** `string`: observation name
  * orth **required** `string`
  * positions **required** `array`
    * items `integer`

### ParseRequest
* ParseRequest `object`
  * concept_types `array`
    * items `string` (values: symptom, risk_factor)
  * correct_spelling `boolean`
  * include_tokens `boolean`
  * text **required** `string`

### ParseResponse
* ParseResponse `object`
  * mentions `array`
    * items [ObservationMention](#observationmention)
  * tokens `array`
    * items `string`

### Question
* Question `object`
  * extras `object`: additional content, like images or HTML
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
  * category `string`
  * common_name `string`
  * extras `object`: additional content, like custom properties or images
  * id **required** `string`
  * image_source `string`
  * image_url `string`
  * name **required** `string`
  * question **required** `string`: only available in object details, not in listing
  * sex_filter **required** `string` (values: both, male, female)

### SearchResult
* SearchResult `object`
  * id **required** `string`
  * label **required** `string`: matched phrase, name or its synonym

### SeriousObservation
* SeriousObservation `object`
  * common_name `string`: observation common name
  * id **required** `string`: observation id
  * is_emergency `boolean`
  * name **required** `string`: observation name

### SuggestRequest
* SuggestRequest `object`
  * age `integer`
  * evaluated_at `string`: time when diagnosis was evaluated in ISO 8601 format
  * evidence `array`
    * items [Evidence](#evidence)
  * extras `object`
  * sex `string` (values: male, female)

### SuggestResult
* SuggestResult `object`
  * common_name `string`
  * id **required** `string`
  * name **required** `string`

### Symptom
* Symptom `object`
  * category `string`
  * children `object`: list of child symptoms
  * common_name `string`
  * extras `object`: additional content, like custom properties or images
  * id **required** `string`
  * image_source `string`
  * image_url `string`
  * name **required** `string`
  * parent_id `string`: id of parent symptom
  * parent_relation `string` (values: base, duration, severity, character, exacerbating_factor, diminishing_factor, location, radiation): type of relation with parent symptom
  * question **required** `string`: only available in object details, not in listing
  * sex_filter **required** `string` (values: both, male, female)

### TriageResponse
* TriageResponse `object`
  * serious `array`
    * items [SeriousObservation](#seriousobservation)
  * triage_level `string` (values: emergency, consultation, self_care)


