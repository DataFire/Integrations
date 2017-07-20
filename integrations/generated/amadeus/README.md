# @datafire/amadeus

Client library for Amadeus Travel Innovation Sandbox

## Installation and Usage
```bash
npm install --save datafire @datafire/amadeus
```

```js
let datafire = require('datafire');
let amadeus = require('@datafire/amadeus').actions;

let account = {
  apikey: "",
}
let context = new datafire.Context({
  accounts: {
    amadeus: account,
  }
})

amadeus.airports.autocomplete.get({}, context).then(data => {
  console.log(data);
})
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

#### Parameters
* term (string) **required** - Search keyword that should represent the start of a word in a city or airport name.
* country (string) - Identified a country based of a <a href="https://en.wikipedia.org/wiki/ISO_3166-2#Current_codes">ISO 3166-1 alpha-2 code</a>
* all_airports (boolean) - Boolean to include or not all airports, no matter their traffic rank. False by default, to only display relevant airports.

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

#### Parameters
* latitude (string) **required** - Latitude location to be at the center of your search circle.
* longitude (string) **required** - Longitude location to be at the center of your search circle.

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

#### Parameters
* location (string) **required** - The <a href="https://en.wikipedia.org/wiki/International_Air_Transport_Association_airport_code">IATA code</a> of the airport at which the car will be rented.
* pick_up (string) **required** - Date on which the car rental will be collected from the car rental location. If no time is provided, a default value of 09:00 is used. Past availability is not displayed, future availability becomes less useful from about 6 months from the current date.
* drop_off (string) **required** - Date at which the car rental will end and the car will be returned to the rental location. If no time is provided, a default value of 17:00 is used.
* lang (string) - The preferred language of the content related to each car rental. Content will be returned in this language if available.
* currency (string) - The preferred <a href="https://en.wikipedia.org/wiki/ISO_4217">currency</a> to use when displaying prices and rates related to the car rental.
* provider (string) - 2 character car rental provider code. You may provide this parameter more than once. 
* rate_class (string) - Allows to request specific rate types.
* rate_plan (string) - Qualifies the rate depending on the pickup date and the rental duration.
* rate_filter (string) - Defines the types of rates to be returned in the output
* vehicle (array) - Specifies the type of vehicle to be rented. If selected, the results set will include only vehicles that match these type descriptions. The enumerations above correspond to ACRISS Pseudo Codes, and you may also provide an ACRISS pseudo code directly. If specifying a vehicle-specific ACRISS code, you may provide this parameter up to 3 times.

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

#### Parameters
* latitude (number) **required** - Latitude of the center of the search.
* longitude (number) **required** - Longitude of the center of the search.
* radius (integer) **required** - Radius around the center to look for hotels in kilometers (km).
* pick_up (string) **required** - Date on which the car rental will be collected from the car rental location. If no time is provided, a default value of 09:00 is used. Past availability is not displayed, future availability becomes less useful from about 6 months from the current date.
* drop_off (string) **required** - Date at which the car rental will end and the car will be returned to the rental location. If no time is provided, a default value of 17:00 is used.
* lang (string) - The preferred language of the content related to each car rental. Content will be returned in this language if available.
* currency (string) - The preferred <a href="https://en.wikipedia.org/wiki/ISO_4217">currency</a> to use when displaying prices and rates related to the car rental.
* provider (string) - 2 character car rental provider code. You may provide this parameter more than once. 
* rate_class (string) - Allows to request specific rate types.
* rate_plan (string) - Qualifies the rate depending on the pickup date and the rental duration.
* rate_filter (string) - Defines the types of rates to be returned in the output
* vehicle (array) - Specifies the type of vehicle to be rented. If selected, the results set will include only vehicles that match these type descriptions. The enumerations above correspond to ACRISS Pseudo Codes, and you may also provide an ACRISS pseudo code directly. If specifying a vehicle-specific ACRISS code, you may provide this parameter up to 3 times.

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

#### Parameters
* origin (string) **required** - City code from which the traveler will depart. See the location and airport interfaces for more information.
* destination (string) **required** - <a href="https://en.wikipedia.org/wiki/International_Air_Transport_Association_airport_code">IATA code</a> of the city to which the traveler is going
* departure_date (string) **required** - The date on which the traveler will depart from the origin to go to the destination. The maximum scope for a date range is 2 days, for a larger scope, use the Extensive Search! 
* return_date (string) - The date on which the traveler will depart from the destination to return to the origin. If this parameter is not specified, the search will find only one-way trips. If this, or the return_by parameter are specified, only return trips are found
* adults (integer) - The number of adult (age 12 and over) passengers traveling on this flight.
* children (integer) - The number of child (younger than age 12 on date of departure) passengers traveling on this flight who will each have their own separate seat
* infants (integer) - The number of infant (younger than age 2 on date of departure) passengers traveling on this flight. Infants travel in the lap of an adult passenger, and thus the number of infants must not exceed the number of adults.
* include_merchants (array) - If specified, all results will include at least one flight where one or more of these airlines is the marketing carrier. Airlines are specified using <a href="https://en.wikipedia.org/wiki/Airline_codes"><a href="https://en.wikipedia.org/wiki/Airline_codes">IATA airline code</a>s</a>
* exclude_merchants (array) - If specified, no results will include any flights where any of these airlines is the marketing carrier. Airlines are specified using <a href="https://en.wikipedia.org/wiki/Airline_codes"><a href="https://en.wikipedia.org/wiki/Airline_codes">IATA airline code</a>s</a>
* max_price (integer) - Maximum price of trips to find in the result set, in USD (US dollars) unless some other currency code is specified. By default, no limit is applied
* currency (string) - The preferred <a href="https://en.wikipedia.org/wiki/ISO_4217">currency</a> for the results
* mobile (boolean) - Setting this to true will show mobile web deeplinks 

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

#### Parameters
* origin (string) **required** - <a href="https://en.wikipedia.org/wiki/International_Air_Transport_Association_airport_code">IATA code</a> of the city from which the traveler will depart. See the location and airport interfaces for more information.
* destination (string) **required** - <a href="https://en.wikipedia.org/wiki/International_Air_Transport_Association_airport_code">IATA code</a> of the city to which the traveler is going
* departure_date (string) - Range of dates between which the traveler could depart. Dates are specified in the <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO 8601</a> yyyy-MM-dd date format. Ranges are inclusive and ranges of months will apply from the start to the end of the month. If just a single date is specified, only that date will be searched. By default, the date range starts today and applies up to 361 in the future is applied. Past dates are generally not supported, future dates should be in the next 361 days, although results start to become sparse after about 6 months in the future, as airlines may still be defining their schedules. The default is to search all future dates available. 
* one-way (boolean) - When set to true, the query will be for a single trip from the origin to the destination. When this parameter is not provided, or is set to false, the query is for a round trip from the origin to the destination and back again.
* duration (string) - The allowed duration or range of durations of the trip, in days. This parameter must not be set if the one-way parameter is set to true.
* direct (boolean) - Limit the search to results that do not require the passenger to change plane?
* max_price (string) - Maximum price of trips to find in the result set, in the currency specified for this origin and destination pair in the cache contents spreadsheet. So, for example, if the origin is NYC, and the max price is 400, this means 400 USD. If the origin is PAR, and the max price is 400, this means 400 EUR. By default, no limit is applied
* aggregation_mode (string) - Specifies the granularity of results to be found. DAY is the default when one-way is true finds a result for departure date in the date range. STAY is the default otherwise and finds all round trip permutations for this route withim the given date range. DESTINATION finds one result, only the cheapest price for this route over the provided date range. WEEK finds the cheapest result for every week in the date range. Note that specifying a small granularity but a large search scope may result in a huge output. For some very large outputs, the API may refuse to provide a result.

### flights.inspiration_search.get
<p>The Inspiration Flight Search allows you to find the prices of one-way and return flights from an origin city without necessarily having a destination, or even a flight date, in mind. The search doesn't return a distinct set of price options, but rather, can tell you the price of flying from a given city to some destination, for a trip of a given duration, that falls within a given date range.</p>

<p>The search is based on our Extreme Search platform, which continually caches a large number of flight search results from a list of origin cities to a variety of destinations. Since it's a cached search, the response time is fast, but not all origin airports are available. Here is <a href="https://github.com/amadeus-travel-innovation-sandbox/sandbox-content/blob/master/flight-search-cache-origin-destination.csv">a list of the currently supported origin-destination IATA location pairs</a>. We try to keep this list as fresh as possible for you, but be aware that it may not always be exactly up-to-date and it can change without warning.</p>

<p>Despite this limitation don't underestimate the power of this API. Thanks to its quick response speed you can easily pair it with other APIs to provide a low fare and inspiration for any destination. For example, you can could combine it with a event search API and suggest a total price to see go and see an concert or a game in a selection of cities.</p>



```js
amadeus.flights.inspiration_search.get({
  "origin": ""
}, context)
```

#### Parameters
* origin (string) **required** - <a href="https://en.wikipedia.org/wiki/International_Air_Transport_Association_airport_code">IATA code</a> of the city from which the traveler will depart. See the location and airport interfaces for more information.
* destination (string) - <a href="https://en.wikipedia.org/wiki/International_Air_Transport_Association_airport_code">IATA code</a> of the city to which the traveler is going
* departure_date (string) - Range of dates between which the traveler could depart. Dates are specified in the <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO 8601</a> yyyy-MM-dd date format. Ranges are inclusive and ranges of months will apply from the start to the end of the month. If just a single date is specified, only that date will be searched. By default, the date range starts today and applies up to 361 in the future is applied. Past dates are generally not supported, future dates should be in the next 361 days, although results start to become sparse after about 6 months in the future, as airlines may still be defining their schedules. The default is to search all future dates available.
* one-way (boolean) - When set to true, the query will be for a single trip from the origin to the destination. When this parameter is not provided, or is set to false, the query is for a round trip from the origin to the destination and back again.
* duration (string) - The allowed duration or range of durations of the trip, in days. This parameter must not be set if the one-way parameter is set to true.
* direct (boolean) - Limit the search to results that do not require the passenger to change plane?
* max_price (string) - Maximum price of trips to find in the result set, in the currency specified for this origin and destination pair in the cache contents spreadsheet. So, for example, if the origin is NYC, and the max price is 400, this means 400 USD. If the origin is PAR, and the max price is 400, this means 400 EUR. By default, no limit is applied
* aggregation_mode (string) - Specifies the granularity of results to be found. DESTINATION is the default and finds one result per city. COUNTRY finds one result per country, DAY finds on result for every day in the date range, WEEK finds one result for every week in the date range. Note that specifying a small granularity but a large search scope may result in a huge output. For some very large outputs, the API may refuse to provide a result.

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

#### Parameters
* origin (string) **required** - City code from which the traveler will depart. See the location and airport interfaces for more information.
* destination (string) **required** - <a href="https://en.wikipedia.org/wiki/International_Air_Transport_Association_airport_code">IATA code</a> of the city to which the traveler is going
* departure_date (string) **required** - The date on which the traveler will depart from the origin to go to the destination. You can specify a date range of up to 2 days. For a larger date range, use the Extensive Search. Dates are specified in the <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO 8601</a> yyyy-MM-dd date format and separated by --.
* return_date (string) - The date on which the traveler will depart from the destination to return to the origin. If this parameter is not specified, the search will find only one-way trips. If this, or the return_by parameter are specified, only return trips are found. You can specify a date range of up to 2 days.
* arrive_by (string) - The datetime by which the outbound flight should arrive, based on local time at the destination airport.  Date-times are specified in the <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO 8601</a> yyyy-MM-ddTHH:mm date format
* return_by (string) - The time by which the inbound flight should arrive, based on local time at the airport specified as the origin parameter
* adults (integer) - The number of adult (age 12 and over) passengers traveling on this flight.
* children (integer) - The number of child (younger than age 12 on date of departure) passengers traveling on this flight who will each have their own separate seat
* infants (integer) - The number of infant (younger than age 2 on date of departure) passengers traveling on this flight. Infants travel in the lap of an adult passenger, and thus the number of infants must not exceed the number of adults.
* include_airlines (array) - If specified, all results will include at least one flight where one or more of these airlines is the marketing carrier. This behaves as an OR function. Airlines are specified using <a href="https://en.wikipedia.org/wiki/Airline_codes"><a href="https://en.wikipedia.org/wiki/Airline_codes">IATA airline code</a>s</a>.
* exclude_airlines (array) - If specified, no results will include any flights where any of these airlines is the marketing carrier. Airlines are specified using <a href="https://en.wikipedia.org/wiki/Airline_codes"><a href="https://en.wikipedia.org/wiki/Airline_codes">IATA airline code</a>s</a>.
* nonstop (boolean) - Setting this to true will find only flights that do not require the passenger to change from one flight to another
* max_price (integer) - Maximum price of trips to find in the result set, in USD (US dollars) unless some other currency code is specified. By default, no limit is applied
* currency (string) - The preferred <a href="https://en.wikipedia.org/wiki/ISO_4217">currency</a> for the results
* travel_class (string) - Searches for results where the majority of the itinerary flight time should be in a the specified cabin class or higher
* number_of_results (integer) - The number of results to display. This will not be strictly interpreted but used as a guideline to display a useful number of results. By default, the number of results is dynamically determined. A maximum of 250 results will be displayed.

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

#### Parameters
* location (string) **required** - <a href="https://en.wikipedia.org/wiki/International_Air_Transport_Association_airport_code">IATA airport code</a> for hotel availability is required requested.
* check_in (string) **required** - Date on which the guest will begin their stay in the hotel. Past availability is not displayed, future availability becomes less useful from about 6 months from the current date.
* check_out (string) **required** - Date on which the guest will end their stay in the hotel.
* radius (integer) - Radius around the center to look for hotels in kilometers (km).
* lang (string) - The preferred language of the content related to each hotel. Content will be returned in this language if available.
* currency (string) - The preferred <a href="https://en.wikipedia.org/wiki/ISO_4217">currency</a> for the results
* chain (string) - Narrows the hotel search to a given hotel provider. The hotel chain is indicated by the first two characters of the property code.
* max_rate (number) - The maximum amount per night that any hotel in the shopping response should cost. This is calculated by dividing the total price of the stay for the given dates by the number of nights specified falling between the check_in and check_out dates.
* number_of_results (integer) - The maximum number of hotels to return in the results set. Hotels are ordered by total price, so if more than the given maximum number of hotels are available, only the cheapest options are returned.
* all_rooms (boolean) - This option if enabled will return all hotel room rates, not just the lowest room rate. Note: This will have an impact on the response time due to the larger messages returned.
* show_sold_out (boolean) - This option if enabled will return hotel names and addresses even if rooms are sold out (closed properties)
* amenity (array) - Hotel <a href="hotels-api-supported-amenities-filter">amenities filter</a> to search narrow down hotels with certain amenities. For example&colon; amenity=POOL. (Note: multiple amenities can be used in searches: amenity=PARKING&amenity=RESTAURANT&amenity=PETS_ALLOWED).

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

#### Parameters
* south_west_corner (string) **required** - The coordinates of the south-west corner of the search box.
* north_east_corner (string) **required** - The coordinates of the north-east corner of the search box.
* check_in (string) **required** - Date on which the guest will begin their stay in the hotel. Past availability is not displayed, future availability becomes less useful from about 6 months from the current date.
* check_out (string) **required** - Date on which the guest will end their stay in the hotel.
* lang (string) - The preferred language of the content related to each hotel. Content will be returned in this language if available.
* currency (string) - The preferred <a href="https://en.wikipedia.org/wiki/ISO_4217">currency</a> for the results
* chain (string) - Narrows the hotel search to a given hotel provider. The hotel chain is indicated by the first two characters of the property code.
* max_rate (number) - The maximum amount per night that any hotel in the shopping response should cost. This is calculated by dividing the total price of the stay for the given dates by the number of nights specified falling between the check_in and check_out dates.
* number_of_results (integer) - The maximum number of hotels to return in the results set. Hotels are ordered by total price, so if more than the given maximum number of hotels are available, only the cheapest options are returned.
* all_rooms (boolean) - This option if enabled will return all hotel room rates, not just the lowest room rate. Note: This will have an impact on the response time due to the larger messages returned.
* show_sold_out (boolean) - This option if enabled will return hotel names and addresses even if rooms are sold out (closed properties)
* amenity (array) - Hotel <a href="hotels-api-supported-amenities-filter">amenities filter</a> to search narrow down hotels with certain amenities. For example&colon; amenity=POOL. (Note: multiple amenities can be used in searches: amenity=PARKING&amenity=RESTAURANT&amenity=PETS_ALLOWED).

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

#### Parameters
* latitude (number) **required** - Latitude of the center of the search.
* longitude (number) **required** - Longitude of the center of the search.
* radius (integer) **required** - Radius around the center to look for hotels in kilometers (km).
* check_in (string) **required** - Date on which the guest will begin their stay in the hotel. Past availability is not displayed, future availability becomes less useful from about 6 months from the current date.
* check_out (string) **required** - Date on which the guest will end their stay in the hotel.
* lang (string) - The preferred language of the content related to each hotel. Content will be returned in this language if available.
* currency (string) - The preferred <a href="https://en.wikipedia.org/wiki/ISO_4217">currency</a> for the results
* chain (string) - Narrows the hotel search to a given hotel provider. The hotel chain is indicated by the first two characters of the property code.
* max_rate (number) - The maximum amount per night that any hotel in the shopping response should cost. This is calculated by dividing the total price of the stay for the given dates by the number of nights specified falling between the check_in and check_out dates.
* number_of_results (integer) - The maximum number of hotels to return in the results set. Hotels are ordered by total price, so if more than the given maximum number of hotels are available, only the cheapest options are returned.
* all_rooms (boolean) - This option if enabled will return all hotel room rates, not just the lowest room rate. Note: This will have an impact on the response time due to the larger messages returned.
* show_sold_out (boolean) - This option if enabled will return hotel names and addresses even if rooms are sold out (closed properties)
* amenity (array) - Hotel <a href="hotels-api-supported-amenities-filter">amenities filter</a> to search narrow down hotels with certain amenities. For example&colon; amenity=POOL. (Note: multiple amenities can be used in searches: amenity=PARKING&amenity=RESTAURANT&amenity=PETS_ALLOWED).

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

#### Parameters
* property_code (string) **required** - A Hotel property code based on 2 letter chain code + 3 letter <a href="https://en.wikipedia.org/wiki/International_Air_Transport_Association_airport_code">IATA code</a> of the city + 3 char property unique id.
* check_in (string) **required** - Date on which the guest will begin their stay in the hotel. Past availability is not displayed, future availability becomes less useful from about 6 months from the current date.
* check_out (string) **required** - Date on which the guest will end their stay in the hotel.
* lang (string) - The preferred language of the content related to each hotel. Content will be returned in this language if available.
* currency (string) - The preferred <a href="https://en.wikipedia.org/wiki/ISO_4217">currency</a> for the results
* all_rooms (boolean) - This option if enabled will return all hotel room rates, not just the lowest room rate. Note: This will have an impact on the response time due to the larger messages returned.
* show_sold_out (boolean) - This option if enabled will return hotel names and addresses even if rooms are sold out (closed properties)

### location.code.get
<p>This service retrieves the location information corresponding to a IATA city or airport code.</p>

<p>When provided with an <a href="https://en.wikipedia.org/wiki/International_Air_Transport_Association_airport_code">IATA code</a>, the service determines whether this code could relate to a city code, an airport code or both. If the city could contain multiple airports, it will return all possible airports that correspond to that city code.</p>

<p>This API is based on the Amadeus supported <a href="http://opentraveldata.github.io/geobases">Geobases</a> open-source project. If you wish to make your own database with all IATA location information, in order to get faster reponses, you can download the latest raw data from their <a href="https://github.com/opentraveldata/opentraveldata/blob/master/opentraveldata/optd_por_public.csv">github page</a>.</p>



```js
amadeus.location.code.get({
  "code": ""
}, context)
```

#### Parameters
* code (string) **required** - IATA location code for which further information is required

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

#### Parameters
* latitude (number) **required** - Latitude of the center of the search, in decimal degrees
* longitude (number) **required** - Longitude of the center of the search, in decimal degrees
* radius (integer) **required** - Radius around the center to look for points-of-interest around the given latitude and longitude in kilometers (km)
* lang (string) - The preferred language of the content related to each point of interest. Content will be returned in this language if available
* category (string) - Filters the resulting points_of_interest to include only results which have a least one category containing the given provided word. Good examples are <em>museum</em>, <em>landmark</em> or <em>church</em>
* geonames (boolean) - Setting this to true includes only points of interest with a geonames ID
* vibes (boolean) - Includes content that doesn't correspond to an active physical place, but which gives the user some background information, or <em>vibe</em> for the place they are visiting. An example of this may be information on an influential demolished building that used to exist at a certain location, or more information on a district of the city
* social_media (boolean) - Enabling this includes images from Instagram in the output results. This is disabled by default, since these images are often just pictures of people or food, which often have little relevance to the actual location
* image_size (string) - The size of the images you'd like to see in the response
* number_of_images (integer) - Number of images to display.
* number_of_results (integer) - The maximum number of points of interest to return in the results set. This is a range from 1 to 100

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

#### Parameters
* city_name (string) **required** - The name of the <a href="http://yapq.io/cities.txt">supported city</a> for which you are searching, in the selected language.
* lang (string) - The preferred language of the content related to each point of interest. Content will be returned in this language if available
* category (string) - Filters the resulting points_of_interest to include only results which have a least one category containing the given provided word. Good examples are <em>museum</em>, <em>landmark</em> or <em>church</em>
* geonames (boolean) - Setting this to true includes only points of interest with a geonames ID
* vibes (boolean) - Includes content that doesn't correspond to an active physical place, but which gives the user some background information, or <em>vibe</em> for the place they are visiting. An example of this may be information on an influential demolished building that used to exist at a certain location, or more information on a district of the city
* social_media (boolean) - Enabling this includes images from Instagram in the output results. This is disabled by default, since these images are often just pictures of people or food, which often have little relevance to the actual location
* image_size (string) - The size of the images you'd like to see in the response
* number_of_images (integer) - Number of images to display
* number_of_results (integer) - The maximum number of points of interest to return in the results set. This is a range from 1 to 100

### rail_station.id.get
Rail-Station Information - Retrieve the rail station information corresponding to an Amadeus UIC rail station ID. Currently only French and Italian stations are supported.


```js
amadeus.rail_station.id.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - Station ID for which further information is required.

