# @datafire/ebay_buy_marketing

Client library for Buy Marketing

## Installation and Usage
```bash
npm install --save datafire @datafire/ebay_buy_marketing
```

```js
let datafire = require('datafire');
let ebay_buy_marketing = require('@datafire/ebay_buy_marketing').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
});

ebay_buy_marketing.getMerchandisedProducts({}).then(data => {
  console.log(data);
})
```

## Description
The Buy Marketing API lets shoppers discover the best selling products and assists shoppers with deciding which product to purchase.

## Actions
### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
ebay_buy_marketing.oauthCallback({
  "code": ""
}, context)
```

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
ebay_buy_marketing.oauthRefresh(null, context)
```

#### Parameters
*This action has no parameters*

### getMerchandisedProducts
This call returns an array of products based on the category and metric specified. This includes details of the product, such as the eBay product ID (EPID), title, and user reviews and ratings for the product. You can use the epid returned by this call in the Browse API search call to retrieve items for this product. Restrictions For a list of supported sites and other restrictions, see API Restrictions.


```js
ebay_buy_marketing.getMerchandisedProducts({
  "category_id": "",
  "metric_name": ""
}, context)
```

#### Parameters
* aspect_filter (string) - The aspect name/value pairs used to further refine product results. For example: &nbsp;&nbsp;&nbsp;/buy/marketing/v1_beta/merchandised_product?category_id=31388&amp;metric_name=BEST_SELLING&amp;aspect_filter=Brand:Canon You can use the Browse API search call with the fieldgroups=ASPECT_REFINEMENTS field to return the aspects of a product. For implementation help, refer to eBay API documentation at https://developer.ebay.com/devzone/rest/api-ref/buy-marketing/types/MarketingAspectFilter.html
* category_id (string) **required** - This query parameter limits the products returned to a specific eBay category. The list of eBay category Ids is not published and category Ids are not all the same across all the eBay maketplace. You can use the following techniques to find a category by site. Use the Category Changes page. Use the Taxonomy API. Use the Browse API and submit the following call to get the dominantCategoryId for an item. /buy/browse/v1/item_summary/search?q=keyword&amp;fieldgroups=ASPECT_REFINEMENTS Maximum: 1 Required: 1
* limit (string) - This value specifies the maximum number of products in a result set. Note: Maximum value means the call will return up to that many products per set, but it can be less than this value. If the number of products found is less than this value, the call will return all of the products matching the criteria. Default: 8 Maximum: 100
* metric_name (string) **required** - This value filters the result set by the specified metric. Only products in this metric are returned. Currently, the only metric supported is BEST_SELLING. Default: BEST_SELLING Maximum: 1 Required: 1

