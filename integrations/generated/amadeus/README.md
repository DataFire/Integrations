# @datafire/amadeus

Client library for Amadeus Travel Innovation Sandbox

## Installation and Usage
```bash
npm install --save @datafire/amadeus
```
```js
let amadeus = require('@datafire/amadeus').create({
  apikey: ""
});

amadeus.airports.autocomplete.get({
  "term": ""
}).then(data => {
  console.log(data);
});
```

## Description



## Actions

### airports.autocomplete.get
<p>Using the term parameter and given the start of any word in an airport's official name, a city name, or the start of an <a href="https://en.wikipedia.org/wiki/International_Air_Transport_Association_airport_code">IATA code</a>, this API provides the full name and IATA location code of the city or airport, for use in flight searches. Only major cities and civilian airports with several commercial flights per week are included by default. The response provides up to 20 possible matches, sorted by importance, in a <a href="http://jqueryui.com/autocomplete/">JQuery UI Autocomplete</a> compatible format. <a href="https://github.com/amadeus-travel-innovation-sandbox/sandbox-content/blob/master/airport-autocomplete-template.html">This sample implementation</a> using JQuery UI may help. This API uses data from the <a href="https://github.com/opentraveldata/opentraveldata/blob/master/opentraveldata/optd_por_public.csv">OpenTravelData</a> project.
</p> 
<p>By only using the country parameter, this API is also able to find all the IATA location codes associated with a country. Both term and country parameters can be used together to filter the results accordingly.          
</p>
<p>The value returned is the IATA location code. The label returned is always in UTF-8 format, with the airport official name (which is often in the native language), in the format of English City Name (if not already included in the airport name).</p>



```js
amadeus.airports.autocomplete.get({
  "term": ""
}, context)
```

#### Input
* input `object`
  * term **required** `string`: Search keyword that should represent the start of a word in a city or airport name.
  * country `string`: Identified a country based of a <a href="https://en.wikipedia.org/wiki/ISO_3166-2#Current_codes">ISO 3166-1 alpha-2 code</a>
  * all_airports `boolean`: Boolean to include or not all airports, no matter their traffic rank. False by default, to only display relevant airports.

