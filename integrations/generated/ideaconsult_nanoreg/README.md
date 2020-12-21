# @datafire/ideaconsult_nanoreg

Client library for eNanoMapper database

## Installation and Usage
```bash
npm install --save @datafire/ideaconsult_nanoreg
```
```js
let ideaconsult_nanoreg = require('@datafire/ideaconsult_nanoreg').create();

.then(data => {
  console.log(data);
});
```

## Description

AMBIT REST web services [eNanoMapper profile] with free text & faceted search

## Actions

### getInvestigationResults
Multiple studies in tabular form


```js
ideaconsult_nanoreg.getInvestigationResults({
  "db": "",
  "type": "",
  "search": ""
}, context)
```

#### Input
* input `object`
  * db **required** `string` (values: calibrate, enanomapper, enpra, marina, nanogenotox, nanoinformatix, nanoreg1, nanoreg2, nanotest): Database ID
  * type **required** `string` (values: byinvestigation, byassay, bysubstance, byprovider, bycitation, bystudytype, bystructure_inchikey, bystructure_smiles, bystructure_name, bysubstance_name, bysubstance_type): query type
  * search **required** `string`: Search parameter, UUID of the investigation or a substance
  * inchikey `string`: Search parameter, InChI key(s) of the substance component(s), comma delimited
  * id `string`: Search parameter, chemical structure or substance identifier(s), comma delimited
  * page `integer`: Starting page
  * pagesize `integer`: Page size

