# @datafire/nytimes_semantic_api

Client library for Semantic API

## Installation and Usage
```bash
npm install --save @datafire/nytimes_semantic_api
```
```js
let nytimes_semantic_api = require('@datafire/nytimes_semantic_api').create({
  apikey: ""
});

.then(data => {
  console.log(data);
});
```

## Description

The Semantic API complements the Articles API. With the Semantic API, you get access to the long list of people, places, organizations and other locations, entities and descriptors that make up the controlled vocabulary used as metadata by The New York Times (sometimes referred to as Times Tags and used for Times Topics pages).

The Semantic API uses concepts which are, by definition, terms in The New York Times controlled vocabulary. Like the way facets are used in the Articles API, concepts are a good way to uncover articles of interest in The New York Times archive, and at the same time, limit the scope and number of those articles. The Semantic API maps to external semantic data resources, in a fashion consistent with the idea of linked data. The Semantic API also provides combination and relationship information to other, similar concepts in The New York Times controlled vocabulary.


## Actions

### name.concept_type.specific_concept.json.get



```js
nytimes_semantic_api.name.concept_type.specific_concept.json.get({
  "concept-type": "",
  "specific-concept": "",
  "query": ""
}, context)
```

#### Input
* input `object`
  * concept-type **required** `string` (values: nytd_geo, nytd_per, nytd_org, nytd_des): The type of the concept, used for Constructing a Semantic API Request by Concept Type and Specific Concept Name. The parameter is defined as a name-value pair, as in "concept_type=[nytd_geo|nytd_per|nytd_org|nytd_des]".
  * specific-concept **required** `string`: The name of the concept, used for Constructing a Semantic API Request by Concept Type and Specific Concept Name. The parameter is defined in the URI path, as the element immediately preceding ".json" like with "Baseball.json".
  * fields `string` (values: all, pages, ticker_symbol, links, taxonomy, combinations, geocodes, article_list, scope_notes, search_api_query): "all" or comma-separated list of specific optional fields: pages, ticker_symbol, links, taxonomy, combinations, geocodes, article_list, scope_notes, search_api_query
  * query **required** `string`: Precedes the search term string. Used in a Search Query. Except for &lt;specific_concept_name&gt;, Search Query will take the required parameters listed above (&lt;concept_type&gt;, &lt;concept_uri&gt;, &lt;article_uri&gt;) as an optional_parameter in addition to the query=&lt;query_term&gt;.

#### Output
* output `object`
  * copyright `string`
  * num_results `integer`
  * results `array`
    * items [Concept](#concept)
  * status `string`

### search.json.get



```js
nytimes_semantic_api.search.json.get({
  "query": ""
}, context)
```

#### Input
* input `object`
  * query **required** `string`: Precedes the search term string. Used in a Search Query. Except for &lt;specific_concept_name&gt;, Search Query will take the required parameters listed above (&lt;concept_type&gt;, &lt;concept_uri&gt;, &lt;article_uri&gt;) as an optional_parameter in addition to the query=&lt;query_term&gt;.
  * offset `integer`: Integer value for the index count from the first concept to the last concept, sorted alphabetically. Used in a Search Query. A Search Query will return up to 10 concepts in its results.
  * fields `string` (values: all, pages, ticker_symbol, links, taxonomy, combinations, geocodes, article_list, scope_notes, search_api_query): "all" or comma-separated list of specific optional fields: pages, ticker_symbol, links, taxonomy, combinations, geocodes, article_list, scope_notes, search_api_query

#### Output
* output `object`
  * copyright `string`
  * num_results `integer`
  * results `array`
    * items [ConceptRelation](#conceptrelation)
  * status `string`



## Definitions

### Concept
* Concept `object`
  * ancestors `array`
    * items [ConceptRelation](#conceptrelation)
  * article_list `object`
    * results `array`
      * items `object`
        * body `string`
        * byline `string`
        * concepts `object`
          * nytd_des `array`
          * nytd_org `array`
          * nytd_per `array`
        * date `string`
        * document_type `string`
        * title `string`
        * type_of_material `string`
        * url `string`
    * total `integer`
  * combinations `array`
    * items `object`
      * combination_note `string`
      * combination_source_concept_id `integer`
      * combination_source_concept_name `string`
      * combination_source_concept_type `string`
      * combination_target_concept_id `integer`
      * combination_target_concept_name `string`
      * combination_target_concept_type `string`
  * concept_created `string`
  * concept_id `integer`
  * concept_name `string`
  * concept_status `string`
  * concept_type `string`
  * concept_updated `string`
  * descendants `array`
    * items [ConceptRelation](#conceptrelation)
  * is_times_tag `integer`
  * links `array`
    * items `object`
      * concept_id `integer`
      * concept_name `string`
      * concept_status `string`
      * concept_type `string`
      * is_times_tag `integer`
      * link `string`
      * link_id `integer`
      * link_type `string`
      * mapping_type `string`
      * relation `string`
  * scope_notes `array`
    * items `object`
      * scope_note `string`
      * scope_note_name `string`
      * scope_note_type `string`
  * search_api_query `string`
  * taxonomy `array`
    * items `object`
      * source_concept_id `integer`
      * source_concept_name `string`
      * source_concept_type `string`
      * source_concept_vernacular `string`
      * target_concept_id `integer`
      * target_concept_name `string`
      * target_concept_type `string`
      * target_concept_vernacular `string`
      * taxonomic_relation `string`
      * taxonomic_verification_status `string`
  * vernacular `string`

### ConceptRelation
* ConceptRelation `object`
  * concept_created `string`
  * concept_id `integer`
  * concept_name `string`
  * concept_status `string`
  * concept_type `string`
  * concept_updated `string`
  * is_times_tag `integer`
  * vernacular `string`


