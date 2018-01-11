# @datafire/bclaws_ca_bclaws

Client library for BC Laws

## Installation and Usage
```bash
npm install --save @datafire/bclaws_ca_bclaws
```
```js
let bclaws_ca_bclaws = require('@datafire/bclaws_ca_bclaws').create();

bclaws_ca_bclaws.content.aspectId.get({}).then(data => {
  console.log(data);
})
```

## Description

BC Laws is an electronic library providing free public access to the laws of British Columbia. BC Laws is hosted by the Queen's Printer of British Columbia and published in partnership with the Ministry of Justice and the Law Clerk of the Legislative Assembly.BC Laws contains a comprehensive collection of BC legislation and related materials. It is available on the internet in two forms:First: The library is available as a web site in which users can browse and search the laws of British Columbia.Second: The library is available as a portal to legislation in raw XML data format, accessible via the BC Laws API2. This direct access to raw data is intended to enable third parties to build or add their own custom applications based on the structure of the data and all the associated search functionality inherent in that structure. The BC Laws website itself is an example of one such application.

## Actions

### content.aspectId.get
Describes the documents and directories available within a specific 'aspect' (content group) of the BCLaws library


```js
bclaws_ca_bclaws.content.aspectId.get({
  "aspectId": ""
}, context)
```

#### Input
* input `object`
  * aspectId **required** `string` (values: complete, corpreg, bcgaz1, bcgaz2, oic, psl, ecb, hscr, arch_oic): The identifier of the 'aspect' (content group) to search

#### Output
*Output schema unknown*

### content.aspectId.civixDocumentId.get
Lists the metadata available for the specified index or directory from the BCLaws legislative respository


```js
bclaws_ca_bclaws.content.aspectId.civixDocumentId.get({
  "aspectId": "",
  "civixDocumentId": ""
}, context)
```

#### Input
* input `object`
  * aspectId **required** `string` (values: complete, corpreg, bcgaz1, bcgaz2, oic, psl, ecb, hscr, arch_oic): The identifier of the 'aspect' (content group) to search
  * civixDocumentId **required** `string`: The document identification code for an index or directory

#### Output
*Output schema unknown*

### document.id.aspectId.civixIndexId.civixDocumentId.get
The /document API allows you to retrieve actual documents from the BCLaws legislative repository. To retrieve a document from the repository you need the aspect identifier and two other specific pieces of information about the document: the index identifier and the document identifier. These unique identifiers can be retrieved from the /content API.


```js
bclaws_ca_bclaws.document.id.aspectId.civixIndexId.civixDocumentId.get({
  "aspectId": "",
  "civixIndexId": "",
  "civixDocumentId": ""
}, context)
```

#### Input
* input `object`
  * aspectId **required** `string` (values: complete, corpreg, bcgaz1, bcgaz2, oic, psl, ecb, hscr, arch_oic): The identifier of the 'aspect' (content group) to search
  * civixIndexId **required** `string`: Index identification code
  * civixDocumentId **required** `string`: The document identification code for an index or directory

#### Output
*Output schema unknown*

### document.id.aspectId.civixIndexId.civixDocumentId.search.searchString.get
The /document API allows you to retrieve actual documents from the BCLaws legislative repository. To retrieve a document from the repository you need the aspect identifier and two other specific pieces of information about the document: the index identifier and the document identifier. These unique identifiers can be retrieved from the /content API.


```js
bclaws_ca_bclaws.document.id.aspectId.civixIndexId.civixDocumentId.search.searchString.get({
  "aspectId": "",
  "civixIndexId": "",
  "civixDocumentId": "",
  "searchString": ""
}, context)
```

#### Input
* input `object`
  * aspectId **required** `string` (values: complete, corpreg, bcgaz1, bcgaz2, oic, psl, ecb, hscr, arch_oic): The identifier of the 'aspect' (content group) to search
  * civixIndexId **required** `string`: Index identification code
  * civixDocumentId **required** `string`: The document identification code for an index or directory
  * searchString **required** `string`: The text to search for within the document

#### Output
*Output schema unknown*

### document.id.aspectId.civixIndexId.civixDocumentId.xml.get
The /document API allows you to retrieve actual documents from the BCLaws legislative repository. To retrieve a document from the repository you need the aspect identifier and two other specific pieces of information about the document: the index identifier and the document identifier. These unique identifiers can be retrieved from the /content API.


```js
bclaws_ca_bclaws.document.id.aspectId.civixIndexId.civixDocumentId.xml.get({
  "aspectId": "",
  "civixIndexId": "",
  "civixDocumentId": ""
}, context)
```

#### Input
* input `object`
  * aspectId **required** `string` (values: complete, corpreg, bcgaz1, bcgaz2, oic, psl, ecb, hscr, arch_oic): The identifier of the 'aspect' (content group) to search
  * civixIndexId **required** `string`: Index identification code
  * civixDocumentId **required** `string`: The document identification code for an index or directory

#### Output
*Output schema unknown*

### document.id.aspectId.civixIndexId.civixDocumentId.xml.search.searchString.get
The /document API allows you to retrieve actual documents from the BCLaws legislative repository. To retrieve a document from the repository you need the aspect identifier and two other specific pieces of information about the document: the index identifier and the document identifier. These unique identifiers can be retrieved from the /content API.


```js
bclaws_ca_bclaws.document.id.aspectId.civixIndexId.civixDocumentId.xml.search.searchString.get({
  "aspectId": "",
  "civixIndexId": "",
  "civixDocumentId": "",
  "searchString": ""
}, context)
```

#### Input
* input `object`
  * aspectId **required** `string` (values: complete, corpreg, bcgaz1, bcgaz2, oic, psl, ecb, hscr, arch_oic): The identifier of the 'aspect' (content group) to search
  * civixIndexId **required** `string`: Index identification code
  * civixDocumentId **required** `string`: The document identification code for an index or directory
  * searchString **required** `string`: The text to search for within the document

#### Output
*Output schema unknown*

### search.aspectId.fullsearch.get
A listing of metadata available for the specified aspect and search term from the BCLaws legislative repository


```js
bclaws_ca_bclaws.search.aspectId.fullsearch.get({
  "aspectId": "",
  "q": "",
  "s": "",
  "e": 0,
  "nFrag": 0,
  "lFrag": 0
}, context)
```

#### Input
* input `object`
  * aspectId **required** `string` (values: complete, corpreg, bcgaz1, bcgaz2, oic, psl, ecb, hscr, arch_oic): The identifier of the 'aspect' (content group) to search
  * q **required** `string`: query term
  * s **required** `string`: first hit (start index)
  * e **required** `integer`: last hit (end index)
  * nFrag **required** `integer`: number of fragment snippets to return (< 10)
  * lFrag **required** `integer`: length of fragment snippets (< 200)

#### Output
*Output schema unknown*



## Definitions

** No definitions **
