# @datafire/amadeus

Client library for Flight Offers Search

## Installation and Usage
```bash
npm install --save @datafire/amadeus
```
```js
let amadeus = require('@datafire/amadeus').create();

.then(data => {
  console.log(data);
});
```

## Description


Before using this API, we recommend you read our **[Authorization Guide](https://developers.amadeus.com/self-service/apis-docs/guides/authorization)** for more information on how to generate an access token. 

Please also be aware that our test environment is based on a subset of the production, if you are not returning any results try with big cities/airports like LON (London) or NYC (New-York).

## Actions

### getFlightOffers
Return list of Flight Offers based on searching criteria.


```js
amadeus.getFlightOffers({
  "originLocationCode": "",
  "destinationLocationCode": "",
  "departureDate": "",
  "adults": 0
}, context)
```

#### Input
* input `object`
  * originLocationCode **required** `string`: city/airport [IATA code](http://www.iata.org/publications/Pages/code-search.aspx) from which the traveler will depart, e.g. BOS for Boston
  * destinationLocationCode **required** `string`: city/airport [IATA code](http://www.iata.org/publications/Pages/code-search.aspx) to which the traveler is going, e.g. PAR for Paris
  * departureDate **required** `string`: the date on which the traveler will depart from the origin to go to the destination. Dates are specified in the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) YYYY-MM-DD format, e.g. 2017-12-25
  * returnDate `string`: the date on which the traveler will depart from the destination to return to the origin. If this parameter is not specified, only one-way itineraries are found. If this parameter is specified, only round-trip itineraries are found. Dates are specified in the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) YYYY-MM-DD format, e.g. 2018-02-28
  * adults **required** `integer`: the number of adult travelers (age 12 or older on date of departure).
  * children `integer`: the number of child travelers (older than age 2 and younger than age 12 on date of departure) who will each have their own separate seat. If specified, this number should be greater than or equal to 0
  * infants `integer`: the number of infant travelers (whose age is less or equal to 2 on date of departure). Infants travel on the lap of an adult traveler, and thus the number of infants must not exceed the number of adults. If specified, this number should be greater than or equal to 0
  * travelClass `string` (values: ECONOMY, PREMIUM_ECONOMY, BUSINESS, FIRST): most of the flight time should be spent in a cabin of this quality or higher. The accepted travel class is economy, premium economy, business or first class. If no travel class is specified, the search considers any travel class
  * includedAirlineCodes `string`: This option ensures that the system will only consider these airlines. This can not be cumulated with parameter excludedAirlineCodes.
  * excludedAirlineCodes `string`: This option ensures that the system will ignore these airlines. This can not be cumulated with parameter includedAirlineCodes.
  * nonStop `boolean`: if set to true, the search will find only flights going from the origin to the destination with no stop in between
  * currencyCode `string`: the preferred currency for the flight offers. Currency is specified in the [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) format, e.g. EUR for Euro
  * maxPrice `integer`: maximum price per traveler. By default, no limit is applied. If specified, the value should be a positive number with no decimals
  * max `integer`: maximum number of flight offers to return. If specified, the value should be greater than or equal to 1

#### Output
* output `object`
  * data **required** `array`
    * items [FlightOffer](#flightoffer)
  * dictionaries [Dictionaries](#dictionaries)
  * meta [Collection_Meta_Link](#collection_meta_link)
  * warnings `array`
    * items [Issue](#issue)

### searchFlightOffers
Return list of Flight Offers based on posted searching criteria.


```js
amadeus.searchFlightOffers({
  "X-HTTP-Method-Override": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * X-HTTP-Method-Override **required** `string`: the HTTP method to apply
  * body **required** [GetFlightOffersQuery](#getflightoffersquery)

#### Output
* output `object`
  * data **required** `array`
    * items [FlightOffer](#flightoffer)
  * dictionaries [Dictionaries](#dictionaries)
  * meta [Collection_Meta](#collection_meta)
  * warnings `array`
    * items [Issue](#issue)



## Definitions

### AdditionalServiceType
* AdditionalServiceType `string` (values: CHECKED_BAGS, MEALS, SEATS, OTHER_SERVICES): additional service type

### AircraftEntry
* AircraftEntry `object`
  * key `string`

### AircraftEquipment
* AircraftEquipment `object`: information related to the aircraft
  * code `string`: IATA aircraft code (http://www.flugzeuginfo.net/table_accodes_iata_en.php)

### BaggageAllowance
* BaggageAllowance `object`: baggageAllowance
  * quantity `integer`: Total number of units
  * weight `integer`: Weight of the baggage allowance
  * weightUnit `string`: Code to qualify unit as pounds or kilos

### CarrierEntry
* CarrierEntry `object`
  * key `string`

### Co2Emission
* Co2Emission `object`
  * cabin [TravelClass](#travelclass)
  * weight `integer`: Weight of Co2 emitted for the concerned segment
  * weightUnit `string`: Code to qualify unit as pounds or kilos

### Collection_Meta
* Collection_Meta `object`
  * count `integer`
  * oneWayCombinations `array`
    * items `object`
      * flightOfferIds `array`
        * items `string`
      * originDestinationId `string`

### Collection_Meta_Link
* Collection_Meta `object`
  * count `integer`
  * links `object`
    * first `string`
    * last `string`
    * next `string`
    * previous `string`
    * self `string`
    * up `string`

### Coverage
* Coverage `string` (values: MOST_SEGMENTS, AT_LEAST_ONE_SEGMENT, ALL_SEGMENTS): part of the trip covered by the travel class restriction (ALL_SEGMENTS if ommited)

### CurrencyEntry
* CurrencyEntry `object`
  * key **required** `string`

### DateTimeRange
* dateTimeRange `object`
  * date **required** `string`: Dates are specified in the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) YYYY-MM-DD format, e.g. 2018-12-25
  * dateWindow `string`: Either 1, 2 or 3 extra days around the local date (IxD for +/- x days - Ex: I3D), Either 1 to 3 days after the local date (PxD for +x days - Ex: P3D), or 1 to 3 days before the local date (MxD for -x days - Ex: M3D)
  * time `string`: Local time. hh:mm:ss format, e.g 10:30:00
  * timeWindow `string`: 1 to 12 hours around (both +and -) the local time. Possibly limited by the number of extra days when specified, i.e.  in some situations, it may not be used to exceed the maximum date range. [1-12]H format, e.g. 6H

### Dictionaries
* Dictionaries `object`
  * aircraft [AircraftEntry](#aircraftentry)
  * carriers [CarrierEntry](#carrierentry)
  * currencies [CurrencyEntry](#currencyentry)
  * locations [LocationEntry](#locationentry)

### Error_400
* Error_400 `object`
  * errors **required** `array`
    * items [Issue](#issue)

### Error_500
* Error_500 `object`
  * errors **required** `array`
    * items [Issue](#issue)

### ExtendedPricingOptions
* pricingOptions `object`: fare filter options
  * includedCheckedBagsOnly `boolean`: If true, returns the flight-offers with included checked bags only

### Extended_Price
* Price `object`: price information
  * additionalServices `array`
    * items `object`
      * amount `string`
      * type [AdditionalServiceType](#additionalservicetype)
  * billingCurrency `string`: Currency of the payment. It may be different than the requested currency
  * grandTotal `string`: Total amount paid by the user (including fees and selected additional services).
  * margin `string`: BOOK step ONLY - The price margin percentage (plus or minus) that the booking can tolerate. When set to 0, then no price magin is tolerated.
  * base `string`: Amount without taxes
  * currency `string`
  * fees `array`: List of applicable fees
    * items [Fee](#fee)
  * refundableTaxes `string`: The amount of taxes which are refundable
  * taxes `array`
    * items [Tax](#tax)
  * total `string`: Total amount paid by the user

### Fee
* Fee `object`: a fee
  * amount `string`
  * type [FeeType](#feetype)

### FeeType
* FeeType `string` (values: TICKETING, FORM_OF_PAYMENT, SUPPLIER): type of fee

### FlightEndPoint
* FlightEndPoint: departure or arrival information
  * iataCode `string`: [IATA airline codes](http://www.iata.org/publications/Pages/code-search.aspx)
  * terminal `string`: terminal name / number
  * at `string`: local date and time in [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) YYYY-MM-ddThh:mm:ss format, e.g. 2017-02-10T20:40:00

### FlightOffer
* Flight-offer `object`
  * disablePricing `boolean`: BOOK step ONLY - If true, allows to book a PNR without pricing. Only for the source "GDS"
  * id **required** `string`: Id of the flight offer
  * instantTicketingRequired `boolean`: If true, inform that a ticketing will be required at booking step.
  * itineraries `array`
    * items `object`
      * duration `string`: duration in [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) PnYnMnDTnHnMnS format, e.g. PT2H10M for a duration of 2h10m
      * segments **required** `array`
        * items [Segment](#segment)
  * lastTicketingDate `string`: If booked on the same day as the search (with respect to timezone), this flight offer is guaranteed to be thereafter valid for ticketing until this date (included). Unspecified when it does not make sense for this flight offer (e.g. no control over ticketing once booked). YYYY-MM-DD format, e.g. 2019-06-07
  * nonHomogeneous `boolean`: If true, upon completion of the booking, this pricing solution is expected to yield multiple records (a record contains booking information confirmed and stored, typically a Passenger Name Record (PNR), in the provider GDS or system)
  * numberOfBookableSeats `number`: Number of seats bookable in a single request. Can not be higher than 9.
  * oneWay `boolean`: If true, the flight offer fulfills only one originDestination and has to be combined with other oneWays to complete the whole journey.
  * paymentCardRequired `boolean`: If true, a payment card is mandatory to book this flight offer
  * price [Extended_Price](#extended_price)
  * pricingOptions `object`
    * fareType [PricingOptionsFareType](#pricingoptionsfaretype)
    * includedCheckedBagsOnly `boolean`: If true, returns the flight-offers with included checked bags only
    * noPenaltyFare `boolean`: If true, returns the flight-offers with no penalty fares only
    * noRestrictionFare `boolean`: If true, returns the flight-offers with no restriction fares only
    * refundableFare `boolean`: If true, returns the flight-offers with refundable fares only
  * source [FlightOfferSource](#flightoffersource)
  * travelerPricings `array`: Fare information for each traveler/segment
    * items `object`
      * associatedAdultId `string`: if type="HELD_INFANT", corresponds to the adult traveler's id who will share the seat
      * fareDetailsBySegment **required** `array`
        * items `object`: Fare details of the segment
          * additionalServices `object`
          * allotmentDetails `object`
          * brandedFare `string`: The name of the Fare Family corresponding to the fares. Only for the GDS provider and if the airline has fare families filled
          * cabin [TravelClass](#travelclass)
          * class `string`: The code of the booking class, a.k.a. class of service or Reservations/Booking Designator (RBD)
          * fareBasis `string`: Fare basis specifying the rules of a fare. Usually, though not always, is composed of the booking class code followed by a set of letters and digits representing other characteristics of the ticket, such as refundability, minimum stay requirements, discounts or special promotional elements.
          * includedCheckedBags [BaggageAllowance](#baggageallowance)
          * isAllotment `boolean`: True if the corresponding booking class is in an allotment
          * segmentId **required** `string`: Id of the segment
          * sliceDiceIndicator [SliceDiceIndicator](#slicediceindicator)
      * fareOption **required** [TravelerPricingFareOption](#travelerpricingfareoption)
      * price [Price](#price)
      * travelerId **required** `string`: Id of the traveler
      * travelerType **required** [TravelerType](#travelertype)
  * type **required** `string`: the resource name
  * validatingAirlineCodes `array`: This option ensures that the system will only consider these airlines.
    * items `string`

### FlightOfferSource
* FlightOfferSource `string` (values: GDS): source of the flight offer

### FlightSegment
* FlightSegment `object`: defining a flight segment; including both operating and marketing details when applicable
  * aircraft [AircraftEquipment](#aircraftequipment)
  * arrival [FlightEndPoint](#flightendpoint)
  * carrierCode `string`: providing the airline / carrier code
  * departure [FlightEndPoint](#flightendpoint)
  * duration `string`: stop duration in [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) PnYnMnDTnHnMnS format, e.g. PT2H10M
  * number `string`: the flight number as assigned by the carrier
  * operating [OperatingFlight](#operatingflight)
  * stops `array`: information regarding the different stops composing the flight segment. E.g. technical stop, change of gauge...
    * items [FlightStop](#flightstop)

### FlightStop
* FlightStop: details of stops for direct or change of gauge flights
  * duration `string`: stop duration in [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) PnYnMnDTnHnMnS format, e.g. PT2H10M
  * iataCode `string`: [IATA airline codes](http://www.iata.org/publications/Pages/code-search.aspx)
  * arrivalAt `string`: arrival at the stop in [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) YYYY-MM-ddThh:mm:ss format, e.g. 2017-02-10T20:40:00
  * departureAt `string`: departure from the stop in [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) YYYY-MM-ddThh:mm:ss format, e.g. 2017-02-10T20:40:00

### GetFlightOffersQuery
* getFlightOffersQuery `object`
  * currencyCode `string`: The currency code, as defined in [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217), to reflect the currency in which this amount is expressed.
  * originDestinations **required** `array`: Origins and Destinations must be properly ordered in time (chronological order in accordance with the timezone of each location) to describe the journey consistently. Dates and times must not be past nor more than 365 days in the future, according to provider settings.Number of Origins and Destinations must not exceed the limit defined in provider settings.
    * items [OriginDestination](#origindestination)
  * searchCriteria [SearchCriteria](#searchcriteria)
  * sources **required** `array`: Allows enable one or more sources. If present in the list, these sources will be called by the system.
    * items [FlightOfferSource](#flightoffersource)
  * travelers **required** `array`
    * items [Traveler](#traveler)

### Issue
* Issue `object`
  * code `integer`: an application-specific error code
  * detail `string`: explanation of the error
  * source `object`: an object containing references to the source of the error
    * example `string`: a string indicating an example of the right value
    * parameter `string`: a string indicating which URI query parameter caused the issue
    * pointer `string`: a JSON Pointer [RFC6901] to the associated entity in the request document
  * status `integer`: the HTTP status code applicable to this error
  * title `string`: a short summary of the error

### LocationEntry
* LocationEntry `object`
  * key **required** `string`

### LocationValue
* LocationValue `object`
  * cityCode `string`: City code associated to the airport
  * countryCode `string`: Country code of the airport

### OperatingFlight
* OperatingFlight `object`: information about the operating flight
  * carrierCode `string`: providing the airline / carrier code

### OriginDestination
* OriginDestination `object`
  * alternativeDestinationsCodes `array`: Set of alternative destination location, such as a city or an airport. Currently, only the locations defined in [IATA](http://www.iata.org/publications/Pages/code-search.aspx) are supported.
    * items `string`
  * alternativeOriginsCodes `array`: Set of alternative origin location, such as a city or an airport. Currently, only the locations defined in [IATA](http://www.iata.org/publications/Pages/code-search.aspx) are supported.
    * items `string`
  * arrivalDateTimeRange [DateTimeRange](#datetimerange)
  * departureDateTimeRange [DateTimeRange](#datetimerange)
  * destinationLocationCode `string`: Destination location, such as a city or an airport. Currently, only the locations defined in [IATA](http://www.iata.org/publications/Pages/code-search.aspx) are supported.
  * destinationRadius `number`: Include other possible locations around the point, located less than this distance in kilometers away. Max:300
  * excludedConnectionPoints `array`: List of excluded connections points. Any FlightOffer with these connections points will be present in response. Currently, only the locations defined in IATA are supported. Used only by the AMADEUS provider
    * items `string`
  * id `string`
  * includedConnectionPoints `array`: List of included connections points. When an includedViaPoints option is specified, all FlightOffer returned must at least go via this Connecting Point. Currently, only the locations defined in IATA are supported. Used only by the AMADEUS provider
    * items `string`
  * originLocationCode `string`: Origin location, such as a city or an airport. Currently, only the locations defined in [IATA](http://www.iata.org/publications/Pages/code-search.aspx) are supported.
  * originRadius `number`: Include other possible locations around the point, located less than this distance in kilometers away. Max:300

### OriginalFlightEndPoint
* OriginalFlightEndPoint `object`: departure or arrival information
  * iataCode `string`: [IATA airline codes](http://www.iata.org/publications/Pages/code-search.aspx)
  * terminal `string`: terminal name / number

### OriginalFlightStop
* OriginalFlightStop `object`: details of stops for direct or change of gauge flights
  * duration `string`: stop duration in [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) PnYnMnDTnHnMnS format, e.g. PT2H10M
  * iataCode `string`: [IATA airline codes](http://www.iata.org/publications/Pages/code-search.aspx)

### Price
* Price `object`
  * base `string`: Amount without taxes
  * currency `string`
  * fees `array`: List of applicable fees
    * items [Fee](#fee)
  * refundableTaxes `string`: The amount of taxes which are refundable
  * taxes `array`
    * items [Tax](#tax)
  * total `string`: Total amount paid by the user

### PricingOptionsFareType
* PricingOptionsFareType `array`: type of fare of the flight-offer
  * items `string` (values: PUBLISHED, NEGOTIATED, CORPORATE)

### SearchCriteria
* SearchCriteria `object`
  * addOneWayOffers `boolean`: This option allows activate the one-way combinable feature
  * additionalInformation `object`
    * brandedFares `boolean`: If true, returns the fare family name for each flight-offer which supports fare family
    * chargeableCheckedBags `boolean`: If true, returns the price of the first additional bag when the airline is an "Amadeus Ancillary Services" member.
  * allowAlternativeFareOptions `boolean`: This option allows to default to a standard fareOption if no offers are found for the selected fareOption.
  * excludeAllotments `boolean`: This option allows to exclude the isAllotment flag associated to a booking class in the search response when it exist.
  * flightFilters `object`
    * busSegmentAllowed `boolean`: This flag enable/disable filtering of bus segment
    * cabinRestrictions `array`: Restriction towards cabins.
      * items `object`
        * cabin [TravelClass](#travelclass)
        * coverage [Coverage](#coverage)
        * originDestinationIds `array`: The list of originDestination identifiers for which the cabinRestriction applies
          * items `string`
    * carrierRestrictions `object`: Restriction towards carriers.
      * blacklistedInEUAllowed `boolean`: This flag enable/disable filtering of blacklisted airline by EU. The list of the banned airlines is published in the Official Journal of the European Union, where they are included as annexes A and B to the Commission Regulation. The blacklist of an airline can concern all its flights or some specific aircraft types pertaining to the airline
      * excludedCarrierCodes `array`: This option ensures that the system will only consider these airlines.
        * items `string`
      * includedCarrierCodes `array`: This option ensures that the system will only consider these airlines.
        * items `string`
    * connectionRestriction `object`: Restriction towards number of connections.
      * airportChangeAllowed `boolean`: Allow to change airport during connection
      * maxNumberOfConnections `number`: The maximal number of connections for each itinerary. Value can be 0, 1 or 2.
      * technicalStopsAllowed `boolean`: This option allows the single segment to have one or more intermediate stops (technical stops).
    * crossBorderAllowed `boolean`: Allows to search a location outside the borders when a radius around a location is specified. Default is false.
    * maxFlightTime `number`: This option allows to modify the value for the Elapsed Flying Time (EFT) masterPricer option
    * moreOvernightsAllowed `boolean`: This flag enables/disables the possibility to have more overnight flights in Low Fare Search
    * railSegmentAllowed `boolean`: This flag enable/disable filtering of rail segment (TGV AIR, RAIL ...)
    * returnToDepartureAirport `boolean`: This option force to retrieve flight-offer with a departure and a return in the same airport
  * maxFlightOffers `number`: Maximum number of flight offers returned (Max 250)
  * maxPrice `integer`: maximum price per traveler. By default, no limit is applied. If specified, the value should be a positive number with no decimals
  * oneFlightOfferPerDay `boolean`: Requests the system to find at least one flight-offer per day, if possible, when a range of dates is specified. Default is false.
  * pricingOptions [ExtendedPricingOptions](#extendedpricingoptions)

### Segment
* Segment
  * blacklistedInEU `boolean`: When the flight has a marketing or/and operating airline that is identified as blacklisted by the European Commission. 
  * co2Emissions `array`: Co2 informations
    * items [Co2Emission](#co2emission)
  * id `string`: Id of the segment
  * numberOfStops `integer`: Number of stops
  * aircraft [AircraftEquipment](#aircraftequipment)
  * arrival [FlightEndPoint](#flightendpoint)
  * carrierCode `string`: providing the airline / carrier code
  * departure [FlightEndPoint](#flightendpoint)
  * duration `string`: stop duration in [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) PnYnMnDTnHnMnS format, e.g. PT2H10M
  * number `string`: the flight number as assigned by the carrier
  * operating [OperatingFlight](#operatingflight)
  * stops `array`: information regarding the different stops composing the flight segment. E.g. technical stop, change of gauge...
    * items [FlightStop](#flightstop)

### ServiceName
* ServiceName `string` (values: PRIORITY_BOARDING, AIRPORT_CHECKIN): type of service

### SliceDiceIndicator
* SliceDiceIndicator `string` (values: LOCAL_AVAILABILITY, SUB_OD_AVAILABILITY_1, SUB_OD_AVAILABILITY_2): slice and Dice indicator, such as Local Availability, Sub OnD(Origin and Destination) 1 Availability and Sub OnD 2 Availability

### Tax
* Tax `object`: a tax
  * amount `string`
  * code `string`

### TravelClass
* TravelClass `string` (values: ECONOMY, PREMIUM_ECONOMY, BUSINESS, FIRST): quality of service offered in the cabin where the seat is located in this flight. Economy, premium economy, business or first class

### Traveler
* Traveler `object`
  * associatedAdultId `string`: if type="HELD_INFANT", corresponds to the adult travelers's id who will share the seat
  * id **required** `string`
  * travelerType **required** [TravelerType](#travelertype)

### TravelerPricingFareOption
* TravelerPricingFareOption `string` (values: STANDARD, INCLUSIVE_TOUR, SPANISH_MELILLA_RESIDENT, SPANISH_CEUTA_RESIDENT, SPANISH_CANARY_RESIDENT, SPANISH_BALEARIC_RESIDENT, AIR_FRANCE_METROPOLITAN_DISCOUNT_PASS, AIR_FRANCE_DOM_DISCOUNT_PASS, AIR_FRANCE_COMBINED_DISCOUNT_PASS, AIR_FRANCE_FAMILY, ADULT_WITH_COMPANION, COMPANION): option specifying a group of fares, which may be valid under certain conditons

### TravelerType
* TravelerType `string` (values: ADULT, CHILD, SENIOR, YOUNG, HELD_INFANT, SEATED_INFANT, STUDENT): traveler type


