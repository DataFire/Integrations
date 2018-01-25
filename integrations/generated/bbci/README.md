# @datafire/bbci

Client library for BBC iPlayer Business Layer

## Installation and Usage
```bash
npm install --save @datafire/bbci
```
```js
let bbci = require('@datafire/bbci').create({
  api_key: "",
  username: "",
  password: ""
});

bbci.atoz.letter.programmes.get({
  "letter": "",
  "rights": "",
  "page": 0,
  "per_page": 0,
  "initial_child_count": 0,
  "sort": "",
  "sort_direction": "",
  "availability": ""
}).then(data => {
  console.log(data);
});
```

## Description

The definitive iPlayer API.

## Actions

### atoz.letter.programmes.get
Get the Programmes whose title begins with the given initial character.


```js
bbci.atoz.letter.programmes.get({
  "letter": "",
  "rights": "",
  "page": 0,
  "per_page": 0,
  "initial_child_count": 0,
  "sort": "",
  "sort_direction": "",
  "availability": ""
}, context)
```

#### Input
* input `object`
  * letter **required** `string`: Letter to search by, a to z or the string '0-9'
  * rights **required** `string` (values: mobile, tv, web): The rights group to limit results to.
  * page **required** `integer`: The page index.
  * per_page **required** `integer`: The number of results to return.
  * initial_child_count **required** `integer`: The depth to return child entities.
  * sort **required** `string` (values: title): The sort order of the results.
  * sort_direction **required** `string` (values: asc, desc): Whether to sort ascending or descending
  * availability **required** `string` (values: all, available): Whether to return all, or available programmes

