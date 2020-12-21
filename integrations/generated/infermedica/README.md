# @datafire/infermedica

Client library for Infermedica API

## Installation and Usage
```bash
npm install --save @datafire/infermedica
```
```js
let infermedica = require('@datafire/infermedica').create();

.then(data => {
  console.log(data);
});
```

## Description

Empower your healthcare services with intelligent diagnostic insights of Infermedica API.

## Actions

### getConcepts



```js
infermedica.getConcepts({}, context)
```

#### Input
* input `object`
  * ids `string`: ids
  * types `string`: types

#### Output
* output `array`
  * items [ConceptItemModel_Public](#conceptitemmodel_public)

### getConcept



```js
infermedica.getConcept({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: concept id

#### Output
* output [ConceptItemModel_Public](#conceptitemmodel_public)

### getAllConditions
Returns a list of all available conditions.


```js
infermedica.getAllConditions({}, context)
```

#### Input
* input `object`
  * age.value `integer`: age value
  * age.unit `string` (values: year, month): unit in which age value was provided
  * enable_triage_5 `boolean`: enable 5-level triage values

#### Output
* output `array`
  * items [Condition_Public](#condition_public)

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
  * age.value `integer`: age value
  * age.unit `string` (values: year, month): unit in which age value was provided
  * enable_triage_5 `boolean`: enable 5-level triage values

#### Output
* output [Condition_Details](#condition_details)

### computeDiagnosis
Suggests possible diagnoses and relevant observations based on provided patient information.


```js
infermedica.computeDiagnosis({
  "body": {
    "age": {},
    "sex": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [DiagnosisRequest](#diagnosisrequest)

#### Output
* output [DiagnosisResponse_Public](#diagnosisresponse_public)

### computeExplanation
Explains which evidence impact probability of selected condition.


```js
infermedica.computeExplanation({
  "body": {
    "age": {},
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
infermedica.getDatabaseInfo({}, context)
```

#### Input
* input `object`
  * age.value `integer`: age value
  * age.unit `string` (values: year, month): unit in which age value was provided

#### Output
* output [Info_Public](#info_public)

### getAllLabTests
Returns a list of all available lab tests.


```js
infermedica.getAllLabTests({}, context)
```

#### Input
* input `object`
  * age.value `integer`: age value
  * age.unit `string` (values: year, month): unit in which age value was provided

#### Output
* output `array`
  * items [LabTest_Public](#labtest_public)

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
  * age.value `integer`: age value
  * age.unit `string` (values: year, month): unit in which age value was provided

#### Output
* output [LabTest_Details](#labtest_details)

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
  * age.value `integer`: age value
  * age.unit `string` (values: year, month): unit in which age value was provided

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

### computeRationale
Returns rationale behind the question asked by the system.


```js
infermedica.computeRationale({
  "body": {
    "age": {},
    "sex": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [RationaleRequest](#rationalerequest)

#### Output
* output [RationaleResponse](#rationaleresponse)

### computeRedFlags
Suggests possible red flag symptoms based on provided patient information.


```js
infermedica.computeRedFlags({
  "body": {
    "age": {},
    "sex": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [DiagnosisRequest](#diagnosisrequest)
  * max_results `integer`: maximum number of results

#### Output
* output `array`
  * items [SuggestResult](#suggestresult)

### getAllRiskFactors
Returns a list of all available risk factors.


```js
infermedica.getAllRiskFactors({}, context)
```

#### Input
* input `object`
  * age.value `integer`: age value
  * age.unit `string` (values: year, month): unit in which age value was provided
  * enable_triage_5 `boolean`: enable 5-level triage values

#### Output
* output `array`
  * items [RiskFactor_Public](#riskfactor_public)

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
  * age.value `integer`: age value
  * age.unit `string` (values: year, month): unit in which age value was provided
  * enable_triage_5 `boolean`: enable 5-level triage values

#### Output
* output [RiskFactor_Details](#riskfactor_details)

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
  * age.value `integer`: age value
  * age.unit `string` (values: year, month): unit in which age value was provided
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
infermedica.getAllSymptoms({}, context)
```

#### Input
* input `object`
  * age.value `integer`: age value
  * age.unit `string` (values: year, month): unit in which age value was provided
  * enable_triage_5 `boolean`: enable 5-level triage values

#### Output
* output `array`
  * items [Symptom_Public](#symptom_public)

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
  * age.value `integer`: age value
  * age.unit `string` (values: year, month): unit in which age value was provided
  * enable_triage_5 `boolean`: enable 5-level triage values

#### Output
* output [Symptom_Details](#symptom_details)

### computeTriage
Estimates triage level based on provided patient information.


```js
infermedica.computeTriage({
  "body": {
    "age": {},
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

### Choice_Public
* Choice_Public `object`
  * id **required** `string` (values: present, absent, unknown)
  * label **required** `string`

### ConceptItemModel_Public
* ConceptItemModel_Public `object`
  * common_name `string`
  * id `string`
  * name `string`
  * type `string` (values: condition, symptom, risk_factor, lab_test)

### ConditionProbability_Public
* ConditionProbability_Public `object`
  * common_name `string`: condition common name
  * id **required** `string`: condition id
  * name **required** `string`: condition name
  * probability **required** `number`

### Condition_Details
* Condition_Details `object`
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
  * triage_level `string` (values: emergency_ambulance, emergency, consultation_24, consultation, self_care)

### Condition_Public
* Condition_Public `object`
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
  * triage_level `string` (values: emergency_ambulance, emergency, consultation_24, consultation, self_care)

### DiagnosisRequest
* DiagnosisRequest `object`
  * age **required** `object`
  * evaluated_at `string`: time when diagnosis was evaluated in ISO 8601 format
  * evidence `array`
    * items [Evidence](#evidence)
  * extras `object`
  * sex **required** `string` (values: male, female)

### DiagnosisResponse_Public
* DiagnosisResponse_Public `object`
  * conditions `array`
    * items [ConditionProbability_Public](#conditionprobability_public)
  * extras `object`
  * question [Question_Public](#question_public)
  * should_stop `boolean`

### Evidence
* Evidence `object`
  * choice_id **required** `string` (values: present, absent, unknown)
  * id **required** `string`: id of observation or condition
  * observed_at `string`: time when evidence was observed in ISO 8601 format
  * source `string` (values: initial, suggest, predefined, red_flags): Flag describing evidence origin

### ExplanationEvidence
* ExplanationEvidence `object`
  * common_name `string`: observation common name
  * id **required** `string`: observation id
  * name **required** `string`: observation name

### ExplanationRequest
* ExplanationRequest `object`
  * age **required** `object`
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

### Info_Public
* Info_Public `object`
  * api_version `string`: version of api release
  * conditions_count **required** `integer`
  * lab_tests_count **required** `integer`
  * risk_factors_count **required** `integer`
  * symptoms_count **required** `integer`
  * updated_at **required** `string`: time of last model update in ISO 8601 format

### LabTestResult_Details
* LabTestResult_Details `object`
  * id **required** `string`
  * type **required** `string` (values: very_low, low, normal, high, very_high, absent, present)

### LabTestResult_Public
* LabTestResult_Public `object`
  * id **required** `string`
  * type **required** `string` (values: very_low, low, normal, high, very_high, absent, present)

### LabTest_Details
* LabTest_Details `object`
  * category `string`
  * common_name `string`
  * id **required** `string`
  * name **required** `string`
  * results `array`
    * items [LabTestResult_Details](#labtestresult_details)

### LabTest_Public
* LabTest_Public `object`
  * category `string`
  * common_name `string`
  * id **required** `string`
  * name **required** `string`
  * results `array`
    * items [LabTestResult_Public](#labtestresult_public)

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
  * concept_types `array`: list of concept types that should be captured
    * items `string` (values: symptom, risk_factor)
  * context `array`: ordered list of ids of present symptoms that were already captured and can be used as context
    * items `string`
  * correct_spelling `boolean`: correct spelling of input text before proper analysis
  * include_tokens `boolean`: include tokenization details in output
  * text **required** `string`: user text to process

### ParseResponse
* ParseResponse `object`
  * mentions **required** `array`: list of recognized symptom or risk factor mentions
    * items [ObservationMention](#observationmention)
  * obvious **required** `boolean`: indicates that entire input text has been parsed successfully and unambiguously
  * tokens `array`
    * items `string`

### QuestionItem_Public
* QuestionItem_Public `object`
  * choices **required** `array`: list of available answer choices
    * items [Choice_Public](#choice_public)
  * id **required** `string`: observation id
  * name **required** `string`: name or alias of observation

### Question_Public
* Question_Public `object`
  * extras `object`: additional content, like images or HTML
  * items **required** `array`: one or more observations to evaluate
    * items [QuestionItem_Public](#questionitem_public)
  * text **required** `string`: question text
  * type `string` (values: single, group_single, group_multiple)

### RationaleParam
* RationaleParam `object`
  * common_name `string`: observation or condition common name
  * id **required** `string`: observation or condition id
  * name **required** `string`: observation or condition name

### RationaleRequest
* RationaleRequest `object`
  * age **required** `object`
  * evaluated_at `string`: time when diagnosis was evaluated in ISO 8601 format
  * evidence `array`
    * items [Evidence](#evidence)
  * extras `object`
  * sex **required** `string` (values: male, female)

### RationaleResponse
* RationaleResponse `object`
  * condition_params `array`: condition params
    * items [RationaleParam](#rationaleparam)
  * observation_params `array`: observation params
    * items [RationaleParam](#rationaleparam)
  * type **required** `string` (values: r0, r1, r2, r3, r4, r5, r6): type

### RiskFactor_Details
* RiskFactor_Details `object`
  * category `string`
  * common_name `string`
  * extras `object`: additional content, like custom properties or images
  * id **required** `string`
  * image_source `string`
  * image_url `string`
  * name **required** `string`
  * question **required** `string`: only available in object details, not in listing
  * sex_filter **required** `string` (values: both, male, female)

### RiskFactor_Public
* RiskFactor_Public `object`
  * category `string`
  * common_name `string`
  * extras `object`: additional content, like custom properties or images
  * id **required** `string`
  * image_source `string`
  * image_url `string`
  * name **required** `string`
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
  * age `object`
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

### Symptom_Details
* Symptom_Details `object`
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

### Symptom_Public
* Symptom_Public `object`
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
  * sex_filter **required** `string` (values: both, male, female)

### TriageResponse
* TriageResponse `object`
  * root_cause `string` (values: r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, r12)
  * serious `array`
    * items [SeriousObservation](#seriousobservation)
  * teleconsultation_applicable `boolean`
  * triage_level `string` (values: emergency_ambulance, emergency, consultation_24, consultation, self_care)


