# @datafire/ebay_buy_browse

Client library for Buy Browse

## Installation and Usage
```bash
npm install --save datafire @datafire/ebay_buy_browse
```

```js
let datafire = require('datafire');
let ebay_buy_browse = require('@datafire/ebay_buy_browse').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
});

ebay_buy_browse.search({}).then(data => {
  console.log(data);
})
```

## Description
The Buy Browse API lets shoppers search for specific items by keyword, category, product, or item aspects and retrieve the details of an item.

## Actions
### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
ebay_buy_browse.oauthCallback({
  "code": ""
}, context)
```

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
ebay_buy_browse.oauthRefresh(null, context)
```

#### Parameters
*This action has no parameters*

### getItemByLegacyId
This call is a bridge between the eBay legacy APIs, such as Trading, Shopping, and Finding and the eBay Buy APIs. There are differences between how legacy APIs and RESTful APIs return the identifier of an &quot;item&quot;. There is also a difference in what the item Id represents and in the format of the item Id value returned. This call lets you use the legacy item Ids retrieve the details of a specific item, such as description, price, and other information the buyer needs to make a purchasing decision. It also returns the RESTful item Id, which you can use with all the Buy API calls. For more information about how to use legacy Ids with the Buy APIs, see Legacy API compatibility in the Buying Integration guide. This call returns the item details, so it requires you pass in either the item Id of a non-variation item or the item Ids of both the parent and child of a item group (item with variations). Header needed for improved shipping information accuracy Although the X-EBAY-C-ENDUSERCTX header containing the contextualLocation is optional, it is strongly recommended that you use it when submitting this call. This header increases the accuracy of the estimated delivery window information and is needed for the calculated shipping information. You alwaysinclude the country code and you also include the zip code if zip codes are used in that country. For example: X-EBAY-C-ENDUSERCTX contextualLocation=country=US,zip=19406 Restrictions For a list of supported sites and other restrictions, see API Restrictions.


```js
ebay_buy_browse.getItemByLegacyId({
  "legacy_item_id": ""
}, context)
```

#### Parameters
* legacy_item_id (string) **required** - Specifies either: The legacy item Id of an item that is not part of a group. The legacy item Id of a group, which would be the group parent Id. Note: If you pass in a group Id, you must also use the legacy_variation_id field and pass in the legacy Id of the specific item variation (child Id). Legacy Ids are returned by eBay traditional APIs, such as the Trading API or Finding API. The following is an example of using the value of the ItemID field for a specific item from Trading to get the RESTful itemId value. &nbsp;&nbsp;&nbsp; browse/v1/item/get_item_by_legacy_id?legacy_item_id=110039490209 Maximum: 1
* legacy_variation_id (string) - Specifies the legacy item Id of a specific item in an item group. Legacy Ids are returned by eBay traditional APIs, such as the Trading API or Finding API. Maximum: 1 Requirement: You must always pass in the legacy_item_id with the legacy_variation_id
* legacy_variation_sku (string) - Specifics the legacy SKU of the item. Legacy SKUs are returned by eBay traditional APIs, such as the Trading API or Finding API. The following is an example of using the value of the ItemID and SKU fields, which were returned by the Trading API, to get the RESTful itemId value. &nbsp;&nbsp;&nbsp; browse/v1/item/get_item_by_legacy_id?legacy_item_id=110039490209&amp;legacy_variation_sku=V-00031-WHM Maximum: 1 Requirement: You must always pass in the legacy_item_id with the legacy_variation_sku

### getItemsByItemGroup
This call retrieves the details of the individual items in an item group. You pass in the item group Id as a URI parameter. You use this call to show the item details of items with multiple aspects, such as color, size, storage capacity, etc. This call returns two main containers; items and commonDescriptions. The items container has an array of containers with the details of each item in the group. The commonDescriptions container has an array of containers for a description and the item Ids of all the items that have this exact description. Because items within an item group often have the same description, this decreases the size of the response. Header needed for improved shipping information accuracy Although the X-EBAY-C-ENDUSERCTX header containing the contextualLocation is optional, it is strongly recommended that you use it when submitting this call. This header increases the accuracy of the estimated delivery window information and is needed for the calculated shipping information. You alwaysinclude the country code and you also include the zip code if zip codes are used in that country. For example: X-EBAY-C-ENDUSERCTX contextualLocation=country=US,zip=19406 Restrictions For a list of supported sites and other restrictions, see API Restrictions.


