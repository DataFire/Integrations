# @datafire/semantria
Semantria applies Text and Sentiment Analysis to tweets, facebook posts, surveys, reviews or enterprise content.

## Operation: deleteBlacklistItems
This method removes certain blacklisted items by their values on Semantria side.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "config_id": {
      "type": "string",
      "description": "Identifier of configuration blacklist items linked to."
    },
    "Blacklisted item IDs": {
      "items": {
        "type": "string"
      },
      "type": "array"
    },
    "content_type": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "Blacklisted item IDs",
    "content_type"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getBlacklist
This method retrieves all backlisted items available on Semantria side.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "config_id": {
      "type": "string",
      "description": "Identifier of configuration blacklist linked to."
    },
    "content_type": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "content_type"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/BlacklistItem_ResponseVersion"
  },
  "type": "array"
}
```
## Operation: addBlacklist
This method adds new unique items to the backlist on Semantria side.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "config_id": {
      "type": "string",
      "description": "Identifier of configuration blacklist linked to."
    },
    "Blacklisted items": {
      "$ref": "#/definitions/Request_class"
    },
    "content_type": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "Blacklisted items",
    "content_type"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/BlacklistItem_ResponseVersion"
  },
  "type": "array"
}
```
## Operation: updateBlacklist
This method updates existing items by unique IDs in the backlist on Semantria side.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "config_id": {
      "type": "string",
      "description": "Identifier of configuration blacklist linked to."
    },
    "Blacklisted items": {
      "$ref": "#/definitions/Request_class"
    },
    "content_type": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "Blacklisted items",
    "content_type"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/BlacklistItem_ResponseVersion"
  },
  "type": "array"
}
```
## Operation: deleteCategories
This method removes certain user categories by their IDs on Semantria side.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "config_id": {
      "type": "string",
      "description": "Identifier of configuration user categories linked to."
    },
    "Category IDs": {
      "items": {
        "type": "string"
      },
      "type": "array"
    },
    "content_type": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "Category IDs",
    "content_type"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getCategories
This method retrieves list of user categories available on Semantria side.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "config_id": {
      "type": "string",
      "description": "Identifier of configuration user categories linked to."
    },
    "content_type": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "content_type"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Category_ResponseVersion"
  },
  "type": "array"
}
```
## Operation: addCategories
This method adds user categories on Semantria side.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "config_id": {
      "type": "string",
      "description": "Identifier of configuration user categories linked to."
    },
    "Categories": {
      "$ref": "#/definitions/Request_class"
    },
    "content_type": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "Categories",
    "content_type"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Category_ResponseVersion"
  },
  "type": "array"
}
```
## Operation: updateCategories
This method updates user categories by unique IDs on Semantria side.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "config_id": {
      "type": "string",
      "description": "Identifier of configuration user categories linked to."
    },
    "Categories": {
      "$ref": "#/definitions/Request_class"
    },
    "content_type": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "Categories",
    "content_type"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Category_ResponseVersion"
  },
  "type": "array"
}
```
## Operation: queueCollection
This method queues collection of documents onto the server for analysis. Queued collection of documents analyzes in common context as entire thing. If unique configuration ID provided, Semantria uses settings of that configuration during analysis, in opposite the primary configuration uses. Collection IDs are unique in scope of configuration. If the same ID appears twice, Semantria overrides existing collection with the new Data

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "config_id": {
      "type": "string",
      "description": "Identifier of configuration used for analysis."
    },
    "Collection": {
      "$ref": "#/definitions/Request_class"
    },
    "content_type": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "Collection",
    "content_type"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Collection"
}
```
## Operation: retrieveProcessedCollections
This method retrieves analysis results for processed collections from Semantria. FAILED collections will have FAILED status in response. Semantria responds with limited amount of results per API call. If configuration ID provided, Semantria responds with the collections, which were queued using the same configuration ID, in opposite Primary configuration uses.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "config_id": {
      "type": "string",
      "description": "Identifier of configuration used for analysis."
    },
    "content_type": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "content_type"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CollectionAnalyticData"
}
```
## Operation: cancelCollection
This method cancels collection analysis by unique ID on Semantria side if it is waiting for analysis in queue.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "config_id": {
      "type": "string",
      "description": "Identifier of configuration used for analysis."
    },
    "collection_id": {
      "type": "string",
      "description": "Collection ID"
    },
    "content_type": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "collection_id",
    "content_type"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: receiveCollectionAnalyticData
