# @datafire/nytimes_times_tags

Client library for TimesTags

## Installation and Usage
```bash
npm install --save @datafire/nytimes_times_tags
```
```js
let nytimes_times_tags = require('@datafire/nytimes_times_tags').create({
  apikey: ""
});

nytimes_times_tags.timestags.get({}).then(data => {
  console.log(data);
})
```

## Description

With the TimesTags API, you can mine the riches of the New York Times tag set. The TimesTags service matches your query to the controlled vocabularies that fuel NYTimes.com metadata. You supply a string of characters, and the service returns a ranked list of suggested terms.

## Actions

### timestags.get



```js
nytimes_times_tags.timestags.get({
  "query": ""
}, context)
```

#### Input
* input `object`
  * query **required** `string`: Your search query
  * filter `string` (values: Des, Geo, Org, Per): If you do not specify a value for filter (see the Optional Parameters), your query will be matched to tags in all four Times dictionaries: subject, geographic location, organization and person. To use more than one, separate with commas.
  * max `integer`: Sets the maximum number of results

#### Output
* output `array`
  * items `array`
    * items `string`



## Definitions

**This integration has no definitions**
