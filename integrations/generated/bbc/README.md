# @datafire/bbc

Client library for BBC Nitro

## Installation and Usage
```bash
npm install --save datafire @datafire/bbc
```

```js
let datafire = require('datafire');
let bbc = require('@datafire/bbc').create({
  api_key: "",
});

bbc.listVersions({}).then(data => {
  console.log(data);
})
```

## Description
BBC Nitro is the BBC's application programming interface (API) for BBC Programmes Metadata.

## Actions
### getAPI
Get API definition


```js
bbc.getAPI(null, context)
```

#### Parameters
*This action has no parameters*

### listAvailability
Discover details of on-demand availability for programmes and their versions


```js
bbc.listAvailability({}, context)
```

#### Parameters
* sort (string) - Sorts:
* sort_direction (string) - Sort direction
* availability (array) - filter for subset of availabilities
* descendants_of (array) - filter for subset of availabilities that have PID as ancestor
* media_set (array) - filter for subset of availabilities with media set
* page (integer) - which page of results to return
* page_size (integer) - number of results in each page
* territory (array) - filter for availabilities in given territory
* debug (boolean) - Turn on debug information (undocumented)

### listBroadcasts
Fetch metadata about linear Broadcasts and Services, allowing the generation of Television and Radio schedules and other datasets for broadcast items. Use /schedules instead of this feed as it is more efficient. Broadcasts will be deprecated in the future.


```js
bbc.listBroadcasts({}, context)
```

#### Parameters
* sort (string) - Sorts:
* sort_direction (string) - Sort direction
* mixin (array) - Mixins:
* authority (array) - filter for subset of broadcasts that have given authority
* descendants_of (array) - filter for subset of broadcasts that are descendants of the given programme PID
* end_from (string) - filter for subset of broadcasts that end on or later than the specified datetime
* end_to (string) - filter for subset of broadcasts that end on or earlier than the specified datetime
* format (array) - filter for subset of broadcasts that are classified in the given format ID
* genre (array) - filter for subset of broadcasts that are classified in the given genre ID
* id (array) - filter for subset of broadcasts that have given identifier
* item (array) - filter for subset of broadcasts with the given item performed on it
* page (integer) - which page of results to return
* page_size (integer) - number of results in each page
* people (string) - filter for subset of broadcasts that have given contributor
* pid (array) - filter for subset of broadcasts having given PID
* q (string) - filter for subset of broadcasts matching supplied keyword/phrase (boolean operators permitted)
* schedule_day (string) - filter for subset of broadcasts that start on the specified day (BBC time)
* schedule_day_from (string) - filter for subset of broadcasts that start on or after the specified day (BBC time)
* schedule_day_to (string) - filter for subset of broadcasts that start on or before the specified day (BBC time)
* service_master_brand (array) - filter for subset of broadcasts with given service master brand
* sid (array) - filter for subset of broadcasts that are on the specified linear service
* start_from (string) - filter for subset of broadcasts that start on or later than the specified datetime
* start_to (string) - filter for subset of broadcasts that start on or earlier than the specified datetime
* version (array) - filter for subset of broadcasts with given PID as their parent version

### listGroups
Long-lived curated collections of programmes and more, including Collections, Seasons, Franchises and Galleries


```js
bbc.listGroups({}, context)
```

#### Parameters
* sort (string) - Sorts:
* sort_direction (string) - Sort direction
* mixin (array) - Mixins:
* for_descendants_of (string) - filter for groups related to given programme or its descendants
* for_programme (string) - filter for subset of groups directly related to a given programme
* group (string) - filter for subset of groups which belong to the given group pid
* group_type (array) - filter for subset of groups that have the given group type
* member (string) - filter for subset of groups which contain an entity with the given pid as a member
* page (integer) - which page of results to return
* page_size (integer) - number of results in each page
* partner_id (array) - filter for groups by partner ID
* partner_pid (array) - filter for groups by partner PID
* pid (array) - filter for subset of seasons, collections, galleries or franchises having given PID
* q (string) - filter for subset of groups matching supplied keyword/phrase (boolean operators permitted)
* embargoed (string) - Control return of embargoed items (undocumented)

