# @datafire/ebay_buy_marketing

Client library for Buy Marketing

## Installation and Usage
```bash
npm install --save @datafire/ebay_buy_marketing
```
```js
let ebay_buy_marketing = require('@datafire/ebay_buy_marketing').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

ebay_buy_marketing.getAlsoViewedByProduct({}).then(data => {
  console.log(data);
});
```

## Description

The Marketing API retrieves eBay products based on a metric, such as Best Selling, as well as products that were also bought and also viewed.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
ebay_buy_marketing.oauthCallback({
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
ebay_buy_marketing.oauthRefresh(null, context)
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

### getMerchandisedProducts
This call returns an array of products based on the category and metric specified. This includes details of the product, such as the eBay product Id (EPID), title, and user reviews and ratings for the product. You can use the epid returned by this call in the Browse API search call to retrieve items for this product. Restrictions For a list of supported sites and other restrictions, see API Restrictions.


```js
ebay_buy_marketing.getMerchandisedProducts({
  "category_id": "",
  "metric_name": ""
}, context)
```

#### Input
* input `object`
  * aspect_filter `string`: The aspect name/value pairs used to further refine product results. For example: &nbsp;&nbsp;&nbsp;/buy/marketing/v1_beta/merchandised_product?category_id=31388&amp;metric_name=BEST_SELLING&amp;aspect_filter=Brand:Canon You can use the Browse API search call with the fieldgroups=ASPECT_REFINEMENTS field to return the aspects of a product. For implementation help, refer to eBay API documentation at https://developer.ebay.com/devzone/rest/api-ref/marketing/types/MarketingAspectFilter.html
  * category_id **required** `string`: This query parameter limits the products returned to a specific eBay category. The list of eBay category Ids is not published and category Ids are not all the same across all the eBay maketplace. You can use the following techniques to find a category by site. Use the Category Changes page. Use the Taxonomy API. For details see Categories for Buy API Calls. Use the Browse API and submit the following call to get the dominantCategoryId for an item. /buy/browse/v1/item_summary/search?q=keyword&amp;fieldgroups=ASPECT_REFINEMENTS Maximum: 1 Required: 1
  * limit `string`: This value specifies the maximum number of products in a result set. Note: Maximum value means the call will return up to that many products per set, but it can be less than this value. If the number of products found is less than this value, the call will return all of the products matching the criteria. Default: 8 Maximum: 100
  * metric_name **required** `string`: This value filters the result set by the specified metric. Only products in this metric are returned. Currently, the only metric supported is BEST_SELLING. Default: BEST_SELLING Maximum: 1 Required: 1

#### Output
* output [BestSellingProductResponse](#bestsellingproductresponse)

### getAlsoBoughtByProduct
This call returns products that were also bought when shoppers bought the product specified in the request. Showing 'also bought' products inspires up-selling and cross-selling. You specify the product by one of the following. epid (eBay Product Id) gtin (Global Trade Item Number) brand (brand name such as Nike) plus mpn (Manufacturer's Part Number) Restrictions For a list of supported sites and other restrictions, see API Restrictions. Maximum: A maximum of 12 products are returned.


```js
ebay_buy_marketing.getAlsoBoughtByProduct({}, context)
```

#### Input
* input `object`
  * brand `string`: The brand of the product. Restriction: This must be used along with mpn. Required: You must specify one epid, or one gtin, or one brand plus mpn pair.
  * epid `string`: The eBay product identifier of a product. Required: You must specify one epid, or one gtin, or one brand plus mpn pair.
  * gtin `string`: The unique Global Trade Item Number of the item as defined by http://www.gtin.info. This can be a UPC (Universal Product Code), EAN (European Article Number), or an ISBN (International Standard Book Number value. Required: You must specify one epid, or one gtin, or one brand plus mpn pair.
  * mpn `string`: The manufacturer part number of the product. Restriction: This must be used along with brand. Required: You must specify one epid, or one gtin, or one brand plus mpn pair.

#### Output
* output [BestSellingProductResponse](#bestsellingproductresponse)

### getAlsoViewedByProduct
This call returns products that were also viewed when shoppers viewed the product specified in the request. Showing 'also viewed' products encourages up-selling and cross-selling. You specify the product by one one of the following. epid (eBay Product Id) gtin (Global Trade Item Number) brand (brand name such as Nike) plus mpn (Manufacturer's Part Number) Restrictions For a list of supported sites and other restrictions, see API Restrictions. Maximum: A maximum of 12 products are returned.


```js
ebay_buy_marketing.getAlsoViewedByProduct({}, context)
```

#### Input
* input `object`
  * brand `string`: The brand of the product. Restriction: This must be used along with mpn. Required: You must specify one epid, or one gtin, or one brand plus mpn pair.
  * epid `string`: The eBay product identifier of a product. Required: You must specify one epid, or one gtin, or one brand plus mpn pair.
  * gtin `string`: The unique Global Trade Item Number of the item as defined by http://www.gtin.info. This can be a UPC (Universal Product Code), EAN (European Article Number), or an ISBN (International Standard Book Number value. Required: You must specify one epid, or one gtin, or one brand plus mpn pair.
  * mpn `string`: The manufacturer part number of the product. Restriction: This must be used along with brand.

#### Output
* output [BestSellingProductResponse](#bestsellingproductresponse)



## Definitions

### Amount
* Amount `object`: This type defines the monetary value of an amount and the currency used.
  * currency `string`: A three-letter ISO 4217 code that indicates the currency of the amount in the value field. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/marketing/types/CurrencyCodeEnum.html'>eBay API documentation</a>
  * value `string`: The monetary amount, in the currency specified by the currency field.

### BestSellingProductResponse
* BestSellingProductResponse `object`: The type that defines the fields for the best selling product information.
  * merchandisedProducts `array`: An array of containers for the products.
    * items [MerchandisedProduct](#merchandisedproduct)
  * warnings `array`: The container with all the warnings for the input request.
    * items [Error](#error)

### Error
* Error `object`: The type that defines the fields that can be returned in an error.
  * category `string`: This string value indicates the error category. There are three categories of errors: request errors, application errors, and system errors.
  * domain `string`: The name of the primary system where the error occurred. This is relevant for application errors.
  * errorId `integer`: A unique code that identifies the particular error or warning that occurred. Your application can use error codes as identifiers in your customized error-handling algorithms.
  * inputRefIds `array`: An array of reference Ids that identify the specific request elements most closely associated to the error or warning, if any.
    * items `string`
  * longMessage `string`: A detailed description of the condition that caused the error or warning, and information on what to do to correct the problem.
  * message `string`: A description of the condition that caused the error or warning.
  * outputRefIds `array`: An array of reference Ids that identify the specific response elements most closely associated to the error or warning, if any.
    * items `string`
  * parameters `array`: An array of warning and error messages that return one or more variables contextual information about the error or warning. This is often the field or value that triggered the error or warning.
    * items [ErrorParameter](#errorparameter)
  * subdomain `string`: The name of the subdomain in which the error or warning occurred.

### ErrorParameter
* ErrorParameter `object`: An array of name/value pairs that provide more details regarding error condition.
  * name `string`: This is the name of input field that caused an issue with the call request.
  * value `string`: This is the actual value that was passed in for the element specified in the name field.

### Image
* Image `object`: Type the defines the details of an image, such as size and URL. Currently only <b> imageUrl</b> is getting populated. The <b> height</b> and <b> width</b> were added for future use.
  * height `integer`: Reserved for future use.
  * imageUrl `string`: The URL of the image.
  * width `integer`: Reserved for future use.

### MarketPriceDetail
* MarketPriceDetail `object`: The type that defines the fields for details about the product, such as condition and estimated start price.
  * conditionGroup `string`: The name for the condition of the product. For example: NEW
  * conditionIds `array`: An array of condition identifiers for the product.
    * items `string`
  * estimatedStartPrice [Amount](#amount)

### MerchandisedProduct
* MerchandisedProduct `object`: The type that defines the fields for product information, including price, condition, ratings, etc.
  * averageRating `string`: The average rating for the product based on eBay user ratings.
  * epid `string`: The eBay product identifier of a product from the eBay product catalog. You can use this value in the Browse API search call to retrieve items for this product.
  * image [Image](#image)
  * marketPriceDetails `array`: An array of containers for the product market price details, such as condition and market price.
    * items [MarketPriceDetail](#marketpricedetail)
  * ratingAspects `array`: An array of containers for ratings of the product aspects, such as &quot;Is it a good value&quot;.
    * items [RatingAspect](#ratingaspect)
  * ratingCount `integer`: The total number of eBay users that rated the product.
  * reviewCount `integer`: The total number of eBay users that wrote a review for the product.
  * title `string`: The title of the product.

### RatingAspect
* RatingAspect `object`: The type that defines the fields for the product aspect ratings.
  * count `integer`: The number of eBay users that rated the product on this aspect.
  * description `string`: The name of the rating aspect. Camping tent examples: Is it lightweight? or Is it easy to set up?
  * name `string`: The answer or value of the rating aspect. Camping tent examples: Lightweight or Easy to set up
  * ratingAspectDistributions `array`: The container for the details of the aspect rating. The details show the aspect rating value, usually TRUE or FALSE and the user count and percentage.
    * items [RatingAspectDistribution](#ratingaspectdistribution)

### RatingAspectDistribution
* RatingAspectDistribution `object`: The type that defines the field for the aspect rating details, such as the aspect rating value, usually TRUE or FALSE and the user count and percentage.
  * count `integer`: The number of eBay users that choose this rating aspect value.
  * percentage `string`: The percentage of the aspect rating value. ratingAspectDistributions.percentage = ratingAspectDistributions.count / ratingAspects.count
  * value `string`: The rating aspect. For example: TRUE or FALSE


