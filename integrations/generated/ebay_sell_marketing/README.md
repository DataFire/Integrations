# @datafire/ebay_sell_marketing

Client library for Marketing API

## Installation and Usage
```bash
npm install --save @datafire/ebay_sell_marketing
```
```js
let ebay_sell_marketing = require('@datafire/ebay_sell_marketing').create({
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

<p>The <i>Marketing API </i> offers two platforms that sellers can use to promote and advertise their products:</p> <ul><li><b>Promoted Listings</b> is an eBay ad service that lets sellers set up <i>ad campaigns </i> for the products they want to promote. eBay displays the ads in search results and in other marketing modules as <b>SPONSORED</b> listings. If an item in a Promoted Listings campaign sells, the seller is assessed a Promoted Listings fee, which is a seller-specified percentage applied to the sales price. For complete details, see <a href="/api-docs/sell/static/marketing/promoted-listings.html">Promoted Listings</a>.</li>  <li><b>Promotions Manager</b> gives sellers a way to offer discounts on specific items as a way to attract buyers to their inventory. Sellers can set up discounts (such as "20% off" and other types of offers) on specific items or on an entire customer order. To further attract buyers, eBay prominently displays promotion <i>teasers</i> throughout buyer flows. For complete details, see <a href="/api-docs/sell/static/marketing/promotions-manager.html">Promotions Manager</a>.</li></ul>  <p><b>Marketing reports</b>, on both the Promoted Listings and Promotions Manager platforms, give sellers information that shows the effectiveness of their marketing strategies. The data gives sellers the ability to review and fine tune their marketing efforts.</p> <p class="tablenote"><b>Important!</b> Sellers must have an active eBay Store subscription, and they must accept the <b>Terms and Conditions</b> before they can make requests to these APIs in the Production environment. There are also site-specific listings requirements and restrictions associated with these marketing tools, as listed in the "requirements and restrictions" sections for <a href="/api-docs/sell/marketing/static/overview.html#PL-requirements">Promoted Listings</a> and <a href="/api-docs/sell/marketing/static/overview.html#PM-requirements">Promotions Manager</a>.</p> <p>The table below lists all the Marketing API calls grouped by resource.</p>

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
ebay_sell_marketing.oauthCallback({
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
ebay_sell_marketing.oauthRefresh(null, context)
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

### getCampaigns
This method retrieves the details for all the campaigns of a seller, including the campaign's the selection rules. Note that this method does not return the listing IDs or inventory reference IDs of the items included in the ad campaign. Call getAds to retrieve these IDs. You can filter the result set by a campaign name, end date range, start date range, or campaign status. You can also paginate the records returned from the result set using the limit query parameter, and control which records to return using the offset parameter. Note: This call does not retrieve campaigns created via the eBay web flow.


```js
ebay_sell_marketing.getCampaigns({}, context)
```

#### Input
* input `object`
  * campaign_name `string`: Specifies the campaign name. The results are filtered to include only the campaign by the specified name. Note: The results might be null if other filters exclude the campaign with this name. Maximum: 1 campaign name
  * campaign_status `string`: Specifies the campaign status. The results are filtered to include only campaigns that are in the specified states. Note: The results might not include all the campaigns with this status if other filters exclude them. Valid values: See CampaignStatusEnum Maximum: 1 status
  * end_date_range `string`: Specifies the range of a campaign's end date. The results are filtered to include only campaigns with an end date that is within specified range. Valid format (UTC): &nbsp;&nbsp;&nbsp;&nbsp;yyyy-MM-ddThh:mm:ssZ..yyyy-MM-ddThh:mm:ssZ&nbsp;&nbsp; (campaign ends within this range) &nbsp;&nbsp;&nbsp;&nbsp;yyyy-MM-ddThh:mm:ssZ..&nbsp;&nbsp;(campaign ends on or after this date) &nbsp;&nbsp;&nbsp;&nbsp;..yyyy-MM-ddThh:mm:ssZ&nbsp;&nbsp; (campaign ends on or before this date) &nbsp;&nbsp;&nbsp;&nbsp;2016-09-08T00:00:00Z..2016-09-09T00:00:00Z&nbsp;&nbsp; (campaign ends on September 8, 2016) Note: The results might not include all the campaigns ending on this date if other filters exclude them.
  * limit `string`: Specifies the maximum number of campaigns to return on a page in the paginated response. Default: 10 Maximum: 500
  * offset `string`: Specifies the number of campaigns to skip in the result set before returning the first report in the paginated response. Combine offset with the limit query parameter to control the items returned in the response. For example, if you supply an offset of 0 and a limit of 10, the first page of the response contains the first 10 items from the complete list of items retrieved by the call. If offset is 10 and limit is 20, the first page of the response contains items 11-30 from the complete result set. Default: 0
  * start_date_range `string`: Specifies the range of a campaign's start date in which to filter the results. The results are filtered to include only campaigns with a start date that is equal to this date or is within specified range. Valid format (UTC): &nbsp;&nbsp;&nbsp;&nbsp;yyyy-MM-ddThh:mm:ssZ..yyyy-MM-ddThh:mm:ssZ&nbsp;&nbsp; (starts within this range) &nbsp;&nbsp;&nbsp;&nbsp;yyyy-MM-ddThh:mm:ssZ..&nbsp;&nbsp;(campaign starts on or after this date) &nbsp;&nbsp;&nbsp;&nbsp;..yyyy-MM-ddThh:mm:ssZ&nbsp;&nbsp; (campaign starts on or before this date) &nbsp;&nbsp;&nbsp;&nbsp;2016-09-08T00:00.00.000Z..2016-09-09T00:00:00Z&nbsp;&nbsp; (campaign starts on September 8, 2016) Note: The results might not include all the campaigns with this start date if other filters exclude them.

#### Output
* output [CampaignPagedCollection](#campaignpagedcollection)

### createCampaign
This method creates a Promoted Listings ad campaign. A Promoted Listings campaign is the structure into which you place the ads for the listings you want to promote. Identify the items you want to place into a campaign either by &quot;key&quot; or by &quot;rule&quot; as follows: Rules-based campaigns &ndash; A rules-based campaign adds items to the campaign according to the criteria you specify in your call to createCampaign. Key-based campaigns &ndash; Add items to an existing campaign using either listing ID values or Inventory Reference values: Add listingId values to an existing campaign by calling either createAdByListingID or bulkCreateAdsByListingId. Add inventoryReference values to an existing campaign by calling either createAdByInventoryReference or bulkCreateAdsByInventoryReference. Note: No matter how you add items to a Promoted Listings campaign, each campaign can contain ads for a maximum of 50,000 items. If a rules-based campaign identifies more than 50,000 items, ads are created for only the first 50,000 items identified by the specified criteria, and ads are not created for the remaining items. Creating a campaign To create a basic campaign, supply: The user-defined campaign name The start date (and optionally the end date) of the campaign The eBay marketplace on which the campaign is hosted Details on the campaign funding model The campaign funding model specifies how the Promoted Listings fee is calculated. Currently, the only supported funding model is COST_PER_SALE. For complete information on how the fee is calculated and when it applies, see Promoted Listings fees. If you populate the campaignCriterion object in your createCampaign request, campaign &quot;ads&quot; are created by &quot;rule&quot; for the listings that meet the criteria you specify, and these ads are associated with the newly created campaign. For details on creating Promoted Listings campaigns and how to select the items to be included in your campaigns, see Creating a Promoted Listings campaign. For recommendations on which listings are prime for a Promoted Listings ad campaign and to get guidance on how to set the bidPercentage field, see Using the Recommendation API to help configure campaigns. Tip: See Promoted Listings requirements and restrictions for the details on the marketplaces that support Promoted Listings via the API.


```js
ebay_sell_marketing.createCampaign({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [CreateCampaignRequest](#createcampaignrequest)

#### Output
* output `object`

### findCampaignByAdReference
This method retrieves the campaigns containing the listing that is specified using either a listing ID, or an inventory reference ID and inventory reference type pair. eBay listing IDs are generated by either the Trading API or the Inventory API when you create a listing. An inventory reference ID can be either a seller-defined SKU or inventoryItemGroupKey, as specified in the Inventory API. Note: This request accepts either a listing_id, or an inventory_reference_id and inventory_reference_type pair, as used in the Inventory API.


```js
ebay_sell_marketing.findCampaignByAdReference({}, context)
```

#### Input
* input `object`
  * inventory_reference_id `string`: The seller's inventory reference ID of the listing to be used to find the campaign in which it is associated. You must always pass in both inventory_reference_id and inventory_reference_type.
  * inventory_reference_type `string`: The type of the seller's inventory reference ID, which is a listing or group of items. You must always pass in both inventory_reference_id and inventory_reference_type.
  * listing_id `string`: Identifier of the eBay listing associated with the ad.

#### Output
* output [Campaigns](#campaigns)

### getCampaignByName
This method retrieves the details of a single campaign, as specified with the campaign_name query parameter. Note that the campaign name you specify must be an exact, case-sensitive match of the name of the campaign you want to retrieve. This method returns all the details of a campaign (including the campaign's the selection rules), except the for the listing IDs or inventory reference IDs included in the campaign. These IDs are returned by getAds. Call getCampaigns to retrieve a list of the seller's campaign names. Note: This call does not retrieve campaigns created via the eBay web flow.


```js
ebay_sell_marketing.getCampaignByName({
  "campaign_name": ""
}, context)
```

#### Input
* input `object`
  * campaign_name **required** `string`: Name of the campaign.

#### Output
* output [Campaign](#campaign)

### deleteCampaign
This method deletes the campaign specified by the campaign_id query parameter. Note: You can delete only campaigns that have ended. Call getCampaigns to retrieve the campaign_id and the campaign status (RUNNING, PAUSED, ENDED, and so on) for all the seller's campaigns.


```js
ebay_sell_marketing.deleteCampaign({
  "campaign_id": ""
}, context)
```

#### Input
* input `object`
  * campaign_id **required** `string`: A unique eBay-assigned ID for an ad campaign that's generated when a campaign is created. Get a seller's campaign IDs by calling getCampaigns.

#### Output
*Output schema unknown*

### getCampaign
This method retrieves the details of a single campaign, as specified with the campaign_id query parameter. This method returns all the details of a campaign (including the campaign's the selection rules), except the for the listing IDs or inventory reference IDs included in the campaign. These IDs are returned by getAds. Call getCampaigns to retrieve a list of the seller's campaign IDs. Note: This call does not retrieve campaigns created via the eBay web flow.


```js
ebay_sell_marketing.getCampaign({
  "campaign_id": ""
}, context)
```

#### Input
* input `object`
  * campaign_id **required** `string`: A unique eBay-assigned ID for an ad campaign that's generated when a campaign is created. Get a seller's campaign IDs by calling getCampaigns.

#### Output
* output [Campaign](#campaign)

### getAds
This method retrieves Promoted Listings ads that are associated with listings created with either the Trading API or the Inventory API. The method retrieves ads related to the specified campaign. Specify the Promoted Listings campaign to target with the campaign_id path parameter. Because of the large number of possible results, you can use query parameters to paginate the result set by specifying a limit, which dictates how many ads to return on each page of the response. You can also specify how many ads to skip in the result set before returning the first result using the offset path parameter. Call getCampaigns to retrieve the current campaign IDs for the seller.


```js
ebay_sell_marketing.getAds({
  "campaign_id": ""
}, context)
```

#### Input
* input `object`
  * campaign_id **required** `string`: A unique eBay-assigned ID for an ad campaign that's generated when a campaign is created. Get a seller's campaign IDs by calling getCampaigns.
  * limit `string`: Specifies the maximum number of ads to return on a page in the paginated response. Default: 10 Maximum: 500
  * listing_ids `string`: A comma separated list of listing IDs. The response includes only active ads (ads associated with a RUNNING campaign). The results do not include listing IDs that are excluded by other conditions.
  * offset `string`: Specifies the number of ads to skip in the result set before returning the first ad in the paginated response. Combine offset with the limit query parameter to control the items returned in the response. For example, if you supply an offset of 0 and a limit of 10, the first page of the response contains the first 10 items from the complete list of items retrieved by the call. If offset is 10 and limit is 20, the first page of the response contains items 11-30 from the complete result set. Default: 0

#### Output
* output [AdPagedCollection](#adpagedcollection)

### createAdByListingId
This method works with listings created with either the Trading API or the Inventory API. The method: Creates an ad for the specified listing ID. Sets the bid percentage (also known as the &quot;ad rate&quot;) for the ad. Associates the ad with the specified campaign. To create an ad for a listing, specify its listingId, plus the bidPercentage for the ad in the payload of the request. Specify the campaign to associate the ad with using the campaign_id path parameter. Listing IDs are generated by eBay when a seller creates listings with the Trading API or Inventory API. Each campaign can have ads for a maximum of 50,000 items, and each item in a multiple-variation listing is considered as an single item. Use createCampaign to create a new campaign and use getCampaigns to get a list of existing campaigns.


```js
ebay_sell_marketing.createAdByListingId({
  "campaign_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * campaign_id **required** `string`: A unique eBay-assigned ID for an ad campaign that's generated when a campaign is created. Get a seller's campaign IDs by calling getCampaigns.
  * body **required** [CreateAdRequest](#createadrequest)

#### Output
* output `object`

### deleteAd
This method removes the specified ad from the specified campaign. Pass the ID of the ad to delete with the ID of the campaign associated with the ad as path parameters to the call. Call getCampaigns to get the current list of the seller's campaign IDs.


```js
ebay_sell_marketing.deleteAd({
  "ad_id": "",
  "campaign_id": ""
}, context)
```

#### Input
* input `object`
  * ad_id **required** `string`: Identifier of an ad. This ID was generated when the ad was created.
  * campaign_id **required** `string`: A unique eBay-assigned ID for an ad campaign that's generated when a campaign is created. Get a seller's campaign IDs by calling getCampaigns.

#### Output
*Output schema unknown*

### getAd
This method retrieves the specified ad from the specified campaign. In the request, supply the campaign_id and ad_id as path parameters. Call getCampaigns to retrieve a list of the seller's current campaign IDs and call getAds to retrieve their current ad IDs.


```js
ebay_sell_marketing.getAd({
  "ad_id": "",
  "campaign_id": ""
}, context)
```

#### Input
* input `object`
  * ad_id **required** `string`: Identifier of an ad. This ID was generated when the ad was created.
  * campaign_id **required** `string`: A unique eBay-assigned ID for an ad campaign that's generated when a campaign is created. Get a seller's campaign IDs by calling getCampaigns.

#### Output
* output [Ad](#ad)

### updateBid
This method updates the bid percentage (also known as the &quot;ad rate&quot;) for the specified ad in the specified campaign. In the request, supply the campaign_id and ad_id as path parameters, and supply the new bidPercentage value in the payload of the call. Call getCampaigns to retrieve a seller's current campaign IDs and call getAds to get their ad IDs.


```js
ebay_sell_marketing.updateBid({
  "ad_id": "",
  "campaign_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * ad_id **required** `string`: A unique eBay-assigned ID for an ad that's generated when an ad is created.
  * campaign_id **required** `string`: A unique eBay-assigned ID for an ad campaign that's generated when a campaign is created. Get a seller's campaign IDs by calling getCampaigns.
  * body **required** [UpdateBidPercentageRequest](#updatebidpercentagerequest)

#### Output
*Output schema unknown*

### bulkCreateAdsByInventoryReference
This method adds multiple listings that are managed with the Inventory API to an existing Promoted Listings campaign. For each listing specified in the request, this method: Creates an ad for the listing. Sets the bid percentage (also known as the ad rate) for the ad. Associates the ad with the specified campaign. To create an ad for a listing, specify its inventoryReferenceId and inventoryReferenceType, plus the bidPercentage for the ad in the payload of the request. Specify the campaign to associate the ads to with using the campaign_id path parameter. In the Inventory API, an inventory reference ID is either a seller-defined SKU value or an inventoryItemGroupKey (a seller-defined ID for a multiple-variation listing). You can specify a maximum of 500 items per call and each campaign can have ads for a maximum of 50,000 items. Be aware when using this call that each variation in a multiple-variation listing creates an individual ad. Use createCampaign to create a new campaign and use getCampaigns to get a list of existing campaigns.


```js
ebay_sell_marketing.bulkCreateAdsByInventoryReference({
  "campaign_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * campaign_id **required** `string`: A unique eBay-assigned ID for an ad campaign that's generated when a campaign is created. Get a seller's campaign IDs by calling getCampaigns.
  * body **required** [BulkCreateAdsByInventoryReferenceRequest](#bulkcreateadsbyinventoryreferencerequest)

#### Output
* output [BulkCreateAdsByInventoryReferenceResponse](#bulkcreateadsbyinventoryreferenceresponse)

### bulkCreateAdsByListingId
This method adds multiple listings to an existing Promoted Listings campaign using listingId values generated by either the Trading API or Inventory API. For each listing ID specified in the request, this method: Creates an ad for the listing. Sets the bid percentage (also known as the ad rate) for the ad. Associates the ad with the specified campaign. To create an ad for a listing, specify its listingId, plus the bidPercentage for the ad in the payload of the request. Specify the campaign to associate the ads with using the campaign_id path parameter. Listing IDs are generated by eBay when a seller creates listings with the Trading API. You can specify a maximum of 500 listings per call and each campaign can have ads for a maximum of 50,000 items. Be aware when using this call that each variation in a multiple-variation listing creates an individual ad. Use createCampaign to create a new campaign and use getCampaigns to get a list of existing campaigns.


```js
ebay_sell_marketing.bulkCreateAdsByListingId({
  "campaign_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * campaign_id **required** `string`: A unique eBay-assigned ID for an ad campaign that's generated when a campaign is created. Get a seller's campaign IDs by calling getCampaigns.
  * body **required** [BulkCreateAdRequest](#bulkcreateadrequest)

#### Output
* output [BulkAdResponse](#bulkadresponse)

### bulkDeleteAdsByInventoryReference
This method works with listings created with the Inventory API. The method deletes a set of ads, as specified by a list of inventory reference IDs, from the specified campaign. Inventory reference IDs are seller-defined IDs that are used with the Inventory API. Pass the campaign_id as a path parameter and populate the payload with a list of inventoryReferenceId and inventoryReferenceType pairs that you want to delete. Get the campaign IDs for a seller by calling getCampaigns and call getAds to get a list of the seller's inventory reference IDs.


```js
ebay_sell_marketing.bulkDeleteAdsByInventoryReference({
  "campaign_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * campaign_id **required** `string`: A unique eBay-assigned ID for an ad campaign that's generated when a campaign is created. Get a seller's campaign IDs by calling getCampaigns.
  * body **required** [BulkDeleteAdsByInventoryReferenceRequest](#bulkdeleteadsbyinventoryreferencerequest)

#### Output
* output [BulkDeleteAdsByInventoryReferenceResponse](#bulkdeleteadsbyinventoryreferenceresponse)

### bulkDeleteAdsByListingId
This method works with listing IDs created with either the Trading API or the Inventory API. The method deletes a set of ads, as specified by a list of listingID values from a Promoted Listings campaign. A listing ID value is generated by eBay when a seller creates a listing with either the Trading API and Inventory API. Pass the campaign_id as a path parameter and populate the payload with the set of listing IDs that you want to delete. Get the campaign IDs for a seller by calling getCampaigns and call getAds to get a list of the seller's inventory reference IDs.


```js
ebay_sell_marketing.bulkDeleteAdsByListingId({
  "campaign_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * campaign_id **required** `string`: A unique eBay-assigned ID for an ad campaign that's generated when a campaign is created. Get a seller's campaign IDs by calling getCampaigns.
  * body **required** [BulkDeleteAdRequest](#bulkdeleteadrequest)

#### Output
* output [BulkDeleteAdResponse](#bulkdeleteadresponse)

### bulkUpdateAdsBidByInventoryReference
This method works with listings that are managed with the Inventory API. The method updates the bidPercentage values for a set of ads associated with the specified campaign. Specify the campaign_id as a path parameter and supply a list of inventoryReferenceId and inventoryReferenceType pairs with the updated bidPercentage values in the request body. In the Inventory API, an inventory reference ID is either a seller-defined SKU value or an inventoryItemGroupKey (a seller-defined ID for a multiple-variation listing). Get the campaign IDs for a seller by calling getCampaigns and call getAds to get a list of the seller's inventory reference IDs.


```js
ebay_sell_marketing.bulkUpdateAdsBidByInventoryReference({
  "campaign_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * campaign_id **required** `string`: A unique eBay-assigned ID for an ad campaign that's generated when a campaign is created. Get a seller's campaign IDs by calling getCampaigns.
  * body **required** [BulkCreateAdsByInventoryReferenceRequest](#bulkcreateadsbyinventoryreferencerequest)

#### Output
* output [BulkCreateAdsByInventoryReferenceResponse](#bulkcreateadsbyinventoryreferenceresponse)

### bulkUpdateAdsBidByListingId
This method works with listings created with either the Trading API or the Inventory API. The method updates the bidPercentage values for a set of ads associated with the specified campaign. Specify the campaign_id as a path parameter and supply a set of listing IDs with their associated updated bidPercentage values in the request body. An eBay listing ID is generated when a listing is created with the Trading API. Get the campaign IDs for a seller by calling getCampaigns and call getAds to get a list of the seller's inventory reference IDs.


```js
ebay_sell_marketing.bulkUpdateAdsBidByListingId({
  "campaign_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * campaign_id **required** `string`: A unique eBay-assigned ID for an ad campaign that's generated when a campaign is created. Get a seller's campaign IDs by calling getCampaigns.
  * body **required** [BulkCreateAdRequest](#bulkcreateadrequest)

#### Output
* output [BulkAdResponse](#bulkadresponse)

### cloneCampaign
This method clones (makes a copy of) the specified campaign. To clone a campaign, supply the campaign_id as a path parameter in your call, there is no call payload. The ID of the newly-cloned campaign is returned in the Location response header. Call getCampaigns to retrieve a seller's current campaign IDs Requirement: In order to clone a campaign, the campaignStatus must be ENDED and the campaign must define a set of selection rules (it must be a rules-based campaign).


```js
ebay_sell_marketing.cloneCampaign({
  "campaign_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * campaign_id **required** `string`: A unique eBay-assigned ID for an ad campaign that's generated when a campaign is created. Get a seller's campaign IDs by calling getCampaigns.
  * body **required** [CloneCampaignRequest](#clonecampaignrequest)

#### Output
* output `object`

### createAdsByInventoryReference
This method works with listings that are managed with the Inventory API. The method: Creates an ad for the specified listing. Sets the bid percentage (also known as the &quot;ad rate&quot;) for the ad. Associates the ad with the specified campaign. To create an ad for a listing, specify its inventoryReferenceId and inventoryReferenceType, plus the bidPercentage for the ad in the payload of the request. Specify the campaign to associate the ad with using the campaign_id path parameter. In the Inventory API, an inventory reference ID is either a seller-defined SKU value or an inventoryItemGroupKey (a seller-defined ID for a multiple-variation listing). Each campaign can have ads for a maximum of 50,000 items, and each item in a multiple-variation listing is considered as an individual item. Use createCampaign to create a new campaign and use getCampaigns to get a list of existing campaigns.


```js
ebay_sell_marketing.createAdsByInventoryReference({
  "campaign_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * campaign_id **required** `string`: A unique eBay-assigned ID for an ad campaign that's generated when a campaign is created. Get a seller's campaign IDs by calling getCampaigns.
  * body **required** [CreateAdsByInventoryReferenceRequest](#createadsbyinventoryreferencerequest)

#### Output
* output [AdReferences](#adreferences)

### deleteAdsByInventoryReference
This method works with listings that are managed with the Inventory API. The method deletes ads using a list of seller-defined inventory reference IDs, used with the Inventory API, that are associated with the specified campaign ID. Specify the campaign ID (as a path parameter) and a list of inventoryReferenceId and inventoryReferenceType pairs to be deleted. Call getCampaigns to get a list of the seller's current campaign IDs.


```js
ebay_sell_marketing.deleteAdsByInventoryReference({
  "campaign_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * campaign_id **required** `string`: A unique eBay-assigned ID for an ad campaign that's generated when a campaign is created. Get a seller's campaign IDs by calling getCampaigns.
  * body **required** [DeleteAdsByInventoryReferenceRequest](#deleteadsbyinventoryreferencerequest)

#### Output
* output [AdIds](#adids)

### endCampaign
This method ends an active (RUNNINGM) or paused campaign. Specify the campaign you want to end by supplying its campaign ID in a query parameter. Call getCampaigns to retrieve the campaign_id and the campaign status (RUNNING, PAUSED, ENDED, and so on) for all the seller's campaigns.


```js
ebay_sell_marketing.endCampaign({
  "campaign_id": ""
}, context)
```

#### Input
* input `object`
  * campaign_id **required** `string`: A unique eBay-assigned ID for an ad campaign that's generated when a campaign is created. Get a seller's campaign IDs by calling getCampaigns.

#### Output
*Output schema unknown*

### getAdsByInventoryReference
This method retrieves Promoted Listings ads associated with listings that are managed with the Inventory API from the specified campaign. Supply the campaign_id as a path parameter and use query parameters to specify the inventory_reference_id and inventory_reference_type pairs. In the Inventory API, an inventory reference ID is either a seller-defined SKU value or an inventoryItemGroupKey (a seller-defined ID for an inventory item group, which is an entity that's used in the Inventory API to create a multiple-variation listing). To indicate a listing managed by the Inventory API, you must always specify both an inventory_reference_id and the associated inventory_reference_type. Call getCampaigns to retrieve all of the seller's the current campaign IDs.


```js
ebay_sell_marketing.getAdsByInventoryReference({
  "campaign_id": "",
  "inventory_reference_id": "",
  "inventory_reference_type": ""
}, context)
```

#### Input
* input `object`
  * campaign_id **required** `string`: A unique eBay-assigned ID for an ad campaign that's generated when a campaign is created. Get a seller's campaign IDs by calling getCampaigns.
  * inventory_reference_id **required** `string`: The inventory reference ID associated with the ad you want returned. A seller's inventory reference ID is the ID of either a listing or the ID of an inventory item group (the parent of a multi-variation listing, such as a shirt that is available in multiple sizes and colors). You must always supply in both an inventory_reference_id and an inventory_reference_type.
  * inventory_reference_type **required** `string`: The type of the inventory reference ID. Set this value to either INVENTORY_ITEM (a single listing) or INVENTORY_ITEM_GROUP (a multi-variation listing). You must always pass in both an inventory_reference_id and an inventory_reference_type.

#### Output
* output [Ads](#ads)

### pauseCampaign
This method pauses an active (RUNNING) campaign. You can restarted by calling resumeCampaign, as long as the campaign's end date is in the future. Note: The listings associated with a paused campaign cannot be added into another campaign. Call getCampaigns to retrieve the campaign_id and the campaign status (RUNNING, PAUSED, ENDED, and so on) for all the seller's campaigns.


```js
ebay_sell_marketing.pauseCampaign({
  "campaign_id": ""
}, context)
```

#### Input
* input `object`
  * campaign_id **required** `string`: A unique eBay-assigned ID for an ad campaign that's generated when a campaign is created. Get a seller's campaign IDs by calling getCampaigns.

#### Output
*Output schema unknown*

### resumeCampaign
This method resumes a paused campaign, as long as it's end date is in the future. Supply the campaign_id for the campaign you want to restart as a query parameter in the request. Call getCampaigns to retrieve the campaign_id and the campaign status (RUNNING, PAUSED, ENDED, and so on) for all the seller's campaigns.


```js
ebay_sell_marketing.resumeCampaign({
  "campaign_id": ""
}, context)
```

#### Input
* input `object`
  * campaign_id **required** `string`: A unique eBay-assigned ID for an ad campaign that's generated when a campaign is created. Get a seller's campaign IDs by calling getCampaigns.

#### Output
*Output schema unknown*

### updateCampaignIdentification
This method replaces the name and the start and end dates of a campaign. Specify the campaign_id you want to update as a URI parameter, and configure the campaignName and startDate in the request payload. If you want to change only the end date of the campaign, specify the current campaign name and set startDate to the current date (you cannot use a start date that is in the past), and set the endDate as desired. Note that if you do not set a new end date in this call, any current endDate value will be set to null. To preserve the currently-set end date, you must specify the value again in your request. Call getCampaigns to retrieve a seller's campaign details, including the campaign ID, campaign name, and the start and end dates of the campaign.


```js
ebay_sell_marketing.updateCampaignIdentification({
  "campaign_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * campaign_id **required** `string`: A unique eBay-assigned ID for an ad campaign that's generated when a campaign is created. Get a seller's campaign IDs by calling getCampaigns.
  * body **required** [UpdateCampaignIdentificationRequest](#updatecampaignidentificationrequest)

#### Output
*Output schema unknown*

### getReport
This call downloads the report as specified by the report_id path parameter. Call createReportTask to schedule and generate a Promoted Listings report. All date values are returned in UTC format (yyyy-MM-ddThh:mm:ss.sssZ).


```js
ebay_sell_marketing.getReport({
  "report_id": ""
}, context)
```

#### Input
* input `object`
  * report_id **required** `string`: The unique ID of the Promoted Listings report you want to get. This ID is generated by eBay when you run a report task with a call to createReportTask. Get all the seller's report IDs by calling getReportTasks.

#### Output
* output `object`

### getReportMetadata
This call retrieves information that details the fields used in each of the Promoted Listings reports. Use the returned information to configure the different types of Promoted Listings reports. The request for this method does not use a payload or any URI parameters.


```js
ebay_sell_marketing.getReportMetadata(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [ReportMetadatas](#reportmetadatas)

### getReportMetadataForReportType
This call retrieves metadata that details the fields used by a specific Promoted Listings report type. Use the report_type path parameter to indicate metadata to retrieve. This method does not use a request payload.


```js
ebay_sell_marketing.getReportMetadataForReportType({
  "report_type": ""
}, context)
```

#### Input
* input `object`
  * report_type **required** `string`: The name of the report type whose metadata you want to get. For details about each report type, see ReportTypeEnum. Valid values: &nbsp;&nbsp;&nbsp;ACCOUNT_PERFORMANCE_REPORT &nbsp;&nbsp;&nbsp;CAMPAIGN_PERFORMANCE_REPORT &nbsp;&nbsp;&nbsp;CAMPAIGN_PERFORMANCE_SUMMARY_REPORT &nbsp;&nbsp;&nbsp;LISTING_PERFORMANCE_REPORT &nbsp;&nbsp;&nbsp;INVENTORY_PERFORMANCE_REPORT

#### Output
* output [ReportMetadata](#reportmetadata)

### getReportTasks
This method returns information on all the existing report tasks related to a seller. Use the report_task_statuses query parameter to control which reports to return. You can paginate the result set by specifying a limit, which dictates how many report tasks to return on each page of the response. Use the offset parameter to specify how many reports to skip in the result set before returning the first result.


```js
ebay_sell_marketing.getReportTasks({}, context)
```

#### Input
* input `object`
  * limit `string`: Specifies the maximum number of report tasks to return on a page in the paginated response. Default: 10 Maximum: 500
  * offset `string`: Specifies the number of report tasks to skip in the result set before returning the first report in the paginated response. Combine offset with the limit query parameter to control the reports returned in the response. For example, if you supply an offset of 0 and a limit of 10, the response contains the first 10 reports from the complete list of report tasks retrieved by the call. If offset is 10 and limit is 10, the first page of the response contains reports 11-20 from the complete result set. Default: 0
  * report_task_statuses `string`: This parameter filters the returned report tasks by their status. Supply a comma-separated list of the report statuses you want returned. The results are filtered to include only the report statuses you specify. Note: The results might not include some report tasks if other search conditions exclude them. Valid values: &nbsp;&nbsp;&nbsp;PENDING &nbsp;&nbsp;&nbsp;SUCCESS &nbsp;&nbsp;&nbsp;FAILED

#### Output
* output [ReportTaskPagedCollection](#reporttaskpagedcollection)

### createReportTask
This method creates a report task, which generates a Promoted Listings report based on the values specified in the call. The report is generated based on the criteria you specify, including the report type, the report's dimensions and metrics, the report's start and end dates, the listings to include in the report, and more. Metrics are the quantitative measurements in the report while dimensions specify the attributes of the data included in the reports. When creating a report task, you can specify the items you want included in the report. The items you specify, using either listingId or inventoryReference values, must be in a Promoted Listings campaign for them to be included in the report. For details on the required and optional fields for each report type, see Creating Promoted Listings reports. This call returns the URL to the report task in the Location response header, and the URL includes the report-task ID. Reports often take time to generate and it's common for this call to return an HTTP status of 202, which indicates the report is being generated. Call getReportTasks (or getReportTask with the report-task ID) to determine the status of a Promoted Listings report. When a report is complete, eBay sets its status to SUCCESS and you can download it using the URL returned in the reportHref field of the getReportTask call. Report files are tab-separated value gzip files with a file extension of .tsv.gz. Note: This call fails if you don't submit all the required fields for the specified report type. Fields not supported by the specified report type are ignored. Call getReportMetadata to retrieve a list of the fields you need to configure for each Promoted Listings report type.


```js
ebay_sell_marketing.createReportTask({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [CreateReportTask](#createreporttask)

#### Output
*Output schema unknown*

### deleteReportTask
This call deletes the report task specified by the report_task_id path parameter. This method also deletes any reports generated by the report task. Report task IDs are generated by eBay when you call createReportTask. Get a complete list of a seller's report-task IDs by calling getReportTasks.


```js
ebay_sell_marketing.deleteReportTask({
  "report_task_id": ""
}, context)
```

#### Input
* input `object`
  * report_task_id **required** `string`: A unique eBay-assigned ID for the report task that's generated when the report task is created by a call to createReportTask.

#### Output
*Output schema unknown*

### getReportTask
This call returns the details of a specific Promoted Listings report task, as specified by the report_task_id path parameter. The report task includes the report criteria (such as the report dimensions, metrics, and included listing) and the report-generation rules (such as starting and ending dates for the specified report task). Report-task IDs are generated by eBay when you call createReportTask. Get a complete list of a seller's report-task IDs by calling getReportTasks.


```js
ebay_sell_marketing.getReportTask({
  "report_task_id": ""
}, context)
```

#### Input
* input `object`
  * report_task_id **required** `string`: A unique eBay-assigned ID for the report task that's generated when the report task is created by a call to createReportTask.

#### Output
* output [ReportTask](#reporttask)

### createItemPriceMarkdownPromotion
This method creates an item price markdown promotion (know simply as a &quot;markdown promotion&quot;) where a discount amount is applied directly to the items included the promotion. Discounts can be specified as either a monetary amount or a percentage off the standard sales price. eBay highlights promoted items by placing teasers for the items throughout the online sales flows. Unlike an item promotion, a markdown promotion does not require the buyer meet a &quot;threshold&quot; before the offer takes effect. With markdown promotions, all the buyer needs to do is purchase the item to receive the promotion benefit. Important: There are some restrictions for which listings are available for price markdown promotions. For details, see Promotions Manager requirements and restrictions. In addition, we recommend you list items at competitive prices before including them in your markdown promotions. For an extensive list of pricing recommendations, see the Growth tab in Seller Hub. There are two ways to add items to markdown promotions: Key-based promotions select items using either the listing IDs or inventory reference IDs of the items you want to promote. Note that if you use inventory reference IDs, you must specify both the inventoryReferenceId and the associated inventoryReferenceType of the item(s) you want to include the promotion. Rule-based promotions select items using a list of eBay category IDs or seller Store category IDs. Rules can further constrain items in a promotion by minimum and maximum prices, brands, and item conditions. New promotions must be created in either a DRAFT or a SCHEDULED state. Use the DRAFT state when you are initially creating a promotion and you want to be sure it's correctly configured before scheduling it to run. When you create a promotion, the promotion ID is returned in the Location response header. Use this ID to reference the promotion in subsequent requests (such as to schedule a promotion that's in a DRAFT state). Tip: Refer to Promotions Manager in the Selling Integration Guide for details and examples showing how to create and manage seller promotions. Markdown promotions are available on all eBay marketplaces. For more information, see Promotions Manager requirements and restrictions.


```js
ebay_sell_marketing.createItemPriceMarkdownPromotion({}, context)
```

#### Input
* input `object`
  * body [ItemPriceMarkdown](#itempricemarkdown)

#### Output
* output `object`

### deleteItemPriceMarkdownPromotion
This method deletes the item price markdown promotion specified by the promotion_id path parameter. Call getPromotions to retrieve the IDs of a seller's promotions. You can delete any promotion with the exception of those that are currently active (RUNNING). To end a running promotion, call updateItemPriceMarkdownPromotion and adjust the endDate field as appropriate.


```js
ebay_sell_marketing.deleteItemPriceMarkdownPromotion({
  "promotion_id": ""
}, context)
```

#### Input
* input `object`
  * promotion_id **required** `string`: This path parameter takes a concatenation of the ID of the promotion you want to delete plus the marketplace ID on which the promotion is hosted. Concatenate the two values by separating them with an &quot;at sign&quot; (@). The ID of the promotion (promotionId) is a unique eBay-assigned value that's generated when the promotion is created. The Marketplace ID is the ENUM value of eBay marketplace where the promotion is hosted. Example: 115001954505@EBAY_US

#### Output
*Output schema unknown*

### getItemPriceMarkdownPromotion
This method returns the complete details of the item price markdown promotion that's indicated by the promotion_id path parameter. Call getPromotions to retrieve the IDs of a seller's promotions.


```js
ebay_sell_marketing.getItemPriceMarkdownPromotion({
  "promotion_id": ""
}, context)
```

#### Input
* input `object`
  * promotion_id **required** `string`: This path parameter takes a concatenation of the ID of the promotion you want to get plus the marketplace ID on which the promotion is hosted. Concatenate the two values by separating them with an &quot;at sign&quot; (@). The ID of the promotion (promotionId) is a unique eBay-assigned value that's generated when the promotion is created. The Marketplace ID is the ENUM value of eBay marketplace where the promotion is hosted. Example: 115001954505@EBAY_US

#### Output
* output [ItemPriceMarkdown](#itempricemarkdown)

### updateItemPriceMarkdownPromotion
This method updates the specified item price markdown promotion with the new configuration that you supply in the payload of the request. Specify the promotion you want to update using the promotion_id path parameter. Call getPromotions to retrieve the IDs of a seller's promotions. When updating a promotion, supply all the fields that you used to configure the original promotion (and not just the fields you are updating). eBay replaces the specified promotion with the values you supply in the update request and if you don't pass a field that currently has a value, the update request fails. The parameters you are allowed to update with this request depend on the status of the promotion you're updating: DRAFT or SCHEDULED promotions: You can update any of the parameters in these promotions that have not yet started to run, including the discountRules. RUNNING promotions: You can change the endDate and the item's inventory but you cannot change the promotional discount or the promotion's start date. ENDED promotions: Nothing can be changed.


```js
ebay_sell_marketing.updateItemPriceMarkdownPromotion({
  "promotion_id": ""
}, context)
```

#### Input
* input `object`
  * promotion_id **required** `string`: This path parameter takes a concatenation of the ID of the promotion you want to update plus the marketplace ID on which the promotion is hosted. Concatenate the two values by separating them with an &quot;at sign&quot; (@). The ID of the promotion (promotionId) is a unique eBay-assigned value that's generated when the promotion is created. The Marketplace ID is the ENUM value of eBay marketplace where the promotion is hosted. Example: 115001954505@EBAY_US
  * body [ItemPriceMarkdown](#itempricemarkdown)

#### Output
* output `object`

### createItemPromotion
This method creates an item promotion, where the buyer receives a discount when they meet the buying criteria that's set for the promotion. Known here as &quot;threshold promotions&quot;, these promotions trigger when a threshold is met. eBay highlights promoted items by placing teasers for the promoted items throughout the online buyer flows. Discounts are specified as either a monetary amount or a percentage off the standard sales price of a listing, letting you offer deals such as &quot;Buy 1 Get 1&quot; and &quot;Buy $50, get 20% off&quot;. Volume pricing promotions increase the value of the discount as the buyer increases the quantity they purchase. There are two ways to add items to a threshold promotion: Key-based promotions select items using either the listing IDs or inventory reference IDs of the items you want to promote. Note that if you use inventory reference IDs, you must specify both the inventoryReferenceId and the associated inventoryReferenceType of the item(s) you want to include the promotion. Rule-based promotions select items using a list of eBay category IDs or seller Store category IDs. Rules can further constrain items in a promotion by minimum and maximum prices, brands, and item conditions. You must create a new promotion either a DRAFT or SCHEDULED state. Use the DRAFT state when you are initially creating a promotion and you want to be sure it's correctly configured before scheduling it to run. When you create a promotion, the promotion ID is returned in the Location response header. Use this ID to reference the promotion in subsequent requests. Tip: Refer to the Selling Integration Guide for details and examples showing how to create and manage threshold promotions using the Promotions Manager. For information on the eBay marketplaces that support item promotions, see Promotions Manager requirements and restrictions.


```js
ebay_sell_marketing.createItemPromotion({}, context)
```

#### Input
* input `object`
  * body [ItemPromotion](#itempromotion)

#### Output
* output [BaseResponse](#baseresponse)

### deleteItemPromotion
This method deletes the threshold promotion specified by the promotion_id path parameter. Call getPromotions to retrieve the IDs of a seller's promotions. You can delete any promotion with the exception of those that are currently active (RUNNING). To end a running threshold promotion, call updateItemPromotion and adjust the endDate field as appropriate.


```js
ebay_sell_marketing.deleteItemPromotion({
  "promotion_id": ""
}, context)
```

#### Input
* input `object`
  * promotion_id **required** `string`: This path parameter takes a concatenation of the ID of the promotion you want to delete plus the marketplace ID on which the promotion is hosted. Concatenate the two values by separating them with an &quot;at sign&quot; (@). The ID of the promotion (promotionId) is a unique eBay-assigned value that's generated when the promotion is created. The Marketplace ID is the ENUM value of eBay marketplace where the promotion is hosted. Example: 115001954505@EBAY_US

#### Output
*Output schema unknown*

### getItemPromotion
This method returns the complete details of the threshold promotion specified by the promotion_id path parameter. Call getPromotions to retrieve the IDs of a seller's promotions.


```js
ebay_sell_marketing.getItemPromotion({
  "promotion_id": ""
}, context)
```

#### Input
* input `object`
  * promotion_id **required** `string`: This path parameter takes a concatenation of the ID of the promotion you want to retrieve plus the marketplace ID on which the promotion is hosted. Concatenate the two values by separating them with an &quot;at sign&quot; (@). The ID of the promotion (promotionId) is a unique eBay-assigned value that's generated when the promotion is created. The Marketplace ID is the ENUM value of eBay marketplace where the promotion is hosted. Example: 115001954505@EBAY_US

#### Output
* output [ItemPromotionResponse](#itempromotionresponse)

### updateItemPromotion
This method updates the specified threshold promotion with the new configuration that you supply in the request. Indicate the promotion you want to update using the promotion_id path parameter. Call getPromotions to retrieve the IDs of a seller's promotions. When updating a promotion, supply all the fields that you used to configure the original promotion (and not just the fields you are updating). eBay replaces the specified promotion with the values you supply in the update request and if you don't pass a field that currently has a value, the update request will fail. The parameters you are allowed to update with this request depend on the status of the promotion you're updating: DRAFT or SCHEDULED promotions: You can update any of the parameters in these promotions that have not yet started to run, including the discountRules. RUNNING or PAUSED promotions: You can change the endDate and the item's inventory but you cannot change the promotional discount or the promotion's start date. ENDED promotions: Nothing can be changed. Tip: When updating a RUNNING or PAUSED promotion, set the status field to SCHEDULED for the update request. When the promotion is updated, the previous status (either RUNNING or PAUSED) is retained.


```js
ebay_sell_marketing.updateItemPromotion({
  "promotion_id": ""
}, context)
```

#### Input
* input `object`
  * promotion_id **required** `string`: This path parameter takes a concatenation of the ID of the promotion you want to update plus the marketplace ID on which the promotion is hosted. Concatenate the two values by separating them with an &quot;at sign&quot; (@). The ID of the promotion (promotionId) is a unique eBay-assigned value that's generated when the promotion is created. The Marketplace ID is the ENUM value of eBay marketplace where the promotion is hosted. Example: 115001954505@EBAY_US
  * body [ItemPromotion](#itempromotion)

#### Output
* output [BaseResponse](#baseresponse)

### getPromotions
This method returns a list of a seller's undeleted promotions. The call returns up to 200 currently-available promotions on the specified marketplace. While the response body does not include the promotion's discountRules or inventoryCriterion containers, it does include the promotionHref (which you can use to retrieve the complete details of the promotion). Use query parameters to sort and filter the results by the number of promotions to return, the promotion state or type, and the eBay marketplace. You can also supply keywords to limit the response to the promotions that contain that keywords in the title of the promotion. Maximum returned: 200


```js
ebay_sell_marketing.getPromotions({
  "marketplace_id": ""
}, context)
```

#### Input
* input `object`
  * limit `string`: Specifies the maximum number of promotions returned on a page from the result set. Default: 200 Maximum: 200
  * marketplace_id **required** `string`: The eBay marketplace ID of the site where the promotion is hosted. Valid values: EBAY_AU = Australia EBAY_DE = Germany EBAY_ES = Spain EBAY_FR = France EBAY_GB = Great Britain EBAY_IT = Italy EBAY_US = United States
  * offset `string`: Specifies the number of promotions to skip in the result set before returning the first promotion in the paginated response. Combine offset with the limit query parameter to control the items returned in the response. For example, if you supply an offset of 0 and a limit of 10, the first page of the response contains the first 10 items from the complete list of items retrieved by the call. If offset is 10 and limit is 20, the first page of the response contains items 11-30 from the complete result set. Default: 0
  * promotion_status `string`: Specifies the promotion state by which you want to filter the results. The response contains only those promotions that match the state you specify. Valid values: DRAFT SCHEDULED RUNNING PAUSED ENDEDMaximum number of input values: 1
  * promotion_type `string`: Filters the returned promotions based on their campaign promotion type. Specify one of the following values to indicate the promotion type you want returned: MARKDOWN_SALE &ndash; A markdown promotion set with createItemPriceMarkdownPromotion. ORDER_DISCOUNT &ndash; A threshold promotion set with createItemPromotion. VOLUME_DISCOUNT &ndash; A volume pricing promotion set with createItemPromotion.
  * q `string`: A string consisting of one or more keywords. eBay filters the response by returning only the promotions that contain the supplied keywords in the promotion title. Example: &quot;iPhone&quot; or &quot;Harry Potter.&quot; Commas that separate keywords are ignored. For example, a keyword string of &quot;iPhone, iPad&quot; equals &quot;iPhone iPad&quot;, and each results in a response that contains promotions with both &quot;iPhone&quot; and &quot;iPad&quot; in the title.
  * sort `string`: Specifies the order for how to sort the response. If you precede the supplied value with a dash, the response is sorted in reverse order. Example: &nbsp;&nbsp;&nbsp;sort=END_DATE &nbsp; Sorts the promotions in the response by their end dates in ascending order &nbsp;&nbsp;&nbsp;sort=-PROMOTION_NAME &nbsp; Sorts the promotions by their promotion name in descending alphabetical order (Z-Az-a) Valid values: START_DATE END_DATE PROMOTION_NAME For implementation help, refer to eBay API documentation at https://developer.ebay.com/api-docs/sell/marketing/types/csb:SortField

#### Output
* output [PromotionsPagedCollection](#promotionspagedcollection)

### getListingSet
This method returns the set of listings associated with the promotion_id specified in the path parameter. Call getPromotions to retrieve the IDs of a seller's promotions. The listing details are returned in a paginated set and you can control and results returned using the following query parameters: limit, offset, q, sort, and status. Maximum associated listings returned: 200 Default number of listings returned: 200


```js
ebay_sell_marketing.getListingSet({
  "promotion_id": ""
}, context)
```

#### Input
* input `object`
  * limit `string`: Specifies the maximum number of promotions returned on a page from the result set. Default: 200 Maximum: 200
  * offset `string`: Specifies the number of promotions to skip in the result set before returning the first promotion in the paginated response. Combine offset with the limit query parameter to control the items returned in the response. For example, if you supply an offset of 0 and a limit of 10, the first page of the response contains the first 10 items from the complete list of items retrieved by the call. If offset is 10 and limit is 20, the first page of the response contains items 11-30 from the complete result set. Default: 0
  * promotion_id **required** `string`: This path parameter takes a concatenation of the ID of the promotion you want to get plus the marketplace ID on which the promotion is hosted. Concatenate the two values by separating them with an &quot;at sign&quot; (@). The ID of the promotion (promotionId) is a unique eBay-assigned value that's generated when the promotion is created. The Marketplace ID is the ENUM value of eBay marketplace where the promotion is hosted. Example: 115001954505@EBAY_US
  * q `string`: Reserved for future use.
  * sort `string`: Specifies the order in which to sort the associated listings in the response. If you precede the supplied value with a dash, the response is sorted in reverse order. Example: &nbsp;&nbsp;&nbsp;sort=PRICE - Sorts the associated listings by their current price in ascending order &nbsp;&nbsp;&nbsp;sort=-TITLE - Sorts the associated listings by their title in descending alphabetical order (Z-Az-a) Valid values: AVAILABLE PRICE TITLE For implementation help, refer to eBay API documentation at https://developer.ebay.com/api-docs/sell/marketing/types/csb:SortField
  * status `string`: This query parameter applies only to markdown promotions. It filters the response based on the indicated status of the promotion. Currently, the only supported value for this parameter is MARKED_DOWN, which indicates active markdown promotions. For implementation help, refer to eBay API documentation at https://developer.ebay.com/api-docs/sell/marketing/types/sme:ItemMarkdownStatusEnum

#### Output
*Output schema unknown*

### pausePromotion
This method pauses a currently-active (RUNNING) threshold promotion and changes the state of the promotion from RUNNING to PAUSED. Pausing a promotion makes the promotion temporarily unavailable to buyers and any currently-incomplete transactions will not receive the promotional offer until the promotion is resumed. Also, promotion teasers are not displayed when a promotion is paused. Pass the ID of the promotion you want to pause using the promotion_id path parameter. Call getPromotions to retrieve the IDs of the seller's promotions. Note: You can only pause threshold promotions (you cannot pause markdown promotions).


```js
ebay_sell_marketing.pausePromotion({
  "promotion_id": ""
}, context)
```

#### Input
* input `object`
  * promotion_id **required** `string`: This path parameter takes a concatenation of the ID of the promotion you want to pause plus the marketplace ID on which the promotion is hosted. Concatenate the two values by separating them with an &quot;at sign&quot; (@). The ID of the promotion (promotionId) is a unique eBay-assigned value that's generated when the promotion is created. The Marketplace ID is the ENUM value of eBay marketplace where the promotion is hosted. Example: 115001954505@EBAY_US

#### Output
*Output schema unknown*

### resumePromotion
This method restarts a threshold promotion that was previously paused and changes the state of the promotion from PAUSED to RUNNING. Only promotions that have been previously paused can be resumed. Resuming a promotion reinstates the promotional teasers and any transactions that were in motion before the promotion was paused will again be eligible for the promotion. Pass the ID of the promotion you want to resume using the promotion_id path parameter. Call getPromotions to retrieve the IDs of the seller's promotions.


```js
ebay_sell_marketing.resumePromotion({
  "promotion_id": ""
}, context)
```

#### Input
* input `object`
  * promotion_id **required** `string`: This path parameter takes a concatenation of the ID of the promotion you want to resume plus the marketplace ID on which the promotion is hosted. Concatenate the two values by separating them with an &quot;at sign&quot; (@). The ID of the promotion (promotionId) is a unique eBay-assigned value that's generated when the promotion is created. The Marketplace ID is the ENUM value of eBay marketplace where the promotion is hosted. Example: 115001954505@EBAY_US

#### Output
*Output schema unknown*

### getPromotionReports
This method generates a report that lists the seller's running, paused, and ended promotions for the specified eBay marketplace. The result set can be filtered by the promotion status and the number of results to return. You can also supply keywords to limit the report to promotions that contain the specified keywords. Specify the eBay marketplace for which you want the report run using the marketplace_id query parameter. Supply additional query parameters to control the report as needed.


```js
ebay_sell_marketing.getPromotionReports({
  "marketplace_id": ""
}, context)
```

#### Input
* input `object`
  * limit `string`: Specifies the maximum number of promotions returned on a page from the result set. Default: 200 Maximum: 200
  * marketplace_id **required** `string`: The eBay marketplace ID of the site for which you want the promotions report. Valid values: EBAY_AU = Australia EBAY_DE = Germany EBAY_ES = Spain EBAY_FR = France EBAY_GB = Great Britain EBAY_IT = Italy EBAY_US = United States
  * offset `string`: Specifies the number of promotions to skip in the result set before returning the first promotion in the paginated response. Combine offset with the limit query parameter to control the items returned in the response. For example, if you supply an offset of 0 and a limit of 10, the first page of the response contains the first 10 items from the complete list of items retrieved by the call. If offset is 10 and limit is 20, the first page of the response contains items 11-30 from the complete result set. Default: 0
  * promotion_status `string`: Limits the results to the promotions that are in the state specified by this query parameter. Valid values: DRAFT SCHEDULED RUNNING PAUSED ENDEDMaximum number of values supported: 1
  * promotion_type `string`: Filters the returned promotions in the report based on their campaign promotion type. Specify one of the following values to indicate the promotion type you want returned in the report: MARKDOWN_SALE &ndash; A markdown promotion set with createItemPriceMarkdownPromotion. ORDER_DISCOUNT &ndash; A threshold promotion set with createItemPromotion. VOLUME_DISCOUNT &ndash; A volume pricing promotion set with createItemPromotion.
  * q `string`: A string consisting of one or more keywords. eBay filters the response by returning only the promotions that contain the supplied keywords in the promotion title. Example: &quot;iPhone&quot; or &quot;Harry Potter.&quot; Commas that separate keywords are ignored. For example, a keyword string of &quot;iPhone, iPad&quot; equals &quot;iPhone iPad&quot;, and each results in a response that contains promotions with both &quot;iPhone&quot; and &quot;iPad&quot; in the title.

#### Output
* output [PromotionsReportPagedCollection](#promotionsreportpagedcollection)

### getPromotionSummaryReport
This method generates a report that summarizes the seller's promotions for the specified eBay marketplace. The report returns information on RUNNING, PAUSED, and ENDED promotions (deleted reports are not returned) and summarizes the seller's campaign performance for all promotions on a given site. For information about summary reports, see Reading the item promotion Summary report.


```js
ebay_sell_marketing.getPromotionSummaryReport({
  "marketplace_id": ""
}, context)
```

#### Input
* input `object`
  * marketplace_id **required** `string`: The eBay marketplace ID of the site you for which you want a promotion summary report. Valid values: EBAY_AU = Australia EBAY_DE = Germany EBAY_ES = Spain EBAY_FR = France EBAY_GB = Great Britain EBAY_IT = Italy EBAY_US = United States

#### Output
* output [SummaryReportResponse](#summaryreportresponse)



## Definitions

### Ad
* Ad `object`: This type defines the fields for an ad.
  * adId `string`: A unique eBay-assigned ID for the ad that is generated when the ad is created.
  * bidPercentage `string`: The user-defined bid percentage (also known as the ad rate) sets level to which eBay should raise the visibility of the associated listing across the eBay buyer flows. The value is also used to calculate the Promoted Listings fee. Minimum value: 1.0 Maximum value: 100.0
  * inventoryReferenceId `string`: An ID that identifies an a single-item listing or multiple-variation listing that is managed with the Inventory API. The inventory reference ID is a seller-defined value that can be either an SKU for a single-item listing or an inventoryItemGroupKey for a multiple-value listing. An inventoryItemGroupKey is a value that the seller defines to indicate a listing that's the parent of a inventory item group (a multiple-variation listing, such as a listing for shirt that's available in multiple sizes and colors). You must always specify both an inventoryRreferenceId and an inventoryReferenceType to indicate an item that's managed with the Inventory API.
  * inventoryReferenceType `string`: Indicates the type of item the inventoryReferenceId references. The item can be either an INVENTORY_ITEM or INVENTORY_ITEM_GROUP. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:InventoryReferenceTypeEnum'>eBay API documentation</a>
  * listingId `string`: A unique eBay-assigned ID that is generated when a listing is created via the Trading API.

### AdIds
* AdIds `object`: This type is a container for a list of ad IDs.
  * adIds `array`: A list of ad ID's.
    * items `string`

### AdPagedCollection
* AdPagedCollection `object`: This type defines the fields that paginate the ads returned by the request. The entire result set consists of 0 or more sequenced response pages, where each page consists of 0 or more items from the complete result set.
  * ads `array`: A list of ads contained on this page from the paginated response.
    * items [Ad](#ad)
  * href `string`: The URI of the current page of results from the result set.
  * limit `integer`: The number of items returned on a single page from the result set. This value can be set in the request with the limit query parameter.
  * next `string`: The URI for the following page of results. This value is returned only if there is an additional page of results to display from the result set. Max length: 2048
  * offset `integer`: The number of results skipped in the result set before listing the first returned result. This value can be set in the request with the offset query parameter. Note: The items in a paginated result set use a zero-based list where the first item in the list has an offset of 0.
  * prev `string`: The URI for the preceding page of results. This value is returned only if there is a previous page of results to display from the result set. Max length: 2048
  * total `integer`: The total number of items retrieved in the result set. If no items are found, this field is returned with a value of 0.

### AdReference
* AdReference `object`: This type defines the fields for an ad ID and its associated URL.
  * adId `string`: A unique eBay-assigned ID for an ad. This ID is generated when an ad is created.
  * href `string`: The URI of an ad. You can use this URI to retrieve the ad.

### AdReferences
* AdReferences `object`: This type is a container for a list of ad IDs and their associated URIs.
  * ads `array`: A list of ad IDs and the URIs that point to them.
    * items [AdReference](#adreference)

### AdResponse
* AdResponse `object`: This type defines the fields returned in an ad response.
  * adId `string`: A unique eBay-assigned ID for an ad. This ID is generated when an ad is created.
  * errors `array`: An array of errors associated with the request.
    * items [Error](#error)
  * href `string`: The URI that points to the ad.
  * listingId `string`: A unique eBay-assigned ID for a listing that is generated when the listing is created. Note: This field accepts both listing IDs, as generated by the Inventory API, and an item IDs, as used in the eBay Traditional API set (e.g., the Trading and Finding APIs).
  * statusCode `integer`: An HTTP status code that indicates the response-status of the request. Check this code to see if the ad was successful created.

### Ads
* Ads `object`: This type defines the container for an array of ads.
  * ads `array`: A list of ad IDs and the URIs that point to them.
    * items [Ad](#ad)

### Amount
* Amount `object`: A complex type that describes the value of a monetary amount as represented by a global currency.
  * currency `string`: The base currency applied to the value field to establish a monetary amount. The currency is represented as a 3-letter ISO 4217 currency code. For example, the code for the Canadian Dollar is CAD. Default: The default currency of the eBay marketplace that hosts the listing. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/ba:CurrencyCodeEnum'>eBay API documentation</a>
  * value `string`: The monetary amount in the specified currency. Required in the amount type.

### BaseResponse
* BaseResponse `object`: This type defines the fields for any warning error messages.
  * warnings `array`: The container for any warning error messages generated by the request. Warnings are not fatal in that they do not prevent the call from running and returning a response, but they should be reviewed to ensure your requests are returning the responses you expect.
    * items [Error](#error)

### BulkAdResponse
* BulkAdResponse `object`: This type defines the fields for the create ads in bulk response.
  * responses `array`: A list of ads processed by the call.
    * items [AdResponse](#adresponse)

### BulkCreateAdRequest
* BulkCreateAdRequest `object`: This type defines the fields for the create ads in bulk by listing IDs.
  * requests `array`: An array of listing IDs and their associated bid percentages, which the request uses to create ads in bulk. This request accepts both listing IDs, as generated by the Inventory API, and an item IDs, as used in the eBay Traditional API set (e.g., the Trading and Finding APIs). Maximum: 500 IDs per call
    * items [CreateAdRequest](#createadrequest)

### BulkCreateAdsByInventoryReferenceRequest
* BulkCreateAdsByInventoryReferenceRequest `object`: This type defines the fields used to create ads in bulk by inventory reference IDs.
  * requests `array`: A lsit of inventory reference ID and inventory reference type pairs, and the bid percentage, which the call uses to create ads in bulk.
    * items [CreateAdsByInventoryReferenceRequest](#createadsbyinventoryreferencerequest)

### BulkCreateAdsByInventoryReferenceResponse
* BulkCreateAdsByInventoryReferenceResponse `object`: This type defines the response fields used by the bulkCreateAdsByInventoryReference method.
  * responses `array`: A list of inventory reference IDs, and their bid percentages, that the call processed.
    * items [CreateAdsByInventoryReferenceResponse](#createadsbyinventoryreferenceresponse)

### BulkDeleteAdRequest
* BulkDeleteAdRequest `object`: This type defines the fields that the call uses to remove ads in bulk.
  * requests `array`: An array of the listing IDs that identify the ads to remove. Note: This request accepts both listing IDs, as generated by the Inventory API, and an item IDs, as used in the eBay Traditional API set (e.g., the Trading and Finding APIs).
    * items [DeleteAdRequest](#deleteadrequest)

### BulkDeleteAdResponse
* BulkDeleteAdResponse `object`: This type defines a container that lists the ads that bulkDeleteAdsByListingId deleted.
  * responses `array`: An array of the ads that were deleted by the bulkDeleteAdsByListingId request, including information associated with each individual delete request.
    * items [DeleteAdResponse](#deleteadresponse)

### BulkDeleteAdsByInventoryReferenceRequest
* BulkDeleteAdsByInventoryReferenceRequest `object`: This type defines the request fields that bulkDeleteAdsByInventoryReference uses to delete ads in bulk.
  * requests `array`: A list of inventory referenceID and inventory reference type pairs that specify the set of ads to remove in bulk.
    * items [DeleteAdsByInventoryReferenceRequest](#deleteadsbyinventoryreferencerequest)

### BulkDeleteAdsByInventoryReferenceResponse
* BulkDeleteAdsByInventoryReferenceResponse `object`: This type defines a container that lists the ads that bulkDeleteAdsByInventoryReference deleted.
  * responses `array`: An array of the ads that were deleted by the bulkDeleteAdsByInventoryReference request, including information associated with each individual delete request.
    * items [DeleteAdsByInventoryReferenceResponse](#deleteadsbyinventoryreferenceresponse)

### Campaign
* Campaign `object`: This type defines the fields that describe an ad campaign.
  * campaignCriterion [CampaignCriterion](#campaigncriterion)
  * campaignId `string`: A unique eBay-assigned ID for a campaign. This ID is generated when a campaign is created.
  * campaignName `string`: A seller-defined name for the campaign. This value must be unique for the seller. You can use any alphanumeric characters in the name, except the less than (&lt;) or greater than (&gt;) characters.Max length: 80 characters
  * campaignStatus `string`: Indicates the status of the campaign, such as RUNNING, PAUSED, and ENDED. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:CampaignStatusEnum'>eBay API documentation</a>
  * endDate `string`: The date and time the campaign ends, in UTC format (yyyy-MM-ddThh:mm:ssZ). If this field is blank (code&gt;null), it indicates a campaign that has no end date. For display purposes, convert this time into the local time of the seller.
  * fundingStrategy [FundingStrategy](#fundingstrategy)
  * marketplaceId `string`: The ID of the eBay marketplace where the campaign is hosted. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/ba:MarketplaceIdEnum'>eBay API documentation</a>
  * startDate `string`: The date and time the campaign starts, in UTC format (yyyy-MM-ddThh:mm:ssZ). For display purposes, convert this time into the local time of the seller. On the date specified, the service derives the keywords for each listing in the campaign, creates an ad for each listing, and associates each new ad with the campaign. The campaign starts after this process is completed. The amount of time it takes the service to start the campaign depends on the number of listings in the campaign. Call getCampaign to check the status of the campaign.

### CampaignCriterion
* CampaignCriterion `object`: This type defines the fields for specifying the criterion (selection rule) settings of an ad campaign.
  * autoSelectFutureInventory `boolean`: Reserved for future use.
  * criterionType `string`: This enum defines the criterion (selection rule) types. Currently, the only criterion type supported is INVENTORY_PARTITION, and you must specify this value if you manage your items with the Inventory API and you want to include items based on their inventory reference IDs. Leave this field blank if you want to create campaign ads based on listing IDs. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:CriterionTypeEnum'>eBay API documentation</a>
  * selectionRules `array`: Set of rules that selects the listings to include in the campaign. The following rules apply to the selection rules: Each set of selection rules are ORed with each other. Individual rules within a selection rule set are ANDed with each other. If a rule has a list of values (such a list of category IDs), the item need match only one of the values of the rule in order to be included in the campaign. Note: If an item matches multiple sets of rules or multiple rules within a selection rule set, the item is considered only once.Maximum number of rules: 10
    * items [SelectionRule](#selectionrule)

### CampaignPagedCollection
* CampaignPagedCollection `object`: This type defines the fields that paginate the campaigns returned by the request. The entire result set consists of 0 or more sequenced response pages, where each page consists of 0 or more items from the complete result set.
  * campaigns `array`: A list of campaigns contained on this page from the paginated response.
    * items [Campaign](#campaign)
  * href `string`: The URI of the current page of results from the result set.
  * limit `integer`: The number of items returned on a single page from the result set. This value can be set in the request with the limit query parameter.
  * next `string`: The URI for the following page of results. This value is returned only if there is an additional page of results to display from the result set. Max length: 2048
  * offset `integer`: The number of results skipped in the result set before listing the first returned result. This value can be set in the request with the offset query parameter. Note: The items in a paginated result set use a zero-based list where the first item in the list has an offset of 0.
  * prev `string`: The URI for the preceding page of results. This value is returned only if there is a previous page of results to display from the result set. Max length: 2048
  * total `integer`: The total number of items retrieved in the result set. If no items are found, this field is returned with a value of 0.

### Campaigns
* Campaigns `object`: This type contains a list of campaigns.
  * campaigns `array`: An array of campaigns and their details.
    * items [Campaign](#campaign)

### CloneCampaignRequest
* CloneCampaignRequest `object`: This type defines the fields needed for a clone-campaign request.
  * campaignName `string`: A seller-defined name for the newly-cloned campaign. This value must be unique for the seller. You can use any alphanumeric characters in the name, except the less than (&lt;) or greater than (&gt;) characters.Max length: 80 characters
  * endDate `string`: The date and time the campaign ends, in UTC format (yyyy-MM-ddThh:mm:ssZ). If this field is blank (code&gt;null), it indicates a campaign that has no end date. For display purposes, convert this time into the local time of the seller.
  * fundingStrategy [FundingStrategy](#fundingstrategy)
  * startDate `string`: The date and time the cloned campaign starts, in UTC format (yyyy-MM-ddThh:mm:ssZ). For display purposes, convert this time into the local time of the seller. On the date specified, the service derives the keywords for each listing in the campaign, creates an ad for each listing, and associates each new ad with the campaign. The campaign starts after this process is completed. The amount of time it takes the service to start the campaign depends on the number of listings in the campaign. Call getCampaign to check the status of the campaign.

### CreateAdRequest
* CreateAdRequest `object`: This type defines the fields for the create ad request.
  * bidPercentage `string`: The user-defined bid percentage (also known as the ad rate) sets the level that eBay increases the visibility in search results for the associated listing. The higher the bidPercentage value, the more eBay promotes the listing. The value specified here is also used to calculate the Promoted Listings fee. This percentage value is multiplied by the final sales price to determine the fee. The Promoted Listings fee is determined at the time the transaction completes and the seller is assessed the fee only when an item sells through a Promoted Listings ad campaign. bidPercentage is a single precision value that is guided by the following rules: These values are valid: &nbsp;&nbsp;&nbsp;1, &nbsp;&nbsp;&nbsp;1.0, &nbsp;&nbsp;&nbsp;4.1, &nbsp;&nbsp;&nbsp;5.0, &nbsp;&nbsp;&nbsp;5.5, ... These values are not valid: &nbsp;&nbsp;&nbsp;0.01, &nbsp;&nbsp;&nbsp;10.75, &nbsp;&nbsp;&nbsp;99.99, &nbsp;&nbsp;&nbsp;and so on. If a bid percentage is not provided for an ad, eBay uses the default bid percentage of the associated campaign.Minimum value: 1.0 Maximum value: 100.0
  * listingId `string`: A unique eBay-assigned ID for a listing that is generated when the listing is created. Note: This field accepts both listing IDs, as generated by the Inventory API, and an item IDs, as used in the eBay Traditional API set (e.g., the Trading and Finding APIs).

### CreateAdsByInventoryReferenceRequest
* CreateAdsByInventoryReferenceRequest `object`: This type defines the fields needed to create ads by inventory reference ID request.
  * bidPercentage `string`: The user-defined bid percentage (also known as the ad rate) sets the level that eBay increases the visibility of a listing across the eBay buyer flows. The higher the bidPercentage value, the more eBay promotes the listing. The value specified here is also used to calculate the Promoted Listings fee. This percentage value is multiplied by the final sales price to determine the fee. The Promoted Listings fee is determined at the time the transaction completes and the seller is assessed the fee only when an item sells through a Promoted Listings ad campaign. bidPercentage is a single precision value that is guided by the following rules: These values are valid: &nbsp;&nbsp;&nbsp;1, &nbsp;&nbsp;&nbsp;1.0, &nbsp;&nbsp;&nbsp;4.1, &nbsp;&nbsp;&nbsp;5.0, &nbsp;&nbsp;&nbsp;5.5, ... These values are not valid: &nbsp;&nbsp;&nbsp;0.01, &nbsp;&nbsp;&nbsp;10.75, &nbsp;&nbsp;&nbsp;99.99, &nbsp;&nbsp;&nbsp;and so on. If a bid percentage is not provided for an ad, eBay uses the default bid percentage of the associated campaign.Minimum value: 1.0 Maximum value: 100.0
  * inventoryReferenceId `string`: An ID that identifies an a single-item listing or multiple-variation listing that is managed with the Inventory API. The inventory reference ID is a seller-defined value that can be either an SKU for a single-item listing or an inventoryItemGroupKey for a multiple-value listing. An inventoryItemGroupKey is a value that the seller defines to indicate a listing that's the parent of a inventory item group (a multiple-variation listing, such as a listing for shirt that's available in multiple sizes and colors). You must always specify both an inventoryRreferenceId and an inventoryReferenceType to indicate an item that's managed with the Inventory API.
  * inventoryReferenceType `string`: Indicates the type of item the inventoryReferenceId references. The item can be either an INVENTORY_ITEM or INVENTORY_ITEM_GROUP. You must always pair an inventoryReferenceId with and inventoryReferenceType. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:InventoryReferenceTypeEnum'>eBay API documentation</a>

### CreateAdsByInventoryReferenceResponse
* CreateAdsByInventoryReferenceResponse `object`: This type defines the fields returned when you create an ad by inventory reference ID.
  * ads `array`: A list of ad IDs (based on their inventory reference IDs) and the URIs that point to them.
    * items [AdReference](#adreference)
  * errors `array`: An array of errors or warnings associated with the create-ads request.
    * items [Error](#error)
  * inventoryReferenceId `string`: An ID that identifies an a single-item listing or multiple-variation listing that is managed with the Inventory API. The inventory reference ID is a seller-defined value that can be either an SKU for a single-item listing or an inventoryItemGroupKey for a multiple-value listing.
  * inventoryReferenceType `string`: Indicates the type of item the inventoryReferenceId references. The item can be either an INVENTORY_ITEM or INVENTORY_ITEM_GROUP. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:InventoryReferenceTypeEnum'>eBay API documentation</a>
  * statusCode `integer`: An HTTP status code that indicates the response-status of the request. Check this code to see if the ads were successful created.

### CreateCampaignRequest
* CreateCampaignRequest `object`: This type defines the fields needed to create a campaign. To create a campaign, you need to specify a name, start and end dates, funding, marketplace, and optionally the criterion (selection rules).
  * campaignCriterion [CampaignCriterion](#campaigncriterion)
  * campaignName `string`: A seller-defined name for the campaign. This value must be unique for the seller. You can use any alphanumeric characters in the name, except the less than (&lt;) or greater than (&gt;) characters.Max length: 80 characters
  * endDate `string`: The date and time the campaign ends, in UTC format (yyyy-MM-ddThh:mm:ssZ). If this field is blank (code&gt;null), it indicates a campaign that has no end date. For display purposes, convert this time into the local time of the seller.
  * fundingStrategy [FundingStrategy](#fundingstrategy)
  * marketplaceId `string`: The ID of the eBay marketplace where the campaign is hosted. Note the X-EBAY-C-MARKETPLACE-Id header value is ignored for this purpose. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/ba:MarketplaceIdEnum'>eBay API documentation</a>
  * startDate `string`: The date and time the campaign starts, in UTC format (yyyy-MM-ddThh:mm:ssZ). For display purposes, convert this time into the local time of the seller. On the date specified, the service derives the keywords for each listing in the campaign, creates an ad for each listing, and associates each new ad with the campaign. The campaign starts after this process is completed. The amount of time it takes the service to start the campaign depends on the number of listings in the campaign. Call getCampaign to check the status of the campaign.

### CreateReportTask
* CreateReportTask `object`: This type defines the rules that govern the generation of a report task and the criteria that's used to create the report. The report-generation rules include the starting and ending dates for the report. Report-task criteria includes the report dimensions, metrics, listings covered in the report, and so on. For information on the required and optional fields for each report type, see Reading Promoted Listings reports.
  * campaignIds `array`: A list of campaign IDs to be included in the report task. Call getCampaigns to get a list of the current campaign IDs for a seller. Note: The API currently supports only a single campaign ID per report task. Maximum: 1 Required if reportType is set to CAMPAIGN_PERFORMANCE_REPORT or CAMPAIGN_PERFORMANCE_SUMMARY_REPORT.
    * items `string`
  * dateFrom `string`: The date defining the start of the timespan covered by the report. Format the timestamp as an ISO 8601 string, which is based on the 24-hour Coordinated Universal Time (UTC) clock. Promoted Listings reports are aggregated on a daily basis where each day begins and ends at midnight, Mountain Standard Time (MST). This time is calculated by subtracting seven hours from the Coordinated Universal Time (UTC). Because all reports are aggregated on a daily basis, only the date values in the supplied UTC string are considered (all time values are ignored). Format: [YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z Example: 2020-08-20T00:00:00.000Z
  * dateTo `string`: The date defining the end of the timespan covered by the report, formatted as an ISO 8601 string. Promoted Listings reports are aggregated on a daily basis and each day begins and ends at midnight, Mountain Standard Time (MST). Like the dateFrom field, you need to specify only date values in the string you pass in this field; all time values are ignored.
  * dimensions `array`: The list of the dimensions applied to the report. A dimension is an attribute to which the report data applies. For example, if you set dimensionKey to campaign_id in a Campaign Performance Report, the data will apply to the entire ad campaign. For information on the dimensions and how to specify them, see Reading Promoted Listings reports.
    * items [Dimension](#dimension)
  * inventoryReferences `array`: You can use this field to supply an array of items to include in the report if you manage your inventory with the Inventory API. This field is mutually exclusive with the listingIds field; if you populate this field, do not populate the listingIds field. An inventory reference identifies an item in your inventory using a pair of values, where the inventoryReferenceId can be either a seller-defined SKU value or an inventoryItemGroupKey, where an inventoryItemGroupKey is seller-defined ID for an inventory item group (a multiple-variation listing). Couple the inventoryReferenceId with an inventoryReferenceType identifier to fully identify an item in your inventory. Maximum: 500 items Required if you do not supply an array of listingId values or if you set reportType to INVENTORY_PERFORMANCE_REPORT.
    * items [InventoryReference](#inventoryreference)
  * listingIds `array`: Use this field to supply a array of the listing ID you want to include in the report. This field is mutually exclusive with the inventoryReferences field; if you populate this field, do not populate the inventoryReferences field. A listing ID is the eBay listing identifier that's generated when the listing is created. Note: This field accepts listingId values generated with both the Inventory API and the eBay Traditional APIs, such as the Trading and Finding APIs. Maximum: 500 listings Required if you do not supply an array of inventoryReferences values or if you set reportType to LISTING_PERFORMANCE_REPORT.
    * items `string`
  * marketplaceId `string`: The ID for the eBay marketplace on which the report is based. Maximum: 1 Required if reportType is set to ACCOUNT_PERFORMANCE_REPORT or INVENTORY_PERFORMANCE_REPORT. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/ba:MarketplaceIdEnum'>eBay API documentation</a>
  * metricKeys `array`: The list of metrics to be included in the report. Metrics are the quantitative measurements compiled into the report and the data returned is based on the specified dimension of the report. For example, if the dimension is campaign, the metrics for number of sales would be the number of sales in the campaign. However, if the dimension is listing, the number of sales represents the number of items sold in that listing. For information on metric keys and how to set them, see Reading Promoted Listings reports.Minimum: 1
    * items `string`
  * reportFormat `string`: The file format of the report. Currently, the only supported format is TSV_GZIP, which is a gzip file with tab separated values. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/plr:ReportFormatEnum'>eBay API documentation</a>
  * reportType `string`: The type of report to be generated, such as ACCOUNT_PERFORMANCE_REPORT, CAMPAIGN_PERFORMANCE_REPORT, and so on. Maximum: 1 For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/plr:ReportTypeEnum'>eBay API documentation</a>

### DeleteAdRequest
* DeleteAdRequest `object`: This type defines the fields used in a delete-ad request.
  * listingId `string`: A unique eBay-assigned ID for a listing that is generated when the listing is created. Note: This request accepts both listing IDs, as generated by the Inventory API, and an item IDs, as used in the eBay Traditional API set (e.g., the Trading and Finding APIs).

### DeleteAdResponse
* DeleteAdResponse `object`: This type defines the fields returned in a delete-ad response.
  * adId `string`: The ID of the ad that was deleted.
  * errors `array`: An array of the errors or warnings associated with the request.
    * items [Error](#error)
  * listingId `string`: A unique eBay-assigned ID for a listing that is generated when the listing is created. Note: This field accepts both listing IDs, as generated by the Inventory API, and an item IDs, as used in the eBay Traditional API set (e.g., the Trading and Finding APIs).
  * statusCode `integer`: An HTTP status code that indicates the response-status of the request. Check this code to see if the ad was successfully deleted.

### DeleteAdsByInventoryReferenceRequest
* DeleteAdsByInventoryReferenceRequest `object`: This type defines the fields needed to delete an ad by its inventory reference ID. You must always supply both inventory_reference_id and inventory_reference_type.
  * inventoryReferenceId `string`: An ID that identifies an a single-item listing or multiple-variation listing that is managed with the Inventory API. The inventory reference ID is a seller-defined value that can be either an SKU for a single-item listing or an inventoryItemGroupKey for a multiple-value listing.
  * inventoryReferenceType `string`: Indicates the type of item the inventoryReferenceId references. The item can be either an INVENTORY_ITEM or INVENTORY_ITEM_GROUP. You must always pair an inventoryReferenceId with and inventoryReferenceType. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:InventoryReferenceTypeEnum'>eBay API documentation</a>

### DeleteAdsByInventoryReferenceResponse
* DeleteAdsByInventoryReferenceResponse `object`: This type defines the fields returned by request to delete a set of ads by inventory reference ID.
  * adIds `array`: The list of ad IDs that were removed from the campaign.
    * items `string`
  * errors `array`: The container for the errors associated with the request.
    * items [Error](#error)
  * inventoryReferenceId `string`: An ID that identifies an a single-item listing or multiple-variation listing that is managed with the Inventory API. The inventory reference ID is a seller-defined value that can be either an SKU for a single-item listing or an inventoryItemGroupKey for a multiple-value listing.
  * inventoryReferenceType `string`: Indicates the type of item the inventoryReferenceId references. The item can be either an INVENTORY_ITEM or INVENTORY_ITEM_GROUP. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:InventoryReferenceTypeEnum'>eBay API documentation</a>
  * statusCode `integer`: An HTTP status code that indicates the response-status of the request. Check this code to see if the ads were successfully deleted.

### Dimension
* Dimension `object`: This type defines the annotation and dimension key used by the report. For information on how to set these values, see Reading Promoted Listings reports.
  * annotationKeys `array`: A list of annotations associated with the dimension of the report.
    * items `string`
  * dimensionKey `string`: The name of the dimension on which the report is based. A dimension is an attribute to which the report data applies.

### DimensionKeyAnnotation
* DimensionKeyAnnotation `object`: This type defines the annotation values associated with a dimension. Annotations are metadata of the dimension. For example, annotations for a listing ID could be listing_title or listing_quantity_sold.
  * annotationKey `string`: An annotation key associated with the dimension.
  * dataType `string`: The data type of the annotation key value. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/plr:DataTypeEnum'>eBay API documentation</a>

### DimensionMetadata
* DimensionMetadata `object`: This type defines the dimension used to create the report and the annotation keys associated with that dimension.
  * dataType `string`: The data type of the dimension value used to create the report. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/plr:DataTypeEnum'>eBay API documentation</a>
  * dimensionKey `string`: The name of the dimension used to create the report.
  * dimensionKeyAnnotations `array`: An list of annotation keys associated with the specified dimension of the report.
    * items [DimensionKeyAnnotation](#dimensionkeyannotation)

### DiscountBenefit
* DiscountBenefit `object`: This container defines the promotional discount as either a monetary amount or a percentage of the sales price. Important!: You must populate one and only one of the fields in this container: amountOffItem amountOffOrder percentageOffItem percentageOffOrder Tip: Refer to Configuring discounts for threshold promotions for information and examples on how to combine discountBenefit and discountSpecification values to create different types of promotions.
  * amountOffItem [Amount](#amount)
  * amountOffOrder [Amount](#amount)
  * percentageOffItem `string`: The percentage applied to the sales price that is discounted off the promoted item (or items) when the promotion criteria is met. Valid integer values for percentage off: &nbsp;&nbsp;Min: 5 &nbsp;&nbsp;Max: 80
  * percentageOffOrder `string`: Used for threshold promotions, this is the percentage of the order price that is discounted off the order when the promotion criteria is met. This field is not value for markdown promotions. Valid integer values for ORDER_DISCOUNT promotions: &nbsp;&nbsp;Min: 5 &nbsp;&nbsp;Max: 80 For VOLUME_DISCOUNT promotions: Must be set to 0 for the first discount rule.

### DiscountRule
* DiscountRule `object`: This complex type defines a promotion as being either a monetary amount or a percentage of a sales price that's subtracted from the price of an item or order. Set the amount of the discount and the rules that govern when the discount triggers using the discountBenefit and discountSpecification fields. Note: In volume pricing promotions, you must configure at least two discountRule containers and at most four.
  * discountBenefit [DiscountBenefit](#discountbenefit)
  * discountSpecification [DiscountSpecification](#discountspecification)
  * ruleOrder `integer`: This field indicates the order in which the discountRules are presented. The value specified for this field must equal the associated minQuantity value. Required if you are creating a volume pricing promotion.

### DiscountSpecification
* DiscountSpecification `object`: This container defines the criteria for when the discounts of a promotion trigger, such as the minimum quantity the buyer must purchase before the promotion kicks in. The promotional discount is applied each time the criteria defined by this container is met. Note: When configuring the rules that govern when the discounts are applied, populate just one of the following fields in the discountSpecification container: minAmount minQuantity forEachQuantity forEachAmount Tip: Refer to Configuring discounts for threshold promotions for information and examples on how to combine discountBenefit and discountSpecification to create different types of promotions.
  * forEachAmount [Amount](#amount)
  * forEachQuantity `integer`: The number of items that must be purchased in order to qualify for the discount. Valid values: &nbsp; 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, &nbsp; 12, 13, 14, 15, 16, 17, 18, 19 &nbsp; 20, 25, 50, 75, 100
  * minAmount [Amount](#amount)
  * minQuantity `integer`: The minimum quantity of promoted items that needs to be bought in order to qualify for the promotion's discount. Valid values: &nbsp; 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, &nbsp; 12, 13, 14, 15, 16, 17, 18, 19 &nbsp; 20, 25, 50, 75, 100
  * numberOfDiscountedItems `integer`: Use this field to configure &quot;Buy One Get One&quot; (or BOGO) promotions. You must couple this field with forEachQuantity and an amountOffItem or percentOffItem field to configure your BOGO promotion. This field is not valid with order-based promotions. The value of this field represents the number of items to be discounted when other promotion criteria is met. For example, when the buyer adds the number of items identified by the forEachQuantity value to their cart, they are then eligible to receive the stated discount from an additional number of like items (the number of which is identified by this field) when they add those items to their cart. To receive the discount, the buyer must purchase the number of items indicated by forEachQuantity plus the number indicated by this field. Valid values: &nbsp; 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

### Error
* Error `object`: This type defines the fields returned in an error condition.
  * parameters `array`: An array that contains contextual information about the error or warning. The list often includes the parameter or input fields that triggered the warning or error condition.
    * items [ErrorParameter](#errorparameter)
  * category `string`: The category type for this error or warning. This field can have one of three values: Application: Indicates an exception or error occurred in the application code or at runtime. Examples include catching an exception in a service's business logic, system failures, or request errors from a dependency. Business: Used when your service or a dependent service refused to continue processing on the resource because of a business rule violation such as &quot;Seller does not ship items to Antarctica&quot; or &quot;Buyer ineligible to purchase an alcoholic item&quot;. Business errors are not syntactical input errors. Request: Used when there is anything wrong with the request, such as authentication, syntactical errors, rate limiting or missing headers, bad HTTP header values, and so on.
  * domain `string`: The name of the primary system where the error occurred. This is relevant for application errors.
  * errorId `integer`: A positive integer that uniquely identifies the specific error condition that occurred. Your application can use error codes as identifiers in your customized error-handling algorithms.
  * inputRefIds `array`: An array of reference IDs that identify the specific request elements most closely associated to the error or warning, if any. For JSON, use JSONPath notation.
    * items `string`
  * longMessage `string`: A detailed description of the condition that caused the error or warning and information on what to do to correct the problem. The string is normally 100-200 characters in length, but is not required to be such.
  * message `string`: A short description of the condition that caused the error or warning. This value is at most 50 characters long and, if applicable, is localized in the end user's requested locale.
  * outputRefIds `array`: An array of reference IDs that identify the specific response elements most closely associated to the error or warning, if any. The path format is the same as inputRefId.
    * items `string`
  * subdomain `string`: The name of the subdomain in which the error or warning occurred. For example, checkout is a subdomain in the buying domain.

### ErrorParameter
* ErrorParameter `object`: A name/value pair that provides parameter details regarding a warning or error condition.
  * name `string`: Name of the entity that threw the error.
  * value `string`: The value that was set for the element specified in the name field.

### FundingStrategy
* FundingStrategy `object`: This type defines how the Promoted Listing fee is calculated when fundingModel is set to COST_PER_SALE.
  * bidPercentage `string`: The user-defined bid percentage (also known as the ad rate) sets the level that eBay increases the visibility in search results for the associated listing. The higher the bidPercentage value, the more eBay promotes the listing. The value specified here is also used to calculate the Promoted Listings fee. This percentage value is multiplied by the final sales price to determine the fee. The Promoted Listings fee is determined at the time the transaction completes and the seller is assessed the fee only when an item sells through a Promoted Listings ad campaign. bidPercentage is a single precision value that is guided by the following rules: These values are valid: &nbsp;&nbsp;&nbsp;1, &nbsp;&nbsp;&nbsp;1.0, &nbsp;&nbsp;&nbsp;4.1, &nbsp;&nbsp;&nbsp;5.0, &nbsp;&nbsp;&nbsp;5.5, ... These values are not valid: &nbsp;&nbsp;&nbsp;0.01, &nbsp;&nbsp;&nbsp;10.75, &nbsp;&nbsp;&nbsp;99.99, &nbsp;&nbsp;&nbsp;and so on. If a bid percentage is not provided for an ad, eBay uses the default bid percentage of the associated campaign.Minimum value: 1.0 Maximum value: 100.0
  * fundingModel `string`: Indicates the model that eBay uses to calculate the Promoted Listings fee. Currently, only COST_PER_SALE is supported. Default: COST_PER_SALE For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:FundingModelEnum'>eBay API documentation</a>

### InventoryCriterion
* InventoryCriterion `object`: This type defines either the selections rules or the list of listing IDs for the promotion. The &quot;listing IDs&quot; are are either the seller's item IDs or the eBay listing IDs.
  * inventoryCriterionType `string`: Indicates how the items to include in the promotion are selected. You can include inventory by ID, using rules, or globally include all your inventory. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/sme:InventoryCriterionEnum'>eBay API documentation</a>
  * inventoryItems `array`: An array of containers for the seller's inventory reference IDs (also known as an &quot;SKU&quot; or &quot;custom label&quot;) to be added to the promotion. Note: The request can have either inventoryItems or listingIds, but not both. Required: All listings in a promotion must offer an electronic payment method. Maximum: 500 parent items Maximum SKU or custom label length: 50 characters Required if InventoryCriterionType is set to INVENTORY_BY_VALUE, you must specify either inventoryItems or listingIds.
    * items [InventoryItem](#inventoryitem)
  * listingIds `array`: An array of eBay listing IDs to be added to the promotion. Note: The request can have either inventoryItems or listingIds, but not both. Required: All listings in a promotion must offer an electronic payment method. Maximum: 500 parent items Maximum SKU or custom label length: 50 characters Required if InventoryCriterionType is set to INVENTORY_BY_VALUE, you must specify either inventoryItems or listingIds.
    * items `string`
  * ruleCriteria [RuleCriteria](#rulecriteria)

### InventoryItem
* InventoryItem `object`: This type defines the fields for the seller inventory reference IDs (also known as an &quot;SKU&quot; or &quot;custom label&quot;).
  * inventoryReferenceId `string`: The seller's inventory reference ID for a listing. Also known as the &quot;SKU&quot; or &quot;custom label,&quot; an inventory reference ID is either the ID of the listing or, if the listing has variations (such as a shirt that's available in multiple sizes and colors), the ID of the parent listing.

### InventoryReference
* InventoryReference `object`: This complex type is used to identify an item that is managed by the Inventory API. The type defines the fields contained in an inventory reference ID.
  * inventoryReferenceId `string`: The seller's inventory reference ID for an item that is managed with the Inventory API. An inventory reference is either the ID of a single listing or the ID of the parent of an item group listing (a multi-variation listing, such as a shirt that is available in multiple sizes and colors). Required if if you supply an inventoryReferenceType.
  * inventoryReferenceType `string`: Indicates the type of item indicated by the inventoryReferenceId. This value can be set to either INVENTORY_ITEM or INVENTORY_ITEM_GROUP (if the ID points to a multi-variation listing). Required if if you supply an inventoryReferenceId. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:InventoryReferenceTypeEnum'>eBay API documentation</a>

### ItemPriceMarkdown
* ItemPriceMarkdown `object`: This type defines the fields used to describe an item price markdown promotion.
  * applyFreeShipping `boolean`: If set to true, free shipping is applied to the first shipping service specified for the item. The first domestic shipping option is set to &quot;free shipping,&quot; regardless if the shipping optionType for that service is set to FLAT_RATE, CALCULATED, or NOT_SPECIFIED (freight). This flag essentially adds free shipping as a promotional bonus. Default: false
  * autoSelectFutureInventory `boolean`: If set to true, eBay will automatically add inventory items to the markdown promotion if they meet the selectedInventoryDiscounts criteria specified for the markdown promotion. Default: false
  * blockPriceIncreaseInItemRevision `boolean`: If set to true, price increases (including removing the free shipping flag) are blocked and an error message is returned if a seller attempts to adjust the price of an item that's partaking in this markdown promotion. If set to false, an item is dropped from the markdown promotion if the seller adjusts the price. Default: false
  * description `string`: This field is required if you are configuring an MARKDOWN_SALE promotion. This is the seller-defined &quot;tag line&quot; for the offer, such as &quot;Save on designer shoes.&quot; A tag line appears under the &quot;offer-type text&quot; that is generated for the promotion. The text is displayed on the offer tile that is shown on the seller's All Offers page and on the event page for the promotion. Note: Offer-type text is a teaser that's presented throughout the buyer's journey through the sales flow and is generated by eBay. This text is not editable by the seller&mdash;it's derived from the settings in the discountRules and discountSpecification fields&mdash;and can be, for example, &quot;20% off&quot;. Maximum length: 50
  * endDate `string`: The date and time the promotion ends, in UTC format (yyyy-MM-ddThh:mm:ssZ). The value supplied for endDate must be at least 24 hours after the value supplied for the startDate of the markdown promotion. If this field is blank (null), it indicates the promotion has no end date. For display purposes, convert this time into the local time of the seller. Max value: 14 days for the AT, CH, DE, ES, FR, IE, IT, and UK, marketplaces. 45 days for all other marketplaces.
  * marketplaceId `string`: The eBay marketplace ID of the site where the markdown promotion is hosted. Markdown promotions are supported on all eBay marketplaces. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/ba:MarketplaceIdEnum'>eBay API documentation</a>
  * name `string`: The seller-defined name or 'title' of the promotion that the seller can use to identify a promotion. This label is not displayed in end-user flows. Maximum length: 90
  * priority `string`: This field is ignored in markdown promotions. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/sme:PromotionPriorityEnum'>eBay API documentation</a>
  * promotionImageUrl `string`: Required for MARKDOWN_SALE promotions, populate this field with a URL that points to an image to be used with the promotion. This image is displayed on the seller's All Offers page. The URL must point to either JPEG or PNG image and it must be a minimum of 500x500 pixels in dimension and cannot exceed 12Mb in size.
  * promotionStatus `string`: The current status of the promotion. When creating a new promotion, you must set this value to either DRAFT or SCHEDULED. Note that you must set this value to SCHEDULED when you update a RUNNING promotion. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/sme:PromotionStatusEnum'>eBay API documentation</a>
  * selectedInventoryDiscounts `array`: A list that defines the sets of selected items for the markdown promotion and the discount specified for promotion.
    * items [SelectedInventoryDiscount](#selectedinventorydiscount)
  * startDate `string`: The date and time the promotion starts in UTC format (yyyy-MM-ddThh:mm:ssZ). For display purposes, convert this time into the local time of the seller.

### ItemPromotion
* ItemPromotion `object`: This type defines the fields that describe a threshold promotion and includes the promotional discount, the items included in the promotion, and the rules that specify when the promotion is applied.
  * applyDiscountToSingleItemOnly `boolean`: This flag is relevant in only when promotionType is set to VOLUME_DISCOUNT. For details on volume pricing promotions, see Configuring volume pricing discounts. If set to true, the discount is applied only when the buyer purchases multiple quantities of a single item in the promotion. Otherwise, the promotional discount applies to multiple quantities of any items in the promotion. Different variations of a multi-variation item are considered to be the same item. Note that this flag is not relevant if the inventoryCriterion container identifies a single listing ID for the promotion.
  * description `string`: This is the seller-defined &quot;tag line&quot; for the offer, such as &quot;Save on designer shoes.&quot; The tag line appears under the &quot;offer-type text&quot; that is generated for the promotion and is displayed on the offer tile that's shown on the seller's All Offers page, and on the event page for the promotion. Note: Offer-type text is a teaser that's presented throughout the buyer's journey through the sales flow and is generated by eBay. The offer-type text is not editable by the seller&mdash;it's derived from the settings in the discountRules and discountSpecification fields&mdash;and can be, for example, &quot;Extra 20% off when you buy 3+&quot;. Maximum length: 50 Required if you are configuring ORDER_DISCOUNT or MARKDOWN_SALE promotions (and not valid for VOLUME_DISCOUNT promotions).
  * discountRules `array`: This container defines a promotion using the following two required fields: discountBenefit &ndash; Defines a discount as either a monetary amount or a percentage that is subtracted from the sales price of an item, a set of items, or an order. discountSpecification &ndash; Defines a set of rules that determine when the promotion is applied. Note: For volume pricing, you must specify at least two and not more than four discountBenefit/discountSpecification pairs. In addition, you must define each set of rules with a ruleOrder value that corresponds with the order of volume discounts you present. Tip: Refer to Specifying item promotion discounts for information and examples on how to combine discountBenefit and discountSpecification to create different types of promotions.
    * items [DiscountRule](#discountrule)
  * endDate `string`: The date and time the promotion ends in UTC format (yyyy-MM-ddThh:mm:ssZ). If this field is blank (null), it indicates the promotion has no end date. For display purposes, convert this time into the local time of the seller.
  * inventoryCriterion [InventoryCriterion](#inventorycriterion)
  * marketplaceId `string`: The eBay marketplace ID of the site where the threshold promotion is hosted. Threshold promotions are currently supported on a limited number of eBay marketplaces. Valid values: EBAY_AU = Australia EBAY_DE = Germany EBAY_ES = Spain EBAY_FR = France EBAY_GB = Great Britain EBAY_IT = Italy EBAY_US = United States For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/ba:MarketplaceIdEnum'>eBay API documentation</a>
  * name `string`: The seller-defined name or &quot;title&quot; of the promotion that the seller can use to identify a promotion. This label is not displayed in end-user flows. Maximum length: 90
  * priority `string`: Applicable for only ORDER_DISCOUNT promotions, this field indicates the precedence of the promotion, which is used to determine the position of a promotion on the seller's All Offers page. If an item is associated with multiple promotions, the promotion with the higher priority takes precedence. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/sme:PromotionPriorityEnum'>eBay API documentation</a>
  * promotionImageUrl `string`: This field is optional for ORDER_DISCOUNT promotions, but is not valid for VOLUME_DISCOUNT promotions. Populate this field with a URL that points to an image to be used with the promotion. This image is displayed on the seller's All Offers page. The URL must point to either JPEG or PNG image and it must be a minimum of 500x500 pixels in dimension and cannot exceed 12Mb in size.
  * promotionStatus `string`: The current status of the promotion. When creating a new promotion, this value must be set to either DRAFT or SCHEDULED. Note that you must set this value to SCHEDULED when you update a RUNNING promotion. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/sme:PromotionStatusEnum'>eBay API documentation</a>
  * promotionType `string`: Use this field to specify the type of the promotion you are creating. The supported types are: MARKDOWN_SALE &ndash; A markdown promotion set with createItemPriceMarkdownPromotion. ORDER_DISCOUNT &ndash; A threshold promotion set with createItemPromotion. VOLUME_DISCOUNT &ndash; A volume pricing promotion set with createItemPromotion. See the Promotions Manager documentation for details. Required if you are creating a volume pricing promotion (VOLUME_DISCOUNT). For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/sme:PromotionTypeEnum'>eBay API documentation</a>
  * startDate `string`: The date and time the promotion starts in UTC format (yyyy-MM-ddThh:mm:ssZ). For display purposes, convert this time into the local time of the seller.

### ItemPromotionResponse
* ItemPromotionResponse `object`: This complex type defines the fields returned for an item (threshold) promotion.
  * applyDiscountToSingleItemOnly `boolean`: If set to true, the discount is applied only when the buyer purchases multiple quantities of a single item in the promotion. Otherwise, the promotional discount applies to multiple quantities of any items in the promotion. Different variations of a multi-variation item are considered to be the same item. Note that this flag is not relevant if the inventoryCriterion container identifies a single listing ID for the promotion.
  * description `string`: This is the seller-defined &quot;tag line&quot; for the offer, such as &quot;Save on designer shoes.&quot; The tag line appears under the &quot;offer-type text&quot; that is generated for the promotion and is displayed under the offer tile that is shown on the seller's All Offers page and on the event page for the promotion. This tag line is not used with volume pricing promotions. Note: Offer-type text is a teaser that's presented throughout the buyer's journey through the sales flow and is generated by eBay. This text is not editable by the seller&mdash;it's derived from the settings in the discountRules and discountSpecification fields&mdash;and can be, for example, &quot;Extra 20% off when you buy 3+&quot;. Maximum length: 50
  * discountRules `array`: A list containing the promotion benefits (discountRule) and the rules that define when the benefit is applied (discountSpecification).
    * items [DiscountRule](#discountrule)
  * endDate `string`: The date and time the promotion ends in UTC format (yyyy-MM-ddThh:mm:ssZ). If this field is blank (null), it indicates the promotion has no end date. For display purposes, convert this time into the local time of the seller.
  * inventoryCriterion [InventoryCriterion](#inventorycriterion)
  * marketplaceId `string`: The eBay marketplace ID of the site where the threshold promotion is hosted. Threshold promotions are currently supported on a limited number of eBay marketplaces. Valid values: EBAY_AU = Australia EBAY_DE = Germany EBAY_ES = Spain EBAY_FR = France EBAY_GB = Great Britain EBAY_IT = Italy EBAY_US = United States For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/ba:MarketplaceIdEnum'>eBay API documentation</a>
  * name `string`: The seller-defined name or &quot;title&quot; of the promotion that the seller can use to identify a promotion. This label is not displayed in end-user flows. Maximum length: 90
  * priority `string`: Applicable for only ORDER_DISCOUNT promotions, this field indicates the precedence of the promotion, which eBay uses to determine the position of a promotion on the seller's All Offers page. If an item is associated with multiple promotions, the promotion with the higher priority takes precedence. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/sme:PromotionPriorityEnum'>eBay API documentation</a>
  * promotionId `string`: A unique eBay-assigned ID for the promotion that's generated when the promotion is created.
  * promotionImageUrl `string`: Not applicable for VOLUME_DISCOUNT promotions, this field is a URL that points to an image for the promotion. This image is displayed on the seller's All Offers page. The URL must point to either JPEG or PNG image and it must be a minimum of 500x500 pixels in dimension and cannot exceed 12Mb in size.
  * promotionStatus `string`: The current status of the promotion. When creating a new promotion, this value must be set to either DRAFT or SCHEDULED. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/sme:PromotionStatusEnum'>eBay API documentation</a>
  * promotionType `string`: Indicates the type of the promotion, either MARKDOWN_SALE, ORDER_DISCOUNT, or VOLUME_DISCOUNT. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/sme:PromotionTypeEnum'>eBay API documentation</a>
  * startDate `string`: The date and time the promotion starts in UTC format (yyyy-MM-ddThh:mm:ssZ). For display purposes, convert this time into the local time of the seller.

### MetricMetadata
* MetricMetadata `object`: This type defines the name and data type of a metric.
  * dataType `string`: The data type of the returned metric value. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/plr:DataTypeEnum'>eBay API documentation</a>
  * metricKey `string`: The name of the metric.

### PromotionDetail
* PromotionDetail `object`: This type defines the fields that describe a promotion. This includes all the information about a promotion except for the listings that are a part of the promotion.
  * description `string`: This is the seller-defined &quot;tag line&quot; for the offer, such as &quot;Save on designer shoes.&quot; Tag lines appear under the &quot;offer-type text&quot; that is generated for a promotion and displayed under the offer tile that is shown on the seller's All Offers page and on the promotion's event page. Note: Offer-type text is a teaser that's presented throughout the buyer's journey through the sales flow and is generated by eBay. This text is not editable by the seller&mdash;it's derived from the settings in the discountRules and discountSpecification fields&mdash;and can be, for example, &quot;Extra 20% off when you buy 3+&quot;. Maximum length: 50 Required if you are configuring ORDER_DISCOUNT or MARKDOWN_SALE promotions (and not valid for VOLUME_DISCOUNT promotions).
  * endDate `string`: The date and time the promotion ends in UTC format (yyyy-MM-ddThh:mm:ssZ). If this field is blank (null), it indicates the promotion has no end date. For display purposes, convert this time into the local time of the seller.
  * marketplaceId `string`: The eBay marketplace ID of the site where the promotion is hosted. Threshold promotions are supported on a select set of marketplaces while markdown promotions are supported on all eBay marketplaces. Valid values for threshold promotions are as follows: EBAY_AU = Australia EBAY_DE = Germany EBAY_ES = Spain EBAY_FR = France EBAY_GB = Great Britain EBAY_IT = Italy EBAY_US = United States For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/ba:MarketplaceIdEnum'>eBay API documentation</a>
  * name `string`: The seller-defined name or &quot;title&quot; of the promotion, such as &quot;Buy 1 Get 1&quot;, that the seller can use to identify a promotion. This label is not displayed in end-user flows. Maximum length: 90
  * priority `string`: Applicable for only ORDER_DISCOUNT promotions, this field indicates the precedence of the promotion, which is used to determine the position of a promotion on the seller's All Offers page. If an item is associated with multiple promotions, the promotion with the higher priority takes precedence. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/sme:PromotionPriorityEnum'>eBay API documentation</a>
  * promotionHref `string`: The URI of the promotion details.
  * promotionId `string`: A unique eBay-assigned ID for the promotion that's generated when the promotion is created.
  * promotionImageUrl `string`: Not applicable for VOLUME_DISCOUNT promotions, this field is a URL that points to an image for the promotion. This image is displayed on the seller's All Offers page. The URL must point to either JPEG or PNG image and it must be a minimum of 500x500 pixels in dimension and cannot exceed 12Mb in size.
  * promotionStatus `string`: The current status of the promotion. When creating a new promotion, you must set this value to either DRAFT or SCHEDULED. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/sme:PromotionStatusEnum'>eBay API documentation</a>
  * promotionType `string`: Indicates type of the promotion, either MARKDOWN_SALE, ORDER_DISCOUNT, or VOLUME_DISCOUNT. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/sme:PromotionTypeEnum'>eBay API documentation</a>
  * startDate `string`: The date and time the promotion starts in UTC format (yyyy-MM-ddThh:mm:ssZ). For display purposes, convert this time into the local time of the seller.

### PromotionReportDetail
* PromotionReportDetail `object`: This type defines the fields in a promotion-level report.
  * averageItemDiscount [Amount](#amount)
  * averageItemRevenue [Amount](#amount)
  * averageOrderDiscount [Amount](#amount)
  * averageOrderRevenue [Amount](#amount)
  * averageOrderSize `string`: The average order size is the average number of items that each order contained in a promotion. This value is calculated as follows: itemsSoldQuantity / numberOfOrdersSold = averageOrderSize
  * baseSale [Amount](#amount)
  * itemsSoldQuantity `integer`: This is the quantity of items purchased in a threshold promotion where the threshold has been met and the discount was applied. For example, suppose you're running a &quot;Buy 1, get 1 at 50%&quot; promotion on $5 socks. One buyer purchases two pairs of socks, so they pay $7.50 for both pairs (rather than the full price of $10). Your number of items sold (itemsSoldQuantity) would be 2 and you number of orders sold (numberOfOrdersSold) would be 1.
  * numberOfOrdersSold `integer`: This is the number of orders sold in a threshold promotion where the threshold has been met and the discount was applied. For example, suppose you're running a &quot;Buy 1, get 1 at 50%&quot; promotion on $5 socks. One buyer purchases two pairs of socks, so they pay $7.50 for both pairs (rather than the full price of $10). Your numberOfOrdersSold would be 1 and your itemsSoldQuantity would be 2.
  * percentageSalesLift `string`: The percentage sales lift is the total dollar amount gained due to promotions. This value is calculated as follows: promotionSale / totalSale = percentageSalesLift
  * promotionHref `string`: The URI of the promotion report.
  * promotionId `string`: A unique eBay-assigned ID for the promotion that's generated when the promotion is created.
  * promotionReportId `string`: The unique eBay-assigned ID of the promotion report that is generated when the report is created.
  * promotionSale [Amount](#amount)
  * promotionType `string`: Indicates the type of the promotion, either MARKDOWN_SALE, ORDER_DISCOUNT, or VOLUME_DISCOUNT. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/sme:PromotionTypeEnum'>eBay API documentation</a>
  * totalDiscount [Amount](#amount)
  * totalSale [Amount](#amount)

### PromotionsPagedCollection
* PromotionsPagedCollection `object`: This type defines the fields in a paginated result set of seller promotions. The response consists of 0 or more sequenced pages that are returned from the complete result set, where each page consists of 0 or more items.
  * href `string`: The URI of the current page of results from the result set.
  * limit `integer`: The number of items returned on a single page from the result set. This value can be set in the request with the limit query parameter.
  * next `string`: The URI for the following page of results. This value is returned only if there is an additional page of results to display from the result set. Max length: 2048
  * offset `integer`: The number of results skipped in the result set before listing the first returned result. This value can be set in the request with the offset query parameter. Note: The items in a paginated result set use a zero-based list where the first item in the list has an offset of 0.
  * prev `string`: The URI for the preceding page of results. This value is returned only if there is a previous page of results to display from the result set. Max length: 2048
  * promotions `array`: A list containing the details of each returned promotion. This includes all the information about the promotions except for the listings that are part of the promotions.
    * items [PromotionDetail](#promotiondetail)
  * total `integer`: The total number of items retrieved in the result set. If no items are found, this field is returned with a value of 0.

### PromotionsReportPagedCollection
* PromotionsReportPagedCollection `object`: This type defines the fields in a paginated result set of promotion-level reports. The response consists of 0 or more sequenced pages that are returned from the complete result set, where each page consists of 0 or more items.
  * href `string`: The URI of the current page of results from the result set.
  * limit `integer`: The number of items returned on a single page from the result set. This value can be set in the request with the limit query parameter.
  * next `string`: The URI for the following page of results. This value is returned only if there is an additional page of results to display from the result set. Max length: 2048
  * offset `integer`: The number of results skipped in the result set before listing the first returned result. This value can be set in the request with the offset query parameter. Note: The items in a paginated result set use a zero-based list where the first item in the list has an offset of 0.
  * prev `string`: The URI for the preceding page of results. This value is returned only if there is a previous page of results to display from the result set. Max length: 2048
  * promotionReports `array`: A list of promotionReports contained in the paginated result set.
    * items [PromotionReportDetail](#promotionreportdetail)
  * total `integer`: The total number of items retrieved in the result set. If no items are found, this field is returned with a value of 0.

### ReportMetadata
* ReportMetadata `object`: This type defines the fields included in the report.
  * dimensionMetadata `array`: A list containing the metadata for the dimension used in the report.
    * items [DimensionMetadata](#dimensionmetadata)
  * maxNumberOfDimensionsToRequest `integer`: The maximum number of dimensions that can be requested for the specified report type.
  * maxNumberOfMetricsToRequest `integer`: The maximum number of metrics that can be requested for the specified report type.
  * metricMetadata `array`: A list containing the metadata for the metrics in the report.
    * items [MetricMetadata](#metricmetadata)
  * reportType `string`: The report_type, as specified in the request to create the report task. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/plr:ReportTypeEnum'>eBay API documentation</a>

### ReportMetadatas
* ReportMetadatas `object`: This type defines the metadata used by the all report types.
  * reportMetadata `array`: A list of the metadata for the associated report type.
    * items [ReportMetadata](#reportmetadata)

### ReportTask
* ReportTask `object`: This type defines the fields in a report task.
  * campaignIds `array`: A list of campaign IDs to be included in the report. A campaign ID is a unique eBay-assigned identifier of the campaign that's generated when the campaign is created. Call getCampaigns to return the current campaign IDs for a seller. Note: Currently, you can specify only one campaign ID.
    * items `string`
  * dateFrom `string`: The date defining the start of the timespan covered by the report, in ISO 8601 UTC format. Promoted Listings reports are aggregated on a daily basis where each day begins and ends at midnight, Mountain Standard Time (MST). This time is calculated by subtracting seven hours from the Coordinated Universal Time (UTC).
  * dateTo `string`: The date defining the end of the timespan covered by the report, in ISO 8601 UTC format. Promoted Listings reports are aggregated on a daily basis where each day begins and ends at midnight, Mountain Standard Time (MST).
  * dimensions `array`: A list containing the dimension in the report.
    * items [Dimension](#dimension)
  * inventoryReferences `array`: If supplied in the request, this field returns a list of the seller's inventory reference IDs included in the report. Each item is referenced by a pair of and inventoryReferenceType values, where an inventory reference ID can be either a seller-defined SKU value or an inventoryItemGroupKey. An inventoryItemGroupKey is seller-defined ID for an inventory item group (a multiple-variation listing), and is created and used by the Inventory API.
    * items [InventoryReference](#inventoryreference)
  * listingIds `array`: If supplied in the request, this field returns a list of the listing IDs included in the report. A listing ID is an eBay-assigned ID that's generated when a listing is created.
    * items `string`
  * marketplaceId `string`: The ID of the eBay marketplace used by the report task. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/ba:MarketplaceIdEnum'>eBay API documentation</a>
  * metricKeys `array`: A list of metrics for the report task.
    * items `string`
  * reportExpirationDate `string`: The date after which the report is no longer be available. Reports are available for 30 days and you cannot download a report after it has expired. Format (UTC): yyyy-MM-ddThh:mm:ss.sssZ
  * reportFormat `string`: Indicates the format of the report. Currently, only TSV_GZIP is supported. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/plr:ReportFormatEnum'>eBay API documentation</a>
  * reportHref `string`: The URL of the generated report, which can be used to download the report once it has been generated.
  * reportId `string`: A unique eBay-assigned ID for the report.
  * reportName `string`: An eBay-assigned name for the report that's created by the createReportTask call. This name is unique for the seller.
  * reportTaskCompletionDate `string`: The date the report task completed the report generation. Format (UTC): yyyy-MM-ddThh:mm:ss.sssZ
  * reportTaskCreationDate `string`: The date the report task was created. Format (UTC): yyyy-MM-ddThh:mm:ss.sssZ
  * reportTaskExpectedCompletionDate `string`: The date the report task is expected to complete the report generation. Format (UTC): yyyy-MM-ddThh:mm:ss.sssZ
  * reportTaskId `string`: The unique eBay-assigned ID of the report task. This value is generated when the report task is created with a call to createReportTask.
  * reportTaskStatus `string`: Indicates the current state of the report task. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/plr:TaskStatusEnum'>eBay API documentation</a>
  * reportTaskStatusMessage `string`: A status message with additional information about the report task.
  * reportType `string`: Indicates type of report associated with the report task. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/plr:ReportTypeEnum'>eBay API documentation</a>

### ReportTaskPagedCollection
* ReportTaskPagedCollection `object`: This type defines the fields that paginate the reports tasks returned by the request. The entire result set consists of 0 or more sequenced response pages, where each page consists of 0 or more items from the complete result set.
  * href `string`: The URI of the current page of results from the result set.
  * limit `integer`: The number of items returned on a single page from the result set. This value can be set in the request with the limit query parameter.
  * next `string`: The URI for the following page of results. This value is returned only if there is an additional page of results to display from the result set. Max length: 2048
  * offset `integer`: The number of results skipped in the result set before listing the first returned result. This value can be set in the request with the offset query parameter. Note: The items in a paginated result set use a zero-based list where the first item in the list has an offset of 0.
  * prev `string`: The URI for the preceding page of results. This value is returned only if there is a previous page of results to display from the result set. Max length: 2048
  * reportTasks `array`: A list of report tasks contained on this page from the paginated response.
    * items [ReportTask](#reporttask)
  * total `integer`: The total number of items retrieved in the result set. If no items are found, this field is returned with a value of 0.

### RuleCriteria
* RuleCriteria `object`: This type defines the fields for a set of inventory selection rules. Required: When inventoryCriterionType is set to INVENTORY_BY_RULE or INVENTORY_ANY.
  * excludeInventoryItems `array`: A list of seller inventory reference IDs to exclude from the promotion. Note: The request can have either excludeInventoryItems or excludeListingIds but not both. Maximum: 100 parent items Maximum SKU or custom label length: 50 characters
    * items [InventoryItem](#inventoryitem)
  * excludeListingIds `array`: A list of eBay listing IDs to exclude from the promotion. Note: The request can have either excludeInventoryItems or excludeListingIds but not both. Maximum: 100 parent items Maximum SKU or custom label length: 50 characters
    * items `string`
  * markupInventoryItems `array`: A list of SKUs to remove from a markdown promotion. The listed SKUs are 'marked up' to their standard price after being part of the markdown promotion.
    * items [InventoryItem](#inventoryitem)
  * markupListingIds `array`: A list of listing IDs to remove from a markdown promotion. The listed items are 'marked up' to their standard price after being part of the markdown promotion.
    * items `string`
  * selectionRules `array`: The container for the rules that select the items to include in a promotion. Required if inventoryCriterionType is set to INVENTORY_BY_RULE.
    * items [SelectionRule](#selectionrule)

### SelectedInventoryDiscount
* SelectedInventoryDiscount `object`: This type defines the fields that describe the discounts applied to a set of inventory items and the order in which the selection rules are applied.
  * discountBenefit [DiscountBenefit](#discountbenefit)
  * discountId `string`: A unique, eBay-generated ID that you can use to identify the discount. This field is ignored in POST and PUT operations.
  * inventoryCriterion [InventoryCriterion](#inventorycriterion)
  * ruleOrder `integer`: For markdown promotions, this field is reserved for future use.

### SelectionRule
* SelectionRule `object`: This type specifies the selection rules used to create a campaign.
  * brands `array`: A list of the brands of the items to be included in the campaign.
    * items `string`
  * categoryIds `array`: A list of category IDs associated with the listings to be included in the campaign. Ada are created for all the seller's items listed in the specified categories, up to a maximum of 50,000 items. The IDs can be either a list of eBay category IDs (from the site where the item is hosted), or a list of category IDs defined and used by the seller's store. eBay Marketplace category IDs To get a list of marketplace category IDs, do one of the following: Get a list of category IDs for a marketplace by adding /sch/allcategories/all-categories to the marketplace URL when browsing the site. For example: http://www.ebay.com.au/sch/allcategories/all-categories Navigate to the desired category on the host site and copy the category ID from the URL. These options are also available for the US marketplace: See Category Changes for the latest list of category IDs. Retrieve a list of category IDs using the Taxonomy API. Seller store category IDs Because store category IDs are uniquely defined and maintained by each seller, this service cannot provide a list of a seller's IDs. However, sellers can retrieve their store category IDs as follows: Go to Seller Hub &gt; Marketing. Click Manage store categories. A list of your store categories displays. Click the All categories link displayed at the bottom of the list. A complete list of your store categories and their associated store category IDs displays.
    * items `string`
  * categoryScope `string`: Indicates the source of the category ID; eBay or seller's store. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/sme:CategoryScopeEnum'>eBay API documentation</a>
  * listingConditionIds `array`: The ID of the listing's condition. Note: In the US and Australian marketplaces, Condition ID 2000 now maps to an item condition of 'Certified Refurbished', but this item condition is only available for use for a select number of US and Australian sellers. For all other marketplaces besides the US and Australia, Condition ID 2000 still maps to 'Manufacturer Refurbished'. Valid values: 1000 = New 2000 = Manufacturer refurbished 2500 = Seller refurbished 3000 = Used/Like new/Pre owned
    * items `string`
  * maxPrice [Amount](#amount)
  * minPrice [Amount](#amount)

### SummaryReportResponse
* SummaryReportResponse `object`: This type defines the fields in an Promotions Manager Summary report. Reports are formatted in JSON. For more details, see Reading item promotion Summary reports.
  * baseSale [Amount](#amount)
  * lastUpdated `string`: The date the report was generated.
  * percentageSalesLift `string`: The percentage of the total dollar amount gained due to promotions. This value is calculated as follows: precentageSalesLift = promotionSale / (baseSale + promotionSale)
  * promotionSale [Amount](#amount)
  * totalSale [Amount](#amount)

### UpdateBidPercentageRequest
* UpdateBidPercentageRequest `object`: This type specifies the bid percentage for an ad campaign.
  * bidPercentage `string`: The user-defined bid percentage (also known as the ad rate) sets the level that eBay increases the visibility in search results for the associated listing. The higher the bidPercentage value, the more eBay promotes the listing. The value specified here is also used to calculate the Promoted Listings fee. This percentage value is multiplied by the final sales price to determine the fee. The Promoted Listings fee is determined at the time the transaction completes and the seller is assessed the fee only when an item sells through a Promoted Listings ad campaign. bidPercentage is a single precision value that is guided by the following rules: These values are valid: &nbsp;&nbsp;&nbsp;1, &nbsp;&nbsp;&nbsp;1.0, &nbsp;&nbsp;&nbsp;4.1, &nbsp;&nbsp;&nbsp;5.0, &nbsp;&nbsp;&nbsp;5.5, ... These values are not valid: &nbsp;&nbsp;&nbsp;0.01, &nbsp;&nbsp;&nbsp;10.75, &nbsp;&nbsp;&nbsp;99.99, &nbsp;&nbsp;&nbsp;and so on. If a bid percentage is not provided for an ad, eBay uses the default bid percentage of the associated campaign.Minimum value: 1.0 Maximum value: 100.0

### UpdateCampaignIdentificationRequest
* UpdateCampaignIdentificationRequest `object`: This type specifies the updated name, and start and end dates for an update-campaign request.
  * campaignName `string`: The new seller-defined name for the campaign. This value must be unique for the seller. If you don't want to change the name of the campaign, specify the current campaign name in this field. You can use any alphanumeric characters in the name, except the less than (&lt;) or greater than (&gt;) characters.Max length: 80 characters.
  * endDate `string`: The new date and time the campaign ends, in UTC format (yyyy-MM-ddThh:mm:ssZ). If this field is blank (code&gt;null), it indicates a campaign that has no end date. For display purposes, convert this time into the local time of the seller.
  * startDate `string`: The new start date for the campaign, in UTC format (yyyy-MM-ddThh:mm:ssZ). If the campaign is currently RUNNING or PAUSED, enter the current date in this field because you cannot submit past or future date for these campaigns. On the date specified, the service derives the keywords for each listing in the campaign, creates an ad for each listing, and associates each new ad with the campaign. The campaign starts after this process is completed. The amount of time it takes the service to start the campaign depends on the number of listings in the campaign. Call getCampaigns to retrieve the campaign_id and the campaign status (RUNNING, PAUSED, ENDED, and so on) for all the seller's campaigns.


