# @datafire/autodealerdata

Client library for CIS Automotive API

## Installation and Usage
```bash
npm install --save @datafire/autodealerdata
```
```js
let autodealerdata = require('@datafire/autodealerdata').create();

.then(data => {
  console.log(data);
});
```

## Description

<div style="">This API provides access to our Automotive Data. Use of this API is subject to our <a href="https://autodealerdata.com/tos">Terms of Service</a></div>
&nbsp;
<h3 style="">For a quick start guide <a href="/APIQuickStart">click here</a></h3>
&nbsp;
<div> If you signed up through RapidAPI make your test calls <a href="https://rapidapi.com/competitive-intelligence-solutions-llc-competitive-intelligence-solutions-llc-default/api/cis-automotive">here</a></div>
&nbsp;
<div>The general workflow is to: <br/>&nbsp;<div><strong>1.</strong> Authenticate with your CIS Automotive API Keys to get a Json Web Token (JWT). Do not use RapidAPI keys.</div>
<div><div><strong>2.</strong> Then use that token as an argument when calling other endpoints.</div>
&nbsp;
<div>Equivalent HTTP GET and POST methods are available for some endpoints. </div>
&nbsp;
<div>Endpoints may appear more than once on this page if they are associated with multiple tags. eg "Sales Data", "Premium", "Pro Plan or Greater" To see which endpoints are included in different
plans look under the "X Plan or Greater" tags for the respective plan name.</div>
&nbsp;
<h3>If you signed up for our API through RapidAPI you can make your test calls <a href="https://rapidapi.com/competitive-intelligence-solutions-llc-competitive-intelligence-solutions-llc-default/api/cis-automotive">on their platform</a>. 
Your RapidAPI credentials will not work on this page.</h3><h3> Do not use your RapidAPI keys on this page.</h3>
<h3>If you signed up with us and have an account, you must first authenticate with your API Keys 
and retrieve a Json Web Token (JWT) from the /getToken endpoint to access the other endpoints.</h3> 

<h3>Your JWT is a required argument to all endpoints.</h3></div>

## Actions

### daysSupply_daysSupply_get
Average, median, standard deviation, population variance, and whole region average of the 
days of supply left on dealer lots for a given brand and region. The average, median, stdDev, and pVar fields are calculated on
a dealer by dealer basis while the whole region average treats the entire region like a single dealership. 
The average field may differ from the whole region average, especially when dealers are out of 
a given model. 

The available brand and region names can be retrieved from their respective endpoints.


```js
autodealerdata.daysSupply_daysSupply_get({
  "jwt": "",
  "brandName": ""
}, context)
```

#### Input
* input `object`
  * jwt **required** `string`
  * brandName **required** `string`
  * regionName `string`

