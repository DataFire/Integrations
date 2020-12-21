# @datafire/mastercard_locations

Client library for Locations API

## Installation and Usage
```bash
npm install --save @datafire/mastercard_locations
```
```js
let mastercard_locations = require('@datafire/mastercard_locations').create();

.then(data => {
  console.log(data);
});
```

## Description

The Locations API provides access to MasterCard's ATM and Merchant location database

## Actions

### atms.v1.atm.get
Returns detailed information about an ATM location.  This information can be used to display ATMs on a map, provide driving directions, or show special ATM features.



```js
mastercard_locations.atms.v1.atm.get({
  "PageOffset": 0,
  "PageLength": 0
}, context)
```

#### Input
* input `object`
  * PageOffset **required** `integer`: Zero-based offset where the response will start. The actual start position is this value +1. An offset of 10 starts at item 11. Combined with the PageLength option this allows pagination to be supported through the service requests.
  * PageLength **required** `integer`: Maximum number of items to retrieve within the current "page" of results.
  * AddressLine1 `string`: Line 1 of the street address for the merchant location.  Usually includes the street number and name. This parameter is ignored if latitude and longitude are provided. If you provide this parameter you must also provide the Country parameter and either City parameter or PostalCode parameter.
  * AddressLine2 `string`: Line 2 of the street address usually an apartment number or suite number. This parameter is used rarely and is ignored if latitude and longitude are provided. If you provide this parameter you must also provide the Country parameter and either City parameter or PostalCode parameter.
  * City `string`: The name of the city for a merchant location.  This parameter is ignored if latitude and longitude are provided. If you provide this parameter you must also provide the Country parameter.
  * CountrySubdivision `string`: The state or province for a merchant location (only supported for US and Canada locations).  This parameter is ignored if latitude and longitude are provided. If you provide this parameter you must also provide the Country parameter.
  * PostalCode `string`: The zip code or postal code for a merchant location.  This parameter is ignored if latitude and longitude are provided. If you provide this parameter you must also provide the Country parameter.
  * Country `string`: Any three digit country code for an ATM location.  Valid values are Three digit alpha country code as defined in ISO 3166-1.  This parameter is ignored if latitude and longitude are provided. This parameter is required if any other address information is provided including AddressLine1 AddressLine2 City PostalCode or CountrySubdivision.
  * Latitude `number`: The latitude of a merchant location.  If latitude is provided longitude must also be provided.
  * Longitude `number`: The longitude of a merchant location.  If longitude is provided latitude must also be provided.
  * DistanceUnit `string`: Indicates the unit for the radius as well as the units of the distance of each location from the basepoint in the response.
  * Radius `integer`: This is the radius from the search point in the distance unit you set.  For example if you want to search for locations within 50 miles of a certain point you would set DistanceUnit=mile and Radius=50.  This parameter is ignored in non-geocoded countries.
  * SupportEMV `integer`: This indicates whether the ATM should have the ability to read chip cards or not.
  * InternationalMaestroAccepted `integer`: This field will provide ATM Terminals which can still process Maestro transactions but are not yet EMV chip reader enabled. Information available only for USA and Argentina till October 2014.

