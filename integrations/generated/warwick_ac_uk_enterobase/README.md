# @datafire/warwick_ac_uk_enterobase

Client library for Enterobase-API

## Installation and Usage
```bash
npm install --save @datafire/warwick_ac_uk_enterobase
```
```js
let warwick_ac_uk_enterobase = require('@datafire/warwick_ac_uk_enterobase').create({
  username: "",
  password: ""
});

.then(data => {
  console.log(data);
});
```

## Description


API for EnteroBase (http://enterobase.warwick.ac.uk) 

EnteroBase is a user-friendly online resource, where users can upload their 
own sequencing data for de novo assembly by a stream-lined pipeline. The assemblies 
are used for calling MLST and wgMLST patterns, allowing users to compare their strains 
to publically available genotyping data from other EnteroBase users, GenBank and classical MLST databases.

Click here to find how to get and use an API token: http://bit.ly/1TKlaOU


## Actions

### api.v2.0.get
Top level information about EnteroBase databases


```js
warwick_ac_uk_enterobase.api.v2.0.get({}, context)
```

#### Input
* input `object`
  * prefix `string`: Database prefix, e.g. SAL for Salmonella
  * name `string`: Species database name (senterica, ecoli, yersinia, mcatarrhalis) for Salmonella, Escherichia, Yersinia, Moraxella respectively
  * description `string`: Database description

#### Output
*Output schema unknown*

### api.v2.0.login.get
Login endpoint, refresh your API token


```js
warwick_ac_uk_enterobase.api.v2.0.login.get({}, context)
```

#### Input
* input `object`
  * username `string`: EnteroBase username
  * password `string`: EnteroBase Password

#### Output
*Output schema unknown*

### api.v2.0.lookup.get
Generic endpoint for lookup list of barcodes


```js
warwick_ac_uk_enterobase.api.v2.0.lookup.get({}, context)
```

#### Input
* input `object`
  * barcode `string`: Unique barcode for Traces records, <database prefix>_<ID code>_<Table code> e.g. SAL_AA0001AA_ST

#### Output
*Output schema unknown*

### api.v2.0.lookup.barcode.get
Generic endpoint for lookup of barcodes


```js
warwick_ac_uk_enterobase.api.v2.0.lookup.barcode.get({
  "barcode": ""
}, context)
```

#### Input
* input `object`
  * barcode **required** `string`: Unique barcode for Traces records, <database prefix>_<ID code>_<Table code> e.g. SAL_AA0001AA_ST

#### Output
*Output schema unknown*

### api.v2.0.lookup.barcode.post
Generic endpoint for lookup of barcodes


```js
warwick_ac_uk_enterobase.api.v2.0.lookup.barcode.post({
  "barcode": ""
}, context)
```

#### Input
* input `object`
  * body `object`
    * barcode `string`
  * barcode **required** `string`: Unique barcode for Traces records, <database prefix>_<ID code>_<Table code> e.g. SAL_AA0001AA_ST

#### Output
*Output schema unknown*

### api.v2.0.database.assemblies.get
Genome assemblies


```js
warwick_ac_uk_enterobase.api.v2.0.database.assemblies.get({
  "database": ""
}, context)
```

#### Input
* input `object`
  * orderby `string`: Field to order by. Default: barcode
  * only_fields `array`
  * barcode `array`: Unique barcode for Traces records, <database prefix>_<ID code>_AS e.g. SAL_AA0001AA_AS
  * n50 `integer`
  * top_species `string`
  * uberstrain `string`
  * version `integer`
  * limit `integer`: Number of results per page
  * reldate `integer`
  * offset `integer`: Cursor position in results
  * assembly_status `string`
  * sortorder `string`: Order of search results: asc or desc
  * database **required** `string`: Species database name (senterica, ecoli, yersinia, mcatarrhalis) for Salmonella, Escherichia, Yersinia, Moraxella respectively

#### Output
*Output schema unknown*

### api.v2.0.database.assemblies.barcode.get
Genome assemblies


```js
warwick_ac_uk_enterobase.api.v2.0.database.assemblies.barcode.get({
  "barcode": "",
  "database": ""
}, context)
```

#### Input
* input `object`
  * body `object`
    * assembly_status `string`
    * barcode `array`
      * items `string`
    * limit `integer`
    * n50 `integer`
    * offset `integer`
    * only_fields `array`
      * items `string`
    * orderby `string`
    * reldate `integer`
    * sortorder `string`
    * top_species `string`
    * uberstrain `string`
    * version `integer`
  * barcode **required** `string`: Unique barcode for Traces records, <database prefix>_<ID code>_AS e.g. SAL_AA0001AA_AS
  * database **required** `string`: Species database name (senterica, ecoli, yersinia, mcatarrhalis) for Salmonella, Escherichia, Yersinia, Moraxella respectively

#### Output
*Output schema unknown*

### api.v2.0.database.assemblies.barcode.post
Genome assemblies


```js
warwick_ac_uk_enterobase.api.v2.0.database.assemblies.barcode.post({
  "barcode": "",
  "database": ""
}, context)
```

#### Input
* input `object`
  * body `object`
    * assembly_status `string`
    * barcode `array`
      * items `string`
    * limit `integer`
    * n50 `integer`
    * offset `integer`
    * only_fields `array`
      * items `string`
    * orderby `string`
    * reldate `integer`
    * sortorder `string`
    * top_species `string`
    * uberstrain `string`
    * version `integer`
  * barcode **required** `string`: Unique barcode for Traces records, <database prefix>_<ID code>_AS e.g. SAL_AA0001AA_AS
  * database **required** `string`: Species database name (senterica, ecoli, yersinia, mcatarrhalis) for Salmonella, Escherichia, Yersinia, Moraxella respectively

#### Output
*Output schema unknown*

### api.v2.0.database.assemblies.barcode.put
Genome assemblies


```js
warwick_ac_uk_enterobase.api.v2.0.database.assemblies.barcode.put({
  "barcode": "",
  "database": ""
}, context)
```

#### Input
* input `object`
  * body `object`
    * assembly_status `string`
    * barcode `array`
      * items `string`
    * limit `integer`
    * n50 `integer`
    * offset `integer`
    * only_fields `array`
      * items `string`
    * orderby `string`
    * reldate `integer`
    * sortorder `string`
    * top_species `string`
    * uberstrain `string`
    * version `integer`
  * barcode **required** `string`: Unique barcode for Traces records, <database prefix>_<ID code>_AS e.g. SAL_AA0001AA_AS
  * database **required** `string`: Species database name (senterica, ecoli, yersinia, mcatarrhalis) for Salmonella, Escherichia, Yersinia, Moraxella respectively

#### Output
*Output schema unknown*

### api.v2.0.database.schemes.get
Genotyping schemes


```js
warwick_ac_uk_enterobase.api.v2.0.database.schemes.get({
  "database": ""
}, context)
```

#### Input
* input `object`
  * orderby `string`: Field to order by. Default: barcode
  * scheme_name `string`
  * created `string`
  * lastmodified `string`
  * barcode `array`: Unique barcode for Strain records, <database prefix>_<ID code> e.g. SAL_AA0001AA
  * label `string`
  * only_fields `array`
  * version `integer`
  * limit `integer`: Number of results per page
  * sortorder `string`: Order of search results: asc or desc
  * offset `integer`: Cursor position in results
  * database **required** `string`: Species database name (senterica, ecoli, yersinia, mcatarrhalis) for Salmonella, Escherichia, Yersinia, Moraxella respectively

#### Output
*Output schema unknown*

### api.v2.0.database.schemes.barcode.get
Genotyping schemes


```js
warwick_ac_uk_enterobase.api.v2.0.database.schemes.barcode.get({
  "barcode": "",
  "database": ""
}, context)
```

#### Input
* input `object`
  * body `object`
    * barcode `array`
      * items `string`
    * created `string`
    * label `string`
    * lastmodified `string`
    * limit `integer`
    * offset `integer`
    * only_fields `array`
      * items `string`
    * orderby `string`
    * scheme_name `string`
    * sortorder `string`
    * version `integer`
  * barcode **required** `string`: Unique barcode for Strain records, <database prefix>_<ID code> e.g. SAL_AA0001AA
  * database **required** `string`: Species database name (senterica, ecoli, yersinia, mcatarrhalis) for Salmonella, Escherichia, Yersinia, Moraxella respectively

#### Output
*Output schema unknown*

### api.v2.0.database.schemes.barcode.post
Genotyping schemes


```js
warwick_ac_uk_enterobase.api.v2.0.database.schemes.barcode.post({
  "barcode": "",
  "database": ""
}, context)
```

#### Input
* input `object`
  * body `object`
    * barcode `array`
      * items `string`
    * created `string`
    * label `string`
    * lastmodified `string`
    * limit `integer`
    * offset `integer`
    * only_fields `array`
      * items `string`
    * orderby `string`
    * scheme_name `string`
    * sortorder `string`
    * version `integer`
  * barcode **required** `string`: Unique barcode for Strain records, <database prefix>_<ID code> e.g. SAL_AA0001AA
  * database **required** `string`: Species database name (senterica, ecoli, yersinia, mcatarrhalis) for Salmonella, Escherichia, Yersinia, Moraxella respectively

#### Output
*Output schema unknown*

### api.v2.0.database.schemes.barcode.put
Genotyping schemes


```js
warwick_ac_uk_enterobase.api.v2.0.database.schemes.barcode.put({
  "barcode": "",
  "database": ""
}, context)
```

#### Input
* input `object`
  * body `object`
    * barcode `array`
      * items `string`
    * created `string`
    * label `string`
    * lastmodified `string`
    * limit `integer`
    * offset `integer`
    * only_fields `array`
      * items `string`
    * orderby `string`
    * scheme_name `string`
    * sortorder `string`
    * version `integer`
  * barcode **required** `string`: Unique barcode for Strain records, <database prefix>_<ID code> e.g. SAL_AA0001AA
  * database **required** `string`: Species database name (senterica, ecoli, yersinia, mcatarrhalis) for Salmonella, Escherichia, Yersinia, Moraxella respectively

#### Output
*Output schema unknown*

### api.v2.0.database.straindata.get
Strain data


```js
warwick_ac_uk_enterobase.api.v2.0.database.straindata.get({
  "database": ""
}, context)
```

#### Input
* input `object`
  * comment `string`
  * secondary_sample_accession `string`
  * my_strains `boolean`
  * offset `integer`: Cursor position in results
  * serotype `string`
  * n50 `integer`
  * county `string`
  * only_fields `array`
  * postcode `string`
  * lab_contact `string`
  * substrains `boolean`
  * custom_fields `string`
  * city `string`
  * strain_name `string`
  * collection_date `integer`
  * collection_month `integer`
  * reldate `integer`
  * continent `string`
  * source_details `string`
  * version `integer`
  * latitude `number`
  * email `string`
  * source_niche `string`
  * barcode `array`: Unique barcode for Traces records, <database prefix>_<ID code>_AS e.g. SAL_AA0001AA_AS
  * uberstrain `string`
  * sortorder `string`: Order of search results: asc or desc
  * collection_year `integer`
  * orderby `string`: Field to order by. Default: strain barcode
  * assembly_status `string`
  * source_type `string`
  * country `string`
  * region `string`
  * longitude `number`
  * sample_accession `string`
  * limit `integer`: Number of results per page
  * top_species `string`
  * collection_time `string`
  * database **required** `string`: Species database name (senterica, ecoli, yersinia, mcatarrhalis) for Salmonella, Escherichia, Yersinia, Moraxella respectively

#### Output
*Output schema unknown*

### api.v2.0.database.strains.get
Strain metadata


```js
warwick_ac_uk_enterobase.api.v2.0.database.strains.get({
  "database": ""
}, context)
```

#### Input
* input `object`
  * comment `string`
  * secondary_sample_accession `string`
  * antigenic_formulas `string`
  * my_strains `boolean`
  * serotype `string`
  * county `string`
  * only_fields `array`
  * postcode `string`
  * lab_contact `string`
  * substrains `boolean`
  * city `string`
  * strain_name `string`
  * collection_date `integer`
  * collection_month `integer`
  * reldate `integer`
  * continent `string`
  * source_details `string`
  * version `integer`
  * latitude `number`
  * assembly_barcode `string`
  * source_niche `string`
  * barcode `array`: Unique barcode for Strain records, <database prefix>_<ID code> e.g. SAL_AA0001AA
  * uberstrain `string`
  * sortorder `string`: Order of search results: asc or desc
  * offset `integer`: Cursor position in results
  * collection_year `integer`
  * orderby `string`: Field to order by. Default: barcode
  * return_all `boolean`
  * source_type `string`
  * country `string`
  * region `string`
  * longitude `number`
  * sample_accession `string`
  * limit `integer`: Number of results per page
  * collection_time `string`
  * database **required** `string`: Species database name (senterica, ecoli, yersinia, mcatarrhalis) for Salmonella, Escherichia, Yersinia, Moraxella respectively

#### Output
*Output schema unknown*

### api.v2.0.database.strains.barcode.get
Strain metadata


```js
warwick_ac_uk_enterobase.api.v2.0.database.strains.barcode.get({
  "barcode": "",
  "database": ""
}, context)
```

#### Input
* input `object`
  * body `object`
    * antigenic_formulas `string`
    * assembly_barcode `string`
    * barcode `array`
      * items `string`
    * city `string`
    * collection_date `integer`
    * collection_month `integer`
    * collection_time `string`
    * collection_year `integer`
    * comment `string`
    * continent `string`
    * country `string`
    * county `string`
    * lab_contact `string`
    * latitude `number`
    * limit `integer`
    * longitude `number`
    * my_strains `boolean`
    * offset `integer`
    * only_fields `array`
      * items `string`
    * orderby `string`
    * postcode `string`
    * region `string`
    * reldate `integer`
    * return_all `boolean`
    * sample_accession `string`
    * secondary_sample_accession `string`
    * serotype `string`
    * sortorder `string`
    * source_details `string`
    * source_niche `string`
    * source_type `string`
    * strain_name `string`
    * substrains `boolean`
    * uberstrain `string`
    * version `integer`
  * barcode **required** `string`: Unique barcode for Strain records, <database prefix>_<ID code> e.g. SAL_AA0001AA
  * database **required** `string`: Species database name (senterica, ecoli, yersinia, mcatarrhalis) for Salmonella, Escherichia, Yersinia, Moraxella respectively

#### Output
*Output schema unknown*

### api.v2.0.database.strains.barcode.post
Strain metadata


```js
warwick_ac_uk_enterobase.api.v2.0.database.strains.barcode.post({
  "barcode": "",
  "database": ""
}, context)
```

#### Input
* input `object`
  * body `object`
    * antigenic_formulas `string`
    * assembly_barcode `string`
    * barcode `array`
      * items `string`
    * city `string`
    * collection_date `integer`
    * collection_month `integer`
    * collection_time `string`
    * collection_year `integer`
    * comment `string`
    * continent `string`
    * country `string`
    * county `string`
    * lab_contact `string`
    * latitude `number`
    * limit `integer`
    * longitude `number`
    * my_strains `boolean`
    * offset `integer`
    * only_fields `array`
      * items `string`
    * orderby `string`
    * postcode `string`
    * region `string`
    * reldate `integer`
    * return_all `boolean`
    * sample_accession `string`
    * secondary_sample_accession `string`
    * serotype `string`
    * sortorder `string`
    * source_details `string`
    * source_niche `string`
    * source_type `string`
    * strain_name `string`
    * substrains `boolean`
    * uberstrain `string`
    * version `integer`
  * barcode **required** `string`: Unique barcode for Strain records, <database prefix>_<ID code> e.g. SAL_AA0001AA
  * database **required** `string`: Species database name (senterica, ecoli, yersinia, mcatarrhalis) for Salmonella, Escherichia, Yersinia, Moraxella respectively

#### Output
*Output schema unknown*

### api.v2.0.database.strains.barcode.put
Strain metadata


```js
warwick_ac_uk_enterobase.api.v2.0.database.strains.barcode.put({
  "barcode": "",
  "database": ""
}, context)
```

#### Input
* input `object`
  * body `object`
    * antigenic_formulas `string`
    * assembly_barcode `string`
    * barcode `array`
      * items `string`
    * city `string`
    * collection_date `integer`
    * collection_month `integer`
    * collection_time `string`
    * collection_year `integer`
    * comment `string`
    * continent `string`
    * country `string`
    * county `string`
    * lab_contact `string`
    * latitude `number`
    * limit `integer`
    * longitude `number`
    * my_strains `boolean`
    * offset `integer`
    * only_fields `array`
      * items `string`
    * orderby `string`
    * postcode `string`
    * region `string`
    * reldate `integer`
    * return_all `boolean`
    * sample_accession `string`
    * secondary_sample_accession `string`
    * serotype `string`
    * sortorder `string`
    * source_details `string`
    * source_niche `string`
    * source_type `string`
    * strain_name `string`
    * substrains `boolean`
    * uberstrain `string`
    * version `integer`
  * barcode **required** `string`: Unique barcode for Strain records, <database prefix>_<ID code> e.g. SAL_AA0001AA
  * database **required** `string`: Species database name (senterica, ecoli, yersinia, mcatarrhalis) for Salmonella, Escherichia, Yersinia, Moraxella respectively

#### Output
*Output schema unknown*

### api.v2.0.database.strainsversion.get
Strain previous metadata


```js
warwick_ac_uk_enterobase.api.v2.0.database.strainsversion.get({
  "database": ""
}, context)
```

#### Input
* input `object`
  * comment `string`
  * secondary_sample_accession `string`
  * antigenic_formulas `string`
  * my_strains `boolean`
  * serotype `string`
  * county `string`
  * only_fields `array`
  * postcode `string`
  * lab_contact `string`
  * substrains `boolean`
  * city `string`
  * strain_name `string`
  * collection_date `integer`
  * collection_month `integer`
  * reldate `integer`
  * continent `string`
  * source_details `string`
  * version `integer`
  * latitude `number`
  * assembly_barcode `string`
  * source_niche `string`
  * barcode `array`: Unique barcode for Strain records, <database prefix>_<ID code> e.g. SAL_AA0001AA
  * uberstrain `string`
  * sortorder `string`: Order of search results: asc or desc
  * offset `integer`: Cursor position in results
  * collection_year `integer`
  * orderby `string`: Field to order by. Default: barcode
  * return_all `boolean`
  * source_type `string`
  * country `string`
  * region `string`
  * longitude `number`
  * sample_accession `string`
  * limit `integer`: Number of results per page
  * collection_time `string`
  * database **required** `string`: Species database name (senterica, ecoli, yersinia, mcatarrhalis) for Salmonella, Escherichia, Yersinia, Moraxella respectively

#### Output
*Output schema unknown*

### api.v2.0.database.traces.get
Traces (sequence-reads) metadata


```js
warwick_ac_uk_enterobase.api.v2.0.database.traces.get({
  "database": ""
}, context)
```

#### Input
* input `object`
  * orderby `string`: Field to order by. Default: barcode
  * barcode `array`: Unique barcode for Traces records, <database prefix>_<ID code>_TR e.g. SAL_AA0001AA_TR
  * only_fields `array`
  * limit `integer`: Number of results per page
  * sortorder `string`: Order of search results: asc or desc
  * offset `integer`: Cursor position in results
  * database **required** `string`: Species database name (senterica, ecoli, yersinia, mcatarrhalis) for Salmonella, Escherichia, Yersinia, Moraxella respectively

#### Output
*Output schema unknown*

### api.v2.0.database.traces.barcode.get
Traces (sequence-reads) metadata


```js
warwick_ac_uk_enterobase.api.v2.0.database.traces.barcode.get({
  "barcode": "",
  "database": ""
}, context)
```

#### Input
* input `object`
  * body `object`
    * barcode `array`
      * items `string`
    * limit `integer`
    * offset `integer`
    * only_fields `array`
      * items `string`
    * orderby `string`
    * sortorder `string`
  * barcode **required** `string`: Unique barcode for Traces records, <database prefix>_<ID code>_TR e.g. SAL_AA0001AA_TR
  * database **required** `string`: Species database name (senterica, ecoli, yersinia, mcatarrhalis) for Salmonella, Escherichia, Yersinia, Moraxella respectively

#### Output
*Output schema unknown*

### api.v2.0.database.traces.barcode.post
Traces (sequence-reads) metadata


```js
warwick_ac_uk_enterobase.api.v2.0.database.traces.barcode.post({
  "barcode": "",
  "database": ""
}, context)
```

#### Input
* input `object`
  * body `object`
    * barcode `array`
      * items `string`
    * limit `integer`
    * offset `integer`
    * only_fields `array`
      * items `string`
    * orderby `string`
    * sortorder `string`
  * barcode **required** `string`: Unique barcode for Traces records, <database prefix>_<ID code>_TR e.g. SAL_AA0001AA_TR
  * database **required** `string`: Species database name (senterica, ecoli, yersinia, mcatarrhalis) for Salmonella, Escherichia, Yersinia, Moraxella respectively

#### Output
*Output schema unknown*

### api.v2.0.database.traces.barcode.put
Traces (sequence-reads) metadata


```js
warwick_ac_uk_enterobase.api.v2.0.database.traces.barcode.put({
  "barcode": "",
  "database": ""
}, context)
```

#### Input
* input `object`
  * body `object`
    * barcode `array`
      * items `string`
    * limit `integer`
    * offset `integer`
    * only_fields `array`
      * items `string`
    * orderby `string`
    * sortorder `string`
  * barcode **required** `string`: Unique barcode for Traces records, <database prefix>_<ID code>_TR e.g. SAL_AA0001AA_TR
  * database **required** `string`: Species database name (senterica, ecoli, yersinia, mcatarrhalis) for Salmonella, Escherichia, Yersinia, Moraxella respectively

#### Output
*Output schema unknown*

### api.v2.0.database.scheme.alleles.get
Alleles  data 


```js
warwick_ac_uk_enterobase.api.v2.0.database.scheme.alleles.get({
  "locus": "",
  "scheme": "",
  "database": ""
}, context)
```

#### Input
* input `object`
  * allele_id `string`
  * seq `string`
  * barcode `array`: Unique barcode for Strain records, <database prefix>_<ID code> e.g. SAL_AA0001AA
  * reldate `integer`
  * locus **required** `string`
  * only_fields `array`
  * limit `integer`
  * offset `integer`
  * scheme **required** `string`
  * database **required** `string`: Species database name (senterica, ecoli, yersinia, mcatarrhalis) for Salmonella, Escherichia, Yersinia, Moraxella respectively

#### Output
*Output schema unknown*

### api.v2.0.database.scheme.loci.get
Loci 


```js
warwick_ac_uk_enterobase.api.v2.0.database.scheme.loci.get({
  "scheme": "",
  "database": ""
}, context)
```

#### Input
* input `object`
  * barcode `array`: Unique barcode for Strain records, <database prefix>_<ID code> e.g. SAL_AA0001AA
  * locus `string`
  * only_fields `array`
  * create_time `string`
  * limit `integer`
  * offset `integer`
  * scheme_query `string`
  * scheme **required** `string`
  * database **required** `string`: Species database name (senterica, ecoli, yersinia, mcatarrhalis) for Salmonella, Escherichia, Yersinia, Moraxella respectively

#### Output
*Output schema unknown*

### api.v2.0.database.scheme.sts.get
ST profile data


```js
warwick_ac_uk_enterobase.api.v2.0.database.scheme.sts.get({
  "scheme": "",
  "database": ""
}, context)
```

#### Input
* input `object`
  * st_id `string`
  * scheme_query `string`
  * show_alleles `boolean`
  * barcode `array`: Unique barcode for Strain records, <database prefix>_<ID code> e.g. SAL_AA0001AA
  * only_fields `array`
  * limit `integer`
  * reldate `integer`
  * offset `integer`
  * scheme **required** `string`
  * database **required** `string`: Species database name (senterica, ecoli, yersinia, mcatarrhalis) for Salmonella, Escherichia, Yersinia, Moraxella respectively

#### Output
*Output schema unknown*



## Definitions

*This integration has no definitions*
