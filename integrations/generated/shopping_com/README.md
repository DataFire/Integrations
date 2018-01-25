# @datafire/shopping_com

Client library for Shopping.com

## Installation and Usage
```bash
npm install --save @datafire/shopping_com
```
```js
let shopping_com = require('@datafire/shopping_com').create();

shopping_com.CategoryTree.get({}).then(data => {
  console.log(data);
});
```

## Description

Shopping.com offers Publishers rich content via the Shopping.com's API.

## Actions

### GeneralSearch.get
Searches for products by offer. See API docs for request parameters/format.


```js
shopping_com.GeneralSearch.get({}, context)
```

#### Input
* input `object`
  * subTrackingId `string`: User generated ID used to further break down traffic sources beyond SDC campaign level tracking. You may choose any arbitrary character sequence (up to 36 characters), and use as many different IDs as required.  Please note that you must contact your account manager to have reporting enabled for this sub-tracking ID - otherwise the parameter will simply be ignored.
  * visitorUserAgent `string`: The browser user-agent of the visitor to which this data is being presented.  This data helps Shopping.com to differentiate real users from web crawlers or robots.
  * visitorIPAddress `string`: The IP address of the visitor to which this data is being presented.  Like visitorUserAgent, this data helps Shopping.com to differentiate real users from web crawlers or robots.
  * groupItemsByCategory `boolean`: Control whether or not items are separated into different categories. By default, searches don't separate items by category. Instead, a single category (with id "0") is returned containing items from different categories.
  * postalCode `string`: Set the postal code of the current user, for tax and shipping purposes. Tax and shipping costs will be provided along with each offer returned by the API (when available) if a valid postal code is included in the request. These costs will be added to the offer's base price to calculate a total price, which is then used for sorting by price.
  * showAllMatchingCategories `boolean`: Control whether or not this query will return all matching categories, regardless of relevance. When performing a keyword search, the Shopping.com API will normally return 0 or more matching categories up to a relevance threshold. This means that even if the search engine finds 100 categories matching the keyword, it may only return a fraction of those if it determines that the remaining categories are outside of the relevance threshold. Setting the numCategories parameter to 100 will not change this behavior, as numCategories is overruled by relevance thresholds.
  * offerSortType `string` (values: store-name, store-rating, price, relevance, featured-store): Set the method of sorting offers. The API will return offers ordered to maximize yield by default. If you would like to use a different type of ordering (e.g. the user requested to sort by price) for results containing only offers, use the offerSortType parameter to control the type of sorting, and the offerSortOrder to control the direction of sorting.
  * offerSortOrder `string`: Control whether results containing only offers will be sorted in ascending or descending order.
  * showSmartBuy `boolean`: Control whether or not the lowest-price offer from a trusted store will be flagged. The Shopping.com Smart Buy is the lowest offer from a trusted store within the list of offers for any given product. By enabling the showSmartBuy parameter, the offer matching these criteria (if one exists) will be marked as the smartBuy. Additionally, if using the "featured-store" offer sort type, the smartBuy will be moved to the first position below any featured offers.
  * numFeatured `integer`: Set the maximum number of featured stores to include in a result containing a list of offers, when using the 'featured-store' offer sort type. By default, up to 3 featured stores will be included.
  * productReviewSortType `string` (values: review-date, product-rating): Control how to sort product reviews listings. The API will return product reviews ordered by review date by default. If you would like to use a different type of ordering (e.g. the user requested to sort by rating) for product reviews, use the productReviewsSortType parameter to control the type of sorting, and the productReviewsSortOrder to control the direction of sorting.
  * productReviewsSortOrder `string`: Control whether product reviews listings will be sorted in ascending or descending order.

#### Output
*Output schema unknown*

### CategoryTree.get
Returns information on a single category (e.g. name) or the relationship hierarchy between categories.


```js
shopping_com.CategoryTree.get({}, context)
```

#### Input
* input `object`
  * categoryId `string`: The ID of the category for to return information for, as well as the information for all its immediate children (if any). To see all top level categories, use category ID '0', or simply omit the categoryId parameter altogether.
  * showAllDescendants `boolean`: Specifies that information for all descendants of the specified category should be returned.

#### Output
*Output schema unknown*



## Definitions

*This integration has no definitions*
