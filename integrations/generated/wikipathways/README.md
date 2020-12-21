# @datafire/wikipathways

Client library for WikiPathways Webservices

## Installation and Usage
```bash
npm install --save @datafire/wikipathways
```
```js
let wikipathways = require('@datafire/wikipathways').create();

.then(data => {
  console.log(data);
});
```

## Description



## Actions

### createPathway.post
createPathwayCreate a new pathway on the wiki with the given GPML code.<br>Note: To create/modify pathways via the web service, you need to have an account with web service write permissions. Please contact us to request write access for the web service.


```js
wikipathways.createPathway.post({
  "gpml": "",
  "auth": "",
  "username": ""
}, context)
```

#### Input
* input `object`
  * gpml **required** `string`: The GPML code for the new pathway
  * auth **required** `string`: The authentication info
  * username **required** `string`: The user name
  * format `string` (values: json, xml, html, dump, jpg, pdf)

#### Output
*Output schema unknown*

### findInteractions.get
findInteractionsFind interactions defined in WikiPathways pathways.


```js
wikipathways.findInteractions.get({
  "query": ""
}, context)
```

#### Input
* input `object`
  * query **required** `string`: The name of an entity to find interactions for (e.g. 'P53')
  * format `string` (values: json, xml, html, dump, jpg, pdf)

#### Output
*Output schema unknown*

### findPathwaysByLiterature.get
findPathwaysByLiterature


```js
wikipathways.findPathwaysByLiterature.get({
  "query": ""
}, context)
```

#### Input
* input `object`
  * query **required** `string`: The query, can be a pubmed id, author name or title keyword.
  * format `string` (values: json, xml, html, dump, jpg, pdf)

#### Output
*Output schema unknown*

### findPathwaysByText.get
findPathwaysByText


```js
wikipathways.findPathwaysByText.get({
  "query": ""
}, context)
```

#### Input
* input `object`
  * query **required** `string`: The query, e.g. 'apoptosis'
  * species `string`: Optional, limit the query by species. Leave
  * format `string` (values: json, xml, html, dump, jpg, pdf)

#### Output
*Output schema unknown*

### findPathwaysByXref.get
findPathwaysByXref


```js
wikipathways.findPathwaysByXref.get({
  "ids": []
}, context)
```

#### Input
* input `object`
  * ids **required** `array`: string
  * codes `array`: string
  * format `string` (values: json, xml, html, dump, jpg, pdf)

#### Output
*Output schema unknown*

### getColoredPathway.get
getColoredPathwayGet a colored image version of the pathway.


```js
wikipathways.getColoredPathway.get({
  "pwId": "",
  "revision": "",
  "graphId": [],
  "color": [],
  "fileType": ""
}, context)
```

#### Input
* input `object`
  * pwId **required** `string`: The pathway identifier
  * revision **required** `string`: The revision of the pathway (use '0' for most recent)
  * graphId **required** `array`: string
  * color **required** `array`: string
  * fileType **required** `string`: The image type (One of 'svg', 'pdf' or 'png').
  * format `string` (values: json, xml, html, dump, jpg, pdf)

#### Output
*Output schema unknown*

### getCurationTagHistory.get
getCurationTagHistory


```js
wikipathways.getCurationTagHistory.get({
  "pwId": ""
}, context)
```

#### Input
* input `object`
  * pwId **required** `string`: The pathway identifier
  * timestamp `string`: Only include history from after the given date
  * format `string` (values: json, xml, html, dump, jpg, pdf)

#### Output
*Output schema unknown*

### getCurationTags.get
getCurationTagsGet all curation tags for the given tag name. Use this method if you want to find all pathways that are tagged with a specific curation tag.


```js
wikipathways.getCurationTags.get({
  "pwId": ""
}, context)
```

#### Input
* input `object`
  * pwId **required** `string`: The pathway identifier
  * format `string` (values: json, xml, html, dump, jpg, pdf)

#### Output
*Output schema unknown*

### getCurationTagsByName.get
getCurationTagsByNameGet all curation tags for the given tag name. Use this method if you want to find all pathways that are tagged with a specific curation tag.


```js
wikipathways.getCurationTagsByName.get({
  "tagName": ""
}, context)
```

