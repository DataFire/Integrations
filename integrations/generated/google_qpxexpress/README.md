# @datafire/google_qpxexpress

Client library for QPX Express

## Installation and Usage
```bash
npm install --save @datafire/google_qpxexpress
```
```js
let google_qpxexpress = require('@datafire/google_qpxexpress').create();

google_qpxexpress.trips.search({}).then(data => {
  console.log(data);
});
```

## Description

Finds the least expensive flights between an origin and a destination.

## Actions

### trips.search
Returns a list of flights.


```js
google_qpxexpress.trips.search({}, context)
```

#### Input
* input `object`
  * body [TripsSearchRequest](#tripssearchrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [TripsSearchResponse](#tripssearchresponse)



## Definitions

### AircraftData
* AircraftData `object`: The make, model, and type of an aircraft.
  * code `string`: The aircraft code. For example, for a Boeing 777 the code would be 777.
  * kind `string`: Identifies this as an aircraftData object. Value: the fixed string qpxexpress#aircraftData
  * name `string`: The name of an aircraft, for example Boeing 777.

### AirportData
* AirportData `object`: An airport.
  * city `string`: The city code an airport is located in. For example, for JFK airport, this is NYC.
  * code `string`: An airport's code. For example, for Boston Logan airport, this is BOS.
  * kind `string`: Identifies this as an airport object. Value: the fixed string qpxexpress#airportData.
  * name `string`: The name of an airport. For example, for airport BOS the name is "Boston Logan International".

### BagDescriptor
* BagDescriptor `object`: Information about an item of baggage.
  * commercialName `string`: Provides the commercial name for an optional service.
  * count `integer`: How many of this type of bag will be checked on this flight.
  * description `array`: A description of the baggage.
    * items `string`
  * kind `string`: Identifies this as a baggage object. Value: the fixed string qpxexpress#bagDescriptor.
  * subcode `string`: The standard IATA subcode used to identify this optional service.

### CarrierData
* CarrierData `object`: Information about a carrier (ie. an airline, bus line, railroad, etc) that might be useful to display to an end-user.
  * code `string`: The IATA designator of a carrier (airline, etc). For example, for American Airlines, the code is AA.
  * kind `string`: Identifies this as a kind of carrier (ie. an airline, bus line, railroad, etc). Value: the fixed string qpxexpress#carrierData.
  * name `string`: The long, full name of a carrier. For example: American Airlines.

### CityData
* CityData `object`: Information about a city that might be useful to an end-user; typically the city of an airport.
  * code `string`: The IATA character ID of a city. For example, for Boston this is BOS.
  * country `string`: The two-character country code of the country the city is located in. For example, US for the United States of America.
  * kind `string`: Identifies this as a city, typically with one or more airports. Value: the fixed string qpxexpress#cityData.
  * name `string`: The full name of a city. An example would be: New York.

### Data
* Data `object`: Detailed information about components found in the solutions of this response, including a trip's airport, city, taxes, airline, and aircraft.
  * aircraft `array`: The aircraft that is flying between an origin and destination.
    * items [AircraftData](#aircraftdata)
  * airport `array`: The airport of an origin or destination.
    * items [AirportData](#airportdata)
  * carrier `array`: The airline carrier of the aircraft flying between an origin and destination. Allowed values are IATA carrier codes.
    * items [CarrierData](#carrierdata)
  * city `array`: The city that is either the origin or destination of part of a trip.
    * items [CityData](#citydata)
  * kind `string`: Identifies this as QPX Express response resource, including a trip's airport, city, taxes, airline, and aircraft. Value: the fixed string qpxexpress#data.
  * tax `array`: The taxes due for flying between an origin and a destination.
    * items [TaxData](#taxdata)

### FareInfo
* FareInfo `object`: Complete information about a fare used in the solution to a low-fare search query. In the airline industry a fare is a price an airline charges for one-way travel between two points. A fare typically contains a carrier code, two city codes, a price, and a fare basis. (A fare basis is a one-to-eight character alphanumeric code used to identify a fare.)
  * basisCode `string`
  * carrier `string`: The carrier of the aircraft or other vehicle commuting between two points.
  * destination `string`: The city code of the city the trip ends at.
  * id `string`: A unique identifier of the fare.
  * kind `string`: Identifies this as a fare object. Value: the fixed string qpxexpress#fareInfo.
  * origin `string`: The city code of the city the trip begins at.
  * private `boolean`: Whether this is a private fare, for example one offered only to select customers rather than the general public.

### FlightInfo
* FlightInfo `object`: A flight is a sequence of legs with the same airline carrier and flight number. (A leg is the smallest unit of travel, in the case of a flight a takeoff immediately followed by a landing at two set points on a particular carrier with a particular flight number.) The naive view is that a flight is scheduled travel of an aircraft between two points, with possibly intermediate stops, but carriers will frequently list flights that require a change of aircraft between legs.
  * carrier `string`
  * number `string`: The flight number.

### FreeBaggageAllowance
* FreeBaggageAllowance `object`: Information about free baggage allowed on one segment of a trip.
  * bagDescriptor `array`: A representation of a type of bag, such as an ATPCo subcode, Commercial Name, or other description.
    * items [BagDescriptor](#bagdescriptor)
  * kilos `integer`: The maximum number of kilos all the free baggage together may weigh.
  * kilosPerPiece `integer`: The maximum number of kilos any one piece of baggage may weigh.
  * kind `string`: Identifies this as free baggage object, allowed on one segment of a trip. Value: the fixed string qpxexpress#freeBaggageAllowance.
  * pieces `integer`: The number of free pieces of baggage allowed.
  * pounds `integer`: The number of pounds of free baggage allowed.

### LegInfo
* LegInfo `object`: Information about a leg. (A leg is the smallest unit of travel, in the case of a flight a takeoff immediately followed by a landing at two set points on a particular carrier with a particular flight number.)
  * aircraft `string`: The aircraft (or bus, ferry, railcar, etc) travelling between the two points of this leg.
  * arrivalTime `string`: The scheduled time of arrival at the destination of the leg, local to the point of arrival.
  * changePlane `boolean`: Whether you have to change planes following this leg. Only applies to the next leg.
  * connectionDuration `integer`: Duration of a connection following this leg, in minutes.
  * departureTime `string`: The scheduled departure time of the leg, local to the point of departure.
  * destination `string`: The leg destination as a city and airport.
  * destinationTerminal `string`: The terminal the flight is scheduled to arrive at.
  * duration `integer`: The scheduled travelling time from the origin to the destination.
  * id `string`: An identifier that uniquely identifies this leg in the solution.
  * kind `string`: Identifies this as a leg object. A leg is the smallest unit of travel, in the case of a flight a takeoff immediately followed by a landing at two set points on a particular carrier with a particular flight number. Value: the fixed string qpxexpress#legInfo.
  * meal `string`: A simple, general description of the meal(s) served on the flight, for example: "Hot meal".
  * mileage `integer`: The number of miles in this leg.
  * onTimePerformance `integer`: In percent, the published on time performance on this leg.
  * operatingDisclosure `string`: Department of Transportation disclosure information on the actual operator of a flight in a code share. (A code share refers to a marketing agreement between two carriers, where one carrier will list in its schedules (and take bookings for) flights that are actually operated by another carrier.)
  * origin `string`: The leg origin as a city and airport.
  * originTerminal `string`: The terminal the flight is scheduled to depart from.
  * secure `boolean`: Whether passenger information must be furnished to the United States Transportation Security Administration (TSA) prior to departure.

### PassengerCounts
* PassengerCounts `object`: The number and type of passengers. Unfortunately the definition of an infant, child, adult, and senior citizen varies across carriers and reservation systems.
  * adultCount `integer`: The number of passengers that are adults.
  * childCount `integer`: The number of passengers that are children.
  * infantInLapCount `integer`: The number of passengers that are infants travelling in the lap of an adult.
  * infantInSeatCount `integer`: The number of passengers that are infants each assigned a seat.
  * kind `string`: Identifies this as a passenger count object, representing the number of passengers. Value: the fixed string qpxexpress#passengerCounts.
  * seniorCount `integer`: The number of passengers that are senior citizens.

### PricingInfo
* PricingInfo `object`: The price of one or more travel segments. The currency used to purchase tickets is usually determined by the sale/ticketing city or the sale/ticketing country, unless none are specified, in which case it defaults to that of the journey origin country.
  * baseFareTotal `string`: The total fare in the base fare currency (the currency of the country of origin). This element is only present when the sales currency and the currency of the country of commencement are different.
  * fare `array`: The fare used to price one or more segments.
    * items [FareInfo](#fareinfo)
  * fareCalculation `string`: The horizontal fare calculation. This is a field on a ticket that displays all of the relevant items that go into the calculation of the fare.
  * kind `string`: Identifies this as a pricing object, representing the price of one or more travel segments. Value: the fixed string qpxexpress#pricingInfo.
  * latestTicketingTime `string`: The latest ticketing time for this pricing assuming the reservation occurs at ticketing time and there is no change in fares/rules. The time is local to the point of sale (POS).
  * passengers [PassengerCounts](#passengercounts)
  * ptc `string`: The passenger type code for this pricing. An alphanumeric code used by a carrier to restrict fares to certain categories of passenger. For instance, a fare might be valid only for senior citizens.
  * refundable `boolean`: Whether the fares on this pricing are refundable.
  * saleFareTotal `string`: The total fare in the sale or equivalent currency.
  * saleTaxTotal `string`: The taxes in the sale or equivalent currency.
  * saleTotal `string`: Total per-passenger price (fare and tax) in the sale or equivalent currency.
  * segmentPricing `array`: The per-segment price and baggage information.
    * items [SegmentPricing](#segmentpricing)
  * tax `array`: The taxes used to calculate the tax total per ticket.
    * items [TaxInfo](#taxinfo)

### SegmentInfo
* SegmentInfo `object`: Details of a segment of a flight; a segment is one or more consecutive legs on the same flight. For example a hypothetical flight ZZ001, from DFW to OGG, would have one segment with two legs: DFW to HNL (leg 1), HNL to OGG (leg 2), and DFW to OGG (legs 1 and 2).
  * bookingCode `string`: The booking code or class for this segment.
  * bookingCodeCount `integer`: The number of seats available in this booking code on this segment.
  * cabin `string`: The cabin booked for this segment.
  * connectionDuration `integer`: In minutes, the duration of the connection following this segment.
  * duration `integer`: The duration of the flight segment in minutes.
  * flight [FlightInfo](#flightinfo)
  * id `string`: An id uniquely identifying the segment in the solution.
  * kind `string`: Identifies this as a segment object. A segment is one or more consecutive legs on the same flight. For example a hypothetical flight ZZ001, from DFW to OGG, could have one segment with two legs: DFW to HNL (leg 1), HNL to OGG (leg 2). Value: the fixed string qpxexpress#segmentInfo.
  * leg `array`: The legs composing this segment.
    * items [LegInfo](#leginfo)
  * marriedSegmentGroup `string`: The solution-based index of a segment in a married segment group. Married segments can only be booked together. For example, an airline might report a certain booking code as sold out from Boston to Pittsburgh, but as available as part of two married segments Boston to Chicago connecting through Pittsburgh. For example content of this field, consider the round-trip flight ZZ1 PHX-PHL ZZ2 PHL-CLT ZZ3 CLT-PHX. This has three segments, with the two outbound ones (ZZ1 ZZ2) married. In this case, the two outbound segments belong to married segment group 0, and the return segment belongs to married segment group 1.
  * subjectToGovernmentApproval `boolean`: Whether the operation of this segment remains subject to government approval.

### SegmentPricing
* SegmentPricing `object`: The price of this segment.
  * fareId `string`: A segment identifier unique within a single solution. It is used to refer to different parts of the same solution.
  * freeBaggageOption `array`: Details of the free baggage allowance on this segment.
    * items [FreeBaggageAllowance](#freebaggageallowance)
  * kind `string`: Identifies this as a segment pricing object, representing the price of this segment. Value: the fixed string qpxexpress#segmentPricing.
  * segmentId `string`: Unique identifier in the response of this segment.

### SliceInfo
* SliceInfo `object`: Information about a slice. A slice represents a traveller's intent, the portion of a low-fare search corresponding to a traveler's request to get between two points. One-way journeys are generally expressed using 1 slice, round-trips using 2. For example, if a traveler specifies the following trip in a user interface:
  * duration `integer`: The duration of the slice in minutes.
  * kind `string`: Identifies this as a slice object. A slice represents a traveller's intent, the portion of a low-fare search corresponding to a traveler's request to get between two points. One-way journeys are generally expressed using 1 slice, round-trips using 2. Value: the fixed string qpxexpress#sliceInfo.
  * segment `array`: The segment(s) constituting the slice.
    * items [SegmentInfo](#segmentinfo)

### SliceInput
* SliceInput `object`: Criteria a desired slice must satisfy.
  * alliance `string`: Slices with only the carriers in this alliance should be returned; do not use this field with permittedCarrier. Allowed values are ONEWORLD, SKYTEAM, and STAR.
  * date `string`: Departure date in YYYY-MM-DD format.
  * destination `string`: Airport or city IATA designator of the destination.
  * kind `string`: Identifies this as a slice input object, representing the criteria a desired slice must satisfy. Value: the fixed string qpxexpress#sliceInput.
  * maxConnectionDuration `integer`: The longest connection between two legs, in minutes, you are willing to accept.
  * maxStops `integer`: The maximum number of stops you are willing to accept in this slice.
  * origin `string`: Airport or city IATA designator of the origin.
  * permittedCarrier `array`: A list of 2-letter IATA airline designators. Slices with only these carriers should be returned.
    * items `string`
  * permittedDepartureTime [TimeOfDayRange](#timeofdayrange)
  * preferredCabin `string`: Prefer solutions that book in this cabin for this slice. Allowed values are COACH, PREMIUM_COACH, BUSINESS, and FIRST.
  * prohibitedCarrier `array`: A list of 2-letter IATA airline designators. Exclude slices that use these carriers.
    * items `string`

### TaxData
* TaxData `object`: Tax data.
  * id `string`: An identifier uniquely identifying a tax in a response.
  * kind `string`: Identifies this as a tax data object, representing some tax. Value: the fixed string qpxexpress#taxData.
  * name `string`: The name of a tax.

### TaxInfo
* TaxInfo `object`: Tax information.
  * chargeType `string`: Whether this is a government charge or a carrier surcharge.
  * code `string`: The code to enter in the ticket's tax box.
  * country `string`: For government charges, the country levying the charge.
  * id `string`: Identifier uniquely identifying this tax in a response. Not present for unnamed carrier surcharges.
  * kind `string`: Identifies this as a tax information object. Value: the fixed string qpxexpress#taxInfo.
  * salePrice `string`: The price of the tax in the sales or equivalent currency.

### TimeOfDayRange
* TimeOfDayRange `object`: Two times in a single day defining a time range.
  * earliestTime `string`: The earliest time of day in HH:MM format.
  * kind `string`: Identifies this as a time of day range object, representing two times in a single day defining a time range. Value: the fixed string qpxexpress#timeOfDayRange.
  * latestTime `string`: The latest time of day in HH:MM format.

### TripOption
* TripOption `object`: Trip information.
  * id `string`: Identifier uniquely identifying this trip in a response.
  * kind `string`: Identifies this as a trip information object. Value: the fixed string qpxexpress#tripOption.
  * pricing `array`: Per passenger pricing information.
    * items [PricingInfo](#pricinginfo)
  * saleTotal `string`: The total price for all passengers on the trip, in the form of a currency followed by an amount, e.g. USD253.35.
  * slice `array`: The slices that make up this trip's itinerary.
    * items [SliceInfo](#sliceinfo)

### TripOptionsRequest
* TripOptionsRequest `object`: A QPX Express search request, which will yield one or more solutions.
  * maxPrice `string`: Do not return solutions that cost more than this price. The alphabetical part of the price is in ISO 4217. The format, in regex, is [A-Z]{3}\d+(\.\d+)? Example: $102.07
  * passengers [PassengerCounts](#passengercounts)
  * refundable `boolean`: Return only solutions with refundable fares.
  * saleCountry `string`: IATA country code representing the point of sale. This determines the "equivalent amount paid" currency for the ticket.
  * slice `array`: The slices that make up the itinerary of this trip. A slice represents a traveler's intent, the portion of a low-fare search corresponding to a traveler's request to get between two points. One-way journeys are generally expressed using one slice, round-trips using two. An example of a one slice trip with three segments might be BOS-SYD, SYD-LAX, LAX-BOS if the traveler only stopped in SYD and LAX just long enough to change planes.
    * items [SliceInput](#sliceinput)
  * solutions `integer`: The number of solutions to return, maximum 500.
  * ticketingCountry `string`: IATA country code representing the point of ticketing.

### TripOptionsResponse
* TripOptionsResponse `object`: A QPX Express search response.
  * data [Data](#data)
  * kind `string`: Identifies this as a QPX Express trip response object, which consists of zero or more solutions. Value: the fixed string qpxexpress#tripOptions.
  * requestId `string`: An identifier uniquely identifying this response.
  * tripOption `array`: A list of priced itinerary solutions to the QPX Express query.
    * items [TripOption](#tripoption)

### TripsSearchRequest
* TripsSearchRequest `object`: A QPX Express search request.
  * request [TripOptionsRequest](#tripoptionsrequest)

### TripsSearchResponse
* TripsSearchResponse `object`: A QPX Express search response.
  * kind `string`: Identifies this as a QPX Express API search response resource. Value: the fixed string qpxExpress#tripsSearch.
  * trips [TripOptionsResponse](#tripoptionsresponse)