```js
ebay_buy_browse.getItemsByItemGroup({
  "item_group_id": ""
}, context)
```

#### Parameters
* item_group_id (string) **required** - Identifier of the item group to return. This Id is returned in the itemGroupHref field of the search call. For Example: https://api.ebay.com/buy/browse/v1/item_group/351825690866

### getItem
This call retrieves the details of a specific item, such as description, price, and other information the buyer needs to make a purchasing decision. Header needed for improved shipping information accuracy Although the X-EBAY-C-ENDUSERCTX header containing the contextualLocation is optional, it is strongly recommended that you use it when submitting this call. This header increases the accuracy of the estimated delivery window information and is needed for the calculated shipping information. When using this header, you must include the country code and you also include the zip code if zip codes are used in that country. For example: X-EBAY-C-ENDUSERCTX contextualLocation=country=US,zip=19406 Header needed for eBay Network Partners If you are an eBay Network Partner and want the URL to the View Item page with the affiliate tracking Id returned, you must pass in the X-EBAY-C-ENDUSERCTX header in the request. When you use this header, the affiliate tracking Id is returned in the itemAffiliateWebUrl field. For example: X-EBAY-C-ENDUSERCTX affiliateCampaignId=ePNCampaignId,affiliateReferenceId=referenceId Example if you need both contextualLocation and affiliate information: X-EBAY-C-ENDUSERCTX affiliateCampaignId=ePNCampaignId,affiliateReferenceId=referenceId,contextualLocation=country=CountryCode,zip=zipCode Restrictions For a list of supported sites and other restrictions, see API Restrictions.


```js
ebay_buy_browse.getItem({
  "item_id": ""
}, context)
```

#### Parameters
* item_id (string) **required** - An eBay identifier of an item. This Id is returned in the itemId field of the search call and in the itemId column of the item feed file. For example: v1|262446562346|561248611424

### search
This call performs an advanced search for items. You can search by keyword, category, eBay product Id (EPID), or gtin. Or a combination of these. For example: The following call returns 4,330,774 items. &nbsp;&nbsp;&nbsp;/buy/browse/v1/item_summary/search?q=phone This call, which limits the results to the category &quot;Cell Phones &amp; Smartphones&quot;, returns 142,098 items. &nbsp;&nbsp;&nbsp;/buy/browse/v1/item_summary/search?q=phone&amp;category_ids=9355 These calls, which limit results to a Samsung Galaxy S5, returns 97 items. &nbsp;&nbsp;&nbsp;/buy/browse/v1/item_summary/search?q=phone&amp;category_ids=220&amp;epid=182527490 &nbsp;&nbsp;&nbsp;or &nbsp;&nbsp;&nbsp;/buy/browse/v1/item_summary/search?epid=182527490 Controlling what is returned You can also control what is returned by using the fieldgroups field. In addition to returning items, which is the default, you can return refinements (metadata) about an item that enables you to create aspect histograms. A histogram enables users to drill down in each refinement narrowing the search results. You can return: ASPECT_REFINEMENTS - Lets shoppers refine the result set by variation aspects, such as Brand, Color, etc. Note: ASPECT_REFINEMENTS are category specific. BUYING_OPTION_REFINEMENT - Lets shoppers refine the result set by either FIXED_PRICE or AUCTION CATEGORY_REFINEMENTS - Lets shoppers refine the result set by item in a category CONDITION_REFINEMENT - Lets shoppers refine the result set by item condition, such as NEW, USED, etc. MATCHING_ITEMS - The default, which returns the items. When used with one or more of the refinement values above the specified refinements and all the matching items are returned. FULL - This returns all the refinement containers and all the matching items. Filtering by aspects You can use the aspect refinements returned to filter the result set using the aspect_filter field. For example: This call gets a list of the aspects pairs for the item and the dominant category (category most of the items are in). /buy/browse/v1/item_summary/search?q=world cup soccer ball&amp;fieldgroups=ASPECT_REFINEMENTS This call filters the items by one of the aspect pairs returned and the dominant category ( categoryId is required when using aspect_filter) /buy/browse/v1/item_summary/search?q=world cup soccer ball&amp;aspect_filter=categoryId:20863,Brand:{adidas} This call filters the items by multiple aspects /buy/browse/v1/item_summary/search?q=world cup soccer ball&amp;aspect_filter=categoryId:20863,Brand:{adidas},Featured Refinements:{Adidas Match Ball} This call filters the items by multiple aspect values /buy/browse/v1/item_summary/search?q=world cup soccer ball&amp;aspect_filter=categoryId:20863,Brand:{Nike|Wilson} Additional filters There are also multiple filters you can use to refine the result set, such as listing format, item condition, price range, UPC value, listing end date, location, and more. You can use multiple filters in a single call. For a list and details of the supported filters, see Search Filters Usage. Pagination and sort controls There are pagination controls (limit and offset fields) and sort query parameter that control/sort the data that is returned. By default, the results are sorted by &quot;Best Match&quot;. For more information about Best Match, see the eBay help page Best Match. Header needed for eBay Network Partners If you are an eBay Network Partner and want the URL to the View Item page with the affiliate tracking Id returned, you must pass in the X-EBAY-C-ENDUSERCTX header in the request. When you use this header, the affiliate tracking Id is returned in the itemAffiliateWebUrl field. For example: X-EBAY-C-ENDUSERCTX affiliateCampaignId=ePNCampaignId,affiliateReferenceId=referenceId Restrictions For a list of supported sites and other restrictions, see API Restrictions. Limitation This call can return a maximum of 10,000 items.