### listImages
Find metadata for images, particularly those in galleries


```js
bbc.listImages({}, context)
```

#### Parameters
* sort (string) - Sorts:
* sort_direction (string) - Sort direction
* group (string) - filter for images belonging to the given group (i.e. Gallery)
* image_type (array) - filter for images by type
* is_alternate_image_for (string) - filter for alternate images by entity PID
* is_image_for (string) - filter for images by entity PID
* page (integer) - which page of results to return
* page_size (integer) - number of results in each page
* partner_id (array) - filter for images by partner ID
* partner_pid (array) - filter for images by partner PID
* pid (array) - filter for subset of images having given PID
* q (string) - filter for subset of images matching supplied keyword/phrase (boolean operators permitted)
* embargoed (string) - Control return of embargoed items (undocumented)

### listItems
Look inside programmes to find segments: chapters, tracks and more


```js
bbc.listItems({}, context)
```

#### Parameters
* sort (string) - Sorts:
* sort_direction (string) - Sort direction
* mixin (array) - Mixins:
* authority (string) - filter for subset of items that have an ID issued by the given authority
* id (array) - filter for subset of items having given ID
* id_type (string) - filter for subset of items that have given an ID of the given type
* item_type (array) - filter for specific type(s) of items
* page (integer) - which page of results to return
* page_size (integer) - number of results in each page
* partner_id (array) - filter for items by partner ID
* partner_pid (array) - filter for items by partner PID
* people (string) - filter for subset of items that have specified person involved
* pid (array) - filter for subset of items matching one of the given PIDs
* programme (string) - filter for subset of items that are part of the given programme
* q (string) - filter for subset of items matching supplied keyword/phrase (boolean operators permitted)
* segment_event (string) - filter for item with the given segment_event

### listMasterbrands
List all Master Brands


```js
bbc.listMasterbrands({}, context)
```

#### Parameters
* sort (string) - Sorts:
* sort_direction (string) - Sort direction
* mixin (array) - Mixins:
* mid (array) - filter for subset of masterbrands that have given identifier
* page (integer) - which page of results to return
* page_size (integer) - number of results in each page
* partner_id (array) - filter for masterbrands by partner ID
* partner_pid (array) - filter for masterbrands by partner PID
* q (string) - filter for subset of masterbrands matching supplied keyword/phrase (boolean operators permitted)

### listPeople
The People feed allows you to search for the people and groups that contribute to programmes. This is the starting point for cast and crew credits, as well as finding contributors using external IDs (such as Wikipedia URLs)


```js
bbc.listPeople({}, context)
```

#### Parameters
* authority (string) - filter for subset of people that have an ID issued by the given authority
* has_external_id (array) - filter for people who have an external identifier
* id (array) - filter for subset of people having given ID
* id_type (string) - filter for subset of people that have given an ID of the given type
* page (integer) - which page of results to return
* page_size (integer) - number of results in each page
* partner_id (array) - filter for people by partner ID
* partner_pid (array) - filter for people by partner PID
* pid (array) - filter for subset of people having given PID
* programme (string) - filter for subset of people that have contributed to the given programme pid
* q (string) - filter for subset of people matching supplied keyword/phrase (boolean operators permitted)

### listPips
Look inside pips entities


```js
bbc.listPips({}, context)
```

#### Parameters
* page (integer) - which page of results to return
* page_size (integer) - number of results in each page
* q (string) - filter for subset of programmes matching supplied keyword/phrase (boolean operators permitted)

### listProgrammeDetails
Exposes programme information for a single pid


```js
bbc.listProgrammeDetails({}, context)
```

#### Parameters
* page (integer) - which page of results to return
* page_size (integer) - number of results in each page
* partner_pid (string) - Filter for programme information by partner PID
* pid (string) - Filter for programme information for the provided PID

