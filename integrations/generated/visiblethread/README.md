# @datafire/visiblethread

Client library for VisibleThread API

## Installation and Usage
```bash
npm install --save @datafire/visiblethread
```
```js
let visiblethread = require('@datafire/visiblethread').create({
  api_key: ""
});

.then(data => {
  console.log(data);
});
```

## Description

## Introduction
The VisibleThread b API provides services for analyzing/searching documents and web pages.
To use the service you need an API key. 

**Contact us at support@visiblethread.com to request an API key**. 

The services are split into **Documents** and **Webscans**.

### Documents
Upload documents and dictionaries so you can :
- Measure the readability of your document
- search a document for all terms from a dictionary
- retrieve all paragraphs from a document or only matching paragraphs

### Webscans
Analyze web pages so you can: 
- Measure the readability of your web content
- Identify & highlight content issues e.g. long sentences, passive voice

The VisibleThread API allows you to programatially submit webpage urls to be scanned, 
check on the results of a scan, and view a list of previous scans you have performed.
    
-------------

The VisibleThread API is a HTTP-based JSON API, accessible at https://api.visiblethread.com 
Each request to the service requires your API key to be successful.

## Getting Started With Webscans

Steps:
1. Enter your API key above and hit **Explore**. 
2. Run a new scan by submitting a **POST to /webscans** (title and some webUrls are required).
   The scan runs asynchronously in the background but returns immediately with a JSON response containing an "id" that represents your scan.
3. Check on the status of a scan by submitting **GET /webscans/{scanId}**, if the scan is still in progress it will return a HTTP 503. If 
   it is complete it will return a HTTP 200 with the appropriate JSON outlining the urls scanned and the summary statistics for each url.
4. Retrieve all your previous scan results by submitting **GET /webscans**.  
5. Retrieve detailed results for a url within a scan (readability, long sentence and passive language instances) by submitting 
   **GET /webscans/{scanId}/webUrls/{urlId}** (scanId and urlId are required)

## Getting Started With Document scans:

Steps:
1. Enter your API key above and hit **Explore**
2. Run a new scan by submitting a **POST to /documents** (document required). The scan runs asynchronously in the background but returns
   immediately with a JSON response containins an "id" that represents your scan
3. Check on the status of a scan by submitting **GET /documents/{scanId}**, if the scan is still in progress it will return a HTTP 503. If 
   it is complete it will return a HTTP 200 with the appropriate JSON outlining the document readability results. It will contain detailed
   analysis of each paragraph in the document
4. Retrieve all your previous scan results by submitting **GET /documents**

### Searching a document for keywords

The VisibleThread API allows you to upload a set of keywords or a 'dictionary'. You can then perform a search of a already uploaded document 
using that dictionary

Steps (Assuming you have uploaded your document using the steps above):
1. Upload a csv file to use as a keyword dictionary by submitting a **POST to /dictionaries** (csv file required). This returns a JSON 
   response with the dictionary Id 
2. Search a document with the dictionary by submitting a **POST to /searches** (document id and dictionary id required). 
3. Get the resuhlts of the search by submitting  **GET /searches/{docId}/{dictionaryId}" . This will return JSON response containing 
   detailed results of searching the document using the dictionary.
4. To view the list of all searches you have performed submit a **GET /searches**. 

Below is a list of the available API endpoints, documentation & a form to try out each operation.

## Actions

### dictionaries.get
Get your list of dictionaries


