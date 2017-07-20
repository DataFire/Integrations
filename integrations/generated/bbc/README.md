# @datafire/bbc

Client library for Radio & Music Services

## Installation and Usage
```bash
npm install --save datafire @datafire/bbc
```

```js
let datafire = require('datafire');
let bbc = require('@datafire/bbc').actions;

let account = {
  api_key: "",
}
let context = new datafire.Context({
  accounts: {
    bbc: account,
  }
})


bbc.listVersions({}, context).then(data => {
  console.log(data);
})
```

## Description
We encapsulate Radio & Music business logic for iPlayer Radio and BBC Music products on all platforms. We add value by reliably providing the right blend of metadata needed by clients.

## Actions
### getAPI
Get API definition


```js
bbc.getAPI(null, context)
```


### listAvailability
Discover details of on-demand availability for programmes and their versions


```js
bbc.listAvailability({}, context)
```


### listBroadcasts
Fetch metadata about linear Broadcasts and Services, allowing the generation of Television and Radio schedules and other datasets for broadcast items. Use /schedules instead of this feed as it is more efficient. Broadcasts will be deprecated in the future.


```js
bbc.listBroadcasts({}, context)
```


### listGroups
Long-lived curated collections of programmes and more, including Collections, Seasons, Franchises and Galleries


```js
bbc.listGroups({}, context)
```


### listImages
Find metadata for images, particularly those in galleries


```js
bbc.listImages({}, context)
```


### listItems
Look inside programmes to find segments: chapters, tracks and more


```js
bbc.listItems({}, context)
```


### listMasterbrands
List all Master Brands


```js
bbc.listMasterbrands({}, context)
```


### listPeople
The People feed allows you to search for the people and groups that contribute to programmes. This is the starting point for cast and crew credits, as well as finding contributors using external IDs (such as Wikipedia URLs)


```js
bbc.listPeople({}, context)
```


### listPips
Look inside pips entities


```js
bbc.listPips({}, context)
```


### listProgrammeDetails
Exposes programme information for a single pid


```js
bbc.listProgrammeDetails({}, context)
```


### listProgrammes
Fetch metadata about Programmes (brands, series, episodes, clips). By applying different filter restrictions this feed can be used in many ways, for example to retrieve all series belonging to a brand, all the episodes and/or clips for a specific series, or any TLEO objects for a masterbrand. Other filters permit restricting to specific formats and/or genres, and you can request specific versions (for example Signed or Audio-Described). Parameters may be combined in any way suitable for your application.


```js
bbc.listProgrammes({}, context)
```


### listPromotions
Details of short-term editorially curated "promotions", for instance those programmes featured on iPlayer today


```js
bbc.listPromotions({}, context)
```


### listSchedules
Dates, Times, Schedules: when and where are programmes being shown?


```js
bbc.listSchedules({}, context)
```


### getXSD
Get Schema definition


```js
bbc.getXSD(null, context)
```


### listServices
The services feed exposes the linear broadcast "services" from PIPs. These are the actual services which broadcast programmes (eg bbc_one_oxford is the service for BBC One in Oxford).


```js
bbc.listServices({}, context)
```


### Get_Raw_brand
Get raw brand


```js
bbc.Get_Raw_brand({
  "pid": ""
}, context)
```

#### Parameters
* pid (string) **required**

### v1.brands.pid.franchises.get
Get raw brand franchises


```js
bbc.v1.brands.pid.franchises.get({
  "pid": ""
}, context)
```

#### Parameters
* pid (string) **required**

### Get_Raw_episode
Get raw episode


```js
bbc.Get_Raw_episode({
  "pid": ""
}, context)
```

#### Parameters
* pid (string) **required**

### Get_Raw_ancestors
Get raw ancestors


```js
bbc.Get_Raw_ancestors({
  "pid": ""
}, context)
```

#### Parameters
* pid (string) **required**

### Get_Raw_formats
Get raw formats


```js
bbc.Get_Raw_formats({
  "pid": ""
}, context)
```

#### Parameters
* pid (string) **required**

### Get_Raw_genre_groups
Get raw genre groups


```js
bbc.Get_Raw_genre_groups({
  "pid": ""
}, context)
```

#### Parameters
* pid (string) **required**

### Get_Raw_image
Get raw image


```js
bbc.Get_Raw_image({
  "pid": ""
}, context)
```

#### Parameters
* pid (string) **required**

### Get_Raw_masterbrand
Get raw masterbrand


```js
bbc.Get_Raw_masterbrand({
  "mbid": ""
}, context)
```

#### Parameters
* mbid (string) **required**

### Get_Raw_promotion
Get raw promotion


```js
bbc.Get_Raw_promotion({
  "pid": ""
}, context)
```

#### Parameters
* pid (string) **required**

### listVersions
The versions feed exposes editorial "Versions" of programmes. These are concepts used to capture different presentations of an overall programme: for example, versions of a programme may include one with sign language, one with audio description, one edited for content and more. Versions are also important to understand for broadcasts: a linear broadcast or an ondemand is always of a specific version, not merely of a programme.


```js
bbc.listVersions({}, context)
```