### rail_stations.autocomplete.get
<p>Given the start of any word in a rail station's official name, as a term, this API provides the full name and rail station ID of a rail station for use in searches. The response provides an array of up to 20 possible matches, sorted by passenger traffic, in a JQuery Autocomplete compatible format.</p>

<p>The value returned is the UIC station code. The label returned is always in UTF-8 format, with the station's official name (which is often in the native language). Agglomeration station codes may also be returned.</p>

<p>Note that only French and Italian rail stations are supported by the Rail Station Autocomplete API</p>



```js
amadeus.rail_stations.autocomplete.get({
  "term": ""
}, context)
```

#### Parameters
* term (string) **required** - Search term that should represent some part of a station name. Not case sensitive, may be blank.

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

#### Parameters
* origin (string) **required** - Identifier of the rail station from which you would like to depart.
* destination (string) **required** - Identifier of the rail station to which you would like to travel.
* departure_date (string) **required** - The date or range of dates on which you would like to depart from the origin station to go to the destination.

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

#### Parameters
* origin (string) **required** - Identifier of the rail station where you would like to depart from.
* departure_date (string) **required** - The date on which you would like to depart from the origin station to go to the destination.

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

#### Parameters
* period (string) **required** - Range of periods for which flight traffic information is required. Ranges are inclusive and ranges of months will apply from the start to the end of the month. If just a single period is specified, only that period will be displayed. Only periods from 2011-01 up to previous month of the current year are valid. Future periods are not supported.
* origin (string) **required** - <a href="https://en.wikipedia.org/wiki/International_Air_Transport_Association_airport_code">IATA code</a> of the city from which the traveler will depart.
* destination (string) - <a href="https://en.wikipedia.org/wiki/International_Air_Transport_Association_airport_code">IATA code</a> of the city to which the traveler is going.
* number_of_results_per_period (integer) - The maximum number of destinations to return for each period. Destinations are ordered by dates and number of travelers. The maximum number of destinations per period returned is 50

