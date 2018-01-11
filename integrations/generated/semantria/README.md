# @datafire/semantria

Client library for Semantria

## Installation and Usage
```bash
npm install --save @datafire/semantria
```
```js
let semantria = require('@datafire/semantria').create();

semantria.deleteBlacklistItems({}).then(data => {
  console.log(data);
})
```

## Description

Semantria applies Text and Sentiment Analysis to tweets, facebook posts, surveys, reviews or enterprise content.

## Actions

### deleteBlacklistItems
This method removes certain blacklisted items by their values on Semantria side.


```js
semantria.deleteBlacklistItems({
  "Blacklisted item IDs": [],
  "content_type": ""
}, context)
```

#### Input
* input `object`
  * config_id `string`: Identifier of configuration blacklist items linked to.
  * Blacklisted item IDs **required** `array`
    * items `string`
  * content_type **required** `string`

#### Output
*Output schema unknown*

### getBlacklist
This method retrieves all backlisted items available on Semantria side.


```js
semantria.getBlacklist({
  "content_type": ""
}, context)
```

#### Input
* input `object`
  * config_id `string`: Identifier of configuration blacklist linked to.
  * content_type **required** `string`

#### Output
* output `array`
  * items [BlacklistItem_ResponseVersion](#blacklistitem_responseversion)

### addBlacklist
This method adds new unique items to the backlist on Semantria side.


```js
semantria.addBlacklist({
  "Blacklisted items": null,
  "content_type": ""
}, context)
```

#### Input
* input `object`
  * config_id `string`: Identifier of configuration blacklist linked to.
  * Blacklisted items **required** [Request_class](#request_class)
  * content_type **required** `string`

#### Output
* output `array`
  * items [BlacklistItem_ResponseVersion](#blacklistitem_responseversion)

### updateBlacklist
This method updates existing items by unique IDs in the backlist on Semantria side.


```js
semantria.updateBlacklist({
  "Blacklisted items": null,
  "content_type": ""
}, context)
```

#### Input
* input `object`
  * config_id `string`: Identifier of configuration blacklist linked to.
  * Blacklisted items **required** [Request_class](#request_class)
  * content_type **required** `string`

#### Output
* output `array`
  * items [BlacklistItem_ResponseVersion](#blacklistitem_responseversion)

### deleteCategories
This method removes certain user categories by their IDs on Semantria side.


```js
semantria.deleteCategories({
  "Category IDs": [],
  "content_type": ""
}, context)
```

#### Input
* input `object`
  * config_id `string`: Identifier of configuration user categories linked to.
  * Category IDs **required** `array`
    * items `string`
  * content_type **required** `string`

#### Output
*Output schema unknown*

### getCategories
This method retrieves list of user categories available on Semantria side.


```js
semantria.getCategories({
  "content_type": ""
}, context)
```

#### Input
* input `object`
  * config_id `string`: Identifier of configuration user categories linked to.
  * content_type **required** `string`

#### Output
* output `array`
  * items [Category_ResponseVersion](#category_responseversion)

### addCategories
This method adds user categories on Semantria side.


```js
semantria.addCategories({
  "Categories": null,
  "content_type": ""
}, context)
```

#### Input
* input `object`
  * config_id `string`: Identifier of configuration user categories linked to.
  * Categories **required** [Request_class](#request_class)
  * content_type **required** `string`

#### Output
* output `array`
  * items [Category_ResponseVersion](#category_responseversion)

### updateCategories
This method updates user categories by unique IDs on Semantria side.


```js
semantria.updateCategories({
  "Categories": null,
  "content_type": ""
}, context)
```

#### Input
* input `object`
  * config_id `string`: Identifier of configuration user categories linked to.
  * Categories **required** [Request_class](#request_class)
  * content_type **required** `string`

#### Output
* output `array`
  * items [Category_ResponseVersion](#category_responseversion)

### queueCollection
This method queues collection of documents onto the server for analysis. Queued collection of documents analyzes in common context as entire thing. If unique configuration ID provided, Semantria uses settings of that configuration during analysis, in opposite the primary configuration uses. Collection IDs are unique in scope of configuration. If the same ID appears twice, Semantria overrides existing collection with the new Data


```js
semantria.queueCollection({
  "Collection": null,
  "content_type": ""
}, context)
```

#### Input
* input `object`
  * config_id `string`: Identifier of configuration used for analysis.
  * Collection **required** [Request_class](#request_class)
  * content_type **required** `string`

#### Output
* output [Collection](#collection)

### retrieveProcessedCollections
This method retrieves analysis results for processed collections from Semantria. FAILED collections will have FAILED status in response. Semantria responds with limited amount of results per API call. If configuration ID provided, Semantria responds with the collections, which were queued using the same configuration ID, in opposite Primary configuration uses.


```js
semantria.retrieveProcessedCollections({
  "content_type": ""
}, context)
```

#### Input
* input `object`
  * config_id `string`: Identifier of configuration used for analysis.
  * content_type **required** `string`

#### Output
* output [CollectionAnalyticData](#collectionanalyticdata)

### cancelCollection
This method cancels collection analysis by unique ID on Semantria side if it is waiting for analysis in queue.


```js
semantria.cancelCollection({
  "collection_id": "",
  "content_type": ""
}, context)
```

#### Input
* input `object`
  * config_id `string`: Identifier of configuration used for analysis.
  * collection_id **required** `string`: Collection ID
  * content_type **required** `string`

#### Output
*Output schema unknown*

### receiveCollectionAnalyticData
This method retrieves analysis results for documents collection by its unique ID or the collection’s status in queue if it did not analyzed yet. Semantria guarantees delivering of all collections back to the client even if they FAILED on Semantria side due to some reason.


```js
semantria.receiveCollectionAnalyticData({
  "collection_id": "",
  "content_type": ""
}, context)
```

#### Input
* input `object`
  * config_id `string`: Identifier of configuration used for analysis.
  * collection_id **required** `string`: Collection ID
  * content_type **required** `string`

#### Output
* output [CollectionAnalyticData](#collectionanalyticdata)

### deleteConfigurations
This method removes certain configuration by unique ID on Semantria side.


```js
semantria.deleteConfigurations({
  "Configuration IDs": [],
  "content_type": ""
}, context)
```

#### Input
* input `object`
  * Configuration IDs **required** `array`
    * items `string`
  * content_type **required** `string`

#### Output
*Output schema unknown*

### getConfigurations
This method retrieves all user configurations available on Semantria side.


```js
semantria.getConfigurations({
  "content_type": ""
}, context)
```

#### Input
* input `object`
  * content_type **required** `string`

#### Output
* output `array`
  * items [Configuration_ResponseVersion](#configuration_responseversion)

### addConfigurations
This method creates configurations on Semantria side.


```js
semantria.addConfigurations({
  "Configurations": null,
  "content_type": ""
}, context)
```

#### Input
* input `object`
  * Configurations **required** [Request_class](#request_class)
  * content_type **required** `string`

#### Output
* output `array`
  * items [Configuration_ResponseVersion](#configuration_responseversion)

### updateConfigurations
This method updates specific configurations by unique IDs on Semantria side.


```js
semantria.updateConfigurations({
  "Configurations": null,
  "content_type": ""
}, context)
```

#### Input
* input `object`
  * Configurations **required** [Request_class](#request_class)
  * content_type **required** `string`

#### Output
* output `array`
  * items [Configuration_ResponseVersion](#configuration_responseversion)

### queueDocument
This method queues document onto the server for analysis. Queued document analyzes individually and will have its own set of results. If unique configuration ID provided, Semantria uses settings of that configuration during analysis, in opposite the primary configuration uses. Document IDs are unique in scope of configuration. If the same ID appears twice, Semantria overrides existing document with the new Data.


```js
semantria.queueDocument({
  "Document": null,
  "content_type": ""
}, context)
```

#### Input
* input `object`
  * config_id `string`: Identifier of configuration used for analysis.
  * Document **required** [Request_class](#request_class)
  * content_type **required** `string`

#### Output
* output [Document](#document)

### queueBatchOfDocuments
This method queues batch of documents for analysis. The rules are the same as for single document mode but here the documents ordered into the batch.


```js
semantria.queueBatchOfDocuments({
  "Batch of Documents": null,
  "content_type": ""
}, context)
```

#### Input
* input `object`
  * config_id `string`: Identifier of configuration used for analysis.
  * Batch of Documents **required** [Request_class](#request_class)
  * content_type **required** `string`

#### Output
* output [Document](#document)

### retrieveProcessedDocuments
This method retrieves analysis results for processed documents from Semantria. FAILED documents will have FAILED status in response. Semantria responds with limited amount of results per API call. If configuration ID provided, Semantria responds with the document, which were queued using the same configuration ID, in opposite Primary.


```js
semantria.retrieveProcessedDocuments({
  "content_type": ""
}, context)
```

#### Input
* input `object`
  * config_id `string`: Identifier of configuration used for analysis.
  * content_type **required** `string`

#### Output
* output [DocumentAnalyticData](#documentanalyticdata)

### cancelDocument
This method cancels document analysis by unique ID on Semantria side if it is waiting for analysis in queue.


```js
semantria.cancelDocument({
  "document_id": "",
  "content_type": ""
}, context)
```

#### Input
* input `object`
  * config_id `string`: Identifier of configuration used for analysis.
  * document_id **required** `string`: Document ID
  * content_type **required** `string`

#### Output
*Output schema unknown*

### receiveDocumentAnalyticData
This method retrieves analysis results for the single document by its unique ID or the document’s status in queue if it did not analyzed yet. Semantria guarantees delivering of all documents back to the client even if they FAILED on Semantria side due to some reason.


```js
semantria.receiveDocumentAnalyticData({
  "document_id": "",
  "content_type": ""
}, context)
```

#### Input
* input `object`
  * config_id `string`: Identifier of configuration used for analysis.
  * document_id **required** `string`: Document ID
  * content_type **required** `string`

#### Output
* output [DocumentAnalyticData](#documentanalyticdata)

### deleteEntities
This method removes certain user entities by their names on Semantria side.


```js
semantria.deleteEntities({
  "content_type": ""
}, context)
```

#### Input
* input `object`
  * content_type **required** `string`

#### Output
*Output schema unknown*

### getEntities
This method retrieves list of user entities available on Semantria side.


```js
semantria.getEntities({
  "content_type": ""
}, context)
```

#### Input
* input `object`
  * config_id `string`: Identifier of configuration user entities linked to.
  * content_type **required** `string`

#### Output
* output `array`
  * items [Entity_ResponseVersion](#entity_responseversion)

### addEntities
This method adds user entities on Semantria side.


```js
semantria.addEntities({
  "User entities": null,
  "content_type": ""
}, context)
```

#### Input
* input `object`
  * config_id `string`: Identifier of configuration user entities linked to.
  * User entities **required** [Request_class](#request_class)
  * content_type **required** `string`

#### Output
* output `array`
  * items [Entity_ResponseVersion](#entity_responseversion)

### updateEntities
This method updates user entities by unique IDs on Semantria side.


```js
semantria.updateEntities({
  "User entities": null,
  "content_type": ""
}, context)
```

#### Input
* input `object`
  * config_id `string`: Identifier of configuration user entities linked to.
  * User entities **required** [Request_class](#request_class)
  * content_type **required** `string`

#### Output
* output `array`
  * items [Entity_ResponseVersion](#entity_responseversion)

### getFeatures
This method returns list of supported features per languages supported by Semantria API. Let the users know about API capabilities.


```js
semantria.getFeatures({
  "content_type": ""
}, context)
```

#### Input
* input `object`
  * language `string`: Filter features by specified language
  * content_type **required** `string`

#### Output
* output `array`
  * items [Feature](#feature)

### deletePhrases
This method removes certain sentiment-bearing phrases by their names on Semantria side.


```js
semantria.deletePhrases({
  "Sentiment phrase IDs": [],
  "content_type": ""
}, context)
```

#### Input
* input `object`
  * config_id `string`: Identifier of configuration phrases linked to.
  * Sentiment phrase IDs **required** `array`
    * items `string`
  * content_type **required** `string`

#### Output
*Output schema unknown*

### getPhrases
This method retrieves list of sentiment-bearing phrases available on Semantria side.


```js
semantria.getPhrases({
  "content_type": ""
}, context)
```

#### Input
* input `object`
  * config_id `string`: Identifier of configuration phrases linked to.
  * content_type **required** `string`

#### Output
* output `array`
  * items [Phrase_ResponseVersion](#phrase_responseversion)

### addPhrases
This method adds sentiment-bearing phrases on Semantria side.


```js
semantria.addPhrases({
  "Sentiment phrases": null,
  "content_type": ""
}, context)
```

#### Input
* input `object`
  * config_id `string`: Identifier of configuration phrases linked to.
  * Sentiment phrases **required** [Request_class](#request_class)
  * content_type **required** `string`

#### Output
* output `array`
  * items [Phrase_ResponseVersion](#phrase_responseversion)

### updatePhrases
This method updates sentiment-bearing phrases by unique IDs on Semantria side.


```js
semantria.updatePhrases({
  "Sentiment phrases": null,
  "content_type": ""
}, context)
```

#### Input
* input `object`
  * config_id `string`: Identifier of configuration phrases linked to.
  * Sentiment phrases **required** [Request_class](#request_class)
  * content_type **required** `string`

#### Output
* output `array`
  * items [Phrase_ResponseVersion](#phrase_responseversion)

### deleteQueries
This method removes certain queries by their IDs on Semantria side.


```js
semantria.deleteQueries({
  "Query IDs": [],
  "content_type": ""
}, context)
```

#### Input
* input `object`
  * config_id `string`: Identifier of configuration queries linked to.
  * Query IDs **required** `array`
    * items `string`
  * content_type **required** `string`

#### Output
*Output schema unknown*

### getQueries
This method retrieves list of queries available on Semantria side.


```js
semantria.getQueries({
  "content_type": ""
}, context)
```

#### Input
* input `object`
  * config_id `string`: Identifier of configuration queries linked to.
  * content_type **required** `string`

#### Output
* output `array`
  * items [Query_ResponseVersion](#query_responseversion)

### addQueries
This method adds queries on Semantria side.


```js
semantria.addQueries({
  "Queries": null,
  "content_type": ""
}, context)
```

#### Input
* input `object`
  * config_id `string`: Identifier of configuration queries linked to.
  * Queries **required** [Request_class](#request_class)
  * content_type **required** `string`

#### Output
* output `array`
  * items [Query_ResponseVersion](#query_responseversion)

### updateQueries
This method updates queries by unique IDs on Semantria side.


```js
semantria.updateQueries({
  "Queries": null,
  "content_type": ""
}, context)
```

#### Input
* input `object`
  * config_id `string`: Identifier of configuration queries linked to.
  * Queries **required** [Request_class](#request_class)
  * content_type **required** `string`

#### Output
* output `array`
  * items [Query_ResponseVersion](#query_responseversion)

### getStatistic
This method retrieves overall and per configuration usage statistics for specific timeframe. Statistics ordered per available configurations. Available interval values are current <b>hour</b>, <b>day</b>, <b>week</b>, <b>month</b> and <b>year</b>.


```js
semantria.getStatistic({
  "content_type": ""
}, context)
```

#### Input
* input `object`
  * config_id `string`: Configuration identifier for usage statistics retrieving.
  * interval `string`: Hour, Day, Week, Month, Year values are supported.
  * content_type **required** `string`

#### Output
* output [Statistic](#statistic)

### getStatus
This method retrieves API status information such as the app version, current API version, supported languages and encodings, the overall service status, etc.


```js
semantria.getStatus({
  "content_type": ""
}, context)
```

#### Input
* input `object`
  * content_type **required** `string`

#### Output
* output [Status](#status)

### getSubscription
This method retrieves user's subscription details that consist of the list of allowed features, configured limits and options on Semantria side.


```js
semantria.getSubscription({
  "content_type": ""
}, context)
```

#### Input
* input `object`
  * content_type **required** `string`

#### Output
* output [Subscription](#subscription)

### deleteTaxonomy
This method removes certain taxonomy nodes by their IDs on Semantria side.


```js
semantria.deleteTaxonomy({
  "Taxonomy node IDs": [],
  "content_type": ""
}, context)
```

#### Input
* input `object`
  * config_id `string`: Identifier of configuration queries linked to.
  * Taxonomy node IDs **required** `array`
    * items `string`
  * content_type **required** `string`

#### Output
*Output schema unknown*

### getTaxonomy
This method retrieves list of taxonomy available on Semantria side.


```js
semantria.getTaxonomy({
  "content_type": ""
}, context)
```

#### Input
* input `object`
  * config_id `string`: Identifier of configuration taxonomy linked to.
  * content_type **required** `string`

#### Output
* output `array`
  * items [TaxonomyNode_ResponseVersion](#taxonomynode_responseversion)

### addTaxonomy
This method adds taxonomy nodes on Semantria side.


```js
semantria.addTaxonomy({
  "Taxonomy": null,
  "content_type": ""
}, context)
```

#### Input
* input `object`
  * config_id `string`: Identifier of configuration queries linked to.
  * Taxonomy **required** [Request_class](#request_class)
  * content_type **required** `string`

#### Output
* output `array`
  * items [TaxonomyNode_ResponseVersion](#taxonomynode_responseversion)

### updateTaxonomy
This method updates taxonomy nodes on Semantria side.


```js
semantria.updateTaxonomy({
  "Taxonomy": null,
  "content_type": ""
}, context)
```

#### Input
* input `object`
  * config_id `string`: Identifier of configuration queries linked to.
  * Taxonomy **required** [Request_class](#request_class)
  * content_type **required** `string`

#### Output
* output `array`
  * items [TaxonomyNode_ResponseVersion](#taxonomynode_responseversion)



## Definitions

### Attribute
* Attribute `object`
  * count **required** `integer`: The count of occurrences of the attribute across the documents
  * label **required** `string`: The text of the attribute
  * mentions **required** `array`: Returns genuine forms of attribute mentioned across the documents
    * items [Mention](#mention)

### AutoCategory
* AutoCategory `object`
  * categories **required** `array`: List of sub-categories of the current category if applicable
    * items [SubCategory](#subcategory)
  * sentiment_polarity **required** `string` (values: negative, positive, neutral): Verbal representation of sentiment score. Can be "negative", "positive" or "neutral"
  * sentiment_score **required** `number`: The sentiment score associated with this category
  * strength_score **required** `number`: Strength of the category matches with the document content
  * title **required** `string`: The category title, which is its label in the text
  * type **required** `string`: Type of category; can be either "node" (root level) or "leaf" (nested) value

### BlacklistItem_InsertVersion
* BlacklistItem_InsertVersion `object`
  * name **required** `string`: Blacklist item name

### BlacklistItem_ResponseVersion
* BlacklistItem_ResponseVersion `object`
  * id **required** `string`: Unique blacklist item identifier
  * modified **required** `string`: The timestamp of the latest update of the record. Creation date of update didn't occur
  * name **required** `string`: Blacklist item name

### BlacklistItem_UpdateVersion
* BlacklistItem_UpdateVersion `object`
  * id **required** `string`: Unique blacklist item identifier
  * name **required** `string`: Blacklist item name

### Category_InsertVersion
* Category_InsertVersion `object`
  * name **required** `string`: Category name
  * samples **required** `array`: Category samples
    * items `string`
  * weight **required** `number`: Category weight

### Category_ResponseVersion
* Category_ResponseVersion `object`
  * id **required** `string`: Unique category identifier
  * modified **required** `string`: The timestamp of the latest update of the record. Creation date of update didn't occur
  * name **required** `string`: Category name
  * samples **required** `array`: Category samples
    * items `string`
  * weight **required** `number`: Category weight

### Category_UpdateVersion
* Category_UpdateVersion `object`
  * id **required** `string`: Unique category identifier
  * name **required** `string`: Category name
  * samples **required** `array`: Category samples
    * items `string`
  * weight **required** `number`: Category weight

### Collection
* Collection `object`
  * documents **required** `array`: List of documents text that need to be analyzed by the service
    * items `string`
  * id **required** `string`: Up to 32 symbols unique identifier of document assigned and tracked by client
  * job_id **required** `string`: Specific marker of incoming job that can be used then for collections retrieving
  * metadata **required** [JSON](#json)
  * tag **required** `string`: Any text of up to 50 characters used like marker

### CollectionAnalyticData
* CollectionAnalyticData `object`
  * config_id **required** `string`: Unique configuration identifier. Usually 36 alphanumeric characters
  * docs_count **required** `integer`: Count of the documents the collection consist of
  * entities **required** `array`: Returns the named entities and user defined entities from the text
    * items [Entity](#entity)
  * facets **required** `array`: Returns the facets extracted across all documents in the collection
    * items [Facet](#facet)
  * id **required** `string`: Unique collection identifier. Can be up to 36 alphanumeric characters
  * job_id **required** `string`: Specific marker of a job collection belongs to, can be used for collections ordering on client side.
  * metadata **required** [JSON](#json)
  * status **required** `string` (values: queued, processed, failed): Status of the collection
  * tag **required** `string`: Any text of up to 50 characters used like marker
  * taxonomy **required** `array`: Returns the taxonomy determined for the text
    * items [Topic](#topic)
  * themes **required** `array`: Returns themes across the documents
    * items [Theme](#theme)
  * topics **required** `array`: Returns the concept and query defined topics determined for the text
    * items [Topic](#topic)

### ConfigurationCollectionSection
* ConfigurationCollectionSection `object`
  * attributes **required** `boolean`: Defines whether attributes for facets will be reported for the collection. Default: true
  * concept_topics **required** `boolean`: Defines whether user_categories will be reported for the collection. Default: false
  * facets **required** `boolean`: Defines whether facets will be reported for the collection. Default: true
  * mentions **required** `boolean`: Defines whether mentions for themes, user/named entities, facets and attributes will be reported for the collection. Default: false
  * named_entities **required** `boolean`: Defines whether named entities will be reported for the collection. Default: true
  * query_topics **required** `boolean`: Defines whether queries will be reported for the collection. Default: true
  * themes **required** `boolean`: Defines whether themes will be reported for the collection. Default: true
  * user_entities **required** `boolean`: Defines whether user entities will be reported for the collection. Default: true

### ConfigurationDocumentSection
* ConfigurationDocumentSection `object`
  * auto_categories **required** `boolean`: Defines whether auto-categories will be reported for the document. Default: true
  * concept_topics **required** `boolean`: Defines whether user categories will be reported for the document. Default: false
  * detect_language **required** `boolean`: Switches on language detection feature. Default: true
  * intentions **required** `boolean`: Switches on intentions detection feature. Default: false
  * mentions **required** `boolean`: Defines whether mentions for themes and user/named entities will be reported for the document. Default: false
  * model_sentiment **required** `boolean`: Switches on/off model-based sentiment feature. Default: false
  * named_entities **required** `boolean`: Defines whether named entities will be reported for the document. Default: true
  * opinions **required** `boolean`: Defines whether user/named entity opinions will be reported for the document. Default: false
  * pos_types **required** `string` (values: All, Noun, Verb, Adjective, Determiner, Misc, Twitter, Chinese): Defines parts-of-speech which will be responded by the server
  * query_topics **required** `boolean`: Defines whether queries will be reported for the document. Default: true
  * relations **required** `boolean`: Defines whether user/named entity relations will be reported for the document. Default: false
  * sentiment_phrases **required** `boolean`: Defines whether sentiment-bearing phrases will be reported for the document. Default: true
  * summary_size **required** `integer`: Limits the number of sentences for the document summary feature.  Default: 3
  * themes **required** `boolean`: Defines whether document and user/named entity themes will be reported for the document. Default: false
  * user_entities **required** `boolean`: Defines whether user entities will be reported for the document. Default: true

### Configuration_InsertVersion
* Configuration_InsertVersion `object`
  * alphanumeric_threshold **required** `integer`: Defines the threshold of alphanumeric characters needed in the text in percent. Default: 80
  * auto_response **required** `boolean`: Defines whether or not the service should respond with processed results automatically. Default: false
  * callback **required** `string`: Defines a callback URL for automatic data responding
  * collection **required** [ConfigurationCollectionSection](#configurationcollectionsection)
  * concept_topics_threshold **required** `number`: Defines concept topics detection threshold. Default: 0.45
  * document **required** [ConfigurationDocumentSection](#configurationdocumentsection)
  * entities_threshold **required** `integer`: Defines low threshold for evidence score of named and user entities to be reported in the output. Default: 55
  * is_primary **required** `boolean`: Identifies whether the current configuration is primary or not. Default: false
  * language **required** `string`: Defines target language that will be used for task processing. Default: English
  * name **required** `string`: Configuration name
  * one_sentence_mode **required** `boolean`: Defines whether or not service should use one sentence mode with less accurate grammar. Default: false
  * process_html **required** `boolean`: Defines whether or not the service should clean up HTML tags before processing. Default: false

### Configuration_ResponseVersion
* Configuration_ResponseVersion `object`
  * alphanumeric_threshold **required** `integer`: Defines the threshold for alphanumeric characters in the text in percent. Default: 80
  * auto_response **required** `boolean`: Defines whether or not the service should respond with processed results automatically. Default: false
  * callback **required** `string`: Defines a callback URL for automatic data responding
  * collection **required** [ConfigurationCollectionSection](#configurationcollectionsection)
  * concept_topics_threshold **required** `number`: Defines concept topics detection threshold. Default: 0.45
  * document **required** [ConfigurationDocumentSection](#configurationdocumentsection)
  * entities_threshold **required** `integer`: Defines low threshold for evidence score of named and user entities to be reported in the output. Default: 55
  * id **required** `string`: Unique configuration identifier
  * is_primary **required** `boolean`: Identifies whether the current configuration is primary or not. Default: false
  * language **required** `string`: Defines target language that will be used for task processing. Default: English
  * modified **required** `string`: The timestamp of the latest update of the record. Creation date of update didn't occur
  * name **required** `string`: Configuration name
  * one_sentence_mode **required** `boolean`: Defines whether or not service should use one sentence mode with less accurate grammar. Default: false
  * process_html **required** `boolean`: Defines whether or not the service should clean up HTML tags before processing. Default: false
  * template **required** `string`: Unique identifier of template configuration if copy operation is performing
  * version **required** `string`: Version of the vertical pack, for versioning purposes

### Configuration_UpdateVersion
* Configuration_UpdateVersion `object`
  * alphanumeric_threshold **required** `integer`: Defines the threshold of alphanumeric characters needed in the text in percent. Default: 80
  * auto_response **required** `boolean`: Defines whether or not the service should respond with processed results automatically. Default: false
  * callback **required** `string`: Defines a callback URL for automatic data responding
  * collection **required** [ConfigurationCollectionSection](#configurationcollectionsection)
  * concept_topics_threshold **required** `number`: Defines concept topics detection threshold. Default: 0.45
  * document **required** [ConfigurationDocumentSection](#configurationdocumentsection)
  * entities_threshold **required** `integer`: Defines low threshold for evidence score of named and user entities to be reported in the output. Default: 55
  * id **required** `string`: Unique configuration identifier
  * is_primary **required** `boolean`: Identifies whether the current configuration is primary or not. Default: false
  * language **required** `string`: Defines target language that will be used for task processing. Default: English
  * name **required** `string`: Configuration name
  * one_sentence_mode **required** `boolean`: Defines whether or not service should use one sentence mode with less accurate grammar. Default: false
  * process_html **required** `boolean`: Defines whether or not the service should clean up HTML tags before processing. Default: false

### Details
* Details `object`
  * is_imperative **required** `boolean`: Represents whether sentence (group of words) is imperative or not
  * is_polar **required** `boolean`: Represents whether or not sentence content contains sentiment polarity
  * words **required** `array`: Returns list of words grouped by the parent sentence
    * items [Word](#word)

### Document
* Document `object`
  * id **required** `string`: Up to 32 symbols unique identifier of document assigned and tracked by client.
  * job_id **required** `string`: Specific marker of incoming job that can be used then for documents retrieving
  * metadata **required** [JSON](#json)
  * tag **required** `string`: Any text of up to 50 characters used like marker.
  * text **required** `string`: Document text that needs to be analyzed by the service.

### DocumentAnalyticData
* DocumentAnalyticData `object`
  * auto_categories **required** `array`: Auto-generated categories applicable for the document
    * items [AutoCategory](#autocategory)
  * config_id **required** `string`: Unique configuration identifier. Usually 36 alphanumeric characters
  * details **required** `array`: Returns sentences from the original document with POS tags within
    * items [Details](#details)
  * entities **required** `array`: Returns the named entities and user defined entities from the text
    * items [Entity](#entity)
  * id **required** `string`: Unique document identifier. Can be up to 36 alphanumeric characters
  * intentions **required** `array`: Returns intentions list detected by the engine
    * items [Intention](#intention)
  * job_id **required** `string`: Specific marker of a job document belongs to, can be used for documents ordering on client side
  * language **required** `string`: Determined language of source text
  * language_score **required** `number`: The percentage score of the best match of language among detected languages
  * metadata **required** [JSON](#json)
  * model_sentiment **required** [ModelSentiment](#modelsentiment)
  * opinions **required** `array`: Returns the list of opinions extracted from the source text
    * items [Opinion](#opinion)
  * phrases **required** `array`: Returns sentiment-bearing phrases of the document
    * items [Phrase](#phrase)
  * relations **required** `array`: Returns relations which represent a connection between one or more Entity objects
    * items [Relation](#relation)
  * sentiment_polarity **required** `string` (values: negative, positive, neutral): Verbal representation of sentiment score. Can be "negative", "positive" or "neutral"
  * sentiment_score **required** `number`: A sentiment analysis of the document text
  * source_text **required** `string`: Original source text passed by client for this document
  * status **required** `string` (values: queued, processed, failed): Status of the document
  * summary **required** `string`: A summary of the document text
  * taxonomy **required** `array`: Returns the taxonomy determined for the text
    * items [Topic](#topic)
  * themes **required** `array`: Returns themes of the document
    * items [Theme](#theme)
  * topics **required** `array`: Returns the concept and query defined topics determined for the text
    * items [Topic](#topic)

### Entity
* Entity `object`
  * count **required** `integer`: The count of occurrences of the entity across the documents
  * entity_type **required** `string`: Type of the entity (Company, Person, Place, Product, etc.)
  * label **required** `string`: Descriptive label for the entity, if applicable
  * mentions **required** `array`: Returns the genuine forms of entity mentioned across the documents
    * items [Mention](#mention)
  * negative_count **required** `integer`: The count of negative occurrences of the entity across the documents
  * neutral_count **required** `integer`: The count of neutral occurrences of the entity across the documents
  * positive_count **required** `integer`: The count of positive occurrences of the entity across the documents
  * title **required** `string`: Normalized form of the entity. It is the normalized entity title
  * type **required** `string` (values: named, user): Type of the entity; can be either “named” or “user” (reserved for future usage)

### Entity_InsertVersion
* Entity_InsertVersion `object`
  * label **required** `string`: Descriptive label for the entity, e.g. Wikipedia URL
  * name **required** `string`: Entity name
  * normalized **required** `string`: Normalized form of the entity. Will replace entity name in the output
  * type **required** `string`: Type of the entity (Company, Person, any custom type)

### Entity_ResponseVersion
* Entity_ResponseVersion `object`
  * id **required** `string`: Unique user entity identifier
  * label **required** `string`: Descriptive label for the entity, e.g. Wikipedia URL
  * modified **required** `string`: The timestamp of the latest update of the record. Creation date of update didn't occur
  * name **required** `string`: Entity name
  * normalized **required** `string`: Normalized form of the entity. Will replace entity name in the output
  * type **required** `string`: Type of the entity (Company, Person, any custom type)

### Entity_UpdateVersion
* Entity_UpdateVersion `object`
  * id **required** `string`: Unique user entity identifier
  * label **required** `string`: Descriptive label for the entity, e.g. Wikipedia URL
  * name **required** `string`: Entity name
  * normalized **required** `string`: Normalized form of the entity. Will replace entity name in the output
  * type **required** `string`: Type of the entity (Company, Person, any custom type)

### Facet
* Facet `object`
  * attributes **required** `array`: Returns the attributes associated with this facet
    * items [Attribute](#attribute)
  * count **required** `integer`: The count of occurrences of the facet in the text
  * label **required** `string`: The text of the facet
  * mentions **required** `array`: Returns genuine forms of facet mentioned across the documents
    * items [Mention](#mention)
  * negative_count **required** `integer`: The count of negative occurrences of the facet across the documents
  * neutral_count **required** `integer`: The count of neutral occurrences of the facet across the documents
  * positive_count **required** `integer`: The count of positive occurrences of the facet across the documents

### Feature
* Feature `object`
  * detailed_mode **required** [FeatureDetailedModeSection](#featuredetailedmodesection)
  * discovery_mode **required** [FeatureDiscoveryModeSection](#featurediscoverymodesection)
  * html_processing **required** `boolean`: Represents whether HTML processing supported for certain language or not
  * id **required** `string`: Unique language identifier
  * language **required** `string`: Represents language following options relevant to
  * one_sentence_mode **required** `boolean`: Considers entire text as one sentence and uses optimized chunker for short content like tweets.
  * settings **required** [FeatureSettingsSection](#featuresettingssection)
  * templates **required** [FeatureTemplateSection](#featuretemplatesection)

### FeatureDetailedModeSection
* FeatureDetailedModeSection `object`
  * auto_categories **required** `boolean`: Represents whether auto-categories of entities supported for certain language or not
  * entity_opinions **required** `boolean`: Represents whether opinions of entities supported for certain language or not
  * entity_relations **required** `boolean`: Represents whether relations of entities supported for certain language or not
  * intentions **required** `boolean`: Represents whether intentions detection supported for certain language or not
  * language_detection **required** `boolean`: Represents whether language detection feature supported or not
  * mentions **required** `boolean`: Represents whether mentions for themes and entities supported for certain language or not
  * model_sentiment **required** `boolean`: Represents whether model-based sentiment supported for certain language or not
  * named_entities **required** `boolean`: Represents whether named entities extraction supported for certain language or not
  * pos_tagging **required** `boolean`: Represents whether POS tagging supported for certain language or not
  * queries **required** `boolean`: Represents whether queries of entities supported for certain language or not
  * sentiment **required** `boolean`: Represents whether sentiment detection supported for certain language or not
  * sentiment_phrases **required** `boolean`: Represents whether sentiment phrases detection supported for certain language or not
  * summarization **required** `boolean`: Represents whether summarization supported for certain language or not
  * taxonomy **required** `boolean`: Represents whether taxonomy feature supported for certain language or not
  * themes **required** `boolean`: Represents whether document and entity themes supported for certain language or not
  * user_categories **required** `boolean`: Represents whether user categories of entities supported for certain language or not
  * user_entities **required** `boolean`: Represents whether user entities extraction supported for certain language or not

### FeatureDiscoveryModeSection
* FeatureDiscoveryModeSection `object`
  * attributes **required** `boolean`: Represents whether attributes of facets supported for certain language or not
  * concept_topics **required** `boolean`: Represents whether user categories extraction supported for certain language or not
  * facets **required** `boolean`: Represents whether facets detection supported for certain language or not
  * mentions **required** `boolean`: Represents whether mentions for facets, themes and entities supported for certain language or not
  * named_entities **required** `boolean`: Represents whether named entities extraction supported for certain language or not
  * query_topics **required** `boolean`: Represents whether queries extraction supported for certain language or not
  * taxonomy **required** `boolean`: Represents whether taxonomy feature supported for certain language or not
  * themes **required** `boolean`: Represents whether themes extraction supported for certain language or not
  * user_entities **required** `boolean`: Represents whether user entities extraction supported for certain language or not

### FeatureSettingsSection
* FeatureSettingsSection `object`
  * blacklist **required** `boolean`: Represents whether blacklist feature supported for certain language or not
  * concept_topics **required** `boolean`: Represents whether user categories definition supported for certain language or not
  * query_topics **required** `boolean`: Represents whether queries definition supported for certain language or not
  * sentiment_phrases **required** `boolean`: Represents whether sentiment-bearing phrases adjustmment supported for certain language or not
  * taxonomy **required** `boolean`: Represents whether taxonomy feature supported for certain language or not
  * user_entities **required** `boolean`: Represents whether user entities definition supported for certain language or not

### FeatureTemplateSection
* FeatureTemplateSection `object`
  * config_id **required** `string`: Unique identifier of configuration associated with the vertical pack. Required for cloning
  * description **required** `string`: Verbal description of template features, belonging to domain area, etc.
  * id **required** `string`: Unique document identifier. Can be up to 36 alphanumeric characters
  * is_free **required** `boolean`: Shows whether Vertical pack is free or requires subscription
  * language **required** `string`: The language supported by the vertical pack
  * name **required** `string`: Name of the vertical pack
  * type **required** `string` (values: language-default, vertical-pack): The type of the vertical pack, can be either "vertical-pack" or "language-default"
  * version **required** `string`: Version of the vertical pack, for versioning purposes.

### Intention
* Intention `object`
  * evidence_phrase **required** `string`: The phrase which expressed the intention
  * type **required** `string`: The classification of the intention detected (buy, quit, etc.)
  * what **required** `string`: The object of the intention (if detected)
  * who **required** `string`: The author of the intention (if detected)

### JSON


### Location
* Location `object`
  * index **required** `integer`: Document index within collection where the mention appeared
  * length **required** `integer`: The length of the mention in bytes
  * offset **required** `integer`: The amount of bytes offset in the original text before the start of the mention

### Mention
* Mention `object`
  * is_negated **required** `boolean`: Indicates whether or not the mention has been negated
  * label **required** `string`: The text of the attribute mention
  * locations **required** `array`: List of coordinates of the mentions found within the collection
    * items [Location](#location)
  * negating_phrase **required** `string`: If the mention has been negated, this gives the negating phrase

### ModelSentiment
* ModelSentiment `object`
  * mixed_score **required** `number`: Mixed sentiment score associated with the document
  * model_name **required** `string`: Name of the sentiment model used for scoring
  * negative_score **required** `number`: Negative (probable negative score) sentiment score associated with the document
  * neutral_score **required** `number`: Neutral (probable neutral score) sentiment score associated with the document
  * positive_score **required** `number`: Positive (probable positive score) sentiment score associated with the document
  * sentiment_polarity **required** `string` (values: negative, positive, neutral): Verbal representation of sentiment score that matches the best on the document. Can be "negative", "positive" or "neutral"

### Opinion
* Opinion `object`
  * quotation **required** `string`: The text of the expressed opinion
  * sentiment_polarity **required** `string` (values: negative, positive, neutral): Verbal representation of sentiment score. Can be "negative", "positive" or "neutral"
  * sentiment_score **required** `number`: The sentiment score associated with the opinion
  * speaker **required** `number`: An entity title identifying the author of the opinion
  * topic **required** `string`: An entity title identifying the subject of the opinion, if applicable
  * type **required** `string` (values: named, user): Type of opinion according to extracted entity

### Phrase
* Phrase `object`
  * intensifying_phrase **required** `string`: If the phrase has been intensified, this gives the intensifying phrase
  * is_intensified **required** `boolean`: Specifies whether the phrase has been intensified or not
  * is_negated **required** `boolean`: Specifies whether the phrase has been negated or not
  * length **required** `integer`: The length of the phrase in bytes
  * negating_phrase **required** `string`: If the phrase has been negated, this gives the negating phrase
  * offset **required** `integer`: The amount of bytes offset in the original text before the start of the phrase
  * sentiment_polarity **required** `string` (values: negative, positive, neutral): Verbal representation of sentiment score. Can be "negative", "positive" or "neutral"
  * sentiment_score **required** `number`: The sentiment score associated with this phrase
  * title **required** `string`: The text of the sentiment-bearing phrase
  * type **required** `string`: Type of phrase; can be either "possible" or "detected" value

### Phrase_InsertVersion
* Phrase_InsertVersion `object`
  * name **required** `string`: Sentiment-bearing phrase name
  * weight **required** `number`: Sentiment-bearing phrase weight

### Phrase_ResponseVersion
* Phrase_ResponseVersion `object`
  * id **required** `string`: Unique sentiment-bearing phrase identifier
  * modified **required** `string`: The timestamp of the latest update of the record. Creation date of update didn't occur
  * name **required** `string`: Sentiment-bearing phrase name
  * weight **required** `number`: Sentiment-bearing phrase weight

### Phrase_UpdateVersion
* Phrase_UpdateVersion `object`
  * id **required** `string`: Unique sentiment-bearing phrase identifier
  * name **required** `string`: Sentiment-bearing phrase name
  * weight **required** `number`: Sentiment-bearing phrase weight

### Query_InsertVersion
* Query_InsertVersion `object`
  * name **required** `string`: Query name
  * query **required** `string`: Boolean query used for content categorization

### Query_ResponseVersion
* Query_ResponseVersion `object`
  * id **required** `string`: Unique query identifier
  * modified **required** `string`: The timestamp of the latest update of the record. Creation date of update didn't occur
  * name **required** `string`: Query name
  * query **required** `string`: Boolean query used for content categorization

### Query_UpdateVersion
* Query_UpdateVersion `object`
  * id **required** `string`: Unique query identifier
  * name **required** `string`: Query name
  * query **required** `string`: Boolean query used for content categorization

### Relation
* Relation `object`
  * confidence_score **required** `number`: A measure of confidence in the relationship extraction
  * entities **required** `array`: Returns entities which presents parent relationship
    * items [RelationEntity](#relationentity)
  * extra **required** `string`: Extra information that has been extracted about the relationship
  * relation_type **required** `string`: A label describing the nature of the relationship
  * type **required** `string` (values: named, user): Type of relation according to extracted entities

### RelationEntity
* RelationEntity `object`
  * entity_type **required** `string`: Type of the entity (Company, Person, Place, Product, etc.)
  * title **required** `string`: Normalized entity title based on existing entity normalization rules

### Request_class


### Statistic
* Statistic `object`
  * batches_queued **required** `integer`: Total number of queued batches of texts processed
  * calls_data **required** `integer`: Total number of data API calls made. These affect you API balance
  * calls_polling **required** `integer`: Total number of polling API calls made
  * calls_settings **required** `integer`: Total number of settings API calls made. These do not affect API balance
  * configurations **required** `array`: Includes statistics per specific configuration
    * items [StatisticConfiguration](#statisticconfiguration)
  * docs_failed **required** `integer`: Total number of documents that have failed to be processed
  * docs_queued **required** `integer`: Total number of documents that have been queued
  * docs_retrieved **required** `integer`: Total number of successfully processed documents that have been returned
  * docs_successful **required** `integer`: Total number of documents that have been successfully processed
  * latest_used_app **required** `string`: The latest application that used the API on this account
  * name **required** `string`: Semantria subscriber name. Usually email
  * total_api_calls **required** `integer`: Total number of API calls made

### StatisticConfiguration
* StatisticConfiguration `object`
  * batches_queued **required** `integer`: Number of queued batches of texts using certain configuration
  * calls_data **required** `integer`: Number of data API calls made  using certain configuration. These affect you API balance
  * calls_polling **required** `integer`: Number of polling API calls made using certain configuration. These do not affect API balance
  * calls_settings **required** `integer`: Number of settings API calls made  using certain configuration. These do not affect API balance
  * config_id **required** `string`: Unique identifier of configuration
  * docs_failed **required** `integer`: Number of documents that have failed to be processed using certain configuration
  * docs_queued **required** `integer`: Number of documents that have been queued using certain configuration
  * docs_retrieved **required** `integer`: Number of successfully processed documents which have been returned using certain configuration
  * docs_successful **required** `integer`: Number of documents that have been successfully processed using certain configuration
  * latest_used_app **required** `string`: The latest application used by certain configuration
  * name **required** `string`: The name of configuration
  * total_api_calls **required** `integer`: Number of API calls made  using certain configuration

### Status
* Status `object`
  * api_version **required** `string`: Represents current version of the exposed API
  * service_status **required** `string` (values: available, pending, sold): Represents the availability of the service
  * service_version **required** `string`: Represents current version of the Semantria service
  * supported_compression **required** `string`: Exposes supported compression algorithms. Currently only gzip and deflate are supported
  * supported_encoding **required** `string`: Exposes supported content encoding. Currently only UTF-8 is supported
  * supported_languages **required** `array`: Exposes list of supported languages
    * items `string`

### SubCategory
* SubCategory `object`
  * strength_score **required** `number`: Strength of the category matches with the document content
  * title **required** `string`: The category title, which is its label in the text
  * type **required** `string`: Type of category; can be either "node" (root level) or "leaf" (nested) value

### Subscription
* Subscription `object`
  * basic_settings **required** [SubscriptionBasicSection](#subscriptionbasicsection)
  * billing_settings **required** [SubscriptionBillingSection](#subscriptionbillingsection)
  * feature_settings **required** [SubscriptionFeatureSection](#subscriptionfeaturesection)
  * name **required** `string`: Semantria subscriber name. Usually email
  * status **required** `string`: Semantria subscriber status. Can be active, expired, disabled, etc

### SubscriptionBasicSection
* SubscriptionBasicSection `object`
  * auto_response_batch_limit **required** `integer`: Represents the maximum size of outgoing batch for auto-response feature
  * blacklist_limit **required** `integer`: Represents the maximum number of allowed blacklist items
  * callback_batch_limit **required** `integer`: Represents the maximum size of outgoing batch for callback data retrieving mode
  * collection_limit **required** `integer`: Represents the maximum size of collection in documents
  * concept_topic_samples_limit **required** `integer`: Represents the maximum number of allowed user category samples
  * concept_topics_limit **required** `integer`: Represents the maximum number of allowed user categories
  * configurations_limit **required** `integer`: Represents the maximum number of allowed configurations
  * document_length **required** `integer`: Represents the maximum length of the document allowed for processing
  * incoming_batch_limit **required** `integer`: Represents the maximum size of the incoming batch of documents
  * near_operator_distance **required** `integer`: Represents the maximum allowed distance that can be used with NEAR operator
  * near_operator_limit **required** `integer`: Represents the maximum number of NEAR operators that can appear in query/entity/phrase
  * polling_batch_limit **required** `integer`: Represents the maximum size of outgoing batch for polling data retrieving mode
  * queries_depth_level **required** `integer`: Represents the maximum depth level allowed for nested and referenced queries
  * query_topics_limit **required** `integer`: Represents the maximum number of allowed queries
  * return_source_text **required** `boolean`: Indicates whether responding of source text along with the analysis data is allowed or not
  * sentiment_phrases_limit **required** `integer`: Represents the maximum number of allowed sentiment-bearing phrases
  * summary_size_limit **required** `integer`: Represent the maximum number allowed as output limit of configuration
  * taxonomy_depth_limit **required** `integer`: Represents the maximum depth level allowed for nested taxonomy nodes
  * taxonomy_limit **required** `integer`: Represents the number of nodes allowed for entire taxonomy tree
  * taxonomy_topics_limit **required** `integer`: Represents the maximum allowed number of topics associated with the certain taxonomy node
  * user_entities_limit **required** `integer`: Represents the maximum number of allowed user entities

### SubscriptionBillingSection
* SubscriptionBillingSection `object`
  * app_seats_allocated **required** `integer`: Number of allocated application cells permitted to work with the API
  * app_seats_permitted **required** `integer`: Number of permitted application to work with the same API account
  * data_calls_balance **required** `integer`: Represents actual value of remained data API calls
  * data_calls_limit **required** `integer`: Represents the limit of data API calls per "data_calls_limit_interval" value
  * data_calls_limit_interval **required** `integer`: Represents an interval for the "data_calls_limit" value of current subscription
  * docs_balance **required** `integer`: Current transaction balance. Applicable for pay-as-you-go subscriptions only
  * expiration_date **required** `string`: Expiration date of current subscription. Defined as a Unix time stamp
  * job_ids_allocated **required** `integer`: Number of job Ids currently allocated on the server by the certain subscription
  * job_ids_permitted **required** `integer`: Number of job Ids allowed for the certain subscription
  * polling_calls_balance **required** `integer`: Represents actual value of remained polling API calls
  * polling_calls_limit **required** `integer`: Represents the limit of polling API calls per "polling_calls_limit_interval" value
  * polling_calls_limit_interval **required** `integer`: Represents an interval for the "polling_calls_limit" value of current subscription
  * settings_calls_balance **required** `integer`: Represents actual value of remained settings API calls
  * settings_calls_limit **required** `integer`: Represents the limit of settings API calls per "settings_calls_limit_interval" value
  * settings_calls_limit_interval **required** `integer`: Represents an interval for the "settings_calls_limit" value of current subscription

### SubscriptionFeatureSection
* SubscriptionFeatureSection `object`
  * collection **required** [SubscriptionFeatureSectionCollection](#subscriptionfeaturesectioncollection)
  * document **required** [SubscriptionFeatureSectionDocument](#subscriptionfeaturesectiondocument)
  * html_processing **required** `boolean`: Identifies whether HTML processing feature is supported or not
  * supported_languages **required** `string`: Lists all languages which are allowed for current subscription
  * templates **required** [SubscriptionFeatureSectionTemplate](#subscriptionfeaturesectiontemplate)

### SubscriptionFeatureSectionCollection
* SubscriptionFeatureSectionCollection `object`
  * concept_topics **required** `boolean`: Indicates whether concept topics are allowed or not
  * facets **required** `boolean`: Indicates whether facets extraction feature is allowed or not
  * mentions **required** `boolean`: Indicates whether mentions are allowed for facets and attributes or not
  * named_entities **required** `boolean`: Indicates whether named entities feature is allowed or not
  * query_topics **required** `boolean`: Indicates whether query defined topics are allowed or not
  * themes **required** `boolean`: Indicates whether themes extraction feature is allowed or not
  * user_entities **required** `boolean`: Indicates whether user entities feature is allowed or not

### SubscriptionFeatureSectionDocument
* SubscriptionFeatureSectionDocument `object`
  * auto_categories **required** `boolean`: Indicates whether auto categories feature is allowed or not
  * concept_topics **required** `boolean`: Indicates whether concept topics are allowed or not
  * intentions **required** `boolean`: Indicates whether intentions feature is allowed or not.
  * language_detection **required** `boolean`: Indicates whether language detection feature is allowed or not
  * mentions **required** `boolean`: Indicates whether mentions for entities and themes are allowed or not
  * model_sentiment **required** `boolean`: Indicates whether model-based sentiment feature is allowed or not
  * named_entities **required** `boolean`: Indicates whether named entities feature is allowed or not
  * opinions **required** `boolean`: Indicates whether opinions feature is allowed or not
  * pos_tagging **required** `boolean`: Indicates whether part of speech tagging feature is allowed or not
  * query_topics **required** `boolean`: Indicates whether query defined topics are allowed or not
  * relations **required** `boolean`: Indicates whether relations feature for user and named entities is allowed or not
  * sentiment_phrases **required** `boolean`: Indicates whether sentiment-bearing phrases output is allowed or not
  * summary **required** `boolean`: Indicates whether summarization feature is allowed or not
  * themes **required** `boolean`: Indicates whether document and entity themes feature is allowed or not
  * user_entities **required** `boolean`: Indicates whether user entities feature is allowed or not

### SubscriptionFeatureSectionTemplate
* SubscriptionFeatureSectionTemplate `object`
  * config_id **required** `string`: Unique identifier of configuration associated with the vertical pack. Required for cloning
  * description **required** `string`: Verbal description of template features, belonging to domain area, etc.
  * id **required** `string`: Unique document identifier. Can be up to 36 alphanumeric characters
  * is_free **required** `boolean`: Shows whether Vertical pack is free or requires subscription
  * language **required** `string`: The language supported by the vertical pack
  * name **required** `string`: Name of the vertical pack
  * type **required** `string` (values: language-default, vertical-pack): The type of the vertical pack, can be either "vertical-pack" or "language-default"
  * version **required** `string`: Version of the vertical pack, for versioning purposes.

### TaxonomyNode


### TaxonomyNode_InsertVersion
* TaxonomyNode_InsertVersion `object`
  * enforce_parent_matching `boolean`: Enforces parent nodes to match on a content if the current node matches
  * name **required** `string`: Taxonomy name
  * nodes `array`: The list of sub-nodes associated with the current taxonomy node
    * items [TaxonomyNode](#taxonomynode)
  * topics `array`: The list of the topics associated with the current taxonomy node
    * items [TaxonomyTopic](#taxonomytopic)

### TaxonomyNode_ResponseVersion
* TaxonomyNode_ResponseVersion `object`
  * enforce_parent_matching `boolean`: Enforces parent nodes to match on a content if the current node matches
  * id **required** `string`: Unique taxonomy node identifier
  * modified **required** `string`: The timestamp of the latest update of the record. Creation date of update didn't occur
  * name **required** `string`: Taxonomy name
  * nodes `array`: The list of sub-nodes associated with the current taxonomy node
    * items [TaxonomyNode](#taxonomynode)
  * topics `array`: The list of the topics associated with the current taxonomy node
    * items [TaxonomyTopic](#taxonomytopic)

### TaxonomyNode_UpdateVersion
* TaxonomyNode_UpdateVersion `object`
  * enforce_parent_matching `boolean`: Enforces parent nodes to match on a content if the current node matches
  * id **required** `string`: Unique taxonomy node identifier
  * name **required** `string`: Taxonomy name
  * nodes `array`: The list of sub-nodes associated with the current taxonomy node
    * items [TaxonomyNode](#taxonomynode)
  * topics `array`: The list of the topics associated with the current taxonomy node
    * items [TaxonomyTopic](#taxonomytopic)

### TaxonomyTopic
* TaxonomyTopic `object`
  * id `string`: Unique taxonomy topic identifier
  * type **required** `string`: Type of the topic (category or query) associated with the certain taxonomy node

### Theme
* Theme `object`
  * mentions **required** `array`: Returns the concept and query defined topics determined for the text
    * items [Mention](#mention)
  * normalized **required** `string`: The normalized form of the theme
  * phrases_count **required** `integer`: Count of sentiment-bearing phrases was used in calculating theme's sentiment
  * sentiment_polarity **required** `string` (values: negative, positive, neutral): Verbal representation of sentiment score. Can be "negative", "positive" or "neutral"
  * sentiment_score **required** `number`: Sentiment score for theme’s sentences across the documents
  * stemmed **required** `string`: The stemmed form of the theme
  * themes_count **required** `integer`: Count of themes across the documents that got rolled into this one
  * title **required** `string`: The text of the theme across the documents

### Topic
* Topic `object`
  * hitcount **required** `integer`: The number of documents within the collection that match the topic
  * id **required** `string`: Unique topic identifier
  * sentiment_polarity **required** `string` (values: negative, positive, neutral): Verbal representation of sentiment score. Can be "negative", "positive" or "neutral"
  * sentiment_score **required** `number`: The sentiment score for documents content associated with the topic
  * title **required** `string`: The topic title, which is its label in the text
  * type **required** `string` (values: concept, query): Type of the topic; can be either "concept" or "query"

### Word
* Word `object`
  * is_negated **required** `boolean`: A flag indicating if the token is or is part of a sentiment inverting construction
  * sentiment_score **required** `number`: The sentiment score associated with the word
  * stemmed **required** `string`: The stemmed form of the word
  * tag **required** `string`: POS marker of the word
  * title **required** `string`: The original word representation in text
  * type **required** `string`: Verbal representation of part of speech in addition to certain tag


