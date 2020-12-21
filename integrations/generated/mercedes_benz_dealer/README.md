# @datafire/mercedes_benz_dealer

Client library for Dealer

## Installation and Usage
```bash
npm install --save @datafire/mercedes_benz_dealer
```
```js
let mercedes_benz_dealer = require('@datafire/mercedes_benz_dealer').create();

.then(data => {
  console.log(data);
});
```

## Description

The Dealer API provides Dealer search functions.

## Actions

### countriesGET
This request returns the countries supported by the Dealer API


```js
mercedes_benz_dealer.countriesGET({}, context)
```

#### Input
* input `object`
  * page `integer`: The index of the page to be returned. If this parameter is omitted, the first page will be returned.
  * pageSize `integer`: The index of the page to be returned. If this parameter is omitted, the first page will be returned.

#### Output
* output [HalifiedCountries](#halifiedcountries)

### dealersGET
This request returns dealers (dealer, garage, retailer, etc.) for given parameters


```js
mercedes_benz_dealer.dealersGET({}, context)
```

#### Input
* input `object`
  * dealerIds `array`: Array of dealer ids. The dealer id is dealer’s business key, also known as GS Id. e.g. GS0000857,GS0017621
  * latitude `number`: The latitude geo coordinate.
  * longitude `number`: The longitude geo coordinate.
  * radiusValue `integer`: The radius value of the search area. The center of the search area is defined by geo coordinates. (latitude, longitude properties) If radiusValue and radiusUnit parameters are missing, then the default radius is 10 km.
  * radiusUnit `string` (values: M, KM, MILE): The radius unit of the search area. The center of the search area is defined by geo coordinates. (latitude, longitude properties) If radiusValue and radiusUnit parameters are missing, then the default radius is 10 km.
  * countryIsoCode `string`: The country of the dealer address defined as ISO two letter ID (e.g. DE, CH, CN, etc.)
  * city `string`: The city of the dealer address.
  * name `string`: A name of the dealer, the name filter will be applied to all Dealer names (e.g. legalName, nameAddition). You can also search for parts of Dealer names, e.g. the search term 'Niederlassung' will also match 'Niederlassung Stuttgart'.
  * brand `string` (values: MB, SMT): Filter by brand, valid values are:
  * productGroup `string` (values: PASSENGER-CAR, VAN): Filter by a product group
  * activity `string` (values: PARTS, SALES, SERVICE, USED-VEHICLES-TRADE): Filter by activity, valid actitvity values are:
  * fields `string`: Specifies which fields should be included in the result. If this filter is not used, per default all fields are returned. e.g. fields=dealers(dealerId,address(street,city))
  * page `integer`: The index of the page to be returned. If this parameter is omitted, the first page will be returned.
  * pageSize `integer`: The index of the page to be returned. If this parameter is omitted, the first page will be returned.

#### Output
* output [HalifiedDealers](#halifieddealers)

### dealerGET
This request returns dealers for given parameters


```js
mercedes_benz_dealer.dealerGET({
  "dealerId": ""
}, context)
```

#### Input
* input `object`
  * dealerId **required** `string`: The dealer id is dealer’s business key, also known as GS Id. e.g. GS0000857
  * fields `string`: Specifies which fields should be included in the result. If this filter is not used, per default all fields are returned. e.g. fields=dealerId,address(street,city)

#### Output
* output [Dealer](#dealer)



## Definitions

### ActivityOfAFunction
* ActivityOfAFunction `object`
  * code **required** `string`: The activity of the dealer, valid actitvity values are:
  * name **required** `string`: the corresponding activity name

### Address
* Address `object`
  * addressAddition `string`: address addition
  * city `string`: city
  * countryIsoCode `string`: ISO A2 country code
  * district `string`: district, area of city
  * street `string`: street and house number, if applicable
  * zipCode `string`: postal code

### Brand
* Brand `object`
  * code **required** `string`: brand qualifier
  * name **required** `string`: brand name

### BrandCode
* BrandCode `object`
  * brand **required** [Brand](#brand)

### CommunicationChannels
* CommunicationChannels `object`
  * general [General](#general)

### Country
* Country `object`
  * countryId **required** `string`: the country id
  * isoCode **required** `string`: the country iso code
  * name **required** `string`: the country name

### Dealer
* Dealer `object`: the representation of an dealer
  * _links **required** [SelfLink](#selflink)
  * address [Address](#address)
  * brandCodes `array`: network brand codes of the dealer, dealer numbers
    * items [BrandCode](#brandcode)
  * communication [CommunicationChannels](#communicationchannels)
  * dealerId **required** `string`: GSSN unique ID, main identifier
  * distance [TheDistance](#thedistance)
  * functions `array`: list of functions for the dealer
    * items [Function](#function)
  * geoCoordinates [GeoCoordinates](#geocoordinates)
  * legalName **required** `string`: legal name of the company
  * nameAddition `string`: name addition, country specific use
  * openingHours `array`: List of opening hours for each customer relevant function for
    * items [FunctionOpeningHours](#functionopeninghours)
  * region [RegionRepresentation](#regionrepresentation)

### DefaultLinks
* DefaultLinks `object`: default links
  * next [Link](#link)
  * previous [Link](#link)
  * self [Link](#link)

### Function
* Function `object`
  * activity **required** [ActivityOfAFunction](#activityofafunction)
  * brand **required** [Brand](#brand)
  * productGroup **required** [ProductGroupOfAFunction](#productgroupofafunction)

### FunctionOpeningHours
* FunctionOpeningHours `object`
  * function [Function](#function)
  * weekdays [Weekdays](#weekdays)

### General
* General `object`
  * email `string`: general email address
  * facebook `string`: general facebook URL
  * fax `string`: general fax number
  * googlePlus `string`: general googlePlus account name
  * mobile `string`: general mobile phone number
  * phone `string`: general phone number
  * twitter `string`: general twitter account name
  * website `string`: general website

### GeoCoordinates
* GeoCoordinates `object`
  * latitude **required** `number`: latitude - in decimal degrees
  * longitude **required** `number`: longitude - in decimal degrees

### HalifiedCountries
* HalifiedCountries `object`: countries and navigation links for additional results.
  * _links **required** [DefaultLinks](#defaultlinks)
  * countries `array`: countries
    * items [Country](#country)

### HalifiedDealers
* HalifiedDealers `object`: dealer with navigation links.
  * _links **required** [DefaultLinks](#defaultlinks)
  * dealers `array`: dealers
    * items [Dealer](#dealer)

### Link
* Link `object`: the representation of a link
  * href **required** `string`: the target of the link

### Periods
* Periods `object`
  * from **required** `string`: from
  * until **required** `string`: until

### ProductGroupOfAFunction
* ProductGroupOfAFunction `object`
  * code **required** `string`: The product group code, valid values are:
  * name **required** `string`: product group name

### RegionRepresentation
* RegionRepresentation `object`
  * region `string`: region
  * subRegion `string`: subregion

### SelfLink
* SelfLink `object`: self links
  * self [Link](#link)

### TheDistance
* TheDistance `object`
  * unit `string` (values: M, KM, MILE): unit of length
  * value **required** `number`: numeric amount of distance

### WeekdayInfo
* WeekdayInfo `object`
  * periods `array`: time periods
    * items [Periods](#periods)
  * status `string` (values: OPEN, CLOSED): status (OPEN or CLOSED)

### Weekdays
* Weekdays `object`: opening hours for a week, represented by a map where the key
  * FRIDAY [WeekdayInfo](#weekdayinfo)
  * MONDAY [WeekdayInfo](#weekdayinfo)
  * SATURDAY [WeekdayInfo](#weekdayinfo)
  * SUNDAY [WeekdayInfo](#weekdayinfo)
  * THURSDAY [WeekdayInfo](#weekdayinfo)
  * TUESDAY [WeekdayInfo](#weekdayinfo)
  * WEDNESDAY [WeekdayInfo](#weekdayinfo)


