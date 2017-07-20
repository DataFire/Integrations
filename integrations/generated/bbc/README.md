# @datafire/bbc
We encapsulate Radio & Music business logic for iPlayer Radio and BBC Music products on all platforms. We add value by reliably providing the right blend of metadata needed by clients.

## Operation: getAPI
Get API definition

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: listAvailability
Discover details of on-demand availability for programmes and their versions

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "sort": {
      "type": "string",
      "description": "Sorts:\n* scheduled_start: sort chronologically by scheduled start time/date, ascending\n",
      "enum": [
        "scheduled_start"
      ]
    },
    "sort_direction": {
      "type": "string",
      "description": "Sort direction",
      "enum": [
        "ascending",
        "descending"
      ]
    },
    "availability": {
      "type": "array",
      "description": "filter for subset of availabilities",
      "enum": [
        "available"
      ]
    },
    "descendants_of": {
      "type": "array",
      "description": "filter for subset of availabilities that have PID as ancestor"
    },
    "media_set": {
      "type": "array",
      "description": "filter for subset of availabilities with media set"
    },
    "page": {
      "type": "integer",
      "description": "which page of results to return",
      "minimum": 1
    },
    "page_size": {
      "type": "integer",
      "description": "number of results in each page",
      "maximum": 300
    },
    "territory": {
      "type": "array",
      "description": "filter for availabilities in given territory",
      "enum": [
        "uk",
        "nonuk",
        "world"
      ]
    },
    "debug": {
      "type": "boolean",
      "description": "Turn on debug information (undocumented)"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/nitro"
}
```
## Operation: listBroadcasts
Fetch metadata about linear Broadcasts and Services, allowing the generation of Television and Radio schedules and other datasets for broadcast items. Use /schedules instead of this feed as it is more efficient. Broadcasts will be deprecated in the future.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "sort": {
      "type": "string",
      "description": "Sorts:\n* start_date: sort chronologically by scheduled start time/date, ascending\n",
      "enum": [
        "start_date"
      ]
    },
    "sort_direction": {
      "type": "string",
      "description": "Sort direction",
      "enum": [
        "ascending",
        "descending"
      ]
    },
    "mixin": {
      "type": "array",
      "description": "Mixins:\n* titles: return ancestor programme titles\n",
      "enum": [
        "titles"
      ]
    },
    "authority": {
      "type": "array",
      "description": "filter for subset of broadcasts that have given authority"
    },
    "descendants_of": {
      "type": "array",
      "description": "filter for subset of broadcasts that are descendants of the given programme PID"
    },
    "end_from": {
      "type": "string",
      "format": "date-time",
      "description": "filter for subset of broadcasts that end on or later than the specified datetime"
    },
    "end_to": {
      "type": "string",
      "format": "date-time",
      "description": "filter for subset of broadcasts that end on or earlier than the specified datetime"
    },
    "format": {
      "type": "array",
      "description": "filter for subset of broadcasts that are classified in the given format ID"
    },
    "genre": {
      "type": "array",
      "description": "filter for subset of broadcasts that are classified in the given genre ID"
    },
    "id": {
      "type": "array",
      "description": "filter for subset of broadcasts that have given identifier"
    },
    "item": {
      "type": "array",
      "description": "filter for subset of broadcasts with the given item performed on it"
    },
    "page": {
      "type": "integer",
      "description": "which page of results to return",
      "minimum": 1
    },
    "page_size": {
      "type": "integer",
      "description": "number of results in each page",
      "maximum": 300
    },
    "people": {
      "type": "string",
      "description": "filter for subset of broadcasts that have given contributor"
    },
    "pid": {
      "type": "array",
      "description": "filter for subset of broadcasts having given PID"
    },
    "q": {
      "type": "string",
      "description": "filter for subset of broadcasts matching supplied keyword/phrase (boolean operators permitted)"
    },
    "schedule_day": {
      "type": "string",
      "format": "date",
      "description": "filter for subset of broadcasts that start on the specified day (BBC time)"
    },
    "schedule_day_from": {
      "type": "string",
      "format": "date",
      "description": "filter for subset of broadcasts that start on or after the specified day (BBC time)"
    },
    "schedule_day_to": {
      "type": "string",
      "format": "date",
      "description": "filter for subset of broadcasts that start on or before the specified day (BBC time)"
    },
    "service_master_brand": {
      "type": "array",
      "description": "filter for subset of broadcasts with given service master brand"
    },
    "sid": {
      "type": "array",
      "description": "filter for subset of broadcasts that are on the specified linear service"
    },
    "start_from": {
      "type": "string",
      "format": "date-time",
      "description": "filter for subset of broadcasts that start on or later than the specified datetime"
    },
    "start_to": {
      "type": "string",
      "format": "date-time",
      "description": "filter for subset of broadcasts that start on or earlier than the specified datetime"
    },
    "version": {
      "type": "array",
      "description": "filter for subset of broadcasts with given PID as their parent version"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/nitro"
}
```
## Operation: listGroups
Long-lived curated collections of programmes and more, including Collections, Seasons, Franchises and Galleries

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "sort": {
      "type": "string",
      "description": "Sorts:\n* pid: sort alphabetically by PID\n",
      "enum": [
        "pid"
      ]
    },
    "sort_direction": {
      "type": "string",
      "description": "Sort direction",
      "enum": [
        "descending"
      ]
    },
    "mixin": {
      "type": "array",
      "description": "Mixins:\n* alternate_images: mixin to return the alternate images for a group\n* group_for: mixin to return links to programme entities that group belongs to\n* images: mixin to add image information for a group\n* related_links: mixin to return related links for the group\n",
      "enum": [
        "alternate_images",
        "group_for",
        "images",
        "related_links"
      ]
    },
    "for_descendants_of": {
      "type": "string",
      "description": "filter for groups related to given programme or its descendants",
      "pattern": "^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$",
      "minLength": 8
    },
    "for_programme": {
      "type": "string",
      "description": "filter for subset of groups directly related to a given programme",
      "pattern": "^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$",
      "minLength": 8
    },
    "group": {
      "type": "string",
      "description": "filter for subset of groups which belong to the given group pid",
      "pattern": "^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$",
      "minLength": 8
    },
    "group_type": {
      "type": "array",
      "description": "filter for subset of groups that have the given group type",
      "enum": [
        "collection",
        "franchise",
        "gallery",
        "season"
      ]
    },
    "member": {
      "type": "string",
      "description": "filter for subset of groups which contain an entity with the given pid as a member",
      "pattern": "^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$",
      "minLength": 8
    },
    "page": {
      "type": "integer",
      "description": "which page of results to return",
      "minimum": 1
    },
    "page_size": {
      "type": "integer",
      "description": "number of results in each page",
      "maximum": 300
    },
    "partner_id": {
      "type": "array",
      "description": "filter for groups by partner ID"
    },
    "partner_pid": {
      "type": "array",
      "description": "filter for groups by partner PID"
    },
    "pid": {
      "type": "array",
      "description": "filter for subset of seasons, collections, galleries or franchises having given PID"
    },
    "q": {
      "type": "string",
      "description": "filter for subset of groups matching supplied keyword/phrase (boolean operators permitted)"
    },
    "embargoed": {
      "type": "string",
      "description": "Control return of embargoed items (undocumented)",
      "enum": [
        "include",
        "exclude",
        "only"
      ]
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/nitro"
}
```
## Operation: listImages
Find metadata for images, particularly those in galleries

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "sort": {
      "type": "string",
      "description": "Sorts:\n* group_position: sort numerically by position, ascending only\n* pid: sort alphabetically by PID\n",
      "enum": [
        "group_position",
        "pid"
      ]
    },
    "sort_direction": {
      "type": "string",
      "description": "Sort direction",
      "enum": [
        "ascending",
        "descending"
      ]
    },
    "group": {
      "type": "string",
      "description": "filter for images belonging to the given group (i.e. Gallery)",
      "pattern": "^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$",
      "minLength": 8
    },
    "image_type": {
      "type": "array",
      "description": "filter for images by type",
      "enum": [
        "standard",
        "podcast",
        "store",
        "portrait",
        "letterbox"
      ]
    },
    "is_alternate_image_for": {
      "type": "string",
      "description": "filter for alternate images by entity PID",
      "pattern": "^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$",
      "minLength": 8
    },
    "is_image_for": {
      "type": "string",
      "description": "filter for images by entity PID",
      "pattern": "^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$",
      "minLength": 8
    },
    "page": {
      "type": "integer",
      "description": "which page of results to return",
      "minimum": 1
    },
    "page_size": {
      "type": "integer",
      "description": "number of results in each page",
      "maximum": 300
    },
    "partner_id": {
      "type": "array",
      "description": "filter for images by partner ID"
    },
    "partner_pid": {
      "type": "array",
      "description": "filter for images by partner PID"
    },
    "pid": {
      "type": "array",
      "description": "filter for subset of images having given PID"
    },
    "q": {
      "type": "string",
      "description": "filter for subset of images matching supplied keyword/phrase (boolean operators permitted)"
    },
    "embargoed": {
      "type": "string",
      "description": "Control return of embargoed items (undocumented)",
      "enum": [
        "include",
        "exclude",
        "only"
      ]
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/nitro"
}
```
## Operation: listItems
Look inside programmes to find segments: chapters, tracks and more

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "sort": {
      "type": "string",
      "description": "Sorts:\n* pid: sort by pid, descending\n",
      "enum": [
        "pid"
      ]
    },
    "sort_direction": {
      "type": "string",
      "description": "Sort direction",
      "enum": [
        "descending"
      ]
    },
    "mixin": {
      "type": "array",
      "description": "Mixins:\n* contributions: mixin to return information about contributors to items\n* images: mixin to add image information for an item\n* offset: mixin to return programme segment offsets, works in conjunction with programme filter\n* play_event: mixin to return programme segment events, works in conjunction with programme or segment_event filters\n",
      "enum": [
        "contributions",
        "images",
        "offset",
        "play_event"
      ]
    },
    "authority": {
      "type": "string",
      "description": "filter for subset of items that have an ID issued by the given authority"
    },
    "id": {
      "type": "array",
      "description": "filter for subset of items having given ID"
    },
    "id_type": {
      "type": "string",
      "description": "filter for subset of items that have given an ID of the given type"
    },
    "item_type": {
      "type": "array",
      "description": "filter for specific type(s) of items",
      "enum": [
        "chapter",
        "highlight",
        "music",
        "speech",
        "other"
      ]
    },
    "page": {
      "type": "integer",
      "description": "which page of results to return",
      "minimum": 1
    },
    "page_size": {
      "type": "integer",
      "description": "number of results in each page",
      "maximum": 300
    },
    "partner_id": {
      "type": "array",
      "description": "filter for items by partner ID"
    },
    "partner_pid": {
      "type": "array",
      "description": "filter for items by partner PID"
    },
    "people": {
      "type": "string",
      "description": "filter for subset of items that have specified person involved"
    },
    "pid": {
      "type": "array",
      "description": "filter for subset of items matching one of the given PIDs"
    },
    "programme": {
      "type": "string",
      "description": "filter for subset of items that are part of the given programme",
      "pattern": "^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$",
      "minLength": 8
    },
    "q": {
      "type": "string",
      "description": "filter for subset of items matching supplied keyword/phrase (boolean operators permitted)"
    },
    "segment_event": {
      "type": "string",
      "description": "filter for item with the given segment_event"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/nitro"
}
```
## Operation: listMasterbrands
List all Master Brands

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "sort": {
      "type": "string",
      "description": "Sorts:\n* mid: sort by mid, ascending\n",
      "enum": [
        "mid"
      ]
    },
    "sort_direction": {
      "type": "string",
      "description": "Sort direction",
      "enum": [
        "ascending"
      ]
    },
    "mixin": {
      "type": "array",
      "description": "Mixins:\n* images: mixin to add image information for a masterbrand\n",
      "enum": [
        "images"
      ]
    },
    "mid": {
      "type": "array",
      "description": "filter for subset of masterbrands that have given identifier"
    },
    "page": {
      "type": "integer",
      "description": "which page of results to return",
      "minimum": 1
    },
    "page_size": {
      "type": "integer",
      "description": "number of results in each page",
      "maximum": 300
    },
    "partner_id": {
      "type": "array",
      "description": "filter for masterbrands by partner ID"
    },
    "partner_pid": {
      "type": "array",
      "description": "filter for masterbrands by partner PID"
    },
    "q": {
      "type": "string",
      "description": "filter for subset of masterbrands matching supplied keyword/phrase (boolean operators permitted)"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/nitro"
}
```
## Operation: listPeople
The People feed allows you to search for the people and groups that contribute to programmes. This is the starting point for cast and crew credits, as well as finding contributors using external IDs (such as Wikipedia URLs)

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "authority": {
      "type": "string",
      "description": "filter for subset of people that have an ID issued by the given authority"
    },
    "has_external_id": {
      "type": "array",
      "description": "filter for people who have an external identifier",
      "enum": [
        "true",
        "false"
      ]
    },
    "id": {
      "type": "array",
      "description": "filter for subset of people having given ID"
    },
    "id_type": {
      "type": "string",
      "description": "filter for subset of people that have given an ID of the given type"
    },
    "page": {
      "type": "integer",
      "description": "which page of results to return",
      "minimum": 1
    },
    "page_size": {
      "type": "integer",
      "description": "number of results in each page",
      "maximum": 300
    },
    "partner_id": {
      "type": "array",
      "description": "filter for people by partner ID"
    },
    "partner_pid": {
      "type": "array",
      "description": "filter for people by partner PID"
    },
    "pid": {
      "type": "array",
      "description": "filter for subset of people having given PID"
    },
    "programme": {
      "type": "string",
      "description": "filter for subset of people that have contributed to the given programme pid"
    },
    "q": {
      "type": "string",
      "description": "filter for subset of people matching supplied keyword/phrase (boolean operators permitted)"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/nitro"
}
```
## Operation: listPips
Look inside pips entities

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "page": {
      "type": "integer",
      "description": "which page of results to return",
      "minimum": 1
    },
    "page_size": {
      "type": "integer",
      "description": "number of results in each page",
      "maximum": 300
    },
    "q": {
      "type": "string",
      "description": "filter for subset of programmes matching supplied keyword/phrase (boolean operators permitted)"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/nitro"
}
```
## Operation: listProgrammeDetails
Exposes programme information for a single pid

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "page": {
      "type": "integer",
      "description": "which page of results to return",
      "minimum": 1
    },
    "page_size": {
      "type": "integer",
      "description": "number of results in each page",
      "maximum": 300
    },
    "partner_pid": {
      "type": "string",
      "description": "Filter for programme information by partner PID",
      "pattern": "^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$",
      "minLength": 8
    },
    "pid": {
      "type": "string",
      "description": "Filter for programme information for the provided PID",
      "pattern": "^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$",
      "minLength": 8
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/nitro"
}
```
## Operation: listProgrammes
Fetch metadata about Programmes (brands, series, episodes, clips). By applying different filter restrictions this feed can be used in many ways, for example to retrieve all series belonging to a brand, all the episodes and/or clips for a specific series, or any TLEO objects for a masterbrand. Other filters permit restricting to specific formats and/or genres, and you can request specific versions (for example Signed or Audio-Described). Parameters may be combined in any way suitable for your application.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "sort": {
      "type": "string",
      "description": "Sorts:\n* group_position: sort numerically by position in group, ascending\n* pid: sort alphabetically by PID, descending\n* position: sort numerically by position, ascending\n* promotion: sort by promotion rank, ascending\n* release_date: sort chronologically by release date, descending\n* relevance: sort by weighting of search term (use with q parameter)\n* scheduled_start: sort chronologically by scheduled start time/date, ascending\n* strict_title: sort alphabetically by title, ascending\n* title: sort by title librarian style (ignoring leading 'The', 'A', etc), ascending\n* tree: sort by root pid and then preorder tree sort. Requires entities to have release date.\n",
      "enum": [
        "group_position",
        "pid",
        "position",
        "promotion",
        "release_date",
        "relevance",
        "scheduled_start",
        "strict_title",
        "title",
        "tree"
      ]
    },
    "sort_direction": {
      "type": "string",
      "description": "Sort direction",
      "enum": [
        "ascending",
        "descending"
      ]
    },
    "mixin": {
      "type": "array",
      "description": "Mixins:\n* alternate_images: mixin to return the alternate images for a programme\n* ancestor_titles: mixin to return ancestor programme titles\n* availability: mixin to return programme availability information\n* available_simulcasts: mixin to return information about programmes that are currently available as simulcasts\n* available_versions: mixin to return information about programmes that are currently available on demand\n* available_webcasts: mixin to return information about programmes that are currently available as webcasts\n* contributions: mixin to return information about contributors to a programme\n* duration: mixin to return original version duration in programme concept entities\n* genre_groupings: mixin to return list of genre groupings\n* genre_groups: mixin to return list of genre groups\n* images: mixin to add image information for a programme\n* is_embeddable: mixin to add embeddable information for a programme\n* previous_next: mixin to return the programmes which appear before and after a programme (as determined by the sort applied in the request)\n* related_links: mixin to return information about related links to a programme\n* titles: mixin to return ancestor programme titles\n* versions_availability: mixin to return information about programmes that are currently available\n",
      "enum": [
        "alternate_images",
        "ancestor_titles",
        "availability",
        "available_simulcasts",
        "available_versions",
        "available_webcasts",
        "contributions",
        "duration",
        "genre_groupings",
        "genre_groups",
        "images",
        "is_embeddable",
        "previous_next",
        "related_links",
        "titles",
        "versions_availability"
      ]
    },
    "audio_described": {
      "type": "array",
      "description": "filter for subset of programmes that are audio-described",
      "enum": [
        "true",
        "false"
      ]
    },
    "availability": {
      "type": "array",
      "description": "filter for subset of programmes that have availability",
      "enum": [
        "available",
        "pending"
      ]
    },
    "availability_entity_type": {
      "type": "array",
      "description": "additional filter when availability=available",
      "enum": [
        "episode",
        "clip"
      ]
    },
    "availability_from": {
      "type": "string",
      "format": "date-time",
      "description": "filter for subset of programmes that are available after or at the specified datetime"
    },
    "availability_type": {
      "type": "array",
      "description": "filter for a subset of programmes that are available for a given type",
      "enum": [
        "ondemand",
        "webcast",
        "simulcast"
      ]
    },
    "children_of": {
      "type": "array",
      "description": "filter for subset of programmes that have PID as immediate parent"
    },
    "descendants_of": {
      "type": "array",
      "description": "filter for subset of programmes that have PID as ancestor"
    },
    "duration": {
      "type": "array",
      "description": "filter for subset of programmes that have given duration",
      "enum": [
        "short",
        "medium",
        "long"
      ]
    },
    "entity_type": {
      "type": "array",
      "description": "filter for subset of programmes that have given entity type",
      "enum": [
        "brand",
        "series",
        "episode",
        "clip"
      ]
    },
    "format": {
      "type": "array",
      "description": "filter for subset of programmes with format"
    },
    "genre": {
      "type": "array",
      "description": "filter for subset of programmes with genre"
    },
    "group": {
      "type": "string",
      "description": "filter for subset of programmes which belong to the given group pid",
      "pattern": "^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$",
      "minLength": 8
    },
    "initial_letter": {
      "type": "string",
      "description": "filter for subset of programmes with title beginning with initial letter librarian style (ignoring leading 'The', 'An' (Welsh), etc) 0-9 a-z",
      "maxLength": 1,
      "minLength": 1
    },
    "initial_letter_end": {
      "type": "string",
      "description": "Programmes with (librarian) titles whose initial letter is equal/before given letter. Use with initial_letter_start for a range",
      "maxLength": 1,
      "minLength": 1
    },
    "initial_letter_start": {
      "type": "string",
      "description": "Programmes with (librarian) titles whose initial letter is equal/after given letter. Use with initial_letter_end for range.",
      "maxLength": 1,
      "minLength": 1
    },
    "initial_letter_strict": {
      "type": "array",
      "description": "filter for subset of programmes with title beginning with initial letter"
    },
    "item": {
      "type": "array",
      "description": "filter for subset of programmes with linked to versions which have the given item pids"
    },
    "master_brand": {
      "type": "array",
      "description": "filter for subset of programmes with master_brand"
    },
    "media_set": {
      "type": "string",
      "description": "filter for subset of programmes with media set"
    },
    "media_type": {
      "type": "array",
      "description": "filter for subset of programmes with media type",
      "enum": [
        "audio",
        "audio_video"
      ]
    },
    "page": {
      "type": "integer",
      "description": "which page of results to return",
      "minimum": 1
    },
    "page_size": {
      "type": "integer",
      "description": "number of results in each page",
      "maximum": 300
    },
    "partner_id": {
      "type": "array",
      "description": "filter for programmes by partner ID"
    },
    "partner_pid": {
      "type": "array",
      "description": "filter for programmes by partner PID"
    },
    "payment_type": {
      "type": "array",
      "description": "filter for a subset of programmes that are of the given payment_type",
      "enum": [
        "free",
        "bbcstore",
        "uscansvod"
      ]
    },
    "people": {
      "type": "string",
      "description": "filter for subset of programmes with contributions by given people PID",
      "pattern": "^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$",
      "minLength": 8
    },
    "pid": {
      "type": "array",
      "description": "filter for subset of programmes having given PID"
    },
    "promoted_for": {
      "type": "string",
      "description": "filter for subset of programmes which are promoted for given service"
    },
    "q": {
      "type": "string",
      "description": "filter for subset of programmes matching supplied keyword/phrase (boolean operators permitted)"
    },
    "signed": {
      "type": "array",
      "description": "filter for subset of programmes that are signed",
      "enum": [
        "exclusive",
        "inclusive",
        "exclude"
      ]
    },
    "tag_name": {
      "type": "string",
      "description": "filter for subset of programmes with tag"
    },
    "tag_scheme": {
      "type": "string",
      "description": "filter for subset of programmes with a tag"
    },
    "tleo": {
      "type": "array",
      "description": "filter for subset of programmes that are TLEOs",
      "enum": [
        "true",
        "false"
      ]
    },
    "version": {
      "type": "array",
      "description": "filter for subset of programmes with given PID as one of their versions"
    },
    "embargoed": {
      "type": "string",
      "description": "Control return of embargoed items (undocumented)",
      "enum": [
        "include",
        "exclude",
        "only"
      ]
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/nitro"
}
```
## Operation: listPromotions
Details of short-term editorially curated "promotions", for instance those programmes featured on iPlayer today

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "mixin": {
      "type": "array",
      "description": "Mixins:\n* related_links: mixin to return information about related links to a promotion\n",
      "enum": [
        "related_links"
      ]
    },
    "context": {
      "type": "string",
      "description": "filter for subset of promotions belonging to a given context",
      "pattern": "^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$",
      "minLength": 8
    },
    "page": {
      "type": "integer",
      "description": "which page of results to return",
      "minimum": 1
    },
    "page_size": {
      "type": "integer",
      "description": "number of results in each page",
      "maximum": 300
    },
    "partner_id": {
      "type": "array",
      "description": "filter for promotions by partner ID"
    },
    "partner_pid": {
      "type": "array",
      "description": "filter for promotions by partner PID"
    },
    "pid": {
      "type": "array",
      "description": "filter for subset of promotions having given PID"
    },
    "promoted_by": {
      "type": "array",
      "description": "filter for subset of promotions having given promoted by"
    },
    "promoted_for": {
      "type": "array",
      "description": "filter for subset of promotions having given promoted for"
    },
    "q": {
      "type": "string",
      "description": "filter for subset of promotions matching supplied keyword/phrase (boolean operators permitted)"
    },
    "status": {
      "type": "array",
      "description": "filter for subset of promotions with status",
      "enum": [
        "current"
      ]
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/nitro"
}
```
## Operation: listSchedules
Dates, Times, Schedules: when and where are programmes being shown?

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "sort": {
      "type": "string",
      "description": "Sorts:\n* start_date: sort chronologically by scheduled start time/date, ascending\n",
      "enum": [
        "start_date"
      ]
    },
    "sort_direction": {
      "type": "string",
      "description": "Sort direction",
      "enum": [
        "ascending",
        "descending"
      ]
    },
    "mixin": {
      "type": "array",
      "description": "Mixins:\n* ancestor_titles: return ancestor programme titles\n* images: mixin to add image information for broadcasts and webcasts\n* titles: return ancestor programme titles\n",
      "enum": [
        "ancestor_titles",
        "images",
        "titles"
      ]
    },
    "authority": {
      "type": "array",
      "description": "filter for subset of broadcasts and webcasts that have given authority"
    },
    "descendants_of": {
      "type": "array",
      "description": "filter for subset of broadcasts and webcasts that are descendants of the given programme PID"
    },
    "end_from": {
      "type": "string",
      "format": "date-time",
      "description": "filter for subset of broadcasts and webcasts that end on or later than the specified datetime"
    },
    "end_to": {
      "type": "string",
      "format": "date-time",
      "description": "filter for subset of broadcasts and webcasts that end on or earlier than the specified datetime"
    },
    "format": {
      "type": "array",
      "description": "filter for subset of broadcasts and webcasts that are classified in the given format ID"
    },
    "genre": {
      "type": "array",
      "description": "filter for subset of broadcasts and webcasts that are classified in the given genre ID"
    },
    "group": {
      "type": "string",
      "description": "filter for subset of broadcasts and webcasts that have programmes in the given group",
      "pattern": "^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$",
      "minLength": 8
    },
    "id": {
      "type": "array",
      "description": "filter for subset of broadcasts and webcasts that have given identifier"
    },
    "id_type": {
      "type": "array",
      "description": "filter for subset of broadcasts and webcasts that have given id type"
    },
    "item": {
      "type": "array",
      "description": "filter for subset of broadcasts and webcasts with the given item performed on it"
    },
    "page": {
      "type": "integer",
      "description": "which page of results to return",
      "minimum": 1
    },
    "page_size": {
      "type": "integer",
      "description": "number of results in each page",
      "maximum": 300
    },
    "partner_id": {
      "type": "array",
      "description": "filter for broadcasts and webcasts by partner ID"
    },
    "partner_pid": {
      "type": "array",
      "description": "filter for broadcasts and webcasts by partner PID"
    },
    "people": {
      "type": "string",
      "description": "filter for subset of broadcasts and webcasts that have given contributor"
    },
    "pid": {
      "type": "array",
      "description": "filter for subset of broadcasts and webcasts having given PID"
    },
    "q": {
      "type": "string",
      "description": "filter for subset of broadcasts and webcasts matching supplied keyword/phrase (boolean operators permitted)"
    },
    "repeat": {
      "type": "boolean",
      "description": "filter to show either only repeats or non-repeats"
    },
    "schedule_day": {
      "type": "string",
      "format": "date",
      "description": "filter for subset of broadcasts and webcasts that start on the specified day (BBC time)"
    },
    "schedule_day_from": {
      "type": "string",
      "format": "date",
      "description": "filter for subset of broadcasts and webcasts that start on or after the specified day (BBC time)"
    },
    "schedule_day_to": {
      "type": "string",
      "format": "date",
      "description": "filter for subset of broadcasts and webcasts that start on or before the specified day (BBC time)"
    },
    "service_master_brand": {
      "type": "array",
      "description": "filter for subset of broadcasts and webcasts with given service master brand"
    },
    "sid": {
      "type": "array",
      "description": "filter for subset of broadcasts and webcasts that are on the specified linear service"
    },
    "start_from": {
      "type": "string",
      "format": "date-time",
      "description": "filter for subset of broadcasts and webcasts that start on or later than the specified datetime"
    },
    "start_to": {
      "type": "string",
      "format": "date-time",
      "description": "filter for subset of broadcasts and webcasts that start on or earlier than the specified datetime"
    },
    "version": {
      "type": "array",
      "description": "filter for subset of broadcasts and webcasts with given PID as their parent version"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/nitro"
}
```
## Operation: getXSD
Get Schema definition

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: listServices
The services feed exposes the linear broadcast "services" from PIPs. These are the actual services which broadcast programmes (eg bbc_one_oxford is the service for BBC One in Oxford).

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "end_from": {
      "type": "string",
      "format": "date-time",
      "description": "Return services that end on or later than the specified datetime"
    },
    "end_to": {
      "type": "string",
      "format": "date-time",
      "description": "filter for subset of broadcasts that end on or earlier than the specified datetime"
    },
    "mid": {
      "type": "array",
      "description": "filter for services by masterbrand MID"
    },
    "page": {
      "type": "integer",
      "description": "which page of results to return",
      "minimum": 1
    },
    "page_size": {
      "type": "integer",
      "description": "number of results in each page",
      "maximum": 300
    },
    "partner_id": {
      "type": "array",
      "description": "filter for services by partner ID"
    },
    "partner_pid": {
      "type": "array",
      "description": "filter for services by partner PID"
    },
    "q": {
      "type": "string",
      "description": "filter for subset of services matching supplied keyword/phrase (boolean operators permitted)"
    },
    "service_type": {
      "type": "array",
      "description": "filter for specified type of linear services",
      "enum": [
        "Interactive",
        "Local Radio",
        "Master Brand Only",
        "National Radio",
        "On Demand",
        "Regional Radio",
        "Simulcast",
        "TV",
        "Web Only",
        "Webcast"
      ]
    },
    "sid": {
      "type": "array",
      "description": "filter for specified linear service"
    },
    "start_from": {
      "type": "string",
      "format": "date-time",
      "description": "Return services that start on or later than the specified datetime"
    },
    "start_to": {
      "type": "string",
      "format": "date-time",
      "description": "Return services that start earlier than the specified datetime"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/nitro"
}
```
## Operation: Get_Raw_brand
Get raw brand

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "pid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "pid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/nitro"
}
```
## Operation: v1.brands.pid.franchises.get
Get raw brand franchises

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "pid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "pid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/nitro"
}
```
## Operation: Get_Raw_episode
Get raw episode

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "pid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "pid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/nitro"
}
```
## Operation: Get_Raw_ancestors
Get raw ancestors

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "pid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "pid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/nitro"
}
```
## Operation: Get_Raw_formats
Get raw formats

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "pid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "pid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/nitro"
}
```
## Operation: Get_Raw_genre_groups
Get raw genre groups

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "pid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "pid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/nitro"
}
```
## Operation: Get_Raw_image
Get raw image

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "pid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "pid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/nitro"
}
```
## Operation: Get_Raw_masterbrand
Get raw masterbrand

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "mbid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "mbid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/nitro"
}
```
## Operation: Get_Raw_promotion
Get raw promotion

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "pid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "pid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/nitro"
}
```
## Operation: listVersions
The versions feed exposes editorial "Versions" of programmes. These are concepts used to capture different presentations of an overall programme: for example, versions of a programme may include one with sign language, one with audio description, one edited for content and more. Versions are also important to understand for broadcasts: a linear broadcast or an ondemand is always of a specific version, not merely of a programme.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "availability": {
      "type": "array",
      "description": "filter for subset of versions that have availability",
      "enum": [
        "available"
      ]
    },
    "descendants_of": {
      "type": "array",
      "description": "filter for subset of versions having given programme PID"
    },
    "media_set": {
      "type": "array",
      "description": "filter for subset of versions with availability in the given media set"
    },
    "page": {
      "type": "integer",
      "description": "which page of results to return",
      "minimum": 1
    },
    "page_size": {
      "type": "integer",
      "description": "number of results in each page",
      "maximum": 300
    },
    "partner_id": {
      "type": "array",
      "description": "filter for versions by partner ID"
    },
    "partner_pid": {
      "type": "array",
      "description": "filter for versions by partner PID"
    },
    "payment_type": {
      "type": "array",
      "description": "filter for a subset of versions that are of the given payment_type",
      "enum": [
        "free",
        "bbcstore",
        "uscansvod"
      ]
    },
    "pid": {
      "type": "array",
      "description": "filter for subset of versions having given PID"
    },
    "embargoed": {
      "type": "string",
      "description": "Control return of embargoed items (undocumented)",
      "enum": [
        "include",
        "exclude",
        "only"
      ]
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/nitro"
}
```
