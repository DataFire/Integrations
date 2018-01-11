# @datafire/mcw_edu

Client library for Rat Genome Database

## Installation and Usage
```bash
npm install --save @datafire/mcw_edu
```
```js
let mcw_edu = require('@datafire/mcw_edu').create();

mcw_edu.getTermAccIdsUsingGET({}).then(data => {
  console.log(data);
})
```

## Description

The RGD REST API provides programmatic access to information and annotation stored in Rat Genome Database

## Actions

### getTermAccIdsUsingGET
Returns a list ontology term accession IDs annotated to an rgd object


```js
mcw_edu.getTermAccIdsUsingGET({
  "rgdId": 0
}, context)
```

#### Input
* input `object`
  * rgdId **required** `integer`: RGD ID

#### Output
* output `array`
  * items [MapPair](#mappair)

### getAnnotationCountByAccIdUsingGET
Returns annotation count for ontology accession ID


```js
mcw_edu.getAnnotationCountByAccIdUsingGET({
  "accId": "",
  "includeChildren": true
}, context)
```

#### Input
* input `object`
  * accId **required** `string`: Ontology term accession ID
  * includeChildren **required** `boolean`: true: return annotations for the term and children, false: return annotations for the term only 

#### Output
* output `integer`

### getAnnotationCountByAccIdAndSpeciesUsingGET
Returns annotation count for ontology accession ID and speicies


```js
mcw_edu.getAnnotationCountByAccIdAndSpeciesUsingGET({
  "accId": "",
  "speciesTypeKey": 0,
  "includeChildren": true
}, context)
```

#### Input
* input `object`
  * accId **required** `string`: Ontology term accession ID
  * speciesTypeKey **required** `integer`: A list of species type keys can be found using the lookup service
  * includeChildren **required** `boolean`: true: return annotations for the term and children, false: return annotations for the term only 

#### Output
* output `integer`

### getAnnotationCountByAccIdAndObjectTypeUsingGET
Returns annotation count for ontology accession ID and object type


```js
mcw_edu.getAnnotationCountByAccIdAndObjectTypeUsingGET({
  "accId": "",
  "speciesTypeKey": 0,
  "includeChildren": true,
  "objectType": 0
}, context)
```

#### Input
* input `object`
  * accId **required** `string`: Ontology term accession ID
  * speciesTypeKey **required** `integer`: A list of species type keys can be found using the lookup service
  * includeChildren **required** `boolean`: true: return annotations for the term and children, false: return annotations for the term only 
  * objectType **required** `integer`: A list of object types can be found using the lookup service

#### Output
* output `integer`

### getAnnotsByRefrerenceUsingGET
Returns a list of annotations for a reference


```js
mcw_edu.getAnnotsByRefrerenceUsingGET({
  "refRgdId": 0
}, context)
```

#### Input
* input `object`
  * refRgdId **required** `integer`: Reference RGD ID

#### Output
* output `array`
  * items [Annotation](#annotation)

### getAnnotationsByRgdIdUsingGET
Returns a list of annotations by RGD ID


```js
mcw_edu.getAnnotationsByRgdIdUsingGET({
  "rgdId": 0
}, context)
```

#### Input
* input `object`
  * rgdId **required** `integer`: RGD ID

#### Output
* output `array`
  * items [Annotation](#annotation)

### getAnnotationsByRgdIdAndOntologyUsingGET
Returns a list of annotations by RGD ID and ontology prefix


```js
mcw_edu.getAnnotationsByRgdIdAndOntologyUsingGET({
  "rgdId": 0,
  "ontologyPrefix": ""
}, context)
```

#### Input
* input `object`
  * rgdId **required** `integer`: RGD ID
  * ontologyPrefix **required** `string`: Ontology Prefix.  The prefix can be found left of the semicolon in an ontology term accession ID.  As an example, term accession PW:0000034 has the ontology prefix PW

#### Output
* output `array`
  * items [Annotation](#annotation)

### getAnnotationsByAccIdAndRgdIdUsingGET
Returns a list of annotations by RGD ID and ontology term accession ID


```js
mcw_edu.getAnnotationsByAccIdAndRgdIdUsingGET({
  "accId": "",
  "rgdId": 0
}, context)
```

#### Input
* input `object`
  * accId **required** `string`: Ontology Term Accession ID
  * rgdId **required** `integer`: RGD ID

#### Output
* output `array`
  * items [Annotation](#annotation)

### getAnnotationsUsingGET
Returns a list annotations for an ontology term or a term and it's children


```js
mcw_edu.getAnnotationsUsingGET({
  "accId": "",
  "speciesTypeKey": 0,
  "includeChildren": true
}, context)
```

#### Input
* input `object`
  * accId **required** `string`: Ontology term accession ID
  * speciesTypeKey **required** `integer`: A list of species type keys can be found using the lookup service
  * includeChildren **required** `boolean`: true: return annotations for the term and children, false: return annotations for the term only 

#### Output
* output `array`
  * items [Annotation](#annotation)

### getGenesByAffyIdUsingGET
Return a list of genes for an affymetrix ID


```js
mcw_edu.getGenesByAffyIdUsingGET({
  "affyId": "",
  "speciesTypeKey": 0
}, context)
```

#### Input
* input `object`
  * affyId **required** `string`: Affymetrix ID
  * speciesTypeKey **required** `integer`: A list of RGD species type keys can be found in the lookup service

#### Output
* output `array`
  * items [Gene](#gene)

### getGenesByAliasSymbolUsingGET
Return a list of genes for an alias and species


```js
mcw_edu.getGenesByAliasSymbolUsingGET({
  "aliasSymbol": "",
  "speciesTypeKey": 0
}, context)
```

#### Input
* input `object`
  * aliasSymbol **required** `string`: Gene alias symbol
  * speciesTypeKey **required** `integer`: A list of RGD species type keys can be found in the lookup service

#### Output
* output `array`
  * items [Gene](#gene)

### getGeneAllelesUsingGET
Return a list of gene alleles


```js
mcw_edu.getGeneAllelesUsingGET({
  "rgdId": 0
}, context)
```

#### Input
* input `object`
  * rgdId **required** `integer`: RGD ID of gene

#### Output
* output `array`
  * items [Gene](#gene)

### getGenesAnnotatedUsingGET
Return a list of genes annotated to an ontology term


```js
mcw_edu.getGenesAnnotatedUsingGET({
  "accId": "",
  "speciesTypeKey": 0
}, context)
```

#### Input
* input `object`
  * accId **required** `string`: Ontology term accession ID
  * speciesTypeKey **required** `integer`: Species type key.  A list of species type keys can be found in the lookup service

#### Output
* output `array`
  * items [Gene](#gene)

### getGenesByKeywordUsingGET
Return a list of genes by keyword and species type key


```js
mcw_edu.getGenesByKeywordUsingGET({
  "keyword": "",
  "speciesTypeKey": 0
}, context)
```

#### Input
* input `object`
  * keyword **required** `string`: Search keyword
  * speciesTypeKey **required** `integer`: Species type key.  A list of species type keys can be found in the lookup service

#### Output
* output `array`
  * items [Gene](#gene)

### getGeneByMapKeyUsingGET
Return a list of all genes with position information for an assembly


```js
mcw_edu.getGeneByMapKeyUsingGET({
  "mapKey": 0
}, context)
```

#### Input
* input `object`
  * mapKey **required** `integer`: A list of RGD assembly map keys can be found in the lookup service

#### Output
* output `array`
  * items [MappedGene](#mappedgene)

### getGeneOrthologsUsingGET
Return a list of gene orthologs


```js
mcw_edu.getGeneOrthologsUsingGET({
  "rgdId": 0
}, context)
```

#### Input
* input `object`
  * rgdId **required** `integer`: RGD ID of a gene

#### Output
* output `array`
  * items [Gene](#gene)

### getGenesBySpeciesUsingGET
Return a list of all genes for a species in RGD


```js
mcw_edu.getGenesBySpeciesUsingGET({
  "speciesTypeKey": 0
}, context)
```

#### Input
* input `object`
  * speciesTypeKey **required** `integer`: A list of RGD species type keys can be found in the lookup service

#### Output
* output `array`
  * items [Gene](#gene)

### getGenesByPositionUsingGET
Return a list of genes position and map key


```js
mcw_edu.getGenesByPositionUsingGET({
  "chr": "",
  "start": 0,
  "stop": 0,
  "mapKey": 0
}, context)
```

#### Input
* input `object`
  * chr **required** `string`: Chromosome
  * start **required** `integer`: Start Position
  * stop **required** `integer`: Stop Position
  * mapKey **required** `integer`: A list of RGD assembly map keys can be found in the lookup service

#### Output
* output `array`
  * items [Gene](#gene)

### getGeneByRgdIdUsingGET
Get a gene record by RGD ID


```js
mcw_edu.getGeneByRgdIdUsingGET({
  "rgdId": 0
}, context)
```

#### Input
* input `object`
  * rgdId **required** `integer`: The RGD ID of a Gene in RGD

#### Output
* output [Gene](#gene)

### getGeneBySymbolUsingGET
Get a gene record by symbol and species type key


```js
mcw_edu.getGeneBySymbolUsingGET({
  "symbol": "",
  "speciesTypeKey": 0
}, context)
```

#### Input
* input `object`
  * symbol **required** `string`: Gene Symbol
  * speciesTypeKey **required** `integer`: Species type key.  A list of species type keys can be found in the lookup service

#### Output
* output [Gene](#gene)

### getGeneTypesUsingGET
Returns a list of gene types avialable in RGD


```js
mcw_edu.getGeneTypesUsingGET(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items `string`

### getMapsUsingGET
Return a list assembly maps for a species


```js
mcw_edu.getMapsUsingGET({
  "speciesTypeKey": 0
}, context)
```

#### Input
* input `object`
  * speciesTypeKey **required** `integer`: RGD species type key. A full list of keys is available throught the lookup service.  1=human, 2=mouse, 3=rat,ect

#### Output
* output `array`
  * items [Map](#map)

### getSpeciesTypesUsingGET
Return a Map of species type keys available in RGD


```js
mcw_edu.getSpeciesTypesUsingGET(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`

### searchPathwaysUsingGET
Return a list of pathways based on search term


```js
mcw_edu.searchPathwaysUsingGET({
  "searchString": ""
}, context)
```

#### Input
* input `object`
  * searchString **required** `string`: Free text search string

#### Output
* output `array`
  * items [Pathway](#pathway)

### getPathwaysWithDiagramsForCategoryUsingGET
Return a list of pathways based on category provided


```js
mcw_edu.getPathwaysWithDiagramsForCategoryUsingGET({
  "category": ""
}, context)
```

#### Input
* input `object`
  * category **required** `string`: Pathway Category

#### Output
* output `array`
  * items [Pathway](#pathway)

### getChartInfoUsingGET
Return a list of pathways based on search term and species type.  3=rat 4=chinchilla


```js
mcw_edu.getChartInfoUsingGET({
  "speciesTypeKey": 0,
  "termString": ""
}, context)
```

#### Input
* input `object`
  * speciesTypeKey **required** `integer`: Species Type Key - 3=rat 4=chinchilla 
  * termString **required** `string`: List of term accession IDs

#### Output
* output `object`

### getQtlListByPositionUsingGET
Returns a list QTL for given position and assembly map


```js
mcw_edu.getQtlListByPositionUsingGET({
  "chr": "",
  "start": 0,
  "stop": 0,
  "mapKey": 0
}, context)
```

#### Input
* input `object`
  * chr **required** `string`: Chromosome
  * start **required** `integer`: Start Position
  * stop **required** `integer`: Stop Position
  * mapKey **required** `integer`: A list of assembly map keys can be found using the lookup service

#### Output
* output `array`
  * items [QTL](#qtl)

### getQTLByRgdIdUsingGET
Return a QTL for provided RGD ID


```js
mcw_edu.getQTLByRgdIdUsingGET({
  "rgdId": 0
}, context)
```

#### Input
* input `object`
  * rgdId **required** `integer`: RGD ID

#### Output
* output [QTL](#qtl)

### getActiveObjectCountUsingGET
getActiveObjectCount


```js
mcw_edu.getActiveObjectCountUsingGET({
  "speciesTypeKey": 0,
  "dateYYYYMMDD": ""
}, context)
```

#### Input
* input `object`
  * speciesTypeKey **required** `integer`: speciesTypeKey
  * dateYYYYMMDD **required** `string`: dateYYYYMMDD

#### Output
* output `object`

### getGeneTypeCountUsingGET
getGeneTypeCount


```js
mcw_edu.getGeneTypeCountUsingGET({
  "speciesTypeKey": 0,
  "dateYYYYMMDD": ""
}, context)
```

#### Input
* input `object`
  * speciesTypeKey **required** `integer`: speciesTypeKey
  * dateYYYYMMDD **required** `string`: dateYYYYMMDD

#### Output
* output `object`

### getObjectStatusCountUsingGET
getObjectStatusCount


```js
mcw_edu.getObjectStatusCountUsingGET({
  "speciesTypeKey": 0,
  "dateYYYYMMDD": ""
}, context)
```

#### Input
* input `object`
  * speciesTypeKey **required** `integer`: speciesTypeKey
  * dateYYYYMMDD **required** `string`: dateYYYYMMDD

#### Output
* output `object`

### getObjectsWithRefSeqCountUsingGET
getObjectsWithRefSeqCount


```js
mcw_edu.getObjectsWithRefSeqCountUsingGET({
  "speciesTypeKey": 0,
  "dateYYYYMMDD": ""
}, context)
```

#### Input
* input `object`
  * speciesTypeKey **required** `integer`: speciesTypeKey
  * dateYYYYMMDD **required** `string`: dateYYYYMMDD

#### Output
* output `object`

### getObjectsWithReferenceCountUsingGET
getObjectsWithReferenceCount


```js
mcw_edu.getObjectsWithReferenceCountUsingGET({
  "speciesTypeKey": 0,
  "dateYYYYMMDD": ""
}, context)
```

#### Input
* input `object`
  * speciesTypeKey **required** `integer`: speciesTypeKey
  * dateYYYYMMDD **required** `string`: dateYYYYMMDD

#### Output
* output `object`

### getObjectsWithXDBsCountUsingGET
getObjectsWithXDBsCount


```js
mcw_edu.getObjectsWithXDBsCountUsingGET({
  "speciesTypeKey": 0,
  "objectKey": 0,
  "dateYYYYMMDD": ""
}, context)
```

#### Input
* input `object`
  * speciesTypeKey **required** `integer`: speciesTypeKey
  * objectKey **required** `integer`: objectKey
  * dateYYYYMMDD **required** `string`: dateYYYYMMDD

#### Output
* output `object`

### getProteinInteractionCountUsingGET
getProteinInteractionCount


```js
mcw_edu.getProteinInteractionCountUsingGET({
  "speciesTypeKey": 0,
  "dateYYYYMMDD": ""
}, context)
```

#### Input
* input `object`
  * speciesTypeKey **required** `integer`: speciesTypeKey
  * dateYYYYMMDD **required** `string`: dateYYYYMMDD

#### Output
* output `object`

### getQtlInheritanceTypeCountUsingGET
getQtlInheritanceTypeCount


```js
mcw_edu.getQtlInheritanceTypeCountUsingGET({
  "speciesTypeKey": 0,
  "dateYYYYMMDD": ""
}, context)
```

#### Input
* input `object`
  * speciesTypeKey **required** `integer`: speciesTypeKey
  * dateYYYYMMDD **required** `string`: dateYYYYMMDD

#### Output
* output `object`

### getRetiredObjectCountUsingGET
getRetiredObjectCount


```js
mcw_edu.getRetiredObjectCountUsingGET({
  "speciesTypeKey": 0,
  "dateYYYYMMDD": ""
}, context)
```

#### Input
* input `object`
  * speciesTypeKey **required** `integer`: speciesTypeKey
  * dateYYYYMMDD **required** `string`: dateYYYYMMDD

#### Output
* output `object`

### getStrainTypeCountUsingGET
getStrainTypeCount


```js
mcw_edu.getStrainTypeCountUsingGET({
  "speciesTypeKey": 0,
  "dateYYYYMMDD": ""
}, context)
```

#### Input
* input `object`
  * speciesTypeKey **required** `integer`: speciesTypeKey
  * dateYYYYMMDD **required** `string`: dateYYYYMMDD

#### Output
* output `object`

### getWithdrawnObjectCountUsingGET
getWithdrawnObjectCount


```js
mcw_edu.getWithdrawnObjectCountUsingGET({
  "speciesTypeKey": 0,
  "dateYYYYMMDD": ""
}, context)
```

#### Input
* input `object`
  * speciesTypeKey **required** `integer`: speciesTypeKey
  * dateYYYYMMDD **required** `string`: dateYYYYMMDD

#### Output
* output `object`

### getXdbsCountUsingGET
getXdbsCount


```js
mcw_edu.getXdbsCountUsingGET({
  "speciesTypeKey": 0,
  "dateYYYYMMDD": ""
}, context)
```

#### Input
* input `object`
  * speciesTypeKey **required** `integer`: speciesTypeKey
  * dateYYYYMMDD **required** `string`: dateYYYYMMDD

#### Output
* output `object`

### getActiveObjectDiffUsingGET
getActiveObjectDiff


```js
mcw_edu.getActiveObjectDiffUsingGET({
  "speciesTypeKey": 0,
  "dateFromYYYYMMDD": "",
  "dateToYYYYMMDD": ""
}, context)
```

#### Input
* input `object`
  * speciesTypeKey **required** `integer`: speciesTypeKey
  * dateFromYYYYMMDD **required** `string`: dateFromYYYYMMDD
  * dateToYYYYMMDD **required** `string`: dateToYYYYMMDD

#### Output
* output `object`

### getGeneTypeDiffUsingGET
getGeneTypeDiff


```js
mcw_edu.getGeneTypeDiffUsingGET({
  "speciesTypeKey": 0,
  "dateFromYYYYMMDD": "",
  "dateToYYYYMMDD": ""
}, context)
```

#### Input
* input `object`
  * speciesTypeKey **required** `integer`: speciesTypeKey
  * dateFromYYYYMMDD **required** `string`: dateFromYYYYMMDD
  * dateToYYYYMMDD **required** `string`: dateToYYYYMMDD

#### Output
* output `object`

### getObjectStatusDiffUsingGET
getObjectStatusDiff


```js
mcw_edu.getObjectStatusDiffUsingGET({
  "speciesTypeKey": 0,
  "dateFromYYYYMMDD": "",
  "dateToYYYYMMDD": ""
}, context)
```

#### Input
* input `object`
  * speciesTypeKey **required** `integer`: speciesTypeKey
  * dateFromYYYYMMDD **required** `string`: dateFromYYYYMMDD
  * dateToYYYYMMDD **required** `string`: dateToYYYYMMDD

#### Output
* output `object`

### getObjectsWithRefSeqDiffUsingGET
getObjectsWithRefSeqDiff


```js
mcw_edu.getObjectsWithRefSeqDiffUsingGET({
  "speciesTypeKey": 0,
  "dateFromYYYYMMDD": "",
  "dateToYYYYMMDD": ""
}, context)
```

#### Input
* input `object`
  * speciesTypeKey **required** `integer`: speciesTypeKey
  * dateFromYYYYMMDD **required** `string`: dateFromYYYYMMDD
  * dateToYYYYMMDD **required** `string`: dateToYYYYMMDD

#### Output
* output `object`

### getObjectsWithReferenceDiffUsingGET
getObjectsWithReferenceDiff


```js
mcw_edu.getObjectsWithReferenceDiffUsingGET({
  "speciesTypeKey": 0,
  "dateFromYYYYMMDD": "",
  "dateToYYYYMMDD": ""
}, context)
```

#### Input
* input `object`
  * speciesTypeKey **required** `integer`: speciesTypeKey
  * dateFromYYYYMMDD **required** `string`: dateFromYYYYMMDD
  * dateToYYYYMMDD **required** `string`: dateToYYYYMMDD

#### Output
* output `object`

### getObjectsWithXDBsDiffUsingGET
getObjectsWithXDBsDiff


```js
mcw_edu.getObjectsWithXDBsDiffUsingGET({
  "speciesTypeKey": 0,
  "objectKey": 0,
  "dateFromYYYYMMDD": "",
  "dateToYYYYMMDD": ""
}, context)
```

#### Input
* input `object`
  * speciesTypeKey **required** `integer`: speciesTypeKey
  * objectKey **required** `integer`: objectKey
  * dateFromYYYYMMDD **required** `string`: dateFromYYYYMMDD
  * dateToYYYYMMDD **required** `string`: dateToYYYYMMDD

#### Output
* output `object`

### getProteinInteractionDiffUsingGET
getProteinInteractionDiff


```js
mcw_edu.getProteinInteractionDiffUsingGET({
  "speciesTypeKey": 0,
  "dateFromYYYYMMDD": "",
  "dateToYYYYMMDD": ""
}, context)
```

#### Input
* input `object`
  * speciesTypeKey **required** `integer`: speciesTypeKey
  * dateFromYYYYMMDD **required** `string`: dateFromYYYYMMDD
  * dateToYYYYMMDD **required** `string`: dateToYYYYMMDD

#### Output
* output `object`

### getQtlInheritanceTypeDiffUsingGET
getQtlInheritanceTypeDiff


```js
mcw_edu.getQtlInheritanceTypeDiffUsingGET({
  "speciesTypeKey": 0,
  "dateFromYYYYMMDD": "",
  "dateToYYYYMMDD": ""
}, context)
```

#### Input
* input `object`
  * speciesTypeKey **required** `integer`: speciesTypeKey
  * dateFromYYYYMMDD **required** `string`: dateFromYYYYMMDD
  * dateToYYYYMMDD **required** `string`: dateToYYYYMMDD

#### Output
* output `object`

### getRetiredObjectDiffUsingGET
getRetiredObjectDiff


```js
mcw_edu.getRetiredObjectDiffUsingGET({
  "speciesTypeKey": 0,
  "dateFromYYYYMMDD": "",
  "dateToYYYYMMDD": ""
}, context)
```

#### Input
* input `object`
  * speciesTypeKey **required** `integer`: speciesTypeKey
  * dateFromYYYYMMDD **required** `string`: dateFromYYYYMMDD
  * dateToYYYYMMDD **required** `string`: dateToYYYYMMDD

#### Output
* output `object`

### getStrainTypeDiffUsingGET
getStrainTypeDiff


```js
mcw_edu.getStrainTypeDiffUsingGET({
  "speciesTypeKey": 0,
  "dateFromYYYYMMDD": "",
  "dateToYYYYMMDD": ""
}, context)
```

#### Input
* input `object`
  * speciesTypeKey **required** `integer`: speciesTypeKey
  * dateFromYYYYMMDD **required** `string`: dateFromYYYYMMDD
  * dateToYYYYMMDD **required** `string`: dateToYYYYMMDD

#### Output
* output `object`

### getWithdrawnObjectDiffUsingGET
getWithdrawnObjectDiff


```js
mcw_edu.getWithdrawnObjectDiffUsingGET({
  "speciesTypeKey": 0,
  "dateFromYYYYMMDD": "",
  "dateToYYYYMMDD": ""
}, context)
```

#### Input
* input `object`
  * speciesTypeKey **required** `integer`: speciesTypeKey
  * dateFromYYYYMMDD **required** `string`: dateFromYYYYMMDD
  * dateToYYYYMMDD **required** `string`: dateToYYYYMMDD

#### Output
* output `object`

### getXdbsDiffUsingGET
getXdbsDiff


```js
mcw_edu.getXdbsDiffUsingGET({
  "speciesTypeKey": 0,
  "dateFromYYYYMMDD": "",
  "dateToYYYYMMDD": ""
}, context)
```

#### Input
* input `object`
  * speciesTypeKey **required** `integer`: speciesTypeKey
  * dateFromYYYYMMDD **required** `string`: dateFromYYYYMMDD
  * dateToYYYYMMDD **required** `string`: dateToYYYYMMDD

#### Output
* output `object`

### getAllStrainsUsingGET
Return all active strains in RGD


```js
mcw_edu.getAllStrainsUsingGET(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Strain](#strain)

### getStrainsByPositionUsingGET
getStrainsByPosition


```js
mcw_edu.getStrainsByPositionUsingGET({
  "chr": "",
  "start": 0,
  "stop": 0,
  "mapKey": 0
}, context)
```

#### Input
* input `object`
  * chr **required** `string`: Chromosome
  * start **required** `integer`: Start Position
  * stop **required** `integer`: Stop Position
  * mapKey **required** `integer`: RGD Map Key (available through lookup service)

#### Output
* output `array`
  * items [Strain](#strain)

### getStrainByRgdIdUsingGET
Return a strain by RGD ID


```js
mcw_edu.getStrainByRgdIdUsingGET({
  "rgdId": 0
}, context)
```

#### Input
* input `object`
  * rgdId **required** `integer`: RGD ID of the strain

#### Output
* output [Strain](#strain)



## Definitions

### Annotation
* Annotation `object`
  * annotatedObjectRgdId `integer`
  * aspect `string`
  * createdBy `integer`
  * createdDate `string`
  * dataSrc `string`
  * evidence `string`
  * expRgdId `integer`
  * key `integer`
  * lastModifiedBy `integer`
  * lastModifiedDate `string`
  * notes `string`
  * objectName `string`
  * objectSymbol `string`
  * qualifier `string`
  * refRgdId `integer`
  * relativeTo `string`
  * rgdObjectKey `integer`
  * speciesTypeKey `integer`
  * term `string`
  * termAcc `string`
  * withInfo `string`
  * xrefSource `string`

### Gene
* Gene `object`
  * description `string`
  * function `string`
  * key `integer`
  * name `string`
  * ncbiAnnotStatus `string`
  * nomenReviewDate `string`
  * notes `string`
  * product `string`
  * refSeqStatus `string`
  * rgdId `integer`
  * soAccId `string`
  * speciesTypeKey `integer`
  * symbol `string`
  * type `string`
  * variant `boolean`

### Map
* Map `object`
  * dbsnpVersion `string`
  * description `string`
  * history `string`
  * key `integer`
  * length `string`
  * methodKey `integer`
  * name `string`
  * notes `string`
  * primaryRefAssembly `boolean`
  * rank `integer`
  * rgdId `integer`
  * speciesTypeKey `integer`
  * unit `string`
  * version `string`

### MapPair
* MapPair `object`
  * keyValue `string`
  * stringValue `string`

### MappedGene
* MappedGene `object`
  * chromosome `string`
  * gene [Gene](#gene)
  * mapKey `integer`
  * start `integer`
  * stop `integer`
  * strand `string`

### Pathway
* Pathway `object`
  * description `string`
  * hasAlteredPath `string`
  * id `string`
  * name `string`
  * objectList `array`
    * items [PathwayObject](#pathwayobject)
  * pathwayCategories `array`
    * items `string`
  * referenceList `array`
    * items [Reference](#reference)

### PathwayObject
* PathwayObject `object`
  * accId `string`
  * id `string`
  * objDesc `string`
  * objName `string`
  * typeId `integer`
  * typeName `string`
  * url `string`
  * xdb_key `integer`

### QTL
* QTL `object`
  * chromosome `string`
  * flank1RgdId `integer`
  * flank2RgdId `integer`
  * inheritanceType `string`
  * key `integer`
  * linkageImage `string`
  * lod `number`
  * lodImage `string`
  * mostSignificantCmoTerm `string`
  * name `string`
  * notes `string`
  * peakOffset `integer`
  * peakRgdId `integer`
  * pvalue `number`
  * rgdId `integer`
  * sourceUrl `string`
  * speciesTypeKey `integer`
  * symbol `string`
  * variance `number`

### Reference
* Reference `object`
  * citation `string`
  * doi `string`
  * editors `string`
  * issue `string`
  * key `integer`
  * notes `string`
  * pages `string`
  * pubDate `string`
  * pubStatus `string`
  * publication `string`
  * publisher `string`
  * publisherCity `string`
  * refAbstract `string`
  * referenceType `string`
  * rgdId `integer`
  * speciesTypeKey `integer`
  * title `string`
  * urlWebReference `string`
  * volume `string`

### Status
* Status `object`
  * cryopreservedEmbryo `boolean`
  * cryopreservedSperm `boolean`
  * cryorecovery `boolean`
  * key `integer`
  * liveAnimals `boolean`
  * statusDate `string`
  * strainRgdId `integer`

### Strain
* Strain `object`
  * backgroundStrainRgdId `integer`
  * chrAltered `string`
  * color `string`
  * geneticStatus `string`
  * genetics `string`
  * imageUrl `string`
  * inbredGen `string`
  * key `integer`
  * lastStatus `string`
  * lastStatusObject [Status](#status)
  * modificationMethod `string`
  * name `string`
  * notes `string`
  * origin `string`
  * researchUse `string`
  * rgdId `integer`
  * source `string`
  * speciesTypeKey `integer`
  * statusLog `array`
    * items [Status](#status)
  * strain `string`
  * strainTypeName `string`
  * substrain `string`
  * symbol `string`


