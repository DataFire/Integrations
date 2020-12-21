# @datafire/ebi_ac_uk

Client library for CROssBAR Data API

## Installation and Usage
```bash
npm install --save @datafire/ebi_ac_uk
```
```js
let ebi_ac_uk = require('@datafire/ebi_ac_uk').create();

.then(data => {
  console.log(data);
});
```

## Description

# About CROssBAR & data
**CROssBAR**: Comprehensive Resource of Biomedical Relations with Deep Learning Applications and Knowledge Graph Representations
CROssBAR is a comprehensive system that integrates large-scale biomedical data from various resources e.g UniProt, ChEMBL, Drugbank, EFO, HPO, InterPro & PubChem and stores them in a new NoSQL database, enrich these data with deep learning based prediction of relations between numerous biomedical entities, rigorously analyse the enriched data to obtain biologically meaningful modules and display them to the user via easy to interpret, interactive and heterogeneous knowledge graphs.
CROssBAR platform exposes a set of 12 endpoints to query data stored in the CROssBAR database. These endpoints help the user to find data of interest using different parameters provided by the API endpoint.
For example,
https://www.ebi.ac.uk/tools/crossbar/proteins?accession=A0A023GRW5 -> will provide protein information about accession 'A0A023GRW5' including its interactions, functions, cross-references, variations and more.
https://www.ebi.ac.uk/tools/crossbar/activities?moleculeChemblId=CHEMBL465983 -> will provide ChEMBL bio-interactions related information including targets and bio-activity measurements associated with molecule chembl id 'CHEMBL465983'

