# @datafire/lotadata

Client library for LotaData

## Installation and Usage
```bash
npm install --save datafire @datafire/lotadata
```

```js
let datafire = require('datafire');
let lotadata = require('@datafire/lotadata').create({
  api_key: "",
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

#### Parameters
* category (array) - List of required EventCategory ids (Tier 1)
* activity (string) - List of required activity type ids (compliment to category)
* ambience (string) - List of required ambience ids
* genre (string) - List of required genre ids
* name (string) - Matching on event and place names
* q (string) - Text query matching titles, description, various text, tags, category
* from_day (string) - Start on or after date specified (2015-10-16)
* to_day (string) - Start on or before date specified (2015-10-16)
* capacity_min (number) - Min capacity at location
* capacity_max (number) - Min capacity at location
* center (string) - latitude,longitude of the origin point
* radius (integer) - Distance from origin in meters
* bbox (array) - Corner of a bounding box (lat,lng). Requires 0 or 2 pairs
* polygon (array) - Closed custom polygon. Ordered list of lat,lng pairs
* within (string) - Search within specified geopolitical place id
* offset (integer) - Return results starting at specified offset
* limit (integer) - Max results to return
* fieldset (string) **required** - Return results starting at specified offset (summary, context, detail)

### events.id.get
Get Specific event details.


```js
lotadata.events.id.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - event @id
* fieldset (string)

### places.get
Venues, landmarks, regions, these are all places to search.


```js
lotadata.places.get({
  "fieldset": ""
}, context)
```

#### Parameters
* category (array) - List of required PlaceCategory ids (Tier 1)
* function (array) - List of required PlaceFunction ids (Tier 2)
* ambience (array) - List of required ambience ids
* tag (array) - List of required tags
* type (string) - Specific PlaceType to return
* name (string) - Match on place names
* exact (boolean) - Require an exact name match
* capacity_min (number) - Min capacity at location
* capacity_max (number) - Min capacity at location
* street (string) - Address of the place or street component of the address
* locality (string) - city, town, or neighborhood of the place
* region (string) - region or state
* postal_code (string) - Postal or zip code
* country (string) - country component of the address
* center (string) - latitude,longitude of the origin point
* radius (integer) - Distance from origin in meters
* bbox (array) - Corner of a bounding box (lat,lng). Requires 0 or 2 pairs
* polygon (array) - Closed custom polygon. Ordered list of lat,lng pairs
* within (string) - Search within specified geopolitical place id
* offset (integer) - Return results starting at specified offset
* limit (integer) - Max results to return
* fieldset (string) **required** - Return results starting at specified offset (summary, context, detail)

### places.id.get
Get specific place details


```js
lotadata.places.id.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - place @id
* fieldset (string)