### travel_intelligence.top_destinations.get
<p>The Top Flight Destinations API lets you find the most popular flight destinations from an origin during a period. This can help you answer questions like "Where are most people from Paris going to during the month of September?" The API is based on estimated flight traffic summary data from two journey points over a specific period. It returns up to 50 results, ordered by popularity, showing number of travelers as well as number of flights.</p>

<p>This estimated search is based on Amadeus' Travel Intelligence Engine, a high performance scalable cloud-based platform, born in the age of Big Data and purposely built for the industry bringing total flexibility and speed to business intelligence for travel. Please see <a href="http://www.amadeus.com/travelintelligence">amadeus.com/travelintelligence</a> for more information.</p>



```js
amadeus.travel_intelligence.top_destinations.get({
  "period": "",
  "origin": ""
}, context)
```

#### Parameters
* period (string) **required** - Period, in month of the year (YYYY-MM), when consumers are traveling. Only periods from 2011-01 up to previous month of the current year are valid. Future dates are not supported.
* origin (string) **required** - <a href="https://en.wikipedia.org/wiki/International_Air_Transport_Association_airport_code">IATA code</a> of the city from which the traveler will depart.
* number_of_results (integer) - The maximum number of destinations to return in the results set. Destinations are ordered by number of travelers. The maximum number of destinations returned is 50

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

#### Parameters
* period (string) **required** - Period of date (month or year) when consumers are searching to travel. Use YYYY-MM for month or YYYY for year. Only periods from year 2011-01 up to current year, previous month are valid. Future dates are not supported.
* origin (string) **required** - <a href="https://en.wikipedia.org/wiki/International_Air_Transport_Association_airport_code">IATA code</a> of the city from which the traveler will depart.
* destination (string) - <a href="https://en.wikipedia.org/wiki/International_Air_Transport_Association_airport_code">IATA code</a> of the city to which the traveler is going
* country (string) **required** - 2-letter IATA country code of the country where the search queries originates from.
* number_of_results (integer) - The maximum number of destinations to return in the results set. Destinations are ordered by number of searches. The maximum number of destinations returned is 50

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

#### Parameters
* record_locator (string) **required** - The Amadeus identifier of the given travel record. Usually printed at the top of an itinerary or boarding pass.
* last_name (string) **required** - The last name of any traveler in this record, as written on their identification used for travel. This is required to ensure that applications retrieving the record are acting on behalf of the customer.
* env (string) - Indicates the Amadeus system from which this record should be retrieved.