**Knowledge graphs**
Another use case of CROssBAR's API endpoints is in building knowledge graphs. These endpoints can be *weaved* together (output from one API endpoint fed as input to another API endpoint) programmatically to link nodes like protein, disease, drugs etc. as nodes of the graph. The endpoints are designed to be independent from each other which allows users the flexibility to drive biological networks from any facet e.g drug-centric, disease-centric, gene-centric etc. Our service for knowledge graph construction is available at https://crossbar.kansil.org.
An example for the part of the background queries on the CROssBAR API during the construction of a knowledge graph, 
(with the aim of keeping the example simple, we have only included the processes related to pathways, genes/proteins and drugs/compounds)
In this example, we would like to find bio-active compounds (with a pChEMBL value threshold of at least 6.0) & drugs targeting all proteins belonging to "WNT ligand biogenesis and trafficking" pathway (based on Reactome pathway annotations).
This can be achieved by using endpoints listed on this swagger documentation as illustrated in following steps-
Find bio-active compounds (with a pChEMBL value threshold of at least 6.0) & drugs targeting all proteins belonging to "WNT ligand biogenesis and trafficking" pathway (based on Reactome annotations)
This can be achieved by using endpoints listed on [this swagger documentation](https://www.ebi.ac.uk/tools/crossbar/swagger-ui.html) as illustrated in following steps-
1. Get all proteins from “/proteins” API endpoint which have a reactome pathway name equal to "WNT ligand biogenesis and trafficking".
2. From the collection of uniprot protein accessions collected from step 1 above, we query “/targets” API endpoint to obtain the ‘target_chembl_id’s of these proteins.
3. From the collection of target_chembl_ids collected from step 2 above, we query “/activities” API endpoint with pChEMBL value >=6, to obtain the ’molecule_chembl_id’s of the molecules that we need. 
4. From the collection of uniprot protein accessions collected from step 1 above, we find out Drug names and ids from the “/drugs” API endpoint that targets our proteins.
5. From the collection of ’molecule_chembl_id’s obtained in step3, we query “/molecules” endpoint to get the compounds that are interacting with the genes/proteins belonging to the “WNT ligand biogenesis and trafficking” pathway.

## Actions

### getActivitiesUsingGET
Get ChEMBL activities


```js
ebi_ac_uk.getActivitiesUsingGET({}, context)
```

#### Input
* input `object`
  * assayChemblId `array`: assayChemblId
  * limit `integer`: limit
  * moleculeChemblId `array`: moleculeChemblId
  * page `integer`: page
  * pchemblValue `number`: pchemblValue
  * targetChemblId `array`: targetChemblId

#### Output
* output [Activities](#activities)

### getAssaysUsingGET
Get ChEMBL assays


```js
ebi_ac_uk.getAssaysUsingGET({}, context)
```

#### Input
* input `object`
  * assayChemblId `array`: assayChemblId
  * assayOrg `array`: assayOrg
  * assayType `array`: assayType
  * limit `integer`: limit
  * page `integer`: page
  * targetChemblId `array`: targetChemblId

#### Output
* output [Assays](#assays)

### getDrugsUsingGET
drugs collected from Drugbank


```js
ebi_ac_uk.getDrugsUsingGET({}, context)
```

#### Input
* input `object`
  * accession `array`: accession
  * chemblId `array`: chemblId
  * identifier `array`: identifier
  * limit `integer`: limit
  * name `array`: name
  * page `integer`: page
  * pubchemCid `array`: pubchemCid

#### Output
* output [Drugs](#drugs)

### getEFOUsingGET
Get EFO diseases data


```js
ebi_ac_uk.getEFOUsingGET({}, context)
```

#### Input
* input `object`
  * doid `array`: doid
  * label `array`: label
  * limit `integer`: limit
  * mesh `array`: mesh
  * oboId `array`: oboId
  * omimId `array`: omimId
  * page `integer`: page
  * synonym `array`: synonym

#### Output
* output [EFOEntities](#efoentities)

### getHpoUsingGET
Get HPO phenotypes data


```js
ebi_ac_uk.getHpoUsingGET({}, context)
```

#### Input
* input `object`
  * genesymbol `array`: genesymbol
  * hpotermname `array`: hpotermname
  * limit `integer`: limit
  * page `integer`: page
  * synonym `array`: synonym

#### Output
* output [HpoEntities](#hpoentities)

### getMoleculesUsingGET
Get ChEMBL molecules


```js
ebi_ac_uk.getMoleculesUsingGET({}, context)
```

#### Input
* input `object`
  * canonicalSmiles `array`: canonicalSmiles
  * inchiKey `array`: inchiKey
  * limit `integer`: limit
  * moleculeChemblId `array`: moleculeChemblId
  * page `integer`: page

#### Output
* output [Molecules](#molecules)

### getProteinsUsingGET
Proteins collected from Uniprot for selective tax ids  HUMAN(9606), MOUSE(10090), RAT(10116), BOVINE(9913), ESCHERICHIA_COLI(83333), SUS_SCROFA(9823), MYCOBACTERIUM_TUBERCULOSIS(83332), ORYCTOLAGUS_CUNICULUS(9986), SACCHAROMYCES_CEREVISIAE(559292), CVHSA(694009) & SARS2(2697049)


```js
ebi_ac_uk.getProteinsUsingGET({}, context)
```

#### Input
* input `object`
  * accession `array`: accession
  * ec `array`: ec
  * fullName `array`: fullName
  * gene `array`: gene
  * go `array`: go
  * interpro `array`: interpro
  * limit `integer`: limit
  * omim `array`: omim
  * orphanet `array`: orphanet
  * page `integer`: page
  * pfam `array`: pfam
  * reactome `array`: reactome
  * taxId `array`: taxId

#### Output
* output [Proteins](#proteins)

### getBioassaysUsingGET
Get pubchem bioassays


```js
ebi_ac_uk.getBioassaysUsingGET({}, context)
```

#### Input
* input `object`
  * accession `array`: accession
  * assayPubchemId `array`: assayPubchemId
  * limit `integer`: limit
  * ncbiProteinId `array`: ncbiProteinId
  * page `integer`: page

#### Output
* output [Bioassays](#bioassays)

### getBioassaysUsingGET_1
Get pubchem bioassays associated to particular substance ids (sid) & outcome


```js
ebi_ac_uk.getBioassaysUsingGET_1({}, context)
```

#### Input
* input `object`
  * limit `integer`: limit
  * outcome `string`: outcome
  * page `integer`: page
  * sids `array`: sids

#### Output
* output [Bioassays](#bioassays)

### getCompoundsUsingGET
Get pubchem compounds


```js
ebi_ac_uk.getCompoundsUsingGET({}, context)
```

#### Input
* input `object`
  * canonicalSmiles `array`: canonicalSmiles
  * cid `array`: cid
  * inchiKey `array`: inchiKey
  * limit `integer`: limit
  * page `integer`: page

#### Output
* output [PubchemCompounds](#pubchemcompounds)

### getSubstancesUsingGET
Get pubchem substances


```js
ebi_ac_uk.getSubstancesUsingGET({}, context)
```

#### Input
* input `object`
  * cid `array`: cid
  * limit `integer`: limit
  * page `integer`: page
  * sid `array`: sid

#### Output
* output [PubchemSubstances](#pubchemsubstances)

### getTargetsUsingGET
Get ChEMBL targets


```js
ebi_ac_uk.getTargetsUsingGET({}, context)
```

#### Input
* input `object`
  * accession `array`: accession
  * limit `integer`: limit
  * page `integer`: page
  * targetIds `array`: targetIds

#### Output
* output [Targets](#targets)



## Definitions

### Activities
* Activities `object`
  * activities `array`
    * items [Activity](#activity)
  * pageMeta [PageMeta](#pagemeta)

### Activity
* Activity `object`
  * assay_chembl_id `string`
  * data_validity_comment `string`
  * molecule_chembl_id `string`
  * pchembl_value `number`
  * standard_flag `boolean`
  * standard_relation `string`
  * standard_units `string`
  * standard_value `number`
  * target_chembl_id `string`

### Assay
* Assay `object`
  * assay_chembl_id `string`
  * assay_id `string`
  * assay_organism `string`
  * assay_type `string`
  * confidence_score `number`
  * target_chembl_id `string`

### AssayData
* AssayData `object`
  * standard_type `string`
  * standard_units `string`
  * standard_value `number`

### AssayOrganism
* AssayOrganism `object`
  * db_object_id `integer`
  * tax_name `string`

### Assays
* Assays `object`
  * assays `array`
    * items [Assay](#assay)
  * pageMeta [PageMeta](#pagemeta)

### BioAssay
* BioAssay `object`
  * activity `integer`
  * assay_organisms `array`
    * items [AssayOrganism](#assayorganism)
  * assay_pubchem_id `integer`
  * assay_type `string`
  * chembl_xref `string`
  * protein_name `string`
  * source `string`
  * target_info `array`
    * items [TargetInfo](#targetinfo)
  * target_type_info `array`
    * items [TargetType](#targettype)

### BioAssayMetaData
* BioAssayMetaData `object`
  * bioAssay [BioAssay](#bioassay)
  * sidRelatedData `array`
    * items [SidRelatedData](#sidrelateddata)

### Bioassays
* Bioassays `object`
  * bioassays `array`
    * items [BioAssayMetaData](#bioassaymetadata)
  * pageMeta [PageMeta](#pagemeta)

### CrossReferences
* CrossReferences `object`
  * ensembl `array`
    * items [Ensembl](#ensembl)
  * go `array`
    * items [Go](#go)
  * interpro `array`
    * items [Interpro](#interpro)
  * kegg `array`
    * items [Kegg](#kegg)
  * omim `array`
    * items [Omim](#omim)
  * openTargets `array`
    * items [OpenTargets](#opentargets)
  * orphanet `array`
    * items [Orphanet](#orphanet)
  * pdBe `array`
    * items [PDBe](#pdbe)
  * pfam `array`
    * items [Pfam](#pfam)
  * reactome `array`
    * items [Reactome](#reactome)

### CrossbarDrug
* CrossbarDrug `object`
  * alogp `number`
  * canonical_smiles `string`
  * chembl_id `string`
  * full_mwt `number`
  * identifier `string`
  * inchi_key `string`
  * kegg_cid `string`
  * molecule_type `string`
  * name `string`
  * pathway `array`
    * items [Pathway](#pathway)
  * pb_structures `array`
    * items `string`
  * polar_surface_area `number`
  * pubchem_cid `string`
  * pubchem_sid `string`
  * standard_inchi `string`
  * targets `array`
    * items [Target](#target)
  * uniprot_accession `string`

### CrossbarFeature
* CrossbarFeature `object`
  * begin [FeaturePosition](#featureposition)
  * category `string`
  * description `string`
  * end [FeaturePosition](#featureposition)
  * ftId `string`
  * type `string`

### CrossbarMolecule
* CrossbarMolecule `object`
  * alogp `number`
  * canonical_smiles `string`
  * chirality `number`
  * full_mwt `number`
  * heavy_atoms_count `integer`
  * inchi_key `string`
  * molecular_species `string`
  * molecular_type `string`
  * molecule_chembl_id `string`
  * parent_chembl_id `string`
  * prodrug `number`
  * standard_inchi `string`
  * xrefs `array`
    * items [Xref](#xref)

### CrossbarPCCompound
* CrossbarPCCompound `object`
  * alogp `number`
  * atom_chiral_count `integer`
  * atom_chiral_def_count `integer`
  * bond_chiral_count `integer`
  * bond_chiral_def_count `integer`
  * bond_chiral_undef_count `integer`
  * canonical_smiles `string`
  * cid `integer`
  * covalent_unit_count `integer`
  * finger_print `string`
  * full_mwt `number`
  * heavy_atoms_count `integer`
  * inchi_key `string`
  * isotope_atom_count `integer`
  * polar_surface_area `number`
  * standard_inchi `string`
  * tautomers_count `integer`

### CrossbarProteinVariation
* CrossbarProteinVariation `object`
  * alternativeSequence `string`
  * association `array`
    * items [VariationAssociation](#variationassociation)
  * begin [FeaturePosition](#featureposition)
  * clinicalSignificances `string`
  * description `string`
  * end [FeaturePosition](#featureposition)
  * evidences `array`
    * items [VariationEvidence](#variationevidence)
  * ftId `string`
  * somaticStatus `integer`
  * sourceType `string`
  * wildType `string`
  * xrefs `array`
    * items [VariationXref](#variationxref)

### CrossbarTarget
* CrossbarTarget `object`
  * accession `string`
  * target_chembl_id `string`

### Drugs
* Drugs `object`
  * drugs `array`
    * items [CrossbarDrug](#crossbardrug)
  * pageMeta [PageMeta](#pagemeta)

### EFO
* EFO `object`
  * description `array`
    * items `string`
  * doid `array`
    * items `string`
  * icd9 `array`
    * items `string`
  * label `string`
  * mesh `array`
    * items `string`
  * ncit `array`
    * items `string`
  * obo_id `string`
  * omim `array`
    * items `string`
  * short_form `string`
  * snowmed `array`
    * items `string`
  * synonyms `array`
    * items `string`
  * umls `array`
    * items `string`

### EFOEntities
* EFOEntities `object`
  * diseases `array`
    * items [EFO](#efo)
  * pageMeta [PageMeta](#pagemeta)

### Ensembl
* Ensembl `object`
  * geneId `string`
  * id `string`
  * isoform `string`
  * proteinSequenceId `string`

### FeaturePosition
* FeaturePosition `object`
  * ceil `integer`
  * floor `integer`
  * uncertain `boolean`
  * unparsed `string`

### Features
* Features `object`
  * active_site `array`
    * items [CrossbarFeature](#crossbarfeature)
  * binding_site `array`
    * items [CrossbarFeature](#crossbarfeature)
  * chain `array`
    * items [CrossbarFeature](#crossbarfeature)
  * domain `array`
    * items [CrossbarFeature](#crossbarfeature)
  * mutagen `array`
    * items [CrossbarFeature](#crossbarfeature)
  * region `array`
    * items [CrossbarFeature](#crossbarfeature)
  * top_dom `array`
    * items [CrossbarFeature](#crossbarfeature)
  * variant `array`
    * items [CrossbarFeature](#crossbarfeature)

### Fragment
* Fragment `object`
  * from `integer`
  * to `integer`
  * type `string`

### Gene
* Gene `object`
  * id `string`
  * symbol `string`

### Go
* Go `object`
  * evidences `array`
    * items [GoEvidence](#goevidence)
  * id `string`
  * term `string`

### GoEvidence
* GoEvidence `object`
  * source_id `string`
  * source_name `string`

### HPOEntity
* HPOEntity `object`
  * db_references `array`
    * items `string`
  * gene `array`
    * items [Gene](#gene)
  * hpo_id `string`
  * synonyms `array`
    * items `string`
  * term_name `string`

### HitPosition
* HitPosition `object`
  * from `integer`
  * to `integer`

### HpoEntities
* HpoEntities `object`
  * hpo `array`
    * items [HPOEntity](#hpoentity)
  * pageMeta [PageMeta](#pagemeta)

### Interpro
* Interpro `object`
  * entry_id `string`
  * entry_name `string`
  * entry_type `string`
  * fragments `array`
    * items [Fragment](#fragment)
  * hit_position [HitPosition](#hitposition)

### Kegg
* Kegg `object`
  * id `string`

### Molecules
* Molecules `object`
  * molecules `array`
    * items [CrossbarMolecule](#crossbarmolecule)
  * pageMeta [PageMeta](#pagemeta)

### Omim
* Omim `object`
  * _id `string`
  * type `string`

### OpenTargets
* OpenTargets `object`
  * id `string`

### Orphanet
* Orphanet `object`
  * disease `string`
  * id `string`

### PDBe
* PDBe `object`
  * chains `string`
  * id `string`
  * method `string`
  * resolution `string`

### PageMeta
* PageMeta `object`
  * currentElements `integer`
  * currentPage `integer`
  * limit `integer`
  * totalElements `integer`
  * totalPages `integer`

### Pathway
* Pathway `object`
  * category `string`
  * name `string`

### Pfam
* Pfam `object`
  * entryName `string`
  * id `string`

### Protein
* Protein `object`
  * accession `string`
  * chromosome `string`
  * crossreferences [CrossReferences](#crossreferences)
  * ec_numbers `array`
    * items `string`
  * features [Features](#features)
  * full_name `string`
  * genes `array`
    * items `string`
  * interactions `array`
    * items [ProteinInteraction](#proteininteraction)
  * length `number`
  * mass `number`
  * tax_id `integer`
  * variations `array`
    * items [CrossbarProteinVariation](#crossbarproteinvariation)

### ProteinInteraction
* ProteinInteraction `object`
  * id `string`
  * interaction_type `string`
  * interactors `array`
    * items `string`

### Proteins
* Proteins `object`
  * pageMeta [PageMeta](#pagemeta)
  * proteins `array`
    * items [Protein](#protein)

### PubchemCompounds
* PubchemCompounds `object`
  * compounds `array`
    * items [CrossbarPCCompound](#crossbarpccompound)
  * pageMeta [PageMeta](#pagemeta)

### PubchemSubstances
* PubchemSubstances `object`
  * pageMeta [PageMeta](#pagemeta)
  * substances `array`
    * items [Substance](#substance)

### Reactome
* Reactome `object`
  * id `string`
  * pathwayName `string`

### SidRelatedData
* SidRelatedData `object`
  * assay_data `array`
    * items [AssayData](#assaydata)
  * assay_pubchem_id `integer`
  * outcome `string`
  * sid `integer`
  * standard_relation `string`

### Substance
* Substance `object`
  * chembl_cmpd_xref `string`
  * cids `array`
    * items `integer`
  * sid `integer`

### Target
* Target `object`
  * accessions `array`
    * items `string`
  * action `array`
    * items `string`
  * id `string`
  * name `string`
  * organism `string`

### TargetInfo
* TargetInfo `object`
  * ncbi_protein_id `integer`
  * target_chembl_id `string`
  * uniprot_accession `string`

### TargetType
* TargetType `object`
  * molecule_type `string`
  * value `integer`

### Targets
* Targets `object`
  * pageMeta [PageMeta](#pagemeta)
  * targets `array`
    * items [CrossbarTarget](#crossbartarget)

### VariationAssociation
* VariationAssociation `object`
  * description `string`
  * evidences `array`
    * items [VariationEvidence](#variationevidence)
  * name `string`
  * xrefs `array`
    * items [VariationXref](#variationxref)

### VariationEvidence
* VariationEvidence `object`
  * source [VariationEvidenceSource](#variationevidencesource)

### VariationEvidenceSource
* VariationEvidenceSource `object`
  * id `string`
  * name `string`

### VariationXref
* VariationXref `object`
  * id `string`
  * name `string`

### Xref
* Xref `object`
  * id `string`
  * source `string`


