# @datafire/weber_gesamtausgabe_de

Client library for WeGA

## Installation and Usage
```bash
npm install --save @datafire/weber_gesamtausgabe_de
```
```js
let weber_gesamtausgabe_de = require('@datafire/weber_gesamtausgabe_de').create();

weber_gesamtausgabe_de.documents.get({}).then(data => {
  console.log(data);
});
```

## Description

The OpenAPI documentation for the RESTful interface of the Carl-Maria-von-Weber-Gesamtausgabe. <br/> (No registration, authentication, or API key is required) <br/> For feedback or requests about this API please contact stadler@weber-gesamtausgabe.de or start the discussion at https://github.com/Edirom/WeGA-WebApp

## Actions

### code.findByElement.element.get
Finds code samples by XML element


```js
weber_gesamtausgabe_de.code.findByElement.element.get({
  "element": ""
}, context)
```

#### Input
* input `object`
  * element **required** `string`: The XML element to search for
  * namespace `string`: The element namespace. Defaults to the TEI namespace
  * docType `array`: The WeGA document type
  * offset `integer`: Position of first item to retrieve (starting from 1)
  * limit `integer`: Number of items to retrieve (200 max)

#### Output
* output `array`
  * items [CodeSample](#codesample)

### documents.get
The Documents endpoint returns a list of all documents from the WeGA digital edition.



```js
weber_gesamtausgabe_de.documents.get({}, context)
```

#### Input
* input `object`
  * docType `array`: The WeGA document type
  * offset `integer`: Position of first item to retrieve (starting from 1)
  * limit `integer`: Number of items to retrieve (200 max)

#### Output
* output `array`
  * items [Document](#document)

### documents.findByAuthor.authorID.get
This endpoint returns a list of documents by a given author – optionally filtered by document type 



```js
weber_gesamtausgabe_de.documents.findByAuthor.authorID.get({
  "authorID": ""
}, context)
```

#### Input
* input `object`
  * authorID **required** `string`: The author ID to search for. Accepted ID formats are WeGA, e.g. A002068 or http://weber-gesamtausgabe.de/A002068, VIAF, e.g. http://viaf.org/viaf/310642461, or  GND, e.g. http://d-nb.info/gnd/118629662
  * docType `array`: The WeGA document type
  * offset `integer`: Position of first item to retrieve (starting from 1)
  * limit `integer`: Number of items to retrieve (200 max)

#### Output
* output `array`
  * items [Document](#document)

### documents.findByDate.get
This endpoint returns a list of documents related to the given date – optionally filtered by document type. 



```js
weber_gesamtausgabe_de.documents.findByDate.get({
  "fromDate": ""
}, context)
```

#### Input
* input `object`
  * fromDate **required** `string`: The min date to search for
  * toDate `string`: The max date to search for
  * docType `array`: The WeGA document type
  * offset `integer`: Position of first item to retrieve (starting from 1)
  * limit `integer`: Number of items to retrieve (200 max)

#### Output
* output `array`
  * items [Document](#document)

### documents.findByMention.docID.get
This endpoint returns a list of documents that reference a particular docID – optionally filtered by document type. 



```js
weber_gesamtausgabe_de.documents.findByMention.docID.get({
  "docID": ""
}, context)
```

#### Input
* input `object`
  * docID **required** `string`: The document ID that is to be mentioned. Accepted ID formats are WeGA, e.g. A002068 or http://weber-gesamtausgabe.de/A002068, VIAF, e.g. http://viaf.org/viaf/310642461, or  GND, e.g. http://d-nb.info/gnd/118629662
  * docType `array`: The WeGA document type
  * offset `integer`: Position of first item to retrieve (starting from 1)
  * limit `integer`: Number of items to retrieve (200 max)

#### Output
* output `array`
  * items [Document](#document)

### documents.docID.get
This endpoint returns documents, indicated by an ID.
 Accepted ID formats are WeGA, e.g. A002068 or http://weber-gesamtausgabe.de/A002068, VIAF, e.g. http://viaf.org/viaf/310642461, or  GND, e.g. http://d-nb.info/gnd/118629662



```js
weber_gesamtausgabe_de.documents.docID.get({
  "docID": ""
}, context)
```

#### Input
* input `object`
  * docID **required** `string`: The document identifier to search for

#### Output
* output `array`
  * items [Document](#document)



## Definitions

### CodeSample
* CodeSample `object`
  * codeSample `string`: The code snippet
  * docID `string`: The WeGA document identifier representing a specific document
  * uri `string`: Unique identifier representing a specific document

### Document
* Document `object`
  * docID `string`: The WeGA document identifier representing a specific document
  * docType `string`: The WeGA document type
  * title `string`: The title of the document
  * uri `string`: Unique identifier representing a specific document

### Error
* Error `object`
  * code `integer`
  * fields `string`
  * message `string`

### svnHistoryPatch
* svnHistoryPatch `object`
  * author `string`: The Subversion commit author
  * dateTime `string`: The Subversion commit dateTime
  * path `string`: The Subversion path, starting from the repository root
  * rev `integer`: The Subversion commit revision
  * uri `string`: Unique identifier representing a specific document


