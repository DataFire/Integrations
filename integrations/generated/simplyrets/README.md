# @datafire/simplyrets

Client library for SimplyRETS

## Installation and Usage
```bash
npm install --save @datafire/simplyrets
```
```js
let simplyrets = require('@datafire/simplyrets').create({
  username: "",
  password: ""
});

simplyrets.properties.get({}).then(data => {
  console.log(data);
});
```

## Description

The SimplyRETS API is an exciting step towards making it easier for
developers and real estate agents to build something awesome with
real estate data!

The documentation below makes live requests to our API using the
trial data. To get set up with the API using live MLS data, you
must have RETS credentials from your MLS, which you can then use to
create an app with SimplyRETS. For more information on that
process, please see our [FAQ](https://simplyrets.com/faq), [Getting
Started](https://simplyrets.com/blog/getting-set-up.html) page, or
[contact us](https://simplyrets.com/\#home-contact).

Below you'll find the API endpoints, query parameters, response bodies,
and other information about using the SimplyRETS API. You can run
queries by clicking the 'Try it Out' button at the bottom of each
section.

### Authentication
The SimplyRETS API uses Basic Authentication. When you create an
app, you'll get a set of API credentials to access your
listings. If you're trying out the test data, you can use
`simplyrets:simplyrets` for connecting to the API.

### Media Types
The SimplyRETS API uses the `Accept` header to allow clients to
control media types (content versions). We maintain backwards
compatibility with API clients by allowing them to specify a
content version. We highly recommend setting and explicity media
type when your application reaches production. Both the structure
and content of our API response bodies is subject to change so we
can add new features while respecting the stability of applications
which have already been developed.

To always use the latest SimplyRETS content version, simply use
`application/json` in your application `Accept` header.

If you want to pin your clients media type to a specific version,
you can use the vendor-specific SimplyRETS media type, e.g.
`application/vnd.simplyrets-v0.1+json"`

To view all valid content-types for making an `OPTIONS`, make a
request to the SimplyRETS api root

`curl -XOPTIONS -u simplyrets:simplyrets https://api.simplyrets.com/`

The default media types used in our API responses may change in the
future. If you're building an application and care about the
stability of the API, be sure to request a specific media type in the
Accept header as shown in the examples below.

The wordpress plugin automatically sets the `Accept` header for the
compatible SimplyRETS media types.

### Pagination

To paginate through listings, start your query with these
parameters: 'limit=500&lastId=0'. The 'lastId' is the important
part, you can use any limit up to 500. When you receive the
response from the API with the results, check the 'Link' header for
the 'next' link. That link is pre-built to access the next 'page'
of listings. Alternatively, you can use the last listing's 'mlsId'
from the previous request and use that in the next query. For
example:

First query:

curl -u username:password 'https://api.simplyrets.com/properties?limit=500&lastId=0'

If the 'mlsId' in the last listing of the results is '1234567', then the next query will be:

curl -u username:password 'https://api.simplyrets.com/properties?limit=500&lastId=1234567'

...and so one until you have reached the final page of listings.

There a few pieces of useful information about each request stored
in the HTTP Headers:

- `X-Total-Count` shows you the total amount of listings that match
  your current query.
- `Link` contains pre-built pagination links for accessing the next
'page' of listings that match your query.

### RETS Vendor Compliance

Many RETS vendors have strict requirements for showing disclaimers
with specific information embedded. For example, in many areas it's
required to show the time of the last listing refresh inside the
disclaimer.

The timestamp of the last listing refresh timestamp can be found in
one of two spots:

- The `X-SimplyRETS-LastUpdate` header from `GET /properties` or `GET /properties/{mlsId}`

- Calling the API root `/` or properties api endpoint `/properties`
  with an OPTIONS request

  - `OPTIONS /`

    Using this route, you can see the timestamp for all RETS
    vendors associated with your account.

  - `OPTIONS /properties`


## Actions

### openhouses.get
This is the main endpoint for accessing openhouses.



```js
simplyrets.openhouses.get({}, context)
```

#### Input
* input `object`
  * type `string` (values: residential, rental, multifamily, condominium, commercial, land, farm): Request listings by a specific property type. This
  * listingId `string`: Request openhouses for a specific `listingId`.
  * cities `array`: Filter the openhouses returned by a list of valid cities. A
  * brokers `array`: Filter the listings returned by brokerage with a Broker ID.
  * agent `string`: Filter the listings returned by an agent ID.  Note, the
  * minprice `integer`: Filter listings by a minimum price.
  * startdate `string`: Scheduled date and time of the open house showing
  * offset `integer`: Increase the offset parameter by the limit to go to the
  * lastId `integer`: Used as a cursor for pagination.
  * limit `integer`: Set the number of listings to return in the response.
  * sort `string` (values: listprice, -listprice, listdate, -listdate, beds, -beds, baths, -baths): Sort the response by a specific field. Values starting
  * include `array`: Include a extra fields which are not in the default

#### Output
* output `array`
  * items [OpenHouse](#openhouse)

### openhouses.openHouseKey.get
Use this endpoint for accessing a single OpenHouse.



```js
simplyrets.openhouses.openHouseKey.get({
  "openHouseKey": 0
}, context)
```

#### Input
* input `object`
  * openHouseKey **required** `integer`: A unique OpenHouse identification key
  * include `array`: Include a extra fields which are not in the default

#### Output
* output [OpenHouse](#openhouse)

### properties.get
This is the main endpoint for accessing your properties. View
all of the available query parameters and make requests below!
The API uses Basic Authentication, which most HTTP libraries
will handle for you. To use the test data (which is what this
pages uses), you can use the api key `simplyrets` and secret
`simplyrets`. Note that these test listings are not live MLS
listings but the data, query parameters, and response bodies
will all work the same.



```js
simplyrets.properties.get({}, context)
```

#### Input
* input `object`
  * q `string`: A textual keyword search. This parameter will search  the following
  * status `array` (values: Active, Pending, Closed, ActiveUnderContract, Hold, Withdrawn, Expired, Delete, Incomplete, ComingSoon): Request listings by a specific status. This parameter
  * type `array` (values: residential, rental, multifamily, condominium, commercial, land, farm): Request listings by a specific property type. This
  * agent `string`: Filter the listings returned by an agent ID.  Note, the
  * brokers `array`: Filter the listings returned by brokerage with a Broker
  * minprice `integer`: Filter listings by a minimum price.
  * maxprice `integer`: Filter listings by a maximum price
  * minarea `integer`: Filter listings by a minimum area size in Sq Ft.
  * maxarea `integer`: Filter listings by a maximum area size in Sq Ft.
  * minbaths `integer`: Filter listings by a minimum number of bathrooms.
  * maxbaths `integer`: Filter listings by a maximum number of bathrooms.
  * minbeds `integer`: Filter listings by a minimum number of bedrooms.
  * maxbeds `integer`: Filter listings by a maximum number of bedrooms.
  * maxdom `integer`: Filter listings by a maximum number of days on market.
  * minyear `integer`: Filter listings by a setting a minimum year built.
  * limit `integer`: Set the number of listings to return in the response.
  * offset `integer`: Increase the offset parameter by the limit to go to the
  * lastId `integer`: Used as a cursor for pagination. When using `lastId`, the `sort` parameter
  * vendor `string`: Used to specify the vendor (MLS) to search from. This
  * postalCodes `array`: Filter the listings returned by postal codes / zip
  * features `array`: Filter the listings by specific interior features.  You
  * water `string`: Query water/waterfront listings only. Specify `true` to
  * neighborhoods `array`: Filter the listings returned by specific neighborhoods and
  * cities `array`: Filter the listings returned by specific cities. You can
  * counties `array`: Filter the listings returned by specific counties. You can
  * points `array`: Return listings that are within a set of latitude
  * include `array` (values: association, agreement, garageSpaces, maintenanceExpense, parking, pool, rooms, taxYear, taxAnnualAmount): Include a extra fields which are not in the default
  * sort `string` (values: listprice, -listprice, listdate, -listdate, beds, -beds, baths, -baths): Sort the response by a specific field. Values starting
  * count `integer`: When set to `false`, The `X-Total-Count` header will not

#### Output
* output `array`
  * items [Listing](#listing)

### properties.mlsId.get
Use this endpoint for accessing a single listing. When you
make a search to the `/properties` endpoint, each listing in
the response will contain a unique `mlsId` field which should
be used to request that listing on this route.

The `mlsId` field is a unique identifier for a listing which
is specific to the SimplyRETS API only.  It is different from
the `listingId` field is the public number given to a listing
by the MLS and is not used here.



```js
simplyrets.properties.mlsId.get({
  "mlsId": 0
}, context)
```

#### Input
* input `object`
  * mlsId **required** `integer`: The `mlsId` field is a unique identifier which is specific
  * include `array` (values: association, agreement, garageSpaces, maintenanceExpense, parking, pool, rooms): Include a extra fields which are not in the default

#### Output
* output [Listing](#listing)



## Definitions

### Agent
* Agent `object`: SimplyRETS Agent Api
  * contact [ContactInformation](#contactinformation)
  * firstName `string`: Agent first name
  * id `string`: Well known Agent MLS number or id.
  * lastName `string`: Agent last name

### Association
* Association `object`: Home Owners Association
  * amenities `string`: Any extra amenities granted by the HOA
  * fee `integer`: Association fee
  * name `string`: Name of the association

### Broker
* Broker `object`: SimplyRETS Broker Api
  * startdate `string`: Start Date

### ContactInformation
* ContactInformation `object`: RETS MLS Contact Information
  * cell `string`: Contact Information Cell Phone
  * email `string`: The email address of the `ContactInformation`
  * office `string`: Contact Information Office Phone Number

### Error
* Error `object`: Error information
  * error `integer`: Error code. In general, we try to adhere to HTTP status code
  * message `string`: Status message with an explanation of the error

### GeographicData
* GeographicData `object`: RETS MLS Geographic Data
  * county `string`: Listing county
  * directions `string`: Directions to the property
  * lat `number`: Listing latitude (if available)
  * lng `number`: Listing longitude (if available)
  * marketArea `string`: Listing GeoMarket area. May be the same as mlsArea

### Listing
* Listing `object`: RETS MLS Listing Property
  * address [StreetAddress](#streetaddress)
  * agent [Agent](#agent)
  * association [Association](#association)
  * coAgent [Agent](#agent)
  * disclaimer `string`: Data accuracy disclaimer. The value in the disclaimer may
  * geo [GeographicData](#geographicdata)
  * leaseTerm `string`: Represents the length of the lease.
  * leaseType `string`: Information about the status of the existing lease on the property.
  * listDate `string`: Date and time the listing became Active
  * listPrice `number`: Price of the listing
  * listingId `string`: Data Dictionary v1.3 ListingId. The well known identifier
  * mls [MlsInformation](#mlsinformation)
  * mlsId `integer`: A unique identifier for this listing specific to the
  * modified `string`: Date and time of the last modification
  * office [Office](#office)
  * photos `array`: Photos of the property. Images are served over https and are
    * items `string`
  * privateRemarks `string`: Agent only remarks
  * property [Property](#property)
  * remarks `string`: Description or remarks
  * sales [Sales](#sales)
  * school [School](#school)
  * showingInstructions `string`: Public instructions for showing the property.
  * tax [Tax](#tax)
  * virtualTourUrl `string`: The URL for an unbranded virtual tour of the property.

### MlsInformation
* MlsInformation `object`: RETS MLS Vendor Data
  * area `string`: MLS Area major. The major marketing area name, as defined by the MLS or other non-governmental organization.
  * areaMinor `string`: MLS Area minor. The minor/sub marketing area name, as defined by the MLS or other non-governmental organization.
  * daysOnMarket `integer`: Amount of days the property has been Active
  * originatingSystemName `string`: Alias for the listing office or brokerage
  * status `string` (values: Active, ActiveUnderContract (Backup-Offer), Pending, Hold, Withdrawn, Closed, Expired, Delete, Incomplete, ComingSoon): Normalized MLS Status Code. Compliant with data dictionary
  * statusText `string`: Raw MLS status text. This `field` comes directly from your RETS data

### Office
* Office `object`: RETS MLS Office
  * brokerid `string`: Office or brokerage MLS identifier
  * contact [ContactInformation](#contactinformation)
  * name `string`: Pimary office name
  * servingName `string`: Primary office or brokerage name

### OpenHouse
* OpenHouse `object`: SimplyRETS Open House object
  * description `string`: The remarks and/or description details for the open house
  * endTime `string`: The ending date time for the open house
  * listing [Listing](#listing)
  * openHouseId `string`: The MLS number or id provided by the MLS
  * openHouseKey `string`: A unique identifier for the open house which is specific to the
  * refreshments `string`: Provided
  * startTime `string`: Start Date for the open house
  * type `string`: The open house type. For example, Public or Private

### Parking
* Parking `object`: RETS MLS School Data
  * description `string`: Parking features description
  * leased `string`
  * spaces `integer`: Number of parking spaces

### Property
* Property `object`: Rets MLS Listing Property
  * accessibility `string`
  * additionalRooms `string`: Additional room information. This is a textual description
  * area `integer`: Square footage of the building associated with a listing
  * areaSource `string`
  * bathsFull `integer`: Number of full bathrooms
  * bathsHalf `integer`: Number of half bathrooms
  * bedrooms `integer`: Number of bedrooms
  * construction `string`: The materials that were used in the construction of the property.
  * cooling `string`: A description of the cooling or air conditioning features of the property.
  * exteriorFeatures `string`: Exterior Features for the listing
  * fireplaces `integer`: Number of fireplaces
  * flooring `string`: The type(s) of flooring found within the property.
  * foundation `string`
  * garageSpaces `number`: Number of garage spaces
  * heating `string`: Heating description or short string
  * interiorFeatures `string`: The properties interior features
  * laundryFeatures `string`
  * lotDescription `string`
  * lotSize `string`: Lot size dimensions or square footage as a text. This
  * lotSizeAcres `number`: Lot size in acres
  * lotSizeArea `number`: The total area of the lot.  See `lotSizeUnits` for the units
  * lotSizeAreaUnits `string`: Unit of measurement for the lotSizeArea field.  e.g. Square
  * maintenanceExpense `number`: Yearly maintenance expense
  * occupantName `string`
  * occupantType `string`
  * parking [Parking](#parking)
  * poolFeatures `string`
  * roof `string`: Property roof description
  * stories `number`: Number of stories or levels. Represented as a `double' to
  * style `string`: Property style description or short string
  * subType `string` (values: Apartment, BoatSlip, SingleFamilyResidence, DeededParking, Cabin, Condominium, Duplex, ManufacturedHome, Quadruplex, StockCooperative, Townhouse, Timeshare, Triplex, ManufacturedOnLand): A normalized representation of the listings sub-type.
  * subTypeRaw `string`: The raw text representation of the property sub type.
  * subdivision `string`: The subdivision or community name
  * type `string` (values: RES, CND, RNT, MLF, CRE, LND, FRM): Abbreviated property type. RES is Residential, CND is CondoOrTownhome,
  * view `string`: View details and description
  * water `string`: The name, if known, of the body of water on which the
  * yearBuilt `integer`: Year the property was built

### Sales
* Sales `object`: Sales Data
  * agent `string`: RETS Sales data agent id
  * closeDate `string`: RETS Sales data close date
  * closePrice `integer`: RETS Sales data sold price
  * contractDate `string`: RETS Sales data contract date
  * office `string`: RETS Sales data selling office/brokerage id

### School
* School `object`: RETS MLS School Data
  * district `string`: School district name.
  * elementarySchool `string`: Elementary school name.
  * highSchool `string`: High school name
  * middleSchool `string`: Middle or junior school name

### StreetAddress
* StreetAddress `object`: RETS MLS Street Address
  * city `string`: City name
  * country `string`: Street address country (United States or Canada)
  * crossStreet `string`: Known cross street
  * full `string`: Full pretty-printed address with suffix (if available)
  * postalCode `string`: Street Address postal code
  * state `string`: State or province. Maps to the data dictionary field `StateOrProvince`.
  * streetName `string`: Name of the street
  * streetNumber `integer`: Street number
  * streetNumberText `string`: Textual representation of the street number. This field

### Tax
* Tax `object`: RETS MLS Tax Data
  * id `string`: Tax Parcel ID for the listing
  * taxAnnualAmount `string`: Annual tax amount in USD
  * taxYear `integer`: Tax Year


