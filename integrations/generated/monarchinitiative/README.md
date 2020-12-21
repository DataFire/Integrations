# @datafire/monarchinitiative

Client library for BioLink API

## Installation and Usage
```bash
npm install --save @datafire/monarchinitiative
```
```js
let monarchinitiative = require('@datafire/monarchinitiative').create();

.then(data => {
  console.log(data);
});
```

## Description

API integration layer for linked biological objects.

 __Source:__ https://github.com/biolink/biolink-api/

## Actions

### get_associations_between
Given two entities (e.g. a particular gene and a particular disease), if these two entities
are connected (directly or indirectly), then return the association objects describing
the connection.


```js
monarchinitiative.get_associations_between({
  "object": "",
  "subject": ""
}, context)
```

#### Input
* input `object`
  * rows `integer`: number of rows
  * start `integer`: beginning row
  * evidence `string`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
  * unselect_evidence `boolean`: If true, excludes evidence objects in response
  * exclude_automatic_assertions `boolean`: If true, excludes associations that involve IEAs (ECO:0000501)
  * use_compact_associations `boolean`: If true, returns results in compact associations format
  * object **required** `string`: Return associations pointing to this node, e.g. MP:0013765. Can also be a biological entity such as a gene
  * subject **required** `string`: Return associations emanating from this node, e.g. MGI:1342287 (If ID is from an ontology then results would include inferred associations, by default)

