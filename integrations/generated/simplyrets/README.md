# @datafire/simplyrets
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


## Operation: openhouses.get
This is the main endpoint for accessing openhouses.


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "type": {
      "type": "string",
      "description": "Request listings by a specific property type. This\ndefaults to Residential, and you can only specify one type\nin a single query.\n",
      "enum": [
        "residential",
        "rental",
        "multifamily",
        "condominium",
        "commercial",
        "land",
        "farm"
      ]
    },
    "listingId": {
      "type": "string",
      "description": "Request openhouses for a specific `listingId`.\n"
    },
    "cities": {
      "type": "array",
      "description": "Filter the openhouses returned by a list of valid cities. A\nlist of valid cities can be found by making an OPTIONS\nrequest to the `/openhouses` endpoint.\n\nThe `cities` query parameter is case-insensitive.\n"
    },
    "brokers": {
      "type": "array",
      "description": "Filter the listings returned by brokerage with a Broker ID.\nYou can specific multiple broker parameters. Note, the Broker\nID is provided by your MLS.\n"
    },
    "agent": {
      "type": "string",
      "description": "Filter the listings returned by an agent ID.  Note, the\nAgent ID is provided by your MLS.\n"
    },
    "minprice": {
      "type": "integer",
      "description": "Filter listings by a minimum price.\n"
    },
    "startdate": {
      "type": "string",
      "format": "date-time",
      "description": "Scheduled date and time of the open house showing"
    },
    "offset": {
      "type": "integer",
      "description": "Increase the offset parameter by the limit to go to the\nnext \"page\" of listings. Also take a look at the Link HTTP\nHeader for pre-built pagination.\n\n*NOTE:* Use the `lastId` parameter for pagination.\n"
    },
    "lastId": {
      "type": "integer",
      "description": "Used as a cursor for pagination.\n"
    },
    "limit": {
      "type": "integer",
      "description": "Set the number of listings to return in the response.\nThis defaults to 20 listings, and can be a maximum of 500.\nTo paginate through to the next page of listings, take a\nlook at the `offset` parameter, or the Link in the HTTP\nHeader.\n"
    },
    "sort": {
      "type": "string",
      "description": "Sort the response by a specific field. Values starting\nwith a minus (-) denote descending order, while the others\nare ascending.\n",
      "enum": [
        "listprice",
        "-listprice",
        "listdate",
        "-listdate",
        "beds",
        "-beds",
        "baths",
        "-baths"
      ]
    },
    "include": {
      "type": "array",
      "description": "Include a extra fields which are not in the default\nresponse body\n- 'association' includes additional HOA data\n- 'agreement' information on the listing agreement\n- 'garageSpaces' additional garage data\n- 'maintenanceExpense' data on maintenance expenses\n- 'parking' additional parking data\n- 'pool' includes an additional pool description\n- 'taxAnnualAmount' include the annual tax amount\n- 'taxYear' include the tax year data\n- 'rooms' include parameter will include\n   any additional rooms as a list.\n\nNote that your MLS must provide these fields in their RETS\ndata for them to be available in the API response.\n\nIn the future, fields which require an 'include' may become available\nby default.\n"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/OpenHouse"
  },
  "type": "array"
}
```
## Operation: openhouses.openHouseKey.get
Use this endpoint for accessing a single OpenHouse.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "openHouseKey": {
      "type": "integer",
      "format": "int64",
      "description": "A unique OpenHouse identification key"
    },
    "include": {
      "type": "array",
      "description": "Include a extra fields which are not in the default\nresponse body\n- 'association' includes additional HOA data\n- 'agreement' information on the listing agreement\n- 'garageSpaces' additional garage data\n- 'maintenanceExpense' data on maintenance expenses\n- 'parking' additional parking data\n- 'pool' includes an additional pool description\n- 'taxAnnualAmount' include the annual tax amount\n- 'taxYear' include the tax year data\n- 'rooms' include parameter will include\n   any additional rooms as a list.\n\nNote that your MLS must provide these fields in their RETS\ndata for them to be available in the API response.\n\nIn the future, fields which require an 'include' may\nbecome available by default.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "openHouseKey"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/OpenHouse"
}
```
## Operation: properties.get
This is the main endpoint for accessing your properties. View
all of the available query parameters and make requests below!
The API uses Basic Authentication, which most HTTP libraries
will handle for you. To use the test data (which is what this
pages uses), you can use the api key `simplyrets` and secret
`simplyrets`. Note that these test listings are not live MLS
listings but the data, query parameters, and response bodies
will all work the same.


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "q": {
      "type": "string",
      "description": "A textual keyword search. This parameter will search  the following\nfields, when available:\n  - listingId (This does _not_ search the `mlsId` field in the SimplyRETS response body)\n  - street number\n  - street name\n  - mls area (major)\n  - city\n  - subdivision name\n  - postal code\n"
    },
    "status": {
      "type": "array",
      "description": "Request listings by a specific status. This parameter\ndefaults to active and you can specify multiple statuses\nin a single query.\n\nListing statuses depend on your MLS's availability. Below is\na brief description of each status with possible synonyms which\nmay map to your MLS-specific statuses\n- *Active*: Active Listing which is still on the market\n- *ActiveUnderContract*: An offer has been accepted but the listing is still on market. Synonyms: Accepting Backup Offers, Backup Offer, Active With Accepted. Synonyms: Offer, Backup, Contingent\n- *Pending*: An offer has been accepted and the listing is no longer on market. Synonyms: Offer Accepted, Under Contract\n- *Hold*: The listing has been withdrawn from the market, but a contract\n  still exists between the seller and the listing member. Synonyms: Hold, Hold Do Not Show, Temp Off Market\n- *Withdrawn*: The listing has been withdrawn from the market, but a contract\n  still exists between the seller and the listing member. Synonyms: Hold, Hold Do Not Show, Temp Off Market\n- *Closed*: The purchase agreement has been fulfilled or the lease\n  agreement has been executed. Synonyms: Sold, Leased, Rented, Closed Sale\n- *Expired*: The listing contract has expired\n- *Delete*: The listing contract was never valid or other reason for the contract to be nullified. Synonyms: Kill, Zap\n- *Incomplete*: The listing has not yet be completely entered and is not yet\n  published in the MLS. Synonyms: Draft, Partially Complted\n- *ComingSoon*\n",
      "enum": [
        "Active",
        "Pending",
        "Closed",
        "ActiveUnderContract",
        "Hold",
        "Withdrawn",
        "Expired",
        "Delete",
        "Incomplete",
        "ComingSoon"
      ]
    },
    "type": {
      "type": "array",
      "description": "Request listings by a specific property type. This\ndefaults to Residential and Rental. You can specify\nmultiple property types in a single query.\n",
      "enum": [
        "residential",
        "rental",
        "multifamily",
        "condominium",
        "commercial",
        "land",
        "farm"
      ]
    },
    "agent": {
      "type": "string",
      "description": "Filter the listings returned by an agent ID.  Note, the\nAgent ID is provided by your MLS.\n\nThe co-listing agent is not included in this query parameter.\n"
    },
    "brokers": {
      "type": "array",
      "description": "Filter the listings returned by brokerage with a Broker\nID. For some MLS areas, this is the ListOfficeId (Listing\nOffice ID).  You can specific multiple broker\nparameters. Note, this query parameter is only available\nif a Broker ID is provided by your MLS.\n"
    },
    "minprice": {
      "type": "integer",
      "description": "Filter listings by a minimum price.\n"
    },
    "maxprice": {
      "type": "integer",
      "description": "Filter listings by a maximum price\n"
    },
    "minarea": {
      "type": "integer",
      "description": "Filter listings by a minimum area size in Sq Ft.\n"
    },
    "maxarea": {
      "type": "integer",
      "description": "Filter listings by a maximum area size in Sq Ft.\n"
    },
    "minbaths": {
      "type": "integer",
      "description": "Filter listings by a minimum number of bathrooms.\n"
    },
    "maxbaths": {
      "type": "integer",
      "description": "Filter listings by a maximum number of bathrooms.\n"
    },
    "minbeds": {
      "type": "integer",
      "description": "Filter listings by a minimum number of bedrooms.\n"
    },
    "maxbeds": {
      "type": "integer",
      "description": "Filter listings by a maximum number of bedrooms.\n"
    },
    "maxdom": {
      "type": "integer",
      "description": "Filter listings by a maximum number of days on market.\n_Note that your MLS must provide Days on Market data._\n"
    },
    "minyear": {
      "type": "integer",
      "description": "Filter listings by a setting a minimum year built.\n"
    },
    "limit": {
      "type": "integer",
      "description": "Set the number of listings to return in the response.\nThis defaults to 20 listings, and can be a maximum of 500.\nTo paginate through to the next page of listings, take a\nlook at the `offset` parameter, or the Link in the HTTP\nHeader.\n"
    },
    "offset": {
      "type": "integer",
      "description": "Increase the offset parameter by the limit to go to the\nnext \"page\" of listings. Also take a look at the Link HTTP\nHeader for pre-built pagination.\n\n*NOTE:* Use the `lastId` field to paginate response\n\n*NOTE:* If you're offset is too high, you will receive an\n`HTTP 400 offset too high` error message.\n"
    },
    "lastId": {
      "type": "integer",
      "description": "Used as a cursor for pagination. When using `lastId`, the `sort` parameter\nwill not work.\n"
    },
    "vendor": {
      "type": "string",
      "description": "Used to specify the vendor (MLS) to search from. This\nparameter is required on multi-MLS apps, and you can only\nquery one vendor at a time. To get your vendor id's make\nan OPTIONS request to https://api.simplyrets.com.\n"
    },
    "postalCodes": {
      "type": "array",
      "description": "Filter the listings returned by postal codes / zip\ncode. You can specify multiple.\n"
    },
    "features": {
      "type": "array",
      "description": "Filter the listings by specific interior features.  You\ncan filter by multiple. For example, to filter trial listings\nby multiple features you can use,\nReturn listings that are within a set of latitude\nlongitude coordinates. For example,\n\n```\nWet Bar\nHigh Ceiling\n```\n\ne.g. `https://simplyrets.com/services?features=Wet%20Bar&features=High%20Ceiling`\n\nThe features provided by your MLS can be seen in your\nOPTIONS request. To view all valid features, make a\nrequest to the SimplyRETS api root\n\n`curl -XOPTIONS -u simplyrets:simplyrets https://api.simplyrets.com/`\n"
    },
    "water": {
      "type": "string",
      "description": "Query water/waterfront listings only. Specify `true` to\nfilter waterfront listings.\n"
    },
    "neighborhoods": {
      "type": "array",
      "description": "Filter the listings returned by specific neighborhoods and\nsubdivisions. You can specify multiple `neighborhoods` by\nusing the query parameter multiple times.\n\nThe `neighborhoods` query parameter is case-insensitive.\n"
    },
    "cities": {
      "type": "array",
      "description": "Filter the listings returned by specific cities. You can\nspecify multiple `cities` query parameters.\n\nThe `cities` query parameter is case-insensitive.\n"
    },
    "counties": {
      "type": "array",
      "description": "Filter the listings returned by specific counties. You can\nspecify multiple `counties` parameters.\n\nThe `counties` query parameter is case-insensitive.\n"
    },
    "points": {
      "type": "array",
      "description": "Return listings that are within a set of latitude\nlongitude coordinates. For example;\n```\n29.723837,-95.69778\n29.938275,-95.69778\n29.938275,-95.32974\n29.723837,-95.32974\n```\nNote that some MLS's do not provide latitude and longitude\nfor their listings, which is required for this parameter\nto work. In these cases, SimplyRETS offers a [Geocoding\nAddon](https://simplyrets.com/services#geocoding).\n\nCheck out our\n[blog post](https://simplyrets.com/blog/interactive-map-search.html)\non using the `points` parameter to build a map-based app\nin javascript.\n"
    },
    "include": {
      "type": "array",
      "description": "Include a extra fields which are not in the default\nresponse body\n- 'association' includes additional HOA data\n- 'agreement' information on the listing agreement\n- 'garageSpaces' additional garage data\n- 'maintenanceExpense' data on maintenance expenses\n- 'parking' additional parking data\n- 'pool' includes an additional pool description\n- 'taxAnnualAmount' include the annual tax amount\n- 'taxYear' include the tax year data\n- 'rooms' include parameter will include\n   any additional rooms as a list.\n\nNote that your MLS must provide these fields in their RETS\ndata for them to be available in the API response.\n\nIn the future, fields which require an 'include' may become available\nby default.\n",
      "enum": [
        "association",
        "agreement",
        "garageSpaces",
        "maintenanceExpense",
        "parking",
        "pool",
        "rooms",
        "taxYear",
        "taxAnnualAmount"
      ]
    },
    "sort": {
      "type": "string",
      "description": "Sort the response by a specific field. Values starting\nwith a minus (-) denote descending order, while the others\nare ascending.\n",
      "enum": [
        "listprice",
        "-listprice",
        "listdate",
        "-listdate",
        "beds",
        "-beds",
        "baths",
        "-baths"
      ]
    },
    "count": {
      "type": "integer",
      "description": "When set to `false`, The `X-Total-Count` header will not\nbe returned\n\nCounting the listings can contribute to slower API calls\ndue to the extra queries that need to be run to get an\nexact count.\n\nDisabling count can increase query speeds.\n"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Listing"
  },
  "type": "array"
}
```
## Operation: properties.mlsId.get
Use this endpoint for accessing a single listing. When you
make a search to the `/properties` endpoint, each listing in
the response will contain a unique `mlsId` field which should
be used to request that listing on this route.

The `mlsId` field is a unique identifier for a listing which
is specific to the SimplyRETS API only.  It is different from
the `listingId` field is the public number given to a listing
by the MLS and is not used here.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "mlsId": {
      "type": "integer",
      "format": "int64",
      "description": "The `mlsId` field is a unique identifier which is specific\nto the SimplyRETS API only.  This field is different from\nthe `listingId` field (which is the public number given to\na listing by the MLS and is not used here).\n"
    },
    "include": {
      "type": "array",
      "description": "Include a extra fields which are not in the default\nresponse body\n- 'association' includes additional HOA data\n- 'agreement' information on the listing agreement\n- 'garageSpaces' additional garage data\n- 'maintenanceExpense' data on maintenance expenses\n- 'parking' additional parking data\n- 'pool' includes an additional pool description\n- 'rooms' include parameter will include\n   any additional rooms as a list.\n\nNote that your MLS must provide these fields in their RETS\ndata for them to be available with valid data in the API\nresponse. If your MLS does not offer these fields, they will\ncontain 'null'.\n\nIn the future, fields which require an 'include' may become available\nby default.\n",
      "enum": [
        "association",
        "agreement",
        "garageSpaces",
        "maintenanceExpense",
        "parking",
        "pool",
        "rooms"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "mlsId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Listing"
}
```
