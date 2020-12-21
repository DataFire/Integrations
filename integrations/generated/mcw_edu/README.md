# @datafire/mcw_edu

Client library for Rat Genome Database REST API

## Installation and Usage
```bash
npm install --save @datafire/mcw_edu
```
```js
let mcw_edu = require('@datafire/mcw_edu').create();

.then(data => {
  console.log(data);
});
```

## Description

The RGD REST API provides programmatic access to information and annotation stored in the Rat Genome Database

## Actions

### getAffectedGenomicModelsUsingGET
Get affected genomic models (rat strains with gene alleles) submitted by RGD to AGR by taxonId


```js
mcw_edu.getAffectedGenomicModelsUsingGET({
  "taxonId": ""
}, context)
```

#### Input
* input `object`
  * taxonId **required** `string`: The taxon ID for species

#### Output
* output `object`

### getAllelesForTaxonUsingGET
Get gene allele records submitted by RGD to AGR by taxonId


```js
mcw_edu.getAllelesForTaxonUsingGET({
  "taxonId": ""
}, context)
```

#### Input
* input `object`
  * taxonId **required** `string`: The taxon ID for species

#### Output
* output `object`

### getExpressionForTaxonUsingGET
Get expression annotations submitted by RGD to AGR by taxonId


```js
mcw_edu.getExpressionForTaxonUsingGET({
  "taxonId": ""
}, context)
```

#### Input
* input `object`
  * taxonId **required** `string`: The taxon ID for species

#### Output
* output `object`

### getPhenotypesForTaxonUsingGET
Get phenotype annotations submitted by RGD to AGR by taxonId


```js
mcw_edu.getPhenotypesForTaxonUsingGET({
  "taxonId": ""
}, context)
```

#### Input
* input `object`
  * taxonId **required** `string`: The taxon ID for species

#### Output
* output `object`

### getVariantsForTaxonUsingGET
Get basic variant records submitted by RGD to AGR by taxonId


```js
mcw_edu.getVariantsForTaxonUsingGET({
  "taxonId": ""
}, context)
```

#### Input
* input `object`
  * taxonId **required** `string`: The taxon ID for species

#### Output
* output `object`

### getGenesForLatestAssemblyUsingGET
Get gene records submitted by RGD to AGR by taxonId


```js
mcw_edu.getGenesForLatestAssemblyUsingGET({
  "taxonId": ""
}, context)
```

#### Input
* input `object`
  * taxonId **required** `string`: The taxon ID for species

#### Output
* output `object`

### getAnnotationsUsingPOST
Return a list of genes annotated to an ontology term


```js
mcw_edu.getAnnotationsUsingPOST({}, context)
```

