# @datafire/ebay_commerce_taxonomy

Client library for Commerce Taxonomy

## Installation and Usage
```bash
npm install --save datafire @datafire/ebay_commerce_taxonomy
```

```js
let datafire = require('datafire');
let ebay_commerce_taxonomy = require('@datafire/ebay_commerce_taxonomy').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
});

ebay_commerce_taxonomy.getCategoryTree({}).then(data => {
  console.log(data);
})
```

## Description
The Commerce Taxonomy API helps sellers determine the best eBay category when listing their inventory and buyers to determine the appropriate categories in which to browse or search.

## Actions
### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
ebay_commerce_taxonomy.oauthCallback({
  "code": ""
}, context)
```

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
ebay_commerce_taxonomy.oauthRefresh(null, context)
```

#### Parameters
*This action has no parameters*

### getCategoryTree
This call retrieves the complete category tree that is identified by the category_tree_id parameter. The value of category_tree_id was returned by the Get a Default Category Tree ID call in the categoryTreeId field. The response contains details of all nodes of the specified eBay category tree, as well as the eBay marketplaces that use this category tree. Note: This call can return a very large payload, so you are strongly advised to submit the request with the following HTTP header: &nbsp;&nbsp;Accept-Encoding: application/gzip With this header (in addition to the required headers described under HTTP Request Headers), the call returns the response with gzip compression.


```js
ebay_commerce_taxonomy.getCategoryTree({
  "category_tree_id": ""
}, context)
```

#### Parameters
* category_tree_id (string) **required** - The unique identifier of the eBay category tree being requested.

### getCategorySubtree
This call retrieves the details of all nodes of the category tree hierarchy (the subtree) below a specified category of a category tree. You identify the tree using the category_tree_id parameter, which was returned by the Get a Default Category Tree ID call in the categoryTreeId field. Note: This call can return a very large payload, so you are strongly advised to submit the request with the following HTTP header: &nbsp;&nbsp;Accept-Encoding: application/gzip With this header (in addition to the required headers described under HTTP Request Headers), the call returns the response with gzip compression.


```js
ebay_commerce_taxonomy.getCategorySubtree({
  "category_id": "",
  "category_tree_id": ""
}, context)
```

#### Parameters
* category_id (string) **required** - The unique identifier of the category at the top of the subtree being requested. Note: If the category_id submitted identifies the root node of the tree, this call returns an error. To retrieve the complete tree, use this value with the Get a Category Tree call. If the category_id submitted identifies a leaf node of the tree, the call response will contain information about only that leaf node, which is a valid subtree.
* category_tree_id (string) **required** - The unique identifier of the eBay category tree from which a category subtree is being requested.

### getCategorySuggestions
This call returns an array of category tree leaf nodes in the specified category tree that are considered by eBay to most closely correspond to the query string q. Returned with each suggested node is a localized name for that category (based on the Accept-Language header specified for the call), and details about each of the category's ancestor nodes, extending from its immediate parent up to the root of the category tree. Note: This call can return a large payload, so you are advised to submit the request with the following HTTP header: &nbsp;&nbsp;Accept-Encoding: application/gzip With this header (in addition to the required headers described under HTTP Request Headers), the call returns the response with gzip compression. You identify the tree using the category_tree_id parameter, which was returned by the Get a Default Category Tree ID call in the categoryTreeId field. Important: This call is not supported in the Sandbox environment. It will return a response payload in which the categoryName fields contain random or boilerplate text regardless of the query submitted.


```js
ebay_commerce_taxonomy.getCategorySuggestions({
  "category_tree_id": "",
  "q": ""
}, context)
```

#### Parameters
* category_tree_id (string) **required** - The unique identifier of the eBay category tree for which suggested nodes are being requested.
* q (string) **required** - A quoted string that describes or characterizes the item being offered for sale. The string format is free form, and can contain any combination of phrases or keywords. eBay will parse the string and return suggested categories for the item.

### getDefaultCategoryTreeId
A given eBay marketplace might use multiple category trees, but one of those trees is considered to be the default for that marketplace. This call retrieves a reference to the default category tree associated with the specified eBay marketplace ID. The response includes only the tree's unique identifier and version, which you can use to retrieve more details about the tree, its structure, and its individual category nodes.


```js
ebay_commerce_taxonomy.getDefaultCategoryTreeId({
  "marketplace_id": ""
}, context)
```

#### Parameters
* marketplace_id (string) **required** - The ID of the eBay marketplace for which the category tree ID is being requested. For a list of supported marketplace IDs, see Marketplaces with Default Category Trees.

