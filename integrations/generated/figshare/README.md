# @datafire/figshare
Figshare apiv2. Using Swagger 2.0

## Operation: oauthCallback


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "code": {
      "title": "code",
      "type": "string"
    }
  },
  "required": [
    "code"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "access_token": {
      "type": "string"
    },
    "refresh_token": {
      "type": "string"
    },
    "token_type": {
      "type": "string"
    },
    "scope": {
      "type": "string"
    },
    "expiration": {
      "type": "string"
    }
  }
}
```
## Operation: oauthRefresh


### Input Schema
```json
{}
```
### Output Schema
```json
{
  "properties": {
    "access_token": {
      "type": "string"
    },
    "refresh_token": {
      "type": "string"
    },
    "token_type": {
      "type": "string"
    },
    "scope": {
      "type": "string"
    },
    "expiration": {
      "type": "string"
    }
  }
}
```
## Operation: private_account
Account information for token/personal token

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Account"
}
```
## Operation: private_articles_list
Get Own Articles

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "page": {
      "type": "integer",
      "format": "int64",
      "description": "Page number. Used for pagination with page_size",
      "maximum": 5000,
      "minimum": 1
    },
    "page_size": {
      "type": "integer",
      "format": "int64",
      "description": "The number of results included on a page. Used for pagination with page",
      "maximum": 100,
      "minimum": 1
    },
    "limit": {
      "type": "integer",
      "format": "int64",
      "description": "Number of results included on a page. Used for pagination with query",
      "maximum": 100,
      "minimum": 1
    },
    "offset": {
      "type": "integer",
      "format": "int64",
      "description": "Where to start the listing(the offset of the first result). Used for pagination with limit",
      "maximum": 5000,
      "minimum": 1
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Article"
  },
  "type": "array"
}
```
## Operation: private_article_create
Create a new Article by sending article information

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Article": {
      "$ref": "#/definitions/ArticleCreate"
    }
  },
  "additionalProperties": false,
  "required": [
    "Article"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Location"
}
```
## Operation: private_articles_search
Returns a list of private articles filtered by the search parameters

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "search": {
      "$ref": "#/definitions/PrivateArticleSearch"
    }
  },
  "additionalProperties": false,
  "required": [
    "search"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Article"
  },
  "type": "array"
}
```
## Operation: private_article_delete
Delete an article

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "article_id": {
      "type": "integer",
      "format": "int64",
      "description": "Article unique identifier",
      "minimum": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "article_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: private_article_details
View a private article

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "article_id": {
      "type": "integer",
      "format": "int64",
      "description": "Article unique identifier",
      "minimum": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "article_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ArticleCompletePrivate"
}
```
## Operation: private_article_update
Updating an article by passing body parameters

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Article": {
      "$ref": "#/definitions/ArticleUpdate"
    },
    "article_id": {
      "type": "integer",
      "format": "int64",
      "description": "Article unique identifier",
      "minimum": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "Article",
    "article_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: private_article_authors_list
List article authors

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "article_id": {
      "type": "integer",
      "format": "int64",
      "description": "Article unique identifier",
      "minimum": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "article_id"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Author"
  },
  "type": "array"
}
```
## Operation: private_article_authors_add
Associate new authors with the article. This will add new authors to the list of already associated authors

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Authors": {
      "$ref": "#/definitions/AuthorsCreator"
    },
    "article_id": {
      "type": "integer",
      "format": "int64",
      "description": "Article unique identifier",
      "minimum": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "Authors",
    "article_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: private_article_authors_replace
Associate new authors with the article. This will remove all already associated authors and add these new ones

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Authors": {
      "$ref": "#/definitions/AuthorsCreator"
    },
    "article_id": {
      "type": "integer",
      "format": "int64",
      "description": "Article unique identifier",
      "minimum": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "Authors",
    "article_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: private_article_author_delete
De-associate author from article

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "article_id": {
      "type": "integer",
      "format": "int64",
      "description": "Article unique identifier",
      "minimum": 1
    },
    "author_id": {
      "type": "integer",
      "format": "int64",
      "description": "Article Author unique identifier",
      "minimum": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "article_id",
    "author_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: private_article_categories_list
List article categories

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "article_id": {
      "type": "integer",
      "format": "int64",
      "description": "Article unique identifier",
      "minimum": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "article_id"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Category"
  },
  "type": "array"
}
```
## Operation: private_article_categories_add
Associate new categories with the article. This will add new categories to the list of already associated categories

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "categories": {
      "$ref": "#/definitions/CategoriesCreator"
    },
    "article_id": {
      "type": "integer",
      "format": "int64",
      "description": "Article unique identifier",
      "minimum": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "categories",
    "article_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: private_article_categories_replace
Associate new categories with the article. This will remove all already associated categories and add these new ones

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "categories": {
      "$ref": "#/definitions/CategoriesCreator"
    },
    "article_id": {
      "type": "integer",
      "format": "int64",
      "description": "Article unique identifier",
      "minimum": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "categories",
    "article_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: private_article_category_delete
De-associate category from article

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "article_id": {
      "type": "integer",
      "format": "int64",
      "description": "Article unique identifier",
      "minimum": 1
    },
    "category_id": {
      "type": "integer",
      "format": "int64",
      "description": "Category unique identifier",
      "minimum": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "article_id",
    "category_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: private_article_confidentiality_delete
Delete confidentiality settings

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "article_id": {
      "type": "integer",
      "format": "int64",
      "description": "Article unique identifier",
      "minimum": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "article_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: private_article_confidentiality_details
View confidentiality settings

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "article_id": {
      "type": "integer",
      "format": "int64",
      "description": "Article unique identifier",
      "minimum": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "article_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ArticleConfidentiality"
}
```
## Operation: private_article_confidentiality_update
Update confidentiality settings

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "reason": {
      "$ref": "#/definitions/ConfidentialityCreator"
    },
    "article_id": {
      "type": "integer",
      "format": "int64",
      "description": "Article unique identifier",
      "minimum": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "reason",
    "article_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: private_article_embargo_delete
Will lift the embargo for the specified article

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "article_id": {
      "type": "integer",
      "format": "int64",
      "description": "Article unique identifier",
      "minimum": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "article_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: private_article_embargo_details
View a private article embargo details

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "article_id": {
      "type": "integer",
      "format": "int64",
      "description": "Article unique identifier",
      "minimum": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "article_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ArticleEmbargo"
}
```
## Operation: private_article_embargo_update
Note: setting an article under whole embargo does not imply that the article will be published when the embargo will expire. You must explicitly call the publish endpoint to enable this functionality.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Embargo": {
      "$ref": "#/definitions/ArticleEmbargoUpdater"
    },
    "article_id": {
      "type": "integer",
      "format": "int64",
      "description": "Article unique identifier",
      "minimum": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "Embargo",
    "article_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: private_article_files_list
List private files

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "article_id": {
      "type": "integer",
      "format": "int64",
      "description": "Article unique identifier",
      "minimum": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "article_id"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/PrivateFile"
  },
  "type": "array"
}
```
## Operation: private_article_upload_initiate
Initiate new file upload within the article. Either use link to provide only an existing file that will not be uploaded on figshare or use the other 3 parameters(md5, name, size)

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "File": {
      "$ref": "#/definitions/FileCreator"
    },
    "article_id": {
      "type": "integer",
      "format": "int64",
      "description": "Article unique identifier",
      "minimum": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "File",
    "article_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Location"
}
```
## Operation: private_article_file_delete
Complete file upload

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "article_id": {
      "type": "integer",
      "format": "int64",
      "description": "Article unique identifier",
      "minimum": 1
    },
    "file_id": {
      "type": "integer",
      "format": "int64",
      "description": "File unique identifier",
      "minimum": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "article_id",
    "file_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: private_article_file
View details of file for specified article

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "article_id": {
      "type": "integer",
      "format": "int64",
      "description": "Article unique identifier",
      "minimum": 1
    },
    "file_id": {
      "type": "integer",
      "format": "int64",
      "description": "File unique identifier",
      "minimum": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "article_id",
    "file_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PrivateFile"
}
```
## Operation: private_article_upload_complete
Complete file upload

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "article_id": {
      "type": "integer",
      "format": "int64",
      "description": "Article unique identifier",
      "minimum": 1
    },
    "file_id": {
      "type": "integer",
      "format": "int64",
      "description": "File unique identifier",
      "minimum": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "article_id",
    "file_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: private_article_private_link
List private links

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "article_id": {
      "type": "integer",
      "format": "int64",
      "description": "Article unique identifier",
      "minimum": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "article_id"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/PrivateLink"
  },
  "type": "array"
}
```
## Operation: private_article_private_link_create
Create new private link for this article

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "private_link": {
      "$ref": "#/definitions/PrivateLinkCreator"
    },
    "article_id": {
      "type": "integer",
      "format": "int64",
      "description": "Article unique identifier",
      "minimum": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "article_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Location"
}
```
## Operation: private_article_private_link_delete
Disable/delete private link for this article

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "article_id": {
      "type": "integer",
      "format": "int64",
      "description": "Article unique identifier",
      "minimum": 1
    },
    "link_id": {
      "type": "string",
      "description": "Private link token"
    }
  },
  "additionalProperties": false,
  "required": [
    "article_id",
    "link_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: private_article_private_link_update
Update existing private link for this article

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "private_link": {
      "$ref": "#/definitions/PrivateLinkCreator"
    },
    "article_id": {
      "type": "integer",
      "format": "int64",
      "description": "Article unique identifier",
      "minimum": 1
    },
    "link_id": {
      "type": "string",
      "description": "Private link token"
    }
  },
  "additionalProperties": false,
  "required": [
    "article_id",
    "link_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: private_article_publish
- If the whole article is under embargo, it will not be published immediatly, but when the embargo expires or is lifted.
- When an article is published, a new public version will be generated. Any further updates to the article will affect the private article data. In order to make these changes publicly visible, an explicit publish operation is needed.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "article_id": {
      "type": "integer",
      "format": "int64",
      "description": "Article unique identifier",
      "minimum": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "article_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Location"
}
```
## Operation: private_article_reserve_doi
Reserve DOI for article

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "article_id": {
      "type": "integer",
      "format": "int64",
      "description": "Article unique identifier",
      "minimum": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "article_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ArticleDOI"
}
```
## Operation: private_authors_search
Search for authors

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "search": {
      "$ref": "#/definitions/PrivateAuthorsSearch"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Author"
  },
  "type": "array"
}
```
## Operation: private_author_details
View author details

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "author_id": {
      "type": "integer",
      "format": "int64",
      "description": "Author unique identifier",
      "minimum": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "author_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AuthorComplete"
}
```
## Operation: private_categories_list
List institution categories (including parent Categories)

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Category"
  },
  "type": "array"
}
```
## Operation: private_collections_list
List private collections

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "page": {
      "type": "integer",
      "format": "int64",
      "description": "Page number. Used for pagination with page_size",
      "maximum": 5000,
      "minimum": 1
    },
    "page_size": {
      "type": "integer",
      "format": "int64",
      "description": "The number of results included on a page. Used for pagination with page",
      "maximum": 100,
      "minimum": 1
    },
    "limit": {
      "type": "integer",
      "format": "int64",
      "description": "Number of results included on a page. Used for pagination with query",
      "maximum": 100,
      "minimum": 1
    },
    "offset": {
      "type": "integer",
      "format": "int64",
      "description": "Where to start the listing(the offset of the first result). Used for pagination with limit",
      "maximum": 5000,
      "minimum": 1
    },
    "order": {
      "type": "string",
      "description": "The field by which to order. Default varies by endpoint/resource.",
      "enum": [
        "published_date",
        "modified_date",
        "views",
        "shares",
        "downloads",
        "cites"
      ]
    },
    "order_direction": {
      "type": "string",
      "enum": [
        "asc",
        "desc"
      ]
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Collection"
  },
  "type": "array"
}
```
## Operation: private_collection_create
Create a new Collection by sending collection information

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Collection": {
      "$ref": "#/definitions/CollectionCreate"
    }
  },
  "additionalProperties": false,
  "required": [
    "Collection"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CollectionComplete"
}
```
## Operation: private_collections_search
Returns a list of private Collections

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "search": {
      "$ref": "#/definitions/PrivateCollectionSearch"
    }
  },
  "additionalProperties": false,
  "required": [
    "search"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Collection"
  },
  "type": "array"
}
```
## Operation: private_collection_delete
Delete n collection

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "collection_id": {
      "type": "integer",
      "format": "int64",
      "description": "Collection Unique identifier",
      "minimum": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "collection_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: private_collection_details
View a collection

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "collection_id": {
      "type": "integer",
      "format": "int64",
      "description": "Collection Unique identifier",
      "minimum": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "collection_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CollectionComplete"
}
```
## Operation: private_collection_update
Update collection details

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Collection": {
      "$ref": "#/definitions/CollectionUpdate"
    },
    "collection_id": {
      "type": "integer",
      "format": "int64",
      "description": "Collection Unique identifier",
      "minimum": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "Collection",
    "collection_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: private_collection_articles_list
List collection articles

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "collection_id": {
      "type": "integer",
      "format": "int64",
      "description": "Collection unique identifier",
      "minimum": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "collection_id"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Article"
  },
  "type": "array"
}
```
## Operation: private_collection_articles_add
Associate new articles with the collection. This will add new articles to the list of already associated articles

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "articles": {
      "$ref": "#/definitions/ArticlesCreator"
    },
    "collection_id": {
      "type": "integer",
      "format": "int64",
      "description": "Collection unique identifier",
      "minimum": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "articles",
    "collection_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Location"
}
```
## Operation: private_collection_articles_replace
Associate new articles with the collection. This will remove all already associated articles and add these new ones

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "articles": {
      "$ref": "#/definitions/ArticlesCreator"
    },
    "collection_id": {
      "type": "integer",
      "format": "int64",
      "description": "Collection unique identifier",
      "minimum": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "articles",
    "collection_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: private_collection_article_delete
De-associate article from collection

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "collection_id": {
      "type": "integer",
      "format": "int64",
      "description": "Collection unique identifier",
      "minimum": 1
    },
    "article_id": {
      "type": "integer",
      "format": "int64",
      "description": "Collection article unique identifier",
      "minimum": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "collection_id",
    "article_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: private_collection_authors_list
List collection authors

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "collection_id": {
      "type": "integer",
      "format": "int64",
      "description": "Collection unique identifier",
      "minimum": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "collection_id"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Author"
  },
  "type": "array"
}
```
## Operation: private_collection_authors_add
Associate new authors with the collection. This will add new authors to the list of already associated authors

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Authors": {
      "$ref": "#/definitions/AuthorsCreator"
    },
    "collection_id": {
      "type": "integer",
      "format": "int64",
      "description": "Collection unique identifier",
      "minimum": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "Authors",
    "collection_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Location"
}
```
## Operation: private_collection_authors_replace
Associate new authors with the collection. This will remove all already associated authors and add these new ones

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Authors": {
      "$ref": "#/definitions/AuthorsCreator"
    },
    "collection_id": {
      "type": "integer",
      "format": "int64",
      "description": "Collection unique identifier",
      "minimum": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "Authors",
    "collection_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: private_collection_author_delete
Delete collection author

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "collection_id": {
      "type": "integer",
      "format": "int64",
      "description": "Collection unique identifier",
      "minimum": 1
    },
    "author_id": {
      "type": "integer",
      "format": "int64",
      "description": "Collection Author unique identifier",
      "minimum": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "collection_id",
    "author_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: private_collection_categories_list
List collection categories

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "collection_id": {
      "type": "integer",
      "format": "int64",
      "description": "Collection unique identifier",
      "minimum": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "collection_id"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Category"
  },
  "type": "array"
}
```
## Operation: private_collection_categories_add
Associate new categories with the collection. This will add new categories to the list of already associated categories

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "categories": {
      "$ref": "#/definitions/CategoriesCreator"
    },
    "collection_id": {
      "type": "integer",
      "format": "int64",
      "description": "Collection unique identifier",
      "minimum": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "categories",
    "collection_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Location"
}
```
## Operation: private_collection_categories_replace
Associate new categories with the collection. This will remove all already associated categories and add these new ones

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "categories": {
      "$ref": "#/definitions/CategoriesCreator"
    },
    "collection_id": {
      "type": "integer",
      "format": "int64",
      "description": "Collection unique identifier",
      "minimum": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "categories",
    "collection_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: private_collection_category_delete
De-associate category from collection

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "collection_id": {
      "type": "integer",
      "format": "int64",
      "description": "Collection unique identifier",
      "minimum": 1
    },
    "category_id": {
      "type": "integer",
      "format": "int64",
      "description": "Collection category unique identifier",
      "minimum": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "collection_id",
    "category_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: private_collection_private_links_list
List article private links

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "collection_id": {
      "type": "integer",
      "format": "int64",
      "description": "Collection unique identifier",
      "minimum": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "collection_id"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/PrivateLink"
  },
  "type": "array"
}
```
## Operation: private_collection_private_link_create
Create new private link

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "private_link": {
      "$ref": "#/definitions/CollectionPrivateLinkCreator"
    },
    "collection_id": {
      "type": "integer",
      "format": "int64",
      "description": "Collection unique identifier",
      "minimum": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "collection_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Location"
}
```
## Operation: private_collection_private_link_delete
Disable/delete private link for this collection

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "collection_id": {
      "type": "integer",
      "format": "int64",
      "description": "Collection unique identifier",
      "minimum": 1
    },
    "link_id": {
      "type": "string",
      "description": "Private link token"
    }
  },
  "additionalProperties": false,
  "required": [
    "collection_id",
    "link_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: private_collection_private_link_update
Update existing private link for this collection

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "private_link": {
      "$ref": "#/definitions/CollectionPrivateLinkCreator"
    },
    "collection_id": {
      "type": "integer",
      "format": "int64",
      "description": "Collection unique identifier",
      "minimum": 1
    },
    "link_id": {
      "type": "string",
      "description": "Private link token"
    }
  },
  "additionalProperties": false,
  "required": [
    "collection_id",
    "link_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: private_collection_publish
When a collection is published, a new public version will be generated. Any further updates to the collection will affect the private collection data. In order to make these changes publicly visible, an explicit publish operation is needed.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "collection_id": {
      "type": "integer",
      "format": "int64",
      "description": "Collection Unique identifier",
      "minimum": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "collection_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Location"
}
```
## Operation: private_collection_reserve_doi
Reserve DOI for collection

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "collection_id": {
      "type": "integer",
      "format": "int64",
      "description": "Collection Unique identifier",
      "minimum": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "collection_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ArticleDOI"
}
```
## Operation: private_institution_details
Account institution details

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Institution"
}
```
## Operation: private_institution_articles
Get Articles from own institution. User must be administrator of the institution

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "page": {
      "type": "integer",
      "format": "int64",
      "description": "Page number. Used for pagination with page_size",
      "maximum": 5000,
      "minimum": 1
    },
    "page_size": {
      "type": "integer",
      "format": "int64",
      "description": "The number of results included on a page. Used for pagination with page",
      "maximum": 100,
      "minimum": 1
    },
    "limit": {
      "type": "integer",
      "format": "int64",
      "description": "Number of results included on a page. Used for pagination with query",
      "maximum": 100,
      "minimum": 1
    },
    "offset": {
      "type": "integer",
      "format": "int64",
      "description": "Where to start the listing(the offset of the first result). Used for pagination with limit",
      "maximum": 5000,
      "minimum": 1
    },
    "order": {
      "type": "string",
      "description": "The field by which to order. Default varies by endpoint/resource.",
      "enum": [
        "published_date",
        "modified_date",
        "views",
        "shares",
        "downloads",
        "cites"
      ]
    },
    "order_direction": {
      "type": "string",
      "enum": [
        "asc",
        "desc"
      ]
    },
    "published_since": {
      "type": "string",
      "description": "Filter by article publishing date. Will only return articles published after the date. date(ISO 8601) YYYY-MM-DD"
    },
    "modified_since": {
      "type": "string",
      "description": "Filter by article modified date. Will only return articles published after the date. date(ISO 8601) YYYY-MM-DD"
    },
    "status": {
      "type": "integer",
      "format": "int64",
      "description": "only return collections with this status"
    },
    "resource_doi": {
      "type": "string",
      "description": "only return collections with this resource_doi"
    },
    "item_type": {
      "type": "integer",
      "format": "int64",
      "description": "Only return collections with the respective type. Mapping for item_type is: 1 - Figure, 2 - Media, 3 - Dataset, 4 - Fileset, 5 - Poster, 6 - Paper, 7 - Presentation, 8 - Thesis, 9 - Code, 12 - Preprint",
      "maximum": 12,
      "minimum": 1
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Article"
  },
  "type": "array"
}
```
## Operation: private_institution_groups_list
Returns the groups for which the account has administrative privileges (assigned and inherited).

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Group"
  },
  "type": "array"
}
```
## Operation: private_licenses_list
This is a private endpoint that requires OAuth. It will return a list with figshare public licenses AND licenses defined for account's institution.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/License"
  },
  "type": "array"
}
```
## Operation: private_projects_list
List private projects

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "page": {
      "type": "integer",
      "format": "int64",
      "description": "Page number. Used for pagination with page_size",
      "maximum": 5000,
      "minimum": 1
    },
    "page_size": {
      "type": "integer",
      "format": "int64",
      "description": "The number of results included on a page. Used for pagination with page",
      "maximum": 100,
      "minimum": 1
    },
    "limit": {
      "type": "integer",
      "format": "int64",
      "description": "Number of results included on a page. Used for pagination with query",
      "maximum": 100,
      "minimum": 1
    },
    "offset": {
      "type": "integer",
      "format": "int64",
      "description": "Where to start the listing(the offset of the first result). Used for pagination with limit",
      "maximum": 5000,
      "minimum": 1
    },
    "order": {
      "type": "string",
      "description": "The field by which to order. Default varies by endpoint/resource.",
      "enum": [
        "published_date",
        "modified_date",
        "views",
        "shares",
        "downloads",
        "cites"
      ]
    },
    "order_direction": {
      "type": "string",
      "enum": [
        "asc",
        "desc"
      ]
    },
    "storage": {
      "type": "string",
      "description": "only return collections from this institution",
      "enum": [
        "group",
        "individual"
      ]
    },
    "roles": {
      "type": "string",
      "description": "Any combination of owner, collaborator, viewer separated by comma. Examples: \"owner\" or \"owner,collaborator\"."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/ProjectPrivate"
  },
  "type": "array"
}
```
## Operation: private_project_create
Create a new project

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Project": {
      "$ref": "#/definitions/ProjectCreate"
    }
  },
  "additionalProperties": false,
  "required": [
    "Project"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Location"
}
```
## Operation: private_projects_search
Search inside the private projects

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "search": {
      "$ref": "#/definitions/CommonSearch"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/ProjectPrivate"
  },
  "type": "array"
}
```
## Operation: private_project_delete
A project can be deleted only if: - it is not public - it does not have public articles.

When an individual project is deleted, all the articles are moved to my data of each owner.

When a group project is deleted, all the articles and files are deleted as well. Only project owner, group admin and above can delete a project.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project_id": {
      "type": "integer",
      "format": "int64",
      "description": "Project unique identifier",
      "minimum": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "project_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: private_project_details
View a private project

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project_id": {
      "type": "integer",
      "format": "int64",
      "description": "Project unique identifier",
      "minimum": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "project_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ProjectCompletePrivate"
}
```
## Operation: private_project_update
Updating an project by passing body parameters

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Project": {
      "$ref": "#/definitions/ProjectUpdate"
    },
    "project_id": {
      "type": "integer",
      "format": "int64",
      "description": "Project unique identifier",
      "minimum": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "Project",
    "project_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: private_project_articles_list
List project articles

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project_id": {
      "type": "integer",
      "format": "int64",
      "description": "Proejct unique identifier",
      "minimum": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "project_id"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Article"
  },
  "type": "array"
}
```
## Operation: private_project_articles_create
Create a new Article and associate it with this project

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Article": {
      "$ref": "#/definitions/ArticleCreate"
    },
    "project_id": {
      "type": "integer",
      "format": "int64",
      "description": "Proejct unique identifier",
      "minimum": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "Article",
    "project_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Location"
}
```
## Operation: private_project_article_delete
Delete project article

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project_id": {
      "type": "integer",
      "format": "int64",
      "description": "Project unique identifier",
      "minimum": 1
    },
    "article_id": {
      "type": "integer",
      "format": "int64",
      "description": "Project Article unique identifier",
      "minimum": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "project_id",
    "article_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: private_project_article_details
Project article details

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project_id": {
      "type": "integer",
      "format": "int64",
      "description": "Project unique identifier",
      "minimum": 1
    },
    "article_id": {
      "type": "integer",
      "format": "int64",
      "description": "Project Article unique identifier",
      "minimum": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "project_id",
    "article_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ProjectArticle"
}
```
## Operation: private_project_article_files
List article files

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project_id": {
      "type": "integer",
      "format": "int64",
      "description": "Project unique identifier",
      "minimum": 1
    },
    "article_id": {
      "type": "integer",
      "format": "int64",
      "description": "Project Article unique identifier",
      "minimum": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "project_id",
    "article_id"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/PrivateFile"
  },
  "type": "array"
}
```
## Operation: private_project_article_file
Project article file details

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project_id": {
      "type": "integer",
      "format": "int64",
      "description": "Project unique identifier",
      "minimum": 1
    },
    "article_id": {
      "type": "integer",
      "format": "int64",
      "description": "Project Article unique identifier",
      "minimum": 1
    },
    "file_id": {
      "type": "integer",
      "format": "int64",
      "description": "File unique identifier",
      "minimum": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "project_id",
    "article_id",
    "file_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PrivateFile"
}
```
## Operation: private_project_collaborators_list
List Project collaborators and invited users

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project_id": {
      "type": "integer",
      "format": "int64",
      "description": "Project unique identifier",
      "minimum": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "project_id"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/ProjectCollaborator"
  },
  "type": "array"
}
```
## Operation: private_project_collaborators_invite
Invite users to collaborate on project or view the project

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Collaborator": {
      "$ref": "#/definitions/ProjectCollaboratorInvite"
    },
    "project_id": {
      "type": "integer",
      "format": "int64",
      "description": "Project unique identifier",
      "minimum": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "Collaborator",
    "project_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ResponseMessage"
}
```
## Operation: private_project_collaborator__Delete
Remove project collaborator

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project_id": {
      "type": "integer",
      "format": "int64",
      "description": "Project unique identifier",
      "minimum": 1
    },
    "user_id": {
      "type": "integer",
      "format": "int64",
      "description": "User unique identifier",
      "minimum": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "project_id",
    "user_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: private_project_leave
Please note: project's owner cannot leave the project.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project_id": {
      "type": "integer",
      "format": "int64",
      "description": "Project unique identifier",
      "minimum": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "project_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: private_project_notes_list
List project notes

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "page": {
      "type": "integer",
      "format": "int64",
      "description": "Page number. Used for pagination with page_size",
      "maximum": 5000,
      "minimum": 1
    },
    "page_size": {
      "type": "integer",
      "format": "int64",
      "description": "The number of results included on a page. Used for pagination with page",
      "maximum": 100,
      "minimum": 1
    },
    "limit": {
      "type": "integer",
      "format": "int64",
      "description": "Number of results included on a page. Used for pagination with query",
      "maximum": 100,
      "minimum": 1
    },
    "offset": {
      "type": "integer",
      "format": "int64",
      "description": "Where to start the listing(the offset of the first result). Used for pagination with limit",
      "maximum": 5000,
      "minimum": 1
    },
    "project_id": {
      "type": "integer",
      "format": "int64",
      "description": "Project unique identifier",
      "minimum": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "project_id"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/ProjectNote"
  },
  "type": "array"
}
```
## Operation: private_project_notes_create
Create a new project note

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Note": {
      "$ref": "#/definitions/ProjectNoteCreate"
    },
    "project_id": {
      "type": "integer",
      "format": "int64",
      "description": "Project unique identifier",
      "minimum": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "Note",
    "project_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Location"
}
```
## Operation: private_project_note_delete
Delete project note

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project_id": {
      "type": "integer",
      "format": "int64",
      "description": "Project unique identifier",
      "minimum": 1
    },
    "note_id": {
      "type": "integer",
      "format": "int64",
      "description": "Note unique identifier",
      "minimum": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "project_id",
    "note_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: private_project_note
Project note details

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project_id": {
      "type": "integer",
      "format": "int64",
      "description": "Project unique identifier",
      "minimum": 1
    },
    "note_id": {
      "type": "integer",
      "format": "int64",
      "description": "Note unique identifier",
      "minimum": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "project_id",
    "note_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ProjectNotePrivate"
}
```
## Operation: private_project_note_update
Update project note

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Note": {
      "$ref": "#/definitions/ProjectNoteCreate"
    },
    "project_id": {
      "type": "integer",
      "format": "int64",
      "description": "Project unique identifier",
      "minimum": 1
    },
    "note_id": {
      "type": "integer",
      "format": "int64",
      "description": "Note unique identifier",
      "minimum": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "Note",
    "project_id",
    "note_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: private_project_publish
Publish a project. Possible after all items inside it are public

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project_id": {
      "type": "integer",
      "format": "int64",
      "description": "Project unique identifier",
      "minimum": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "project_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ResponseMessage"
}
```
## Operation: articles_list
Returns a list of public articles

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "page": {
      "type": "integer",
      "format": "int64",
      "description": "Page number. Used for pagination with page_size",
      "maximum": 5000,
      "minimum": 1
    },
    "page_size": {
      "type": "integer",
      "format": "int64",
      "description": "The number of results included on a page. Used for pagination with page",
      "maximum": 100,
      "minimum": 1
    },
    "limit": {
      "type": "integer",
      "format": "int64",
      "description": "Number of results included on a page. Used for pagination with query",
      "maximum": 100,
      "minimum": 1
    },
    "offset": {
      "type": "integer",
      "format": "int64",
      "description": "Where to start the listing(the offset of the first result). Used for pagination with limit",
      "maximum": 5000,
      "minimum": 1
    },
    "order": {
      "type": "string",
      "description": "The field by which to order. Default varies by endpoint/resource.",
      "enum": [
        "published_date",
        "modified_date",
        "views",
        "shares",
        "downloads",
        "cites"
      ]
    },
    "order_direction": {
      "type": "string",
      "enum": [
        "asc",
        "desc"
      ]
    },
    "institution": {
      "type": "integer",
      "format": "int64",
      "description": "only return collections from this institution"
    },
    "published_since": {
      "type": "string",
      "description": "Filter by article publishing date. Will only return articles published after the date. date(ISO 8601) YYYY-MM-DD"
    },
    "modified_since": {
      "type": "string",
      "description": "Filter by article modified date. Will only return articles published after the date. date(ISO 8601) YYYY-MM-DD"
    },
    "group": {
      "type": "integer",
      "format": "int64",
      "description": "only return collections from this group"
    },
    "resource_doi": {
      "type": "string",
      "description": "only return collections with this resource_doi"
    },
    "item_type": {
      "type": "integer",
      "format": "int64",
      "description": "Only return collections with the respective type. Mapping for item_type is: 1 - Figure, 2 - Media, 3 - Dataset, 4 - Fileset, 5 - Poster, 6 - Paper, 7 - Presentation, 8 - Thesis, 9 - Code, 12 - Preprint",
      "maximum": 12,
      "minimum": 1
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Article"
  },
  "type": "array"
}
```
## Operation: articles_search
Returns a list of public articles, filtered by the search parameters

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "search": {
      "$ref": "#/definitions/ArticleSearch"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Article"
  },
  "type": "array"
}
```
## Operation: article_details
View an article

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "article_id": {
      "type": "integer",
      "format": "int64",
      "description": "Article Unique identifier",
      "minimum": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "article_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ArticleComplete"
}
```
## Operation: article_files
Files list for article

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "article_id": {
      "type": "integer",
      "format": "int64",
      "description": "Article Unique identifier",
      "minimum": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "article_id"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/PublicFile"
  },
  "type": "array"
}
```
## Operation: article_file_details
File by id

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "article_id": {
      "type": "integer",
      "format": "int64",
      "description": "Article Unique identifier",
      "minimum": 1
    },
    "file_id": {
      "type": "integer",
      "format": "int64",
      "description": "File Unique identifier",
      "minimum": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "article_id",
    "file_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PublicFile"
}
```
## Operation: article_versions
List public article versions

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "article_id": {
      "type": "integer",
      "format": "int64",
      "description": "Article Unique identifier",
      "minimum": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "article_id"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Version"
  },
  "type": "array"
}
```
## Operation: article_version_details
Article with specified version

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "article_id": {
      "type": "integer",
      "format": "int64",
      "description": "Article Unique identifier",
      "minimum": 1
    },
    "v_number": {
      "type": "integer",
      "format": "int64",
      "description": "Article Version Number",
      "minimum": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "article_id",
    "v_number"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ArticleComplete"
}
```
## Operation: article_version_confidentiality
Confidentiality for article version

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "article_id": {
      "type": "integer",
      "format": "int64",
      "description": "Article Unique identifier",
      "minimum": 1
    },
    "v_number": {
      "type": "integer",
      "format": "int64",
      "description": "Version Number",
      "minimum": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "article_id",
    "v_number"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ArticleConfidentiality"
}
```
## Operation: article_version_embargo
Embargo for article version

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "article_id": {
      "type": "integer",
      "format": "int64",
      "description": "Article Unique identifier",
      "minimum": 1
    },
    "v_number": {
      "type": "integer",
      "format": "int64",
      "description": "Version Number",
      "minimum": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "article_id",
    "v_number"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ArticleEmbargo"
}
```
## Operation: categories_list
Returns a list of public categories

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Category"
  },
  "type": "array"
}
```
## Operation: collections_list
Returns a list of public collections

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "page": {
      "type": "integer",
      "format": "int64",
      "description": "Page number. Used for pagination with page_size",
      "maximum": 5000,
      "minimum": 1
    },
    "page_size": {
      "type": "integer",
      "format": "int64",
      "description": "The number of results included on a page. Used for pagination with page",
      "maximum": 100,
      "minimum": 1
    },
    "limit": {
      "type": "integer",
      "format": "int64",
      "description": "Number of results included on a page. Used for pagination with query",
      "maximum": 100,
      "minimum": 1
    },
    "offset": {
      "type": "integer",
      "format": "int64",
      "description": "Where to start the listing(the offset of the first result). Used for pagination with limit",
      "maximum": 5000,
      "minimum": 1
    },
    "order": {
      "type": "string",
      "description": "The field by which to order. Default varies by endpoint/resource.",
      "enum": [
        "published_date",
        "modified_date",
        "views",
        "shares",
        "downloads",
        "cites"
      ]
    },
    "order_direction": {
      "type": "string",
      "enum": [
        "asc",
        "desc"
      ]
    },
    "institution": {
      "type": "integer",
      "format": "int64",
      "description": "only return collections from this institution"
    },
    "published_since": {
      "type": "string",
      "description": "Filter by collection publishing date. Will only return collections published after the date. date(ISO 8601) YYYY-MM-DD"
    },
    "modified_since": {
      "type": "string",
      "description": "Filter by collection modified date. Will only return collections published after the date. date(ISO 8601) YYYY-MM-DD"
    },
    "group": {
      "type": "integer",
      "format": "int64",
      "description": "only return collections from this group"
    },
    "resource_doi": {
      "type": "string",
      "description": "only return collections with this resource_doi"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Collection"
  },
  "type": "array"
}
```
## Operation: collections_search
Returns a list of public collections

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "search": {
      "$ref": "#/definitions/CollectionSearch"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Collection"
  },
  "type": "array"
}
```
## Operation: collection_details
View a collection

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "collection_id": {
      "type": "integer",
      "format": "int64",
      "description": "Collection Unique identifier",
      "minimum": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "collection_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CollectionComplete"
}
```
## Operation: collection_articles
Returns a list of public collection articles

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "collection_id": {
      "type": "integer",
      "format": "int64",
      "description": "Collection Unique identifier",
      "minimum": 1
    },
    "page": {
      "type": "integer",
      "format": "int64",
      "description": "Page number. Used for pagination with page_size",
      "maximum": 5000,
      "minimum": 1
    },
    "page_size": {
      "type": "integer",
      "format": "int64",
      "description": "The number of results included on a page. Used for pagination with page",
      "maximum": 100,
      "minimum": 1
    },
    "limit": {
      "type": "integer",
      "format": "int64",
      "description": "Number of results included on a page. Used for pagination with query",
      "maximum": 100,
      "minimum": 1
    },
    "offset": {
      "type": "integer",
      "format": "int64",
      "description": "Where to start the listing(the offset of the first result). Used for pagination with limit",
      "maximum": 5000,
      "minimum": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "collection_id"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Article"
  },
  "type": "array"
}
```
## Operation: collection_versions
Returns a list of public collection Versions

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "collection_id": {
      "type": "integer",
      "format": "int64",
      "description": "Collection Unique identifier",
      "minimum": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "collection_id"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Version"
  },
  "type": "array"
}
```
## Operation: collection_version_details
View details for a certain version of a collection

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "collection_id": {
      "type": "integer",
      "format": "int64",
      "description": "Collection Unique identifier",
      "minimum": 1
    },
    "version_id": {
      "type": "integer",
      "format": "int64",
      "description": "Version Number",
      "minimum": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "collection_id",
    "version_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CollectionComplete"
}
```
## Operation: file_download
Starts the download of a file

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "file_id": {
      "type": "integer",
      "format": "int64",
      "minimum": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "file_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: institution_hrfeed_upload
More info in the <a href="#hr_feed">HR Feed section</a>

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "hrfeed": {
      "type": "string",
      "description": "You can find an example in the Hr Feed section"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ResponseMessage"
}
```
## Operation: institution_articles
Returns a list of articles belonging to the institution

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "institution_string_id": {
      "type": "string"
    },
    "resource_id": {
      "type": "string"
    },
    "filename": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "institution_string_id",
    "resource_id",
    "filename"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Article"
  },
  "type": "array"
}
```
## Operation: licenses_list
Returns a list of public licenses

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/License"
  },
  "type": "array"
}
```
## Operation: projects_list
Returns a list of public projects

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "page": {
      "type": "integer",
      "format": "int64",
      "description": "Page number. Used for pagination with page_size",
      "maximum": 5000,
      "minimum": 1
    },
    "page_size": {
      "type": "integer",
      "format": "int64",
      "description": "The number of results included on a page. Used for pagination with page",
      "maximum": 100,
      "minimum": 1
    },
    "limit": {
      "type": "integer",
      "format": "int64",
      "description": "Number of results included on a page. Used for pagination with query",
      "maximum": 100,
      "minimum": 1
    },
    "offset": {
      "type": "integer",
      "format": "int64",
      "description": "Where to start the listing(the offset of the first result). Used for pagination with limit",
      "maximum": 5000,
      "minimum": 1
    },
    "order": {
      "type": "string",
      "description": "The field by which to order. Default varies by endpoint/resource.",
      "enum": [
        "published_date",
        "modified_date",
        "views",
        "shares",
        "downloads",
        "cites"
      ]
    },
    "order_direction": {
      "type": "string",
      "enum": [
        "asc",
        "desc"
      ]
    },
    "institution": {
      "type": "integer",
      "format": "int64",
      "description": "only return collections from this institution"
    },
    "published_since": {
      "type": "string",
      "description": "Filter by article publishing date. Will only return articles published after the date. date(ISO 8601) YYYY-MM-DD"
    },
    "group": {
      "type": "integer",
      "format": "int64",
      "description": "only return collections from this group"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Project"
  },
  "type": "array"
}
```
## Operation: projects_search
Returns a list of public articles

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "search": {
      "$ref": "#/definitions/CommonSearch"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Project"
  },
  "type": "array"
}
```
## Operation: project_details
View a project

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project_id": {
      "type": "integer",
      "format": "int64",
      "description": "Project Unique identifier",
      "minimum": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "project_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ProjectComplete"
}
```
## Operation: project_articles
List articles in project

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project_id": {
      "type": "integer",
      "format": "int64",
      "description": "Project Unique identifier",
      "minimum": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "project_id"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Article"
  },
  "type": "array"
}
```
