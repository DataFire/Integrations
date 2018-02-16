# @datafire/bbc

Client library for BBC Nitro

## Installation and Usage
```bash
npm install --save @datafire/bbc
```
```js
let bbc = require('@datafire/bbc').create({
  api_key: ""
});

bbc.listVersions({}).then(data => {
  console.log(data);
});
```

## Description

BBC Nitro is the BBC's application programming interface (API) for BBC Programmes Metadata.

## Actions

### getAPI
Get API definition


```js
bbc.getAPI(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### listAvailability
Discover details of on-demand availability for programmes and their versions


```js
bbc.listAvailability({}, context)
```

#### Input
* input `object`
  * sort `string` (values: scheduled_start): Sorts:
  * sort_direction `string` (values: ascending, descending): Sort direction
  * availability `array` (values: available): filter for subset of availabilities
  * descendants_of `array`: filter for subset of availabilities that have PID as ancestor
  * media_set `array`: filter for subset of availabilities with media set
  * page `integer`: which page of results to return
  * page_size `integer`: number of results in each page
  * territory `array` (values: uk, nonuk, world): filter for availabilities in given territory
  * debug `boolean`: Turn on debug information (undocumented)

#### Output
* output [nitro](#nitro)

### listBroadcasts
Fetch metadata about linear Broadcasts and Services, allowing the generation of Television and Radio schedules and other datasets for broadcast items. Use /schedules instead of this feed as it is more efficient. Broadcasts will be deprecated in the future.


```js
bbc.listBroadcasts({}, context)
```

#### Input
* input `object`
  * sort `string` (values: start_date): Sorts:
  * sort_direction `string` (values: ascending, descending): Sort direction
  * mixin `array` (values: titles): Mixins:
  * authority `array`: filter for subset of broadcasts that have given authority
  * descendants_of `array`: filter for subset of broadcasts that are descendants of the given programme PID
  * end_from `string`: filter for subset of broadcasts that end on or later than the specified datetime
  * end_to `string`: filter for subset of broadcasts that end on or earlier than the specified datetime
  * format `array`: filter for subset of broadcasts that are classified in the given format ID
  * genre `array`: filter for subset of broadcasts that are classified in the given genre ID
  * id `array`: filter for subset of broadcasts that have given identifier
  * item `array`: filter for subset of broadcasts with the given item performed on it
  * page `integer`: which page of results to return
  * page_size `integer`: number of results in each page
  * people `string`: filter for subset of broadcasts that have given contributor
  * pid `array`: filter for subset of broadcasts having given PID
  * q `string`: filter for subset of broadcasts matching supplied keyword/phrase (boolean operators permitted)
  * schedule_day `string`: filter for subset of broadcasts that start on the specified day (BBC time)
  * schedule_day_from `string`: filter for subset of broadcasts that start on or after the specified day (BBC time)
  * schedule_day_to `string`: filter for subset of broadcasts that start on or before the specified day (BBC time)
  * service_master_brand `array`: filter for subset of broadcasts with given service master brand
  * sid `array`: filter for subset of broadcasts that are on the specified linear service
  * start_from `string`: filter for subset of broadcasts that start on or later than the specified datetime
  * start_to `string`: filter for subset of broadcasts that start on or earlier than the specified datetime
  * version `array`: filter for subset of broadcasts with given PID as their parent version

#### Output
* output [nitro](#nitro)

### listGroups
Long-lived curated collections of programmes and more, including Collections, Seasons, Franchises and Galleries


```js
bbc.listGroups({}, context)
```

#### Input
* input `object`
  * sort `string` (values: pid): Sorts:
  * sort_direction `string` (values: descending): Sort direction
  * mixin `array` (values: alternate_images, group_for, images, related_links): Mixins:
  * for_descendants_of `string`: filter for groups related to given programme or its descendants
  * for_programme `string`: filter for subset of groups directly related to a given programme
  * group `string`: filter for subset of groups which belong to the given group pid
  * group_type `array` (values: collection, franchise, gallery, season): filter for subset of groups that have the given group type
  * member `string`: filter for subset of groups which contain an entity with the given pid as a member
  * page `integer`: which page of results to return
  * page_size `integer`: number of results in each page
  * partner_id `array`: filter for groups by partner ID
  * partner_pid `array`: filter for groups by partner PID
  * pid `array`: filter for subset of seasons, collections, galleries or franchises having given PID
  * q `string`: filter for subset of groups matching supplied keyword/phrase (boolean operators permitted)
  * embargoed `string` (values: include, exclude, only): Control return of embargoed items (undocumented)

#### Output
* output [nitro](#nitro)

### listImages
Find metadata for images, particularly those in galleries


```js
bbc.listImages({}, context)
```

#### Input
* input `object`
  * sort `string` (values: group_position, pid): Sorts:
  * sort_direction `string` (values: ascending, descending): Sort direction
  * group `string`: filter for images belonging to the given group (i.e. Gallery)
  * image_type `array` (values: standard, podcast, store, portrait, letterbox): filter for images by type
  * is_alternate_image_for `string`: filter for alternate images by entity PID
  * is_image_for `string`: filter for images by entity PID
  * page `integer`: which page of results to return
  * page_size `integer`: number of results in each page
  * partner_id `array`: filter for images by partner ID
  * partner_pid `array`: filter for images by partner PID
  * pid `array`: filter for subset of images having given PID
  * q `string`: filter for subset of images matching supplied keyword/phrase (boolean operators permitted)
  * embargoed `string` (values: include, exclude, only): Control return of embargoed items (undocumented)

#### Output
* output [nitro](#nitro)

### listItems
Look inside programmes to find segments: chapters, tracks and more


```js
bbc.listItems({}, context)
```

#### Input
* input `object`
  * sort `string` (values: pid): Sorts:
  * sort_direction `string` (values: descending): Sort direction
  * mixin `array` (values: contributions, images, offset, play_event): Mixins:
  * authority `string`: filter for subset of items that have an ID issued by the given authority
  * id `array`: filter for subset of items having given ID
  * id_type `string`: filter for subset of items that have given an ID of the given type
  * item_type `array` (values: chapter, highlight, music, speech, other): filter for specific type(s) of items
  * page `integer`: which page of results to return
  * page_size `integer`: number of results in each page
  * partner_id `array`: filter for items by partner ID
  * partner_pid `array`: filter for items by partner PID
  * people `string`: filter for subset of items that have specified person involved
  * pid `array`: filter for subset of items matching one of the given PIDs
  * programme `string`: filter for subset of items that are part of the given programme
  * q `string`: filter for subset of items matching supplied keyword/phrase (boolean operators permitted)
  * segment_event `string`: filter for item with the given segment_event

#### Output
* output [nitro](#nitro)

### listMasterbrands
List all Master Brands


```js
bbc.listMasterbrands({}, context)
```

#### Input
* input `object`
  * sort `string` (values: mid): Sorts:
  * sort_direction `string` (values: ascending): Sort direction
  * mixin `array` (values: images): Mixins:
  * mid `array`: filter for subset of masterbrands that have given identifier
  * page `integer`: which page of results to return
  * page_size `integer`: number of results in each page
  * partner_id `array`: filter for masterbrands by partner ID
  * partner_pid `array`: filter for masterbrands by partner PID
  * q `string`: filter for subset of masterbrands matching supplied keyword/phrase (boolean operators permitted)

#### Output
* output [nitro](#nitro)

### listPeople
The People feed allows you to search for the people and groups that contribute to programmes. This is the starting point for cast and crew credits, as well as finding contributors using external IDs (such as Wikipedia URLs)


```js
bbc.listPeople({}, context)
```

#### Input
* input `object`
  * authority `string`: filter for subset of people that have an ID issued by the given authority
  * has_external_id `array` (values: true, false): filter for people who have an external identifier
  * id `array`: filter for subset of people having given ID
  * id_type `string`: filter for subset of people that have given an ID of the given type
  * page `integer`: which page of results to return
  * page_size `integer`: number of results in each page
  * partner_id `array`: filter for people by partner ID
  * partner_pid `array`: filter for people by partner PID
  * pid `array`: filter for subset of people having given PID
  * programme `string`: filter for subset of people that have contributed to the given programme pid
  * q `string`: filter for subset of people matching supplied keyword/phrase (boolean operators permitted)

#### Output
* output [nitro](#nitro)

### listPips
Look inside pips entities


```js
bbc.listPips({}, context)
```

#### Input
* input `object`
  * page `integer`: which page of results to return
  * page_size `integer`: number of results in each page
  * q `string`: filter for subset of programmes matching supplied keyword/phrase (boolean operators permitted)

#### Output
* output [nitro](#nitro)

### listProgrammeDetails
Exposes programme information for a single pid


```js
bbc.listProgrammeDetails({}, context)
```

#### Input
* input `object`
  * page `integer`: which page of results to return
  * page_size `integer`: number of results in each page
  * partner_pid `string`: Filter for programme information by partner PID
  * pid `string`: Filter for programme information for the provided PID

#### Output
* output [nitro](#nitro)

### listProgrammes
Fetch metadata about Programmes (brands, series, episodes, clips). By applying different filter restrictions this feed can be used in many ways, for example to retrieve all series belonging to a brand, all the episodes and/or clips for a specific series, or any TLEO objects for a masterbrand. Other filters permit restricting to specific formats and/or genres, and you can request specific versions (for example Signed or Audio-Described). Parameters may be combined in any way suitable for your application.


```js
bbc.listProgrammes({}, context)
```

#### Input
* input `object`
  * sort `string` (values: group_position, pid, position, promotion, release_date, relevance, scheduled_start, strict_title, title, tree): Sorts:
  * sort_direction `string` (values: ascending, descending): Sort direction
  * mixin `array` (values: alternate_images, ancestor_titles, availability, available_simulcasts, available_versions, available_webcasts, contributions, duration, genre_groupings, genre_groups, images, is_embeddable, previous_next, programme_type, related_links, titles, versions_availability): Mixins:
  * audio_described `array` (values: true, false): filter for subset of programmes that are audio-described
  * availability `array` (values: available, pending): filter for subset of programmes that have availability
  * availability_entity_type `array` (values: episode, clip): additional filter when availability=available
  * availability_from `string`: filter for subset of programmes that are available after or at the specified datetime
  * availability_type `array` (values: ondemand, webcast, simulcast): filter for a subset of programmes that are available for a given type
  * children_of `array`: filter for subset of programmes that have PID as immediate parent
  * descendants_of `array`: filter for subset of programmes that have PID as ancestor
  * duration `array` (values: short, medium, long): filter for subset of programmes that have given duration
  * entity_type `array` (values: brand, series, episode, clip): filter for subset of programmes that have given entity type
  * format `array`: filter for subset of programmes with format
  * genre `array`: filter for subset of programmes with genre
  * group `string`: filter for subset of programmes which belong to the given group pid
  * initial_letter `string`: filter for subset of programmes with title beginning with initial letter librarian style (ignoring leading 'The', 'An' (Welsh), etc) 0-9 a-z
  * initial_letter_end `string`: Programmes with (librarian) titles whose initial letter is equal/before given letter. Use with initial_letter_start for a range
  * initial_letter_start `string`: Programmes with (librarian) titles whose initial letter is equal/after given letter. Use with initial_letter_end for range.
  * initial_letter_strict `array`: filter for subset of programmes with title beginning with initial letter
  * item `array`: filter for subset of programmes with linked to versions which have the given item pids
  * master_brand `array`: filter for subset of programmes with master_brand
  * media_set `string`: filter for subset of programmes with media set
  * media_type `array` (values: audio, audio_video): filter for subset of programmes with media type
  * page `integer`: which page of results to return
  * page_size `integer`: number of results in each page
  * partner_id `array`: filter for programmes by partner ID
  * partner_pid `array`: filter for programmes by partner PID
  * payment_type `array` (values: free, bbcstore, uscansvod): filter for a subset of programmes that are of the given payment_type
  * people `string`: filter for subset of programmes with contributions by given people PID
  * pid `array`: filter for subset of programmes having given PID
  * promoted_for `string`: filter for subset of programmes which are promoted for given service
  * q `string`: filter for subset of programmes matching supplied keyword/phrase (boolean operators permitted)
  * signed `array` (values: exclusive, inclusive, exclude): filter for subset of programmes that are signed
  * tag_name `string`: filter for subset of programmes with tag
  * tag_scheme `string`: filter for subset of programmes with a tag
  * tleo `array` (values: true, false): filter for subset of programmes that are TLEOs
  * version `array`: filter for subset of programmes with given PID as one of their versions
  * embargoed `string` (values: include, exclude, only): Control return of embargoed items (undocumented)

#### Output
* output [nitro](#nitro)

### listPromotions
Details of short-term editorially curated "promotions", for instance those programmes featured on iPlayer today


```js
bbc.listPromotions({}, context)
```

#### Input
* input `object`
  * mixin `array` (values: related_links): Mixins:
  * context `string`: filter for subset of promotions belonging to a given context
  * page `integer`: which page of results to return
  * page_size `integer`: number of results in each page
  * partner_id `array`: filter for promotions by partner ID
  * partner_pid `array`: filter for promotions by partner PID
  * pid `array`: filter for subset of promotions having given PID
  * promoted_by `array`: filter for subset of promotions having given promoted by
  * promoted_for `array`: filter for subset of promotions having given promoted for
  * q `string`: filter for subset of promotions matching supplied keyword/phrase (boolean operators permitted)
  * status `array` (values: current): filter for subset of promotions with status

#### Output
* output [nitro](#nitro)

### listSchedules
Dates, Times, Schedules: when and where are programmes being shown?


```js
bbc.listSchedules({}, context)
```

#### Input
* input `object`
  * sort `string` (values: start_date): Sorts:
  * sort_direction `string` (values: ascending, descending): Sort direction
  * mixin `array` (values: ancestor_titles, images, titles): Mixins:
  * authority `array`: filter for subset of broadcasts and webcasts that have given authority
  * descendants_of `array`: filter for subset of broadcasts and webcasts that are descendants of the given programme PID
  * end_from `string`: filter for subset of broadcasts and webcasts that end on or later than the specified datetime
  * end_to `string`: filter for subset of broadcasts and webcasts that end on or earlier than the specified datetime
  * format `array`: filter for subset of broadcasts and webcasts that are classified in the given format ID
  * genre `array`: filter for subset of broadcasts and webcasts that are classified in the given genre ID
  * group `string`: filter for subset of broadcasts and webcasts that have programmes in the given group
  * id `array`: filter for subset of broadcasts and webcasts that have given identifier
  * id_type `array`: filter for subset of broadcasts and webcasts that have given id type
  * item `array`: filter for subset of broadcasts and webcasts with the given item performed on it
  * page `integer`: which page of results to return
  * page_size `integer`: number of results in each page
  * partner_id `array`: filter for broadcasts and webcasts by partner ID
  * partner_pid `array`: filter for broadcasts and webcasts by partner PID
  * people `string`: filter for subset of broadcasts and webcasts that have given contributor
  * pid `array`: filter for subset of broadcasts and webcasts having given PID
  * q `string`: filter for subset of broadcasts and webcasts matching supplied keyword/phrase (boolean operators permitted)
  * repeat `boolean`: filter to show either only repeats or non-repeats
  * schedule_day `string`: filter for subset of broadcasts and webcasts that start on the specified day (BBC time)
  * schedule_day_from `string`: filter for subset of broadcasts and webcasts that start on or after the specified day (BBC time)
  * schedule_day_to `string`: filter for subset of broadcasts and webcasts that start on or before the specified day (BBC time)
  * service_master_brand `array`: filter for subset of broadcasts and webcasts with given service master brand
  * sid `array`: filter for subset of broadcasts and webcasts that are on the specified linear service
  * start_from `string`: filter for subset of broadcasts and webcasts that start on or later than the specified datetime
  * start_to `string`: filter for subset of broadcasts and webcasts that start on or earlier than the specified datetime
  * version `array`: filter for subset of broadcasts and webcasts with given PID as their parent version

#### Output
* output [nitro](#nitro)

### getXSD
Get Schema definition


```js
bbc.getXSD(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### listServices
The services feed exposes the linear broadcast "services" from PIPs. These are the actual services which broadcast programmes (eg bbc_one_oxford is the service for BBC One in Oxford).


```js
bbc.listServices({}, context)
```

#### Input
* input `object`
  * end_from `string`: Return services that end on or later than the specified datetime
  * end_to `string`: filter for subset of broadcasts that end on or earlier than the specified datetime
  * mid `array`: filter for services by masterbrand MID
  * page `integer`: which page of results to return
  * page_size `integer`: number of results in each page
  * partner_id `array`: filter for services by partner ID
  * partner_pid `array`: filter for services by partner PID
  * q `string`: filter for subset of services matching supplied keyword/phrase (boolean operators permitted)
  * service_type `array` (values: Interactive, Local Radio, Master Brand Only, National Radio, On Demand, Regional Radio, Simulcast, TV, Web Only, Webcast): filter for specified type of linear services
  * sid `array`: filter for specified linear service
  * start_from `string`: Return services that start on or later than the specified datetime
  * start_to `string`: Return services that start earlier than the specified datetime

#### Output
* output [nitro](#nitro)

### Get_Raw_brand
Get raw brand


```js
bbc.Get_Raw_brand({
  "pid": ""
}, context)
```

#### Input
* input `object`
  * pid **required** `string`

#### Output
* output [nitro](#nitro)

### v1.brands.pid.franchises.get
Get raw brand franchises


```js
bbc.v1.brands.pid.franchises.get({
  "pid": ""
}, context)
```

#### Input
* input `object`
  * pid **required** `string`

#### Output
* output [nitro](#nitro)

### Get_Raw_episode
Get raw episode


```js
bbc.Get_Raw_episode({
  "pid": ""
}, context)
```

#### Input
* input `object`
  * pid **required** `string`

#### Output
* output [nitro](#nitro)

### Get_Raw_ancestors
Get raw ancestors


```js
bbc.Get_Raw_ancestors({
  "pid": ""
}, context)
```

#### Input
* input `object`
  * pid **required** `string`

#### Output
* output [nitro](#nitro)

### Get_Raw_formats
Get raw formats


```js
bbc.Get_Raw_formats({
  "pid": ""
}, context)
```

#### Input
* input `object`
  * pid **required** `string`

#### Output
* output [nitro](#nitro)

### Get_Raw_genre_groups
Get raw genre groups


```js
bbc.Get_Raw_genre_groups({
  "pid": ""
}, context)
```

#### Input
* input `object`
  * pid **required** `string`

#### Output
* output [nitro](#nitro)

### Get_Raw_image
Get raw image


```js
bbc.Get_Raw_image({
  "pid": ""
}, context)
```

#### Input
* input `object`
  * pid **required** `string`

#### Output
* output [nitro](#nitro)

### Get_Raw_masterbrand
Get raw masterbrand


```js
bbc.Get_Raw_masterbrand({
  "mbid": ""
}, context)
```

#### Input
* input `object`
  * mbid **required** `string`

#### Output
* output [nitro](#nitro)

### Get_Raw_promotion
Get raw promotion


```js
bbc.Get_Raw_promotion({
  "pid": ""
}, context)
```

#### Input
* input `object`
  * pid **required** `string`

#### Output
* output [nitro](#nitro)

### listVersions
The versions feed exposes editorial "Versions" of programmes. These are concepts used to capture different presentations of an overall programme: for example, versions of a programme may include one with sign language, one with audio description, one edited for content and more. Versions are also important to understand for broadcasts: a linear broadcast or an ondemand is always of a specific version, not merely of a programme.


```js
bbc.listVersions({}, context)
```

#### Input
* input `object`
  * availability `array` (values: available): filter for subset of versions that have availability
  * descendants_of `array`: filter for subset of versions having given programme PID
  * media_set `array`: filter for subset of versions with availability in the given media set
  * page `integer`: which page of results to return
  * page_size `integer`: number of results in each page
  * partner_id `array`: filter for versions by partner ID
  * partner_pid `array`: filter for versions by partner PID
  * payment_type `array` (values: free, bbcstore, uscansvod): filter for a subset of versions that are of the given payment_type
  * pid `array`: filter for subset of versions having given PID
  * embargoed `string` (values: include, exclude, only): Control return of embargoed items (undocumented)

#### Output
* output [nitro](#nitro)



## Definitions

### ErrorModel
* ErrorModel `object`
  * fault `object`
    * detail `object`
      * errorcode `string`
    * faultString `string`

### accurate_programme_time
* accurate_programme_time [dateRange](#daterange)

### accurate_time
* accurate_time [broadcastTime](#broadcasttime)

### actual_start
* actual_start `string`

### advertising_allowed
* advertising_allowed `string`

### affected_by
* affected_by `object`
  * filter `array`
    * items `object`
      * description **required** `string`
      * filter `array`
        * items `object`
          * description **required** `string`
          * name **required** `string`
      * name **required** `string`

### alternate_images_mixin
* alternate_images_mixin `object`
  * alternate_images **required** `object`
    * alternate_image `array`
      * items `object`
        * alternate_images **required** `object`
          * alternate_image `array`
            * items `object`
              * href `string`
              * template_url **required** `string`
              * type `string`
        * href `string`
        * template_url **required** `string`
        * type `string`

### ancestor_titles
* ancestor_titles `object`
  * brand `object`
    * pid **required** [pid](#pid)
    * title [title](#title)
  * episode `object`
    * brand `object`
      * pid **required** [pid](#pid)
      * title [title](#title)
    * containers_title [containers_title](#containers_title)
    * episode `object`
      * containers_title [containers_title](#containers_title)
      * pid **required** [pid](#pid)
      * presentation_title [presentation_title](#presentation_title)
      * title [title](#title)
    * pid **required** [pid](#pid)
    * presentation_title [presentation_title](#presentation_title)
    * series `array`
      * items `object`
        * pid **required** [pid](#pid)
        * title [title](#title)
    * title [title](#title)
  * series `array`
    * items `object`
      * pid **required** [pid](#pid)
      * title [title](#title)

### ancestors
* ancestors [reference](#reference)

### ancestors_titles
* ancestors_titles `object`
  * brand `object`
    * pid **required** [pid](#pid)
    * title [title](#title)
  * episode `object`
    * brand `object`
      * pid **required** [pid](#pid)
      * title [title](#title)
    * containers_title [containers_title](#containers_title)
    * episode `object`
      * containers_title [containers_title](#containers_title)
      * pid **required** [pid](#pid)
      * presentation_title [presentation_title](#presentation_title)
      * title [title](#title)
    * pid **required** [pid](#pid)
    * presentation_title [presentation_title](#presentation_title)
    * series `array`
      * items `object`
        * pid **required** [pid](#pid)
        * title [title](#title)
    * title [title](#title)
  * series `array`
    * items `object`
      * pid **required** [pid](#pid)
      * title [title](#title)

### availability
* availability `object`
  * accurate_programme_time [accurate_programme_time](#accurate_programme_time)
  * actual_start [actual_start](#actual_start)
  * availability-debug [availability-debug](#availability-debug)
  * availability_of `array`
    * items [availability_of](#availability_of)
  * availability_type **required** [availability_type](#availability_type)
  * media_availability_time [media_availability_time](#media_availability_time)
  * media_set `array`
    * items [media_set](#media_set)
  * revocation_status [revocation_status](#revocation_status)
  * scheduled_time [scheduled_time](#scheduled_time)
  * status **required** [status](#status)

### availability-debug
* availability-debug `object`
  * availability_of **required** [pidReference](#pidreference)
  * media_profile_groups [media_profile_groups](#media_profile_groups)
  * service [serviceReference](#servicereference)
  * territory `string`

### availability_mixin
* availability_mixin `object`
  * availability `array`
    * items `object`
      * status **required** [status](#status)
      * version_types **required** `object`
        * version_type **required** `array`
          * items `object`
            * end `string`
            * id `string`
            * start `string`
            * version_type **required** `array`
              * items `object`
                * availability `array`
                  * items `object`
                    * status **required** [status](#status)
                    * version_types **required** `object`
                      * version_type **required** `array`
                        * items `object`
                          * end `string`
                          * id `string`
                          * start `string`
                          * version_type **required** `array`
                            * items `object`
                              * end `string`
                              * id `string`
                              * start `string`
                * end `string`
                * id `string`
                * start `string`

### availability_of
* availability_of `object`
  * href **required** `string`
  * pid **required** [pid](#pid)
  * result_type **required** `string`
  * type `string`

### availability_type
* availability_type `string` (values: ondemand, simulcast, webcast)

### available_media_sets
* available_media_sets `object`
  * media_sets `object`
    * media_set **required** `array`
      * items `object`
        * #text `string`
        * media_sets `object`
          * media_set **required** `array`
            * items `object`
              * #text `string`

### available_mixins
* available_mixins `object`
  * availabilities **required** `object`
    * availabilities **required** `object`
      * availability **required** `array`
        * items `object`
          * accurate_end `string`
          * accurate_start `string`
          * available_versions_media_sets **required** [available_versions_media_sets](#available_versions_media_sets)
          * media_availability_end `string`
          * media_availability_start `string`
          * payment_type `string`
          * scheduled_end `string`
          * scheduled_start `string`
          * status `string`
          * type `string`
      * type `string`
    * availability **required** `array`
      * items `object`
        * accurate_end `string`
        * accurate_start `string`
        * available_versions_media_sets **required** [available_versions_media_sets](#available_versions_media_sets)
        * media_availability_end `string`
        * media_availability_start `string`
        * payment_type `string`
        * scheduled_end `string`
        * scheduled_start `string`
        * status `string`
        * type `string`
    * type `string`

### available_simulcasts
* available_simulcasts `object`
  * available **required** `integer`
  * available_versions_element **required** [available_versions_element](#available_versions_element)

### available_versions
* available_versions `object`
  * available **required** `integer`
  * available_versions_element **required** [available_versions_element](#available_versions_element)

### available_versions_element
* available_versions_element `object`
  * version `array`
    * items `object`
      * available_mixins [available_mixins](#available_mixins)
      * competition_warning `boolean`
      * duration `string`
      * guidance_warnings [guidance_warnings](#guidance_warnings)
      * pid [pid](#pid)
      * types **required** `array`
        * items `object`
          * type `array`
            * items `string`
      * version `array`
        * items `object`
          * available_mixins [available_mixins](#available_mixins)
          * competition_warning `boolean`
          * duration `string`
          * guidance_warnings [guidance_warnings](#guidance_warnings)
          * pid [pid](#pid)
          * types **required** `array`
            * items `object`
              * type `array`
                * items `string`

### available_versions_media_sets
* available_versions_media_sets `object`
  * media_sets `object`
    * media_set **required** `array`
      * items `object`
        * actual_start `string`
        * name **required** `string`
        * territories `object`
          * media_sets `object`
            * media_set **required** `array`
              * items `object`
                * actual_start `string`
                * name **required** `string`
                * territories `object`
                  * territory `array`
                    * items `string`
          * territory `array`
            * items `string`

### available_webcasts
* available_webcasts `object`
  * available **required** `integer`
  * available_versions_element **required** [available_versions_element](#available_versions_element)

### brand
* brand `object`
  * alternate_images_mixin [alternate_images_mixin](#alternate_images_mixin)
  * availability_mixin [availability_mixin](#availability_mixin)
  * contributions_mixin [contributions_mixin](#contributions_mixin)
  * embargoed **required** [embargoed](#embargoed)
  * expected_child_count [expected_child_count](#expected_child_count)
  * franchises [franchises](#franchises)
  * genre_groupings [genre_groupings](#genre_groupings)
  * identifiers [identifiers](#identifiers)
  * image_link [image_link](#image_link)
  * images_mixin [images_mixin](#images_mixin)
  * is_embeddable [is_embeddable](#is_embeddable)
  * items_for [items_for](#items_for)
  * master_brand_link [master_brand_link](#master_brand_link)
  * partner **required** [partner](#partner)
  * pid **required** [pid](#pid)
  * previous_next_mixin [previous_next_mixin](#previous_next_mixin)
  * programme_formats [programme_formats](#programme_formats)
  * programme_type [programme_type](#programme_type)
  * related_links [related_links](#related_links)
  * release_date_group [release_date_group](#release_date_group)
  * synopses [synopses](#synopses)
  * title [title](#title)
  * updated_time **required** [updated_time](#updated_time)
  * uri [uri](#uri)

### broadcast
* broadcast `object`
  * ancestor_titles [ancestor_titles](#ancestor_titles)
  * ancestors_titles [ancestors_titles](#ancestors_titles)
  * broadcast_of `array`
    * items [broadcast_of](#broadcast_of)
  * identifiers [identifiers](#identifiers)
  * ids [ids](#ids)
  * image_link [image_link](#image_link)
  * images_mixin [images_mixin](#images_mixin)
  * is_audio_described [is_audio_described](#is_audio_described)
  * is_blanked [is_blanked](#is_blanked)
  * is_critical [is_critical](#is_critical)
  * is_repeat [is_repeat](#is_repeat)
  * is_simulcast [is_simulcast](#is_simulcast)
  * partner **required** [partner](#partner)
  * pid **required** [pid](#pid)
  * published_time [published_time](#published_time)
  * service [serviceReference](#servicereference)
  * tx_time [tx_time](#tx_time)
  * updated_time [updated_time](#updated_time)

### broadcastTime
* broadcastTime
  * end `string`
  * start `string`
  * duration `string`

### broadcast_of
* broadcast_of [pidReference](#pidreference)

### broadcaster
* broadcaster `object`
  * href **required** `string`
  * result_type **required** `string`
  * sid **required** [sid](#sid)

### caption
* caption `string`

### catalogue_number
* catalogue_number `string`

### chapter
* chapter [item](#item)

### clip
* clip `object`
  * advertising_allowed **required** [advertising_allowed](#advertising_allowed)
  * alternate_images_mixin [alternate_images_mixin](#alternate_images_mixin)
  * ancestor_titles [ancestor_titles](#ancestor_titles)
  * ancestors [ancestors](#ancestors)
  * ancestors_titles [ancestors_titles](#ancestors_titles)
  * availability_mixin [availability_mixin](#availability_mixin)
  * caption [caption](#caption)
  * clip_of [clip_of](#clip_of)
  * contributions_mixin [contributions_mixin](#contributions_mixin)
  * embargoed **required** [embargoed](#embargoed)
  * genre_groupings [genre_groupings](#genre_groupings)
  * genre_groups [genre_groups](#genre_groups)
  * identifiers [identifiers](#identifiers)
  * image_link [image_link](#image_link)
  * images_mixin [images_mixin](#images_mixin)
  * is_embeddable [is_embeddable](#is_embeddable)
  * items_for [items_for](#items_for)
  * master_brand_link [master_brand_link](#master_brand_link)
  * media_type [media_type](#media_type)
  * original_version_duration [original_version_duration](#original_version_duration)
  * partner **required** [partner](#partner)
  * pid **required** [pid](#pid)
  * previous_next_mixin [previous_next_mixin](#previous_next_mixin)
  * programme_formats [programme_formats](#programme_formats)
  * related_links [related_links](#related_links)
  * release_date_group [release_date_group](#release_date_group)
  * synopses [synopses](#synopses)
  * title [title](#title)
  * updated_time **required** [updated_time](#updated_time)
  * uri [uri](#uri)
  * versions_mixin [versions_mixin](#versions_mixin)

### clip_of
* clip_of [pidReference](#pidreference)

### code
* code `string`

### collection
* collection [group-body](#group-body)

### competition_warning
* competition_warning `boolean`

### containers_title
* containers_title `string`

### context
* context `object`
  * cascades_to_descendants `boolean`
  * href `string`
  * pid **required** [pid](#pid)
  * result_type **required** `string`

### contributions_mixin
* contributions_mixin `object`
  * contributions **required** `object`
    * contributions **required** `object`
      * contributions_mixin_contribution `array`
        * items [contributions_mixin_contribution](#contributions_mixin_contribution)
      * href `string`
    * contributions_mixin_contribution `array`
      * items [contributions_mixin_contribution](#contributions_mixin_contribution)
    * href `string`

### contributions_mixin_contribution
* contributions_mixin_contribution `object`
  * contribution **required** `object`
    * character_name `string`
    * contribution **required** `object`
      * character_name `string`
      * contributions_mixin_contributor [contributions_mixin_contributor](#contributions_mixin_contributor)
      * credit_role `object`
        * #text `string`
        * id `string`
    * contributions_mixin_contributor [contributions_mixin_contributor](#contributions_mixin_contributor)
    * credit_role `object`
      * #text `string`
      * id `string`

### contributions_mixin_contributor
* contributions_mixin_contributor `object`
  * contributor **required** `object`
    * contributions_mixin_contributor_name [contributions_mixin_contributor_name](#contributions_mixin_contributor_name)
    * contributor **required** `object`
      * contributions_mixin_contributor_name [contributions_mixin_contributor_name](#contributions_mixin_contributor_name)
      * href `string`
      * type [type](#type)
    * href `string`
    * type [type](#type)

### contributions_mixin_contributor_name
* contributions_mixin_contributor_name `object`
  * name **required** `object`
    * family `string`
    * given `string`
    * name **required** `object`
      * family `string`
      * given `string`
      * presentation `string`
      * title `string`
    * presentation `string`
    * title `string`

### contributor
* contributor `object`
  * contributor_name [contributor_name](#contributor_name)
  * contributor_to `array`
    * items [contributor_to](#contributor_to)
  * disambiguation [disambiguation](#disambiguation)
  * href `string`
  * identifiers [identifiers](#identifiers)
  * ids [ids](#ids)
  * partner **required** [partner](#partner)
  * pid **required** [pid](#pid)
  * type [type](#type)

### contributor_name
* contributor_name `object`
  * name **required** `object`
    * family `string`
    * given `string`
    * lang `string`
    * name **required** `object`
      * family `string`
      * given `string`
      * lang `string`
      * presentation `string`
      * title `string`
    * presentation `string`
    * title `string`

### contributor_to
* contributor_to `object`
  * href **required** `string`
  * result_type **required** `string`

### credits_time
* credits_time `object`
  * squeeze_end `string`
  * squeeze_start `string`

### data
* data `object`
  * datum [datum](#datum)

### dateRange
* dateRange `object`
  * end `string`
  * start `string`

### date_range
* date_range [dateRange](#daterange)

### datum
* datum `string`

### dependency_on
* dependency_on `object`
  * filter `string`
  * value `string`

### deprecated
* deprecated `object`
  * deprecated_since **required** `string`
  * name **required** `string`
  * replaced_by `string`
  * replacement_type `string`
  * type **required** `string`

### deprecatedReferenceElement
* deprecatedReferenceElement
  * href **required** `string`
  * result_type **required** `string`
  * deprecated **required** `boolean`
  * deprecated_since **required** `string`
  * replaced_by **required** `string`

### deprecationAttributes
* deprecationAttributes `object`
  * deprecated **required** `boolean`
  * deprecated_since **required** `string`
  * replaced_by **required** `string`

### deprecations
* deprecations `object`
  * deprecated `array`
    * items [deprecated](#deprecated)

### description
* description `string`

### dimensions
* dimensions `object`
  * height `integer`
  * width `integer`

### disambiguation
* disambiguation `string`

### embargoed
* embargoed `string` (values: true, false)

### end
* end `string`

### end_time
* end_time `string`

### episode
* episode `object`
  * advertising_allowed **required** [advertising_allowed](#advertising_allowed)
  * alternate_images_mixin [alternate_images_mixin](#alternate_images_mixin)
  * ancestor_titles [ancestor_titles](#ancestor_titles)
  * ancestors [ancestors](#ancestors)
  * ancestors_titles [ancestors_titles](#ancestors_titles)
  * availability_mixin [availability_mixin](#availability_mixin)
  * contributions_mixin [contributions_mixin](#contributions_mixin)
  * embargoed **required** [embargoed](#embargoed)
  * episode_of [episode_of](#episode_of)
  * genre_groupings [genre_groupings](#genre_groupings)
  * genre_groups [genre_groups](#genre_groups)
  * has_guidance [has_guidance](#has_guidance)
  * identifiers [identifiers](#identifiers)
  * image_link [image_link](#image_link)
  * images_mixin [images_mixin](#images_mixin)
  * is_embeddable [is_embeddable](#is_embeddable)
  * is_stacked [is_stacked](#is_stacked)
  * items_for [items_for](#items_for)
  * master_brand_link [master_brand_link](#master_brand_link)
  * media_type [media_type](#media_type)
  * original_version_duration [original_version_duration](#original_version_duration)
  * partner **required** [partner](#partner)
  * pid **required** [pid](#pid)
  * presentation_title [presentation_title](#presentation_title)
  * previous_next_mixin [previous_next_mixin](#previous_next_mixin)
  * programme_formats [programme_formats](#programme_formats)
  * programme_type [programme_type](#programme_type)
  * related_links [related_links](#related_links)
  * release_date_group [release_date_group](#release_date_group)
  * synopses [synopses](#synopses)
  * title [title](#title)
  * updated_time **required** [updated_time](#updated_time)
  * uri [uri](#uri)
  * versions_mixin [versions_mixin](#versions_mixin)

### episode_of
* episode_of [pidReference](#pidreference)

### error
* error `object`
  * code **required** [code](#code)
  * data **required** [data](#data)
  * error-name **required** [error-name](#error-name)
  * expr **required** [expr](#expr)
  * format-string **required** [format-string](#format-string)
  * message **required** [message](#message)
  * retryable **required** [retryable](#retryable)
  * xquery-version **required** [xquery-version](#xquery-version)

### error-name
* error-name `string`

### errors
* errors `object`
  * error [error](#error)

### expected_child_count
* expected_child_count `integer`

### expr
* expr `string`

### feed
* feed `object`
  * deprecations [deprecations](#deprecations)
  * filters [filters](#filters)
  * href **required** `string`
  * mixins [mixins](#mixins)
  * name **required** `string`
  * rel **required** `string`
  * release_status [release_status_type](#release_status_type)
  * sorts [sorts](#sorts)
  * title **required** `string`

### feeds
* feeds `object`
  * deployment_root `string`
  * deprecations [deprecations](#deprecations)
  * feed `array`
    * items [feed](#feed)

### filter
* filter `object`
  * default `string`
  * depends_on `string`
  * deprecated `boolean`
  * deprecated_since `string`
  * guaranteed_until `string`
  * max_value `integer`
  * min_value `integer`
  * multiple_values `boolean`
  * name **required** `string`
  * option `array`
    * items [option](#option)
  * prefer `string`
  * prohibits `array`
    * items [prohibits](#prohibits)
  * release_status [release_status_type](#release_status_type)
  * replaced_by `string`
  * required `boolean`
  * title **required** `string`
  * type **required** `string`

### filters
* filters `object`
  * filter `array`
    * items [filter](#filter)
  * unstable_filters [unstable_filters](#unstable_filters)

### focus_point
* focus_point `object`
  * x `integer`
  * y `integer`

### for_programme
* for_programme `object`
  * href `string`

### for_programmes
* for_programmes `object`
  * for_programme `array`
    * items [for_programme](#for_programme)

### format
* format `object`
  * #text `string`
  * format_id `string`

### format-string
* format-string `string`

### franchise
* franchise [group-body](#group-body)

### franchises
* franchises [reference](#reference)

### gallery
* gallery [group-body](#group-body)

### genre
* genre `object`
  * #text `string`
  * id `string`
  * type `string`

### genreGroupingsType
* genreGroupingsType `object`
  * genre_group `array`
    * items [genre_group](#genre_group)

### genreGroupsType
* genreGroupsType
  * href **required** `string`
  * result_type **required** `string`
  * deprecated **required** `boolean`
  * deprecated_since **required** `string`
  * replaced_by **required** `string`
  * genre_group `array`
    * items [genre_group](#genre_group)

### genre_group
* genre_group `object`
  * genres **required** `object`
    * genre `array`
      * items [genre](#genre)
  * id `string`
  * type `string`

### genre_groupings
* genre_groupings [genreGroupingsType](#genregroupingstype)

### genre_groups
* genre_groups [genreGroupsType](#genregroupstype)

### group-body
* group-body `object`
  * alternate_images_mixin [alternate_images_mixin](#alternate_images_mixin)
  * embargoed **required** [embargoed](#embargoed)
  * for_programmes [for_programmes](#for_programmes)
  * identifiers [identifiers](#identifiers)
  * ids [ids](#ids)
  * images_mixin [images_mixin](#images_mixin)
  * master_brand_link [master_brand_link](#master_brand_link)
  * partner **required** [partner](#partner)
  * pid **required** [pid](#pid)
  * related_links [related_links](#related_links)
  * scheduled [scheduled](#scheduled)
  * synopses [synopses](#synopses)
  * title [title](#title)
  * updated_time **required** [updated_time](#updated_time)
  * url_key [url_key](#url_key)

### guidance_warnings
* guidance_warnings `object`
  * warnings `object`
    * warning_items [warning_items](#warning_items)
    * warning_texts [warning_texts](#warning_texts)
    * warnings `object`
      * warning_items [warning_items](#warning_items)
      * warning_texts [warning_texts](#warning_texts)

### has_guidance
* has_guidance `boolean`

### highlight
* highlight [item](#item)

### id
* id `object`
  * #text `string`
  * authority `string`
  * type `string`

### identifier
* identifier `object`
  * #text `string`
  * authority `string`
  * type `string`

### identifiers
* identifiers `object`
  * identifier **required** `array`
    * items [identifier](#identifier)

### ids
* ids `object`
  * id **required** `array`
    * items [id](#id)

### image
* image `object`
  * author `string`
  * embargoed **required** [embargoed](#embargoed)
  * identifiers [identifiers](#identifiers)
  * partner **required** [partner](#partner)
  * pid **required** [pid](#pid)
  * shoot_date `string`
  * source_asset [source_asset](#source_asset)
  * synopses [synopses](#synopses)
  * template_url `string`
  * title [title](#title)
  * type `string`

### image_link
* image_link `object`
  * image **required** `object`

### images_mixin
* images_mixin `object`
  * images **required** `object`
    * image `object`
      * href `string`
      * images **required** `object`
        * image `object`
          * href `string`
          * inherited_from `object`
            * href `string`
            * result_type `string`
          * template_url **required** `string`
          * type `string`
      * inherited_from `object`
        * href `string`
        * result_type `string`
      * template_url **required** `string`
      * type `string`

### is_audio_described
* is_audio_described `boolean`

### is_blanked
* is_blanked `boolean`

### is_concrete
* is_concrete `boolean`

### is_critical
* is_critical `boolean`

### is_downloadable
* is_downloadable `boolean`

### is_embeddable
* is_embeddable `boolean`

### is_external
* is_external `boolean`

### is_repeat
* is_repeat `boolean`

### is_signed
* is_signed `boolean`

### is_simulcast
* is_simulcast `boolean`

### is_stacked
* is_stacked `boolean`

### is_streamable
* is_streamable `boolean`

### item
* item `object`
  * catalogue_number [catalogue_number](#catalogue_number)
  * contributions_mixin [contributions_mixin](#contributions_mixin)
  * duration `number`
  * identifiers [identifiers](#identifiers)
  * ids [ids](#ids)
  * images_mixin [images_mixin](#images_mixin)
  * item_of [item_of](#item_of)
  * music_code [music_code](#music_code)
  * offsets [offsets](#offsets)
  * partner **required** [partner](#partner)
  * pid **required** [pid](#pid)
  * play_events [play_events](#play_events)
  * publisher [publisher](#publisher)
  * record_label [record_label](#record_label)
  * recording_date [recording_date](#recording_date)
  * release_title [release_title](#release_title)
  * snippet_url [snippet_url](#snippet_url)
  * source_media [source_media](#source_media)
  * synopses [synopses](#synopses)
  * title [title](#title)
  * track_number [track_number](#track_number)
  * track_side [track_side](#track_side)
  * type `string`
  * updated_time [updated_time](#updated_time)

### item_of
* item_of [reference](#reference)

### items_for
* items_for [reference](#reference)

### long
* long `string`

### master_brand
* master_brand `object`
  * colour `string`
  * competition_warning `object`
    * href **required** `string`
    * pid **required** [pid](#pid)
  * ident `string`
  * identifiers [identifiers](#identifiers)
  * image_link [image_link](#image_link)
  * images_mixin [images_mixin](#images_mixin)
  * master_brand_date_range `object`
    * end `string`
    * start `string`
  * mid **required** [mid](#mid)
  * name [name](#name)
  * partner **required** [partner](#partner)
  * position [position](#position)
  * synopses `object`
    * long [long](#long)
    * medium [medium](#medium)
    * short [short](#short)
  * title [title](#title)
  * url_key `string`

### master_brand_link
* master_brand_link `object`
  * master_brand **required** `object`
    * href **required** `string`
    * master_brand **required** `object`
      * href **required** `string`
      * mid **required** [mid](#mid)
      * result_type **required** `string`
    * mid **required** [mid](#mid)
    * result_type **required** `string`

### media_availability_time
* media_availability_time [dateRange](#daterange)

### media_profile_group
* media_profile_group `object`
  * #text `string`
  * context `string`
  * pid [pid](#pid)
  * platform `string`
  * territory `string`
  * transport `string`

### media_profile_groups
* media_profile_groups `object`
  * media_profile_group `array`
    * items [media_profile_group](#media_profile_group)

### media_set
* media_set `string`

### media_type
* media_type `string` (values: Video, Audio)

### medium
* medium `string`

### message
* message `string`

### mid
* mid `string`

### mixin
* mixin `object`
  * affected_by `array`
    * items [affected_by](#affected_by)
  * dependency_on `array`
    * items [dependency_on](#dependency_on)
  * depends_on `string`
  * deprecated `boolean`
  * deprecated_since `string`
  * guaranteed_until `string`
  * href `string`
  * name **required** `string`
  * prohibits `array`
    * items [prohibits](#prohibits)
  * release_status [release_status_type](#release_status_type)
  * replaced_by `string`
  * title **required** `string`

### mixins
* mixins `object`
  * mixin `array`
    * items [mixin](#mixin)
  * unstable_mixins [unstable_mixins](#unstable_mixins)

### music
* music [item](#item)

### music_code
* music_code `string`

### name
* name `string`

### next
* next `object`
  * href **required** `string`

### nitro
* nitro `object`
  * deprecations [deprecations](#deprecations)
  * filters [filters](#filters)
  * mixins [mixins](#mixins)
  * pagination [pagination](#pagination)
  * results [results](#results)
  * sorts [sorts](#sorts)

### offset_in
* offset_in `object`
  * href **required** `string`
  * offset `integer`
  * position `number`
  * programme **required** [pid](#pid)
  * version **required** [pid](#pid)

### offsets
* offsets `object`
  * offset_in `array`
    * items [offset_in](#offset_in)

### option
* option `object`
  * href `string`
  * release_status [release_status_type](#release_status_type)
  * title **required** `string`
  * value **required** `string`

### original_version_duration
* original_version_duration `object`
  * version `object`
    * duration `string`
    * href **required** `string`
    * pid **required** [pid](#pid)
    * version `object`
      * duration `string`
      * href **required** `string`
      * pid **required** [pid](#pid)

### other
* other [item](#item)

### pagination
* pagination `object`
  * next [next](#next)
  * previous [previous](#previous)

### partner
* partner [pid](#pid)

### pid
* pid `string`

### pidReference
* pidReference `object`
  * href `string`
  * pid **required** [pid](#pid)
  * position `integer`
  * result_type **required** `string`

### play_event
* play_event `object`
  * offset `integer`
  * pid **required** [pid](#pid)
  * played_in_links `array`
    * items [played_in_links](#played_in_links)
  * position `number`
  * synopses [synopses](#synopses)
  * title `string`

### play_events
* play_events `object`
  * play_event `array`
    * items [play_event](#play_event)

### played_in_links
* played_in_links `object`
  * played_in `object`
    * href `string`
    * played_in `object`
      * href `string`
      * result_type `string`
    * result_type `string`

### position
* position `integer`

### presentation_title
* presentation_title `string`

### previous
* previous `object`
  * href **required** `string`

### previous_next_mixin
* previous_next_mixin `object`
  * previous_next **required** `object`
    * next [reference](#reference)
    * previous [reference](#reference)
    * previous_next **required** `object`
      * next [reference](#reference)
      * previous [reference](#reference)

### priority
* priority `integer`

### programme_formats
* programme_formats `object`
  * format **required** `array`
    * items [format](#format)

### programme_type
* programme_type `object`
  * value **required** `string`

### prohibits
* prohibits `object`
  * filter `array`
    * items `object`
      * name **required** `string`
  * mixin `array`
    * items `object`
      * filter `array`
        * items `object`
          * name **required** `string`
      * mixin `array`
        * items `object`
          * name **required** `string`
      * name **required** `string`

### promoted_by
* promoted_by `string`

### promoted_for
* promoted_for `string`

### promotion
* promotion `object`
  * context [context](#context)
  * end_time [end_time](#end_time)
  * identifiers [identifiers](#identifiers)
  * partner **required** [partner](#partner)
  * pid **required** [pid](#pid)
  * priority [priority](#priority)
  * promoted_by [promoted_by](#promoted_by)
  * promoted_for [promoted_for](#promoted_for)
  * promotion_of [promotion_of](#promotion_of)
  * related_links [related_links](#related_links)
  * start_time [start_time](#start_time)
  * status [status](#status)
  * synopses [synopses](#synopses)
  * title [title](#title)
  * updated_time **required** [updated_time](#updated_time)
  * uri [uri](#uri)
  * url [url](#url)

### promotion_of
* promotion_of [pidReference](#pidreference)

### publication_rights
* publication_rights `object`
  * #text `string`
  * context `string`
  * platform `string`
  * territory `string`
  * transport `string`

### published_time
* published_time [broadcastTime](#broadcasttime)

### publisher
* publisher `string`

### record_label
* record_label `string`

### recording_date
* recording_date `string`

### reference
* reference
  * href **required** `string`
  * result_type **required** `string`
  * href_deprecated `boolean`
  * result_type_deprecated `boolean`

### referenceAttributes
* referenceAttributes `object`
  * href **required** `string`
  * result_type **required** `string`

### region
* region `string`

### related_link
* related_link `object`
  * availability `object`
    * end `string`
    * start `string`
  * is_external [is_external](#is_external)
  * pid **required** [pid](#pid)
  * position [position](#position)
  * synopses [synopses](#synopses)
  * title [title](#title)
  * type [type](#type)
  * uri [uri](#uri)

### related_links
* related_links `object`
  * related_link `array`
    * items [related_link](#related_link)

### release_date_group
* release_date_group `object`
  * release_date `string`
  * release_year `string`
  * release_year_month `string`

### release_status_type
* release_status_type `string` (values: alpha, beta, supported, deprecated)

### release_title
* release_title `string`

### results
* results `object`
  * availability [availability](#availability)
  * brand [brand](#brand)
  * broadcast [broadcast](#broadcast)
  * chapter [chapter](#chapter)
  * clip [clip](#clip)
  * collection [collection](#collection)
  * contributor [contributor](#contributor)
  * episode [episode](#episode)
  * franchise [franchise](#franchise)
  * gallery [gallery](#gallery)
  * highlight [highlight](#highlight)
  * image [image](#image)
  * master_brand [master_brand](#master_brand)
  * more_than `integer`
  * music [music](#music)
  * other [other](#other)
  * page **required** `integer`
  * page_size **required** `integer`
  * promotion [promotion](#promotion)
  * season [season](#season)
  * series [series](#series)
  * service [service](#service)
  * speech [speech](#speech)
  * total `integer`
  * version_group [version_group](#version_group)
  * window [window](#window)

### retryable
* retryable `boolean`

### revocation_status
* revocation_status `string`

### schedule_date
* schedule_date `string`

### scheduled
* scheduled `object`
  * end `string`
  * start `string`

### scheduled_publication_rights
* scheduled_publication_rights `object`
  * publication_rights `array`
    * items [publication_rights](#publication_rights)

### scheduled_time
* scheduled_time `object`
  * end `string`
  * start `string`

### season
* season [group-body](#group-body)

### series
* series `object`
  * alternate_images_mixin [alternate_images_mixin](#alternate_images_mixin)
  * ancestor_titles [ancestor_titles](#ancestor_titles)
  * ancestors [ancestors](#ancestors)
  * ancestors_titles [ancestors_titles](#ancestors_titles)
  * availability_mixin [availability_mixin](#availability_mixin)
  * contributions_mixin [contributions_mixin](#contributions_mixin)
  * embargoed **required** [embargoed](#embargoed)
  * expected_child_count [expected_child_count](#expected_child_count)
  * genre_groupings [genre_groupings](#genre_groupings)
  * identifiers [identifiers](#identifiers)
  * image_link [image_link](#image_link)
  * images_mixin [images_mixin](#images_mixin)
  * is_embeddable [is_embeddable](#is_embeddable)
  * items_for [items_for](#items_for)
  * master_brand_link [master_brand_link](#master_brand_link)
  * partner **required** [partner](#partner)
  * pid **required** [pid](#pid)
  * previous_next_mixin [previous_next_mixin](#previous_next_mixin)
  * programme_formats [programme_formats](#programme_formats)
  * programme_type [programme_type](#programme_type)
  * related_links [related_links](#related_links)
  * release_date_group [release_date_group](#release_date_group)
  * series_of [series_of](#series_of)
  * synopses [synopses](#synopses)
  * title [title](#title)
  * updated_time **required** [updated_time](#updated_time)
  * uri [uri](#uri)

### series_of
* series_of [pidReference](#pidreference)

### service
* service `object`
  * date_range [date_range](#date_range)
  * description [description](#description)
  * identifiers [identifiers](#identifiers)
  * ids [ids](#ids)
  * is_concrete [is_concrete](#is_concrete)
  * is_downloadable [is_downloadable](#is_downloadable)
  * is_streamable [is_streamable](#is_streamable)
  * master_brand_link [master_brand_link](#master_brand_link)
  * media_type [media_type](#media_type)
  * name [name](#name)
  * partner **required** [partner](#partner)
  * region [region](#region)
  * sid **required** [sid](#sid)
  * type [type](#type)
  * updated_time [updated_time](#updated_time)

### serviceReference
* serviceReference `object`
  * href **required** `string`
  * result_type **required** `string`
  * sid **required** `string`

### short
* short `string`

### sid
* sid `string`

### size
* size `object`
  * units `string`

### snippet_url
* snippet_url `string`

### sort
* sort `object`
  * deprecated `boolean`
  * deprecated_since `string`
  * guaranteed_until `string`
  * is_default `string`
  * name **required** `string`
  * release_status [release_status_type](#release_status_type)
  * replaced_by `string`
  * sort_direction `array`
    * items [sort_direction](#sort_direction)
  * title **required** `string`

### sort_direction
* sort_direction `object`
  * href **required** `string`
  * is_default **required** `string`
  * name **required** `string`
  * value **required** `string`

### sorts
* sorts `object`
  * sort `array`
    * items [sort](#sort)
  * unstable_sorts [unstable_sorts](#unstable_sorts)

### source_asset
* source_asset `object`
  * dimensions [dimensions](#dimensions)
  * focus_point [focus_point](#focus_point)
  * mime_type `string`
  * size [size](#size)
  * uri `string`

### source_media
* source_media `string`

### speech
* speech [item](#item)

### start_time
* start_time `string`

### status
* status `string`

### synopses
* synopses `object`
  * long [long](#long)
  * medium [medium](#medium)
  * short [short](#short)

### title
* title `string`

### track_number
* track_number `string`

### track_side
* track_side `string`

### tx_time
* tx_time `object`
  * credits_showing `string`
  * end `string`
  * start `string`

### type
* type `string`

### types_with_id
* types_with_id `object`
  * types **required** `object`
    * type **required** `array`
      * items `object`
        * id `string`
        * types **required** `object`
          * type **required** `array`
            * items `object`
              * id `string`

### unstable_filters
* unstable_filters `object`
  * filter `array`
    * items [filter](#filter)

### unstable_mixins
* unstable_mixins `object`
  * mixin `array`
    * items [mixin](#mixin)

### unstable_sorts
* unstable_sorts `object`
  * sort `array`
    * items [sort](#sort)

### updated_time
* updated_time `string`

### uri
* uri `string`

### url
* url `string`

### url_key
* url_key `string`

### version_availability
* version_availability `object`
  * availability **required** `object`
    * availability **required** `object`
      * availability_end `string`
      * availability_start `string`
      * available_media_sets **required** [available_media_sets](#available_media_sets)
      * status `string`
    * availability_end `string`
    * availability_start `string`
    * available_media_sets **required** [available_media_sets](#available_media_sets)
    * status `string`

### version_availability_mixin
* version_availability_mixin `object`
  * version `array`
    * items `object`
      * availabilities `array`
        * items `object`
          * version_availability **required** `array`
            * items [version_availability](#version_availability)
      * competition_warning `string`
      * duration `string`
      * guidance_warnings [guidance_warnings](#guidance_warnings)
      * pid [pid](#pid)
      * types **required** `array`
        * items `object`
          * type `array`
            * items `string`
      * version `array`
        * items `object`
          * availabilities `array`
            * items `object`
              * version_availability **required** `array`
                * items [version_availability](#version_availability)
          * competition_warning `string`
          * duration `string`
          * guidance_warnings [guidance_warnings](#guidance_warnings)
          * pid [pid](#pid)
          * types **required** `array`
            * items `object`
              * type `array`
                * items `string`

### version_group
* version_group `object`
  * version **required** `object`
    * aspect_ratio `string`
    * competition_warning [competition_warning](#competition_warning)
    * duration `string`
    * identifiers [identifiers](#identifiers)
    * ids [ids](#ids)
    * pid **required** [pid](#pid)
    * types_with_id [types_with_id](#types_with_id)
    * updated_time **required** [updated_time](#updated_time)
    * version **required** `object`
      * aspect_ratio `string`
      * competition_warning [competition_warning](#competition_warning)
      * duration `string`
      * identifiers [identifiers](#identifiers)
      * ids [ids](#ids)
      * pid **required** [pid](#pid)
      * types_with_id [types_with_id](#types_with_id)
      * updated_time **required** [updated_time](#updated_time)
      * version_of [version_of](#version_of)
      * version_types_with_id [version_types_with_id](#version_types_with_id)
      * warnings [warnings](#warnings)
    * version_of [version_of](#version_of)
    * version_types_with_id [version_types_with_id](#version_types_with_id)
    * warnings [warnings](#warnings)

### version_of
* version_of [pidReference](#pidreference)

### version_types_with_id
* version_types_with_id `object`
  * version_types **required** `object`
    * version_type **required** `array`
      * items `object`
        * id `string`
        * version_types **required** `object`
          * version_type **required** `array`
            * items `object`
              * id `string`

### versions
* versions `object`
  * available **required** `integer`
  * version_availability_mixin **required** [version_availability_mixin](#version_availability_mixin)

### versions_mixin
* versions_mixin `object`
  * available_simulcasts [available_simulcasts](#available_simulcasts)
  * available_versions [available_versions](#available_versions)
  * available_webcasts [available_webcasts](#available_webcasts)
  * versions `array`
    * items [versions](#versions)

### warning
* warning `object`
  * #text `string`
  * short_description `string`
  * warning_code `string`

### warning_items
* warning_items `object`
  * warning `array`
    * items `object`
      * #text `string`
      * short_description `string`
      * warning `array`
        * items `object`
          * #text `string`
          * short_description `string`
          * warning_code `string`
      * warning_code `string`

### warning_text
* warning_text `object`
  * #text `string`
  * length `string`

### warning_texts
* warning_texts `object`
  * warning_text `array`
    * items `object`
      * #text `string`
      * length `string`
      * warning_text `array`
        * items `object`
          * #text `string`
          * length `string`

### warnings
* warnings `object`
  * warning `array`
    * items [warning](#warning)
  * warning_text `array`
    * items [warning_text](#warning_text)

### window
* window `object`
  * accurate_programme_time [accurate_programme_time](#accurate_programme_time)
  * ancestor_titles [ancestor_titles](#ancestor_titles)
  * ancestors_titles [ancestors_titles](#ancestors_titles)
  * identifiers [identifiers](#identifiers)
  * ids [ids](#ids)
  * image_link [image_link](#image_link)
  * images_mixin [images_mixin](#images_mixin)
  * media_availability_time [media_availability_time](#media_availability_time)
  * partner **required** [partner](#partner)
  * pid **required** [pid](#pid)
  * scheduled_publication_rights [scheduled_publication_rights](#scheduled_publication_rights)
  * scheduled_time [scheduled_time](#scheduled_time)
  * service [serviceReference](#servicereference)
  * updated_time [updated_time](#updated_time)
  * window_of `array`
    * items [window_of](#window_of)

### window_of
* window_of [pidReference](#pidreference)

### xquery-version
* xquery-version `string` (values: 1.0-ml, 0.9-ml, 1.0, XSLT): The XQuery language version.


