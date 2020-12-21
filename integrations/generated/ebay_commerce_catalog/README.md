# @datafire/ebay_commerce_catalog

Client library for Catalog API

## Installation and Usage
```bash
npm install --save @datafire/ebay_commerce_catalog
```
```js
let ebay_commerce_catalog = require('@datafire/ebay_commerce_catalog').create({
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

The Catalog API allows users to search for and locate an eBay catalog product that is a direct match for the product that they wish to sell. Listing against an eBay catalog product helps insure that all listings (based off of that catalog product) have complete and accurate information. In addition to helping to create high-quality listings, another benefit to the seller of using catalog information to create listings is that much of the details of the listing will be prefilled, including the listing title, the listing description, the item specifics, and a stock image for the product (if available). Sellers will not have to enter item specifics themselves, and the overall listing process is a lot faster and easier.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
ebay_commerce_catalog.oauthCallback({
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
ebay_commerce_catalog.oauthRefresh(null, context)
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

### getProduct
This call retrieves details of the catalog product identified by the eBay product identifier (ePID) specified in the request. These details include the product's title and description, aspects and their values, associated images, applicable category IDs, and any recognized identifiers that apply to the product. For a new listing, you can use the search call to identify candidate products on which to base the listing, then use the getProduct call to present the full details of those candidate products to the seller to make a a final selection.


```js
ebay_commerce_catalog.getProduct({
  "epid": ""
}, context)
```

#### Input
* input `object`
  * epid **required** `string`: The ePID of the product being requested. This value can be discovered by issuing the search call and examining the value of the productSummaries.epid field for the desired returned product summary.

#### Output
* output [Product](#product)

### search
This call searches for and retrieves summaries of one or more products in the eBay catalog that match the search criteria provided by a seller. The seller can use the summaries to select the product in the eBay catalog that corresponds to the item that the seller wants to offer for sale. When a corresponding product is found and adopted by the seller, eBay will use the product information to populate the item listing. The criteria supported by search include keywords, product categories, and category aspects. To see the full details of a selected product, use the getProduct call. In addition to product summaries, this call can also be used to identify refinements, which help you to better pinpoint the product you're looking for. A refinement consists of one or more aspect values and a count of the number of times that each value has been used in previous eBay listings. An aspect is a property (e.g. color or size) of an eBay category, used by sellers to provide details about the items they're listing. The refinement container is returned when you include the fieldGroups query parameter in the request with a value of ASPECT_REFINEMENTS or FULL. Example A seller wants to find a product that is &quot;gray&quot; in color, but doesn't know what term the manufacturer uses for that color. It might be Silver, Brushed Nickel, Pewter, or even Grey. The returned refinement container identifies all aspects that have been used in past listings for products that match your search criteria, along with all of the values those aspects have taken, and the number of times each value was used. You can use this data to present the seller with a histogram of the values of each aspect. The seller can see which color values have been used in the past, and how frequently they have been used, and selects the most likely value or values for their product. You issue the search call again with those values in the aspect_filter parameter to narrow down the collection of products returned by the call. Although all query parameters are optional, this call must include at least the q parameter, or the category_ids, gtin, or mpn parameter with a valid value. If you provide more than one of these parameters, they will be combined with a logical AND to further refine the returned collection of matching products. Note: This call requires that certain special characters in the query parameters be percent-encoded: &nbsp;&nbsp;&nbsp;&nbsp;(space) = %20 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;, = %2C &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: = %3A &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[ = %5B &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;] = %5D &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ = %7B &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| = %7C &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} = %7D This requirement applies to all query parameter values. However, for readability, call examples and samples in this documentation will not use the encoding. This call returns product summaries rather than the full details of the products. To retrieve the full details of a product, use the getProduct call with an ePID.


```js
ebay_commerce_catalog.search({}, context)
```

#### Input
* input `object`
  * aspect_filter `string`: An eBay category and one or more aspects of that category, with the values that can be used to narrow down the collection of products returned by this call. Aspects are product attributes that can represent different types of information for different products. Every product has aspects, but different products have different sets of aspects. You can determine appropriate values for the aspects by first submitting this call without this parameter. It will return either the productSummaries.aspects container, the refinement.aspectDistributions container, or both, depending on the value of the fieldgroups parameter in the request. The productSummaries.aspects container provides the category aspects and their values that are associated with each returned product. The refinement.aspectDistributions container provides information about the distribution of values of the set of category aspects associated with the specified categories. In both cases sellers can select from among the returned aspects to use with this parameter. Note: You can also use the Taxonomy API's getItemAspectsForCategory call to retrieve detailed information about aspects and their values that are appropriate for your selected category. The syntax for the aspect_filter parameter is as follows (on several lines for readability; categoryId is required): aspect_filter=categoryId:category_id, aspect1:{valueA|valueB|...}, aspect2:{valueC|valueD|...},... A matching product must be within the specified category, and it must have least one of the values identified for every specified aspect. Note: Aspect names and values are case sensitive. Here is an example of an aspect_filter parameter in which 9355 is the category ID, Color is an aspect of that category, and Black and White are possible values of that aspect (on several lines for readability): GET https://api.ebay.com/commerce/catalog/v1_beta/product_summary/search? aspect_filter=categoryId:9355,Color:{White|Black} Here is the aspect_filter with required URL encoding and a second aspect (on several lines for readability): GET https://api.ebay.com/commerce/catalog/v1_beta/product_summary/search? aspect_filter=categoryId:9355,Color:%7BWhite%7CBlack%7D, Storage%20Capacity:%128GB%7C256GB%7D Note: You cannot use the aspect_filter parameter in the same call with either the gtin parameter or the mpn parameter. For implementation help, refer to eBay API documentation at https://developer.ebay.com/api-docs/commerce/catalog/types/catal:AspectFilter
  * category_ids `string`: Important: Currently, only the first category_id value is accepted. One or more comma-separated category identifiers for narrowing down the collection of products returned by this call. Note: This parameter requires a valid category ID value. You can use the Taxonomy API's getCategorySuggestions call to retrieve appropriate category IDs for your product based on keywords. The syntax for this parameter is as follows: category_ids=category_id1,category_id2,... Here is an example of a call with the category_ids parameter: GET https://api.ebay.com/commerce/catalog/v1_beta/product_summary/search? category_ids=178893 Note: Although all query parameters are optional, this call must include at least the q parameter, or the category_ids, gtin, or mpn parameter with a valid value. If you provide only the category_ids parameter, you cannot specify a top-level (L1) category.
  * fieldgroups `string`: The type of information to return in the response. Important: This parameter may not produce valid results if you also provide more than one value for the category_ids parameter. It is recommended that you avoid using this combination. Valid Values: ASPECT_REFINEMENTS &mdash; This returns the refinement container, which includes the category aspect and aspect value distributions that apply to the returned products. For example, if you searched for Ford Mustang, some of the category aspects might be Model Year, Exterior Color, Vehicle Mileage, and so on. Note: Aspects are category specific. FULL &mdash; This returns all the refinement containers and all the matching products. This value overrides the other values, which will be ignored. MATCHING_PRODUCTS &mdash; This returns summaries for all products that match the values you provide for the q and category_ids parameters. This does not affect your use of the ASPECT_REFINEMENTS value, which you can use in the same call. Code so that your app gracefully handles any future changes to this list. Default: MATCHING_PRODUCTS
  * gtin `string`: A string consisting of one or more comma-separated Global Trade Item Numbers (GTINs) that identify products to search for. Currently the GTIN values can include EAN, ISBN, and UPC identifier types. Note: Although all query parameters are optional, this call must include at least the q parameter, or the category_ids, gtin, or mpn parameter with a valid value. You cannot use the gtin parameter in the same call with either the q parameter or the aspect_filter parameter.
  * limit `string`: The number of product summaries to return. This is the result set, a subset of the full collection of products that match the search or filter criteria of this call. Maximum: 200 Default: 50
  * mpn `string`: A string consisting of one or more comma-separated Manufacturer Part Numbers (MPNs) that identify products to search for. This call will return all products that have one of the specified MPNs. MPNs are defined by manufacturers for their own products, and are therefore certain to be unique only within a given brand. However, many MPNs do turn out to be globally unique. Note: Although all query parameters are optional, this call must include at least the q parameter, or the category_ids, gtin, or mpn parameter with a valid value. You cannot use the mpn parameter in the same call with either the q parameter or the aspect_filter parameter.
  * offset `string`: This parameter is reserved for internal or future use.
  * q `string`: A string consisting of one or more keywords to use to search for products in the eBay catalog. Note: This call searches the following product record fields: title, description, brand, and aspects.localizedName, which do not include product IDs. Wildcard characters (e.g. *) are not allowed. The keywords are handled as follows: If the keywords are separated by a comma (e.g. iPhone,256GB), the query returns products that have iPhone AND 256GB. If the keywords are separated by a space (e.g. &quot;iPhone&nbsp;ipad&quot; or &quot;iPhone,&nbsp;ipad&quot;), the query ignores any commas and returns products that have iPhone OR iPad. Note: Although all query parameters are optional, this call must include at least the q parameter, or the category_ids, gtin, or mpn parameter with a valid value. You cannot use the q parameter in the same call with either the gtin parameter or the mpn parameter.

#### Output
* output [ProductSearchResponse](#productsearchresponse)



## Definitions

### Aspect
* Aspect `object`: This type contains the name and values of a category aspect.
  * localizedName `string`: The localized name of this category aspect.
  * localizedValues `array`: A list of the localized values of this category aspect.
    * items `string`

### AspectDistribution
* AspectDistribution `object`: This type contains information about one category aspect that is associated with a specified category.
  * aspectValueDistributions `array`: Contains information about one or more values of the category aspect identified by localizedAspectName.
    * items [AspectValueDistribution](#aspectvaluedistribution)
  * localizedAspectName `string`: The localized name of an aspect that is associated with the category identified by dominantCategoryId.

### AspectValueDistribution
* AspectValueDistribution `object`: This type contains information about one value of a specified aspect. This value serves as a product refinement.
  * localizedAspectValue `string`: The localized value of the category aspect identified by refinement.aspectDistributions.localizedAspectName.
  * matchCount `integer`: The number of times the value of localizedAspectValue has been used for eBay product listings. By comparing this quantity to the matchCount for other values of the same aspect, you can present a histogram of the values to sellers, who can use that information to select which aspect value is most appropriate for their product. You can then include the user-selected value in the the search call's aspect_filter parameter to refine your search.
  * refinementHref `string`: A HATEOAS reference that further refines the search with this particular localizedAspectValue.

### Error
* Error `object`: This type defines the fields that can be returned in an error.
  * parameters `array`: An array of name/value pairs that describe details the error condition. These are useful when multiple errors are returned.
    * items [ErrorParameter](#errorparameter)
  * category `string`: Identifies the type of erro.
  * domain `string`: Name for the primary system where the error occurred. This is relevant for application errors.
  * errorId `integer`: A unique number to identify the error.
  * inputRefIds `array`: An array of request elements most closely associated to the error.
    * items `string`
  * longMessage `string`: A more detailed explanation of the error.
  * message `string`: Information on how to correct the problem, in the end user's terms and language where applicable.
  * outputRefIds `array`: An array of request elements most closely associated to the error.
    * items `string`
  * subdomain `string`: Further helps indicate which subsystem the error is coming from. System subcategories include: Initialization, Serialization, Security, Monitoring, Rate Limiting, etc.

### ErrorParameter
* ErrorParameter `object`
  * name `string`: The object of the error.
  * value `string`: The value of the object.

### Image
* Image `object`: This type contains information about a product image stored in eBay Picture Services (EPS).
  * height `integer`: The height of the image in pixels.
  * imageUrl `string`: The eBay Picture Services (EPS) URL of the image.
  * width `integer`: The width of the image in pixels.

### Product
* Product `object`: This type contains the full details of a specified product, including information about the product's identifiers, product images, aspects, and categories.
  * additionalImages `array`: Contains information about additional images associated with this product. For the primary image, see the image container.
    * items [Image](#image)
  * aspects `array`: Contains an array of the category aspects and their values that are associated with this product.
    * items [Aspect](#aspect)
  * brand `string`: The manufacturer's brand name for this product.
  * description `string`: The rich description of this product, which might contain HTML.
  * ean `array`: A list of all European Article Numbers (EANs) that identify this product.
    * items `string`
  * epid `string`: The eBay product ID of this product.
  * gtin `array`: A list of all GTINs that identify this product. Currently this can include EAN, ISBN, and UPC identifier types.
    * items `string`
  * image [Image](#image)
  * isbn `array`: A list of all International Standard Book Numbers (ISBNs) that identify this product.
    * items `string`
  * mpn `array`: A list of all MPN values that the manufacturer uses to identify this product.
    * items `string`
  * otherApplicableCategoryIds `array`: A list of category IDs (other than the value of primaryCategoryId) for all the leaf categories to which this product might belong.
    * items `string`
  * primaryCategoryId `string`: The identifier of the leaf category that eBay recommends using to list this product, based on previous listings of similar products. Products in the eBay catalog are not automatically associated with any particular category, but using an inappropriate category can make it difficult for prospective buyers to find the product. For other possible categories that might be used, see otherApplicableCategoryIds.
  * productWebUrl `string`: The URL for this product's eBay product page.
  * title `string`: The title of this product on eBay.
  * upc `array`: A list of Universal Product Codes (UPCs) that identify this product.
    * items `string`
  * version `string`: The current version number of this product record in the catalog.

### ProductSearchResponse
* ProductSearchResponse `object`: This type contains the specifications for the collection of products that match the search or filter criteria of a search call. A maximum of 200 product summaries is returned (the result set), fewer if you include the limit query parameter in the request.
  * href `string`: This field is reserved for internal or future use.
  * limit `integer`: The number of product summaries returned in the response. This is the result set, a subset of the full collection of products that match the search or filter criteria of this call. If the limit query parameter was included in the request, this field will have the same value. Default: 50
  * next `string`: This field is reserved for internal or future use.
  * offset `integer`: This field is reserved for internal or future use.
  * prev `string`: This field is reserved for internal or future use.
  * productSummaries `array`: Returned if the fieldGroups query parameter was omitted from the request, or if it was included with a value of MATCHING_PRODUCTS or FULL. This container provides an array of product summaries in the current result set for products that match the combination of the q, category_ids, and aspect_filter parameters that were provided in the request. Each product summary includes information about the product's identifiers, product images, aspects, the product page URL, and the getProduct URL for retrieving the product details.
    * items [ProductSummary](#productsummary)
  * refinement [Refinement](#refinement)
  * total `integer`: This field is reserved for internal or future use.

### ProductSummary
* ProductSummary `object`: This type contains a summary of a specified product. The product summary includes information about the product's identifiers, product images, aspects, and the getProduct URL for retrieving the product details.
  * additionalImages `array`: Contains information about additional images associated with this product. For the primary image, see the image container.
    * items [Image](#image)
  * aspects `array`: Contains an array of the category aspects and their values that are associated with this product.
    * items [Aspect](#aspect)
  * brand `string`: The manufacturer's brand name for this product.
  * ean `array`: A list of all European Article Numbers (EANs) that identify this product.
    * items `string`
  * epid `string`: The eBay product ID of this product.
  * gtin `array`: A list of all GTINs that identify this product. This includes all of the values returned in the ean, isbn, and upc fields.
    * items `string`
  * image [Image](#image)
  * isbn `array`: A list of all International Standard Book Numbers (ISBNs) that identify this product.
    * items `string`
  * mpn `array`: A list of all Manufacturer Product Number (MPN) values that the manufacturer uses to identify this product.
    * items `string`
  * productHref `string`: The URI of the getProduct call request that retrieves this product's details.
  * productWebUrl `string`: The URL for this product's eBay product page.
  * title `string`: The title of this product on eBay.
  * upc `array`: A list of Universal Product Codes (UPCs) that identify this product.
    * items `string`

### Refinement
* Refinement `object`: This type identifies a product category and the aspects associated with that category. Each aspect distribution container returns the distribution of values that have been used for the aspect.
  * aspectDistributions `array`: Contains information about one or more aspects that are associated with the category identified by dominantCategoryId.
    * items [AspectDistribution](#aspectdistribution)
  * dominantCategoryId `string`: The ID of the category that eBay determines is most likely to cover the products matching the search criteria.