#### Output
* output [AtmsResponse](#atmsresponse)

### atms.v1.country.get
Returns countries with valid ATM locations.



```js
mastercard_locations.atms.v1.country.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [CountriesResponse](#countriesresponse)

### atms.v1.countrysubdivision.get
Returns country subdivisions that have ATM locations.  A country subdivision is a segment within a country (ex  state or province). Country subdivisions are only available for the US and Canada.



```js
mastercard_locations.atms.v1.countrysubdivision.get({
  "Country": ""
}, context)
```

#### Input
* input `object`
  * Country **required** `string`: Any three digit country code as defined in ISO 3166-1.  "USA" or "CAN"

#### Output
* output [CountrySubdivisionResponse](#countrysubdivisionresponse)

### merchants.v1.category.get
Returns a list of all merchant categories for contactless and cash back merchants (example:  Airline, Retail, etc.).



```js
mastercard_locations.merchants.v1.category.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [CategoriesResponse](#categoriesresponse)

### merchants.v1.country.get
Returns countries that have Merchants offering the following services: accept contactless-enabled cards and devices, allow customers to add money to an eligible MasterCard or Maestro prepaid card, issue MasterCard Prepaid Travel cards, offer cash at checkout when paying with a Debit MasterCard or Maestro Card.



```js
mastercard_locations.merchants.v1.country.get({
  "details": ""
}, context)
```

#### Input
* input `object`
  * details **required** `string`: This is the type of merchant location. Options  "acceptance.paypass" "topup.repower"  "products.prepaidtravelcard"  and "offers.easysavings"

#### Output
* output [CountriesResponse](#countriesresponse)

### merchants.v1.countrysubdivision.get
Returns country subdivisions that have Merchants offering the following services: accept contactless-enabled cards and devices, allow customers to add money to an eligible MasterCard or Maestro prepaid card, issue MasterCard Prepaid Travel cards, offer cash at checkout when paying with a Debit MasterCard or Maestro Card. A country subdivision is a segment within a country (ex  state or province).  Please note country subdivisions are only available for the US and Canada.



```js
mastercard_locations.merchants.v1.countrysubdivision.get({
  "details": "",
  "country": ""
}, context)
```

#### Input
* input `object`
  * details **required** `string`: This is the type of merchant location. Options  "acceptance.paypass" "topup.repower"  "products.prepaidtravelcard"  and "offers.easysavings"
  * country **required** `string`: Any three digit country code as defined in ISO 3166-1. For example "USA or "CAN"

#### Output
* output [CountrySubdivisionResponse](#countrysubdivisionresponse)

### merchants.v1.merchant.get
Returns merchant location information for merchants offering the following services: accept contactless-enabled cards and devices, allow customers to add money to an eligible MasterCard or Maestro prepaid card, issue MasterCard Prepaid Travel cards, participate in the MasterCard Easy Savings program, and offer cash at checkout when paying with a Debit MasterCard or Maestro Card.



```js
mastercard_locations.merchants.v1.merchant.get({
  "Details": "",
  "PageOffset": 0,
  "PageLength": 0
}, context)
```

#### Input
* input `object`
  * Details **required** `string`: Type of merchant location. Options are "acceptance.paypass" "topup.repower" "products.prepaidtravelcard" "offers.easysavings" and "features.cashback". Cash Back is currently only available in the US.
  * PageOffset **required** `integer`: Zero-based offset where the response will start. The actual start position is this value +1. An offset of 10 starts at item 11. Combined with the PageLength option this allows pagination to be supported through the service requests.
  * PageLength **required** `integer`: Maximum number of items to retrieve within the current "page" of results.
  * Category `string`: Category of the merchant location. See the Categories (Merchant) resource for a list of valid categories. This parameter is only valid for merchant queries with Details = "acceptance.paypass" or "features.cashback".
  * AddressLine1 `string`: Line 1 of the street address for the merchant location.  Usually includes the street number and name. This parameter is ignored if latitude and longitude are provided. If you provide this parameter you must also provide the Country parameter and either City parameter or PostalCode parameter.
  * AddressLine2 `string`: Line 2 of the street address usually an apartment number or suite number. This parameter is used rarely and is ignored if latitude and longitude are provided. If you provide this parameter you must also provide the Country parameter and either City parameter or PostalCode parameter.
  * City `string`: Name of the city for a merchant location.  This parameter is ignored if latitude and longitude are provided. If you provide this parameter you must also provide the Country parameter.
  * CountrySubdivision `string`: State or province for a merchant location (only supported for US and Canada locations).  This parameter is ignored if latitude and longitude are provided. If you provide this parameter you must also provide the Country parameter.
  * PostalCode `string`: Zip code or postal code for a merchant location.  This parameter is ignored if latitude and longitude are provided. If you provide this parameter you must also provide the Country parameter.
  * Country `string`: Any three digit country code for an ATM location.  Valid values are Three digit alpha country code as defined in ISO 3166-1.  This parameter is ignored if latitude and longitude are provided. This parameter is required if any other address information is provided including AddressLine1 AddressLine2 City PostalCode or CountrySubdivision. By default we supply ATM location data for United States ATMs for up to twenty-five records per request.
  * Latitude `number`: Latitude of a merchant location.  If latitude is provided longitude must also be provided.
  * Longitude `number`: Longitude of a merchant location.  If longitude is provided latitude must also be provided.
  * DistanceUnit `string`: Indicates the unit for the radius as well as the units of the distance of each location from the basepoint in the response.
  * Radius `integer`: This is the radius from the search point in the distance unit you set.  For example if you want to search for locations within 50 miles of a certain point you would set DistanceUnit=mile and Radius=50.  This parameter is ignored in non-geocoded countries.
  * OfferMerchantID `string`: Unique identifier that represents the merhcant sponsor of an offer. Any valid merchant ID.

#### Output
* output [MerchantsResponse](#merchantsresponse)



## Definitions

### Acceptance
* Acceptance `object`
  * PayPass [PayPass](#paypass)

### Address
* Address `object`
  * City `string`: The name of the city for an ATM location.
  * Country [Country](#country)
  * CountrySubdivision [CountrySubdivision](#countrysubdivision)
  * Line1 `string`: Line 1 of the street address for the merchant location.  Usually includes the street number and name.
  * Line2 `string`: Line 2 of the street address usually an apartment number or suite number.
  * PostalCode `string`: The zip code or postal code for an ATM location.

### Atm
* Atm `object`
  * AccessFees `string`: This value indicates under what conditions access fees are charged. Options are UNKNOWN, DOMESTIC, INTERNATIONAL, DOMESTIC_AND_INTERNATIONAL, NO_FEE.
  * Availability `string`: This value indicates the availability hours of the ATM. Options are UNKNOWN, ALWAYS_AVAILABLE, BUSINESS_HOURS, IRREGULAR_HOURS.
  * Camera `string`: This value indicates whether or not a security camera is present or near ATM. Options are UNKNOWN, YES, NO.
  * HandicapAccessible `string`: This value indicates whether or not the ATM is accessible by wheelchair. Options are UNKNOWN, YES, NO.
  * InternationalMaestroAccepted `integer`: This field will provide ATM Terminals which can still process Maestro transactions but are not yet EMV chip reader enabled. Information available only for USA and Argentina till October 2014. 1=Yes.
  * Location [Location](#location)
  * Owner `string`: This is the DBA name of the financial institution affiliate or independent service organization.
  * SharedDeposit `string`: This value indicates whether or not the ATM participates in the MasterCard Shared Deposit network. Options are YES or NO.
  * Sponsor `string`: This is the legal or business name of the entity that sponsors the owner of the ATM into the MasterCard network.
  * SupportEMV `integer`: This indicates whether the ATM has the ability to read chip cards or not. Options are 1 = Yes 2 = No or Empty = Unknown.
  * SurchargeFreeAlliance `string`: This value indicates whether or not the ATM participates in the MasterCard Shared (only) Surcharge Free Alliance network. Options are YES or NO.
  * SurchargeFreeAllianceNetwork `string`: This value indicates whether or not the ATM participates in the MasterCard Shared (only) Surcharge Free Alliance network. Options are DOES_NOT_PARTICIPATE_IN_SFA, ALLPOINT_PREPAID, MONEYPASS_DEBIT, and ALL_SURCHARGE_FREE.

### Atms
* Atms `object`
  * Atm `array`
    * items [Atm](#atm)
  * PageOffset `string`: Zero-based offset where the response will start. The actual start position is this value +1. An offset of 10 starts at item 11. Combined with the PageLength option this allows pagination to be supported through the service requests.
  * TotalCount `integer`: This is the total number of ATMs that match your criteria.

### AtmsResponse
* AtmsResponse `object`
  * Atms [Atms](#atms)

### Cashback
* Cashback `object`
  * MaximumAmount `integer`: Maximum cashback amount permitted at the location.

### Categories
* Categories `object`
  * Category `array`
    * items `string`: Merchant's category.

### CategoriesResponse
* CategoriesResponse `object`
  * Categories [Categories](#categories)

### Countries
* Countries `object`
  * Country `array`
    * items [Country](#country)

### CountriesResponse
* CountriesResponse `object`
  * Countries [Countries](#countries)

### Country
* Country `object`
  * Code `string`: Three digit alpha country code as defined in ISO 3166-1.
  * Geocoding `boolean`: Boolean which indicates if the country is geocoded. TRUE or FALSE
  * Name `string`: Name of the country.

### CountrySubdivision
* CountrySubdivision `object`
  * Code `string`: Abbreviated code for the state or province.
  * Name `string`: Name of the state or province for an ATM location.

### CountrySubdivisionResponse
* CountrySubdivisionResponse `object`
  * CountrySubdivisions [CountrySubdivisions](#countrysubdivisions)

### CountrySubdivisions
* CountrySubdivisions `object`
  * CountrySubdivision `array`
    * items [CountrySubdivision](#countrysubdivision)

### Error
* Error `object`
  * ReasonCode `string`: Identify the reason for the error.
  * Source `string`: Unique identifier that attempts to define the field in error when available.  If a specific field can't be identified System will be returned.

### ErrorResponse
* ErrorResponse `object`
  * Errors [Errors](#errors)

### Errors
* Errors `object`
  * Error `array`
    * items [Error](#error)

### Features
* Features `object`
  * Cashback [Cashback](#cashback)

### Location
* Location `object`
  * Address [Address](#address)
  * Distance `number`: This is the numerical value for the distance from the provided location to the selected ATM.
  * DistanceUnit `string`: This is the unit of measure value for the distance from the provided location to the selected ATM. Options are KILOMETER and MILE.
  * LocationType [LocationType](#locationtype)
  * Name `string`: This is the name of the ATM location
  * Point [Point](#point)

### LocationType
* LocationType `object`
  * AirportCode `string`: Airport code is a 3 digit field. This is an optional field and will only be returned if Atms.Atm.Location.LocationType.Type=AIRPORT
  * Type `string`: Type of location for the ATM. Options are OTHER, AIRPORT, HOSPITAL, FINANCIAL_INSTITUTION.

### Merchant
* Merchant `object`
  * Acceptance [Acceptance](#acceptance)
  * Category `string`: Merchant's category.
  * Features [Features](#features)
  * Id `string`: Numerical merchant identifier.
  * Location [Location](#location)
  * MerchantOfferId `string`: Merchant's Easy Savings Offer Id
  * Name `string`: Name of the merchant
  * PhoneNumber `string`: Merchant's phone number
  * Products [Products](#products)
  * Topup [Topup](#topup)
  * WebsiteUrl `string`: Merchant's website URL address.

### Merchants
* Merchants `object`
  * Merchant `array`
    * items [Merchant](#merchant)
  * PageOffset `string`: Zero-based offset where the response will start. The actual start position is this value +1. An offset of 10 starts at item 11. Combined with the PageLength option this allows pagination to be supported through the service requests.
  * TotalCount `integer`: This is the total number of ATtms that match your criteria.

### MerchantsResponse
* MerchantsResponse `object`
  * Merchants [Merchants](#merchants)

### PayPass
* PayPass `object`
  * Concession `boolean`: Boolean value which indicates if the concession area is equipped with a PayPass card reader.
  * DriveThru `boolean`: Boolean value which indicates if the drive thru is equipped with a PayPass card reader.
  * FuelPump `boolean`: Boolean value which indicates if the fuel pump is equipped with a PayPass card reader.
  * Pharmacy `boolean`: Boolean value which indicates if the pharmacy is equipped with a PayPass card reader.
  * Register `boolean`: Boolean value which indicates if the register is equipped with a PayPass card reader.
  * Ticketing `boolean`: Boolean value which indicates if the ticketing area is equipped with a PayPass card reader.
  * TollBooth `boolean`: Boolean value which indicates if the toll booth is equipped with a PayPass card reader.
  * VendingMachine `boolean`: Boolean value which indicates if the vending machine is equipped with a PayPass card reader.

### Point
* Point `object`
  * Latitude `number`: Latitude of the merchant's location.
  * Longitude `number`: Longitude of the merchant's location.

### Products
* Products `object`
  * PrepaidTravelcard `boolean`: Boolean value which indicates if the merchant accepts MasterCard Prepaid Travel Cards.

### Topup
* Topup `object`
  * rePower [rePower](#repower)

### rePower
* rePower `object`
  * CardSwipe `boolean`: Boolean value which indicates if the repower card load type at this merchant supports Card Swipe.
  * MoneyPak `boolean`: Boolean value which indicates if the repower card load type at this merchant supports MoneyPak.


