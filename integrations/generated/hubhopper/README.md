# @datafire/hubhopper

Client library for Hubhopper Partner Integration API(s) - Production

## Installation and Usage
```bash
npm install --save @datafire/hubhopper
```
```js
let hubhopper = require('@datafire/hubhopper').create({
  api_key: "",
  partner_id: ""
});

.then(data => {
  console.log(data);
});
```

## Description

This is an interactive document explaining the API(s) that could be used to fetch data from [Hubhopper](https://hubhopper.com). Use the api key provided to authorize `x-api-key` and test the API(s). The output data models are also available for reference.

## Actions

### categories.get
Get the list of all content categories.


```js
hubhopper.categories.get({}, context)
```

#### Input
* input `object`
  * pageSize `string`: Provide the size of the page to fetch.
  * page `string`: Provide the page number to fetch.

#### Output
* output [CategoryList](#categorylist)

### categories.categoryId.get
Get specific content category.


```js
hubhopper.categories.categoryId.get({
  "categoryId": ""
}, context)
```

#### Input
* input `object`
  * categoryId **required** `string`: Unique qualifier for a category.

#### Output
* output [SingleCategory](#singlecategory)

### categories.categoryId.podcasts.get
Get a list of all podcasts under a category.


```js
hubhopper.categories.categoryId.podcasts.get({
  "categoryId": ""
}, context)
```

#### Input
* input `object`
  * categoryId **required** `string`: Unique qualifier for a category.
  * page `string`: Provide the page number to fetch.
  * pageSize `string`: Provide the size of the page to fetch.
  * order `string`: Order the items by 'newest' | 'random'
  * filters `string`: Takes filters like 'lang' in a url encoded json. 

#### Output
* output [PodcastList](#podcastlist)

### podcasts.get
Get the list of all podcasts.


```js
hubhopper.podcasts.get({}, context)
```

#### Input
* input `object`
  * page `string`: Provide the page number to fetch.
  * pageSize `string`: Provide the size of the page to fetch.
  * order `string`: Order the items by 'newest' | 'random'
  * filters `string`: Takes filters like 'lang' in a url encoded json. 

#### Output
* output [PodcastList](#podcastlist)

### podcasts.podcastId.get
Get a single Podcast.


```js
hubhopper.podcasts.podcastId.get({
  "podcastId": ""
}, context)
```

#### Input
* input `object`
  * podcastId **required** `string`: Unique qualifier for a podcast.

#### Output
* output [SinglePodcast](#singlepodcast)

### podcasts.podcastId.episodes.get
Get a list of all episodes under a podcast.


```js
hubhopper.podcasts.podcastId.episodes.get({
  "podcastId": ""
}, context)
```

#### Input
* input `object`
  * page `string`: Provide the page number to fetch.
  * pageSize `string`: Provide the size of the page to fetch.
  * order `string`: Order the items by 'newest' | 'random'
  * filters `string`: Takes filters like 'lang' in a url encoded json. 
  * podcastId **required** `string`: Unique qualifier for a podcast.

#### Output
* output [PodcastEpisodeList](#podcastepisodelist)

### util.languages.get



```js
hubhopper.util.languages.get({}, context)
```

#### Input
* input `object`
  * pageSize `string`: Provide the size of the page to fetch.
  * page `string`: Provide the page number to fetch.

#### Output
* output [LanguageList](#languagelist)



## Definitions

### CategoryList
* CategoryListOutputModel `object`
  * categories `array`
    * items [CategoryListCategoriesItem](#categorylistcategoriesitem)
  * noOfPages `integer`
  * page `integer`
  * pageSize `integer`
  * total `integer`

### CategoryListCategoriesItem
* CategoryListCategoriesItem `object`
  * id `integer`
  * name `string`
  * url `string`

### Empty
* Empty Schema `object`

### Error
* Error Schema `object`
  * message `string`

### LanguageItem
* LanguageItem `object`
  * code `string`
  * id `integer`
  * name `string`

### LanguageList
* LanguageList `object`
  * languages `array`
    * items [LanguageItem](#languageitem)
  * noOfPages `integer`
  * page `integer`
  * pageSize `integer`
  * total `integer`

### PodcastEpisodeList
* PodcastEpisodeListOutputModel `object`
  * episodes `array`
    * items [PodcastEpisodeListEpisodesItem](#podcastepisodelistepisodesitem)
  * noOfPages `integer`
  * page `integer`
  * pageSize `integer`
  * total `integer`

### PodcastEpisodeListEpisodesItem
* PodcastEpisodeListEpisodesItem `object`
  * author `string`
  * description `string`
  * episodeId `integer`
  * episodeUrl `string`
  * image `string`
  * isNew `boolean`
  * play `object`
    * duration `string`
    * durationInSec `integer`
    * size `string`
    * type `string`
    * url `string`
  * podcastId `integer`
  * podcastUrl `string`
  * publishTime `string`
  * publishedOn `integer`
  * title `string`

### PodcastList
* PodcastListOutputModel `object`
  * noOfPages `integer`
  * page `integer`
  * pageSize `integer`
  * podcasts `array`
    * items [PodcastListPodcastsItem](#podcastlistpodcastsitem)
  * total `integer`

### PodcastListPodcastsItem
* PodcastListPodcastsItem `object`
  * author `string`
  * category `object`
    * id `integer`
    * name `string`
  * categoryId `integer`
  * description `string`
  * episodes `integer`
  * featured `object`
    * id `integer`
    * name `string`
  * featuredId `integer`
  * image `string`
  * keywords `string`
  * latestEpisodeTime `string`
  * podcastId `integer`
  * title `string`
  * url `string`

### SingleCategory
* SingleCategoryOutputModel `object`: Model to fetch a single category.
  * category [SingleCategoryCategory](#singlecategorycategory)

### SingleCategoryCategory
* SingleCategoryCategory `object`
  * id `integer`
  * name `string`
  * url `string`

### SinglePodcast
* SinglePodcastOutputModel `object`
  * podcast [SinglePodcastPodcast](#singlepodcastpodcast)

### SinglePodcastPodcast
* SinglePodcastPodcast `object`
  * author `string`
  * category `object`
    * id `integer`
    * name `string`
  * categoryId `integer`
  * description `string`
  * episodes `integer`
  * featured `object`
    * id `integer`
    * name `string`
  * featuredId `integer`
  * image `string`
  * keywords `string`
  * latest_episode_time `string`
  * podcastId `integer`
  * title `string`
  * url `string`
  * website `string`