This method retrieves analysis results for documents collection by its unique ID or the collection’s status in queue if it did not analyzed yet. Semantria guarantees delivering of all collections back to the client even if they FAILED on Semantria side due to some reason.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "config_id": {
      "type": "string",
      "description": "Identifier of configuration used for analysis."
    },
    "collection_id": {
      "type": "string",
      "description": "Collection ID"
    },
    "content_type": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "collection_id",
    "content_type"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CollectionAnalyticData"
}
```
## Operation: deleteConfigurations
This method removes certain configuration by unique ID on Semantria side.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Configuration IDs": {
      "items": {
        "type": "string"
      },
      "type": "array"
    },
    "content_type": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "Configuration IDs",
    "content_type"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getConfigurations
This method retrieves all user configurations available on Semantria side.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "content_type": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "content_type"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Configuration_ResponseVersion"
  },
  "type": "array"
}
```
## Operation: addConfigurations
This method creates configurations on Semantria side.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Configurations": {
      "$ref": "#/definitions/Request_class"
    },
    "content_type": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "Configurations",
    "content_type"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Configuration_ResponseVersion"
  },
  "type": "array"
}
```
## Operation: updateConfigurations
This method updates specific configurations by unique IDs on Semantria side.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Configurations": {
      "$ref": "#/definitions/Request_class"
    },
    "content_type": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "Configurations",
    "content_type"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Configuration_ResponseVersion"
  },
  "type": "array"
}
```
## Operation: queueDocument
This method queues document onto the server for analysis. Queued document analyzes individually and will have its own set of results. If unique configuration ID provided, Semantria uses settings of that configuration during analysis, in opposite the primary configuration uses. Document IDs are unique in scope of configuration. If the same ID appears twice, Semantria overrides existing document with the new Data.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "config_id": {
      "type": "string",
      "description": "Identifier of configuration used for analysis."
    },
    "Document": {
      "$ref": "#/definitions/Request_class"
    },
    "content_type": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "Document",
    "content_type"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Document"
}
```
## Operation: queueBatchOfDocuments
This method queues batch of documents for analysis. The rules are the same as for single document mode but here the documents ordered into the batch.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "config_id": {
      "type": "string",
      "description": "Identifier of configuration used for analysis."
    },
    "Batch of Documents": {
      "$ref": "#/definitions/Request_class"
    },
    "content_type": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "Batch of Documents",
    "content_type"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Document"
}
```
## Operation: retrieveProcessedDocuments
This method retrieves analysis results for processed documents from Semantria. FAILED documents will have FAILED status in response. Semantria responds with limited amount of results per API call. If configuration ID provided, Semantria responds with the document, which were queued using the same configuration ID, in opposite Primary.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "config_id": {
      "type": "string",
      "description": "Identifier of configuration used for analysis."
    },
    "content_type": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "content_type"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/DocumentAnalyticData"
}
```
## Operation: cancelDocument
This method cancels document analysis by unique ID on Semantria side if it is waiting for analysis in queue.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "config_id": {
      "type": "string",
      "description": "Identifier of configuration used for analysis."
    },
    "document_id": {
      "type": "string",
      "description": "Document ID"
    },
    "content_type": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "document_id",
    "content_type"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: receiveDocumentAnalyticData
This method retrieves analysis results for the single document by its unique ID or the document’s status in queue if it did not analyzed yet. Semantria guarantees delivering of all documents back to the client even if they FAILED on Semantria side due to some reason.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "config_id": {
      "type": "string",
      "description": "Identifier of configuration used for analysis."
    },
    "document_id": {
      "type": "string",
      "description": "Document ID"
    },
    "content_type": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "document_id",
    "content_type"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/DocumentAnalyticData"
}
```
## Operation: deleteEntities
This method removes certain user entities by their names on Semantria side.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "content_type": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "content_type"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getEntities
This method retrieves list of user entities available on Semantria side.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "config_id": {
      "type": "string",
      "description": "Identifier of configuration user entities linked to."
    },
    "content_type": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "content_type"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Entity_ResponseVersion"
  },
  "type": "array"
}
```
## Operation: addEntities
This method adds user entities on Semantria side.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "config_id": {
      "type": "string",
      "description": "Identifier of configuration user entities linked to."
    },
    "User entities": {
      "$ref": "#/definitions/Request_class"
    },
    "content_type": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "User entities",
    "content_type"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Entity_ResponseVersion"
  },
  "type": "array"
}
```
## Operation: updateEntities
This method updates user entities by unique IDs on Semantria side.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "config_id": {
      "type": "string",
      "description": "Identifier of configuration user entities linked to."
    },
    "User entities": {
      "$ref": "#/definitions/Request_class"
    },
    "content_type": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "User entities",
    "content_type"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Entity_ResponseVersion"
  },
  "type": "array"
}
```
## Operation: getFeatures
This method returns list of supported features per languages supported by Semantria API. Let the users know about API capabilities.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "language": {
      "type": "string",
      "description": "Filter features by specified language"
    },
    "content_type": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "content_type"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Feature"
  },
  "type": "array"
}
```
## Operation: deletePhrases
This method removes certain sentiment-bearing phrases by their names on Semantria side.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "config_id": {
      "type": "string",
      "description": "Identifier of configuration phrases linked to."
    },
    "Sentiment phrase IDs": {
      "items": {
        "type": "string"
      },
      "type": "array"
    },
    "content_type": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "Sentiment phrase IDs",
    "content_type"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getPhrases