### listProgrammes
Fetch metadata about Programmes (brands, series, episodes, clips). By applying different filter restrictions this feed can be used in many ways, for example to retrieve all series belonging to a brand, all the episodes and/or clips for a specific series, or any TLEO objects for a masterbrand. Other filters permit restricting to specific formats and/or genres, and you can request specific versions (for example Signed or Audio-Described). Parameters may be combined in any way suitable for your application.


```js
bbc.listProgrammes({}, context)
```

#### Parameters
* sort (string) - Sorts:
* sort_direction (string) - Sort direction
* mixin (array) - Mixins:
* audio_described (array) - filter for subset of programmes that are audio-described
* availability (array) - filter for subset of programmes that have availability
* availability_entity_type (array) - additional filter when availability=available
* availability_from (string) - filter for subset of programmes that are available after or at the specified datetime
* availability_type (array) - filter for a subset of programmes that are available for a given type
* children_of (array) - filter for subset of programmes that have PID as immediate parent
* descendants_of (array) - filter for subset of programmes that have PID as ancestor
* duration (array) - filter for subset of programmes that have given duration
* entity_type (array) - filter for subset of programmes that have given entity type
* format (array) - filter for subset of programmes with format
* genre (array) - filter for subset of programmes with genre
* group (string) - filter for subset of programmes which belong to the given group pid
* initial_letter (string) - filter for subset of programmes with title beginning with initial letter librarian style (ignoring leading 'The', 'An' (Welsh), etc) 0-9 a-z
* initial_letter_end (string) - Programmes with (librarian) titles whose initial letter is equal/before given letter. Use with initial_letter_start for a range
* initial_letter_start (string) - Programmes with (librarian) titles whose initial letter is equal/after given letter. Use with initial_letter_end for range.
* initial_letter_strict (array) - filter for subset of programmes with title beginning with initial letter
* item (array) - filter for subset of programmes with linked to versions which have the given item pids
* master_brand (array) - filter for subset of programmes with master_brand
* media_set (string) - filter for subset of programmes with media set
* media_type (array) - filter for subset of programmes with media type
* page (integer) - which page of results to return
* page_size (integer) - number of results in each page
* partner_id (array) - filter for programmes by partner ID
* partner_pid (array) - filter for programmes by partner PID
* payment_type (array) - filter for a subset of programmes that are of the given payment_type
* people (string) - filter for subset of programmes with contributions by given people PID
* pid (array) - filter for subset of programmes having given PID
* promoted_for (string) - filter for subset of programmes which are promoted for given service
* q (string) - filter for subset of programmes matching supplied keyword/phrase (boolean operators permitted)
* signed (array) - filter for subset of programmes that are signed
* tag_name (string) - filter for subset of programmes with tag
* tag_scheme (string) - filter for subset of programmes with a tag
* tleo (array) - filter for subset of programmes that are TLEOs
* version (array) - filter for subset of programmes with given PID as one of their versions
* embargoed (string) - Control return of embargoed items (undocumented)

### listPromotions
Details of short-term editorially curated "promotions", for instance those programmes featured on iPlayer today


```js
bbc.listPromotions({}, context)
```

#### Parameters
* mixin (array) - Mixins:
* context (string) - filter for subset of promotions belonging to a given context
* page (integer) - which page of results to return
* page_size (integer) - number of results in each page
* partner_id (array) - filter for promotions by partner ID
* partner_pid (array) - filter for promotions by partner PID
* pid (array) - filter for subset of promotions having given PID
* promoted_by (array) - filter for subset of promotions having given promoted by
* promoted_for (array) - filter for subset of promotions having given promoted for
* q (string) - filter for subset of promotions matching supplied keyword/phrase (boolean operators permitted)
* status (array) - filter for subset of promotions with status

### listSchedules
Dates, Times, Schedules: when and where are programmes being shown?