#### Output
* output `array`
  * items [AirportAutocompleteResponse](#airportautocompleteresponse)

### airports.nearest_relevant.get
<p>This service gives the most relevant airports in a radius of 500 km around the given coordinates. The relevance of an airport is computed by dividing the number of airport movements (take offs and landings) by the distance from the point. This causes the relevance of an airport to increase exponentially as you approach it.</p>

<p>To minimize response time, all distances are computed as a <a href="http://en.wikipedia.org/wiki/Great-circle_distance">great-circle distance</a> from the provided coordinates to the airport coordinates, and thus do not take into account traffic conditions, international boundaries, mountains, water, or other elements that might make the a nearby airport hard to reach.</p>

<p>Only civilian airports with at least several commercial flights per week are included in the results.</p>

<p>The result is a list of airports sorted by decreasing relevance. It always contains the nearest airport with significant commercial traffic. You can freely download the <a href="https://github.com/opentraveldata/opentraveldata/blob/master/opentraveldata/optd_por_public.csv">point of reference information</a> used by this API from the <a href="https://github.com/opentraveldata/opentraveldata">Open Travel Data</a> project.</p>



```js
amadeus.airports.nearest_relevant.get({
  "latitude": "",
  "longitude": ""
}, context)
```

#### Input
* input `object`
  * latitude **required** `string`: Latitude location to be at the center of your search circle.
  * longitude **required** `string`: Longitude location to be at the center of your search circle.

#### Output
* output `array`
  * items [NearestAirport](#nearestairport)

### cars.search_airport.get
<p>With this API you can find out the price and type of car, for all car rental providers, near a specified airport.</p>

<p>You can quickly see the locations of car providers near a given airport, and what cars are available to rent, and at what prices. This API is based on our car pricing service that gets live availability from car providers, and is used to power a variety of airline and travel agency websites.</p>
           
<p>Results are validated from car providers, and thus response times may take up to 10 seconds (response times are typically about 5s), and the number of concurrent calls is throttled per user to avoid flooding our provider's systems. However, this means the final result is guaranteed to be live and accurate.</p>

<p>The configuration of this API allows search for car rentals in the rental location where the car is picked up (at the start of the rental), is the same as the one where it will be dropped off.</p>



```js
amadeus.cars.search_airport.get({
  "location": "",
  "pick_up": "",
  "drop_off": ""
}, context)
```

#### Input
* input `object`
  * location **required** `string`: The <a href="https://en.wikipedia.org/wiki/International_Air_Transport_Association_airport_code">IATA code</a> of the airport at which the car will be rented.
  * pick_up **required** `string`: Date on which the car rental will be collected from the car rental location. If no time is provided, a default value of 09:00 is used. Past availability is not displayed, future availability becomes less useful from about 6 months from the current date.
  * drop_off **required** `string`: Date at which the car rental will end and the car will be returned to the rental location. If no time is provided, a default value of 17:00 is used.
  * lang `string`: The preferred language of the content related to each car rental. Content will be returned in this language if available.
  * currency `string`: The preferred <a href="https://en.wikipedia.org/wiki/ISO_4217">currency</a> to use when displaying prices and rates related to the car rental.
  * provider `string`: 2 character car rental provider code. You may provide this parameter more than once. 
  * rate_class `string`: Allows to request specific rate types.
  * rate_plan `string`: Qualifies the rate depending on the pickup date and the rental duration.
  * rate_filter `string` (values: AVAILABLE, ESTIMATED, ALL): Defines the types of rates to be returned in the output
  * vehicle `array`: Specifies the type of vehicle to be rented. If selected, the results set will include only vehicles that match these type descriptions. The enumerations above correspond to ACRISS Pseudo Codes, and you may also provide an ACRISS pseudo code directly. If specifying a vehicle-specific ACRISS code, you may provide this parameter up to 3 times.

#### Output
* output [CarSearchResponse](#carsearchresponse)

### cars.search_circle.get
<p>With this API you can find out the price and type of car, for all car rental providers, in a specified geographical location.</p>

<p>You can quickly see the locations of car providers near a given point, and what cars are available to rent, and at what prices. This API is based on our car pricing service that gets live availability from car providers, and is used to power a variety of airline and travel agency websites.</p>
           
<p>Results are validated from car providers, and thus response times may take up to 10 seconds (response times are typically about 5s), and the number of concurrent calls is throttled per user to avoid flooding our provider's systems. However, this means the final result is guaranteed to be live and accurate.</p>

<p>The configuration of this API allows search for car rentals in the rental location where the car is picked up (at the start of the rental), is the same as the one where it will be dropped off. </p>



```js
amadeus.cars.search_circle.get({
  "latitude": 0,
  "longitude": 0,
  "radius": 0,
  "pick_up": "",
  "drop_off": ""
}, context)
```

#### Input
* input `object`
  * latitude **required** `number`: Latitude of the center of the search.
  * longitude **required** `number`: Longitude of the center of the search.
  * radius **required** `integer`: Radius around the center to look for hotels in kilometers (km).
  * pick_up **required** `string`: Date on which the car rental will be collected from the car rental location. If no time is provided, a default value of 09:00 is used. Past availability is not displayed, future availability becomes less useful from about 6 months from the current date.
  * drop_off **required** `string`: Date at which the car rental will end and the car will be returned to the rental location. If no time is provided, a default value of 17:00 is used.
  * lang `string`: The preferred language of the content related to each car rental. Content will be returned in this language if available.
  * currency `string`: The preferred <a href="https://en.wikipedia.org/wiki/ISO_4217">currency</a> to use when displaying prices and rates related to the car rental.
  * provider `string`: 2 character car rental provider code. You may provide this parameter more than once. 
  * rate_class `string`: Allows to request specific rate types.
  * rate_plan `string`: Qualifies the rate depending on the pickup date and the rental duration.
  * rate_filter `string` (values: AVAILABLE, ESTIMATED, ALL): Defines the types of rates to be returned in the output
  * vehicle `array`: Specifies the type of vehicle to be rented. If selected, the results set will include only vehicles that match these type descriptions. The enumerations above correspond to ACRISS Pseudo Codes, and you may also provide an ACRISS pseudo code directly. If specifying a vehicle-specific ACRISS code, you may provide this parameter up to 3 times.

#### Output
* output [CarSearchResponse](#carsearchresponse)

### flights.affiliate_search.get
<p>The Flight Affiliate Search API combines Amadeus' flight search technology with Travel Audience's Connect API partners to provide a unique flight search, where all results come with deep-links to book the flight at a partner's website. The API will let you easily provide the traveler with a path to book flights from your application.</p>
<p>Travel Audience Connect partners include
<ul>
  <li><a href="http://www.cityjet.com/">CityJet</a>, <a href="https://www.aireuropa.com/en/flights">Air Europa</a> and <a href="http://www.flytap.com/">TAP</a> in Western Europe,</li>
  <li><a href="http://uralairlines.com/">Ural Airlines</a> in Russia, </li>
  <li><a href="http://www.avianca.com.br/">Avianca Brazil</a>  and</li>
  <li><a href="http://www.jal.com/">JAL</a> in East Asia</li>
</ul>
</p>
<p>Only Travel Audience Connect partner airlines are searched. For an up-to-date list of routes, see the route maps on each partners respective websites above. You can earn commission using the deep links provided in the search results if you sign up for an account at <a href="http://connect.travelaudience.com/">connect.travelaudience.com</a>.</p>



```js
amadeus.flights.affiliate_search.get({
  "origin": "",
  "destination": "",
  "departure_date": ""
}, context)
```

#### Input
* input `object`
  * origin **required** `string`: City code from which the traveler will depart. See the location and airport interfaces for more information.
  * destination **required** `string`: <a href="https://en.wikipedia.org/wiki/International_Air_Transport_Association_airport_code">IATA code</a> of the city to which the traveler is going
  * departure_date **required** `string`: The date on which the traveler will depart from the origin to go to the destination. The maximum scope for a date range is 2 days, for a larger scope, use the Extensive Search! 
  * return_date `string`: The date on which the traveler will depart from the destination to return to the origin. If this parameter is not specified, the search will find only one-way trips. If this, or the return_by parameter are specified, only return trips are found
  * adults `integer`: The number of adult (age 12 and over) passengers traveling on this flight.
  * children `integer`: The number of child (younger than age 12 on date of departure) passengers traveling on this flight who will each have their own separate seat
  * infants `integer`: The number of infant (younger than age 2 on date of departure) passengers traveling on this flight. Infants travel in the lap of an adult passenger, and thus the number of infants must not exceed the number of adults.
  * include_merchants `array`: If specified, all results will include at least one flight where one or more of these airlines is the marketing carrier. Airlines are specified using <a href="https://en.wikipedia.org/wiki/Airline_codes"><a href="https://en.wikipedia.org/wiki/Airline_codes">IATA airline code</a>s</a>
  * exclude_merchants `array`: If specified, no results will include any flights where any of these airlines is the marketing carrier. Airlines are specified using <a href="https://en.wikipedia.org/wiki/Airline_codes"><a href="https://en.wikipedia.org/wiki/Airline_codes">IATA airline code</a>s</a>
  * max_price `integer`: Maximum price of trips to find in the result set, in USD (US dollars) unless some other currency code is specified. By default, no limit is applied
  * currency `string`: The preferred <a href="https://en.wikipedia.org/wiki/ISO_4217">currency</a> for the results
  * mobile `boolean`: Setting this to true will show mobile web deeplinks 

#### Output
* output [AffiliateSearchResponse](#affiliatesearchresponse)

### flights.extensive_search.get
<p>The Extensive Flight Search allows you to find the prices of one-way or return flights between two airports over a large number of dates, and for a large variety of stay durations. The search doesn't return exact itineraries, but rather tells you the best price for a flight on a given day, for a stay of a given duration.</p>

<p>The search is based on our Extreme Search platform, which continually caches a large number of flight search results from a list of origin cities to a variety of destinations. Since it's a cached search, the response time is fast, but not all origin airports are available. Here is <a href="https://github.com/amadeus-travel-innovation-sandbox/sandbox-content/blob/master/flight-search-cache-origin-destination.csv">a list of the currently supported origin-destination IATA location pairs</a>. We try to keep this list as fresh as possible for you, but be aware that it may not always be exactly up-to-date and it can change without warning.</p>

<p>That said, a price graph like this provides a powerful bargin shopping tool - allowing travelers with flexible itineraries to identify days on which they can get the cheapest flights to their destinations.</p>



```js
amadeus.flights.extensive_search.get({
  "origin": "",
  "destination": ""
}, context)
```

#### Input
* input `object`
  * origin **required** `string`: <a href="https://en.wikipedia.org/wiki/International_Air_Transport_Association_airport_code">IATA code</a> of the city from which the traveler will depart. See the location and airport interfaces for more information.
  * destination **required** `string`: <a href="https://en.wikipedia.org/wiki/International_Air_Transport_Association_airport_code">IATA code</a> of the city to which the traveler is going
  * departure_date `string`: Range of dates between which the traveler could depart. Dates are specified in the <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO 8601</a> yyyy-MM-dd date format. Ranges are inclusive and ranges of months will apply from the start to the end of the month. If just a single date is specified, only that date will be searched. By default, the date range starts today and applies up to 361 in the future is applied. Past dates are generally not supported, future dates should be in the next 361 days, although results start to become sparse after about 6 months in the future, as airlines may still be defining their schedules. The default is to search all future dates available. 
  * one-way `boolean`: When set to true, the query will be for a single trip from the origin to the destination. When this parameter is not provided, or is set to false, the query is for a round trip from the origin to the destination and back again.
  * duration `string`: The allowed duration or range of durations of the trip, in days. This parameter must not be set if the one-way parameter is set to true.
  * direct `boolean`: Limit the search to results that do not require the passenger to change plane?
  * max_price `string`: Maximum price of trips to find in the result set, in the currency specified for this origin and destination pair in the cache contents spreadsheet. So, for example, if the origin is NYC, and the max price is 400, this means 400 USD. If the origin is PAR, and the max price is 400, this means 400 EUR. By default, no limit is applied
  * aggregation_mode `string`: Specifies the granularity of results to be found. DAY is the default when one-way is true finds a result for departure date in the date range. STAY is the default otherwise and finds all round trip permutations for this route withim the given date range. DESTINATION finds one result, only the cheapest price for this route over the provided date range. WEEK finds the cheapest result for every week in the date range. Note that specifying a small granularity but a large search scope may result in a huge output. For some very large outputs, the API may refuse to provide a result.

#### Output
* output [ExtremeSearchResponse](#extremesearchresponse)

### flights.inspiration_search.get
<p>The Inspiration Flight Search allows you to find the prices of one-way and return flights from an origin city without necessarily having a destination, or even a flight date, in mind. The search doesn't return a distinct set of price options, but rather, can tell you the price of flying from a given city to some destination, for a trip of a given duration, that falls within a given date range.</p>

<p>The search is based on our Extreme Search platform, which continually caches a large number of flight search results from a list of origin cities to a variety of destinations. Since it's a cached search, the response time is fast, but not all origin airports are available. Here is <a href="https://github.com/amadeus-travel-innovation-sandbox/sandbox-content/blob/master/flight-search-cache-origin-destination.csv">a list of the currently supported origin-destination IATA location pairs</a>. We try to keep this list as fresh as possible for you, but be aware that it may not always be exactly up-to-date and it can change without warning.</p>

<p>Despite this limitation don't underestimate the power of this API. Thanks to its quick response speed you can easily pair it with other APIs to provide a low fare and inspiration for any destination. For example, you can could combine it with a event search API and suggest a total price to see go and see an concert or a game in a selection of cities.</p>



```js
amadeus.flights.inspiration_search.get({
  "origin": ""
}, context)
```

#### Input
* input `object`
  * origin **required** `string`: <a href="https://en.wikipedia.org/wiki/International_Air_Transport_Association_airport_code">IATA code</a> of the city from which the traveler will depart. See the location and airport interfaces for more information.
  * destination `string`: <a href="https://en.wikipedia.org/wiki/International_Air_Transport_Association_airport_code">IATA code</a> of the city to which the traveler is going
  * departure_date `string`: Range of dates between which the traveler could depart. Dates are specified in the <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO 8601</a> yyyy-MM-dd date format. Ranges are inclusive and ranges of months will apply from the start to the end of the month. If just a single date is specified, only that date will be searched. By default, the date range starts today and applies up to 361 in the future is applied. Past dates are generally not supported, future dates should be in the next 361 days, although results start to become sparse after about 6 months in the future, as airlines may still be defining their schedules. The default is to search all future dates available.
  * one-way `boolean`: When set to true, the query will be for a single trip from the origin to the destination. When this parameter is not provided, or is set to false, the query is for a round trip from the origin to the destination and back again.
  * duration `string`: The allowed duration or range of durations of the trip, in days. This parameter must not be set if the one-way parameter is set to true.
  * direct `boolean`: Limit the search to results that do not require the passenger to change plane?
  * max_price `string`: Maximum price of trips to find in the result set, in the currency specified for this origin and destination pair in the cache contents spreadsheet. So, for example, if the origin is NYC, and the max price is 400, this means 400 USD. If the origin is PAR, and the max price is 400, this means 400 EUR. By default, no limit is applied
  * aggregation_mode `string`: Specifies the granularity of results to be found. DESTINATION is the default and finds one result per city. COUNTRY finds one result per country, DAY finds on result for every day in the date range, WEEK finds one result for every week in the date range. Note that specifying a small granularity but a large search scope may result in a huge output. For some very large outputs, the API may refuse to provide a result.

#### Output
* output [ExtremeSearchResponse](#extremesearchresponse)

### flights.low_fare_search.get
<p>This is the low fare search engine Amadeus uses to retrieve the best price for flights, based on our latest Master Pricer Travel Board technology. This document describes how to make a low fare search and how to handle the returned messages.</p>

<p>The message is composed of multiple results for given request. A result is defined by a unique combination of price, tax, passenger type, fare type, cabin, and availability for each requested segment.</p> 

<p>A result is then composed of single or multiple itineraries. Each itinerary is composed of an outbound leg, and, if a return date was specified, an inbound leg. Each leg is composed of a list of one or more flights, that the traveller will be required to take in order to get from the origin airport to the destination airport.</p>



```js
amadeus.flights.low_fare_search.get({
  "origin": "",
  "destination": "",
  "departure_date": ""
}, context)
```

#### Input
* input `object`
  * origin **required** `string`: City code from which the traveler will depart. See the location and airport interfaces for more information.
  * destination **required** `string`: <a href="https://en.wikipedia.org/wiki/International_Air_Transport_Association_airport_code">IATA code</a> of the city to which the traveler is going
  * departure_date **required** `string`: The date on which the traveler will depart from the origin to go to the destination. You can specify a date range of up to 2 days. For a larger date range, use the Extensive Search. Dates are specified in the <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO 8601</a> yyyy-MM-dd date format and separated by --.
  * return_date `string`: The date on which the traveler will depart from the destination to return to the origin. If this parameter is not specified, the search will find only one-way trips. If this, or the return_by parameter are specified, only return trips are found. You can specify a date range of up to 2 days.
  * arrive_by `string`: The datetime by which the outbound flight should arrive, based on local time at the destination airport.  Date-times are specified in the <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO 8601</a> yyyy-MM-ddTHH:mm date format
  * return_by `string`: The time by which the inbound flight should arrive, based on local time at the airport specified as the origin parameter
  * adults `integer`: The number of adult (age 12 and over) passengers traveling on this flight.
  * children `integer`: The number of child (younger than age 12 on date of departure) passengers traveling on this flight who will each have their own separate seat
  * infants `integer`: The number of infant (younger than age 2 on date of departure) passengers traveling on this flight. Infants travel in the lap of an adult passenger, and thus the number of infants must not exceed the number of adults.
  * include_airlines `array`: If specified, all results will include at least one flight where one or more of these airlines is the marketing carrier. This behaves as an OR function. Airlines are specified using <a href="https://en.wikipedia.org/wiki/Airline_codes"><a href="https://en.wikipedia.org/wiki/Airline_codes">IATA airline code</a>s</a>.
  * exclude_airlines `array`: If specified, no results will include any flights where any of these airlines is the marketing carrier. Airlines are specified using <a href="https://en.wikipedia.org/wiki/Airline_codes"><a href="https://en.wikipedia.org/wiki/Airline_codes">IATA airline code</a>s</a>.
  * nonstop `boolean`: Setting this to true will find only flights that do not require the passenger to change from one flight to another
  * max_price `integer`: Maximum price of trips to find in the result set, in USD (US dollars) unless some other currency code is specified. By default, no limit is applied
  * currency `string`: The preferred <a href="https://en.wikipedia.org/wiki/ISO_4217">currency</a> for the results
  * travel_class `string`: Searches for results where the majority of the itinerary flight time should be in a the specified cabin class or higher
  * number_of_results `integer`: The number of results to display. This will not be strictly interpreted but used as a guideline to display a useful number of results. By default, the number of results is dynamically determined. A maximum of 250 results will be displayed.

#### Output
* output [LowFareSearchResponse](#lowfaresearchresponse)

### hotels.search_airport.get
<p>A fast Hotel shopping API to see which hotels are available in a given area, on a given day and displays their lowest prices. With this API you can find out the price of the cheapest daily rate for all hotels near a given airport.</p>

<p>This API allows you to quickly see the locations of hotels near a given airport, and what prices in that area look like. Note that hotel images are not available to users outside of Amadeus, as we are not licensed to redistribute them. The API is based on our high-speed hotel pricing cache, which is also used to power the <a href="https://hotelsearchengine.amadeus.com/">Amadeus Hotel Search Engine</a> application. Results are returned very quickly, response times are generally under 2s. Our cache has great global coverage and is constantly refreshed with the latest prices.</p>



```js
amadeus.hotels.search_airport.get({
  "location": "",
  "check_in": "",
  "check_out": ""
}, context)
```

#### Input
* input `object`
  * location **required** `string`: <a href="https://en.wikipedia.org/wiki/International_Air_Transport_Association_airport_code">IATA airport code</a> for hotel availability is required requested.
  * check_in **required** `string`: Date on which the guest will begin their stay in the hotel. Past availability is not displayed, future availability becomes less useful from about 6 months from the current date.
  * check_out **required** `string`: Date on which the guest will end their stay in the hotel.
  * radius `integer`: Radius around the center to look for hotels in kilometers (km).
  * lang `string`: The preferred language of the content related to each hotel. Content will be returned in this language if available.
  * currency `string`: The preferred <a href="https://en.wikipedia.org/wiki/ISO_4217">currency</a> for the results
  * chain `string`: Narrows the hotel search to a given hotel provider. The hotel chain is indicated by the first two characters of the property code.
  * max_rate `number`: The maximum amount per night that any hotel in the shopping response should cost. This is calculated by dividing the total price of the stay for the given dates by the number of nights specified falling between the check_in and check_out dates.
  * number_of_results `integer`: The maximum number of hotels to return in the results set. Hotels are ordered by total price, so if more than the given maximum number of hotels are available, only the cheapest options are returned.
  * all_rooms `boolean`: This option if enabled will return all hotel room rates, not just the lowest room rate. Note: This will have an impact on the response time due to the larger messages returned.
  * show_sold_out `boolean`: This option if enabled will return hotel names and addresses even if rooms are sold out (closed properties)
  * amenity `array`: Hotel <a href="hotels-api-supported-amenities-filter">amenities filter</a> to search narrow down hotels with certain amenities. For example&colon; amenity=POOL. (Note: multiple amenities can be used in searches: amenity=PARKING&amenity=RESTAURANT&amenity=PETS_ALLOWED).

#### Output
* output [HotelSearchResponse](#hotelsearchresponse)

### hotels.search_box.get
<p>A fast Hotel shopping API to see which hotels are available in a given area, on a given day and displays their lowest prices. With this API you can find out the price of the cheapest daily rate for all hotels within a specified geographical region.</p>

<p>This API allows you to quickly see the hotel locations in a region, and what prices in that area look like,  as well as the check-in and check-out dates, and get a list of up to 140 properties (names, codes, image, amenities) with their locations and rates. Optional parameters such as currency and maximum rates, amenities or hotel chain codes are also available and can be used to narrow down the results. More optional parameters such as show_sold_out & rooms can be used to show sold out rooms and all available rooms.</p>
            
<p>The API is based on our high-speed hotel pricing cache, which is also used to power the <a href="https://hotelsearchengine.amadeus.com/">Amadeus Hotel Search Engine</a> application. Results are returned very quickly, response times are generally under 2s. Our cache has great global coverage and is constantly refreshed with the latest prices.</p>



```js
amadeus.hotels.search_box.get({
  "south_west_corner": "",
  "north_east_corner": "",
  "check_in": "",
  "check_out": ""
}, context)
```

#### Input
* input `object`
  * south_west_corner **required** `string`: The coordinates of the south-west corner of the search box.
  * north_east_corner **required** `string`: The coordinates of the north-east corner of the search box.
  * check_in **required** `string`: Date on which the guest will begin their stay in the hotel. Past availability is not displayed, future availability becomes less useful from about 6 months from the current date.
  * check_out **required** `string`: Date on which the guest will end their stay in the hotel.
  * lang `string`: The preferred language of the content related to each hotel. Content will be returned in this language if available.
  * currency `string`: The preferred <a href="https://en.wikipedia.org/wiki/ISO_4217">currency</a> for the results
  * chain `string`: Narrows the hotel search to a given hotel provider. The hotel chain is indicated by the first two characters of the property code.
  * max_rate `number`: The maximum amount per night that any hotel in the shopping response should cost. This is calculated by dividing the total price of the stay for the given dates by the number of nights specified falling between the check_in and check_out dates.
  * number_of_results `integer`: The maximum number of hotels to return in the results set. Hotels are ordered by total price, so if more than the given maximum number of hotels are available, only the cheapest options are returned.
  * all_rooms `boolean`: This option if enabled will return all hotel room rates, not just the lowest room rate. Note: This will have an impact on the response time due to the larger messages returned.
  * show_sold_out `boolean`: This option if enabled will return hotel names and addresses even if rooms are sold out (closed properties)
  * amenity `array`: Hotel <a href="hotels-api-supported-amenities-filter">amenities filter</a> to search narrow down hotels with certain amenities. For example&colon; amenity=POOL. (Note: multiple amenities can be used in searches: amenity=PARKING&amenity=RESTAURANT&amenity=PETS_ALLOWED).

#### Output
* output [HotelSearchResponse](#hotelsearchresponse)

### hotels.search_circle.get
<p>A fast Hotel shopping API to see which hotels are available in a given area, on a given day and displays their lowest prices. With this API you can find out the price of the cheapest daily rate for all hotels within a specified radius of a point.</p>

<p>This API allows you to quickly see the hotel locations in a region, and what prices in that area look like,  as well as the check-in and check-out dates, and get list of up to 140 properties (names, codes, image, amenities) with their locations and rates. Optional parameters such as currency and maximum rates, amenities or hotel chain codes are also available and can be used to narrow down the results. More optional parameters such as show_sold_out & rooms can be used to show sold out rooms and all available rooms. </p>

<p>The API is based on our high-speed hotel pricing cache, which is also used to power the <a href="https://hotelsearchengine.amadeus.com/">Amadeus Hotel Search Engine</a> application. Results are returned very quickly, response times are generally under 2s. Our cache has great global coverage and is constantly refreshed with the latest prices.</p>



```js
amadeus.hotels.search_circle.get({
  "latitude": 0,
  "longitude": 0,
  "radius": 0,
  "check_in": "",
  "check_out": ""
}, context)
```

#### Input
* input `object`
  * latitude **required** `number`: Latitude of the center of the search.
  * longitude **required** `number`: Longitude of the center of the search.
  * radius **required** `integer`: Radius around the center to look for hotels in kilometers (km).
  * check_in **required** `string`: Date on which the guest will begin their stay in the hotel. Past availability is not displayed, future availability becomes less useful from about 6 months from the current date.
  * check_out **required** `string`: Date on which the guest will end their stay in the hotel.
  * lang `string`: The preferred language of the content related to each hotel. Content will be returned in this language if available.
  * currency `string`: The preferred <a href="https://en.wikipedia.org/wiki/ISO_4217">currency</a> for the results
  * chain `string`: Narrows the hotel search to a given hotel provider. The hotel chain is indicated by the first two characters of the property code.
  * max_rate `number`: The maximum amount per night that any hotel in the shopping response should cost. This is calculated by dividing the total price of the stay for the given dates by the number of nights specified falling between the check_in and check_out dates.
  * number_of_results `integer`: The maximum number of hotels to return in the results set. Hotels are ordered by total price, so if more than the given maximum number of hotels are available, only the cheapest options are returned.
  * all_rooms `boolean`: This option if enabled will return all hotel room rates, not just the lowest room rate. Note: This will have an impact on the response time due to the larger messages returned.
  * show_sold_out `boolean`: This option if enabled will return hotel names and addresses even if rooms are sold out (closed properties)
  * amenity `array`: Hotel <a href="hotels-api-supported-amenities-filter">amenities filter</a> to search narrow down hotels with certain amenities. For example&colon; amenity=POOL. (Note: multiple amenities can be used in searches: amenity=PARKING&amenity=RESTAURANT&amenity=PETS_ALLOWED).

#### Output
* output [HotelSearchResponse](#hotelsearchresponse)

### hotels.property_code.get
<p>This API allows you to quickly see the detailed information of a single hotel, including descriptions, address, GPS location, amenities, awards, lowest priced room and all room prices and booking information. </p>

<p>This API gives you more information on a specific property. Optional parameters such as show_sold_out & rooms can be used to show sold out rooms and all available rooms. </p>

<p>The API is based on our high-speed hotel pricing cache, which is also used to power the <a href="https://hotelsearchengine.amadeus.com/">Amadeus Hotel Search Engine</a> application. Results are returned very quickly, response times are generally under 2s. Our cache has great global coverage and is constantly refreshed with the latest prices.</p>



```js
amadeus.hotels.property_code.get({
  "property_code": "",
  "check_in": "",
  "check_out": ""
}, context)
```

#### Input
* input `object`
  * property_code **required** `string`: A Hotel property code based on 2 letter chain code + 3 letter <a href="https://en.wikipedia.org/wiki/International_Air_Transport_Association_airport_code">IATA code</a> of the city + 3 char property unique id.
  * check_in **required** `string`: Date on which the guest will begin their stay in the hotel. Past availability is not displayed, future availability becomes less useful from about 6 months from the current date.
  * check_out **required** `string`: Date on which the guest will end their stay in the hotel.
  * lang `string`: The preferred language of the content related to each hotel. Content will be returned in this language if available.
  * currency `string`: The preferred <a href="https://en.wikipedia.org/wiki/ISO_4217">currency</a> for the results
  * all_rooms `boolean`: This option if enabled will return all hotel room rates, not just the lowest room rate. Note: This will have an impact on the response time due to the larger messages returned.
  * show_sold_out `boolean`: This option if enabled will return hotel names and addresses even if rooms are sold out (closed properties)

#### Output
* output [HotelPropertyResponse](#hotelpropertyresponse)

### location.code.get
<p>This service retrieves the location information corresponding to a IATA city or airport code.</p>

<p>When provided with an <a href="https://en.wikipedia.org/wiki/International_Air_Transport_Association_airport_code">IATA code</a>, the service determines whether this code could relate to a city code, an airport code or both. If the city could contain multiple airports, it will return all possible airports that correspond to that city code.</p>

<p>This API is based on the Amadeus supported <a href="http://opentraveldata.github.io/geobases">Geobases</a> open-source project. If you wish to make your own database with all IATA location information, in order to get faster reponses, you can download the latest raw data from their <a href="https://github.com/opentraveldata/opentraveldata/blob/master/opentraveldata/optd_por_public.csv">github page</a>.</p>



```js
amadeus.location.code.get({
  "code": ""
}, context)
```

#### Input
* input `object`
  * code **required** `string`: IATA location code for which further information is required

#### Output
* output [LocationResponse](#locationresponse)

### points_of_interest.yapq_search_circle.get
Amadeus has partnered with <a href="http://yapq.io/">YapQ</a> to bring you point of interest APIs with the goal of offering you unbiased ratings of landmarks and tourist attractions. YapQ rates places according to their interest on social media and provides Wikipedia content and Geonames ID at a given location. <br />
YapQ's service indexes millions of points around the world, and provides content in 12 different languages. This allows you to ensure you catch the <em>must-see</em> sights at a specific <a href="http://yapq.io/cities.html">YapQ supported location</a>.<br />
Each point of interest comes with links to content, grading information, location and directions to help make discovering your destination easy and fun.<br /><br />
This service is still under active development, and the response format may change without warning. We'd be interested in your feedback - <a href="mailto:sandbox@yapq.com">send us an email</a>.



```js
amadeus.points_of_interest.yapq_search_circle.get({
  "latitude": 0,
  "longitude": 0,
  "radius": 0
}, context)
```

#### Input
* input `object`
  * latitude **required** `number`: Latitude of the center of the search, in decimal degrees
  * longitude **required** `number`: Longitude of the center of the search, in decimal degrees
  * radius **required** `integer`: Radius around the center to look for points-of-interest around the given latitude and longitude in kilometers (km)
  * lang `string` (values: DE, EN, ES, FR, HE, IT, JA, KO, NL, PL, RU, ZH): The preferred language of the content related to each point of interest. Content will be returned in this language if available
  * category `string`: Filters the resulting points_of_interest to include only results which have a least one category containing the given provided word. Good examples are <em>museum</em>, <em>landmark</em> or <em>church</em>
  * geonames `boolean`: Setting this to true includes only points of interest with a geonames ID
  * vibes `boolean`: Includes content that doesn't correspond to an active physical place, but which gives the user some background information, or <em>vibe</em> for the place they are visiting. An example of this may be information on an influential demolished building that used to exist at a certain location, or more information on a district of the city
  * social_media `boolean`: Enabling this includes images from Instagram in the output results. This is disabled by default, since these images are often just pictures of people or food, which often have little relevance to the actual location
  * image_size `string` (values: SMALL, MEDIUM, LARGE, HD): The size of the images you'd like to see in the response
  * number_of_images `integer`: Number of images to display.
  * number_of_results `integer`: The maximum number of points of interest to return in the results set. This is a range from 1 to 100

#### Output
* output [PointsOfInterestResponse](#pointsofinterestresponse)

### points_of_interest.yapq_search_text.get
Amadeus has partnered with <a href="http://yapq.io/">YapQ</a> to bring you point of interest APIs with the goal of offering you unbiased ratings of landmarks and tourist attractions. YapQ rates these points according to their interest on social media and provides Wikipedia content and Geonames ID in a given city. <br />
YapQ's service indexes millions of points around the world, and provides content in 12 different languages. This allows you to ensure you catch the <em>must-see</em> sights in a <a href="http://yapq.io/cities.html">YapQ supported city</a>.<br />
Each point of interest comes with links to content, grading information, location and directions to help make discovering your destination easy and fun.<br /><br />
This service is still under active development, and the response format may change without warning. We'd be interested in your feedback - <a href="mailto:sandbox@yapq.com">send us an email</a>.



```js
amadeus.points_of_interest.yapq_search_text.get({
  "city_name": ""
}, context)
```

#### Input
* input `object`
  * city_name **required** `string`: The name of the <a href="http://yapq.io/cities.txt">supported city</a> for which you are searching, in the selected language.
  * lang `string` (values: DE, EN, ES, FR, HE, IT, JA, KO, NL, PL, RU, ZH): The preferred language of the content related to each point of interest. Content will be returned in this language if available
  * category `string`: Filters the resulting points_of_interest to include only results which have a least one category containing the given provided word. Good examples are <em>museum</em>, <em>landmark</em> or <em>church</em>
  * geonames `boolean`: Setting this to true includes only points of interest with a geonames ID
  * vibes `boolean`: Includes content that doesn't correspond to an active physical place, but which gives the user some background information, or <em>vibe</em> for the place they are visiting. An example of this may be information on an influential demolished building that used to exist at a certain location, or more information on a district of the city
  * social_media `boolean`: Enabling this includes images from Instagram in the output results. This is disabled by default, since these images are often just pictures of people or food, which often have little relevance to the actual location
  * image_size `string` (values: SMALL, MEDIUM, LARGE, HD): The size of the images you'd like to see in the response
  * number_of_images `integer`: Number of images to display
  * number_of_results `integer`: The maximum number of points of interest to return in the results set. This is a range from 1 to 100

#### Output
* output [PointsOfInterestResponse](#pointsofinterestresponse)

### rail_station.id.get
Rail-Station Information - Retrieve the rail station information corresponding to an Amadeus UIC rail station ID. Currently only French and Italian stations are supported.


```js
amadeus.rail_station.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Station ID for which further information is required.

#### Output
* output [RailStationResponse](#railstationresponse)

### rail_stations.autocomplete.get
<p>Given the start of any word in a rail station's official name, as a term, this API provides the full name and rail station ID of a rail station for use in searches. The response provides an array of up to 20 possible matches, sorted by passenger traffic, in a JQuery Autocomplete compatible format.</p>

<p>The value returned is the UIC station code. The label returned is always in UTF-8 format, with the station's official name (which is often in the native language). Agglomeration station codes may also be returned.</p>

<p>Note that only French and Italian rail stations are supported by the Rail Station Autocomplete API</p>



```js
amadeus.rail_stations.autocomplete.get({
  "term": ""
}, context)
```

#### Input
* input `object`
  * term **required** `string`: Search term that should represent some part of a station name. Not case sensitive, may be blank.

#### Output
* output `array`
  * items [RailStationAutocompleteResponse](#railstationautocompleteresponse)

### trains.extensive_search.get
<p>This API allows you to search trains availability and prices for a single day or date range. It's based on our Rail Instant Search technology, providing you with immediate results from our rail search cache.</p>

<p>This API has content from SNCF (French trains).</p>
            
<p>The content is also restricted to single-leg trips - where a single train takes you directly from the origin to the destination.</p>



```js
amadeus.trains.extensive_search.get({
  "origin": "",
  "destination": "",
  "departure_date": ""
}, context)
```

#### Input
* input `object`
  * origin **required** `string`: Identifier of the rail station from which you would like to depart.
  * destination **required** `string`: Identifier of the rail station to which you would like to travel.
  * departure_date **required** `string`: The date or range of dates on which you would like to depart from the origin station to go to the destination.

#### Output
* output [ExtensiveTrainSearchResponse](#extensivetrainsearchresponse)

### trains.schedule_search.get
<p>This API allows you to find all the possible destinations in the Rail Instant Search cache (used by Extensive Search above) from a given origin station on a given day. You can use this to help build network maps, journey planners or provide inspiration for rail travel.</p>

<p>This API has continuous content from <a href="http://www.sncf.com/">SNCF</a>.<br />
All the options returned are single-leg trips - where a single train takes you directly from the origin to the destination. In general, only departure dates up to 90 days in the future are supported</p>

<p>Currently agglomeration stations are not supported</p>



```js
amadeus.trains.schedule_search.get({
  "origin": "",
  "departure_date": ""
}, context)
```

#### Input
* input `object`
  * origin **required** `string`: Identifier of the rail station where you would like to depart from.
  * departure_date **required** `string`: The date on which you would like to depart from the origin station to go to the destination.

#### Output
* output [TrainScheduleSearchResponse](#trainschedulesearchresponse)

### travel_intelligence.flight_traffic.get
<p>The Flight Traffic API lets you find the origin and destination traffic summary between two journey points over a specified period.</p>
<p>The search returns number of flights & travelers for each origin and destination, ordered by popularity, for each month specified within the search period. This search can help you answer questions like "Where are people from Los Angeles traveling to between January and April of 2015?" or "Which is the most popular month for New Yorkers to travel last year?". </p>
<p>This search is based on Amadeus' Travel Intelligence Engine, a high performance scalable cloud-based platform, born in the age of Big Data and purposely built for the industry bringing total flexibility and speed to business intelligence for travel. Please see <a href="http://www.amadeus.com/travelintelligence">amadeus.com/travelintelligence</a> for more information.</p>



```js
amadeus.travel_intelligence.flight_traffic.get({
  "period": "",
  "origin": ""
}, context)
```

#### Input
* input `object`
  * period **required** `string`: Range of periods for which flight traffic information is required. Ranges are inclusive and ranges of months will apply from the start to the end of the month. If just a single period is specified, only that period will be displayed. Only periods from 2011-01 up to previous month of the current year are valid. Future periods are not supported.
  * origin **required** `string`: <a href="https://en.wikipedia.org/wiki/International_Air_Transport_Association_airport_code">IATA code</a> of the city from which the traveler will depart.
  * destination `string`: <a href="https://en.wikipedia.org/wiki/International_Air_Transport_Association_airport_code">IATA code</a> of the city to which the traveler is going.
  * number_of_results_per_period `integer`: The maximum number of destinations to return for each period. Destinations are ordered by dates and number of travelers. The maximum number of destinations per period returned is 50

#### Output
* output `array`
  * items [FlightTrafficSearchResult](#flighttrafficsearchresult)

### travel_intelligence.top_destinations.get
<p>The Top Flight Destinations API lets you find the most popular flight destinations from an origin during a period. This can help you answer questions like "Where are most people from Paris going to during the month of September?" The API is based on estimated flight traffic summary data from two journey points over a specific period. It returns up to 50 results, ordered by popularity, showing number of travelers as well as number of flights.</p>

<p>This estimated search is based on Amadeus' Travel Intelligence Engine, a high performance scalable cloud-based platform, born in the age of Big Data and purposely built for the industry bringing total flexibility and speed to business intelligence for travel. Please see <a href="http://www.amadeus.com/travelintelligence">amadeus.com/travelintelligence</a> for more information.</p>



```js
amadeus.travel_intelligence.top_destinations.get({
  "period": "",
  "origin": ""
}, context)
```

#### Input
* input `object`
  * period **required** `string`: Period, in month of the year (YYYY-MM), when consumers are traveling. Only periods from 2011-01 up to previous month of the current year are valid. Future dates are not supported.
  * origin **required** `string`: <a href="https://en.wikipedia.org/wiki/International_Air_Transport_Association_airport_code">IATA code</a> of the city from which the traveler will depart.
  * number_of_results `integer`: The maximum number of destinations to return in the results set. Destinations are ordered by number of travelers. The maximum number of destinations returned is 50

#### Output
* output [TopDestinationsSearchResponse](#topdestinationssearchresponse)

### travel_intelligence.top_searches.get
<p>The Top Flight Search allows you to find number of estimated searches from an origin, optionally a destination, within a time period when travelers are performing the searches.</p> 
<p>The search is based on queries performed from within a country (also refers to as market) and returns up to 50 results, ordered by popularity, showing number of searches for most searched destination with its previous year comparison. This search also shows patterns on how travelers are searching for flights, revealing where, when and for how long they’re planning to travel. See
<ul><li>Trip Durations(How long are the trips planned for?) and</li>
<li> Advance Search Period (How long before departures do travelers start searching for their trips?)</li>
</ul></p>
<p>This estimated search is based on Amadeus' Travel Intelligence Engine, a high performance scalable cloud-based platform, born in the age of Big Data and purposely built for the industry bringing total flexibility and speed to business intelligence for travel. Please see <a href="http://www.amadeus.com/travelintelligence">amadeus.com/travelintelligence</a> for more information.</p>



```js
amadeus.travel_intelligence.top_searches.get({
  "period": "",
  "origin": "",
  "country": ""
}, context)
```

#### Input
* input `object`
  * period **required** `string`: Period of date (month or year) when consumers are searching to travel. Use YYYY-MM for month or YYYY for year. Only periods from year 2011-01 up to current year, previous month are valid. Future dates are not supported.
  * origin **required** `string`: <a href="https://en.wikipedia.org/wiki/International_Air_Transport_Association_airport_code">IATA code</a> of the city from which the traveler will depart.
  * destination `string`: <a href="https://en.wikipedia.org/wiki/International_Air_Transport_Association_airport_code">IATA code</a> of the city to which the traveler is going
  * country **required** `string`: 2-letter IATA country code of the country where the search queries originates from.
  * number_of_results `integer`: The maximum number of destinations to return in the results set. Destinations are ordered by number of searches. The maximum number of destinations returned is 50

#### Output
* output [TopSearchesSearchResponse](#topsearchessearchresponse)

### travel_record.record_locator.get
<p>Note: This API requires the use of HTTPS</p>

<p>This service retrieves a travel record (also sometimes referred to as a PNR) for a given journey when provided with Record Locator to identify a travel record, along with the last name of any traveler who is marked as a passenger on this record.</p>

<p>The API provides detailed information on a given record, including any air, car, hotel or rail reservations, as well as passenger details, and contact frequent traveler information for each passenger when available. You can use this to provide a wide variety of pre-trip or in-trip services.</p>

<p>Note that this API transmits sensitive personal data about a traveler's journey. We work hard to ensure that we comply with all the legal requirements this entails, and as an application owner, you need to do so too - we don't want you to get in trouble! This paragraph, or anything else in our documentation, does not constitute legal advice, it's just to give you an idea of some of the potential issues that you may encounter. Please check your legal obligations regarding the use of this data before implementing this API</p>

<p>In most countries, the data in the returned travel record is considered to be the property of the traveler. In order to ensure that you are acting on behalf of the traveler, we require you to provide the traveler's last name in addition to the record locator when you make a call to this API. You should ensure that you have consent from the traveler before retrieving this record, in some countries this is a legal requirement - please respect this appropriately.</p>

<p>Our data center is based in Europe, so there is a legal requirement that you to access this API over a secure connection. If you plan to store the information returned by this API, ensure you comply with storage requirements for European data, in addition to those of your local country. For example, there are strict requirements on the caching of retrieved travel records, so please ensure the cache control HTTP headers in the response are respected.</p>



```js
amadeus.travel_record.record_locator.get({
  "record_locator": "",
  "last_name": ""
}, context)
```

#### Input
* input `object`
  * record_locator **required** `string`: The Amadeus identifier of the given travel record. Usually printed at the top of an itinerary or boarding pass.
  * last_name **required** `string`: The last name of any traveler in this record, as written on their identification used for travel. This is required to ensure that applications retrieving the record are acting on behalf of the customer.
  * env `string`: Indicates the Amadeus system from which this record should be retrieved.

#### Output
* output [TravelRecordResponse](#travelrecordresponse)



## Definitions

### Address
* Address `object`: An object to describe a postal address.
  * city **required** `string`: The town or city in which place is located.
  * country **required** `string`: The <a href="http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2">ISO 3166-1 alpha-2 country code</a> country code of this address.
  * line1 **required** `string`: The first line of this place's address. Generally represents the basic street address.
  * postal_code `string`: The postal or zip code of this address.
  * region `string`: The state or region code in which the place is located.

### AffiliateFlightSearchPrice
* AffiliateFlightSearchPrice `object`
  * currency **required** `string`: The <a href="https://en.wikipedia.org/wiki/ISO_4217">currency</a> code applicable to this fare
  * price_per_adult **required** [Fare](#fare)
  * price_per_child [Fare](#fare)
  * price_per_infant [Fare](#fare)
  * restrictions **required** [FareRestrictions](#farerestrictions)
  * total_price **required** `string`: The total price for all the requested passengers for this flight

### AffiliatePayout
* AffiliatePayout `object`
  * CPA [Amount](#amount)
  * CPC [Amount](#amount)
  * CPS [Amount](#amount)

### AffiliateSearchMeta
* AffiliateSearchMeta `object`
  * carriers **required** [CarrierMeta](#carriermeta)

### AffiliateSearchResponse
* AffiliateSearchResponse `object`
  * meta **required** [AffiliateSearchMeta](#affiliatesearchmeta)
  * results `array`
    * items [AffiliateSearchResult](#affiliatesearchresult)

### AffiliateSearchResult
* AffiliateSearchResult `object`
  * airline **required** `string`: The 2 character alphanumeric <a href="https://en.wikipedia.org/wiki/Airline_codes">IATA airline code</a> of the airline that is selling this result
  * deep_link **required** `string`: A link to the page from which this result can be purchased from the affiliate
  * fare **required** [AffiliateFlightSearchPrice](#affiliateflightsearchprice)
  * inbound [FlightSearchBound](#flightsearchbound)
  * outbound **required** [FlightSearchBound](#flightsearchbound)
  * payout **required** [AffiliatePayout](#affiliatepayout)

### Airport
* Airport `object`
  * airport **required** `string`: The 3 character <a href="https://en.wikipedia.org/wiki/International_Air_Transport_Association_airport_code">IATA airport code</a> of the airport in question for this flight
  * terminal `string`: The terminal identifier at which this flight will arrive or depart in the given airport

### AirportAutocompleteResponse
* AirportAutocompleteResponse `object`
  * label **required** `string`: The name of this airport, in UTF-8 format, prefixed with the name of the city if it is not already incorporated in the name of the airport, and appended with the location's <a href="https://en.wikipedia.org/wiki/International_Air_Transport_Association_airport_code">IATA code</a> (as in value), enclosed in square brackets.
  * value **required** `string`: The 3 letter IATA location code of the given city or airport. You can use this as an input parameter for a flight low-fare or inspiration search.

### AirportInformation
* AirportInformation `object`
  * aircraft_movements `integer`: The annual number of aircraft movements at that airport.
  * city_code **required** `string`: The three letter <a href="https://en.wikipedia.org/wiki/International_Air_Transport_Association_airport_code">IATA code</a> of the city of the city in which this airport is located.
  * city_name **required** `string`: The English name of the city in which this airport is located
  * code **required** `string`: The 3 letter IATA airport code of this given airport. You can use this as an input parameter for a low-fare flight search, to get more specific results than the city code, but inspiration search works best using the city code.
  * country **required** `string`: The <a href="http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2">ISO 3166-1 alpha-2 country code</a> in which this city can be found.
  * location **required** [Geolocation](#geolocation)
  * name **required** `string`: The name of this airport, in UTF-8 format
  * state `string`: The state code of this city, if applicable
  * timezone **required** `string`: The <a href="http://en.wikipedia.org/wiki/List_of_tz_database_time_zones">Olson format</a> name of the timezone in which this airport is located

### Amenity
* Amenity `object`
  * amenity `string`: <a href="hotels-api-supported-amenities-filter">The amenity code</a>
  * description `string`: The decoded text description for this amenity code, where available.
  * ota_code `string`: The <a href="http://www.opentravel.org/">Open Travel Alliance</a> <a href="ota-hotel-amenity-code-table">Hotel Amenities Code</a> for this amenity.

### Amount
* Amount `object`: A monetary amount with a price and a currency
  * amount **required** `string`: Total amount in the given currency, formatted appropriately. For example&colon; 194.99
  * currency **required** `string`: <a href="http://en.wikipedia.org/wiki/ISO_4217">ISO 4217</a> currency code.

### Award
* Award `object`
  * provider **required** `string`: The organization that issued the award. For example&colon;. Local Star Rating, AAA.
  * rating **required** `string`: The level of the award that was awarded on the provider's scale. For example&colon; 4 or RECOMMENDED.

### CarReservation
* CarReservation `object`
  * booking_info [CarReservationBookingInfo](#carreservationbookinginfo)
  * car **required** [Vehicle](#vehicle)
  * drop_off **required** `string`: Date at which the car rental will end and the car will be returned to the rental location. <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO 8601</a> date format yyyy-MM-ddTHH.
  * id **required** `string`: Uniquely identifies this car rental reservation in this travel record. This ID is persistent, and remains the same for the lifetime of the travel record.
  * origin **required** `string`: This car rental company office location ID. If this is an airport location, this will be the airport's <a href="https://en.wikipedia.org/wiki/International_Air_Transport_Association_airport_code">IATA code</a>. Otherwise, this is a custom value provided by the car rental provider.
  * pick_up **required** `string`: Date on which the car rental will be collected from the car rental location. <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO 8601</a> date format yyyy-MM-ddTHH.
  * provider **required** [Company](#company)
  * traveler_ids `array`: Traveler identifiers to indicate the travelers to whom this car rental applies. Generally, only drivers of the vehicle will be marked in this array.
    * items `string`

### CarReservationBookingInfo
* CarReservationBookingInfo `object`
  * reservation_code **required** `string`: The identifier of this reservation in the car rental provider's system. This should be provided at the rental office to identify your reservation.
  * status **required** `string`: An enumeration to represent the reservation status for this car rental. For example&colon; CONFIRMED, CANCELLED, REQUESTED, REJECTED, PENDING_CANCELLATION, PENDING_CONFIRMATION.

### CarSearchResponse
* CarSearchResponse `object`
  * results `array`
    * items [CarSearchResult](#carsearchresult)

### CarSearchResult
* CarSearchResult `object`
  * airport `string`: The exact quality of this parameter depends on the provider but it's usually quite accurate.
  * cars `array`: Further details about each of the vehicles offered by this car rental provider.
    * items [Vehicle](#vehicle)
  * location [Geolocation](#geolocation)
  * provider **required** [Company](#company)

### CarrierInfo
* CarrierInfo `object`
  * logos **required** [Logos](#logos)
  * name **required** `string`: Display name of the airline

### CarrierMeta
* CarrierMeta `object`

### CityInformation
* CityInformation `object`
  * code **required** `string`: The <a href="https://en.wikipedia.org/wiki/International_Air_Transport_Association_airport_code">IATA code</a> of this city. If you intend to make a flight search from the output of this call, I recommend using this as your input parameter as it generally gives the best results.
  * country **required** `string`: The <a href="http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2">ISO 3166-1 alpha-2 country code</a> in which this city can be found.
  * currency `string`: The ISO-4217 currency code of the official local currency at this location
  * geonames_ID **required** `string`: The ID of this city in the open-sourced Geonames DB
  * location **required** [Geolocation](#geolocation)
  * name **required** `string`: The name of this city, in English
  * state `string`: The state code of this city, if applicable
  * timezone **required** `string`: The <a href="http://en.wikipedia.org/wiki/List_of_tz_database_time_zones">Olson format</a> name of the timezone in which this city is located

### Company
* Company `object`
  * company_code **required** `string`: The Amadeus 2-character company code of this provider.
  * company_name **required** `string`: The long name of the provider corresponding to the above code.

### Contact
* Contact `object`
  * detail **required** `string`: How that contact should be used, eg. a phone number
  * purpose `string`: The reason or channel of that contact method. For example&colon; HOME, EMERGENCY, MOBILE.
  * type **required** `string`: The method of contact, such as phone or fax.

### Error
* Error `object`
  * message **required** `string`
  * more_info `string`
  * status **required** `integer`

### ExtensiveTrainSearchResponse
* ExtensiveTrainSearchResponse `object`
  * results `array`
    * items [ExtensiveTrainSearchResult](#extensivetrainsearchresult)

### ExtensiveTrainSearchResult
* ExtensiveTrainSearchResult `object`
  * destination **required** [Station](#station)
  * itineraries **required** `array`: Routes from the origin to the destination.
    * items [TrainSearchItinerary](#trainsearchitinerary)
  * origin **required** [Station](#station)

### ExtremeSearchResponse
* ExtremeSearchResponse `object`
  * currency **required** `string`: <a href="http://en.wikipedia.org/wiki/ISO_4217">ISO 4217</a> currency code.
  * origin **required** `string`: <a href="https://en.wikipedia.org/wiki/International_Air_Transport_Association_airport_code">IATA code</a>
  * results **required** `array`
    * items [ExtremeSearchResult](#extremesearchresult)

### ExtremeSearchResult
* ExtremeSearchResult `object`
  * airline `string`: The 2 character alphanumeric <a href="https://en.wikipedia.org/wiki/Airline_codes">IATA airline code</a> of the airline that is responsible for selling the traveler this flight - also known as the Validating Carrier. Airlines are specified using <a href="https://en.wikipedia.org/wiki/Airline_codes"><a href="https://en.wikipedia.org/wiki/Airline_codes">IATA airline code</a>s</a>
  * departure_date `string`: The date departure at the origin, in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO 8601</a> date format yyyy-MM-dd, to go to the above destination
  * destination **required** `string`: The <a href="https://en.wikipedia.org/wiki/International_Air_Transport_Association_airport_code">IATA code</a> of the city or airport to which the traveler may go, from the provided origin
  * price **required** `string`: The minimum total price for one adult passenger for a round trip from the origin to the destination and back. Always a string, formatted correctly for the provided currency
  * return_date `string`: The date at which the flight from the destination to the origin will depart from the destination. The date is in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO 8601</a> date format yyyy-MM-dd, in the local date of the origin. This field will not be present in the response if the one-way request parameter is set to true.

### Fare
* Fare `object`
  * tax **required** `string`: The tax applied per-passenger, for this passenger type, for this itinerary. Some of this tax may be refundable in the event of cancellation.
  * total_fare **required** `string`: The total price, including taxes per-passenger, for this passenger type, for this itinerary. Always a string, formatted correctly for the given currency

### FareRestrictions
* FareRestrictions `object`
  * change_penalties **required** `boolean`: Indicates whether this fare allows the itinerary to be changed under some circumstances. Note that a change fee or penalty may apply
  * refundable **required** `boolean`: Indicates whether this fare is refundable under some circumstances. Note that a refund charge or penalty may apply

### Fees
* Fees `object`
  * creditcard_fees `string`: The cost of any fees for common credit cards, such as Visa or Mastercard, in addition to the total price
  * service_fees `string`: The cost of any required service fees in addition to the total price

### FlightReservationBookingInfo
* FlightReservationBookingInfo `object`
  * airline_record_locator **required** `string`: 6 character identifier of this travel record on the airline's system. May be the same as the global record locator.
  * booking_code **required** `string`: The Reservation Booking Designator code that determines the quality and terms of the flight offered for the given price. A single letter from A..Z
  * status **required** `string`: An enumeration to represent the reservation status for this seat on this flight. For example&colon; CONFIRMED, CANCELLED, RESCHEDULED, FLIGHT_CANCELLED, WAITLISTED.
  * travel_class **required** `string`: The cabin class offered on this flight. An enumeration that will read either ECONOMY, PREMIUM_ECONOMY, BUSINESS or FIRST

### FlightReservationBound
* FlightReservationBound `object`
  * flights **required** `array`: The individual flights that make up this itinerary. These flights are presented in the order required to fly from the origin to the destination, and the array of flights represents a connection.
    * items [FlightReservationSegment](#flightreservationsegment)

### FlightReservationSegment
* FlightReservationSegment `object`
  * arrives_at **required** `string`: Date and time of departure at the destination, in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO 8601</a>  date format yyyy-MM-ddTHH:mm in the local time at the destination airport
  * booking_info **required** [FlightReservationBookingInfo](#flightreservationbookinginfo)
  * departs_at **required** `string`: Date and time of departure at the origin, in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO 8601</a>  date format yyyy-MM-ddTHH:mm in the local time at the origin airport
  * destination **required** [Airport](#airport)
  * flight_number **required** `string`: The identifier that the airline uses for this flight route. This is most commonly - but not always - a number. When combined with the airline and date, it identifies an individual aircraft's flight
  * id **required** `string`: Uniquely identifies this flight in this travel record. This ID is persistent, and remains the same for the lifetime of the travel record.
  * marketing_airline **required** `string`: The 2 character alphanumeric <a href="https://en.wikipedia.org/wiki/Airline_codes">IATA airline code</a> of the airline that is responsible for the traveller this flight
  * operating_airline **required** `string`: The 2 character alphanumeric <a href="https://en.wikipedia.org/wiki/Airline_codes">IATA airline code</a> of the airline that is providing the aircraft for this flight. Note that in the USA, if the marketing and operating carrier are different, you are legally required to display this in your application.
  * origin **required** [Airport](#airport)
  * traveler_ids **required** `array`: Traveler identifiers to indicate the travelers to whom this ticket applies.
    * items `string`

### FlightSearchBookingInfo
* FlightSearchBookingInfo `object`
  * booking_code **required** `string`: The Reservation Booking Designator code that determines the quality and terms of the flight offered for the given price. A single letter from A..Z
  * cabin_code `string`: A single character encoding of the travel_class, generally only available on responses from affiliates.
  * fare_basis `string`: See https://en.wikipedia.org/wiki/Fare_basis_code for the fare being offered.
  * fare_family `string`: Enumeration of the type of fare which this airline is providing, eg. VALUE. This is generally only available for affiliate responses.
  * seats_remaining **required** `string`: The minimum number of seats that are still available for this price at the time of search. If the value is a 4 or above, there are often more than this number of seats still available.
  * travel_class **required** `string`: The cabin class offered on this flight. An enumeration that will read either ECONOMY, PREMIUM_ECONOMY, BUSINESS or FIRST

### FlightSearchBound
* FlightSearchBound `object`
  * duration `string`: The duration of this bound, including layover time, expressed in the format hh:mm
  * flights **required** `array`
    * items [FlightSearchSegment](#flightsearchsegment)

### FlightSearchItinerary
* FlightSearchItinerary `object`
  * inbound [FlightSearchBound](#flightsearchbound)
  * outbound **required** [FlightSearchBound](#flightsearchbound)

### FlightSearchPrice
* FlightSearchPrice `object`
  * price_per_adult **required** [Fare](#fare)
  * price_per_child [Fare](#fare)
  * price_per_infant [Fare](#fare)
  * restrictions **required** [FareRestrictions](#farerestrictions)
  * total_price **required** `string`: The total price for all the requested passengers for this flight

### FlightSearchSegment
* FlightSearchSegment `object`
  * aircraft `string`: The <a href="http://www.jacanaent.com/JacTechLib/07Aviation/AircraftTypeCodes.txt">IATA aircraft type designator</a> of aircraft that will be used for this flight
  * arrives_at **required** `string`: Date and time of departure at the destination, in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO 8601</a>  date format yyyy-MM-ddTHH:mm in the local time at the destination airport
  * booking_info **required** [FlightSearchBookingInfo](#flightsearchbookinginfo)
  * departs_at **required** `string`: Date and time of departure at the origin, in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO 8601</a>  date format yyyy-MM-ddTHH:mm in the local time at the origin airport
  * destination **required** [Airport](#airport)
  * flight_number **required** `string`: The identifier that the airline uses for this flight route. This is most commonly - but not always - a number. When combined with the airline and date, it identifies an individual aircraft's flight
  * marketing_airline **required** `string`: The 2 character alphanumeric <a href="https://en.wikipedia.org/wiki/Airline_codes">IATA airline code</a> of the airline that is responsible for the traveller this flight
  * operating_airline **required** `string`: The 2 character alphanumeric <a href="https://en.wikipedia.org/wiki/Airline_codes">IATA airline code</a> of the airline that is providing the aircraft for this flight. Note that in the USA, if the marketing and operating carrier are different, you are legally required to display this in your application.
  * origin **required** [Airport](#airport)

### FlightTicket
* FlightTicket `object`: The flight itineraries with a ticket or transitional stored ticket (TST) in this reservation, and their prices.
  * flight_bounds **required** `array`: The flight itinerary for this ticket.
    * items [FlightReservationBound](#flightreservationbound)
  * id **required** `string`: Uniquely identifies this ticket in this travel record. This ID is persistent, and remains the same for the lifetime of the travel record.
  * price **required** [Amount](#amount)
  * traveler_ids **required** `array`: Traveler identifiers to indicate the travelers to whom this ticket applies.
    * items `string`

### FlightTrafficSearchResult
* FlightTrafficSearchResult `object`
  * destination **required** `string`: The <a href="https://en.wikipedia.org/wiki/International_Air_Transport_Association_airport_code">IATA code</a> of the city or airport to which the traveler may go, from the provided origin
  * flights `integer`: Number of flights from origin to destination during the search period provided. This field is deprecated.
  * period **required** `string`: The date period, in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO 8601</a> date format YYYY-MM or YYYY
  * travelers **required** `integer`: Number of passengers from origin to destination during the search period provided

### FrequentTravelerCard
* FrequentTravelerCard `object`
  * card_number **required** `string`: The identifying number (or string) marked on the card. For example&colon; 12345678.
  * company_code **required** `string`: The identifying code of the issuer, within the context of its type. For example&colon; BA (and if the issuer type is AIRLINE, this indicates BA=British Airways).
  * issuer_type **required** `string`: The type of organization that issued the card. This is an enumeration, possible values are AIRLINE, HOTEL_CHAIN, RENTAL_CAR_PROVIDER, RAILWAY.

### Geolocation
* Geolocation `object`: An object to describe the coordinates of a map location
  * google_maps_link `string`: For YapQ APIs only  - a link to a google map rendering of this location.
  * latitude **required** `number`: The north-south coordinate of this location, in decimal degrees, between -90 and 90
  * longitude **required** `number`: The east-west coordinate of this location, in decimal degrees, between -180 and 180

### HotelPropertyResponse
* HotelPropertyResponse `object`
  * address [Address](#address)
  * amenities `array`: An array of amenity objects to the user what facilities this hotel might provide, such as a pool or parking. 
    * items [Amenity](#amenity)
  * awards `array`: An array of hotel award objects to give the user an expectation of the service quality at this hotel. This can be used to indicate, for example, the star rating of a hotel. If this array is empty, it does not necessarily mean that the hotel has no awards, it could simply mean that they didn't tell us about them!
    * items [Award](#award)
  * contacts `array`: An array of contact objects to tell the user how to contact the hotel. Typically includes a phone and fax number
    * items [Contact](#contact)
  * images `array`: A selection of image objects, showing pictures of the hotel building, the entrance or some rooms, to give an indication of what to expect at this hotel. Note that redistribution of images outside Amadeus products requires licensing from our image providers: Leonardo and Ice Portal. Thus image links are returned for whitelisted Amadeus users only.
    * items [Image](#image)
  * location **required** [Geolocation](#geolocation)
  * min_daily_rate **required** [Amount](#amount)
  * more_rooms_at_this_hotel [Link](#link)
  * property_code **required** `string`: The 8 character property code of this given hotel. The first 2 characters of this code are the chain code that can be specified in the input. The remaining elements are proprietary to each hotel chain.
  * property_name **required** `string`: The name of this hotel.
  * rooms `array`: Information on currently available rooms at this hotel.
    * items [HotelRoom](#hotelroom)
  * total_price **required** [Amount](#amount)

### HotelReservation
* HotelReservation `object`
  * booking_info **required** [HotelReservationBookingInfo](#hotelreservationbookinginfo)
  * check_in **required** `string`: Date on which the guest will begin their stay in the hotel, in the <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO 8601</a> date format yyyy-MM-dd.
  * check_out **required** `string`: Date on which the guest will end their stay in the hotel, in the <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO 8601</a> date format yyyy-MM-dd.
  * id **required** `string`: Uniquely identifies this hotel room reservation in this travel record. This ID is persistent, and remains the same for the lifetime of the travel record.
  * property_code **required** `string`: The 8 character property code of this given hotel. The first 2 characters of this code are the chain code that can be specified in the input. The remaining elements are proprietary to each hotel chain.
  * property_name **required** `string`: The name of this hotel.
  * total_price [Amount](#amount)
  * traveler_ids **required** `array`: Traveler identifiers to indicate the travelers to whom this hotel room reservation applies. Generally all non-infant room occupants will be marked in this array.
    * items `string`

### HotelReservationBookingInfo
* HotelReservationBookingInfo `object`
  * reservation_code **required** `string`: The identifier of this reservation in the hotel chain's system. This should be provided at the check-in desk to identify your reservation.
  * status **required** `string`: An enumeration to represent the reservation status for this hotel reservation. For example&colon; CONFIRMED, CANCELLED, REQUESTED.

### HotelRoom
* HotelRoom `object`
  * booking_code **required** `string`: The booking code identifies a product at the hotel. It can be used to book a room.
  * descriptions `array`: An array of description strings describing room and rate types features
    * items `string`
  * rate_plan_code `string`: A 3 letter code to designate different rates base on traveler type.
  * rate_type_code `string`: The unique rate code used by the hotel chain to price this room's rate
  * rates `array`: The total price of staying in this room from the given check-in date to the given check-out date
    * items [PeriodRate](#periodrate)
  * room_type_code `string`: A 3-letter code to identify a specific room type.
  * room_type_info [RoomInfo](#roominfo)
  * total_amount [Amount](#amount)

### HotelSearchResponse
* HotelSearchResponse `object`
  * results `array`
    * items [HotelPropertyResponse](#hotelpropertyresponse)

### Image
* Image `object`
  * category `string`: The enumerated category of this image type. Common values include EXTERIOR, GUEST_ROOM, SUITE, LOBBY, RESTAURANT, LOUNGE, LOGO, MAP, MISC and UNKNOWN.
  * height `integer`: The pixel height of the image at the provided URL.
  * url **required** `string`: The URL of the hotel image of this given category and size, for display.
  * width `integer`: The pixel width of the image at the provided URL.

### ImageSize
* ImageSize `object`: An image size selector used in the YapQ API response. The size should correspond the the image_size parameter used during input
  * hd [Image](#image)
  * large [Image](#image)
  * medium [Image](#image)
  * small [Image](#image)

### Infant
* Infant `object`
  * date_of_birth `string`: An optional <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO 8601</a> date indicating the birth date of the infant, as provided by the agent. For example&colon; 1972-02-19.
  * first_name `string`: The first name of the infant, as entered by the agent, in upper-case. May include middle names, initials or prefixes.
  * last_name `string`: The last name of the infant, as entered by the agent, in upper-case. If no value is provided, the last name of the infant can generally be assumed to be the same as that of the traveler which whom they are associated.

### Link
* Link `object`
  * href **required** `string`: Hyperlink reference URL to the target

### LocationResponse
* LocationResponse `object`
  * airports `array`: Information for any IATA airport located in the provided <a href="https://en.wikipedia.org/wiki/International_Air_Transport_Association_airport_code">IATA code</a> of the city or which corresponds to the provided code
    * items [AirportInformation](#airportinformation)
  * city [CityInformation](#cityinformation)

### Logos
* Logos `object`
  * medium `string`: URL to logo of resolution 60x60px
  * small `string`: URL to logo of resolution 27x27px

### LowFareSearchResponse
* LowFareSearchResponse `object`
  * currency **required** `string`: <a href="http://en.wikipedia.org/wiki/ISO_4217">ISO 4217</a> currency code.
  * results `array`
    * items [LowFareSearchResult](#lowfaresearchresult)

### LowFareSearchResult
* LowFareSearchResult `object`
  * fare **required** [FlightSearchPrice](#flightsearchprice)
  * itineraries `array`
    * items [FlightSearchItinerary](#flightsearchitinerary)

### Message
* Message `object`
  * message **required** `string`: A free text message that provides more information.
  * severity **required** `string`: An indicator of the importance of this message as part of the flow. May be ERROR or INFO.
  * type **required** `string`: An indicator of the source or type of message that has been generated. May be USER or SYSTEM.

### NearestAirport
* NearestAirport `object`
  * aircraft_movements `integer`: The annual number of aircraft movements at that airport.
  * airport **required** `string`: The 3 letter IATA airport code of this given airport. You can use this as an input parameter for a low-fare flight search, to get more specific results than the city code, but inspiration search works best using the city code.
  * airport_name **required** `string`: The name of this airport, in UTF-8 format
  * city **required** `string`: The three letter <a href="https://en.wikipedia.org/wiki/International_Air_Transport_Association_airport_code">IATA code</a> of the city of the city in which this airport is located.
  * city_name **required** `string`: The English name of the city in which this airport is located
  * distance **required** `number`: The distance in km from the point specified in the query, to this location
  * location **required** [Geolocation](#geolocation)
  * state `string`: The state code of this city, if applicable
  * timezone **required** `string`: The <a href="http://en.wikipedia.org/wiki/List_of_tz_database_time_zones">Olson format</a> name of the timezone in which this airport is located

### OtherReservation
* OtherReservation `object`
  * booking_info **required** [OtherReservationBookingInfo](#otherreservationbookinginfo)
  * date **required** `string`: Date on which this other reservation will begin, in the <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO 8601</a> date format yyyy-MM-dd.
  * description `string`: A free-text description of this reservation, that will inform you of its functional meaning.
  * id **required** `string`: Uniquely identifies this other reservation in this travel record. This ID is persistent, and remains the same for the lifetime of the travel record.
  * location **required** `string`: A 3 letter <a href="https://en.wikipedia.org/wiki/International_Air_Transport_Association_airport_code">IATA code</a> that identifies where this other reservation will occur.
  * traveler_ids **required** `array`: Traveler identifiers to indicate the travelers to whom this reservation applies.
    * items `string`

### OtherReservationBookingInfo
* OtherReservationBookingInfo `object`
  * status **required** `string`: An enumeration to represent the reservation status for this hotel reservation. For example&colon; CONFIRMED, CANCELLED, REQUESTED, REJECTED, PENDING_CANCELLATION, PENDING_CONFIRMATION.

### PeriodRate
* PeriodRate `object`
  * currency **required** `string`: <a href="http://en.wikipedia.org/wiki/ISO_4217">ISO 4217</a> currency code of this rate.
  * end_date **required** `string`: The date on which this rate ends, in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO 8601</a> date format yyyy-MM-dd.
  * price **required** `number`: Total amount in the given currency per day of this rate, formatted appropriately. For example&colon; 194.99.
  * start_date **required** `string`: The start date of this rate, in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO 8601</a> date format yyyy-MM-dd.

### PointOfInterestCity
* PointOfInterestCity `object`
  * geoname_id `string`: The Geonames ID of the location that was searched for
  * location **required** [Geolocation](#geolocation)
  * name **required** `string`: The name of the location that was searched for
  * total_points_of_interest **required** `integer`: The total number of points_of_interest that YapQ has indexed for this city

### PointOfInterestDetails
* PointOfInterestDetails `object`
  * description **required** `string`: A paragraph describing this point of interest
  * short_description **required** `string`: A summary of the given point
  * wiki_page_link **required** `string`: A link to this point of interest&quot;s wikipedia page

### PointOfInterestResult
* PointOfInterestResult `object`
  * categories **required** `array`: Array of descriptions indicating what type of point of interest this is. You can filter the results to include only certain categories of point of interest using the category input parameter.
    * items `string`
  * contextual_images `array`: Images taken at this point of interest. Note that these images might have nothing to do with the point itself, particularly if you have enabled the social_media parameter
    * items [ImageSize](#imagesize)
  * details [PointOfInterestDetails](#pointofinterestdetails)
  * geoname_id `integer`: The GeonamesID of this point of interest, if available
  * grades **required** `object`: Result availble grades.
    * city_grade `integer`: The ranking of this point of interest compared to other points in this city. 1 is the highest rated.
    * yapq_grade `integer`: Main YAPQ grade. A grade out of 5 for this point, rated against all points in the world and normalized among selected group of points. 5 is best, 0 is worst.
  * location **required** [Geolocation](#geolocation)
  * main_image **required** `string`: A link to an image of the given location
  * title **required** `string`: Display name of a given point of interest
  * walk_time `number`: Time in minutes that it takes to walk from the searched coordinates to this Point of Interest

### PointsOfInterestResponse
* PointsOfInterestResponse `object`
  * current_city [PointOfInterestCity](#pointofinterestcity)
  * points_of_interest **required** `array`
    * items [PointOfInterestResult](#pointofinterestresult)

### RailService
* RailService `object`
  * destination_station_id **required** `string`: ID of the destination rail station.
  * services **required** `array`: An array of departure times at which trains depart from the origin station to this destination station. Times are in the ISO 8601 YYYY-MM-DDTHH:mm format.
    * items `string`

### RailStationAutocompleteResponse
* RailStationAutocompleteResponse `object`
  * label **required** `string`: The full name of the station, in UTF-8 format.
  * value **required** `string`: The unique identifier of the station. You can use this as an input parameter for a rail search.

### RailStationResponse
* RailStationResponse `object`
  * country **required** `string`: The <a href="http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2">ISO 3166-1 alpha-2 country code</a> in which this station can be found.
  * id **required** `string`: The ID of this station, as provided in the request
  * location **required** [Geolocation](#geolocation)
  * name **required** `string`: The name of this station.
  * short_name **required** `string`: The shortened name of this station (20 characters max) which may be used in certain cases.
  * traffic **required** `string`: An indication of the level of Intercity traffic passing through this station.
  * type **required** `string`: The type of code to which this station refers. Some codes represent agglomeration of multiple stations, whereas others represent an individual station. Possible values are AGGLOMERATION and STATION.

### Rate
* Rate `object`
  * price **required** [Amount](#amount)
  * type **required** `string`: The type or applicability period of rate being applied. For example&colon; DAILY, WEEKLY, WEEKEND.

### Reservation
* Reservation `object`
  * cars `array`: The rental cars reserved.
    * items [CarReservation](#carreservation)
  * flight_tickets [FlightTicket](#flightticket)
  * hotels `array`: The hotel room bookings in this reservation.
    * items [HotelReservation](#hotelreservation)
  * others `array`: Free text information to represent other travel items that may be considered part of the travel itinerary in this reservation.
    * items [OtherReservation](#otherreservation)
  * unticketed_flights `array`: The flight itineraries in this reservation that have not yet been ticketed or priced.
    * items [FlightReservationBound](#flightreservationbound)

### RestrictedRate
* RestrictedRate `object`
  * rate_code **required** `string`: The unique identifier of this rate.
  * rate_name **required** `string`: The name used by the company to describe this rate.
  * restrictions **required** `string`: An enumeration of the type of restrictions associated with this rate.

### RoomInfo
* RoomInfo `object`: More detailed structured information about the room.
  * bed_type **required** `string`: The type of bed or beds in the room, such as Double, or King.
  * number_of_beds **required** `string`: The number of beds in the room. May be an integer or a free-text dessciption, as provided by the hotel
  * room_type **required** `string`: Free-text indicating the type of room - such Smoking, No Smoking, Suite, etc..

### Station
* Station `object`
  * station_code **required** `string`: ID of this rail station
  * station_name **required** `string`: Full name of this rail station.

### TopDestinationsSearchResponse
* TopDestinationsSearchResponse `object`
  * origin **required** `string`: <a href="https://en.wikipedia.org/wiki/International_Air_Transport_Association_airport_code">IATA code</a>
  * period **required** `string`: The date period, in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO 8601</a> date format YYYY-MM or YYYY
  * results **required** `array`
    * items [TopDestinationsSearchResult](#topdestinationssearchresult)

### TopDestinationsSearchResult
* TopDestinationsSearchResult `object`
  * destination **required** `string`: The <a href="https://en.wikipedia.org/wiki/International_Air_Transport_Association_airport_code">IATA code</a> of the city or airport to which the traveler may go, from the provided origin
  * flights `integer`: Number of flights from origin to destination during the search period provided. This field is deprecated.
  * travelers **required** `integer`: Number of passengers from origin to destination during the search period provided

### TopSearchesSearchResponse
* TopSearchesSearchResponse `object`
  * destination **required** `string`: <a href="https://en.wikipedia.org/wiki/International_Air_Transport_Association_airport_code">IATA code</a>
  * market **required** `string`: Country code
  * origin **required** `string`: <a href="https://en.wikipedia.org/wiki/International_Air_Transport_Association_airport_code">IATA code</a>
  * period **required** `string`: The date period, in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO 8601</a> date format YYYY-MM or YYYY
  * results **required** `array`
    * items [TopSearchesSearchResult](#topsearchessearchresult)

### TopSearchesSearchResult
* TopSearchesSearchResult `object`
  * destination **required** `string`: The <a href="https://en.wikipedia.org/wiki/International_Air_Transport_Association_airport_code">IATA code</a> of the city or airport to which the traveler may go, from the provided origin
  * searches **required** `integer`: Average number of daily searches for the destination during the search period provided
  * searches_prior_year **required** `integer`: Prior year average number of daily searches for the destination during the search period provided

### TrainScheduleSearchResponse
* TrainScheduleSearchResponse `object`
  * results `array`
    * items [TrainScheduleSearchResult](#trainschedulesearchresult)

### TrainScheduleSearchResult
* TrainScheduleSearchResult `object`
  * date **required** `string`: The search date provided in the input.
  * origin_station_id **required** `string`: Station ID of the origin station for this search.
  * services **required** `array`: Array to describe service to the destinations.
    * items [RailService](#railservice)

### TrainSearchItinerary
* TrainSearchItinerary `object`
  * trains **required** `array`: The array of trains that will be required to complete the given itinerary. Since the cache currently only contains direct itineraries, there will be only one object in this array.
    * items [TrainSearchSegment](#trainsearchsegment)

### TrainSearchPricing
* TrainSearchPricing `object`
  * accomodation **required** `string`: A standard enumeration of the mode in which the passenger is accommodated. For example&colon; SEAT, BERTH, CABIN, CARGO, UNKNOWN.
  * booking_code **required** `string`: A code the identifies the type of booking class being used.
  * rate **required** [RestrictedRate](#restrictedrate)
  * service_class **required** `string`: A standard enumeration of the type of seat, bed or service the passenger can expect.
  * total_price **required** [Amount](#amount)

### TrainSearchSegment
* TrainSearchSegment `object`
  * arrival_station **required** [Airport](#airport)
  * arrives_at **required** `string`: The <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO 8601</a> date-time of the train's arrival in the local time zone of the arrival station, in the format YYYY-MM-DDTHH:mm.
  * departs_at **required** `string`: The <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO 8601</a> date-time of the train's departure in the local time zone of the departure station, in the format YYYY-MM-DDTHH:mm.
  * departure_station **required** [Station](#station)
  * marketing_company **required** `string`: The name of the train company selling this train journey. This is the name you should see printed on your ticket.
  * operating_company **required** `string`: The name of the train company operating this train journey. This is the name you should see written on the train.
  * prices **required** `array`: Possible pricing for this train journey.
    * items [TrainSearchPricing](#trainsearchpricing)
  * train_number **required** `string`: The identifying number of this train service. Usually the marketing company will only operate on train per day with this train number.
  * train_type `string`: The type of train that you may expect for this journey. For example&colon; InterCity, Regional...

### TravelRecordHeader
* TravelRecordHeader `object`
  * creation_office_id **required** `string`: 9 character Amadeus office identifier of the travel agency that created this travel record. An office ID may be considered as equivalent to a <a href="https://en.wikipedia.org/wiki/Pseudo_city_code">PCC</a> in other reservation systems.
  * owner_office_id **required** `string`: 9 character Amadeus office identifier of the travel agency that owns and manages this travel record.

### TravelRecordResponse
* TravelRecordResponse `object`
  * header [TravelRecordHeader](#travelrecordheader)
  * messages `array`: Functional or technical messages associated with the retrieval of this travel record.
    * items [Message](#message)
  * record_locator **required** `string`: 6 character identifier of this travel record on the Amadeus system.
  * reservation [Reservation](#reservation)
  * travelers `array`: Information about each traveler who may be included as part of this travel record.
    * items [Traveler](#traveler)

### Traveler
* Traveler `object`
  * contacts `array`: Details on how to contact this traveler. At least one traveler in a travel-record will have a contact element.
    * items [Contact](#contact)
  * date_of_birth `string`: An <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO 8601</a> date indicating the birth date of the traveler, as provided by the agent. For example&colon; 1972-02-19.
  * first_name **required** `string`: The first name of the passenger, as entered by the agent, in upper-case. May include middle names, initials or prefixes. The total combined length of the first name and last name must be between 2 and 57 characters. For example&colon; ALEXANDRA, JOSE-ANTONIO MR, ELAINE T DR.
  * frequent_traveler_cards `array`: Information regarding loyalty cards that the traveler would like to use to accrue benefits as part of this travel record. Where possible, the system will attempt to validate that the frequent traveler card is eligible for use in the context of this travel record.
    * items [FrequentTravelerCard](#frequenttravelercard)
  * id **required** `string`: Uniquely identifies this traveler in this travel record. This ID is persistent, and remains the same for the lifetime of the travel record.
  * infant [Infant](#infant)
  * last_name **required** `string`: The last name of the passenger, as entered by the agent, in upper-case. May include suffixes. For example&colon; THACKSTON, KING III, LU.
  * traveler_type **required** `string`: Enumeration of the type of traveler. May be ADULT or CHILD.

### Vehicle
* Vehicle `object`
  * estimated_total [Amount](#amount)
  * images `array`: An image to give an indication of what to expect when renting this vehicle.
    * items [Image](#image)
  * rates `array`: Rates that will be applied during the duration of the car rental requested. These rates are generally not inclusive of tax and are used by the car rental company to compute the total cost at the end of the rental period.
    * items [Rate](#rate)
  * vehicle_info **required** [VehicleInfo](#vehicleinfo)

### VehicleInfo
* VehicleInfo `object`
  * acriss_code **required** `string`: The 4 letter <a href="http://en.wikipedia.org/wiki/ACRISS_Car_Classification_Code">ACRISS code</a> that defines the properties of vehicle being rented.
  * air_conditioning `boolean`: The decoded ACRISS air_conditioning information, to let you know if this vehicle has air conditioning
  * category **required** `string`: The decoded ACRISS vehicle category (For example&colon; Economy, Luxury, Standard).
  * fuel `string`: The decoded ACRISS fuel type, to let you know if this vehicle is hybrid, electric, etc.
  * transmission `string`: The decoded ACRISS transmission type, to let you know if this vehicle is Automatic or Manual Transmission (stick-shift).
  * type `string`: The decoded ACRISS vehicle type, to let you know what kind of vehicle this is (For example&colon; Van, SUV, Pickup).


