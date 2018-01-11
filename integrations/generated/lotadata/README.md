# @datafire/lotadata

Client library for LotaData

## Installation and Usage
```bash
npm install --save @datafire/lotadata
```
```js
let lotadata = require('@datafire/lotadata').create({
  api_key: ""
});

lotadata.events.get({}).then(data => {
  console.log(data);
})
```

## Description

Access the most exhaustive, accurate and up-to-date collection of global and hyper-local geocoded events and activities across a wide range of categories and genres

## Actions

### events.get
Find event occurrences in the area. Returns results at specific place and time, event groups are expanded for every occurrence.


```js
lotadata.events.get({
  "fieldset": ""
}, context)
```

#### Input
* input `object`
  * category `array`: List of required EventCategory ids (Tier 1)
  * activity `string`: List of required activity type ids (compliment to category)
  * ambience `string`: List of required ambience ids
  * genre `string`: List of required genre ids
  * name `string`: Matching on event and place names
  * q `string`: Text query matching titles, description, various text, tags, category
  * from_day `string`: Start on or after date specified (2015-10-16)
  * to_day `string`: Start on or before date specified (2015-10-16)
  * capacity_min `number`: Min capacity at location
  * capacity_max `number`: Min capacity at location
  * center `string`: latitude,longitude of the origin point
  * radius `integer`: Distance from origin in meters
  * bbox `array`: Corner of a bounding box (lat,lng). Requires 0 or 2 pairs
  * polygon `array`: Closed custom polygon. Ordered list of lat,lng pairs
  * within `string`: Search within specified geopolitical place id
  * offset `integer`: Return results starting at specified offset
  * limit `integer`: Max results to return
  * fieldset **required** `string` (values: summary, detail, context, minicontext): Return results starting at specified offset (summary, context, detail)