#### Output
* output [Investigation](#investigation)

### searchByIdentifier
Returns compounds found


```js
ideaconsult_nanoreg.searchByIdentifier({
  "db": "",
  "term": "",
  "representation": ""
}, context)
```

#### Input
* input `object`
  * db **required** `string` (values: calibrate, enanomapper, enpra, marina, nanogenotox, nanoinformatix, nanoreg1, nanoreg2, nanotest): Database ID
  * term **required** `string` (values: search, url, inchikey): search term type
  * representation **required** `string` (values: all, smiles, reach, stdinchi, stdinchikey, names, iupac_name, synonym, cas, einecs)
  * search `string`: Compound identifier (SMILES, InChI, name, registry identifiers)
  * b64search `string`: Base64 encoded mol file; if included, will be used instead of the 'search' parameter
  * casesens `boolean`: Case sensitive search if yes
  * bundle_uri `string`: Bundle URI
  * sameas `string`: Ontology URI to define groups of columns
  * page `integer`: Starting page
  * pagesize `integer`: Page size

#### Output
* output [Dataset](#dataset)

### searchBySimilarity
Returns similar compounds


```js
ideaconsult_nanoreg.searchBySimilarity({
  "db": ""
}, context)
```

#### Input
* input `object`
  * db **required** `string` (values: calibrate, enanomapper, enpra, marina, nanogenotox, nanoinformatix, nanoreg1, nanoreg2, nanotest): Database ID
  * search `string`: Compound identifier (SMILES, InChI, name, registry identifiers)
  * b64search `string`: Base64 encoded mol file; if included, will be used instead of the 'search' parameter
  * type `string` (values: smiles, mol, url): Defines the expected content of the search parameter
  * threshold `number`: Similarity threshold
  * dataset_uri `string`: Restrict the search within the AMBIT dataset specified with the URI
  * filterBySubstance `boolean`: Restrict the search within the set of structures with assigned substances
  * bundle_uri `string`: If the structure is used in the specified bundle URI, the selection tag will be returned
  * sameas `string`: Ontology URI to define groups of columns
  * mol `boolean`: Only for application/json; to include mol as JSON field
  * page `integer`: Starting page
  * pagesize `integer`: Page size

#### Output
* output [Dataset](#dataset)

### searchBySmarts
Returns compounds with the specified substructure


```js
ideaconsult_nanoreg.searchBySmarts({
  "db": ""
}, context)
```

#### Input
* input `object`
  * db **required** `string` (values: calibrate, enanomapper, enpra, marina, nanogenotox, nanoinformatix, nanoreg1, nanoreg2, nanotest): Database ID
  * search `string`: Compound identifier (SMILES, InChI, name, registry identifiers)
  * b64search `string`: Base64 encoded mol file; if included, will be used instead of the 'search' parameter
  * type `string` (values: smiles, mol, url): Defines the expected content of the search parameter
  * dataset_uri `string`: Restrict the search within the AMBIT dataset specified with the URI
  * filterBySubstance `boolean`: Restrict the search within the set of structures with assigned substances
  * bundle_uri `string`: If the structure is used in the specified bundle URI, the selection tag will be returned
  * sameas `string`: Ontology URI to define groups of columns
  * mol `boolean`: Only for application/json; to include mol as JSON field
  * page `integer`: Starting page
  * pagesize `integer`: Page size

#### Output
* output [Dataset](#dataset)

### getEndpointSummary
Returns endpoint summary


```js
ideaconsult_nanoreg.getEndpointSummary({
  "db": ""
}, context)
```

#### Input
* input `object`
  * db **required** `string` (values: calibrate, enanomapper, enpra, marina, nanogenotox, nanoinformatix, nanoreg1, nanoreg2, nanotest): Database ID
  * top `string` (values: P-CHEM, ECOTOX, ENV FATE, TOX, EXPOSURE): Top endpoint category
  * category `string`: Endpoint category (The value in the protocol.category.code field)

#### Output
* output [Facet](#facet)

### getSubstances
Returns a list of substances, according to the search criteria


```js
ideaconsult_nanoreg.getSubstances({
  "db": ""
}, context)
```

#### Input
* input `object`
  * db **required** `string` (values: calibrate, enanomapper, enpra, marina, nanogenotox, nanoinformatix, nanoreg1, nanoreg2, nanotest): Database ID
  * search `string`: Search parameter
  * type `string` (values: substancetype, name, like, regexp, uuif, CompTox, DOI, reliability, purposeFlag, studyResultType, isRobustStudy, citation, citationowner, topcategory, endpointcategory, params, owner_name, owner_uuid, related, reference, facet)
  * compound_uri `string`: If type=related finds all substances containing this compound; if typ =reference - finds all substances with this compound as reference structure
  * bundle_uri `string`: Retrieves if selected in this bundle
  * addDummySubstance `boolean`: Adds a compound record as substance in JSON; only if type=related
  * studysummary `boolean`: If true retrieves study summary for each substance
  * page `integer`: Starting page
  * pagesize `integer`: Page size

#### Output
* output [Substance](#substance)

### getSubstanceByUUID
Returns substance representation


```js
ideaconsult_nanoreg.getSubstanceByUUID({
  "db": "",
  "uuid": ""
}, context)
```

#### Input
* input `object`
  * db **required** `string` (values: calibrate, enanomapper, enpra, marina, nanogenotox, nanoinformatix, nanoreg1, nanoreg2, nanotest): Database ID
  * uuid **required** `string`: Substance UUID
  * property_uris[] `string`: Property URIs
  * page `integer`: Starting page
  * pagesize `integer`: Page size

#### Output
* output [Substance](#substance)

### getSubstanceComposition
Returns substance composition


```js
ideaconsult_nanoreg.getSubstanceComposition({
  "db": "",
  "uuid": ""
}, context)
```

#### Input
* input `object`
  * db **required** `string` (values: calibrate, enanomapper, enpra, marina, nanogenotox, nanoinformatix, nanoreg1, nanoreg2, nanotest): Database ID
  * uuid **required** `string`: Substance UUID
  * all `boolean`: true (Show all compositions) false (do not show hidden compositions)
  * page `integer`: Starting page
  * pagesize `integer`: Page size

#### Output
* output [SubstanceComposition](#substancecomposition)

### getSubstanceStructures
Returns substance composition


```js
ideaconsult_nanoreg.getSubstanceStructures({
  "db": "",
  "uuid": ""
}, context)
```

#### Input
* input `object`
  * db **required** `string` (values: calibrate, enanomapper, enpra, marina, nanogenotox, nanoinformatix, nanoreg1, nanoreg2, nanotest): Database ID
  * uuid **required** `string`: Substance UUID
  * page `integer`: Starting page
  * pagesize `integer`: Page size

#### Output
* output [Dataset](#dataset)

### getSubstanceStudy
Returns substance study representation


```js
ideaconsult_nanoreg.getSubstanceStudy({
  "db": "",
  "uuid": ""
}, context)
```

#### Input
* input `object`
  * db **required** `string` (values: calibrate, enanomapper, enpra, marina, nanogenotox, nanoinformatix, nanoreg1, nanoreg2, nanotest): Database ID
  * uuid **required** `string`: Substance UUID
  * top `string` (values: P-CHEM, ECOTOX, ENV FATE, TOX, EXPOSURE): Top endpoint category
  * category `string`: Endpoint category (The value in the protocol.category.code field)
  * property_uri `string`: Property URI https://data.enanomapper.net/property/{UUID} , see Property service
  * property `string`: Property UUID
  * investigation_uuid `string`: Investigation UUID, a code to link different studies
  * page `integer`: Starting page
  * pagesize `integer`: Page size

#### Output
* output [SubstanceStudy](#substancestudy)

### getSubstanceStudySummary
Study summary


```js
ideaconsult_nanoreg.getSubstanceStudySummary({
  "db": "",
  "uuid": ""
}, context)
```

#### Input
* input `object`
  * db **required** `string` (values: calibrate, enanomapper, enpra, marina, nanogenotox, nanoinformatix, nanoreg1, nanoreg2, nanotest): Database ID
  * uuid **required** `string`: Substance UUID
  * top `string` (values: P-CHEM, ECOTOX, ENV FATE, TOX, EXPOSURE): Top endpoint category
  * category `string`: Endpoint category (The value in the protocol.category.code field)
  * property_uri `string`: Property URI https://data.enanomapper.net/property/{UUID} , see Property service
  * property `string`: Property UUID, see Property service
  * result `boolean`: If true will group by topcategory,endpointcategory,interpretation result
  * page `integer`: Starting page
  * pagesize `integer`: Page size

#### Output
* output [SubstanceStudySummary](#substancestudysummary)

### solrquery_get
GET is simpler to use, but imposes restrictions on the complexity and the lenght of the parameters.


```js
ideaconsult_nanoreg.solrquery_get({}, context)
```

#### Input
* input `object`
  * q `string`: The query
  * start `integer`: Starting page
  * rows `integer`: Page size
  * wt `string` (values: json, xml): Response format

#### Output
* output [SolrResponse](#solrresponse)

### solrquery_post
POST is more complex to use, but also allows for much for complex and lengthy queries.


```js
ideaconsult_nanoreg.solrquery_post({}, context)
```

#### Input
* input `object`
  * wt `string` (values: json, xml): Response format
  * body `object`
    * facet `object`
    * params `object`
      * fl `array`
        * items `string`
      * rows `integer`

#### Output
* output [SolrResponse](#solrresponse)



## Definitions

### Dataset
* Dataset `object`
  * dataEntry `object`
  * feature `object`
  * model_uri `string`
  * query `object`

### Facet
* Facet `object`
  * facet `object`

### Investigation
* Investigation `object`
  * _childDocuments_ `object`
  * assay `string`
  * document_uuid `string`
  * effectendpoint `string`
  * endpoint `string`
  * endpointcategory `string`
  * err `number`
  * errQualifier `string`
  * guidance `string`
  * investigation `string`
  * loQualifier `string`
  * loValue `number`
  * name `string`
  * owner_name `string`
  * publicname `string`
  * reference `string`
  * reference_owner `string`
  * reference_year `string`
  * resulttype `string`
  * s_uuid `string`
  * studyResultType `string`
  * substanceType `string`
  * textValue `string`
  * topcategory `string`
  * type_s `string`
  * unit `string`
  * upQualifier `string`
  * upValue `number`
  * updated `string`

### SolrQuery
* SolrQuery `object`
  * facet `string`
  * filter `string`
  * query `string`
  * rows `integer`
  * sort `boolean`
  * start `integer`

### SolrResponse
* SolrResponse `object`
  * response `object`
    * docs `array`
      * items `object`
    * maxScore `number`
    * numFound `integer`
    * start `integer`
  * responseHeader `object`
    * QTime `integer`
    * params `object`
    * status `integer`
    * zkConnected `boolean`

### Substance
* Substance `object`
  * substance `object`

### SubstanceComposition
* SubstanceComposition `object`
  * composition `object`
  * feature `object`

### SubstanceStudy
* SubstanceStudy `object`
  * study `object`

### SubstanceStudySummary
* SubstanceStudySummary `object`
  * facet `object`


