# @datafire/pressassociation

Client library for TV API

## Installation and Usage
```bash
npm install --save @datafire/pressassociation
```
```js
let pressassociation = require('@datafire/pressassociation').create({
  apikey: ""
});

.then(data => {
  console.log(data);
});
```

## Description

Welcome to the API Reference Docs page for the Press Association TV API (v2).

## Actions

### listAssets
Return a collection of Assets.


```js
pressassociation.listAssets({}, context)
```

#### Input
* input `object`
  * updatedAfter `string`: Updated After
  * limit `integer`: Limit the the number of items to be returned per page. For example: 5.
  * aliases `boolean`: Flag to display Legacy and Provider Ids.

#### Output
* output `object`

### getAsset
Return the content of the selected asset.


```js
pressassociation.getAsset({
  "assetId": ""
}, context)
```

#### Input
* input `object`
  * assetId **required** `string`: A asset ID filter for the schedule collection. This can be a reference to any type of asset i.e. movie, season, series or episode.
  * aliases `boolean`: Flag to display Legacy and Provider Ids.

#### Output
* output `object`

### getAssetContributors
Return the contributors of the selected asset.


```js
pressassociation.getAssetContributors({
  "assetId": ""
}, context)
```

#### Input
* input `object`
  * assetId **required** `string`: A asset ID filter for the schedule collection. This can be a reference to any type of asset i.e. movie, season, series or episode.
  * aliases `boolean`: Flag to display Legacy and Provider Ids.

#### Output
* output `object`

### listChannels
If you are interested in a list of channels that have had there schedule updated you can filter by the following query params.
 - scheduleStart
 - scheduleEnd
 - scheduleUpdatedSince

adding these query params will filter the channel collection to only return channels that have been updated within the given range, updatedSince stores the state of your previous call.

Example Usage: Every 10 minutes get me the channels that have updated schedules for the next 2 weeks.

/channel?platform={uuid}&scheduleStart={today}&scheduleEnd={today + 2 weeks}&updatedSince={10 minutes ago}

Also please note epg numbers are only exposed when a platform and region are passed to the query.


```js
pressassociation.listChannels({}, context)
```

#### Input
* input `object`
  * platformId `string`: The identifier for the selected platform. Multiple platforms can be passed to the API without a region Id. Passing multiple platforms without a region will not return epg numbers as these are linked to a platform and region.
  * regionId `string`: The platform region ID for the channel selection.
  * aliases `boolean`: Flag to display Legacy and Provider Ids.
  * date `string`: Date of the Channel State to select, this will display channel names and attributes in the future or past.
  * scheduleStart `string`: The Start Date for the schedule.
  * scheduleEnd `string`: The End Date for the schedule.
  * scheduleUpdatedSince `string`: Schedule Updated Since

#### Output
* output `object`

### getChannel
Return the content of the selected channel.


```js
pressassociation.getChannel({
  "channelId": ""
}, context)
```

#### Input
* input `object`
  * channelId **required** `string`: The identifier for the selected channel.
  * aliases `boolean`: Flag to display Legacy and Provider Ids.

#### Output
* output `object`

### listContributor
Return a collection of Contributors.


```js
pressassociation.listContributor({}, context)
```

#### Input
* input `object`
  * updatedAfter `string`: Updated After
  * limit `integer`: Limit the the number of items to be returned per page. For example: 5.
  * aliases `boolean`: Flag to display Legacy and Provider Ids.

#### Output
* output `object`

### getContributor
Return the content of the selected contributor.


```js
pressassociation.getContributor({
  "contributorId": ""
}, context)
```

#### Input
* input `object`
  * contributorId **required** `string`: Filter the schedule items by contributor ID
  * aliases `boolean`: Flag to display Legacy and Provider Ids.

#### Output
* output `object`

### listFeatures
Return a collection of Feature.


```js
pressassociation.listFeatures({}, context)
```

#### Input
* input `object`
  * type `string`: The namespace of the feature type.
  * date `string`: Date of the collection of feature items.
  * start `string`: Start date for a range of features.
  * end `string`: End date for a range of features.

#### Output
* output `object`

### listFeatureTypes
Return a collection of Feature Types.


```js
pressassociation.listFeatureTypes(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`

### getFeature
Return the content of the selected feature.


```js
pressassociation.getFeature({
  "featureId": ""
}, context)
```

#### Input
* input `object`
  * featureId **required** `string`: The identifier for the selected feature.

#### Output
* output `object`

### listPlatforms
Return a list of available platforms.


```js
pressassociation.listPlatforms({}, context)
```

#### Input
* input `object`
  * aliases `boolean`: Flag to display Legacy and Provider Ids.

#### Output
* output `object`

### getPlatform
Return the content of the selected platform.


```js
pressassociation.getPlatform({
  "platformId": ""
}, context)
```

#### Input
* input `object`
  * platformId **required** `string`: The identifier for the selected platform.

#### Output
* output `object`

### listPlatformRegions
Return a list of regions for a platform.


```js
pressassociation.listPlatformRegions({
  "platformId": ""
}, context)
```

#### Input
* input `object`
  * platformId **required** `string`: The identifier for the selected platform.
  * aliases `boolean`: Flag to display Legacy and Provider Ids.

#### Output
* output `object`

### listSchedule
The schedule endpoint produces a linear TV schedule for a given channel and date range.

 - The date range supplied must be no larger than 21 days.
 - If no end data is passed the API will default to start date + 24 hours.


```js
pressassociation.listSchedule({
  "channelId": "",
  "start": ""
}, context)
```

#### Input
* input `object`
  * channelId **required** `string`: The identifier for the selected channel.
  * start **required** `string`: The Start Date for the schedule.
  * end `string`: The End Date for the schedule.
  * aliases `boolean`: Flag to display Legacy and Provider Ids.

#### Output
* output `object`



## Definitions

*This integration has no definitions*
