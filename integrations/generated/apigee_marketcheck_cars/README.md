# @datafire/apigee_marketcheck_cars

Client library for Marketcheck APIs

## Installation and Usage
```bash
npm install --save @datafire/apigee_marketcheck_cars
```
```js
let apigee_marketcheck_cars = require('@datafire/apigee_marketcheck_cars').create();

.then(data => {
  console.log(data);
});
```

## Description



## Actions

### crm_check
Check whether particular vin has had a listing after stipulated date or not


```js
apigee_marketcheck_cars.crm_check({
  "vin": "",
  "sale_date": ""
}, context)
```

#### Input
* input `object`
  * api_key `string`: The API Authentication Key. Mandatory with all API calls.
  * vin **required** `string`: vin for which CRM check needs to be done
  * sale_date **required** `string`: sale date after which listing has appeared or not

#### Output
* output [CRMResponse](#crmresponse)

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
  * provider `boolean`: boolean param to include site providers name in response

#### Output
* output [Dealer](#dealer)

### dealerSearch
The dealers API returns a list of dealers around a given point and radius.


```js
apigee_marketcheck_cars.dealerSearch({}, context)
```

#### Input
* input `object`
  * api_key `string`: The API Authentication Key. Mandatory with all API calls.
  * latitude `number`: Latitude component of location
  * longitude `number`: Longitude component of location
  * radius `integer`: Radius around the search location
  * rows `number`: Number of results to return. Default is 10. Max is 50
  * start `number`: Offset for the search results. Default is 1.
  * country `string` (values: us, ca, CA, Ca, US, Us): Country to search dealers from, Value can either be US or CA
  * dealer_type `string` (values: independent, franchise): Search dealers based on their type - either franchise or independent
  * city `string`: City to search dealers from
  * state `string`: State to search dealers from
  * inventory_url `string`: inventory_url of dealer to be searched
  * zip `string`: Zip code around which to search for dealers
  * sort_order `string` (values: asc, desc): sort for dealer search, can either be asc or desc, default is asc
  * provider `boolean`: boolean param to include site providers name in response

#### Output
* output [DealersResponse](#dealersresponse)

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
  * exact `boolean`: Exact parameter
  * latitude `number`: Latitude component of location
  * longitude `number`: Longitude component of location
  * radius `integer`: Radius around the search location
  * debug `integer` (values: 0, 1): Debug parameter
  * include_sold `boolean`: To fetch sold vins
  * country `string`: Country for which to fetch MDS

#### Output
* output [Mds](#mds)

### getPopularCars
Get make model wise top 50 popular cars on national, state, city level


```js
apigee_marketcheck_cars.getPopularCars({
  "car_type": ""
}, context)
```

#### Input
* input `object`
  * api_key `string`: The API Authentication Key. Mandatory with all API calls.
  * state `string`: State level sales count
  * city_state `string`: City level sales count, pipe seperated like city_state=jacksonville|FL
  * car_type **required** `string` (values: new, used): Inventory type for which popular count is to be searched
  * country `string` (values: us, ca, US, CA): Country for which the sales records are to be searched

#### Output
* output [PopularCars](#popularcars)

### getSalesCount
Get a sales count for city, state or national level by make, model, year, trim or taxonomy vin


```js
apigee_marketcheck_cars.getSalesCount({}, context)
```

#### Input
* input `object`
  * api_key `string`: The API Authentication Key. Mandatory with all API calls.
  * car_type `string` (values: new, used): Inventory type for which sales count is to be searched, default is used
  * make `string`: Make for which sales count is to be searched
  * mm `string`: Make-Model for which sales count is to be searched, pipe seperated like mm=ford|f-150
  * ymm `string`: Year-Make-Model for which sales count is to be searched, pipe seperated like ymm=2015|ford|f-150
  * ymmt `string`: Year-Make-Model-Trim for which sales count is to be searched, pipe seperated like ymmt=2015|ford|f-150|platinum
  * taxonomy_vin `string`: taxonomy_vin for which sales count is to be searched
  * state `string`: State level sales count
  * city_state `string`: City level sales count, pipe seperated like city_state=jacksonville|FL
  * vin `string`: VIN that will be transformed to taxonomy_vin
  * country `string` (values: us, ca, US, CA): Country for which the sales records are to be searched

#### Output
* output [Sales](#sales)

### search.get
This endpoint is the meat of the API and serves many purposes. This API produces a list of currently active cars from the market for the given search criteria. The API results are limited to allow pagination upto 10000 rows. 
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
10. Get Market averages for price/miles/dom for your search


```js
apigee_marketcheck_cars.search.get({}, context)
```

#### Input
* input `object`
  * api_key `string`: The API Authentication Key. Mandatory with all API calls.
  * latitude `number`: Latitude component of location
  * longitude `number`: Longitude component of location
  * radius `integer`: Radius around the search location
  * zip `string`: car search bases on zipcode
  * include_lease `boolean`: Boolean param to search for listings that include leasing options in them
  * include_finance `boolean`: Boolean param to search for listings that include finance options in them
  * lease_term `string`: Search listings with exact lease term, or inside a range with min and max seperated by a dash like lease_term=30-60
  * lease_down_payment `string`: Search listings with exact down payment in lease offers, or inside a range with min and max seperated by a dash like lease_down_payment=30-60
  * lease_emp `string`: Search listings with lease offers exactly matching Estimated Monthly Payment(EMI), or inside a range with min and max seperated by a dash like lease_emp=30-60
  * finance_loan_term `string`: Search listings with exact finance loan term, or inside a range with min and max seperated by a dash like finance_loan_term=30-60
  * finance_loan_apr `string`: Search listings with finance offers exactly matching loans Annual Percentage Rate, or inside a range with min and max seperated by a dash like finance_loan_apr=30-60
  * finance_emp `string`: Search listings with finance offers exactly matching Estimated Monthly Payment(EMI), or inside a range with min and max seperated by a dash like finance_emp=30-60
  * finance_down_payment `string`: Search listings with exact down payment in finance offers, or inside a range with min and max seperated by a dash like finance_down_payment=30-60
  * finance_down_payment_per `string`: Search listings with exact down payment percentage in finance offers, or inside a range with min and max seperated by a dash like finance_down_payment_per=30-60
  * car_type `string` (values: new, used, certified): Car type. Allowed values are - new / used / certified
  * seller_type `string`: Seller type to filter cars on. Valid filter values are those that our Search facets API returns for unique seller types. You can pass in multiple seller type values comma separated.
  * carfax_1_owner `string` (values: true, false): Indicates whether car has had only one owner or not
  * carfax_clean_title `string` (values: true, false): Indicates whether car has clean ownership records
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
  * base_exterior_color `string`: Base exterior color to match. Valid filter values are those that our Search facets API returns for unique base exterior colors. You can pass in multiple base interior color values comma separated
  * base_interior_color `string`: Base interior color to match. Valid filter values are those that our Search facets API returns for unique base interior colors. You can pass in multiple base interior color values comma separated
  * engine `string`: Filter listings on engine
  * engine_size `string`: Engine Size to match. Valid filter values are those that our Search facets API returns for unique engine size. You can pass in multiple engine size values comma separated
  * engine_aspiration `string`: Engine Aspiration to match. Valid filter values are those that our Search facets API returns for unique Engine Aspirations. You can pass in multiple Engine aspirations values comma separated
  * engine_block `string`: Engine Block to match. Valid filter values are those that our Search facets API returns for unique Engine Block. You can pass in multiple Engine Block values comma separated
  * miles_range `string`: Miles range to filter cars with miles in the given range. Range to be given in the format - min-max e.g. 1000-5000
  * price_range `string`: Price range to filter cars with the price in the range given. Range to be given in the format - min-max e.g. 1000-5000
  * dom_range `string`: Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50
  * sort_by `string`: Sort by field - allowed fields are distance|price|miles|dom|age|posted_at|year. Default sort field is distance from the given point
  * sort_order `string`: Sort order - asc or desc. Default sort order is distance from a point.
  * rows `string`: Number of results to return. Default is 10. Max is 50
  * start `string`: Page number to fetch the results for the given criteria. Default is 1. Pagination is allowed only till first 10000 results for the search and sort criteria. The page value can be only between 1 to 10000/rows
  * facets `string`: The comma separated list of fields for which facets are requested. Supported fields are - year, make, model, trim, vehicle_type, car_type, body_type, body_subtype, drivetrain, cylinders, transmission, exterior_color, interior_color, doors, engine_size, engine_aspiration, engine_block. Facets could be requested in addition to the listings for the search. Please note - The API calls with lots of facet fields may take longer to respond.
  * range_facets `string`: The comma separated list of numeric fields for which range facets are requested. Supported fields are - price, miles, dom. Facets could be requested in addition to the listings for the search. Please note - The API calls with lots of facet fields may take longer to respond.
  * facet_sort `string` (values: count, index): Control sort order of facets with this parameter with default sort being on count, Other available sort is alphabetical sort, which can be obtained by using index as value for this param
  * stats `string`: The list of fields for which stats need to be generated based on the matching listings for the search criteria. Allowed fields are - price, miles, msrp, dom The stats consists of mean, max, average and count of listings based on which the stats are calculated for the field. Stats could be requested in addition to the listings for the search. Please note - The API calls with the stats fields may take longer to respond.
  * country `string`: Filter on Country, by default US. Search available on US (United States) and CA (Canada)
  * plot `boolean`: If plot has value true results in around 25k coordinates with limited fields to plot respective graph
  * nodedup `boolean`: If nodedup is set to true then API will give results without is_searchable i.e multiple listings for single vin
  * dedup `boolean`: If dedup is set to true then will give results with is_searchable irrespecive of dealer_id or source
  * owned `boolean`: Used in combination with dealer_id or source, when true returns the listings actually owned by dealer himself
  * state `string`: Filter listsings on State
  * city `string`: Filter listings on city
  * dealer_name `string`: Filter listings on dealer_name
  * trim_o `string`: Filter listings on web scraped trim
  * trim_r `string`: Filter trim on custom possible matches
  * dom_active_range `string`: Active Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50
  * dom_180_range `string`: Last 180 Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50
  * exclude_certified `boolean`: Boolean param to exclude certified cars from search results
  * fuel_type `string`: fuel type of the car to be searched
  * dealer_type `string` (values: franchise, independent): Filter based on dealer type independant or franchise
  * photo_links `boolean`: A boolean indicating whether to include only those listings that have photo_links in search results, And discard those that don't have them

#### Output
* output [SearchResponse](#searchresponse)

### search.auction.get
This endpoint is the meat of the API and serves many purposes. This API produces a list of currently active cars from the market for the given search criteria. The API results are limited to allow pagination upto 10000 rows. 
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
10. Get Market averages for price/miles/dom for your search


```js
apigee_marketcheck_cars.search.auction.get({}, context)
```

#### Input
* input `object`
  * api_key `string`: The API Authentication Key. Mandatory with all API calls.
  * latitude `number`: Latitude component of location
  * longitude `number`: Longitude component of location
  * radius `integer`: Radius around the search location
  * zip `string`: car search bases on zipcode
  * include_lease `boolean`: Boolean param to search for listings that include leasing options in them
  * include_finance `boolean`: Boolean param to search for listings that include finance options in them
  * lease_term `string`: Search listings with exact lease term, or inside a range with min and max seperated by a dash like lease_term=30-60
  * lease_down_payment `string`: Search listings with exact down payment in lease offers, or inside a range with min and max seperated by a dash like lease_down_payment=30-60
  * lease_emp `string`: Search listings with lease offers exactly matching Estimated Monthly Payment(EMI), or inside a range with min and max seperated by a dash like lease_emp=30-60
  * finance_loan_term `string`: Search listings with exact finance loan term, or inside a range with min and max seperated by a dash like finance_loan_term=30-60
  * finance_loan_apr `string`: Search listings with finance offers exactly matching loans Annual Percentage Rate, or inside a range with min and max seperated by a dash like finance_loan_apr=30-60
  * finance_emp `string`: Search listings with finance offers exactly matching Estimated Monthly Payment(EMI), or inside a range with min and max seperated by a dash like finance_emp=30-60
  * finance_down_payment `string`: Search listings with exact down payment in finance offers, or inside a range with min and max seperated by a dash like finance_down_payment=30-60
  * finance_down_payment_per `string`: Search listings with exact down payment percentage in finance offers, or inside a range with min and max seperated by a dash like finance_down_payment_per=30-60
  * car_type `string` (values: new, used, certified): Car type. Allowed values are - new / used / certified
  * carfax_1_owner `string` (values: true, false): Indicates whether car has had only one owner or not
  * carfax_clean_title `string` (values: true, false): Indicates whether car has clean ownership records
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
  * base_exterior_color `string`: Base exterior color to match. Valid filter values are those that our Search facets API returns for unique base exterior colors. You can pass in multiple base interior color values comma separated
  * base_interior_color `string`: Base interior color to match. Valid filter values are those that our Search facets API returns for unique base interior colors. You can pass in multiple base interior color values comma separated
  * engine `string`: Filter listings on engine
  * engine_size `string`: Engine Size to match. Valid filter values are those that our Search facets API returns for unique engine size. You can pass in multiple engine size values comma separated
  * engine_aspiration `string`: Engine Aspiration to match. Valid filter values are those that our Search facets API returns for unique Engine Aspirations. You can pass in multiple Engine aspirations values comma separated
  * engine_block `string`: Engine Block to match. Valid filter values are those that our Search facets API returns for unique Engine Block. You can pass in multiple Engine Block values comma separated
  * miles_range `string`: Miles range to filter cars with miles in the given range. Range to be given in the format - min-max e.g. 1000-5000
  * price_range `string`: Price range to filter cars with the price in the range given. Range to be given in the format - min-max e.g. 1000-5000
  * dom_range `string`: Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50
  * sort_by `string`: Sort by field - allowed fields are distance|price|miles|dom|age|posted_at|year. Default sort field is distance from the given point
  * sort_order `string`: Sort order - asc or desc. Default sort order is distance from a point.
  * rows `string`: Number of results to return. Default is 10. Max is 50
  * start `string`: Page number to fetch the results for the given criteria. Default is 1. Pagination is allowed only till first 10000 results for the search and sort criteria. The page value can be only between 1 to 10000/rows
  * facets `string`: The comma separated list of fields for which facets are requested. Supported fields are - year, make, model, trim, vehicle_type, car_type, body_type, body_subtype, drivetrain, cylinders, transmission, exterior_color, interior_color, doors, engine_size, engine_aspiration, engine_block. Facets could be requested in addition to the listings for the search. Please note - The API calls with lots of facet fields may take longer to respond.
  * range_facets `string`: The comma separated list of numeric fields for which range facets are requested. Supported fields are - price, miles, dom. Facets could be requested in addition to the listings for the search. Please note - The API calls with lots of facet fields may take longer to respond.
  * facet_sort `string` (values: count, index): Control sort order of facets with this parameter with default sort being on count, Other available sort is alphabetical sort, which can be obtained by using index as value for this param
  * stats `string`: The list of fields for which stats need to be generated based on the matching listings for the search criteria. Allowed fields are - price, miles, msrp, dom The stats consists of mean, max, average and count of listings based on which the stats are calculated for the field. Stats could be requested in addition to the listings for the search. Please note - The API calls with the stats fields may take longer to respond.
  * country `string`: Filter on Country, by default US. Search available on US (United States) and CA (Canada)
  * plot `boolean`: If plot has value true results in around 25k coordinates with limited fields to plot respective graph
  * nodedup `boolean`: If nodedup is set to true then API will give results without is_searchable i.e multiple listings for single vin
  * dedup `boolean`: If dedup is set to true then will give results with is_searchable irrespecive of dealer_id or source
  * owned `boolean`: Used in combination with dealer_id or source, when true returns the listings actually owned by dealer himself
  * state `string`: Filter listsings on State
  * city `string`: Filter listings on city
  * dealer_name `string`: Filter listings on dealer_name
  * trim_o `string`: Filter listings on web scraped trim
  * trim_r `string`: Filter trim on custom possible matches
  * dom_active_range `string`: Active Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50
  * dom_180_range `string`: Last 180 Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50
  * exclude_certified `boolean`: Boolean param to exclude certified cars from search results
  * fuel_type `string`: fuel type of the car to be searched
  * photo_links `boolean`: A boolean indicating whether to include only those listings that have photo_links in search results, And discard those that don't have them

#### Output
* output [SearchResponse](#searchresponse)

### searchAutoComplete
Auto-complete the inputs of your end users


```js
apigee_marketcheck_cars.searchAutoComplete({
  "field": "",
  "input": ""
}, context)
```

#### Input
* input `object`
  * api_key `string`: The API Authentication Key. Mandatory with all API calls.
  * field **required** `string` (values: ymm, mm, make, model, trim, body_type, body_subtype, vehicle_type, transmission, drivetrain, fuel_type, exterior_color, interior_color, engine, engine_size, engine_block, state, city): Field name for which you want auto-completion
  * input **required** `string`: Input entered so far
  * year `string`: Apply year filter to selections
  * make `string`: Apply make filter to selections
  * model `string`: Apply model filter to selections
  * trim `string`: Apply trim filter to selections
  * body_type `string`: Apply body_type filter to selections
  * body_subtype `string`: Apply body_subtype filter to selections
  * vehicle_type `string`: Apply vehicle_type filter to selections
  * transmission `string`: Apply transmission filter to selections
  * drivetrain `string`: Apply drivetrain filter to selections
  * fuel_type `string`: Apply fuel_type filter to selections
  * exterior_color `string`: Apply exterior_color filter to selections
  * interior_color `string`: Apply interior_color filter to selections
  * engine `string`: Apply engine filter to selections
  * engine_size `string`: Apply engine_size filter to selections
  * engine_block `string`: Apply engine_block filter to selections
  * state `string`: State level auto-completion
  * city `string`: City level auto-completion
  * country `string` (values: US, CA): Country for which auto-completion is to be performed
  * car_type `string` (values: new, used): Inventory type
  * ignore_case `boolean`: Boolean variable to indicate ignore case of current input
  * term_counts `boolean`: Boolean variable to indicate wheather to include term counts as well in response
  * sort_by `string` (values: index, count): Sort the response, either by index or count(default)

#### Output
* output [SearchAutoCompleteResponse](#searchautocompleteresponse)

### search.fsbo.get
This endpoint is the meat of the API and serves many purposes. This API produces a list of currently active cars from the market for the given search criteria. The API results are limited to allow pagination upto 10000 rows. 
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
10. Get Market averages for price/miles/dom for your search


```js
apigee_marketcheck_cars.search.fsbo.get({}, context)
```

#### Input
* input `object`
  * api_key `string`: The API Authentication Key. Mandatory with all API calls.
  * latitude `number`: Latitude component of location
  * longitude `number`: Longitude component of location
  * radius `integer`: Radius around the search location
  * zip `string`: car search bases on zipcode
  * include_lease `boolean`: Boolean param to search for listings that include leasing options in them
  * include_finance `boolean`: Boolean param to search for listings that include finance options in them
  * lease_term `string`: Search listings with exact lease term, or inside a range with min and max seperated by a dash like lease_term=30-60
  * lease_down_payment `string`: Search listings with exact down payment in lease offers, or inside a range with min and max seperated by a dash like lease_down_payment=30-60
  * lease_emp `string`: Search listings with lease offers exactly matching Estimated Monthly Payment(EMI), or inside a range with min and max seperated by a dash like lease_emp=30-60
  * finance_loan_term `string`: Search listings with exact finance loan term, or inside a range with min and max seperated by a dash like finance_loan_term=30-60
  * finance_loan_apr `string`: Search listings with finance offers exactly matching loans Annual Percentage Rate, or inside a range with min and max seperated by a dash like finance_loan_apr=30-60
  * finance_emp `string`: Search listings with finance offers exactly matching Estimated Monthly Payment(EMI), or inside a range with min and max seperated by a dash like finance_emp=30-60
  * finance_down_payment `string`: Search listings with exact down payment in finance offers, or inside a range with min and max seperated by a dash like finance_down_payment=30-60
  * finance_down_payment_per `string`: Search listings with exact down payment percentage in finance offers, or inside a range with min and max seperated by a dash like finance_down_payment_per=30-60
  * car_type `string` (values: new, used, certified): Car type. Allowed values are - new / used / certified
  * carfax_1_owner `string` (values: true, false): Indicates whether car has had only one owner or not
  * carfax_clean_title `string` (values: true, false): Indicates whether car has clean ownership records
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
  * base_exterior_color `string`: Base exterior color to match. Valid filter values are those that our Search facets API returns for unique base exterior colors. You can pass in multiple base interior color values comma separated
  * base_interior_color `string`: Base interior color to match. Valid filter values are those that our Search facets API returns for unique base interior colors. You can pass in multiple base interior color values comma separated
  * engine `string`: Filter listings on engine
  * engine_size `string`: Engine Size to match. Valid filter values are those that our Search facets API returns for unique engine size. You can pass in multiple engine size values comma separated
  * engine_aspiration `string`: Engine Aspiration to match. Valid filter values are those that our Search facets API returns for unique Engine Aspirations. You can pass in multiple Engine aspirations values comma separated
  * engine_block `string`: Engine Block to match. Valid filter values are those that our Search facets API returns for unique Engine Block. You can pass in multiple Engine Block values comma separated
  * miles_range `string`: Miles range to filter cars with miles in the given range. Range to be given in the format - min-max e.g. 1000-5000
  * price_range `string`: Price range to filter cars with the price in the range given. Range to be given in the format - min-max e.g. 1000-5000
  * dom_range `string`: Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50
  * sort_by `string`: Sort by field - allowed fields are distance|price|miles|dom|age|posted_at|year. Default sort field is distance from the given point
  * sort_order `string`: Sort order - asc or desc. Default sort order is distance from a point.
  * rows `string`: Number of results to return. Default is 10. Max is 50
  * start `string`: Page number to fetch the results for the given criteria. Default is 1. Pagination is allowed only till first 10000 results for the search and sort criteria. The page value can be only between 1 to 10000/rows
  * facets `string`: The comma separated list of fields for which facets are requested. Supported fields are - year, make, model, trim, vehicle_type, car_type, body_type, body_subtype, drivetrain, cylinders, transmission, exterior_color, interior_color, doors, engine_size, engine_aspiration, engine_block. Facets could be requested in addition to the listings for the search. Please note - The API calls with lots of facet fields may take longer to respond.
  * range_facets `string`: The comma separated list of numeric fields for which range facets are requested. Supported fields are - price, miles, dom. Facets could be requested in addition to the listings for the search. Please note - The API calls with lots of facet fields may take longer to respond.
  * facet_sort `string` (values: count, index): Control sort order of facets with this parameter with default sort being on count, Other available sort is alphabetical sort, which can be obtained by using index as value for this param
  * stats `string`: The list of fields for which stats need to be generated based on the matching listings for the search criteria. Allowed fields are - price, miles, msrp, dom The stats consists of mean, max, average and count of listings based on which the stats are calculated for the field. Stats could be requested in addition to the listings for the search. Please note - The API calls with the stats fields may take longer to respond.
  * country `string`: Filter on Country, by default US. Search available on US (United States) and CA (Canada)
  * plot `boolean`: If plot has value true results in around 25k coordinates with limited fields to plot respective graph
  * nodedup `boolean`: If nodedup is set to true then API will give results without is_searchable i.e multiple listings for single vin
  * dedup `boolean`: If dedup is set to true then will give results with is_searchable irrespecive of dealer_id or source
  * owned `boolean`: Used in combination with dealer_id or source, when true returns the listings actually owned by dealer himself
  * state `string`: Filter listsings on State
  * city `string`: Filter listings on city
  * dealer_name `string`: Filter listings on dealer_name
  * trim_o `string`: Filter listings on web scraped trim
  * trim_r `string`: Filter trim on custom possible matches
  * dom_active_range `string`: Active Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50
  * dom_180_range `string`: Last 180 Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50
  * exclude_certified `boolean`: Boolean param to exclude certified cars from search results
  * fuel_type `string`: fuel type of the car to be searched
  * photo_links `boolean`: A boolean indicating whether to include only those listings that have photo_links in search results, And discard those that don't have them

#### Output
* output [SearchResponse](#searchresponse)

### search90Days
This endpoint is the meat of the API and serves many purposes. This API produces a list of 90 days cars from the market for the given search criteria. The API results are limited to allow pagination upto 10000 rows. 
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
10. Get Market averages for price/miles/dom for your search


```js
apigee_marketcheck_cars.search90Days({}, context)
```

#### Input
* input `object`
  * api_key `string`: The API Authentication Key. Mandatory with all API calls.
  * latitude `number`: Latitude component of location
  * longitude `number`: Longitude component of location
  * radius `integer`: Radius around the search location
  * zip `string`: car search bases on zipcode
  * include_lease `boolean`: Boolean param to search for listings that include leasing options in them
  * include_finance `boolean`: Boolean param to search for listings that include finance options in them
  * lease_term `string`: Search listings with exact lease term, or inside a range with min and max seperated by a dash like lease_term=30-60
  * lease_down_payment `string`: Search listings with exact down payment in lease offers, or inside a range with min and max seperated by a dash like lease_down_payment=30-60
  * lease_emp `string`: Search listings with lease offers exactly matching Estimated Monthly Payment(EMI), or inside a range with min and max seperated by a dash like lease_emp=30-60
  * finance_loan_term `string`: Search listings with exact finance loan term, or inside a range with min and max seperated by a dash like finance_loan_term=30-60
  * finance_loan_apr `string`: Search listings with finance offers exactly matching loans Annual Percentage Rate, or inside a range with min and max seperated by a dash like finance_loan_apr=30-60
  * finance_emp `string`: Search listings with finance offers exactly matching Estimated Monthly Payment(EMI), or inside a range with min and max seperated by a dash like finance_emp=30-60
  * finance_down_payment `string`: Search listings with exact down payment in finance offers, or inside a range with min and max seperated by a dash like finance_down_payment=30-60
  * finance_down_payment_per `string`: Search listings with exact down payment percentage in finance offers, or inside a range with min and max seperated by a dash like finance_down_payment_per=30-60
  * car_type `string` (values: new, used, certified): Car type. Allowed values are - new / used / certified
  * carfax_1_owner `string` (values: true, false): Indicates whether car has had only one owner or not
  * carfax_clean_title `string` (values: true, false): Indicates whether car has clean ownership records
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
  * base_exterior_color `string`: Base exterior color to match. Valid filter values are those that our Search facets API returns for unique base exterior colors. You can pass in multiple base interior color values comma separated
  * base_interior_color `string`: Base interior color to match. Valid filter values are those that our Search facets API returns for unique base interior colors. You can pass in multiple base interior color values comma separated
  * engine `string`: Filter listings on engine
  * engine_size `string`: Engine Size to match. Valid filter values are those that our Search facets API returns for unique engine size. You can pass in multiple engine size values comma separated
  * engine_aspiration `string`: Engine Aspiration to match. Valid filter values are those that our Search facets API returns for unique Engine Aspirations. You can pass in multiple Engine aspirations values comma separated
  * engine_block `string`: Engine Block to match. Valid filter values are those that our Search facets API returns for unique Engine Block. You can pass in multiple Engine Block values comma separated
  * miles_range `string`: Miles range to filter cars with miles in the given range. Range to be given in the format - min-max e.g. 1000-5000
  * price_range `string`: Price range to filter cars with the price in the range given. Range to be given in the format - min-max e.g. 1000-5000
  * dom_range `string`: Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50
  * sort_by `string`: Sort by field - allowed fields are distance|price|miles|dom|age|posted_at|year. Default sort field is distance from the given point
  * sort_order `string`: Sort order - asc or desc. Default sort order is distance from a point.
  * rows `string`: Number of results to return. Default is 10. Max is 50
  * start `string`: Page number to fetch the results for the given criteria. Default is 1. Pagination is allowed only till first 10000 results for the search and sort criteria. The page value can be only between 1 to 10000/rows
  * facets `string`: The comma separated list of fields for which facets are requested. Supported fields are - year, make, model, trim, vehicle_type, car_type, body_type, body_subtype, drivetrain, cylinders, transmission, exterior_color, interior_color, doors, engine_size, engine_aspiration, engine_block. Facets could be requested in addition to the listings for the search. Please note - The API calls with lots of facet fields may take longer to respond.
  * range_facets `string`: The comma separated list of numeric fields for which range facets are requested. Supported fields are - price, miles, dom. Facets could be requested in addition to the listings for the search. Please note - The API calls with lots of facet fields may take longer to respond.
  * facet_sort `string` (values: count, index): Control sort order of facets with this parameter with default sort being on count, Other available sort is alphabetical sort, which can be obtained by using index as value for this param
  * stats `string`: The list of fields for which stats need to be generated based on the matching listings for the search criteria. Allowed fields are - price, miles, msrp, dom The stats consists of mean, max, average and count of listings based on which the stats are calculated for the field. Stats could be requested in addition to the listings for the search. Please note - The API calls with the stats fields may take longer to respond.
  * country `string`: Filter on Country, by default US. Search available on US (United States) and CA (Canada)
  * plot `boolean`: If plot has value true results in around 25k coordinates with limited fields to plot respective graph
  * nodedup `boolean`: If nodedup is set to true then API will give results without is_searchable i.e multiple listings for single vin
  * dedup `boolean`: If dedup is set to true then will give results with is_searchable irrespecive of dealer_id or source
  * owned `boolean`: Used in combination with dealer_id or source, when true returns the listings actually owned by dealer himself
  * state `string`: Filter listsings on State
  * city `string`: Filter listings on city
  * dealer_name `string`: Filter listings on dealer_name
  * trim_o `string`: Filter listings on web scraped trim
  * trim_r `string`: Filter trim on custom possible matches
  * dom_active_range `string`: Active Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50
  * dom_180_range `string`: Last 180 Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50
  * exclude_certified `boolean`: Boolean param to exclude certified cars from search results
  * fuel_type `string`: fuel type of the car to be searched
  * photo_links `boolean`: A boolean indicating whether to include only those listings that have photo_links in search results, And discard those that don't have them
  * sold `boolean`: sold parameter to display only sold listings
  * last_seen_range `string`: Last seen date range to filter listings with the last seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623
  * first_seen_range `string`: First seen date range to filter listings with the last seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623

#### Output
* output [SearchResponse](#searchresponse)

### specsAutoComplete
Auto-complete the inputs of your end users, not from active set but from taxonomy (decoder database)


```js
apigee_marketcheck_cars.specsAutoComplete({
  "field": "",
  "input": ""
}, context)
```

#### Input
* input `object`
  * api_key `string`: The API Authentication Key. Mandatory with all API calls.
  * field **required** `string` (values: make, model, trim, body_type, body_subtype, vehicle_type, transmission, drivetrain, fuel_type, engine, engine_size, engine_block): Field name for which you want auto-completion
  * input **required** `string`: Input entered so far
  * year `string`: Apply year filter to selections
  * make `string`: Apply make filter to selections
  * model `string`: Apply model filter to selections
  * trim `string`: Apply trim filter to selections
  * body_type `string`: Apply body_type filter to selections
  * body_subtype `string`: Apply body_subtype filter to selections
  * vehicle_type `string`: Apply vehicle_type filter to selections
  * transmission `string`: Apply transmission filter to selections
  * drivetrain `string`: Apply drivetrain filter to selections
  * fuel_type `string`: Apply fuel_type filter to selections
  * engine `string`: Apply engine filter to selections
  * engine_size `string`: Apply engine_size filter to selections
  * engine_block `string`: Apply engine_block filter to selections
  * ignore_case `boolean`: Boolean variable to indicate ignore case of current input

#### Output
* output [SpecsAutoCompleteResponse](#specsautocompleteresponse)

### getTaxonomyTerms
Facets on taxonomy


```js
apigee_marketcheck_cars.getTaxonomyTerms({
  "field": ""
}, context)
```

#### Input
* input `object`
  * api_key `string`: The API Authentication Key. Mandatory with all API calls.
  * field **required** `string`: Comma separated list of fields to get terms for
  * year `string`: Apply year filter to selections
  * make `string`: Apply make filter to selections
  * model `string`: Apply model filter to selections
  * trim `string`: Apply trim filter to selections
  * body_type `string`: Apply body_type filter to selections
  * body_subtype `string`: Apply body_subtype filter to selections
  * vehicle_type `string`: Apply vehicle_type filter to selections
  * transmission `string`: Apply transmission filter to selections
  * drivetrain `string`: Apply drivetrain filter to selections
  * fuel_type `string`: Apply fuel_type filter to selections
  * engine `string`: Apply engine filter to selections
  * engine_size `string`: Apply engine_size filter to selections
  * engine_block `string`: Apply engine_block filter to selections

#### Output
* output [SpecsAutoCompleteResponse](#specsautocompleteresponse)

### getDailyStats
National, state and city level stats for price, miles and dom


```js
apigee_marketcheck_cars.getDailyStats({}, context)
```

#### Input
* input `object`
  * api_key `string`: The API Authentication Key. Mandatory with all API calls.
  * country `string` (values: us, ca): Country for which the stats are to be searched
  * car_type `string` (values: new, used): Inventory type for which stats are to be searched, default is used
  * ymm `string`: Year, Make, Model of the car, Separated by pipe e.g. ymm=2015|ford|f-150
  * ymmt `string`: Year, Make, Model, Trim of the car, Separated by pipe e.g. ymmt=2015|ford|f-150|platinum
  * taxonomy_vin `string`: Taxonomy vin for referance to find stats of similar cars
  * vin `string`: VIN that will be transformed to taxonomy_vin
  * state `string`: State level stats
  * city_state `string`: City level stats, pipe seperated like city_state=jacksonville|FL
  * date `integer`: Date, with year and month for which to search stats for. Format should be YYYYMM
  * range `integer`: Range for date param in months, API will go back those many months and fetch the averages for all those months

#### Output
* output [DailyStats](#dailystats)

### decodeEPI
Get the basic information on specifications for a car identified by a valid VIN


```js
apigee_marketcheck_cars.decodeEPI({
  "vin": ""
}, context)
```

#### Input
* input `object`
  * api_key `string`: The API Authentication Key. Mandatory with all API calls.
  * vin **required** `string`: VIN to decode

#### Output
* output [Build](#build)



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
  * carfax_1_owner `boolean`: Flag to indicate whether listing is carfax_1_owner
  * carfax_clean_title `boolean`: Flag to indicate whether listing is carfax_clean_title
  * data_source `string`: Data source of the listing
  * dealer [NestDealer](#nestdealer)
  * dist `number`: Distance of the car's location from the specified user lcoation
  * dom `integer`: Days on Market value for the car based on current and historical listings found in the Marketcheck database for this car
  * dom_180 `integer`: Days on Market value for the car based on current and last 6 month listings found in the Marketcheck database for this car
  * dom_active `integer`: Days on Market value for the car based on current and last 30 days listings found in the Marketcheck database for this car
  * exterior_color `string`: Exterior color of the car
  * financing_options `array`: Array of all finance offers for this listing
    * items [ListingFinance](#listingfinance)
  * first_seen_at `integer`: Listing first seen at first scraped timestamp
  * first_seen_at_date `string`: Listing first seen at first scraped date
  * heading `string`: Listing title as displayed on the source website
  * id `string`: Unique identifier representing a specific listing from the Marketcheck database
  * interior_color `string`: Interior color of the car
  * inventory_type `string`: Inventory type of car
  * is_certified `integer`: Certified car
  * last_seen_at `integer`: Listing last seen at (most recent) timestamp
  * last_seen_at_date `string`: Listing last seen at (most recent) date
  * leasing_options `array`: Array of all finance offers for this listing
    * items [ListingLease](#listinglease)
  * media [ListingNestMedia](#listingnestmedia)
  * miles `integer`: Odometer reading / reported miles usage for the car
  * model_code `string`: model_code of the listing
  * msrp `integer`: MSRP for the car
  * price `integer`: Asking price for the car
  * ref_miles `string`: Last Odometer reading / reported miles usage for the car. If the asking miles value is not or is available then the last_miles could perhaps be used. last_miles is the miles for the car listed on the source website as of last_miles_dt date
  * ref_miles_dt `integer`: The date at which the last miles was reported online. This is earlier to last_seen_date
  * ref_price `string`: Last reported price for the car. If the asking price value is not or is available then the last_price could perhaps be used. last_price is the price for the car listed on the source website as of last_price_dt date
  * ref_price_dt `integer`: The date at which the last price was reported online. This is earlier to last_seen_date
  * scraped_at `number`: Listing last seen at date timestamp
  * scraped_at_date `string`: Listing last seen at date
  * seller_type `string`: Seller type for the car
  * source `string`: Source domain of the listing
  * stock_no `string`: Stock number of car in dealers inventory
  * vdp_url `string`: Vehicle Details Page url of the specific car
  * vin `string`: VIN for the car

### BasePopular
* BasePopular `object`: Single popular car in array
  * city `string`: City
  * counts `string`: Number of sold listings of this model
  * dom_stats [SalesStats](#salesstats)
  * inventoryType `string`: Inventory type
  * make `string`: Make name
  * miles_stats [SalesStats](#salesstats)
  * model `string`: Model name
  * price_stats [SalesStats](#salesstats)
  * state `string`: State

### Build
* Build `object`: Describes the Car specification
  * antibrake_sys `string`: Antibrake system of the car
  * body_subtype `string`: Body subtype of the car
  * body_type `string`: Body type of the car
  * city_miles `string`: City miles of the car
  * cylinders `integer`: No of cylinders of the car
  * doors `integer`: No of doors of the car
  * drivetrain `string`: Drivetrain of the car
  * engine `string`: Engine of the car
  * engine_aspiration `string`: Engine aspiration of the car
  * engine_block `string`: Engine block of the car
  * engine_measure `string`: Engine block of the car
  * engine_size `number`: Engine size of the car
  * fuel_type `string`: Fuel type of the car
  * highway_miles `string`: Highway miles of the car
  * made_in `string`: Made in of the car
  * make `string`: Car Make
  * model `string`: Car model
  * opt_seating `string`: opt seating of the car
  * overall_height `string`: Overall height of the car
  * overall_length `string`: Overall length of the car
  * overall_width `string`: Overall width of the car
  * short_trim `string`: Short trim of the car
  * std_seating `string`: Std seating of the car
  * steering_type `string`: Steering type of the car
  * tank_size `string`: Tank size of the car
  * transmission `string`: Transmission of the car
  * trim `string`: Trim of the car
  * trim_r `string`: Trim_r of the car
  * vehicle_type `string`: Vehicle type of the car
  * year `integer`: Year of the Car

### CRMResponse
* CRMResponse `object`
  * for_sale `string`: Boolean to indicate whether given vin has had listing after given date or not

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

### DailyStats
* DailyStats `object`
  * dom [DailyStatsNestedJson](#dailystatsnestedjson)
  * miles_stats [DailyStatsNestedJson](#dailystatsnestedjson)
  * price_stats [DailyStatsNestedJson](#dailystatsnestedjson)
  * units_for_sale `number`: Number of units of this car for sale on the market

### DailyStatsNestedJson
* DailyStatsNestedJson `object`: All nested JSON of stats
  * interquartile_range `number`: Interquartile range
  * mean `number`: Mean
  * median `number`: Median
  * population_standard_deviation `number`: population standard deviation
  * standard_deviation `number`: Standard Deviation
  * trimmed_mean `number`: Trimmed Mean
  * variance `number`: variance

### Dealer
* Dealer `object`
  * city `string`: City of the dealer
  * country `string`: country of the dealer
  * data_source `string`: Datasource of the dealer
  * distance `number`: Distance of dealer from given location
  * id `string`: The unique id associated with the dealer in the Marketcheck database
  * inventory_url `string`: Website of the dealer
  * latitude `string`: Latutide for the dealer location
  * location_ll `string`: location_ll for the dealer location
  * longitude `string`: Longitude for the dealer location
  * seller_email `string`: Contact email of the dealer
  * seller_name `string`: Name of the dealer
  * seller_phone `string`: Contact no of the dealer
  * state `string`: State of the dealer
  * status `string`: Status of the dealer
  * street `string`: Street of the dealer
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
  * num_found `integer`: number of dealers found

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
  * code `integer`: Error code
  * message `string`: Error message

### FacetItem
* FacetItem `object`
  * count `integer`: Facet item count
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
  * carfax_1_owner `boolean`: Flag to indicate whether listing is carfax_1_owner
  * carfax_clean_title `boolean`: Flag to indicate whether listing is carfax_clean_title
  * city `string`: City of the listing
  * data_source `string`: Data source of the listing
  * dealer_id `integer`: Unique MC assigned dealers id for the listing
  * dom `integer`: Days on Market value for the car based on current and historical listings found in the Marketcheck database for this car
  * dom_180 `integer`: Days on Market value for the car based on current and last 6 month listings found in the Marketcheck database for this car
  * dom_active `integer`: Days on Market value for the car based on current and last 30 days listings found in the Marketcheck database for this car
  * exterior_color `string`: Exterior color of the car
  * financing_options `array`: Array of all finance offers for this listing
    * items [ListingFinance](#listingfinance)
  * first_seen_at `integer`: Listing first seen at first scraped timestamp
  * first_seen_at_date `string`: Listing first seen at first scraped date
  * heading `string`: Listing title as displayed on the source website
  * id `string`: Unique identifier representing a specific listing from the Marketcheck database
  * interior_color `string`: Interior color of the car
  * inventory_type `string`: Inventory type of car
  * is_certified `integer`: Certified car
  * is_searchable `string`: Flag to indicate listing is marked searchable or not
  * last_seen_at `integer`: Listing last seen at (most recent) timestamp
  * last_seen_at_date `string`: Listing last seen at (most recent) date
  * latitude `string`: Latitude of the listing
  * leasing_options `array`: Array of all finance offers for this listing
    * items [ListingLease](#listinglease)
  * longitude `string`: Longitude of the listing
  * miles `integer`: Odometer reading / reported miles usage for the car
  * msrp `integer`: MSRP for the car
  * price `integer`: Asking price for the car
  * ref_miles `string`: Last Odometer reading / reported miles usage for the car. If the asking miles value is not or is available then the last_miles could perhaps be used. last_miles is the miles for the car listed on the source website as of last_miles_dt date
  * ref_miles_dt `integer`: The date at which the last miles was reported online. This is earlier to last_seen_date
  * ref_price `string`: Last reported price for the car. If the asking price value is not or is available then the last_price could perhaps be used. last_price is the price for the car listed on the source website as of last_price_dt date
  * ref_price_dt `integer`: The date at which the last price was reported online. This is earlier to last_seen_date
  * scraped_at `integer`: Listing last seen at date timestamp
  * scraped_at_date `string`: Listing last seen at date
  * seller_name `string`: Seller name of the listing from the Marketcheck database
  * seller_name_o `string`: Seller name of the listing from the Marketcheck database
  * seller_type `string`: Seller type for the car
  * source `string`: Source domain of the listing
  * state `string`: State of the listing
  * status_date `integer`: Timestamp of status date
  * stock_no `string`: Stock number of car in dealers inventory
  * street `string`: Street of the listing
  * trim_r `string`: Trim of the car
  * vdp_url `string`: Vehicle Details Page url of the specific car
  * vin `string`: VIN for the car
  * zip `string`: Zip of the listing

### Listing
* Listing `object`: Represents a full list of attributes available with Marketcheck for a car
  * build [Build](#build)
  * carfax_1_owner `boolean`: Flag to indicate whether listing is carfax_1_owner
  * carfax_clean_title `boolean`: Flag to indicate whether listing is carfax_clean_title
  * data_source `string`: Data source of the listing
  * dealer [NestDealer](#nestdealer)
  * dom `integer`: Days on Market value for the car based on current and historical listings found in the Marketcheck database for this car
  * dom_180 `integer`: Days on Market value for the car based on current and last 6 month listings found in the Marketcheck database for this car
  * dom_active `integer`: Days on Market value for the car based on current and last 30 days listings found in the Marketcheck database for this car
  * exterior_color `string`: Exterior color of the car
  * extra [ListingNestExtraAttributes](#listingnestextraattributes)
  * financing_options `array`: Array of all finance offers for this listing
    * items [ListingFinance](#listingfinance)
  * first_seen_at `integer`: Listing first seen at first scraped timestamp
  * first_seen_at_date `string`: Listing first seen at first scraped date
  * heading `string`: Listing title as displayed on the source website
  * id `string`: Unique identifier representing a specific listing from the Marketcheck database
  * interior_color `string`: Interior color of the car
  * inventory_type `string`: Inventory type of car
  * is_certified `integer`: Certified car
  * last_seen_at `integer`: Listing last seen at (most recent) timestamp
  * last_seen_at_date `string`: Listing last seen at (most recent) date
  * leasing_options `array`: Array of all finance offers for this listing
    * items [ListingLease](#listinglease)
  * media [ListingNestMedia](#listingnestmedia)
  * miles `integer`: Odometer reading / reported miles usage for the car
  * msrp `integer`: MSRP for the car
  * price `integer`: Asking price for the car
  * ref_miles `string`: Last Odometer reading / reported miles usage for the car. If the asking miles value is not or is available then the last_miles could perhaps be used. last_miles is the miles for the car listed on the source website as of last_miles_dt date
  * ref_miles_dt `integer`: The date at which the last miles was reported online. This is earlier to last_seen_date
  * ref_price `string`: Last reported price for the car. If the asking price value is not or is available then the last_price could perhaps be used. last_price is the price for the car listed on the source website as of last_price_dt date
  * ref_price_dt `integer`: The date at which the last price was reported online. This is earlier to last_seen_date
  * scraped_at `integer`: Listing last seen at date timestamp
  * scraped_at_date `string`: Listing last seen at date
  * seller_type `string`: Seller type for the car
  * source `string`: Source domain of the listing
  * stock_no `string`: Stock number of car in dealers inventory
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
  * dealer_added_f `array`: List of dealer added features available with the car
    * items `string`
  * electronics_f `array`: List of electronic features available with the car
    * items `string`
  * exterior_f `array`: List of exterior features available with the car
    * items `string`
  * features `array`: List of Features available with the car
    * items `string`
  * id `string`: Unique identifier representing a specific listing from the Marketcheck database
  * interior_f `array`: List of interior features available with the car
    * items `string`
  * options `array`: Installed Options of the car
    * items `string`
  * safety_f `array`: List of safety features available with the car
    * items `string`
  * seller_cmts `string`: Seller comment for the car
  * standard_f `array`: List of standard features available with the car
    * items `string`
  * technical_f `array`: List of technical features available with the car
    * items `string`

### ListingFinance
* ListingFinance `object`
  * down_payment `number`: Down payment for this finance offer
  * down_payment_percentage `number`: down payment percentage for this finance offer
  * estimated_monthly_payment `number`: estimated monthly payment for this finance offer
  * loan_apr `number`: Loan APR for this finance offer
  * loan_term `integer`: Loan term for this finance offer

### ListingLease
* ListingLease `object`
  * down_payment `number`: Down payment for this lease offer
  * estimated_monthly_payment `number`: estimated monthly payment for this lease offer
  * lease_term `integer`: Lease term for this lease offer

### ListingMedia
* ListingMedia `object`
  * id `string`: Unique identifier representing a specific listing from the Marketcheck database
  * photo_links `array`: A list of photo urls for the car
    * items `string`
  * photo_url `string`: Single photo url of the car

### ListingNestExtraAttributes
* ListingNestExtraAttributes `object`
  * dealer_added_f `array`: List of dealer added features available with the car
    * items `string`
  * electronics_f `array`: List of electronic features available with the car
    * items `string`
  * exterior_f `array`: List of exterior features available with the car
    * items `string`
  * features `array`: List of Features available with the car
    * items `string`
  * interior_f `array`: List of interior features available with the car
    * items `string`
  * options `array`: Installed Options of the car
    * items `string`
  * safety_f `array`: List of safety features available with the car
    * items `string`
  * seller_comments `string`: Seller comments for the car
  * standard_f `array`: List of standard features available with the car
    * items `string`
  * technical_f `array`: List of technical features available with the car
    * items `string`

### ListingNestMedia
* ListingNestMedia `object`
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
  * make `string`: Make of vin provided
  * mds `integer`: Provides Market days supply count
  * model `string`: Model of vin provided
  * sold_vins `array`: Sold vins array
    * items `string`: Sold vins array
  * total_active_cars_for_ymmt `integer`: Active cars for ymmt combination
  * total_cars_sold_in_last_45_days `integer`: Cars sold in last 45 days
  * trim `string`: Trim of vin provided
  * year `integer`: Year of vin provided

### NestDealer
* NestDealer `object`
  * city `string`: City of the dealer
  * country `string`: country of the dealer
  * dealer_type `string`: Type of dealer (franchise/independent)
  * id `integer`: The unique id associated with the dealer in the Marketcheck database
  * latitude `string`: Latutide for the dealer location
  * longitude `string`: Longitude for the dealer location
  * name `string`: Name of the dealer
  * phone `string`: Contact no of the dealer
  * seller_email `string`: Contact email of the dealer
  * state `string`: State of the dealer
  * street `string`: Street of the dealer
  * website `string`: Website of the dealer
  * zip `string`: Zip of the dealer

### PlotPoint
* PlotPoint `object`
  * dom `number`: DOM
  * id `string`: Listing id
  * miles `number`: Miles
  * msrp `number`: Msrp
  * price `number`: Price
  * seller_name `string`: Seller name
  * vin `string`: Vin

### PopularCars
* PopularCars `object`: Top 50 popular cars
  * new_top50 `array`: Array of all new top 50 cars
    * items [BasePopular](#basepopular)
  * used_top50 `array`: Array of all used top 50 cars
    * items [BasePopular](#basepopular)

### PopularityItem
* PopularityItem `object`
  * color `string`: Color depending upon left and right analysis numbers
  * delta_percent `number`: Delta percent
  * difference `number`: Difference depending upon left and right analysis
  * left `number`: Left side rating for above description (2016 ford F-150 Lariat)
  * right `number`: Right side rating for above description (All Other Cars)
  * text `string`: Description for which popularity should be show eg: 2016 ford F-150 Lariat vs All Other Cars
  * thumbs `string`: Thumbs up/down depending upon left and right analysis numbers

### RangeFacetItem
* RangeFacetItem `object`
  * after `integer`: Number of listings that have field value after range end
  * before `integer`: Number of listings that have field value before range start
  * between `integer`: Number of listings that have field value between range start and range end
  * counts `array`
    * items `object`
      * count `integer`
      * lower_bound `integer`
      * upper_bound `integer`
  * end `integer`: The end of range
  * gap `integer`: The range gap applied for range faceting
  * start `integer`: The start of range

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

### Sales
* Sales `object`: Sales count query response
  * city `string`: City
  * counts `integer`: Sales count
  * cpo `integer`: cpo sales count
  * dom_stats [SalesStats](#salesstats)
  * inventory_type `string`: inventory_type
  * make `string`: Make
  * miles_stats [SalesStats](#salesstats)
  * model `string`: model
  * non-cpo `integer`: Non-cpo sales count
  * price_stats [SalesStats](#salesstats)
  * state `string`: State
  * taxonomy_vin `string`: taxonomy_vin
  * trim `string`: trim
  * year `string`: year

### SalesStats
* SalesStats `object`: Sales stats response
  * absolute_mean_deviation `number`: absolute_mean_deviation
  * iqr `number`: iqr
  * mean `number`: mean
  * median `number`: median
  * population_standard_deviation `number`: population_standard_deviation
  * standard_deviation `number`: standard_deviation
  * trimmed_mean `number`: trimmed_mean
  * variance `number`: variance
  * weighted_mean `number`: weighted_mean

### SearchAutoCompleteResponse
* SearchAutoCompleteResponse `object`: Search auto complete query response
  * terms `array`
    * items `object`
      * count `integer`: The number of listings with item as value for given field
      * item `string`: The actual term that either has prefix or contains given input

### SearchFacets
* SearchFacets `object`
  * body_subtype `array`
    * items [FacetItem](#facetitem)
  * body_type `array`
    * items [FacetItem](#facetitem)
  * car_type `array`
    * items [FacetItem](#facetitem)
  * carfax_1_owner `array`
    * items [FacetItem](#facetitem)
  * carfax_clean_title `array`
    * items [FacetItem](#facetitem)
  * city `array`
    * items [FacetItem](#facetitem)
  * cylinders `array`
    * items [FacetItem](#facetitem)
  * data_source `array`
    * items [FacetItem](#facetitem)
  * dealer_id `array`
    * items [FacetItem](#facetitem)
  * doors `array`
    * items [FacetItem](#facetitem)
  * drivetrain `array`
    * items [FacetItem](#facetitem)
  * engine `array`
    * items [FacetItem](#facetitem)
  * engine_aspiration `array`
    * items [FacetItem](#facetitem)
  * engine_block `array`
    * items [FacetItem](#facetitem)
  * engine_size `array`
    * items [FacetItem](#facetitem)
  * exterior_color `array`
    * items [FacetItem](#facetitem)
  * fuel_type `array`
    * items [FacetItem](#facetitem)
  * interior_color `array`
    * items [FacetItem](#facetitem)
  * make `array`
    * items [FacetItem](#facetitem)
  * model `array`
    * items [FacetItem](#facetitem)
  * seller_name `array`
    * items [FacetItem](#facetitem)
  * seller_name_o `array`
    * items [FacetItem](#facetitem)
  * seller_type `array`
    * items [FacetItem](#facetitem)
  * source `array`
    * items [FacetItem](#facetitem)
  * state `array`
    * items [FacetItem](#facetitem)
  * transmission `array`
    * items [FacetItem](#facetitem)
  * trim `array`
    * items [FacetItem](#facetitem)
  * trim_o `array`
    * items [FacetItem](#facetitem)
  * trim_r `array`
    * items [FacetItem](#facetitem)
  * vehicle_type `array`
    * items [FacetItem](#facetitem)
  * year `array`
    * items [FacetItem](#facetitem)

### SearchRangeFacets
* SearchRangeFacets `object`
  * dom `object`
    * items [RangeFacetItem](#rangefacetitem)
  * dom_180 `object`
    * items [RangeFacetItem](#rangefacetitem)
  * dom_active `object`
    * items [RangeFacetItem](#rangefacetitem)
  * miles `object`
    * items [RangeFacetItem](#rangefacetitem)
  * price `object`
    * items [RangeFacetItem](#rangefacetitem)

### SearchResponse
* SearchResponse `object`: Search query response
  * facets `object`
    * items [SearchFacets](#searchfacets)
  * listings `array`
    * items [BaseListing](#baselisting)
  * num_found `integer`: The number of listings found
  * range_facets `object`
    * items [SearchRangeFacets](#searchrangefacets)
  * stats `object`
    * items [SearchStats](#searchstats)

### SearchStats
* SearchStats `object`
  * dom [StatsItem](#statsitem)
  * dom_180 [StatsItem](#statsitem)
  * dom_active [StatsItem](#statsitem)
  * finance_down_payment [StatsItem](#statsitem)
  * finance_down_payment_per [StatsItem](#statsitem)
  * finance_emp [StatsItem](#statsitem)
  * finance_loan_apr [StatsItem](#statsitem)
  * finance_loan_term [StatsItem](#statsitem)
  * lease_down_payment [StatsItem](#statsitem)
  * lease_emp [StatsItem](#statsitem)
  * lease_term [StatsItem](#statsitem)
  * miles [StatsItem](#statsitem)
  * msrp [StatsItem](#statsitem)
  * price [StatsItem](#statsitem)

### SpecsAutoCompleteResponse
* SpecsAutoCompleteResponse `object`: Specs auto complete query response
  * terms `array`
    * items `string`: The actual term that either has prefix or contains given input

### StatsItem
* StatsItem `object`
  * count `integer`: count
  * max `integer`: Maximum value of the field
  * mean `number`: Mean of the field
  * median `number`: median of the field
  * min `integer`: Minimum value of the field
  * missing `integer`: count of listings missing particular field
  * stddev `number`: stddev of the field
  * sum `integer`: Summation of all values of the field
  * sum_of_squares `number`: sum_of_squares of the field

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