#### Output
* output [EventsSearchResponse](#eventssearchresponse)

### events.id.get
Get Specific event details.


```js
lotadata.events.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: event @id
  * fieldset `string` (values: summary, detail, context, minicontext)

#### Output
* output [EventOccurenceDetail](#eventoccurencedetail)

### places.get
Venues, landmarks, regions, these are all places to search.


```js
lotadata.places.get({
  "fieldset": ""
}, context)
```

#### Input
* input `object`
  * category `array`: List of required PlaceCategory ids (Tier 1)
  * function `array`: List of required PlaceFunction ids (Tier 2)
  * ambience `array`: List of required ambience ids
  * tag `array`: List of required tags
  * type `string`: Specific PlaceType to return
  * name `string`: Match on place names
  * exact `boolean`: Require an exact name match
  * capacity_min `number`: Min capacity at location
  * capacity_max `number`: Min capacity at location
  * street `string`: Address of the place or street component of the address
  * locality `string`: city, town, or neighborhood of the place
  * region `string`: region or state
  * postal_code `string`: Postal or zip code
  * country `string`: country component of the address
  * center `string`: latitude,longitude of the origin point
  * radius `integer`: Distance from origin in meters
  * bbox `array`: Corner of a bounding box (lat,lng). Requires 0 or 2 pairs
  * polygon `array`: Closed custom polygon. Ordered list of lat,lng pairs
  * within `string`: Search within specified geopolitical place id
  * offset `integer`: Return results starting at specified offset
  * limit `integer`: Max results to return
  * fieldset **required** `string` (values: summary, detail, context): Return results starting at specified offset (summary, context, detail)

#### Output
* output [PlacesSearchResponse](#placessearchresponse)

### places.id.get
Get specific place details


```js
lotadata.places.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: place @id
  * fieldset `string` (values: summary, detail, context, minicontext)

#### Output
* output [PlaceDetail](#placedetail)



## Definitions

### Address
* Address `object`: Physical world addresss
  * country `string`
  * formatted `string`: Address formatted for display as a single string
  * locality `string`: City or town
  * postalCode `string`
  * region `string`
  * street `string`: Street portion of the address, may sometimes be a common name of the place
  * unit `string`

### ContactDetail
* ContactDetail `object`
  * displayPhone `string`
  * email `string`
  * facebookUrl `string`
  * instagramName `string`
  * lastfmUrl `string`
  * soundcloudUrl `string`
  * spotifyUrl `string`
  * twitterName `string`
  * url `string`
  * youtubeUrl `string`

### Error
* Error `object`
  * cause `object`
    * expected `string`
    * path `string`
    * rule `string`
    * value `string`
  * message `string`
  * status `integer`
  * tracking `object`
    * id `string`
    * session `string`

### EventOccurenceDetail
* EventOccurenceDetail `object`: Event Occurrence Detail limited to requested fieldset.
  * @id `string`: Unique event id
  * @type `string` (values: Organized, Screening, Environmental, Virtual): Type of occurrence. You will usually see Organized as the type for most events. While Virtual events will get their own Virtual type.
  * activity `array`: Associated ActivityType entries
    * items [FeatureReference](#featurereference)
  * ambience `array`: expected mood and feel of the event
    * items [FeatureReference](#featurereference)
  * at [PlaceReference](#placereference)
  * awayTeam [FeatureReference](#featurereference)
  * category `array`: Associated EventCategory. May be multiple, such as Charity Music event
    * items [FeatureReference](#featurereference)
  * contactPoint [ContactDetail](#contactdetail)
  * description `string`: Full description in plain text
  * doorTime `string`: Time when the admission starts
  * duration `string`: Duration of the event in ISO-8601 format (PT45M) - 45 minutes
  * endApprox `boolean`: endDate is approximated based on historical data
  * endDate `string`: Time when the event ends, if known
  * extTaxonomy `array`: extended taxonomy such as IAB and Google AdWords
    * items [FeatureReference](#featurereference)
  * genre `array`: applicable Genres. (Tier 2 taxonomy). May include related genres from categories, not deemed as primary
    * items [FeatureReference](#featurereference)
  * headline `string`: Optional short description in plain text
  * homeTeam [FeatureReference](#featurereference)
  * htmlDescription `string`: Full description with HTML formatting, where available
  * image [ImageMeta](#imagemeta)
  * inLanguage [FeatureReference](#featurereference)
  * name `string`: Name of the event in plain text
  * noTime `boolean`: Specific time of the event is unknown. (shown only when true)
  * offers `array`: Ticketing options
    * items [TicketOffer](#ticketoffer)
  * onDemand `boolean`: This event can start at any time during specified window
  * performer `array`: List of Personas significant for this event
    * items [FeatureReference](#featurereference)
  * photo `array`: Primary image
    * items [ImageMeta](#imagemeta)
  * startDate `string`: Time when the event starts
  * superEvent [OccurrenceReference](#occurrencereference)
  * updated `string`: Timestamp of last modification (UTC)
  * url `string`: Primary url for published event
  * workPerformed `array`: Subject matter of the event
    * items [FeatureReference](#featurereference)

### EventsQuery
* EventsQuery `object`: Specific filters understood and executed for this query. If your parameter is not visible here, then consult the documentation for correct usage.
  * activity `array`: required activity types
    * items `string`
  * category `array`: required categories
    * items `string`
  * limit `integer`: maximum number of matches to return

### EventsSearchResponse
* EventsSearchResponse `object`
  * events `array`
    * items [EventOccurenceDetail](#eventoccurencedetail)
  * query [EventsQuery](#eventsquery)
  * stats [SearchStatsMetaResult](#searchstatsmetaresult)

### FeatureReference
* FeatureReference `object`: Identifier for a Feature
  * @id `string`: Feature id
  * @type `string`: Type of specific feature or Taxonomy node such as EventCategory, SportsTeam, Persona.
  * name `string`: Display name of the feature

### GeoJsonObject


### GeoPt
* GeoPt `object`
  * lat `number`
  * lon `number`

### ImageMeta
* ImageMeta `object`: Image meta data
  * @id `string`
  * caption `string`
  * height `integer`
  * url `string`
  * width `integer`

### OccurrenceReference
* OccurrenceReference `object`
  * @id `string`
  * name `string`
  * startDate `string`: Time when the event starts

### PlaceDetail
* PlaceDetail `object`
  * ambience `array`: expected mood and feel of the event
    * items [FeatureReference](#featurereference)
  * category `array`: Associated PlaceCategory. May be multiple (Tier 1)
    * items [FeatureReference](#featurereference)
  * contact [ContactDetail](#contactdetail)
  * function `array`: PlaceFunction. (Tier 2 taxonomy)
    * items [FeatureReference](#featurereference)
  * openingHours `array`
    * items [Timeframe](#timeframe)
  * photo `array`
    * items [ImageMeta](#imagemeta)
  * @id `string`
  * @type `string` (values: Place, LocalBusiness, AdministrativeArea, TouristAttraction, Landform, LandmarksOrHistoricalBuildings, Residence, Virtual): Type of place where Place is a physical address, LocalBusiness is any type of comercial property, AdministrativeArea is a political or colloquial area, and Virtual is out of this world
  * address [Address](#address)
  * geo [GeoPt](#geopt)
  * geometry [GeoJsonObject](#geojsonobject)
  * location [VirtualLocation](#virtuallocation)
  * logo [ImageMeta](#imagemeta)
  * name `string`
  * tag `array`
    * items [FeatureReference](#featurereference)

### PlaceReference
* PlaceReference `object`: Unique Location
  * @id `string`
  * @type `string` (values: Place, LocalBusiness, AdministrativeArea, TouristAttraction, Landform, LandmarksOrHistoricalBuildings, Residence, Virtual): Type of place where Place is a physical address, LocalBusiness is any type of comercial property, AdministrativeArea is a political or colloquial area, and Virtual is out of this world
  * address [Address](#address)
  * geo [GeoPt](#geopt)
  * geometry [GeoJsonObject](#geojsonobject)
  * location [VirtualLocation](#virtuallocation)
  * logo [ImageMeta](#imagemeta)
  * name `string`
  * tag `array`
    * items [FeatureReference](#featurereference)

### PlacesQuery
* PlacesQuery `object`: Specific filters understood and executed for this query. If your parameter is not visible here, then consult the documentation for correct usage.
  * address [Address](#address)
  * category `array`: required categories
    * items `string`
  * limit `integer`: maximum number of matches to return

### PlacesSearchResponse
* PlacesSearchResponse `object`
  * places `array`
    * items [PlaceDetail](#placedetail)
  * query [PlacesQuery](#placesquery)
  * stats [SearchStatsMetaResult](#searchstatsmetaresult)

### SearchStatsMetaResult
* SearchStatsMetaResult `object`: Shows invocation details about the query. Running query again, could produce different results
  * count `integer`: Total matches for the query
  * fieldset `string`: Specific fields returned by this query
  * runtime `integer`: Server side run time in msec for this request

### TicketOffer
* TicketOffer `object`
  * availability `string` (values: Discontinued, InStock, InStoreOnly, LimitedAvailability, OnlineOnly, OutOfStock, PreOrder, SoldOut)
  * category `string` (values: primary, secondary, presale, member, premium, unknown)
  * donation `boolean`
  * fee `number`
  * highPrice `number`
  * inventory `object`
    * available `integer`
    * total `integer`
  * name `string`
  * price `number`
  * priceCurrency `string`
  * priceUnknown `boolean`
  * url `string`

### Timeframe
* Timeframe `object`
  * closes `string`: Close time for all days mentioned in the dayOfWeek. If close time is less than open, then it is following day.
  * dayOfWeek `array`: ISO day of the week. 1- Monday, 7- Sunday
    * items `integer`
  * open247 `boolean`: Open around the clock
  * opens `string`: Open time for all days mentioned in the dayOfWeek

### VirtualLocation
* VirtualLocation `object`: Virtual Address
  * domain `string`
  * platform `string`
  * url `string`


