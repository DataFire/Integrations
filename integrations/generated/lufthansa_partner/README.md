# @datafire/lufthansa_partner

Client library for LH Partner

## Installation and Usage
```bash
npm install --save @datafire/lufthansa_partner
```
```js
let lufthansa_partner = require('@datafire/lufthansa_partner').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

lufthansa_partner.baggage.baggagetripandcontact.searchID.get({}).then(data => {
  console.log(data);
})
```

## Description



## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
lufthansa_partner.oauthCallback({
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
lufthansa_partner.oauthRefresh(null, context)
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

### baggage.baggagetripandcontact.searchID.get
Retrieve passenger trip, contact and baggage details. This service is only accessible for LH privileged partners


```js
lufthansa_partner.baggage.baggagetripandcontact.searchID.get({
  "searchID": "",
  "Accept": ""
}, context)
```

#### Input
* input `object`
  * searchID **required** `string`: Bag tag number, PNR, boarding card or FQTV ID
  * Accept **required** `string`: http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")

#### Output
* output `string`

### offers.fares.allfares.get
Retrieves all available fares for a specific Origin & Destination pair on a given date. Available fares are: One-way and Return for 4U. Return only for OS


```js
lufthansa_partner.offers.fares.allfares.get({
  "catalogues": "",
  "origin": "",
  "destination": "",
  "travel-date": ""
}, context)
```

#### Input
* input `object`
  * catalogues **required** `string`: Specifies in which catalogue the fares need to be searched (e.g.'4U;OS').
  * origin **required** `string`: Enter journey origin (e.g 'FRA').
  * destination **required** `string`: Enter journey destination (e.g 'MAD').
  * travel-date **required** `string`: Enter journey travel-date (e.g 2016-10-20)
  * return-date `string`: Enter journey return-date (e.g 2016-10-31)'.
  * cabin-class `string`: Enter the required cabin class (e.g econonmy, business etc.). (Acceptable values are: "", "economy", "premium economy", "business", "first")
  * travelers `string`: Specifies the type and number of travelers (e.g. '(adult=2;child=2;infant=1)') For LH only (adult=1) possible.
  * fare-family `string`: Mandatory for 4U. Specifies, which fares to be returned, such as basic, smart, best, smartflex, bestflex . (Acceptable values are: "", "basic", "smart", "best", "smartflex", "bestflex")
  * trackingid `string`: Austrian Airlines only - specify the web tracking id to be used in OS Deep link.
  * Accept `string`: Mandatory http header:  application/xml or application/json

#### Output
* output `string`

### offers.fares.bestfares.get
Retrieve best fares for the requested journey across multiple days or multiple months.


```js
lufthansa_partner.offers.fares.bestfares.get({
  "catalogues": "",
  "origin": "",
  "destination": "",
  "travel-date": "",
  "trip-duration": "",
  "range": "",
  "Accept": ""
}, context)
```

#### Input
* input `object`
  * catalogues **required** `string`: Search fares from these carriers' catalogues (e.g. '4U;OS;LH')
  * origin **required** `string`: Journey origin. 3-letter IATA airport code (e.g. 'FRA')
  * destination **required** `string`: Journey destination. 3-letter IATA airport code (e.g. 'MAD')
  * travel-date **required** `string`: Journey travel-date (YYYY-MM-DD)
  * trip-duration **required** `string`: Trip duration in days (e.g. '7')
  * range **required** `string`: Fare range: 'byday' or 'bymonth' (Acceptable values are: "byday", "bymonth")
  * Accept **required** `string`: http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")
  * cabin-class `string`: Cabin class: 'economy', 'premium_economy', 'business', 'first' (Acceptable values are: "", "economy", "premium_economy", "business", "first")
  * country `string`: Country code of requestor. 2-letter ISO 3166-1 country code (e.g. 'de')
  * trackingid `string`: Austrian Airlines only - specify the web tracking id to be used in OS Deep link.
  * fare-family `string`: Fare family: basic, smart, best, smartflex, bestflex - Germanwings only (Acceptable values are: "", "basic", "smart", "best", "smartflex", "bestflex")

#### Output
* output `string`

### offers.fares.deeplink.get
Returns valid deep links for the provided input parameters


```js
lufthansa_partner.offers.fares.deeplink.get({
  "catalogues": "",
  "trackingid": "",
  "country": "",
  "lang": "",
  "Accept": ""
}, context)
```

#### Input
* input `object`
  * catalogues **required** `string`: Carrier for which the deep link will be created (e.g. 'LH')
  * trackingid **required** `string`: Deep link tracking ID
  * country **required** `string`: 2-letter ISO 3166-1 country code
  * lang **required** `string`: 2-letter ISO 3166-1 language code
  * Accept **required** `string`: http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")
  * origin `string`: Journey origin. 3-letter IATA airport or city code (e.g. 'FRA')
  * origin-name `string`: Journey origin airport or city name (e.g. 'frankfurt')
  * destination `string`: Journey destination. 3-letter IATA airport or city code (e.g. 'MAD')
  * destination-name `string`: Journey destination airport or city name (e.g. 'madrid')
  * travel-date `string`: Journey travel-date (YYYY-MM-DD)
  * return-date `string`: Journey return-date (YYYY-MM-DD)
  * cabin-class `string`: Cabin class: 'economy', 'premium_economy', 'business', 'first' (Acceptable values are: "", "economy", "premium_economy", "business", "first")
  * outbound-segments `string`: Outbound flight segments in the sequence of travel (e.g. 'LH096;LH480')
  * return-segments `string`: Flight segments in the sequence of travel (e.g. 'LH7465;LH431')
  * travelers `string`: Type and number of travelers (e.g. '(adult=2;child=2;infant=1)')
  * fare `string`: Travel fare (e.g. '1341.45')
  * net-fare `string`: Travel net fare. Total fare less taxes and charges (e.g. '1140')
  * fare-currency `string`: Fare currency (e.g. 'EUR')
  * partnerid `string`: Deep link partner id (e.g. '1247')
  * encryption-key `string`: Deep link encryption-key

#### Output
* output `string`

### offers.fares.deeplink.ffp.get
Returns valid LH deep links (FFP - links to flight selection screen on LH.COM)


```js
lufthansa_partner.offers.fares.deeplink.ffp.get({
  "catalogues": "",
  "origin": "",
  "destination": "",
  "travel-date": "",
  "trackingid": "",
  "country": "",
  "lang": "",
  "Accept": ""
}, context)
```

#### Input
* input `object`
  * catalogues **required** `string`: Carrier for which the deep link will be created (e.g. 'LH')
  * origin **required** `string`: Journey origin. 3-letter IATA airport or city code (e.g. 'FRA')
  * destination **required** `string`: Journey destination. 3-letter IATA airport or city code (e.g. 'MAD')
  * travel-date **required** `string`: Journey travel-date (YYYY-MM-DD)
  * trackingid **required** `string`: Deep link tracking ID
  * country **required** `string`: 2-letter ISO 3166-1 country code
  * lang **required** `string`: 2-letter ISO 3166-1 language code
  * Accept **required** `string`: http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")
  * return-date `string`: Journey return-date (YYYY-MM-DD)
  * cabin-class `string`: Cabin class: 'economy', 'premium_economy', 'business', 'first' (Acceptable values are: "", "economy", "premium_economy", "business", "first")
  * travelers `string`: Type and number of travelers (e.g. '(adult=2;child=2;infant=1)')
  * partnerid `string`: Deep link partner id (e.g. '1247')
  * encryption-key `string`: Deep link encryption-key

#### Output
* output `string`

### offers.fares.deeplink.itco.get
Returns valid LH deep links (ITCO - links to shopping cart on LH.COM)


```js
lufthansa_partner.offers.fares.deeplink.itco.get({
  "catalogues": "",
  "origin": "",
  "destination": "",
  "travel-date": "",
  "outbound-segments": "",
  "fare": "",
  "fare-currency": "",
  "trackingid": "",
  "country": "",
  "lang": "",
  "Accept": ""
}, context)
```

#### Input
* input `object`
  * catalogues **required** `string`: Carrier for which the deep link will be created (e.g. 'LH')
  * origin **required** `string`: Journey origin. 3-letter IATA airport or city code (e.g. 'FRA')
  * destination **required** `string`: Journey destination. 3-letter IATA airport or city code (e.g. 'MAD')
  * travel-date **required** `string`: Journey travel-date (YYYY-MM-DD)
  * outbound-segments **required** `string`: Outbound flight segments in the sequence of travel (e.g. 'LH096;LH480')
  * fare **required** `string`: Travel fare (e.g. '1341.45')
  * fare-currency **required** `string`: Fare currency (e.g. 'EUR')
  * trackingid **required** `string`: Deep link tracking ID
  * country **required** `string`: 2-letter ISO 3166-1 country code
  * lang **required** `string`: 2-letter ISO 3166-1 language code
  * Accept **required** `string`: http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")
  * return-date `string`: Journey return-date (YYYY-MM-DD)
  * cabin-class `string`: Cabin class: 'economy', 'premium_economy', 'business', 'first' (Acceptable values are: "", "economy", "premium_economy", "business", "first")
  * return-segments `string`: Flight segments in the sequence of travel (e.g. 'LH7465;LH431')
  * travelers `string`: Type and number of travelers (e.g. '(adult=2;child=2;infant=1)')
  * net-fare `string`: Travel net fare. Total fare less taxes and charges (e.g. '1140')
  * partnerid `string`: Deep link partner id (e.g. '1247')
  * encryption-key `string`: Deep link encryption-key

#### Output
* output `string`

### Fares
Retrieve all available fares per fare family for a specific Origin & Destination on a given date


```js
lufthansa_partner.Fares({
  "catalogues": "",
  "segments": "",
  "carriers": "",
  "Accept": ""
}, context)
```

#### Input
* input `object`
  * catalogues **required** `string`: Search fares from these carriers' catalogues - currently active for Germanwings only  (4U)
  * segments **required** `string`: Journey details  e.g. (origin=TXL;destination=CGN;travel-date=2016-12-15;return-date=2016-12-20;cabin=Economy)
  * carriers **required** `string`: Include fares for these carriers e.g. ('4U;LH')
  * Accept **required** `string`: http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")
  * travelers `string`: Type and number of travelers e.g. (adult=1;child=1;infant=1)
  * fare-types `string`: Fares family: basic,smart, best, smartflex, bestflex - Germanwings only (Acceptable values are: "", "basic", "smart", "best", "smartflex", "bestflex")

#### Output
* output `string`

### offers.fares.lowestfares.get
Retrieve lowest fare for a specific Origin & Destination pair on a given date. Available fares are: One-way and Return for 4U. Return only for OS & LH


```js
lufthansa_partner.offers.fares.lowestfares.get({
  "catalogues": "",
  "origin": "",
  "destination": "",
  "travel-date": "",
  "Accept": ""
}, context)
```

#### Input
* input `object`
  * catalogues **required** `string`: Search fares from these carriers' catalogues e.g. '4U;OS;LH'
  * origin **required** `string`: Journey origin. 3-letter IATA aiport code e.g. 'FRA'
  * destination **required** `string`: Journey destination. 3-letter IATA airport code e.g. 'MAD'
  * travel-date **required** `string`: Journey travel-date YYYY-MM-DD
  * Accept **required** `string`: http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")
  * return-date `string`: Journey return-date - mandatory for OS and LH searches YYYY-MM-DD
  * cabin-class `string`: Cabin class: 'economy', 'premium_economy', 'business', 'first' (Acceptable values are: "", "economy", "premium_economy", "business", "first")
  * travelers `string`: Type and number of travelers e.g. '(adult=2;child=2;infant=1)'. For LH only (adult=1) possible
  * fare-family `string`: Fare family: basic, smart, best, smartflex, bestflex - Germanwings only (Acceptable values are: "", "basic", "smart", "best", "smartflex", "bestflex")
  * country `string`: Country code of requestor. 2-letter ISO 3166-1 country code (e.g. 'de')

#### Output
* output `string`

### offers.fares.subscriptions.get
Create a subscription for best price O&D. Receive regular updates on lowest fares


```js
lufthansa_partner.offers.fares.subscriptions.get({
  "origin": "",
  "destination": "",
  "cabin-class": "",
  "trip-duration": "",
  "email": "",
  "lang": "",
  "Accept": ""
}, context)
```

#### Input
* input `object`
  * origin **required** `string`: Journey origin. 3-leter IATA airport code (e.g. 'FRA')
  * destination **required** `string`: Journey destination. 3-letter IATA airport code (e.g. 'MAD')
  * cabin-class **required** `string`: Cabin class: 'economy', 'premium_economy', 'business', 'first' (Acceptable values are: "", "economy", "premium_economy", "business", "first")
  * trip-duration **required** `string`: Trip duration in days (e.g. '7')
  * email **required** `string`: Email Address')
  * lang **required** `string`: 2-letter ISO 3166-1 language code
  * Accept **required** `string`: http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")
  * country `string`: 2-letter ISO 3166-1 country code
  * trackingid `string`: Tracking parameter

#### Output
* output `string`

### offers.ond.route.origin.destination.get
Returns LH route origin & destination information


```js
lufthansa_partner.offers.ond.route.origin.destination.get({
  "origin": "",
  "destination": "",
  "Accept": ""
}, context)
```

#### Input
* input `object`
  * origin **required** `string`: Enter either the orgin city or orgin country code (e.g 'FRA' or 'DE'). Enter '*' for all
  * destination **required** `string`: Enter either the destination city or country code (e.g 'MAD' or 'ES'). Enter '*' for all
  * Accept **required** `string`: Mandatory http header:  application/xml or application/json
  * catalogues `string`: Carrier for which the OND will be retrieved (e.g. 'LH')
  * limit `string`: Number of records returned per request. Defaults to 20, maximum is 100 (if a value bigger than 100 is given, 100 will be taken)
  * offset `string`: Number of records skipped. Defaults to 0

#### Output
* output `string`

### offers.ond.status.get
Returns LH network route status information. Search for recently added or retired routes


```js
lufthansa_partner.offers.ond.status.get({
  "Accept": ""
}, context)
```

#### Input
* input `object`
  * Accept **required** `string`: Mandatory http header:  application/xml or application/json
  * catalogues `string`: Carrier for which the OND will be retrieved (e.g. 'LH')
  * new-routes `string`: Enter if newly added routes should be returned in the response. (Acceptable values are: "", "true", "false")
  * old-routes `string`: Enter if old (deleted) routes should be returned in the response. (Acceptable values are: "", "true", "false")

#### Output
* output `string`

### offers.ond.top.get
Returns LH Top routes per country or across all countries


```js
lufthansa_partner.offers.ond.top.get({
  "Accept": ""
}, context)
```

#### Input
* input `object`
  * Accept **required** `string`: Mandatory http header:  application/xml or application/json
  * catalogues `string`: Carrier for which the OND will be retrieved (e.g. 'LH')
  * origin `string`: Enter the origin country code (e.g. 'DE'). Leave empty to search Top OND across all countries

#### Output
* output `string`

### Orders
Retrieve order by ID and optionally name. This service is only accessible for LH privileged partners


```js
lufthansa_partner.Orders({
  "orderID": "",
  "Accept": "",
  "name": ""
}, context)
```

#### Input
* input `object`
  * orderID **required** `string`: Unique order identifier
  * Accept **required** `string`: http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")
  * name **required** `string`: Surname of traveller

#### Output
* output `string`

### preflight.autocheckin.ticketnumber.put
Trigger an automatic check-in given a ticket number. This service is only accessible for LH privileged partners


```js
lufthansa_partner.preflight.autocheckin.ticketnumber.put({
  "ticketnumber": "",
  "emailAddress": "",
  "Accept": ""
}, context)
```

#### Input
* input `object`
  * ticketnumber **required** `string`: Ticket number
  * emailAddress **required** `string`: Email address
  * Accept **required** `string`: http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")

#### Output
* output `string`

### promotions.priceoffers.flights.ond.origin.destination.get
Retrieve a best price offer given an origin and destination.


```js
lufthansa_partner.promotions.priceoffers.flights.ond.origin.destination.get({
  "origin": "",
  "destination": "",
  "departureDate": "",
  "returnDate": ""
}, context)
```

#### Input
* input `object`
  * origin **required** `string`: Departure city. 3-letter IATA city code
  * destination **required** `string`: Destination city. 3-letter IATA city code
  * departureDate **required** `string`: Departure date in local time (YYYY-MM-DD)
  * returnDate **required** `string`: Return date in local time (YYYY-MM-DD)
  * service `string`: Optional parameter.

#### Output
* output `string`

### references.seatdetails.aircraftCode.cabinCode.get
A description of all available seat details by aircraft type. You can retrieve the full set or details for a particular aircraft type.


```js
lufthansa_partner.references.seatdetails.aircraftCode.cabinCode.get({
  "aircraftCode": "",
  "Accept": "",
  "cabinCode": ""
}, context)
```

#### Input
* input `object`
  * aircraftCode **required** `string`: Aircraft type. 3-character IATA equipment code
  * Accept **required** `string`: http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")
  * cabinCode **required** `string`: Cabin class: M, E, C, F (Acceptable values are: "", "M", "E", "C", "F")
  * lang `string`: 2-letter ISO 3166-1 language code

#### Output
* output `string`



## Definitions

** No definitions **
