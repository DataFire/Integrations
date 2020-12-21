# @datafire/opentrials_local

Client library for OpenTrials API

## Installation and Usage
```bash
npm install --save @datafire/opentrials_local
```
```js
let opentrials_local = require('@datafire/opentrials_local').create();

.then(data => {
  console.log(data);
});
```

## Description



## Actions

### getCondition
Returns condition details


```js
opentrials_local.getCondition({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: ID of the condition

#### Output
* output [Condition](#condition)

### listDocumentCategories
Returns document categories


```js
opentrials_local.listDocumentCategories(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [DocumentCategoryList](#documentcategorylist)

### listDocuments
Returns documents


```js
opentrials_local.listDocuments({}, context)
```

#### Input
* input `object`
  * page `integer`: The page number
  * per_page `integer`: Number of items per page

#### Output
* output [DocumentList](#documentlist)

### getDocument
Returns details of a document


```js
opentrials_local.getDocument({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: ID of the document

#### Output
* output [Document](#document)

### listFDAApplications
Returns FDA applications


```js
opentrials_local.listFDAApplications({}, context)
```

#### Input
* input `object`
  * page `integer`: The page number
  * per_page `integer`: Number of items per page

#### Output
* output [FDAApplicationList](#fdaapplicationlist)

### getFDAApplication
Returns an FDA application details


```js
opentrials_local.getFDAApplication({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: ID of the FDA application

#### Output
* output [FDAApplication](#fdaapplication)

### getIntervention
Returns intervention details


```js
opentrials_local.getIntervention({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: ID of the intervention

#### Output
* output [Intervention](#intervention)

### getOrganisation
Returns organisation details


```js
opentrials_local.getOrganisation({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: ID of the organisation

#### Output
* output [Organisation](#organisation)

### getPerson
Returns person details


```js
opentrials_local.getPerson({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: ID of the person

#### Output
* output [Person](#person)

### getPublication
Returns publication details


```js
opentrials_local.getPublication({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: ID of the publication

#### Output
* output [Publication](#publication)

### searchTrials
Returns trials based on a search query. By default, it'll search in all of a trial's attributes.
- `q` is a [ElasticSearch query string](https://www.elastic.co/guide/en/elasticsearch/reference/2.3/query-dsl-query-string-query.html#query-string-syntax) (e.g. `public_title:(depressive OR depression)`)
- `page` can take a value between `1` and `100`
- `per_page` can take a value between `10` and `100`


```js
opentrials_local.searchTrials({}, context)
```

#### Input
* input `object`
  * q `string`: The search query (follows the [ElasticSearch Query String](https://www.elastic.co/guide/en/elasticsearch/reference/2.3/query-dsl-query-string-query.html#query-string-syntax) syntax)
  * page `integer`: The page number
  * per_page `integer`: Number of items per page

#### Output
* output [TrialSearchResults](#trialsearchresults)

### autocomplete
Autocomplete search feature for supported database entities (`location`). It has the same options as a regular `search` operation, with an extra **required** `in` parameter indicating the entity type to search.


```js
opentrials_local.autocomplete({
  "in": ""
}, context)
```

#### Input
* input `object`
  * in **required** `string` (values: location): The entity to search for
  * q `string`: The search query
  * page `integer`: The page number
  * per_page `integer`: Number of items per page

#### Output
* output [AutocompleteResults](#autocompleteresults)

### searchFDADocuments
Search the FDA documents


```js
opentrials_local.searchFDADocuments({}, context)
```

#### Input
* input `object`
  * q `string`: The search query (follows the [ElasticSearch Query String](https://www.elastic.co/guide/en/elasticsearch/reference/2.3/query-dsl-query-string-query.html#query-string-syntax) syntax)
  * text `string`: Search query on the documents file's text (follows the [ElasticSearch Simple Query String](https://www.elastic.co/guide/en/elasticsearch/reference/2.3/query-dsl-simple-query-string-query.html#_simple_query_string_syntax) syntax)
  * page `integer`: The page number
  * per_page `integer`: Number of items per page

#### Output
* output [FDADocumentSearchResults](#fdadocumentsearchresults)

### list
Returns list of sources


```js
opentrials_local.list(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [SourceList](#sourcelist)

### getTrial
Returns a trial's details and related entities (e.g. `conditions`).


```js
opentrials_local.getTrial({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: ID of the trial

#### Output
* output [Trial](#trial)

### getRecords
Returns a trial's raw records from its sources


```js
opentrials_local.getRecords({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: ID of the trial

#### Output
* output [RecordList](#recordlist)

### getRecord
Returns a trial's raw record from its sources


```js
opentrials_local.getRecord({
  "trialId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * trialId **required** `string`: ID of the trial
  * id **required** `string`: ID of the trial's record

#### Output
* output [Record](#record)



## Definitions

### AutocompleteResult
* AutocompleteResult `object`
  * id **required** `string`
  * name **required** `string`

### AutocompleteResults
* AutocompleteResults `object`
  * items **required** `array`
    * items [AutocompleteResult](#autocompleteresult)
  * total_count **required** `integer`

### Condition
* Condition `object`
  * id **required** `string`: ID of the condition
  * name **required** `string`: Name of the condition
  * url **required** `string`: OpenTrials API URL of the condition

### Discrepancies
* Discrepancies `object`: Object listing the Trial's discrepant fields
  * gender `array`
    * items [DiscrepantFieldString](#discrepantfieldstring)
  * has_published_results `array`
    * items [DiscrepantFieldBoolean](#discrepantfieldboolean)
  * recruitment_status `array`
    * items [DiscrepantFieldString](#discrepantfieldstring)
  * status `array`
    * items [DiscrepantFieldString](#discrepantfieldstring)
  * target_sample_size `array`
    * items [DiscrepantFieldInteger](#discrepantfieldinteger)

### DiscrepancyFieldBase
* DiscrepancyFieldBase `object`
  * record_id **required** `string`
  * source_name **required** `string`

### DiscrepantFieldBoolean
* DiscrepantFieldBoolean `object`
  * record_id **required** `string`
  * source_name **required** `string`
  * value `boolean`

### DiscrepantFieldInteger
* DiscrepantFieldInteger `object`
  * record_id **required** `string`
  * source_name **required** `string`
  * value `integer`

### DiscrepantFieldString
* DiscrepantFieldString `object`
  * record_id **required** `string`
  * source_name **required** `string`
  * value `string`

### Document
* Document `object`
  * document_category **required** [DocumentCategory](#documentcategory)
  * fda_application [FDAApplication](#fdaapplication)
  * file [File](#file)
  * id **required** `string`: ID of the document
  * name **required** `string`
  * source [Source](#source)
  * source_url `string`: URL of origin for this document
  * trials `array`
    * items [TrialSummary](#trialsummary)
  * url **required** `string`: OpenTrials API URL of the document

### DocumentCategory
* DocumentCategory `object`
  * group `string`: Name of document category
  * id **required** `integer`
  * name **required** `string`: Name of document sub-category

### DocumentCategoryList
* DocumentCategoryList `object`
  * items **required** `array`
    * items [DocumentCategory](#documentcategory)
  * total_count **required** `integer`

### DocumentList
* DocumentList `object`
  * items **required** `array`
    * items [DocumentSummary](#documentsummary)
  * total_count **required** `integer`

### DocumentSummary
* DocumentSummary `object`
  * document_category **required** [DocumentCategory](#documentcategory)
  * fda_application [FDAApplication](#fdaapplication)
  * file [FileSummary](#filesummary)
  * id **required** `string`
  * name **required** `string`
  * source_id `string`: ID of the document's source
  * source_url `string`: URL of origin for this document
  * trials `array`
    * items [TrialSummary](#trialsummary)
  * url **required** `string`: OpenTrials API URL of the document

### ErrorResponse
* ErrorResponse `object`
  * message **required** `string`

### FDAApplication
* FDAApplication `object`
  * active_ingredients `string`: Active ingredients contained in the drug
  * drug_name `string`: Name of the drug
  * fda_approvals `array`: Associated FDA approvals
    * items [FDAApproval](#fdaapproval)
  * id **required** `string`: FDA application ID
  * organisation [Organisation](#organisation)
  * type `string`: The FDA application type (e.g. "NDA", "ANDA", etc.)
  * url **required** `string`: OpenTrials API URL for this FDA application

### FDAApplicationList
* FDAApplicationList `object`
  * items **required** `array`
    * items [FDAApplication](#fdaapplication)
  * total_count **required** `integer`

### FDAApproval
* FDAApproval `object`
  * action_date **required** `string`
  * fda_application [FDAApplication](#fdaapplication)
  * id **required** `string`: FDA approval ID
  * notes `string`: Additional information about the FDA approval
  * supplement_number **required** `integer`
  * type **required** `string`: Type of FDA approval

### FDADocumentSearchResult
* FDADocumentSearchResult
  * document_category **required** [DocumentCategory](#documentcategory)
  * fda_application [FDAApplication](#fdaapplication)
  * file [FileSummary](#filesummary)
  * id **required** `string`
  * name **required** `string`
  * source_id `string`: ID of the document's source
  * source_url `string`: URL of origin for this document
  * trials `array`
    * items [TrialSummary](#trialsummary)
  * url **required** `string`: OpenTrials API URL of the document
  * file [File](#file)

### FDADocumentSearchResults
* FDADocumentSearchResults `object`
  * items **required** `array`
    * items [FDADocumentSearchResult](#fdadocumentsearchresult)
  * total_count **required** `integer`

### File
* File `object`
  * documentcloud_id `string`
  * id `string`: ID of the file
  * sha1 `string`
  * source_url `string`: URL of origin for this file
  * pages `array`: Array with text of each of the file's pages
    * items `object`
      * num **required** `integer`: Page number
      * text **required** `string`

### FileSummary
* FileSummary `object`
  * documentcloud_id `string`
  * id `string`: ID of the file
  * sha1 `string`
  * source_url `string`: URL of origin for this file

### Intervention
* Intervention `object`
  * id **required** `string`: ID of the intervention
  * name **required** `string`: Name of the intervention
  * type `string` (values: drug, procedure, other): Type of the intervention (drug / other)
  * url **required** `string`: OpenTrials API URL of the intervention

### Location
* Location `object`
  * id **required** `string`: ID of the location
  * name **required** `string`: Name of the location
  * type `string` (values: country, city, other): Type of the location (country / city / other)

### Organisation
* Organisation `object`
  * id **required** `string`: ID of the organisation
  * name **required** `string`: Name of the organisation
  * url **required** `string`: OpenTrials API URL of the organisation

### Person
* Person `object`
  * id **required** `string`: ID of the person
  * name **required** `string`: Name of the person
  * url **required** `string`: OpenTrials API URL of the person

### Publication
* Publication `object`
  * abstract **required** `string`
  * authors `array`
    * items `string`
  * created_at `string`
  * date `string`
  * id **required** `string`: ID of the publication
  * journal `string`
  * slug `string`
  * source **required** [Source](#source)
  * source_url **required** `string`
  * title **required** `string`
  * updated_at `string`
  * url **required** `string`

### PublicationSummary
* PublicationSummary `object`
  * id **required** `string`
  * source_id **required** `string`
  * source_url **required** `string`
  * title **required** `string`
  * url **required** `string`

### Record
* Record `object`
  * created_at **required** `string`: Date when the record was created
  * id **required** `string`: ID of the record
  * identifiers `object`: Object that maps the trial's sources ids with its identifiers.
  * is_primary `boolean`: Is this record the primary source of data for its trial
  * last_verification_date `string`: Date when the record's data was last verified by provider
  * public_title **required** `string`: Title of the record
  * recruitment_status `string` (values: recruiting, not_recruiting, unknown, other): Trial's recruitment status (e.g. recruiting, unknown etc.)
  * source **required** [Source](#source)
  * source_id `string`: ID of the record's source
  * source_url **required** `string`: URL of the record's source (where it was collected from)
  * status `string` (values: ongoing, withdrawn, suspended, terminated, complete, unknown, other): Trial's status (e.g. ongoing, withdrawn, complete etc.)
  * trial_id **required** `string`: ID of the trial referenced in the record
  * trial_url **required** `string`: OpenTrials API URL of the trial referenced in the record
  * updated_at **required** `string`: Date when the record was updated
  * url **required** `string`: OpenTrials API URL of the record

### RecordList
* RecordList `array`
  * items [Record](#record)

### RecordSummary
* RecordSummary `object`
  * id **required** `string`
  * is_primary `boolean`
  * last_verification_date `string`
  * source_id **required** `string`
  * url **required** `string`

### RiskOfBias
* RiskOfBias `object`
  * id **required** `string`
  * risk_of_bias_criteria `array`
    * items [RiskOfBiasCriteria](#riskofbiascriteria)
  * source_id **required** `string`
  * source_url **required** `string`
  * study_id **required** `string`

### RiskOfBiasCriteria
* RiskOfBiasCriteria `object`
  * id **required** `string`
  * name **required** `string`
  * value **required** `string` (values: yes, no, unknown)

### Source
* Source `object`
  * id **required** `string`
  * name **required** `string`
  * source_url `string`: URL to source's website
  * terms_and_conditions_url `string`
  * type `string` (values: register, journal, other)

### SourceList
* SourceList `array`
  * items [Source](#source)

### Trial
* Trial `object`
  * age_range `object`
    * max_age `string`: Maximum participant age (e.g. "12 Years", "1 Month", "15 Days"). If unknown, it's `undefined`. If no limit, it's "any". If not applicable, it's "N/A".
    * min_age `string`: Minimum participant age (e.g. "12 Years", "1 Month", "15 Days"). If unknown, it's `undefined`. If no limit, it's "any". If not applicable, it's "N/A".
  * brief_summary `string`: Summary of the trial
  * completion_date `string`: Date the trial was completed
  * conditions `array`: Conditions the trial refers to
    * items [Condition](#condition)
  * discrepancies `object`: Discrepancies in trial's details between different sources
    * items [Discrepancies](#discrepancies)
  * documents `array`: Documents related to the trial
    * items [DocumentSummary](#documentsummary)
  * gender `string` (values: both, male, female): Gender of the subjects of the trial
  * has_published_results `boolean`: Trial has its results published (true/false)
  * id **required** `string`: ID of the trial
  * identifiers `object`: Object that maps the trial's sources ids with its identifiers.
  * interventions **required** `array`: Interventions related to the trial
    * items [Intervention](#intervention)
  * locations **required** `array`: Locations related to the trial
    * items [TrialLocation](#triallocation)
  * organisations **required** `array`: Organisations related to the trial
    * items [TrialOrganisation](#trialorganisation)
  * persons **required** `array`: People related to the trial
    * items [TrialPerson](#trialperson)
  * public_title **required** `string`: Title of the trial
  * publications **required** `array`: Publications referring the trial
    * items [PublicationSummary](#publicationsummary)
  * records **required** `array`: (published) records of the trial
    * items [RecordSummary](#recordsummary)
  * recruitment_status `string` (values: recruiting, not_recruiting, unknown, other): Recruitment status of the trial
  * registration_date `string`: Date the trial was registered
  * results_exemption_date `string`: Date when a certification of exemption has been filed for the trial
  * risks_of_bias **required** `array`
    * items [RiskOfBias](#riskofbias)
  * source_id `string`: ID of the trial's source
  * sources **required** `object`
    * items [Source](#source)
  * status `string` (values: ongoing, withdrawn, suspended, terminated, complete, unknown, other): Completion status of the trial
  * study_phase `array`: Phases of the study (e.g. `["Phase 2"]` or `["Phase 1", "Phase 2"]`)
    * items `string`
  * target_sample_size `integer`: Target sample size for the trial
  * url **required** `string`: Source URL (where the trial was collected from)

### TrialLocation
* TrialLocation `object`: Location of a trial
  * id **required** `string`: ID of the location
  * name **required** `string`: Name of the location
  * type `string` (values: country, city, other): Type of the location (country / city / other)
  * role `string` (values: recruitment_countries, other)

### TrialOrganisation
* TrialOrganisation `object`
  * id **required** `string`: ID of the organisation
  * name **required** `string`: Name of the organisation
  * url **required** `string`: OpenTrials API URL of the organisation
  * role `string` (values: primary_sponsor, sponsor, funder, other)

### TrialPerson
* TrialPerson `object`: People related to a trial
  * id **required** `string`: ID of the person
  * name **required** `string`: Name of the person
  * url **required** `string`: OpenTrials API URL of the person
  * role `string` (values: principal_investigator, public_queries, scientific_queries, other)

### TrialSearchResults
* TrialSearchResults `object`
  * items **required** `array`
    * items [Trial](#trial)
  * total_count **required** `integer`

### TrialSummary
* TrialSummary `object`
  * id **required** `string`: ID of the trial
  * public_title **required** `string`: Title of the record
  * url **required** `string`: OpenTrials API URL for this trial


