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

ebay_commerce_taxonomy.getCategoryTree({
  "category_tree_id": ""
}).then(data => {
  console.log(data);
});
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
This call retrieves the complete category tree that is identified by the category_tree_id parameter. The value of category_tree_id was returned by the getDefaultCategoryTreeId call in the categoryTreeId field. The response contains details of all nodes of the specified eBay category tree, as well as the eBay marketplaces that use this category tree. Note: This call can return a very large payload, so you are strongly advised to submit the request with the following HTTP header: &nbsp;&nbsp;Accept-Encoding: application/gzip With this header (in addition to the required headers described under HTTP Request Headers), the call returns the response with gzip compression.


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
This call retrieves the details of all nodes of the category tree hierarchy (the subtree) below a specified category of a category tree. You identify the tree using the category_tree_id parameter, which was returned by the getDefaultCategoryTreeId call in the categoryTreeId field. Note: This call can return a very large payload, so you are strongly advised to submit the request with the following HTTP header: &nbsp;&nbsp;Accept-Encoding: application/gzip With this header (in addition to the required headers described under HTTP Request Headers), the call returns the response with gzip compression.


```js
ebay_commerce_taxonomy.getCategorySubtree({
  "category_id": "",
  "category_tree_id": ""
}, context)
```

#### Input
* input `object`
  * category_id **required** `string`: The unique identifier of the category at the top of the subtree being requested. Note: If the category_id submitted identifies the root node of the tree, this call returns an error. To retrieve the complete tree, use this value with the getCategoryTree call. If the category_id submitted identifies a leaf node of the tree, the call response will contain information about only that leaf node, which is a valid subtree.
  * category_tree_id **required** `string`: The unique identifier of the eBay category tree from which a category subtree is being requested.

