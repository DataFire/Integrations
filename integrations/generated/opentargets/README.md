# @datafire/opentargets

Client library for Open Targets Platform

## Installation and Usage
```bash
npm install --save @datafire/opentargets
```
```js
let opentargets = require('@datafire/opentargets').create();

.then(data => {
  console.log(data);
});
```

## Description

### The Open Targets Platform REST API

The Open Targets Platform API ('Application Programming Interface') allows programmatic retrieval of the Open Targets Platform data via a set of [REST](https://en.wikipedia.org/wiki/Representational_state_transfer) services.

You can make calls to the latest version of our API using the base URL `https://platform-api.opentargets.io/v3/platform`. Please make sure you use `https` instead of the unencrypted `http` calls, which we do not accept.

We list below the methods available to query our data directly from the API, followed by an interactive interface that you can use to try out the parameters and execute the REST-API calls.

For every request you create, the interactive interface will display both a [curl](https://curl.haxx.se/) command and a request URL that you can use to ensure you get the expected response before using your application or workflow. 

Check our documentation for some [API tutorials](https://docs.targetvalidation.org/tutorials/api-tutorials) and [get in touch](mailto:support@targetvalidation.org) if you have any questions.

### Available Methods

The available methods can be grouped in three types:

* __public__ - Methods that serve the core set of our data. These are stable and we fully supported them.
* __private__ - Methods used by the web app to serve additional data not specific to our platform. These methods
may change without notice and should be used with caution.
* __utils__ - Methods to get statistics and technical data about our API.

### Supported formats

The methods above are all available via a `GET` request, and will serve outputs as `JSON`.

Alternative output formats, such `xml`, `csv` and `tab`, are also available for some of the methods. However alternative output formats are not supported in interactive interface below where the response will be always in `JSON.

If you have complex queries with large number of parameters, you should use a `POST` request instead of  `GET`. 
`POST` methods require a body encoded as `json`. When querying for a specific disease using the latest version of the API, your call would look like the example below:

```sh
curl -X POST -d '{"disease":["EFO_0000253"]}' --header 'Content-Type: application/json' https://platform-api.opentargets.io/v3/platform/public/evidence/filter
```
### How to interpret a response

Each HTTPS response will serve data in headers and body. The headers will give you details about your query, such as how long it took to run.

In the body of the response, you will find the data you have requested for in `JSON` format. The [jq](https://stedolan.github.io/jq/) program is a useful tool to parse the json response while on the command line.

```sh
curl https://platform-api.opentargets.io/v3/platform/public/association/filter\?target\=ENSG00000157764 | jq
```

We do not analyse the nature of any specific API queries except for the purposes of improving the performance of our API.
Read more in our [privacy section](https://www.targetvalidation.org/terms_of_use#privacy).

How can we make the Open Targets Platform API more useful to you? Would you like additional methods to be implemented?
Please [get in touch](mailto:support@targetvalidation.org) and send your suggestions.


## Actions

### getApiDocs
Access api docs as served by Redoc


```js
opentargets.getApiDocs(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getApiSwaggerUI
Interactive API docs using swagger-ui


```js
opentargets.getApiSwaggerUI(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getAutocomplete
Search for the closest term to autocomplete in the search box.



```js
opentargets.getAutocomplete({
  "q": ""
}, context)
```

#### Input
* input `object`
  * q **required** `string`: A full text query.
  * size `string`: Maximum amount of results to return. Defaults to 5.

#### Output
*Output schema unknown*

### postBestHitSearch
Fire the search method for multiple strings



```js
opentargets.postBestHitSearch({
  "body": ""
}, context)
```

#### Input
* input `object`
  * body **required** `string`

#### Output
*Output schema unknown*

### postDiseaseById
Get `disease` objects.



```js
opentargets.postDiseaseById({
  "body": ""
}, context)
```

#### Input
* input `object`
  * body **required** `string`

#### Output
*Output schema unknown*

### getDiseaseById
Get `disease` objects.



```js
opentargets.getDiseaseById({
  "disease": ""
}, context)
```

#### Input
* input `object`
  * disease **required** `string`: An EFO identifier.

#### Output
*Output schema unknown*

### getDrugByID
Get `drug` objects.



```js
opentargets.getDrugByID({
  "DRUG_ID": ""
}, context)
```

#### Input
* input `object`
  * DRUG_ID **required** `string`

#### Output
*Output schema unknown*

### getECObyID
Get `ECO` objects.



```js
opentargets.getECObyID({
  "ECO_ID": ""
}, context)
```

#### Input
* input `object`
  * ECO_ID **required** `string`: An [evidence code ontology](http://www.ebi.ac.uk/ols/v2/browse.do?ontName=ECO) ID.

#### Output
*Output schema unknown*

### postEnrichmentTarget
Returns an enrichment analysis for a list of targets passed in the body



```js
opentargets.postEnrichmentTarget({
  "body": ""
}, context)
```

#### Input
* input `object`
  * body **required** `string`

#### Output
*Output schema unknown*

### getQuickSearch
Get `search-result` objects. Enables search bar functionality.



```js
opentargets.getQuickSearch({
  "q": ""
}, context)
```

#### Input
* input `object`
  * q **required** `string`: A full text query.
  * size `string`: Maximum amount of results to return. Defaults to 5.

#### Output
*Output schema unknown*

### postRelation
Get `relation` objects.



```js
opentargets.postRelation({
  "body": ""
}, context)
```

#### Input
* input `object`
  * body **required** `string`

#### Output
*Output schema unknown*

### getRelationByEFOID
Get `relation` objects starting from diseases.



```js
opentargets.getRelationByEFOID({
  "disease": ""
}, context)
```

#### Input
* input `object`
  * disease **required** `string`: An EFO gene identifier.

#### Output
*Output schema unknown*

### getRelationByENSGID
Get `relation` objects starting from diseases.



```js
opentargets.getRelationByENSGID({
  "target": ""
}, context)
```

#### Input
* input `object`
  * target **required** `string`: An Ensembl gene identifier.

#### Output
*Output schema unknown*

### postTargetByENSGID
Get `target` objects. Used for the target profile page.



```js
opentargets.postTargetByENSGID({
  "body": ""
}, context)
```

#### Input
* input `object`
  * body **required** `string`

#### Output
*Output schema unknown*

### getTargetExpressionByENSGID
Get `gene-expression` objects.



```js
opentargets.getTargetExpressionByENSGID({
  "gene": ""
}, context)
```

#### Input
* input `object`
  * gene **required** `string`: An Ensembl gene identifier.

#### Output
*Output schema unknown*

### postTargetExpressionByENSGID
Get `gene-expression` objects.



```js
opentargets.postTargetExpressionByENSGID({
  "body": ""
}, context)
```

#### Input
* input `object`
  * body **required** `string`

#### Output
*Output schema unknown*

### getTargetByENSGID
Get `target` objects.



```js
opentargets.getTargetByENSGID({
  "target": ""
}, context)
```

#### Input
* input `object`
  * target **required** `string`: An Ensembl gene ID for the target of interest.

#### Output
*Output schema unknown*

### getAssociationById
Once we integrate all evidence connecting a target to a specific disease, we
 compute an association score by the means of an harmonic sum. This *association score* provides
 an indication of how strong the evidence behind each connection is and can be
 used to rank genes in order of likelihood as drug targets.
 The association ID is constructed by using the Ensembl ID of the gene and the
 EFO ID for the disease (e.g. ENSG00000073756-EFO_0003767).
 The method returns an association object, which contains the data and summary
 on each evidence type included in the calculation of the score, as well as the score itself.



```js
opentargets.getAssociationById({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: An association ID usually in the form of `TARGET_ID-DISEASE_ID`.

#### Output
*Output schema unknown*

### getAssociationFilter
More complex queries for associations scores and objects can be done using
this method, which allows to sort in different order, restrict to a specific class
of diseases or targets, as well as filtering results by score and associated pathways.



```js
opentargets.getAssociationFilter({}, context)
```

#### Input
* input `object`
  * target `string`: A target identifier listed as target.id.
  * disease `string`: An EFO code listed as disease.id.
  * therapeutic_area `string`: An EFO code of a therapeutic area.
  * datasource `string`: Data source to consider.
  * datatype `string`: Data type to consider.
  * pathway `string`: A Reactome pathway identifier (returning only those targets linked to the specified pathway).
  * target_class `string`: A ChEMBL target class identifier (returning only those targets belonging to the specified class).
  * uniprotkw `string`: A UniProt keyword (meaning all the targets linked to that keyword).
  * direct `boolean`: If `true`, it returns associations that have at least one direct evidence connecting the target and the disease. If `false` it only returns associations for which there is no direct evidence connecting the target and the disease, but only evidence connecting the target to a children of the disease in the EFO ontology.
  * datastructure `string`: Type of data structure to return. Can be 'full', 'simple', 'ids', or 'count'.
  * fields `string`: Fields you want to retrieve. This will get priority over the data structure requested.
  * facets `boolean`: Returns facets
  * scorevalue_min `number`: Filter by minimum score value. The default is 0, but using 0.2 is a good trade-off to filter lower quality data points.
  * scorevalue_max `number`: Filter by maximum score value.
  * scorevalue_types `string`: Score types to apply the score value min and max filters. The default is `overall`.
  * size `number`: Maximum amount of results to return. Defaults to 10, max is 10000.
  * from `number`: How many initial results should be skipped. Defaults to 0.
  * format `string`: Format to get the data back. Can be 'json', 'xml', 'tab' or 'csv'. **Note** that this option can only be used when calling the API directly and will not work in this page. The response here will always be JSON.
  * sort `string`: Sort by the given score type. Defaults to 'overall' and descending order. Use '~' prefix to do ascending
  * search `string`: Restrict the filtered results to those matching the passed string. The matching is done with a

#### Output
*Output schema unknown*

### postAssociationFilter
Complex queries and filters for association objects can also be submitted using a JSON
object and the equivalent POST method.



```js
opentargets.postAssociationFilter({
  "body": ""
}, context)
```

#### Input
* input `object`
  * body **required** `string`

#### Output
*Output schema unknown*

### getEvidenceById
We call **evidence** a unit of data that support a connection between a target and a disease.
The Open Targets Platform integrates multiple types of evidence including genetic associations,
somatic mutations, RNA expression and target-disease associations mined from the literature.
This method allows you to retrieve a single evidence item or a list of pieces of evidence by using their
targetvalidation.org ID.

Evidence IDs are unique within each data release (e.g. `8ed3d7568a8c6cac9c95cfb869bac762` for release 1.2).
You can obtain a list of evidence and their IDs from other API calls such as [/public/evidence/filter](#!/public/get_public_evidence_filter).

**Please note** that a specific evidence ID may change between data releases. We can not guarantee that a specific evidence ID will refer to the same piece of evidence connecting a target and its diseases.



```js
opentargets.getEvidenceById({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Internal unique ID of the evidence string to retrieve.

#### Output
*Output schema unknown*

### postEvidenceById
This is the POST version of [/public/evidence](#!/public/get_public_evidence).
It allows to query for a list of evidence strings encoded in a `json` object to be passed in the body.



```js
opentargets.postEvidenceById({
  "body": ""
}, context)
```

#### Input
* input `object`
  * body **required** `string`

#### Output
*Output schema unknown*

### getEvidenceFilter
The filter method allows to retrieve the specific data that supports a connection between targets and diseases.
Filters can be used to restrict the results by source and type of data,
or limit results to targets which are part of a particular pathway.
Minimum and maximum scores can be specified as well as the type of evidence linking target and disease.
**Note** that multiple genes and diseases can be specified in the same request.



```js
opentargets.getEvidenceFilter({}, context)
```

#### Input
* input `object`
  * target `string`: A target identifier listed as target.id.
  * disease `string`: An EFO code listed as disease.id.
  * data source `string`: Data source to consider.
  * datatype `string`: Data type to consider.
  * pathway `string`: A pathway identifier (meaning all the targets linked to that pathway).
  * uniprotkw `string`: A UniProt keyword (meaning all the targets linked to that keyword).
  * datastructure `string`: Type of data structure to return. Can be 'full', 'simple', 'ids', or 'count'.
  * fields `string`: The fields you want to retrieve. This will get priority over the data structure requested.
  * scorevalue_min `number`: Filter by minimum score value. The default is 0, but using 0.2 is a good trade-off to filter lower quality data points.
  * scorevalue_max `number`: Filter by maximum score value.
  * sort `string`: Sort by the given field. The default is 'scores.association_score' in descending order. Use '~' prefix to do ascending
  * size `number`: Maximum amount of results to return. Defaults to 10, max is 10000.
  * from `number`: How many initial results should be skipped. Defaults to 0.
  * format `string`: Format to get the data back. Can be 'json', 'xml', 'tab' or 'csv'. **Note** that this option can only be used when calling the API directly and will not work in this page. The response here will always be JSON.

#### Output
*Output schema unknown*

### postEvidenceFilter
POST version of [/public/evidence/filter](#!/public/get_public_evidence_filter).
Filters can be specified as part of a `json` object in the body, simplifying the submission of queries.



```js
opentargets.postEvidenceFilter({
  "body": ""
}, context)
```

#### Input
* input `object`
  * body **required** `string`

#### Output
*Output schema unknown*

### getSearch
This method allows you to look for gene or diseases of interest using a free text search,
replicating the functionality of the search box on our homepage. It should be used to identify
the best match for a disease or target of interest, rather than gathering a specific set of evidence.



```js
opentargets.getSearch({
  "q": ""
}, context)
```

#### Input
* input `object`
  * q **required** `string`: A full text query.
  * size `string`: Maximum amount of results to return. Defaults to 10, max is 10000.
  * from `string`: How many initial results should be skipped. Defaults to 0.
  * filter `string`: Restrict the search to the type requested. Eg. `target` or `disease`.

#### Output
*Output schema unknown*

### getDataMetrics
Returns the metrics about associations and evidences, divided by datasource, genes and so on.



```js
opentargets.getDataMetrics(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getPing
Check if the API is up



```js
opentargets.getPing(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getDataStats
Returns the number of associations and evidences, divided by datasource.



```js
opentargets.getDataStats(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getTherapeuticAreas
Returns the list of therapeutic areas for the current data release



```js
opentargets.getTherapeuticAreas(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getVersion
Returns current API version.



```js
opentargets.getVersion(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getSwagger
Get swagger.yaml specs for the API


```js
opentargets.getSwagger(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*



## Definitions

*This integration has no definitions*
