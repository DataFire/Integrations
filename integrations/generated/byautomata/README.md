# @datafire/byautomata

Client library for Automata Market Intelligence API

## Installation and Usage
```bash
npm install --save @datafire/byautomata
```
```js
let byautomata = require('@datafire/byautomata').create({
  api_key: ""
});

.then(data => {
  console.log(data);
});
```

## Description

This document provides the documentation for the Market Intelligence API by Automata. Get your API Key at https://apis.byautomata.io and check out our <a href='https://www.getpostman.com/collections/d182a1c78d4491d55e19'>Postman Collection</a>.<br><br>The root API endpoint is https://api.byautomata.io. Please refer to the code samples for examples of how to call the Market Intelligence API. The ContentPro endpoints (/contentpro-search and /contentpro-similar-text) are not included in the standard Market Intelligence API plans. Please contact support@byautomata.io for access.

## Actions

### contentpro_search.get
Send search terms to receive the most relevant articles and companies.


```js
byautomata.contentpro_search.get({
  "terms": ""
}, context)
```

#### Input
* input `object`
  * terms **required** `string`: We provide information about related companies and articles based on the search terms you provide. Separate search terms with commas. Ex. https://api.byautomata.io/contentpro-search?terms=cloud+computing,enterprise,security

#### Output
* output `object`
  * calls_per_month `string`
  * count_remaining `string`
  * data `array`
    * items `object`
      * article [Article](#article)
      * company [ContentProCompany](#contentprocompany)
      * snippets [ContentProSnippets](#contentprosnippets)
  * renewal_date `string`

### contentpro_similar_text.post
The /contentpro-similar-text endpoint accepts and arbitrary piece of text and returns similar articles and blogs written by companies.


```js
byautomata.contentpro_similar_text.post({
  "body": {
    "text": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * text **required** `string`: Any piece of text

#### Output
* output `object`
  * calls_per_month `string`
  * count_remaining `string`
  * data `array`
    * items `object`
      * article [Article](#article)
      * company [ContentProCompany](#contentprocompany)
      * snippets [ContentProSnippets](#contentprosnippets)
  * renewal_date `string`

### search.get
Send search terms to receive the most relevant companies along with text snippets.


```js
byautomata.search.get({
  "terms": ""
}, context)
```

#### Input
* input `object`
  * terms **required** `string`: We provide information about related companies based on the search terms you provide. Separate search terms with commas. Ex. https://api.byautomata.io/search?link=cloud+computing,enterprise,security
  * page `string`: Page number of search results. Ex. https://api.byautomata.io/search?page=0&link=cloud+computing,enterprise,security

#### Output
* output `object`
  * calls_per_month `string`
  * companies `array`
    * items [SimilarCompanySearch](#similarcompanysearch)
  * count_remaining `string`
  * renewal_date `string`

### similar.get
Send a company website to receive a list of companies related to them.


```js
byautomata.similar.get({
  "link": ""
}, context)
```

#### Input
* input `object`
  * link **required** `string`: We'll provide information about related companies based on the site you provide. If a LinkedIn page is sent, we will try to identify the company related to the page. Ex. https://api.byautomata.io/similar?link=ibm.com
  * page `string`: Page number of search results. Ex. https://api.byautomata.io/similar?link=ibm.com&page=1

#### Output
* output `object`
  * calls_per_month `string`
  * companies `array`
    * items [SimilarCompany](#similarcompany)
  * count_remaining `string`
  * input_company [InputCompany](#inputcompany)
  * renewal_date `string`



## Definitions

### Article
* Article `object`
  * link `string`
  * pubdate `string`
  * title `string`

### ContentProCompany
* ContentProCompany `object`
  * companyName `string`
  * description `string`
  * employee `string`
  * industry `string`
  * linkedin `string`
  * twitter `string`
  * website `string`

### ContentProSnippets
* ContentProSnippets `object`
  * description `array`
    * items `string`
  * text `array`
    * items `string`
  * title `array`
    * items `string`

### InputCompany
* InputCompany `object`
  * companyName `string`
  * country `string`
  * employee `string`
  * industry `string`
  * linkedin `string`
  * twitter `string`
  * website `string`

### SimilarCompany
* SimilarCompany `object`
  * companyName `string`
  * description `string`
  * employee `string`
  * industry `string`
  * linkedin `string`
  * title `string`
  * twitter `string`
  * website `string`

### SimilarCompanySearch
* SimilarCompanySearch `object`
  * companyName `string`
  * description `string`
  * employee `string`
  * industry `string`
  * linkedin `string`
  * snippets `array`
    * items [Snippet](#snippet)
  * title `string`
  * twitter `string`
  * website `string`

### Snippet
* Snippet `object`
  * description `array`
    * items `string`
  * text `array`
    * items `string`
  * title `array`
    * items `string`


