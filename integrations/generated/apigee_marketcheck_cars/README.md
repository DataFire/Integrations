# @datafire/apigee_marketcheck_cars

Client library for Marketcheck Cars

## Installation and Usage
```bash
npm install --save @datafire/apigee_marketcheck_cars
```
```js
let apigee_marketcheck_cars = require('@datafire/apigee_marketcheck_cars').create();

apigee_marketcheck_cars.search({}).then(data => {
  console.log(data);
});
```

## Description

<b>Access the New, Used and Certified cars inventories for all Car Dealers in US.</b> <br/>The data is sourced from online listings by over 44,000 Car dealers in US. At any time, there are about 6.2M searchable listings (about 1.9M unique VINs) for Used & Certified cars and about 6.6M (about 3.9M unique VINs) New Car listings from all over US. We use this API at the back for our website <a href='https://www.marketcheck.com' target='_blank'>www.marketcheck.com</a> and our Android and iOS mobile apps too.<br/><h5> Few useful links : </h5><ul><li>A quick view of the API and the use cases is depicated <a href='https://portals.marketcheck.com/mcapi/' target='_blank'>here</a></li><li>The Postman collection with various usages of the API is shared here https://www.getpostman.com/collections/2752684ff636cdd7bac2</li></ul>

## Actions

### getAverages
[Merged with the /search API - Please check the 'stats' parameter to the Search API above] Get market averages for price / miles / msrp / dom (days on market) fields for active cars matching the given reference VIN's basic specification or Year, Make, Model, Trim (Optional) criteria


```js
apigee_marketcheck_cars.getAverages({
  "vin": ""
}, context)
```

#### Input
* input `object`
  * api_key `string`: The API Authentication Key. Mandatory with all API calls.
  * vin **required** `string`: VIN as a reference to the type of car for which averages data is to be returned
  * year `string`: Year of the car
  * make `string`: Make of the car
  * model `string`: Model of the Car
  * trim `string`: Trim of the Car
  * fields `string`: Comma separated list of fields to generate stats for. Allowed fields in the list are - price, miles, msrp, dom (days on market)

