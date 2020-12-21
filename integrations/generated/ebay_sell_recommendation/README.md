# @datafire/ebay_sell_recommendation

Client library for Recommendation API

## Installation and Usage
```bash
npm install --save @datafire/ebay_sell_recommendation
```
```js
let ebay_sell_recommendation = require('@datafire/ebay_sell_recommendation').create({
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

The <b>Recommendation API</b> returns information that sellers can use to optimize the configuration of their listings on eBay. <br><br>Currently, the API contains a single method, <b>findListingRecommendations</b>. This method provides information that sellers can use to configure Promoted Listings ad campaigns to maximize the visibility of their items in the eBay marketplace.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
ebay_sell_recommendation.oauthCallback({
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
ebay_sell_recommendation.oauthRefresh(null, context)
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

### findListingRecommendations
The find method currently returns information for a single recommendation type (AD) which contains information that sellers can use to configure Promoted Listings ad campaigns. The response from this method includes an array of the seller's listing IDs, where each element in the array contains recommendations related to the associated listing ID. For details on how to use this method, see Using the Recommendation API to help configure campaigns. The AD recommendation type The AD type contains two sets of information: The promoteWithAd indicator The promoteWithAd response field indicates whether or not eBay recommends you place the associated listing in a Promoted Listings ad campaign. The returned value is set to either RECOMMENDED or UNDETERMINED, where RECOMMENDED identifies the listings that will benefit the most from having them included in an ad campaign. The bid percentage Also known as the &quot;ad rate,&quot; the bidPercentage field provides the current trending bid percentage of similarly promoted items in the marketplace. The ad rate is a user-specified value that indicates the level of promotion that eBay applies to the campaign across the marketplace. The value is also used to calculate the Promotion Listings fee, which is assessed to the seller if a Promoted Listings action results in the sale of an item. Configuring the request You can configure a request to review all of a seller's currently active listings, or just a subset of them. All active listings &ndash; If you leave the request body empty, the request targets all the items currently listed by the seller. Here, the response is filtered to contain only the items where promoteWithAd equals RECOMMENDED. In this case, eBay recommends that all the returned listings should be included in a Promoted Listings ad campaign. Selected listing IDs &ndash; If you populate the request body with a set of listingIds, the response contains data for all the specified listing IDs. In this scenario, the response provides you with information on listings where the promoteWithAd can be either RECOMMENDED or UNDETERMINED. The paginated response Because the response can contain many listing IDs, the findListingRecommendations method paginates the response set. You can control size of the returned pages, as well as an offset that dictates where to start the pagination, using query parameters in the request.


```js
ebay_sell_recommendation.findListingRecommendations({
  "X-EBAY-C-MARKETPLACE-ID": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: Provide a list of key-value pairs to specify the criteria you want to use to filter the response. In the list, separate each filter key from its associated value with a colon (&quot;:&quot;). Currently, the only supported filter value is recommendationTypes and it supports only the (&quot;AD&quot;) type. Follow the recommendationTypes specifier with the filter type(s) enclosed in curly braces (&quot;{ }&quot;), and separate multiple types with commas. Example: filter=recommendationTypes:{AD} Default: recommendationTypes:{AD}
  * limit `string`: Use this query parameter to set the maximum number of ads to return on a page from the paginated response. Default: 10 Maximum: 500
  * offset `string`: Specifies the number of ads to skip in the result set before returning the first ad in the paginated response. Combine offset with the limit query parameter to control the items returned in the response. For example, if you supply an offset of 0 and a limit of 10, the first page of the response contains the first 10 items from the complete list of items retrieved by the call. If offset is 10 and limit is 20, the first page of the response contains items 11-30 from the complete result set. Default: 0
  * X-EBAY-C-MARKETPLACE-ID **required** `string`: Use this header to specify the eBay marketplace where you list the items for which you want to get recommendations.
  * body [FindListingRecommendationRequest](#findlistingrecommendationrequest)

#### Output
* output [PagedListingRecommendationCollection](#pagedlistingrecommendationcollection)



## Definitions

### Ad
* Ad `object`: A complex type that contains recommendations and information on how to configure Promoted Listings ad campaigns.
  * bidPercentages `array`: This field returns information that you can use to configure the bidPercentage field in a Promoted Listings campaign. Note: Currently, ITEM and TRENDING are the only supported bid percentage types. The ITEM suggested bid percentages are tailored to each of your items and are designed to help you stay competitive while finding an optimal balance between performance and cost. The recommendations are calculated based on a variety of factors that may include item attributes, seasonality, past performance, and current competition for each of your listings. The TRENDING suggested bid percentages are calculated by reviewing the category level average ad rates in the marketplace. Setting the bidPercentage of your ad campaign based on these rate recommendations will help the items in the campaign be competitive with other items in the marketplace by improving their chances of being displayed more often in the marketplace.
    * items [BidPercentages](#bidpercentages)
  * promoteWithAd `string`: An enum whose values describe whether or not eBay recommends you place the associated listing in a Promoted Listings ad campaign. IDs deemed RECOMMENDED by eBay are the listings with the highest potential of benefiting from being promoted. The recommendation calculation is based on marketplace trends, like buyer demand and the competition in the item&rsquo;s category. Note: A promoteWithAd value cannot be calculated for listings that are part of Promoted Listings campaigns. Because of this, if you call findListingRecommendations with a specific set of listing IDs, the promoteWithAd field is not returned for any of the listings that are involved in a promotion. However, as long as they are eligible, the trending bidPercentage is returned for all specified listings, even if they are part of an ad campaign. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/recommendation/types/api:PromoteWithAd'>eBay API documentation</a>

### BidPercentages
* BidPercentages `object`: A complex type that returns data related to Promoted Listings bid percentages.
  * basis `string`: The basis by which the ad rate is calculated. Valid Values: ITEM and TRENDING For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/recommendation/types/api:Basis'>eBay API documentation</a>
  * value `string`: The bid percentage data is a single precision value, as calculated by the associated basis. In Promoted listings ad campaigns, the bid percentage (also known as the ad rate) is a user-defined value that sets the level that eBay raises the visibility of the listing in the marketplace. It is also the rate that is used to calculate the Promoted Listings fee. Minimum value: 1.0 &nbsp; Maximum value: 100.0

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

### FindListingRecommendationRequest
* FindListingRecommendationRequest `object`: An list of listing ID values for which you want Promoted Listings ad configuration information.
  * listingIds `array`: A comma-separated list of listing IDs for which you want Promoted Listings ad configuration information. Currently, this method accepts only listingId values from the Trading API. Max: 500 listing IDs
    * items `string`

### ListingRecommendation
* ListingRecommendation `object`: A complex type that contains the ID of an actively listed item and a set of related listing recommendations. The recommendations contain information the seller can use to optimize their listing configurations.
  * listingId `string`: An ID that identifies the active listing associated with the eBay recommendations.
  * marketing [MarketingRecommendation](#marketingrecommendation)

### MarketingRecommendation
* MarketingRecommendation `object`: A complex type that contains information about how a seller can improve their listing configurations. The AD object contains Promoted Listings recommendations and information, which the seller can use to improve buyer conversions. The response can also contain an optional message about the returned data.
  * ad [Ad](#ad)
  * message `string`: A message that can conditionally accompany the listing information.

### PagedListingRecommendationCollection
* PagedListingRecommendationCollection `object`: The high-level object used to return a set of Promoted Listings ad recommendations.
  * href `string`: The URI of the current page of results from the result set.
  * limit `integer`: The number of items returned on a single page from the result set. This value can be set in the request with the limit query parameter.
  * listingRecommendations `array`: Returns a list of listingRecommendations, where each element in the list offers recommendations for the associated listingId. Which elements are returned depend on how you structure the request. For example, if you request recommendations for all of a sellers listings (by leaving the request payload empty), ad recommendations are returned only for those listings where promoteWithAd is set to RECOMMENDED.
    * items [ListingRecommendation](#listingrecommendation)
  * next `string`: The URI for the following page of results. This value is returned only if there is an additional page of results to display from the result set. Max length: 2048
  * offset `integer`: The number of results skipped in the result set before listing the first returned result. This value can be set in the request with the offset query parameter. Note: The items in a paginated result set use a zero-based list where the first item in the list has an offset of 0.
  * prev `string`: The URI for the preceding page of results. This value is returned only if there is a previous page of results to display from the result set. Max length: 2048
  * total `integer`: The total number of items retrieved in the result set. If no items are found, this field is returned with a value of 0.


