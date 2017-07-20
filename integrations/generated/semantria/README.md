# @datafire/semantria

Client library for Semantria

## Installation and Usage
```bash
npm install --save datafire @datafire/semantria
```

```js
let datafire = require('datafire');
let semantria = require('@datafire/semantria').actions;
let context = new datafire.Context();

semantria.deleteBlacklistItems({}, context).then(data => {
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

#### Parameters
* config_id (string) - Identifier of configuration blacklist items linked to.
* Blacklisted item IDs (array) **required**
* content_type (string) **required**

### getBlacklist
This method retrieves all backlisted items available on Semantria side.


```js
semantria.getBlacklist({
  "content_type": ""
}, context)
```

#### Parameters
* config_id (string) - Identifier of configuration blacklist linked to.
* content_type (string) **required**

### addBlacklist
This method adds new unique items to the backlist on Semantria side.


```js
semantria.addBlacklist({
  "Blacklisted items": null,
  "content_type": ""
}, context)
```

#### Parameters
* config_id (string) - Identifier of configuration blacklist linked to.
* Blacklisted items (undefined) **required**
* content_type (string) **required**

### updateBlacklist
This method updates existing items by unique IDs in the backlist on Semantria side.


```js
semantria.updateBlacklist({
  "Blacklisted items": null,
  "content_type": ""
}, context)
```

#### Parameters
* config_id (string) - Identifier of configuration blacklist linked to.
* Blacklisted items (undefined) **required**
* content_type (string) **required**

### deleteCategories
This method removes certain user categories by their IDs on Semantria side.


```js
semantria.deleteCategories({
  "Category IDs": [],
  "content_type": ""
}, context)
```

#### Parameters
* config_id (string) - Identifier of configuration user categories linked to.
* Category IDs (array) **required**
* content_type (string) **required**

### getCategories
This method retrieves list of user categories available on Semantria side.


```js
semantria.getCategories({
  "content_type": ""
}, context)
```

#### Parameters
* config_id (string) - Identifier of configuration user categories linked to.
* content_type (string) **required**

### addCategories
This method adds user categories on Semantria side.


```js
semantria.addCategories({
  "Categories": null,
  "content_type": ""
}, context)
```

#### Parameters
* config_id (string) - Identifier of configuration user categories linked to.
* Categories (undefined) **required**
* content_type (string) **required**

### updateCategories
This method updates user categories by unique IDs on Semantria side.


```js
semantria.updateCategories({
  "Categories": null,
  "content_type": ""
}, context)
```

#### Parameters
* config_id (string) - Identifier of configuration user categories linked to.
* Categories (undefined) **required**
* content_type (string) **required**

### queueCollection
This method queues collection of documents onto the server for analysis. Queued collection of documents analyzes in common context as entire thing. If unique configuration ID provided, Semantria uses settings of that configuration during analysis, in opposite the primary configuration uses. Collection IDs are unique in scope of configuration. If the same ID appears twice, Semantria overrides existing collection with the new Data


```js
semantria.queueCollection({
  "Collection": null,
  "content_type": ""
}, context)
```

#### Parameters
* config_id (string) - Identifier of configuration used for analysis.
* Collection (undefined) **required**
* content_type (string) **required**

### retrieveProcessedCollections
This method retrieves analysis results for processed collections from Semantria. FAILED collections will have FAILED status in response. Semantria responds with limited amount of results per API call. If configuration ID provided, Semantria responds with the collections, which were queued using the same configuration ID, in opposite Primary configuration uses.


```js
semantria.retrieveProcessedCollections({
  "content_type": ""
}, context)
```

#### Parameters
* config_id (string) - Identifier of configuration used for analysis.
* content_type (string) **required**

### cancelCollection
This method cancels collection analysis by unique ID on Semantria side if it is waiting for analysis in queue.


```js
semantria.cancelCollection({
  "collection_id": "",
  "content_type": ""
}, context)
```

#### Parameters
* config_id (string) - Identifier of configuration used for analysis.
* collection_id (string) **required** - Collection ID
* content_type (string) **required**

### receiveCollectionAnalyticData
This method retrieves analysis results for documents collection by its unique ID or the collection’s status in queue if it did not analyzed yet. Semantria guarantees delivering of all collections back to the client even if they FAILED on Semantria side due to some reason.


```js
semantria.receiveCollectionAnalyticData({
  "collection_id": "",
  "content_type": ""
}, context)
```

#### Parameters
* config_id (string) - Identifier of configuration used for analysis.
* collection_id (string) **required** - Collection ID
* content_type (string) **required**

### deleteConfigurations
This method removes certain configuration by unique ID on Semantria side.


```js
semantria.deleteConfigurations({
  "Configuration IDs": [],
  "content_type": ""
}, context)
```

#### Parameters
* Configuration IDs (array) **required**
* content_type (string) **required**

### getConfigurations
This method retrieves all user configurations available on Semantria side.


```js
semantria.getConfigurations({
  "content_type": ""
}, context)
```

#### Parameters
* content_type (string) **required**

### addConfigurations
This method creates configurations on Semantria side.


```js
semantria.addConfigurations({
  "Configurations": null,
  "content_type": ""
}, context)
```

#### Parameters
* Configurations (undefined) **required**
* content_type (string) **required**

### updateConfigurations
This method updates specific configurations by unique IDs on Semantria side.


```js
semantria.updateConfigurations({
  "Configurations": null,
  "content_type": ""
}, context)
```

#### Parameters
* Configurations (undefined) **required**
* content_type (string) **required**

### queueDocument
This method queues document onto the server for analysis. Queued document analyzes individually and will have its own set of results. If unique configuration ID provided, Semantria uses settings of that configuration during analysis, in opposite the primary configuration uses. Document IDs are unique in scope of configuration. If the same ID appears twice, Semantria overrides existing document with the new Data.


```js
semantria.queueDocument({
  "Document": null,
  "content_type": ""
}, context)
```

#### Parameters
* config_id (string) - Identifier of configuration used for analysis.
* Document (undefined) **required**
* content_type (string) **required**

### queueBatchOfDocuments
This method queues batch of documents for analysis. The rules are the same as for single document mode but here the documents ordered into the batch.


```js
semantria.queueBatchOfDocuments({
  "Batch of Documents": null,
  "content_type": ""
}, context)
```

#### Parameters
* config_id (string) - Identifier of configuration used for analysis.
* Batch of Documents (undefined) **required**
* content_type (string) **required**

### retrieveProcessedDocuments
This method retrieves analysis results for processed documents from Semantria. FAILED documents will have FAILED status in response. Semantria responds with limited amount of results per API call. If configuration ID provided, Semantria responds with the document, which were queued using the same configuration ID, in opposite Primary.


```js
semantria.retrieveProcessedDocuments({
  "content_type": ""
}, context)
```

#### Parameters
* config_id (string) - Identifier of configuration used for analysis.
* content_type (string) **required**

### cancelDocument
This method cancels document analysis by unique ID on Semantria side if it is waiting for analysis in queue.


```js
semantria.cancelDocument({
  "document_id": "",
  "content_type": ""
}, context)
```

#### Parameters
* config_id (string) - Identifier of configuration used for analysis.
* document_id (string) **required** - Document ID
* content_type (string) **required**

### receiveDocumentAnalyticData
This method retrieves analysis results for the single document by its unique ID or the document’s status in queue if it did not analyzed yet. Semantria guarantees delivering of all documents back to the client even if they FAILED on Semantria side due to some reason.


```js
semantria.receiveDocumentAnalyticData({
  "document_id": "",
  "content_type": ""
}, context)
```

#### Parameters
* config_id (string) - Identifier of configuration used for analysis.
* document_id (string) **required** - Document ID
* content_type (string) **required**

### deleteEntities
This method removes certain user entities by their names on Semantria side.


```js
semantria.deleteEntities({
  "content_type": ""
}, context)
```

#### Parameters
* content_type (string) **required**

### getEntities
This method retrieves list of user entities available on Semantria side.


```js
semantria.getEntities({
  "content_type": ""
}, context)
```

#### Parameters
* config_id (string) - Identifier of configuration user entities linked to.
* content_type (string) **required**

### addEntities
This method adds user entities on Semantria side.


```js
semantria.addEntities({
  "User entities": null,
  "content_type": ""
}, context)
```

#### Parameters
* config_id (string) - Identifier of configuration user entities linked to.
* User entities (undefined) **required**
* content_type (string) **required**

### updateEntities
This method updates user entities by unique IDs on Semantria side.


```js
semantria.updateEntities({
  "User entities": null,
  "content_type": ""
}, context)
```

#### Parameters
* config_id (string) - Identifier of configuration user entities linked to.
* User entities (undefined) **required**
* content_type (string) **required**

### getFeatures
This method returns list of supported features per languages supported by Semantria API. Let the users know about API capabilities.


```js
semantria.getFeatures({
  "content_type": ""
}, context)
```

#### Parameters
* language (string) - Filter features by specified language
* content_type (string) **required**

### deletePhrases
This method removes certain sentiment-bearing phrases by their names on Semantria side.


```js
semantria.deletePhrases({
  "Sentiment phrase IDs": [],
  "content_type": ""
}, context)
```

#### Parameters
* config_id (string) - Identifier of configuration phrases linked to.
* Sentiment phrase IDs (array) **required**
* content_type (string) **required**

### getPhrases
This method retrieves list of sentiment-bearing phrases available on Semantria side.


```js
semantria.getPhrases({
  "content_type": ""
}, context)
```

#### Parameters
* config_id (string) - Identifier of configuration phrases linked to.
* content_type (string) **required**

### addPhrases
This method adds sentiment-bearing phrases on Semantria side.


```js
semantria.addPhrases({
  "Sentiment phrases": null,
  "content_type": ""
}, context)
```

#### Parameters
* config_id (string) - Identifier of configuration phrases linked to.
* Sentiment phrases (undefined) **required**
* content_type (string) **required**

### updatePhrases
This method updates sentiment-bearing phrases by unique IDs on Semantria side.


```js
semantria.updatePhrases({
  "Sentiment phrases": null,
  "content_type": ""
}, context)
```

#### Parameters
* config_id (string) - Identifier of configuration phrases linked to.
* Sentiment phrases (undefined) **required**
* content_type (string) **required**

### deleteQueries
This method removes certain queries by their IDs on Semantria side.


```js
semantria.deleteQueries({
  "Query IDs": [],
  "content_type": ""
}, context)
```

#### Parameters
* config_id (string) - Identifier of configuration queries linked to.
* Query IDs (array) **required**
* content_type (string) **required**

### getQueries
This method retrieves list of queries available on Semantria side.


```js
semantria.getQueries({
  "content_type": ""
}, context)
```

#### Parameters
* config_id (string) - Identifier of configuration queries linked to.
* content_type (string) **required**

### addQueries
This method adds queries on Semantria side.


```js
semantria.addQueries({
  "Queries": null,
  "content_type": ""
}, context)
```

#### Parameters
* config_id (string) - Identifier of configuration queries linked to.
* Queries (undefined) **required**
* content_type (string) **required**

### updateQueries
This method updates queries by unique IDs on Semantria side.


```js
semantria.updateQueries({
  "Queries": null,
  "content_type": ""
}, context)
```

#### Parameters
* config_id (string) - Identifier of configuration queries linked to.
* Queries (undefined) **required**
* content_type (string) **required**

### getStatistic
This method retrieves overall and per configuration usage statistics for specific timeframe. Statistics ordered per available configurations. Available interval values are current <b>hour</b>, <b>day</b>, <b>week</b>, <b>month</b> and <b>year</b>.


```js
semantria.getStatistic({
  "content_type": ""
}, context)
```

#### Parameters
* config_id (string) - Configuration identifier for usage statistics retrieving.
* interval (string) - Hour, Day, Week, Month, Year values are supported.
* content_type (string) **required**

### getStatus
This method retrieves API status information such as the app version, current API version, supported languages and encodings, the overall service status, etc.


```js
semantria.getStatus({
  "content_type": ""
}, context)
```

#### Parameters
* content_type (string) **required**

### getSubscription
This method retrieves user's subscription details that consist of the list of allowed features, configured limits and options on Semantria side.


```js
semantria.getSubscription({
  "content_type": ""
}, context)
```

#### Parameters
* content_type (string) **required**

### deleteTaxonomy
This method removes certain taxonomy nodes by their IDs on Semantria side.


```js
semantria.deleteTaxonomy({
  "Taxonomy node IDs": [],
  "content_type": ""
}, context)
```

#### Parameters
* config_id (string) - Identifier of configuration queries linked to.
* Taxonomy node IDs (array) **required**
* content_type (string) **required**

### getTaxonomy
This method retrieves list of taxonomy available on Semantria side.


```js
semantria.getTaxonomy({
  "content_type": ""
}, context)
```

#### Parameters
* config_id (string) - Identifier of configuration taxonomy linked to.
* content_type (string) **required**

### addTaxonomy
This method adds taxonomy nodes on Semantria side.


```js
semantria.addTaxonomy({
  "Taxonomy": null,
  "content_type": ""
}, context)
```

#### Parameters
* config_id (string) - Identifier of configuration queries linked to.
* Taxonomy (undefined) **required**
* content_type (string) **required**

### updateTaxonomy
This method updates taxonomy nodes on Semantria side.


```js
semantria.updateTaxonomy({
  "Taxonomy": null,
  "content_type": ""
}, context)
```

#### Parameters
* config_id (string) - Identifier of configuration queries linked to.
* Taxonomy (undefined) **required**
* content_type (string) **required**

