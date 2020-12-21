# @datafire/ebay_commerce_taxonomy

Client library for Taxonomy API

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

.then(data => {
  console.log(data);
});
```

## Description

Use the Taxonomy API to discover the most appropriate eBay categories under which sellers can offer inventory items for sale, and the most likely categories under which buyers can browse or search for items to purchase. In addition, the Taxonomy API provides metadata about the required and recommended category aspects to include in listings, and also has two operations to retrieve parts compatibility information.

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
Note: The General Availability (GA) version of the Taxonomy API has been released. Developers currently using the Beta version should make plans to migrate to the new GA version, as the Beta version will be decommissioned on March 31, 2021. Until that date, the Beta version documentation set can be accessed through the All API Documentation page. This call retrieves the complete category tree that is identified by the category_tree_id parameter. The value of category_tree_id was returned by the getDefaultCategoryTreeId call in the categoryTreeId field. The response contains details of all nodes of the specified eBay category tree, as well as the eBay marketplaces that use this category tree. Note: This call can return a very large payload, so you are strongly advised to submit the request with the following HTTP header: &nbsp;&nbsp;Accept-Encoding: application/gzip With this header (in addition to the required headers described under HTTP Request Headers), the call returns the response with gzip compression.


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

### fetchItemAspects
Note: The General Availability (GA) version of the Taxonomy API has been released. Developers currently using the Beta version should make plans to migrate to the new GA version, as the Beta version will be decommissioned on March 31, 2021. Until that date, the Beta version documentation set can be accessed through the All API Documentation page. This call returns a complete list of aspects for all of the leaf categories that belong to an eBay marketplace. The eBay marketplace is specified through the category_tree_id URI parameter. Note: This call can return a large payload, so the call returns the response as a gzipped JSON file. The open source Taxonomy SDK can be used to compare the aspect metadata that is returned in this response. The bulk download capability that this method provides, when combined with the Taxonomy SDK, brings transparency to the evolution of the metadata.


```js
ebay_commerce_taxonomy.fetchItemAspects({
  "category_tree_id": ""
}, context)
```

#### Input
* input `object`
  * category_tree_id **required** `string`: The unique identifier of the eBay category tree being requested.

#### Output
* output [GetCategoriesAspectResponse](#getcategoriesaspectresponse)

### getCategorySubtree
Note: The General Availability (GA) version of the Taxonomy API has been released. Developers currently using the Beta version should make plans to migrate to the new GA version, as the Beta version will be decommissioned on March 31, 2021. Until that date, the Beta version documentation set can be accessed through the All API Documentation page. This call retrieves the details of all nodes of the category tree hierarchy (the subtree) below a specified category of a category tree. You identify the tree using the category_tree_id parameter, which was returned by the getDefaultCategoryTreeId call in the categoryTreeId field. Note: This call can return a very large payload, so you are strongly advised to submit the request with the following HTTP header: &nbsp;&nbsp;Accept-Encoding: application/gzip With this header (in addition to the required headers described under HTTP Request Headers), the call returns the response with gzip compression.


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
Note: The General Availability (GA) version of the Taxonomy API has been released. Developers currently using the Beta version should make plans to migrate to the new GA version, as the Beta version will be decommissioned on March 31, 2021. Until that date, the Beta version documentation set can be accessed through the All API Documentation page. This call returns an array of category tree leaf nodes in the specified category tree that are considered by eBay to most closely correspond to the query string q. Returned with each suggested node is a localized name for that category (based on the Accept-Language header specified for the call), and details about each of the category's ancestor nodes, extending from its immediate parent up to the root of the category tree. Note: This call can return a large payload, so you are advised to submit the request with the following HTTP header: &nbsp;&nbsp;Accept-Encoding: application/gzip With this header (in addition to the required headers described under HTTP Request Headers), the call returns the response with gzip compression. You identify the tree using the category_tree_id parameter, which was returned by the getDefaultCategoryTreeId call in the categoryTreeId field. Important: This call is not supported in the Sandbox environment. It will return a response payload in which the categoryName fields contain random or boilerplate text regardless of the query submitted.


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

### getCompatibilityProperties
Note: The General Availability (GA) version of the Taxonomy API has been released. Developers currently using the Beta version should make plans to migrate to the new GA version, as the Beta version will be decommissioned on March 31, 2021. Until that date, the Beta version documentation set can be accessed through the All API Documentation page. This call retrieves the compatible vehicle aspects that are used to define a motor vehicle that is compatible with a motor vehicle part or accessory. The values that are retrieved here might include motor vehicle aspects such as 'Make', 'Model', 'Year', 'Engine', and 'Trim', and each of these aspects are localized for the eBay marketplace. The category_tree_id value is passed in as a path parameter, and this value identifies the eBay category tree. The category_id value is passed in as a query parameter, as this parameter is also required. The specified category must be a category that supports parts compatibility. At this time, this operation only supports parts and accessories listings for cars, trucks, and motorcycles (not boats, power sports, or any other vehicle types). Only the following eBay marketplaces support parts compatibility: eBay US (Motors and non-Motors categories) eBay Canada (Motors and non-Motors categories) eBay UK eBay Germany eBay Australia eBay France eBay Italy eBay Spain


```js
ebay_commerce_taxonomy.getCompatibilityProperties({
  "category_tree_id": "",
  "category_id": ""
}, context)
```

#### Input
* input `object`
  * category_tree_id **required** `string`: This is the unique identifier of category tree. The following is the list of category_tree_id values and the eBay marketplaces that they represent. One of these ID values must be passed in as a path parameter, and the category_id value, that is passed in as query parameter, must be a valid eBay category on that eBay marketplace that supports parts compatibility for cars, trucks, or motorcyles. eBay US: 0 eBay Motors US: 100 eBay Canada: 2 eBay UK: 3 eBay Germany: 77 eBay Australia: 15 eBay France: 71 eBay Italy: 101 eBay Spain: 186
  * category_id **required** `string`: The unique identifier of an eBay category. This eBay category must be a valid eBay category on the specified eBay marketplace, and the category must support parts compatibility for cars, trucks, or motorcyles. The getAutomotivePartsCompatibilityPolicies method of the Selling Metadata API can be used to retrieve all eBay categories for an eBay marketplace that supports parts compatibility cars, trucks, or motorcyles. The getAutomotivePartsCompatibilityPolicies method can also be used to see if one or more specific eBay categories support parts compatibility.

#### Output
* output [GetCompatibilityMetadataResponse](#getcompatibilitymetadataresponse)

### getCompatibilityPropertyValues
Note: The General Availability (GA) version of the Taxonomy API has been released. Developers currently using the Beta version should make plans to migrate to the new GA version, as the Beta version will be decommissioned on March 31, 2021. Until that date, the Beta version documentation set can be accessed through the All API Documentation page. This call retrieves applicable compatible vehicle property values based on the specified eBay marketplace, specified eBay category, and filters used in the request. Compatible vehicle properties are returned in the compatibilityProperties.name field of a getCompatibilityProperties response. One compatible vehicle property applicable to the specified eBay marketplace and eBay category is specified through the required compatibility_property filter. Then, the user has the option of further restricting the compatible vehicle property values that are returned in the response by specifying one or more compatible vehicle property name/value pairs through the filter query parameter. See the documentation in URI parameters section for more information on using the compatibility_property and filter query parameters together to customize the data that is retrieved.


```js
ebay_commerce_taxonomy.getCompatibilityPropertyValues({
  "category_tree_id": "",
  "compatibility_property": "",
  "category_id": ""
}, context)
```

#### Input
* input `object`
  * category_tree_id **required** `string`: This is the unique identifier of the category tree. The following is the list of category_tree_id values and the eBay marketplaces that they represent. One of these ID values must be passed in as a path parameter, and the category_id value, that is passed in as query parameter, must be a valid eBay category on that eBay marketplace that supports parts compatibility for cars, trucks, or motorcyles. eBay US: 0 eBay Motors US: 100 eBay Canada: 2 eBay UK: 3 eBay Germany: 77 eBay Australia: 15 eBay France: 71 eBay Italy: 101 eBay Spain: 186
  * compatibility_property **required** `string`: One compatible vehicle property applicable to the specified eBay marketplace and eBay category is specified in this required filter. Compatible vehicle properties are returned in the compatibilityProperties.name field of a getCompatibilityProperties response. For example, if you wanted to retrieve all vehicle trims for a 2018 Toyota Camry, you would set this filter as follows: compatibility_property=Trim; and then include the following three name/value filters through one filter parameter: filter=Year:2018,Make:Toyota,Model:Camry. So, putting this all together, your URI would look something like this: GET https://api.ebay.com/commerce/ taxonomy/v1/category_tree/100/ get_compatibility_property_values? category_id=6016&amp;compatibility_property=Trim &amp;filter=filter=Year:2018,Make:Toyota,Model:Camry
  * category_id **required** `string`: The unique identifier of an eBay category. This eBay category must be a valid eBay category on the specified eBay marketplace, and the category must support parts compatibility for cars, trucks, or motorcyles. The getAutomotivePartsCompatibilityPolicies method of the Selling Metadata API can be used to retrieve all eBay categories for an eBay marketplace that supports parts compatibility cars, trucks, or motorcyles. The getAutomotivePartsCompatibilityPolicies method can also be used to see if one or more specific eBay categories support parts compatibility.
  * filter `string`: One or more compatible vehicle property name/value pairs are passed in through this query parameter. The compatible vehicle property name and corresponding value are delimited with a colon (:), such as filter=Year:2018, and multiple compatible vehicle property name/value pairs are delimited with a comma (,). For example, if you wanted to retrieve all vehicle trims for a 2018 Toyota Camry, you would set the compatibility_property filter as follows: compatibility_property=Trim; and then include the following three name/value filters through one filter parameter: filter=Year:2018,Make:Toyota,Model:Camry. So, putting this all together, your URI would look something like this: GET https://api.ebay.com/commerce/ taxonomy/v1/category_tree/100/ get_compatibility_property_values? category_id=6016&amp;compatibility_property=Trim &amp;filter=filter=Year:2018,Make:Toyota,Model:Camry For implementation help, refer to eBay API documentation at https://developer.ebay.com/api-docs/commerce/taxonomy/types/txn:ConstraintFilter

#### Output
* output [GetCompatibilityPropertyValuesResponse](#getcompatibilitypropertyvaluesresponse)

### getItemAspectsForCategory
Note: The General Availability (GA) version of the Taxonomy API has been released. Developers currently using the Beta version should make plans to migrate to the new GA version, as the Beta version will be decommissioned on March 31, 2021. Until that date, the Beta version documentation set can be accessed through the All API Documentation page. This call returns a list of aspects that are appropriate or necessary for accurately describing items in the specified leaf category. Each aspect identifies an item attribute (for example, color) for which the seller will be required or encouraged to provide a value (or variation values) when offering an item in that category on eBay. For each aspect, getItemAspectsForCategory provides complete metadata, including: The aspect's data type, format, and entry mode Whether the aspect is required in listings Whether the aspect can be used for item variations Whether the aspect accepts multiple values for an item Allowed values for the aspect Use this information to construct an interface through which sellers can enter or select the appropriate values for their items or item variations. Once you collect those values, include them as product aspects when creating inventory items using the Inventory API.


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
Note: The General Availability (GA) version of the Taxonomy API has been released. Developers currently using the Beta version should make plans to migrate to the new GA version, as the Beta version will be decommissioned on March 31, 2021. Until that date, the Beta version documentation set can be accessed through the All API Documentation page. A given eBay marketplace might use multiple category trees, but one of those trees is considered to be the default for that marketplace. This call retrieves a reference to the default category tree associated with the specified eBay marketplace ID. The response includes only the tree's unique identifier and version, which you can use to retrieve more details about the tree, its structure, and its individual category nodes.


```js
ebay_commerce_taxonomy.getDefaultCategoryTreeId({
  "marketplace_id": ""
}, context)
```

#### Input
* input `object`
  * Accept-Language `string`: A header used to indicate the natural language the seller prefers for the response. This specifies the language that the seller wants to use when the field values provided in the request body are displayed to consumers. Note: For details, see Accept-Language in HTTP request headers. Valid Values: For EBAY_CA in French: Accept-Language: fr-CA For EBAY_BE in French: Accept-Language: fr-BE
  * marketplace_id **required** `string`: The ID of the eBay marketplace for which the category tree ID is being requested. For a list of supported marketplace IDs, see Marketplaces with Default Category Trees.

#### Output
* output [BaseCategoryTree](#basecategorytree)



## Definitions

### AncestorReference
* AncestorReference `object`: This type contains information about one of the ancestors of a suggested category. An ordered list of these references describes the path from the suggested category to the root of the category tree it belongs to.
  * categoryId `string`: The unique identifier of the eBay ancestor category. Note: The root node of a full default category tree includes the categoryId field, but its value should not be relied upon. It provides no useful information for application development.
  * categoryName `string`: The name of the ancestor category identified by categoryId.
  * categorySubtreeNodeHref `string`: The href portion of the getCategorySubtree call that retrieves the subtree below the ancestor category node.
  * categoryTreeNodeLevel `integer`: The absolute level of the ancestor category node in the hierarchy of its category tree. Note: The root node of any full category tree is always at level 0.

### Aspect
* Aspect `object`: This type contains information about an item attribute (for example, color) that is appropriate or necessary for accurately describing items in a particular leaf category. Sellers are required or encouraged to provide one or more values of this aspect when offering an item in that category on eBay.
  * aspectConstraint [AspectConstraint](#aspectconstraint)
  * aspectValues `array`: A list of valid values for this aspect (for example: Red, Green, and Blue), along with any constraints on those values.
    * items [AspectValue](#aspectvalue)
  * localizedAspectName `string`: The localized name of this aspect (for example: Colour on the eBay UK site). Note: This name is always localized for the specified marketplace.
  * relevanceIndicator [RelevanceIndicator](#relevanceindicator)

### AspectConstraint
* AspectConstraint `object`: This type contains information about the formatting, occurrence, and support of an aspect.
  * aspectApplicableTo `array`: This value indicate if the aspect identified by the aspects.localizedAspectName field is a product aspect (relevant to catalog products in the category) or an item/instance aspect, which is an aspect whose value will vary based on a particular instance of the product.
    * items `string`:  For implementation help, refer to <a href='https://developer.ebay.com/api-docs/commerce/taxonomy/types/txn:AspectApplicableToEnum'>eBay API documentation</a>
  * aspectDataType `string`: The data type of this aspect. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/commerce/taxonomy/types/txn:AspectDataTypeEnum'>eBay API documentation</a>
  * aspectEnabledForVariations `boolean`: A value of true indicates that this aspect can be used to help identify item variations.
  * aspectFormat `string`: Returned only if the value of aspectDataType identifies a data type that requires specific formatting. Currently, this field provides formatting hints as follows: DATE: YYYY, YYYYMM, YYYYMMDD NUMBER: int32, double
  * aspectMaxLength `integer`: The maximum length of the item/instance aspect's value. The seller must make sure not to exceed this length when specifying the instance aspect's value for a product. This field is only returned for instance aspects.
  * aspectMode `string`: The manner in which values of this aspect must be specified by the seller (as free text or by selecting from available options). For implementation help, refer to <a href='https://developer.ebay.com/api-docs/commerce/taxonomy/types/txn:AspectModeEnum'>eBay API documentation</a>
  * aspectRequired `boolean`: A value of true indicates that this aspect is required when offering items in the specified category.
  * aspectUsage `string`: The enumeration value returned in this field will indicate if the corresponding aspect is recommended or optional. Note: This field is always returned, even for hard-mandated/required aspects (where aspectRequired: true). The value returned for required aspects will be RECOMMENDED, but they are actually required and a seller will be blocked from listing or revising an item without these aspects. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/commerce/taxonomy/types/txn:AspectUsageEnum'>eBay API documentation</a>
  * expectedRequiredByDate `string`: The expected date after which the aspect will be required. Note: The value returned in this field specifies only an approximate date, which may not reflect the actual date after which the aspect is required.
  * itemToAspectCardinality `string`: Indicates whether this aspect can accept single or multiple values for items in the specified category. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/commerce/taxonomy/types/txn:ItemToAspectCardinalityEnum'>eBay API documentation</a>

### AspectMetadata
* AspectMetadata `object`: This type is the container type for the response payload of the <b>getItemAspectsForCategory</b> call.
  * aspects `array`: A list of item aspects (for example, color) that are appropriate or necessary for accurately describing items in a particular leaf category. Each category has a different set of aspects and different requirements for aspect values. Sellers are required or encouraged to provide one or more acceptable values for each aspect when offering an item in that category on eBay.
    * items [Aspect](#aspect)

### AspectValue
* AspectValue `object`: This type contains a valid value for an aspect, along with any constraints on the occurrence of that value.
  * localizedValue `string`: The localized value of this aspect. Note: This value is always localized for the specified marketplace.
  * valueConstraints `array`: Not returned if the value of the localizedValue field can always be selected for this aspect of the specified category. Contains a list of the dependencies that identify when the value of the localizedValue field is available for the current aspect. Each dependency specifies the values of another aspect of the same category (a control aspect), for which the current value of the current aspect can also be selected by the seller. Example: A shirt is available in three sizes and three colors, but only the Small and Medium sizes come in Green. Thus for the Color aspect, the value Green is constrained by its dependency on Size (the control aspect). Only when the Size aspect value is Small or Medium, can the Color aspect value of Green be selected by the seller.
    * items [ValueConstraint](#valueconstraint)

### BaseCategoryTree
* BaseCategoryTree `object`: This type contains identifying information for the category tree associated with a particular eBay marketplace.
  * categoryTreeId `string`: The unique identifier of the eBay category tree for the specified marketplace.
  * categoryTreeVersion `string`: The version of the category tree identified by categoryTreeId. It's a good idea to cache this value for comparison so you can determine if this category tree has been modified in subsequent calls.

### Category
* Category `object`: This type contains information about a particular eBay category.
  * categoryId `string`: The unique identifier of the eBay category within its category tree. Note: The root node of a full default category tree includes the categoryId field, but its value should not be relied upon. It provides no useful information for application development.
  * categoryName `string`: The name of the category identified by categoryId.

### CategoryAspect
* CategoryAspect `object`
  * aspects `array`: A list of aspect metadata that is used to describe the items in a particular leaf category.
    * items [Aspect](#aspect)
  * category [Category](#category)

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
    * items `string`:  For implementation help, refer to <a href='https://developer.ebay.com/api-docs/commerce/taxonomy/types/bas:MarketplaceIdEnum'>eBay API documentation</a>
  * categoryTreeId `string`: The unique identifier of this eBay category tree.
  * categoryTreeVersion `string`: The version of this category tree. It's a good idea to cache this value for comparison so you can determine if this category tree has been modified in subsequent calls.
  * rootCategoryNode [CategoryTreeNode](#categorytreenode)

### CategoryTreeNode
* CategoryTreeNode `object`: This type contains information about all nodes of a category tree or subtree hierarchy, including and below the specified <b>Category</b>, down to the leaf nodes. It is a recursive structure.
  * category [Category](#category)
  * categoryTreeNodeLevel `integer`: The absolute level of the current category tree node in the hierarchy of its category tree. Note: The root node of any full category tree is always at level 0.
  * childCategoryTreeNodes `array`: An array of one or more category tree nodes that are the immediate children of the current category tree node, as well as their children, recursively down to the leaf nodes. Returned only if the current category tree node is not a leaf node (the value of leafCategoryTreeNode is false).
    * items [CategoryTreeNode](#categorytreenode)
  * leafCategoryTreeNode `boolean`: A value of true indicates that the current category tree node is a leaf node (it has no child nodes). A value of false indicates that the current node has one or more child nodes, which are identified by the childCategoryTreeNodes array. Returned only if the value of this field is true.
  * parentCategoryTreeNodeHref `string`: The href portion of the getCategorySubtree call that retrieves the subtree below the parent of this category tree node. Not returned if the current category tree node is the root node of its tree.

### CompatibilityProperty
* CompatibilityProperty `object`: This type is used by the <strong>compatibilityProperties</strong> array that is returned in the <strong>getCompatibilityProperties</strong> call. The <strong>compatibilityProperties</strong> container consists of an array of all compatible vehicle properties applicable to the specified eBay marketplace and eBay category ID.
  * localizedName `string`: This is the localized name of the compatible vehicle property. The language that is used will depend on the user making the call, or based on the language specified if the Content-Language HTTP header is used. In some instances, the string value in this field may be the same as the string in the corresponding name field.
  * name `string`: This is the actual name of the compatible vehicle property as it is known on the specified eBay marketplace and in the eBay category. This is the string value that should be used in the compatibility_property and filter query parameters of a getCompatibilityPropertyValues request URI. Typical vehicle properties are 'Make', 'Model', 'Year', 'Engine', and 'Trim', but will vary based on the eBay marketplace and the eBay category.

### CompatibilityPropertyValue
* CompatibilityPropertyValue `object`: This type is used by the <strong>compatibilityPropertyValues</strong> array that is returned in the <strong>getCompatibilityPropertyValues</strong> response. The <strong>compatibilityPropertyValues</strong> array contains all compatible vehicle property values that match the specified eBay marketplace, specified eBay category, and filters in the request. If the <strong>compatibility_property</strong> parameter value in the request is 'Trim', each value returned in each <strong>value</strong> field will be a different vehicle trim, applicable to any filters that are set in the <string>filter</string> query parameter of the request, and also based on the eBay marketplace and category specified in the call request.
  * value `string`: Each value field shows one applicable compatible vehicle property value. The values that are returned will depend on the specified eBay marketplace, specified eBay category, and filters in the request.

### GetCategoriesAspectResponse
* GetCategoriesAspectResponse `object`
  * categoryAspects `array`: An array of aspects that are appropriate or necessary for accurately describing items in a particular leaf category.
    * items [CategoryAspect](#categoryaspect)
  * categoryTreeId `string`: The unique identifier of the eBay category tree being requested.
  * categoryTreeVersion `string`: The version of the category tree that is returned in the categoryTreeId field.

### GetCompatibilityMetadataResponse
* GetCompatibilityMetadataResponse `object`: This type is used by the base response of the <strong>getCompatibilityProperties</strong> method.
  * compatibilityProperties `array`: This container consists of an array of all compatible vehicle properties applicable to the specified eBay marketplace and eBay category ID.
    * items [CompatibilityProperty](#compatibilityproperty)

### GetCompatibilityPropertyValuesResponse
* GetCompatibilityPropertyValuesResponse `object`: The base response type of the <strong>getCompatibilityPropertyValues</strong> method.
  * compatibilityPropertyValues `array`: This array contains all compatible vehicle property values that match the specified eBay marketplace, specified eBay category, and filters in the request. If the compatibility_property parameter value in the request is 'Trim', each value returned in each value field will be a different vehicle trim, applicable to any filters that are set in the filter query parameter of the request, and also based on the eBay marketplace and category specified in the call request.
    * items [CompatibilityPropertyValue](#compatibilitypropertyvalue)

### RelevanceIndicator
* RelevanceIndicator `object`: The relevance of this aspect. This field is returned if eBay has data on how many searches have been performed for listings in the category using this item aspect.<br /><br /><span class="tablenote"> <strong>Note:</strong> This container is restricted to applications that have been granted permission to access this feature. You must submit an <a href="https://developer.ebay.com/my/support/tickets?tab=app-check">App Check ticket</a> to request this access. In the App Check form, add a note to the <b>Application Title/Summary</b> and/or <b>Application Details</b> fields that you want access to 'Buyer Demand Data' in the Taxonomy API.</span>
  * searchCount `integer`: The number of recent searches (based on 30 days of data) for the aspect.

### ValueConstraint
* ValueConstraint `object`: This type contains a list of the dependencies that identify when a particular value is available for a given aspect of a given category. Each dependency specifies the values of another aspect of the same category (the <i>control</i> aspect), for which the given value of the given aspect can also be selected by the seller. This container consists of constraint information for the corresponding product aspect value.
  * applicableForLocalizedAspectName `string`: The name of the control aspect on which the current aspect value depends.
  * applicableForLocalizedAspectValues `array`: Contains a list of the values of the control aspect on which this aspect's value depends. When the control aspect has any of the specified values, the current value of the current aspect will also be available.
    * items `string`


