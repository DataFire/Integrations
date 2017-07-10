# @datafire/cybertaxonomy_eu
The Unified Taxonomic Information Service (UTIS) is the taxonomic backbone for the EU-BON project

## Operation: capabilities
capabilities

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/ServiceProviderInfo"
  },
  "type": "array"
}
```
## Operation: search
search

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "query": {
      "type": "string",
      "description": "The scientific name to search for. For example: \"Bellis perennis\", \"Prionus\" or \"Bolinus brandaris\". This is an exact search so wildcard characters are not supported."
    },
    "providers": {
      "type": "string",
      "description": "A list of provider id strings concatenated by comma characters. The default : \"pesi,bgbm-cdm-server[col]\" will be used if this parameter is not set. A list of all available provider ids can be obtained from the '/capabilities' service end point. Providers can be nested, that is a parent provider can have sub providers. If the id of the parent provider is supplied all subproviders will be queried. The query can also be restriced to one or more subproviders by using the following syntax: parent-id[sub-id-1,sub-id2,...]"
    },
    "searchMode": {
      "type": "string",
      "description": "Specifies the searchMode. Possible search modes are: scientificNameExact, scientificNameLike (begins with), vernacularNameExact, vernacularNameLike (contains), findByIdentifier. If the a provider does not support the chosen searchMode it will be skipped and the status message in the tnrClientStatus will be set to 'unsupported search mode' in this case.",
      "enum": [
        "scientificNameExact",
        "scientificNameLike",
        "vernacularNameExact",
        "vernacularNameLike",
        "findByIdentifier"
      ]
    },
    "addSynonymy": {
      "type": "boolean",
      "description": "Indicates whether the synonymy of the accepted taxon should be included into the response. Turning this option on may cause an increased response time."
    },
    "timeout": {
      "type": "integer",
      "format": "int64",
      "description": "The maximum of milliseconds to wait for responses from any of the providers. If the timeout is exceeded the service will jut return the resonses that have been received so far. The default timeout is 0 ms (wait for ever)"
    }
  },
  "additionalProperties": false,
  "required": [
    "query"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/TnrMsg"
}
```
