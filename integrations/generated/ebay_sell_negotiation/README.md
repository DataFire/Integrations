# @datafire/ebay_sell_negotiation

Client library for Negotiation API

## Installation and Usage
```bash
npm install --save @datafire/ebay_sell_negotiation
```
```js
let ebay_sell_negotiation = require('@datafire/ebay_sell_negotiation').create({
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

The <b>Negotiations API</b> gives sellers the ability to proactively send discount offers to buyers who have shown an "interest" in their listings.  <br><br>By sending buyers discount offers on listings where they have shown an interest, sellers can increase the velocity of their sales.  <br><br>There are various ways for a buyer to show <i>interest </i> in a listing. For example, if a buyer adds the listing to their <b>Watch</b> list, or if they add the listing to their shopping cart and later abandon the cart, they are deemed to have shown an interest in the listing.  <br><br>In the offers that sellers send, they can discount their listings by either a percentage off the listing price, or they can set a new discounted price that is lower than the original listing price.  <br><br>For details about how seller offers work, see <a href="/api-docs/sell/static/marketing/offers-to-buyers.html" title="Selling Integration Guide">Sending offers to buyers</a>.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
ebay_sell_negotiation.oauthCallback({
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
ebay_sell_negotiation.oauthRefresh(null, context)
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

### findEligibleItems
This method evaluates a seller's current listings and returns the set of IDs that are eligible for a seller-initiated discount offer to a buyer. A listing ID is returned only when one or more buyers have shown an &quot;interest&quot; in the listing. If any buyers have shown interest in a listing, the seller can initiate a &quot;negotiation&quot; with them by calling sendOfferToInterestedBuyers, which sends all interested buyers a message that offers the listing at a discount. For details about how to create seller offers to buyers, see Sending offers to buyers.


```js
ebay_sell_negotiation.findEligibleItems({
  "X-EBAY-C-MARKETPLACE-ID": ""
}, context)
```

#### Input
* input `object`
  * limit `string`: This query parameter specifies the maximum number of items to return from the result set on a page in the paginated response. Minimum: 1 &nbsp; &nbsp;Maximum: 200 Default: 10
  * offset `string`: This query parameter specifies the number of results to skip in the result set before returning the first result in the paginated response. Combine offset with the limit query parameter to control the items returned in the response. For example, if you supply an offset of 0 and a limit of 10, the first page of the response contains the first 10 results from the complete list of items retrieved by the call. If offset is 10 and limit is 20, the first page of the response contains items 11-30 from the complete result set. Default: 0
  * X-EBAY-C-MARKETPLACE-ID **required** `string`: The eBay marketplace on which you want to search for eligible listings. For a complete list of supported marketplaces, see Negotiation API requirements and restrictions.

#### Output
* output [PagedEligibleItemCollection](#pagedeligibleitemcollection)

### sendOfferToInterestedBuyers
This method sends eligible buyers offers to purchase items in a listing at a discount. When a buyer has shown interest in a listing, they become &quot;eligible&quot; to receive a seller-initiated offer to purchase the item(s). Sellers use findEligibleItems to get the set of listings that have interested buyers. If a listing has interested buyers, sellers can use this method (sendOfferToInterestedBuyers) to send an offer to the buyers who are interested in the listing. The offer gives buyers the ability to purchase the associated listings at a discounted price. For details about how to create seller offers to buyers, see Sending offers to buyers.


```js
ebay_sell_negotiation.sendOfferToInterestedBuyers({
  "X-EBAY-C-MARKETPLACE-ID": ""
}, context)
```

#### Input
* input `object`
  * X-EBAY-C-MARKETPLACE-ID **required** `string`: The eBay marketplace on which your listings with &quot;eligible&quot; buyers appear. For a complete list of supported marketplaces, see Negotiation API requirements and restrictions.
  * body [CreateOffersRequest](#createoffersrequest)

#### Output
* output [SendOfferToInterestedBuyersCollectionResponse](#sendoffertointerestedbuyerscollectionresponse)



## Definitions

### Amount
* Amount `object`: A complex type that describes the value of a monetary amount as represented by a global currency.
  * currency `string`: The base currency applied to the value field to establish a monetary amount. The currency is represented as a 3-letter ISO4217 currency code. For example, the code for the Canadian Dollar is CAD. Default: The default currency of the eBay marketplace that hosts the listing. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/negotiation/types/bas:CurrencyCodeEnum'>eBay API documentation</a>
  * value `string`: The monetary amount in the specified currency.

### CreateOffersRequest
* CreateOffersRequest `object`: This complex type contains the fields needed to create an offer to a buyer that is initiated by the seller.
  * allowCounterOffer `boolean`: If set to true, the buyer is allowed to make a counter-offer to the seller's offer. Note: Currently, you must set this field to false; counter-offers are not supported in this release. Default: false
  * message `string`: A seller-defined message related to the offer being made. This message is sent to the list of &quot;interested&quot; buyers. To increase the conversion rate of the offers a seller makes to buyers, eBay recommends you always add a customized message to your offers. Maximum length: 2,000 characters
  * offerDuration [TimeDuration](#timeduration)
  * offeredItems `array`: An array of objects where each object contains the details of an offer and the ID of the listing on which the offer is being made. Note that the service does not currently support the creation of multiple offers with a single call to sendOfferToInterestedBuyer. With this, each request can target only one listing at a time and you must populate this array with a single element that contains the details of one offer.
    * items [OfferedItem](#offereditem)

### EligibleItem
* EligibleItem `object`: A listing that is eligible for a seller-initiated offer to a buyer. Listings are identified by a listingId value that is generated and assigned by eBay when a seller lists an item using the Trading API. Note: The Negotiation API does not currently support listings that are managed with the Inventory API.
  * listingId `string`: The unique eBay-assigned ID for an eBay listing. A listingId is assigned by eBay when a seller creates a listing with the Trading API.

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

### Offer
* Offer `object`: A complex type that defines an offer that a seller makes to eligible buyers.
  * allowCounterOffer `boolean`: If set to true, the buyer is allowed to make a counter-offer to the seller's offer.
  * buyer [User](#user)
  * creationDate `string`: The date and time when the seller's offer was created. The returned timestamp is formatted as an ISO 8601 string, which is based on the 24-hour Coordinated Universal Time (UTC) clock. Format: [YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z Example: 2018-08-20T07:09:00.000Z
  * initiatedBy `string`: The eBay UserName of the user (seller) who initiated the offer.
  * lastModifiedDate `string`: The date and time when the offer was last modified. The returned timestamp is formatted as an ISO 8601 string.
  * message `string`: A seller-defined message related to the offer being made. This message is sent to the list of &quot;interested&quot; buyers along with the offer message from eBay.
  * offerDuration [TimeDuration](#timeduration)
  * offerId `string`: A unique eBay-assigned identifier for the offer.
  * offerStatus `string`: The current state, or status, of an offer. Status states include PENDING, COUNTERED, ACCEPTED, and DECLINED. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/negotiation/types/api:OfferStatusEnum'>eBay API documentation</a>
  * offerType `string`: The type of offer being made. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/negotiation/types/api:OfferTypeEnum'>eBay API documentation</a>
  * offeredItems `array`: The list of items associated with the offer. Currently, the offer list is restricted to a single offer.
    * items [OfferedItem](#offereditem)
  * revision `string`: A unique, eBay-assigned ID for the revision of the offer.

### OfferedItem
* OfferedItem `object`: A complex type that defines the offer being made to an &quot;interested&quot; buyer.
  * discountPercentage `string`: This value denotes the percentage that the listing in the offer will be discounted from its original listed price. The seller can specify either the exact price of the discounted items with the price field or they can use this field to specify the percentage that the listing will be discounted, but not both. Minimum: 5 Required if you do not specify a price value.
  * listingId `string`: This value is a unique eBay-assigned ID that identifies the listing to which the offer pertains. A listingId value is generated by eBay when you list an item with the Trading API.
  * price [Amount](#amount)
  * quantity `integer`: This integer value indicates the number of items in the eBay listing for which the offer is being made. The offer being made by the seller is an &quot;all or nothing&quot; offer, meaning the buyer must purchase the indicated quantity of items in order to receive the discount on the transaction. Default: 1

### PagedEligibleItemCollection
* PagedEligibleItemCollection `object`: This complex type defines a collection of listings that are eligible for an offer to a buyer.
  * eligibleItems `array`: A list of items that are eligible for a seller-initiated offer to a buyer. Each element in the list contains the listing ID of a listed item. These IDs represent the listings for which buyers have shown an interest.
    * items [EligibleItem](#eligibleitem)
  * href `string`: The URI of the current page of results from the result set.
  * limit `integer`: The number of items returned on a single page from the result set. This value can be set in the request with the limit query parameter.
  * next `string`: The URI for the following page of results. This value is returned only if there is an additional page of results to display from the result set. Max length: 2048
  * offset `integer`: The number of results skipped in the result set before listing the first returned result. This value can be set in the request with the offset query parameter. Note: The items in a paginated result set use a zero-based list where the first item in the list has an offset of 0.
  * prev `string`: The URI for the preceding page of results. This value is returned only if there is a previous page of results to display from the result set. Max length: 2048
  * total `integer`: The total number of items retrieved in the result set. If no items match the search criteria, the server returns the HTTP status code 204 No Content.

### SendOfferToInterestedBuyersCollectionResponse
* SendOfferToInterestedBuyersCollectionResponse `object`: The response object returned from a SendOfferToInterestedBuyers request.
  * offers `array`: The offers container returns a list of the offers sent to buyers who have shown an interest in listings included in the offer.
    * items [Offer](#offer)

### TimeDuration
* TimeDuration `object`: A complex type that specifies a period of time using a specified time-measurement unit.
  * unit `string`: A time-measurement unit that specifies a singular period of time. A span of time is defined when you apply the value specified in the value field to the value specified for unit. Time-measurement units can be YEAR, MONTH, DAY, and so on. See TimeDurationUnitEnum for a complete list of possible time-measurement units. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/negotiation/types/bas:TimeDurationUnitEnum'>eBay API documentation</a>
  * value `integer`: An integer that represents an amount of time, as measured by the time-measurement unit specified in the unit field.

### User
* User `object`: This complex type identifies an eBay user.
  * maskedUsername `string`: The masked user name is a user name that has certain characters hidden for privacy of the user.