#### Output
* output [ibl](#ibl)

### Get_Categories_
Get the list of all the categories in TV & iPlayer.


```js
bbci.Get_Categories_({
  "lang": ""
}, context)
```

#### Input
* input `object`
  * lang **required** `string` (values: en, cy, ga, gd, pi): The language for any applicable localised strings.

#### Output
* output [ibl](#ibl)

### categories.category.get
Get sub-categories


```js
bbci.categories.category.get({
  "category": "",
  "lang": ""
}, context)
```

#### Input
* input `object`
  * category **required** `string`: The category identifier to return results from.
  * lang **required** `string` (values: en, cy, ga, gd, pi): The language for any applicable localised strings.

#### Output
* output [ibl](#ibl)

### categories.category.episodes.get
Get the list of all the episodes for a given category in TV & iPlayer.


```js
bbci.categories.category.episodes.get({
  "category": "",
  "lang": "",
  "rights": "",
  "availability": "",
  "page": 0,
  "per_page": 0
}, context)
```

#### Input
* input `object`
  * category **required** `string`: The category identifier to return results from.
  * lang **required** `string` (values: en, cy, ga, gd, pi): The language for any applicable localised strings.
  * rights **required** `string` (values: mobile, tv, web): The rights group to limit results to.
  * availability **required** `string` (values: all, available): Whether to return all, or available programmes
  * page **required** `integer`: The page index.
  * per_page **required** `integer`: The number of results to return.
  * sort `string` (values: recent, popular): The sort order of the results.

#### Output
* output [ibl](#ibl)

### categories.category.highlights.get
Get the editorial highlights of a given category in TV & iPlayer.


```js
bbci.categories.category.highlights.get({
  "category": "",
  "lang": "",
  "rights": "",
  "availability": ""
}, context)
```

#### Input
* input `object`
  * category **required** `string`: The category identifier to return results from.
  * lang **required** `string` (values: en, cy, ga, gd, pi): The language for any applicable localised strings.
  * rights **required** `string` (values: mobile, tv, web): The rights group to limit results to.
  * availability **required** `string` (values: all, available): Whether to return all, or available programmes
  * mixin `array` (values: live, promotions): Request additional data in the output

#### Output
* output [ibl](#ibl)

### categories.category.programmes.get
Get the list of all the Programmes (TLEOs) for a given category in TV & iPlayer.


```js
bbci.categories.category.programmes.get({
  "category": "",
  "lang": "",
  "rights": "",
  "availability": "",
  "page": 0,
  "per_page": 0
}, context)
```

#### Input
* input `object`
  * category **required** `string`: The category identifier to return results from.
  * lang **required** `string` (values: en, cy, ga, gd, pi): The language for any applicable localised strings.
  * rights **required** `string` (values: mobile, tv, web): The rights group to limit results to.
  * availability **required** `string` (values: all, available): Whether to return all, or available programmes
  * page **required** `integer`: The page index.
  * per_page **required** `integer`: The number of results to return.

#### Output
* output [ibl](#ibl)

### Get_Channels_
Get the list of all the channels TV & iPlayer.


```js
bbci.Get_Channels_({
  "lang": ""
}, context)
```

#### Input
* input `object`
  * region `string`: The region to get the channels for.
  * lang **required** `string` (values: en, cy, ga, gd, pi): The language for any applicable localised strings.

#### Output
* output [ibl](#ibl)

### channels.channel.broadcasts.get
Get broadcasts by channel


```js
bbci.channels.channel.broadcasts.get({
  "channel": "",
  "lang": "",
  "rights": "",
  "availability": "",
  "per_page": 0
}, context)
```

#### Input
* input `object`
  * channel **required** `string`: The channel identifier to limit results to.
  * lang **required** `string` (values: en, cy, ga, gd, pi): The language for any applicable localised strings.
  * rights **required** `string` (values: mobile, tv, web): The rights group to limit results to.
  * availability **required** `string` (values: all, available): Whether to return all, or available programmes
  * mixin `array` (values: live, promotions): Request additional data in the output
  * per_page **required** `integer`: The number of results to return.
  * from `string`: Time to return results from, e.g. -3h

#### Output
* output [ibl](#ibl)

### channels.channel.highlights.get
Get the editorial highlights of a given channel in TV & iPlayer.


```js
bbci.channels.channel.highlights.get({
  "channel": "",
  "lang": "",
  "rights": "",
  "availability": ""
}, context)
```

#### Input
* input `object`
  * channel **required** `string`: The channel identifier to limit results to.
  * lang **required** `string` (values: en, cy, ga, gd, pi): The language for any applicable localised strings.
  * rights **required** `string` (values: mobile, tv, web): The rights group to limit results to.
  * availability **required** `string` (values: all, available): Whether to return all, or available programmes
  * live `boolean`: Whether to include live programmes
  * mixin `array` (values: live, promotions): Request additional data in the output

#### Output
* output [ibl](#ibl)

### channels.channel.programmes.get
Get programmes by channel


```js
bbci.channels.channel.programmes.get({
  "channel": "",
  "lang": "",
  "rights": "",
  "availability": "",
  "page": 0,
  "per_page": 0
}, context)
```

#### Input
* input `object`
  * channel **required** `string`: The channel identifier to limit results to.
  * lang **required** `string` (values: en, cy, ga, gd, pi): The language for any applicable localised strings.
  * rights **required** `string` (values: mobile, tv, web): The rights group to limit results to.
  * availability **required** `string` (values: all, available): Whether to return all, or available programmes
  * page **required** `integer`: The page index.
  * per_page **required** `integer`: The number of results to return.

#### Output
* output [ibl](#ibl)

### channels.channel.schedule.date.get
Get schedule by channel


```js
bbci.channels.channel.schedule.date.get({
  "channel": "",
  "date": "",
  "lang": "",
  "rights": "",
  "availability": ""
}, context)
```

#### Input
* input `object`
  * channel **required** `string`: The channel identifier to limit results to.
  * date **required** `string`: The date to return the schedule for, yyyy-mm-dd format
  * lang **required** `string` (values: en, cy, ga, gd, pi): The language for any applicable localised strings.
  * rights **required** `string` (values: mobile, tv, web): The rights group to limit results to.
  * availability **required** `string` (values: all, available): Whether to return all, or available programmes

#### Output
* output [ibl](#ibl)

### Get_Clips_
Get Clips


```js
bbci.Get_Clips_({
  "pid": "",
  "rights": "",
  "availability": ""
}, context)
```

#### Input
* input `object`
  * pid **required** `string`: The programme identifier.
  * rights **required** `string` (values: mobile, tv, web): The rights group to limit results to.
  * availability **required** `string` (values: all, available): Whether to return all, or available programmes

#### Output
* output [ibl](#ibl)

### episodes.pid.get
Get the episode for a given episode identifier.


```js
bbci.episodes.pid.get({
  "pid": "",
  "rights": "",
  "availability": ""
}, context)
```

#### Input
* input `object`
  * pid **required** `string`: The programme identifier.
  * rights **required** `string` (values: mobile, tv, web): The rights group to limit results to.
  * availability **required** `string` (values: all, available): Whether to return all, or available programmes
  * mixin `array` (values: live, promotions): Request additional data in the output

#### Output
* output [ibl](#ibl)

### Get_Onward_Journey
Get Onward Journey (next programme)


```js
bbci.Get_Onward_Journey({
  "pid": "",
  "rights": "",
  "availability": ""
}, context)
```

#### Input
* input `object`
  * pid **required** `string`: The programme identifier.
  * rights **required** `string` (values: mobile, tv, web): The rights group to limit results to.
  * availability **required** `string` (values: all, available): Whether to return all, or available programmes

#### Output
* output [ibl](#ibl)

### getPostRolls
Get Follow-ups (post-rolls)


```js
bbci.getPostRolls({
  "pid": "",
  "rights": "",
  "availability": ""
}, context)
```

#### Input
* input `object`
  * pid **required** `string`: The programme identifier.
  * rights **required** `string` (values: mobile, tv, web): The rights group to limit results to.
  * availability **required** `string` (values: all, available): Whether to return all, or available programmes

#### Output
* output [ibl](#ibl)

### episodes.pid.prerolls.get
Get Trailers (pre-rolls)


```js
bbci.episodes.pid.prerolls.get({
  "pid": "",
  "rights": "",
  "availability": ""
}, context)
```

#### Input
* input `object`
  * pid **required** `string`: The programme identifier.
  * rights **required** `string` (values: mobile, tv, web): The rights group to limit results to.
  * availability **required** `string` (values: all, available): Whether to return all, or available programmes

#### Output
* output [ibl](#ibl)

### episodes.pid.recommendations.get
Get programme recommendations


```js
bbci.episodes.pid.recommendations.get({
  "pid": "",
  "rights": "",
  "availability": "",
  "page": 0,
  "per_page": 0
}, context)
```

#### Input
* input `object`
  * pid **required** `string`: The programme identifier.
  * rights **required** `string` (values: mobile, tv, web): The rights group to limit results to.
  * availability **required** `string` (values: all, available): Whether to return all, or available programmes
  * page **required** `integer`: The page index.
  * per_page **required** `integer`: The number of results to return.

#### Output
* output [ibl](#ibl)

### groups.popular.episodes.get
Get programmes popular


```js
bbci.groups.popular.episodes.get({
  "rights": "",
  "page": 0,
  "per_page": 0,
  "initial_child_count": 0,
  "sort": "",
  "sort_direction": "",
  "availability": ""
}, context)
```

#### Input
* input `object`
  * rights **required** `string` (values: mobile, tv, web): The rights group to limit results to.
  * page **required** `integer`: The page index.
  * per_page **required** `integer`: The number of results to return.
  * initial_child_count **required** `integer`: The depth to return child entities.
  * sort **required** `string`: The sort order of the results.
  * sort_direction **required** `string` (values: asc, desc): Whether to sort ascending or descending
  * availability **required** `string` (values: all, available): Whether to return all, or available programmes
  * mixin `array` (values: live, promotions): Request additional data in the output

#### Output
* output [ibl](#ibl)

### groups.pid.episodes.get
Get episodes by group, brand or series


```js
bbci.groups.pid.episodes.get({
  "pid": "",
  "rights": "",
  "page": 0,
  "per_page": 0,
  "initial_child_count": 0,
  "sort": "",
  "sort_direction": "",
  "availability": ""
}, context)
```

#### Input
* input `object`
  * pid **required** `string`: The programme identifier.
  * rights **required** `string` (values: mobile, tv, web): The rights group to limit results to.
  * page **required** `integer`: The page index.
  * per_page **required** `integer`: The number of results to return.
  * initial_child_count **required** `integer`: The depth to return child entities.
  * sort **required** `string`: The sort order of the results.
  * sort_direction **required** `string` (values: asc, desc): Whether to sort ascending or descending
  * availability **required** `string` (values: all, available): Whether to return all, or available programmes
  * mixin `array` (values: live, promotions): Request additional data in the output

#### Output
* output [ibl](#ibl)

### home.highlights.get
Get programme highlights


```js
bbci.home.highlights.get({
  "lang": "",
  "rights": "",
  "availability": ""
}, context)
```

#### Input
* input `object`
  * lang **required** `string` (values: en, cy, ga, gd, pi): The language for any applicable localised strings.
  * rights **required** `string` (values: mobile, tv, web): The rights group to limit results to.
  * availability **required** `string` (values: all, available): Whether to return all, or available programmes
  * mixin `array` (values: live, promotions): Request additional data in the output

#### Output
* output [ibl](#ibl)

### programmes.pid.get
Get the programme for a given programme identifier.


```js
bbci.programmes.pid.get({
  "pid": "",
  "rights": "",
  "availability": "",
  "initial_child_count": 0
}, context)
```

#### Input
* input `object`
  * pid **required** `string`: The programme identifier.
  * rights **required** `string` (values: mobile, tv, web): The rights group to limit results to.
  * availability **required** `string` (values: all, available): Whether to return all, or available programmes
  * initial_child_count **required** `integer`: The depth to return child entities.

#### Output
* output [ibl](#ibl)

### programmes.pid.episodes.get
Get the child episodes belonging to a given programme identifier.


```js
bbci.programmes.pid.episodes.get({
  "pid": "",
  "rights": "",
  "availability": "",
  "initial_child_count": 0
}, context)
```

#### Input
* input `object`
  * pid **required** `string`: The programme identifier.
  * rights **required** `string` (values: mobile, tv, web): The rights group to limit results to.
  * availability **required** `string` (values: all, available): Whether to return all, or available programmes
  * initial_child_count **required** `integer`: The depth to return child entities.

#### Output
* output [ibl](#ibl)

### Get_Regions_
Get the list of all the regions TV & iPlayer.


```js
bbci.Get_Regions_({
  "lang": ""
}, context)
```

#### Input
* input `object`
  * lang **required** `string` (values: en, cy, ga, gd, pi): The language for any applicable localised strings.

#### Output
* output [ibl](#ibl)

### Get_Schema_
Get schema


```js
bbci.Get_Schema_(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [ibl](#ibl)

### Search_
Search


```js
bbci.Search_({
  "q": "",
  "lang": "",
  "rights": "",
  "availability": ""
}, context)
```

#### Input
* input `object`
  * q **required** `string`: The term to search for.
  * lang **required** `string` (values: en, cy, ga, gd, pi): The language for any applicable localised strings.
  * rights **required** `string` (values: mobile, tv, web): The rights group to limit results to.
  * availability **required** `string` (values: all, available): Whether to return all, or available programmes

#### Output
* output [ibl](#ibl)

### search_suggest.get
Search-suggest


```js
bbci.search_suggest.get({
  "q": "",
  "lang": "",
  "rights": "",
  "availability": ""
}, context)
```

#### Input
* input `object`
  * q **required** `string`: The term to search for.
  * lang **required** `string` (values: en, cy, ga, gd, pi): The language for any applicable localised strings.
  * rights **required** `string` (values: mobile, tv, web): The rights group to limit results to.
  * availability **required** `string` (values: all, available): Whether to return all, or available programmes

#### Output
* output [ibl](#ibl)

### Get_Status_
Get the current iPlayer business layer status. This tells the caller the status of the iPlayer data, but not necessarily the overall status of the website. In the future it might include the status of the dependent data services within the BBC.


```js
bbci.Get_Status_(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [ibl](#ibl)

### user.purchases.get
Get user store purchases


```js
bbci.user.purchases.get({
  "identity_cookie": 0
}, context)
```

#### Input
* input `object`
  * identity_cookie **required** `number`: The BBC-id cookie value

#### Output
* output [ibl](#ibl)

### user.recommendations.get
Get user store recommendations


```js
bbci.user.recommendations.get({
  "identity_cookie": 0
}, context)
```

#### Input
* input `object`
  * identity_cookie **required** `number`: The BBC-id cookie value

#### Output
* output [ibl](#ibl)

### user.watching.get
Get user watching


```js
bbci.user.watching.get({
  "identity_cookie": 0
}, context)
```

#### Input
* input `object`
  * identity_cookie **required** `number`: The BBC-id cookie value

#### Output
* output [ibl](#ibl)



## Definitions

### added
* added `object`
  * programme **required** [programme](#programme)
  * type **required** `string` (values: added)
  * urn **required** `string`

### broadcast
* broadcast `object`
  * available_on_hd_service `string`
  * blanked **required** `boolean`
  * channel_title `string`
  * duration `object`
    * text **required** `string`
    * value **required** `string`
  * episode **required** [episode](#episode)
  * episode_id **required** `string`
  * id **required** `string`
  * repeat **required** `boolean`
  * scheduled_end **required** `string`
  * scheduled_start **required** `string`
  * service_id **required** `string`
  * transmission_end `string`
  * transmission_start `string`
  * type **required** `string` (values: broadcast)
  * version_id **required** `string`

### category
* category `object`
  * child_episode_count `number`
  * child_programme_count `number`
  * contextual_title `string`
  * id **required** `string`
  * kind **required** `string` (values: genre, accessibility, national)
  * parent_category `string`
  * sub_categories `array`
    * items [category](#category)
  * title **required** `string`
  * type **required** `string` (values: category)

### channel
* channel `object`
  * has_schedule **required** `boolean`
  * id **required** `string`
  * master_brand_id **required** `string`
  * master_brand_title **required** `string`
  * on_air `boolean`
  * title **required** `string`
  * type **required** `string` (values: channel)

### clip
* clip `object`
  * id **required** `string`
  * images **required** `object`
    * inherited_from `string`
    * standard **required** `string`
    * type **required** `string` (values: image)
  * labels `object`
    * editorial `string`
  * master_brand **required** [master_brand](#master_brand)
  * onward_journey `object`
    * id `string`
    * type `string` (values: episode)
  * promotion_type `string` (values: available_now, coming_soon)
  * synopses **required** `object`
    * editorial `string`
    * large `string`
    * medium `string`
    * small `string`
  * title **required** `string`
  * tleo_id **required** `string`
  * tleo_type `string` (values: episode, brand, series)
  * type **required** `string` (values: clip)
  * versions **required** `array`
    * items `object`
      * availability **required** `object`
        * accurate_start `string`
        * end `string`
        * remaining `object`
          * text **required** `string`
        * start **required** `string`
      * credits_start `number`
      * download **required** `boolean`
      * duration **required** `object`
        * text **required** `string`
        * value **required** `string`
      * first_broadcast `string`
      * guidance `object`
        * id **required** `string`
        * text `object`
          * large `string`
          * medium `string`
          * small `string`
      * hd **required** `boolean`
      * id **required** `string`
      * kind **required** `string`
      * rrc `object`
        * description **required** `object`
          * large **required** `string`
          * small **required** `string`
        * url `string`
      * service_id `string`
      * type **required** `string` (values: version, version_large)

### episode
* episode `object`
  * audio_described **required** `boolean`
  * categories **required** `array`
    * items `string`
  * editorial_subtitle `string`
  * editorial_title `string`
  * guidance **required** `boolean`
  * has_credits `boolean`
  * id **required** `string`
  * images **required** `object`
    * inherited_from `string`
    * standard **required** `string`
    * type **required** `string` (values: image)
  * labels `object`
    * category `string`
    * editorial `string`
    * editorial_category `string`
    * time `string`
  * lexical_sort_letter **required** `string`
  * live `boolean`
  * master_brand **required** [master_brand](#master_brand)
  * next_broadcast `object`
    * channel_title **required** `string`
    * scheduled_start **required** `string`
  * original_title `string`
  * parent_id `string`
  * parent_position `number`
  * preview_id `string`
  * promoted `boolean`
  * related_links `array`
    * items `object`
      * id **required** `string`
      * kind **required** `string`
      * title **required** `string`
      * type **required** `string` (values: link)
      * url **required** `string`
  * release_date `string`
  * release_date_time `string`
  * requires_sign_in **required** `boolean`
  * requires_tv_licence `boolean`
  * signed **required** `boolean`
  * status **required** `string` (values: available, unavailable)
  * subtitle `string`
  * suppliers **required** `array`
    * items `object`
      * id **required** `string`
      * title **required** `string`
  * synopses **required** `object`
    * editorial `string`
    * large `string`
    * medium `string`
    * preview `string`
    * small `string`
  * title **required** `string`
  * tleo_id **required** `string`
  * tleo_type **required** `string` (values: episode, brand, series)
  * type **required** `string` (values: episode, episode_large)
  * versions **required** `array`


### group
* group `object`
  * count `number`
  * episode_sort_direction `string`
  * group_type `string` (values: tleo, curated)
  * id **required** `string`
  * images `object`
    * standard **required** `string`
    * type **required** `string` (values: image)
    * vertical **required** `string`
  * initial_children `array`

  * master_brand [master_brand](#master_brand)
  * related_links `array`
    * items `object`
      * kind **required** `string`
      * title **required** `string`
      * url **required** `string`
  * stacked `boolean`
  * synopses `object`
    * large `string`
    * medium `string`
    * small `string`
  * title `string`
  * type **required** `string` (values: group, group_large)

### ibl
* ibl `object`
  * added `object`
    * count **required** `number`
    * count_all **required** `number`
    * elements **required** `array`
      * items [added](#added)
  * atoz_programmes `object`
    * character **required** `string`
    * count **required** `number`
    * elements **required** `array`
      * items [programme](#programme)
    * page **required** `number`
    * per_page **required** `number`
  * broadcasts `object`
    * channel **required** [channel](#channel)
    * count **required** `number`
    * elements **required** `array`
      * items [broadcast](#broadcast)
    * page **required** `number`
    * per_page **required** `number`
  * categories `array`
    * items [category](#category)
  * category [category](#category)
  * category_highlights `object`
    * category **required** [category](#category)
    * elements **required** `array`

  * category_programmes `object`
    * category **required** [category](#category)
    * count **required** `number`
    * elements **required** `array`
      * items [programme](#programme)
    * page **required** `number`
    * per_page **required** `number`
  * channel_highlights `object`
    * channel **required** [channel](#channel)
    * elements **required** `array`

  * channels `array`
    * items [channel](#channel)
  * clips `array`
    * items [clip](#clip)
  * episode_recommendations `object`
    * blend **required** `string` (values: curated, algorithmic)
    * count **required** `number`
    * elements **required** `array`
      * items [episode](#episode)
  * episodes `array`
    * items [episode](#episode)
  * error `object`
    * details **required** `string`
    * http_response_code **required** `number`
  * group_episodes `object`
    * count **required** `number`
    * elements **required** `array`
      * items [episode](#episode)
    * group [group](#group)
    * page **required** `number`
    * per_page **required** `number`
  * home_highlights `object`
    * elements **required** `array`

  * next `object`
    * programme `array`
      * items [episode](#episode)
  * postrolls `array`
    * items [trailer](#trailer)
  * prerolls `array`
    * items [trailer](#trailer)
  * programme_episodes `object`
    * count **required** `number`
    * elements **required** `array`
      * items [episode](#episode)
    * page **required** `number`
    * per_page **required** `number`
  * programmes `array`
    * items [programme](#programme)
  * purchases `object`
    * count **required** `number`
    * elements **required** `array`
      * items [episode](#episode)
    * page **required** `number`
    * per_page **required** `number`
    * revocations **required** `boolean`
    * value_added_material **required** `boolean`
  * regions `array`
    * items [region](#region)
  * schedule `object`
    * channel **required** [channel](#channel)
    * elements **required** `array`
      * items [broadcast](#broadcast)
  * schema **required** `string`
  * search `object`
    * count `number`
    * page `number`
    * per_page `number`
    * query **required** `string`
    * results **required** `array`

  * search_suggest `object`
    * query **required** `string`
    * results **required** `array`
      * items [programme](#programme)
  * status `object`
    * release **required** `string`
    * service **required** `string`
  * trailers `object`
    * elements **required** `array`
      * items [clip](#clip)
  * user_recommendations `object`
    * elements **required** `array`
      * items [user_recommendation](#user_recommendation)
    * rec_set **required** `string`
    * rec_source **required** `string`
  * version **required** `string`
  * versions `array`
    * items [store_version](#store_version)
  * watching `object`
    * count **required** `number`
    * count_all **required** `number`
    * elements **required** `array`
      * items [watching](#watching)

### master_brand
* master_brand `object`
  * attribution **required** `string`
  * id **required** `string`
  * ident_id `string`
  * titles **required** `object`
    * large **required** `string`
    * medium **required** `string`
    * small **required** `string`

### programme
* programme `object`
  * categories **required** `array`
    * items `string`
  * count **required** `number`
  * id **required** `string`
  * images **required** `object`
    * inherited_from `string`
    * standard **required** `string`
    * type **required** `string` (values: image)
  * initial_children **required** `array`
    * items [episode](#episode)
  * labels `object`
    * category `string`
  * lexical_sort_letter **required** `string`
  * master_brand **required** [master_brand](#master_brand)
  * status **required** `string` (values: available, unavailable)
  * suppliers **required** `array`
    * items `object`
      * id **required** `string`
      * title **required** `string`
  * synopses **required** `object`
    * large `string`
    * medium `string`
    * small `string`
  * title **required** `string`
  * tleo_type `string` (values: brand, series, episode)
  * type **required** `string` (values: programme, programme_large)

### promotion
* promotion `object`
  * id **required** `string`
  * images `object`
    * inherited_from `string`
    * standard **required** `string`
    * type **required** `string` (values: image)
  * labels `object`
    * promotion **required** `string`
  * subtitle `string`
  * synopses `object`
    * large `string`
    * medium `string`
    * small `string`
  * title `string`
  * type **required** `string` (values: promotion)
  * url `string`

### region
* region `object`
  * id **required** `string`
  * kind **required** `string` (values: regional, national)
  * short_id **required** `string`
  * title **required** `string`
  * type **required** `string` (values: region)

### search_group
* search_group `object`
  * episode **required** [episode](#episode)
  * id **required** `string`
  * type **required** `string` (values: search_group)

### store_version
* store_version `object`
  * download **required** `boolean`
  * duration **required** `object`
    * text **required** `string`
    * value **required** `string`
  * guidance `object`
    * id **required** `string`
    * text `object`
      * large `string`
      * medium `string`
      * small `string`
  * hd **required** `boolean`
  * id **required** `string`
  * kind **required** `string`
  * store_id **required** `string`
  * store_profile **required** `string`
  * store_session `object`
    * ceiling `number`
    * stats **required** `object`
      * assetName `string`
      * contentType `string`
      * contentVariant `string`
      * episodeName `string`
      * parentPID `string`
      * parentPIDType `string`
      * productVariant `string`
      * viewerId `string`
    * token **required** `string`
  * type **required** `string` (values: store_version)

### trailer
* trailer `object`
  * id **required** `string`
  * kind **required** `string` (values: available_now, coming_soon, other)
  * title **required** `string`
  * type **required** `string` (values: trailer)
  * version_id **required** `string`

### user_recommendation
* user_recommendation `object`
  * algorithm **required** `string`
  * episode **required** [episode](#episode)
  * type **required** `string` (values: user_recommendation)

### version
* version `object`
  * availability **required** `object`
    * accurate_start `string`
    * end `string`
    * remaining `object`
      * text **required** `string`
    * start **required** `string`
  * credits_start `number`
  * download **required** `boolean`
  * duration **required** `object`
    * text **required** `string`
    * value **required** `string`
  * first_broadcast `string`
  * guidance `object`
    * id **required** `string`
    * text `object`
      * large `string`
      * medium `string`
      * small `string`
  * hd **required** `boolean`
  * id **required** `string`
  * kind **required** `string`
  * rrc `object`
    * description **required** `object`
      * large **required** `string`
      * small **required** `string`
    * url `string`
  * service_id `string`
  * type **required** `string` (values: version, version_large)

### watching
* watching `object`
  * episode **required** [episode](#episode)
  * has_next **required** `boolean`
  * offset `number`
  * programme **required** [programme](#programme)
  * progress `number`
  * remaining `number`
  * status `string` (values: current, next)
  * type **required** `string` (values: watching)
  * urn **required** `string`
  * version **required** [version](#version)


