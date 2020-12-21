# @datafire/ebay_buy_browse

Client library for Browse API

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

.then(data => {
  console.log(data);
});
```

## Description

The Browse API has the following resources: item_summary: Lets shoppers search for specific items by keyword, GTIN, category, charity, product, or item aspects and refine the results by using filters, such as aspects, compatibility, and fields values. &nbsp;(Experimental) search_by_image: Lets shoppers search for specific items by image. You can refine the results by using URI parameters and filters. item: Lets you retrieve the details of a specific item or all the items in an item group, which is an item with variations such as color and size and check if a product is compatible with the specified item, such as if a specific car is compatible with a specific part. Provides a bridge between the eBay legacy APIs, such as Finding, and the RESTful APIs, which use different formats for the item IDs. &nbsp;(Experimental) shopping_cart: Provides the ability for eBay members to see the contents of their eBay cart, and add, remove, and change the quantity of items in their eBay cart.&nbsp;&nbsp; Note: This resource is not available in the eBay API Explorer. The item_summary, search_by_image, and item resource calls require an Application access token. The shopping_cart resource calls require a User access token.

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

### getItems
This method retrieves the details of specific items that the buyer needs to make a purchasing decision. Note: This is a (Limited Release) available only to select Partners. For this method, only the following fields are returned: eligibleForInlineCheckout, estimatedAvailabilities, itemAffiliateWebURL, itemID, ItemWebURL, legacyItemID, price, sellerItemRevision, and topRatedBuyingExperience. URLs for this method Production URL: https://api.ebay.com/buy/browse/v1/item/ Sandbox URL: https://api.sandbox.ebay.com/buy/browse/v1/item/ Request headers This method uses the X-EBAY-C-ENDUSERCTX request header to support revenue sharing for eBay Partner Networks and to improve the accuracy of shipping and delivery time estimations. For details see, Request headers in the Buying Integration Guide. Restrictions For a list of supported sites and other restrictions, see API Restrictions. eBay Partner Network: In order to be commissioned for your sales, you must use the URL returned in the itemAffiliateWebUrl field to forward your buyer to the ebay.com site.


```js
ebay_buy_browse.getItems({}, context)
```

#### Input
* input `object`
  * item_ids `string`: A list of item IDs. Item IDs are the eBay RESTful identifier of items. RESTful Item ID Format: v1|#|# For example: v1|272394640372|0 or v1|162846450672|461882996982 In any given request, either item_ids or item_group_ids can be retrieved. Attempting to retrieve both will result in an error. In a request, multiple item_ids can be passed as comma separated values. Maximum allowed itemIDs: 20 For more information about item IDs for RESTful APIs, see the Legacy API compatibility section of the Buy APIs Overview.
  * item_group_ids `string`: A list of item group IDs. Item group IDs are the eBay RESTful identifier of item groups. RESTful Group Item ID Format: ############ For example: 330017835749 or 330017835740 In any given request, either item_ids or item_group_ids can be retrieved. Attempting to retrieve both will result in an error. In a request, multiple item_group_ids can be passed as comma separated values. Maximum allowed itemGroupIDs: 10

#### Output
* output [Items](#items)

### getItemByLegacyId
This method is a bridge between the eBay legacy APIs, such as Shopping, and Finding and the eBay Buy APIs. There are differences between how legacy APIs and RESTful APIs return the identifier of an &quot;item&quot; and what the item ID represents. This method lets you use the legacy item ids retrieve the details of a specific item, such as description, price, and other information the buyer needs to make a purchasing decision. It also returns the RESTful item ID, which you can use with all the Buy API methods. For more information about how to use legacy ids with the Buy APIs, see Legacy API compatibility in the Buying Integration guide. This method returns the item details and requires you to pass in either the item ID of a non-variation item or the item ids of both the parent and child of an item group. An item group is an item that has various aspect differences, such as color, size, storage capacity, etc. When an item group is created, one of the item variations, such as the red shirt size L, is chosen as the &quot;parent&quot;. All the other items in the group are the children, such as the blue shirt size L, red shirt size M, etc. The fieldgroups URI parameter lets you control what is returned in the response. Setting fieldgroups to PRODUCT, adds additional fields to the default response that return information about the product of the item. For more information, see fieldgroups. URLs for this method Production URL: https://api.ebay.com/buy/browse/v1/item/get_item_by_legacy_id/ Sandbox URL: https://api.sandbox.ebay.com/buy/browse/v1/item/get_item_by_legacy_id/ Request headers This method uses the X-EBAY-C-ENDUSERCTX request header to support revenue sharing for eBay Partner Networks and to improve the accuracy of shipping and delivery time estimations. For details see, Request headers in the Buying Integration Guide. Restrictions For a list of supported sites and other restrictions, see API Restrictions. eBay Partner Network: In order to be commissioned for your sales, you must use the URL returned in the itemAffiliateWebUrl field to forward your buyer to the ebay.com site.


```js
ebay_buy_browse.getItemByLegacyId({
  "legacy_item_id": ""
}, context)
```

#### Input
* input `object`
  * fieldgroups `string`: This field lets you control what is returned in the response. If you do not set this field, the method returns all the details of the item. Note: In this method, the only value supported is PRODUCT. Valid Values: PRODUCT - This adds the additionalImages, additionalProductIdentities, aspectGroups, description, gtins, image, and title fields to the response, which describe the item's product. See Product for more information about these fields. Code so that your app gracefully handles any future changes to this list.
  * legacy_item_id **required** `string`: Specifies either: The legacy item ID of an item that is not part of a group. The legacy item ID of a group, which is the ID of the &quot;parent&quot; of the group of items. Note: If you pass in a group ID, you must also use the legacy_variation_id field and pass in the legacy ID of the specific item variation (child ID). Legacy ids are returned by APIs, such as the Finding API. The following is an example of using the value of the ItemID field for a specific item from Finding to get the RESTful itemId value. &nbsp;&nbsp;&nbsp; browse/v1/item/get_item_by_legacy_id?legacy_item_id=110039490209 Maximum: 1
  * legacy_variation_id `string`: Specifies the legacy item ID of a specific item in an item group, such as the red shirt size L. Legacy ids are returned by APIs, such as the Finding API. Maximum: 1 Requirement: You must always pass in the legacy_item_id with the legacy_variation_id
  * legacy_variation_sku `string`: Specifics the legacy SKU of the item. SKU are item ids created by the seller. Legacy SKUs are returned by eBay the Shopping API. The following is an example of using the value of the ItemID and SKU fields to get the RESTful itemId value. &nbsp;&nbsp;&nbsp; browse/v1/item/get_item_by_legacy_id?legacy_item_id=110039490209&amp;legacy_variation_sku=V-00031-WHM Maximum: 1 Requirement: You must always pass in the legacy_item_id with the legacy_variation_sku

#### Output
* output [Item](#item)

### getItemsByItemGroup
This method retrieves the details of the individual items in an item group. An item group is an item that has various aspect differences, such as color, size, storage capacity, etc. You pass in the item group ID as a URI parameter. You use this method to show the item details of items with multiple aspects, such as color, size, storage capacity, etc. This method returns two main containers; items and commonDescriptions. The items container has an array of containers with the details of each item in the group. The commonDescriptions container has an array of containers for a description and the item ids of all the items that have this exact description. Because items within an item group often have the same description, this decreases the size of the response. URLs for this method Production URL: https://api.ebay.com/buy/browse/v1/item/get_items_by_item_group/ Sandbox URL: https://api.sandbox.ebay.com/buy/browse/v1/item/get_items_by_item_group/ Request headers This method uses the X-EBAY-C-ENDUSERCTX request header to support revenue sharing for eBay Partner Networks and to improve the accuracy of shipping and delivery time estimations. For details see, Request headers in the Buying Integration Guide. Restrictions For a list of supported sites and other restrictions, see API Restrictions. eBay Partner Network: In order to be commissioned for your sales, you must use the URL returned in the itemAffiliateWebUrl field to forward your buyer to the ebay.com site.


```js
ebay_buy_browse.getItemsByItemGroup({
  "item_group_id": ""
}, context)
```

#### Input
* input `object`
  * item_group_id **required** `string`: Identifier of the item group to return. An item group is an item that has various aspect differences, such as color, size, storage capacity, etc. This ID is returned in the itemGroupHref field of the search and getItem methods. For Example: https://api.ebay.com/buy/browse/v1/item/get_items_by_item_group?item_group_id=351825690866

#### Output
* output [ItemGroup](#itemgroup)

### getItem
This method retrieves the details of a specific item, such as description, price, category, all item aspects, condition, return policies, seller feedback and score, shipping options, shipping costs, estimated delivery, and other information the buyer needs to make a purchasing decision. The Buy APIs are designed to let you create an eBay shopping experience in your app or website. This means you will need to know when something, such as the availability, quantity, etc., has changed in any eBay item you are offering. You can do this easily by setting the fieldgroups URI parameter. This parameter lets you control what is returned in the response. Setting fieldgroups to COMPACT reduces the response to only the five fields that you need in order to check if any item detail has changed. Setting fieldgroups to PRODUCT, adds additional fields to the default response that return information about the product of the item. You can use either COMPACT or PRODUCT but not both. For more information, see fieldgroups. URLs for this method Production URL: https://api.ebay.com/buy/browse/v1/item/ Sandbox URL: https://api.sandbox.ebay.com/buy/browse/v1/item/ Request headers This method uses the X-EBAY-C-ENDUSERCTX request header to support revenue sharing for eBay Partner Networks and to improve the accuracy of shipping and delivery time estimations. For details see, Request headers in the Buying Integration Guide. Restrictions For a list of supported sites and other restrictions, see API Restrictions. eBay Partner Network: In order to be commissioned for your sales, you must use the URL returned in the itemAffiliateWebUrl field to forward your buyer to the ebay.com site.


```js
ebay_buy_browse.getItem({
  "item_id": ""
}, context)
```

#### Input
* input `object`
  * fieldgroups `string`: This parameter lets you control what is returned in the response. If you do not set this field, the method returns all the details of the item. Valid Values: PRODUCT - This adds the additionalImages, additionalProductIdentities, aspectGroups, description, gtins, image, and title product fields to the response, which describe the product associated with the item. See Product for more information about these fields. COMPACT - This returns only the following fields, which let you quickly check if the availability or price of the item has changed, if the item has been revised by the seller, or if an item's top-rated plus status has changed for items you have stored. itemId - The identifier of the item. itemAffiliateWebURL - The URL of the View Item page of the item, which includes the affiliate tracking ID. This field is only returned if the eBay partner enables affiliate tracking for the item by including the X-EBAY-C-ENDUSERCTX request header in the method. ItemWebURL - The URL of the View Item page of the item. This enables you to include a &quot;Report Item on eBay&quot; link that takes the buyer to the View Item page on eBay. From there they can report any issues regarding this item to eBay. legacyItemId - The unique identifier of the eBay listing that contains the item. This is the traditional/legacy ID that is often seen in the URL of the listing View Item page. sellerItemRevision - An identifier generated/incremented when a seller revises the item. The follow are the two types of item revisions: Seller changes, such as changing the title eBay system changes, such as changing the quantity when an item is purchased. This ID is changed only when the seller makes a change to the item. This means you cannot use this value to determine if the quantity has changed. To check if the quantity has changed, use estimatedAvailabilities. topRatedBuyingExperience - A boolean value indicating if this item is a top-rated plus item. A change in the item's top rated plus standing is not tracked by the revision ID. See topRatedBuyingExperience for more information. price - This is tracked by the revision ID but is returned here to enable you to quickly verify the price of the item. estimatedAvailabilities - Returns the item availability information, which is based on the item's quantity. Note: Changes in quantity are not tracked by sellerItemRevision. itemEndDate - This is the scheduled end time of the listing. eligibleForInlineCheckout - This parameter returns items based on whether or not the items can be purchased using the Buy Order API. If the value of this field is true, this indicates that the item can be purchased using the Order API. If the value of this field is false, this indicates that the item cannot be purchased using the Order API and must be purchased on the eBay site. For Example To check if a stored item's information is current, do following. Pass in the item ID and set fieldgroups to COMPACT. item/v1|46566502948|0?fieldgroups=COMPACT Do one of the following: If the sellerItemRevision field is returned and you haven't stored a revision number for this item, record the number and pass in the item ID in the getItem method to get the latest information. If the revision number is different from the value you have stored, update the value and pass in the item ID in the getItem method to get the latest information. If the sellerItemRevision field is not returned or has not changed, where needed, update the item information with the information returned in the response. Maximum value: 1 If more than one values is specified, the first value will be used.
  * item_id **required** `string`: The eBay RESTful identifier of an item. This ID is returned by the Browse and Feed API methods. RESTful Item ID Format: v1|#|# For example: v1|272394640372|0 or v1|162846450672|461882996982 For more information about item ID for RESTful APIs, see the Legacy API compatibility section of the Buy APIs Overview.

#### Output
* output [Item](#item)

### checkCompatibility
This method checks if a product is compatible with the specified item. You can use this method to check the compatibility of cars, trucks, and motorcycles with a specific part listed on eBay. For example, to check the compatibility of a part, you pass in the item ID of the part as a URI parameter and specify all the attributes used to define a specific car in the compatibilityProperties container. If the call is successful, the response will be COMPATIBLE, NOT_COMPATIBLE, or UNDETERMINED. See compatibilityStatus for details. Note: The only products supported are cars, trucks, and motorcycles. To find the attributes and values for a specific marketplace, you can use the compatibility methods in the Taxonomy API. You can use this data to create menus to help buyers specify the product, such as their car. For more details and a list of the required attributes for the US marketplace that describe motor vehicles, see Check compatibility in the Buy Integration Guide. For an example, see the Samples section. URLs for this method Production URL: https://api.ebay.com/buy/browse/v1/item/ Note: This method is supported only on Production. Restrictions For a list of supported sites and other restrictions, see API Restrictions.


```js
ebay_buy_browse.checkCompatibility({
  "item_id": "",
  "X-EBAY-C-MARKETPLACE-ID": ""
}, context)
```

#### Input
* input `object`
  * item_id **required** `string`: The eBay RESTful identifier of an item (such as a part you want to check). This ID is returned by the Browse and Feed API methods. RESTful Item ID Format: v1|#|# For example: v1|272394640372|0 or v1|162846450672|461882996982 For more information about item ID for RESTful APIs, see the Legacy API compatibility section of the Buy APIs Overview.
  * X-EBAY-C-MARKETPLACE-ID **required** `string`: The ID of the eBay marketplace you want to use. Note: This value is case sensitive. For example: &nbsp;&nbsp;X-EBAY-C-MARKETPLACE-ID = EBAY_US For a list of supported sites see, API Restrictions.
  * body [CompatibilityPayload](#compatibilitypayload)

#### Output
* output [CompatibilityResponse](#compatibilityresponse)

### search
This method searches for eBay items by various query parameters and retrieves summaries of the items. You can search by keyword, category, eBay product ID (ePID), or GTIN, charity ID, or a combination of these. Note: Only FIXED_PRICE (Buy It Now) items are returned by default. However, this method does return items where both FIXED_PRICE and AUCTION are available as a buying option. After a bid has been placed, items become active auction items and are no longer returned by default, but they remain accessible by filtering for the AUCTION buying option. This method also supports the following: Filtering by the value of one or multiple fields, such as listing format, item condition, price range, location, and more. For the fields supported by this method, see the filter parameter. Retrieving the refinements (metadata) of an item , such as item aspects (color, brand), condition, category, etc. using the fieldgroups parameter. Filtering by item aspects and other refinements using the aspect_filter parameter. Filtering for items that are compatible with a specific product, using the compatibility_filter parameter. Creating aspects histograms, which enables shoppers to drill down in each refinement narrowing the search results. For details and examples of these capabilities, see Browse API in the Buying Integration Guide. Pagination and sort controls There are pagination controls (limit and offset fields) and sort query parameters that control/sort the data that is returned. By default, the results are sorted by &quot;Best Match&quot;. For more information about Best Match, see the eBay help page Best Match. URLs for this method Production URL: https://api.ebay.com/buy/browse/v1/item_summary/ Sandbox URL: https://api.sandbox.ebay.com/buy/browse/v1/item_summary/ Request headers This method uses the X-EBAY-C-ENDUSERCTX request header to support revenue sharing for eBay Partner Networks and to improve the accuracy of shipping and delivery time estimations. For details see, Request headers in the Buying Integration Guide. Restrictions This method can return a maximum of 10,000 items. For a list of supported sites and other restrictions, see API Restrictions. eBay Partner Network: In order to receive a commission for your sales, you must use the URL returned in the itemAffiliateWebUrl field to forward your buyer to the ebay.com site.


```js
ebay_buy_browse.search({}, context)
```

#### Input
* input `object`
  * aspect_filter `string`: This field lets you filter by item aspects. The aspect name/value pairs and category, which is required, is used to limit the results to specific aspects of the item. For example, in a clothing category one aspect pair would be Color/Red. For example, the method below uses the category ID for Women's Clothing. This will return only items for a woman's red shirt. /buy/browse/v1/item_summary/search?q=shirt&amp;category_ids=15724&amp;aspect_filter=categoryId:15724,Color:{Red} To get a list of the aspects pairs and the category, which is returned in the dominantCategoryId field, set fieldgroups to ASPECT_REFINEMENTS. /buy/browse/v1/item_summary/search?q=shirt&amp;fieldgroups=ASPECT_REFINEMENTS Required: The category ID is required twice; once as a URI parameter and as part of the aspect_filter. For implementation help, refer to eBay API documentation at https://developer.ebay.com/api-docs/buy/browse/types/gct:AspectFilter
  * auto_correct `string`: A query parameter that enables auto correction. Valid Values: KEYWORD
  * category_ids `string`: The category ID is used to limit the results. This field can have one category ID or a comma separated list of IDs. For example: /buy/browse/v1/item_summary/search?category_ids=29792 Note: Currently, you can pass in only one category ID per request. You can also use any combination of the category_Ids, epid, and q fields. This gives you additional control over the result set. For example, let's say you are looking of a toy phone. If you search for &quot;phone&quot;, the result set will be mobile phones because this is the &quot;Best Match&quot; for this search. But if you also include the toy category ID, the results will be what you wanted. For example: /buy/browse/v1/item_summary/search?q=phone&amp;category_ids=220 The list of eBay category IDs is not published and category IDs are not the same across all the eBay marketplaces. You can use the following techniques to find a category by site: Use the Category Changes page. Use the Taxonomy API. For details see Get Categories for Buy APIs. Submit the following method to get the dominantCategoryId for an item. /buy/browse/v1/item_summary/search?q= keyword&amp;fieldgroups=ASPECT_REFINEMENTS Note: If a top-level (L1) category is specified, you must also include the q query parameter. Required: The method must have category_ids, epid, gtin, or q (or any combination of these)
  * charity_ids `string`: The charity ID is used to limit the results to only items associated with the specified charity. This field can have one charity ID or a comma separated list of IDs. The method will return all the items associated with the specified charities. For example: /buy/browse/v1/item_summary/search?charity_ids=13-1788491,300108469 The charity ID is the charity's registration ID, also known as the Employer Identification Number (EIN). In GB, it is the Charity Registration Number (CRN), commonly called &quot;Charity Number&quot;. To find the charities eBay supports, you can search for a charity at Charity Search or go to Charity Shop. To find the charity ID of a specific charity, click on a charity and use the EIN number. For example, the charity ID for American Red Cross, is 530196605. You can also use any combination of the category_Ids and q fields with a charity_Ids to filter the result set. This gives you additional control over the result set. Restriction: This is supported only on the US and GB marketplaces. Maximum: 20 IDs Required: One ID
  * compatibility_filter `string`: This field specifies the attributes used to define a specific product. The service searches for items matching the keyword or matching the keyword and a product attribute value in the title of the item. For example, if the keyword is brakes and compatibility-filter=Year:2018;Make:Honda, the items returned are items with brakes, 2018, or Honda in the title. The service uses the product attributes to determine if the item is compatible. The service returns the attributes that are compatible and the CompatibilityMatchEnum value that indicates how well the item matches the attributes. For the best compatibility results, submit all the attributes used to define the product. Best Practice: Submit all the product attributes for the specific product. For more details, see Check compatibility in the Buy Integration Guide. Note: The only products supported are cars, trucks, and motorcycles. For an example, see the Samples section. Note: Testing in Sandbox is only supported using mock data. See Testing search in the Sandbox for details. Required: q (keyword) one fitment supported category ID (such as 33559 Brakes) a least one product attribute name/value pair For implementation help, refer to eBay API documentation at https://developer.ebay.com/api-docs/buy/browse/types/gct:CompatibilityFilter
  * epid `string`: The ePID is the eBay product identifier of a product from the eBay product catalog. This field limits the results to only items in the specified ePID. The Marketing API getMerchandisedProducts method and the Browse API getItem, getItemByLegacyId, and getItemsByItemGroup calls return the ePID of the product. You can also use the product_summary/search method in the Catalog API to search for the ePID of the product. For example: /buy/browse/v1/item_summary/search?epid=15032 Maximum: 1 Required: The method must have category_ids, epid, gtin, or q (or any combination of these)
  * fieldgroups `string`: This field is a comma separated list of values that lets you control what is returned in the response. The default is MATCHING_ITEMS, which returns the items that match the keyword or category specified. The other values return data that can be used to create histograms or provide additional information. Valid Values: ASPECT_REFINEMENTS - This returns the aspectDistributions container, which has the dominantCategoryId, matchCount, and refinementHref for the various aspects of the items found. For example, if you searched for 'Mustang', some of the aspect would be Model Year, Exterior Color, Vehicle Mileage, etc. Note: ASPECT_REFINEMENTS are category specific. BUYING_OPTION_REFINEMENTS - This returns the buyingOptionDistributions container, which has the matchCount and refinementHref for AUCTION and FIXED_PRICE (Buy It Now) items. Note: Classified items are not supported and only &quot;Buy It Now&quot; (non-auction) items are returned. CATEGORY_REFINEMENTS - This returns the categoryDistributions container, which has the categories that the item is in. CONDITION_REFINEMENTS - This returns the conditionDistributions container, such as NEW, USED, etc. Within these groups are multiple states of the condition. For example, New can be New without tag, New in box, New without box, etc. EXTENDED - This returns the shortDescription field, which provides condition and item aspect information and the itemLocation.city field. MATCHING_ITEMS - This is meant to be used with one or more of the refinement values above. You use this to return the specified refinements and all the matching items. FULL - This returns all the refinement containers and all the matching items. Code so that your app gracefully handles any future changes to this list. Default: MATCHING_ITEMS
  * filter `string`: This field supports multiple field filters that can be used to limit/customize the result set. For example: /buy/browse/v1/item_summary/search?q=shirt&amp;filter=price:[10..50] You can also combine filters. /buy/browse/v1/item_summary/search?q=shirt&amp;filter=price:[10..50],sellers:{rpseller|bigSal} The following are the supported filters. For details and examples for all the filters, see Buy API Field Filters. buyingOptions charityOnly conditionIds conditions deliveryCountry deliveryOptions deliveryPostalCode excludeCategoryIds excludeSellers guaranteedDeliveryInDays itemEndDate itemLocationCountry itemStartDate paymentMethods pickupCountry pickupPostalCode pickupRadius pickupRadiusUnit price priceCurrency qualifiedPrograms maxDeliveryCost (free shipping) returnsAccepted sellerAccountTypes sellers For implementation help, refer to eBay API documentation at https://developer.ebay.com/api-docs/buy/browse/types/cos:FilterField
  * gtin `string`: This field lets you search by the Global Trade Item Number of the item as defined by https://www.gtin.info. You can search only by UPC (Universal Product Code). If you have other formats of GTIN, you need to search by keyword. For example: /buy/browse/v1/item_summary/search?gtin=099482432621 Maximum: 1 Required: The method must have category_ids, epid, gtin, or q (or any combination of these)
  * limit `string`: The number of items, from the result set, returned in a single page. Default: 50 Maximum number of items per page (limit): 200 Maximum number of items in a result set: 10,000
  * offset `string`: Specifies the number of items to skip in the result set. This is used with the limit field to control the pagination of the output. If offset is 0 and limit is 10, the method will retrieve items 1-10 from the list of items returned, if offset is 10 and limit is 10, the method will retrieve items 11 thru 20 from the list of items returned. Valid Values: 0-10,000 (inclusive) Default: 0 Maximum number of items returned: 10,000
  * q `string`: A string consisting of one or more keywords that are used to search for items on eBay. The keywords are handled as follows: If the keywords are separated by a comma, it is treated as an AND. In the following example, the query returns items that have iphone AND ipad. /buy/browse/v1/item_summary/search?q=iphone,ipad If the keywords are separated by a space, it is treated as an OR. In the following examples, the query returns items that have iphone OR ipad. /buy/browse/v1/item_summary/search?q=iphone&nbsp;ipad /buy/browse/v1/item_summary/search?q=iphone,&nbsp;ipad Restriction: The * wildcard character is not allowed in this field. Required: The method must have category_ids, epid, gtin, or q (or any combination of these)
  * sort `string`: Specifies the order and the field name to use to sort the items. You can sort items by price (in ascending or descending order) or by distance (only applicable if the &quot;pickup&quot; filters are used, and only ascending order is supported). You can also sort items by listing date, with the most recently listed (newest) items appearing first. Note: To sort in descending order, insert a hyphen (-) before the field name. If no sort parameter is submitted, the result set is sorted by &quot;Best Match&quot;. The following are examples of using the sort query parameter. Sort Result sort=price Sorts by price in ascending order (lowest price first) sort=-price Sorts by price in descending order (highest price first) sort=distance Sorts by distance in ascending order (shortest distance first) sort=newlyListed Sorts by listing date (most recently listed/newest items first) Default: Ascending For implementation help, refer to eBay API documentation at https://developer.ebay.com/api-docs/buy/browse/types/cos:SortField

#### Output
* output [SearchPagedCollection](#searchpagedcollection)

### searchByImage
This is an Experimental method. This method searches for eBay items based on a image and retrieves summaries of the items. You pass in a Base64 image in the request payload and can refine the search by category, or eBay product ID (ePID), or a combination of these using URI parameters. To get the Base64 image string, you can use sites such as https://codebeautify.org/image-to-base64-converter. This method also supports the following: Filtering by the value of one or multiple fields, such as listing format, item condition, price range, location, and more. For the fields supported by this method, see the filter parameter. Filtering by item aspects using the aspect_filter parameter. For details and examples of these capabilities, see Browse API in the Buying Integration Guide. Pagination and sort controls There are pagination controls (limit and offset fields) and sort query parameters that control/sort the data that is returned. By default, the results are sorted by &quot;Best Match&quot;. For more information about Best Match, see the eBay help page Best Match. URLs for this method Production URL: https://api.ebay.com/buy/browse/v1/item_summary/search_by_image/ Sandbox URL: Due to the data available, this method is not supported in the eBay Sandbox. To test your integration, use the Production URL. Request headers This method uses the X-EBAY-C-ENDUSERCTX request header to support revenue sharing for eBay Partner Networks and to improve the accuracy of shipping and delivery time estimations. For details see, Request headers in the Buying Integration Guide. URL Encoding for Parameters Query parameter values need to be URL encoded. For details, see URL encoding query parameter values. For readability, code examples in this document have not been URL encoded. Restrictions This method can return a maximum of 10,000 items. For a list of supported sites and other restrictions, see API Restrictions. eBay Partner Network: In order to receive a commission for your sales, you must use the URL returned in the itemAffiliateWebUrl field to forward your buyer to the ebay.com site.


```js
ebay_buy_browse.searchByImage({}, context)
```

#### Input
* input `object`
  * aspect_filter `string`: This field lets you filter by item aspects. The aspect name/value pairs and category, which is required, is used to limit the results to specific aspects of the item. For example, in a clothing category one aspect pair would be Color/Red. For example, the method below uses the category ID for Women's Clothing. This will return only items for a woman's red shirt. category_ids=15724&amp;aspect_filter=categoryId:15724,Color:{Red} Required: The category ID is required twice; once as a URI parameter and as part of the aspect_filter. For implementation help, refer to eBay API documentation at https://developer.ebay.com/api-docs/buy/browse/types/gct:AspectFilter
  * category_ids `string`: The category ID is used to limit the results. This field can have one category ID or a comma separated list of IDs. Note: Currently, you can pass in only one category ID per request. You can also use any combination of the category_Ids and epid fields. This gives you additional control over the result set. The list of eBay category IDs is not published and category IDs are not the same across all the eBay marketplaces. You can use the following techniques to find a category by site: Use the Category Changes page. Use the Taxonomy API. For details see Get Categories for Buy APIs. Submit the following method to get the dominantCategoryId for an item. /buy/browse/v1/item_summary/search?q= keyword&amp;fieldgroups=ASPECT_REFINEMENTS Required: The method must have category_ids or epid (or any combination of these)
  * charity_ids `string`: The charity ID is used to limit the results to only items associated with the specified charity. This field can have one charity ID or a comma separated list of IDs. The method will return all the items associated with the specified charities. For example: /buy/browse/v1/item_summary/search?charity_ids=13-1788491,300108469 The charity ID is the charity's registration ID, also known as the Employer Identification Number (EIN). In GB, it is the Charity Registration Number (CRN), commonly called &quot;Charity Number&quot;. To find the charities eBay supports, you can search for a charity at Charity Search or go to Charity Shop. To find the charity ID of a specific charity, click on a charity and use the EIN number. For example, the charity ID for American Red Cross, is 530196605. You can also use any combination of the category_Ids and q fields with a charity_Ids to filter the result set. This gives you additional control over the result set. Restriction: This is supported only on the US and GB marketplaces. Maximum: 20 IDs Required: One ID
  * fieldgroups `string`: This field is a comma separated list of values that lets you control what is returned in the response. The default is MATCHING_ITEMS, which returns the items that match the keyword or category specified. The other values return data that can be used to create histograms or provide additional information. Valid Values: ASPECT_REFINEMENTS - This returns the aspectDistributions container, which has the dominantCategoryId, matchCount, and refinementHref for the various aspects of the items found. For example, if you searched for 'Mustang', some of the aspect would be Model Year, Exterior Color, Vehicle Mileage, etc. Note: ASPECT_REFINEMENTS are category specific. BUYING_OPTION_REFINEMENTS - This returns the buyingOptionDistributions container, which has the matchCount and refinementHref for AUCTION and FIXED_PRICE (Buy It Now) items. Note: Classified items are not supported and only &quot;Buy It Now&quot; (non-auction) items are returned. CATEGORY_REFINEMENTS - This returns the categoryDistributions container, which has the categories that the item is in. CONDITION_REFINEMENTS - This returns the conditionDistributions container, such as NEW, USED, etc. Within these groups are multiple states of the condition. For example, New can be New without tag, New in box, New without box, etc. EXTENDED - This returns the shortDescription field, which provides condition and item aspect information and the itemLocation.city field. MATCHING_ITEMS - This is meant to be used with one or more of the refinement values above. You use this to return the specified refinements and all the matching items. FULL - This returns all the refinement containers and all the matching items. Code so that your app gracefully handles any future changes to this list. Default: MATCHING_ITEMS
  * filter `string`: This field supports multiple field filters that can be used to limit/customize the result set. For example: /buy/browse/v1/item_summary/search?q=shirt&amp;filter=price:[10..50] You can also combine filters. /buy/browse/v1/item_summary/search?q=shirt&amp;filter=price:[10..50],sellers:{rpseller|bigSal} The following are the supported filters. For details and examples for all the filters, see Buy API Field Filters. buyingOptions charityOnly conditionIds conditions deliveryCountry deliveryOptions deliveryPostalCode excludeCategoryIds excludeSellers guaranteedDeliveryInDays itemEndDate itemLocationCountry itemStartDate paymentMethods pickupCountry pickupPostalCode pickupRadius pickupRadiusUnit price priceCurrency maxDeliveryCost (free shipping) returnsAccepted sellerAccountTypes sellers For implementation help, refer to eBay API documentation at https://developer.ebay.com/api-docs/buy/browse/types/cos:FilterField
  * limit `string`: The number of items, from the result set, returned in a single page. Default: 50 Maximum number of items per page (limit): 200 Maximum number of items in a result set: 10,000
  * offset `string`: The number of items to skip in the result set. This is used with the limit field to control the pagination of the output. If offset is 0 and limit is 10, the method will retrieve items 1-10 from the list of items returned, if offset is 10 and limit is 10, the method will retrieve items 11 thru 20 from the list of items returned. Valid Values: 0-10,000 (inclusive) Default: 0 Maximum number of items returned: 10,000
  * sort `string`: Specifies the order and the field name to use to sort the items. You can sort items by price (in ascending or descending order) or by distance (only applicable if the &quot;pickup&quot; filters are used, and only ascending order is supported). You can also sort items by listing date, with the most recently listed (newest) items appearing first. Note: To sort in descending order, insert a hyphen (-) before the field name. If no sort parameter is submitted, the result set is sorted by &quot;Best Match&quot;. The following are examples of using the sort query parameter. Sort Result sort=price Sorts by price in ascending order (lowest price first) sort=-price Sorts by price in descending order (highest price first) sort=distance Sorts by distance in ascending order (shortest distance first) sort=newlyListed Sorts by listing date (most recently listed/newest items first) Default: Ascending For implementation help, refer to eBay API documentation at https://developer.ebay.com/api-docs/buy/browse/types/cos:SortField
  * body [SearchByImageRequest](#searchbyimagerequest)

#### Output
* output [SearchPagedCollection](#searchpagedcollection)

### getShoppingCart
This is an experimental method. This method retrieves all the items in the eBay member's cart; items added to the cart while on ebay.com as well as items added to the cart using the Browse API. There are no URI parameters or request payload. The response returns the summary details of all the items in the eBay member's cart; items added to the cart while on ebay.com as well as items added to the cart using the Browse API. If the cart is empty, the response is HTTP 204. The quantity and state of an item changes often. If the item becomes &quot;unavailable&quot; such as, when the listing has ended or the item is out of stock, the item will be returned in the unavailableCartItems container. URLs for this method Production URL: https://api.ebay.com/buy/browse/v1/shopping_cart/ Sandbox URL: https://api.sandbox.ebay.com/buy/browse/v1/shopping_cart/ Note: This method is not available in the eBay API Explorer. Restrictions This method can be used only for eBay members. For a list of supported sites and other restrictions, see API Restrictions.


```js
ebay_buy_browse.getShoppingCart(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [RemoteShopcartResponse](#remoteshopcartresponse)

### addItem
This is an Experimental method. This method creates an eBay cart for the eBay member, if one does not exist, and adds items to that cart. Because a cart never expires, any item added to the cart will remain in the cart until it is removed. To use this method, you must submit a RESTful item ID and the quantity of the item. If the quantity value is greater than the number of available, the quantity value is changed to the number available and a warning is returned. For example, if there are 15 baseballs available and you set the quantity value to 50, the service automatically changes the value of quantity to 15. The response returns all the items in the eBay member's cart; items added to the cart while on ebay.com as well as items added to the cart using the Browse API. The quantity and state of an item changes often. If the item becomes &quot;unavailable&quot; such as, when the listing has ended or the item is out of stock, whether it has just been added to the cart or has been in the cart for some time, the item will be returned in the unavailableCartItems container. Note: There are differences between how legacy APIs, such as Finding, and RESTful APIs, such as Browse, return the identifier of an &quot;item&quot; and what the item ID represents. If you have an item ID from one of the legacy APIs, you can use the legacy item ID with the getItemByLegacyId method to retrieve the RESTful ID for that item. For more information about how to use legacy IDs with the Buy APIs, see Legacy API compatibility in the Buying Integration guide. URLs for this method Production URL: https://api.ebay.com/buy/browse/v1/shopping_cart/ Sandbox URL: https://api.sandbox.ebay.com/buy/browse/v1/shopping_cart/ Note: This method is not available in the eBay API Explorer. Restrictions This method can be used only for eBay members. You can add only items with a FIXED_PRICE that accept PayPal as a payment. For a list of supported sites and other restrictions, see API Restrictions.


```js
ebay_buy_browse.addItem({}, context)
```

#### Input
* input `object`
  * body [AddCartItemInput](#addcartiteminput)

#### Output
* output [RemoteShopcartResponse](#remoteshopcartresponse)

### removeItem
This is an experimental method. This method removes a specific item from the eBay member's cart. You specify the ID of the item in the cart (cartItemId) that you want to remove. The response returns all the items in the eBay member's cart; items added to the cart while on ebay.com as well as items added to the cart using the Browse API. If you remove the last item in the cart, the response is HTTP 204. The quantity and state of an item changes often. If the item becomes &quot;unavailable&quot; such as, when the listing has ended or the item is out of stock, the item will be returned in the unavailableCartItems container. Note: The cartItemId is not the same as the item ID. The cartItemId is the identifier of a specific item in the cart and is generated when the item was added to the cart. URLs for this method Production URL: https://api.ebay.com/buy/browse/v1/shopping_cart/ Sandbox URL: https://api.sandbox.ebay.com/buy/browse/v1/shopping_cart/ Note: This method is not available in the eBay API Explorer. Restrictions This method can be used only for eBay members. For a list of supported sites and other restrictions, see API Restrictions.


```js
ebay_buy_browse.removeItem({}, context)
```

#### Input
* input `object`
  * body [RemoveCartItemInput](#removecartiteminput)

#### Output
* output [RemoteShopcartResponse](#remoteshopcartresponse)

### updateQuantity
This is an experimental method. This method updates the quantity value of a specific item in the eBay member's cart. You specify the ID of the item in the cart (cartItemId) and the new value for the quantity. If the quantity value is greater than the number of available, the quantity value is changed to the number available and a warning is returned. For example, if there are 15 baseballs available and you set the quantity value to 50, the service automatically changes the value of quantity to 15. The response returns all the items in the eBay member's cart; items added to the cart while on ebay.com as well as items added to the cart using the Browse API. The quantity and state of an item changes often. If the item becomes &quot;unavailable&quot; such as, the listing has ended or the item is out of stock, the item will be returned in the unavailableCartItems container. Note: The cartItemId is not the same as the item ID. The cartItemId is the identifier of a specific item in the cart and is generated when the item was added to the cart. URLs for this method Production URL: https://api.ebay.com/buy/browse/v1/shopping_cart/ Sandbox URL: https://api.sandbox.ebay.com/buy/browse/v1/shopping_cart/ Note: This method is not available in the eBay API Explorer. Restrictions This method can be used only for eBay members. For a list of supported sites and other restrictions, see API Restrictions.


```js
ebay_buy_browse.updateQuantity({}, context)
```

#### Input
* input `object`
  * body [UpdateCartItemInput](#updatecartiteminput)

#### Output
* output [RemoteShopcartResponse](#remoteshopcartresponse)



## Definitions

### AddCartItemInput
* AddCartItemInput `object`: The type that defines the fields for the <b>addItems</b> request.
  * itemId `string`: The eBay RESTful identifier of the item you want added to the cart. RESTful Item ID Format: v1|#|# For example: v1|272394640372|0 v1|162846450672|461882996982 For more information about item ID for RESTful APIs, see the Legacy API compatibility section of the Buy APIs Overview. Maximum number of items in a cart: 100
  * quantity `integer`: The number of this item the buyer wants to purchase. If this value is greater than the number available, the service will change this value to the number available. If this happens, a warning is returned. Maximum: number available

### AdditionalProductIdentity
* AdditionalProductIdentity `object`: The type that defines the array of product identifiers associated with the item. This container is returned if the seller has associated the eBay Product Identifier (ePID) with the item and in the request <b> fieldgroups</b> is set to <code>PRODUCT</code>.
  * productIdentity `array`: An array of the product identifier/value pairs for the product associated with the item. This is returned if the seller has associated the eBay Product Identifier (ePID) with the item and the request has fieldgroups set to PRODUCT. The following table shows what is returned, based on the item information provided by the seller, when the fieldgroups set to PRODUCT. ePID Provided Product&nbsp;ID(s) Provided Response No No The AdditionalProductIdentity container is not returned. No Yes The AdditionalProductIdentity container is not returned but the product identifiers specified by the seller are returned in the localizedAspects container. Yes No The AdditionalProductIdentity container is returned listing the product identifiers of the product. Yes Yes The AdditionalProductIdentity container is returned listing all the product identifiers of the product and the product identifiers specified by the seller are returned in the localizedAspects container.
    * items [ProductIdentity](#productidentity)

### Address
* Address `object`: The type that defines the fields for an address.
  * addressLine1 `string`: The first line of the street address. Note: This is conditionally returned in the itemLocation field.
  * addressLine2 `string`: The second line of the street address. This field is not always used, but can be used for 'Suite Number' or 'Apt Number'.
  * city `string`: The city of the address.
  * country `string`: The two-letter ISO 3166 standard of the country of the address. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/browse/types/ba:CountryCodeEnum'>eBay API documentation</a>
  * county `string`: The county of the address.
  * postalCode `string`: The postal code (or zip code in US) code of the address. Sellers set a postal code (or zip code in US) for items when they are listed. The postal code is used for calculating proximity searches. It is anonymized when returned in itemLocation.postalCode via the API.
  * stateOrProvince `string`: The state or province of the address. Note: This is conditionally returned in the itemLocation field.

### Amount
* Amount `object`
  * currency `string`: The list of valid currencies. Each ISO 4217 currency code includes the currency name followed by the numeric value. For example, the Canadian Dollar code (CAD) would take the following form: Canadian Dollar, 124. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/browse/types/ba:CurrencyCodeEnum'>eBay API documentation</a>
  * value `string`: The value of the discounted amount.

### Aspect
* Aspect `object`: The type that defines the fields for the name/value pairs for the aspects of the product. For example: BRAND/Apple
  * localizedName `string`: The text representing the name of the aspect for the name/value pair, such as Brand.
  * localizedValues `array`: The text representing the value of the aspect for the name/value pair, such as Apple.
    * items `string`

### AspectDistribution
* AspectDistribution `object`: The type that define the fields for the aspect information. Aspects are the variations of an item, such as color, size, etc.
  * aspectValueDistributions `array`: An array of containers for the various values of the aspect and the match count and a HATEOAS reference ( refinementHref) for this aspect.
    * items [AspectValueDistribution](#aspectvaluedistribution)
  * localizedAspectName `string`: The name of an aspect, such as Brand, Color, etc.

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

### AttributeNameValue
* AttributeNameValue `object`: The type the defines attribute name/value pair fields that specify a product. The type of data depends on the context. For example, if you were using this to specify a specific vehicle, the attribute names would be Make, Model, Year, etc.
  * name `string`: The name of the product attribute, such as Make, Model, Year, etc.
  * value `string`: The value for the name attribute, such as BMW, R1200GS, 2011, etc.

### AutoCorrections
* AutoCorrections `object`
  * q `string`: The automatically spell-corrected keyword from the request.

### AvailableCoupon
* AvailableCoupon `object`
  * constraint `string`: The limitations or restrictions of the coupon. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/browse/types/gct:CouponConstraint'>eBay API documentation</a>
  * discountAmount [Amount](#amount)
  * discountType `string`: The type of discount that the coupon applies. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/browse/types/gct:CouponDiscountType'>eBay API documentation</a>
  * message `string`: A description of the coupon. Note: The value returned in the termsWebUrl field should appear for all experiences when displaying coupons. The value in the availableCoupons.message field must also be included, if returned in the API response.
  * redemptionCode `string`: The coupon code.
  * termsWebUrl `string`: The URL to the coupon terms of use. Note: The value returned in the termsWebUrl field should appear for all experiences when displaying coupons. The value in the availableCoupons.message field must also be included, if returned in the API response.

### BuyingOptionDistribution
* BuyingOptionDistribution `object`: The container that defines the fields for the buying options refinements. This container is returned when <b> fieldgroups</b> is set to <code>BUYING_OPTION_REFINEMENTS</code> or <code>FULL</code> in the request.
  * buyingOption `string`: The container that returns the buying option type. This will be AUCTION or FIXED_PRICE or both. For details, see buyingOptions.
  * matchCount `integer`: The number of items having this buying option.
  * refinementHref `string`: The HATEOAS reference for this buying option.

### CartItem
* CartItem `object`: The type that defines the fields for the individual items in a cart.
  * cartItemId `string`: The identifier for the item being added to the cart. This is generated when the item is added to the cart.
  * cartItemSubtotal [Amount](#amount)
  * image [Image](#image)
  * itemId `string`: The RESTful identifier of the item. This identifier is generated when the item was listed. RESTful Item ID Format: v1|#|# For example: v1|272394640372|0 v1|162846450672|461882996982
  * itemWebUrl `string`: The URL of the eBay view item page for the item.
  * price [Price](#price)
  * quantity `integer`: The number of this item the buyer wants to purchase.
  * title `string`: The title of the item. This can be written by the seller or come from the eBay product catalog.

### Category
* Category `object`: This type is used by the <b> categories</b>  container in the response of the <b> search</b>  method, and contains the primary item category ID of the item, as well as the secondary item category if the item was listed in two categories.
  * categoryId `string`: The unique identifier of the primary item category of the item, as well as the secondary item category if item was listed in two categories.

### CategoryDistribution
* CategoryDistribution `object`: The container that defines the fields for the category refinements. This container is returned when <b> fieldgroups</b> is set to <code>CATEGORY_REFINEMENTS</code> or <code>FULL</code> in the request.
  * categoryId `string`: The identifier of the category.
  * categoryName `string`: The name of the category, such as Baby &amp; Toddler Clothing.
  * matchCount `integer`: The number of items in this category.
  * refinementHref `string`: The HATEOAS reference of this category.

### CommonDescriptions
* CommonDescriptions `object`: The type that defines the fields for the item ids that all use a common description.  Often the item variations within an item group all have the same description. Instead of repeating this description in the item details of each item, a description that is shared by at least one other item is returned in this container. If the description is unique, it is returned in the <b> items.description</b> field.
  * description `string`: The item description that is used by more than one of the item variations.
  * itemIds `array`: A list of item ids that have this description.
    * items `string`

### CompatibilityPayload
* CompatibilityPayload `object`: An array of attribute name/value pairs used to define a specific product. For example: If you wanted to specify a specific car, one of the name/value pairs would be <br /><code>"name" : "Year", <br />"value" : "2019"</code>  <p> For a list of the attributes required for cars and trucks and motorcycles see <a href="/api-docs/buy/static/api-browse.html#Check">Check compatibility</a> in the Buy Integration Guide.</p>
  * compatibilityProperties `array`: An array of attribute name/value pairs used to define a specific product. For example: If you wanted to specify a specific car, one of the name/value pairs would be &quot;name&quot; : &quot;Year&quot;, &quot;value&quot; : &quot;2019&quot; For a list of the attributes required for cars and trucks and motorcycles see Check compatibility in the Buy Integration Guide.
    * items [AttributeNameValue](#attributenamevalue)

### CompatibilityProperty
* CompatibilityProperty `object`: This container returns the product attribute name/value pairs that are compatible with the keyword. These attributes are submitted in the  <b>compatibility_filter</b> request field.
  * localizedName `string`: The name of the product attribute that as been translated to the language of the site.
  * name `string`: The name of the product attribute, such as Make, Model, Year, etc.
  * value `string`: The value for the name attribute, such as BMW, R1200GS, 2011, etc.

### CompatibilityResponse
* CompatibilityResponse `object`: The type that defines the response fields for <b> checkCompatibility</b>.  
  * compatibilityStatus `string`: An enumeration value that tells you if the item is compatible with the product. The values are: COMPATIBLE - Indicates the item is compatible with the product specified in the request. NOT_COMPATIBLE - Indicates the item is not compatible with the product specified in the request. Be sure to check all the value fields to ensure they are correct as errors in the value can also cause this response. UNDETERMINED - Indicates one or more attributes for the specified product are missing so compatibility cannot be determined. The response returns the attributes that are missing. Code so that your app gracefully handles any future changes to this list. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/browse/types/gct:CompatibilityStatus'>eBay API documentation</a>
  * warnings `array`: An array of warning messages. These types of errors do not prevent the method from executing but should be checked.
    * items [Error](#error)

### ConditionDistribution
* ConditionDistribution `object`: The container that defines the fields for the conditions refinements. This container is returned when <b> fieldgroups</b> is set to <code>CONDITION_REFINEMENTS</code> or <code>FULL</code> in the request.
  * condition `string`: The text describing the condition of the item, such as New or Used. For a list of condition names, see Item Condition IDs and Names. Code so that your app gracefully handles any future changes to this list. Note: In the US and Australian marketplaces, Condition ID 2000 now maps to an item condition of 'Certified Refurbished', but this item condition is only available for use for a select number of US and Australian sellers. For all other marketplaces besides the US and Australia, Condition ID 2000 still maps to 'Manufacturer Refurbished'.
  * conditionId `string`: The identifier of the condition. For example, 1000 is the identifier for NEW. Note: In the US and Australian marketplaces, Condition ID 2000 now maps to an item condition of 'Certified Refurbished', but this item condition is only available for use for a select number of US and Australian sellers. For all other marketplaces besides the US and Australia, Condition ID 2000 still maps to 'Manufacturer Refurbished'.
  * matchCount `integer`: The number of items having the condition.
  * refinementHref `string`: The HATEOAS reference of this condition.

### ConvertedAmount
* ConvertedAmount `object`: This type defines the monetary value of an amount. It can provide the amount in both the currency used on the eBay site where an item is being offered and the conversion of that value into another currency, if applicable.
  * convertedFromCurrency `string`: The three-letter ISO 4217 code representing the currency of the amount in the convertedFromValue field. This value is required or returned only if currency conversion/localization is required, and represents the pre-conversion currency. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/browse/types/ba:CurrencyCodeEnum'>eBay API documentation</a>
  * convertedFromValue `string`: The monetary amount before any conversion is performed, in the currency specified by the convertedFromCurrency field. This value is required or returned only if currency conversion/localization is required. The value field contains the converted amount of this value, in the currency specified by the currency field.
  * currency `string`: The three-letter ISO 4217 code representing the currency of the amount in the value field. If currency conversion/localization is required, this is the post-conversion currency of the amount in the value field. Default: The currency of the authenticated user's country. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/browse/types/ba:CurrencyCodeEnum'>eBay API documentation</a>
  * value `string`: The monetary amount, in the currency specified by the currency field. If currency conversion/localization is required, this value is the converted amount, and the convertedFromValue field contains the amount in the original currency.

### CoreItem
* CoreItem `object`: An array of containers with the details for all of the items returned.
  * additionalImages `array`: An array of containers with the URLs for the images that are in addition to the primary image. The primary image is returned in the image.imageUrl field.
    * items [Image](#image)
  * adultOnly `boolean`: This indicates if the item is for adults only. For more information about adult-only items on eBay, see Adult items policy for sellers and Adult-Only items on eBay for buyers.
  * ageGroup `string`: (Primary Item Aspect) The age group for which the product is recommended. For example, newborn, infant, toddler, kids, adult, etc. All the item aspects, including this aspect, are returned in the localizedAspects container.
  * availableCoupons `array`: A list of available coupons for the item.
    * items [AvailableCoupon](#availablecoupon)
  * bidCount `integer`: This integer value indicates the total number of bids that have been placed against an auction item. This field is returned only for auction items.
  * brand `string`: (Primary Item Aspect) The name brand of the item, such as Nike, Apple, etc. All the item aspects, including this aspect, are returned in the localizedAspects container.
  * buyingOptions `array`: A comma separated list of all the purchase options available for the item. The values returned are: FIXED_PRICE - Indicates the buyer can purchase the item for a set price using the Buy It Now button. AUCTION - Indicates the buyer can place a bid for the item. After the first bid is placed, this becomes a live auction item and is the only buying option for this item. BEST_OFFER - Indicates the buyer can send the seller a price they're willing to pay for the item. The seller can accept, reject, or send a counter offer. For more information on how this works, see Making a Best Offer. Code so that your app gracefully handles any future changes to this list.
    * items `string`
  * categoryId `string`: The ID of the leaf category for this item. A leaf category is the lowest level in that category and has no children.
  * categoryPath `string`: Text that shows the category hierarchy of the item. For example: Computers/Tablets &amp; Networking, Laptops &amp; Netbooks, PC Laptops &amp; Netbooks
  * color `string`: (Primary Item Aspect) Text describing the color of the item. All the item aspects, including this aspect, are returned in the localizedAspects container.
  * condition `string`: A short text description for the condition of the item, such as New or Used. For a list of condition names, see Item Condition IDs and Names. Code so that your app gracefully handles any future changes to this list. Note: In the US and Australian marketplaces, Condition ID 2000 now maps to an item condition of 'Certified Refurbished', but this item condition is only available for use for a select number of US and Australian sellers. For all other marketplaces besides the US and Australia, Condition ID 2000 still maps to 'Manufacturer Refurbished'.
  * conditionDescription `string`: A full text description for the condition of the item. This field elaborates on the value specified in the condition field and provides full details for the condition of the item. Note: In the US and Australian marketplaces, Condition ID 2000 now maps to an item condition of 'Certified Refurbished', but this item condition is only available for use for a select number of US and Australian sellers. For all other marketplaces besides the US and Australia, Condition ID 2000 still maps to 'Manufacturer Refurbished'.
  * conditionId `string`: The identifier of the condition of the item. For example, 1000 is the identifier for NEW. For a list of condition names and IDs, see Item Condition IDs and Names. Code so that your app gracefully handles any future changes to this list. Note: In the US and Australian marketplaces, Condition ID 2000 now maps to an item condition of 'Certified Refurbished', but this item condition is only available for use for a select number of US and Australian sellers. For all other marketplaces besides the US and Australia, Condition ID 2000 still maps to 'Manufacturer Refurbished'.
  * currentBidPrice [ConvertedAmount](#convertedamount)
  * description `string`: The full description of the item that was created by the seller. This can be plain text or rich content and can be very large.
  * eligibleForInlineCheckout `boolean`: This field indicates if the item can be purchased using the Buy Order API. If the value of this field is true, this indicates that the item can be purchased using the Order API. If the value of this field is false, this indicates that the item cannot be purchased using the Order API and must be purchased on the eBay site.
  * enabledForGuestCheckout `boolean`: This indicates if the item can be purchased using Guest Checkout in the Order API. You can use this flag to exclude items from your inventory that are not eligible for Guest Checkout, such as gift cards.
  * energyEfficiencyClass `string`: This indicates the European energy efficiency rating (EEK) of the item. This field is returned only if the seller specified the energy efficiency rating. The rating is a set of energy efficiency classes from A to G, where 'A' is the most energy efficient and 'G' is the least efficient. This rating helps buyers choose between various models. When the manufacturer's specifications for this item are available, the link to this information is returned in the productFicheWebUrl field.
  * epid `string`: An EPID is the eBay product identifier of a product from the eBay product catalog. This indicates the product in which the item belongs.
  * estimatedAvailabilities `array`: The estimated number of this item that are available for purchase. Because the quantity of an item can change several times within a second, it is impossible to return the exact quantity. So instead of returning quantity, the estimated availability of the item is returned.
    * items [EstimatedAvailability](#estimatedavailability)
  * gender `string`: (Primary Item Aspect) The gender for the item. This is used for items that could vary by gender, such as clothing. For example: male, female, or unisex. All the item aspects, including this aspect, are returned in the localizedAspects container.
  * gtin `string`: The unique Global Trade Item number of the item as defined by https://www.gtin.info. This can be a UPC (Universal Product Code), EAN (European Article Number), or an ISBN (International Standard Book Number) value.
  * image [Image](#image)
  * inferredEpid `string`: The ePID (eBay Product ID of a product from the eBay product catalog) for the item, which has been programmatically determined by eBay using the item's title, aspects, and other data. If the seller provided an ePID for the item, the seller's value is returned in the epid field. Note: This field is returned only for authorized Partners.
  * itemAffiliateWebUrl `string`: The URL of the View Item page of the item, which includes the affiliate tracking ID. This field is only returned if the eBay partner enables affiliate tracking for the item by including the X-EBAY-C-ENDUSERCTX request header in the method. Note: eBay Partner Network, in order to be commissioned for your sales, you must use this URL to forward your buyer to the ebay.com site.
  * itemEndDate `string`: The date and time up to which the items can be purchased. This value is returned in UTC format (yyyy-MM-ddThh:mm:ss.sssZ), which you can convert into the local time of the buyer. Note: This field is not returned for Good 'Til Cancelled (GTC) listings.
  * itemId `string`: The unique RESTful identifier of the item.
  * itemLocation [Address](#address)
  * itemWebUrl `string`: The URL of the View Item page of the item. This enables you to include a &quot;Report Item on eBay&quot; link that takes the buyer to the View Item page on eBay. From there they can report any issues regarding this item to eBay.
  * legacyItemId `string`: The unique identifier of the eBay listing that contains the item. This is the traditional/legacy ID that is often seen in the URL of the listing View Item page.
  * localizedAspects `array`: An array of containers that show the complete list of the aspect name/value pairs that describe the variation of the item.
    * items [TypedNameValue](#typednamevalue)
  * lotSize `integer`: The number of items in a lot. In other words, a lot size is the number of items that are being sold together. A lot is a set of two or more items included in a single listing that must be purchased together in a single order line item. All the items in the lot are the same but there can be multiple items in a single lot, such as the package of batteries shown in the example below. Item Lot Definition Lot Size A package of 24 AA batteries A box of 10 packages 10 A P235/75-15 Goodyear tire 4 tires 4 Fashion Jewelry Rings Package of 100 assorted rings 100 Note: Lots are not supported in all categories.
  * marketingPrice [MarketingPrice](#marketingprice)
  * material `string`: (Primary Item Aspect) Text describing what the item is made of. For example, silk. All the item aspects, including this aspect, are returned in the localizedAspects container.
  * minimumPriceToBid [ConvertedAmount](#convertedamount)
  * mpn `string`: The manufacturer's part number, which is a unique number that identifies a specific product. To identify the product, this is always used along with brand.
  * pattern `string`: (Primary Item Aspect) Text describing the pattern used on the item. For example, paisley. All the item aspects, including this aspect, are returned in the localizedAspects container.
  * paymentMethods `array`: The payment methods for the item, including the payment method types, brands, and instructions for the buyer.
    * items [PaymentMethod](#paymentmethod)
  * price [ConvertedAmount](#convertedamount)
  * priceDisplayCondition `string`: Indicates when in the buying flow the item's price can appear for minimum advertised price (MAP) items, which is the lowest price a retailer can advertise/show for this item. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/browse/types/gct:PriceDisplayConditionEnum'>eBay API documentation</a>
  * primaryItemGroup [ItemGroupSummary](#itemgroupsummary)
  * primaryProductReviewRating [ReviewRating](#reviewrating)
  * product [Product](#product)
  * productFicheWebUrl `string`: The URL of a page containing the manufacturer's specification of this item, which helps buyers make a purchasing decision. This information is available only for items that include the European energy efficiency rating (EEK) but is not available for all items with an EEK rating and is returned only if this information is available. The EEK rating of the item is returned in the energyEfficiencyClass field.
  * qualifiedPrograms `array`: An array of the qualified programs available for the item, such as EBAY_PLUS. eBay Plus is a premium account option for buyers, which provides benefits such as fast free domestic shipping and free returns on selected items. Top-Rated eBay sellers must opt in to eBay Plus to be able to offer the program on qualifying listings. Sellers must commit to next-day delivery of those items. Note: eBay Plus is available only to buyers in Germany, Austria, and Australia marketplaces.
    * items `string`
  * quantityLimitPerBuyer `integer`: The maximum number for a specific item that one buyer can purchase.
  * reservePriceMet `boolean`: This indicates if the reserve price of the item has been met. A reserve price is set by the seller and is the minimum amount the seller is willing to sell the item for. If the highest bid is not equal to or higher than the reserve price when the auction ends, the listing ends and the item is not sold. Note: This is returned only for auctions that have a reserve price.
  * returnTerms [ItemReturnTerms](#itemreturnterms)
  * seller [SellerDetail](#sellerdetail)
  * sellerItemRevision `string`: An identifier generated/incremented when a seller revises the item. There are two types of item revisions: Seller changes, such as changing the title eBay system changes, such as changing the quantity when an item is purchased This ID is changed only when the seller makes a change to the item. This means you cannot use this value to determine if the quantity has changed.
  * shipToLocations [ShipToLocations](#shiptolocations)
  * shippingOptions `array`: An array of shipping options containers that have the details about cost, carrier, etc. of one shipping option.
    * items [ShippingOption](#shippingoption)
  * shortDescription `string`: This text string is derived from the item condition and the item aspects (such as size, color, capacity, model, brand, etc.).
  * size `string`: (Primary Item Aspect) The size of the item. For example, '7' for a size 7 shoe. All the item aspects, including this aspect, are returned in the localizedAspects container.
  * sizeSystem `string`: (Primary Item Aspect) The sizing system of the country. All the item aspects, including this aspect, are returned in the localizedAspects container. Valid Values: AU (Australia), BR (Brazil), CN (China), DE (Germany), EU (European Union), FR (France), IT (Italy), JP (Japan), MX (Mexico), US (USA), UK (United Kingdom) Code so that your app gracefully handles any future changes to this list.
  * sizeType `string`: (Primary Item Aspect) Text describing a size group in which the item would be included, such as regular, petite, plus, big-and-tall or maternity. All the item aspects, including this aspect, are returned in the localizedAspects container.
  * subtitle `string`: A subtitle is optional and allows the seller to provide more information about the product, possibly including keywords that may assist with search results.
  * taxes `array`: The container for the tax information for the item.
    * items [Taxes](#taxes)
  * title `string`: The seller-created title of the item. Maximum Length: 80 characters
  * topRatedBuyingExperience `boolean`: This indicates if the item a top-rated plus item. There are three benefits of a top-rated plus item; a minimum 30-day money-back return policy, shipping the items in 1 business day with tracking provided, and the added comfort of knowing this item is from experienced sellers with the highest buyer ratings. See the Top Rated Plus Items and Becoming a Top Rated Seller and qualifying for Top Rated Plus help topics for more information.
  * uniqueBidderCount `integer`: This integer value indicates the number of different eBay users who have placed one or more bids on an auction item. This field is only applicable to auction items.
  * unitPrice [ConvertedAmount](#convertedamount)
  * unitPricingMeasure `string`: The designation, such as size, weight, volume, count, etc., that was used to specify the quantity of the item. This helps buyers compare prices. For example, the following tells the buyer that the item is 7.99 per 100 grams. &quot;unitPricingMeasure&quot;: &quot;100g&quot;, &quot;unitPrice&quot;: { &nbsp;&nbsp;&quot;value&quot;: &quot;7.99&quot;, &nbsp;&nbsp;&quot;currency&quot;: &quot;GBP&quot;

### Error
* Error `object`: The type that defines the fields that can be returned in an error.
  * category `string`: This string value indicates the error category. There are three categories of errors: request errors, application errors, and system errors.
  * domain `string`: The name of the primary system where the error occurred. This is relevant for application errors.
  * errorId `integer`: A unique code that identifies the particular error or warning that occurred. Your application can use error codes as identifiers in your customized error-handling algorithms.
  * inputRefIds `array`: An array of reference IDs that identify the specific request elements most closely associated to the error or warning, if any.
    * items `string`
  * longMessage `string`: A detailed description of the condition that caused the error or warning, and information on what to do to correct the problem.
  * message `string`: A description of the condition that caused the error or warning.
  * outputRefIds `array`: An array of reference IDs that identify the specific response elements most closely associated to the error or warning, if any.
    * items `string`
  * parameters `array`: An array of warning and error messages that return one or more variables contextual information about the error or warning. This is often the field or value that triggered the error or warning.
    * items [ErrorParameter](#errorparameter)
  * subdomain `string`: The name of the subdomain in which the error or warning occurred.

### ErrorParameter
* ErrorParameter `object`: An array of name/value pairs that provide details regarding the error.
  * name `string`: This is the name of input field that caused an issue with the call request.
  * value `string`: This is the actual value that was passed in for the element specified in the name field.

### EstimatedAvailability
* EstimatedAvailability `object`: The type that defines the fields for the estimated item availability information.
  * availabilityThreshold `integer`: This field is return only when the seller sets their 'display item quantity' preference to Display &quot;More than 10 available&quot; in your listing (if applicable). The value of this field will be &quot;10&quot;, which is the threshold value. Code so that your app gracefully handles any future changes to this value.
  * availabilityThresholdType `string`: This field is return only when the seller sets their Display Item Quantity preference to Display &quot;More than 10 available&quot; in your listing (if applicable). The value of this field will be MORE_THAN. This indicates that the seller has more than the 'quantity display preference', which is 10, in stock for this item. The following are the display item quantity preferences the seller can set. Display &quot;More than 10 available&quot; in your listing (if applicable) If the seller enables this preference, this field is returned as long as there are more than 10 of this item in inventory. If the quantity is equal to 10 or drops below 10, this field is not returned and the estimated quantity of the item is returned in the estimatedAvailableQuantity field. Display the exact quantity in your items If the seller enables this preference, the availabilityThresholdType and availabilityThreshold fields are not returned and the estimated quantity of the item is returned in the estimatedAvailableQuantity field. Note: Because the quantity of an item can change several times within a second, it is impossible to return the exact quantity. Code so that your app gracefully handles any future changes to these preferences. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/browse/types/gct:AvailabilityThresholdEnum'>eBay API documentation</a>
  * deliveryOptions `array`: An array of available delivery options. Valid Values: SHIP_TO_HOME, SELLER_ARRANGED_LOCAL_PICKUP, IN_STORE_PICKUP, PICKUP_DROP_OFF, or DIGITAL_DELIVERY Code so that your app gracefully handles any future changes to this list.
    * items `string`:  For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/browse/types/gct:DeliveryOptionsEnum'>eBay API documentation</a>
  * estimatedAvailabilityStatus `string`: An enumeration value representing the inventory status of this item. Note: Be sure to review the itemEndDate field to determine whether the item is available for purchase. Valid Values: IN_STOCK, LIMITED_STOCK, or OUT_OF_STOCK Code so that your app gracefully handles any future changes to this list. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/browse/types/gct:AvailabilityStatusEnum'>eBay API documentation</a>
  * estimatedAvailableQuantity `integer`: The estimated number of this item that are available for purchase. Because the quantity of an item can change several times within a second, it is impossible to return the exact quantity. So instead of returning quantity, the estimated availability of the item is returned.
  * estimatedSoldQuantity `integer`: The estimated number of this item that have been sold.

### Image
* Image `object`: Type the defines the details of an image, such as size and image URL. Currently,  only <b> imageUrl</b> is  populated. The <b> height</b> and <b> width</b> were added for future use.
  * height `integer`: Reserved for future use.
  * imageUrl `string`: The URL of the image.
  * width `integer`: Reserved for future use.

### Item
* Item `object`: The details of an item that can be purchased.
  * additionalImages `array`: An array of containers with the URLs for the images that are in addition to the primary image. The primary image is returned in the image.imageUrl field.
    * items [Image](#image)
  * adultOnly `boolean`: This indicates if the item is for adults only. For more information about adult-only items on eBay, see Adult items policy for sellers and Adult-Only items on eBay for buyers.
  * ageGroup `string`: (Primary Item Aspect) The age group for which the product is recommended. For example, newborn, infant, toddler, kids, adult, etc. All the item aspects, including this aspect, are returned in the localizedAspects container.
  * availableCoupons `array`: A list of available coupons for the item.
    * items [AvailableCoupon](#availablecoupon)
  * bidCount `integer`: This integer value indicates the total number of bids that have been placed against an auction item. This field is returned only for auction items.
  * brand `string`: (Primary Item Aspect) The name brand of the item, such as Nike, Apple, etc. All the item aspects, including this aspect, are returned in the localizedAspects container.
  * buyingOptions `array`: A comma separated list of all the purchase options available for the item. The values returned are: FIXED_PRICE - Indicates the buyer can purchase the item for a set price using the Buy It Now button. AUCTION - Indicates the buyer can place a bid for the item. After the first bid is placed, this becomes a live auction item and is the only buying option for this item. BEST_OFFER - Indicates the buyer can send the seller a price they're willing to pay for the item. The seller can accept, reject, or send a counter offer. For more information on how this works, see Making a Best Offer. Code so that your app gracefully handles any future changes to this list.
    * items `string`
  * categoryId `string`: The ID of the leaf category for this item. A leaf category is the lowest level in that category and has no children.
  * categoryPath `string`: Text that shows the category hierarchy of the item. For example: Computers/Tablets &amp; Networking, Laptops &amp; Netbooks, PC Laptops &amp; Netbooks
  * color `string`: (Primary Item Aspect) Text describing the color of the item. All the item aspects, including this aspect, are returned in the localizedAspects container.
  * condition `string`: A short text description for the condition of the item, such as New or Used. For a list of condition names, see Item Condition IDs and Names. Code so that your app gracefully handles any future changes to this list. Note: In the US and Australian marketplaces, Condition ID 2000 now maps to an item condition of 'Certified Refurbished', but this item condition is only available for use for a select number of US and Australian sellers. For all other marketplaces besides the US and Australia, Condition ID 2000 still maps to 'Manufacturer Refurbished'.
  * conditionDescription `string`: A full text description for the condition of the item. This field elaborates on the value specified in the condition field and provides full details for the condition of the item. Note: In the US and Australian marketplaces, Condition ID 2000 now maps to an item condition of 'Certified Refurbished', but this item condition is only available for use for a select number of US and Australian sellers. For all other marketplaces besides the US and Australia, Condition ID 2000 still maps to 'Manufacturer Refurbished'.
  * conditionId `string`: The identifier of the condition of the item. For example, 1000 is the identifier for NEW. For a list of condition names and IDs, see Item Condition IDs and Names. Code so that your app gracefully handles any future changes to this list. Note: In the US and Australian marketplaces, Condition ID 2000 now maps to an item condition of 'Certified Refurbished', but this item condition is only available for use for a select number of US and Australian sellers. For all other marketplaces besides the US and Australia, Condition ID 2000 still maps to 'Manufacturer Refurbished'.
  * currentBidPrice [ConvertedAmount](#convertedamount)
  * description `string`: The full description of the item that was created by the seller. This can be plain text or rich content and can be very large.
  * eligibleForInlineCheckout `boolean`: This field indicates if the item can be purchased using the Buy Order API. If the value of this field is true, this indicates that the item can be purchased using the Order API. If the value of this field is false, this indicates that the item cannot be purchased using the Order API and must be purchased on the eBay site.
  * enabledForGuestCheckout `boolean`: This indicates if the item can be purchased using Guest Checkout in the Order API. You can use this flag to exclude items from your inventory that are not eligible for Guest Checkout, such as gift cards.
  * energyEfficiencyClass `string`: This indicates the European energy efficiency rating (EEK) of the item. This field is returned only if the seller specified the energy efficiency rating. The rating is a set of energy efficiency classes from A to G, where 'A' is the most energy efficient and 'G' is the least efficient. This rating helps buyers choose between various models. When the manufacturer's specifications for this item are available, the link to this information is returned in the productFicheWebUrl field.
  * epid `string`: An EPID is the eBay product identifier of a product from the eBay product catalog. This indicates the product in which the item belongs.
  * estimatedAvailabilities `array`: The estimated number of this item that are available for purchase. Because the quantity of an item can change several times within a second, it is impossible to return the exact quantity. So instead of returning quantity, the estimated availability of the item is returned.
    * items [EstimatedAvailability](#estimatedavailability)
  * gender `string`: (Primary Item Aspect) The gender for the item. This is used for items that could vary by gender, such as clothing. For example: male, female, or unisex. All the item aspects, including this aspect, are returned in the localizedAspects container.
  * gtin `string`: The unique Global Trade Item number of the item as defined by https://www.gtin.info. This can be a UPC (Universal Product Code), EAN (European Article Number), or an ISBN (International Standard Book Number) value.
  * image [Image](#image)
  * inferredEpid `string`: The ePID (eBay Product ID of a product from the eBay product catalog) for the item, which has been programmatically determined by eBay using the item's title, aspects, and other data. If the seller provided an ePID for the item, the seller's value is returned in the epid field. Note: This field is returned only for authorized Partners.
  * itemAffiliateWebUrl `string`: The URL of the View Item page of the item, which includes the affiliate tracking ID. This field is only returned if the eBay partner enables affiliate tracking for the item by including the X-EBAY-C-ENDUSERCTX request header in the method. Note: eBay Partner Network, in order to be commissioned for your sales, you must use this URL to forward your buyer to the ebay.com site.
  * itemEndDate `string`: The date and time up to which the items can be purchased. This value is returned in UTC format (yyyy-MM-ddThh:mm:ss.sssZ), which you can convert into the local time of the buyer. Note: This field is not returned for Good 'Til Cancelled (GTC) listings.
  * itemId `string`: The unique RESTful identifier of the item.
  * itemLocation [Address](#address)
  * itemWebUrl `string`: The URL of the View Item page of the item. This enables you to include a &quot;Report Item on eBay&quot; link that takes the buyer to the View Item page on eBay. From there they can report any issues regarding this item to eBay.
  * legacyItemId `string`: The unique identifier of the eBay listing that contains the item. This is the traditional/legacy ID that is often seen in the URL of the listing View Item page.
  * localizedAspects `array`: An array of containers that show the complete list of the aspect name/value pairs that describe the variation of the item.
    * items [TypedNameValue](#typednamevalue)
  * lotSize `integer`: The number of items in a lot. In other words, a lot size is the number of items that are being sold together. A lot is a set of two or more items included in a single listing that must be purchased together in a single order line item. All the items in the lot are the same but there can be multiple items in a single lot, such as the package of batteries shown in the example below. Item Lot Definition Lot Size A package of 24 AA batteries A box of 10 packages 10 A P235/75-15 Goodyear tire 4 tires 4 Fashion Jewelry Rings Package of 100 assorted rings 100 Note: Lots are not supported in all categories.
  * marketingPrice [MarketingPrice](#marketingprice)
  * material `string`: (Primary Item Aspect) Text describing what the item is made of. For example, silk. All the item aspects, including this aspect, are returned in the localizedAspects container.
  * minimumPriceToBid [ConvertedAmount](#convertedamount)
  * mpn `string`: The manufacturer's part number, which is a unique number that identifies a specific product. To identify the product, this is always used along with brand.
  * pattern `string`: (Primary Item Aspect) Text describing the pattern used on the item. For example, paisley. All the item aspects, including this aspect, are returned in the localizedAspects container.
  * paymentMethods `array`: The payment methods for the item, including the payment method types, brands, and instructions for the buyer.
    * items [PaymentMethod](#paymentmethod)
  * price [ConvertedAmount](#convertedamount)
  * priceDisplayCondition `string`: Indicates when in the buying flow the item's price can appear for minimum advertised price (MAP) items, which is the lowest price a retailer can advertise/show for this item. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/browse/types/gct:PriceDisplayConditionEnum'>eBay API documentation</a>
  * primaryItemGroup [ItemGroupSummary](#itemgroupsummary)
  * primaryProductReviewRating [ReviewRating](#reviewrating)
  * product [Product](#product)
  * productFicheWebUrl `string`: The URL of a page containing the manufacturer's specification of this item, which helps buyers make a purchasing decision. This information is available only for items that include the European energy efficiency rating (EEK) but is not available for all items with an EEK rating and is returned only if this information is available. The EEK rating of the item is returned in the energyEfficiencyClass field.
  * qualifiedPrograms `array`: An array of the qualified programs available for the item, such as EBAY_PLUS. eBay Plus is a premium account option for buyers, which provides benefits such as fast free domestic shipping and free returns on selected items. Top-Rated eBay sellers must opt in to eBay Plus to be able to offer the program on qualifying listings. Sellers must commit to next-day delivery of those items. Note: eBay Plus is available only to buyers in Germany, Austria, and Australia marketplaces.
    * items `string`
  * quantityLimitPerBuyer `integer`: The maximum number for a specific item that one buyer can purchase.
  * reservePriceMet `boolean`: This indicates if the reserve price of the item has been met. A reserve price is set by the seller and is the minimum amount the seller is willing to sell the item for. If the highest bid is not equal to or higher than the reserve price when the auction ends, the listing ends and the item is not sold. Note: This is returned only for auctions that have a reserve price.
  * returnTerms [ItemReturnTerms](#itemreturnterms)
  * seller [SellerDetail](#sellerdetail)
  * sellerItemRevision `string`: An identifier generated/incremented when a seller revises the item. There are two types of item revisions: Seller changes, such as changing the title eBay system changes, such as changing the quantity when an item is purchased This ID is changed only when the seller makes a change to the item. This means you cannot use this value to determine if the quantity has changed.
  * shipToLocations [ShipToLocations](#shiptolocations)
  * shippingOptions `array`: An array of shipping options containers that have the details about cost, carrier, etc. of one shipping option.
    * items [ShippingOption](#shippingoption)
  * shortDescription `string`: This text string is derived from the item condition and the item aspects (such as size, color, capacity, model, brand, etc.).
  * size `string`: (Primary Item Aspect) The size of the item. For example, '7' for a size 7 shoe. All the item aspects, including this aspect, are returned in the localizedAspects container.
  * sizeSystem `string`: (Primary Item Aspect) The sizing system of the country. All the item aspects, including this aspect, are returned in the localizedAspects container. Valid Values: AU (Australia), BR (Brazil), CN (China), DE (Germany), EU (European Union), FR (France), IT (Italy), JP (Japan), MX (Mexico), US (USA), UK (United Kingdom) Code so that your app gracefully handles any future changes to this list.
  * sizeType `string`: (Primary Item Aspect) Text describing a size group in which the item would be included, such as regular, petite, plus, big-and-tall or maternity. All the item aspects, including this aspect, are returned in the localizedAspects container.
  * subtitle `string`: A subtitle is optional and allows the seller to provide more information about the product, possibly including keywords that may assist with search results.
  * taxes `array`: The container for the tax information for the item.
    * items [Taxes](#taxes)
  * title `string`: The seller-created title of the item. Maximum Length: 80 characters
  * topRatedBuyingExperience `boolean`: This indicates if the item a top-rated plus item. There are three benefits of a top-rated plus item; a minimum 30-day money-back return policy, shipping the items in 1 business day with tracking provided, and the added comfort of knowing this item is from experienced sellers with the highest buyer ratings. See the Top Rated Plus Items and Becoming a Top Rated Seller and qualifying for Top Rated Plus help topics for more information.
  * uniqueBidderCount `integer`: This integer value indicates the number of different eBay users who have placed one or more bids on an auction item. This field is only applicable to auction items.
  * unitPrice [ConvertedAmount](#convertedamount)
  * unitPricingMeasure `string`: The designation, such as size, weight, volume, count, etc., that was used to specify the quantity of the item. This helps buyers compare prices. For example, the following tells the buyer that the item is 7.99 per 100 grams. &quot;unitPricingMeasure&quot;: &quot;100g&quot;, &quot;unitPrice&quot;: { &nbsp;&nbsp;&quot;value&quot;: &quot;7.99&quot;, &nbsp;&nbsp;&quot;currency&quot;: &quot;GBP&quot;
  * warnings `array`: An array of warning messages. These types of errors do not prevent the method from executing but should be checked.
    * items [Error](#error)

### ItemGroup
* ItemGroup `object`: The type that defines the fields for the item details.
  * commonDescriptions `array`: An array of containers for a description and the item IDs of all the items that have this exact description. Often the item variations within an item group all have the same description. Instead of repeating this description in the item details of each item, a description that is shared by at least one other item is returned in this container. If the description is unique, it is returned in the items.description field.
    * items [CommonDescriptions](#commondescriptions)
  * items `array`: An array of containers for all the item variation details, excluding the description.
    * items [Item](#item)
  * warnings `array`: An array of warning messages. These types of errors do not prevent the method from executing but should be checked.
    * items [Error](#error)

### ItemGroupSummary
* ItemGroupSummary `object`: The type that defines the fields for the details of each item in an item group. An item group is  an item that has various aspect differences, such as color, size, storage capacity, etc. When an item group is created, one of the item variations, such as the red shirt size L, is chosen as the "parent". All the other items in the group are the children, such as the blue shirt size L, red shirt size M, etc. <br /><br /><span class="tablenote"><b> Note: </b> This container is returned only if the <b> item_id</b> in the request is an item group (parent ID of an item with variations).</span>
  * itemGroupAdditionalImages `array`: An array of containers with the URLs for images that are in addition to the primary image of the item group. The primary image is returned in the itemGroupImage field.
    * items [Image](#image)
  * itemGroupHref `string`: The HATEOAS reference of the parent page of the item group. An item group is an item that has various aspect differences, such as color, size, storage capacity, etc.
  * itemGroupId `string`: The unique identifier for the item group. An item group is an item that has various aspect differences, such as color, size, storage capacity, etc.
  * itemGroupImage [Image](#image)
  * itemGroupTitle `string`: The title of the item that appears on the item group page. An item group is an item that has various aspect differences, such as color, size, storage capacity, etc.
  * itemGroupType `string`: An enumeration value that indicates the type of the item group. An item group is an item that has various aspect differences, such as color, size, storage capacity, etc. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/browse/types/gct:ItemGroupTypeEnum'>eBay API documentation</a>

### ItemLocationImpl
* ItemLocationImpl `object`: The type that defines the fields for the location of an item, such as information typically used for an address, including postal code, county, state/province, street address, city, and country (2-digit ISO code).
  * addressLine1 `string`: The first line of the street address.
  * addressLine2 `string`: The second line of the street address. This field may contain such values as an apartment or suite number.
  * city `string`: The city in which the item is located. Restriction: This field is populated in the search method response only when fieldgroups = EXTENDED.
  * country `string`: The two-letter ISO 3166 standard code that indicates the country in which the item is located. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/browse/types/ba:CountryCodeEnum'>eBay API documentation</a>
  * county `string`: The county in which the item is located.
  * postalCode `string`: The postal code (or zip code in US) where the item is located. Sellers set a postal code (or zip code in US) for items when they are listed. The postal code is used for calculating proximity searches. It is anonymized when returned in itemLocation.postalCode via the API.
  * stateOrProvince `string`: The state or province in which the item is located.

### ItemReturnTerms
* ItemReturnTerms `object`: The type that defines the fields for the seller's return policy.
  * extendedHolidayReturnsOffered `boolean`: This indicates if the seller has enabled the Extended Holiday Returns feature on the item. Extended Holiday Returns are only applicable during the US holiday season, and gives buyers extra time to return an item. This 'extra time' will typically extend beyond what is set through the returnPeriod value.
  * refundMethod `string`: An enumeration value that indicates how a buyer is refunded when an item is returned. Valid Values: MONEY_BACK or MERCHANDISE_CREDIT Code so that your app gracefully handles any future changes to this list. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/browse/types/gct:RefundMethodEnum'>eBay API documentation</a>
  * restockingFeePercentage `string`: This string field indicates the restocking fee percentage that the seller has set on the item. Sellers have the option of setting no restocking fee for an item, or they can set the percentage to 10, 15, or 20 percent. So, if the cost of the item was $100, and the restocking percentage was 20 percent, the buyer would be charged $20 to return that item, so instead of receiving a $100 refund, they would receive $80 due to the restocking fee.
  * returnInstructions `string`: Text written by the seller describing what the buyer needs to do in order to return the item.
  * returnMethod `string`: An enumeration value that indicates the alternative methods for a full refund when an item is returned. This field is returned if the seller offers the buyer an item replacement or exchange instead of a monetary refund. Valid Values: REPLACEMENT - Indicates that the buyer has the option of receiving money back for the returned item, or they can choose to have the seller replace the item with an identical item. EXCHANGE - Indicates that the buyer has the option of receiving money back for the returned item, or they can exchange the item for another similar item. Code so that your app gracefully handles any future changes to this list. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/browse/types/gct:ReturnMethodEnum'>eBay API documentation</a>
  * returnPeriod [TimeDuration](#timeduration)
  * returnShippingCostPayer `string`: This enumeration value indicates whether the buyer or seller is responsible for return shipping costs when an item is returned. Valid Values: SELLER - Indicates the seller will pay for the shipping costs to return the item. BUYER - Indicates the buyer will pay for the shipping costs to return the item. Code so that your app gracefully handles any future changes to this list. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/browse/types/gct:ReturnShippingCostPayerEnum'>eBay API documentation</a>
  * returnsAccepted `boolean`: Indicates whether the seller accepts returns for the item.

### ItemSummary
* ItemSummary `object`: The type that defines the fields for the details of a specific item.
  * additionalImages `array`: An array of containers with the URLs for the images that are in addition to the primary image. The primary image is returned in the image.imageUrl field.
    * items [Image](#image)
  * adultOnly `boolean`: This indicates if the item is for adults only. For more information about adult-only items on eBay, see Adult items policy for sellers and Adult-Only items on eBay for buyers.
  * availableCoupons `boolean`: This boolean attribute indicates if coupons are available for the item.
  * bidCount `integer`: This integer value indicates the total number of bids that have been placed for an auction item. This field is only returned for auction items.
  * buyingOptions `array`: A comma separated list of all the purchase options available for the item. Values Returned: FIXED_PRICE - Indicates the buyer can purchase the item for a set price using the Buy It Now button. AUCTION - Indicates the buyer can place a bid for the item. After the first bid is placed, this becomes a live auction item and is the only buying option for this item. BEST_OFFER - Items where the buyer can send the seller a price they're willing to pay for the item. The seller can accept, reject, or send a counter offer. For details about Best Offer, see Best Offer. Code so that your app gracefully handles any future changes to this list.
    * items `string`
  * categories `array`: This container returns the primary category ID of the item (as well as the secondary category if the item was listed in two categories).
    * items [Category](#category)
  * compatibilityMatch `string`: This indicates how well the item matches the compatibility_filter product attributes. Valid Values: EXACT or POSSIBLE Code so that your app gracefully handles any future changes to this list. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/browse/types/gct:CompatibilityMatchEnum'>eBay API documentation</a>
  * compatibilityProperties `array`: This container returns only the product attributes that are compatible with the item. These attributes were specified in the compatibility_filter in the request. This means that if you passed in 5 attributes and only 4 are compatible, only those 4 are returned. If none of the attributes are compatible, this container is not returned.
    * items [CompatibilityProperty](#compatibilityproperty)
  * condition `string`: The text describing the condition of the item, such as New or Used. For a list of condition names, see Item Condition IDs and Names. Code so that your app gracefully handles any future changes to this list. Note: In the US and Australian marketplaces, Condition ID 2000 now maps to an item condition of 'Certified Refurbished', but this item condition is only available for use for a select number of US and Australian sellers. For all other marketplaces besides the US and Australia, Condition ID 2000 still maps to 'Manufacturer Refurbished'.
  * conditionId `string`: The identifier of the condition of the item. For example, 1000 is the identifier for NEW. For a list of condition names and IDs, see Item Condition IDs and Names. Code so that your app gracefully handles any future changes to this list. Note: In the US and Australian marketplaces, Condition ID 2000 now maps to an item condition of 'Certified Refurbished', but this item condition is only available for use for a select number of US and Australian sellers. For all other marketplaces besides the US and Australia, Condition ID 2000 still maps to 'Manufacturer Refurbished'.
  * currentBidPrice [ConvertedAmount](#convertedamount)
  * distanceFromPickupLocation [TargetLocation](#targetlocation)
  * energyEfficiencyClass `string`: This indicates the European energy efficiency rating (EEK) of the item. Energy efficiency ratings apply to products listed by commercial vendors in electronics categories only. Currently, this field is only applicable for the Germany site, and is only returned if the seller specified the energy efficiency rating through item specifics at listing time. Rating values include A+++, A++, A+, A, B, C, D, E, F, and G.
  * epid `string`: An ePID is the eBay product identifier of a product from the eBay product catalog. This indicates the product in which the item belongs.
  * image [Image](#image)
  * itemAffiliateWebUrl `string`: The URL to the View Item page of the item, which includes the affiliate tracking ID. This field is only returned if the seller enables affiliate tracking for the item by including the X-EBAY-C-ENDUSERCTX request header in the method. Note: eBay Partner Network, in order to receive a commission for your sales, you must use this URL to forward your buyer to the ebay.com site.
  * itemGroupHref `string`: The HATEOAS reference of the parent page of the item group. An item group is an item that has various aspect differences, such as color, size, storage capacity, etc. Note: This field is returned only for item groups.
  * itemGroupType `string`: The indicates the item group type. An item group is an item that has various aspect differences, such as color, size, storage capacity, etc. Currently only the SELLER_DEFINED_VARIATIONS is supported and indicates this is an item group created by the seller. Note: This field is returned only for item groups. Code so that your app gracefully handles any future changes to this list.
  * itemHref `string`: The URI for the Browse API getItem method, which can be used to retrieve more details about items in the search results.
  * itemId `string`: The unique RESTful identifier of the item.
  * itemLocation [ItemLocationImpl](#itemlocationimpl)
  * itemWebUrl `string`: The URL to the View Item page of the item. This enables you to include a &quot;Report Item on eBay&quot; hyperlink that takes the buyer to the View Item page on eBay. From there they can report any issues regarding this item to eBay.
  * legacyItemId `string`: The unique identifier of the eBay listing that contains the item. This is the traditional/legacy ID that is often seen in the URL of the listing View Item page.
  * marketingPrice [MarketingPrice](#marketingprice)
  * pickupOptions `array`: This container returns the local pickup options available to the buyer. This container is only returned if the user is searching for local pickup items and set the local pickup filters in the method request.
    * items [PickupOptionSummary](#pickupoptionsummary)
  * price [ConvertedAmount](#convertedamount)
  * priceDisplayCondition `string`: Indicates when in the buying flow the item's price can appear for minimum advertised price (MAP) items, which is the lowest price a retailer can advertise/show for this item. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/browse/types/gct:PriceDisplayConditionEnum'>eBay API documentation</a>
  * qualifiedPrograms `array`: An array of the qualified programs available for the item, such as EBAY_PLUS. eBay Plus is a premium account option for buyers, which provides benefits such as fast free domestic shipping and free returns on selected items. Top-Rated eBay sellers must opt in to eBay Plus to be able to offer the program on qualifying listings. Sellers must commit to next-day delivery of those items. Note: eBay Plus is available only to buyers in Germany, Austria, and Australia marketplaces.
    * items `string`
  * seller [Seller](#seller)
  * shippingOptions `array`: This container returns the shipping options available to ship the item.
    * items [ShippingOptionSummary](#shippingoptionsummary)
  * shortDescription `string`: This text string is derived from the item condition and the item aspects (such as size, color, capacity, model, brand, etc.). Sometimes the title doesn't give enough information but the description is too big. Surfacing the shortDescription can often provide buyers with the additional information that could help them make a buying decision. For example: &quot; title&quot;: &quot;Petrel U42W FPV Drone RC Quadcopter w/HD Camera Live Video One Key Off / Landing&quot;, &quot;shortDescription&quot;: &quot;1 U42W Quadcopter. Syma X5SW-V3 Wifi FPV RC Drone Quadcopter 2.4Ghz 6-Axis Gyro with Headless Mode. Syma X20 Pocket Drone 2.4Ghz Mini RC Quadcopter Headless Mode Altitude Hold. One Key Take Off / Landing function: allow beginner to easy to fly the drone without any skill.&quot;, Restriction: This field is returned by the search method only when fieldgroups = EXTENDED.
  * thumbnailImages `array`: An array of thumbnail images for the item.
    * items [Image](#image)
  * title `string`: The seller-created title of the item. Maximum Length: 80 characters
  * unitPrice [ConvertedAmount](#convertedamount)
  * unitPricingMeasure `string`: The designation, such as size, weight, volume, count, etc., that was used to specify the quantity of the item. This helps buyers compare prices. For example, the following tells the buyer that the item is 7.99 per 100 grams. &quot;unitPricingMeasure&quot;: &quot;100g&quot;, &quot;unitPrice&quot;: { &nbsp;&nbsp;&quot;value&quot;: &quot;7.99&quot;, &nbsp;&nbsp;&quot;currency&quot;: &quot;GBP&quot;

### Items
* Items `object`: Container for a list of items.
  * items `array`: An arraylist of all the items.
    * items [CoreItem](#coreitem)
  * total `integer`: The total number of items retrieved.
  * warnings `array`: An array of warning messages. These types of errors do not prevent the method from executing but should be checked.
    * items [Error](#error)

### LegalAddress
* LegalAddress `object`: Type that defines the fields for the seller's address.
  * addressLine1 `string`: The first line of the street address.
  * addressLine2 `string`: The second line of the street address. This field is not always used, but can be used for 'Suite Number' or 'Apt Number'.
  * city `string`: The city of the address.
  * country `string`: The two-letter ISO 3166 standard of the country of the address. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/browse/types/ba:CountryCodeEnum'>eBay API documentation</a>
  * countryName `string`: The name of the country of the address.
  * county `string`: The name of the county of the address.
  * postalCode `string`: The postal code of the address.
  * stateOrProvince `string`: The state or province of the address.

### MarketingPrice
* MarketingPrice `object`: The type that defines the fields that describe a seller discount.
  * discountAmount [ConvertedAmount](#convertedamount)
  * discountPercentage `string`: This field expresses the percentage of the seller discount based on the value in the originalPrice container.
  * originalPrice [ConvertedAmount](#convertedamount)
  * priceTreatment `string`: Indicates the pricing treatment (discount) that was applied to the price of the item. Note: The pricing treatment affects the way and where the discounted price can be displayed. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/browse/types/gct:PriceTreatmentEnum'>eBay API documentation</a>

### PaymentMethod
* PaymentMethod `object`
  * paymentInstructions `array`: The payment instructions for the buyer, such as cash in person or contact seller.
    * items `string`:  For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/browse/types/gct:PaymentInstructionEnum'>eBay API documentation</a>
  * paymentMethodBrands `array`: The payment method brands, including the payment method brand type and logo image.
    * items [PaymentMethodBrand](#paymentmethodbrand)
  * paymentMethodType `string`: The payment method type, such as credit card or cash. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/browse/types/gct:PaymentMethodTypeEnum'>eBay API documentation</a>
  * sellerInstructions `array`: The seller instructions to the buyer, such as accepts credit cards or see description.
    * items `string`:  For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/browse/types/gct:SellerInstructionEnum'>eBay API documentation</a>

### PaymentMethodBrand
* PaymentMethodBrand `object`
  * logoImage [Image](#image)
  * paymentMethodBrandType `string`: The payment method brand, such as Visa or PayPal. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/browse/types/gct:PaymentMethodBrandEnum'>eBay API documentation</a>

### PickupOptionSummary
* PickupOptionSummary `object`: The type that defines the fields for the local pickup options that are available for the item. It is used by the <b>  pickupOptions</b>  container.
  * pickupLocationType `string`: This container returns the local pickup options available to the buyer. Possible values are ARRANGED_LOCATION and STORE.

### Price
* Price `object`: The type that defines the fields for the monetary value and currency of the price of the item.
  * convertedFromCurrency `string`: The three-letter ISO 4217 code representing the currency of the amount in the convertedFromValue field. This value is the pre-conversion currency. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/browse/types/ba:CurrencyCodeEnum'>eBay API documentation</a>
  * convertedFromValue `string`: The monetary amount before any conversion is performed, in the currency specified by the convertedFromCurrency field. This value is the pre-conversion amount. The value field contains the converted amount of this value, in the currency specified by the currency field.
  * currency `string`: The three-letter ISO 4217 code representing the currency of the amount in the value field. If currency conversion/localization was performed, this is the post-conversion currency of the amount in the value field. Default: The currency of the user's country. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/browse/types/ba:CurrencyCodeEnum'>eBay API documentation</a>
  * value `string`: The amount of the currency specified in the currency field. The value of currency defaults to the standard currency used by the country of the eBay site offering the item. If currency conversion/localization was performed, this is the post-conversion amount. Default: The currency of the user's country.

### Product
* Product `object`: The type that defines the fields for the product information of the item.
  * additionalImages `array`: An array of containers with the URLs for the product images that are in addition to the primary image.
    * items [Image](#image)
  * additionalProductIdentities `array`: An array of product identifiers associated with the item. This container is returned if the seller has associated the eBay Product Identifier (ePID) with the item and in the request fieldgroups is set to PRODUCT.
    * items [AdditionalProductIdentity](#additionalproductidentity)
  * aspectGroups `array`: An array of containers for the product aspects. Each group contains the aspect group name and the aspect name/value pairs.
    * items [AspectGroup](#aspectgroup)
  * brand `string`: The brand associated with product. To identify the product, this is always used along with MPN (manufacturer part number).
  * description `string`: The rich description of an eBay product, which might contain HTML.
  * gtins `array`: An array of all the possible GTINs values associated with the product. A GTIN is a unique Global Trade Item number of the item as defined by https://www.gtin.info. This can be a UPC (Universal Product Code), EAN (European Article Number), or an ISBN (International Standard Book Number) value.
    * items `string`
  * image [Image](#image)
  * mpns `array`: An array of all possible MPN values associated with the product. A MPNs is manufacturer part number of the product. To identify the product, this is always used along with brand.
    * items `string`
  * title `string`: The title of the product.

### ProductIdentity
* ProductIdentity `object`: The type that defines the fields for the product identifier type/value pairs of product associated with an item.
  * identifierType `string`: The type of product identifier, such as UPC and EAN.
  * identifierValue `string`: The product identifier value.

### RatingHistogram
* RatingHistogram `object`: The type that defines the fields for product ratings. Only products that are in the eBay product catalog can be reviewed and rated.
  * count `integer`: The total number of user ratings that the product has received.
  * rating `string`: This is the average rating for the product. As part of a product review, users rate the product. Products are rated from one star (terrible) to five stars (excellent), with each star having a corresponding point value - one star gets 1 point, two stars get 2 points, and so on. If a product had one four-star rating and one five-star rating, its average rating would be 4.5, and this is the value that would appear in this field.

### Refinement
* Refinement `object`: This type defines the fields for the various refinements of an item. You can use the information in this container to create histograms, which help shoppers choose exactly what they want.
  * aspectDistributions `array`: An array of containers for the all the aspect refinements.
    * items [AspectDistribution](#aspectdistribution)
  * buyingOptionDistributions `array`: An array of containers for the all the buying option refinements.
    * items [BuyingOptionDistribution](#buyingoptiondistribution)
  * categoryDistributions `array`: An array of containers for the all the category refinements.
    * items [CategoryDistribution](#categorydistribution)
  * conditionDistributions `array`: An array of containers for the all the condition refinements.
    * items [ConditionDistribution](#conditiondistribution)
  * dominantCategoryId `string`: The identifier of the category that most of the items are part of.

### Region
* Region `object`: This type is used to provide region details for a tax jurisdiction.
  * regionName `string`: A localized text string that indicates the name of the region. Taxes are generally charged at the state/province level or at the country level in the case of VAT tax.
  * regionType `string`: An enumeration value that indicates the type of region for the tax jurisdiction. Valid Values: STATE_OR_PROVINCE - Indicates the region is a state or province within a country, such as California or New York in the US, or Ontario or Alberta in Canada. COUNTRY - Indicates the region is a single country. Code so that your app gracefully handles any future changes to this list. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/browse/types/ba:RegionTypeEnum'>eBay API documentation</a>

### RemoteShopcartResponse
* RemoteShopcartResponse `object`: The type that defines the fields and containers for the member's eBay cart information.
  * cartItems `array`: An array of the items in the member's eBay cart.
    * items [CartItem](#cartitem)
  * cartSubtotal [Amount](#amount)
  * cartWebUrl `string`: The URL of the member's eBay cart.
  * unavailableCartItems `array`: An array of items in the cart that are unavailable. This can be for a variety of reasons such as, when the listing has ended or the item is out of stock. Because a cart never expires, these items will remain in the cart until they are removed.
    * items [CartItem](#cartitem)
  * warnings `array`: An array of warning messages. These type of errors do not prevent the call from executing but should be checked.
    * items [Error](#error)

### RemoveCartItemInput
* RemoveCartItemInput `object`: The type that defines the fields for the <b>removeItem</b> request.
  * cartItemId `string`: The identifier of the item in the cart to be removed. This ID is generated when the item was added to the cart.

### ReviewRating
* ReviewRating `object`: The type that defines the fields for the rating of a product review.
  * averageRating `string`: The average rating given to a product based on customer reviews.
  * ratingHistograms `array`: An array of containers for the product rating histograms that shows the review counts and the product rating.
    * items [RatingHistogram](#ratinghistogram)
  * reviewCount `integer`: The total number of reviews for the item.

### SearchByImageRequest
* SearchByImageRequest `object`: The type that defines the fields for the image information.
  * image `string`: The Base64 string of the image.

### SearchPagedCollection
* SearchPagedCollection `object`: The type that defines the fields for a paginated result set. The response consists of 0 or more sequenced <em> pages</em> where each page has 0 or more items. 
  * autoCorrections [AutoCorrections](#autocorrections)
  * href `string`: The URI of the current page of results. The following example of the search method returns items 1 thru 5 from the list of items found. https://api.ebay.com/buy/v1/item_summary/search?q=shirt&amp;limit=5&amp;offset=0.
  * itemSummaries `array`: An array of the items on this page. The items are sorted according to the sorting method specified in the request.
    * items [ItemSummary](#itemsummary)
  * limit `integer`: The value of the limit parameter submitted in the request, which is the maximum number of items to return on a page, from the result set. A result set is the complete set of items returned by the method.
  * next `string`: The URI for the next page of results. This value is returned if there is an additional page of results to return from the result set. The following example of the search method returns items 5 thru 10 from the list of items found. https://api.ebay.com/buy/v1/item_summary/search?query=t-shirts&amp;limit=5&amp;offset=10
  * offset `integer`: This value indicates the offset used for current page of items being returned. Assume the initial request used an offset of 0 and a limit of 3. Then in the first page of results, this value would be 0, and items 1-3 are returned. For the second page, this value is 3 and so on.
  * prev `string`: The URI for the previous page of results. This is returned if there is a previous page of results from the result set. The following example of the search method returns items 1 thru 5 from the list of items found, which would be the first set of items returned. https://api.ebay.com/buy/v1/item_summary/search?query=t-shirts&amp;limit=5&amp;offset=0
  * refinement [Refinement](#refinement)
  * total `integer`: The total number of items that match the input criteria.
  * warnings `array`: The container with all the warnings for the request.
    * items [Error](#error)

### Seller
* Seller `object`: The type that defines the fields for basic information about the seller of the item returned by the <b> item_summary</b> resource.
  * feedbackPercentage `string`: The percentage of the total positive feedback.
  * feedbackScore `integer`: The feedback score of the seller. This value is based on the ratings from eBay members that bought items from this seller.
  * sellerAccountType `string`: Indicates if the seller is a business or an individual. This is determined when the seller registers with eBay. If they register for a business account, this value will be BUSINESS. If they register for a private account, this value will be INDIVIDUAL. This designation is required by the tax laws in some countries. This field is returned only on the following sites. EBAY_AT, EBAY_BE, EBAY_CH, EBAY_DE, EBAY_ES, EBAY_FR, EBAY_GB, EBAY_IE, EBAY_IT, EBAY_PL Valid Values: BUSINESS or INDIVIDUAL Code so that your app gracefully handles any future changes to this list.
  * username `string`: The user name created by the seller for use on eBay.

### SellerDetail
* SellerDetail `object`: The type that defines the fields for basic and detailed information about the seller of the item returned by the <b> item</b> resource.
  * feedbackPercentage `string`: The percentage of the total positive feedback.
  * feedbackScore `integer`: The feedback score of the seller. This value is based on the ratings from eBay members that bought items from this seller.
  * sellerAccountType `string`: This indicates if the seller is a business or an individual. This is determined when the seller registers with eBay. If they register for a business account, this value will be BUSINESS. If they register for a private account, this value will be INDIVIDUAL. This designation is required by the tax laws in the following countries: This field is returned only on the following sites. EBAY_AT, EBAY_BE, EBAY_CH, EBAY_DE, EBAY_ES, EBAY_FR, EBAY_GB, EBAY_IE, EBAY_IT, EBAY_PL Valid Values: BUSINESS or INDIVIDUAL Code so that your app gracefully handles any future changes to this list.
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
  * vatDetails `array`: An array of the seller's VAT (value added tax) IDs and the issuing country. VAT is a tax added by some European countries.
    * items [VatDetail](#vatdetail)

### ShipToLocation
* ShipToLocation `object`: The type that defines the fields for the country and postal code of where an item is to be shipped.
  * country `string`: The two-letter ISO 3166 standard of the country for where the item is to be shipped. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/browse/types/ba:CountryCodeEnum'>eBay API documentation</a>
  * postalCode `string`: The zip code (postal code) for where the item is to be shipped.

### ShipToLocations
* ShipToLocations `object`: The type that defines the fields that include and exclude geographic regions affecting where the item can be shipped. The seller defines these regions when listing the item.
  * regionExcluded `array`: An array of containers that express the large geographical regions, countries, state/provinces, or special locations within a country where the seller is not willing to ship to.
    * items [ShipToRegion](#shiptoregion)
  * regionIncluded `array`: An array of containers that express the large geographical regions, countries, or state/provinces within a country where the seller is willing to ship to. Prospective buyers must look at the shipping regions under this container, as well as the shipping regions that are under the regionExcluded to see where the seller is willing to ship items. Sellers can specify that they ship 'Worldwide', but then add several large geographical regions (e.g. Asia, Oceania, Middle East) to the exclusion list, or sellers can specify that they ship to Europe and Africa, but then add several individual countries to the exclusion list.
    * items [ShipToRegion](#shiptoregion)

### ShipToRegion
* ShipToRegion `object`: This type is used provide details about included and excluded shipping regions.
  * regionId `string`: The unique identifier of the shipping region. The value returned here is dependent on the corresponding regionType value. The regionId value for a region does not vary based on the eBay marketplace. However, the corresponding regionName value for a region is a localized, text-based description of the shipping region. If the regionType value is WORLDWIDE, the regionId value will also be WORLDWIDE. If the regionType value is WORLD_REGION, the regionId value will be one of the following: AFRICA, AMERICAS, ASIA, AUSTRALIA, CENTRAL_AMERICA_AND_CARIBBEAN, EUROPE, EUROPEAN_UNION, GREATER_CHINA, MIDDLE_EAST, NORTH_AMERICA, OCEANIA, SOUTH_AMERICA, SOUTHEAST_ASIA or CHANNEL_ISLANDS. If the regionType value is COUNTRY, the regionId value will be the two-letter code for the country, as defined in the ISO 3166 standard. If the regionType value is STATE_OR_PROVINCE, the regionId value will either be the two-letter code for US states and DC (as defined on this Social Security Administration page), or the two-letter code for Canadian provinces (as defined by this Canada Post page). If the regionType value is COUNTRY_REGION, the regionId value may be one of following: _AH (if a seller is not willing to ship to Alaska/Hawaii), _PR (if the seller is not willing to ship to US Protectorates), _AP (if seller is not willing to ship to a US Army or Fleet Post Office), and PO_BOX (if the seller is not willing to ship to a Post Office Box).
  * regionName `string`: A localized text string that indicates the name of the shipping region. The value returned here is dependent on the corresponding regionType value. If the regionType value is WORLDWIDE, the regionName value will show Worldwide. If the regionType value is WORLD_REGION, the regionName value will be a localized text string for one of the following large geographical regions: Africa, Americas, Asia, Australia, Central America and Caribbean, Europe, European Union, Greater China, Middle East, North America, Oceania, South America, Southeast Asia, or Channel Islands. If the regionType value is COUNTRY, the regionName value will be a localized text string for any country in the world. If the regionType value is STATE_OR_PROVINCE, the regionName value will be a localized text string for any US state or Canadian province. If the regionType value is COUNTRY_REGION, the regionName value may be a localized version of one of the following: Alaska/Hawaii, US Protectorates, APO/FPO (Army or Fleet Post Office), or PO BOX.
  * regionType `string`: An enumeration value that indicates the level or type of shipping region. Valid Values: COUNTRY_REGION - Indicates the region is a domestic region or special location within a country. STATE_OR_PROVINCE - Indicates the region is a state or province within a country, such as California or New York in the US, or Ontario or Alberta in Canada. COUNTRY - Indicates the region is a single country. WORLD_REGION - Indicates the region is a world region, such as Africa, the Middle East, or Southeast Asia. WORLDWIDE - Indicates the region is the entire world. This value is only applicable for included shiping regions, and not excluded shipping regions. For more detail on the actual regionName/regionId values that will be returned based on the regionType value, see the regionId and/or regionName field descriptions. Code so that your app gracefully handles any future changes to this list. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/browse/types/ba:RegionTypeEnum'>eBay API documentation</a>

### ShippingOption
* ShippingOption `object`: The type that defines the fields for the details of a shipping provider.
  * additionalShippingCostPerUnit [ConvertedAmount](#convertedamount)
  * cutOffDateUsedForEstimate `string`: The deadline date that the item must be purchased by in order to be received by the buyer within the delivery window ( maxEstimatedDeliveryDate and minEstimatedDeliveryDate fields). This field is returned only for items that are eligible for 'Same Day Handling'. For these items, the value of this field is what is displayed in the Delivery line on the View Item page. This value is returned in UTC format (yyyy-MM-ddThh:mm:ss.sssZ), which you can convert into the local time of the buyer.
  * fulfilledThrough `string`: If the item is being shipped by eBay's Global Shipping Program, this field returns GLOBAL_SHIPPING. Otherwise this field is null. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/browse/types/gct:FulfilledThroughEnum'>eBay API documentation</a>
  * guaranteedDelivery `boolean`: Indicates if the seller has committed to shipping the item with eBay Guaranteed Delivery. With eBay Guaranteed Delivery, the seller is committed to getting the line item to the buyer within 4 business days or less. See the Buying items with eBay Guaranteed Delivery help topic for more details about eBay Guaranteed Delivery.
  * importCharges [ConvertedAmount](#convertedamount)
  * maxEstimatedDeliveryDate `string`: The end date of the delivery window (latest projected delivery date). This value is returned in UTC format (yyyy-MM-ddThh:mm:ss.sssZ), which you can convert into the local time of the buyer. Note: For the best accuracy, always include the location of where the item is be shipped in the contextualLocation values of the X-EBAY-C-ENDUSERCTX request header.
  * minEstimatedDeliveryDate `string`: The start date of the delivery window (earliest projected delivery date). This value is returned in UTC format (yyyy-MM-ddThh:mm:ss.sssZ), which you can convert into the local time of the buyer. Note: For the best accuracy, always include the location of where the item is be shipped in the contextualLocation values of the X-EBAY-C-ENDUSERCTX request header.
  * quantityUsedForEstimate `integer`: The number of items used when calculating the estimation information.
  * shipToLocationUsedForEstimate [ShipToLocation](#shiptolocation)
  * shippingCarrierCode `string`: The name of the shipping provider, such as FedEx, or USPS.
  * shippingCost [ConvertedAmount](#convertedamount)
  * shippingCostType `string`: Indicates the class of the shipping cost. Valid Values: FIXED or CALCULATED Code so that your app gracefully handles any future changes to this list.
  * shippingServiceCode `string`: The type of shipping service. For example, USPS First Class.
  * trademarkSymbol `string`: Any trademark symbol, such as &trade; or &reg;, that needs to be shown in superscript next to the shipping service name.
  * type `string`: The type of a shipping option, such as EXPEDITED, ONE_DAY, STANDARD, ECONOMY, PICKUP, etc.

### ShippingOptionSummary
* ShippingOptionSummary `object`: The type that defines the fields for the shipping information.
  * guaranteedDelivery `boolean`: Indicates if the seller has committed to shipping the item with eBay Guaranteed Delivery. With eBay Guaranteed Delivery, the seller is committed to getting the line item to the buyer within 4 business days or less. See the Buying items with eBay Guaranteed Delivery help topic for more details about eBay Guaranteed Delivery.
  * maxEstimatedDeliveryDate `string`: The end date of the delivery window (latest projected delivery date). This value is returned in UTC format (yyyy-MM-ddThh:mm:ss.sssZ), which you can convert into the local time of the buyer. Note: For the best accuracy, always include the contextualLocation values in the X-EBAY-C-ENDUSERCTX request header.
  * minEstimatedDeliveryDate `string`: The start date of the delivery window (earliest projected delivery date). This value is returned in UTC format (yyyy-MM-ddThh:mm:ss.sssZ), which you can convert into the local time of the buyer. Note: For the best accuracy, always include the contextualLocation values in the X-EBAY-C-ENDUSERCTX request header.
  * shippingCost [ConvertedAmount](#convertedamount)
  * shippingCostType `string`: Indicates the type of shipping used to ship the item. Possible values are FIXED (flat-rate shipping) and CALCULATED (shipping cost calculated based on item and buyer location).

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
  * ebayCollectAndRemitTax `boolean`: This field is only returned if true, and indicates that eBay will collect tax (sales tax, Goods and Services tax, or VAT) for at least one line item in the order, and remit the tax to the taxing authority of the buyer's residence.
  * includedInPrice `boolean`: This indicates if tax was applied for the cost of the item.
  * shippingAndHandlingTaxed `boolean`: This indicates if tax is applied for the shipping cost.
  * taxJurisdiction [TaxJurisdiction](#taxjurisdiction)
  * taxPercentage `string`: The percentage of tax.
  * taxType `string`: This field indicates the type of tax that may be collected for the item. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/browse/types/gct:TaxType'>eBay API documentation</a>

### TimeDuration
* TimeDuration `object`: The type that defines the fields for a period of time in the time-measurement units supplied.
  * unit `string`: An enumeration value that indicates the units (such as hours) of the time span. The enumeration value in this field defines the period of time being used to measure the duration. Valid Values: YEAR, MONTH, DAY, HOUR, CALENDAR_DAY, BUSINESS_DAY, MINUTE, SECOND, or MILLISECOND Code so that your app gracefully handles any future changes to this list. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/browse/types/ba:TimeDurationUnitEnum'>eBay API documentation</a>
  * value `integer`: Retrieves the duration of the time span (no units).The value in this field indicates the number of years, months, days, hours, or minutes in the defined period.

### TypedNameValue
* TypedNameValue `object`: The type that defines the fields for the name/value pairs for item aspects.
  * name `string`: The text representing the name of the aspect for the name/value pair, such as Color.
  * type `string`: This indicates if the value being returned is a string or an array of values. Valid Values: STRING - Indicates the value returned is a string. STRING_ARRAY - Indicates the value returned is an array of strings. Code so that your app gracefully handles any future changes to this list. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/browse/types/gct:ValueTypeEnum'>eBay API documentation</a>
  * value `string`: The value of the aspect for the name/value pair, such as Red.

### UpdateCartItemInput
* UpdateCartItemInput `object`: The type that defines the fields for the <b>updateQuantity</b> request.
  * cartItemId `string`: The identifier of the item in the cart to be updated. This ID is generated when the item was added to the cart.
  * quantity `integer`: The new quantity for the item that is being updated.

### VatDetail
* VatDetail `object`: The type the defines the fields for the VAT (value add tax) information.
  * issuingCountry `string`: The two-letter ISO 3166 standard of the country issuing the seller's VAT (value added tax) ID. VAT is a tax added by some European countries. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/browse/types/ba:CountryCodeEnum'>eBay API documentation</a>
  * vatId `string`: The seller's VAT (value added tax) ID. VAT is a tax added by some European countries.


