# @datafire/ebay_commerce_taxonomy

Client library for Taxonomy

## Installation and Usage
```bash
npm install --save @datafire/ebay_commerce_taxonomy
```
```js
let ebay_commerce_taxonomy = require('@datafire/ebay_commerce_taxonomy').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

ebay_commerce_taxonomy.getCategoryTree({}).then(data => {
  console.log(data);
})
```

## Description

Use the Taxonomy API to discover the most appropriate eBay categories under which sellers can offer inventory items for sale, and the most likely categories under which buyers can browse or search for items to purchase. In addition, the Taxonomy API provides information about the required and recommended category aspects to include in listings.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
ebay_commerce_taxonomy.oauthCallback({
  "code": ""
}, context)
```

#### Input
* input `object`
  * code **required** `string`

#### Output
* output `object`
  * access_token `string`
  * refresh_token `string`
  * token_type `string`
  * scope `string`
  * expiration `string`

### oauthRefresh
Exchange a refresh_token for an access_token


```js
ebay_commerce_taxonomy.oauthRefresh(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * access_token `string`
  * refresh_token `string`
  * token_type `string`
  * scope `string`
  * expiration `string`

### getCategoryTree
This call retrieves the complete category tree that is identified by the category_tree_id parameter. The value of category_tree_id was returned by the Get a Default Category Tree ID call in the categoryTreeId field. The response contains details of all nodes of the specified eBay category tree, as well as the eBay marketplaces that use this category tree. Note: This call can return a very large payload, so you are strongly advised to submit the request with the following HTTP header: &nbsp;&nbsp;Accept-Encoding: application/gzip With this header (in addition to the required headers described under HTTP Request Headers), the call returns the response with gzip compression.


```js
ebay_commerce_taxonomy.getCategoryTree({
  "category_tree_id": ""
}, context)
```

#### Input
* input `object`
  * category_tree_id **required** `string`: The unique identifier of the eBay category tree being requested.

#### Output
* output [CategoryTree](#categorytree)

### getCategorySubtree
This call retrieves the details of all nodes of the category tree hierarchy (the subtree) below a specified category of a category tree. You identify the tree using the category_tree_id parameter, which was returned by the Get a Default Category Tree ID call in the categoryTreeId field. Note: This call can return a very large payload, so you are strongly advised to submit the request with the following HTTP header: &nbsp;&nbsp;Accept-Encoding: application/gzip With this header (in addition to the required headers described under HTTP Request Headers), the call returns the response with gzip compression.


```js
ebay_commerce_taxonomy.getCategorySubtree({
  "category_id": "",
  "category_tree_id": ""
}, context)
```

#### Input
* input `object`
  * category_id **required** `string`: The unique identifier of the category at the top of the subtree being requested. Note: If the category_id submitted identifies the root node of the tree, this call returns an error. To retrieve the complete tree, use this value with the Get a Category Tree call. If the category_id submitted identifies a leaf node of the tree, the call response will contain information about only that leaf node, which is a valid subtree.
  * category_tree_id **required** `string`: The unique identifier of the eBay category tree from which a category subtree is being requested.

#### Output
* output [CategorySubtree](#categorysubtree)

### getCategorySuggestions
This call returns an array of category tree leaf nodes in the specified category tree that are considered by eBay to most closely correspond to the query string q. Returned with each suggested node is a localized name for that category (based on the Accept-Language header specified for the call), and details about each of the category's ancestor nodes, extending from its immediate parent up to the root of the category tree. Note: This call can return a large payload, so you are advised to submit the request with the following HTTP header: &nbsp;&nbsp;Accept-Encoding: application/gzip With this header (in addition to the required headers described under HTTP Request Headers), the call returns the response with gzip compression. You identify the tree using the category_tree_id parameter, which was returned by the Get a Default Category Tree ID call in the categoryTreeId field. Important: This call is not supported in the Sandbox environment. It will return a response payload in which the categoryName fields contain random or boilerplate text regardless of the query submitted.


```js
ebay_commerce_taxonomy.getCategorySuggestions({
  "category_tree_id": "",
  "q": ""
}, context)
```

#### Input
* input `object`
  * category_tree_id **required** `string`: The unique identifier of the eBay category tree for which suggested nodes are being requested.
  * q **required** `string`: A quoted string that describes or characterizes the item being offered for sale. The string format is free form, and can contain any combination of phrases or keywords. eBay will parse the string and return suggested categories for the item.

#### Output
* output [CategorySuggestionResponse](#categorysuggestionresponse)

### getDefaultCategoryTreeId
A given eBay marketplace might use multiple category trees, but one of those trees is considered to be the default for that marketplace. This call retrieves a reference to the default category tree associated with the specified eBay marketplace ID. The response includes only the tree's unique identifier and version, which you can use to retrieve more details about the tree, its structure, and its individual category nodes.


```js
ebay_commerce_taxonomy.getDefaultCategoryTreeId({
  "marketplace_id": ""
}, context)
```

#### Input
* input `object`
  * marketplace_id **required** `string`: The ID of the eBay marketplace for which the category tree ID is being requested. For a list of supported marketplace IDs, see Marketplaces with Default Category Trees.

#### Output
* output [BaseCategoryTree](#basecategorytree)



## Definitions

### AncestorReference
* AncestorReference `object`: This type contains information about one of the ancestors of a suggested category. An ordered list of these references describes the path from the suggested category to the root of the category tree it belongs to.
  * categoryId `string`: The unique identifier of the eBay ancestor category. Note: The root node of a full default category tree includes the categoryId field, but its value should not be relied upon. It provides no useful information for application development.
  * categoryName `string`: The canonical name of the ancestor category identified by categoryId. Note: Don't depend on category names to be unique within a given category tree.
  * categorySubtreeNodeHref `string`: The href portion of the Get a Category Subtree call that retrieves the subtree below the ancestor category node.
  * categoryTreeNodeLevel `integer`: The absolute level of the ancestor category node in the hierarchy of its category tree. Note: The root node of any full category tree is always at level 0.

### BaseCategoryTree
* BaseCategoryTree `object`: This type contains identifying information for the category tree associated with a particular eBay marketplace.
  * categoryTreeId `string`: The unique identifier of the eBay category tree for the specified marketplace.
  * categoryTreeVersion `string`: The version of the category tree identified by categoryTreeId. It's a good idea to cache this value for comparison so you can determine if this category tree has been modified in subsequent calls.

### Category
* Category `object`: This type contains information about a particular eBay product category.
  * categoryId `string`: The unique identifier of the eBay category within its category tree. Note: The root node of a full default category tree includes the categoryId field, but its value should not be relied upon. It provides no useful information for application development.
  * categoryName `string`: The canonical name of the category identified by categoryId. Note: Don't depend on category names to be unique within a given category tree.

### CategorySubtree
* CategorySubtree `object`: This type contains information about a particular subtree of a specified eBay category tree. A category subtree consists of a non-root node of the category tree, and all of its descendants down to the leaf nodes.
  * categorySubtreeNode [CategoryTreeNode](#categorytreenode)
  * categoryTreeId `string`: The unique identifier of the eBay category tree to which this subtree belongs.
  * categoryTreeVersion `string`: The version of the category tree identified by categoryTreeId. It's a good idea to cache this value for comparison so you can determine if this category tree has been modified in subsequent calls.

### CategorySuggestion
* CategorySuggestion `object`: This type contains information about a suggested category tree leaf node that corresponds to keywords provided in the request. It includes details about each of the category's ancestor nodes extending up to the root of the category tree.
  * category [Category](#category)
  * categoryTreeNodeAncestors `array`: An ordered list of category references that describes the location of the suggested category in the specified category tree. The list identifies the category's ancestry as a sequence of parent nodes, from the current node's immediate parent to the root node of the category tree. Note: The root node of a full default category tree includes categoryId and categoryName fields, but their values should not be relied upon. They provide no useful information for application development.
    * items [AncestorReference](#ancestorreference)
  * categoryTreeNodeLevel `integer`: The absolute level of the category tree node in the hierarchy of its category tree. Note: The root node of any full category tree is always at level 0.
  * relevancy `string`: The relevancy classification of the category suggestion. [[DW: Need examples of this value]]

### CategorySuggestionResponse
* CategorySuggestionResponse `object`: This type contains an array of suggested category tree nodes that are considered by eBay to most closely correspond to the keywords provided in a query string, from a specified category tree.
  * categorySuggestions `array`: Contains details about one or more suggested categories that correspond to the provided keywords. The array of suggested categories is sorted in order of eBay's confidence of the relevance of each category (the first category is the most relevant). Important: This call is not supported in the Sandbox environment. It will return a response payload in which the categoryName fields contain random or boilerplate text regardless of the query submitted.
    * items [CategorySuggestion](#categorysuggestion)
  * categoryTreeId `string`: The unique identifier of the eBay category tree from which suggestions are returned.
  * categoryTreeVersion `string`: The version of the category tree identified by categoryTreeId. It's a good idea to cache this value for comparison so you can determine if this category tree has been modified in subsequent calls.

### CategoryTree
* CategoryTree `object`: This type contains information about all nodes of a specified eBay category tree.
  * applicableMarketplaceIds `array`: A list of one or more identifiers of the eBay marketplaces that use this category tree.
    * items `string`:  For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/taxonomy/types/MarketplaceIdEnum.html'>eBay API documentation</a>
  * categoryTreeId `string`: The unique identifier of this eBay category tree.
  * categoryTreeVersion `string`: The version of this category tree. It's a good idea to cache this value for comparison so you can determine if this category tree has been modified in subsequent calls.
  * rootCategoryNode [CategoryTreeNode](#categorytreenode)

### CategoryTreeNode
* CategoryTreeNode `object`: This type contains information about all nodes of a category tree or subtree hierarchy, including and below the specified <b>Category</b>, down to the leaf nodes. It is a recursive structure.
  * category [Category](#category)
  * categoryTreeNodeLevel `integer`: The absolute level of the current category tree node in the hierarchy of its category tree. Note: The root node of any full category tree is always at level 0.
  * childCategoryTreeNodes `array`: An array of one or more category tree nodes that are the immediate children of the current category tree node, as well as their children, recursively down to the leaf nodes. Returned only if the the current category tree node is not a leaf node (the value of leafCategoryTreeNode is false).
    * items [CategoryTreeNode](#categorytreenode)
  * leafCategoryTreeNode `boolean`: A value of true indicates that the current category tree node is a leaf node (it has no child nodes). A value of false indicates that the current node has one or more child nodes, which are identified by the childCategoryTreeNodes array. Returned only if the value of this field is true.
  * parentCategoryTreeNodeHref `string`: The href portion of the Get a Category Subtree call that retrieves the subtree below the parent of this category tree node. Not returned if the current category tree node is the root node of its tree.