This method retrieves list of sentiment-bearing phrases available on Semantria side.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "config_id": {
      "type": "string",
      "description": "Identifier of configuration phrases linked to."
    },
    "content_type": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "content_type"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Phrase_ResponseVersion"
  },
  "type": "array"
}
```
## Operation: addPhrases
This method adds sentiment-bearing phrases on Semantria side.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "config_id": {
      "type": "string",
      "description": "Identifier of configuration phrases linked to."
    },
    "Sentiment phrases": {
      "$ref": "#/definitions/Request_class"
    },
    "content_type": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "Sentiment phrases",
    "content_type"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Phrase_ResponseVersion"
  },
  "type": "array"
}
```
## Operation: updatePhrases
This method updates sentiment-bearing phrases by unique IDs on Semantria side.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "config_id": {
      "type": "string",
      "description": "Identifier of configuration phrases linked to."
    },
    "Sentiment phrases": {
      "$ref": "#/definitions/Request_class"
    },
    "content_type": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "Sentiment phrases",
    "content_type"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Phrase_ResponseVersion"
  },
  "type": "array"
}
```
## Operation: deleteQueries
This method removes certain queries by their IDs on Semantria side.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "config_id": {
      "type": "string",
      "description": "Identifier of configuration queries linked to."
    },
    "Query IDs": {
      "items": {
        "type": "string"
      },
      "type": "array"
    },
    "content_type": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "Query IDs",
    "content_type"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getQueries
This method retrieves list of queries available on Semantria side.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "config_id": {
      "type": "string",
      "description": "Identifier of configuration queries linked to."
    },
    "content_type": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "content_type"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Query_ResponseVersion"
  },
  "type": "array"
}
```
## Operation: addQueries
This method adds queries on Semantria side.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "config_id": {
      "type": "string",
      "description": "Identifier of configuration queries linked to."
    },
    "Queries": {
      "$ref": "#/definitions/Request_class"
    },
    "content_type": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "Queries",
    "content_type"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Query_ResponseVersion"
  },
  "type": "array"
}
```
## Operation: updateQueries
This method updates queries by unique IDs on Semantria side.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "config_id": {
      "type": "string",
      "description": "Identifier of configuration queries linked to."
    },
    "Queries": {
      "$ref": "#/definitions/Request_class"
    },
    "content_type": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "Queries",
    "content_type"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Query_ResponseVersion"
  },
  "type": "array"
}
```
## Operation: getStatistic
This method retrieves overall and per configuration usage statistics for specific timeframe. Statistics ordered per available configurations. Available interval values are current <b>hour</b>, <b>day</b>, <b>week</b>, <b>month</b> and <b>year</b>.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "config_id": {
      "type": "string",
      "description": "Configuration identifier for usage statistics retrieving."
    },
    "interval": {
      "type": "string",
      "description": "Hour, Day, Week, Month, Year values are supported."
    },
    "content_type": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "content_type"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Statistic"
}
```
## Operation: getStatus
This method retrieves API status information such as the app version, current API version, supported languages and encodings, the overall service status, etc.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "content_type": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "content_type"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Status"
}
```
## Operation: getSubscription
This method retrieves user's subscription details that consist of the list of allowed features, configured limits and options on Semantria side.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "content_type": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "content_type"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Subscription"
}
```
## Operation: deleteTaxonomy
This method removes certain taxonomy nodes by their IDs on Semantria side.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "config_id": {
      "type": "string",
      "description": "Identifier of configuration queries linked to."
    },
    "Taxonomy node IDs": {
      "items": {
        "type": "string"
      },
      "type": "array"
    },
    "content_type": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "Taxonomy node IDs",
    "content_type"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getTaxonomy
This method retrieves list of taxonomy available on Semantria side.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "config_id": {
      "type": "string",
      "description": "Identifier of configuration taxonomy linked to."
    },
    "content_type": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "content_type"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/TaxonomyNode_ResponseVersion"
  },
  "type": "array"
}
```
## Operation: addTaxonomy
This method adds taxonomy nodes on Semantria side.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "config_id": {
      "type": "string",
      "description": "Identifier of configuration queries linked to."
    },
    "Taxonomy": {
      "$ref": "#/definitions/Request_class"
    },
    "content_type": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "Taxonomy",
    "content_type"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/TaxonomyNode_ResponseVersion"
  },
  "type": "array"
}
```
## Operation: updateTaxonomy
This method updates taxonomy nodes on Semantria side.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "config_id": {
      "type": "string",
      "description": "Identifier of configuration queries linked to."
    },
    "Taxonomy": {
      "$ref": "#/definitions/Request_class"
    },
    "content_type": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "Taxonomy",
    "content_type"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/TaxonomyNode_ResponseVersion"
  },
  "type": "array"
}
```
