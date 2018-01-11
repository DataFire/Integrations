# @datafire/nytimes_most_popular_api

Client library for Most Popular

## Installation and Usage
```bash
npm install --save @datafire/nytimes_most_popular_api
```
```js
let nytimes_most_popular_api = require('@datafire/nytimes_most_popular_api').create({
  "api-key": ""
});

nytimes_most_popular_api.mostemailed.section.time_period.json.get({}).then(data => {
  console.log(data);
})
```

## Description

Get lists of NYT Articles based on shares, emails, and views.

## Actions

### mostemailed.section.time_period.json.get
Most Emailed by Section & Time Period


```js
nytimes_most_popular_api.mostemailed.section.time_period.json.get({
  "section": "",
  "time-period": ""
}, context)
```

#### Input
* input `object`
  * section **required** `string` (values: Arts, Automobiles, Blogs, Books, Business Day, Education, Fashion & Style, Food, Health, Job Market, Magazine, membercenter, Movies, Multimedia, N.Y.%20%2F%20Region, NYT Now, Obituaries, Open, Opinion, Public Editor, Real Estate, Science, Sports, Style, Sunday Review, T Magazine, Technology, The Upshot, Theater, Times Insider, Today’s Paper, Travel, U.S., World, Your Money, all-sections): Limits the results by one or more sections. You can use
  * time-period **required** `string` (values: 1, 7, 30): Number of days `1 | 7 | 30 ` corresponds to a day, a week, or a month of content.

#### Output
* output `object`
  * copyright `string`
  * num_results `integer`
  * results `array`
    * items [ArticleWithCountType](#articlewithcounttype)
  * status `string`

### mostshared.section.time_period.json.get
Most Shared by Section & Time Period


```js
nytimes_most_popular_api.mostshared.section.time_period.json.get({
  "section": "",
  "time-period": ""
}, context)
```

#### Input
* input `object`
  * section **required** `string` (values: Arts, Automobiles, Blogs, Books, Business Day, Education, Fashion & Style, Food, Health, Job Market, Magazine, membercenter, Movies, Multimedia, N.Y.%20%2F%20Region, NYT Now, Obituaries, Open, Opinion, Public Editor, Real Estate, Science, Sports, Style, Sunday Review, T Magazine, Technology, The Upshot, Theater, Times Insider, Today’s Paper, Travel, U.S., World, Your Money, all-sections): Limits the results by one or more sections. You can use
  * time-period **required** `string` (values: 1, 7, 30): Number of days `1 | 7 | 30 ` corresponds to a day, a week, or a month of content.

#### Output
* output `object`
  * copyright `string`
  * num_results `integer`
  * results `array`
    * items [Article](#article)
  * status `string`

### mostviewed.section.time_period.json.get
Most Viewed by Section & Time Period


```js
nytimes_most_popular_api.mostviewed.section.time_period.json.get({
  "section": "",
  "time-period": ""
}, context)
```

#### Input
* input `object`
  * section **required** `string` (values: Arts, Automobiles, Blogs, Books, Business Day, Education, Fashion & Style, Food, Health, Job Market, Magazine, membercenter, Movies, Multimedia, N.Y.%20%2F%20Region, NYT Now, Obituaries, Open, Opinion, Public Editor, Real Estate, Science, Sports, Style, Sunday Review, T Magazine, Technology, The Upshot, Theater, Times Insider, Today’s Paper, Travel, U.S., World, Your Money, all-sections): Limits the results by one or more sections. You can use
  * time-period **required** `string` (values: 1, 7, 30): Number of days `1 | 7 | 30 ` corresponds to a day, a week, or a month of content.

#### Output
* output `object`
  * copyright `string`
  * num_results `integer`
  * results `array`
    * items [Article](#article)
  * status `string`



## Definitions

### Article
* Article `object`
  * abstract `string`
  * byline `string`
  * column `string`
  * des_facet [DesFacet](#desfacet)
  * geo_facet [GeoFacet](#geofacet)
  * media `array`, `string`

  * org_facet [OrgFacet](#orgfacet)
  * per_facet [PerFacet](#perfacet)
  * published_date `string`
  * section `string`
  * source `string`
  * title `string`
  * url `string`

### ArticleWithCountType
* ArticleWithCountType `object`
  * abstract `string`
  * byline `string`
  * column `string`
  * count_type `string`
  * des_facet [DesFacet](#desfacet)
  * geo_facet [GeoFacet](#geofacet)
  * media `array`
    * items `object`
      * caption `string`
      * copyright `string`
      * media-metadata `object`
        * format `string`
        * height `integer`
        * url `string`
        * width `integer`
      * subtype `string`
      * type `string`
  * org_facet [OrgFacet](#orgfacet)
  * per_facet [PerFacet](#perfacet)
  * published_date `string`
  * section `string`
  * source `string`
  * title `string`
  * url `string`

### DesFacet
* DesFacet `array`, `string`


### GeoFacet
* GeoFacet `array`, `string` (values: )


### OrgFacet
* OrgFacet `array`


### PerFacet
* PerFacet `array`



