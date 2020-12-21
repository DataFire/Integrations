# @datafire/ebay_sell_metadata

Client library for Metadata API

## Installation and Usage
```bash
npm install --save @datafire/ebay_sell_metadata
```
```js
let ebay_sell_metadata = require('@datafire/ebay_sell_metadata').create({
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

The Metadata API has operations that retrieve configuration details pertaining to the different eBay marketplaces. In addition to marketplace information, the API also has operations that get information that helps sellers list items on eBay.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
ebay_sell_metadata.oauthCallback({
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
ebay_sell_metadata.oauthRefresh(null, context)
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

### getSalesTaxJurisdictions
This method retrieves all the sales tax jurisdictions for the country that you specify in the countryCode path parameter. Countries with valid sales tax jurisdictions are Canada and the US. The response from this call tells you the jurisdictions for which a seller can configure tax tables. Although setting up tax tables is optional, you can use the createOrReplaceSalesTax in the Account API call to configure the tax tables for the jurisdictions you sell to.


```js
ebay_sell_metadata.getSalesTaxJurisdictions({
  "countryCode": ""
}, context)
```

#### Input
* input `object`
  * countryCode **required** `string`: This path parameter specifies the two-letter ISO 3166-1 Alpha-2 country code for the country whose jurisdictions you want to retrieve. eBay provides sales tax jurisdiction information for Canada and the United States. Valid values for this path parameter are CA and US.

#### Output
* output [SalesTaxJurisdictions](#salestaxjurisdictions)

### getAutomotivePartsCompatibilityPolicies
This method returns the eBay policies that a seller must adhere to when creating listings enabled with parts compatibility. By using the Parts Compatiblity feature, a seller is able to tell prospective buyers whether an automotive part or accessory item will fit their specific vehicle. By default, this method returns the entire category tree for the specified marketplace. You can limit the size of the result set by using the filter query parameter to specify only the category IDs you want to review. See the Parts Compatibility Listings page for more information about how Parts Compatibility works when creating listings. Tip: This method can return a very large response payload and we strongly recommend you get the results from this call in a GZIP file by including the following HTTP header with your request: &nbsp;&nbsp;Accept-Encoding: application/gzip


```js
ebay_sell_metadata.getAutomotivePartsCompatibilityPolicies({
  "marketplace_id": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: This query parameter limits the response by returning policy information for only the selected sections of the category tree. Supply categoryId values for the sections of the tree you want returned. When you specify a categoryId value, the returned category tree includes the policies for that parent node, plus the policies for any leaf nodes below that parent node. The parameter takes a list of categoryId values and you can specify up to 50 separate category IDs. Separate multiple values with a pipe character ('|'). If you specify more than 50 categoryId values, eBay returns the policies for the first 50 IDs and a warning that not all categories were returned. Example: filter=categoryIds:{100|101|102} Note that you must URL-encode the parameter list, which results in the following filter for the above example: &nbsp;&nbsp;filter=categoryIds%3A%7B100%7C101%7C102%7D
  * marketplace_id **required** `string`: This path parameter specifies the eBay marketplace for which policy information is retrieved. Note: Only the following eBay marketplaces support automotive parts compatibility: EBAY_US EBAY_AU EBAY_CA EBAY_DE EBAY_ES EBAY_FR EBAY_GB EBAY_IT

#### Output
* output [AutomotivePartsCompatibilityPolicyResponse](#automotivepartscompatibilitypolicyresponse)

### getItemConditionPolicies
This method returns the eBay policies that define how to specify item conditions in the categories of a specific marketplace. By default, this method returns the entire category tree for the specified marketplace. You can limit the size of the result set by using the filter query parameter to specify only the category IDs you want to review. Tip: This method can return a very large response payload and we strongly recommend you get the results from this call in a GZIP file by including the following HTTP header with your request: &nbsp;&nbsp;Accept-Encoding: application/gzip


```js
ebay_sell_metadata.getItemConditionPolicies({
  "marketplace_id": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: This query parameter limits the response by returning policy information for only the selected sections of the category tree. Supply categoryId values for the sections of the tree you want returned. When you specify a categoryId value, the returned category tree includes the policies for that parent node, plus the policies for any leaf nodes below that parent node. The parameter takes a list of categoryId values and you can specify up to 50 separate category IDs. Separate multiple values with a pipe character ('|'). If you specify more than 50 categoryId values, eBay returns the policies for the first 50 IDs and a warning that not all categories were returned. Example: filter=categoryIds:{100|101|102} Note that you must URL-encode the parameter list, which results in the following filter for the above example: &nbsp;&nbsp;filter=categoryIds%3A%7B100%7C101%7C102%7D
  * marketplace_id **required** `string`: This path parameter specifies the eBay marketplace for which policy information is retrieved. See the following page for a list of valid eBay marketplace IDs: Request components.

#### Output
* output [ItemConditionPolicyResponse](#itemconditionpolicyresponse)

### getListingStructurePolicies
This method returns the eBay policies that define the allowed listing structures for the categories of a specific marketplace. The listing-structure policies currently pertain to whether or not you can list items with variations. By default, this method returns the entire category tree for the specified marketplace. You can limit the size of the result set by using the filter query parameter to specify only the category IDs you want to review. Tip: This method can return a very large response payload and we strongly recommend you get the results from this call in a GZIP file by including the following HTTP header with your request: &nbsp;&nbsp;Accept-Encoding: application/gzip


```js
ebay_sell_metadata.getListingStructurePolicies({
  "marketplace_id": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: This query parameter limits the response by returning policy information for only the selected sections of the category tree. Supply categoryId values for the sections of the tree you want returned. When you specify a categoryId value, the returned category tree includes the policies for that parent node, plus the policies for any leaf nodes below that parent node. The parameter takes a list of categoryId values and you can specify up to 50 separate category IDs. Separate multiple values with a pipe character ('|'). If you specify more than 50 categoryId values, eBay returns the policies for the first 50 IDs and a warning that not all categories were returned. Example: filter=categoryIds:{100|101|102} Note that you must URL-encode the parameter list, which results in the following filter for the above example: &nbsp;&nbsp;filter=categoryIds%3A%7B100%7C101%7C102%7D
  * marketplace_id **required** `string`: This path parameter specifies the eBay marketplace for which policy information is retrieved. See the following page for a list of valid eBay marketplace IDs: Request components.

#### Output
* output [ListingStructurePolicyResponse](#listingstructurepolicyresponse)

### getNegotiatedPricePolicies
This method returns the eBay policies that define the supported negotiated price features (like &quot;best offer&quot;) for the categories of a specific marketplace. By default, this method returns the entire category tree for the specified marketplace. You can limit the size of the result set by using the filter query parameter to specify only the category IDs you want to review. Tip: This method can return a very large response payload and we strongly recommend you get the results from this call in a GZIP file by including the following HTTP header with your request: &nbsp;&nbsp;Accept-Encoding: application/gzip


```js
ebay_sell_metadata.getNegotiatedPricePolicies({
  "marketplace_id": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: This query parameter limits the response by returning policy information for only the selected sections of the category tree. Supply categoryId values for the sections of the tree you want returned. When you specify a categoryId value, the returned category tree includes the policies for that parent node, plus the policies for any leaf nodes below that parent node. The parameter takes a list of categoryId values and you can specify up to 50 separate category IDs. Separate multiple values with a pipe character ('|'). If you specify more than 50 categoryId values, eBay returns the policies for the first 50 IDs and a warning that not all categories were returned. Example: filter=categoryIds:{100|101|102} Note that you must URL-encode the parameter list, which results in the following filter for the above example: &nbsp;&nbsp;filter=categoryIds%3A%7B100%7C101%7C102%7D
  * marketplace_id **required** `string`: This path parameter specifies the eBay marketplace for which policy information is retrieved. See the following page for a list of valid eBay marketplace IDs: Request components.

#### Output
* output [NegotiatedPricePolicyResponse](#negotiatedpricepolicyresponse)

### getProductAdoptionPolicies
This method retrieves a list of leaf categories for a marketplace and identifies the categories that require items to have an eBay product ID value in order to be listed in those categories. An eBay product ID value (known as an &quot;ePID&quot;) is a value that references a specific product in the eBay Catalog. Note: This method supports the eBay Product Based Shopping Experience (PBSE), which is applicable to only the US, UK, AU, and CA (English) marketplaces. Note that you can also use GetCategoryFeatures in the Trading API to retrieve similar information. For more information about using this method with PBSE, see the Product-Based Shopping Experience Playbook. Use the marketplace_id path parameter to specify the marketplace you want to review and use the filter query parameter to limit the categories returned in the response. Tip: This method can return a very large response payload and we strongly recommend you get the results from this call in a GZIP file by including the following HTTP header with your request: &nbsp;&nbsp;Accept-Encoding: application/gzip


```js
ebay_sell_metadata.getProductAdoptionPolicies({
  "marketplace_id": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: This query parameter limits the response by returning policy information for only the selected sections of the category tree. Supply categoryId values for the sections of the tree you want returned. When you specify a categoryId value, the returned category tree includes the policies for that parent node, plus the policies for any leaf nodes below that parent node. The parameter takes a list of categoryId values and you can specify up to 50 separate category IDs. Separate multiple values with a pipe character ('|'). If you specify more than 50 categoryId values, eBay returns the policies for the first 50 IDs and a warning that not all categories were returned. Example: filter=categoryIds:{100|101|102} Note that you must URL-encode the parameter list, which results in the following filter for the above example: &nbsp;&nbsp;filter=categoryIds%3A%7B100%7C101%7C102%7D
  * marketplace_id **required** `string`: This path parameter specifies the eBay marketplace for which policy information is retrieved. See the following page for a list of valid eBay marketplace IDs: Request components.

#### Output
* output [ProductAdoptionPolicyResponse](#productadoptionpolicyresponse)

### getReturnPolicies
This method returns the eBay policies that define whether or not you must include a return policy for the items you list in the categories of a specific marketplace, plus the guidelines for creating domestic and international return policies in the different eBay categories. By default, this method returns the entire category tree for the specified marketplace. You can limit the size of the result set by using the filter query parameter to specify only the category IDs you want to review. Tip: This method can return a very large response payload and we strongly recommend you get the results from this call in a GZIP file by including the following HTTP header with your request: &nbsp;&nbsp;Accept-Encoding: application/gzip


```js
ebay_sell_metadata.getReturnPolicies({
  "marketplace_id": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: This query parameter limits the response by returning policy information for only the selected sections of the category tree. Supply categoryId values for the sections of the tree you want returned. When you specify a categoryId value, the returned category tree includes the policies for that parent node, plus the policies for any leaf nodes below that parent node. The parameter takes a list of categoryId values and you can specify up to 50 separate category IDs. Separate multiple values with a pipe character ('|'). If you specify more than 50 categoryId values, eBay returns the policies for the first 50 IDs and a warning that not all categories were returned. Example: filter=categoryIds:{100|101|102} Note that you must URL-encode the parameter list, which results in the following filter for the above example: &nbsp;&nbsp;filter=categoryIds%3A%7B100%7C101%7C102%7D
  * marketplace_id **required** `string`: This path parameter specifies the eBay marketplace for which policy information is retrieved. See the following page for a list of valid eBay marketplace IDs: Request components.

#### Output
* output [ReturnPolicyResponse](#returnpolicyresponse)



## Definitions

### AutomotivePartsCompatibilityPolicy
* AutomotivePartsCompatibilityPolicy `object`
  * categoryId `string`: The category ID to which the automotive-parts-compatibility policies apply.
  * categoryTreeId `string`: A value that indicates the root node of the category tree used for the response set. Each marketplace is based on a category tree whose root node is indicated by this unique category ID value. All category policy information returned by this call pertains to the categories included below this root node of the tree. A category tree is a hierarchical framework of eBay categories that begins at the root node of the tree and extends to include all the child nodes in the tree. Each child node in the tree is an eBay category that is represented by a unique categoryId value. Within a category tree, the root node has no parent node and leaf nodes are nodes that have no child nodes.
  * compatibilityBasedOn `string`: Indicates whether the category supports parts compatibility by either ASSEMBLY or by SPECIFICATION. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/metadata/types/sel:CompatibilityTypeEnum'>eBay API documentation</a>
  * compatibleVehicleTypes `array`: Indicates the compatibility classification of the part based on high-level vehicle types.
    * items `string`:  For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/metadata/types/sel:CompatibleVehicleTypeEnum'>eBay API documentation</a>
  * maxNumberOfCompatibleVehicles `integer`: Specifies the maximum number of compatible vehicle-applications allowed per item.

### AutomotivePartsCompatibilityPolicyResponse
* AutomotivePartsCompatibilityPolicyResponse `object`
  * automotivePartsCompatibilityPolicies `array`: A list of category IDs and the automotive-parts-compatibility policies for each of the listed categories.
    * items [AutomotivePartsCompatibilityPolicy](#automotivepartscompatibilitypolicy)
  * warnings `array`: A list of the warnings that were generated as a result of the request. This field is not returned if no warnings were generated by the request.
    * items [Error](#error)

### Error
* Error `object`: A container that defines the elements of error and warning messages.
  * parameters `array`: This optional complex field type contains a list of one or more context-specific ErrorParameter objects, with each item in the list entry being a parameter (or input field name) that caused an error condition. Each ErrorParameter object consists of two fields, a name and a value.
    * items [ErrorParameter](#errorparameter)
  * category `string`: The category type for this error or warning. It takes an ErrorCategory object which can have one of three values: Application: Indicates an exception or error occurred in the application code or at runtime. Examples include catching an exception in a service's business logic, system failures, or request errors from a dependency. Business: Used when your service or a dependent service refused to continue processing on the resource because of a business rule violation such as &quot;Seller does not ship item to Antarctica&quot; or &quot;Buyer ineligible to purchase an alcoholic item&quot;. Business errors are not syntactical input errors. Request: Used when there is anything wrong with the request, such as authentication, syntactical errors, rate limiting or missing headers, bad HTTP header values, and so on.
  * domain `string`: Name of the domain containing the service or application.
  * errorId `integer`: A positive integer that uniquely identifies the specific error condition that occurred. Your application can use error codes as identifiers in your customized error-handling algorithms.
  * inputRefIds `array`: Identifies specific request elements associated with the error, if any. inputRefId's response is format specific. For JSON, use JSONPath notation.
    * items `string`
  * longMessage `string`: An expanded version of message that should be around 100-200 characters long, but is not required to be such.
  * message `string`: An end user and app developer friendly device agnostic message. It explains what the error or warning is, and how to fix it (in a general sense). Its value is at most 50 characters long. If applicable, the value is localized in the end user's requested locale.
  * outputRefIds `array`: Identifies specific response elements associated with the error, if any. Path format is the same as inputRefId.
    * items `string`
  * subdomain `string`: Name of the domain's subsystem or subdivision. For example, checkout is a subdomain in the buying domain.

### ErrorParameter
* ErrorParameter `object`: Container for a error parameter.
  * name `string`: Name of the entity that threw the error.
  * value `string`: A description of the error.

### Exclusion
* Exclusion `object`: This type returns a list of properties (and their associated values) that are excluded from requiring an ePID value (from the eBay Catalog) for items that are listed in the associated category.
  * brands `array`: A list of brands that are excluded from requiring a link to the eBay Catalog for the associated categoryId. If productRequired is set to true, items that are of a brand returned in this field are excluded from the need to specify a value for the ePID field in their item description in order to be listed in the associated category.
    * items `string`

### ItemCondition
* ItemCondition `object`: Note: In the US and Australian marketplaces, Condition ID 2000 now maps to an item condition of 'Certified Refurbished', but this item condition is only available for use for a select number of US and Australian sellers. Other sellers on these two marketplaces will be blocked if they try to create a new listing or revise an existing listing with this item condition. Any active listings on the US and Australian marketplaces that had 'Manufacturer Refurbished' as the item condition should have been automatically updated by eBay to the 'Seller Refurbished' item condition (Condition ID 2500). For all other marketplaces besides the US and Australia, Condition ID 2000 still maps to 'Manufacturer Refurbished'. Any US or Australian seller that is interested in eligibility requirements to list with 'Certified Refurbished' should see the Certified refurbished program page in Seller Center.
  * conditionDescription `string`: The human-readable label for the condition (e.g., &quot;New&quot;). This value is typically localized for each site. Note that the display name can vary by category. For example, the description for condition ID 1000 could be called &quot;New: with Tags&quot; in one category and &quot;Brand New&quot; in another. For details on condition IDs and descriptions, see Item condition ID and name values.
  * conditionId `string`: The ID value of the selected item condition. For information on the supported condition ID values, see Item condition ID and name values.

### ItemConditionPolicy
* ItemConditionPolicy `object`
  * categoryId `string`: The category ID to which the item-condition policy applies.
  * categoryTreeId `string`: A value that indicates the root node of the category tree used for the response set. Each marketplace is based on a category tree whose root node is indicated by this unique category ID value. All category policy information returned by this call pertains to the categories included below this root node of the tree. A category tree is a hierarchical framework of eBay categories that begins at the root node of the tree and extends to include all the child nodes in the tree. Each child node in the tree is an eBay category that is represented by a unique categoryId value. Within a category tree, the root node has no parent node and leaf nodes are nodes that have no child nodes.
  * itemConditionRequired `boolean`: This flag denotes whether or not you must list the item condition in a listing for the specified category. If set to true, you must specify an item condition for the associated category.
  * itemConditions `array`: The item-condition values allowed in the category. Note: In the US and Australian marketplaces, Condition ID 2000 now maps to an item condition of 'Certified Refurbished', but this item condition is only available for use for a select number of US and Australian sellers. Other sellers on these two marketplaces will be blocked if they try to create a new listing or revise an existing listing with this item condition. Any active listings on the US and Australian marketplaces that had 'Manufacturer Refurbished' as the item condition should have been automatically updated by eBay to the 'Seller Refurbished' item condition (Condition ID 2500). For all other marketplaces besides the US and Australia, Condition ID 2000 still maps to 'Manufacturer Refurbished'. Any US or Australian seller that is interested in eligibility requirements to list with 'Certified Refurbished' should see the Certified refurbished program page in Seller Center.
    * items [ItemCondition](#itemcondition)

### ItemConditionPolicyResponse
* ItemConditionPolicyResponse `object`
  * itemConditionPolicies `array`: A list of category IDs and the policies for how to indicate an item's condition in each of the listed categories.
    * items [ItemConditionPolicy](#itemconditionpolicy)
  * warnings `array`: A list of the warnings that were generated as a result of the request. This field is not returned if no warnings were generated by the request.
    * items [Error](#error)

### ListingStructurePolicy
* ListingStructurePolicy `object`
  * categoryId `string`: The category ID to which the listing-structure policy applies.
  * categoryTreeId `string`: A value that indicates the root node of the category tree used for the response set. Each marketplace is based on a category tree whose root node is indicated by this unique category ID value. All category policy information returned by this call pertains to the categories included below this root node of the tree. A category tree is a hierarchical framework of eBay categories that begins at the root node of the tree and extends to include all the child nodes in the tree. Each child node in the tree is an eBay category that is represented by a unique categoryId value. Within a category tree, the root node has no parent node and leaf nodes are nodes that have no child nodes.
  * variationsSupported `boolean`: This flag denotes whether or not the associated category supports listings with item variations. If set to true, the category does support item variations.

### ListingStructurePolicyResponse
* ListingStructurePolicyResponse `object`
  * listingStructurePolicies `array`: Returns a list of category IDs plus a flag indicating whether or not each listed category supports item variations.
    * items [ListingStructurePolicy](#listingstructurepolicy)
  * warnings `array`: A list of the warnings that were generated as a result of the request. This field is not returned if no warnings were generated by the request.
    * items [Error](#error)

### NegotiatedPricePolicy
* NegotiatedPricePolicy `object`
  * bestOfferAutoAcceptEnabled `boolean`: This flag denotes whether or not the category supports the setting of a price at which best offers are automatically accepted. If set to true, the category does support the setting of an automatic price for best-offers.
  * bestOfferAutoDeclineEnabled `boolean`: This flag denotes whether or not the category supports the setting of an auto-decline price for best offers. If set to true, the category does support the setting of an automatic-decline price for best-offers.
  * bestOfferCounterEnabled `boolean`: This flag denotes whether or not the category supports the setting for an automatic counter-offer on best offers. If set to true, the category does support the setting of an automatic counter-offer price for best-offers.
  * categoryId `string`: The category ID to which the negotiated-price policies apply.
  * categoryTreeId `string`: A value that indicates the root node of the category tree used for the response set. Each marketplace is based on a category tree whose root node is indicated by this unique category ID value. All category policy information returned by this call pertains to the categories included below this root node of the tree. A category tree is a hierarchical framework of eBay categories that begins at the root node of the tree and extends to include all the child nodes in the tree. Each child node in the tree is an eBay category that is represented by a unique categoryId value. Within a category tree, the root node has no parent node and leaf nodes are nodes that have no child nodes.

### NegotiatedPricePolicyResponse
* NegotiatedPricePolicyResponse `object`
  * negotiatedPricePolicies `array`: A list of category IDs and the policies related to negotiated-price items for each of the listed categories.
    * items [NegotiatedPricePolicy](#negotiatedpricepolicy)
  * warnings `array`: A list of the warnings that were generated as a result of the request. This field is not returned if no warnings were generated by the request.
    * items [Error](#error)

### ProductAdoptionPolicy
* ProductAdoptionPolicy `object`: This complex type returns a category ID and a flag that indicates whether or not items listed in that category require the declaration of an ePID value, which links the item to the eBay Catalog. The type also lists any items that are excepted from the requirement to included an ePID value.
  * categoryId `string`: The category ID to which the listing policies apply.
  * categoryTreeId `string`: A value that indicates the root node of the category tree used for the response set. Each marketplace is based on a category tree whose root node is indicated by this unique category ID value. All category policy information returned by this call pertains to the categories included below this root node of the tree. A category tree is a hierarchical framework of eBay categories that begins at the root node of the tree and extends to include all the child nodes in the tree. Each child node in the tree is an eBay category that is represented by a unique categoryId value. Within a category tree, the root node has no parent node and leaf nodes are nodes that have no child nodes.
  * exclusion [Exclusion](#exclusion)
  * productRequired `boolean`: If set to true, items must include an ePID value in their item description before they can be listed in the category identified by the associated categoryId. In contrast, a value of false indicates that items listed in the associated category do not require ePID values. Important! It is possible for a productAdoptionPolicies container to not contain this productRequired field. This occurs if the eBay category is not part of the PBSE Phase 1 or Phase 2 mandate. In these scenarios, please treat the response the same as if this field were present and contained a value of false.

### ProductAdoptionPolicyResponse
* ProductAdoptionPolicyResponse `object`: This is the response object returned by a call to getProductAdoptionPolicies.
  * productAdoptionPolicies `array`: A list of category IDs from the marketplace specified in the request where each returned element represents a leaf node in the category tree. Each element in the list contains the policies governing whether or not items listed in that category must include an ePID value (which links the item to the eBay Catalog).
    * items [ProductAdoptionPolicy](#productadoptionpolicy)
  * warnings `array`: A list of the warnings that were generated as a result of the request. This field is not returned if no warnings were generated by the request.
    * items [Error](#error)

### ReturnPolicy
* ReturnPolicy `object`
  * categoryId `string`: The category ID to which the return policies apply.
  * categoryTreeId `string`: A value that indicates the root node of the category tree used for the response set. Each marketplace is based on a category tree whose root node is indicated by this unique category ID value. All category policy information returned by this call pertains to the categories included below this root node of the tree. A category tree is a hierarchical framework of eBay categories that begins at the root node of the tree and extends to include all the child nodes in the tree. Each child node in the tree is an eBay category that is represented by a unique categoryId value. Within a category tree, the root node has no parent node and leaf nodes are nodes that have no child nodes.
  * domestic [ReturnPolicyDetails](#returnpolicydetails)
  * international [ReturnPolicyDetails](#returnpolicydetails)
  * required `boolean`: If set to true, this flag indicates that you must specify a return policy for items listed in the associated category. Note that not accepting returns (setting returnsAcceptedEnabled to false) is a valid return policy.

### ReturnPolicyDetails
* ReturnPolicyDetails `object`: This container defines the category policies that relate to domestic and international return policies (the return shipping is made via a domestic or an international shipping service, respectively).
  * policyDescriptionEnabled `boolean`: If set to true, this flag indicates you can supply a detailed return policy description within your return policy (for example, by populating the returnInstructions field in the Account API's createReturnPolicy). User-supplied return policy details are allowed only in the DE, ES, FR, and IT marketplaces.
  * refundMethods `array`: A list of refund methods allowed for the associated category.
    * items `string`:  For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/metadata/types/sel:RefundMethodEnum'>eBay API documentation</a>
  * returnMethods `array`: A list of return methods allowed for the associated category.
    * items `string`:  For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/metadata/types/sel:ReturnMethodEnum'>eBay API documentation</a>
  * returnPeriods `array`: A list of return periods allowed for the associated category. Note that different APIs require you to enter the return period in different ways. For example, the Account API uses the complex TimeDuration type, which takes two values (a unit and a value), whereas the Trading API takes a single value (such as Days_30).
    * items [TimeDuration](#timeduration)
  * returnShippingCostPayers `array`: A list of allowed values for who pays for the return shipping cost. Note that for SNAD returns, the seller is always responsible for the return shipping cost.
    * items `string`:  For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/metadata/types/sel:ReturnShippingCostPayerEnum'>eBay API documentation</a>
  * returnsAcceptanceEnabled `boolean`: If set to true, this flag indicates the seller can configure how they handle domestic returns.

### ReturnPolicyResponse
* ReturnPolicyResponse `object`
  * returnPolicies `array`: A list of elements, where each contains a category ID and a flag that indicates whether or not listings in that category require a return policy.
    * items [ReturnPolicy](#returnpolicy)
  * warnings `array`: A list of the warnings that were generated as a result of the request. This field is not returned if no warnings were generated by the request.
    * items [Error](#error)

### SalesTaxJurisdiction
* SalesTaxJurisdiction `object`: A unique ID for a sales tax jurisdiction.
  * salesTaxJurisdictionId `string`: The unique ID for a sales tax jurisdiction.

### SalesTaxJurisdictions
* SalesTaxJurisdictions `object`: This complex type contains a list of sales tax jurisdictions.
  * salesTaxJurisdictions `array`: A list of sales tax jurisdictions.
    * items [SalesTaxJurisdiction](#salestaxjurisdiction)

### TimeDuration
* TimeDuration `object`: A complex type that specifies a period of time using a specified time-measurement unit.
  * unit `string`: A time-measurement unit used to specify a period of time. Time-measurement units can be years, months, days, hours, minutes, and other time units (see TimeDurationUnitEnum for a complete list of possible units). The value setting is applied to the unit value to define a span of time. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/metadata/types/ba:TimeDurationUnitEnum'>eBay API documentation</a>
  * value `integer`: An amount of time, as measured by the time-measurement units specified in the unit field.