#### Output
* output [CategorySubtree](#categorysubtree)

### getCategorySuggestions
This call returns an array of category tree leaf nodes in the specified category tree that are considered by eBay to most closely correspond to the query string q. Returned with each suggested node is a localized name for that category (based on the Accept-Language header specified for the call), and details about each of the category's ancestor nodes, extending from its immediate parent up to the root of the category tree. Note: This call can return a large payload, so you are advised to submit the request with the following HTTP header: &nbsp;&nbsp;Accept-Encoding: application/gzip With this header (in addition to the required headers described under HTTP Request Headers), the call returns the response with gzip compression. You identify the tree using the category_tree_id parameter, which was returned by the getDefaultCategoryTreeId call in the categoryTreeId field. Important: This call is not supported in the Sandbox environment. It will return a response payload in which the categoryName fields contain random or boilerplate text regardless of the query submitted.


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

### getItemAspectsForCategory
This call returns a list of aspects that are appropriate or necessary for accurately describing items in the specified leaf category. Each aspect identifies an item attribute (for example, color) for which the seller will be required or encouraged to provide a value (or variation values) when offering an item in that category on eBay. For each aspect, getItemAspectsForCategory provides complete metadata, including: The aspect's data type, format, and entry mode Whether the aspect is required in listings Whether the aspect can be used for item variations Whether the aspect accepts multiple values for an item Allowed values for the aspectUse this information to construct an interface through which sellers can enter or select the appropriate values for their items or item variations. Once you collect those values, include them as product aspects when creating inventory items using the Inventory API.


```js
ebay_commerce_taxonomy.getItemAspectsForCategory({
  "category_id": "",
  "category_tree_id": ""
}, context)
```

#### Input
* input `object`
  * category_id **required** `string`: The unique identifier of the leaf category for which aspects are being requested. Note: If the category_id submitted does not identify a leaf node of the tree, this call returns an error.
  * category_tree_id **required** `string`: The unique identifier of the eBay category tree from which the specified category's aspects are being requested.

#### Output
* output [AspectMetadata](#aspectmetadata)

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
  * categorySubtreeNodeHref `string`: The href portion of the getCategorySubtree call that retrieves the subtree below the ancestor category node.
  * categoryTreeNodeLevel `integer`: The absolute level of the ancestor category node in the hierarchy of its category tree. Note: The root node of any full category tree is always at level 0.

### Aspect
* Aspect `object`: This type contains information about a item attribute (for example, color) that is appropriate or necessary for accurately describing items in a particular leaf category. Sellers will be required or encouraged to provide one or more values of this aspect when offering an item in that category on eBay.
  * aspectConstraint [AspectConstraint](#aspectconstraint)
  * aspectValues `array`: Contains a list of valid values for this aspect (for example: Red, Green, and Blue), along with any constraints on those values.
    * items [AspectValue](#aspectvalue)
  * localizedAspectName `string`: The localized name of this aspect (for example: colour on the eBay UK site). Note: This name is always localized for the specified marketplace. There is no canonical aspect name.

### AspectConstraint
* AspectConstraint `object`: This type contains information about the formatting, occurrence, and support of an aspect.
  * aspectDataType `string`: The data type of this aspect. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/taxonomy/types/AspectDataTypeEnum.html'>eBay API documentation</a>
  * aspectEnabledForVariations `boolean`: A value of true indicates that this aspect can be used to help identify item variations.
  * aspectFormat `string`: Returned only if the value of aspectDataType identifies a data type that requires specific formatting. Currently, this field provides formatting hints as follows: DATE: YYYY, YYYYMM, YYYYMMDD NUMBER: int32, double
  * aspectMode `string`: The manner in which values of this aspect must be specified by the seller (as free text or by selecting from available options). For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/taxonomy/types/AspectModeEnum.html'>eBay API documentation</a>
  * aspectRequired `boolean`: A value of true indicates that this aspect is required when offering items in the specified category.
  * itemToAspectCardinality `string`: Indicates whether this aspect can accept single or multiple values for items in the specified category. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/taxonomy/types/ItemToAspectCardinalityEnum.html'>eBay API documentation</a>

### AspectMetadata
* AspectMetadata `object`: This type is the container type for the response payload of the <b>getItemAspectsForCategory</b> call.
  * aspects `array`: A list of item attributes (for example, color) that are appropriate or necessary for accurately describing items in a particular leaf category. Each category has a different set of aspects and different requirements for aspect values. Sellers will be required or encouraged to provide one or more acceptable values for each aspect when offering an item in that category on eBay.
    * items [Aspect](#aspect)

### AspectValue
* AspectValue `object`: This type contains a valid value for an aspect, along with any constraints on the occurrence of that value.
  * localizedValue `string`: The localized value of this aspect. Note: This value is always localized for the specified marketplace. There is no canonical version of this value.
  * valueConstraints `array`: Not returned if the value of the localizedValue field can always be selected for this aspect of the specified category. Contains a list of the dependencies that identify when the value of the localizedValue field is available for the current aspect. Each dependency specifies the values of another aspect of the same category (a control aspect), for which the current value of the current aspect can also be selected by the seller. Example: A shirt is available in three sizes and three colors, but only the Small and Medium sizes come in Green. Thus for the Color aspect, the value Green is constrained by its dependency on Size (the control aspect). Only when the Size aspect value is Small or Medium, can the Color aspect value of Green be selected by the seller.
    * items [ValueConstraint](#valueconstraint)

### BaseCategoryTree
* BaseCategoryTree `object`: This type contains identifying information for the category tree associated with a particular eBay marketplace.
  * categoryTreeId `string`: The unique identifier of the eBay category tree for the specified marketplace.
  * categoryTreeVersion `string`: The version of the category tree identified by categoryTreeId. It's a good idea to cache this value for comparison so you can determine if this category tree has been modified in subsequent calls.

### Category
* Category `object`: This type contains information about a particular eBay category.
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
  * relevancy `string`: This field is reserved for internal or future use.

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
  * parentCategoryTreeNodeHref `string`: The href portion of the getCategorySubtree call that retrieves the subtree below the parent of this category tree node. Not returned if the current category tree node is the root node of its tree.

### ValueConstraint
* ValueConstraint `object`: This type contains a list of the dependencies that identify when a particular value is available for a given aspect of a given category. Each dependency specifies the values of another aspect of the same category (the <i>control</i> aspect), for which the given value of the given aspect can also be selected by the seller.
  * applicableForLocalizedAspectName `string`: The name of the control aspect on which the current aspect value depends.
  * applicableForLocalizedAspectValues `array`: Contains a list of the values of the control aspect on which this aspect's value depends. When the control aspect has any of the specified values, the current value of the current aspect will also be available.
    * items `string`