#### Input
* input `object`
  * tagName **required** `string`: The tag name
  * format `string` (values: json, xml, html, dump, jpg, pdf)

#### Output
*Output schema unknown*

### getOntologyTermsByPathway.get
getOntologyTermsByPathway


```js
wikipathways.getOntologyTermsByPathway.get({
  "pwId": ""
}, context)
```

#### Input
* input `object`
  * pwId **required** `string`: The pathway identifier
  * format `string` (values: json, xml, html, dump, jpg, pdf)

#### Output
*Output schema unknown*

### getPathway.get
getPathway


```js
wikipathways.getPathway.get({
  "pwId": ""
}, context)
```

#### Input
* input `object`
  * pwId **required** `string`: The pathway identifier
  * revision `integer`: The revision number of the pathway (use 0 for most recent)
  * format `string` (values: json, xml, html, dump, jpg, pdf)

#### Output
*Output schema unknown*

### getPathwayAs.get
getPathwayAsDownload a pathway in the specified file format.


```js
wikipathways.getPathwayAs.get({
  "fileType": "",
  "pwId": ""
}, context)
```

#### Input
* input `object`
  * fileType **required** `string`: The file type to convert to, e.g.
  * pwId **required** `string`: The pathway identifier
  * revision `integer`: The revision number of the pathway (use 0 for most recent)
  * format `string` (values: json, xml, html, dump, jpg, pdf)

#### Output
*Output schema unknown*

### getPathwayHistory.get
getPathwayHistoryGet the revision history of a pathway.


```js
wikipathways.getPathwayHistory.get({
  "pwId": "",
  "timestamp": ""
}, context)
```

#### Input
* input `object`
  * pwId **required** `string`: The pathway identifier
  * timestamp **required** `string`: Limit by time, only history items after the given
  * format `string` (values: json, xml, html, dump, jpg, pdf)

#### Output
*Output schema unknown*

### getPathwayInfo.get
getPathwayInfoGet some general info about the pathway, such as the name, species, without downloading the GPML.


```js
wikipathways.getPathwayInfo.get({
  "pwId": ""
}, context)
```

#### Input
* input `object`
  * pwId **required** `string`: The pathway identifier
  * format `string` (values: json, xml, html, dump, jpg, pdf)

#### Output
*Output schema unknown*

### getPathwaysByOntologyTerm.get
getPathwaysByOntologyTerm


```js
wikipathways.getPathwaysByOntologyTerm.get({
  "term": ""
}, context)
```

#### Input
* input `object`
  * term **required** `string`: The Ontology term
  * format `string` (values: json, xml, html, dump, jpg, pdf)

#### Output
*Output schema unknown*

### getPathwaysByParentOntologyTerm.get
getPathwaysByParentOntologyTerm


```js
wikipathways.getPathwaysByParentOntologyTerm.get({
  "term": ""
}, context)
```

#### Input
* input `object`
  * term **required** `string`: The Ontology term
  * format `string` (values: json, xml, html, dump, jpg, pdf)

#### Output
*Output schema unknown*

### getRecentChanges.get
getRecentChangesGet the recently changed pathways.<br>Note: the recent changes table only retains items for a limited time (2 months), so there is no guarantee that you will get all changes when the timestamp points to a date that is more than 2 months in the past.


```js
wikipathways.getRecentChanges.get({
  "timestamp": ""
}, context)
```

#### Input
* input `object`
  * timestamp **required** `string`: Get the changes after this time
  * format `string` (values: json, xml, html, dump, jpg, pdf)

#### Output
*Output schema unknown*

### getUserByOrcid.get
getUserByOrcid


```js
wikipathways.getUserByOrcid.get({
  "orcid": ""
}, context)
```

#### Input
* input `object`
  * orcid **required** `string`: string
  * format `string` (values: json, xml, html, dump, jpg, pdf)

#### Output
*Output schema unknown*

### getXrefList.get
getXrefList


```js
wikipathways.getXrefList.get({
  "pwId": "",
  "code": ""
}, context)
```

#### Input
* input `object`
  * pwId **required** `string`: The pathway identifier.
  * code **required** `string`: The database code to translate to (e.g. 'S' for UniProt).
  * format `string` (values: json, xml, html, dump, jpg, pdf)

#### Output
*Output schema unknown*

