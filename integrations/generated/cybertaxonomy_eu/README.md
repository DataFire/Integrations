# @datafire/cybertaxonomy_eu

Client library for EU BON UTIS

## Installation and Usage
```bash
npm install --save @datafire/cybertaxonomy_eu
```
```js
let cybertaxonomy_eu = require('@datafire/cybertaxonomy_eu').create();

cybertaxonomy_eu.capabilities(null).then(data => {
  console.log(data);
});
```

## Description

The Unified Taxonomic Information Service (UTIS) is the taxonomic backbone for the EU-BON project

## Actions

### capabilities
capabilities


```js
cybertaxonomy_eu.capabilities(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [ServiceProviderInfo](#serviceproviderinfo)

### search
search


```js
cybertaxonomy_eu.search({
  "query": ""
}, context)
```

#### Input
* input `object`
  * query **required** `string`: The scientific name to search for. For example: "Bellis perennis", "Prionus" or "Bolinus brandaris". This is an exact search so wildcard characters are not supported.
  * providers `string`: A list of provider id strings concatenated by comma characters. The default : "pesi,bgbm-cdm-server[col]" will be used if this parameter is not set. A list of all available provider ids can be obtained from the '/capabilities' service end point. Providers can be nested, that is a parent provider can have sub providers. If the id of the parent provider is supplied all subproviders will be queried. The query can also be restriced to one or more subproviders by using the following syntax: parent-id[sub-id-1,sub-id2,...]
  * searchMode `string` (values: scientificNameExact, scientificNameLike, vernacularNameExact, vernacularNameLike, findByIdentifier): Specifies the searchMode. Possible search modes are: scientificNameExact, scientificNameLike (begins with), vernacularNameExact, vernacularNameLike (contains), findByIdentifier. If the a provider does not support the chosen searchMode it will be skipped and the status message in the tnrClientStatus will be set to 'unsupported search mode' in this case.
  * addSynonymy `boolean`: Indicates whether the synonymy of the accepted taxon should be included into the response. Turning this option on may cause an increased response time.
  * timeout `integer`: The maximum of milliseconds to wait for responses from any of the providers. If the timeout is exceeded the service will jut return the resonses that have been received so far. The default timeout is 0 ms (wait for ever)

#### Output
* output [TnrMsg](#tnrmsg)



## Definitions

### AtomisedName
* AtomisedName `object`
  * genusOrUninomial `string`
  * infragenericEpithet `string`
  * infraspecificEpithet `string`
  * specificEpithet `string`

### ClientStatus
* ClientStatus `object`
  * checklistId `string`
  * duration `number`: Duration of the request processing in the specific checklist client in milliseconds.
  * statusMessage `string`: Status of the request, possible values are 'ok', 'timeout', 'interrupted', 'unsupported search mode'.

### HigherClassificationElement
* HigherClassificationElement `object`
  * rank `string`
  * scientificName `string`
  * taxonID `string`

### OtherNames
* OtherNames `object`
  * sources `array`
    * items [Source](#source)
  * taxonName [TaxonName](#taxonname)
  * url `string`: The URL pointing to the original name record of the checklist provider.

### Query
* Query `object`
  * clientStatus `array`
    * items [ClientStatus](#clientstatus)
  * request [Request](#request)
  * response `array`
    * items [Response](#response)

### Request
* Request `object`
  * addSynonymy `boolean`: Indicates whether the synonymy of the accepted taxon should be included into the response. Turning this option on may lead to an increased response time.
  * queryString `string`: The query string to match a scientific name, vernacular name or identifier depending on the searchMode
  * searchMode `string`: Specified the search mode to be usedPossible search modes are: scientificNameExact, scientificNameLike (begins with), vernacularNameExact, vernacularNameLike (contains).

### Response
* Response `object`
  * checklist `string`
  * checklistCitation `string`
  * checklistId `string`
  * checklistUrl `string`
  * checklistVersion `string`
  * matchingNameString `string`: Refers to the name string of the accepted taxon, synonym or otherName which was matching the query string
  * matchingNameType `string` (values: TAXON, SYNONYM, VERNACULAR_NAME, OTHER_NAME): Reports which of the names was matching the query string:  'taxon', 'synonym', 'vernacularName', or 'otherName'
  * otherNames `array`
    * items [OtherNames](#othernames)
  * synonyms `array`: The list synonyms related to the accepted taxon
    * items [Synonym](#synonym)
  * taxon [Taxon](#taxon)
  * vernacularNames `array`: A common or vernacular name.
    * items `string`

### ServiceProviderInfo
* ServiceProviderInfo `object`
  * copyrightUrl `string`
  * documentationUrl `string`
  * id `string`
  * label `string`
  * searchModes `array`: Set of the different SearchModes supported by the service provider and client implementation.Possible search modes are: scientificNameExact, scientificNameLike, vernacularName
    * items `string`
  * subChecklists `array`
    * items [ServiceProviderInfo](#serviceproviderinfo)
  * version `string`

### Source
* Source `object`
  * datasetName `string`
  * identifier `string`
  * name `string`
  * title `string`: The full not atomized source string.
  * url `string`

### Synonym
* Synonym `object`
  * accordingTo `string`: The reference to the source in which the specific taxon concept circumscription is defined or implied - traditionally signified by the Latin 'sensu' or 'sec.' (from secundum, meaning 'according to').
  * sources `array`
    * items [Source](#source)
  * taxonName [TaxonName](#taxonname)
  * taxonomicStatus `string`: The taxonomic status string like 'invalid', 'misapplied', 'homotypic synonym', 'accepted', 'synonym'. Corresponds to http://rs.tdwg.org/dwc/terms/taxonomicStatus
  * url `string`: The URL pointing to the original record of the checklist provider.

### Taxon
* Taxon `object`
  * accordingTo `string`: The reference to the source in which the specific taxon concept circumscription is defined or implied - traditionally signified by the Latin 'sensu' or 'sec.' (from secundum, meaning 'according to').
  * higherClassification `array`
    * items [HigherClassificationElement](#higherclassificationelement)
  * identifier `string`
  * sources `array`
    * items [Source](#source)
  * taxonName [TaxonName](#taxonname)
  * taxonomicStatus `string`: The taxonomic status string like 'invalid', 'misapplied', 'homotypic synonym', 'accepted', 'synonym'. Corresponds to http://rs.tdwg.org/dwc/terms/taxonomicStatus
  * url `string`: The URL pointing to the original record of the checklist provider.

### TaxonName
* TaxonName `object`
  * atomisedName [AtomisedName](#atomisedname)
  * authorship `string`
  * canonicalName `string`: Canonical name string consisting of only nomenclatural information, i.e. no authorship or taxonomic hierarchy information with the exception of the necessary placements within Genus or Species.
  * nomenclaturalReference `string`: A reference for the publication in which the scientificName was originally established under the rules of the associated nomenclaturalCode.
  * rank `string`
  * scientificName `string`: The full scientific name, with authorship, publication date information and potentially further taxonomic information.

### TnrMsg
* TnrMsg `object`
  * query `array`
    * items [Query](#query)