#### Output
* output [Averages](#averages)

### getComparison
[MOCK] Get historical market trends for cars matching the given VIN's basic specification or Year, Make, Model, Trim (Optional) criteria


```js
apigee_marketcheck_cars.getComparison({
  "vin": ""
}, context)
```

#### Input
* input `object`
  * api_key `string`: The API Authentication Key. Mandatory with all API calls.
  * vin **required** `string`: VIN as a reference to the type of car for which comparison data is to be returned

#### Output
* output [ComparisonPoint](#comparisonpoint)

### getCompetition
[MOCK] Competitor cars in market for current vin


```js
apigee_marketcheck_cars.getCompetition({
  "vin": ""
}, context)
```

#### Input
* input `object`
  * api_key `string`: The API Authentication Key. Mandatory with all API calls.
  * vin **required** `string`: VIN as a reference to the type of car for which competitors data is to be returned

#### Output
* output [CompetitorsPoint](#competitorspoint)

### getDealer
Get a particular dealer's information by its id


```js
apigee_marketcheck_cars.getDealer({
  "dealer_id": ""
}, context)
```

#### Input
* input `object`
  * api_key `string`: The API Authentication Key. Mandatory with all API calls.
  * dealer_id **required** `string`: Dealer id to get all the dealer info attributes

#### Output
* output [Dealer](#dealer)

### getDealerActiveInventory
Get a dealer's currently active inventory


```js
apigee_marketcheck_cars.getDealerActiveInventory({
  "dealer_id": ""
}, context)
```

#### Input
* input `object`
  * api_key `string`: The API Authentication Key. Mandatory with all API calls.
  * dealer_id **required** `string`: Id representing the dealer to fetch the active inventory for
  * rows `string`: Number of results to return. Default is 10. Max is 50
  * start `string`: Page number to fetch the results for the given criteria. Default is 1. Pagination is allowed only till first 1000 results for the search and sort criteria. The page value can be only between 1 to 1000/rows

#### Output
* output [BaseListing](#baselisting)

### getDealerHistoricalInventory
[v1 : Not Implemented Yet] - Get a dealer's historical inventory


```js
apigee_marketcheck_cars.getDealerHistoricalInventory({
  "dealer_id": ""
}, context)
```

#### Input
* input `object`
  * dealer_id **required** `string`: Id representing the dealer to fetch the active inventory for

#### Output
* output [BaseListing](#baselisting)

### getDealerLandingPage
Experimental: Get cached version of dealer landing page by dealer id


```js
apigee_marketcheck_cars.getDealerLandingPage({
  "dealer_id": ""
}, context)
```

#### Input
* input `object`
  * api_key `string`: The API Authentication Key. Mandatory with all API calls.
  * dealer_id **required** `string`: Robot id to get the landing page html for

#### Output
* output [DealerLandingPage](#dealerlandingpage)

### getDealerRatings
[MOCK] Get a dealer's Rating


```js
apigee_marketcheck_cars.getDealerRatings({
  "dealer_id": ""
}, context)
```

#### Input
* input `object`
  * dealer_id **required** `string`: Id representing the dealer to fetch the ratings for

#### Output
* output [DealerRating](#dealerrating)

### getDealerReviews
[MOCK] Get a dealer's Review


```js
apigee_marketcheck_cars.getDealerReviews({
  "dealer_id": ""
}, context)
```

#### Input
* input `object`
  * dealer_id **required** `string`: Id representing the dealer to fetch the ratings for

#### Output
* output [DealerReview](#dealerreview)

### dealerSearch
The dealers API returns a list of dealers around a given point and radius. Max radius of only 50 miles is supported.


```js
apigee_marketcheck_cars.dealerSearch({
  "latitude": 0,
  "longitude": 0,
  "radius": 0
}, context)
```

#### Input
* input `object`
  * api_key `string`: The API Authentication Key. Mandatory with all API calls.
  * latitude **required** `number`: Latitude component of location
  * longitude **required** `number`: Longitude component of location
  * radius **required** `integer`: Radius around the search location
  * rows `number`: Number of results to return. Default is 10. Max is 50
  * start `number`: Offset for the search results. Default is 1.

#### Output
* output [DealersResponse](#dealersresponse)

### getDepreciation
[MOCK] Model resale value based on depreciation


```js
apigee_marketcheck_cars.getDepreciation({
  "vin": ""
}, context)
```

#### Input
* input `object`
  * api_key `string`: The API Authentication Key. Mandatory with all API calls.
  * vin **required** `string`: VIN as a reference to the type of car for which Depreciation stats is to be returned

#### Output
* output [DepreciationPoint](#depreciationpoint)

### getEconomy
[MOCK] Calculate Economy i.e. Environmental Friendliness


```js
apigee_marketcheck_cars.getEconomy({
  "vin": ""
}, context)
```

#### Input
* input `object`
  * api_key `string`: The API Authentication Key. Mandatory with all API calls.
  * vin **required** `string`: VIN as a reference to the type of car for which Environmental Economy data is to be returned

#### Output
* output [Economy](#economy)

### getFacets
[Merged with the /search API - Please check the 'facets' parameter to the Search API above] Get the facets for the given simple filter criteria (by given VIN's basic specification, Or by Year, Make, Model, Trim criteria) and facet fields


```js
apigee_marketcheck_cars.getFacets({
  "fields": ""
}, context)
```

#### Input
* input `object`
  * api_key `string`: The API Authentication Key. Mandatory with all API calls.
  * vin `string`: VIN as a reference to the type of car for which facets data is to be returned
  * year `string`: Year of the car
  * make `string`: Make of the car
  * model `string`: Model of the Car
  * trim `string`: Trim of the Car
  * fields **required** `string`: Comma separated list of fields to generate facets for. Supported fields are - year, make, model, trim, exterior_color, interior_color, drivetrain, vehicle_type, car_type, body_style, body_subtype, doors

#### Output
* output `array`
  * items [FacetItem](#facetitem)

### getEfficiency
[MOCK] Calculate fuel efficiency from taxonomy db mileage values


```js
apigee_marketcheck_cars.getEfficiency({
  "vin": ""
}, context)
```

#### Input
* input `object`
  * api_key `string`: The API Authentication Key. Mandatory with all API calls.
  * vin **required** `string`: VIN as a reference to the type of car for which fuel data is to be returned

#### Output
* output [FuelEfficiency](#fuelefficiency)

### history
The history API returns online listing history for a car identified by its VIN. History listings are sorted in the descending order of the listing date / last seen date


```js
apigee_marketcheck_cars.history({
  "vin": ""
}, context)
```

#### Input
* input `object`
  * api_key `string`: The API Authentication Key. Mandatory with all API calls.
  * vin **required** `string`: The VIN to identify the car to fetch the listing history. Must be a valid 17 char VIN
  * fields `string`: List of fields to fetch, in case the default fields list in the response is to be trimmed down
  * rows `number`: Number of results to return. Default is 10. Max is 50
  * page `number`: Page number to fetch the results for the given criteria. Default is 1.

#### Output
* output `array`
  * items [HistoricalListing](#historicallisting)

### getListing
Get a particular listing by its id


```js
apigee_marketcheck_cars.getListing({
  "id": ""
}, context)
```

#### Input
* input `object`
  * api_key `string`: The API Authentication Key. Mandatory with all API calls.
  * id **required** `string`: Listing id to get all the listing attributes

#### Output
* output [Listing](#listing)

### getListingExtra
Get listing options, features, seller comments


```js
apigee_marketcheck_cars.getListingExtra({
  "id": ""
}, context)
```

#### Input
* input `object`
  * api_key `string`: The API Authentication Key. Mandatory with all API calls.
  * id **required** `string`: Listing id to get all the long text listing attributes

#### Output
* output [ListingExtraAttributes](#listingextraattributes)

### getListingMedia
Get listing media (photo, photos) by id


```js
apigee_marketcheck_cars.getListingMedia({
  "id": ""
}, context)
```

#### Input
* input `object`
  * api_key `string`: The API Authentication Key. Mandatory with all API calls.
  * id **required** `string`: Listing id to get all the listing attributes

#### Output
* output [ListingMedia](#listingmedia)

### getListingVDP
Cached HTML of the Vehicle Details Page (VDP) for the listing. The HTML is cached only for 7 days for all listings. So this API could be used to get HTML of mostly active listings and that have recently expired


```js
apigee_marketcheck_cars.getListingVDP({
  "id": ""
}, context)
```

#### Input
* input `object`
  * api_key `string`: The API Authentication Key. Mandatory with all API calls.
  * id **required** `string`: Listing id to get the vehicle details page (VDP) HTML
  * html `string`: Get only HTML for given listings VDP page

#### Output
* output [ListingVDP](#listingvdp)

### getMDS
Get the basic information on specifications for a car identified by a valid VIN


```js
apigee_marketcheck_cars.getMDS({
  "vin": ""
}, context)
```

#### Input
* input `object`
  * api_key `string`: The API Authentication Key. Mandatory with all API calls.
  * vin **required** `string`: VIN to decode
  * exact `string`: Exact parameter
  * latitude `number`: Latitude component of location
  * longitude `number`: Longitude component of location
  * radius `integer`: Radius around the search location
  * debug `string`: Debug parameter
  * include_sold `string`: To fetch sold vins

#### Output
* output [Mds](#mds)

### getPriceMilesPlotData
[DEPRECIATED Please check this in /search API using plot=true]Get price, miles plot data for active cars matching the given VIN's basic specification or Year, Make, Model, Trim (Optional) criteria


```js
apigee_marketcheck_cars.getPriceMilesPlotData({
  "car_type": ""
}, context)
```

#### Input
* input `object`
  * api_key `string`: The API Authentication Key. Mandatory with all API calls.
  * vin `string`: VIN as a reference to the type of car for which plot data is to be returned
  * year `string`: Year of the car
  * make `string`: Make of the car
  * model `string`: Model of the Car
  * trim `string`: Trim of the Car
  * car_type **required** `string`: Car type to get the scatter plot data for
  * rows `string`: Number of results to return. Default is 1000. Max is 10000

#### Output
* output `array`
  * items [PlotPoint](#plotpoint)

### getPopularity
[MOCK] [Merged with the /search API - Please check the 'popularity' parameter to the Search API above] Get the Popularity for the given simple filter criteria (by given Year, Make, Model, Trim criteria)


```js
apigee_marketcheck_cars.getPopularity({
  "year": "",
  "make": "",
  "model": "",
  "trim": "",
  "body_type": ""
}, context)
```

#### Input
* input `object`
  * api_key `string`: The API Authentication Key. Mandatory with all API calls.
  * year **required** `string`: Year of the car
  * make **required** `string`: Make of the car
  * model **required** `string`: Model of the Car
  * trim **required** `string`: Trim of the Car
  * body_type **required** `string`: Body type to filter the cars on. Valid values are the ones returned by body_type facets API call
  * stats `string`: The list of fields for which stats need to be generated based on the matching listings for the search criteria. Allowed fields are - price, miles, msrp, dom The stats consists of mean, max, average and count of listings based on which the stats are calculated for the field. Stats could be requested in addition to the listings for the search. Please note - The API calls with the stats fields may take longer to respond.

#### Output
* output `array`
  * items [PopularityItem](#popularityitem)

### getSafetyRating
[MOCK] Get Safety ratings from third party sources


```js
apigee_marketcheck_cars.getSafetyRating({
  "vin": ""
}, context)
```

#### Input
* input `object`
  * api_key `string`: The API Authentication Key. Mandatory with all API calls.
  * vin **required** `string`: VIN to fetch the safety ratings

#### Output
* output [SafetyRating](#safetyrating)

### search
This endpoint is the meat of the API and serves many purposes. This API produces a list of currently active cars from the market for the given search criteria. The API results are limited to allow pagination upto 1000 rows. 
 The search API facilitates the following use cases - 
1. Search Cars around a given geo-point within a given radius 
2. Search cars for a specific year / make / model or combination of these 
3. Search cars matching multiple year, make, model combinatins in the same search request
4. Filter results by most car specification attributes
5. Search for similar cars by VIN or Taxonomy VIN 
6. Filter cars within a given price / miles / days on market (dom) range
7. Specify a sort order for the results on price / miles / dom / listed date 
8. Search cars for a given City / State combination 
9. Get Facets to build the search drill downs 
10. Get Market averages for price/miles/dom/msrp for your search


```js
apigee_marketcheck_cars.search({}, context)
```

#### Input
* input `object`
  * api_key `string`: The API Authentication Key. Mandatory with all API calls.
  * latitude `number`: Latitude component of location
  * longitude `number`: Longitude component of location
  * radius `integer`: Radius around the search location
  * zip `string`: car search bases on zipcode
  * car_type `string` (values: new, used, certified): Car type. Allowed values are - new / used / certified
  * seller_type `string`: Seller type to filter cars on. Valid filter values are those that our Search facets API returns for unique seller types. You can pass in multiple seller type values comma separated.
  * carfax_1_owner `string`: Indicates whether car has had only one owner or not
  * carfax_clean_title `string`: Indicates whether car has had any accidents or not
  * year `string`: Car year - 1980 onwards. Valid filter values are those that our Search facets API returns for unique years. You can pass in multiple year values comma separated.
  * make `string`: Car Make - should be a standard OEM Make name. Valid filter values are those that our Search facets API returns for unique make. You can pass in multiple make values separated by comma. e.g. ford,audi
  * model `string`: Car model to search. Valid filter values are those that our Search facets API returns for unique model. You can pass in multiple model values comma separated for e.g f-150,Mustang.
  * trim `string`: Car trim to search. Valid filter values are those that our Search facets API returns for unique trim. You can pass in multiple trim values comma separated
  * dealer_id `string`: Dealer id to filter the cars.
  * vin `string`: Car vin to search
  * source `string`: Source to search cars. Valid filter values are those that our Search facets API returns for unique source. You can pass in multiple source values comma separated
  * body_type `string`: Body type to filter the cars on. Valid filter values are those that our Search facets API returns for unique body types. You can pass in multiple body types comma separated.
  * body_subtype `string`: Body subtype to filter the cars on. Valid filter values are those that our Search facets API returns for unique body subtypes. You can pass in multiple body subtype values comma separated
  * vehicle_type `string`: Vehicle type to filter the cars on. Valid filter values are those that our Search facets API returns for unique vehicle types. You can pass in multiple vehicle type values comma separated
  * vins `string`: Comma separated list of 17 digit vins to search the matching cars for. Only 10 VINs allowed per request. If the request contains more than 10 VINs the first 10 VINs will be considered. Could be used as a More Like This or Similar Vehicles search for the given VINs. Ths vins parameter is an alternative to taxonomy_vins or ymmt parameters available with the search API. vins and taxonomy_vins parameters could be used to filter our cars with the exact build represented by the vins or taxonomy_vins whereas ymmt is a top level filter that does not filter cars by the build attributes like doors, drivetrain, cylinders, body type, body subtype, vehicle type etc
  * taxonomy_vins `string`: Comma separated list of 10 letters excert from the 17 letter VIN. The 10 letters to be picked up from the 17 letter VIN are - first 8 letters and the 10th and 11th letter. E.g. For a VIN - 1FTFW1EF3EKE57182 the taxonomy vin would be - 1FTFW1EFEK  A taxonomy VIN identified a build of a car and could be used to filter our cars of a particular build. This is an alternative to the vin or ymmt parameters to the search API.
  * ymmt `string`: Comma separated list of Year, Make, Model, Trim combinations. Each combination needs to have the year,make,model, trim values separated by a pipe '|' character in the form year|make|model|trim. e.g. 2010|Audi|A5,2014|Nissan|Sentra|S 6MT,|Honda|City|   You could just provide strings of the form - 'year|make||' or 'year|make|model' or '|make|model|' combinations. Individual year / make / model filters provied with the API calls will take precedence over the Year, Make, Model, Trim combinations. The Make, Model, Trim values must be valid values as per the Marketcheck Vin Decoder. If you are using a separate vin decoder then look at using the 'vins' or 'taxonomy_vins' parameter to the search api instead the year|make|model|trim combinations.
  * match `string`: Comma separated list of Year, Make, Model, Trim fields. For example - year,make,model,trim fields for which user wants to do an exact match
  * cylinders `string`: Cylinders to filter the cars on. Valid filter values are those that our Search facets API returns for unique cylinder values. You can pass in multiple cylinder values comma separated
  * transmission `string`: Transmission to filter the cars on. [a = Automatic, m = Manual]. Valid filter values are those that our Search facets API returns for unique transmission. You can pass in multiple transmission values comma separated
  * speeds `string`: Speeds to filter the cars on. Valid filter values are those that our Search facets API returns for unique speeds. You can pass in multiple speeds values comma separated
  * doors `string`: Doors to filter the cars on. Valid filter values are those that our Search facets API returns for unique doors. You can pass in multiple doors values comma separated
  * drivetrain `string`: Drivetrain to filter the cars on. Valid filter values are those that our Search facets API returns for unique drivetrains. You can pass in multiple drivetrain values comma separated
  * exterior_color `string`: Exterior color to match. Valid filter values are those that our Search facets API returns for unique exterior colors. You can pass in multiple exterior color values comma separated
  * interior_color `string`: Interior color to match. Valid filter values are those that our Search facets API returns for unique interior colors. You can pass in multiple interior color values comma separated
  * engine `string`: Filter listings on engine
  * engine_type `string`: Engine Type to match. Valid filter values are those that our Search facets API returns for unique engine types. You can pass in multiple engine type values comma separated
  * engine_aspiration `string`: Engine Aspiration to match. Valid filter values are those that our Search facets API returns for unique Engine Aspirations. You can pass in multiple Engine aspirations values comma separated
  * engine_block `string`: Engine Block to match. Valid filter values are those that our Search facets API returns for unique Engine Block. You can pass in multiple Engine Block values comma separated
  * miles_range `string`: Miles range to filter cars with miles in the given range. Range to be given in the format - min-max e.g. 1000-5000
  * price_range `string`: Price range to filter cars with the price in the range given. Range to be given in the format - min-max e.g. 1000-5000
  * dom_range `string`: Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50
  * sort_by `string`: Sort by field - allowed fields are distance|price|miles|dom|age|posted_at|year. Default sort field is distance from the given point
  * sort_order `string`: Sort order - asc or desc. Default sort order is distance from a point.
  * rows `string`: Number of results to return. Default is 10. Max is 50
  * start `string`: Page number to fetch the results for the given criteria. Default is 1. Pagination is allowed only till first 1000 results for the search and sort criteria. The page value can be only between 1 to 1000/rows
  * facets `string`: The comma separated list of fields for which facets are requested. Supported fields are - year, make, model, trim, vehicle_type, car_type, body_type, body_subtype, drivetrain, cylinders, transmission, exterior_color, interior_color, doors, engine_type, engine_aspiration, engine_block. Facets could be requested in addition to the listings for the search. Please note - The API calls with lots of facet fields may take longer to respond.
  * stats `string`: The list of fields for which stats need to be generated based on the matching listings for the search criteria. Allowed fields are - price, miles, msrp, dom The stats consists of mean, max, average and count of listings based on which the stats are calculated for the field. Stats could be requested in addition to the listings for the search. Please note - The API calls with the stats fields may take longer to respond.
  * country `string`: Filter on Country, by default US. Search available on US (United States) and CA (Canada)
  * plot `string`: If plot has value true results in around 25k coordinates with limited fields to plot respective graph
  * nodedup `string`: If nodedup is set to true then will give results using is_searchable
  * state `string`: Filter listsings on State
  * city `string`: Filter listings on city
  * dealer_name `string`: Filter listings on dealer_name
  * trim_o `string`: Filter listings on web scraped trim
  * trim_r `string`: Filter trim on custom possible matches
  * dom_active_range `string`: Active Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50
  * dom_180_range `string`: Last 180 Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50
  * options `string`: Tokenizer search on options for multiple options use | as seperator
  * features `string`: Tokenizer search on features for multiple options use | as seperator

#### Output
* output [SearchResponse](#searchresponse)

### getTrends
Get historical market trends for cars matching the given VIN's basic specification or Year, Make, Model, Trim (Optional) criteria


```js
apigee_marketcheck_cars.getTrends({
  "vin": "",
  "car_type": ""
}, context)
```

#### Input
* input `object`
  * api_key `string`: The API Authentication Key. Mandatory with all API calls.
  * vin **required** `string`: VIN as a reference to the type of car for which trend data is to be returned
  * car_type **required** `string`: Car type. Allowed values are - new / used / certified
  * year `string`: Year of the car
  * make `string`: Make of the car
  * model `string`: Model of the Car
  * trim `string`: Trim of the Car

#### Output
* output `array`
  * items [TrendPoint](#trendpoint)

### decode
Get the basic information on specifications for a car identified by a valid VIN


```js
apigee_marketcheck_cars.decode({
  "vin": ""
}, context)
```

#### Input
* input `object`
  * api_key `string`: The API Authentication Key. Mandatory with all API calls.
  * vin **required** `string`: VIN to decode

#### Output
* output [Build](#build)

### getSummaryReport
[MOCK] Generate Summary report


```js
apigee_marketcheck_cars.getSummaryReport({
  "vin": ""
}, context)
```

#### Input
* input `object`
  * api_key `string`: The API Authentication Key. Mandatory with all API calls.
  * vin **required** `string`: VIN as a reference to the type of car for which Summary data is to be returned

#### Output
* output `array`
  * items [VinReport](#vinreport)



## Definitions

### Averages
* Averages `object`
  * age `number`: Average age of the car
  * dom `number`: Average Days on Market value for the car based on all listings found in the Marketcheck database for this car
  * miles `number`: Mean miles value for the car
  * msrp `number`: Mean msrp value for the car
  * price `number`: Mean price value for the car
  * units `number`: No of units for this car on the market

### BaseListing
* BaseListing `object`: Minimal set of attributes describing a listing
  * build [Build](#build)
  * dealer [Dealer](#dealer)
  * distance `number`: Distance of the car's location from the specified user lcoation
  * dom `number`: Days on Market value for the car based on current and historical listings found in the Marketcheck database for this car
  * dom_180 `number`: Days on Market value for the car based on current and last 6 month listings found in the Marketcheck database for this car
  * dom_active `number`: Days on Market value for the car based on current and last 30 days listings found in the Marketcheck database for this car
  * exterior_color `string`: Exterior color of the car
  * first_seen_at `number`: Listing first seen at first scraped timestamp
  * first_seen_at_date `string`: Listing first seen at first scraped date
  * heading `string`: Listing title as displayed on the source website
  * id `string`: Unique identifier representing a specific listing from the Marketcheck database
  * interior_color `string`: Interior color of the car
  * inventory_type `string`: Inventory type of car
  * is_certified `integer`: Certified car
  * last_seen_at `number`: Listing last seen at (most recent) timestamp
  * last_seen_at_date `string`: Listing last seen at (most recent) date
  * media [ListingMedia](#listingmedia)
  * miles `string`: Odometer reading / reported miles usage for the car
  * price `string`: Asking price for the car
  * ref_miles `string`: Last Odometer reading / reported miles usage for the car. If the asking miles value is not or is available then the last_miles could perhaps be used. last_miles is the miles for the car listed on the source website as of last_miles_dt date
  * ref_miles_dt `integer`: The date at which the last miles was reported online. This is earlier to last_seen_date
  * ref_price `string`: Last reported price for the car. If the asking price value is not or is available then the last_price could perhaps be used. last_price is the price for the car listed on the source website as of last_price_dt date
  * ref_price_dt `integer`: The date at which the last price was reported online. This is earlier to last_seen_date
  * scraped_at_date `number`: Listing first seen at first scraped date
  * seller_type `string`: Seller type for the car
  * source `string`: Source domain of the listing
  * stock_no `string`: Stock no of the car
  * vdp_url `string`: Vehicle Details Page url of the specific car
  * vin `string`: VIN for the car

### Build
* Build `object`: Describes the Car specification
  * antibrake_sys `string`: Antibrake system of the car
  * body_type `string`: Body type of the car
  * city_miles `string`: City miles of the car
  * cylinders `number`: No of cylinders of the car
  * doors `number`: No of doors of the car
  * drivetrain `string`: Drivetrain of the car
  * engine `string`: Engine of the car
  * engine_aspiration `string`: Engine aspiration of the car
  * engine_block `string`: Engine block of the car
  * engine_measure `string`: Engine block of the car
  * engine_size `string`: Engine size of the car
  * fuel_type `string`: Fuel type of the car
  * highway_miles `string`: Highway miles of the car
  * made_in `string`: Made in of the car
  * make `string`: Car Make
  * model `string`: Car model
  * overall_height `string`: Overall height of the car
  * overall_length `string`: Overall length of the car
  * overall_width `string`: Overall width of the car
  * std_seating `string`: Std seating of the car
  * steering_type `string`: Steering type of the car
  * tank_size `string`: Tank size of the car
  * transmission `string`: Transmission of the car
  * trim `string`: Trim of the car
  * vehicle_type `string`: Vehicle type of the car
  * year `number`: Year of the Car

### ComparisonPoint
* ComparisonPoint `object`
  * dealer_indicator `string`: Deal Indicator
  * fair_deal_price `number`: Fair Deal Price
  * similar_vehicles_count `number`: Similar Vehicles Count
  * vin_price `number`: Price for Vin

### CompetitorsCarDetails
* CompetitorsCarDetails `object`
  * avg_market_value `string`: Estimated market value
  * miles `string`: mileage of car
  * name `string`: Current car name
  * price `string`: price of car

### CompetitorsPoint
* CompetitorsPoint `object`
  * current_car [CompetitorsCarDetails](#competitorscardetails)
  * same_car_models `array`
    * items [CompetitorsSameCars](#competitorssamecars)
  * similar_car_models `array`
    * items [CompetitorsSimilarCars](#competitorssimilarcars)

### CompetitorsSameCars
* CompetitorsSameCars `object`
  * avg_market_value `number`: Estimated market value of year make model combination
  * avg_miles `number`: Mileage of year make model combination
  * avg_price `number`: Price of year make model combination
  * name `string`: ymm_comb_name

### CompetitorsSimilarCars
* CompetitorsSimilarCars `object`
  * avg_market_value `number`: Average market value of year make model combination
  * avg_miles `number`: Average mileage of year make model combination
  * avg_price `number`: Average price of year make model combination
  * name `string`: ymm_comb_name

### Dealer
* Dealer `object`
  * car_type `string`: Car type new|used|certified
  * city `string`: City of the dealer
  * dealer_type `string`: Dealer type - independent, franchise, multi-brand, authorized
  * franchise_id `string`: Dealer franchise id
  * id `string`: The unique id associated with the dealer in the Marketcheck database
  * latitude `string`: Latutide for the dealer location
  * longitude `string`: Longitude for the dealer location
  * name `string`: Name of the dealer
  * phone `string`: Contact no of the dealer
  * rating `number`: Overall rating of the dealership on scale 1-5
  * state `string`: State of the dealer
  * street `string`: Street of the dealer
  * target_url_certified `string`: Target url for the certified cars listing
  * target_url_new `string`: Target url for the new cars listing
  * target_url_used `string`: Target url for the used cars listing
  * zip `string`: Zip of the dealer

### DealerLandingPage
* DealerLandingPage `object`: Describes the dealer landing page (SRP) HTML object
  * crawled_at `number`: The timestamp indicating the time when the SRP was cached
  * html `string`: The HTML string for the listing web page
  * srp_url `string`: The URL of the SRP

### DealerRating
* DealerRating `object`
  * city `string`: City of the dealer
  * latitude `string`: Latutide for the dealer location
  * longitude `string`: Longitude for the dealer location
  * name `string`: Name of the dealer
  * overall_rating `number`: Overall rating of the dealership on scale 1-5
  * rating_components `array`
    * items [RatingComponents](#ratingcomponents)
  * state `string`: State of the dealer
  * street `string`: Street of the dealer
  * zip `string`: Zip of the dealer

### DealerReview
* DealerReview `object`
  * city `string`: City of the dealer
  * latitude `string`: Latutide for the dealer location
  * longitude `string`: Longitude for the dealer location
  * name `string`: Name of the dealer
  * overall_reviews `number`: Overall reviews of the dealership
  * review_components `array`
    * items [ReviewComponents](#reviewcomponents)
  * state `string`: State of the dealer
  * street `string`: Street of the dealer
  * zip `string`: Zip of the dealer

### DealersResponse
* DealersResponse `object`: Dealers Response
  * dealers `array`
    * items [Dealer](#dealer)
  * num_found `number`: number of dealers found

### DepreciationPoint
* DepreciationPoint `object`
  * similar_models `array`
    * items [DepreciationStats](#depreciationstats)

### DepreciationStats
* DepreciationStats `object`
  * current_value `number`: Price of year make model combination
  * five_year_from_now `number`: price after five year from now
  * five_year_from_now_percent `number`: price depreciation percent after five year from now
  * name `string`: ymm_comb_name
  * one_year_from_now `number`: price after one year from now
  * one_year_from_now_percent `number`: price depreciation percent after one year from now
  * two_year_from_now `number`: price after two year from now
  * two_year_from_now_percent `number`: price depreciation percent after two year from now

### Economy
* Economy `object`
  * ghg_emissions_indicator `string`: Contains text like bad|Good|Very Good| Excellent
  * ghg_emissions_rating `number`: Show vehicle impact on climate change in terms of greeenhouse gases. This rating will be in the range of 1 - 10
  * smog_indicator `string`: Contains text like bad|Good|Very Good| Excellent
  * smog_rating `number`: Shows vehicle's emissions of pollutants known to cause smog and other forms of air pollution. This rating will be in the range of 1 - 10

### Error
* Error `object`
  * message `string`: Error message
  * status `number`: Error code

### FacetItem
* FacetItem `object`
  * count `number`: Facet item count
  * item `string`: Facet item

### FuelEfficiency
* FuelEfficiency `object`
  * annual_miles `number`: Annual Miles of Car
  * city_mileage `string`: City Mileage in MPG
  * combined_mileage `string`: Combined Mileage
  * highway_mileage `string`: Highway Mileage in MPG
  * monthly_fuel_expense `number`: Monthly fuel expense

### HistoricalListing
* HistoricalListing `object`: Represents a car history entry
  * city `string`: City of the listing
  * id `string`: Unique identifier representing a specific listing from the Marketcheck database
  * last_seen_at `number`: Listing last seen at (most recent) timestamp
  * miles `string`: Odometer reading / reported miles usage for the car
  * msrp `string`: MSRP for the car
  * price `string`: Asking price for the car
  * scraped_at `number`: Listing scraped at timestamp
  * seller_name `string`: Seller name of the listing from the Marketcheck database
  * source `string`: Source website for the listing
  * state `string`: State of the listing
  * vdp_url `string`: Vehicle Details Page url of the specific car
  * zip `string`: Zip of the listing

### Listing
* Listing `object`: Represents a full list of attributes available with Marketcheck for a car
  * build [Build](#build)
  * car_location [Location](#location)
  * dealer [Dealer](#dealer)
  * dom `number`: Days on Market value for the car based on current and historical listings found in the Marketcheck database for this car
  * dom_180 `number`: Days on Market value for the car based on current and last 6 month listings found in the Marketcheck database for this car
  * dom_active `number`: Days on Market value for the car based on current and last 30 days listings found in the Marketcheck database for this car
  * extra [ListingExtraAttributes](#listingextraattributes)
  * first_seen_at `number`: Listing first seen at first scraped timestamp
  * first_seen_at_date `string`: Listing first seen at first scraped date
  * heading `string`: Listing heading
  * id `string`: Unique identifier representing a specific listing from the Marketcheck database
  * inventory_type `string`: Inventory type of car
  * is_certified `integer`: Flag indicating whether the car is Certified
  * last_seen_at `number`: Listing last seen at (most recent) timestamp
  * last_seen_at_date `string`: Listing last seen at (most recent) date
  * media [ListingMedia](#listingmedia)
  * miles `string`: Odometer reading / reported miles usage for the car
  * msrp `string`: MSRP for the car
  * price `string`: Asking price for the car
  * scraped_at_date `number`: Listing first seen at first scraped date
  * seller_type `string`: Seller type for the car
  * source `string`: Source domain of the listing
  * stock_no `string`: Stock no of the car
  * vdp_url `string`: Vehicle Details Page url of the specific car
  * vin `string`: VIN for the car

### ListingDebugAttributes
* ListingDebugAttributes `object`
  * cycle_id `number`: Cycle id
  * robot_id `number`: Robot id
  * scraped_at `string`: Scraped date and time
  * taxonomy_vin `string`: Taxonomy vin
  * template_id `number`: Template id
  * user_id `number`: User id

### ListingExtraAttributes
* ListingExtraAttributes `object`
  * features `array`: List of Features available with the car
    * items `string`
  * options `array`: Installed Options of the car
    * items `string`
  * seller_comment `string`: Seller comment for the car

### ListingMedia
* ListingMedia `object`
  * photo_link `string`: Single photo url of the car
  * photo_links `array`: A list of photo urls for the car
    * items `string`

### ListingVDP
* ListingVDP `object`: Describes the VDP (Vehicle Details Page) HTML object
  * crawled_at `number`: The timestamp indicating the time when the VDP was cached
  * html `string`: The HTML string for the listing web page
  * vdp_url `string`: The URL of the VDP

### Location
* Location `object`: Represents a location
  * city `string`: City of the listing
  * latitude `number`: Latitude component of the location
  * longitude `number`: Longitude component of the location
  * state `string`: State of the listing
  * zip `string`: Zip of the listing

### MakeModel
* MakeModel `object`
  * make `string`
  * model `string`

### Mds
* Mds `object`: Describes Market days supply results for year make model trim combination
  * mds `number`: Provides Market days supply count
  * total_active_cars_for_ymmt `number`: Active cars for ymmt combination
  * total_cars_sold_in_last_45_days `number`: Cars sold in last 45 days

### PlotPoint
* PlotPoint `object`
  * dom `number`: DOM
  * id `string`: Listing id
  * miles `number`: Miles
  * msrp `number`: Msrp
  * price `number`: Price
  * seller_name `string`: Seller name
  * vin `string`: Vin

### PopularityItem
* PopularityItem `object`
  * color `string`: Color depending upon left and right analysis numbers
  * delta_percent `number`: Delta percent
  * difference `number`: Difference depending upon left and right analysis
  * left `number`: Left side rating for above description (2016 ford F-150 Lariat)
  * right `number`: Right side rating for above description (All Other Cars)
  * text `string`: Description for which popularity should be show eg: 2016 ford F-150 Lariat vs All Other Cars
  * thumbs `string`: Thumbs up/down depending upon left and right analysis numbers

### RatingComponents
* RatingComponents `object`
  * actual_rating `number`: rating of car on that condition
  * rating_condition `string`: Specifices rating condition parameter

### ReviewComponents
* ReviewComponents `object`
  * actual_review `string`: review of car given by current user
  * user_name `string`: Name of user who has given review
  * user_rating `number`: rating for dealer given by user ranging from 1-5

### SafetyRating
* SafetyRating `object`: Describes the Safety Ratings of current listing
  * driver_front_rating `number`: Driver front rating of the Listing on scale 1-5
  * driver_side_rating `number`: Driver Side rating of the Listing on scale 1-5
  * overall_rating `number`: Overall rating of the Listing on scale 1-5
  * passenger_front_rating `number`: Passenger front rating of the Listing on scale 1-5
  * roll_over_rating `number`: Roll Over rating of the Listing on scale 1-5

### SearchResponse
* SearchResponse `object`: Search query response
  * listings `array`
    * items [BaseListing](#baselisting)
  * num_found `number`: The number of listings found

### TrendPoint
* TrendPoint `object`
  * dom `number`: Days on Market
  * miles `number`: Miles
  * msrp `number`: MSRP
  * price `number`: Price
  * units `number`: Units

### VinReport
* VinReport `object`
  * icon `string`: icon url
  * some_text `string`: Some descriptional text


