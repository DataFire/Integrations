# @datafire/ebay_buy_deal

Client library for Deal API

## Installation and Usage
```bash
npm install --save @datafire/ebay_buy_deal
```
```js
let ebay_buy_deal = require('@datafire/ebay_buy_deal').create({
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

This API allows third-party developers to search for and retrieve details about eBay deals and events, as well as the items associated with those deals and events.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
ebay_buy_deal.oauthCallback({
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
ebay_buy_deal.oauthRefresh(null, context)
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

### getDealItems
This method retrieves a paginated set of deal items. The result set contains all deal items associated with the specified search criteria and marketplace ID. Request headers This method uses the X-EBAY-C-ENDUSERCTX request header to support revenue sharing for eBay Partner Networks and to improve the accuracy of shipping and delivery time estimations. For details see, Request headers in the Buying Integration Guide. Restrictions This method can return a maximum of 10,000 items. For a list of supported sites and other restrictions, see API Restrictions. eBay Partner Network: In order to receive a commission for your sales, you must use the URL returned in the itemAffiliateWebUrl field to forward your buyer to the ebay.com site.


```js
ebay_buy_deal.getDealItems({
  "X-EBAY-C-MARKETPLACE-ID": ""
}, context)
```

#### Input
* input `object`
  * category_ids `string`: The unique identifier of the eBay category for the search.
  * commissionable `string`: A filter for commissionable deals. Restriction: This filter is currently only supported for the US marketplace.
  * delivery_country `string`: A filter for items that can be shipped to the specified country.
  * limit `string`: The maximum number of items, from the current result set, returned on a single page.
  * offset `string`: The number of items that will be skipped in the result set. This is used with the limit field to control the pagination of the output. For example, if the offset is set to 0 and the limit is set to 10, the method will retrieve items 1 through 10 from the list of items returned. If the offset is set to 10 and the limit is set to 10, the method will retrieve items 11 through 20 from the list of items returned. Default: 0
  * X-EBAY-C-MARKETPLACE-ID **required** `string`: A header used to specify the eBay marketplace ID.

#### Output
* output [DealItemSearchResponse](#dealitemsearchresponse)

### getEvents
This method returns paginated results containing all eBay events for the specified marketplace. Request headers This method uses the X-EBAY-C-ENDUSERCTX request header to support revenue sharing for eBay Partner Networks and to improve the accuracy of shipping and delivery time estimations. For details see, Request headers in the Buying Integration Guide. Restrictions This method can return a maximum of 10,000 items. For a list of supported sites and other restrictions, see API Restrictions. eBay Partner Network: In order to receive a commission for your sales, you must use the URL returned in the itemAffiliateWebUrl field to forward your buyer to the ebay.com site.


```js
ebay_buy_deal.getEvents({
  "X-EBAY-C-MARKETPLACE-ID": ""
}, context)
```

#### Input
* input `object`
  * limit `string`: The maximum number of items, from the current result set, returned on a single page. Default: 20 Maximum Value: 100
  * offset `string`: The number of items that will be skipped in the result set. This is used with the limit field to control the pagination of the output. For example, if the offset is set to 0 and the limit is set to 10, the method will retrieve items 1 through 10 from the list of items returned. If the offset is set to 10 and the limit is set to 10, the method will retrieve items 11 through 20 from the list of items returned. Default: 0
  * X-EBAY-C-MARKETPLACE-ID **required** `string`: A header used to specify the eBay marketplace ID.

#### Output
* output [EventSearchResponse](#eventsearchresponse)

### getEvent
This method retrieves the details for an eBay event. The result set contains detailed information associated with the specified event ID, such as applicable coupons, start and end dates, and event terms. Request headers This method uses the X-EBAY-C-ENDUSERCTX request header to support revenue sharing for eBay Partner Networks and to improve the accuracy of shipping and delivery time estimations. For details see, Request headers in the Buying Integration Guide. Restrictions This method can return a maximum of 10,000 items. For a list of supported sites and other restrictions, see API Restrictions. eBay Partner Network: In order to receive a commission for your sales, you must use the URL returned in the itemAffiliateWebUrl field to forward your buyer to the ebay.com site.


```js
ebay_buy_deal.getEvent({
  "X-EBAY-C-MARKETPLACE-ID": "",
  "event_id": ""
}, context)
```

#### Input
* input `object`
  * X-EBAY-C-MARKETPLACE-ID **required** `string`: A header used to specify the eBay marketplace ID.
  * event_id **required** `string`: The unique identifier for the eBay event.

#### Output
* output [Event](#event)

### getEventItems
This method returns a paginated set of event items. The result set contains all event items associated with the specified search criteria and marketplace ID. Request headers This method uses the X-EBAY-C-ENDUSERCTX request header to support revenue sharing for eBay Partner Networks and to improve the accuracy of shipping and delivery time estimations. For details see, Request headers in the Buying Integration Guide. Restrictions This method can return a maximum of 10,000 items. For a list of supported sites and other restrictions, see API Restrictions. eBay Partner Network: In order to receive a commission for your sales, you must use the URL returned in the itemAffiliateWebUrl field to forward your buyer to the ebay.com site.


```js
ebay_buy_deal.getEventItems({
  "event_ids": "",
  "X-EBAY-C-MARKETPLACE-ID": ""
}, context)
```

#### Input
* input `object`
  * category_ids `string`: The unique identifier of the eBay category for the search. Maximum Value: 1
  * delivery_country `string`: A filter for items that can be shipped to the specified country.
  * event_ids **required** `string`: The unique identifiers for the eBay events. Maximum Value: 1
  * limit `string`: The maximum number of items, from the current result set, returned on a single page. Default: 20
  * offset `string`: The number of items that will be skipped in the result set. This is used with the limit field to control the pagination of the output. For example, if the offset is set to 0 and the limit is set to 10, the method will retrieve items 1 through 10 from the list of items returned. If the offset is set to 10 and the limit is set to 10, the method will retrieve items 11 through 20 from the list of items returned. Default: 0
  * X-EBAY-C-MARKETPLACE-ID **required** `string`: A header used to specify the eBay marketplace ID.

#### Output
* output [EventItemSearchResponse](#eventitemsearchresponse)



## Definitions

### Amount
* Amount `object`: The currency and value of the item.
  * currency `string`: The three-letter ISO 4217 code representing the currency of the amount in the value field. Default: The currency of the authenticated user's country. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/deal/types/bas:CurrencyCodeEnum'>eBay API documentation</a>
  * value `string`: The monetary value, in the currency specified by the currency field.

### Coupon
* Coupon `object`: The details for the coupon available for the item.
  * redemptionCode `string`: The coupon code.
  * terms [Terms](#terms)

### DealItem
* DealItem `object`: The detailed data returned for the deal item.
  * additionalImages `array`: The additional images for the deal item.
    * items [Image](#image)
  * categoryAncestorIds `array`: The IDs of the ancestors for the primary category.
    * items `string`
  * categoryId `string`: The ID of the leaf category for the deal item. A leaf category is the lowest level in a category and has no children.
  * commissionable `boolean`: A boolean value specifying whether the listing has commission.
  * dealAffiliateWebUrl `string`: The deal associated with the item with affiliate attribution.
  * dealEndDate `string`: The date after which the deal ends.
  * dealStartDate `string`: The date on which the deal starts.
  * dealWebUrl `string`: The web URL for the deal associated with the item.
  * energyEfficiencyClass `string`: A string value specifying the Energy Efficiency class.
  * image [Image](#image)
  * itemAffiliateWebUrl `string`: The item web URL with affiliate attribution.
  * itemGroupId `string`: The unique identifier for the deal item group. This is the parent item ID for the seller-defined variations. Note: This field is returned for multiple-SKU items.
  * itemGroupType `string`: An enumeration value that indicates the type of item group. An item group contains items that have various aspect differences, such as color, size, or storage capacity. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/deal/types/api:ItemGroupTypeEnum'>eBay API documentation</a>
  * itemId `string`: The unique identifier for the deal item. Note: This field is only returned for single-SKU items.
  * itemWebUrl `string`: The web URL for the deal item.
  * legacyItemId `string`: The legacy item ID associated with the deal item.
  * marketingPrice [MarketingPrice](#marketingprice)
  * price [Amount](#amount)
  * qualifiedPrograms `array`: A list of programs applicable to the item.
    * items `string`:  For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/deal/types/api:ProgramEnum'>eBay API documentation</a>
  * shippingOptions `array`: The cost required to ship the deal item.
    * items [ShippingOption](#shippingoption)
  * title `string`: The title of the deal item.
  * unitPrice [Amount](#amount)
  * unitPricingMeasure `string`: The designation used to specify the quantity of the deal item, such as size, weight, volume, and count. This helps buyers compare prices. For example, the following tells the buyer that the item is 7.99 per 100 grams. &quot;unitPricingMeasure&quot;: &quot;100g&quot;, &quot;unitPrice&quot;: { &nbsp;&nbsp;&quot;value&quot;: &quot;7.99&quot;, &nbsp;&nbsp;&quot;currency&quot;: &quot;GBP&quot;

### DealItemSearchResponse
* DealItemSearchResponse `object`: The result set for the deal item search.
  * dealItems `array`: A list of deal items that match the search criteria.
    * items [DealItem](#dealitem)
  * href `string`: The relative path to the current set of results.
  * limit `integer`: The maximum number of items, from the current result set, returned on a single page. Default: 20
  * next `string`: The relative path to the next set of results.
  * offset `integer`: The number of items that will be skipped in the result set. This is used with the limit field to control the pagination of the output. For example, if the offset is set to 0 and the limit is set to 10, the method will retrieve items 1 through 10 from the list of items returned. If the offset is set to 10 and the limit is set to 10, the method will retrieve items 11 through 20 from the list of items returned. Default: 0
  * prev `string`: The relative path to the previous set of results.
  * total `integer`: The total number of matches for the search criteria.

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

### Event
* Event `object`: The result set for the event search.
  * applicableCoupons `array`: A list of coupons associated with the event.
    * items [Coupon](#coupon)
  * description `string`: The event description.
  * endDate `string`: The end date for the event.
  * eventAffiliateWebUrl `string`: The URL of the View Event page for the event, which includes the affiliate tracking ID.
  * eventId `string`: The unique identifier for the event.
  * eventWebUrl `string`: The web URL for the event.
  * images `array`: The images for the event.
    * items [Image](#image)
  * startDate `string`: The start date for the event.
  * terms [Terms](#terms)
  * title `string`: The title of the event.

### EventItem
* EventItem `object`: The detailed data returned for the event item.
  * additionalImages `array`: The additional images for the event item.
    * items [Image](#image)
  * categoryAncestorIds `array`: The IDs of the ancestors for the primary category.
    * items `string`
  * categoryId `string`: The ID of the leaf category for the event item. A leaf category is the lowest level in a category and has no children.
  * energyEfficiencyClass `string`: A string value specifying the Energy Efficiency class.
  * eventId `string`: The unique event identifier associated with the item.
  * image [Image](#image)
  * itemAffiliateWebUrl `string`: The item web URL with affiliate attribution.
  * itemGroupId `string`: The unique identifier for the event item group. This is the parent item ID for the seller-defined variations. Note: This field is returned for multiple-SKU items.
  * itemGroupType `string`: An enumeration value that indicates the type of item group. An item group contains items that have various aspect differences, such as color, size, or storage capacity. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/deal/types/api:ItemGroupTypeEnum'>eBay API documentation</a>
  * itemId `string`: The unique identifier for the event item. Note: This field is only returned for single-SKU items.
  * itemWebUrl `string`: The web URL for the event item.
  * legacyItemId `string`: The legacy item ID associated with the event item.
  * marketingPrice [MarketingPrice](#marketingprice)
  * price [Amount](#amount)
  * qualifiedPrograms `array`: A list of programs applicable to the event item.
    * items `string`:  For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/deal/types/api:ProgramEnum'>eBay API documentation</a>
  * shippingOptions `array`: The cost required to ship the event item.
    * items [ShippingOption](#shippingoption)
  * title `string`: The title of the event item.
  * unitPrice [Amount](#amount)
  * unitPricingMeasure `string`: The designation used to specify the quantity of the event item, such as size, weight, volume, and count. This helps buyers compare prices. For example, the following tells the buyer that the item is 7.99 per 100 grams. &quot;unitPricingMeasure&quot;: &quot;100g&quot;, &quot;unitPrice&quot;: { &nbsp;&nbsp;&quot;value&quot;: &quot;7.99&quot;, &nbsp;&nbsp;&quot;currency&quot;: &quot;GBP&quot;

### EventItemSearchResponse
* EventItemSearchResponse `object`: The result set for the event item search.
  * eventItems `array`: A list of event items that match the search criteria.
    * items [EventItem](#eventitem)
  * href `string`: The relative path to the current set of results.
  * limit `integer`: The maximum number of items, from the current result set, returned on a single page. Default: 20
  * next `string`: The relative path to the next set of results.
  * offset `integer`: The number of items that will be skipped in the result set. This is used with the limit field to control the pagination of the output. For example, if the offset is set to 0 and the limit is set to 10, the method will retrieve items 1 through 10 from the list of items returned. If the offset is set to 10 and the limit is set to 10, the method will retrieve items 11 through 20 from the list of items returned. Default: 0
  * prev `string`: The relative path to the previous set of results.
  * total `integer`: The total number of matches for the specified search criteria.

### EventSearchResponse
* EventSearchResponse `object`: The result set for the specified event search criteria.
  * events `array`: A list of results that match the search criteria.
    * items [Event](#event)
  * href `string`: The relative path to the current set of results.
  * limit `integer`: The maximum number of items, from the current result set, returned on a single page. Default: 20
  * next `string`: The relative path to the next set of results.
  * offset `integer`: The number of items that will be skipped in the result set. This is used with the limit field to control the pagination of the output. For example, if the offset is set to 0 and the limit is set to 10, the method will retrieve items 1 through 10 from the list of items returned. If the offset is set to 10 and the limit is set to 10, the method will retrieve items 11 through 20 from the list of items returned. Default: 0
  * prev `string`: The relative path to the previous set of results.
  * total `integer`: The total number of matches for the specified search criteria.

### Image
* Image `object`: The type that defines the details of an image, such as size and URL.
  * height `string`: The height of the image.
  * imageUrl `string`: The relative path to the image location.
  * text `string`: The text associated with the image.
  * width `string`: The width of the image.

### MarketingPrice
* MarketingPrice `object`: A type that describes the seller discount.
  * discountAmount [Amount](#amount)
  * discountPercentage `string`: The percentage of the seller discount based on the value returned in the originalPrice field.
  * originalPrice [Amount](#amount)
  * priceTreatment `string`: The pricing treatment (discount) that was applied to the price of the item. Note: The pricing treatment affects how and where the discounted price can be displayed. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/deal/types/api:PriceTreatmentEnum'>eBay API documentation</a>

### ShippingOption
* ShippingOption `object`: The details provided for the shipping provider, such as shipping cost and type.
  * shippingCost [Amount](#amount)
  * shippingCostType `string`: The class of the shipping cost. Valid Values: FIXED or CALCULATED Code so that your app gracefully handles any future changes to this list.

### Terms
* Terms `object`: The terms for the event, provided in a full-text description and summary.
  * fullText `string`: A full-text description of the terms.
  * summary `string`: A summarized description of the terms.


