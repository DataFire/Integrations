# @datafire/bridgedb

Client library for bridgedb webservices

## Installation and Usage
```bash
npm install --save @datafire/bridgedb
```
```js
let bridgedb = require('@datafire/bridgedb').create();

.then(data => {
  console.log(data);
});
```

## Description



## Actions

### organism.attributeSearch.query.get
Returns a list of xrefs and associated attributes that contain the query string for a given organism. Results are not restricted to exact matches. Optionally limit results to a specified number per data source, or by the type of attribute. See possible attribute types via /{organism}/attributeSet.



```js
bridgedb.organism.attributeSearch.query.get({
  "organism": "",
  "query": ""
}, context)
```

#### Input
* input `object`
  * organism **required** `string` (values: Human, Homo sapiens, Tuberculosis, Mycobacterium tuberculosis, Mosquito, Anopheles gambiae, Zebra fish, Danio rerio, Arabidopsis thaliana, Rice, Oryza sativa, Sea Squirt, Ciona intestinalis, Barley, Hordeum vulgare, Frog, Xenopus tropicalis, Soybean, Glycine max, Fruit fly, Drosophila melanogaster, Horse, Equus caballus, Rhesus Monkey, Macaca mulatta, Wine Grape, Vitis vinifera, Yeast, Saccharomyces cerevisiae, Tomato, Solanum lycopersicum, Rat, Rattus norvegicus, Cow, Bos taurus, Western Balsam Poplar, Populus trichocarpa, Chimpanzee, Pan troglodytes, Indian Rice, Oryza indica, Dog, Canis familiaris, Maize, Zea mays, Pig, Sus scrofa, Worm, Caenorhabditis elegans, Platypus, Ornithorhynchus anatinus, Chicken, Gallus gallus, Fusarium graminearum, Gibberella zeae, Bacillus subtilis, Escherichia coli, Black mold, Aspergillus niger, Mouse, Mus musculus): Organism [Latin name](http://vocabularies.bridgedb.org/#latinName) or [short name](http://vocabularies.bridgedb.org/#shortName).
  * query **required** `string`: Text to find in attributes
  * limit `integer`: Number of results
  * attrName `string`: Restrict search by attribute name (case sensitive). Use GET /{organism}/attributeSet to find out which attributes are supported.

#### Output
*Output schema unknown*

### organism.attributeSet.get
Returns the supported attributes to the given Organism.


```js
bridgedb.organism.attributeSet.get({
  "organism": ""
}, context)
```

#### Input
* input `object`
  * organism **required** `string` (values: Human, Homo sapiens, Tuberculosis, Mycobacterium tuberculosis, Mosquito, Anopheles gambiae, Zebra fish, Danio rerio, Arabidopsis thaliana, Rice, Oryza sativa, Sea Squirt, Ciona intestinalis, Barley, Hordeum vulgare, Frog, Xenopus tropicalis, Soybean, Glycine max, Fruit fly, Drosophila melanogaster, Horse, Equus caballus, Rhesus Monkey, Macaca mulatta, Wine Grape, Vitis vinifera, Yeast, Saccharomyces cerevisiae, Tomato, Solanum lycopersicum, Rat, Rattus norvegicus, Cow, Bos taurus, Western Balsam Poplar, Populus trichocarpa, Chimpanzee, Pan troglodytes, Indian Rice, Oryza indica, Dog, Canis familiaris, Maize, Zea mays, Pig, Sus scrofa, Worm, Caenorhabditis elegans, Platypus, Ornithorhynchus anatinus, Chicken, Gallus gallus, Fusarium graminearum, Gibberella zeae, Bacillus subtilis, Escherichia coli, Black mold, Aspergillus niger, Mouse, Mus musculus): Organism [Latin name](http://vocabularies.bridgedb.org/#latinName) or [short name](http://vocabularies.bridgedb.org/#shortName).

#### Output
*Output schema unknown*

### organism.attributes.systemCode.identifier.get
Returns the attributes for a given identifier, data source, organism. Optionally display only a specified attribute


```js
bridgedb.organism.attributes.systemCode.identifier.get({
  "organism": "",
  "systemCode": "",
  "identifier": ""
}, context)
```

#### Input
* input `object`
  * organism **required** `string` (values: Human, Homo sapiens, Tuberculosis, Mycobacterium tuberculosis, Mosquito, Anopheles gambiae, Zebra fish, Danio rerio, Arabidopsis thaliana, Rice, Oryza sativa, Sea Squirt, Ciona intestinalis, Barley, Hordeum vulgare, Frog, Xenopus tropicalis, Soybean, Glycine max, Fruit fly, Drosophila melanogaster, Horse, Equus caballus, Rhesus Monkey, Macaca mulatta, Wine Grape, Vitis vinifera, Yeast, Saccharomyces cerevisiae, Tomato, Solanum lycopersicum, Rat, Rattus norvegicus, Cow, Bos taurus, Western Balsam Poplar, Populus trichocarpa, Chimpanzee, Pan troglodytes, Indian Rice, Oryza indica, Dog, Canis familiaris, Maize, Zea mays, Pig, Sus scrofa, Worm, Caenorhabditis elegans, Platypus, Ornithorhynchus anatinus, Chicken, Gallus gallus, Fusarium graminearum, Gibberella zeae, Bacillus subtilis, Escherichia coli, Black mold, Aspergillus niger, Mouse, Mus musculus): Organism [Latin name](http://vocabularies.bridgedb.org/#latinName) or [short name](http://vocabularies.bridgedb.org/#shortName).
  * systemCode **required** `string` (values: En, Cs, X, E, Rh, Ck, Eco, Cg, Ch, Il, Uc, Rf, Pd, U, Ma, Lm, Wd, Wi, Cpc, Mb, Rk, Ce, S, L, Wg, Om, T, Mc, Ik, H, Re, Ag, Q, Ca, Up, Cks): System
  * identifier **required** `string`: Identifier
  * attrName `string`: Type of attribute

#### Output
*Output schema unknown*

### organism.isFreeSearchSupported.get
Returns `true` or `false` based on whether or not /{organism}/search/{query} is supported for a given organism.


```js
bridgedb.organism.isFreeSearchSupported.get({
  "organism": ""
}, context)
```

#### Input
* input `object`
  * organism **required** `string` (values: Human, Homo sapiens, Tuberculosis, Mycobacterium tuberculosis, Mosquito, Anopheles gambiae, Zebra fish, Danio rerio, Arabidopsis thaliana, Rice, Oryza sativa, Sea Squirt, Ciona intestinalis, Barley, Hordeum vulgare, Frog, Xenopus tropicalis, Soybean, Glycine max, Fruit fly, Drosophila melanogaster, Horse, Equus caballus, Rhesus Monkey, Macaca mulatta, Wine Grape, Vitis vinifera, Yeast, Saccharomyces cerevisiae, Tomato, Solanum lycopersicum, Rat, Rattus norvegicus, Cow, Bos taurus, Western Balsam Poplar, Populus trichocarpa, Chimpanzee, Pan troglodytes, Indian Rice, Oryza indica, Dog, Canis familiaris, Maize, Zea mays, Pig, Sus scrofa, Worm, Caenorhabditis elegans, Platypus, Ornithorhynchus anatinus, Chicken, Gallus gallus, Fusarium graminearum, Gibberella zeae, Bacillus subtilis, Escherichia coli, Black mold, Aspergillus niger, Mouse, Mus musculus): Organism [Latin name](http://vocabularies.bridgedb.org/#latinName) or [short name](http://vocabularies.bridgedb.org/#shortName).

#### Output
*Output schema unknown*

### organism.isMappingSupported.sourceSystemCode.targetSystemCode.get
Returns `true` or `false` based on whether or not /{organism}/xrefs/{systemCode}/{identifier} would possibly return a {targetSystemCode} result given a {sourceSystemCode} query. This function basically combines the results of /{organism}/sourceDataSources and /{organism}/targetDataSources into a single boolean result.


```js
bridgedb.organism.isMappingSupported.sourceSystemCode.targetSystemCode.get({
  "organism": "",
  "sourceSystemCode": "",
  "targetSystemCode": ""
}, context)
```

#### Input
* input `object`
  * organism **required** `string` (values: Human, Homo sapiens, Tuberculosis, Mycobacterium tuberculosis, Mosquito, Anopheles gambiae, Zebra fish, Danio rerio, Arabidopsis thaliana, Rice, Oryza sativa, Sea Squirt, Ciona intestinalis, Barley, Hordeum vulgare, Frog, Xenopus tropicalis, Soybean, Glycine max, Fruit fly, Drosophila melanogaster, Horse, Equus caballus, Rhesus Monkey, Macaca mulatta, Wine Grape, Vitis vinifera, Yeast, Saccharomyces cerevisiae, Tomato, Solanum lycopersicum, Rat, Rattus norvegicus, Cow, Bos taurus, Western Balsam Poplar, Populus trichocarpa, Chimpanzee, Pan troglodytes, Indian Rice, Oryza indica, Dog, Canis familiaris, Maize, Zea mays, Pig, Sus scrofa, Worm, Caenorhabditis elegans, Platypus, Ornithorhynchus anatinus, Chicken, Gallus gallus, Fusarium graminearum, Gibberella zeae, Bacillus subtilis, Escherichia coli, Black mold, Aspergillus niger, Mouse, Mus musculus): Organism [Latin name](http://vocabularies.bridgedb.org/#latinName) or [short name](http://vocabularies.bridgedb.org/#shortName).
  * sourceSystemCode **required** `string` (values: En, Cs, X, E, Rh, Ck, Eco, Cg, Ch, Il, Uc, Rf, Pd, U, Ma, Lm, Wd, Wi, Cpc, Mb, Rk, Ce, S, L, Wg, Om, T, Mc, Ik, H, Re, Ag, Q, Ca, Up, Cks): [System code](http://vocabularies.bridgedb.org/#systemCode) for source (input/query) data source
  * targetSystemCode **required** `string` (values: En, Cs, X, E, Rh, Ck, Eco, Cg, Ch, Il, Uc, Rf, Pd, U, Ma, Lm, Wd, Wi, Cpc, Mb, Rk, Ce, S, L, Wg, Om, T, Mc, Ik, H, Re, Ag, Q, Ca, Up, Cks): [System code](http://vocabularies.bridgedb.org/#systemCode) for target (output/result) data source

#### Output
*Output schema unknown*

### organism.properties.get
Returns the list of properties available for a given organism



```js
bridgedb.organism.properties.get({
  "organism": ""
}, context)
```

#### Input
* input `object`
  * organism **required** `string` (values: Human, Homo sapiens, Tuberculosis, Mycobacterium tuberculosis, Mosquito, Anopheles gambiae, Zebra fish, Danio rerio, Arabidopsis thaliana, Rice, Oryza sativa, Sea Squirt, Ciona intestinalis, Barley, Hordeum vulgare, Frog, Xenopus tropicalis, Soybean, Glycine max, Fruit fly, Drosophila melanogaster, Horse, Equus caballus, Rhesus Monkey, Macaca mulatta, Wine Grape, Vitis vinifera, Yeast, Saccharomyces cerevisiae, Tomato, Solanum lycopersicum, Rat, Rattus norvegicus, Cow, Bos taurus, Western Balsam Poplar, Populus trichocarpa, Chimpanzee, Pan troglodytes, Indian Rice, Oryza indica, Dog, Canis familiaris, Maize, Zea mays, Pig, Sus scrofa, Worm, Caenorhabditis elegans, Platypus, Ornithorhynchus anatinus, Chicken, Gallus gallus, Fusarium graminearum, Gibberella zeae, Bacillus subtilis, Escherichia coli, Black mold, Aspergillus niger, Mouse, Mus musculus): Organism [Latin name](http://vocabularies.bridgedb.org/#latinName) or [short name](http://vocabularies.bridgedb.org/#shortName).

#### Output
*Output schema unknown*

### organism.search.query.get
Returns a list of xrefs with identifiers that contain the query string for a given organism. Results are not restricted to exact matches. Optionally limit results to a specified number per data source.


```js
bridgedb.organism.search.query.get({
  "organism": "",
  "query": ""
}, context)
```

#### Input
* input `object`
  * organism **required** `string` (values: Human, Homo sapiens, Tuberculosis, Mycobacterium tuberculosis, Mosquito, Anopheles gambiae, Zebra fish, Danio rerio, Arabidopsis thaliana, Rice, Oryza sativa, Sea Squirt, Ciona intestinalis, Barley, Hordeum vulgare, Frog, Xenopus tropicalis, Soybean, Glycine max, Fruit fly, Drosophila melanogaster, Horse, Equus caballus, Rhesus Monkey, Macaca mulatta, Wine Grape, Vitis vinifera, Yeast, Saccharomyces cerevisiae, Tomato, Solanum lycopersicum, Rat, Rattus norvegicus, Cow, Bos taurus, Western Balsam Poplar, Populus trichocarpa, Chimpanzee, Pan troglodytes, Indian Rice, Oryza indica, Dog, Canis familiaris, Maize, Zea mays, Pig, Sus scrofa, Worm, Caenorhabditis elegans, Platypus, Ornithorhynchus anatinus, Chicken, Gallus gallus, Fusarium graminearum, Gibberella zeae, Bacillus subtilis, Escherichia coli, Black mold, Aspergillus niger, Mouse, Mus musculus): Organism [Latin name](http://vocabularies.bridgedb.org/#latinName) or [short name](http://vocabularies.bridgedb.org/#shortName).
  * query **required** `string`: Identifier query
  * limit `integer`: Number of results per data source

#### Output
*Output schema unknown*

### organism.sourceDataSources.get
Returns a list of data sources available as xref sources for a given organism.


```js
bridgedb.organism.sourceDataSources.get({
  "organism": ""
}, context)
```

#### Input
* input `object`
  * organism **required** `string` (values: Human, Homo sapiens, Tuberculosis, Mycobacterium tuberculosis, Mosquito, Anopheles gambiae, Zebra fish, Danio rerio, Arabidopsis thaliana, Rice, Oryza sativa, Sea Squirt, Ciona intestinalis, Barley, Hordeum vulgare, Frog, Xenopus tropicalis, Soybean, Glycine max, Fruit fly, Drosophila melanogaster, Horse, Equus caballus, Rhesus Monkey, Macaca mulatta, Wine Grape, Vitis vinifera, Yeast, Saccharomyces cerevisiae, Tomato, Solanum lycopersicum, Rat, Rattus norvegicus, Cow, Bos taurus, Western Balsam Poplar, Populus trichocarpa, Chimpanzee, Pan troglodytes, Indian Rice, Oryza indica, Dog, Canis familiaris, Maize, Zea mays, Pig, Sus scrofa, Worm, Caenorhabditis elegans, Platypus, Ornithorhynchus anatinus, Chicken, Gallus gallus, Fusarium graminearum, Gibberella zeae, Bacillus subtilis, Escherichia coli, Black mold, Aspergillus niger, Mouse, Mus musculus): Organism [Latin name](http://vocabularies.bridgedb.org/#latinName) or [short name](http://vocabularies.bridgedb.org/#shortName).

#### Output
*Output schema unknown*

### organism.targetDataSources.get
Returns a list of data sources available as xref targets for a given organism.


```js
bridgedb.organism.targetDataSources.get({
  "organism": ""
}, context)
```

#### Input
* input `object`
  * organism **required** `string` (values: Human, Homo sapiens, Tuberculosis, Mycobacterium tuberculosis, Mosquito, Anopheles gambiae, Zebra fish, Danio rerio, Arabidopsis thaliana, Rice, Oryza sativa, Sea Squirt, Ciona intestinalis, Barley, Hordeum vulgare, Frog, Xenopus tropicalis, Soybean, Glycine max, Fruit fly, Drosophila melanogaster, Horse, Equus caballus, Rhesus Monkey, Macaca mulatta, Wine Grape, Vitis vinifera, Yeast, Saccharomyces cerevisiae, Tomato, Solanum lycopersicum, Rat, Rattus norvegicus, Cow, Bos taurus, Western Balsam Poplar, Populus trichocarpa, Chimpanzee, Pan troglodytes, Indian Rice, Oryza indica, Dog, Canis familiaris, Maize, Zea mays, Pig, Sus scrofa, Worm, Caenorhabditis elegans, Platypus, Ornithorhynchus anatinus, Chicken, Gallus gallus, Fusarium graminearum, Gibberella zeae, Bacillus subtilis, Escherichia coli, Black mold, Aspergillus niger, Mouse, Mus musculus): Organism [Latin name](http://vocabularies.bridgedb.org/#latinName) or [short name](http://vocabularies.bridgedb.org/#shortName).

#### Output
*Output schema unknown*

### organism.xrefExists.systemCode.identifier.get
Returns `true` or `false` based on whether or not an xref exists in the database given an identifier, data source, and organism.


```js
bridgedb.organism.xrefExists.systemCode.identifier.get({
  "organism": "",
  "systemCode": "",
  "identifier": ""
}, context)
```

#### Input
* input `object`
  * organism **required** `string` (values: Human, Homo sapiens, Tuberculosis, Mycobacterium tuberculosis, Mosquito, Anopheles gambiae, Zebra fish, Danio rerio, Arabidopsis thaliana, Rice, Oryza sativa, Sea Squirt, Ciona intestinalis, Barley, Hordeum vulgare, Frog, Xenopus tropicalis, Soybean, Glycine max, Fruit fly, Drosophila melanogaster, Horse, Equus caballus, Rhesus Monkey, Macaca mulatta, Wine Grape, Vitis vinifera, Yeast, Saccharomyces cerevisiae, Tomato, Solanum lycopersicum, Rat, Rattus norvegicus, Cow, Bos taurus, Western Balsam Poplar, Populus trichocarpa, Chimpanzee, Pan troglodytes, Indian Rice, Oryza indica, Dog, Canis familiaris, Maize, Zea mays, Pig, Sus scrofa, Worm, Caenorhabditis elegans, Platypus, Ornithorhynchus anatinus, Chicken, Gallus gallus, Fusarium graminearum, Gibberella zeae, Bacillus subtilis, Escherichia coli, Black mold, Aspergillus niger, Mouse, Mus musculus): Organism [Latin name](http://vocabularies.bridgedb.org/#latinName) or [short name](http://vocabularies.bridgedb.org/#shortName).
  * systemCode **required** `string` (values: En, Cs, X, E, Rh, Ck, Eco, Cg, Ch, Il, Uc, Rf, Pd, U, Ma, Lm, Wd, Wi, Cpc, Mb, Rk, Ce, S, L, Wg, Om, T, Mc, Ik, H, Re, Ag, Q, Ca, Up, Cks): Source (input) data source [system code](http://vocabularies.bridgedb.org/#systemCode)
  * identifier **required** `string`: Identifier

#### Output
*Output schema unknown*

### organism.xrefs.systemCode.identifier.get
Returns a list of xrefs that map to a given identifier, data source, and organism.


```js
bridgedb.organism.xrefs.systemCode.identifier.get({
  "organism": "",
  "systemCode": "",
  "identifier": ""
}, context)
```

#### Input
* input `object`
  * dataSource `string` (values: En, Cs, X, E, Rh, Ck, Eco, Cg, Ch, Il, Uc, Rf, Pd, U, Ma, Lm, Wd, Wi, Cpc, Mb, Rk, Ce, S, L, Wg, Om, T, Mc, Ik, H, Re, Ag, Q, Ca, Up, Cks): (Optional) Restrict results by data source [system code](http://vocabularies.bridgedb.org/#systemCode)
  * organism **required** `string` (values: Human, Homo sapiens, Tuberculosis, Mycobacterium tuberculosis, Mosquito, Anopheles gambiae, Zebra fish, Danio rerio, Arabidopsis thaliana, Rice, Oryza sativa, Sea Squirt, Ciona intestinalis, Barley, Hordeum vulgare, Frog, Xenopus tropicalis, Soybean, Glycine max, Fruit fly, Drosophila melanogaster, Horse, Equus caballus, Rhesus Monkey, Macaca mulatta, Wine Grape, Vitis vinifera, Yeast, Saccharomyces cerevisiae, Tomato, Solanum lycopersicum, Rat, Rattus norvegicus, Cow, Bos taurus, Western Balsam Poplar, Populus trichocarpa, Chimpanzee, Pan troglodytes, Indian Rice, Oryza indica, Dog, Canis familiaris, Maize, Zea mays, Pig, Sus scrofa, Worm, Caenorhabditis elegans, Platypus, Ornithorhynchus anatinus, Chicken, Gallus gallus, Fusarium graminearum, Gibberella zeae, Bacillus subtilis, Escherichia coli, Black mold, Aspergillus niger, Mouse, Mus musculus): Organism [Latin name](http://vocabularies.bridgedb.org/#latinName) or [short name](http://vocabularies.bridgedb.org/#shortName).
  * systemCode **required** `string` (values: En, Cs, X, E, Rh, Ck, Eco, Cg, Ch, Il, Uc, Rf, Pd, U, Ma, Lm, Wd, Wi, Cpc, Mb, Rk, Ce, S, L, Wg, Om, T, Mc, Ik, H, Re, Ag, Q, Ca, Up, Cks): Source (input) data source [system code](http://vocabularies.bridgedb.org/#systemCode)
  * identifier **required** `string`: Identifier

#### Output
*Output schema unknown*

### organism.xrefsBatch.post
Returns a list of xrefs, per identifier, that maps to a given list of identifiers an data source given an organism.


```js
bridgedb.organism.xrefsBatch.post({
  "organism": "",
  "body": ""
}, context)
```

#### Input
* input `object`
  * dataSource `string` (values: En, Cs, X, E, Rh, Ck, Eco, Cg, Ch, Il, Uc, Rf, Pd, U, Ma, Lm, Wd, Wi, Cpc, Mb, Rk, Ce, S, L, Wg, Om, T, Mc, Ik, H, Re, Ag, Q, Ca, Up, Cks): (Optional) Restrict results by data source [system code](http://vocabularies.bridgedb.org/#systemCode)
  * organism **required** `string` (values: Human, Homo sapiens, Tuberculosis, Mycobacterium tuberculosis, Mosquito, Anopheles gambiae, Zebra fish, Danio rerio, Arabidopsis thaliana, Rice, Oryza sativa, Sea Squirt, Ciona intestinalis, Barley, Hordeum vulgare, Frog, Xenopus tropicalis, Soybean, Glycine max, Fruit fly, Drosophila melanogaster, Horse, Equus caballus, Rhesus Monkey, Macaca mulatta, Wine Grape, Vitis vinifera, Yeast, Saccharomyces cerevisiae, Tomato, Solanum lycopersicum, Rat, Rattus norvegicus, Cow, Bos taurus, Western Balsam Poplar, Populus trichocarpa, Chimpanzee, Pan troglodytes, Indian Rice, Oryza indica, Dog, Canis familiaris, Maize, Zea mays, Pig, Sus scrofa, Worm, Caenorhabditis elegans, Platypus, Ornithorhynchus anatinus, Chicken, Gallus gallus, Fusarium graminearum, Gibberella zeae, Bacillus subtilis, Escherichia coli, Black mold, Aspergillus niger, Mouse, Mus musculus): Organism [Latin name](http://vocabularies.bridgedb.org/#latinName) or [short name](http://vocabularies.bridgedb.org/#shortName).
  * body **required** `string`

#### Output
*Output schema unknown*

### organism.xrefsBatch.systemCode.post
Returns a list of xrefs, that maps to a given list of identifiers to a given data source and organism.


```js
bridgedb.organism.xrefsBatch.systemCode.post({
  "organism": "",
  "systemCode": "",
  "body": ""
}, context)
```

#### Input
* input `object`
  * dataSource `string` (values: En, Cs, X, E, Rh, Ck, Eco, Cg, Ch, Il, Uc, Rf, Pd, U, Ma, Lm, Wd, Wi, Cpc, Mb, Rk, Ce, S, L, Wg, Om, T, Mc, Ik, H, Re, Ag, Q, Ca, Up, Cks): (Optional) Restrict results by data source [system code](http://vocabularies.bridgedb.org/#systemCode)
  * organism **required** `string` (values: Human, Homo sapiens, Tuberculosis, Mycobacterium tuberculosis, Mosquito, Anopheles gambiae, Zebra fish, Danio rerio, Arabidopsis thaliana, Rice, Oryza sativa, Sea Squirt, Ciona intestinalis, Barley, Hordeum vulgare, Frog, Xenopus tropicalis, Soybean, Glycine max, Fruit fly, Drosophila melanogaster, Horse, Equus caballus, Rhesus Monkey, Macaca mulatta, Wine Grape, Vitis vinifera, Yeast, Saccharomyces cerevisiae, Tomato, Solanum lycopersicum, Rat, Rattus norvegicus, Cow, Bos taurus, Western Balsam Poplar, Populus trichocarpa, Chimpanzee, Pan troglodytes, Indian Rice, Oryza indica, Dog, Canis familiaris, Maize, Zea mays, Pig, Sus scrofa, Worm, Caenorhabditis elegans, Platypus, Ornithorhynchus anatinus, Chicken, Gallus gallus, Fusarium graminearum, Gibberella zeae, Bacillus subtilis, Escherichia coli, Black mold, Aspergillus niger, Mouse, Mus musculus): Organism [Latin name](http://vocabularies.bridgedb.org/#latinName) or [short name](http://vocabularies.bridgedb.org/#shortName).
  * systemCode **required** `string` (values: En, Cs, X, E, Rh, Ck, Eco, Cg, Ch, Il, Uc, Rf, Pd, U, Ma, Lm, Wd, Wi, Cpc, Mb, Rk, Ce, S, L, Wg, Om, T, Mc, Ik, H, Re, Ag, Q, Ca, Up, Cks): Source (input) data source [system code](http://vocabularies.bridgedb.org/#systemCode)
  * body **required** `string`

#### Output
*Output schema unknown*



## Definitions

*This integration has no definitions*
