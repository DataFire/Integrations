# @datafire/nytimes_article_search

Client library for Article Search

## Installation and Usage
```bash
npm install --save @datafire/nytimes_article_search
```
```js
let nytimes_article_search = require('@datafire/nytimes_article_search').create({
  apikey: ""
});

nytimes_article_search.articlesearch.json.get({}).then(data => {
  console.log(data);
})
```

## Description

With the Article Search API, you can search New York Times articles from Sept. 18, 1851 to today, retrieving headlines, abstracts, lead paragraphs, links to associated multimedia and other article metadata.  

 Note: In URI examples and field names, italics indicate placeholders for variables or values. Brackets [ ] indicate optional items. Parentheses ( ) are not a convention — when URIs include parentheses, interpret them literally.

## Actions

### articlesearch.json.get
Article Search requests use the following URI structure:



```js
nytimes_article_search.articlesearch.json.get({}, context)
```

#### Input
* input `object`
  * q `string`: Search query term. Search is performed on the article body, headline and byline.
  * fq `string`: "Filtered search query using standard Lucene syntax. 
  * begin_date `string`: "Format: YYYYMMDD 
  * end_date `string`: "Format: YYYYMMDD 
  * sort `string` (values: newest, oldest): "By default, search results are sorted by their relevance to the query term (q). Use the sort parameter to sort by pub_date."
  * fl `string`: "Comma-delimited list of fields (no limit)
  * hl `boolean`: Enables highlighting in search results. When set to true, the query term (q) is highlighted in the headline and lead_paragraph fields.
  * page `integer`: "The value of page corresponds to a set of 10 results (it does not indicate the starting number of the result set). For example, page=0 corresponds to records 0-9. To return records 10-19, set page to 1, not 10."
  * facet_field `string`: Comma-delimited list of facets
  * facet_filter `boolean`: When set to true, facet counts will respect any applied filters (fq, date range, etc.) in addition to the main query term. To filter facet counts, specifying at least one facet_field is required. To learn more about using facets, see Using Facets.

#### Output
* output `object`
  * response `object`
    * docs `array`
      * items [Doc](#doc)
    * meta `object`
      * hits `integer`
      * offset `integer`
      * time `integer`



## Definitions

### Doc
* Doc `object`
  * _id `string`
  * abstract `string`
  * blog `array`

  * byline `object`
    * organization `string`
    * original `string`
    * person `array`

  * document_type `string`
  * headline `object`
    * kicker `string`
    * main `string`
  * keywords `object`
    * name `string`
    * rank `string`
    * value `string`
  * lead_paragraph `string`
  * multimedia `array`
    * items `object`
      * caption `string`
      * copyright `string`
      * format `string`
      * height `integer`
      * subtype `string`
      * type `string`
      * url `string`
      * width `integer`
  * news_desK `string`
  * print_page `string`
  * pub_date `string`
  * section_name `string`
  * slideshow_credits `string`
  * snippet `string`
  * source `string`
  * subsection_name `string`
  * type_of_material `string`
  * web_url `string`
  * word_count `string`