```js
bbc.listSchedules({}, context)
```

#### Parameters
* sort (string) - Sorts:
* sort_direction (string) - Sort direction
* mixin (array) - Mixins:
* authority (array) - filter for subset of broadcasts and webcasts that have given authority
* descendants_of (array) - filter for subset of broadcasts and webcasts that are descendants of the given programme PID
* end_from (string) - filter for subset of broadcasts and webcasts that end on or later than the specified datetime
* end_to (string) - filter for subset of broadcasts and webcasts that end on or earlier than the specified datetime
* format (array) - filter for subset of broadcasts and webcasts that are classified in the given format ID
* genre (array) - filter for subset of broadcasts and webcasts that are classified in the given genre ID
* group (string) - filter for subset of broadcasts and webcasts that have programmes in the given group
* id (array) - filter for subset of broadcasts and webcasts that have given identifier
* id_type (array) - filter for subset of broadcasts and webcasts that have given id type
* item (array) - filter for subset of broadcasts and webcasts with the given item performed on it
* page (integer) - which page of results to return
* page_size (integer) - number of results in each page
* partner_id (array) - filter for broadcasts and webcasts by partner ID
* partner_pid (array) - filter for broadcasts and webcasts by partner PID
* people (string) - filter for subset of broadcasts and webcasts that have given contributor
* pid (array) - filter for subset of broadcasts and webcasts having given PID
* q (string) - filter for subset of broadcasts and webcasts matching supplied keyword/phrase (boolean operators permitted)
* repeat (boolean) - filter to show either only repeats or non-repeats
* schedule_day (string) - filter for subset of broadcasts and webcasts that start on the specified day (BBC time)
* schedule_day_from (string) - filter for subset of broadcasts and webcasts that start on or after the specified day (BBC time)
* schedule_day_to (string) - filter for subset of broadcasts and webcasts that start on or before the specified day (BBC time)
* service_master_brand (array) - filter for subset of broadcasts and webcasts with given service master brand
* sid (array) - filter for subset of broadcasts and webcasts that are on the specified linear service
* start_from (string) - filter for subset of broadcasts and webcasts that start on or later than the specified datetime
* start_to (string) - filter for subset of broadcasts and webcasts that start on or earlier than the specified datetime
* version (array) - filter for subset of broadcasts and webcasts with given PID as their parent version

### getXSD
Get Schema definition


```js
bbc.getXSD(null, context)
```

#### Parameters
*This action has no parameters*

### listServices
The services feed exposes the linear broadcast "services" from PIPs. These are the actual services which broadcast programmes (eg bbc_one_oxford is the service for BBC One in Oxford).


```js
bbc.listServices({}, context)
```

#### Parameters
* end_from (string) - Return services that end on or later than the specified datetime
* end_to (string) - filter for subset of broadcasts that end on or earlier than the specified datetime
* mid (array) - filter for services by masterbrand MID
* page (integer) - which page of results to return
* page_size (integer) - number of results in each page
* partner_id (array) - filter for services by partner ID
* partner_pid (array) - filter for services by partner PID
* q (string) - filter for subset of services matching supplied keyword/phrase (boolean operators permitted)
* service_type (array) - filter for specified type of linear services
* sid (array) - filter for specified linear service
* start_from (string) - Return services that start on or later than the specified datetime
* start_to (string) - Return services that start earlier than the specified datetime

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

#### Parameters
* availability (array) - filter for subset of versions that have availability
* descendants_of (array) - filter for subset of versions having given programme PID
* media_set (array) - filter for subset of versions with availability in the given media set
* page (integer) - which page of results to return
* page_size (integer) - number of results in each page
* partner_id (array) - filter for versions by partner ID
* partner_pid (array) - filter for versions by partner PID
* payment_type (array) - filter for a subset of versions that are of the given payment_type
* pid (array) - filter for subset of versions having given PID
* embargoed (string) - Control return of embargoed items (undocumented)