```js
visiblethread.dictionaries.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### uploadDictionary
Upload a dictionary (CSV format) to your VisibleThread account. 


```js
visiblethread.uploadDictionary({
  "file": ""
}, context)
```

#### Input
* input `object`
  * file **required** `string`, `object`: The uploaded CSV dictionary
    * content `string`
    * encoding `string` (values: ascii, utf8, utf16le, base64, binary, hex)
    * contentType `string`
    * filename `string`

#### Output
*Output schema unknown*

### documents.get
Get your list of documents


```js
visiblethread.documents.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [DocumentListSummary](#documentlistsummary)

### uploadDoc
Upload a document to your VisibleThread account. 
We return a JSON response that contains a "docId" that represents your document.        
You can use this id in other requests to check on the analysis status for the document and run a dictionary search and retrieve search
results. 


```js
visiblethread.uploadDoc({
  "file": ""
}, context)
```

#### Input
* input `object`
  * file **required** `string`, `object`: The uploaded file data
    * content `string`
    * encoding `string` (values: ascii, utf8, utf16le, base64, binary, hex)
    * contentType `string`
    * filename `string`
  * longSentenceWordCount `integer`: Optional setting what constitutes a long sentence (default 25)
  * veryLongSentenceWordCount `integer`: Optional setting what constitutes a very long sentence (default 30)

#### Output
* output [NewDocumentResponse](#newdocumentresponse)

### getDocById
Get data from a previously submitted document identified by ***docId***


```js
visiblethread.getDocById({
  "docId": 0
}, context)
```

#### Input
* input `object`
  * docId **required** `integer`: Id of document to fetch

#### Output
* output [DocumentResponseDetailed](#documentresponsedetailed)

### searches.get
Get your list of searches


```js
visiblethread.searches.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### runSearch
Run a search on document **docId** using dictionary **dictId** 


```js
visiblethread.runSearch({
  "body": {
    "docId": 0,
    "dictId": 0
  }
}, context)
```

#### Input
* input `object`
  * body **required** [Search](#search)

#### Output
* output `object`

### getSearchResults
Get detailed results for a scan/url (readability, long sentence and passive language instances), identified by **scanId** & **urlId**


```js
visiblethread.getSearchResults({
  "docId": 0,
  "dictionaryId": 0,
  "matchingOnly": true
}, context)
```

#### Input
* input `object`
  * docId **required** `integer`: Id of document
  * dictionaryId **required** `integer`: Id of dictionary
  * matchingOnly **required** `boolean`: Only returning paragraphs containing a match

#### Output
*Output schema unknown*

### webscans.get
Get your list of scans


```js
visiblethread.webscans.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [ScanResponseSummary](#scanresponsesummary)

### runScan
The scan runs in the background but returns immediately with a JSON response containing an "id" that represents your scan.        
You can use this id in other requests to retrieve your scan result. 

Also, an "id" is returned for each url which can be used to retrieve detailed results for individual scan urls. 


```js
visiblethread.runScan({
  "body": {
    "title": "",
    "webUrls": []
  }
}, context)
```

#### Input
* input `object`
  * body **required** [NewScan](#newscan)

#### Output
* output [NewScanResponse](#newscanresponse)

### getScanById
Get data from a previously run scan, identified by **scanId**


```js
visiblethread.getScanById({
  "scanId": 0
}, context)
```

#### Input
* input `object`
  * scanId **required** `integer`: Id of scan to fetch

#### Output
* output [ScanResponseDetailed](#scanresponsedetailed)

### getScanUrlById
Get detailed results for a scan/url (readability, long sentence and passive language instances), identified by **scanId** & **urlId**


```js
visiblethread.getScanUrlById({
  "scanId": 0,
  "urlId": 0
}, context)
```

#### Input
* input `object`
  * scanId **required** `integer`: Id of scan
  * urlId **required** `integer`: Id of url to fetch

#### Output
* output [WebUrlDetail](#weburldetail)



## Definitions

### Adverbs
* Adverbs `array`
  * items `object`
    * end `integer`
    * start `integer`
    * text `string`

### Analysis
* Analysis `object`
  * stats [Stats](#stats)
  * title `string`

### DocumentListSummary
* DocumentListSummary `object`
  * id `integer`
  * name `string`

### DocumentResponseDetailed
* DocumentResponseDetailed `object`
  * completed `string`
  * eta `string`
  * id `integer`
  * paragraphs `array`
    * items `object`
      * paragraphCounter `integer`
      * paragraphIndex `integer`
      * stats `object`
        * adverbs `array`
          * items [Adverbs](#adverbs)
        * hiddenVerbs `array`
          * items [HiddenVerbs](#hiddenverbs)
        * longSentences `array`
          * items [LongSentences](#longsentences)
        * passives `array`
          * items [Passives](#passives)
        * veryLongSentences `array`
          * items [VeryLongSentences](#verylongsentences)
      * text `string`
  * scanSettings `object`
    * longSentenceWordCount `integer`
    * veryLongSentenceWordCount `integer`
  * started `string`
  * stats [Stats](#stats)
  * title `string`

### DocumentResponseNotReady
* DocumentResponseNotReady `object`
  * eta `string`
  * id `integer`
  * started `string`

### HiddenVerbs
* HiddenVerbs `array`
  * items `object`
    * end `integer`
    * noun `string`
    * start `integer`
    * text `string`

### LongSentences
* LongSentences `array`
  * items `object`
    * end `integer`
    * start `integer`
    * wordCount `integer`

### NewDocumentResponse
* NewDocumentResponse `object`
  * docId **required** `integer`
  * scanSettings **required** `object`
    * longSentenceWordCount `integer`
    * veryLongSentenceWordCount `integer`
  * task **required** `string`

### NewScan
* NewScan `object`
  * scanSettings `object`
    * longSentenceWordCount `integer`
    * veryLongSentenceWordCount `integer`
  * title **required** `string`
  * webUrls **required** `array`
    * items `object`
      * url **required** `string`

### NewScanResponse
* NewScanResponse `object`
  * id **required** `integer`
  * title **required** `string`
  * webUrls **required** `array`
    * items `object`
      * id **required** `integer`
      * url **required** `string`

### Passives
* Passives `array`
  * items `object`
    * end `integer`
    * passivePiece `string`
    * start `integer`
    * verb `string`

### ScanDetailed
* ScanDetailed `object`
  * stats **required** [Stats](#stats)
  * title **required** `string`
  * webUrls **required** `array`
    * items [WebUrl](#weburl)

### ScanResponseDetailed
* ScanResponseDetailed `object`
  * completed `string`
  * eta `string`
  * id `integer`
  * scan [ScanDetailed](#scandetailed)
  * started `string`

### ScanResponseSummary
* ScanResponseSummary `object`
  * completed `string`
  * eta `string`
  * id `integer`
  * scan [ScanSummary](#scansummary)
  * started `string`

### ScanSummary
* ScanSummary `object`
  * title **required** `string`
  * webUrls **required** `array`
    * items [WebUrlHeader](#weburlheader)

### Search
* Search `object`
  * dictId **required** `integer`
  * docId **required** `integer`

### Stats
* Stats `object`
  * avgSentenceLength `integer`
  * fleschKincaidGradeLevel `number`
  * fleschReadingLevel `integer`
  * longSentenceCount `integer`
  * passiveSentenceCount `integer`
  * sentenceCount `integer`
  * wordCount `integer`

### VeryLongSentences
* VeryLongSentences `array`
  * items `object`
    * end `integer`
    * start `integer`
    * wordCount `integer`

### WebResponseNotReady
* WebResponseNotReady `object`
  * eta `string`
  * id `integer`
  * started `string`

### WebUrl
* WebUrl
  * id **required** `integer`
  * url **required** `string`
  * analysis **required** [Analysis](#analysis)

### WebUrlDetail
* WebUrlDetail `object`
  * paragraphs `array`
    * items `object`
      * paragraphCounter `integer`
      * paragraphIndex `integer`
      * stats `object`
        * adverbs `array`
          * items [Adverbs](#adverbs)
        * hiddenVerbs `array`
          * items [HiddenVerbs](#hiddenverbs)
        * longSentences `array`
          * items [LongSentences](#longsentences)
        * passives `array`
          * items [Passives](#passives)
        * veryLongSentences `array`
          * items [VeryLongSentences](#verylongsentences)
      * text `string`
  * stats **required** [Stats](#stats)
  * title **required** `string`
  * url **required** `string`

### WebUrlHeader
* WebUrlHeader `object`
  * id **required** `integer`
  * url **required** `string`