#### Output
* output [GenericResponse](#genericresponse)

### daysToSell_daysToSell_get
Average, median, standard deviation, population variance, and whole region average of the 
number of days a vehicle spends on dealer lots for a given brand and region. The average, median, stdDev, and pVar fields are calculated on
a dealer by dealer basis while the whole region average treats the entire region like a single dealership. 
The average field may differ from the whole region average.

The available brand and region names can be retrieved from their respective endpoints.


```js
autodealerdata.daysToSell_daysToSell_get({
  "jwt": "",
  "brandName": ""
}, context)
```

#### Input
* input `object`
  * jwt **required** `string`
  * brandName **required** `string`
  * regionName `string`

#### Output
* output [GenericResponse](#genericresponse)

### getBrandNames_getBrands_get
Get vehicle brand names. 

These names are used as arguments for other endpoints. The names are generally not case sensitive
when used with other endpoints, but it is best practice to use the names returned by this endpoint without changes.


```js
autodealerdata.getBrandNames_getBrands_get({
  "jwt": ""
}, context)
```

#### Input
* input `object`
  * jwt **required** `string`

#### Output
* output [BrandResp](#brandresp)

### getDealers_getDealers_get
Premium. Dealership information in a given zip code using the first 4 digits. Returns name, address, state, zipCode, and IDs.
For example a call with the zip code 92701 would return dealers with zip codes in the range [92700, 92709]


```js
autodealerdata.getDealers_getDealers_get({
  "jwt": "",
  "zipCode": 0
}, context)
```

#### Input
* input `object`
  * jwt **required** `string`
  * zipCode **required** `integer`

#### Output
* output [DealershipDataResp](#dealershipdataresp)

### getDealers_getDealersByID_get
Premium. Dealership information using the internal ID. Returns name, address, state, zipCode, and ID for a single dealer in the same format as the /getDealers endpoint.
Dealer IDs are generally retrieved via the /getDealers or /getDealersByRegion endpoints.


```js
autodealerdata.getDealers_getDealersByID_get({
  "jwt": "",
  "dealerID": 0
}, context)
```

#### Input
* input `object`
  * jwt **required** `string`
  * dealerID **required** `integer`

#### Output
* output [DealershipDataResp](#dealershipdataresp)

### getDealers_getDealersByRegion_get
Premium. Dealership information in a given region. Returns name, address, state, zipCode, and IDs. Results are paginated with up to 30 results per page.


```js
autodealerdata.getDealers_getDealersByRegion_get({
  "jwt": ""
}, context)
```

#### Input
* input `object`
  * jwt **required** `string`
  * regionName `string`
  * page `integer`

#### Output
* output [DealershipDataPaginatedResp](#dealershipdatapaginatedresp)

### getModelNamesAll_getInactiveModels_get
Get all model names including discontinued models. Because these models are no longer built, or have very poor market performance
they are not incuded in the normal getModels endpoint. Many users itterate through the model names with our new vehicle sales
endpoints and waste some of their quota making self contradictory requests. This endpoint was created to aleviate the use case where
someone requests information on new vehicle sales for a model that has not been sold new for a long, long, time. 

These names are used as arguments for other endpoints. The names are generally not case sensitive
when used with other endpoints, but it is best practice to use the names returned by this endpoint without changes.


```js
autodealerdata.getModelNamesAll_getInactiveModels_get({
  "jwt": "",
  "brandName": ""
}, context)
```

#### Input
* input `object`
  * jwt **required** `string`
  * brandName **required** `string`

#### Output
* output [ModelResp](#modelresp)

### getModelNames_getModels_get
Get brand model names for currently active models. This endpoint does not return model names that have been discontinued or have 
sold less than 10 vehicles in the last month and a half.

These names are used as arguments for other endpoints. The names are generally not case sensitive
when used with other endpoints, but it is best practice to use the names returned by this endpoint without changes.


```js
autodealerdata.getModelNames_getModels_get({
  "jwt": "",
  "brandName": ""
}, context)
```

#### Input
* input `object`
  * jwt **required** `string`
  * brandName **required** `string`

#### Output
* output [ModelResp](#modelresp)

### getRegionBrandMarketShare_getRegionBrandMarketShare_get
Market share of a given brand in a given region by number of vehicles sold over the last 45 days.


```js
autodealerdata.getRegionBrandMarketShare_getRegionBrandMarketShare_get({
  "jwt": "",
  "brandName": ""
}, context)
```

#### Input
* input `object`
  * jwt **required** `string`
  * brandName **required** `string`
  * regionName `string`

#### Output
* output [GenericResponse](#genericresponse)

### getRegionMarketShare_getRegionMarketShare_get
Market share of a all brands in a given region by number of vehicles sold over the last 45 days.


```js
autodealerdata.getRegionMarketShare_getRegionMarketShare_get({
  "jwt": ""
}, context)
```

#### Input
* input `object`
  * jwt **required** `string`
  * regionName `string`

#### Output
* output [GenericResponse](#genericresponse)

### getRegions_getRegions_get
Get region names. These names are used as arguments for other endpoints. The names are generally not case sensitive
when used with other endpoints, but it is best practice to use the names returned by this endpoint without changes.


```js
autodealerdata.getRegions_getRegions_get({
  "jwt": ""
}, context)
```

#### Input
* input `object`
  * jwt **required** `string`

#### Output
* output [RegionResp](#regionresp)

### getSubUserKeys_getSubUserKeys_get
Get a list of your issued SubUser API Keys. Includes active and revoked keys.


```js
autodealerdata.getSubUserKeys_getSubUserKeys_get({
  "apiID": "",
  "apiKey": ""
}, context)
```

#### Input
* input `object`
  * apiID **required** `string`
  * apiKey **required** `string`

#### Output
* output [GenericResponse](#genericresponse)

### makeToken_getToken_get
This is the first function you should call. 

If you are accessing our API through a third party provider they will handle authenticating to our API for you 
and you will not need call this function or retrieve a JSON Web Token. 

All other functions require the JSON Web Token (JWT) from this function to 
be incuded in their arguments. The value of the "token" field is the actual JWT and any other values in the returned JSON
are metadata there for your convenience. Tokens are valid for a default of 24 hours (86400 seconds). If you try calling an
API endpoint with a missing, invalid, or expired JWT it will return a HTTP 403 code. You would then need to call this end point
to get a new token.


```js
autodealerdata.makeToken_getToken_get({
  "apiID": "",
  "apiKey": ""
}, context)
```

#### Input
* input `object`
  * apiID **required** `string`
  * apiKey **required** `string`

#### Output
* output [JSONWebToken](#jsonwebtoken)

### makeToken_getToken_post
This is the first function you should call. 

If you are accessing our API through a third party provider they will handle authenticating to our API for you 
and you will not need call this function or retrieve a JSON Web Token. 

All other functions require the JSON Web Token (JWT) from this function to 
be incuded in their arguments. The value of the "token" field is the actual JWT and any other values in the returned JSON
are metadata there for your convenience. Tokens are valid for a default of 24 hours (86400 seconds). If you try calling an
API endpoint with a missing, invalid, or expired JWT it will return a HTTP 403 code. You would then need to call this end point
to get a new token.


```js
autodealerdata.makeToken_getToken_post({
  "apiID": "",
  "apiKey": ""
}, context)
```

#### Input
* input `object`
  * apiID **required** `string`
  * apiKey **required** `string`

#### Output
* output [JSONWebToken](#jsonwebtoken)

### getAvgListPrice_listPrice_get
Average, median, standard deviation, and population variance of the ask price of new vehicles over the last 15 days for a given brand and region.

The available brand and region names can be retrieved from their respective endpoints.


```js
autodealerdata.getAvgListPrice_listPrice_get({
  "jwt": "",
  "brandName": ""
}, context)
```

#### Input
* input `object`
  * jwt **required** `string`
  * brandName **required** `string`
  * regionName `string`

#### Output
* output [BasicModelStatsResp](#basicmodelstatsresp)

### getListingsByDealer_listings_get
Returns a dealer's listings over the last 45 days by dealer ID. The ID can be found by calling the /getDealers endpoint. 
Listing keys are: vin, askPrice, msrp, isNew, firstSeen, lastSeen, modelName, brandName.
Results are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).


```js
autodealerdata.getListingsByDealer_listings_get({
  "jwt": "",
  "dealerID": 0
}, context)
```

#### Input
* input `object`
  * jwt **required** `string`
  * dealerID **required** `integer`
  * page `integer`
  * newCars `boolean`

#### Output
* output [ListingResp](#listingresp)

### getListingsByRegion_listingsByRegion_get
Returns a dealer's listings over up to the last 45 days by region. 
Listing keys are: vin, askPrice, msrp, isNew, firstSeen, lastSeen, modelName, brandName.
Results are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).


```js
autodealerdata.getListingsByRegion_listingsByRegion_get({
  "jwt": "",
  "regionName": "",
  "modelName": ""
}, context)
```

#### Input
* input `object`
  * jwt **required** `string`
  * regionName **required** `string`
  * modelName **required** `string`
  * daysBack `integer`
  * page `integer`
  * newCars `boolean`

#### Output
* output [ListingResp](#listingresp)

### getListingsByRegionAndDate_listingsByRegionAndDate_get
Returns listings active in a region in the given date range [startdate, endDate), or in other words dates that satisfy startDate <= X < endDate. Maximum range is 45 days 
Listing keys are: vin, askPrice, msrp, isNew, firstSeen, lastSeen, modelName, brandName.
Results are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).


```js
autodealerdata.getListingsByRegionAndDate_listingsByRegionAndDate_get({
  "jwt": "",
  "regionName": "",
  "modelName": "",
  "startDate": "",
  "endDate": ""
}, context)
```

#### Input
* input `object`
  * jwt **required** `string`
  * regionName **required** `string`
  * modelName **required** `string`
  * startDate **required** `string`
  * endDate **required** `string`
  * page `integer`
  * newCars `boolean`

#### Output
* output [ListingResp](#listingresp)

### makeSubUserKey_makeSubUserKey_post
This endpoint is only fully available to users with a paid plan. Users on Basic or Trial plans may only create keys valid on the "localhost" domain.
This endpoint creates an API key that can be embedded in frontend applications such as web pages that allow your users to directly make API calls. 
The "endpoints" value is an array of strings that name the allowed endpoints that may be called using the Sub User Key. Passing a "*" value in the array will allow
all endpoints that require a JWT (JSON Web Token) to be called by the Sub User Key. The keys are valid for as long as your account is valid or you revoke the Sub User Key.
All API calls made by the Sub User Keys are billed to your account. Additionally you should not call this endpoint or the /revokeSubUserKey endpoint at a combined rate 
higher than once per second. 


```js
autodealerdata.makeSubUserKey_makeSubUserKey_post({
  "apiID": "",
  "apiKey": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * apiID **required** `string`
  * apiKey **required** `string`
  * siteName `string`
  * body **required** [EndpointList](#endpointlist)

#### Output
* output [SubUserJSONWebToken](#subuserjsonwebtoken)

### getModelUsedDist_modelYearDist_get
Market share of used vehicles over the last 45 days by model and year. All values are relative to vehicles of the same model.
For example: a percentOfMarket value of 25, year of 2017, and modelName of Camry means that 25% of used Camrys on the market 
in the given region over the last 45 days were from the 2017 model year.


```js
autodealerdata.getModelUsedDist_modelYearDist_get({
  "jwt": "",
  "modelName": "",
  "brandName": ""
}, context)
```

#### Input
* input `object`
  * jwt **required** `string`
  * modelName **required** `string`
  * brandName **required** `string`
  * regionName `string`

#### Output
* output [ModelYearDistResp](#modelyeardistresp)

### getDealerSales_regionDailySales_get
Get regional sales by brand and day. Most recent data is typically only 2 days old for this endpoint.
    
The Day field is in YYYY-MM-DD format. For example if you wanted sales data from April 5th of 2020 the day field would be '2020-04-05'

Data availability depends on region and goes back up to 2016.


```js
autodealerdata.getDealerSales_regionDailySales_get({
  "jwt": "",
  "brandName": "",
  "regionName": "",
  "day": ""
}, context)
```

#### Input
* input `object`
  * jwt **required** `string`
  * brandName **required** `string`
  * regionName **required** `string`
  * day **required** `string`

#### Output
* output [GenericResponse](#genericresponse)

### getDealerSales_regionSales_get
Premium. Get regional sales by brand and month, broken down by day. Most recent data is typically only 2 days old for this endpoint.
    
The month field is in YYYY-MM-DD format. For example if you wanted sales data from April of 2020 the month field would be '2020-04-01'

Data availability depends on region and goes back up to 2016.


```js
autodealerdata.getDealerSales_regionSales_get({
  "jwt": "",
  "brandName": "",
  "regionName": "",
  "month": ""
}, context)
```

#### Input
* input `object`
  * jwt **required** `string`
  * brandName **required** `string`
  * regionName **required** `string`
  * month **required** `string`

#### Output
* output [GenericResponse](#genericresponse)

### revokeSubUserKey_revokeSubUserKey_put
Revoke a SubUser API Key with the given UUID. This action can not be undone.


```js
autodealerdata.revokeSubUserKey_revokeSubUserKey_put({
  "apiID": "",
  "apiKey": "",
  "subUserKeyUUID": ""
}, context)
```

#### Input
* input `object`
  * apiID **required** `string`
  * apiKey **required** `string`
  * subUserKeyUUID **required** `string`

#### Output
* output [GenericResponse](#genericresponse)

### getAvgSalePrice_salePrice_get
Average, median, standard deviation, and population variance of the sale price of new vehicles over the last 15 days for a given brand and region.

The available brand and region names can be retrieved from their respective endpoints.


```js
autodealerdata.getAvgSalePrice_salePrice_get({
  "jwt": "",
  "brandName": ""
}, context)
```

#### Input
* input `object`
  * jwt **required** `string`
  * brandName **required** `string`
  * regionName `string`

#### Output
* output [BasicModelStatsResp](#basicmodelstatsresp)

### getModelSaleBuckets_salePriceHistogram_get
Histogram of the sale price of vehicles over the last 45 days for a given model and region. 
Price buckets are grouped in units of $1000
The available brand, model, and region names can be retrieved from their respective endpoints.


```js
autodealerdata.getModelSaleBuckets_salePriceHistogram_get({
  "jwt": "",
  "modelName": "",
  "brandName": ""
}, context)
```

#### Input
* input `object`
  * jwt **required** `string`
  * modelName **required** `string`
  * brandName **required** `string`
  * regionName `string`

#### Output
* output [BucketResp](#bucketresp)

### getMarket3_similarSalePrice_get
Premium. Provides the average, stdDev, and count, of the sale price and mileage of similar new and used vehicles in a given region based off the provided VIN. 
Optionally restricts report to vehicles of the same model year and goes back up to 120 days.


```js
autodealerdata.getMarket3_similarSalePrice_get({
  "jwt": "",
  "vin": ""
}, context)
```

#### Input
* input `object`
  * jwt **required** `string`
  * vin **required** `string`
  * regionName `string`
  * daysBack `integer`
  * sameYear `boolean`

#### Output
* output [SimilarSalePriceResp](#similarsalepriceresp)

### getTopModels_topModels_get
Sales ranking of different models by region over the last 45 days. 
The <strong>percentOfTopSales</strong> value is the percent of the top seller the model represents. 

For example: a value of 80% means that model sold 8 vehicles for every 10 of the top model sold.

The other fields represent the model percent of X. The <strong>brandMarketShare</strong> field is that brand's market share of the region
over the report's time interval.


```js
autodealerdata.getTopModels_topModels_get({
  "jwt": ""
}, context)
```

#### Input
* input `object`
  * jwt **required** `string`
  * regionName `string`

#### Output
* output [TopModelResp](#topmodelresp)

### getHistory2_vehicleHistory_get
Premium. Provides a simple report detailing a vechicle's sales history at dealerships. Data includes the name of the dealership, dates it was for sale,
price, new/used condition, mileage, dealership state, and dealership zip code. The data for this endpoint is generally refreshed weekly.


```js
autodealerdata.getHistory2_vehicleHistory_get({
  "jwt": "",
  "vin": ""
}, context)
```

#### Input
* input `object`
  * jwt **required** `string`
  * vin **required** `string`

#### Output
* output [HistoryResp](#historyresp)

### vinDecode_vinDecode_get
Decodes the provided North American vin and provides recall information if available. 
We require at least the first 12 out of 17 characters in the vin to attempt a decode. The vin is not case sensitive.
If passEmpty (default False) is True we will also include the empty fields in the response json. 


```js
autodealerdata.vinDecode_vinDecode_get({
  "jwt": "",
  "vin": ""
}, context)
```

#### Input
* input `object`
  * jwt **required** `string`
  * vin **required** `string`
  * passEmpty `boolean`

#### Output
* output [GenericResponse](#genericresponse)



## Definitions

### BasicModelStats
* BasicModelStats `object`
  * average **required** `number`
  * median **required** `number`
  * name **required** `string`
  * pVariance **required** `number`
  * stdDev **required** `number`

### BasicModelStatsResp
* BasicModelStatsResp `object`
  * brandName `string`
  * cacheTimeLimit `integer`
  * condition `string`
  * data **required** `array`
    * items [BasicModelStats](#basicmodelstats)
  * modelName `string`
  * msg `string`
  * regionName `string`

### BrandResp
* BrandResp `object`
  * brandName `string`
  * cacheTimeLimit `integer`
  * condition `string`
  * data **required** `array`
    * items `string`
  * modelName `string`
  * msg `string`
  * regionName `string`

### BucketEntry
* BucketEntry `object`
  * bucket **required** `number`
  * modelName **required** `string`
  * percentOfMarket **required** `number`

### BucketResp
* BucketResp `object`
  * brandName `string`
  * cacheTimeLimit `integer`
  * condition `string`
  * data **required** `array`
    * items [BucketEntry](#bucketentry)
  * modelName `string`
  * msg `string`
  * regionName `string`

### DealershipData
* DealershipData `object`
  * address **required** `string`
  * dealerName **required** `string`
  * ids **required** `array`
    * items `integer`
  * state **required** `string`
  * zipCode **required** `integer`

### DealershipDataPaginated
* DealershipDataPaginated `object`
  * dealers **required** `array`
    * items [DealershipData](#dealershipdata)
  * maxPages **required** `integer`
  * page **required** `integer`

### DealershipDataPaginatedResp
* DealershipDataPaginatedResp `object`
  * brandName `string`
  * cacheTimeLimit `integer`
  * condition `string`
  * data **required** [DealershipDataPaginated](#dealershipdatapaginated)
  * modelName `string`
  * msg `string`
  * regionName `string`

### DealershipDataResp
* DealershipDataResp `object`
  * brandName `string`
  * cacheTimeLimit `integer`
  * condition `string`
  * data **required** `array`
    * items [DealershipData](#dealershipdata)
  * modelName `string`
  * msg `string`
  * regionName `string`

### EndpointList
* EndpointList `object`
  * endPoints `array`
    * items `string`

### GenericResponse
* GenericResponse `object`
  * brandName `string`
  * cacheTimeLimit `integer`
  * condition `string`
  * modelName `string`
  * msg `string`
  * regionName `string`

### HTTPValidationError
* HTTPValidationError `object`
  * detail `array`
    * items [ValidationError](#validationerror)

### HistoryResp
* HistoryResp `object`
  * brandName `string`
  * cacheTimeLimit `integer`
  * condition `string`
  * data **required** [VehHistoryData](#vehhistorydata)
  * modelName `string`
  * msg `string`
  * regionName `string`

### JSONWebToken
* JSONWebToken `object`
  * createdOn `integer`
  * expires `integer`
  * token **required** `string`

### Listing
* Listing `object`
  * askPrice **required** `number`
  * brandName **required** `string`
  * color `string`
  * dealerID **required** `integer`
  * firstSeen **required** `string`
  * interiorColor `string`
  * isNew **required** `boolean`
  * lastSeen **required** `string`
  * mileage `number`
  * modelName **required** `string`
  * msrp **required** `number`
  * vin **required** `string`
  * vinDecode `object`
  * year **required** `number`

### ListingResp
* ListingResp `object`
  * brandName `string`
  * cacheTimeLimit `integer`
  * condition `string`
  * data **required** [ListingRespPaginated](#listingresppaginated)
  * endDate `string`
  * modelName `string`
  * msg `string`
  * regionName `string`
  * startDate `string`

### ListingRespPaginated
* ListingRespPaginated `object`
  * listings **required** `array`
    * items [Listing](#listing)
  * maxPages **required** `integer`
  * page **required** `integer`

### ModelDict
* ModelDict `object`
  * modelName **required** `string`

### ModelResp
* ModelResp `object`
  * brandName `string`
  * cacheTimeLimit `integer`
  * condition `string`
  * data **required** `array`
    * items [ModelDict](#modeldict)
  * modelName `string`
  * msg `string`
  * regionName `string`

### ModelYearDistEntry
* ModelYearDistEntry `object`
  * brandName **required** `string`
  * modelName **required** `string`
  * percentOfMarket **required** `number`
  * year **required** `integer`

### ModelYearDistResp
* ModelYearDistResp `object`
  * brandName `string`
  * cacheTimeLimit `integer`
  * condition `string`
  * data **required** `array`
    * items [ModelYearDistEntry](#modelyeardistentry)
  * modelName `string`
  * msg `string`
  * regionName `string`

### RegionResp
* RegionResp `object`
  * brandName `string`
  * cacheTimeLimit `integer`
  * condition `string`
  * data **required** `array`
    * items `string`
  * modelName `string`
  * msg `string`
  * regionName `string`

### SimilarSalePriceData
* SimilarSalePriceData `object`
  * daysBack **required** `integer`
  * mileCount **required** `integer`
  * milesAvg **required** `number`
  * milesStdDev **required** `number`
  * newCount **required** `integer`
  * newSaleAvg **required** `number`
  * newSaleStdDev **required** `number`
  * usedCount **required** `integer`
  * usedSaleAvg **required** `number`
  * usedSaleStdDev **required** `number`

### SimilarSalePriceResp
* SimilarSalePriceResp `object`
  * brandName `string`
  * cacheTimeLimit `integer`
  * condition `string`
  * data **required** [SimilarSalePriceData](#similarsalepricedata)
  * modelName `string`
  * msg `string`
  * regionName `string`

### SubUserJSONWebToken
* SubUserJSONWebToken `object`
  * createdOn `integer`
  * domain **required** `string`
  * endPoints `array`
    * items `string`
  * expires `integer`
  * token **required** `string`
  * uuid **required** `string`

### TopModelEntry
* TopModelEntry `object`
  * brandMarketShare **required** `number`
  * brandName **required** `string`
  * modelName **required** `string`
  * percentOfBrandSales **required** `number`
  * percentOfTopSales **required** `number`

### TopModelResp
* TopModelResp `object`
  * brandName `string`
  * cacheTimeLimit `integer`
  * condition `string`
  * data **required** `array`
    * items [TopModelEntry](#topmodelentry)
  * modelName `string`
  * msg `string`
  * regionName `string`

### ValidationError
* ValidationError `object`
  * loc **required** `array`
    * items `string`
  * msg **required** `string`
  * type **required** `string`

### VehHistory
* VehHistory `object`
  * dealerName **required** `string`
  * firstSeen **required** `string`
  * lastSeen **required** `string`
  * miles **required** `integer`
  * new **required** `boolean`
  * price **required** `number`
  * state **required** `string`
  * zip **required** `integer`

### VehHistoryData
* VehHistoryData `object`
  * data **required** `array`
    * items [VehHistory](#vehhistory)
  * vin **required** `string`


