# @datafire/ebay_buy_browse

Client library for API to View & Search for Items

## Installation and Usage
```bash
npm install --save @datafire/ebay_buy_browse
```
```js
let ebay_buy_browse = require('@datafire/ebay_buy_browse').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

ebay_buy_browse.search({}).then(data => {
  console.log(data);
});
```

## Description

The Browse API lets shoppers search for specific items by keyword, category, product, or item aspects and retrieve the details of an item.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
ebay_buy_browse.oauthCallback({
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
ebay_buy_browse.oauthRefresh(null, context)
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

### getItemByLegacyId
This call is a bridge between the eBay legacy APIs, such as Trading, Shopping, and Finding and the eBay Buy APIs. There are differences between how legacy APIs and RESTful APIs return the identifier of an &quot;item&quot;. There is also a difference in what the item Id represents and in the format of the item Id value returned. This call lets you use the legacy item Ids retrieve the details of a specific item, such as description, price, and other information the buyer needs to make a purchasing decision. It also returns the RESTful item Id, which you can use with all the Buy API calls. For more information about how to use legacy Ids with the Buy APIs, see Legacy API compatibility in the Buying Integration guide. This call returns the item details and requires you to pass in either the item Id of a non-variation item or the item Ids of both the parent and child of a item group. An item group is an item that has various aspect differences, such as color, size, storage capacity, etc. When an item group is created, one of the item variations, such as the red shirt size L, is chosen as the &quot;parent&quot;. All the other items in the group are the children, such as the blue shirt size L, red shirt size M, etc. The fieldgroups URI parameter lets you control what is returned in the response. Setting fieldgroups to PRODUCT, adds additional fields to the default response that return information about the product of the item. For more information, see fieldgroups. Request headers You will want to use the X-EBAY-C-ENDUSERCTX request header with this call. If you are an eBay Network Partner you must use affiliateCampaignId=ePNCampaignId,affiliateReferenceId=referenceId in the header in order to be paid for selling eBay items on your site and it is strongly recommended you use contextualLocation to improved the estimated delivery window information. For details see, Request headers in the Buy APIs Overview. Restrictions For a list of supported sites and other restrictions, see API Restrictions.


```js
ebay_buy_browse.getItemByLegacyId({
  "legacy_item_id": ""
}, context)
```

#### Input
* input `object`
  * fieldgroups `string`: This field lets you control what is returned in the response. If you do not set this field, the call returns all the details of the item. Note: In this call, the only value supported is PRODUCT. Valid values: PRODUCT - This adds the additionalImages, additionalProductIdentities, aspectGroups, description, gtins, image, and title fields to the response, which describe the item's product. See Product for more information about these fields.
  * legacy_item_id **required** `string`: Specifies either: The legacy item Id of an item that is not part of a group. The legacy item Id of a group, which is the Id of the &quot;parent&quot; of the group of items. Note: If you pass in a group Id, you must also use the legacy_variation_id field and pass in the legacy Id of the specific item variation (child Id). Legacy Ids are returned by eBay traditional APIs, such as the Trading API or Finding API. The following is an example of using the value of the ItemID field for a specific item from Trading to get the RESTful itemId value. &nbsp;&nbsp;&nbsp; browse/v1/item/get_item_by_legacy_id?legacy_item_id=110039490209 Maximum: 1
  * legacy_variation_id `string`: Specifies the legacy item Id of a specific item in an item group, such as the red shirt size L. Legacy Ids are returned by eBay traditional APIs, such as the Trading API or Finding API. Maximum: 1 Requirement: You must always pass in the legacy_item_id with the legacy_variation_id
  * legacy_variation_sku `string`: Specifics the legacy SKU of the item. SKU are item Ids created by the seller. Legacy SKUs are returned by eBay traditional APIs, such as the Trading API or Finding API. The following is an example of using the value of the ItemID and SKU fields, which were returned by the Trading API, to get the RESTful itemId value. &nbsp;&nbsp;&nbsp; browse/v1/item/get_item_by_legacy_id?legacy_item_id=110039490209&amp;legacy_variation_sku=V-00031-WHM Maximum: 1 Requirement: You must always pass in the legacy_item_id with the legacy_variation_sku

#### Output
* output [Item](#item)

### getItemsByItemGroup
This call retrieves the details of the individual items in an item group. An item group is an item that has various aspect differences, such as color, size, storage capacity, etc. You pass in the item group Id as a URI parameter. You use this call to show the item details of items with multiple aspects, such as color, size, storage capacity, etc. This call returns two main containers; items and commonDescriptions. The items container has an array of containers with the details of each item in the group. The commonDescriptions container has an array of containers for a description and the item Ids of all the items that have this exact description. Because items within an item group often have the same description, this decreases the size of the response. Request headers You will want to use the X-EBAY-C-ENDUSERCTX request header with this call. If you are an eBay Network Partner you must use affiliateCampaignId=ePNCampaignId,affiliateReferenceId=referenceId in the header in order to be paid for selling eBay items on your site and it is strongly recommended you use contextualLocation to improved the estimated delivery window information. For details see, Request headers in the Buy APIs Overview. Restrictions For a list of supported sites and other restrictions, see API Restrictions.


```js
ebay_buy_browse.getItemsByItemGroup({
  "item_group_id": ""
}, context)
```

#### Input
* input `object`
  * item_group_id **required** `string`: Identifier of the item group to return. An item group is an item that has various aspect differences, such as color, size, storage capacity, etc. This Id is returned in the itemGroupHref field of the search and getItem calls. For Example: https://api.ebay.com/buy/browse/v1/item/get_items_by_item_group?item_group_id=351825690866

#### Output
* output [Items](#items)

### getItem
This call retrieves the details of a specific item, such as description, price, category, all item aspects, condition, return policies, seller feedback and score, shipping options, shipping costs, estimated delivery, and other information the buyer needs to make a purchasing decision. The Buy APIs are designed to let you create an eBay shopping experience in your app or website. This means you will need to know when something, such as the availability, quantity, etc., has changed in any eBay item you are offering. You can do this easily by setting the fieldgroups URI parameter. This parameter lets you control what is returned in the response. Setting fieldgroups to COMPACT reduces the response to only the five fields that you need in order to check if any item detail has changed. Setting fieldgroups to PRODUCT, adds additional fields to the default response that return information about the product of the item. You can use either COMPACT or PRODUCT but not both. For more information, see fieldgroups. Request headers You will want to use the X-EBAY-C-ENDUSERCTX request header with this call. If you are an eBay Network Partner you must use affiliateCampaignId=ePNCampaignId,affiliateReferenceId=referenceId in the header in order to be paid for selling eBay items on your site and it is strongly recommended you use contextualLocation to improved the estimated delivery window information. For details see, Request headers in the Buy APIs Overview. Restrictions For a list of supported sites and other restrictions, see API Restrictions.


```js
ebay_buy_browse.getItem({
  "item_id": ""
}, context)
```

#### Input
* input `object`
  * fieldgroups `string`: This parameter lets you control what is returned in the response. If you do not set this field, the call returns all the details of the item. Valid values: PRODUCT - This adds the additionalImages, additionalProductIdentities, aspectGroups, description, gtins, image, and title product fields to the response, which describe the product associated with the item. See Product for more information about these fields. COMPACT - This returns only the following fields, which let you quickly check if the availability or price of the item has changed, if the item has been revised by the seller, or if an item's top-rated plus status has changed for items you have stored. itemId - The identifier of the item. sellerItemRevision - An identifier generated/incremented when a seller revises the item. There are two types of item revisions; seller changes, such as changing the title, and eBay system changes, such as changing the quantity when an item is purchased. This Id is changed only when the seller makes a change to the item. This means you cannot use this value to determine if the quantity has changed. topRatedBuyingExperience - A boolean value indicating if this item is a top-rated plus item. A change in the item's top rated plus standing is not tracked by the revision Id. See topRatedBuyingExperience for more information. price - This is tracked by the revision Id but is returned here to enable you to quickly verify the price of the item. estimatedAvailabilities - Returns the item availability information, which is based on the item's quantity. Changes in quantity are not tracked by the revision Id. For Example To check if a stored item's information is current, do following. Pass in the item Id and set fieldgroups to COMPACT. item/v1|46566502948|0?fieldgroups=COMPACT Do one of the following: If the sellerItemRevision field is returned and you haven't stored a revision number for this item, record the number and pass in the item Id in the getItem call to get the latest information. If the revision number is different from the value you have stored, update the value and pass in the item Id in the getItem call to get the latest information. If the sellerItemRevision field is not returned or has not changed, where needed, update the item information with the information returned in the response. Maximum value: 1 If more than one values is specified, the first value will be used.
  * item_id **required** `string`: The eBay identifier of an item. This Id is returned by the Browse and Feed API calls. The Id must be in RESTful item Id format. For example: v1|262446562346|561248611424 or v1|112330214619|0. For more information about item Id for RESTful APIs, see the Legacy API compatibility section of the Buy APIs Overview.

#### Output
* output [Item](#item)

### search
This call performs an advanced search for items. You can search by keyword, category, eBay product Id (EPID), or gtin. Or a combination of these. Encoding Parameters and Headers As with all query parameter values, the fields parameter value and request header values must be URL encoded. For better readability, the examples in this document omit the encoding. Example: &nbsp;&nbsp;search?q=world cup soccer ball&amp;aspect_filter=categoryId:20863,Brand:{Nike|Wilson} Encoded Example: &nbsp;&nbsp; search?q=world cup soccer ball&amp;aspect_filter=categoryId%3A20863%2CBrand%3A%7BNike%7CWilson%7D For more information about encoding, see HTML URL Encoding Reference The following are examples of using filters: The following call returns 4,330,774 items. &nbsp;&nbsp;&nbsp;/buy/browse/v1/item_summary/search?q=phone This call, which limits the results to the category &quot;Cell Phones &amp; Smartphones&quot;, returns 142,098 items. &nbsp;&nbsp;&nbsp;/buy/browse/v1/item_summary/search?q=phone&amp;category_ids=9355 These calls, which limit results to a Samsung Galaxy S5, returns 97 items. &nbsp;&nbsp;&nbsp;/buy/browse/v1/item_summary/search?q=phone&amp;category_ids=220&amp;epid=182527490 &nbsp;&nbsp;&nbsp;or &nbsp;&nbsp;&nbsp;/buy/browse/v1/item_summary/search?epid=182527490 Controlling what is returned You can also control what is returned by using the fieldgroups field. In addition to returning items, which is the default, you can return refinements (metadata) about an item that enables you to create aspect histograms. A histogram enables users to drill down in each refinement narrowing the search results. You can return: ASPECT_REFINEMENTS - Lets shoppers refine the result set by variation aspects, such as Brand, Color, etc. BUYING_OPTION_REFINEMENT - Lets shoppers refine the result set by either FIXED_PRICE or AUCTION CATEGORY_REFINEMENTS - Lets shoppers refine the result set by items in a category CONDITION_REFINEMENT - Lets shoppers refine the result set by item condition, such as NEW, USED, etc. MATCHING_ITEMS - The default, which returns the items. When used with one or more of the refinement values above the specified refinements and all the matching items are returned. FULL - This returns all the refinement containers and all the matching items. Filtering by aspects You can use the aspect refinements returned to filter the result set using the aspect_filter field. For example: This call gets a list of the aspects pairs for the item and the dominant category (category most of the items are in). /buy/browse/v1/item_summary/search?q=world cup soccer ball&amp;fieldgroups=ASPECT_REFINEMENTS This call filters the items by one of the aspect pairs returned and the dominant category ( categoryId is required when using aspect_filter) /buy/browse/v1/item_summary/search?q=world cup soccer ball&amp;aspect_filter=categoryId:20863,Brand:{adidas} This call filters the items by multiple aspects /buy/browse/v1/item_summary/search?q=world cup soccer ball&amp;aspect_filter=categoryId:20863,Brand:{adidas},Featured Refinements:{Adidas Match Ball} This call filters the items by multiple aspect values /buy/browse/v1/item_summary/search?q=world cup soccer ball&amp;aspect_filter=categoryId:20863,Brand:{Nike|Wilson} Additional filters There are also multiple filters you can use to refine the result set, such as listing format, item condition, price range, listing end date, location, and more. You can use multiple filters in a single call. For a list and details of the supported filters, see search Call Field Filters. Pagination and sort controls There are pagination controls ( limit and offset fields) and sort query parameter that control/sort the data that is returned. By default, the results are sorted by &quot;Best Match&quot;. For more information about Best Match, see the eBay help page Best Match. Request headers You will want to use the X-EBAY-C-ENDUSERCTX request header with this call. If you are an eBay Network Partner you must use affiliateCampaignId=ePNCampaignId,affiliateReferenceId=referenceId in the header in order to be paid for selling eBay items on your site and it is strongly recommended you use contextualLocation to improved the estimated delivery window information. For details see, Request headers in the Buy APIs Overview. Restrictions For a list of supported sites and other restrictions, see API Restrictions. Limitation: This call can return a maximum of 10,000 items.


```js
ebay_buy_browse.search({}, context)
```

#### Input
* input `object`
  * aspect_filter `string`: The aspect name/value pairs and category, which is required, to use to limit the results. For example, in a clothing category one aspect pair would be Color/Red. For example, the call below uses the category Id for Women's Clothing. This will return only items for a woman's red shirt. /buy/browse/v1/item_summary/search?q=shirt&amp;aspect_filter=categoryId:15724,Color:{Red} To get a list of the aspects pairs and the category, which is returned in the dominantCategoryId field, set fieldgroups to ASPECT_REFINEMENTS. /buy/browse/v1/item_summary/search?q=shirt&amp;fieldgroups=ASPECT_REFINEMENTS Required: categoryId:categoryId-value For implementation help, refer to eBay API documentation at https://developer.ebay.com/devzone/rest/api-ref/browse/types/AspectFilter.html
  * category_ids `string`: The category Ids to use to limit the results. This field can have one category Id or a comma separated list of Ids. For example: &nbsp;&nbsp;&nbsp;GET https://api.ebay.com/buy/browse/v1/item_summary/search?category_ids=29792 Note: Currently, you can pass in only one category Id. You can also use any combination of the category_Ids, epid, and q fields. This gives you additional control over the result set. For example, let's say you are looking of a toy phone. If you search for &quot;phone&quot;, the result set will be mobile phones because this is the &quot;Best Match&quot; for this search. But if you also include the toy category Id, the results will be what you wanted. For example: &nbsp;&nbsp;&nbsp;GET https://api.ebay.com/buy/browse/v1/item_summary/search?q=phone&amp;category_ids=220 The list of eBay category Ids is not published and category Ids are not the same across all the eBay marketplaces. You can use the following techniques to find a category by site. Use the Category Changes page. Use the Taxonomy API. For details see Categories for Buy API Calls. Submit the following call to get the dominantCategoryId for an item. /buy/browse/v1/item_summary/search?q=keyword&amp;fieldgroups=ASPECT_REFINEMENTS Note: If a top-level (L1) category is specified, you must also include the q query parameter. Required: The call must have category_ids, epid, gtin, or q (or any combination of these)
  * epid `string`: The EPID is the eBay product identifier of a product from the eBay product catalog. Only items in the specified EPID are returned. The Marketing API getMerchandisedProducts call and the getItem, getItemByLegacyId, and getItemsByItemGroup calls return the EPID of the product. &nbsp;&nbsp;&nbsp;/buy/browse/v1/item_summary/search?epid:{15032} Maximum: 1 Required: The call must have category_ids, epid, gtin, or q (or any combination of these)
  * fieldgroups `string`: This field lets you control what is to be returned in the response. The default is MATCHING_ITEMS, which returns the items that match the keyword or category specified. The other values return data that can be used to create histograms. For code examples see, aspect_filter. Valid Values: ASPECT_REFINEMENTS - This returns the aspectDistributions container, which has the dominantCategoryId, matchCount, and refinementHref for the various aspects of the items found. For example, if you searched for 'Mustang', some of the aspect would be Model Year , Exterior Color , Vehicle Mileage , etc. Note: ASPECT_REFINEMENTS are category specific. BUYING_OPTION_REFINEMENTS - This returns the buyingOptionDistributions container, which has the matchCount and refinementHref for AUCTION and FIXED_PRICE (Buy It Now) items. Note: Classified items are not supported. CATEGORY_REFINEMENTS - This returns the categoryDistributions container, which has the categories that the item is in. CONDITION_REFINEMENTS - This returns the conditionDistributions container, such as NEW, USED, etc. Within these groups are multiple states of the condition. For example, New can be New without tag, New in box, New without box, etc. MATCHING_ITEMS - This is meant to be used with one or more of the refinement values above. You use this to return the specified refinements and all the matching items. FULL - This returns all the refinement containers and all the matching items. Code so that your app gracefully handles any future changes to this list. Default: MATCHING_ITEMS
  * filter `string`: This field supports multiple field filters that can be used to use to limit/customize the result set. For example: &nbsp;&nbsp;&nbsp;GET https://api.ebay.com/buy/browse/v1/item_summary/search?q=shirt&amp;filter=price:[10..50] You can also combine filters. &nbsp;&nbsp;&nbsp;GET https://api.ebay.com/buy/browse/v1/item_summary/search?q=shirt&amp;filter=price:[10..50],sellers:{rpseller|bigSal} The following are the supported filters. For details and examples for all the filters, see search Call Field Filters. buyingOptions conditionIds conditions deliveryCountry deliveryOptions deliveryPostalCode excludeCategoryIds excludeSellers itemEndDate itemLocationCountry itemStartDate paymentMethods pickupCountry pickupPostalCode pickupRadius pickupRadiusUnit price priceCurrency maxDeliveryCost (free shipping) returnsAccepted sellerAccountTypes sellers For implementation help, refer to eBay API documentation at https://developer.ebay.com/devzone/rest/api-ref/browse/types/FilterField.html
  * gtin `string`: This field lets you search by the Global Trade Item Number of the item as defined by http://www.gtin.info. This can be a UPC (Universal Product Code), EAN (European Article Number), or an ISBN (International Standard Book Number) value. &nbsp;&nbsp;&nbsp;/buy/browse/v1/item_summary/search?gtin:{099482432621} Maximum: 1 Required: The call must have category_ids, epid, gtin, or q (or any combination of these)
  * limit `string`: The number of items in a result set. Default: 50 Maximum per result set: 200 Maximum number of items returned: 10,000
  * offset `string`: The number of items to skip in the result set. This is used with the limit field to control the pagination of the output. If offset is 0 and limit is 10, the call will retrieve items 1-10 from the list of items returned, if offset is 10 and limit is 10, the call will retrieve items 11 thru 20 from the list of items returned. Valid Values: 0-10,000 (inclusive) Default: 0 Maximum number of items returned: 10,000
  * q `string`: A string consisting of one or more words that are used for a search of items on eBay. For example: &quot;iphone&quot; or &quot;Harry Potter&quot;. When keywords are separated by a comma, the comma is ignored. So a keyword of &quot;iphone, ipad&quot; is the same as using &quot;iphone ipad&quot;. Both queries return items that have iphone or ipad. Restriction: The * wildcard character is not allowed in this field. Required: The call must have category_ids, epid, gtin, or q (or any combination of these)
  * sort `string`: Specifies the order and the field name to use to sort the items. To sort in descending order use - before the field name. Currently, you can only sort by price (in ascending or descending order), or by distance (only applicable if the &quot;pickup&quot; filters are used, and only ascending order is supported). If no sort parameter is submitted, the result set is sorted by &quot;Best Match&quot;. The following are examples of using the sort query parameter. Sort Result &amp;sort=price Sorts by price in ascending order (lowest price first) &amp;sort=-price Sorts by price in descending order (highest price first) &amp;sort=distance Sorts by distance in ascending order (shortest distance first) Default: ascending For implementation help, refer to eBay API documentation at https://developer.ebay.com/devzone/rest/api-ref/browse/types/SortField.html

#### Output
* output [SearchPagedCollection](#searchpagedcollection)



## Definitions

### AdditionalProductIdentity
* AdditionalProductIdentity `object`: The type that defines the array of additional product type/value pairs for the same product associated with an item. A product can have more than one identifier value for a product type, such as UPC or EAN. For example, the same product UPC can have an identifier that is 12, 13, or 14 digits. This container returns all the identifiers for each product Id type. These are in addition to the identifiers returned in the <b> mpn</b> and <b> gitn</b> fields. 
  * productIdentity `array`: An array of additional type/value pairs for the same product associated with the item. For example: &nbsp;&nbsp;&nbsp;&quot;identifierType&quot;: &quot;UPC&quot;&nbsp;&nbsp;&nbsp;&nbsp; and &nbsp;&quot;identifierValue&quot;: &quot;0718908620489&quot; &nbsp;&nbsp;&nbsp;&quot;identifierType&quot;: &quot;UPC_12&quot;&nbsp; and &nbsp;&quot;identifierValue&quot;: &quot;718908620489&quot; &nbsp;&nbsp;&nbsp;&quot;identifierType&quot;: &quot;UPC_13&quot;&nbsp; and &nbsp;&quot;identifierValue&quot;: &quot;0718908620489&quot;
    * items [ProductIdentity](#productidentity)

### Address
* Address `object`: The type that defines the fields for an address.
  * addressLine1 `string`: The first line of the street address.
  * addressLine2 `string`: The second line of the street address. This field is not always used, but can be used for 'Suite Number' or 'Apt Number'.
  * city `string`: The city of the address.
  * country `string`: The three-letter ISO 3166-1 standard of the country of the address. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/browse/types/CountryCodeEnum.html'>eBay API documentation</a>
  * county `string`: The county of the address.
  * postalCode `string`: The postal code of the address.
  * stateOrProvince `string`: The state or province of the address.

### Aspect
* Aspect `object`: The type that defines the fields for the name/value pairs for the aspects of the product. For example: BRAND/Apple
  * localizedName `string`: The text representing the name of the aspect for the name/value pair, such as Brand.
  * localizedValues `array`: The text representing the value of the aspect for the name/value pair, such as Apple.
    * items `string`

### AspectDistribution
* AspectDistribution `object`: The type that define the fields for the aspect information. Aspects are the variations of an item, such as color, size, etc.
  * aspectValueDistributions `array`: An array of containers for the various values of the aspect and the match count and a HATEOAS reference ( refinementHref) for this aspect.
    * items [AspectValueDistribution](#aspectvaluedistribution)
  * localizedAspectName `string`: Name of an aspect, such as Brand, Color, etc.

### AspectGroup
* AspectGroup `object`
  * aspects `array`: An array of the name/value pairs for the aspects of the product. For example: BRAND/Apple
    * items [Aspect](#aspect)
  * localizedGroupName `string`: The name of a group of aspects. In the following example, Product Identifiers and Process are product aspect group names. Under the group name are the product aspect name/value pairs. Product Identifiers &nbsp;&nbsp;&nbsp;Brand/Apple &nbsp;&nbsp;&nbsp;Product Family/iMac Processor &nbsp;&nbsp;&nbsp;Processor Type/Intel &nbsp;&nbsp;&nbsp;Processor Speed/3.10

### AspectValueDistribution
* AspectValueDistribution `object`: The container that defines the fields for the conditions refinements. This container is returned when <b> fieldgroups</b> is set to <code>ASPECT_REFINEMENTS</code> or <code>FULL</code> in the request.
  * localizedAspectValue `string`: The value of an aspect. For example, Red is a value for the aspect Color.
  * matchCount `integer`: The number of items with this aspect.
  * refinementHref `string`: A HATEOAS reference for this aspect.

### BuyingOptionDistribution
* BuyingOptionDistribution `object`: The container that defines the fields for the buying options refinements. This container is returned when <b> fieldgroups</b> is set to <code>BUYING_OPTION_REFINEMENTS</code> or <code>FULL</code> in the request.
  * buyingOption `string`: Buying option type. This will be either AUCTION or FIXED_PRICE.
  * matchCount `integer`: The number of items having this buying option.
  * refinementHref `string`: The HATEOAS reference for this buying option.

### Category
* Category `object`: This type is used by the <b> categories</b>  container in the response of the <b> search</b>  call, and consists of the primary listing category Id of the item (as well as secondary listing category if item was listed in two categories).
  * categoryId `string`: The unique identifier of the primary listing category of the item (as well as secondary listing category if item was listed in two categories).

### CategoryDistribution
* CategoryDistribution `object`: The container that defines the fields for the category refinements. This container is returned when <b> fieldgroups</b> is set to <code>CATEGORY_REFINEMENTS</code> or <code>FULL</code> in the request.
  * categoryId `string`: The identifier of the category.
  * categoryName `string`: The name of the category, such as Baby &amp; Toddler Clothing.
  * matchCount `integer`: The number of items in this category.
  * refinementHref `string`: The HATEOAS reference of this category.

### CommonDescriptions
* CommonDescriptions `object`: The type that defines the fields for the item Ids that all use a common description.  Often the item variations within an item group all have the same description. Instead of repeating this description in the item details of each item, a description that is shared by at least one other item is returned in this container. If the description is unique, it is returned in the <b> items.description</b> field.
  * description `string`: The item description that is used by more than one of the item variations.
  * itemIds `array`: A list of item Ids that have this description.
    * items `string`

### ConditionDistribution
* ConditionDistribution `object`: The container that defines the fields for the conditions refinements. This container is returned when <b> fieldgroups</b> is set to <code>CONDITION_REFINEMENTS</code> or <code>FULL</code> in the request.
  * condition `string`: The name of the condition, such as New or Used
  * conditionId `string`: The identifier of the condition. For example, 1000 is the identifier for NEW.
  * matchCount `integer`: The number of items having the condition.
  * refinementHref `string`: The HATEOAS reference of this condition.

### ConvertedAmount
* ConvertedAmount `object`: The type that defines the fields for a monetary value and the conversion of the value into another currency.
  * convertedFromCurrency `string`: A three-letter ISO 4217 code that indicates the currency of the amount in the convertedFromValue field. This value is required or returned only if currency conversion/localization is required, and represents the pre-conversion currency. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/browse/types/CurrencyCodeEnum.html'>eBay API documentation</a>
  * convertedFromValue `string`: The monetary amount before any conversion is performed, in the currency specified by the convertedFromCurrency field. This value is required or returned only if currency conversion/localization is required. The value field contains the converted amount of this value, in the currency specified by the currency field.
  * currency `string`: A three-letter ISO 4217 code that indicates the currency of the amount in the value field. If currency conversion/localization is required, this is the post-conversion currency of the amount in the value field. Default: The currency of the user's country. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/browse/types/CurrencyCodeEnum.html'>eBay API documentation</a>
  * value `string`: The dollar value of the currency specified in the currency field. The value of currency defaults to the standard currency used by the country of the eBay site offering the item.

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

### EstimatedAvailability
* EstimatedAvailability `object`: The type that defines the fields for the estimated item availability information.
  * availabilityThreshold `integer`: The 'display item quantity' threshold value the seller has set.
  * availabilityThresholdType `string`: Only returns MORE_THAN, which indicates that the seller has more that the 'quantity display preference' value in stock for this item. This field depends on how the seller has set their item quantity display preference. Let's say the following are the quantity display preferences the seller can choose between. Display &quot;More than 10 available&quot; in your listing (if applicable) If the seller enables this preference, this field is returned as long as there are more than 10 in inventory of this item. If the quantity is equal to 10 or drops below 10, this field is not returned and the actual quantity of the item is returned in the estimatedAvailableQuantity field. Display the exact quantity in your listings If the seller enables this preference, the availabilityThresholdType field is not returned and the actual quantity of the item is returned in the estimatedAvailableQuantity field. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/browse/types/AvailabilityThresholdEnum.html'>eBay API documentation</a>
  * deliveryOptions `array`: An array of available delivery options.
    * items `string`:  For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/browse/types/DeliveryOptionsEnum.html'>eBay API documentation</a>
  * estimatedAvailabilityStatus `string`: Indicates the estimated availability of this item. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/browse/types/AvailabilityStatusEnum.html'>eBay API documentation</a>
  * estimatedAvailableQuantity `integer`: The estimated number of a specific item that are available for purchase.
  * estimatedSoldQuantity `integer`: The estimated number of a specific item that have been sold.

### Image
* Image `object`: The type that defines the details of an image, such as size and URL. Currently only <b> imageUrl</b> is populated. The <b> height</b> and <b> width</b> were added for future use.
  * height `integer`: Reserved for future use.
  * imageUrl `string`: The URL of the image of the item.
  * width `integer`: Reserved for future use.

### Item
* Item `object`: Type that defines the fields for the item details for a specific item.
  * additionalImages `array`: An array of containers with the URLs for the images that are in addition to the primary image. The primary image is returned in the image.imageUrl field.
    * items [Image](#image)
  * adultOnly `boolean`: This indicates if the item is for adults only. For more information about adult-only items on eBay, see Adult items policy for sellers and Searching for adult only items for buyers.
  * ageGroup `string`: (Primary Item Aspect) The age group for which the product is recommended. For example, newborn, infant, toddler, kids, adult, etc. All the item aspects, including this aspect, are returned in the localizedAspects container.
  * bidCount `integer`: This integer value indicates the total number of bids that have been placed against an auction item. This field is returned only for auction listings.
  * brand `string`: (Primary Item Aspect) The name brand of the item, such as Nike, Apple, etc. All the item aspects, including this aspect, are returned in the localizedAspects container.
  * buyingOptions `array`: A list of purchase options available for the item, such as FIXED PRICE.
    * items `string`
  * categoryId `string`: The Id of the leaf category for this item. A left category is the lowest level in the category tree. This category has no children.
  * categoryPath `string`: Text that shows the category hierarchy of the item. For example: Computers/Tablets &amp; Networking, Laptops &amp; Netbooks, PC Laptops &amp; Netbooks
  * color `string`: (Primary Item Aspect) Text describing the color of the item. All the item aspects, including this aspect, are returned in the localizedAspects container.
  * condition `string`: The name of the condition of the item, such as New or Used.
  * conditionId `string`: The identifier of the condition. For example, 1000 is the identifier for NEW.
  * currentBidPrice [ConvertedAmount](#convertedamount)
  * description `string`: The full description of the item that was created by the seller. This can be plain text or rich content.
  * energyEfficiencyClass `string`: Indicates the European energy efficiency rating (EEK) of the item. This field is returned only if the seller specified the energy efficiency rating. The rating is a set of energy efficiency classes from A to G, where 'A' is the most energy efficient and 'G' is the least efficient. This rating helps buyers choose between various models. When the manufacturer's specifications for this item are available, the link to this information is returned in the productFicheWebUrl field.
  * epid `string`: An EPID is the eBay product identifier of a product from the eBay product catalog. This indicates the product in which the item belongs.
  * estimatedAvailabilities `array`: The container that returns the item availability information. Because the quantity of an item can change several times within a few seconds, it is impossible to return the exact quantity. So instead of returning quantity, this returns the availability of the item based on the threshold the seller has set.
    * items [EstimatedAvailability](#estimatedavailability)
  * gender `string`: (Primary Item Aspect) The gender for the item. This is used for items that could vary by gender, such as clothing. For example: male, female, or unisex. All the item aspects, including this aspect, are returned in the localizedAspects container.
  * gtin `string`: The unique Global Trade Item number of the item as defined by http://www.gtin.info. This can be a UPC (Universal Product Code), EAN (European Article Number), or an ISBN (International Standard Book Number) value.
  * image [Image](#image)
  * itemAffiliateWebUrl `string`: The URL of the View Item page of the item, which includes the affiliate tracking Id. This field is only returned if the seller enables affiliate tracking for the listing by including the X-EBAY-C-ENDUSERCTX request header in the call.
  * itemEndDate `string`: The date and time up to which the items can be purchased. This value is returned in UTC format (yyyy-MM-ddThh:mm:ss.sssZ), which you can convert into the local time of the buyer.
  * itemId `string`: The unique identifier of the item. Example: v1|150006693022|450002439078
  * itemLocation [Address](#address)
  * itemWebUrl `string`: The URL of the View Item page of the item.
  * localizedAspects `array`: An array of containers for the complete list of the name/value pairs that describe the variation of the item.
    * items [TypedNameValue](#typednamevalue)
  * marketingPrice [MarketingPrice](#marketingprice)
  * material `string`: (Primary Item Aspect) Text describing what the item is made of. For example, silk. All the item aspects, including this aspect, are returned in the localizedAspects container.
  * mpn `string`: The manufacturer's part number, which is a unique number that identifies a specific product. To identify the product, this is always used along with brand.
  * pattern `string`: (Primary Item Aspect) Text describing the pattern used on the item. For example, paisley. All the item aspects, including this aspect, are returned in the localizedAspects container.
  * price [ConvertedAmount](#convertedamount)
  * priceDisplayCondition `string`: This enumeration value indicates how item price is displayed. For some items, the prices are so low that they can only be shown to the buyer after they add the item to the cart. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/browse/types/PriceDisplayConditionEnum.html'>eBay API documentation</a>
  * primaryItemGroup [ItemGroupSummary](#itemgroupsummary)
  * primaryProductReviewRating [ReviewRating](#reviewrating)
  * product [Product](#product)
  * productFicheWebUrl `string`: The URL of a page containing the manufacture's specification of this item, which helps buyers make a purchasing decision. This information is available only for items that include the European energy efficiency rating (EEK) but is not available for all items with an EEK rating. This field is returned only if this information is available. The EEK rating of the item is returned in the energyEfficiencyClass field.
  * quantityLimitPerBuyer `integer`: The maximum number for a specific item that one buyer can purchase.
  * returnTerms [ItemReturnTerms](#itemreturnterms)
  * seller [Seller](#seller)
  * sellerItemRevision `string`: An identifier generated/incremented when a seller revises the item. There are two types of item revisions; seller changes, such as changing the title, and eBay system changes, such as changing the quantity when an item is purchased. This Id is changed only when the seller makes a change to the item. This means you cannot use this value to determine if the quantity has changed.
  * shipToLocations [ShipToLocations](#shiptolocations)
  * shippingOptions `array`: An array of shipping options containers that have the details about cost, carrier, etc. of one shipping option.
    * items [ShippingOption](#shippingoption)
  * shortDescription `string`: A snippet of the full description of the item in plain text.
  * size `string`: (Primary Item Aspect) The size of the item. For example, '7' for a size 7 shoe. All the item aspects, including this aspect, are returned in the localizedAspects container.
  * sizeSystem `string`: (Primary Item Aspect) The sizing system of the country. All the item aspects, including this aspect, are returned in the localizedAspects container. Valid Values: &nbsp;&nbsp;US &nbsp;&nbsp;UK &nbsp;&nbsp;EU &nbsp;&nbsp;DE &nbsp;&nbsp;FR &nbsp;&nbsp;JP &nbsp;&nbsp;CN (China) &nbsp;&nbsp;IT &nbsp;&nbsp;BR &nbsp;&nbsp;MEX &nbsp;&nbsp;AU Code so that your app gracefully handles any future changes to this list.
  * sizeType `string`: (Primary Item Aspect) Text describing a size group in which the item would be included, such as regular, petite, plus, big-and-tall or maternity. All the item aspects, including this aspect, are returned in the localizedAspects container.
  * subtitle `string`: An additional shorten title for the item that is created by the seller.
  * taxes `array`: The container for the tax information for item.
    * items [Taxes](#taxes)
  * title `string`: The seller-created title of the item.
  * topRatedBuyingExperience `boolean`: Indicates if the item a top-rated plus item. There are three benefits of a top-rated plus item; a minimum 30-day money-back return policy, shipping the items in 1 business day with tracking provided, and the added comfort of knowing this item is from experienced sellers with the highest buyer ratings. See the Top Rated Plus Items and Becoming a Top Rated Seller and qualifying for Top Rated Plus help topics for more information.
  * uniqueBidderCount `integer`: This integer value indicates the number of different eBay users who have placed one or more bids on an auction item. This field is only applicable to auction listings.
  * unitPrice [ConvertedAmount](#convertedamount)
  * unitPricingMeasure `string`: The designation, such as size, weight, volume, count, etc., that was used to specify the quantity of the item. This helps buyers compare prices. For example, the following tells the buyer that the item is 7.99 per 100 grams. &quot;unitPricingMeasure&quot;: &quot;100g&quot;, &quot;unitPrice&quot;: { &nbsp;&nbsp;&quot;value&quot;: &quot;7.99&quot;, &nbsp;&nbsp;&quot;currency&quot;: &quot;GBP&quot;
  * warnings `array`: An array of warning messages. These type of errors do not prevent the call from executing but should be checked.
    * items [Error](#error)

### ItemGroupSummary
* ItemGroupSummary `object`: The type that defines the fields for the details of each item in an item group. An item group is  an item that has various aspect differences, such as color, size, storage capacity, etc. When an item group is created, one of the item variations, such as the red shirt size L, is chosen as the "parent". All the other items in the group are the children, such as the blue shirt size L, red shirt size M, etc. <br /><br /><span class="tablenote"><b> Note: </b> This container is returned only if the <b> item_id</b> in the request is an item group (parent Id of an item with variations).</span>
  * itemGroupAdditionalImages `array`: An array of containers with the URLs for images that are in addition to the primary image of the item group. The primary image is returned in the itemGroupImage field.
    * items [Image](#image)
  * itemGroupHref `string`: The HATEOAS reference of the parent page of the item group. An item group is an item that has various aspect differences, such as color, size, storage capacity, etc.
  * itemGroupId `string`: The unique identifier for the item group. An item group is an item that has various aspect differences, such as color, size, storage capacity, etc.
  * itemGroupImage [Image](#image)
  * itemGroupTitle `string`: The title of the item that appears on the item group page. An item group is an item that has various aspect differences, such as color, size, storage capacity, etc.
  * itemGroupType `string`: Indicates the type of the item group. An item group is an item that has various aspect differences, such as color, size, storage capacity, etc. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/browse/types/ItemGroupTypeEnum.html'>eBay API documentation</a>

### ItemLocationImpl
* ItemLocationImpl `object`: This type is used by the <b> itemLocation</b>  container, which provides location information for the item.
  * addressLine1 `string`: The first line of the street address.
  * addressLine2 `string`: The second line of the street address. This field may contain such values as an apartment or suite number.
  * city `string`: The city in which the item is located.
  * country `string`: The country in which the item is located. These values are two-digit codes defined by the ISO 3166-1 alpha-2 standard, and also shown in the CountryCodeEnum type. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/browse/types/CountryCodeEnum.html'>eBay API documentation</a>
  * county `string`: The county in which the item is located.
  * postalCode `string`: The postal code (or zip code in US) where the item is located.
  * stateOrProvince `string`: The state or province in which the item is located.

### ItemReturnTerms
* ItemReturnTerms `object`: The type that defines the fields for the seller's return policy.
  * extendedHolidayReturnsOffered `boolean`: Indicates if the seller has enabled the Extended Holiday Returns feature on the item. Extended Holiday Returns are only applicable during the US holiday season, and gives buyers extra time to return an item. This 'extra time' will typically extend beyond what is set through the returnPeriod value.
  * refundMethod `string`: This enumeration value indicates how a buyer is refunded when an item is returned. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/browse/types/RefundMethodEnum.html'>eBay API documentation</a>
  * restockingFeePercentage `string`: This string field indicates the restocking fee percentage that the seller has set on the item. Sellers have the option of setting no restocking fee for an item, or they can set the percentage to 10, 15, or 20 percent. So, if the cost of the item was $100, and the restocking percentage was 20 percent, the buyer would be charged $20 to return that item, so instead of receiving a $100 refund, they would received $80 due to the restocking fee.
  * returnInstructions `string`: Text written by the seller describing what the buyer should to do in order to return the item.
  * returnMethod `string`: This field is returned if the seller offers the buyer an item replacement or exchange instead of a monetary refund. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/browse/types/ReturnMethodEnum.html'>eBay API documentation</a>
  * returnPeriod [TimeDuration](#timeduration)
  * returnShippingCostPayer `string`: This enumeration value indicates whether the buyer or seller is responsible for return shipping costs when an item is returned. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/browse/types/ReturnShippingCostPayerEnum.html'>eBay API documentation</a>
  * returnsAccepted `boolean`: Indicates whether or not the seller accepts returns for the item.

### ItemSummary
* ItemSummary `object`: The type that defines the item details for a specific item.
  * additionalImages `array`: This container is an array of URLs for Gallery Plus images of the item listing.
    * items [Image](#image)
  * adultOnly `boolean`: This indicates if the item is for adults only. For more information about adult-only items on eBay, see Adult items policy for sellers and Searching for adult only items for buyers.
  * bidCount `integer`: This integer value indicates the total number of bids that have been placed for an auction item. This field is only returned for auction listings.
  * buyingOptions `array`: The value returned in this field indicates the buying option for the item. FIXED_PRICE is returned for basic fixed-price listings, AUCTION is returned for auction listings without Buy It Now feature, and both FIXED_PRICE and AUCTION are returned for auction listings enabled with the Buy It Now feature.
    * items `string`
  * categories `array`: This container consists of the primary listing category Id of the item (as well as secondary listing category if item was listed in two categories).
    * items [Category](#category)
  * condition `string`: The condition of the item, such as New or Used.
  * conditionId `string`: The identifier of the condition. For example, 1000 is the identifier for NEW.
  * currentBidPrice [ConvertedAmount](#convertedamount)
  * distanceFromPickupLocation [TargetLocation](#targetlocation)
  * energyEfficiencyClass `string`: The value returned in this field indicates the energy efficiency rating of the item. Energy efficiency ratings apply to products listed by commercial vendors in electronics categories only. Currently, this field is only applicable for the Germany site, and this field is only returned if the seller specified the energy efficiency rating through item specifics at listing time. Rating values include A+++, A++, A+, A, B, C, D, E, F, and G.
  * epid `string`: An EPID is the eBay product identifier of a product from the eBay product catalog. This indicates the product in which the item belongs.
  * image [Image](#image)
  * itemAffiliateWebUrl `string`: The URL to the View Item page of the item, which includes the affiliate tracking Id. This field is only returned if the seller enables affiliate tracking for the listing by including the X-EBAY-C-ENDUSERCTX request header in the call.
  * itemGroupHref `string`: The HATEOAS reference of the parent page of the item group. An item group is an item that has various aspect differences, such as color, size, storage capacity, etc. Note: This field is returned only for item groups.
  * itemGroupType `string`: Indicates the item group type. An item group is an item that has various aspect differences, such as color, size, storage capacity, etc. Currently only SELLER_DEFINED_VARIATIONS is supported and indicates this is an item group created by the seller. Note: This field is returned only for item groups.
  * itemHref `string`: The URI of the item. This field is always populated.
  * itemId `string`: The unique identifier of the item. For example: v1|150006693022|450002439078
  * itemLocation [ItemLocationImpl](#itemlocationimpl)
  * itemWebUrl `string`: The URL to the View Item page of the item.
  * marketingPrice [MarketingPrice](#marketingprice)
  * pickupOptions `array`: This container lists the local pickup options available to the buyer. This container is only returned if the user is searching for local pickup items and set the local pickup filters in the call request.
    * items [PickupOptionSummary](#pickupoptionsummary)
  * price [ConvertedAmount](#convertedamount)
  * seller [Seller_0](#seller_0)
  * shippingOptions `array`: This container returns the shipping options available to ship the item.
    * items [ShippingOptionSummary](#shippingoptionsummary)
  * thumbnailImages `array`: This container is an array of thumbnail images for the item. For each image, the URL to the image is given.
    * items [Image](#image)
  * title `string`: The seller-created title of the item. The maximum length is 80 characters.
  * unitPrice [ConvertedAmount](#convertedamount)
  * unitPricingMeasure `string`: The designation, such as size, weight, volume, count, etc., that was used to specify the quantity of the item. This helps buyers compare prices. For example, the following tells the buyer that the item is 7.99 per 100 grams. &quot;unitPricingMeasure&quot;: &quot;100g&quot;, &quot;unitPrice&quot;: { &nbsp;&nbsp;&quot;value&quot;: &quot;7.99&quot;, &nbsp;&nbsp;&quot;currency&quot;: &quot;GBP&quot;

### Items
* Items `object`: The type that defines the fields for the item details.
  * commonDescriptions `array`: An array of containers for a description and the item Ids of all the items that have this exact description. Often the item variations within an item group all have the same description. Instead of repeating this description in the item details of each item, an description that is shared by at one other item is returned in this container. If the description is unique, it is returned in the items.description field.
    * items [CommonDescriptions](#commondescriptions)
  * items `array`: An array of containers for all the item variations details, excluding the description.
    * items [Item](#item)

### LegalAddress
* LegalAddress `object`: Type that defines the fields for the seller's address.
  * addressLine1 `string`: The first line of the street address.
  * addressLine2 `string`: The second line of the street address. This field is not always used, but can be used for 'Suite Number' or 'Apt Number'.
  * city `string`: The city of the address.
  * country `string`: The three-letter ISO 3166-1 standard of the country of the address. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/browse/types/CountryCodeEnum.html'>eBay API documentation</a>
  * countryName `string`: The name of the country of the address.
  * county `string`: The name of the county of the address.
  * postalCode `string`: The postal code of the address.
  * stateOrProvince `string`: The state or province of the address.

### MarketingPrice
* MarketingPrice `object`: The type that defines the fields that describe a seller discount.
  * discountAmount [ConvertedAmount](#convertedamount)
  * discountPercentage `string`: This field expresses the percentage of the seller discount based on the value in the originalPrice container.
  * originalPrice [ConvertedAmount](#convertedamount)

### PickupOptionSummary
* PickupOptionSummary `object`: The type that defines the fields for the local pickup options that are available for the item. It is used by the <b>  pickupOptions</b>  container.
  * pickupLocationType `string`: This container returns the local pickup options available to the buyer. Possible values are ARRANGED_LOCATION and STORE.

### Product
* Product `object`: The type that defines the fields for the product information of the item.
  * additionalImages `array`: An array of containers with the URLs for the product images that are in addition to the primary image.
    * items [Image](#image)
  * additionalProductIdentities `array`: A product can have more than one identifier value for a product type, such as UPC, EAN, etc. For example, the same product UPC can have an identifier that is 12, 13, or 14 digits. This container returns an array of all the product identifiers (type/value pairs) associated with the product. These are in addition to the identifiers returned in the mpn and gitn fields.
    * items [AdditionalProductIdentity](#additionalproductidentity)
  * aspectGroups `array`: An array of containers for the product aspects. Each group contains the aspect group name and the aspect name/value pairs.
    * items [AspectGroup](#aspectgroup)
  * brand `string`: The brand associated with product. To identify the product, this is always used along with MPN (manufacturer part number).
  * description `string`: The rich description of an eBay product, which might contain HTML.
  * gtins `array`: An array of all the possible GTINs values associated with the product. A GTIN is a unique Global Trade Item number of the item as defined by http://www.gtin.info. This can be a UPC (Universal Product Code), EAN (European Article Number), or an ISBN (International Standard Book Number) value.
    * items `string`
  * image [Image](#image)
  * mpns `array`: An array of all possible MPN values associated with the product. A MPNs is manufacturer part number of the product. To identify the product, this is always used along with brand.
    * items `string`
  * title `string`: The title of the product.

### ProductIdentity
* ProductIdentity `object`: The type that defines the fields for the type/value pairs of product associated with an item. <br /><br />For example: <br />&nbsp;&nbsp;&nbsp;<code>"identifierType": "BRAND"</code> and  <code>"identifierValue": "Apple"</code><br />&nbsp;&nbsp;&nbsp;<code>"identifierType": "MPN"</code>, and <code>"identifierValue": "MC978LLA"<br />&nbsp;&nbsp;&nbsp;<code>"identifierType": "UPC" and "identifierValue": "0885909470105"</code>.
  * identifierType `string`: The type of the product identifier, such as UPC, ISBN, EAN, Brand, MPN, etc.
  * identifierValue `string`: The product identifier for the product associated with the item.

### RatingHistogram
* RatingHistogram `object`: The type that defines the fields for product ratings. Only products that are in the eBay product catalog can be reviewed and rated.
  * count `integer`: The total number of user ratings that the product has received.
  * rating `string`: This is the average rating for the product. As part of a product review, users rate the product. Products are rated from one star (terrible) to five stars (excellent), with each star having a corresponding point value - one star gets 1 point, two stars get 2 points, and so on. If a product had one four-star rating and one five-star rating, its average rating would be 4.5, and this is the value that would appear in this field.

### Refinement
* Refinement `object`: This type defines the fields for the various refinements of an item. You can use the information in this contain to create histograms, which help shopper choose exactly what they want.
  * aspectDistributions `array`: A array of containers for the all the aspect refinements.
    * items [AspectDistribution](#aspectdistribution)
  * buyingOptionDistributions `array`: A array of containers for the all the buying option refinements.
    * items [BuyingOptionDistribution](#buyingoptiondistribution)
  * categoryDistributions `array`: A array of containers for the all the category refinements.
    * items [CategoryDistribution](#categorydistribution)
  * conditionDistributions `array`: A array of containers for the all the condition refinements.
    * items [ConditionDistribution](#conditiondistribution)
  * dominantCategoryId `string`: The identifier of the category that most of the items are part of.

### Region
* Region `object`: The type that defines information for a region.
  * regionName `string`: A free-form text string that indicates the name of the region. This value can be the name of a world region (such as the &quot;Middle East&quot; or &quot;Southeast Asia&quot;), a country, or a domestic region within a country (such as &quot;Alaska/Hawaii&quot; or &quot;US Protectorates&quot;) depending on the value of regionType. This value should be WORLDWIDE if the regionType value is WORLDWIDE.
  * regionType `string`: Indicates the type of region. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/browse/types/RegionTypeEnum.html'>eBay API documentation</a>

### ReviewRating
* ReviewRating `object`: The type that defines the fields for the rating of a product review.
  * averageRating `string`: The average rating given to a product based on customer reviews.
  * ratingHistograms `array`: An array of containers for the product rating histograms that shows the review counts and the product rating.
    * items [RatingHistogram](#ratinghistogram)
  * reviewCount `integer`: The total number of reviews for the item.

### SearchPagedCollection
* SearchPagedCollection `object`: The type that defines the settings that paginate the result sets. The response consists of 0 or more sequenced <em> result sets</em> where each result sets has 0 or more items. 
  * href `string`: The URI of the current result set. For example: https://api.ebay.com/buy/v1/item/search?q=shirt&amp;price=[20..80]&amp;limit=5 This query is for a shirt, that is priced between 20 and 80 dollars and limit the response to 5 items.
  * itemSummaries `array`: An array of items in one result set. The items are sorted according to the sorting method specified in the request.
    * items [ItemSummary](#itemsummary)
  * limit `integer`: The maximum number of items that can be returned in a result set. The limit value is set in the request.
  * next `string`: The URL for the next result set. This is returned if there is a next result set. The following example returns items 11 thru 20 from the list of items. https://api.ebay.com/buy/v1/item/search?query=t-shirts&amp;limit=10&amp;offset=0
  * offset `integer`: This value indicates the current 'page' of items being displayed. This value is 0 for the first page of data, 1 for the second page of data, and so on.
  * prev `string`: The URL for the previous result set. This is returned if there is a previous result set. The following example returns items 1 thru 10 from the list of items. https://api.ebay.com/buy/v1/item/search?query=t-shirts&amp;limit=10&amp;offset=0
  * refinement [Refinement](#refinement)
  * total `integer`: The total number of items that match the input criteria.
  * warnings `array`: The container with all the warnings for the input request.
    * items [Error](#error)

### Seller
* Seller `object`: The type that defines the fields for basic and detailed information about the seller of the item returned by the <b> item</b> resource.
  * feedbackPercentage `string`: The percentage of the total positive feedback.
  * feedbackScore `integer`: The feedback score of the seller. This value is based on the ratings from eBay members that bought items from this seller.
  * sellerAccountType `string`: Indicates if the seller is a business or an individual. This is determined when the seller registers with eBay. If they register for a business account, this value will be BUSINESS. If they register for a private account, this value will be INDIVIDUAL. This designation is required by the tax laws in some countries. This field is returned only on the following sites. EBAY-AT &nbsp;&nbsp;&nbsp;EBAY-BE &nbsp;&nbsp;&nbsp;EBAY-CH &nbsp;&nbsp;&nbsp;EBAY-DE &nbsp;&nbsp;&nbsp;EBAY-ES &nbsp;&nbsp;&nbsp;EBAY-FR &nbsp;&nbsp;&nbsp;EBAY-GB &nbsp;&nbsp;&nbsp;EBAY-IE &nbsp;&nbsp;&nbsp; EBAY-IT &nbsp;&nbsp;&nbsp;EBAY-PL Valid values: BUSINESS INDIVIDUALCode so that your app gracefully handles any future changes to this list.
  * sellerLegalInfo [SellerLegalInfo](#sellerlegalinfo)
  * username `string`: The user name created by the seller for use on eBay.

### SellerLegalInfo
* SellerLegalInfo `object`: The type that defines the fields for the contact information for a seller.
  * email `string`: The seller's business email address.
  * fax `string`: The seller' business fax number.
  * imprint `string`: This is a free-form string created by the seller. This is information often found on business cards, such as address. This is information used by some countries.
  * legalContactFirstName `string`: The seller's first name.
  * legalContactLastName `string`: The seller's last name.
  * name `string`: The name of the seller's business.
  * phone `string`: The seller's business phone number.
  * registrationNumber `string`: The seller's registration number. This is information used by some countries.
  * sellerProvidedLegalAddress [LegalAddress](#legaladdress)
  * termsOfService `string`: This is a free-form string created by the seller. This is the seller's terms or condition, which is in addition to the seller's return policies.
  * vatDetails `array`: An array of the seller's VAT (value added tax) Ids and the issuing country. VAT is a tax added by some European countries.
    * items [VatDetail](#vatdetail)

### Seller_0
* Seller_0 `object`: The type that defines the fields for basic information about the seller of the item returned by the <b> item_summary</b> resource.
  * feedbackPercentage `string`: The percentage of the total positive feedback.
  * feedbackScore `integer`: The feedback score of the seller. This value is based on the ratings from eBay members that bought items from this seller.
  * sellerAccountType `string`: Indicates if the seller is a business or an individual. This is determined when the seller registers with eBay. If they register for a business account, this value will be BUSINESS. If they register for a private account, this value will be INDIVIDUAL. This designation is required by the tax laws in some countries. This field is returned only on the following sites. This field is returned only on the following sites. EBAY-AT &nbsp;&nbsp;&nbsp;EBAY-BE &nbsp;&nbsp;&nbsp;EBAY-CH &nbsp;&nbsp;&nbsp;EBAY-DE &nbsp;&nbsp;&nbsp;EBAY-ES &nbsp;&nbsp;&nbsp;EBAY-FR &nbsp;&nbsp;&nbsp;EBAY-GB &nbsp;&nbsp;&nbsp;EBAY-IE &nbsp;&nbsp;&nbsp; EBAY-IT &nbsp;&nbsp;&nbsp;EBAY-PL Valid values: BUSINESS INDIVIDUALCode so that your app gracefully handles any future changes to this list.
  * username `string`: The user name created by the seller for use on eBay.

### ShipToLocation
* ShipToLocation `object`: The type that defines the fields for the country and postal code of where an item is to be shipped.
  * country `string`: The three-letter ISO 3166-1 standard of the country for where the item is to be shipped. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/browse/types/CountryCodeEnum.html'>eBay API documentation</a>
  * postalCode `string`: The zip code (postal code) for where the item is to be shipped.

### ShipToLocations
* ShipToLocations `object`: The type that defines the fields that include and exclude geographic regions affecting where the item can be shipped. The seller defines these regions when listing the item.
  * regionExcluded `array`: A array of containers for regions that are specifically excluded from a region set. You can use this to exclude a specific regionName from a regionType that you specifically include.
    * items [Region](#region)
  * regionIncluded `array`: A array of containers for regions that are specifically included in a region set. You can use this to exclude a specific regionName from a regionType that you specifically include.
    * items [Region](#region)

### ShippingOption
* ShippingOption `object`: The type that defines the fields for the details of a shipping provider.
  * additionalShippingCostPerUnit [ConvertedAmount](#convertedamount)
  * cutOffDateUsedForEstimate `string`: The deadline date that the item must be purchased by in order to be received by the buyer within the delivery window ( maxEstimatedDeliveryDate and minEstimatedDeliveryDate fields). This field is returned only for items that are eligible for 'Same Day Handling'. For these items, the value of this field is what is displayed in the Delivery line on the View Item page. This value is returned in UTC format (yyyy-MM-ddThh:mm:ss.sssZ), which you can convert into the local time of the buyer.
  * maxEstimatedDeliveryDate `string`: The end date of the delivery window (latest projected delivery date). This value is returned in UTC format (yyyy-MM-ddThh:mm:ss.sssZ), which you can convert into the local time of the buyer. Note: For the best accuracy, always include the location of where the item is be shipped in the contextualLocation values of the X-EBAY-C-ENDUSERCTX request header.
  * minEstimatedDeliveryDate `string`: The start date of the delivery window (earliest projected delivery date). This value is returned in UTC format (yyyy-MM-ddThh:mm:ss.sssZ), which you can convert into the local time of the buyer. Note: For the best accuracy, always include the location of where the item is be shipped in the contextualLocation values of the X-EBAY-C-ENDUSERCTX request header.
  * quantityUsedForEstimate `integer`: The number of items used when calculating the estimation information.
  * shipToLocationUsedForEstimate [ShipToLocation](#shiptolocation)
  * shippingCarrierCode `string`: A name of the shipping provider, such as FedEx, or USPS.
  * shippingCost [ConvertedAmount](#convertedamount)
  * shippingCostType `string`: Indicates the class of the shipping cost. Valid Values: Flat or Calculated. Code so that your app gracefully handles any future changes to this list.
  * shippingServiceCode `string`: The type of shipping service. For example, USPS First Class.
  * trademarkSymbol `string`: Any trademark symbol, such as &trade; or &reg;, that needs to be shown in superscript next to the shipping service name.
  * type `string`: The type of a shipping option, such as EXPEDITED, ONE_DAY, STANDARD, ECONOMY, PICKUP, etc.

### ShippingOptionSummary
* ShippingOptionSummary `object`: The type that defines the fields for the shipping information.
  * maxEstimatedDeliveryDate `string`: The end date of the delivery window (latest projected delivery date). This value is returned in UTC format (yyyy-MM-ddThh:mm:ss.sssZ), which you can convert into the local time of the buyer. Note: For the best accuracy, always include the contextualLocation values in the X-EBAY-C-ENDUSERCTX request header.
  * minEstimatedDeliveryDate `string`: The start date of the delivery window (earliest projected delivery date). This value is returned in UTC format (yyyy-MM-ddThh:mm:ss.sssZ), which you can convert into the local time of the buyer. Note: For the best accuracy, always include the contextualLocation values in the X-EBAY-C-ENDUSERCTX request header.
  * shippingCost [ConvertedAmount](#convertedamount)
  * shippingCostType `string`: This field indicates the type of shipping used to ship the item. Possible values are FIXED (flat-rate shipping) and CALCULATED (calculated shipping).

### TargetLocation
* TargetLocation `object`: The type that defines the fields for the distance between the item location and the buyer's location. 
  * unitOfMeasure `string`: This value shows the unit of measurement used to measure the distance between the location of the item and the buyer's location. This value is typically mi or km.
  * value `string`: This value indicates the distance (measured in the measurement unit in the unitOfMeasure field) between the item location and the buyer's location.

### TaxJurisdiction
* TaxJurisdiction `object`: The type that defines the fields for the tax jurisdiction details.
  * region [Region](#region)
  * taxJurisdictionId `string`: The identifier of the tax jurisdiction.

### Taxes
* Taxes `object`: The type that defines the tax fields.
  * includedInPrice `boolean`: Indicates if tax was applied for the cost of the item.
  * shippingAndHandlingTaxed `boolean`: Indicates if tax is applied for the shipping cost.
  * taxJurisdiction [TaxJurisdiction](#taxjurisdiction)
  * taxPercentage `string`: The percentage of tax.
  * taxType `string`: Container that returns the tax type. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/browse/types/TaxType.html'>eBay API documentation</a>

### TimeDuration
* TimeDuration `object`: The type that defines the fields for a period of time in the time-measurement units supplied.
  * unit `string`: Retrieves the units (such as hours) of the time span.The enumeration value in this field defines the period of time being used to measure the duration, such as business days, months, or years. See the TimeDurationUnitEnum type for a list of possible time-measuring units. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/browse/types/TimeDurationUnitEnum.html'>eBay API documentation</a>
  * value `integer`: Retrieves the duration of the time span (no units).The value in this field indicates the number of years, months, days, hours, or minutes in the defined period.

### TypedNameValue
* TypedNameValue `object`: The type that defines the fields for the name/value pairs for item aspects.
  * name `string`: The text representing the name of the aspect for the name/value pair, such as Color.
  * type `string`: Indicates if the value being returned is a string or an array of values. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/browse/types/ValueTypeEnum.html'>eBay API documentation</a>
  * value `string`: The value of the aspect for the name/value pair, such as Red.

### VatDetail
* VatDetail `object`: The type the defines the fields for the VAT (value add tax) information.
  * issuingCountry `string`: The three-letter ISO 3166-1 standard of the country issuing the seller's VAT (value added tax) Id. VAT is a tax added by some European countries. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/browse/types/CountryCodeEnum.html'>eBay API documentation</a>
  * vatId `string`: The seller's VAT (value added tax) Id. VAT is a tax added by some European countries.