```js
ebay_buy_browse.search({}, context)
```

#### Parameters
* aspect_filter (string) - The aspect name/value pairs and category, which is required, to use to limit the results. For example, in a clothing category one aspect pair would be Color/Red. For example, the call below uses the category Id for Women's Clothing. This will return only items for a woman's red shirt. /buy/browse/v1/item_summary/search?q=shirt&amp;aspect_filter=categoryId:15724,Color:{Red} To get a list of the aspects pairs and the category, which is returned in the dominantCategoryId field, set fieldgroups to ASPECT_REFINEMENTS. /buy/browse/v1/item_summary/search?q=shirt&amp;fieldgroups=ASPECT_REFINEMENTS Required: categoryId:categoryId-value For implementation help, refer to eBay API documentation at https://developer.ebay.com/devzone/rest/api-ref/browse/types/AspectFilter.html
* category_ids (string) - The category Ids to use to limit the results. This field can have one category Id or a comma separated list of Ids. For example: &nbsp;&nbsp;&nbsp;GET https://api.ebay.com/buy/browse/v1/item_summary/search?category_ids=29792 Note: Currently, you can pass in only one category Id. You can also use any combination of the category_Ids, epid, and q fields. This gives you additional control over the result set. For example, let's say you are looking of a toy phone. If you search for &quot;phone&quot;, the result set will be mobile phones because this is the &quot;Best Match&quot; for this search. But if you also include the toy category Id, the results will be what you wanted. For example: &nbsp;&nbsp;&nbsp;GET https://api.ebay.com/buy/browse/v1/item_summary/search?q=phone&amp;category_ids=220 The list of eBay category Ids is not published and category Ids are not the same across all the eBay marketplaces. You can use the following techniques to find a category by site. Use the Category Changes page. Use the Taxonomy API. Submit the following call to get the dominantCategoryId. /buy/browse/v1/item_summary/search?q=keyword&amp;fieldgroups=ASPECT_REFINEMENTS Note: If a top-level (L1) category is specified, you must also include the q query parameter. Required: The call must have catedgory_ids, epid, or q (or any combination of these)
* epid (string) - The EPID is the eBay product identifier of a product from the eBay product catalog. Only items in the specified EPID are returned. The Marketing API getMerchandisedProducts call and the getItem, getItemByLegacyId, and getItemsByItemGroup calls return the EPID of the product. &nbsp;&nbsp;&nbsp;/buy/browse/v1/item_summary/search?epid:{15032} Maximum: 1 Required: The call must have category_ids, epid, gtin, or q (or any combination of these)
* fieldgroups (string) - This field lets you control what is to be returned in the response. The default is MATCHING_ITEMS, which returns the items that match the keyword or category specified. The other values return data that can be used to create histograms. For code examples see, aspect_filter Valid Values: ASPECT_REFINEMENTS - This returns the aspectDistributions container, which has the dominantCategoryId, matchCount, and refinementHref for the various aspects of the items found. For example, if you searched for 'Mustang', some of the aspect would be Model Year , Exterior Color , Vehicle Mileage , etc. Note: ASPECT_REFINEMENTS are category specific. BUYING_OPTION_REFINEMENTS - This returns the buyingOptionDistributions container, which has the matchCount and refinementHref for AUCTION and FIXED_PRICE (Buy It Now) items. Note: Classified items are not supported. CATEGORY_REFINEMENTS - This returns the categoryDistributions container, which has the categories that the item is in. CONDITION_REFINEMENTS - This returns the conditionDistributions container, such as NEW, USED, etc.. Within these groups are multiple states of the condition. For example, New can be New without tag, New in box, New without box, etc. MATCHING_ITEMS - This is meant to be used with one or more of the refinement values above. You use this to return the specified refinements and all the matching items. FULL - This returns all the refinement containers and all the matching items. Code so that your app gracefully handles any future changes to this list. Default: MATCHING_ITEMS
* filter (string) - This field supports multiple field filters that can be used to use to limit/customize the result set. For example: &nbsp;&nbsp;&nbsp;GET https://api.ebay.com/buy/browse/v1/item_summary/search?q=shirt&amp;filter=price:[10..50] You can also combine filters. &nbsp;&nbsp;&nbsp;GET https://api.ebay.com/buy/browse/v1/item_summary/search?q=shirt&amp;filter=price:[10..50],sellers:{rpseller|bigSal} The following are the supported filters. For details and examples for all the filters, see Search Filters Usage. buyingOptions conditionIds conditions deliveryCountry deliveryOptions deliveryPostalCode excludeCategoryIds excludeSellers itemEndDate itemLocationCountry itemStartDate paymentMethods pickupCountry pickupPostalCode pickupRadius pickupRadiusUnit price priceCurrency maxDeliveryCost (free shipping) returnsAccepted sellerAccountTypes sellers For implementation help, refer to eBay API documentation at https://developer.ebay.com/devzone/rest/api-ref/browse/types/FilterField.html
* gtin (string) - This field lets you search by GTIN (other Global Trade Item Number) or UPC (Universal Product Code) value. &nbsp;&nbsp;&nbsp;/buy/browse/v1/item_summary/search?gtin:{099482432621} Maximum: 1 Required: The call must have category_ids, epid, gtin, or q (or any combination of these)
* limit (string) - The number of items in a result set. Default: 50 Maximum per result set: 200 Maximum number of items returned: 10,000
* offset (string) - The number of items to skip in the result set. This is used with the limit field to control the pagination of the output. If offset is 0 and limit is 10, the call will retrieve items 1-10 from the list of items returned, if offset is 10 and limit is 10, the call will retrieve items 11 thru 20 from the list of items returned. Default: 0
* q (string) - A string consisting of one or more words that are used for a search of items on eBay. For example: &quot;iphone&quot; or &quot;Harry Potter&quot;. When keywords are separated by a comma, the comma is ignored. So a keyword of &quot;iphone, ipad&quot; is the same as using &quot;iphone ipad&quot;. Both queries return items that have iphone or ipad. Restriction: The * wildcard character is not allowed in this field. Required: The call must have category_ids, epid, gtin, or q (or any combination of these)
* sort (string) - Specifies the order and the field name to use to sort the items. To sort in descending order use - before the field name. Currently, you can only sort by price (in ascending or descending order), or by distance (only applicable if the local pickup filters are used, and only ascending order is supported). If no sort parameter is submitted, the result set is sorted by &quot;Best Match&quot;. The following are examples of using the sort query parameter. Sort Result &amp;sort=price sorts by price in ascending order (lowest price first) &amp;sort=-price sorts by price in descending order (highest price first) &amp;sort=distance sorts by distance in ascending order (shortest distance first) Default: ascending For implementation help, refer to eBay API documentation at https://developer.ebay.com/devzone/rest/api-ref/browse/types/SortField.html