#### Input
* input `object`
  * body [AnnotationRequest](#annotationrequest)

#### Output
* output `array`
  * items [Annotation](#annotation)

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

### getEnrichmentDataUsingPOST
Return a list of genes annotated to the term.Genes are rgdids separated by comma.Species type is an integer value.term is the ontology


```js
mcw_edu.getEnrichmentDataUsingPOST({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [EnrichmentGeneRequest](#enrichmentgenerequest)

#### Output
* output `object`

### getEnrichmentDataUsingPOST_1
Return a chart of ontology terms annotated to the genes.Genes are rgdids separated by comma.Species type is an integer value.Aspect is the Ontology group


```js
mcw_edu.getEnrichmentDataUsingPOST_1({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [EnrichmentRequest](#enrichmentrequest)

#### Output
* output `object`

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

### getAnnotatedGenesUsingPOST
Return a list of genes annotated to an ontology term


```js
mcw_edu.getAnnotatedGenesUsingPOST({}, context)
```

#### Input
* input `object`
  * body [AnnotatedGeneRequest](#annotatedgenerequest)

#### Output
* output `array`
  * items [Gene](#gene)

### getAllAnnotatedGenesUsingGET
Return a list of genes annotated to an ontology term


```js
mcw_edu.getAllAnnotatedGenesUsingGET({
  "accId": ""
}, context)
```

#### Input
* input `object`
  * accId **required** `string`: Accesstion ID

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

### getMappedGenesByPositionUsingGET
Return a list of genes position and map key


```js
mcw_edu.getMappedGenesByPositionUsingGET({
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
  * items [MappedGene](#mappedgene)

### getOrthologsByListUsingPOST
Return a list of gene orthologs


```js
mcw_edu.getOrthologsByListUsingPOST({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [OrthologRequest](#orthologrequest)

#### Output
* output `object`

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

### getGenesInRegionUsingGET
Return a list of genes in region


```js
mcw_edu.getGenesInRegionUsingGET({
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
  * items [MappedGenePosition](#mappedgeneposition)

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

### getEnsemblGeneMappingUsingPOST
Translate RGD IDs to Ensembl Gene IDs


```js
mcw_edu.getEnsemblGeneMappingUsingPOST({}, context)
```

#### Input
* input `object`
  * body [RGDIDListRequest](#rgdidlistrequest)

#### Output
* output `object`

### getEnsemblGeneMappingUsingGET
Translate an RGD ID to an Ensembl Gene  ID


```js
mcw_edu.getEnsemblGeneMappingUsingGET({
  "rgdId": 0
}, context)
```

#### Input
* input `object`
  * rgdId **required** `integer`: RGD ID

#### Output
* output `object`

### getEnsemblProteinMappingUsingPOST
Translate RGD IDs to Ensembl Protein IDs


```js
mcw_edu.getEnsemblProteinMappingUsingPOST({}, context)
```

#### Input
* input `object`
  * body [RGDIDListRequest](#rgdidlistrequest)

#### Output
* output `object`

### getEnsemblProteinMappingUsingGET
Translate an RGD ID to an Ensembl Protein ID


```js
mcw_edu.getEnsemblProteinMappingUsingGET({
  "rgdId": 0
}, context)
```

#### Input
* input `object`
  * rgdId **required** `integer`: RGD ID

#### Output
* output `object`

### getEnsemblTranscriptMappingUsingPOST
Translate RGD IDs to Ensembl Transcript IDs


```js
mcw_edu.getEnsemblTranscriptMappingUsingPOST({}, context)
```

#### Input
* input `object`
  * body [RGDIDListRequest](#rgdidlistrequest)

#### Output
* output `object`

### getEnsemblTranscriptMappingUsingGET
Translate an RGD ID to an Ensembl Transcript ID


```js
mcw_edu.getEnsemblTranscriptMappingUsingGET({
  "rgdId": 0
}, context)
```

#### Input
* input `object`
  * rgdId **required** `integer`: RGD ID

#### Output
* output `object`

### getGTEXMappingUsingPOST
Translate RGD IDs to GTEx IDs


```js
mcw_edu.getGTEXMappingUsingPOST({}, context)
```

#### Input
* input `object`
  * body [RGDIDListRequest](#rgdidlistrequest)

#### Output
* output `object`

### getGTEXMappingUsingGET
Translate an RGD ID to an GTEx ID


```js
mcw_edu.getGTEXMappingUsingGET({
  "rgdId": 0
}, context)
```

#### Input
* input `object`
  * rgdId **required** `integer`: RGD ID

#### Output
* output `object`

### getGenBankNucleotideMappingUsingPOST
Translate RGD IDs to GenBank Nucleotide IDs


```js
mcw_edu.getGenBankNucleotideMappingUsingPOST({}, context)
```

#### Input
* input `object`
  * body [RGDIDListRequest](#rgdidlistrequest)

#### Output
* output `object`

### getGenBankNucleotideMappingUsingGET
Translate an RGD ID to a GenBank Nucleotide ID


```js
mcw_edu.getGenBankNucleotideMappingUsingGET({
  "rgdId": 0
}, context)
```

#### Input
* input `object`
  * rgdId **required** `integer`: RGD ID

#### Output
* output `object`

### getGenBankProteinMappingUsingPOST
Translate RGD IDs to GenBank Protein IDs


```js
mcw_edu.getGenBankProteinMappingUsingPOST({}, context)
```

#### Input
* input `object`
  * body [RGDIDListRequest](#rgdidlistrequest)

#### Output
* output `object`

### getGenBankProteinMappingUsingGET
Translate an RGD ID to a GenBank Protein ID


```js
mcw_edu.getGenBankProteinMappingUsingGET({
  "rgdId": 0
}, context)
```

#### Input
* input `object`
  * rgdId **required** `integer`: RGD ID

#### Output
* output `object`

### getHGNCMappingUsingPOST
Translate RGD IDs to HGNC IDs


```js
mcw_edu.getHGNCMappingUsingPOST({}, context)
```

#### Input
* input `object`
  * body [RGDIDListRequest](#rgdidlistrequest)

#### Output
* output `object`

### getHGNCMappingUsingGET
Translate an RGD ID to an HGNC ID


```js
mcw_edu.getHGNCMappingUsingGET({
  "rgdId": 0
}, context)
```

#### Input
* input `object`
  * rgdId **required** `integer`: RGD ID

#### Output
* output `object`

### getMGIMappingUsingPOST
Translate RGD IDs to MGI IDs


```js
mcw_edu.getMGIMappingUsingPOST({}, context)
```

#### Input
* input `object`
  * body [RGDIDListRequest](#rgdidlistrequest)

#### Output
* output `object`

### getMGIMappingUsingGET
Translate an RGD ID to an MGI ID


```js
mcw_edu.getMGIMappingUsingGET({
  "rgdId": 0
}, context)
```

#### Input
* input `object`
  * rgdId **required** `integer`: RGD ID

#### Output
* output `object`

### getNCBIGeneMappingUsingPOST
Translate RGD IDs to NCBI Gene IDs


```js
mcw_edu.getNCBIGeneMappingUsingPOST({}, context)
```

#### Input
* input `object`
  * body [RGDIDListRequest](#rgdidlistrequest)

#### Output
* output `object`

### getNCBIGeneMappingUsingGET
Translate an RGD ID to an NCBI Gene ID


```js
mcw_edu.getNCBIGeneMappingUsingGET({
  "rgdId": 0
}, context)
```

#### Input
* input `object`
  * rgdId **required** `integer`: RGD ID

#### Output
* output `object`

### getUniProtMappingUsingPOST
Translate RGD IDs to UniProt IDs


```js
mcw_edu.getUniProtMappingUsingPOST({}, context)
```

#### Input
* input `object`
  * body [RGDIDListRequest](#rgdidlistrequest)

#### Output
* output `object`

### getUniProtMappingUsingGET
Translate an RGD ID to a UniProt ID


```js
mcw_edu.getUniProtMappingUsingGET({
  "rgdId": 0
}, context)
```

#### Input
* input `object`
  * rgdId **required** `integer`: RGD ID

#### Output
* output `object`

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

### getMapsUsingGET_1
Return a standardUnit for an ontology if it exists


```js
mcw_edu.getMapsUsingGET_1({
  "accId": ""
}, context)
```

#### Input
* input `object`
  * accId **required** `string`: RGD term acc

#### Output
* output `string`

### getChromosomeByAssemblyUsingGET
Return a list of chromosomes


```js
mcw_edu.getChromosomeByAssemblyUsingGET({
  "chromosome": "",
  "mapKey": 0
}, context)
```

#### Input
* input `object`
  * chromosome **required** `string`: chromosome
  * mapKey **required** `integer`: mapKey

#### Output
* output [Chromosome](#chromosome)

### getChromosomesByAssemblyUsingGET
Return a list of chromosomes


```js
mcw_edu.getChromosomesByAssemblyUsingGET({
  "mapKey": 0
}, context)
```

#### Input
* input `object`
  * mapKey **required** `integer`: mapKey

#### Output
* output `array`
  * items `string`

### getMapsBySpeciesUsingGET
Return a list of assemblies


```js
mcw_edu.getMapsBySpeciesUsingGET({
  "speciesTypeKey": 0
}, context)
```

#### Input
* input `object`
  * speciesTypeKey **required** `integer`: species Key

#### Output
* output `array`
  * items [Map](#map)

### getOntDagsUsingGET
Returns child and parent terms for Accession ID


```js
mcw_edu.getOntDagsUsingGET({
  "accId": ""
}, context)
```

#### Input
* input `object`
  * accId **required** `string`: Accession ID

#### Output
* output `object`

### isDescendantOfUsingGET
Returns true or false for terms


```js
mcw_edu.isDescendantOfUsingGET({
  "accId1": "",
  "accId2": ""
}, context)
```

#### Input
* input `object`
  * accId1 **required** `string`: Child Term Accession ID
  * accId2 **required** `string`: Parent Term Accession ID

#### Output
* output `boolean`

### getTermUsingGET
Returns term for Accession ID


```js
mcw_edu.getTermUsingGET({
  "accId": ""
}, context)
```

#### Input
* input `object`
  * accId **required** `string`: Term Accession ID

#### Output
* output [Term](#term)

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
Return a list of quantitative phenotypes values based on a combination of Clinical Measurement, Experimental Condition, Rat Strain, and/or Measurement Method ontology terms.  Results will be all records that match all terms submitted.  Ontology ids should be submitted as a comma delimited list (ex. RS:0000029,CMO:0000155,CMO:0000139).  Species type is an integer value (3=rat, 4=chinchilla).  Reference RGD ID for a study works like a filter.


```js
mcw_edu.getChartInfoUsingGET({
  "speciesTypeKey": 0,
  "refRgdId": 0,
  "termString": ""
}, context)
```

#### Input
* input `object`
  * speciesTypeKey **required** `integer`: Species Type Key - 3=rat 4=chinchilla 
  * refRgdId **required** `integer`: Reference RGD ID for a study
  * termString **required** `string`: List of term accession IDs

#### Output
* output `object`

### getChartInfoUsingGET_1
Return a list of quantitative phenotypes values based on a combination of Clinical Measurement, Experimental Condition, Rat Strain, and/or Measurement Method ontology terms.  Results will be all records that match all terms submitted.  Ontology ids should be submitted as a comma delimited list (ex. RS:0000029,CMO:0000155,CMO:0000139).  Species type is an integer value (3=rat, 4=chinchilla)


```js
mcw_edu.getChartInfoUsingGET_1({
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

### getMappedQTLByPositionUsingGET
Returns a list QTL for given position and assembly map


```js
mcw_edu.getMappedQTLByPositionUsingGET({
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
  * items [MappedQTL](#mappedqtl)

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

### getMappedSSLPByPositionUsingGET
Returns a list SSLP for given position and assembly map


```js
mcw_edu.getMappedSSLPByPositionUsingGET({
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
  * items [MappedSSLP](#mappedsslp)

### getActiveObjectCountUsingGET
Count of active objects by type, for specified species and date


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
Count of gene types, for specified species and date


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
Count of objects with given status, for specified species and date


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
Count of objects with reference sequence(s), by object type, for specified species and date


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
Count of objects with reference, by object type, for specified species and date


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
Count of objects with external database ids, by database id, for specified species, object type and date


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
Count of protein interactions, for specified species and date


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
Count of strains, by qtl inheritance type, for specified species and date


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
Count of retired objects by type, for specified species and date


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
Count of strain types, for specified species and date


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
Count of withdrawn objects by type, for specified species and date


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
Count of external database ids, for specied species and date


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
Count difference of active objects, by type, for specified species and date range


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
Count difference of gene types, for specified species and date range


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
Count difference of objects with given status, for specified species and date range


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
Count difference of objects with reference sequence(s), by object type, for specified species and date range


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
Count difference of objects with reference, by object type, for specified species and date range


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
Count difference of objects with external database ids, by database id, for specified species, object type and date range


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
Count difference of protein interactions, for specified species and date range


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
Count difference of strains, by qtl inheritance type, for specified species and date range


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
Count difference of retired objects, by type, for specified species and date range


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
Count difference of strain types, for specified species and date range


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
Count difference of withdrawn objects, by type, for specified species and date range


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
Count difference of external database ids, for specified species and date range


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

### getTermStatsUsingGET
getTermStats


```js
mcw_edu.getTermStatsUsingGET({
  "accId": "",
  "filterAccId": ""
}, context)
```

#### Input
* input `object`
  * accId **required** `string`: accId
  * filterAccId **required** `string`: filterAccId

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
Return all active strains by position


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

### AnnotatedGeneRequest
* AnnotatedGeneRequest `object`
  * accId `string`
  * evidenceCodes `array`
    * items `string`
  * speciesTypeKeys `array`
    * items `integer`

### Annotation
* Annotation `object`
  * annotatedObjectRgdId `integer`
  * annotationExtension `string`
  * aspect `string`
  * createdBy `integer`
  * createdDate `string`
  * dataSrc `string`
  * evidence `string`
  * geneProductFormId `string`
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

### AnnotationRequest
* AnnotationRequest `object`
  * evidenceCodes `array`
    * items `string`
  * ids `array`
    * items `string`
  * speciesTypeKeys `array`
    * items `integer`
  * termAcc `string`

### Chromosome
* Chromosome `object`
  * chromosome `string`
  * contigCount `integer`
  * gapCount `integer`
  * gapLength `integer`
  * genbankId `string`
  * mapKey `integer`
  * ordinalNumber `integer`
  * refseqId `string`
  * seqLength `integer`

### EnrichmentGeneRequest
* EnrichmentGeneRequest `object`
  * accId `string`
  * geneSymbols `array`
    * items `string`
  * species `string`

### EnrichmentRequest
* EnrichmentRequest `object`
  * aspect `string`
  * genes `array`
    * items `string`
  * species `string`

### Gene
* Gene `object`
  * agrDescription `string`
  * description `string`
  * ensemblFullName `string`
  * ensemblGeneSymbol `string`
  * ensemblGeneType `string`
  * geneSource `string`
  * key `integer`
  * mergedDescription `string`
  * name `string`
  * ncbiAnnotStatus `string`
  * nomenReviewDate `string`
  * nomenSource `string`
  * notes `string`
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
  * key `integer`
  * methodKey `integer`
  * name `string`
  * notes `string`
  * primaryRefAssembly `boolean`
  * rank `integer`
  * refSeqAssemblyAcc `string`
  * refSeqAssemblyName `string`
  * rgdId `integer`
  * source `string`
  * speciesTypeKey `integer`
  * ucscAssemblyId `string`
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

### MappedGenePosition
* MappedGenePosition `object`
  * chromosome `string`
  * mapKey `integer`
  * rgdId `integer`
  * start `integer`
  * stop `integer`
  * strand `string`
  * symbol `string`

### MappedQTL
* MappedQTL `object`
  * chromosome `string`
  * mapKey `integer`
  * qtl [QTL](#qtl)
  * start `integer`
  * stop `integer`
  * strand `string`

### MappedSSLP
* MappedSSLP `object`
  * chromosome `string`
  * mapKey `integer`
  * sslp [SSLP](#sslp)
  * start `integer`
  * stop `integer`
  * strand `string`

### OrthologRequest
* OrthologRequest `object`
  * rgdIds `array`
    * items `integer`
  * speciesTypeKeys `array`
    * items `integer`

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

### RGDIDListRequest
* RGDIDListRequest `object`
  * rgdIds `array`
    * items `integer`

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

### SSLP
* SSLP `object`
  * expectedSize `integer`
  * forwardSeq `string`
  * key `integer`
  * name `string`
  * notes `string`
  * reverseSeq `string`
  * rgdId `integer`
  * speciesTypeKey `integer`
  * sslpType `string`
  * templateSeq `string`

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

### Term
* Term `object`
  * accId `string`
  * comment `string`
  * createdBy `string`
  * creationDate `string`
  * definition `string`
  * modificationDate `string`
  * obsolete `integer`
  * ontologyId `string`
  * term `string`
  * xrefs `array`
    * items [TermXRef](#termxref)

### TermXRef
* TermXRef `object`
  * key `integer`
  * termAcc `string`
  * xrefDescription `string`
  * xrefValue `string`