#### Output
* output `array`
  * items [AssociationResults](#associationresults)

### get_association_by_subject_category_search
Returns list of matching associations for a given subject category


```js
monarchinitiative.get_association_by_subject_category_search({
  "subject_category": ""
}, context)
```

#### Input
* input `object`
  * rows `integer`: number of rows
  * start `integer`: beginning row
  * evidence `string`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
  * unselect_evidence `boolean`: If true, excludes evidence objects in response
  * exclude_automatic_assertions `boolean`: If true, excludes associations that involve IEAs (ECO:0000501)
  * use_compact_associations `boolean`: If true, returns results in compact associations format
  * subject_taxon `string`: Subject taxon ID, e.g. NCBITaxon:9606 (Includes inferred associations, by default)
  * object_taxon `string`: Object taxon ID, e.g. NCBITaxon:10090 (Includes inferred associations, by default)
  * relation `string`: Filter by relation CURIE, e.g. RO:0002200 (has_phenotype), RO:0002607 (is marker for), RO:HOM0000017 (orthologous to), etc.
  * subject_category **required** `string`: Category of entity at link Subject (source), e.g. gene, disease, phenotype

#### Output
* output `array`
  * items [AssociationResults](#associationresults)

### get_association_by_subject_and_object_category_search
Returns list of matching associations between a given subject and object category


```js
monarchinitiative.get_association_by_subject_and_object_category_search({
  "object_category": "",
  "subject_category": ""
}, context)
```

#### Input
* input `object`
  * rows `integer`: number of rows
  * start `integer`: beginning row
  * evidence `string`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
  * unselect_evidence `boolean`: If true, excludes evidence objects in response
  * exclude_automatic_assertions `boolean`: If true, excludes associations that involve IEAs (ECO:0000501)
  * use_compact_associations `boolean`: If true, returns results in compact associations format
  * subject `string`: Subject CURIE
  * object `string`: Object CURIE
  * subject_taxon `string`: Subject taxon ID, e.g. NCBITaxon:9606 (Includes inferred associations, by default)
  * object_taxon `string`: Object taxon ID, e.g. NCBITaxon:10090 (Includes inferred associations, by default)
  * relation `string`: Filter by relation CURIE, e.g. RO:0002200 (has_phenotype), RO:0002607 (is marker for), RO:HOM0000017 (orthologous to), etc.
  * object_category **required** `string`: Category of entity at link Object (target), e.g. gene, disease, phenotype
  * subject_category **required** `string`: Category of entity at link Subject (source), e.g. gene, disease, phenotype

#### Output
* output `array`
  * items [AssociationResults](#associationresults)

### get_associations_from
Returns list of matching associations starting from a given subject (source)


```js
monarchinitiative.get_associations_from({
  "subject": ""
}, context)
```

#### Input
* input `object`
  * rows `integer`: number of rows
  * start `integer`: beginning row
  * evidence `string`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
  * unselect_evidence `boolean`: If true, excludes evidence objects in response
  * exclude_automatic_assertions `boolean`: If true, excludes associations that involve IEAs (ECO:0000501)
  * use_compact_associations `boolean`: If true, returns results in compact associations format
  * object_taxon `string`: Object taxon ID, e.g. NCBITaxon:10090 (Includes inferred associations, by default)
  * relation `string`: Filter by relation CURIE, e.g. RO:0002200 (has_phenotype), RO:0002607 (is marker for), RO:HOM0000017 (orthologous to), etc.
  * subject **required** `string`: Return associations emanating from this node, e.g. NCBIGene:84570, ZFIN:ZDB-GENE-050417-357 (If ID is from an ontology then results would include inferred associations, by default)

#### Output
* output `array`
  * items [AssociationResults](#associationresults)

### get_associations_to
Returns list of matching associations pointing to a given object (target)


```js
monarchinitiative.get_associations_to({
  "object": ""
}, context)
```

#### Input
* input `object`
  * rows `integer`: number of rows
  * start `integer`: beginning row
  * evidence `string`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
  * unselect_evidence `boolean`: If true, excludes evidence objects in response
  * exclude_automatic_assertions `boolean`: If true, excludes associations that involve IEAs (ECO:0000501)
  * use_compact_associations `boolean`: If true, returns results in compact associations format
  * object **required** `string`: Return associations pointing to this node, e.g. specifying MP:0013765 will return all genes, variants, strains, etc. annotated with this term. Can also be a biological entity such as a gene

#### Output
* output `array`
  * items [AssociationResults](#associationresults)

### get_association_by_subject_and_assoc_type
Returns list of matching associations of a given type


```js
monarchinitiative.get_association_by_subject_and_assoc_type({
  "association_type": ""
}, context)
```

#### Input
* input `object`
  * rows `integer`: number of rows
  * start `integer`: beginning row
  * evidence `string`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
  * unselect_evidence `boolean`: If true, excludes evidence objects in response
  * exclude_automatic_assertions `boolean`: If true, excludes associations that involve IEAs (ECO:0000501)
  * use_compact_associations `boolean`: If true, returns results in compact associations format
  * subject `string`: Subject CURIE
  * object `string`: Object CURIE
  * association_type **required** `string`: Association type, eg gene_phenotype

#### Output
* output `array`
  * items [AssociationResults](#associationresults)

### get_association_object
An association connects, at a minimum, two things, designated subject and object,
via some relationship. Associations also include evidence, provenance etc.


```js
monarchinitiative.get_association_object({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: identifier for an association, e.g. f5ba436c-f851-41b3-9d9d-bb2b5fc879d4

#### Output
* output `array`
  * items [AssociationResults](#associationresults)

### get_anatomy_gene_associations
Returns genes associated with a given anatomy


```js
monarchinitiative.get_anatomy_gene_associations({
  "id": ""
}, context)
```

#### Input
* input `object`
  * rows `integer`: number of rows
  * start `integer`: beginning row
  * facet `boolean`: Enable faceting
  * facet_fields `array`: Fields to facet on
  * unselect_evidence `boolean`: If true, excludes evidence objects in response
  * exclude_automatic_assertions `boolean`: If true, excludes associations that involve IEAs (ECO:0000501)
  * fetch_objects `boolean`: If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  * use_compact_associations `boolean`: If true, returns results in compact associations format
  * slim `array`: Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
  * evidence `string`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
  * direct `boolean`: Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
  * taxon `array`: One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
  * direct_taxon `boolean`: Set true to exclude inferred taxa
  * relation `string`: A relation CURIE to filter associations
  * sort `string`: Sorting responses <field> <desc,asc>
  * q `string`: Query string to filter documents
  * id **required** `string`: CURIE identifier of anatomical entity, e.g. GO:0005634 (nucleus), UBERON:0002037 (cerebellum), CL:0000540 (neuron). Equivalent IDs can be used with same results

#### Output
* output [AssociationResults](#associationresults)

### get_anatomy_gene_by_taxon_associations
For example, + NCBITaxon:10090 (mouse)


```js
monarchinitiative.get_anatomy_gene_by_taxon_associations({
  "taxid": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * rows `integer`: number of rows
  * start `integer`: beginning row
  * facet `boolean`: Enable faceting
  * facet_fields `array`: Fields to facet on
  * unselect_evidence `boolean`: If true, excludes evidence objects in response
  * exclude_automatic_assertions `boolean`: If true, excludes associations that involve IEAs (ECO:0000501)
  * fetch_objects `boolean`: If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  * use_compact_associations `boolean`: If true, returns results in compact associations format
  * slim `array`: Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
  * evidence `string`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
  * direct `boolean`: Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
  * taxon `array`: One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
  * direct_taxon `boolean`: Set true to exclude inferred taxa
  * relation `string`: A relation CURIE to filter associations
  * sort `string`: Sorting responses <field> <desc,asc>
  * q `string`: Query string to filter documents
  * taxid **required** `string`: Species or high level taxon grouping, e.g  NCBITaxon:10090 (Mus musculus)
  * id **required** `string`: CURIE identifier of anatomical entity, e.g. GO:0005634 (nucleus), UBERON:0002037 (cerebellum), CL:0000540 (neuron). Equivalent IDs can be used with same results

#### Output
*Output schema unknown*

### get_case_disease_associations
Returns diseases associated with a case


```js
monarchinitiative.get_case_disease_associations({
  "id": ""
}, context)
```

#### Input
* input `object`
  * rows `integer`: number of rows
  * start `integer`: beginning row
  * facet `boolean`: Enable faceting
  * facet_fields `array`: Fields to facet on
  * unselect_evidence `boolean`: If true, excludes evidence objects in response
  * exclude_automatic_assertions `boolean`: If true, excludes associations that involve IEAs (ECO:0000501)
  * fetch_objects `boolean`: If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  * use_compact_associations `boolean`: If true, returns results in compact associations format
  * slim `array`: Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
  * evidence `string`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
  * direct `boolean`: Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
  * id **required** `string`: CURIE identifier for a case

#### Output
* output [AssociationResults](#associationresults)

### get_case_genotype_associations
Returns genotypes associated with a case


```js
monarchinitiative.get_case_genotype_associations({
  "id": ""
}, context)
```

#### Input
* input `object`
  * rows `integer`: number of rows
  * start `integer`: beginning row
  * facet `boolean`: Enable faceting
  * facet_fields `array`: Fields to facet on
  * unselect_evidence `boolean`: If true, excludes evidence objects in response
  * exclude_automatic_assertions `boolean`: If true, excludes associations that involve IEAs (ECO:0000501)
  * fetch_objects `boolean`: If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  * use_compact_associations `boolean`: If true, returns results in compact associations format
  * slim `array`: Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
  * evidence `string`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
  * direct `boolean`: Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
  * id **required** `string`: CURIE identifier for a case

#### Output
* output [AssociationResults](#associationresults)

### get_case_model_associations
Returns models associated with a case


```js
monarchinitiative.get_case_model_associations({
  "id": ""
}, context)
```

#### Input
* input `object`
  * rows `integer`: number of rows
  * start `integer`: beginning row
  * facet `boolean`: Enable faceting
  * facet_fields `array`: Fields to facet on
  * unselect_evidence `boolean`: If true, excludes evidence objects in response
  * exclude_automatic_assertions `boolean`: If true, excludes associations that involve IEAs (ECO:0000501)
  * fetch_objects `boolean`: If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  * use_compact_associations `boolean`: If true, returns results in compact associations format
  * slim `array`: Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
  * evidence `string`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
  * direct `boolean`: Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
  * id **required** `string`: CURIE identifier for a case

#### Output
* output [AssociationResults](#associationresults)

### get_case_phenotype_associations
Returns phenotypes associated with a case


```js
monarchinitiative.get_case_phenotype_associations({
  "id": ""
}, context)
```

#### Input
* input `object`
  * rows `integer`: number of rows
  * start `integer`: beginning row
  * facet `boolean`: Enable faceting
  * facet_fields `array`: Fields to facet on
  * unselect_evidence `boolean`: If true, excludes evidence objects in response
  * exclude_automatic_assertions `boolean`: If true, excludes associations that involve IEAs (ECO:0000501)
  * fetch_objects `boolean`: If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  * use_compact_associations `boolean`: If true, returns results in compact associations format
  * slim `array`: Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
  * evidence `string`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
  * direct `boolean`: Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
  * id **required** `string`: CURIE identifier for a case

#### Output
* output [AssociationResults](#associationresults)

### get_case_variant_associations
Returns variants associated with a case


```js
monarchinitiative.get_case_variant_associations({
  "id": ""
}, context)
```

#### Input
* input `object`
  * rows `integer`: number of rows
  * start `integer`: beginning row
  * facet `boolean`: Enable faceting
  * facet_fields `array`: Fields to facet on
  * unselect_evidence `boolean`: If true, excludes evidence objects in response
  * exclude_automatic_assertions `boolean`: If true, excludes associations that involve IEAs (ECO:0000501)
  * fetch_objects `boolean`: If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  * use_compact_associations `boolean`: If true, returns results in compact associations format
  * slim `array`: Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
  * evidence `string`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
  * direct `boolean`: Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
  * id **required** `string`: CURIE identifier for a case

#### Output
* output [AssociationResults](#associationresults)

### get_disease_case_associations
Returns cases associated with a disease


```js
monarchinitiative.get_disease_case_associations({
  "id": ""
}, context)
```

#### Input
* input `object`
  * rows `integer`: number of rows
  * start `integer`: beginning row
  * facet `boolean`: Enable faceting
  * facet_fields `array`: Fields to facet on
  * unselect_evidence `boolean`: If true, excludes evidence objects in response
  * exclude_automatic_assertions `boolean`: If true, excludes associations that involve IEAs (ECO:0000501)
  * fetch_objects `boolean`: If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  * use_compact_associations `boolean`: If true, returns results in compact associations format
  * slim `array`: Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
  * evidence `string`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
  * direct `boolean`: Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
  * id **required** `string`: CURIE identifier of disease, e.g. MONDO:0007103, MONDO:0010918. Equivalent IDs can be used with same results

#### Output
* output [AssociationResults](#associationresults)

### get_disease_gene_associations
Returns genes associated with a disease


```js
monarchinitiative.get_disease_gene_associations({
  "id": ""
}, context)
```

#### Input
* input `object`
  * rows `integer`: number of rows
  * start `integer`: beginning row
  * facet `boolean`: Enable faceting
  * facet_fields `array`: Fields to facet on
  * unselect_evidence `boolean`: If true, excludes evidence objects in response
  * exclude_automatic_assertions `boolean`: If true, excludes associations that involve IEAs (ECO:0000501)
  * fetch_objects `boolean`: If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  * use_compact_associations `boolean`: If true, returns results in compact associations format
  * slim `array`: Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
  * evidence `string`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
  * direct `boolean`: Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
  * taxon `array`: One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
  * direct_taxon `boolean`: Set true to exclude inferred taxa
  * relation `string`: A relation CURIE to filter associations
  * sort `string`: Sorting responses <field> <desc,asc>
  * q `string`: Query string to filter documents
  * association_type `string` (values: causal, non_causal, both): Additional filters: causal, non_causal, both
  * id **required** `string`: CURIE identifier of disease, e.g. OMIM:605543, DOID:678. Equivalent IDs can be used with same results

#### Output
* output [AssociationResults](#associationresults)

### get_disease_genotype_associations
Returns genotypes associated with a disease


```js
monarchinitiative.get_disease_genotype_associations({
  "id": ""
}, context)
```

#### Input
* input `object`
  * rows `integer`: number of rows
  * start `integer`: beginning row
  * facet `boolean`: Enable faceting
  * facet_fields `array`: Fields to facet on
  * unselect_evidence `boolean`: If true, excludes evidence objects in response
  * exclude_automatic_assertions `boolean`: If true, excludes associations that involve IEAs (ECO:0000501)
  * fetch_objects `boolean`: If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  * use_compact_associations `boolean`: If true, returns results in compact associations format
  * slim `array`: Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
  * evidence `string`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
  * direct `boolean`: Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
  * taxon `array`: One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
  * direct_taxon `boolean`: Set true to exclude inferred taxa
  * relation `string`: A relation CURIE to filter associations
  * sort `string`: Sorting responses <field> <desc,asc>
  * q `string`: Query string to filter documents
  * id **required** `string`: CURIE identifier of disease, e.g. Orphanet:399158, DOID:0080008. Equivalent IDs can be used with same results

#### Output
* output [AssociationResults](#associationresults)

### get_disease_model_associations
In the association object returned, the subject will be the disease, and the object will be the model.
The model may be a gene or genetic element.

If the query disease is a general class, the association subject may be to a specific disease.

In some cases the association will be *direct*, for example if a paper asserts a genotype is a model of a disease.

In other cases, the association will be *indirect*, for
example, chaining over orthology. In these cases the chain
will be reflected in the *evidence graph*

* TODO: provide hook into owlsim for dynamic computation of models by similarity


```js
monarchinitiative.get_disease_model_associations({
  "id": ""
}, context)
```

#### Input
* input `object`
  * rows `integer`: number of rows
  * start `integer`: beginning row
  * facet `boolean`: Enable faceting
  * facet_fields `array`: Fields to facet on
  * unselect_evidence `boolean`: If true, excludes evidence objects in response
  * exclude_automatic_assertions `boolean`: If true, excludes associations that involve IEAs (ECO:0000501)
  * fetch_objects `boolean`: If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  * use_compact_associations `boolean`: If true, returns results in compact associations format
  * slim `array`: Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
  * evidence `string`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
  * direct `boolean`: Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
  * taxon `array`: One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
  * direct_taxon `boolean`: Set true to exclude inferred taxa
  * relation `string`: A relation CURIE to filter associations
  * sort `string`: Sorting responses <field> <desc,asc>
  * q `string`: Query string to filter documents
  * id **required** `string`: CURIE identifier of disease, e.g. OMIM:605543, DOID:678. Equivalent IDs can be used with same results

#### Output
* output [AssociationResults](#associationresults)

### get_disease_model_taxon_associations
See /disease/<id>/models route for full details


```js
monarchinitiative.get_disease_model_taxon_associations({
  "taxon": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * rows `integer`: number of rows
  * start `integer`: beginning row
  * facet `boolean`: Enable faceting
  * facet_fields `array`: Fields to facet on
  * unselect_evidence `boolean`: If true, excludes evidence objects in response
  * exclude_automatic_assertions `boolean`: If true, excludes associations that involve IEAs (ECO:0000501)
  * fetch_objects `boolean`: If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  * use_compact_associations `boolean`: If true, returns results in compact associations format
  * slim `array`: Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
  * evidence `string`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
  * direct `boolean`: Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
  * taxon **required** `string`: CURIE of organism taxonomy class to constrain models, e.g NCBITaxon:10090 (M. musculus).
  * id **required** `string`: CURIE identifier of disease, e.g. OMIM:605543, DOID:678. Equivalent IDs can be used with same results

#### Output
* output [AssociationResults](#associationresults)

### get_disease_pathway_associations
Returns pathways associated with a disease


```js
monarchinitiative.get_disease_pathway_associations({
  "id": ""
}, context)
```

#### Input
* input `object`
  * rows `integer`: number of rows
  * start `integer`: beginning row
  * facet `boolean`: Enable faceting
  * facet_fields `array`: Fields to facet on
  * unselect_evidence `boolean`: If true, excludes evidence objects in response
  * exclude_automatic_assertions `boolean`: If true, excludes associations that involve IEAs (ECO:0000501)
  * fetch_objects `boolean`: If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  * use_compact_associations `boolean`: If true, returns results in compact associations format
  * slim `array`: Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
  * evidence `string`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
  * direct `boolean`: Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
  * taxon `array`: One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
  * direct_taxon `boolean`: Set true to exclude inferred taxa
  * relation `string`: A relation CURIE to filter associations
  * sort `string`: Sorting responses <field> <desc,asc>
  * q `string`: Query string to filter documents
  * id **required** `string`: CURIE identifier of disease, e.g. DOID:4450. Equivalent IDs can be used with same results

#### Output
* output [AssociationResults](#associationresults)

### get_disease_phenotype_associations
Returns phenotypes associated with disease


```js
monarchinitiative.get_disease_phenotype_associations({
  "id": ""
}, context)
```

#### Input
* input `object`
  * rows `integer`: number of rows
  * start `integer`: beginning row
  * facet `boolean`: Enable faceting
  * facet_fields `array`: Fields to facet on
  * unselect_evidence `boolean`: If true, excludes evidence objects in response
  * exclude_automatic_assertions `boolean`: If true, excludes associations that involve IEAs (ECO:0000501)
  * fetch_objects `boolean`: If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  * use_compact_associations `boolean`: If true, returns results in compact associations format
  * slim `array`: Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
  * evidence `string`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
  * direct `boolean`: Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
  * taxon `array`: One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
  * direct_taxon `boolean`: Set true to exclude inferred taxa
  * relation `string`: A relation CURIE to filter associations
  * sort `string`: Sorting responses <field> <desc,asc>
  * q `string`: Query string to filter documents
  * id **required** `string`: CURIE identifier of disease, e.g. OMIM:605543, Orphanet:1934, DOID:678. Equivalent IDs can be used with same results

#### Output
* output [D2PAssociationResults](#d2passociationresults)

### get_disease_publication_associations
Returns publications associated with a disease


```js
monarchinitiative.get_disease_publication_associations({
  "id": ""
}, context)
```

#### Input
* input `object`
  * rows `integer`: number of rows
  * start `integer`: beginning row
  * facet `boolean`: Enable faceting
  * facet_fields `array`: Fields to facet on
  * unselect_evidence `boolean`: If true, excludes evidence objects in response
  * exclude_automatic_assertions `boolean`: If true, excludes associations that involve IEAs (ECO:0000501)
  * fetch_objects `boolean`: If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  * use_compact_associations `boolean`: If true, returns results in compact associations format
  * slim `array`: Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
  * evidence `string`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
  * direct `boolean`: Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
  * taxon `array`: One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
  * direct_taxon `boolean`: Set true to exclude inferred taxa
  * relation `string`: A relation CURIE to filter associations
  * sort `string`: Sorting responses <field> <desc,asc>
  * q `string`: Query string to filter documents
  * id **required** `string`: CURIE identifier of disease, e.g. OMIM:605543, DOID:678. Equivalent IDs can be used with same results

#### Output
* output [AssociationResults](#associationresults)

### get_disease_substance_associations
e.g. drugs or small molecules used to treat


```js
monarchinitiative.get_disease_substance_associations({
  "id": ""
}, context)
```

#### Input
* input `object`
  * rows `integer`: number of rows
  * start `integer`: beginning row
  * facet `boolean`: Enable faceting
  * facet_fields `array`: Fields to facet on
  * unselect_evidence `boolean`: If true, excludes evidence objects in response
  * exclude_automatic_assertions `boolean`: If true, excludes associations that involve IEAs (ECO:0000501)
  * fetch_objects `boolean`: If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  * use_compact_associations `boolean`: If true, returns results in compact associations format
  * slim `array`: Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
  * evidence `string`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
  * direct `boolean`: Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
  * id **required** `string`: CURIE identifier of disease, e.g. DOID:2841 (asthma). Equivalent IDs not yet supported

#### Output
*Output schema unknown*

### get_disease_variant_associations
Returns variants associated with a disease


```js
monarchinitiative.get_disease_variant_associations({
  "id": ""
}, context)
```

#### Input
* input `object`
  * rows `integer`: number of rows
  * start `integer`: beginning row
  * facet `boolean`: Enable faceting
  * facet_fields `array`: Fields to facet on
  * unselect_evidence `boolean`: If true, excludes evidence objects in response
  * exclude_automatic_assertions `boolean`: If true, excludes associations that involve IEAs (ECO:0000501)
  * fetch_objects `boolean`: If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  * use_compact_associations `boolean`: If true, returns results in compact associations format
  * slim `array`: Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
  * evidence `string`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
  * direct `boolean`: Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
  * taxon `array`: One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
  * direct_taxon `boolean`: Set true to exclude inferred taxa
  * relation `string`: A relation CURIE to filter associations
  * sort `string`: Sorting responses <field> <desc,asc>
  * q `string`: Query string to filter documents
  * id **required** `string`: CURIE identifier of disease, e.g. OMIM:605543, DOID:678. Equivalent IDs can be used with same results

#### Output
* output [AssociationResults](#associationresults)

### get_function_associations
Returns annotations associated to a function term


```js
monarchinitiative.get_function_associations({
  "id": ""
}, context)
```

#### Input
* input `object`
  * start `integer`: beginning row
  * rows `integer`: number of rows
  * evidence `array`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
  * id **required** `string`: CURIE identifier of a function term (e.g. GO:0044598)

#### Output
*Output schema unknown*

### get_function_gene_associations
Returns genes associated to a GO term


```js
monarchinitiative.get_function_gene_associations({
  "id": ""
}, context)
```

#### Input
* input `object`
  * rows `integer`: number of rows
  * start `integer`: beginning row
  * facet `boolean`: Enable faceting
  * facet_fields `array`: Fields to facet on
  * unselect_evidence `boolean`: If true, excludes evidence objects in response
  * exclude_automatic_assertions `boolean`: If true, excludes associations that involve IEAs (ECO:0000501)
  * fetch_objects `boolean`: If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  * use_compact_associations `boolean`: If true, returns results in compact associations format
  * slim `array`: Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
  * evidence `string`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
  * direct `boolean`: Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
  * taxon `array`: One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
  * direct_taxon `boolean`: Set true to exclude inferred taxa
  * relation `string`: A relation CURIE to filter associations
  * sort `string`: Sorting responses <field> <desc,asc>
  * q `string`: Query string to filter documents
  * relationship_type `string` (values: involved_in, involved_in_regulation_of, acts_upstream_of_or_within): relationship type ('involved_in', 'involved_in_regulation_of' or 'acts_upstream_of_or_within')
  * id **required** `string`: CURIE identifier of a GO term, e.g. GO:0044598

#### Output
* output [AssociationResults](#associationresults)

### get_function_publication_associations
Returns publications associated to a GO term


```js
monarchinitiative.get_function_publication_associations({
  "id": ""
}, context)
```

#### Input
* input `object`
  * start `integer`: beginning row
  * rows `integer`: number of rows
  * evidence `array`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
  * id **required** `string`: CURIE identifier of a GO term, e.g. GO:0044598

#### Output
*Output schema unknown*

### get_function_taxon_associations
Returns taxons associated to a GO term


```js
monarchinitiative.get_function_taxon_associations({
  "id": ""
}, context)
```

#### Input
* input `object`
  * start `integer`: beginning row
  * rows `integer`: number of rows
  * evidence `array`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
  * id **required** `string`: CURIE identifier of a GO term, e.g. GO:0044598

#### Output
*Output schema unknown*

### get_gene_anatomy_associations
Returns anatomical entities associated with a gene


```js
monarchinitiative.get_gene_anatomy_associations({
  "id": ""
}, context)
```

#### Input
* input `object`
  * rows `integer`: number of rows
  * start `integer`: beginning row
  * facet `boolean`: Enable faceting
  * facet_fields `array`: Fields to facet on
  * unselect_evidence `boolean`: If true, excludes evidence objects in response
  * exclude_automatic_assertions `boolean`: If true, excludes associations that involve IEAs (ECO:0000501)
  * fetch_objects `boolean`: If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  * use_compact_associations `boolean`: If true, returns results in compact associations format
  * slim `array`: Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
  * evidence `string`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
  * direct `boolean`: Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
  * taxon `array`: One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
  * direct_taxon `boolean`: Set true to exclude inferred taxa
  * relation `string`: A relation CURIE to filter associations
  * sort `string`: Sorting responses <field> <desc,asc>
  * q `string`: Query string to filter documents
  * id **required** `string`: CURIE identifier of gene, e.g. NCBIGene:13434

#### Output
* output [AssociationResults](#associationresults)

### get_gene_case_associations
Returns cases associated with a gene


```js
monarchinitiative.get_gene_case_associations({
  "id": ""
}, context)
```

#### Input
* input `object`
  * rows `integer`: number of rows
  * start `integer`: beginning row
  * facet `boolean`: Enable faceting
  * facet_fields `array`: Fields to facet on
  * unselect_evidence `boolean`: If true, excludes evidence objects in response
  * exclude_automatic_assertions `boolean`: If true, excludes associations that involve IEAs (ECO:0000501)
  * fetch_objects `boolean`: If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  * use_compact_associations `boolean`: If true, returns results in compact associations format
  * slim `array`: Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
  * evidence `string`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
  * direct `boolean`: Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
  * id **required** `string`: CURIE identifier of gene, e.g. HGNC:613, HGNC:11025

#### Output
* output [AssociationResults](#associationresults)

### get_gene_disease_associations
Returns diseases associated with gene


```js
monarchinitiative.get_gene_disease_associations({
  "id": ""
}, context)
```

#### Input
* input `object`
  * rows `integer`: number of rows
  * start `integer`: beginning row
  * facet `boolean`: Enable faceting
  * facet_fields `array`: Fields to facet on
  * unselect_evidence `boolean`: If true, excludes evidence objects in response
  * exclude_automatic_assertions `boolean`: If true, excludes associations that involve IEAs (ECO:0000501)
  * fetch_objects `boolean`: If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  * use_compact_associations `boolean`: If true, returns results in compact associations format
  * slim `array`: Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
  * evidence `string`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
  * direct `boolean`: Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
  * taxon `array`: One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
  * direct_taxon `boolean`: Set true to exclude inferred taxa
  * relation `string`: A relation CURIE to filter associations
  * sort `string`: Sorting responses <field> <desc,asc>
  * q `string`: Query string to filter documents
  * association_type `string` (values: causal, non_causal, both): Additional filters: causal, non_causal, both
  * id **required** `string`: CURIE identifier of gene, e.g. NCBIGene:4750. Equivalent IDs can be used with same results

#### Output
* output [AssociationResults](#associationresults)

### get_gene_expression_associations
Returns expression events for a gene


```js
monarchinitiative.get_gene_expression_associations({
  "id": ""
}, context)
```

#### Input
* input `object`
  * rows `integer`: number of rows
  * start `integer`: beginning row
  * facet `boolean`: Enable faceting
  * facet_fields `array`: Fields to facet on
  * unselect_evidence `boolean`: If true, excludes evidence objects in response
  * exclude_automatic_assertions `boolean`: If true, excludes associations that involve IEAs (ECO:0000501)
  * fetch_objects `boolean`: If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  * use_compact_associations `boolean`: If true, returns results in compact associations format
  * slim `array`: Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
  * evidence `string`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
  * direct `boolean`: Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
  * taxon `array`: One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
  * direct_taxon `boolean`: Set true to exclude inferred taxa
  * relation `string`: A relation CURIE to filter associations
  * sort `string`: Sorting responses <field> <desc,asc>
  * q `string`: Query string to filter documents
  * id **required** `string`: CURIE identifier of gene, e.g. NCBIGene:4750. Equivalent IDs can be used with same results

#### Output
* output [AssociationResults](#associationresults)

### get_gene_function_associations
IMPLEMENTATION DETAILS
----------------------

Note: currently this is implemented as a query to the GO/AmiGO solr instance.
This directly supports IDs such as:

 - ZFIN e.g. ZFIN:ZDB-GENE-050417-357

Note that the AmiGO GOlr natively stores MGI annotations to MGI:MGI:nn. However,
the standard for biolink is MGI:nnnn, so you should use this (will be transparently
mapped to legacy ID)

Additionally, for some species such as Human, GO has the annotation attached to the UniProt ID.
Again, this should be transparently handled; e.g. you can use NCBIGene:6469, and this will be
mapped behind the scenes for querying.


```js
monarchinitiative.get_gene_function_associations({
  "id": ""
}, context)
```

#### Input
* input `object`
  * rows `integer`: number of rows
  * start `integer`: beginning row
  * facet `boolean`: Enable faceting
  * facet_fields `array`: Fields to facet on
  * unselect_evidence `boolean`: If true, excludes evidence objects in response
  * exclude_automatic_assertions `boolean`: If true, excludes associations that involve IEAs (ECO:0000501)
  * fetch_objects `boolean`: If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  * use_compact_associations `boolean`: If true, returns results in compact associations format
  * slim `array`: Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
  * evidence `string`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
  * direct `boolean`: Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
  * id **required** `string`: id, e.g. NCBIGene:6469. Equivalent IDs can be used with same results

#### Output
* output [AssociationResults](#associationresults)

### get_gene_genotype_associations
Returns genotypes associated with a gene


```js
monarchinitiative.get_gene_genotype_associations({
  "id": ""
}, context)
```

#### Input
* input `object`
  * rows `integer`: number of rows
  * start `integer`: beginning row
  * facet `boolean`: Enable faceting
  * facet_fields `array`: Fields to facet on
  * unselect_evidence `boolean`: If true, excludes evidence objects in response
  * exclude_automatic_assertions `boolean`: If true, excludes associations that involve IEAs (ECO:0000501)
  * fetch_objects `boolean`: If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  * use_compact_associations `boolean`: If true, returns results in compact associations format
  * slim `array`: Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
  * evidence `string`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
  * direct `boolean`: Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
  * taxon `array`: One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
  * direct_taxon `boolean`: Set true to exclude inferred taxa
  * relation `string`: A relation CURIE to filter associations
  * sort `string`: Sorting responses <field> <desc,asc>
  * q `string`: Query string to filter documents
  * id **required** `string`: CURIE identifier of gene, e.g. ZFIN:ZDB-GENE-980526-166

#### Output
* output [AssociationResults](#associationresults)

### get_gene_homolog_associations
Returns homologs for a gene


```js
monarchinitiative.get_gene_homolog_associations({
  "id": ""
}, context)
```

#### Input
* input `object`
  * rows `integer`: number of rows
  * start `integer`: beginning row
  * facet `boolean`: Enable faceting
  * facet_fields `array`: Fields to facet on
  * unselect_evidence `boolean`: If true, excludes evidence objects in response
  * exclude_automatic_assertions `boolean`: If true, excludes associations that involve IEAs (ECO:0000501)
  * fetch_objects `boolean`: If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  * use_compact_associations `boolean`: If true, returns results in compact associations format
  * slim `array`: Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
  * evidence `string`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
  * direct `boolean`: Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
  * taxon `array`: Taxon CURIE of homolog, e.g. NCBITaxon:9606 (Can be an ancestral node in the ontology; includes inferred associations by default)
  * homology_type `string` (values: P, O, LDO): P (paralog), O (Ortholog) or LDO (least-diverged ortholog)
  * direct_taxon `boolean`: Set true to exclude inferred taxa
  * id **required** `string`: id, e.g. NCBIGene:3630. Equivalent IDs can be used with same results

#### Output
* output [AssociationResults](#associationresults)

### get_gene_interactions
Returns interactions for a gene


```js
monarchinitiative.get_gene_interactions({
  "id": ""
}, context)
```

#### Input
* input `object`
  * rows `integer`: number of rows
  * start `integer`: beginning row
  * facet `boolean`: Enable faceting
  * facet_fields `array`: Fields to facet on
  * unselect_evidence `boolean`: If true, excludes evidence objects in response
  * exclude_automatic_assertions `boolean`: If true, excludes associations that involve IEAs (ECO:0000501)
  * fetch_objects `boolean`: If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  * use_compact_associations `boolean`: If true, returns results in compact associations format
  * slim `array`: Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
  * evidence `string`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
  * direct `boolean`: Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
  * taxon `array`: One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
  * direct_taxon `boolean`: Set true to exclude inferred taxa
  * relation `string`: A relation CURIE to filter associations
  * sort `string`: Sorting responses <field> <desc,asc>
  * q `string`: Query string to filter documents
  * id **required** `string`: id, e.g. NCBIGene:3630. Equivalent IDs can be used with same results

#### Output
* output [AssociationResults](#associationresults)

### get_gene_model_associations
Returns models associated with a gene


```js
monarchinitiative.get_gene_model_associations({
  "id": ""
}, context)
```

#### Input
* input `object`
  * rows `integer`: number of rows
  * start `integer`: beginning row
  * facet `boolean`: Enable faceting
  * facet_fields `array`: Fields to facet on
  * unselect_evidence `boolean`: If true, excludes evidence objects in response
  * exclude_automatic_assertions `boolean`: If true, excludes associations that involve IEAs (ECO:0000501)
  * fetch_objects `boolean`: If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  * use_compact_associations `boolean`: If true, returns results in compact associations format
  * slim `array`: Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
  * evidence `string`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
  * direct `boolean`: Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
  * taxon `array`: One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
  * direct_taxon `boolean`: Set true to exclude inferred taxa
  * relation `string`: A relation CURIE to filter associations
  * sort `string`: Sorting responses <field> <desc,asc>
  * q `string`: Query string to filter documents
  * id **required** `string`: CURIE identifier of gene, e.g. NCBIGene:17988

#### Output
* output [AssociationResults](#associationresults)

### get_gene_ortholog_disease_associations
Return diseases associated with orthologs of a gene


```js
monarchinitiative.get_gene_ortholog_disease_associations({
  "id": ""
}, context)
```

#### Input
* input `object`
  * rows `integer`: number of rows
  * start `integer`: beginning row
  * facet `boolean`: Enable faceting
  * facet_fields `array`: Fields to facet on
  * unselect_evidence `boolean`: If true, excludes evidence objects in response
  * exclude_automatic_assertions `boolean`: If true, excludes associations that involve IEAs (ECO:0000501)
  * fetch_objects `boolean`: If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  * use_compact_associations `boolean`: If true, returns results in compact associations format
  * slim `array`: Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
  * evidence `string`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
  * direct `boolean`: Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
  * taxon `array`: One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
  * direct_taxon `boolean`: Set true to exclude inferred taxa
  * relation `string`: A relation CURIE to filter associations
  * sort `string`: Sorting responses <field> <desc,asc>
  * q `string`: Query string to filter documents
  * id **required** `string`: CURIE identifier of gene, e.g. NCBIGene:4750

#### Output
* output [AssociationResults](#associationresults)

### get_gene_ortholog_phenotype_associations
Return phenotypes associated with orthologs for a gene


```js
monarchinitiative.get_gene_ortholog_phenotype_associations({
  "id": ""
}, context)
```

#### Input
* input `object`
  * rows `integer`: number of rows
  * start `integer`: beginning row
  * facet `boolean`: Enable faceting
  * facet_fields `array`: Fields to facet on
  * unselect_evidence `boolean`: If true, excludes evidence objects in response
  * exclude_automatic_assertions `boolean`: If true, excludes associations that involve IEAs (ECO:0000501)
  * fetch_objects `boolean`: If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  * use_compact_associations `boolean`: If true, returns results in compact associations format
  * slim `array`: Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
  * evidence `string`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
  * direct `boolean`: Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
  * taxon `array`: One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
  * direct_taxon `boolean`: Set true to exclude inferred taxa
  * relation `string`: A relation CURIE to filter associations
  * sort `string`: Sorting responses <field> <desc,asc>
  * q `string`: Query string to filter documents
  * id **required** `string`: CURIE identifier of gene, e.g. NCBIGene:4750

#### Output
* output [AssociationResults](#associationresults)

### get_gene_pathway_associations
Returns pathways associated with gene


```js
monarchinitiative.get_gene_pathway_associations({
  "id": ""
}, context)
```

#### Input
* input `object`
  * rows `integer`: number of rows
  * start `integer`: beginning row
  * facet `boolean`: Enable faceting
  * facet_fields `array`: Fields to facet on
  * unselect_evidence `boolean`: If true, excludes evidence objects in response
  * exclude_automatic_assertions `boolean`: If true, excludes associations that involve IEAs (ECO:0000501)
  * fetch_objects `boolean`: If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  * use_compact_associations `boolean`: If true, returns results in compact associations format
  * slim `array`: Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
  * evidence `string`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
  * direct `boolean`: Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
  * taxon `array`: One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
  * direct_taxon `boolean`: Set true to exclude inferred taxa
  * relation `string`: A relation CURIE to filter associations
  * sort `string`: Sorting responses <field> <desc,asc>
  * q `string`: Query string to filter documents
  * id **required** `string`: CURIE identifier of gene, e.g. NCBIGene:50846. Equivalent IDs can be used with same results

#### Output
* output [AssociationResults](#associationresults)

### get_gene_phenotype_associations
Returns phenotypes associated with gene


```js
monarchinitiative.get_gene_phenotype_associations({
  "id": ""
}, context)
```

#### Input
* input `object`
  * rows `integer`: number of rows
  * start `integer`: beginning row
  * facet `boolean`: Enable faceting
  * facet_fields `array`: Fields to facet on
  * unselect_evidence `boolean`: If true, excludes evidence objects in response
  * exclude_automatic_assertions `boolean`: If true, excludes associations that involve IEAs (ECO:0000501)
  * fetch_objects `boolean`: If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  * use_compact_associations `boolean`: If true, returns results in compact associations format
  * slim `array`: Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
  * evidence `string`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
  * direct `boolean`: Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
  * taxon `array`: One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
  * direct_taxon `boolean`: Set true to exclude inferred taxa
  * relation `string`: A relation CURIE to filter associations
  * sort `string`: Sorting responses <field> <desc,asc>
  * q `string`: Query string to filter documents
  * id **required** `string`: CURIE identifier of gene, e.g. NCBIGene:4750. Equivalent IDs can be used with same results

#### Output
* output [AssociationResults](#associationresults)

### get_gene_publication_associations
Returns publications associated with a gene


```js
monarchinitiative.get_gene_publication_associations({
  "id": ""
}, context)
```

#### Input
* input `object`
  * rows `integer`: number of rows
  * start `integer`: beginning row
  * facet `boolean`: Enable faceting
  * facet_fields `array`: Fields to facet on
  * unselect_evidence `boolean`: If true, excludes evidence objects in response
  * exclude_automatic_assertions `boolean`: If true, excludes associations that involve IEAs (ECO:0000501)
  * fetch_objects `boolean`: If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  * use_compact_associations `boolean`: If true, returns results in compact associations format
  * slim `array`: Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
  * evidence `string`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
  * direct `boolean`: Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
  * taxon `array`: One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
  * direct_taxon `boolean`: Set true to exclude inferred taxa
  * relation `string`: A relation CURIE to filter associations
  * sort `string`: Sorting responses <field> <desc,asc>
  * q `string`: Query string to filter documents
  * id **required** `string`: CURIE identifier of gene, e.g. NCBIGene:4750

#### Output
* output [AssociationResults](#associationresults)

### get_gene_variant_associations
Returns variants associated with a gene


```js
monarchinitiative.get_gene_variant_associations({
  "id": ""
}, context)
```

#### Input
* input `object`
  * rows `integer`: number of rows
  * start `integer`: beginning row
  * facet `boolean`: Enable faceting
  * facet_fields `array`: Fields to facet on
  * unselect_evidence `boolean`: If true, excludes evidence objects in response
  * exclude_automatic_assertions `boolean`: If true, excludes associations that involve IEAs (ECO:0000501)
  * fetch_objects `boolean`: If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  * use_compact_associations `boolean`: If true, returns results in compact associations format
  * slim `array`: Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
  * evidence `string`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
  * direct `boolean`: Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
  * taxon `array`: One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
  * direct_taxon `boolean`: Set true to exclude inferred taxa
  * relation `string`: A relation CURIE to filter associations
  * sort `string`: Sorting responses <field> <desc,asc>
  * q `string`: Query string to filter documents
  * id **required** `string`: CURIE identifier of gene, e.g. HGNC:10896

#### Output
* output [AssociationResults](#associationresults)

### get_genotype_case_associations
Returns cases associated with a genotype


```js
monarchinitiative.get_genotype_case_associations({
  "id": ""
}, context)
```

#### Input
* input `object`
  * rows `integer`: number of rows
  * start `integer`: beginning row
  * facet `boolean`: Enable faceting
  * facet_fields `array`: Fields to facet on
  * unselect_evidence `boolean`: If true, excludes evidence objects in response
  * exclude_automatic_assertions `boolean`: If true, excludes associations that involve IEAs (ECO:0000501)
  * fetch_objects `boolean`: If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  * use_compact_associations `boolean`: If true, returns results in compact associations format
  * slim `array`: Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
  * evidence `string`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
  * direct `boolean`: Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
  * id **required** `string`: CURIE identifier of genotype, e.g. dbSNPIndividual:10440, dbSNPIndividual:22633

#### Output
* output [AssociationResults](#associationresults)

### get_genotype_disease_associations
Returns diseases associated with a genotype


```js
monarchinitiative.get_genotype_disease_associations({
  "id": ""
}, context)
```

#### Input
* input `object`
  * rows `integer`: number of rows
  * start `integer`: beginning row
  * facet `boolean`: Enable faceting
  * facet_fields `array`: Fields to facet on
  * unselect_evidence `boolean`: If true, excludes evidence objects in response
  * exclude_automatic_assertions `boolean`: If true, excludes associations that involve IEAs (ECO:0000501)
  * fetch_objects `boolean`: If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  * use_compact_associations `boolean`: If true, returns results in compact associations format
  * slim `array`: Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
  * evidence `string`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
  * direct `boolean`: Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
  * taxon `array`: One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
  * direct_taxon `boolean`: Set true to exclude inferred taxa
  * relation `string`: A relation CURIE to filter associations
  * sort `string`: Sorting responses <field> <desc,asc>
  * q `string`: Query string to filter documents
  * id **required** `string`: CURIE identifier of genotype, e.g. dbSNPIndividual:11441 (if non-human will return models)

#### Output
* output [AssociationResults](#associationresults)

### get_genotype_gene_associations
Returns genes associated with a genotype


```js
monarchinitiative.get_genotype_gene_associations({
  "id": ""
}, context)
```

#### Input
* input `object`
  * rows `integer`: number of rows
  * start `integer`: beginning row
  * facet `boolean`: Enable faceting
  * facet_fields `array`: Fields to facet on
  * unselect_evidence `boolean`: If true, excludes evidence objects in response
  * exclude_automatic_assertions `boolean`: If true, excludes associations that involve IEAs (ECO:0000501)
  * fetch_objects `boolean`: If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  * use_compact_associations `boolean`: If true, returns results in compact associations format
  * slim `array`: Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
  * evidence `string`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
  * direct `boolean`: Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
  * taxon `array`: One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
  * direct_taxon `boolean`: Set true to exclude inferred taxa
  * relation `string`: A relation CURIE to filter associations
  * sort `string`: Sorting responses <field> <desc,asc>
  * q `string`: Query string to filter documents
  * id **required** `string`: CURIE identifier of genotype, e.g. ZFIN:ZDB-FISH-150901-6607

#### Output
* output [AssociationResults](#associationresults)

### get_genotype_genotype_associations
Genotypes may be related to one another according to the GENO model


```js
monarchinitiative.get_genotype_genotype_associations({
  "id": ""
}, context)
```

#### Input
* input `object`
  * rows `integer`: number of rows
  * start `integer`: beginning row
  * facet `boolean`: Enable faceting
  * facet_fields `array`: Fields to facet on
  * unselect_evidence `boolean`: If true, excludes evidence objects in response
  * exclude_automatic_assertions `boolean`: If true, excludes associations that involve IEAs (ECO:0000501)
  * fetch_objects `boolean`: If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  * use_compact_associations `boolean`: If true, returns results in compact associations format
  * slim `array`: Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
  * evidence `string`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
  * direct `boolean`: Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
  * taxon `array`: One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
  * direct_taxon `boolean`: Set true to exclude inferred taxa
  * relation `string`: A relation CURIE to filter associations
  * sort `string`: Sorting responses <field> <desc,asc>
  * q `string`: Query string to filter documents
  * id **required** `string`: CURIE identifier of genotype, e.g. ZFIN:ZDB-FISH-150901-6607

#### Output
* output [AssociationResults](#associationresults)

### get_genotype_model_associations
Returns models associated with a genotype


```js
monarchinitiative.get_genotype_model_associations({
  "id": ""
}, context)
```

#### Input
* input `object`
  * rows `integer`: number of rows
  * start `integer`: beginning row
  * facet `boolean`: Enable faceting
  * facet_fields `array`: Fields to facet on
  * unselect_evidence `boolean`: If true, excludes evidence objects in response
  * exclude_automatic_assertions `boolean`: If true, excludes associations that involve IEAs (ECO:0000501)
  * fetch_objects `boolean`: If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  * use_compact_associations `boolean`: If true, returns results in compact associations format
  * slim `array`: Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
  * evidence `string`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
  * direct `boolean`: Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
  * taxon `array`: One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
  * direct_taxon `boolean`: Set true to exclude inferred taxa
  * relation `string`: A relation CURIE to filter associations
  * sort `string`: Sorting responses <field> <desc,asc>
  * q `string`: Query string to filter documents
  * id **required** `string`: CURIE identifier of genotype, e.g. ZFIN:ZDB-FISH-150901-6607

#### Output
* output [AssociationResults](#associationresults)

### get_genotype_phenotype_associations
Returns phenotypes associated with a genotype


```js
monarchinitiative.get_genotype_phenotype_associations({
  "id": ""
}, context)
```

#### Input
* input `object`
  * rows `integer`: number of rows
  * start `integer`: beginning row
  * facet `boolean`: Enable faceting
  * facet_fields `array`: Fields to facet on
  * unselect_evidence `boolean`: If true, excludes evidence objects in response
  * exclude_automatic_assertions `boolean`: If true, excludes associations that involve IEAs (ECO:0000501)
  * fetch_objects `boolean`: If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  * use_compact_associations `boolean`: If true, returns results in compact associations format
  * slim `array`: Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
  * evidence `string`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
  * direct `boolean`: Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
  * taxon `array`: One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
  * direct_taxon `boolean`: Set true to exclude inferred taxa
  * relation `string`: A relation CURIE to filter associations
  * sort `string`: Sorting responses <field> <desc,asc>
  * q `string`: Query string to filter documents
  * id **required** `string`: CURIE identifier of genotype, e.g. ZFIN:ZDB-FISH-150901-4286

#### Output
* output [AssociationResults](#associationresults)

### get_genotype_publication_associations
Returns publications associated with a genotype


```js
monarchinitiative.get_genotype_publication_associations({
  "id": ""
}, context)
```

#### Input
* input `object`
  * rows `integer`: number of rows
  * start `integer`: beginning row
  * facet `boolean`: Enable faceting
  * facet_fields `array`: Fields to facet on
  * unselect_evidence `boolean`: If true, excludes evidence objects in response
  * exclude_automatic_assertions `boolean`: If true, excludes associations that involve IEAs (ECO:0000501)
  * fetch_objects `boolean`: If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  * use_compact_associations `boolean`: If true, returns results in compact associations format
  * slim `array`: Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
  * evidence `string`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
  * direct `boolean`: Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
  * taxon `array`: One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
  * direct_taxon `boolean`: Set true to exclude inferred taxa
  * relation `string`: A relation CURIE to filter associations
  * sort `string`: Sorting responses <field> <desc,asc>
  * q `string`: Query string to filter documents
  * id **required** `string`: CURIE identifier of genotype, e.g. ZFIN:ZDB-FISH-150901-6607

#### Output
* output [AssociationResults](#associationresults)

### get_genotype_variant_associations
Returns genotypes-variant associations


```js
monarchinitiative.get_genotype_variant_associations({
  "id": ""
}, context)
```

#### Input
* input `object`
  * rows `integer`: number of rows
  * start `integer`: beginning row
  * facet `boolean`: Enable faceting
  * facet_fields `array`: Fields to facet on
  * unselect_evidence `boolean`: If true, excludes evidence objects in response
  * exclude_automatic_assertions `boolean`: If true, excludes associations that involve IEAs (ECO:0000501)
  * fetch_objects `boolean`: If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  * use_compact_associations `boolean`: If true, returns results in compact associations format
  * slim `array`: Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
  * evidence `string`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
  * direct `boolean`: Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
  * taxon `array`: One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
  * direct_taxon `boolean`: Set true to exclude inferred taxa
  * relation `string`: A relation CURIE to filter associations
  * sort `string`: Sorting responses <field> <desc,asc>
  * q `string`: Query string to filter documents
  * id **required** `string`: CURIE identifier of genotype, e.g. MONARCH:FBgeno422705

#### Output
* output [AssociationResults](#associationresults)

### get_goterm_gene_associations
Returns associations to GO terms for a gene


```js
monarchinitiative.get_goterm_gene_associations({
  "id": ""
}, context)
```

#### Input
* input `object`
  * rows `integer`: number of rows
  * start `integer`: beginning row
  * facet `boolean`: Enable faceting
  * facet_fields `array`: Fields to facet on
  * unselect_evidence `boolean`: If true, excludes evidence objects in response
  * exclude_automatic_assertions `boolean`: If true, excludes associations that involve IEAs (ECO:0000501)
  * fetch_objects `boolean`: If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  * use_compact_associations `boolean`: If true, returns results in compact associations format
  * slim `array`: Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
  * evidence `string`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
  * direct `boolean`: Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
  * relationship_type `string` (values: involved_in, involved_in_regulation_of, acts_upstream_of_or_within): relationship type ('involved_in', 'involved_in_regulation_of' or 'acts_upstream_of_or_within')
  * id **required** `string`: CURIE identifier of a GO term, e.g. GO:0044598

#### Output
* output [AssociationResults](#associationresults)

### get_model_case_associations
Returns cases associated with a model


```js
monarchinitiative.get_model_case_associations({
  "id": ""
}, context)
```

#### Input
* input `object`
  * rows `integer`: number of rows
  * start `integer`: beginning row
  * facet `boolean`: Enable faceting
  * facet_fields `array`: Fields to facet on
  * unselect_evidence `boolean`: If true, excludes evidence objects in response
  * exclude_automatic_assertions `boolean`: If true, excludes associations that involve IEAs (ECO:0000501)
  * fetch_objects `boolean`: If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  * use_compact_associations `boolean`: If true, returns results in compact associations format
  * slim `array`: Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
  * evidence `string`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
  * direct `boolean`: Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
  * id **required** `string`: CURIE identifier for a model, e.g. Coriell:GM22295, Coriell:HG02187

#### Output
* output [AssociationResults](#associationresults)

### get_model_disease_associations
Returns diseases associated with a model


```js
monarchinitiative.get_model_disease_associations({
  "id": ""
}, context)
```

#### Input
* input `object`
  * rows `integer`: number of rows
  * start `integer`: beginning row
  * facet `boolean`: Enable faceting
  * facet_fields `array`: Fields to facet on
  * unselect_evidence `boolean`: If true, excludes evidence objects in response
  * exclude_automatic_assertions `boolean`: If true, excludes associations that involve IEAs (ECO:0000501)
  * fetch_objects `boolean`: If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  * use_compact_associations `boolean`: If true, returns results in compact associations format
  * slim `array`: Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
  * evidence `string`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
  * direct `boolean`: Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
  * taxon `array`: One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
  * direct_taxon `boolean`: Set true to exclude inferred taxa
  * relation `string`: A relation CURIE to filter associations
  * sort `string`: Sorting responses <field> <desc,asc>
  * q `string`: Query string to filter documents
  * id **required** `string`: CURIE identifier for a model, e.g. MGI:5573196

#### Output
* output [AssociationResults](#associationresults)

### get_model_gene_associations
Returns genes associated with a model


```js
monarchinitiative.get_model_gene_associations({
  "id": ""
}, context)
```

#### Input
* input `object`
  * rows `integer`: number of rows
  * start `integer`: beginning row
  * facet `boolean`: Enable faceting
  * facet_fields `array`: Fields to facet on
  * unselect_evidence `boolean`: If true, excludes evidence objects in response
  * exclude_automatic_assertions `boolean`: If true, excludes associations that involve IEAs (ECO:0000501)
  * fetch_objects `boolean`: If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  * use_compact_associations `boolean`: If true, returns results in compact associations format
  * slim `array`: Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
  * evidence `string`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
  * direct `boolean`: Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
  * taxon `array`: One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
  * direct_taxon `boolean`: Set true to exclude inferred taxa
  * relation `string`: A relation CURIE to filter associations
  * sort `string`: Sorting responses <field> <desc,asc>
  * q `string`: Query string to filter documents
  * id **required** `string`: CURIE identifier for a model, e.g. MMRRC:042787

#### Output
* output [AssociationResults](#associationresults)

### get_model_genotype_associations
Returns genotypes associated with a model


```js
monarchinitiative.get_model_genotype_associations({
  "id": ""
}, context)
```

#### Input
* input `object`
  * rows `integer`: number of rows
  * start `integer`: beginning row
  * facet `boolean`: Enable faceting
  * facet_fields `array`: Fields to facet on
  * unselect_evidence `boolean`: If true, excludes evidence objects in response
  * exclude_automatic_assertions `boolean`: If true, excludes associations that involve IEAs (ECO:0000501)
  * fetch_objects `boolean`: If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  * use_compact_associations `boolean`: If true, returns results in compact associations format
  * slim `array`: Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
  * evidence `string`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
  * direct `boolean`: Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
  * taxon `array`: One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
  * direct_taxon `boolean`: Set true to exclude inferred taxa
  * relation `string`: A relation CURIE to filter associations
  * sort `string`: Sorting responses <field> <desc,asc>
  * q `string`: Query string to filter documents
  * id **required** `string`: CURIE identifier for a model, e.g. Coriell:NA16660

#### Output
* output [AssociationResults](#associationresults)

### get_model_phenotype_associations
Returns phenotypes associated with a model


```js
monarchinitiative.get_model_phenotype_associations({
  "id": ""
}, context)
```

#### Input
* input `object`
  * rows `integer`: number of rows
  * start `integer`: beginning row
  * facet `boolean`: Enable faceting
  * facet_fields `array`: Fields to facet on
  * unselect_evidence `boolean`: If true, excludes evidence objects in response
  * exclude_automatic_assertions `boolean`: If true, excludes associations that involve IEAs (ECO:0000501)
  * fetch_objects `boolean`: If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  * use_compact_associations `boolean`: If true, returns results in compact associations format
  * slim `array`: Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
  * evidence `string`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
  * direct `boolean`: Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
  * taxon `array`: One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
  * direct_taxon `boolean`: Set true to exclude inferred taxa
  * relation `string`: A relation CURIE to filter associations
  * sort `string`: Sorting responses <field> <desc,asc>
  * q `string`: Query string to filter documents
  * id **required** `string`: id

#### Output
* output [AssociationResults](#associationresults)

### get_model_publication_associations
Returns publications associated with a model


```js
monarchinitiative.get_model_publication_associations({
  "id": ""
}, context)
```

#### Input
* input `object`
  * rows `integer`: number of rows
  * start `integer`: beginning row
  * facet `boolean`: Enable faceting
  * facet_fields `array`: Fields to facet on
  * unselect_evidence `boolean`: If true, excludes evidence objects in response
  * exclude_automatic_assertions `boolean`: If true, excludes associations that involve IEAs (ECO:0000501)
  * fetch_objects `boolean`: If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  * use_compact_associations `boolean`: If true, returns results in compact associations format
  * slim `array`: Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
  * evidence `string`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
  * direct `boolean`: Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
  * taxon `array`: One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
  * direct_taxon `boolean`: Set true to exclude inferred taxa
  * relation `string`: A relation CURIE to filter associations
  * sort `string`: Sorting responses <field> <desc,asc>
  * q `string`: Query string to filter documents
  * id **required** `string`: CURIE identifier for a model, e.g. MGI:5644542

#### Output
* output [AssociationResults](#associationresults)

### get_model_variant_associations
Returns variants associated with a model


```js
monarchinitiative.get_model_variant_associations({
  "id": ""
}, context)
```

#### Input
* input `object`
  * rows `integer`: number of rows
  * start `integer`: beginning row
  * facet `boolean`: Enable faceting
  * facet_fields `array`: Fields to facet on
  * unselect_evidence `boolean`: If true, excludes evidence objects in response
  * exclude_automatic_assertions `boolean`: If true, excludes associations that involve IEAs (ECO:0000501)
  * fetch_objects `boolean`: If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  * use_compact_associations `boolean`: If true, returns results in compact associations format
  * slim `array`: Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
  * evidence `string`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
  * direct `boolean`: Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
  * taxon `array`: One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
  * direct_taxon `boolean`: Set true to exclude inferred taxa
  * relation `string`: A relation CURIE to filter associations
  * sort `string`: Sorting responses <field> <desc,asc>
  * q `string`: Query string to filter documents
  * id **required** `string`: CURIE identifier for a model, e.g. MMRRC:042787

#### Output
* output [AssociationResults](#associationresults)

### get_pathway_disease_associations
Returns diseases associated with a pathway


```js
monarchinitiative.get_pathway_disease_associations({
  "id": ""
}, context)
```

#### Input
* input `object`
  * rows `integer`: number of rows
  * start `integer`: beginning row
  * facet `boolean`: Enable faceting
  * facet_fields `array`: Fields to facet on
  * unselect_evidence `boolean`: If true, excludes evidence objects in response
  * exclude_automatic_assertions `boolean`: If true, excludes associations that involve IEAs (ECO:0000501)
  * fetch_objects `boolean`: If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  * use_compact_associations `boolean`: If true, returns results in compact associations format
  * slim `array`: Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
  * evidence `string`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
  * direct `boolean`: Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
  * taxon `array`: One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
  * direct_taxon `boolean`: Set true to exclude inferred taxa
  * relation `string`: A relation CURIE to filter associations
  * sort `string`: Sorting responses <field> <desc,asc>
  * q `string`: Query string to filter documents
  * id **required** `string`: CURIE any pathway element. E.g. REACT:R-HSA-5387390

#### Output
* output [AssociationResults](#associationresults)

### get_pathway_gene_associations
Returns genes associated with a pathway


```js
monarchinitiative.get_pathway_gene_associations({
  "id": ""
}, context)
```

#### Input
* input `object`
  * rows `integer`: number of rows
  * start `integer`: beginning row
  * facet `boolean`: Enable faceting
  * facet_fields `array`: Fields to facet on
  * unselect_evidence `boolean`: If true, excludes evidence objects in response
  * exclude_automatic_assertions `boolean`: If true, excludes associations that involve IEAs (ECO:0000501)
  * fetch_objects `boolean`: If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  * use_compact_associations `boolean`: If true, returns results in compact associations format
  * slim `array`: Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
  * evidence `string`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
  * direct `boolean`: Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
  * taxon `array`: One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
  * direct_taxon `boolean`: Set true to exclude inferred taxa
  * relation `string`: A relation CURIE to filter associations
  * sort `string`: Sorting responses <field> <desc,asc>
  * q `string`: Query string to filter documents
  * id **required** `string`: CURIE any pathway element. E.g. REACT:R-HSA-5387390

#### Output
* output [AssociationResults](#associationresults)

### get_pathway_phenotype_associations
Returns phenotypes associated with a pathway


```js
monarchinitiative.get_pathway_phenotype_associations({
  "id": ""
}, context)
```

#### Input
* input `object`
  * rows `integer`: number of rows
  * start `integer`: beginning row
  * facet `boolean`: Enable faceting
  * facet_fields `array`: Fields to facet on
  * unselect_evidence `boolean`: If true, excludes evidence objects in response
  * exclude_automatic_assertions `boolean`: If true, excludes associations that involve IEAs (ECO:0000501)
  * fetch_objects `boolean`: If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  * use_compact_associations `boolean`: If true, returns results in compact associations format
  * slim `array`: Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
  * evidence `string`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
  * direct `boolean`: Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
  * taxon `array`: One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
  * direct_taxon `boolean`: Set true to exclude inferred taxa
  * relation `string`: A relation CURIE to filter associations
  * sort `string`: Sorting responses <field> <desc,asc>
  * q `string`: Query string to filter documents
  * id **required** `string`: CURIE any pathway element. E.g. REACT:R-HSA-5387390

#### Output
* output [AssociationResults](#associationresults)

### get_phenotype_anatomy_associations
Example IDs:

 * MP:0008521 abnormal Bowman membrane


```js
monarchinitiative.get_phenotype_anatomy_associations({
  "id": ""
}, context)
```

#### Input
* input `object`
  * rows `integer`: number of rows
  * start `integer`: beginning row
  * facet `boolean`: Enable faceting
  * facet_fields `array`: Fields to facet on
  * unselect_evidence `boolean`: If true, excludes evidence objects in response
  * exclude_automatic_assertions `boolean`: If true, excludes associations that involve IEAs (ECO:0000501)
  * fetch_objects `boolean`: If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  * use_compact_associations `boolean`: If true, returns results in compact associations format
  * slim `array`: Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
  * evidence `string`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
  * direct `boolean`: Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
  * id **required** `string`: CURIE identifier of phenotype, e.g. MP:0008521. Equivalent IDs can be used with same results

#### Output
* output `array`
  * items [NamedObject](#namedobject)

### get_phenotype_case_associations
Returns cases associated with a phenotype


```js
monarchinitiative.get_phenotype_case_associations({
  "id": ""
}, context)
```

#### Input
* input `object`
  * rows `integer`: number of rows
  * start `integer`: beginning row
  * facet `boolean`: Enable faceting
  * facet_fields `array`: Fields to facet on
  * unselect_evidence `boolean`: If true, excludes evidence objects in response
  * exclude_automatic_assertions `boolean`: If true, excludes associations that involve IEAs (ECO:0000501)
  * fetch_objects `boolean`: If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  * use_compact_associations `boolean`: If true, returns results in compact associations format
  * slim `array`: Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
  * evidence `string`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
  * direct `boolean`: Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
  * id **required** `string`: Pheno class CURIE identifier, e.g  HP:0011951 (Aspiration pneumonia), HP:0002450 (Abnormal motor neuron morphology)

#### Output
* output [AssociationResults](#associationresults)

### get_phenotype_disease_associations
Returns diseases associated with a phenotype


```js
monarchinitiative.get_phenotype_disease_associations({
  "id": ""
}, context)
```

#### Input
* input `object`
  * rows `integer`: number of rows
  * start `integer`: beginning row
  * facet `boolean`: Enable faceting
  * facet_fields `array`: Fields to facet on
  * unselect_evidence `boolean`: If true, excludes evidence objects in response
  * exclude_automatic_assertions `boolean`: If true, excludes associations that involve IEAs (ECO:0000501)
  * fetch_objects `boolean`: If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  * use_compact_associations `boolean`: If true, returns results in compact associations format
  * slim `array`: Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
  * evidence `string`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
  * direct `boolean`: Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
  * taxon `array`: One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
  * direct_taxon `boolean`: Set true to exclude inferred taxa
  * relation `string`: A relation CURIE to filter associations
  * sort `string`: Sorting responses <field> <desc,asc>
  * q `string`: Query string to filter documents
  * id **required** `string`: CURIE identifier of phenotype, e.g. HP:0007359. Equivalent IDs can be used with same results

#### Output
* output [D2PAssociationResults](#d2passociationresults)

### get_phenotype_gene_by_taxon_associations
For example, MP:0001569 + NCBITaxon:10090 (mouse)


```js
monarchinitiative.get_phenotype_gene_by_taxon_associations({
  "taxid": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * rows `integer`: number of rows
  * start `integer`: beginning row
  * facet `boolean`: Enable faceting
  * facet_fields `array`: Fields to facet on
  * unselect_evidence `boolean`: If true, excludes evidence objects in response
  * exclude_automatic_assertions `boolean`: If true, excludes associations that involve IEAs (ECO:0000501)
  * fetch_objects `boolean`: If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  * use_compact_associations `boolean`: If true, returns results in compact associations format
  * slim `array`: Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
  * evidence `string`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
  * direct `boolean`: Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
  * taxid **required** `string`: Species or high level taxon grouping, e.g  NCBITaxon:10090 (Mus musculus)
  * id **required** `string`: Pheno class CURIE identifier, e.g  MP:0001569 (abnormal circulating bilirubin level)

#### Output
*Output schema unknown*

### get_phenotype_gene_associations
Returns genes associated with a phenotype


```js
monarchinitiative.get_phenotype_gene_associations({
  "id": ""
}, context)
```

#### Input
* input `object`
  * rows `integer`: number of rows
  * start `integer`: beginning row
  * facet `boolean`: Enable faceting
  * facet_fields `array`: Fields to facet on
  * unselect_evidence `boolean`: If true, excludes evidence objects in response
  * exclude_automatic_assertions `boolean`: If true, excludes associations that involve IEAs (ECO:0000501)
  * fetch_objects `boolean`: If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  * use_compact_associations `boolean`: If true, returns results in compact associations format
  * slim `array`: Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
  * evidence `string`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
  * direct `boolean`: Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
  * taxon `array`: One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
  * direct_taxon `boolean`: Set true to exclude inferred taxa
  * relation `string`: A relation CURIE to filter associations
  * sort `string`: Sorting responses <field> <desc,asc>
  * q `string`: Query string to filter documents
  * id **required** `string`: Pheno class CURIE identifier, e.g  WBPhenotype:0000180 (axon morphology variant), MP:0001569 (abnormal circulating bilirubin level), 

#### Output
* output [AssociationResults](#associationresults)

### get_phenotype_genotype_associations
Returns genotypes associated with a phenotype


```js
monarchinitiative.get_phenotype_genotype_associations({
  "id": ""
}, context)
```

#### Input
* input `object`
  * rows `integer`: number of rows
  * start `integer`: beginning row
  * facet `boolean`: Enable faceting
  * facet_fields `array`: Fields to facet on
  * unselect_evidence `boolean`: If true, excludes evidence objects in response
  * exclude_automatic_assertions `boolean`: If true, excludes associations that involve IEAs (ECO:0000501)
  * fetch_objects `boolean`: If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  * use_compact_associations `boolean`: If true, returns results in compact associations format
  * slim `array`: Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
  * evidence `string`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
  * direct `boolean`: Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
  * taxon `array`: One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
  * direct_taxon `boolean`: Set true to exclude inferred taxa
  * relation `string`: A relation CURIE to filter associations
  * sort `string`: Sorting responses <field> <desc,asc>
  * q `string`: Query string to filter documents
  * id **required** `string`: Pheno class CURIE identifier, e.g  WBPhenotype:0000180 (axon morphology variant), MP:0001569 (abnormal circulating bilirubin level)

#### Output
* output [AssociationResults](#associationresults)

### get_phenotype_pathway_associations
Returns pathways associated with a phenotype


```js
monarchinitiative.get_phenotype_pathway_associations({
  "id": ""
}, context)
```

#### Input
* input `object`
  * rows `integer`: number of rows
  * start `integer`: beginning row
  * facet `boolean`: Enable faceting
  * facet_fields `array`: Fields to facet on
  * unselect_evidence `boolean`: If true, excludes evidence objects in response
  * exclude_automatic_assertions `boolean`: If true, excludes associations that involve IEAs (ECO:0000501)
  * fetch_objects `boolean`: If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  * use_compact_associations `boolean`: If true, returns results in compact associations format
  * slim `array`: Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
  * evidence `string`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
  * direct `boolean`: Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
  * taxon `array`: One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
  * direct_taxon `boolean`: Set true to exclude inferred taxa
  * relation `string`: A relation CURIE to filter associations
  * sort `string`: Sorting responses <field> <desc,asc>
  * q `string`: Query string to filter documents
  * id **required** `string`: Pheno class CURIE identifier, e.g  MP:0001569 (abnormal circulating bilirubin level)

#### Output
* output [AssociationResults](#associationresults)

### get_phenotype_publication_associations
Returns publications associated with a phenotype


```js
monarchinitiative.get_phenotype_publication_associations({
  "id": ""
}, context)
```

#### Input
* input `object`
  * rows `integer`: number of rows
  * start `integer`: beginning row
  * facet `boolean`: Enable faceting
  * facet_fields `array`: Fields to facet on
  * unselect_evidence `boolean`: If true, excludes evidence objects in response
  * exclude_automatic_assertions `boolean`: If true, excludes associations that involve IEAs (ECO:0000501)
  * fetch_objects `boolean`: If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  * use_compact_associations `boolean`: If true, returns results in compact associations format
  * slim `array`: Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
  * evidence `string`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
  * direct `boolean`: Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
  * taxon `array`: One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
  * direct_taxon `boolean`: Set true to exclude inferred taxa
  * relation `string`: A relation CURIE to filter associations
  * sort `string`: Sorting responses <field> <desc,asc>
  * q `string`: Query string to filter documents
  * id **required** `string`: Pheno class CURIE identifier, e.g  WBPhenotype:0000180 (axon morphology variant), MP:0001569 (abnormal circulating bilirubin level)

#### Output
* output [AssociationResults](#associationresults)

### get_phenotype_variant_associations
Returns variants associated with a phenotype


```js
monarchinitiative.get_phenotype_variant_associations({
  "id": ""
}, context)
```

#### Input
* input `object`
  * rows `integer`: number of rows
  * start `integer`: beginning row
  * facet `boolean`: Enable faceting
  * facet_fields `array`: Fields to facet on
  * unselect_evidence `boolean`: If true, excludes evidence objects in response
  * exclude_automatic_assertions `boolean`: If true, excludes associations that involve IEAs (ECO:0000501)
  * fetch_objects `boolean`: If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  * use_compact_associations `boolean`: If true, returns results in compact associations format
  * slim `array`: Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
  * evidence `string`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
  * direct `boolean`: Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
  * taxon `array`: One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
  * direct_taxon `boolean`: Set true to exclude inferred taxa
  * relation `string`: A relation CURIE to filter associations
  * sort `string`: Sorting responses <field> <desc,asc>
  * q `string`: Query string to filter documents
  * id **required** `string`: Pheno class CURIE identifier, e.g  WBPhenotype:0000180 (axon morphology variant), MP:0001569 (abnormal circulating bilirubin level)

#### Output
* output [AssociationResults](#associationresults)

### get_publication_disease_associations
Returns diseases associated with a publication


```js
monarchinitiative.get_publication_disease_associations({
  "id": ""
}, context)
```

#### Input
* input `object`
  * rows `integer`: number of rows
  * start `integer`: beginning row
  * facet `boolean`: Enable faceting
  * facet_fields `array`: Fields to facet on
  * unselect_evidence `boolean`: If true, excludes evidence objects in response
  * exclude_automatic_assertions `boolean`: If true, excludes associations that involve IEAs (ECO:0000501)
  * fetch_objects `boolean`: If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  * use_compact_associations `boolean`: If true, returns results in compact associations format
  * slim `array`: Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
  * evidence `string`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
  * direct `boolean`: Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
  * taxon `array`: One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
  * direct_taxon `boolean`: Set true to exclude inferred taxa
  * relation `string`: A relation CURIE to filter associations
  * sort `string`: Sorting responses <field> <desc,asc>
  * q `string`: Query string to filter documents
  * id **required** `string`: CURIE identifier for a publication, e.g. PMID:11751940

#### Output
* output [AssociationResults](#associationresults)

### get_publication_gene_associations
Returns genes associated with a publication


```js
monarchinitiative.get_publication_gene_associations({
  "id": ""
}, context)
```

#### Input
* input `object`
  * rows `integer`: number of rows
  * start `integer`: beginning row
  * facet `boolean`: Enable faceting
  * facet_fields `array`: Fields to facet on
  * unselect_evidence `boolean`: If true, excludes evidence objects in response
  * exclude_automatic_assertions `boolean`: If true, excludes associations that involve IEAs (ECO:0000501)
  * fetch_objects `boolean`: If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  * use_compact_associations `boolean`: If true, returns results in compact associations format
  * slim `array`: Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
  * evidence `string`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
  * direct `boolean`: Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
  * taxon `array`: One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
  * direct_taxon `boolean`: Set true to exclude inferred taxa
  * relation `string`: A relation CURIE to filter associations
  * sort `string`: Sorting responses <field> <desc,asc>
  * q `string`: Query string to filter documents
  * id **required** `string`: CURIE identifier for a publication, e.g. PMID:11751940

#### Output
* output [AssociationResults](#associationresults)

### get_publication_genotype_associations
Returns genotypes associated with a publication


```js
monarchinitiative.get_publication_genotype_associations({
  "id": ""
}, context)
```

#### Input
* input `object`
  * rows `integer`: number of rows
  * start `integer`: beginning row
  * facet `boolean`: Enable faceting
  * facet_fields `array`: Fields to facet on
  * unselect_evidence `boolean`: If true, excludes evidence objects in response
  * exclude_automatic_assertions `boolean`: If true, excludes associations that involve IEAs (ECO:0000501)
  * fetch_objects `boolean`: If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  * use_compact_associations `boolean`: If true, returns results in compact associations format
  * slim `array`: Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
  * evidence `string`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
  * direct `boolean`: Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
  * taxon `array`: One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
  * direct_taxon `boolean`: Set true to exclude inferred taxa
  * relation `string`: A relation CURIE to filter associations
  * sort `string`: Sorting responses <field> <desc,asc>
  * q `string`: Query string to filter documents
  * id **required** `string`: CURIE identifier for a publication, e.g. PMID:11751940

#### Output
* output [AssociationResults](#associationresults)

### get_publication_model_associations
Returns models associated with a publication


```js
monarchinitiative.get_publication_model_associations({
  "id": ""
}, context)
```

#### Input
* input `object`
  * rows `integer`: number of rows
  * start `integer`: beginning row
  * facet `boolean`: Enable faceting
  * facet_fields `array`: Fields to facet on
  * unselect_evidence `boolean`: If true, excludes evidence objects in response
  * exclude_automatic_assertions `boolean`: If true, excludes associations that involve IEAs (ECO:0000501)
  * fetch_objects `boolean`: If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  * use_compact_associations `boolean`: If true, returns results in compact associations format
  * slim `array`: Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
  * evidence `string`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
  * direct `boolean`: Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
  * taxon `array`: One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
  * direct_taxon `boolean`: Set true to exclude inferred taxa
  * relation `string`: A relation CURIE to filter associations
  * sort `string`: Sorting responses <field> <desc,asc>
  * q `string`: Query string to filter documents
  * id **required** `string`: CURIE identifier for a publication, e.g. PMID:11751940

#### Output
* output [AssociationResults](#associationresults)

### get_publication_phenotype_associations
Returns phenotypes associated with a publication


```js
monarchinitiative.get_publication_phenotype_associations({
  "id": ""
}, context)
```

#### Input
* input `object`
  * rows `integer`: number of rows
  * start `integer`: beginning row
  * facet `boolean`: Enable faceting
  * facet_fields `array`: Fields to facet on
  * unselect_evidence `boolean`: If true, excludes evidence objects in response
  * exclude_automatic_assertions `boolean`: If true, excludes associations that involve IEAs (ECO:0000501)
  * fetch_objects `boolean`: If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  * use_compact_associations `boolean`: If true, returns results in compact associations format
  * slim `array`: Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
  * evidence `string`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
  * direct `boolean`: Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
  * taxon `array`: One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
  * direct_taxon `boolean`: Set true to exclude inferred taxa
  * relation `string`: A relation CURIE to filter associations
  * sort `string`: Sorting responses <field> <desc,asc>
  * q `string`: Query string to filter documents
  * id **required** `string`: CURIE identifier for a publication, e.g. PMID:11751940

#### Output
* output [AssociationResults](#associationresults)

### get_publication_variant_associations
Returns variants associated with a publication


```js
monarchinitiative.get_publication_variant_associations({
  "id": ""
}, context)
```

#### Input
* input `object`
  * rows `integer`: number of rows
  * start `integer`: beginning row
  * facet `boolean`: Enable faceting
  * facet_fields `array`: Fields to facet on
  * unselect_evidence `boolean`: If true, excludes evidence objects in response
  * exclude_automatic_assertions `boolean`: If true, excludes associations that involve IEAs (ECO:0000501)
  * fetch_objects `boolean`: If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  * use_compact_associations `boolean`: If true, returns results in compact associations format
  * slim `array`: Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
  * evidence `string`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
  * direct `boolean`: Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
  * taxon `array`: One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
  * direct_taxon `boolean`: Set true to exclude inferred taxa
  * relation `string`: A relation CURIE to filter associations
  * sort `string`: Sorting responses <field> <desc,asc>
  * q `string`: Query string to filter documents
  * id **required** `string`: CURIE identifier for a publication, e.g. PMID:11751940

#### Output
* output [AssociationResults](#associationresults)

### get_substance_participant_in_associations
Examples relationships:

 * substance is a metabolite of a process
 * substance is synthesized by a process
 * substance is modified by an activity
 * substance elicits a response program/pathway
 * substance is transported by activity or pathway

For example, CHEBI:40036 (amitrole)


```js
monarchinitiative.get_substance_participant_in_associations({
  "id": ""
}, context)
```

#### Input
* input `object`
  * rows `integer`: number of rows
  * start `integer`: beginning row
  * facet `boolean`: Enable faceting
  * facet_fields `array`: Fields to facet on
  * unselect_evidence `boolean`: If true, excludes evidence objects in response
  * exclude_automatic_assertions `boolean`: If true, excludes associations that involve IEAs (ECO:0000501)
  * fetch_objects `boolean`: If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  * use_compact_associations `boolean`: If true, returns results in compact associations format
  * slim `array`: Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
  * evidence `string`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
  * direct `boolean`: Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
  * id **required** `string`: CURIE identifier of substance, e.g. CHEBI:40036

#### Output
* output `array`
  * items [Association](#association)

### get_substance_role_associations
Roles may be human-oriented (e.g. pesticide) or molecular (e.g. enzyme inhibitor)


```js
monarchinitiative.get_substance_role_associations({
  "id": ""
}, context)
```

#### Input
* input `object`
  * rows `integer`: number of rows
  * start `integer`: beginning row
  * facet `boolean`: Enable faceting
  * facet_fields `array`: Fields to facet on
  * unselect_evidence `boolean`: If true, excludes evidence objects in response
  * exclude_automatic_assertions `boolean`: If true, excludes associations that involve IEAs (ECO:0000501)
  * fetch_objects `boolean`: If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  * use_compact_associations `boolean`: If true, returns results in compact associations format
  * slim `array`: Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
  * evidence `string`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
  * direct `boolean`: Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
  * id **required** `string`: CURIE identifier of substance, e.g. CHEBI:40036

#### Output
* output `array`
  * items [Association](#association)

### get_substance_treats_associations
e.g. drugs or small molecules used to treat


```js
monarchinitiative.get_substance_treats_associations({
  "id": ""
}, context)
```

#### Input
* input `object`
  * rows `integer`: number of rows
  * start `integer`: beginning row
  * facet `boolean`: Enable faceting
  * facet_fields `array`: Fields to facet on
  * unselect_evidence `boolean`: If true, excludes evidence objects in response
  * exclude_automatic_assertions `boolean`: If true, excludes associations that involve IEAs (ECO:0000501)
  * fetch_objects `boolean`: If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  * use_compact_associations `boolean`: If true, returns results in compact associations format
  * slim `array`: Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
  * evidence `string`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
  * direct `boolean`: Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
  * id **required** `string`: CURIE identifier of substance, e.g. CHEBI:40036

#### Output
*Output schema unknown*

### get_variant_case_associations
Returns cases associated with a variant


```js
monarchinitiative.get_variant_case_associations({
  "id": ""
}, context)
```

#### Input
* input `object`
  * rows `integer`: number of rows
  * start `integer`: beginning row
  * facet `boolean`: Enable faceting
  * facet_fields `array`: Fields to facet on
  * unselect_evidence `boolean`: If true, excludes evidence objects in response
  * exclude_automatic_assertions `boolean`: If true, excludes associations that involve IEAs (ECO:0000501)
  * fetch_objects `boolean`: If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  * use_compact_associations `boolean`: If true, returns results in compact associations format
  * slim `array`: Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
  * evidence `string`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
  * direct `boolean`: Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
  * id **required** `string`: CURIE identifier of variant, e.g. OMIM:309550.0004, dbSNP:rs5030868

#### Output
* output [AssociationResults](#associationresults)

### get_variant_disease_associations
Returns diseases associated with a variant


```js
monarchinitiative.get_variant_disease_associations({
  "id": ""
}, context)
```

#### Input
* input `object`
  * rows `integer`: number of rows
  * start `integer`: beginning row
  * facet `boolean`: Enable faceting
  * facet_fields `array`: Fields to facet on
  * unselect_evidence `boolean`: If true, excludes evidence objects in response
  * exclude_automatic_assertions `boolean`: If true, excludes associations that involve IEAs (ECO:0000501)
  * fetch_objects `boolean`: If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  * use_compact_associations `boolean`: If true, returns results in compact associations format
  * slim `array`: Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
  * evidence `string`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
  * direct `boolean`: Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
  * taxon `array`: One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
  * direct_taxon `boolean`: Set true to exclude inferred taxa
  * relation `string`: A relation CURIE to filter associations
  * sort `string`: Sorting responses <field> <desc,asc>
  * q `string`: Query string to filter documents
  * id **required** `string`: CURIE identifier of variant, e.g. ClinVarVariant:14925

#### Output
* output [AssociationResults](#associationresults)

### get_variant_gene_associations
Returns genes associated with a variant


```js
monarchinitiative.get_variant_gene_associations({
  "id": ""
}, context)
```

#### Input
* input `object`
  * rows `integer`: number of rows
  * start `integer`: beginning row
  * facet `boolean`: Enable faceting
  * facet_fields `array`: Fields to facet on
  * unselect_evidence `boolean`: If true, excludes evidence objects in response
  * exclude_automatic_assertions `boolean`: If true, excludes associations that involve IEAs (ECO:0000501)
  * fetch_objects `boolean`: If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  * use_compact_associations `boolean`: If true, returns results in compact associations format
  * slim `array`: Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
  * evidence `string`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
  * direct `boolean`: Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
  * taxon `array`: One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
  * direct_taxon `boolean`: Set true to exclude inferred taxa
  * relation `string`: A relation CURIE to filter associations
  * sort `string`: Sorting responses <field> <desc,asc>
  * q `string`: Query string to filter documents
  * id **required** `string`: CURIE identifier of variant, e.g. ZFIN:ZDB-ALT-010427-8, ClinVarVariant:39783

#### Output
* output [AssociationResults](#associationresults)

### get_variant_genotype_associations
Returns genotypes associated with a variant


```js
monarchinitiative.get_variant_genotype_associations({
  "id": ""
}, context)
```

#### Input
* input `object`
  * rows `integer`: number of rows
  * start `integer`: beginning row
  * facet `boolean`: Enable faceting
  * facet_fields `array`: Fields to facet on
  * unselect_evidence `boolean`: If true, excludes evidence objects in response
  * exclude_automatic_assertions `boolean`: If true, excludes associations that involve IEAs (ECO:0000501)
  * fetch_objects `boolean`: If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  * use_compact_associations `boolean`: If true, returns results in compact associations format
  * slim `array`: Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
  * evidence `string`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
  * direct `boolean`: Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
  * taxon `array`: One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
  * direct_taxon `boolean`: Set true to exclude inferred taxa
  * relation `string`: A relation CURIE to filter associations
  * sort `string`: Sorting responses <field> <desc,asc>
  * q `string`: Query string to filter documents
  * id **required** `string`: CURIE identifier of variant, e.g. ZFIN:ZDB-ALT-010427-8

#### Output
* output [AssociationResults](#associationresults)

### get_variant_model_associations
Returns models associated with a variant


```js
monarchinitiative.get_variant_model_associations({
  "id": ""
}, context)
```

#### Input
* input `object`
  * rows `integer`: number of rows
  * start `integer`: beginning row
  * facet `boolean`: Enable faceting
  * facet_fields `array`: Fields to facet on
  * unselect_evidence `boolean`: If true, excludes evidence objects in response
  * exclude_automatic_assertions `boolean`: If true, excludes associations that involve IEAs (ECO:0000501)
  * fetch_objects `boolean`: If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  * use_compact_associations `boolean`: If true, returns results in compact associations format
  * slim `array`: Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
  * evidence `string`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
  * direct `boolean`: Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
  * id **required** `string`: CURIE identifier of variant, e.g. OMIM:607623.0012, dbSNP:rs5030868

#### Output
* output [AssociationResults](#associationresults)

### get_variant_phenotype_associations
Returns phenotypes associated with a variant


```js
monarchinitiative.get_variant_phenotype_associations({
  "id": ""
}, context)
```

#### Input
* input `object`
  * rows `integer`: number of rows
  * start `integer`: beginning row
  * facet `boolean`: Enable faceting
  * facet_fields `array`: Fields to facet on
  * unselect_evidence `boolean`: If true, excludes evidence objects in response
  * exclude_automatic_assertions `boolean`: If true, excludes associations that involve IEAs (ECO:0000501)
  * fetch_objects `boolean`: If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  * use_compact_associations `boolean`: If true, returns results in compact associations format
  * slim `array`: Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
  * evidence `string`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
  * direct `boolean`: Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
  * taxon `array`: One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
  * direct_taxon `boolean`: Set true to exclude inferred taxa
  * relation `string`: A relation CURIE to filter associations
  * sort `string`: Sorting responses <field> <desc,asc>
  * q `string`: Query string to filter documents
  * id **required** `string`: CURIE identifier of variant, e.g. ZFIN:ZDB-ALT-010427-8, ClinVarVariant:39783

#### Output
* output [AssociationResults](#associationresults)

### get_variant_publication_associations
Returns publications associated with a variant


```js
monarchinitiative.get_variant_publication_associations({
  "id": ""
}, context)
```

#### Input
* input `object`
  * rows `integer`: number of rows
  * start `integer`: beginning row
  * facet `boolean`: Enable faceting
  * facet_fields `array`: Fields to facet on
  * unselect_evidence `boolean`: If true, excludes evidence objects in response
  * exclude_automatic_assertions `boolean`: If true, excludes associations that involve IEAs (ECO:0000501)
  * fetch_objects `boolean`: If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  * use_compact_associations `boolean`: If true, returns results in compact associations format
  * slim `array`: Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
  * evidence `string`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
  * direct `boolean`: Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
  * taxon `array`: One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
  * direct_taxon `boolean`: Set true to exclude inferred taxa
  * relation `string`: A relation CURIE to filter associations
  * sort `string`: Sorting responses <field> <desc,asc>
  * q `string`: Query string to filter documents
  * id **required** `string`: CURIE identifier of variant, e.g. ZFIN:ZDB-ALT-010427-8, ClinVarVariant:39783

#### Output
* output [AssociationResults](#associationresults)

### get_generic_object
Returns basic info on object of any type


```js
monarchinitiative.get_generic_object({
  "id": ""
}, context)
```

#### Input
* input `object`
  * rows `integer`: number of rows
  * start `integer`: beginning row
  * facet `boolean`: Enable faceting
  * facet_fields `array`: Fields to facet on
  * unselect_evidence `boolean`: If true, excludes evidence objects in response
  * exclude_automatic_assertions `boolean`: If true, excludes associations that involve IEAs (ECO:0000501)
  * fetch_objects `boolean`: If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  * use_compact_associations `boolean`: If true, returns results in compact associations format
  * slim `array`: Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
  * evidence `string`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
  * direct `boolean`: Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
  * id **required** `string`: id, e.g. NCBIGene:84570

#### Output
* output [BioObject](#bioobject)

### get_generic_associations
Returns associations for an entity regardless of the type


```js
monarchinitiative.get_generic_associations({
  "id": ""
}, context)
```

#### Input
* input `object`
  * rows `integer`: number of rows
  * start `integer`: beginning row
  * facet `boolean`: Enable faceting
  * facet_fields `array`: Fields to facet on
  * unselect_evidence `boolean`: If true, excludes evidence objects in response
  * exclude_automatic_assertions `boolean`: If true, excludes associations that involve IEAs (ECO:0000501)
  * fetch_objects `boolean`: If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  * use_compact_associations `boolean`: If true, returns results in compact associations format
  * slim `array`: Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
  * evidence `string`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
  * direct `boolean`: Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
  * taxon `array`: One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default
  * direct_taxon `boolean`: Set true to exclude inferred taxa
  * relation `string`: A relation CURIE to filter associations
  * sort `string`: Sorting responses <field> <desc,asc>
  * q `string`: Query string to filter documents
  * id **required** `string`

#### Output
* output [AssociationResults](#associationresults)

### get_generic_object_by_type
Return basic info on an object for a given type


```js
monarchinitiative.get_generic_object_by_type({
  "type": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * rows `integer`: number of rows
  * start `integer`: beginning row
  * facet `boolean`: Enable faceting
  * facet_fields `array`: Fields to facet on
  * unselect_evidence `boolean`: If true, excludes evidence objects in response
  * exclude_automatic_assertions `boolean`: If true, excludes associations that involve IEAs (ECO:0000501)
  * fetch_objects `boolean`: If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  * use_compact_associations `boolean`: If true, returns results in compact associations format
  * slim `array`: Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
  * evidence `string`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
  * direct `boolean`: Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
  * get_association_counts `boolean`: Get association counts
  * distinct_counts `boolean`: Get distinct counts for associations (to be used in conjunction with 'get_association_counts' parameter)
  * type **required** `string` (values: gene, variant, genotype, phenotype, disease, goterm, pathway, anatomy, substance, individual, publication, model, case): bioentity type
  * id **required** `string`: id, e.g. NCBIGene:84570

#### Output
*Output schema unknown*

### get_entity_set_associations
Returns compact associations for a given input set


```js
monarchinitiative.get_entity_set_associations({}, context)
```

#### Input
* input `object`
  * subject `array`: Entity ids to be examined, e.g. NCBIGene:9342, NCBIGene:7227, NCBIGene:8131, NCBIGene:157570, NCBIGene:51164, NCBIGene:6689, NCBIGene:6387
  * background `array`: Entity ids in background set, e.g. NCBIGene:84570, NCBIGene:3630; used in over-representation tests
  * object_category `string`: E.g. phenotype, function
  * object_slim `string`: Slim or subset to which the descriptors are to be mapped, NOT IMPLEMENTED

#### Output
* output `array`
  * items [AssociationResults](#associationresults)

### get_entity_set_summary
Summary statistics for objects associated


```js
monarchinitiative.get_entity_set_summary({}, context)
```

#### Input
* input `object`
  * subject `array`: Entity ids to be examined, e.g. NCBIGene:9342, NCBIGene:7227, NCBIGene:8131, NCBIGene:157570, NCBIGene:51164, NCBIGene:6689, NCBIGene:6387
  * background `array`: Entity ids in background set, e.g. NCBIGene:84570, NCBIGene:3630; used in over-representation tests
  * object_category `string`: E.g. phenotype, function
  * object_slim `string`: Slim or subset to which the descriptors are to be mapped, NOT IMPLEMENTED

#### Output
*Output schema unknown*

### get_entity_set_graph_resource
TODO Graph object spanning all entities


```js
monarchinitiative.get_entity_set_graph_resource({}, context)
```

#### Input
* input `object`
  * subject `array`: Entity ids to be examined, e.g. NCBIGene:9342, NCBIGene:7227, NCBIGene:8131, NCBIGene:157570, NCBIGene:51164, NCBIGene:6689, NCBIGene:6387
  * background `array`: Entity ids in background set, e.g. NCBIGene:84570, NCBIGene:3630; used in over-representation tests
  * object_category `string`: E.g. phenotype, function
  * object_slim `string`: Slim or subset to which the descriptors are to be mapped, NOT IMPLEMENTED

#### Output
*Output schema unknown*

### get_entity_set_homologs
Returns homology associations for a given input set of genes


```js
monarchinitiative.get_entity_set_homologs({}, context)
```

#### Input
* input `object`
  * subject `array`: Entity ids to be examined, e.g. NCBIGene:9342, NCBIGene:7227, NCBIGene:8131, NCBIGene:157570, NCBIGene:51164, NCBIGene:6689, NCBIGene:6387

#### Output
* output `array`
  * items [AssociationResults](#associationresults)

### get_over_representation
Summary statistics for objects associated


```js
monarchinitiative.get_over_representation({}, context)
```

#### Input
* input `object`
  * object_category `string`: E.g. phenotype, function
  * subject `array`: Entity ids to be examined, e.g. NCBIGene:9342, NCBIGene:7227, NCBIGene:8131, NCBIGene:157570, NCBIGene:51164, NCBIGene:6689, NCBIGene:6387
  * background `array`: Entity ids in background set, e.g. NCBIGene:84570, NCBIGene:3630; used in over-representation tests
  * subject_category `string`: Default: gene. Other types may be used e.g. disease but statistics may not make sense
  * max_p_value `string`: Exclude results with p-value greater than this
  * ontology `string`: ontology id. Must be obo id. Examples: go, mp, hp, uberon (optional: will be inferred if left blank)
  * taxon `string`: must be NCBITaxon CURIE. Example: NCBITaxon:9606

#### Output
*Output schema unknown*

### get_entity_set_anatomy_slimmer
For a given gene(s), summarize its annotations over a defined set of slim


```js
monarchinitiative.get_entity_set_anatomy_slimmer({
  "subject": [],
  "slim": []
}, context)
```

#### Input
* input `object`
  * subject **required** `array`: Entity ids to be examined, e.g. NCBIGene:9342, NCBIGene:7227, NCBIGene:8131, NCBIGene:157570, NCBIGene:51164, NCBIGene:6689, NCBIGene:6387
  * slim **required** `array`: Map objects up (slim) to a higher level category. Value can be ontology class ID (IMPLEMENTED) or subset ID (TODO)
  * exclude_automatic_assertions `boolean`: If set, excludes associations that involve IEAs (ECO:0000501)
  * rows `integer`: number of rows
  * start `integer`: beginning row

#### Output
*Output schema unknown*

### get_entity_set_function_slimmer
For a given gene(s), summarize its annotations over a defined set of slim


```js
monarchinitiative.get_entity_set_function_slimmer({
  "subject": [],
  "slim": []
}, context)
```

#### Input
* input `object`
  * relationship_type `string` (values: involved_in, acts_upstream_of_or_within): relationship type ('involved_in' or 'acts_upstream_of_or_within')
  * subject **required** `array`: Entity ids to be examined, e.g. NCBIGene:9342, NCBIGene:7227, NCBIGene:8131, NCBIGene:157570, NCBIGene:51164, NCBIGene:6689, NCBIGene:6387
  * slim **required** `array`: Map objects up (slim) to a higher level category. Value can be ontology class ID (IMPLEMENTED) or subset ID (TODO)
  * exclude_automatic_assertions `boolean`: If set, excludes associations that involve IEAs (ECO:0000501)
  * rows `integer`: number of rows
  * start `integer`: beginning row

#### Output
*Output schema unknown*

### get_entity_set_phenotype_slimmer
For a given gene(s), summarize its annotations over a defined set of slim


```js
monarchinitiative.get_entity_set_phenotype_slimmer({
  "subject": [],
  "slim": []
}, context)
```

#### Input
* input `object`
  * subject **required** `array`: Entity ids to be examined, e.g. NCBIGene:9342, NCBIGene:7227, NCBIGene:8131, NCBIGene:157570, NCBIGene:51164, NCBIGene:6689, NCBIGene:6387
  * slim **required** `array`: Map objects up (slim) to a higher level category. Value can be ontology class ID (IMPLEMENTED) or subset ID (TODO)
  * exclude_automatic_assertions `boolean`: If set, excludes associations that involve IEAs (ECO:0000501)
  * rows `integer`: number of rows
  * start `integer`: beginning row

#### Output
*Output schema unknown*

### get_activity_collection
Returns list of models


```js
monarchinitiative.get_activity_collection({}, context)
```

#### Input
* input `object`
  * title `string`: string to search for in title of model
  * contributor `string`: string to search for in contributor of model

#### Output
*Output schema unknown*

### get_instance_object
Returns list of matches


```js
monarchinitiative.get_instance_object({
  "id": ""
}, context)
```

#### Input
* input `object`
  * title `string`: string to search for in title of model
  * contributor `string`: string to search for in contributor of model
  * id **required** `string`

#### Output
* output `array`
  * items [Association](#association)

### get_model_instances
Returns list of all instances


```js
monarchinitiative.get_model_instances(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### get_model_collection
Returns list of ALL models


```js
monarchinitiative.get_model_collection(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### get_model_contributors
Returns list of all contributors across all models


```js
monarchinitiative.get_model_contributors(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### get_model_properties
Returns list of all properties used across all models


```js
monarchinitiative.get_model_properties({}, context)
```

#### Input
* input `object`
  * title `string`: string to search for in title of model
  * contributor `string`: string to search for in contributor of model

#### Output
*Output schema unknown*

### get_model_property_values
Returns list property-values for all models


```js
monarchinitiative.get_model_property_values({}, context)
```

#### Input
* input `object`
  * title `string`: string to search for in title of model
  * contributor `string`: string to search for in contributor of model

#### Output
*Output schema unknown*

### get_model_query
Returns list of models matching query


```js
monarchinitiative.get_model_query({}, context)
```

#### Input
* input `object`
  * title `string`: string to search for in title of model
  * contributor `string`: string to search for in contributor of model

#### Output
*Output schema unknown*

### get_model_object
Returns a complete model


```js
monarchinitiative.get_model_object({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
*Output schema unknown*

### get_physical_interaction
Returns list of models


```js
monarchinitiative.get_physical_interaction({}, context)
```

#### Input
* input `object`
  * title `string`: string to search for in title of model
  * contributor `string`: string to search for in contributor of model

#### Output
*Output schema unknown*

### get_evidence_graph_object
Note that every association is assumed to have a unique ID


```js
monarchinitiative.get_evidence_graph_object({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: association id, e.g. 68e686f6-d05b-46b8-ab1f-1da2fff97ada

#### Output
* output `array`
  * items [Graph](#graph)

### get_evidence_graph_table
Note that every association is assumed to have a unique ID


```js
monarchinitiative.get_evidence_graph_table({
  "id": ""
}, context)
```

#### Input
* input `object`
  * is_publication `boolean`: If true, considers dc:source as edge
  * id **required** `string`: association id, e.g. 68e686f6-d05b-46b8-ab1f-1da2fff97ada

#### Output
* output `array`
  * items [AssociationResults](#associationresults)

### get_features_within_resource
Returns list of matches


```js
monarchinitiative.get_features_within_resource({
  "build": "",
  "reference": "",
  "begin": "",
  "end": ""
}, context)
```

#### Input
* input `object`
  * build **required** `string`
  * reference **required** `string`
  * begin **required** `string`
  * end **required** `string`

#### Output
* output `array`
  * items [SequenceFeature](#sequencefeature)

### get_edge_resource
Returns edges emanating from a given node


```js
monarchinitiative.get_edge_resource({
  "id": ""
}, context)
```

#### Input
* input `object`
  * depth `integer`: How far to traverse for neighbors
  * direction `string` (values: INCOMING, OUTGOING, BOTH): Which direction to traverse (used only if relationship_type is defined)
  * relationship_type `array`: Relationship type to traverse
  * entail `boolean`: Include sub-properties and equivalent properties
  * graph `string` (values: data, ontology): Which monarch graph to query
  * id **required** `string`: CURIE e.g. HP:0000465

#### Output
* output `array`
  * items [Graph](#graph)

### get_node_resource
A node is an abstract representation of some kind of entity. The entity may be a physical thing such as a patient,
a molecular entity such as a gene or protein, or a conceptual entity such as a class from an ontology.


```js
monarchinitiative.get_node_resource({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: CURIE e.g. HP:0000465

#### Output
* output `array`
  * items [BioObject](#bioobject)

### get_identifier_mapper
TODO maps a list of identifiers from a source to a target


```js
monarchinitiative.get_identifier_mapper({
  "source": "",
  "target": ""
}, context)
```

#### Input
* input `object`
  * source **required** `string`
  * target **required** `string`

#### Output
* output `array`
  * items [Association](#association)

### get_prefix_collection
Returns list of prefixes


```js
monarchinitiative.get_prefix_collection(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### get_prefix_contract
Returns contracted URI


```js
monarchinitiative.get_prefix_contract({
  "uri": ""
}, context)
```

#### Input
* input `object`
  * uri **required** `string`: URI of entity to be contracted to identifier/CURIE, e.g "http://www.informatics.jax.org/accession/MGI:1"

#### Output
*Output schema unknown*

### get_prefix_expand
Returns expanded URI


```js
monarchinitiative.get_prefix_expand({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: ID of entity to be contracted to URI, e.g "MGI:1"

#### Output
*Output schema unknown*

### get_pedigree
Returns list of matches


```js
monarchinitiative.get_pedigree({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output `array`
  * items [Association](#association)

### get_individual
Returns list of matches


```js
monarchinitiative.get_individual({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output `array`
  * items [Association](#association)

### get_mart_case_associations_resource
NOTE: this route has a limiter on it, you may be restricted in the number of downloads per hour. Use carefully.


```js
monarchinitiative.get_mart_case_associations_resource({
  "taxon": "",
  "object_category": ""
}, context)
```

#### Input
* input `object`
  * slim `array`: Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
  * taxon **required** `string`: taxon of case, must be of form NCBITaxon:9606
  * object_category **required** `string`: Category of entity at link Subject (target), e.g. phenotype, disease

#### Output
*Output schema unknown*

### get_mart_disease_associations_resource
NOTE: this route has a limiter on it, you may be restricted in the number of downloads per hour. Use carefully.


```js
monarchinitiative.get_mart_disease_associations_resource({
  "taxon": "",
  "object_category": ""
}, context)
```

#### Input
* input `object`
  * slim `array`: Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
  * taxon **required** `string`: taxon of disease, must be of form NCBITaxon:9606
  * object_category **required** `string`: Category of entity at link Object (target), e.g. phenotype, disease

#### Output
*Output schema unknown*

### get_mart_gene_associations_resource
NOTE: this route has a limiter on it, you may be restricted in the number of downloads per hour. Use carefully.


```js
monarchinitiative.get_mart_gene_associations_resource({
  "taxon": "",
  "object_category": ""
}, context)
```

#### Input
* input `object`
  * slim `array`: Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
  * taxon **required** `string`: taxon of gene, must be of form NCBITaxon:9606
  * object_category **required** `string`: Category of entity at link Object (target), e.g. phenotype, disease

#### Output
*Output schema unknown*

### get_mart_ortholog_associations_resource
Bulk download of orthologs


```js
monarchinitiative.get_mart_ortholog_associations_resource({
  "taxon2": "",
  "taxon1": ""
}, context)
```

#### Input
* input `object`
  * taxon2 **required** `string`: object taxon, e.g. NCBITaxon:10090
  * taxon1 **required** `string`: subject taxon, e.g. NCBITaxon:9606

#### Output
*Output schema unknown*

### get_mart_paralog_associations_resource
Bulk download of paralogs


```js
monarchinitiative.get_mart_paralog_associations_resource({
  "taxon2": "",
  "taxon1": ""
}, context)
```

#### Input
* input `object`
  * taxon2 **required** `string`: object taxon, e.g. NCBITaxon:9606
  * taxon1 **required** `string`: subject taxon, e.g. NCBITaxon:9606

#### Output
*Output schema unknown*

### get_metadata_for_datasets
Get metadata for all datasets from SciGraph


```js
monarchinitiative.get_metadata_for_datasets(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### get_annotate
Annotate a given text using SciGraph annotator


```js
monarchinitiative.get_annotate({}, context)
```

#### Input
* input `object`
  * content `string`: The text content to annotate
  * include_category `array`: Categories to include for annotation
  * exclude_category `array`: Categories to exclude for annotation
  * min_length `string`: The minimum number of characters in the annotated entity
  * longest_only `boolean`: Should only the longest entity be returned for an overlapping group
  * include_abbreviation `boolean`: Should abbreviations be included
  * include_acronym `boolean`: Should acronyms be included
  * include_numbers `boolean`: Should numbers be included

#### Output
*Output schema unknown*

### post_annotate
Annotate a given text using SciGraph annotator


```js
monarchinitiative.post_annotate({}, context)
```

#### Input
* input `object`
  * content `string`: The text content to annotate
  * include_category `array`: Categories to include for annotation
  * exclude_category `array`: Categories to exclude for annotation
  * min_length `string`: The minimum number of characters in the annotated entity
  * longest_only `boolean`: Should only the longest entity be returned for an overlapping group
  * include_abbreviation `boolean`: Should abbreviations be included
  * include_acronym `boolean`: Should acronyms be included
  * include_numbers `boolean`: Should numbers be included

#### Output
*Output schema unknown*

### get_annotate_entities
Annotate a given content using SciGraph annotator and get all entities from content


```js
monarchinitiative.get_annotate_entities({}, context)
```

#### Input
* input `object`
  * content `string`: The text content to annotate
  * include_category `array`: Categories to include for annotation
  * exclude_category `array`: Categories to exclude for annotation
  * min_length `string`: The minimum number of characters in the annotated entity
  * longest_only `boolean`: Should only the longest entity be returned for an overlapping group
  * include_abbreviation `boolean`: Should abbreviations be included
  * include_acronym `boolean`: Should acronyms be included
  * include_numbers `boolean`: Should numbers be included

#### Output
* output [EntityAnnotationResult](#entityannotationresult)

### post_annotate_entities
Annotate a given content using SciGraph annotator and get all entities from content


```js
monarchinitiative.post_annotate_entities({}, context)
```

#### Input
* input `object`
  * content `string`: The text content to annotate
  * include_category `array`: Categories to include for annotation
  * exclude_category `array`: Categories to exclude for annotation
  * min_length `string`: The minimum number of characters in the annotated entity
  * longest_only `boolean`: Should only the longest entity be returned for an overlapping group
  * include_abbreviation `boolean`: Should abbreviations be included
  * include_acronym `boolean`: Should acronyms be included
  * include_numbers `boolean`: Should numbers be included

#### Output
* output [EntityAnnotationResult](#entityannotationresult)

### get_information_content_resource
```
IC = -log2( freq(t) / popSize )
```

Here the frequency and population is calculated for a particular dataset:
e.g. all human disease-phenotype associations


```js
monarchinitiative.get_information_content_resource({
  "subject_category": "",
  "object_category": "",
  "subject_taxon": ""
}, context)
```

#### Input
* input `object`
  * evidence `string`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default)
  * subject_category **required** `string`
  * object_category **required** `string`
  * subject_taxon **required** `string`

#### Output
*Output schema unknown*

### get_ontol_labeler_resource
Fetches a map from CURIEs/IDs to labels


```js
monarchinitiative.get_ontol_labeler_resource({}, context)
```

#### Input
* input `object`
  * id `array`: List of ids

#### Output
*Output schema unknown*

### get_extract_ontology_subgraph_resource
Extract a subgraph from an ontology


```js
monarchinitiative.get_extract_ontology_subgraph_resource({
  "node": "",
  "ontology": ""
}, context)
```

#### Input
* input `object`
  * cnode `array`: Additional classes
  * include_ancestors `boolean`: Include Ancestors
  * include_descendants `boolean`: Include Descendants
  * relation `array`: Additional classes
  * include_meta `boolean`: Include metadata in response
  * node **required** `string`: class ID, e.g. HP:0001288
  * ontology **required** `string`: ontology ID, e.g. go, uberon, mp, hp

#### Output
*Output schema unknown*

### post_extract_ontology_subgraph_resource
Extract a subgraph from an ontology


```js
monarchinitiative.post_extract_ontology_subgraph_resource({
  "node": "",
  "ontology": ""
}, context)
```

#### Input
* input `object`
  * cnode `array`: Additional classes
  * include_ancestors `boolean`: Include Ancestors
  * include_descendants `boolean`: Include Descendants
  * relation `array`: Additional classes
  * include_meta `boolean`: Include metadata in response
  * node **required** `string`: class ID, e.g. HP:0001288
  * ontology **required** `string`: ontology ID, e.g. go, uberon, mp, hp

#### Output
*Output schema unknown*

### get_ontology_terms_shared_ancestor
Returns the ancestor ontology terms shared by two ontology terms


```js
monarchinitiative.get_ontology_terms_shared_ancestor({
  "subject": "",
  "object": ""
}, context)
```

#### Input
* input `object`
  * subject **required** `string`: CURIE identifier of a GO term, e.g. GO:0006259
  * object **required** `string`: CURIE identifier of a GO term, e.g. GO:0046483

#### Output
*Output schema unknown*

### get_ontology_subset
Returns meta data of an ontology subset (slim)


```js
monarchinitiative.get_ontology_subset({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: name of a slim subset, e.g. goslim_agr, goslim_generic

#### Output
*Output schema unknown*

### get_ontology_term
Returns meta data of an ontology term


```js
monarchinitiative.get_ontology_term({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: CURIE identifier of a GO term, e.g. GO:0003677

#### Output
*Output schema unknown*

### get_ontology_term_graph
Returns graph of an ontology term


```js
monarchinitiative.get_ontology_term_graph({
  "id": ""
}, context)
```

#### Input
* input `object`
  * graph_type `string` (values: topology_graph, regulates_transitivity_graph, neighborhood_graph, neighborhood_limited_graph): graph type ('topology_graph', 'regulates_transitivity_graph' or 'neighborhood_graph')
  * id **required** `string`: CURIE identifier of a GO term, e.g. GO:0000981

#### Output
*Output schema unknown*

### get_ontology_term_subgraph
Extract a subgraph from an ontology term


```js
monarchinitiative.get_ontology_term_subgraph({
  "id": ""
}, context)
```

#### Input
* input `object`
  * cnode `array`: Additional classes
  * include_ancestors `boolean`: Include Ancestors
  * include_descendants `boolean`: Include Descendants
  * relation `array`: Additional classes
  * include_meta `boolean`: Include metadata in response
  * id **required** `string`: CURIE identifier of a GO term, e.g. GO:0007275

#### Output
*Output schema unknown*

### get_ontology_term_subsets
Returns subsets (slims) associated to an ontology term


```js
monarchinitiative.get_ontology_term_subsets({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: CURIE identifier of a GO term, e.g. GO:0006259

#### Output
*Output schema unknown*

### get_dl_query
Placeholder - use OWLery for now


```js
monarchinitiative.get_dl_query({
  "query": ""
}, context)
```

#### Input
* input `object`
  * query **required** `string`

#### Output
* output `array`
  * items [Association](#association)

### get_sparql_query
Placeholder - use direct SPARQL endpoint for now


```js
monarchinitiative.get_sparql_query({
  "query": ""
}, context)
```

#### Input
* input `object`
  * query **required** `string`

#### Output
* output `array`
  * items [Association](#association)

### get_pair_sim_jaccard_resource
Get pairwise similarity


```js
monarchinitiative.get_pair_sim_jaccard_resource({
  "id2": "",
  "id1": ""
}, context)
```

#### Input
* input `object`
  * object_category `string`: e.g. disease, phenotype, gene. Two subjects will be compared based on overlap between associations to objects in this category
  * id2 **required** `string`: id, e.g. NCBIGene:1200; ZFIN:ZDB-GENE-980528-2059; UniProtKB:P12644
  * id1 **required** `string`: id, e.g. NCBIGene:10891; ZFIN:ZDB-GENE-980526-166; UniProtKB:Q15465

#### Output
*Output schema unknown*

### get_relation_usage_resource
All relations used plus count of associations


```js
monarchinitiative.get_relation_usage_resource({}, context)
```

#### Input
* input `object`
  * subject_taxon `string`: SUBJECT TAXON id, e.g. NCBITaxon:9606. Includes inferred by default
  * evidence `string`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default)

#### Output
* output `array`
  * items [AssociationResults](#associationresults)

### get_relation_usage_between_resource
All relations used plus count of associations


```js
monarchinitiative.get_relation_usage_between_resource({
  "subject_category": "",
  "object_category": ""
}, context)
```

#### Input
* input `object`
  * subject_taxon `string`: SUBJECT TAXON id, e.g. NCBITaxon:9606. Includes inferred by default
  * evidence `string`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default)
  * subject_category **required** `string`
  * object_category **required** `string`

#### Output
* output `array`
  * items [AssociationResults](#associationresults)

### get_relation_usage_pivot_resource
Relation usage count for all subj x obj category combinations


```js
monarchinitiative.get_relation_usage_pivot_resource({}, context)
```

#### Input
* input `object`
  * subject_taxon `string`: SUBJECT TAXON id, e.g. NCBITaxon:9606. Includes inferred by default
  * evidence `string`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default)

#### Output
* output `array`
  * items [AssociationResults](#associationresults)

### get_relation_usage_pivot_label_resource
Relation usage count for all subj x obj category combinations, showing label


```js
monarchinitiative.get_relation_usage_pivot_label_resource({}, context)
```

#### Input
* input `object`
  * subject_taxon `string`: SUBJECT TAXON id, e.g. NCBITaxon:9606. Includes inferred by default
  * evidence `string`: Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default)

#### Output
* output `array`
  * items [AssociationResults](#associationresults)

### get_autocomplete
Returns list of matching concepts or entities using lexical search


```js
monarchinitiative.get_autocomplete({
  "term": ""
}, context)
```

#### Input
* input `object`
  * fq `array`: fq string passed directly to solr, note that multiple filters will be combined with an AND operator. Combining fq_string with other parameters may result in unexpected behavior.
  * category `array`: e.g. gene, disease
  * prefix `array`: ontology prefix: HP, -MONDO
  * boost_fx `array`: boost function e.g. pow(edges,0.334)
  * boost_q `array`: boost query e.g. category:genotype^-10
  * taxon `array`: taxon filter, eg NCBITaxon:9606, includes inferred taxa
  * rows `integer`: number of rows
  * start `string`: row number to start from
  * highlight_class `string`: highlight class
  * min_match `string`: minimum should match parameter, see solr docs for details
  * minimal_tokenizer `boolean`: set to true to use the minimal tokenizer, good for variants and genotypes
  * term **required** `string`

#### Output
* output [AutocompleteResults](#autocompleteresults)

### get_search_hpo_entities
Returns list of matching concepts or entities using lexical search


```js
monarchinitiative.get_search_hpo_entities({
  "term": ""
}, context)
```

#### Input
* input `object`
  * rows `integer`: number of rows
  * start `string`: row number to start from
  * phenotype_group `string`: phenotype group id
  * phenotype_group_label `string`: phenotype group label
  * anatomical_system `string`: anatomical system id
  * anatomical_system_label `string`: anatomical system label
  * highlight_class `string`: highlight class
  * term **required** `string`: search string, e.g. muscle atrophy, frequent infections

#### Output
* output [LayResults](#layresults)

### get_search_entities
Returns list of matching concepts or entities using lexical search


```js
monarchinitiative.get_search_entities({
  "term": ""
}, context)
```

#### Input
* input `object`
  * fq `array`: fq string passed directly to solr, note that multiple filters will be combined with an AND operator. Combining fq_string with other parameters may result in unexpected behavior.
  * category `array`: e.g. gene, disease
  * prefix `array`: ontology prefix: HP, -MONDO
  * boost_fx `array`: boost function e.g. pow(edges,0.334)
  * boost_q `array`: boost query e.g. category:genotype^-10
  * taxon `array`: taxon filter, eg NCBITaxon:9606, includes inferred taxa
  * rows `integer`: number of rows
  * start `string`: row number to start from
  * highlight_class `string`: highlight class
  * min_match `string`: minimum should match parameter, see solr docs for details
  * minimal_tokenizer `boolean`: set to true to use the minimal tokenizer, good for variants and genotypes
  * term **required** `string`: search string, e.g. shh, parkinson, femur

#### Output
* output [SearchResult](#searchresult)

### get_sim_compare
Compare a reference profile vs one profiles


```js
monarchinitiative.get_sim_compare({}, context)
```

#### Input
* input `object`
  * is_feature_set `boolean`: set to true if *all* input ids are phenotypic features, else set to false
  * metric `string` (values: phenodigm, jaccard, simGIC, resnik, symmetric_resnik): Metric for computing similarity
  * ref_id `array`: A phenotype or identifier that is composed of phenotypes (eg disease, gene)
  * query_id `array`: A phenotype or identifier that is composed of phenotypes (eg disease, gene)

#### Output
* output [SimResult](#simresult)

### post_sim_compare
Compare a reference profile vs one or more profiles


```js
monarchinitiative.post_sim_compare({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [CompareInput](#compareinput)

#### Output
* output [SimResult](#simresult)

### get_annotation_score
Get annotation score


```js
monarchinitiative.get_annotation_score({}, context)
```

#### Input
* input `object`
  * id `array`: Phenotype identifier (eg HP:0004935)
  * absent_id `array`: absent phenotype (eg HP:0002828)

#### Output
* output [SufficiencyOutput](#sufficiencyoutput)

### post_annotation_score
Get annotation score


```js
monarchinitiative.post_annotation_score({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [SufficiencyPostInput](#sufficiencypostinput)

#### Output
* output [SufficiencyOutput](#sufficiencyoutput)

### get_sim_search
Search for phenotypically similar diseases or model genes


```js
monarchinitiative.get_sim_search({}, context)
```

#### Input
* input `object`
  * is_feature_set `boolean`: set to true if *all* input ids are phenotypic features, else set to false
  * metric `string` (values: phenodigm, jaccard, simGIC, resnik, symmetric_resnik): Metric for computing similarity
  * id `array`: A phenotype or identifier that is composed of phenotypes (eg disease, gene)
  * limit `integer`: number of rows
  * taxon `string`: ncbi taxon id

#### Output
* output [SimResult](#simresult)

### get_variant_sets_collection
Returns list of variant sets


```js
monarchinitiative.get_variant_sets_collection({}, context)
```

#### Input
* input `object`
  * page `integer`: Page number
  * per_page `integer` (values: 2, 10, 20, 30, 40, 50): Results per page {error_msg}

#### Output
* output [Page_of_variant_sets](#page_of_variant_sets)

### post_variant_sets_collection
Creates a new variant set


```js
monarchinitiative.post_variant_sets_collection({
  "body": {
    "body": "",
    "title": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [variant_set](#variant_set)

#### Output
*Output schema unknown*

### get_variant_analyze
Returns list of matches


```js
monarchinitiative.get_variant_analyze({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output `array`
  * items [Association](#association)

### get_variant_sets_archive_collection
Returns list of variant sets from a specified time period


```js
monarchinitiative.get_variant_sets_archive_collection({
  "year": 0,
  "month": 0,
  "day": 0
}, context)
```

#### Input
* input `object`
  * page `integer`: Page number
  * per_page `integer` (values: 2, 10, 20, 30, 40, 50): Results per page {error_msg}
  * year **required** `integer`
  * month **required** `integer`
  * day **required** `integer`

#### Output
* output [Page_of_variant_sets](#page_of_variant_sets)

### delete_variant_set_item
Deletes variant set


```js
monarchinitiative.delete_variant_set_item({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
*Output schema unknown*

### get_variant_set_item
Returns a variant set


```js
monarchinitiative.get_variant_set_item({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [variant_set](#variant_set)

### put_variant_set_item
Updates a variant set


```js
monarchinitiative.put_variant_set_item({
  "body": {
    "body": "",
    "title": ""
  },
  "id": ""
}, context)
```

#### Input
* input `object`
  * body **required** [variant_set](#variant_set)
  * id **required** `string`

#### Output
*Output schema unknown*



## Definitions

### A_page_of_results
* A_page_of_results `object`
  * page `integer`: Number of this page of results
  * pages `integer`: Total number of pages of results
  * per_page `integer`: Number of items per page of results
  * total `integer`: Total number of results

### AbstractPropertyValue
* AbstractPropertyValue `object`
  * pred `string`: predicate (attribute) part
  * val `string`: value part
  * xrefs `array`: Xrefs provenance for property-value
    * items `string`

### AnnotationExtension
* AnnotationExtension `object`
  * filler: Extension interpreted as OWL expression (r1 some r2 some .. some filler).
    * category `array`
      * items `string`: Type of object
    * id **required** `string`: ID or CURIE e.g. MGI:1201606
    * iri `string`: IRI
    * label `string`: RDFS Label
    * consider `array`
      * items `string`: Potential replacement object (if named object is obsoleted)
    * deprecated `boolean`: True if the node is deprecated/obsoleted.
    * description `string`: Descriptive text for the entity. For ontology classes, this will be a definition.
    * replaced_by `array`
      * items `string`: Direct 1:1 replacement (if named object is obsoleted)
    * synonyms `array`: list of synonyms or alternate labels
      * items [SynonymPropertyValue](#synonympropertyvalue)
    * types `array`
      * items `string`: Type of object (direct)
  * relation_chain `array`: Relationship type. If more than one value, interpreted as chain
    * items [Relation](#relation)

### Association
* Association `object`
  * evidence_graph: An indirect association is a join between two or more direct assocations, e.g. gene to disease via ortholog. We record the full set of associations as a graph object
    * edges `array`: All edges in graph
      * items [Edge](#edge)
    * nodes `array`: All nodes in graph
      * items [Node](#node)
  * evidence_types `array`: Evidence types (ECO classes)
    * items [EntityReference](#entityreference)
  * id **required** `string`: Association/annotation unique ID
  * negated `boolean`: True if association is negated
  * object **required**: Object (sensu RDF), aka target, e.g. HP:0000448, MP:0002109, DOID:14330
    * category `array`
      * items `string`: Type of object
    * id **required** `string`: ID or CURIE e.g. MGI:1201606
    * iri `string`: IRI
    * label `string`: RDFS Label
    * taxon: Taxon to which the object belongs
      * id `string`: CURIE ID, e.g. NCBITaxon:9606
      * label `string`: RDFS Label
  * object_eq `array`: Equivalent identifiers to object node
    * items `string`
  * object_extensions `array`
    * items: Additional properties of the object in the context of this association. See http://www.biomedcentral.com/1471-2105/15/155
      * filler: Extension interpreted as OWL expression (r1 some r2 some .. some filler).
        * category `array`
          * items `string`: Type of object
        * id **required** `string`: ID or CURIE e.g. MGI:1201606
        * iri `string`: IRI
        * label `string`: RDFS Label
        * consider `array`
          * items `string`: Potential replacement object (if named object is obsoleted)
        * deprecated `boolean`: True if the node is deprecated/obsoleted.
        * description `string`: Descriptive text for the entity. For ontology classes, this will be a definition.
        * replaced_by `array`
          * items `string`: Direct 1:1 replacement (if named object is obsoleted)
        * synonyms `array`: list of synonyms or alternate labels
          * items [SynonymPropertyValue](#synonympropertyvalue)
        * types `array`
          * items `string`: Type of object (direct)
      * relation_chain `array`: Relationship type. If more than one value, interpreted as chain
        * items [Relation](#relation)
  * provided_by `array`: Provider of association, e.g. Orphanet, ClinVar
    * items `string`
  * publications `array`: Publications supporting association, extracted from evidence graph
    * items [EntityReference](#entityreference)
  * qualifiers `array`: Qualifier on the association
    * items `string`
  * relation **required**: Relationship type connecting subject and object
    * category `array`
      * items `string`: Type of object
    * id **required** `string`: ID or CURIE e.g. MGI:1201606
    * iri `string`: IRI
    * label `string`: RDFS Label
    * inverse `boolean`: is relation inverted
  * slim `array`: Objects mapped to a slim
    * items `string`
  * subject **required**: Subject of association (what it is about), e.g. ClinVar:nnn, MGI:1201606
    * category `array`
      * items `string`: Type of object
    * id **required** `string`: ID or CURIE e.g. MGI:1201606
    * iri `string`: IRI
    * label `string`: RDFS Label
    * taxon: Taxon to which the object belongs
      * id `string`: CURIE ID, e.g. NCBITaxon:9606
      * label `string`: RDFS Label
  * subject_eq `array`: Equivalent identifiers to subject node
    * items `string`
  * subject_extensions `array`
    * items: Additional properties of the subject in the context of this association.
      * filler: Extension interpreted as OWL expression (r1 some r2 some .. some filler).
        * category `array`
          * items `string`: Type of object
        * id **required** `string`: ID or CURIE e.g. MGI:1201606
        * iri `string`: IRI
        * label `string`: RDFS Label
        * consider `array`
          * items `string`: Potential replacement object (if named object is obsoleted)
        * deprecated `boolean`: True if the node is deprecated/obsoleted.
        * description `string`: Descriptive text for the entity. For ontology classes, this will be a definition.
        * replaced_by `array`
          * items `string`: Direct 1:1 replacement (if named object is obsoleted)
        * synonyms `array`: list of synonyms or alternate labels
          * items [SynonymPropertyValue](#synonympropertyvalue)
        * types `array`
          * items `string`: Type of object (direct)
      * relation_chain `array`: Relationship type. If more than one value, interpreted as chain
        * items [Relation](#relation)
  * type `string`: Type of association, e.g. gene-phenotype

### AssociationResults
* AssociationResults
  * docs `array`: solr docs
    * items `object`
  * facet_counts `object`: Mapping between field names and association counts
  * highlighting `object`: Mapping between id and solr highlight
  * numFound `integer`: total number of associations matching query
  * associations `array`: Complete representation of full association object, plus evidence
    * items [Association](#association)
  * compact_associations `array`: Compact representation in which objects (e.g. phenotypes) are collected for subject-predicate pairs
    * items [CompactAssociationSet](#compactassociationset)
  * objects `array`: List of distinct objects used
    * items `string`

### AutocompleteResult
* AutocompleteResult `object`
  * category `array`: node categories
    * items `string`
  * has_highlight `boolean`: True if highlight can be interpreted as html, else False
  * highlight `string`: solr highlight
  * id `string`: curie formatted id
  * label `array`: primary label (rdfs:label)
    * items `string`
  * match `string`: matched part of document (may be primary label, synonym, id, etc)
  * taxon `string`: taxon as NCBITaxon curie
  * taxon_label `string`: taxon label

### AutocompleteResults
* AutocompleteResults `object`
  * docs `array`: list of AutocompleteResult docs
    * items [AutocompleteResult](#autocompleteresult)

### BioObject
* BioObject
  * category `array`
    * items `string`: Type of object
  * id **required** `string`: ID or CURIE e.g. MGI:1201606
  * iri `string`: IRI
  * label `string`: RDFS Label
  * consider `array`
    * items `string`: Potential replacement object (if named object is obsoleted)
  * deprecated `boolean`: True if the node is deprecated/obsoleted.
  * description `string`: Descriptive text for the entity. For ontology classes, this will be a definition.
  * replaced_by `array`
    * items `string`: Direct 1:1 replacement (if named object is obsoleted)
  * synonyms `array`: list of synonyms or alternate labels
    * items [SynonymPropertyValue](#synonympropertyvalue)
  * types `array`
    * items `string`: Type of object (direct)
  * association_counts `object`: association counts
  * taxon: Taxon to which the object belongs
    * id `string`: CURIE ID, e.g. NCBITaxon:9606
    * label `string`: RDFS Label
  * xrefs `array`: Database cross-references. These are usually CURIEs, but may also be URLs. E.g. ENSEMBL:ENSG00000099940 
    * items `string`

### BioObjectCore
* BioObjectCore
  * category `array`
    * items `string`: Type of object
  * id **required** `string`: ID or CURIE e.g. MGI:1201606
  * iri `string`: IRI
  * label `string`: RDFS Label
  * taxon: Taxon to which the object belongs
    * id `string`: CURIE ID, e.g. NCBITaxon:9606
    * label `string`: RDFS Label

### CompactAssociationSet
* CompactAssociationSet `object`
  * objects **required** `array`: List of O, for a given (S,R) pair, yielding (S,R,O) triples. E.g. list of MPs for (MGI:nnn, has_phenotype)
    * items `string`
  * relation **required** `string`: Relationship type connecting subject and object list
  * subject **required** `string`: Subject of association (what it is about), e.g. MGI:1201606

### CompareInput
* CompareInput `object`
  * query_ids `array`: list of query profiles
    * items `array`: list of ids
      * items `string`: curie formatted id
  * reference_ids `array`: list of ids
    * items `string`: curie formatted id

### D2PAssociation
* D2PAssociation
  * evidence_graph: An indirect association is a join between two or more direct assocations, e.g. gene to disease via ortholog. We record the full set of associations as a graph object
    * edges `array`: All edges in graph
      * items [Edge](#edge)
    * nodes `array`: All nodes in graph
      * items [Node](#node)
  * evidence_types `array`: Evidence types (ECO classes)
    * items [EntityReference](#entityreference)
  * id **required** `string`: Association/annotation unique ID
  * negated `boolean`: True if association is negated
  * object **required**: Object (sensu RDF), aka target, e.g. HP:0000448, MP:0002109, DOID:14330
    * category `array`
      * items `string`: Type of object
    * id **required** `string`: ID or CURIE e.g. MGI:1201606
    * iri `string`: IRI
    * label `string`: RDFS Label
    * taxon: Taxon to which the object belongs
      * id `string`: CURIE ID, e.g. NCBITaxon:9606
      * label `string`: RDFS Label
  * object_eq `array`: Equivalent identifiers to object node
    * items `string`
  * object_extensions `array`
    * items: Additional properties of the object in the context of this association. See http://www.biomedcentral.com/1471-2105/15/155
      * filler: Extension interpreted as OWL expression (r1 some r2 some .. some filler).
        * category `array`
          * items `string`: Type of object
        * id **required** `string`: ID or CURIE e.g. MGI:1201606
        * iri `string`: IRI
        * label `string`: RDFS Label
        * consider `array`
          * items `string`: Potential replacement object (if named object is obsoleted)
        * deprecated `boolean`: True if the node is deprecated/obsoleted.
        * description `string`: Descriptive text for the entity. For ontology classes, this will be a definition.
        * replaced_by `array`
          * items `string`: Direct 1:1 replacement (if named object is obsoleted)
        * synonyms `array`: list of synonyms or alternate labels
          * items [SynonymPropertyValue](#synonympropertyvalue)
        * types `array`
          * items `string`: Type of object (direct)
      * relation_chain `array`: Relationship type. If more than one value, interpreted as chain
        * items [Relation](#relation)
  * provided_by `array`: Provider of association, e.g. Orphanet, ClinVar
    * items `string`
  * publications `array`: Publications supporting association, extracted from evidence graph
    * items [EntityReference](#entityreference)
  * qualifiers `array`: Qualifier on the association
    * items `string`
  * relation **required**: Relationship type connecting subject and object
    * category `array`
      * items `string`: Type of object
    * id **required** `string`: ID or CURIE e.g. MGI:1201606
    * iri `string`: IRI
    * label `string`: RDFS Label
    * inverse `boolean`: is relation inverted
  * slim `array`: Objects mapped to a slim
    * items `string`
  * subject **required**: Subject of association (what it is about), e.g. ClinVar:nnn, MGI:1201606
    * category `array`
      * items `string`: Type of object
    * id **required** `string`: ID or CURIE e.g. MGI:1201606
    * iri `string`: IRI
    * label `string`: RDFS Label
    * taxon: Taxon to which the object belongs
      * id `string`: CURIE ID, e.g. NCBITaxon:9606
      * label `string`: RDFS Label
  * subject_eq `array`: Equivalent identifiers to subject node
    * items `string`
  * subject_extensions `array`
    * items: Additional properties of the subject in the context of this association.
      * filler: Extension interpreted as OWL expression (r1 some r2 some .. some filler).
        * category `array`
          * items `string`: Type of object
        * id **required** `string`: ID or CURIE e.g. MGI:1201606
        * iri `string`: IRI
        * label `string`: RDFS Label
        * consider `array`
          * items `string`: Potential replacement object (if named object is obsoleted)
        * deprecated `boolean`: True if the node is deprecated/obsoleted.
        * description `string`: Descriptive text for the entity. For ontology classes, this will be a definition.
        * replaced_by `array`
          * items `string`: Direct 1:1 replacement (if named object is obsoleted)
        * synonyms `array`: list of synonyms or alternate labels
          * items [SynonymPropertyValue](#synonympropertyvalue)
        * types `array`
          * items `string`: Type of object (direct)
      * relation_chain `array`: Relationship type. If more than one value, interpreted as chain
        * items [Relation](#relation)
  * type `string`: Type of association, e.g. gene-phenotype
  * frequency: Frequency of phenotype in patients with disease
    * id `string`: ID or CURIE e.g. MGI:1201606
    * label `string`: RDFS Label
  * onset: Onset of phenotype in disease process
    * id `string`: ID or CURIE e.g. MGI:1201606
    * label `string`: RDFS Label

### D2PAssociationResults
* D2PAssociationResults
  * docs `array`: solr docs
    * items `object`
  * facet_counts `object`: Mapping between field names and association counts
  * highlighting `object`: Mapping between id and solr highlight
  * numFound `integer`: total number of associations matching query
  * associations `array`: Complete representation of full disease to phenotype association, plus evidence
    * items [D2PAssociation](#d2passociation)
  * compact_associations `array`: Compact representation in which objects (e.g. phenotypes) are collected for subject-predicate pairs
    * items [CompactAssociationSet](#compactassociationset)
  * objects `array`: List of distinct objects used
    * items `string`

### Edge
* Edge `object`
  * meta `object`: metadata about the Edge
  * obj `string`: Object (target) Node ID
  * pred `string`: Predicate (relation) ID
  * sub `string`: Subject (source) Node ID

### EntityAnnotationResult
* EntityAnnotationResult `object`
  * content `string`
  * spans `array`: A marked-up span of text
    * items [Span](#span)

### EntityReference
* EntityReference `object`
  * id `string`: ID or CURIE e.g. MGI:1201606
  * label `string`: RDFS Label

### Feature
* Feature `object`
  * id `string`: curie formatted id
  * isPresent `boolean`: is the feature present
  * label `string`: curie formatted id
  * type `string`: feature type (only phenotype supported)

### Graph
* Graph `object`
  * edges `array`: All edges in graph
    * items [Edge](#edge)
  * nodes `array`: All nodes in graph
    * items [Node](#node)

### IcNode
* IcNode
  * id **required** `string`: ID or CURIE e.g. MGI:1201606
  * label `string`: RDFS Label
  * IC `number`: Information content

### LayAutocomplete
* LayAutocomplete `object`
  * highlight `string`: solr highlight
  * id `string`: curie formatted id
  * label `string`: primary label (rdfs:label)
  * matched_synonym `string`: matched synonym

### LayResults
* LayResults `object`
  * results `array`: list of AutocompleteResult docs
    * items [LayAutocomplete](#layautocomplete)

### NamedObject
* NamedObject
  * category `array`
    * items `string`: Type of object
  * id **required** `string`: ID or CURIE e.g. MGI:1201606
  * iri `string`: IRI
  * label `string`: RDFS Label
  * consider `array`
    * items `string`: Potential replacement object (if named object is obsoleted)
  * deprecated `boolean`: True if the node is deprecated/obsoleted.
  * description `string`: Descriptive text for the entity. For ontology classes, this will be a definition.
  * replaced_by `array`
    * items `string`: Direct 1:1 replacement (if named object is obsoleted)
  * synonyms `array`: list of synonyms or alternate labels
    * items [SynonymPropertyValue](#synonympropertyvalue)
  * types `array`
    * items `string`: Type of object (direct)

### NamedObjectCore
* NamedObjectCore `object`
  * category `array`
    * items `string`: Type of object
  * id **required** `string`: ID or CURIE e.g. MGI:1201606
  * iri `string`: IRI
  * label `string`: RDFS Label

### Node
* Node `object`
  * id **required** `string`: ID or CURIE e.g. MGI:1201606
  * label `string`: RDFS Label

### Page_of_variant_sets
* Page_of_variant_sets
  * page `integer`: Number of this page of results
  * pages `integer`: Total number of pages of results
  * per_page `integer`: Number of items per page of results
  * total `integer`: Total number of results
  * items `array`
    * items [variant_set](#variant_set)

### PairwiseMatch
* PairwiseMatch `object`
  * lcs: lowest common subsumer
    * id **required** `string`: ID or CURIE e.g. MGI:1201606
    * label `string`: RDFS Label
    * IC `number`: Information content
  * match: match id
    * id **required** `string`: ID or CURIE e.g. MGI:1201606
    * label `string`: RDFS Label
    * IC `number`: Information content
  * reference: reference id
    * id **required** `string`: ID or CURIE e.g. MGI:1201606
    * label `string`: RDFS Label
    * IC `number`: Information content

### Relation
* Relation
  * category `array`
    * items `string`: Type of object
  * id **required** `string`: ID or CURIE e.g. MGI:1201606
  * iri `string`: IRI
  * label `string`: RDFS Label
  * consider `array`
    * items `string`: Potential replacement object (if named object is obsoleted)
  * deprecated `boolean`: True if the node is deprecated/obsoleted.
  * description `string`: Descriptive text for the entity. For ontology classes, this will be a definition.
  * replaced_by `array`
    * items `string`: Direct 1:1 replacement (if named object is obsoleted)
  * synonyms `array`: list of synonyms or alternate labels
    * items [SynonymPropertyValue](#synonympropertyvalue)
  * types `array`
    * items `string`: Type of object (direct)

### RelationRef
* RelationRef
  * category `array`
    * items `string`: Type of object
  * id **required** `string`: ID or CURIE e.g. MGI:1201606
  * iri `string`: IRI
  * label `string`: RDFS Label
  * inverse `boolean`: is relation inverted

### SearchResult
* SearchResult `object`
  * docs `array`: solr docs
    * items `object`
  * facet_counts `object`: Mapping between field names and association counts
  * highlighting `object`: Mapping between id and solr highlight
  * numFound `integer`: total number of associations matching query

### Seq
* Seq
  * category `array`
    * items `string`: Type of object
  * id **required** `string`: ID or CURIE e.g. MGI:1201606
  * iri `string`: IRI
  * label `string`: RDFS Label
  * consider `array`
    * items `string`: Potential replacement object (if named object is obsoleted)
  * deprecated `boolean`: True if the node is deprecated/obsoleted.
  * description `string`: Descriptive text for the entity. For ontology classes, this will be a definition.
  * replaced_by `array`
    * items `string`: Direct 1:1 replacement (if named object is obsoleted)
  * synonyms `array`: list of synonyms or alternate labels
    * items [SynonymPropertyValue](#synonympropertyvalue)
  * types `array`
    * items `string`: Type of object (direct)
  * association_counts `object`: association counts
  * taxon: Taxon to which the object belongs
    * id `string`: CURIE ID, e.g. NCBITaxon:9606
    * label `string`: RDFS Label
  * xrefs `array`: Database cross-references. These are usually CURIEs, but may also be URLs. E.g. ENSEMBL:ENSG00000099940 
    * items `string`
  * alphabet `string`: one of: DNA, RNA or AA
  * md5checksum `string`: checksum
  * residues `string`: string representing sequence of residues
  * seqlen `string`: length of sequence

### SequenceFeature
* SequenceFeature
  * category `array`
    * items `string`: Type of object
  * id **required** `string`: ID or CURIE e.g. MGI:1201606
  * iri `string`: IRI
  * label `string`: RDFS Label
  * consider `array`
    * items `string`: Potential replacement object (if named object is obsoleted)
  * deprecated `boolean`: True if the node is deprecated/obsoleted.
  * description `string`: Descriptive text for the entity. For ontology classes, this will be a definition.
  * replaced_by `array`
    * items `string`: Direct 1:1 replacement (if named object is obsoleted)
  * synonyms `array`: list of synonyms or alternate labels
    * items [SynonymPropertyValue](#synonympropertyvalue)
  * types `array`
    * items `string`: Type of object (direct)
  * association_counts `object`: association counts
  * taxon: Taxon to which the object belongs
    * id `string`: CURIE ID, e.g. NCBITaxon:9606
    * label `string`: RDFS Label
  * xrefs `array`: Database cross-references. These are usually CURIEs, but may also be URLs. E.g. ENSEMBL:ENSG00000099940 
    * items `string`
  * homology_associations `array`
    * items [Association](#association)
  * locations `array`
    * items [SequenceLocation](#sequencelocation)
  * seq [Seq](#seq)

### SequenceLocation
* SequenceLocation
  * category `array`
    * items `string`: Type of object
  * id **required** `string`: ID or CURIE e.g. MGI:1201606
  * iri `string`: IRI
  * label `string`: RDFS Label
  * consider `array`
    * items `string`: Potential replacement object (if named object is obsoleted)
  * deprecated `boolean`: True if the node is deprecated/obsoleted.
  * description `string`: Descriptive text for the entity. For ontology classes, this will be a definition.
  * replaced_by `array`
    * items `string`: Direct 1:1 replacement (if named object is obsoleted)
  * synonyms `array`: list of synonyms or alternate labels
    * items [SynonymPropertyValue](#synonympropertyvalue)
  * types `array`
    * items `string`: Type of object (direct)
  * association_counts `object`: association counts
  * taxon: Taxon to which the object belongs
    * id `string`: CURIE ID, e.g. NCBITaxon:9606
    * label `string`: RDFS Label
  * xrefs `array`: Database cross-references. These are usually CURIEs, but may also be URLs. E.g. ENSEMBL:ENSG00000099940 
    * items `string`
  * end [SequencePosition](#sequenceposition)
  * phase `integer`
  * score `integer`
  * start [SequencePosition](#sequenceposition)
  * strand `integer`: Strand direction: 1=='+', -1=='-', 0 or null infers unknown.

### SequencePosition
* SequencePosition `object`
  * position `integer`
  * reference `string`

### SimMatch
* SimMatch
  * id **required** `string`: ID or CURIE e.g. MGI:1201606
  * label `string`: RDFS Label
  * taxon: taxon
    * id **required** `string`: ID or CURIE e.g. MGI:1201606
    * label `string`: RDFS Label
  * type `string`: node type (eg phenotype, disease)
  * pairwise_match `array`
    * items: list of pairwise matches
      * lcs: lowest common subsumer
        * id **required** `string`: ID or CURIE e.g. MGI:1201606
        * label `string`: RDFS Label
        * IC `number`: Information content
      * match: match id
        * id **required** `string`: ID or CURIE e.g. MGI:1201606
        * label `string`: RDFS Label
        * IC `number`: Information content
      * reference: reference id
        * id **required** `string`: ID or CURIE e.g. MGI:1201606
        * label `string`: RDFS Label
        * IC `number`: Information content
  * rank `string`: rank
  * score `number`: sim score
  * significance `string`: p-value

### SimMetadata
* SimMetadata `object`
  * max_max_ic `number`: max IC

### SimQuery
* SimQuery `object`
  * ids `array`
    * items: list of ids
      * id **required** `string`: ID or CURIE e.g. MGI:1201606
      * label `string`: RDFS Label
  * negated_ids `array`
    * items: list of ids
      * id **required** `string`: ID or CURIE e.g. MGI:1201606
      * label `string`: RDFS Label
  * reference: reference individual or class (eg gene, disease)
    * id **required** `string`: ID or CURIE e.g. MGI:1201606
    * label `string`: RDFS Label
    * taxon: taxon
      * id **required** `string`: ID or CURIE e.g. MGI:1201606
      * label `string`: RDFS Label
    * type `string`: node type (eg phenotype, disease)
  * target_ids `array`
    * items `array`
      * items: query ids
        * id **required** `string`: ID or CURIE e.g. MGI:1201606
        * label `string`: RDFS Label
  * unresolved_ids `array`: list of unresolved ids
    * items `string`: curie formatted id

### SimResult
* SimResult `object`
  * matches `array`
    * items: list of matches
      * id **required** `string`: ID or CURIE e.g. MGI:1201606
      * label `string`: RDFS Label
      * taxon: taxon
        * id **required** `string`: ID or CURIE e.g. MGI:1201606
        * label `string`: RDFS Label
      * type `string`: node type (eg phenotype, disease)
      * pairwise_match `array`
        * items: list of pairwise matches
          * lcs: lowest common subsumer
          * match: match id
          * reference: reference id
      * rank `string`: rank
      * score `number`: sim score
      * significance `string`: p-value
  * metadata [SimMetadata](#simmetadata)
  * query [SimQuery](#simquery)

### Span
* Span `object`
  * end `integer`: end of span text relative to content
  * start `integer`: start of span text relative to content
  * text `string`: span text
  * token `array`: A token or entity extracted from the span text
    * items [Token](#token)

### SufficiencyOutput
* SufficiencyOutput `object`
  * categorical_score `number`: categorical score
  * scaled_score `number`: scaled score
  * simple_score `number`: simple score

### SufficiencyPostInput
* SufficiencyPostInput `object`
  * features `array`: list of features
    * items [Feature](#feature)
  * id `string`: curie formatted id

### SynonymPropertyValue
* SynonymPropertyValue
  * pred `string`: predicate (attribute) part
  * val `string`: value part
  * xrefs `array`: Xrefs provenance for property-value
    * items `string`

### Taxon
* Taxon `object`
  * id `string`: CURIE ID, e.g. NCBITaxon:9606
  * label `string`: RDFS Label

### Token
* Token `object`
  * category `array`: entity categories
    * items `string`
  * id `string`: The CURIE for the entity or token
  * terms `array`: terms
    * items `string`

### TypedNode
* TypedNode
  * id **required** `string`: ID or CURIE e.g. MGI:1201606
  * label `string`: RDFS Label
  * taxon: taxon
    * id **required** `string`: ID or CURIE e.g. MGI:1201606
    * label `string`: RDFS Label
  * type `string`: node type (eg phenotype, disease)

### variant_set
* variant_set `object`
  * body **required** `string`: Article content
  * category `string`
  * category_id `integer`
  * id `integer`: The unique identifier of a variant set
  * pub_date `string`
  * title **required** `string`: Article title


