# @datafire/simplyrets

Client library for SimplyRETS

## Installation and Usage
```bash
npm install --save datafire @datafire/simplyrets
```

```js
let datafire = require('datafire');
let simplyrets = require('@datafire/simplyrets').create({
  username: "",
  password: "",
});

simplyrets.properties.get({}).then(data => {
  console.log(data);
})
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

#### Parameters
* type (string) - Request listings by a specific property type. This
* listingId (string) - Request openhouses for a specific `listingId`.
* cities (array) - Filter the openhouses returned by a list of valid cities. A
* brokers (array) - Filter the listings returned by brokerage with a Broker ID.
* agent (string) - Filter the listings returned by an agent ID.  Note, the
* minprice (integer) - Filter listings by a minimum price.
* startdate (string) - Scheduled date and time of the open house showing
* offset (integer) - Increase the offset parameter by the limit to go to the
* lastId (integer) - Used as a cursor for pagination.
* limit (integer) - Set the number of listings to return in the response.
* sort (string) - Sort the response by a specific field. Values starting
* include (array) - Include a extra fields which are not in the default

### openhouses.openHouseKey.get
Use this endpoint for accessing a single OpenHouse.



```js
simplyrets.openhouses.openHouseKey.get({
  "openHouseKey": 0
}, context)
```

#### Parameters
* openHouseKey (integer) **required** - A unique OpenHouse identification key
* include (array) - Include a extra fields which are not in the default

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

#### Parameters
* q (string) - A textual keyword search. This parameter will search  the following
* status (array) - Request listings by a specific status. This parameter
* type (array) - Request listings by a specific property type. This
* agent (string) - Filter the listings returned by an agent ID.  Note, the
* brokers (array) - Filter the listings returned by brokerage with a Broker
* minprice (integer) - Filter listings by a minimum price.
* maxprice (integer) - Filter listings by a maximum price
* minarea (integer) - Filter listings by a minimum area size in Sq Ft.
* maxarea (integer) - Filter listings by a maximum area size in Sq Ft.
* minbaths (integer) - Filter listings by a minimum number of bathrooms.
* maxbaths (integer) - Filter listings by a maximum number of bathrooms.
* minbeds (integer) - Filter listings by a minimum number of bedrooms.
* maxbeds (integer) - Filter listings by a maximum number of bedrooms.
* maxdom (integer) - Filter listings by a maximum number of days on market.
* minyear (integer) - Filter listings by a setting a minimum year built.
* limit (integer) - Set the number of listings to return in the response.
* offset (integer) - Increase the offset parameter by the limit to go to the
* lastId (integer) - Used as a cursor for pagination. When using `lastId`, the `sort` parameter
* vendor (string) - Used to specify the vendor (MLS) to search from. This
* postalCodes (array) - Filter the listings returned by postal codes / zip
* features (array) - Filter the listings by specific interior features.  You
* water (string) - Query water/waterfront listings only. Specify `true` to
* neighborhoods (array) - Filter the listings returned by specific neighborhoods and
* cities (array) - Filter the listings returned by specific cities. You can
* counties (array) - Filter the listings returned by specific counties. You can
* points (array) - Return listings that are within a set of latitude
* include (array) - Include a extra fields which are not in the default
* sort (string) - Sort the response by a specific field. Values starting
* count (integer) - When set to `false`, The `X-Total-Count` header will not

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

#### Parameters
* mlsId (integer) **required** - The `mlsId` field is a unique identifier which is specific
* include (array) - Include a extra fields which are not in the default

