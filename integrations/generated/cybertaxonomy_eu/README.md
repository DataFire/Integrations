# @datafire/cybertaxonomy_eu

Client library for EU BON UTIS

## Installation and Usage
```bash
npm install --save datafire @datafire/cybertaxonomy_eu
```

```js
let datafire = require('datafire');
let cybertaxonomy_eu = require('@datafire/cybertaxonomy_eu').create();

cybertaxonomy_eu.capabilities({}).then(data => {
  console.log(data);
})
```

## Description
The Unified Taxonomic Information Service (UTIS) is the taxonomic backbone for the EU-BON project

## Actions
### capabilities
capabilities


```js
cybertaxonomy_eu.capabilities(null, context)
```

#### Parameters
*This action has no parameters*

### search
search


```js
cybertaxonomy_eu.search({
  "query": ""
}, context)
```

#### Parameters
* query (string) **required** - The scientific name to search for. For example: "Bellis perennis", "Prionus" or "Bolinus brandaris". This is an exact search so wildcard characters are not supported.
* providers (string) - A list of provider id strings concatenated by comma characters. The default : "pesi,bgbm-cdm-server[col]" will be used if this parameter is not set. A list of all available provider ids can be obtained from the '/capabilities' service end point. Providers can be nested, that is a parent provider can have sub providers. If the id of the parent provider is supplied all subproviders will be queried. The query can also be restriced to one or more subproviders by using the following syntax: parent-id[sub-id-1,sub-id2,...]
* searchMode (string) - Specifies the searchMode. Possible search modes are: scientificNameExact, scientificNameLike (begins with), vernacularNameExact, vernacularNameLike (contains), findByIdentifier. If the a provider does not support the chosen searchMode it will be skipped and the status message in the tnrClientStatus will be set to 'unsupported search mode' in this case.
* addSynonymy (boolean) - Indicates whether the synonymy of the accepted taxon should be included into the response. Turning this option on may cause an increased response time.
* timeout (integer) - The maximum of milliseconds to wait for responses from any of the providers. If the timeout is exceeded the service will jut return the resonses that have been received so far. The default timeout is 0 ms (wait for ever)