### listOrganisms.get
listOrganisms


```js
wikipathways.listOrganisms.get({}, context)
```

#### Input
* input `object`
  * format `string` (values: json, xml, html, dump, jpg, pdf)

#### Output
*Output schema unknown*

### listPathways.get
listPathways


```js
wikipathways.listPathways.get({}, context)
```

#### Input
* input `object`
  * organism `string`: The organism to filter by (optional)
  * format `string` (values: json, xml, html, dump, jpg, pdf)

#### Output
*Output schema unknown*

### login.get
loginStart a logged in session, using an existing WikiPathways account. This function will return an authentication code that can be used to excecute methods that need authentication (e.g. updatePathway).


```js
wikipathways.login.get({
  "name": "",
  "pass": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The usernameset_include_path(get_include_path().PATH_SEPARATOR.realpath('../includes').PATH_SEPARATOR.realpath('../').PATH_SEPARATOR);
  * pass **required** `string`: The password
  * format `string` (values: json, xml, html, dump, jpg, pdf)

#### Output
*Output schema unknown*

### removeCurationTag.get
removeCurationTagRemove a curation tag from a pathway.


```js
wikipathways.removeCurationTag.get({
  "pwId": "",
  "tagName": "",
  "auth": "",
  "username": ""
}, context)
```

#### Input
* input `object`
  * pwId **required** `string`: The pathway identifier
  * tagName **required** `string`: The name of the tag to apply
  * auth **required** `string`: The authentication data
  * username **required** `string`: The user name
  * format `string` (values: json, xml, html, dump, jpg, pdf)

#### Output
*Output schema unknown*

### removeOntologyTag.get
removeOntologyTag


```js
wikipathways.removeOntologyTag.get({
  "pwId": "",
  "termId": "",
  "auth": "",
  "user": ""
}, context)
```

#### Input
* input `object`
  * pwId **required** `string`: The pathway identifier
  * termId **required** `string`: The ontology term identifier in the ontology
  * auth **required** `string`: The authentication key
  * user **required** `string`: The username
  * format `string` (values: json, xml, html, dump, jpg, pdf)

#### Output
*Output schema unknown*

### saveCurationTag.get
saveCurationTag


```js
wikipathways.saveCurationTag.get({
  "pwId": "",
  "tagName": "",
  "text": "",
  "revision": 0,
  "auth": "",
  "username": ""
}, context)
```

#### Input
* input `object`
  * pwId **required** `string`: The pathway identifier
  * tagName **required** `string`: The name of the tag to apply
  * text **required** `string`: string
  * revision **required** `integer`: The revision this tag applies to
  * auth **required** `string`: The authentication key
  * username **required** `string`: The user name
  * format `string` (values: json, xml, html, dump, jpg, pdf)

#### Output
*Output schema unknown*

### saveOntologyTag.get
saveOntologyTag


```js
wikipathways.saveOntologyTag.get({
  "pwId": "",
  "term": "",
  "termId": "",
  "auth": "",
  "user": ""
}, context)
```

#### Input
* input `object`
  * pwId **required** `string`: The pathway identifier
  * term **required** `string`: The ontology term to apply
  * termId **required** `string`: The identifier of the term in the ontology
  * auth **required** `string`: The authentication key
  * user **required** `string`: The username
  * format `string` (values: json, xml, html, dump, jpg, pdf)

#### Output
*Output schema unknown*

### updatePathway.get
updatePathwayUpdate a pathway on the wiki with the given GPML code.<br>Note: To create/modify pathways via the web service, you need to have an account with web service write permissions. Please contact us to request write access for the web service.


```js
wikipathways.updatePathway.get({
  "pwId": "",
  "description": "",
  "gpml": "",
  "revision": 0,
  "auth": "",
  "username": ""
}, context)
```

#### Input
* input `object`
  * pwId **required** `string`: The pathway identifier
  * description **required** `string`: A description of the modifications
  * gpml **required** `string`: The updated GPML code
  * revision **required** `integer`: The revision the GPML code is based on
  * auth **required** `string`: The authentication key
  * username **required** `string`: The username
  * format `string` (values: json, xml, html, dump, jpg, pdf)

#### Output
*Output schema unknown*



## Definitions

*This integration has no definitions*
